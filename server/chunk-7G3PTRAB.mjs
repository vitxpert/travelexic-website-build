import './polyfills.server.mjs';
import{q as S,r as F,s as P,u as g}from"./chunk-JNDTF3GI.mjs";import{B as d,Fa as c,Fb as x,Ga as M,Gb as D,H as v,I as l,Jb as T,Na as u,Nb as O,Ob as f,ba as w,ca as y,ea as r,fa as s,qa as p,qb as b,sa as a,ta as m,ua as h,zb as C}from"./chunk-UB62UVK5.mjs";import"./chunk-VVCT4QZE.mjs";var L=()=>["/"],U=()=>["/blogs"],j=(()=>{let t=class t{constructor(i,e,o,E){this.activatedRoute=i,this.title=e,this.meta=o,this.apiService=E,this.url="",this.dataDetails={},this.websiteUrl="",this.websiteUrl=P.websiteUrl}ngOnInit(){this.url=this.activatedRoute.snapshot.params.url,this.loadBlog(this.url)}loadBlog(i){this.apiService.getBlog(i).subscribe(e=>{this.loadSEO(e.title,e.seo_description,this.websiteUrl+e.image),this.dataDetails=e,console.warn(this.dataDetails)})}loadSEO(i,e,o){this.title.setTitle(i),this.meta.updateTag({name:"title",content:i},'name="title"'),this.meta.updateTag({name:"description",content:e},'name="description"'),this.meta.updateTag({name:"twitter:title",content:i},'name="twitter:title"'),this.meta.updateTag({name:"twitter:description",content:e},'name="twitter:description"'),this.meta.updateTag({name:"twitter:image",content:o},'name="twitter:image"'),this.meta.updateTag({name:"DC.title",content:i},'name="DC.title"'),this.meta.updateTag({name:"DC.description",content:e},'name="DC.description"'),this.meta.updateTag({property:"og:title",content:i},'property="og:title"'),this.meta.updateTag({property:"og:description",content:e},'property="og:description"'),this.meta.updateTag({property:"og:image",content:o},'property="og:image"')}};t.\u0275fac=function(e){return new(e||t)(s(T),s(D),s(x),s(g))},t.\u0275cmp=v({type:t,selectors:[["app-blog"]],decls:22,vars:7,consts:[["id","main"],["id","breadcrumbs",1,"breadcrumbs"],[1,"container"],[3,"routerLink"],[2,"text-align","center"],["id","blog",1,"blogD"],["data-aos","fade-up",1,"container"],[1,"row"],["alt","blog_image","id","Featured_img_details",1,"img-fluid",3,"src"],[1,"entry","entry-single"],[1,"entry-title",2,"text-align","center"],["href","#"],[1,"entry-content"],[2,"text-align","center",3,"innerHTML"]],template:function(e,o){e&1&&(a(0,"main",0)(1,"section",1)(2,"div",2)(3,"ol")(4,"li")(5,"a",3),c(6,"Home"),m()(),a(7,"li")(8,"a",3),c(9,"Blog"),m()()(),a(10,"h2",4),c(11,"Blog Details"),m()()(),a(12,"section",5)(13,"div",6)(14,"div",7),h(15,"img",8),a(16,"article",9)(17,"h1",10)(18,"a",11),c(19),m()(),a(20,"div",12),h(21,"div",13),m()()()()()()),e&2&&(r(5),p("routerLink",u(5,L)),r(3),p("routerLink",u(6,U)),r(7),p("src",o.websiteUrl+o.dataDetails.image,y),r(4),M(o.dataDetails.title),r(2),p("innerHTML",o.dataDetails.description,w))},dependencies:[O],styles:["#Featured_img_details[_ngcontent-%COMP%]{height:550px!important;width:100%!important}.blogD[_ngcontent-%COMP%]{padding:20px}.entry-title[_ngcontent-%COMP%]{padding-top:2rem}figure[_ngcontent-%COMP%]{border:2px solid!important}.wp-image-45[_ngcontent-%COMP%]{width:50%!important}.wp-block-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto!important;max-width:100%!important;vertical-align:bottom!important}img[img][_ngcontent-%COMP%]{width:200px;aspect-ratio:auto 510/340;height:340px}@media (max-width: 500px){#Featured_img_details[_ngcontent-%COMP%]{height:200px!important;width:100%!important}}"]});let n=t;return n})();var k=[{path:"",pathMatch:"full",component:j}],I=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l({type:t}),t.\u0275inj=d({imports:[f.forChild(k),f]});let n=t;return n})();var Z=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l({type:t}),t.\u0275inj=d({providers:[g],imports:[b,S,C,F,I]});let n=t;return n})();export{Z as BlogModule};