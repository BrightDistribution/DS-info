import React from 'react'
import { lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'
import ButtonBg from '../components/ButtonBg'

function D53() {
  return (
    <div>
      <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
      <div className="flex flex-col items-center">
        <header className='flex flex-col items-center'>
          <p className="flex justify-center xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px]">Ecranul nu este conectat la reteaua WI-FI. Verifica daca reteaua este pornita. <br /><br /> Cauta pe telefon la Wi-Fi reteaua: TP-Link_BDA4.</p>
        </header>
        <div>Exista reteaua TP-Link_BDA4?</div>
        <a href="/D63"><ButtonBg text="Da, exista"></ButtonBg></a>
        <a href="/D52"><ButtonBg text="Nu exista"></ButtonBg></a>

        <div className='flex flex-row mt-[50px]'>
          <a href="/D4" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
        </div>

      </div>

    </div>
  )
}

export default D53