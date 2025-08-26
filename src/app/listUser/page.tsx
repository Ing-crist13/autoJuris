"use client";
import { useState } from "react";
import Button from "../components/Button";
import Header from "../components/header";
import NavBar from "../components/navBar";
import { useRouter } from 'next/navigation';
import SearchBar from "../components/searchBar";

export default function ListUser(){

    const router = useRouter();
     const handleRegister = () => {
        router.push('/user');
        };
    return(
    <div className="bg-amber-50"> 
        <div className=" pb-18 bg-[#16332E]"> 
                <Header className="object-top mb-30"/>
        </div>
        <div className=" flex "> 
         <div className="object-left w-20 items-center "> 
            <NavBar/>
        </div>
        <div className="flex flex-col bg-white rounded-[2rem] p-12 w-350  max-h-full shadow-xl pb-8 m-20 ms-40  "> 
           <h1 className="text-3xl font-inter font-light text-center text-gray-800 mb-10 border-b-1 border-b-gray-500 ms-10 me-10 ">Usuários</h1>
            <div className="flex absolute top-70  items-center ">
            <SearchBar/>
            <Button  onClick={handleRegister} className=" absolute left-280"> Cadastrar </Button>
            </div>
            
        </div>
        
    </div>
    </div>
    )
}