(this.webpackJsonptodolist_2021=this.webpackJsonptodolist_2021||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),c=n(3),r=n.n(c),a=n(4),s=n(5),l=n(7),d=n(6),g=n(0);var u=function(t){var e=t.click,n=t.change,o=t.enter;return Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{type:"test",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694",required:!0,maxLength:"15",onChange:n,onKeyPress:o}),Object(g.jsx)("button",{onClick:e,children:"Log In"})]})};var j=function(t){var e=t.clock;return Object(g.jsx)("h3",{children:e})};var h=function(t){var e=t.click,n=t.input,o=t.change,i=t.enter;return Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{type:"text",placeholder:"todo",onChange:o,value:n||"",onKeyPress:i}),Object(g.jsx)("button",{onClick:e,children:"\uc785\ub825"})]})};var m=function(t){var e=t.todo,n=t.click,o=t.id;return Object(g.jsx)("div",{children:Object(g.jsxs)("li",{id:o,children:[e," ",Object(g.jsx)("button",{onClick:n,children:"X"})]})})},p="username",v="loginstate",S="todolist",b=[],f=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var o;return Object(a.a)(this,n),(o=e.call(this,t)).savedTodoList=function(){return localStorage.setItem(S,JSON.stringify(b))},o.inputUpdate=function(t){localStorage.setItem(p,t.target.value),o.setState({name:localStorage.getItem(p)})},o.todoUpdate=function(t){o.setState({todoWrite:t.target.value})},o.loginClick=function(){localStorage.setItem(v,!0),o.setState({loginState:localStorage.getItem(v)})},o.loginPressEnter=function(t){"Enter"===t.key&&o.loginClick()},o.todoClick=function(){var t={id:Date.now(),todo:o.state.todoWrite};b.push(t),o.savedTodoList(),o.setState({todoWrite:""})},o.todoPressEnter=function(t){"Enter"===t.key&&o.todoClick()},o.todoDelClick=function(t){var e=t.target.parentElement,n=parseInt(e.id);e.remove(),b=b.filter((function(t){return t.id!==n})),o.savedTodoList()},o.getTime=function(){var t=new Date,e=String(t.getHours()).padStart(2,"0"),n=String(t.getMinutes()).padStart(2,"0"),i=String(t.getSeconds()).padStart(2,"0"),c="".concat(e,":").concat(n,":").concat(i);o.setState({currentTime:c})},o.printTime=function(){o.getTime(),setInterval((function(){o.getTime()}),1e3)},o.getImg=function(){var t=["0.jpg","1.jpg","2.jpg"],e=Math.floor(Math.random()*t.length);o.setState({img:t[e]})},o.state={name:localStorage.getItem(p),loginState:localStorage.getItem(v)},localStorage.getItem(S)&&(b=JSON.parse(localStorage.getItem(S))),o}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.printTime(),this.getImg()}},{key:"render",value:function(){var t=this.state,e=t.name,n=t.loginState,o=t.currentTime,i=t.img,c=t.todoWrite,r=this.loginClick,a=this.inputUpdate,s=this.todoClick,l=this.todoUpdate,d=this.todoDelClick,p=this.loginPressEnter,v=this.todoPressEnter;return Object(g.jsxs)("div",{children:[n?"hello ".concat(e):Object(g.jsx)(u,{click:r,change:a,enter:p}),Object(g.jsx)(j,{clock:o}),Object(g.jsx)(h,{click:s,input:c,change:l,enter:v}),b.map((function(t){return Object(g.jsx)(m,{id:t.id,todo:t.todo,click:d},t.id)})),Object(g.jsx)("img",{src:"img/".concat(i),alt:""})]})}}]),n}(o.Component);r.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(f,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.4fe14da4.chunk.js.map