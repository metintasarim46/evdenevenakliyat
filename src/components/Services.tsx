import { Home, Building2, TrendingUp, Package, Warehouse, ArrowUpCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Evden Eve Nakliyat',
      description: 'İstanbul evden eve nakliyat hizmetimizde, eşyalarınızı uzman kadromuzla sigortalı ve profesyonel paketleme standartlarında taşıyoruz. Güvenli taşınmanın tek adresi.',
      features: ['Hassas eşya paketleme', 'Garantili sigortalı taşıma', 'Uzman montaj ekibi'],
      color: 'primary',
      slug: 'evden-eve-nakliyat'
    },
    {
      icon: Building2,
      title: 'Ofis Taşıma',
      description: 'Kurumsal nakliyat çözümlerimizle ofis malzemelerinizi ve teknik ekipmanlarınızı iş kaybı yaratmadan, hafta sonu veya gece nakliyat seçenekleriyle yeni adresinize ulaştırıyoruz.',
      features: ['Elektronik eşya taşıma', 'Sistematik etiketleme', 'Hızlı kurulum desteği'],
      color: 'secondary',
      slug: 'ofis-tasima'
    },
    {
      icon: TrendingUp,
      title: 'Şehiriçi Nakliyat',
      description: 'İstanbul içi nakliyat ihtiyaçlarınızda; Avrupa ve Anadolu yakasında geniş araç filomuzla aynı gün içinde hızlı, ekonomik ve güvenilir taşımacılık çözümleri sunuyoruz.',
      features: ['Yakadan yakaya hızlı servis', 'Dar sokaklara uygun araçlar', 'Ekonomik fiyat garantisi'],
      color: 'accent',
      slug: 'sehirici-nakliyat'
    },
    {
      icon: Package,
      title: 'Şehirlerarası Nakliyat',
      description: 'İstanbul merkezli olmak üzere Türkiye\'nin tüm illerine kapıdan kapıya asansörlü şehirlerarası nakliyat hizmeti sağlıyoruz. Eşyalarınız uzun yola özel ambalajlarla korunur.',
      features: ['81 ile kesintisiz hizmet', 'GPRS araç takip sistemi', 'Uzun yol sigorta güvencesi'],
      color: 'primary',
      slug: 'sehirlerarasi-nakliyat'
    },
    {
      icon: Warehouse,
      title: 'Eşya Depolama',
      description: 'Fazla eşyalarınız için modern, rutubetsiz ve 7/24 kamera kayıtlı güvenli depolama alanları. İstanbul eşya depolama hizmetinde hijyenik ve sigortalı çözümler.',
      features: ['Kişiye özel kilitli alanlar', 'Düzenli ilaçlama ve temizlik', 'Esnek kiralama süreleri'],
      color: 'secondary',
      slug: 'esya-depolama'
    },
    {
      icon: ArrowUpCircle,
      title: 'Asansörlü Nakliyat',
      description: 'Yüksek katlı binalarda taşınmayı kolaylaştıran modüler asansör sistemlerimizle, eşyalarınız bina içine girmeden dış cepheden balkonunuza en güvenli şekilde ulaştırılır.',
      features: ['15. kata kadar erişim', 'Çizilme ve hasar önleyici', 'İşçilik maliyetinden tasarruf'],
      color: 'accent',
      slug: 'asansorlu-nakliyat'
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'primary': return 'text-primary bg-blue-50 hover:bg-blue-100';
      case 'secondary': return 'text-secondary bg-orange-50 hover:bg-orange-100';
      case 'accent': return 'text-accent bg-green-50 hover:bg-green-100';
      default: return 'text-primary bg-blue-50';
    }
  };

  return (
    <section id="hizmetlerimiz" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Başlık Bölümü SEO Odaklı */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Profesyonel Nakliyat Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Metin Nakliyat olarak İstanbul evden eve nakliyat, şehirlerarası taşımacılık ve asansörlü nakliyat alanlarında 
            <strong className="text-primary"> 15 yıllık tecrübemizle</strong> garantili ve sigortalı çözümler sunuyoruz.
          </p>
          <div className="w-32 h-1.5 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Hizmet Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <article 
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-3"
              >
                <div className={`p-8 ${getColorClasses(service.color)} flex justify-center transition-colors duration-300`}>
                  <IconComponent size={56} className="group-hover:rotate-6 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center leading-relaxed h-24">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8 border-t border-gray-100 pt-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm font-medium text-gray-700">
                        <span className={`w-2.5 h-2.5 rounded-full mr-3 ${service.color === 'primary' ? 'bg-primary' : service.color === 'secondary' ? 'bg-secondary' : 'bg-accent'}`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#teklif-al" 
                    title={`${service.title} için fiyat al`}
                    className={`block text-center py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-md ${
                      service.color === 'primary' ? 'bg-primary hover:bg-blue-800 text-white' :
                      service.color === 'secondary' ? 'bg-secondary hover:bg-orange-700 text-white' :
                      'bg-accent hover:bg-green-700 text-white'
                    }`}
                  >
                    Hemen Teklif Al
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Alt CTA Bölümü */}
        <div className="text-center mt-20 bg-white p-10 rounded-3xl shadow-xl border border-blue-50">
          <h4 className="text-3xl font-bold text-gray-900 mb-4">Size Nasıl Yardımcı Olabiliriz?</h4>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Hangi hizmetimizle ilgileniyorsanız size özel fiyatlandırma ve taşınma planı oluşturmamız için ücretsiz ekspertiz talep edin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:05432107058" 
              className="bg-primary hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:scale-105"
            >
              Hemen Ara: 0543 210 70 58
            </a>
            <a 
              href="#teklif-al" 
              className="bg-secondary hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:scale-105"
            >
              Fiyat Teklifi Formu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;