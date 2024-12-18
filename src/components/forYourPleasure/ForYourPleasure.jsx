import AppNav from '../appNav/AppNav';
import navBeansHeader from '../../images/icons/coffee-beans-navigation-white.png'
import './forYourPleasure.scss'

const ForYourPleasure = () => {
    return (
        <div className='our-coffee'>
            <AppNav icon={navBeansHeader} />
            <div className="our-coffee__title">For your pleasure</div>
        </div>
    );
};

export default ForYourPleasure;