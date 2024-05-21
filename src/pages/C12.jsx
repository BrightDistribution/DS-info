import React from 'react'
import { Cp12, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function C12() {
  return (
    <div>
      <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
      <div className="flex flex-col items-center">
        <header className='flex flex-col items-center'>
          <p className="flex justify-center xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px]">Pentru setarea pinului vom trece peste FARA a seta un pin. Facem acest lucru prin a apasa sageata in dreapta pe telecomanda</p>
          <img src={Cp12} alt="Cp12" className='max-w-[360px] max-h-[500px]' />
        </header>

        <div className='flex flex-row'>
          <a href="/C11" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
          <a href="/C13" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
        </div>
        
      </div>
    </div>
  )
}

export default C12