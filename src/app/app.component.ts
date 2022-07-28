import { Component, OnInit } from '@angular/core';
import { LoginService } from './components/navbar/login/login.service';

@Component({
  selector: 'app-root',
  providers: [LoginService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private _service:LoginService){}

ngOnInit(){
}


}