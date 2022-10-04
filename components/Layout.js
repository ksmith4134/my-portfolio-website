import NavBar from './nav/NavBar'

export default function Layout({ children }) {

  return (
    <div className="font-opensans px-8 py-10 max-w-7xl mx-auto">

        <div className="flex items-start space-x-8">

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