(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{303:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(33),s=t(34),i=t(36),r=t(35),c=t(0),o=t.n(c),l=t(13),m=t(6),u=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var a=function(a){Object(i.a)(c,a);var t=Object(r.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return this.props.isAuth?o.a.createElement(e,this.props):o.a.createElement(m.a,{to:"/login"})}}]),c}(o.a.Component);return Object(l.b)(u)(a)}},304:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1m75O",dialogsItems:"Dialogs_dialogsItems__3roV8",active:"Dialogs_active__1SJyD",messages:"Dialogs_messages__1AddN",message:"Dialogs_message__2igf_"}},309:function(e,a,t){"use strict";t.r(a);var n=t(13),s=t(9),i=t(123),r=t(303),c=t(0),o=t.n(c),l=t(304),m=t.n(l),u=t(17),d=function(e){return o.a.createElement("div",{className:m.a.dialog+" "+m.a.active},o.a.createElement(u.b,{to:"/dialogs/"+e.id}," ",e.name," "))},g=function(e){return o.a.createElement("div",{className:m.a.dialog},e.message," ")},f=t(124),b=t(125),p=t(65),v=t(73),E=Object(v.a)(50),_=Object(b.a)({form:"dialogAddMessageForm"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(f.a,{component:p.b,validate:[v.b,E],name:"newMessageText",placeHolder:"Enter your message"})),o.a.createElement("div",null,o.a.createElement("button",null,"Send"))))})),h=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return o.a.createElement(d,{id:e.id,key:e.id,name:e.name})})),n=a.messages.map((function(e){return o.a.createElement(g,{message:e.message,key:e.id})}));a.newMessageText;return o.a.createElement("div",{className:m.a.dialogs},o.a.createElement("div",{className:m.a.dialogsItems},t),o.a.createElement("div",{className:m.a.messages},n),o.a.createElement(_,{onSubmit:function(a){e.sendMessage(a.newMessageText)}}))};a.default=Object(s.d)(Object(n.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(i.a)(a))}}})),r.a)(h)}}]);
//# sourceMappingURL=4.bed13372.chunk.js.map