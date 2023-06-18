import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import Contact from './Contact';
import { useGlobaContext } from '@/context/useContextApi';
import Link from 'next/link';


const NavLinks = ({setMenuToggle, setContactToggle, contacttoggle}) => {

    // const { setContactToggle, contacttoggle} = useGlobaContext();
   

  return (  

        <div className=' fixed top-0 left-0 bottom-0 flex '>


            <div className=' w-[26rem] S500:w-[35rem] min-h-screen bg-white flex items-start justify-start flex-col '>
                <div className=' w-full h-[5vh] flex items-start flex-col justify-start gap-6 px-10 font-semibold mt-8 tracking-widest'>
                        <div>
                            <h1 className=' text-[2.8rem] font-semibold hover:text-neutral-400 cursor-pointer'>
                                Men's
                            </h1>
                        </div>
                </div>

                <div className=' w-full h-[58vh] flex items-start flex-col justify-start gap-6 px-10 text-[2.2rem] font-semibold pt-28 tracking-wider'>
                    <div className=' hover:text-neutral-400'>
                        <Link href="/" onClick={()=> setMenuToggle(false)}>
                            Home
                        </Link>
                    </div>
                    <div className=' hover:text-neutral-400'>
                        <a href="#/">
                            Shop
                        </a>
                    </div>

                    <div className=' hover:text-neutral-400'>
                        <a href="#/">
                            About
                        </a>
                    </div>
                    <div className=' w-full flex items-center justify-between gap-2 cursor-pointer hover:text-neutral-400' onClick={()=> setContactToggle(true)}>
                        
                        <span>
                            Contact Us
                        </span>
                        <span className=' text-[1.8rem] '>
                            <Icon  icon="ep:arrow-left" className=" rotate-180 "/ >
                        </span>
                    </div>

                </div>

                <div className=' w-[26rem] S500:w-[35rem] h-[42vh] bg-gray-300 flex items-start justify-center flex-col gap-6 text-[2.2rem] px-10 tracking-wider'>

                    <Link href={'my-account'}>

                        <div className=' flex items-center justify-start gap-4 cursor-pointer hover:text-neutral-400 '>
                            <span>
                                
                                <Icon icon="clarity:user-line" />
                            </span>
                            <span>
                                Sign In
                            </span>
                        </div>
                    </Link>

                    <Link href={'find-a-store'}>
                        <div className=' flex items-center justify-start gap-4 cursor-pointer hover:text-neutral-400 '>
                            
                            <span>
                                <Icon icon="material-symbols:location-on-outline" />
                            </span>
                            <span>
                                Stores
                            </span>
                        </div>


                    </Link>


                    <Link href={''}>

                        <div className=' flex items-center justify-start gap-4 cursor-pointer hover:text-neutral-400 '>
                            <span >
                                <Icon icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" />
                            </span>
                            <span>
                                Wish List
                            </span>
                        </div>

                    </Link>

                    

                </div>

            </div>

            <div className=' flex items-center justify-center bg-black w-16 h-16 text-[2rem] cursor-pointer text-white' onClick={()=> setMenuToggle(false)}>
                        <Icon icon="icon-park-outline:close" />
            </div>


            <div >
                < Contact contacttoggle={contacttoggle} setContactToggle={setContactToggle} setMenuToggle={setMenuToggle} />
            </div>

        </div>
  
  ) 
}

export default NavLinks