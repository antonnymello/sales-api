import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository";

interface RequestInterface {
  name: string;
  price: number;
  quantity: number;
}

class CreateProductService {
  public async execute({
    name,
    price,
    quantity,
  }: RequestInterface): Promise<Product> {
    const productRepository = getCustomRepository(ProductRepository);

    const productExists = await productRepository.findByName(name);

    if (productExists) throw new AppError("Product already exists", 400);

    const product = productRepository.create({
      name,
      price,
      quantity,
    });

    await productRepository.save(product);

    return product;
  }
}

export default CreateProductService;
