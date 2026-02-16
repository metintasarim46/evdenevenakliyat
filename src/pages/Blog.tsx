import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogYazilari = [
    {
      slug: 'evden-eve-nakliyat-rehberi',
      baslik: 'Evden Eve Nakliyat Sürecinde Hayat Kurtaran 5 Altın Kural',
      ozet: 'Taşınma sürecini stresten uzak, hasarsız ve planlı bir şekilde atlatmak için bilmeniz gereken tüm profesyonel nakliyat ipuçları...',
      tarih: '18 Şubat 2026',
      kategori: 'Evden Eve Nakliyat'
    },
    {
      slug: 'sorunsuz-ev-tasima',
      baslik: 'Sorunsuz Bir Ev Taşıma Deneyimi İçin Adım Adım Yapılması Gerekenler',
      ozet: 'Eşya ayıklamadan abonelik iptallerine, marangozlu taşımadan yeni ev yerleşimine kadar eksiksiz ev taşıma rehberiniz.',
      tarih: '15 Şubat 2026',
      kategori: 'Ev Taşıma'
    },
    {
      slug: 'ofis-tasimaciliginda-dikkat-edilmesi-gerekenler',
      baslik: 'Kurumsal Ofis Taşımacılığında Dikkat Edilmesi Gereken Önemli Detaylar',
      ozet: 'İş akışınız kesintiye uğramadan, evraklarınız ve elektronik cihazlarınız güvenle nasıl taşınır? Ofis taşımanın püf noktaları.',
      tarih: '12 Şubat 2026',
      kategori: 'Ofis Taşıma'
    },
    {
      slug: 'sehirlerarasi-nakliyatta-guvenilir-firma-secimi',
      baslik: 'Şehirlerarası Nakliyatta Güvenilir Firma Seçimi Nasıl Yapılmalı?',
      ozet: 'Yüzlerce kilometre yol gidecek eşyalarınızı kime emanet etmelisiniz? Korsan firmalardan korunma ve doğru tercih rehberi.',
      tarih: '08 Şubat 2026',
      kategori: 'Şehirlerarası'
    },
    {
      slug: 'asansorlu-nakliyat-nedir-avantajlari-nelerdir',
      baslik: 'Asansörlü Nakliyat Nedir? Avantajları ve Fiyatları Nelerdir?',
      ozet: 'Yüksek katlı binalarda eşya taşıma kabusunu bitiren dış cephe asansörlü taşıma sistemi hakkında merak edilen her şey.',
      tarih: '05 Şubat 2026',
      kategori: 'Asansörlü Taşıma'
    }
  ];

  return (
    <div style={{ backgroundColor: '#f7fafc', minHeight: '80vh', padding: '140px 20px 80px', fontFamily: "'Arial', sans-serif" }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', color: '#2d3748', marginBottom: '15px' }}>Nakliyat ve Taşınma Rehberi</h1>
          <p style={{ color: '#718096', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Evden eve nakliyat, eşya paketleme ve sorunsuz taşınma süreçleri hakkında uzman ekibimiz tarafından hazırlanan güncel yazılarımız.
          </p>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#3182ce', margin: '20px auto', borderRadius: '2px' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
          {blogYazilari.map((yazi, index) => (
            <div key={index} style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', border: '1px solid #e2e8f0', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} 
                 onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'; }}
                 onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)'; }}>
              <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '15px' }}>
                  <span style={{ backgroundColor: '#ebf8ff', color: '#3182ce', padding: '5px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>{yazi.kategori}</span>
                  <span style={{ color: '#a0aec0', fontSize: '0.85rem', marginLeft: '15px' }}>{yazi.tarih}</span>
                </div>
                <h2 style={{ fontSize: '1.5rem', color: '#2d3748', margin: '0 0 15px', lineHeight: 1.4 }}>{yazi.baslik}</h2>
                <p style={{ color: '#4a5568', lineHeight: 1.6, marginBottom: '25px', flexGrow: 1 }}>{yazi.ozet}</p>
                <Link to={`/blog/${yazi.slug}`} style={{ display: 'inline-block', backgroundColor: '#3182ce', color: 'white', padding: '10px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', textAlign: 'center' }}>
                  Yazıyı Oku &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;