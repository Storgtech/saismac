import Link from 'next/link';
import { PencilSimple, Plus, Trash } from 'phosphor-react';
import { useState } from 'react';
import { AsideMenu } from '../../components/AsideMenu';
import { AskingConfirmation } from '../../components/AskingConfirmation/AskingConfirmation';
import { Header } from '../../components/Header';
import { transportes } from '../../mocks/transportes';

export default function Transportes() {

    const [shouldDispalyAskingConfirmation, setShouldDisplayAskingConfirmation] = useState(false)

    const handleDelete = () => {

    }

    return (
        <div className="flex h-screen w-full">
            <div className="flex flex-col w-full">
                <Header />
                <div className='flex flex-1 bg-gray-100'>
                    <AsideMenu location="transportes" />
                    <div className='flex-1'>
                        <div className='flex items-center gap-3 w-full bg-white p-4 py-2'>
                            <h1 className='font-semibold text-xl'>Transportes</h1>
                            <div>
                                <Link href="/transportes/create">
                                    <span className='bg-green-700 hover:bg-green-800 transition duration-700 flex items-center gap-2 py-1 px-2 rounded-lg text-white cursor-pointer'>
                                        <Plus /> criar novo
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className='p-4'>
                            {transportes.map(car => (
                                <Link href={`/transportes/${car.id}`}>
                                    <div key={car.id} className="flex shadow-2xl bg-white my-1 p-1 gap-2 w-1/2 cursor-pointer">
                                        <div className='max-h-40 w-[15vw] relative'>
                                            <img src={car.avatarUrl} className="object-cover absolute top-0 left-0 w-full h-full" />
                                        </div>
                                        <div className='p-2 flex flex-1 flex-col'>
                                            <div>
                                                <b>Matricula:</b> <span>{car.matricula}</span>
                                            </div>
                                            <div>
                                                <b>Marca:</b> <span>{car.marca}</span>
                                            </div>
                                            <div className='border-2 border-gray-200 h-1 w-full my-3 rounded-lg'></div>
                                            <div>
                                                <p className='font-bold text-xl'>Motorista</p>
                                                <div>
                                                    <b>Nome:</b> <span>{car?.motorista?.nome}</span>
                                                </div>
                                                <div>
                                                    <b>BI:</b> <span>{car?.motorista?.BI}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-end items-end'>
                                            <div className="flex gap-3 p-2 bg-gray-300 rounded-xl">
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

                                </Link>
                            ))}
                        </div>
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