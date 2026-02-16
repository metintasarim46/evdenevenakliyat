import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const IlIlceSayfasi = () => {
  const { il, ilce, mahalle } = useParams();

  // Sayfa açıldığında en üste kaydır
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [il, ilce, mahalle]);

  // Metinleri güzelleştiren yardımcı fonksiyon (Örn: basaksehir -> Başakşehir)
  const formatla = (metin: string | undefined) => {
    if (!metin) return "";
    return metin.charAt(0).toUpperCase() + metin.slice(1).replace(/-/g, ' ');
  };

  const gosterilecekIl = formatla(il);
  const gosterilecekIlce = formatla(ilce);
  const gosterilecekMahalle = formatla(mahalle);

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", backgroundColor: '#fff' }}>
      
      {/* 1. KISIM: HERO ALANI (Boşluk 140px'e çıkarıldı ki menünün altında kalmasın) */}
      <section style={{ backgroundColor: '#f7fafc', padding: '140px 20px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3.2rem', color: '#2d3748', marginBottom: '20px', lineHeight: '1.2' }}>
                {gosterilecekIlce} {gosterilecekMahalle} <br /> 
                <span style={{ color: '#3182ce' }}>Evden Eve Nakliyat</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '40px' }}>
                {gosterilecekIl} ilinin parlayan yıldızı <strong>{gosterilecekIlce}</strong> ve özellikle <strong>{gosterilecekMahalle}</strong> mahallesinde profesyonel, sigortalı ve uygun fiyatlı taşımacılığın tek adresi: Metin Nakliyat.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:05432107058" style={{ backgroundColor: '#3182ce', color: 'white', padding: '15px 35px', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem' }}>Hemen Teklif Al</a>
                <a href="#iletisim" style={{ backgroundColor: '#edf2f7', color: '#2d3748', padding: '15px 35px', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem' }}>İletişime Geç</a>
            </div>
        </div>
      </section>

      {/* 2. KISIM: DETAYLI SEO İÇERİĞİ */}
      <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#2d3748', marginBottom: '25px', borderLeft: '5px solid #3182ce', paddingLeft: '20px' }}>
            {gosterilecekIlce} {gosterilecekMahalle} Nakliye Hizmetlerimiz
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: '1.9', marginBottom: '20px' }}>
            Metin Nakliyat olarak, <strong>{gosterilecekIlce} {gosterilecekMahalle} evden eve nakliyat</strong> operasyonlarımızda teknolojiyi ve tecrübeyi birleştiriyoruz. Bölgenin sokak yapısını ve trafik durumunu iyi bilen uzman ekibimizle, eşyalarınızı eski adresinizden paketleyip alıyor, yeni yuvanıza hasarsız bir şekilde ulaştırıyoruz.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: '1.9' }}>
            Taşınma sürecinde en çok çekinilen "eşyaların zarar görmesi" riskini, kaliteli ambalaj malzemelerimiz ve asansörlü taşıma sistemlerimizle ortadan kaldırıyoruz. {gosterilecekIlce} genelinde verdiğimiz hizmetlerin tamamı müşteri memnuniyeti odaklıdır.
          </p>
        </div>

        {/* Hizmet Kartları */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
            <div style={{ padding: '30px', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                <h3 style={{ color: '#3182ce', marginBottom: '15px' }}>Sigortalı Taşıma</h3>
                <p style={{ color: '#718096' }}>{gosterilecekMahalle} mahallesindeki tüm taşımalarımız resmi poliçe ile güvence altına alınır.</p>
            </div>
            <div style={{ padding: '30px', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                <h3 style={{ color: '#3182ce', marginBottom: '15px' }}>Asansörlü Nakliyat</h3>
                <p style={{ color: '#718096' }}>Dar merdivenlere son! Dış cephe asansörlerimizle eşyalarınızı saniyeler içinde indiriyoruz.</p>
            </div>
            <div style={{ padding: '30px', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                <h3 style={{ color: '#3182ce', marginBottom: '15px' }}>Marangoz Hizmeti</h3>
                <p style={{ color: '#718096' }}>Mobilyalarınızın söküm ve kurulum işlemleri profesyonel marangozlarımız tarafından yapılır.</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default IlIlceSayfasi;