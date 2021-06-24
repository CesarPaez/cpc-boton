(()=>{"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?o(n):e}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,o)}function o(){return r(t,arguments,a(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),u(o,t)})(t)}function r(t,n,e){return(r=c()?Reflect.construct:function(t,n,e){var o=[null];o.push.apply(o,n);var i=new(Function.bind.apply(t,o));return e&&u(i,e.prototype),i}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function u(t,n){return(u=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&u(t,n)}(d,t);var i,r,l,s,f,p=(i=d,r=c(),function(){var t,n=a(i);if(r){var o=a(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return e(this,t)});function d(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,d),function(t,n,e){var o=t.attachShadow({mode:"open"}),i=document.createElement("template");i.innerHTML="<style>@import \"styles.css\";\nbutton {\n    display: inline-flex;\n    height: 50px;\n    padding: 0;\n    background: #009578;\n    border: none;\n    outline: none;\n    border-radius: 5px;\n    overflow: hidden;\n    font-family: 'Quicksand', sans-serif;\n    font-size: 16px;\n    font-weight: 500;\n    cursor: pointer;\n}\n\n.boton:hover {\n    background: #008168;\n}\n\n.boton:active {\n    background: #006e58;\n    border: none;\n    transform: translate3d(2px, 2px, 0);\n}\n\n.boton_text,\n.boton_icono {\n    display: inline-flex;\n    align-items: center;\n    padding: 0 24px;\n    color: #ffffff;\n    height: 100%;\n}\n\n.boton_icono {\n    font-size: 1.5em;\n    background: rgba(0, 0, 0, 0.08);\n}</style>"+function(t,n){var e=(Window.lastComponentId?Window.lastComponentId:0)+1;Window.lastComponentId=e;var o="component"+e;return Window[o]=n,t.replaceAll("this.","Window."+o+".")}('<button type="button" class="boton">\r\n    <span class=boton_text>Sin Titulo</span>\r\n    <span class=boton_icono>\r\n        <i class="material-icons">done</i>\r\n    </span>\r\n</button>',t);var r=i.content;o.appendChild(r.cloneNode(!0));var c=document.querySelector('link[href*="material-design-icons/iconfont/material-icons.css"]');c&&o.appendChild(c.cloneNode())}(o(t=p.call(this))),t.id,t}return l=d,f=[{key:"observedAttributes",get:function(){return["titulo","icono","id"]}}],(s=[{key:"connectedCallback",value:function(){var t=this;""!=this.innerHTML&&this.actualizarElementoHtml("",this.innerHTML),this.id=this.hasAttribute("id")?this.getAttribute("id"):0,this.addEventListener("click",(function(n){return t.pmClick(n)}))}},{key:"disconnectedCallback",value:function(){var t=this;this.removeEventListener("click",(function(n){return t.pmClick(n)}))}},{key:"pmClick",value:function(t){t.preventDefault(),t.stopPropagation(),this.dispatchEvent(new CustomEvent("PMClick",{detail:{id:this.id,nombre:this.titulo},bubbles:!0,composed:!0}))}},{key:"titulo",get:function(){return this.getAttribute("titulo")},set:function(t){this.setAttribute("titulo",t)}},{key:"icono",get:function(){return this.getAttribute("icono")},set:function(t){this.setAttribute("icono",t)}},{key:"id",get:function(){return this.getAttribute("id")},set:function(t){this.setAttribute("id",t)}},{key:"attributeChangedCallback",value:function(t,n,e){switch(t){case"titulo":this.actualizarTitulo(n,e);break;case"icono":this.actualizarIcono(n,e)}}},{key:"actualizarTitulo",value:function(t,n){t!=n&&(this.shadowRoot.querySelector(".boton_text").innerHTML=n)}},{key:"actualizarIcono",value:function(t,n){t!=n&&(this.shadowRoot.querySelector(".material-icons").innerHTML=n)}}])&&n(l.prototype,s),f&&n(l,f),d}(i(HTMLElement));window.customElements.define("cpc-boton",l)})();
//# sourceMappingURL=main.bundle.js.map