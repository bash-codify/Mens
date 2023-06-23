'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import NavLinks from './NavLinks';
import Cart from '../cartbag/Cart';
import { CartToggleOpen, CartToggleStore } from '../globalstore/Store';
import Link from 'next/link';
import Search from './Search';



const Header = () => {

    const [menutoggle, setMenuToggle] = useState(false);
     const [contacttoggle, setContactToggle] = useState(false);
     const [isopen, setIsOpen] = useState(false)
     const [issearch, setIsSearch] = useState(false)
    
     

     

  return (
    <header className='fixed top-0 left-0 w-full z-50' onMouseLeave={() => setIsOpen(false)}>
        <div className={` ${menutoggle? " -translate-y-full transition-all duration-500 ease-in-out " : ' translate-y-0 transition-all duration-500 ease-in-out '} w-full h-20 bg-black text-white text-[1.4rem] flex items-center justify-center z-50`} >
            <p>
                The definitive wardrobe - shop the Men's Icons collection
            </p>
        </div>
        <div className={` ${menutoggle? " -translate-y-20 h-[15vh] transition-all duration-500 ease-in-out delay-200 " : ' translate-y-0 h-[10vh] transition-all duration-500 ease-in-out delay-150   '} w-full h-[10vh] bg-white/30 backdrop-blur-md z-50`} >

            <nav className=' w-[90%] sm:w-[95%] m-auto z-50'>
                <div className=' flex items-center justify-between h-[10vh]'>

                    <div className=' flex items-center justify-center gap-6 '>
                        <div className=' text-[2.6rem] font-bold mt-1 cursor-pointer hover:text-primaryColor' onClick={()=>{
                            setMenuToggle(true)
                            setContactToggle(false)
                        } }>
                        <Icon icon="clarity:menu-line" />
                        </div>
                        <Link href={'/'}>
                            <h1 className=' text-[2.6rem] font-semibold tracking-widest hover:text-primaryColor cursor-pointer'>
                                Men's
                            </h1>
                        </Link>
                    </div>

                    <div className=' flex items-center justify-center gap-5 text-[2rem] '>

                        <div className=' cursor-pointer hover:text-primaryColor'>

                            <Icon icon="ri:search-line" />

                        </div>

                        <Link href={'bag'} className=' cursor-pointer hover:text-primaryColor' onMouseOver={() => setIsOpen(true)} >

                            <Icon icon="akar-icons:shopping-bag" />
                            
                        </Link>
                    </div>
                </div>
            </nav>

        </div >
        {/* NavLinks Section */}

        <div className={` ${menutoggle? " translate-x-0 transition-all duration-500 ease-in-out " : ' -translate-x-full transition-all duration-500 ease-in-out '} fixed top-0 left-0 bottom-0 w-full min-h-screen bg-neutral-500/50 z-50`} >
                <NavLinks setMenuToggle={setMenuToggle} setContactToggle={setContactToggle} contacttoggle={contacttoggle} />            
        </div>
        {/* End NavLinks Section */}

        {/* Cart Section */}
        <div>
            <Cart isopen={isopen} setIsOpen={setIsOpen}/>
        </div>
        {/* End of Cart Section */}

        {/* Search Section */}
        <div>
            {
                issearch &&
            <Search issearch={issearch} setIsSearch={setIsSearch}/>
            }
        </div>
        {/* End of Search Section */}
    </header>
  )
}

export default Header