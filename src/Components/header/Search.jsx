import { Icon } from '@iconify/react'
import React from 'react'

const Search = ({issearch}) => {
  return (
   <section className=' absolute top-0 left-0 right-0 w-full min-h-screen bg-white'>
    <article className=' w-[90%] m-auto'>

        <div>
            <div className=' mt-20'>
                <form action="">
                    <div className=' '>
                    <input type="text" name='search' placeholder='Search....' className=' w-full h-16 bg-transparent border-b border-neutral-500 text-[1.6rem] text-black outline-none placeholder:text-black pl-10' />

                    </div>

                    <div className=' -translate-y-11'>
                        <button type='search' className=' text-[1.6rem]'>
                            <Icon icon="ri:search-line" />
                        </button>
                    </div>
                </form>
            </div>
            {/* <div>
                <h3>
                    Suggested
                </h3>
                <p></p>
            </div> */}
        </div>

    </article>
   </section>
  )
}

export default Search