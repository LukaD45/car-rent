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
      toast.error("Please select dates");
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
    <div className=" mt-10 mx-auto md:mx-0 border-neutral-400 border rounded-xl h-[270px] max-w-[350px]">
      <div className="flex flex-row items-center justify-center gap-5 p-4">
        <div className="text-4xl  font-semibold">€{cijena}</div>
        <div className="font-light text-neutral-700">po danu</div>
      </div>
      <hr />
      <div className="flex flex-col justify-center ">
        <DatePickerWithRange
          date={date}
          setDate={setDate}
          className="mt-4 mx-1 "
          carId={carId}
        />
        {totalPrice !== null && (
          <div className="p-4">
            <div className="text-xl font-bold text-left ">
              Ukupna cijena: €{totalPrice.toFixed(2)}
            </div>
          </div>
        )}
        <Button
          onClick={handleReservation}
          className="mt-4 p-4 w-[80%] mx-auto rounded-full bg-red-500 hover:bg-red-400 text-white"
        >
          Rezerviraj
        </Button>
      </div>
    </div>
  );
};

export default CarReservation;
