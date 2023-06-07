'use client'
import React from 'react'
import datas from './conData'
import Form from './Form'
import data from '../footer/footerdata'
import Link from 'next/link'



const ContactUs = () => {
  return (
    <section className=' w-full min-h-screen bg-neutral-100'>
        <article className=' w-[90%] S768:w-[95%]  m-auto z-50'>
          <div className=' hidden S768:flex flex-col items-end justify-end pt-36'>
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

                <div className=' w-full flex items-center justify-between bg-neutral-100 pt-7'>
                    <h2 className=' text-[1.6rem] S768:text-[1.8rem] font-bold tracking-wider'>
                      CONTACT NUMBERS
                    </h2>
                    <span className=' text-[2.4rem] S768:text-[2.2rem] font-bold'>
                      +
                    </span>
                </div>

                <div className='w-full min-h-[100vh] relative py-10 flex items-center justify-center'>

                  <div className=' w-full absolute top-0 bottom-0  overflow-y-scroll mt-3 ml-4 border-b border-neutral-300 pb-10'>
                    <p className=' text-[1.4rem] S768:text-[1.6rem] pt-10'>
                      Our Customer Care representatives can assist you in the following languages: 
                    </p>
                    <div>
                      <h2 className=' font-bold pt-6 text-[1.8rem] tracking-wider'>
                        EYIHPIT:
                      </h2>
                      <p className=' text-[1.4rem] S768:text-[1.8rem]'>
                        English, Yoruba, Igbo, Hausa, Pigin, Igala, Tifi,
                      </p>
                    </div>
                    <div className=' mt-5 mr-4 bg-neutral-300'>
                      <table>
                        <tbody>
                        <tr className=' w-full text-[1rem] S500:text-[1.4rem] S768:text-[1.6rem] border-b border-white ' >

                          <th className=' w-96 S768:w-[30rem] bg-neutral-400 py-4 border-r border-white'>STATE</th>

                          <th className=' w-96 S768:w-[50rem] bg-neutral-400 border-r border-white'>CONTACT</th>

                          <th className=' w-96 S768:w-[50rem] bg-neutral-400'>OPENING HOURS</th>

                        </tr>
                        {
                          datas.map((item, index)=>{

                            return (

                            <tr className=' text-[1rem] S500:text-[1.4rem] border-b border-white h-24' key={index}>
                              <td className=' w-fit pl-5 border-r border-white  '>{item.state} </td>
                              <td className=' w-fit pl-5 border-r border-white  '>+{item.number}</td>
                              <td className=' w-fit pl-5'>
                                Monday to Friday <br /> 9am to 7pm
                              </td>
                            </tr>

                            )
                          })
                        }

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className='pt-8 border-b border-neutral-300 pb-7'>
                  <p className=' text-[1.4rem] S500:text-[1.6rem] S768:text-[1.8rem]'>
                    If you would like to learn more about the house of Men's or our boutiques, then please contact our Customer Care.
                  </p>
                </div>
              </div>

              <div className=' pt-8'>
              
                  <h2 className=' font-bold text-[1rem]'>
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