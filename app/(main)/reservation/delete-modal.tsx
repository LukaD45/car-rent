import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import { toast } from "sonner";

interface DeleteModalProps {
  reservationId: string;
  onDeleted: (deletedReservationId: string) => void;
}

export default function DeleteModal({
  reservationId,
  onDeleted,
}: DeleteModalProps) {
  const onDelete = async (reservationId: string) => {
    try {
      await axios.delete(`/api/reservations/${reservationId}`);
      onDeleted(reservationId);
      toast.success("Reservation deleted successfully!");
    } catch (error) {
      toast.error("There was a problem with deleting the reservation!");
    }
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="text-white">Delete</AlertDialogTrigger>
        <AlertDialogContent className="bg-white dark:bg-black">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-black dark:text-white">
              Are you sure you want to delete the reservation?
            </AlertDialogTitle>
            <AlertDialogDescription>
              <strong>
                <em>This action cannot be reversed.</em>
              </strong>
              <br></br> This will permanently delete this reservation.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className=" bg-black text-white hover:bg-slate-800">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-700 text-white hover:bg-red-500"
              onClick={() => onDelete(reservationId)}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
