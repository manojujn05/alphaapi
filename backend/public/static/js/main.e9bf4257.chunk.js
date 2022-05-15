(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,a){e.exports=a(59)},36:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),o=a.n(s),l=(a(36),a(7)),c=a(8),m=a(10),i=a(9),u=a(11),h=a(1),p=a(12),d=a(14),g=a.n(d),E=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",success:!1,error:!1},n.onLogin=function(e){e.preventDefault();var t=n.state,a=t.username,r=t.password;g()({method:"POST",data:{username:a,password:r},url:"http://localhost:4000/login"}).then((function(e){console.log(e),window.localStorage.setItem("isAuthenticated",!0),200===e.status&&(n.setState({success:!0,error:!1}),n.props.history.push("/stock"))})).catch((function(e){var t=e.response;n.setState({error:t.data.message,success:!1})}))},n.onChange=function(e){var t,a=e.target,r=a.name,s=a.value;n.setState((t={},Object(p.a)(t,r,s),Object(p.a)(t,"error",!1),Object(p.a)(t,"success",!1),t))};var r=localStorage.getItem("isAuthenticated");return console.log(r),r&&console.log("You can't login if you are logged in!"),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.error,a=e.success;return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row d-flex justify-content-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h3",null,r.a.createElement("center",null,"Register")),r.a.createElement("form",{onSubmit:this.onLogin},a&&"You've logged in successfully",t,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"UserName"),r.a.createElement("input",{name:"username",type:"text",className:"form-control",placeholder:"Enter username",onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",type:"password",className:"form-control",placeholder:"Password",onChange:this.onChange})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),r.a.createElement("p",{className:"mt-2"},"Don\u2019t have an account? Sign up?"," ",r.a.createElement(u.b,{to:"/register"},"Register"))))))}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={firstname:"",lastname:"",username:"",password:"",success:!1,error:!1},e.onSignup=function(t){t.preventDefault();var a=e.state,n=a.firstname,r=a.lastname,s=a.username,o=a.password;g()({method:"POST",data:{firstname:n,lastname:r,username:s,password:o},url:"http://localhost:4000/register"}).then((function(t){console.log(t),window.localStorage.setItem("isAuthenticated",!0),200===t.status&&(e.setState({success:!0,error:!1}),e.props.history.push("/stock"))})).catch((function(t){var a=t.response;e.setState({error:a.data.message,success:!1})}))},e.onChange=function(t){var a,n=t.target,r=n.name,s=n.value;e.setState((a={},Object(p.a)(a,r,s),Object(p.a)(a,"error",!1),Object(p.a)(a,"success",!1),a))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.error,a=e.success;return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row d-flex justify-content-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h3",null,r.a.createElement("center",null,"Register")),r.a.createElement("form",{onSubmit:this.onSignup},a&&"You've registered in successfully",t,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{name:"firstname",type:"text",className:"form-control",placeholder:"Enter your first name",onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{name:"lastname",type:"text",className:"form-control",placeholder:"Enter your last name",onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"UserName"),r.a.createElement("input",{name:"username",type:"text",className:"form-control",placeholder:"Enter username",onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",type:"password",className:"form-control",placeholder:"Password",onChange:this.onChange})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),r.a.createElement("p",{className:"mt-2"},"Already have an account? ",r.a.createElement(u.b,{to:"/login"},"Login"))))))}}]),a}(n.Component),v=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={stockName:""},n}return Object(c.a)(a,[{key:"submitForm",value:function(e){e.preventDefault();var t=this.state.stockName;this.props.searchProfile(t)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-box"},r.a.createElement("form",{onSubmit:this.submitForm.bind(this)},r.a.createElement("h3",null,r.a.createElement("center",null,r.a.createElement("label",null,"Search your stock"))),r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.stockName,onChange:function(t){return e.setState({stockName:t.target.value})},placeholder:"Enter Stock Symbol and hit enter"})))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.userData;return"Not Found"===e.message?r.a.createElement("div",{className:"notfound"},r.a.createElement("h2",null,"Heyyyyy"),r.a.createElement("p",null,"Are you sure, for whom you are looking for ???")):r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},e.Name),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"}," ",r.a.createElement("i",null," 52WeekHigh : ",e.High)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("i",null," 52WeekLow : ",e.Low)),r.a.createElement("li",{className:"list-group-item"},"   ",r.a.createElement("i",null,"Outstanding Shares : ",e.Outstanding)," "),r.a.createElement("li",{className:"list-group-item"}," ",r.a.createElement("i",null," EPS : ",e.EPS)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("i",null," MarketCap : ",e.MarketCap))))}}]),a}(n.Component),N=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={Symbol:"IBM",AssetType:"",Name:"",notFound:""},n}return Object(c.a)(a,[{key:"getProfile",value:function(e){var t=this,a="".concat("http://localhost:4000/stock");e||(e="IBM"),g.a.post(a,{stock:e}).then((function(e){return e.data})).then((function(e){console.log(e),t.setState({Symbol:"IBM",Name:e.Name,High:e["52WeekHigh"],Low:e["52WeekLow"],Outstanding:e.SharesOutstanding,EPS:e.EPS,MarketCap:e.MarketCapitalization,notFound:e.message})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){this.getProfile(this.state.stock)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row d-flex justify-content-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(v,{searchProfile:this.getProfile.bind(this)}),r.a.createElement(b,{userData:this.state}))),r.a.createElement("div",{className:"row d-flex justify-content-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("center",null,r.a.createElement(u.b,{to:"/logout"},"Logout")," "))))}}]),a}(n.Component),y=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/stock",component:N}),r.a.createElement(h.a,{path:"/login",component:E}),r.a.createElement(h.a,{path:"/register",component:f}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.e9bf4257.chunk.js.map