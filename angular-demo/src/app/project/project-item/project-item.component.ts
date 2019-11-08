import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() delProject = new EventEmitter<number>();
  @Output() editProject = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDelClick(id: number) {
    this.delProject.emit(id);
  }

  onEditClick(id: number) {
    this.editProject.emit(id);
  }

}
