'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import data from './footerdata'
import {motion} from 'framer-motion'


const mSocial = [
  
  {
    icon: <Icon icon="teenyicons:instagram-outline" />
  },
  {
    icon: <Icon icon="teenyicons:twitter-solid" />
  },
  {
    icon: <Icon icon="uil:facebook-f" />
  },
  {
    icon:  <Icon icon="uiw:pinterest" />
  },
  {
    icon: <Icon icon="bi:youtube" />
  },
  {
    icon: <Icon icon="teenyicons:linkedin-solid" />
  },

  
];

const Footer = () => {

    const [dataindex, setDataIndex] = useState(null)
    


    const selectIndex = (index)=>{

        if(dataindex === index){

            return setDataIndex(null)
        }

        setDataIndex(index)
    }

  return (

    <section className=' w-full min-h-[60vh] bg-black text-white py-5'>

        <article className=' w-w95 m-auto'>
            
            <div className=' flex flex-col S1200:flex-row S1200:justify-between'>

                <div className=' flex flex-col S1200:flex-row  S1200:gap-10 S1200:py-10'>

                    {
                        data.map((item, index)=>{

                            return(
                        
                            <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{scale: 1, opacity: 1 }} 
                            transition={{ delay: 1.5, duration: 2,}}
                            className=' cursor-pointer S1200:cursor-default' key={index} onClick={()=>{
                            selectIndex(index)}}>
                                <div className='flex gap-2 items-center justify-between text-[.94rem] font-bold pt-10 S1200:pt-0 '>
                                    <div className='flex gap-4 items-center justify-start text-[1.8rem] font-medium'>
                                    <span >
                                        {item.icon}
                                    </span>
                                    <h1 className=' uppercase'>
                                        {item.Title}
                                    </h1>

                                    </div>
                                    <div className=' text-[1.8rem] S1200:hidden'>
                                        <span>
                                            <Icon  icon="ep:arrow-left" className={` ${dataindex === index? 'rotate-180 transition-all duration-500 ease-linear' : 'rotate-0 transition-all duration-500 ease-linear'} rotate-180`} />
                                        </span>
                                    </div>
                                </div>
                                <div className= "pb-10 S1200:pb-0 border-b border-gray-400/40 S1200:border-none">
                                
                                {
                                   
                                    item.subTitle.map((subTitle, i)=>{
                                        return(
                                            
                                        <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{scale: 1, opacity: 1 }}
                                        transition={{ delay: 1, duration: 4,}} 
                                        className={` ${dataindex === index? 'flex transition-all duration-500 ease-linear' : ' hidden transition-all duration-500 ease-linear'} S1200:flex flex-col gap-2 items-start justify-center text-[1.8rem] py-4 font-medium`} key={i}>
                                                <Link href=''>
                                                    {subTitle.list}
                                                </Link>
                                                
                                        </motion.div>

                                        )
                                    })
                                }

                                </div>
                            </motion.div>

                            )
                        })
                    }
    
                </div>
                <div className=' S1200:flex flex-col items-center justify-center overflow-x-hidden'>
                    <div className='flex gap-5 justify-center items-center py-5 S1200:py-0 border-b border-gray-400/40 S1200:border-none'>

                        {
                            mSocial.map((item, i) =>{

                                return(
                                <motion.div
                                initial={{ x: "100%", opacity: 0 }}
                                whileInView={{x: "0%", opacity: 1 }}
                                transition={{ duration: 5,}}  className=' flex items-center justify-center gap-5  text-[1.8rem]' key={i}>
                                    <div className=' cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in-out w-16 h-16 bg-neutral-500/70 rounded-full flex items-center flex-col justify-center ' >
                                        <div >
                                        {item.icon}
                                        </div> 
                                    </div>
                                    
                                </motion.div>


                                )
                            })
                        }
                    </div>
                    <div className=' flex items-center justify-center py-5 text-[1.6rem] italic font-medium'>
                        <p>
                            All Right Reserved @ Mens.com
                        </p>
                    </div>

                </div>


            </div>

        </article>
    </section>
    
  )
}

export default Footer