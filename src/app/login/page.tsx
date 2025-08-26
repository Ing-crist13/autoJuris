"use client";
import Header from "@/app/components/header";
import Input from "@/app/components/forms";
import { useState } from "react";
import Button from "@/app/components/Button";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const router = useRouter();
    const handleAcess = () => {
    router.push('/home');
    };

  return (
    <div className=" min-h-screen bg-gradient-to-t from-[#16332E] to-[#1E5959] flex items-center justify-center">
      <div >
          <Header/>
      </div>

      <div className="flex flex-col bg-white rounded-[2rem] p-12 w-full max-w-sm shadow-xl pb-8"> 
        <h1 className="text-3xl font-inter font-thin text-center text-gray-800 mb-4" >LOGIN</h1>
        <form className="flex flex-col "> 
          <div className=""> 
            <Input 
                    label=""
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div> 
        <Input 
          type="password"
          placeholder="Senha"
          name="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        </div>
        <div className="flex gap-3 items-center mt-4"> 
          <input type="checkbox" id="remember" className="w-4 h-4 " />
          <label htmlFor="remember" className="text-gray-600">Lembrar de mim</label>
        </div>
        </form>
        <div className="flex gap-4">  
        <Button onClick={handleAcess} className="w-32 items-center"> Acessar </Button>
          <Button className="w-32 items-center" onClick={undefined} > Cadastrar </Button>
        </div>
         <Link href="/recoverPassword" className="text-gray-500 text-sm/1 mt-6"> Esqueci minha senha </Link>
      </div>
  </div>
  );
}