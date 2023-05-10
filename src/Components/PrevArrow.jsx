import React from 'react';
import { Icon } from '@iconify/react';

const PrevArrow = ({onClick}) => {
  return (
    <div>
        <div className=' bg-white w-8 h-8 flex item-center justify-center text-3xl cursor-pointer z-50'onClick={onClick} >
            <Icon icon="material-symbols:arrow-right-alt-rounded" hFlip={true} />
        </div>
    </div>
  )
}

export default PrevArrow