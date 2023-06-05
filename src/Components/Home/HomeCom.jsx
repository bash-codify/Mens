import React from 'react'
import Banners from './banner/Banners'
import HightLight from './HightLight/HightLight'
import Posters from './Posters'
import For_Him from './For_Him'
import NewsLetter from './NewsLetter'



const HomeCom = () => {
  return (
    <div >
        <Banners />
        <HightLight />
        <Posters/>
        <For_Him/>
        <NewsLetter/>
    </div>
  )
}

export default HomeCom