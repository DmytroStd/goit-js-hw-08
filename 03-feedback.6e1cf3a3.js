!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=c||d||Function("return this")(),s=Object.prototype.toString,m=Math.max,p=Math.min,y=function(){return v.Date.now()};function b(e,t,n){var r,o,a,u,f,l,c=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,f=setTimeout(O,t),d?b(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function O(){var e=y();if(S(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return v?p(n,a-(e-c)):n}(e))}function h(e){return f=void 0,s&&r?b(e):(r=o=void 0,u)}function w(){var e=y(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(v)return f=setTimeout(O,t),b(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=x(t)||0,g(n)&&(d=!!n.leading,a=(v="maxWait"in n)?m(x(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?u:h(y())},w}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function x(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var j={form:document.querySelector(".feedback-form"),email:document.querySelector('input[name="email"]'),textarea:document.querySelector('textarea[name="message"]')},S=j.email,O=j.form,h=j.textarea,w="feedback-form-state";O.addEventListener("input",e(t)((function(e){localStorage.setItem(w,JSON.stringify({email:S.value,textarea:h.value}))}),500));var T=JSON.parse(localStorage.getItem(w));if(T){var N=T.email,E=void 0===N?"":N,I=T.textarea,M=void 0===I?"":I;S.value=E,h.value=M}O.addEventListener("submit",(function(e){e.preventDefault(),j.email.value&&j.textarea.value?(console.log({email:S.value,textarea:h.value}),j.form.reset(),localStorage.removeItem(w)):alert("заполните форму полностью")}))}();
//# sourceMappingURL=03-feedback.6e1cf3a3.js.map