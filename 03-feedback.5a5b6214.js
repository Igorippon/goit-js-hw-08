var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var r,i,o,a,f,u,c=0,l=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function h(e){return c=e,f=setTimeout(w,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-c>=o}function w(){var e=m();if(j(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-u);return g?d(n,o-(e-c)):n}(e))}function O(e){return f=void 0,b&&r?y(e):(r=i=void 0,a)}function T(){var e=m(),n=j(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return h(u);if(g)return f=setTimeout(w,t),y(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=p(t)||0,v(n)&&(l=!!n.leading,o=(g="maxWait"in n)?s(p(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=i=f=void 0},T.flush=function(){return void 0===f?a:O(m())},T}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||o.test(e)?a(e.slice(2),f?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form");let y={};b.addEventListener("input",t((function(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),y=function(){try{const e=localStorage.getItem("feedback-form-state");return e?JSON.parse(e):{}}catch(e){console.log(e.message)}}();for(let e in y)b.elements[e].value=y[e];b.addEventListener("submit",(function(e){e.preventDefault();const{email:t,message:n}=e.target.elements,r=t.value.trim(),i=n.value.trim();y=function(e,t){return{email:e,message:t}}(r,i),console.log(y),localStorage.removeItem("feedback-form-state"),e.target.reset()}));
//# sourceMappingURL=03-feedback.5a5b6214.js.map
