import fs from 'fs';
import path from 'path';

// Generate a valid minimal PDF 1.4 document
function createMinimalPdf() {
  const content = `BT
/F1 20 Tf
50 750 Td
(CURRICULUM VITAE - SHALWA FEBRI RAHMATULLAH) Tj
0 -30 Td
/F1 12 Tf
(Mahasiswa D3 Manajemen Informatika - Politeknik Negeri Padang) Tj
0 -20 Td
(Fokus: Web Development, Database Management, Application & Graphic Design) Tj
0 -30 Td
/F1 14 Tf
(PENDIDIKAN) Tj
0 -18 Td
/F1 11 Tf
(Politeknik Negeri Padang - D3 Manajemen Informatika (2024 - Sekarang)) Tj
0 -30 Td
/F1 14 Tf
(KEAHLIAN UTAMA) Tj
0 -18 Td
/F1 11 Tf
(- Pemrograman & Web: Java, PHP / Laravel, Next.js, HTML5, CSS3, JavaScript) Tj
0 -16 Td
(- Database: MySQL, Perancangan ERD, Query SQL) Tj
0 -16 Td
(- Desain Grafis: Adobe Illustrator, Adobe Photoshop, Brand Identity) Tj
0 -30 Td
/F1 14 Tf
(PROYEK UNGGULAN) Tj
0 -18 Td
/F1 11 Tf
(1. Sistem PPDB Sekolah Berbasis Web (PHP/Laravel, MySQL)) Tj
0 -16 Td
(2. Sistem Informasi Pengelolaan Anggota & Kegiatan Organisasi (Web & MySQL)) Tj
0 -16 Td
(3. Aplikasi Restoran Desktop (Java & MySQL)) Tj
0 -16 Td
(4. Prototipe Aplikasi Mobile Store) Tj
0 -16 Td
(5. Desain Identitas Visual Logo UMKM (Adobe Illustrator)) Tj
0 -30 Td
/F1 14 Tf
(KONTAK & INFORMASI RESMI) Tj
0 -18 Td
/F1 11 Tf
(Dokumen ini merupakan ringkasan resmi CV Shalwa Febri Rahmatullah.) Tj
0 -16 Td
(Silakan hubungi melalui website portofolio untuk dokumen lengkap terperinci.) Tj
ET`;

  const streamLength = Buffer.byteLength(content, 'utf-8');

  const pdf = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 595.28 841.89]
  /Contents 4 0 R
  /Resources <<
    /Font <<
      /F1 5 0 R
    >>
  >>
>>
endobj
4 0 obj
<<
  /Length ${streamLength}
>>
stream
${content}
endstream
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
0000000320 + streamLength 00000 n 
trailer
<<
  /Size 6
  /Root 1 0 R
>>
startxref
${streamLength + 400}
%%EOF`;

  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(path.join(publicDir, 'cv-shalwa.pdf'), pdf, 'utf-8');
  console.log('Valid placeholder PDF generated at public/cv-shalwa.pdf');
}

createMinimalPdf();
