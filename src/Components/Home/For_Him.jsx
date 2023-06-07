'use client'
import React, { useEffect, useState} from "react";
import Image from "next/image";
import { Icon } from '@iconify/react';
import Slider from "react-slick";
import { client, urlFor } from "../../../lib/client";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import {motion} from 'framer-motion'



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
      arrows: false,

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

    <section className=" w-full bg-white py-32">
      <article className=" S768:w-[95%] m-auto">
        
        <div className="grid S960:grid-cols-2 place-items-center items-center gap-10">

          <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{scale: 1, opacity: 1 }} 
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 3,}}
          className=" w-full">
            {
            flydata.map((item, index)=> {

              const image = item.image;
              const title = item.Desc;
              const button = item.button

              if(index === flydata.length - 1){

              return(
  
                <div className= " w-full h-full relative" key={index}>
              
                    <Image src={urlFor(image).url()} unoptimized={true} width={2000} height={2000} priority alt="hero banner" className="  w-full h-full object-cover object-center  " />

                    <div className=" absolute botton-0 left-0 -mt-64 flex flex-col items-center justify-center gap-2 uppercase w-full ">

                      <div className=" text-[2.4rem] S500:text-[3rem] font-bold text-white">

                        <h2>

                          {title}

                        </h2>

                      </div>
                      <div className=" bg-white w-96 h-20 text-[3rem] flex items-center justify-center font-semibold border border-gray-500 cursor-pointer">
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

          </motion.div>

          <motion.div
          initial={{ scale: 1.6, opacity: 1 }}
          whileInView={{scale: 1, opacity: 1 }} 
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 3,}} >

            <Slider {...settings} className=" w-[32rem] flex items-center justify-center z-10">

              {
              flydata.splice(0, 4).map((item, index) => {

                const image = item.image;
                const title = item.Desc;
                const price = item.price;

                return(
    
                <div 
                key={index} >

                  <div className=' bg-neutral-200/95 w-[32rem]  h-[60vh] S600:h-[65vh] S960:h-[70vh] flex item-center justify-center' >

                      <Image src={urlFor(image).url()} unoptimized={true} width={2000} height={2000} priority alt="hero banner" className=" w-72 object-contain cursor-pointer z-50" />

                  </div>

                  <div className='flex flex-col items-center justify-center pt-4'>
                      <h2 className=' text-[3rem] font-semibold'>
                          {title}
                      </h2>
                      <p className=' flex items-center gap-1 text-[2rem] font-medium '>
                          <span><Icon icon="mdi:naira" /></span>{price}
                      </p>
                  </div>
                </div>  
                )   
              
              })
            }

            </Slider>
          </motion.div>


        </div>

      </article>
      
    </section>  
 

  )
}


export default For_Him