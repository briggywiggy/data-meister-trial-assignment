(this["webpackJsonpdata-meister-trial-assignment"]=this["webpackJsonpdata-meister-trial-assignment"]||[]).push([[0],{114:function(e,a,t){},115:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),o=t.n(l),c=t(36),i=t(14),u=t(72),m=t.n(u),s=t(24),d=t(78),E=t(179),g=t(181),b=t(183),v=t(180),h=t(73),p=t.n(h),f=t(172),S=t(162),O=t(171),y=t(117),x=t(170),k=t(184),C=t(188),A=t(118),D=t(187),w=t(165),I=t(190),T=t(182),N=t(51),M=function(e){var a=e.country,t=e.handleChangeCountry;return r.a.createElement(S.a,null,r.a.createElement(w.a,{id:"demo-simple-select-label"},"Country"),r.a.createElement(T.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a,onChange:t},N.countries.sort().map((function(e,a){return r.a.createElement(I.a,{value:e,key:a},e)}))))},j=function(e){var a=e.city,t=e.handleChangeCity;return r.a.createElement(S.a,null,r.a.createElement(w.a,{id:"demo-simple-select-label"},"Cities"),r.a.createElement(T.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a,onChange:t},N.cities.sort().map((function(e,a){return r.a.createElement(I.a,{value:e,key:a},e)}))))},R=t(169),L=t(4),B=t(191),V=t(120),K=(t(186),Object(R.a)((function(e){return{root:{width:300+2*e.spacing(3)},margin:{height:e.spacing(3)}}})));var _="0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",z=[{value:0},{value:30},{value:60},{value:120}],P=Object(L.a)({root:{color:"#3880ff",height:2,padding:"15px 0"},thumb:{height:28,width:28,backgroundColor:"#fff",boxShadow:_,marginTop:-14,marginLeft:-14,"&:focus, &:hover, &$active":{boxShadow:"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)","@media (hover: none)":{boxShadow:_}}},active:{},valueLabel:{left:"calc(-50% + 12px)",top:-22,"& *":{background:"transparent",color:"#000"}},track:{height:2},rail:{height:2,opacity:.5,backgroundColor:"#bfbfbf"},mark:{backgroundColor:"#bfbfbf",height:8,width:1,marginTop:-3},markActive:{opacity:1,backgroundColor:"currentColor"}})(B.a);function U(e){var a=e.handleChangeAge,t=K();return r.a.createElement("div",{className:t.root},r.a.createElement(V.a,{gutterBottom:!0},"Age"),r.a.createElement(P,{"aria-label":"ios slider",defaultValue:60,marks:z,valueLabelDisplay:"on",onChange:a}))}var G=t(75),H=t.n(G),W=function(e){var a=e.onFileLoaded;return r.a.createElement(H.a,{onFileLoaded:a})},F=function(e){var a=e.redirectToOutputTab,t=Object(c.c)((function(e){return e.csvData})),n=Object(c.b)(),l=r.a.useState(),o=Object(s.a)(l,2),i=o[0],u=o[1],m=r.a.useState(),d=Object(s.a)(m,2),E=d[0],g=d[1],b=r.a.useState(60),v=Object(s.a)(b,2),h=v[0],w=v[1],I=r.a.useState(),T=Object(s.a)(I,2),N=T[0],R=T[1],L=r.a.useState("Austria"),B=Object(s.a)(L,2),V=B[0],K=B[1],_=r.a.useState("AMSTERDAM"),z=Object(s.a)(_,2),P=z[0],G=z[1],H=r.a.useState(),F=Object(s.a)(H,2),Y=F[0],J=F[1],Z=r.a.useState(p()().format("YYYY-MM-DD")),X=Object(s.a)(Z,2),$=X[0],q=X[1];return r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(x.a,{container:!0,spacing:3},r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(y.a,null,"User:")),r.a.createElement(x.a,{item:!0,xs:6},r.a.createElement(D.a,{label:"Name",variant:"outlined",fullWidth:!0,onChange:function(e){u(e.target.value)}})),r.a.createElement(x.a,{item:!0,xs:2},r.a.createElement(S.a,{component:"fieldset"},r.a.createElement(y.a,{component:"legend"},"Gender"),r.a.createElement(C.a,{"aria-label":"gender",name:"gender1",onChange:function(e){g(e.target.value)}},r.a.createElement(O.a,{value:"female",control:r.a.createElement(k.a,null),label:"Female"}),r.a.createElement(O.a,{value:"male",control:r.a.createElement(k.a,null),label:"Male"})))),r.a.createElement(x.a,{item:!0,xs:4},r.a.createElement(U,{handleChangeAge:function(e,a){w(a)}})),r.a.createElement(x.a,{item:!0,xs:6},r.a.createElement(D.a,{label:"Email",variant:"outlined",fullWidth:!0,onChange:function(e){R(e.target.value)}})),r.a.createElement(x.a,{item:!0,xs:2},r.a.createElement(M,{country:V,handleChangeCountry:function(e){K(e.target.value)}})),r.a.createElement(x.a,{item:!0,xs:4},r.a.createElement(j,{city:P,handleChangeCity:function(e){G(e.target.value)}})),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(y.a,null,"Data:")),r.a.createElement(x.a,{item:!0,xs:6},r.a.createElement(W,{onFileLoaded:function(e,a){n(function(e){return{type:"SET_CSV_DATA",csvData:e}}(e))}})),r.a.createElement(x.a,{item:!0,xs:2},r.a.createElement(f.a,{variant:"contained",disabled:0===Object.keys(t).length,onClick:function(e){console.log(t),J(t.toString())}},"Upload")),r.a.createElement(x.a,{item:!0,xs:4},r.a.createElement(D.a,{id:"date",label:"Date",type:"date",defaultValue:$,InputLabelProps:{shrink:!0},onChange:function(e){q(e.target.value)}})),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(A.a,{className:"full-width",rowsMax:7,rows:7,"aria-label":"maximum height",placeholder:"Input CSV data",value:Y,onChange:function(e){J(e.target.value)}})),r.a.createElement(x.a,{item:!0,xs:8}),r.a.createElement(x.a,{item:!0,xs:4},r.a.createElement(f.a,{variant:"contained",disabled:!(i&&E&&h&&N&&V&&P&&Y&&$),onClick:function(e){n(function(e){return{type:"SET_USER_DATA",userData:e}}({name:i,gender:E,age:h,email:N,country:V,city:P,csv:Y,date:$})),a()}},"Continue"))))},Y=t(174),J=t(178),Z=t(177),X=t(173),$=t(175),q=t(176),Q=function(){var e=Object(c.c)((function(e){return e.userData})),a=Object(c.c)((function(e){return e.csvData}));return r.a.createElement(x.a,{container:!0,spacing:3},r.a.createElement(x.a,{item:!0,xs:8}),r.a.createElement(x.a,{item:!0,xs:4},e.name,", ",e.gender,", ",e.age),r.a.createElement(x.a,{item:!0,xs:6},e.date),r.a.createElement(x.a,{item:!0,xs:6},e.country,", ",e.city,", ",e.email),r.a.createElement(x.a,{item:!0,xs:6},r.a.createElement(X.a,null,r.a.createElement(Y.a,{"aria-label":"simple table"},r.a.createElement($.a,null,r.a.createElement(q.a,null,r.a.createElement(Z.a,null,a[0][0]),r.a.createElement(Z.a,null,a[0][1]))),r.a.createElement(J.a,null,a.map((function(e,a){if(a>0)return r.a.createElement(q.a,{key:a},r.a.createElement(Z.a,null,e[0]),r.a.createElement(Z.a,null,e[1]))})))))),r.a.createElement(x.a,{item:!0,xs:6}))};function ee(e){var a=e.children,t=e.value,n=e.index,l=Object(d.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},l),t===n&&r.a.createElement(g.a,{p:3},a))}function ae(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var te=function(){var e=r.a.useState(0),a=Object(s.a)(e,2),t=a[0],n=a[1];return r.a.createElement("div",null,r.a.createElement(E.a,{position:"static"},r.a.createElement(b.a,{value:t,onChange:function(e,a){n(a)},"aria-label":"simple tabs example"},r.a.createElement(v.a,Object.assign({label:"Input"},ae(0))),r.a.createElement(v.a,Object.assign({label:"Output"},ae(1))))),r.a.createElement(ee,{value:t,index:0},r.a.createElement(F,{redirectToOutputTab:function(){n(1)}})),r.a.createElement(ee,{value:t,index:1},r.a.createElement(Q,null)))},ne=t(59),re=function(){return r.a.createElement("div",{className:"not-found-page page"},"404! - ",r.a.createElement(ne.a,{to:"/"},"Go home"))},le=m()(),oe=function(){return r.a.createElement(i.b,{history:le},r.a.createElement("div",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:te,exact:!0}),r.a.createElement(i.a,{component:re}))))},ce=t(31),ie=t(76),ue=t(77),me={},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_USER_DATA":return a.userData;default:return e}},de={},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_CSV_DATA":return a.csvData;default:return e}},ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,be=Object(ue.a)();t(114),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=function(){var e=[ie.a,be];return Object(ce.e)(Object(ce.c)({csvData:Ee,userData:se}),ge(ce.a.apply(void 0,e)))}(),he=r.a.createElement(c.a,{store:ve},r.a.createElement(oe,null));o.a.render(he,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},51:function(e){e.exports=JSON.parse('{"cities":["MOSKVA (Moscow)","LONDON","St Petersburg","BERLIN","MADRID","ROMA","KIEV","PARIS","BUCURESTI (Bucharest)","BUDAPEST","Hamburg","MINSK","WARSZAWA (Warsaw)","BEOGRAD (Belgrade)","WIEN (Vienna)","Kharkov","Barcelona","Novosibirsk","Nizhny Novgorod","Milano (Milan)","Ekaterinoburg","M\xfcnchen (Munich)","PRAHA (Prague)","Samara","Omsk","SOFIA","Dnepropetrovsk","Kazan","Ufa","Chelyabinsk","Donetsk","Napoli (Naples)","Birmingham","Perm","Rostov-na-Donu","Odessa","Volgograd","K\xf6ln (Cologne)","Torino (Turin)","Voronezh","Krasnoyarsk","Saratov","ZAGREB","Zaporozhye","L\xf3dz","Marseille","RIGA","Lvov","ATHINAI (Athens)","Salonika","STOCKHOLM","Krak\xf3w","Valencia","AMSTERDAM","Leeds","Tolyatti","Kryvy Rig","Sevilla","Palermo","Ulyanovsk","KISHINEV","Genova","Izhevsk","Frankfurt am Main","Krasnodar","Wroclaw (Breslau)","Glasgow","Yaroslave","Khabarovsk","Vladivostok","Zaragoza","Essen","Rotterdam","Irkutsk","Dortmund","Stuttgart","Barnaul","VILNIUS","Poznan","D\xfcsseldorf","Novokuznetsk","LISBOA (Lisbon)","HELSINKI","M\xe1laga","Bremen","Sheffield","SARAJEVO","Penza","Ryazan","Orenburg","Naberezhnye Tchelny","Duisburg","Lipetsk","Hannover","Mykolaiv","Tula","OSLO","Tyumen","KOBENHAVN (Copenhagen)","Kemerovo"],"countries":["Russia","UK","Germany","Spain","Italy","Ukraine","France","Romania","Hungary","Belarus","Poland","Serbia","Austria","Czech Republic","Bulgaria","Croatia","Latvia","Greece","Sweden","Netherlands","Moldova","Lithuania","Portugal","Finland","Bosnia","Norway","Denmark"]}')},97:function(e,a,t){e.exports=t(115)}},[[97,1,2]]]);
//# sourceMappingURL=main.1988569a.chunk.js.map