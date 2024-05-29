import React,{useEffect} from 'react';
import clb1Image from '../assets/img/gallery/clb1.jpg';
import clbImage from '../assets/img/gallery/clb.jpg';
import clb2Image from '../assets/img/gallery/clb2.jpg';
import clb3Image from '../assets/img/gallery/clb3.jpg';
import onamImage from '../assets/img/gallery/onam.jpg';
import prize_disImage from '../assets/img/gallery/prize_dis.jpg';
import BreadCrump from './ui/BreadCrump';
// import Image from "../../assets/img/madras-high-court-handsketch-watercolor-600nw-2351270087.jpg"
function MoreGallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    <div className="flex justify-start mt-5" style={{paddingLeft : "4.5%"}} >
      <BreadCrump items={["Gallery","More-Gallery"]} />
    </div>
    <div className='absolute mt-5 ml-10'>
    </div>
      <div  className="grid  py-10 min-h-screen place-items-center w-screen overflow-x-hidden relative">
        {/* header  */}
    
        <div className="section-title grid justify-center">
          {/* title  */}
          <h2 className="text-2xl font-bold">Gallery</h2>
          {/* search  */}
    
         
        
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
        <div className="lg:absolute top-32 right-0 lg:grid-flow-row grid grid-flow-col auto-cols-max gap-3 pl-5 xl:pl-20 overflow-auto w-screen max-h-[80%] ">
          {data.map(({ imgelink }, index) => (
            <div key={index}>
              <img
                onClick={() => setActive(imgelink)}
                src={imgelink}
                className="h-20 xl:h-28 max-w-full cursor-pointer rounded-lg object-cover object-center mb-8"
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
