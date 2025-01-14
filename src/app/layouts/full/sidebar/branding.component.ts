import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="branding">
      <a [routerLink]="[path]">
        <img
          src="./assets/images/logos/logo.png"
          class="align-middle m-2 w-100"
          alt="logo"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
  path:string = '';

 ngOnInit():void{
  let adminStatus = sessionStorage.getItem("Role");
  if(adminStatus == "admin"){
    this.path = '/dashboard';
  }else{
    this.path = '/';
  }
 }
}
