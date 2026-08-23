(async () => {
  'use strict';

  function toast(message) {
  alert(message);
}

  function toast(message){
  alert(message);
}
  
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
  brochuresResult,
  articlesResult,
  suppliersResult,
  teamResult,
  legalitiesResult,
  portfoliosResult,
  messagesResult,
  contactResult
] = await Promise.all([
    supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false }),

    supabase
  .from('product_brochures')
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
  .from('team_members')
  .select('*')
  .order('sort_order', { ascending: true }),

    supabase
  .from('legalities')
  .select('*')
  .order('sort_order', { ascending: true }),

    supabase
  .from('portfolios')
  .select('*')
  .order('sort_order', { ascending: true }),

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
    teamResult.error,
    legalitiesResult.error,
    portfoliosResult.error,
    brochuresResult.error,
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

    brochures: brochuresResult.data || [],

    articles: (articlesResult.data || []).map(article => ({
      ...article,
      date: article.published_at,
      image: article.image_url,
      image_url: article.image_url,
      tags: article.tags || []
    })),

    suppliers: (suppliersResult.data || []).map(supplier => ({
      ...supplier,
      lat: supplier.latitude,
      lng: supplier.longitude,
      public: supplier.is_published
    })),

    teams: teamResult.data || [],

    legalities: legalitiesResult.data || [],

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

    portfolios: portfoliosResult.data || []
  };
}
  
  async function getAuthContext({
    enforceAdminMfa = true
  } = {}) {
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

    const { data: profile, error: profileError } =
      await supabase
        .from('user_profiles')
        .select('full_name, role')
        .eq('id', session.user.id)
        .single();

    if (profileError) {
      throw profileError;
    }

    if (!['admin', 'editor'].includes(profile.role)) {
      await supabase.auth.signOut();
      throw new Error(
        'Akun ini tidak memiliki akses ke CMS.'
      );
    }

    if (
      enforceAdminMfa &&
      profile.role === 'admin'
    ) {
      const {
        data: aal,
        error: aalError
      } =
        await supabase.auth.mfa
          .getAuthenticatorAssuranceLevel();

      if (aalError) {
        throw aalError;
      }

      if (aal.currentLevel !== 'aal2') {
        throw new Error(
          'Administrator wajib menyelesaikan MFA.'
        );
      }
    }

    return {
      email: session.user.email,
      fullName:
        profile.full_name ||
        session.user.email,
      role: profile.role
    };
  }


  let mfaFactorId = null;

  function showLoginForm() {
    const loginForm =
      document.getElementById('login-form');

    const mfaForm =
      document.getElementById('mfa-form');

    if (loginForm) {
      loginForm.hidden = false;
    }

    if (mfaForm) {
      mfaForm.hidden = true;
    }
  }


  function showMfaForm({
    enrollment = false,
    qrCode = '',
    secret = ''
  } = {}) {
    const loginForm =
      document.getElementById('login-form');

    const mfaForm =
      document.getElementById('mfa-form');

    const enrollmentBox =
      document.getElementById('mfa-enrollment');

    const title =
      document.getElementById('mfa-title');

    const description =
      document.getElementById('mfa-description');

    const qr =
      document.getElementById('mfa-qr');

    const secretElement =
      document.getElementById('mfa-secret');

    if (loginForm) {
      loginForm.hidden = true;
    }

    if (mfaForm) {
      mfaForm.hidden = false;
    }

    if (enrollmentBox) {
      enrollmentBox.hidden = !enrollment;
    }

    if (title) {
      title.textContent = enrollment
        ? 'Aktifkan MFA Administrator'
        : 'Verifikasi MFA';
    }

    if (description) {
      description.textContent = enrollment
        ? 'Scan QR Code lalu masukkan kode 6 digit dari aplikasi authenticator.'
        : 'Masukkan kode 6 digit dari aplikasi authenticator Anda.';
    }

    if (enrollment && qr) {
      qr.src = qrCode;
    }

    if (enrollment && secretElement) {
      secretElement.textContent = secret;
    }

    document
      .getElementById('mfa-code')
      ?.focus();
  }


  async function prepareAdminMfa() {
    const {
      data: aal,
      error: aalError
    } =
      await supabase.auth.mfa
        .getAuthenticatorAssuranceLevel();

    if (aalError) {
      throw aalError;
    }

    if (aal.currentLevel === 'aal2') {
      location.href = 'dashboard.html';
      return;
    }

    const {
      data: factors,
      error: factorsError
    } =
      await supabase.auth.mfa.listFactors();

    if (factorsError) {
      throw factorsError;
    }

    const verifiedTotp =
      (factors?.totp || []).find(
        factor =>
          factor.status === 'verified'
      );

    if (verifiedTotp) {
      mfaFactorId = verifiedTotp.id;

      showMfaForm({
        enrollment: false
      });

      return;
    }

    const {
      data: enrollment,
      error: enrollmentError
    } =
      await supabase.auth.mfa.enroll({
        factorType: 'totp',
        friendlyName:
          'CMS PT Cengkeh Indonesia Global'
      });

    if (enrollmentError) {
      throw enrollmentError;
    }

    mfaFactorId = enrollment.id;

    showMfaForm({
      enrollment: true,
      qrCode: enrollment.totp.qr_code,
      secret: enrollment.totp.secret
    });
  }


  async function continueAuthenticatedLogin() {
    const authContext =
      await getAuthContext({
        enforceAdminMfa: false
      });

    if (!authContext) {
      return;
    }

    if (authContext.role === 'editor') {
      location.href = 'dashboard.html';
      return;
    }

    await prepareAdminMfa();
  }


  async function loginPage() {
    const form =
      document.getElementById('login-form');

    if (!form) {
      return false;
    }

    const error =
      document.getElementById('login-error');

    const submitButton =
      form.querySelector(
        'button[type="submit"]'
      );

    const mfaForm =
      document.getElementById('mfa-form');

    const mfaError =
      document.getElementById('mfa-error');

    const mfaSubmit =
      document.getElementById('mfa-submit');

    const mfaCancel =
      document.getElementById('mfa-cancel');

    try {
      const authContext =
        await getAuthContext({
          enforceAdminMfa: false
        });

      if (authContext) {
        await continueAuthenticatedLogin();
      }
    } catch (loginCheckError) {
      console.error(loginCheckError);
    }

    form.addEventListener(
      'submit',
      async event => {
        event.preventDefault();

        error.textContent = '';

        submitButton.disabled = true;
        submitButton.textContent =
          'Memproses...';

        const email =
          form.email.value
            .trim()
            .toLowerCase();

        const password =
          form.password.value;

        try {
          const { error: signInError } =
            await supabase.auth
              .signInWithPassword({
                email,
                password
              });

          if (signInError) {
            throw signInError;
          }

          await continueAuthenticatedLogin();

        } catch (signInError) {
          console.error(signInError);

          error.textContent =
            signInError.message ===
            'Akun ini tidak memiliki akses ke CMS.'
              ? signInError.message
              : 'Email atau kata sandi tidak sesuai.';

        } finally {
          submitButton.disabled = false;
          submitButton.textContent =
            'Masuk';
        }
      }
    );


    mfaForm?.addEventListener(
      'submit',
      async event => {
        event.preventDefault();

        mfaError.textContent = '';

        const code =
          document
            .getElementById('mfa-code')
            .value
            .trim()
            .replace(/\s+/g, '');

        if (!/^\d{6}$/.test(code)) {
          mfaError.textContent =
            'Masukkan kode authenticator 6 digit.';
          return;
        }

        if (!mfaFactorId) {
          mfaError.textContent =
            'Faktor MFA tidak ditemukan. Silakan login ulang.';
          return;
        }

        mfaSubmit.disabled = true;
        mfaSubmit.textContent =
          'Memverifikasi...';

        try {
          const {
            data: challenge,
            error: challengeError
          } =
            await supabase.auth.mfa
              .challenge({
                factorId: mfaFactorId
              });

          if (challengeError) {
            throw challengeError;
          }

          const {
            error: verifyError
          } =
            await supabase.auth.mfa
              .verify({
                factorId: mfaFactorId,
                challengeId:
                  challenge.id,
                code
              });

          if (verifyError) {
            throw verifyError;
          }

          const {
            data: aal,
            error: aalError
          } =
            await supabase.auth.mfa
              .getAuthenticatorAssuranceLevel();

          if (aalError) {
            throw aalError;
          }

          if (aal.currentLevel !== 'aal2') {
            throw new Error(
              'Verifikasi MFA belum selesai.'
            );
          }

          location.href =
            'dashboard.html';

        } catch (verifyError) {
          console.error(verifyError);

          mfaError.textContent =
            'Kode authenticator tidak valid atau sudah kedaluwarsa. Coba kode terbaru.';

        } finally {
          mfaSubmit.disabled = false;
          mfaSubmit.textContent =
            'Verifikasi';
        }
      }
    );


    mfaCancel?.addEventListener(
      'click',
      async () => {
        await supabase.auth.signOut();

        mfaFactorId = null;

        const mfaCode =
          document.getElementById(
            'mfa-code'
          );

        if (mfaCode) {
          mfaCode.value = '';
        }

        showLoginForm();
      }
    );

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
    const collectionMap = {
  product: 'products',
  brochure: 'brochures',
  article: 'articles',
  supplier: 'suppliers',
  team: 'teams',
  legality: 'legalities',
  portfolio: 'portfolios'
};

const item = id
  ? (data[collectionMap[entity]] || [])
      .find(entry => entry.id === id)
  : null;
    form.entity.value=entity; form.id.value=id;
    const names = {
  product: 'Produk',
  brochure: 'Brosur',
  article: 'Artikel',
  supplier: 'Supplier',
  team: 'Pengurus',
  legality: 'Legalitas',
  portfolio: 'Portofolio'
};
    modalTitle.textContent=`${item?'Edit':'Tambah'} ${names[entity]}`;
    if(entity==='product') fields.innerHTML=`<div class="form-grid"><div class="field"><label>Nama *</label><input name="name" required maxlength="120" value="${esc(item?.name||'')}"></div><div class="field"><label>Kategori *</label><input name="category" required maxlength="80" value="${esc(item?.category||'Cengkeh Kering')}"></div><div class="field full"><label>Ringkasan *</label><textarea name="summary" required maxlength="400">${esc(item?.summary||'')}</textarea></div><div class="field"><label>Ilustrasi</label><input
 name="image_file"
 type="file"
 accept="image/jpeg,image/png,image/webp"
>

<input
 name="image_url"
 type="hidden"
 value="${esc(item?.image_url || '')}"
>
  <option value="assets/images/clove-dry.svg">Cengkeh kering</option>
  <option value="assets/images/clove-oil.svg">Minyak cengkeh</option>
  <option value="assets/images/cengkeh-di-meja-kayu.webp">Tangkai cengkeh</option>
</select></div><div class="field"><label>Status</label><select name="status"><option value="published">Published</option><option value="draft">Draft</option></select></div></div>`;
    if (entity === 'brochure') {
  const productOptions = (data.products || [])
    .map(product => `
      <option value="${esc(product.slug)}">
        ${esc(product.name)}
      </option>
    `)
    .join('');

  fields.innerHTML = `
    <div class="form-grid">
      <div class="field full">
        <label>Judul Brosur *</label>
        <input
          name="title"
          required
          maxlength="180"
          value="${esc(item?.title || '')}"
        >
      </div>

      <div class="field full">
        <label>Produk *</label>
        <select name="product_slug" required>
          <option value="">Pilih produk</option>
          ${productOptions}
        </select>
      </div>

      <div class="field full">
        <label>Unggah File PDF</label>

        <input
          name="brochure_file"
          type="file"
          accept="application/pdf"
        >

        <input
          name="file_url"
          type="hidden"
          value="${esc(item?.file_url || '')}"
        >

        <input
          name="file_name"
          type="hidden"
          value="${esc(item?.file_name || '')}"
        >

        ${
          item?.file_name
            ? `
              <p class="small">
                File saat ini: ${esc(item.file_name)}
              </p>
            `
            : ''
        }
      </div>

      <div class="field">
        <label>Status Publikasi</label>
        <select name="is_published">
          <option value="true">Publik</option>
          <option value="false">Tidak Publik</option>
        </select>
      </div>
    </div>
  `;
}
    if(entity==='article') fields.innerHTML=`<div class="form-grid"><div class="field full"><label>Judul *</label><input name="title" required maxlength="180" value="${esc(item?.title||'')}"></div><div class="field"><label>Kategori *</label><input name="category" required maxlength="80" value="${esc(item?.category||'Edukasi')}"></div><div class="field"><label>Tanggal</label><input name="date" type="date" value="${esc(item?.date||new Date().toISOString().slice(0,10))}"></div><div class="field full"><label>Ringkasan *</label><textarea name="excerpt" required maxlength="500">${esc(item?.excerpt||'')}</textarea></div><div class="field"><label>Ilustrasi</label><input
 name="image_file"
 type="file"
 accept="image/jpeg,image/png,image/webp"
>

<input
 name="image_url"
 type="hidden"
 value="${esc(item?.image_url || '')}"
></div><div class="field"><label>Status</label><select name="status"><option value="published">Published</option><option value="draft">Draft</option></select></div></div>`;
    if(entity==='supplier') fields.innerHTML=`<div class="form-grid"><div class="field"><label>Nama *</label><input name="name" required maxlength="120" value="${esc(item?.name||'')}"></div><div class="field"><label>Wilayah *</label><input name="region" required maxlength="80" value="${esc(item?.region||'')}"></div><div class="field"><label>Latitude *</label><input name="lat" type="number" step="any" min="-90" max="90" required value="${item?.lat??''}"></div><div class="field"><label>Longitude *</label><input name="lng" type="number" step="any" min="-180" max="180" required value="${item?.lng??''}"></div><div class="field full"><label>Ringkasan</label><textarea name="summary" maxlength="300">${esc(item?.summary||'Lokasi perkiraan tingkat wilayah untuk keperluan demonstrasi.')}</textarea></div><label class="field"><span>Publik</span><select name="public"><option value="true">Ya</option><option value="false">Tidak</option></select></label></div>`;
    if (entity === 'team') {
  fields.innerHTML = `
    <div class="form-grid">
      <div class="field">
        <label>Nama *</label>
        <input
          name="name"
          required
          maxlength="120"
          value="${esc(item?.name || '')}"
        >
      </div>

      <div class="field">
        <label>Jabatan *</label>
        <input
          name="position"
          required
          maxlength="120"
          value="${esc(item?.position || '')}"
        >
      </div>

      <div class="field full">
  <label>Unggah Foto</label>

  <input
    name="photo_file"
    type="file"
    accept="image/jpeg,image/png,image/webp"
  >

  <input
    name="photo_url"
    type="hidden"
    value="${esc(item?.photo_url || '')}"
  >

  ${
    item?.photo_url
      ? `
        <p class="small">
          Foto saat ini sudah tersimpan.
          Unggah foto baru untuk menggantinya.
        </p>
      `
      : ''
  }
</div>

      <div class="field full">
        <label>Biografi Singkat</label>
        <textarea
          name="biography"
          maxlength="500"
        >${esc(item?.biography || '')}</textarea>
      </div>

      <div class="field">
        <label>Urutan Tampilan</label>
        <input
          name="sort_order"
          type="number"
          min="0"
          value="${item?.sort_order ?? 0}"
        >
      </div>

      <div class="field">
        <label>Status Publikasi</label>
        <select name="is_published">
          <option value="true">Publik</option>
          <option value="false">Tidak Publik</option>
        </select>
      </div>
    </div>
  `;
}

    if (entity === 'legality') {
  fields.innerHTML = `
    <div class="form-grid">
      <div class="field">
        <label>Lembaga Penerbit *</label>
        <input
          name="institution_name"
          required
          maxlength="180"
          value="${esc(item?.institution_name || '')}"
        >
      </div>

      <div class="field">
        <label>Nama Resmi *</label>
        <input
          name="official_name"
          required
          maxlength="220"
          value="${esc(item?.official_name || '')}"
        >
      </div>

      <div class="field full">
        <label>Unggah Logo Lembaga</label>

        <input
          name="logo_file"
          type="file"
          accept="image/jpeg,image/png,image/webp,image/svg+xml"
        >

        <input
          name="logo_url"
          type="hidden"
          value="${esc(item?.logo_url || '')}"
        >

        ${
          item?.logo_url
            ? `
              <p class="small">
                Logo saat ini sudah tersimpan.
                Unggah logo baru untuk menggantinya.
              </p>
            `
            : ''
        }
      </div>

      <div class="field">
        <label>Nomor Dokumen</label>
        <input
          name="document_number"
          maxlength="180"
          value="${esc(item?.document_number || '')}"
        >
      </div>

      <div class="field">
        <label>Unggah Dokumen PDF</label>

        <input
          name="document_file"
          type="file"
          accept="application/pdf"
        >

        <input
          name="document_url"
          type="hidden"
          value="${esc(item?.document_url || '')}"
        >

        ${
          item?.document_url
            ? `
              <p class="small">
                Dokumen saat ini sudah tersimpan.
                Unggah PDF baru untuk menggantinya.
              </p>
            `
            : ''
        }
      </div>

      <div class="field full">
        <label>Deskripsi</label>
        <textarea
          name="description"
          maxlength="600"
        >${esc(item?.description || '')}</textarea>
      </div>

      <div class="field">
        <label>Urutan Tampilan</label>
        <input
          name="sort_order"
          type="number"
          min="0"
          value="${item?.sort_order ?? 0}"
        >
      </div>

      <div class="field">
        <label>Status Publikasi</label>
        <select name="is_published">
          <option value="true">Publik</option>
          <option value="false">Tidak Publik</option>
        </select>
      </div>
    </div>
  `;
}

    if (entity === 'portfolio') {
  fields.innerHTML = `
    <div class="form-grid">
      <div class="field full">
        <label>Judul Portofolio *</label>
        <input
          name="title"
          required
          maxlength="180"
          value="${esc(item?.title || '')}"
        >
      </div>

      <div class="field">
        <label>Kategori</label>
        <input
          name="category"
          maxlength="100"
          placeholder="Contoh: Kegiatan, Ekspor, Pameran"
          value="${esc(item?.category || '')}"
        >
      </div>

      <div class="field">
        <label>Tahun</label>
        <input
          name="year"
          type="number"
          min="2000"
          max="2100"
          value="${item?.year ?? ''}"
        >
      </div>

      <div class="field full">
        <label>Unggah Foto Portofolio</label>

        <input
          name="image_file"
          type="file"
          accept="image/jpeg,image/png,image/webp"
        >

        <input
          name="image_url"
          type="hidden"
          value="${esc(item?.image_url || '')}"
        >

        ${
          item?.image_url
            ? `
              <p class="small">
                Foto saat ini sudah tersimpan.
                Unggah foto baru untuk menggantinya.
              </p>
            `
            : ''
        }
      </div>

      <div class="field full">
        <label>Deskripsi</label>
        <textarea
          name="summary"
          maxlength="800"
        >${esc(item?.summary || '')}</textarea>
      </div>

      <div class="field">
        <label>Urutan Tampilan</label>
        <input
          name="sort_order"
          type="number"
          min="0"
          value="${item?.sort_order ?? 0}"
        >
      </div>

      <div class="field">
        <label>Status Publikasi</label>
        <select name="is_published">
          <option value="true">Publik</option>
          <option value="false">Tidak Publik</option>
        </select>
      </div>
    </div>
  `;
}
    
    if(item){ for(const [k,v] of Object.entries(item)){ const el=form.elements[k]; if(el){ if(el.type==='checkbox')el.checked=Boolean(v); else el.value=String(v); } } }
    modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
  }
  function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');form.reset();}

  async function uploadTeamPhoto(formElement) {
  const fileInput =
    formElement.elements.photo_file;

  const currentPhoto =
    formElement.elements.photo_url?.value || null;

  const file = fileInput?.files?.[0];

  if (!file) {
    return currentPhoto;
  }

  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/webp'
  ];

  if (!allowedTypes.includes(file.type)) {
    throw new Error(
      'Foto harus berformat JPG, PNG, atau WebP.'
    );
  }

  if (file.size > 10 * 1024 * 1024) {
    throw new Error(
      'Ukuran foto maksimal 10 MB.'
    );
  }

  const extension =
    file.name.split('.').pop()?.toLowerCase() ||
    'jpg';

  const filePath =
    `team-members/${crypto.randomUUID()}.${extension}`;

  const { error: uploadError } =
    await supabase.storage
      .from('public-assets')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
        contentType: file.type
      });

  if (uploadError) {
    throw uploadError;
  }

  const { data: publicUrlData } =
    supabase.storage
      .from('public-assets')
      .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
}

  async function uploadBrochureFile(formElement) {
  const fileInput =
    formElement.elements.brochure_file;

  const currentUrl =
    formElement.elements.file_url?.value || null;

  const currentName =
    formElement.elements.file_name?.value || null;

  const file = fileInput?.files?.[0];

  if (!file) {
    return {
      fileUrl: currentUrl,
      fileName: currentName
    };
  }

  if (file.type !== 'application/pdf') {
    throw new Error(
      'Brosur harus berformat PDF.'
    );
  }

  if (file.size > 10 * 1024 * 1024) {
    throw new Error(
      'Ukuran brosur maksimal 10 MB.'
    );
  }

  const filePath =
    `product-brochures/${crypto.randomUUID()}.pdf`;

  const { error: uploadError } =
    await supabase.storage
      .from('public-assets')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
        contentType: 'application/pdf'
      });

  if (uploadError) {
    throw uploadError;
  }

  const { data: publicUrlData } =
    supabase.storage
      .from('public-assets')
      .getPublicUrl(filePath);

  return {
    fileUrl: publicUrlData.publicUrl,
    fileName: file.name
  };
}

  async function uploadLegalityFiles(formElement) {
  const logoInput =
    formElement.elements.logo_file;

  const documentInput =
    formElement.elements.document_file;

  const logoFile =
    logoInput?.files?.[0];

  const documentFile =
    documentInput?.files?.[0];

  let logoUrl =
    formElement.elements.logo_url?.value || null;

  let documentUrl =
    formElement.elements.document_url?.value || null;

  if (logoFile) {
    const allowedLogoTypes = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/svg+xml'
    ];

    if (!allowedLogoTypes.includes(logoFile.type)) {
      throw new Error(
        'Logo harus berformat JPG, PNG, WebP, atau SVG.'
      );
    }

    if (logoFile.size > 10 * 1024 * 1024) {
      throw new Error(
        'Ukuran logo maksimal 10 MB.'
      );
    }

    const extension =
      logoFile.name
        .split('.')
        .pop()
        ?.toLowerCase() || 'png';

    const logoPath =
      `legalities/logos/${crypto.randomUUID()}.${extension}`;

    const { error: logoUploadError } =
      await supabase.storage
        .from('public-assets')
        .upload(logoPath, logoFile, {
          cacheControl: '3600',
          upsert: false,
          contentType: logoFile.type
        });

    if (logoUploadError) {
      throw logoUploadError;
    }

    const { data: logoPublicData } =
      supabase.storage
        .from('public-assets')
        .getPublicUrl(logoPath);

    logoUrl = logoPublicData.publicUrl;
  }

  if (documentFile) {
    if (documentFile.type !== 'application/pdf') {
      throw new Error(
        'Dokumen legalitas harus berformat PDF.'
      );
    }

    if (documentFile.size > 10 * 1024 * 1024) {
      throw new Error(
        'Ukuran dokumen maksimal 10 MB.'
      );
    }

    const documentPath =
      `legalities/documents/${crypto.randomUUID()}.pdf`;

    const { error: documentUploadError } =
      await supabase.storage
        .from('public-assets')
        .upload(documentPath, documentFile, {
          cacheControl: '3600',
          upsert: false,
          contentType: 'application/pdf'
        });

    if (documentUploadError) {
      throw documentUploadError;
    }

    const { data: documentPublicData } =
      supabase.storage
        .from('public-assets')
        .getPublicUrl(documentPath);

    documentUrl =
      documentPublicData.publicUrl;
  }

  return {
    logoUrl,
    documentUrl
  };
}

  async function uploadPortfolioImage(formElement) {
  const fileInput =
    formElement.elements.image_file;

  const currentImage =
    formElement.elements.image_url?.value || null;

  const file = fileInput?.files?.[0];

  if (!file) {
    return currentImage;
  }

  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/webp'
  ];

  if (!allowedTypes.includes(file.type)) {
    throw new Error(
      'Foto portofolio harus berformat JPG, PNG, atau WebP.'
    );
  }

  if (file.size > 10 * 1024 * 1024) {
    throw new Error(
      'Ukuran foto portofolio maksimal 10 MB.'
    );
  }

  const extension =
    file.name
      .split('.')
      .pop()
      ?.toLowerCase() || 'jpg';

  const filePath =
    `portfolios/${crypto.randomUUID()}.${extension}`;

  const { error: uploadError } =
    await supabase.storage
      .from('public-assets')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
        contentType: file.type
      });

  if (uploadError) {
    throw uploadError;
  }

  const { data: publicUrlData } =
    supabase.storage
      .from('public-assets')
      .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
}

  async function uploadArticleImage(formElement) {

  const fileInput =
    formElement.elements.image_file;

  const currentImage =
    formElement.elements.image_url?.value || null;

  const file = fileInput?.files?.[0];

  if (!file) {
    return currentImage;
  }

  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/webp'
  ];

  if (!allowedTypes.includes(file.type)) {
    throw new Error(
      'Gambar artikel harus JPG, PNG, atau WebP.'
    );
  }


  const extension =
    file.name.split('.').pop()?.toLowerCase() || 'jpg';


  const filePath =
    `articles/${crypto.randomUUID()}.${extension}`;


  const { error: uploadError } =
    await supabase.storage
      .from('public-assets')
      .upload(filePath, file, {
        cacheControl:'3600',
        upsert:false,
        contentType:file.type
      });


  if(uploadError){
    throw uploadError;
  }


  const { data:urlData } =
    supabase.storage
      .from('public-assets')
      .getPublicUrl(filePath);


  return urlData.publicUrl;
}

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

    if (entity === 'brochure') {
  if (!formData.file_url || !formData.file_name) {
    throw new Error(
      'File brosur PDF wajib diunggah.'
    );
  }

  table = 'product_brochures';

  payload = {
    product_slug: formData.product_slug,
    title: formData.title,
    file_name: formData.file_name,
    file_url: formData.file_url,
    is_published:
      formData.is_published === 'true'
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
      image_url: formData.image_url || null,
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

    if (entity === 'team') {
  table = 'team_members';

  payload = {
    name: formData.name,
    position: formData.position,
    photo_url: formData.photo_url || null,
    biography: formData.biography || null,
    sort_order: Number(formData.sort_order || 0),
    is_published:
      formData.is_published === 'true'
  };
}

    if (entity === 'legality') {
  table = 'legalities';

  payload = {
    institution_name:
      formData.institution_name,

    official_name:
      formData.official_name,

    logo_url:
      formData.logo_url || null,

    document_number:
      formData.document_number || null,

    document_url:
      formData.document_url || null,

    description:
      formData.description || null,

    sort_order:
      Number(formData.sort_order || 0),

    is_published:
      formData.is_published === 'true'
  };
}

    if (entity === 'portfolio') {
  table = 'portfolios';

  payload = {
    title: formData.title,
    category: formData.category || null,
    year: formData.year
      ? Number(formData.year)
      : null,
    summary: formData.summary || null,
    image_url: formData.image_url || null,
    sort_order:
      Number(formData.sort_order || 0),
    is_published:
      formData.is_published === 'true'
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
  brochure: 'product_brochures',
  article: 'articles',
  supplier: 'suppliers',
  team: 'team_members',
  legality: 'legalities',
  portfolio: 'portfolios',
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
    const collectionMap = {
  product: 'products',
  brochure: 'brochures',
  article: 'articles',
  supplier: 'suppliers',
  team: 'teams',
  legality: 'legalities',
  portfolio: 'portfolios'
};

const collection = collectionMap[entity];

const item = data[collection]?.find(
  entry => entry.id === id
);

    if (!item) {
      throw new Error('Data tidak ditemukan.');
    }

    let payload;

if (entity === 'supplier') {
  payload = {
    is_published: !item.public
  };
} else if (
  entity === 'team' ||
  entity === 'brochure' ||
  entity === 'legality' ||
  entity === 'portfolio'
) {
  payload = {
    is_published: !item.is_published
  };
} else {
  payload = {
    status:
      item.status === 'published'
        ? 'draft'
        : 'published'
  };
}
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
    if (entity === 'team') {
  formData.photo_url =
    await uploadTeamPhoto(form);

  delete formData.photo_file;
}
    if (entity === 'brochure') {
  const uploadedBrochure =
    await uploadBrochureFile(form);

  formData.file_url =
    uploadedBrochure.fileUrl;

  formData.file_name =
    uploadedBrochure.fileName;

  delete formData.brochure_file;
}

    if (entity === 'legality') {
  const uploadedFiles =
    await uploadLegalityFiles(form);

  formData.logo_url =
    uploadedFiles.logoUrl;

  formData.document_url =
    uploadedFiles.documentUrl;

  delete formData.logo_file;
  delete formData.document_file;
}

    if (entity === 'portfolio') {
  const uploadedImage =
    await uploadPortfolioImage(form);

  if (uploadedImage) {
    formData.image_url = uploadedImage;
  }

  delete formData.image_file;
}

    if (entity === 'article') {

  const uploadedImage =
    await uploadArticleImage(form);

  if (uploadedImage) {
    formData.image_url = uploadedImage;
  }

  delete formData.image_file;
}
    
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
  function renderBrochures() {
  const tbody =
    document.getElementById('brochure-table');

  const rows = data.brochures || [];

  tbody.innerHTML = rows.length
    ? rows.map(brochure => `
        <tr>
          <td>
            <strong>${esc(brochure.title)}</strong>
          </td>

          <td>
            ${esc(brochure.product_slug)}
          </td>

          <td>
            ${esc(brochure.file_name)}
          </td>

          <td>
            <span class="status ${
              !brochure.is_published ? 'draft' : ''
            }">
              ${
                brochure.is_published
                  ? 'Publik'
                  : 'Tidak Publik'
              }
            </span>
          </td>

          <td>
            <div class="actions">
              ${actionButton(
                'brochure',
                brochure.id,
                'Edit',
                'btn-light',
                'edit'
              )}

              ${actionButton(
                'brochure',
                brochure.id,
                brochure.is_published
                  ? 'Sembunyikan'
                  : 'Publikasikan',
                'btn-light',
                'toggle'
              )}

              ${actionButton(
                'brochure',
                brochure.id,
                'Hapus',
                'btn-danger',
                'delete'
              )}
            </div>
          </td>
        </tr>
      `).join('')
    : `
        <tr>
          <td colspan="5" class="empty">
            Belum ada brosur produk.
          </td>
        </tr>
      `;
}
  function renderArticles(){ const tbody=document.getElementById('article-table'); const rows=data.articles||[]; tbody.innerHTML=rows.length?rows.map(a=>`<tr><td><strong>${esc(a.title)}</strong></td><td>${esc(a.category)}</td><td>${esc(a.date)}</td><td><span class="status ${a.status==='draft'?'draft':''}">${esc(a.status)}</span></td><td><div class="actions">${actionButton('article',a.id,'Edit','btn-light','edit')}${actionButton('article',a.id,a.status==='published'?'Jadikan Draft':'Publikasikan','btn-light','toggle')}${actionButton('article',a.id,'Hapus','btn-danger','delete')}</div></td></tr>`).join(''):'<tr><td colspan="5" class="empty">Belum ada artikel.</td></tr>'; }
  function renderSuppliers(){ const tbody=document.getElementById('supplier-table'); const rows=data.suppliers||[]; tbody.innerHTML=rows.length?rows.map(s=>`<tr><td><strong>${esc(s.name)}</strong></td><td>${esc(s.region)}</td><td>${s.lat}, ${s.lng}</td><td><span class="status ${!s.public?'private':''}">${s.public?'Publik':'Privat'}</span></td><td><div class="actions">${actionButton('supplier',s.id,'Edit','btn-light','edit')}${actionButton('supplier',s.id,s.public?'Sembunyikan':'Publikasikan','btn-light','toggle')}${actionButton('supplier',s.id,'Hapus','btn-danger','delete')}</div></td></tr>`).join(''):'<tr><td colspan="5" class="empty">Belum ada supplier.</td></tr>'; }
  function renderTeams() {
  const tbody =
    document.getElementById('team-table');

  const rows = data.teams || [];

  tbody.innerHTML = rows.length
    ? rows.map(member => `
        <tr>
          <td>
            <strong>${esc(member.name)}</strong>
          </td>

          <td>${esc(member.position)}</td>

          <td>${member.sort_order ?? 0}</td>

          <td>
            <span class="status ${
              !member.is_published
                ? 'private'
                : ''
            }">
              ${
                member.is_published
                  ? 'Publik'
                  : 'Tidak Publik'
              }
            </span>
          </td>

          <td>
            <div class="actions">
              ${actionButton(
                'team',
                member.id,
                'Edit',
                'btn-light',
                'edit'
              )}

              ${actionButton(
                'team',
                member.id,
                member.is_published
                  ? 'Sembunyikan'
                  : 'Publikasikan',
                'btn-light',
                'toggle'
              )}

              ${actionButton(
                'team',
                member.id,
                'Hapus',
                'btn-danger',
                'delete'
              )}
            </div>
          </td>
        </tr>
      `).join('')
    : `
      <tr>
        <td colspan="5" class="empty">
          Belum ada data pengurus.
        </td>
      </tr>
    `;
}

  function renderLegalities() {
  const tbody =
    document.getElementById('legality-table');

  const rows = data.legalities || [];

  tbody.innerHTML = rows.length
    ? rows.map(item => `
        <tr>
          <td>
            <strong>
              ${esc(item.institution_name)}
            </strong>
          </td>

          <td>${esc(item.official_name)}</td>

          <td>
            ${esc(item.document_number || '-')}
          </td>

          <td>${item.sort_order ?? 0}</td>

          <td>
            <span class="status ${
              !item.is_published ? 'private' : ''
            }">
              ${
                item.is_published
                  ? 'Publik'
                  : 'Tidak Publik'
              }
            </span>
          </td>

          <td>
            <div class="actions">
              ${actionButton(
                'legality',
                item.id,
                'Edit',
                'btn-light',
                'edit'
              )}

              ${actionButton(
                'legality',
                item.id,
                item.is_published
                  ? 'Sembunyikan'
                  : 'Publikasikan',
                'btn-light',
                'toggle'
              )}

              ${actionButton(
                'legality',
                item.id,
                'Hapus',
                'btn-danger',
                'delete'
              )}
            </div>
          </td>
        </tr>
      `).join('')
    : `
      <tr>
        <td colspan="6" class="empty">
          Belum ada data legalitas perusahaan.
        </td>
      </tr>
    `;
}

  function renderPortfolios() {
  const tbody =
    document.getElementById('portfolio-table');

  const rows = data.portfolios || [];

  tbody.innerHTML = rows.length
    ? rows.map(item => `
        <tr>
          <td>
            <strong>
              ${esc(item.title)}
            </strong>
          </td>

          <td>
            ${esc(item.category || '-')}
          </td>

          <td>
            ${esc(item.year || '-')}
          </td>

          <td>
            ${item.sort_order ?? 0}
          </td>

          <td>
            <span class="status ${
              !item.is_published ? 'private' : ''
            }">
              ${
                item.is_published
                  ? 'Publik'
                  : 'Tidak Publik'
              }
            </span>
          </td>

          <td>
            <div class="actions">
              ${actionButton(
                'portfolio',
                item.id,
                'Edit',
                'btn-light',
                'edit'
              )}

              ${actionButton(
                'portfolio',
                item.id,
                item.is_published
                  ? 'Sembunyikan'
                  : 'Publikasikan',
                'btn-light',
                'toggle'
              )}

              ${actionButton(
                'portfolio',
                item.id,
                'Hapus',
                'btn-danger',
                'delete'
              )}
            </div>
          </td>
        </tr>
      `).join('')
    : `
      <tr>
        <td colspan="6" class="empty">
          Belum ada data portofolio.
        </td>
      </tr>
    `;
}
  
  function renderMessages(){ const tbody=document.getElementById('message-table'); const rows=data.messages||[]; tbody.innerHTML=rows.length?rows.slice().reverse().map(m=>`<tr><td><strong>${esc(m.name||'-')}</strong><br><span class="small">${esc(m.email||'')}</span></td><td>${esc(m.subject||'-')}</td><td>${m.createdAt?new Date(m.createdAt).toLocaleString('id-ID'):'-'}</td><td><span class="status">${esc(m.status||'Baru')}</span></td><td><div class="actions">${actionButton('message',m.id,'Tandai Selesai','btn-light','complete')}${actionButton('message',m.id,'Hapus','btn-danger','delete')}</div></td></tr>`).join(''):'<tr><td colspan="5" class="empty">Belum ada pesan demo.</td></tr>'; }
  function renderCounts(){document.getElementById('count-products').textContent=(data.products||[]).length;document.getElementById('count-articles').textContent=(data.articles||[]).length;document.getElementById('count-suppliers').textContent=(data.suppliers||[]).filter(x=>x.public).length;document.getElementById('count-messages').textContent=(data.messages||[]).filter(x=>(x.status||'Baru')==='Baru').length;}
  function fillSettings(){ const f=document.getElementById('settings-form'); if(!f)return; for(const [k,v] of Object.entries(data.settings||{})){if(f.elements[k])f.elements[k].value=v||'';} }
  function renderAll(){renderProducts();renderBrochures();renderArticles();renderSuppliers();renderTeams();renderLegalities();renderPortfolios();renderMessages();renderCounts();fillSettings();}
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
