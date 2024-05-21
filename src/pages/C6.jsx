import React from 'react'
import { Cp6, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function C6() {
  return (
    <div>
      <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
      <div className="flex flex-col items-center">
        <header className='flex flex-col items-center'>
          <p className="flex justify-center xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px]">In meniul “Player Selection” alegem <br />optiunea “MagicINFO S Player”</p>
          <img src={Cp6} alt="Cp6" className='max-w-[360px] max-h-[500px]' />
        </header>

        <div className='flex flex-row'>
          <a href="/C5" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
          <a href="/C7" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
        </div>
      
      </div>
    </div>
  )
}

export default C6