import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupModule } from './group/group.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'oms',
      entities: [__dirname + '/**/*/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    GroupModule,
  ],
})
export class AppModule {}
