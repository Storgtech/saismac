import Link from 'next/link';
import { ArrowLeft, Camera, Check, Envelope, House, IdentificationCard, Phone, User } from 'phosphor-react';
import { AsideMenu } from '../../../components/AsideMenu';
import { Header } from '../../../components/Header';

export default function CreateFuncionario() {

    return (
        <div className="flex h-screen w-full">
            <div className="flex flex-col w-full">
                <Header />
                <div className='flex flex-1 bg-gray-100'>
                    <AsideMenu location="funcionarios" />
                    <div className='flex-1'>

                        <form className='flex bg-white shadow-xl w-[35vw] gap-4 p-3 rounded'>
                            <div>
                                <div className='h-40 w-40 shadow-xl flex items-center justify-center border-2 border-gray-100'>
                                    <span className='text-7xl'>
                                        <Camera />
                                    </span>
                                </div>
                            </div>
                            <div className='flex-1'>
                                <h1 className='text-xl font-semibold py-3'>Registar Novo Funcionário</h1>
                                <div className='w-full flex flex-col gap-1 pr-5'>
                                    <div className='flex items-center'>
                                        <span className='bg-zinc-900 text-white h-10 border-3 border-zinc-900 px-3 flex items-center justify-center '>
                                            <User />
                                        </span>
                                        <input type="text" placeholder="Nome" className='rounded-tr-md rounded-br-md w-full border-1 border-gray-300 ' />
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='bg-zinc-900 text-white h-10 border-3 border-zinc-900 px-3 flex items-center justify-center '>
                                            <Envelope />
                                        </span>
                                        <input type="email" placeholder="Email" className='rounded-tr-md rounded-br-md w-full border-1 border-gray-300' />
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='bg-zinc-900 text-white h-10 border-3 border-zinc-900 px-3 flex items-center justify-center '>
                                            <Phone />
                                        </span>
                                        <input type="text" placeholder="Telefone" className='rounded-tr-md rounded-br-md w-full border-1 border-gray-300' />
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='bg-zinc-900 text-white h-10 border-3 border-zinc-900 px-3 flex items-center justify-center '>
                                            <IdentificationCard />
                                        </span>
                                        <input type="text" placeholder="BI" className='rounded-tr-md rounded-br-md w-full border-1 border-gray-300' />
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='bg-zinc-900 text-white h-10 border-3 border-zinc-900 px-3 flex items-center justify-center '>
                                            <House/>
                                        </span>
                                        <input type="text" placeholder="Endereço" className='rounded-tr-md rounded-br-md w-full border-1 border-gray-300' />
                                    </div>


                                    <div className='flex items-center justify-end gap-3 py-2'>
                                        <Link href="/funcionarios">
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
            </div>
        </div>
    )
}