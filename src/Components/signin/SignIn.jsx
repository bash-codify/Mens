'use client'
import Link from 'next/link'
import React, { useState } from 'react'




const SignIn = () => {



  return (
    <section className=' w-full'>
        <div className=' w-full bg-neutral-100 pb-32'>

        
        <article className=' w-[90%] S768:w-[95%] S960:w-[85%] S1024:w-[80%] S1200:w-[75%] S1366:w-[60%] S1400:w-[60%]  m-auto z-50'>
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

        <div className=' w-full S768:grid grid-cols-2 pt-56 S768:pt-16'>

            
            <div className=' w-full flex flex-col S768:pt-24 gap-10 border-b border-neutral-300 pb-20 S768:border-none S768:pn-0 '>
                <div className=' flex items-center justify-center S768:items-start S768:justify-start '>
                    <h2 className=' text-[1.8rem]'>
                        RETURNING CUSTOMERS
                    </h2>
                </div>

                <div className=' w-full S768:border-r border-neutral-300 S768:pr-20 S768:pt-16'>
                    <form action="">
                        <div className=' flex flex-col gap-16 items-start justify-start'>
                            <div className=' w-full flex flex-col gap-4 items-start justify-start'>
                                <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="email">Email Address <span className=' text-red-500 '> *</span></label>

                                <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="email" name='email' placeholder='Please enter your Email Address' />
                            </div>
                            <div className=' w-full flex flex-col gap-4 items-start justify-start'>
                                <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="password">Password <span className=' text-red-500 '> *</span></label>

                                <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic' type="password" name='password' placeholder='Please enter your Password' />
                            </div>

                            

                        </div>
                        <div className=' mt-10 flex items-start justify-start'>

                            <div className='  flex items-center justify-center gap-5'>
                                <input type="checkbox" name="" id="" className=' w-8 h-8 S768:w-9 S768:h-9 bg-transparent'/>
                                <p className=' text-[1.2rem] tracking-wider'>
                                Remember me
                                </p>
                            </div>

                        </div>
                        <div className=' mt-10 w-full h-16 bg-neutral-900 hover:bg-black '>
                            <button type='button' className=' w-full h-16 text-white text-[1.4rem] font-medium'>
                                SIGN IN
                            </button>
                        </div>
                        <div  className=' flex items-center justify-center mt-10  text-[1.4rem] '>
                            <Link href={''}>
                            <p className=' border-b border-black'>
                                Forget Password?
                            </p>
                            </Link>
                        </div>

                    </form>
                </div>
    
            </div>

            <div className='S1200:w-[90%]  mr-auto mt-16 S768:pt-0 S768:pl-20'>

                <div className=' flex items-center justify-center S768:items-start S768:justify-start'>
                        <h2 className=' text-[1.8rem]'>
                            CREATE AN ACCOUNT
                        </h2>
                </div>
                <div className=' mt-12 S768:mt-32'>
                    <p className=' text-[1.4rem] font-medium'>
                        Register with the Vrsace Online Store and enjoy the benefits of having an account:
                    </p>
                    <ul className=' list-disc text-[1.4rem] pl-6 mt-5 '>
                        <li>
                            Latest News & Exclusive Offers
                        </li>
                        <li>
                            Order History & Address Book
                        </li>
                        <li>
                            Save items in your Wish List
                        </li>
                    </ul>
                </div>
                <div className=' mt-10 w-full h-16 hover:bg-black  border border-black S768:mt-56'>
                    <button type='button' className=' w-full h-16 text-black text-[1.4rem] hover:text-white font-semibold'>
                       CREATE AN ACCOUNT
                    </button>
                 </div>

                 <div  className=' flex items-center justify-center mt-10  text-[1.4rem] '>
                    <Link href={''}>
                    <p className=' border-b border-black'>
                        Privacy Policy
                    </p>
                    </Link>
                </div>

              
            </div>

        </div>

        </article>
    </div>

        <article className=' w-full bg-white py-20'>
            <div className=' w-[90%] S768:w-[95%] S960:w-[85%] S1024:w-[80%] S1200:w-[75%] S1366:w-[60%] S1400:w-[60%]  m-auto z-50'>
                <div className=' flex flex-col items-center justify-center'>
                    <h2 className=' text-[1.6rem] font-semibold'>
                        CHECK YOUR ORDER STATUS
                    </h2>
                    <p className=' text-[1.4rem] text-center'>
                        View the details of your purchase, including your order status and delivery tracking information.
                    </p>
                </div>
                <div className=' mt-16 '>
                    <form action="">
                        <div className=' flex flex-col S768:flex-row gap-16 items-start justify-start'>
                            <div className=' w-full flex flex-col gap-4 items-start justify-start'>
                                <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="order number">Order Number <span className=' text-red-500 '> *</span></label>

                                <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic bg-neutral-300' type="text" name='order number' placeholder='Please enter your order number' />
                            </div>
                            <div className=' w-full flex flex-col gap-4 items-start justify-start'>
                                <label  className=' text-[1.48rem] font-thin tracking-wider '  htmlFor="email">Email <span className=' text-red-500 '> *</span></label>

                                <input className=' w-full h-16 p-3 text-[1.48rem] font-serif focus:border border-black outline-none tracking-wide italic bg-neutral-300' type="email" name='email' placeholder='Please enter your Email' />
                            </div>

                        </div>
                        
                        <div className=' mt-10 w-full h-16 bg-neutral-900 hover:bg-black '>
                            <button type='button' className=' w-full h-16 text-white text-[1.4rem] font-medium'>
                                CHECK STATUS
                            </button>
                        </div>

                    </form>
                </div>
            </div>

        </article>
    </section>
  )
}

export default SignIn