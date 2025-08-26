// components/Input.js
import React from 'react';

const Input = ({ label, type = 'text', name, value, onChange, placeholder = '', required = false, register}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required} 
        register={register}
        className="
         w-full outline-none text-md text-gray-700 placeholder-gray-400 bg-transparent border-b border-gray-600 py-2

          focus:required:border-red-500
         

         
          
         
        "
      />
    </div>
  );
};

export default Input;


