import { Router } from "express";

import ProductsController from "../controllers/ProductsController";
import validation from "./validation";

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get("/", productsController.index);

productsRouter.get("/:id", validation.show, productsController.show);

productsRouter.post("/", validation.create, productsController.create);

productsRouter.put("/:id", validation.update, productsController.update);

productsRouter.delete("/:id", validation.delete, productsController.delete);

export default productsRouter;
