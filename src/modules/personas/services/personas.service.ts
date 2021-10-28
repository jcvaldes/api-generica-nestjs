import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../../../commons/service.commons';
import { Repository } from 'typeorm';
import { Persona } from '../entities/persona.entity';

@Injectable()
export class PersonasService extends BaseService<Persona> {
  constructor(
    @InjectRepository(Persona) private personaRepo: Repository<Persona>,
  ) {
    super();
  }

  getRepository(): Repository<Persona> {
    return this.personaRepo;
  }
}
