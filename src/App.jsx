import {Route, Routes, useLocation} from 'react-router-dom';
import { useState} from 'react';
import './App.css'
import { Nav } from './components/Nav'
import { Home } from './pages/Home'
import { SingleArticle } from './pages/SingleArticle';
import { Footer } from './components/Footer';
import { Error } from './components/Error';

function App() {
  const [apiError, setApiError] = useState();
  const location = useLocation();

  if(apiError) {
    return (
        <Error
                errorStatus={apiError.response.status}
                errorMessage={apiError.response.data.msg}
        />)}

  return (
    <>
      {location.pathname !== '/' ? <Nav /> : null}
      <Routes>
        <Route path="/" element={<Home setApiError={setApiError}/>} />
        <Route path="/articles/:article_id" element={<SingleArticle setApiError={setApiError}/>} />
        <Route path="*" element={<Error errorStatus='404' errorMessage='Not found: Page does not exist'/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
