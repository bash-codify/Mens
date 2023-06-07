import React from 'react'

const NewsLetter = () => {
  return (
    <section className=' w-full h-[26rem] S500:h-[23rem] S960:h-[26rem] bg-gray-200 '>
        <article className=' flex flex-col px-4 S768:items-center S768:justify-center'>
          
                <div className=' w-full flex flex-col items-center justify-center h-h20'>
                    <h1 className=' text-[3rem] font-semibold'>
                        Enter The World Of Mens's
                    </h1>
                    <p className=' text-[1.4rem] font-bold'>
                        Hear about exclusive events, collections and news.
                    </p>
                </div>

                <div flex=" flex item-center justify-start">

                    <label className=' text-[1.6rem] font-medium' htmlFor="email">Email address *</label> <br />
                    <input type="email" name='email' id='email' placeholder='Enter email address' className=' w-full S768:w-[38rem] h-16 outline-none border border-black italic text-[1.4rem] pl-4 font-medium bg-transparent' />
                </div>
            
        </article>
    </section>
  )
}

export default NewsLetter