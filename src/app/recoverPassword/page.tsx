"use client";
import Header from "../components/header";
import '@/app/globals.css';
import Input from "@/app/components/forms";
import { useState } from "react";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";


export default function RecoverPassword(){
    const [email, setEmail] = useState ("");
    const router = useRouter();
    const handleCancel = () => {
    router.push('/login');
    };

    return(
       <div className=" min-h-screen bg-gradient-to-t from-[#16332E] to-[#1E5959] flex items-center justify-center">
          <Header/>
        <div className="flex flex-col bg-white rounded-[2rem] p-10 pb-8  max-w-sm shadow-xl  items-center gap-3"> 
            <h1 className="text-3xl font-inter font-thin text-center text-gray-800 mb-4" > Recuperar senha </h1>
            <form> 
                <Input className=" outline-none text-md text-gray-700 placeholder-gray-400 bg-transparent border-b border-gray-600 py-2"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </form>
            <div className="flex flex-row gap-3">
                <Button onClick={undefined}> Recuperar </Button>    
                <Button onClick={handleCancel} variant="cancel"> Cancelar </Button>
            </div>
        </div>
    </div>
    );
}


