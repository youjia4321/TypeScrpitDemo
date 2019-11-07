import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  title = ""
  priorities = [
    {
      label: '紧急',
      vaule: 1
    },
    {
      label: '重要',
      vaule: 2
    },
    {
      label: '普通',
      vaule: 3
    },

  ]

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.title = this.data.title;
  }

}
