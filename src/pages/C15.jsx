import React from 'react'
import { Cp14, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function C15() {
  return (
    <div>
      <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
      <div className="flex flex-col items-center">
      <div className='flex text-xl border-b-2 border-orange-300'>Pasul 17</div>
        <header className='flex flex-col items-center'>
          <p className="flex justify-center xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px]">Selectati optiunea “Player”</p>
          <img src={Cp14} alt="Cp14" className='xs:max-w-[300px] sm:max-w-[600px] max-h-[500px]' />
        </header>

        <div className='flex flex-row'>
          <a href="/C14" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
          <a href="/C16" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
        </div>
        
      </div>
    </div>
  )
}

export default C15
