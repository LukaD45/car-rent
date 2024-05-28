"use client";

import Image from "next/image";
import { Car } from "@prisma/client";
import { Button } from "@/components/ui/button";
import CarDetails from "./car-details-modal";

type CarCardProps = {
  car: Car;
};

const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="w-[400px]">
      <div className="flex justify-between">
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
          <Button>
            <CarDetails car={car} />
          </Button>
        </div>
      </div>
      <div>
        <Image
          src={car.slika.startsWith("/") ? car.slika : `/${car.slika}`}
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
          <div className="hidden h-2 group-hover:flex items-center w-[70%] justify-center mx-auto absolute mt-10 py-6 inset-0 text-white rounded-full">
            <Button> Iznajmi</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
