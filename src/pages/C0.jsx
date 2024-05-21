import React from 'react'
import { Remote2, lineLogo} from '../assets'
import ButtonSm from '../components/ButtonSm'

function C0() {
  return (
    <div>
      <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
      <div className="flex flex-col items-center">
        <header className='flex flex-col items-center'>
          <div className='flex justify-center xs:max-w-[320px] sm:max-w-[600px] lg:max-w-[1150px]'>Pentru Navigarea meniului vom folosi</div>
          <div className='text-red-600'>SAGETILE</div>
          <div className='xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px]'>si pentru a selecta vom folosi tasta</div>
          <div className='text-green-600'>ENTER</div>
          <div className='xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px]  mb-[5px]'>Folositi butonul stanga sus pentru a porni ecranul.</div>
          <img src={Remote2} alt="Remote" className='max-w-[360px] max-h-[500px]' />
        </header>

        <div className='flex flex-row'>
          <a href="/Home" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
          <a href="/C1" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
        </div>
      
      </div>
    </div>
  )
}

export default C0