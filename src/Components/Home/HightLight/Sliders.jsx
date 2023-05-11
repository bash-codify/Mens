import React from 'react';
import Slider from "react-slick";
import { Icon } from '@iconify/react';

import Image from 'next/image';
import { urlFor } from '../../../../lib/client';


const Sliders = ({item}) => {

   
  return (
    <div>
        
        <div className='mr-1' >

            <div className=' bg-neutral-200/95 w-full h-72 S600:h-80 S700:h-96 S960:h-h21 S1024:h-h19 S1200:h-96 flex item-center justify-center' >

                <Image src={urlFor(item.image).url()} unoptimized={true} width={2000} height={2000} priority alt="hero banner" className=" w-32 object-contain hover:scale-110 S960:hover:scale-125 transition-all duration-500 ease-linear cursor-pointer" />

            </div>

            <div className=' pt-4'>
                <h2 className=' font-bold'>
                    {item.name}
                </h2>
                <p className=' flex items-center gap-1 text-xs font-medium'>
                    <span><Icon icon="mdi:naira" /></span>{item.price}
                </p>
            </div>
        </div>   


    </div>
  );
}


export default Sliders