import { Truck, Shield, Clock, Users, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="anasayfa" className="relative pt-20 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Sol Taraf - Ana Metin */}
          <div className="text-center lg:text-left">
            {/* SEO DEĞİŞİKLİĞİ: Başlığa anahtar kelimeler eklendi ve tam h1 yapıldı */}
       <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
  Metin Nakliyat ile Taşınmanın <span className="text-primary">Güvenli</span> ve <span className="text-secondary">Keyifli</span> Yolu
</h1>
<p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl leading-relaxed">
  İstanbul genelinde <strong className="text-primary">asansörlü nakliyat</strong>, sigortalı evden eve taşımacılık ve profesyonel eşya depolama çözümleri sunuyoruz. 15 yılı aşkın tecrübemizle, eşyalarınızı paketlemeden montaja kadar her aşamada büyük bir titizlikle yeni adresinize ulaştırıyoruz. Hemen ücretsiz ekspertiz ve fiyat teklifi alın.
</p>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              İstanbul Evden Eve Nakliyat ve Şehirler Arası Taşımacılık
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Metin Nakliyat olarak, evden eve nakliyattan şehirlerarası taşımacılığa kadar tüm nakliye ihtiyaçlarınızda profesyonel çözümler sunuyoruz. 
              <strong className="text-primary"> Başakşehir</strong> başta olmak üzere <strong className="text-primary">İstanbul'un her ilçesinde</strong> 7/24 hizmetinizdeyiz.
            </p>
            
            {/* CTA Butonları */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="#teklif-al" 
                className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl hover:shadow-2xl hover:scale-105 transform inline-block text-center"
              >
                Ücretsiz Teklif Al
              </a>
              <a 
                href="tel:05432107058" 
                className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl hover:shadow-2xl hover:scale-105 transform inline-block text-center"
              >
                Hemen Ara
              </a>
            </div>

            {/* Güven İstatistikleri */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-gray-600">Yıllık Tecrübe</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">50K+</div>
                <div className="text-sm text-gray-600">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">%99</div>
                <div className="text-sm text-gray-600">Memnuniyet</div>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Görsel/İkon Alanı */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-full h-96">
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full opacity-20 animate-pulse delay-75"></div>
              <div className="relative z-10 flex flex-col gap-6 items-center justify-center h-full">
                {/* SEO DEĞİŞİKLİĞİ: İkona açıklama (alt metin niyetine) eklendi */}
                <Truck size={120} className="text-primary drop-shadow-2xl" aria-label="Evden eve nakliyat kamyonu" />
                <p className="text-2xl font-bold text-gray-800 text-center">
                  Hızlı, Güvenli, Profesyonel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Özellikler Bandı */}
      <div className="bg-white py-8 shadow-inner">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {/* SEO DEĞİŞİKLİĞİ: Buradaki başlıkları h3 yaptım (Hiyerarşi için önemli) */}
            <div className="flex flex-col items-center gap-2">
              <Shield className="text-primary" size={40} />
              <h3 className="font-semibold text-gray-800">Sigortalı Taşıma</h3>
              <p className="text-sm text-gray-600">Tam Güvence</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="text-secondary" size={40} />
              <h3 className="font-semibold text-gray-800">7/24 Hizmet</h3>
              <p className="text-sm text-gray-600">Her An Ulaşılabilir</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="text-accent" size={40} />
              <h3 className="font-semibold text-gray-800">Uzman Ekip</h3>
              <p className="text-sm text-gray-600">Deneyimli Kadro</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="text-primary" size={40} />
              <h3 className="font-semibold text-gray-800">Uygun Fiyat</h3>
              <p className="text-sm text-gray-600">Şeffaf Ücret</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;