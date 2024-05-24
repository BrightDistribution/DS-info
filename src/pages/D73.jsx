import React from 'react'
import { ArrowDown, Network1, OpenNetwork, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function D73() {
  return (
    <div>
      <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
      <div className="flex flex-col items-center">
      <div className='flex text-xl border-b-2 border-orange-300'>Pasul 8</div>
        <header className='flex flex-col items-center'>
          <p className="flex justify-center xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px] my-[10px]">In meniu intrati in sub-meniul “Network” -- “ Open Network Settings”.</p>
          <img src={Network1} alt="Remote" className='xs:w-[320px] ss:w-[425px] max-h-[500px] my-[10px]' />
          <img src={ArrowDown} alt="arrow" className='w-[50px]' />
          <img src={OpenNetwork} alt="Remote" className='xs:w-[320px] ss:w-[425px] max-h-[500px] my-[10px]' />

        </header>

        <div className='flex flex-row'>
          <a href="/D63" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
          <a href="/D83" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
        </div>
        
      </div>
    </div>
  )
}

export default D73