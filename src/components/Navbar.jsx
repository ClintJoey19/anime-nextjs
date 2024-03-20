"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Container from "./Container";
import { usePathname } from "next/navigation";
import { RiMenuFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const navLinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  const path = usePathname();
  const [open, setOpen] = useState(true);
  const session = true;
  const isAdmin = true;

  return (
    <Container className="h-[10vh]">
      <div className="w-[1220px] max-lg:w-full h-full flex justify-between items-center">
        <div className="font-semibold text-2xl">
          Blog<span className="text-blue-500 font-extrabold">.</span>
        </div>

        <div className="relative">
          <nav
            className={`flex max-md:flex-col max-md:w-[250px] max-md:bg-white max-md:p-4 max-md:rounded-md max-md:text-black gap-8 items-center max-md:absolute max-md:top-10 max-md:right-0 relative ${
              !open ? "hidden" : ""
            }`}
          >
            <ul className="flex gap-8 max-md:flex-col">
              {navLinks.map((item, i) => (
                <li
                  className={`${
                    path === item.href ? "text-blue-500 font-bold" : ""
                  } hover:text-blue-500 transition-colors flex justify-center`}
                  key={i}
                >
                  <Link href={item.href} className="">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-5 max-md:flex-col max-md:justify-center">
              {session ? (
                <>
                  {isAdmin && (
                    <Link
                      className={`hover:text-blue-500 transition-colors`}
                      href={`/admin`}
                    >
                      Admin
                    </Link>
                  )}

                  <button className="bg-blue-500 hover:bg-blue-700 text-white border-none rounded-md py-2 px-4">
                    Logout
                  </button>
                </>
              ) : (
                <button className="bg-blue-500 hover:bg-blue-700 text-white border-none rounded-md py-2 px-4">
                  Login
                </button>
              )}
            </div>
          </nav>
          {/* <div className="absolute top-0 right-0 md:hidden">Close</div> */}
          <div
            className="hidden max-md:block cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {!open ? (
              <RiMenuFill className="text-2xl" />
            ) : (
              <AiOutlineClose className="text-2xl" />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
