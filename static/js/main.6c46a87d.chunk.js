(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/woman.9e32ff17.svg"},20:function(e,t,a){e.exports=a.p+"static/media/man.8bfd79fb.svg"},37:function(e,t,a){e.exports=a(51)},42:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),s=a.n(c),o=(a(42),a(3)),i=a(4),l=a(6),m=a(5),u=a(7),h=function(e){return r.a.createElement("nav",{className:"navigation"},e.children)},d=a(18),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).clickResponse=function(){a.props.clickHandler(Object(d.a)(a))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e="avatar";return this.props.isSelected&&(e+=" avatar--selected"),r.a.createElement("div",{className:e},r.a.createElement("img",{onClick:this.clickResponse,className:"avatar__img",src:this.props.image,alt:""}))}}]),t}(r.a.Component),p=a(19),E=a.n(p),v=a(20),b=a.n(v),g=a(9),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={gender:""},a.handleClick=function(e){a.setState({gender:e.props.genderName})},a.sendUserData=function(e){var t=a.state.gender,n=a.props,r=n.sendUserData,c=n.checkErrors;r(t),""===t?(e.preventDefault(),c(1)):c(0)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"page"},r.a.createElement("h5",{className:"section-title"},"Choose your avatar"),r.a.createElement("div",{className:"avatars-wrapper d-flex justify-content-around"},[["Woman",E.a],["Man",b.a]].map(function(t,a){return e.state.gender===t[0]?r.a.createElement(f,{key:a,isSelected:!0,clickHandler:e.handleClick,genderName:t[0],image:t[1]}):r.a.createElement(f,{key:a,clickHandler:e.handleClick,genderName:t[0],image:t[1]})})),r.a.createElement(h,null,r.a.createElement(g.b,{onClick:this.sendUserData,className:"ml-auto",to:"/name"},"Next")))}}]),t}(r.a.Component),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:""},a.handleChange=function(e){a.setState({name:e.target.value})},a.sendUserData=function(e){var t=a.state.name,n=a.props,r=n.sendUserData,c=n.checkErrors;r(t);var s=/^[A-Z]/i.test(t);t.length<3&&!s?(e.preventDefault(),c(2)):c(0)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page"},r.a.createElement("h5",{className:"section-title"},"What's your name?"),r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("input",{className:"form-control rounded-0 w-75",onChange:this.handleChange,type:"text"})),r.a.createElement(h,null,r.a.createElement(g.b,{to:"/"},"Back"),r.a.createElement(g.b,{onClick:this.sendUserData,to:"/confirm"},"Next")))}}]),t}(r.a.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"page"},r.a.createElement("h5",{className:"section-title section-title--mb-big"},"Is this correct?"),r.a.createElement("div",{className:"d-flex align-items-center"},"Woman"===e.props.gender?r.a.createElement(f,{image:E.a}):r.a.createElement(f,{image:b.a}),r.a.createElement("h5",{className:"mb-0"},this.props.name)),r.a.createElement(h,null,r.a.createElement(g.b,{to:"/"},"Start again"),r.a.createElement(g.b,{to:"/confirm"},"Confirm")))}}]),t}(r.a.Component),y=a(33),N=a(34),w={transform:"translate(-50%, 100%)",transition:"transform ".concat(500,"ms ease-in-out")},x={entering:{transform:"translate(-50%, 100%)"},entered:{transform:"translate(-50%, 0)"},exiting:{transform:"translate(-50%, 100%)"},exited:{transform:"translate(-50%, 0)"}},C=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t="error";return function(){switch(e.props.errorType){case 1:t="First choose your avatar";break;case 2:t="Write your name";break;default:t="Unknown error"}}(),r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{unmountOnExit:!0,in:this.props.showError,timeout:{appear:500,enter:300,exit:500}},function(e){return r.a.createElement("div",{style:Object(y.a)({},w,x[e]),className:"error-box"},t)}))}}]),t}(r.a.Component),U=a(11),S=a(53),D=a(52),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={userGender:"",userName:"",showError:!1,errorType:0},a.setUserGender=function(e){a.setState({userGender:e})},a.setUserName=function(e){a.setState({userName:e})},a.checkErrors=function(e){a.setState({errorType:e}),0!==e&&a.setState({showError:!0},function(){a.timeout?(clearTimeout(a.timeout),a.timeout=setTimeout(function(){a.setState({showError:!1})},4e3)):a.timeout=setTimeout(function(){a.setState({showError:!1})},4e3)})},a.timeout=null,a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"base-box"},r.a.createElement(U.a,{render:function(t){var a=t.location,n=a.pathname;return r.a.createElement(S.a,null,r.a.createElement(D.a,{key:n,classNames:"page",timeout:{enter:1e3,exit:1e3}},r.a.createElement(U.a,{location:a,render:function(){return r.a.createElement(U.c,null,r.a.createElement(U.a,{exact:!0,path:"/",render:function(){return r.a.createElement(k,{checkErrors:e.checkErrors,sendUserData:e.setUserGender})}}),r.a.createElement(U.a,{path:"/name",render:function(){return r.a.createElement(j,{checkErrors:e.checkErrors,sendUserData:e.setUserName})}}),r.a.createElement(U.a,{path:"/confirm",render:function(){return r.a.createElement(O,{name:e.state.userName,gender:e.state.userGender})}}))}})))}}),r.a.createElement(C,{showError:this.state.showError,errorType:this.state.errorType}))}}]),t}(r.a.Component);var W=function(){return r.a.createElement(g.a,null,r.a.createElement("div",{className:"container overflow-hidden"},r.a.createElement(T,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.6c46a87d.chunk.js.map