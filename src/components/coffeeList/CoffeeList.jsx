import { useState } from "react";
import { useGetProductsQuery } from "../../shared/api/products";
import CoffeeListItem from "../coffeeListItem/CoffeeListItem";
import PaginationBtn from "../paginationBtn/PaginationBtn";
import "./coffeeList.scss";

const CoffeeList = ({ title, country }) => {
  const [page, setPage] = useState(1);
  const { data } = useGetProductsQuery({
    page,
    filter: { title, country }
  });

  return (
    <div className="coffee__list">
      {!data?.products.length ? (
        <p className="coffee__miss">Товары отсутствуют</p>
      ) : (
        <ul className="coffee__choice">
          {data?.products?.map(bean => (
            <CoffeeListItem key={bean.id} bean={bean} />
          ))}
        </ul>
      )}
      {data?.totalPages > 1 && (
        <PaginationBtn
          page={page}
          totalPages={data?.totalPages}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default CoffeeList;
