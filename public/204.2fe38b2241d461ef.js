"use strict";(self.webpackChunkMatdash=self.webpackChunkMatdash||[]).push([[204],{9204:(A,F,i)=>{i.r(F),i.d(F,{TemplateRoutes:()=>O});var s=i(5596),c=i(4710),l=i(8834),k=i(9159),u=i(177),T=i(4823),t=i(3953),f=i(7816);const C=()=>["add-new"],y=a=>["update",a];function j(a,p){if(1&a){const e=t.RV6();t.j41(0,"div",5)(1,"div",6),t.nrm(2,"img",7),t.j41(3,"div",8)(4,"button",9),t.nrm(5,"i",10),t.k0s(),t.j41(6,"button",11),t.bIt("click",function(){const n=t.eBV(e).$implicit,m=t.XpG();return t.Njj(m.deleteTemp(n.id))}),t.nrm(7,"i",12),t.k0s()()()()}if(2&a){const e=p.$implicit;t.R7$(2),t.FS9("src",e.imageUrl,t.B4B),t.R7$(2),t.Y8G("routerLink",t.eq3(2,y,e.id))}}let S=(()=>{class a{constructor(e){this.tempService=e,this.templates=[]}ngOnInit(){this.tempService.getService().subscribe(e=>{this.templates=e})}deleteTemp(e){confirm("Are you sure you want to delete this item??")&&this.tempService.deleteTemp(e).subscribe(n=>{console.log("API Response:",n),this.templates=this.templates.filter(m=>m.id!==e)},n=>{alert("An error occured, please check 'Customized Templates' before deleting this"),console.error("API Error:",n)})}static{this.\u0275fac=function(r){return new(r||a)(t.rXU(f.a))}}static{this.\u0275cmp=t.VBU({type:a,selectors:[["app-templates"]],standalone:!0,features:[t.aNF],decls:9,vars:3,consts:[["id","add-new-btn","mat-flat-button","","color","primary",1,"mb-5",3,"routerLink"],[1,"fas","fa-plus"],[1,"cardWithShadow"],[1,"row","g-4"],["class","col-md-3",4,"ngFor","ngForOf"],[1,"col-md-3"],[1,"cs-card"],["alt","",1,"w-100",3,"src"],[1,"overlay"],["mat-fab","","matTooltip","Edit",3,"routerLink"],[1,"fas","fa-pen-to-square"],["mat-fab","","matTooltip","Delete",3,"click"],[1,"fas","fa-trash"]],template:function(r,n){1&r&&(t.j41(0,"button",0),t.nrm(1,"i",1),t.EFF(2," Add new"),t.k0s(),t.j41(3,"mat-card",2)(4,"mat-card-content")(5,"mat-card-title"),t.EFF(6,"Available Templates"),t.k0s(),t.j41(7,"div",3),t.DNE(8,j,8,4,"div",4),t.k0s()()()),2&r&&(t.Y8G("routerLink",t.lJ4(2,C)),t.R7$(8),t.Y8G("ngForOf",n.templates))},dependencies:[s.RN,c.Wk,l.Hl,l.$z,l.Sr,s.m2,s.dh,k.tP,u.pM,T.oV],styles:[".cs-card[_ngcontent-%COMP%]{overflow:hidden;position:relative;cursor:pointer;transition:.3s}.cs-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{aspect-ratio:1/1;object-fit:cover;transition:.3s}.cs-card[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:-100%;width:100%;height:100%;background-color:#00000070;display:flex;justify-content:center;align-items:center;gap:10px;transition:.3s}.cs-card[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{left:0;transition:.3s}"]})}}return a})();var d=i(2102),o=i(9417),h=i(9631),g=i(2798),b=i(6600),v=i(9086);const I=()=>["../../templates"];function U(a,p){if(1&a&&(t.j41(0,"mat-option",17),t.EFF(1),t.k0s()),2&a){const e=p.$implicit;t.Y8G("value",e.id),t.R7$(),t.SpI(" ",e.name," ")}}let E=(()=>{class a{constructor(e,r,n,m){this.catSer=e,this.tempSer=r,this.fb=n,this.route=m,this.categories=[],this.selectedValue="select category",this.base64Image=null}ngOnInit(){this.csForm=this.fb.group({categoryId:["",o.k0.required],imageUrl:[null,o.k0.required],description:["",o.k0.required]}),this.catSer.getCategories().subscribe(e=>{this.categories=e})}addTemp(){this.csForm.valid?(console.log("Form Data:",this.csForm.value),this.tempSer.addTemp(this.csForm.value).subscribe(e=>{console.log("API Response:",e),alert("Added"),this.route.navigate(["/admin/templates"])})):(console.error("Form is invalid:",this.csForm.errors),Object.keys(this.csForm.controls).forEach(e=>{const r=this.csForm.get(e)?.errors;r&&console.error(`Control "${e}" has errors:`,r)}))}static{this.\u0275fac=function(r){return new(r||a)(t.rXU(v.M),t.rXU(f.a),t.rXU(o.ok),t.rXU(c.Ix))}}static{this.\u0275cmp=t.VBU({type:a,selectors:[["app-add-new"]],standalone:!0,features:[t.aNF],decls:29,vars:4,consts:[[1,"cardWithShadow","theme-card"],[1,"m-b-0"],[1,"b-t-1"],[3,"ngSubmit","formGroup"],[1,"row","justify-content-center"],[1,"col-lg-8"],[1,"f-w-600","m-b-8","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput","","formControlName","description","placeholder","Description "],["appearance","outline",1,"w-100"],["formControlName","categoryId"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","imageUrl","type","url","placeholder","Insert Image link"],[1,"col-lg-8","mt-3"],[1,"m-t-12"],["mat-flat-button","","color","primary",1,"m-r-8"],["mat-stroked-button","","color","warn",3,"routerLink"],[3,"value"]],template:function(r,n){1&r&&(t.j41(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t.EFF(3,"Add new Template"),t.k0s()(),t.j41(4,"mat-card-content",2)(5,"form",3),t.bIt("ngSubmit",function(){return n.addTemp()}),t.j41(6,"div",4)(7,"div",5)(8,"mat-label",6),t.EFF(9,"Template Description"),t.k0s(),t.j41(10,"mat-form-field",7),t.nrm(11,"input",8),t.k0s()(),t.j41(12,"div",5)(13,"mat-label",6),t.EFF(14,"Category"),t.k0s(),t.j41(15,"mat-form-field",9)(16,"mat-select",10),t.DNE(17,U,2,2,"mat-option",11),t.k0s()()(),t.j41(18,"div",5)(19,"mat-label",6),t.EFF(20,"Image"),t.k0s(),t.j41(21,"mat-form-field",7),t.nrm(22,"input",12),t.k0s()(),t.j41(23,"div",13)(24,"div",14)(25,"button",15),t.EFF(26,"Add"),t.k0s(),t.j41(27,"button",16),t.EFF(28,"Cancel"),t.k0s()()()()()()()),2&r&&(t.R7$(5),t.Y8G("formGroup",n.csForm),t.R7$(12),t.Y8G("ngForOf",n.categories),t.R7$(10),t.Y8G("routerLink",t.lJ4(3,I)))},dependencies:[d.rl,d.nJ,c.Wk,s.m2,s.dh,l.$z,s.MM,s.RN,o.YN,o.qT,o.me,o.BC,o.cb,o.X1,o.j4,o.JD,d.RG,h.fg,u.pM,g.VO,b.wT]})}}return a})();var w=i(2765),M=i(5951);const R=()=>["/admin/templates"];function N(a,p){if(1&a&&(t.j41(0,"mat-option",17),t.EFF(1),t.k0s()),2&a){const e=p.$implicit;t.Y8G("value",e.id),t.R7$(),t.SpI(" ",e.name," ")}}const O=[{path:"",component:S},{path:"add-new",component:E},{path:"update/:id",component:(()=>{class a{constructor(e,r,n,m,$,G){this.catService=e,this.route=r,this.activeRoute=n,this.fb=m,this.catSer=$,this.tempSer=G,this.categories=[]}ngOnInit(){this.id=this.activeRoute.snapshot.paramMap.get("id"),this.csForm=this.fb.group({categoryId:["",o.k0.required],imageUrl:["",o.k0.required],description:["",o.k0.required]}),this.loadTemplateData(this.id),this.catSer.getCategories().subscribe(e=>{this.categories=e})}loadTemplateData(e){this.tempSer.getServiceById(e).subscribe(r=>{this.csForm=new o.gE({description:new o.MJ(r.description,o.k0.required),categoryId:new o.MJ("",o.k0.required),imageUrl:new o.MJ(r.imageUrl,o.k0.required)}),console.log(r)},r=>{console.error("Error fetching category data:",r)})}updateTemp(){this.csForm?.valid?this.tempSer.updateTemp(this.id,this.csForm.value).subscribe(e=>{alert("Template updated successfully"),this.route.navigate(["/admin/templates"])},e=>{console.error("Error updating category:",e),alert("an error occured, please try again later")}):alert("Please fill in all required fields.")}static{this.\u0275fac=function(r){return new(r||a)(t.rXU(v.M),t.rXU(c.Ix),t.rXU(c.nX),t.rXU(o.ok),t.rXU(v.M),t.rXU(f.a))}}static{this.\u0275cmp=t.VBU({type:a,selectors:[["app-update"]],standalone:!0,features:[t.aNF],decls:29,vars:4,consts:[[1,"cardWithShadow","theme-card"],[1,"m-b-0"],[1,"b-t-1"],[3,"ngSubmit","formGroup"],[1,"row","justify-content-center"],[1,"col-lg-8"],[1,"f-w-600","m-b-8","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput","","formControlName","description","placeholder","Description "],["appearance","outline",1,"w-100"],["formControlName","categoryId"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","imageUrl","type","url","placeholder","Insert Image link"],[1,"col-lg-8","mt-3"],[1,"m-t-12"],["mat-flat-button","","color","primary",1,"m-r-8"],["mat-stroked-button","","color","warn","type","button",3,"routerLink"],[3,"value"]],template:function(r,n){1&r&&(t.j41(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t.EFF(3,"Add new Template"),t.k0s()(),t.j41(4,"mat-card-content",2)(5,"form",3),t.bIt("ngSubmit",function(){return n.updateTemp()}),t.j41(6,"div",4)(7,"div",5)(8,"mat-label",6),t.EFF(9,"Template Description"),t.k0s(),t.j41(10,"mat-form-field",7),t.nrm(11,"input",8),t.k0s()(),t.j41(12,"div",5)(13,"mat-label",6),t.EFF(14,"Category"),t.k0s(),t.j41(15,"mat-form-field",9)(16,"mat-select",10),t.DNE(17,N,2,2,"mat-option",11),t.k0s()()(),t.j41(18,"div",5)(19,"mat-label",6),t.EFF(20,"Image"),t.k0s(),t.j41(21,"mat-form-field",7),t.nrm(22,"input",12),t.k0s()(),t.j41(23,"div",13)(24,"div",14)(25,"button",15),t.EFF(26,"Update"),t.k0s(),t.j41(27,"button",16),t.EFF(28,"Cancel"),t.k0s()()()()()()()),2&r&&(t.R7$(5),t.Y8G("formGroup",n.csForm),t.R7$(12),t.Y8G("ngForOf",n.categories),t.R7$(10),t.Y8G("routerLink",t.lJ4(3,R)))},dependencies:[o.YN,o.qT,o.me,o.BC,o.cb,o.X1,o.j4,o.JD,l.Hl,l.$z,g.Ve,d.rl,d.nJ,g.VO,b.wT,d.RG,s.Hu,s.RN,s.m2,s.MM,s.dh,h.fS,h.fg,w.g7,M.Wk,c.Wk,u.pM]})}}return a})()}]}}]);