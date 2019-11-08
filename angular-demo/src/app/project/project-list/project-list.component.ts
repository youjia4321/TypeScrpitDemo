import { Component, OnInit } from '@angular/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  isNewVisible = false;
  isEditVisible = false;
  len: number;
  editIndex: number;
  nameValue: string;
  descValue: string;
  editName: string;
  editDesc: string;
  projects = [
    {
      id: 1,
      name: "企业协作平台1",
      desc: "这是一个企业内部项目",
      coverImg: "assets/img/banner2.png"
    },
    {
      id: 2,
      name: "企业协作平台2",
      desc: "这是一个企业内部项目",
      coverImg: "assets/img/banner1.png"
    },
    {
      id: 3,
      name: "企业协作平台3",
      desc: "这是一个企业内部项目",
      coverImg: "assets/img/banner2.png"
    }
  ]
  constructor(
    private message: NzMessageService,
    private modalService: NzModalService) { }

  ngOnInit() {
    this.len = this.projects.length;
  }

  newProject() {
    this.isNewVisible = true;
  }

  editProject(id: number) {
    this.editIndex = id;
    this.editName = this.projects[this.proIndex(this.editIndex)].name;
    this.editDesc = this.projects[this.proIndex(this.editIndex)].desc;
    this.isEditVisible = true;
  }

  proIndex(id: number) {
    return this.projects.findIndex(item => item.id === id);
  }

  launchDelConfirmModal(id: number) {
    this.modalService.confirm({
      nzTitle: '系统提示',
      nzContent: '<b>确认删除该任务吗？</b>',
      nzOkText: '确认',
      nzOkType: 'danger',
      nzOnOk: () => {
        this.projects.splice(this.proIndex(id), 1);
        this.message.success("删除成功");
      },
      nzCancelText: '取消',
      nzOnCancel: () => {}
    })
  }

  newOk() {
    this.projects.push({
      id: this.len +1,
      name: this.nameValue,
      desc: this.descValue,
      coverImg: 'assets/img/banner1.png'
    })
    this.nameValue = '';
    this.descValue = '';
    this.isNewVisible = false;
    this.message.success("添加项目成功!");
  }

  newCancel() {
    this.nameValue = '';
    this.descValue = '';
    this.isNewVisible = false;
  }

  editOk() {
    this.isEditVisible = false;
    this.projects[this.proIndex(this.editIndex)].name = this.editName;
    this.projects[this.proIndex(this.editIndex)].desc = this.editDesc;
    this.editName = '';
    this.editDesc = ''
    this.message.success("编辑项目成功!");
  }

  editCancel() {
    this.editName = '';
    this.editDesc = '';
    this.isEditVisible = false;
  }


}
