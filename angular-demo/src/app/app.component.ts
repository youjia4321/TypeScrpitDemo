import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  isCollapsed = false;

  isLogin = true;

  toggleChange() {
    this.isCollapsed = !this.isCollapsed;
  }
}
