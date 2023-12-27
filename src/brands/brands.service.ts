import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime(),
    },
  ];
  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name,
      createdAt: new Date().getTime(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brandById = this.brands.find((brand) => brand.id === id);
    if (!brandById) throw new NotFoundException(`Brand ${id} not found`);
    return brandById;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDb = this.findOne(id);
    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDb.updatedAt = new Date().getTime();
        brandDb = { ...brandDb, name: updateBrandDto.name };
        return brandDb;
      }
      return brand;
    });
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
    return `Brand ${id} deleted`;
  }

  fillCarsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
