"use client"
import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import { Icon } from '@iconify/react';
import Image from 'next/image';
import '../HightLight/style.css';
import Sliders from './Sliders';
import { client, urlFor } from '../../../../lib/client';
import { motion } from "framer-motion"


const HightLight = () => {

    const [data, setData] = useState([]);
    const [selectindex, setSelectIndex] = useState(0);


   const settings = {
   
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 1,
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
    <section className=' w-full mt-16 -z-50'>
        <article className=' w-w95 m-auto pt-20 relative'>
            <div className=' flex items-center justify-center' >
                <motion.div
                initial={{ scale:0, opacity: 0 }}
                whileInView={{scale: 1, opacity: 1 }} 
                transition={{ duration: 4,}} 
                className=' absolute top-0 left-0 mt-10'>
                    <h1 className=' text-[3rem] S700:text-[3.4rem] S960:text-[3.6rem] text-black/90 font-bold z-50 tracking-widest'>
                        HIGHLIGHTS
                    </h1>
                </motion.div>
                <div className=' relative wrapper'>
                    <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{x: "0%", opacity: 1 }} 
                    transition={{ delay: 1, duration: 5,}}
                    className=' -z-50'>
                        <div className=' S960:flex items-center gap-10 -z-50'>
                            <div className=' flex item-center justify-center bg-neutral-200/95 w-full h-[60vh] S500:h-[65vh] S600:h-[80vh] S700:h-[90vh] S960:h-[63vh] S960:w-[90vw] S1200:h-[68vh]'>
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

                            <div className=' w-full'>
                                <div className='   font-bold text-[3rem] S960:text-[2rem]'>
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
                                <div className=' flex items-center font-medium text-[2rem] S960:text-[1.6rem]'>
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

                    </motion.div>

                    <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{scale: 1, opacity: 1 }} 
                    transition={{ duration: 2,}}>

                

                        <Slider {...settings} >
                            
                            {
                                data.map((item, index) => {

                                    return (
                                        <Sliders item={item} key={index} />

                                    )
                                })
                            }
                        </Slider>
                      



                    </motion.div>
                </div>
                
            </div>
        </article>

    </section>
  )
}

export default HightLight