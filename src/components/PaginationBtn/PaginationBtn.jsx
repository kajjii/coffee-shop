import "./paginationBtn.scss";

const PaginationBtn = ({ totalPages, setPage, page }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => setPage(p => Math.max(p - 1, 1))}
        disabled={page === 1}
      >
        &lt;
      </button>
      <div className="pagination__numbers">
        {[...new Array(totalPages)].map((_, i) => {
          const pageNumber = i + 1;
          return (
            <button
              key={i}
              onClick={() => setPage(pageNumber)}
              className={pageNumber === page ? "active" : ""}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => setPage(p => Math.min(p + 1, totalPages))}
        disabled={page === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default PaginationBtn;
