import React, {useEffect} from 'react'
import { lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'
import axios from 'axios';

function D52() {

  const baseURL = "http://127.0.0.1:3000";

  useEffect(() =>{
    axios.get(`${baseURL}/count`);
  });

  return (
    <div>
      <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
      <div className="flex flex-col items-center">
      <div className='flex text-xl border-b-2 border-orange-300'>Pas Final</div>
        <header className='flex flex-col items-center'>
          <p className="flex justify-center xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px]">Router-ul nu are semnal sau nu e functional; incearca sa restartezi tot raftul. <br /> <br />Contacteaza-ne pentru asistenta.</p>
        </header>

        <p className="my-[30px]">Telefon suport: <br /><a href="tel:+40215394507"><span className="spectext">+40215394507</span></a></p>

        <div className='flex flex-row mt-[50px]'>
          <a href="/D4" className='flex justify-start mr-[40px]'><ButtonSm text="Inapoi"></ButtonSm></a>
          <a href="/Home" className='flex justify-end'><ButtonSm text="Finalizare"></ButtonSm></a>
        </div>

      
        
      </div>
    </div>
  )
}

export default D52