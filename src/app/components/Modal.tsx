// components/Modal.js

// Usamos a interface para definir o formato das props
interface IModal {
  isOpen: boolean;
  title: string;
  message: string;
  buttons: React.ReactNode; // React.ReactNode aceita qualquer elemento React (como botões)
}

export function Modal({ isOpen, title, message, buttons }: IModal) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999] ">
      <div className="relative bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center z-[10000]">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">
          {message}
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          {buttons}
        </div>
      </div>
    </div>
  );
}