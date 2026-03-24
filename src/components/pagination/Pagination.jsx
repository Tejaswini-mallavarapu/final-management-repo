const Pagination = ({
  currentPage,
  totalPages,
  goToPage,
  next,
  prev,
  showingFrom,
  showingTo,
  totalItems,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination-container">

<div className="pagination-info">
  Showing entries {showingFrom} to {showingTo} of {totalItems}
</div>

      <div className="pagination">

        <button onClick={() => goToPage(1)} disabled={currentPage === 1}>
          «
        </button>

        <button onClick={prev} disabled={currentPage === 1}>
          ‹
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}

        <button onClick={next} disabled={currentPage === totalPages}>
          ›
        </button>

        <button
          onClick={() => goToPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          »
        </button>

      </div>
    </div>
  );
};

export default Pagination;