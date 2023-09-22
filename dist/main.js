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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact(){\r\n    const contentDiv = document.querySelector(\"#content\");\r\n    content.replaceChildren();\r\n\r\n\r\n    const contactDiv = document.createElement('div');\r\n    contactDiv.classList.add('contactDiv');\r\n    contactDiv.innerHTML = \"<h2>Phone Number: 22222222222</h2> <h2>Gmail: mail@gmail.com<h/2> <h2>Location: Eiffel Tower</h2>\";\r\n\r\n\r\n    contentDiv.appendChild(contactDiv)\r\n\r\n    \r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n// console.log(\"Check\")\r\n\r\n\r\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\r\nlet tabSwich = (function(){\r\n    const homeTab = document.querySelector(\".home\");\r\n    homeTab.addEventListener('click',_page_load__WEBPACK_IMPORTED_MODULE_0__.pageLoad);\r\n\r\n    const menuTab = document.querySelector(\".menu\");\r\n    menuTab.addEventListener('click',_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu);\r\n\r\n    const contactTab = document.querySelector(\".contact\");\r\n    contactTab.addEventListener('click',_contact_js__WEBPACK_IMPORTED_MODULE_2__.contact);\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu(){\r\n    \r\n    const content = document.querySelector('#content');\r\n    \r\n    content.replaceChildren();\r\n  \r\n\r\n    const menuHead = document.createElement('h1');\r\n    menuHead.classList.add('menuHead');\r\n    menuHead.innerHTML = \"<i>Menu</i>\"\r\n    content.appendChild(menuHead);\r\n\r\n    const menuImgOne = document.createElement('img');\r\n    menuImgOne.classList.add('lobster-thermidor')\r\n    menuImgOne.src = \"../f-lobster-thermidor.jpg\";\r\n    menuImgOne.alt = \"Lobster Thermidor\";\r\n    content.appendChild(menuImgOne);\r\n\r\n    const ImgoneP = document.createElement('p');\r\n    ImgoneP.classList.add('first');\r\n    ImgoneP.innerHTML = \"<p>Lobster Thermidor: The Frech special<p>\";\r\n    content.appendChild(ImgoneP);\r\n\r\n    const menuImgTwo = document.createElement('img');\r\n    menuImgTwo.classList.add('ratatouille')\r\n    menuImgTwo.src = \"../french-ratatouille.jpg\";\r\n    menuImgTwo.alt = \"Lobster Thermidor\";\r\n    content.appendChild(menuImgTwo);\r\n\r\n    const ImgtwoP = document.createElement('p');\r\n    ImgtwoP.classList.add('second');\r\n    ImgtwoP.textContent = \"French Ratatouille: The Frech special\";\r\n    content.appendChild(ImgtwoP)\r\n\r\n\r\n    const menuImgThree = document.createElement('img');\r\n    menuImgThree.classList.add('french-one')\r\n    menuImgThree.src = \"../french1.webp\";\r\n    menuImgThree.alt = \"random dish\";\r\n    content.appendChild(menuImgThree);\r\n\r\n    const ImgthreeP = document.createElement('p');\r\n    ImgthreeP.classList.add('third');\r\n    ImgthreeP.textContent = \"French Ratatouille: The Frech special\";\r\n    content.appendChild(ImgthreeP)\r\n    \r\n\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\nfunction pageLoad(){\r\n    const content = document.querySelector('#content');\r\n  \r\n\r\n    const About = document.createElement('div');\r\n    About.classList.add('about');\r\n    \r\n    About.innerHTML = \"<div class='active'><h1>About</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, officia neque impedit suscipitdolor, mollitia quidem aliquid repellendus ducimus tempora quisquam voluptas laborum non errorarchitecto, temporibus nisi odio excepturi. Lorem ipsum dolor sit amet consectetur, adipisicingelit. Reiciendis repudiandae ut quos, nobis, laboriosam unde neque quod pariatur obcaecati corruptinihil laudantium dolor totam similique repellat id commodi molestiae possimus! Lorem ipsum dolor sitamet consectetur adipisicing elit. Quae sunt, consequuntur, eos dolor blanditiis, iusto cumqueassumenda possimus explicabo alias error accusamus quos quia obcaecati ipsam praesentium magni odioasperiores placeat voluptatibus dolorum? Eveniet ipsam vel autem atque esse minus.</p></div>\"\r\n    content.appendChild(About)\r\n\r\n\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;