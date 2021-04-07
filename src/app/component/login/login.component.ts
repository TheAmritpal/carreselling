import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  name;

  constructor(private fb:FormBuilder,public auth:AuthService, private route:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:[null,Validators.required],
      password:[null,Validators.required],
    });
  }
  login(val){
    this.auth.log(val).subscribe(
      (response)=>{
        console.log(response);
        if (response == true) {
          this.auth.isLogin = true;
          this.route.navigate(['home']);
        } else {
          alert('email or password is incorrect');
        }
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
