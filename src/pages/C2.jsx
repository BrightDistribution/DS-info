import React from 'react'
import { Cp3, Ether_con, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function C2() {
  return (
    <div>
      <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
      <div className="flex flex-col items-center">
      <div className='flex text-xl border-b-2 border-orange-300'>Pasul 3</div>
        <header className='flex flex-col items-center'>
          <p className="flex justify-center xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px] mb-[5px]">Ne asiguram ca routerul e pornit si ca este conectat prin cablu la ecran (portul RJ45)</p>
          <img src={Ether_con} alt="ethernet connection" className='w-[60px] h-[60px] mb-[5px]' />
          <img src={Cp3} alt="Cp3" className='max-w-[360px] max-h-[500px]' />
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