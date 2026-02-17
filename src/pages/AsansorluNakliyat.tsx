import { ArrowUpCircle, Shield, CheckCircle, Phone, Zap, Building, Clock, TrendingUp } from 'lucide-react';

const AsansorluNakliyat = () => {
  return (
    <article className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            İstanbul Asansörlü Nakliyat Hizmetleri
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Yüksek Katlarda Hızlı, Güvenli ve Hasarsız Eşya Taşıma
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="tel:05432107058" 
              className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition inline-flex items-center gap-2"
            >
              <Phone size={20} />
              Asansör Teklifi Al
            </a>
            <a 
              href="#teklif-al" 
              className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Ücretsiz Keşif
            </a>
          </div>
        </header>

        <section className="prose prose-lg max-w-none">
          
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <ArrowUpCircle className="text-primary" size={32} />
              Asansörlü Nakliyat Nedir?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Asansörlü nakliyat, yüksek katlı binalarda eşya taşıma işlemini kolaylaştıran özel bir nakliyat yöntemidir. 
              Dış cepheye kurulan profesyonel asansör sistemi ile eşyalar pencere veya balkondan içeri veya dışarı taşınır. 
              <strong className="text-primary"> İstanbul asansörlü nakliyat, Kadıköy asansörlü taşıma, Beşiktaş yüksek kat nakliyat</strong> gibi 
              hizmetlerde uzman ekibimizle güvenli çözümler sunuyoruz.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Özellikle dar merdivenler, geniş mobilyalar veya 5. kat ve üzeri yüksek katlarda asansörlü nakliyat sistemi zorunlu hale gelir. 
              <strong className="text-primary"> Şişli asansörlü taşıma, Ümraniye yüksek kat nakliyat, Bakırköy asansör hizmeti</strong> 
              taleplerinde yıllardır profesyonel çözümler sağlıyoruz.
            </p>
          </div>

          <div className="mb-10 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Zap className="text-secondary" size={32} />
              Asansörlü Nakliyatın Avantajları
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hasarsız Taşıma</h4>
                  <p className="text-gray-600 text-sm">
                    Eşyalar dar merdivenlerde sıkıştırılmadan, duvarlar çizilmeden, kapılar zorlanmadan güvenle taşınır
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Zaman Tasarrufu</h4>
                  <p className="text-gray-600 text-sm">
                    Merdiven yerine asansör kullanıldığı için taşıma süresi %70'e kadar kısalır, iş günü içinde bitirilir
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Büyük Mobilya Çözümü</h4>
                  <p className="text-gray-600 text-sm">
                    Kanepe, gardırop, yemek masası gibi büyük eşyalar demonte edilmeden pencereden kolayca taşınır
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Yüksek Katlara Özel</h4>
                  <p className="text-gray-600 text-sm">
                    5. kat ve üzeri yüksek katlarda fiziksel zorlanma olmadan hızlı ve güvenli taşıma imkanı
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Güvenlik ve Tecrübe</h4>
                  <p className="text-gray-600 text-sm">
                    Lisanslı asansör operatörlerimiz ve deneyimli hamal ekibimizle %100 güvenli işlem garantisi
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sigortalı Hizmet</h4>
                  <p className="text-gray-600 text-sm">
                    Asansörlü nakliyat sırasında eşyalarınız tam kapsamlı nakliyat sigortası ile korunur
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Building className="text-accent" size={32} />
              Hangi Durumlarda Asansörlü Nakliyat Gerekir?
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Yüksek Katlı Binalar</h4>
                <p className="text-gray-700">
                  <strong className="text-primary">5. kat ve üzeri</strong> binalarda asansörlü nakliyat neredeyse zorunludur. 
                  Merdiven taşımacılığı hem riskli hem çok zaman alır. <strong className="text-primary">Kadıköy 10. kat nakliyat, 
                  Beşiktaş 8. kat taşıma</strong> örneklerinde asansör sistemi ideal çözümdür.
                </p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border-l-4 border-secondary">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Dar ve Dönümlü Merdivenler</h4>
                <p className="text-gray-700">
                  Eski apartmanlarda veya özel tasarımlı binalarda merdivenler çok dar ve dönüş açıları zor olabilir. 
                  Büyük mobilyalar sığmaz, zorlandığında bina duvarları zarar görür. Asansör sistemi bu sorunu ortadan kaldırır.
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border-l-4 border-accent">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Büyük ve Ağır Eşyalar</h4>
                <p className="text-gray-700">
                  L kanepe, köşe koltuk, büyük gardıroplar, amerikan buzdolapları, piyano gibi eşyalar asansör olmadan 
                  güvenle taşınamaz. <strong className="text-primary">Şişli piyano taşıma, Ümraniye büyük kanepe nakliyat</strong> 
                  örneklerinde asansör şarttır.
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Hızlı Taşıma İhtiyacı</h4>
                <p className="text-gray-700">
                  Aynı gün taşınmak veya ofis taşıma gibi zaman kısıtı olan durumlarda asansörlü nakliyat 
                  süreyi önemli ölçüde kısaltır. İş akışı kesintiye uğramaz.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="text-secondary" size={32} />
              Asansörlü Nakliyat Süreci
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Keşif ve Planlama</h4>
                  <p className="text-gray-700">
                    Adresinize gelerek bina cephesini, pencere/balkon durumunu ve eşyalarınızı inceliyoruz. 
                    Asansör kurulum noktası belirleniyor, gerekli izinler alınıyor. <strong className="text-primary">Kadıköy asansörlü keşif</strong> 
                    hizmeti ücretsizdir.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Asansör Kurulumu</h4>
                  <p className="text-gray-700">
                    Taşıma günü sabah erken saatte asansör sistemi bina cephesine monte edilir. Lisanslı operatörler 
                    tüm güvenlik önlemlerini alır. Kurulum yaklaşık 30-45 dakika sürer.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Hızlı Taşıma İşlemi</h4>
                  <p className="text-gray-700">
                    Eşyalar pencere veya balkondan asansöre yüklenir, aşağıya indirilir ve araç içine yerleştirilir. 
                    Büyük mobilyalar bile demonte edilmeden kolayca taşınır. Süreç çok hızlı ilerler.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Yeni Adrese Teslimat</h4>
                  <p className="text-gray-700">
                    Eğer yeni adresiniz de yüksek katta ise orada da asansör sistemi kurulur, eşyalar yukarı çıkarılır. 
                    Her şey yerleştirildikten sonra asansör sökülerek işlem tamamlanır.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 bg-gradient-to-r from-primary to-blue-700 text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Shield size={32} />
              Asansörlü Nakliyat Fiyatları
            </h2>
            <p className="text-lg mb-4 leading-relaxed">
              Asansörlü nakliyat fiyatları, kat yüksekliği, asansör kullanım süresi, eşya miktarı ve bina erişilebilirliğine göre değişir. 
              Metin Nakliyat olarak şeffaf ve rekabetçi fiyatlarla İstanbul genelinde hizmet veriyoruz.
            </p>
            <ul className="space-y-2 text-lg mb-6">
              <li>✓ <strong>5-8 kat arası:</strong> Standart asansör kurulum ücreti</li>
              <li>✓ <strong>9-15 kat arası:</strong> Yüksek kule için özel ekipman</li>
              <li>✓ <strong>Çift yönlü (eski+yeni adres):</strong> Her iki adreste asansör kullanımı</li>
              <li>✓ <strong>Ağır/büyük eşya taşıma:</strong> Özel yük kapasiteli asansör</li>
            </ul>
            <div className="mt-6">
              <a 
                href="tel:05432107058" 
                className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block transition shadow-xl"
              >
                Hemen Asansör Fiyatı Öğren
              </a>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="text-primary" size={32} />
              İstanbul'da Asansörlü Nakliyat Yapılan Bölgeler
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Metin Nakliyat, İstanbul'un tüm ilçelerinde asansörlü nakliyat hizmeti vermektedir. 
              Özellikle yüksek katlı binaların yoğun olduğu şu bölgelerde sık hizmet veriyoruz:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-primary mb-2">Avrupa Yakası</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>→ Beşiktaş, Şişli, Levent (İş merkezleri ve yüksek rezidanslar)</li>
                  <li>→ Bakırköy, Bahçelievler (Yoğun apartman bölgeleri)</li>
                  <li>→ Başakşehir, Esenyurt (Yeni konut projeleri)</li>
                  <li>→ Beylikdüzü (Modern siteler ve kuleler)</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-primary mb-2">Anadolu Yakası</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>→ Kadıköy, Üsküdar (Merkezi yüksek binalar)</li>
                  <li>→ Ümraniye, Ataşehir (Rezidans ve plaza yoğun bölge)</li>
                  <li>→ Kartal, Maltepe (Sahil şeridi yüksek kuleler)</li>
                  <li>→ Pendik (Modern konut siteleri)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Neden Metin Nakliyat ile Asansörlü Taşıma?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Lisanslı Operatörler</h4>
                <p className="text-gray-700">
                  Asansör kurulum ve kullanımında sertifikalı, deneyimli operatörlerimiz sayesinde 
                  işlem %100 güvenli şekilde tamamlanır.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Modern Ekipman</h4>
                <p className="text-gray-700">
                  Yüksek katlara çıkabilen, yüksek yük kapasiteli, güvenlik sertifikalı asansör sistemleri kullanıyoruz.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Hızlı ve Hasarsız</h4>
                <p className="text-gray-700">
                  Taşıma süresi kısalır, eşyalar zarar görmez, bina duvarları çizilmez, kapılar zorlanmaz. 
                  Temiz ve profesyonel hizmet.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Tam Sigorta</h4>
                <p className="text-gray-700">
                  Asansörlü nakliyat sürecinde eşyalarınız nakliyat sigortası ile korunur. Ekstra güvence sağlanır.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Yüksek Katlarda Güvenli Taşıma İçin Metin Nakliyat
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              İstanbul'un her ilçesinde profesyonel asansörlü nakliyat hizmeti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:05432107058" 
                className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl inline-flex items-center justify-center gap-2"
              >
                <Phone size={24} />
                0543 210 70 58
              </a>
              <a 
                href="https://wa.me/905432107058" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl"
              >
                WhatsApp Destek
              </a>
            </div>
          </div>

        </section>
      </div>
    </article>
  );
};

export default AsansorluNakliyat;
