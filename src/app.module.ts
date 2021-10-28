import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonasModule } from './modules/personas/personas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'demo-nestjs-db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PersonasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
