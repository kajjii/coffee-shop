import AppNav from '../appNav/AppNav';
import navBeansHeader from '../../images/icons/coffee-beans-navigation-white.png'
import './ourCoffee.scss'

const OurCoffee = () => {
    return (
        <div className='our-coffee'>
            <AppNav icon={navBeansHeader} />
            <div className="our-coffee__title">Our Coffee</div>
        </div>
    );
};

export default OurCoffee;