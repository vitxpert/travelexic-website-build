import './polyfills.server.mjs';
import{a as j,b as z,c as U}from"./chunk-U5SE4IKL.mjs";import"./chunk-GTSSCL6B.mjs";import{q as I,r as F,s as k,t as A,u as R}from"./chunk-QYQL4ELG.mjs";import{Aa as v,B as u,Fa as o,Fb as P,Ga as S,Gb as _,H as g,I as f,Ia as M,Na as y,Nb as D,Ob as x,ba as b,ca as w,ea as m,fa as p,mb as E,oa as h,qa as l,qb as O,sa as t,ta as e,ua as s,zb as T}from"./chunk-UB62UVK5.mjs";import"./chunk-VVCT4QZE.mjs";function W(a,i){if(a&1&&(t(0,"div",13)(1,"div",14)(2,"div",15)(3,"div",16),s(4,"img",17),e()(),t(5,"div",18)(6,"div",19)(7,"p",20)(8,"small",21),o(9),e()(),t(10,"h5",22),o(11),e(),s(12,"p",23),e()()()()),a&2){let c=v().$implicit,r=v();m(4),l("src",r.websiteUrl+c.image,w),m(5),S(r.getDateTime(c.created_at)),m(2),M("",c.name," ( ",c.designation," )"),m(),l("innerHtml",c.description.substring(0,100)+"...",b)}}function V(a,i){a&1&&h(0,W,13,5,"ng-template",12)}var H=(()=>{let i=class i{constructor(r){this.apiService=r,this.testimonials=[],this.websiteUrl="",this.customOptions3={loop:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!0,navSpeed:600,margin:20,navText:["&#8249","&#8250;"],responsive:{0:{items:1},400:{items:1},760:{items:2},1e3:{items:3}},nav:!0},this.websiteUrl=k.websiteUrl}ngOnInit(){this.loadTestimonials()}loadTestimonials(){this.apiService.getTestimonials().subscribe(r=>{this.testimonials=r})}getDateTime(r){let n=new Date(r);return A[n.getMonth()]+" "+n.getDate()+", "+n.getFullYear()}};i.\u0275fac=function(n){return new(n||i)(p(R))},i.\u0275cmp=g({type:i,selectors:[["app-customer-reviews"]],decls:14,vars:2,consts:[["data-aos","fade-up",1,"section-testimonial"],[1,"container"],[1,"row"],[1,"col-md-12"],[1,"mb-5"],[3,"options"],[4,"ngFor","ngForOf"],[1,"testimonial-swiper-button-next"],[1,"ri-arrow-right-s-line"],[1,"testimonial-swiper-button-prev"],[1,"ri-arrow-left-s-line"],[1,"testimonial-swiper-pagination"],["carouselSlide",""],[1,"card","testimonial-item"],[1,"row","g-0"],[1,"col-4","col-md-4"],[1,"testimonial-img"],["alt","",1,"img-fluid",3,"src"],[1,"col-8","col-md-8"],[1,"card-body"],[1,"card-text"],[1,"text-muted"],[1,"card-title"],[1,"card-text",3,"innerHtml"]],template:function(n,d){n&1&&(t(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4)(5,"strong"),o(6,"Hear it from satisfied customers"),e()()()()(),t(7,"owl-carousel-o",5),h(8,V,1,0,null,6),e(),t(9,"div",7),s(10,"i",8),e(),t(11,"div",9),s(12,"i",10),e(),s(13,"div",11),e()),n&2&&(m(7),l("options",d.customOptions3),m(),l("ngForOf",d.testimonials))},dependencies:[E,z,j],styles:[".section-testimonial[_ngcontent-%COMP%]{background:#f1f8ff}.swiper-slide[_ngcontent-%COMP%]{background-color:#fff;padding:20px}.swiper-slide[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.swiper-slide[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;color:#fff}.testimonial-item[_ngcontent-%COMP%]{box-shadow:0 0 4px #888;margin-top:5px;margin-bottom:5px;height:200px}.testimonial-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px;color:#1e51a4}.testimonial-img[_ngcontent-%COMP%]{background-color:#0000000a;display:flex;align-items:center;height:200px;border-radius:7px 0 0 7px}.blogs_text[_ngcontent-%COMP%]{color:#1e51a4}@media only screen and (max-width: 768px){.blogs_text[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}}"]});let a=i;return a})();var B=()=>["/"],N=(()=>{let i=class i{constructor(r,n){this.title=r,this.meta=n}ngOnInit(){this.loadSEO("Travelexic - About Us Page","Travelexics test content.","")}loadSEO(r,n,d){this.title.setTitle(r),this.meta.updateTag({name:"title",content:r},'name="title"'),this.meta.updateTag({name:"description",content:n},'name="description"'),this.meta.updateTag({name:"twitter:title",content:r},'name="twitter:title"'),this.meta.updateTag({name:"twitter:description",content:n},'name="twitter:description"'),this.meta.updateTag({name:"twitter:image",content:d},'name="twitter:image"'),this.meta.updateTag({name:"DC.title",content:r},'name="DC.title"'),this.meta.updateTag({name:"DC.description",content:n},'name="DC.description"'),this.meta.updateTag({property:"og:title",content:r},'property="og:title"'),this.meta.updateTag({property:"og:description",content:n},'property="og:description"'),this.meta.updateTag({property:"og:image",content:d},'property="og:image"')}};i.\u0275fac=function(n){return new(n||i)(p(_),p(P))},i.\u0275cmp=g({type:i,selectors:[["app-about-us"]],decls:84,vars:2,consts:[["id","main"],["id","breadcrumbs",1,"breadcrumbs"],[1,"container"],[3,"routerLink"],[1,"AboutSec"],[1,"row"],[1,"col-md-6"],[1,"about-us-heading"],["src","assets/img/aboutus.png","width","100%",1,"mt-md-5"],[1,"foundersSec"],[1,"col-md-3","col-3","col-xs-3"],["src","assets/img/mission.png","width","100px"],[1,"col-md-9","col-9","col-xs-9"],["src","assets/img/vision.png","width","100%"],[1,"col-md-12"],[1,"mt-5","text-center","mb-4"],[1,"col-md-4"],[1,"founder-team"],[1,"col-md-4","col-4"],["src","assets/img/vs-chauhan.png","width","100%"],[1,"col-md-8","col-8"],["src","assets/img/neehardev.png","width","100%"],["src","assets/img/dhruv-chauhan.png","width","100%"]],template:function(n,d){n&1&&(t(0,"main",0)(1,"section",1)(2,"div",2)(3,"ol")(4,"li")(5,"a",3),o(6,"Home"),e()(),t(7,"li"),o(8,"About Us"),e()()()(),t(9,"section",4)(10,"div",2)(11,"div",5)(12,"div",6)(13,"h1",7),o(14,"ABOUT US"),e(),t(15,"p"),o(16," Travelexic goes beyond being a simple travel management software or a travel CRM. It helps tour and MICE/Group operators connect the dots, facilitating seamless communication and effective collaboration across touchpoints of the travel lifecycle \u2013 providing an unparalleled travel experience. We extend the reach of our platform to fulfillment teams, both in-house and outsourced, to ensure communication is never a barrier to deliver service excellence. "),e(),t(17,"p"),o(18," All touchpoints of a travel lifecycle have been optimized for efficiency and quality. We are innovators and are constantly pushing the envelope through the use of future technology including AI/ ML, hybrid applications, QR technology, IOT et al. Our endeavor is to remain the best travel management software and offer novel solutions to the most pressing problems for tour and MICE operators. "),e()(),t(19,"div",6),s(20,"img",8),e()()()(),t(21,"section",9)(22,"div",2)(23,"div",5)(24,"div",6)(25,"div",5)(26,"div",10),s(27,"img",11),e(),t(28,"div",12)(29,"h3"),o(30,"Mission -"),e(),t(31,"p"),o(32," At Travelexic, our mission is to provide the necessary tools that help our partners augment their capabilities by increasing individual productivity, enabling superior collaboration and delivering a consistently enhanced standard of service. "),e()()()(),t(33,"div",6)(34,"div",5)(35,"div",10),s(36,"img",13),e(),t(37,"div",12)(38,"h3"),o(39,"Vision -"),e(),t(40,"p"),o(41," To create an interconnected ecosystem of fulfilment partners, enabling tour and MICE operators to deliver an unparalleled experience to the traveler. "),e()()()()(),t(42,"div",5)(43,"div",14)(44,"h3",15),o(45,"Founding Team -"),e()()(),t(46,"div",5)(47,"div",16)(48,"div",17)(49,"div",5)(50,"div",18),s(51,"img",19),e(),t(52,"div",20)(53,"h5"),o(54,"Virakt Chauhan"),e(),t(55,"span"),o(56,"Co-Founder Travelexic"),e(),t(57,"p"),o(58,"He finished his schooling at Modern School, New Delhi and topped It with an engineering degree."),e()()()()(),t(59,"div",16)(60,"div",17)(61,"div",5)(62,"div",18),s(63,"img",21),e(),t(64,"div",20)(65,"h5"),o(66,"Neehar Ranjan"),e(),t(67,"span"),o(68,"Co-founder, CTO Travelexic"),e(),t(69,"p"),o(70,"With over 20 years of cross-cultural experience in the diverse areas of Technology Consulting"),e()()()()(),t(71,"div",16)(72,"div",17)(73,"div",5)(74,"div",18),s(75,"img",22),e(),t(76,"div",20)(77,"h5"),o(78,"Dhruv Chauhan"),e(),t(79,"span"),o(80,"Co-founder, CEO Travelexic"),e(),t(81,"p"),o(82,"While his batch mates were busy doing rounds of the college placement cell, he was still."),e()()()()()()()(),s(83,"app-customer-reviews"),e()),n&2&&(m(5),l("routerLink",y(1,B)))},dependencies:[D,H],styles:[".AboutSec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}.about-us-heading[_ngcontent-%COMP%]{font-size:36px;color:#f6b024;font-weight:700}.AboutSec[_ngcontent-%COMP%]{background:#f1f8ff}.foundersSec[_ngcontent-%COMP%]{background:#1e51a4}.foundersSec[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#f6b024}.foundersSec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff}.founder-team[_ngcontent-%COMP%]{background:#fff;padding:10px;border-radius:5px;box-shadow:1px 1px 5px #0009;margin-bottom:20px}.founder-team[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px}.founder-team[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;color:#555}"]});let a=i;return a})();var G=[{path:"",pathMatch:"full",component:N}],L=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=f({type:i}),i.\u0275inj=u({imports:[x.forChild(G),x]});let a=i;return a})();var ue=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=f({type:i}),i.\u0275inj=u({imports:[O,I,T,F,L,U]});let a=i;return a})();export{ue as AboutUsModule};