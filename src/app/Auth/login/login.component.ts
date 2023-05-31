import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  login() {
    const { email, password } = this.loginForm.value;
    const loginCredentials = { email, password };

    this.apiService.login(loginCredentials).subscribe(response => {
      // Handle the login response
      this.router.navigate(['']); // Redirect to the dashboard after successful login
      console.log('login was successful')
    },
    error => {
      // Handle login error
      console.error('Login failed:', error);
    }
  );
}
}


