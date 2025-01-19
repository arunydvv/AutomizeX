import  ProfileForm  from '@/components/Forms/profile-form'
import React from 'react'
type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 relative   '>
      
      <h1 className='text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b'>
        Settings
      </h1>
      <div className='flex flex-col gap-10 p-6'>
        <div className='profile-pic'>
          <h2 className='text-2xl font-bold '>User profile</h2>
          <p className='text-base text-white/50'>Add or update your information</p>
        </div>
        <ProfileForm />



      </div>
    </div>
  )
}

export default page