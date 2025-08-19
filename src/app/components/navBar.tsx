import { UserIcon, DocumentTextIcon, ChartBarIcon, UserGroupIcon, 
    ClipboardDocumentIcon, HomeIcon, Cog6ToothIcon, UserPlusIcon, 
    ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function NavBar(){
    return (
        <div className="flex flex-col gap-9 bg-[#16332E]  items-center " > 
           <Link href="/home">
                <HomeIcon  title="Home" className="size-8 mt-10 cursor-pointer"/>
           </Link>

           <Link className="" href="/user"> 
                <UserPlusIcon title="Usuarios"className="size-8 cursor-pointer"/>
           </Link>
            <Link  className=""href="/teses"> 
                <DocumentTextIcon title="Teses" className="size-8 cursor-pointer"/>
            </Link>
            <Link href="/relatorios">
                <ChartBarIcon title="Relatorios"className="size-8 cursor-pointer"/>
            </Link>

            <Link href="/entrevistas">
                <UserGroupIcon title="Entrevista" className="size-8 cursor-pointer"/>
            </Link>

            <Link href="/processos"> 
                <ClipboardDocumentIcon title="Processos" className="size-8 cursor-pointer"/>
            </Link>

            <Cog6ToothIcon title="Configurações" className="size-8 mt-59 cursor-pointer"/>
            <UserIcon title="Perfil" className="size-8 cursor-pointer"/>
            <Link href="/login"> 
            <ArrowRightStartOnRectangleIcon title="Sair" className="size-8 cursor-pointer"/>
            </Link>
            
        </div>
    );
} export default NavBar;