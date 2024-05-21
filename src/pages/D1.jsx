import React from 'react'
import { lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function D1() {
  return (
    <div>
      <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
      <div className="flex flex-col items-center">
        <header className='flex flex-col items-center'>
          <p className="flex justify-center xs:max-w-[310px] sm:max-w-[600px] lg:max-w-[1150px]">Echipamentul este format din 2 componente: router si ecran. Asigura-te ca ambele dispozitive sunt conectate la priza.</p>
        </header>

        <p className='warn my-[70px]'>ATENTIE! Aveti nevoie de o telecomanda.</p>

        <p className='flex xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px]'>Incercati sa porniti cu telecomanda ecranul si verificati daca va puteti conecta cu telefonul la reteaua de wi-fi TP-Link_BDA4</p>

        <div className='flex flex-row mt-[50px]'>
          <a href="/Home" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
          <a href="/D2" className='flex justify-end'><ButtonSm text="Inainte"></ButtonSm></a>
        </div>
        
      </div>
    </div>
  )
}

export default D1