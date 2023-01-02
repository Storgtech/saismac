import Link from "next/link";

export function Header() {
    return (
        <div className="flex justify-between p-6 border-b-2 border-b-zinc-200 w-full shadow-xl">
            <Link href="/home">
                <h1 className="text-green-700 font-bold text-5xl cursor-pointer">SAISMAC</h1>
            </Link>
            <div className='flex items-center gap-2'>

            </div>
        </div>
    )
}