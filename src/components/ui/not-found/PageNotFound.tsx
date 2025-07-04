import { titleFont } from "@/config/fonts";
import { GiBreakingChain } from "react-icons/gi";

export default function PageNotFound() {
  return (
    <div
      className={` ${titleFont.className} min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4 antialiased `}
    >
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-md w-full transition-all">
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
          <GiBreakingChain size={50} />
        </div>
        <p className="text-xl text-gray-600 mb-4">Page Not Found</p>
        <p className="text-gray-500 mb-6">
          The page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className=" inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
