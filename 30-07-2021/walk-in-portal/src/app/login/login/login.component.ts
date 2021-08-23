import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  get email() {
    return <FormControl>this.loginForm.get('email');
  }
  get password() {
    return <FormControl>this.loginForm.get('password');
  }

  constructor(
    private formService: FormServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      remember: new FormControl(null),
    });
  }

  logIn() {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
    this.formService
      .loginUser(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (res: any) => {
          console.log(res);
          if (res['exist']) {
            this.formService.userId = res['user_id'];
            console.log(this.formService.userId);
            this.router.navigateByUrl('/walkin');
            console.log("after guard this from login component")
          } else {
            this.formService.userId = undefined;
            alert('Invalid Credentials');
          }
        },
        (err) => {
          this.formService.userId = undefined;
          alert('Invalid Credentials');
        }
      );
  }
}
