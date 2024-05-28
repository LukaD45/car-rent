import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.json();

  const { carId, startDate, endDate, totalPrice } = body;

  if (!carId || !startDate || !endDate || !totalPrice) {
    return NextResponse.error();
  }
  const carAndReservation = await db.car.update({
    where: {
      id: carId,
    },
    data: {
      reservation: {
        create: {
          startDate,
          endDate,
          totalPrice,
        },
      },
    },
  });

  return NextResponse.json(carAndReservation);
}
