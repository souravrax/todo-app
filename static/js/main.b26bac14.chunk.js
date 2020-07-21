(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{12:function(e,t,o){},13:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(6),i=o.n(r),c=(o(12),o(4)),l=o(2),s=(o(13),function(e){var t=e.addTodo,o=Object(n.useState)(""),r=Object(l.a)(o,2),i=r[0],c=r[1];return a.a.createElement("form",{onSubmit:function(e){!function(e){e.preventDefault(),i&&t(i),e.target.querySelector("input").value="",c("")}(e)}},a.a.createElement("input",{type:"text",name:"newTodo",id:"input-field",placeholder:"Add your Todo by typing in...",onChange:function(e){c(e.target.value)}}))}),d=function(e){var t=e.index,o=e.todo,n=e.toggleTodo,r=e.deleteTodo;return a.a.createElement("div",{className:"todo"},a.a.createElement("p",{style:{textDecoration:o.isComplete?"line-through":"none"}},o.text),a.a.createElement("div",{className:"actions"},a.a.createElement("button",{onClick:function(){return n(t)}}," ",o.isComplete?"Incomplete":"Complete"," "),a.a.createElement("button",{className:"delete",onClick:function(){return r(t)}}," Delete ")))},u=function(e){var t=e.todos,o=e.addTodo,n=e.toggleTodo,r=e.deleteTodo;return a.a.createElement("div",{className:"todo-list"},t.map((function(e,t){return a.a.createElement(d,{key:t,index:t,todo:e,addTodo:o,toggleTodo:n,deleteTodo:r})})))};var p=function(){var e=Object(n.useState)([{text:"This is a demo todo",isComplete:!1},{text:"You can add more todo like this",isComplete:!1},{text:"Add by entering the todo in the form below",isComplete:!1},{text:"To complete a todo, press the 'complete' button",isComplete:!0},{text:"To delete, press teh delete button",isComplete:!1}]),t=Object(l.a)(e,2),o=t[0],r=t[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todo"));return r(e)}),[]);var i=Object(n.useState)(0),d=Object(l.a)(i,2),p=d[0],m=d[1],f=function(e){m(p+1);var t=[].concat(Object(c.a)(o),[{text:e,isComplete:!1}]);localStorage.setItem("todo",JSON.stringify(t)),r(t)};return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Todo App"),a.a.createElement("div",{className:"todo-container"},0===o.length?a.a.createElement("h2",{style:{fontFamily:"Poppins",width:"100%",height:"100%",textAlign:"center",color:"#fff"}},"Add todo using the input below"):a.a.createElement(u,{todos:o,addTodo:f,deleteTodo:function(e){m(p+1);var t=Object(c.a)(o);t.splice(e,1),localStorage.setItem("todo",JSON.stringify(t)),r(t)},toggleTodo:function(e){m(p+1);var t=Object(c.a)(o);t[e].isComplete=!t[e].isComplete,localStorage.setItem("todo",JSON.stringify(t)),r(t)}}),a.a.createElement(s,{addTodo:f}),a.a.createElement("div",{className:"status",style:{fontFamily:"Poppins"}},a.a.createElement("span",{style:{background:"orangered",borderRadius:"5px",padding:"5px",fontSize:"0.6em",color:"white"},className:"count"},"Todos : ",o.length),a.a.createElement("span",{style:{background:"green",borderRadius:"5px",padding:"5px",fontSize:"0.6em",color:"white"},className:"count"},"Interections : ",p))))},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/souravrax.github.io/todo-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/souravrax.github.io/todo-app","/service-worker.js");m?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(o){var n=o.headers.get("content-type");404===o.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}()},7:function(e,t,o){e.exports=o(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.b26bac14.chunk.js.map