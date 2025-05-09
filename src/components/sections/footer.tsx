import React from "react";
import Facebook from "@/assets/icons/Facebook.svg?react";
import Instagram from "@/assets/icons/Instagram.svg?react";
import Github from "@/assets/icons/Github.svg?react";
import Youtube from "@/assets/icons/Youtube.svg?react";
import Whatsapp from "@/assets/icons/Whatsapp.svg?react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-8" id="kontak">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Youtube className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Whatsapp className="w-6 h-6" />
          </a>
        </div>
        <p className="text-center text-sm text-gray-400">
          &copy; Copyright {currentYear} PT Bengkel Aplikasi Nusantara
        </p>
      </div>
    </footer>
  );
};

export default Footer;
