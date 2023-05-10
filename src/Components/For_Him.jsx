'use client'
import React, { useEffect, useState} from "react";
import Image from "next/image";
import { Icon } from '@iconify/react';
import { client, urlFor } from "../../lib/client";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";



const For_Him = () => {

  const [flydata, setFlyData] = useState([]);


  const settings = {

      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      // nextArrow: <NextArrow/>,
      // prevArrow: <PrevArrow/>,

    };


  const getFlyer = async () => {

    try {

      const query = await client.fetch(`*[_type == "for_him"]`);
      const Queryflyer = await query;
   
     setFlyData(Queryflyer)


    } catch (error) {
      console.log(error);
    }

  }

  useEffect(()=>{

    getFlyer();

  },[flydata])


  return (

    <section className=" w-full mt-20">
      <article className=" S768:w-w95 m-auto">
        
        <div className="grid S960:grid-cols-2 place-items-center gap-10">

          <div>
            {
            flydata.map((item, index)=> {

              const image = item.image;
              const title = item.Desc;
              const button = item.button

              if(index === flydata.length - 1){

              return(
  
                <div className= " w-full h-full bg-red-500" key={index}>
              
                    <Image src={urlFor(image).url()} unoptimized={true} width={2000} height={2000} priority alt="hero banner" className=" w-full h-fit object-cover object-center  relative" />

                    <div className=" absolute botton-2/4 left-2/4 -mt-36 -translate-x-2/4  flex flex-col items-center justify-center gap-2 uppercase w-full md:items-end md:justify-center md:pr-12 ">
                      <div className=" text-2xl font-bold text-white">

                        <h2>

                          {title}

                        </h2>

                      </div>
                      <div className=" bg-white w-52 h-12 flex items-center justify-center font-semibold border border-gray-500 cursor-pointer">
                        <button type="button">
                          {button}
                        </button>
                      </div>
                    </div>

                </div>
              )

              }
              
            
            })
          }

          </div>

          <div >

            {
            flydata.splice(0, 4).map((item, index)=> {

              const image = item.image;
              const title = item.Desc;
              const price = item.price;

              return(
  
              <div key={index} >

                <div className=' bg-neutral-200/95 w-80 h-96 S600:h-80 S700:h-96 S960:h-h21 S1024:h-h19 S1200:h-96 flex item-center justify-center' >

                    <Image src={urlFor(image).url()} unoptimized={true} width={2000} height={2000} priority alt="hero banner" className=" w-60 object-contain cursor-pointer" />

                </div>

                <div className='flex flex-col items-center justify-center pt-4'>
                    <h2 className=' font-bold text-2xl'>
                        {title}
                    </h2>
                    <p className=' flex items-center gap-1 text-[.8rem] font-normal'>
                        <span><Icon icon="mdi:naira" /></span>{price}
                    </p>
                </div>
              </div>  
              )   
            
            })
          }

          </div>

        </div>

      </article>
      
    </section>  
 

  )
}


export default For_Him