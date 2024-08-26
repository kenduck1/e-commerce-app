import { NextApiRequest, NextApiResponse } from "next";
import { getSimilarProducts } from "../../../../lib/products";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const similarProducts = await getSimilarProducts(Number(id));

  if (!similarProducts.length) {
    return res.status(404).json({ error: "No similar products found" });
  }

  return res.status(200).json(similarProducts);
}
