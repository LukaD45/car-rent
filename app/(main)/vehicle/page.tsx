"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Car } from "@prisma/client";
import { Hero } from "@/components/hero";
import { Header } from "../../../components/header";
import CarCard from "./car-card";
import Loading from "./loading";

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
      <Hero title="Naša vozila" className="h-[400px] p-0 m-0 bg-white" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 max-w-[1480px] mx-auto">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default VehiclePage;
