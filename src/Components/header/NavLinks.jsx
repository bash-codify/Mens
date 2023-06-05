import React from 'react'
import { Icon } from '@iconify/react';
import Contact from './Contact';


const NavLinks = () => {

  return (  
        <div className=' fixed top-0 left-0 flex '>


            <div className=' w-[21rem] min-h-screen bg-white flex items-start justify-start flex-col overflow-y-scroll '>
                <div className=' w-full h-[5vh] flex items-start flex-col justify-start gap-6 px-5 text-[1.2rem] font-semibold pt-3 '>
                        <div>
                            <h1 className=' text-2xl font-semibold'>
                                Men's
                            </h1>
                        </div>
                    </div>

                <div className=' w-full h-[58vh] flex items-start flex-col justify-start gap-6 px-5 text-[1.2rem] font-semibold pt-16'>
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
                    <div className=' w-full flex items-center justify-between gap-2 cursor-pointer'>
                        
                        <span>
                            Contact Us
                        </span>
                        <span className=' text-[1.5rem] '>
                            <Icon  icon="ep:arrow-left" className=" rotate-180 "/ >
                        </span>
                    </div>

                </div>
                <div className=' w-[20rem] h-[42vh] bg-gray-300 flex items-start justify-center flex-col gap-6 text-[1rem] px-5'>

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

            <div className=' flex items-center justify-center bg-black w-12 h-11 text-[1.8rem] cursor-pointer text-white'>
                        <Icon icon="icon-park-outline:close" />
            </div>


            <div>
                < Contact/>
            </div>

        </div>
  
  ) 
}

export default NavLinks