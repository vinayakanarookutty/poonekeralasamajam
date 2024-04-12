import React from 'react'
import "../css/home.css"
import { motion } from "framer-motion";
function Home() {
  return (
    <>
      <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    ></motion.div>
  <header id="header" className="fixed-top header-transparent">  
    <div className="container flex align-items-center justify-content-between position-relative">

      <div className="logo">
        <h1 className="text-light"><a href="index.html">Poona Keraleeya Samaj</a></h1>
        <a href="index.html">
          <img src="../assets/img/pks_logo.jpg" alt="" className="img-fluid"/></a>
      </div>
      <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      
    </motion.div>
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

  <section id="hero">
    <div className="hero-container" data-aos="fade-up">
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
        <h1>Welcome to PKS</h1>
      <h2>Where Pune Meets Kerala : Poona Keraleeya Samaj </h2>
      <a href="#about" className="btn-get-started scrollto"><i className="bx bx-chevrons-down"></i></a>
    </motion.div>
    </div>
  </section>
  </> 



 


  );
}

export default Home