(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"cdf0f3bc"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"0418":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("Row",[n("Col",{attrs:{span:"8"}},[n("a",{attrs:{target:"_blank",href:"https://sci-hub.tw"}},[n("Card",[n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{width:"50px"},attrs:{src:a("a1d8")}}),n("h3",[t._v("查阅文献")])])])],1)]),n("Col",{attrs:{span:"8"}},[n("router-link",{attrs:{to:"/about"}},[n("Card",[n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{width:"50px"},attrs:{src:a("a1d8")}}),n("h3",[t._v("关于我们")])])])],1)],1),n("Col",{attrs:{span:"8"}},[n("router-link",{attrs:{to:"/aiface"}},[n("Card",[n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticStyle:{width:"50px"},attrs:{src:a("a1d8")}}),n("h3",[t._v("人脸融合")])])])],1)],1)],1)],1)},r=[],o={name:"Header",props:{msg:String}},s=o,i=(a("b80e"),a("2877")),c=Object(i["a"])(s,n,r,!1,null,"745e1a38",null);e["a"]=c.exports},"08ca":function(t,e,a){},"496c":function(t,e,a){},"4ba1":function(t,e,a){},5564:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],s=(a("034f"),a("2877")),i={},c=Object(s["a"])(i,r,o,!1,null,null,null),l=c.exports,u=(a("d3b7"),a("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Header"),n("img",{staticClass:"circle",attrs:{alt:"Vue logo",src:a("a1d8")}}),n("HelloWorld",{attrs:{msg:"欢迎登陆火星火箭！"}})],1)},p=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))])])},g=[],m={name:"HelloWorld",props:{msg:String}},h=m,v=(a("ed75"),Object(s["a"])(h,f,g,!1,null,"c7324e48",null)),b=v.exports,_=a("0418"),y={name:"home",components:{HelloWorld:b,Header:_["a"]}},w=y,x=(a("7d7c"),Object(s["a"])(w,d,p,!1,null,"30e21b4f",null)),C=x.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"userList"},[a("div",[a("Button",{attrs:{type:"primary"}},[t._v("新增")])],1),a("TableIndex",{attrs:{tableRow:t.tableRow,tableData:t.tableData,msg:"用户列表"}})],1)},S=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),a("Table",{attrs:{border:"",columns:t.tableRow,data:t.tableData}})],1)},$=[],k={name:"TableIndex",props:{msg:String,tableData:[Array,Object],tableRow:Array}},D=k,E=(a("750c"),Object(s["a"])(D,O,$,!1,null,"737dc21c",null)),T=E.exports,P={name:"userList",components:{TableIndex:T},data:function(){return{tableRow:[{title:"用户名",key:"account"},{title:"密码",key:"password"},{title:"姓名",key:"name"}],tableData:[]}},mounted:function(){this.getUserData()},methods:{getUserData:function(){var t=this;this.$axios.get("/api/login/getAccount").then((function(e){t.tableData=e.data})).catch((function(t){window.console.log(t)}))}}},H=P,M=(a("d5f4"),Object(s["a"])(H,j,S,!1,null,"0668626a",null)),R=M.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aiface"},[a("Header"),a("Row",{attrs:{justify:"center"}},[a("Col",{attrs:{span:"8",offset:"3"}},[a("Upload",{staticClass:"template_img",attrs:{type:"drag",action:"/api/upload","on-success":t.success,"show-upload-list":!1}},[a("div",{staticStyle:{padding:"20px 0"}},[a("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),a("p",[t._v("上传模板图片")]),t.template_img?a("img",{attrs:{src:"/api/"+t.template_img}}):t._e()],1)])],1),a("Col",{attrs:{span:"8",offset:"1"}},[a("Upload",{staticClass:"target_img",attrs:{type:"drag",action:"/api/upload","on-success":t.success2,"show-upload-list":!1}},[a("div",{staticStyle:{padding:"20px 0"}},[a("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),a("p",[t._v("上传目标图片图片")]),t.target_img?a("img",{attrs:{src:"/api/"+t.target_img}}):t._e()],1)])],1)],1),a("Row",{attrs:{justify:"center"}},[a("Col",{attrs:{span:"24"}},[a("span",{staticStyle:{color:"red"}},[t._v("#tip:选择上传模板图片，然后选择上传目标图片，最后点击合成，即可生成融合照片！")])])],1),a("div",{staticClass:"create"},[a("Button",{attrs:{type:"success",loading:t.loading},on:{click:t.create_code}},[t.loading?a("span",[t._v("生成中")]):a("sapn",[t._v("生成合照")])],1)],1),t.merge_img?a("div",{staticClass:"merge_img"},[a("img",{staticStyle:{height:"200px"},attrs:{src:"/api/"+t.merge_img}})]):t._e()],1)},U=[],A={name:"aiface",data:function(){return{merge_img:"",template_img:"",target_img:"",loading:!1}},components:{Header:_["a"]},mounted:function(){this.getUserData()},methods:{getUserData:function(){var t=this;this.$axios.get("/api/login/getAccount").then((function(e){t.tableData=e.data})).catch((function(t){window.console.log(t)}))},success:function(t){this.template_img=t.path},success2:function(t){this.target_img=t.path},create_code:function(){var t=this;return""==this.template_img?(this.$Message.info("请上传模板照片"),!1):""==this.target_img?(this.$Message.info("请上传目标照片"),!1):(this.loading=!0,void this.$axios.post("/api/createMerge",this.$qs.stringify({template_img:this.template_img,target_img:this.target_img})).then((function(e){200!=e.data.error_code&&t.$Message.error(e.data.error_msg),t.merge_img=e.data.merge_img,t.loading=!1,console.log(t.merge_img,222)})).catch((function(t){window.console.log(t)})))}}},I=A,q=(a("6fa4"),Object(s["a"])(I,L,U,!1,null,"0d28eb81",null)),W=q.exports;n["default"].use(u["a"]);var z=[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/userList",name:"userList",component:R},{path:"/aiface",name:"aiface",component:W}],B=new u["a"]({mode:"history",base:"/",routes:z}),J=B,V=a("2f62");n["default"].use(V["a"]);var F=new V["a"].Store({state:{},mutations:{},actions:{},modules:{}}),G=a("f825"),K=a.n(G),N=(a("f8ce"),a("bc3a")),Q=a.n(N),X=a("4328"),Y=a.n(X);n["default"].use(K.a),Q.a.defaults.headers={"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},n["default"].prototype.$axios=Q.a,n["default"].prototype.$qs=Y.a,n["default"].config.productionTip=!1,new n["default"]({router:J,store:F,render:function(t){return t(l)}}).$mount("#app")},"6fa4":function(t,e,a){"use strict";var n=a("a77e"),r=a.n(n);r.a},"750c":function(t,e,a){"use strict";var n=a("496c"),r=a.n(n);r.a},"7d7c":function(t,e,a){"use strict";var n=a("4ba1"),r=a.n(n);r.a},"85ec":function(t,e,a){},"9c9f":function(t,e,a){},a1d8:function(t,e,a){t.exports=a.p+"img/logo.88a9d161.png"},a77e:function(t,e,a){},b80e:function(t,e,a){"use strict";var n=a("9c9f"),r=a.n(n);r.a},d5f4:function(t,e,a){"use strict";var n=a("5564"),r=a.n(n);r.a},ed75:function(t,e,a){"use strict";var n=a("08ca"),r=a.n(n);r.a}});
//# sourceMappingURL=app.ff362a9a.js.map