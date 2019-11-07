import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';
import { Router } from '@angular/router'
import { NzMessageService } from 'ng-zorro-antd/message'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  validateForm: FormGroup;

  submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  router: Router;

  constructor(private fb: FormBuilder, private message: NzMessageService) { }

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
    } else {
      this.message.error("login fail!")
    }



    // this.router.navigateByUrl('index') 

  }

}
