var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=a||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,v=function(){return c.Date.now()};function g(t,e,n){var o,r,i,f,a,u,c=0,l=!1,g=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,i=r;return o=r=void 0,c=e,f=t.apply(i,n)}function h(t){return c=t,a=setTimeout(w,e),l?y(t):f}function j(t){var n=t-u;return void 0===u||n>=e||n<0||g&&t-c>=i}function w(){var t=v();if(j(t))return O(t);a=setTimeout(w,function(t){var n=e-(t-u);return g?d(n,i-(t-c)):n}(t))}function O(t){return a=void 0,b&&o?y(t):(o=r=void 0,f)}function T(){var t=v(),n=j(t);if(o=arguments,r=this,u=t,n){if(void 0===a)return h(u);if(g)return a=setTimeout(w,e),y(u)}return void 0===a&&(a=setTimeout(w,e)),f}return e=p(e)||0,m(n)&&(l=!!n.leading,i=(g="maxWait"in n)?s(p(n.maxWait)||0,e):i,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},T.flush=function(){return void 0===a?f:O(v())},T}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function p(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var a=r.test(t);return a||i.test(t)?f(t.slice(2),a?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(t,e,{leading:o,maxWait:e,trailing:r})};const b=document.querySelector(".feedback-form");let y=function(){try{const t=localStorage.getItem("feedback-form-state");return t?JSON.parse(t):{}}catch(t){console.log(t.message)}}();b.addEventListener("input",e((function(t){y[t.target.name]=t.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500));for(let t in y)b.elements[t].value=y[t];b.addEventListener("submit",(function(t){t.preventDefault(),console.log(y),y={},localStorage.removeItem("feedback-form-state"),t.target.reset()}));
//# sourceMappingURL=03-feedback.320d2ce4.js.map