(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){e.exports=t(24)},16:function(e,n,t){},22:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(8),r=t.n(i),c=(t(16),t(2)),l=t(3),s=t(5),u=t(4),d=t(6),p=t(1),f=t(9),h=t.n(f),m=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).state={deuda:7e10,deudaInicial:7e10,initialLoadTime:new Date,interestRatePerSecond:.00033333333},t.componentDidMount=t.componentDidMount.bind(Object(p.a)(Object(p.a)(t))),t.componentWillUnmount=t.componentWillUnmount.bind(Object(p.a)(Object(p.a)(t))),t.tick=t.tick.bind(Object(p.a)(Object(p.a)(t))),t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState(function(e,n){return{deuda:e.deudaInicial+(new Date-e.initialLoadTime)*e.interestRatePerSecond}})}},{key:"render",value:function(){var e=this.state.deuda.toFixed(2);return o.a.createElement("div",{className:"deuda-container"},o.a.createElement("p",{className:"text-pop-up-top"},o.a.createElement(h.a,{className:"deuda",value:e,displayType:"text",thousandSeparator:!0,prefix:"$"})))}}]),n}(a.Component),v=(t(22),function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",{className:"intro"},"El pueblo puertorrique\xf1o debe"),o.a.createElement(m,null),o.a.createElement("a",{className:"fuente-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Fuente")))}}]),n}(a.Component)),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/deuda-publica",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/deuda-publica","/service-worker.js");b?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):w(n,e)})}}()}},[[10,2,1]]]);
//# sourceMappingURL=main.d268b4b2.chunk.js.map