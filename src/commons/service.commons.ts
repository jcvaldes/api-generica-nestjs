import { NotFoundException } from '@nestjs/common';
import { FindManyOptions } from 'typeorm';
import { Repository } from 'typeorm';

export abstract class BaseService<T> {
  abstract getRepository(): Repository<T>;

  findAll(): Promise<T[]> {
    return this.getRepository().find();
  }
  async findOne(id: number): Promise<T> {
    const entity = await this.getRepository().findOne(id);

    if (!entity) {
      throw new NotFoundException();
    }
    return entity;
  }
  save(entity: T): Promise<T> {
    return this.getRepository().save(entity);
  }
  saveMany(entities: T[]): Promise<T[]> {
    return this.getRepository().save(entities);
  }
  async update(id: number, entity: T): Promise<void> {
    await this.getRepository().update(id, entity);
  }
  async delete(id: number): Promise<void> {
    await this.getRepository().delete(id);
  }

  count(options?: FindManyOptions<T>): Promise<number> {
    return this.getRepository().count(options);
  }
}
