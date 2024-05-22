"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Image from "next/image";

export default function ImageSlider() {
  const carouselRef = useRef(null);

  const cars = [
    {
      src: "/hero-marketing.svg",
      make: (
        <>
          <strong>Hero Marketing</strong> ili slično
        </>
      ),
      model: "Marketing",
    },
    {
      src: "/mercedes-vito.png",
      make: (
        <>
          <strong>Mercedes Vito</strong> ili slično
        </>
      ),
      model: "Obiteljski / kombi",
    },
    {
      src: "/fiat.png",
      make: (
        <>
          <strong>Fiat 500 Hybrid</strong> ili slično
        </>
      ),
      model: "Mini",
    },
    {
      src: "/opel-mokka.png",
      make: (
        <>
          <strong>Opel Mokka</strong> ili slično
        </>
      ),
      model: "Crossover",
    },
    {
      src: "/peugeot-308.png",
      make: (
        <>
          <strong>Peugeot 308</strong>
        </>
      ),
      model: "Mala / Srednja",
    },
  ];

  return (
    <section className="flex w-full bg-white justify-center px-3 py-12 bg-primary/30">
      <Carousel
        ref={carouselRef}
        className="w-4/5"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          {cars.map((car, index) => (
            <CarouselItem key={index} className="px-10  md:basis-1/4">
              <div className="p-1">
                <Card className="border-none">
                  <CardContent className="flex flex-col aspect-video items-center justify-center p-0">
                    <div className="relative w-full h-full">
                      <Image
                        src={car.src}
                        alt="Carousel image"
                        fill
                        style={{ objectFit: "contain" }}
                        className="rounded-md p-2"
                      />
                    </div>
                    <div className="text-center mt-2">
                      <h3 className="text-lg font-semibold">{car.make}</h3>
                      <p className="text-sm text-gray-600">{car.model}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
