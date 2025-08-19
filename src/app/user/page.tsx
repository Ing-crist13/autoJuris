"use client";
import { useState } from "react";
import Input from "../components/forms";
import Header from "../components/header";
import NavBar from "../components/navBar";
import Button from "../components/Button";
import { useRouter } from 'next/navigation';
import { Modal } from "../components/Modal";



export default function User(){
    const[open, setOpen] = useState(false);

    const [cpf, setCpf] = useState("");
    const [nome, setNome] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [cep , setCep] = useState("");
    const [logradouro , setLogradouro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [oab, setOab] = useState("");
    const [ufoab   , setUfoab] = useState("");
    const router = useRouter();

        const handleCancel = () => {
        router.push('/home');
        };

    return(
       <div className="bg-amber-50  "> 
    <div className=" pb-18 bg-[#16332E]"> 
        <Header className="object-top mb-30"/>
    </div>
    <div className="flex items-center"> 
    <div className="object-left w-20 items-center "> 
        <NavBar/>
    </div>
       
    <div className="flex flex-col justify-center bg-white rounded-[2rem] p-12 w-300  max-h-full shadow-xl pb-8 m-20 ms-80 "> 
         <h1 className="text-3xl font-inter font-light text-center text-gray-800 mb-10 border-b-1 border-b-gray-500 ms-10 me-10 ">Cadastrar usuários</h1>
        <form className="flex flex-row gap-15 flex-wrap"> 
            <div className="flex flex-col"> 
            <label className="text-black ms-2"> CPF </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0  text-black"
                    type="cpf"
                    placeholder=""
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    />
            </div>
            <div className="flex flex-col"> 
            <label className="text-black ms-2"> Nome completo </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0 w-90  text-black"
                    type="nome"
                    placeholder=""
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />
            </div>
             <div className="flex flex-col"> 
            <label className="text-black ms-2"> Data nascimento </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0  text-black "
                    type="data"
                    placeholder=""
                    value={nascimento}
                    onChange={(e) => setNascimento(e.target.value)}
                    />
            </div>
             <div className="flex flex-col"> 
            <label className="text-black ms-2"> CEP </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0 text-black "
                    type="cep"
                    placeholder=""
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    />
            </div>
             <div className="flex flex-col"> 
            <label className="text-black ms-2"> Logradouro </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0  text-black"
                    type="logradouro"
                    placeholder=""
                    value={logradouro}
                    onChange={(e) => setLogradouro(e.target.value)}
                    />
            </div>
             <div className="flex flex-col"> 
            <label className="text-black ms-2"> Cidade </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0  text-black"
                    type="cidade"
                    placeholder=""
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    />
            </div>
             <div className="flex flex-col"> 
            <label className="text-black ms-2"> UF </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0  text-black"
                    type="uf"
                    placeholder=""
                    value={uf}
                    onChange={(e) => setUf(e.target.value)}
                    />
            </div>
             <div className="flex flex-col"> 
            <label className="text-black ms-2"> E-mail </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0 text-black"
                    type="email"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
            </div>
             <div className="flex flex-col"> 
            <label className="text-black ms-2"> Telefone </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0 text-black "
                    type="telefone"
                    placeholder=""
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    />
            </div>
             <div className="flex flex-col"> 
            <label className="text-black ms-2"> OAB </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0  text-black"
                    type="oab"
                    placeholder=""
                    value={oab}
                    onChange={(e) => setOab(e.target.value)}
                    />
            </div>
             <div className="flex flex-col"> 
            <label className="text-black ms-2"> UF </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0  text-black"
                    type="uf"
                    placeholder=""
                    value={ufoab}
                    onChange={(e) => setUfoab(e.target.value)}
                    />
            </div>
            <div className="mb-4 flex flex-col">
                <label className="text-black ms-2">Perfil de Usuário</label>
                <select className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0 text-black">
                <option value="">Selecione...</option>
                <option value="Administrador">N1 - Administrador</option>
                <option value="Gestor">N2 - Advogado </option>
                <option value="Usuário Comum">N3 - Colaborador </option>
                </select>

                
            </div>
            <Modal isOpen={open}/>
        </form>
        <div className="flex gap-10 items-center justify-center"> 
                <Button  onClick={() => setOpen(!open)} className=" w-30" children={undefined}> Cadastrar </Button>
                <Button variant="cancel" onClick={handleCancel} className="" children={undefined}> Cancelar </Button>
        </div>
    </div>
   
       
    </div>
        
    </div>
    
    )
}