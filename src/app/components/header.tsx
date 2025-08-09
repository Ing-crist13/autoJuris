
'use client';

import { ScaleIcon } from "@heroicons/react/16/solid";

const headerVariants ={
    top: 'bg-[#16332E]',
    
}
export default function Header(className, ...props){
    return (
        <div className=" flex flex-row gap-1 items-center absolute top-6 left-6">
        <ScaleIcon className="size-8"/>
        <h2 className="font-sans font-bold"> AUTOJURIS </h2>
       
            {...props}
        </div>
    )

} 