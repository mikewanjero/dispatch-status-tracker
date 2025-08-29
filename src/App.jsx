// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import StatusRoute from './routes/StatusRoute'

function App() {

  return (

      <Router>
        <div className='min-h-screen bg-gray-50 text-gray-900 font-sans rounded-xl'>

          <header className='p-2 bg-white shadow-md rounded-2xl mx-4'>
            <h1 className='text-sm font-bold'>Tracking Details</h1>
          </header>

          <main className='p-4'>
            <Routes>
              <Route path='/' element={<StatusRoute />} />
            </Routes>
          </main>

          <footer className='p-4 text-center text-xs text-muted-foreground'>
            &copy; Dispatch Tracking {new Date().getFullYear()} CoreBase Solutions Limited
          </footer>
        </div>
      </Router>

  )
}

export default App
