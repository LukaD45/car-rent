"use client";
import { DatePickerWithRange } from "@/components/inputs/date-range-picker";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { DateRange } from "react-day-picker";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface CarReservationProps {
  cijena: string;
  carId: string;
}

const CarReservation: React.FC<CarReservationProps> = ({ cijena, carId }) => {
  const [date, setDate] = useState<DateRange | undefined>();
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (date?.from && date?.to) {
      const days =
        (date.to.getTime() - date.from.getTime()) / (1000 * 3600 * 24) + 1;
      setTotalPrice(days * parseFloat(cijena));
    }
  }, [date, cijena]);

  const handleReservation = async () => {
    if (!date?.from || !date?.to) {
      alert("Please select a date range.");
      return;
    }
    try {
      const response = await axios.post(`/api/reservations`, {
        carId,
        startDate: date.from.toISOString(),
        endDate: date.to.toISOString(),
        totalPrice,
      });

      if (response.status !== 200) {
        throw new Error("Failed to create reservation");
      }

      toast.success("Reservation created successfully!");
      router.push("/reservation");
    } catch (error) {
      console.error("Error creating reservation:", error);
      toast.error("Car creating reservation, try again!");
    }
  };

  return (
    <div className="mt-[120px] border border-black rounded-xl w-[480px]">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {cijena}</div>
        <div className="font-light text-neutral-700">per day</div>
      </div>
      <hr />
      <DatePickerWithRange
        date={date}
        setDate={setDate}
        className="mt-3"
        carId={carId}
      />
      {totalPrice !== null && (
        <div className="p-4">
          <div className="text-xl">Total Price: ${totalPrice.toFixed(2)}</div>
        </div>
      )}
      <Button
        onClick={handleReservation}
        className="mt-4 p-4 rounded-full bg-red-500 text-white"
      >
        Reserve
      </Button>
    </div>
  );
};

export default CarReservation;
