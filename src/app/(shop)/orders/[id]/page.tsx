import { Title } from "@/components/index";
import  initialData  from "@/seed/seed";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  };
}
async function page({ params }: Props) {


  const { id } =  params;

  //TODO: verificacion  si el ID corresponde al Usuario logueado 

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
        <Title title={`Orden Numero ${id}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className=" flex flex-col mt-5">


           <div className={
            clsx( 'flex items-center rounded-lg py-2 px-3.5 text-white text-xs font-bold  mb-5',
              {"bg-red-500": false ,
                "bg-green-700 ": true
              }
            )
           }>
            <IoCardOutline size={30}/>
            {/* <span className="mx-2">Pago Pendiente </span> */}
            <span className="mx-2">Pago Exitoso  </span>

           </div>

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
            


              <div className={
            clsx( 'flex items-center rounded-lg py-2 px-3.5 text-white text-xs font-bold  mb-5',
              {"bg-red-500": false ,
                "bg-green-700 ": true
              }
            )
           }>
            <IoCardOutline size={30}/>
            {/* <span className="mx-2">Pago Pendiente </span> */}
            <span className="mx-2">Pago Exitoso  </span>

           </div>
            




            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
