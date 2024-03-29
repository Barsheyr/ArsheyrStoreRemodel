import React from "react";
import { Filters, PaginationContainer, ProductContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch(url);

  const products = response.data;
  const meta = response.data.meta;

  return { products, meta, params };
};

const Products = () => {
  return (
    <div>
      <>
        <Filters />
        <ProductContainer />
        <PaginationContainer />
      </>
    </div>
  );
};

export default Products;
