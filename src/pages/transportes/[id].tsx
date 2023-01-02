import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowLeft, FolderOpen, MagnifyingGlass, PencilSimple, Trash } from 'phosphor-react';
import { useState } from 'react';
import { FaFilePdf, FaTimes } from 'react-icons/fa';
import { AsideMenu } from '../../components/AsideMenu';
import { AskingConfirmation } from '../../components/AskingConfirmation/AskingConfirmation';
import { Header } from '../../components/Header';
import { TRIncoming } from '../../components/TRIncoming';
import { incoming } from '../../mocks/incoming';
import { outcoming } from '../../mocks/outcoming';
import { transportes } from '../../mocks/transportes';

export default function Transporte() {

    const [shouldDispalyAskingConfirmation, setShouldDisplayAskingConfirmation] = useState(false)

    const route = useRouter()
    const { id } = route.query
    const [reportType, setReportType] = useState<'incoming' | 'outcoming' | ''>('')

    const transporte = transportes.find(car => car.id == id)

    const handleDelete = () => {

    }

    return (
        <div className="flex h-screen w-full">
            <div className="flex flex-col w-full">
                <Header />
                <div className='flex flex-1 bg-gray-100'>
                    <AsideMenu location="transportes" />
                    <div className='flex-1 p-4 min-w-[35vw]'>
                        <div className='flex flex-col p-2 bg-white shadow-2xl w-fit'>
                            <div>
                                <img src={transporte?.avatarUrl} className="object-cover" />
                            </div>
                            <div className='flex'>
                                <div className='flex-1 py-2 px-4'>
                                    <div>
                                        <b>Matricula:</b> <span>{transporte?.matricula}</span>
                                    </div>
                                    <div>
                                        <b>Marca:</b> <span>{transporte?.marca}</span>
                                    </div>
                                    <div className='h-1 border-2 border-gray-200 my-1'></div>
                                    <div>
                                        <p className='text-lg font-semibold my-1 text-gray-800'>Proprietario</p>
                                        <div className='cursor-pointer hover:text-blue-700 transition duration-700'>
                                            <b>Nome:</b> <span>{transporte?.motorista?.nome}</span>
                                        </div>
                                        <div>
                                            <b>BI:</b> <span>{transporte?.motorista?.BI}</span>
                                        </div>

                                    </div>

                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex flex-col gap-1 p-2 text-white'>
                                        <button
                                            className='py-1 px-3 rounded-lg bg-red-600 flex items-center gap-1 hover:bg-red-800 transition duration-700'
                                            onClick={() => setReportType('outcoming')}>
                                            <span><FolderOpen /></span>Relatorio Mensal de Gastos
                                        </button>
                                        <button
                                            className='py-1 px-3 rounded-lg bg-green-700 flex items-center gap-1 hover:bg-green-900 transition duration-700'
                                            onClick={() => setReportType('incoming')}>
                                            <span><FolderOpen /></span>Relatorio Mensal de Entradas
                                        </button>
                                    </div>
                                    <div className='flex justify-end p-2 items-center gap-2'>
                                        <div>
                                            <Link href="/transportes">
                                                <span className='flex items-center gap-2 p-1 px-2 bg-gray-300 hover:bg-gray-400 transition duration-700 rounded-xl cursor-pointer'>
                                                    <ArrowLeft /> voltar
                                                </span>
                                            </Link>
                                        </div>

                                        <div className="flex gap-3 p-2 bg-gray-300 hover:bg-gray-400 transition duration-700 rounded-xl">
                                            <span className="cursor-pointer text-blue-600 hover:text-blue-900 transition duration-500">
                                                <PencilSimple />
                                            </span>
                                            <span
                                                className="cursor-pointer text-red-700 hover:text-red-900 transition duration-500"
                                                onClick={() => setShouldDisplayAskingConfirmation(true)}>
                                                <Trash />
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        {reportType == 'incoming' && (
                            <div className='pt-4'>
                                <div>
                                    <div className='flex justify-between py-3 bg-white items-center px-4 border-b border-b-gray-300'>
                                        <header className='font-semibold text-xl'>Relatorio de Entradas</header>
                                        <div>
                                            <div className='flex items-center'>
                                                <input className='flex-1 h-8 rounded-tl-md rounded-bl-md p-2 border border-gray-300' />
                                                <span className='p-2 bg-green-800 text-white rounded-tr-md rounded-br-md'>
                                                    <MagnifyingGlass />
                                                </span>
                                            </div>
                                        </div>
                                        <div className='pr-2 flex gap-3 items-center'>
                                            <span className='cursor-pointer bg-red-900 text-white text-xl rounded-full h-8 w-8 flex items-center justify-center'>
                                                <FaFilePdf />
                                            </span>
                                            <span
                                                className='cursor-pointer bg-gray-100 text-gray-900 text-xl rounded-full h-8 w-8 flex items-center justify-center'
                                                onClick={() => setReportType('')}>
                                                <FaTimes />
                                            </span>
                                        </div>                                    </div>
                                    <div>
                                        <table className="table-auto shadow-2xl w-[50vw]">
                                            <thead className='w-full'>
                                                <tr className='bg-white'>
                                                    <th className='py-2'>Valor</th>
                                                    <th>Descrição</th>
                                                    <th>Data</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {incoming?.map(data => (
                                                    <TRIncoming
                                                        data={data}
                                                        key={data.id}
                                                        type="singular" />
                                                ))}
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>


                        )}

                        {reportType == 'outcoming' && (
                            <div className='pt-4'>
                                <div>
                                    <div className='flex justify-between py-3 bg-white items-center px-4 border-b border-b-gray-300'>
                                        <header className='font-semibold text-xl'>Relatorio de Gastos</header>
                                        <div>
                                            <div className='flex items-center'>
                                                <input className='flex-1 h-8 rounded-tl-md rounded-bl-md p-2 border border-gray-300' />
                                                <span className='p-2 bg-green-800 text-white rounded-tr-md rounded-br-md'>
                                                    <MagnifyingGlass />
                                                </span>
                                            </div>
                                        </div>
                                        <div className='pr-2 flex gap-3 items-center'>
                                            <span className='cursor-pointer bg-red-900 text-white text-xl rounded-full h-8 w-8 flex items-center justify-center'>
                                                <FaFilePdf />
                                            </span>
                                            <span
                                                className='cursor-pointer bg-gray-100 text-gray-900 text-xl rounded-full h-8 w-8 flex items-center justify-center'
                                                onClick={() => setReportType('')}>
                                                <FaTimes />
                                            </span>
                                        </div>                                    </div>
                                    <div>
                                        <table className="table-auto shadow-2xl w-[50vw]">
                                            <thead className='w-full'>
                                                <tr className='bg-white'>
                                                    <th className='py-2'>Valor</th>
                                                    <th>Descrição</th>
                                                    <th>Data</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {outcoming?.map(data => (
                                                    <TRIncoming
                                                        data={data}
                                                        key={data.id}
                                                        type="singular" />
                                                ))}
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>

                        )}
                    </div>

                </div>
            </div>
            {shouldDispalyAskingConfirmation && (
                <AskingConfirmation
                    label='Deseja eliminar esta viatura?'
                    closeState={setShouldDisplayAskingConfirmation}
                    execute={handleDelete} />
            )}
        </div>
    )
}