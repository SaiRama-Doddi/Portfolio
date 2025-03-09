import { navLinks } from "@/constants/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav(): void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const NavOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div className={`fixed inset-0 z-[1000] ${showNav ? "block" : "hidden"}`}>
      {/* Overlay (Closes on Click) */}
      <div className="fixed inset-0 bg-black opacity-70" onClick={closeNav}></div>

      {/* Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-[#0f0715] 
                    text-white flex flex-col justify-center space-y-6 z-[10000] p-8
                    transform transition-transform duration-300 ${NavOpen}`}
      >
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-6 right-6 sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer hover:text-yellow-400 transition duration-300"
        />

        {/* Navigation Links */}
        <div className="flex flex-col space-y-6">
          {navLinks.map((navlink) => (
            <Link key={navlink.id} href={navlink.url} className="group">
              <p className="relative text-[22px] sm:text-[28px] font-medium text-gray-300 
                            ml-6 pb-2 border-b border-transparent transition-all duration-300 ease-in-out 
                            group-hover:text-yellow-400 group-hover:border-yellow-400">
                {navlink.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
