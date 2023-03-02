import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components';
import { AboutPage, HomePage } from './pages';
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
