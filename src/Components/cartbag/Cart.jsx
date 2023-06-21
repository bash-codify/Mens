
import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { CartToggleClose, CartToggleStore } from '../globalstore/Store'

const Cart = ({isopen}) => {

    

    
  return (

    <article className= {` hidden S768:block ${isopen? 'translate-x-0 transition-all duration-500 ease-linear ' : 'translate-x-full S768:mr-[0vw] transition-all duration-500 ease-linear'} absolute top-0 right-0 mt-[11.3rem] S768:mr-[2.5vw] w-[45rem] min-h-fit bg-neutral-100 z-40  `} >
        <div >
            <div>

                <div className=' flex items-center justify-center py-16 border-b border-neutral-300'>
                    <h1 className=' text-[2rem] font-semibold'>
                        YOUR SHOPPING CART IS EMPTY
                    </h1>
                </div>

                <div className=' flex items-center justify-between py-12 px-10'>

                    <p className=' text-[1.8rem] font-normal'>
                        Subtotal
                    </p>
                    <p className=' flex items-center justify-center gap-4 text-[1.8rem] font-normal'>
                        <span>
                            <Icon icon="mdi:naira" />
                        </span>
                        0
                    </p>

                </div>
                </div>
        </div>
    </article>

  )
}

export default Cart