(this["webpackJsonpblock-cipher-technique"]=this["webpackJsonpblock-cipher-technique"]||[]).push([[0],[,,,function(e,t,l){e.exports=l(10)},,,,,function(e,t,l){},function(e,t,l){},function(e,t,l){"use strict";l.r(t);var n=l(0),a=l.n(n),r=l(2),o=l.n(r);l(8);function i(e){var t=[8];return console.log("rightpermut: ",e),t[0]=e[3],t[1]=e[0],t[2]=e[1],t[3]=e[2],t[4]=e[1],t[5]=e[2],t[6]=e[3],t[7]=e[0],console.log("ExpansionPermut",t),t}function c(e){var t=[];return t[0]=e[1],t[1]=e[3],t[2]=e[2],t[3]=e[0],t}function u(e,t){for(var l=[],n=0;n<e.length/2;n++)l[n]=e[n];return console.log("leftpermut",l),l}function m(e,t){for(var l=[],n=0,a=t;a<e.length;a++)l[n]=e[a],n++;return console.log("rightpermut",l),l}function s(e){var t=e[0];console.log(t);for(var l=0;l<e.length;l++)l===e.length-1?e[l]=t:e[l]=e[l+1];return console.log(e),e}function b(e){for(var t=e.length/2,l=[],n=[],a=0;a<e.length/2;a++)l[a]=e[a];for(var r=0,o=t;o<e.length;o++)n[r]=e[o],r++;l=s(l),n=function(e,t){for(var l=e[0],n=0;n<e.length;n++)e[n]=n===t-1?l:e[n+1];return console.log(e),e}(n,t);for(var i=0,c=0;c<e.length;c++)c<t?e[c]=l[c]:c>t-1&&(e[c]=n[i],i++);return console.log(e),e}var d=function(e){var t=[];return t[0]=e[2],t[1]=e[4],t[2]=e[1],t[3]=e[6],t[4]=e[3],t[5]=e[9],t[6]=e[0],t[7]=e[8],t[8]=e[7],t[9]=e[5],e=b(t)},E=function(e){var t=[8];return t[0]=e[5],t[1]=e[2],t[2]=e[6],t[3]=e[3],t[4]=e[7],t[5]=e[4],t[6]=e[9],t[7]=e[8],console.log("permut: ",t),t};function g(e){var t;return e=function(e,t){return b(e),b(e)}(e),t=E(e),document.getElementById("lblkey3").textContent="Key2 after 2 LS is : "+t.join(" "),t}function x(e,t){var l=[];console.log("exp_permut, value:",e,t);for(var n=0;n<e.length;n++)e[n]==parseInt(t[n])?(console.log("exp_permut, value:",e[n],t[n]),l[n]=0,console.log("s[i]:",l[n])):(console.log("exp_permut, value:",e[n],t[n]),l[n]=1,console.log("s[i]:",l[n]));return console.log("s:",l),l}function p(e,t,l){var n=[1,0,0,0,0,0,0,0],a=function(e){var t=[8];return t[0]=e[1],t[1]=e[5],t[2]=e[2],t[3]=e[0],t[4]=e[3],t[5]=e[7],t[6]=e[4],t[7]=e[6],t}(e),r=function(e){var t=e.length/2,l=u(e),n=m(e,t);return[l,n,i(n)]}(a),o=x(r[2],t),b=x(o,n);console.log("step5",b);var d=s(b),E=u(d),g=m(d,4);console.log("left_new_s0, right_new_s1",E,g);var p=c(g);console.log("step7, exp_permut[0]",p,r[0]);var f=x(p,r[0]),h=i(f),v=x(h,l),y=x(v,n),C=s(y),T=u(C),P=m(C,4);console.log(P,T);var B=c(P),I=x(B,r[1]),S=function(e,t,l){var n=[];console.log("left",e),console.log("right",t),console.log("mid",l);for(var a=0,r=0;r<2*parseInt(l);r++)r<l?(n[r]=e[r],console.log("left[i]",e[r]),console.log("value[i]]",n[r])):r>l-1&&(n[r]=t[a],console.log("right[i]",t[r]),console.log("value[i]]",n[r]),a++);return n}(I,f,4),j=function(e){var t=[8];return t[0]=e[3],t[1]=e[0],t[2]=e[2],t[3]=e[4],t[4]=e[6],t[5]=e[1],t[6]=e[7],t[7]=e[5],t}(S);document.getElementById("lblCipherText").textContent="Cipher text is : "+j.join(" "),document.getElementById("lblPlainText1").textContent="Result after Step1 is : "+a.join(" "),document.getElementById("lblPlainText2").textContent="Result after Step2 is : "+r[0].join(" ")+"  "+r[1].join(" "),document.getElementById("lblPlainText3").textContent="Result after Step3 is : "+r[2].join(" "),document.getElementById("lblPlainText4").textContent="Result after Step4 is : "+o.join(" "),document.getElementById("lblPlainText5").textContent="Result after Step5 is : "+b.join(" "),document.getElementById("lblPlainText6").textContent="Result after Step6 is : "+d.join(" "),document.getElementById("lblPlainText7").textContent="Result after Step7 is : "+p.join(" "),document.getElementById("lblPlainText8").textContent="Result after Step8 is : "+f.join(" "),document.getElementById("lblPlainText9").textContent="Result after Step11 is : "+h.join(" "),document.getElementById("lblPlainText10").textContent="Result after Step12 is : "+v.join(" "),document.getElementById("lblPlainText11").textContent="Result after Step13 is : "+y.join(" "),document.getElementById("lblPlainText12").textContent="Result after Step14 is : "+C.join(" "),document.getElementById("lblPlainText13").textContent="Result after Step15 is : "+B.join(" "),document.getElementById("lblPlainText14").textContent="Result after Step16 is : "+I.join(" "),document.getElementById("lblPlainText15").textContent="Result after Step17 is : "+S.join(" "),document.getElementById("lblPlainText16").textContent="Result after Step18 is : "+j.join(" ")}var f=function(){var e,t,l=0,n=0;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null," Block Cipher Technique "),a.a.createElement("b",null," Please enter binary numbers only e.g: (0 or 1) "),a.a.createElement("form",{onSubmit:function(a){if(a.preventDefault(),8===l&&10===n){e=d(e),document.getElementById("lblkey1").textContent="Key after P10 is : "+e.join(" ");var r=function(e){var t;return t=E(e),document.getElementById("lblkey2").textContent="Key1 after P8 is : "+t.join(" "),t}(e),o=g(e);console.log("key1 : ",r),console.log("key2 : ",o),p(t,r,o)}else alert("please enter valid length bits of both plain text and key")}},a.a.createElement("input",{className:"inpText",type:"number",placeholder:" Enter 8-bits Platin Text ...",onChange:function(e){t=e.target.value,l=t.length,t=t.toString().split(""),console.log(t),document.getElementById("lblCount1").style.color=8!==l?"red":"green",document.getElementById("lblCount1").textContent=l}}),a.a.createElement("label",{id:"lblCount1"}),a.a.createElement("br",null),a.a.createElement("input",{className:"inpText",type:"number",placeholder:" Enter 10-bits Key",onChange:function(t){e=t.target.value,n=e.length,e=e.toString().split(""),document.getElementById("lblCount2").style.color=10!==n?"red":"green",document.getElementById("lblCount2").textContent=n}}),a.a.createElement("label",{id:"lblCount2"}),a.a.createElement("br",null),a.a.createElement("input",{className:"inpBtn",type:"submit"})),a.a.createElement("br",null),a.a.createElement("label",{id:"lblCipherText"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblkey1"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblkey2"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblkey3"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText1"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText2"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText3"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText4"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText5"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText6"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText7"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText8"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText9"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText10"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText11"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText12"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText13"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText14"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText15"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText16"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblCipherText"}),a.a.createElement("br",null))};l(9);var h=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,null),a.a.createElement("div",{className:"Footer"},a.a.createElement("div",{className:"updatedsoon"},"Updated Soon"),a.a.createElement("hr",null),a.a.createElement("h3",null,"Assignment Created By:"),a.a.createElement("ul",null,a.a.createElement("li",null,"1. Muhammad Arsalan 2018-CS-203"),a.a.createElement("li",null,"2. Rumail Ansari 2018-CS-280"),a.a.createElement("li",null,"3. Waqas Ahmed 2018-CS-231"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.dd4de6c1.chunk.js.map