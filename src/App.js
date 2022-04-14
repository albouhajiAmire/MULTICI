import './assets/css/general.css'
import './assets/css/style.css'
import Header from './webOffice/components/header/Header';
import Hero from './webOffice/components/hero/Hero';
import Footer from './webOffice/components/footer/Footer';
import Whyus from './webOffice/components/whyUs/Whyus';
import Testimonials from './webOffice/components/testimonials/Testimonials';
import Contact from './webOffice/components/contact/Contact';
import About from './webOffice/components/about/About';
import Cta from './webOffice/cta/Cta';
import Service from './webOffice/components/service/Service';
import Feature from './webOffice/components/features/Feature';
import Count from './webOffice/components/count/Count';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Whyus/>
      <Cta/>
      <Feature/>
      <Count/>
      <Service/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
