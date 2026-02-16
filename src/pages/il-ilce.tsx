

const IlIlceSayfasi = () => {
  return (
    <section className="nakliyat-hero" style={{ backgroundColor: '#f4f8ff', padding: '60px 20px', fontFamily: "'Arial', sans-serif" }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          
          {/* Sol Taraf: SEO Metinleri ve Butonlar */}
          <div style={{ flex: 1, minWidth: '300px', paddingRight: '20px' }}>
              <h1 style={{ fontSize: '3rem', color: '#333', marginBottom: '10px' }}>
                  <span style={{ color: '#2b6cb0' }}>[İlçe Adı]</span> Evden Eve <br /> 
                  <span style={{ color: '#d69e2e' }}>Nakliyat</span>
              </h1>
              
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#4a5568' }}>
                Eşyalarınız Bizimle Emanet Ellerde
              </p>
              
              <p style={{ color: '#718096', lineHeight: 1.6, marginBottom: '30px' }}>
                  Metin Nakliyat olarak, <strong><span>[İlçe Adı]</span></strong> ve çevresinde evden eve nakliyattan şehirlerarası nakliyeciliğe kadar tüm nakliye ihtiyaçlarınızda profesyonel çözümler sunuyoruz. 
              </p>
              
              <div style={{ display: 'flex', gap: '15px', marginBottom: '40px' }}>
                  <a href="#teklif" style={{ backgroundColor: '#f6ad55', color: 'white', padding: '12px 24px', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>Ücretsiz Teklif Al</a>
                  <a href="tel:05432107058" style={{ backgroundColor: '#3182ce', color: 'white', padding: '12px 24px', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>Hemen Ara</a>
              </div>
              
              <div style={{ display: 'flex', gap: '40px' }}>
                  <div style={{ textAlign: 'center' }}>
                      <h3 style={{ color: '#2b6cb0', fontSize: '1.8rem', margin: 0 }}>15+</h3>
                      <p style={{ color: '#718096', fontSize: '0.9rem', margin: '5px 0 0' }}>Yıllık Tecrübe</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                      <h3 style={{ color: '#d69e2e', fontSize: '1.8rem', margin: 0 }}>50.000+</h3>
                      <p style={{ color: '#718096', fontSize: '0.9rem', margin: '5px 0 0' }}>Mutlu Müşteri</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                      <h3 style={{ color: '#38a169', fontSize: '1.8rem', margin: 0 }}>%99</h3>
                      <p style={{ color: '#718096', fontSize: '0.9rem', margin: '5px 0 0' }}>Memnuniyet</p>
                  </div>
              </div>
          </div>

          {/* Sağ Taraf: İkon ve Tasarım Elementleri */}
          <div style={{ flex: 1, minWidth: '300px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
              <div style={{ width: '200px', height: '200px', backgroundColor: '#e2e8f0', borderRadius: '50%', position: 'absolute', left: '10%', top: '20%', zIndex: 1 }}></div>
              <div style={{ width: '300px', height: '300px', backgroundColor: '#90cdf4', borderRadius: '50%', position: 'absolute', right: '5%', bottom: '10%', zIndex: 1 }}></div>
              <div style={{ zIndex: 2, textAlign: 'center' }}>
                  {/* Düzeltilmiş SVG Alanı */}
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#2b6cb0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13"></rect>
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                      <circle cx="5.5" cy="18.5" r="2.5"></circle>
                      <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                  <h3 style={{ color: '#2d3748', marginTop: '15px', fontSize: '1.4rem' }}>Hızlı, Güvenli, Profesyonel</h3>
              </div>
          </div>
      </div>
    </section>
  );
};

export default IlIlceSayfasi;