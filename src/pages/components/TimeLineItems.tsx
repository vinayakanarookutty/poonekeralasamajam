import React from 'react';

interface TimeLineItemProps {
    image: string;
    date: string;
    title: string;
    desc: string;
}


const TimeLineItem: React.FC<TimeLineItemProps> = ({ image, date, title, desc }) => {
    return (
        <div className='grid place-items-center relative mt-4  '>
            {/* <div className='h-2 w-full pl-10 bg-[#3b82f6] absolute z-[-1]'></div> */}
            <div className='w-[300px] md:w-[300px] lg:w-[400px] xl:w-[700px] overflow-hidden rounded'>
                <img className='object-cover w-full rounded ' src={image} alt="Timeline Item" />
            </div>

            <div className='mt-4'>
                <h2 className='font-black lg:text-xl'>{title}</h2>
                <h3 className='font-semibold'>{date}</h3>
                <p className='text-sm'>{desc}</p>
            </div>
        </div>
    );
};

export default TimeLineItem;