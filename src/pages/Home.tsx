import '../css/home.css';
// import Hero from '../components/Welcome';
import About from '../components/History';
import Services from '../components/Activities';
import Portfolio from '../components/Gallery';
import Testimonials from '../components/Committee';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import NewHeader from '../components/NewHeader';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Heros from '../components/Welcome';
import Welcome from '../components/Welcome';


function Home() {
  return (
    <>
      {/* <Header /> */}
      <Header/>
      {/* <NewHeader /> */}
     <Welcome/>
     
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      
    </>
  );
}

export default Home;
