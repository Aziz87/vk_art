(function(e){function t(t){for(var r,s,i=t[0],u=t[1],c=t[2],d=0,l=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&l.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(l.length)l.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("vue-main")],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"})},i=[],u=(n("0d03"),n("d3b7"),n("ac1f"),n("1276"),n("96cf"),n("89ba")),c=n("c45e"),p=n.n(c),d={name:"vue-main",props:{msg:String},data:function(){return{init_time:0,app_id:7177213,group_id:148056070,access_token:""}},mounted:function(){var e=this;window.addEventListener("focus",(function(e){console.log("focus",e),(new Date).getTime()-this.init_time<2e3||(window.location.reload(),this.init_time=(new Date).getTime())})),p.a.subscribe((function(t){var n=t.detail,r=n.type,o=n.data;if("VKWebAppUpdateConfig"===r){var a=document.createAttribute("scheme");a.value=o.scheme?o.scheme:"client_light",document.body.attributes.setNamedItem(a)}"VKWebAppAccessTokenReceived"===r&&(e.access_token=o.access_token,window.token=o.access_token,e.init())})),p.a.send("VKWebAppInit",{})},computed:{hash:function(){try{var e=decodeURIComponent(window.location.hash.split("#")[1]);return console.log({encoded:e}),e}catch(t){console.log(t)}return null}},methods:{init:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={method:"groups.isMember",request_id:"test22",params:{v:"5.102",access_token:window.token,group_id:this.group_id}},e.next=3,p.a.sendPromise("VKWebAppCallAPIMethod",t);case 3:n=e.sent,0===n.response&&p.a.send("VKWebAppJoinGroup",{group_id:this.group_id});case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),PayloadStorageUpload:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=(new Date).getTime()+Math.floor(1e5*Math.random()),t.random=n,p.a.send("VKWebAppSendPayload",{group_id:this.group_id,payload:t}),e.next=5,new Promise((function(e,t){var r=1;function o(){return a.apply(this,arguments)}function a(){return a=Object(u["a"])(regeneratorRuntime.mark((function a(){var s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r++,a.next=3,p.a.sendPromise("VKWebAppCallAPIMethod",{method:"storage.get",request_id:n,params:{v:"5.102",access_token:window.token,key:"upload"}});case 3:s=a.sent,i=JSON.parse(s.response),i.random===n?e(i):r>20?t("Result not finded!"):setTimeout(o,350);case 6:case"end":return a.stop()}}),a)}))),a.apply(this,arguments)}o()}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),poster:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n,r,o,a,s,i,u,c,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(window.token){e.next=3;break}return this.get_access(),e.abrupt("return");case 3:return e.next=5,p.a.sendPromise("VKWebAppCallAPIMethod",{method:"photos.getWallUploadServer",request_id:"32test",params:{v:"5.102",access_token:window.token}});case 5:return t=e.sent,n=t.response,r=n.upload_url,o=n.user_id,e.next=9,this.PayloadStorageUpload({upload_url:r,user_id:o,photo:this.hash});case 9:return a=e.sent,e.next=12,p.a.sendPromise("VKWebAppCallAPIMethod",{method:"photos.saveWallPhoto",request_id:"33test",params:{v:"5.102",access_token:this.access_token,user_id:o,photo:a.photo,hash:a.hash,server:a.server,caption:"@art_privet(Арт за 5 сек)"}});case 12:return s=e.sent,i=s.response[0],u=i.id,c=i.owner_id,d="photo"+c+"_"+u,e.next=17,p.a.sendPromise("VKWebAppShowWallPostBox",{message:"@art_privet(Арт за 5 сек)",attachments:d});case 17:p.a.send("VKWebAppAddToFavorites",{});case 18:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),get_access:function(){p.a.send("VKWebAppGetAuthToken",{app_id:this.app_id,scope:"wall,photos"})}}},l=d,h=n("2877"),f=Object(h["a"])(l,s,i,!1,null,null,null),m=f.exports,v={name:"app",components:{VueMain:m}},b=v,_=Object(h["a"])(b,o,a,!1,null,null,null),g=_.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(g)}}).$mount("#app")}});
//# sourceMappingURL=app.385611d0.js.map