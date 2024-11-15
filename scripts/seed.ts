import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding the database");

    // Clear all database data
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    // Insert data
    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/es.svg"
      },
      {
        id: 2,
        title: "Croatian",
        imageSrc: "/hr.svg"
      },
      {
        id: 3,
        title: "Italian",
        imageSrc: "/it.svg"
      },
      {
        id: 4,
        title: "Japanese",
        imageSrc: "/jp.svg"
      },
      {
        id: 5,
        title: "French",
        imageSrc: "/fr.svg"
      },
    ])


    console.log("Seeding complete");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database.");
  }
}

main();
