import { Component, OnInit } from '@angular/core';
import { UserService } from './../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any ;
  page = 1;
  constructor(private service: UserService) { }

  ngOnInit() {
   this.service.getAllUsers().subscribe(users => {
    this.users = users;
    console.log(this.users);

  });
  }

}
