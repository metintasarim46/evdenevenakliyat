import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetay = () => {
  const { slug } = useParams();

  // Sayfa açıldığında otomatik en üste kaydırma
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Dev Makale Arşivi
  const yazilar = {
    'evden-eve-nakliyat-rehberi': {
      baslik: 'Evden Eve Nakliyat Sürecinde Hayat Kurtaran 5 Altın Kural',
      tarih: '18 Şubat 2026',
      kategori: 'Evden Eve Nakliyat',
      icerik: (
        <>
          <p style={{ fontSize: '1.15rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '25px' }}>
            Ev değiştirmek, hayatımızdaki en büyük stres kaynaklarından biri olarak kabul edilir. Ancak profesyonel bir <strong>evden eve nakliyat</strong> firmasıyla çalışmak, bu kaotik süreci son derece konforlu bir deneyime dönüştürebilir. Eşyalarınızın güvenle taşınması ve yeni evinize huzurla yerleşmeniz için dikkat etmeniz gereken altın kuralları sizler için derledik.
          </p>
          <h3 style={{ fontSize: '1.8rem', color: '#2d3748', margin: '40px 0 20px' }}>1. Doğru Nakliyat Firmasını Seçmek</h3>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '20px' }}>
            Sokakta gördüğünüz her nakliye aracı, güvenilir bir firma olduğu anlamına gelmez. Firma seçerken mutlaka yetki belgesine sahip olup olmadıklarını, referanslarını ve sigortalı taşıma yapıp yapmadıklarını kontrol etmelisiniz. Kurumsal firmalar her zaman müşteri memnuniyetini en üst düzeyde tutmayı hedefler.
          </p>
          <h3 style={{ fontSize: '1.8rem', color: '#2d3748', margin: '40px 0 20px' }}>2. Sigortalı ve Asansörlü Taşımacılığın Önemi</h3>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '20px' }}>
            Eşyalarınız maddi değerlerinin ötesinde manevi anılar barındırır. Merdiven boşluklarında eşyaların hasar görme ihtimalini sıfıra indirmek için <strong>asansörlü nakliyat</strong> sistemleri artık bir lüks değil, gerekliliktir. Ayrıca poliçe kapsamındaki sigortalı taşıma, olası kazalara karşı içinizin rahat olmasını sağlar.
          </p>
          <h3 style={{ fontSize: '1.8rem', color: '#2d3748', margin: '40px 0 20px' }}>3. Profesyonel Ambalajlama ve Paketleme</h3>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '20px' }}>
            Taşınma sırasında eşyaların çizilmesini veya kırılmasını önleyen en temel unsur kaliteli paketlemedir. Beyaz eşyalarınız, mobilyalarınız ve cam eşyalarınız darbe emici patpat naylonlar ve özel karton fıçılarla ambalajlanmalıdır.
          </p>
        </>
      )
    },
    'sorunsuz-ev-tasima': {
      baslik: 'Sorunsuz Bir Ev Taşıma Deneyimi İçin Adım Adım Yapılması Gerekenler',
      tarih: '15 Şubat 2026',
      kategori: 'Ev Taşıma',
      icerik: (
        <>
          <p style={{ fontSize: '1.15rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '25px' }}>
            Başarılı bir <strong>ev taşıma</strong> operasyonu, nakliye aracının kapıya geldiği gün değil, haftalar öncesinden başlar. Doğru bir planlama ile taşınma sendromunu atlatmak ve yeni evinizde kahvenizi keyifle yudumlamak mümkündür.
          </p>
          <h3 style={{ fontSize: '1.8rem', color: '#2d3748', margin: '40px 0 20px' }}>Fazlalıklardan Kurtulun</h3>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '20px' }}>
            Taşınmak, evdeki kullanılmayan eşyalardan kurtulmak için en mükemmel fırsattır. Evden eve taşıma fiyatları genellikle eşya yoğunluğuna göre belirlenir. Yıllardır kullanmadığınız eşyaları bağışlamak, nakliye maliyetinizi düşürür.
          </p>
          <h3 style={{ fontSize: '1.8rem', color: '#2d3748', margin: '40px 0 20px' }}>Abonelik İşlemleri</h3>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '20px' }}>
            Taşınmadan en az bir hafta önce elektrik, su, doğalgaz ve internet aboneliklerinizin taşıma veya iptal işlemlerini başlatın. Yeni evinize geçtiğinizde sürprizlerle karşılaşmayın.
          </p>
        </>
      )
    },
    'ofis-tasimaciliginda-dikkat-edilmesi-gerekenler': {
      baslik: 'Kurumsal Ofis Taşımacılığında Dikkat Edilmesi Gereken Önemli Detaylar',
      tarih: '12 Şubat 2026',
      kategori: 'Ofis Taşıma',
      icerik: (
        <>
          <p style={{ fontSize: '1.15rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '25px' }}>
            Ev taşımasına göre çok daha fazla hassasiyet ve hız gerektiren <strong>ofis taşımacılığı</strong>, ticari faaliyetlerin aksamaması adına stratejik bir planlama ile yapılmalıdır. İşyerinizdeki sunucular, ticari evraklar ve pahalı ofis mobilyaları özel bir ilgiyi hak eder.
          </p>
          <h3 style={{ fontSize: '1.8rem', color: '#2d3748', margin: '40px 0 20px' }}>Dosya ve Evrak Güvenliği</h3>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '20px' }}>
            Ofis taşırken en büyük kaos, departmanların dosyalarının birbirine karışmasıdır. Profesyonel ofis taşıma hizmetinde klasörler numaralandırılır, renk kodlarıyla etiketlenir ve yeni ofiste ilgili masalara eksiksiz olarak yerleştirilir.
          </p>
          <h3 style={{ fontSize: '1.8rem', color: '#2d3748', margin: '40px 0 20px' }}>IT ve Elektronik Cihazların Transferi</h3>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '20px' }}>
            Bilgisayarlar, fotokopi makineleri ve server dolapları standart ev eşyası gibi taşınamaz. Bu cihazlar statik elektriklenmeyi önleyen özel havalı ambalajlarla sarılmalı ve sarsıntıya karşı ekstra korumalı araçlarda taşınmalıdır.
          </p>
        </>
      )
    },
    'sehirlerarasi-nakliyatta-guvenilir-firma-secimi': {
      baslik: 'Şehirlerarası Nakliyatta Güvenilir Firma Seçimi Nasıl Yapılmalı?',
      tarih: '08 Şubat 2026',
      kategori: 'Şehirlerarası',
      icerik: (
        <>
          <p style={{ fontSize: '1.15rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '25px' }}>
            Eşyalarınızın yüzlerce kilometre yol kat edeceği <strong>şehirlerarası nakliyat</strong> hizmeti, sıradan bir taşınma işleminden çok daha büyük riskler taşır. Bu uzun yolculukta eşyalarınızı teslim edeceğiniz firmayı seçerken dikkatli olmanız hayati önem taşır.
          </p>
          <h3 style={{ fontSize: '1.8rem', color: '#2d3748', margin: '40px 0 20px' }}>Sözleşmeli ve Sigortalı Taşıma Israrı</h3>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '20px' }}>
            Şehirlerarası yollarda kaza, sarsıntı veya hava muhalefeti gibi durumlar her zaman ihtimal dahilindedir. Bu nedenle, firmadan mutlaka taşıma sözleşmesi talep edin ve eşyalarınızın yolculuk boyunca tam kapsamlı nakliyat sigortası ile güvence altına alındığından emin olun.
          </p>
          <h3 style={{ fontSize: '1.8rem', color: '#2d3748', margin: '40px 0 20px' }}>Araç Filosu ve Şoför Tecrübesi</h3>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '20px' }}>
            Şehirlerarası nakliyat yapacak olan kamyonların kapalı çelik kasalı olması ve iç kısımlarının eşya bağlamaya uygun şekilde sunta veya halı ile kaplanmış olması gerekir. Ayrıca uzun yol tecrübesi olan profesyonel şoförlerle çalışan firmaları tercih etmelisiniz.
          </p>
        </>
      )
    },
    'asansorlu-nakliyat-nedir-avantajlari-nelerdir': {
      baslik: 'Asansörlü Nakliyat Nedir? Avantajları ve Fiyatları Nelerdir?',
      tarih: '05 Şubat 2026',
      kategori: 'Asansörlü Taşıma',
      icerik: (
        <>
          <p style={{ fontSize: '1.15rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '25px' }}>
            Gelişen teknoloji ile birlikte taşımacılık sektörünün en büyük inovasyonu olan <strong>mobil asansörlü taşıma</strong> sistemi, hem müşteriler hem de firmalar için büyük kolaylık sağlıyor. Peki bina dışına kurulan bu sistemin avantajları nelerdir?
          </p>
          <h3 style={{ fontSize: '1.8rem', color: '#2d3748', margin: '40px 0 20px' }}>Zaman Tasarrufu ve Sıfır Hasar Riski</h3>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '20px' }}>
            Bina merdivenlerinden insan gücüyle indirilen eşyaların duvarlara çarpma, çizilme veya kırılma riski yüksektir. Dış cephe asansörü sayesinde eşyalarınız balkonunuzdan veya geniş bir pencerenizden doğrudan nakliye aracına saniyeler içinde, sarsıntısız bir şekilde indirilir. Gün boyu sürecek taşınma işlemi birkaç saate düşer.
          </p>
          <h3 style={{ fontSize: '1.8rem', color: '#2d3748', margin: '40px 0 20px' }}>Komşuları Rahatsız Etmeme</h3>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '20px' }}>
            Özellikle sitelerde veya apartmanlarda bina asansörünün eşya taşıma için kullanılması yasaktır. Merdivenlerden taşımada ise gürültü kaçınılmazdır. Asansörlü nakliyat ile bina içine hiç girilmediği için komşularınıza hiçbir rahatsızlık vermeden taşınabilirsiniz.
          </p>
        </>
      )
    }
  };

  const makale = yazilar[slug as keyof typeof yazilar];

  if (!makale) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center', backgroundColor: '#f7fafc', minHeight: '80vh' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#4a5568' }}>Makale bulunamadı.</h2>
        <Link to="/blog" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#3182ce', color: 'white', textDecoration: 'none', borderRadius: '8px' }}>Blog'a Geri Dön</Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', padding: '140px 20px 80px', fontFamily: "'Arial', sans-serif" }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <Link to="/blog" style={{ color: '#3182ce', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', marginBottom: '30px', padding: '8px 15px', backgroundColor: '#ebf8ff', borderRadius: '8px' }}>
          &larr; Blog'a Dön
        </Link>

        <h1 style={{ fontSize: '2.8rem', color: '#2d3748', lineHeight: 1.3, marginBottom: '20px' }}>{makale.baslik}</h1>
        
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid #e2e8f0', paddingBottom: '20px', flexWrap: 'wrap' }}>
          <span style={{ backgroundColor: '#ebf8ff', color: '#3182ce', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold' }}>{makale.kategori}</span>
          <span style={{ color: '#718096' }}>{makale.tarih}</span>
          <span style={{ color: '#718096' }}>Metin Nakliyat Uzman Ekibi</span>
        </div>

        <div style={{ color: '#2d3748' }}>
          {makale.icerik}
        </div>

        {/* Yazı sonu iletişim çağrısı */}
        <div style={{ marginTop: '60px', padding: '30px', backgroundColor: '#f4f8ff', borderRadius: '12px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#2b6cb0', marginBottom: '15px' }}>Profesyonel Desteğe mi İhtiyacınız Var?</h3>
          <p style={{ color: '#4a5568', marginBottom: '20px' }}>Uzman ekibimizle hemen iletişime geçin, taşınma sürecinizi keyfe dönüştürelim.</p>
          <a href="tel:05432107058" style={{ display: 'inline-block', backgroundColor: '#f6ad55', color: 'white', padding: '12px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Hemen Ara: 0543 210 70 58</a>
        </div>

      </div>
    </div>
  );
};

export default BlogDetay;