import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/';
import { AboutPage, HomePage, MoviesPage } from './pages';
import './App.css'


function App() {

  return (
    <>
      <HashRouter>
        <Navbar />

        <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/movies' element={<MoviesPage/>} />
        <Route path='/about' element={<AboutPage/>} />

        </Routes>
      </HashRouter>
    </>
  )
}

export default App
