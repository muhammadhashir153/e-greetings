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
<<<<<<< HEAD
=======
import { UserService } from 'src/app/APISERVICES/UserService';
>>>>>>> 6733196678ea2099453b7ebbc7c4fe65cc34c1af

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
<<<<<<< HEAD
  constructor(private router: Router) {}

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  });
=======
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
>>>>>>> 6733196678ea2099453b7ebbc7c4fe65cc34c1af

  get f() {
    return this.form.controls;
  }

  submit() {
<<<<<<< HEAD
    // console.log(this.form.value);
    this.router.navigate(['/']);
=======
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

          // Navigate to dashboard
          this.router.navigate(['/dashboard']);
        } else {
          alert('Invalid username or password. Please try again.');
        }
      },
      (error) => {
        console.error('Error fetching users', error);
        alert('Unable to process login. Please try again later.');
      }
    );
>>>>>>> 6733196678ea2099453b7ebbc7c4fe65cc34c1af
  }
}
