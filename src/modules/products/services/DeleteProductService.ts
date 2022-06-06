import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import ProductRepository from "../typeorm/repositories/ProductRepository";

interface RequestInterface {
  id: string;
}

class DeleteProductService {
  public async execute({ id }: RequestInterface): Promise<void> {
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(id);

    if (!product) throw new AppError("Product not found", 404);

    await productRepository.remove(product);
  }
}

export default DeleteProductService;
