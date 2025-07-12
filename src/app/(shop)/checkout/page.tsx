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
        <Title title={"Verificar Orden"} />

          {/* Carrito */}
          <div className=" flex flex-col mt-5">
            <span className="text-xl"> Editar carrito </span>
            <Link href="/cart" className="underline mb-5">
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
                  <p>$ {product.price} x 3</p>
                  <p className="font-bold "> Subtotal = ${product.price * 3}</p>
                  {/* <button className="underline mt-3"> remover </button> */}
                </div>
              </div>
            ))}
          </div>
          {/* checkout - Resumen de la compra   */}

          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Direccion de Entrega </h2>
            <div className="mb-10">
              <p>Av. simpreviva 123</p>
              <p> colonia de centro</p>
              <p>apt 403</p>
              <p>CP 123886239</p>
              tel: 49023803
            </div>

            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

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
                href={"/orders/123"}
              >
                {" "}
                Ordenar compra
              </Link>

              <p className="text-xs mt-10">
                {" "}
                Al hacer clic en “Comprar”, usted acepta que ha revisado su
                pedido y acepta nuestros Términos y Condiciones, Políticas de
                Privacidad y de Devoluciones. Esta orden de compra constituye un
                compromiso legal de pago y aceptación de los productos y/o
                servicios solicitados, conforme a la legislación aplicable.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
