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
  // response.send(movies);
  try {
    const allProducts = await getOrdersProductById(id);
    response.status(200).send(allProducts.data);
  } catch (err) {
    console.log(err);
    response.status(500).send({ msg: " Couldn't get what you wanted " });
  }
}
async function createOrderProductsCtr(req, res) {
  const { userId } = req.body;
  const data = await getCartProductById(userId);
  console.log(data);
  await createOrderById(data);
  await deleteCartProductById(userId);
}
// async function createOrderProductsCtr(req, res) {
//   //   const data = req.body;
//   //   //   console.log(data);
//   //   const addproduct = {
//   //     ...data,
//   //     userId: v4(),
//   //   };
//   //   try {
//   //     // console.log(data.products[0].productId);
//   //     // console.log("id:", data.products.productId);
//   //     const product = await createOrderById(data.products[0].productId);
//   //     console.log(product);
//   //     await createCartProducts({
//   //       ...addproduct,
//   //       totalPrice: +product.data.price * +data.products[0].quantity,
//   //     });
//   //     res.status(200).send(addproduct);
//   //     console.log(addproduct);
//   //   } catch (err) {
//   //     console.log(err);
//   //     res.status(500).send({ msg: "unable to create" });
//   //   }
// }

export { getAllOrderProductsCtr, createOrderProductsCtr };
