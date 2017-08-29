webpackJsonp([1],{0:function(t,e,r){function n(t){r(163)}var a=r(6)(r(105),r(975),n,null,null);t.exports=a.exports},104:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(19),a=r(83),s=r.n(a),i=r(77),o=r(78),c=r(79),d=r(80),u=(r.n(d),r(81)),l=(r.n(u),r(0)),p=r.n(l);r(82);n.a.use(c.a),n.a.component("icon",p.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:i.a,store:o.a,template:"<App/>",components:{App:s.a}})},105:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(19),a={};e.default={name:"icon",props:{name:{type:String,validator:function(t){return t?t in a||(n.a.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(n.a.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse}},icon:function(){return this.name?a[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,r=t.height;return Math.max(e,r)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,r=0;this.$children.forEach(function(t){e=Math.max(e,t.width),r=Math.max(r,t.height)}),this.childrenWidth=e,this.childrenHeight=r,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(r-t.height)/2})}},register:function(t){for(var e in t){var r=t[e];r.paths||(r.paths=[]),r.d&&r.paths.push({d:r.d}),r.polygons||(r.polygons=[]),r.points&&r.polygons.push({points:r.points}),a[e]=r}},icons:a}},106:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},107:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(21),a=r.n(n),s=r(8),i=r.n(s),o=r(7),c=r.n(o),d=r(14),u=r(18);e.default={mounted:function(){var t=this;return c()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.id=t.$route.query.id,t.target=t.$route.query.target,t.id&&t.target){e.next=5;break}throw new Error;case 5:return e.next=7,d.a.validate({id:t.id});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.$router.replace({name:"404"});case 12:case"end":return e.stop()}},e,t,[[0,9]])}))()},data:function(){return{id:"",password:"",target:"",error:!1,errorMessage:"",loading:!1}},methods:a()({},r.i(u.b)(["pushAdmin"]),{auth:function(){var t=this;return c()(i.a.mark(function e(){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,d.a.validate({id:t.id,password:t.password});case 4:r=e.sent,r.admin?(t.pushAdmin({id:t.id,password:t.password}),t.$router.replace({name:t.target,params:{id:t.id}})):(t.error=!0,t.errorMessage="Wrong password!"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.$router.replace({name:"404"});case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}},e,t,[[1,8,11,14]])}))()}})}},108:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(8),a=r.n(n),s=r(7),i=r.n(s),o=r(21),c=r.n(o),d=r(31),u=r(18);e.default={data:function(){return{textArea:"",password:"",error:!1,errorMessage:"",loading:!1}},methods:c()({},r.i(u.b)(["pushAdmin"]),{submit:function(){var t=this;return i()(a.a.mark(function e(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.textArea.trim()){e.next=5;break}return t.error=!0,t.errorMessage="Word Bank is empty!",e.abrupt("return");case 5:if(t.password.trim()){e.next=9;break}return t.error=!0,t.errorMessage="Password is empty!",e.abrupt("return");case 9:return t.loading=!0,e.next=12,d.a.post("/create",{wordBank:t.wordBank,password:t.password});case 12:r=e.sent,t.pushAdmin({id:r.data,password:t.password}),t.$router.push({name:"Dashboard",params:{id:r.data}}),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),t.error=!0,t.errorMessage=e.t0.response.data;case 21:return e.prev=21,t.loading=!1,e.finish(21);case 24:case"end":return e.stop()}},e,t,[[0,17,21,24]])}))()}}),computed:{wordBank:function(){return this.textArea.split("\n").filter(function(t){return""!==t.trim()})}}}},109:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(21),a=r.n(n),s=r(8),i=r.n(s),o=r(7),c=r.n(o),d=r(20),u=r(14),l=r(18),p=r(31);e.default={props:["id"],mounted:function(){var t=this;return c()(i.a.mark(function e(){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.admins.map(function(t){return t.id}).includes(t.id)){e.next=4;break}return t.$router.replace({name:"Auth",query:{id:t.id,target:"Dashboard"}}),e.abrupt("return");case 4:return t.password=t.admins.find(function(e){return e.id===t.id}).password,e.next=7,u.a.validate({id:t.id,password:t.password});case 7:r=e.sent,t.textArea=r.room.wordBank.join("\n"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t.$router.replace({name:"404"});case 14:case"end":return e.stop()}},e,t,[[0,11]])}))()},data:function(){return{textArea:"",password:"",showConfig:!1,remoteURL:d.b+"/remote/"+this.id,playURL:d.b+"/play/"+this.id,error:!1,errorMessage:"",success:!1,loading:!1}},methods:{config:function(){this.showConfig=!this.showConfig},update:function(){var t=this;return c()(i.a.mark(function e(){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,p.a.post("/update",{id:t.id,password:t.password,wordBank:t.wordBank});case 4:r=e.sent,t.textArea=r.data.wordBank.join("\n"),t.success=!0,t.error=!1,e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),t.error=!0,t.success=!1,console.log(e.t0.response.data),t.errorMessage=e.t0.response.data;case 16:return e.prev=16,t.loading=!1,e.finish(16);case 19:case"end":return e.stop()}},e,t,[[1,10,16,19]])}))()}},computed:a()({},r.i(l.c)(["admins"]),{wordBank:function(){return this.textArea.split("\n").filter(function(t){return""!==t.trim()})}})}},110:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(8),a=r.n(n),s=r(7),i=r.n(s),o=r(14);e.default={name:"hello",data:function(){return{roomId:"",msg:"Welcome to Your Vue.js App",error:!1,errorMessage:"",remoteLoading:!1,playLoading:!1}},methods:{remote:function(){var t=this;return i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.remoteLoading=!0,e.prev=1,e.next=4,o.a.validate({id:t.roomId});case 4:t.$router.push({name:"Remote",params:{id:t.roomId}}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),t.error=!0,t.errorMessage=e.t0.response.data;case 11:return e.prev=11,t.remoteLoading=!1,e.finish(11);case 14:case"end":return e.stop()}},e,t,[[1,7,11,14]])}))()},join:function(){var t=this;return i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.playLoading=!0,e.prev=1,e.next=4,o.a.validate({id:t.roomId});case 4:t.$router.push({name:"Play",params:{id:t.roomId}}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),t.error=!0,t.errorMessage=e.t0.response.data;case 11:return e.prev=11,t.playLoading=!1,e.finish(11);case 14:case"end":return e.stop()}},e,t,[[1,7,11,14]])}))()}}}},111:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(8),a=r.n(n),s=r(7),i=r.n(s),o=r(71),c=(r.n(o),r(20)),d=r(14);e.default={props:["id"],mounted:function(){var t=this;return i()(a.a.mark(function e(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.validate({id:t.id});case 3:r=e.sent,t.state=r,t.socket=o(c.a),t.socket.emit("join",{id:t.id}),t.socket.on("state",function(e){t.state=e}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t.$router.push({name:"404"});case 13:case"end":return e.stop()}},e,t,[[0,10]])}))()},destroyed:function(){this.socket&&this.socket.disconnect()},data:function(){return{socket:{},state:{}}}}},112:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(21),a=r.n(n),s=r(8),i=r.n(s),o=r(7),c=r.n(o),d=r(71),u=(r.n(d),r(20)),l=r(14),p=r(18);e.default={props:["id"],mounted:function(){var t=this;return c()(i.a.mark(function e(){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.admins.map(function(t){return t.id}).includes(t.id)){e.next=4;break}return t.$router.replace({name:"Auth",query:{id:t.id,target:"Remote"}}),e.abrupt("return");case 4:return t.password=t.admins.find(function(e){return e.id===t.id}).password,e.next=7,l.a.validate({id:t.id,password:t.password});case 7:r=e.sent,t.state=r,t.socket=d(u.a),t.socket.emit("join",{id:t.id}),t.socket.on("state",function(e){console.log("incoming state",e),t.state=e}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),t.$router.replace({name:"404"});case 17:case"end":return e.stop()}},e,t,[[0,14]])}))()},data:function(){return{password:"",socket:{},state:{}}},methods:{correct:function(){var t=this;return c()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.socket.emit("remote",{id:t.id,password:t.password,action:"correct"});case 1:case"end":return e.stop()}},e,t)}))()},skip:function(){var t=this;return c()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.socket.emit("remote",{id:t.id,password:t.password,action:"skip"});case 1:case"end":return e.stop()}},e,t)}))()},hide_show:function(){var t=this;return c()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.state.hiding?t.socket.emit("remote",{id:t.id,password:t.password,action:"show"}):t.socket.emit("remote",{id:t.id,password:t.password,action:"hide"});case 1:case"end":return e.stop()}},e,t)}))()},restart:function(){var t=this;return c()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.socket.emit("remote",{id:t.id,password:t.password,action:"restart"});case 1:case"end":return e.stop()}},e,t)}))()}},computed:a()({},r.i(p.c)(["admins"]))}},14:function(t,e,r){"use strict";r.d(e,"a",function(){return c});var n=r(8),a=r.n(n),s=r(7),i=r.n(s),o=r(31),c={validate:function(t){var e=this,r=t.id,n=t.password;return i()(a.a.mark(function t(){var s;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/room",{params:{id:r,password:n}});case 2:return s=t.sent,t.abrupt("return",s.data);case 4:case"end":return t.stop()}},t,e)}))()}}},163:function(t,e){},164:function(t,e){},165:function(t,e){},166:function(t,e){},167:function(t,e){},168:function(t,e){},169:function(t,e){},170:function(t,e){},20:function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return a});var n="https://whatword-api.herokuapp.com",a="https://whatword.herokuapp.com"},31:function(t,e,r){"use strict";var n=r(86),a=r.n(n),s=r(20),i=a.a.create({baseURL:s.a});e.a=i},77:function(t,e,r){"use strict";var n=r(19),a=r(983),s=r(972),i=r.n(s),o=r(973),c=r.n(o),d=r(970),u=r.n(d),l=r(971),p=r.n(l),v=r(974),h=r.n(v),m=r(969),f=r.n(m);n.a.use(a.a),e.a=new a.a({mode:"history",routes:[{path:"/",name:"Home",component:i.a},{path:"/play/:id",name:"Play",component:c.a,props:!0},{path:"/create",name:"Create",component:u.a},{path:"/dashboard/:id",name:"Dashboard",component:p.a,props:!0},{path:"/remote/:id",name:"Remote",component:h.a,props:!0},{path:"/auth",name:"Auth",component:f.a},{path:"*",name:"404",component:i.a}]})},78:function(t,e,r){"use strict";var n=r(19),a=r(18);n.a.use(a.a),e.a=new a.a.Store({state:{admins:[]},getters:{admins:function(t){return t.admins}},mutations:{PUSH_ADMIN:function(t,e){var r=e.id,n=e.password;t.admins.push({id:r,password:n})}},actions:{pushAdmin:function(t,e){var r=e.id,n=e.password;t.commit("PUSH_ADMIN",{id:r,password:n})}}})},80:function(t,e){},81:function(t,e){},83:function(t,e,r){function n(t){r(166)}var a=r(6)(r(106),r(978),n,null,null);t.exports=a.exports},969:function(t,e,r){function n(t){r(164)}var a=r(6)(r(107),r(976),n,"data-v-2dfe787a",null);t.exports=a.exports},970:function(t,e,r){function n(t){r(168)}var a=r(6)(r(108),r(980),n,"data-v-7c236964",null);t.exports=a.exports},971:function(t,e,r){function n(t){r(167)}var a=r(6)(r(109),r(979),n,"data-v-53c7cb32",null);t.exports=a.exports},972:function(t,e,r){function n(t){r(169)}var a=r(6)(r(110),r(981),n,"data-v-88b5c79e",null);t.exports=a.exports},973:function(t,e,r){function n(t){r(165)}var a=r(6)(r(111),r(977),n,"data-v-489b8006",null);t.exports=a.exports},974:function(t,e,r){function n(t){r(170)}var a=r(6)(r(112),r(982),n,"data-v-a33a24d0",null);t.exports=a.exports},975:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e){return r("path",t._b({},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e){return r("polygon",t._b({},"polygon",e,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[r("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},staticRenderFns:[]}},976:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"auth"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"content"},[r("label",[t._v("Enter Game Password:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"text-center form-control form-control-lg",class:{"is-invalid":t.error},staticStyle:{"margin-bottom":"10px"},attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t.error?r("label",{staticClass:"text-danger text-right"},[t._v("\n        "+t._s(t.errorMessage)+"\n      ")]):t._e(),t._v(" "),r("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{disabled:t.loading,type:"submit"},on:{click:t.auth}},[r("icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{name:"circle-o-notch",spin:""}}),t._v("\n        Go\n      ")],1)])])])},staticRenderFns:[]}},977:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"play"}},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"text-center"},[r("h1",[t._v("Score: "+t._s(t.state.score))]),t._v(" "),r("div",{staticClass:"container-fluid custom-border"},[r("h1",{staticClass:"word"},[r("div",{directives:[{name:"show",rawName:"v-show",value:void 0===t.state.currentWord,expression:"state.currentWord === undefined"}],staticClass:"hidden-word"},[t._v("\n             \n          ")]),t._v("\n          "+t._s(t.state.currentWord)+"\n        ")])])])])])},staticRenderFns:[]}},978:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[r("router-view")],1)],1)},staticRenderFns:[]}},979:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"dashboard"}},[r("div",{staticClass:"container"},[r("h1",{staticClass:"text-center"},[t._v("What Word is it ?")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"text-center"},[r("h1",[t._v("Your game is ready")]),t._v(" "),r("div",{staticClass:"form-group"},[r("br"),t._v(" "),r("label",{attrs:{for:""}},[t._v("Game ID:")]),t._v(" "),r("h1",{staticClass:"alert alert-info"},[t._v(" "+t._s(t.id)+" ")])])]),t._v(" "),r("h5",[t._v("\n        Remote URL:\n        "),r("router-link",{attrs:{to:{name:"Remote",params:{id:t.id}}}},[t._v("\n          "+t._s(t.remoteURL)+"\n        ")])],1),t._v(" "),r("h5",[t._v("\n        Play URL:\n        "),r("router-link",{attrs:{to:{name:"Play",params:{id:t.id}}}},[t._v("\n          "+t._s(t.playURL)+"\n        ")])],1),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"text-right"},[r("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.config()}}},[r("h5",[t._v("Game configuration")])])]),t._v(" "),r("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.showConfig,expression:"showConfig"}]},[r("div",{staticClass:"form-group"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("h4",[t._v("Word Bank:")])]),t._v(" "),r("div",{staticClass:"col-6 text-right"},[r("h4",[t._v(t._s(t.wordBank.length)+" Words")])])]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textArea,expression:"textArea"}],staticClass:"form-control",attrs:{placeholder:"Insert your words here",rows:"18"},domProps:{value:t.textArea},on:{input:function(e){e.target.composing||(t.textArea=e.target.value)}}}),t._v(" "),t.error?r("label",{staticClass:"text-danger"},[t._v("\n               "+t._s(t.errorMessage)+"\n             ")]):t._e()]),t._v(" "),r("button",{staticClass:"btn btn-warning btn-lg fullwidth",attrs:{disabled:t.loading},on:{click:function(e){t.update()}}},[r("icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{name:"circle-o-notch",spin:""}}),t._v("\n            Update\n          ")],1),t._v(" "),t.success?r("label",{staticClass:"text-success"},[t._v("\n            Game updated! You must restart your game before the new setting will take effect.\n          ")]):t._e()])])],1)])])},staticRenderFns:[]}},980:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"create"}},[r("div",{staticClass:"container"},[r("h1",{staticClass:"text-center"},[t._v("What Word is it ?")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"form-group"},[r("div",{staticClass:"row"},[t._m(0),t._v(" "),r("div",{staticClass:"col-6 text-right"},[r("h4",[t._v(t._s(t.wordBank.length)+" Words")])])]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textArea,expression:"textArea"}],staticClass:"form-control",attrs:{placeholder:"Insert your words here",rows:"18"},domProps:{value:t.textArea},on:{input:function(e){e.target.composing||(t.textArea=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Remote password:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{placeholder:"Password",autocomplete:"off",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),r("span",{staticClass:"form-text text-muted"},[t._v("\n          Remote requires password in order to control the game.\n        ")])]),t._v(" "),t.error?r("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v("\n        "+t._s(t.errorMessage)+"\n      ")]):t._e(),t._v(" "),r("button",{staticClass:"btn btn-warning btn-lg btn-block",attrs:{disabled:t.loading},on:{click:function(e){t.submit()}}},[r("icon",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{name:"circle-o-notch",spin:""}}),t._v("\n        Create\n      ")],1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-6"},[r("h4",[t._v("Word Bank:")])])}]}},981:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{attrs:{id:"home"}},[r("h1",[t._v("What Word is it ?")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"text-left content form-group"},[r("label",[t._v("Enter Game ID:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.roomId,expression:"roomId"}],staticClass:"text-center form-control form-control-lg",class:{"is-invalid":t.error},staticStyle:{"margin-bottom":"10px"},attrs:{placeholder:"GAME ID",required:""},domProps:{value:t.roomId},on:{input:function(e){e.target.composing||(t.roomId=e.target.value)}}}),t._v(" "),t.error?r("label",{staticClass:"text-danger"},[t._v("\n        "+t._s(t.errorMessage)+"\n      ")]):t._e(),t._v(" "),r("button",{staticClass:"btn btn-danger btn-lg btn-block",attrs:{disabled:t.remoteLoading||t.playLoading},on:{click:function(e){t.remote()}}},[r("icon",{directives:[{name:"show",rawName:"v-show",value:t.remoteLoading,expression:"remoteLoading"}],attrs:{name:"circle-o-notch",spin:""}}),t._v("\n        Remote\n      ")],1),t._v(" "),r("button",{staticClass:"btn btn-primary btn-lg btn-block",staticStyle:{"margin-top":"4px"},attrs:{disabled:t.remoteLoading||t.playLoading},on:{click:function(e){t.join()}}},[r("icon",{directives:[{name:"show",rawName:"v-show",value:t.playLoading,expression:"playLoading"}],attrs:{name:"circle-o-notch",spin:""}}),t._v("\n        Play\n      ")],1)]),t._v(" "),r("hr"),t._v(" "),r("h3",{staticClass:"text-center"},[t._v("OR")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"content"},[r("router-link",{attrs:{to:{name:"Create"}}},[r("button",{staticClass:"btn btn-warning btn-lg fullwidth"},[t._v("\n          Create New Game\n        ")])])],1)]),t._v(" "),r("div",{staticClass:"content text-right",staticStyle:{"margin-top":"20px"}},[r("a",{attrs:{href:"/"}},[r("big",[t._v("How to play?")])],1)])])},staticRenderFns:[]}},982:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"remote"}},[r("div",{staticClass:"remote-content"},[r("div",{staticClass:"status alert alert-info text-center"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("h2",[t._v("Score: "+t._s(this.state.score))])]),t._v(" "),r("div",{staticClass:"col-6"},[r("h2",[t._v("Left: "+t._s(this.state.remaining))])])]),t._v(" "),r("h1",[r("div",{staticClass:"d-inline-flex"},[0!==this.state.remaining&&this.state.hiding?r("small",{staticClass:"badge badge-pill badge-danger"},[t._v("\n            Hiding\n          ")]):t._e(),t._v(" "),0===this.state.remaining&&this.state.hiding?r("small",{staticClass:"badge badge-pill badge-danger"},[t._v("\n            Game Over\n          ")]):t._e()]),t._v("\n        "+t._s(this.state.currentWord)+"\n      ")])]),t._v(" "),r("div",{staticClass:"btn-group-vertical btn-block",staticStyle:{height:"80%"}},[r("button",{staticClass:"btn btn-success btn-fullscreen",attrs:{disabled:this.state.hiding},on:{click:t.correct}},[r("h1",[t._v("Correct")])]),t._v(" "),r("button",{staticClass:"btn btn-info btn-fullscreen",attrs:{disabled:this.state.hiding},on:{click:t.skip}},[r("h1",[t._v("Skip")])]),t._v(" "),r("button",{staticClass:"btn btn-fullscreen",class:{"btn-dark":!this.state.hiding,"btn-light":this.state.hiding},attrs:{disabled:0===this.state.remaining&&this.state.hiding},on:{click:t.hide_show}},[r("h1",[t._v("\n          "+t._s(this.state.hiding?"Show":"Hide")+"\n        ")])]),t._v(" "),r("button",{staticClass:"btn btn-danger btn-fullscreen",on:{click:t.restart}},[r("h1",[t._v("Restart")])])])])])},staticRenderFns:[]}},986:function(t,e){}},[104]);
//# sourceMappingURL=app.b80b5e64ea8b5d4456e0.js.map