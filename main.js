(()=>{"use strict";var n={365:(n,t,e)=>{e.d(t,{A:()=>s});var r=e(354),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([n.id,"/* 1. Use a more-intuitive box-sizing model */\n*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n/* 2. Remove default margin */\n* {\n\tmargin: 0;\n}\n\nbody {\n\t/* 3. Add accessible line-height */\n\tline-height: 1.5;\n\t/* 4. Improve text rendering */\n\t-webkit-font-smoothing: antialiased;\n}\n\n/* 5. Improve media defaults */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n/* 6. Inherit fonts for form controls */\ninput,\nbutton,\ntextarea,\nselect {\n\tfont: inherit;\n}\n\n/* 7. Avoid text overflows */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\toverflow-wrap: break-word;\n}\n\n/* 8. Improve line wrapping */\np {\n\ttext-wrap: pretty;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\ttext-wrap: balance;\n}\n\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n\tisolation: isolate;\n}\n\n\n\n/* PROJECT CSS */\n\n.form-container {\n\tbackground-color: green;\n\tdisplay: inline-block;\n\tpadding: 30px;\n}\n\nform {\n\tbackground-color: pink;\n\tpadding: 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 7px;\n\twidth: 400px;\n}\n\nform>div {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-rows: 32px 1fr;\n}\n\nbutton {\n\twidth: fit-content;\n\tmargin: auto;\n}\n\ninput,\nselect {\n\twidth: 200px;\n\tborder: none;\n\tpadding: 2px 5px;\n\tborder-radius: 5px;\n\theight: 32px;\n}\n\ninput:invalid,\nselect:invalid {\n\tborder: 2px solid red;\n\tbackground-color: #fdd;\n}\n\ninput:valid,\nselect:valid {\n\tborder: 2px solid rgb(6, 85, 6);\n\tbackground-color: rgba(172, 255, 47, 0.616);\n}\n\n.error-msg {\n\tgrid-area: 2 / 2;\n\tbackground-color: rgba(0, 0, 0, 0.274);\n\tcolor: rgb(121, 5, 5);\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA,6CAA6C;AAC7C;;;CAGC,sBAAsB;AACvB;;AAEA,6BAA6B;AAC7B;CACC,SAAS;AACV;;AAEA;CACC,kCAAkC;CAClC,gBAAgB;CAChB,8BAA8B;CAC9B,mCAAmC;AACpC;;AAEA,8BAA8B;AAC9B;;;;;CAKC,cAAc;CACd,eAAe;AAChB;;AAEA,uCAAuC;AACvC;;;;CAIC,aAAa;AACd;;AAEA,4BAA4B;AAC5B;;;;;;;CAOC,yBAAyB;AAC1B;;AAEA,6BAA6B;AAC7B;CACC,iBAAiB;AAClB;;AAEA;;;;;;CAMC,kBAAkB;AACnB;;AAEA;;CAEC;AACD;;CAEC,kBAAkB;AACnB;;;;AAIA,gBAAgB;;AAEhB;CACC,uBAAuB;CACvB,qBAAqB;CACrB,aAAa;AACd;;AAEA;CACC,sBAAsB;CACtB,aAAa;CACb,aAAa;CACb,sBAAsB;CACtB,QAAQ;CACR,YAAY;AACb;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,4BAA4B;AAC7B;;AAEA;CACC,kBAAkB;CAClB,YAAY;AACb;;AAEA;;CAEC,YAAY;CACZ,YAAY;CACZ,gBAAgB;CAChB,kBAAkB;CAClB,YAAY;AACb;;AAEA;;CAEC,qBAAqB;CACrB,sBAAsB;AACvB;;AAEA;;CAEC,+BAA+B;CAC/B,2CAA2C;AAC5C;;AAEA;CACC,gBAAgB;CAChB,sCAAsC;CACtC,qBAAqB;AACtB",sourcesContent:["/* 1. Use a more-intuitive box-sizing model */\n*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n/* 2. Remove default margin */\n* {\n\tmargin: 0;\n}\n\nbody {\n\t/* 3. Add accessible line-height */\n\tline-height: 1.5;\n\t/* 4. Improve text rendering */\n\t-webkit-font-smoothing: antialiased;\n}\n\n/* 5. Improve media defaults */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n/* 6. Inherit fonts for form controls */\ninput,\nbutton,\ntextarea,\nselect {\n\tfont: inherit;\n}\n\n/* 7. Avoid text overflows */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\toverflow-wrap: break-word;\n}\n\n/* 8. Improve line wrapping */\np {\n\ttext-wrap: pretty;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\ttext-wrap: balance;\n}\n\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n\tisolation: isolate;\n}\n\n\n\n/* PROJECT CSS */\n\n.form-container {\n\tbackground-color: green;\n\tdisplay: inline-block;\n\tpadding: 30px;\n}\n\nform {\n\tbackground-color: pink;\n\tpadding: 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 7px;\n\twidth: 400px;\n}\n\nform>div {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-rows: 32px 1fr;\n}\n\nbutton {\n\twidth: fit-content;\n\tmargin: auto;\n}\n\ninput,\nselect {\n\twidth: 200px;\n\tborder: none;\n\tpadding: 2px 5px;\n\tborder-radius: 5px;\n\theight: 32px;\n}\n\ninput:invalid,\nselect:invalid {\n\tborder: 2px solid red;\n\tbackground-color: #fdd;\n}\n\ninput:valid,\nselect:valid {\n\tborder: 2px solid rgb(6, 85, 6);\n\tbackground-color: rgba(172, 255, 47, 0.616);\n}\n\n.error-msg {\n\tgrid-area: 2 / 2;\n\tbackground-color: rgba(0, 0, 0, 0.274);\n\tcolor: rgb(121, 5, 5);\n}"],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var A=0;A<n.length;A++){var c=[].concat(n[A]);r&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},354:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var d=n[s],A=r.base?d[0]+r.base:d[0],c=a[A]||0,l="".concat(A," ").concat(c);a[A]=c+1;var u=e(l),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var C=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:C,references:1})}i.push(l)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);t[s].references--}for(var d=r(n,o),A=0;A<a.length;A++){var c=e(a[A]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=d}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0;var r=e(72),o=e.n(r),a=e(825),i=e.n(a),s=e(659),d=e.n(s),A=e(56),c=e.n(A),l=e(540),u=e.n(l),p=e(113),C=e.n(p),m=e(365),g={};g.styleTagTransform=C(),g.setAttributes=c(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),o()(m.A,g),m.A&&m.A.locals&&m.A.locals,document.getElementById("form");const f=document.querySelector("#name"),v=document.getElementById("email"),h=document.getElementById("country"),b=document.getElementById("zip"),B=document.getElementById("password"),y=document.getElementById("confirmPassword"),x={name:"Name must be between 2-20 chars, my guy!",email:"Please insert a valid mail.",country:"Please select a country.",zip:"Enter valid zip.",password:"Password must be at least 8 characters long, including an uppercase letter, a lowercase letter, a number, and a special symbol.",confirmPassword:"The password doesn't match the previous one."},w={ch:["^(CH-)?\\d{4}$","Swiss postal codes must have exactly 4 digits: e.g. CH-1950 or 1950"],fr:["^(F-)?\\d{5}$","French postal codes must have exactly 5 digits: e.g. F-75012 or 75012"],de:["^(D-)?\\d{5}$","German postal codes must have exactly 5 digits: e.g. D-12345 or 12345"],ind:["^[1-9][0-9]{5}$","Indian postal codes must be exactly 6 digits long, e.g. 110001"],aus:["^(AUS-)?\\d{4}$","Australian postal codes must be exactly 4 digits, e.g. AUS-2000 or 2000"],nz:["^(NZ-)?\\d{4}$","New Zealand postal codes must be exactly 4 digits, e.g. NZ-6011 or 6011"],"":["","Select country first!"]};function E(n,t=x[n.id]){n.nextElementSibling.innerHTML=t}function k(n){n.nextElementSibling.innerHTML=""}f.addEventListener("input",(n=>{f.setCustomValidity(""),f.validity.valid?k(f):E(f)})),v.addEventListener("input",(n=>{v.setCustomValidity(""),v.validity.valid?k(v):E(v)})),h.addEventListener("input",(n=>{h.setCustomValidity(""),h.validity.valid?k(h):E(h)})),b.addEventListener("input",(n=>{const t=h.value;if(""===t)return b.setCustomValidity("Select a country first!"),void E(b,w[""][1]);const e=b.value;new RegExp(w[t][0]).test(e)?(b.setCustomValidity(""),k(b)):(b.setCustomValidity(w[t][1]),E(b,w[t][1]))})),B.addEventListener("input",(n=>{const t=B.value;/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,}$/.test(t)?(B.setCustomValidity(""),k(B)):(B.setCustomValidity("Password must be at least 8 characters long, including an uppercase letter, a lowercase letter, a number, and a special symbol."),E(B))})),y.addEventListener("input",(n=>{const t=B.value,e=y.value;console.log(t),console.log(e),t===e?(y.setCustomValidity(""),k(y)):(y.setCustomValidity("Passwords dont match"),E(y))}))})();
//# sourceMappingURL=main.js.map