(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),l=(a(20),a(2)),s=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Ujjwal-Jamuna"),r.a.createElement("h2",null,"Our Pictures"),r.a.createElement("p",null,'"Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs." - (1 Corinthians 13:4-5)'))},o=a(8),u=a.n(o),m=a(14),d=a(5);a(28),a(22);d.initializeApp({apiKey:"AIzaSyCJZ_nV3V9GH4WtiFF0E6jEnH1Zl47vzOQ",authDomain:"firegram-d23bc.firebaseapp.com",projectId:"firegram-d23bc",storageBucket:"firegram-d23bc.appspot.com",messagingSenderId:"306479081211",appId:"1:306479081211:web:f74a4ce0a12b6ac4d7b25e"});var p=d.storage(),f=d.firestore(),g=d.firestore.FieldValue.serverTimestamp,b=function(e){var t=Object(n.useState)(0),a=Object(l.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(null),s=Object(l.a)(i,2),o=s[0],d=s[1],b=Object(n.useState)(null),v=Object(l.a)(b,2),E=v[0],j=v[1];return Object(n.useEffect)((function(){var t=p.ref(e.name),a=f.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){d(e)}),Object(m.a)(u.a.mark((function e(){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:return n=e.sent,r=g(),e.next=6,a.add({url:n,createdAt:r});case 6:j(n);case 7:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:E,error:o}},v=a(3),E=function(e){var t=e.file,a=e.setFile,c=b(t),i=c.progress,l=c.url;return Object(n.useEffect)((function(){l&&a(null)}),[l,a]),r.a.createElement(v.a.div,{className:"progress-bar",initial:{width:0},animate:{width:i+"%"}})},j=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),s=Object(l.a)(i,2),o=s[0],u=s[1],m=["image/png","image/jpeg"];return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(c(t),u("")):(c(null),u("Please select an image file (png or jpg)"))}}),r.a.createElement("span",null,"+")),r.a.createElement("div",{className:"output"},o&&r.a.createElement("div",{className:"error"},o),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(E,{file:a,setFile:c})))},O=a(9),y=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=f.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:r}},h=function(e){var t=e.setSelectedImg,a=y("images").docs;return r.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return r.a.createElement(v.a.div,{className:"img-wrap",key:e.id,layout:!0,whileHover:{opacity:1},s:!0,onClick:function(){return t(e.url)}},r.a.createElement(v.a.img,{src:e.url,alt:"uploaded pic",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}))})))},S=function(e){var t=e.setSelectedImg,a=e.selectedImg;return r.a.createElement(v.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&t(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(v.a.img,{src:a,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}}))};var I=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(j,null),r.a.createElement(h,{setSelectedImg:c}),a&&r.a.createElement(S,{selectedImg:a,setSelectedImg:c}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.41d02339.chunk.js.map