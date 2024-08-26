import { MikroORM } from '@mikro-orm/core';
import { Product } from '../entities/Product';
import config from '../mikro-orm.config';

export async function getProducts() {
  const orm = await MikroORM.init(config);
  const em = orm.em.fork(); // Create a new EntityManager fork
  const products = await em.find(Product, {});
  await orm.close();
  return products;
}

export async function getProductById(id: number) {
  const orm = await MikroORM.init(config);
  const em = orm.em.fork(); // Create a new EntityManager fork
  const product = await em.findOne(Product, id);
  await orm.close();
  return product;
}

export async function getSimilarProducts(productId: number) {
  const orm = await MikroORM.init(config);
  const em = orm.em.fork();
  const products = await em.find(Product, { id: { $ne: productId } }, { limit: 4 });
  await orm.close();
  return products;
}