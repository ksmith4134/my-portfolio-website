import Header from './nav/Header'
import { useState } from 'react'
import Nav from './nav/Nav'

export default function Layout({ children }) {

    const [darkMode, setDarkMode] = useState(true)

    return (
        <div className={`${darkMode === true ? 'dark' : ''}`}>

            <div className="min-h-screen bg-white dark:bg-neutral-900 dark:text-slate-100 py-16">
            
                <div className="max-w-4xl mx-auto px-8 font-opensans">

                    <Header />

                    <div className="pb-6 top-0 z-10 bg-white dark:bg-neutral-900">
                        <Nav darkModeClick={() => setDarkMode(!darkMode)} darkMode={darkMode} />
                    </div>

                    <main className="z-0">
                        {children}
                    </main>
                    
                </div>

            </div>
        </div>
    )
}