import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { EmployeeModule } from './employee/employee.module';
import { ProjectModule } from './project/project.module';
import { ViewController } from './view/view.controller';
import { ViewModule } from './view/view.module';
import { ViewService } from './view/view.service';

@Module({
  imports: [
  EmployeeModule,GraphQLModule.forRoot(
    {
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    
    }
  ),
TypeOrmModule.forRoot({
  type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456789',
      database: 'graphql_db',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: false,
}),
ProjectModule, ViewModule,
],
  controllers: [ViewController],
  providers: [ViewService],
})
export class AppModule {}
