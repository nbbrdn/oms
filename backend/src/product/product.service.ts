import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find({ relations: ['group'] });
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOne({
      where: { id },
      relations: ['group'],
    });
  }

  create(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  async update(id: number, product: Partial<Product>): Promise<Product> {
    await this.productRepository.update(id, product);
    return this.findOne(id);
  }

  remove(id: number): Promise<void> {
    return this.productRepository.delete(id).then(() => {});
  }
}
