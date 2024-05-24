import ButtonBg from "../components/ButtonBg";
import React, {useEffect} from "react";
import { Logo, lineLogo2 } from "../assets";
import axios from 'axios';


function Home(){

    const baseURL = "http://127.0.0.1:3000";

    useEffect(() =>{
      axios.get(`${baseURL}/count`);
    });

    return(
        <div className="flex flex-col items-center">
            <header className="flex flex-col items-center">
                <img src={Logo} alt="Logo" />
                <p className="flex justify-center my-[10px] xs:max-w-[300px] sm:max-w-[600px] lg:max-w-[1150px]">
                    Alegeti butonul potrivit operatiei pe care trebuie sa o faceti
                </p>
            </header>

            <a href="/C0"><ButtonBg text="Configurare"></ButtonBg></a>
            <a href="/D1"><ButtonBg text="Diagnoza"></ButtonBg></a>
            <a href="/Info"><ButtonBg text="Informatii"></ButtonBg></a>

            <img src={lineLogo2} alt="Line Logo" className="size-2em" />
        </div>
    );
}

export default Home