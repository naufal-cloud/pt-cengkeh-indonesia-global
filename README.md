# Website Demo PT Cengkeh Indonesia Global

Prototype website berdasarkan **SRS-CIG-WEB-001 versi 1.2**. Proyek dibuat tanpa proses build sehingga dapat dibuka langsung atau dipublikasikan sebagai static site.

## Fitur yang tersedia

- Beranda responsif dengan identitas hijau–emas dan logo resmi.
- Halaman Tentang Kami dan portofolio.
- Katalog produk, filter, pencarian, dan halaman detail.
- Artikel, kategori, pencarian, detail, tag, dan tombol bagikan.
- Peta supplier dengan Leaflet + OpenStreetMap, filter wilayah, dan fallback daftar.
- Form kontak siap Netlify Forms, honeypot, validasi browser, dan persetujuan privasi.
- Halaman kebijakan privasi, 404, sitemap, robots, Open Graph, dan web manifest.
- CMS prototype berbasis localStorage untuk Produk, Artikel, Supplier, Pesan, dan Pengaturan.

## Akun CMS prototype

- Administrator: `admin@cig.demo` / `DemoAdmin2026!`
- Editor: `editor@cig.demo` / `DemoEditor2026!`

Buka `admin/index.html`.

> CMS ini hanya prototype antarmuka. Kredensial berada pada JavaScript dan tidak boleh digunakan untuk produksi. Implementasi produksi memerlukan autentikasi server-side, password hashing, MFA, RBAC, database, storage, audit log, rate limiting, backup, dan integrasi SMTP.

## Menjalankan lokal

```bash
python -m http.server 8080
```

Lalu buka `http://localhost:8080`.

## Hosting gratis

### Netlify Drop

1. Masuk ke Netlify.
2. Buka Netlify Drop.
3. Tarik folder proyek ini atau unggah ZIP yang sudah diekstrak.
4. Setelah aktif, perbarui domain pada `sitemap.xml`, `robots.txt`, dan metadata canonical bila ditambahkan.

Netlify direkomendasikan untuk demo karena form `contact` sudah diberi atribut Netlify Forms.

### GitHub Pages

1. Buat repository publik dan unggah seluruh isi folder ini ke root repository.
2. Aktifkan **Settings → Pages → Source: GitHub Actions**.
3. Workflow `.github/workflows/pages.yml` akan memublikasikan website.

Form kontak di GitHub Pages tidak memiliki backend; gunakan Netlify atau sambungkan layanan form lain.

## Data yang harus diganti sebelum produksi

- Alamat resmi dan kontak perusahaan.
- Nomor WhatsApp resmi.
- Sejarah, visi, misi, legalitas, sertifikasi, dan struktur manajemen.
- Spesifikasi produk, brosur PDF, gambar asli, dan klaim mutu.
- Portofolio yang telah disetujui.
- Koordinat supplier yang aman dan memiliki persetujuan publikasi.
- Kebijakan privasi hasil tinjauan legal.
- Domain pada sitemap/robots dan konfigurasi analytics bila digunakan.
