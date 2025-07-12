import { QuantitySelector, Title } from "@/components/index";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import Image from "next/image";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

function page() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
        <Title title={"Carrito"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className=" flex flex-col mt-5">
            <span className="text-xl"> Agregar mas Items </span>
            <Link href="/" className="underline mb-5">
              {" "}
              Continua comprando
            </Link>

            {/* Items */}

            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={80}
                  height={50}
                 
                  style={{ width: "100px", height: "100px" }}
                  alt={product.title}
                  className="mr-5 rounded"
                />

                <div>
                  <p>{product.title} </p>
                  <p>$ {product.price}</p>
                  <QuantitySelector />
                  <button className="underline mt-3"> remover </button>
                </div>
              </div>
            ))}
          </div>
          {/* checkout - Resumen de la compra   */}

          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl ">resumen orden</h2>
            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 articulos</span>

              <span>Sub Total</span>
              <span className="text-right ">$ 90 </span>

              <span>Impuestos (15% ) </span>
              <span className="text-right "> $ 13.5</span>

              <span className="text-2xl font-bold mt-5 underline">Total </span>
              <span className="text-right text-2xl mt-5 font-bold underline">
                {" "}
                $ 103.5{" "}
              </span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <Link
                className="flex btn-primary justify-center"
                href={"/checkout/address"}
              >
                {" "}
                checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
