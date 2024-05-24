import React from 'react'
import { ArrowDown, Network1, Network3, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function D61() {
  return (
    <div>
      <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
      <div className="flex flex-col items-center">
      <div className='flex text-xl border-b-2 border-orange-300'>Pasul 7</div>
        <header className='flex flex-col items-center'>
          <p className="flex justify-center xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px] my-[10px]">Intrati in sub-meniul “Network” si selectati “Server Network Settings”</p>
          <img src={Network1} alt="Remote" className='xs:w-[320px] ss:w-[425px] max-h-[500px] my-[10px]' />
          <img src={ArrowDown} alt="arrow" className='w-[50px]' />
          <img src={Network3} alt="Remote" className='xs:w-[320px] ss:w-[425px] max-h-[500px] my-[10px]' />

        </header>

        <div className='flex flex-row'>
          <a href="/D51" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
          <a href="/D7" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
        </div>
        
      </div>
    </div>
  )
}

export default D61