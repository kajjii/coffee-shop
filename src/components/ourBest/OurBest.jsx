import { beans } from '../../helpers/beansList'
import CoffeeListItem from '../coffeeListItem/CoffeeListItem'
import './ourBest.scss'

const OurBest = () => {
    const bestBeans = beans.slice(5, 8)
    return (
        <div className='our-best'>
            <h2 className="our-best__title">Our Best</h2>
            <ul className="our-best__coffee">
                {bestBeans.map((bean, index) => {
                    return <CoffeeListItem
                                key={bean.id}
                                title={bean.title}
                                img={bean.img}
                                price={bean.price}
                                index={index}
                            />
                })}
            </ul>
        </div>
    );
};

export default OurBest;