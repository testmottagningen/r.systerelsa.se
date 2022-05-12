"use strict";(self.webpackChunksyster_elsa=self.webpackChunksyster_elsa||[]).push([[444],{1127:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var n=a(5861),l=a(7757),s=a.n(l),r=a(7294),c=a(6464),i=a(3366),o=a(5093),m=["children"],d=function(e){var t,a=e.children,n=(0,i.Z)(e,m);if("/boka"==n.to){var l=(0,r.useContext)(o.I18nextContext);n.to=(t=l.language,(l.generateDefaultLanguagePage||t!==l.defaultLanguage?"/"+t:"")+n.to)}return-1!==n.to.indexOf("/boka")||"http"===n.to.substring(0,4)||-1!==n.to.indexOf(".pdf")?(n.href=n.to,n.to=void 0,r.createElement("a",n,a)):r.createElement(o.Link,n,a)},u=a(6418),p=a(7448),f=a(3343);function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},v.apply(this,arguments)}function g(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var E=(0,r.forwardRef)((function(e,t){var a=e.color,n=e.size,l=g(e,["color","size"]);return r.createElement("svg",v({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:a},l),r.createElement("path",{d:"M5.523 10.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.035 21.035 0 0 0 .5-1.05 11.96 11.96 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.888 3.888 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 4.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"}),r.createElement("path",{fillRule:"evenodd",d:"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.64 11.64 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.707 19.707 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"}))}));E.defaultProps={color:"currentColor",size:"1em"};var b=E,y=(0,f.Z)((function(e){var t=e.location,a=e.search,l=a.id,i=a.test,o=(0,r.useState)(),m=o[0],f=o[1],v="https://europe-west1-testmottagningen.cloudfunctions.net/result-pdf?id="+l+(i?"&test=true":"");(0,r.useEffect)((0,n.Z)(s().mark((function e(){var t,a,n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l){e.next=16;break}return t={headers:{Accept:"application/json","Content-Type":"application/json"}},a="https://europe-west1-testmottagningen.cloudfunctions.net/result-data?id="+l,e.prev=3,e.next=6,fetch(a,t);case 6:return n=e.sent,e.next=9,n.json();case 9:r=e.sent,f(r),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),f("error");case 16:case"end":return e.stop()}}),e,null,[[3,13]])}))),[l]);var g,E,y;return r.createElement(c.Z,{location:t},r.createElement(p.Z,{title:"Test result"}),r.createElement("div",{className:"container my-5 pt-lg-5"},r.createElement("h1",{className:"h3"},"Test result"),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-8"},!l&&r.createElement("div",null),!m&&l&&r.createElement("div",null,r.createElement(u.Z,{text:"Loading result, please wait"})),m&&"error"===m.status&&r.createElement("div",{className:"alert alert-danger my-3 small",role:"alert"},m.data&&m.data.codes&&r.createElement(r.Fragment,null,r.createElement("strong",null,"Unable to find test result"),r.createElement("p",null,"Test is unavailable because it is older than 7 days. If you still have problem contact us"," ",r.createElement(d,{to:"/kontakt"},"here"),".")),m.data&&!m.data.codes&&r.createElement(r.Fragment,null,r.createElement("strong",null,"Opps"),r.createElement("p",null,"We where unable to get your result data, please try again. If you still have problem contact us"," ",r.createElement(d,{to:"/kontakt"},"here"),"."))),m&&m.data&&m.data.firstname&&r.createElement("div",null,("antigen"==m.data.type||"pcr"==m.data.type)&&r.createElement("p",{className:"mb-3"},"Validity of the ",m.data.type,"-test certificate is 96 hours."),"antigen"!=m.data.type&&"pcr"!=m.data.type&&r.createElement("p",{className:"mb-3"},"Result of the ",m.data.type,"-test."),r.createElement("ol",{className:"list-group bg-cream"},r.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-start px-1"},r.createElement("div",{className:"ms-2 me-auto"},r.createElement("div",{className:"fw-bold"},"Name:"),m.data.firstname," ",m.data.lastname)),r.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-start px-1"},r.createElement("div",{className:"ms-2 me-auto"},r.createElement("div",{className:"fw-bold"},"Date of Birth:"),m.data.date_of_birth)),r.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-start px-1"},r.createElement("div",{className:"ms-2 me-auto"},r.createElement("div",{className:"fw-bold"},"Citizenship:"),m.data.citizenship)),m.data.address&&r.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-start px-1"},r.createElement("div",{className:"ms-2 me-auto"},r.createElement("div",{className:"fw-bold"},"Address:"),m.data.address)),m.data.passport_number&&r.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-start px-1"},r.createElement("div",{className:"ms-2 me-auto"},r.createElement("div",{className:"fw-bold"},"Passport Number:"),m.data.passport_number)),m.data.personal_number&&r.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-start px-1"},r.createElement("div",{className:"ms-2 me-auto"},r.createElement("div",{className:"fw-bold"},"Personal Identity Number:"),m.data.personal_number)),r.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-start px-1"},r.createElement("div",{className:"ms-2 me-auto"},r.createElement("div",{className:"fw-bold"},"Date of test:"),m.data.tested_at)),r.createElement("li",{className:"list-group-item list-group-item-"+(g=m.data,E={inconclusive:"secondary",negative:"success",positive:"danger"},y="",("negative"!=g.analyze_result&&"positive"!=g.analyze_result?E.inconclusive:("antigen"==g.type||"pcr"==g.type?y=E[g.analyze_result]:"antibody"==g.type&&(y="positive"==g.analyze_result?E.negative:E.positive),y||(y=E.inconclusive),y))+" d-flex justify-content-between align-items-start px-1")},r.createElement("div",{className:"ms-2 me-auto"},r.createElement("div",{className:"fw-bold"},"Result:"),"antibody"==m.data.type&&r.createElement("p",null,"Has been tested ",r.createElement("strong",null,m.data.analyze_result.toUpperCase())," ","with a value of ",m.data.analyze_value," BAU/mL.  ",m.data.certification),("antigen"==m.data.type||"pcr"==m.data.type)&&r.createElement("p",null,"Has been tested ",r.createElement("strong",null,m.data.analyze_result.toUpperCase())," for SARS-CoV-2 (Covid-19). ",m.data.certification)))),"positive"===m.data.analyze_result&&("antigen"==m.data.type||"pcr"==m.data.type)&&r.createElement(d,{className:"btn btn-danger text-light px-3 rounded-pill me-2 mt-3",to:"/assets/pdf/covid-19-information-english.pdf"},"Download Covid-19 information",r.createElement(b,{className:"ms-1"})),m.data.certificates.testmottagningen&&r.createElement(d,{className:"btn btn-primary text-light px-3 rounded-pill me-2 mt-3",to:""+v},"Download result",r.createElement(b,{className:"ms-1"})),m.data.certificates.covidbevis&&r.createElement(d,{className:"btn btn-primary text-light px-3 rounded-pill mt-3",to:v+"&type=covidbevis"},"Download EU covid proof",r.createElement(b,{className:"ms-1"})))))))}))}}]);
//# sourceMappingURL=component---src-pages-resultat-js-fc38dab059fdc8eafe9e.js.map