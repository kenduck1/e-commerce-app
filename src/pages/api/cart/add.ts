import { NextApiRequest, NextApiResponse } from "next";
import { MikroORM } from "@mikro-orm/core";
import { Cart } from "../../../entities/Cart";
import { Product } from "../../../entities/Product";
import config from "../../../mikro-orm.config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return res
      .status(400)
      .json({ error: "Product ID and quantity are required" });
  }

  const orm = await MikroORM.init(config);
  const em = orm.em.fork();

  try {
    const product = await em.findOne(Product, productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    let cartItem = await em.findOne(Cart, { product });

    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cartItem = em.create(Cart, { product, quantity });
      em.persist(cartItem);
    }

    await em.flush();

    return res
      .status(200)
      .json({ message: "Product added to cart successfully" });
  } catch (error) {
    console.error("Error adding to cart:", error);
    return res.status(500).json({ error: "Internal server error" });
  } finally {
    await orm.close();
  }
}
