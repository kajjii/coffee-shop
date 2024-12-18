import CoffeeListItem from '../coffeeListItem/CoffeeListItem';
import './coffeeList.scss'

const CoffeeList = ({filteredBeans}) => {

    return (
        <div className='coffee__list'>
            <ul className="coffee__choice">     
                {filteredBeans.map((bean, index) => {
                    return <CoffeeListItem
                                key={bean.id}
                                title={bean.title}
                                img={bean.img}
                                country={bean.country}
                                price={bean.price}
                                index={index}
                            />
                })}
            </ul>
        </div>
    );
};

export default CoffeeList;