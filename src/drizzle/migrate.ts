// Add ./db/migrate.ts

import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "./db";

async function main() {
  console.log("migration started...");
  await migrate(db, { migrationsFolder: "./db/migrations" });
  console.log("migration Done...");
  process.exit(0);
}

main().catch((err) => {
  console.log(err);
  process.exit(0);
});
