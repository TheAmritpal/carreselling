import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router) { }

  isLogin: boolean = false;

  reg(data){
    return this.http.post("http://localhost/amrit/carreselling_api/register.php",JSON.stringify(data));
  }
  log(data){
    return this.http.post("http://localhost/amrit/carreselling_api/login.php",JSON.stringify(data));
  }
}
