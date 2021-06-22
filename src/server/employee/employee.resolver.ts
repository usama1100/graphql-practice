import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmployeeCreateDto } from './dto/create-employee.input';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}
  @Query(() => [Employee], { name: 'getAllEmployees' })
  findAll() {
    return this.employeeService.findAll();
  }

  @Query(() => [Employee], { name: 'getAllProjEmployees' })
  findAllEmployees(@Args('projectId') projectId:string) {
    console.log("Project Id is ",projectId);
    return this.employeeService.findAllEmployees(projectId);
  }

  @Mutation(()=>Employee,{name:"createEmployee"})
  create(@Args('employee') employee:EmployeeCreateDto){
return this.employeeService.create(employee);
  }
}
