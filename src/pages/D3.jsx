import React from 'react'
import { ArrowDown, Network1, Network2, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function D3() {
  return (
    <div>
      <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
      <div className="flex flex-col items-center">
      <div className='flex text-xl border-b-2 border-orange-300'>Pasul 4</div>
        <header className='flex flex-col items-center'>
          <p className="flex justify-center xs:w-[320px] ss:w-[425px] xs:ml-[30px] sm:max-w-[600px] lg:max-w-[1150px]">Intrati in sub-meniul “Network” si selectati “Network Status”.</p>
          <img src={Network1} alt="Network" className='xs:w-[320px] ss:w-[425px] max-h-[500px] my-[10px]' />
          <img src={ArrowDown} alt="arrow" className='w-[50px]' />
          <img src={Network2} alt="Network" className='xs:w-[320px] ss:w-[425px] max-h-[500px] my-[10px]' />

        </header>

        <div className='flex flex-row'>
          <a href="/D22" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
          <a href="/D4" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
        </div>
        
      </div>
    </div>
  )
}

export default D3