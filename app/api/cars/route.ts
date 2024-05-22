// api/cars/cars.ts
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cars = await db.car.findMany();

    return NextResponse.json(cars);
  } catch (error) {
    console.error("Error fetching cars:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
