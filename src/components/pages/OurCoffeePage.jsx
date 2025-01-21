import { useState } from 'react'
import OurCoffee from '../ourCoffee/OurCoffee'
import AboutOurBeans from '../aboutOurBeans/AboutOurBeans'
import CoffeeList from '../coffeeList/CoffeeList'
import CoffeeFilter from '../coffeeFilter/CoffeeFilter'

const OurCoffeePage = () => {

    const [beansTitle, setBeansTitle] = useState('');
    const [optionCountry, setOptionCountry] = useState('');

    const handleFilterName = (e) => {
        setBeansTitle(e.target.value);
    };

    const handleOptionCountry = (country) => {
        if(country === 'All'){
            setOptionCountry('')
            return
        }
        setOptionCountry(country);
    };
   
    return (
        <>
            <OurCoffee />
            <AboutOurBeans />
            <CoffeeFilter
                value={optionCountry}
                handleOptionCountry={handleOptionCountry}
                setFilterName={handleFilterName} />
            <CoffeeList 
                country={optionCountry} 
                title={beansTitle} />
        </>
    );
};

export default OurCoffeePage;