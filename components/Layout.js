import NavBar from './nav/NavBar'


export default function Layout({ children }) {

  return (
    <div className="bg-slate-100 min-h-screen">

        <div className="max-w-3xl mx-auto px-8 py-10 font-opensans">

            <NavBar />

            <main>
                {children}
            </main>

        </div>
    </div>
  )
}