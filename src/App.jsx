import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/';
import { AboutPage, HomePage, MoviesPage } from './pages';
import './App.css'
import MoviesState from './context/movies/MoviesState';


function App() {

  return (
    <MoviesState>
      <HashRouter>
        <Navbar />

        <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/movies' element={<MoviesPage/>} />
        <Route path='/about' element={<AboutPage/>} />

        </Routes>

      </HashRouter>
    </MoviesState>
  )
}

export default App
