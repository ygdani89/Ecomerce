import { titleFond } from "@/config/fonds";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center gap-2 px-4 text-sm text-center">
        <p className={`${titleFond.className} antialiased font-bold`}>© {new Date().getFullYear()} Patron Shop</p>
        <p>Crafted with ❤️ by your amazing team.</p>
        <div className="flex gap-4 mt-2">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;