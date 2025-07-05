"use client";
import Image from "next/image";
import Link from "next/link";
import { GiEnvelope } from "react-icons/gi";
import ils from "../../../assets/images/product.png";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { RiCloseLargeFill } from "react-icons/ri";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [navOptions, setNavOptions] = useState(false);

  const links = [
    { name: "features", href: "/" },
    { name: "solutions", href: "/solution" },
    { name: "pricing", href: "/pricing" },
  ];

  useEffect(() => {
    document.body.style.overflow = navOptions ? "hidden" : "auto";
  }, [navOptions]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNavOptions(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between py-3 xl:px-96 md:px-24 px-8 text-white">
        <Link href={"/"} className="bg-[#4a2bd3] p-3 rounded-lg relative">
          <span>
            <GiEnvelope size={24} />
          </span>
          <span className="absolute inset-0 rounded-md w-3 h-3 animate-pulse bg-[#1b64e3]"></span>
          <span className="absolute bottom-[-0] right-[-0] animate-pulse rounded-md w-3 h-3 bg-[#e31be0]">
            <Image
              src={ils}
              alt="Description"
              layout="fill"
              className="object-center w-1 h-1 rounded-md"
            />
          </span>
        </Link>

        <ul className="md:flex hidden space-x-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:underline capitalize text-xl"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <button className="bg-[#1b47e3] px-5 cursor-pointer hidden md:block capitalize py-2 text-xl rounded-lg">
          login
        </button>

        <button
          onClick={() => setNavOptions(true)}
          className="bg-[#1b47e3]/30 px-4 cursor-pointer md:hidden block capitalize py-2 text-xl rounded"
        >
          <HiBars3CenterLeft className="text-2xl" />
        </button>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`bg-black/70 fixed top-0 w-full z-50 h-80 transition-transform duration-300 ease-in-out ${
          navOptions ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-white/10 backdrop-blur-md border-b border-white/20 py-12 h-full relative">
          <button
            onClick={() => setNavOptions(false)}
            className="absolute right-4 top-4 text-sm cursor-pointer text-white p-2 rounded bg-[#1b47e3]"
          >
            <RiCloseLargeFill />
          </button>

          <div className="flex items-center flex-col justify-center py-3 xl:px-96 md:px-24 px-8 text-white text-center">
            <ul className="flex flex-col space-y-6">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:underline capitalize text-xl"
                    onClick={() => setNavOptions(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="bg-[#1b47e3] mt-6 w-full px-5 cursor-pointer capitalize py-2 text-xl rounded-lg">
              login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
