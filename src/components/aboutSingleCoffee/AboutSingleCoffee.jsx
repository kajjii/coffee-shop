import CoffeeLine from '../UI/coffeeLine/CoffeeLine';
import { useParams } from 'react-router-dom';
import { beans } from '../../helpers/beansList';
import './aboutSingleCoffee.scss'

const AboutSingleCoffee = () => {

    const {id} = useParams()
    const bean = beans[id]
    return (
        <div className='about-it'>
            <div className="about-it__wrapper">
                <img className='about-it__img' src={bean.imgBig} alt="big-beans" />
                <div className="about-it__info">
                    <h2 className="about-it__title">About it</h2>
                    <CoffeeLine />
                    <p className="about-it__country"><span>Country: {bean.country}</span> </p>
                    <p className="about-it__desc"><span>Description: </span> 
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat.
                    </p>
                    <p className="about-it__price"><span>Price: {bean.price}</span> </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSingleCoffee;