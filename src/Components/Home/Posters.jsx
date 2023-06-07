'use client'
import React, { useEffect, useState} from "react";
import Image from "next/image";
import { client, urlFor } from "../../../lib/client";
import { motion } from "framer-motion"




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

    <section className=" w-full  bg-white pt-32">
      <article className=" S768:w-[95%] m-auto">
        
        <div className="overflow-hidden -z-50">

          {
            posdata.map((item, index)=> {

              const image = item.image;
              const title = item.desc;
              const button = item.button

                return(
    
                  <motion.div
                  initial={{ scale:0, opacity: 0 }}
                  whileInView={{scale: 1, opacity: 1 }} 
                  transition={{ duration: 3,}}  
                  className= " w-full h-full bg-red-500" key={index}>
                    <div className=" w-full ">
                      <Image src={urlFor(image).url()} unoptimized={true} width={2000} height={2000} priority alt="hero banner" className=" w-full h-h90 object-cover object-center  relative" />
  
                      <div className=" absolute botton-2/4 left-2/4 -mt-64 -translate-x-2/4  flex flex-col items-center justify-center gap-2 uppercase w-full S1024:items-end S1024:justify-center S1024:pr-28 ">
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

                  </motion.div>
                )
              
            
            })
          }

        </div>

      </article>
      
    </section>  
 

  )
}


export default Posters