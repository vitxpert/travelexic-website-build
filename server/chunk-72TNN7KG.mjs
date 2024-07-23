import './polyfills.server.mjs';
import{a as Q,d as X}from"./chunk-H7UEVAC2.mjs";import{a as ee,c as te,d as ie,e as ne,g as oe,h as re,n as O,o as j}from"./chunk-XUDZ6D6Z.mjs";import{c as h}from"./chunk-5CPXYGPH.mjs";import{A as U,Aa as d,B as v,D as M,Eb as J,Fa as l,Ga as S,H as y,Hb as K,I as x,Ib as Y,Ja as G,Jb as L,Ka as W,Kb as N,La as V,Mb as Z,Na as g,Nb as $,Oa as F,Ob as E,ea as r,fa as k,l as D,mb as T,nb as I,oa as s,qa as m,qb as w,sa as i,ta as n,tb as z,ua as p,va as f,wa as _,za as B,zb as q}from"./chunk-UB62UVK5.mjs";var ae=()=>["/"],xe=()=>["/about-us"],he=()=>["/blogs"],Ce=()=>["/contact-us"],ce=e=>[e];function ye(e,t){if(e&1&&(i(0,"li")(1,"a",28),l(2),n()()),e&2){let a=d().$implicit,o=d(2).$implicit;r(),m("routerLink",F(2,ce,"/product/"+o.custom_url+"/"+a.custom_url)),r(),S(a.name)}}function Se(e,t){if(e&1&&(f(0),s(1,ye,3,4,"li",27),_()),e&2){let a=t.$implicit,o=d(2).$implicit;r(),m("ngIf",o.id==a.parent_id)}}function Fe(e,t){if(e&1&&(i(0,"li",25)(1,"a",14)(2,"span"),l(3),n(),p(4,"i",26),n(),i(5,"ul"),s(6,Se,2,1,"ng-container",21),n()()),e&2){let a=d().$implicit,o=d();r(),m("routerLink",F(3,ce,"/product/"+a.custom_url)),r(2),S(a.name),r(3),m("ngForOf",o.menu)}}function Ee(e,t){if(e&1&&(f(0),s(1,Fe,7,5,"li",24),_()),e&2){let a=t.$implicit;r(),m("ngIf",a.parent_id==0)}}var le=(()=>{let t=class t{constructor(o){this.route=o,this.menu=[]}ngOnInit(){this.route.data.subscribe(o=>{this.menu=o.info})}};t.\u0275fac=function(c){return new(c||t)(k(L))},t.\u0275cmp=y({type:t,selectors:[["app-header"]],decls:45,vars:11,consts:[[1,"container"],[1,"main"],["id","topbar",1,"fixed-top","d-flex","align-items-center","topbar-inner-pages"],[1,"container","d-flex","align-items-center","justify-content-center","justify-content-md-between"],[1,"contact-info","d-flex","align-items-center"],[1,"fa","fa-envelope"],["href","mailto:contact@example.com"],[1,"fa","fa-phone","phone-icon"],["href","tel:+918107231111"],[1,"cta","d-none","d-md-block"],["href","https://new.travelexic.com/register",1,""],["id","header",1,"fixed-top","d-flex","align-items-center","header-inner-pages"],[1,"container","d-flex","align-items-center","justify-content-between"],[1,"logo"],[3,"routerLink"],["src","assets/img/logo/LOGO-5.png"],["id","navbar",1,"navbar"],[1,"nav-link",3,"routerLink"],[1,"dropdown"],["routerLInk","#",1,"nav-link"],[1,"bi","bi-chevron-down"],[4,"ngFor","ngForOf"],["href","https://calendly.com/travelexic","target","_blank",1,"nav-link"],["id","icon",1,"fa","fa-bars","mobile-nav-toggle"],["class","dropdown remove-nav",4,"ngIf"],[1,"dropdown","remove-nav"],[1,"bi","bi-chevron-right"],[4,"ngIf"],[1,"remove-nav",3,"routerLink"]],template:function(c,u){c&1&&(i(0,"div",0)(1,"div",1)(2,"nav")(3,"div",2)(4,"div",3)(5,"div",4),p(6,"i",5),i(7,"a",6),l(8,"hi@travelexic.com"),n(),p(9,"i",7),i(10,"a",8),l(11,"+91 8107231111"),n()(),i(12,"div",9)(13,"a",10),l(14,"Get Started"),n()()()(),i(15,"header",11)(16,"div",12)(17,"h1",13)(18,"a",14),p(19,"img",15),n()(),i(20,"nav",16)(21,"ul")(22,"li")(23,"a",17),l(24,"Home"),n()(),i(25,"li",18)(26,"a",19)(27,"span"),l(28,"Products"),n(),p(29,"i",20),n(),i(30,"ul"),s(31,Ee,2,1,"ng-container",21),n()(),i(32,"li")(33,"a",17),l(34,"About Us"),n()(),i(35,"li")(36,"a",17),l(37,"Blogs"),n()(),i(38,"li")(39,"a",22),l(40,"Get a demo"),n()(),i(41,"li")(42,"a",17),l(43,"Contact Us"),n()()(),p(44,"i",23),n()()()()()()),c&2&&(r(18),m("routerLink",g(6,ae)),r(5),m("routerLink",g(7,ae)),r(8),m("ngForOf",u.menu),r(2),m("routerLink",g(8,xe)),r(3),m("routerLink",g(9,he)),r(6),m("routerLink",g(10,Ce)))},dependencies:[T,I,$]});let e=t;return e})();var pe=()=>["/"],ke=()=>["/about-us"],Te=()=>["/blogs"],Ie=()=>["/contact-us"],we=()=>["/privacy_policy"],R=e=>[e];function Le(e,t){if(e&1&&(i(0,"li"),p(1,"i",20),i(2,"a",5),l(3),n()()),e&2){let a=d().$implicit,o=d(2).$implicit;r(2),m("routerLink",F(2,R,"/product/"+o.custom_url+"/"+a.custom_url)),r(),S(a.name)}}function Ne(e,t){if(e&1&&(f(0),s(1,Le,4,4,"li",31),_()),e&2){let a=t.$implicit,o=d(2).$implicit;r(),m("ngIf",o.id==a.parent_id)}}function $e(e,t){if(e&1&&(f(0),s(1,Ne,2,1,"ng-container",22),_()),e&2){let a=d(2);r(),m("ngForOf",a.menu)}}function Oe(e,t){if(e&1&&(f(0),s(1,$e,2,1,"ng-container",31),_()),e&2){let a=t.$implicit;r(),m("ngIf",a.id==58)}}function je(e,t){if(e&1&&(i(0,"li"),p(1,"i",20),i(2,"a",5),l(3),n()()),e&2){let a=d().$implicit,o=d(2).$implicit;r(2),m("routerLink",F(2,R,"/product/"+o.custom_url+"/"+a.custom_url)),r(),S(a.name)}}function Ae(e,t){if(e&1&&(f(0),s(1,je,4,4,"li",31),_()),e&2){let a=t.$implicit,o=d(2).$implicit;r(),m("ngIf",o.id==a.parent_id)}}function Re(e,t){if(e&1&&(f(0),s(1,Ae,2,1,"ng-container",22),_()),e&2){let a=d(2);r(),m("ngForOf",a.menu)}}function Pe(e,t){if(e&1&&(f(0),s(1,Re,2,1,"ng-container",31),_()),e&2){let a=t.$implicit;r(),m("ngIf",a.id==10)}}function He(e,t){if(e&1&&(i(0,"li"),p(1,"i",20),i(2,"a",5),l(3),n()()),e&2){let a=d().$implicit,o=d(2).$implicit;r(2),m("routerLink",F(2,R,"/product/"+o.custom_url+"/"+a.custom_url)),r(),S(a.name)}}function De(e,t){if(e&1&&(f(0),s(1,He,4,4,"li",31),_()),e&2){let a=t.$implicit,o=d(2).$implicit;r(),m("ngIf",o.id==a.parent_id)}}function Ue(e,t){if(e&1&&(f(0),s(1,De,2,1,"ng-container",22),_()),e&2){let a=d(2);r(),m("ngForOf",a.menu)}}function Be(e,t){if(e&1&&(f(0),s(1,Ue,2,1,"ng-container",31),_()),e&2){let a=t.$implicit;r(),m("ngIf",a.id==11)}}function Ge(e,t){if(e&1&&(i(0,"li"),p(1,"i",20),i(2,"a",5),l(3),n()()),e&2){let a=d().$implicit,o=d(2).$implicit;r(2),m("routerLink",F(2,R,"/product/"+o.custom_url+"/"+a.custom_url)),r(),S(a.name)}}function We(e,t){if(e&1&&(f(0),s(1,Ge,4,4,"li",31),_()),e&2){let a=t.$implicit,o=d(2).$implicit;r(),m("ngIf",o.id==a.parent_id)}}function Ve(e,t){if(e&1&&(f(0),s(1,We,2,1,"ng-container",22),_()),e&2){let a=d(2);r(),m("ngForOf",a.menu)}}function ze(e,t){if(e&1&&(f(0),s(1,Ve,2,1,"ng-container",31),_()),e&2){let a=t.$implicit;r(),m("ngIf",a.id==12)}}var de=(()=>{let t=class t{constructor(o,c){this.apiService=o,this.route=c}ngOnInit(){this.route.data.subscribe(o=>{this.menu=o.info})}doSubmit(){this.email!=""&&this.apiService.sendNewsLetter({email:this.email}).subscribe(o=>{})}};t.\u0275fac=function(c){return new(c||t)(k(h),k(L))},t.\u0275cmp=y({type:t,selectors:[["app-footer"]],decls:86,vars:17,consts:[["id","footer"],[1,"footer-newsletter"],[1,"container"],[1,"row"],[1,"col-lg-6","footer-logo"],[3,"routerLink"],["src","assets/img/logo/travelexic-footer-logo.png","alt","Alternative Text"],[1,"col-lg-6","footer-news_letter"],["id","news"],[1,"news-sec"],[1,"col-lg-12"],[2,"margin","0 auto"],[1,"footer-input"],[2,"color","#F6B024","font-size","22px"],["action","","method","post","role","form",1,"php-email-form"],["placeholder","Enter Email Address","v-model","email","type","email","name","email",3,"ngModelChange","ngModel"],["type","submit","value","FREE SIGNUP",3,"click"],[1,"footer-line"],[1,"footer-top"],[1,"col-lg-3","col-md-6","footer-links"],[1,"bx","bx-chevron-right"],[1,"mt-4"],[4,"ngFor","ngForOf"],[1,"mt-3"],[1,"col-lg-3","col-md-6","footer-info",2,"text-align","left"],[1,"social-links","mt-3"],["href","https://www.facebook.com/travelexic",1,"facebook"],[1,"fa","fa-facebook"],["href","https://in.linkedin.com/company/travelexic",1,"linkedin"],[1,"fa","fa-linkedin"],[1,"copyright"],[4,"ngIf"]],template:function(c,u){c&1&&(i(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"a",5),p(6,"img",6),n()(),i(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",3)(11,"div",10)(12,"div",11)(13,"div",12)(14,"span",13),l(15,"Newsletter: "),n(),i(16,"span"),l(17,"get latest news via email"),n()(),i(18,"form",14)(19,"input",15),V("ngModelChange",function(H){return W(u.email,H)||(u.email=H),H}),n(),i(20,"input",16),B("click",function(){return u.doSubmit()}),n()()()()()()()()(),p(21,"hr",17),n()(),i(22,"div",18)(23,"div",2)(24,"div",3)(25,"div",19)(26,"h4"),l(27,"Useful Links"),n(),i(28,"ul")(29,"li"),p(30,"i",20),i(31,"a",5),l(32,"Home"),n()(),i(33,"li"),p(34,"i",20),i(35,"a",5),l(36,"About us"),n()(),i(37,"li"),p(38,"i",20),i(39,"a",5),l(40,"Blogs"),n()(),i(41,"li"),p(42,"i",20),i(43,"a",5),l(44,"Contact Us"),n()(),i(45,"li"),p(46,"i",20),i(47,"a",5),l(48,"Privacy Policy"),n()()(),i(49,"h4",21),l(50,"URPLAN"),n(),i(51,"ul"),s(52,Oe,2,1,"ng-container",22),n()(),i(53,"div",19)(54,"h4"),l(55,"Tools For Mice Operators"),n(),i(56,"ul")(57,"ul"),s(58,Pe,2,1,"ng-container",22),n()()(),i(59,"div",19)(60,"h4"),l(61,"Tools for Tour Operators"),n(),i(62,"ul"),s(63,Be,2,1,"ng-container",22),n(),i(64,"h4",23),l(65,"Tools for Corporate Event Planners"),n(),i(66,"ul"),s(67,ze,2,1,"ng-container",22),n()(),i(68,"div",24)(69,"h4"),l(70,"About Us"),n(),i(71,"p"),l(72,"Travelexic is a new age business process automation solution for tour and MICE operators. We use a combination of web and mobile technology to connect the dots and enhance experience across stakeholders."),n(),i(73,"div",25)(74,"a",26),p(75,"i",27),n(),i(76,"a",28),p(77,"i",29),n()()()(),p(78,"hr",17),n()(),i(79,"div",2)(80,"div",30),l(81," \xA9 Copyright "),i(82,"strong")(83,"span"),l(84,"2023"),n()(),l(85,".Travelexic. All rights reserved. "),n()()()),c&2&&(r(5),m("routerLink",g(11,pe)),r(14),G("ngModel",u.email),r(12),m("routerLink",g(12,pe)),r(4),m("routerLink",g(13,ke)),r(4),m("routerLink",g(14,Te)),r(4),m("routerLink",g(15,Ie)),r(4),m("routerLink",g(16,we)),r(5),m("ngForOf",u.menu),r(6),m("ngForOf",u.menu),r(5),m("ngForOf",u.menu),r(4),m("ngForOf",u.menu))},dependencies:[T,I,re,ee,te,ie,oe,ne,$]});let e=t;return e})();var se=(()=>{let t=class t{};t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=y({type:t,selectors:[["app-layout"]],decls:3,vars:0,template:function(c,u){c&1&&p(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[N,le,de]});let e=t;return e})();var b=(()=>{let t=class t{constructor(o){this.apiService=o}resolve(o){return this.apiService.getMenu()}};t.\u0275fac=function(c){return new(c||t)(M(h))},t.\u0275prov=U({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Je=[{path:"",component:se,resolve:{info:b},children:[{path:"",pathMatch:"full",loadChildren:()=>import("./chunk-HNY5QU44.mjs").then(e=>e.HomeModule)},{path:"about-us",loadChildren:()=>import("./chunk-MM5LHFXF.mjs").then(e=>e.AboutUsModule)},{path:"contact-us",loadChildren:()=>import("./chunk-ZOWHZXHY.mjs").then(e=>e.ContactUsModule)},{path:"blogs",loadChildren:()=>import("./chunk-R5ICMCJT.mjs").then(e=>e.BlogsModule)},{path:"blog/:url",loadChildren:()=>import("./chunk-KY63UXDG.mjs").then(e=>e.BlogModule)},{path:"product/:menu",loadChildren:()=>import("./chunk-AGQMSENP.mjs").then(e=>e.PageModule)},{path:"product/:menu:/:submenu",loadChildren:()=>import("./chunk-HH2VGOWR.mjs").then(e=>e.PageFeatureModule)},{path:"privacy_policy",loadChildren:()=>import("./chunk-AMCKEN7M.mjs").then(e=>e.PrivacyPolicyModule)}]}],ue=(()=>{let t=class t{};t.\u0275fac=function(c){return new(c||t)},t.\u0275mod=x({type:t}),t.\u0275inj=v({imports:[E.forRoot(Je,{scrollPositionRestoration:"enabled"}),E]});let e=t;return e})();var P=(()=>{let t=class t{constructor(){this.title="travelexic-website"}};t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=y({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(c,u){c&1&&p(0,"router-outlet")},dependencies:[N]});let e=t;return e})();var fe=(()=>{let t=class t{};t.\u0275fac=function(c){return new(c||t)},t.\u0275mod=x({type:t}),t.\u0275inj=v({providers:[h,b],imports:[w,O,j,q,E]});let e=t;return e})();var _e=(()=>{let t=class t{};t.\u0275fac=function(c){return new(c||t)},t.\u0275mod=x({type:t}),t.\u0275inj=v({providers:[h,b],imports:[w,O,j,E]});let e=t;return e})();var ge=(()=>{let t=class t{constructor(o,c){o.events.pipe(D(u=>u instanceof Y)).subscribe(u=>{u.position?setTimeout(()=>{c.scrollToPosition(u.position)},0):u.anchor?setTimeout(()=>{c.scrollToAnchor(u.anchor)},0):setTimeout(()=>{c.scrollToPosition([0,0])},0)})}};t.\u0275fac=function(c){return new(c||t)(M(Z),M(z))},t.\u0275mod=x({type:t,bootstrap:[P]}),t.\u0275inj=v({providers:[K(),h],imports:[J,Q,ue,fe,_e]});let e=t;return e})();var Ke=(()=>{let t=class t{};t.\u0275fac=function(c){return new(c||t)},t.\u0275mod=x({type:t,bootstrap:[P]}),t.\u0275inj=v({imports:[ge,X]});let e=t;return e})();export{Ke as a};
