"use strict";(self.webpackChunkMatdash=self.webpackChunkMatdash||[]).push([[855],{9855:(V,d,n)=>{n.r(d),n.d(d,{FeedbackRoutes:()=>N});var f=n(177),l=n(5596),c=n(9159),b=n(8582),r=n(9213),i=n(9115),u=n(8834),p=n(5558),h=n(7468),k=n(6354),e=n(3953),C=n(15),v=n(875);const F=()=>["name","Message","date","action"];function D(t,s){1&t&&(e.j41(0,"th",13),e.EFF(1," Name "),e.k0s())}function E(t,s){if(1&t&&(e.j41(0,"td",14),e.EFF(1),e.k0s()),2&t){const a=s.$implicit;e.R7$(),e.SpI(" ",a.userDetails.name," ")}}function R(t,s){1&t&&(e.j41(0,"th",13),e.EFF(1," Message "),e.k0s())}function j(t,s){if(1&t&&(e.j41(0,"td",14),e.EFF(1),e.k0s()),2&t){const a=s.$implicit;e.R7$(),e.SpI(" ",a.message," ")}}function S(t,s){1&t&&(e.j41(0,"th",13),e.EFF(1," Date "),e.k0s())}function T(t,s){if(1&t&&(e.j41(0,"td",14),e.EFF(1),e.nI1(2,"date"),e.k0s()),2&t){const a=s.$implicit;e.R7$(),e.SpI(" ",e.i5U(2,1,a.timestamp,"MMMM d, y, h:mm:ss a")," ")}}function M(t,s){1&t&&(e.j41(0,"th",13),e.EFF(1," Action "),e.k0s())}function g(t,s){if(1&t){const a=e.RV6();e.j41(0,"td",15)(1,"button",16)(2,"mat-icon"),e.EFF(3,"more_vert"),e.k0s()(),e.j41(4,"mat-menu",null,0)(6,"button",17),e.bIt("click",function(){const o=e.eBV(a).$implicit,I=e.XpG();return e.Njj(I.deleteFeedback(o.id))}),e.j41(7,"mat-icon"),e.EFF(8,"delete"),e.k0s(),e.j41(9,"span"),e.EFF(10,"Delete"),e.k0s()()()()}if(2&t){const a=e.sdS(5);e.R7$(),e.Y8G("matMenuTriggerFor",a)}}function x(t,s){1&t&&e.nrm(0,"tr",18)}function $(t,s){1&t&&e.nrm(0,"tr",19)}const N=[{path:"",component:(()=>{class t{constructor(a,m){this.feedbackSer=a,this.userService=m,this.feedbacks=[]}ngOnInit(){this.feedbackSer.getFeedbacks().pipe((0,p.n)(a=>(0,h.p)(a.map(m=>this.userService.getUserById(m.userId).pipe((0,k.T)(o=>({...m,userDetails:o}))))))).subscribe(a=>{this.feedbacks=a,this.feedbacks=this.feedbacks.reverse()})}deleteFeedback(a){this.feedbackSer.deleteFeedback(a).subscribe(()=>{this.feedbacks=this.feedbacks.filter(m=>m.id!==a),alert("Ignored Successfully\u{1f590}")})}static{this.\u0275fac=function(m){return new(m||t)(e.rXU(C.n),e.rXU(v.D))}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["app-feedbacks"]],standalone:!0,features:[e.aNF],decls:20,vars:5,consts:[["menu","matMenu"],[1,"cardWithShadow"],[1,"table-responsive"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","class","f-w-600 mat-subtitle-1 f-s-14 p-l-0",4,"matHeaderCellDef"],["mat-cell","","class","mat-subtitle-1 f-s-14 f-w-600",4,"matCellDef"],["matColumnDef","Message"],["matColumnDef","date"],["matColumnDef","action"],["mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","",1,"f-w-600","mat-subtitle-1","f-s-14","p-l-0"],["mat-cell","",1,"mat-subtitle-1","f-s-14","f-w-600"],["mat-cell",""],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(m,o){1&m&&(e.j41(0,"mat-card",1)(1,"mat-card-content")(2,"mat-card-title"),e.EFF(3,"Feedbacks"),e.k0s(),e.j41(4,"div",2)(5,"table",3),e.qex(6,4),e.DNE(7,D,2,0,"th",5)(8,E,2,1,"td",6),e.bVm(),e.qex(9,7),e.DNE(10,R,2,0,"th",5)(11,j,2,1,"td",6),e.bVm(),e.qex(12,8),e.DNE(13,S,2,0,"th",5)(14,T,3,4,"td",6),e.bVm(),e.qex(15,9),e.DNE(16,M,2,0,"th",5)(17,g,11,1,"td",10),e.bVm(),e.DNE(18,x,1,0,"tr",11)(19,$,1,0,"tr",12),e.k0s()()()()),2&m&&(e.R7$(5),e.Y8G("dataSource",o.feedbacks),e.R7$(13),e.Y8G("matHeaderRowDef",e.lJ4(3,F)),e.R7$(),e.Y8G("matRowDefColumns",e.lJ4(4,F)))},dependencies:[f.MD,f.vh,l.Hu,l.RN,l.m2,l.dh,c.tP,c.Zl,c.tL,c.ji,c.cC,c.YV,c.iL,c.KS,c.$R,c.YZ,c.NB,b.G,i.kk,i.fb,i.Cp,u.iY,r.An,r.m_,i.Cn,u.Hl]})}}return t})()}]}}]);