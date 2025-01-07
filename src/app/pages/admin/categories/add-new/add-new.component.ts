import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { Router, RouterLink } from '@angular/router';
import { CategoryService } from 'src/app/APISERVICES/CategoryService';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-new',
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
  templateUrl: './add-new.component.html',
  styleUrl: './add-new.component.scss'
})
export class AddNewComponent {
  constructor (private catService: CategoryService, private route: Router){}
  data: any = {};
  

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  get name() { return this.form.get('name'); }
  get description() { return this.form.get('description'); }

  addCat(): void {
    if (this.form.valid) {
      this.catService.addCategory(this.form.value).subscribe(
        (response) => {
          console.log(response);
          alert("Success");
          this.route.navigate(['/admin/categories']);
        },
        (error) =>{
          alert("Error Occured");
          console.log("Error" + error);
        }
      );
    } else {
      alert('Invalid Form');
    }
  }

}
