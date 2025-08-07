"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
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
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <Card className="p-0 h-full bg-transparent border-none">
      <CardContent className="p-0 h-full">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="h-full">
            {announcementData.map((item, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="h-full relative rounded-xl overflow-hidden min-h-[253px]">
                  <Image
                    src={`/img/${item.image}`}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blac k/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                    <span className="text-xs font-semibold text-white mb-1">
                      {item.created_at}
                    </span>
                    <h5 className="font-semibold text-white mb-1 line-clamp-2">
                      {item.title}
                    </h5>
                    <p className="text-xs text-white/80">{item.created_by}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white" />
        </Carousel>
      </CardContent>
    </Card>
  );
}
