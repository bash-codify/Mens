import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import Contact from './Contact';
import { useGlobaContext } from '@/context/useContextApi';


const NavLinks = ({setMenuToggle, setContactToggle, contacttoggle}) => {

    // const { setContactToggle, contacttoggle} = useGlobaContext();
   

  return (  

        <div className=' fixed top-0 left-0 bottom-0 flex '>


            <div className=' w-[26rem] min-h-screen bg-white flex items-start justify-start flex-col '>
                <div className=' w-full h-[5vh] flex items-start flex-col justify-start gap-6 px-5 font-semibold pt-8 '>
                        <div>
                            <h1 className=' text-[2.8rem] font-semibold'>
                                Men's
                            </h1>
                        </div>
                    </div>

                <div className=' w-full h-[58vh] flex items-start flex-col justify-start gap-6 px-5 text-[2.2rem] font-semibold pt-28'>
                    <div>
                        <a href="#/">
                            Home
                        </a>
                    </div>
                    <div>
                        <a href="#/">
                            Shop
                        </a>
                    </div>

                    <div>
                        <a href="#/">
                            About
                        </a>
                    </div>
                    <div className=' w-full flex items-center justify-between gap-2 cursor-pointer' onClick={()=> setContactToggle(true)}>
                        
                        <span>
                            Contact Us
                        </span>
                        <span className=' text-[1.8rem] '>
                            <Icon  icon="ep:arrow-left" className=" rotate-180 "/ >
                        </span>
                    </div>

                </div>

                <div className=' w-[26rem] h-[42vh] bg-gray-300 flex items-start justify-center flex-col gap-6 text-[2.2rem] px-5'>

                    <div className=' flex items-center justify-start gap-2 cursor-pointer '>
                        <span>
                            
                            <Icon icon="clarity:user-line" />
                        </span>
                        <span>
                            Sign In
                        </span>
                    </div>
                    <div className=' flex items-center justify-start gap-2 cursor-pointer'>
                        <span>
                            <Icon icon="material-symbols:location-on-outline" />
                        </span>
                        <span>
                            Stores
                        </span>
                    </div>
                    <div className=' flex items-center justify-start gap-2 cursor-pointer'>
                        <span >
                            <Icon icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" />
                        </span>
                        <span>
                            Wish List
                        </span>
                    </div>
                    

                </div>

            </div>

            <div className=' flex items-center justify-center bg-black w-16 h-16 text-[2rem] cursor-pointer text-white' onClick={()=> setMenuToggle(false)}>
                        <Icon icon="icon-park-outline:close" />
            </div>


            <div >
                < Contact contacttoggle={contacttoggle} setContactToggle={setContactToggle} />
            </div>

        </div>
  
  ) 
}

export default NavLinks