import { ProductGrid, Title } from "@/components";
import {Category} from '@/interfaces'

import { initialData } from "@/seed/seed";

interface Props {
  params: {
    id: Category;
  };
}

async function page({ params }: Props) {
  const { id } = await  params;

  //* llamar base de datos de mis productos
  const SeedProduct = initialData.products;

  const products = SeedProduct.filter((e) => e.gender === id);

  const labels : Record< Category , string> ={
    men: 'For Men',
    women: "For Women",
    kid: "For kid",
    unisex: " Unisex"
  }

  //  if(id === 'Kid'){
  //   notFound();

  //  }

  return (
    <>
      <Title title={`For ${id}`} subtitle="Todos los Productos" classname="mb-2" />
      <ProductGrid products={products} />
    </>
  );
}

export default page;
