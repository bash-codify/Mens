' use client'

import Bag from "@/Components/cartbag/Bag"



export const metadata = {
  
  title: ` Your Shopping Bag`,
  description: 'This is an E-commerce website',
}


const BagPage = () => {

  return (

   <main>
    <Bag/>
   </main>

  )
}

export default BagPage