import React from 'react';
import { Link } from 'react-router-dom';

const BolgelerBanner = () => {
  return (
    <section style={{ backgroundColor: '#ebf8ff', padding: '60px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#2c5282', marginBottom: '15px' }}>Geniş Hizmet Ağımız</h2>
        <p style={{ fontSize: '1.2rem', color: '#4a5568', marginBottom: '30px' }}>
          Türkiye'nin dört bir yanına güvenli, sigortalı ve asansörlü taşıma hizmeti sunuyoruz. Şehrinize özel çözümlerimizi görmek için hizmet bölgelerimizi inceleyin.
        </p>
        <Link 
          to="/hizmet-bolgelerimiz" 
          style={{ display: 'inline-block', backgroundColor: '#2b6cb0', color: 'white', padding: '15px 40px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.2rem', boxShadow: '0 4px 6px rgba(43, 108, 176, 0.3)' }}
        >
          Hizmet Bölgelerimizi Görün
        </Link>
      </div>
    </section>
  );
};

export default BolgelerBanner;