'use client'
import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../../../lib/client';
import Image from 'next/image';

const ShopBanner = () => {
  const [bannerdata, setBannerData] = useState([]);

  const getBannerData = async () => {
    try {

      const query = await client.fetch(`*[_type == shop_banner]`)
    const dataQuery = await query;
    setBannerData(dataQuery)
    
    } catch (error) {

      console.log(error);
      
    }
    
    
  }

  useEffect(()=>{

    getBannerData();

  },[bannerdata])


  return (
    <section className=' w-full min-h-screen'>
        <article className=" S768:w-w95 m-auto">
        
        <div className="overflow-hidden -z-50">

          {
            bannerdata.map((item, index)=> {

              const image = item.image;
              const title = item.desc;
              

                return(
    
                  <div className= " w-full h-full bg-red-500" key={index}>
                    <div className=" w-full ">
                      <Image src={urlFor(image).url()} unoptimized={true} width={2000} height={2000} priority alt="hero banner" className=" w-full min-h-screen object-cover object-center  relative" />
  
                      <div className=" absolute botton-2/4 left-2/4 -mt-36 -translate-x-2/4  flex flex-col items-center justify-center gap-2 uppercase w-full md:items-end md:justify-center md:pr-12 ">
                        <div className=" text-2xl font-bold text-white">

                          <h2>

                            {title}
                            

                          </h2>

                        </div>
              
                      </div>
  
                    </div>

                  </div>
                )
              
            
            })
          }

        </div>

      </article>

    </section>
  )
}

export default ShopBanner