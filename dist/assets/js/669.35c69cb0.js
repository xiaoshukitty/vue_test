"use strict";(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[669],{81669:function(t,i,o){o.r(i),o.d(i,{default:function(){return u}});var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"container"},[t._v(" 验证码 "),i("div",{staticClass:"container_box"},[i("div",{attrs:{id:"v_yzm"},on:{click:t.change}}),i("el-input",{staticClass:"ipt",attrs:{size:"small"},on:{blur:t.changeBlur},model:{value:t.yzmIpt,callback:function(i){t.yzmIpt=i},expression:"yzmIpt"}})],1)])},e=[];function n(t){if(this.options={id:"",canvasId:"verifyCanvas",width:"80",height:"30",type:"number",code:""},"[object Object]"===Object.prototype.toString.call(t))for(var i in t)this.options[i]=t[i];else this.options.id=t;this.options.numArr="0,1,2,3,4,5,6,7,8,9".split(","),this.options.letterArr=h(),console.log("options参数---",this.options),this.init(),this.refresh()}function h(){var t="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";return t.split(",")}function r(t,i){return Math.floor(Math.random()*(i-t)+t)}function a(t,i){var o=r(t,i),s=r(t,i),e=r(t,i);return"rgb("+o+","+s+","+e+")"}n.prototype={init:function(){var t=document.getElementById(this.options.id),i=document.createElement("canvas");this.options.width="141",this.options.height="45",i.id=this.options.canvasId,i.width=this.options.width,i.height=this.options.height,i.style.cursor="pointer",i.innerHTML="您的浏览器版本不支持canvas",t.appendChild(i);var o=this;i.onclick=function(){o.refresh()}},refresh:function(){var t=document.getElementById(this.options.canvasId);if(t.getContext)var i=t.getContext("2d");if(i.textBaseline="middle",i.fillStyle=a(180,240),i.fillRect(0,0,this.options.width,this.options.height),"blend"===this.options.type)var o=this.options.numArr.concat(this.options.letterArr);else if("number"===this.options.type)o=this.options.numArr;else o=this.options.letterArr;for(var s=1;s<=4;s++){var e=o[r(0,o.length)];this.options.code+=e,i.font=r(this.options.height/2,this.options.height)+"px SimHei",i.fillStyle=a(50,160),i.shadowOffsetX=r(-3,3),i.shadowOffsetY=r(-3,3),i.shadowBlur=r(-3,3),i.shadowColor="rgba(0, 0, 0, 0.3)";var n=this.options.width/5*s,h=this.options.height/2,l=r(-30,30);i.translate(n,h),i.rotate(l*Math.PI/180),i.fillText(e,0,0),i.rotate(-l*Math.PI/180),i.translate(-n,-h)}for(s=0;s<4;s++)i.strokeStyle=a(40,180),i.beginPath(),i.moveTo(r(0,this.options.width),r(0,this.options.height)),i.lineTo(r(0,this.options.width),r(0,this.options.height)),i.stroke();for(s=0;s<this.options.width/4;s++)i.fillStyle=a(0,255),i.beginPath(),i.arc(r(0,this.options.width),r(0,this.options.height),1,0,2*Math.PI),i.fill()}};var l={data(){return{yzmCode:"",picture:"",yzmIpt:""}},created(){},mounted(){this.yzmCode=new n("v_yzm"),this.picture=this.yzmCode.options.code},methods:{change(){this.picture=this.yzmCode.options.code.substring(this.yzmCode.options.code.length-4)},changeBlur(){let t=this.yzmCode.options.code;t!=this.yzmIpt?(this.$message.warning("请输入正确的验证码"),this.yzmIpt=""):this.$message.success("验证码正确")}}},p=l,c=o(1001),d=(0,c.Z)(p,s,e,!1,null,"35804fe4",null),u=d.exports}}]);