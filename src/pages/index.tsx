import React from 'react';
import Link from 'next/link';

export default function Login(){
    return (
        <div className='bg-zinc-900'>
            <Link href="/home">
                <a>home</a>
            </Link>
        </div>
    )
}