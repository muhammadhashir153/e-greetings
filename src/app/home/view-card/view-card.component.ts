import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CustomTempService } from 'src/app/APISERVICES/CustomeTempService';
import { ActivatedRoute } from '@angular/router';
import { fabric } from 'fabric';

@Component({
  selector: 'app-view-card',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './view-card.component.html',
  styleUrl: './view-card.component.scss'
})
export class ViewCardComponent {
  data:any ;
  userId = this.activatedRoute.snapshot.paramMap.get('uid');
  tempId = this.activatedRoute.snapshot.paramMap.get('tid');
  canvas :any | null = document.getElementById("display-canvas");
  constructor(private customTempService: CustomTempService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let displayCanvas = new fabric.Canvas("display-canvas");

    this.customTempService.checkTemp(this.userId, this.tempId).subscribe((response: any)=>{
      this.data = response
      console.log(this.data.info);

      displayCanvas.loadFromJSON(
        this.data.info, // JSON string representing the canvas
        () => {
          // Optional callback after the canvas has finished loading
          console.log('Canvas loaded successfully.');
          displayCanvas.renderAll(); // Ensures the canvas is updated visually

          // Make all objects non-editable
          displayCanvas.getObjects().forEach((obj) => {
            obj.selectable = false; // Disable selection
            obj.evented = false;   // Disable object events
          });

          // Disable canvas interaction
          displayCanvas.selection = false; // Disable group selection
          displayCanvas.renderAll();       // Re-render after making changes
        }
      );
    });
  }
}
