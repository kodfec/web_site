"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "/public/res/kodfec logo (1024 × 1024px).svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const NavBar = () => {
  const router = useRouter();
  function goToHome() {
    router.push("/");
  }
  function goToAboutUs() {
    router.push("/pages/aboutUs");
  }
  function goToQuotation() {
    router.push("/pages/quotation");
  }
  function goToPortfolio() {
    router.push("/pages/portfolio");
  }
  function goToContact() {
    router.push("/pages/contact");
  }
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="header bg-slate-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div>
          {/* <Link href="/" className="flex items-center"> */}
          <Image
            src={Logo}
            alt="logo"
            width={120}
            className="logo"
            onClick={goToHome}
          />
          {/* </Link> */}
        </div>
        <div className="hidden md:flex justify-between space-x-16 text-xl font-bold h-10 ">
          {/* <Link href="/"> */}
          <div className="nav-heading" onClick={goToHome}>
            Home
          </div>
          {/* </Link> */}
          {/* <Link href={"/about"}> */}
          <div className="nav-heading" onClick={goToAboutUs}>
            About
          </div>
          {/* </Link> */}
          {/* <Link href={"/quotation"}> */}
          <div className="nav-heading" onClick={goToQuotation}>
            Quotation
          </div>
          {/* </Link> */}
          {/* <Link href={"/portfolio"}> */}
          <div className="nav-heading" onClick={goToPortfolio}>
            Portfolio
          </div>
          {/* </Link> */}
          {/* <Link href={"/contact"}> */}
          <div className="nav-heading" onClick={goToContact}>
            Contact
          </div>
          {/* </Link> */}
        </div>
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="inline-flex items-center mr-6 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }  fixed top-0 right-0 h-screen w-60 backdrop-blur-lg bg-blue-700 bg-opacity-40`}
      >
        <button
          id="mobile-menu-button"
          className="inline-flex items-center mr-6 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <div>Menu</div>}
        </button>
        <ul className="mt-10 space-y-4 text-center">
          <li>
            <Link href="/">
              <div className="block text-white hover:text-blue-500 hover:bg-white transition duration-500 hover:font-bold">
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="block text-white  hover:text-blue-500 hover:bg-white transition duration-500 hover:font-bold">
                About
              </div>
            </Link>
          </li>
          <li>
            <Link href="/quotation">
              <div className="block text-white  hover:text-blue-500 hover:bg-white transition duration-500 hover:font-bold">
                Quotation
              </div>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <div className="block text-white  hover:text-blue-500 hover:bg-white transition duration-500 hover:font-bold">
                Portfolio
              </div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div className="block text-white  hover:text-blue-500 hover:bg-white transition duration-500 hover:font-bold">
                Contact
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
