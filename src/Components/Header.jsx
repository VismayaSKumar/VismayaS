import React from 'react'
import menuIcon from '../assets/Icons/MenuIcon.svg'
import avatarSmall from '../assets/Avatar/AvatarSmallRounded.jpg'

function Header() {
  return (
    <div className='w-full h-25 flex justify-between items-center   '>
        <div className='flex items-center justify-center'>
          <img src={avatarSmall} alt="Avatar" className='h-22 hover:scale-106 duration-200 cursor-pointer'  />
        </div>
        <div className='hidden md:flex gap-12 bg-primary rounded-4xl px-20 py-3 text-accent font-DMmed cursor-pointer text-[16px] shadow-[0_4px_4px_rgba(0,0,0,0.3)] '>
            <div className='hover:opacity-70 duration-300'>Projects</div>
            <div className='hover:opacity-70 duration-300'>About</div>
            <div className='hover:opacity-70 duration-300'>Resume</div>
        </div>
        <div className=''>
           <img src={menuIcon} alt="Menu Icon" className='w-12 md:hidden' /> 
        </div>
    </div>
  )
}
export default Header