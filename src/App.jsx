import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import ServicesSection from './components/ServicesSection';
import AboutUs from './components/AboutUs';
import OurWorks from './components/OurWorks';
import Team from './components/Team';
import BusinessStats from './components/BusinessStats';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="min-h-screen relative">
      <Navbar className="fixed top-0 w-full" /> 
      <Hero className="bg-cover bg-center" />
      <ProductSection />
      <ServicesSection />
      <AboutUs />
      <OurWorks />
      <Team />
      <BusinessStats />
      <Pricing />
       <Testimonial />
      <Contact />
       <Footer /> 
    </div>
      

  )
}

export default App

