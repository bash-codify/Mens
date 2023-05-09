'use client'
import React, { useEffect, useState} from "react";
import Image from "next/image";
import { Icon } from '@iconify/react';
import { client, urlFor } from "../../lib/client";



const Flyers = () => {

  const [flydata, setFlyData] = useState([]);


  const getFlyer = async () => {

    try {

      const query = await client.fetch(`*[_type == "for_him"]`);
      const Queryflyer = await query;
      console.log(Queryflyer);
     setFlyData(Queryflyer)


    } catch (error) {
      console.log(error);
    }

  }

  useEffect(()=>{

    getFlyer();

  },[flydata])


  console.log(flydata);



  return (

    <section className=" w-full mt-20 ">
      <article className=" S768:w-w95 m-auto">
        
        <div className="grid grid-cols-2 items-center justify-center">

          <div>
            {
            flydata.map((item, index)=> {

              const image = item.image;
              const title = item.Desc;
              const button = item.ButtonText

              if(index === 0){

              return(
  
                <div className= " w-full h-full bg-red-500" key={index}>
              
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
              )

              }
              
            
            })
          }

          </div>

          <div>

            {
            flydata.splice(1, 4).map((item, index)=> {

              const image = item.image;
              const title = item.Desc;
              const button = item.ButtonText

              return(
  
                <div className= " w-full h-full bg-red-500" key={index}>
              
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
              )   
            
            })
          }
          </div>

        </div>

      </article>
      
    </section>  
 

  )
}


export default Flyers