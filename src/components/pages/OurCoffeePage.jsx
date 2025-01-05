import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import OurCoffee from '../ourCoffee/OurCoffee'
import AboutOurBeans from '../aboutOurBeans/AboutOurBeans'
import CoffeeList from '../coffeeList/CoffeeList'
import CoffeeFilter from '../coffeeFilter/CoffeeFilter'

const OurCoffeePage = () => {
    const [allBeans, setAllBeans] = useState([]);
    const [filteredNameBeans, setFilteredNameBeans] = useState('')
    const [optionCountry, setOptionCountry] = useState('All')

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

    const filteredBeans = useMemo(() => {
        let filtered = [...allBeans]

        if (optionCountry !== 'All') {
            filtered = filtered.filter(bean => bean.country === optionCountry)
        }

        if (filteredNameBeans.trim() !== '') {
            filtered = filtered.filter(bean => 
                bean.title.toLowerCase().startsWith(filteredNameBeans.toLowerCase())
            )
        }
        return filtered
    }, [allBeans, filteredNameBeans, optionCountry])

    const handlerFilterName = (e) => {
        setFilteredNameBeans(e.target.value)
    }

    const handlerOptionCountry = (country) => {
        setOptionCountry(country)
    }


    return (
        <>
            <OurCoffee />
            <AboutOurBeans />
            <CoffeeFilter
                onFilterName={filteredNameBeans}
                onFilterNameChange={handlerFilterName}
                onFilterChange={handlerOptionCountry}
                optionCountry={optionCountry} />
            <CoffeeList products={filteredBeans.length > 0 ? filteredBeans : undefined} />
        </>
    );
};

export default OurCoffeePage;