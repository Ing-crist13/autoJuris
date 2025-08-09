"use client";
import { useState } from "react";
import Input from "../components/forms";
import Header from "../components/header";
import NavBar from "../components/navBar";
import Button from "../components/Button";
import { createPortal } from "react-dom";
import { useRouter } from 'next/navigation';



export default function User(){
    const [showModal, setShowModal] = useState(false);
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

  const abrirModal = () => {
    setShowModal(true);
  };

  const fecharModal = () => {
    setShowModal(false);
  };
   

    return(
       <div className="bg-amber-50"> 
    <div className=" pb-18 bg-[#16332E]"> 
        <Header className="object-top mb-30"/>
    </div>
    <div className="flex"> 
    <div className="w-25 items-center"> 
        <NavBar/>
    </div>
    <h1 className="items-center"> Usúarios </h1>
    <div className=" bg-white rounded-[2rem] p-12 w-full max-h-full shadow-xl pb-8 m-20"> 
        <form className="flex flex-row gap-15 flex-wrap"> 
            <div className="flex flex-col"> 
            <label className="text-black ms-2"> CPF </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0 "
                    type="cpf"
                    placeholder=""
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    />
            </div>
            <div className="flex flex-col"> 
            <label className="text-black ms-2"> Nome completo </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0 w-90"
                    type="nome"
                    placeholder=""
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />
            </div>
             <div className="flex flex-col"> 
            <label className="text-black ms-2"> Data nascimento </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0 "
                    type="data"
                    placeholder=""
                    value={nascimento}
                    onChange={(e) => setNascimento(e.target.value)}
                    />
            </div>
             <div className="flex flex-col"> 
            <label className="text-black ms-2"> CEP </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0 "
                    type="cep"
                    placeholder=""
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    />
            </div>
             <div className="flex flex-col"> 
            <label className="text-black ms-2"> Logradouro </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0 "
                    type="logradouro"
                    placeholder=""
                    value={logradouro}
                    onChange={(e) => setLogradouro(e.target.value)}
                    />
            </div>
             <div className="flex flex-col"> 
            <label className="text-black ms-2"> Cidade </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0 "
                    type="cidade"
                    placeholder=""
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    />
            </div>
             <div className="flex flex-col"> 
            <label className="text-black ms-2"> UF </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0 "
                    type="uf"
                    placeholder=""
                    value={uf}
                    onChange={(e) => setUf(e.target.value)}
                    />
            </div>
             <div className="flex flex-col"> 
            <label className="text-black ms-2"> E-mail </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0 "
                    type="email"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
            </div>
             <div className="flex flex-col"> 
            <label className="text-black ms-2"> Telefone </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0 "
                    type="telefone"
                    placeholder=""
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    />
            </div>
             <div className="flex flex-col"> 
            <label className="text-black ms-2"> OAB </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0 "
                    type="oab"
                    placeholder=""
                    value={oab}
                    onChange={(e) => setOab(e.target.value)}
                    />
            </div>
             <div className="flex flex-col"> 
            <label className="text-black ms-2"> UF </label>
            <Input className="border-solid border-1 rounded-lg p-1 border-gray-500 ps-2 outline-0 "
                    type="uf"
                    placeholder=""
                    value={ufoab}
                    onChange={(e) => setUfoab(e.target.value)}
                    />
            </div>
        </form>
        <div className="flex gap-10 items-center justify-center"> 
                <Button  onClick={abrirModal} className="mt-60 w-30" children={undefined}> Cadastrar </Button>
                <Button variant="cancel" onClick={handleCancel} className="mt-60" children={undefined}> Cancelar </Button>
        </div>
    </div>
       
    </div>
         {showModal && createPortal (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] ">

            <div
              className=""
              onClick={fecharModal}
            ></div>
            <div className="relative bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center z-[10000] ">
              <h2 className="text-xl font-bold text-green-700">Cadastro realizado!</h2>
              <p className="mt-2 text-gray-600">
                Seu cadastro foi concluído com sucesso.
              </p>
              <div className="mt-4 flex justify-center">
                <button
                  onClick={fecharModal}
                  className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
                >
                  OK
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
    
    )
}