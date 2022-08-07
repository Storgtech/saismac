import React from 'react';

export function Header(){
    return (
        <div className="flex justify-between p-6 border-b-2 border-zinc-900">
            <h1 className="text-yellow-700 font-bold text-4xl">.Training controll</h1>
            <div className='flex items-center gap-2'>
                <span className="text-zinc-200 font-semibold">tarcisio teixeira</span>
                <figure className="bg-gradient-to-l from-pink-700 to-yellow-700 h-12 w-12 rounded-full relative flex justify-center items-center">
                    <img src="https://github.com/tarcisioteixeira.png" className='absolute w-[90%] h-[90%] rounded-full'/>    
                </figure>
            </div>
        </div>
    )
}