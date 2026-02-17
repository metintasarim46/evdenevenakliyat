import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const hizmetler = [
    'Evden Eve Nakliyat',
    'Şehiriçi Nakliyat',
    'Şehirlerarası Nakliyat',
    'Ofis Taşıma',
    'Eşya Depolama',
    'Asansörlü Nakliyat'
  ];

  const lokasyonlar = [
    'Kadıköy', 'Üsküdar', 'Beşiktaş', 'Şişli', 'Beyoğlu', 'Fatih',
    'Bakırköy', 'Başakşehir', 'Ümraniye', 'Pendik', 'Kartal', 'Maltepe',
    'Ataşehir', 'Zeytinburnu', 'Bahçelievler', 'Esenler'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Şirket Bilgileri */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Metin <span className="text-secondary">Nakliyat</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Güvenilir, profesyonel ve müşteri memnuniyeti odaklı nakliyat hizmetleri ile yanınızdayız.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:05432107058" className="flex items-center gap-2 hover:text-secondary transition">
                <Phone size={18} />
                <span>0543 210 70 58</span>
              </a>
              <a href="mailto:info@metinnakliyat.com" className="flex items-center gap-2 hover:text-secondary transition">
                <Mail size={18} />
                <span>info@metinnakliyat.com</span>
              </a>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>7/24 Hizmet</span>
              </div>
            </div>
          </div>

          {/* Hizmetlerimiz */}
          <div>
            <h4 className="text-xl font-semibold mb-4 border-b-2 border-secondary pb-2 inline-block">
              Hizmetlerimiz
            </h4>
            <ul className="space-y-2 text-gray-300">
              {hizmetler.map((hizmet) => (
                <li key={hizmet}>
                  <a href="#hizmetlerimiz" className="hover:text-secondary transition hover:translate-x-1 inline-block">
                    → {hizmet}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmet Verdiğimiz Lokasyonlar */}
          <div>
            <h4 className="text-xl font-semibold mb-4 border-b-2 border-secondary pb-2 inline-block">
              Hizmet Bölgelerimiz
            </h4>
            <div className="flex items-start gap-2 mb-3">
              <MapPin size={18} className="text-secondary mt-1 flex-shrink-0" />
              <p className="text-gray-300 text-sm">
                İstanbul'un tüm ilçelerinde ve Türkiye genelinde profesyonel nakliyat hizmeti
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-gray-400">
              {lokasyonlar.slice(0, 12).map((lokasyon) => (
                <span key={lokasyon} className="bg-gray-800 px-2 py-1 rounded hover:bg-gray-700 transition">
                  {lokasyon}
                </span>
              ))}
            </div>
          </div>

          {/* Hızlı Erişim */}
          <div>
            <h4 className="text-xl font-semibold mb-4 border-b-2 border-secondary pb-2 inline-block">
              Hızlı Erişim
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#anasayfa" className="hover:text-secondary transition">Anasayfa</a></li>
              <li><a href="#hakkimizda" className="hover:text-secondary transition">Hakkımızda</a></li>
              <li><a href="#hizmetlerimiz" className="hover:text-secondary transition">Hizmetlerimiz</a></li>
              <li><a href="#blog" className="hover:text-secondary transition">Blog</a></li>
              <li><a href="#iletisim" className="hover:text-secondary transition">İletişim</a></li>
            </ul>
            <a 
              href="https://wa.me/905432107058" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white transition font-medium inline-block w-full text-center"
            >
              WhatsApp ile İletişim
            </a>
          </div>
        </div>

        {/* Alt Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Metin Nakliyat. Tüm hakları saklıdır. | Güvenli ve Profesyonel Taşımacılık Hizmetleri</p><a href='https://metintasarim.com'>Metin Tasarım Tarafından Yapılmıştır.</a>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
