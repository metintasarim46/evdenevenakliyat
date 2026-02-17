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
    <section style={{ backgroundColor: '#f7fafc', minHeight: '80vh', padding: '100px 0 60px', fontFamily: "'Arial', sans-serif" }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Başlık Bölümü - SEO ve Mobil Optimize */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#2d3748', marginBottom: '15px', lineHeight: 1.2 }}>
            Nakliyat ve Taşınma Rehberi
          </h2>
          <p style={{ color: '#718096', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.5 }}>
            Evden eve nakliyat ve profesyonel taşınma süreçleri hakkında uzman ekibimiz tarafından hazırlanan güncel rehberler.
          </p>
          <div style={{ width: '60px', height: '4px', backgroundColor: '#3182ce', margin: '20px auto', borderRadius: '2px' }}></div>
        </div>

        {/* Blog Kartları - Mobil Uyumluluk Odaklı Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', 
          gap: '25px' 
        }}>
          {blogYazilari.map((yazi, index) => (
            <article 
              key={index} 
              style={{ 
                backgroundColor: 'white', 
                borderRadius: '12px', 
                overflow: 'hidden', 
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)', 
                display: 'flex', 
                flexDirection: 'column', 
                border: '1px solid #e2e8f0', 
                transition: 'all 0.3s ease' 
              }} 
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)'; }}
            >
              <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                  <span style={{ backgroundColor: '#ebf8ff', color: '#3182ce', padding: '4px 10px', borderRadius: '15px', fontSize: '0.75rem', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                    {yazi.kategori}
                  </span>
                  <span style={{ color: '#a0aec0', fontSize: '0.75rem' }}>{yazi.tarih}</span>
                </div>
                <h2 style={{ fontSize: '1.4rem', color: '#2d3748', margin: '0 0 12px', lineHeight: 1.3 }}>{yazi.baslik}</h2>
                <p style={{ color: '#4a5568', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px', flexGrow: 1 }}>{yazi.ozet}</p>
                <Link 
                  to={`/blog/${yazi.slug}`} 
                  style={{ 
                    display: 'block', 
                    backgroundColor: '#3182ce', 
                    color: 'white', 
                    padding: '12px', 
                    borderRadius: '8px', 
                    textDecoration: 'none', 
                    fontWeight: 'bold', 
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    transition: 'background-color 0.2s'
                  }}
                >
                  Yazıyı Oku &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;