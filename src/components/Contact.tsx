import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'evden-eve',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    const whatsappMessage = `Merhaba, ${formData.name}. ${formData.service} hizmeti için bilgi almak istiyorum. ${formData.message}`;
    const whatsappURL = `https://wa.me/905432107058?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="iletisim" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            İletişim
          </h2>
          <p className="text-xl text-gray-600">
            7/24 size ulaşmak ve hizmet vermek için buradayız
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Sol Taraf - İletişim Bilgileri */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Bize Ulaşın
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <Phone className="text-primary flex-shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Telefon</h4>
                  <a href="tel:05432107058" className="text-lg text-primary hover:text-blue-700 transition">
                    0543 210 70 58
                  </a>
                  <p className="text-sm text-gray-600 mt-1">7/24 Destek Hattı</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <Mail className="text-secondary flex-shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">E-posta</h4>
                  <a href="mailto:info@metinnakliyat.com" className="text-lg text-primary hover:text-blue-700 transition">
                    info@metinnakliyat.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">24 saat içinde dönüş</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <Clock className="text-accent flex-shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Çalışma Saatleri</h4>
                  <p className="text-gray-700">Pazartesi - Pazar</p>
                  <p className="text-primary font-semibold">7/24 Kesintisiz Hizmet</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hizmet Bölgesi</h4>
                  <p className="text-gray-700">İstanbul'un tüm ilçeleri</p>
                  <p className="text-gray-700">ve Türkiye geneli</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Direkt İletişim */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border-2 border-green-200">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Hızlı İletişim</h4>
              <p className="text-gray-700 mb-4">
                WhatsApp üzerinden anında bilgi alın ve fiyat teklifi isteyin
              </p>
              <a 
                href="https://wa.me/905432107058" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition inline-flex items-center gap-2 w-full justify-center"
              >
                <Phone size={20} />
                WhatsApp ile İletişime Geç
              </a>
            </div>
          </div>

          {/* Sağ Taraf - İletişim Formu */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Teklif İsteyin
            </h3>
            
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Adınız Soyadınız *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="Örn: Ahmet Yılmaz"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Telefon Numaranız *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="Örn: 0532 123 45 67"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="ornek@email.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                  Hizmet Türü *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                >
                  <option value="evden-eve">Evden Eve Nakliyat</option>
                  <option value="sehirici">Şehiriçi Nakliyat</option>
                  <option value="sehirlerarasi">Şehirlerarası Nakliyat</option>
                  <option value="ofis">Ofis Taşıma</option>
                  <option value="depolama">Eşya Depolama</option>
                  <option value="asansorlu">Asansörlü Nakliyat</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="Lütfen taşınma adresiniz, tarih ve diğer detayları belirtin..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary hover:bg-orange-600 text-white px-6 py-4 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Gönder
              </button>

              <p className="text-sm text-gray-600 mt-4 text-center">
                * Formu gönderdikten sonra WhatsApp üzerinden size yönlendirileceksiniz
              </p>
            </form>
          </div>
        </div>

        {/* Alt Bölge - Lokasyonlar SEO */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Hizmet Verdiğimiz İlçeler
          </h3>
          <p className="text-center text-gray-600 mb-6">
            İstanbul'un her köşesinde profesyonel nakliyat hizmetleri
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              'Kadıköy', 'Üsküdar', 'Beşiktaş', 'Şişli', 'Beyoğlu', 'Fatih',
              'Bakırköy', 'Başakşehir', 'Ümraniye', 'Pendik', 'Kartal', 'Maltepe',
              'Ataşehir', 'Zeytinburnu', 'Bahçelievler', 'Esenler', 'Küçükçekmece', 'Avcılar',
              'Esenyurt', 'Beylikdüzü', 'Sarıyer', 'Çekmeköy', 'Sancaktepe', 'Tuzla'
            ].map((ilce) => (
              <div key={ilce} className="bg-gray-50 hover:bg-primary hover:text-white transition px-4 py-2 rounded text-center text-sm font-medium cursor-pointer">
                {ilce}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
