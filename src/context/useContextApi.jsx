'use client'
import React, { useContext, useState } from 'react'


const ContextApi = React.createContext()

export const AppProvider = ({children})=>{

    const [menutoogle, setMenuToggle] = useState(false)
    const [contacttoggle, setContactToggle] = useState(false)

    return (
        <ContextApi.Provider value={{
            menutoogle, setMenuToggle, setContactToggle, contacttoggle
        }}>
            {children}
        </ContextApi.Provider>
    )
}


export const useGlobaContext = () =>{
    return useContext(ContextApi)
}