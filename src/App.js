import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieDetail from './components/MovieDetail/MovieDetail';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:imdbID' element={<MovieDetail />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App