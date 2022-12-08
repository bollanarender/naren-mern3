import React from 'react'

function LeftSider() {
  return (
    <div className='fixed left-0 bottom-0 px-10 sm:static'>
    <div className='flex flex-col items-center'>
      <div className='flex flex-col gap-3 sm:flex-row text-2xl'>
      <a href="mailto:narnder.bolla@integrify.io target = _blank"><i class="ri-mail-fill text-gray-600 "></i></a>
      
      <a href="https://www.linkedin.com/in/narender-reddy-bolla/"><i class="ri-linkedin-box-fill text-gray-600 "></i></a>
      <a href="https://github.com/bollanarender"><i class="ri-github-fill text-gray-600 "></i></a>
      
      </div>
      <div className='w-[1px] h-32 bg-[#125f63] sm:hidden'>
      </div>
      </div>
    </div>
  )
}

export default LeftSider
