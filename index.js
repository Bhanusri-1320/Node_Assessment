import express from "express";
import cors from "cors";
const app = express();
import productsRouter from "./routes/products.route.js";

const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

console.log("hi");

app.get("/", function (request, response) {
  response.send("Hello 🙋, 🌏 🎊✨🤩");
});

app.use("/products", productsRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
