import { format, isWithinInterval, parseISO } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DateRange } from "react-day-picker";
import { useEffect, useState } from "react";
import axios from "axios";

interface DateRangePickerProps {
  className?: string;
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  carId: string;
}

export function DatePickerWithRange({
  className,
  date,
  setDate,
  carId,
}: DateRangePickerProps) {
  const [disabledDates, setDisabledDates] = useState<
    { start: Date; end: Date }[]
  >([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(`/api/reservations?carId=${carId}`);
        const reservations = response.data;
        const dates = reservations.map(
          (reservation: { startDate: string; endDate: string }) => ({
            start: parseISO(reservation.startDate),
            end: parseISO(reservation.endDate),
          })
        );
        setDisabledDates(dates);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, [carId]);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            modifiers={{
              disabled: (currentDate) =>
                disabledDates.some((interval) =>
                  isWithinInterval(currentDate, {
                    start: interval.start,
                    end: interval.end,
                  })
                ),
            }}
            modifiersClassNames={{
              disabled: "disabled-date",
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
