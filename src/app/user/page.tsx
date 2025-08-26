"use client";
import { useState } from "react";
import Input from "../components/forms";
import Header from "../components/header";
import NavBar from "../components/navBar";
import Button from "../components/Button";
import { useRouter } from 'next/navigation';
import { Modal } from "../components/Modal"
import { useForm  } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";





export default function User(){
   
    
    const {register, handleSubmit} = useForm();
    const [modalState, setModalState] = useState({
    isOpen: false,
    type: null, // 'cancelamento' ou 'confirmacao'
  });
   

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

    

    //função para abrir o modal 
    const handleOpenModal = (type) => {
    setModalState({ isOpen: true, type: type });
  };
    //função para fechar o modal
     const handleCloseModal = () => {
    setModalState({ isOpen: false, type: null });
  };

    const handleConfirmSave = () => {
    // Lógica para salvar os dados
    console.log('Dados salvos!');
    // ... redirecionar, exibir mensagem de sucesso, etc.
    handleCloseModal();
  };

    const handleConfirmCancel = () => {
    // Lógica para limpar o formulário e redirecionar
    
    handleCloseModal();
    router.push('/listUser');
  };


       

    return(
       <div className="bg-amber-50  "> 
    <div className=" pb-18  bg-[#16332E] "> 
        <Header className="object-top"/>
    </div>
    <div className="flex "> 
    <div> 
        <NavBar/>
    </div>
       
    <div className="flex flex-col  gap-10 bg-white rounded-[2rem] p-12 w-300  shadow-xl pb-8 m-20 ms-80 "> 
         <h1 className="text-3xl font-inter font-light text-center text-gray-800 mb-10 border-b-1 border-b-gray-500 ms-10 me-10 ">Cadastrar usuários</h1>
        <form   className="flex flex-row gap-15 flex-wrap"> 

            <Input 
                    label="CPF"
                    type="number"
                    name="cpf"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder=""
                    
                 
                   
                    />
          
            <Input
                    label="Nome completo"
                    type="text"
                    name="name"
                    placeholder=""
                    value={nome}
                    
                    onChange={(e) => setNome(e.target.value)}
                    />
 
            <Input 
                    label="Data de nascimento"     
                    type="date"
                    name="date"
                    placeholder=""
                    value={nascimento}
                    onChange={(e) => setNascimento(e.target.value)}
                    />
        <div className="flex gap-15"> 
            <Input 
                    label="CEP"
                    type="number"
                    name="cep"
                    placeholder="00000-00"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    />

          
            <Input 
                    label="Logradouro"
                    type="text"
                    name="logradouro"
                    placeholder="Rua, av."
                    value={logradouro}
                    onChange={(e) => setLogradouro(e.target.value)}
                    />

            <Input 
                    label="Cidade"
                    type="text"
                    name="cidade"
                    placeholder=""
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    />
            <Input 
                    label="UF"
                    type="text"
                    name="uf"
                    placeholder=""
                    value={uf}
                    
                    onChange={(e) => setUf(e.target.value)}
                    
                    />
           
           </div>
            <Input 
                    label="E-mail"
                    type="email"
                    name="email"
                    placeholder="emaildousuario@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
         
            
            <Input 
                    label="Telefone"
                    type="tel"
                    name="telefone"
                    placeholder="(00)00000-0000"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    />
         
             
            <Input 
                    label="Nº OAB"
                    type="number"
                    name="oab"
                    placeholder=""
                    value={oab}
                    onChange={(e) => setOab(e.target.value)}
                    />
            
             
            <Input
                    label="UF OAB"
                    type="text"
                    name="ufOab"
                    placeholder="UF OAB"
                    value={ufoab}
                    onChange={(e) => setUfoab(e.target.value)}
                    />
          
            <div className="mb-4 flex flex-col">
                <label className="text-black ms-2">Perfil de Usuário</label>
                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                focus:outline-none focus:shadow-outline">
                <option value="">Selecione...</option>
                <option value="Administrador">N1 - Administrador</option>
                <option value="Gestor">N2 - Advogado </option>
                <option value="Usuário Comum">N3 - Colaborador </option>
                </select>

                
            </div>
            
            {/* Renderização da Modal */}
    {modalState.type === 'cancelamento' && (
      <Modal
        isOpen={modalState.isOpen}
        title="Deseja realmente cancelar?"
        message="Os dados serão perdidos e a ação não poderá ser desfeita."
        buttons={
          <>
            <button
              onClick={handleConfirmCancel}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              OK
            </button>
            <button
              onClick={handleCloseModal}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Voltar
            </button>
          </>
        }
      />
    )}

    {modalState.type === 'confirmacao' && (
      <Modal
        isOpen={modalState.isOpen}
        title="Confirmar Cadastro?"
        message="Confirme os dados para prosseguir com o cadastro do usuário."
        buttons={
          <>
            <button
              onClick={handleConfirmSave}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Confirmar
            </button>
            <button
              onClick={handleCloseModal}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Cancelar
            </button>
          </>
        }
      />
    )}
        </form>
        <div className="flex gap-10 items-center justify-center"> 
                <Button  onClick={() => handleOpenModal('confirmacao')} className=" w-30" children={undefined}> Cadastrar </Button>
                <Button variant="cancel" onClick={() => handleOpenModal('cancelamento')} className="" children={undefined}> Cancelar </Button>
        </div>
    </div>
  
    </div>
        
    </div>
    
    )
}