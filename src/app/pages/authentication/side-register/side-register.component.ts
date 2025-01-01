import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
<<<<<<< HEAD
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
=======
  FormBuilder
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { MaterialModule } from '../../../material.module';
import { UserService } from 'src/app/APISERVICES/UserService';
>>>>>>> 6733196678ea2099453b7ebbc7c4fe65cc34c1af

@Component({
  selector: 'app-side-register',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './side-register.component.html',
})
export class AppSideRegisterComponent {
<<<<<<< HEAD
  constructor(private router: Router) {}

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    // console.log(this.form.value);
    this.router.navigate(['/']);
=======
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['user'], // Default role
      subscriptionStatus: ['free'], // Default subscription status
    });
  }

  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.userService.createUser(this.registerForm.value).subscribe(
      (response) => {
        console.log('User created successfully', response);
        alert('Registration successful!');
        localStorage.setItem("Role",response.role);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error creating user', error);
        alert('Registration failed. Please try again.');
      }
    );
>>>>>>> 6733196678ea2099453b7ebbc7c4fe65cc34c1af
  }
}
