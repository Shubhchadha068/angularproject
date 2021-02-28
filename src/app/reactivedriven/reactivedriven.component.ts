import {  Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactivedriven',
  templateUrl: './reactivedriven.component.html',
  styleUrls: ['./reactivedriven.component.css']
})
export class ReactivedrivenComponent  {

  constructor() { }
  userForm= new FormGroup({
    username:new FormControl(),
    useremail:new FormControl(),
    usercontact:new FormControl(),
    userdesignation:new FormControl(),
  });
  onAdding(){
    console.log(this.userForm.value);
  }

}
