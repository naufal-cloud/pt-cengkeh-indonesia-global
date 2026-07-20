(() => {
  'use strict';
  const base = window.CIG_DATA || {};
  const stored = (() => { try { return JSON.parse(localStorage.getItem('cig_demo_data') || 'null'); } catch { return null; } })();
  window.CIG = stored ? {...base, ...stored} : base;

  const esc = (value='') => String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  window.CIG_ESC = esc;

  function pathPrefix() {
    return document.body.dataset.depth === '1' ? '../' : '';
  }
  const prefix = pathPrefix();

  function initHeader() {
    const button = document.querySelector('[data-menu-toggle]');
    const menu = document.querySelector('[data-menu]');
    if (button && menu) {
      button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!expanded));
        menu.classList.toggle('is-open', !expanded);
      });
    }
    document.querySelectorAll('[data-nav-link]').forEach(link => {
      const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
      const href = (link.getAttribute('href') || '').split('/').pop().toLowerCase();
      if (current === href || (current === '' && href === 'index.html')) link.setAttribute('aria-current', 'page');
    });
  }

  function toast(message, type='success') {
    let region = document.querySelector('.toast-region');
    if (!region) {
      region = document.createElement('div');
      region.className = 'toast-region';
      region.setAttribute('aria-live', 'polite');
      document.body.appendChild(region);
    }
    const node = document.createElement('div');
    node.className = `toast toast--${type}`;
    node.textContent = message;
    region.appendChild(node);
    setTimeout(() => node.remove(), 4200);
  }
  window.CIG_TOAST = toast;

  function productCard(p) {
    return `<article class="card product-card">
      <a class="card__media" href="${prefix}produk-detail.html?slug=${encodeURIComponent(p.slug)}" aria-label="Lihat ${esc(p.name)}">
        <img src="${prefix}${esc(p.image)}" alt="Ilustrasi ${esc(p.name)}" loading="lazy" width="800" height="560">
      </a>
      <div class="card__body"><span class="eyebrow">${esc(p.category)}</span><h3><a href="${prefix}produk-detail.html?slug=${encodeURIComponent(p.slug)}">${esc(p.name)}</a></h3><p>${esc(p.summary)}</p><a class="text-link" href="${prefix}produk-detail.html?slug=${encodeURIComponent(p.slug)}">Lihat detail <span aria-hidden="true">→</span></a></div>
    </article>`;
  }

  function articleCard(a) {
    const date = new Intl.DateTimeFormat('id-ID', {day:'numeric',month:'long',year:'numeric'}).format(new Date(a.date+'T00:00:00'));
    return `<article class="card article-card">
      <a class="card__media" href="${prefix}artikel-detail.html?slug=${encodeURIComponent(a.slug)}"><img src="${prefix}${esc(a.image)}" alt="Ilustrasi artikel ${esc(a.title)}" loading="lazy" width="800" height="520"></a>
      <div class="card__body"><div class="meta"><span>${esc(a.category)}</span><time datetime="${esc(a.date)}">${date}</time></div><h3><a href="${prefix}artikel-detail.html?slug=${encodeURIComponent(a.slug)}">${esc(a.title)}</a></h3><p>${esc(a.excerpt)}</p><a class="text-link" href="${prefix}artikel-detail.html?slug=${encodeURIComponent(a.slug)}">Baca artikel <span aria-hidden="true">→</span></a></div>
    </article>`;
  }

  function renderFeatured() {
    const productTarget = document.querySelector('[data-featured-products]');
    if (productTarget) productTarget.innerHTML = (window.CIG.products || []).filter(x => x.status === 'published').slice(0,3).map(productCard).join('');
    const articleTarget = document.querySelector('[data-latest-articles]');
    if (articleTarget) articleTarget.innerHTML = (window.CIG.articles || []).filter(x => x.status === 'published').sort((a,b)=>b.date.localeCompare(a.date)).slice(0,3).map(articleCard).join('');
    const portfolioTarget = document.querySelector('[data-portfolios]');
    if (portfolioTarget) portfolioTarget.innerHTML = (window.CIG.portfolios || []).map(p => `<article class="portfolio-card"><img src="${prefix}${esc(p.image)}" alt="Ilustrasi ${esc(p.title)}" loading="lazy" width="800" height="520"><div><span class="eyebrow">${esc(p.category)} · ${esc(p.year)}</span><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p></div></article>`).join('');
  }

  function initProducts() {
    const target = document.querySelector('[data-product-grid]');
    if (!target) return;
    const filter = document.querySelector('[data-product-filter]');
    const search = document.querySelector('[data-product-search]');
    const products = (window.CIG.products || []).filter(x => x.status === 'published');
    const categories = [...new Set(products.map(x => x.category))];
    if (filter) filter.innerHTML = '<option value="">Semua kategori</option>' + categories.map(c=>`<option>${esc(c)}</option>`).join('');
    const draw = () => {
      const q = (search?.value || '').toLowerCase().trim();
      const category = filter?.value || '';
      const rows = products.filter(p => (!category || p.category === category) && (!q || `${p.name} ${p.summary}`.toLowerCase().includes(q)));
      target.innerHTML = rows.length ? rows.map(productCard).join('') : '<div class="empty-state"><h3>Produk tidak ditemukan</h3><p>Ubah kata kunci atau kategori pencarian.</p></div>';
    };
    filter?.addEventListener('change', draw); search?.addEventListener('input', draw); draw();
  }

  function initProductDetail() {
    const target = document.querySelector('[data-product-detail]');
    if (!target) return;
    const slug = new URLSearchParams(location.search).get('slug');
    const p = (window.CIG.products || []).find(x => x.slug === slug && x.status === 'published');
    if (!p) { target.innerHTML = '<div class="empty-state"><h1>Produk tidak ditemukan</h1><p>Produk mungkin belum dipublikasikan.</p><a class="btn btn--primary" href="produk.html">Kembali ke katalog</a></div>'; return; }
    document.title = `${p.name} | PT Cengkeh Indonesia Global`;
    target.innerHTML = `<div class="detail-grid"><div class="detail-media"><img src="${esc(p.image)}" alt="Ilustrasi ${esc(p.name)}" width="800" height="560"></div><div><span class="eyebrow">${esc(p.category)}</span><h1>${esc(p.name)}</h1><p class="lead">${esc(p.summary)}</p><p>${esc(p.description)}</p><div class="button-row"><button class="btn btn--primary" data-whatsapp data-product-name="${esc(p.name)}">Tanyakan via WhatsApp</button><button class="btn btn--ghost" data-brochure>Unduh brosur</button></div></div></div><section class="section section--compact"><h2>Spesifikasi</h2><div class="table-wrap"><table><tbody>${p.specs.map(([k,v])=>`<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</tbody></table></div></section>`;
  }

  function initArticles() {
    const target = document.querySelector('[data-article-grid]');
    if (!target) return;
    const filter = document.querySelector('[data-article-filter]');
    const search = document.querySelector('[data-article-search]');
    const articles = (window.CIG.articles || []).filter(x => x.status === 'published').sort((a,b)=>b.date.localeCompare(a.date));
    const categories = [...new Set(articles.map(x => x.category))];
    if (filter) filter.innerHTML = '<option value="">Semua kategori</option>' + categories.map(c=>`<option>${esc(c)}</option>`).join('');
    const draw = () => {
      const q = (search?.value || '').toLowerCase().trim();
      const category = filter?.value || '';
      const rows = articles.filter(a => (!category || a.category === category) && (!q || `${a.title} ${a.excerpt} ${(a.tags||[]).join(' ')}`.toLowerCase().includes(q)));
      target.innerHTML = rows.length ? rows.map(articleCard).join('') : '<div class="empty-state"><h3>Artikel tidak ditemukan</h3><p>Coba kata kunci atau kategori lain.</p></div>';
    };
    filter?.addEventListener('change', draw); search?.addEventListener('input', draw); draw();
  }

  function initArticleDetail() {
    const target = document.querySelector('[data-article-detail]');
    if (!target) return;
    const slug = new URLSearchParams(location.search).get('slug');
    const a = (window.CIG.articles || []).find(x => x.slug === slug && x.status === 'published');
    if (!a) { target.innerHTML = '<div class="empty-state"><h1>Artikel tidak ditemukan</h1><a class="btn btn--primary" href="artikel.html">Kembali ke artikel</a></div>'; return; }
    document.title = `${a.title} | PT Cengkeh Indonesia Global`;
    const date = new Intl.DateTimeFormat('id-ID',{day:'numeric',month:'long',year:'numeric'}).format(new Date(a.date+'T00:00:00'));
    target.innerHTML = `<article class="article-detail"><header><span class="eyebrow">${esc(a.category)}</span><h1>${esc(a.title)}</h1><p class="lead">${esc(a.excerpt)}</p><time datetime="${esc(a.date)}">${date}</time></header><img class="article-hero" src="${esc(a.image)}" alt="Ilustrasi ${esc(a.title)}" width="800" height="520"><div class="prose">${a.content}</div><div class="tag-row">${(a.tags||[]).map(t=>`<span class="tag">#${esc(t)}</span>`).join('')}</div><div class="share-row"><strong>Bagikan:</strong><button class="chip" data-share="linkedin">LinkedIn</button><button class="chip" data-share="facebook">Facebook</button><button class="chip" data-share="whatsapp">WhatsApp</button></div></article>`;
  }

  function initWhatsApp() {
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-whatsapp]');
      if (!btn) return;
      const number = window.CIG.settings?.whatsapp || '';
      if (!number) { e.preventDefault(); toast('Nomor WhatsApp resmi belum dikonfigurasi pada situs demo.', 'info'); return; }
      const product = btn.dataset.productName || '';
      const message = product ? `Halo PT Cengkeh Indonesia Global, saya ingin menanyakan produk ${product}. ${location.href}` : 'Halo PT Cengkeh Indonesia Global, saya ingin memperoleh informasi lebih lanjut.';
      window.open(`https://wa.me/${number.replace(/\D/g,'')}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
    });
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-brochure]');
      if (btn) toast('Brosur PDF demo belum tersedia. File dapat diunggah melalui CMS produksi.', 'info');
    });
  }

  function initContactForm() {
    const form = document.querySelector('[data-contact-form]');
    if (!form) return;
    form.addEventListener('submit', e => {
      if (location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.protocol === 'file:') {
        e.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); return; }
        const item = Object.fromEntries(new FormData(form).entries());
        item.id = `msg-${Date.now()}`; item.status = 'Baru'; item.createdAt = new Date().toISOString();
        const data = JSON.parse(localStorage.getItem('cig_demo_data') || '{}');
        data.messages = [...(data.messages || window.CIG.messages || []), item];
        localStorage.setItem('cig_demo_data', JSON.stringify(data));
        form.reset(); toast('Pesan demo tersimpan di browser dan dapat dilihat pada CMS prototype.');
      }
    });
  }

  function initShare() {
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-share]'); if (!btn) return;
      const url = encodeURIComponent(location.href); const text = encodeURIComponent(document.title);
      const links = {linkedin:`https://www.linkedin.com/sharing/share-offsite/?url=${url}`,facebook:`https://www.facebook.com/sharer/sharer.php?u=${url}`,whatsapp:`https://wa.me/?text=${text}%20${url}`};
      window.open(links[btn.dataset.share], '_blank', 'noopener,noreferrer');
    });
  }

  function setFooterYear() { document.querySelectorAll('[data-year]').forEach(n => n.textContent = new Date().getFullYear()); }

  document.addEventListener('DOMContentLoaded', () => {
    initHeader(); renderFeatured(); initProducts(); initProductDetail(); initArticles(); initArticleDetail(); initWhatsApp(); initContactForm(); initShare(); setFooterYear();
  });
})();
