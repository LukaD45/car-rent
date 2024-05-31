import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import DeleteModal from "@/app/(main)/reservation/delete-modal";
import axios from "axios";

export type Reservation = {
  id: string;
  carId: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  createdAt: Date;
  ownerId: string;
};

export const columns: ColumnDef<Reservation>[] = [
  {
    accessorKey: "id",
    header: "Reservation ID",
  },
  {
    accessorKey: "carId",
    header: "Car Id",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "endDate",
    header: "End Date",
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      const [sorted, setSorted] = useState<"asc" | "desc" | undefined>();

      const handleSorting = () => {
        const newSorted = !sorted; // Toggle between true and false
        column.toggleSorting(newSorted);
        setSorted(newSorted ? "asc" : "desc"); // Update sorted state accordingly
      };

      return (
        <Button variant="ghost" onClick={handleSorting}>
          Date Added
          <ArrowUpDown
            className={`ml-4 h-3 w-3 ${sorted === "asc" ? "rotate-180" : ""}`}
          />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="ml-4">
        {new Date(row.original.createdAt).toLocaleDateString("en-GB")}
      </div>
    ),
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => {
      const reservation = row.original;
      const { user } = useUser();

      if (user && reservation.ownerId === user.id) {
        const handleDeleteReservation = async (reservationId: string) => {
          try {
            await axios.delete(`/api/reservations/${reservationId}`);

            console.log(
              `Reservation with ID ${reservationId} deleted successfully.`
            );
            // Optionally, you can update the UI or trigger any necessary actions
          } catch (error) {
            console.error(
              `Error deleting reservation with ID ${reservationId}:`,
              error
            );
          }
        };

        return (
          <div className="flex space-x-4">
            <DeleteModal
              reservationId={reservation.id}
              onDeleted={handleDeleteReservation}
            />
          </div>
        );
      }
    },
  },
];
