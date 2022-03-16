/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nfunction Asteroid(pos, vel, radius, color, game) {\n    MovingObject.call(this, pos, vel, radius, color, game);\n    this.color = 'grey';\n    this.radius = 10;\n    this.vel = Util.randomVec(10);\n}\n\nUtil.inherits.apply(Asteroid, [Asteroid, MovingObject]);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nfunction Game() {\n    const DIM_X = 0;\n    const DIM_Y = 0;\n    const NUM_ASTEROID = 0;\n    this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function () {\n    // Store the asteroids as a property of game instance in an array\n    let asteroids = [];\n    asteroids.push(new Asteroid(this.randomPosition(), this));\n    return asteroids;\n}\n\nGame.prototype.draw = function (ctx) {\n    ctx.clearRect(0, 0, 300, 150);\n    let asteroids = this.addAsteroids();\n\n    asteroids.forEach((element, index) => {\n        asteroids[index].draw(ctx);\n    })\n}\n\nGame.prototype.randomPosition = function () {\n    // Create random x postion of Asteroid within the game dimension\n    let posX = Math.floor(Math.random() * (300 - 0) + 0);\n    // Create random Y postion of Asteroid within the game dimension\n    let posY = Math.floor(Math.random() * (150 - 0) + 0);\n    let pos = [posX, posY];\n\n    return pos;\n}\n\nGame.prototype.moveObjects = function () {\n    let asteroids = this.addAsteroids();\n\n    asteroids.forEach((element, index) => {\n        asteroids[index].move();\n    });\n}\n\nGame.prototype.wrap = function (pos) {\n    return pos;\n}\n\n\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView () {\n\n}\n\nGameView.prototype.start = function () {\n    // Sets an interval to animate the game\n    window.setInterval ( () => {\n        const canvas = document.getElementById(\"game-canvas\");\n        const ctx = canvas.getContext(\"2d\");\n        Game.prototype.moveObjects();\n        Game.prototype.draw(ctx);\n\n    }, 20);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    const canvas = document.getElementById(\"game-canvas\");\n    const ctx = canvas.getContext(\"2d\");\n\n    const gameView = new GameView();\n    gameView.start();\n});\n\n\n\nwindow.MovingObject = MovingObject;\nwindow.Util = Util;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\n// window.Ship = Ship;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction MovingObject(pos, vel, radius, color, game) { \n    this.pos = pos;\n    this.vel = vel;\n    this.radius = radius;\n    this.color = color;\n    this.game = game;\n};\n\n// Drawing a moving object with canvas\n\nMovingObject.prototype.draw = function (ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n}\n\n//Move objects inside the canvas interval\n\nMovingObject.prototype.move = function () {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    this.game.wrap(this.pos);\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nconst Util = {\n    inherits (subClass, superClass) {\n        subClass.prototype = Object.create(superClass.prototype);\n        subClass.prototype.constructor = subClass;\n    },\n   \n    // Generate a random vector.\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;