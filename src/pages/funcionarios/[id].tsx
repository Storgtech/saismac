import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowLeft, FolderOpen, MagnifyingGlass, PencilSimple, Plus, Trash } from 'phosphor-react';
import { useState } from 'react';
import { FaFilePdf, FaTimes } from 'react-icons/fa';
import { AsideMenu } from '../../components/AsideMenu';
import { AskingConfirmation } from '../../components/AskingConfirmation/AskingConfirmation';
import { Header } from '../../components/Header';
import { TRIncoming } from '../../components/TRIncoming';
import { funcionarios } from '../../mocks/funcionarios';
import { incoming } from '../../mocks/incoming';
import { outcoming } from '../../mocks/outcoming';

export default function Funcionario() {

    const route = useRouter()
    const { id: funcionarioId } = route.query
    const funcionario = funcionarios.find(funcionario => funcionario.id == funcionarioId)
    const [shouldDisplayAskingConfirmation, setShouldDisplayAskingConfirmation] = useState(false)
    const [reportType, setReportType] = useState<'incoming' | 'outcoming' | ''>('')

    const handleDeleteFuncionarion = () => {

    }

    return (
        <div className="flex h-screen w-full">
            <div className="flex flex-col w-full">
                <Header />
                <div className='flex flex-1 bg-gray-100'>
                    <AsideMenu location="funcionarios" />
                    <div className='flex flex-1 p-3 gap-4'>
                        <div className='w-1/3'>
                            <div className='bg-white shadow-xl rounded-lg flex flex-col cursor-pointer'>
                                <div className='relative flex bg-indigo-700 items-end justify-center h-40'>
                                    <div className='h-36 w-36 relative rounded-full border-4 border-white -mb-10'>
                                        <img src={funcionario?.avatarUrl} className="object-cover absolute top-0 left-0 w-full h-full rounded-full" />
                                    </div>
                                </div>
                                <div className='px-3 py-12 flex flex-col items-center gap-1'>
                                    <p className='font-semibold text-lg'>{funcionario?.nome}</p>
                                    <div className='text-md'>
                                        <b>Telefone:</b> <span>{funcionario?.telefone}</span>
                                    </div>
                                    <div className='text-md'>
                                        <b>Email:</b> <span>{funcionario?.email}</span>
                                    </div>
                                    <div className='text-md'>
                                        <b>Endereço:</b> <span>{funcionario?.adress}</span>
                                    </div>

                                    <div className='flex items-center gap-2'>
                                        <b>Transportes:</b>
                                        <div className='flex bg-gray-300 py-1 px-1 rounded-lg'>
                                            <span className='border-r-2 border-r-gray-400 px-2'>{funcionario?.transportes.length}</span>
                                            <button className='flex items-center px-2 gap-1'>atribuir <Plus /></button>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-1 p-2 text-white'>
                                        <button
                                            className='py-1 px-3 rounded-lg bg-indigo-700 flex items-center gap-1 hover:bg-indigo-900 transition duration-700'
                                            onClick={() => setReportType('outcoming')}>
                                            <span><FolderOpen /></span>Relatorio Mensal de Gastos
                                        </button>
                                        <button
                                            className='py-1 px-3 rounded-lg bg-green-700 flex items-center gap-1 hover:bg-green-900 transition duration-700'
                                            onClick={() => setReportType('incoming')}>
                                            <span><FolderOpen /></span>Relatorio Mensal de Entradas
                                        </button>
                                    </div>

                                </div>
                                <div className='flex justify-end pb-4 pr-4 items-center gap-2'>
                                    <div>
                                        <Link href="/funcionarios">
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
                                            onClick={() => setShouldDisplayAskingConfirmation(true)}
                                        >
                                            <Trash />
                                        </span>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className='flex'>
                            {reportType == 'incoming' && (
                                <div>
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
                                            </div>
                                        </div>
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
                                <div>
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
                                            </div>
                                        </div>
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
            </div>
            {shouldDisplayAskingConfirmation && (
                <AskingConfirmation
                    label="Deseja realmente eliminar este funcionario?"
                    closeState={setShouldDisplayAskingConfirmation}
                    execute={handleDeleteFuncionarion} />
            )}
        </div>
    )
}