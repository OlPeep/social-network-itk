(this.webpackJsonprct=this.webpackJsonprct||[]).push([[3],{300:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__1keqp",dialigsItems:"Dialogs_dialigsItems__kJlNu",dialog:"Dialogs_dialog__I9-Lt",messages:"Dialogs_messages__3S5iZ",message:"Dialogs_message__ShMqh",active:"Dialogs_active__3Gd6f"}},304:function(e,s,a){"use strict";a.r(s);a(0);var t=a(300),i=a.n(t),n=a(130),c=a(1),o=a(3),d=a(17),l=function(e){var s="/dialogs/"+e.id;return Object(c.jsx)("div",{className:i.a.dialog,children:Object(c.jsx)(d.b,{to:s,children:e.name})})},r=function(e){return Object(c.jsx)("div",{className:i.a.message,children:e.text})},g=a(92),j=a(131),b=a(27),m=a(42),u=Object(m.a)(50),x=Object(j.a)({form:"message"})((function(e){return Object(c.jsxs)("div",{children:["New Message",Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)(g.a,{component:b.b,name:"messageText",validate:[m.b,u]}),Object(c.jsx)("button",{children:"Add"})]})]})})),O=function(e){var s=e.DailogList.map((function(e){return Object(c.jsx)(l,{name:e.name,id:e.id})})),a=e.MessagesList.map((function(e){return Object(c.jsx)(r,{text:e.text})}));return Object(c.jsxs)("div",{className:i.a.dialogs,children:[Object(c.jsx)("div",{className:i.a.dialigsItems,children:s}),Object(c.jsx)("div",{className:i.a.messages,children:a}),Object(c.jsx)(x,Object(o.a)(Object(o.a)({},e),{},{onSubmit:function(s){e.addMesActionCreator(s.messageText)}}))]})},_=a(12),f=a(129),h=a(9);s.default=Object(h.d)(Object(_.b)((function(e){return{DailogList:e.dialogsPage.DailogList,MessagesList:e.dialogsPage.MessagesList,newMes:e.dialogsPage.newMesText}}),(function(e){return{addMesActionCreator:function(s){e(Object(n.a)(s))}}})),f.a)(O)}}]);
//# sourceMappingURL=3.eb0f073c.chunk.js.map