(this["webpackJsonptodo-demo-app"]=this["webpackJsonptodo-demo-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(6),l=a.n(c),s=a(2),r=(a(13),a(7)),i=function(e){var t=e.setInputText,a=e.todos,o=e.setTodos,c=e.inputText,l=e.setStatus;return n.a.createElement("form",null,n.a.createElement("input",{value:c,onChange:function(e){t(e.target.value)},type:"text",className:"todo-input"}),n.a.createElement("button",{onClick:function(e){e.preventDefault(),o([].concat(Object(r.a)(a),[{text:c,completed:!1,id:1e3*Math.random()}])),t=""},className:"todo-button",type:"submit"},n.a.createElement("i",{className:"fa fa-plus-square"})),n.a.createElement("div",{className:"select"},n.a.createElement("select",{onChange:function(e){l(e.target.value)},name:"todos",className:"filter-todo"},n.a.createElement("option",{value:"all"},"ALL"),n.a.createElement("option",{value:"completed"},"Completed"),n.a.createElement("option",{value:"uncompleted"},"Uncompleted"))))},m=a(4),u=function(e){var t=e.text,a=e.todo,o=e.todos,c=e.setTodos;return n.a.createElement("div",{className:"todo"},n.a.createElement("li",{className:"todo-item ".concat(a.completed?"completed":"")},t),n.a.createElement("button",{onClick:function(){c(o.map((function(e){return e.id===a.id?Object(m.a)(Object(m.a)({},e),{},{completed:!e.completed}):e})))},className:"complete-btn"},n.a.createElement("i",{className:"fa fa-check"})),n.a.createElement("button",{onClick:function(){c(o.filter((function(e){return e.id!==a.id})))},className:"trash-btn"},n.a.createElement("i",{className:"fa fa-trash"})))},d=function(e){var t=e.todos,a=e.setTodos,o=e.filteredTodos;return n.a.createElement("div",{className:"todo-container"},n.a.createElement("ul",{className:"todo-list"},o.map((function(e){return n.a.createElement(u,{setTodos:a,todos:t,text:e.text,todo:e,key:e.id})}))))};var f=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(o.useState)([]),r=Object(s.a)(l,2),m=r[0],u=r[1],f=Object(o.useState)("all"),p=Object(s.a)(f,2),E=p[0],b=p[1],g=Object(o.useState)([]),v=Object(s.a)(g,2),h=v[0],N=v[1];Object(o.useEffect)((function(){j()}),[]),Object(o.useEffect)((function(){O(),S()}),[m,E]);var O=function(){switch(E){case"completed":N(m.filter((function(e){return!0===e.completed})));break;case"uncompleted":N(m.filter((function(e){return!1===e.completed})));break;default:N(m)}},S=function(){localStorage.setItem("todos",JSON.stringify(m))},j=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));u(e)}};return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("h1",null,"Interlist"),n.a.createElement("h6",{className:"verly"},"By VerlyDesign")),n.a.createElement(i,{inputText:a,todos:m,setTodos:u,setInputText:c,setStatus:b}),n.a.createElement(d,{filteredTodos:h,setTodos:u,todos:m}),n.a.createElement("div",{className:"logo-container"},n.a.createElement("img",{className:"logo",src:"https://i.pinimg.com/originals/c0/eb/a2/c0eba234bc326b8eecfabad532c944d7.png",alt:"logo"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.8ed3a81c.chunk.js.map