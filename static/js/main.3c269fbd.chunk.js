(this.webpackJsonparreact=this.webpackJsonparreact||[]).push([[0],{30:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),i=a.n(n),c=a(19),r=a.n(c),l=(a(30),a(2)),o=a(3),m=a(5),d=a.p+"static/media/logo.c0a4e384.svg",u=a(45),j=i.a.createContext(),b=function(){return localStorage.getItem("languageChoose")?JSON.parse(localStorage.getItem("languageChoose")):"ar"},h=function(e){var t=e.children,a=Object(u.a)().i18n,n=i.a.useState("en"==b()),c=Object(m.a)(n,2),r=c[0],l=c[1],o=i.a.useState("ar"==b()),d=Object(m.a)(o,2),h=d[0],x=d[1];i.a.useEffect((function(){a.changeLanguage(b()),console.log()}),[]);return Object(s.jsx)(j.Provider,{value:{toggleLanguage:function(e){"ar"===e&&(x(!0),l(!1),localStorage.setItem("languageChoose",JSON.stringify(e))),"en"===e&&(l(!0),x(!1),localStorage.setItem("languageChoose",JSON.stringify(e)))},isEng:r,isAr:h},children:t})},x=function(){var e=i.a.useContext(j),t=e.toggleLanguage,a=(e.isAr,e.isEng),n=Object(u.a)(),c=n.t,r=n.i18n,o=i.a.useState(!1),b=Object(m.a)(o,2),h=b[0],x=b[1],p=function(){return x(!1)},O=function(e){t(e),r.changeLanguage(e)};return Object(s.jsx)("nav",{className:"navbar",children:Object(s.jsx)("div",{className:"full-container",children:Object(s.jsxs)("div",{className:"navbar-wrapper",children:[Object(s.jsx)(l.b,{to:"/",className:"logo",children:Object(s.jsx)("img",{src:d,alt:"logo"})}),Object(s.jsxs)("ul",{className:"".concat(a?"navbar__list":"navbar__list__reverse"," ").concat(h&&"show"),children:[Object(s.jsx)("li",{className:"navbar__item",children:Object(s.jsx)(l.b,{onClick:p,className:"navbar__link",to:"/",children:c("Home")})}),Object(s.jsx)("li",{className:"navbar__item",children:Object(s.jsx)(l.b,{onClick:p,className:"navbar__link",to:"/about",children:c("About")})}),Object(s.jsx)("li",{className:"navbar__item",children:Object(s.jsx)(l.b,{onClick:p,className:"navbar__link",to:"/vision",children:c("Vision")})}),Object(s.jsx)("li",{className:"navbar__item",children:Object(s.jsx)(l.b,{onClick:p,className:"navbar__link",to:"/features",children:c("Features")})}),Object(s.jsx)("li",{className:"navbar__item",children:Object(s.jsx)(l.b,{onClick:p,className:"navbar__link",to:"/contact",children:c("ContactUs")})}),Object(s.jsx)("li",{className:"navbar__item"})]}),Object(s.jsx)("button",{type:"button",onClick:function(){O(a?"ar":"en")},className:"navbar__btn",children:a?"Arabic":"English"}),Object(s.jsxs)("div",{className:"hide menu-btn",onClick:function(){return x(!h)},children:[Object(s.jsx)("div",{className:"line line-1"}),Object(s.jsx)("div",{className:"line line-2"}),Object(s.jsx)("div",{className:"line line-3"})]})]})})})},p=a(24),O=a.p+"static/media/person.89e9e54a.png",g=function(e){var t=e.children,a=Object(p.a)(e,["children"]);return Object(s.jsx)("section",{className:"screen",children:Object(s.jsx)("div",{className:"small-container h-100",children:Object(s.jsxs)("div",{className:"screen-wrapper",children:[Object(s.jsx)("div",{className:"screen-img",children:Object(s.jsx)("img",{src:O,alt:"Personimg"})}),Object(s.jsx)("div",{className:"screen-content",dir:a.dir,children:t})]})})})},v=function(){var e=Object(u.a)(),t=e.t;e.i18n;return Object(s.jsxs)(g,{dir:"1"===t("En")?"":"rtl",children:[Object(s.jsx)("h1",{className:"h1-heading",children:t("ShiftYour")}),Object(s.jsxs)("p",{className:"p-text",children:[t("WithShift")," "]}),Object(s.jsx)("p",{className:"p-text",children:t("Cool")}),Object(s.jsx)(l.b,{className:"our-btn",to:"/signup1",children:t("HitIt")})]})},y=function(){var e=Object(u.a)(),t=e.t;e.i18n;return Object(s.jsxs)(g,{dir:"1"===t("En")?"":"rtl",children:[Object(s.jsx)("h1",{className:"h1-heading",children:t("AllYou")}),Object(s.jsx)("p",{className:"p-text",children:t("WeProvide")}),Object(s.jsx)("p",{className:"p-text",children:t("AlsoOur")}),Object(s.jsx)(l.b,{className:"our-btn",to:"/signup1",children:t("HitIt")})]})},N=function(){var e=Object(u.a)().t;return Object(s.jsxs)(g,{dir:"1"===e("En")?"":"rtl",children:[Object(s.jsx)("h1",{className:"h1-heading",children:e("OurVision")}),Object(s.jsx)("p",{className:"p-text",children:e("IsToSee")}),Object(s.jsx)(l.b,{className:"our-btn",to:"/signup1",children:e("HitIt")})]})},f=function(){var e=Object(u.a)(),t=e.t;e.i18n;return Object(s.jsx)(g,{dir:"1"===t("En")?"":"rtl",children:Object(s.jsxs)("div",{className:"contact",children:[Object(s.jsx)("h1",{className:"h1-heading",children:t("TalkTo")}),Object(s.jsxs)("form",{action:"",className:"about-form",children:[Object(s.jsxs)("div",{className:"contact__form-item",children:[Object(s.jsx)("input",{type:"text",placeholder:t("Name"),className:"input-el"}),Object(s.jsx)("input",{type:"text",placeholder:t("Mobile"),className:"input-el"})]}),Object(s.jsx)("input",{type:"email",placeholder:t("Email"),className:"input-el"}),Object(s.jsx)("textarea",{cols:"20",rows:"6",className:"input-el",placeholder:t("TakeOur")})]}),Object(s.jsx)(l.b,{className:"our-btn our-btn-outline",to:"/signup1",children:t("Send")})]})})},_="#DE291D",k=a.p+"static/media/uaelg.fef88837.png",A=function(){var e=Object(u.a)(),t=e.t,a=(e.i18n,i.a.useState(!1)),n=Object(m.a)(a,2),c=n[0],r=n[1];return Object(s.jsxs)(g,{dir:"1"===t("En")?"":"rtl",children:[Object(s.jsx)("h1",{className:"h1-heading",children:t("CreateAnd")}),!c&&Object(s.jsxs)("form",{action:"",className:"form",children:[Object(s.jsx)("input",{type:"text",placeholder:t("YourName"),className:"input-el"}),Object(s.jsx)("input",{type:"text",placeholder:t("BusinessName"),className:"input-el"}),Object(s.jsxs)("div",{className:"phone-input",children:[Object(s.jsxs)("div",{className:"country",children:[Object(s.jsx)("img",{src:k,alt:"uaelogo"}),Object(s.jsx)("span",{children:"+965"})]}),Object(s.jsx)("input",{type:"text",placeholder:"00000000",className:"input-el"})]}),Object(s.jsx)("input",{type:"email",placeholder:t("Email"),className:"input-el"}),Object(s.jsx)("input",{type:"password",placeholder:t("Password"),className:"input-el"}),Object(s.jsxs)("div",{className:"form-check",children:[Object(s.jsx)("input",{type:"checkbox",id:"check1",onClick:function(){return document.getElementById("check1").setAttribute("checked",!0),void setTimeout((function(){r(!0)}),10)}}),Object(s.jsx)("label",{style:{color:_},htmlFor:"check1",children:t("AcceptTerms")})]})]}),c&&Object(s.jsxs)("div",{className:"feature__el",children:[Object(s.jsx)("h3",{children:t("Privacy")}),Object(s.jsx)("button",{onClick:function(){return r(!1),void setTimeout((function(){document.getElementById("check1").setAttribute("checked",!0)}),100)},children:"X"})]}),Object(s.jsx)(l.b,{className:"our-btn",to:"/signup2",children:t("Next")})]})},C=a.p+"static/media/store.4d592cb8.svg",S=a.p+"static/media/offer.f2d56da0.svg",P=function(){var e=Object(u.a)().t,t=i.a.useState("yes"),a=Object(m.a)(t,2),n=a[0],c=a[1],r=function(e){var t=document.getElementById("storeDiv"),a=document.getElementById("storeDiv_h3"),s=document.getElementById("offerDiv"),n=document.getElementById("offerDiv_h3");t.className=1==e?"sign__item__active":"sign__item",a.className=1==e?"sign__item__h3__active":"",s.className=1==e?"sign__item":"sign__item__active",n.className=1==e?"":"sign__item__h3__active"};return Object(s.jsxs)(g,{dir:"1"===e("En")?"":"rtl",children:[Object(s.jsx)("h1",{className:"h1-heading",children:e("CreateAnd")}),Object(s.jsxs)("div",{className:"sign__list",children:[Object(s.jsxs)("div",{className:"sign__item",id:"storeDiv",onClick:function(){return r(1)},children:[Object(s.jsx)("img",{src:C,alt:"storeimg"}),Object(s.jsxs)("h3",{id:"storeDiv_h3",children:["25 KWD",Object(s.jsx)("br",{}),e("Monthly")]})]}),Object(s.jsxs)("div",{className:"sign__item",id:"offerDiv",onClick:function(){return r(2)},children:[Object(s.jsx)("img",{src:S,alt:"offerimg"}),Object(s.jsxs)("h3",{id:"offerDiv_h3",children:["250 KWD",Object(s.jsx)("br",{}),e("Yearly")]})]})]}),Object(s.jsxs)("div",{className:"sign__check",children:[Object(s.jsx)("h3",{children:e("DoYou")}),Object(s.jsxs)("div",{className:"form-radio",children:[Object(s.jsx)("input",{type:"radio",name:"domain",id:"yes",onClick:function(){return c("yes")},checked:"yes"==n,readOnly:!0}),Object(s.jsx)("label",{htmlFor:"yes",children:e("Yes")})]}),Object(s.jsxs)("div",{className:"form-radio",children:[Object(s.jsx)("input",{type:"radio",name:"domain",id:"no",onClick:function(){return c("no")},checked:"no"==n,readOnly:!0}),Object(s.jsx)("label",{htmlFor:"no",children:e("No")})]})]}),Object(s.jsx)("input",{type:"text",placeholder:e("yes"==n?"TypeYour":"PickAdomain"),className:"input-el"}),Object(s.jsx)(l.b,{className:"our-btn",to:"/",children:e("PayAnd")})]})},I=a.p+"static/media/lists.ff18739c.svg",E=a.p+"static/media/private.ac90ec96.svg",w=a.p+"static/media/payment.a15fa0a3.svg",T=a.p+"static/media/sales.59dccb7c.svg",L=a.p+"static/media/domain.54f2f6dd.svg",Y=a.p+"static/media/marketing.4caf70c6.svg",D=function(){var e=Object(u.a)(),t=e.t,a=(e.i18n,i.a.useState([{id:1,name:"Unlimited Everything",icon:I,text:"WeProvide"},{id:2,name:"Payment Online",icon:w,text:"Lorem"},{id:3,name:"Multiple Layouts",icon:E,text:"Lorem"},{id:4,name:"Marketing Tools",icon:Y,text:"Lorem"},{id:5,name:"Sales Analytics",icon:T,text:"Lorem"},{id:6,name:"Private Domain",icon:L,text:"Lorem"}])),n=Object(m.a)(a,2),c=n[0],r=(n[1],i.a.useState(!1)),o=Object(m.a)(r,2),d=o[0],j=o[1],b=i.a.useState({name:"",icon:"",text:""}),h=Object(m.a)(b,2),x=h[0],p=h[1];return Object(s.jsx)(g,{dir:"1"===t("En")?"":"rtl",children:Object(s.jsxs)("div",{className:"features",children:[Object(s.jsx)("h1",{className:"h1-heading",children:t("AndHere")}),!d&&Object(s.jsx)("div",{className:"features__list__reverse",children:c.map((function(e){return Object(s.jsxs)("div",{className:"feature__item",onClick:function(){return function(e){j(!0),p({name:e.name,icon:e.icon,text:e.text})}(e)},children:[Object(s.jsx)("img",{src:e.icon,alt:e.name}),Object(s.jsxs)("h3",{children:[t(e.name.split(" ")[0])," "]}),Object(s.jsxs)("h3",{children:[t(e.name.split(" ")[1])," "]})]},e.id)}))}),d&&Object(s.jsxs)("div",{className:"feature__el",children:[Object(s.jsx)("img",{src:x.icon,alt:x.name}),Object(s.jsxs)("h3",{children:[t(x.name.split(" ")[0])," ",t(x.name.split(" ")[1])]}),Object(s.jsx)("p",{className:"p-text",children:t(x.text)}),Object(s.jsx)("button",{onClick:function(){j(!1)},children:"X"})]}),Object(s.jsx)(l.b,{className:"our-btn",to:"/signup1",children:t("HitIt")})]})})},M=function(){return Object(s.jsxs)(l.a,{children:[Object(s.jsx)(x,{}),Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{path:"/",exact:!0,component:v}),Object(s.jsx)(o.a,{path:"/about",exact:!0,component:y}),Object(s.jsx)(o.a,{path:"/vision",exact:!0,component:N}),Object(s.jsx)(o.a,{path:"/contact",exact:!0,component:f}),Object(s.jsx)(o.a,{path:"/features",exact:!0,component:D}),Object(s.jsx)(o.a,{path:"/signup1",exact:!0,component:A}),Object(s.jsx)(o.a,{path:"/signup2",exact:!0,component:P})]})]})},H=a(18),B=a(12);H.a.use(B.e).init({resources:{en:{translation:{En:"1",ContactUs:"Contact us",Features:"Features",Vision:"Vision",About:"About",Home:"Home",ShiftYour:"shift your business now!",WithShift:"With shift you will move to the next level in the online business space.",Cool:"Cool?",HitIt:"Hit it!",AllYou:"All you need to know about us..",WeProvide:"We provide you with your own customizable e-store that will suit all your needs.",Lorem:"lorem ipsum , you can put your text here",AlsoOur:"Also, our accountant is a part-time magician that can pull bunnies and stuff.",OurVision:"Our vision..",IsToSee:"is to see you sign up.",AndHere:"And Here\u2019s Our Unmatched  Service ",Unlimited:"Unlimited",Everything:"Everything",Payment:"Payment ",Online:"Online ",Multiple:"Multiple ",Layouts:"Layouts ",Marketing:"Marketing ",Tools:"Tools ",Sales:"Sales  ",Analytics:"Analytics  ",Private:"Private ",Domain:"Domain ",TalkTo:"Talk to us \u2026",Name:"name",Mobile:"mobile",Email:"e-mail",TakeOur:"take our breath away \u2026",Send:"Send",CreateAnd:"Create and launch",YourName:"your name",BusinessName:"Business name (or Instagram account)",Password:"password",AcceptTerms:"Accept Terms And Privacy Policy",Next:"Next",Monthly:"monthly",Yearly:"yearly",DoYou:"Do you have a domain name?",TypeYour:"Type your current domain",PickAdomain:"Pick a domain name: www.yourname.com",Yes:"Yes",No:"No",PayAnd:"Pay and Start",Privacy:"Privacy and Policy '\n'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}},ar:{translation:{En:"0",ContactUs:"\u062a\u0648\u0627\u0635\u0644 \u0648\u064a\u0627\u0646\u0627",Features:"\u0627\u0644\u0645\u0645\u064a\u0632\u0627\u062a",Vision:"\u0631\u0624\u064a\u062a\u0646\u0627",About:"\u0627\u062e\u0630 \u0641\u0643\u0631\u0629! ",Home:"\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",ShiftYour:"\u0648\u062f\u0643 \u062a\u0628\u064a\u0639\u061f!",WithShift:"\u0645\u0639 \u0634\u0641\u062a \u0631\u0627\u062d \u0646\u0646\u0642\u0644\u0643 \u0646\u0642\u0644\u0629 \u0646\u0648\u0639\u064a\u0629 \u0641\u064a \u0639\u0627\u0644\u0645 \u0627\u0644\u062a\u062c\u0627\u0631\u0629  \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629",Cool:"\u062e\u0648\u0634\u061f",HitIt:"\u0628\u0644\u0634!",AllYou:"\u0645\u0627\u0630\u0627 \u062a\u0648\u062f \u0623\u0646 \u062a\u0639\u0631\u0641\u061f",WeProvide:"\u0646\u0648\u0641\u0631 \u0644\u0643 \u0645\u062a\u062c\u0631\u0643 \u0627\u0644\u062e\u0627\u0635 \u0645\u0639 \u0643\u0627\u0645\u0644 \u0627\u0644\u0625\u062d\u062a\u064a\u0627\u062c\u0627\u062a \u0627\u0644\u062a\u064a \u062a\u062a\u064a\u062d \u0644\u0643 \u0627\u0644\u0641\u0631\u0635\u0629 \u0644\u0628\u062f\u0623 \u062a\u062c\u0627\u0631\u062a\u0643 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629.",Lorem:"lorem ipsum \u060c \u064a\u0645\u0643\u0646\u0643 \u0648\u0636\u0639 \u0627\u0644\u0646\u0635 \u0627\u0644\u062e\u0627\u0635 \u0628\u0643 \u0647\u0646\u0627",AlsoOur:"\u0648\u0648\u0627\u062d\u062f \u0641\u064a\u0646\u0627 \u0639\u0644\u064a\u0647 \u062c\u0627\u064a \u0645\u062e\u062f\u0631 \u0645\u0648 \u0635\u0627\u062d\u064a.",OurVision:"\u0631\u0624\u064a\u062a\u0646\u0627..",IsToSee:"\u0627\u0646\u0643 \u062a\u0633\u062c\u0644 / \u062a\u0633\u062c\u0644\u064a\u0646.",AndHere:"\u0648\u0647\u0630\u064a \u062e\u062f\u0645\u0627\u062a\u0646\u0627",Unlimited:"\u0643\u0644 \u0634\u064a",Everything:"\u0645\u0627\u0644\u0647 \u062d\u062f",Payment:"\u062f\u0641\u0639",Online:"\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a",Multiple:"\u0637\u0631\u0642 \u0639\u0631\u0636",Layouts:"\u0645\u062e\u062a\u0644\u0641\u0629",Marketing:"\u0623\u062f\u0648\u0627\u062a",Tools:"\u062a\u0633\u0648\u064a\u0642\u064a\u0629",Sales:"\u0627\u062d\u0635\u0627\u0626\u064a\u0627\u062a",Analytics:"\u062c\u0628\u0627\u0627\u0627\u0627\u0631\u0629",Private:"\u0627\u0633\u0645 \u062e\u0627\u0635",Domain:"\u0628\u0645\u0648\u0642\u0639\u0643",TalkTo:"\u0642\u0648\u0644 \u062a\u062f\u0644\u0644 \u0648\u0633\u0648\u0644\u0641..",Name:"\u0627\u0644\u0627\u0633\u0645",Mobile:"\u0627\u0644\u062a\u0644\u0641\u0648\u0646",Email:"\u0627\u0644\u0627\u064a\u0645\u064a\u0644",TakeOur:"\u064a\u0644\u0627 \u0623\u062a\u062d\u0641\u0646\u0627 ..",Send:"\u0623\u0631\u0633\u0644",CreateAnd:"\u0633\u062c\u0644 \u0648\u0627\u0646\u0637\u0644\u0642",YourName:"\u0627\u0633\u0645\u0643",BusinessName:"\u0627\u0633\u0645 \u0645\u0634\u0631\u0648\u0639\u0643 \u0628\u0627\u0644\u0627\u0646\u062c\u0644\u064a\u0632\u064a (\u0627\u0648 \u0627\u0644\u0627\u0646\u0633\u062a\u0642\u0631\u0627\u0645)",Password:"\u0627\u0644\u0628\u0627\u0633\u0648\u0631\u062f",AcceptTerms:"\u0623\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0634\u0631\u0648\u0637 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0648\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",Next:"\u0627\u0644\u062a\u0627\u0644\u0649",Monthly:"\u0634\u0647\u0631\u064a",Yearly:"\u0633\u0646\u0648\u064a",DoYou:"\u0639\u0646\u062f\u0643 \u0627\u0633\u0645 \u062e\u0627\u0635 \u0628\u0627\u0644\u0645\u0648\u0642\u0639\u061f",TypeYour:"\u0627\u0643\u062a\u0628 \u0627\u0633\u0645 \u0645\u0648\u0642\u0639\u0643:",PickAdomain:"\u0634\u0646\u0648 \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0644\u064a \u0628\u062e\u0627\u0637\u0631\u0643\u061f",Yes:"\u0639\u0646\u062f\u064a",No:"\u0644\u0623",PayAnd:"\u0627\u062f\u0641\u0639 \u0648\u0627\u0628\u062f\u0623",Privacy:"\u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0648\u0627\u0644\u0633\u064a\u0627\u0633\u0629 \u0644\u0648\u0631\u064a\u0645 \u0625\u064a\u0628\u0633\u0648\u0645 \u0647\u0648 \u0628\u0628\u0633\u0627\u0637\u0629 \u0646\u0635 \u0634\u0643\u0644\u064a \u064a\u0633\u062a\u062e\u062f\u0645 \u0641\u064a \u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0637\u0628\u0627\u0639\u0629 \u0648\u0627\u0644\u062a\u0646\u0636\u064a\u062f.\u0643\u0627\u0646 Lorem Ipsum \u0647\u0648 \u0627\u0644\u0646\u0635 \u0627\u0644\u0648\u0647\u0645\u064a \u0627\u0644\u0642\u064a\u0627\u0633\u064a \u0641\u064a \u0627\u0644\u0635\u0646\u0627\u0639\u0629 \u0645\u0646\u0630 \u0627\u0644\u0642\u0631\u0646 \u0627\u0644\u062e\u0627\u0645\u0633 \u0639\u0634\u0631 \u0627\u0644\u0645\u064a\u0644\u0627\u062f\u064a \u060c \u0639\u0646\u062f\u0645\u0627 \u0623\u062e\u0630\u062a \u0637\u0627\u0628\u0639\u0629 \u063a\u064a\u0631 \u0645\u0639\u0631\u0648\u0641\u0629 \u0644\u0648\u062d\u064b\u0627 \u0645\u0646 \u0627\u0644\u0646\u0648\u0639 \u0648\u062a\u062f\u0627\u0641\u0639\u062a \u0639\u0644\u064a\u0647 \u0644\u0639\u0645\u0644 \u0643\u062a\u0627\u0628 \u0639\u064a\u0646\u0629.\u0644\u0642\u062f \u0646\u062c\u062a \u0644\u064a\u0633 \u0641\u0642\u0637 \u062e\u0645\u0633\u0629 \u0642\u0631\u0648\u0646 \u060c \u0648\u0644\u0643\u0646 \u0623\u064a\u0636\u064b\u0627 \u0627\u0644\u0642\u0641\u0632\u0629 \u0641\u064a \u0627\u0644\u062a\u0646\u0636\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u060c \u0648\u0638\u0644\u062a \u062f\u0648\u0646 \u062a\u063a\u064a\u064a\u0631 \u062c\u0648\u0647\u0631\u064a.\u062a\u0645 \u0646\u0634\u0631\u0647 \u0641\u064a \u0627\u0644\u0633\u062a\u064a\u0646\u064a\u0627\u062a \u0645\u0646 \u0627\u0644\u0642\u0631\u0646 \u0627\u0644\u0645\u0627\u0636\u064a \u0645\u0639 \u0625\u0635\u062f\u0627\u0631 \u0623\u0648\u0631\u0627\u0642 Letraset \u0627\u0644\u062a\u064a \u062a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 \u0645\u0642\u0627\u0637\u0639 Lorem Ipsum \u060c \u0648\u0645\u0624\u062e\u0631\u064b\u0627 \u0645\u0639 \u0628\u0631\u0627\u0645\u062c \u0627\u0644\u0646\u0634\u0631 \u0627\u0644\u0645\u0643\u062a\u0628\u064a \u0645\u062b\u0644 Aldus PageMaker \u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u0625\u0635\u062f\u0627\u0631\u0627\u062a Lorem Ipsum.\u0627\u0644\u062c\u0632\u0621 \u0627\u0644\u0642\u064a\u0627\u0633\u064a \u0645\u0646 \u0644\u0648\u0631\u064a\u0645 \u0625\u064a\u0628\u0633\u0648\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0645\u0646\u0630 \u0627\u0644\u0642\u0631\u0646 \u0627\u0644\u062e\u0627\u0645\u0633 \u0639\u0634\u0631 \u0645\u0633\u062a\u0646\u0633\u062e \u0623\u062f\u0646\u0627\u0647 \u0644\u0644\u0645\u0647\u062a\u0645\u064a\u0646. \u062a\u0645 \u0623\u064a\u0636\u064b\u0627 \u0646\u0633\u062e \u0627\u0644\u0642\u0633\u0645\u064a\u0646 1.10.32 \u0648 1.10.33 \u0645\u0646 de Finibus Bonorum et Malorum \u0628\u0648\u0627\u0633\u0637\u0629 Cicero \u0641\u064a \u0634\u0643\u0644\u0647\u0645\u0627 \u0627\u0644\u0623\u0635\u0644\u064a \u0628\u0627\u0644\u0636\u0628\u0637 \u060c \u0645\u0635\u062d\u0648\u0628\u0629 \u0628\u0646\u0633\u062e \u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0645\u0646 \u062a\u0631\u062c\u0645\u0629 \u0639\u0627\u0645 1914 \u0628\u0648\u0627\u0633\u0637\u0629 H. Rackham."}}},lng:"en"});H.a;r.a.render(Object(s.jsx)(h,{children:Object(s.jsx)(M,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.3c269fbd.chunk.js.map