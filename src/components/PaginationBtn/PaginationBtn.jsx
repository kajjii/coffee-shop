import './paginationBtn.scss'

const PaginationBtn = ({ totalPages, currentPage, paginate }) => {

    const getPageNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="pagination">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                &lt;
            </button>
            <div className="pagination__numbers">
                {pageNumbers.map((page) => (
                    <button
                        key={page}
                        onClick={() => paginate(page)}
                        className={page === currentPage ? 'active' : ''}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                &gt;
            </button>
        </div>
    );
};

export default PaginationBtn