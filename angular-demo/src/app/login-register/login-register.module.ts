import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { LoginRegisterRoutingModule } from './login-register-routing.module'


@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent
  ],
  imports: [
    SharedModule,
    LoginRegisterRoutingModule,
  ]
})
export class LoginRegisterModule { }
