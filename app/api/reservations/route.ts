import { db } from "@/lib/db";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const requestData = await req.json();
    const { carId, startDate, endDate, totalPrice } = requestData;

    if (!carId || !startDate || !endDate || !totalPrice) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const reservation = await db.reservation.create({
      data: {
        carId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        totalPrice: parseFloat(totalPrice),
      },
    });

    return NextResponse.json(reservation, { status: 200 });
  } catch (error) {
    console.error("Error creating reservation:", error);
    return NextResponse.json(
      { error: "Failed to create reservation" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const reservations = await db.reservation.findMany({
      select: {
        id: true,
        carId: true,
        startDate: true,
        endDate: true,
        totalPrice: true,
        createdAt: true,
      },
    });

    return NextResponse.json(reservations, { status: 200 });
  } catch (error) {
    console.error("Error fetching reservations:", error);
    return NextResponse.json(
      { error: "Failed to fetch reservations" },
      { status: 500 }
    );
  }
}
