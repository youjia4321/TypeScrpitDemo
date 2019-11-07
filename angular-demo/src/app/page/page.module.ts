import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PageRoutingModule } from './page-routing.module';



@NgModule({
  declarations: [
    WelcomeComponent, 
    HomeComponent
  ],
  imports: [
    SharedModule,
    PageRoutingModule,
  ]
})
export class PageModule { }
