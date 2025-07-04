"use client";
import { UseUiStore } from "@/store";
import clsx from "clsx";

import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOut,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
  IoTimeOutline,
} from "react-icons/io5";

function SideBar() {
  const IsMenuOpen = UseUiStore((state) => state.IsSideMenuOpen);
  const IsMenuClose = UseUiStore((state) => state.closeSideMenu);

  return (
    <div>
      {IsMenuOpen && (
        <>
          {/* Fondo oscuro */}
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-40"  />
          <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" onClick={() => IsMenuClose()} />
          
          {/* Efecto de desenfoque */}
        </>
      )}
      {/* Menú lateral */}
      <nav
        className={clsx(
          "fixed p-6 right-0 top-0 w-[400px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 ease-in-out rounded-l-lg",
          {
            "translate-x-full": !IsMenuOpen
          }
        )}
      >
        {/* Botón de cerrar */}
        <IoCloseOutline
          size={28}
          className="absolute top-6 right-6 cursor-pointer text-gray-600 hover:text-gray-900 transition-colors"
          onClick={() => IsMenuClose()}
        />

        {/* Input de búsqueda */}
        <div className="relative mt-10">
          <IoSearchOutline
            size={22}
            className="absolute top-2.5 left-3 text-gray-500"
          />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full bg-gray-100 rounded-lg pl-10 py-2 pr-4 border text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Enlace al perfil */}
        <Link
          href=""
          className="flex items-center gap-3 mt-10 px-4 py-3 hover:bg-blue-50 rounded-lg transition-colors text-gray-800"
        >
          <IoPersonOutline size={24} />
          <span className="text-lg font-medium">Perfil</span>
        </Link>
        <Link
          href=""
          className="flex items-center gap-3  px-4 py-3 hover:bg-blue-50 rounded-lg transition-colors text-gray-800"
        >
          <IoTicketOutline size={24} />
          <span className="text-lg font-medium">Ordenes</span>
        </Link>
        <Link
          href=""
          className="flex items-center gap-3  px-4 py-3 hover:bg-blue-50 rounded-lg transition-colors text-gray-800"
        >
          <IoLogInOutline size={24} />
          <span className="text-lg font-medium">LogIn</span>
        </Link>

        <Link
          href=""
          className="flex items-center gap-3  px-4 py-3 hover:bg-blue-50 rounded-lg transition-colors text-gray-800"
        >
          <IoLogOut size={24} />
          <span className="text-lg font-medium">Log Out</span>
        </Link>
        <hr className="w-full h-px bg-black text-black my-10" />

        <Link
          href=""
          className="flex items-center gap-3  px-4 py-3 hover:bg-blue-50 rounded-lg transition-colors text-gray-800"
        >
          <IoShirtOutline size={24} />
          <span className="text-lg font-medium">Products</span>
        </Link>

        <Link
          href=""
          className="flex items-center gap-3  px-4 py-3 hover:bg-blue-50 rounded-lg transition-colors text-gray-800"
        >
          <IoTimeOutline size={24} />
          <span className="text-lg font-medium">Orders</span>
        </Link>

        <Link
          href=""
          className="flex items-center gap-3  px-4 py-3 hover:bg-blue-50 rounded-lg transition-colors text-gray-800"
        >
          <IoPeopleOutline size={24} />
          <span className="text-lg font-medium">Users </span>
        </Link>
      </nav>
    </div>
  )
}

export default SideBar;
