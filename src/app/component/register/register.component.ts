import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, public auth:AuthService) { }

  registrationForm: FormGroup;

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null,Validators.required],
    });
  }

  register(val){
    this.auth.reg(val).subscribe(
      (response)=>{
        if (response = 1) {
          alert('success');
        }
      },
      (error)=>{
        console.log(error);
      },
      ()=>{
        console.log('complete');
      }
    )
  }
}
