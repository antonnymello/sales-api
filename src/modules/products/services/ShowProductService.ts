import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository";

interface RequestInterface {
  id: string;
}

class ShowProductService {
  public async execute({ id }: RequestInterface): Promise<Product | undefined> {
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(id);

    if (!product) throw new AppError("Product not found", 404);

    return product;
  }
}

export default ShowProductService;
