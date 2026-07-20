(() => {
  const list = document.getElementById('supplier-list');
  const filter = document.getElementById('region-filter');
  const suppliers = (window.CIG?.suppliers || []).filter(s => s.public);
  const esc = window.CIG_ESC || (x => x);
  const regions = [...new Set(suppliers.map(s=>s.region))];
  filter.innerHTML += regions.map(r=>`<option>${esc(r)}</option>`).join('');
  let map, markers=[];
  function drawList(rows){
    list.innerHTML = rows.length ? rows.map(s=>`<article class="supplier-item"><h3>${esc(s.name)}</h3><p><strong>${esc(s.region)}</strong></p><p>${esc(s.summary)}</p></article>`).join('') : '<div class="empty-state"><h3>Tidak ada wilayah</h3></div>';
  }
  function drawMap(rows){
    if (!window.L) { document.getElementById('supplier-map').innerHTML='<div class="empty-state"><h3>Peta tidak tersedia</h3><p>Daftar wilayah tetap dapat dilihat di sebelah peta.</p></div>'; return; }
    if (!map) {
      map=L.map('supplier-map',{scrollWheelZoom:false}).setView([-2.5,118],4.5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
    }
    markers.forEach(m=>map.removeLayer(m)); markers=[];
    rows.forEach(s=>{
      const marker=L.marker([s.lat,s.lng]).addTo(map).bindPopup(`<strong>${esc(s.name)}</strong><br>${esc(s.region)}<br><small>${esc(s.summary)}</small>`);
      markers.push(marker);
    });
    if (markers.length) { const group=L.featureGroup(markers); map.fitBounds(group.getBounds().pad(.7),{maxZoom:6}); }
  }
  function render(){ const region=filter.value; const rows=suppliers.filter(s=>!region||s.region===region); drawList(rows); drawMap(rows); }
  filter.addEventListener('change',render); render();
})();
