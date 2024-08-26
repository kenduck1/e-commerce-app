import { defineConfig, SqliteDriver } from "@mikro-orm/sqlite";
import { Product } from "./entities/Product";
import { Cart } from "./entities/Cart";

export default defineConfig({
  entities: [Product, Cart],
  dbName: "ecommerce_db",
  driver: SqliteDriver,
  debug: process.env.NODE_ENV !== "production",
});
