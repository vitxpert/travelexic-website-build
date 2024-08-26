import './polyfills.server.mjs';
import{a as G}from"./chunk-SFFZ2XPI.mjs";import{a as Z,d as ee}from"./chunk-H7UEVAC2.mjs";import{a as ne,b,c as oe,d as re,e as ae,g as me,h as le,j as ce,k as pe,l as de,m as se,n as ue,o as fe,p as _e,q,r as R,u as C}from"./chunk-FCG63HBM.mjs";import{A as W,Aa as u,B as g,D as k,Eb as Q,Fa as o,Ga as S,H as x,Hb as X,I as h,Ib as te,Ja as Y,Jb as $,Ka as z,Kb as A,La as J,Mb as ie,Na as f,Nb as T,Oa as E,Ob as M,ea as r,fa as F,l as V,mb as L,nb as w,oa as d,qa as a,qb as P,sa as n,ta as i,tb as K,ua as s,va as _,wa as v,za as U,zb as j}from"./chunk-UB62UVK5.mjs";var ve=()=>["/"],ke=()=>["/about-us"],Oe=()=>["/blogs"],Ne=()=>["/pricing"],Le=()=>["/contact-us"],xe=e=>[e];function we(e,t){if(e&1&&(n(0,"li")(1,"a",24),o(2),i()()),e&2){let m=u().$implicit,l=u(2).$implicit;r(),a("routerLink",E(2,xe,"/product/"+l.custom_url+"/"+m.custom_url)),r(),S(m.name)}}function Pe(e,t){if(e&1&&(_(0),d(1,we,3,4,"li",26),v()),e&2){let m=t.$implicit,l=u(2).$implicit;r(),a("ngIf",l.id==m.parent_id)}}function je(e,t){if(e&1&&(n(0,"li",17)(1,"a",23)(2,"span",24),o(3),i(),s(4,"i",25),i(),n(5,"ul"),d(6,Pe,2,1,"ng-container",20),i()()),e&2){let m=u().$implicit,l=u();r(2),a("routerLink",E(3,xe,"/product/"+m.custom_url)),r(),S(m.name),r(3),a("ngForOf",l.menu)}}function $e(e,t){if(e&1&&(_(0),d(1,je,7,5,"li",22),v()),e&2){let m=t.$implicit;r(),a("ngIf",m.parent_id==0)}}var he=(()=>{let t=class t{constructor(l){this.route=l,this.menu=[]}ngOnInit(){this.route.data.subscribe(l=>{this.menu=l.info})}};t.\u0275fac=function(c){return new(c||t)(F($))},t.\u0275cmp=x({type:t,selectors:[["app-header"]],decls:44,vars:13,consts:[[1,"container"],[1,"main"],["id","topbar",1,"fixed-top","d-flex","align-items-center","topbar-inner-pages"],[1,"container","d-flex","align-items-center","justify-content-center","justify-content-md-between"],[1,"contact-info","d-flex","align-items-center"],[1,"fa","fa-envelope"],["href","mailto:hi@travelexic.com"],[1,"fa","fa-phone","phone-icon"],["href","tel:+919971136675"],[1,"cta","d-none","d-md-block"],["href","https://calendly.com/travelexic","target","blank",1,""],["id","header",1,"fixed-top","d-flex","align-items-center","header-inner-pages"],[1,"container","d-flex","align-items-center","justify-content-between"],[3,"routerLink"],["src","assets/img/logo/LOGO-5.png","alt","logo"],["id","navbar",1,"navbar"],[1,"nav-link","remove-nav",3,"routerLink"],[1,"dropdown"],["routerLInk","#",1,"nav-link"],[1,"fa","fa-chevron-down"],[4,"ngFor","ngForOf"],["id","icon",1,"fa","fa-bars","mobile-nav-toggle"],["class","dropdown",4,"ngIf"],["href","javascript:void(0)"],[1,"remove-nav",3,"routerLink"],["aria-hidden","true",1,"fa","fa-chevron-right"],[4,"ngIf"]],template:function(c,p){c&1&&(n(0,"div",0)(1,"div",1)(2,"nav")(3,"div",2)(4,"div",3)(5,"div",4),s(6,"i",5),n(7,"a",6),o(8,"hi@travelexic.com"),i(),s(9,"i",7),n(10,"a",8),o(11,"+91 9971136675"),i()(),n(12,"div",9)(13,"a",10),o(14,"Get a demo"),i()()()(),n(15,"header",11)(16,"div",12)(17,"a",13),s(18,"img",14),i(),n(19,"nav",15)(20,"ul")(21,"li")(22,"a",16),o(23,"Home"),i()(),n(24,"li",17)(25,"a",18)(26,"span"),o(27,"Products"),i(),s(28,"i",19),i(),n(29,"ul"),d(30,$e,2,1,"ng-container",20),i()(),n(31,"li")(32,"a",16),o(33,"About Us"),i()(),n(34,"li")(35,"a",16),o(36,"Blogs"),i()(),n(37,"li")(38,"a",16),o(39,"Pricing"),i()(),n(40,"li")(41,"a",16),o(42,"Contact Us"),i()()(),s(43,"i",21),i()()()()()()),c&2&&(r(17),a("routerLink",f(7,ve)),r(5),a("routerLink",f(8,ve)),r(8),a("ngForOf",p.menu),r(2),a("routerLink",f(9,ke)),r(3),a("routerLink",f(10,Oe)),r(3),a("routerLink",f(11,Ne)),r(3),a("routerLink",f(12,Le)))},dependencies:[L,w,T]});let e=t;return e})();var Ce=()=>["/"],Re=()=>["/about-us"],Ge=()=>["/blogs"],He=()=>["/contact-us"],De=()=>["/privacy_policy"],H=e=>[e];function Be(e,t){e&1&&(n(0,"div"),o(1,"Company is required"),i())}function Ue(e,t){if(e&1&&(n(0,"div",64),d(1,Be,2,0,"div",65),i()),e&2){let m=u();r(),a("ngIf",m.f.name.errors.required)}}function Ve(e,t){e&1&&(n(0,"div"),o(1,"Company is required"),i())}function We(e,t){if(e&1&&(n(0,"div",64),d(1,Ve,2,0,"div",65),i()),e&2){let m=u();r(),a("ngIf",m.f.company.errors.required)}}function Ye(e,t){e&1&&(n(0,"div"),o(1,"Email address is required"),i())}function ze(e,t){e&1&&(n(0,"div"),o(1,"Invalid email!"),i())}function Je(e,t){if(e&1&&(n(0,"div",64),d(1,Ye,2,0,"div",65)(2,ze,2,0,"div",65),i()),e&2){let m=u();r(),a("ngIf",m.f.email.errors.required),r(),a("ngIf",m.f.email.errors.email)}}function Ke(e,t){e&1&&(n(0,"div"),o(1,"Phone is required"),i())}function Qe(e,t){if(e&1&&(n(0,"div",64),d(1,Ke,2,0,"div",65),i()),e&2){let m=u();r(),a("ngIf",m.f.company.errors.required)}}function Xe(e,t){e&1&&(n(0,"div"),o(1,"Company type is required"),i())}function Ze(e,t){if(e&1&&(n(0,"div",64),d(1,Xe,2,0,"div",65),i()),e&2){let m=u();r(),a("ngIf",m.f.company_type.errors.required)}}function et(e,t){e&1&&(n(0,"div"),o(1,"Message is required"),i())}function tt(e,t){if(e&1&&(n(0,"div",64),d(1,et,2,0,"div",65),i()),e&2){let m=u();r(),a("ngIf",m.f.message.errors.required)}}function it(e,t){e&1&&(n(0,"div",66),o(1," Your message has been sent. Thank you! "),i())}function nt(e,t){if(e&1&&(n(0,"li"),s(1,"i",53),n(2,"a",38),o(3),i()()),e&2){let m=u().$implicit,l=u(2).$implicit;r(2),a("routerLink",E(2,H,"/product/"+l.custom_url+"/"+m.custom_url)),r(),S(m.name)}}function ot(e,t){if(e&1&&(_(0),d(1,nt,4,4,"li",65),v()),e&2){let m=t.$implicit,l=u(2).$implicit;r(),a("ngIf",l.id==m.parent_id)}}function rt(e,t){if(e&1&&(_(0),d(1,ot,2,1,"ng-container",55),v()),e&2){let m=u(2);r(),a("ngForOf",m.menu)}}function at(e,t){if(e&1&&(_(0),d(1,rt,2,1,"ng-container",65),v()),e&2){let m=t.$implicit;r(),a("ngIf",m.id==58)}}function mt(e,t){if(e&1&&(n(0,"li"),s(1,"i",53),n(2,"a",38),o(3),i()()),e&2){let m=u().$implicit,l=u(2).$implicit;r(2),a("routerLink",E(2,H,"/product/"+l.custom_url+"/"+m.custom_url)),r(),S(m.name)}}function lt(e,t){if(e&1&&(_(0),d(1,mt,4,4,"li",65),v()),e&2){let m=t.$implicit,l=u(2).$implicit;r(),a("ngIf",l.id==m.parent_id)}}function ct(e,t){if(e&1&&(_(0),d(1,lt,2,1,"ng-container",55),v()),e&2){let m=u(2);r(),a("ngForOf",m.menu)}}function pt(e,t){if(e&1&&(_(0),d(1,ct,2,1,"ng-container",65),v()),e&2){let m=t.$implicit;r(),a("ngIf",m.id==10)}}function dt(e,t){if(e&1&&(n(0,"li"),s(1,"i",53),n(2,"a",38),o(3),i()()),e&2){let m=u().$implicit,l=u(2).$implicit;r(2),a("routerLink",E(2,H,"/product/"+l.custom_url+"/"+m.custom_url)),r(),S(m.name)}}function st(e,t){if(e&1&&(_(0),d(1,dt,4,4,"li",65),v()),e&2){let m=t.$implicit,l=u(2).$implicit;r(),a("ngIf",l.id==m.parent_id)}}function ut(e,t){if(e&1&&(_(0),d(1,st,2,1,"ng-container",55),v()),e&2){let m=u(2);r(),a("ngForOf",m.menu)}}function ft(e,t){if(e&1&&(_(0),d(1,ut,2,1,"ng-container",65),v()),e&2){let m=t.$implicit;r(),a("ngIf",m.id==11)}}function _t(e,t){if(e&1&&(n(0,"li"),s(1,"i",53),n(2,"a",38),o(3),i()()),e&2){let m=u().$implicit,l=u(2).$implicit;r(2),a("routerLink",E(2,H,"/product/"+l.custom_url+"/"+m.custom_url)),r(),S(m.name)}}function vt(e,t){if(e&1&&(_(0),d(1,_t,4,4,"li",65),v()),e&2){let m=t.$implicit,l=u(2).$implicit;r(),a("ngIf",l.id==m.parent_id)}}function gt(e,t){if(e&1&&(_(0),d(1,vt,2,1,"ng-container",55),v()),e&2){let m=u(2);r(),a("ngForOf",m.menu)}}function xt(e,t){if(e&1&&(_(0),d(1,gt,2,1,"ng-container",65),v()),e&2){let m=t.$implicit;r(),a("ngIf",m.id==12)}}var ye=(()=>{let t=class t{constructor(l,c,p,N){this.apiService=l,this.route=c,this.globalService=p,this.fb=N,this.message=!1,this.submitted=!1}ngOnInit(){this.contactForm2=this.fb.group({name:["",[b.required]],email:["",[b.required,b.email]],message:["",[b.required]],company:["",[b.required]],company_type:["",[b.required]],phone:["",[b.required]]}),this.route.data.subscribe(l=>{this.menu=l.info})}doSubmit(){this.email!=""&&this.apiService.sendNewsLetter({email:this.email}).subscribe(l=>{l.status&&(this.globalService.showSuccessToast("Email submitted successfully"),this.email="")})}get f(){return this.contactForm2.controls}callSubmit(){if(this.submitted=!0,!this.contactForm2.invalid){var l={email:this.contactForm2.value.email,name:this.contactForm2.value.name,company:this.contactForm2.value.company,company_type:this.contactForm2.value.company_type,phone:this.contactForm2.value.phone,message:this.contactForm2.value.message};this.apiService.sendContactForm(l).subscribe(c=>{this.message=!0,this.contactForm2.reset()})}}};t.\u0275fac=function(c){return new(c||t)(F(C),F($),F(G),F(_e))},t.\u0275cmp=x({type:t,selectors:[["app-footer"]],decls:152,vars:25,consts:[["id","myModal",1,"modal"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal",1,"btn-close"],[1,"modal-body"],[3,"formGroup"],[1,"row"],[1,"col-md-6","form-group"],["formControlName","name","type","text","placeholder","Your Name",1,"form-control"],["class","text-error",4,"ngIf"],["formControlName","company","type","text","placeholder","Company Name",1,"form-control"],[1,"col-md-6","form-group","mt-3"],["formControlName","email","type","email","placeholder","Your Email",1,"form-control"],["formControlName","phone","type","text","placeholder","Phone No.",1,"form-control"],[1,"form-group","mt-3"],["formControlName","company_type","type","text",1,"form-control"],["value",""],["value","MICE Operator"],["value","Tour Operator"],["value","Event Planner"],["value","Corporate"],["value","PCO"],["value","Travel Agent"],["value","Group Operator"],["value","Other"],["formControlName","message","rows","5","placeholder","Message",1,"form-control"],[1,"my-3"],["class","sent-message",4,"ngIf"],[2,"text-align","right"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger"],["type","button",1,"btn","btn-primary","contact-btn",3,"click"],[1,"fa","fa-paper-plane"],["id","footer"],[1,"footer-newsletter"],[1,"container"],[1,"col-lg-6","footer-logo"],[3,"routerLink"],["src","assets/img/logo/travelexic-footer-logo.png","alt","logo"],[1,"col-lg-6","footer-news_letter"],["id","news"],[1,"news-sec"],[1,"col-lg-12"],[2,"margin","0 auto"],[1,"footer-input"],[2,"color","#F6B024","font-size","22px"],["action","","method","post",1,"php-email-form"],["placeholder","Enter Email Address","v-model","email","type","email","name","email","aria-label","Email Address","required","",3,"ngModelChange","ngModel"],["type","submit","value","FREE SIGNUP","aria-label","Free Signup",3,"click"],[1,"footer-line"],[1,"footer-top"],[1,"col-lg-3","col-md-6","footer-links"],[1,"bx","bx-chevron-right"],[1,"mt-4"],[4,"ngFor","ngForOf"],[1,"mt-3"],[1,"col-lg-3","col-md-6","footer-info",2,"text-align","left"],[1,"social-links","mt-3"],["href","https://www.facebook.com/travelexic","aria-label","facebook",1,"facebook"],[1,"fa","fa-facebook"],["href","https://in.linkedin.com/company/travelexic","aria-label","LinkedIn - Travelexic",1,"linkedin"],["aria-hidden","true",1,"fa","fa-linkedin"],[1,"copyright"],[1,"text-error"],[4,"ngIf"],[1,"sent-message"]],template:function(c,p){c&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),o(5,"Get in touch"),i(),s(6,"button",5),i(),n(7,"div",6)(8,"form",7)(9,"div",8)(10,"div",9)(11,"label"),o(12,"Your Name"),i(),s(13,"input",10),d(14,Ue,2,1,"div",11),i(),n(15,"div",9)(16,"label"),o(17,"Company Name"),i(),s(18,"input",12),d(19,We,2,1,"div",11),i(),n(20,"div",13)(21,"label"),o(22,"E-mail Address"),i(),s(23,"input",14),d(24,Je,3,2,"div",11),i(),n(25,"div",13)(26,"label"),o(27,"Phone Number"),i(),s(28,"input",15),d(29,Qe,2,1,"div",11),i()(),n(30,"div",16)(31,"label"),o(32,"Company Type"),i(),n(33,"select",17)(34,"option",18),o(35,"Select Option"),i(),n(36,"option",19),o(37,"MICE Operator"),i(),n(38,"option",20),o(39,"Tour Operator"),i(),n(40,"option",21),o(41,"Event Planner"),i(),n(42,"option",22),o(43,"Corporate"),i(),n(44,"option",23),o(45,"PCO"),i(),n(46,"option",24),o(47,"Travel Agent"),i(),n(48,"option",25),o(49,"Group Operator"),i(),n(50,"option",26),o(51,"Other"),i()(),d(52,Ze,2,1,"div",11),i(),n(53,"div",16)(54,"label"),o(55,"Message"),i(),s(56,"textarea",27),d(57,tt,2,1,"div",11),i(),n(58,"div",28),d(59,it,2,0,"div",29),i(),n(60,"div",30)(61,"button",31),o(62,"Close"),i(),o(63,"\xA0 "),n(64,"button",32),U("click",function(){return p.callSubmit()}),s(65,"i",33),o(66," Send Message "),i()()()()()()(),n(67,"footer",34)(68,"div",35)(69,"div",36)(70,"div",8)(71,"div",37)(72,"a",38),s(73,"img",39),i()(),n(74,"div",40)(75,"div",41)(76,"div",42)(77,"div",8)(78,"div",43)(79,"div",44)(80,"div",45)(81,"span",46),o(82,"Newsletter: "),i(),n(83,"span"),o(84,"Get latest news via email"),i()(),n(85,"form",47)(86,"input",48),J("ngModelChange",function(B){return z(p.email,B)||(p.email=B),B}),i(),n(87,"input",49),U("click",function(){return p.doSubmit()}),i()()()()()()()()(),s(88,"hr",50),i()(),n(89,"div",51)(90,"div",36)(91,"div",8)(92,"div",52)(93,"h4"),o(94,"Useful Links"),i(),n(95,"ul")(96,"li"),s(97,"i",53),n(98,"a",38),o(99,"Home"),i()(),n(100,"li"),s(101,"i",53),n(102,"a",38),o(103,"About us"),i()(),n(104,"li"),s(105,"i",53),n(106,"a",38),o(107,"Blogs"),i()(),n(108,"li"),s(109,"i",53),n(110,"a",38),o(111,"Contact Us"),i()(),n(112,"li"),s(113,"i",53),n(114,"a",38),o(115,"Privacy Policy"),i()()(),n(116,"h4",54),o(117,"URPLAN"),i(),n(118,"ul"),d(119,at,2,1,"ng-container",55),i()(),n(120,"div",52)(121,"h4"),o(122,"Tools For Mice Operators"),i(),n(123,"ul"),d(124,pt,2,1,"ng-container",55),i()(),n(125,"div",52)(126,"h4"),o(127,"Tools for Tour Operators"),i(),n(128,"ul"),d(129,ft,2,1,"ng-container",55),i(),n(130,"h4",56),o(131,"Tools for Corporate Event Planners"),i(),n(132,"ul"),d(133,xt,2,1,"ng-container",55),i()(),n(134,"div",57)(135,"h4"),o(136,"About Us"),i(),n(137,"p"),o(138,"Travelexic is a new age business process automation solution for tour and MICE operators. We use a combination of web and mobile technology to connect the dots and enhance experience across stakeholders."),i(),n(139,"div",58)(140,"a",59),s(141,"i",60),i(),n(142,"a",61),s(143,"i",62),i()()()(),s(144,"hr",50),i()(),n(145,"div",36)(146,"div",63),o(147," \xA9 Copyright "),n(148,"strong")(149,"span"),o(150,"2024"),i()(),o(151,".Travelexic. All rights reserved. "),i()()()),c&2&&(r(8),a("formGroup",p.contactForm2),r(6),a("ngIf",p.submitted&&p.f.name.errors),r(5),a("ngIf",p.submitted&&p.f.company.errors),r(5),a("ngIf",p.submitted&&p.f.email.errors),r(5),a("ngIf",p.submitted&&p.f.company.errors),r(23),a("ngIf",p.submitted&&p.f.company_type.errors),r(5),a("ngIf",p.submitted&&p.f.message.errors),r(2),a("ngIf",p.message),r(13),a("routerLink",f(19,Ce)),r(14),Y("ngModel",p.email),r(12),a("routerLink",f(20,Ce)),r(4),a("routerLink",f(21,Re)),r(4),a("routerLink",f(22,Ge)),r(4),a("routerLink",f(23,He)),r(4),a("routerLink",f(24,De)),r(5),a("ngForOf",p.menu),r(5),a("ngForOf",p.menu),r(5),a("ngForOf",p.menu),r(4),a("ngForOf",p.menu))},dependencies:[L,w,le,se,ue,ne,de,oe,re,fe,me,ae,ce,pe,T],styles:[".invalid-feedback[_ngcontent-%COMP%], .text-error[_ngcontent-%COMP%]{color:red}.modal-content[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]{border-radius:0}"]});let e=t;return e})();var Se=(()=>{let t=class t{};t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=x({type:t,selectors:[["app-layout"]],decls:3,vars:0,template:function(c,p){c&1&&s(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[A,he,ye]});let e=t;return e})();var Ee=()=>["/"],Ct=()=>["/contact-us"],be=(()=>{let t=class t{};t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=x({type:t,selectors:[["app-page-not-found"]],decls:25,vars:6,consts:[["id","main"],["id","breadcrumbs",1,"breadcrumbs"],[1,"container"],[3,"routerLink"],[1,"light-blue"],[1,"row"],[1,"col-md-12"],[1,"error-template"],[1,"error-details"],[1,"error-actions"],[1,"btn","btn-primary","btn-lg",3,"routerLink"],[1,"btn","btn-secondary","btn-lg",3,"routerLink"]],template:function(c,p){c&1&&(n(0,"main",0)(1,"section",1)(2,"div",2)(3,"ol")(4,"li")(5,"a",3),o(6,"Home"),i()(),n(7,"li"),o(8,"Page Not found"),i()()()(),n(9,"section",4)(10,"div",2)(11,"div",5)(12,"div",6)(13,"div",7)(14,"h1"),o(15," Oops!"),i(),n(16,"h2"),o(17," 404 Not Found"),i(),n(18,"div",8),o(19," Sorry, an error has occured, Requested page not found! "),i(),n(20,"div",9)(21,"a",10),o(22,"Take Me Home "),i(),n(23,"a",11),o(24," Contact Support "),i()()()()()()()()),c&2&&(r(5),a("routerLink",f(3,Ee)),r(16),a("routerLink",f(4,Ee)),r(2),a("routerLink",f(5,Ct)))},dependencies:[T],styles:[".error-template[_ngcontent-%COMP%]{padding:40px 15px;text-align:center}.error-actions[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:15px}.error-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-right:10px}"]});let e=t;return e})();var I=(()=>{let t=class t{constructor(l){this.apiService=l}resolve(l){return this.apiService.getMenu()}};t.\u0275fac=function(c){return new(c||t)(k(C))},t.\u0275prov=W({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var yt=[{path:"",component:Se,resolve:{info:I},children:[{path:"",pathMatch:"full",loadChildren:()=>import("./chunk-K73YGLZH.mjs").then(e=>e.HomeModule)},{path:"about-us",loadChildren:()=>import("./chunk-5LT476ST.mjs").then(e=>e.AboutUsModule)},{path:"contact-us",loadChildren:()=>import("./chunk-RUHTZINO.mjs").then(e=>e.ContactUsModule)},{path:"blogs",loadChildren:()=>import("./chunk-JERNE2BH.mjs").then(e=>e.BlogsModule)},{path:"blog/:url",loadChildren:()=>import("./chunk-TAXXAFXK.mjs").then(e=>e.BlogModule)},{path:"product/:menu",loadChildren:()=>import("./chunk-EMSQSLCW.mjs").then(e=>e.PageModule)},{path:"product/:menu/:submenu",loadChildren:()=>import("./chunk-3UP5LOKT.mjs").then(e=>e.PageFeatureModule)},{path:"privacy_policy",loadChildren:()=>import("./chunk-AMCKEN7M.mjs").then(e=>e.PrivacyPolicyModule)},{path:"pricing",loadChildren:()=>import("./chunk-K2LN2GEP.mjs").then(e=>e.PricingModule)},{path:"**",component:be}]}],Fe=(()=>{let t=class t{};t.\u0275fac=function(c){return new(c||t)},t.\u0275mod=h({type:t}),t.\u0275inj=g({imports:[M.forRoot(yt,{scrollPositionRestoration:"enabled"}),M]});let e=t;return e})();var D=(()=>{let t=class t{constructor(){this.title="travelexic-website"}};t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=x({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(c,p){c&1&&s(0,"router-outlet")},dependencies:[A]});let e=t;return e})();var Me=(()=>{let t=class t{};t.\u0275fac=function(c){return new(c||t)},t.\u0275mod=h({type:t}),t.\u0275inj=g({providers:[C,I],imports:[P,q,R,j,M]});let e=t;return e})();var Te=(()=>{let t=class t{};t.\u0275fac=function(c){return new(c||t)},t.\u0275mod=h({type:t}),t.\u0275inj=g({providers:[C,I],imports:[P,q,R,M,j]});let e=t;return e})();var Ie=(()=>{let t=class t{constructor(l,c){l.events.pipe(V(p=>p instanceof te)).subscribe(p=>{p.position?setTimeout(()=>{c.scrollToPosition(p.position)},0):p.anchor?setTimeout(()=>{c.scrollToAnchor(p.anchor)},0):setTimeout(()=>{c.scrollToPosition([0,0])},0)})}};t.\u0275fac=function(c){return new(c||t)(k(ie),k(K))},t.\u0275mod=h({type:t,bootstrap:[D]}),t.\u0275inj=g({providers:[X(),C,G],imports:[Q,Z,Fe,Me,Te]});let e=t;return e})();var St=(()=>{let t=class t{};t.\u0275fac=function(c){return new(c||t)},t.\u0275mod=h({type:t,bootstrap:[D]}),t.\u0275inj=g({imports:[Ie,ee]});let e=t;return e})();export{St as a};
