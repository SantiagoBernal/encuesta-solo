import{i as p,a1 as f,o as c,c as _,w as a,a2 as b,a as e,b as w,n as V,m as g,p as $,l as n,q as r,u as t,z as y,H as h}from"./index-354d724b.js";import{_ as k}from"./SectionFullScreen-09cddf13.js";import{_ as m,a as L}from"./FormField-b38277b3.js";const j={__name:"LoginView",setup(P){const o=p({login:"john.doe",pass:"highly-secure-password-fYjUw-",remember:!0}),u=f(),i=()=>{u.push("/dashboard")};return(U,s)=>(c(),_(b,null,{default:a(()=>[e(k,{bg:"purplePink"},{default:a(({cardClass:d})=>[e(w,{class:V(d),"is-form":"",onSubmit:g(i,["prevent"])},{footer:a(()=>[e($,null,{default:a(()=>[e(n,{type:"submit",color:"info",label:"Login"}),e(n,{to:"/dashboard",color:"info",outline:"",label:"Back"})]),_:1})]),default:a(()=>[e(m,{label:"Login",help:"Please enter your login"},{default:a(()=>[e(r,{modelValue:o.login,"onUpdate:modelValue":s[0]||(s[0]=l=>o.login=l),icon:t(y),name:"login",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),e(m,{label:"Password",help:"Please enter your password"},{default:a(()=>[e(r,{modelValue:o.pass,"onUpdate:modelValue":s[1]||(s[1]=l=>o.pass=l),icon:t(h),type:"password",name:"password",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),e(L,{modelValue:o.remember,"onUpdate:modelValue":s[2]||(s[2]=l=>o.remember=l),name:"remember",label:"Remember","input-value":!0},null,8,["modelValue"])]),_:2},1032,["class","onSubmit"])]),_:1})]),_:1}))}};export{j as default};
