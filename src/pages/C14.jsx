import React from 'react'
import { RemoteHome, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function C14() {
  return (
    <div>
      <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
      <div className="flex flex-col items-center">
      <div className='flex text-xl border-b-2 border-orange-300'>Pasul 16</div>
        <header className='flex flex-col items-center'>
          <p className="flex justify-center xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px]">Intra in fereastra de Home ecranului apasand butonul “HOME” de pe telecomanda.</p>
          <img src={RemoteHome} alt="Remote" className='max-w-[360px] max-h-[500px]' />
        </header>

        <div className='flex flex-row'>
          <a href="/C13" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
          <a href="/C15" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
        </div>
        
      </div>
    </div>
  )
}

export default C14