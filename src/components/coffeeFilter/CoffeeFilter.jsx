import { useDebounceCallback } from "usehooks-ts";
import cn from "classnames";
import "./coffeeFilter.scss";

const CoffeeFilter = ({ setFilterName, value = "", handleOptionCountry }) => {

  const debounce = useDebounceCallback(setFilterName, 1000);

  const classnames = (...args) => {
    let str = "";
    for (let arg of args) {
      if (
        typeof arg === "function" ||
        Array.isArray(arg) ||
        typeof arg === "number"
      ) {
        throw new Error("Не тот тип данных");
      }
      if (typeof arg === "string") {
        str += " " + arg;
        continue;
      }
      for (let key in arg) {
        if (arg[key]) {
          str += " " + key;
        }
      }
    }
    return str;
  };

  return (
    <div className="coffee__filter">
      <div className="coffee__search">
        <p className="coffee__filter-text">Looking for</p>
        <input
          className="coffee__input"
          type="text"
          placeholder="start typing here..."
          onChange={debounce}
        />
      </div>
      <div className="coffee__filter-wrapper">
        <p className="coffee__filter-text">Or filter</p>
        <button
          onClick={() => handleOptionCountry("All")}
          className={classnames("coffee__option", { active: value === "" })}
        >
          All
        </button>
        <button
          onClick={() => handleOptionCountry("Brazil")}
          className={classnames("coffee__option", {
            active: value === "Brazil"
          })}
        >
          Brazil
        </button>
        <button
          onClick={() => handleOptionCountry("Kenya")}
          className={classnames("coffee__option", { active: value === "Kenya" })}
        >
          Kenya
        </button>
        <button
          onClick={() => handleOptionCountry("Colombia")}
          className={classnames("coffee__option", { active: value === "Colombia" })}
        >
          Colombia
        </button>
      </div>
    </div>
  );
};

export default CoffeeFilter;
