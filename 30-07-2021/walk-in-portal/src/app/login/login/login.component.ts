import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  get email(){
    return <FormControl>this.loginForm.get("email")
  }
  get password(){
    return <FormControl>this.loginForm.get("password")
  }

  constructor() {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required,Validators.email]),
      password: new FormControl(null, [Validators.required,Validators.minLength(4)]),
      remember: new FormControl(null),
    });
  }

  logIn() {
    console.log(this.loginForm);
  }
}
