import {Route, Routes} from 'react-router-dom';
import './App.css'
import { Nav } from './components/Nav'
import { Home } from './pages/Home'
import { SingleArticle } from './pages/SingleArticle';
import { Footer } from './components/Footer';
function App() {
 

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
