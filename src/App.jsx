import {Route, Routes} from 'react-router-dom';
import './App.css'
import { Nav } from './pages/Nav'
import { Home } from './pages/Home'
function App() {
 

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
