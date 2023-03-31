/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/common.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/common.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/search_button.png */ \"./src/assets/search_button.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box !important;\\n}\\n\\nbody {\\n  font-size: 14px;\\n  background-color: #222222;\\n  color: #fff;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\n#app {\\n  padding-bottom: 48px;\\n}\\n\\n*:focus {\\n  outline: none;\\n}\\n\\nheader {\\n  width: 100%;\\n  height: 72px;\\n  background-color: #222;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 20px;\\n  border-bottom: 1px solid white;\\n  margin-bottom: 48px;\\n}\\n\\nheader h1 {\\n  cursor: pointer;\\n  user-select: none;\\n  font-size: 2rem;\\n  font-weight: bold;\\n  letter-spacing: -0.1rem;\\n  color: #f33f3f;\\n}\\n\\nheader > .search-box {\\n  background: #fff;\\n  padding: 8px;\\n  border-radius: 4px;\\n}\\n\\nheader .search-box > input {\\n  width: 300px;\\n  border: 0;\\n}\\n\\nheader .search-box > .search-button {\\n  width: 14px;\\n  border: 0;\\n  text-indent: -1000rem;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") transparent no-repeat 0 1px;\\n  background-size: contain;\\n}\\n\\n.item-view,\\n.item-test {\\n  width: 100%;\\n}\\n\\n.item-view {\\n  display: flex;\\n  flex-direction: column;\\n  width: min-content;\\n  margin: 0 auto;\\n}\\n\\n.item-view h2 {\\n  margin-left: 24px;\\n  font-size: 2rem;\\n  font-weight: bold;\\n  user-select: none;\\n}\\n\\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\\n\\n.item-list {\\n  display: grid;\\n  margin: 48px 30px;\\n  grid-template-columns: repeat(4, 180px);\\n  grid-column-gap: 36px;\\n  grid-row-gap: 48px;\\n}\\n\\n.skeleton-list {\\n  display: grid;\\n  margin: 0px 30px 48px 30px;\\n  grid-template-columns: repeat(4, 180px);\\n  grid-column-gap: 36px;\\n  grid-row-gap: 48px;\\n}\\n\\n.item-card {\\n  display: flex;\\n  flex-direction: column;\\n  cursor: pointer;\\n}\\n\\n.item-thumbnail {\\n  border-radius: 8px;\\n  width: 180px;\\n  height: 270px;\\n  background-size: contain;\\n}\\n\\n.item-title {\\n  margin-top: 16px;\\n  font-size: 1.2rem;\\n  font-weight: bold;\\n}\\n\\n.item-score {\\n  margin-top: 16px;\\n  font-size: 1.2rem;\\n}\\n\\n.item-score::after {\\n  margin-left: 8px;\\n}\\n\\n.item-title.skeleton::after,\\n.item-score.skeleton::after {\\n  font-size: 0;\\n  content: \\\"loading\\\";\\n}\\n\\n.full-width {\\n  width: 100%;\\n}\\n\\n.last-item {\\n  margin-top: 48px;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.show {\\n  display: block;\\n}\\n\\n.modal-backdrop {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.4);\\n}\\n\\n.modal-container {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  width: 800px;\\n  background-color: #212122;\\n  border-radius: 8px;\\n  box-shadow: 0 2px 3px 0 rgba(35, 35, 35, 0.15);\\n  transform: translateX(-50%) translateY(-50%);\\n}\\n\\n.modal-header {\\n  width: 100%;\\n  height: 64px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-bottom: 1px solid rgba(241, 241, 241, 0.25);\\n}\\n\\n.movie-title {\\n  font-weight: 600;\\n  font-size: 20px;\\n  line-height: 24px;\\n  color: #f1f1f1;\\n}\\n\\n.movie-card {\\n  display: flex;\\n  padding: 20px 30px;\\n  height: 100%;\\n}\\n\\n.movie-detail {\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  width: 100%;\\n  padding: 12px 28px;\\n  color: #f1f1f1;\\n  font-size: 16px;\\n}\\n\\n.movie-description {\\n  height: 180px;\\n  margin-top: 20px;\\n  line-height: 24px;\\n  overflow: scroll;\\n}\\n\\n.movie-description::-webkit-scrollbar {\\n  display: none;\\n}\\n\\n.movie-thumbnail {\\n  width: 220px;\\n  height: 330px;\\n  background-color: #232323;\\n  background-size: contain;\\n  border-radius: 10px;\\n}\\n\\n.movie-rate {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  padding: 14px 10px;\\n  width: 100%;\\n  height: 50px;\\n  background: #383839;\\n  border-radius: 16px;\\n}\\n\\n.movie-rate-title {\\n  margin-right: 30px;\\n}\\n\\n.movie-star-wrap {\\n  margin-right: 30px;\\n}\\n\\n.movie-stars {\\n  cursor: pointer;\\n}\\n\\n.rating {\\n  margin-right: 10px;\\n}\\n\\n.close-button {\\n  position: absolute;\\n  top: 15px;\\n  right: 30px;\\n  width: 36px;\\n  height: 36px;\\n  opacity: 0.8;\\n  border-radius: 18px;\\n  cursor: pointer;\\n  background: #424242;\\n}\\n\\n.close-button:before,\\n.close-button:after {\\n  position: absolute;\\n  left: 16px;\\n  top: 7px;\\n  content: \\\" \\\";\\n  height: 22px;\\n  width: 4px;\\n  background-color: #ffffff;\\n}\\n.close-button:before {\\n  transform: rotate(45deg);\\n}\\n.close-button:after {\\n  transform: rotate(-45deg);\\n}\\n\\nbutton.btn {\\n  border: 0;\\n  border-radius: 8px;\\n  height: 30px;\\n  color: #fff;\\n}\\n\\nbutton.primary {\\n  visibility: hidden;\\n  background: #f33f3f;\\n}\\n\\n.skeleton {\\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\\n  background-size: 400%;\\n  animation: skeleton-animation 5s infinite ease-out;\\n  border-radius: 8px;\\n}\\n\\n@keyframes skeleton-animation {\\n  0% {\\n    background-position: 0% 50%;\\n  }\\n  50% {\\n    background-position: 100% 50%;\\n  }\\n  100% {\\n    background-position: 0% 50%;\\n  }\\n}\\n\\n@media screen and (max-width: 1280px) {\\n  .item-list {\\n    grid-template-columns: repeat(3, 200px);\\n    grid-column-gap: 36px;\\n  }\\n  .skeleton-list {\\n    grid-template-columns: repeat(3, 200px);\\n    grid-column-gap: 36px;\\n  }\\n\\n  .item-thumbnail {\\n    width: 200px;\\n    height: 300px;\\n  }\\n\\n  .modal-container {\\n    width: 700px;\\n  }\\n\\n  .movie-rate {\\n    display: flex;\\n    align-items: center;\\n    justify-content: flex-start;\\n    padding: 14px 10px;\\n    width: 100%;\\n    height: 50px;\\n    background: #383839;\\n    border-radius: 16px;\\n  }\\n\\n  .movie-rate-title {\\n    margin-left: 12px;\\n    margin-right: 20px;\\n  }\\n\\n  .movie-star-wrap {\\n    margin-right: 20px;\\n  }\\n  .rating {\\n    margin-right: 10px;\\n  }\\n}\\n\\n@media screen and (max-width: 768px) {\\n  .item-list {\\n    grid-template-columns: repeat(2, 140px);\\n    grid-column-gap: 28px;\\n  }\\n  .skeleton-list {\\n    grid-template-columns: repeat(2, 140px);\\n    grid-column-gap: 28px;\\n  }\\n\\n  .item-thumbnail {\\n    width: 140px;\\n    height: 210px;\\n  }\\n\\n  header .search-box > input {\\n    width: 140px;\\n    border: 0;\\n  }\\n\\n  .modal-container {\\n    width: 100%;\\n    background-color: #212122;\\n    border-radius: 8px;\\n    box-shadow: 0 2px 3px 0 rgba(35, 35, 35, 0.15);\\n    transform: translateX(-50%) translateY(-50%);\\n  }\\n\\n  .movie-detail {\\n    position: relative;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    padding: 12px 10px;\\n    color: #f1f1f1;\\n    font-size: 16px;\\n  }\\n\\n  .movie-description {\\n    height: 400px;\\n    margin-top: 20px;\\n    line-height: 24px;\\n    overflow: scroll;\\n  }\\n\\n  .movie-description::-webkit-scrollbar {\\n    display: none;\\n  }\\n\\n  .movie-thumbnail {\\n    display: none;\\n  }\\n\\n  .movie-rate {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    padding: 14px 9px;\\n    width: 100%;\\n    height: 50px;\\n    background: #383839;\\n    border-radius: 16px;\\n  }\\n\\n  .rate-question {\\n    display: none;\\n  }\\n\\n  .rate-comment {\\n    display: none;\\n  }\\n\\n  .movie-rate-title {\\n    margin-left: 12px;\\n    margin-right: 20px;\\n  }\\n\\n  .movie-star-wrap {\\n    margin-right: 20px;\\n  }\\n  .rating {\\n    margin-right: 10px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/common.css":
/*!*******************************!*\
  !*** ./src/styles/common.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/common.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/common.css?");

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/reset.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header/index.ts\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Modal */ \"./src/components/Modal/index.ts\");\n/* harmony import */ var _components_MovieList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MovieList */ \"./src/components/MovieList/index.ts\");\n/* harmony import */ var _utils_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/selector */ \"./src/utils/selector.ts\");\nvar __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _App_header, _App_movieList, _App_modal;\n\n\n\n\nclass App {\n    constructor() {\n        _App_header.set(this, void 0);\n        _App_movieList.set(this, void 0);\n        _App_modal.set(this, void 0);\n        const $header = (0,_utils_selector__WEBPACK_IMPORTED_MODULE_3__.$)(\"header\");\n        const $movieList = (0,_utils_selector__WEBPACK_IMPORTED_MODULE_3__.$)(\".item-list\");\n        const $modal = (0,_utils_selector__WEBPACK_IMPORTED_MODULE_3__.$)(\".modal\");\n        __classPrivateFieldSet(this, _App_header, new _components_Header__WEBPACK_IMPORTED_MODULE_0__.Header($header, this.onSubmitSearchKeyword.bind(this), this.onClickLogoImage.bind(this)), \"f\");\n        __classPrivateFieldSet(this, _App_movieList, new _components_MovieList__WEBPACK_IMPORTED_MODULE_2__.MovieList($movieList, this.onClickMovie.bind(this)), \"f\");\n        __classPrivateFieldSet(this, _App_modal, new _components_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal($modal), \"f\");\n    }\n    onSubmitSearchKeyword(serachKeyword) {\n        const subTitle = (0,_utils_selector__WEBPACK_IMPORTED_MODULE_3__.$)(\".sub-title\");\n        subTitle.innerHTML = `\"${serachKeyword}\" 검색 결과`;\n        if (__classPrivateFieldGet(this, _App_movieList, \"f\") instanceof _components_MovieList__WEBPACK_IMPORTED_MODULE_2__.MovieList)\n            __classPrivateFieldGet(this, _App_movieList, \"f\").reset(\"search\", serachKeyword);\n    }\n    onClickLogoImage() {\n        const subTitle = (0,_utils_selector__WEBPACK_IMPORTED_MODULE_3__.$)(\".sub-title\");\n        subTitle.innerHTML = `지금 인기 있는 영화`;\n        if (__classPrivateFieldGet(this, _App_movieList, \"f\") instanceof _components_MovieList__WEBPACK_IMPORTED_MODULE_2__.MovieList)\n            __classPrivateFieldGet(this, _App_movieList, \"f\").reset(\"popular\");\n    }\n    onClickMovie(movieId) {\n        __classPrivateFieldGet(this, _App_modal, \"f\").renderMovieDetail(movieId);\n    }\n}\n_App_header = new WeakMap(), _App_movieList = new WeakMap(), _App_modal = new WeakMap();\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/App.ts?");

/***/ }),

/***/ "./src/components/Header/index.ts":
/*!****************************************!*\
  !*** ./src/components/Header/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _utils_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/selector */ \"./src/utils/selector.ts\");\nvar __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _Header_$target;\n\n\nclass Header {\n    constructor($target, onSubmitSearchKeyword, onClickLogoImage) {\n        _Header_$target.set(this, void 0);\n        __classPrivateFieldSet(this, _Header_$target, $target, \"f\");\n        this.render();\n        const $searchBox = (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\".search-box\");\n        $searchBox.addEventListener(\"submit\", (event) => {\n            event.preventDefault();\n            const $searchInput = (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\".search-input\");\n            if ($searchInput instanceof HTMLInputElement) {\n                const inputValue = $searchInput.value;\n                if (inputValue === \"\") {\n                    alert(\"검색값을 입력해주세요.\");\n                    return;\n                }\n                onSubmitSearchKeyword(inputValue);\n            }\n            if (event.target instanceof HTMLFormElement)\n                event.target.reset();\n        });\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\".logo\").addEventListener(\"click\", onClickLogoImage);\n    }\n    render() {\n        __classPrivateFieldGet(this, _Header_$target, \"f\").innerHTML = `\n        <h1 class=\"logo\"><img src=\"${_assets_logo_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"MovieList 로고\" /></h1>\n        <form class=\"search-box\">\n            <input class=\"search-input\" type=\"text\" placeholder=\"검색\" />\n            <button type=\"submit\" class=\"search-button\">검색</button>\n        </form>\n    `;\n    }\n}\n_Header_$target = new WeakMap();\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Header/index.ts?");

/***/ }),

/***/ "./src/components/Modal/index.ts":
/*!***************************************!*\
  !*** ./src/components/Modal/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.ts\");\n/* harmony import */ var _utils_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/selector */ \"./src/utils/selector.ts\");\n/* harmony import */ var _MovieDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MovieDetail */ \"./src/components/MovieDetail/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _Modal_$target;\n\n\n\nclass Modal {\n    constructor($target) {\n        _Modal_$target.set(this, void 0);\n        __classPrivateFieldSet(this, _Modal_$target, $target, \"f\");\n        this.render();\n    }\n    render() {\n        __classPrivateFieldGet(this, _Modal_$target, \"f\").innerHTML = `<div class=\"modal-backdrop\"></div>\n    <div class=\"modal-container\">\n    <div class=\"modal-contents\"></div>\n      <div class=\"close-button\"></div>\n    </div>`;\n    }\n    renderMovieDetail(movieId) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const movieDetail = yield (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__.fetchMovieDetail)(movieId);\n            const movieDetailMarkup = _MovieDetail__WEBPACK_IMPORTED_MODULE_2__.MovieDetail.render(movieDetail);\n            (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\".modal-contents\").innerHTML = movieDetailMarkup;\n            _MovieDetail__WEBPACK_IMPORTED_MODULE_2__.MovieDetail.onClickStars();\n            __classPrivateFieldGet(this, _Modal_$target, \"f\").classList.remove(\"hidden\");\n            __classPrivateFieldGet(this, _Modal_$target, \"f\").classList.add(\"show\");\n            this.closeModal();\n        });\n    }\n    closeModal() {\n        const hideModal = () => {\n            __classPrivateFieldGet(this, _Modal_$target, \"f\").classList.add(\"hidden\");\n            __classPrivateFieldGet(this, _Modal_$target, \"f\").classList.remove(\"show\");\n        };\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\".modal-backdrop\").addEventListener(\"click\", hideModal);\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\".close-button\").addEventListener(\"click\", hideModal);\n        document.addEventListener(\"keydown\", (event) => {\n            if (event.code === \"Escape\") {\n                event.preventDefault();\n                hideModal();\n            }\n        });\n    }\n}\n_Modal_$target = new WeakMap();\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Modal/index.ts?");

/***/ }),

/***/ "./src/components/MovieCard/index.ts":
/*!*******************************************!*\
  !*** ./src/components/MovieCard/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovieCard\": () => (/* binding */ MovieCard)\n/* harmony export */ });\n/* harmony import */ var _assets_star_filled_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/star_filled.png */ \"./src/assets/star_filled.png\");\n\nclass MovieCard {\n    static render(movie) {\n        return `\n      <li data-id=\"${movie.id}\" class=\"movie\">\n          <div class=\"item-card\">\n            <img\n              class=\"item-thumbnail skeleton\"\n              src=\"https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}\"\n              loading=\"lazy\"\n              alt=\"${movie.title}\"\n            />\n            <p class=\"item-title\">${movie.title}</p>\n            <p class=\"item-score\"><img src=\"${_assets_star_filled_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"별점\" />${movie.vote_average}</p>\n          </div>\n      </li>\n    `;\n    }\n}\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieCard/index.ts?");

/***/ }),

/***/ "./src/components/MovieDetail/index.ts":
/*!*********************************************!*\
  !*** ./src/components/MovieDetail/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovieDetail\": () => (/* binding */ MovieDetail)\n/* harmony export */ });\n/* harmony import */ var _assets_star_filled_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/star_filled.png */ \"./src/assets/star_filled.png\");\n/* harmony import */ var _assets_star_empty_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/star_empty.png */ \"./src/assets/star_empty.png\");\n/* harmony import */ var _utils_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/selector */ \"./src/utils/selector.ts\");\n\n\n\nclass MovieDetail {\n    static render(movieDetail) {\n        const { id, title, genres, overview, poster_path, vote_average } = movieDetail;\n        const genreNames = genres.map((genre) => genre.name).join(\", \");\n        const storedRatingStr = localStorage.getItem(id.toString());\n        const storedRating = storedRatingStr\n            ? JSON.parse(storedRatingStr)\n            : { rating: 0, label: \"\" };\n        const stars = [1, 2, 3, 4, 5]\n            .map((index) => `\n    <img\n      src=\"${index <= storedRating.rating ? _assets_star_filled_png__WEBPACK_IMPORTED_MODULE_0__ : _assets_star_empty_png__WEBPACK_IMPORTED_MODULE_1__}\"\n      class=\"movie-stars\"\n      data-id=\"${id}\"\n      data-index=\"${index}\"\n    />\n  `)\n            .join(\"\");\n        return `\n      <div class=\"modal-header\">\n        <p class=\"movie-title\">${title}</p>\n      </div>\n      <div class=\"movie-card\">\n        <div class=\"movie-thumbnail\">\n          <img\n            src=\"https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}\"\n            class=\"movie-thumbnail skeleton\"\n            loading=\"lazy\"\n          />\n        </div>\n        <div class=\"movie-detail\">\n          <div>\n            <div>\n              <span>${genreNames}</span>\n              <span class=\"movie-score\">\n                <img src=\"${_assets_star_filled_png__WEBPACK_IMPORTED_MODULE_0__}\" /> ${vote_average}\n              </span>\n            </div>\n            <p class=\"movie-description\">\n              ${overview ? overview : \"등록된 줄거리가 없습니다.\"}\n            </p>\n          </div>\n          <div class=\"movie-rate\">\n            <p class=\"movie-rate-title\">내 별점</p>\n            <div class=\"movie-star-wrap\">\n            ${stars}\n            </div>\n            <p class=\"rating\">${storedRating.rating * 2}점</p>\n            <p class=\"rate-comment\"> ${storedRating.label}</p>\n          </div>\n        </div>\n      </div>\n    `;\n    }\n    static onClickStars() {\n        const starElements = (0,_utils_selector__WEBPACK_IMPORTED_MODULE_2__.$$)(\".movie-stars\");\n        starElements.forEach((star) => {\n            star.addEventListener(\"click\", () => {\n                const index = parseInt(star.getAttribute(\"data-index\"));\n                const movieId = parseInt(star.getAttribute(\"data-id\"));\n                this.fillStars(index, movieId);\n            });\n        });\n    }\n    static fillStars(index, movieId) {\n        const starElements = (0,_utils_selector__WEBPACK_IMPORTED_MODULE_2__.$$)(\".movie-stars\");\n        starElements.forEach((star, i) => {\n            if (i < index) {\n                star.setAttribute(\"src\", _assets_star_filled_png__WEBPACK_IMPORTED_MODULE_0__);\n            }\n            else {\n                star.setAttribute(\"src\", _assets_star_empty_png__WEBPACK_IMPORTED_MODULE_1__);\n            }\n        });\n        const ratingLabels = [\n            \"최악이에요\",\n            \"별로에요\",\n            \"보통이에요\",\n            \"볼만해요\",\n            \"최고에요!\",\n        ];\n        const ratingLabel = ratingLabels[index - 1];\n        const storedRatingStr = localStorage.getItem(movieId.toString());\n        const storedRating = storedRatingStr\n            ? JSON.parse(storedRatingStr)\n            : { rating: 0, label: \"\" };\n        const currentRating = { rating: index, label: ratingLabel };\n        const newRating = Object.assign(Object.assign({}, storedRating), currentRating);\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_2__.$)(\".rating\").innerHTML = `${newRating.rating * 2}점`;\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_2__.$)(\".rate-comment\").innerHTML = `${newRating.label}`;\n        localStorage.setItem(movieId.toString(), JSON.stringify(newRating));\n    }\n}\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieDetail/index.ts?");

/***/ }),

/***/ "./src/components/MovieList/index.ts":
/*!*******************************************!*\
  !*** ./src/components/MovieList/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovieList\": () => (/* binding */ MovieList)\n/* harmony export */ });\n/* harmony import */ var _domain_Movies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/Movies */ \"./src/domain/Movies.ts\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/api */ \"./src/utils/api.ts\");\n/* harmony import */ var _utils_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/selector */ \"./src/utils/selector.ts\");\n/* harmony import */ var _utils_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/skeleton */ \"./src/utils/skeleton.ts\");\n/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MovieCard */ \"./src/components/MovieCard/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _MovieList_$target, _MovieList_state, _MovieList_movies, _MovieList_$skeletonContainer;\n\n\n\n\n\nclass MovieList {\n    constructor($target, onClickMovie) {\n        _MovieList_$target.set(this, void 0);\n        _MovieList_state.set(this, {\n            show: \"popular\",\n            searchKeyword: \"\",\n            page: 1,\n        });\n        _MovieList_movies.set(this, new _domain_Movies__WEBPACK_IMPORTED_MODULE_0__.Movies([]));\n        _MovieList_$skeletonContainer.set(this, (0,_utils_skeleton__WEBPACK_IMPORTED_MODULE_3__.getSkeletonContainer)());\n        __classPrivateFieldSet(this, _MovieList_$target, $target, \"f\");\n        this.renderSkeleton();\n        this.init();\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_2__.$)(\".btn\").addEventListener(\"click\", this.onClickMoreButton.bind(this));\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_2__.$)(\".item-list\").addEventListener(\"click\", (event) => {\n            const closestLi = event.target.closest(\"li\");\n            const clickedId = closestLi === null || closestLi === void 0 ? void 0 : closestLi.dataset.id;\n            if (clickedId === \"0\" || clickedId === null || clickedId === undefined) {\n                throw new Error(\"유효하지 않은 id 값입니다.\");\n            }\n            if (clickedId) {\n                const movieId = parseInt(clickedId, 10);\n                onClickMovie(movieId);\n            }\n        });\n    }\n    init() {\n        return __awaiter(this, void 0, void 0, function* () {\n            this.renderSkeleton();\n            const response = yield (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.fetchPopularMovies)(__classPrivateFieldGet(this, _MovieList_state, \"f\").page);\n            const { results, total_pages } = response;\n            __classPrivateFieldGet(this, _MovieList_movies, \"f\").reset(results);\n            this.renderMovieList(total_pages);\n            this.infiniteScroll();\n        });\n    }\n    reset(state, searchKeyword) {\n        return __awaiter(this, void 0, void 0, function* () {\n            __classPrivateFieldGet(this, _MovieList_$target, \"f\").innerHTML = ``;\n            __classPrivateFieldSet(this, _MovieList_state, Object.assign(Object.assign({}, __classPrivateFieldGet(this, _MovieList_state, \"f\")), { show: state, page: 1 }), \"f\");\n            this.showMoreButton();\n            this.removeSkeleton();\n            if (state === \"popular\") {\n                const response = yield (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.fetchPopularMovies)(__classPrivateFieldGet(this, _MovieList_state, \"f\").page);\n                const { results, total_pages } = response;\n                __classPrivateFieldGet(this, _MovieList_movies, \"f\").reset(results);\n                this.renderMovieList(total_pages);\n                return;\n            }\n            if (searchKeyword) {\n                __classPrivateFieldSet(this, _MovieList_state, Object.assign(Object.assign({}, __classPrivateFieldGet(this, _MovieList_state, \"f\")), { searchKeyword: searchKeyword }), \"f\");\n                const response = yield (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.fetchSearchMovies)(__classPrivateFieldGet(this, _MovieList_state, \"f\").page, __classPrivateFieldGet(this, _MovieList_state, \"f\").searchKeyword);\n                const { results, total_pages } = response;\n                __classPrivateFieldGet(this, _MovieList_movies, \"f\").reset(results);\n                this.renderMovieList(total_pages);\n            }\n        });\n    }\n    renderMovieList(total_pages) {\n        __classPrivateFieldGet(this, _MovieList_$target, \"f\").innerHTML = `\n      ${__classPrivateFieldGet(this, _MovieList_movies, \"f\")\n            .getList()\n            .map((movie) => _MovieCard__WEBPACK_IMPORTED_MODULE_4__.MovieCard.render(movie))\n            .join(\"\")}\n    `;\n        if (__classPrivateFieldGet(this, _MovieList_state, \"f\").page === total_pages)\n            this.hideMoreButton();\n    }\n    renderNextMovies(movieList, total_pages) {\n        this.removeSkeleton();\n        __classPrivateFieldGet(this, _MovieList_$target, \"f\").insertAdjacentHTML(\"beforeend\", `${movieList.map((movie) => _MovieCard__WEBPACK_IMPORTED_MODULE_4__.MovieCard.render(movie)).join(\"\")}`);\n        __classPrivateFieldGet(this, _MovieList_movies, \"f\").add(movieList);\n        if (__classPrivateFieldGet(this, _MovieList_state, \"f\").page === total_pages)\n            this.hideMoreButton();\n    }\n    infiniteScroll() {\n        const options = {\n            rootMargin: \"0px 0px 500px 0px\",\n        };\n        const observer = new IntersectionObserver((entries) => {\n            if (entries[0].isIntersecting) {\n                setTimeout(() => {\n                    this.onClickMoreButton();\n                }, 300);\n            }\n        }, options);\n        observer.observe((0,_utils_selector__WEBPACK_IMPORTED_MODULE_2__.$)(\".btn\"));\n    }\n    onClickMoreButton() {\n        return __awaiter(this, void 0, void 0, function* () {\n            __classPrivateFieldGet(this, _MovieList_state, \"f\").page += 1;\n            this.renderSkeleton();\n            if (__classPrivateFieldGet(this, _MovieList_state, \"f\").show === \"popular\") {\n                const response = yield (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.fetchPopularMovies)(__classPrivateFieldGet(this, _MovieList_state, \"f\").page);\n                const { results, total_pages } = response;\n                this.renderNextMovies(results, total_pages);\n            }\n            if (__classPrivateFieldGet(this, _MovieList_state, \"f\").show === \"search\") {\n                const response = yield (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.fetchSearchMovies)(__classPrivateFieldGet(this, _MovieList_state, \"f\").page, __classPrivateFieldGet(this, _MovieList_state, \"f\").searchKeyword);\n                const { results, total_pages } = response;\n                this.renderNextMovies(results, total_pages);\n            }\n        });\n    }\n    renderSkeleton() {\n        __classPrivateFieldGet(this, _MovieList_$target, \"f\").insertAdjacentElement(\"afterend\", __classPrivateFieldGet(this, _MovieList_$skeletonContainer, \"f\"));\n    }\n    removeSkeleton() {\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_2__.$)(\".skeleton-list\").remove();\n    }\n    hideMoreButton() {\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_2__.$)(\".btn\").setAttribute(\"hidden\", \"\");\n    }\n    showMoreButton() {\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_2__.$)(\".btn\").removeAttribute(\"hidden\");\n    }\n}\n_MovieList_$target = new WeakMap(), _MovieList_state = new WeakMap(), _MovieList_movies = new WeakMap(), _MovieList_$skeletonContainer = new WeakMap();\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieList/index.ts?");

/***/ }),

/***/ "./src/domain/Movies.ts":
/*!******************************!*\
  !*** ./src/domain/Movies.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Movies\": () => (/* binding */ Movies)\n/* harmony export */ });\nvar __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _Movies_list;\nclass Movies {\n    constructor(list) {\n        _Movies_list.set(this, void 0);\n        __classPrivateFieldSet(this, _Movies_list, this.convertResponseToMovieData(list), \"f\");\n    }\n    getList() {\n        return [...__classPrivateFieldGet(this, _Movies_list, \"f\")];\n    }\n    add(list) {\n        __classPrivateFieldSet(this, _Movies_list, [...__classPrivateFieldGet(this, _Movies_list, \"f\"), ...this.convertResponseToMovieData(list)], \"f\");\n    }\n    reset(list) {\n        __classPrivateFieldSet(this, _Movies_list, this.convertResponseToMovieData(list), \"f\");\n    }\n    convertResponseToMovieData(list) {\n        return list.map((data) => {\n            return {\n                id: data.id,\n                poster_path: data.poster_path,\n                title: data.title,\n                vote_average: data.vote_average,\n            };\n        });\n    }\n}\n_Movies_list = new WeakMap();\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/Movies.ts?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.ts\");\n/* harmony import */ var _src_styles_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/styles/reset.css */ \"./src/styles/reset.css\");\n/* harmony import */ var _src_styles_common_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/styles/common.css */ \"./src/styles/common.css\");\n\n\n\nconst app = new _App__WEBPACK_IMPORTED_MODULE_0__.App();\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/index.js?");

/***/ }),

/***/ "./src/utils/api.ts":
/*!**************************!*\
  !*** ./src/utils/api.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchMovieDetail\": () => (/* binding */ fetchMovieDetail),\n/* harmony export */   \"fetchPopularMovies\": () => (/* binding */ fetchPopularMovies),\n/* harmony export */   \"fetchSearchMovies\": () => (/* binding */ fetchSearchMovies)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst API_END_POINT = \"https://api.themoviedb.org/3\";\nconst defaultMethodOption = \"GET\";\nconst request = (url, method) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const response = yield fetch(url, { method });\n        if (!response.ok) {\n            throw new Error(`${response.status} 에러가 발생했습니다.`);\n        }\n        return response.json();\n    }\n    catch (error) {\n        if (error.message === \"Failed to fetch\") {\n            alert(\"네트워크 연결이 끊어졌습니다.\");\n        }\n        else {\n            alert(error.message);\n        }\n    }\n});\nconst fetchPopularMovies = (page) => {\n    const url = `${API_END_POINT}/movie/popular?api_key=${\"c90bf7ef3665e97ac17a5ca74c18e440\"}&language=ko&page=${page}`;\n    return request(url, defaultMethodOption);\n};\nconst fetchSearchMovies = (page, keyword) => {\n    const url = `${API_END_POINT}/search/movie?api_key=${\"c90bf7ef3665e97ac17a5ca74c18e440\"}&language=ko&page=${page}&query=${encodeURI(keyword)}`;\n    return request(url, defaultMethodOption);\n};\nconst fetchMovieDetail = (id) => {\n    const url = `${API_END_POINT}/movie/${id}?api_key=${\"c90bf7ef3665e97ac17a5ca74c18e440\"}&language=ko`;\n    return request(url, defaultMethodOption);\n};\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/api.ts?");

/***/ }),

/***/ "./src/utils/selector.ts":
/*!*******************************!*\
  !*** ./src/utils/selector.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"$$\": () => (/* binding */ $$)\n/* harmony export */ });\nconst $ = (seletor) => {\n    const selectedElement = document.querySelector(seletor);\n    if (!selectedElement)\n        throw new Error(`생성된 ${seletor}요소가 없습니다.`);\n    return selectedElement;\n};\nconst $$ = (seletor) => {\n    const selectedElementAll = document.querySelectorAll(seletor);\n    if (!selectedElementAll)\n        throw new Error(`생성된 ${seletor}요소가 없습니다.`);\n    return selectedElementAll;\n};\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/selector.ts?");

/***/ }),

/***/ "./src/utils/skeleton.ts":
/*!*******************************!*\
  !*** ./src/utils/skeleton.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSkeletonContainer\": () => (/* binding */ getSkeletonContainer)\n/* harmony export */ });\nconst getSkeletonContainer = () => {\n    const skeletonContainer = document.createElement(\"ul\");\n    skeletonContainer.className = \"skeleton-list\";\n    skeletonContainer.innerHTML = `\n        <li>\n            <div class=\"item-card\">\n                <div class=\"item-thumbnail skeleton\"></div>\n                <div class=\"item-title skeleton\"></div>\n                <div class=\"item-score skeleton\"></div>\n            </div>\n        </li>\n    `.repeat(20);\n    return skeletonContainer;\n};\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/skeleton.ts?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e162b4fefb34cd7ed8d.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/logo.png?");

/***/ }),

/***/ "./src/assets/search_button.png":
/*!**************************************!*\
  !*** ./src/assets/search_button.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f1bd4269f4446ceae306.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/search_button.png?");

/***/ }),

/***/ "./src/assets/star_empty.png":
/*!***********************************!*\
  !*** ./src/assets/star_empty.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f68d846dfc4e5d41285d.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/star_empty.png?");

/***/ }),

/***/ "./src/assets/star_filled.png":
/*!************************************!*\
  !*** ./src/assets/star_filled.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6328741810b732410eec.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/star_filled.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;