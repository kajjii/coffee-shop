import { useState } from 'react';
import CoffeeListItem from '../coffeeListItem/CoffeeListItem';
import PaginationBtn from '../paginationBtn/PaginationBtn';
import './coffeeList.scss'

const CoffeeList = ({products}) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [beansPerPage] = useState(6)


    const indexOfLastProduct = currentPage * beansPerPage;
    const indexOfFirstProduct = indexOfLastProduct - beansPerPage;
    const currentBeans = !products ? [] : products.slice(indexOfFirstProduct, indexOfLastProduct);
    
    const totalPages = products ? Math.ceil(products.length / beansPerPage) : 0;
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // const currentBeans = useMemo(() => {
    //     if (products === undefined) {
    //         return []
    //     }
    //     return products.slice(indexOfFirstProduct, indexOfLastProduct);

    // }, [products, currentPage, beansPerPage, indexOfFirstProduct, indexOfLastProduct]);
    // const totalProducts = useMemo(() => products ? products.length : beansObj.length, [products, beansObj]);
    // const totalPages = useMemo(() => Math.ceil(totalProducts / beansPerPage), [totalProducts, beansPerPage])


    return (
        <div className='coffee__list'>
            {currentBeans.length === 0 ? (
                <p className='coffee__miss'>Товары отсутствуют</p>
                ) : (
                <ul className="coffee__choice">
                    {currentBeans.map((bean) => (
                        <CoffeeListItem
                            key={bean.id}
                            bean={bean}
                        />
                    ))}
                </ul>
            )}
            {currentBeans.length > 0 && (
                <PaginationBtn 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    paginate={paginate} />
                )
            }
        </div>
    );
};

export default CoffeeList;