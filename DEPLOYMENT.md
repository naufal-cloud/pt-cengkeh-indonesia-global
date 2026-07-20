# Catatan Deployment Demo

## Opsi yang direkomendasikan: Netlify

Proyek bersifat statis, sehingga tidak memerlukan build command. Gunakan publish directory `.`.

Konfigurasi sudah disediakan dalam `netlify.toml`:

- custom 404;
- security headers dasar;
- publish directory root;
- form kontak yang dapat dideteksi Netlify Forms.

Setelah deployment, uji:

1. navigasi desktop dan mobile;
2. filter produk dan artikel;
3. halaman detail melalui query string;
4. peta supplier;
5. pengiriman form kontak;
6. halaman CMS prototype;
7. halaman 404;
8. Lighthouse mobile.

## Batasan demo statis

- CMS menyimpan data hanya pada browser dan perangkat yang sama.
- Tidak ada database bersama, SMTP, object storage, reset password, MFA, backup, atau audit server-side.
- Perubahan CMS tidak tersinkron antarpengguna.
- Data CMS dapat hilang jika localStorage dihapus.

Untuk produksi penuh sesuai seluruh kebutuhan Must pada SRS, sambungkan frontend ke backend aman dan database terkelola.
