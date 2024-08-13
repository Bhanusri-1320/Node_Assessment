import { v4 } from "uuid";
import { getProductById } from "../services/product.services.js";
import {
  createOrderById,
  getOrdersProductById,
} from "../services/order.service.js";
import {
  deleteCartProductById,
  getCartProductById,
} from "../services/cart.service.js";
async function getAllOrderProductsCtr(request, response) {
  const { id } = request.params;
  console.log(id);
  // response.send(movies);
  try {
    console.log(id);
    const allProducts = await getOrdersProductById(id);
    console.log(allProducts);
    response.status(200).send(allProducts.data);
  } catch (err) {
    console.log(err);
    response.status(500).send({ msg: " Couldn't get what you wanted " });
  }
}
async function createOrderProductsCtr(req, res) {
  const { userId } = req.body;
  console.log(userId);
  try {
    const data = await getCartProductById(userId);
    console.log(data);
    await createOrderById(data.data);
    await deleteCartProductById(userId);
    res.send(data.data);
  } catch (err) {
    console.log(err);
  }
}
export { getAllOrderProductsCtr, createOrderProductsCtr };
