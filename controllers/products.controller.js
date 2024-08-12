import { v4 } from "uuid";

import {
  getAllProducts,
  createProducts,
  getProductById,
  deleteProductById,
  UpdateProductById,
} from "../services/product.services.js";

async function getAllProductsCtr(request, response) {
  // response.send(movies);
  try {
    const allProducts = await getAllProducts();
    response.status(200).send(allProducts.data);
    console.log({ allProducts });
  } catch (err) {
    console.log(err);
    response.status(500).send({ msg: " Couldn't get what you wanted " });
  }
}

async function createProductsCtr(req, res) {
  const data = req.body;
  const addproduct = {
    ...data,
    productId: v4(),
  };
  try {
    await createProducts(addproduct);
    res.status(200).send(addproduct);
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "unable to create" });
  }
}
async function getProductByIdCtr(request, response) {
  const { id } = request.params;
  console.log(id);
  // console.log(movie.data);
  try {
    const product = await getProductById(id);
    console.log(product);
    product.data
      ? response.send(product.data)
      : response.status(404).send({ msg: "Movie not found" });
  } catch (err) {
    response.status(500).send({ msg: "failed to retrieve" });
  }
}

async function deleteProductsCtr(request, response) {
  const { id } = request.params;
  console.log(id);
  try {
    const product = await getProductById(id);
    console.log(product);
    if (product.data) {
      // const mid = movies.indexOf(movie);
      // movies.splice(mid, 1);
      console.log(product.data);
      await deleteProductById(id);
      response.send({ msg: "Product deleted 🎉" });
    } else {
      response.status(404).send({ msg: "there is No such product 🥲" });
    }
  } catch (err) {
    response.status(500).send({ msg: "Failed to Perform delete" });
  }
}
async function updateProductCtr(request, response) {
  const { id } = request.params;
  const updateMovie = request.body;
  try {
    const movie = await getProductById(id);
    if (movie.data) {
      const mergedData = await UpdateProductById(movie, updateMovie);
      console.log("updated..");
      response.send(mergedData.data);
    } else {
      response.status(404).send("No such Movie 🥲");
    }
  } catch (err) {
    response.status(500).send({ msg: "Movie not found" });
  }
}

export {
  getAllProductsCtr,
  createProductsCtr,
  getProductByIdCtr,
  deleteProductsCtr,
  updateProductCtr,
};
