"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { Car } from "@prisma/client";
import CarHead from "./car-head";
import { Header } from "@/components/header";
import CarInfo from "./car-info";
import CarReservation from "./car-reservation";

const CarPage = () => {
  const { carId } = useParams();

  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!carId) {
          console.log("No car ID error");
          return;
        }
        const response = await axios.get(`/api/cars/${carId}`);
        setCar(response.data);
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };

    fetchData();
  }, [carId]);

  return (
    <div>
      <Header />
      <div className="pb-1 h-full">
        {car && (
          <div>
            <div className="mx-auto max-w-[400px] md:max-w-[1480px] ">
              <CarHead src={car.slika} />
              <div className="flex flex-col md:flex-row justify-center md:space-x-20">
                <CarInfo
                  marka={car.marka}
                  model={car.model}
                  klasa={car.klasa}
                  cijena={car.cijena}
                  boja={car.boja}
                  vrstaMotora={car.vrstaMotora}
                  potrosnja={car.potrosnja}
                  ubrzanje={car.ubrzanje}
                />
                <CarReservation carId={car.id} cijena={car.cijena.toString()} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarPage;
