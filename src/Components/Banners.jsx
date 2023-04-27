'use client'
import React, { useEffect, useState, useRef} from "react";
import { client, urlFor } from "../../lib/client";
import Image from "next/image";
import { Icon } from '@iconify/react';

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


  // const slideIndex = (index)=>{
  //   if(index === current){
  //     return setCuurent(index)
  //   }

  //   setCuurent(index)

  // }



  const getBanner = async () => {
    const query = await client.fetch(`*[_type == "banner"]`);
    const Querybanner = await query
    setBanData(Querybanner)

  }

  useEffect(()=>{
    
    getBanner()

  }, [bandata])

  useEffect(()=>{
    
      if(current > bandata.length - 1){
        setCurrent(0)
      }

  }, [current, bandata])

  useEffect(()=>{
    
    setTimeout(()=>{
      
      setCurrent(current + 1)

    },3000)

  }, [current])


  return (
    <>
    <section className=" w-full min-h-h90">
      <article className=" sm:w-w95 m-auto">
        
        <div className=" relative w-full h-full flex items-center justify-center">

          {
            bandata.map((item, index)=> {

              const image = item.image;
              const title = item.Desc;
              const button = item.ButtonText
              
              if(index === current){

                return(
    
                  <div className=" w-full h-full flex items-center justify-center" key={index}>
                    <div className=" relative w-full h-full">
                      <Image src={urlFor(image).url()} unoptimized={true} width={2000} height={2000}  alt="hero banner" className=" w-full h-screen object-cover object-center  relative" />
  
                      <div className=" absolute botton-2/4 left-2/4 -mt-36 -translate-x-2/4  flex flex-col items-center justify-center gap-2 uppercase w-full">
                        <div className=" text-2xl font-bold text-white bg-gray-500/40 backdrop-blur-3xl">
                          <h2>
                            {title}
                          </h2>
                        </div>
                        <div className=" bg-white w-52 h-12 flex items-center justify-center font-semibold border border-gray-500">
                          <button type="button">
                            {button}
                          </button>
                        </div>
                      </div>
  
                    </div>

                    <div className=" absolute bottom-0 w-full h-12 bg-gray-500/40 backdrop-blur-3xl flex items-center justify-end text-xl pr-4">
                      {
                          NavDotButton.map((dotItem, index)=>{
                            
                            return(
                              <div className={`${index === current? 'text-white' : 'text-gray-600'} cursor-pointer`} key={index} onClick={()=> setCurrent(index)}>
                                <span>
                                  {dotItem.icon}
                                </span>
                                
                
                              </div>

                            )
                          })
                      }
                    </div>

                  </div>
                )
              }
            
            })
          }

        </div>
      </article>
    </section>    
    </>
  )
}




export default Banners