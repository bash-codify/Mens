import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { urlFor } from '../../../../lib/client';;

const Sliders = ({item}) => {

   
  return (
    <div>
        
        <div className=' mr-1'>

            <div className=' bg-neutral-200/95 w-full h-[30rem] S600:h-[55vh] S700:h-[60vh] S960:h-[52vh] S1200:h-[55vh] flex item-center justify-center' >

                <Image src={urlFor(item.image).url()} unoptimized={true} width={2000} height={2000} priority alt="hero banner" className=" w-40 object-contain hover:scale-110 S960:hover:scale-125 transition-all duration-500 ease-linear cursor-pointer" />

            </div>

            <div className=' pt-4'>
                <h2 className=' text-[2.2rem] font-semibold'>
                    {item.name}
                </h2>
                <p className=' flex items-center gap-1 text-[1.6rem] font-medium'>
                    <span><Icon icon="mdi:naira" /></span>{item.price}
                </p>
            </div>
        </div>   

    </div>
  );
}


export default Sliders