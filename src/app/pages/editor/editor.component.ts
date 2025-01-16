import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { fabric } from 'fabric';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute } from '@angular/router';
import { TempService } from 'src/app/APISERVICES/TempService';
import { Subject } from 'rxjs';
import { CustomTempService } from 'src/app/APISERVICES/CustomeTempService';
import { UserMediaService } from 'src/app/APISERVICES/UserMediaService';
import { CommonModule } from '@angular/common';


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
    MatInput,
    CommonModule
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
  disabledSave:boolean = true;
  undoStack : any[] = [];
  redoStack : any[] = [];
  userMedia :any[] | null = null;
  
  constructor(
    private tempService :TempService, 
    private activeRoute : ActivatedRoute, 
    private CustomTempService : CustomTempService,
    private mediaSer: UserMediaService
  ) {}

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

  saveStateForStack(): void {
    if (this.canvas) {
      const currentState = JSON.stringify(this.canvas.toJSON());
  
      // Check if the last state in the stack matches the current state
      if (this.undoStack.length === 0 || this.undoStack[this.undoStack.length - 1] !== currentState) {
        this.undoStack.push(currentState);
        console.log('State saved');
      } else {
        console.log('State is identical to the previous one, not saving.');
      }
    } else {
      console.log('Canvas not initialized');
    }
  }
  

  undo(): void {
    if (this.undoStack.length > 0) {
      console.log('Undo Stack Before:', this.undoStack.length);
      const currentState = JSON.stringify(this.canvas.toJSON());
      this.redoStack.push(currentState);
      this.disabledSave = false;
  
      // Remove the last state from undoStack
      const previousState = this.undoStack.pop();
  
      console.log('Undo Stack After:', this.undoStack.length);
  
      // Load the previous state into the canvas
      this.canvas.loadFromJSON(previousState, () => {
        this.canvas.renderAll();
        this.disabledSave = true;
      });
    } else if (this.undoStack.length === 1) {
      alert("No more actions to undo");
    } else {
      alert("Undo stack is empty");
    }
  }

  redo() :void{
    if (this.redoStack.length > 0) {

      let currentState = JSON.stringify(this.canvas.toJSON());
      this.undoStack.push(currentState);
      this.disabledSave = false;
      const previousState = this.redoStack.pop();
      console.clear()
      console.log(previousState);
      this.canvas.loadFromJSON(previousState, () => {
        this.canvas.renderAll();
        this.disabledSave = true;
      });

    }else{
      this.redoStack = [];
      alert("No more actions to redo");
    }
  }

  ngAfterViewInit(): void {
    let img: string = '';
    let desc : string = '';
    let canvasBox = document.getElementById("canvas-box");
    

    this.canvas = new fabric.Canvas('fabricCanvas');
    let canvas = this.canvas;
    
    setTimeout(() => {
      (canvasBox as HTMLElement).style.width = getComputedStyle((canvasBox as HTMLElement)).width;
      this.canvas.setWidth(parseFloat(getComputedStyle((canvasBox as HTMLElement)).width));
    }, 0);
    this.desc$.subscribe((a) => {
      desc = a;
      const greetingText = new fabric.Textbox(desc, {
        left: 200,
        top: 250,
        fontSize: 40,
        fill: '#000',
        fontWeight: 'bold',
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
          fontFamily:'Arial',
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
    canvas.on('selection:created', () => {
      this.showPanel(null);
      if(this.disabledSave){
        this.saveStateForStack()
      }
    });
    canvas.on('selection:cleared', updateButtonPosition);
    canvas.on('selection:cleared', () => {
      this.closePanel();
      if(this.disabledSave){
        this.saveStateForStack()
      }
    });
    canvas.on('selection:updated', updateButtonPosition);
    canvas.on('selection:updated', () => {
      this.showPanel(null);
      if(this.disabledSave){
        this.saveStateForStack()
      }
    });
    canvas.on('object:moving', updateButtonPosition);
    canvas.on('object:added', () => {
      if(this.disabledSave){
        this.saveStateForStack()
      }
    });
    canvas.on('object:modified', () => {
      if(this.disabledSave){
        this.saveStateForStack()
      }
    });
    canvas.on('object:removed', () => {
      if(this.disabledSave){
        this.saveStateForStack()
      }
    });

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




    this.canvas.setHeight(600);
    this.canvas.renderAll();
    let fabricCanvas = document.querySelector(".canvas-container");
  }



  saveState() :void{
    let saveBtn = document.getElementById("save-loader");
    const canvasState = this.canvas.toJSON();
    setTimeout(function(){
      (saveBtn as HTMLElement).style.display = "inline-block";
    }, 300)

    const requestBody = {
      tempId: this.id,
      userId: localStorage.getItem('UserId'),
      info: JSON.stringify(canvasState),
    };

    this.CustomTempService.postTemp(requestBody).subscribe(res => {
      
      if(res.status >= 200 || res.status <= 204){
        alert('canvas saved');
        (saveBtn as HTMLElement).style.display = "none";
      }else{
        alert('canvas not saved');
      }
    })
  }

  showPanel(panelId: string | null): void {
    const mainPanel = document.getElementById("main-panel");
    const panels = document.querySelectorAll(".panel");
    const activeObject = this.canvas.getActiveObject();
  
    // Hide all panels initially
    if (mainPanel) {
      mainPanel.style.display = "none";
    }
    panels.forEach((panel) => {
      (panel as HTMLElement).style.display = "none";
    });
  
    // Show the panel based on the active object type
    if (activeObject && !panelId) {
      let activeClass = "";
  
      // Determine the class based on the object type
      switch (activeObject.type) {
        case "textbox":
          activeClass = "text";
          break;
        case "image":
          activeClass = "media";
          break;
        case "rect":
        case "circle":
        case "triangle":
          activeClass = "shape";
          break;
        default:
          console.log("No matching panel for object type:", activeObject.type);
          return; // Exit if no matching panel is found
      }
  
      // Show the panel corresponding to the active class
      panels.forEach((panel) => {
        if (panel.classList.contains(activeClass)) {
          (panel as HTMLElement).style.display = "block";
        }
      });
    } else if (!activeObject) {
      console.log("No active object found");
    }
  
    // If a specific `panelId` is provided, override the active object logic
    if (panelId != null) {
      panels.forEach((panel) => {
        if (panel.classList.contains(panelId)) {
          (panel as HTMLElement).style.display = "block";
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
      return;
    }
  
    const files = input.files;
  
    Array.from(files).forEach((file) => {
      // Create FormData for the current file
      const formData = new FormData();
  
      // Add the UserId and the file to FormData
      formData.append('UserId', sessionStorage.getItem('UserId') || '0'); // Replace '0' with default UserId if necessary
      formData.append('File', file);
  
      // Send the FormData to the API
      this.mediaSer.createMedia(formData).subscribe(
        (res) => {
          console.log('Upload successful:', res);
          this.showMedia(); // Refresh or update the media display
        },
        (err) => {
          console.error('Upload failed:', err);
        }
      );
    });
  }
  

  showMedia():void{
    const mediaBox = document.getElementById("media");
    if (mediaBox) {
      let uId = sessionStorage.getItem('UserId');
      this.mediaSer.getAllMedia().subscribe(
        (res)=>{
          this.userMedia = res.filter((data) => data.UserId == uId);
        }
      );

      console.log(this.userMedia);

      this.userMedia?.forEach((item)=>{
        const div = document.createElement('div');
        div.classList.add("col-lg-6");
        div.innerHTML = `<img src="${item.ImageUrl}" class="w-100" />`;
        mediaBox.appendChild(div);
      })
    }
  }

  updateTextProp(prop: string, event: any):void{
      if(!this.canvas){
        console.log("No canvas found");
        return;
      }else{
        let activeObject = this.canvas.getActiveObject();
        let property :any = prop;
        const value = event.value ?? event.target?.value;

        if(property == "fontSize"){
          activeObject?.set(property, parseFloat(value));
        }else{
          activeObject?.set(property, value);
        }

        this.canvas.renderAll();
      }
  }

  fonts: Food[] = [
    { value: 'times-new-roman', viewValue: 'Times New Roman' },
    { value: 'arial', viewValue: 'Arial' },
    { value: 'Verdana', viewValue: 'Verdana' },
    { value: 'Georgia', viewValue: 'Georgia' },
  ];

  selectedFont = this.fonts[1].value;
}


