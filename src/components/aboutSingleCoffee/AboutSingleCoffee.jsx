import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CoffeeLine from '../UI/coffeeLine/CoffeeLine';
import './aboutSingleCoffee.scss'

const AboutSingleCoffee = () => {

    const {id} = useParams()
    const [bean, setBean] = useState(null)

    useEffect(() => {
        const fetchSingleBean = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/beans/${id}`)

                setBean(response.data)
            } catch (error) {
                console.error("Error fetching bean:", error);
            }
        }

        fetchSingleBean()
    }, [id])

    if (!bean) {
        return <p>Loading...</p>
    }

    return (
        <div className='about-it'>
            <div className="about-it__wrapper">
                <img className='about-it__img' src={bean.imgBig} alt="big-beans" />
                <div className="about-it__info">
                    <h2 className="about-it__title">About it</h2>
                    <CoffeeLine />
                    <p className="about-it__country"><strong>Country:</strong> {bean.country}</p>
                    <p className="about-it__desc"><strong>Description: </strong> 
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat.
                    </p>
                    <p className="about-it__price"><strong>Price: &nbsp;&nbsp;<span>{bean.price}$</span></strong></p>
                </div>
            </div>
        </div>
    );
};

export default AboutSingleCoffee;