import { useState } from "react"
import imagemPrincipal from "../assets/frases-nada-a-ver.png"
import { frasesNadaAVer } from "../data/frases"


function MainScreen() {

    const gerarCorAleatoria = () => {
    const cores = [
    'bg-blue-100 text-blue-800 border-blue-200',
    'bg-green-100 text-green-800 border-green-200',
    'bg-yellow-100 text-yellow-800 border-yellow-200',
    'bg-red-100 text-red-800 border-red-200',
    'bg-purple-100 text-purple-800 border-purple-200',
    'bg-pink-100 text-pink-800 border-pink-200'
        ];
    return cores[Math.floor(Math.random() * cores.length)];
    };


    const [fraseSelecionada,setFraseSelecionada] = useState('')
    
    const handleGerarFrase = (item:string[]) => {
        let randomNumber = Math.floor(Math.random()* item.length)
        setFraseSelecionada(()=>item[randomNumber])

    }


    return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-slate-900 text-white font-mono">
    <div className=" flex justify-center items-center pt-20">
        <img className=" w-[60%] max-w-xs md:max-w-md lg:max-w-md object-contain rounded-3xl shadow-xl shadow-black" src={imagemPrincipal} alt="frases nada a ver" />
    </div>
    <div className="flex flex-col p-2 justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Categorias</h1>
        <div className="grid grid-cols-3 gap-4">
        {frasesNadaAVer.map((item)=><button key={item.id} onClick={()=>handleGerarFrase(item.frases)} className={` btn-hover
              ${gerarCorAleatoria()}
              ring-2 hover:ring-${gerarCorAleatoria()}
              px-4 py-2 rounded-full text-sm font-medium
              
            `}>{item.categoria}</button>)}
        </div>
        {fraseSelecionada && <div className="frases-card">
        <p className=" whitespace-pre-wrap break-words text-black  text-2xl">
            {fraseSelecionada}
        </p>
      </div>}
        
    </div>    
    </div>
    </>
)
}

export default MainScreen