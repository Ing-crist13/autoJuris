import { InputHTMLAttributes } from "react";

// Reaproveita todas as props padrão de um <input />
type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return (
    <input
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      {...props}
    />
  );
}



