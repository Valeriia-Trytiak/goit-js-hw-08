!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,v=c||s||Function("return this")(),d=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return v.Date.now()};function y(e,t,n){var r,o,a,u,f,l,c=0,s=!1,v=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,f=setTimeout(h,t),s?y(e):u}function T(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function h(){var e=p();if(T(e))return O(e);f=setTimeout(h,function(e){var n=t-(e-l);return v?g(n,a-(e-c)):n}(e))}function O(e){return f=void 0,d&&r?y(e):(r=o=void 0,u)}function w(){var e=p(),n=T(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(v)return f=setTimeout(h,t),y(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(v="maxWait"in n)?m(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?u:O(p())},w}function b(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=u.test(e);return i||f.test(e)?l(e.slice(2),i?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var j=document.querySelector("form"),T=document.querySelector("input"),h=document.querySelector("textarea");!function(){var e=JSON.parse(localStorage.getItem("feedback-form-state"));if(0===localStorage.length)return;T.value=e.email,h.value=e.message}(),j.addEventListener("input",n((function(){if(""!==T.value&&""!==h.value){var e={email:T.value,message:h.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}}),500)),j.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,r=t.message;if(""!==n.value&&""!==r.value){var i={email:n.value,message:r.value};console.log(i)}e.currentTarget.reset(),localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.df784a71.js.map
