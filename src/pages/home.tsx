import Link from 'next/link'
import { CurrencyDollarSimple, ShoppingCart, Taxi, Users } from 'phosphor-react'
import { Header } from '../components/Header'

export default function Home() {

    return (
        <div className="flex h-screen w-full">
            <div className="flex flex-col w-full">
                <Header />
                <div className="flex justify-center gap-8 px-60 py-36">
                    <Link href="/transportes">
                        <div className='flex flex-col border-2 border-green-700 w-1/4 h-[30vh] rounded-lg shadow-2xl cursor-pointer hover:shadow-inner transition duration-500'>
                            <header className='w-full bg-green-700 h-3 rounded-tl rounded-tr'></header>
                            <span className='flex flex-1 justify-center items-center text-7xl text-green-900'>
                                <Taxi />
                            </span>
                        </div>
                    </Link>

                    <Link href="/funcionarios">
                        <div className='flex flex-col border-2 border-indigo-900 w-1/4 h-[30vh] rounded-lg shadow-2xl cursor-pointer hover:shadow-inner transition duration-500'>
                            <header className='w-full bg-indigo-900 h-3 rounded-tl rounded-tr'></header>
                            <span className='flex flex-1 justify-center items-center text-7xl text-indigo-900'>
                                <Users />
                            </span>
                        </div>
                    </Link>

                    <Link href="/incoming">
                        <div className='flex flex-col border-2 border-pink-900 w-1/4 h-[30vh] rounded-lg shadow-2xl cursor-pointer hover:shadow-inner transition duration-500'>
                            <header className='w-full bg-pink-900 h-3 rounded-tl rounded-tr'></header>
                            <span className='flex flex-1 justify-center items-center text-7xl text-pink-900'>
                                <CurrencyDollarSimple />
                            </span>
                        </div>
                    </Link>

                    <Link href="/outcoming">
                        <div className='flex flex-col border-2 border-zinc-700 w-1/4 h-[30vh] rounded-lg shadow-2xl cursor-pointer hover:shadow-inner transition duration-500'>
                            <header className='w-full bg-zinc-700 h-3 rounded-tl rounded-tr'></header>
                            <span className='flex flex-1 justify-center items-center text-7xl text-zinc-700'>
                                <ShoppingCart />
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}