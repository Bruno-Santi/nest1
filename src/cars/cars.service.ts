import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  public cars: Car[] = [
    // { id: uuid(), brand: 'Toyota', model: 'Corolla' },
  ];

  getAllCars() {
    return this.cars;
  }
  getLengthOfCars() {
    return this.cars.length;
  }
  getCarById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    console.log(this.cars, id);
    if (!car) throw new NotFoundException(`Car with id: ${id} not found`);
    return car;
  }

  createNewCar(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(car);
    console.log(this.cars);
    return car;
  }

  updateCar(id: string, updateCarDto: UpdateCarDto) {
    console.log(id);
    let carDb = this.getCarById(id);
    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException(`Id cannot be changed`);
    }
    console.log(carDb);
    this.cars.map((car) => {
      if (car.id === id) {
        carDb = {
          ...carDb,
          ...updateCarDto,
          id,
        };
        console.log(carDb);
        return carDb;
      }
      return car;
    });
    return carDb;
  }

  remove(id: string) {
    this.getCarById(id);
    const newCarList = this.cars.filter((car) => car.id !== id);
    this.cars = newCarList;
    return this.cars;
  }

  fillCarsWithSeedData(cars: Car[]) {
    return (this.cars = cars);
  }
}
