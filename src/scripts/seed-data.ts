import { MikroORM } from "@mikro-orm/core";
import config from "../mikro-orm.config";
import { Product } from "../entities/Product";

async function addSampleData() {
  const orm = await MikroORM.init(config);
  const em = orm.em.fork();

  const sampleProducts = [
    em.create(Product, {
      name: "Product 1",
      description: "Description for Product 1",
      price: 29.99,
      imageUrl: "/image.png",
    }),
    em.create(Product, {
      name: "Product 2",
      description: "Description for Product 2",
      price: 39.99,
      imageUrl: "/image.png",
    }),
    em.create(Product, {
      name: "Product 3",
      description: "Description for Product 3",
      price: 49.99,
      imageUrl: "/image.png",
    }),
    em.create(Product, {
      name: "Product 1",
      description: "Description for Product 1",
      price: 29.99,
      imageUrl: "/image.png",
    }),
    em.create(Product, {
      name: "Product 2",
      description: "Description for Product 2",
      price: 39.99,
      imageUrl: "/image.png",
    }),
    em.create(Product, {
      name: "Product 3",
      description: "Description for Product 3",
      price: 49.99,
      imageUrl: "/image.png",
    }),
    em.create(Product, {
      name: "Product 4",
      description: "Description for Product 4",
      price: 29.99,
      imageUrl: "/image.png",
    }),
    em.create(Product, {
      name: "Product 5",
      description: "Description for Product 5",
      price: 39.99,
      imageUrl: "/image.png",
    }),
    em.create(Product, {
      name: "Product 6",
      description: "Description for Product 6",
      price: 49.99,
      imageUrl: "/image.png",
    }),
    em.create(Product, {
      name: "Product 7",
      description: "Description for Product 7",
      price: 29.99,
      imageUrl: "/image.png",
    }),
    em.create(Product, {
      name: "Product 8",
      description: "Description for Product 8",
      price: 39.99,
      imageUrl: "/image.png",
    }),
    em.create(Product, {
      name: "Product 9",
      description: "Description for Product 9",
      price: 49.99,
      imageUrl: "/image.png",
    }),
  ];

  await em.persistAndFlush(sampleProducts);

  console.log("Sample data added successfully!");
  await orm.close();
}

addSampleData().catch((err) => {
  console.error("Error adding sample data:", err);
  process.exit(1);
});
