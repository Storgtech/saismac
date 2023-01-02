import Link from 'next/link';
import { ArrowLeft, Camera, Check } from 'phosphor-react';
import { useState } from 'react';
import { AsideMenu } from '../../../components/AsideMenu';
import { Header } from '../../../components/Header';
import { funcionarios } from '../../../mocks/funcionarios';

export default function CreateTransporte() {

    const [shouldDispalyAskingConfirmation, setShouldDisplayAskingConfirmation] = useState(false)

    const handleDelete = () => {

    }

    return (
        <div className="flex h-screen w-full">
            <div className="flex flex-col w-full">
                <Header />
                <div className='flex flex-1 bg-gray-100'>
                    <AsideMenu location="transportes" />
                    <div className='flex-1 px-4'>
                        <form className='flex bg-white shadow-xl w-[35vw] gap-4 p-3 rounded'>
                            <div>
                                <div className='h-40 w-40 shadow-xl flex items-center justify-center border-2 border-gray-100'>
                                    <span className='text-7xl'>
                                        <Camera />
                                    </span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <h1 className='text-xl font-semibold py-2'>Registar novo transporte</h1>
                                <div className='w-full flex flex-col gap-1 pr-5'>
                                    <div>
                                        <input type="text" placeholder="Matricula" className='rounded-md w-full border-1 border-gray-300' />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Marca" className='rounded-md w-full border-1 border-gray-300' />
                                    </div>
                                    <div>
                                        <select className="form-select appearance-none
                                        block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding bg-no-repeat
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                                        aria-label="Default select example"
                                        >
                                            <option >Selecionar Motorista</option>
                                            {funcionarios?.map(funcionario => (
                                                <option value={funcionario?.nome} key={funcionario.id}>{funcionario?.nome}</option>
                                            ))}

                                        </select>
                                    </div>
                                    <div className='flex items-center justify-end gap-3 py-2'>
                                        <Link href="/transportes">
                                            <button className='flex items-center gap-2 py-1 px-3 rounded bg-red-700 hover:bg-red-800 transition duration-700 text-white'>
                                                <ArrowLeft /> voltar
                                            </button>
                                        </Link>
                                        <button className='flex items-center gap-2 py-1 px-3 rounded bg-green-700 hover:bg-green-800 transition duration-700 text-white'>
                                            <Check /> Registar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}