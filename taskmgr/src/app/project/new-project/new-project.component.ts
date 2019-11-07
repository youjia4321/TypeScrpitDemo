import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material" 
// 注入MAT_DIALOG_DATA令牌 得到 Dialog传过来的data
// import { OverlayContainer } from '@angular/cdk/overlay'; 注入成全局app.component

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  title : ""
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<NewProjectComponent>) { }  

  ngOnInit() {
    // console.log(this.data);
    this.title = this.data.title;
  }

  onClick() {
    this.dialogRef.close('i recrived your message');
  }

}
