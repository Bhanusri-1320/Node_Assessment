import { Orders } from "../entities/orders.entity.js";

async function getOrdersProductById(userId) {
  console.log(userId);
  const data = await Orders.get({
    userId,
  }).go();
  console.log(data);
  return data;
}

async function createOrderById(product) {
  console.log(product);
  await Orders.create(product).go();
}
export { getOrdersProductById, createOrderById };
