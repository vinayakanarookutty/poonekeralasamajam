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
        style={{height:"70px"}}
        className={`fixed-top ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}
      >
        <div className="container flex align-items-center justify-content-between position-relative ">
          <div className="logo flex gap-4">
            <a>
              <img src="/src/assets/img/pks_logo.png" alt="" className="img-fluid" />
            </a>
            <h1 className="text-light ml-5 mt-2  ">Poona Keraleeya Samaj</h1>
          </div>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active text-white" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto  text-white" href="#about">History</a></li>
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
