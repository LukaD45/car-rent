"use client";

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

export default function CarDetails() {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="text-white bg-blue-600 rounded-full px-24 py-3">
          Details
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white dark:bg-black flex flex-col items-center w-[90%] md:w-full  justify-center">
          <AlertDialogHeader>
            <AlertDialogTitle className="my-6 text-4xl flex flex-col space-y-5 items-center text-black dark:text-white text-center">
              <Image src="logo.svg" alt="logo" width={100} height={50} />
              <p> Toyota Corolla</p>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <div className="mb-6 ">
                <div className=" w-[100%] flex flex-col md:flex-row justify-start items-center space-x-0 space-y-3 md:space-y-0 md:space-x-8">
                  <Image
                    src="/peugeot-308.png"
                    alt="peugeot"
                    width={400}
                    height={400}
                  />
                </div>
                <div className=" w-[95%] text-lg mt-8 space-y-4 items-center ">
                  <div className="flex w-full justify-between">
                    <p>Klasa</p>
                    <p className="text-black">Hatchback</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p>Potrošnja</p>
                    <p className="text-black">7.3</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p>Broj cilindara</p>
                    <p className="text-black">4</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p>Pogonski kotači</p>
                    <p className="text-black">FWD</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p>Vrsta motora</p>
                    <p className="text-black">Dizel</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p>Obujam motora</p>
                    <p className="text-black">1496 ccm3</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p>Ubrzanje: (0 - 100 km/h)</p>
                    <p className="text-black">11.7 s</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p>Boja</p>
                    <p className="text-black">Zelena</p>
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
              onClick={() => {}}
            >
              Iznajmi
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
