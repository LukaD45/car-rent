"use client";

import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { MenuIcon } from "lucide-react";

interface Car {
  marka: string;
  model: string;
  slika: string;
  klasa: string;
  potrosnja: number;
  brojcilindara: number;
  pogonskiKotaci: string;
  vrstaMotora: string;
  obujamMotora: number;
  ubrzanje: number;
  boja: string;
}

interface CarDetailsProps {
  car: Car;
}
export default function CarDetails({ car }: CarDetailsProps) {
  const router = useRouter();

  const handleRentClick = () => {
    router.push("/reservation");
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="text-white  rounded-full ">
          <MenuIcon />
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white dark:bg-black flex flex-col items-center w-[90%] md:w-full justify-center">
          <AlertDialogHeader>
            <AlertDialogTitle className="my-6 text-4xl flex flex-col space-y-5 items-center text-black dark:text-white text-center">
              <Image src="logo.svg" alt="logo" width={100} height={50} />
              <p>
                {car.marka} {car.model}
              </p>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <div className="mb-6">
                <div className="w-[100%] flex flex-col md:flex-row justify-start items-center space-x-0 space-y-3 md:space-y-0 md:space-x-8">
                  <Image
                    src={
                      car.slika.startsWith("/") ? car.slika : `/${car.slika}`
                    }
                    alt={`${car.marka} ${car.model}`}
                    width={400}
                    height={400}
                  />
                </div>
                <div className="w-[95%] text-lg mt-8 space-y-4 items-center">
                  <div className="flex w-full justify-between">
                    <p>Klasa</p>
                    <p className="text-black">{car.klasa}</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p>Potrošnja</p>
                    <p className="text-black">{car.potrosnja}</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p>Broj cilindara</p>
                    <p className="text-black">{car.brojcilindara}</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p>Pogonski kotači</p>
                    <p className="text-black">{car.pogonskiKotaci}</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p>Vrsta motora</p>
                    <p className="text-black">{car.vrstaMotora}</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p>Obujam motora</p>
                    <p className="text-black">{car.obujamMotora} ccm3</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p>Ubrzanje: (0 - 100 km/h)</p>
                    <p className="text-black">{car.ubrzanje}s</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p>Boja</p>
                    <p className="text-black">{car.boja}</p>
                  </div>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="w-full">
            <AlertDialogCancel className="bg-black text-white hover:bg-slate-800 hover:text-white">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-500 hover:bg-red-400"
              onClick={handleRentClick}
            >
              Iznajmi
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
