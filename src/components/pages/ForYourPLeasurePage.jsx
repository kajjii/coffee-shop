import ForYourPleasure from '../forYourPleasure/ForYourPleasure'
import AboutOurGoods from '../aboutOurGoods/AboutOurGoods'
import CoffeeList from '../coffeeList/CoffeeList'
import { beans } from '../../helpers/beansList';

const ForYourPLeasurePage = () => {
    const actualBeans = beans.slice(0, 6)
    return (
        <>
            <ForYourPleasure />
            <AboutOurGoods />
            <CoffeeList filteredBeans={actualBeans} /> 
        </>
    );
};

export default ForYourPLeasurePage;