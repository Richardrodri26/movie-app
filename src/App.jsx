import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Menu } from './components/Menu';
import { AboutPage } from './pages/AboutPage';
import './App.css'


function App() {

  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />

        </Routes>
      </HashRouter>
    </>
  )
}

export default App
