import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Userc } from '../shared/userc.model';
import { SUserService} from 'src/app/shared/userservice.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent{

  constructor(private activatedRoute:ActivatedRoute,
    private userService:SUserService,
    private Route:Router) { }
  @ViewChild('updateform',{static:false})
  newForm!:NgForm;
  index!:number;
  editUser!:Userc;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params=>{this.index=params['id']})
    console.log(this.index);
    this.editUser=this.userService.selectedUser(this.index);
    console.log(this.editUser);
    setTimeout(()=>{
      this.newForm.form.patchValue({
        username:this.editUser.username,
        email:this.editUser.email,
        Contact:this.editUser.Contact,
        Designation:this.editUser.Designation
      });
    }

    )};
  onUpdateUser(form:NgForm){
    const updateUser= new Userc(
      form.value.username,
      form.value.email,
      form.value.Contact,
      form.value.Designation)
      this.userService.updateUser(this.index,updateUser);
      alert('Record Updated');
      this.Route.navigateByUrl('/add-user');
  }
  }


