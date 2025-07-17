import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

function page() {
  return (
    <div className="flex justify-center items-center h-[80vh] bg-gradient-to-br from-gray-100 to-white text-gray-800">
      <div className="flex flex-col items-center gap-4 p-10 bg-white rounded-xl shadow-lg max-w-md text-center">
        <IoCartOutline size={100} className="text-gray-400 mb-4" />

        <h1 className="text-2xl font-bold">Tu carrito está vacío</h1>
        <p className="text-gray-600">Parece que no has añadido ningún producto aún.</p>

        <Link
          href="/"
          className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-lg transition-all duration-300"
        >
          Volver a la tienda
        </Link>
      </div>
    </div>
  );
}

export default page;
