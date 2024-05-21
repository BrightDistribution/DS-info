import React from 'react'
import { Cp2, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function C2() {
  return (
    <div>
      <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
      <div className="flex flex-col items-center">
        <header className='flex flex-col items-center'>
          <p className="flex justify-center xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px]">Pentru conexiunea la retea vom alege  wifi-ul “TP-LINK_BDA4”</p>
          <img src={Cp2} alt="Cp2" className='max-w-[360px] max-h-[500px]' />
        </header>

        <div className='flex flex-row'>
          <a href="/C1" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
          <a href="/C3" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
        </div>
      
      </div>
    </div>
  )
}

export default C2