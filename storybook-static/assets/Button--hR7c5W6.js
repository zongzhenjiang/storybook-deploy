import{g as h,R as b}from"./index-D4lIrffr.js";var p={exports:{}},i,l;function T(){if(l)return i;l=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return i=t,i}var u,m;function g(){if(m)return u;m=1;var t=T();function o(){}function s(){}return s.resetWarningCache=o,u=function(){function e(P,k,q,S,_,f){if(f!==t){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function r(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:s,resetWarningCache:o};return a.PropTypes=a,a},u}var y;function v(){return y||(y=1,p.exports=g()()),p.exports}var R=v();const n=h(R),d=({primary:t=!1,backgroundColor:o=null,size:s="medium",label:e,...r})=>{const a=t?"storybook-button--primary":"storybook-button--secondary";return b.createElement("button",{type:"button",className:["storybook-button",`storybook-button--${s}`,a].join(" "),style:o&&{backgroundColor:o},...r},e)};d.propTypes={primary:n.bool,backgroundColor:n.string,size:n.oneOf(["small","medium","large"]),label:n.string.isRequired,onClick:n.func};d.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{defaultValue:{value:"false",computed:!1},description:"Is this the principal call to action on the page?",type:{name:"bool"},required:!1},backgroundColor:{defaultValue:{value:"null",computed:!1},description:"What background color to use",type:{name:"string"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"How large should the button be?",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},label:{description:"Button contents",type:{name:"string"},required:!0},onClick:{description:"Optional click handler",type:{name:"func"},required:!1}}};export{d as B,n as P};
