import {NavLink} from 'react-router-dom'
import './coffeeListItem.scss'

const CoffeeListItem = ({ bean: {id, img, title, country, price} }) => {
    return (
        <li className="coffee__item">
            <NavLink to={`/singleCoffee/${id}`}>
                <img src={img} alt={title} />
                <p className="coffee__text">{title}</p>
                <p className="coffee__country">{country}</p>
                <p className="coffee__price">{price}$</p>
            </NavLink>
        </li>
    );
};

export default CoffeeListItem;