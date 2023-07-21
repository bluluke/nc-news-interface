import {Route, Routes} from 'react-router-dom';
import './App.css'
import { Nav } from './components/Nav'
import { Home } from './pages/Home'
import { SingleArticle } from './pages/SingleArticle';
import { Footer } from './components/Footer';
import { Error } from './components/Error'
function App() {
 

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
