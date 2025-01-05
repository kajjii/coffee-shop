import blackBeans from '../../../images/icons/coffee-beans-black.png'
import './coffeeLine.scss'

const CoffeeLine = ({ icon = blackBeans, color = '#000'}) => {
    return (
        <div className='coffee__line'>
            <hr className='line' style={{backgroundColor: color}} />
            <img src={icon} alt="beans-black" />
            <hr className='line' style={{backgroundColor: color}} />
        </div>
    );
};

export default CoffeeLine;