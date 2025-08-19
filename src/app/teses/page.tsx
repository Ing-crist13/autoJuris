"use client";
import { useState } from "react";
import Header from "../components/header";
import NavBar from "../components/navBar";
import Input from "../components/forms";
import Button from "../components/Button";
import { Modal } from "../components/Modal";



export default function Teses(){

    const[open, setOpen] = useState(false);

    const [nomeTese, setNomeTese] = useState("");
    const [areaAssociada, setArea] = useState("");
    return(
         <div className="bg-amber-50  "> 
    <div className=" pb-18 bg-[#16332E]"> 
        <Header className="object-top mb-30"/>
    </div>
    <div className="flex items-center"> 
    <div className="w-20 items-center"> 
        <NavBar/>
    </div>
       
    <div className="flex flex-col justify-center bg-white rounded-[2rem] p-12 w-300  max-h-full shadow-xl pb-8 m-20 ms-80 text-black  "> 
         <h1 className="text-3xl font-inter font-light text-center text-gray-800 mb-10 border-b-1 border-b-gray-500  ms-10 me-10">Cadastrar teses</h1> 
         <form className="flex flex-row gap-15 flex-wrap"> 
                     <div className="flex flex-col"> 
                     <label className="text-black ms-2"> Nome da tese </label>
                     <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0  text-black"
                             type="nomeTese"
                             placeholder=""
                             value={nomeTese}
                             onChange={(e) => setNomeTese(e.target.value)}
                             />
                     </div>
                     <div className="flex flex-col"> 
                     <label className="text-black ms-2"> Area Associada </label>
                     <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0 w-90  text-black"
                             type="areaAssociada"
                             placeholder=""
                             value={areaAssociada}
                             onChange={(e) => setArea(e.target.value)}
                             />
                            
                     </div>
                      <Modal isOpen={open}/>
                    </form>
            <div className="flex gap-10 items-center justify-center"> 
                <Button onClick={() => setOpen(!open)} className={undefined} children={undefined}> Cadastrar </Button>
                <Button  variant="cancel" onClick={undefined} className={undefined} children={undefined}> Cancelar </Button>
                    </div>
                
        </div>

        </div>  
        </div>
        
    )
}