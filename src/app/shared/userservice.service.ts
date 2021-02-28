import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Userc } from './userc.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SUserService {
  private newUser:Userc[]=[];
  userchange= new Subject<Userc[]>();
  router: any;

  constructor() { }
  addUser(users:Userc){
    this.newUser.push(users);
    this.userchange.next(this.newUser.slice());
  }
  showUser(){
    return this.newUser.slice();
  }
  deleteUser(index:number){
    this.newUser.splice(index,1);
    this.userchange.next(this.newUser.slice());
  }

  selectedUser(index:number){
    return this.newUser[index];
  }
  updateUser(index:number,updatevalues:Userc){
    this.newUser[index]=updatevalues;
    this.userchange.next(this.newUser.slice());
  }
}
