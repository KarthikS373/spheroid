"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/split2";
exports.ids = ["vendor-chunks/split2"];
exports.modules = {

/***/ "(ssr)/../../../node_modules/split2/index.js":
/*!*********************************************!*\
  !*** ../../../node_modules/split2/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\nCopyright (c) 2014-2021, Matteo Collina <hello@matteocollina.com>\n\nPermission to use, copy, modify, and/or distribute this software for any\npurpose with or without fee is hereby granted, provided that the above\ncopyright notice and this permission notice appear in all copies.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES\nWITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF\nMERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR\nANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES\nWHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN\nACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR\nIN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.\n*/\n\n\n\nconst { Transform } = __webpack_require__(/*! stream */ \"stream\")\nconst { StringDecoder } = __webpack_require__(/*! string_decoder */ \"string_decoder\")\nconst kLast = Symbol('last')\nconst kDecoder = Symbol('decoder')\n\nfunction transform (chunk, enc, cb) {\n  let list\n  if (this.overflow) { // Line buffer is full. Skip to start of next line.\n    const buf = this[kDecoder].write(chunk)\n    list = buf.split(this.matcher)\n\n    if (list.length === 1) return cb() // Line ending not found. Discard entire chunk.\n\n    // Line ending found. Discard trailing fragment of previous line and reset overflow state.\n    list.shift()\n    this.overflow = false\n  } else {\n    this[kLast] += this[kDecoder].write(chunk)\n    list = this[kLast].split(this.matcher)\n  }\n\n  this[kLast] = list.pop()\n\n  for (let i = 0; i < list.length; i++) {\n    try {\n      push(this, this.mapper(list[i]))\n    } catch (error) {\n      return cb(error)\n    }\n  }\n\n  this.overflow = this[kLast].length > this.maxLength\n  if (this.overflow && !this.skipOverflow) {\n    cb(new Error('maximum buffer reached'))\n    return\n  }\n\n  cb()\n}\n\nfunction flush (cb) {\n  // forward any gibberish left in there\n  this[kLast] += this[kDecoder].end()\n\n  if (this[kLast]) {\n    try {\n      push(this, this.mapper(this[kLast]))\n    } catch (error) {\n      return cb(error)\n    }\n  }\n\n  cb()\n}\n\nfunction push (self, val) {\n  if (val !== undefined) {\n    self.push(val)\n  }\n}\n\nfunction noop (incoming) {\n  return incoming\n}\n\nfunction split (matcher, mapper, options) {\n  // Set defaults for any arguments not supplied.\n  matcher = matcher || /\\r?\\n/\n  mapper = mapper || noop\n  options = options || {}\n\n  // Test arguments explicitly.\n  switch (arguments.length) {\n    case 1:\n      // If mapper is only argument.\n      if (typeof matcher === 'function') {\n        mapper = matcher\n        matcher = /\\r?\\n/\n      // If options is only argument.\n      } else if (typeof matcher === 'object' && !(matcher instanceof RegExp) && !matcher[Symbol.split]) {\n        options = matcher\n        matcher = /\\r?\\n/\n      }\n      break\n\n    case 2:\n      // If mapper and options are arguments.\n      if (typeof matcher === 'function') {\n        options = mapper\n        mapper = matcher\n        matcher = /\\r?\\n/\n      // If matcher and options are arguments.\n      } else if (typeof mapper === 'object') {\n        options = mapper\n        mapper = noop\n      }\n  }\n\n  options = Object.assign({}, options)\n  options.autoDestroy = true\n  options.transform = transform\n  options.flush = flush\n  options.readableObjectMode = true\n\n  const stream = new Transform(options)\n\n  stream[kLast] = ''\n  stream[kDecoder] = new StringDecoder('utf8')\n  stream.matcher = matcher\n  stream.mapper = mapper\n  stream.maxLength = options.maxLength\n  stream.skipOverflow = options.skipOverflow || false\n  stream.overflow = false\n  stream._destroy = function (err, cb) {\n    // Weird Node v12 bug that we need to work around\n    this._writableState.errorEmitted = false\n    cb(err)\n  }\n\n  return stream\n}\n\nmodule.exports = split\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3NwbGl0Mi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVZOztBQUVaLFFBQVEsWUFBWSxFQUFFLG1CQUFPLENBQUMsc0JBQVE7QUFDdEMsUUFBUSxnQkFBZ0IsRUFBRSxtQkFBTyxDQUFDLHNDQUFnQjtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BzcGhlcm9pZC9jbGllbnQvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3NwbGl0Mi9pbmRleC5qcz9iYzljIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5Db3B5cmlnaHQgKGMpIDIwMTQtMjAyMSwgTWF0dGVvIENvbGxpbmEgPGhlbGxvQG1hdHRlb2NvbGxpbmEuY29tPlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbmNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTXG5XSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GXG5NRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUlxuQU5ZIFNQRUNJQUwsIERJUkVDVCwgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFU1xuV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTSBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOXG5BQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1IgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUlxuSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbiovXG5cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IFRyYW5zZm9ybSB9ID0gcmVxdWlyZSgnc3RyZWFtJylcbmNvbnN0IHsgU3RyaW5nRGVjb2RlciB9ID0gcmVxdWlyZSgnc3RyaW5nX2RlY29kZXInKVxuY29uc3Qga0xhc3QgPSBTeW1ib2woJ2xhc3QnKVxuY29uc3Qga0RlY29kZXIgPSBTeW1ib2woJ2RlY29kZXInKVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0gKGNodW5rLCBlbmMsIGNiKSB7XG4gIGxldCBsaXN0XG4gIGlmICh0aGlzLm92ZXJmbG93KSB7IC8vIExpbmUgYnVmZmVyIGlzIGZ1bGwuIFNraXAgdG8gc3RhcnQgb2YgbmV4dCBsaW5lLlxuICAgIGNvbnN0IGJ1ZiA9IHRoaXNba0RlY29kZXJdLndyaXRlKGNodW5rKVxuICAgIGxpc3QgPSBidWYuc3BsaXQodGhpcy5tYXRjaGVyKVxuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSByZXR1cm4gY2IoKSAvLyBMaW5lIGVuZGluZyBub3QgZm91bmQuIERpc2NhcmQgZW50aXJlIGNodW5rLlxuXG4gICAgLy8gTGluZSBlbmRpbmcgZm91bmQuIERpc2NhcmQgdHJhaWxpbmcgZnJhZ21lbnQgb2YgcHJldmlvdXMgbGluZSBhbmQgcmVzZXQgb3ZlcmZsb3cgc3RhdGUuXG4gICAgbGlzdC5zaGlmdCgpXG4gICAgdGhpcy5vdmVyZmxvdyA9IGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgdGhpc1trTGFzdF0gKz0gdGhpc1trRGVjb2Rlcl0ud3JpdGUoY2h1bmspXG4gICAgbGlzdCA9IHRoaXNba0xhc3RdLnNwbGl0KHRoaXMubWF0Y2hlcilcbiAgfVxuXG4gIHRoaXNba0xhc3RdID0gbGlzdC5wb3AoKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHRyeSB7XG4gICAgICBwdXNoKHRoaXMsIHRoaXMubWFwcGVyKGxpc3RbaV0pKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gY2IoZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgdGhpcy5vdmVyZmxvdyA9IHRoaXNba0xhc3RdLmxlbmd0aCA+IHRoaXMubWF4TGVuZ3RoXG4gIGlmICh0aGlzLm92ZXJmbG93ICYmICF0aGlzLnNraXBPdmVyZmxvdykge1xuICAgIGNiKG5ldyBFcnJvcignbWF4aW11bSBidWZmZXIgcmVhY2hlZCcpKVxuICAgIHJldHVyblxuICB9XG5cbiAgY2IoKVxufVxuXG5mdW5jdGlvbiBmbHVzaCAoY2IpIHtcbiAgLy8gZm9yd2FyZCBhbnkgZ2liYmVyaXNoIGxlZnQgaW4gdGhlcmVcbiAgdGhpc1trTGFzdF0gKz0gdGhpc1trRGVjb2Rlcl0uZW5kKClcblxuICBpZiAodGhpc1trTGFzdF0pIHtcbiAgICB0cnkge1xuICAgICAgcHVzaCh0aGlzLCB0aGlzLm1hcHBlcih0aGlzW2tMYXN0XSkpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBjYihlcnJvcilcbiAgICB9XG4gIH1cblxuICBjYigpXG59XG5cbmZ1bmN0aW9uIHB1c2ggKHNlbGYsIHZhbCkge1xuICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICBzZWxmLnB1c2godmFsKVxuICB9XG59XG5cbmZ1bmN0aW9uIG5vb3AgKGluY29taW5nKSB7XG4gIHJldHVybiBpbmNvbWluZ1xufVxuXG5mdW5jdGlvbiBzcGxpdCAobWF0Y2hlciwgbWFwcGVyLCBvcHRpb25zKSB7XG4gIC8vIFNldCBkZWZhdWx0cyBmb3IgYW55IGFyZ3VtZW50cyBub3Qgc3VwcGxpZWQuXG4gIG1hdGNoZXIgPSBtYXRjaGVyIHx8IC9cXHI/XFxuL1xuICBtYXBwZXIgPSBtYXBwZXIgfHwgbm9vcFxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIC8vIFRlc3QgYXJndW1lbnRzIGV4cGxpY2l0bHkuXG4gIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNhc2UgMTpcbiAgICAgIC8vIElmIG1hcHBlciBpcyBvbmx5IGFyZ3VtZW50LlxuICAgICAgaWYgKHR5cGVvZiBtYXRjaGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG1hcHBlciA9IG1hdGNoZXJcbiAgICAgICAgbWF0Y2hlciA9IC9cXHI/XFxuL1xuICAgICAgLy8gSWYgb3B0aW9ucyBpcyBvbmx5IGFyZ3VtZW50LlxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbWF0Y2hlciA9PT0gJ29iamVjdCcgJiYgIShtYXRjaGVyIGluc3RhbmNlb2YgUmVnRXhwKSAmJiAhbWF0Y2hlcltTeW1ib2wuc3BsaXRdKSB7XG4gICAgICAgIG9wdGlvbnMgPSBtYXRjaGVyXG4gICAgICAgIG1hdGNoZXIgPSAvXFxyP1xcbi9cbiAgICAgIH1cbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIDI6XG4gICAgICAvLyBJZiBtYXBwZXIgYW5kIG9wdGlvbnMgYXJlIGFyZ3VtZW50cy5cbiAgICAgIGlmICh0eXBlb2YgbWF0Y2hlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvcHRpb25zID0gbWFwcGVyXG4gICAgICAgIG1hcHBlciA9IG1hdGNoZXJcbiAgICAgICAgbWF0Y2hlciA9IC9cXHI/XFxuL1xuICAgICAgLy8gSWYgbWF0Y2hlciBhbmQgb3B0aW9ucyBhcmUgYXJndW1lbnRzLlxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbWFwcGVyID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvcHRpb25zID0gbWFwcGVyXG4gICAgICAgIG1hcHBlciA9IG5vb3BcbiAgICAgIH1cbiAgfVxuXG4gIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKVxuICBvcHRpb25zLmF1dG9EZXN0cm95ID0gdHJ1ZVxuICBvcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuICBvcHRpb25zLmZsdXNoID0gZmx1c2hcbiAgb3B0aW9ucy5yZWFkYWJsZU9iamVjdE1vZGUgPSB0cnVlXG5cbiAgY29uc3Qgc3RyZWFtID0gbmV3IFRyYW5zZm9ybShvcHRpb25zKVxuXG4gIHN0cmVhbVtrTGFzdF0gPSAnJ1xuICBzdHJlYW1ba0RlY29kZXJdID0gbmV3IFN0cmluZ0RlY29kZXIoJ3V0ZjgnKVxuICBzdHJlYW0ubWF0Y2hlciA9IG1hdGNoZXJcbiAgc3RyZWFtLm1hcHBlciA9IG1hcHBlclxuICBzdHJlYW0ubWF4TGVuZ3RoID0gb3B0aW9ucy5tYXhMZW5ndGhcbiAgc3RyZWFtLnNraXBPdmVyZmxvdyA9IG9wdGlvbnMuc2tpcE92ZXJmbG93IHx8IGZhbHNlXG4gIHN0cmVhbS5vdmVyZmxvdyA9IGZhbHNlXG4gIHN0cmVhbS5fZGVzdHJveSA9IGZ1bmN0aW9uIChlcnIsIGNiKSB7XG4gICAgLy8gV2VpcmQgTm9kZSB2MTIgYnVnIHRoYXQgd2UgbmVlZCB0byB3b3JrIGFyb3VuZFxuICAgIHRoaXMuX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkID0gZmFsc2VcbiAgICBjYihlcnIpXG4gIH1cblxuICByZXR1cm4gc3RyZWFtXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3BsaXRcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../../node_modules/split2/index.js\n");

/***/ })

};
;