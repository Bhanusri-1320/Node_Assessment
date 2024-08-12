import { v4 } from "uuid";
import { getProductById } from "../services/product.services.js";
import {
  getAllCartProducts,
  createCartProducts,
  getCartProductById,
  deleteCartProductById,
} from "../services/cart.service.js";

async function getAllCartProductsCtr(request, response) {
  const { id } = request.params;
  // response.send(movies);
  try {
    const allProducts = await getCartProductById(id);
    response.status(200).send(allProducts.data);
  } catch (err) {
    console.log(err);
    response.status(500).send({ msg: " Couldn't get what you wanted " });
  }
}
async function createCartProductsCtr(req, res) {
  const data = req.body;
  //   console.log(data);
  const addproduct = {
    ...data,
    userId: v4(),
  };
  try {
    // console.log(data.products[0].productId);
    // console.log("id:", data.products.productId);
    const product = await getProductById(data.products[0].productId);
    console.log(product);
    await createCartProducts({
      ...addproduct,
      totalPrice: +product.data.price * +data.products[0].quantity,
    });
    res.status(200).send(addproduct);
    console.log(addproduct);
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "unable to create" });
  }
}

async function deleteCartProductsCtr(request, response) {
  const { id } = request.params;
  console.log(id);
  try {
    const product = await getCartProductById(id);
    console.log(product);
    if (product.data) {
      // const mid = movies.indexOf(movie);
      // movies.splice(mid, 1);
      console.log(product.data);
      await deleteCartProductById(id);
      response.send({ msg: "Product deleted 🎉" });
    } else {
      response.status(404).send({ msg: "there is No such product 🥲" });
    }
  } catch (err) {
    console.log(err);
    response.status(500).send({ msg: "Failed to Perform delete" });
  }
}

export { getAllCartProductsCtr, createCartProductsCtr, deleteCartProductsCtr };
