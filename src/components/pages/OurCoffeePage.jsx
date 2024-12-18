import { useState, useMemo } from 'react'
import { beans } from '../../helpers/beansList'
import OurCoffee from '../ourCoffee/OurCoffee'
import AboutOurBeans from '../aboutOurBeans/AboutOurBeans'
import CoffeeList from '../coffeeList/CoffeeList'
import CoffeeFilter from '../coffeeFilter/CoffeeFilter'

const OurCoffeePage = () => {
    const [filteredNameBeans, setFilteredNameBeans] = useState('')
    const [optionCountry, setOptionCountry] = useState('All')

    const filteredBeans = useMemo(() => {
        let filtered = beans.slice(0, 6)

        if (optionCountry !== 'All') {
            filtered = filtered.filter(bean => bean.country === optionCountry)
        }

        if (filteredNameBeans.trim() !== '') {
            filtered = filtered.filter(bean => 
                bean.title.toLowerCase().includes(filteredNameBeans.toLowerCase())
            )
        }
        return filtered
    }, [filteredNameBeans, optionCountry])

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
            <CoffeeList filteredBeans={filteredBeans} />
        </>
    );
};

export default OurCoffeePage;