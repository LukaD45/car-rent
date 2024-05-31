import { useUser } from "@clerk/nextjs"; // Ensure you have @clerk/nextjs set up
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { format } from "date-fns";

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
    header: "Car ID",
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
    cell: ({ row }) => (
      <div>{format(new Date(row.original.startDate), "yyyy-MM-dd")}</div>
    ),
  },
  {
    accessorKey: "endDate",
    header: "End Date",
    cell: ({ row }) => (
      <div>{format(new Date(row.original.endDate), "yyyy-MM-dd")}</div>
    ),
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date Added
        <ArrowUpDown className="ml-4 h-3 w-3" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="ml-4">
        {format(new Date(row.original.createdAt), "yyyy-MM-dd")}
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
        return <div className="flex space-x-4">hello</div>;
      } else {
        return null;
      }
    },
  },
];
