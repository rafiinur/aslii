"use client";

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

const carouselItems = [
  {
    title: "Kelola Bisnis dengan Mudah",
    description:
      "ASLII dirancang dengan antarmuka yang intuitif dan mudah digunakan, sehingga siapa pun bisa mengelola bisnis dengan efisien tanpa ribet.",
  },
  {
    title: "Data dan Analitik Real-Time",
    description:
      "Pantau performa bisnis Anda dengan laporan dan statistik akurat. Dapatkan insight berbasis data untuk keputusan yang lebih baik",
  },
  {
    title: "Keamanan Data Terjamin",
    description:
      "Kami menggunakan enkripsi tingkat tinggi untuk menjaga privasi dan keamanan data bisnis Anda. Percayakan ASLII untuk pengelolaan data.",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="grid min-h-svh lg:grid-cols-2 items-center">
      <div className="flex flex-1 items-center justify-center">{children}</div>
      <div className="hidden lg:block relative bg-primary w-[97%] h-[95%] rounded-3xl overflow-hidden">
        <div className="absolute -top-32 -left-16 w-72 h-96 rotate-45 bg-white rounded-full blur-[130px]"></div>
        <div className="absolute -bottom-40 -right-16 w-72 h-96 rotate-45 bg-white rounded-full blur-[130px]"></div>
        <div className="text-white flex flex-col justify-center h-full p-8 md:p-14">
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {carouselItems.map((item, index) => (
                <CarouselItem key={index}>
                  <h2 className="font-bold text-3xl md:text-4xl mb-8 md:mb-16">
                    {item.title}
                  </h2>
                  <p className="text-lg md:text-xl">{item.description}</p>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
