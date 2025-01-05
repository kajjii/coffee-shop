import { Link } from 'react-router-dom';
import AppNav from '../appNav/AppNav';
import CoffeeLine from '../UI/coffeeLine/CoffeeLine';
import navBeansHeader from '../../images/icons/coffee-beans-navigation-white.png'
import whiteBeans from '../../images/icons/coffee-beans-white.png'
import './mainCoffeeScreen.scss'

const MainCoffeeScreen = () => {
    return (
        <div className="main__screen">
            <div className="main__nav">
                <AppNav icon={navBeansHeader} />
            </div>
            <div className="main__described">
                <h1 className="main__title">Everything You Love About Coffee</h1>
                <CoffeeLine icon={whiteBeans} color='#fff' />
                <h2 className="main__text">We makes every day full of energy and taste
                    <br />
                    Want to try our beans?
                </h2>
                <Link to='/ourCoffee'><button className="main__btn">More</button></Link>
            </div>
        </div>
    );
};

export default MainCoffeeScreen;