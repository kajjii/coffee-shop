import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import CoffeeListItem from '../coffeeListItem/CoffeeListItem'
import './ourBest.scss'

const OurBest = () => {

    const [allBeans, setAllBeans] = useState([]);

    useEffect(() => {
        const fetchAllBeans = async () => {
            try {
                const response = await axios.get('http://localhost:3001/beans');
                 setAllBeans(response.data);
             } catch (error) {
                 console.error("Error fetching all beans:", error);
             }
        };

        fetchAllBeans();
      }, []);

    const bestBeans = useMemo(() => {
           if (!allBeans || allBeans.length === 0) {
                 return [];
            }

             const shuffledBeans = [...allBeans].sort(() => Math.random() - 0.5);
              return shuffledBeans.slice(0, 3);

        }, [allBeans]);

    return (
        <div className='our-best'>
            <h2 className="our-best__title">Our Best</h2>
            <ul className="our-best__coffee">
                {bestBeans.map((bean) => {
                    return <CoffeeListItem
                                key={bean.id}
                                title={bean.title}
                                img={bean.img}
                                price={bean.price}
                                bean={bean}
                            />
                })}
            </ul>
        </div>
    );
};

export default OurBest;