import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formProject';
  constructor(private authservice:AuthService){}
  onRemove(){
    this.authservice.removeUser();
    alert('user signed out!');
  }
}

