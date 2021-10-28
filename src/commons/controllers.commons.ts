import {
  Body,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BaseService } from './service.commons';

export abstract class BaseController<T> {
  abstract getService(): BaseService<T>;
  @Get('all')
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<T[]> {
    return await this.getService().findAll();
  }
  @Get('find/:id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id): Promise<T> {
    return await this.getService().findOne(id);
  }
  @Post('save')
  @HttpCode(HttpStatus.CREATED)
  async save(@Body() entity: T): Promise<T> {
    return await this.getService().save(entity);
  }
  @Post('save/many')
  @HttpCode(HttpStatus.CREATED)
  async saveMany(@Body() entities: T[]): Promise<T[]> {
    return await this.getService().saveMany(entities);
  }
  @Put('update/:id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: any, @Body() entity: T) {
    return this.getService().update(id, entity);
  }
  @Delete('delete/:id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('id') id: any) {
    return this.getService().delete(id);
  }
  @Get('count')
  @HttpCode(HttpStatus.OK)
  async count(): Promise<number> {
    return await this.getService().count();
  }
}
