"use strict";(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[880],{20880:function(t,e,i){i.r(e),i.d(e,{default:function(){return E}});var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"methods"},[e("el-container",[e("el-header",{staticClass:"header_fixation"},[t._v("Header")]),e("el-container",[e("el-aside",{staticClass:"aside_left"},[e("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.activeIndex}},t._l(t.leftTitileList,(function(i){return e("div",{key:i.id},[i.isFlag?e("el-submenu",{attrs:{index:i.id}},[e("template",{slot:"title"},[e("span",[t._v(t._s(i.title))])]),t._l(i.children,(function(i){return e("div",{key:i.id},[i.isFlag?e("el-submenu",{attrs:{index:i.id}},[e("template",{slot:"title"},[t._v(t._s(i.title))]),t._l(i.children,(function(i){return e("el-menu-item",{key:i.id,attrs:{index:i.id},on:{click:function(e){return t.handleSelect(i)}}},[t._v(t._s(i.title))])}))],2):e("el-menu-item",{attrs:{index:i.id},on:{click:function(e){return t.handleSelect(i)}}},[t._v(t._s(i.title))])],1)}))],2):e("el-menu-item",{attrs:{index:i.id},on:{click:function(e){return t.handleSelect(i)}}},[e("span",[t._v(t._s(i.title))])])],1)})),0)],1),e("el-main",{staticClass:"main_router"},[e("Note",{ref:"note",attrs:{activeIndex:t.activeIndex,judge:t.judge},on:{"update:activeIndex":function(e){t.activeIndex=e},"update:active-index":function(e){t.activeIndex=e},activeIndexFun:t.activeIndexFun}})],1)],1)],1)],1)},n=[];const s=[{title:"测试1",id:"1",isFlag:!0,children:[{title:"防抖",id:"1.1",isFlag:!1},{title:"节流",id:"1.2",isFlag:!1},{title:"JS执行机制",id:"1.3",isFlag:!0,children:[{title:"测试1-3-1",id:"1.3.1",isFlag:!1},{title:"测试1-3-2",id:"1.3.2",isFlag:!1},{title:"测试1-3-3",id:"1.3.3",isFlag:!1}]}]},{title:"测试2",id:"2",isFlag:!0,children:[{title:"测试2.1",id:"2.1",isFlag:!1},{title:"测试2.2",id:"2.2",isFlag:!1},{title:"测试2.3",id:"2.3",isFlag:!0,children:[{title:"测试2.3.1",id:"2.3.1",isFlag:!1},{title:"测试2.3.2",id:"2.3.2",isFlag:!1},{title:"测试2.3.3",id:"2.3.3",isFlag:!1}]}]},{title:"测试3",id:"3"},{title:"测试4",id:"4"},{title:"测试5",id:"5"},{title:"测试6",id:"6"},{title:"测试7",id:"7"},{title:"测试8",id:"8"},{title:"测试9",id:"9"},{title:"测试10",id:"10"},{title:"测试11",id:"11"},{title:"测试12",id:"12"},{title:"测试13",id:"13"},{title:"测试14",id:"14"},{title:"测试15",id:"15"},{title:"测试16",id:"16"},{title:"测试17",id:"17"},{title:"测试18",id:"18"},{title:"测试19",id:"19"},{title:"测试20",id:"20"},{title:"测试21",id:"21"}],a=["1.1","1.2","1.3.1","1.3.2","1.3.3","2.1","2.2","2.3.1","2.3.2","2.3.3","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21"];var r=function(){var t=this,e=t._self._c;return e("div",{ref:"scrollview",staticClass:"note"},[e("div",{attrs:{id:"start"}}),t._l(t.rightIdList,(function(i){return e("div",{key:i,staticClass:"item-content",staticStyle:{height:"200px"},attrs:{id:i}},[e("h3",[t._v(t._s(t._f("check")(i)))])])})),e("el-backtop",{attrs:{target:".note",bottom:100,"visibility-height":500}},[e("div",{staticClass:"top_box"},[e("div",{staticClass:"top"},[e("img",{attrs:{src:i(82864),alt:""}})])])])],2)},d=[],I=(i(57658),{props:{activeIndex:{type:String,default:function(){return{activeIndex:"1"}}},judge:{type:Boolean}},data(){return{leftTitileList:s,rightIdList:a,arrDom:[],active:null}},created(){},components:{},watch:{activeIndex(t,e){this.skip(t)}},filters:{check(t){let e=new Map([["1.1","防抖"],["1.2","节流"],["default",t]]);return e.get(t)||e.get("default")}},computed:{scrollview(){return this.$refs.scrollview}},mounted(){this.arrDom=document.getElementsByClassName("item-content"),this.$nextTick((()=>{this.scrollview.addEventListener("scroll",this.handleScroll)}))},methods:{handleScroll(){let t=this.scrollview.scrollTop||window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(this.judge)setTimeout((()=>{this.judge=!1}),1e3);else{for(let e=0;e<this.arrDom.length;e++)this.arrDom[this.arrDom.length-1].offsetTop-t>1?this.arrDom[e].offsetTop-t<=1&&this.arrDom[e+1].offsetTop-t>1&&(this.active=e+1):this.active=this.arrDom.length;this.$emit("activeIndexFun",this.rightIdList[this.active-1])}},skip(t){console.log("newValue",t),document.getElementById(t).scrollIntoView({behavior:"smooth"})},flattTree(t){let e=[];return t.forEach((t=>{t.children?(e.push(t,...this.flattTree(t.children)),delete t["children"]):e.push(t)})),e}}}),c=I,g=i(1001),o=(0,g.Z)(c,r,d,!1,null,"19f14249",null),u=o.exports,C={data(){return{leftTitileList:s,activeIndex:"1",judge:!1}},components:{Note:u},methods:{handleSelect(t){t.id!=this.activeIndex&&(this.judge=!0,this.activeIndex=t.id)},activeIndexFun(t){this.activeIndex=t}}},h=C,A=(0,g.Z)(h,l,n,!1,null,"0b2322ec",null),E=A.exports},82864:function(t){t.exports="data:image/png;base64,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"}}]);