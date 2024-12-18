import CoffeeLine from '../UI/coffeeLine/CoffeeLine';
import girl from '../../images/girl.png'
import './aboutOurBeans.scss'

const AboutOurBeans = () => {
    return (
        <div className="our-beans">
            <div className="our-beans__wrapper">
                <img src={girl} alt="girl" />
                <div className="our-beans__info">
                    <h2 className="our-beans__title">About our beans</h2>
                    <CoffeeLine />
                    <p className="our-beans__text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br />
                        <br />
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        <br />
                        so questions. 
                        <br />
                        As greatly removed calling pleased improve an.
                        <br />
                         Last ask him cold feel
                         <br />
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        <br />
                        is song that held help face.
                    </p>     
                </div>
            </div>
            <hr />
        </div>
    );
};

export default AboutOurBeans;