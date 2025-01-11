import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NgFor } from '@angular/common';
import { TempService } from 'src/app/APISERVICES/TempService';

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
    RouterLink,
    ReactiveFormsModule,
    NgFor
  ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss',
})
export class UpdateComponent implements OnInit {
  csForm: FormGroup;
  id: any;
  categories: any[] = [];

  constructor(
    private catService: CategoryService,
    private route: Router,
    private activeRoute: ActivatedRoute,
    private fb : FormBuilder,
    private catSer: CategoryService,
    private tempSer :TempService
  ) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.csForm = this.fb.group({
      categoryId: ['', Validators.required],
      imageUrl: ['', Validators.required],
      description: ['', Validators.required],          

    });
    this.loadTemplateData(this.id);
    // Fetch categories
    this.catSer.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  loadTemplateData(id:any): void {
    this.tempSer.getServiceById(id).subscribe(
      (data) => {
        // Initialize the form after data is loaded
        this.csForm = new FormGroup({
          description: new FormControl(data.description, Validators.required),
          categoryId: new FormControl('', Validators.required),
          imageUrl: new FormControl(data.imageUrl, Validators.required),
        });
        console.log(data);
      },
      (error) => {
        console.error('Error fetching category data:', error);
      }
    );
  }

  updateTemp(): void {
    if (this.csForm?.valid) {
      this.tempSer.updateTemp(this.id, this.csForm.value).subscribe(
        (response) => {
          alert("Template updated successfully");
          this.route.navigate(['/admin/templates']); // Redirect to categories list
        },
        (error) => {
          console.error('Error updating category:', error);
          alert("an error occured, please try again later");
        }
      );
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
