!function(e){function t(t){for(var r,c,u=t[0],l=t[1],i=t[2],p=0,s=[];p<u.length;p++)c=u[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(f&&f(t);s.length;)s.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var f=l;a.push([144,1]),n()}({144:function(e,t,n){e.exports=n(355)},355:function(e,t,n){"use strict";n.r(t);n(145),n(347);var r=n(0),o=n.n(r),a=n(141),c=n.n(a),u=n(359),l=n(357),i=n(361),f=n(358),p=n(143),s=n(360),m=n(102),y=Object(s.a)((function(e){var t=e.product,n=e.deleteProduct,r=e.index;return o.a.createElement("tr",null,o.a.createElement("td",null,t.Name),o.a.createElement("td",null,"$",t.Price),o.a.createElement("td",null,t.Category),o.a.createElement("td",null,o.a.createElement(m.a,{to:"/img/".concat(t.Image)},"View")),o.a.createElement("td",null,o.a.createElement(m.a,{to:"/edit/".concat(t.id)},"Edit")),o.a.createElement("td",null,o.a.createElement("button",{type:"button",onClick:function(){n(r)}},"Delete")))}));function d(e){var t=e.products,n=e.deleteProduct,r=t.map((function(e){return o.a.createElement(y,{key:e.id,product:e,deleteProduct:n,index:e.id})}));return o.a.createElement("table",{className:"borderedTable"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Product Name"),o.a.createElement("th",null,"Price"),o.a.createElement("th",null,"Category"),o.a.createElement("th",null,"Image"),o.a.createElement("th",null,"Edit"),o.a.createElement("th",null,"Delete"))),o.a.createElement("tbody",null,r))}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(u,e);var t,n,r,a,c=(t=u,function(){var e,n=P(t);if(O()){var r=P(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return g(this,e)});function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=c.call(this)).handleSubmit=e.handleSubmit.bind(E(e)),e}return n=u,(r=[{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.forms.productAddForm,n={Name:t.product.value,Price:t.price.value.slice(1),Category:t.category.value,Image:t.image.value};(0,this.props.createProduct)(n),t.price.value="$",t.product.value="",t.image.value=""}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{name:"productAddForm",className:"formAdd",onSubmit:this.handleSubmit},o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("label",{htmlFor:"category"},"Category",o.a.createElement("br",null),o.a.createElement("select",{id:"prdCat",name:"category"},o.a.createElement("option",{value:"shirt"},"Shirts"),o.a.createElement("option",{value:"jeans"},"Jeans"),o.a.createElement("option",{value:"jacket"},"Jackets"),o.a.createElement("option",{value:"sweater"},"Sweaters"),o.a.createElement("option",{value:"accessories"},"Accessories")))),o.a.createElement("p",null,o.a.createElement("label",{htmlFor:"price"},"Price Per Unit",o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"price",defaultValue:"$"}))),o.a.createElement("p",null,o.a.createElement("input",{type:"submit",id:"btnAdd",value:"Add Product"}))),o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("label",{htmlFor:"name"},"Product Name",o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"product"}))),o.a.createElement("p",null,o.a.createElement("label",{htmlFor:"image"},"Image URL",o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"image"}))))))}}])&&b(n.prototype,r),a&&b(n,a),u}(o.a.Component);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t,n,r,o,a,c){try{var u=e[a](c),l=u.value}catch(e){return void n(e)}u.done?t(l):Promise.resolve(l).then(r,o)}function _(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){S(a,r,o,c,u,"next",e)}function u(e){S(a,r,o,c,u,"throw",e)}c(void 0)}))}}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?D(e):t}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(f,e);var t,n,r,a,c,u,l,i=(t=f,function(){var e,n=I(t);if(R()){var r=I(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return x(this,e)});function f(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(e=i.call(this)).state={products:[]},e.createProduct=e.createProduct.bind(D(e)),e.deleteProduct=e.deleteProduct.bind(D(e)),e}return n=f,(r=[{key:"componentDidMount",value:function(){document.forms.productAddForm.price.value="$",this.loadData()}},{key:"loadData",value:(l=_(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(window.ENV.UI_API_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"query{\n              productList{\n                  id Name Price Image Category\n              }\n          }"})});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({products:n.data.productList});case 8:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{key:"createProduct",value:(u=_(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r='mutation {\n            productAdd(product:{\n              Name: "'.concat((n=t).Name,'",\n              Price: ').concat(n.Price,',\n              Image: "').concat(n.Image,'",\n              Category: ').concat(n.Category,",\n            }) {\n              _id\n            }\n        }"),e.next=4,fetch(window.ENV.UI_API_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:r})});case 4:this.loadData();case 5:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"deleteProduct",value:(c=_(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={id:t},e.next=4,fetch(window.ENV.UI_API_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"mutation productDelete($id: Int!) {\n      productDelete(id: $id)\n    }",variables:n})});case 4:this.loadData();case 5:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.products;return o.a.createElement("div",{id:"mainDiv"},o.a.createElement("h1",null,"My Company Inventory"),o.a.createElement("h3",null,"Showing all availble products"),o.a.createElement("hr",null),o.a.createElement("br",null),o.a.createElement(d,{products:e,deleteProduct:this.deleteProduct}),o.a.createElement("h3",null,"Add a new product to inventory"),o.a.createElement("hr",null),o.a.createElement(w,{createProduct:this.createProduct}))}}])&&C(n.prototype,r),a&&C(n,a),f}(o.a.Component);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function J(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?U(e):t}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(u,e);var t,n,r,a,c=(t=u,function(){var e,n=q(t);if(F()){var r=q(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return J(this,e)});function u(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this,e)).state={value:(n=e.value,null!=n?n.toString():"")},t.onBlur=t.onBlur.bind(U(t)),t.onChange=t.onChange.bind(U(t)),t}return n=u,(r=[{key:"onChange",value:function(e){e.target.value.match(/^\d*$/)&&this.setState({value:e.target.value})}},{key:"onBlur",value:function(e){var t,n=this.props.onChange,r=this.state.value;n(e,(t=parseInt(r,10),Number.isNaN(t)?null:t))}},{key:"render",value:function(){var e=this.state.value;return o.a.createElement("input",A({type:"text"},this.props,{value:e,onBlur:this.onBlur,onChange:this.onChange}))}}])&&$(n.prototype,r),a&&$(n,a),u}(o.a.Component);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?W(e):t}function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(u,e);var t,n,r,a,c=(t=u,function(){var e,n=Y(t);if(X()){var r=Y(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Q(this,e)});function u(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this,e)).state={value:(n=e.value,null!=n?n:"")},t.onBlur=t.onBlur.bind(W(t)),t.onChange=t.onChange.bind(W(t)),t}return n=u,(r=[{key:"onChange",value:function(e){this.setState({value:e.target.value})}},{key:"onBlur",value:function(e){var t,n=this.props.onChange,r=this.state.value;n(e,0===(t=r).trim().length?null:t)}},{key:"render",value:function(){var e=this.state.value,t=this.props,n=t.tag,r=void 0===n?"input":n,a=z(t,["tag"]);return o.a.createElement(r,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){H(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a,{value:e,onBlur:this.onBlur,onChange:this.onChange}))}}])&&G(n.prototype,r),a&&G(n,a),u}(o.a.Component);function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function ne(e,t,n,r,o,a,c){try{var u=e[a](c),l=u.value}catch(e){return void n(e)}u.done?t(l):Promise.resolve(l).then(r,o)}function re(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){ne(a,r,o,c,u,"next",e)}function u(e){ne(a,r,o,c,u,"throw",e)}c(void 0)}))}}function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){ce(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ue(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function le(e,t){return(le=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ie(e,t){return!t||"object"!==ee(t)&&"function"!=typeof t?fe(e):t}function fe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pe(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function se(e){return(se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var me=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&le(e,t)}(i,e);var t,n,r,a,c,u,l=(t=i,function(){var e,n=se(t);if(pe()){var r=se(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return ie(this,e)});function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=l.call(this)).state={product:[]},e.onChange=e.onChange.bind(fe(e)),e.handleSubmit=e.handleSubmit.bind(fe(e)),e}return n=i,(r=[{key:"componentDidMount",value:function(){this.loadData()}},{key:"componentDidUpdate",value:function(e){var t=e.match.params.id;this.props.match.params.id!==t&&this.loadData()}},{key:"onChange",value:function(e,t){var n=e.target,r=n.name,o=n.value,a=void 0===t?o:t;this.setState((function(e){return{product:ae({},e.product,ce({},r,a))}}))}},{key:"handleSubmit",value:(u=re(regeneratorRuntime.mark((function e(t){var n,r,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=this.state.product,r=n.id,o=te(n,["id"]),a={id:r,changes:o},e.next=7,fetch(window.ENV.UI_API_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"mutation productUpdate($id: Int!, $changes: productUpdateInputs!) {  \n      productUpdate(id: $id, changes: $changes) {    \n        id Name Price Image Category  \n      } \n    }",variables:a})});case 7:this.loadData();case 8:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"loadData",value:(c=re(regeneratorRuntime.mark((function e(){var t,n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,n={id:t},e.next=5,fetch(window.ENV.UI_API_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"query product($id: Int!){\n      product (id: $id) {\n        id Name Price Image Category\n      }\n    }",variables:n})});case 5:return r=e.sent,e.next=8,r.json();case 8:o=e.sent,this.setState({product:o.data.product});case 10:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.product.id,t=this.props.match.params.id;if(null==e)return null!=t?o.a.createElement("h3",null,"product with ID ".concat(t," not found.")):null;var n=this.state.product,r=n.Name,a=n.Price,c=this.state.product,u=c.Image,l=c.Category;return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("h3",null,"Editing product: ".concat(e)),o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Name:"),o.a.createElement("td",null,o.a.createElement(Z,{name:"Name",value:r,onChange:this.onChange,key:e}))),o.a.createElement("tr",null,o.a.createElement("td",null,"Price:"),o.a.createElement("td",null,o.a.createElement(M,{name:"Price",value:a,onChange:this.onChange,key:e}))),o.a.createElement("tr",null,o.a.createElement("td",null,"Image:"),o.a.createElement("td",null,o.a.createElement(Z,{name:"Image",value:u,onChange:this.onChange,key:e}))),o.a.createElement("tr",null,o.a.createElement("td",null,"Category:"),o.a.createElement("td",null,o.a.createElement("select",{name:"Category",value:l,onChange:this.onChange},o.a.createElement("option",{value:"shirt"},"Shirts"),o.a.createElement("option",{value:"jeans"},"Jeans"),o.a.createElement("option",{value:"jacket"},"Jackets"),o.a.createElement("option",{value:"sweater"},"Sweaters"),o.a.createElement("option",{value:"accessories"},"Accessories")))),o.a.createElement("tr",null,o.a.createElement("td",null),o.a.createElement("td",null,o.a.createElement("button",{type:"submit"},"Submit"))))))}}])&&ue(n.prototype,r),a&&ue(n,a),i}(o.a.Component);function ye(e){var t=e.match.params.id;return o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("img",{src:t,alt:"Product Img"}))}var de=function(){return o.a.createElement("h1",null,"Page Not Found")};function he(){return o.a.createElement(i.a,null,o.a.createElement(f.a,{exact:!0,from:"/",to:"/products"}),o.a.createElement(p.a,{path:"/products",component:N}),o.a.createElement(p.a,{path:"/edit/:id",component:me}),o.a.createElement(p.a,{path:"/img/:id",component:ye}),o.a.createElement(p.a,{component:de}))}function be(){return o.a.createElement("nav",null,o.a.createElement(l.a,{exact:!0,to:"/"},"Home")," | ",o.a.createElement(l.a,{to:"/products"},"Product List"))}function ve(){return o.a.createElement("div",null,o.a.createElement(be,null),o.a.createElement(he,null))}var ge=o.a.createElement(u.a,null,o.a.createElement(ve,null));c.a.render(ge,document.getElementById("section1"))}});