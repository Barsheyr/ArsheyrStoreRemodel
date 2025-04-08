import { Link, useLoaderData } from "react-router-dom";

const ProductsList = () => {
  const { products } = useLoaderData();

  return (
    <div className=" gap-y-6 mt-12">
      {products.map((product) => {
        const { id, title, price, image, description } = product;
        return (
          <Link
            key={id}
            to={`/products/${id}`}
            className="flex gap-4 p-4 shadow-md hover:shadow-xl transition duration-300 rounded-lg"
          >
            <img
              src={image}
              alt={title}
              className="w-56 h-56 object-cover rounded-lg"
            />
            <div className="">
              <h2 className="font-semibold text-md">{title}</h2>
              <p className="text-sm text-slate-600 line-clamp-2">
                {description}
              </p>
              <span className="text-primary font-medium mt-2 block">
                ${price}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
