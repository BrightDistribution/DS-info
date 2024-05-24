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

            <p className="mt-[10px]">Denumire WI-FI: </p>
            <div className="mb-[10px] text-lg font-semibold border-2 border-orange-300">TP-Link_BDA4</div>
            <p className="mt-[10px]">Adresa Server: </p>
            <div className="mb-[10px] text-lg font-semibold border-2 border-orange-300">ds4.dsaas.ro</div>
            <p className="mt-[10px]">Telefon suport: </p>
            <a href="tel:+40215394507" className="mb-[10px] text-lg font-semibold border-2 border-orange-300">+40215394507</a>

            <a href="./Home" className='flex justify-start'><ButtonSm text="Inapoi"></ButtonSm></a>
            <img src={lineLogo2} alt="Line Logo" className="size-2em mt-[20px]" />
        </div>
      </div>
    );
}

export default Info