import blackBeans from '../../../images/icons/coffee-beans-black.png'
import './coffeeLine.scss'

const CoffeeLine = () => {
    return (
        <div className='coffee__line'>
            <hr className='line' />
            <img src={blackBeans} alt="beans-black" />
            <hr className='line' />
        </div>
    );
};

export default CoffeeLine;