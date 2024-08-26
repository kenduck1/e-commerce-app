import { NextApiRequest, NextApiResponse } from "next";
import { getProductById } from "../../../lib/products";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const product = await getProductById(Number(id));

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  return res.status(200).json(product);
}
