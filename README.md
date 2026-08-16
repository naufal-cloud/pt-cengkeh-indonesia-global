# PT Cengkeh Indonesia Global

Website resmi PT Cengkeh Indonesia Global.

Website ini menyediakan informasi perusahaan, produk, artikel, supplier,
legalitas, struktur organisasi, portofolio, pengiriman, dan kontak perusahaan.

## Teknologi

- HTML, CSS, dan JavaScript
- Supabase Database
- Supabase Authentication
- Supabase Storage
- Supabase Edge Functions
- Netlify Hosting

## CMS

CMS dapat diakses melalui:

`/admin/`

CMS digunakan untuk mengelola konten website secara online.

### Role Pengguna

**Administrator**
- Mengelola seluruh konten CMS
- Mengelola pengaturan situs
- Mengelola akun pengguna
- Wajib menggunakan Multi-Factor Authentication (MFA)

**Editor**
- Mengelola konten operasional website
- Tidak dapat mengakses Manajemen Pengguna
- Tidak dapat mengakses Pengaturan Administrator

## Konten yang Dikelola

- Produk
- Brosur Produk
- Artikel
- Supplier
- Struktur Organisasi
- Legalitas Perusahaan
- Portofolio
- Pesan Masuk
- Kontak Perusahaan

## Kontak Perusahaan

Nomor WhatsApp dan telepon, alamat, serta email perusahaan
dikelola melalui CMS agar dapat diperbarui oleh pihak
PT Cengkeh Indonesia Global tanpa mengubah source code website.

## Deployment

Website production di-deploy menggunakan Netlify dan terhubung
dengan repository GitHub.

Perubahan pada branch `main` akan digunakan sebagai sumber
deployment website.

## Keamanan

Website menggunakan:

- Supabase Authentication
- Role Based Access Control (RBAC)
- Row Level Security (RLS)
- MFA untuk Administrator
- Proteksi akses CMS berdasarkan role
- Server-side Edge Function untuk operasi administratif

## Pengelolaan

Website dan CMS dibuat untuk digunakan oleh
PT Cengkeh Indonesia Global sebagai sistem website perusahaan.

Konten perusahaan dapat diperbarui melalui CMS tanpa perlu
melakukan perubahan langsung pada kode website.
