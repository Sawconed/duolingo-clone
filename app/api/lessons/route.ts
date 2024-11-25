import db from "@/db/drizzle";
import { lessons } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  const { userId } = await auth();

  if (!userId) return new NextResponse("Unauthorized", { status: 401 });

  const data = await db.query.lessons.findMany();

  return NextResponse.json(data);
}

export const POST = async (req: Request) => {
  const { userId } = await auth();

  if (!userId) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();

  const data = await db.insert(lessons).values({
    ...body
  }).returning();

  return NextResponse.json(data[0]);
}
