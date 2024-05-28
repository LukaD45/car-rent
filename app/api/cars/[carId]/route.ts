import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface IParams {
  carId: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: IParams }
) {
  const { carId } = params;

  if (!carId) {
    return NextResponse.json({ error: "Car ID is required" }, { status: 400 });
  }

  try {
    const data = await db.car.findFirst({
      where: {
        id: carId,
      },
    });

    if (!data) {
      return NextResponse.json({ error: "Car not found" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch car" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: IParams }
) {
  const { carId } = params;

  if (!carId) {
    return NextResponse.json({ error: "Car ID is required" }, { status: 400 });
  }

  try {
    const body = await request.json();
    console.log("Request body for car update:", body); // Log the request body to debug

    const data = await db.car.update({
      where: {
        id: carId,
      },
      data: body,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error updating car:", error); // Log the error details
    return NextResponse.json(
      { error: "Failed to update car" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: IParams }
) {
  const { carId } = params;

  if (!carId) {
    return NextResponse.json({ error: "Car ID is required" }, { status: 400 });
  }

  try {
    const data = await db.car.delete({
      where: {
        id: carId,
      },
    });

    if (!data) {
      return NextResponse.json({ error: "Car not found" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete car" },
      { status: 500 }
    );
  }
}
