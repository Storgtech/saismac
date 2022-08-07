import { useState } from 'react'
import { Header } from '../components/Header'
import { useRouter } from 'next/router'
import decode from 'jwt-decode'
import { FaPlusCircle } from 'react-icons/fa'

function App() {

  const route = useRouter()

  const { access_token } = route.query

  const decoded = decode(access_token)
  console.log(decode)

  const [trainingType, setTrainingType] = useState('self-training')

  return (
    <div className="flex h-screen w-full bg-zinc-900 justify-center items-center">
      <div className='w-[60vw] h-screen bg-gradient-to-r from-zinc-800 to-zinc-900 flex flex-col'>
        <Header />
        <div className='w-full bg-zinc-900 shadow-2xl shadow-zinc-800 flex flex-1 gap-2 relative'>
          <div className='w-1/2 flex-1 border-r border-zinc-800 shadow bg-zinc-900'>
            <table className="table-auto w-full">
              <thead className='bg-zinc-800 text-neutral-500'>
                <tr>
                  <th>Nome do treinamento</th>
                  <th>tempo gasto</th>
                  <th>data</th>
                </tr>
              </thead>
              <tbody className='text-zinc-600'>
                <tr className='border-b border-zinc-800'>
                  <td className='text-center'>Sharepoint</td>
                  <td className='text-center'>2h</td>
                  <td className='text-center'>20/03/2022</td>
                </tr>
                <tr className='border-b border-zinc-800'>
                  <td className='text-center'>Builder Assitant</td>
                  <td className='text-center'>1h</td>
                  <td className='text-center'>20/05/2022</td>
                </tr>
                <tr className='border-b border-zinc-800'>
                  <td className='text-center'>MsTeams</td>
                  <td className='text-center'>3h</td>
                  <td className='text-center'>20/04/2022</td>
                </tr>
              </tbody>
            </table>
            <button className='bg-zinc-900 border border-zinc-800 ml-auto rounded px-4 py-1 text-green-100 flex items-center gap-2'><FaPlusCircle/>add</button>
          </div>
          <div className="w-[40%]">
            <div className={
              trainingType == "self-training"
              ? "bg-gradient-to-l from-bg-zinc-800 to-bg-zinc-900 p-5 translate-x-12 border-2 border-r-green-700 border-t-green-700 border-b-green-700 border-l-zinc-900"
              : "bg-gradient-to-l from-bg-zinc-800 to-bg-zinc-900 p-5 hover:translate-x-12 transition-transform duration-700"
            }
            onClick={e => setTrainingType('self-training')}>
              <span className="font-semibold text-2xl text-green-700">self training</span>
              <div className="flex flex-col">
                <span className="text-green-700">Janeiro de 2024</span>
                <span className='py-6 text-lg font-semibold text-zinc-400'>Total de horas gastas: 8h</span>
                <button className='py-1 px-3 bg-green-600 rounded animate-pulse text-green-100'>ver resumo</button>
              </div>
            </div>
            <div className={
              trainingType == "training-others"
              ? "bg-gradient-to-r from-bg-zinc-800 to-bg-zinc-900 p-5 translate-x-12 border-2 border-r-yellow-700 border-t-yellow-700 border-b-yellow-700 border-l-zinc-800"
              : "bg-gradient-to-r from-bg-zinc-800 to-bg-zinc-900 p-5 hover:translate-x-12 transition-transform duration-700"
            }
            onClick={e => setTrainingType('training-others')}>
              <span className="font-semibold text-2xl text-yellow-700">training others</span>
              <div className="flex flex-col">
                <span className="text-yellow-700">Janeiro de 2024</span>
                <span className='py-6 text-lg font-semibold text-zinc-400'>Total de horas gastas: 8h</span>
                <button className='py-1 px-3 bg-yellow-600 rounded animate-pulse text-pink-100'>ver resumo</button>
              </div>
            </div>
            <div className={
              trainingType == "general"
              ? "bg-gradient-to-l from-bg-zinc-800 to-bg-zinc-900 p-5 translate-x-12 border-2 border-r-green-700 border-t-green-700 border-b-green-700 border-l-zinc-900"
              : "bg-gradient-to-l from-bg-zinc-800 to-bg-zinc-900 p-5 hover:translate-x-12 transition-transform duration-700"
            }
            onClick={ e => setTrainingType('general')}>
              <span className="font-semibold text-2xl text-green-700">General</span>
              <div className="flex flex-col">
                <span className="text-green-700">Janeiro de 2024</span>
                <span className='py-6 text-lg font-semibold text-zinc-400'>Total de horas gastas: 16h</span>
                <button className='py-1 px-3 bg-green-600 rounded animate-pulse text-green-100'>ver resumo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
