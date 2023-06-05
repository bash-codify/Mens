'use client'
import React, { useEffect, useState} from "react";
import Image from "next/image";
import { Icon } from '@iconify/react';
import Slider from "react-slick";

import './banner.css'
import { client, urlFor } from "../../../../lib/client";

const NavDotButton = [
  
  {
    icon: <Icon icon="radix-icons:dot-filled" />
  },
  {
    icon: <Icon icon="radix-icons:dot-filled" />
  },
  {
    icon: <Icon icon="radix-icons:dot-filled" />
  },
  {
    icon: <Icon icon="radix-icons:dot-filled" />
  },
  {
    icon: <Icon icon="radix-icons:dot-filled" />
  },
  {
    icon: <Icon icon="radix-icons:dot-filled" />
  },

  
];


const Banners = () => {

  const [bandata, setBanData] = useState([]);
  const [current, setCurrent] = useState(0);


const settings = {

      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows:false,
      afterChange: index =>{
      setCurrent( index)
      }

    };



  const getBanner = async () => {
    try {
      const query = await client.fetch(`*[_type == "banner"]`);
      const Querybanner = await query
      setBanData(Querybanner)

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(()=>{
    getBanner()
  },[bandata])



  return (

    <>
    <section className=" relative w-full min-h-h90">
      <article className=" S768:w-w95 m-auto">
        
        <Slider {...settings} className="overflow-hidden -z-50">

          {
            bandata.map((item, index)=> {

              const image = item.image;
              const title = item.desc;
              const button = item.button

                return(
    
                  <div className= " w-full h-full" key={index}>
                    <div className=" relative w-full h-full">
                      <Image src={urlFor(image).url()} unoptimized={true} width={2000} height={2000} priority alt="hero banner" className=" w-full h-screen object-cover object-center  relative" />
  
                      <div className=" absolute botton-2/4 left-2/4 -mt-36 -translate-x-2/4  flex flex-col items-center justify-center gap-2 uppercase w-full md:items-end md:justify-center md:pr-12 ">
                        <div className=" text-2xl font-bold text-white bg-neutral-400/30 backdrop-blur-3xl">
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

                  </div>
                )
              
            
            })
          }


        </Slider>
        <div className="  sm:w-w95 m-auto absolute bottom-0 left-0 right-0 w-full h-12 bg-gray-500/40 backdrop-blur-3xl flex items-center justify-end text-xl pr-4 overflow-x-hidden">

          <div className=" flex items-center mr-6 overflow-x-hidden">
            {
                NavDotButton.map((dotItem, index)=>{
                  
                  return(
                    <div className={`${index === current? 'text-white' : 'text-gray-600'}  cursor-pointer`} key={index}>
                      <span>
                        {dotItem.icon}
                      </span>
                      

                    </div>

                  )
                })
            }

          </div>
        </div>
      </article>
    </section>    
    </>
  )
}




export default Banners