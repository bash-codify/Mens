import React from 'react'

const NewsLetter = () => {
  return (
    <section className=' w-full h-60 bg-gray-200 mt-20'>
        <article className=' flex flex-col px-4 S768:items-center S768:justify-center'>
          
                <div className=' w-full flex flex-col items-center justify-center h-h20'>
                    <h1 className=' text-2xl font-medium'>
                        Enter The World Of Mens's
                    </h1>
                    <p className=' text-xs font-bold'>
                        Hear about exclusive events, collections and news.
                    </p>
                </div>

                <div flex=" flex item-center justify-start -pt-10">

                    <label className=' text-ss font-normal' htmlFor="email">Email address *</label> <br />
                    <input type="email" name='email' id='email' placeholder='Enter email address' className=' w-full S768:w-96 h-10 outline-none border border-black italic text-ss pl-4 font-light bg-transparent' />
                </div>
            
        </article>
    </section>
  )
}

export default NewsLetter