import NavBar from './nav/NavBar'

export default function Layout({ children }) {

  return (
    <div className="font-opensans overflow-hidden">

      <NavBar />
      <main>
          {children}
      </main>

    </div>
  )
}