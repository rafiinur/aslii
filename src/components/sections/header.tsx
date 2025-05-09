import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-950/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <Link href="#hero" className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl font-bold text-primary-300">
              ASLII
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link
              href="#fitur"
              className="text-xs sm:text-sm font-medium transition-colors hover:text-primary-300"
            >
              Fitur
            </Link>
            <Link
              href="#tentang"
              className="text-xs sm:text-sm font-medium transition-colors hover:text-primary-300"
            >
              Tentang
            </Link>
            <Link
              href="#faq"
              className="text-xs sm:text-sm font-medium transition-colors hover:text-primary-300"
            >
              FAQ
            </Link>
            <Link
              href="#kontak"
              className="text-xs sm:text-sm font-medium transition-colors hover:text-primary-300"
            >
              Kontak
            </Link>
          </nav>

          {/* Login Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="w-24 h-8 sm:h-9 px-3 sm:px-4 text-xs sm:text-sm rounded-full cursor-pointer bg-transparent"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
