import Link from 'next/link';
import { PencilSimple, Trash } from 'phosphor-react';
import { AsideMenu } from '../../components/AsideMenu';
import { Header } from '../../components/Header';
import { funcionarios } from '../../mocks/funcionarios';

export default function Funcionarios() {
    return (
        <div className="flex h-screen w-full">
            <div className="flex flex-col w-full">
                <Header />
                <div className='flex flex-1 bg-gray-100'>
                    <AsideMenu location="funcionarios" />
                    <div className='flex flex-1 p-3'>
                        <div>
                            {funcionarios?.map(funcionario => (
                                <Link key={funcionario.id} href={`/funcionarios/${funcionario.id}`}>
                                    <div className='bg-white shadow-xl rounded-lg p-2 my-2 flex cursor-pointer'>
                                        <div className='h-20 w-20 relative'>
                                            <img src={funcionario.avatarUrl} className="object-cover absolute top-0 left-0 w-full h-full rounded-md" />
                                        </div>
                                        <div className='px-3'>
                                            <p className='font-semibold text-lg'>{funcionario.nome}</p>
                                            <div className='text-md'>
                                                <b>Telefone:</b> <span>{funcionario.telefone}</span>
                                            </div>
                                            <div className='text-md'>
                                                <b>Email:</b> <span>{funcionario.email}</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-end items-end'>
                                            <div className="flex gap-3 p-2 bg-gray-300 rounded-xl">
                                                <span className="cursor-pointer text-blue-600 hover:text-blue-900 transition duration-500">
                                                    <PencilSimple />
                                                </span>
                                                <span
                                                    className="cursor-pointer text-red-700 hover:text-red-900 transition duration-500"
                                                    >
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
        </div>
    )
}