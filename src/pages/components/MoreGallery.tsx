import React from 'react';
import clb1Image from '../../assets/img/gallery/clb1.jpg';
import clbImage from '../../assets/img/gallery/clb.jpg';
import clb2Image from '../../assets/img/gallery/clb2.jpg';
import clb3Image from '../../assets/img/gallery/clb3.jpg';
import onamImage from '../../assets/img/gallery/onam.jpg';
import prize_disImage from '../../assets/img/gallery/prize_dis.jpg';
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import Image from "../../assets/img/madras-high-court-handsketch-watercolor-600nw-2351270087.jpg"
function MoreGallery() {
  const data = [
    {
      imgelink: clb1Image,
    },
    {
      imgelink: clb3Image,
    },
    {
      imgelink: clbImage,
    },
    {
      imgelink: clb2Image,
    },
    {
      imgelink: onamImage,
      
    },
    {
      imgelink: prize_disImage,
    },
    {
      imgelink: clb1Image,
    },
    {
      imgelink: clb3Image,
    },
    {
      imgelink: clbImage,
    },
    {
      imgelink: clb2Image,
    },
    {
      imgelink: onamImage,
    },
    {
      imgelink: prize_disImage,
    },
  ];

  const [active, setActive] = React.useState(clb3Image);

  return (
    <>
    <div className='absolute mt-5 ml-10'>
      <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="#" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">Gallery</Breadcrumb.Item>
      </Breadcrumb>
    </div>
      <div  className="grid  py-10 min-h-screen place-items-center w-screen overflow-x-hidden relative">
        {/* header  */}
    
        <div className="section-title grid justify-center">
          {/* title  */}
          <h2 className="text-2xl font-bold">Gallery</h2>
          {/* search  */}
    
          <form className=' w-[350px] focus-within:ring-2 ring-sky-400 h-min bg-slate-300 grid grid-cols-[1fr,1rem] rounded-full pr-5'>
              {/* serch input  */}
              <input className="focus:outline-none bg-transparent w-full py-3 pr-3 pl-5 text-sm" placeholder="Search Mockups, Logos..." required />
              {/* serch button  */}
              <button type='submit'>
                <div className="">
                  <svg className="w-4 h-4 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
              </button>
          </form>
        
        </div>

        {/* active image  */}
        <div className='flex justify-center xl:w-full'>
          <img
            className="h-[70%] xl:h-auto xl:w-[50%] w-[90%] rounded-lg object-cover object-center md:h-[480px]"
            src={active}
            alt=""
          />
        </div>

        {/* images slider  */}
        <div className="lg:absolute top-32 right-0 lg:grid-flow-row grid grid-flow-col auto-cols-max gap-3 pl-5 xl:pl-20 overflow-auto w-screen max-h-[80%]">
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
        
</div>        

    
    </>
  );
}

export default MoreGallery;
