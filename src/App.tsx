import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BolgelerBanner from './components/BolgelerBanner';
import HizmetBolgeleri from './components/HizmetBolgeleri'; 

// Sayfa Bileşenleri
import IlIlceSayfasi from './pages/il-ilce';
import EvTasimaSayfasi from './pages/EvTasimaSayfasi';
import Blog from './pages/Blog';
import BlogDetay from './pages/BlogDetay';
import SiteHaritasi from './pages/SiteHaritasi';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        
        <main>
          <Routes>
            {/* 1. ANA SAYFA */}
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <About />
                <BolgelerBanner /> 
                <Contact />
              </>
            } />

            {/* 2. HİZMET BÖLGELERİ LİSTESİ */}
            <Route path="/hizmet-bolgelerimiz" element={<HizmetBolgeleri />} />

            {/* 3. BLOG SİSTEMİ */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetay />} />
            
            {/* 4. SİTE HARİTASI (SEO) */}
            <Route path="/site-haritasi" element={<SiteHaritasi />} />

            {/* 5. NAKLİYAT SAYFALARI (İl-İlçe ve Mahalle Destekli) */}
            <Route path="/:il/:ilce" element={<IlIlceSayfasi />} />
            <Route path="/:il/:ilce/:mahalle" element={<IlIlceSayfasi />} />

            {/* 6. EV TAŞIMA SAYFALARI (İl-İlçe ve Mahalle Destekli) */}
            <Route path="/ev-tasima/:il/:ilce" element={<EvTasimaSayfasi />} />
            <Route path="/ev-tasima/:il/:ilce/:mahalle" element={<EvTasimaSayfasi />} />

            {/* Hatalı URL Girilirse Ana Sayfaya Dön */}
            <Route path="*" element={
              <div style={{ padding: '150px', textAlign: 'center' }}>
                <h2>Sayfa Bulunamadı</h2>
                <a href="/">Ana Sayfaya Dön</a>
              </div>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;