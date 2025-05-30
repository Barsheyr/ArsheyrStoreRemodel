// import { useLoaderData } from "react-router-dom";
// import ProductGrid from "./ProductGrid";
// import ProductsList from "./ProductsList";
// import { useState } from "react";
// import { BsFillGridFill, BsList } from "react-icons/bs";

// const ProductsContainer = () => {
//   const { meta } = useLoaderData();
//   // const totalProducts = meta.pagination.total;
//   const [layout, setLayout] = useState("grid");

//   const setActiveStyles = (pattern) => {
//     return `text-xl btn btn-circle btn-sm ${
//       pattern === layout
//         ? "btn-primary text-primary-content"
//         : "btn-ghost text-base-content"
//     }`;
//   };

//   return (
//     <>
//       {/* HEADER */}
//       <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
//         <h4 className="font-medium text-md">products</h4>
//       </div>

//       {/* PRODUCTS */}
//       <div>
//         <div>
//           <ProductGrid />
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductsContainer;

import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductGrid from "./ProductGrid";
import ProductsList from "./ProductsList";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductContainer = ({ products }) => {
  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">products</h4>
        <div className="flex gap-x-2">
          <button
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>

      {layout === "grid" ? (
        <ProductGrid products={products} />
      ) : (
        <ProductsList products={products} />
      )}
    </>
  );
};

export default ProductContainer;
