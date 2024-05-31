"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Car } from "@prisma/client";
import { Hero } from "@/components/hero";
import { Header } from "../../../components/header";
import CarCard from "./car-card";
import { useRouter } from "next/navigation";

const VehiclePage = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("/api/cars");
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div>
      <Header />
      <Hero title="Naša vozila" className="h-[200px] p-0 m-0 bg-indigo-500" />
      <div className="flex space-x-6 max-w-[1280px] mx-auto justify-center">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default VehiclePage;
