import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import OurCoffeePage from '../pages/OurCoffeePage';
import SingleCoffeePage from '../pages/SingleCoffeePage';
import ForYourPLeasurePage from '../pages/ForYourPLeasurePage';
import FooterNav from '../footerNav/FooterNav'
import ScrollToTop from '../../utils/ScrollToTop';
import './App.scss'

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
