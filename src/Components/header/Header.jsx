'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import NavLinks from './NavLinks';


const Header = () => {

    const [menutoggle, setMenuToggle] = useState(false);
     const [contacttoggle, setContactToggle] = useState(false)

  return (
    <header className='fixed top-0 left-0 w-full z-50'>
        <div className={` ${menutoggle? " -translate-y-full transition-all duration-500 ease-in-out " : ' translate-y-0 transition-all duration-500 ease-in-out '} w-full h-20 bg-black text-white text-[1.4rem] flex items-center justify-center z-50`} >
            <p>
                The definitive wardrobe - shop the Men's Icons collection
            </p>
        </div>
        <div className={` ${menutoggle? " -translate-y-20 h-[15vh] transition-all duration-500 ease-in-out delay-200 " : ' translate-y-0 h-[10vh] transition-all duration-500 ease-in-out delay-150   '} w-full h-[10vh] bg-white/30 backdrop-blur-md z-50`} >

            <nav className=' w-[90%] sm:w-[95%] m-auto z-50'>
                <div className=' flex items-center justify-between h-[10vh]'>

                    <div className=' flex items-center justify-center gap-6 '>
                        <div className=' text-[2.6rem] font-bold mt-1 cursor-pointer' onClick={()=>{
                            setMenuToggle(true)
                            setContactToggle(false)
                        } }>
                        <Icon icon="clarity:menu-line" color="black" />
                        </div>
                        <div>
                            <h1 className=' text-[2.6rem] font-semibold'>
                                Men's
                            </h1>
                        </div>
                    </div>

                    <div className=' flex items-center justify-center gap-5 text-[2rem] '>

                        <div className=' cursor-pointer'>

                            <Icon icon="ri:search-line" />

                        </div>

                        <div className=' cursor-pointer'>

                            <Icon icon="akar-icons:shopping-bag" />
                            
                        </div>
                    </div>
                </div>
            </nav>

        </div >
        <div className={` ${menutoggle? " translate-x-0 transition-all duration-500 ease-in-out " : ' -translate-x-full transition-all duration-500 ease-in-out '} fixed top-0 left-0 bottom-0 w-full min-h-screen bg-neutral-500/50 z-50`} >
                <NavLinks setMenuToggle={setMenuToggle} setContactToggle={setContactToggle} contacttoggle={contacttoggle} />            
        </div>
    </header>
  )
}

export default Header