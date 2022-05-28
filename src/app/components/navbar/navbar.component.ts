import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Login() {
    alert('Please Login')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
