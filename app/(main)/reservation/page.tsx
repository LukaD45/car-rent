"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "./data-table";
import { columns, Reservation } from "./columns";
import { Header } from "@/components/header";

const ReservationPage = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await axios.get("/api/reservations");
        setReservations(res.data);
      } catch (error) {
        console.error("Error while fetching reservations: ", error);
        setError("Failed to fetch reservations");
      }
    };

    fetchReservations();
  }, []);

  return (
    <div className="mb-10">
      <Header />
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <DataTable columns={columns} data={reservations} />
      )}
    </div>
  );
};

export default ReservationPage;
