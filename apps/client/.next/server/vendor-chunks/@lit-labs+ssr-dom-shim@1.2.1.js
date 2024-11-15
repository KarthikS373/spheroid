"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@lit-labs+ssr-dom-shim@1.2.1";
exports.ids = ["vendor-chunks/@lit-labs+ssr-dom-shim@1.2.1"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/@lit-labs+ssr-dom-shim@1.2.1/node_modules/@lit-labs/ssr-dom-shim/index.js":
/*!**********************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@lit-labs+ssr-dom-shim@1.2.1/node_modules/@lit-labs/ssr-dom-shim/index.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CustomElementRegistry: () => (/* binding */ CustomElementRegistryShimWithRealType),\n/* harmony export */   Element: () => (/* binding */ ElementShimWithRealType),\n/* harmony export */   ElementInternals: () => (/* reexport safe */ _lib_element_internals_js__WEBPACK_IMPORTED_MODULE_0__.ElementInternals),\n/* harmony export */   HTMLElement: () => (/* binding */ HTMLElementShimWithRealType),\n/* harmony export */   HYDRATE_INTERNALS_ATTR_PREFIX: () => (/* reexport safe */ _lib_element_internals_js__WEBPACK_IMPORTED_MODULE_0__.HYDRATE_INTERNALS_ATTR_PREFIX),\n/* harmony export */   ariaMixinAttributes: () => (/* reexport safe */ _lib_element_internals_js__WEBPACK_IMPORTED_MODULE_0__.ariaMixinAttributes),\n/* harmony export */   customElements: () => (/* binding */ customElements)\n/* harmony export */ });\n/* harmony import */ var _lib_element_internals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/element-internals.js */ \"(ssr)/../../node_modules/.pnpm/@lit-labs+ssr-dom-shim@1.2.1/node_modules/@lit-labs/ssr-dom-shim/lib/element-internals.js\");\n/**\n * @license\n * Copyright 2019 Google LLC\n * SPDX-License-Identifier: BSD-3-Clause\n */\n\n\nconst attributes = new WeakMap();\nconst attributesForElement = (element) => {\n    let attrs = attributes.get(element);\n    if (attrs === undefined) {\n        attributes.set(element, (attrs = new Map()));\n    }\n    return attrs;\n};\n// The typings around the exports below are a little funky:\n//\n// 1. We want the `name` of the shim classes to match the real ones at runtime,\n//    hence e.g. `class Element`.\n// 2. We can't shadow the global types with a simple class declaration, because\n//    then we can't reference the global types for casting, hence e.g.\n//    `const ElementShim = class Element`.\n// 3. We want to export the classes typed as the real ones, hence e.g.\n//    `const ElementShimWithRealType = ElementShim as object as typeof Element;`.\n// 4. We want the exported names to match the real ones, hence e.g.\n//    `export {ElementShimWithRealType as Element}`.\nconst ElementShim = class Element {\n    constructor() {\n        this.__shadowRootMode = null;\n        this.__shadowRoot = null;\n        this.__internals = null;\n    }\n    get attributes() {\n        return Array.from(attributesForElement(this)).map(([name, value]) => ({\n            name,\n            value,\n        }));\n    }\n    get shadowRoot() {\n        if (this.__shadowRootMode === 'closed') {\n            return null;\n        }\n        return this.__shadowRoot;\n    }\n    get localName() {\n        return this.constructor.__localName;\n    }\n    get tagName() {\n        return this.localName?.toUpperCase();\n    }\n    setAttribute(name, value) {\n        // Emulate browser behavior that silently casts all values to string. E.g.\n        // `42` becomes `\"42\"` and `{}` becomes `\"[object Object]\"\"`.\n        attributesForElement(this).set(name, String(value));\n    }\n    removeAttribute(name) {\n        attributesForElement(this).delete(name);\n    }\n    toggleAttribute(name, force) {\n        // Steps reference https://dom.spec.whatwg.org/#dom-element-toggleattribute\n        if (this.hasAttribute(name)) {\n            // Step 5\n            if (force === undefined || !force) {\n                this.removeAttribute(name);\n                return false;\n            }\n        }\n        else {\n            // Step 4\n            if (force === undefined || force) {\n                // Step 4.1\n                this.setAttribute(name, '');\n                return true;\n            }\n            else {\n                // Step 4.2\n                return false;\n            }\n        }\n        // Step 6\n        return true;\n    }\n    hasAttribute(name) {\n        return attributesForElement(this).has(name);\n    }\n    attachShadow(init) {\n        const shadowRoot = { host: this };\n        this.__shadowRootMode = init.mode;\n        if (init && init.mode === 'open') {\n            this.__shadowRoot = shadowRoot;\n        }\n        return shadowRoot;\n    }\n    attachInternals() {\n        if (this.__internals !== null) {\n            throw new Error(`Failed to execute 'attachInternals' on 'HTMLElement': ` +\n                `ElementInternals for the specified element was already attached.`);\n        }\n        const internals = new _lib_element_internals_js__WEBPACK_IMPORTED_MODULE_0__.ElementInternalsShim(this);\n        this.__internals = internals;\n        return internals;\n    }\n    getAttribute(name) {\n        const value = attributesForElement(this).get(name);\n        return value ?? null;\n    }\n};\nconst ElementShimWithRealType = ElementShim;\n\nconst HTMLElementShim = class HTMLElement extends ElementShim {\n};\nconst HTMLElementShimWithRealType = HTMLElementShim;\n\nconst CustomElementRegistryShim = class CustomElementRegistry {\n    constructor() {\n        this.__definitions = new Map();\n    }\n    define(name, ctor) {\n        if (this.__definitions.has(name)) {\n            if (true) {\n                console.warn(`'CustomElementRegistry' already has \"${name}\" defined. ` +\n                    `This may have been caused by live reload or hot module ` +\n                    `replacement in which case it can be safely ignored.\\n` +\n                    `Make sure to test your application with a production build as ` +\n                    `repeat registrations will throw in production.`);\n            }\n            else {}\n        }\n        // Provide tagName and localName for the component.\n        ctor.__localName = name;\n        this.__definitions.set(name, {\n            ctor,\n            // Note it's important we read `observedAttributes` in case it is a getter\n            // with side-effects, as is the case in Lit, where it triggers class\n            // finalization.\n            //\n            // TODO(aomarks) To be spec compliant, we should also capture the\n            // registration-time lifecycle methods like `connectedCallback`. For them\n            // to be actually accessible to e.g. the Lit SSR element renderer, though,\n            // we'd need to introduce a new API for accessing them (since `get` only\n            // returns the constructor).\n            observedAttributes: ctor.observedAttributes ?? [],\n        });\n    }\n    get(name) {\n        const definition = this.__definitions.get(name);\n        return definition?.ctor;\n    }\n};\nconst CustomElementRegistryShimWithRealType = CustomElementRegistryShim;\n\nconst customElements = new CustomElementRegistryShimWithRealType();\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BsaXQtbGFicytzc3ItZG9tLXNoaW1AMS4yLjEvbm9kZV9tb2R1bGVzL0BsaXQtbGFicy9zc3ItZG9tLXNoaW0vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tFO0FBQ2lEO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDJFQUFvQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ3NEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFzQztBQUN0RCxxRUFBcUUsS0FBSztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEVBR0o7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEU7QUFDbkU7QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL0BzcGhlcm9pZC9jbGllbnQvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BsaXQtbGFicytzc3ItZG9tLXNoaW1AMS4yLjEvbm9kZV9tb2R1bGVzL0BsaXQtbGFicy9zc3ItZG9tLXNoaW0vaW5kZXguanM/YTExMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmltcG9ydCB7IEVsZW1lbnRJbnRlcm5hbHNTaGltIH0gZnJvbSAnLi9saWIvZWxlbWVudC1pbnRlcm5hbHMuanMnO1xuZXhwb3J0IHsgYXJpYU1peGluQXR0cmlidXRlcywgRWxlbWVudEludGVybmFscywgSFlEUkFURV9JTlRFUk5BTFNfQVRUUl9QUkVGSVgsIH0gZnJvbSAnLi9saWIvZWxlbWVudC1pbnRlcm5hbHMuanMnO1xuY29uc3QgYXR0cmlidXRlcyA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBhdHRyaWJ1dGVzRm9yRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gICAgbGV0IGF0dHJzID0gYXR0cmlidXRlcy5nZXQoZWxlbWVudCk7XG4gICAgaWYgKGF0dHJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYXR0cmlidXRlcy5zZXQoZWxlbWVudCwgKGF0dHJzID0gbmV3IE1hcCgpKSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbn07XG4vLyBUaGUgdHlwaW5ncyBhcm91bmQgdGhlIGV4cG9ydHMgYmVsb3cgYXJlIGEgbGl0dGxlIGZ1bmt5OlxuLy9cbi8vIDEuIFdlIHdhbnQgdGhlIGBuYW1lYCBvZiB0aGUgc2hpbSBjbGFzc2VzIHRvIG1hdGNoIHRoZSByZWFsIG9uZXMgYXQgcnVudGltZSxcbi8vICAgIGhlbmNlIGUuZy4gYGNsYXNzIEVsZW1lbnRgLlxuLy8gMi4gV2UgY2FuJ3Qgc2hhZG93IHRoZSBnbG9iYWwgdHlwZXMgd2l0aCBhIHNpbXBsZSBjbGFzcyBkZWNsYXJhdGlvbiwgYmVjYXVzZVxuLy8gICAgdGhlbiB3ZSBjYW4ndCByZWZlcmVuY2UgdGhlIGdsb2JhbCB0eXBlcyBmb3IgY2FzdGluZywgaGVuY2UgZS5nLlxuLy8gICAgYGNvbnN0IEVsZW1lbnRTaGltID0gY2xhc3MgRWxlbWVudGAuXG4vLyAzLiBXZSB3YW50IHRvIGV4cG9ydCB0aGUgY2xhc3NlcyB0eXBlZCBhcyB0aGUgcmVhbCBvbmVzLCBoZW5jZSBlLmcuXG4vLyAgICBgY29uc3QgRWxlbWVudFNoaW1XaXRoUmVhbFR5cGUgPSBFbGVtZW50U2hpbSBhcyBvYmplY3QgYXMgdHlwZW9mIEVsZW1lbnQ7YC5cbi8vIDQuIFdlIHdhbnQgdGhlIGV4cG9ydGVkIG5hbWVzIHRvIG1hdGNoIHRoZSByZWFsIG9uZXMsIGhlbmNlIGUuZy5cbi8vICAgIGBleHBvcnQge0VsZW1lbnRTaGltV2l0aFJlYWxUeXBlIGFzIEVsZW1lbnR9YC5cbmNvbnN0IEVsZW1lbnRTaGltID0gY2xhc3MgRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX19zaGFkb3dSb290TW9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX19zaGFkb3dSb290ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fX2ludGVybmFscyA9IG51bGw7XG4gICAgfVxuICAgIGdldCBhdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhdHRyaWJ1dGVzRm9yRWxlbWVudCh0aGlzKSkubWFwKChbbmFtZSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGdldCBzaGFkb3dSb290KCkge1xuICAgICAgICBpZiAodGhpcy5fX3NoYWRvd1Jvb3RNb2RlID09PSAnY2xvc2VkJykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX19zaGFkb3dSb290O1xuICAgIH1cbiAgICBnZXQgbG9jYWxOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5fX2xvY2FsTmFtZTtcbiAgICB9XG4gICAgZ2V0IHRhZ05hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsTmFtZT8udG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIC8vIEVtdWxhdGUgYnJvd3NlciBiZWhhdmlvciB0aGF0IHNpbGVudGx5IGNhc3RzIGFsbCB2YWx1ZXMgdG8gc3RyaW5nLiBFLmcuXG4gICAgICAgIC8vIGA0MmAgYmVjb21lcyBgXCI0MlwiYCBhbmQgYHt9YCBiZWNvbWVzIGBcIltvYmplY3QgT2JqZWN0XVwiXCJgLlxuICAgICAgICBhdHRyaWJ1dGVzRm9yRWxlbWVudCh0aGlzKS5zZXQobmFtZSwgU3RyaW5nKHZhbHVlKSk7XG4gICAgfVxuICAgIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7XG4gICAgICAgIGF0dHJpYnV0ZXNGb3JFbGVtZW50KHRoaXMpLmRlbGV0ZShuYW1lKTtcbiAgICB9XG4gICAgdG9nZ2xlQXR0cmlidXRlKG5hbWUsIGZvcmNlKSB7XG4gICAgICAgIC8vIFN0ZXBzIHJlZmVyZW5jZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1lbGVtZW50LXRvZ2dsZWF0dHJpYnV0ZVxuICAgICAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUobmFtZSkpIHtcbiAgICAgICAgICAgIC8vIFN0ZXAgNVxuICAgICAgICAgICAgaWYgKGZvcmNlID09PSB1bmRlZmluZWQgfHwgIWZvcmNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gU3RlcCA0XG4gICAgICAgICAgICBpZiAoZm9yY2UgPT09IHVuZGVmaW5lZCB8fCBmb3JjZSkge1xuICAgICAgICAgICAgICAgIC8vIFN0ZXAgNC4xXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgJycpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gU3RlcCA0LjJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3RlcCA2XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBoYXNBdHRyaWJ1dGUobmFtZSkge1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlc0ZvckVsZW1lbnQodGhpcykuaGFzKG5hbWUpO1xuICAgIH1cbiAgICBhdHRhY2hTaGFkb3coaW5pdCkge1xuICAgICAgICBjb25zdCBzaGFkb3dSb290ID0geyBob3N0OiB0aGlzIH07XG4gICAgICAgIHRoaXMuX19zaGFkb3dSb290TW9kZSA9IGluaXQubW9kZTtcbiAgICAgICAgaWYgKGluaXQgJiYgaW5pdC5tb2RlID09PSAnb3BlbicpIHtcbiAgICAgICAgICAgIHRoaXMuX19zaGFkb3dSb290ID0gc2hhZG93Um9vdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hhZG93Um9vdDtcbiAgICB9XG4gICAgYXR0YWNoSW50ZXJuYWxzKCkge1xuICAgICAgICBpZiAodGhpcy5fX2ludGVybmFscyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZXhlY3V0ZSAnYXR0YWNoSW50ZXJuYWxzJyBvbiAnSFRNTEVsZW1lbnQnOiBgICtcbiAgICAgICAgICAgICAgICBgRWxlbWVudEludGVybmFscyBmb3IgdGhlIHNwZWNpZmllZCBlbGVtZW50IHdhcyBhbHJlYWR5IGF0dGFjaGVkLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGludGVybmFscyA9IG5ldyBFbGVtZW50SW50ZXJuYWxzU2hpbSh0aGlzKTtcbiAgICAgICAgdGhpcy5fX2ludGVybmFscyA9IGludGVybmFscztcbiAgICAgICAgcmV0dXJuIGludGVybmFscztcbiAgICB9XG4gICAgZ2V0QXR0cmlidXRlKG5hbWUpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyaWJ1dGVzRm9yRWxlbWVudCh0aGlzKS5nZXQobmFtZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZSA/PyBudWxsO1xuICAgIH1cbn07XG5jb25zdCBFbGVtZW50U2hpbVdpdGhSZWFsVHlwZSA9IEVsZW1lbnRTaGltO1xuZXhwb3J0IHsgRWxlbWVudFNoaW1XaXRoUmVhbFR5cGUgYXMgRWxlbWVudCB9O1xuY29uc3QgSFRNTEVsZW1lbnRTaGltID0gY2xhc3MgSFRNTEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50U2hpbSB7XG59O1xuY29uc3QgSFRNTEVsZW1lbnRTaGltV2l0aFJlYWxUeXBlID0gSFRNTEVsZW1lbnRTaGltO1xuZXhwb3J0IHsgSFRNTEVsZW1lbnRTaGltV2l0aFJlYWxUeXBlIGFzIEhUTUxFbGVtZW50IH07XG5jb25zdCBDdXN0b21FbGVtZW50UmVnaXN0cnlTaGltID0gY2xhc3MgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fX2RlZmluaXRpb25zID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBkZWZpbmUobmFtZSwgY3Rvcikge1xuICAgICAgICBpZiAodGhpcy5fX2RlZmluaXRpb25zLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAnQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5JyBhbHJlYWR5IGhhcyBcIiR7bmFtZX1cIiBkZWZpbmVkLiBgICtcbiAgICAgICAgICAgICAgICAgICAgYFRoaXMgbWF5IGhhdmUgYmVlbiBjYXVzZWQgYnkgbGl2ZSByZWxvYWQgb3IgaG90IG1vZHVsZSBgICtcbiAgICAgICAgICAgICAgICAgICAgYHJlcGxhY2VtZW50IGluIHdoaWNoIGNhc2UgaXQgY2FuIGJlIHNhZmVseSBpZ25vcmVkLlxcbmAgK1xuICAgICAgICAgICAgICAgICAgICBgTWFrZSBzdXJlIHRvIHRlc3QgeW91ciBhcHBsaWNhdGlvbiB3aXRoIGEgcHJvZHVjdGlvbiBidWlsZCBhcyBgICtcbiAgICAgICAgICAgICAgICAgICAgYHJlcGVhdCByZWdpc3RyYXRpb25zIHdpbGwgdGhyb3cgaW4gcHJvZHVjdGlvbi5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGV4ZWN1dGUgJ2RlZmluZScgb24gJ0N1c3RvbUVsZW1lbnRSZWdpc3RyeSc6IGAgK1xuICAgICAgICAgICAgICAgICAgICBgdGhlIG5hbWUgXCIke25hbWV9XCIgaGFzIGFscmVhZHkgYmVlbiB1c2VkIHdpdGggdGhpcyByZWdpc3RyeWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFByb3ZpZGUgdGFnTmFtZSBhbmQgbG9jYWxOYW1lIGZvciB0aGUgY29tcG9uZW50LlxuICAgICAgICBjdG9yLl9fbG9jYWxOYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fX2RlZmluaXRpb25zLnNldChuYW1lLCB7XG4gICAgICAgICAgICBjdG9yLFxuICAgICAgICAgICAgLy8gTm90ZSBpdCdzIGltcG9ydGFudCB3ZSByZWFkIGBvYnNlcnZlZEF0dHJpYnV0ZXNgIGluIGNhc2UgaXQgaXMgYSBnZXR0ZXJcbiAgICAgICAgICAgIC8vIHdpdGggc2lkZS1lZmZlY3RzLCBhcyBpcyB0aGUgY2FzZSBpbiBMaXQsIHdoZXJlIGl0IHRyaWdnZXJzIGNsYXNzXG4gICAgICAgICAgICAvLyBmaW5hbGl6YXRpb24uXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gVE9ETyhhb21hcmtzKSBUbyBiZSBzcGVjIGNvbXBsaWFudCwgd2Ugc2hvdWxkIGFsc28gY2FwdHVyZSB0aGVcbiAgICAgICAgICAgIC8vIHJlZ2lzdHJhdGlvbi10aW1lIGxpZmVjeWNsZSBtZXRob2RzIGxpa2UgYGNvbm5lY3RlZENhbGxiYWNrYC4gRm9yIHRoZW1cbiAgICAgICAgICAgIC8vIHRvIGJlIGFjdHVhbGx5IGFjY2Vzc2libGUgdG8gZS5nLiB0aGUgTGl0IFNTUiBlbGVtZW50IHJlbmRlcmVyLCB0aG91Z2gsXG4gICAgICAgICAgICAvLyB3ZSdkIG5lZWQgdG8gaW50cm9kdWNlIGEgbmV3IEFQSSBmb3IgYWNjZXNzaW5nIHRoZW0gKHNpbmNlIGBnZXRgIG9ubHlcbiAgICAgICAgICAgIC8vIHJldHVybnMgdGhlIGNvbnN0cnVjdG9yKS5cbiAgICAgICAgICAgIG9ic2VydmVkQXR0cmlidXRlczogY3Rvci5vYnNlcnZlZEF0dHJpYnV0ZXMgPz8gW10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQobmFtZSkge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5fX2RlZmluaXRpb25zLmdldChuYW1lKTtcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb24/LmN0b3I7XG4gICAgfVxufTtcbmNvbnN0IEN1c3RvbUVsZW1lbnRSZWdpc3RyeVNoaW1XaXRoUmVhbFR5cGUgPSBDdXN0b21FbGVtZW50UmVnaXN0cnlTaGltO1xuZXhwb3J0IHsgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5U2hpbVdpdGhSZWFsVHlwZSBhcyBDdXN0b21FbGVtZW50UmVnaXN0cnkgfTtcbmV4cG9ydCBjb25zdCBjdXN0b21FbGVtZW50cyA9IG5ldyBDdXN0b21FbGVtZW50UmVnaXN0cnlTaGltV2l0aFJlYWxUeXBlKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@lit-labs+ssr-dom-shim@1.2.1/node_modules/@lit-labs/ssr-dom-shim/index.js\n");

/***/ }),

/***/ "(ssr)/../../node_modules/.pnpm/@lit-labs+ssr-dom-shim@1.2.1/node_modules/@lit-labs/ssr-dom-shim/lib/element-internals.js":
/*!**************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@lit-labs+ssr-dom-shim@1.2.1/node_modules/@lit-labs/ssr-dom-shim/lib/element-internals.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ElementInternals: () => (/* binding */ ElementInternalsShimWithRealType),\n/* harmony export */   ElementInternalsShim: () => (/* binding */ ElementInternalsShim),\n/* harmony export */   HYDRATE_INTERNALS_ATTR_PREFIX: () => (/* binding */ HYDRATE_INTERNALS_ATTR_PREFIX),\n/* harmony export */   ariaMixinAttributes: () => (/* binding */ ariaMixinAttributes)\n/* harmony export */ });\n/**\n * @license\n * Copyright 2023 Google LLC\n * SPDX-License-Identifier: BSD-3-Clause\n */\n/**\n * Map of ARIAMixin properties to attributes\n */\nconst ariaMixinAttributes = {\n    ariaAtomic: 'aria-atomic',\n    ariaAutoComplete: 'aria-autocomplete',\n    ariaBrailleLabel: 'aria-braillelabel',\n    ariaBrailleRoleDescription: 'aria-brailleroledescription',\n    ariaBusy: 'aria-busy',\n    ariaChecked: 'aria-checked',\n    ariaColCount: 'aria-colcount',\n    ariaColIndex: 'aria-colindex',\n    ariaColSpan: 'aria-colspan',\n    ariaCurrent: 'aria-current',\n    ariaDescription: 'aria-description',\n    ariaDisabled: 'aria-disabled',\n    ariaExpanded: 'aria-expanded',\n    ariaHasPopup: 'aria-haspopup',\n    ariaHidden: 'aria-hidden',\n    ariaInvalid: 'aria-invalid',\n    ariaKeyShortcuts: 'aria-keyshortcuts',\n    ariaLabel: 'aria-label',\n    ariaLevel: 'aria-level',\n    ariaLive: 'aria-live',\n    ariaModal: 'aria-modal',\n    ariaMultiLine: 'aria-multiline',\n    ariaMultiSelectable: 'aria-multiselectable',\n    ariaOrientation: 'aria-orientation',\n    ariaPlaceholder: 'aria-placeholder',\n    ariaPosInSet: 'aria-posinset',\n    ariaPressed: 'aria-pressed',\n    ariaReadOnly: 'aria-readonly',\n    ariaRequired: 'aria-required',\n    ariaRoleDescription: 'aria-roledescription',\n    ariaRowCount: 'aria-rowcount',\n    ariaRowIndex: 'aria-rowindex',\n    ariaRowSpan: 'aria-rowspan',\n    ariaSelected: 'aria-selected',\n    ariaSetSize: 'aria-setsize',\n    ariaSort: 'aria-sort',\n    ariaValueMax: 'aria-valuemax',\n    ariaValueMin: 'aria-valuemin',\n    ariaValueNow: 'aria-valuenow',\n    ariaValueText: 'aria-valuetext',\n    role: 'role',\n};\n// Shim the global element internals object\n// Methods should be fine as noops and properties can generally\n// be while on the server.\nconst ElementInternalsShim = class ElementInternals {\n    get shadowRoot() {\n        // Grab the shadow root instance from the Element shim\n        // to ensure that the shadow root is always available\n        // to the internals instance even if the mode is 'closed'\n        return this.__host\n            .__shadowRoot;\n    }\n    constructor(_host) {\n        this.ariaAtomic = '';\n        this.ariaAutoComplete = '';\n        this.ariaBrailleLabel = '';\n        this.ariaBrailleRoleDescription = '';\n        this.ariaBusy = '';\n        this.ariaChecked = '';\n        this.ariaColCount = '';\n        this.ariaColIndex = '';\n        this.ariaColSpan = '';\n        this.ariaCurrent = '';\n        this.ariaDescription = '';\n        this.ariaDisabled = '';\n        this.ariaExpanded = '';\n        this.ariaHasPopup = '';\n        this.ariaHidden = '';\n        this.ariaInvalid = '';\n        this.ariaKeyShortcuts = '';\n        this.ariaLabel = '';\n        this.ariaLevel = '';\n        this.ariaLive = '';\n        this.ariaModal = '';\n        this.ariaMultiLine = '';\n        this.ariaMultiSelectable = '';\n        this.ariaOrientation = '';\n        this.ariaPlaceholder = '';\n        this.ariaPosInSet = '';\n        this.ariaPressed = '';\n        this.ariaReadOnly = '';\n        this.ariaRequired = '';\n        this.ariaRoleDescription = '';\n        this.ariaRowCount = '';\n        this.ariaRowIndex = '';\n        this.ariaRowSpan = '';\n        this.ariaSelected = '';\n        this.ariaSetSize = '';\n        this.ariaSort = '';\n        this.ariaValueMax = '';\n        this.ariaValueMin = '';\n        this.ariaValueNow = '';\n        this.ariaValueText = '';\n        this.role = '';\n        this.form = null;\n        this.labels = [];\n        this.states = new Set();\n        this.validationMessage = '';\n        this.validity = {};\n        this.willValidate = true;\n        this.__host = _host;\n    }\n    checkValidity() {\n        // TODO(augustjk) Consider actually implementing logic.\n        // See https://github.com/lit/lit/issues/3740\n        console.warn('`ElementInternals.checkValidity()` was called on the server.' +\n            'This method always returns true.');\n        return true;\n    }\n    reportValidity() {\n        return true;\n    }\n    setFormValue() { }\n    setValidity() { }\n};\nconst ElementInternalsShimWithRealType = ElementInternalsShim;\n\nconst HYDRATE_INTERNALS_ATTR_PREFIX = 'hydrate-internals-';\n//# sourceMappingURL=element-internals.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BsaXQtbGFicytzc3ItZG9tLXNoaW1AMS4yLjEvbm9kZV9tb2R1bGVzL0BsaXQtbGFicy9zc3ItZG9tLXNoaW0vbGliL2VsZW1lbnQtaW50ZXJuYWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0U7QUFDekQ7QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL0BzcGhlcm9pZC9jbGllbnQvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BsaXQtbGFicytzc3ItZG9tLXNoaW1AMS4yLjEvbm9kZV9tb2R1bGVzL0BsaXQtbGFicy9zc3ItZG9tLXNoaW0vbGliL2VsZW1lbnQtaW50ZXJuYWxzLmpzPzNjMWQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjMgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG4vKipcbiAqIE1hcCBvZiBBUklBTWl4aW4gcHJvcGVydGllcyB0byBhdHRyaWJ1dGVzXG4gKi9cbmV4cG9ydCBjb25zdCBhcmlhTWl4aW5BdHRyaWJ1dGVzID0ge1xuICAgIGFyaWFBdG9taWM6ICdhcmlhLWF0b21pYycsXG4gICAgYXJpYUF1dG9Db21wbGV0ZTogJ2FyaWEtYXV0b2NvbXBsZXRlJyxcbiAgICBhcmlhQnJhaWxsZUxhYmVsOiAnYXJpYS1icmFpbGxlbGFiZWwnLFxuICAgIGFyaWFCcmFpbGxlUm9sZURlc2NyaXB0aW9uOiAnYXJpYS1icmFpbGxlcm9sZWRlc2NyaXB0aW9uJyxcbiAgICBhcmlhQnVzeTogJ2FyaWEtYnVzeScsXG4gICAgYXJpYUNoZWNrZWQ6ICdhcmlhLWNoZWNrZWQnLFxuICAgIGFyaWFDb2xDb3VudDogJ2FyaWEtY29sY291bnQnLFxuICAgIGFyaWFDb2xJbmRleDogJ2FyaWEtY29saW5kZXgnLFxuICAgIGFyaWFDb2xTcGFuOiAnYXJpYS1jb2xzcGFuJyxcbiAgICBhcmlhQ3VycmVudDogJ2FyaWEtY3VycmVudCcsXG4gICAgYXJpYURlc2NyaXB0aW9uOiAnYXJpYS1kZXNjcmlwdGlvbicsXG4gICAgYXJpYURpc2FibGVkOiAnYXJpYS1kaXNhYmxlZCcsXG4gICAgYXJpYUV4cGFuZGVkOiAnYXJpYS1leHBhbmRlZCcsXG4gICAgYXJpYUhhc1BvcHVwOiAnYXJpYS1oYXNwb3B1cCcsXG4gICAgYXJpYUhpZGRlbjogJ2FyaWEtaGlkZGVuJyxcbiAgICBhcmlhSW52YWxpZDogJ2FyaWEtaW52YWxpZCcsXG4gICAgYXJpYUtleVNob3J0Y3V0czogJ2FyaWEta2V5c2hvcnRjdXRzJyxcbiAgICBhcmlhTGFiZWw6ICdhcmlhLWxhYmVsJyxcbiAgICBhcmlhTGV2ZWw6ICdhcmlhLWxldmVsJyxcbiAgICBhcmlhTGl2ZTogJ2FyaWEtbGl2ZScsXG4gICAgYXJpYU1vZGFsOiAnYXJpYS1tb2RhbCcsXG4gICAgYXJpYU11bHRpTGluZTogJ2FyaWEtbXVsdGlsaW5lJyxcbiAgICBhcmlhTXVsdGlTZWxlY3RhYmxlOiAnYXJpYS1tdWx0aXNlbGVjdGFibGUnLFxuICAgIGFyaWFPcmllbnRhdGlvbjogJ2FyaWEtb3JpZW50YXRpb24nLFxuICAgIGFyaWFQbGFjZWhvbGRlcjogJ2FyaWEtcGxhY2Vob2xkZXInLFxuICAgIGFyaWFQb3NJblNldDogJ2FyaWEtcG9zaW5zZXQnLFxuICAgIGFyaWFQcmVzc2VkOiAnYXJpYS1wcmVzc2VkJyxcbiAgICBhcmlhUmVhZE9ubHk6ICdhcmlhLXJlYWRvbmx5JyxcbiAgICBhcmlhUmVxdWlyZWQ6ICdhcmlhLXJlcXVpcmVkJyxcbiAgICBhcmlhUm9sZURlc2NyaXB0aW9uOiAnYXJpYS1yb2xlZGVzY3JpcHRpb24nLFxuICAgIGFyaWFSb3dDb3VudDogJ2FyaWEtcm93Y291bnQnLFxuICAgIGFyaWFSb3dJbmRleDogJ2FyaWEtcm93aW5kZXgnLFxuICAgIGFyaWFSb3dTcGFuOiAnYXJpYS1yb3dzcGFuJyxcbiAgICBhcmlhU2VsZWN0ZWQ6ICdhcmlhLXNlbGVjdGVkJyxcbiAgICBhcmlhU2V0U2l6ZTogJ2FyaWEtc2V0c2l6ZScsXG4gICAgYXJpYVNvcnQ6ICdhcmlhLXNvcnQnLFxuICAgIGFyaWFWYWx1ZU1heDogJ2FyaWEtdmFsdWVtYXgnLFxuICAgIGFyaWFWYWx1ZU1pbjogJ2FyaWEtdmFsdWVtaW4nLFxuICAgIGFyaWFWYWx1ZU5vdzogJ2FyaWEtdmFsdWVub3cnLFxuICAgIGFyaWFWYWx1ZVRleHQ6ICdhcmlhLXZhbHVldGV4dCcsXG4gICAgcm9sZTogJ3JvbGUnLFxufTtcbi8vIFNoaW0gdGhlIGdsb2JhbCBlbGVtZW50IGludGVybmFscyBvYmplY3Rcbi8vIE1ldGhvZHMgc2hvdWxkIGJlIGZpbmUgYXMgbm9vcHMgYW5kIHByb3BlcnRpZXMgY2FuIGdlbmVyYWxseVxuLy8gYmUgd2hpbGUgb24gdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBFbGVtZW50SW50ZXJuYWxzU2hpbSA9IGNsYXNzIEVsZW1lbnRJbnRlcm5hbHMge1xuICAgIGdldCBzaGFkb3dSb290KCkge1xuICAgICAgICAvLyBHcmFiIHRoZSBzaGFkb3cgcm9vdCBpbnN0YW5jZSBmcm9tIHRoZSBFbGVtZW50IHNoaW1cbiAgICAgICAgLy8gdG8gZW5zdXJlIHRoYXQgdGhlIHNoYWRvdyByb290IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICAgICAgLy8gdG8gdGhlIGludGVybmFscyBpbnN0YW5jZSBldmVuIGlmIHRoZSBtb2RlIGlzICdjbG9zZWQnXG4gICAgICAgIHJldHVybiB0aGlzLl9faG9zdFxuICAgICAgICAgICAgLl9fc2hhZG93Um9vdDtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoX2hvc3QpIHtcbiAgICAgICAgdGhpcy5hcmlhQXRvbWljID0gJyc7XG4gICAgICAgIHRoaXMuYXJpYUF1dG9Db21wbGV0ZSA9ICcnO1xuICAgICAgICB0aGlzLmFyaWFCcmFpbGxlTGFiZWwgPSAnJztcbiAgICAgICAgdGhpcy5hcmlhQnJhaWxsZVJvbGVEZXNjcmlwdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLmFyaWFCdXN5ID0gJyc7XG4gICAgICAgIHRoaXMuYXJpYUNoZWNrZWQgPSAnJztcbiAgICAgICAgdGhpcy5hcmlhQ29sQ291bnQgPSAnJztcbiAgICAgICAgdGhpcy5hcmlhQ29sSW5kZXggPSAnJztcbiAgICAgICAgdGhpcy5hcmlhQ29sU3BhbiA9ICcnO1xuICAgICAgICB0aGlzLmFyaWFDdXJyZW50ID0gJyc7XG4gICAgICAgIHRoaXMuYXJpYURlc2NyaXB0aW9uID0gJyc7XG4gICAgICAgIHRoaXMuYXJpYURpc2FibGVkID0gJyc7XG4gICAgICAgIHRoaXMuYXJpYUV4cGFuZGVkID0gJyc7XG4gICAgICAgIHRoaXMuYXJpYUhhc1BvcHVwID0gJyc7XG4gICAgICAgIHRoaXMuYXJpYUhpZGRlbiA9ICcnO1xuICAgICAgICB0aGlzLmFyaWFJbnZhbGlkID0gJyc7XG4gICAgICAgIHRoaXMuYXJpYUtleVNob3J0Y3V0cyA9ICcnO1xuICAgICAgICB0aGlzLmFyaWFMYWJlbCA9ICcnO1xuICAgICAgICB0aGlzLmFyaWFMZXZlbCA9ICcnO1xuICAgICAgICB0aGlzLmFyaWFMaXZlID0gJyc7XG4gICAgICAgIHRoaXMuYXJpYU1vZGFsID0gJyc7XG4gICAgICAgIHRoaXMuYXJpYU11bHRpTGluZSA9ICcnO1xuICAgICAgICB0aGlzLmFyaWFNdWx0aVNlbGVjdGFibGUgPSAnJztcbiAgICAgICAgdGhpcy5hcmlhT3JpZW50YXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5hcmlhUGxhY2Vob2xkZXIgPSAnJztcbiAgICAgICAgdGhpcy5hcmlhUG9zSW5TZXQgPSAnJztcbiAgICAgICAgdGhpcy5hcmlhUHJlc3NlZCA9ICcnO1xuICAgICAgICB0aGlzLmFyaWFSZWFkT25seSA9ICcnO1xuICAgICAgICB0aGlzLmFyaWFSZXF1aXJlZCA9ICcnO1xuICAgICAgICB0aGlzLmFyaWFSb2xlRGVzY3JpcHRpb24gPSAnJztcbiAgICAgICAgdGhpcy5hcmlhUm93Q291bnQgPSAnJztcbiAgICAgICAgdGhpcy5hcmlhUm93SW5kZXggPSAnJztcbiAgICAgICAgdGhpcy5hcmlhUm93U3BhbiA9ICcnO1xuICAgICAgICB0aGlzLmFyaWFTZWxlY3RlZCA9ICcnO1xuICAgICAgICB0aGlzLmFyaWFTZXRTaXplID0gJyc7XG4gICAgICAgIHRoaXMuYXJpYVNvcnQgPSAnJztcbiAgICAgICAgdGhpcy5hcmlhVmFsdWVNYXggPSAnJztcbiAgICAgICAgdGhpcy5hcmlhVmFsdWVNaW4gPSAnJztcbiAgICAgICAgdGhpcy5hcmlhVmFsdWVOb3cgPSAnJztcbiAgICAgICAgdGhpcy5hcmlhVmFsdWVUZXh0ID0gJyc7XG4gICAgICAgIHRoaXMucm9sZSA9ICcnO1xuICAgICAgICB0aGlzLmZvcm0gPSBudWxsO1xuICAgICAgICB0aGlzLmxhYmVscyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uTWVzc2FnZSA9ICcnO1xuICAgICAgICB0aGlzLnZhbGlkaXR5ID0ge307XG4gICAgICAgIHRoaXMud2lsbFZhbGlkYXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fX2hvc3QgPSBfaG9zdDtcbiAgICB9XG4gICAgY2hlY2tWYWxpZGl0eSgpIHtcbiAgICAgICAgLy8gVE9ETyhhdWd1c3RqaykgQ29uc2lkZXIgYWN0dWFsbHkgaW1wbGVtZW50aW5nIGxvZ2ljLlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzLzM3NDBcbiAgICAgICAgY29uc29sZS53YXJuKCdgRWxlbWVudEludGVybmFscy5jaGVja1ZhbGlkaXR5KClgIHdhcyBjYWxsZWQgb24gdGhlIHNlcnZlci4nICtcbiAgICAgICAgICAgICdUaGlzIG1ldGhvZCBhbHdheXMgcmV0dXJucyB0cnVlLicpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmVwb3J0VmFsaWRpdHkoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzZXRGb3JtVmFsdWUoKSB7IH1cbiAgICBzZXRWYWxpZGl0eSgpIHsgfVxufTtcbmNvbnN0IEVsZW1lbnRJbnRlcm5hbHNTaGltV2l0aFJlYWxUeXBlID0gRWxlbWVudEludGVybmFsc1NoaW07XG5leHBvcnQgeyBFbGVtZW50SW50ZXJuYWxzU2hpbVdpdGhSZWFsVHlwZSBhcyBFbGVtZW50SW50ZXJuYWxzIH07XG5leHBvcnQgY29uc3QgSFlEUkFURV9JTlRFUk5BTFNfQVRUUl9QUkVGSVggPSAnaHlkcmF0ZS1pbnRlcm5hbHMtJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVsZW1lbnQtaW50ZXJuYWxzLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@lit-labs+ssr-dom-shim@1.2.1/node_modules/@lit-labs/ssr-dom-shim/lib/element-internals.js\n");

/***/ })

};
;