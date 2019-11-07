import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      name: "企业协作平台",
      desc: "这是一个企业内部项目",
      coverImg: "assets/img/covers/0.jpg"
    },
    {
      name: "企业协作平台",
      desc: "这是一个企业内部项目",
      coverImg: "assets/img/covers/1.jpg"
    },
    {
      name: "企业协作平台",
      desc: "这是一个企业内部项目",
      coverImg: "assets/img/covers/2.jpg"
    }
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data : {title: '新建任务'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent, {data : {title: '邀请组员'}});
  }

  launchEditDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data : {title: '编辑任务'}});
  }

  launchDeleteDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data : {title:'系统提示', content: "确认删除该项目吗？"}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}
