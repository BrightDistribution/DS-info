import React, {useState, useRef} from 'react'
import {Cp13, Cp14, lineLogo } from '../assets'
import ButtonSm from '../components/ButtonSm'

function C13() {

  const [select, setSelect] = useState(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef4 = useRef(null);

  function handleClick1(){
    setSelect("/C15");
    inputRef1.current.focus();
    inputRef1.current.style.border = "3px solid #FFB74D";
    inputRef2.current.style.border = "";
    inputRef4.current.style.display = "block";

  }
  function handleClick2(){
    setSelect("/C14");
    inputRef2.current.focus();
    inputRef1.current.style.border = "";
    inputRef2.current.style.border = "3px solid #FFB74D";
    inputRef4.current.style.display = "block";
  }

  return (
    <div>
      <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
      <div className="flex flex-col items-center">
      <div className='flex text-xl border-b-2 border-orange-300'>Pasul 15</div>
        <header className='flex flex-col items-center'>
          <p className="flex justify-center xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px]">La finalizarea configurarii, unul din urmatoarele ecrane va aparea. Selectati ecranul care se potriveste cu situatia si apasati inainte pentru pasul urmator.</p>
          <img src={Cp14} alt="internet" onClick={handleClick1} ref={inputRef1} className='xs:w-[320px] ss:w-[425px] max-h-[500px] p-2' />
          <img src={Cp13} alt="No internet" onClick={handleClick2} ref={inputRef2} className='xs:w-[320px] ss:w-[425px] max-h-[500px] p-2' />
        </header>

        <div className='flex flex-row'>
          <a href="/C12" className='flex justify-start'><ButtonSm text="Inapoi"></ButtonSm></a>
          <a href={select} className={`ml-[40px] justify-end hidden`} ref={inputRef4}><ButtonSm text="Inainte"></ButtonSm></a>
        </div>
        
      </div>
    </div>
  )
}

export default C13