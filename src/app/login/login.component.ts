import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, FontAwesomeModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
  // providers: [MessageService],
})
export class LoginComponent {
  passwordFieldType: string = 'password'; // Default input type

  togglePasswordVisibility() {
    // Toggle the input type between 'password' and 'text'
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  loginForm: FormGroup;
  loginError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.loginError = null; 
    });
  }
  get email() {
    return this.loginForm.controls['email']; 
  }
  get password() {
    return this.loginForm.controls['password']; 
  }
  // loginUser() {
  //   // console.log(this.loginForm.value);
  //   const { email, password } = this.loginForm.value;
  //   this.api.getUserbyEmail(email as string).subscribe(
  //     (response) => {
  //       if (response.length > 0 && response[0].password === password) {
  //         sessionStorage.setItem('email', email as string);
  //         this.router.navigate(['/home']);
  //       } else {
  //         this.loginError = 'Please Enter Valid Credentials';
  //       }
  //     },
  //     (error) => {
  //       this.loginError = 'Please Enter  Valid Credentials';
  //     }
  //   );
  // }

  loginUser() {
    const { email, password } = this.loginForm.value;

    if(!email){
      this.loginError = 'Please Enter Email';
      return;
    }

    this.api.getUserbyEmail(email as string).subscribe(
      (response) => {
        if (response.length === 0) {
          this.loginError = 'Email not registered';
        } else {
          const user = response[0];
          if (user.password === password) {
            sessionStorage.setItem('email', email as string);
            this.router.navigate(['/create-irn']);
          } else {
            this.loginError =
              'Wrong password. Try again or click Forgot password to reset it';
          }
        }
      },
      (error) => {
        this.loginError = 'An error occurred. Please try again.';
      }
    );
  }
}


