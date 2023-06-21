'use client'

import HomeCom from "@/Components/Home/HomeCom";
import Loading from "@/Components/loading/Loading";
import { useEffect, useState } from "react";






export default  function Home() {

  const [isloading, setIsLoading] = useState(true);
  const [isopen, setIsOpen] = useState(false)

  useEffect(()=>{

 const setTime =  setTimeout(()=>{

  setIsLoading(false);
  },3800);

  return () => clearTimeout(setTime);

  }, [isloading])


  if (isloading) {

    return(

      <Loading/>

    )
    
  }

  if(!isloading) {
    
    return (

      <main onMouseLeave={()=> setIsOpen(false)}>

      <HomeCom isopen={isopen} setIsOpen={setIsOpen}/>

      </main>
    )

  }
}
