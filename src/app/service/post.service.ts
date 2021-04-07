import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private route: Router) { }

  addcar(data){
    return this.http.post("http://localhost/amrit/carreselling_api/insertcar.php",JSON.stringify(data));
  }
  viewcar(){
    return this.http.get("http://localhost/amrit/carreselling_api/selectcar.php");
  }
  speedcar(data){
    return this.http.get("http://localhost/amrit/carreselling_api/selectcategory.php?speed=" + data);
  }
}
