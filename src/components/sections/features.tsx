import React from "react";
import { features } from "@/constants/features";
import { Card } from "../ui/card";

const Features = () => {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-48" id="fitur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            Fitur Unggulan
          </h2>
          <p className="max-w-[700px] text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400">
            Temukan berbagai fitur yang akan membantu Anda mengelola perusahaan
            dengan lebih efisien
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-3 sm:p-4 flex flex-col items-start hover:shadow-lg transition-shadow duration-300 bg-primary/10 dark:bg-gray-900/80 backdrop-blur-sm"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <feature.icon />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
