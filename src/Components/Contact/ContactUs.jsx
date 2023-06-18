'use client'
import React, { useState } from 'react'
import Form from './Form'
import data from '../footer/footerdata'
import Link from 'next/link'
import Table from './Table'



const ContactUs = () => {

  const [tabletoggle, setTableToggle] = useState(false)

  return (
    <section className=' w-full bg-neutral-100 pb-32'>
        <article className=' w-[90%] S768:w-[95%]  m-auto z-50'>
          <div className=' hidden S768:flex flex-col items-end justify-end pt-56'>
            <h3 className=' text-[1.4rem] font-bold tracking-wider '>
              Need Assistance?
            </h3>
            <p className=' text-[1.2rem] S500:text-[1.3rem] tracking-wide'>
              Please contact our Customer Care team via our 
              <span className=' border-b border-neutral-500 ml-1'>
                <a href="#/">
                  Contact Form
                </a>
              </span> 
            </p>
          </div>

          <div className='S768:grid contactGrid  pt-36 S768:pt-16'>

            
                <div className=' w-full hidden S768:flex flex-col S768:pt-24 gap-10 '>

                    {
                        data.slice(1, 4).map((item, index)=>{

                            return(
                        
                            <div className=' cursor-pointer S1200:cursor-default' key={index}  >
                               <div className='flex  items-center justify-between '>
                                  <div className='flex gap-4 items-center justify-start'>
                                    <h1 className=' S768:text-[1.4rem] S1200:text-[1.6rem] uppercase font-medium'>
                                        {item.Title}
                                    </h1>

                                  </div>
                                </div>
                                <div className= " pt-5 S1200:pb-0 border-b border-gray-400/40 S1200:border-none">
                                
                                {
                                   
                                    item.subTitle.map((subTitle, i)=>{
                                        return(
                                            
                                        <div className={`  S1200:flex flex-col gap-2 items-start justify-center text-[1.2rem] S1024:text-[1.4rem] py-2 pl-4`} key={i}>
                                                <Link href=''>
                                                    {subTitle.list}
                                                </Link>
                                                
                                        </div>

                                        )
                                    })
                                }

                                </div>
                            </div>

                            )
                        })
                    }
    
                </div>

            <div className='S1200:w-[90%]  mr-auto pt-10 S768:pt-0'>

              <div className=' w-full' >
                <div className=' flex flex-col gap-4 items-center justify-center border-b border-neutral-300 pb-10 S768:items-start S768:justify-start'>
                  <h1 className=' text-[2.6rem] S768:text-[2.8rem] font-bold tracking-wider'>
                    CONTACT US
                  </h1>
                  <p className=' text-[1.6rem] S500:text-[1.6rem] S768:text-[1.8rem]'>
                    We want to make it possible for you to have the perfect shopping experience! That's why we have different teams available to answer your questions.
                  </p>
                </div>

                <div className=' w-full flex items-center justify-between bg-neutral-100 pt-7 cursor-pointer' onClick={()=> setTableToggle((prev)=> !prev)}>
                    <h2 className=' text-[1.6rem] S768:text-[1.8rem] font-bold tracking-wider'>
                      CONTACT NUMBERS
                    </h2>
                    <span className=' text-[2.4rem] S768:text-[2.2rem] font-bold'>
                      +
                    </span>
                </div>

                {}

                <div className={` ${tabletoggle? 'min-h-[100vh] py-10 border-b-0 transition-all duration-300 ease-linear' : 'min-h-[0vh] py-0 overflow-hidden border-b transition-all duration-300 ease-linear'} w-full  relative  flex items-center justify-center border-b border-neutral-300 pb-3`} >
                  <Table/>
                </div>

                <div className='pt-20 border-b border-neutral-300 pb-7'>
                  <p className=' text-[1.4rem] S500:text-[1.6rem] S768:text-[1.8rem]'>
                    If you would like to learn more about the house of Men's or our boutiques, then please contact our Customer Care.
                  </p>
                </div>
              </div>

              <div>
              
                  <h2 className=' font-bold text-[1.6rem] S768:text-[1.8rem] tracking-wider'>
                    CONTACT FORM
                  </h2>
                  <Form/>

              </div>

            </div>

          </div>


        </article>
    </section>
  )
}

export default ContactUs