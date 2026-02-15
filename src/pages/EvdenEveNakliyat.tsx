import { CheckCircle, Package, Truck, Shield, Users, Clock, MapPin, Phone } from 'lucide-react';

const EvdenEveNakliyat = () => {
  return (
    <article className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Başlık ve Hero */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            İstanbul Evden Eve Nakliyat Hizmetleri
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Kadıköy, Üsküdar, Beşiktaş, Şişli ve Tüm İlçelerde Profesyonel Taşımacılık
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="tel:05432107058" 
              className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition inline-flex items-center gap-2"
            >
              <Phone size={20} />
              Hemen Ara
            </a>
            <a 
              href="#teklif-al" 
              className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Ücretsiz Fiyat Teklifi
            </a>
          </div>
        </header>

        {/* Ana İçerik */}
        <section className="prose prose-lg max-w-none">
          
          {/* Giriş */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Truck className="text-primary" size={32} />
              Evden Eve Nakliyat Nedir ve Neden Metin Nakliyat?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Evden eve nakliyat, bir konuttan diğerine eşya ve mobilyaların güvenli, hızlı ve profesyonel bir şekilde taşınması sürecidir. 
              İstanbul gibi büyük bir metropolde taşınma işlemi, trafik yoğunluğu, dar sokaklar ve yüksek katlı binalar nedeniyle zorlu bir deneyim olabilir. 
              <strong className="text-primary"> Metin Nakliyat</strong> olarak, 15 yılı aşkın sektör tecrübemizle İstanbul'un her ilçesinde 
              <strong className="text-primary"> Kadıköy evden eve nakliyat, Üsküdar nakliyat hizmeti, Beşiktaş taşımacılık, Şişli evden eve taşıma</strong> gibi 
              hizmetlerde uzmanlaşmış, müşteri memnuniyetini ön planda tutan bir firmayız.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Taşınma sürecinin stresini en aza indirmek için profesyonel paketleme, sigortalı taşıma, eşya montaj-demontaj hizmetleri ve 7/24 müşteri desteği sunuyoruz. 
              Bakırköy'den Başakşehir'e, Ümraniye'den Pendik'e, İstanbul'un hangi ilçesinde olursanız olun, güvenle adresinize ulaşıyoruz.
            </p>
          </div>

          {/* Hizmet Kapsamı */}
          <div className="mb-10 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Package className="text-secondary" size={32} />
              Evden Eve Nakliyat Hizmet Kapsamımız
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Profesyonel Paketleme</h4>
                  <p className="text-gray-600 text-sm">Kırılabilir eşyalar, elektronik cihazlar ve mobilyalar özel paketleme malzemeleriyle korunur</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Eşya Montaj - Demontaj</h4>
                  <p className="text-gray-600 text-sm">Dolap, yatak, masa gibi mobilyaların söküm ve kurulumu uzman ekibimiz tarafından yapılır</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Sigortalı Taşıma</h4>
                  <p className="text-gray-600 text-sm">Tüm eşyalarınız nakliyat sigortası kapsamında güvence altındadır</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Asansörlü Taşıma</h4>
                  <p className="text-gray-600 text-sm">Yüksek katlı binalarda asansörlü nakliyat sistemiyle hızlı ve güvenli taşıma</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Geçici Depolama</h4>
                  <p className="text-gray-600 text-sm">Yeni eviniz hazır değilse eşyalarınızı güvenli depolarımızda saklama imkanı</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Kapıdan Kapıya Hizmet</h4>
                  <p className="text-gray-600 text-sm">Eski adresinizden alıp yeni adresinize teslim ediyoruz</p>
                </div>
              </div>
            </div>
          </div>

          {/* İlçe Bazlı Hizmetler */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="text-primary" size={32} />
              İstanbul'un Her İlçesinde Evden Eve Nakliyat
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Metin Nakliyat, İstanbul'un tüm ilçelerinde aktif hizmet veren geniş servis ağına sahiptir. 
              İster Anadolu Yakası'nda ister Avrupa Yakası'nda olun, profesyonel ekibimiz en kısa sürede adresinizde olup 
              taşınma sürecinizi sorunsuz bir şekilde tamamlar.
            </p>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Anadolu Yakası Evden Eve Nakliyat</h3>
              <p className="text-gray-700 mb-4">
                <strong className="text-primary">Kadıköy evden eve nakliyat</strong> hizmetimiz, bölgenin en aktif taşımacılık ağlarından biridir. 
                Moda, Fenerbahçe, Göztepe ve Kadıköy'ün tüm mahallelerinde hızlı servis sağlıyoruz. 
                <strong className="text-primary"> Üsküdar nakliyat</strong> taleplerinde de Çengelköy, Kuzguncuk, Bağlarbaşı bölgelerinde deneyimli ekibimizle yanınızdayız.
              </p>
              <p className="text-gray-700 mb-4">
                <strong className="text-primary">Ümraniye evden eve taşıma, Ataşehir nakliyat, Maltepe nakliyat hizmeti, Kartal evden eve nakliyat</strong> ve 
                <strong className="text-primary"> Pendik taşımacılık</strong> konularında da kapsamlı çözümler sunuyoruz. 
                Ayrıca Çekmeköy, Sancaktepe, Tuzla ve Sultanbeyli gibi gelişen bölgelerde de aktif hizmet veriyoruz.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Avrupa Yakası Evden Eve Nakliyat</h3>
              <p className="text-gray-700 mb-4">
                <strong className="text-primary">Beşiktaş evden eve nakliyat</strong> taleplerinde Etiler, Levent, Ortaköy gibi prestijli semtlerde özenli hizmet sunuyoruz. 
                <strong className="text-primary"> Şişli nakliyat hizmeti</strong> kapsamında Mecidiyeköy, Osmanbey, Nişantaşı bölgelerinde hızlı ve güvenilir taşıma gerçekleştiriyoruz.
              </p>
              <p className="text-gray-700 mb-4">
                <strong className="text-primary">Beyoğlu evden eve taşıma, Fatih nakliyat, Bakırköy evden eve nakliyat, Bahçelievler taşımacılık</strong> ve 
                <strong className="text-primary"> Zeytinburnu nakliyat</strong> hizmetlerimizle Avrupa Yakası'nın merkezi noktalarında yanınızdayız. 
                Başakşehir, Esenyurt, Avcılar, Küçükçekmece gibi büyüyen ilçelerde de kapsamlı nakliyat çözümleri sağlıyoruz.
              </p>
            </div>
          </div>

          {/* Süreç */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="text-secondary" size={32} />
              Evden Eve Nakliyat Süreci Nasıl İşler?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">İletişim ve Ön Görüşme</h4>
                  <p className="text-gray-700">
                    Bizi arayarak veya online form doldurarak iletişime geçin. Taşınma tarihiniz, adresleriniz ve eşya miktarınız hakkında bilgi verin. 
                    Kadıköy'den Başakşehir'e, Üsküdar'dan Beylikdüzü'ne hangi güzergah olursa olsun ücretsiz fiyat teklifi alın.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Keşif ve Fiyatlandırma</h4>
                  <p className="text-gray-700">
                    Talep üzerine adresinize gelerek eşyalarınızı inceliyor, hacim hesaplaması yapıyoruz. 
                    Net ve şeffaf bir fiyat teklifi sunuyoruz. Gizli ek ücret yok!
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-accent text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Paketleme ve Hazırlık</h4>
                  <p className="text-gray-700">
                    Belirlenen tarihte ekibimiz evinize gelir. Eşyalarınızı profesyonel paketleme malzemeleriyle korur, 
                    dolap ve yatak gibi büyük mobilyaları demonte eder.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Güvenli Taşıma</h4>
                  <p className="text-gray-700">
                    Eşyalarınız sigortalı araçlarımızla yeni adresinize taşınır. İstanbul trafiğine hakim deneyimli şoförlerimiz 
                    en kısa ve güvenli rotayı kullanır.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Yerleştirme ve Montaj</h4>
                  <p className="text-gray-700">
                    Yeni evinizde eşyalarınızı istediğiniz odalara yerleştiriyor, demonte ettiğimiz mobilyaları kuruyoruz. 
                    Siz yeni evinizin keyfini çıkarın!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fiyatlandırma */}
          <div className="mb-10 bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Shield size={32} />
              Evden Eve Nakliyat Fiyatları
            </h2>
            <p className="text-lg mb-4">
              İstanbul evden eve nakliyat fiyatları, taşınacak eşya miktarı, kat sayısı, mesafe ve hizmet kapsamına göre değişiklik gösterir. 
              Metin Nakliyat olarak şeffaf fiyatlandırma politikamız ile müşterilerimize en uygun teklifleri sunuyoruz.
            </p>
            <ul className="space-y-2 text-lg">
              <li>✓ <strong>Kadıköy - Üsküdar arası</strong> kısa mesafe nakliyat</li>
              <li>✓ <strong>Beşiktaş - Başakşehir arası</strong> şehiriçi taşıma</li>
              <li>✓ <strong>Ataşehir - Bahçelievler arası</strong> yakalar arası nakliyat</li>
              <li>✓ <strong>Özel paketleme ve asansörlü taşıma</strong> hizmetleri</li>
            </ul>
            <div className="mt-6">
              <a 
                href="#teklif-al" 
                className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block transition shadow-xl"
              >
                Hemen Ücretsiz Teklif Alın
              </a>
            </div>
          </div>

          {/* Neden Biz */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="text-accent" size={32} />
              Neden Metin Nakliyat İle Taşınmalısınız?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">15+ Yıllık Deneyim</h4>
                <p className="text-gray-700">
                  İstanbul'un her ilçesinde binlerce başarılı taşıma deneyimi. Sektördeki uzmanlığımızla her detayı planlıyoruz.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Sigortalı ve Güvenli</h4>
                <p className="text-gray-700">
                  Tüm eşyalarınız tam kapsamlı nakliyat sigortası altında. Hasarsız taşıma garantisi veriyoruz.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">7/24 Müşteri Desteği</h4>
                <p className="text-gray-700">
                  Hafta sonu dahil her gün hizmetinizdeyiz. Acil nakliyat ihtiyaçlarınızda yanınızdayız.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Uygun ve Şeffaf Fiyat</h4>
                <p className="text-gray-700">
                  Gizli ücret yok, ek masraf yok. Size verdiğimiz fiyat teklifi nettir, sürpriz ücretlerle karşılaşmazsınız.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center bg-gradient-to-br from-blue-50 to-orange-50 p-10 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              İstanbul'da Güvenilir Evden Eve Nakliyat İçin Bizi Arayın
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Kadıköy, Üsküdar, Beşiktaş, Şişli ve tüm İstanbul'da profesyonel taşımacılık hizmeti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:05432107058" 
                className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2"
              >
                <Phone size={24} />
                0543 210 70 58
              </a>
              <a 
                href="https://wa.me/905432107058" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl hover:shadow-2xl inline-block"
              >
                WhatsApp ile İletişim
              </a>
            </div>
          </div>

        </section>
      </div>
    </article>
  );
};

export default EvdenEveNakliyat;
