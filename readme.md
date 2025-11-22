# Sinau Aksara Jawa

Aplikasi pembelajaran Aksara Jawa interaktif berbasis website dengan bantuan AI.

## Fitur

1. **Aksara Nglegena**: Pengenalan 20 huruf dasar dengan audio.
2. **Pasangan**: Daftar pasangan huruf mati.
3. **Sandhangan**: Penjelasan tanda bunyi vokal.
4. **AI Generator**: Membuat contoh kata/kalimat otomatis menggunakan Google Gemini.
5. **Kuis Interaktif**: Soal dinamis yang dibuat oleh AI.

## Identitas Pembuat
- **Nama**: Guruh Saputra
- **Kelas**: 6 SD
- **Sekolah**: SD Negeri Batur 01, Kec. Getasan

## Cara Install & Jalankan

### Prasyarat
- Node.js (v18+)
- API Key dari [Google AI Studio](https://aistudio.google.com/)

### Langkah-langkah

1. Clone atau download folder ini.
2. Buka terminal di folder proyek.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Buat file `.env` di root folder dan isi API Key Gemini Anda:
   ```
   VITE_API_KEY=masukkan_api_key_anda_disini
   ```
   *Catatan: Di kode sumber `services/geminiService.ts`, ganti `process.env.API_KEY` dengan `import.meta.env.VITE_API_KEY` jika menggunakan Vite standard, atau sesuaikan dengan konfigurasi environment Anda.*

5. Jalankan aplikasi:
   ```bash
   npm run dev
   ```

## Cara Deploy ke Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Jalankan perintah:
   ```bash
   vercel
   ```
3. Ikuti instruksi di terminal.
