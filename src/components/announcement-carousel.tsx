"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const announcementData = [
  {
    image: "img-1.png",
    title: "Merayakan Cuti Bersama Idul Fitri bersama Keluarga",
    created_at: "25 Maret 2025 | Selasa",
    created_by: "Vermillion Arisyawal",
  },
  {
    image: "img-2.png",
    title: "Membangun Kehangatan dengan Family Gathering Baplidi Batu Kuda",
    created_at: "10 April 2025 | Kamis",
    created_by: "Vermillion Arisyawal",
  },
  {
    image: "img-3.png",
    title: "Selamat Menunaikan Ibadah Puasa",
    created_at: "28 Februari 2025 | Jum'at",
    created_by: "Vermillion Arisyawal",
  },
];

export function AnnouncementCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="relative"
    >
      <CarouselContent>
        {announcementData.map((item, index) => (
          <CarouselItem key={index}>
            <Card className="py-0">
              <div className="relative rounded-xl">
                <Image
                  width={500}
                  height={500}
                  src={`/img/${item.image}`}
                  alt={item.title}
                  className="w-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 rounded-xl">
                  <span className="text-xs font-semibold text-white">
                    {item.created_at}
                  </span>
                  <h5 className="font-semibold text-white">{item.title}</h5>
                  <p className="text-xs text-white/80">{item.created_by}</p>
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-12 bottom-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-12 bottom-1/2 -translate-y-1/2" />
    </Carousel>
  );
}
