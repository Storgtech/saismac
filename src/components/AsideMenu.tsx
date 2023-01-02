import Link from 'next/link';
import { CurrencyDollarSimple, ShoppingCartSimple, Taxi, Users } from 'phosphor-react';

export function AsideMenu({ location }) {
    return (
        <aside className='border-r-2 border-l-zinc-600 shadow-lg w-[20vw] bg-white py-2'>

            <div className='pl-4'>
                <Link href="/transportes">
                    <a className={
                        location == "transportes" 
                        ? 'flex gap-1 w-full bg-gray-100 px-2 py-2 rounded-tl-lg rounded-bl-lg'
                        : 'flex gap-1 w-full px-2 py-2'
                    }>
                        <span className="text-2xl text-green-800">
                            <Taxi />
                        </span>
                        Transportes
                    </a>
                </Link>

                <Link href="/funcionarios">
                    <a className={
                        location == "funcionarios" 
                        ? 'flex gap-1 w-full bg-gray-100 px-2 py-2 rounded-tl-lg rounded-bl-lg'
                        : 'flex gap-1 w-full px-2 py-2'
                    }>
                        <span className="text-2xl text-indigo-900">
                            <Users />
                        </span>
                        Funcionarios
                    </a>
                </Link>

                <Link href="/incoming">
                    <a className={
                        location == "entradas" 
                        ? 'flex gap-1 w-full bg-gray-100 px-2 py-2 rounded-tl-lg rounded-bl-lg'
                        : 'flex gap-1 w-full px-2 py-2'
                    }>
                        <span className="text-2xl text-pink-900">
                            <CurrencyDollarSimple />
                        </span>
                        Entradas
                    </a>
                </Link>

                <Link href="/outcoming">
                    <a className={
                        location == "saidas" 
                        ? 'flex gap-1 w-full bg-gray-100 px-2 py-2 rounded-tl-lg rounded-bl-lg'
                        : 'flex gap-1 w-full px-2 py-2'
                    }>
                        <span className="text-2xl text-zinc-600">
                            <ShoppingCartSimple />
                        </span>
                        Saídas
                    </a>
                </Link>

            </div>
        </aside>
    )
}