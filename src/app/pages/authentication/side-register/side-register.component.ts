import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { MaterialModule } from '../../../material.module';
import { UserService } from 'src/app/APISERVICES/UserService';

@Component({
  selector: 'app-side-register',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './side-register.component.html',
})
export class AppSideRegisterComponent {
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
  }
}
