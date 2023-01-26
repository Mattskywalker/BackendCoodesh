import { Router } from "express";
import ProductsController from "./controllers/ProductsController";

const routes = Router();

routes.post('/product', ProductsController.saveProduct);

routes.get('/products', ProductsController.getAllProducts);

routes.get('/product', ProductsController.getProduct)

// routes.post('/login', AuthController.login);

// routes.post('/signup', AuthController.signUp);

export default routes;