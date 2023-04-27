'use client'
import React from 'react'
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full h-h10 bg-white/95 backdrop-blur-md z-50'>
        <nav className=' w-w90 sm:w-w95 m-auto'>
            <div className=' flex items-center justify-between h-h10'>

                <div className=' flex items-center justify-center gap-6 '>
                    <div className=' text-2xl font-bold mt-1'>
                       <Icon icon="clarity:menu-line" color="black" />
                    </div>
                    <div>
                        <h1 className=' text-2xl font-semibold'>
                            Men's
                        </h1>
                    </div>
                </div>
                <div className=' flex items-center justify-center gap-5'>
                    <div>
                        <Icon icon="ri:search-line" />
                    </div>
                    <div>
                        <Icon icon="akar-icons:shopping-bag" />
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header