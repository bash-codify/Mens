import React from 'react';
import { Icon } from '@iconify/react';

const Contact = ({contacttoggle, setContactToggle}) => {
  return (
    <div className= {` ${contacttoggle? " translate-x-0 transition-all duration-500 ease-in-out " : ' -translate-x-full transition-all duration-500 ease-in-out '} fixed top-0 left-0 bottom-0 w-[26rem] min-h-screen bg-neutral-200 transition-all duration-500 ease-in-out py-5 overflow-y-scroll `}>
     
        <div className=' flex flex-col items-start justify-start px-5 min-h-screen gap-5 '>

            <div className=' w-full text-left text-[2.4rem] border-b border-neutral-600/30 pb-5 font-medium flex items-center justify-start gap-2 cursor-pointer' onClick={() => setContactToggle(false)}>
                <span className=' text-[2rem] '>

                    <Icon  icon="ep:arrow-left" / >

                </span>
                <p>
                    Contact Us
                </p>
                
            </div>

            <div className=' flex items-start flex-col justify-start gap-8 pt-10'>
                <div className=' flex items-center justify-center gap-3'>
                    <span className=' text-[3.2rem] text-neutral-600'>
                        <Icon icon="carbon:phone" />
                    </span>
                    <h1 className=' text-[3.4rem]'>
                        Phone
                    </h1>
                </div>
                <p className=' text-[1.4rem]'>
                    Our Customer Care team is available for any assistance services you may need.
                </p>
                <div className=' w-full h-20 bg-black text-white flex item-center justify-center font-bold tracking-wide text-[1.4rem]'>
                    <button type='button'>
                        CONTACT US
                    </button>
                </div>
            </div>

            <div className=' flex flex-col items-start justify-center gap-8 pt-5'>
                <div className=' flex items-center justify-center gap-3'>
                    <span className=' text-[3.2rem] text-neutral-600'>
                       <Icon icon="octicon:mail-24" />
                    </span>
                    <h1 className=' text-[3.4rem]'>
                       Email
                    </h1>
                </div>
                <p className=' text-[1.4rem]'>
                    Contact us using this link.
                </p>

                <div className=' w-[23.4rem] h-20 bg-black text-white flex item-center justify-center font-bold tracking-wide text-[1.4rem]'>
                    <button type='button '>
                        SEND EMAIL
                    </button>
                </div>
            </div>

            <div className=' flex items-start flex-col justify-center gap-8 pt-5'>
                <div className=' flex items-center justify-center gap-3'>
                    <span className=' text-[3.2rem] text-neutral-600'>
                      <Icon icon="teenyicons:appointments-outline" />
                    </span>
                    <h1 className=' text-[3.4rem]'>
                        Appointments
                    </h1>
                </div>
                <p className=' text-[1.4rem]'>
                    Book a virtual or in-store shopping Appointments with our skilled advisors.
                </p>
                <div className=' w-full h-20 bg-black text-white flex item-center justify-center font-bold tracking-wide text-[1.4rem]'>
                    <button type='button'>
                       BOOK AN APPOINTMENT
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact