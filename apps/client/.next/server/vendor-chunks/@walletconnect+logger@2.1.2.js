"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@walletconnect+logger@2.1.2";
exports.ids = ["vendor-chunks/@walletconnect+logger@2.1.2"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/@walletconnect+logger@2.1.2/node_modules/@walletconnect/logger/dist/index.es.js":
/*!****************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@walletconnect+logger@2.1.2/node_modules/@walletconnect/logger/dist/index.es.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MAX_LOG_SIZE_IN_BYTES_DEFAULT: () => (/* binding */ l),\n/* harmony export */   PINO_CUSTOM_CONTEXT_KEY: () => (/* binding */ n),\n/* harmony export */   PINO_LOGGER_DEFAULTS: () => (/* binding */ c),\n/* harmony export */   formatChildLoggerContext: () => (/* binding */ w),\n/* harmony export */   generateChildLogger: () => (/* binding */ E),\n/* harmony export */   generateClientLogger: () => (/* binding */ C),\n/* harmony export */   generatePlatformLogger: () => (/* binding */ A),\n/* harmony export */   generateServerLogger: () => (/* binding */ I),\n/* harmony export */   getBrowserLoggerContext: () => (/* binding */ v),\n/* harmony export */   getDefaultLoggerOptions: () => (/* binding */ k),\n/* harmony export */   getLoggerContext: () => (/* binding */ y),\n/* harmony export */   pino: () => (/* reexport default from dynamic */ pino__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   setBrowserLoggerContext: () => (/* binding */ b)\n/* harmony export */ });\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pino */ \"(ssr)/../../node_modules/.pnpm/pino@7.11.0/node_modules/pino/pino.js\");\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pino__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @walletconnect/safe-json */ \"(ssr)/../../node_modules/.pnpm/@walletconnect+safe-json@1.0.2/node_modules/@walletconnect/safe-json/dist/esm/index.js\");\nconst c={level:\"info\"},n=\"custom_context\",l=1e3*1024;class O{constructor(e){this.nodeValue=e,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}class d{constructor(e){this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=e,this.sizeInBytes=0}append(e){const t=new O(e);if(t.size>this.maxSizeInBytes)throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);for(;this.size+t.size>this.maxSizeInBytes;)this.shift();this.head?(this.tail&&(this.tail.next=t),this.tail=t):(this.head=t,this.tail=t),this.lengthInNodes++,this.sizeInBytes+=t.size}shift(){if(!this.head)return;const e=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=e.size}toArray(){const e=[];let t=this.head;for(;t!==null;)e.push(t.value),t=t.next;return e}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let e=this.head;return{next:()=>{if(!e)return{done:!0,value:null};const t=e.value;return e=e.next,{done:!1,value:t}}}}}class L{constructor(e,t=l){this.level=e??\"error\",this.levelValue=pino__WEBPACK_IMPORTED_MODULE_0__.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=t,this.logs=new d(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(e,t){t===pino__WEBPACK_IMPORTED_MODULE_0__.levels.values.error?console.error(e):t===pino__WEBPACK_IMPORTED_MODULE_0__.levels.values.warn?console.warn(e):t===pino__WEBPACK_IMPORTED_MODULE_0__.levels.values.debug?console.debug(e):t===pino__WEBPACK_IMPORTED_MODULE_0__.levels.values.trace?console.trace(e):console.log(e)}appendToLogs(e){this.logs.append((0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__.safeJsonStringify)({timestamp:new Date().toISOString(),log:e}));const t=typeof e==\"string\"?JSON.parse(e).level:e.level;t>=this.levelValue&&this.forwardToConsole(e,t)}getLogs(){return this.logs}clearLogs(){this.logs=new d(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(e){const t=this.getLogArray();return t.push((0,_walletconnect_safe_json__WEBPACK_IMPORTED_MODULE_1__.safeJsonStringify)({extraMetadata:e})),new Blob(t,{type:\"application/json\"})}}class m{constructor(e,t=l){this.baseChunkLogger=new L(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}downloadLogsBlobInBrowser(e){const t=URL.createObjectURL(this.logsToBlob(e)),o=document.createElement(\"a\");o.href=t,o.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(t)}}class B{constructor(e,t=l){this.baseChunkLogger=new L(e,t)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}}var x=Object.defineProperty,S=Object.defineProperties,_=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,f=(r,e,t)=>e in r?x(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,i=(r,e)=>{for(var t in e||(e={}))T.call(e,t)&&f(r,t,e[t]);if(p)for(var t of p(e))z.call(e,t)&&f(r,t,e[t]);return r},g=(r,e)=>S(r,_(e));function k(r){return g(i({},r),{level:r?.level||c.level})}function v(r,e=n){return r[e]||\"\"}function b(r,e,t=n){return r[t]=e,r}function y(r,e=n){let t=\"\";return typeof r.bindings>\"u\"?t=v(r,e):t=r.bindings().context||\"\",t}function w(r,e,t=n){const o=y(r,t);return o.trim()?`${o}/${e}`:e}function E(r,e,t=n){const o=w(r,e,t),a=r.child({context:o});return b(a,o,t)}function C(r){var e,t;const o=new m((e=r.opts)==null?void 0:e.level,r.maxSizeInBytes);return{logger:pino__WEBPACK_IMPORTED_MODULE_0___default()(g(i({},r.opts),{level:\"trace\",browser:g(i({},(t=r.opts)==null?void 0:t.browser),{write:a=>o.write(a)})})),chunkLoggerController:o}}function I(r){var e;const t=new B((e=r.opts)==null?void 0:e.level,r.maxSizeInBytes);return{logger:pino__WEBPACK_IMPORTED_MODULE_0___default()(g(i({},r.opts),{level:\"trace\"}),t),chunkLoggerController:t}}function A(r){return typeof r.loggerOverride<\"u\"&&typeof r.loggerOverride!=\"string\"?{logger:r.loggerOverride,chunkLoggerController:null}:typeof window<\"u\"?C(r):I(r)}\n//# sourceMappingURL=index.es.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0B3YWxsZXRjb25uZWN0K2xvZ2dlckAyLjEuMi9ub2RlX21vZHVsZXMvQHdhbGxldGNvbm5lY3QvbG9nZ2VyL2Rpc3QvaW5kZXguZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2SCxTQUFTLGFBQWEsK0JBQStCLFFBQVEsZUFBZSxpR0FBaUcsWUFBWSxzQkFBc0IsV0FBVyx5QkFBeUIsUUFBUSxlQUFlLDRGQUE0RixVQUFVLGlCQUFpQixpR0FBaUcsR0FBRyxZQUFZLE9BQU8sR0FBRyxLQUFLLHFDQUFxQyxjQUFjLDhIQUE4SCxRQUFRLHFCQUFxQixrQkFBa0IsbUdBQW1HLFVBQVUsV0FBVyxnQkFBZ0IsS0FBSyxTQUFTLDBCQUEwQixTQUFTLGFBQWEsMEJBQTBCLFdBQVcsd0JBQXdCLGlCQUFpQix3QkFBd0Isb0JBQW9CLGdCQUFnQixPQUFPLFVBQVUsYUFBYSxvQkFBb0IsZ0JBQWdCLGlCQUFpQixvQkFBb0IsUUFBUSxtQkFBbUIsc0NBQXNDLHdDQUFDLDZGQUE2RixzQkFBc0IsSUFBSSx3Q0FBQyxtQ0FBbUMsd0NBQUMsaUNBQWlDLHdDQUFDLG1DQUFtQyx3Q0FBQyw4Q0FBOEMsZ0JBQWdCLGlCQUFpQiwyRUFBQyxFQUFFLHlDQUF5QyxHQUFHLHVEQUF1RCwrQ0FBK0MsVUFBVSxpQkFBaUIsWUFBWSw0Q0FBNEMsY0FBYyw2QkFBNkIsY0FBYywyQkFBMkIsY0FBYywyRUFBQyxFQUFFLGdCQUFnQixlQUFlLHdCQUF3QixHQUFHLFFBQVEsbUJBQW1CLGdDQUFnQyxTQUFTLHFDQUFxQyxVQUFVLHNDQUFzQyxZQUFZLGlDQUFpQyxjQUFjLDBDQUEwQyxjQUFjLDBDQUEwQyw2QkFBNkIsOEVBQThFLDBDQUEwQyx5QkFBeUIsa0dBQWtHLFFBQVEsbUJBQW1CLGdDQUFnQyxTQUFTLHFDQUFxQyxVQUFVLHNDQUFzQyxZQUFZLGlDQUFpQyxjQUFjLDBDQUEwQyxjQUFjLDJDQUEyQywyTkFBMk4sa0RBQWtELG1CQUFtQixxQkFBcUIsMkJBQTJCLGdEQUFnRCxTQUFTLG9CQUFvQixjQUFjLGFBQWEsS0FBSyx3QkFBd0IsRUFBRSxrQkFBa0IsZ0JBQWdCLG9CQUFvQixnQkFBZ0Isa0JBQWtCLFNBQVMsbUVBQW1FLG9CQUFvQixlQUFlLG1CQUFtQixFQUFFLEdBQUcsRUFBRSxJQUFJLG9CQUFvQiw0QkFBNEIsVUFBVSxFQUFFLGdCQUFnQixjQUFjLFFBQVEsZ0VBQWdFLE9BQU8sT0FBTywyQ0FBQyxPQUFPLFVBQVUsNEJBQTRCLHFDQUFxQyxvQkFBb0IsRUFBRSw0QkFBNEIsY0FBYyxNQUFNLGdFQUFnRSxPQUFPLE9BQU8sMkNBQUMsT0FBTyxVQUFVLGNBQWMsOEJBQThCLGNBQWMsdUVBQXVFLG1EQUFtRCw2QkFBNlg7QUFDamlKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHNwaGVyb2lkL2NsaWVudC8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQHdhbGxldGNvbm5lY3QrbG9nZ2VyQDIuMS4yL25vZGVfbW9kdWxlcy9Ad2FsbGV0Y29ubmVjdC9sb2dnZXIvZGlzdC9pbmRleC5lcy5qcz80ZGZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoLHtsZXZlbHMgYXMgc31mcm9tXCJwaW5vXCI7aW1wb3J0e2RlZmF1bHQgYXMgVX1mcm9tXCJwaW5vXCI7aW1wb3J0e3NhZmVKc29uU3RyaW5naWZ5IGFzIHV9ZnJvbVwiQHdhbGxldGNvbm5lY3Qvc2FmZS1qc29uXCI7Y29uc3QgYz17bGV2ZWw6XCJpbmZvXCJ9LG49XCJjdXN0b21fY29udGV4dFwiLGw9MWUzKjEwMjQ7Y2xhc3MgT3tjb25zdHJ1Y3RvcihlKXt0aGlzLm5vZGVWYWx1ZT1lLHRoaXMuc2l6ZUluQnl0ZXM9bmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHRoaXMubm9kZVZhbHVlKS5sZW5ndGgsdGhpcy5uZXh0PW51bGx9Z2V0IHZhbHVlKCl7cmV0dXJuIHRoaXMubm9kZVZhbHVlfWdldCBzaXplKCl7cmV0dXJuIHRoaXMuc2l6ZUluQnl0ZXN9fWNsYXNzIGR7Y29uc3RydWN0b3IoZSl7dGhpcy5oZWFkPW51bGwsdGhpcy50YWlsPW51bGwsdGhpcy5sZW5ndGhJbk5vZGVzPTAsdGhpcy5tYXhTaXplSW5CeXRlcz1lLHRoaXMuc2l6ZUluQnl0ZXM9MH1hcHBlbmQoZSl7Y29uc3QgdD1uZXcgTyhlKTtpZih0LnNpemU+dGhpcy5tYXhTaXplSW5CeXRlcyl0aHJvdyBuZXcgRXJyb3IoYFtMaW5rZWRMaXN0XSBWYWx1ZSB0b28gYmlnIHRvIGluc2VydCBpbnRvIGxpc3Q6ICR7ZX0gd2l0aCBzaXplICR7dC5zaXplfWApO2Zvcig7dGhpcy5zaXplK3Quc2l6ZT50aGlzLm1heFNpemVJbkJ5dGVzOyl0aGlzLnNoaWZ0KCk7dGhpcy5oZWFkPyh0aGlzLnRhaWwmJih0aGlzLnRhaWwubmV4dD10KSx0aGlzLnRhaWw9dCk6KHRoaXMuaGVhZD10LHRoaXMudGFpbD10KSx0aGlzLmxlbmd0aEluTm9kZXMrKyx0aGlzLnNpemVJbkJ5dGVzKz10LnNpemV9c2hpZnQoKXtpZighdGhpcy5oZWFkKXJldHVybjtjb25zdCBlPXRoaXMuaGVhZDt0aGlzLmhlYWQ9dGhpcy5oZWFkLm5leHQsdGhpcy5oZWFkfHwodGhpcy50YWlsPW51bGwpLHRoaXMubGVuZ3RoSW5Ob2Rlcy0tLHRoaXMuc2l6ZUluQnl0ZXMtPWUuc2l6ZX10b0FycmF5KCl7Y29uc3QgZT1bXTtsZXQgdD10aGlzLmhlYWQ7Zm9yKDt0IT09bnVsbDspZS5wdXNoKHQudmFsdWUpLHQ9dC5uZXh0O3JldHVybiBlfWdldCBsZW5ndGgoKXtyZXR1cm4gdGhpcy5sZW5ndGhJbk5vZGVzfWdldCBzaXplKCl7cmV0dXJuIHRoaXMuc2l6ZUluQnl0ZXN9dG9PcmRlcmVkQXJyYXkoKXtyZXR1cm4gQXJyYXkuZnJvbSh0aGlzKX1bU3ltYm9sLml0ZXJhdG9yXSgpe2xldCBlPXRoaXMuaGVhZDtyZXR1cm57bmV4dDooKT0+e2lmKCFlKXJldHVybntkb25lOiEwLHZhbHVlOm51bGx9O2NvbnN0IHQ9ZS52YWx1ZTtyZXR1cm4gZT1lLm5leHQse2RvbmU6ITEsdmFsdWU6dH19fX19Y2xhc3MgTHtjb25zdHJ1Y3RvcihlLHQ9bCl7dGhpcy5sZXZlbD1lPz9cImVycm9yXCIsdGhpcy5sZXZlbFZhbHVlPXMudmFsdWVzW3RoaXMubGV2ZWxdLHRoaXMuTUFYX0xPR19TSVpFX0lOX0JZVEVTPXQsdGhpcy5sb2dzPW5ldyBkKHRoaXMuTUFYX0xPR19TSVpFX0lOX0JZVEVTKX1mb3J3YXJkVG9Db25zb2xlKGUsdCl7dD09PXMudmFsdWVzLmVycm9yP2NvbnNvbGUuZXJyb3IoZSk6dD09PXMudmFsdWVzLndhcm4/Y29uc29sZS53YXJuKGUpOnQ9PT1zLnZhbHVlcy5kZWJ1Zz9jb25zb2xlLmRlYnVnKGUpOnQ9PT1zLnZhbHVlcy50cmFjZT9jb25zb2xlLnRyYWNlKGUpOmNvbnNvbGUubG9nKGUpfWFwcGVuZFRvTG9ncyhlKXt0aGlzLmxvZ3MuYXBwZW5kKHUoe3RpbWVzdGFtcDpuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksbG9nOmV9KSk7Y29uc3QgdD10eXBlb2YgZT09XCJzdHJpbmdcIj9KU09OLnBhcnNlKGUpLmxldmVsOmUubGV2ZWw7dD49dGhpcy5sZXZlbFZhbHVlJiZ0aGlzLmZvcndhcmRUb0NvbnNvbGUoZSx0KX1nZXRMb2dzKCl7cmV0dXJuIHRoaXMubG9nc31jbGVhckxvZ3MoKXt0aGlzLmxvZ3M9bmV3IGQodGhpcy5NQVhfTE9HX1NJWkVfSU5fQllURVMpfWdldExvZ0FycmF5KCl7cmV0dXJuIEFycmF5LmZyb20odGhpcy5sb2dzKX1sb2dzVG9CbG9iKGUpe2NvbnN0IHQ9dGhpcy5nZXRMb2dBcnJheSgpO3JldHVybiB0LnB1c2godSh7ZXh0cmFNZXRhZGF0YTplfSkpLG5ldyBCbG9iKHQse3R5cGU6XCJhcHBsaWNhdGlvbi9qc29uXCJ9KX19Y2xhc3MgbXtjb25zdHJ1Y3RvcihlLHQ9bCl7dGhpcy5iYXNlQ2h1bmtMb2dnZXI9bmV3IEwoZSx0KX13cml0ZShlKXt0aGlzLmJhc2VDaHVua0xvZ2dlci5hcHBlbmRUb0xvZ3MoZSl9Z2V0TG9ncygpe3JldHVybiB0aGlzLmJhc2VDaHVua0xvZ2dlci5nZXRMb2dzKCl9Y2xlYXJMb2dzKCl7dGhpcy5iYXNlQ2h1bmtMb2dnZXIuY2xlYXJMb2dzKCl9Z2V0TG9nQXJyYXkoKXtyZXR1cm4gdGhpcy5iYXNlQ2h1bmtMb2dnZXIuZ2V0TG9nQXJyYXkoKX1sb2dzVG9CbG9iKGUpe3JldHVybiB0aGlzLmJhc2VDaHVua0xvZ2dlci5sb2dzVG9CbG9iKGUpfWRvd25sb2FkTG9nc0Jsb2JJbkJyb3dzZXIoZSl7Y29uc3QgdD1VUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMubG9nc1RvQmxvYihlKSksbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtvLmhyZWY9dCxvLmRvd25sb2FkPWB3YWxsZXRjb25uZWN0LWxvZ3MtJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9LnR4dGAsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvKSxvLmNsaWNrKCksZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvKSxVUkwucmV2b2tlT2JqZWN0VVJMKHQpfX1jbGFzcyBCe2NvbnN0cnVjdG9yKGUsdD1sKXt0aGlzLmJhc2VDaHVua0xvZ2dlcj1uZXcgTChlLHQpfXdyaXRlKGUpe3RoaXMuYmFzZUNodW5rTG9nZ2VyLmFwcGVuZFRvTG9ncyhlKX1nZXRMb2dzKCl7cmV0dXJuIHRoaXMuYmFzZUNodW5rTG9nZ2VyLmdldExvZ3MoKX1jbGVhckxvZ3MoKXt0aGlzLmJhc2VDaHVua0xvZ2dlci5jbGVhckxvZ3MoKX1nZXRMb2dBcnJheSgpe3JldHVybiB0aGlzLmJhc2VDaHVua0xvZ2dlci5nZXRMb2dBcnJheSgpfWxvZ3NUb0Jsb2IoZSl7cmV0dXJuIHRoaXMuYmFzZUNodW5rTG9nZ2VyLmxvZ3NUb0Jsb2IoZSl9fXZhciB4PU9iamVjdC5kZWZpbmVQcm9wZXJ0eSxTPU9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLF89T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMscD1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFQ9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSx6PU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUsZj0ocixlLHQpPT5lIGluIHI/eChyLGUse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnR9KTpyW2VdPXQsaT0ocixlKT0+e2Zvcih2YXIgdCBpbiBlfHwoZT17fSkpVC5jYWxsKGUsdCkmJmYocix0LGVbdF0pO2lmKHApZm9yKHZhciB0IG9mIHAoZSkpei5jYWxsKGUsdCkmJmYocix0LGVbdF0pO3JldHVybiByfSxnPShyLGUpPT5TKHIsXyhlKSk7ZnVuY3Rpb24gayhyKXtyZXR1cm4gZyhpKHt9LHIpLHtsZXZlbDpyPy5sZXZlbHx8Yy5sZXZlbH0pfWZ1bmN0aW9uIHYocixlPW4pe3JldHVybiByW2VdfHxcIlwifWZ1bmN0aW9uIGIocixlLHQ9bil7cmV0dXJuIHJbdF09ZSxyfWZ1bmN0aW9uIHkocixlPW4pe2xldCB0PVwiXCI7cmV0dXJuIHR5cGVvZiByLmJpbmRpbmdzPlwidVwiP3Q9dihyLGUpOnQ9ci5iaW5kaW5ncygpLmNvbnRleHR8fFwiXCIsdH1mdW5jdGlvbiB3KHIsZSx0PW4pe2NvbnN0IG89eShyLHQpO3JldHVybiBvLnRyaW0oKT9gJHtvfS8ke2V9YDplfWZ1bmN0aW9uIEUocixlLHQ9bil7Y29uc3Qgbz13KHIsZSx0KSxhPXIuY2hpbGQoe2NvbnRleHQ6b30pO3JldHVybiBiKGEsbyx0KX1mdW5jdGlvbiBDKHIpe3ZhciBlLHQ7Y29uc3Qgbz1uZXcgbSgoZT1yLm9wdHMpPT1udWxsP3ZvaWQgMDplLmxldmVsLHIubWF4U2l6ZUluQnl0ZXMpO3JldHVybntsb2dnZXI6aChnKGkoe30sci5vcHRzKSx7bGV2ZWw6XCJ0cmFjZVwiLGJyb3dzZXI6ZyhpKHt9LCh0PXIub3B0cyk9PW51bGw/dm9pZCAwOnQuYnJvd3Nlcikse3dyaXRlOmE9Pm8ud3JpdGUoYSl9KX0pKSxjaHVua0xvZ2dlckNvbnRyb2xsZXI6b319ZnVuY3Rpb24gSShyKXt2YXIgZTtjb25zdCB0PW5ldyBCKChlPXIub3B0cyk9PW51bGw/dm9pZCAwOmUubGV2ZWwsci5tYXhTaXplSW5CeXRlcyk7cmV0dXJue2xvZ2dlcjpoKGcoaSh7fSxyLm9wdHMpLHtsZXZlbDpcInRyYWNlXCJ9KSx0KSxjaHVua0xvZ2dlckNvbnRyb2xsZXI6dH19ZnVuY3Rpb24gQShyKXtyZXR1cm4gdHlwZW9mIHIubG9nZ2VyT3ZlcnJpZGU8XCJ1XCImJnR5cGVvZiByLmxvZ2dlck92ZXJyaWRlIT1cInN0cmluZ1wiP3tsb2dnZXI6ci5sb2dnZXJPdmVycmlkZSxjaHVua0xvZ2dlckNvbnRyb2xsZXI6bnVsbH06dHlwZW9mIHdpbmRvdzxcInVcIj9DKHIpOkkocil9ZXhwb3J0e2wgYXMgTUFYX0xPR19TSVpFX0lOX0JZVEVTX0RFRkFVTFQsbiBhcyBQSU5PX0NVU1RPTV9DT05URVhUX0tFWSxjIGFzIFBJTk9fTE9HR0VSX0RFRkFVTFRTLHcgYXMgZm9ybWF0Q2hpbGRMb2dnZXJDb250ZXh0LEUgYXMgZ2VuZXJhdGVDaGlsZExvZ2dlcixDIGFzIGdlbmVyYXRlQ2xpZW50TG9nZ2VyLEEgYXMgZ2VuZXJhdGVQbGF0Zm9ybUxvZ2dlcixJIGFzIGdlbmVyYXRlU2VydmVyTG9nZ2VyLHYgYXMgZ2V0QnJvd3NlckxvZ2dlckNvbnRleHQsayBhcyBnZXREZWZhdWx0TG9nZ2VyT3B0aW9ucyx5IGFzIGdldExvZ2dlckNvbnRleHQsVSBhcyBwaW5vLGIgYXMgc2V0QnJvd3NlckxvZ2dlckNvbnRleHR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXMuanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@walletconnect+logger@2.1.2/node_modules/@walletconnect/logger/dist/index.es.js\n");

/***/ })

};
;