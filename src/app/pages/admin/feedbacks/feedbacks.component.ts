import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { FeedbackService } from 'src/app/APISERVICES/FeedbackService';
import { UserService } from 'src/app/APISERVICES/UserService';
import { forkJoin, switchMap, map } from 'rxjs';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MaterialModule,
    NgFor,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    MatIcon
  ],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss'
})
export class FeedbacksComponent {
  feedbacks: any = [];
  constructor(private feedbackSer: FeedbackService, private userService: UserService){}
  ngOnInit(): void {
    this.feedbackSer.getFeedbacks()
      .pipe(
        switchMap(feedbacks => 
          forkJoin(
            feedbacks.map((feedback:any) =>
              this.userService.getUserById(feedback.userId).pipe(
                map(userDetails => ({ ...feedback, userDetails }))
                
              )
            )
          )
        )
      )
      .subscribe(combinedData => {
        this.feedbacks = combinedData;

        this.feedbacks = this.feedbacks.reverse();
      });

      
  }
  

  deleteFeedback(id :any):void{
    this.feedbackSer.deleteFeedback(id).subscribe(() => {
        this.feedbacks = this.feedbacks.filter((feedback :any) => feedback.id !== id);
        alert("Ignored Successfully🖐");
    })
  }
}
