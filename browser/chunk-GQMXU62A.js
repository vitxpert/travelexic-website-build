import{a as G,b as U,c as j}from"./chunk-AID4KXPU.js";import"./chunk-WXI33M2S.js";import{q as I,r as L,s as z,t as R,u as E}from"./chunk-ZODVWAOU.js";import{$ as s,Aa as i,Ca as M,E as h,Ia as p,J as w,Ja as A,K as g,Wa as P,Y as y,Z as S,_a as _,aa as u,db as O,fa as b,hb as k,ib as D,ja as v,la as m,na as e,oa as t,ob as F,pa as r,pb as f,qa as C,ra as T,va as x}from"./chunk-PJ5NDNPN.js";var W=()=>["/about-us"],q=()=>["/product/mice-solutions"],Q=()=>["/product/tour-operator-solution"],Y=()=>["/product/event-planner-solution"],Z=()=>["/product/urplan2"],$=o=>[o];function K(o,n){if(o&1&&(C(0),e(1,"div",66)(2,"div",67)(3,"div",68),r(4,"img",69),t(),e(5,"h4",70),i(6),t(),r(7,"div",71),e(8,"a",72),i(9,"Get Started"),t()()(),T()),o&2){let c=n.$implicit,a=x();s(4),m("src",a.websiteUrl+c.image,S),s(2),M(" ",c.title," "),s(),m("innerHTML",c.description,y),s(),m("routerLink",A(4,$,"/"+c.link))}}function J(o,n){if(o&1&&r(0,"img",74),o&2){let c=x().$implicit,a=x();m("src",a.websiteUrl+c.logo,S)}}function X(o,n){o&1&&v(0,J,1,1,"ng-template",73)}var N=(()=>{let n=class n{constructor(a,l,d,V){this.title=a,this.meta=l,this.ngZone=d,this.apiService=V,this.partners=[],this.blogs=[],this.products=[],this.testimonials=[],this.websiteUrl="",this.customOptions={loop:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!1,navSpeed:600,navText:["&#8249","&#8250;"],responsive:{0:{items:1},400:{items:2},760:{items:5},1e3:{items:5}},nav:!1},this.customOptions2={loop:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!0,navSpeed:600,margin:10,navText:["&#8249","&#8250;"],responsive:{0:{items:1},400:{items:1},760:{items:2},1e3:{items:3}},nav:!0},this.customOptions3={loop:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!0,navSpeed:600,margin:20,navText:["&#8249","&#8250;"],responsive:{0:{items:1},400:{items:1},760:{items:2},1e3:{items:3}},nav:!0},this.websiteUrl=z.websiteUrl}ngOnInit(){this.loadSEO("Travelexic - Home Page","Powerful tools for MICE, Tour and Conference operators enabling them to scale their business, drive operational efficiencies, and elevate customer experience. Tools for Tour Operators, Tools for MICE Operators, Tools for Corporate Event Planners, Tools for Professional Conference Organizers",""),this.loadPartners(),this.loadBlogs(),this.loadProducts(),this.loadTestimonials()}loadPartners(){this.apiService.getPartners().subscribe(a=>{this.partners=a})}loadBlogs(){this.apiService.getHomeBlogs().subscribe(a=>{this.blogs=a})}loadProducts(){this.apiService.getProducts().subscribe(a=>{this.products=a})}loadTestimonials(){this.apiService.getTestimonials().subscribe(a=>{this.testimonials=a})}loadSEO(a,l,d){this.title.setTitle(a),this.meta.updateTag({name:"title",content:a},'name="title"'),this.meta.updateTag({name:"description",content:l},'name="description"'),this.meta.updateTag({name:"twitter:title",content:a},'name="twitter:title"'),this.meta.updateTag({name:"twitter:description",content:l},'name="twitter:description"'),this.meta.updateTag({name:"twitter:image",content:d},'name="twitter:image"'),this.meta.updateTag({name:"DC.title",content:a},'name="DC.title"'),this.meta.updateTag({name:"DC.description",content:l},'name="DC.description"'),this.meta.updateTag({property:"og:title",content:a},'property="og:title"'),this.meta.updateTag({property:"og:description",content:l},'property="og:description"'),this.meta.updateTag({property:"og:image",content:d},'property="og:image"')}getDateTime(a){let l=new Date(a);return R[l.getMonth()]+" "+l.getDate()+", "+l.getFullYear()}};n.\u0275fac=function(l){return new(l||n)(u(D),u(k),u(b),u(E))},n.\u0275cmp=w({type:n,selectors:[["app-home"]],decls:380,vars:13,consts:[["id","hero",1,"d-flex","justify-content-center","align-items-center"],[1,"container"],[1,"row"],[1,"col-md-6"],["src","assets/img/new_images/slider_image.png",1,"slider-bg","m-5"],[1,"slider-text"],["id","slider-text1",1,"col-md-10"],["id","slider-vector-img",1,"col-md-2"],["src","assets/img/new_images/Group.png","width","100px",1,"slider-vector"],["id","slider-text2",1,"col-md-12"],["id","slider-btn",1,"col-md-12"],["type","button","data-bs-target","#myModal","data-bs-toggle","modal",1,"slider-button"],["id","main"],["id","icon-boxes",1,"icon-boxes"],[1,"row","icon-div"],[4,"ngFor","ngForOf"],["id","about",1,"about"],["data-aos","fade-up",1,"container"],[1,"col-md-6","about-div"],[1,"section-title"],[1,"about-heading"],[1,"about-paragraph"],[1,"about-us-text"],[1,"btn","btn-warning","about-know_more_btn",3,"routerLink"],["src","assets/img/new_images/about_us.png",1,"about-us-img"],["id","clients","data-aos","fade-up",1,"clients"],[1,"col-md-3","partner-div"],[1,"partner-p"],[1,"col-md-9"],[1,"clients-slider"],[3,"options"],["id","about2",1,"about","why-us-blue"],["data-aos","fade-left",1,"col-md-8","about-div"],[1,"why-us-heading"],[1,"why-us-sub-heading"],[1,"products-text"],[1,"yellow"],["data-aos","fade-right",1,"col-md-4"],["src","assets/img/new_images/mice.png",1,"products_image"],["data-aos","fade-up",1,"row","mice-list"],[1,"col-md-3"],["src","assets/img/new_images/mice-vector.png","width","330","alt","",1,"mice-vector"],[1,"list-item"],["src","assets/img/new_images/mice-vector2.png","width","500px","alt","",1,"mice-vector2"],[1,"col-md-12"],[1,"text-center","pt-4"],[1,"p-2","text-white"],[1,"learn-more-btn",3,"routerLink"],[1,"why-us","py-5"],[1,"tour-data"],[1,"why-us-sub-heading-white"],[1,"products-text-white"],["src","assets/img/new_images/tour.png",1,"tour_image"],["data-aos","fade-up",1,"row","mice-list-blue"],["src","assets/img/new_images/tour-vector.png","width","100%","alt",""],[1,"list-item-white"],[1,"p-2","line"],[1,"learn-more-yellow-btn",3,"routerLink"],["id","about3",1,"about","why-us-blue"],["src","assets/img/new_images/event.png",1,"event-img"],["src","assets/img/new_images/event-vector.png","alt","",1,"event-vector"],["src","assets/img/new_images/urplan.png","width","350"],[1,"col-md-4"],["src","assets/img/new_images/urplan-vector.png","alt","",1,"urplan-vector"],[1,"col-md-8"],[1,"learn-more-btn","learn-more-yellow-btn",3,"routerLink"],["data-aos","fade-up",1,"col-md-6","col-lg-3","d-flex","align-items-stretch","mb-5","mb-lg-0"],[1,"icon-box"],[1,"icon"],[1,"product-icn",3,"src"],[1,"title"],[1,"description",3,"innerHTML"],[1,"SelfBtn",3,"routerLink"],["carouselSlide",""],["alt","",1,"partner-img",3,"src"]],template:function(l,d){l&1&&(e(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),r(4,"img",4),t(),e(5,"div",3)(6,"div",5)(7,"div",2)(8,"div",6)(9,"h1"),i(10,"Everything you need to organize"),t()(),e(11,"div",7),r(12,"img",8),t(),e(13,"div",9)(14,"h4"),i(15," Tours, Events, and Conferences "),t()(),e(16,"div",10)(17,"button",11),i(18,"Get a Demo"),t()()()()()()()(),e(19,"main",12)(20,"section",13)(21,"div",1)(22,"div",14),v(23,K,10,6,"ng-container",15),t()()(),e(24,"section",16)(25,"div",17)(26,"div",2)(27,"div",18)(28,"div",19)(29,"h2",20),i(30,"Who we are:"),t(),e(31,"p",21),i(32," Travelexic is a "),e(33,"span",22),i(34," SaaS travel and event management solution "),t(),i(35," that leverages AI and cutting-edge automation to assist partners through various stages of sales, planning, and execution. Our platform empowers partners with tools to deliver consistently high-quality experiences, optimizing processes for efficiency, control, ease, and scalability "),t(),r(36,"br"),e(37,"a",23),i(38,"About us"),t()()(),e(39,"div",3),r(40,"img",24)(41,"br"),t()()()(),e(42,"section",25)(43,"div",1)(44,"div",2)(45,"div",26)(46,"p",27),i(47,"Our most valuable assets"),t(),e(48,"h2"),i(49,"OUR PARTNERS"),t()(),e(50,"div",28)(51,"div",1)(52,"div",29)(53,"owl-carousel-o",30),v(54,X,1,0,null,15),t()()()()()()(),e(55,"section",31)(56,"div",1)(57,"div",2)(58,"div",32)(59,"h2",33)(60,"strong"),i(61,"Tools For MICE Operators-"),t()(),e(62,"h4",34),i(63,"Transform Your Operations and Enhance "),r(64,"br"),i(65," Experiences with our MICE operator tools\xA0"),t(),e(66,"p",35),i(67," Travelexic's MICE and Group Management Solution equips you with advanced "),e(68,"span",36),i(69," MICE Operator "),t(),i(70," tools to grow your business, drive operational efficiencies, and elevate the overall experience for your clients. "),t()(),e(71,"div",37),r(72,"img",38)(73,"br"),t()(),e(74,"div",39)(75,"div",40),r(76,"img",41),t(),e(77,"div",28)(78,"div",2)(79,"div",40)(80,"ul")(81,"li",42)(82,"h5"),i(83,"Tour Management App:"),t(),e(84,"p"),i(85,"Manage tours effortlessly with our dedicated app."),t()(),e(86,"li",42)(87,"h5"),i(88,"Cost & On-Ground Expense Management Tools:"),t(),e(89,"p"),i(90,"Keep track of costs and manage on-ground expenses efficiently."),t()(),e(91,"li",42)(92,"h5"),i(93,"Reports & Event Analytics:"),t(),e(94,"p"),i(95,"Gain valuable insights with comprehensive reporting and analytics."),t()()()(),e(96,"div",40)(97,"ul")(98,"li",42)(99,"h5"),i(100,"Event Registration & Nomination Management:"),t(),e(101,"p"),i(102,"Simplify event registration and nomination processes."),t()(),e(103,"li",42)(104,"h5"),i(105,"AI-Powered Smart Forms:"),t(),e(106,"p"),i(107,"Collect information efficiently with intelligent, automated forms"),t()(),e(108,"li",42)(109,"h5"),i(110,"Document Sharing via Multiple Channels:"),t(),e(111,"p"),i(112,"Share documents seamlessly using email, WhatsApp, and notifications."),t()()()(),e(113,"div",40)(114,"ul")(115,"li",42)(116,"h5"),i(117,"Multi-Channel Communication:"),t(),e(118,"p"),i(119,"Engage with attendees through email, WhatsApp, and in-app notifications"),t()(),e(120,"li",42)(121,"h5"),i(122,"Multi-Functional Event Attendee App"),t(),e(123,"p"),i(124,"Enhance attendee experience with a versatile event app"),t()(),r(125,"img",43),t()(),e(126,"div",40)(127,"ul")(128,"li",42)(129,"h5"),i(130,"Comprehensive Group Lead Management System:"),t(),e(131,"p"),i(132,"Streamline lead tracking and management for group events."),t()(),e(133,"li",42)(134,"h5"),i(135,"Itinerary Builder:"),t(),e(136,"p"),i(137,"Easily create and manage detailed itineraries for groups and events.\xA0"),t()()()()()()(),e(138,"div",2)(139,"div",44)(140,"div",45),r(141,"hr",46),e(142,"a",47),i(143,"View Product "),t()()()()()(),e(144,"section",48)(145,"div",1)(146,"div",2)(147,"div",32)(148,"div",49)(149,"h2",33)(150,"strong"),i(151,"Tools For Tour Operators -"),t()(),r(152,"br"),e(153,"h4",50),i(154,"Optimize Sales, Operations, and Post-Sale "),r(155,"br"),i(156," Services with our tour operator tools\xA0\xA0"),t(),e(157,"p",51),i(158," Discover how Travelexic's comprehensive "),e(159,"span",36),i(160," online travel tools for tour operators "),t(),i(161," streamline your travel and event management processes, ensuring efficiency and exceptional service delivery. "),t()()(),e(162,"div",37),r(163,"img",52)(164,"br"),t()(),e(165,"div",53)(166,"div",40),r(167,"img",54),t(),e(168,"div",28)(169,"div",2)(170,"div",40)(171,"ul")(172,"li",55)(173,"h4"),i(174,"Comprehensive Lead Management System:"),t(),e(175,"h6"),i(176,"Engage with attendees through email, WhatsApp, and notifications.\xA0"),t()(),e(177,"li",55)(178,"h4"),i(179,"Cost Sheet Management:"),t(),e(180,"h6"),i(181,"Provide a seamless experience with our versatile event app.\xA0"),t()()()(),e(182,"div",40)(183,"ul")(184,"li",55)(185,"h4"),i(186,"Post Booking Travel Concierge APP:"),t(),e(187,"h6"),i(188,"Build custom event microsites effortlessly."),t()(),e(189,"li",55)(190,"h4"),i(191,"Itinerary Management"),t(),e(192,"h6"),i(193,"Gain insights with comprehensive reporting and analytics."),t()()()(),e(194,"div",40)(195,"ul")(196,"li",55)(197,"h4"),i(198,"360\xB0 Customer Profile:"),t(),e(199,"h6"),i(200,"Efficiently manage and track all incoming event leads."),t()(),e(201,"li",55)(202,"h4"),i(203,"VISA Process Management:"),t(),e(204,"h6"),i(205," Quickly create and send professional quotations.\xA0"),t()()()(),e(206,"div",40)(207,"ul")(208,"li",55)(209,"h4"),i(210,"Quotation & Voucher Generator:"),t(),e(211,"h6"),i(212,"Efficiently track and manage costs and on-ground expenses.\xA0"),t()(),e(213,"li",55)(214,"h4"),i(215,"Payment Tracker:"),t(),e(216,"h6"),i(217,"Manage event tours with ease.\xA0"),t()()()()()()(),e(218,"div",2)(219,"div",44)(220,"div",45),r(221,"hr",56),e(222,"a",57),i(223,"View Product "),t()()()()()(),e(224,"section",58)(225,"div",1)(226,"div",2)(227,"div",37),r(228,"img",59)(229,"br"),t(),e(230,"div",32)(231,"h2",33)(232,"strong"),i(233,"Tools For Corporate Event Planners\xA0-"),t()(),e(234,"h4",34),i(235,"Effortless Registrations and Elevated Attendee Experiences with our corporate event planner tools\xA0"),t(),e(236,"p",35),i(237," Travelexic provides powerful tools to simplify event registrations and enhance the overall experience for your attendees. "),t()()(),e(238,"div",39)(239,"div",40)(240,"ul")(241,"li",42)(242,"h4"),i(243,"Track Incoming Leads:"),t(),e(244,"h6"),i(245,"Efficiently manage and track all incoming event leads."),t()(),e(246,"li",42)(247,"h4"),i(248,"Send Quotations with Ease:"),t(),e(249,"h6"),i(250,"Quickly create and send professional quotations.\xA0"),t()(),e(251,"li",42)(252,"h4"),i(253,"Delegate, Speaker & Exhibitor Registrations:"),t(),e(254,"h6"),i(255,"Simplify the registration process for delegates, speakers, and exhibitors.\xA0"),t()()()(),e(256,"div",40)(257,"ul")(258,"li",42)(259,"h4"),i(260,"Multi-Channel Communication:"),t(),e(261,"h6"),i(262,"Engage with attendees through email, WhatsApp, and notifications.\xA0"),t()(),e(263,"li",42)(264,"h4"),i(265,"Multi-Functional Event Attendee App:"),t(),e(266,"h6"),i(267,"Provide a seamless experience with our versatile event app.\xA0"),t()(),e(268,"li",42)(269,"h4"),i(270,"Tour Management App:"),t(),e(271,"h6"),i(272,"Manage event tours with ease.\xA0"),t()()()(),e(273,"div",40)(274,"ul")(275,"li",42)(276,"h4"),i(277,"Cost & On-Ground Expense Management Tools:"),t(),e(278,"h6"),i(279,"Efficiently track and manage costs and on-ground expenses.\xA0"),t()(),e(280,"li",42)(281,"h4"),i(282,"Reports & Event Analytics:"),t(),e(283,"h6"),i(284,"Gain insights with comprehensive reporting and analytics."),t()()()(),e(285,"div",40)(286,"ul")(287,"li",42)(288,"h4"),i(289,"Document Collection and Distribution Management:"),t(),e(290,"h6"),i(291,"Streamline the collection and distribution of important documents.\xA0"),t()(),e(292,"li",42)(293,"h4"),i(294,"DIY Event Microsite Builder:"),t(),e(295,"h6"),i(296,"Build custom event microsites effortlessly."),t()(),r(297,"img",60),t()()(),e(298,"div",2)(299,"div",44)(300,"div",45),r(301,"hr",46),e(302,"a",47),i(303,"View Product "),t()()()()()(),e(304,"section",48)(305,"div",1)(306,"div",2)(307,"div",32)(308,"h2",33)(309,"strong"),i(310,"URPLAN -"),t()(),e(311,"h4",50),i(312,"Your Ultimate Event Attendee APP"),t(),e(313,"p",51),i(314," Discover the power of seamless travel with our Event Attendee App, designed to cater to every need of MICE and Tour Operators. This versatile app not only ensures a paperless travel experience but also personalizes your journey, keeping you updated and engaged every step of the way.\xA0 "),t()(),e(315,"div",37),r(316,"img",61)(317,"br"),t()(),e(318,"div",53)(319,"div",62),r(320,"img",63),t(),e(321,"div",64)(322,"div",2)(323,"div",62)(324,"ul")(325,"li",55)(326,"h4"),i(327,"Destination Travel Guides:"),t(),e(328,"h6"),i(329,"Access comprehensive guides for your travel destinations."),t()(),e(330,"li",55)(331,"h4"),i(332,"Personalization:"),t(),e(333,"h6"),i(334,"Customize the app to match the theme of your event.\xA0"),t()(),e(335,"li",55)(336,"h4"),i(337,"Real-time Updates:"),t(),e(338,"h6"),i(339,"Receive trip updates through instant notifications."),t()(),e(340,"li",55)(341,"h4"),i(342,"Chat Module:"),t(),e(343,"h6"),i(344,"Communicate easily with an in-app chat feature.\xA0"),t()()()(),e(345,"div",62)(346,"ul")(347,"li",55)(348,"h4"),i(349,"Targeted Communication:"),t(),e(350,"h6"),i(351,"Send broadcast messages for precise communication.\xA0"),t()(),e(352,"li",55)(353,"h4"),i(354,"Smart Form Integration:"),t(),e(355,"h6"),i(356,"Collect data seamlessly with integrated smart forms.\xA0"),t()(),e(357,"li",55)(358,"h4"),i(359,"Engagement Tools:"),t(),e(360,"h6"),i(361,"Enhance interaction with polls, word clouds, and feedback forms.\xA0"),t()()()(),e(362,"div",62)(363,"ul")(364,"li",55)(365,"h4"),i(366,"Travel Tools:"),t(),e(367,"h6"),i(368,"Utilize essential tools like weather forecasts and a currency converter.\xA0"),t()(),e(369,"li",55)(370,"h4"),i(371,"Paperless Travel:"),t(),e(372,"h6"),i(373,"Share dynamic itineraries, documents, and contacts effortlessly.\xA0"),t()()()()()()(),e(374,"div",2)(375,"div",44)(376,"div",45),r(377,"hr",56),e(378,"a",65),i(379,"View Product "),t()()()()()()()),l&2&&(s(23),m("ngForOf",d.products),s(14),m("routerLink",p(8,W)),s(16),m("options",d.customOptions),s(),m("ngForOf",d.partners),s(88),m("routerLink",p(9,q)),s(80),m("routerLink",p(10,Q)),s(80),m("routerLink",p(11,Y)),s(76),m("routerLink",p(12,Z)))},dependencies:[P,F,U,G],styles:[".swiper-slide[_ngcontent-%COMP%]{background-color:#fff;padding:20px}.swiper-slide[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.swiper-slide[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;color:#fff}.testimonial-item[_ngcontent-%COMP%]{box-shadow:0 0 4px #888;margin-top:5px;margin-bottom:5px;height:200px}.testimonial-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px;color:#1e51a4}.testimonial-img[_ngcontent-%COMP%]{background-color:#0000000a;display:flex;align-items:center;height:200px;border-radius:7px 0 0 7px}.blogs_text[_ngcontent-%COMP%]{color:#1e51a4}@media only screen and (max-width: 768px){.blogs_text[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}}"]});let o=n;return o})();var ee=[{path:"",pathMatch:"full",component:N}],H=(()=>{let n=class n{};n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=g({type:n}),n.\u0275inj=h({imports:[f.forChild(ee),f]});let o=n;return o})();var fe=(()=>{let n=class n{};n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=g({type:n}),n.\u0275inj=h({providers:[E],imports:[_,I,O,L,H,j]});let o=n;return o})();export{fe as HomeModule};
