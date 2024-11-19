"use client";
import Image from "next/image";
import Logo from "@/app/assets/Logo.png";
import Search from "@/app/assets/Search.png";
import Search2 from "@/app/assets/Search-2.png";
import Down from "@/app/assets/Down-Arrow.png";
import Cart from "@/app/assets/Cart.png";
import Login from "@/app/assets/LogIn.png";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md relative z-10">
      <div className="flex items-center justify-between w-full px-4 py-3 md:w-[1240px] mx-auto">
        <Image src={Logo} alt="Logo" className="w-40 h-[26px]" />

        <div className="hidden md:flex items-center gap-8 text-[#000000]">
          <div className="flex items-center gap-1">
            <p className="font-satoshi text-[16px] font-normal">Shop</p>
            <Image src={Down} alt="Down" className="w-4 h-4" />
          </div>
          <p className="font-satoshi text-[16px] font-normal">On Sale</p>
          <p className="font-satoshi text-[16px] font-normal">New Arrivals</p>
          <p className="font-satoshi text-[16px] font-normal">Brands</p>
        </div>

        <div className="xs:w-[500px] xs:h-[48px] items-center py-2 px-4 rounded-[62px] gap-3 bg-[#F0F0F0] hidden xs:flex">
          <Image src={Search} alt="Search" className="w-6 h-6" />
          <p className="hidden md:block font-satoshi text-[16px] text-[#00000066]">
            Search for products...
          </p>
        </div>
        <Image src={Search2} alt="Search" className="w-6 h-6 xs:hidden" />

        {/* Icons Section */}
        <div className="flex items-center gap-4">
          <Image src={Cart} alt="Cart" className="w-6 h-6" />
          <Image src={Login} alt="Login" className="w-6 h-6" />

          <button
            className="block md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-[3px]">
              <span
                className={`block w-6 h-[2px] bg-black transition-transform ${
                  menuOpen ? "rotate-45 translate-y-[5px]" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-[2px] bg-black ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-[2px] bg-black transition-transform ${
                  menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-10 md:hidden">
          <div className="flex flex-col items-start gap-4 px-4 py-3">
            <div className="flex items-center gap-1">
              <p className="font-satoshi text-[16px] font-normal">Shop</p>
              <Image src={Down} alt="Down" className="w-4 h-4" />
            </div>
            <p className="font-satoshi text-[16px] font-normal">On Sale</p>
            <p className="font-satoshi text-[16px] font-normal">New Arrivals</p>
            <p className="font-satoshi text-[16px] font-normal">Brands</p>
          </div>
        </div>
      )}
    </div>
  );
}
