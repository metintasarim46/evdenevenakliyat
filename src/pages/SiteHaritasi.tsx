import React from 'react';
import { Link } from 'react-router-dom';

const SiteHaritasi = () => {
  // HizmetBolgeleri dosyasındaki veritabanının aynısını buraya entegre ediyoruz
  const tumTurkiye = [
    { il: "Adana", slug: "adana", ilceler: ["Aladağ", "Ceyhan", "Çukurova", "Feke", "İmamoğlu", "Karaisalı", "Karataş", "Kozan", "Pozantı", "Saimbeyli", "Sarıçam", "Seyhan", "Tufanbeyli", "Yumurtalık", "Yüreğir"] },
    { il: "Ankara", slug: "ankara", ilceler: [{ ad: "Çankaya", mahalleler: ["Kızılay", "Bahçelievler", "Çayyolu"] }, "Keçiören", "Yenimahalle", "Mamak", "Etimesgut", "Sincan", "Altındağ", "Pursaklar"] },
    { il: "İstanbul", slug: "istanbul", ilceler: [{ ad: "Başakşehir", mahalleler: ["Kayaşehir", "Bahçeşehir", "Ispartakule"] }, { ad: "Ümraniye", mahalleler: ["Çakmak", "Ihlamurkuyu", "Şerifali"] }, "Kadıköy", "Beşiktaş", "Üsküdar", "Bakırköy", "Şişli", "Ataşehir", "Maltepe", "Sarıyer", "Beylikdüzü", "Esenyurt"] },
    { il: "İzmir", slug: "izmir", ilceler: [{ ad: "Karşıyaka", mahalleler: ["Mavişehir", "Bostanlı"] }, "Bornova", "Buca", "Konak", "Bayraklı", "Çiğli"] },
    { il: "Kahramanmaraş", slug: "kahramanmaras", ilceler: [{ ad: "Onikişubat", mahalleler: ["Yirmikigün", "Tekerek"] }, "Dulkadiroğlu", "Elbistan", "Afşin"] },
    // Not: Buraya HizmetBolgeleri.tsx içindeki diğer tüm illeri de ekleyebilirsin
  ];

  const urlYap = (metin: string) => {
    return metin.toLowerCase().replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/\s+/g, '-');
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', padding: '140px 20px 80px', fontFamily: "'Arial', sans-serif" }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <h1 style={{ fontSize: '2.5rem', color: '#2d3748', marginBottom: '10px' }}>Metin Nakliyat Site Haritası</h1>
        <p style={{ color: '#718096', marginBottom: '40px' }}>Tüm hizmet bölgelerimiz ve alt sayfalarımız Google dizini için aşağıda listelenmiştir.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          
          {tumTurkiye.map((sehir) => (
            <div key={sehir.il} style={{ border: '1px solid #edf2f7', padding: '20px', borderRadius: '12px' }}>
              <h3 style={{ color: '#3182ce', borderBottom: '2px solid #ebf8ff', paddingBottom: '10px', marginBottom: '15px' }}>{sehir.il} Nakliyat Sayfaları</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {sehir.ilceler.map((ilce: any, idx) => {
                  const ilceAdi = typeof ilce === 'string' ? ilce : ilce.ad;
                  return (
                    <li key={idx}>
                      <Link to={`/${sehir.slug}/${urlYap(ilceAdi)}`} style={{ color: '#4a5568', textDecoration: 'none', fontWeight: 'bold' }}>• {ilceAdi} Evden Eve Nakliyat</Link>
                      <br />
                      <Link to={`/ev-tasima/${sehir.slug}/${urlYap(ilceAdi)}`} style={{ color: '#38a169', textDecoration: 'none', fontSize: '0.9rem', marginLeft: '12px' }}>→ {ilceAdi} Ev Taşıma</Link>
                      
                      {/* Mahalle Linkleri */}
                      {ilce.mahalleler && (
                        <div style={{ marginLeft: '25px', marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          {ilce.mahalleler.map((mah: string) => (
                            <Link key={mah} to={`/${sehir.slug}/${urlYap(ilceAdi)}/${urlYap(mah)}`} style={{ color: '#718096', fontSize: '0.85rem', textDecoration: 'none' }}>- {mah} Nakliyat</Link>
                          ))}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default SiteHaritasi;