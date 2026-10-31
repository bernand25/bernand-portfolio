# Bernand Trianda Firmansyah · Portfolio v2

Next.js 16 (App Router) portfolio, tanpa library UI tambahan. Semua isi ada di `data/content.js`.

## 1. Jalankan di komputer

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## 2. Deploy ke Vercel

Push branch `portfolio-v2` ke GitHub untuk mendapat link preview dari Vercel, lalu merge ke `main` untuk menayangkannya.

## Mengubah isi

- Teks, proyek, pengalaman, skill, sertifikat: `data/content.js`
- Warna dan tampilan: bagian *Design tokens* di `app/globals.css`
- Judul halaman dan deskripsi untuk Google/LinkedIn: `metadata` di `app/layout.tsx`

Yang perlu dicek sebelum deploy:

- [ ] Ganti `public/Bernand_CV.pdf` dengan CV terbaru
- [ ] Link GitHub di `profile.github` (sekarang `github.com/bernand25`)
- [ ] Stack tiap proyek Citilink sudah sesuai yang dipakai
- [ ] Tidak ada data internal perusahaan yang ikut tampil

## Fitur

- Tema gelap/terang (tersimpan di browser)
- Quick jump: tekan `Ctrl + K` / `Cmd + K` untuk lompat ke bagian, membuka proyek, atau menyalin email
- Filter proyek dan detail proyek dalam modal (masalah, alur kerja, yang dibangun, pelajaran, stack)
- Angka monitoring yang beranimasi di hero
- Navbar yang menandai bagian aktif, progress bar saat scroll, animasi muncul saat scroll
- Timeline pengalaman yang bisa dibuka-tutup, tab skill yang bisa dipakai dengan keyboard
- Tombol salin email
- Responsif untuk HP; menghormati pengaturan "reduce motion"
