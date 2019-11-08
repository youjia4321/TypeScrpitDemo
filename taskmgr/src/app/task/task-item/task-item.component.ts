import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { itemAdmin } from '../../anims/item.anim';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    itemAdmin
  ]
})
export class TaskItemComponent implements OnInit {

  @Input() item: any;
  @Input() avatar: string;
  @Output() taskClick = new EventEmitter<void>();

  widerPriority = 'in'

  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.widerPriority = 'out';
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.widerPriority = 'in';
  }

  onItemClick() {
    this.taskClick.emit();
  }

  onCheckBoxClick(ev: Event){
    ev.stopPropagation();
  }
}
