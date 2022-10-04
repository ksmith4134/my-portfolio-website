import NavBar from './nav/NavBar'
import Image from 'next/future/image'
import me from '../public/me.png'

export default function Layout({ children }) {

  return (
    <div className="font-opensans overflow-hidden px-16 py-10 max-w-[88rem]">

        <div className="flex items-start space-x-8">

            <Image src={me} className="block rounded-full w-32 h-32 shadow-lg shadow-gray-300" alt="profile picture" priority="true" />

            <div className="w-full">
                <NavBar />
                <main className="mt-16">
                    {children}
                </main>
            </div>

        </div>

    </div>
  )
}