import React from 'react'
import { SNS, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function D7() {
  return (
    <div>
      <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
      <div className="flex flex-col items-center">
        <header className='flex flex-col items-center'>
          <p className="flex justify-center xs:w-[320px] ss:w-[425px] sm:max-w-[600px] lg:max-w-[1150px] my-[30px]">Selectati "Connect to Server"</p>
          <img src={SNS} alt="SNS" className='xs:w-[320px] ss:w-[425px] max-h-[500px]' />
        </header>

        <div className='flex flex-row mt-[40px]'>
          <a href="/D61" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
          <a href="/D8" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
        </div>
        
      </div>
    </div>
  )
}

export default D7