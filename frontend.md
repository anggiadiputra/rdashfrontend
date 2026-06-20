# Dokumentasi Proyek Frontend: Ruangtunggu Web (ruangtunggu-web)

Dokumen ini menjelaskan arsitektur, teknologi, struktur folder, alur logika, dan panduan pengembangan untuk portal pencarian dan manajemen domain mandiri (**Self-Service Customer Domain Portal**). Proyek ini dirancang menggunakan framework **Next.js**.

---

## 1. Tech Stack & Dependensi Utama

Proyek ini dibangun menggunakan modern JavaScript/TypeScript stack berbasis React dengan optimasi performa SSR (Server-Side Rendering) dan SEO:

- **Framework Utama**: [Next.js v15 (App Router)](https://nextjs.org/) yang mendukung Server Components (RSC) dan Client Components secara hybrid.
- **UI Framework**: [React v19](https://react.dev/) terintegrasi secara native di dalam Next.js.
- **Sistem CSS & Styling**: [Tailwind CSS v4](https://tailwindcss.com/) menggunakan plugin Vite/PostCSS resmi untuk integrasi build super cepat.
- **Bahasa Pemrograman**: [TypeScript](https://www.typescriptlang.org/) dengan konfigurasi strict type checking.
- **Engine Minimal**: Node.js `>=22.12.0`.
- **Platform Hosting**: Sangat direkomendasikan di **Vercel** untuk mendukung Serverless Functions, Incremental Static Regeneration (ISR), dan optimasi image out-of-the-box.

---

## 2. Struktur Direktori Proyek (Next.js App Router)

Berikut adalah peta struktur folder utama dari `ruangtunggu-web` berbasis Next.js:

```text
ruangtunggu-web/
├── next.config.ts         # Konfigurasi Next.js
├── package.json           # Dependensi dependensi NPM dan skrip build (next dev, next build)
├── tsconfig.json          # Konfigurasi TypeScript
├── public/                # Aset statis (favicon, gambar statis, logo, manifest)
└── src/
    ├── middleware.ts      # Middleware Next.js untuk Route Guard (Auth & Admin protection)
    ├── components/
    │   └── ui/
    │       └── aether-flow-hero.tsx  # Komponen React canvas interaktif (Hero BG)
    ├── styles/
    │   └── global.css                # Variabel CSS & konfigurasi tema utama Tailwind v4
    ├── utils/
    │   ├── api.ts                    # Wrapper HTTP Client (Native fetch helper)
    │   ├── auth.ts                   # Guard navigasi client-side & parse user session
    │   └── region.ts                 # Cascading helper wilayah administrasi Indonesia
    └── app/
        ├── layout.tsx                # Root Layout (Navigasi Publik & Footer)
        ├── page.tsx                  # Landing Page utama (Form pencarian domain)
        ├── login/
        │   └── page.tsx              # Halaman Login 2-Langkah (Password + OTP)
        ├── register/
        │   └── page.tsx              # Halaman Pendaftaran Member Baru
        ├── verify-email/
        │   └── page.tsx              # Verifikasi Email Customer
        ├── forgot-password/
        │   └── page.tsx              # Lupa Password
        ├── reset-password/
        │   └── page.tsx              # Reset Password via Token
        ├── prices/
        │   └── page.tsx              # Halaman Publik Daftar Harga TLD
        ├── whois/
        │   └── page.tsx              # Halaman Publik WHOIS Checker
        ├── profile/
        │   └── page.tsx              # Halaman Pengaturan Profil Akun Customer
        ├── checkout/
        │   └── page.tsx              # Alur Keranjang Belanja & Form Transaksi
        ├── domains/
        │   ├── payment/
        │   │   └── page.tsx          # Halaman Bukti Pembayaran / Upload Bukti
        │   ├── transfer/
        │   │   └── page.tsx          # Halaman Transfer Domain
        │   └── [id]/
        │       └── page.tsx          # Panel Kontrol Domain Detail (Tab: DNS, NS, WHOIS)
        ├── dashboard/
        │   ├── layout.tsx            # DashboardLayout (Sidebar khusus Customer Portal)
        │   ├── page.tsx              # Dashboard Utama (Ikhtisar Akun & Statistik)
        │   ├── domains/
        │   │   └── page.tsx          # List Domain milik Customer
        │   ├── prices/
        │   │   └── page.tsx          # Halaman Harga Domain khusus Customer
        │   └── whois/
        │       └── page.tsx          # Portal WHOIS khusus Customer
        └── admin/
            ├── layout.tsx            # AdminLayout (Sidebar khusus Administrator Portal)
            ├── billing/
            │   └── page.tsx          # Halaman Billing & Invoice global (Admin)
            ├── customers/
            │   └── page.tsx          # Halaman Manajemen Akun Pelanggan (Admin)
            ├── domains/
            │   └── page.tsx          # Halaman Kontrol Seluruh Domain Sistem (Admin)
            ├── pricing/
            │   └── page.tsx          # Pengaturan Markup Harga TLD (Admin)
            ├── settings/
            │   └── page.tsx          # Konfigurasi Umum Server/Situs (Admin)
            └── transactions/
                └── page.tsx          # Manajemen Transaksi & Verifikasi Pembayaran (Admin)
```

---

## 3. Sistem Desain, Tema & Styling

Aplikasi menggunakan pendekatan desain **Solid Premium** yang dinamis dan modern:

### A. Variabel CSS Utama (`src/styles/global.css`)
Desain dikontrol secara penuh melalui variabel CSS kustom untuk memudahkan kustomisasi tema:
- **Tema Gelap (Default)**: Diaktifkan secara otomatis (menggunakan `color-scheme: dark`) dengan latar belakang gelap (`#121214`) dan aksen biru premium (`#2563eb`).
- **Tema Terang (Override)**: Dapat diaktifkan pada bagian dashboard dengan menyisipkan atribut `data-theme="light"` pada tag `body`.
- **Tipografi**: Menggunakan font **Plus Jakarta Sans** yang dimuat menggunakan modul `next/font/google` untuk meminimalisasi cumulative layout shift (CLS) dan mempercepat pemuatan halaman.

### B. Animasi & Interaktivitas
- Komponen React `aether-flow-hero.tsx` merender partikel HTML5 Canvas interaktif yang merespons pergerakan kursor pengguna di Landing Page.
- Menggunakan transisi halus (`transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1)`) untuk status hover pada tombol, navigasi, dan baris tabel.

---

## 4. Arsitektur Layout & Guard Navigasi (Next.js Middleware)

Untuk mengamankan route privat, autentikasi tidak hanya dikontrol di sisi browser client, tetapi diverifikasi di level Edge/Server menggunakan **Next.js Middleware**:

### A. Middleware Autentikasi (`src/middleware.ts`)
- Middleware memotong setiap request ke rute `/dashboard`, `/profile`, `/checkout`, `/domains/[id]`, dan `/admin`.
- Membaca token autentikasi (biasanya JWT) yang disimpan di dalam **Cookies**.
- **Aturan Guard**:
  1. Jika rute berada di bawah `/dashboard`, `/profile`, atau `/checkout` dan token tidak ditemukan, middleware akan mengalihkan (*redirect*) user ke `/login?next=current-path`.
  2. Jika rute berada di bawah `/admin` (rute kontrol administrator), middleware memeriksa klaim hak akses dari payload user (misal membaca cookie `user` atau request cepat ke API). Jika user tidak memiliki status `is_admin === true`, akses akan dialihkan paksa ke `/dashboard`.
  3. Jika rute publik seperti `/login` atau `/register` diakses oleh user yang sudah login, mereka akan langsung diarahkan ke `/dashboard`.

### B. Struktur Layout
1. **Root Layout (`src/app/layout.tsx`)**: Layout global yang memuat header publik, logo dinamis, dropdown profil, menu responsif (hamburger), dan footer. Detail branding (`app_name` dan `app_logo`) diunduh secara server-side dari API `/api/settings` menggunakan Next.js `fetch` dengan caching.
2. **Dashboard Layout (`src/app/dashboard/layout.tsx`)**: Layout khusus portal customer, menyediakan sidebar navigasi yang berisi shortcut ke Domain Saya, Daftar Harga, WHOIS, dan Profil Akun.
3. **Admin Layout (`src/app/admin/layout.tsx`)**: Layout khusus admin dashboard, memuat menu administrasi sistem: Transaksi, Pelanggan, Domain, Harga Domain, Billing, dan Pengaturan.

---

## 5. Alur Logika Utama & Fitur Penting

### A. Logika Autentikasi 2-Langkah & OTP (`src/app/login/page.tsx`)
Untuk menjaga keamanan akun, alur login dirancang dengan mitigasi delay OTP:
1. **Langkah 1 (Kredensial)**: Pengguna memasukkan Email dan Password. Form diproteksi dengan bot protection **Cloudflare Turnstile** pada build produksi menggunakan library React Turnstile.
2. **Langkah 2 (Pengiriman OTP)**: API mengembalikan respons sukses bahwa OTP telah dikirim. Halaman menampilkan form penginputan OTP (6 digit angka).
3. **Mitigasi Delay/Resend OTP**:
   - Jika kode OTP tidak segera sampai di email pengguna, terdapat tombol **"Kirim Ulang"**.
   - Tombol Kirim Ulang memicu kembali request ke endpoint `/api/auth/login-step1` menggunakan data kredensial awal.
   - Pemicu ini dilengkapi dengan **cooldown timer selama 60 detik**. Selama cooldown berjalan, tombol akan dinonaktifkan (`disabled`) dan menampilkan sisa detik hitung mundur. Setelah 0 detik, tombol aktif kembali untuk mencegah spamming request.
   - Kolom OTP dilengkapi dengan filter input real-time regex `/\\D/g` untuk menghapus spasi atau karakter non-angka secara otomatis saat mengetik.

### B. Cascading Dropdown Wilayah Administratif (`src/utils/region.ts`)
Registrasi domain membutuhkan informasi alamat kontak yang sah dan terstandarisasi. Proyek ini mengintegrasikan cascading dropdown wilayah administrasi Indonesia:
- Alur pemanggilan dinamis: **Pilih Provinsi** $\rightarrow$ **Pilih Kabupaten/Kota** $\rightarrow$ **Pilih Kecamatan** $\rightarrow$ **Pilih Kelurahan**.
- Menggunakan fungsi inisialisasi helper `initRegionDropdowns(...)` yang mengikat event listener pada elemen select dropdown di dalam form React Client Component.
- Data diunduh secara asynchronous secara langsung dari backend proxy:
  - Provinsi: `/api/auth/regions/provinces`
  - Kabupaten: `/api/auth/regions/regencies/{provinceId}`
  - Kecamatan: `/api/auth/regions/districts/{regencyId}`
  - Kelurahan: `/api/auth/regions/villages/{districtId}`
- Menangani status penonaktifan (`disabled = true`) dropdown di bawahnya secara otomatis selama dropdown di atasnya belum dipilih.

### C. Alur Belanja Domain & Checkout (`src/app/checkout/page.tsx`)
1. Pengguna mencari domain di Landing Page atau halaman `/domains`.
2. Domain yang tersedia ditambahkan ke state keranjang belanja lokal (bisa menggunakan React Context atau LocalStorage).
3. Halaman `/checkout` memproses item tersebut:
   - Pengaturan konfigurasi domain: Opsi Tambahan Perlindungan Data WHOIS (WHOIS Privacy) dan DNS Management.
   - Input Alamat Kontak Registran menggunakan cascading dropdown administratif untuk validasi data yang akurat.
   - Memilih metode pembayaran (Transfer Bank Manual, Gateway, dll.).
   - Pengiriman data order ke `/api/orders` di backend dan pengalihan ke halaman `/domains/payment` untuk upload bukti transfer atau verifikasi.

### D. Kontrol Panel Domain Detail (`src/app/domains/[id]/page.tsx`)
Halaman ini menggunakan parameter rute dinamis Next.js (`[id]`) dan mengelola fungsi domain secara komprehensif melalui Client Component dengan sistem tab berbasis React State (`const [activeTab, setActiveTab] = useState('overview')`):
1. **Overview Tab**: Menampilkan detail domain (tgl pendaftaran, kadaluarsa, status autorenew, tombol perpanjang). Dilengkapi dengan toggle switch client-side untuk mengaktifkan/menonaktifkan **Theft Protection / Registrar Lock**.
2. **DNS Management Tab**: Mengelola catatan DNS. Mendukung penambahan, pengeditan, dan penghapusan record tipe: `A`, `AAAA`, `MX`, `CNAME`, `TXT`, `SRV`, `CAA`, dan `NS`.
3. **Nameserver Tab**: Mengedit/mengubah daftar nameserver khusus domain pelanggan (misal: Cloudflare NS).
4. **Child Nameserver Tab**: Mengelola Glue Records (Child Nameservers) untuk mendaftarkan nama server di bawah nama domain itu sendiri.
5. **Forwarding Tab**: Mengonfigurasi pengalihan lalu lintas URL domain ke alamat web lain.
6. **DNSSEC Tab**: Mengamankan DNS dengan kunci cryptographic (pendaftaran DNSSEC keys).
7. **Whois Tab**: Menampilkan informasi detil WHOIS domain dan memperbarui data kontak pemilik (Registrant/Admin/Technical/Billing).

### E. Manajemen Admin Markup Harga TLD (`src/app/admin/pricing/page.tsx`)
Halaman ini memberikan wewenang bagi Administrator untuk mengontrol harga domain yang dijual kepada customer:
- Menampilkan daftar TLD (Top Level Domains) yang aktif di sistem.
- Admin dapat menetapkan markup harga secara global atau spesifik per TLD untuk transaksi **Registrasi**, **Perpanjangan (Renewal)**, dan **Transfer**.
- Perubahan disimpan langsung ke API backend untuk memengaruhi kalkulasi harga real-time di Landing Page, `/prices`, dan modul checkout domain.

---

## 6. Pola Integrasi API (`src/utils/api.ts`)

Seluruh komunikasi data ke backend diwadahi oleh fungsi terpusat `apiFetch`:

```typescript
export const apiFetch = async <T = any>(
  path: string,
  options: ApiOptions = {}
): Promise<T> => { ... }
```

### Aturan Integrasi API:
1. **Otorisasi Otomatis**: Secara default (`requireAuth: true`), helper akan membaca token jwt dari browser cookie atau `localStorage.getItem('token')` dan menyisipkannya ke dalam header permintaan sebagai `Authorization: Bearer <token>`.
2. **Penanganan Sesi Berakhir (401/403)**: Jika server merespons dengan status unauthorized (401/403) dan request membutuhkan otorisasi, client akan menghapus token dan user session dari storage, kemudian mengalihkan pengguna ke halaman login publik dengan query parameter `/login?expired=true`.
3. **Konversi Error**: Jika payload respons server memiliki properti `success: false`, helper ini otomatis menangkap pesan error dari server dan memicu `throw new Error(...)` di level JavaScript agar dapat dikelola dengan mudah pada form validator halaman Next.js.

---

## 7. Instruksi Pengembangan, Build, & Deploy

### A. Environment Variables (`.env.local`)
Salin file `.env.example` menjadi `.env.local` di direktori utama `ruangtunggu-web/` dan isi nilainya:

```ini
# URL Base API Backend
NEXT_PUBLIC_API_URL=https://api.domain-anda.com

# Site Key Cloudflare Turnstile (Opsional untuk Captcha)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_cloudflare_turnstile_site_key
```

### B. Perintah Utama (CLI Commands)
Jalankan perintah berikut di dalam direktori `ruangtunggu-web/`:

```bash
# 1. Menginstal dependensi proyek
npm install

# 2. Menjalankan server development Next.js lokal
npm run dev

# 3. Membangun bundle produksi Next.js
npm run build

# 4. Menjalankan hasil build produksi secara lokal
npm run start
```

### C. Panduan Tambahan Pengambilan Alih Proyek oleh Developer Baru
1. **Penerapan Server & Client Component**: Gunakan direktif `"use client"` di bagian atas file hanya untuk komponen yang berinteraksi dengan browser event (seperti form submit, state input, regional cascading dropdown, dan panel tab domain). Halaman list statis atau data fetching awal harus didefinisikan sebagai Server Component untuk memaksimalkan performa.
2. **CORS Configuration**: Pastikan backend API mengizinkan CORS (*Cross-Origin Resource Sharing*) untuk domain frontend (baik domain produksi Vercel maupun `localhost` saat masa development).
