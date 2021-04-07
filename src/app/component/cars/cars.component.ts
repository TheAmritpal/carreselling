import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars;
  selectspeed;

  constructor(public postServ:PostService ) { }

  ngOnInit(): void {
    this.postServ.viewcar().subscribe(
      (response)=>{
        this.cars = response;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  speed(event){
    let selectspeed = event.target.value;
    this.postServ.speedcar(selectspeed).subscribe(
      (response)=>{
        this.cars=response;
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
