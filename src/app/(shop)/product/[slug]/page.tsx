import {
  MobileSlideShow,
  QuantitySelector,
  SideSelector,
  SlideShw,
} from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: String;
  };
}

async function page({ params }: Props) {
  const { slug } = await params;

  const Product = initialData.products.find((e) => e.slug === slug);
  if (!Product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Slide Show */}

      <div className=" col-span-1 md:col-span-2">
        {/* Mobile SlideShow */}
        <MobileSlideShow
          title={Product.title}
          images={Product.images}
          className="block md:hidden"
        />

        {/* DEsktop  SlideShow */}
        <SlideShw
          title={Product.title}
          images={Product.images}
          className=" hidden md:block"
        />
      </div>

      {/* Detalle */}
      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {" "}
          {Product.title}
        </h1>

        <p className="text-lg mb-5"> $ {Product.price}</p>

        {/* Selector de Tallas*/}
        <SideSelector
          selectedSize={Product.sizes[0]}
          avialablesSizes={Product.sizes}
        />

        {/* Selector de Cantidad */}
        <QuantitySelector />

        {/*Boton */}
        <button className="bg-black text-white hover:bg-gray-800 transition-all duration-300 px-5 py-2 rounded-md shadow-md w-full text-lg font-semibold my-5">
          Agregar al carrito 🛒
        </button>

        {/*DEscripcion */}

        <h3 className="font-boldd text-sm">Description</h3>
        <p className="font-light">{Product.description}</p>
      </div>
    </div>
  );
}

export default page;
