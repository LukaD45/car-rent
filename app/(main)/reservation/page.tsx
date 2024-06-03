"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "./data-table";
import { columns, Reservation } from "./columns";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import Loading from "../vehicle/loading";

const ReservationPage = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await axios.get("/api/reservations");
        setReservations(res.data);
      } catch (error) {
        console.error("Error while fetching reservations: ", error);
        setError("Failed to fetch reservations");
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  const handleDeleteReservation = (deletedReservationId: string) => {
    setReservations((prevReservations) =>
      prevReservations.filter(
        (reservation) => reservation.id !== deletedReservationId
      )
    );
  };

  return (
    <div className="mb-10">
      <Header />
      <Hero title="Rezervacije" />
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <DataTable
          columns={columns(handleDeleteReservation)}
          data={reservations}
        />
      )}
    </div>
  );
};

export default ReservationPage;
