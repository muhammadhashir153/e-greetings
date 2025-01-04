import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { fabric } from 'fabric';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute } from '@angular/router';
import { TempService } from 'src/app/APISERVICES/TempService';
import { Subject } from 'rxjs';

interface Food {
  value: string;
  viewValue: string;
}

interface temp{
  imageUrl: string,
  description: string
}

@Component({
  selector: 'app-editor',
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
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})




export class EditorComponent implements OnInit, AfterViewInit {
  
  private canvas!: fabric.Canvas;
  id: string | null = null;
  temp :temp;
  desc$ = new Subject<string>();
  img$ = new Subject<string>();
  constructor(private tempService :TempService, private activeRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.tempService.getServiceById(this.id).subscribe((res:any) => {
      this.temp = res;
      const img = this.temp.imageUrl;
      const desc = this.temp.description;

      this.img$.next(img);
      this.desc$.next(desc);
    })
  }

  ngAfterViewInit(): void {
    let img: string = '';
    let desc : string = '';
    let canvasBox = document.getElementById("canvas-box");

    this.canvas = new fabric.Canvas('fabricCanvas');
    let canvas = this.canvas;

    this.desc$.subscribe((a) => {
      desc = a;
      const greetingText = new fabric.Textbox(desc, {
        left: 200,
        top: 250,
        fontSize: 40,
        fill: '#000',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        textAlign: 'center',
        editable: true,
        width: 400,
      });
      this.canvas.add(greetingText);
      canvas.setActiveObject(greetingText);
    });

    this.img$.subscribe((i) => {
      img = i;
      fabric.Image.fromURL(img, (img) => {
        const canvasWidth = this.canvas.getWidth() || 800;
        const canvasHeight = this.canvas.getHeight() || 600;

        // Calculate scaling factors for width and height
        const scaleX = canvasWidth / img.width!;
        const scaleY = canvasHeight / img.height!;

        // Use the smaller scale to ensure the image fits within the canvas
        const scale = Math.min(scaleX, scaleY);

        img.scale(scale);

        // Center the image on the canvas
        img.left = (canvasWidth - img.width! * scale) / 2;
        img.top = (canvasHeight - img.height! * scale) / 2;

        this.canvas.setBackgroundImage(img, this.canvas.renderAll.bind(this.canvas), {
          selectable: false, // This makes the image immovable
        });
  
        // Re-render the canvas after changing the fill
        this.canvas.renderAll();
      });
    });

    

    const addButton = document.getElementById("add-text");

    (addButton as HTMLElement).onclick = addTextbox;

    function addTextbox() {
      const textbox = new fabric.Textbox('Enter text here', {
          left: 50, // X-coordinate on canvas
          top: 50,  // Y-coordinate on canvas
          width: 200,
          fontSize: 20,
          fill: '#000', // Text color
          borderColor: '#333', // Border color when selected
          cornerColor: '#333', // Corner color when resizing
          cornerStyle: 'circle', // Resizing handle style
          editable: true, // Allow text editing
      });
  
      // Add the textbox to the canvas
      canvas.add(textbox);
      canvas.setActiveObject(textbox);
      canvas.renderAll();
    }

    
  window.addEventListener("localStorageUpdated", () => {
    let image = localStorage.getItem("media");
    
    if (image) {
        fabric.Image.fromURL(image, (img) => {
            img.scaleToWidth(200);
            img.scaleToHeight(200);
            img.set({
              hasBorders: true,
              hasControls: true,
            });
            // Assuming canvas is available in this scope
            this.canvas.add(img);
            canvas.setActiveObject(img);
            this.canvas.renderAll();
        });
    }
  });

    const delBtn = document.getElementById("del-item");

    canvas.on('selection:created', updateButtonPosition);
    canvas.on('selection:cleared', updateButtonPosition);
    canvas.on('selection:updated', updateButtonPosition);
    canvas.on('object:moving', updateButtonPosition);

    function updateButtonPosition() {
      const activeObject = canvas.getActiveObject();
      if (activeObject) {
          const objectCoords = activeObject.aCoords;
          if(objectCoords){
            (delBtn as HTMLElement).style.left = `${objectCoords.tr.x}px`;
            (delBtn as HTMLElement).style.top = `${objectCoords.tr.y - 30}px`;
            (delBtn as HTMLElement).style.display = 'block';
          }
      }else{
        (delBtn as HTMLElement).style.display = 'none';
      }
    }

    (delBtn as HTMLElement).addEventListener('click', () => {
      const activeObject = canvas.getActiveObject();
      if (activeObject) {
          canvas.remove(activeObject);
          canvas.discardActiveObject();
          canvas.renderAll();
          localStorage.removeItem("media");
          this.closePanel();
          (delBtn as HTMLElement).style.display = 'none';
      }
    });
    
    // window.location.reload();
    // Optional: Enable additional canvas settings
    // this.canvas.setWidth((canvasBox as HTMLElement).offsetWidth);
    window.onload = () => {
      (fabricCanvas as HTMLElement).style.width = getComputedStyle((canvasBox as HTMLElement)).width;
      this.canvas.setWidth(parseFloat(getComputedStyle((canvasBox as HTMLElement)).width));
    }
    this.canvas.setHeight(600);
    this.canvas.renderAll();
    let fabricCanvas = document.querySelector(".canvas-container");
    
    
  }

  saveState() :void{
    const canvasState = this.canvas.toJSON();

    const requestBody = {
      tempId: 1,
      userId: 1,
      info: JSON.stringify(canvasState),
    };

    const apiUrl = '/api/CustomizeTemplates';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Canvas saved successfully:', data);
    })
    .catch(error => {
      console.error('Error saving canvas:', error);
    });

    
  }

  showPanel(panelId: string): void {
    const main = document.getElementById("main-panel");
    const panels = document.querySelectorAll(".panel");

    if (main && panels) {
      // Hide the main panel
      main.style.display = "none";

      // Loop through panels and display the one matching `panelId`
      panels.forEach((item) => {
        if (item.classList.contains(panelId)) {
          (item as HTMLElement).style.display = "block";
        } else {
          (item as HTMLElement).style.display = "none";
        }
      });
    }
  }

  closePanel(): void{
    const main = document.getElementById("main-panel");
    const panels = document.querySelectorAll(".panel");

    if(main && panels){
      panels.forEach((item) =>{
        (item as HTMLElement).style.display = "none";
      });

      main.style.display = "flex";
    }
  }

  uploadFile(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
        return; // No files selected
    }

    const files = input.files;
    const mediaBox = document.getElementById("media");

    // Clear any existing items in the mediaBox
    if (mediaBox) {
        mediaBox.innerHTML = '';
    }

    Array.from(files).forEach((file, index) => {
        const reader = new FileReader();
        
        // Read the file as a Data URL
        reader.onload = () => {
            const result = reader.result as string;
            // const fileUrl = URL.createObjectURL(result);

            // Save the file content (base64) in localStorage
            localStorage.setItem(`media`, result);

            // Optionally display the file content in mediaBox (e.g., an image or file name)
            if (mediaBox) {
                const div = document.createElement('div');
                div.classList.add("col-lg-6");
                div.innerHTML = `<img src="${result}" class="w-100" />`;
                mediaBox.appendChild(div);
            }
            const event = new CustomEvent('localStorageUpdated');
            window.dispatchEvent(event);
        };

        reader.readAsDataURL(file);
        
    });
  }

  country: Food[] = [
    { value: 'times-new-roman', viewValue: 'Times New Roman' },
    { value: 'pizza-1', viewValue: 'India' },
    { value: 'tacos-2', viewValue: 'France' },
    { value: 'tacos-3', viewValue: 'UK' },
  ];

  selectedFont = this.country[0].value;
}


