import { MapPin, Truck, Shield, CheckCircle, Phone, Clock, Navigation, Package } from 'lucide-react';

const SehirlerarasiNakliyat = () => {
  return (
    <article className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Türkiye Geneli Şehirlerarası Nakliyat
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            İstanbul'dan Türkiye'nin Her Köşesine Güvenli ve Zamanında Teslimat
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="tel:05432107058" 
              className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition inline-flex items-center gap-2"
            >
              <Phone size={20} />
              7/24 Destek Hattı
            </a>
            <a 
              href="#teklif-al" 
              className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Ücretsiz Teklif Al
            </a>
          </div>
        </header>

        <section className="prose prose-lg max-w-none">
          
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Navigation className="text-primary" size={32} />
              Şehirlerarası Nakliyat Hizmetimiz
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Şehirlerarası nakliyat, farklı iller arasında gerçekleştirilen uzun mesafeli eşya taşıma hizmetidir. 
              <strong className="text-primary"> İstanbul Ankara nakliyat, İstanbul İzmir taşıma, İstanbul Bursa evden eve nakliyat</strong> gibi 
              Türkiye'nin en yoğun nakliyat güzergahlarında yıllardır hizmet veriyoruz.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Metin Nakliyat olarak, <strong className="text-primary">İstanbul'dan Antalya'ya nakliyat, İstanbul Kocaeli arası eşya taşıma, 
              İstanbul Konya nakliyat hizmeti</strong> ve daha birçok şehirlerarası güzergahta profesyonel çözümler sunuyoruz. 
              Modern araç filomuz, deneyimli şoförlerimiz ve kapsamlı nakliyat sigortamızla eşyalarınız güvende.
            </p>
          </div>

          <div className="mb-10 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Truck className="text-secondary" size={32} />
              Hizmet Verdiğimiz Şehirlerarası Güzergahlar
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-primary text-lg mb-2">Marmara Bölgesi</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>→ İstanbul - Bursa Nakliyat</li>
                  <li>→ İstanbul - Kocaeli (İzmit) Taşıma</li>
                  <li>→ İstanbul - Tekirdağ Nakliyat</li>
                  <li>→ İstanbul - Edirne Eşya Taşıma</li>
                  <li>→ İstanbul - Çanakkale Nakliyat</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-primary text-lg mb-2">Ege Bölgesi</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>→ İstanbul - İzmir Nakliyat</li>
                  <li>→ İstanbul - Manisa Taşıma</li>
                  <li>→ İstanbul - Denizli Nakliyat</li>
                  <li>→ İstanbul - Aydın Eşya Taşıma</li>
                  <li>→ İstanbul - Muğla Nakliyat</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-primary text-lg mb-2">İç Anadolu Bölgesi</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>→ İstanbul - Ankara Nakliyat</li>
                  <li>→ İstanbul - Konya Taşıma</li>
                  <li>→ İstanbul - Eskişehir Nakliyat</li>
                  <li>→ İstanbul - Kayseri Eşya Taşıma</li>
                  <li>→ İstanbul - Sivas Nakliyat</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-primary text-lg mb-2">Akdeniz & Karadeniz</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>→ İstanbul - Antalya Nakliyat</li>
                  <li>→ İstanbul - Adana Taşıma</li>
                  <li>→ İstanbul - Mersin Nakliyat</li>
                  <li>→ İstanbul - Samsun Eşya Taşıma</li>
                  <li>→ İstanbul - Trabzon Nakliyat</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6 text-sm">
              * Yukarıda listelenmeyen şehirlere de hizmet vermekteyiz. Detaylı bilgi için bizi arayın.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Package className="text-accent" size={32} />
              Şehirlerarası Nakliyatta Neler Sunuyoruz?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Kapıdan Kapıya Hizmet</h4>
                  <p className="text-gray-700">
                    İstanbul'daki eski adresinizden eşyalarınızı alıyor, Türkiye'nin hangi şehrinde olursanız olun 
                    yeni adresinize teslim ediyoruz. Aracı istasyona çağırmanıza gerek yok!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Tam Kapsamlı Sigorta</h4>
                  <p className="text-gray-700">
                    Uzun yol nakliyatında eşyalarınızın tam güvencesi bizde. Nakliyat sigortası ile korunuyorsunuz. 
                    <strong className="text-primary"> İstanbul Adana nakliyat, İstanbul Samsun taşıma</strong> gibi uzun mesafelerde bile gönül rahatlığı.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Profesyonel Paketleme</h4>
                  <p className="text-gray-700">
                    Uzun yolculuk süresince eşyalarınızın zarar görmemesi için özel paketleme malzemeleri kullanıyoruz. 
                    Kırılabilir eşyalar, elektronik cihazlar ve değerli mobilyalar ekstra koruma altında.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Kargo Takip Sistemi</h4>
                  <p className="text-gray-700">
                    Eşyalarınızın nerede olduğunu anlık olarak öğrenebilirsiniz. Müşteri temsilcimiz sizi düzenli olarak bilgilendirir. 
                    <strong className="text-primary"> İstanbul İzmir arası nakliyat</strong>ta bile eşyanızın konumunu bilirsiniz.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Montaj - Demontaj Hizmeti</h4>
                  <p className="text-gray-700">
                    Dolap, yatak, yemek masası gibi büyük mobilyaların sökümünü İstanbul'da yapıyor, 
                    yeni şehirdeki adresinizde tekrar kuruyoruz. Siz hiçbir şeyle uğraşmayın!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Esnek Teslimat Tarihleri</h4>
                  <p className="text-gray-700">
                    Yeni eviniz henüz hazır değilse veya geç taşınmak istiyorsanız, eşyalarınızı güvenli depolarımızda 
                    geçici olarak saklayabilir, istediğiniz tarihte teslim edebiliriz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="text-secondary" size={32} />
              Şehirlerarası Nakliyat Süreci
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Fiyat Teklifi ve Planlama</h4>
                  <p className="text-gray-700">
                    Taşınacağınız şehri, eşya miktarını ve tarihi belirtiyorsunuz. Size net bir fiyat teklifi ve taşıma planı sunuyoruz. 
                    <strong className="text-primary"> İstanbul Ankara arası nakliyat</strong> için ortalama teslimat süresini öğreniyorsunuz.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Paketleme ve Yükleme</h4>
                  <p className="text-gray-700">
                    Belirlenen tarihte ekibimiz İstanbul'daki adresinize gelir. Profesyonel paketleme yapılır, 
                    büyük mobilyalar demonte edilir ve araç içine sistematik şekilde yerleştirilir.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Güvenli Yolculuk ve Takip</h4>
                  <p className="text-gray-700">
                    Eşyalarınız sigortalı araçlarımızla yola çıkar. Yolculuk boyunca sizi bilgilendiririz. 
                    Deneyimli şoförlerimiz en güvenli ve hızlı güzergahları kullanır.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Teslimat ve Yerleştirme</h4>
                  <p className="text-gray-700">
                    Yeni şehirdeki adresinize varan eşyalarınızı istediğiniz odalara yerleştiriyor, 
                    demonte mobilyaları kuruyoruz. Memnuniyetinizi onaylayıp işlemi sonlandırıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 bg-gradient-to-r from-primary to-blue-700 text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Shield size={32} />
              Şehirlerarası Nakliyat Fiyatları
            </h2>
            <p className="text-lg mb-4 leading-relaxed">
              Şehirlerarası nakliyat fiyatları, mesafe, eşya miktarı, hizmet kapsamı ve mevsime göre değişiklik gösterir. 
              Metin Nakliyat olarak rekabetçi ve şeffaf fiyatlandırma ile Türkiye genelinde hizmet veriyoruz.
            </p>
            <ul className="space-y-2 text-lg mb-6">
              <li>✓ <strong>İstanbul - Ankara:</strong> 450 km, ortalama 1-2 gün teslimat</li>
              <li>✓ <strong>İstanbul - İzmir:</strong> 480 km, kapıdan kapıya hizmet</li>
              <li>✓ <strong>İstanbul - Antalya:</strong> 720 km, tam sigortalı taşıma</li>
              <li>✓ <strong>İstanbul - Bursa:</strong> 150 km, aynı gün veya ertesi gün teslimat</li>
            </ul>
            <div className="mt-6">
              <a 
                href="tel:05432107058" 
                className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block transition shadow-xl"
              >
                Hemen Fiyat Teklifi İsteyin
              </a>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="text-primary" size={32} />
              Neden Metin Nakliyat ile Şehirlerarası Taşınmalısınız?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">15+ Yıl Tecrübe</h4>
                <p className="text-gray-700">
                  Türkiye'nin dört bir yanında binlerce başarılı şehirlerarası nakliyat deneyimi. 
                  Yolların tüm zorluklarını biliyoruz.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Modern Araç Filosu</h4>
                <p className="text-gray-700">
                  Uzun yol taşımacılığına uygun, kliması çalışan, GPS takipli, sigortalı araçlarımızla 
                  eşyalarınız her koşulda korunur.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Kapsamlı Nakliyat Sigortası</h4>
                <p className="text-gray-700">
                  Uzun mesafeli taşımalarda oluşabilecek her türlü riske karşı tam güvence. 
                  Eşyalarınız yasal koruma altında.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">7/24 Müşteri Desteği</h4>
                <p className="text-gray-700">
                  Yolculuk süresince her an bize ulaşabilirsiniz. Eşyalarınızın durumunu öğrenmek için 
                  müşteri temsilcimiz bir telefon kadar yakın.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Türkiye Geneli Şehirlerarası Nakliyat İçin Bizi Arayın
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              İstanbul'dan Ankara'ya, İzmir'e, Antalya'ya ve Türkiye'nin her yerine güvenli taşımacılık
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

export default SehirlerarasiNakliyat;
