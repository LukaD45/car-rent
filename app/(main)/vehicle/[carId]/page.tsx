"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { Car } from "@prisma/client";
import CarHead from "./car-head";
import { Header } from "@/components/header";
import CarInfo from "./car-info";
import CarReservation from "./car-reservation";
import Loading from "../loading";

const CarPage = () => {
  const { carId } = useParams();

  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [carId]);

  return (
    <div>
      <Header />
      <div className="pb-1 h-full">
        {loading ? (
          <Loading />
        ) : car ? (
          <div>
            <div className=" max-w-[400px] md:max-w-[1480px] ">
              <div className="flex flex-col md:flex-row">
                <CarHead src={car.slika} marka={car.marka} model={car.model} />
                <CarReservation carId={car.id} cijena={car.cijena.toString()} />
              </div>

              <div className="flex flex-col md:flex-row justify-center ">
                <CarInfo
                  klasa={car.klasa}
                  boja={car.boja}
                  vrstaMotora={car.vrstaMotora}
                  potrosnja={car.potrosnja}
                  ubrzanje={car.ubrzanje}
                  pogonskiKotaci={car.pogonskiKotaci}
                />
              </div>
            </div>
          </div>
        ) : (
          <p>No car details available.</p>
        )}
      </div>
    </div>
  );
};

export default CarPage;
