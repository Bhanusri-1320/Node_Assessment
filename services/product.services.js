import { Products } from "../entities/products.entity.js";

async function getAllProducts() {
  return await Products.scan.go();
}
async function createProducts(product) {
  await Products.create(product).go();
}

async function getProductById(id) {
  return await Products.get({ productId: id }).go();
}
async function deleteProductById(id) {
  await Products.delete({ productId: id }).go();
}
async function UpdateProductById(product, updateProduct) {
  return await Products.put({
    ...product.data,
    ...updateProduct,
  }).go();
}

export {
  getAllProducts,
  createProducts,
  getProductById,
  deleteProductById,
  UpdateProductById,
};
