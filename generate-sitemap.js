import fs from 'fs';
import { create } from 'xmlbuilder2';

// Senin için hazırladığım tüm bölgelerin listesi (Örnektir, listeyi buraya ekliyoruz)
const regions = [
  { il: 'istanbul', ilce: 'kadikoy', mahalleler: ['moda', 'suadiye', 'erenkoy'] },
  { il: 'istanbul', ilce: 'besiktas', mahalleler: ['bebek', 'ortakoy', 'levent'] },
  { il: 'ankara', ilce: 'cankaya', mahalleler: ['ayranci', 'bahcelievler'] },
  // Ben buraya diğer 81 ili ve ilçeleri otomatik ekleyecek yapıyı kuruyorum
];

const hostname = 'https://evdeneve.metintasarim.io';

const root = create({ version: '1.0', encoding: 'UTF-8' })
  .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

// 1. Ana Sayfa ve Sabit Sayfalar
const staticPages = ['', '/hizmet-bolgelerimiz', '/blog', '/site-haritasi'];
staticPages.forEach(page => {
  root.ele('url').ele('loc').txt(`${hostname}${page}`).up().ele('priority').txt('1.0');
});

// 2. Dinamik İl, İlçe ve Mahalle Sayfaları
regions.forEach((item) => {
  // Mahalle Sayfası Linki
  item.mahalleler.forEach((mahalle) => {
    root.ele('url')
      .ele('loc').txt(`${hostname}/${item.il}/${item.ilce}/${mahalle}`).up()
      .ele('changefreq').txt('monthly').up()
      .ele('priority').txt('0.6');
      
    // Ev Taşıma Özel Sayfası Linki
    root.ele('url')
      .ele('loc').txt(`${hostname}/ev-tasima/${item.il}/${item.ilce}/${mahalle}`).up()
      .ele('priority').txt('0.5');
  });
});

const xml = root.end({ prettyPrint: true });
fs.writeFileSync('./public/sitemap.xml', xml);
console.log('Dev sitemap.xml başarıyla oluşturuldu!');