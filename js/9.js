webpackJsonp([9],{188:function(t,e,n){!function(){"use strict";var e=function(t){return t&&t.__esModule?t["default"]:t},i=function(){function t(t,e){for(var n in e){var i=e[n];i.configurable=!0,i.value&&(i.writable=!0)}Object.defineProperties(t,e)}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=function f(t,e,n){var i=Object.getOwnPropertyDescriptor(t,e);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:f(o,e,n)}if("value"in i&&i.writable)return i.value;var r=i.get;return void 0===r?void 0:r.call(n)},r=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.__proto__=e)},s=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},a=e(n(4)),u=e(n(109)),c=e(n(110)),p=e(n(111)),l=e(n(112)),h=function(t){var e=function(){for(var t=arguments.length,n=Array(t),i=0;t>i;i++)n[i]=arguments[i];s(this,e),o(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,n),this.state={count:0}};return r(e,t),i(e,{componentWillUnmount:{value:function(){clearInterval(this._intervalId)}},componentDidMount:{value:function(){var t=this;l.schedule(function(){t._intervalId=setInterval(function(){t.setState(function(t){return{count:t.count+1}})},100)})}},_textCharUpper:{value:function(t,e){var n=t.toLowerCase(),i=e%n.length;return n.substr(0,i)+n[i].toUpperCase()+n.substr(i+1)}},render:{value:function(){var t={backgroundColor:this.state.count%2?"#990000":"#ff0000",color:"#fff",textAlign:"center",lineHeight:"100px"},e=this._textCharUpper("Hello World",this.state.count);return a.createElement(u,null,a.createElement(c,{options:{align:[.5,.5],origin:[.5,.5]}},a.createElement(p,{options:{size:[150,100],properties:t}},e)))}}}),e}(a.Component);t.exports=h}()}});