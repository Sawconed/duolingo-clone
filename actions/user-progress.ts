"use server";

import db from "@/db/drizzle";
import { getCouseById, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth();
  const user = await currentUser();


  // Check if user has logged in
  if (!userId || !user) {
    throw new Error("Unauthorized");
  }

  // Check if course existed
  const course = await getCouseById(courseId);

  if (!course) {
    throw new Error("Course not found");
  }

  // Check if course is empty
  // TODO: This portion will be uncomment once the shema for course is updated
  // if (!course.units.length || !course.units[0].lessons.length) {
  //   throw new Error("Course is empty");
  // }

  // Check if current user has any progress
  const existingUserProgress = await getUserProgress();

  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      userName: user.firstName || "User",
      userImageSrc: user.imageUrl || "/mascot.svg",
    })
    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
  }

  await db.insert(userProgress).values({
    userId: userId,
    activeCourseId: courseId,
    userName: user.firstName || "User",
    userImageSrc: user.imageUrl || "/mascot.svg",
  })

  revalidatePath("/courses");
  revalidatePath("/learn");
  redirect("/learn");
}

