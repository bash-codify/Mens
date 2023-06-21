'use client'
import { Icon } from '@iconify/react'
import React from 'react'

const Bag = () => {
  return (
    <section className=' w-full min-h-screen'>
        <article>
            <div className='mt-52'>

                <div className=' px-5 bg-neutral-100'>
                    <div className=' flex flex-col items-center justify-center gap-5 py-16'>
                        <h1 className=' text-[2.2rem] font-semibold'>
                            SHOPPING BAG
                        </h1>
                        <div className='flex items-center justify-center gap-20 text-[1.4rem]'>
                        <p className=' border-b border-neutral-500 pb-1'>
                            Shopping Bag (0)
                        </p>
                        <p className=' border-b border-neutral-500 pb-1'>
                            Wishlist (0)
                        </p>

                        </div>
                    </div>

                    <div className=' S960:flex S960:items-center S960:justify-between mt-10 pb-10' >
                        <div>
                            <p className=' text-[1.4rem] ' >
                                You have <span>0</span> items in your bag.
                            </p>
                            <div className=' w-full h-16 flex flex-col items-center justify-center gap-5  border border-neutral-600 hover:bg-black hover:text-white outline-none mt-4'>
                                <button type='button' className=' text-[1.4rem] font-semibold px-20'>

                                    CONTINUE SHOPPING
                                </button>
                            </div>

                        </div>
                        <div className=' px-5 bg-neutral-300 mt-10 S960:mt-0'>
                            <h2 className=' text-[2rem] font-semibold'>
                                NEED A LITTLE HELP? CONTACT US
                            </h2>
                            <p className=' text-[1.6rem] pb-4 S960:w-[45rem]'>
                                Please contact our customer care team either by <span  className=' border-b border-neutral-500 pb-1 cursor-pointer hover:text-primaryColor'>
                                    email, telephone or via out contact form
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' my-28'>
                    <div className=' flex flex-col items-center justify-center gap-5'>
                        <span className=' text-[2rem]'>
                            <Icon icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" />
                        </span>
                        <span className=' text-[2rem] font-semibold'>
                            WishList
                        </span>

                    </div>
                </div>
                <div className=' px-5 bg-neutral-100 py-20 flex flex-col items-center justify-center'>
                    <p className=' text-[1.6rem] text-center'>
                        Your wishlist is empty. Click the heart icon on your desired products to add items to your wishlist.
                    </p>
                    <div className=' w-full S960:w-fit h-16 flex flex-col items-center justify-center gap-5  border border-neutral-600 hover:bg-black hover:text-white outline-none my-10  px-20'>
                        <button type='button' className=' text-[1.4rem] font-semibold'>
                            CONTINUE SHOPPING
                        </button>
                    </div>
                </div>

                <div className=' py-16 flex items-center justify-center'>
                    <h3 className=' border-b border-neutral-500 pb-1 font-semibold text-[1.2rem]'>
                        YOU MAY ALSO LIKE
                    </h3>
                </div>

            </div>
        </article>
    </section>
  )
}

export default Bag