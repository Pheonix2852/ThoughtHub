import React, { ReactNode } from 'react'
import Navbar from "@/components/navbar"

const layout = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <main className='font-work-sans'>
        <Navbar />
        {children}
    </main>
  )
}

export default layout