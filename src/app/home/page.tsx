
import { UserIcon, DocumentTextIcon, ChartBarIcon, UserGroupIcon, ClipboardDocumentIcon, CalendarDateRangeIcon } from "@heroicons/react/24/outline";
import NavBar from "../components/navBar";
import Header from "@/app/components/header";
import Link from "next/link";


export default function Home(){
 
    return (
     <div className="bg-amber-50"> 
    <div className=" pb-18 bg-[#16332E]"> 
        <Header className="object-top mb-30"/>
    </div>
    <div className="flex"> 
    <div className="w-25 items-center"> 
        <NavBar/>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 px-8 py-12 ms-30 mt-20"> 

      <Link className="h-30" href="/listUser"> 
         <div className="flex items-center gap-5 h-35 bg-[#507E7E] hover:bg-[#125959] rounded-2xl p-6 shadow-xl transition cursor-pointer">
          <UserIcon  className="size-10 text-white"/> 
            <div className=" items-center gap-4"> 
              <h3 className="text-white font-bold border-b-1 "> Usuários </h3>
              <p className="text-white pt-2"> Cadastrar, editar e excluir </p>
          </div>
        </div>
        </Link>

        <Link  className="h-30"href="/teses"> 
          <div className="flex items-center gap-5 h-35 bg-[#507E7E] hover:bg-[#125959] rounded-2xl p-6 shadow-xl transition cursor-pointer">
            <DocumentTextIcon  className="size-10 text-white"/> 
            <div className=" items-center gap-4"> 
              <h3 className="text-white font-bold border-b-1 "> Teses </h3>
              <p className="text-white pt-2"> Cadastrar, editar e excluir </p>
            </div>
          </div>
          </Link>

          <Link className="h-30" href="/relatorios">         
            <div className="flex items-center gap-5 h-35 bg-[#507E7E] hover:bg-[#125959] rounded-2xl p-6 shadow-xl transition cursor-pointer">
              <ChartBarIcon  className="size-10 text-white"/> 
              <div className=" items-center gap-4"> 
                <h3 className="text-whitefont-bold border-b-1 "> Relatorios </h3>
                <p className="text-white pt-2"> Relatorios de produtividade </p>
              </div>
            </div>
           </Link>

           <Link className="h-30" href="/entrevistas"> 
            <div className="flex items-center gap-5  h-35 bg-[#507E7E] hover:bg-[#125959] rounded-2xl p-6 shadow-xl transition cursor-pointer">
              <UserGroupIcon  className="size-10 text-white"/> 
              <div className=" items-center gap-4"> 
                <h3 className="text-white font-bold border-b-1 "> Entrevista </h3>
                <p className="text-white pt-2"> Pré cadastro do cliente, reclamação e empresa </p>
              </div>
            </div>
          </Link>

          <Link className="h-30" href="/processos"> 
            <div className="flex items-center gap-5  h-35 bg-[#507E7E] hover:bg-[#125959] rounded-2xl p-6 shadow-xl transition cursor-pointer">
              <ClipboardDocumentIcon  className="size-10 text-white"/> 
              <div className=" items-center gap-4"> 
                <h3 className="text-white font-bold border-b-1 "> Processo </h3>
                <p className="text-white pt-2"> Cadastrar, editar e historico  </p>
              </div>
            </div>
          </Link>
           <Link className="h-30" href="/compromissos"> 
            <div className="flex items-center gap-5  h-35 bg-[#507E7E] hover:bg-[#125959] rounded-2xl p-6 shadow-xl transition cursor-pointer">
              <CalendarDateRangeIcon  className="size-10 text-white"/> 
              <div className=" items-center gap-4"> 
                <h3 className="text-white font-bold border-b-1 "> Agenda </h3>
                <p className="text-white pt-2"> Cadastre e visualize seus compromissos </p>
              </div>
            </div>
          </Link>
         </div>
         </div>
    </div>    
    );
}