import{a as d}from"./FormField-b38277b3.js";import{C as p,o as a,f as u,$ as f,a0 as y,c as b,n as s}from"./index-354d724b.js";const C={__name:"FormCheckRadioGroup",props:{options:{type:Object,default:()=>{}},name:{type:String,required:!0},type:{type:String,default:"checkbox",validator:e=>["checkbox","radio","switch"].includes(e)},componentClass:{type:String,default:null},isColumn:Boolean,modelValue:{type:[Array,String,Number,Boolean],default:null}},emits:["update:modelValue"],setup(e,{emit:m}){const r=e,l=p({get:()=>r.modelValue,set:t=>{m("update:modelValue",t)}});return(t,o)=>(a(),u("div",{class:s(["flex justify-start flex-wrap -mb-3",{"flex-col":e.isColumn}])},[(a(!0),u(f,null,y(e.options,(c,n)=>(a(),b(d,{key:n,modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=i=>l.value=i),type:e.type,name:e.name,"input-value":n,label:c,class:s([e.componentClass,"mr-6 mb-3 last:mr-0"])},null,8,["modelValue","type","name","input-value","label","class"]))),128))],2))}};export{C as _};
