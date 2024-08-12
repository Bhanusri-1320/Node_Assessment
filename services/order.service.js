import { Orders } from "../entities/orders.entity.js";

async function getOrdersProductById(id) {
  return await Orders.get({ userId: id }).go();
}

async function createOrderById(product) {
  await Orders.create(product).go();
}
export { getOrdersProductById, createOrderById };
