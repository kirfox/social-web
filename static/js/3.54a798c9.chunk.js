(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{296:function(t,e,s){"use strict";s.d(e,"a",(function(){return d}));var n=s(5),c=s(34),i=s(35),r=s(37),o=s(36),a=s(0),u=s.n(a),j=s(14),p=s(7),l=s(1),b=function(t){return{isAuth:t.auth.isAuth}},d=function(t){var e=function(e){Object(r.a)(a,e);var s=Object(o.a)(a);function a(){return Object(c.a)(this,a),s.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(l.jsx)(t,Object(n.a)({},this.props)):Object(l.jsx)(p.a,{to:"/login"})}}]),a}(u.a.Component);return Object(j.b)(b)(e)}},298:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1Of_M"}},299:function(t,e,s){t.exports={posts:"MyPosts_posts__2ULcJ",postsBlock:"MyPosts_postsBlock__1CbEa"}},300:function(t,e,s){t.exports={item:"Post_item__3aFFu"}},301:function(t,e,s){"use strict";s.r(e);var n=s(5),c=s(34),i=s(35),r=s(37),o=s(36),a=s(0),u=s.n(a),j=s(68),p=s(298),l=s.n(p),b=s(1),d=(u.a.Component,s(129)),f=function(t){var e=Object(a.useState)(!1),s=Object(d.a)(e,2),n=s[0],c=s[1],i=Object(a.useState)(t.status),r=Object(d.a)(i,2),o=r[0],u=r[1];Object(a.useEffect)((function(){u(t.status)}),[t.status]);return Object(b.jsxs)("div",{children:[!n&&Object(b.jsx)("div",{children:Object(b.jsx)("span",{onDoubleClick:function(){c(!0)},children:o||"\u0421\u0442\u0430\u0442\u0443\u0441\u0430 \u043d\u0435\u043c\u0430("})}),n&&Object(b.jsx)("div",{children:Object(b.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.updateStatus(o)},value:o})})]})},O=function(t){return t.profile?Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:l.a.descriptionBlock,children:[null==t.profile.photos.large?Object(b.jsx)("img",{src:"https://ru.wargaming.net/clans/media/clans/emblems/cl_215/425215/emblem_195x195.png"}):Object(b.jsx)("img",{src:t.profile.photos.large}),Object(b.jsx)(f,{status:t.status,updateStatus:t.updateStatus}),Object(b.jsxs)("div",{children:[" \u0418\u043c\u044f  ",Object(b.jsx)("b",{children:t.profile.fullName})," "]}),Object(b.jsxs)("div",{children:[" \u041e\u0431\u043e \u043c\u043d\u0435  ",Object(b.jsx)("b",{children:t.profile.aboutMe})," "]})]})}):Object(b.jsx)(j.a,{})},h=s(14),x=s(96),m=s(299),v=s.n(m),g=s(300),P=s.n(g),_=function(t){return Object(b.jsxs)("div",{className:P.a.item,children:[Object(b.jsx)("img",{src:"https://ru.wargaming.net/clans/media/clans/emblems/cl_215/425215/emblem_195x195.png"}),t.message,Object(b.jsxs)("span",{children:[" ",t.likesCount," like"]})]})},k=s(127),S=s(128),y=s(76),C=s(66),w=Object(y.a)(10),A=Object(S.a)({form:"ProfileAddPostForm"})((function(t){return Object(b.jsx)("form",{onSubmit:t.handleSubmit,children:Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(k.a,{component:C.b,name:"newPostText",validate:[y.b,w]})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Add post"})})]})})})),B=function(t){var e=t.posts.map((function(t){return Object(b.jsx)(_,{message:t.message,likesCount:t.likesCount})}));return Object(b.jsxs)("div",{className:v.a.postsBlock,children:[Object(b.jsx)("h3",{children:"My posts"}),Object(b.jsx)(A,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(b.jsx)("div",{className:v.a.posts,children:e})]})},M=Object(h.b)((function(t){return{posts:t.ProfilePage.posts,newPostText:t.ProfilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(x.a)(e))}}}))(B),I=function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(b.jsx)(M,{})]})},N=s(7),T=s(296),U=s(10),F=function(t){Object(r.a)(s,t);var e=Object(o.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(b.jsx)(I,Object(n.a)(Object(n.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(U.d)(Object(h.b)((function(t){return{profile:t.ProfilePage.profile,status:t.ProfilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:x.d,getStatus:x.c,updateStatus:x.e}),N.f,T.a)(F)}}]);
//# sourceMappingURL=3.54a798c9.chunk.js.map