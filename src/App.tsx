import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IlIlceSayfasi from './pages/il-ilce';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Yeni sayfamızı en üste ekliyoruz */}
        
        
        {/* Eski bileşenler altında görünmeye devam edecek */}
        <Hero />
        <Services />
        <About />
        <IlIlceSayfasi />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;