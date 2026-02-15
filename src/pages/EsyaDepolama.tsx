import { Warehouse, Shield, Camera, ThermometerSun, CheckCircle, Phone, Clock, Lock } from 'lucide-react';

const EsyaDepolama = () => {
  return (
    <article className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            İstanbul Eşya Depolama Hizmetleri
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Güvenli, Modern ve Klimalı Depolarda Eşyalarınız Emanette
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="tel:05432107058" 
              className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition inline-flex items-center gap-2"
            >
              <Phone size={20} />
              Depo Bilgisi Al
            </a>
            <a 
              href="#teklif-al" 
              className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Aylık Ücret Öğren
            </a>
          </div>
        </header>

        <section className="prose prose-lg max-w-none">
          
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Warehouse className="text-primary" size={32} />
              Eşya Depolama Hizmeti Nedir?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Eşya depolama, geçici veya uzun süreli olarak ev veya ofis eşyalarınızın güvenli, modern ve kontrollü ortamlarda 
              saklanması hizmetidir. <strong className="text-primary">İstanbul eşya depolama, Kadıköy depo kiralama, 
              Şişli eşya saklama</strong> gibi hizmetlerde Metin Nakliyat olarak geniş depo alanlarımız ve 7/24 güvenlik 
              sistemlerimizle eşyalarınızı koruma altına alıyoruz.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Yurt dışına çıkma, ev renovasyonu, yeni evin geç teslimi, sezonluk eşya saklama gibi durumlarda 
              <strong className="text-primary"> Beşiktaş eşya deposu, Ümraniye depolama hizmeti</strong> talep eden 
              müşterilerimize esnek süreler ve uygun fiyatlarla hizmet sunuyoruz.
            </p>
          </div>

          <div className="mb-10 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="text-secondary" size={32} />
              Depolama Hizmetimizin Özellikleri
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <Camera className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">24/7 Kamera İzleme</h4>
                  <p className="text-gray-600 text-sm">
                    Depolarımızda kesintisiz kamera sistemi çalışır. Tüm alanlar kayıt altındadır ve güvenlik ekibi her an gözetim yapar.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <ThermometerSun className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Klimalı Ortam</h4>
                  <p className="text-gray-600 text-sm">
                    Eşyalarınız nem, aşırı sıcaklık ve soğuktan etkilenmez. Özellikle ahşap mobilyalar ve elektronik cihazlar için ideal.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <Lock className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Kilitli ve Özel Alanlar</h4>
                  <p className="text-gray-600 text-sm">
                    Her müşteriye özel kilitli bölmeler veya konteynerler tahsis edilir. Eşyalarınıza sadece siz erişebilirsiniz.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Nakliye Dahil Paketler</h4>
                  <p className="text-gray-600 text-sm">
                    Eşyalarınızı evinizden alıp depoya taşıma ve geri teslimat hizmetimiz mevcuttur. Tüm süreç sorunsuz ilerler.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Esnek Süreler</h4>
                  <p className="text-gray-600 text-sm">
                    1 ay, 6 ay, 1 yıl veya daha uzun süreli depolama seçenekleri. İstediğiniz zaman eşyanızı geri alabilirsiniz.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sigorta Seçeneği</h4>
                  <p className="text-gray-600 text-sm">
                    Depolama süresi boyunca eşyalarınız için sigorta yaptırabilirsiniz. Ekstra koruma ve gönül rahatlığı.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="text-accent" size={32} />
              Hangi Durumlarda Eşya Depolama İhtiyacı Doğar?
            </h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Yeni Ev Geç Teslim</h4>
                <p className="text-gray-700">
                  Eski evinizden çıktınız ama yeni eviniz henüz hazır değil. <strong className="text-primary">Kadıköy geçici depolama, 
                  Üsküdar eşya saklama</strong> hizmetimizle eşyalarınızı güvenle bekletebilirsiniz.
                </p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border-l-4 border-secondary">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Yurtdışı / Uzun Seyahat</h4>
                <p className="text-gray-700">
                  Yurtdışına iş, eğitim veya tatil için uzun süre çıkacaksanız evinizdeki eşyaları güvenli bir depoda saklamak ideal çözümdür.
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border-l-4 border-accent">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Ev Renovasyonu</h4>
                <p className="text-gray-700">
                  Evinizde tadilat, boya-badana veya yenileme yapılırken eşyalarınızı depoda saklarsınız, 
                  işlem bitince geri alırsınız. <strong className="text-primary">Beşiktaş tadilat depolama</strong> hizmeti sıklıkla tercih edilir.
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Ev Küçültme / Minimalizm</h4>
                <p className="text-gray-700">
                  Daha küçük bir eve taşınıyorsunuz ve bazı eşyalarınız sığmıyor. Sezonluk eşyalar, fazla mobilyalar için 
                  uzun süreli depolama çözümü.
                </p>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-secondary">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Öğrenci Yaz Tatili</h4>
                <p className="text-gray-700">
                  Yaz aylarında yurdu boşaltan öğrenciler eşyalarını güvenli depoda saklayıp, yeni dönem başında geri alabilirler.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Eşya Depolama Süreci
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">İletişim ve Depo Seçimi</h4>
                  <p className="text-gray-700">
                    Bizi arayarak eşya miktarınızı, depolama sürenizi ve tercihlerinizi bildiriyorsunuz. 
                    Size uygun depo alanı ve aylık ücret bilgisi veriyoruz.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Eşya Teslim ve Paketleme</h4>
                  <p className="text-gray-700">
                    Eşyalarınızı adresinizden alıyoruz veya siz depoya getiriyorsunuz. Gerekirse paketleme yapıyoruz, 
                    envanter listesi oluşturuyoruz.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Depolama Dönemi</h4>
                  <p className="text-gray-700">
                    Eşyalarınız güvenli, klimalı ve kameralı depolarımızda saklanır. İstediğiniz zaman depoya gelerek 
                    kontrol edebilirsiniz.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Geri Teslimat</h4>
                  <p className="text-gray-700">
                    Depolama süreniz bittiğinde veya ihtiyaç duyduğunuzda eşyalarınızı geri alıyorsunuz. 
                    Nakliye hizmeti ile adresinize teslim de edebiliriz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 bg-gradient-to-r from-primary to-blue-700 text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Warehouse size={32} />
              Eşya Depolama Fiyatları
            </h2>
            <p className="text-lg mb-4 leading-relaxed">
              Depolama ücretleri, eşya hacmi (m³), depolama süresi ve özel hizmet ihtiyaçlarına göre değişir. 
              Metin Nakliyat olarak şeffaf ve uygun fiyatlarla İstanbul genelinde hizmet veriyoruz.
            </p>
            <ul className="space-y-2 text-lg mb-6">
              <li>✓ <strong>Kısa Süreli (1-3 ay):</strong> Geçici depolama için ekonomik paketler</li>
              <li>✓ <strong>Orta Vade (3-6 ay):</strong> Renovasyon ve ara dönem çözümleri</li>
              <li>✓ <strong>Uzun Süreli (6+ ay):</strong> Yurtdışı, minimalizm, özel indirimli tarifeler</li>
              <li>✓ <strong>Nakliye dahil paketler:</strong> Evden depo + depodan eve nakliye</li>
            </ul>
            <div className="mt-6">
              <a 
                href="tel:05432107058" 
                className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block transition shadow-xl"
              >
                Aylık Depo Ücreti Öğren
              </a>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              İstanbul'da Eşya Depolama Yapabileceğiniz Bölgeler
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Metin Nakliyat, İstanbul'un farklı bölgelerinde modern depo tesislerine sahiptir. 
              <strong className="text-primary"> Kadıköy eşya deposu, Beşiktaş depolama hizmeti, Şişli eşya saklama, 
              Ümraniye depo kiralama, Bakırköy depo</strong> gibi merkezi noktalarda eşyalarınızı güvenle saklayabilirsiniz.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Size en yakın depo lokasyonunu öğrenmek ve fiyat teklifi almak için bizimle iletişime geçin.
            </p>
          </div>

          <div className="text-center bg-gradient-to-br from-orange-50 to-yellow-50 p-10 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Güvenli Eşya Depolama İçin Metin Nakliyat
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Klimalı, kameralı, sigortalı depolarımızda eşyalarınız emanette
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
                WhatsApp ile Bilgi Al
              </a>
            </div>
          </div>

        </section>
      </div>
    </article>
  );
};

export default EsyaDepolama;
