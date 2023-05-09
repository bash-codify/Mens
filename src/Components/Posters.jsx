'use client'
import React, { useEffect, useState} from "react";
import Image from "next/image";
import { Icon } from '@iconify/react';
import { client, urlFor } from "../../lib/client";



const Posters = () => {

  const [posdata, setPosData] = useState([]);


  const getPoster = async () => {

    try {
      const query = await client.fetch(`*[_type == "poster"]`);
      const Queryposter = await query
      setPosData(Queryposter)

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(()=>{

    getPoster();

  },[posdata])



  return (

    <section className=" w-full mt-20 ">
      <article className=" S768:w-w95 m-auto">
        
        <div className="overflow-hidden -z-50">

          {
            posdata.map((item, index)=> {

              const image = item.image;
              const title = item.Desc;
              const button = item.ButtonText

                return(
    
                  <div className= " w-full h-full bg-red-500" key={index}>
                    <div className=" w-full ">
                      <Image src={urlFor(image).url()} unoptimized={true} width={2000} height={2000} priority alt="hero banner" className=" w-full h-h90 object-cover object-center  relative" />
  
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

                  </div>
                )
              
            
            })
          }

        </div>

      </article>
      
    </section>  
 

  )
}


export default Posters