import HomeBtn from '@/components/HomeBtn'
import React from 'react'

export default function SubPagesLayout({children}) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-20 px-8 xs:px-16 lg:px-32'>
        <HomeBtn />
        {children}
    </div>
  )
}
