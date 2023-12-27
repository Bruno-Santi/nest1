import { Injectable } from '@nestjs/common';
import { BRANDS_SEED, CARS_SEED } from './data';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}
  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillCarsWithSeedData(BRANDS_SEED);
    return `Seed executed successfully`;
  }
}
