import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
      id="hero"
    >
      {/* Background */}
      <div className="absolute -left-10 sm:-left-20 bg-primary w-[200px] h-[400px] sm:w-[345px] sm:h-[645px] rounded-full rotate-12 blur-[100px] sm:blur-[220px]"></div>
      <div className="absolute -right-10 sm:-right-20 bg-primary w-[200px] h-[400px] sm:w-[345px] sm:h-[645px] rounded-full rotate-12 blur-[100px] sm:blur-[220px]"></div>
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 md:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight">
            Kelola{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Perusahaan
            </span>{" "}
            <br className="hidden sm:block" />
            dengan Mudah
          </h1>

          <p className="max-w-[90%] sm:max-w-[600px] text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
            ASLII membantu Anda mengelola tugas, absensi, dan penilaian karyawan
            dalam satu sistem terintegrasi.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8">
            <Link href="/login">
              <Button
                size="lg"
                className="h-9 sm:h-10 md:h-12 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
