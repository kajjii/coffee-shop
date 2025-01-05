import { useState, useEffect } from 'react';
import axios from 'axios';
import ForYourPleasure from '../forYourPleasure/ForYourPleasure'
import AboutOurGoods from '../aboutOurGoods/AboutOurGoods'
import CoffeeList from '../coffeeList/CoffeeList'

const ForYourPLeasurePage = () => {
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
    return (
        <>
            <ForYourPleasure />
            <AboutOurGoods />
            <CoffeeList products={allBeans} />
        </>
    );
};

export default ForYourPLeasurePage;