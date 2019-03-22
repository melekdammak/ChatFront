import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../_services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  constructor(private authService: AuthService, private router: Router) {
    this.formRegister = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit() {
  }

  registerBtn(form) {
    // console.log(form.value);
    return this.authService.register(form.value)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['']);
    });
  }

}
