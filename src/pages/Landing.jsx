import { FeaturedProducts, Hero, Reviews } from "../components";
import Banners from "../components/Banners";

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
    <div>
      <div className="align-element py-20">
        <Hero />
        <FeaturedProducts />
        <Reviews />
      </div>
      <Banners />
    </div>
  );
};
export default Landing;
