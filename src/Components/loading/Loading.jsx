import React from 'react';
import './loading.css'
import Image from 'next/image';
import Animate from '../../assets/Loading/Anima-M.gif'
import content from './loadData';

const Loading = () => {

  return (
    <section className=' w-full h-screen fixed top-0 left-0 bottom-0 right-0 bg-white z-50 flex items-center justify-center'>
        <article>
            <div className=' flex flex-col items-center justify-center '>
            
                <div className=''>
                    <Image src={Animate} priority alt='Loading Animated icon' className=' w-[25rem]'></Image>
                </div>
                <h1 className=' text-[6rem] flex flex-row items-center justify-center gap-10 -translate-y-16'>

                    <span>
                        M
                    </span>
                    <span>
                        e
                    </span>
                    <span>
                        n
                    </span>
                    <span>
                        '
                    </span>
                    <span>
                        s
                    </span>
                </h1>
            </div>
            <div>
                
            </div>

        </article>
    </section>

  )
}

export default Loading