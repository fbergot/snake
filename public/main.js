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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n__webpack_require__(/*! ./assets/CSS/style.css */ \"./src/assets/CSS/style.css\");\n\nvar _Game = __webpack_require__(/*! ./class/Game */ \"./src/class/Game.js\");\n\nvar _Game2 = _interopRequireDefault(_Game);\n\nvar _hamb = __webpack_require__(/*! ../src/assets/picture/hamb2.png */ \"./src/assets/picture/hamb2.png\");\n\nvar _hamb2 = _interopRequireDefault(_hamb);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar game = new _Game2.default(_hamb2.default);\n\ngame.start();\n\n//# sourceURL=webpack://snake/./src/app.js?");

/***/ }),

/***/ "./src/class/Canvas.js":
/*!*****************************!*\
  !*** ./src/class/Canvas.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n   value: true\n}));\n\nvar _Draw2 = __webpack_require__(/*! ./Draw */ \"./src/class/Draw.js\");\n\nvar _Draw3 = _interopRequireDefault(_Draw2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Canvas = function (_Draw) {\n   _inherits(Canvas, _Draw);\n\n   function Canvas() {\n      _classCallCheck(this, Canvas);\n\n      var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this));\n\n      _this.canvas = document.getElementById(\"canvas\");\n      _this.ctx = _this.canvas.getContext(\"2d\");\n      _this.mainHTML = document.querySelector(\"main\");\n      _this.canvasWidth = window.innerWidth * 0.9;\n      _this.canvasHeight = window.innerHeight * 0.9;\n      _this.canvasBox = 30;\n      _this.canvas.width = Math.floor(_this.canvasWidth / _this.canvasBox) * _this.canvasBox;\n      _this.canvas.height = Math.floor(_this.canvasHeight / _this.canvasBox) * _this.canvasBox;\n      _this.canvas.style.display = \"none\";\n      return _this;\n   }\n\n   return Canvas;\n}(_Draw3.default);\n\nexports[\"default\"] = Canvas;\n\n//# sourceURL=webpack://snake/./src/class/Canvas.js?");

/***/ }),

/***/ "./src/class/Draw.js":
/*!***************************!*\
  !*** ./src/class/Draw.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n   value: true\n}));\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Utils2 = __webpack_require__(/*! ./Utils */ \"./src/class/Utils.js\");\n\nvar _Utils3 = _interopRequireDefault(_Utils2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Draw = function (_Utils) {\n   _inherits(Draw, _Utils);\n\n   function Draw() {\n      _classCallCheck(this, Draw);\n\n      return _possibleConstructorReturn(this, (Draw.__proto__ || Object.getPrototypeOf(Draw)).call(this));\n   }\n   /**\r\n    * Draw rect in Canvas\r\n    * @static\r\n    * @param {CanvasRenderingContext2D} ctx\r\n    * @param {number} x\r\n    * @param {number} y\r\n    * @param {number} x_length x length rect\r\n    * @param {number} y_length y length rect\r\n    * @param {string} color\r\n    * @param {boolean} fill\r\n    * @memberof Draw\r\n    */\n\n\n   _createClass(Draw, [{\n      key: \"drawRect\",\n      value: function drawRect(ctx, x, y, x_length, y_length, color) {\n         ctx.fillStyle = color;\n         ctx.fillRect(x, y, x_length, y_length);\n      }\n   }]);\n\n   return Draw;\n}(_Utils3.default);\n\nexports[\"default\"] = Draw;\n\n//# sourceURL=webpack://snake/./src/class/Draw.js?");

/***/ }),

/***/ "./src/class/Game.js":
/*!***************************!*\
  !*** ./src/class/Game.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n   value: true\n}));\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Snake2 = __webpack_require__(/*! ./Snake */ \"./src/class/Snake.js\");\n\nvar _Snake3 = _interopRequireDefault(_Snake2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Game = function (_Snake) {\n   _inherits(Game, _Snake);\n\n   function Game(foodPath) {\n      _classCallCheck(this, Game);\n\n      var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));\n\n      _this.score = 0;\n      _this.oldPlayerScore;\n      _this.speed = [80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30];\n      _this.selectorSpeed = 0;\n      _this.actualSpeed = _this.speed[_this.selectorSpeed];\n      _this.speedDecrement = 1;\n      _this.incScoreNumb = 10;\n      _this.foodImage = new Image();\n      _this.foodImage.src = foodPath;\n      _this.foodImage.style.width = _this.canvasBox + \"px;\";\n      _this.food = _this.randomCoords();\n      _this.playerName = \"\";\n      _this.state = true;\n      return _this;\n   }\n   /**\r\n    * Random food coords\r\n    * @returns {{x: number, y: number}}\r\n    * @memberof Snake\r\n    */\n\n\n   _createClass(Game, [{\n      key: \"randomCoords\",\n      value: function randomCoords() {\n         var xConv = this.canvas.width / this.canvasBox;\n         var yConv = this.canvas.height / this.canvasBox;\n         return {\n            x: Math.floor(Math.random() * xConv) * this.canvasBox,\n            y: Math.floor(Math.random() * yConv) * this.canvasBox\n         };\n      }\n\n      /**\r\n       * Increment speed of snake\r\n       * @memberof Game\r\n       */\n\n   }, {\n      key: \"incrementSpeed\",\n      value: function incrementSpeed() {\n         if (this.score % 50 === 0) {\n            this.actualSpeed = this.speed[++this.selectorSpeed];\n         }\n      }\n\n      /**\r\n       * Update after food collision (score, speed, food coords...)\r\n       * @memberof Game\r\n       */\n\n   }, {\n      key: \"updateAfterFoodCollision\",\n      value: function updateAfterFoodCollision() {\n         this.score += this.incScoreNumb;\n         this.food = this.randomCoords();\n         this.incrementSpeed();\n         // update\n         this.displayScoreAndSpeed(this.actualSpeed, this.score);\n\n         this.addNewPlayerScore(this.score, this.playerName);\n      }\n   }, {\n      key: \"end\",\n      value: function end() {}\n      /**\r\n       * Game start, display alert box for name and start loop after\r\n       * @memberof Game\r\n       */\n\n   }, {\n      key: \"start\",\n      value: function start() {\n         this.windowBuildAndDisplay({\n            content: \"\",\n            contentButton: \"valider\",\n            contentLabel: \"Entrer votre nom\",\n            classForDiv: \"alertMessage\",\n            classForButton: \"alertMessageBut\"\n         }, this.mainHTML);\n         this.mainHTML.classList.add(\"initBackground\");\n         this.addEvListener(\".alertMessageBut\", \"click\", this.initGame.bind(this));\n      }\n      /**\r\n       * remove start window, render loop start\r\n       * @memberof Game\r\n       */\n\n   }, {\n      key: \"initGame\",\n      value: function initGame() {\n         var playerName = document.getElementById(\"name\").value;\n         this.playerName = playerName;\n         // remove start window\n         var startBox = document.querySelector(\".alertMessage\");\n         startBox.remove();\n         this.canvas.style.display = \"block\";\n         this.oldPlayerScore = this.getPlayerOldScore(this.playerName) || 0;\n         this.builBestsScores(this.getItem(\"snakeScore\"), document.body);\n         // render loop start\n         this.renderLoop();\n      }\n      /**\r\n       * Draw background game\r\n       * @memberof Game\r\n       */\n\n   }, {\n      key: \"drawBackground\",\n      value: function drawBackground() {\n         this.drawRect(this.ctx, 0, 0, this.canvasWidth, this.canvasHeight, \"#27AF4D\");\n      }\n      /**\r\n       * Render Game loop\r\n       * @memberof Game\r\n       */\n\n   }, {\n      key: \"renderLoop\",\n      value: function renderLoop() {\n         var _this2 = this;\n\n         var draw = function draw() {\n            _this2.end();\n            _this2.ctx.clearRect(0, 0, _this2.canvasWidth, _this2.canvasHeight);\n            _this2.drawBackground();\n            _this2.ctx.drawImage(_this2.foodImage, _this2.food.x, _this2.food.y, 30, 30);\n            _this2.createSnake();\n            if (!_this2.state) return;\n            window.setTimeout(draw, _this2.actualSpeed);\n         };\n         draw();\n      }\n   }]);\n\n   return Game;\n}(_Snake3.default);\n\nexports[\"default\"] = Game;\n\n//# sourceURL=webpack://snake/./src/class/Game.js?");

/***/ }),

/***/ "./src/class/LocalStorage.js":
/*!***********************************!*\
  !*** ./src/class/LocalStorage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n   value: true\n}));\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LocalStorage = function () {\n   function LocalStorage() {\n      _classCallCheck(this, LocalStorage);\n   }\n\n   _createClass(LocalStorage, [{\n      key: \"setItem\",\n\n      /**\r\n       * Stringify and set item in localStorage\r\n       * @static\r\n       * @param {string} key\r\n       * @param {*} value\r\n       * @memberof LocalStorage\r\n       */\n      value: function setItem(key, value) {\n         var jsonValue = JSON.stringify(value);\n         window.localStorage.setItem(key, jsonValue);\n      }\n\n      /**\r\n       * Get item and parse\r\n       * @static\r\n       * @param {string} key\r\n       * @returns {any | null}\r\n       * @memberof LocalStorage\r\n       */\n\n   }, {\n      key: \"getItem\",\n      value: function getItem(key) {\n         var jsonValue = window.localStorage.getItem(key);\n         if (!jsonValue) return null;\n\n         return JSON.parse(jsonValue);\n      }\n   }]);\n\n   return LocalStorage;\n}();\n\nexports[\"default\"] = LocalStorage;\n\n//# sourceURL=webpack://snake/./src/class/LocalStorage.js?");

/***/ }),

/***/ "./src/class/Snake.js":
/*!****************************!*\
  !*** ./src/class/Snake.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n   value: true\n}));\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Canvas2 = __webpack_require__(/*! ./Canvas */ \"./src/class/Canvas.js\");\n\nvar _Canvas3 = _interopRequireDefault(_Canvas2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Snake = function (_Canvas) {\n   _inherits(Snake, _Canvas);\n\n   function Snake() {\n      _classCallCheck(this, Snake);\n\n      var _this = _possibleConstructorReturn(this, (Snake.__proto__ || Object.getPrototypeOf(Snake)).call(this));\n\n      _this.newHead;\n      _this.direction;\n      _this.snake = [{ x: _this.canvasBox * 5, y: _this.canvasBox * 8 }];\n      _this.oldHead = { x: _this.snake[0].x, y: _this.snake[0].y };\n      // this.oldHeadX = this.snake[0].x;\n      // this.oldHeadY = this.snake[0].y;\n      _this.addEvListener(\"html\", \"keydown\", _this.changeDirection.bind(_this));\n      return _this;\n   }\n   /**\r\n    * Change snake direction\r\n    * @param {Event} e\r\n    * @memberof Snake\r\n    */\n\n\n   _createClass(Snake, [{\n      key: \"changeDirection\",\n      value: function changeDirection(e) {\n         switch (true) {\n            case e.keyCode === 37 && this.direction !== \"RIGHT\":\n               this.direction = \"LEFT\";\n               break;\n            case e.keyCode === 38 && this.direction !== \"DOWN\":\n               this.direction = \"UP\";\n               break;\n            case e.keyCode === 39 && this.direction !== \"LEFT\":\n               this.direction = \"RIGHT\";\n               break;\n            case e.keyCode === 40 && this.direction !== \"UP\":\n               this.direction = \"DOWN\";\n         }\n      }\n      /**\r\n       * Create and display the snake\r\n       * @memberof Snake\r\n       */\n\n   }, {\n      key: \"createSnake\",\n      value: function createSnake() {\n         var color = \"\";\n         for (var i = 0; i < this.snake.length; i++) {\n            color = i == 0 ? \"red\" : \"grey\";\n            this.drawRect(this.ctx, this.snake[i].x, this.snake[i].y, this.canvasBox, this.canvasBox, color);\n         }\n         // check if snake touch food\n         if (this.oldHead.x === this.food.x && this.oldHead.y === this.food.y) {\n            this.updateAfterFoodCollision();\n         } else {\n            this.snake.pop();\n         }\n         this.applyDirection();\n         this.newHead = { x: this.oldHead.x, y: this.oldHead.y };\n         if (this.collision(this.oldHead, this.snake)) {\n            alert(\"ok\");\n         }\n         this.snake.unshift(this.newHead);\n      }\n\n      /**\r\n       * Apply snake move direction\r\n       * @memberof Snake\r\n       */\n\n   }, {\n      key: \"applyDirection\",\n      value: function applyDirection() {\n         switch (this.direction) {\n            case \"LEFT\":\n               this.oldHead.x -= this.canvasBox;\n               break;\n            case \"RIGHT\":\n               this.oldHead.x += this.canvasBox;\n               break;\n            case \"UP\":\n               this.oldHead.y -= this.canvasBox;\n               break;\n            case \"DOWN\":\n               this.oldHead.y += this.canvasBox;\n         }\n      }\n      /**\r\n       * Check if snake collision himself\r\n       * @param {{x: number, y: number}} head newHead\r\n       * @param {{x: number, y: number}[]} bodySnake snake body\r\n       * @returns {boolean}\r\n       * @memberof Snake\r\n       */\n\n   }, {\n      key: \"collision\",\n      value: function collision(head, bodySnake) {\n         var i = void 0;\n         for (i = 0; i < bodySnake.length; i++) {\n            if (head.x == bodySnake[i].x && head.y == bodySnake[i].y) {\n               return true;\n            }\n         }\n         return false;\n      }\n   }]);\n\n   return Snake;\n}(_Canvas3.default);\n\nexports[\"default\"] = Snake;\n\n//# sourceURL=webpack://snake/./src/class/Snake.js?");

/***/ }),

/***/ "./src/class/Utils.js":
/*!****************************!*\
  !*** ./src/class/Utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n   value: true\n}));\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _LocalStorage2 = __webpack_require__(/*! ./LocalStorage */ \"./src/class/LocalStorage.js\");\n\nvar _LocalStorage3 = _interopRequireDefault(_LocalStorage2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Utils = function (_LocalStorage) {\n   _inherits(Utils, _LocalStorage);\n\n   function Utils() {\n      _classCallCheck(this, Utils);\n\n      var _this = _possibleConstructorReturn(this, (Utils.__proto__ || Object.getPrototypeOf(Utils)).call(this));\n\n      _this.scoreContainer = document.getElementById(\"score\");\n      _this.speedContainer = document.getElementById(\"speed\");\n      _this.keyScore = \"snakeScore\";\n      return _this;\n   }\n   /**\r\n    *\r\n    *\r\n    * @static\r\n    * @param {{content: string, classForDiv: string}} options\r\n    * @param {HTMLElement} parent\r\n    * @memberof Utils\r\n    */\n\n\n   _createClass(Utils, [{\n      key: \"windowBuildAndDisplay\",\n      value: function windowBuildAndDisplay(options, parent) {\n         var inputOrNot = \"\";\n         if (options.contentLabel) {\n            inputOrNot = \"\\n                <div>\\n                    <label for='name'>\" + options.contentLabel + \"</label>\\n                    <input type='text' id='name'/>\\n                </div>\\n            \";\n         }\n         // create external box\n         var div = document.createElement(\"div\");\n         div.innerText = options.content;\n         div.classList.add(options.classForDiv);\n         // create input\n         div.innerHTML = \"\\n            \" + options.content + \"\\n            \" + inputOrNot + \"\\n            <button class='\" + options.classForButton + \"'>\" + options.contentButton + \"</button>\\n       \";\n         parent.appendChild(div);\n      }\n\n      /**\r\n       * Add event listener with a function\r\n       * @param {string} tagForTarget\r\n       * @param {string} typeEvent\r\n       * @param {() => void} callback\r\n       * @memberof Utils\r\n       */\n\n   }, {\n      key: \"addEvListener\",\n      value: function addEvListener(tagForTarget, typeEvent, callback) {\n         var target = document.querySelector(tagForTarget);\n         target.addEventListener(typeEvent, callback);\n      }\n      /**\r\n       *\r\n       * Display game data (speed, score)\r\n       * @memberof Utils\r\n       */\n\n   }, {\n      key: \"displayScoreAndSpeed\",\n      value: function displayScoreAndSpeed(speed, score) {\n         this.scoreContainer.textContent = score;\n         this.speedContainer.textContent = speed;\n      }\n      /**\r\n       * @param {string} nameOfPlayer\r\n       * @memberof Utils\r\n       */\n\n   }, {\n      key: \"getPlayerOldScore\",\n      value: function getPlayerOldScore(nameOfPlayer) {\n         var oldScore = this.getItem(this.keyScore);\n         if (oldScore) {\n            var playerScore = oldScore.filter(function (score) {\n               return score.name === nameOfPlayer;\n            });\n            if (playerScore) {\n               return playerScore;\n            }\n            return null;\n         }\n         return null;\n      }\n\n      /*\r\n       * @param {number} score\r\n       * @param {string} nameOfPlayer\r\n       * @memberof Utils\r\n       */\n\n   }, {\n      key: \"addNewPlayerScore\",\n      value: function addNewPlayerScore(score, nameOfPlayer) {\n         var total_score_of_players = void 0;\n         var total_score_without_scoreActualPlyer = void 0;\n         var dataplayer = {\n            name: nameOfPlayer,\n            score: score\n         };\n         // check if data exist\n         var scoreTotal = this.getItem(this.keyScore);\n         if (!scoreTotal) {\n            total_score_of_players = [];\n            total_score_of_players.push(dataplayer);\n            this.setItem(this.keyScore, total_score_of_players);\n            return;\n         }\n         var oldScoreOfPlayer = scoreTotal.find(function (scoreData) {\n            return scoreData.name === nameOfPlayer;\n         });\n         // check if old score for this player\n         if (oldScoreOfPlayer) {\n            if (oldScoreOfPlayer.score < score) {\n               oldScoreOfPlayer.score = score;\n               total_score_without_scoreActualPlyer = scoreTotal.filter(function (scorePlayer) {\n                  return scorePlayer.name !== nameOfPlayer;\n               });\n               // add new score\n               total_score_without_scoreActualPlyer.push(oldScoreOfPlayer);\n               this.setItem(this.keyScore, total_score_without_scoreActualPlyer);\n            }\n         } else {\n            scoreTotal.push(dataplayer);\n            this.setItem(this.keyScore, scoreTotal);\n         }\n      }\n\n      /**\r\n       *\r\n       *\r\n       * @param {{name: string, score: number}} data\r\n       * @memberof Utils\r\n       */\n\n   }, {\n      key: \"createLine\",\n      value: function createLine(data, rating) {\n         return \"\\n         <div class='result_row'>\\n            <p>\" + rating + \"</p>\\n            <p>\" + data.name + \"</p>\\n            <p>\" + data.score + \"</p>\\n         </div>\\n      \";\n      }\n\n      /**\r\n       * Build array of bests scores in order\r\n       * @param {{name: string, score: number}[]} bestsScores\r\n       * @param {HTMLElement} parent\r\n       * @memberof Utils\r\n       */\n\n   }, {\n      key: \"builBestsScores\",\n      value: function builBestsScores(bestsScores, parent) {\n         var _this2 = this;\n\n         var sortedScores = this.sortDecroissant(bestsScores);\n         var container = document.createElement(\"div\");\n         container.classList.add(\"container_scores\");\n         var lines = \"<h2>Classement</h2>\";\n         // create each line\n         sortedScores.forEach(function (scoreData, index) {\n            lines += _this2.createLine(scoreData, index + 1);\n         });\n\n         container.innerHTML = lines;\n         parent.appendChild(container);\n      }\n   }, {\n      key: \"sortDecroissant\",\n      value: function sortDecroissant(arr) {\n         var i = 0;\n\n         while (i < arr.length) {\n            if (arr[i + 1] && arr[i].score < arr[i + 1].score) {\n               var _ref = [arr[i + 1], arr[i]];\n               arr[i] = _ref[0];\n               arr[i + 1] = _ref[1];\n\n               i = -1;\n            }\n            i++;\n         }\n         return arr;\n      }\n   }]);\n\n   return Utils;\n}(_LocalStorage3.default);\n\nexports[\"default\"] = Utils;\n\n//# sourceURL=webpack://snake/./src/class/Utils.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/CSS/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/CSS/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../picture/marble.jpg */ \"./src/assets/picture/marble.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n   margin: 0;\\r\\n   padding: 0;\\r\\n   box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody main {\\r\\n   display: flex;\\r\\n   flex-direction: column;\\r\\n\\r\\n   justify-content: center;\\r\\n   align-items: center;\\r\\n   height: 100vh;\\r\\n}\\r\\n.alertMessage {\\r\\n   background-color: rgb(121, 159, 190);\\r\\n   border-radius: 0.7rem;\\r\\n   width: 400px;\\r\\n   height: 200px;\\r\\n   position: relative;\\r\\n}\\r\\n\\r\\n.initBackground {\\r\\n   background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n.alertMessage > div {\\r\\n   display: flex;\\r\\n   flex-direction: column;\\r\\n   justify-content: center;\\r\\n   align-items: center;\\r\\n}\\r\\n.alertMessage > div > label {\\r\\n   font-size: 1.2rem;\\r\\n   font-family: \\\"Lucida Sans\\\", \\\"Lucida Sans Regular\\\", \\\"Lucida Grande\\\", \\\"Lucida Sans Unicode\\\",\\r\\n      Geneva, Verdana, sans-serif;\\r\\n   padding: 0.5rem;\\r\\n}\\r\\n\\r\\n.alertMessage > button {\\r\\n   position: absolute;\\r\\n   bottom: 10px;\\r\\n   left: 50%;\\r\\n   right: 50%;\\r\\n   transform: translateX(-50%);\\r\\n}\\r\\n\\r\\n#name {\\r\\n   padding: 0.6rem;\\r\\n   width: 90%;\\r\\n   border-radius: 10px;\\r\\n   font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.alertMessageBut {\\r\\n   padding: 1rem;\\r\\n   background-color: rgb(233, 238, 243);\\r\\n   cursor: pointer;\\r\\n}\\r\\n\\r\\n.container_scores {\\r\\n   text-align: center;\\r\\n   border: 1px solid black;\\r\\n}\\r\\n\\r\\n.container_scores > h2 {\\r\\n   padding: 1rem;\\r\\n}\\r\\n.result_row {\\r\\n   display: flex;\\r\\n}\\r\\n\\r\\n.result_row > p {\\r\\n   border: 1px solid blue;\\r\\n   width: 33%;\\r\\n   font-size: 1.2rem;\\r\\n   text-align: center;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://snake/./src/assets/CSS/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://snake/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://snake/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://snake/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/CSS/style.css":
/*!**********************************!*\
  !*** ./src/assets/CSS/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/CSS/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://snake/./src/assets/CSS/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://snake/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://snake/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://snake/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://snake/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://snake/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://snake/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/picture/hamb2.png":
/*!**************************************!*\
  !*** ./src/assets/picture/hamb2.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eec097f6dfdb1438ea6b.png\";\n\n//# sourceURL=webpack://snake/./src/assets/picture/hamb2.png?");

/***/ }),

/***/ "./src/assets/picture/marble.jpg":
/*!***************************************!*\
  !*** ./src/assets/picture/marble.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a4f85044afb1e63bf9dc.jpg\";\n\n//# sourceURL=webpack://snake/./src/assets/picture/marble.jpg?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;