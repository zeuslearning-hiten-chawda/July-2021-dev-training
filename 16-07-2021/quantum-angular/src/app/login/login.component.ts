import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('password')
  passwordElementRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  hideShowPassword(){
    // console.log(this.passwordElementRef)
    if (this.passwordElementRef.nativeElement.type === "password") {
      this.passwordElementRef.nativeElement.type = "text";
    } else {
      this.passwordElementRef.nativeElement.type = "password";
    }
  }
}
