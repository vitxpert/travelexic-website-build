import './polyfills.server.mjs';
import{a as ie,b as ne}from"./chunk-YVEWYNAF.mjs";import{a as Z,b as ee,c as te}from"./chunk-U5SE4IKL.mjs";import"./chunk-GTSSCL6B.mjs";import{a as R,b as u,c as B,d as z,h as H,j as L,k as G,l as V,m as Y,n as K,o as Q,p as $,q as J,r as W,s as S,t as X,u as x}from"./chunk-FCG63HBM.mjs";import{Aa as b,B as h,Fa as i,Fb as D,Ga as P,Gb as j,H as _,I as C,Ia as w,Na as k,Nb as A,Ob as E,Sa as d,Ta as f,ba as O,ca as M,ea as c,fa as g,ib as F,mb as N,nb as I,oa as p,qa as s,qb as q,sa as t,ta as e,ua as l,za as T,zb as U}from"./chunk-UB62UVK5.mjs";import"./chunk-VVCT4QZE.mjs";var le=()=>["/"];function ce(n,o){n&1&&(t(0,"div",61),i(1," Name Required! "),e())}function se(n,o){n&1&&(t(0,"div",61),i(1," Name Required! "),e())}function pe(n,o){n&1&&(t(0,"div",61),i(1," Email Required! "),e())}function de(n,o){n&1&&(t(0,"div",61),i(1," Invalid Email! "),e())}function fe(n,o){n&1&&(t(0,"div",61),i(1," Name Required! "),e())}function ue(n,o){n&1&&(t(0,"div",61),i(1," Name Required! "),e())}function ge(n,o){n&1&&(t(0,"div",61),i(1," Message Required! "),e())}function ve(n,o){n&1&&(t(0,"div",62),i(1," Your message has been sent. Thank you! "),e())}function he(n,o){if(n&1&&(t(0,"div",64)(1,"div",65)(2,"div",66)(3,"div",67),l(4,"img",68),e()(),t(5,"div",69)(6,"div",70)(7,"p",71)(8,"small",72),i(9),e()(),t(10,"h5",73),i(11),e(),l(12,"p",74),e()()()()),n&2){let v=b().$implicit,r=b();c(4),s("src",r.websiteUrl+v.image,M),c(5),P(r.getDateTime(v.created_at)),c(2),w("",v.name," ( ",v.designation," )"),c(),s("innerHtml",v.description.substring(0,100)+"...",O)}}function Ce(n,o){n&1&&p(0,he,13,5,"ng-template",63)}var ae=(()=>{let o=class o{constructor(r,m,a,y,me){this.fb=r,this.title=m,this.meta=a,this.dom=y,this.apiService=me,this.message=!1,this.testimonials=[],this.websiteUrl="",this.customOptions3={loop:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!0,navSpeed:600,margin:20,navText:["&#8249","&#8250;"],responsive:{0:{items:1},400:{items:1},760:{items:2},1e3:{items:3}},nav:!0},this.websiteUrl=S.websiteUrl,this.loadTestimonials()}ngOnInit(){this.loadSEO("Travelexic - Contact Us","Powerful tools for MICE, Tour and Conference operators enabling them to scale their business, drive operational efficiencies, and elevate customer experience. Tools for Tour Operators, Tools for MICE Operators, Tools for Corporate Event Planners, Tools for Professional Conference Organizers","https://site.travelexic.com/storage/uploads/media/VLKL6QAOjf52TKi3wVs59yBrHdos6i6dtvVLfx6u.jpg"),this.updateCanonicalLink(S.mainUrl+"/contact-us"),this.contactForm=this.fb.group({name:["",[u.required]],email:["",[u.required,u.email]],message:["",[u.required]],company:["",[u.required]],company_type:["",[u.required]],phone:["",[u.required]]})}loadSEO(r,m,a){this.title.setTitle(r),this.meta.updateTag({name:"title",content:r},'name="title"'),this.meta.updateTag({name:"description",content:m},'name="description"'),this.meta.updateTag({name:"twitter:title",content:r},'name="twitter:title"'),this.meta.updateTag({name:"twitter:description",content:m},'name="twitter:description"'),this.meta.updateTag({name:"twitter:image",content:a},'name="twitter:image"'),this.meta.updateTag({name:"DC.title",content:r},'name="DC.title"'),this.meta.updateTag({name:"DC.description",content:m},'name="DC.description"'),this.meta.updateTag({property:"og:title",content:r},'property="og:title"'),this.meta.updateTag({property:"og:description",content:m},'property="og:description"'),this.meta.updateTag({property:"og:image",content:a},'property="og:image"')}updateCanonicalLink(r){let m=this.dom.getElementsByTagName("head")[0];var a=this.dom.querySelector("link[rel='canonical']")||null;a==null&&(a=this.dom.createElement("link"),m.appendChild(a)),a.setAttribute("rel","canonical"),a.setAttribute("href",r)}callSubmit(){if(this.contactForm.markAllAsTouched(),!this.contactForm.invalid){var r={email:this.contactForm.value.email,name:this.contactForm.value.name,company:this.contactForm.value.company,company_type:this.contactForm.value.company_type,phone:this.contactForm.value.phone,message:this.contactForm.value.message};this.apiService.sendContactForm(r).subscribe(m=>{this.message=!0,this.contactForm.reset()})}}loadTestimonials(){this.apiService.getTestimonials().subscribe(r=>{this.testimonials=r})}getDateTime(r){let m=new Date(r);return X[m.getMonth()]+" "+m.getDate()+", "+m.getFullYear()}};o.\u0275fac=function(m){return new(m||o)(g($),g(j),g(D),g(F),g(x))},o.\u0275cmp=_({type:o,selectors:[["app-contact-us"]],decls:138,vars:34,consts:[["id","main"],["id","breadcrumbs",1,"breadcrumbs"],[1,"container"],[3,"routerLink"],["id","contact",1,"about","why-us-blue"],[1,"row"],[1,"col-md-10","offset-md-1"],[1,"contactus-box"],[1,"col-lg-8","mt-5","mt-lg-0"],[1,"contact-left-box"],[3,"formGroup"],[1,"col-md-6","form-group"],["formControlName","name","type","text","placeholder","Your Name","required","",1,"form-control"],["class","invalid-feedback",4,"ngIf"],["formControlName","company","type","text","placeholder","Company Name","required","",1,"form-control"],[1,"col-md-6","form-group","mt-3"],["formControlName","email","type","email","placeholder","Your Email","required","",1,"form-control"],["formControlName","phone","type","text","placeholder","Phone No.","required","",1,"form-control"],[1,"form-group","mt-3"],["formControlName","company_type","type","text","required","",1,"form-control"],["value",""],["value","MICE Operator"],["value","Tour Operator"],["value","Event Planner"],["value","Corporate"],["value","PCO"],["value","Travel Agent"],["value","Group Operator"],["value","Other"],["formControlName","message","rows","5","placeholder","Message","required","",1,"form-control"],[1,"my-3"],["class","sent-message",4,"ngIf"],["type","button",1,"btn","btn-primary","contact-btn",3,"click"],[1,"fa","fa-paper-plane"],[1,"col-lg-4"],[1,"contact-right-box"],[1,"info"],[1,"address"],[1,"fa","fa-map-marker"],[1,"email"],[1,"fa","fa-envelope"],["href","mailto:hi@travelexic.com"],[1,"phone"],[1,"fa","fa-phone"],["href","tel:919971136675"],[1,"social-links","mt-3"],["href","https://www.facebook.com/travelexic",1,"facebook"],[1,"fa","fa-facebook"],["href","https://in.linkedin.com/company/travelexic",1,"linkedin"],[1,"fa","fa-linkedin"],[1,"info","mt-5"],["data-aos","fade-up",1,"section-testimonial"],[1,"col-md-12"],[1,"mb-5"],[3,"options"],[4,"ngFor","ngForOf"],[1,"testimonial-swiper-button-next"],[1,"ri-arrow-right-s-line"],[1,"testimonial-swiper-button-prev"],[1,"ri-arrow-left-s-line"],[1,"testimonial-swiper-pagination"],[1,"invalid-feedback"],[1,"sent-message"],["carouselSlide",""],[1,"card","testimonial-item"],[1,"row","g-0"],[1,"col-4","col-md-4"],[1,"testimonial-img"],["alt","contactus_image",1,"img-fluid",3,"src"],[1,"col-8","col-md-8"],[1,"card-body"],[1,"card-text"],[1,"text-muted"],[1,"card-title"],[1,"card-text",3,"innerHtml"]],template:function(m,a){m&1&&(t(0,"main",0)(1,"section",1)(2,"div",2)(3,"ol")(4,"li")(5,"a",3),i(6,"Home"),e()(),t(7,"li"),i(8,"Contact Us"),e()()()(),t(9,"section",4)(10,"div",2)(11,"div",5)(12,"div",6)(13,"h1"),i(14,"CONTACT US "),t(15,"span"),i(16,"Get in touch !!"),e()(),t(17,"div",7)(18,"div",5)(19,"div",8)(20,"div",9)(21,"p"),i(22,"Send Message"),e(),t(23,"form",10)(24,"div",5)(25,"div",11)(26,"label"),i(27,"Your Name"),e(),l(28,"input",12),p(29,ce,2,0,"div",13),d(30,"hasError"),e(),t(31,"div",11)(32,"label"),i(33,"Company Name"),e(),l(34,"input",14),p(35,se,2,0,"div",13),d(36,"hasError"),e(),t(37,"div",15)(38,"label"),i(39,"E-mail Address"),e(),l(40,"input",16),p(41,pe,2,0,"div",13),d(42,"hasError"),p(43,de,2,0,"div",13),d(44,"hasError"),e(),t(45,"div",15)(46,"label"),i(47,"Phone Number"),e(),l(48,"input",17),p(49,fe,2,0,"div",13),d(50,"hasError"),e()(),t(51,"div",18)(52,"label"),i(53,"Company Type"),e(),t(54,"select",19)(55,"option",20),i(56,"Select Option"),e(),t(57,"option",21),i(58,"MICE Operator"),e(),t(59,"option",22),i(60,"Tour Operator"),e(),t(61,"option",23),i(62,"Event Planner"),e(),t(63,"option",24),i(64,"Corporate"),e(),t(65,"option",25),i(66,"PCO"),e(),t(67,"option",26),i(68,"Travel Agent"),e(),t(69,"option",27),i(70,"Group Operator"),e(),t(71,"option",28),i(72,"Other"),e()(),p(73,ue,2,0,"div",13),d(74,"hasError"),e(),t(75,"div",18)(76,"label"),i(77,"Message"),e(),l(78,"textarea",29),p(79,ge,2,0,"div",13),d(80,"hasError"),e(),t(81,"div",30),p(82,ve,2,0,"div",31),e(),t(83,"div")(84,"button",32),T("click",function(){return a.callSubmit()}),l(85,"i",33),i(86," Send Message "),e()()()()(),t(87,"div",34)(88,"div",35)(89,"h3"),i(90,"Contact Information"),e(),t(91,"div",36)(92,"div",37),l(93,"i",38),t(94,"h4"),i(95,"Location:"),e(),t(96,"p"),i(97,"Gurgaon, Dehradun"),e()(),t(98,"div",39),l(99,"i",40),t(100,"h4"),i(101,"E-mail:"),e(),t(102,"p")(103,"a",41),i(104,"hi@travelexic.com"),e()()(),t(105,"div",42),l(106,"i",43),t(107,"h4"),i(108,"Contact Us:"),e(),t(109,"p")(110,"a",44),i(111,"+91 9971136675"),e()()(),t(112,"div",45)(113,"a",46),l(114,"i",47),e(),t(115,"a",48),l(116,"i",49),e()()(),t(117,"div",50)(118,"div",37),l(119,"i",38),t(120,"h4"),i(121,"Registered address:"),e(),t(122,"p"),i(123,"R C Palace Hotel, Bhiwadi, Rajasthan 301019"),e()()()()()()()()()()(),t(124,"section",51)(125,"div",2)(126,"div",5)(127,"div",52)(128,"h3",53)(129,"strong"),i(130,"Hear it from satisfied customers"),e()()()()(),t(131,"owl-carousel-o",54),p(132,Ce,1,0,null,55),e(),t(133,"div",56),l(134,"i",57),e(),t(135,"div",58),l(136,"i",59),e(),l(137,"div",60),e()()),m&2&&(c(5),s("routerLink",k(33,le)),c(18),s("formGroup",a.contactForm),c(6),s("ngIf",f(30,12,a.contactForm.controls.name,"required")),c(6),s("ngIf",f(36,15,a.contactForm.controls.company,"required")),c(6),s("ngIf",f(42,18,a.contactForm.controls.email,"required")),c(2),s("ngIf",f(44,21,a.contactForm.controls.email,"email")),c(6),s("ngIf",f(50,24,a.contactForm.controls.phone,"required")),c(24),s("ngIf",f(74,27,a.contactForm.controls.company_type,"required")),c(6),s("ngIf",f(80,30,a.contactForm.controls.message,"required")),c(3),s("ngIf",a.message),c(49),s("options",a.customOptions3),c(),s("ngForOf",a.testimonials))},dependencies:[N,I,A,H,Y,K,R,V,B,z,Q,L,G,ee,Z,ie],styles:["#contact[_ngcontent-%COMP%]{padding-top:60px!important;padding-bottom:50px}#contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#f6b024}#contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;color:#fff}.invalid-feedback[_ngcontent-%COMP%]{color:red;display:block}.sent-message[_ngcontent-%COMP%]{color:green}.contactus-box[_ngcontent-%COMP%]{background:#fff;border-radius:20px}#contact[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;margin-bottom:20px;color:#666}.info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:inline-block;color:#f6b024}.info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{display:inline-block;margin-left:10px;font-size:15px}.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#1e51a4}.contact-left-box[_ngcontent-%COMP%]{padding:30px}.contact-right-box[_ngcontent-%COMP%]{background:#f1f8ff;padding:30px;display:block;height:100%;border-radius:0 20px 20px 0}.swiper-slide[_ngcontent-%COMP%]{background-color:#fff;padding:20px}.swiper-slide[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.swiper-slide[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;color:#fff}.testimonial-item[_ngcontent-%COMP%]{box-shadow:0 0 4px #888;margin-top:5px;margin-bottom:5px;height:200px}.testimonial-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px;color:#1e51a4}.testimonial-img[_ngcontent-%COMP%]{background-color:#0000000a;display:flex;align-items:center;height:200px;border-radius:7px 0 0 7px}.contact-btn[_ngcontent-%COMP%]{background:#f6b024;border-color:#f6b024}.section-testimonial[_ngcontent-%COMP%]{background:#f1f8ff}.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-align:left;font-size:16px;display:inline-block;background:#ffffffe6;color:#fff;line-height:1;padding:10px 0;margin-right:4px;border-radius:50%;text-align:center;width:36px;height:36px;transition:.3s}"]});let n=o;return n})();var xe=[{path:"",pathMatch:"full",component:ae}],re=(()=>{let o=class o{};o.\u0275fac=function(m){return new(m||o)},o.\u0275mod=C({type:o}),o.\u0275inj=h({imports:[E.forChild(xe),E]});let n=o;return n})();var Ge=(()=>{let o=class o{};o.\u0275fac=function(m){return new(m||o)},o.\u0275mod=C({type:o}),o.\u0275inj=h({providers:[x],imports:[q,re,J,W,U,ne,te]});let n=o;return n})();export{Ge as ContactUsModule};
