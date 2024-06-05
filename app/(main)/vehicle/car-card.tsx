"use client";

import Image from "next/image";
import { Car } from "@prisma/client";
import { useRouter } from "next/navigation";

type CarCardProps = {
  car: Car;
};

const CarCard = ({ car }: CarCardProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/vehicle/${car.id}`)}
      className="border-2 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-500 rounded-xl p-2 hover:cursor-pointer hover:scale-105 duration-200 mx-auto w-[350px]"
    >
      <div className="flex justify-between">
        <div className="text-2xl space-y-4">
          <h1 className="text-3xl">
            {car.marka} {car.model}
          </h1>
          <h3>
            <p>
              <sup>€</sup>
              <strong>{car.cijena}</strong>
              <sub>/dan</sub>
            </p>
          </h3>
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
          <div className="flex justify-between text-grey w-full">
            <div className="space-y-4 mx-auto">
              <Image
                src="/transmission.png"
                alt="Vrsta motora"
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
              <p>{car.potrosnja} l/100km</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
