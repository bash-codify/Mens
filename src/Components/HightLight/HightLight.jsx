"use client"
import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Icon } from '@iconify/react';
import { client, urlFor } from '../../../lib/client';
import Image from 'next/image';

import '../HightLight/style.css'
import Sliders from './Sliders';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

const HightLight = () => {

    const [data, setData] = useState([]);
    const [selectindex, setSelectIndex] = useState(0);


   const settings = {
   
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
    //   nextArrow: <NextArrow/>,
    //   prevArrow: <PrevArrow/>,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1367,
          settings: {
            slidesToShow: 3,

        
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
           
            infinite: true,
        
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
         
           
          }
        },

      ],
        afterChange: index =>{
        setSelectIndex( index)
      }
    };



    const getHightlight = async () => {

        try {
            const query = await client.fetch(`*[_type == "highlight"]`);
            const data = await query;
            setData(data)
        
        } catch (error) {

            console.log(error);
        }
    }

    useEffect(()=>{

        getHightlight()

    },[data])
    

  return (
    <section className=' w-full -z-50'>
        <article className=' w-w95 m-auto pt-20 relative'>
            <div >
                <div className=' absolute -mt-4'>
                    <h1 className=' text-2xl S700:text-3xl S960:text-4xl text-black/90 font-bold z-50'>
                        HIGHLIGHTS
                    </h1>
                </div>
                <div className=' relative wrapper'>
                    <div className=' -z-50'>
                        <div className=' S960:flex items-center  gap-10 -z-50'>
                            <div className=' flex item-center justify-center bg-neutral-200/95 w-full S960:h-h26 h-h26 S600:h-h30 S700:h-h33 S1024:h-h21 S1200:h-h30'>
                                {
                                    selectindex?
                                    <Image src={`${urlFor(data[selectindex].image).url()}`} unoptimized={true} width={2000} height={2000} priority alt="hero banner" className=" w-80 object-contain hover:scale-110 S960:hover:scale-125 transition-all duration-500 ease-linear cursor-pointer" />    
                                    
                                    :
                                   data.map((item, index)=>{

                                    if(index === 0){

                                        return (

                                            <div className='flex item-center justify-center ' key={index}>
                                                
                                                <Image src={urlFor(item.image).url()} unoptimized={true} width={2000} height={2000} priority alt="hero banner" className=" w-80 object-contain hover:scale-110 S960:hover:scale-125 transition-all duration-500 ease-linear cursor-pointer" />
                                            </div>
    
                                        )
                                    }


                                   })
                                }
                            </div>
                            <div className=' w-40'>
                                <div className=' font-bold text-xl'>
                                {
                                    selectindex? data[selectindex].name 
                                    : 
                                    data.map((item, index)=>{

                                    if(index === 0){

                                        return (

                                            <div key={index}>
                                                <h1>
                                                    {item.name}
                                                </h1>

                                            </div>
    
                                        )
                                    }


                                   })

                                }
                                </div>
                                <div className=' flex items-center font-semibold text-sm'>
                                    <span><Icon icon="mdi:naira" /></span>
                                {
                                    selectindex? data[selectindex].price 
                                    : 
                                    data.map((item, index)=>{

                                    if(index === 0){

                                        return (

                                            <div key={index}>
                                                <p>
                                                    {item.price}
                                                </p>

                                            </div>
    
                                        )
                                    }


                                   })

                                }
                                </div>
                            </div>

                        </div>

                    </div>

                    <div>

                        {/* <NextArrow/> */}

                        <Slider {...settings} >
                            
                            {
                                data.map((item, index) => {

                                    return (
                                        <Sliders item={item} key={index} />

                                    )
                                })
                            }
                        </Slider>
                      



                    </div>
                </div>
                
            </div>
        </article>
    </section>
  )
}

export default HightLight