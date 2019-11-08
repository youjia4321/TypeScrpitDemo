import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一：去星巴克买咖啡',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'assets/avatar/avatar1.png'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务二：完成老板布置的ppt',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'assets/avatar/avatar1.png'
          },
          dueDate: new Date(),
        }
      ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务三：项目代码审评',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'assets/avatar/avatar1.png'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: '任务四：制定项目计划',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'assets/avatar/avatar1.png'
          },
          dueDate: new Date(),
        }
      ]
    },
    {
      id: 3,
      name: '已完成',
      tasks: [
        {
          id: 1,
          desc: '任务五：去星巴克买咖啡',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'assets/avatar/avatar1.png'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: '任务六：完成老板布置的word',
          completed: true,
          priority: 2,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'assets/avatar/avatar1.png'
          },
          dueDate: new Date(),
        }
      ]
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
