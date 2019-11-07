import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sidebarToggle = new EventEmitter<void>();

  @Input() isCollapsed: false;

  @Input() isLogin: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClickToggle(){
    this.sidebarToggle.emit();
  }

}
