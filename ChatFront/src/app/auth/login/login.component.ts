import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../_services';
import { CookieService } from 'ngx-cookie-service';
import * as decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  message: any;
  constructor(private authService: AuthService, private cookieService: CookieService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit() {
  }

  loginBtn(form) {
    this.authService.login(form.value)
      .subscribe(data => {
        this.cookieService.set('Data', JSON.stringify(data));
        if (JSON.parse(JSON.stringify(data)).Message === 'User not found') {
          this.message = 'User not found';
        } else if (JSON.parse(JSON.stringify(data)).Message === 'Wrong pwd') {
          this.message = 'Incorrect password';
        } else {
          this.message = '';
          console.log(decode(JSON.parse(JSON.stringify(data)).Token));
          this.router.navigate(['']);
         }
      });
  }
}
