import AppNav from "../appNav/AppNav";
import CoffeeLine from "../UI/coffeeLine/CoffeeLine";
import navBeansFooter from '../../images/icons/coffee-beans-navigation.png'
import './footerNav.scss'

const FooterNav = () => {
    return (
        <div className="footer__nav" id="foot">
            <AppNav icon={navBeansFooter} />
            <CoffeeLine />
        </div>
    );
};

export default FooterNav;