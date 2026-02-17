import { Building2, Briefcase, CheckCircle, Phone, Clock, Shield, Users, Settings } from 'lucide-react';

const OfisTasima = () => {
  return (
    <article className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            İstanbul Ofis Taşıma Hizmetleri
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            İş Süreçlerinizi Aksatmadan Profesyonel Kurumsal Taşımacılık
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="tel:05432107058" 
              className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition inline-flex items-center gap-2"
            >
              <Phone size={20} />
              Kurumsal Destek
            </a>
            <a 
              href="#teklif-al" 
              className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Özel Teklif İsteyin
            </a>
          </div>
        </header>

        <section className="prose prose-lg max-w-none">
          
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Briefcase className="text-primary" size={32} />
              Kurumsal Ofis Taşıma Hizmeti
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Ofis taşıma, şirketlerin iş akışını en az düzeyde etkileyecek şekilde sistematik planlama gerektiren özel bir hizmettir. 
              <strong className="text-primary"> Levent ofis taşıma, Maslak kurumsal nakliyat, Şişli ofis taşımacılığı</strong> gibi 
              İstanbul'un iş merkezlerinde yılların deneyimi ile profesyonel çözümler sunuyoruz.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Metin Nakliyat olarak, <strong className="text-primary">Kadıköy ofis nakliyat, Ümraniye iş yeri taşıma, 
              Beşiktaş kurumsal taşımacılık</strong> konularında uzman ekibimizle çalışma saatleri dışında veya 
              hafta sonu taşıma seçenekleriyle iş kaybını sıfıra indiriyoruz.
            </p>
          </div>

          <div className="mb-10 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Settings className="text-secondary" size={32} />
              Ofis Taşıma Hizmetimizin Kapsamı
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Teknik Ekipman Taşıma</h4>
                  <p className="text-gray-600 text-sm">
                    Bilgisayar, yazıcı, sunucu, fotokopi makinesi gibi hassas teknolojik cihazların özel paketleme ile güvenli taşınması
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ofis Mobilyaları</h4>
                  <p className="text-gray-600 text-sm">
                    Masa, sandalye, dolap, arşiv rafları, toplantı masaları ve tüm ofis mobilyalarının montaj-demontaj hizmeti
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Arşiv ve Dosya Taşıma</h4>
                  <p className="text-gray-600 text-sm">
                    Gizlilik gerektiren belgeler, arşiv kutuları ve önemli dosyaların güvenli ve organize taşınması
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sistematik Etiketleme</h4>
                  <p className="text-gray-600 text-sm">
                    Her eşya ve kutu etiketlenir, yeni ofisteki konumu önceden planlanır, böylece yerleştirme hızlı olur
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Minimal İş Kaybı</h4>
                  <p className="text-gray-600 text-sm">
                    Cuma akşamı veya hafta sonu taşıma ile Pazartesi sabahı ofis kullanıma hazır halde teslim edilir
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Proje Yöneticisi Desteği</h4>
                  <p className="text-gray-600 text-sm">
                    Tüm süreç boyunca size özel proje yöneticisi atanır, koordinasyon ve iletişim tek noktadan sağlanır
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Building2 className="text-accent" size={32} />
              İstanbul'da Ofis Taşıma Yapılan Bölgeler
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-primary mb-3">Avrupa Yakası İş Merkezleri</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>→ <strong>Levent Ofis Taşıma:</strong> 4. Levent, Esentepe plaza taşımaları</li>
                  <li>→ <strong>Maslak Kurumsal Nakliyat:</strong> İş kuleleri, ofis kompleksleri</li>
                  <li>→ <strong>Şişli İş Yeri Taşıma:</strong> Mecidiyeköy, Gayrettepe ofisleri</li>
                  <li>→ <strong>Beşiktaş Ofis Nakliyat:</strong> Zincirlikuyu, Ortaköy iş yerleri</li>
                  <li>→ <strong>Başakşehir Kurumsal Taşıma:</strong> Yeni yerleşim ofisleri</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-primary mb-3">Anadolu Yakası İş Merkezleri</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>→ <strong>Kadıköy Ofis Taşıma:</strong> Acıbadem, Kozyatağı plaza taşımaları</li>
                  <li>→ <strong>Ümraniye İş Yeri Nakliyat:</strong> Finanskent, Alemdağ ofisleri</li>
                  <li>→ <strong>Ataşehir Kurumsal Taşıma:</strong> Ataşehir bulvarı iş merkezleri</li>
                  <li>→ <strong>Kartal Ofis Nakliyat:</strong> Yakacık, Dragos bölgesi ofisler</li>
                  <li>→ <strong>Pendik İş Yeri Taşıma:</strong> Endüstri bölgesi firmalar</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="text-secondary" size={32} />
              Ofis Taşıma Süreci Nasıl İşler?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Ön Keşif ve Planlama</h4>
                  <p className="text-gray-700">
                    Mevcut ofisinize gelerek eşya envanteri çıkarıyoruz. Yeni ofis planı ile eşleştirme yaparak 
                    detaylı bir taşıma planı oluşturuyoruz. <strong className="text-primary">Maslak'tan Levent'e ofis taşıma</strong> 
                    gibi kısa mesafelerde bile sistematik çalışma şart.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-secondary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Paketleme ve Etiketleme</h4>
                  <p className="text-gray-700">
                    Her departman, her oda için ayrı etiketleme sistemi uygularız. Teknik ekipmanlar özel kutularda paketlenir. 
                    Kablolar, ekipman parçaları organize bir şekilde saklanır.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Taşıma ve Montaj</h4>
                  <p className="text-gray-700">
                    Belirlenen gün ve saatte (genellikle hafta sonu) taşıma başlar. Yeni ofiste her eşya plan dahilinde 
                    doğru yerine yerleştirilir, mobilyalar kurulur, ekipmanlar bağlanır.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Test ve Teslim</h4>
                  <p className="text-gray-700">
                    Tüm ekipmanların çalıştığı kontrol edilir, eksik veya hatalı yerleştirme var mı kontrol yapılır. 
                    Pazartesi sabahı çalışanlarınız yeni ofiste sorunsuz işe başlar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 bg-gradient-to-r from-primary to-blue-700 text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Shield size={32} />
              Ofis Taşıma Fiyatları ve Faktörler
            </h2>
            <p className="text-lg mb-4 leading-relaxed">
              Ofis taşıma fiyatları, personel sayısı, eşya miktarı, mesafe, taşıma günü (hafta içi/hafta sonu) ve 
              özel ekipman ihtiyacına göre değişir. Metin Nakliyat olarak şeffaf ve rekabetçi fiyatlarla hizmet veriyoruz.
            </p>
            <ul className="space-y-2 text-lg mb-6">
              <li>✓ <strong>Küçük ofisler</strong> (1-10 personel): Hızlı ve ekonomik taşıma</li>
              <li>✓ <strong>Orta ölçek şirketler</strong> (10-50 personel): Proje yöneticisi eşliğinde</li>
              <li>✓ <strong>Kurumsal firmalar</strong> (50+ personel): Tam kapsamlı planlama ve koordinasyon</li>
              <li>✓ <strong>Teknik ekipman yoğun ofisler:</strong> Özel paketleme ve sigorta</li>
            </ul>
            <div className="mt-6">
              <a 
                href="tel:05432107058" 
                className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block transition shadow-xl"
              >
                Özel Ofis Taşıma Teklifi İsteyin
              </a>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="text-primary" size={32} />
              Neden Ofis Taşımada Metin Nakliyat?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Kurumsal Deneyim</h4>
                <p className="text-gray-700">
                  Onlarca kurumsal firmanın ofis taşımasını başarıyla tamamladık. Bankalar, şirketler, 
                  kamu kurumları bizimle çalışıyor.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Sıfır İş Kaybı</h4>
                <p className="text-gray-700">
                  Hafta sonu veya mesai sonrası taşıma ile iş akışınızı etkilemiyoruz. 
                  Pazartesi sabahı yeni ofisiniz hazır.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Tam Sigorta Güvencesi</h4>
                <p className="text-gray-700">
                  Değerli teknik ekipmanlar ve ofis mobilyaları nakliyat sigortası kapsamında korunur.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Özel Proje Yöneticisi</h4>
                <p className="text-gray-700">
                  Sizin için atanan proje yöneticisi tüm süreci koordine eder, siz sadece onaylar verirsiniz.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 p-10 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kurumsal Ofis Taşıma İçin Metin Nakliyat
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Levent, Maslak, Şişli, Kadıköy ve İstanbul'un tüm iş merkezlerinde profesyonel ofis taşımacılığı
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:05432107058" 
                className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl inline-flex items-center justify-center gap-2"
              >
                <Phone size={24} />
                Kurumsal Destek: 0543 210 70 58
              </a>
              <a 
                href="https://wa.me/905432107058" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-xl"
              >
                WhatsApp İletişim
              </a>
            </div>
          </div>

        </section>
      </div>
    </article>
  );
};

export default OfisTasima;
