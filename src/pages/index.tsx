import { useRouter } from "next/router"

export default function Login() {

    const route = useRouter()
    
    const handleLogin = () => {
        route.push('/home')
    }

    return (
        <div className='bg-zinc-900 h-screen w-full flex justify-center items-center'>
            <main className="relative flex items-center justify-center h-screen">

                <div className="hidden md:flex md:flex-col pr-5">
                    <h4 className="flex items-center text-4xl text-zinc-500">SAISMAC</h4>
                    <span className="text-2xl font-light text-zinc-500">Login here</span>
                </div>
                <form className="bg-zinc-800 p-6 rounded shadow-sm w-80 py-8">
                    <div>
                        <input
                            className="bg-zinc-900 outline-none border-2 border-zinc-900 rounded focus:border-yellow-700 focus:ring-yellow-700 placeholder:text-zinc-500 font-semibold w-full"
                            type="text"
                            placeholder="email ou telefone"
                        />
                    </div>
                    <div className="mt-1">
                        <input
                            className="bg-zinc-900 outline-none border-2 border-zinc-900 rounded focus:border-yellow-700 focus:ring-yellow-700 placeholder:text-zinc-500 font-semibold w-full"
                            type="text"
                            placeholder="password"
                        />
                    </div>
                    <div className="w-full mt-2">
                        <button
                            type="button"
                            className="py-2 px-4 rounded bg-violet-900 font-semibold w-full hover:bg-violet-700"
                            onClick={() => handleLogin()}>Login</button>
                    </div>
                    <div className="text-center py-2 mt-2">
                        <a className="text-neutral-500 cursor-pointer">Esqueceu a sua senha?</a>
                    </div>
                </form>
            </main>        </div>
    )
}