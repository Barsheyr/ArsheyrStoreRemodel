import { FeaturedProducts, Hero, Reviews } from "../components";

import { customFetch } from "../utils";

const url = "/products?limit=3";

export const loader = async () => {
  const response = await customFetch(url);
  console.log(response);
  const products = response.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Reviews />
    </>
  );
};
export default Landing;
