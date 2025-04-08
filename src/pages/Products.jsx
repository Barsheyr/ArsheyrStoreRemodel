// import React from "react";
// import { Filters, PaginationContainer, ProductContainer } from "../components";
// import { customFetch } from "../utils";

// const url = "/products";

// export const loader = async ({ request }) => {
//   const params = Object.fromEntries([
//     ...new URL(request.url).searchParams.entries(),
//   ]);
//   const response = await customFetch(url);

//   const products = response.data;
//   const meta = response.data.meta;

//   return { products, meta, params };
// };

// const Products = () => {
//   return (
//     <div className="align-element py-20">
//       <>
//         {/* <Filters /> */}
//         <ProductContainer />
//         <PaginationContainer />
//       </>
//     </div>
//   );
// };

// export default Products;
import React from "react";
import { Filters, PaginationContainer, ProductContainer } from "../components";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";

const url = "/products";

export const loader = async ({ request }) => {
  const params = new URL(request.url).searchParams;
  const page = parseInt(params.get("page")) || 1;
  const limit = parseInt(params.get("limit")) || 6;

  const response = await customFetch(url);
  const allProducts = response.data;

  const totalProducts = allProducts.length;
  const startIndex = (page - 1) * limit;
  const paginatedProducts = allProducts.slice(startIndex, startIndex + limit);

  return { products: paginatedProducts, totalProducts, page, limit };
};

const Products = () => {
  const { products, totalProducts, page, limit } = useLoaderData();

  return (
    <div className="align-element py-20">
      {/* <Filters /> */}
      <ProductContainer products={products} />
      <PaginationContainer
        totalProducts={totalProducts}
        currentPage={page}
        limit={limit}
      />
    </div>
  );
};

export default Products;
