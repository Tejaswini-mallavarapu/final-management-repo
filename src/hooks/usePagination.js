import { useState } from "react";

const usePagination = (data = [], itemsPerPage = 8) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = data.slice(startIndex, endIndex);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const next = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const showingFrom = totalItems === 0 ? 0 : startIndex + 1;
  const showingTo = Math.min(endIndex, totalItems);

  return {
    currentPage,
    totalPages,
    currentData,

    goToPage,
    next,
    prev,

    totalItems,
    itemsPerPage,

    showingFrom,
    showingTo,
  };
};

export default usePagination;