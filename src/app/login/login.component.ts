import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  login() {
    this.apiService.login({ email: this.email, password: this.password }).subscribe(response => {
      localStorage.setItem('user', JSON.stringify(response));
      this.router.navigate(['/chat']);
    });
  }
}
