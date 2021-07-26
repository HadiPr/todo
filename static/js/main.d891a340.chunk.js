(this["webpackJsonpneo-todo"]=this["webpackJsonpneo-todo"]||[]).push([[0],{23:function(t,e,n){t.exports={label:"style_label__2ilc-",input:"style_input__2CTGL"}},34:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),c=n(26),r=n.n(c),s=(n(34),n(11)),i=n(1);var l=function(){return Object(i.jsxs)("header",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",margin:"20px 10px"},children:[Object(i.jsx)("h1",{style:{marginRight:"auto"},children:"Todo App"}),Object(i.jsx)("nav",{className:"navbar navbar-expand",children:Object(i.jsxs)("ul",{className:" navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(s.b,{className:"nav-link",to:"/add-todo",children:"Add Todo"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(s.b,{className:"nav-link",to:"/todos",children:"Todos"})})]})})]})},d=n(2),u=n(9),j=n(8),b=n(29),h=n(24),O=n(22),m=n.n(O),f=n(28),p=n(14),v=n(15),x=n(17),g=n(16),y=n(23),N=n.n(y),S=function(t){Object(x.a)(n,t);var e=Object(g.a)(n);function n(){var t;Object(p.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).inputHandler=function(){var e=Object(f.a)(m.a.mark((function e(n){var o,a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.props,a=o.handler,c=o.name,a(c.toLowerCase(),n.target.value);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(v.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{style:{margin:"40px auto"},children:[Object(i.jsx)("label",{className:N.a.label,children:this.props.name}),Object(i.jsx)("input",{required:!0,className:N.a.input,onInput:this.inputHandler})]})}}]),n}(o.Component);function w(){var t=Object(o.useState)({title:"",description:""}),e=Object(b.a)(t,2),n=e[0],a=e[1],c=function(t,e){return a((function(n){return Object(j.a)(Object(j.a)({},n),{},Object(u.a)({},t,e))}))};return Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(t){t.id=Date.now(),t.done=!1;var e=JSON.parse(localStorage.getItem("todos"))||[],n=[].concat(Object(h.a)(e),[t]);localStorage.setItem("todos",JSON.stringify(n))}(n),t.target.reset()},children:[Object(i.jsx)(S,{name:"Title",handler:c}),Object(i.jsx)(S,{name:"Description",handler:c}),Object(i.jsx)("button",{className:"",id:"submit-button",children:"Submit"})]})}var k=n(45),T=n(46),D=n(47);function I(t){var e,n=t.todo,o=n.title,a=n.description,c=n.done,r=n.id,s=t.api,l={transform:"scale(1.3)",margin:"10px",cursor:"pointer"};return Object(i.jsxs)("div",(e={className:"w-100"},Object(u.a)(e,"className","card-container"),Object(u.a)(e,"children",[Object(i.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:"10px"},children:[Object(i.jsx)("h4",{style:{padding:"4px",margin:"0",marginRight:"auto"},children:o}),Object(i.jsx)(k.a,{style:l,onClick:function(){return s.deleteTodo(r)}}),c?null:Object(i.jsx)(T.a,{style:l,onClick:function(){return s.editTodo({done:!0,id:r})}}),c?Object(i.jsx)(D.a,{style:l,onClick:function(){return s.editTodo({done:!1,id:r})}}):null]}),Object(i.jsx)("p",{children:a})]),e))}var C=function(t){Object(x.a)(n,t);var e=Object(g.a)(n);function n(){var t;Object(p.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={showDone:!1,todos:[]},t}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var t=function(){var t=localStorage.getItem("todos");return JSON.parse(t)}();this.setState({todos:t})}},{key:"deleteTodo",value:function(t){!function(t){var e=localStorage.getItem("todos"),n=(e=JSON.parse(e)).filter((function(e){return e.id!=t}));localStorage.setItem("todos",JSON.stringify(n))}(t),this.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!=t}))}}))}},{key:"editTodo",value:function(t){!function(t){var e=localStorage.getItem("todos");e=JSON.parse(e),console.log(t);var n=e.find((function(e){return e.id==t.id}));n=Object(j.a)(Object(j.a)({},n),t);var o=[].concat(Object(h.a)(e.filter((function(e){return e.id!==t.id}))),[n]);localStorage.setItem("todos",JSON.stringify(o))}(t),this.setState((function(e){return{todos:e.todos.map((function(e){return t.id==e.id?Object(j.a)(Object(j.a)({},e),t):e}))}}))}},{key:"render",value:function(){var t=this;return Object(i.jsxs)("section",{children:[Object(i.jsxs)("ul",{className:"nav nav-tabs mb-2",children:[Object(i.jsx)("li",{className:"nav-item w-50 ".concat(this.state.showDone?"":"custome-active"),style:{textAlign:"center"},onClick:function(){return t.setState({showDone:!1})},children:Object(i.jsx)("a",{style:{color:"#666"},className:"nav-link ","aria-current":"page",href:"#",children:"Remaining"})}),Object(i.jsx)("li",{className:"nav-item w-50 ".concat(this.state.showDone?"custome-active":""),style:{textAlign:"center"},onClick:function(){return t.setState({showDone:!0})},children:Object(i.jsx)("a",{style:{color:"#666"},className:"nav-link ",href:"#",children:"Done"})})]}),Object(i.jsx)("div",{id:"scrolled-div",style:{overflowY:"scroll",height:"70%"},children:this.state.todos&&this.state.todos.filter((function(e){return e.done===t.state.showDone})).map((function(e){return Object(i.jsx)(I,{todo:e,api:{deleteTodo:t.deleteTodo.bind(t),editTodo:t.editTodo.bind(t)}})}))})]})}}]),n}(o.Component);function J(t){return Object(i.jsxs)(s.a,{children:[t.children,Object(i.jsxs)(d.d,{children:[Object(i.jsx)(d.a,{exact:!0,from:"/",to:"todos"}),Object(i.jsx)(d.b,{path:"/todos",component:C}),Object(i.jsx)(d.b,{path:"/add-todo",component:w})]})]})}n(42);r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(J,{children:Object(i.jsx)(l,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d891a340.chunk.js.map