import { NgModule } from '@angular/core';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { SharedModule } from '../shared/shared.module';
import { TaskRoutingModule } from './task-routing.module';



@NgModule({
  declarations: [
    TaskHomeComponent, 
    TaskListComponent, 
    TaskHeaderComponent, 
    TaskItemComponent
  ],
  imports: [
    SharedModule,
    TaskRoutingModule,
  ]
})
export class TaskModule { }
