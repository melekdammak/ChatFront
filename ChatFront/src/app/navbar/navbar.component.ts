import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cookieValue = 'UNKNOWN';
  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.cookieValue = this.cookieService.get('Data');
  }

  logoutBtn() {
    this.cookieService.deleteAll();
    this.ngOnInit();
     }

}
