(async () => {
  'use strict';
  const supabase = window.CIG_SUPABASE;
  const esc = (value='') => String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const slugify = (s='') => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
  const clone = x => JSON.parse(JSON.stringify(x));
  function getStored(){ try { return JSON.parse(localStorage.getItem('cig_demo_data')||'{}'); } catch { return {}; } }
  function getData(){ const base=clone(window.CIG_DATA||{}); const stored=getStored(); return {...base,...stored,settings:{...(base.settings||{}),...(stored.settings||{})}}; }
  function saveData(data){ localStorage.setItem('cig_demo_data',JSON.stringify(data)); }

  async function loadOnlineData() {
  const [
    productsResult,
    articlesResult,
    suppliersResult,
    messagesResult,
    contactResult
  ] = await Promise.all([
    supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false }),

    supabase
      .from('articles')
      .select('*')
      .order('published_at', { ascending: false }),

    supabase
      .from('suppliers')
      .select('*')
      .order('created_at', { ascending: false }),

    supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false }),

    supabase
      .from('site_contact')
      .select('*')
      .eq('id', 1)
      .maybeSingle()
  ]);

  const firstError = [
    productsResult.error,
    articlesResult.error,
    suppliersResult.error,
    messagesResult.error,
    contactResult.error
  ].find(Boolean);

  if (firstError) {
    throw firstError;
  }

  return {
    products: (productsResult.data || []).map(product => ({
      ...product,
      image: product.image_url,
      specs: product.specifications || [],
      brochure: '#'
    })),

    articles: (articlesResult.data || []).map(article => ({
      ...article,
      date: article.published_at,
      image: article.image_url,
      tags: article.tags || []
    })),

    suppliers: (suppliersResult.data || []).map(supplier => ({
      ...supplier,
      lat: supplier.latitude,
      lng: supplier.longitude,
      public: supplier.is_published
    })),

    messages: (messagesResult.data || []).map(message => ({
      ...message,
      createdAt: message.created_at
    })),

    settings: {
      email: contactResult.data?.email || '',
      phoneDisplay:
        contactResult.data?.phone_display || '',
      whatsapp: contactResult.data?.whatsapp || '',
      address: contactResult.data?.address || ''
    },

    portfolios: window.CIG_DATA?.portfolios || []
  };
}
  
  async function getAuthContext() {
  const {
    data: { session },
    error: sessionError
  } = await supabase.auth.getSession();

  if (sessionError) {
    throw sessionError;
  }

  if (!session?.user) {
    return null;
  }

  const { data: profile, error: profileError } = await supabase
    .from('user_profiles')
    .select('full_name, role')
    .eq('id', session.user.id)
    .single();

  if (profileError) {
    throw profileError;
  }

  if (!['admin', 'editor'].includes(profile.role)) {
    await supabase.auth.signOut();
    throw new Error('Akun ini tidak memiliki akses ke CMS.');
  }

  return {
    email: session.user.email,
    fullName: profile.full_name || session.user.email,
    role: profile.role
  };
}
  function toast(message){ const n=document.createElement('div'); n.className='toast'; n.textContent=message; document.body.appendChild(n); setTimeout(()=>n.remove(),2800); }
  async function loginPage() {
  const form = document.getElementById('login-form');

  if (!form) {
    return false;
  }

  const error = document.getElementById('login-error');
  const submitButton =
    form.querySelector('button[type="submit"]');

  try {
    const authContext = await getAuthContext();

    if (authContext) {
      location.href = 'dashboard.html';
      return true;
    }
  } catch (loginCheckError) {
    console.error(loginCheckError);
  }

  form.addEventListener('submit', async event => {
    event.preventDefault();

    error.textContent = '';
    submitButton.disabled = true;
    submitButton.textContent = 'Memproses...';

    const email =
      form.email.value.trim().toLowerCase();
    const password = form.password.value;

    const { error: signInError } =
      await supabase.auth.signInWithPassword({
        email,
        password
      });

    if (signInError) {
      error.textContent =
        'Email atau kata sandi tidak sesuai.';
      submitButton.disabled = false;
      submitButton.textContent = 'Masuk';
      return;
    }

    try {
      await getAuthContext();
      location.href = 'dashboard.html';
    } catch (accessError) {
      error.textContent = accessError.message;
      submitButton.disabled = false;
      submitButton.textContent = 'Masuk';
    }
  });

  return true;
}

if (await loginPage()) {
  return;
}

  let user;

try {
  user = await getAuthContext();
} catch (authError) {
  console.error(authError);
  await supabase.auth.signOut();
  location.href = 'index.html';
  return;
}

if (!user) {
  location.href = 'index.html';
  return;
}

const isAdmin = user.role === 'admin';
const roleLabel = isAdmin
  ? 'Administrator'
  : 'Editor';

document.getElementById('role-badge').textContent =
  `${roleLabel} · ${user.email}`;

document
  .querySelectorAll('[data-admin-only]')
  .forEach(element => {
    if (!isAdmin) {
      element.remove();
    }
  });

document
  .getElementById('logout')
  .addEventListener('click', async () => {
    await supabase.auth.signOut();
    location.href = 'index.html';
  });
  document.getElementById('sidebar-toggle')?.addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('open'));

  let data;

try {
  data = await loadOnlineData();
} catch (dataError) {
  console.error(dataError);
  alert(
    'Data online gagal dimuat. Silakan muat ulang halaman.'
  );
  return;
}
  const views=document.querySelectorAll('.view');
  document.querySelectorAll('[data-view]').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b===btn));
    views.forEach(v=>v.classList.toggle('active',v.id===`view-${btn.dataset.view}`));
    document.getElementById('top-title').textContent=btn.textContent.trim();
    document.getElementById('sidebar').classList.remove('open');
  }));

  const modal=document.getElementById('entity-modal'), modalTitle=document.getElementById('modal-title'), fields=document.getElementById('entity-fields'), form=document.getElementById('entity-form');
  function openModal(entity,id=''){
    const item=id ? (data[entity+'s']||[]).find(x=>x.id===id) : null;
    form.entity.value=entity; form.id.value=id;
    const names={product:'Produk',article:'Artikel',supplier:'Supplier'};
    modalTitle.textContent=`${item?'Edit':'Tambah'} ${names[entity]}`;
    if(entity==='product') fields.innerHTML=`<div class="form-grid"><div class="field"><label>Nama *</label><input name="name" required maxlength="120" value="${esc(item?.name||'')}"></div><div class="field"><label>Kategori *</label><input name="category" required maxlength="80" value="${esc(item?.category||'Cengkeh Kering')}"></div><div class="field full"><label>Ringkasan *</label><textarea name="summary" required maxlength="400">${esc(item?.summary||'')}</textarea></div><div class="field"><label>Ilustrasi</label><select name="image"><option value="assets/images/clove-dry.svg">Cengkeh kering</option><option value="assets/images/clove-oil.svg">Minyak cengkeh</option><option value="assets/images/clove-stem.svg">Tangkai cengkeh</option></select></div><div class="field"><label>Status</label><select name="status"><option value="published">Published</option><option value="draft">Draft</option></select></div></div>`;
    if(entity==='article') fields.innerHTML=`<div class="form-grid"><div class="field full"><label>Judul *</label><input name="title" required maxlength="180" value="${esc(item?.title||'')}"></div><div class="field"><label>Kategori *</label><input name="category" required maxlength="80" value="${esc(item?.category||'Edukasi')}"></div><div class="field"><label>Tanggal</label><input name="date" type="date" value="${esc(item?.date||new Date().toISOString().slice(0,10))}"></div><div class="field full"><label>Ringkasan *</label><textarea name="excerpt" required maxlength="500">${esc(item?.excerpt||'')}</textarea></div><div class="field"><label>Ilustrasi</label><select name="image"><option value="assets/images/farm.svg">Kebun</option><option value="assets/images/quality.svg">Kualitas</option><option value="assets/images/partnership.svg">Kemitraan</option></select></div><div class="field"><label>Status</label><select name="status"><option value="published">Published</option><option value="draft">Draft</option></select></div></div>`;
    if(entity==='supplier') fields.innerHTML=`<div class="form-grid"><div class="field"><label>Nama *</label><input name="name" required maxlength="120" value="${esc(item?.name||'')}"></div><div class="field"><label>Wilayah *</label><input name="region" required maxlength="80" value="${esc(item?.region||'')}"></div><div class="field"><label>Latitude *</label><input name="lat" type="number" step="any" min="-90" max="90" required value="${item?.lat??''}"></div><div class="field"><label>Longitude *</label><input name="lng" type="number" step="any" min="-180" max="180" required value="${item?.lng??''}"></div><div class="field full"><label>Ringkasan</label><textarea name="summary" maxlength="300">${esc(item?.summary||'Lokasi perkiraan tingkat wilayah untuk keperluan demonstrasi.')}</textarea></div><label class="field"><span>Publik</span><select name="public"><option value="true">Ya</option><option value="false">Tidak</option></select></label></div>`;
    if(item){ for(const [k,v] of Object.entries(item)){ const el=form.elements[k]; if(el){ if(el.type==='checkbox')el.checked=Boolean(v); else el.value=String(v); } } }
    modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
  }
  function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');form.reset();}

  async function saveEntityOnline(entity, id, formData) {
  let table;
  let payload;

  if (entity === 'product') {
    const existing = id
      ? data.products.find(item => item.id === id)
      : null;

    table = 'products';
    payload = {
      slug: existing?.slug || slugify(formData.name),
      name: formData.name,
      category: formData.category,
      summary: formData.summary,
      description:
        existing?.description ||
        'Deskripsi produk dapat dilengkapi melalui CMS.',
      image_url: formData.image,
      specifications:
        existing?.specs || [['Status', 'Perlu verifikasi']],
      featured: existing?.featured ?? true,
      status: formData.status
    };
  }

  if (entity === 'article') {
    const existing = id
      ? data.articles.find(item => item.id === id)
      : null;

    table = 'articles';
    payload = {
      slug: existing?.slug || slugify(formData.title),
      title: formData.title,
      category: formData.category,
      excerpt: formData.excerpt,
      content:
        existing?.content ||
        `<p>${esc(formData.excerpt)}</p>`,
      image_url: formData.image,
      tags: existing?.tags || [],
      published_at: formData.date,
      status: formData.status
    };
  }

  if (entity === 'supplier') {
    table = 'suppliers';
    payload = {
      name: formData.name,
      region: formData.region,
      latitude: Number(formData.lat),
      longitude: Number(formData.lng),
      summary: formData.summary,
      is_published: formData.public === 'true'
    };
  }

  const query = id
    ? supabase.from(table).update(payload).eq('id', id)
    : supabase.from(table).insert(payload);

  const { error } = await query;

  if (error) {
    throw error;
  }

  data = await loadOnlineData();
}

  async function runEntityActionOnline(
  entity,
  id,
  action
) {
  const tableMap = {
    product: 'products',
    article: 'articles',
    supplier: 'suppliers',
    message: 'contact_messages'
  };

  const table = tableMap[entity];

  if (!table) {
    throw new Error('Jenis data tidak dikenali.');
  }

  let query;

  if (action === 'delete') {
    query = supabase
      .from(table)
      .delete()
      .eq('id', id);
  }

  if (action === 'toggle') {
    const collection = `${entity}s`;
    const item = data[collection]?.find(
      entry => entry.id === id
    );

    if (!item) {
      throw new Error('Data tidak ditemukan.');
    }

    const payload =
      entity === 'supplier'
        ? { is_published: !item.public }
        : {
            status:
              item.status === 'published'
                ? 'draft'
                : 'published'
          };

    query = supabase
      .from(table)
      .update(payload)
      .eq('id', id);
  }

  if (action === 'complete') {
    query = supabase
      .from(table)
      .update({ status: 'Selesai' })
      .eq('id', id);
  }

  if (!query) {
    throw new Error('Aksi tidak dikenali.');
  }

  const { error } = await query;

  if (error) {
    throw error;
  }

  data = await loadOnlineData();
}
  
  document.querySelectorAll('[data-open-form]').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.openForm)));
  document.getElementById('modal-close').addEventListener('click',closeModal); document.getElementById('modal-cancel').addEventListener('click',closeModal); modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});

  form.addEventListener('submit', async event => {
  event.preventDefault();

  const submitButton =
    form.querySelector('button[type="submit"]');

  submitButton.disabled = true;
  submitButton.textContent = 'Menyimpan...';

  const formData =
    Object.fromEntries(new FormData(form).entries());

  const entity = formData.entity;
  const id = formData.id;

  delete formData.entity;
  delete formData.id;

  try {
    await saveEntityOnline(entity, id, formData);

    closeModal();
    renderAll();

    toast(
      `${entity} berhasil disimpan secara online.`
    );
  } catch (saveError) {
    console.error(saveError);

    alert(
      'Data gagal disimpan. Silakan coba kembali.'
    );
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Simpan';
  }
});

  function actionButton(entity,id,label,cls,action){return `<button class="btn btn-sm ${cls}" data-action="${action}" data-entity="${entity}" data-id="${esc(id)}">${label}</button>`}
  function renderProducts(){ const tbody=document.getElementById('product-table'); const rows=data.products||[]; tbody.innerHTML=rows.length?rows.map(p=>`<tr><td><strong>${esc(p.name)}</strong><br><span class="small">${esc(p.slug)}</span></td><td>${esc(p.category)}</td><td><span class="status ${p.status==='draft'?'draft':''}">${esc(p.status)}</span></td><td><div class="actions">${actionButton('product',p.id,'Edit','btn-light','edit')}${actionButton('product',p.id,p.status==='published'?'Jadikan Draft':'Publikasikan','btn-light','toggle')}${actionButton('product',p.id,'Hapus','btn-danger','delete')}</div></td></tr>`).join(''):'<tr><td colspan="4" class="empty">Belum ada produk.</td></tr>'; }
  function renderArticles(){ const tbody=document.getElementById('article-table'); const rows=data.articles||[]; tbody.innerHTML=rows.length?rows.map(a=>`<tr><td><strong>${esc(a.title)}</strong></td><td>${esc(a.category)}</td><td>${esc(a.date)}</td><td><span class="status ${a.status==='draft'?'draft':''}">${esc(a.status)}</span></td><td><div class="actions">${actionButton('article',a.id,'Edit','btn-light','edit')}${actionButton('article',a.id,a.status==='published'?'Jadikan Draft':'Publikasikan','btn-light','toggle')}${actionButton('article',a.id,'Hapus','btn-danger','delete')}</div></td></tr>`).join(''):'<tr><td colspan="5" class="empty">Belum ada artikel.</td></tr>'; }
  function renderSuppliers(){ const tbody=document.getElementById('supplier-table'); const rows=data.suppliers||[]; tbody.innerHTML=rows.length?rows.map(s=>`<tr><td><strong>${esc(s.name)}</strong></td><td>${esc(s.region)}</td><td>${s.lat}, ${s.lng}</td><td><span class="status ${!s.public?'private':''}">${s.public?'Publik':'Privat'}</span></td><td><div class="actions">${actionButton('supplier',s.id,'Edit','btn-light','edit')}${actionButton('supplier',s.id,s.public?'Sembunyikan':'Publikasikan','btn-light','toggle')}${actionButton('supplier',s.id,'Hapus','btn-danger','delete')}</div></td></tr>`).join(''):'<tr><td colspan="5" class="empty">Belum ada supplier.</td></tr>'; }
  function renderMessages(){ const tbody=document.getElementById('message-table'); const rows=data.messages||[]; tbody.innerHTML=rows.length?rows.slice().reverse().map(m=>`<tr><td><strong>${esc(m.name||'-')}</strong><br><span class="small">${esc(m.email||'')}</span></td><td>${esc(m.subject||'-')}</td><td>${m.createdAt?new Date(m.createdAt).toLocaleString('id-ID'):'-'}</td><td><span class="status">${esc(m.status||'Baru')}</span></td><td><div class="actions">${actionButton('message',m.id,'Tandai Selesai','btn-light','complete')}${actionButton('message',m.id,'Hapus','btn-danger','delete')}</div></td></tr>`).join(''):'<tr><td colspan="5" class="empty">Belum ada pesan demo.</td></tr>'; }
  function renderCounts(){document.getElementById('count-products').textContent=(data.products||[]).length;document.getElementById('count-articles').textContent=(data.articles||[]).length;document.getElementById('count-suppliers').textContent=(data.suppliers||[]).filter(x=>x.public).length;document.getElementById('count-messages').textContent=(data.messages||[]).filter(x=>(x.status||'Baru')==='Baru').length;}
  function fillSettings(){ const f=document.getElementById('settings-form'); if(!f)return; for(const [k,v] of Object.entries(data.settings||{})){if(f.elements[k])f.elements[k].value=v||'';} }
  function renderAll(){renderProducts();renderArticles();renderSuppliers();renderMessages();renderCounts();fillSettings();}
  renderAll();

  document.addEventListener('click', async event => {
  const button =
    event.target.closest('[data-action]');

  if (!button) {
    return;
  }

  const entity = button.dataset.entity;
  const id = button.dataset.id;
  const action = button.dataset.action;

  if (action === 'edit') {
    openModal(entity, id);
    return;
  }

  if (
    action === 'delete' &&
    !confirm('Hapus data ini secara permanen?')
  ) {
    return;
  }

  button.disabled = true;

  try {
    await runEntityActionOnline(
      entity,
      id,
      action
    );

    renderAll();

    const notifications = {
      delete: 'Data berhasil dihapus.',
      toggle: 'Status berhasil diperbarui.',
      complete: 'Pesan ditandai selesai.'
    };

    toast(
      notifications[action] ||
      'Aksi berhasil dijalankan.'
    );
  } catch (actionError) {
    console.error(actionError);

    alert(
      'Aksi gagal dijalankan. Silakan coba kembali.'
    );
  } finally {
    button.disabled = false;
  }
});

  document
  .getElementById('settings-form')
  ?.addEventListener('submit', async event => {
    event.preventDefault();

    if (!isAdmin) {
      return;
    }

    const formElement = event.currentTarget;
    const submitButton =
      formElement.querySelector(
        'button[type="submit"]'
      );

    const settings =
      Object.fromEntries(
        new FormData(formElement).entries()
      );

    submitButton.disabled = true;
    submitButton.textContent = 'Menyimpan...';

    try {
      const { error } = await supabase
        .from('site_contact')
        .update({
          email: settings.email,
          phone_display: settings.phoneDisplay,
          whatsapp: settings.whatsapp,
          address: settings.address
        })
        .eq('id', 1);

      if (error) {
        throw error;
      }

      data = await loadOnlineData();
      fillSettings();

      toast(
        'Pengaturan situs berhasil disimpan secara online.'
      );
    } catch (settingsError) {
      console.error(settingsError);

      alert(
        'Pengaturan gagal disimpan. Silakan coba kembali.'
      );
    } finally {
      submitButton.disabled = false;
      submitButton.textContent =
        'Simpan Pengaturan';
    }
  });
  document.getElementById('export-messages')?.addEventListener('click',()=>{
    const rows=data.messages||[]; if(!rows.length){toast('Belum ada pesan untuk diekspor.');return;}
    const cols=['name','email','company','phone','subject','message','status','createdAt']; const csv=[cols.join(','),...rows.map(r=>cols.map(k=>`"${String(r[k]||'').replace(/"/g,'""')}"`).join(','))].join('\n'); const blob=new Blob([csv],{type:'text/csv;charset=utf-8'}); const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='pesan-kontak-demo.csv';a.click();URL.revokeObjectURL(a.href);
  });
})();
