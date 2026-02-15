import { Home, Building2, TrendingUp, Package, Warehouse, ArrowUpCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Evden Eve Nakliyat',
      description: 'Evinizden yeni evinize güvenli ve hızlı taşıma hizmeti. Eşyalarınız özenle paketlenir, sigortalı şekilde taşınır.',
      features: ['Profesyonel paketleme', 'Sigortalı taşıma', 'Eşya montaj-demontaj'],
      color: 'primary',
      slug: 'evden-eve-nakliyat'
    },
    {
      icon: Building2,
      title: 'Ofis Taşıma',
      description: 'Kurumsal ofis taşımalarında iş süreçlerinizi aksatmadan, planlı ve sistematik taşıma çözümleri sunuyoruz.',
      features: ['Minimum iş kaybı', 'Sistematik planlama', 'Teknik ekipman taşıma'],
      color: 'secondary',
      slug: 'ofis-tasima'
    },
    {
      icon: TrendingUp,
      title: 'Şehiriçi Nakliyat',
      description: 'İstanbul içinde hızlı ve ekonomik taşıma hizmeti. Aynı gün teslimat imkanı ile yanınızdayız.',
      features: ['Aynı gün teslimat', 'Trafik optimizasyonu', 'Esnek saatler'],
      color: 'accent',
      slug: 'sehirici-nakliyat'
    },
    {
      icon: Package,
      title: 'Şehirlerarası Nakliyat',
      description: 'Türkiye\'nin her yerine güvenli ve zamanında ulaşan şehirlerarası taşımacılık hizmetimiz.',
      features: ['Kapıdan kapıya hizmet', 'Takip sistemi', 'Garantili teslimat'],
      color: 'primary',
      slug: 'sehirlerarasi-nakliyat'
    },
    {
      icon: Warehouse,
      title: 'Eşya Depolama',
      description: 'Güvenli, modern ve kameralı depolarımızda eşyalarınızı istediğiniz süre boyunca saklama imkanı.',
      features: ['24/7 güvenlik', 'Klimalı depo', 'Esnek süreler'],
      color: 'secondary',
      slug: 'esya-depolama'
    },
    {
      icon: ArrowUpCircle,
      title: 'Asansörlü Nakliyat',
      description: 'Yüksek katlarda taşıma zorluğunu ortadan kaldıran asansörlü nakliyat sistemiyle kolay ve güvenli taşıma.',
      features: ['Yüksek katlara özel', 'Hasarsız taşıma', 'Zaman tasarrufu'],
      color: 'accent',
      slug: 'asansorlu-nakliyat'
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'primary': return 'text-primary bg-blue-50 hover:bg-blue-100';
      case 'secondary': return 'text-secondary bg-orange-50 hover:bg-orange-100';
      case 'accent': return 'text-accent bg-green-50 hover:bg-green-100';
      default: return 'text-primary bg-blue-50 hover:bg-blue-100';
    }
  };

  return (
    <section id="hizmetlerimiz" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İstanbul'un tüm ilçelerinde ve Türkiye genelinde profesyonel nakliyat çözümleri
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        {/* Hizmet Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
              >
                <div className={`p-6 ${getColorClasses(service.color)} transition-colors duration-300`}>
                  <IconComponent size={48} className="mx-auto group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-center leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className={`w-2 h-2 rounded-full mr-2 ${service.color === 'primary' ? 'bg-primary' : service.color === 'secondary' ? 'bg-secondary' : 'bg-accent'}`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`#${service.slug}`} 
                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      service.color === 'primary' ? 'bg-primary hover:bg-blue-700 text-white' :
                      service.color === 'secondary' ? 'bg-secondary hover:bg-orange-600 text-white' :
                      'bg-accent hover:bg-green-600 text-white'
                    }`}
                  >
                    Detaylı Bilgi
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Alt CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">
            Size en uygun hizmeti bulmak için bizimle iletişime geçin
          </p>
          <a 
            href="#teklif-al" 
            className="inline-block bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl hover:shadow-2xl hover:scale-105 transform"
          >
            Ücretsiz Fiyat Teklifi Alın
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
