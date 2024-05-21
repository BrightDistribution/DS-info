import React from 'react'
import { Cp3, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function C3() {
  return (
    <div>
      <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
      <div className="flex flex-col items-center">
        <header className='flex flex-col items-center'>
          <p className="flex justify-center xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px]">Ca parola pentru WI-FI vom introduce  parola: “Fantastic6”. Pentru a tasta litere cu majuscula selectati</p>
          <div className='text-red-600'>SHIFT</div>
          <img src={Cp3} alt="Cp3" className='max-w-[360px] max-h-[500px]' />
        </header>

        <div className='flex flex-row'>
          <a href="/C2" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
          <a href="/C4" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
        </div>
      
      </div>
    </div>
  )
}

export default C3