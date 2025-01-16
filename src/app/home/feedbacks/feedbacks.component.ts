import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { FeedbackService } from 'src/app/APISERVICES/FeedbackService';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatButton
  ],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss'
})
export class FeedbacksComponent {
  feedbackForm: FormGroup;
  constructor(private fb :FormBuilder, private feedbackSer: FeedbackService) {

   this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  addFeedback():void{
    console.log(this.feedbackForm.value);
    let messageBox = document.getElementById("message");
    const data = {
      userId: sessionStorage.getItem('UserId'),
      message: this.feedbackForm.value.message
    }

    this.feedbackSer.addFeedback(data).subscribe(
      (response) => {
        console.log(response);
        this.feedbackForm.reset();
        (messageBox as HTMLElement).innerHTML = "Thankyou for your feedback, we love it❤";
        (messageBox as HTMLElement).style.display = 'block';

        setTimeout(function(){
          (messageBox as HTMLElement).style.display = 'none';
        }, 2500)
      },
      (error) => {
        console.log(error);
        (messageBox as HTMLElement).innerHTML = "We don't want to hear from you, get lost😂";
        (messageBox as HTMLElement).style.display = 'block';

        setTimeout(function(){
          (messageBox as HTMLElement).style.display = 'none';
        }, 1500)
      }
    )
  }
}
