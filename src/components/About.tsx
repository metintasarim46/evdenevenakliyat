import { Heart, Award, Handshake, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="hakkimizda" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Sol Taraf - Metin İçerik */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Metin Nakliyat Hakkında
            </h2>
            <div className="w-24 h-1 bg-secondary mb-6"></div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong className="text-primary">15 yılı aşkın tecrübemiz</strong> ile nakliyat sektöründe güvenilir bir isim olan Metin Nakliyat, 
              müşteri memnuniyetini her zaman ön planda tutarak hizmet vermektedir. İstanbul'un tüm ilçelerinde ve Türkiye genelinde 
              evden eve nakliyat, şehirlerarası taşımacılık, ofis taşıma ve eşya depolama konularında profesyonel çözümler sunuyoruz.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Taşınma sürecinin stresli bir deneyim olduğunun farkındayız. Bu nedenle, eşyalarınızın güvenliğini en üst düzeyde sağlayacak 
              <strong className="text-primary"> sigortalı taşıma, profesyonel paketleme</strong> ve <strong className="text-primary">deneyimli ekip</strong> ile 
              süreci sizin için kolaylaştırıyoruz. Kadıköy'den Başakşehir'e, Beşiktaş'tan Pendik'e, İstanbul'un her köşesinde hızlı ve güvenilir hizmet anlayışımızla yanınızdayız.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Modern araç filomuz, kalifiye personelimiz ve müşteri odaklı yaklaşımımız sayesinde binlerce mutlu müşteriye ulaştık. 
              Her taşıma işinde <strong className="text-secondary">şeffaf fiyatlandırma, zamanında teslimat</strong> ve <strong className="text-secondary">hasarsız taşıma garantisi</strong> veriyoruz.
            </p>

            {/* Değerlerimiz */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <Heart className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Müşteri Odaklı</h4>
                  <p className="text-sm text-gray-600">Memnuniyetiniz önceliğimiz</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Kalite Garantisi</h4>
                  <p className="text-sm text-gray-600">Profesyonel standartlar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Handshake className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Güvenilirlik</h4>
                  <p className="text-sm text-gray-600">15+ yıllık tecrübe</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Hedef Odaklı</h4>
                  <p className="text-sm text-gray-600">Zamanında teslimat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - İstatistik ve Vurgular */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary to-blue-600 text-white p-8 rounded-xl shadow-xl">
              <h3 className="text-3xl font-bold mb-4">Neden Metin Nakliyat?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-2xl">✓</span>
                  <span className="text-lg">İstanbul genelinde hızlı servis ağı</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-2xl">✓</span>
                  <span className="text-lg">Kadıköy, Üsküdar, Beşiktaş ve tüm ilçeler</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-2xl">✓</span>
                  <span className="text-lg">7/24 kesintisiz iletişim ve destek</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-2xl">✓</span>
                  <span className="text-lg">Tam kapsamlı nakliyat sigortası</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-secondary to-orange-600 text-white p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Vizyon & Misyon</h3>
              <p className="text-lg leading-relaxed">
                Türkiye'nin her köşesinde güvenilir, hızlı ve ekonomik nakliyat hizmeti sunarak sektörde lider bir marka olmak temel misyonumuzdur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;