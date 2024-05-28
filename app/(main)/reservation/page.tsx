"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { DatePickerWithRange } from "./date-range-picker";
import { DateRange } from "react-day-picker";
import React, { useEffect, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import { PrismaClient, Car as PrismaCar } from "@prisma/client";

interface Car {
  id: string;
  marka: string;
  model: string;
  slika: string;
  klasa: string;
  cijena: string;
  potrosnja: number;
  brojcilindara: number;
  pogonskiKotaci: string;
  vrstaMotora: string;
  obujamMotora: number;
  ubrzanje: number;
  boja: string;
}

const fetchCarDetails = async (carId: string): Promise<Car | null> => {
  try {
    const response = await fetch(`/api/cars/${carId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const car: Car = await response.json();
    return car;
  } catch (error) {
    console.error("Failed to fetch car details:", error);
    return null;
  }
};

const ReservationPage: React.FC = () => {
  const [date, setDate] = useState<DateRange | undefined>();
  const [car, setCar] = useState<PrismaCar | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [days, setDays] = useState<number>(0);

  useEffect(() => {
    const getCar = async () => {
      const carDetails = await fetchCarDetails("carId"); // Replace "carId" with the actual car ID you want to fetch
      setCar(carDetails);
    };
    getCar();
  }, []);

  useEffect(() => {
    if (car && date && date.from && date.to) {
      const dayCount = differenceInCalendarDays(date.to, date.from) + 1;
      setDays(dayCount);

      if (dayCount && car.cijena) {
        setTotalPrice(dayCount * parseFloat(car.cijena)); // Parse cijena to float as it's stored as a string
      }
    } else if (car) {
      setTotalPrice(parseFloat(car.cijena)); // Parse cijena to float as it's stored as a string
    }
  }, [date, car]);

  return (
    <div>
      <Header />
      <Hero title="Rezarvacija" className="h-[200px] p-0 m-0 bg-green-500" />
      <div className="bg-blue-400 flex justify-center items-center py-10">
        <div>Select days</div>
        <DatePickerWithRange date={date} setDate={setDate} />
        <div>
          Total price:
          <span>
            ${totalPrice} for <span>{days} Days</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
