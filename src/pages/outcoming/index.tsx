import { Plus } from 'phosphor-react';
import { AsideMenu } from '../../components/AsideMenu';
import { Header } from '../../components/Header';
import { TRIncoming } from '../../components/TRIncoming';
import { outcoming } from '../../mocks/outcoming';

export default function Outcoming() {
    return (
        <div className="flex h-screen w-full">
            <div className="flex flex-col w-full">
                <Header />
                <div className='flex flex-1 bg-gray-100'>
                    <AsideMenu location="saidas" />
                    <div className='flex-1 px-4'>
                        <header className='flex justify-between py-2 border-b border-b-gray-200 w-full'>
                            <h1 className='text-4xl text-gray-700'>Saídas</h1>
                            <div className='pr-8 flex gap-3'>
                                <div>
                                    <input
                                    className='rounded-md bg-gray-100 border border-gray-200'
                                    type="text"/>
                                </div>
                                <button className='flex items-center bg-green-600 text-white rounded py-1 px-2'>
                                    <span><Plus /></span> Nova
                                </button>
                            </div>
                        </header>
                        <div className='pt-4'>
                            <table className="table-auto shadow-2xl w-[50vw]">
                                <thead className='w-full'>
                                    <tr className='bg-gray-200'>
                                        <th>Valor</th>
                                        <th>data</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {outcoming?.map(data => (
                                        <TRIncoming data={data} key={data.id} />
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}