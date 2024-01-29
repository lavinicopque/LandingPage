import Logo from "../assets/logo.svg"
import { Button } from "./Button";

const Header = () => {
   return (   
   <header className="flex items-center justify-between py-5 px-32">
    <img src={Logo} alt=""/>

    <div className='flex items-center gap-8'>
      <a href="#">inicio</a>
      <a href="#services">Serviço</a>
      <a href="#portifolio"> Nosso portifolio</a>
      <Button title="Fale conosco" size="sm"></Button>
    </div>

  </header> );
}
 
export default Header;