(() => {
  'use strict';
  const ACCOUNTS = {
    'admin@cig.demo': {password:'DemoAdmin2026!', role:'Administrator'},
    'editor@cig.demo': {password:'DemoEditor2026!', role:'Editor'}
  };
  const esc = (value='') => String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const slugify = (s='') => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
  const clone = x => JSON.parse(JSON.stringify(x));
  function getStored(){ try { return JSON.parse(localStorage.getItem('cig_demo_data')||'{}'); } catch { return {}; } }
  function getData(){ const base=clone(window.CIG_DATA||{}); const stored=getStored(); return {...base,...stored,settings:{...(base.settings||{}),...(stored.settings||{})}}; }
  function saveData(data){ localStorage.setItem('cig_demo_data',JSON.stringify(data)); }
  function currentUser(){ try{return JSON.parse(sessionStorage.getItem('cig_demo_session')||'null')}catch{return null} }
  function toast(message){ const n=document.createElement('div'); n.className='toast'; n.textContent=message; document.body.appendChild(n); setTimeout(()=>n.remove(),2800); }
  function loginPage(){
    const form=document.getElementById('login-form'); if(!form) return false;
    if(currentUser()) location.href='dashboard.html';
    form.addEventListener('submit',e=>{e.preventDefault(); const email=form.email.value.trim().toLowerCase(); const password=form.password.value; const found=ACCOUNTS[email]; const error=document.getElementById('login-error'); if(!found||found.password!==password){error.textContent='Email atau kata sandi demo tidak sesuai.';return;} sessionStorage.setItem('cig_demo_session',JSON.stringify({email,role:found.role,loginAt:new Date().toISOString()})); location.href='dashboard.html';}); return true;
  }
  if(loginPage()) return;

  const user=currentUser();
  if(!user){ location.href='index.html'; return; }
  const isAdmin=user.role==='Administrator';
  document.getElementById('role-badge').textContent=`${user.role} · ${user.email}`;
  document.querySelectorAll('[data-admin-only]').forEach(n=>{if(!isAdmin)n.remove();});
  document.getElementById('logout').addEventListener('click',()=>{sessionStorage.removeItem('cig_demo_session');location.href='index.html';});
  document.getElementById('sidebar-toggle')?.addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('open'));

  let data=getData();
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
  document.querySelectorAll('[data-open-form]').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.openForm)));
  document.getElementById('modal-close').addEventListener('click',closeModal); document.getElementById('modal-cancel').addEventListener('click',closeModal); modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});

  form.addEventListener('submit',e=>{
    e.preventDefault(); const fd=Object.fromEntries(new FormData(form).entries()); const entity=fd.entity,id=fd.id; delete fd.entity; delete fd.id;
    const collection=entity+'s'; const arr=[...(data[collection]||[])]; const existing=id?arr.find(x=>x.id===id):null;
    let item={...existing,...fd};
    if(entity==='product'){item.id=id||`prd-${Date.now()}`;item.slug=existing?.slug||slugify(fd.name);item.description=existing?.description||'Deskripsi produk demo dapat dilengkapi melalui CMS produksi.';item.specs=existing?.specs||[['Status','Konten demo — perlu verifikasi']];item.brochure='#';item.featured=true;}
    if(entity==='article'){item.id=id||`art-${Date.now()}`;item.slug=existing?.slug||slugify(fd.title);item.content=existing?.content||`<p>${esc(fd.excerpt)}</p><p>Isi artikel demo dapat dikembangkan melalui editor WYSIWYG pada CMS produksi.</p>`;item.tags=existing?.tags||[];}
    if(entity==='supplier'){item.id=id||`sup-${Date.now()}`;item.lat=Number(fd.lat);item.lng=Number(fd.lng);item.public=fd.public==='true';}
    if(id) arr[arr.findIndex(x=>x.id===id)]=item; else arr.unshift(item);
    data[collection]=arr; saveData(data); closeModal(); renderAll(); toast(`${entity} berhasil disimpan.`);
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

  document.addEventListener('click',e=>{
    const b=e.target.closest('[data-action]'); if(!b)return; const entity=b.dataset.entity,id=b.dataset.id,action=b.dataset.action; const collection=entity+'s';
    if(action==='edit'){openModal(entity,id);return;}
    if(action==='delete'){if(!confirm('Hapus data ini dari prototype?'))return; data[collection]=(data[collection]||[]).filter(x=>x.id!==id);saveData(data);renderAll();toast('Data dihapus.');return;}
    const item=(data[collection]||[]).find(x=>x.id===id); if(!item)return;
    if(action==='toggle'){ if(entity==='supplier')item.public=!item.public; else item.status=item.status==='published'?'draft':'published'; saveData(data);renderAll();toast('Status diperbarui.'); }
    if(action==='complete'){item.status='Selesai';saveData(data);renderAll();toast('Pesan ditandai selesai.');}
  });

  document.getElementById('settings-form')?.addEventListener('submit',e=>{e.preventDefault(); if(!isAdmin)return; data.settings={...(data.settings||{}),...Object.fromEntries(new FormData(e.currentTarget).entries())};saveData(data);toast('Pengaturan disimpan. Muat ulang website untuk melihat perubahan.');});
  document.getElementById('export-messages')?.addEventListener('click',()=>{
    const rows=data.messages||[]; if(!rows.length){toast('Belum ada pesan untuk diekspor.');return;}
    const cols=['name','email','company','phone','subject','message','status','createdAt']; const csv=[cols.join(','),...rows.map(r=>cols.map(k=>`"${String(r[k]||'').replace(/"/g,'""')}"`).join(','))].join('\n'); const blob=new Blob([csv],{type:'text/csv;charset=utf-8'}); const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='pesan-kontak-demo.csv';a.click();URL.revokeObjectURL(a.href);
  });
})();
