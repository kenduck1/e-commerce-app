import { NextApiRequest, NextApiResponse } from "next";
import { MikroORM } from "@mikro-orm/core";
import config from "../../../mikro-orm.config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const orm = await MikroORM.init(config);
  const em = orm.em.fork();

  try {
    const result = await em
      .getConnection()
      .execute("SELECT SUM(quantity) as totalQuantity FROM cart");
    const totalQuantity = result[0].totalQuantity || 0;

    return res.status(200).json({ totalItems: totalQuantity });
  } catch (error) {
    console.error("Error fetching cart count:", error);
    return res.status(500).json({ error: "Internal server error" });
  } finally {
    await orm.close();
  }
}
