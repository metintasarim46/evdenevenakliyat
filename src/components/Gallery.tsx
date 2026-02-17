import React from 'react';

const Gallery = () => {
  // Yüksek çözünürlüklü ve SEO dostu görseller
  const images = [
    {
      src: 'https://image.pollinations.ai/prompt/professional%20moving%20truck%20in%20Istanbul%20cityscape%2C%20sunny%20day%2C%20realistic%2C%20high%20detail?width=1200&height=800&seed=1',
      alt: 'İstanbul şehir manzarasında profesyonel Metin Nakliyat kamyonu',
      title: 'İstanbul\'da Hızlı Nakliyat Hizmeti',
    },
    {
      src: 'https://image.pollinations.ai/prompt/movers%20carefully%20wrapping%20furniture%20with%20stretch%20film%2C%20protective%20blankets%2C%20inside%20modern%20apartment%2C%20realistic%2C%20high%20detail?width=1200&height=800&seed=2',
      alt: 'Metin Nakliyat ekibi mobilya ve eşya paketleme',
      title: 'Profesyonel Eşya Paketleme',
    },
    {
      src: 'https://image.pollinations.ai/prompt/modern%20moving%20truck%20with%20hydraulic%20lift%20at%20high-rise%20apartment%20building%20in%20Istanbul%2C%20daylight%2C%20realistic%2C%20high%20detail?width=1200&height=800&seed=3',
      alt: 'İstanbul\'da yüksek katlı binada asansörlü nakliyat',
      title: 'Asansörlü Nakliyat Çözümleri',
    },
    {
      src: 'https://image.pollinations.ai/prompt/interior%20of%20a%20clean%20and%20secure%20storage%20warehouse%20with%20wooden%20crates%20and%20labelled%20boxes%2C%20good%20lighting%2C%20realistic%2C%20high%20detail?width=1200&height=800&seed=4',
      alt: 'Modern ve güvenli eşya depolama alanı',
      title: 'Güvenli Eşya Depolama Hizmeti',
    },
    {
      src: 'https://image.pollinations.ai/prompt/two%20friendly%20movers%20shaking%20hands%20with%20a%20happy%20client%20after%20successful%20move%2C%20new%20home%20background%2C%20realistic%2C%20high%20detail?width=1200&height=800&seed=5',
      alt: 'Mutlu müşteri ve Metin Nakliyat çalışanları',
      title: 'Müşteri Memnuniyeti Odaklı Hizmet',
    },
    {
      src: 'https://image.pollinations.ai/prompt/moving%20boxes%20neatly%20stacked%20in%20a%20corridor%20of%20a%20newly%20moved%20office%2C%20office%20plants%2C%20daylight%2C%20realistic%2C%20high%20detail?width=1200&height=800&seed=6',
      alt: 'Yeni ofise taşınmış düzenli kutular ve eşyalar',
      title: 'Ofis Taşıma ve Kurulum',
    },
  ];

  return (
    <section id="galeri" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Referans Görsellerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Metin Nakliyat'ın profesyonel hizmet anlayışını yansıtan kareler.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <h3 className="text-white text-xl font-bold transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;