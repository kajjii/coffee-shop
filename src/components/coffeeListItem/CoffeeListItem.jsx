import {NavLink} from 'react-router-dom'
import './coffeeListItem.scss'

const CoffeeListItem = ({index, img, title, price, country}) => {
    return (
        <li className="coffee__item">
            <NavLink to={`/singleCoffee/${index}`}>
                <img src={img} alt={title} />
                <p className="coffee__text">{title}</p>
                <p className="coffee__country">{country}</p>
                <p className="coffee__price">{price}$</p>
            </NavLink>
        </li>
    );
};

export default CoffeeListItem;