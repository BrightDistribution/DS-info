import React from 'react'
import { ArrowDown, TPLink, Wireless, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function D83() {
  return (
    <div>
      <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
      <div className="flex flex-col items-center">
      <div className='flex text-xl border-b-2 border-orange-300'>Pasul 9</div>
        <header className='flex flex-col items-center'>
          <p className="flex justify-center xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px] my-[10px]">Pentru meniul network type selecteaza WIRELESS si dupa selecteaza reteaua TP-Link_BDA4.</p>
          <img src={Wireless} alt="Remote" className='xs:w-[320px] ss:w-[425px] max-h-[500px] my-[10px]' />
          <img src={ArrowDown} alt="arrow" className='w-[50px]' />
          <img src={TPLink} alt="Remote" className='xs:w-[320px] ss:w-[425px] max-h-[500px] my-[10px]' />
        </header>

        <div className='flex flex-row'>
          <a href="/D73" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
          <a href="/D93" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
        </div>
        
      </div>
    </div>
  )
}

export default D83