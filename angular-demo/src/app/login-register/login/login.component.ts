import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';
import {
  Router,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterState,
  RouterStateSnapshot
} from '@angular/router'
import { NzMessageService } from 'ng-zorro-antd/message'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder, private message: NzMessageService, public router: Router) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: true
    });
  }

  submitClick() {

    if (this.validateForm.value.userName === "admin" && this.validateForm.value.password === "123456") {
      var obj = {
        username: this.validateForm.value.userName,
        password: Md5.hashStr(this.validateForm.value.password).toString(),
        checked: this.validateForm.value.remember
      }

      localStorage.setItem('user', JSON.stringify(obj))

      this.message.success("login success!")
      this.router.navigate(['/welcome'])

      // this.router.navigateByUrl('welcome') 
    } else {
      this.message.error("login fail!")
    }



  }



}
