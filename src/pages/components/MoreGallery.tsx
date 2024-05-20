import React, { useState } from 'react';
import clb1Image from '../../assets/img/gallery/clb1.jpg';
import clbImage from '../../assets/img/gallery/clb.jpg';
import clb2Image from '../../assets/img/gallery/clb2.jpg';
import clb3Image from '../../assets/img/gallery/clb3.jpg';
import onamImage from '../../assets/img/gallery/onam.jpg';
import prize_disImage from '../../assets/img/gallery/prize_dis.jpg';
import { useCycle, motion } from 'framer-motion';
import HamburgerIcon from './Hamburger';
import MoreGalleryNavItem from "./MoreGalleryNavItem"

interface Link {
  text: string;
  subCategory?: { text: string }[];
}

const MoreGallery: React.FC = () => {
  const data = [
    { imgelink: clb1Image },
    { imgelink: clb3Image },
    { imgelink: clbImage },
    { imgelink: clb2Image },
    { imgelink: onamImage },
    { imgelink: prize_disImage },
    { imgelink: clb1Image },
    { imgelink: clb3Image },
    { imgelink: clbImage },
    { imgelink: clb2Image },
    { imgelink: onamImage },
    { imgelink: prize_disImage },
  ];

  const [active, setActive] = useState<string>(clb3Image);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const navLinks: Link[] = [
    {
      text: 'All',
      subCategory: [
        { text: 'Latest' },
        { text: 'Old' },
      ],
    },
    { text: 'New Photos' },
    { text: 'Old Photos' },
  ];

  return (
    <>
      <div className="grid py-10 min-h-screen place-items-center w-screen overflow-x-hidden relative">
        {/* Hamburger */}
        <div className="fixed top-10 right-10 z-50">
          <HamburgerIcon bg={`${isOpen ? 'white' : 'black'}`} className="z-50 lg:hidden" isOpen={isOpen} toggleOpen={toggleOpen} />
        </div>

        {/* Header */}
        <div className="section-title grid justify-center">
          {/* Title */}
          <h2 className="text-2xl font-bold">Gallery</h2>
          {/* Search */}
          <form className="w-[350px] focus-within:ring-2 ring-sky-400 h-min bg-slate-300 grid grid-cols-[1fr,1rem] rounded-full pr-5">
            {/* Search input */}
            <input className="focus:outline-none bg-transparent w-full py-3 pr-3 pl-5 text-sm" placeholder="Search Mockups, Logos..." required />
            {/* Search button */}
            <button type="submit">
              <div>
                <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
            </button>
          </form>
        </div>

        {/* Category */}
        <div className="w-full text-center uppercase font-semibold text-2xl">{activeCategory}</div>

        {/* Active image */}
        <div className="flex justify-center xl:w-full z-[48]">
          <img
            className="h-[70%] xl:h-auto xl:w-[50%] w-[90%] rounded-lg object-cover object-center md:h-[480px]"
            src={active}
            alt=""
          />
        </div>

        {/* Images slider */}
        <div className="z-[48] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-5 xl:right-10 lg:px-5 w-screen lg:w-fit lg:grid-flow-row grid grid-flow-col auto-cols-max gap-3 pl-5 xl:pl-20 overflow-auto max-h-[80%]">
          {data.map(({ imgelink }, index) => (
            <div key={index}>
              <img
                onClick={() => setActive(imgelink)}
                src={imgelink}
                className="h-20 xl:h-28 max-w-full cursor-pointer rounded-lg object-cover object-center"
                alt="gallery-image"
              />
            </div>
          ))}
        </div>

        {/* Backdrop + mobile menu */}
        <motion.div
          animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`${isOpen ? 'pointer-events-auto' : 'pointer-events-none'} fixed w-screen h-screen bg-[#3088bae5] top-0 left-0 p-3 lg:hidden z-[49]`}
        >
          {/* White container */}
          <motion.div
            animate={
              isOpen
                ? { opacity: 1, y: '0%', transition: { duration: 0.2 } }
                : { opacity: 0, y: '100%', transition: { duration: 0.2 } }
            }
            className="bg-white w-full h-[85%] mt-20 rounded-md py-5 md:py-10 lg:bg-transparent"
          >
            {/* Links */}
            <div className="grid">
              {navLinks.map((link) => (
                <MoreGalleryNavItem key={link.text} link={link} toggleOpen={toggleOpen} setActiveCategory={setActiveCategory} />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Desktop menu */}
        <div className='hidden fixed top-1/2 -translate-y-1/2 lg:left-3 lg:w-[150px] xl:left-10 xl:w-[300px] rounded-md lg:grid gap-2 z-[48]'>
          {
            navLinks.map((link) => (
              <MoreGalleryNavItem key={link.text} link={link} toggleOpen={toggleOpen} setActiveCategory={setActiveCategory} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default MoreGallery;
