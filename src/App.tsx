
import Clientes from "./components/Clientes";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

import Raise from "./assets/raise.svg"
import Project from "./assets/project.svg"
import Timeline from "./assets/timeline.svg"
import Custumers from "./assets/custumers.svg"


export default function App() {
  return (
    <main className="flex flex-col min-h-screen py-4">
      <Header />
      <Hero />
     <Clientes />
     <Services/>

<div className=" flex flex-col py-12 bg-green-100 justify-center items-center">
  <div className="flex items-center gap-5">

   <div className="flex flex-col items-center gap-3">
      <div className=" flex flex-col items-center">
        <img src={Project} alt="" className="w-14" />
        <p className="font-medium" >Projeto Realizado</p>
      </div>
      <h1 className="text-primary text-xl font-semibold"> 250 + </h1>
      
    </div>

    <div className="w-[1px] h-44 bg-zinc-300"></div>

    <div className="flex flex-col items-center gap-3">
      <div className=" flex flex-col items-center">
        <img src={Raise} alt="" className="w-14" />
        <p className="font-medium" >Projeto Realizado</p>
      </div>
      <h1 className="text-primary text-xl font-semibold"> 250 + </h1>
      
    </div>

    <div className="w-[1px] h-44 bg-zinc-300"></div>

    <div className="flex flex-col items-center gap-3">
      <div className=" flex flex-col items-center">
        <img src={Timeline} alt="" className="w-14" />
        <p className="font-medium" >Projeto Realizado</p>
      </div>
      <h1 className="text-primary text-xl font-semibold"> 250 + </h1>
      
    </div>

    <div className="w-[1px] h-44 bg-zinc-300"></div>

    <div className="flex flex-col items-center gap-3">
      <div className=" flex flex-col items-center">
        <img src={Custumers} alt="" className="w-14" />
        <p className="font-medium" >Projeto Realizado</p>
      </div>
      <h1 className="text-primary text-xl font-semibold"> 250 + </h1>
      
    </div>


  </div>

  
</div>
    
   </main>
    
  )
}
