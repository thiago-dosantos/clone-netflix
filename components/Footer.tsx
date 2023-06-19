import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center place-content-between bg-zinc-900 mt-8 h-[80px] bottom-0 w-full'>
      
      <div className="flex justify-center p-4">
        Create by <a href='https://thiago-dosantos.github.io/'>&nbsp;Thiago</a>
      </div>

      <div className="flex justify-center p-4">
        © All image rights are reserved by<a href='https://netflix.com/'>&nbsp;Netflix</a>
      </div>
    
    </div>
  )
}

export default Footer;