import HeroImg from "../assets/hero.svg"
import { Button } from "./Button"

const Hero  = () => {
    return ( 
        <div className="flex items-center w-full px-32 mt-12">

        <div className=" flex flex-col w-[440px] gap-4">
    <h1 className="text-4xl font-semibold">Aumente a fidelidade e a satisfação de seus clientes.</h1>

    <span className="text-md">Ajudamos empresas como a sua a conquistar mais clientes, se destacar dos concorrentes e ganhar mais dinheiro.</span>

    <div className="mt-12">
      <Button title="Comece já!" size="md"/>
    </div>
  </div>
  <img src={HeroImg} className="w-[35rem]" alt=" " />

  </div>


 );
}
 
export default Hero ;