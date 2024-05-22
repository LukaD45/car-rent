import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import CarDetails from "./car-details-modal";

const CarCard = () => {
  return (
    <div className="bg-red-500 flex space-x-6 justify-center">
      <Card className="w-[400px]">
        <CardHeader className="text-2xl space-y-4">
          <h1>Toyota Corolla</h1>
          <h3>
            <p>
              <sup>$</sup>
              <strong>89</strong>
              <sub>/day</sub>
            </p>
          </h3>
        </CardHeader>
        <CardContent>
          <Image
            src="/peugeot-308.png"
            alt="Peugeot 308"
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
                <p>Automatic</p>
              </div>
              <div className="space-y-4 mx-auto">
                <Image
                  src="/drive.png"
                  alt="Pogon"
                  width={30}
                  height={40}
                  className="mt-7 mx-auto"
                />
                <p>FWD</p>
              </div>
              <div className="space-y-4 mx-auto">
                <Image
                  src="/fuel.png"
                  alt="Mjenjač"
                  width={30}
                  height={40}
                  className="mt-7 mx-auto"
                />
                <p>Automatik</p>
              </div>
            </div>
            <div className="hidden h-10 group-hover:flex items-center justify-center absolute mt-10 p-8 inset-0 text-white rounded-full">
              <Button>
                <CarDetails />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarCard;
