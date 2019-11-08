import { Component, OnInit, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { cardAmin } from '../../anims/card.anmi'

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations:[
    cardAmin
  ]
})
export class ProjectItemComponent implements OnInit {

  @Input() item: {};
  @Output() onInvite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();

  cardState = 'in'

  // @HostBinding('@card') cardState = 'in';
  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'out'
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'in'
  }

  onInviteClick() {
    this.onInvite.emit()
  }
  onEditClick() {
    this.onEdit.emit()
  }
  onDeleteClick() {
    this.onDelete.emit()
  }
}
