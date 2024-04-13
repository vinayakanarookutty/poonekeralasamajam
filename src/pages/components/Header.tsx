import React from 'react';


function Header() {
  return (
    <header id="header" className="fixed-top header-transparent">
      <div className="container flex align-items-center justify-content-between position-relative">
        <div className="logo">
          <h1 className="text-light"><a href="index.html">Poona Keraleeya Samaj</a></h1>
          <a href="index.html">
            <img src="/src/assets/img/pks_logo.png" alt="" className="img-fluid" />
          </a>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">History</a></li>
            <li><a className="nav-link scrollto" href="#services">Activities</a></li>
            <li><a className="nav-link scrollto" href="#portfolio">Gallery</a></li>
            <li><a className="nav-link scrollto" href="#testimonials">PKS Committee</a></li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;
