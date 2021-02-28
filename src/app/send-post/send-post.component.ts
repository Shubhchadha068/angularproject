import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-post',
  templateUrl: './send-post.component.html',
  styleUrls: ['./send-post.component.css']
})
export class SendPostComponent implements OnInit {

  constructor() { }


  
  @Input() posts :any=[];

  ngOnInit() {

  }


}
