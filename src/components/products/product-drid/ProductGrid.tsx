import { Product } from "@/interfaces";
import ProductGridItem from "./ProductGridItem";

interface Props {
  products: Product[];
}

function ProductGrid({ products }: Props) {
  // console.log(products);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3  gap-10 mb-10">
      {products.map((e) => (
        <ProductGridItem key={e.slug} product={e} />
      ))}
    </div>
  );
}

export default ProductGrid;
