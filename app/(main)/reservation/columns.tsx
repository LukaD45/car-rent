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

export const columns = (
  handleDeleteReservation: (reservationId: string) => void
): ColumnDef<Reservation>[] => [
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
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Added
          <ArrowUpDown className="ml-4 h-3 w-3" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="ml-4">
          {new Date(row.original.createdAt).toLocaleDateString("en-GB")}
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => {
      const reservation = row.original;

      return (
        <div className="flex space-x-4">
          <Button className="bg-red-500">
            <DeleteModal
              reservationId={reservation.id}
              onDeleted={handleDeleteReservation}
            />
          </Button>
        </div>
      );
    },
  },
];
