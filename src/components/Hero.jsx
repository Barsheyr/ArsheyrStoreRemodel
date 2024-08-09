import { Link } from "react-router-dom";

import hero5 from "../assets/project-assets/pic1.jpg";
import hero6 from "../assets/project-assets/pic2.jpg";
import hero7 from "../assets/project-assets/pic3.jpg";
import hero8 from "../assets/project-assets/pic4.jpg";

const carouselImages = [hero5, hero7, hero6, hero8];
const Hero = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          We are reshaping your shopping experience.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Where Fashion Meets Individuality. Explore our curated collections for
          the latest trends and timeless classics. Elevate your wardrobe with
          our must-have pieces, designed to inspire confidence and creativity."
        </p>
        <div className="mt-10 ">
          <Link to="products" className="btn btn-primary ">
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden  h-[28rem] lg:carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80  object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
