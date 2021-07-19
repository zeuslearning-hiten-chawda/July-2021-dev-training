import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('password')
  passwordElementRef!: ElementRef;

  constructor(private router:Router) { }

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

  navigateToDashboard(user:any,pass:any,event:any){
    // event.preventDefault();
    console.log("called")
    // console.log(user.value)
    // console.log(pass.value)
    const uregex:any = /[a-zA-Z0-9._-]+(@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$)?/gm;
    const pregex:any = /(.)+/gm;
    // console.log(uregex.exec(user.value)[0])
    // console.log(pregex.exec(pass.value)[0])
    try {
      if((uregex.exec(user.value)[0] === user.value) &&  (pregex.exec(pass.value)[0] === pass.value)){
        this.router.navigateByUrl('/dashboard')
      }
    } catch (error) {

    }

  }
}
