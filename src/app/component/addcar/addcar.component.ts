import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  sellForm:FormGroup

  constructor(private fb:FormBuilder,public postServ:PostService) { }

  ngOnInit(): void {
    this.sellForm = this.fb.group({
      carName: [null,Validators.required],
      carType: [null,Validators.required],
      price: [null,Validators.required],
      topSpeed: [null,Validators.required],
    });
  }
  sell(val){
    this.postServ.addcar(val).subscribe(
      (response)=>{
        if (response == 1) {
          alert('done');
          this.sellForm.reset();
        }
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
