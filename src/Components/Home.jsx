import React from 'react'
import AvatarGroup from '../assets/Avatar/AvatarGroup.jpg'
import LinkedIn from '../assets/Icons/LinkedInIcon.svg'
import GitHub from '../assets/Icons/GitHubIcon.svg'
import Behance from '../assets/Icons/BehanceIcon.svg'

function Home() {
  return (
    <div className='w-full  min-h-[80vh] flex justify-center items-center font-primary'>
        <div className='bg-primary rounded-4xl w-[95%] md:w-220 px-[30px] py-[50px] md:p-[60px] flex flex-col md:flex-row  text-accent hover:scale-101 hover:rotate-1 duration-400   font-primary gap-8 shadow-[6px_6px_0px_rgba(0,0,0,0.2)]'>
            <div className='flex justify-center items-center'>
                <img className='h-56 w-auto md:h-64 object-cover' src={AvatarGroup} alt="" />
            </div>
            <div className='flex flex-col justify-start items-start gap-7'>
                <div className='name-tag flex flex-col gap-1'>
                    <h1 className='text-[31px] md:text-[42px] font-accent'>Hey! I'm Vismaya</h1>
                    <p className='text-[12px] md:text-[16px] text-[#D3D3D3]'>UI/UX Designer & Creative coder</p>
                </div>
                <div className='description text-[12px] md:text-[16px] '>
                    <p>I care about how things feel.</p>
                    <p>Not just how they look — but how they work, flow, and make sense.</p>
                </div>
                <div className='icons flex gap-4 justify-end w-full'>
                    <div><img className='h-4 cursor-pointer hover:scale-150 duration-300' src={LinkedIn} alt="LinkedIn" /></div>
                    <div><img className='h-4 cursor-pointer hover:scale-150 duration-300' src={Behance} alt="Behance" /></div>
                    <div><img className='h-4 cursor-pointer hover:scale-150 duration-300' src={GitHub} alt="GitHub" /></div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Home