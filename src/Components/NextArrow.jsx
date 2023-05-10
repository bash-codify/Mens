import React from 'react'
import { Icon } from '@iconify/react';

const NextArrow = ({onClick}) => {
  return (
    <div>
        <div className='absolute top-0 right-0 mt-40 bg-white w-8 h-8 flex item-center justify-center text-3xl cursor-pointer' onClick={onClick}>
            <Icon icon="material-symbols:arrow-right-alt-rounded" />
        </div>
    </div>
  )
}

export default NextArrow