import React from 'react';
import clb1Image from '../../assets/img/gallery/clb1.jpg';
import clbImage from '../../assets/img/gallery/clb.jpg';
import clb2Image from '../../assets/img/gallery/clb2.jpg';
import clb3Image from '../../assets/img/gallery/clb3.jpg';
import onamImage from '../../assets/img/gallery/onam.jpg';
import prize_disImage from '../../assets/img/gallery/prize_dis.jpg';

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
      <div className="grid  mt-4 h-auto">
        <div className="section-title flex">
      
          <h2 className="text-2xl font-bold">Gallery</h2>
          <form className="max-w-md mx-auto">   
    <label  className="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
        </div>
        <div>
          <img
            className="h-[70%] w-[90%] ml-16 max-w-full rounded-lg object-cover object-center md:h-[480px]"
            src={active}
            alt=""
          />
        </div>
        <div className="grid mt-5 mb-5 grid-flow-col auto-cols-max gap-4 w-[95%] ml-10 overflow-x-auto scroll-m-0 scroll-smooth">
          {data.map(({ imgelink }, index) => (
            <div key={index}>
              <img
                onClick={() => setActive(imgelink)}
                src={imgelink}
                className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
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
