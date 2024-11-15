"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-sidecar@1.1.2_@types+react@18.3.12_react@19.0.0-rc-66855b96-20241106";
exports.ids = ["vendor-chunks/use-sidecar@1.1.2_@types+react@18.3.12_react@19.0.0-rc-66855b96-20241106"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.3.12_react@19.0.0-rc-66855b96-20241106/node_modules/use-sidecar/dist/es2015/medium.js":
/*!********************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.3.12_react@19.0.0-rc-66855b96-20241106/node_modules/use-sidecar/dist/es2015/medium.js ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMedium: () => (/* binding */ createMedium),\n/* harmony export */   createSidecarMedium: () => (/* binding */ createSidecarMedium)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"(ssr)/../../node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs\");\n\nfunction ItoI(a) {\n    return a;\n}\nfunction innerCreateMedium(defaults, middleware) {\n    if (middleware === void 0) { middleware = ItoI; }\n    var buffer = [];\n    var assigned = false;\n    var medium = {\n        read: function () {\n            if (assigned) {\n                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');\n            }\n            if (buffer.length) {\n                return buffer[buffer.length - 1];\n            }\n            return defaults;\n        },\n        useMedium: function (data) {\n            var item = middleware(data, assigned);\n            buffer.push(item);\n            return function () {\n                buffer = buffer.filter(function (x) { return x !== item; });\n            };\n        },\n        assignSyncMedium: function (cb) {\n            assigned = true;\n            while (buffer.length) {\n                var cbs = buffer;\n                buffer = [];\n                cbs.forEach(cb);\n            }\n            buffer = {\n                push: function (x) { return cb(x); },\n                filter: function () { return buffer; },\n            };\n        },\n        assignMedium: function (cb) {\n            assigned = true;\n            var pendingQueue = [];\n            if (buffer.length) {\n                var cbs = buffer;\n                buffer = [];\n                cbs.forEach(cb);\n                pendingQueue = buffer;\n            }\n            var executeQueue = function () {\n                var cbs = pendingQueue;\n                pendingQueue = [];\n                cbs.forEach(cb);\n            };\n            var cycle = function () { return Promise.resolve().then(executeQueue); };\n            cycle();\n            buffer = {\n                push: function (x) {\n                    pendingQueue.push(x);\n                    cycle();\n                },\n                filter: function (filter) {\n                    pendingQueue = pendingQueue.filter(filter);\n                    return buffer;\n                },\n            };\n        },\n    };\n    return medium;\n}\nfunction createMedium(defaults, middleware) {\n    if (middleware === void 0) { middleware = ItoI; }\n    return innerCreateMedium(defaults, middleware);\n}\n// eslint-disable-next-line @typescript-eslint/ban-types\nfunction createSidecarMedium(options) {\n    if (options === void 0) { options = {}; }\n    var medium = innerCreateMedium(null);\n    medium.options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ async: true, ssr: false }, options);\n    return medium;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3VzZS1zaWRlY2FyQDEuMS4yX0B0eXBlcytyZWFjdEAxOC4zLjEyX3JlYWN0QDE5LjAuMC1yYy02Njg1NWI5Ni0yMDI0MTEwNi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczIwMTUvbWVkaXVtLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELG9CQUFvQjtBQUMxRTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGVBQWU7QUFDcEQsc0NBQXNDLGdCQUFnQjtBQUN0RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCO0FBQ0EscUJBQXFCLCtDQUFRLEdBQUcseUJBQXlCO0FBQ3pEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3BoZXJvaWQvY2xpZW50Ly4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS91c2Utc2lkZWNhckAxLjEuMl9AdHlwZXMrcmVhY3RAMTguMy4xMl9yZWFjdEAxOS4wLjAtcmMtNjY4NTViOTYtMjAyNDExMDYvbm9kZV9tb2R1bGVzL3VzZS1zaWRlY2FyL2Rpc3QvZXMyMDE1L21lZGl1bS5qcz9jNDA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5mdW5jdGlvbiBJdG9JKGEpIHtcbiAgICByZXR1cm4gYTtcbn1cbmZ1bmN0aW9uIGlubmVyQ3JlYXRlTWVkaXVtKGRlZmF1bHRzLCBtaWRkbGV3YXJlKSB7XG4gICAgaWYgKG1pZGRsZXdhcmUgPT09IHZvaWQgMCkgeyBtaWRkbGV3YXJlID0gSXRvSTsgfVxuICAgIHZhciBidWZmZXIgPSBbXTtcbiAgICB2YXIgYXNzaWduZWQgPSBmYWxzZTtcbiAgICB2YXIgbWVkaXVtID0ge1xuICAgICAgICByZWFkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoYXNzaWduZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NpZGVjYXI6IGNvdWxkIG5vdCBgcmVhZGAgZnJvbSBhbiBgYXNzaWduZWRgIG1lZGl1bS4gYHJlYWRgIGNvdWxkIGJlIHVzZWQgb25seSB3aXRoIGB1c2VNZWRpdW1gLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyW2J1ZmZlci5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICAgICAgfSxcbiAgICAgICAgdXNlTWVkaXVtOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBtaWRkbGV3YXJlKGRhdGEsIGFzc2lnbmVkKTtcbiAgICAgICAgICAgIGJ1ZmZlci5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBidWZmZXIgPSBidWZmZXIuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4ICE9PSBpdGVtOyB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGFzc2lnblN5bmNNZWRpdW06IGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgICAgYXNzaWduZWQgPSB0cnVlO1xuICAgICAgICAgICAgd2hpbGUgKGJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2JzID0gYnVmZmVyO1xuICAgICAgICAgICAgICAgIGJ1ZmZlciA9IFtdO1xuICAgICAgICAgICAgICAgIGNicy5mb3JFYWNoKGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1ZmZlciA9IHtcbiAgICAgICAgICAgICAgICBwdXNoOiBmdW5jdGlvbiAoeCkgeyByZXR1cm4gY2IoeCk7IH0sXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBidWZmZXI7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBhc3NpZ25NZWRpdW06IGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgICAgYXNzaWduZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIHBlbmRpbmdRdWV1ZSA9IFtdO1xuICAgICAgICAgICAgaWYgKGJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2JzID0gYnVmZmVyO1xuICAgICAgICAgICAgICAgIGJ1ZmZlciA9IFtdO1xuICAgICAgICAgICAgICAgIGNicy5mb3JFYWNoKGNiKTtcbiAgICAgICAgICAgICAgICBwZW5kaW5nUXVldWUgPSBidWZmZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZXhlY3V0ZVF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBjYnMgPSBwZW5kaW5nUXVldWU7XG4gICAgICAgICAgICAgICAgcGVuZGluZ1F1ZXVlID0gW107XG4gICAgICAgICAgICAgICAgY2JzLmZvckVhY2goY2IpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBjeWNsZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZXhlY3V0ZVF1ZXVlKTsgfTtcbiAgICAgICAgICAgIGN5Y2xlKCk7XG4gICAgICAgICAgICBidWZmZXIgPSB7XG4gICAgICAgICAgICAgICAgcHVzaDogZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ1F1ZXVlLnB1c2goeCk7XG4gICAgICAgICAgICAgICAgICAgIGN5Y2xlKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uIChmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ1F1ZXVlID0gcGVuZGluZ1F1ZXVlLmZpbHRlcihmaWx0ZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIG1lZGl1bTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZWRpdW0oZGVmYXVsdHMsIG1pZGRsZXdhcmUpIHtcbiAgICBpZiAobWlkZGxld2FyZSA9PT0gdm9pZCAwKSB7IG1pZGRsZXdhcmUgPSBJdG9JOyB9XG4gICAgcmV0dXJuIGlubmVyQ3JlYXRlTWVkaXVtKGRlZmF1bHRzLCBtaWRkbGV3YXJlKTtcbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2lkZWNhck1lZGl1bShvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgbWVkaXVtID0gaW5uZXJDcmVhdGVNZWRpdW0obnVsbCk7XG4gICAgbWVkaXVtLm9wdGlvbnMgPSBfX2Fzc2lnbih7IGFzeW5jOiB0cnVlLCBzc3I6IGZhbHNlIH0sIG9wdGlvbnMpO1xuICAgIHJldHVybiBtZWRpdW07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.3.12_react@19.0.0-rc-66855b96-20241106/node_modules/use-sidecar/dist/es2015/medium.js\n");

/***/ })

};
;