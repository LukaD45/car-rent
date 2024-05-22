// components/vehicle/car-card.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { Car } from "@prisma/client";
import { Button } from "@/components/ui/button";
import CarDetails from "./car-details-modal";

const CarCard = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/cars");

        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className=" flex space-x-6 justify-center">
        {cars.map((car) => (
          <div key={car.id} className="w-[400px]">
            <div className="text-2xl space-y-4">
              <h1>
                {car.marka} {car.model}
              </h1>
              <h3>
                <p>
                  <sup>$</sup>
                  <strong>{car.cijena}</strong>
                  <sub>/day</sub>
                </p>
              </h3>
            </div>
            <div>
              <Image
                src="/peugeot-308.png"
                alt={`${car.marka} ${car.model}`}
                className="mx-auto"
                width={300}
                height={100}
              />
              <div className="relative group w-full">
                <div className="flex justify-between text-grey group-hover:invisible w-full">
                  <div className="space-y-4 mx-auto">
                    <Image
                      src="/transmission.png"
                      alt="Mjenjač"
                      width={30}
                      height={40}
                      className="mt-7 mx-auto"
                    />
                    <p>{car.vrstaMotora}</p>
                  </div>
                  <div className="space-y-4 mx-auto">
                    <Image
                      src="/drive.png"
                      alt="Pogon"
                      width={30}
                      height={40}
                      className="mt-7 mx-auto"
                    />
                    <p>{car.pogonskiKotaci}</p>
                  </div>
                  <div className="space-y-4 mx-auto">
                    <Image
                      src="/fuel.png"
                      alt="Gorivo"
                      width={30}
                      height={40}
                      className="mt-7 mx-auto"
                    />
                    <p>{car.boja}</p>
                  </div>
                </div>
                <div className="hidden h-10 group-hover:flex items-center justify-center absolute mt-10 p-8 inset-0 text-white rounded-full">
                  <Button>
                    <CarDetails />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarCard;
