// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import StatusRoute from "./routes/StatusRoute";

function App() {
  return (
    <Router>
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-white p-4 rounded-xl shadow-md">
        <header className="p-2 bg-white shadow-md rounded-2xl mx-4">
          <h1 className="text-sm font-bold">Tracking Details</h1>
        </header>

        <main className="pt-4 px-4">
          <Routes>
            <Route path="/" element={<StatusRoute />} />
          </Routes>
        </main>

        <footer className="p-4 text-center text-xs text-muted-foreground">
          &copy; Dispatch Tracking {new Date().getFullYear()} CoreBase Solutions
          Limited
        </footer>
      </div>
    </Router>
  );
}

export default App;
