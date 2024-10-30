import { db } from "./index";
import { migrate } from "drizzle-orm/neon-http/migrator";

const main = async () => {
  try {
    // Create a new database connection
    await migrate(db, {
      // Specify the database URL
      migrationsFolder: "src/db/migrations",
    });
    console.log("Migration Completed");
  } catch (error) {
    console.error("Migration failed:", error);
  }
};

main();
