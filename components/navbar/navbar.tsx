import Link from "next/link";
import Image from "next/image";
import Navlink from "@/components/navbar/navlink";
// import { FaMoon, FaStar } from "react-icons/fa"; // Example icons if needed, or just text

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-emerald-900 text-gold-400 py-1 text-xs text-center tracking-widest uppercase font-sans">
        <span>✦ Halal Certified Luxury ✦ Family Friendly Environment ✦ No Alcohol Served</span>
      </div>
      
      {/* Main Navbar */}
      <div className="w-full bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.png" width={128} height={49} alt="Logo" priority className="opacity-90 hover:opacity-100 transition-opacity" />
          </Link>

          {/* Navlink component */}
          <Navlink />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
