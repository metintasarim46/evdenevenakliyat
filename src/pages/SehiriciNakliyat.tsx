import { MapPin, Clock, TrendingUp, CheckCircle, Phone, Shield, Zap } from 'lucide-react';

const SehiriciNakliyat = () => {
  return (
    <article className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            İstanbul Şehiriçi Nakliyat Hizmetleri
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Aynı Gün Teslimat ile Hızlı ve Güvenilir Şehir İçi Taşımacılık
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

        <section className="prose prose-lg max-w-none">
          
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <MapPin className="text-primary" size={32} />
              İstanbul Şehiriçi Nakliyat Nedir?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Şehiriçi nakliyat, aynı il sınırları içerisinde gerçekleştirilen eşya ve mobilya taşıma hizmetidir. 
              <strong className="text-primary"> İstanbul şehiriçi nakliyat</strong> hizmetimizde, Kadıköy'den Beylikdüzü'ne, 
              Üsküdar'dan Başakşehir'e, şehrin bir ucundan diğer ucuna güvenli ve hızlı taşıma garantisi sunuyoruz.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Metin Nakliyat olarak, İstanbul trafiğine hakim deneyimli ekibimiz sayesinde 
              <strong className="text-primary"> Beşiktaş şehiriçi taşıma, Şişli nakliyat, Bahçelievler eşya taşıma</strong> gibi 
              hizmetlerde yılların verdiği bilgi birikimi ile en kısa sürede adresinize ulaşıyoruz. 
              Özellikle yoğun trafik saatlerinde alternatif güzergahlar kullanarak zaman kaybını minimuma indiriyoruz.
            </p>
          </div>

          <div className="mb-10 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Zap className="text-secondary" size={32} />
              Şehiriçi Nakliyat Hizmetimizin Özellikleri
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Aynı Gün Teslimat</h4>
                  <p className="text-gray-600 text-sm">
                    Sabah aldığımız siparişleri akşam teslim ediyoruz. Acil taşıma ihtiyaçlarınızda yanınızdayız.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Trafik Optimizasyonu</h4>
                  <p className="text-gray-600 text-sm">
                    İstanbul trafiğine hakim ekibimiz, anlık trafik durumuna göre en hızlı rotayı belirler.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Esnek Çalışma Saatleri</h4>
                  <p className="text-gray-600 text-sm">
                    Hafta sonu ve akşam saatlerinde de hizmet veriyoruz. Size uygun saatte randevu alabilirsiniz.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Uygun Fiyatlandırma</h4>
                  <p className="text-gray-600 text-sm">
                    Şehirlerarası nakliyata göre daha ekonomik fiyatlarla kaliteli hizmet sunuyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingUp className="text-accent" size={32} />
              Hangi Durumlarda Şehiriçi Nakliyat Tercih Edilir?
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Aynı İlçe veya Komşu İlçe Taşınmaları</h4>
                <p className="text-gray-700">
                  <strong className="text-primary">Kadıköy içinde taşınma, Üsküdar - Ümraniye arası nakliyat, Beşiktaş - Şişli taşıma</strong> gibi 
                  kısa mesafeli taşımalarda şehiriçi nakliyat idealdir. Eşyalarınız aynı gün içinde yeni adresinize ulaşır.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Öğrenci Taşınmaları</h4>
                <p className="text-gray-700">
                  Öğrenci evleri, yurt taşınmaları veya stüdyo daire değişikliklerinde hızlı ve ekonomik çözüm. 
                  <strong className="text-primary"> Beyoğlu öğrenci nakliyat, Fatih yurt taşıma</strong> hizmetlerimizle gençlerin yanındayız.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-accent">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Tek Oda veya Kısmi Taşıma</h4>
                <p className="text-gray-700">
                  Evinizin tamamını değil, sadece birkaç eşyanızı veya bir odanızı taşımak istiyorsanız şehiriçi nakliyat en uygun seçenektir. 
                  Koltuk, yatak, dolap gibi tekil eşya taşıma hizmetinde uzmanız.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Ofis İçi Yer Değişikliği</h4>
                <p className="text-gray-700">
                  Aynı bina veya yakın lokasyonda ofis içi düzenleme, kat değişikliği gibi ihtiyaçlarınızda 
                  <strong className="text-primary"> Maslak ofis taşıma, Levent iç nakliyat</strong> hizmetimizle iş süreçlerinizi aksatmıyoruz.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="text-secondary" size={32} />
              İstanbul'da Şehiriçi Nakliyat Süreci
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Hızlı Teklif Alma</h4>
                  <p className="text-gray-700">
                    Telefon veya WhatsApp üzerinden eşya listesi ve adreslerinizi bildirin. Anında fiyat teklifi alın. 
                    Şeffaf fiyatlandırma politikamızla gizli ücret yok!
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Randevu ve Hazırlık</h4>
                  <p className="text-gray-700">
                    Size uygun saat diliminde randevu oluşturuyoruz. Ekibimiz belirlenen saatte adresinizde hazır oluyor. 
                    Profesyonel paketleme malzemelerimizle eşyalarınızı koruma altına alıyoruz.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Hızlı Yükleme ve Taşıma</h4>
                  <p className="text-gray-700">
                    Deneyimli hamal ekibimiz eşyalarınızı özenle araç içine yerleştirir. İstanbul'un trafik yoğunluğuna göre 
                    en uygun rotayı kullanarak yeni adresinize doğru yola çıkarız.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Teslimat ve Yerleştirme</h4>
                  <p className="text-gray-700">
                    Yeni adresinizde eşyalarınızı istediğiniz odalara yerleştiriyoruz. Montaj gerektiren mobilyaları kuruyoruz. 
                    Memnuniyetinizi tescil edip işlemi tamamlıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Shield size={32} />
              İstanbul Şehiriçi Nakliyat Fiyatları
            </h2>
            <p className="text-lg mb-4 leading-relaxed">
              Şehiriçi nakliyat fiyatları, taşınacak eşya miktarı, mesafe, kat sayısı ve asansör durumuna göre değişiklik gösterir. 
              Metin Nakliyat olarak İstanbul'un her noktasında uygun fiyatlı ve kaliteli hizmet sunuyoruz.
            </p>
            <ul className="space-y-2 text-lg">
              <li>✓ <strong>Kadıköy - Maltepe arası</strong> aynı gün teslimat</li>
              <li>✓ <strong>Beşiktaş - Bakırköy arası</strong> yakalar arası nakliyat</li>
              <li>✓ <strong>Üsküdar - Ataşehir arası</strong> komşu ilçe taşıma</li>
              <li>✓ <strong>Şişli içi</strong> kısa mesafe eşya nakli</li>
            </ul>
            <div className="mt-6">
              <a 
                href="tel:05432107058" 
                className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block transition shadow-xl"
              >
                Hemen Fiyat Teklifi Alın
              </a>
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-orange-50 to-yellow-50 p-10 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              İstanbul Şehiriçi Nakliyat İçin Metin Nakliyat
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Kadıköy, Üsküdar, Beşiktaş, Şişli ve tüm İstanbul'da aynı gün teslimat garantisi
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
                WhatsApp ile İletişim
              </a>
            </div>
          </div>

        </section>
      </div>
    </article>
  );
};

export default SehiriciNakliyat;
