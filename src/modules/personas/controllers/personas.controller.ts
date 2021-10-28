import { Controller } from '@nestjs/common';
import { BaseController } from '../../../commons/controllers.commons';
import { BaseService } from '../../../commons/service.commons';
import { Persona } from '../entities/persona.entity';
import { PersonasService } from '../services/personas.service';

@Controller('api/personas')
export class PersonasController extends BaseController<Persona> {
  constructor(private readonly personaService: PersonasService) {
    super();
  }

  getService(): BaseService<Persona> {
    return this.personaService;
  }
}
