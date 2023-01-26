import { Request, Response } from "express";
import {getProduct, getProducts, ProductModel, saveProduct} from '../schemas/Product'

// interfaces
interface ReqParams {
  /* Add something as needed */
}
interface ReqBody {
  /* Add something as needed */
}
interface Resbody {
  /* Add something as needed */
}
interface ReqQuery {
  id: string
}

interface ProductQueryProps {
    id: string
}

class ProductsController {

  public async saveProduct(req: Request, res: Response) {
    const result = await saveProduct(req.body);
    return res.json(result);
  }
 
  public async getProduct(req: Request<ReqParams, ReqBody, Resbody, ReqQuery>, res: Response) {
    const result = await getProduct(req.query.id)
    return res.json(result)
  }

  public async getAllProducts(req: Request, res: Response) {
    const result = await getProducts();
    return res.json(result);
  }

}
export default new ProductsController();