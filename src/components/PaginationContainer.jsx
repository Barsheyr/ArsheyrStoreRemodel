import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaginationContainer = ({ totalProducts, currentPage, limit }) => {
  const totalPages = Math.ceil(totalProducts / limit);
  const navigate = useNavigate();
  const location = useLocation();

  const handlePageChange = (page) => {
    const params = new URLSearchParams(location.search);
    params.set("page", page);
    navigate(`${location.pathname}?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex justify-center gap-2">
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNum = index + 1;
        return (
          <button
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            className={`btn btn-sm ${
              pageNum === Number(currentPage) ? "btn-primary" : "btn-outline"
            }`}
          >
            {pageNum}
          </button>
        );
      })}
    </div>
  );
};

export default PaginationContainer;
