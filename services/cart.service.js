import { Cart } from "../entities/cart.entity.js";

async function getAllCartProducts() {
  return await Cart.scan.go();
}
async function createCartProducts(product) {
  console.log(product);
  await Cart.create(product).go();
}

async function getCartProductById(id) {
  console.log(id);
  return await Cart.get({ userId: id }).go();
}
async function deleteCartProductById(id) {
  await Cart.delete({ userId: id }).go();
}
export {
  getAllCartProducts,
  createCartProducts,
  getCartProductById,
  deleteCartProductById,
};
