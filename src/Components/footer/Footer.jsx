'use client'
import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import data from './footerdata'


const Footer = () => {

  return (
    <section className=' w-full h-50 bg-black text-white'>
        <article className=' w-w95 m-auto'>
            <div className=' flex flex-col S1200:flex-row S1200:justify-between'>

                <div className=' flex flex-col S1200:flex-row  S1200:gap-10 S1200:py-10'>

                    {
                        data.map((item, index)=>{

                            return(
                        
                            <div key={index}>
                                <div className='flex gap-2 items-center justify-between text-[1rem] font-bold py-3 S1200:py-0 border-b border-gray-400/40 S1200:border-none'>
                                    <div className='flex gap-2 items-center justify-start text-ss font-normal'>
                                    <span >
                                        {item.icon}
                                    </span>
                                    <h1 className=' S1200:text-[.8rem] uppercase'>
                                        {item.Title}
                                    </h1>

                                    </div>
                                    <div className=' text-[2.6rem] S1200:hidden'>
                                        <span>
                                            <Icon icon="material-symbols:keyboard-arrow-down-rounded" />
                                        </span>
                                    </div>
                                </div>
                                {
                                    item.subTitle.map((subTitle, index)=>{
                                        return(
                                        <div className=' hidden S1200:flex flex-col gap-2 items-start justify-center text-ss S1200:text-xs pt-5 S1200:pt-2' key={index}>
                                                <Link href=''>
                                                    {subTitle.list}
                                                </Link>
                                                
                                        </div>

                                        )
                                    })
                                }
                            </div>

                            )
                        })
                    }
    
                </div>

                <div className=' S1200:flex flex-col justify-center items-center pt-3'>
                    <div className=' flex items-center justify-center gap-5 py-5 S1200:py-0 border-b border-gray-400/40 S1200:border-none text-[1.8rem]'>
                        <span className=' cursor-pointer'> 
                            <Icon icon="teenyicons:instagram-outline" />
                        </span>
                        <span className=' cursor-pointer'>
                            <Icon icon="uil:facebook-f" />
                        </span>
                        <span className=' cursor-pointer'>
                            <Icon icon="teenyicons:twitter-solid" />
                        </span>
                        <span className=' cursor-pointer'>
                            <Icon icon="uiw:pinterest" />
                        </span>
                        <span className=' cursor-pointer'>
                            <Icon icon="bi:youtube" />
                        </span>
                        <span className=' cursor-pointer'>
                            <Icon icon="teenyicons:linkedin-solid" />
                        </span>
                        
                    </div>
                    <div className=' flex items-center justify-center py-5 text-[.9rem] italic'>
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