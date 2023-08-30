import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portofolio from './pages/Portofolio'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'


const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/about' element={<About></About>}/>
          <Route path='/porto' element={<Portofolio></Portofolio>}/>
          <Route path='/gallery' element={<Gallery></Gallery>}/>
          <Route path='/contact' element={<Contact></Contact>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
