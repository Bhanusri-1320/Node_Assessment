import { v4 } from "uuid";

import {
  getAllCartProducts,
  createCartProducts,
  getProductById,
  deleteCartProductById,
} from "../services/cart.service.js";

async function getAllCartProductsCtr(request, response) {
  // response.send(movies);
  try {
    const allProducts = await getAllCartProducts();
    response.status(200).send(allProducts.data);
    console.log({ allProducts });
  } catch (err) {
    console.log(err);
    response.status(500).send({ msg: " Couldn't get what you wanted " });
  }
}

async function createCartProductsCtr(req, res) {
  const data = req.body;
  const addproduct = {
    ...data,
    userId: v4(),
  };
  try {
    await createCartProducts(addproduct);
    res.status(200).send(addproduct);
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "unable to create" });
  }
}

async function deleteCartProductsCtr(request, response) {
  const { id } = request.params;
  console.log(id);
  try {
    const product = await getProductById(id);
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
