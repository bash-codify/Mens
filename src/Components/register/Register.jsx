import React from 'react'
import RegisterForm from './RegisterForm'

const Register = () => {
  return (
   <section className=' w-full bg-neutral-100 pb-32'>
    <article className=' w-[95%]  m-auto z-50'>
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
         <div className=' w-[60%] S1024:w-[80%] S1200:w-[75%] S1366:w-[60%] S1400:w-[60%]  m-auto z-50  pt-56 S768:pt-16'>
            <div className=' flex items-center justify-center font-semibold '>
                    <h2 className=' text-[1.8rem]'>
                        REGISTRATION
                    </h2>
            </div>
            <div className=' mt-20'>
                <RegisterForm/>
            </div>
         </div>
    </article>
   </section>
  )
}

export default Register