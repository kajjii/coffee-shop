import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../shared/api/products";
import CoffeeLine from "../UI/coffeeLine/CoffeeLine";
import "./aboutSingleCoffee.scss";

const AboutSingleCoffee = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductQuery(id);

  return (
    <div className="about-it">
      <div className="about-it__wrapper">
        <img className="about-it__img" src={data?.imgBig} alt="big-beans" />
        <div className="about-it__info">
          <h2 className="about-it__title">About it</h2>
          <CoffeeLine />
          <p className="about-it__country">
            <strong>Country:</strong> {data?.country}
          </p>
          <p className="about-it__desc">
            <strong>Description: </strong>
            {isLoading ? (
              <strong>Загрузка текста</strong>
            ) : (
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`
            )}
          </p>
          <p className="about-it__price">
            <strong>
              Price: &nbsp;&nbsp;<span>{data?.price}$</span>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSingleCoffee;
