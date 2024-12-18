import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FooterNav from './components/footerNav/FooterNav'
import MainPage from './components/pages/MainPage';
import OurCoffeePage from './components/pages/OurCoffeePage';
import SingleCoffeePage from './components/pages/SingleCoffeePage';
import ForYourPLeasurePage from './components/pages/ForYourPLeasurePage';
import ScrollToTop from './utils/scrollToTop';
import './App.css'

function App() {

  return (
    <div className='app'>
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/ourCoffee/' element={<OurCoffeePage />} />
                <Route path='/singleCoffee/:id' element={<SingleCoffeePage />} />
                <Route path='/yourPleasure' element={<ForYourPLeasurePage />} /> 
            </Routes>
            <FooterNav />
        </Router>
    </div>
  )
}

export default App
