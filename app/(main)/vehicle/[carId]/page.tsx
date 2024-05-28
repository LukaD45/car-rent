"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Car } from "@prisma/client";
import CarHead from "./car-head";
import { Header } from "@/components/header";
import CarInfo from "./car-info";
import CarReservation from "./car-reservation";

const CarPage = () => {
  const url = new URL(window.location.href);
  const segment = url.pathname.split("/");
  const carId = segment[2];

  const [car, setCar] = useState<Car>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!carId) {
          console.log("No cars error");
          return;
        }
        const response = await axios.get(`/api/cars/${carId}`);
        setCar(response.data);
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };

    fetchData();
  }, [carId]); // Use carId as dependency

  return (
    <div>
      <Header />
      <div className="pb-10 ">
        {car?.id && (
          <div>
            <div className="mx-auto max-w-[1280px] bg-indigo-400">
              <CarHead src={car.slika} />
              <div className="flex justify-center space-x-20">
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
                <CarReservation />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarPage;
