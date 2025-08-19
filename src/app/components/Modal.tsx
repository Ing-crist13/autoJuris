interface IModal{
    isOpen: boolean;
}

export function Modal({isOpen}: IModal){
  if (isOpen){
     return(
        <div className="fixed inset-0 flex items-center justify-center z-[9999] ">
           <div className="relative bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center z-[10000] ">
              <h2 className="text-xl font-bold text-green-700">Cadastro realizado!</h2>
              <p className="mt-2 text-gray-600">
                 Cadastro foi concluído com sucesso.
              </p>
              <div className="mt-4 flex justify-center">
                <button
                  className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
                >
                  OK

                </button>
              </div>
            </div>
        </div>
    );
    }else{
    <></>}
   
}