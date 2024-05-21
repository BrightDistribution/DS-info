import React from 'react'
import { Cp1, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function C1() {
  return (
    <div>
      <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
      <div className="flex flex-col items-center">
        <header className='flex flex-col items-center'>
          <p className="flex justify-center xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px]">
            Configurarea incepe cu aceasta fereastra. Selectati “Hi!”
          </p>
          <img src={Cp1} alt="Cp1" className='max-w-[360px] max-h-[600px]' />
        </header>

        <div className='flex flex-row'>
          <a href="/C0" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
          <a href="/C2" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
        </div>
      
      </div>
    </div>  
  )
}

export default C1