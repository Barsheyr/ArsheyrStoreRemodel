import ProductsGrid from "./ProductGrid";
import SectionTitle from "./SectionTitle";
const FeaturedProducts = () => {
  return (
    <div className="pt-24 ">
      <SectionTitle
        text="Featured products"
        subtitle="Explore our latest collection of premium timepieces, meticulously crafted for the discerning watch enthusiast."
      />
      <ProductsGrid />
    </div>
  );
};
export default FeaturedProducts;
