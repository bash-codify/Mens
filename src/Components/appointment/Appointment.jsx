import React from 'react'
import AppointForm from './AppointForm'

const Appointment = () => {
  return (
    <section className=' w-full bg-neutral-100 pb-32'>
        <article className=' w-[90%] S768:w-[95%] S960:w-[85%] S1024:w-[80%] S1200:w-[75%] S1366:w-[60%] S1400:w-[60%]  m-auto z-50'>
            <div className=' pt-60'>
                <div className='flex flex-col items-center justify-center '>
                    <h1 className=' text-[2.6rem] S768:text-[2.8rem] font-bold tracking-wider'>
                        BOOK AN APPOINTMENT
                    </h1>
                    <p className=' text-[1.2rem] S500:text-[1.4rem] '>
                        Request an appointment in store with one of our dedicated Men's Sales Associates. You may also speak directly with our Customer Care team at +234 811 2424 436.
                    </p>
                </div>
                <div className=' mt-12'>
                    <div className='flex flex-col items-start justify-start'>
                    <h2 className=' text-[1.6rem] S768:text-[1.8rem] font-bold tracking-wider'>
                        PERSONAL DETAILS
                    </h2>
                    <p className=' text-[1.4rem] S768:text-[1.6rem] font-thin tracking-wider'>
                        <span className=' text-red-500'>* </span> Required Fileds

                    </p>

                    </div>

                    <div className=' '>

                        <AppointForm/>
                    
                    </div>
                </div>

            </div>


        </article>
    </section>
  )
}

export default Appointment