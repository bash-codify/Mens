import React from 'react'
import Banners from './banner/Banners'
import HightLight from './HightLight/HightLight'
import Posters from './Posters'
import Flyers from './flyers'
import NewsLetter from './NewsLetter'



const HomePage = () => {
  return (
    <div>
        <Banners/>
        <HightLight/>
        <Posters/>
        <Flyers/>
        <NewsLetter/>
    </div>
  )
}

export default HomePage