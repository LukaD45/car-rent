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
import Link from "next/link";

export default function ImageSlider() {
  const carouselRef = useRef(null);

  const cars = [
    {
      src: "/mercedes-e-class.png",
      make: (
        <>
          <strong>Mercedes E Class</strong> ili slično
        </>
      ),
      model: "Limuzina",
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
    <section className="flex w-full flex-col items-center justify-center px-3 py-12 ">
      <h1 className="text-4xl font-bold text-indigo-500 dark:text-indigo-900">
        NAŠA FLOTA
      </h1>
      <p className="text-md hidden pt-4 md:flex">
        Više od 1.000 vozila, 100+ hibridnih vozila i 50+ novih modela
      </p>
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
                <Link href="/vehicle">
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
                </Link>
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
