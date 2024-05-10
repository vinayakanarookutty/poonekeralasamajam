import { useState, useEffect } from 'react';
import "../../css/home.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        id="header"
        style={{height:"105px"}}
        className={`fixed top-0 w-screen ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}
      >
        <div className="container flex align-items-center justify-content-between position-relative lg:px-32 ">
          <div className="logo flex gap-2  ">

              <img  style={{height:"200px",width:"100px" ,marginTop:"2%",maxWidth:"30%",maxHeight:"70px"}} src="/src/assets/img/pks_logo.png" alt="" className="heading-img pt-[200px]  " />
           
            <h3 className="text-white ml-5 mt-[20px] heading  ">Poona Keraleeya Samaj</h3>
          </div>
          <nav id="navbar" className="navbar mt-2">
            <ul>
              <li><a className="nav-link scrollto  text-white" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto  text-white" href="#history">History</a></li>
              <li><a className="nav-link scrollto  text-white" href="#services">Activities</a></li>
              <li><a className="nav-link scrollto  text-white" href="#portfolio">Gallery</a></li>
              <li><a className="nav-link scrollto  text-white" href="#testimonials">PKS Committee</a></li>
              <li><a className="nav-link scrollto  text-white" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
