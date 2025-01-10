import { Component ,OnInit} from '@angular/core';
import { MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { MatLabel } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { CategoryService } from 'src/app/APISERVICES/CategoryService';
import { TempService } from 'src/app/APISERVICES/TempService';
import { NgFor } from '@angular/common';
import { MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-add-new',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    RouterLink,
    MatCardContent,
    MatCardTitle,
    MatButton,
    MatCardHeader,
    MatCard,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput, 
    MatFormField,
    NgFor,
    MatSelect,
    MatOption,
  ],
  templateUrl: './add-new.component.html',
  styleUrl: './add-new.component.scss'
})

export class AddNewComponent implements OnInit {
  csForm: FormGroup;
  categories: any[] = [];
  selectedValue: string = "select category";
  base64Image: string | null = null; // Variable to store the Base64 string

  constructor(
    private catSer: CategoryService,
    private tempSer: TempService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.csForm = this.fb.group({
      categoryId: ['', Validators.required],
      imageUrl: [null, Validators.required],
      description: ['', Validators.required]
    });

    // Fetch categories
    this.catSer.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input?.files?.length) {
      const file = input.files[0];

      // Ensure it's an image file
      if (!file.type.startsWith('image/')) {
        alert('Please upload a valid image file.');
        return;
      }

      const reader = new FileReader();

      // Convert the file to Base64
      reader.onload = () => {
        this.base64Image = reader.result as string;

        // Update the form with the Base64-encoded image
        this.csForm.patchValue({
          imageUrl: this.base64Image
        });
      };

      reader.readAsDataURL(file); // Start reading the file
    }
  }

  addTemp(): void {
    if (this.csForm.valid) {
      console.log('Form Data:', this.csForm.value);

      this.tempSer.addTemp(this.csForm.value).subscribe((res) => {
        console.log('API Response:', res);
      });
    } else {
      console.error('Form is invalid:', this.csForm.errors);
      Object.keys(this.csForm.controls).forEach((key) => {
        const controlErrors = this.csForm.get(key)?.errors;
        if (controlErrors) {
          console.error(`Control "${key}" has errors:`, controlErrors);
        }
      });
    }
  }
}