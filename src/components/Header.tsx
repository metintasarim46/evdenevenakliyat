import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Hakkımızda', href: '/#hakkimizda' },
    { name: 'Hizmetlerimiz', href: '/#hizmetlerimiz' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/#iletisim' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:05432107058" className="flex items-center gap-2 hover:text-secondary transition">
              <Phone size={16} />
              <span>0543 210 70 58</span>
            </a>
            <div className="hidden md:flex items-center gap-2">
              <MapPin size={16} />
              <span>Başakşehir / İstanbul - 7/24 Hizmetinizdeyiz</span>
            </div>
          </div>
          <a 
            href="https://wa.me/905432107058" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded text-white transition font-medium"
          >
            WhatsApp İletişim
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              Metin <span className="text-secondary">Nakliyat</span>
            </h1>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition font-medium text-lg"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#teklif-al" 
                className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-xl"
              >
                Hemen Teklif Al
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <ul className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-700 hover:text-primary transition font-medium block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#teklif-al" 
                  className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hemen Teklif Al
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
