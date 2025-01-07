import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { UserService } from 'src/app/APISERVICES/UserService';




@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['user'], // Default role
      subscriptionStatus: ['free'], 
    });
  }

  ngOnInit(): void {
    const userId = sessionStorage.getItem("UserId"); // Replace with dynamic ID if needed
    this.userService.getUserById(userId).subscribe((user) => {
      this.profileForm.patchValue({
        name: user.name,
        email: user.email,
        password: user.password,
        role: "user",
      subscriptionStatus: "paid",
      });
    });
  }

  onSubmit(): void {
    const userId = sessionStorage.getItem("UserId");
    if (!userId) {
      console.error('No UserId found in session storage');
      return;
    }
  
    const user = this.profileForm.value; // Send the form values directly
    this.userService.updateUser(userId, user).subscribe(
      (response) => {
        console.log('Profile updated successfully', response);
        alert('Profile updated successfully');
      },
      (error) => {
        console.error('Error updating profile', error);
        alert('Failed to update profile. Please try again later.');
      }
    );
  }
  
}
