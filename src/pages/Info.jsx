import ButtonSm from "../components/ButtonBg";
import { Logo, lineLogo, lineLogo2 } from "../assets";

function Info(){
    return(
      <div>
        <a href="/Home" className='flex flex-row items-center'><img src={lineLogo} alt="Line Logo" /> <span className='font-semibold homeB'>ACASA</span></a>
        <div className="flex flex-col items-center">
            <header className="flex flex-col items-center">
                <img src={Logo} alt="Logo" />
                <p className="flex justify-center my-[10px]">
                    Informatii necesare depanarii sau configurarii de ecrane:
                </p>
            </header>

            <p className="my-[10px]">Denumire WI-FI: <br /> <span className="spectext">TP-Link_BDA4</span></p>
            <p className="my-[10px]">Adresa Server: <br /> <span className="spectext">ds4.dsaas.ro</span></p>
            <p className="my-[10px]">Telefon suport: <br /> <a href="tel:+40215394507"><span className="spectext">+40215394507</span></a></p>

            <a href="./Home" className='flex justify-start'><ButtonSm text="Inapoi"></ButtonSm></a>
            <img src={lineLogo2} alt="Line Logo" className="size-2em mt-[20px]" />
        </div>
      </div>
    );
}

export default Info