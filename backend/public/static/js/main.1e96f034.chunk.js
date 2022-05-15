(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,s){},61:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(30),r=s.n(a),o=(s(37),s(8)),i=s(9),l=s(10),j=s(11),u=s(12),h=s(2),d=s(13),m=s(15),b=s.n(m),O=s(0),p=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var n;Object(o.a)(this,s),(n=t.call(this,e)).state={username:"",password:"",success:!1,error:!1},n.onLogin=function(e){e.preventDefault();var t=n.state,s=t.username,c=t.password;b()({method:"POST",data:{username:s,password:c},url:"http://127.0.0.1/login"}).then((function(e){console.log(e),window.localStorage.setItem("isAuthenticated",!0),200===e.status&&(n.setState({success:!0,error:!1}),n.props.history.push("/stock"))})).catch((function(e){var t=e.response;n.setState({error:t.data.message,success:!1})}))},n.onChange=function(e){var t,s=e.target,c=s.name,a=s.value;n.setState((t={},Object(d.a)(t,c,a),Object(d.a)(t,"error",!1),Object(d.a)(t,"success",!1),t))};var c=localStorage.getItem("isAuthenticated");return console.log(c),c&&console.log("You can't login if you are logged in!"),n}return Object(i.a)(s,[{key:"render",value:function(){var e=this.state,t=e.error,s=e.success;return Object(O.jsx)("div",{className:"container mt-5",children:Object(O.jsx)("div",{className:"row d-flex justify-content-center",children:Object(O.jsxs)("div",{className:"col-md-6",children:[Object(O.jsx)("h3",{children:Object(O.jsx)("center",{children:"Register"})}),Object(O.jsxs)("form",{onSubmit:this.onLogin,children:[s&&"You've logged in successfully",t,Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"UserName"}),Object(O.jsx)("input",{name:"username",type:"text",className:"form-control",placeholder:"Enter username",onChange:this.onChange})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("input",{name:"password",type:"password",className:"form-control",placeholder:"Password",onChange:this.onChange})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"}),Object(O.jsxs)("p",{className:"mt-2",children:["Don\u2019t have an account? Sign up?"," ",Object(O.jsx)(u.b,{to:"/register",children:"Register"})]})]})]})})})}}]),s}(n.Component),g=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={firstname:"",lastname:"",username:"",password:"",success:!1,error:!1},e.onSignup=function(t){t.preventDefault();var s=e.state,n=s.firstname,c=s.lastname,a=s.username,r=s.password;b()({method:"POST",data:{firstname:n,lastname:c,username:a,password:r},url:"http://127.0.0.1/register"}).then((function(t){console.log(t),window.localStorage.setItem("isAuthenticated",!0),200===t.status&&(e.setState({success:!0,error:!1}),e.props.history.push("/stock"))})).catch((function(t){var s=t.response;e.setState({error:s.data.message,success:!1})}))},e.onChange=function(t){var s,n=t.target,c=n.name,a=n.value;e.setState((s={},Object(d.a)(s,c,a),Object(d.a)(s,"error",!1),Object(d.a)(s,"success",!1),s))},e}return Object(i.a)(s,[{key:"render",value:function(){var e=this.state,t=e.error,s=e.success;return Object(O.jsx)("div",{className:"container mt-5",children:Object(O.jsx)("div",{className:"row d-flex justify-content-center",children:Object(O.jsxs)("div",{className:"col-md-6",children:[Object(O.jsx)("h3",{children:Object(O.jsx)("center",{children:"Register"})}),Object(O.jsxs)("form",{onSubmit:this.onSignup,children:[s&&"You've registered in successfully",t,Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"First Name"}),Object(O.jsx)("input",{name:"firstname",type:"text",className:"form-control",placeholder:"Enter your first name",onChange:this.onChange})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Last Name"}),Object(O.jsx)("input",{name:"lastname",type:"text",className:"form-control",placeholder:"Enter your last name",onChange:this.onChange})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"UserName"}),Object(O.jsx)("input",{name:"username",type:"text",className:"form-control",placeholder:"Enter username",onChange:this.onChange})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("input",{name:"password",type:"password",className:"form-control",placeholder:"Password",onChange:this.onChange})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"}),Object(O.jsxs)("p",{className:"mt-2",children:["Already have an account? ",Object(O.jsx)(u.b,{to:"/login",children:"Login"})]})]})]})})})}}]),s}(n.Component),x=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={stockName:""},n}return Object(i.a)(s,[{key:"submitForm",value:function(e){e.preventDefault();var t=this.state.stockName;this.props.searchProfile(t)}},{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{className:"search-box",children:Object(O.jsxs)("form",{onSubmit:this.submitForm.bind(this),children:[Object(O.jsx)("h3",{children:Object(O.jsx)("center",{children:Object(O.jsx)("label",{children:"Search your stock"})})}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",className:"form-control",value:this.state.stockName,onChange:function(t){return e.setState({stockName:t.target.value})},placeholder:"Enter Stock Symbol and hit enter"})]})})}}]),s}(n.Component),f=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){var e=this.props.userData;return"Not Found"===e.message?Object(O.jsxs)("div",{className:"notfound",children:[Object(O.jsx)("h2",{children:"Heyyyyy"}),Object(O.jsx)("p",{children:"Are you sure, for whom you are looking for ???"})]}):Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("div",{className:"card-header",children:e.Name}),Object(O.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(O.jsxs)("li",{className:"list-group-item",children:[" ",Object(O.jsxs)("i",{children:[" 52WeekHigh : ",e.High]})]}),Object(O.jsx)("li",{className:"list-group-item",children:Object(O.jsxs)("i",{children:[" 52WeekLow : ",e.Low]})}),Object(O.jsxs)("li",{className:"list-group-item",children:["   ",Object(O.jsxs)("i",{children:["Outstanding Shares : ",e.Outstanding]})," "]}),Object(O.jsxs)("li",{className:"list-group-item",children:[" ",Object(O.jsxs)("i",{children:[" EPS : ",e.EPS]})]}),Object(O.jsx)("li",{className:"list-group-item",children:Object(O.jsxs)("i",{children:[" MarketCap : ",e.MarketCap]})})]})]})}}]),s}(n.Component),v=f,N=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={Symbol:"IBM",AssetType:"",Name:"",notFound:""},n}return Object(i.a)(s,[{key:"getProfile",value:function(e){var t=this,s="".concat("http://127.0.0.1:4000/stock");e||(e="IBM"),b.a.post(s,{stock:e}).then((function(e){return e.data})).then((function(e){console.log(e),t.setState({Symbol:"IBM",Name:e.Name,High:e["52WeekHigh"],Low:e["52WeekLow"],Outstanding:e.SharesOutstanding,EPS:e.EPS,MarketCap:e.MarketCapitalization,notFound:e.message})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){this.getProfile(this.state.stock)}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"container mt-5",children:[Object(O.jsx)("div",{className:"row d-flex justify-content-center",children:Object(O.jsxs)("div",{className:"col-md-6",children:[Object(O.jsx)(x,{searchProfile:this.getProfile.bind(this)}),Object(O.jsx)(v,{userData:this.state})]})}),Object(O.jsx)("div",{className:"row d-flex justify-content-center",children:Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("center",{children:[Object(O.jsx)(u.b,{to:"/logout",children:"Logout"})," "]})})})]})}}]),s}(n.Component),y=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(u.a,{children:Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{path:"/stock",component:N}),Object(O.jsx)(h.a,{path:"/login",component:p}),Object(O.jsx)(h.a,{path:"/register",component:g})]})})})}}]),s}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.1e96f034.chunk.js.map