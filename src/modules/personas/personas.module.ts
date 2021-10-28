import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasController } from './controllers/personas.controller';
import { Persona } from './entities/persona.entity';
import { PersonasService } from './services/personas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Persona])],
  providers: [PersonasService],
  controllers: [PersonasController],
})
export class PersonasModule {}
