import NavBar from './nav/NavBar'


export default function Layout({ children }) {

  return (
    <div className="max-w-7xl mx-auto px-8 py-10 font-opensans">

        <NavBar />

        <main className="mt-16">
            {children}
        </main>

    </div>
  )
}