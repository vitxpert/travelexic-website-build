import{a as B,c as j,d as T,e as L,f as U,h as k,i as D,q as H,r as O,s as A,u}from"./chunk-CHB5W25F.js";import{$ as a,Aa as l,Ba as f,E as d,J as h,Ja as M,K as p,Wa as w,Y as x,Z as y,_a as N,aa as S,db as E,ja as C,la as c,na as i,nb as I,oa as n,ob as g,pa as m,s as b,va as F}from"./chunk-DKIE3REA.js";var G=t=>[t];function W(t,e){if(t&1&&(i(0,"div",18)(1,"article",19)(2,"div",20),m(3,"img",21),n(),i(4,"div",22)(5,"ul",23)(6,"li"),m(7,"i",24),l(8),n(),i(9,"li"),m(10,"i",25),l(11),n()()(),i(12,"h6",26),l(13),n(),i(14,"div",27),m(15,"div",28),i(16,"div",29)(17,"a",30),l(18,"Read More"),n()()()()()),t&2){let s=e.$implicit,r=F();a(3),c("src",r.websiteUrl+s.image,y),a(5),f(s.author_name),a(3),f(s.created_at),a(2),f(s.title),a(2),c("innerHTML",s.description.substring(0,230)+"...",x),a(2),c("routerLink",M(6,G,"/blog/"+s.custom_url))}}var z=(()=>{let e=class e{constructor(r){this.apiService=r,this.blogs=[],this.websiteUrl="",this.term=new U,this.websiteUrl=A.websiteUrl}ngOnInit(){this.loadBlogs(),this.term.valueChanges.pipe(b(500)).subscribe(r=>{this.apiService.blogSearch(r).subscribe(o=>{this.blogs=o})})}loadBlogs(){this.apiService.getBlogs().subscribe(r=>{this.blogs=r})}onInput(){}};e.\u0275fac=function(o){return new(o||e)(S(u))},e.\u0275cmp=h({type:e,selectors:[["app-blogs"]],decls:21,vars:2,consts:[["id","main"],["id","breadcrumbs",1,"breadcrumbs"],[1,"container"],[2,"text-align","center"],["id","blog",1,"blog"],["data-aos","fade-up",1,"container"],["row","row"],[1,"col-lg-12"],[1,"sidebar"],[1,"sidebar-title"],[1,"sidebar-item","search-form"],["type","text",3,"formControl"],["type","submit"],[1,"bi","bi-search"],[1,""],[1,"row","entries",2,"display","flex"],[1,"col-lg-12","dataBox"],["class","col-lg-4 dataBox",4,"ngFor","ngForOf"],[1,"col-lg-4","dataBox"],[1,"entry","Counts"],[1,"entry-img"],["id","Featured_img","alt","",1,"img-fluid",3,"src"],[1,"entry-meta"],[1,"d-flex"],[1,"bi","bi-person"],[1,"bi","bi-clock"],[1,"entry-title",2,"text-align","center"],[1,"entry-content",2,"text-align","center"],[1,"imgWp",2,"color","#2c3034",3,"innerHTML"],[1,"read-more",2,"display","flex","justify-content","center"],[3,"routerLink"]],template:function(o,v){o&1&&(i(0,"main",0)(1,"section",1)(2,"div",2)(3,"h2",3),l(4," Travelexic Blog"),n()()(),i(5,"section",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"h3",9),l(11,"Search"),n(),i(12,"div",10)(13,"form"),m(14,"input",11),i(15,"button",12),m(16,"i",13),n()()()()()(),i(17,"div",14)(18,"div",15),m(19,"div",16),C(20,W,19,8,"div",17),n()()()()()),o&2&&(a(14),c("formControl",v.term),a(6),c("ngForOf",v.blogs))},dependencies:[w,k,B,j,T,L,D,I]});let t=e;return t})();var $=[{path:"",pathMatch:"full",component:z}],V=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=p({type:e}),e.\u0275inj=d({imports:[g.forChild($),g]});let t=e;return t})();var se=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=p({type:e}),e.\u0275inj=d({providers:[u],imports:[N,H,E,O,V]});let t=e;return t})();export{se as BlogsModule};
