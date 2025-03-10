"use client";

import { navLinks } from "@/constants/constant";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav(): void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed h-[12vh] z-[10] w-full transition-all duration-700 ${navBg ? "bg-[#168aad]" : "fixed"}`}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="logo"
          width={170}
          height={170}
          className="ml-[-1.5rem] sm:ml-0"
        />

        {/* Nav Links */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url} className="nav_link hover_effect">
                {navlink.label}
              </Link>
            ))}
          </div>

          {/* Button */}
          <div className="flex items-center space-x-4">
            <button className="md:px-10 md:py-3 px-8 py-3 text-[black] font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg cursor-pointer">
              Hire Me
            </button>

            {/* Burger Menu */}
            <HiBars3BottomRight onClick={openNav} className="w-8 h-8 text-white cursor-pointer lg:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
