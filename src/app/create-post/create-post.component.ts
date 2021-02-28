import { variable } from '@angular/compiler/src/output/output_ast';
import { Component,EventEmitter, OnInit,Output } from '@angular/core';
import { combineLatest, from } from 'rxjs';
import { AuthService } from '../services/auth.service';
//import {Router} from '@angular/router'

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent  implements OnInit {
  //router: any;

  constructor(private authservice: AuthService) { }

  usertitle='';
  usermessage='';
  @Output() newPost= new EventEmitter();



  onAddMessage()
  { //this.router.navigate(['/sendpost']);
    const post={title:this.usertitle,message:this.usermessage};

    this.newPost.emit(post);

  }
  ngOnInit() {
    console.log(this.authservice.getUser());
  }
}
