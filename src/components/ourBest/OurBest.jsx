import { useMemo } from 'react';
import { useGetBestProductQuery } from '../../shared/api/products';
import CoffeeListItem from '../coffeeListItem/CoffeeListItem'
import './ourBest.scss'

const OurBest = () => {

    const { data } = useGetBestProductQuery();

    const bestBeans = useMemo(() => {
        if (!data || data?.length === 0) {
                return [];
        }

        const shuffledBeans = [...data].sort(() => Math.random() - 0.5);
        return shuffledBeans.slice(0, 3);

    }, [data]);

    return (
        <div className='our-best'>
            <h2 className="our-best__title">Our Best</h2>
            <ul className="our-best__coffee">
                {bestBeans.map((bean) => {
                    return <CoffeeListItem
                                key={bean.id}
                                bean={bean}
                            />
                })}
            </ul>
        </div>
    );
};

export default OurBest;