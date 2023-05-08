import React from 'react'
import { Icon } from '@iconify/react';

const NextArrow = ({onClick}) => {
  return (
    <div>
        <div className=' absolute top-32 right-0 bg-white w-8 h-8 flex item-center justify-center text-3xl cursor-pointer z-50' onClick={onClick}>
            <Icon icon="material-symbols:arrow-right-alt-rounded" />
        </div>
    </div>
  )
}

export default NextArrow