parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||t(e)||n(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,r){if(e){if("string"==typeof e)return l(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,r):void 0}}function t(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return l(e)}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var c=document.querySelector(".field"),i=document.querySelector(".append-row"),d=document.querySelector(".remove-row"),a=document.querySelector(".append-column"),s=document.querySelector(".remove-column");i.addEventListener("click",function(e){var r=c.rows[c.rows.length-1].cloneNode(!0);c.appendChild(r),c.rows.length>=10&&(i.disabled=!0),d.disabled=!1}),d.addEventListener("click",function(e){c.rows[c.rows.length-1].remove(),c.rows.length<=2&&(d.disabled=!0),i.disabled=!1}),a.addEventListener("click",function(r){e(c.rows).forEach(function(e){var r=e.cells[e.cells.length-1].cloneNode(!0);e.appendChild(r),e.cells.length>=10&&(a.disabled=!0),s.disabled=!1})}),s.addEventListener("click",function(r){e(c.rows).forEach(function(e){e.cells[e.cells.length-1].remove(),e.cells.length<=2&&(s.disabled=!0),a.disabled=!1})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.d40fe7e1.js.map