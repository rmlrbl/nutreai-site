"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

export function TikTokCarousel({ videos }) {
  return (
    <Carousel
      className="w-full max-w-4xl mx-auto"
      opts={{
        align: "start",
        loop: true,
        skipSnaps: false,
        slidesToScroll: 1, // Alterado de 2 para 1
      }}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {videos.map((video, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
            <div className="aspect-[9/16] bg-zinc-800 rounded-3xl overflow-hidden">
              <video
                src={video.src}
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-4 mt-8 lg:justify-end">
        <CarouselPrevious className="static translate-y-0 bg-white border-none shadow-lg hover:bg-zinc-100 text-customDark1" />
        <CarouselNext className="static translate-y-0 bg-white border-none shadow-lg hover:bg-zinc-100 text-customDark1" />
      </div>
    </Carousel>
  );
}
