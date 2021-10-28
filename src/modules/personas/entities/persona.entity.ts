import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('personas')
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  direccion: string;

  @Column()
  telefono: string;
}
