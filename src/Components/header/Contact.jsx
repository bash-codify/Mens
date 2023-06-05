import React from 'react';
import { Icon } from '@iconify/react';

const Contact = () => {
  return (
    <div className=' fixed top-0 left-0 w-[21rem] min-h-screen bg-neutral-200 transition-all duration-500 ease-in-out py-5 overflow-y-scroll -translate-x-full '>

        <div className=' flex flex-col items-start justify-start px-5 min-h-screen gap-5 '>

            <div className=' w-full text-left text-[1rem] border-b border-neutral-600/30 pb-5 font-medium '>
                <p>
                    Contact Us
                </p>
                
            </div>

            <div className=' flex items-start flex-col justify-start gap-3 pt-2'>
                <div className=' flex items-center justify-center gap-3'>
                    <span className=' text-[2rem] text-neutral-600'>
                        <Icon icon="carbon:phone" />
                    </span>
                    <h1 className=' text-[2.2rem]'>
                        Phone
                    </h1>
                </div>
                <p className=' text-[1rem]'>
                    Our Customer Care team is available for any assistance services you may need.
                </p>
                <div className=' w-full h-16 bg-black text-white flex item-center justify-center font-bold tracking-wide'>
                    <button type='button'>
                        CONTACT US
                    </button>
                </div>
            </div>

            <div className=' flex flex-col items-start justify-center gap-3 pt-5'>
                <div className=' flex items-center justify-center gap-3'>
                    <span className=' text-[2rem] text-neutral-600'>
                       <Icon icon="octicon:mail-24" />
                    </span>
                    <h1 className=' text-[2.2rem]'>
                       Email
                    </h1>
                </div>
                <p className=' text-[1rem]'>
                    Contact us using this link.
                </p>

                <div className=' w-[17.4rem] h-16 bg-black text-white flex item-center justify-center font-bold tracking-wide'>
                    <button type='button'>
                        SEND EMAIL
                    </button>
                </div>
            </div>

            <div className=' flex items-start flex-col justify-center gap-3 pt-5'>
                <div className=' flex items-center justify-center gap-3'>
                    <span className=' text-[2rem] text-neutral-600'>
                      <Icon icon="teenyicons:appointments-outline" />
                    </span>
                    <h1 className=' text-[2.2rem]'>
                        Appointments
                    </h1>
                </div>
                <p className=' text-[1rem]'>
                    Book a virtual or in-store shopping Appointments with our skilled advisors.
                </p>
                <div className=' w-full h-16 bg-black text-white flex item-center justify-center font-bold tracking-wide'>
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