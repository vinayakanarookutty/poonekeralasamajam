import React from "react";
import { motion, useCycle } from "framer-motion";
import { useState } from "react";
interface Link {
  text: string;
  subCategory?: { text: string }[];
}

interface MoreGalleryNavItemProps {
  toggleOpen: () => void;
  setActiveCategory: (category: string) => void;
  link: Link;
}

const MoreGalleryNavItem: React.FC<MoreGalleryNavItemProps> = ({
  toggleOpen,
  setActiveCategory,
  link,
}) => {

  const [isSubCategoryOpen, toggleSubCatOpen] = useCycle(false , true);

  const varients = {

    open : {
      opacity : 1,
      height : "auto",
    }
    ,
    closed : {
      opacity : 0,
      height : 0,
    }

  }

  const iconVarient = {

    open : {
      rotate : 180,
    }
    ,
    closed : {
      rotate : 0,
    }

  }

  return (
    <>
      <motion.div
        key={link.text}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between font-semibold hover:text-sky-400 p-4 hover:bg-[#0000001a] w-full rounded-xl"
      >
        <div
          className="cursor-pointer "
          onClick={() => {
            toggleOpen();
            setActiveCategory(link.text);
          }}
        >
          {link.text}
        </div>
        <motion.div variants={iconVarient} animate={isSubCategoryOpen ? 'open' : 'closed'}  onClick={()=>toggleSubCatOpen()}><img src="/down-arrow.svg" alt="down-arrow" className={ link.subCategory ? 'w-10 cursor-pointer' : 'hidden'} /></motion.div>
      </motion.div>
      {/* subcategory */}
      <motion.div variants={varients} animate={isSubCategoryOpen ? 'open' : 'closed'}  className="grid bg-gray-400 overflow-hidden">
        {link.subCategory &&
          link.subCategory.map((sub) => (
            <div onClick={()=>{
              toggleOpen();
              toggleSubCatOpen();
              setActiveCategory(`${link.text}/${sub.text}`);
            }} key={sub.text} className="text-sm px-10 py-3 cursor-pointer">
              {sub.text}
            </div>
          ))}
      </motion.div>
    </>
  );
};

export default MoreGalleryNavItem;
