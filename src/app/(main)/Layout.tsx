"use client"
import Sidebar from '@/components/Sidebar'
import React from 'react'
type Props = {Children : React.ReactNode}

const Layout = (props : Props) => {
  return (
    <div className='flex overflow-hidden h-screen'>
      <Sidebar />
          <div className='w-full '>
              {props.Children}
          </div>
    </div>
  )
}

export default Layout