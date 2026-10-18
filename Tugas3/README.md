# Tentang website

- Website ini berisi tentang data diri saya, Muhammad Daffa Ighnan Fauzan, mahasiswa Teknik Informatika di Universitas Suryakancana.
- Game Favorit

## Note: HTML

| Kode | Kegunaan singkat |
| --- | --- |
| `&nearr;` | Kode HTML untuk panah ↗. Sekarang ditulis langsung sebagai `↗` supaya lebih mudah dibaca. |
| `&uarr;` | Kode HTML untuk panah ↑. Sekarang ditulis langsung sebagai `↑`. |
| `&copy;` | Kode HTML untuk simbol ©. Sekarang ditulis langsung sebagai `©`. |
| `<meta charset="UTF-8">` | Membuat huruf dan simbol seperti panah bisa terbaca dengan benar. |
| `<meta name="viewport" ...>` | Membantu lebar halaman menyesuaikan layar HP. |
| `<span>` | Membungkus potongan teks agar bisa diberi CSS sendiri. Dipakai untuk warna tanda `/` pada logo dan menyembunyikan teks tambahan header di HP. |
| `<figure>` | Mengelompokkan gambar dengan keterangannya. Juga dipakai sebagai pembungkus foto About agar mudah diatur. |
| `<figcaption>` | Keterangan gambar di dalam `figure`, misalnya sumber screenshot. |
| `<caption>` | Judul atau keterangan tabel, berbeda dengan keterangan gambar. |
| `<small>` | Menandai teks tambahan, seperti label bagian dan catatan footer. |
| `<main>` | Menandai isi utama halaman. Tetap dipakai meskipun tidak punya CSS khusus. |
| `<section>`, `<article>`, `<aside>` | Section mengelompokkan bagian halaman; article berisi tulisan utama; aside berisi informasi pendamping. |
| `class="article"` | Nama kelompok elemen yang dipilih di CSS dengan `.article`. Bisa dipakai berulang. |
| `id="about-intro"` | Identitas unik elemen yang dipilih dengan `#about-intro`. ID juga bisa jadi tujuan link seperti `#data-diri`. |
| `aria-label` | Nama yang membantu pengguna pembaca layar memahami bagian atau link. Tidak tampil sebagai tulisan di halaman. |
| `aria-current="page"` | Menandai link halaman yang sedang dibuka. Di CSS website ini juga dipakai untuk memberi warna menu aktif. |
| `alt` pada gambar | Menjelaskan isi gambar untuk pembaca layar atau ketika gambar gagal dimuat. |
| `width` dan `height` pada gambar | Memberi ukuran/rasio awal agar tempat gambar sudah tersedia sebelum selesai dimuat. CSS tetap membuatnya responsif. |
| `loading="lazy"` | Menunda pemuatan gambar yang masih jauh dari area layar agar pemuatan awal lebih ringan. |
| `<th scope="row">` | Menandai judul baris tabel, misalnya `Nama lengkap`, agar hubungan judul dan datanya jelas. |

## Note: selector CSS

Selector adalah bagian sebelum `{` yang menentukan elemen mana yang diberi style.

| Bentuk dan contoh di website | Artinya |
| --- | --- |
| `img` | Selector tag: memilih semua elemen `img`. |
| `.article` | Titik memilih elemen dengan `class="article"`. |
| `#about-intro` | Pagar memilih elemen dengan `id="about-intro"`. |
| `.logo span` | Spasi berarti turunan: memilih semua `span` di dalam `.logo`, meskipun bukan anak langsung. |
| `.header > div` | `>` berarti anak langsung: memilih `div` tepat di dalam `.header`, bukan `div` di dalam navbar. |
| `.header > div p` | Gabungan: memilih `p` di dalam `div` yang merupakan anak langsung `.header`. |
| `#about .article` | Memilih `.article` khusus di dalam elemen ber-ID `about`, jadi halaman lain tidak ikut berubah. |
| `small, figcaption, caption` | Koma menggabungkan beberapa selector agar memakai aturan yang sama. |
| `*` | Memilih semua elemen. Di website ini untuk menerapkan `box-sizing: border-box`. |
| `.menu a[aria-current="page"]` | Kurung siku memilih elemen berdasarkan atribut dan nilainya. Di sini memilih link menu aktif. |
| `.menu a:first-child` | Memilih link yang menjadi anak pertama di dalam induknya. Dipakai untuk menghilangkan garis kiri menu pertama. |
| `.menu a:hover` | Style saat pointer berada di atas link. |
| `a:focus-visible` | Style fokus yang terlihat, terutama saat pindah link memakai tombol Tab. |
| `.header::before` | Membuat lapisan tambahan lewat CSS tanpa menambah tag HTML. Dipakai untuk gambar latar header. |

Tanda `:` pada `:hover` menandai kondisi elemen (pseudo-class), sedangkan `::before` membuat bagian tambahan (pseudo-element).
Tanda `#` pada `#about` adalah selector ID; pada `color: #111` artinya kode warna, bukan ID.

## Note: aturan dan nilai CSS yang dipakai

| Kode | Kegunaan singkat |
| --- | --- |
| `{ ... }`, `:`, `;` | Kurung kurawal membungkus aturan. Titik dua memisahkan properti dan nilainya; titik koma mengakhiri deklarasi. Contoh: `color: white;`. |
| `@font-face` | Mendaftarkan font lokal Barlow Condensed dari folder assets agar bisa dipakai tanpa internet. |
| `font-display: swap` | Menampilkan font cadangan dulu saat font lokal belum selesai dimuat. |
| `@media (max-width: 650px)` | Menjalankan aturan khusus ketika lebar layar maksimal 650px. Versi 900px dipakai untuk penyesuaian tablet. |
| `display: flex` | Menyusun elemen dalam satu arah; dipakai agar logo dan menu sejajar. |
| `justify-content`, `align-items`, `align-self` | Mengatur posisi isi layout. `align-self` mengatur satu elemen saja. |
| `display: grid` | Membagi ruang menjadi kolom/baris; dipakai untuk article–aside dan teks–foto About. |
| `grid-template-columns`, `grid-template-rows`, `gap` | Menentukan ukuran kolom/baris dan jarak antarbagian. |
| `minmax(0, 2fr)` | Kolom minimal 0 dan mendapat 2 bagian ruang tersisa. Bersama `1fr`, perbandingannya menjadi 2:1. Minimum 0 membantu isi tidak memaksa kolom melebar. |
| `px`, `%`, `rem`, `ch`, `fr` | `px`: piksel CSS; `%`: persentase ukuran acuan; `rem`: ukuran relatif terhadap font utama; `ch`: lebar karakter 0 pada font; `fr`: bagian ruang tersisa di grid. |
| `max-width`, `min-height`, `height: auto` | Membatasi lebar, memberi tinggi minimum, dan menjaga tinggi gambar mengikuti perbandingan aslinya. |
| `margin`, `padding`, `box-sizing: border-box` | Margin adalah jarak luar; padding jarak dalam. Border-box membuat ukuran yang ditetapkan sudah termasuk padding dan border. |
| `position: relative`, `position: absolute`, `inset: 0` | Relative menjadi acuan posisi; absolute menempatkan lapisan di dalamnya; inset 0 menempelkan lapisan ke keempat sisi acuan. |
| `isolation: isolate`, `z-index: -1` | Membuat kelompok urutan lapisan tersendiri dan menaruh gambar latar di belakang isi header. |
| `background: url(...) center / cover` | Memakai gambar latar di tengah, diperbesar agar menutupi seluruh area; sebagian tepi bisa terpotong. |
| `rgba(...)`, `opacity` | RGBA memberi warna dengan transparansi; opacity mengatur transparansi seluruh elemen/lapisan. |
| `backdrop-filter: blur(...)` | Memburamkan gambar di belakang navbar/tombol agar teksnya lebih mudah dibaca. |
| `filter: grayscale(1)` | Membuat gambar hitam-putih. Hanya dipakai pada latar header dan foto data diri; gambar artikel Home/Game tidak memakai filter ini. |
| `mask-image: radial-gradient(...)` | Memudarkan tepian foto About. Bagian mask hitam menampilkan foto; bagian transparan menyembunyikannya, sehingga menyatu dengan latar hitam. |
| `inherit`, `currentColor` | Inherit mengambil nilai dari induk. CurrentColor memakai warna teks elemen tersebut, misalnya untuk garis fokus. |
| `display: block`, `inline-block`, `none` | Block membuat kotak satu blok; inline-block membuat kotak yang tetap bisa sejajar dengan teks; none menyembunyikan elemen. |
| `font-weight`, `line-height`, `letter-spacing` | Mengatur ketebalan huruf, tinggi baris, dan jarak antarhuruf. |
| `border-collapse: collapse`, `vertical-align: top` | Merapatkan garis tabel dan menempatkan isi sel di bagian atas. |
| `overflow-wrap: anywhere` | Mengizinkan teks panjang terpotong ke baris berikutnya supaya tidak keluar dari layar kecil. |
| `text-underline-offset`, `text-decoration-thickness` | Mengatur jarak dan ketebalan garis bawah link. |

## Penyederhanaan tanpa mengubah tampilan

- Kode `&nearr;`, `&uarr;`, dan `&copy;` di tiga file HTML diganti dengan simbol langsung yang tampil sama.
- `id="home"` dihapus karena tidak dipakai oleh CSS atau tujuan link. ID About dan Game tetap dibutuhkan untuk gambar header masing-masing.
- `width: 100%` pada `.container` dihapus karena elemen blok tersebut sudah memenuhi lebar induknya.
- Background khusus `main` dihapus karena seluruh areanya tertutup background section `.content`.
- `span`, `figure`, `figcaption`, atribut aksesibilitas, dan ukuran gambar tetap dipakai karena punya fungsi.
- Aturan `img` umum tidak lagi memberi efek hitam-putih; efek foto data diri ada khusus di `#about-intro img`.



