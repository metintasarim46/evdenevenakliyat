import React from 'react';
import { useParams } from 'react-router-dom';

const EvTasimaSayfasi = () => {
  const { il, ilce } = useParams();
  const formatliIlce = ilce ? ilce.charAt(0).toUpperCase() + ilce.slice(1).toLowerCase() : "İlçe";
  const formatliIl = il ? il.charAt(0).toUpperCase() + il.slice(1).toLowerCase() : "İl";

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", backgroundColor: '#fff' }}>
      
      {/* 1. KISIM: HERO ALANI (Üstten boşluk artırıldı ki menünün altında kalmasın) */}
      <section style={{ backgroundColor: '#f0fff4', padding: '140px 20px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3.5rem', color: '#276749', marginBottom: '20px', lineHeight: '1.2' }}>
                {formatliIlce} Ev Taşıma <br /> 
                <span style={{ color: '#2d3748', fontSize: '2.5rem' }}>Şirketi</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '40px' }}>
                Yeni evinize geçerken eşyalarınızı dert etmeyin. Metin Nakliyat olarak, <strong>{formatliIl} {formatliIlce}</strong> bölgesinde profesyonel ambalajlı, marangozlu ve sigortalı <strong>ev taşıma</strong> hizmeti sunuyoruz. Anahtar teslim taşıma kolaylığını bizimle yaşayın.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:05432107058" style={{ backgroundColor: '#38a169', color: 'white', padding: '15px 35px', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 4px 6px rgba(56, 161, 105, 0.3)' }}>Hemen Fiyat Al</a>
                <a href="#detaylar" style={{ backgroundColor: '#e2e8f0', color: '#4a5568', padding: '15px 35px', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem' }}>Hizmet Detayları</a>
            </div>
        </div>
      </section>

      {/* 2. KISIM: SEO ODAKLI DETAYLI İÇERİK ALANI */}
      <section id="detaylar" style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        
        {/* Ana Makale */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#2d3748', marginBottom: '20px', borderBottom: '3px solid #38a169', display: 'inline-block', paddingBottom: '10px' }}>
            {formatliIlce} Profesyonel Ev Taşıma Hizmeti
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: '1.8', marginBottom: '15px' }}>
            Sadece bir eşya transferi değil, yepyeni bir başlangıç yapıyorsunuz. <strong>{formatliIlce} ev taşıma</strong> işlemlerinde yılların verdiği tecrübeyle hareket eden firmamız, eski evinizdeki tüm düzeni güvenle yeni adresinize taşıyor. Mutfak eşyalarınızdan kırılgan dekoratif ürünlerinize kadar her bir parça özenle paketlenir.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: '1.8' }}>
            Eşya taşımak fiziksel bir güçten ziyade bir organizasyon işidir. {formatliIl} içindeki dar binalar, yüksek katlar veya trafiği yoğun sokaklar bizim için engel değil. Size özel planlanmış araç filomuz ve eğitimli personelimizle süreci baştan sona yönetiyoruz.
          </p>
        </div>

        {/* Hizmet Kartları (Anahtar Kelime Odaklı - Ev Taşıma Konsepti) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          
          {/* Ambalaj ve Paketleme */}
          <div style={{ backgroundColor: '#f0fff4', padding: '30px', borderRadius: '12px', borderTop: '4px solid #38a169', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#276749', marginBottom: '15px' }}>Özel Ambalaj ve Paketleme</h3>
            <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
              <strong>{formatliIlce} ev eşyası taşıma</strong> sürecinde en önemli adım paketlemedir. Beyaz eşyalarınız, mobilyalarınız ve elektronik cihazlarınız havalı naylonlar (patpat) ve koruyucu streç filmlerle 3 katmanlı olarak sarılır, çizilme riski sıfıra indirilir.
            </p>
          </div>

          {/* Marangozlu Taşıma */}
          <div style={{ backgroundColor: '#f0fff4', padding: '30px', borderRadius: '12px', borderTop: '4px solid #2f855a', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#276749', marginBottom: '15px' }}>Marangozlu Montaj Hizmeti</h3>
            <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
              Gardırop, yatak odası takımı, TV ünitesi gibi de-monte edilmesi gereken mobilyalarınız uzman marangozlarımız tarafından sökülür. Yeni evinizde sizin istediğiniz odalara kurularak kullanıma hazır halde teslim edilir.
            </p>
          </div>

          {/* Anahtar Teslim */}
          <div style={{ backgroundColor: '#f0fff4', padding: '30px', borderRadius: '12px', borderTop: '4px solid #276749', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#276749', marginBottom: '15px' }}>Anahtar Teslim Taşıma</h3>
            <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
              Siz sadece kahvenizi yudumlayın; biz toplayalım, taşıyalım ve kuralım. <strong>{formatliIlce} evden eve taşıma</strong> işlemlerinde hiçbir şeye elinizi sürmenize gerek kalmadan, A'dan Z'ye tüm süreci profesyonel ekibimize bırakabilirsiniz.
            </p>
          </div>

        </div>

        {/* Fiyatlandırma SSS Alanı */}
        <div style={{ backgroundColor: '#e6fffa', padding: '40px', borderRadius: '12px', marginBottom: '40px', border: '1px solid #b2f5ea' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#234e52', marginBottom: '15px' }}>{formatliIlce} Ev Taşıma Ücretleri ve Fiyatları</h2>
          <p style={{ fontSize: '1.1rem', color: '#285e61', lineHeight: '1.7' }}>
            Her evin eşya hacmi ve taşınma koşulları farklıdır. <strong>{formatliIlce} ev taşıma fiyatları</strong> belirlenirken; eşyalarınızın miktarı (1+1, 2+1, 3+1, 4+1), kat yükseklikleri, asansör gereksinimi ve iki konum arasındaki mesafe dikkate alınır. Gizli maliyetler veya sonradan çıkan sürpriz fiyatlar olmadan, bütçenize dost ve şeffaf bir teklif almak için bize hemen WhatsApp üzerinden ulaşabilirsiniz. Uzman ekibimiz eşyalarınızın fotoğrafını veya videosunu inceleyerek size en net taşıma bedelini sunacaktır.
          </p>
        </div>
        
      </section>
    </div>
  );
};

export default EvTasimaSayfasi;