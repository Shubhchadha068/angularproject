import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from "@angular/forms";
import { from, Subscription } from 'rxjs';
import { Userc } from 'src/app/shared/userc.model';
import { SUserService} from 'src/app/shared/userservice.service'
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit  {
  Users!: Userc[];
  private subscription!: Subscription;

  constructor(
    private userService:SUserService,
    private router:Router,
  ) {}
  ngOnInit(){
    this.Users=this.userService.showUser();
    this.subscription=this.userService.userchange.subscribe((user:Userc[])=>{this.Users=user})
    console.log(this.subscription);
  }

  onAddUser(f:NgForm){
    const newUserDetail= new Userc(f.value.username,f.value.email,f.value.Contact,f.value.Designation);
    this.userService.addUser(newUserDetail);
    alert("Data Added Successfully!");
  }
  onDeleteUser(index:number){
    this.userService.deleteUser(index);
    alert('Selected Record deleted');

  }
  onEditUser(index:number){
    this.router.navigate(['/edit-user'],{queryParams:{id:index}});
  }

}
