'use client'
import React from 'react'
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-50'>
        <div className=' w-full h-8 bg-black text-white/90 text-xs flex items-center justify-center z-50'>
            <p>
                The definitive wardrobe - shop the Men's Icons collection
            </p>
        </div>
        <div className=' w-full h-h10 bg-white/95 backdrop-blur-md z-50'>
            <nav className=' w-w90 sm:w-w95 m-auto h-h10 z-50'>
                <div className=' flex items-center justify-between h-h10'>

                    <div className=' flex items-center justify-center gap-6 '>
                        <div className=' text-2xl font-bold mt-1 cursor-pointer'>
                        <Icon icon="clarity:menu-line" color="black" />
                        </div>
                        <div>
                            <h1 className=' text-2xl font-semibold'>
                                Men's
                            </h1>
                        </div>
                    </div>

                    <div className=' flex items-center justify-center gap-5'>

                        <div className=' cursor-pointer'>

                            <Icon icon="ri:search-line" />

                        </div>

                        <div className=' cursor-pointer'>

                            <Icon icon="akar-icons:shopping-bag" />
                            
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    </header>
  )
}

export default Header