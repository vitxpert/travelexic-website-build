import{a as G,b as j,c as B}from"./chunk-AID4KXPU.js";import"./chunk-WXI33M2S.js";import{q as H,r as z,s as U,t as R,u as w}from"./chunk-ZODVWAOU.js";import{$ as l,Aa as i,Ba as f,Ca as M,Da as A,E as x,Ia as g,J as y,Ja as P,K as E,Wa as O,Y as S,Z as v,_a as k,aa as h,db as D,fa as _,hb as I,ib as F,ja as p,la as m,na as t,oa as e,ob as L,pa as n,pb as b,qa as C,ra as T,va as u}from"./chunk-PJ5NDNPN.js";var Q=()=>["/about-us"],Y=()=>["/product/mice-solutions"],$=()=>["/product/tour-operator-solution"],K=()=>["/product/event-planner-solution"],Z=()=>["/product/urplan2"],J=()=>["/contact-us"],X=a=>[a];function ee(a,o){if(a&1&&(C(0),t(1,"div",82)(2,"div",83)(3,"div",84),n(4,"img",85),e(),t(5,"h4",86),i(6),e(),n(7,"div",87),t(8,"a",88),i(9,"Get Started"),e()()(),T()),a&2){let d=o.$implicit,r=u();l(4),m("src",r.websiteUrl+d.image,v),l(2),M(" ",d.title," "),l(),m("innerHTML",d.description,S),l(),m("routerLink",g(4,J))}}function te(a,o){if(a&1&&n(0,"img",90),a&2){let d=u().$implicit,r=u();m("src",r.websiteUrl+d.logo,v)}}function ie(a,o){a&1&&p(0,te,1,1,"ng-template",89)}function ne(a,o){if(a&1&&(t(0,"div",91)(1,"div",92)(2,"div",93)(3,"div",94),n(4,"img",95),e()(),t(5,"div",96)(6,"div",97)(7,"p",98)(8,"small",99),i(9),e()(),t(10,"h5",100),i(11),e(),n(12,"p",101),e()()()()),a&2){let d=u().$implicit,r=u();l(4),m("src",r.websiteUrl+d.image,v),l(5),f(r.getDateTime(d.created_at)),l(2),A("",d.name," ( ",d.designation," )"),l(),m("innerHtml",d.description.substring(0,100)+"...",S)}}function ae(a,o){a&1&&p(0,ne,13,5,"ng-template",89)}function re(a,o){if(a&1&&(t(0,"article",102)(1,"div",103),n(2,"img",104)(3,"div",105),e(),t(4,"div",106)(5,"h6",107),i(6),e(),t(7,"h3",108),i(8),e(),n(9,"p",109),t(10,"button",110),i(11,"Read more"),e()()()),a&2){let d=u().$implicit,r=u();l(2),m("src",r.websiteUrl+d.image,v),l(4),f(r.getDateTime(d.created_at)),l(2),f(d.title),l(),m("innerHTML",d.description.substring(0,300)+"...",S),l(),m("routerLink",P(5,X,"/blog/"+d.custom_url))}}function oe(a,o){a&1&&p(0,re,12,7,"ng-template",89)}var V=(()=>{let o=class o{constructor(r,s,c,q){this.title=r,this.meta=s,this.ngZone=c,this.apiService=q,this.partners=[],this.blogs=[],this.products=[],this.testimonials=[],this.websiteUrl="",this.customOptions={loop:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!1,navSpeed:600,navText:["&#8249","&#8250;"],responsive:{0:{items:1},400:{items:2},760:{items:5},1e3:{items:5}},nav:!1},this.customOptions2={loop:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!0,navSpeed:600,margin:10,navText:["&#8249","&#8250;"],responsive:{0:{items:1},400:{items:1},760:{items:2},1e3:{items:3}},nav:!0},this.customOptions3={loop:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!0,navSpeed:600,margin:20,navText:["&#8249","&#8250;"],responsive:{0:{items:1},400:{items:1},760:{items:2},1e3:{items:3}},nav:!0},this.websiteUrl=U.websiteUrl}ngOnInit(){this.loadSEO("Travelexic - Home Page","Powerful tools for MICE, Tour and Conference operators enabling them to scale their business, drive operational efficiencies, and elevate customer experience. Tools for Tour Operators, Tools for MICE Operators, Tools for Corporate Event Planners, Tools for Professional Conference Organizers",""),this.loadPartners(),this.loadBlogs(),this.loadProducts(),this.loadTestimonials()}loadPartners(){this.apiService.getPartners().subscribe(r=>{this.partners=r})}loadBlogs(){this.apiService.getHomeBlogs().subscribe(r=>{this.blogs=r})}loadProducts(){this.apiService.getProducts().subscribe(r=>{this.products=r})}loadTestimonials(){this.apiService.getTestimonials().subscribe(r=>{this.testimonials=r})}loadSEO(r,s,c){this.title.setTitle(r),this.meta.updateTag({name:"title",content:r},'name="title"'),this.meta.updateTag({name:"description",content:s},'name="description"'),this.meta.updateTag({name:"twitter:title",content:r},'name="twitter:title"'),this.meta.updateTag({name:"twitter:description",content:s},'name="twitter:description"'),this.meta.updateTag({name:"twitter:image",content:c},'name="twitter:image"'),this.meta.updateTag({name:"DC.title",content:r},'name="DC.title"'),this.meta.updateTag({name:"DC.description",content:s},'name="DC.description"'),this.meta.updateTag({property:"og:title",content:r},'property="og:title"'),this.meta.updateTag({property:"og:description",content:s},'property="og:description"'),this.meta.updateTag({property:"og:image",content:c},'property="og:image"')}getDateTime(r){let s=new Date(r);return R[s.getMonth()]+" "+s.getDate()+", "+s.getFullYear()}};o.\u0275fac=function(s){return new(s||o)(h(F),h(I),h(_),h(w))},o.\u0275cmp=y({type:o,selectors:[["app-home"]],decls:411,vars:17,consts:[["id","hero",1,"d-flex","justify-content-center","align-items-center"],[1,"container"],[1,"row"],[1,"col-md-6"],["src","assets/img/new_images/slider_image.png",1,"slider-bg","m-5"],[1,"slider-text"],["id","slider-text1",1,"col-md-10"],["id","slider-vector-img",1,"col-md-2"],["src","assets/img/new_images/Group.png","width","100px",1,"slider-vector"],["id","slider-text2",1,"col-md-12"],["id","slider-btn",1,"col-md-12"],["data-bs-target","#myModal","data-bs-toggle","modal",1,"slider-button"],["id","main"],["id","icon-boxes",1,"icon-boxes"],[1,"row","icon-div"],[4,"ngFor","ngForOf"],["id","about",1,"about"],["data-aos","fade-up",1,"container"],[1,"col-md-6","about-div"],[1,"section-title"],[1,"about-heading"],[1,"about-paragraph"],[1,"about-us-text"],[1,"btn","btn-warning","about-know_more_btn",3,"routerLink"],["src","assets/img/new_images/about_us.png",1,"about-us-img"],["id","clients","data-aos","fade-up",1,"clients"],[1,"col-md-3","partner-div"],[1,"partner-p"],[1,"col-md-9"],[1,"clients-slider"],[3,"options"],["id","about2",1,"about","why-us-blue"],["data-aos","fade-left",1,"col-md-8","about-div"],[1,"why-us-heading"],[1,"why-us-sub-heading"],[1,"products-text"],[1,"yellow"],["data-aos","fade-right",1,"col-md-4"],["src","assets/img/new_images/mice.png",1,"products_image"],["data-aos","fade-up",1,"row","mice-list"],[1,"col-md-3"],["src","assets/img/new_images/mice-vector.png","width","330","alt","",1,"mice-vector"],[1,"list-item"],["src","assets/img/new_images/mice-vector2.png","width","500px","alt","",1,"mice-vector2"],[1,"col-md-12"],[1,"text-center","pt-4"],[1,"p-2","text-white"],[1,"learn-more-btn",3,"routerLink"],[1,"why-us","py-5"],[1,"tour-data"],[1,"why-us-sub-heading-white"],[1,"products-text-white"],["src","assets/img/new_images/tour.png",1,"tour_image"],["data-aos","fade-up",1,"row","mice-list-blue"],["src","assets/img/new_images/tour-vector.png","width","100%","alt",""],[1,"list-item-white"],[1,"p-2","line"],[1,"learn-more-yellow-btn",3,"routerLink"],["id","about3",1,"about","why-us-blue"],["src","assets/img/new_images/event.png",1,"event-img"],["src","assets/img/new_images/event-vector.png","alt","",1,"event-vector"],["src","assets/img/new_images/urplan.png","width","350"],[1,"col-md-4"],["src","assets/img/new_images/urplan-vector.png","alt","",1,"urplan-vector"],[1,"col-md-8"],[1,"learn-more-btn","learn-more-yellow-btn",3,"routerLink"],["data-aos","fade-up",1,"section-testimonial"],[1,"mb-5"],[1,"testimonial-swiper-button-next"],[1,"ri-arrow-right-s-line"],[1,"testimonial-swiper-button-prev"],[1,"ri-arrow-left-s-line"],[1,"testimonial-swiper-pagination"],["data-aos","fade-up",1,"card_slider_container","slider-section"],[1,"container","swiper"],[1,"blogs_text"],[1,"col-md-6","view-blogs"],[1,"blogs_btn"],[1,"card__content"],[1,"swiper-button-next"],[1,"swiper-button-prev"],[1,"swiper-pagination"],["data-aos","fade-up",1,"col-md-6","col-lg-3","d-flex","align-items-stretch","mb-5","mb-lg-0"],[1,"icon-box"],[1,"icon"],[1,"product-icn",3,"src"],[1,"title"],[1,"description",3,"innerHTML"],[1,"SelfBtn",3,"routerLink"],["carouselSlide",""],["alt","",1,"partner-img",3,"src"],[1,"card","testimonial-item"],[1,"row","g-0"],[1,"col-4","col-md-4"],[1,"testimonial-img"],["alt","",1,"img-fluid",3,"src"],[1,"col-8","col-md-8"],[1,"card-body"],[1,"card-text"],[1,"text-muted"],[1,"card-title"],[1,"card-text",3,"innerHtml"],[1,"card__article","swiper-slide"],[1,"card_slider_card__image"],["alt","image",1,"card_slider_card__img",3,"src"],[1,"card_slider_card__shadow"],[1,"card_slider_card__data"],[1,"mt-2"],[1,"card_slider_card__name"],[1,"card_slider_card__description",3,"innerHTML"],[1,"btn","btn-primary",3,"routerLink"]],template:function(s,c){s&1&&(t(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),n(4,"img",4),e(),t(5,"div",3)(6,"div",5)(7,"div",2)(8,"div",6)(9,"h1"),i(10,"Everything you need to organize"),e()(),t(11,"div",7),n(12,"img",8),e(),t(13,"div",9)(14,"h4"),i(15," Tours, Events, and Conferences "),e()(),t(16,"div",10)(17,"button",11),i(18,"Get a Demo"),e()()()()()()()(),t(19,"main",12)(20,"section",13)(21,"div",1)(22,"div",14),p(23,ee,10,5,"ng-container",15),e()()(),t(24,"section",16)(25,"div",17)(26,"div",2)(27,"div",18)(28,"div",19)(29,"h2",20),i(30,"Who we are:"),e(),t(31,"p",21),i(32," Travelexic is a "),t(33,"span",22),i(34," SaaS travel and event management solution "),e(),i(35," that leverages AI and cutting-edge automation to assist partners through various stages of sales, planning, and execution. Our platform empowers partners with tools to deliver consistently high-quality experiences, optimizing processes for efficiency, control, ease, and scalability "),e(),n(36,"br"),t(37,"a",23),i(38,"About us"),e()()(),t(39,"div",3),n(40,"img",24)(41,"br"),e()()()(),t(42,"section",25)(43,"div",1)(44,"div",2)(45,"div",26)(46,"p",27),i(47,"Our most valuable assets"),e(),t(48,"h2"),i(49,"OUR PARTNERS"),e()(),t(50,"div",28)(51,"div",1)(52,"div",29)(53,"owl-carousel-o",30),p(54,ie,1,0,null,15),e()()()()()()(),t(55,"section",31)(56,"div",1)(57,"div",2)(58,"div",32)(59,"h2",33)(60,"strong"),i(61,"Tools For MICE Operators-"),e()(),t(62,"h4",34),i(63,"Transform Your Operations and Enhance "),n(64,"br"),i(65," Experiences with our MICE operator tools\xA0"),e(),t(66,"p",35),i(67," Travelexic's MICE and Group Management Solution equips you with advanced "),t(68,"span",36),i(69," MICE Operator "),e(),i(70," tools to grow your business, drive operational efficiencies, and elevate the overall experience for your clients. "),e()(),t(71,"div",37),n(72,"img",38)(73,"br"),e()(),t(74,"div",39)(75,"div",40),n(76,"img",41),e(),t(77,"div",28)(78,"div",2)(79,"div",40)(80,"ul")(81,"li",42)(82,"h5"),i(83,"Tour Management App:"),e(),t(84,"p"),i(85,"Manage tours effortlessly with our dedicated app."),e()(),t(86,"li",42)(87,"h5"),i(88,"Cost & On-Ground Expense Management Tools:"),e(),t(89,"p"),i(90,"Keep track of costs and manage on-ground expenses efficiently."),e()(),t(91,"li",42)(92,"h5"),i(93,"Reports & Event Analytics:"),e(),t(94,"p"),i(95,"Gain valuable insights with comprehensive reporting and analytics."),e()()()(),t(96,"div",40)(97,"ul")(98,"li",42)(99,"h5"),i(100,"Event Registration & Nomination Management:"),e(),t(101,"p"),i(102,"Simplify event registration and nomination processes."),e()(),t(103,"li",42)(104,"h5"),i(105,"AI-Powered Smart Forms:"),e(),t(106,"p"),i(107,"Collect information efficiently with intelligent, automated forms"),e()(),t(108,"li",42)(109,"h5"),i(110,"Document Sharing via Multiple Channels:"),e(),t(111,"p"),i(112,"Share documents seamlessly using email, WhatsApp, and notifications."),e()()()(),t(113,"div",40)(114,"ul")(115,"li",42)(116,"h5"),i(117,"Multi-Channel Communication:"),e(),t(118,"p"),i(119,"Engage with attendees through email, WhatsApp, and in-app notifications"),e()(),t(120,"li",42)(121,"h5"),i(122,"Multi-Functional Event Attendee App"),e(),t(123,"p"),i(124,"Enhance attendee experience with a versatile event app"),e()(),n(125,"img",43),e()(),t(126,"div",40)(127,"ul")(128,"li",42)(129,"h5"),i(130,"Comprehensive Group Lead Management System:"),e(),t(131,"p"),i(132,"Streamline lead tracking and management for group events."),e()(),t(133,"li",42)(134,"h5"),i(135,"Itinerary Builder:"),e(),t(136,"p"),i(137,"Easily create and manage detailed itineraries for groups and events.\xA0"),e()()()()()()(),t(138,"div",2)(139,"div",44)(140,"div",45),n(141,"hr",46),t(142,"a",47),i(143,"View Product "),e()()()()()(),t(144,"section",48)(145,"div",1)(146,"div",2)(147,"div",32)(148,"div",49)(149,"h2",33)(150,"strong"),i(151,"Tools For Tour Operators -"),e()(),n(152,"br"),t(153,"h4",50),i(154,"Optimize Sales, Operations, and Post-Sale "),n(155,"br"),i(156," Services with our tour operator tools\xA0\xA0"),e(),t(157,"p",51),i(158," Discover how Travelexic's comprehensive "),t(159,"span",36),i(160," online travel tools for tour operators "),e(),i(161," streamline your travel and event management processes, ensuring efficiency and exceptional service delivery. "),e()()(),t(162,"div",37),n(163,"img",52)(164,"br"),e()(),t(165,"div",53)(166,"div",40),n(167,"img",54),e(),t(168,"div",28)(169,"div",2)(170,"div",40)(171,"ul")(172,"li",55)(173,"h4"),i(174,"Comprehensive Lead Management System:"),e(),t(175,"h6"),i(176,"Engage with attendees through email, WhatsApp, and notifications.\xA0"),e()(),t(177,"li",55)(178,"h4"),i(179,"Cost Sheet Management:"),e(),t(180,"h6"),i(181,"Provide a seamless experience with our versatile event app.\xA0"),e()()()(),t(182,"div",40)(183,"ul")(184,"li",55)(185,"h4"),i(186,"Post Booking Travel Concierge APP:"),e(),t(187,"h6"),i(188,"Build custom event microsites effortlessly."),e()(),t(189,"li",55)(190,"h4"),i(191,"Itinerary Management"),e(),t(192,"h6"),i(193,"Gain insights with comprehensive reporting and analytics."),e()()()(),t(194,"div",40)(195,"ul")(196,"li",55)(197,"h4"),i(198,"360\xB0 Customer Profile:"),e(),t(199,"h6"),i(200,"Efficiently manage and track all incoming event leads."),e()(),t(201,"li",55)(202,"h4"),i(203,"VISA Process Management:"),e(),t(204,"h6"),i(205," Quickly create and send professional quotations.\xA0"),e()()()(),t(206,"div",40)(207,"ul")(208,"li",55)(209,"h4"),i(210,"Quotation & Voucher Generator:"),e(),t(211,"h6"),i(212,"Efficiently track and manage costs and on-ground expenses.\xA0"),e()(),t(213,"li",55)(214,"h4"),i(215,"Payment Tracker:"),e(),t(216,"h6"),i(217,"Manage event tours with ease.\xA0"),e()()()()()()(),t(218,"div",2)(219,"div",44)(220,"div",45),n(221,"hr",56),t(222,"a",57),i(223,"View Product "),e()()()()()(),t(224,"section",58)(225,"div",1)(226,"div",2)(227,"div",37),n(228,"img",59)(229,"br"),e(),t(230,"div",32)(231,"h2",33)(232,"strong"),i(233,"Tools For Corporate Event Planners\xA0-"),e()(),t(234,"h4",34),i(235,"Effortless Registrations and Elevated Attendee Experiences with our corporate event planner tools\xA0"),e(),t(236,"p",35),i(237," Travelexic provides powerful tools to simplify event registrations and enhance the overall experience for your attendees. "),e()()(),t(238,"div",39)(239,"div",40)(240,"ul")(241,"li",42)(242,"h4"),i(243,"Track Incoming Leads:"),e(),t(244,"h6"),i(245,"Efficiently manage and track all incoming event leads."),e()(),t(246,"li",42)(247,"h4"),i(248,"Send Quotations with Ease:"),e(),t(249,"h6"),i(250,"Quickly create and send professional quotations.\xA0"),e()(),t(251,"li",42)(252,"h4"),i(253,"Delegate, Speaker & Exhibitor Registrations:"),e(),t(254,"h6"),i(255,"Simplify the registration process for delegates, speakers, and exhibitors.\xA0"),e()()()(),t(256,"div",40)(257,"ul")(258,"li",42)(259,"h4"),i(260,"Multi-Channel Communication:"),e(),t(261,"h6"),i(262,"Engage with attendees through email, WhatsApp, and notifications.\xA0"),e()(),t(263,"li",42)(264,"h4"),i(265,"Multi-Functional Event Attendee App:"),e(),t(266,"h6"),i(267,"Provide a seamless experience with our versatile event app.\xA0"),e()(),t(268,"li",42)(269,"h4"),i(270,"Tour Management App:"),e(),t(271,"h6"),i(272,"Manage event tours with ease.\xA0"),e()()()(),t(273,"div",40)(274,"ul")(275,"li",42)(276,"h4"),i(277,"Cost & On-Ground Expense Management Tools:"),e(),t(278,"h6"),i(279,"Efficiently track and manage costs and on-ground expenses.\xA0"),e()(),t(280,"li",42)(281,"h4"),i(282,"Reports & Event Analytics:"),e(),t(283,"h6"),i(284,"Gain insights with comprehensive reporting and analytics."),e()()()(),t(285,"div",40)(286,"ul")(287,"li",42)(288,"h4"),i(289,"Document Collection and Distribution Management:"),e(),t(290,"h6"),i(291,"Streamline the collection and distribution of important documents.\xA0"),e()(),t(292,"li",42)(293,"h4"),i(294,"DIY Event Microsite Builder:"),e(),t(295,"h6"),i(296,"Build custom event microsites effortlessly."),e()(),n(297,"img",60),e()()(),t(298,"div",2)(299,"div",44)(300,"div",45),n(301,"hr",46),t(302,"a",47),i(303,"View Product "),e()()()()()(),t(304,"section",48)(305,"div",1)(306,"div",2)(307,"div",32)(308,"h2",33)(309,"strong"),i(310,"URPLAN -"),e()(),t(311,"h4",50),i(312,"Your Ultimate Event Attendee APP"),e(),t(313,"p",51),i(314," Discover the power of seamless travel with our Event Attendee App, designed to cater to every need of MICE and Tour Operators. This versatile app not only ensures a paperless travel experience but also personalizes your journey, keeping you updated and engaged every step of the way.\xA0 "),e()(),t(315,"div",37),n(316,"img",61)(317,"br"),e()(),t(318,"div",53)(319,"div",62),n(320,"img",63),e(),t(321,"div",64)(322,"div",2)(323,"div",62)(324,"ul")(325,"li",55)(326,"h4"),i(327,"Destination Travel Guides:"),e(),t(328,"h6"),i(329,"Access comprehensive guides for your travel destinations."),e()(),t(330,"li",55)(331,"h4"),i(332,"Personalization:"),e(),t(333,"h6"),i(334,"Customize the app to match the theme of your event.\xA0"),e()(),t(335,"li",55)(336,"h4"),i(337,"Real-time Updates:"),e(),t(338,"h6"),i(339,"Receive trip updates through instant notifications."),e()(),t(340,"li",55)(341,"h4"),i(342,"Chat Module:"),e(),t(343,"h6"),i(344,"Communicate easily with an in-app chat feature.\xA0"),e()()()(),t(345,"div",62)(346,"ul")(347,"li",55)(348,"h4"),i(349,"Targeted Communication:"),e(),t(350,"h6"),i(351,"Send broadcast messages for precise communication.\xA0"),e()(),t(352,"li",55)(353,"h4"),i(354,"Smart Form Integration:"),e(),t(355,"h6"),i(356,"Collect data seamlessly with integrated smart forms.\xA0"),e()(),t(357,"li",55)(358,"h4"),i(359,"Engagement Tools:"),e(),t(360,"h6"),i(361,"Enhance interaction with polls, word clouds, and feedback forms.\xA0"),e()()()(),t(362,"div",62)(363,"ul")(364,"li",55)(365,"h4"),i(366,"Travel Tools:"),e(),t(367,"h6"),i(368,"Utilize essential tools like weather forecasts and a currency converter.\xA0"),e()(),t(369,"li",55)(370,"h4"),i(371,"Paperless Travel:"),e(),t(372,"h6"),i(373,"Share dynamic itineraries, documents, and contacts effortlessly.\xA0"),e()()()()()()(),t(374,"div",2)(375,"div",44)(376,"div",45),n(377,"hr",56),t(378,"a",65),i(379,"View Product "),e()()()()()(),t(380,"section",66)(381,"div",1)(382,"div",2)(383,"div",44)(384,"h3",67)(385,"strong"),i(386,"Hear it from satisfied customers"),e()()()()(),t(387,"owl-carousel-o",30),p(388,ae,1,0,null,15),e(),t(389,"div",68),n(390,"i",69),e(),t(391,"div",70),n(392,"i",71),e(),n(393,"div",72),e(),t(394,"section",73)(395,"div",74)(396,"div",2)(397,"div",3)(398,"h1",75),i(399," Key Insights "),e()(),t(400,"div",76)(401,"p",77),i(402,"View all blogs"),e()()(),t(403,"div",78)(404,"owl-carousel-o",30),p(405,oe,1,0,null,15),e()(),t(406,"div",79),n(407,"i",69),e(),t(408,"div",80),n(409,"i",71),e(),n(410,"div",81),e()()()),s&2&&(l(23),m("ngForOf",c.products),l(14),m("routerLink",g(12,Q)),l(16),m("options",c.customOptions),l(),m("ngForOf",c.partners),l(88),m("routerLink",g(13,Y)),l(80),m("routerLink",g(14,$)),l(80),m("routerLink",g(15,K)),l(76),m("routerLink",g(16,Z)),l(9),m("options",c.customOptions3),l(),m("ngForOf",c.testimonials),l(16),m("options",c.customOptions2),l(),m("ngForOf",c.blogs))},dependencies:[O,L,j,G],styles:[".swiper-slide[_ngcontent-%COMP%]{background-color:#fff;padding:20px}.swiper-slide[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.swiper-slide[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;color:#fff}.testimonial-item[_ngcontent-%COMP%]{box-shadow:0 0 4px #888;margin-top:5px;margin-bottom:5px;height:200px}.testimonial-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px;color:#1e51a4}.testimonial-img[_ngcontent-%COMP%]{background-color:#0000000a;display:flex;align-items:center;height:200px;border-radius:7px 0 0 7px}.blogs_text[_ngcontent-%COMP%]{color:#1e51a4}@media only screen and (max-width: 768px){.blogs_text[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}}"]});let a=o;return a})();var le=[{path:"",pathMatch:"full",component:V}],W=(()=>{let o=class o{};o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=E({type:o}),o.\u0275inj=x({imports:[b.forChild(le),b]});let a=o;return a})();var Me=(()=>{let o=class o{};o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=E({type:o}),o.\u0275inj=x({providers:[w],imports:[k,H,D,z,W,B]});let a=o;return a})();export{Me as HomeModule};
