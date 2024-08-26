import { MikroORM } from "@mikro-orm/core";
import config from "../mikro-orm.config";

async function main() {
  const orm = await MikroORM.init(config);
  const generator = orm.getSchemaGenerator();

  await generator.updateSchema();

  console.log("Database schema is synchronized!");
  await orm.close();
}

main().catch((err) => {
  console.error("Error during initialization:", err);
  process.exit(1);
});
