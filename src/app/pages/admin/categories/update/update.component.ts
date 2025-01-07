import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/APISERVICES/CategoryService';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    RouterLink
  ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss',
})
export class UpdateComponent implements OnInit {
  form: FormGroup;
  id: any;

  constructor(
    private catService: CategoryService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.loadCategoryData();
  }

  loadCategoryData(): void {
    this.catService.getCategoryById(this.id).subscribe(
      (data) => {
        // Initialize the form after data is loaded
        this.form = new FormGroup({
          name: new FormControl(data.name, Validators.required),
          description: new FormControl(data.description, Validators.required),
        });
      },
      (error) => {
        console.error('Error fetching category data:', error);
      }
    );
  }

  updateCategory(): void {
    if (this.form?.valid) {
      this.catService.updateCategory(this.id, this.form.value).subscribe(
        (response) => {
          console.log('Category updated successfully:', response);
          this.route.navigate(['/categories']); // Redirect to categories list
        },
        (error) => {
          console.error('Error updating category:', error);
        }
      );
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
