(this["webpackJsonpblock-cipher-technique"]=this["webpackJsonpblock-cipher-technique"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(10)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),r=n(2),o=n.n(r);n(8);function c(e){for(var t=e.length/2,n=[],l=[],a=0;a<e.length/2;a++)n[a]=e[a];for(var r=0,o=t;o<e.length;o++)l[r]=e[o],r++;n=function(e,t){for(var n=e[0],l=0;l<e.length;l++)e[l]=l==t-1?n:e[l+1];return e}(n,t),l=function(e,t){for(var n=e[0],l=0;l<e.length;l++)e[l]=l==t-1?n:e[l+1];return e}(l,t);for(var c=0,i=0;i<e.length;i++)i<5?e[i]=n[i]:i>4&&(e[i]=l[c],c++);return e}function i(e){var t=[8];return t[0]=e[5],t[1]=e[2],t[2]=e[6],t[3]=e[3],t[4]=e[7],t[5]=e[4],t[6]=e[9],t[7]=e[8],t}function u(e){var t;return t=i(e=function(e,t){return c(e),c(e)}(e)),document.getElementById("lblkey3").textContent="Key2 after 2 LS is : "+t.join(" "),t}function m(e,t){for(var n=[],l=0;l<e.length/2;l++)n[l]=e[l];return n}function s(e,t){for(var n=[],l=0,a=t;a<e.length;a++)n[l]=e[a],l++;return n}function d(e){var t=e.length/2;return m(e),function(e){var t=[8];return t[0]=e[3],t[1]=e[0],t[2]=e[1],t[3]=e[2],t[4]=e[1],t[5]=e[2],t[6]=e[3],t[7]=e[0],console.log("permut: ",t),t}(s(e,t))}function b(e,t){!function(e,t){var n=[8];n[0]=e[1],n[1]=e[5],n[2]=e[2],n[3]=e[0],n[4]=e[3],n[5]=e[7],n[6]=e[4],n[7]=e[6];var l=d(n),a=function(e,t){for(var n=[],l=0;l<8;l++)e[l]==t[l]?n[l]=0:n[l]=1;return n}(l,t),r=m(a),o=s(a,4);console.log(r),console.log(o),document.getElementById("lblPlainText1").textContent="PlainText after IP is : "+n.join(" "),document.getElementById("lblPlainText2").textContent="PlainText after EP is : "+l.join(" "),document.getElementById("lblPlainText3").textContent="PlainText after XOR S0 is : "+r.join(" "),document.getElementById("lblPlainText4").textContent="PlainText after XOR S1 is : "+o.join(" ")}(e,t)}var E=function(){var e,t,n=0,l=0;return a.a.createElement("div",{className:""},a.a.createElement("h1",null," Block Cipher Technique "),a.a.createElement("input",{className:"inpText",type:"number",placeholder:" Enter 8-bits Platin Text ...",onChange:function(e){t=e.target.value,n=t.length,t=t.toString().split(""),console.log(t),document.getElementById("lblCount1").style.color=8!=n?"red":"green",document.getElementById("lblCount1").textContent=n}}),a.a.createElement("label",{id:"lblCount1"}),a.a.createElement("br",null),a.a.createElement("input",{className:"inpText",type:"number",placeholder:" Enter 10-bits Key",onChange:function(t){e=t.target.value,l=e.length,e=e.toString().split(""),document.getElementById("lblCount2").style.color=10!=l?"red":"green",document.getElementById("lblCount2").textContent=l}}),a.a.createElement("label",{id:"lblCount2"}),a.a.createElement("br",null),a.a.createElement("input",{className:"inpBtn",type:"submit",onClick:function(a){if(8===n&&10===l){e=function(e){var t=[];return t[0]=e[2],t[1]=e[4],t[2]=e[1],t[3]=e[6],t[4]=e[3],t[5]=e[9],t[6]=e[0],t[7]=e[8],t[8]=e[7],t[9]=e[5],e=c(t)}(e),document.getElementById("lblkey1").textContent="Key after P10 is : "+e.join(" ");var r=function(e){var t;return t=i(e),document.getElementById("lblkey2").textContent="Key1 after P8 is : "+t.join(" "),t}(e),o=u(e);console.log("key1 : ",r),console.log("key2 : ",o),b(t,r)}else alert("please enter valid length bits of both plain text and key")}}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblkey1"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblkey2"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblkey3"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText1"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText2"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText3"}),a.a.createElement("br",null),a.a.createElement("label",{id:"lblPlainText4"}),a.a.createElement("br",null))};n(9);var f=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(E,null),a.a.createElement("div",{className:"Footer"},a.a.createElement("div",{className:"updatedsoon"},"Updated Soon"),a.a.createElement("hr",null),a.a.createElement("h3",null,"Assignment Created By:"),a.a.createElement("li",null,"1. Muhammad Arsalan 2018-CS-203"),a.a.createElement("li",null,"2. Rumail Ansari 2018-CS-280"),a.a.createElement("li",null,"3. Waqas Ahmed 2018-CS-231")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.a7150920.chunk.js.map