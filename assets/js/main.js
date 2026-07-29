(() => {
  'use strict';
  const base = window.CIG_DATA || {};
  const stored = (() => { try { return JSON.parse(localStorage.getItem('cig_demo_data') || 'null'); } catch { return null; } })();
  window.CIG = stored ? {...base, ...stored} : base;

  const premiumProduct = (window.CIG.products || []).find(
  product => product.slug === 'cengkeh-kering-premium'
);

if (premiumProduct) {
  premiumProduct.image = 'assets/images/produk-cengkeh-premium.webp';
}

  const articleImageUpdates = {
  'mengenal-rantai-pasok-cengkeh-indonesia':
    'assets/images/stok-cengkeh-curah.webp',

  'pentingnya-sortasi-dalam-perdagangan-komoditas':
    'assets/images/sampel-kualitas-cengkeh.webp',

  'kemitraan-supplier-yang-bertanggung-jawab':
    'assets/images/cengkeh-dengan-daun.webp'
};

(window.CIG.articles || []).forEach(article => {
  if (articleImageUpdates[article.slug]) {
    article.image = articleImageUpdates[article.slug];
  }
});

  const portfolioImageUpdates = {
  'por-001': 'assets/images/stok-cengkeh-curah.webp',
  'por-002': 'assets/images/detail-cengkeh-makro.webp',
  'por-003': 'assets/images/kemasan-cengkeh-toples.webp'
};

(window.CIG.portfolios || []).forEach(portfolio => {
  if (portfolioImageUpdates[portfolio.id]) {
    portfolio.image = portfolioImageUpdates[portfolio.id];
  }
});

  const esc = (value='') => String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  window.CIG_ESC = esc;

  async function loadPublicData() {
  const client = window.CIG_SUPABASE;

  if (!client) {
    return;
  }

  const [
    productsResult,
    articlesResult,
    suppliersResult,
    contactResult
  ] = await Promise.all([
    client
      .from('products')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false }),

    client
      .from('articles')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false }),

    client
      .from('suppliers')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false }),

    client
      .from('site_contact')
      .select('*')
      .eq('id', 1)
      .maybeSingle()
  ]);

  const firstError = [
    productsResult.error,
    articlesResult.error,
    suppliersResult.error,
    contactResult.error
  ].find(Boolean);

  if (firstError) {
    throw firstError;
  }

  window.CIG = {
    ...window.CIG,

    products: (productsResult.data || []).map(
      product => ({
        ...product,
        image: product.image_url,
        specs: product.specifications || []
      })
    ),

    articles: (articlesResult.data || []).map(
      article => ({
        ...article,
        date: article.published_at,
        image: article.image_url,
        tags: article.tags || []
      })
    ),

    suppliers: (suppliersResult.data || []).map(
      supplier => ({
        ...supplier,
        lat: supplier.latitude,
        lng: supplier.longitude,
        public: supplier.is_published
      })
    ),

    settings: {
      ...(window.CIG.settings || {}),
      email: contactResult.data?.email || '',
      phoneDisplay:
        contactResult.data?.phone_display || '',
      whatsapp:
        contactResult.data?.whatsapp || '',
      address: contactResult.data?.address || ''
    }
  };
}

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
    const date = window.CIG_I18N.formatDate(
  `${a.date}T00:00:00`
);
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
    if (filter) filter.innerHTML = '<option value="">Semua kategori</option>' + categories.map(c =>
  `<option value="${esc(c)}">${esc(c)}</option>`
).join('');
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
    const updateProductPageTitle = () => {
  const productTitle =
    target.querySelector('h1')?.textContent?.trim() || p.name;

  document.title =
    `${productTitle} | PT Cengkeh Indonesia Global`;
};

setTimeout(updateProductPageTitle, 0);

document.addEventListener(
  'cig:languagechange',
  updateProductPageTitle
);
    target.innerHTML = `<div class="detail-grid"><div class="detail-media"><img src="${esc(p.image)}" alt="Ilustrasi ${esc(p.name)}" width="800" height="560"></div><div><span class="eyebrow">${esc(p.category)}</span><h1>${esc(p.name)}</h1><p class="lead">${esc(p.summary)}</p><p>${esc(p.description)}</p><div class="button-row"><button class="btn btn--primary" data-whatsapp data-product-name="${esc(p.name)}">Tanyakan via WhatsApp</button><button class="btn btn--ghost" data-brochure>Unduh brosur</button></div></div></div><section class="section section--compact"><h2>Spesifikasi</h2><div class="table-wrap"><table><tbody>${p.specs.map(([k,v])=>`<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</tbody></table></div></section>`;
  }

  function initArticles() {
    const target = document.querySelector('[data-article-grid]');
    if (!target) return;
    const filter = document.querySelector('[data-article-filter]');
    const search = document.querySelector('[data-article-search]');
    const articles = (window.CIG.articles || []).filter(x => x.status === 'published').sort((a,b)=>b.date.localeCompare(a.date));
    const categories = [...new Set(articles.map(x => x.category))];
    if (filter) filter.innerHTML = '<option value="">Semua kategori</option>' + categories.map(c =>
  `<option value="${esc(c)}">${esc(c)}</option>`
).join('');
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
    const updateArticlePageTitle = () => {
  const articleTitle =
    target.querySelector('h1')?.textContent?.trim() || a.title;

  document.title =
    `${articleTitle} | PT Cengkeh Indonesia Global`;
};

setTimeout(updateArticlePageTitle, 0);

document.addEventListener(
  'cig:languagechange',
  updateArticlePageTitle
);
    const date = window.CIG_I18N.formatDate(
  `${a.date}T00:00:00`
);
    target.innerHTML = `<article class="article-detail"><header><span class="eyebrow">${esc(a.category)}</span><h1>${esc(a.title)}</h1><p class="lead">${esc(a.excerpt)}</p><time datetime="${esc(a.date)}">${date}</time></header><img class="article-hero" src="${esc(a.image)}" alt="Ilustrasi ${esc(a.title)}" width="800" height="520"><div class="prose">${a.content}</div><div class="tag-row">${(a.tags||[]).map(t=>`<span class="tag">#${esc(t)}</span>`).join('')}</div><div class="share-row"><strong>Bagikan:</strong><button class="chip" data-share="linkedin">LinkedIn</button><button class="chip" data-share="facebook">Facebook</button><button class="chip" data-share="whatsapp">WhatsApp</button></div></article>`;
  }

  function initWhatsApp() {
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-whatsapp]');
      if (!btn) return;
      const number = window.CIG.settings?.whatsapp || '';
      if (!number) {
  e.preventDefault();

  toast(
    window.CIG_I18N.translate(
      'toast.whatsappUnavailable'
    ),
    'info'
  );

  return;
}
      const product = btn.dataset.productName || '';
      const message = product
  ? window.CIG_I18N.translate(
      'whatsapp.productMessage',
      {
        product,
        url: location.href
      }
    )
  : window.CIG_I18N.translate(
      'whatsapp.generalMessage'
    );
      window.open(`https://wa.me/${number.replace(/\D/g,'')}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
    });
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-brochure]');
      if (btn) {
  toast(
    window.CIG_I18N.translate(
      'toast.brochureUnavailable'
    ),
    'info'
  );
}
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

  function refreshArticleDates() {
  document.querySelectorAll('time[datetime]').forEach(element => {
    element.textContent = window.CIG_I18N.formatDate(
      `${element.getAttribute('datetime')}T00:00:00`
    );
  });
}

document.addEventListener(
  'cig:languagechange',
  refreshArticleDates
);

  function setFooterYear() { document.querySelectorAll('[data-year]').forEach(n => n.textContent = new Date().getFullYear()); }

  document.addEventListener(
  'DOMContentLoaded',
  async () => {
    initHeader();

    try {
      await loadPublicData();
    } catch (publicDataError) {
      console.error(
        'Data Supabase gagal dimuat:',
        publicDataError
      );
    }

    renderFeatured();
    initProducts();
    initProductDetail();
    initArticles();
    initArticleDetail();
    initWhatsApp();
    initContactForm();
    initShare();
    setFooterYear();
  }
);
})();
