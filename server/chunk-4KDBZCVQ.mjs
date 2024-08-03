import './polyfills.server.mjs';
import{b as Q}from"./chunk-4L4RA2GF.mjs";import{a as B,b as G,c as K}from"./chunk-U5SE4IKL.mjs";import"./chunk-GTSSCL6B.mjs";import{b as h,p as A,q as L,r as $,s as N,t as R,u as P}from"./chunk-6ENPATRP.mjs";import{Aa as p,B as C,Ba as _,Fa as m,Fb as U,Ga as f,Gb as D,H as E,Ha as O,I as M,Ia as F,Jb as H,Na as w,Nb as j,Oa as I,Ob as S,ba as y,ca as u,ea as r,fa as x,mb as T,nb as k,oa as g,qa as l,qb as q,sa as a,ta as o,ua as d,va as v,wa as b,zb as z}from"./chunk-UB62UVK5.mjs";import"./chunk-VVCT4QZE.mjs";var Z=()=>["/"],tt=()=>["/contact-us"],et=t=>[t];function nt(t,i){if(t&1&&(a(0,"div",32),d(1,"input",33),a(2,"label",34)(3,"div",35),d(4,"img",36),o(),a(5,"div",37),m(6),o()()()),t&2){let n=p().$implicit,e=p();l("routerLink",I(4,et,"/product/"+e.menu.custom_url+"/"+n.custom_url)),r(4),_("alt",n.image),l("src",e.websiteUrl+n.image,u),r(2),O(" ",n.name," ")}}function it(t,i){if(t&1&&(v(0),g(1,nt,7,6,"div",31),b()),t&2){let n=i.$implicit;r(),l("ngIf",n.status==1)}}function ot(t,i){if(t&1&&(a(0,"a",47),m(1,"Know More"),o()),t&2){let n=p(2).$implicit;_("href",n.link,u)}}function at(t,i){if(t&1&&(v(0),a(1,"div",39)(2,"div",40)(3,"div",41),d(4,"img",42),o(),a(5,"div",43)(6,"h3",44),m(7),o(),a(8,"p",45),m(9),o(),g(10,ot,2,1,"a",46),o()()(),b()),t&2){let n=p().$implicit,e=p();r(4),_("alt",n.title),l("src",e.websiteUrl+(n==null?null:n.img),u),r(3),f(n.title),r(2),f(n.description),r(),l("ngIf",n.link!=null)}}function rt(t,i){if(t&1&&(a(0,"a",47),m(1,"Know More"),o()),t&2){let n=p(2).$implicit;_("href",n.link,u)}}function ct(t,i){if(t&1&&(v(0),a(1,"div",39)(2,"div",48)(3,"div",43)(4,"h3",44),m(5),o(),a(6,"p",45),m(7),o(),g(8,rt,2,1,"a",46),o(),a(9,"div",49),d(10,"img",42),o()()(),b()),t&2){let n=p().$implicit,e=p();r(5),f(n.title),r(2),f(n.description),r(),l("ngIf",n.link!=null),r(2),_("alt",n.title),l("src",e.websiteUrl+(n==null?null:n.img),u)}}function lt(t,i){if(t&1&&(v(0),g(1,at,11,5,"ng-container",38)(2,ct,11,5,"ng-container",38),b()),t&2){let n=i.index,e=p();r(),l("ngIf",e.checkEven(n)),r(),l("ngIf",e.checkOdd(n))}}function mt(t,i){if(t&1&&m(0),t&2){let n=p().$implicit;O(" ",n.answer," ")}}function st(t,i){if(t&1&&(a(0,"div",57)(1,"h2",58)(2,"button",59),m(3),o()(),a(4,"div",60)(5,"div",61),g(6,mt,1,1,"ng-template"),o()()()),t&2){let n=i.$implicit;r(3),f(n.question)}}function pt(t,i){if(t&1&&(a(0,"section",50)(1,"div",51)(2,"div",52)(3,"h2"),m(4,"Frequently Asked Questions"),o(),a(5,"p",53),m(6," Got a question? We\u2019ve got answers. If you have some other questions, see our support center. "),o()(),a(7,"div",54)(8,"div",55),g(9,st,7,1,"div",56),o()()()()),t&2){let n=p();r(9),l("ngForOf",n.faq)}}function dt(t,i){if(t&1&&(a(0,"div",63)(1,"div",64)(2,"div",65)(3,"div",66),d(4,"img",67),o()(),a(5,"div",68)(6,"div",69)(7,"p",70)(8,"small",71),m(9),o()(),a(10,"h5",72),m(11),o(),d(12,"p",73),o()()()()),t&2){let n=p().$implicit,e=p();r(4),l("src",e.websiteUrl+n.image,u),r(5),f(e.getDateTime(n.created_at)),r(2),F("",n.name," ( ",n.designation," )"),r(),l("innerHtml",n.description.substring(0,100)+"...",y)}}function gt(t,i){t&1&&g(0,dt,13,5,"ng-template",62)}var W=(()=>{let i=class i{constructor(e,c,s,J,X){this.apiService=e,this.meta=c,this.title=s,this.fb=J,this.activatedRoute=X,this.page_content={},this.testimonials=[],this.submenu=[],this.menu={},this.faq=[],this.features=[],this.customOptions3={loop:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!0,navSpeed:600,margin:20,navText:["&#8249","&#8250;"],responsive:{0:{items:1},400:{items:1},760:{items:2},1e3:{items:3}},nav:!0},this.message=!1,this.submitted=!1,this.websiteUrl=N.websiteUrl}ngOnInit(){this.contactForm2=this.fb.group({name:["",[h.required]],email:["",[h.required,h.email]],message:["",[h.required]],company:["",[h.required]],company_type:["",[h.required]],phone:["",[h.required]]}),this.activatedRoute.params.subscribe(e=>{e?.submenu?this.url=e.submenu:this.url=e.menu,this.loadPage()}),this.loadTestimonials()}loadTestimonials(){this.apiService.getTestimonials().subscribe(e=>{this.testimonials=e})}loadPage(){this.apiService.getPage(this.url).subscribe(e=>{this.page_content=e,this.loadSubmenu(this.page_content.menu_id),this.loadFaq(this.page_content.id),this.loadFeatures(this.page_content.id),this.loadSEO(this.page_content.seo_title,this.page_content.seo_description,this.websiteUrl+this.page_content.image)})}loadFaq(e){this.apiService.getFaq(e).subscribe(c=>{this.faq=c})}loadFeatures(e){this.apiService.getPageFeatures(e).subscribe(c=>{this.features=c,console.log(this.features)})}loadSubmenu(e){this.apiService.getSubMenu(e).subscribe(c=>{this.menu=c,this.submenu=c.submenu})}loadSEO(e,c,s){this.title.setTitle(e),this.meta.updateTag({name:"title",content:e},'name="title"'),this.meta.updateTag({name:"description",content:c},'name="description"'),this.meta.updateTag({name:"twitter:title",content:e},'name="twitter:title"'),this.meta.updateTag({name:"twitter:description",content:c},'name="twitter:description"'),this.meta.updateTag({name:"twitter:image",content:s},'name="twitter:image"'),this.meta.updateTag({name:"DC.title",content:e},'name="DC.title"'),this.meta.updateTag({name:"DC.description",content:c},'name="DC.description"'),this.meta.updateTag({property:"og:title",content:e},'property="og:title"'),this.meta.updateTag({property:"og:description",content:c},'property="og:description"'),this.meta.updateTag({property:"og:image",content:s},'property="og:image"')}checkEven(e){return e%2==0}checkOdd(e){return e%2!=0}getDateTime(e){let c=new Date(e);return R[c.getMonth()]+" "+c.getDate()+", "+c.getFullYear()}callSubmit(){if(this.submitted=!0,this.contactForm2.invalid){alert("asf");return}console.log(this.contactForm2.value);var e={email:this.contactForm2.value.email,name:this.contactForm2.value.name,company:this.contactForm2.value.company,company_type:this.contactForm2.value.company_type,phone:this.contactForm2.value.phone,message:this.contactForm2.value.message};this.apiService.sendContactForm(e).subscribe(c=>{this.message=!0,this.contactForm2.reset()})}get f(){return this.contactForm2.controls}};i.\u0275fac=function(c){return new(c||i)(x(P),x(U),x(D),x(A),x(H))},i.\u0275cmp=E({type:i,selectors:[["app-page"]],decls:55,vars:14,consts:[["id","main"],["id","breadcrumbs",1,"breadcrumbs"],[1,"container"],[3,"routerLink"],[1,"light-blue"],[1,"row"],[1,"col-md-6","top-section-left"],[3,"src","alt"],[1,"col-md-6","top-section-right"],[1,"container",3,"innerHTML"],["data-bs-target","#myModal","data-bs-toggle","modal",1,"btn","btn-secondary","btn-lg","schedule_demo"],["type","button",1,"btn","btn-primary","btn-getintouch",3,"routerLink"],[1,"light-blue",2,"background-color","#ecf6fe"],[1,"col-md-12"],["align","center"],[1,"list"],[4,"ngFor","ngForOf"],[1,"bg-sky-blue"],[1,"row","mt-5"],[1,"col-md-10","offset-md-1"],[1,"col-md-10","offset-md-1","text-center"],[3,"innerHTML"],["class","faq section-bg","id","faq",4,"ngIf"],["data-aos","fade-up",1,"section-testimonial"],[1,"mb-5"],[3,"options"],[1,"testimonial-swiper-button-next"],[1,"ri-arrow-right-s-line"],[1,"testimonial-swiper-button-prev"],[1,"ri-arrow-left-s-line"],[1,"testimonial-swiper-pagination"],["class","form-element",3,"routerLink",4,"ngIf"],[1,"form-element",3,"routerLink"],["type","checkbox","name","platform","value","instagram","id","instagram"],["for","instagram"],[1,"icon"],["width","100%",3,"src","alt"],[1,"title"],[4,"ngIf"],[2,"border-top","2px rgb(115, 168, 255) solid"],[1,"row","mt-5","mb-3"],[1,"col-md-4","col-4",2,"text-align","right"],[1,"feature-image",3,"src","alt"],[1,"col-md-8","col-8"],[1,"feature-title"],[1,"feature-description"],["class","btn btn-secondary btn-lg know_more",3,"href",4,"ngIf"],[1,"btn","btn-secondary","btn-lg","know_more",3,"href"],[1,"row","pt-5","pb-3"],[1,"col-md-4","col-4",2,"text-align","left"],["id","faq",1,"faq","section-bg"],["data-aos","fade-up",1,"container","aos-init","aos-animate"],[1,"section-title"],[1,"fre-para"],[1,"faq-list"],["ngbAccordion",""],["ngbAccordionItem","",4,"ngFor","ngForOf"],["ngbAccordionItem",""],["ngbAccordionHeader",""],["ngbAccordionButton",""],["ngbAccordionCollapse",""],["ngbAccordionBody",""],["carouselSlide",""],[1,"card","testimonial-item"],[1,"row","g-0"],[1,"col-4","col-md-4"],[1,"testimonial-img"],["alt","testimonial",1,"img-fluid",3,"src"],[1,"col-8","col-md-8"],[1,"card-body"],[1,"card-text"],[1,"text-muted"],[1,"card-title"],[1,"card-text",3,"innerHtml"]],template:function(c,s){c&1&&(a(0,"main",0)(1,"section",1)(2,"div",2)(3,"ol")(4,"li")(5,"a",3),m(6,"Home"),o()(),a(7,"li"),m(8),o()()()(),a(9,"section",4)(10,"div",2)(11,"div",5)(12,"div",6),d(13,"img",7),o(),a(14,"div",8),d(15,"div",9),a(16,"p")(17,"a",10),m(18,"Get a Demo"),o(),m(19," \xA0"),a(20,"a",11),m(21,"Get In Touch"),o()()()()()(),a(22,"section",12)(23,"div",2)(24,"div",5)(25,"div",13)(26,"h2",14),m(27,"Feature Highlights:"),o(),a(28,"div",15),g(29,it,2,1,"ng-container",16),o()()()()(),a(30,"section",17)(31,"div",2)(32,"div",18)(33,"div",19),g(34,lt,3,2,"ng-container",16),o()(),a(35,"div",5)(36,"div",20),d(37,"hr")(38,"div",21)(39,"hr"),o()()()(),g(40,pt,10,1,"section",22),a(41,"section",23)(42,"div",2)(43,"div",5)(44,"div",13)(45,"h3",24)(46,"strong"),m(47,"Hear it from satisfied customers"),o()()()()(),a(48,"owl-carousel-o",25),g(49,gt,1,0,null,16),o(),a(50,"div",26),d(51,"i",27),o(),a(52,"div",28),d(53,"i",29),o(),d(54,"div",30),o()()),c&2&&(r(5),l("routerLink",w(12,Z)),r(3),f(s.page_content.name),r(5),_("alt",s.page_content.name),l("src",s.websiteUrl+(s.page_content==null?null:s.page_content.image),u),r(2),l("innerHTML",s.page_content.top_section,y),r(5),l("routerLink",w(13,tt)),r(9),l("ngForOf",s.submenu),r(5),l("ngForOf",s.features),r(4),l("innerHTML",s.page_content.description,y),r(2),l("ngIf",s.faq.length>0),r(8),l("options",s.customOptions3),r(),l("ngForOf",s.testimonials))},dependencies:[T,k,j,G,B],styles:['@charset "UTF-8";.has-inline-color[_ngcontent-%COMP%]{color:#1e51a4}.container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{margin-top:40px;display:flex;justify-content:center;flex-wrap:wrap;gap:20px}.form-element[_ngcontent-%COMP%]{position:relative;width:150px;height:150px}.form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;height:100%;cursor:pointer;border:0px solid #ddd;background:#fff;box-shadow:0 5px 20px 2px #0000001a;text-align:center;transition:all .2s ease-in-out;border-radius:15px;padding:20px}.form-element[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:50px;color:#555;transition:all .2s ease-in-out;margin:0 auto}.form-element[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:#555;padding:5px 0;transition:all .2s ease-in-out}.form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;width:18px;height:18px;top:8px;left:8px;background:#0d0df1;color:#fff;text-align:center;line-height:18px;font-size:14px;font-weight:600;border-radius:50%;opacity:0;transform:scale(.5);transition:all .2s ease-in-out}.form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:before{opacity:1;transform:scale(1)}.form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{color:#0d0df1}.form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#0d0df1}.form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{border:2px solid #0d0df1}.bg-sky-blue[_ngcontent-%COMP%]{background:#1e51a4;color:#fff}.feature-title[_ngcontent-%COMP%]{color:#f6b024;font-size:35px}.feature-description[_ngcontent-%COMP%]{font-size:25px}.feature-box[_ngcontent-%COMP%]{margin-top:30px}.feature-image[_ngcontent-%COMP%]{width:300px;height:250px;object-fit:contain;object-position:top}.top-section-right[_ngcontent-%COMP%]{text-align:left}.top-section-left[_ngcontent-%COMP%]{text-align:right}.top-section-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:400px}@media only screen and (max-width: 1024px){.top-section-right[_ngcontent-%COMP%], .top-section-left[_ngcontent-%COMP%]{text-align:center}.top-section-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.feature-title[_ngcontent-%COMP%]{font-size:25px}.feature-description[_ngcontent-%COMP%]{font-size:17px}.feature-image[_ngcontent-%COMP%]{width:100%}.form-element[_ngcontent-%COMP%]{width:120px;height:120px}.sub_heading[_ngcontent-%COMP%]{font-size:30px}}.light-blue[_ngcontent-%COMP%]{background:#f1f8ff}.swiper-slide[_ngcontent-%COMP%]{background-color:#fff;padding:20px}.swiper-slide[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.swiper-slide[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;color:#fff}.testimonial-item[_ngcontent-%COMP%]{box-shadow:0 0 4px #888;margin-top:5px;margin-bottom:5px;height:200px}.testimonial-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px;color:#1e51a4}.testimonial-img[_ngcontent-%COMP%]{background-color:#0000000a;display:flex;align-items:center;height:200px;border-radius:7px 0 0 7px}.contact-btn[_ngcontent-%COMP%]{background:#f6b024;border-color:#f6b024}.section-testimonial[_ngcontent-%COMP%]{background:#f1f8ff}']});let t=i;return t})();var ut=[{path:"",pathMatch:"full",component:W}],Y=(()=>{let i=class i{};i.\u0275fac=function(c){return new(c||i)},i.\u0275mod=M({type:i}),i.\u0275inj=C({imports:[S.forChild(ut),S]});let t=i;return t})();var Ht=(()=>{let i=class i{};i.\u0275fac=function(c){return new(c||i)},i.\u0275mod=M({type:i}),i.\u0275inj=C({providers:[P],imports:[q,Y,L,$,z,Q,K]});let t=i;return t})();export{Ht as PageModule};