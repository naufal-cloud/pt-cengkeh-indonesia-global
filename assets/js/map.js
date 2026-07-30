(() => {
  'use strict';

  function initSupplierMap() {
    const list =
      document.getElementById('supplier-list');

    const filter =
      document.getElementById('region-filter');

    if (!list || !filter) {
      return;
    }

    const suppliers = (
      window.CIG?.suppliers || []
    ).filter(supplier => supplier.public);

    const esc =
      window.CIG_ESC || (value => value);

    const regions = [
      ...new Set(
        suppliers.map(supplier => supplier.region)
      )
    ];

    filter.innerHTML += regions
      .map(region => (
        `<option value="${esc(region)}">
          ${esc(region)}
        </option>`
      ))
      .join('');

    let map;
    let markers = [];

    function drawList(rows) {
      list.innerHTML = rows.length
        ? rows
            .map(supplier => `
              <article class="supplier-item">
                <h3>${esc(supplier.name)}</h3>
                <p>
                  <strong>
                    ${esc(supplier.region)}
                  </strong>
                </p>
                <p>${esc(supplier.summary)}</p>
              </article>
            `)
            .join('')
        : `
          <div class="empty-state">
            <h3>Tidak ada wilayah</h3>
          </div>
        `;
    }

    function drawMap(rows) {
      const mapElement =
        document.getElementById('supplier-map');

      if (!window.L) {
        mapElement.innerHTML = `
          <div class="empty-state">
            <h3>Peta tidak tersedia</h3>
            <p>
              Daftar wilayah tetap dapat dilihat.
            </p>
          </div>
        `;

        return;
      }

      if (!map) {
        map = L
          .map('supplier-map', {
            scrollWheelZoom: false
          })
          .setView([-2.5, 118], 4.5);

        L.tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution:
              '&copy; OpenStreetMap contributors'
          }
        ).addTo(map);
      }

      markers.forEach(marker =>
        map.removeLayer(marker)
      );

      markers = [];

      rows.forEach(supplier => {
        const latitude =
          Number(supplier.lat);

        const longitude =
          Number(supplier.lng);

        if (
          !Number.isFinite(latitude) ||
          !Number.isFinite(longitude)
        ) {
          return;
        }

        const marker = L
          .marker([latitude, longitude])
          .addTo(map)
          .bindPopup(`
            <strong>
              ${esc(supplier.name)}
            </strong>
            <br>
            ${esc(supplier.region)}
            <br>
            <small>
              ${esc(supplier.summary)}
            </small>
          `);

        markers.push(marker);
      });

      if (markers.length) {
        const group =
          L.featureGroup(markers);

        map.fitBounds(
          group.getBounds().pad(0.7),
          { maxZoom: 6 }
        );
      }
    }

    function render() {
      const selectedRegion =
        filter.value;

      const rows = suppliers.filter(
        supplier =>
          !selectedRegion ||
          supplier.region === selectedRegion
      );

      drawList(rows);
      drawMap(rows);
    }

    filter.addEventListener(
      'change',
      render
    );

    render();
  }

  document.addEventListener(
    'cig:data-ready',
    initSupplierMap,
    { once: true }
  );
})();
