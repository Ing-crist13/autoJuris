'use client';

const buttonVariants ={
    save: 'bg-[#16332E] ',
    cancel: 'bg-gray-500  hover:bg-gray-900'
}


export default function Button({variant = 'save', onClick, className, children, ...props}){
    return (
        <button 
         onClick={onClick}
         className={`
         text-white px-6 py-2 rounded-xl text-md hover:bg-teal-800 transition mt-6
         ${buttonVariants[variant]}
         ${className}
         `}
            {...props}
        >   
            {children}    
        </button>
     )
} 

