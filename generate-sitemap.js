import fs from 'fs';

// Senin için hazırladığım bölgelerin listesi
const regions = [
  { il: 'istanbul', ilce: 'kadikoy', mahalleler: ['moda', 'suadiye', 'erenkoy'] },
  { il: 'istanbul', ilce: 'besiktas', mahalleler: ['bebek', 'ortakoy', 'levent'] },
  { il: 'ankara', ilce: 'cankaya', mahalleler: ['ayranci', 'bahcelievler'] },
  // Diğer bölgeleri de buraya ekleyebilirsin
];

const hostname = 'https://evdeneve.metintasarim.io';

// XML Başlangıcı
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

// 1. Sabit Sayfalar
const staticPages = ['', '/hizmet-bolgelerimiz', '/blog', '/site-haritasi'];
staticPages.forEach(page => {
  xml += `
  <url>
    <loc>${hostname}${page}</loc>
    <priority>1.0</priority>
  </url>`;
});

// 2. Dinamik Mahalle Sayfaları
regions.forEach((item) => {
  item.mahalleler.forEach((mahalle) => {
    xml += `
  <url>
    <loc>${hostname}/${item.il}/${item.ilce}/${mahalle}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${hostname}/ev-tasima/${item.il}/${item.ilce}/${mahalle}</loc>
    <priority>0.5</priority>
  </url>`;
  });
});

xml += `
</urlset>`;

// Dosyayı public klasörüne yaz
fs.writeFileSync('./public/sitemap.xml', xml);
console.log('Paketsiz dev sitemap.xml başarıyla oluşturuldu!');