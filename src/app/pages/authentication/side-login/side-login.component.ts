import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from 'src/app/APISERVICES/UserService';

@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {
  form: FormGroup;

  constructor(private router: Router, private userService: UserService) {
    this.form = new FormGroup({
      uname: new FormControl('', [
        Validators.required,
        Validators.required,
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const loginData = {
      email: this.form.value.uname,
      password: this.form.value.password,
    };

    // Fetch all users
    this.userService.getAllUsers().subscribe(
      (users: any[]) => {
        // Check if the email and password match
        const user = users.find(
          (u) => u.email === loginData.email && u.password === loginData.password
        );

        if (user) {
          console.log('Login successful', user);
          alert('Login successful!');

          // Store role or token in local storage
          localStorage.setItem('Role', user.role);
          localStorage.setItem('Name', user.name);
          localStorage.setItem('UserId', user.id);

          // Navigate to dashboard
          if (user.role === 'admin') {
            console.log("This Is A Admin");
            this.router.navigate(['/dashboard']);
          } else if (user.role === 'user') {
            console.log("This Is A User");
            this.router.navigate(['/']);
          } else {
            console.error('Unexpected role:', user.role);
            alert('Invalid role. Please contact support.');
          }
        } else {
          alert('Invalid username or password. Please try again.');
        }
      },
      (error) => {
        console.error('Error fetching users', error);
        alert('Unable to process login. Please try again later.');
      }
    );
  }
}
