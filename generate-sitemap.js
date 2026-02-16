import fs from 'fs';

// Örnek geniş veri yapısı (Burayı elindeki ilçe/mahalle isimleriyle doldurabiliriz)
const iller = [
  { ad: 'istanbul', ilceler: ['kadikoy', 'besiktas', 'umraniye', 'uskudar', 'pendik', 'kartal'] },
  { ad: 'ankara', ilceler: ['cankaya', 'kecioren', 'yenimahalle', 'mamak', 'etimesgut'] },
  { ad: 'izmir', ilceler: ['konak', 'karsiyaka', 'bornova', 'buca', 'ciigli'] },
  // Lütfü, buraya en çok iş aldığın diğer illeri de ekleyebilirsin
];

// Mahalleleri simüle eden bir yardımcı (Her ilçeye otomatik 10 örnek mahalle ekler)
const mahalleSayıcı = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

const hostname = 'https://evdeneve.metintasarim.io';
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

// 1. Sabit Sayfalar
['', '/hizmet-bolgelerimiz', '/blog', '/site-haritasi'].forEach(page => {
  xml += `\n  <url><loc>${hostname}${page}</loc><priority>1.0</priority></url>`;
});

// 2. Binlerce Sayfayı Üreten Döngü
iller.forEach((il) => {
  il.ilceler.forEach((ilce) => {
    // İlçe ana sayfası
    xml += `\n  <url><loc>${hostname}/${il.ad}/${ilce}</loc><priority>0.8</priority></url>`;
    
    // Her ilçeye 10 mahalle linki ekliyoruz (Örnek: kadikoy-mahalle-1)
    mahalleSayıcı.forEach(m => {
      const mahalleUrl = `${hostname}/${il.ad}/${ilce}/mahalle-${m}`;
      xml += `\n  <url><loc>${mahalleUrl}</loc><priority>0.6</priority></url>`;
      
      const evTasimaUrl = `${hostname}/ev-tasima/${il.ad}/${ilce}/mahalle-${m}`;
      xml += `\n  <url><loc>${evTasimaUrl}</loc><priority>0.5</priority></url>`;
    });
  });
});

xml += `\n</urlset>`;
fs.writeFileSync('./public/sitemap.xml', xml);
console.log('Binlerce satırlık sitemap.xml başarıyla oluşturuldu!');