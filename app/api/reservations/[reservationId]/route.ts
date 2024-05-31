import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface IParams {
  reservationId: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: IParams }
) {
  const { reservationId } = params;

  if (!reservationId) {
    return NextResponse.json(
      { error: "Reservation ID is required" },
      { status: 400 }
    );
  }

  try {
    const reservation = await db.reservation.findFirst({
      where: {
        id: reservationId,
      },
    });

    if (!reservation) {
      return NextResponse.json(
        { error: "Reservation not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(reservation);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch reservation" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: IParams }
) {
  const { reservationId } = params;

  if (!reservationId) {
    return NextResponse.json(
      { error: "Reservation ID is required" },
      { status: 400 }
    );
  }

  try {
    const body = await request.json();

    const updatedReservation = await db.reservation.update({
      where: {
        id: reservationId,
      },
      data: body,
    });

    return NextResponse.json(updatedReservation);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update reservation" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: IParams }
) {
  const { reservationId } = params;

  if (!reservationId) {
    return NextResponse.json(
      { error: "Reservation ID is required" },
      { status: 400 }
    );
  }

  try {
    const deletedReservation = await db.reservation.delete({
      where: {
        id: reservationId,
      },
    });

    if (!deletedReservation) {
      return NextResponse.json(
        { error: "Reservation not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(deletedReservation);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete reservation" },
      { status: 500 }
    );
  }
}
