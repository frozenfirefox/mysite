(function(t){function e(e){for(var n,i,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e3916d90"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,a[1](u)}r[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"08ca":function(t,e,a){},"0d3e":function(t,e,a){},"496c":function(t,e,a){},5564:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("Menu",{attrs:{mode:"horizontal",theme:"light","active-name":"2"}},[a("MenuItem",{attrs:{name:"1"}},[a("Icon",{attrs:{type:"ios-paper"}}),a("a",{attrs:{target:"_blank",href:"https://sci-hub.tw"}},[t._v("文献查询")])],1),a("MenuItem",{attrs:{name:"2"}},[a("Icon",{attrs:{type:"ios-people"}}),a("router-link",{attrs:{to:"/about"}},[t._v("关于我们")])],1),a("MenuItem",{attrs:{name:"3"}},[a("Icon",{attrs:{type:"ios-people"}}),a("router-link",{attrs:{to:"/userList"}},[t._v("用户列表")])],1),a("MenuItem",{attrs:{name:"4"}},[a("Icon",{attrs:{type:"ios-paper"}}),a("router-link",{attrs:{to:"/aiface"}},[t._v("人脸融合")])],1)],1)],1),a("router-view")],1)},o=[],i=(a("034f"),a("2877")),s={},c=Object(i["a"])(s,r,o,!1,null,null,null),u=c.exports,l=(a("d3b7"),a("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{staticClass:"circle",attrs:{alt:"Vue logo",src:a("a1d8")}}),n("HelloWorld",{attrs:{msg:"欢迎登陆火星火箭！"}})],1)},d=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))])])},m=[],g={name:"HelloWorld",props:{msg:String}},h=g,v=(a("ed75"),Object(i["a"])(h,f,m,!1,null,"c7324e48",null)),b=v.exports,_={name:"home",components:{HelloWorld:b}},y=_,w=(a("ebde"),Object(i["a"])(y,p,d,!1,null,"4c514aeb",null)),x=w.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"userList"},[a("div",[a("Button",{attrs:{type:"primary"}},[t._v("新增")])],1),a("TableIndex",{attrs:{tableRow:t.tableRow,tableData:t.tableData,msg:"用户列表"}})],1)},O=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),a("Table",{attrs:{border:"",columns:t.tableRow,data:t.tableData}})],1)},k=[],I={name:"TableIndex",props:{msg:String,tableData:[Array,Object],tableRow:Array}},S=I,$=(a("750c"),Object(i["a"])(S,C,k,!1,null,"737dc21c",null)),D=$.exports,M={name:"userList",components:{TableIndex:D},data:function(){return{tableRow:[{title:"用户名",key:"account"},{title:"密码",key:"password"},{title:"姓名",key:"name"}],tableData:[]}},mounted:function(){this.getUserData()},methods:{getUserData:function(){var t=this;this.$axios.get("/api/login/getAccount").then((function(e){t.tableData=e.data})).catch((function(t){window.console.log(t)}))}}},T=M,E=(a("d5f4"),Object(i["a"])(T,j,O,!1,null,"0668626a",null)),P=E.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aiface"},[a("div",{staticClass:"all"},[a("Upload",{staticClass:"template_img",attrs:{type:"drag",action:"/api/upload","on-success":t.success,"show-upload-list":!1}},[a("div",{staticStyle:{padding:"20px 0"}},[a("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),a("p",[t._v("上传模板图片")]),t.template_img?a("img",{attrs:{src:"/api/"+t.template_img}}):t._e()],1)]),a("Upload",{staticClass:"target_img",attrs:{type:"drag",action:"/api/upload","on-success":t.success2,"show-upload-list":!1}},[a("div",{staticStyle:{padding:"20px 0"}},[a("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),a("p",[t._v("上传目标图片图片")]),t.target_img?a("img",{attrs:{src:"/api/"+t.target_img}}):t._e()],1)]),t.merge_img?a("div",{staticClass:"merge_img"},[t._v(" 合成照片： "),a("img",{staticStyle:{width:"400px",height:"400px"},attrs:{src:"/api/"+t.merge_img}})]):t._e()],1),a("div",{staticClass:"create"},[a("Button",{attrs:{type:"primary"},on:{click:t.create_code}},[t._v("生成合照")])],1)])},U=[],A={name:"aiface",data:function(){return{merge_img:"",template_img:"",target_img:""}},mounted:function(){this.getUserData()},methods:{getUserData:function(){var t=this;this.$axios.get("/api/login/getAccount").then((function(e){t.tableData=e.data})).catch((function(t){window.console.log(t)}))},success:function(t){this.template_img=t.path},success2:function(t){this.target_img=t.path},create_code:function(){var t=this;this.$axios.post("/api/createMerge",this.$qs.stringify({template_img:this.template_img,target_img:this.target_img})).then((function(e){t.merge_img=e.data.merge_img})).catch((function(t){window.console.log(t)}))}}},R=A,q=(a("edae"),Object(i["a"])(R,L,U,!1,null,"054ac13a",null)),z=q.exports;n["default"].use(l["a"]);var H=[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/userList",name:"userList",component:P},{path:"/aiface",name:"aiface",component:z}],W=new l["a"]({mode:"history",base:"/",routes:H}),B=W,J=a("2f62");n["default"].use(J["a"]);var V=new J["a"].Store({state:{},mutations:{},actions:{},modules:{}}),F=a("f825"),G=a.n(F),K=(a("f8ce"),a("bc3a")),N=a.n(K),Q=a("4328"),X=a.n(Q);n["default"].use(G.a),N.a.defaults.headers={"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},n["default"].prototype.$axios=N.a,n["default"].prototype.$qs=X.a,n["default"].config.productionTip=!1,new n["default"]({router:B,store:V,render:function(t){return t(u)}}).$mount("#app")},"750c":function(t,e,a){"use strict";var n=a("496c"),r=a.n(n);r.a},"85ec":function(t,e,a){},a1d8:function(t,e,a){t.exports=a.p+"img/logo.88a9d161.png"},d5f4:function(t,e,a){"use strict";var n=a("5564"),r=a.n(n);r.a},e63c:function(t,e,a){},ebde:function(t,e,a){"use strict";var n=a("e63c"),r=a.n(n);r.a},ed75:function(t,e,a){"use strict";var n=a("08ca"),r=a.n(n);r.a},edae:function(t,e,a){"use strict";var n=a("0d3e"),r=a.n(n);r.a}});
//# sourceMappingURL=app.285950a6.js.map