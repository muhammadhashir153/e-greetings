"use strict";(self.webpackChunkMatdash=self.webpackChunkMatdash||[]).push([[842],{7842:(I,d,i)=>{i.r(d),i.d(d,{AuthenticationRoutes:()=>F});var t=i(9417),a=i(4710),g=i(8582),c=i(8834),e=i(3953),f=i(875),l=i(2102),p=i(9631),m=i(5596);const h=()=>["/dashboard"],b=()=>["/authentication/register"],S=()=>["/dashboard"],k=()=>["/authentication/login"],F=[{path:"",children:[{path:"login",component:(()=>{class n{constructor(r,o){this.router=r,this.userService=o,this.form=new t.gE({uname:new t.MJ("",[t.k0.required,t.k0.required]),password:new t.MJ("",[t.k0.required])})}get f(){return this.form.controls}submit(){if(this.form.invalid)return;const r_email=this.form.value.uname,r_password=this.form.value.password;this.userService.getAllUsers().subscribe(o=>{const s=o.find(u=>u.email===r_email&&u.password===r_password);s?(console.log("Login successful",s),alert("Login successful!"),sessionStorage.setItem("Role",s.role),sessionStorage.setItem("Name",s.name),sessionStorage.setItem("UserId",s.id),sessionStorage.setItem("Status",s.subscriptionStatus),"admin"===s.role?(console.log("This Is A Admin"),this.router.navigate(["/dashboard"])):"user"===s.role?(console.log("This Is A User"),this.router.navigate(["/"])):(console.error("Unexpected role:",s.role),alert("Invalid role. Please contact support."))):alert("Invalid username or password. Please try again.")},o=>{console.error("Error fetching users",o),alert("Unable to process login. Please try again later.")})}static{this.\u0275fac=function(o){return new(o||n)(e.rXU(a.Ix),e.rXU(f.D))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-side-login"]],standalone:!0,features:[e.aNF],decls:23,vars:6,consts:[[1,"blank-layout-container","justify-content-center","align-items-center","bg-light"],[1,"position-relative","row","w-100","h-100","bg-gredient","justify-content-center"],[1,"col-lg-4","d-flex","align-items-center"],[1,"cardWithShadow","boxed-auth"],[1,"p-32"],[1,"text-center"],[3,"routerLink"],["src","./assets/images/logos/logo.svg","alt","logo",1,"align-middle","m-2"],[1,"m-t-30",3,"ngSubmit","formGroup"],[1,"mat-subtitle-2","f-s-14","f-w-600","m-b-12","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput","","formControlName","uname"],["matInput","","type","password","formControlName","password"],["mat-flat-button","","color","primary",1,"w-100",3,"disabled"],[1,"d-block","f-w-500","text-center","m-t-24"],[1,"text-decoration-none","text-primary","f-w-500","f-s-14",3,"routerLink"]],template:function(o,s){1&o&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-card",3)(4,"mat-card-content",4)(5,"div",5)(6,"a",6),e.nrm(7,"img",7),e.k0s()(),e.j41(8,"form",8),e.bIt("ngSubmit",function(){return s.submit()}),e.j41(9,"mat-label",9),e.EFF(10," Username "),e.k0s(),e.j41(11,"mat-form-field",10),e.nrm(12,"input",11),e.k0s(),e.j41(13,"mat-label",9),e.EFF(14," Password "),e.k0s(),e.j41(15,"mat-form-field",10),e.nrm(16,"input",12),e.k0s(),e.j41(17,"button",13),e.EFF(18," Sign In "),e.k0s()(),e.j41(19,"span",14),e.EFF(20,"New to Matdash? "),e.j41(21,"a",15),e.EFF(22," Create an account"),e.k0s()()()()()()()),2&o&&(e.R7$(6),e.Y8G("routerLink",e.lJ4(4,h)),e.R7$(2),e.Y8G("formGroup",s.form),e.R7$(9),e.Y8G("disabled",s.form.invalid),e.R7$(4),e.Y8G("routerLink",e.lJ4(5,b)))},dependencies:[a.iI,a.Wk,g.G,l.rl,l.nJ,p.fg,m.RN,m.m2,c.$z,t.YN,t.qT,t.me,t.BC,t.cb,t.X1,t.j4,t.JD,c.Hl],encapsulation:2})}}return n})()},{path:"register",component:(()=>{class n{constructor(r,o,s){this.fb=r,this.userService=o,this.router=s,this.submitted=!1,this.registerForm=this.fb.group({name:["",t.k0.required],email:["",[t.k0.required,t.k0.email]],password:["",[t.k0.required]],role:["user"],subscriptionStatus:["free"]})}get f(){return this.registerForm.controls}onSubmit(){this.submitted=!0,!this.registerForm.invalid&&this.userService.createUser(this.registerForm.value).subscribe(r=>{console.log("User created successfully",r),alert("Registration successful!"),sessionStorage.setItem("Role",r.role),sessionStorage.setItem("Name",r.name),sessionStorage.setItem("UserId",r.id),sessionStorage.setItem("Status",r.subscriptionStatus),"admin"===r.role?(console.log("This Is A Admin"),this.router.navigate(["/dashboard"])):"user"===r.role?(console.log("This Is A User"),this.router.navigate(["/"])):(console.error("Unexpected role:",r.role),alert("Invalid role. Please contact support."))},r=>{console.error("Error creating user",r),alert("Registration failed. Please try again.")})}static{this.\u0275fac=function(o){return new(o||n)(e.rXU(t.ok),e.rXU(f.D),e.rXU(a.Ix))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-side-register"]],standalone:!0,features:[e.aNF],decls:27,vars:6,consts:[[1,"blank-layout-container","justify-content-center","align-items-center","bg-light"],[1,"position-relative","row","w-100","h-100","bg-gredient","justify-content-center"],[1,"col-lg-4","d-flex","align-items-center"],[1,"cardWithShadow","boxed-auth"],[1,"p-32"],[1,"text-center"],[3,"routerLink"],["src","./assets/images/logos/logo.svg","alt","logo",1,"align-middle","m-2"],[1,"m-t-30",3,"ngSubmit","formGroup"],[1,"mat-subtitle-2","f-s-14","f-w-600","m-b-12","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput","","formControlName","name"],["matInput","","type","email","formControlName","email"],["matInput","","type","password","formControlName","password"],["mat-flat-button","","color","primary",1,"w-100",3,"disabled"],[1,"d-block","f-w-500","text-center","m-t-24"],[1,"text-decoration-none","text-primary","f-w-500","f-s-14",3,"routerLink"]],template:function(o,s){1&o&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-card",3)(4,"mat-card-content",4)(5,"div",5)(6,"a",6),e.nrm(7,"img",7),e.k0s()(),e.j41(8,"form",8),e.bIt("ngSubmit",function(){return s.onSubmit()}),e.j41(9,"mat-label",9),e.EFF(10,"Name"),e.k0s(),e.j41(11,"mat-form-field",10),e.nrm(12,"input",11),e.k0s(),e.j41(13,"mat-label",9),e.EFF(14,"Email Address"),e.k0s(),e.j41(15,"mat-form-field",10),e.nrm(16,"input",12),e.k0s(),e.j41(17,"mat-label",9),e.EFF(18,"Password"),e.k0s(),e.j41(19,"mat-form-field",10),e.nrm(20,"input",13),e.k0s(),e.j41(21,"button",14),e.EFF(22," Sign Up "),e.k0s()(),e.j41(23,"span",15),e.EFF(24,"Already have an Account? "),e.j41(25,"a",16),e.EFF(26," Sign In"),e.k0s()()()()()()()),2&o&&(e.R7$(6),e.Y8G("routerLink",e.lJ4(4,S)),e.R7$(2),e.Y8G("formGroup",s.registerForm),e.R7$(13),e.Y8G("disabled",s.registerForm.invalid),e.R7$(4),e.Y8G("routerLink",e.lJ4(5,k)))},dependencies:[a.iI,a.Wk,g.G,l.rl,l.nJ,p.fg,m.RN,m.m2,c.$z,t.YN,t.qT,t.me,t.BC,t.cb,t.X1,t.j4,t.JD],encapsulation:2})}}return n})()}]}]}}]);