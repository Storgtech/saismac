import animationLogin from '../lottiefiles/login.json'
import Lottie from 'react-lottie'
import { FcGoogle } from 'react-icons/fc'

export default function Home() {

  const loginAnimation = {
    loop: true,
    autoplay: true,
    animationData: animationLogin,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className="flex bg-zinc-900 items-center justify-center h-screen">
      <div className='overflow-hidden animate-pulse duration-1000 ease-in-out'>
        <Lottie options={loginAnimation}
          height={300}
          width={400}
          isStopped={false}
          isPaused={false} />
      </div>
      <div className="bg-gradient-to-l from-pink-800 to-indigo-800 relative h-40 w-1/5 flex items-center justify-center">
        <form className="absolute w-[99.5%] h-[98%] bg-zinc-900 z-10 flex flex-col items-center justify-center gap-4">
          <h1 className='text-yellow-700 font-semibold text-3xl'>.Training conttrol</h1>
          <a href="https://kaqhoujszibsdbxkilzu.supabase.co/auth/v1/authorize?provider=google"
          type="button"
          className='flex gap-2 justify-center items-center bg-pink-800 text-pink-100 rounded px-3 py-2'>
            <span><FcGoogle/></span>login with google
          </a>
        </form>
      </div>
    </div>
  )
}
