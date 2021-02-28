import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent {

  constructor() { }
  users={
  username:'',
  password:'',}

  getValues(f:NgForm){
    console.log(f.value)
  }



}
