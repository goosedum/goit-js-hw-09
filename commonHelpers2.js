import"./assets/modulepreload-polyfill-3cfb730f.js";let t={email:"",message:""};const a=document.querySelector(".feedback-form");document.querySelector("input");document.querySelector("textarea");a.addEventListener("input",e=>{t.email=e.currentTarget.email.value.trim(),t.message=e.currentTarget.message.value.trim(),r("feedback-form-state",t)});a.addEventListener("submit",e=>{e.preventDefault(),t.email===""||t.message===""?alert("Fill please all fields"):(console.log(t),a.reset(),localStorage.removeItem("feedback-form-state"),t={email:"",message:""},console.log(t))});window.addEventListener("DOMContentLoaded",()=>{const e=m("feedback-form-state");a.elements.email.value=(e==null?void 0:e.email)??"",a.elements.message.value=(e==null?void 0:e.message)??"",t.email=(e==null?void 0:e.email)??"",t.message=(e==null?void 0:e.message)??""});function r(e,s){const o=JSON.stringify(s);localStorage.setItem(e,o)}function m(e){const s=localStorage.getItem(e);try{return JSON.parse(s)}catch{return s}}
//# sourceMappingURL=commonHelpers2.js.map
