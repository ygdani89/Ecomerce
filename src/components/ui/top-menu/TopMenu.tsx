"use client";
import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { UseUiStore } from "@/store";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

function TopMenu() {
  const openSideMenu = UseUiStore((state) => state.openSideMenu);

  return (
    <nav className="flex justify-between w-full items-center px-5">
      {/* {logo} */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            {" "}
            Tels
          </span>
          <span> | Shop </span>
        </Link>
      </div>

      {/* {center Menu} */}
      <div className="hidden sm:block">
        <Link
          className="m-2 px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 hover:text-black transition-all duration-200"
          href="/category/kid"
        >
          Kid
        </Link>
        <Link
          className="m-2 px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 hover:text-black transition-all duration-200"
          href="/category/women"
        >
          Women
        </Link>
        <Link
          className="m-2 px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 hover:text-black transition-all duration-200"
          href="/category/men"
        >
          Men
        </Link>
      </div>

      {/* Serch , cart , Menu  */}
      <div className="flex items-center ">
        <Link href="/serch">
          <IoSearchOutline className="font-bold w-5 h-5 mx-2" />
        </Link>

        <Link href="/cart" className="flex">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 bg-blue-500 -right-2 text-white ">
              {" "}
              2
            </span>

            <IoCartOutline className="font-bold w-5 h-5 mx-2" />
          </div>
        </Link>

        <button
          onClick={openSideMenu}
          className="m-2 px-4 py-2 text-sm  text-gray-800 bg-white  rounded-md shadow-sm hover:bg-gray-100 hover:text-black transition-all duration-200 font-bold"
        >
          {" "}
          click{" "}
        </button>
      </div>
    </nav>
  )
}

export default TopMenu;
