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

/***/ "./node_modules/.pnpm/css-loader@7.1.4_webpack@5.108.4/node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.4_webpack@5.108.4/node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*****************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_pnpm_css_loader_7_1_4_webpack_5_108_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/.pnpm/css-loader@7.1.4_webpack@5.108.4/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/.pnpm/css-loader@7.1.4_webpack@5.108.4/node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_pnpm_css_loader_7_1_4_webpack_5_108_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_4_webpack_5_108_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_pnpm_css_loader_7_1_4_webpack_5_108_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/.pnpm/css-loader@7.1.4_webpack@5.108.4/node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/.pnpm/css-loader@7.1.4_webpack@5.108.4/node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_pnpm_css_loader_7_1_4_webpack_5_108_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_4_webpack_5_108_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_4_webpack_5_108_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_4_webpack_5_108_4_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --carbon: #111111;\r\n    --cuero-oscuro: #1a1514;\r\n    --dorado-viejo: #c5a059;\r\n    --texto-claro: #f4f1ea;\r\n    --texto-gris: #a09d98;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    font-family: 'Lato', sans-serif;\r\n    background-color: var(--carbon);\r\n    color: var(--texto-claro);\r\n    /* Una textura muy sutil de fondo oscuro */\r\n    background-image: radial-gradient(circle at center, var(--cuero-oscuro) 0%, var(--carbon) 100%);\r\n    min-height: 100vh;\r\n}\r\n\r\n/* Header y Navegación */\r\n.parrilla-header {\r\n    background-color: rgba(17, 17, 17, 0.95);\r\n    border-bottom: 1px solid rgba(197, 160, 89, 0.3);\r\n    padding: 30px 20px;\r\n    text-align: center;\r\n}\r\n\r\n.logo-text {\r\n    font-family: 'Playfair Display', serif;\r\n    font-size: 2.5rem;\r\n    color: var(--dorado-viejo);\r\n    margin: 0;\r\n    letter-spacing: 4px;\r\n}\r\n\r\n.logo-sub {\r\n    font-size: 0.9rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 3px;\r\n    color: var(--texto-gris);\r\n    display: block;\r\n    margin-bottom: 25px;\r\n    margin-top: 5px;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 40px;\r\n}\r\n\r\n.nav-btn {\r\n    background: none;\r\n    border: none;\r\n    color: var(--texto-gris);\r\n    font-family: 'Lato', sans-serif;\r\n    text-transform: uppercase;\r\n    letter-spacing: 2px;\r\n    font-size: 0.85rem;\r\n    cursor: pointer;\r\n    padding-bottom: 5px;\r\n    border-bottom: 1px solid transparent;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.nav-btn:hover,\r\n.nav-btn.active {\r\n    color: var(--dorado-viejo);\r\n    border-bottom: 1px solid var(--dorado-viejo);\r\n}\r\n\r\n/* Contenedor de contenido */\r\n#content {\r\n    max-width: 800px;\r\n    margin: 60px auto;\r\n    padding: 0 20px;\r\n    text-align: center;\r\n    animation: fadeIn 0.8s ease-in;\r\n}\r\n\r\n/* Clases generadas desde JavaScript */\r\n.premium-title {\r\n    font-family: 'Playfair Display', serif;\r\n    font-size: 2.5rem;\r\n    color: var(--texto-claro);\r\n    margin-bottom: 10px;\r\n    font-weight: 500;\r\n}\r\n\r\n.premium-subtitle {\r\n    font-family: 'Playfair Display', serif;\r\n    font-style: italic;\r\n    color: var(--dorado-viejo);\r\n    font-size: 1.2rem;\r\n    margin-bottom: 30px;\r\n    font-weight: 500;\r\n}\r\n\r\n.premium-text {\r\n    line-height: 1.5;\r\n    color: var(--texto-gris);\r\n    font-size: 1.3rem;\r\n    max-width: 700px;\r\n    margin: 0 auto 40px auto;\r\n}\r\n\r\n/* Imágenes de la web */\r\n.home-image {\r\n    width: 100%;\r\n    max-width: 600px;\r\n    height: auto;\r\n    border-radius: 8px;\r\n    margin: 30px auto;\r\n    display: block;\r\n    box-shadow: 0 10px 30px rgba(0,0,0,0.8);\r\n    border: 1px solid rgba(197, 160, 89, 0.3);\r\n}\r\n\r\n.menu-item-container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n    margin-bottom: 30px;\r\n    text-align: left;\r\n}\r\n\r\n.menu-image {\r\n    width: 150px;\r\n    height: 150px;\r\n    object-fit: cover;\r\n    border-radius: 50%;\r\n    border: 2px solid var(--dorado-viejo);\r\n    box-shadow: 0 4px 10px rgba(0,0,0,0.5);\r\n    flex-shrink: 0;\r\n}\r\n\r\n.menu-text-container {\r\n    flex: 1;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(10px);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/.pnpm/css-loader@7.1.4_webpack@5.108.4/node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/.pnpm/css-loader@7.1.4_webpack@5.108.4/node_modules/css-loader/dist/runtime/api.js"
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.4_webpack@5.108.4/node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/.pnpm/css-loader@7.1.4_webpack@5.108.4/node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/.pnpm/css-loader@7.1.4_webpack@5.108.4/node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.4_webpack@5.108.4/node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \******************************************************************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/.pnpm/css-loader@7.1.4_webpack@5.108.4/node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_pnpm_css_loader_7_1_4_webpack_5_108_4_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/.pnpm/css-loader@7.1.4_webpack@5.108.4/node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/.pnpm/css-loader@7.1.4_webpack@5.108.4/node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_108_4_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_4_webpack_5_108_4_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_7_1_4_webpack_5_108_4_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_pnpm_css_loader_7_1_4_webpack_5_108_4_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_pnpm_css_loader_7_1_4_webpack_5_108_4_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?\n}");

/***/ },

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**********************************************************************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \**************************************************************************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \****************************************************************************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \****************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*********************************************************************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \***************************************************************************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/.pnpm/style-loader@4.0.0_webpack@5.108.4/node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\r\n    const content = document.createElement('div');\r\n    content.classList.add('contact-content');\r\n\r\n    // Título\r\n    const title = document.createElement('h1');\r\n    title.textContent = 'Reservas & Ubicación';\r\n    title.classList.add('premium-title');\r\n\r\n    const subtitle = document.createElement('h3');\r\n    subtitle.textContent = 'Asegure su lugar en nuestra mesa';\r\n    subtitle.classList.add('premium-subtitle');\r\n\r\n    // Contenedor para dividir información y formulario (usaremos Flexbox básico inline)\r\n    const splitContainer = document.createElement('div');\r\n    splitContainer.style.display = 'flex';\r\n    splitContainer.style.flexWrap = 'wrap';\r\n    splitContainer.style.gap = '40px';\r\n    splitContainer.style.justifyContent = 'center';\r\n    splitContainer.style.marginTop = '40px';\r\n\r\n    // Lado Izquierdo: Información\r\n    const infoDiv = document.createElement('div');\r\n    infoDiv.style.flex = '1';\r\n    infoDiv.style.minWidth = '250px';\r\n    infoDiv.style.textAlign = 'left';\r\n\r\n    infoDiv.innerHTML = `\r\n        <h4 style=\"color: #c5a059; font-family: 'Playfair Display', serif; font-size: 1.3rem; margin-bottom: 10px;\">La Estancia</h4>\r\n        <p class=\"premium-text\" style=\"margin-bottom: 5px; font-size: 0.95rem;\"> Lavalle 941, Buenos Aires.</p>\r\n        <p class=\"premium-text\" style=\"margin-bottom: 20px; font-size: 0.95rem;\"> (011) 4326 0000</p>\r\n        \r\n        <h4 style=\"color: #c5a059; font-family: 'Playfair Display', serif; font-size: 1.1rem; margin-bottom: 10px;\">Horarios</h4>\r\n        <p class=\"premium-text\" style=\"margin-bottom: 5px; font-size: 0.95rem;\">Lunes a Viernes: 19:00 - 01:00</p>\r\n        <p class=\"premium-text\" style=\"margin-bottom: 5px; font-size: 0.95rem;\">Sábados y Domingos: 12:00 - 16:00 | 19:00 - 01:00</p>\r\n        <p class=\"premium-text\" style=\"font-size: 0.85rem; font-style: italic;\">Valet Parking disponible.</p>\r\n    `;\r\n\r\n    // Lado Derecho: Formulario (Simulado)\r\n    const formDiv = document.createElement('div');\r\n    formDiv.style.flex = '1';\r\n    formDiv.style.minWidth = '280px';\r\n    formDiv.style.background = 'rgba(26, 21, 20, 0.8)';\r\n    formDiv.style.padding = '25px';\r\n    formDiv.style.border = '1px solid rgba(197, 160, 89, 0.2)';\r\n    \r\n    // Estilos comunes para los inputs\r\n    const inputStyle = \"width: 100%; padding: 10px; margin-bottom: 15px; background: transparent; border: none; border-bottom: 1px solid #a09d98; color: #f4f1ea; font-family: 'Lato', sans-serif; box-sizing: border-box; outline: none;\";\r\n\r\n    formDiv.innerHTML = `\r\n        <form onsubmit=\"event.preventDefault(); alert('Reserva solicitada. Nos contactaremos a la brevedad.');\">\r\n            <input type=\"text\" placeholder=\"Nombre completo\" style=\"${inputStyle}\" required>\r\n            <input type=\"email\" placeholder=\"Correo electrónico\" style=\"${inputStyle}\" required>\r\n            <div style=\"display: flex; gap: 10px;\">\r\n                <input type=\"date\" style=\"${inputStyle} color: #a09d98;\" required>\r\n                <input type=\"number\" placeholder=\"Personas\" min=\"1\" max=\"10\" style=\"${inputStyle}\" required>\r\n            </div>\r\n            <button type=\"submit\" style=\"width: 100%; padding: 12px; background: #c5a059; color: #111; border: none; font-family: 'Lato', sans-serif; text-transform: uppercase; letter-spacing: 2px; font-weight: bold; cursor: pointer; margin-top: 10px; transition: background 0.3s;\">\r\n                Solicitar Reserva\r\n            </button>\r\n        </form>\r\n    `;\r\n\r\n    splitContainer.appendChild(infoDiv);\r\n    splitContainer.appendChild(formDiv);\r\n\r\n    content.appendChild(title);\r\n    content.appendChild(subtitle);\r\n    content.appendChild(splitContainer);\r\n\r\n    return content;\r\n}\n\n//# sourceURL=webpack:///./src/contact.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _assets_parrilla_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/parrilla.jpg */ \"./src/assets/parrilla.jpg\");\n// Importamos la imagen para que Webpack la reconozca\r\n\r\n\r\nfunction loadHome() {\r\n    const content = document.createElement('div');\r\n    content.classList.add('home-content');\r\n\r\n    const title = document.createElement('h1');\r\n    title.textContent = 'Fuego, Hierro y Tradición';\r\n    title.classList.add('premium-title');\r\n\r\n    const subtitle = document.createElement('h3');\r\n    subtitle.textContent = 'La auténtica experiencia de la parrilla argentina';\r\n    subtitle.classList.add('premium-subtitle');\r\n\r\n    // Creamos la imagen\r\n    const image = document.createElement('img');\r\n    image.src = _assets_parrilla_jpg__WEBPACK_IMPORTED_MODULE_0__; // Le pasamos la variable importada\r\n    image.alt = 'Brasas y carne en la parrilla';\r\n    image.classList.add('home-image');\r\n\r\n    const description = document.createElement('p');\r\n    description.textContent = 'Seleccionamos cuidadosamente los mejores cortes de pastura, madurados a la perfección y asados lentamente sobre brasas de quebracho y espinillo. Acompañado de nuestra exclusiva cava de vinos, cada plato es un homenaje a la cultura gastronómica de nuestra tierra.';\r\n    description.classList.add('premium-text');\r\n\r\n    const separator = document.createElement('div');\r\n    separator.style.width = '50px';\r\n    separator.style.height = '1px';\r\n    separator.style.backgroundColor = '#c5a059';\r\n    separator.style.margin = '0 auto';\r\n\r\n    content.appendChild(title);\r\n    content.appendChild(subtitle);\r\n    content.appendChild(image); // Inyectamos la imagen aquí\r\n    content.appendChild(description);\r\n    content.appendChild(separator);\r\n\r\n    return content;\r\n}\n\n//# sourceURL=webpack:///./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n \r\n\r\n\r\n       \r\n \r\n\r\nconst contentDiv = document.getElementById('content');\r\nconst buttons = document.querySelectorAll('.nav-btn'); // Actualicé la clase del botón a nav-btn\r\n\r\nfunction clearContent() {\r\n    contentDiv.innerHTML = '';\r\n}\r\n\r\nfunction switchTab(e) {\r\n    clearContent();\r\n    \r\n    // Quitamos la clase active de todos y se la ponemos al que clickeamos\r\n    buttons.forEach(btn => btn.classList.remove('active'));\r\n    e.target.classList.add('active');\r\n\r\n    const btnId = e.target.id;\r\n\r\n    // Aquí llamamos a la función correspondiente según el botón\r\n    if (btnId === 'btn-home') {\r\n        contentDiv.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n    } else if (btnId === 'btn-menu') {\r\n        contentDiv.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()); \r\n    } else if (btnId === 'btn-contact') {\r\n        contentDiv.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()); \r\n    }\r\n}\r\n\r\n// Añadimos el evento a cada botón\r\nbuttons.forEach(btn => {\r\n    btn.addEventListener('click', switchTab);\r\n});\r\n\r\n// Cargar la página de inicio por defecto\r\ncontentDiv.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n//# sourceURL=webpack:///./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_empanada_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/empanada.jpg */ \"./src/assets/empanada.jpg\");\n/* harmony import */ var _assets_provoleta_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/provoleta.jpg */ \"./src/assets/provoleta.jpg\");\n/* harmony import */ var _assets_bife_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/bife.jpg */ \"./src/assets/bife.jpg\");\n/* harmony import */ var _assets_entrana_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/entrana.jpg */ \"./src/assets/entrana.jpg\");\n/* harmony import */ var _assets_flan_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/flan.jpg */ \"./src/assets/flan.jpg\");\n/* harmony import */ var _assets_panqueque_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/panqueque.jpg */ \"./src/assets/panqueque.jpg\");\n// Importamos las imágenes de los platos\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction loadMenu() {\r\n    const content = document.createElement('div');\r\n\r\n    const title = document.createElement('h1');\r\n    title.textContent = 'Nuestra Carta';\r\n    title.classList.add('premium-title');\r\n\r\n    // Actualizamos la función para recibir la imagen\r\n    const createMenuItem = (name, description, price, imgSrc) => {\r\n        const itemDiv = document.createElement('div');\r\n        itemDiv.classList.add('menu-item-container');\r\n        \r\n        itemDiv.innerHTML = `\r\n            <img src=\"${imgSrc}\" alt=\"${name}\" class=\"menu-image\">\r\n            <div class=\"menu-text-container\">\r\n                <div style=\"display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px dotted rgba(197, 160, 89, 0.3); padding-bottom: 5px;\">\r\n                    <h4 style=\"font-family: 'Playfair Display', serif; color: #c5a059; margin: 0; font-size: 1.5rem;\">${name}</h4>\r\n                    <span style=\"color: #f4f1ea; font-family: 'Lato', sans-serif;\">$${price}</span>\r\n                </div>\r\n                <p style=\"color: #a09d98; margin: 5px 0 0 0; font-size: 0.9rem; font-style: italic;\">${description}</p>\r\n            </div>\r\n        `;\r\n        return itemDiv;\r\n    };\r\n\r\n    const sectionEntradas = document.createElement('h2');\r\n    sectionEntradas.textContent = 'Entradas rapidas';\r\n    sectionEntradas.classList.add('premium-subtitle');\r\n    sectionEntradas.style.textAlign = 'left';\r\n    sectionEntradas.style.marginTop = '40px';\r\n\r\n    content.appendChild(title);\r\n    content.appendChild(sectionEntradas);\r\n    \r\n    // Le pasamos la variable de la imagen importada al final\r\n    content.appendChild(createMenuItem('Empanada Cortada a Cuchillo', 'Carne de novillo, comino, pimentón de Cachi y verdeo.', '4.500', _assets_empanada_jpg__WEBPACK_IMPORTED_MODULE_0__));\r\n    content.appendChild(createMenuItem('Provoleta Estacionada', 'Queso provolone hilado, costra crocante, orégano fresco y oliva.', '9.200', _assets_provoleta_jpg__WEBPACK_IMPORTED_MODULE_1__));\r\n    \r\n    const sectionCortes = document.createElement('h2');\r\n    sectionCortes.textContent = 'Cortes premium a la parrilla';\r\n    sectionCortes.classList.add('premium-subtitle');\r\n    sectionCortes.style.textAlign = 'left';\r\n    sectionCortes.style.marginTop = '40px';\r\n    \r\n    content.appendChild(sectionCortes);\r\n    \r\n    content.appendChild(createMenuItem('Ojo de Bife (400g)', 'Corte ancho de la costilla, madurado por 21 días. Punto recomendado: Jugoso.', '28.000', _assets_bife_jpg__WEBPACK_IMPORTED_MODULE_2__));\r\n    content.appendChild(createMenuItem('Entraña Fina', 'Corte jugoso y tierno, con su membrana dorada a la parrilla.', '31.000', _assets_entrana_jpg__WEBPACK_IMPORTED_MODULE_3__));\r\n\r\n\r\n    const sectionPostres = document.createElement('h2');\r\n    sectionPostres.textContent = 'Postres de la casa';\r\n    sectionPostres.classList.add('premium-subtitle');\r\n    sectionPostres.style.textAlign = 'left';\r\n    sectionPostres.style.marginTop = '40px';\r\n    \r\n    content.appendChild(sectionPostres);\r\n    \r\n    content.appendChild(createMenuItem('Flan Casero Mixto', 'Receta tradicional con huevos de campo. Servido con abundante dulce de leche y crema chantilly.', '6.500', _assets_flan_jpg__WEBPACK_IMPORTED_MODULE_4__));\r\n    content.appendChild(createMenuItem('Panqueque de Dulce de Leche', 'Masa fina caramelizada a fuego lento, relleno con dulce de leche artesanal.', '7.800', _assets_panqueque_jpg__WEBPACK_IMPORTED_MODULE_5__));\r\n\r\n    return content;\r\n}\n\n//# sourceURL=webpack:///./src/menu.js?\n}");

/***/ },

/***/ "./src/assets/bife.jpg"
/*!*****************************!*\
  !*** ./src/assets/bife.jpg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"929bd63794e9ace8c142.jpg\";\n\n//# sourceURL=webpack:///./src/assets/bife.jpg?\n}");

/***/ },

/***/ "./src/assets/empanada.jpg"
/*!*********************************!*\
  !*** ./src/assets/empanada.jpg ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"30cf905b7bd91f822cbd.jpg\";\n\n//# sourceURL=webpack:///./src/assets/empanada.jpg?\n}");

/***/ },

/***/ "./src/assets/entrana.jpg"
/*!********************************!*\
  !*** ./src/assets/entrana.jpg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"4c0b108ebecb7b860ce9.jpg\";\n\n//# sourceURL=webpack:///./src/assets/entrana.jpg?\n}");

/***/ },

/***/ "./src/assets/flan.jpg"
/*!*****************************!*\
  !*** ./src/assets/flan.jpg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"18e117d534937431e0f5.jpg\";\n\n//# sourceURL=webpack:///./src/assets/flan.jpg?\n}");

/***/ },

/***/ "./src/assets/panqueque.jpg"
/*!**********************************!*\
  !*** ./src/assets/panqueque.jpg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b33d5893e1f85f231294.jpg\";\n\n//# sourceURL=webpack:///./src/assets/panqueque.jpg?\n}");

/***/ },

/***/ "./src/assets/parrilla.jpg"
/*!*********************************!*\
  !*** ./src/assets/parrilla.jpg ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b7c85840f9eef3f99241.jpg\";\n\n//# sourceURL=webpack:///./src/assets/parrilla.jpg?\n}");

/***/ },

/***/ "./src/assets/provoleta.jpg"
/*!**********************************!*\
  !*** ./src/assets/provoleta.jpg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f1d12b1c42f08914edf0.jpg\";\n\n//# sourceURL=webpack:///./src/assets/provoleta.jpg?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;