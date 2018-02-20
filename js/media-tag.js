(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MediaTag"] = factory();
	else
		root["MediaTag"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_4s7ph2uny = function () {
	var path = '/var/www/src/enums/identifier.js',
	    hash = '1c0b469bdbc4aac6fe8922d5ab3e01f0e37d0ec8',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/enums/identifier.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 19
				},
				end: {
					line: 22,
					column: 1
				}
			},
			'1': {
				start: {
					line: 24,
					column: 0
				},
				end: {
					line: 24,
					column: 28
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var Identifier = (cov_4s7ph2uny.s[0]++, {
	/*
  * Renderers
  */
	IMAGE: 'image',
	AUDIO: 'audio',
	VIDEO: 'video',
	PDF: 'pdf',
	DASH: 'dash',
	DOWNLOAD: 'download',

	/*
  * Filters
  */
	CRYPTO: 'crypto',
	CLEAR_KEY: 'clear-key',

	/*
  * Sanitizers
  */
	MEDIA_OBJECT: 'media-object'
});

cov_4s7ph2uny.s[1]++;
module.exports = Identifier;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_11booza4ko = function () {
	var path = '/var/www/src/enums/type.js',
	    hash = '28fdcdb3b04b796f68ff2f7404dd01761ac4f5b1',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/enums/type.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 13
				},
				end: {
					line: 6,
					column: 1
				}
			},
			'1': {
				start: {
					line: 8,
					column: 0
				},
				end: {
					line: 8,
					column: 22
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var Type = (cov_11booza4ko.s[0]++, {
	MATCHER: 'matcher',
	RENDERER: 'renderer',
	FILTER: 'filter',
	SANITIZER: 'sanitizer'
});

cov_11booza4ko.s[1]++;
module.exports = Type;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2o8d7m4dqc = function () {
	var path = '/var/www/src/plugins/matcher.js',
	    hash = '64bb58a7d36fd9778376d6cc5b185203ff5d5252',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/matcher.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 15
				},
				end: {
					line: 1,
					column: 39
				}
			},
			'1': {
				start: {
					line: 2,
					column: 20
				},
				end: {
					line: 2,
					column: 50
				}
			},
			'2': {
				start: {
					line: 3,
					column: 17
				},
				end: {
					line: 3,
					column: 36
				}
			},
			'3': {
				start: {
					line: 13,
					column: 2
				},
				end: {
					line: 13,
					column: 50
				}
			},
			'4': {
				start: {
					line: 14,
					column: 2
				},
				end: {
					line: 14,
					column: 31
				}
			},
			'5': {
				start: {
					line: 23,
					column: 2
				},
				end: {
					line: 23,
					column: 25
				}
			},
			'6': {
				start: {
					line: 27,
					column: 0
				},
				end: {
					line: 27,
					column: 25
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 12,
						column: 1
					},
					end: {
						line: 12,
						column: 2
					}
				},
				loc: {
					start: {
						line: 12,
						column: 37
					},
					end: {
						line: 15,
						column: 2
					}
				},
				line: 12
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 22,
						column: 1
					},
					end: {
						line: 22,
						column: 2
					}
				},
				loc: {
					start: {
						line: 22,
						column: 17
					},
					end: {
						line: 24,
						column: 2
					}
				},
				line: 22
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0
		},
		f: {
			'0': 0,
			'1': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Type = (cov_2o8d7m4dqc.s[0]++, __webpack_require__(1));
var Occurrence = (cov_2o8d7m4dqc.s[1]++, __webpack_require__(5));
var Plugin = (cov_2o8d7m4dqc.s[2]++, __webpack_require__(3));

var Matcher = function (_ref) {
	_inherits(Matcher, _ref);

	/**
  * Constructs the object.
  *
  * @param      {string}  identifier    The identifier
  * @param      {Type}  matchingType  The matching type
  */
	function Matcher(identifier, targetType) {
		_classCallCheck(this, Matcher);

		cov_2o8d7m4dqc.f[0]++;
		cov_2o8d7m4dqc.s[3]++;

		var _this = _possibleConstructorReturn(this, (Matcher.__proto__ || Object.getPrototypeOf(Matcher)).call(this, identifier, Type.MATCHER, Occurrence.ANY));

		cov_2o8d7m4dqc.s[4]++;

		_this.targetType = targetType;
		return _this;
	}

	/**
  * Gets the target type.
  *
  * @return     {<type>}  The target type.
  */


	_createClass(Matcher, [{
		key: 'getTargetType',
		value: function getTargetType() {
			cov_2o8d7m4dqc.f[1]++;
			cov_2o8d7m4dqc.s[5]++;

			return this.targetType;
		}
	}]);

	return Matcher;
}((Plugin));

cov_2o8d7m4dqc.s[6]++;


module.exports = Matcher;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_xvou6wm90 = function () {
	var path = '/var/www/src/plugins/plugin.js',
	    hash = '236b9356734988731e0a4debff4c69927a8ddb15',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/plugin.js',
		statementMap: {
			'0': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 10,
					column: 31
				}
			},
			'1': {
				start: {
					line: 11,
					column: 2
				},
				end: {
					line: 11,
					column: 19
				}
			},
			'2': {
				start: {
					line: 12,
					column: 2
				},
				end: {
					line: 12,
					column: 31
				}
			},
			'3': {
				start: {
					line: 21,
					column: 2
				},
				end: {
					line: 23,
					column: 3
				}
			},
			'4': {
				start: {
					line: 22,
					column: 3
				},
				end: {
					line: 22,
					column: 26
				}
			},
			'5': {
				start: {
					line: 24,
					column: 2
				},
				end: {
					line: 24,
					column: 47
				}
			},
			'6': {
				start: {
					line: 33,
					column: 2
				},
				end: {
					line: 35,
					column: 3
				}
			},
			'7': {
				start: {
					line: 34,
					column: 3
				},
				end: {
					line: 34,
					column: 20
				}
			},
			'8': {
				start: {
					line: 36,
					column: 2
				},
				end: {
					line: 36,
					column: 40
				}
			},
			'9': {
				start: {
					line: 45,
					column: 2
				},
				end: {
					line: 47,
					column: 3
				}
			},
			'10': {
				start: {
					line: 46,
					column: 3
				},
				end: {
					line: 46,
					column: 26
				}
			},
			'11': {
				start: {
					line: 48,
					column: 2
				},
				end: {
					line: 48,
					column: 46
				}
			},
			'12': {
				start: {
					line: 58,
					column: 2
				},
				end: {
					line: 58,
					column: 35
				}
			},
			'13': {
				start: {
					line: 62,
					column: 0
				},
				end: {
					line: 62,
					column: 24
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 43
					},
					end: {
						line: 13,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 20,
						column: 1
					},
					end: {
						line: 20,
						column: 2
					}
				},
				loc: {
					start: {
						line: 20,
						column: 17
					},
					end: {
						line: 25,
						column: 2
					}
				},
				line: 20
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 32,
						column: 1
					},
					end: {
						line: 32,
						column: 2
					}
				},
				loc: {
					start: {
						line: 32,
						column: 11
					},
					end: {
						line: 37,
						column: 2
					}
				},
				line: 32
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 44,
						column: 1
					},
					end: {
						line: 44,
						column: 2
					}
				},
				loc: {
					start: {
						line: 44,
						column: 17
					},
					end: {
						line: 49,
						column: 2
					}
				},
				line: 44
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 57,
						column: 1
					},
					end: {
						line: 57,
						column: 2
					}
				},
				loc: {
					start: {
						line: 57,
						column: 20
					},
					end: {
						line: 59,
						column: 2
					}
				},
				line: 57
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 21,
						column: 2
					},
					end: {
						line: 23,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 21,
						column: 2
					},
					end: {
						line: 23,
						column: 3
					}
				}, {
					start: {
						line: 21,
						column: 2
					},
					end: {
						line: 23,
						column: 3
					}
				}],
				line: 21
			},
			'1': {
				loc: {
					start: {
						line: 33,
						column: 2
					},
					end: {
						line: 35,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 33,
						column: 2
					},
					end: {
						line: 35,
						column: 3
					}
				}, {
					start: {
						line: 33,
						column: 2
					},
					end: {
						line: 35,
						column: 3
					}
				}],
				line: 33
			},
			'2': {
				loc: {
					start: {
						line: 45,
						column: 2
					},
					end: {
						line: 47,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 45,
						column: 2
					},
					end: {
						line: 47,
						column: 3
					}
				}, {
					start: {
						line: 45,
						column: 2
					},
					end: {
						line: 47,
						column: 3
					}
				}],
				line: 45
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plugin = function () {
	/**
  * Constructs the object.
  *
  * @param      {string}  identifier  The identifier
  * @param      {string}  type        The type
  * @param      {string}  occurrence   The occurrence
  */
	function Plugin(identifier, type, occurrence) {
		_classCallCheck(this, Plugin);

		cov_xvou6wm90.f[0]++;
		cov_xvou6wm90.s[0]++;

		this.identifier = identifier;
		cov_xvou6wm90.s[1]++;
		this.type = type;
		cov_xvou6wm90.s[2]++;
		this.occurrence = occurrence;
	}

	/**
  * Gets the identifier.
  *
  * @return     {string}  The identifier.
  */


	_createClass(Plugin, [{
		key: 'getIdentifier',
		value: function getIdentifier() {
			cov_xvou6wm90.f[1]++;
			cov_xvou6wm90.s[3]++;

			if (this.identifier) {
				cov_xvou6wm90.b[0][0]++;
				cov_xvou6wm90.s[4]++;

				return this.identifier;
			} else {
				cov_xvou6wm90.b[0][1]++;
			}
			cov_xvou6wm90.s[5]++;
			throw new Error('Plugin has not identifier');
		}

		/**
   * Gets the type.
   *
   * @return     {string}  The type.
   */

	}, {
		key: 'getType',
		value: function getType() {
			cov_xvou6wm90.f[2]++;
			cov_xvou6wm90.s[6]++;

			if (this.type) {
				cov_xvou6wm90.b[1][0]++;
				cov_xvou6wm90.s[7]++;

				return this.type;
			} else {
				cov_xvou6wm90.b[1][1]++;
			}
			cov_xvou6wm90.s[8]++;
			throw new Error('Plugin has no type');
		}

		/**
   * Gets the occurrence.
   *
   * @return     {string}  The occurrence.
   */

	}, {
		key: 'getOccurrence',
		value: function getOccurrence() {
			cov_xvou6wm90.f[3]++;
			cov_xvou6wm90.s[9]++;

			if (this.occurrence) {
				cov_xvou6wm90.b[2][0]++;
				cov_xvou6wm90.s[10]++;

				return this.occurrence;
			} else {
				cov_xvou6wm90.b[2][1]++;
			}
			cov_xvou6wm90.s[11]++;
			throw new Error('Plugin has no occurrence');
		}

		/**
   * Starts the process on the media object.
   *
   * @param      {MediaObject}  mediaObject  The media object
   * @return     {*}
   */

	}, {
		key: 'start',
		value: function start(mediaObject) {
			cov_xvou6wm90.f[4]++;
			cov_xvou6wm90.s[12]++;

			return this.process(mediaObject);
		}
	}]);

	return Plugin;
}();

cov_xvou6wm90.s[13]++;


module.exports = Plugin;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_263aa7zjfj = function () {
	var path = '/var/www/src/plugins/renderer.js',
	    hash = '26e2ca46353b9482e208fb41ce909871d725ec50',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/renderer.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 15
				},
				end: {
					line: 1,
					column: 39
				}
			},
			'1': {
				start: {
					line: 2,
					column: 20
				},
				end: {
					line: 2,
					column: 50
				}
			},
			'2': {
				start: {
					line: 3,
					column: 17
				},
				end: {
					line: 3,
					column: 36
				}
			},
			'3': {
				start: {
					line: 12,
					column: 2
				},
				end: {
					line: 12,
					column: 52
				}
			},
			'4': {
				start: {
					line: 16,
					column: 0
				},
				end: {
					line: 16,
					column: 26
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 11,
						column: 1
					},
					end: {
						line: 11,
						column: 2
					}
				},
				loc: {
					start: {
						line: 11,
						column: 25
					},
					end: {
						line: 13,
						column: 2
					}
				},
				line: 11
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0
		},
		f: {
			'0': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Type = (cov_263aa7zjfj.s[0]++, __webpack_require__(1));
var Occurrence = (cov_263aa7zjfj.s[1]++, __webpack_require__(5));
var Plugin = (cov_263aa7zjfj.s[2]++, __webpack_require__(3));

var Renderer = function (_ref) {
	_inherits(Renderer, _ref);

	/**
  * Constructs the object.
  *
  * @param      {string}  identifier  The identifier
  */
	function Renderer(identifier) {
		_classCallCheck(this, Renderer);

		cov_263aa7zjfj.f[0]++;
		cov_263aa7zjfj.s[3]++;
		return _possibleConstructorReturn(this, (Renderer.__proto__ || Object.getPrototypeOf(Renderer)).call(this, identifier, Type.RENDERER, Occurrence.ONCE));
	}

	return Renderer;
}((Plugin));

cov_263aa7zjfj.s[4]++;


module.exports = Renderer;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_24vu1urdp = function () {
	var path = '/var/www/src/enums/occurrence.js',
	    hash = '90d161395164122e030a7b51bd2b404355869d73',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/enums/occurrence.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 19
				},
				end: {
					line: 5,
					column: 1
				}
			},
			'1': {
				start: {
					line: 7,
					column: 0
				},
				end: {
					line: 7,
					column: 28
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var Occurrence = (cov_24vu1urdp.s[0]++, {
	EVERY: 'every',
	ANY: 'any',
	ONCE: 'once'
});

cov_24vu1urdp.s[1]++;
module.exports = Occurrence;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1fyefg77yk = function () {
	var path = "/var/www/src/stores/store.js",
	    hash = "e839a686f38cedc02a7babd6273970f077bd1c29",
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = "__coverage__",
	    coverageData = {
		path: "/var/www/src/stores/store.js",
		statementMap: {
			"0": {
				start: {
					line: 11,
					column: 2
				},
				end: {
					line: 11,
					column: 16
				}
			},
			"1": {
				start: {
					line: 21,
					column: 2
				},
				end: {
					line: 23,
					column: 3
				}
			},
			"2": {
				start: {
					line: 22,
					column: 3
				},
				end: {
					line: 22,
					column: 15
				}
			},
			"3": {
				start: {
					line: 24,
					column: 2
				},
				end: {
					line: 24,
					column: 15
				}
			},
			"4": {
				start: {
					line: 34,
					column: 2
				},
				end: {
					line: 36,
					column: 3
				}
			},
			"5": {
				start: {
					line: 35,
					column: 3
				},
				end: {
					line: 35,
					column: 92
				}
			},
			"6": {
				start: {
					line: 37,
					column: 2
				},
				end: {
					line: 37,
					column: 24
				}
			},
			"7": {
				start: {
					line: 46,
					column: 2
				},
				end: {
					line: 52,
					column: 3
				}
			},
			"8": {
				start: {
					line: 47,
					column: 3
				},
				end: {
					line: 47,
					column: 63
				}
			},
			"9": {
				start: {
					line: 49,
					column: 17
				},
				end: {
					line: 49,
					column: 30
				}
			},
			"10": {
				start: {
					line: 50,
					column: 3
				},
				end: {
					line: 50,
					column: 24
				}
			},
			"11": {
				start: {
					line: 51,
					column: 3
				},
				end: {
					line: 51,
					column: 16
				}
			},
			"12": {
				start: {
					line: 62,
					column: 2
				},
				end: {
					line: 62,
					column: 23
				}
			},
			"13": {
				start: {
					line: 71,
					column: 2
				},
				end: {
					line: 71,
					column: 31
				}
			},
			"14": {
				start: {
					line: 80,
					column: 15
				},
				end: {
					line: 80,
					column: 26
				}
			},
			"15": {
				start: {
					line: 81,
					column: 2
				},
				end: {
					line: 83,
					column: 5
				}
			},
			"16": {
				start: {
					line: 82,
					column: 3
				},
				end: {
					line: 82,
					column: 24
				}
			},
			"17": {
				start: {
					line: 87,
					column: 0
				},
				end: {
					line: 87,
					column: 23
				}
			}
		},
		fnMap: {
			"0": {
				name: "(anonymous_0)",
				decl: {
					start: {
						line: 10,
						column: 1
					},
					end: {
						line: 10,
						column: 2
					}
				},
				loc: {
					start: {
						line: 10,
						column: 15
					},
					end: {
						line: 12,
						column: 2
					}
				},
				line: 10
			},
			"1": {
				name: "(anonymous_1)",
				decl: {
					start: {
						line: 20,
						column: 1
					},
					end: {
						line: 20,
						column: 2
					}
				},
				loc: {
					start: {
						line: 20,
						column: 15
					},
					end: {
						line: 25,
						column: 2
					}
				},
				line: 20
			},
			"2": {
				name: "(anonymous_2)",
				decl: {
					start: {
						line: 33,
						column: 1
					},
					end: {
						line: 33,
						column: 2
					}
				},
				loc: {
					start: {
						line: 33,
						column: 19
					},
					end: {
						line: 38,
						column: 2
					}
				},
				line: 33
			},
			"3": {
				name: "(anonymous_3)",
				decl: {
					start: {
						line: 45,
						column: 1
					},
					end: {
						line: 45,
						column: 2
					}
				},
				loc: {
					start: {
						line: 45,
						column: 14
					},
					end: {
						line: 53,
						column: 2
					}
				},
				line: 45
			},
			"4": {
				name: "(anonymous_4)",
				decl: {
					start: {
						line: 61,
						column: 1
					},
					end: {
						line: 61,
						column: 2
					}
				},
				loc: {
					start: {
						line: 61,
						column: 10
					},
					end: {
						line: 63,
						column: 2
					}
				},
				line: 61
			},
			"5": {
				name: "(anonymous_5)",
				decl: {
					start: {
						line: 70,
						column: 1
					},
					end: {
						line: 70,
						column: 2
					}
				},
				loc: {
					start: {
						line: 70,
						column: 8
					},
					end: {
						line: 72,
						column: 2
					}
				},
				line: 70
			},
			"6": {
				name: "(anonymous_6)",
				decl: {
					start: {
						line: 79,
						column: 1
					},
					end: {
						line: 79,
						column: 2
					}
				},
				loc: {
					start: {
						line: 79,
						column: 10
					},
					end: {
						line: 84,
						column: 2
					}
				},
				line: 79
			},
			"7": {
				name: "(anonymous_7)",
				decl: {
					start: {
						line: 81,
						column: 18
					},
					end: {
						line: 81,
						column: 19
					}
				},
				loc: {
					start: {
						line: 81,
						column: 25
					},
					end: {
						line: 83,
						column: 3
					}
				},
				line: 81
			}
		},
		branchMap: {
			"0": {
				loc: {
					start: {
						line: 21,
						column: 2
					},
					end: {
						line: 23,
						column: 3
					}
				},
				type: "if",
				locations: [{
					start: {
						line: 21,
						column: 2
					},
					end: {
						line: 23,
						column: 3
					}
				}, {
					start: {
						line: 21,
						column: 2
					},
					end: {
						line: 23,
						column: 3
					}
				}],
				line: 21
			},
			"1": {
				loc: {
					start: {
						line: 34,
						column: 2
					},
					end: {
						line: 36,
						column: 3
					}
				},
				type: "if",
				locations: [{
					start: {
						line: 34,
						column: 2
					},
					end: {
						line: 36,
						column: 3
					}
				}, {
					start: {
						line: 34,
						column: 2
					},
					end: {
						line: 36,
						column: 3
					}
				}],
				line: 34
			},
			"2": {
				loc: {
					start: {
						line: 46,
						column: 2
					},
					end: {
						line: 52,
						column: 3
					}
				},
				type: "if",
				locations: [{
					start: {
						line: 46,
						column: 2
					},
					end: {
						line: 52,
						column: 3
					}
				}, {
					start: {
						line: 46,
						column: 2
					},
					end: {
						line: 52,
						column: 3
					}
				}],
				line: 46
			}
		},
		s: {
			"0": 0,
			"1": 0,
			"2": 0,
			"3": 0,
			"4": 0,
			"5": 0,
			"6": 0,
			"7": 0,
			"8": 0,
			"9": 0,
			"10": 0,
			"11": 0,
			"12": 0,
			"13": 0,
			"14": 0,
			"15": 0,
			"16": 0,
			"17": 0
		},
		f: {
			"0": 0,
			"1": 0,
			"2": 0,
			"3": 0,
			"4": 0,
			"5": 0,
			"6": 0,
			"7": 0
		},
		b: {
			"0": [0, 0],
			"1": [0, 0],
			"2": [0, 0]
		},
		_coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for store.
 *
 * @class      Store (name)
 */
var Store = function () {
	/**
  * Constructs the object.
  */
	function Store() {
		_classCallCheck(this, Store);

		cov_1fyefg77yk.f[0]++;
		cov_1fyefg77yk.s[0]++;

		this.map = {};
	}

	/**
  * Determines if stored.
  *
  * @param      {string}   key     The key
  * @return     {boolean}  True if stored, False otherwise.
  */


	_createClass(Store, [{
		key: "isStored",
		value: function isStored(key) {
			cov_1fyefg77yk.f[1]++;
			cov_1fyefg77yk.s[1]++;

			if (this.get(key)) {
				cov_1fyefg77yk.b[0][0]++;
				cov_1fyefg77yk.s[2]++;

				return true;
			} else {
				cov_1fyefg77yk.b[0][1]++;
			}
			cov_1fyefg77yk.s[3]++;
			return false;
		}

		/**
   * Stores a couple key value inside the store.
   *
   * @param      {string}  key     The key
   * @param      {*}  value   The value
   */

	}, {
		key: "store",
		value: function store(key, value) {
			cov_1fyefg77yk.f[2]++;
			cov_1fyefg77yk.s[4]++;

			if (this.isStored(key)) {
				cov_1fyefg77yk.b[1][0]++;
				cov_1fyefg77yk.s[5]++;

				console.warn("The key \"" + key + "\" is already registered, the content will be overwritten.");
			} else {
				cov_1fyefg77yk.b[1][1]++;
			}
			cov_1fyefg77yk.s[6]++;
			this.map[key] = value;
		}

		/**
   * Unstores a value by deleting the entry and returning its value.
   *
   * @param      {string}  key     The key
   */

	}, {
		key: "unstore",
		value: function unstore(key) {
			cov_1fyefg77yk.f[3]++;
			cov_1fyefg77yk.s[7]++;

			if (this.isStored(key) === false) {
				cov_1fyefg77yk.b[2][0]++;
				cov_1fyefg77yk.s[8]++;

				console.warn("The key \"" + key + "\" not exists in this manager");
			} else {
				cov_1fyefg77yk.b[2][1]++;

				var value = (cov_1fyefg77yk.s[9]++, this.map[key]);
				cov_1fyefg77yk.s[10]++;
				delete this.map[key];
				cov_1fyefg77yk.s[11]++;
				return value;
			}
		}

		/**
   * Gets a spcific value from the key.
   *
   * @param      {<type>}  key     The key
   * @return     {<type>}  { description_of_the_return_value }
   */

	}, {
		key: "get",
		value: function get(key) {
			cov_1fyefg77yk.f[4]++;
			cov_1fyefg77yk.s[12]++;

			return this.map[key];
		}

		/**
   * Returns all stored keys.
   *
   * @return     {Array<string>}
   */

	}, {
		key: "keys",
		value: function keys() {
			cov_1fyefg77yk.f[5]++;
			cov_1fyefg77yk.s[13]++;

			return Object.keys(this.map);
		}

		/**
   * Returns all stored values.
   *
   * @return     {Array}
   */

	}, {
		key: "values",
		value: function values() {
			var _this = this;

			cov_1fyefg77yk.f[6]++;

			var keys = (cov_1fyefg77yk.s[14]++, this.keys());
			cov_1fyefg77yk.s[15]++;
			return keys.map(function (key) {
				cov_1fyefg77yk.f[7]++;
				cov_1fyefg77yk.s[16]++;

				return _this.get(key);
			});
		}
	}]);

	return Store;
}();

cov_1fyefg77yk.s[17]++;


module.exports = Store;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2qjnw68aaj = function () {
	var path = "/var/www/src/core/attributes-object.js",
	    hash = "7ec0d701dcc3a51018557bc06eb552ed59a88fa9",
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = "__coverage__",
	    coverageData = {
		path: "/var/www/src/core/attributes-object.js",
		statementMap: {
			"0": {
				start: {
					line: 13,
					column: 2
				},
				end: {
					line: 15,
					column: 5
				}
			},
			"1": {
				start: {
					line: 14,
					column: 3
				},
				end: {
					line: 14,
					column: 70
				}
			},
			"2": {
				start: {
					line: 25,
					column: 2
				},
				end: {
					line: 25,
					column: 25
				}
			},
			"3": {
				start: {
					line: 35,
					column: 2
				},
				end: {
					line: 35,
					column: 26
				}
			},
			"4": {
				start: {
					line: 44,
					column: 2
				},
				end: {
					line: 44,
					column: 25
				}
			},
			"5": {
				start: {
					line: 53,
					column: 2
				},
				end: {
					line: 53,
					column: 31
				}
			},
			"6": {
				start: {
					line: 57,
					column: 0
				},
				end: {
					line: 57,
					column: 34
				}
			}
		},
		fnMap: {
			"0": {
				name: "(anonymous_0)",
				decl: {
					start: {
						line: 12,
						column: 1
					},
					end: {
						line: 12,
						column: 2
					}
				},
				loc: {
					start: {
						line: 12,
						column: 22
					},
					end: {
						line: 16,
						column: 2
					}
				},
				line: 12
			},
			"1": {
				name: "(anonymous_1)",
				decl: {
					start: {
						line: 13,
						column: 42
					},
					end: {
						line: 13,
						column: 43
					}
				},
				loc: {
					start: {
						line: 13,
						column: 49
					},
					end: {
						line: 15,
						column: 3
					}
				},
				line: 13
			},
			"2": {
				name: "(anonymous_2)",
				decl: {
					start: {
						line: 24,
						column: 1
					},
					end: {
						line: 24,
						column: 2
					}
				},
				loc: {
					start: {
						line: 24,
						column: 25
					},
					end: {
						line: 26,
						column: 2
					}
				},
				line: 24
			},
			"3": {
				name: "(anonymous_3)",
				decl: {
					start: {
						line: 34,
						column: 1
					},
					end: {
						line: 34,
						column: 2
					}
				},
				loc: {
					start: {
						line: 34,
						column: 32
					},
					end: {
						line: 36,
						column: 2
					}
				},
				line: 34
			},
			"4": {
				name: "(anonymous_4)",
				decl: {
					start: {
						line: 43,
						column: 1
					},
					end: {
						line: 43,
						column: 2
					}
				},
				loc: {
					start: {
						line: 43,
						column: 28
					},
					end: {
						line: 45,
						column: 2
					}
				},
				line: 43
			},
			"5": {
				name: "(anonymous_5)",
				decl: {
					start: {
						line: 52,
						column: 1
					},
					end: {
						line: 52,
						column: 2
					}
				},
				loc: {
					start: {
						line: 52,
						column: 17
					},
					end: {
						line: 54,
						column: 2
					}
				},
				line: 52
			}
		},
		branchMap: {},
		s: {
			"0": 0,
			"1": 0,
			"2": 0,
			"3": 0,
			"4": 0,
			"5": 0,
			"6": 0
		},
		f: {
			"0": 0,
			"1": 0,
			"2": 0,
			"3": 0,
			"4": 0,
			"5": 0
		},
		b: {},
		_coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for attribute object.
 *
 * @class      AttributeObject (name)
 */
var AttributesObject = function () {
	/**
  * Constructs the object.
  *
  * @param      {Element}  element  The element
  */
	function AttributesObject(element) {
		var _this = this;

		_classCallCheck(this, AttributesObject);

		cov_2qjnw68aaj.f[0]++;
		cov_2qjnw68aaj.s[0]++;

		Object.keys(element.attributes).forEach(function (key) {
			cov_2qjnw68aaj.f[1]++;
			cov_2qjnw68aaj.s[1]++;

			_this[element.attributes[key].name] = element.attributes[key].value;
		});
	}

	/**
  * Gets the attribute.
  *
  * @param      {string}  attribute  The attribute
  * @return     {Object}  The attribute.
  */


	_createClass(AttributesObject, [{
		key: "getAttribute",
		value: function getAttribute(attribute) {
			cov_2qjnw68aaj.f[2]++;
			cov_2qjnw68aaj.s[2]++;

			return this[attribute];
		}

		/**
   * Sets the attribute.
   *
   * @param      {string}  attribute  The attribute
   * @param      {Object}  value      The value
   */

	}, {
		key: "setAttribute",
		value: function setAttribute(attribute, value) {
			cov_2qjnw68aaj.f[3]++;
			cov_2qjnw68aaj.s[3]++;

			this[attribute] = value;
		}

		/**
   * Removes an attribute.
   *
   * @param      {string}  attribute  The attribute
   */

	}, {
		key: "removeAttribute",
		value: function removeAttribute(attribute) {
			cov_2qjnw68aaj.f[4]++;
			cov_2qjnw68aaj.s[4]++;

			delete this[attribute];
		}

		/**
   * Determines if it has attributes.
   *
   * @return     {boolean}  True if has attributes, False otherwise.
   */

	}, {
		key: "hasAttributes",
		value: function hasAttributes() {
			cov_2qjnw68aaj.f[5]++;
			cov_2qjnw68aaj.s[5]++;

			return Object.keys(this) > 0;
		}
	}]);

	return AttributesObject;
}();

cov_2qjnw68aaj.s[6]++;


module.exports = AttributesObject;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1z7n8za8az = function () {
	var path = '/var/www/src/actions/activate.js',
	    hash = '331fa5bc9d1934c2272cc216af6b54e0bc267ee2',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/actions/activate.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 13
				},
				end: {
					line: 1,
					column: 30
				}
			},
			'1': {
				start: {
					line: 2,
					column: 13
				},
				end: {
					line: 2,
					column: 30
				}
			},
			'2': {
				start: {
					line: 4,
					column: 0
				},
				end: {
					line: 10,
					column: 2
				}
			},
			'3': {
				start: {
					line: 5,
					column: 1
				},
				end: {
					line: 7,
					column: 4
				}
			},
			'4': {
				start: {
					line: 6,
					column: 2
				},
				end: {
					line: 6,
					column: 20
				}
			},
			'5': {
				start: {
					line: 8,
					column: 1
				},
				end: {
					line: 8,
					column: 52
				}
			},
			'6': {
				start: {
					line: 9,
					column: 1
				},
				end: {
					line: 9,
					column: 29
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 4,
						column: 17
					},
					end: {
						line: 4,
						column: 18
					}
				},
				loc: {
					start: {
						line: 4,
						column: 54
					},
					end: {
						line: 10,
						column: 1
					}
				},
				line: 4
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 5,
						column: 31
					},
					end: {
						line: 5,
						column: 32
					}
				},
				loc: {
					start: {
						line: 5,
						column: 46
					},
					end: {
						line: 7,
						column: 2
					}
				},
				line: 5
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0
		},
		f: {
			'0': 0,
			'1': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var hide = (cov_1z7n8za8az.s[0]++, __webpack_require__(18));
var show = (cov_1z7n8za8az.s[1]++, __webpack_require__(17));

cov_1z7n8za8az.s[2]++;
module.exports = function (mediaObjectToActivate, mediaTag) {
	cov_1z7n8za8az.f[0]++;
	cov_1z7n8za8az.s[3]++;

	mediaTag.mediaObjects.forEach(function (mediaObject) {
		cov_1z7n8za8az.f[1]++;
		cov_1z7n8za8az.s[4]++;

		hide(mediaObject);
	});
	cov_1z7n8za8az.s[5]++;
	mediaTag.activeMediaObject = mediaObjectToActivate;
	cov_1z7n8za8az.s[6]++;
	show(mediaObjectToActivate);
};

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_clot6lh34 = function () {
	var path = '/var/www/src/plugins/filter.js',
	    hash = '95b2a9a7d6b2ebbe6d1effbd79197823e0506623',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/filter.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 15
				},
				end: {
					line: 1,
					column: 39
				}
			},
			'1': {
				start: {
					line: 2,
					column: 20
				},
				end: {
					line: 2,
					column: 50
				}
			},
			'2': {
				start: {
					line: 3,
					column: 17
				},
				end: {
					line: 3,
					column: 36
				}
			},
			'3': {
				start: {
					line: 12,
					column: 2
				},
				end: {
					line: 12,
					column: 49
				}
			},
			'4': {
				start: {
					line: 16,
					column: 0
				},
				end: {
					line: 16,
					column: 24
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 11,
						column: 1
					},
					end: {
						line: 11,
						column: 2
					}
				},
				loc: {
					start: {
						line: 11,
						column: 25
					},
					end: {
						line: 13,
						column: 2
					}
				},
				line: 11
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0
		},
		f: {
			'0': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Type = (cov_clot6lh34.s[0]++, __webpack_require__(1));
var Occurrence = (cov_clot6lh34.s[1]++, __webpack_require__(5));
var Plugin = (cov_clot6lh34.s[2]++, __webpack_require__(3));

var Filter = function (_ref) {
	_inherits(Filter, _ref);

	/**
  * Constructs the object.
  *
  * @param      {string}  identifier  The identifier
  */
	function Filter(identifier) {
		_classCallCheck(this, Filter);

		cov_clot6lh34.f[0]++;
		cov_clot6lh34.s[3]++;
		return _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, identifier, Type.FILTER, Occurrence.ANY));
	}

	return Filter;
}((Plugin));

cov_clot6lh34.s[4]++;


module.exports = Filter;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2ganksrncc = function () {
	var path = '/var/www/src/plugins/crypto/filter.js',
	    hash = 'beb641ccc9dad66cb67aaf450368ea73737545a7',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/crypto/filter.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 16
				},
				end: {
					line: 1,
					column: 36
				}
			},
			'1': {
				start: {
					line: 2,
					column: 20
				},
				end: {
					line: 2,
					column: 53
				}
			},
			'2': {
				start: {
					line: 3,
					column: 16
				},
				end: {
					line: 3,
					column: 45
				}
			},
			'3': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 10,
					column: 27
				}
			},
			'4': {
				start: {
					line: 19,
					column: 24
				},
				end: {
					line: 19,
					column: 67
				}
			},
			'5': {
				start: {
					line: 20,
					column: 18
				},
				end: {
					line: 20,
					column: 44
				}
			},
			'6': {
				start: {
					line: 21,
					column: 2
				},
				end: {
					line: 23,
					column: 3
				}
			},
			'7': {
				start: {
					line: 22,
					column: 3
				},
				end: {
					line: 22,
					column: 67
				}
			},
			'8': {
				start: {
					line: 24,
					column: 26
				},
				end: {
					line: 24,
					column: 36
				}
			},
			'9': {
				start: {
					line: 25,
					column: 24
				},
				end: {
					line: 25,
					column: 56
				}
			},
			'10': {
				start: {
					line: 26,
					column: 20
				},
				end: {
					line: 26,
					column: 62
				}
			},
			'11': {
				start: {
					line: 31,
					column: 2
				},
				end: {
					line: 31,
					column: 57
				}
			},
			'12': {
				start: {
					line: 33,
					column: 2
				},
				end: {
					line: 44,
					column: 3
				}
			},
			'13': {
				start: {
					line: 34,
					column: 21
				},
				end: {
					line: 34,
					column: 66
				}
			},
			'14': {
				start: {
					line: 41,
					column: 3
				},
				end: {
					line: 41,
					column: 26
				}
			},
			'15': {
				start: {
					line: 43,
					column: 3
				},
				end: {
					line: 43,
					column: 67
				}
			},
			'16': {
				start: {
					line: 51,
					column: 0
				},
				end: {
					line: 51,
					column: 71
				}
			},
			'17': {
				start: {
					line: 56,
					column: 0
				},
				end: {
					line: 56,
					column: 29
				}
			},
			'18': {
				start: {
					line: 63,
					column: 0
				},
				end: {
					line: 65,
					column: 2
				}
			},
			'19': {
				start: {
					line: 64,
					column: 1
				},
				end: {
					line: 64,
					column: 38
				}
			},
			'20': {
				start: {
					line: 72,
					column: 0
				},
				end: {
					line: 74,
					column: 2
				}
			},
			'21': {
				start: {
					line: 73,
					column: 1
				},
				end: {
					line: 73,
					column: 32
				}
			},
			'22': {
				start: {
					line: 81,
					column: 0
				},
				end: {
					line: 83,
					column: 2
				}
			},
			'23': {
				start: {
					line: 82,
					column: 1
				},
				end: {
					line: 82,
					column: 41
				}
			},
			'24': {
				start: {
					line: 90,
					column: 0
				},
				end: {
					line: 95,
					column: 2
				}
			},
			'25': {
				start: {
					line: 92,
					column: 1
				},
				end: {
					line: 94,
					column: 4
				}
			},
			'26': {
				start: {
					line: 93,
					column: 2
				},
				end: {
					line: 93,
					column: 46
				}
			},
			'27': {
				start: {
					line: 102,
					column: 0
				},
				end: {
					line: 108,
					column: 2
				}
			},
			'28': {
				start: {
					line: 103,
					column: 15
				},
				end: {
					line: 103,
					column: 57
				}
			},
			'29': {
				start: {
					line: 105,
					column: 1
				},
				end: {
					line: 107,
					column: 2
				}
			},
			'30': {
				start: {
					line: 106,
					column: 2
				},
				end: {
					line: 106,
					column: 43
				}
			},
			'31': {
				start: {
					line: 115,
					column: 0
				},
				end: {
					line: 119,
					column: 2
				}
			},
			'32': {
				start: {
					line: 116,
					column: 1
				},
				end: {
					line: 118,
					column: 4
				}
			},
			'33': {
				start: {
					line: 117,
					column: 2
				},
				end: {
					line: 117,
					column: 49
				}
			},
			'34': {
				start: {
					line: 127,
					column: 0
				},
				end: {
					line: 131,
					column: 2
				}
			},
			'35': {
				start: {
					line: 128,
					column: 1
				},
				end: {
					line: 130,
					column: 4
				}
			},
			'36': {
				start: {
					line: 129,
					column: 2
				},
				end: {
					line: 129,
					column: 28
				}
			},
			'37': {
				start: {
					line: 133,
					column: 0
				},
				end: {
					line: 133,
					column: 30
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 15
					},
					end: {
						line: 11,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 18,
						column: 1
					},
					end: {
						line: 18,
						column: 2
					}
				},
				loc: {
					start: {
						line: 18,
						column: 22
					},
					end: {
						line: 45,
						column: 2
					}
				},
				line: 18
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 63,
						column: 36
					},
					end: {
						line: 63,
						column: 37
					}
				},
				loc: {
					start: {
						line: 63,
						column: 50
					},
					end: {
						line: 65,
						column: 1
					}
				},
				line: 63
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 72,
						column: 36
					},
					end: {
						line: 72,
						column: 37
					}
				},
				loc: {
					start: {
						line: 72,
						column: 42
					},
					end: {
						line: 74,
						column: 1
					}
				},
				line: 72
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 81,
						column: 35
					},
					end: {
						line: 81,
						column: 36
					}
				},
				loc: {
					start: {
						line: 81,
						column: 48
					},
					end: {
						line: 83,
						column: 1
					}
				},
				line: 81
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 90,
						column: 39
					},
					end: {
						line: 90,
						column: 40
					}
				},
				loc: {
					start: {
						line: 90,
						column: 53
					},
					end: {
						line: 95,
						column: 1
					}
				},
				line: 90
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 92,
						column: 20
					},
					end: {
						line: 92,
						column: 21
					}
				},
				loc: {
					start: {
						line: 92,
						column: 33
					},
					end: {
						line: 94,
						column: 2
					}
				},
				line: 92
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 102,
						column: 38
					},
					end: {
						line: 102,
						column: 39
					}
				},
				loc: {
					start: {
						line: 102,
						column: 51
					},
					end: {
						line: 108,
						column: 1
					}
				},
				line: 102
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 115,
						column: 42
					},
					end: {
						line: 115,
						column: 43
					}
				},
				loc: {
					start: {
						line: 115,
						column: 56
					},
					end: {
						line: 119,
						column: 1
					}
				},
				line: 115
			},
			'9': {
				name: '(anonymous_9)',
				decl: {
					start: {
						line: 116,
						column: 20
					},
					end: {
						line: 116,
						column: 21
					}
				},
				loc: {
					start: {
						line: 116,
						column: 33
					},
					end: {
						line: 118,
						column: 2
					}
				},
				line: 116
			},
			'10': {
				name: '(anonymous_10)',
				decl: {
					start: {
						line: 127,
						column: 34
					},
					end: {
						line: 127,
						column: 35
					}
				},
				loc: {
					start: {
						line: 127,
						column: 47
					},
					end: {
						line: 131,
						column: 1
					}
				},
				line: 127
			},
			'11': {
				name: '(anonymous_11)',
				decl: {
					start: {
						line: 128,
						column: 37
					},
					end: {
						line: 128,
						column: 38
					}
				},
				loc: {
					start: {
						line: 128,
						column: 45
					},
					end: {
						line: 130,
						column: 2
					}
				},
				line: 128
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 21,
						column: 2
					},
					end: {
						line: 23,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 21,
						column: 2
					},
					end: {
						line: 23,
						column: 3
					}
				}, {
					start: {
						line: 21,
						column: 2
					},
					end: {
						line: 23,
						column: 3
					}
				}],
				line: 21
			},
			'1': {
				loc: {
					start: {
						line: 33,
						column: 2
					},
					end: {
						line: 44,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 33,
						column: 2
					},
					end: {
						line: 44,
						column: 3
					}
				}, {
					start: {
						line: 33,
						column: 2
					},
					end: {
						line: 44,
						column: 3
					}
				}],
				line: 33
			},
			'2': {
				loc: {
					start: {
						line: 51,
						column: 29
					},
					end: {
						line: 51,
						column: 70
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 51,
						column: 29
					},
					end: {
						line: 51,
						column: 55
					}
				}, {
					start: {
						line: 51,
						column: 59
					},
					end: {
						line: 51,
						column: 70
					}
				}],
				line: 51
			},
			'3': {
				loc: {
					start: {
						line: 105,
						column: 1
					},
					end: {
						line: 107,
						column: 2
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 105,
						column: 1
					},
					end: {
						line: 107,
						column: 2
					}
				}, {
					start: {
						line: 105,
						column: 1
					},
					end: {
						line: 107,
						column: 2
					}
				}],
				line: 105
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0,
			'36': 0,
			'37': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = (cov_2ganksrncc.s[0]++, __webpack_require__(11));
var Identifier = (cov_2ganksrncc.s[1]++, __webpack_require__(0));
var Store = (cov_2ganksrncc.s[2]++, __webpack_require__(6));

var CryptoFilter = function (_ref) {
	_inherits(CryptoFilter, _ref);

	/**
  * Constructs the object.
  */
	function CryptoFilter() {
		_classCallCheck(this, CryptoFilter);

		cov_2ganksrncc.f[0]++;
		cov_2ganksrncc.s[3]++;
		return _possibleConstructorReturn(this, (CryptoFilter.__proto__ || Object.getPrototypeOf(CryptoFilter)).call(this, Identifier.CRYPTO));
	}

	/**
  * Job to realise on a mediaObject.
  *
  * @param      {MediaObject}  mediaObject  The media object
  */


	_createClass(CryptoFilter, [{
		key: 'process',
		value: function process(mediaObject) {
			cov_2ganksrncc.f[1]++;

			var dataCryptoKey = (cov_2ganksrncc.s[4]++, mediaObject.getAttribute('data-crypto-key'));
			var schemes = (cov_2ganksrncc.s[5]++, /\w+:/.exec(dataCryptoKey));
			cov_2ganksrncc.s[6]++;
			if (schemes === null) {
				cov_2ganksrncc.b[0][0]++;
				cov_2ganksrncc.s[7]++;

				throw new Error('No algorithm scheme found in data-crypto-key');
			} else {
				cov_2ganksrncc.b[0][1]++;
			}
			var algorithmScheme = (cov_2ganksrncc.s[8]++, schemes[0]); /* Takes the first encountered scheme */
			var algorithmName = (cov_2ganksrncc.s[9]++, algorithmScheme.replace(':', ''));
			var stringKey = (cov_2ganksrncc.s[10]++, dataCryptoKey.replace(algorithmScheme, ''));

			/**
    * Replaces data-crypto-key by the key part only (less algorithm scheme).
    */
			cov_2ganksrncc.s[11]++;
			mediaObject.setAttribute('data-crypto-key', stringKey);

			cov_2ganksrncc.s[12]++;
			if (CryptoFilter.functionStore.isStored(algorithmName)) {
				cov_2ganksrncc.b[1][0]++;

				var algorithm = (cov_2ganksrncc.s[13]++, CryptoFilter.functionStore.get(algorithmName));

				/**
     * Runs any algorithm on media object.
     * The algorithm HAVE TO pay back the media object to
     * the processing engine when its job is done.
     */
				cov_2ganksrncc.s[14]++;
				algorithm(mediaObject);
			} else {
				cov_2ganksrncc.b[1][1]++;
				cov_2ganksrncc.s[15]++;

				throw new Error('Algorithm ' + algorithmName + ' is not registered');
			}
		}
	}]);

	return CryptoFilter;
}((Filter));

/**
 * Function store to register every needed algorithms as a named callback.
 */


cov_2ganksrncc.s[16]++;
CryptoFilter.functionStore = (cov_2ganksrncc.b[2][0]++, CryptoFilter.functionStore) || (cov_2ganksrncc.b[2][1]++, new Store());

/**
 * Allowed media types.
 */
cov_2ganksrncc.s[17]++;
CryptoFilter.mediaTypes = [];

/**
 * Sets the allowed media types.
 *
 * @param      {Array<string>}  mediaTypes  The media types
 */
cov_2ganksrncc.s[18]++;
CryptoFilter.setAllowedMediaTypes = function (mediaTypes) {
	cov_2ganksrncc.f[2]++;
	cov_2ganksrncc.s[19]++;

	CryptoFilter.mediaTypes = mediaTypes;
};

/**
 * Gets the allowed media types.
 *
 * @return     {Array<string>}  The allowed media types.
 */
cov_2ganksrncc.s[20]++;
CryptoFilter.getAllowedMediaTypes = function () {
	cov_2ganksrncc.f[3]++;
	cov_2ganksrncc.s[21]++;

	return CryptoFilter.mediaTypes;
};

/**
 * Adds an allowed media type.
 *
 * @param      {string}  mediaType  The media type
 */
cov_2ganksrncc.s[22]++;
CryptoFilter.addAllowedMediaType = function (mediaType) {
	cov_2ganksrncc.f[4]++;
	cov_2ganksrncc.s[23]++;

	CryptoFilter.mediaTypes.push(mediaType);
};

/**
 * Adds all allowed media types.
 *
 * @param      {Array<string>}  mediaTypes  The media types
 */
cov_2ganksrncc.s[24]++;
CryptoFilter.addAllAllowedMediaTypes = function (mediaTypes) {
	cov_2ganksrncc.f[5]++;
	cov_2ganksrncc.s[25]++;

	// CryptoFilter.mediaTypes.push(...mediaTypes); // ES7 variant
	mediaTypes.forEach(function (mediaType) {
		cov_2ganksrncc.f[6]++;
		cov_2ganksrncc.s[26]++;

		CryptoFilter.addAllowedMediaType(mediaType);
	});
};

/**
 * Removes an allowed media type.
 *
 * @param      {string}  mediaType  The media type
 */
cov_2ganksrncc.s[27]++;
CryptoFilter.removeAllowedMediaType = function (mediaType) {
	cov_2ganksrncc.f[7]++;

	var index = (cov_2ganksrncc.s[28]++, CryptoFilter.mediaTypes.indexOf(mediaType));

	cov_2ganksrncc.s[29]++;
	if (index >= 0) {
		cov_2ganksrncc.b[3][0]++;
		cov_2ganksrncc.s[30]++;

		CryptoFilter.mediaTypes.splice(index, 1);
	} else {
		cov_2ganksrncc.b[3][1]++;
	}
};

/**
 * Removes all allowed media type.
 *
 * @param      {Array<string>}  mediaTypes  The media types
 */
cov_2ganksrncc.s[31]++;
CryptoFilter.removeAllAllowedMediaTypes = function (mediaTypes) {
	cov_2ganksrncc.f[8]++;
	cov_2ganksrncc.s[32]++;

	mediaTypes.forEach(function (mediaType) {
		cov_2ganksrncc.f[9]++;
		cov_2ganksrncc.s[33]++;

		CryptoFilter.removeAllowedMediaType(mediaType);
	});
};

/**
 * Determines if allowed media type.
 *
 * @param      {string}   mediaType  The media type
 * @return     {boolean}  True if allowed media type, False otherwise.
 */
cov_2ganksrncc.s[34]++;
CryptoFilter.isAllowedMediaType = function (mediaType) {
	cov_2ganksrncc.f[10]++;
	cov_2ganksrncc.s[35]++;

	return CryptoFilter.mediaTypes.some(function (type) {
		cov_2ganksrncc.f[11]++;
		cov_2ganksrncc.s[36]++;

		return type === mediaType;
	});
};

cov_2ganksrncc.s[37]++;
module.exports = CryptoFilter;

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1x9wwb61d7 = function () {
	var path = '/var/www/src/core/configuration.js',
	    hash = '2899d7fa518de8767dfb6db84394e02cc56af7ee',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/core/configuration.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 17
				},
				end: {
					line: 1,
					column: 47
				}
			},
			'1': {
				start: {
					line: 2,
					column: 15
				},
				end: {
					line: 2,
					column: 43
				}
			},
			'2': {
				start: {
					line: 3,
					column: 16
				},
				end: {
					line: 3,
					column: 45
				}
			},
			'3': {
				start: {
					line: 4,
					column: 18
				},
				end: {
					line: 4,
					column: 49
				}
			},
			'4': {
				start: {
					line: 5,
					column: 15
				},
				end: {
					line: 5,
					column: 43
				}
			},
			'5': {
				start: {
					line: 6,
					column: 14
				},
				end: {
					line: 6,
					column: 41
				}
			},
			'6': {
				start: {
					line: 8,
					column: 19
				},
				end: {
					line: 8,
					column: 49
				}
			},
			'7': {
				start: {
					line: 9,
					column: 13
				},
				end: {
					line: 9,
					column: 37
				}
			},
			'8': {
				start: {
					line: 18,
					column: 2
				},
				end: {
					line: 20,
					column: 5
				}
			},
			'9': {
				start: {
					line: 19,
					column: 3
				},
				end: {
					line: 19,
					column: 34
				}
			},
			'10': {
				start: {
					line: 30,
					column: 2
				},
				end: {
					line: 34,
					column: 3
				}
			},
			'11': {
				start: {
					line: 31,
					column: 3
				},
				end: {
					line: 31,
					column: 29
				}
			},
			'12': {
				start: {
					line: 32,
					column: 9
				},
				end: {
					line: 34,
					column: 3
				}
			},
			'13': {
				start: {
					line: 33,
					column: 3
				},
				end: {
					line: 33,
					column: 29
				}
			},
			'14': {
				start: {
					line: 36,
					column: 2
				},
				end: {
					line: 36,
					column: 63
				}
			},
			'15': {
				start: {
					line: 46,
					column: 2
				},
				end: {
					line: 50,
					column: 3
				}
			},
			'16': {
				start: {
					line: 47,
					column: 3
				},
				end: {
					line: 47,
					column: 29
				}
			},
			'17': {
				start: {
					line: 48,
					column: 9
				},
				end: {
					line: 50,
					column: 3
				}
			},
			'18': {
				start: {
					line: 49,
					column: 3
				},
				end: {
					line: 49,
					column: 29
				}
			},
			'19': {
				start: {
					line: 51,
					column: 2
				},
				end: {
					line: 51,
					column: 38
				}
			},
			'20': {
				start: {
					line: 60,
					column: 2
				},
				end: {
					line: 60,
					column: 32
				}
			},
			'21': {
				start: {
					line: 69,
					column: 2
				},
				end: {
					line: 71,
					column: 3
				}
			},
			'22': {
				start: {
					line: 70,
					column: 3
				},
				end: {
					line: 70,
					column: 13
				}
			},
			'23': {
				start: {
					line: 72,
					column: 2
				},
				end: {
					line: 106,
					column: 51
				}
			},
			'24': {
				start: {
					line: 73,
					column: 3
				},
				end: {
					line: 105,
					column: 6
				}
			},
			'25': {
				start: {
					line: 76,
					column: 4
				},
				end: {
					line: 95,
					column: 5
				}
			},
			'26': {
				start: {
					line: 78,
					column: 6
				},
				end: {
					line: 78,
					column: 40
				}
			},
			'27': {
				start: {
					line: 79,
					column: 6
				},
				end: {
					line: 79,
					column: 12
				}
			},
			'28': {
				start: {
					line: 81,
					column: 6
				},
				end: {
					line: 81,
					column: 38
				}
			},
			'29': {
				start: {
					line: 82,
					column: 6
				},
				end: {
					line: 82,
					column: 12
				}
			},
			'30': {
				start: {
					line: 84,
					column: 6
				},
				end: {
					line: 84,
					column: 41
				}
			},
			'31': {
				start: {
					line: 85,
					column: 6
				},
				end: {
					line: 85,
					column: 12
				}
			},
			'32': {
				start: {
					line: 87,
					column: 6
				},
				end: {
					line: 87,
					column: 39
				}
			},
			'33': {
				start: {
					line: 88,
					column: 6
				},
				end: {
					line: 88,
					column: 12
				}
			},
			'34': {
				start: {
					line: 90,
					column: 6
				},
				end: {
					line: 90,
					column: 43
				}
			},
			'35': {
				start: {
					line: 91,
					column: 6
				},
				end: {
					line: 91,
					column: 12
				}
			},
			'36': {
				start: {
					line: 93,
					column: 6
				},
				end: {
					line: 93,
					column: 44
				}
			},
			'37': {
				start: {
					line: 94,
					column: 6
				},
				end: {
					line: 94,
					column: 12
				}
			},
			'38': {
				start: {
					line: 96,
					column: 4
				},
				end: {
					line: 102,
					column: 7
				}
			},
			'39': {
				start: {
					line: 97,
					column: 19
				},
				end: {
					line: 97,
					column: 60
				}
			},
			'40': {
				start: {
					line: 98,
					column: 5
				},
				end: {
					line: 101,
					column: 32
				}
			},
			'41': {
				start: {
					line: 99,
					column: 28
				},
				end: {
					line: 101,
					column: 7
				}
			},
			'42': {
				start: {
					line: 100,
					column: 7
				},
				end: {
					line: 100,
					column: 43
				}
			},
			'43': {
				start: {
					line: 104,
					column: 4
				},
				end: {
					line: 104,
					column: 18
				}
			},
			'44': {
				start: {
					line: 106,
					column: 30
				},
				end: {
					line: 106,
					column: 49
				}
			},
			'45': {
				start: {
					line: 110,
					column: 28
				},
				end: {
					line: 110,
					column: 63
				}
			},
			'46': {
				start: {
					line: 112,
					column: 2
				},
				end: {
					line: 119,
					column: 5
				}
			},
			'47': {
				start: {
					line: 113,
					column: 3
				},
				end: {
					line: 113,
					column: 50
				}
			},
			'48': {
				start: {
					line: 115,
					column: 3
				},
				end: {
					line: 117,
					column: 4
				}
			},
			'49': {
				start: {
					line: 116,
					column: 4
				},
				end: {
					line: 116,
					column: 25
				}
			},
			'50': {
				start: {
					line: 118,
					column: 3
				},
				end: {
					line: 118,
					column: 15
				}
			},
			'51': {
				start: {
					line: 123,
					column: 0
				},
				end: {
					line: 123,
					column: 31
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 17,
						column: 1
					},
					end: {
						line: 17,
						column: 2
					}
				},
				loc: {
					start: {
						line: 17,
						column: 28
					},
					end: {
						line: 21,
						column: 2
					}
				},
				line: 17
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 18,
						column: 37
					},
					end: {
						line: 18,
						column: 38
					}
				},
				loc: {
					start: {
						line: 18,
						column: 44
					},
					end: {
						line: 20,
						column: 3
					}
				},
				line: 18
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 29,
						column: 1
					},
					end: {
						line: 29,
						column: 2
					}
				},
				loc: {
					start: {
						line: 29,
						column: 23
					},
					end: {
						line: 37,
						column: 2
					}
				},
				line: 29
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 45,
						column: 1
					},
					end: {
						line: 45,
						column: 2
					}
				},
				loc: {
					start: {
						line: 45,
						column: 27
					},
					end: {
						line: 52,
						column: 2
					}
				},
				line: 45
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 59,
						column: 1
					},
					end: {
						line: 59,
						column: 2
					}
				},
				loc: {
					start: {
						line: 59,
						column: 18
					},
					end: {
						line: 61,
						column: 2
					}
				},
				line: 59
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 68,
						column: 1
					},
					end: {
						line: 68,
						column: 2
					}
				},
				loc: {
					start: {
						line: 68,
						column: 14
					},
					end: {
						line: 107,
						column: 2
					}
				},
				line: 68
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 72,
						column: 39
					},
					end: {
						line: 72,
						column: 40
					}
				},
				loc: {
					start: {
						line: 72,
						column: 53
					},
					end: {
						line: 106,
						column: 3
					}
				},
				line: 72
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 73,
						column: 52
					},
					end: {
						line: 73,
						column: 53
					}
				},
				loc: {
					start: {
						line: 73,
						column: 60
					},
					end: {
						line: 105,
						column: 4
					}
				},
				line: 73
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 96,
						column: 56
					},
					end: {
						line: 96,
						column: 57
					}
				},
				loc: {
					start: {
						line: 96,
						column: 69
					},
					end: {
						line: 102,
						column: 5
					}
				},
				line: 96
			},
			'9': {
				name: '(anonymous_9)',
				decl: {
					start: {
						line: 99,
						column: 7
					},
					end: {
						line: 99,
						column: 8
					}
				},
				loc: {
					start: {
						line: 99,
						column: 28
					},
					end: {
						line: 101,
						column: 7
					}
				},
				line: 99
			},
			'10': {
				name: '(anonymous_10)',
				decl: {
					start: {
						line: 99,
						column: 28
					},
					end: {
						line: 99,
						column: 29
					}
				},
				loc: {
					start: {
						line: 99,
						column: 43
					},
					end: {
						line: 101,
						column: 7
					}
				},
				line: 99
			},
			'11': {
				name: '(anonymous_11)',
				decl: {
					start: {
						line: 106,
						column: 12
					},
					end: {
						line: 106,
						column: 13
					}
				},
				loc: {
					start: {
						line: 106,
						column: 30
					},
					end: {
						line: 106,
						column: 49
					}
				},
				line: 106
			},
			'12': {
				name: '(anonymous_12)',
				decl: {
					start: {
						line: 109,
						column: 1
					},
					end: {
						line: 109,
						column: 2
					}
				},
				loc: {
					start: {
						line: 109,
						column: 20
					},
					end: {
						line: 120,
						column: 2
					}
				},
				line: 109
			},
			'13': {
				name: '(anonymous_13)',
				decl: {
					start: {
						line: 112,
						column: 34
					},
					end: {
						line: 112,
						column: 35
					}
				},
				loc: {
					start: {
						line: 112,
						column: 44
					},
					end: {
						line: 114,
						column: 3
					}
				},
				line: 112
			},
			'14': {
				name: '(anonymous_14)',
				decl: {
					start: {
						line: 114,
						column: 12
					},
					end: {
						line: 114,
						column: 13
					}
				},
				loc: {
					start: {
						line: 114,
						column: 37
					},
					end: {
						line: 119,
						column: 3
					}
				},
				line: 114
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 30,
						column: 2
					},
					end: {
						line: 34,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 30,
						column: 2
					},
					end: {
						line: 34,
						column: 3
					}
				}, {
					start: {
						line: 30,
						column: 2
					},
					end: {
						line: 34,
						column: 3
					}
				}],
				line: 30
			},
			'1': {
				loc: {
					start: {
						line: 32,
						column: 9
					},
					end: {
						line: 34,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 32,
						column: 9
					},
					end: {
						line: 34,
						column: 3
					}
				}, {
					start: {
						line: 32,
						column: 9
					},
					end: {
						line: 34,
						column: 3
					}
				}],
				line: 32
			},
			'2': {
				loc: {
					start: {
						line: 46,
						column: 2
					},
					end: {
						line: 50,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 46,
						column: 2
					},
					end: {
						line: 50,
						column: 3
					}
				}, {
					start: {
						line: 46,
						column: 2
					},
					end: {
						line: 50,
						column: 3
					}
				}],
				line: 46
			},
			'3': {
				loc: {
					start: {
						line: 48,
						column: 9
					},
					end: {
						line: 50,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 48,
						column: 9
					},
					end: {
						line: 50,
						column: 3
					}
				}, {
					start: {
						line: 48,
						column: 9
					},
					end: {
						line: 50,
						column: 3
					}
				}],
				line: 48
			},
			'4': {
				loc: {
					start: {
						line: 60,
						column: 9
					},
					end: {
						line: 60,
						column: 31
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 60,
						column: 9
					},
					end: {
						line: 60,
						column: 25
					}
				}, {
					start: {
						line: 60,
						column: 29
					},
					end: {
						line: 60,
						column: 31
					}
				}],
				line: 60
			},
			'5': {
				loc: {
					start: {
						line: 69,
						column: 2
					},
					end: {
						line: 71,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 69,
						column: 2
					},
					end: {
						line: 71,
						column: 3
					}
				}, {
					start: {
						line: 69,
						column: 2
					},
					end: {
						line: 71,
						column: 3
					}
				}],
				line: 69
			},
			'6': {
				loc: {
					start: {
						line: 76,
						column: 4
					},
					end: {
						line: 95,
						column: 5
					}
				},
				type: 'switch',
				locations: [{
					start: {
						line: 77,
						column: 5
					},
					end: {
						line: 79,
						column: 12
					}
				}, {
					start: {
						line: 80,
						column: 5
					},
					end: {
						line: 82,
						column: 12
					}
				}, {
					start: {
						line: 83,
						column: 5
					},
					end: {
						line: 85,
						column: 12
					}
				}, {
					start: {
						line: 86,
						column: 5
					},
					end: {
						line: 88,
						column: 12
					}
				}, {
					start: {
						line: 89,
						column: 5
					},
					end: {
						line: 91,
						column: 12
					}
				}, {
					start: {
						line: 92,
						column: 5
					},
					end: {
						line: 94,
						column: 12
					}
				}],
				line: 76
			},
			'7': {
				loc: {
					start: {
						line: 98,
						column: 25
					},
					end: {
						line: 101,
						column: 31
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 99,
						column: 6
					},
					end: {
						line: 101,
						column: 23
					}
				}, {
					start: {
						line: 101,
						column: 26
					},
					end: {
						line: 101,
						column: 31
					}
				}],
				line: 98
			},
			'8': {
				loc: {
					start: {
						line: 98,
						column: 26
					},
					end: {
						line: 98,
						column: 80
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 98,
						column: 26
					},
					end: {
						line: 98,
						column: 53
					}
				}, {
					start: {
						line: 98,
						column: 57
					},
					end: {
						line: 98,
						column: 80
					}
				}],
				line: 98
			},
			'9': {
				loc: {
					start: {
						line: 115,
						column: 3
					},
					end: {
						line: 117,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 115,
						column: 3
					},
					end: {
						line: 117,
						column: 4
					}
				}, {
					start: {
						line: 115,
						column: 3
					},
					end: {
						line: 117,
						column: 4
					}
				}],
				line: 115
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0,
			'36': 0,
			'37': 0,
			'38': 0,
			'39': 0,
			'40': 0,
			'41': 0,
			'42': 0,
			'43': 0,
			'44': 0,
			'45': 0,
			'46': 0,
			'47': 0,
			'48': 0,
			'49': 0,
			'50': 0,
			'51': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0],
			'4': [0, 0],
			'5': [0, 0],
			'6': [0, 0, 0, 0, 0, 0],
			'7': [0, 0],
			'8': [0, 0],
			'9': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = (cov_1x9wwb61d7.s[0]++, __webpack_require__(4));
var Filter = (cov_1x9wwb61d7.s[1]++, __webpack_require__(11));
var Matcher = (cov_1x9wwb61d7.s[2]++, __webpack_require__(2));
var Sanitizer = (cov_1x9wwb61d7.s[3]++, __webpack_require__(15));
var Plugin = (cov_1x9wwb61d7.s[4]++, __webpack_require__(3));
var Group = (cov_1x9wwb61d7.s[5]++, __webpack_require__(26));

var Permission = (cov_1x9wwb61d7.s[6]++, __webpack_require__(27));
var Type = (cov_1x9wwb61d7.s[7]++, __webpack_require__(1));

var Configuration = function () {
	/**
  * Constructs the object.
  *
  * @param      {Object}  configuration  The configuration
  */
	function Configuration(configuration) {
		var _this = this;

		_classCallCheck(this, Configuration);

		cov_1x9wwb61d7.f[0]++;
		cov_1x9wwb61d7.s[8]++;

		Object.keys(configuration).forEach(function (key) {
			cov_1x9wwb61d7.f[1]++;
			cov_1x9wwb61d7.s[9]++;

			_this[key] = configuration[key];
		});
	}

	/**
  * Determines if allowed.
  *
  * @param      {<type>}   identifier  The identifier
  * @return     {boolean}  True if allowed, False otherwise.
  */


	_createClass(Configuration, [{
		key: 'isAllowed',
		value: function isAllowed(identifier) {
			cov_1x9wwb61d7.f[2]++;
			cov_1x9wwb61d7.s[10]++;

			if (!this.permissions) {
				cov_1x9wwb61d7.b[0][0]++;
				cov_1x9wwb61d7.s[11]++;

				return Permission.ALLOWED;
			} else {
					cov_1x9wwb61d7.b[0][1]++;
					cov_1x9wwb61d7.s[12]++;
					if (!this.permissions[identifier]) {
						cov_1x9wwb61d7.b[1][0]++;
						cov_1x9wwb61d7.s[13]++;

						return Permission.ALLOWED;
					} else {
						cov_1x9wwb61d7.b[1][1]++;
					}
				}cov_1x9wwb61d7.s[14]++;
			return this.permissions[identifier] !== Permission.FORBIDDEN;
		}

		/**
   * Gets the permission.
   *
   * @param      {Identifier|string}  identifier  The identifier
   * @return     {Permission|string}  The permission.
   */

	}, {
		key: 'getPermission',
		value: function getPermission(identifier) {
			cov_1x9wwb61d7.f[3]++;
			cov_1x9wwb61d7.s[15]++;

			if (!this.permissions) {
				cov_1x9wwb61d7.b[2][0]++;
				cov_1x9wwb61d7.s[16]++;

				return Permission.ALLOWED;
			} else {
					cov_1x9wwb61d7.b[2][1]++;
					cov_1x9wwb61d7.s[17]++;
					if (!this.permissions[identifier]) {
						cov_1x9wwb61d7.b[3][0]++;
						cov_1x9wwb61d7.s[18]++;

						return Permission.ALLOWED;
					} else {
						cov_1x9wwb61d7.b[3][1]++;
					}
				}cov_1x9wwb61d7.s[19]++;
			return this.permissions[identifier];
		}

		/**
   * Gets the object permissions for each identifier.
   *
   * @return     {Object}  The permissions.
   */

	}, {
		key: 'getPermissions',
		value: function getPermissions() {
			cov_1x9wwb61d7.f[4]++;
			cov_1x9wwb61d7.s[20]++;

			return (cov_1x9wwb61d7.b[4][0]++, this.permissions) || (cov_1x9wwb61d7.b[4][1]++, {});
		}

		/**
   * Gets instanciated plugins from the configuration definition.
   *
   * @return     {Array<Plugin>}  The plugins.
   */

	}, {
		key: 'getPlugins',
		value: function getPlugins() {
			var _this2 = this;

			cov_1x9wwb61d7.f[5]++;
			cov_1x9wwb61d7.s[21]++;

			if (!this.plugins) {
				cov_1x9wwb61d7.b[5][0]++;
				cov_1x9wwb61d7.s[22]++;

				return [];
			} else {
				cov_1x9wwb61d7.b[5][1]++;
			}
			cov_1x9wwb61d7.s[23]++;
			return Object.keys(this.plugins).map(function (identifier) {
				cov_1x9wwb61d7.f[6]++;
				cov_1x9wwb61d7.s[24]++;

				return Object.keys(_this2.plugins[identifier]).map(function (type) {
					cov_1x9wwb61d7.f[7]++;

					var plugin = void 0;

					cov_1x9wwb61d7.s[25]++;
					switch (type) {
						case Type.RENDERER:
							cov_1x9wwb61d7.b[6][0]++;
							cov_1x9wwb61d7.s[26]++;

							plugin = new Renderer(identifier);
							cov_1x9wwb61d7.s[27]++;
							break;
						case Type.FILTER:
							cov_1x9wwb61d7.b[6][1]++;
							cov_1x9wwb61d7.s[28]++;

							plugin = new Filter(identifier);
							cov_1x9wwb61d7.s[29]++;
							break;
						case Type.SANITIZER:
							cov_1x9wwb61d7.b[6][2]++;
							cov_1x9wwb61d7.s[30]++;

							plugin = new Sanitizer(identifier);
							cov_1x9wwb61d7.s[31]++;
							break;
						case Type.MATCHER:
							cov_1x9wwb61d7.b[6][3]++;
							cov_1x9wwb61d7.s[32]++;

							plugin = new Matcher(identifier);
							cov_1x9wwb61d7.s[33]++;
							break;
						case Type.GROUP:
							cov_1x9wwb61d7.b[6][4]++;
							cov_1x9wwb61d7.s[34]++;

							plugin = new Group(identifier, type);
							cov_1x9wwb61d7.s[35]++;
							break;
						default:
							cov_1x9wwb61d7.b[6][5]++;
							cov_1x9wwb61d7.s[36]++;

							plugin = new Plugin(identifier, type);
							cov_1x9wwb61d7.s[37]++;
							break;
					}
					cov_1x9wwb61d7.s[38]++;
					Object.keys(_this2.plugins[identifier][type]).forEach(function (attribute) {
						cov_1x9wwb61d7.f[8]++;

						var value = (cov_1x9wwb61d7.s[39]++, _this2.plugins[identifier][type][attribute]);
						cov_1x9wwb61d7.s[40]++;
						plugin[attribute] = (cov_1x9wwb61d7.b[8][0]++, typeof value === 'function') && (cov_1x9wwb61d7.b[8][1]++, attribute === 'process') ? (cov_1x9wwb61d7.b[7][0]++, function (plugin, process) {
							cov_1x9wwb61d7.f[9]++;
							cov_1x9wwb61d7.s[41]++;
							return function (mediaObject) {
								cov_1x9wwb61d7.f[10]++;
								cov_1x9wwb61d7.s[42]++;

								return process(plugin, mediaObject);
							};
						}(plugin, value)) : (cov_1x9wwb61d7.b[7][1]++, value);
					});

					cov_1x9wwb61d7.s[43]++;
					return plugin;
				});
			}).reduce(function (plugin, next) {
				cov_1x9wwb61d7.f[11]++;
				cov_1x9wwb61d7.s[44]++;
				return plugin.concat(next);
			});
		}
	}, {
		key: 'getDefaultPlugin',
		value: function getDefaultPlugin() {
			cov_1x9wwb61d7.f[12]++;

			var defaultPluginName = (cov_1x9wwb61d7.s[45]++, this.processingEngine.defaultPlugin);

			cov_1x9wwb61d7.s[46]++;
			return this.getPlugins().filter(function (plugin) {
				cov_1x9wwb61d7.f[13]++;
				cov_1x9wwb61d7.s[47]++;

				return plugin.identifier === defaultPluginName;
			}).reduce(function (defaultPlugin, next) {
				cov_1x9wwb61d7.f[14]++;
				cov_1x9wwb61d7.s[48]++;

				if (defaultPlugin.getType() !== Type.MATCHER) {
					cov_1x9wwb61d7.b[9][0]++;
					cov_1x9wwb61d7.s[49]++;

					return defaultPlugin;
				} else {
					cov_1x9wwb61d7.b[9][1]++;
				}
				cov_1x9wwb61d7.s[50]++;
				return next;
			});
		}
	}]);

	return Configuration;
}();

cov_1x9wwb61d7.s[51]++;


module.exports = Configuration;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_5dz4t1jhj = function () {
	var path = '/var/www/src/plugins/sanitizer.js',
	    hash = '4f33a69e2955ce57f6399d43898a0e6707f564d2',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/sanitizer.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 15
				},
				end: {
					line: 1,
					column: 39
				}
			},
			'1': {
				start: {
					line: 2,
					column: 20
				},
				end: {
					line: 2,
					column: 50
				}
			},
			'2': {
				start: {
					line: 3,
					column: 17
				},
				end: {
					line: 3,
					column: 36
				}
			},
			'3': {
				start: {
					line: 12,
					column: 2
				},
				end: {
					line: 12,
					column: 54
				}
			},
			'4': {
				start: {
					line: 16,
					column: 0
				},
				end: {
					line: 16,
					column: 27
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 11,
						column: 1
					},
					end: {
						line: 11,
						column: 2
					}
				},
				loc: {
					start: {
						line: 11,
						column: 25
					},
					end: {
						line: 13,
						column: 2
					}
				},
				line: 11
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0
		},
		f: {
			'0': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Type = (cov_5dz4t1jhj.s[0]++, __webpack_require__(1));
var Occurrence = (cov_5dz4t1jhj.s[1]++, __webpack_require__(5));
var Plugin = (cov_5dz4t1jhj.s[2]++, __webpack_require__(3));

var Sanitizer = function (_ref) {
	_inherits(Sanitizer, _ref);

	/**
  * Constructs the object.
  *
  * @param      {string}  identifier  The identifier
  */
	function Sanitizer(identifier) {
		_classCallCheck(this, Sanitizer);

		cov_5dz4t1jhj.f[0]++;
		cov_5dz4t1jhj.s[3]++;
		return _possibleConstructorReturn(this, (Sanitizer.__proto__ || Object.getPrototypeOf(Sanitizer)).call(this, identifier, Type.SANITIZER, Occurrence.EVERY));
	}

	return Sanitizer;
}((Plugin));

cov_5dz4t1jhj.s[4]++;


module.exports = Sanitizer;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_7mea497mj = function () {
	var path = "/var/www/src/engines/processing/parts/stack.js",
	    hash = "79ae5a2de2655b26d0945e0ecff29aa4eda4d50d",
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = "__coverage__",
	    coverageData = {
		path: "/var/www/src/engines/processing/parts/stack.js",
		statementMap: {
			"0": {
				start: {
					line: 11,
					column: 2
				},
				end: {
					line: 11,
					column: 20
				}
			},
			"1": {
				start: {
					line: 19,
					column: 2
				},
				end: {
					line: 19,
					column: 28
				}
			},
			"2": {
				start: {
					line: 28,
					column: 2
				},
				end: {
					line: 28,
					column: 28
				}
			},
			"3": {
				start: {
					line: 37,
					column: 2
				},
				end: {
					line: 37,
					column: 47
				}
			},
			"4": {
				start: {
					line: 46,
					column: 2
				},
				end: {
					line: 46,
					column: 25
				}
			},
			"5": {
				start: {
					line: 55,
					column: 2
				},
				end: {
					line: 55,
					column: 35
				}
			},
			"6": {
				start: {
					line: 64,
					column: 2
				},
				end: {
					line: 64,
					column: 29
				}
			},
			"7": {
				start: {
					line: 68,
					column: 0
				},
				end: {
					line: 68,
					column: 23
				}
			}
		},
		fnMap: {
			"0": {
				name: "(anonymous_0)",
				decl: {
					start: {
						line: 10,
						column: 1
					},
					end: {
						line: 10,
						column: 2
					}
				},
				loc: {
					start: {
						line: 10,
						column: 15
					},
					end: {
						line: 12,
						column: 2
					}
				},
				line: 10
			},
			"1": {
				name: "(anonymous_1)",
				decl: {
					start: {
						line: 18,
						column: 1
					},
					end: {
						line: 18,
						column: 2
					}
				},
				loc: {
					start: {
						line: 18,
						column: 15
					},
					end: {
						line: 20,
						column: 2
					}
				},
				line: 18
			},
			"2": {
				name: "(anonymous_2)",
				decl: {
					start: {
						line: 27,
						column: 1
					},
					end: {
						line: 27,
						column: 2
					}
				},
				loc: {
					start: {
						line: 27,
						column: 11
					},
					end: {
						line: 29,
						column: 2
					}
				},
				line: 27
			},
			"3": {
				name: "(anonymous_3)",
				decl: {
					start: {
						line: 36,
						column: 1
					},
					end: {
						line: 36,
						column: 2
					}
				},
				loc: {
					start: {
						line: 36,
						column: 7
					},
					end: {
						line: 38,
						column: 2
					}
				},
				line: 36
			},
			"4": {
				name: "(anonymous_4)",
				decl: {
					start: {
						line: 45,
						column: 1
					},
					end: {
						line: 45,
						column: 2
					}
				},
				loc: {
					start: {
						line: 45,
						column: 8
					},
					end: {
						line: 47,
						column: 2
					}
				},
				line: 45
			},
			"5": {
				name: "(anonymous_5)",
				decl: {
					start: {
						line: 54,
						column: 1
					},
					end: {
						line: 54,
						column: 2
					}
				},
				loc: {
					start: {
						line: 54,
						column: 11
					},
					end: {
						line: 56,
						column: 2
					}
				},
				line: 54
			},
			"6": {
				name: "(anonymous_6)",
				decl: {
					start: {
						line: 63,
						column: 1
					},
					end: {
						line: 63,
						column: 2
					}
				},
				loc: {
					start: {
						line: 63,
						column: 10
					},
					end: {
						line: 65,
						column: 2
					}
				},
				line: 63
			}
		},
		branchMap: {},
		s: {
			"0": 0,
			"1": 0,
			"2": 0,
			"3": 0,
			"4": 0,
			"5": 0,
			"6": 0,
			"7": 0
		},
		f: {
			"0": 0,
			"1": 0,
			"2": 0,
			"3": 0,
			"4": 0,
			"5": 0,
			"6": 0
		},
		b: {},
		_coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * List of .
 *
 * @class      Stack (name)
 */
var Stack = function () {
	/**
  * Constructs the object.
  */
	function Stack() {
		_classCallCheck(this, Stack);

		cov_7mea497mj.f[0]++;
		cov_7mea497mj.s[0]++;

		this.content = [];
	}
	/**
  * Stacks an object.
  *
  * @param      {Object}  object  The object
  */


	_createClass(Stack, [{
		key: "stack",
		value: function stack(object) {
			cov_7mea497mj.f[1]++;
			cov_7mea497mj.s[1]++;

			this.content.push(object);
		}

		/**
   * Unstacks an object.
   *
   * @return     {Object|undefined}
   */

	}, {
		key: "unstack",
		value: function unstack() {
			cov_7mea497mj.f[2]++;
			cov_7mea497mj.s[2]++;

			return this.content.pop();
		}

		/**
   * Top of the stack.
   *
   * @return     {Object|undefined}
   */

	}, {
		key: "top",
		value: function top() {
			cov_7mea497mj.f[3]++;
			cov_7mea497mj.s[3]++;

			return this.content[this.content.length - 1];
		}

		/**
   * Base of the stack.
   *
   * @return     {Object}
   */

	}, {
		key: "base",
		value: function base() {
			cov_7mea497mj.f[4]++;
			cov_7mea497mj.s[4]++;

			return this.content[0];
		}

		/**
   * Determines if empty.
   *
   * @return     {boolean}  True if empty, False otherwise.
   */

	}, {
		key: "isEmpty",
		value: function isEmpty() {
			cov_7mea497mj.f[5]++;
			cov_7mea497mj.s[5]++;

			return this.content.length === 0;
		}

		/**
   * Stack length.
   *
   * @return     {number}
   */

	}, {
		key: "length",
		value: function length() {
			cov_7mea497mj.f[6]++;
			cov_7mea497mj.s[6]++;

			return this.content.length;
		}
	}]);

	return Stack;
}();

cov_7mea497mj.s[7]++;


module.exports = Stack;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2ajesxdcq = function () {
	var path = '/var/www/src/actions/show.js',
	    hash = '979ea14673bca7932fd02b44c5457243a4c679f3',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/actions/show.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 6,
					column: 2
				}
			},
			'1': {
				start: {
					line: 2,
					column: 1
				},
				end: {
					line: 2,
					column: 45
				}
			},
			'2': {
				start: {
					line: 3,
					column: 1
				},
				end: {
					line: 5,
					column: 2
				}
			},
			'3': {
				start: {
					line: 4,
					column: 2
				},
				end: {
					line: 4,
					column: 32
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 1,
						column: 17
					},
					end: {
						line: 1,
						column: 18
					}
				},
				loc: {
					start: {
						line: 1,
						column: 32
					},
					end: {
						line: 6,
						column: 1
					}
				},
				line: 1
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0
		},
		f: {
			'0': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_2ajesxdcq.s[0]++;
module.exports = function (mediaObject) {
	cov_2ajesxdcq.f[0]++;
	cov_2ajesxdcq.s[1]++;

	mediaObject.element.style.display = 'block';
	cov_2ajesxdcq.s[2]++;
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = mediaObject.hookedFns.children()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var child = _step.value;
			cov_2ajesxdcq.s[3]++;

			child.style.display = 'block';
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2qcr5g0u4 = function () {
	var path = '/var/www/src/actions/hide.js',
	    hash = '887cc580b53f3d2dee582ff48b40b4e8dea872b6',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/actions/hide.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 6,
					column: 2
				}
			},
			'1': {
				start: {
					line: 2,
					column: 1
				},
				end: {
					line: 2,
					column: 44
				}
			},
			'2': {
				start: {
					line: 3,
					column: 1
				},
				end: {
					line: 5,
					column: 2
				}
			},
			'3': {
				start: {
					line: 4,
					column: 2
				},
				end: {
					line: 4,
					column: 31
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 1,
						column: 17
					},
					end: {
						line: 1,
						column: 18
					}
				},
				loc: {
					start: {
						line: 1,
						column: 32
					},
					end: {
						line: 6,
						column: 1
					}
				},
				line: 1
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0
		},
		f: {
			'0': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_2qcr5g0u4.s[0]++;
module.exports = function (mediaObject) {
	cov_2qcr5g0u4.f[0]++;
	cov_2qcr5g0u4.s[1]++;

	mediaObject.element.style.display = 'none';
	cov_2qcr5g0u4.s[2]++;
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = mediaObject.hookedFns.children()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var child = _step.value;
			cov_2qcr5g0u4.s[3]++;

			child.style.display = 'none';
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_blv2wnxsq = function () {
	var path = '/var/www/src/core/media-tag-api.js',
	    hash = '440eaafad2a8801f60f67077a3e10ad2016a6914',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/core/media-tag-api.js',
		statementMap: {
			'0': {
				start: {
					line: 3,
					column: 25
				},
				end: {
					line: 3,
					column: 75
				}
			},
			'1': {
				start: {
					line: 4,
					column: 20
				},
				end: {
					line: 4,
					column: 53
				}
			},
			'2': {
				start: {
					line: 5,
					column: 17
				},
				end: {
					line: 5,
					column: 39
				}
			},
			'3': {
				start: {
					line: 6,
					column: 15
				},
				end: {
					line: 6,
					column: 34
				}
			},
			'4': {
				start: {
					line: 15,
					column: 1
				},
				end: {
					line: 17,
					column: 2
				}
			},
			'5': {
				start: {
					line: 16,
					column: 2
				},
				end: {
					line: 16,
					column: 24
				}
			},
			'6': {
				start: {
					line: 22,
					column: 1
				},
				end: {
					line: 24,
					column: 4
				}
			},
			'7': {
				start: {
					line: 23,
					column: 2
				},
				end: {
					line: 23,
					column: 17
				}
			},
			'8': {
				start: {
					line: 26,
					column: 1
				},
				end: {
					line: 28,
					column: 4
				}
			},
			'9': {
				start: {
					line: 27,
					column: 2
				},
				end: {
					line: 27,
					column: 37
				}
			},
			'10': {
				start: {
					line: 37,
					column: 0
				},
				end: {
					line: 57,
					column: 2
				}
			},
			'11': {
				start: {
					line: 38,
					column: 22
				},
				end: {
					line: 38,
					column: 79
				}
			},
			'12': {
				start: {
					line: 40,
					column: 1
				},
				end: {
					line: 56,
					column: 5
				}
			},
			'13': {
				start: {
					line: 41,
					column: 2
				},
				end: {
					line: 55,
					column: 5
				}
			},
			'14': {
				start: {
					line: 42,
					column: 3
				},
				end: {
					line: 54,
					column: 4
				}
			},
			'15': {
				start: {
					line: 44,
					column: 21
				},
				end: {
					line: 44,
					column: 72
				}
			},
			'16': {
				start: {
					line: 45,
					column: 25
				},
				end: {
					line: 45,
					column: 46
				}
			},
			'17': {
				start: {
					line: 47,
					column: 4
				},
				end: {
					line: 51,
					column: 7
				}
			},
			'18': {
				start: {
					line: 48,
					column: 5
				},
				end: {
					line: 48,
					column: 39
				}
			},
			'19': {
				start: {
					line: 49,
					column: 5
				},
				end: {
					line: 49,
					column: 45
				}
			},
			'20': {
				start: {
					line: 50,
					column: 5
				},
				end: {
					line: 50,
					column: 46
				}
			},
			'21': {
				start: {
					line: 53,
					column: 4
				},
				end: {
					line: 53,
					column: 77
				}
			},
			'22': {
				start: {
					line: 64,
					column: 0
				},
				end: {
					line: 94,
					column: 2
				}
			},
			'23': {
				start: {
					line: 69,
					column: 1
				},
				end: {
					line: 93,
					column: 2
				}
			},
			'24': {
				start: {
					line: 70,
					column: 2
				},
				end: {
					line: 92,
					column: 5
				}
			},
			'25': {
				start: {
					line: 77,
					column: 27
				},
				end: {
					line: 80,
					column: 5
				}
			},
			'26': {
				start: {
					line: 78,
					column: 4
				},
				end: {
					line: 79,
					column: 50
				}
			},
			'27': {
				start: {
					line: 81,
					column: 3
				},
				end: {
					line: 91,
					column: 4
				}
			},
			'28': {
				start: {
					line: 82,
					column: 4
				},
				end: {
					line: 82,
					column: 76
				}
			},
			'29': {
				start: {
					line: 83,
					column: 10
				},
				end: {
					line: 91,
					column: 4
				}
			},
			'30': {
				start: {
					line: 84,
					column: 4
				},
				end: {
					line: 88,
					column: 7
				}
			},
			'31': {
				start: {
					line: 85,
					column: 5
				},
				end: {
					line: 87,
					column: 8
				}
			},
			'32': {
				start: {
					line: 86,
					column: 6
				},
				end: {
					line: 86,
					column: 40
				}
			},
			'33': {
				start: {
					line: 90,
					column: 4
				},
				end: {
					line: 90,
					column: 42
				}
			},
			'34': {
				start: {
					line: 102,
					column: 0
				},
				end: {
					line: 107,
					column: 2
				}
			},
			'35': {
				start: {
					line: 103,
					column: 22
				},
				end: {
					line: 104,
					column: 30
				}
			},
			'36': {
				start: {
					line: 106,
					column: 1
				},
				end: {
					line: 106,
					column: 39
				}
			},
			'37': {
				start: {
					line: 115,
					column: 0
				},
				end: {
					line: 147,
					column: 2
				}
			},
			'38': {
				start: {
					line: 116,
					column: 30
				},
				end: {
					line: 127,
					column: 3
				}
			},
			'39': {
				start: {
					line: 117,
					column: 2
				},
				end: {
					line: 117,
					column: 47
				}
			},
			'40': {
				start: {
					line: 119,
					column: 2
				},
				end: {
					line: 119,
					column: 47
				}
			},
			'41': {
				start: {
					line: 121,
					column: 2
				},
				end: {
					line: 123,
					column: 3
				}
			},
			'42': {
				start: {
					line: 122,
					column: 3
				},
				end: {
					line: 122,
					column: 18
				}
			},
			'43': {
				start: {
					line: 124,
					column: 2
				},
				end: {
					line: 124,
					column: 14
				}
			},
			'44': {
				start: {
					line: 126,
					column: 2
				},
				end: {
					line: 126,
					column: 47
				}
			},
			'45': {
				start: {
					line: 129,
					column: 1
				},
				end: {
					line: 146,
					column: 4
				}
			},
			'46': {
				start: {
					line: 130,
					column: 25
				},
				end: {
					line: 130,
					column: 27
				}
			},
			'47': {
				start: {
					line: 132,
					column: 2
				},
				end: {
					line: 142,
					column: 5
				}
			},
			'48': {
				start: {
					line: 133,
					column: 3
				},
				end: {
					line: 133,
					column: 37
				}
			},
			'49': {
				start: {
					line: 134,
					column: 3
				},
				end: {
					line: 134,
					column: 40
				}
			},
			'50': {
				start: {
					line: 135,
					column: 3
				},
				end: {
					line: 141,
					column: 4
				}
			},
			'51': {
				start: {
					line: 136,
					column: 4
				},
				end: {
					line: 140,
					column: 7
				}
			},
			'52': {
				start: {
					line: 137,
					column: 5
				},
				end: {
					line: 139,
					column: 6
				}
			},
			'53': {
				start: {
					line: 138,
					column: 6
				},
				end: {
					line: 138,
					column: 31
				}
			},
			'54': {
				start: {
					line: 143,
					column: 2
				},
				end: {
					line: 145,
					column: 6
				}
			},
			'55': {
				start: {
					line: 144,
					column: 3
				},
				end: {
					line: 144,
					column: 41
				}
			},
			'56': {
				start: {
					line: 152,
					column: 0
				},
				end: {
					line: 152,
					column: 71
				}
			},
			'57': {
				start: {
					line: 157,
					column: 0
				},
				end: {
					line: 157,
					column: 109
				}
			},
			'58': {
				start: {
					line: 162,
					column: 0
				},
				end: {
					line: 162,
					column: 34
				}
			},
			'59': {
				start: {
					line: 164,
					column: 0
				},
				end: {
					line: 164,
					column: 29
				}
			}
		},
		fnMap: {
			'0': {
				name: 'MediaTagAPI',
				decl: {
					start: {
						line: 14,
						column: 9
					},
					end: {
						line: 14,
						column: 20
					}
				},
				loc: {
					start: {
						line: 14,
						column: 31
					},
					end: {
						line: 29,
						column: 1
					}
				},
				line: 14
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 22,
						column: 28
					},
					end: {
						line: 22,
						column: 29
					}
				},
				loc: {
					start: {
						line: 22,
						column: 39
					},
					end: {
						line: 24,
						column: 2
					}
				},
				line: 22
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 26,
						column: 54
					},
					end: {
						line: 26,
						column: 55
					}
				},
				loc: {
					start: {
						line: 26,
						column: 60
					},
					end: {
						line: 28,
						column: 2
					}
				},
				line: 26
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 37,
						column: 20
					},
					end: {
						line: 37,
						column: 21
					}
				},
				loc: {
					start: {
						line: 37,
						column: 32
					},
					end: {
						line: 57,
						column: 1
					}
				},
				line: 37
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 40,
						column: 33
					},
					end: {
						line: 40,
						column: 34
					}
				},
				loc: {
					start: {
						line: 40,
						column: 44
					},
					end: {
						line: 56,
						column: 2
					}
				},
				line: 40
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 41,
						column: 21
					},
					end: {
						line: 41,
						column: 22
					}
				},
				loc: {
					start: {
						line: 41,
						column: 32
					},
					end: {
						line: 55,
						column: 3
					}
				},
				line: 41
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 47,
						column: 25
					},
					end: {
						line: 47,
						column: 26
					}
				},
				loc: {
					start: {
						line: 47,
						column: 40
					},
					end: {
						line: 51,
						column: 5
					}
				},
				line: 47
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 64,
						column: 21
					},
					end: {
						line: 64,
						column: 22
					}
				},
				loc: {
					start: {
						line: 64,
						column: 38
					},
					end: {
						line: 94,
						column: 1
					}
				},
				line: 64
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 70,
						column: 37
					},
					end: {
						line: 70,
						column: 38
					}
				},
				loc: {
					start: {
						line: 70,
						column: 47
					},
					end: {
						line: 92,
						column: 3
					}
				},
				line: 70
			},
			'9': {
				name: '(anonymous_9)',
				decl: {
					start: {
						line: 77,
						column: 87
					},
					end: {
						line: 77,
						column: 88
					}
				},
				loc: {
					start: {
						line: 77,
						column: 103
					},
					end: {
						line: 80,
						column: 4
					}
				},
				line: 77
			},
			'10': {
				name: '(anonymous_10)',
				decl: {
					start: {
						line: 84,
						column: 28
					},
					end: {
						line: 84,
						column: 29
					}
				},
				loc: {
					start: {
						line: 84,
						column: 46
					},
					end: {
						line: 88,
						column: 5
					}
				},
				line: 84
			},
			'11': {
				name: '(anonymous_11)',
				decl: {
					start: {
						line: 85,
						column: 33
					},
					end: {
						line: 85,
						column: 34
					}
				},
				loc: {
					start: {
						line: 85,
						column: 40
					},
					end: {
						line: 87,
						column: 6
					}
				},
				line: 85
			},
			'12': {
				name: '(anonymous_12)',
				decl: {
					start: {
						line: 102,
						column: 24
					},
					end: {
						line: 102,
						column: 25
					}
				},
				loc: {
					start: {
						line: 102,
						column: 41
					},
					end: {
						line: 107,
						column: 1
					}
				},
				line: 102
			},
			'13': {
				name: '(anonymous_13)',
				decl: {
					start: {
						line: 115,
						column: 33
					},
					end: {
						line: 115,
						column: 34
					}
				},
				loc: {
					start: {
						line: 115,
						column: 45
					},
					end: {
						line: 147,
						column: 1
					}
				},
				line: 115
			},
			'14': {
				name: '(anonymous_14)',
				decl: {
					start: {
						line: 116,
						column: 46
					},
					end: {
						line: 116,
						column: 47
					}
				},
				loc: {
					start: {
						line: 116,
						column: 57
					},
					end: {
						line: 118,
						column: 2
					}
				},
				line: 116
			},
			'15': {
				name: '(anonymous_15)',
				decl: {
					start: {
						line: 118,
						column: 8
					},
					end: {
						line: 118,
						column: 9
					}
				},
				loc: {
					start: {
						line: 118,
						column: 19
					},
					end: {
						line: 120,
						column: 2
					}
				},
				line: 118
			},
			'16': {
				name: '(anonymous_16)',
				decl: {
					start: {
						line: 120,
						column: 11
					},
					end: {
						line: 120,
						column: 12
					}
				},
				loc: {
					start: {
						line: 120,
						column: 26
					},
					end: {
						line: 125,
						column: 2
					}
				},
				line: 120
			},
			'17': {
				name: '(anonymous_17)',
				decl: {
					start: {
						line: 125,
						column: 12
					},
					end: {
						line: 125,
						column: 13
					}
				},
				loc: {
					start: {
						line: 125,
						column: 19
					},
					end: {
						line: 127,
						column: 2
					}
				},
				line: 125
			},
			'18': {
				name: '(anonymous_18)',
				decl: {
					start: {
						line: 129,
						column: 47
					},
					end: {
						line: 129,
						column: 48
					}
				},
				loc: {
					start: {
						line: 129,
						column: 65
					},
					end: {
						line: 146,
						column: 2
					}
				},
				line: 129
			},
			'19': {
				name: '(anonymous_19)',
				decl: {
					start: {
						line: 132,
						column: 25
					},
					end: {
						line: 132,
						column: 26
					}
				},
				loc: {
					start: {
						line: 132,
						column: 42
					},
					end: {
						line: 142,
						column: 3
					}
				},
				line: 132
			},
			'20': {
				name: '(anonymous_20)',
				decl: {
					start: {
						line: 136,
						column: 39
					},
					end: {
						line: 136,
						column: 40
					}
				},
				loc: {
					start: {
						line: 136,
						column: 46
					},
					end: {
						line: 140,
						column: 5
					}
				},
				line: 136
			},
			'21': {
				name: '(anonymous_21)',
				decl: {
					start: {
						line: 143,
						column: 40
					},
					end: {
						line: 143,
						column: 41
					}
				},
				loc: {
					start: {
						line: 143,
						column: 47
					},
					end: {
						line: 145,
						column: 3
					}
				},
				line: 143
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 15,
						column: 1
					},
					end: {
						line: 17,
						column: 2
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 15,
						column: 1
					},
					end: {
						line: 17,
						column: 2
					}
				}, {
					start: {
						line: 15,
						column: 1
					},
					end: {
						line: 17,
						column: 2
					}
				}],
				line: 15
			},
			'1': {
				loc: {
					start: {
						line: 38,
						column: 22
					},
					end: {
						line: 38,
						column: 79
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 38,
						column: 22
					},
					end: {
						line: 38,
						column: 47
					}
				}, {
					start: {
						line: 38,
						column: 51
					},
					end: {
						line: 38,
						column: 79
					}
				}],
				line: 38
			},
			'2': {
				loc: {
					start: {
						line: 42,
						column: 3
					},
					end: {
						line: 54,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 42,
						column: 3
					},
					end: {
						line: 54,
						column: 4
					}
				}, {
					start: {
						line: 42,
						column: 3
					},
					end: {
						line: 54,
						column: 4
					}
				}],
				line: 42
			},
			'3': {
				loc: {
					start: {
						line: 42,
						column: 7
					},
					end: {
						line: 43,
						column: 35
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 42,
						column: 7
					},
					end: {
						line: 42,
						column: 34
					}
				}, {
					start: {
						line: 43,
						column: 4
					},
					end: {
						line: 43,
						column: 35
					}
				}],
				line: 42
			},
			'4': {
				loc: {
					start: {
						line: 69,
						column: 1
					},
					end: {
						line: 93,
						column: 2
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 69,
						column: 1
					},
					end: {
						line: 93,
						column: 2
					}
				}, {
					start: {
						line: 69,
						column: 1
					},
					end: {
						line: 93,
						column: 2
					}
				}],
				line: 69
			},
			'5': {
				loc: {
					start: {
						line: 78,
						column: 11
					},
					end: {
						line: 79,
						column: 49
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 78,
						column: 11
					},
					end: {
						line: 78,
						column: 66
					}
				}, {
					start: {
						line: 79,
						column: 6
					},
					end: {
						line: 79,
						column: 49
					}
				}],
				line: 78
			},
			'6': {
				loc: {
					start: {
						line: 81,
						column: 3
					},
					end: {
						line: 91,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 81,
						column: 3
					},
					end: {
						line: 91,
						column: 4
					}
				}, {
					start: {
						line: 81,
						column: 3
					},
					end: {
						line: 91,
						column: 4
					}
				}],
				line: 81
			},
			'7': {
				loc: {
					start: {
						line: 83,
						column: 10
					},
					end: {
						line: 91,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 83,
						column: 10
					},
					end: {
						line: 91,
						column: 4
					}
				}, {
					start: {
						line: 83,
						column: 10
					},
					end: {
						line: 91,
						column: 4
					}
				}],
				line: 83
			},
			'8': {
				loc: {
					start: {
						line: 103,
						column: 22
					},
					end: {
						line: 104,
						column: 30
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 103,
						column: 22
					},
					end: {
						line: 103,
						column: 47
					}
				}, {
					start: {
						line: 104,
						column: 2
					},
					end: {
						line: 104,
						column: 30
					}
				}],
				line: 103
			},
			'9': {
				loc: {
					start: {
						line: 121,
						column: 2
					},
					end: {
						line: 123,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 121,
						column: 2
					},
					end: {
						line: 123,
						column: 3
					}
				}, {
					start: {
						line: 121,
						column: 2
					},
					end: {
						line: 123,
						column: 3
					}
				}],
				line: 121
			},
			'10': {
				loc: {
					start: {
						line: 135,
						column: 3
					},
					end: {
						line: 141,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 135,
						column: 3
					},
					end: {
						line: 141,
						column: 4
					}
				}, {
					start: {
						line: 135,
						column: 3
					},
					end: {
						line: 141,
						column: 4
					}
				}],
				line: 135
			},
			'11': {
				loc: {
					start: {
						line: 137,
						column: 5
					},
					end: {
						line: 139,
						column: 6
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 137,
						column: 5
					},
					end: {
						line: 139,
						column: 6
					}
				}, {
					start: {
						line: 137,
						column: 5
					},
					end: {
						line: 139,
						column: 6
					}
				}],
				line: 137
			},
			'12': {
				loc: {
					start: {
						line: 152,
						column: 26
					},
					end: {
						line: 152,
						column: 70
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 152,
						column: 26
					},
					end: {
						line: 152,
						column: 49
					}
				}, {
					start: {
						line: 152,
						column: 53
					},
					end: {
						line: 152,
						column: 70
					}
				}],
				line: 152
			},
			'13': {
				loc: {
					start: {
						line: 157,
						column: 31
					},
					end: {
						line: 157,
						column: 108
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 157,
						column: 31
					},
					end: {
						line: 157,
						column: 59
					}
				}, {
					start: {
						line: 157,
						column: 63
					},
					end: {
						line: 157,
						column: 108
					}
				}],
				line: 157
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0,
			'36': 0,
			'37': 0,
			'38': 0,
			'39': 0,
			'40': 0,
			'41': 0,
			'42': 0,
			'43': 0,
			'44': 0,
			'45': 0,
			'46': 0,
			'47': 0,
			'48': 0,
			'49': 0,
			'50': 0,
			'51': 0,
			'52': 0,
			'53': 0,
			'54': 0,
			'55': 0,
			'56': 0,
			'57': 0,
			'58': 0,
			'59': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0],
			'4': [0, 0],
			'5': [0, 0],
			'6': [0, 0],
			'7': [0, 0],
			'8': [0, 0],
			'9': [0, 0],
			'10': [0, 0],
			'11': [0, 0],
			'12': [0, 0],
			'13': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

/* global Promise */

var ProcessingEngine = (cov_blv2wnxsq.s[0]++, __webpack_require__(24));
var PluginStore = (cov_blv2wnxsq.s[1]++, __webpack_require__(31));
var MediaTag = (cov_blv2wnxsq.s[2]++, __webpack_require__(32));
var Loader = (cov_blv2wnxsq.s[3]++, __webpack_require__(39));

/**
 * MediaTagAPI variant for asynchronous module loading.
 *
 * @class      MediaTagAPI (name)
 * @param      {Array<Element>|Element}  elements  The elements
 */
function MediaTagAPI(elements) {
	cov_blv2wnxsq.f[0]++;
	cov_blv2wnxsq.s[4]++;

	if (!Array.isArray(elements)) {
		cov_blv2wnxsq.b[0][0]++;
		cov_blv2wnxsq.s[5]++;

		elements = [elements];
	} else {
		cov_blv2wnxsq.b[0][1]++;
	}

	/**
  * Removes undefined elements.
  */
	cov_blv2wnxsq.s[6]++;
	elements = elements.filter(function (element) {
		cov_blv2wnxsq.f[1]++;
		cov_blv2wnxsq.s[7]++;

		return element;
	});

	cov_blv2wnxsq.s[8]++;
	return MediaTagAPI.loadConfigurations(elements).then(function () {
		cov_blv2wnxsq.f[2]++;
		cov_blv2wnxsq.s[9]++;

		return MediaTagAPI.start(elements);
	});
}

/**
 * Starts Media-Tag processing on identified elements.
 *
 * @param      {Array<Element>}  elements  The elements
 * @return     {Promise}
 */
cov_blv2wnxsq.s[10]++;
MediaTagAPI.start = function (elements) {
	cov_blv2wnxsq.f[3]++;

	var activeEngine = (cov_blv2wnxsq.s[11]++, (cov_blv2wnxsq.b[1][0]++, MediaTagAPI.loadingEngine) || (cov_blv2wnxsq.b[1][1]++, MediaTagAPI.processingEngine));

	cov_blv2wnxsq.s[12]++;
	return Promise.all(elements.map(function (element) {
		cov_blv2wnxsq.f[4]++;
		cov_blv2wnxsq.s[13]++;

		return new Promise(function (resolve) {
			cov_blv2wnxsq.f[5]++;
			cov_blv2wnxsq.s[14]++;

			if ((cov_blv2wnxsq.b[3][0]++, element.hasAttribute('src')) || (cov_blv2wnxsq.b[3][1]++, element.hasAttribute('sources'))) {
				cov_blv2wnxsq.b[2][0]++;

				var mediaTag = (cov_blv2wnxsq.s[15]++, new MediaTag(element, MediaTagAPI.processingEngine));
				var mediaObjects = (cov_blv2wnxsq.s[16]++, mediaTag.mediaObjects);

				cov_blv2wnxsq.s[17]++;
				mediaObjects.forEach(function (mediaObject) {
					cov_blv2wnxsq.f[6]++;
					cov_blv2wnxsq.s[18]++;

					element.mediaObject = mediaObject;
					cov_blv2wnxsq.s[19]++;
					mediaObject.loader = MediaTagAPI.loader;
					cov_blv2wnxsq.s[20]++;
					resolve(activeEngine.start(mediaObject));
				});
			} else {
				cov_blv2wnxsq.b[2][1]++;
				cov_blv2wnxsq.s[21]++;

				resolve(console.warn('Element skipped because has no sources', element));
			}
		});
	}));
};

/**
 * Updates the media tag with the configuration.
 *
 * @param      {Configuration}  configuration  The configuration
 */
cov_blv2wnxsq.s[22]++;
MediaTagAPI.update = function (configuration) {
	cov_blv2wnxsq.f[7]++;
	cov_blv2wnxsq.s[23]++;

	/**
  * Update only if the configuration origin is different ...
  * TODO : Update this rule to if changes is detected in a configuration
  */
	if (configuration.origin !== 'store') {
		cov_blv2wnxsq.b[4][0]++;
		cov_blv2wnxsq.s[24]++;

		configuration.getPlugins().forEach(function (plugin) {
			cov_blv2wnxsq.f[8]++;

			/**
    * Finds existing plugins to try to update their properties, methods ...
    * WARNING : Existing plugins still conserve their prototypes.
    * Configuration function will overwrite instances and avoid same name prototype ones.
    * Configuration is always an overwrite or an addition of properties in this context.
    */
			var existingPlugins = (cov_blv2wnxsq.s[25]++, MediaTagAPI.pluginStore.getPlugins(plugin.getType()).filter(function (storedPlugin) {
				cov_blv2wnxsq.f[9]++;
				cov_blv2wnxsq.s[26]++;

				return (cov_blv2wnxsq.b[5][0]++, storedPlugin.getIdentifier() === plugin.getIdentifier()) && (cov_blv2wnxsq.b[5][1]++, storedPlugin.getType() === plugin.getType());
			}));
			cov_blv2wnxsq.s[27]++;
			if (existingPlugins.length > 1) {
				cov_blv2wnxsq.b[6][0]++;
				cov_blv2wnxsq.s[28]++;

				throw new Error('More than one plugin matched to update for this pass');
			} else {
					cov_blv2wnxsq.b[6][1]++;
					cov_blv2wnxsq.s[29]++;
					if (existingPlugins.length === 1) {
						cov_blv2wnxsq.b[7][0]++;
						cov_blv2wnxsq.s[30]++;

						existingPlugins.forEach(function (existingPlugin) {
							cov_blv2wnxsq.f[10]++;
							cov_blv2wnxsq.s[31]++;

							Object.keys(plugin).forEach(function (key) {
								cov_blv2wnxsq.f[11]++;
								cov_blv2wnxsq.s[32]++;

								existingPlugin[key] = plugin[key];
							});
						});
					} else {
						cov_blv2wnxsq.b[7][1]++;
						cov_blv2wnxsq.s[33]++;

						MediaTagAPI.pluginStore.store(plugin);
					}
				}
		});
	} else {
		cov_blv2wnxsq.b[4][1]++;
	}
};

/**
 * Configures the media tag api.
 *
 * @param      {Configuration}  configuration  The configuration
 * @return     {Configuration}
 */
cov_blv2wnxsq.s[34]++;
MediaTagAPI.configure = function (configuration) {
	cov_blv2wnxsq.f[12]++;

	var activeEngine = (cov_blv2wnxsq.s[35]++, (cov_blv2wnxsq.b[8][0]++, MediaTagAPI.loadingEngine) || (cov_blv2wnxsq.b[8][1]++, MediaTagAPI.processingEngine));

	cov_blv2wnxsq.s[36]++;
	activeEngine.configure(configuration);
};

/**
 * Loads configurations.
 *
 * @param      {<type>}  elements  The elements
 * @return     {<type>}  { description_of_the_return_value }
 */
cov_blv2wnxsq.s[37]++;
MediaTagAPI.loadConfigurations = function (elements) {
	cov_blv2wnxsq.f[13]++;

	var configurationLoaders = (cov_blv2wnxsq.s[38]++, elements.filter(function (element) {
		cov_blv2wnxsq.f[14]++;
		cov_blv2wnxsq.s[39]++;

		return element.hasAttribute('configuration');
	}).map(function (element) {
		cov_blv2wnxsq.f[15]++;
		cov_blv2wnxsq.s[40]++;

		return element.getAttribute('configuration');
	}).reduce(function (urls, url) {
		cov_blv2wnxsq.f[16]++;
		cov_blv2wnxsq.s[41]++;

		if (!urls.includes(url)) {
			cov_blv2wnxsq.b[9][0]++;
			cov_blv2wnxsq.s[42]++;

			urls.push(url);
		} else {
			cov_blv2wnxsq.b[9][1]++;
		}
		cov_blv2wnxsq.s[43]++;
		return urls;
	}, []).map(function (url) {
		cov_blv2wnxsq.f[17]++;
		cov_blv2wnxsq.s[44]++;

		return MediaTagAPI.loader.configuration(url);
	}));

	cov_blv2wnxsq.s[45]++;
	return Promise.all(configurationLoaders).then(function (configurations) {
		cov_blv2wnxsq.f[18]++;

		var dependencyUrls = (cov_blv2wnxsq.s[46]++, []);

		cov_blv2wnxsq.s[47]++;
		configurations.forEach(function (configuration) {
			cov_blv2wnxsq.f[19]++;
			cov_blv2wnxsq.s[48]++;

			MediaTagAPI.update(configuration);
			cov_blv2wnxsq.s[49]++;
			MediaTagAPI.configure(configuration);
			cov_blv2wnxsq.s[50]++;
			if (configuration.dependencies) {
				cov_blv2wnxsq.b[10][0]++;
				cov_blv2wnxsq.s[51]++;

				configuration.dependencies.forEach(function (url) {
					cov_blv2wnxsq.f[20]++;
					cov_blv2wnxsq.s[52]++;

					if (!dependencyUrls.includes(url)) {
						cov_blv2wnxsq.b[11][0]++;
						cov_blv2wnxsq.s[53]++;

						dependencyUrls.push(url);
					} else {
						cov_blv2wnxsq.b[11][1]++;
					}
				});
			} else {
				cov_blv2wnxsq.b[10][1]++;
			}
		});
		cov_blv2wnxsq.s[54]++;
		return Promise.all(dependencyUrls.map(function (url) {
			cov_blv2wnxsq.f[21]++;
			cov_blv2wnxsq.s[55]++;

			return MediaTagAPI.loader.script(url);
		}));
	});
};

/**
 * PluginStore instance.
 */
cov_blv2wnxsq.s[56]++;
MediaTagAPI.pluginStore = (cov_blv2wnxsq.b[12][0]++, MediaTagAPI.pluginStore) || (cov_blv2wnxsq.b[12][1]++, new PluginStore());

/**
 * ProcessingEngine instance.
 */
cov_blv2wnxsq.s[57]++;
MediaTagAPI.processingEngine = (cov_blv2wnxsq.b[13][0]++, MediaTagAPI.processingEngine) || (cov_blv2wnxsq.b[13][1]++, new ProcessingEngine(MediaTagAPI.pluginStore));

/**
 * Loader with history system to prevent multiple same loadings.
 */
cov_blv2wnxsq.s[58]++;
MediaTagAPI.loader = new Loader();

cov_blv2wnxsq.s[59]++;
module.exports = MediaTagAPI;

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_nyvjudivv = function () {
	var path = '/var/www/src/plugins/download/renderer.js',
	    hash = 'c8a0601dfe98bf2a7cd6585a5b7de42a77b6aeac',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/download/renderer.js',
		statementMap: {
			'0': {
				start: {
					line: 2,
					column: 17
				},
				end: {
					line: 2,
					column: 39
				}
			},
			'1': {
				start: {
					line: 3,
					column: 20
				},
				end: {
					line: 3,
					column: 53
				}
			},
			'2': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 10,
					column: 29
				}
			},
			'3': {
				start: {
					line: 11,
					column: 2
				},
				end: {
					line: 11,
					column: 26
				}
			},
			'4': {
				start: {
					line: 12,
					column: 2
				},
				end: {
					line: 12,
					column: 51
				}
			},
			'5': {
				start: {
					line: 21,
					column: 17
				},
				end: {
					line: 21,
					column: 49
				}
			},
			'6': {
				start: {
					line: 23,
					column: 2
				},
				end: {
					line: 23,
					column: 40
				}
			},
			'7': {
				start: {
					line: 25,
					column: 2
				},
				end: {
					line: 47,
					column: 4
				}
			},
			'8': {
				start: {
					line: 26,
					column: 15
				},
				end: {
					line: 26,
					column: 35
				}
			},
			'9': {
				start: {
					line: 27,
					column: 15
				},
				end: {
					line: 27,
					column: 46
				}
			},
			'10': {
				start: {
					line: 29,
					column: 3
				},
				end: {
					line: 29,
					column: 30
				}
			},
			'11': {
				start: {
					line: 30,
					column: 3
				},
				end: {
					line: 30,
					column: 29
				}
			},
			'12': {
				start: {
					line: 31,
					column: 3
				},
				end: {
					line: 45,
					column: 5
				}
			},
			'13': {
				start: {
					line: 32,
					column: 17
				},
				end: {
					line: 32,
					column: 29
				}
			},
			'14': {
				start: {
					line: 33,
					column: 4
				},
				end: {
					line: 44,
					column: 5
				}
			},
			'15': {
				start: {
					line: 34,
					column: 5
				},
				end: {
					line: 43,
					column: 6
				}
			},
			'16': {
				start: {
					line: 35,
					column: 6
				},
				end: {
					line: 35,
					column: 37
				}
			},
			'17': {
				start: {
					line: 36,
					column: 12
				},
				end: {
					line: 43,
					column: 6
				}
			},
			'18': {
				start: {
					line: 37,
					column: 19
				},
				end: {
					line: 37,
					column: 61
				}
			},
			'19': {
				start: {
					line: 38,
					column: 17
				},
				end: {
					line: 38,
					column: 32
				}
			},
			'20': {
				start: {
					line: 39,
					column: 19
				},
				end: {
					line: 39,
					column: 79
				}
			},
			'21': {
				start: {
					line: 40,
					column: 6
				},
				end: {
					line: 40,
					column: 19
				}
			},
			'22': {
				start: {
					line: 42,
					column: 6
				},
				end: {
					line: 42,
					column: 19
				}
			},
			'23': {
				start: {
					line: 46,
					column: 3
				},
				end: {
					line: 46,
					column: 14
				}
			},
			'24': {
				start: {
					line: 49,
					column: 2
				},
				end: {
					line: 49,
					column: 48
				}
			},
			'25': {
				start: {
					line: 50,
					column: 2
				},
				end: {
					line: 50,
					column: 40
				}
			},
			'26': {
				start: {
					line: 51,
					column: 2
				},
				end: {
					line: 51,
					column: 23
				}
			},
			'27': {
				start: {
					line: 55,
					column: 0
				},
				end: {
					line: 55,
					column: 34
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 37
					},
					end: {
						line: 13,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 20,
						column: 1
					},
					end: {
						line: 20,
						column: 2
					}
				},
				loc: {
					start: {
						line: 20,
						column: 22
					},
					end: {
						line: 52,
						column: 2
					}
				},
				line: 20
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 25,
						column: 19
					},
					end: {
						line: 25,
						column: 20
					}
				},
				loc: {
					start: {
						line: 25,
						column: 25
					},
					end: {
						line: 47,
						column: 3
					}
				},
				line: 25
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 31,
						column: 16
					},
					end: {
						line: 31,
						column: 17
					}
				},
				loc: {
					start: {
						line: 31,
						column: 22
					},
					end: {
						line: 45,
						column: 4
					}
				},
				line: 31
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 12,
						column: 23
					},
					end: {
						line: 12,
						column: 50
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 12,
						column: 23
					},
					end: {
						line: 12,
						column: 36
					}
				}, {
					start: {
						line: 12,
						column: 40
					},
					end: {
						line: 12,
						column: 50
					}
				}],
				line: 12
			},
			'1': {
				loc: {
					start: {
						line: 33,
						column: 4
					},
					end: {
						line: 44,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 33,
						column: 4
					},
					end: {
						line: 44,
						column: 5
					}
				}, {
					start: {
						line: 33,
						column: 4
					},
					end: {
						line: 44,
						column: 5
					}
				}],
				line: 33
			},
			'2': {
				loc: {
					start: {
						line: 34,
						column: 5
					},
					end: {
						line: 43,
						column: 6
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 34,
						column: 5
					},
					end: {
						line: 43,
						column: 6
					}
				}, {
					start: {
						line: 34,
						column: 5
					},
					end: {
						line: 43,
						column: 6
					}
				}],
				line: 34
			},
			'3': {
				loc: {
					start: {
						line: 36,
						column: 12
					},
					end: {
						line: 43,
						column: 6
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 36,
						column: 12
					},
					end: {
						line: 43,
						column: 6
					}
				}, {
					start: {
						line: 36,
						column: 12
					},
					end: {
						line: 43,
						column: 6
					}
				}],
				line: 36
			},
			'4': {
				loc: {
					start: {
						line: 39,
						column: 48
					},
					end: {
						line: 39,
						column: 62
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 39,
						column: 48
					},
					end: {
						line: 39,
						column: 53
					}
				}, {
					start: {
						line: 39,
						column: 57
					},
					end: {
						line: 39,
						column: 62
					}
				}],
				line: 39
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0],
			'4': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global document, XMLHttpRequest, saveAs, File */
var Renderer = (cov_nyvjudivv.s[0]++, __webpack_require__(4));
var Identifier = (cov_nyvjudivv.s[1]++, __webpack_require__(0));

var DownloadRenderer = function (_ref) {
	_inherits(DownloadRenderer, _ref);

	/**
  * Constructs the object.
  */
	function DownloadRenderer(message, buttonMessage) {
		_classCallCheck(this, DownloadRenderer);

		cov_nyvjudivv.f[0]++;
		cov_nyvjudivv.s[2]++;

		var _this = _possibleConstructorReturn(this, (DownloadRenderer.__proto__ || Object.getPrototypeOf(DownloadRenderer)).call(this, Identifier.DOWNLOAD));

		cov_nyvjudivv.s[3]++;

		_this.message = message;
		cov_nyvjudivv.s[4]++;
		_this.buttonMessage = (cov_nyvjudivv.b[0][0]++, buttonMessage) || (cov_nyvjudivv.b[0][1]++, 'Download');
		return _this;
	}

	/**
  * Job to realise to render a dash with a mediaObject.
  *
  * @param      {MediaObject}  mediaObject  The media object
  */


	_createClass(DownloadRenderer, [{
		key: 'process',
		value: function process(mediaObject) {
			cov_nyvjudivv.f[1]++;

			var button = (cov_nyvjudivv.s[5]++, document.createElement('button'));

			cov_nyvjudivv.s[6]++;
			button.innerHTML = this.buttonMessage;

			cov_nyvjudivv.s[7]++;
			button.onclick = function () {
				cov_nyvjudivv.f[2]++;

				var xhr = (cov_nyvjudivv.s[8]++, new XMLHttpRequest());
				var src = (cov_nyvjudivv.s[9]++, mediaObject.getAttribute('src'));

				cov_nyvjudivv.s[10]++;
				xhr.open('GET', src, true);
				cov_nyvjudivv.s[11]++;
				xhr.responseType = 'blob';
				cov_nyvjudivv.s[12]++;
				xhr.onload = function () {
					cov_nyvjudivv.f[3]++;

					var blob = (cov_nyvjudivv.s[13]++, xhr.response);
					cov_nyvjudivv.s[14]++;
					if (blob) {
						cov_nyvjudivv.b[1][0]++;
						cov_nyvjudivv.s[15]++;

						if (mediaObject.name) {
							cov_nyvjudivv.b[2][0]++;
							cov_nyvjudivv.s[16]++;

							saveAs(blob, mediaObject.name);
						} else {
								cov_nyvjudivv.b[2][1]++;
								cov_nyvjudivv.s[17]++;
								if (mediaObject.getAttribute('data-attr-type')) {
									cov_nyvjudivv.b[3][0]++;

									var mime = (cov_nyvjudivv.s[18]++, mediaObject.getAttribute('data-attr-type'));
									var ar = (cov_nyvjudivv.s[19]++, mime.split('/'));
									var file = (cov_nyvjudivv.s[20]++, new File([blob], 'download.' + ((cov_nyvjudivv.b[4][0]++, ar[1]) || (cov_nyvjudivv.b[4][1]++, 'txt')), { type: mime }));
									cov_nyvjudivv.s[21]++;
									saveAs(file);
								} else {
									cov_nyvjudivv.b[3][1]++;
									cov_nyvjudivv.s[22]++;

									saveAs(blob);
								}
							}
					} else {
						cov_nyvjudivv.b[1][1]++;
					}
				};
				cov_nyvjudivv.s[23]++;
				xhr.send();
			};

			cov_nyvjudivv.s[24]++;
			mediaObject.utilsSetAllDataAttributes(button);
			cov_nyvjudivv.s[25]++;
			mediaObject.replaceContents([button]);
			cov_nyvjudivv.s[26]++;
			mediaObject.return();
		}
	}]);

	return DownloadRenderer;
}((Renderer));

cov_nyvjudivv.s[27]++;


module.exports = DownloadRenderer;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1ibal60p09 = function () {
	var path = '/var/www/src/core/errors.js',
	    hash = 'aead6cb09b683685eaca1dfade2723f34a35e7f5',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/core/errors.js',
		statementMap: {
			'0': {
				start: {
					line: 7,
					column: 15
				},
				end: {
					line: 98,
					column: 1
				}
			},
			'1': {
				start: {
					line: 18,
					column: 3
				},
				end: {
					line: 18,
					column: 73
				}
			},
			'2': {
				start: {
					line: 31,
					column: 3
				},
				end: {
					line: 31,
					column: 72
				}
			},
			'3': {
				start: {
					line: 43,
					column: 3
				},
				end: {
					line: 43,
					column: 70
				}
			},
			'4': {
				start: {
					line: 56,
					column: 3
				},
				end: {
					line: 56,
					column: 102
				}
			},
			'5': {
				start: {
					line: 70,
					column: 3
				},
				end: {
					line: 70,
					column: 39
				}
			},
			'6': {
				start: {
					line: 82,
					column: 3
				},
				end: {
					line: 82,
					column: 50
				}
			},
			'7': {
				start: {
					line: 95,
					column: 3
				},
				end: {
					line: 95,
					column: 82
				}
			},
			'8': {
				start: {
					line: 100,
					column: 0
				},
				end: {
					line: 100,
					column: 24
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 17,
						column: 2
					},
					end: {
						line: 17,
						column: 3
					}
				},
				loc: {
					start: {
						line: 17,
						column: 25
					},
					end: {
						line: 19,
						column: 3
					}
				},
				line: 17
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 30,
						column: 2
					},
					end: {
						line: 30,
						column: 3
					}
				},
				loc: {
					start: {
						line: 30,
						column: 16
					},
					end: {
						line: 32,
						column: 3
					}
				},
				line: 30
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 42,
						column: 2
					},
					end: {
						line: 42,
						column: 3
					}
				},
				loc: {
					start: {
						line: 42,
						column: 22
					},
					end: {
						line: 44,
						column: 3
					}
				},
				line: 42
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 55,
						column: 2
					},
					end: {
						line: 55,
						column: 3
					}
				},
				loc: {
					start: {
						line: 55,
						column: 24
					},
					end: {
						line: 57,
						column: 3
					}
				},
				line: 55
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 69,
						column: 2
					},
					end: {
						line: 69,
						column: 3
					}
				},
				loc: {
					start: {
						line: 69,
						column: 16
					},
					end: {
						line: 71,
						column: 3
					}
				},
				line: 69
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 81,
						column: 2
					},
					end: {
						line: 81,
						column: 3
					}
				},
				loc: {
					start: {
						line: 81,
						column: 16
					},
					end: {
						line: 83,
						column: 3
					}
				},
				line: 81
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 94,
						column: 2
					},
					end: {
						line: 94,
						column: 3
					}
				},
				loc: {
					start: {
						line: 94,
						column: 19
					},
					end: {
						line: 96,
						column: 3
					}
				},
				line: 94
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 95,
						column: 34
					},
					end: {
						line: 95,
						column: 77
					}
				},
				type: 'cond-expr',
				locations: [{
					start: {
						line: 95,
						column: 55
					},
					end: {
						line: 95,
						column: 72
					}
				}, {
					start: {
						line: 95,
						column: 75
					},
					end: {
						line: 95,
						column: 77
					}
				}],
				line: 95
			},
			'1': {
				loc: {
					start: {
						line: 95,
						column: 34
					},
					end: {
						line: 95,
						column: 52
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 95,
						column: 34
					},
					end: {
						line: 95,
						column: 37
					}
				}, {
					start: {
						line: 95,
						column: 41
					},
					end: {
						line: 95,
						column: 52
					}
				}],
				line: 95
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Aggregates all Errors classes that media tag throw.
 *
 * @since 0.2.0
 */
var Errors = (cov_1ibal60p09.s[0]++, {
	// Media Tag //

	/**
  * @class {PluginExists} PluginExists Error thrown when a try to
  * register a plugin but the same identifier has been already
  * registered.
  * @since 0.2.0
  */
	PluginExists: function (_Error) {
		_inherits(PluginExists, _Error);

		function PluginExists(objPlugin) {
			_classCallCheck(this, PluginExists);

			cov_1ibal60p09.f[0]++;
			cov_1ibal60p09.s[1]++;
			return _possibleConstructorReturn(this, (PluginExists.__proto__ || Object.getPrototypeOf(PluginExists)).call(this, 'Plugin with same "' + objPlugin.identifier + '" identifier found.'));
		}

		return PluginExists;
	}(Error),

	/**
  * @class {TypeNotFound} TypeNotFound Error thrown when media tag
  * is incapable to find the type of a given media content. It
  * loops all the registered plugins, trying to find a match for
  * typeCheck, if no plugin returns true then this error occurs.
  * @since 0.2.0
  */
	TypeNotFound: function (_Error2) {
		_inherits(TypeNotFound, _Error2);

		function TypeNotFound() {
			_classCallCheck(this, TypeNotFound);

			cov_1ibal60p09.f[1]++;
			cov_1ibal60p09.s[2]++;
			return _possibleConstructorReturn(this, (TypeNotFound.__proto__ || Object.getPrototypeOf(TypeNotFound)).call(this, 'Media Tag could not find the content type of an instance.}.'));
		}

		return TypeNotFound;
	}(Error),

	/**
  * @class {FilterExists} FilterExists Error thrown when a try to
  * register a filter but the same identifier has been already
  * registered.
  * @since 0.2.1
  */
	FilterExists: function (_Error3) {
		_inherits(FilterExists, _Error3);

		function FilterExists(filter) {
			_classCallCheck(this, FilterExists);

			cov_1ibal60p09.f[2]++;
			cov_1ibal60p09.s[3]++;
			return _possibleConstructorReturn(this, (FilterExists.__proto__ || Object.getPrototypeOf(FilterExists)).call(this, 'Filter with same "' + filter.identifier + ' identifier found."'));
		}

		return FilterExists;
	}(Error),

	// Fetch //

	/**
  * @class {FetchFail} FetchFail Error thrown when media tag
  * is incapable to fetch a resource.
  * @since 0.2.0
  */
	FetchFail: function (_Error4) {
		_inherits(FetchFail, _Error4);

		function FetchFail(response) {
			_classCallCheck(this, FetchFail);

			cov_1ibal60p09.f[3]++;
			cov_1ibal60p09.s[4]++;
			return _possibleConstructorReturn(this, (FetchFail.__proto__ || Object.getPrototypeOf(FetchFail)).call(this, 'Could not fetch "' + response.url + '", received "' + response.status + ': ' + response.statusText + '".'));
		}

		return FetchFail;
	}(Error),

	// Crypto plugin //

	/**
  * @class {InvalidCryptoKey} InvalidCryptoKey Error thrown when
  * using the crypto plugin. The key informed is invalid (for
  * example when a field is missing).
  * @since 0.2.0
  */
	InvalidCryptoKey: function (_Error5) {
		_inherits(InvalidCryptoKey, _Error5);

		function InvalidCryptoKey() {
			_classCallCheck(this, InvalidCryptoKey);

			cov_1ibal60p09.f[4]++;
			cov_1ibal60p09.s[5]++;
			return _possibleConstructorReturn(this, (InvalidCryptoKey.__proto__ || Object.getPrototypeOf(InvalidCryptoKey)).call(this, 'Invalid cryptographic key.'));
		}

		return InvalidCryptoKey;
	}(Error),

	/**
  * @class {InvalidCryptoLib} InvalidCryptoLib Error thrown when
  * using the crypto plugin. The key contains an invalid algorithm
  * (for example, to the day, only 'xsalsa20poly1305' is supported).
  * @since 0.2.0
  */
	InvalidCryptoLib: function (_Error6) {
		_inherits(InvalidCryptoLib, _Error6);

		function InvalidCryptoLib() {
			_classCallCheck(this, InvalidCryptoLib);

			cov_1ibal60p09.f[5]++;
			cov_1ibal60p09.s[6]++;
			return _possibleConstructorReturn(this, (InvalidCryptoLib.__proto__ || Object.getPrototypeOf(InvalidCryptoLib)).call(this, 'Invalid cryptographic algorithm name.'));
		}

		return InvalidCryptoLib;
	}(Error),

	/**
  * @class {FailedCrypto} FailedCrypto Error thrown when
  * using the crypto plugin. The contents were impossible to
  * decrypt (for example, the key may be wrong, or the encrypted
  * file).
  * @since 0.2.0
  */
	FailedCrypto: function (_Error7) {
		_inherits(FailedCrypto, _Error7);

		function FailedCrypto(err) {
			_classCallCheck(this, FailedCrypto);

			cov_1ibal60p09.f[6]++;
			cov_1ibal60p09.s[7]++;
			return _possibleConstructorReturn(this, (FailedCrypto.__proto__ || Object.getPrototypeOf(FailedCrypto)).call(this, 'Failed to decrypt file' + ((cov_1ibal60p09.b[1][0]++, err) && (cov_1ibal60p09.b[1][1]++, err.message) ? (cov_1ibal60p09.b[0][0]++, ' ' + err.message) : (cov_1ibal60p09.b[0][1]++, '')) + '.'));
		}

		return FailedCrypto;
	}(Error)
});

cov_1ibal60p09.s[8]++;
module.exports = Errors;

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_184x4zwiba = function () {
	var path = '/var/www/src/engines/processing/processing-engine.js',
	    hash = '519dbe1ada0dfa94fcb96a76357f7211f480b5b1',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/engines/processing/processing-engine.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 15
				},
				end: {
					line: 1,
					column: 44
				}
			},
			'1': {
				start: {
					line: 2,
					column: 22
				},
				end: {
					line: 2,
					column: 57
				}
			},
			'2': {
				start: {
					line: 3,
					column: 13
				},
				end: {
					line: 3,
					column: 40
				}
			},
			'3': {
				start: {
					line: 4,
					column: 20
				},
				end: {
					line: 4,
					column: 55
				}
			},
			'4': {
				start: {
					line: 5,
					column: 23
				},
				end: {
					line: 5,
					column: 65
				}
			},
			'5': {
				start: {
					line: 6,
					column: 14
				},
				end: {
					line: 6,
					column: 43
				}
			},
			'6': {
				start: {
					line: 7,
					column: 19
				},
				end: {
					line: 7,
					column: 49
				}
			},
			'7': {
				start: {
					line: 8,
					column: 20
				},
				end: {
					line: 8,
					column: 51
				}
			},
			'8': {
				start: {
					line: 9,
					column: 14
				},
				end: {
					line: 9,
					column: 38
				}
			},
			'9': {
				start: {
					line: 23,
					column: 2
				},
				end: {
					line: 23,
					column: 42
				}
			},
			'10': {
				start: {
					line: 25,
					column: 2
				},
				end: {
					line: 25,
					column: 33
				}
			},
			'11': {
				start: {
					line: 30,
					column: 2
				},
				end: {
					line: 30,
					column: 33
				}
			},
			'12': {
				start: {
					line: 35,
					column: 2
				},
				end: {
					line: 35,
					column: 36
				}
			},
			'13': {
				start: {
					line: 40,
					column: 2
				},
				end: {
					line: 40,
					column: 27
				}
			},
			'14': {
				start: {
					line: 45,
					column: 2
				},
				end: {
					line: 45,
					column: 45
				}
			},
			'15': {
				start: {
					line: 50,
					column: 2
				},
				end: {
					line: 51,
					column: 73
				}
			},
			'16': {
				start: {
					line: 56,
					column: 2
				},
				end: {
					line: 56,
					column: 23
				}
			},
			'17': {
				start: {
					line: 61,
					column: 2
				},
				end: {
					line: 61,
					column: 28
				}
			},
			'18': {
				start: {
					line: 71,
					column: 2
				},
				end: {
					line: 71,
					column: 29
				}
			},
			'19': {
				start: {
					line: 80,
					column: 2
				},
				end: {
					line: 80,
					column: 37
				}
			},
			'20': {
				start: {
					line: 81,
					column: 2
				},
				end: {
					line: 89,
					column: 3
				}
			},
			'21': {
				start: {
					line: 82,
					column: 3
				},
				end: {
					line: 88,
					column: 6
				}
			},
			'22': {
				start: {
					line: 83,
					column: 4
				},
				end: {
					line: 87,
					column: 5
				}
			},
			'23': {
				start: {
					line: 84,
					column: 5
				},
				end: {
					line: 84,
					column: 50
				}
			},
			'24': {
				start: {
					line: 86,
					column: 5
				},
				end: {
					line: 86,
					column: 21
				}
			},
			'25': {
				start: {
					line: 98,
					column: 2
				},
				end: {
					line: 98,
					column: 37
				}
			},
			'26': {
				start: {
					line: 108,
					column: 2
				},
				end: {
					line: 113,
					column: 7
				}
			},
			'27': {
				start: {
					line: 109,
					column: 3
				},
				end: {
					line: 111,
					column: 5
				}
			},
			'28': {
				start: {
					line: 110,
					column: 4
				},
				end: {
					line: 110,
					column: 36
				}
			},
			'29': {
				start: {
					line: 112,
					column: 3
				},
				end: {
					line: 112,
					column: 36
				}
			},
			'30': {
				start: {
					line: 114,
					column: 14
				},
				end: {
					line: 114,
					column: 33
				}
			},
			'31': {
				start: {
					line: 116,
					column: 2
				},
				end: {
					line: 116,
					column: 44
				}
			},
			'32': {
				start: {
					line: 117,
					column: 2
				},
				end: {
					line: 117,
					column: 41
				}
			},
			'33': {
				start: {
					line: 118,
					column: 2
				},
				end: {
					line: 118,
					column: 28
				}
			},
			'34': {
				start: {
					line: 127,
					column: 2
				},
				end: {
					line: 127,
					column: 28
				}
			},
			'35': {
				start: {
					line: 128,
					column: 2
				},
				end: {
					line: 128,
					column: 28
				}
			},
			'36': {
				start: {
					line: 129,
					column: 2
				},
				end: {
					line: 129,
					column: 24
				}
			},
			'37': {
				start: {
					line: 139,
					column: 14
				},
				end: {
					line: 139,
					column: 35
				}
			},
			'38': {
				start: {
					line: 140,
					column: 17
				},
				end: {
					line: 140,
					column: 37
				}
			},
			'39': {
				start: {
					line: 142,
					column: 2
				},
				end: {
					line: 144,
					column: 3
				}
			},
			'40': {
				start: {
					line: 143,
					column: 3
				},
				end: {
					line: 143,
					column: 32
				}
			},
			'41': {
				start: {
					line: 146,
					column: 2
				},
				end: {
					line: 158,
					column: 3
				}
			},
			'42': {
				start: {
					line: 147,
					column: 3
				},
				end: {
					line: 155,
					column: 4
				}
			},
			'43': {
				start: {
					line: 148,
					column: 4
				},
				end: {
					line: 150,
					column: 5
				}
			},
			'44': {
				start: {
					line: 149,
					column: 5
				},
				end: {
					line: 149,
					column: 42
				}
			},
			'45': {
				start: {
					line: 151,
					column: 4
				},
				end: {
					line: 151,
					column: 32
				}
			},
			'46': {
				start: {
					line: 153,
					column: 4
				},
				end: {
					line: 153,
					column: 35
				}
			},
			'47': {
				start: {
					line: 154,
					column: 4
				},
				end: {
					line: 154,
					column: 29
				}
			},
			'48': {
				start: {
					line: 157,
					column: 3
				},
				end: {
					line: 157,
					column: 31
				}
			},
			'49': {
				start: {
					line: 167,
					column: 2
				},
				end: {
					line: 167,
					column: 25
				}
			},
			'50': {
				start: {
					line: 168,
					column: 2
				},
				end: {
					line: 168,
					column: 29
				}
			},
			'51': {
				start: {
					line: 169,
					column: 2
				},
				end: {
					line: 169,
					column: 26
				}
			},
			'52': {
				start: {
					line: 178,
					column: 14
				},
				end: {
					line: 178,
					column: 35
				}
			},
			'53': {
				start: {
					line: 179,
					column: 16
				},
				end: {
					line: 179,
					column: 44
				}
			},
			'54': {
				start: {
					line: 181,
					column: 2
				},
				end: {
					line: 181,
					column: 35
				}
			},
			'55': {
				start: {
					line: 190,
					column: 14
				},
				end: {
					line: 190,
					column: 35
				}
			},
			'56': {
				start: {
					line: 191,
					column: 18
				},
				end: {
					line: 191,
					column: 43
				}
			},
			'57': {
				start: {
					line: 192,
					column: 29
				},
				end: {
					line: 198,
					column: 4
				}
			},
			'58': {
				start: {
					line: 193,
					column: 3
				},
				end: {
					line: 193,
					column: 44
				}
			},
			'59': {
				start: {
					line: 195,
					column: 3
				},
				end: {
					line: 195,
					column: 39
				}
			},
			'60': {
				start: {
					line: 197,
					column: 3
				},
				end: {
					line: 197,
					column: 34
				}
			},
			'61': {
				start: {
					line: 199,
					column: 25
				},
				end: {
					line: 203,
					column: 4
				}
			},
			'62': {
				start: {
					line: 200,
					column: 3
				},
				end: {
					line: 200,
					column: 44
				}
			},
			'63': {
				start: {
					line: 202,
					column: 3
				},
				end: {
					line: 202,
					column: 62
				}
			},
			'64': {
				start: {
					line: 204,
					column: 14
				},
				end: {
					line: 204,
					column: 62
				}
			},
			'65': {
				start: {
					line: 206,
					column: 2
				},
				end: {
					line: 216,
					column: 5
				}
			},
			'66': {
				start: {
					line: 207,
					column: 3
				},
				end: {
					line: 215,
					column: 6
				}
			},
			'67': {
				start: {
					line: 208,
					column: 4
				},
				end: {
					line: 214,
					column: 5
				}
			},
			'68': {
				start: {
					line: 209,
					column: 5
				},
				end: {
					line: 211,
					column: 6
				}
			},
			'69': {
				start: {
					line: 210,
					column: 6
				},
				end: {
					line: 210,
					column: 37
				}
			},
			'70': {
				start: {
					line: 213,
					column: 5
				},
				end: {
					line: 213,
					column: 36
				}
			},
			'71': {
				start: {
					line: 226,
					column: 14
				},
				end: {
					line: 226,
					column: 33
				}
			},
			'72': {
				start: {
					line: 227,
					column: 13
				},
				end: {
					line: 227,
					column: 32
				}
			},
			'73': {
				start: {
					line: 229,
					column: 2
				},
				end: {
					line: 237,
					column: 3
				}
			},
			'74': {
				start: {
					line: 230,
					column: 3
				},
				end: {
					line: 232,
					column: 4
				}
			},
			'75': {
				start: {
					line: 231,
					column: 4
				},
				end: {
					line: 231,
					column: 22
				}
			},
			'76': {
				start: {
					line: 234,
					column: 3
				},
				end: {
					line: 236,
					column: 5
				}
			},
			'77': {
				start: {
					line: 238,
					column: 2
				},
				end: {
					line: 238,
					column: 39
				}
			},
			'78': {
				start: {
					line: 247,
					column: 18
				},
				end: {
					line: 247,
					column: 37
				}
			},
			'79': {
				start: {
					line: 249,
					column: 2
				},
				end: {
					line: 251,
					column: 3
				}
			},
			'80': {
				start: {
					line: 250,
					column: 3
				},
				end: {
					line: 250,
					column: 37
				}
			},
			'81': {
				start: {
					line: 252,
					column: 2
				},
				end: {
					line: 252,
					column: 14
				}
			},
			'82': {
				start: {
					line: 261,
					column: 14
				},
				end: {
					line: 261,
					column: 33
				}
			},
			'83': {
				start: {
					line: 263,
					column: 2
				},
				end: {
					line: 266,
					column: 3
				}
			},
			'84': {
				start: {
					line: 264,
					column: 3
				},
				end: {
					line: 264,
					column: 55
				}
			},
			'85': {
				start: {
					line: 265,
					column: 3
				},
				end: {
					line: 265,
					column: 47
				}
			},
			'86': {
				start: {
					line: 268,
					column: 2
				},
				end: {
					line: 271,
					column: 3
				}
			},
			'87': {
				start: {
					line: 269,
					column: 3
				},
				end: {
					line: 269,
					column: 55
				}
			},
			'88': {
				start: {
					line: 270,
					column: 3
				},
				end: {
					line: 270,
					column: 52
				}
			},
			'89': {
				start: {
					line: 273,
					column: 22
				},
				end: {
					line: 273,
					column: 23
				}
			},
			'90': {
				start: {
					line: 275,
					column: 2
				},
				end: {
					line: 279,
					column: 5
				}
			},
			'91': {
				start: {
					line: 276,
					column: 3
				},
				end: {
					line: 278,
					column: 4
				}
			},
			'92': {
				start: {
					line: 277,
					column: 4
				},
				end: {
					line: 277,
					column: 20
				}
			},
			'93': {
				start: {
					line: 281,
					column: 2
				},
				end: {
					line: 284,
					column: 3
				}
			},
			'94': {
				start: {
					line: 282,
					column: 3
				},
				end: {
					line: 282,
					column: 55
				}
			},
			'95': {
				start: {
					line: 283,
					column: 3
				},
				end: {
					line: 283,
					column: 56
				}
			},
			'96': {
				start: {
					line: 290,
					column: 2
				},
				end: {
					line: 295,
					column: 3
				}
			},
			'97': {
				start: {
					line: 291,
					column: 3
				},
				end: {
					line: 293,
					column: 4
				}
			},
			'98': {
				start: {
					line: 292,
					column: 4
				},
				end: {
					line: 292,
					column: 52
				}
			},
			'99': {
				start: {
					line: 294,
					column: 3
				},
				end: {
					line: 294,
					column: 46
				}
			},
			'100': {
				start: {
					line: 305,
					column: 14
				},
				end: {
					line: 305,
					column: 33
				}
			},
			'101': {
				start: {
					line: 306,
					column: 17
				},
				end: {
					line: 306,
					column: 41
				}
			},
			'102': {
				start: {
					line: 308,
					column: 2
				},
				end: {
					line: 310,
					column: 3
				}
			},
			'103': {
				start: {
					line: 309,
					column: 3
				},
				end: {
					line: 309,
					column: 32
				}
			},
			'104': {
				start: {
					line: 312,
					column: 2
				},
				end: {
					line: 324,
					column: 3
				}
			},
			'105': {
				start: {
					line: 313,
					column: 3
				},
				end: {
					line: 315,
					column: 4
				}
			},
			'106': {
				start: {
					line: 314,
					column: 4
				},
				end: {
					line: 314,
					column: 30
				}
			},
			'107': {
				start: {
					line: 317,
					column: 3
				},
				end: {
					line: 321,
					column: 4
				}
			},
			'108': {
				start: {
					line: 318,
					column: 4
				},
				end: {
					line: 318,
					column: 42
				}
			},
			'109': {
				start: {
					line: 320,
					column: 4
				},
				end: {
					line: 320,
					column: 41
				}
			},
			'110': {
				start: {
					line: 323,
					column: 3
				},
				end: {
					line: 323,
					column: 47
				}
			},
			'111': {
				start: {
					line: 331,
					column: 2
				},
				end: {
					line: 336,
					column: 3
				}
			},
			'112': {
				start: {
					line: 335,
					column: 3
				},
				end: {
					line: 335,
					column: 26
				}
			},
			'113': {
				start: {
					line: 337,
					column: 2
				},
				end: {
					line: 337,
					column: 29
				}
			},
			'114': {
				start: {
					line: 338,
					column: 2
				},
				end: {
					line: 338,
					column: 26
				}
			},
			'115': {
				start: {
					line: 339,
					column: 2
				},
				end: {
					line: 339,
					column: 24
				}
			},
			'116': {
				start: {
					line: 343,
					column: 2
				},
				end: {
					line: 343,
					column: 35
				}
			},
			'117': {
				start: {
					line: 344,
					column: 2
				},
				end: {
					line: 344,
					column: 21
				}
			},
			'118': {
				start: {
					line: 348,
					column: 2
				},
				end: {
					line: 348,
					column: 30
				}
			},
			'119': {
				start: {
					line: 352,
					column: 0
				},
				end: {
					line: 352,
					column: 34
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 22,
						column: 1
					},
					end: {
						line: 22,
						column: 2
					}
				},
				loc: {
					start: {
						line: 22,
						column: 26
					},
					end: {
						line: 62,
						column: 2
					}
				},
				line: 22
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 70,
						column: 1
					},
					end: {
						line: 70,
						column: 2
					}
				},
				loc: {
					start: {
						line: 70,
						column: 18
					},
					end: {
						line: 72,
						column: 2
					}
				},
				line: 70
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 79,
						column: 1
					},
					end: {
						line: 79,
						column: 2
					}
				},
				loc: {
					start: {
						line: 79,
						column: 26
					},
					end: {
						line: 90,
						column: 2
					}
				},
				line: 79
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 82,
						column: 55
					},
					end: {
						line: 82,
						column: 56
					}
				},
				loc: {
					start: {
						line: 82,
						column: 62
					},
					end: {
						line: 88,
						column: 4
					}
				},
				line: 82
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 97,
						column: 1
					},
					end: {
						line: 97,
						column: 2
					}
				},
				loc: {
					start: {
						line: 97,
						column: 16
					},
					end: {
						line: 99,
						column: 2
					}
				},
				line: 97
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 106,
						column: 1
					},
					end: {
						line: 106,
						column: 2
					}
				},
				loc: {
					start: {
						line: 106,
						column: 22
					},
					end: {
						line: 119,
						column: 2
					}
				},
				line: 106
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 108,
						column: 3
					},
					end: {
						line: 108,
						column: 4
					}
				},
				loc: {
					start: {
						line: 108,
						column: 9
					},
					end: {
						line: 113,
						column: 3
					}
				},
				line: 108
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 109,
						column: 24
					},
					end: {
						line: 109,
						column: 25
					}
				},
				loc: {
					start: {
						line: 109,
						column: 30
					},
					end: {
						line: 111,
						column: 4
					}
				},
				line: 109
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 126,
						column: 1
					},
					end: {
						line: 126,
						column: 2
					}
				},
				loc: {
					start: {
						line: 126,
						column: 20
					},
					end: {
						line: 130,
						column: 2
					}
				},
				line: 126
			},
			'9': {
				name: '(anonymous_9)',
				decl: {
					start: {
						line: 138,
						column: 1
					},
					end: {
						line: 138,
						column: 2
					}
				},
				loc: {
					start: {
						line: 138,
						column: 18
					},
					end: {
						line: 159,
						column: 2
					}
				},
				line: 138
			},
			'10': {
				name: '(anonymous_10)',
				decl: {
					start: {
						line: 166,
						column: 1
					},
					end: {
						line: 166,
						column: 2
					}
				},
				loc: {
					start: {
						line: 166,
						column: 22
					},
					end: {
						line: 170,
						column: 2
					}
				},
				line: 166
			},
			'11': {
				name: '(anonymous_11)',
				decl: {
					start: {
						line: 177,
						column: 1
					},
					end: {
						line: 177,
						column: 2
					}
				},
				loc: {
					start: {
						line: 177,
						column: 23
					},
					end: {
						line: 182,
						column: 2
					}
				},
				line: 177
			},
			'12': {
				name: '(anonymous_12)',
				decl: {
					start: {
						line: 189,
						column: 1
					},
					end: {
						line: 189,
						column: 2
					}
				},
				loc: {
					start: {
						line: 189,
						column: 19
					},
					end: {
						line: 217,
						column: 2
					}
				},
				line: 189
			},
			'13': {
				name: '(anonymous_13)',
				decl: {
					start: {
						line: 192,
						column: 44
					},
					end: {
						line: 192,
						column: 45
					}
				},
				loc: {
					start: {
						line: 192,
						column: 54
					},
					end: {
						line: 194,
						column: 3
					}
				},
				line: 192
			},
			'14': {
				name: '(anonymous_14)',
				decl: {
					start: {
						line: 194,
						column: 12
					},
					end: {
						line: 194,
						column: 13
					}
				},
				loc: {
					start: {
						line: 194,
						column: 23
					},
					end: {
						line: 196,
						column: 3
					}
				},
				line: 194
			},
			'15': {
				name: '(anonymous_15)',
				decl: {
					start: {
						line: 196,
						column: 9
					},
					end: {
						line: 196,
						column: 10
					}
				},
				loc: {
					start: {
						line: 196,
						column: 20
					},
					end: {
						line: 198,
						column: 3
					}
				},
				line: 196
			},
			'16': {
				name: '(anonymous_16)',
				decl: {
					start: {
						line: 199,
						column: 40
					},
					end: {
						line: 199,
						column: 41
					}
				},
				loc: {
					start: {
						line: 199,
						column: 50
					},
					end: {
						line: 201,
						column: 3
					}
				},
				line: 199
			},
			'17': {
				name: '(anonymous_17)',
				decl: {
					start: {
						line: 201,
						column: 12
					},
					end: {
						line: 201,
						column: 13
					}
				},
				loc: {
					start: {
						line: 201,
						column: 22
					},
					end: {
						line: 203,
						column: 3
					}
				},
				line: 201
			},
			'18': {
				name: '(anonymous_18)',
				decl: {
					start: {
						line: 206,
						column: 27
					},
					end: {
						line: 206,
						column: 28
					}
				},
				loc: {
					start: {
						line: 206,
						column: 41
					},
					end: {
						line: 216,
						column: 3
					}
				},
				line: 206
			},
			'19': {
				name: '(anonymous_19)',
				decl: {
					start: {
						line: 207,
						column: 27
					},
					end: {
						line: 207,
						column: 28
					}
				},
				loc: {
					start: {
						line: 207,
						column: 37
					},
					end: {
						line: 215,
						column: 4
					}
				},
				line: 207
			},
			'20': {
				name: '(anonymous_20)',
				decl: {
					start: {
						line: 225,
						column: 1
					},
					end: {
						line: 225,
						column: 2
					}
				},
				loc: {
					start: {
						line: 225,
						column: 27
					},
					end: {
						line: 239,
						column: 2
					}
				},
				line: 225
			},
			'21': {
				name: '(anonymous_21)',
				decl: {
					start: {
						line: 246,
						column: 1
					},
					end: {
						line: 246,
						column: 2
					}
				},
				loc: {
					start: {
						line: 246,
						column: 22
					},
					end: {
						line: 253,
						column: 2
					}
				},
				line: 246
			},
			'22': {
				name: '(anonymous_22)',
				decl: {
					start: {
						line: 260,
						column: 1
					},
					end: {
						line: 260,
						column: 2
					}
				},
				loc: {
					start: {
						line: 260,
						column: 20
					},
					end: {
						line: 296,
						column: 2
					}
				},
				line: 260
			},
			'23': {
				name: '(anonymous_23)',
				decl: {
					start: {
						line: 275,
						column: 35
					},
					end: {
						line: 275,
						column: 36
					}
				},
				loc: {
					start: {
						line: 275,
						column: 45
					},
					end: {
						line: 279,
						column: 3
					}
				},
				line: 275
			},
			'24': {
				name: '(anonymous_24)',
				decl: {
					start: {
						line: 304,
						column: 1
					},
					end: {
						line: 304,
						column: 2
					}
				},
				loc: {
					start: {
						line: 304,
						column: 21
					},
					end: {
						line: 340,
						column: 2
					}
				},
				line: 304
			},
			'25': {
				name: '(anonymous_25)',
				decl: {
					start: {
						line: 342,
						column: 1
					},
					end: {
						line: 342,
						column: 2
					}
				},
				loc: {
					start: {
						line: 342,
						column: 18
					},
					end: {
						line: 345,
						column: 2
					}
				},
				line: 342
			},
			'26': {
				name: '(anonymous_26)',
				decl: {
					start: {
						line: 347,
						column: 1
					},
					end: {
						line: 347,
						column: 2
					}
				},
				loc: {
					start: {
						line: 347,
						column: 26
					},
					end: {
						line: 349,
						column: 2
					}
				},
				line: 347
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 81,
						column: 2
					},
					end: {
						line: 89,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 81,
						column: 2
					},
					end: {
						line: 89,
						column: 3
					}
				}, {
					start: {
						line: 81,
						column: 2
					},
					end: {
						line: 89,
						column: 3
					}
				}],
				line: 81
			},
			'1': {
				loc: {
					start: {
						line: 83,
						column: 4
					},
					end: {
						line: 87,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 83,
						column: 4
					},
					end: {
						line: 87,
						column: 5
					}
				}, {
					start: {
						line: 83,
						column: 4
					},
					end: {
						line: 87,
						column: 5
					}
				}],
				line: 83
			},
			'2': {
				loc: {
					start: {
						line: 142,
						column: 2
					},
					end: {
						line: 144,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 142,
						column: 2
					},
					end: {
						line: 144,
						column: 3
					}
				}, {
					start: {
						line: 142,
						column: 2
					},
					end: {
						line: 144,
						column: 3
					}
				}],
				line: 142
			},
			'3': {
				loc: {
					start: {
						line: 146,
						column: 2
					},
					end: {
						line: 158,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 146,
						column: 2
					},
					end: {
						line: 158,
						column: 3
					}
				}, {
					start: {
						line: 146,
						column: 2
					},
					end: {
						line: 158,
						column: 3
					}
				}],
				line: 146
			},
			'4': {
				loc: {
					start: {
						line: 147,
						column: 3
					},
					end: {
						line: 155,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 147,
						column: 3
					},
					end: {
						line: 155,
						column: 4
					}
				}, {
					start: {
						line: 147,
						column: 3
					},
					end: {
						line: 155,
						column: 4
					}
				}],
				line: 147
			},
			'5': {
				loc: {
					start: {
						line: 148,
						column: 4
					},
					end: {
						line: 150,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 148,
						column: 4
					},
					end: {
						line: 150,
						column: 5
					}
				}, {
					start: {
						line: 148,
						column: 4
					},
					end: {
						line: 150,
						column: 5
					}
				}],
				line: 148
			},
			'6': {
				loc: {
					start: {
						line: 208,
						column: 4
					},
					end: {
						line: 214,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 208,
						column: 4
					},
					end: {
						line: 214,
						column: 5
					}
				}, {
					start: {
						line: 208,
						column: 4
					},
					end: {
						line: 214,
						column: 5
					}
				}],
				line: 208
			},
			'7': {
				loc: {
					start: {
						line: 209,
						column: 5
					},
					end: {
						line: 211,
						column: 6
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 209,
						column: 5
					},
					end: {
						line: 211,
						column: 6
					}
				}, {
					start: {
						line: 209,
						column: 5
					},
					end: {
						line: 211,
						column: 6
					}
				}],
				line: 209
			},
			'8': {
				loc: {
					start: {
						line: 229,
						column: 2
					},
					end: {
						line: 237,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 229,
						column: 2
					},
					end: {
						line: 237,
						column: 3
					}
				}, {
					start: {
						line: 229,
						column: 2
					},
					end: {
						line: 237,
						column: 3
					}
				}],
				line: 229
			},
			'9': {
				loc: {
					start: {
						line: 230,
						column: 3
					},
					end: {
						line: 232,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 230,
						column: 3
					},
					end: {
						line: 232,
						column: 4
					}
				}, {
					start: {
						line: 230,
						column: 3
					},
					end: {
						line: 232,
						column: 4
					}
				}],
				line: 230
			},
			'10': {
				loc: {
					start: {
						line: 249,
						column: 2
					},
					end: {
						line: 251,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 249,
						column: 2
					},
					end: {
						line: 251,
						column: 3
					}
				}, {
					start: {
						line: 249,
						column: 2
					},
					end: {
						line: 251,
						column: 3
					}
				}],
				line: 249
			},
			'11': {
				loc: {
					start: {
						line: 263,
						column: 2
					},
					end: {
						line: 266,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 263,
						column: 2
					},
					end: {
						line: 266,
						column: 3
					}
				}, {
					start: {
						line: 263,
						column: 2
					},
					end: {
						line: 266,
						column: 3
					}
				}],
				line: 263
			},
			'12': {
				loc: {
					start: {
						line: 268,
						column: 2
					},
					end: {
						line: 271,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 268,
						column: 2
					},
					end: {
						line: 271,
						column: 3
					}
				}, {
					start: {
						line: 268,
						column: 2
					},
					end: {
						line: 271,
						column: 3
					}
				}],
				line: 268
			},
			'13': {
				loc: {
					start: {
						line: 276,
						column: 3
					},
					end: {
						line: 278,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 276,
						column: 3
					},
					end: {
						line: 278,
						column: 4
					}
				}, {
					start: {
						line: 276,
						column: 3
					},
					end: {
						line: 278,
						column: 4
					}
				}],
				line: 276
			},
			'14': {
				loc: {
					start: {
						line: 281,
						column: 2
					},
					end: {
						line: 284,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 281,
						column: 2
					},
					end: {
						line: 284,
						column: 3
					}
				}, {
					start: {
						line: 281,
						column: 2
					},
					end: {
						line: 284,
						column: 3
					}
				}],
				line: 281
			},
			'15': {
				loc: {
					start: {
						line: 290,
						column: 2
					},
					end: {
						line: 295,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 290,
						column: 2
					},
					end: {
						line: 295,
						column: 3
					}
				}, {
					start: {
						line: 290,
						column: 2
					},
					end: {
						line: 295,
						column: 3
					}
				}],
				line: 290
			},
			'16': {
				loc: {
					start: {
						line: 290,
						column: 6
					},
					end: {
						line: 290,
						column: 74
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 290,
						column: 6
					},
					end: {
						line: 290,
						column: 35
					}
				}, {
					start: {
						line: 290,
						column: 39
					},
					end: {
						line: 290,
						column: 74
					}
				}],
				line: 290
			},
			'17': {
				loc: {
					start: {
						line: 291,
						column: 3
					},
					end: {
						line: 293,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 291,
						column: 3
					},
					end: {
						line: 293,
						column: 4
					}
				}, {
					start: {
						line: 291,
						column: 3
					},
					end: {
						line: 293,
						column: 4
					}
				}],
				line: 291
			},
			'18': {
				loc: {
					start: {
						line: 308,
						column: 2
					},
					end: {
						line: 310,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 308,
						column: 2
					},
					end: {
						line: 310,
						column: 3
					}
				}, {
					start: {
						line: 308,
						column: 2
					},
					end: {
						line: 310,
						column: 3
					}
				}],
				line: 308
			},
			'19': {
				loc: {
					start: {
						line: 313,
						column: 3
					},
					end: {
						line: 315,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 313,
						column: 3
					},
					end: {
						line: 315,
						column: 4
					}
				}, {
					start: {
						line: 313,
						column: 3
					},
					end: {
						line: 315,
						column: 4
					}
				}],
				line: 313
			},
			'20': {
				loc: {
					start: {
						line: 317,
						column: 3
					},
					end: {
						line: 321,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 317,
						column: 3
					},
					end: {
						line: 321,
						column: 4
					}
				}, {
					start: {
						line: 317,
						column: 3
					},
					end: {
						line: 321,
						column: 4
					}
				}],
				line: 317
			},
			'21': {
				loc: {
					start: {
						line: 331,
						column: 2
					},
					end: {
						line: 336,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 331,
						column: 2
					},
					end: {
						line: 336,
						column: 3
					}
				}, {
					start: {
						line: 331,
						column: 2
					},
					end: {
						line: 336,
						column: 3
					}
				}],
				line: 331
			},
			'22': {
				loc: {
					start: {
						line: 332,
						column: 3
					},
					end: {
						line: 333,
						column: 32
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 332,
						column: 3
					},
					end: {
						line: 332,
						column: 33
					}
				}, {
					start: {
						line: 333,
						column: 3
					},
					end: {
						line: 333,
						column: 32
					}
				}],
				line: 332
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0,
			'36': 0,
			'37': 0,
			'38': 0,
			'39': 0,
			'40': 0,
			'41': 0,
			'42': 0,
			'43': 0,
			'44': 0,
			'45': 0,
			'46': 0,
			'47': 0,
			'48': 0,
			'49': 0,
			'50': 0,
			'51': 0,
			'52': 0,
			'53': 0,
			'54': 0,
			'55': 0,
			'56': 0,
			'57': 0,
			'58': 0,
			'59': 0,
			'60': 0,
			'61': 0,
			'62': 0,
			'63': 0,
			'64': 0,
			'65': 0,
			'66': 0,
			'67': 0,
			'68': 0,
			'69': 0,
			'70': 0,
			'71': 0,
			'72': 0,
			'73': 0,
			'74': 0,
			'75': 0,
			'76': 0,
			'77': 0,
			'78': 0,
			'79': 0,
			'80': 0,
			'81': 0,
			'82': 0,
			'83': 0,
			'84': 0,
			'85': 0,
			'86': 0,
			'87': 0,
			'88': 0,
			'89': 0,
			'90': 0,
			'91': 0,
			'92': 0,
			'93': 0,
			'94': 0,
			'95': 0,
			'96': 0,
			'97': 0,
			'98': 0,
			'99': 0,
			'100': 0,
			'101': 0,
			'102': 0,
			'103': 0,
			'104': 0,
			'105': 0,
			'106': 0,
			'107': 0,
			'108': 0,
			'109': 0,
			'110': 0,
			'111': 0,
			'112': 0,
			'113': 0,
			'114': 0,
			'115': 0,
			'116': 0,
			'117': 0,
			'118': 0,
			'119': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0],
			'4': [0, 0],
			'5': [0, 0],
			'6': [0, 0],
			'7': [0, 0],
			'8': [0, 0],
			'9': [0, 0],
			'10': [0, 0],
			'11': [0, 0],
			'12': [0, 0],
			'13': [0, 0],
			'14': [0, 0],
			'15': [0, 0],
			'16': [0, 0],
			'17': [0, 0],
			'18': [0, 0],
			'19': [0, 0],
			'20': [0, 0],
			'21': [0, 0],
			'22': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Assert = (cov_184x4zwiba.s[0]++, __webpack_require__(25));
var Configuration = (cov_184x4zwiba.s[1]++, __webpack_require__(14));
var Type = (cov_184x4zwiba.s[2]++, __webpack_require__(1));
var PluginUtils = (cov_184x4zwiba.s[3]++, __webpack_require__(28));
var DownloadPlugin = (cov_184x4zwiba.s[4]++, __webpack_require__(21));
var Store = (cov_184x4zwiba.s[5]++, __webpack_require__(6));
var StackStore = (cov_184x4zwiba.s[6]++, __webpack_require__(29));
var PluginStack = (cov_184x4zwiba.s[7]++, __webpack_require__(30));
var Stack = (cov_184x4zwiba.s[8]++, __webpack_require__(16));

/**
 * Class for processing engine.
 *
 * @class      ProcessingEngine (name)
 */

var ProcessingEngine = function () {
	/**
  * Constructs the object.
  *
  * @param      {PluginStore}  pluginStore  The plugin store
  */
	function ProcessingEngine(pluginStore) {
		_classCallCheck(this, ProcessingEngine);

		cov_184x4zwiba.f[0]++;
		cov_184x4zwiba.s[9]++;

		Assert.that(pluginStore).not(undefined);

		cov_184x4zwiba.s[10]++;
		this.pluginStore = pluginStore;

		/**
   * Stacks for each media object instances.
   */
		cov_184x4zwiba.s[11]++;
		this.stacks = new StackStore();

		/**
   * Snapshots of each media object's stack.
   */
		cov_184x4zwiba.s[12]++;
		this.snapshots = new StackStore();

		/**
   * Stats of each plugin execution.
   */
		cov_184x4zwiba.s[13]++;
		this.stats = new Store();

		/**
   * Configuration.
   */
		cov_184x4zwiba.s[14]++;
		this.configuration = new Configuration({});

		/**
   * Default rendering plugin.
   */
		cov_184x4zwiba.s[15]++;
		this.defaultPlugin = new DownloadPlugin('<p> MediaTag cannot find a plugin able to render your content </p>');

		/**
   * The max size of a plugin stack.
   */
		cov_184x4zwiba.s[16]++;
		this.STACK_SIZE = 50;

		/**
   * The max count of snapshots.
   */
		cov_184x4zwiba.s[17]++;
		this.SNAPSHOTS_LIMIT = 50;
	}

	/**
  * Gets key from mediaObject.
  *
  * @param      {MediaObject}  mediaObject  The media object
  * @return     {number}
  */


	_createClass(ProcessingEngine, [{
		key: 'key',
		value: function key(mediaObject) {
			cov_184x4zwiba.f[1]++;
			cov_184x4zwiba.s[18]++;

			return mediaObject.getId();
		}

		/**
   * Configures the processing engine.
   *
   * @param      {Configuration}  configuration  The configuration
   */

	}, {
		key: 'configure',
		value: function configure(configuration) {
			var _this = this;

			cov_184x4zwiba.f[2]++;
			cov_184x4zwiba.s[19]++;

			this.configuration = configuration;
			cov_184x4zwiba.s[20]++;
			if (configuration.processingEngine) {
				cov_184x4zwiba.b[0][0]++;
				cov_184x4zwiba.s[21]++;

				Object.keys(configuration.processingEngine).forEach(function (key) {
					cov_184x4zwiba.f[3]++;
					cov_184x4zwiba.s[22]++;

					if (key === 'defaultPlugin') {
						cov_184x4zwiba.b[1][0]++;
						cov_184x4zwiba.s[23]++;

						_this[key] = configuration.getDefaultPlugin();
					} else {
						cov_184x4zwiba.b[1][1]++;
						cov_184x4zwiba.s[24]++;

						_this[key] = key;
					}
				});
			} else {
				cov_184x4zwiba.b[0][1]++;
			}
		}

		/**
   * Determines if configured.
   *
   * @return     {boolean}  True if configured, False otherwise.
   */

	}, {
		key: 'isConfigured',
		value: function isConfigured() {
			cov_184x4zwiba.f[4]++;
			cov_184x4zwiba.s[25]++;

			return Boolean(this.configuration);
		}

		/**
   * Prepares mediaObject with some stuff.
   *
   * @param      {MediaObject}  mediaObject  The media object
   */

	}, {
		key: 'prepare',
		value: function prepare(mediaObject) {
			var _this2 = this;

			cov_184x4zwiba.f[5]++;
			cov_184x4zwiba.s[26]++;

			// TODO Handle this stuff properly by test it...
			(function () {
				cov_184x4zwiba.f[6]++;
				cov_184x4zwiba.s[27]++;

				mediaObject.return = function () {
					cov_184x4zwiba.f[7]++;
					cov_184x4zwiba.s[28]++;

					return _this2.return(mediaObject);
				};
				cov_184x4zwiba.s[29]++;
				mediaObject.state = 'processing';
			})();
			var key = (cov_184x4zwiba.s[30]++, mediaObject.getId());

			cov_184x4zwiba.s[31]++;
			this.stacks.store(key, new PluginStack());
			cov_184x4zwiba.s[32]++;
			this.snapshots.store(key, new Stack());
			cov_184x4zwiba.s[33]++;
			this.stats.store(key, {});
		}

		/**
   * Starts a processing over an instance of mediaObject.
   *
   * @param      {MediaObject}  mediaObject  The media object
   */

	}, {
		key: 'start',
		value: function start(mediaObject) {
			cov_184x4zwiba.f[8]++;
			cov_184x4zwiba.s[34]++;

			this.prepare(mediaObject);
			cov_184x4zwiba.s[35]++;
			this.routine(mediaObject);
			cov_184x4zwiba.s[36]++;
			this.run(mediaObject);
		}

		/**
   * Runs a processing engine step on mediaObject.
   *
   * @param      {MediaObject}  mediaObject  The media object
   * @return     {?MediaObject}
   */

	}, {
		key: 'run',
		value: function run(mediaObject) {
			cov_184x4zwiba.f[9]++;

			var key = (cov_184x4zwiba.s[37]++, this.key(mediaObject));
			var plugin = (cov_184x4zwiba.s[38]++, this.stacks.top(key));

			cov_184x4zwiba.s[39]++;
			if (!plugin) {
				cov_184x4zwiba.b[2][0]++;
				cov_184x4zwiba.s[40]++;

				return this.end(mediaObject);
			} else {
				cov_184x4zwiba.b[2][1]++;
			}

			cov_184x4zwiba.s[41]++;
			if (this.configuration) {
				cov_184x4zwiba.b[3][0]++;
				cov_184x4zwiba.s[42]++;

				if (this.configuration.isAllowed(plugin.identifier)) {
					cov_184x4zwiba.b[4][0]++;
					cov_184x4zwiba.s[43]++;

					if (!plugin.process) {
						cov_184x4zwiba.b[5][0]++;
						cov_184x4zwiba.s[44]++;

						console.warn('FALSY PLUGIN', plugin);
					} else {
						cov_184x4zwiba.b[5][1]++;
					}
					cov_184x4zwiba.s[45]++;
					plugin.process(mediaObject);
				} else {
					cov_184x4zwiba.b[4][1]++;
					cov_184x4zwiba.s[46]++;

					this.skip(mediaObject, plugin);
					cov_184x4zwiba.s[47]++;
					this.return(mediaObject);
				}
			} else {
				cov_184x4zwiba.b[3][1]++;
				cov_184x4zwiba.s[48]++;

				plugin.process(mediaObject);
			}
		}

		/**
   * Routine
   *
   * @param      {MediaObject}  mediaObject  The media object
   */

	}, {
		key: 'routine',
		value: function routine(mediaObject) {
			cov_184x4zwiba.f[10]++;
			cov_184x4zwiba.s[49]++;

			this.fill(mediaObject);
			cov_184x4zwiba.s[50]++;
			this.snapshot(mediaObject);
			cov_184x4zwiba.s[51]++;
			this.check(mediaObject);
		}

		/**
   * Snapshots the current mediaObject plugin stack.
   *
   * @param      {MediaObject}  mediaObject  The media object
   */

	}, {
		key: 'snapshot',
		value: function snapshot(mediaObject) {
			cov_184x4zwiba.f[11]++;

			var key = (cov_184x4zwiba.s[52]++, this.key(mediaObject));
			var stack = (cov_184x4zwiba.s[53]++, this.stacks.get(key).clone());

			cov_184x4zwiba.s[54]++;
			this.snapshots.stack(key, stack);
		}

		/**
   * Fills up the stack of usable plugins on this media object.
   *
   * @param      {MediaObject}  mediaObject  The media object
   */

	}, {
		key: 'fill',
		value: function fill(mediaObject) {
			var _this3 = this;

			cov_184x4zwiba.f[12]++;

			var key = (cov_184x4zwiba.s[55]++, this.key(mediaObject));
			var plugins = (cov_184x4zwiba.s[56]++, this.pluginStore.values());
			var matchedIdentifiers = (cov_184x4zwiba.s[57]++, plugins.filter(function (plugin) {
				cov_184x4zwiba.f[13]++;
				cov_184x4zwiba.s[58]++;

				return plugin.getType() === Type.MATCHER;
			}).filter(function (matcher) {
				cov_184x4zwiba.f[14]++;
				cov_184x4zwiba.s[59]++;

				return matcher.process(mediaObject);
			}).map(function (matcher) {
				cov_184x4zwiba.f[15]++;
				cov_184x4zwiba.s[60]++;

				return matcher.getIdentifier();
			}));
			var matchedPlugins = (cov_184x4zwiba.s[61]++, plugins.filter(function (plugin) {
				cov_184x4zwiba.f[16]++;
				cov_184x4zwiba.s[62]++;

				return plugin.getType() !== Type.MATCHER;
			}).filter(function (plugin) {
				cov_184x4zwiba.f[17]++;
				cov_184x4zwiba.s[63]++;

				return matchedIdentifiers.includes(plugin.getIdentifier());
			}));
			var pbo = (cov_184x4zwiba.s[64]++, PluginUtils.filterByOccurrencies(matchedPlugins));

			cov_184x4zwiba.s[65]++;
			Object.keys(pbo).forEach(function (occurrence) {
				cov_184x4zwiba.f[18]++;
				cov_184x4zwiba.s[66]++;

				pbo[occurrence].forEach(function (plugin) {
					cov_184x4zwiba.f[19]++;
					cov_184x4zwiba.s[67]++;

					if (_this3.configuration.isAllowed(plugin.getIdentifier())) {
						cov_184x4zwiba.b[6][0]++;
						cov_184x4zwiba.s[68]++;

						if (_this3.stacks.get(key).isStackable(plugin)) {
							cov_184x4zwiba.b[7][0]++;
							cov_184x4zwiba.s[69]++;

							_this3.stacks.stack(key, plugin);
						} else {
							cov_184x4zwiba.b[7][1]++;
						}
					} else {
						cov_184x4zwiba.b[6][1]++;
						cov_184x4zwiba.s[70]++;

						_this3.skip(mediaObject, plugin);
					}
				});
			});
		}

		/**
   * Updates skipped plugins.
   *
   * @param      {MediaObject}  mediaObject  The media object
   * @param      {Plugin}  plugin       The plugin
   */

	}, {
		key: 'skip',
		value: function skip(mediaObject, plugin) {
			cov_184x4zwiba.f[20]++;

			var key = (cov_184x4zwiba.s[71]++, mediaObject.getId());
			var stat = (cov_184x4zwiba.s[72]++, this.stats.get(key));

			cov_184x4zwiba.s[73]++;
			if (stat) {
				cov_184x4zwiba.b[8][0]++;
				cov_184x4zwiba.s[74]++;

				if (!stat.skipped) {
					cov_184x4zwiba.b[9][0]++;
					cov_184x4zwiba.s[75]++;

					stat.skipped = [];
				} else {
					cov_184x4zwiba.b[9][1]++;
				}
			} else {
				cov_184x4zwiba.b[8][1]++;
				cov_184x4zwiba.s[76]++;

				stat = {
					skipped: []
				};
			}
			cov_184x4zwiba.s[77]++;
			stat.skipped.push(plugin.identifier);
		}

		/**
   * Unstacks the top plugin.
   *
   * @param      {MediaObject}  mediaObject  The media object
   */

	}, {
		key: 'unstack',
		value: function unstack(mediaObject) {
			cov_184x4zwiba.f[21]++;

			var stackId = (cov_184x4zwiba.s[78]++, mediaObject.getId());

			cov_184x4zwiba.s[79]++;
			if (this.stacks[stackId]) {
				cov_184x4zwiba.b[10][0]++;
				cov_184x4zwiba.s[80]++;

				return this.stacks[stackId].pop();
			} else {
				cov_184x4zwiba.b[10][1]++;
			}
			cov_184x4zwiba.s[81]++;
			return null;
		}

		/**
   * Checks the stack.
   *
   * @param      {MediaObject}  mediaObject  The media object
   */

	}, {
		key: 'check',
		value: function check(mediaObject) {
			cov_184x4zwiba.f[22]++;

			var key = (cov_184x4zwiba.s[82]++, mediaObject.getId());

			cov_184x4zwiba.s[83]++;
			if (this.stacks.length(key) >= this.STACK_SIZE) {
				cov_184x4zwiba.b[11][0]++;
				cov_184x4zwiba.s[84]++;

				console.error('SNAPSHOTS', this.snapshots.get(key));
				cov_184x4zwiba.s[85]++;
				throw new Error('Plugin stack size exceed');
			} else {
				cov_184x4zwiba.b[11][1]++;
			}

			cov_184x4zwiba.s[86]++;
			if (this.snapshots.length(key) >= this.SNAPSHOT_LIMIT) {
				cov_184x4zwiba.b[12][0]++;
				cov_184x4zwiba.s[87]++;

				console.error('SNAPSHOTS', this.snapshots.get(key));
				cov_184x4zwiba.s[88]++;
				throw new Error('Plugin snapshots count exceed');
			} else {
				cov_184x4zwiba.b[12][1]++;
			}

			var rendererCount = (cov_184x4zwiba.s[89]++, 0);

			cov_184x4zwiba.s[90]++;
			this.stacks.plugins(key).forEach(function (plugin) {
				cov_184x4zwiba.f[23]++;
				cov_184x4zwiba.s[91]++;

				if (plugin.type === Type.RENDERER) {
					cov_184x4zwiba.b[13][0]++;
					cov_184x4zwiba.s[92]++;

					rendererCount++;
				} else {
					cov_184x4zwiba.b[13][1]++;
				}
			});

			cov_184x4zwiba.s[93]++;
			if (rendererCount > 1) {
				cov_184x4zwiba.b[14][0]++;
				cov_184x4zwiba.s[94]++;

				console.error('SNAPSHOTS', this.snapshots.get(key));
				cov_184x4zwiba.s[95]++;
				throw new Error('More of one renderer in the stack');
			} else {
				cov_184x4zwiba.b[14][1]++;
			}

			/**
    * To ends correctly, the stack have to be empty and only one renderer
    * have to be executed on a mediaObject instance.
    */
			cov_184x4zwiba.s[96]++;
			if ((cov_184x4zwiba.b[16][0]++, this.stacks.length(key) === 0) && (cov_184x4zwiba.b[16][1]++, !this.stats.get(key)[Type.RENDERER])) {
				cov_184x4zwiba.b[15][0]++;
				cov_184x4zwiba.s[97]++;

				if (!this.defaultPlugin) {
					cov_184x4zwiba.b[17][0]++;
					cov_184x4zwiba.s[98]++;

					throw new Error('No default plugin assignated');
				} else {
					cov_184x4zwiba.b[17][1]++;
				}
				cov_184x4zwiba.s[99]++;
				this.stacks.stack(key, this.defaultPlugin);
			} else {
				cov_184x4zwiba.b[15][1]++;
			}
		}

		/**
   * Returns the media object to the processing engine.
   * Every plugin must call this function when their job is done.
   *
   * @param      {MediaObject}  mediaObject  The media object
   */

	}, {
		key: 'return',
		value: function _return(mediaObject) {
			cov_184x4zwiba.f[24]++;

			var key = (cov_184x4zwiba.s[100]++, mediaObject.getId());
			var plugin = (cov_184x4zwiba.s[101]++, this.stacks.unstack(key));

			cov_184x4zwiba.s[102]++;
			if (!plugin) {
				cov_184x4zwiba.b[18][0]++;
				cov_184x4zwiba.s[103]++;

				return this.end(mediaObject);
			} else {
				cov_184x4zwiba.b[18][1]++;
			}

			cov_184x4zwiba.s[104]++;
			try {
				cov_184x4zwiba.s[105]++;

				if (!this.stats.get(key)) {
					cov_184x4zwiba.b[19][0]++;
					cov_184x4zwiba.s[106]++;

					this.stats.store(key, {});
				} else {
					cov_184x4zwiba.b[19][1]++;
				}

				cov_184x4zwiba.s[107]++;
				if (this.stats.get(key)[plugin.type]) {
					cov_184x4zwiba.b[20][0]++;
					cov_184x4zwiba.s[108]++;

					this.stats.get(key)[plugin.type] += 1;
				} else {
					cov_184x4zwiba.b[20][1]++;
					cov_184x4zwiba.s[109]++;

					this.stats.get(key)[plugin.type] = 1;
				}
			} catch (err) {
				cov_184x4zwiba.s[110]++;

				console.error(err, this.snapshots.get(key));
			}

			/**
    * These types are ineffective on attributes contained
    * inside a mediaObject instance then we don't need to
    * refill the stack.
    */
			cov_184x4zwiba.s[111]++;
			if ((cov_184x4zwiba.b[22][0]++, plugin.type !== Type.SANITIZER) && (cov_184x4zwiba.b[22][1]++, plugin.type !== Type.RENDERER)) {
				cov_184x4zwiba.b[21][0]++;
				cov_184x4zwiba.s[112]++;

				this.fill(mediaObject);
			} else {
				cov_184x4zwiba.b[21][1]++;
			}
			cov_184x4zwiba.s[113]++;
			this.snapshot(mediaObject);
			cov_184x4zwiba.s[114]++;
			this.check(mediaObject);
			cov_184x4zwiba.s[115]++;
			this.run(mediaObject);
		}
	}, {
		key: 'end',
		value: function end(mediaObject) {
			cov_184x4zwiba.f[25]++;
			cov_184x4zwiba.s[116]++;

			mediaObject.status = 'processed';
			cov_184x4zwiba.s[117]++;
			return mediaObject;
		}
	}, {
		key: 'setDefaultPlugin',
		value: function setDefaultPlugin(plugin) {
			cov_184x4zwiba.f[26]++;
			cov_184x4zwiba.s[118]++;

			this.defaultPlugin = plugin;
		}
	}]);

	return ProcessingEngine;
}();

cov_184x4zwiba.s[119]++;


module.exports = ProcessingEngine;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_69pxekf3k = function () {
	var path = "/var/www/src/utils/assert.js",
	    hash = "5778d7931090484fc2fadf65541d03251e3e4448",
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = "__coverage__",
	    coverageData = {
		path: "/var/www/src/utils/assert.js",
		statementMap: {
			"0": {
				start: {
					line: 8,
					column: 2
				},
				end: {
					line: 8,
					column: 21
				}
			},
			"1": {
				start: {
					line: 18,
					column: 2
				},
				end: {
					line: 18,
					column: 27
				}
			},
			"2": {
				start: {
					line: 27,
					column: 2
				},
				end: {
					line: 29,
					column: 3
				}
			},
			"3": {
				start: {
					line: 28,
					column: 3
				},
				end: {
					line: 28,
					column: 15
				}
			},
			"4": {
				start: {
					line: 30,
					column: 2
				},
				end: {
					line: 30,
					column: 71
				}
			},
			"5": {
				start: {
					line: 40,
					column: 2
				},
				end: {
					line: 42,
					column: 3
				}
			},
			"6": {
				start: {
					line: 41,
					column: 3
				},
				end: {
					line: 41,
					column: 15
				}
			},
			"7": {
				start: {
					line: 43,
					column: 2
				},
				end: {
					line: 43,
					column: 75
				}
			},
			"8": {
				start: {
					line: 47,
					column: 0
				},
				end: {
					line: 47,
					column: 24
				}
			}
		},
		fnMap: {
			"0": {
				name: "(anonymous_0)",
				decl: {
					start: {
						line: 7,
						column: 1
					},
					end: {
						line: 7,
						column: 2
					}
				},
				loc: {
					start: {
						line: 7,
						column: 20
					},
					end: {
						line: 9,
						column: 2
					}
				},
				line: 7
			},
			"1": {
				name: "(anonymous_1)",
				decl: {
					start: {
						line: 17,
						column: 1
					},
					end: {
						line: 17,
						column: 2
					}
				},
				loc: {
					start: {
						line: 17,
						column: 20
					},
					end: {
						line: 19,
						column: 2
					}
				},
				line: 17
			},
			"2": {
				name: "(anonymous_2)",
				decl: {
					start: {
						line: 26,
						column: 1
					},
					end: {
						line: 26,
						column: 2
					}
				},
				loc: {
					start: {
						line: 26,
						column: 15
					},
					end: {
						line: 31,
						column: 2
					}
				},
				line: 26
			},
			"3": {
				name: "(anonymous_3)",
				decl: {
					start: {
						line: 39,
						column: 1
					},
					end: {
						line: 39,
						column: 2
					}
				},
				loc: {
					start: {
						line: 39,
						column: 16
					},
					end: {
						line: 44,
						column: 2
					}
				},
				line: 39
			}
		},
		branchMap: {
			"0": {
				loc: {
					start: {
						line: 27,
						column: 2
					},
					end: {
						line: 29,
						column: 3
					}
				},
				type: "if",
				locations: [{
					start: {
						line: 27,
						column: 2
					},
					end: {
						line: 29,
						column: 3
					}
				}, {
					start: {
						line: 27,
						column: 2
					},
					end: {
						line: 29,
						column: 3
					}
				}],
				line: 27
			},
			"1": {
				loc: {
					start: {
						line: 40,
						column: 2
					},
					end: {
						line: 42,
						column: 3
					}
				},
				type: "if",
				locations: [{
					start: {
						line: 40,
						column: 2
					},
					end: {
						line: 42,
						column: 3
					}
				}, {
					start: {
						line: 40,
						column: 2
					},
					end: {
						line: 42,
						column: 3
					}
				}],
				line: 40
			}
		},
		s: {
			"0": 0,
			"1": 0,
			"2": 0,
			"3": 0,
			"4": 0,
			"5": 0,
			"6": 0,
			"7": 0,
			"8": 0
		},
		f: {
			"0": 0,
			"1": 0,
			"2": 0,
			"3": 0
		},
		b: {
			"0": [0, 0],
			"1": [0, 0]
		},
		_coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Assert = function () {
	/**
  * Constructs the object.
  *
  * @param      {*}  truth   The truth
  */
	function Assert(truth) {
		_classCallCheck(this, Assert);

		cov_69pxekf3k.f[0]++;
		cov_69pxekf3k.s[0]++;

		this.truth = truth;
	}

	/**
  * Instanciate an assertion on something considered as a truth.
  *
  * @param      {*}  truth   The truth
  * @return     {Assert}
  */


	_createClass(Assert, [{
		key: "is",


		/**
   * Asserts is something.
   * @param      {*}  predicate  The predicate
   * @return     {Object}
   */
		value: function is(predicate) {
			cov_69pxekf3k.f[2]++;
			cov_69pxekf3k.s[2]++;

			if (this.truth === predicate) {
				cov_69pxekf3k.b[0][0]++;
				cov_69pxekf3k.s[3]++;

				return this;
			} else {
				cov_69pxekf3k.b[0][1]++;
			}
			cov_69pxekf3k.s[4]++;
			throw new Error("Assertion fail on : " + this.truth + " is " + predicate);
		}

		/**
   * Asserts is not something.
   *
   * @param      {*}  predicate  The predicate
   * @return     {Object}
   */

	}, {
		key: "not",
		value: function not(predicate) {
			cov_69pxekf3k.f[3]++;
			cov_69pxekf3k.s[5]++;

			if (this.truth !== predicate) {
				cov_69pxekf3k.b[1][0]++;
				cov_69pxekf3k.s[6]++;

				return this;
			} else {
				cov_69pxekf3k.b[1][1]++;
			}
			cov_69pxekf3k.s[7]++;
			throw new Error("Assertion fail on : " + this.truth + " is not " + predicate);
		}
	}], [{
		key: "that",
		value: function that(truth) {
			cov_69pxekf3k.f[1]++;
			cov_69pxekf3k.s[1]++;

			return new Assert(truth);
		}
	}]);

	return Assert;
}();

cov_69pxekf3k.s[8]++;


module.exports = Assert;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2kwh4mghhs = function () {
	var path = '/var/www/src/plugins/group.js',
	    hash = '174c7cc2344c6144ff770d767a0e1eb364326461',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/group.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 15
				},
				end: {
					line: 1,
					column: 34
				}
			},
			'1': {
				start: {
					line: 13,
					column: 2
				},
				end: {
					line: 13,
					column: 38
				}
			},
			'2': {
				start: {
					line: 14,
					column: 2
				},
				end: {
					line: 14,
					column: 20
				}
			},
			'3': {
				start: {
					line: 23,
					column: 2
				},
				end: {
					line: 25,
					column: 3
				}
			},
			'4': {
				start: {
					line: 24,
					column: 3
				},
				end: {
					line: 24,
					column: 29
				}
			},
			'5': {
				start: {
					line: 36,
					column: 2
				},
				end: {
					line: 38,
					column: 3
				}
			},
			'6': {
				start: {
					line: 37,
					column: 3
				},
				end: {
					line: 37,
					column: 54
				}
			},
			'7': {
				start: {
					line: 40,
					column: 2
				},
				end: {
					line: 51,
					column: 5
				}
			},
			'8': {
				start: {
					line: 41,
					column: 3
				},
				end: {
					line: 45,
					column: 4
				}
			},
			'9': {
				start: {
					line: 42,
					column: 4
				},
				end: {
					line: 44,
					column: 39
				}
			},
			'10': {
				start: {
					line: 46,
					column: 3
				},
				end: {
					line: 49,
					column: 4
				}
			},
			'11': {
				start: {
					line: 47,
					column: 4
				},
				end: {
					line: 48,
					column: 27
				}
			},
			'12': {
				start: {
					line: 50,
					column: 3
				},
				end: {
					line: 50,
					column: 43
				}
			},
			'13': {
				start: {
					line: 60,
					column: 2
				},
				end: {
					line: 62,
					column: 5
				}
			},
			'14': {
				start: {
					line: 61,
					column: 3
				},
				end: {
					line: 61,
					column: 29
				}
			},
			'15': {
				start: {
					line: 66,
					column: 0
				},
				end: {
					line: 66,
					column: 23
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 12,
						column: 1
					},
					end: {
						line: 12,
						column: 2
					}
				},
				loc: {
					start: {
						line: 12,
						column: 43
					},
					end: {
						line: 15,
						column: 2
					}
				},
				line: 12
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 22,
						column: 1
					},
					end: {
						line: 22,
						column: 2
					}
				},
				loc: {
					start: {
						line: 22,
						column: 19
					},
					end: {
						line: 26,
						column: 2
					}
				},
				line: 22
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 35,
						column: 1
					},
					end: {
						line: 35,
						column: 2
					}
				},
				loc: {
					start: {
						line: 35,
						column: 44
					},
					end: {
						line: 52,
						column: 2
					}
				},
				line: 35
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 40,
						column: 21
					},
					end: {
						line: 40,
						column: 22
					}
				},
				loc: {
					start: {
						line: 40,
						column: 31
					},
					end: {
						line: 51,
						column: 3
					}
				},
				line: 40
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 59,
						column: 1
					},
					end: {
						line: 59,
						column: 2
					}
				},
				loc: {
					start: {
						line: 59,
						column: 20
					},
					end: {
						line: 63,
						column: 2
					}
				},
				line: 59
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 60,
						column: 23
					},
					end: {
						line: 60,
						column: 24
					}
				},
				loc: {
					start: {
						line: 60,
						column: 33
					},
					end: {
						line: 62,
						column: 3
					}
				},
				line: 60
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 23,
						column: 2
					},
					end: {
						line: 25,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 23,
						column: 2
					},
					end: {
						line: 25,
						column: 3
					}
				}, {
					start: {
						line: 23,
						column: 2
					},
					end: {
						line: 25,
						column: 3
					}
				}],
				line: 23
			},
			'1': {
				loc: {
					start: {
						line: 36,
						column: 2
					},
					end: {
						line: 38,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 36,
						column: 2
					},
					end: {
						line: 38,
						column: 3
					}
				}, {
					start: {
						line: 36,
						column: 2
					},
					end: {
						line: 38,
						column: 3
					}
				}],
				line: 36
			},
			'2': {
				loc: {
					start: {
						line: 41,
						column: 3
					},
					end: {
						line: 45,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 41,
						column: 3
					},
					end: {
						line: 45,
						column: 4
					}
				}, {
					start: {
						line: 41,
						column: 3
					},
					end: {
						line: 45,
						column: 4
					}
				}],
				line: 41
			},
			'3': {
				loc: {
					start: {
						line: 41,
						column: 7
					},
					end: {
						line: 41,
						column: 25
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 41,
						column: 7
					},
					end: {
						line: 41,
						column: 11
					}
				}, {
					start: {
						line: 41,
						column: 15
					},
					end: {
						line: 41,
						column: 25
					}
				}],
				line: 41
			},
			'4': {
				loc: {
					start: {
						line: 42,
						column: 11
					},
					end: {
						line: 44,
						column: 38
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 42,
						column: 11
					},
					end: {
						line: 42,
						column: 43
					}
				}, {
					start: {
						line: 43,
						column: 6
					},
					end: {
						line: 43,
						column: 26
					}
				}, {
					start: {
						line: 44,
						column: 6
					},
					end: {
						line: 44,
						column: 38
					}
				}],
				line: 42
			},
			'5': {
				loc: {
					start: {
						line: 46,
						column: 3
					},
					end: {
						line: 49,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 46,
						column: 3
					},
					end: {
						line: 49,
						column: 4
					}
				}, {
					start: {
						line: 46,
						column: 3
					},
					end: {
						line: 49,
						column: 4
					}
				}],
				line: 46
			},
			'6': {
				loc: {
					start: {
						line: 47,
						column: 11
					},
					end: {
						line: 48,
						column: 26
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 47,
						column: 11
					},
					end: {
						line: 47,
						column: 43
					}
				}, {
					start: {
						line: 48,
						column: 6
					},
					end: {
						line: 48,
						column: 26
					}
				}],
				line: 47
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0],
			'4': [0, 0, 0],
			'5': [0, 0],
			'6': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Plugin = (cov_2kwh4mghhs.s[0]++, __webpack_require__(3));

/**
 * Class for group plugins.
 *
 * @class      Group (name)
 */

var Group = function (_ref) {
	_inherits(Group, _ref);

	/**
  * Constructs the object.
  */
	function Group(identifier, type, occurrence) {
		_classCallCheck(this, Group);

		cov_2kwh4mghhs.f[0]++;
		cov_2kwh4mghhs.s[1]++;

		var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, identifier, type, occurrence));

		cov_2kwh4mghhs.s[2]++;

		_this.plugins = [];
		return _this;
	}

	/**
  * Adds a plugin.
  *
  * @param      {Plugin}  plugin  The plugin
  */


	_createClass(Group, [{
		key: 'addPlugin',
		value: function addPlugin(plugin) {
			cov_2kwh4mghhs.f[1]++;
			cov_2kwh4mghhs.s[3]++;

			if (this.plugins.includes(plugin) === false) {
				cov_2kwh4mghhs.b[0][0]++;
				cov_2kwh4mghhs.s[4]++;

				this.plugins.push(plugin);
			} else {
				cov_2kwh4mghhs.b[0][1]++;
			}
		}

		/**
   * Removes a plugin.
   *
   * @param      {Identifier}  identifier  The identifier
   * @param      {Type}  type        The type
   * @param      {Occurrence}  occurrence  The occurrence
   */

	}, {
		key: 'removePlugin',
		value: function removePlugin(identifier, type, occurrence) {
			cov_2kwh4mghhs.f[2]++;
			cov_2kwh4mghhs.s[5]++;

			if (!identifier) {
				cov_2kwh4mghhs.b[1][0]++;
				cov_2kwh4mghhs.s[6]++;

				throw new Error('Identifier is null or undefined');
			} else {
				cov_2kwh4mghhs.b[1][1]++;
			}

			cov_2kwh4mghhs.s[7]++;
			this.plugin.filter(function (plugin) {
				cov_2kwh4mghhs.f[3]++;
				cov_2kwh4mghhs.s[8]++;

				if ((cov_2kwh4mghhs.b[3][0]++, type) && (cov_2kwh4mghhs.b[3][1]++, occurrence)) {
					cov_2kwh4mghhs.b[2][0]++;
					cov_2kwh4mghhs.s[9]++;

					return (cov_2kwh4mghhs.b[4][0]++, identifier === plugin.identifier) && (cov_2kwh4mghhs.b[4][1]++, type === plugin.type) && (cov_2kwh4mghhs.b[4][2]++, occurrence === plugin.occurrence);
				} else {
					cov_2kwh4mghhs.b[2][1]++;
				}
				cov_2kwh4mghhs.s[10]++;
				if (type) {
					cov_2kwh4mghhs.b[5][0]++;
					cov_2kwh4mghhs.s[11]++;

					return (cov_2kwh4mghhs.b[6][0]++, identifier === plugin.identifier) && (cov_2kwh4mghhs.b[6][1]++, type === plugin.type);
				} else {
					cov_2kwh4mghhs.b[5][1]++;
				}
				cov_2kwh4mghhs.s[12]++;
				return identifier === plugin.identifier;
			});
		}

		/**
   * Starts all stored plugins on a media object.
   *
   * @param      {MediaObject}  mediaObject  The media object
   */

	}, {
		key: 'start',
		value: function start(mediaObject) {
			cov_2kwh4mghhs.f[4]++;
			cov_2kwh4mghhs.s[13]++;

			this.plugins.forEach(function (plugin) {
				cov_2kwh4mghhs.f[5]++;
				cov_2kwh4mghhs.s[14]++;

				plugin.start(mediaObject);
			});
		}
	}]);

	return Group;
}((Plugin));

cov_2kwh4mghhs.s[15]++;


module.exports = Group;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_24z331vy3d = function () {
	var path = '/var/www/src/enums/permission.js',
	    hash = 'bcb5ce0010c33347de8360addb4d5ec72d00303f',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/enums/permission.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 19
				},
				end: {
					line: 5,
					column: 1
				}
			},
			'1': {
				start: {
					line: 7,
					column: 0
				},
				end: {
					line: 7,
					column: 28
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var Permission = (cov_24z331vy3d.s[0]++, {
	ALLOWED: 'allowed',
	REQUIRED: 'required',
	FORBIDDEN: 'forbidden'
});

cov_24z331vy3d.s[1]++;
module.exports = Permission;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_84x8jblu7 = function () {
	var path = "/var/www/src/utils/plugin-utils.js",
	    hash = "b2010058f88653d65ab59fbb9171696009d3dd4e",
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = "__coverage__",
	    coverageData = {
		path: "/var/www/src/utils/plugin-utils.js",
		statementMap: {
			"0": {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 12,
					column: 5
				}
			},
			"1": {
				start: {
					line: 11,
					column: 3
				},
				end: {
					line: 11,
					column: 43
				}
			},
			"2": {
				start: {
					line: 22,
					column: 17
				},
				end: {
					line: 26,
					column: 3
				}
			},
			"3": {
				start: {
					line: 28,
					column: 2
				},
				end: {
					line: 34,
					column: 3
				}
			},
			"4": {
				start: {
					line: 29,
					column: 3
				},
				end: {
					line: 33,
					column: 4
				}
			},
			"5": {
				start: {
					line: 30,
					column: 4
				},
				end: {
					line: 30,
					column: 43
				}
			},
			"6": {
				start: {
					line: 32,
					column: 4
				},
				end: {
					line: 32,
					column: 49
				}
			},
			"7": {
				start: {
					line: 35,
					column: 2
				},
				end: {
					line: 35,
					column: 16
				}
			},
			"8": {
				start: {
					line: 39,
					column: 0
				},
				end: {
					line: 39,
					column: 29
				}
			}
		},
		fnMap: {
			"0": {
				name: "(anonymous_0)",
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 48
					},
					end: {
						line: 13,
						column: 2
					}
				},
				line: 9
			},
			"1": {
				name: "(anonymous_1)",
				decl: {
					start: {
						line: 10,
						column: 24
					},
					end: {
						line: 10,
						column: 25
					}
				},
				loc: {
					start: {
						line: 10,
						column: 34
					},
					end: {
						line: 12,
						column: 3
					}
				},
				line: 10
			},
			"2": {
				name: "(anonymous_2)",
				decl: {
					start: {
						line: 21,
						column: 1
					},
					end: {
						line: 21,
						column: 2
					}
				},
				loc: {
					start: {
						line: 21,
						column: 38
					},
					end: {
						line: 36,
						column: 2
					}
				},
				line: 21
			}
		},
		branchMap: {
			"0": {
				loc: {
					start: {
						line: 29,
						column: 3
					},
					end: {
						line: 33,
						column: 4
					}
				},
				type: "if",
				locations: [{
					start: {
						line: 29,
						column: 3
					},
					end: {
						line: 33,
						column: 4
					}
				}, {
					start: {
						line: 29,
						column: 3
					},
					end: {
						line: 33,
						column: 4
					}
				}],
				line: 29
			}
		},
		s: {
			"0": 0,
			"1": 0,
			"2": 0,
			"3": 0,
			"4": 0,
			"5": 0,
			"6": 0,
			"7": 0,
			"8": 0
		},
		f: {
			"0": 0,
			"1": 0,
			"2": 0
		},
		b: {
			"0": [0, 0]
		},
		_coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PluginUtils = function () {
	function PluginUtils() {
		_classCallCheck(this, PluginUtils);
	}

	_createClass(PluginUtils, null, [{
		key: "filterByOccurrence",

		/**
   * Filters a plugin list by occurrence.
   *
   * @param      {Array<Plugin>}  plugins     The plugins
   * @param      {Occurence}  occurrence  The occurrence
   * @return     {Array<Plugin>}  The list of plugins with the same occurrence.
   */
		value: function filterByOccurrence(plugins, occurrence) {
			cov_84x8jblu7.f[0]++;
			cov_84x8jblu7.s[0]++;

			return plugins.filter(function (plugin) {
				cov_84x8jblu7.f[1]++;
				cov_84x8jblu7.s[1]++;

				return plugin.occurrence === occurrence;
			});
		}

		/**
   * Filters plugins by occurencies.
   *
   * @param      {Array<Plugin>}  plugins  The plugins
   * @return     {Object}  Object contaning for all occurrencies a plugin lists.
   */

	}, {
		key: "filterByOccurrencies",
		value: function filterByOccurrencies(plugins) {
			cov_84x8jblu7.f[2]++;

			var result = (cov_84x8jblu7.s[2]++, {
				once: [],
				any: [],
				every: []
			});

			cov_84x8jblu7.s[3]++;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var plugin = _step.value;
					cov_84x8jblu7.s[4]++;

					if (result[plugin.occurrence]) {
						cov_84x8jblu7.b[0][0]++;
						cov_84x8jblu7.s[5]++;

						result[plugin.occurrence].push(plugin);
					} else {
						cov_84x8jblu7.b[0][1]++;
						cov_84x8jblu7.s[6]++;

						result[plugin.occurrence] = Array.of(plugin);
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			cov_84x8jblu7.s[7]++;
			return result;
		}
	}]);

	return PluginUtils;
}();

cov_84x8jblu7.s[8]++;


module.exports = PluginUtils;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1csozn7q1x = function () {
	var path = '/var/www/src/engines/processing/parts/stack-store.js',
	    hash = '323b7583eafd179753732294edc282753f824a71',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/engines/processing/parts/stack-store.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 14
				},
				end: {
					line: 1,
					column: 46
				}
			},
			'1': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 10,
					column: 30
				}
			},
			'2': {
				start: {
					line: 19,
					column: 2
				},
				end: {
					line: 19,
					column: 33
				}
			},
			'3': {
				start: {
					line: 28,
					column: 2
				},
				end: {
					line: 28,
					column: 29
				}
			},
			'4': {
				start: {
					line: 37,
					column: 2
				},
				end: {
					line: 37,
					column: 30
				}
			},
			'5': {
				start: {
					line: 46,
					column: 2
				},
				end: {
					line: 46,
					column: 33
				}
			},
			'6': {
				start: {
					line: 55,
					column: 2
				},
				end: {
					line: 55,
					column: 38
				}
			},
			'7': {
				start: {
					line: 64,
					column: 2
				},
				end: {
					line: 64,
					column: 31
				}
			},
			'8': {
				start: {
					line: 68,
					column: 0
				},
				end: {
					line: 68,
					column: 28
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 20
					},
					end: {
						line: 11,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 18,
						column: 1
					},
					end: {
						line: 18,
						column: 2
					}
				},
				loc: {
					start: {
						line: 18,
						column: 14
					},
					end: {
						line: 20,
						column: 2
					}
				},
				line: 18
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 27,
						column: 1
					},
					end: {
						line: 27,
						column: 2
					}
				},
				loc: {
					start: {
						line: 27,
						column: 10
					},
					end: {
						line: 29,
						column: 2
					}
				},
				line: 27
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 36,
						column: 1
					},
					end: {
						line: 36,
						column: 2
					}
				},
				loc: {
					start: {
						line: 36,
						column: 11
					},
					end: {
						line: 38,
						column: 2
					}
				},
				line: 36
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 45,
						column: 1
					},
					end: {
						line: 45,
						column: 2
					}
				},
				loc: {
					start: {
						line: 45,
						column: 14
					},
					end: {
						line: 47,
						column: 2
					}
				},
				line: 45
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 54,
						column: 1
					},
					end: {
						line: 54,
						column: 2
					}
				},
				loc: {
					start: {
						line: 54,
						column: 13
					},
					end: {
						line: 56,
						column: 2
					}
				},
				line: 54
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 63,
						column: 1
					},
					end: {
						line: 63,
						column: 2
					}
				},
				loc: {
					start: {
						line: 63,
						column: 14
					},
					end: {
						line: 65,
						column: 2
					}
				},
				line: 63
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Store = (cov_1csozn7q1x.s[0]++, __webpack_require__(6));

var StackStore = function (_ref) {
	_inherits(StackStore, _ref);

	function StackStore() {
		_classCallCheck(this, StackStore);

		return _possibleConstructorReturn(this, (StackStore.__proto__ || Object.getPrototypeOf(StackStore)).apply(this, arguments));
	}

	_createClass(StackStore, [{
		key: 'stack',

		/**
   * Stacks an object.
   *
   * @param      {Object}  object  The object
   */
		value: function stack(key, object) {
			cov_1csozn7q1x.f[0]++;
			cov_1csozn7q1x.s[1]++;

			this.get(key).stack(object);
		}

		/**
   * Unstacks an object.
   *
   * @return     {Object|undefined}
   */

	}, {
		key: 'unstack',
		value: function unstack(key) {
			cov_1csozn7q1x.f[1]++;
			cov_1csozn7q1x.s[2]++;

			return this.get(key).unstack();
		}

		/**
   * Top of the stack.
   *
   * @return     {Object|undefined}
   */

	}, {
		key: 'top',
		value: function top(key) {
			cov_1csozn7q1x.f[2]++;
			cov_1csozn7q1x.s[3]++;

			return this.get(key).top();
		}

		/**
   * Base of the stack.
   *
   * @return     {Object}
   */

	}, {
		key: 'base',
		value: function base(key) {
			cov_1csozn7q1x.f[3]++;
			cov_1csozn7q1x.s[4]++;

			return this.get(key).base();
		}

		/**
   * Determines if empty.
   *
   * @return     {boolean}  True if empty, False otherwise.
   */

	}, {
		key: 'isEmpty',
		value: function isEmpty(key) {
			cov_1csozn7q1x.f[4]++;
			cov_1csozn7q1x.s[5]++;

			return this.get(key).isEmpty();
		}

		/**
   * Stack length.
   *
   * @return     {number}
   */

	}, {
		key: 'length',
		value: function length(key) {
			cov_1csozn7q1x.f[5]++;
			cov_1csozn7q1x.s[6]++;

			return this.get(key).content.length;
		}

		/**
   * Stack content.
   *
   * @return     {Array}
   */

	}, {
		key: 'plugins',
		value: function plugins(key) {
			cov_1csozn7q1x.f[6]++;
			cov_1csozn7q1x.s[7]++;

			return this.get(key).content;
		}
	}]);

	return StackStore;
}((Store));

cov_1csozn7q1x.s[8]++;


module.exports = StackStore;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_19gav87dnm = function () {
	var path = '/var/www/src/engines/processing/parts/plugin-stack.js',
	    hash = '39ea3f01e018a3c708bf6fb8c494720b15243f74',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/engines/processing/parts/plugin-stack.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 19
				},
				end: {
					line: 1,
					column: 55
				}
			},
			'1': {
				start: {
					line: 2,
					column: 13
				},
				end: {
					line: 2,
					column: 43
				}
			},
			'2': {
				start: {
					line: 3,
					column: 15
				},
				end: {
					line: 3,
					column: 49
				}
			},
			'3': {
				start: {
					line: 4,
					column: 14
				},
				end: {
					line: 4,
					column: 32
				}
			},
			'4': {
				start: {
					line: 14,
					column: 2
				},
				end: {
					line: 14,
					column: 34
				}
			},
			'5': {
				start: {
					line: 24,
					column: 21
				},
				end: {
					line: 35,
					column: 3
				}
			},
			'6': {
				start: {
					line: 27,
					column: 4
				},
				end: {
					line: 33,
					column: 8
				}
			},
			'7': {
				start: {
					line: 37,
					column: 2
				},
				end: {
					line: 39,
					column: 5
				}
			},
			'8': {
				start: {
					line: 38,
					column: 3
				},
				end: {
					line: 38,
					column: 25
				}
			},
			'9': {
				start: {
					line: 49,
					column: 2
				},
				end: {
					line: 51,
					column: 3
				}
			},
			'10': {
				start: {
					line: 50,
					column: 3
				},
				end: {
					line: 50,
					column: 60
				}
			},
			'11': {
				start: {
					line: 52,
					column: 2
				},
				end: {
					line: 54,
					column: 3
				}
			},
			'12': {
				start: {
					line: 53,
					column: 3
				},
				end: {
					line: 53,
					column: 71
				}
			},
			'13': {
				start: {
					line: 55,
					column: 2
				},
				end: {
					line: 55,
					column: 22
				}
			},
			'14': {
				start: {
					line: 64,
					column: 2
				},
				end: {
					line: 66,
					column: 5
				}
			},
			'15': {
				start: {
					line: 65,
					column: 3
				},
				end: {
					line: 65,
					column: 40
				}
			},
			'16': {
				start: {
					line: 75,
					column: 17
				},
				end: {
					line: 75,
					column: 28
				}
			},
			'17': {
				start: {
					line: 77,
					column: 2
				},
				end: {
					line: 77,
					column: 39
				}
			},
			'18': {
				start: {
					line: 86,
					column: 2
				},
				end: {
					line: 86,
					column: 42
				}
			},
			'19': {
				start: {
					line: 90,
					column: 2
				},
				end: {
					line: 90,
					column: 24
				}
			},
			'20': {
				start: {
					line: 94,
					column: 0
				},
				end: {
					line: 94,
					column: 29
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 13,
						column: 1
					},
					end: {
						line: 13,
						column: 2
					}
				},
				loc: {
					start: {
						line: 13,
						column: 18
					},
					end: {
						line: 15,
						column: 2
					}
				},
				line: 13
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 23,
						column: 1
					},
					end: {
						line: 23,
						column: 2
					}
				},
				loc: {
					start: {
						line: 23,
						column: 21
					},
					end: {
						line: 40,
						column: 2
					}
				},
				line: 23
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 26,
						column: 22
					},
					end: {
						line: 26,
						column: 23
					}
				},
				loc: {
					start: {
						line: 26,
						column: 32
					},
					end: {
						line: 34,
						column: 4
					}
				},
				line: 26
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 37,
						column: 27
					},
					end: {
						line: 37,
						column: 28
					}
				},
				loc: {
					start: {
						line: 37,
						column: 45
					},
					end: {
						line: 39,
						column: 3
					}
				},
				line: 37
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 48,
						column: 1
					},
					end: {
						line: 48,
						column: 2
					}
				},
				loc: {
					start: {
						line: 48,
						column: 15
					},
					end: {
						line: 56,
						column: 2
					}
				},
				line: 48
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 63,
						column: 1
					},
					end: {
						line: 63,
						column: 2
					}
				},
				loc: {
					start: {
						line: 63,
						column: 15
					},
					end: {
						line: 67,
						column: 2
					}
				},
				line: 63
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 64,
						column: 27
					},
					end: {
						line: 64,
						column: 28
					}
				},
				loc: {
					start: {
						line: 64,
						column: 37
					},
					end: {
						line: 66,
						column: 3
					}
				},
				line: 64
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 74,
						column: 1
					},
					end: {
						line: 74,
						column: 2
					}
				},
				loc: {
					start: {
						line: 74,
						column: 22
					},
					end: {
						line: 78,
						column: 2
					}
				},
				line: 74
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 85,
						column: 1
					},
					end: {
						line: 85,
						column: 2
					}
				},
				loc: {
					start: {
						line: 85,
						column: 9
					},
					end: {
						line: 87,
						column: 2
					}
				},
				line: 85
			},
			'9': {
				name: '(anonymous_9)',
				decl: {
					start: {
						line: 89,
						column: 1
					},
					end: {
						line: 89,
						column: 2
					}
				},
				loc: {
					start: {
						line: 89,
						column: 11
					},
					end: {
						line: 91,
						column: 2
					}
				},
				line: 89
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 27,
						column: 11
					},
					end: {
						line: 33,
						column: 7
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 27,
						column: 11
					},
					end: {
						line: 27,
						column: 60
					}
				}, {
					start: {
						line: 28,
						column: 6
					},
					end: {
						line: 28,
						column: 43
					}
				}, {
					start: {
						line: 29,
						column: 6
					},
					end: {
						line: 29,
						column: 55
					}
				}, {
					start: {
						line: 31,
						column: 7
					},
					end: {
						line: 31,
						column: 44
					}
				}, {
					start: {
						line: 32,
						column: 7
					},
					end: {
						line: 32,
						column: 43
					}
				}],
				line: 27
			},
			'1': {
				loc: {
					start: {
						line: 38,
						column: 10
					},
					end: {
						line: 38,
						column: 24
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 38,
						column: 10
					},
					end: {
						line: 38,
						column: 16
					}
				}, {
					start: {
						line: 38,
						column: 20
					},
					end: {
						line: 38,
						column: 24
					}
				}],
				line: 38
			},
			'2': {
				loc: {
					start: {
						line: 49,
						column: 2
					},
					end: {
						line: 51,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 49,
						column: 2
					},
					end: {
						line: 51,
						column: 3
					}
				}, {
					start: {
						line: 49,
						column: 2
					},
					end: {
						line: 51,
						column: 3
					}
				}],
				line: 49
			},
			'3': {
				loc: {
					start: {
						line: 52,
						column: 2
					},
					end: {
						line: 54,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 52,
						column: 2
					},
					end: {
						line: 54,
						column: 3
					}
				}, {
					start: {
						line: 52,
						column: 2
					},
					end: {
						line: 54,
						column: 3
					}
				}],
				line: 52
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0
		},
		b: {
			'0': [0, 0, 0, 0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Occurrence = (cov_19gav87dnm.s[0]++, __webpack_require__(5));
var Type = (cov_19gav87dnm.s[1]++, __webpack_require__(1));
var Plugin = (cov_19gav87dnm.s[2]++, __webpack_require__(3));
var Stack = (cov_19gav87dnm.s[3]++, __webpack_require__(16));

var PluginStack = function (_ref) {
	_inherits(PluginStack, _ref);

	function PluginStack() {
		_classCallCheck(this, PluginStack);

		return _possibleConstructorReturn(this, (PluginStack.__proto__ || Object.getPrototypeOf(PluginStack)).apply(this, arguments));
	}

	_createClass(PluginStack, [{
		key: 'isPlugin',

		/**
   * Determines if plugin.
   *
   * @param      {Object}   object  The object
   * @return     {boolean}  True if plugin, False otherwise.
   */
		value: function isPlugin(object) {
			cov_19gav87dnm.f[0]++;
			cov_19gav87dnm.s[4]++;

			return object instanceof Plugin;
		}

		/**
   * Determines if stackable.
   *
   * @param      {Object}   object  The object
   * @return     {boolean}  True if stackable, False otherwise.
   */

	}, {
		key: 'isStackable',
		value: function isStackable(object) {
			cov_19gav87dnm.f[1]++;

			var conditions = (cov_19gav87dnm.s[5]++, [this.isPlugin(object), !this.content.some(function (plugin) {
				cov_19gav87dnm.f[2]++;
				cov_19gav87dnm.s[6]++;

				return (cov_19gav87dnm.b[0][0]++, plugin.getIdentifier() === object.getIdentifier()) && (cov_19gav87dnm.b[0][1]++, plugin.getType() === object.getType()) && (cov_19gav87dnm.b[0][2]++, plugin.getOccurrence() === object.getOccurrence()) && ((cov_19gav87dnm.b[0][3]++, object.occurrence === Occurrence.ONCE) || (cov_19gav87dnm.b[0][4]++, object.occurrence === Occurrence.ANY));
			})]);

			cov_19gav87dnm.s[7]++;
			return conditions.reduce(function (result, next) {
				cov_19gav87dnm.f[3]++;
				cov_19gav87dnm.s[8]++;

				return (cov_19gav87dnm.b[1][0]++, result) && (cov_19gav87dnm.b[1][1]++, next);
			});
		}

		/**
   * Stacks a plugin.
   *
   * @param      {Plugin}  plugin  The plugin
   * @override
   */

	}, {
		key: 'stack',
		value: function stack(plugin) {
			cov_19gav87dnm.f[4]++;
			cov_19gav87dnm.s[9]++;

			if (!this.isPlugin(plugin)) {
				cov_19gav87dnm.b[2][0]++;
				cov_19gav87dnm.s[10]++;

				throw new Error('It can\'t stacks a non plugin instance');
			} else {
				cov_19gav87dnm.b[2][1]++;
			}
			cov_19gav87dnm.s[11]++;
			if (!this.isStackable(plugin)) {
				cov_19gav87dnm.b[3][0]++;
				cov_19gav87dnm.s[12]++;

				throw new Error('A unique plugin cannot by stacked multiple times');
			} else {
				cov_19gav87dnm.b[3][1]++;
			}
			cov_19gav87dnm.s[13]++;
			_get(PluginStack.prototype.__proto__ || Object.getPrototypeOf(PluginStack.prototype), 'stack', this).call(this, plugin);
		}

		/**
   * Determines if it has renderer.
   *
   * @return     {boolean}  True if has renderer, False otherwise.
   */

	}, {
		key: 'hasRenderer',
		value: function hasRenderer() {
			cov_19gav87dnm.f[5]++;
			cov_19gav87dnm.s[14]++;

			return this.content.some(function (plugin) {
				cov_19gav87dnm.f[6]++;
				cov_19gav87dnm.s[15]++;

				return plugin.type === Type.renderer;
			});
		}

		/**
   * Determines if ending by renderer.
   *
   * @return     {boolean}  True if ending by renderer, False otherwise.
   */

	}, {
		key: 'isEndingByRenderer',
		value: function isEndingByRenderer() {
			cov_19gav87dnm.f[7]++;

			var plugin = (cov_19gav87dnm.s[16]++, this.base());

			cov_19gav87dnm.s[17]++;
			return plugin.type === Type.RENDERER;
		}

		/**
   * Creates a new instance of the object with same properties than original.
   *
   * @return     {PluginStack}  Copy of this object.
   */

	}, {
		key: 'clone',
		value: function clone() {
			cov_19gav87dnm.f[8]++;
			cov_19gav87dnm.s[18]++;

			return JSON.parse(JSON.stringify(this));
		}
	}, {
		key: 'plugins',
		value: function plugins() {
			cov_19gav87dnm.f[9]++;
			cov_19gav87dnm.s[19]++;

			return this.content();
		}
	}]);

	return PluginStack;
}((Stack));

cov_19gav87dnm.s[20]++;


module.exports = PluginStack;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2myovra17o = function () {
	var path = '/var/www/src/stores/plugin-store.js',
	    hash = '2a0371cbf5f956109f32d526b0fc740a2d571910',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/stores/plugin-store.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 14
				},
				end: {
					line: 1,
					column: 32
				}
			},
			'1': {
				start: {
					line: 11,
					column: 18
				},
				end: {
					line: 11,
					column: 31
				}
			},
			'2': {
				start: {
					line: 13,
					column: 2
				},
				end: {
					line: 18,
					column: 5
				}
			},
			'3': {
				start: {
					line: 14,
					column: 3
				},
				end: {
					line: 16,
					column: 4
				}
			},
			'4': {
				start: {
					line: 15,
					column: 4
				},
				end: {
					line: 15,
					column: 16
				}
			},
			'5': {
				start: {
					line: 17,
					column: 3
				},
				end: {
					line: 17,
					column: 16
				}
			},
			'6': {
				start: {
					line: 31,
					column: 2
				},
				end: {
					line: 31,
					column: 56
				}
			},
			'7': {
				start: {
					line: 40,
					column: 2
				},
				end: {
					line: 44,
					column: 3
				}
			},
			'8': {
				start: {
					line: 41,
					column: 3
				},
				end: {
					line: 41,
					column: 92
				}
			},
			'9': {
				start: {
					line: 43,
					column: 3
				},
				end: {
					line: 43,
					column: 58
				}
			},
			'10': {
				start: {
					line: 48,
					column: 0
				},
				end: {
					line: 48,
					column: 29
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 10,
						column: 1
					},
					end: {
						line: 10,
						column: 2
					}
				},
				loc: {
					start: {
						line: 10,
						column: 18
					},
					end: {
						line: 19,
						column: 2
					}
				},
				line: 10
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 13,
						column: 24
					},
					end: {
						line: 13,
						column: 25
					}
				},
				loc: {
					start: {
						line: 13,
						column: 34
					},
					end: {
						line: 18,
						column: 3
					}
				},
				line: 13
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 27,
						column: 1
					},
					end: {
						line: 27,
						column: 2
					}
				},
				loc: {
					start: {
						line: 27,
						column: 15
					},
					end: {
						line: 32,
						column: 2
					}
				},
				line: 27
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 39,
						column: 1
					},
					end: {
						line: 39,
						column: 2
					}
				},
				loc: {
					start: {
						line: 39,
						column: 17
					},
					end: {
						line: 45,
						column: 2
					}
				},
				line: 39
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 14,
						column: 3
					},
					end: {
						line: 16,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 14,
						column: 3
					},
					end: {
						line: 16,
						column: 4
					}
				}, {
					start: {
						line: 14,
						column: 3
					},
					end: {
						line: 16,
						column: 4
					}
				}],
				line: 14
			},
			'1': {
				loc: {
					start: {
						line: 40,
						column: 2
					},
					end: {
						line: 44,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 40,
						column: 2
					},
					end: {
						line: 44,
						column: 3
					}
				}, {
					start: {
						line: 40,
						column: 2
					},
					end: {
						line: 44,
						column: 3
					}
				}],
				line: 40
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Store = (cov_2myovra17o.s[0]++, __webpack_require__(6));

var PluginStore = function (_ref) {
	_inherits(PluginStore, _ref);

	function PluginStore() {
		_classCallCheck(this, PluginStore);

		return _possibleConstructorReturn(this, (PluginStore.__proto__ || Object.getPrototypeOf(PluginStore)).apply(this, arguments));
	}

	_createClass(PluginStore, [{
		key: 'getPlugins',

		/**
   * Gets the plugins.
   *
   * @param      {Type}  type    The type
   * @return     {Array<Plugin>}  The plugins.
   */
		value: function getPlugins(type) {
			cov_2myovra17o.f[0]++;

			var plugins = (cov_2myovra17o.s[1]++, this.values());

			cov_2myovra17o.s[2]++;
			return plugins.filter(function (plugin) {
				cov_2myovra17o.f[1]++;
				cov_2myovra17o.s[3]++;

				if (plugin.type === type) {
					cov_2myovra17o.b[0][0]++;
					cov_2myovra17o.s[4]++;

					return true;
				} else {
					cov_2myovra17o.b[0][1]++;
				}
				cov_2myovra17o.s[5]++;
				return false;
			});
		}

		/**
   * Stores a plugin.
   *
   * @param      {Plugin}  plugin  The plugin
   * @override
   */

	}, {
		key: 'store',
		value: function store(plugin) {
			cov_2myovra17o.f[2]++;
			cov_2myovra17o.s[6]++;

			/**
    * Warning : A registered plugin can be replaced by another one.
    */
			_get(PluginStore.prototype.__proto__ || Object.getPrototypeOf(PluginStore.prototype), 'store', this).call(this, [plugin.identifier, plugin.type], plugin);
		}

		/**
   * Unstores a plugin.
   *
   * @param      {Plugin}  plugin  The plugin
   */

	}, {
		key: 'unstore',
		value: function unstore(plugin) {
			cov_2myovra17o.f[3]++;
			cov_2myovra17o.s[7]++;

			if (PluginStore.isStored([plugin.identifier, plugin.type]) === false) {
				cov_2myovra17o.b[1][0]++;
				cov_2myovra17o.s[8]++;

				console.warn('The key "' + [plugin.identifier, plugin.type] + '" not exists in this manager');
			} else {
				cov_2myovra17o.b[1][1]++;
				cov_2myovra17o.s[9]++;

				return _get(PluginStore.prototype.__proto__ || Object.getPrototypeOf(PluginStore.prototype), 'unstore', this).call(this, [plugin.identifier, plugin.type]);
			}
		}
	}]);

	return PluginStore;
}((Store));

cov_2myovra17o.s[10]++;


module.exports = PluginStore;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1992klqahf = function () {
	var path = '/var/www/src/core/media-tag.js',
	    hash = 'ce8b8bc68db42a74ae5cff0671d1432bd51601c8',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/core/media-tag.js',
		statementMap: {
			'0': {
				start: {
					line: 2,
					column: 15
				},
				end: {
					line: 2,
					column: 43
				}
			},
			'1': {
				start: {
					line: 3,
					column: 25
				},
				end: {
					line: 3,
					column: 55
				}
			},
			'2': {
				start: {
					line: 4,
					column: 20
				},
				end: {
					line: 4,
					column: 45
				}
			},
			'3': {
				start: {
					line: 17,
					column: 2
				},
				end: {
					line: 17,
					column: 41
				}
			},
			'4': {
				start: {
					line: 18,
					column: 2
				},
				end: {
					line: 18,
					column: 43
				}
			},
			'5': {
				start: {
					line: 20,
					column: 26
				},
				end: {
					line: 20,
					column: 63
				}
			},
			'6': {
				start: {
					line: 22,
					column: 3
				},
				end: {
					line: 22,
					column: 82
				}
			},
			'7': {
				start: {
					line: 24,
					column: 2
				},
				end: {
					line: 72,
					column: 3
				}
			},
			'8': {
				start: {
					line: 25,
					column: 25
				},
				end: {
					line: 25,
					column: 68
				}
			},
			'9': {
				start: {
					line: 26,
					column: 25
				},
				end: {
					line: 26,
					column: 65
				}
			},
			'10': {
				start: {
					line: 28,
					column: 3
				},
				end: {
					line: 28,
					column: 38
				}
			},
			'11': {
				start: {
					line: 29,
					column: 3
				},
				end: {
					line: 31,
					column: 6
				}
			},
			'12': {
				start: {
					line: 30,
					column: 4
				},
				end: {
					line: 30,
					column: 51
				}
			},
			'13': {
				start: {
					line: 32,
					column: 3
				},
				end: {
					line: 32,
					column: 62
				}
			},
			'14': {
				start: {
					line: 34,
					column: 3
				},
				end: {
					line: 34,
					column: 47
				}
			},
			'15': {
				start: {
					line: 69,
					column: 23
				},
				end: {
					line: 69,
					column: 55
				}
			},
			'16': {
				start: {
					line: 70,
					column: 3
				},
				end: {
					line: 70,
					column: 37
				}
			},
			'17': {
				start: {
					line: 71,
					column: 3
				},
				end: {
					line: 71,
					column: 49
				}
			},
			'18': {
				start: {
					line: 82,
					column: 2
				},
				end: {
					line: 82,
					column: 38
				}
			},
			'19': {
				start: {
					line: 92,
					column: 24
				},
				end: {
					line: 92,
					column: 26
				}
			},
			'20': {
				start: {
					line: 94,
					column: 2
				},
				end: {
					line: 96,
					column: 5
				}
			},
			'21': {
				start: {
					line: 95,
					column: 3
				},
				end: {
					line: 95,
					column: 62
				}
			},
			'22': {
				start: {
					line: 98,
					column: 2
				},
				end: {
					line: 98,
					column: 23
				}
			},
			'23': {
				start: {
					line: 102,
					column: 23
				},
				end: {
					line: 102,
					column: 54
				}
			},
			'24': {
				start: {
					line: 104,
					column: 2
				},
				end: {
					line: 106,
					column: 5
				}
			},
			'25': {
				start: {
					line: 105,
					column: 3
				},
				end: {
					line: 105,
					column: 65
				}
			},
			'26': {
				start: {
					line: 108,
					column: 2
				},
				end: {
					line: 108,
					column: 22
				}
			},
			'27': {
				start: {
					line: 118,
					column: 23
				},
				end: {
					line: 118,
					column: 25
				}
			},
			'28': {
				start: {
					line: 120,
					column: 2
				},
				end: {
					line: 124,
					column: 5
				}
			},
			'29': {
				start: {
					line: 121,
					column: 23
				},
				end: {
					line: 121,
					column: 52
				}
			},
			'30': {
				start: {
					line: 123,
					column: 3
				},
				end: {
					line: 123,
					column: 34
				}
			},
			'31': {
				start: {
					line: 126,
					column: 2
				},
				end: {
					line: 126,
					column: 22
				}
			},
			'32': {
				start: {
					line: 130,
					column: 0
				},
				end: {
					line: 130,
					column: 26
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 16,
						column: 1
					},
					end: {
						line: 16,
						column: 2
					}
				},
				loc: {
					start: {
						line: 16,
						column: 48
					},
					end: {
						line: 73,
						column: 2
					}
				},
				line: 16
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 29,
						column: 30
					},
					end: {
						line: 29,
						column: 31
					}
				},
				loc: {
					start: {
						line: 29,
						column: 46
					},
					end: {
						line: 31,
						column: 4
					}
				},
				line: 29
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 81,
						column: 1
					},
					end: {
						line: 81,
						column: 2
					}
				},
				loc: {
					start: {
						line: 81,
						column: 40
					},
					end: {
						line: 83,
						column: 2
					}
				},
				line: 81
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 91,
						column: 1
					},
					end: {
						line: 91,
						column: 2
					}
				},
				loc: {
					start: {
						line: 91,
						column: 37
					},
					end: {
						line: 99,
						column: 2
					}
				},
				line: 91
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 94,
						column: 24
					},
					end: {
						line: 94,
						column: 25
					}
				},
				loc: {
					start: {
						line: 94,
						column: 40
					},
					end: {
						line: 96,
						column: 3
					}
				},
				line: 94
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 101,
						column: 1
					},
					end: {
						line: 101,
						column: 2
					}
				},
				loc: {
					start: {
						line: 101,
						column: 35
					},
					end: {
						line: 109,
						column: 2
					}
				},
				line: 101
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 104,
						column: 36
					},
					end: {
						line: 104,
						column: 37
					}
				},
				loc: {
					start: {
						line: 104,
						column: 49
					},
					end: {
						line: 106,
						column: 3
					}
				},
				line: 104
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 117,
						column: 1
					},
					end: {
						line: 117,
						column: 2
					}
				},
				loc: {
					start: {
						line: 117,
						column: 35
					},
					end: {
						line: 127,
						column: 2
					}
				},
				line: 117
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 120,
						column: 24
					},
					end: {
						line: 120,
						column: 25
					}
				},
				loc: {
					start: {
						line: 120,
						column: 40
					},
					end: {
						line: 124,
						column: 3
					}
				},
				line: 120
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 22,
						column: 3
					},
					end: {
						line: 22,
						column: 82
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 22,
						column: 3
					},
					end: {
						line: 22,
						column: 42
					}
				}, {
					start: {
						line: 22,
						column: 46
					},
					end: {
						line: 22,
						column: 82
					}
				}],
				line: 22
			},
			'1': {
				loc: {
					start: {
						line: 24,
						column: 2
					},
					end: {
						line: 72,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 24,
						column: 2
					},
					end: {
						line: 72,
						column: 3
					}
				}, {
					start: {
						line: 24,
						column: 2
					},
					end: {
						line: 72,
						column: 3
					}
				}],
				line: 24
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global document */
var Action = (cov_1992klqahf.s[0]++, __webpack_require__(33));
var AttributesObject = (cov_1992klqahf.s[1]++, __webpack_require__(7));
var MediaObject = (cov_1992klqahf.s[2]++, __webpack_require__(37));
/**
 * Class for media tag.
 *
 * @class      MediaTag (name)
 */

var MediaTag = function () {
	/**
  * Constructs the object.
  *
  * @param      {Element}  mediaTagElement  The media element
  */
	function MediaTag(mediaTagElement, processingEngine) {
		var _this = this;

		_classCallCheck(this, MediaTag);

		cov_1992klqahf.f[0]++;
		cov_1992klqahf.s[3]++;

		this.mediaTagElement = mediaTagElement;
		cov_1992klqahf.s[4]++;
		this.processingEngine = processingEngine;

		var attributeObject = (cov_1992klqahf.s[5]++, new AttributesObject(mediaTagElement));
		var sourcesAttribute = (cov_1992klqahf.s[6]++, (cov_1992klqahf.b[0][0]++, attributeObject.getAttribute('sources')) || (cov_1992klqahf.b[0][1]++, attributeObject.getAttribute('srcs')));

		cov_1992klqahf.s[7]++;
		if (sourcesAttribute) {
			cov_1992klqahf.b[1][0]++;

			var sourceObjects = (cov_1992klqahf.s[8]++, this.extractSourceObjects(sourcesAttribute));
			var mediaElements = (cov_1992klqahf.s[9]++, this.extractMediaElements(sourceObjects));

			cov_1992klqahf.s[10]++;
			this.mediaElements = mediaElements;
			cov_1992klqahf.s[11]++;
			this.mediaElements.forEach(function (mediaElement) {
				cov_1992klqahf.f[1]++;
				cov_1992klqahf.s[12]++;

				_this.mediaTagElement.appendChild(mediaElement);
			});
			cov_1992klqahf.s[13]++;
			this.mediaObjects = this.createMediaObjects(mediaElements);

			cov_1992klqahf.s[14]++;
			Action.activate(this.mediaObjects[0], this);

			/**
    * Fake actions event binding ...
    */
			// const mediaObjectVideo = this.mediaObjects[0];
			// const mediaObjectImage = this.mediaObjects[2];

			// Offline.on('down', () => {
			// 	Action.activate(mediaObjectImage, this);
			// }, 'down');

			// Offline.on('up', () => {
			// 	Action.activate(mediaObjectVideo, this);
			// }, 'up');

			// const interval = () => {
			// 	let i = 0;
			// 	let step = -1;
			// 	setInterval(() => {
			// 		console.log(i);
			// 		if (i === 0 || i === this.mediaObjects.length - 1) {
			// 			step *= -1;
			// 		}
			// 		if (step > 0) {
			// 			Action.upgrade(this);
			// 		} else {
			// 			Action.downgrade(this);
			// 		}
			// 		i += step;
			// 	}, 3000);
			// };

			// interval();
		} else {
			cov_1992klqahf.b[1][1]++;

			var mediaObject = (cov_1992klqahf.s[15]++, new MediaObject(mediaTagElement));
			cov_1992klqahf.s[16]++;
			this.mediaObjects = [mediaObject];
			cov_1992klqahf.s[17]++;
			this.activeMediaObject = this.mediaObjects[0];
		}
	}

	/**
  * Extracts source objects from a sources attribute.
  *
  * @param      {string}  sourcesAttribute  The sources attribute
  * @return     {Array}
  */


	_createClass(MediaTag, [{
		key: 'extractSourceObjects',
		value: function extractSourceObjects(sourcesAttribute) {
			cov_1992klqahf.f[2]++;
			cov_1992klqahf.s[18]++;

			return JSON.parse(sourcesAttribute);
		}

		/**
   * Extracts media elements from source object list.
   *
   * @param      {Array<Object>}  sourceObjects  The source objects
   * @return     {Array}
   */

	}, {
		key: 'extractMediaElements',
		value: function extractMediaElements(sourceObjects) {
			var _this2 = this;

			cov_1992klqahf.f[3]++;

			var mediaElements = (cov_1992klqahf.s[19]++, []);

			cov_1992klqahf.s[20]++;
			sourceObjects.forEach(function (sourceObject) {
				cov_1992klqahf.f[4]++;
				cov_1992klqahf.s[21]++;

				mediaElements.push(_this2.extractMediaElement(sourceObject));
			});

			cov_1992klqahf.s[22]++;
			return mediaElements;
		}
	}, {
		key: 'extractMediaElement',
		value: function extractMediaElement(sourceObject) {
			cov_1992klqahf.f[5]++;

			var mediaElement = (cov_1992klqahf.s[23]++, document.createElement('media'));

			cov_1992klqahf.s[24]++;
			Object.keys(sourceObject).forEach(function (attribute) {
				cov_1992klqahf.f[6]++;
				cov_1992klqahf.s[25]++;

				mediaElement.setAttribute(attribute, sourceObject[attribute]);
			});

			cov_1992klqahf.s[26]++;
			return mediaElement;
		}

		/**
   * Creates media objects.
   *
   * @param      {Array<Element>}  mediaElements  The media elements
   * @return     {Array}
   */

	}, {
		key: 'createMediaObjects',
		value: function createMediaObjects(mediaElements) {
			cov_1992klqahf.f[7]++;

			var mediaObjects = (cov_1992klqahf.s[27]++, []);

			cov_1992klqahf.s[28]++;
			mediaElements.forEach(function (mediaElement) {
				cov_1992klqahf.f[8]++;

				var mediaObject = (cov_1992klqahf.s[29]++, new MediaObject(mediaElement));

				cov_1992klqahf.s[30]++;
				mediaObjects.push(mediaObject);
			});

			cov_1992klqahf.s[31]++;
			return mediaObjects;
		}
	}]);

	return MediaTag;
}();

cov_1992klqahf.s[32]++;


module.exports = MediaTag;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_onur47t9e = function () {
	var path = '/var/www/src/actions/action.js',
	    hash = '0aaf86c3f1c67bbe4cf140ab17743a93a63647f5',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/actions/action.js',
		statementMap: {
			'0': {
				start: {
					line: 7,
					column: 15
				},
				end: {
					line: 14,
					column: 1
				}
			},
			'1': {
				start: {
					line: 16,
					column: 0
				},
				end: {
					line: 16,
					column: 24
				}
			}
		},
		fnMap: {},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0
		},
		f: {},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

/**
 * Actions bundle.
 *
 * @type       {Object}
 */

var Action = (cov_onur47t9e.s[0]++, {
	clear: __webpack_require__(34),
	show: __webpack_require__(17),
	hide: __webpack_require__(18),
	upgrade: __webpack_require__(35),
	downgrade: __webpack_require__(36),
	activate: __webpack_require__(8)
});

cov_onur47t9e.s[1]++;
module.exports = Action;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_174gryfx59 = function () {
	var path = "/var/www/src/actions/clear.js",
	    hash = "6e3bbf366463e60d67a1421f4a441e128f5dd59b",
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = "__coverage__",
	    coverageData = {
		path: "/var/www/src/actions/clear.js",
		statementMap: {
			"0": {
				start: {
					line: 1,
					column: 0
				},
				end: {
					line: 3,
					column: 2
				}
			},
			"1": {
				start: {
					line: 2,
					column: 1
				},
				end: {
					line: 2,
					column: 29
				}
			}
		},
		fnMap: {
			"0": {
				name: "(anonymous_0)",
				decl: {
					start: {
						line: 1,
						column: 17
					},
					end: {
						line: 1,
						column: 18
					}
				},
				loc: {
					start: {
						line: 1,
						column: 32
					},
					end: {
						line: 3,
						column: 1
					}
				},
				line: 1
			}
		},
		branchMap: {},
		s: {
			"0": 0,
			"1": 0
		},
		f: {
			"0": 0
		},
		b: {},
		_coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

cov_174gryfx59.s[0]++;
module.exports = function (mediaObject) {
	cov_174gryfx59.f[0]++;
	cov_174gryfx59.s[1]++;

	mediaObject.clearContents();
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1uinqlee89 = function () {
	var path = '/var/www/src/actions/upgrade.js',
	    hash = 'ca81e3b830031dadeb0e8daba4b48a5f07155e81',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/actions/upgrade.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 17
				},
				end: {
					line: 1,
					column: 38
				}
			},
			'1': {
				start: {
					line: 3,
					column: 0
				},
				end: {
					line: 8,
					column: 2
				}
			},
			'2': {
				start: {
					line: 4,
					column: 15
				},
				end: {
					line: 4,
					column: 72
				}
			},
			'3': {
				start: {
					line: 5,
					column: 1
				},
				end: {
					line: 7,
					column: 2
				}
			},
			'4': {
				start: {
					line: 6,
					column: 2
				},
				end: {
					line: 6,
					column: 55
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 3,
						column: 17
					},
					end: {
						line: 3,
						column: 18
					}
				},
				loc: {
					start: {
						line: 3,
						column: 29
					},
					end: {
						line: 8,
						column: 1
					}
				},
				line: 3
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 5,
						column: 1
					},
					end: {
						line: 7,
						column: 2
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 5,
						column: 1
					},
					end: {
						line: 7,
						column: 2
					}
				}, {
					start: {
						line: 5,
						column: 1
					},
					end: {
						line: 7,
						column: 2
					}
				}],
				line: 5
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0
		},
		f: {
			'0': 0
		},
		b: {
			'0': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var activate = (cov_1uinqlee89.s[0]++, __webpack_require__(8));

cov_1uinqlee89.s[1]++;
module.exports = function (mediaTag) {
	cov_1uinqlee89.f[0]++;

	var index = (cov_1uinqlee89.s[2]++, mediaTag.mediaObjects.indexOf(mediaTag.activeMediaObject));
	cov_1uinqlee89.s[3]++;
	if (index < mediaTag.mediaObjects.length) {
		cov_1uinqlee89.b[0][0]++;
		cov_1uinqlee89.s[4]++;

		activate(mediaTag.mediaObjects[index + 1], mediaTag);
	} else {
		cov_1uinqlee89.b[0][1]++;
	}
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_203h6v753j = function () {
	var path = '/var/www/src/actions/downgrade.js',
	    hash = 'daeb8b229ac259ccf9e6a9030aa2b61e93045851',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/actions/downgrade.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 17
				},
				end: {
					line: 1,
					column: 38
				}
			},
			'1': {
				start: {
					line: 3,
					column: 0
				},
				end: {
					line: 8,
					column: 2
				}
			},
			'2': {
				start: {
					line: 4,
					column: 15
				},
				end: {
					line: 4,
					column: 72
				}
			},
			'3': {
				start: {
					line: 5,
					column: 1
				},
				end: {
					line: 7,
					column: 2
				}
			},
			'4': {
				start: {
					line: 6,
					column: 2
				},
				end: {
					line: 6,
					column: 55
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 3,
						column: 17
					},
					end: {
						line: 3,
						column: 18
					}
				},
				loc: {
					start: {
						line: 3,
						column: 29
					},
					end: {
						line: 8,
						column: 1
					}
				},
				line: 3
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 5,
						column: 1
					},
					end: {
						line: 7,
						column: 2
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 5,
						column: 1
					},
					end: {
						line: 7,
						column: 2
					}
				}, {
					start: {
						line: 5,
						column: 1
					},
					end: {
						line: 7,
						column: 2
					}
				}],
				line: 5
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0
		},
		f: {
			'0': 0
		},
		b: {
			'0': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var activate = (cov_203h6v753j.s[0]++, __webpack_require__(8));

cov_203h6v753j.s[1]++;
module.exports = function (mediaTag) {
	cov_203h6v753j.f[0]++;

	var index = (cov_203h6v753j.s[2]++, mediaTag.mediaObjects.indexOf(mediaTag.activeMediaObject));
	cov_203h6v753j.s[3]++;
	if (index > 0) {
		cov_203h6v753j.b[0][0]++;
		cov_203h6v753j.s[4]++;

		activate(mediaTag.mediaObjects[index - 1], mediaTag);
	} else {
		cov_203h6v753j.b[0][1]++;
	}
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_18kwcjo8ag = function () {
	var path = '/var/www/src/core/media-object.js',
	    hash = 'b08652113a60a5b2bf53d7df987389fc031ea06c',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/core/media-object.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 25
				},
				end: {
					line: 1,
					column: 55
				}
			},
			'1': {
				start: {
					line: 2,
					column: 15
				},
				end: {
					line: 2,
					column: 34
				}
			},
			'2': {
				start: {
					line: 26,
					column: 2
				},
				end: {
					line: 26,
					column: 30
				}
			},
			'3': {
				start: {
					line: 28,
					column: 2
				},
				end: {
					line: 28,
					column: 29
				}
			},
			'4': {
				start: {
					line: 30,
					column: 2
				},
				end: {
					line: 30,
					column: 22
				}
			},
			'5': {
				start: {
					line: 35,
					column: 2
				},
				end: {
					line: 35,
					column: 60
				}
			},
			'6': {
				start: {
					line: 37,
					column: 21
				},
				end: {
					line: 37,
					column: 56
				}
			},
			'7': {
				start: {
					line: 38,
					column: 2
				},
				end: {
					line: 40,
					column: 3
				}
			},
			'8': {
				start: {
					line: 39,
					column: 3
				},
				end: {
					line: 39,
					column: 41
				}
			},
			'9': {
				start: {
					line: 49,
					column: 2
				},
				end: {
					line: 55,
					column: 4
				}
			},
			'10': {
				start: {
					line: 52,
					column: 23
				},
				end: {
					line: 52,
					column: 44
				}
			},
			'11': {
				start: {
					line: 54,
					column: 19
				},
				end: {
					line: 54,
					column: 39
				}
			},
			'12': {
				start: {
					line: 64,
					column: 2
				},
				end: {
					line: 69,
					column: 3
				}
			},
			'13': {
				start: {
					line: 65,
					column: 3
				},
				end: {
					line: 67,
					column: 4
				}
			},
			'14': {
				start: {
					line: 66,
					column: 4
				},
				end: {
					line: 66,
					column: 85
				}
			},
			'15': {
				start: {
					line: 68,
					column: 3
				},
				end: {
					line: 68,
					column: 31
				}
			},
			'16': {
				start: {
					line: 78,
					column: 2
				},
				end: {
					line: 78,
					column: 17
				}
			},
			'17': {
				start: {
					line: 91,
					column: 2
				},
				end: {
					line: 91,
					column: 41
				}
			},
			'18': {
				start: {
					line: 101,
					column: 2
				},
				end: {
					line: 101,
					column: 38
				}
			},
			'19': {
				start: {
					line: 110,
					column: 2
				},
				end: {
					line: 110,
					column: 37
				}
			},
			'20': {
				start: {
					line: 122,
					column: 2
				},
				end: {
					line: 122,
					column: 91
				}
			},
			'21': {
				start: {
					line: 122,
					column: 60
				},
				end: {
					line: 122,
					column: 89
				}
			},
			'22': {
				start: {
					line: 134,
					column: 2
				},
				end: {
					line: 134,
					column: 24
				}
			},
			'23': {
				start: {
					line: 146,
					column: 2
				},
				end: {
					line: 146,
					column: 19
				}
			},
			'24': {
				start: {
					line: 158,
					column: 2
				},
				end: {
					line: 158,
					column: 48
				}
			},
			'25': {
				start: {
					line: 169,
					column: 2
				},
				end: {
					line: 169,
					column: 19
				}
			},
			'26': {
				start: {
					line: 178,
					column: 2
				},
				end: {
					line: 178,
					column: 18
				}
			},
			'27': {
				start: {
					line: 187,
					column: 2
				},
				end: {
					line: 187,
					column: 22
				}
			},
			'28': {
				start: {
					line: 194,
					column: 2
				},
				end: {
					line: 196,
					column: 3
				}
			},
			'29': {
				start: {
					line: 195,
					column: 3
				},
				end: {
					line: 195,
					column: 61
				}
			},
			'30': {
				start: {
					line: 212,
					column: 2
				},
				end: {
					line: 212,
					column: 23
				}
			},
			'31': {
				start: {
					line: 217,
					column: 2
				},
				end: {
					line: 217,
					column: 67
				}
			},
			'32': {
				start: {
					line: 217,
					column: 30
				},
				end: {
					line: 217,
					column: 65
				}
			},
			'33': {
				start: {
					line: 231,
					column: 25
				},
				end: {
					line: 231,
					column: 50
				}
			},
			'34': {
				start: {
					line: 232,
					column: 2
				},
				end: {
					line: 232,
					column: 109
				}
			},
			'35': {
				start: {
					line: 232,
					column: 37
				},
				end: {
					line: 232,
					column: 107
				}
			},
			'36': {
				start: {
					line: 246,
					column: 25
				},
				end: {
					line: 246,
					column: 50
				}
			},
			'37': {
				start: {
					line: 247,
					column: 2
				},
				end: {
					line: 247,
					column: 98
				}
			},
			'38': {
				start: {
					line: 247,
					column: 37
				},
				end: {
					line: 247,
					column: 96
				}
			},
			'39': {
				start: {
					line: 254,
					column: 0
				},
				end: {
					line: 254,
					column: 38
				}
			},
			'40': {
				start: {
					line: 254,
					column: 24
				},
				end: {
					line: 254,
					column: 33
				}
			},
			'41': {
				start: {
					line: 254,
					column: 30
				},
				end: {
					line: 254,
					column: 33
				}
			},
			'42': {
				start: {
					line: 263,
					column: 0
				},
				end: {
					line: 282,
					column: 2
				}
			},
			'43': {
				start: {
					line: 264,
					column: 26
				},
				end: {
					line: 264,
					column: 28
				}
			},
			'44': {
				start: {
					line: 266,
					column: 1
				},
				end: {
					line: 275,
					column: 2
				}
			},
			'45': {
				start: {
					line: 267,
					column: 21
				},
				end: {
					line: 267,
					column: 39
				}
			},
			'46': {
				start: {
					line: 268,
					column: 15
				},
				end: {
					line: 268,
					column: 38
				}
			},
			'47': {
				start: {
					line: 270,
					column: 2
				},
				end: {
					line: 274,
					column: 5
				}
			},
			'48': {
				start: {
					line: 271,
					column: 21
				},
				end: {
					line: 271,
					column: 36
				}
			},
			'49': {
				start: {
					line: 273,
					column: 3
				},
				end: {
					line: 273,
					column: 54
				}
			},
			'50': {
				start: {
					line: 277,
					column: 1
				},
				end: {
					line: 279,
					column: 3
				}
			},
			'51': {
				start: {
					line: 278,
					column: 2
				},
				end: {
					line: 278,
					column: 40
				}
			},
			'52': {
				start: {
					line: 281,
					column: 1
				},
				end: {
					line: 281,
					column: 25
				}
			},
			'53': {
				start: {
					line: 284,
					column: 0
				},
				end: {
					line: 284,
					column: 29
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 21,
						column: 1
					},
					end: {
						line: 21,
						column: 2
					}
				},
				loc: {
					start: {
						line: 21,
						column: 26
					},
					end: {
						line: 56,
						column: 2
					}
				},
				line: 21
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 52,
						column: 17
					},
					end: {
						line: 52,
						column: 18
					}
				},
				loc: {
					start: {
						line: 52,
						column: 23
					},
					end: {
						line: 52,
						column: 44
					}
				},
				line: 52
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 54,
						column: 13
					},
					end: {
						line: 54,
						column: 14
					}
				},
				loc: {
					start: {
						line: 54,
						column: 19
					},
					end: {
						line: 54,
						column: 39
					}
				},
				line: 54
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 63,
						column: 1
					},
					end: {
						line: 63,
						column: 2
					}
				},
				loc: {
					start: {
						line: 63,
						column: 27
					},
					end: {
						line: 70,
						column: 2
					}
				},
				line: 63
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 77,
						column: 1
					},
					end: {
						line: 77,
						column: 2
					}
				},
				loc: {
					start: {
						line: 77,
						column: 9
					},
					end: {
						line: 79,
						column: 2
					}
				},
				line: 77
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 90,
						column: 1
					},
					end: {
						line: 90,
						column: 2
					}
				},
				loc: {
					start: {
						line: 90,
						column: 24
					},
					end: {
						line: 92,
						column: 2
					}
				},
				line: 90
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 100,
						column: 1
					},
					end: {
						line: 100,
						column: 2
					}
				},
				loc: {
					start: {
						line: 100,
						column: 27
					},
					end: {
						line: 102,
						column: 2
					}
				},
				line: 100
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 109,
						column: 1
					},
					end: {
						line: 109,
						column: 2
					}
				},
				loc: {
					start: {
						line: 109,
						column: 23
					},
					end: {
						line: 111,
						column: 2
					}
				},
				line: 109
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 121,
						column: 1
					},
					end: {
						line: 121,
						column: 2
					}
				},
				loc: {
					start: {
						line: 121,
						column: 22
					},
					end: {
						line: 123,
						column: 2
					}
				},
				line: 121
			},
			'9': {
				name: '(anonymous_9)',
				decl: {
					start: {
						line: 122,
						column: 51
					},
					end: {
						line: 122,
						column: 52
					}
				},
				loc: {
					start: {
						line: 122,
						column: 60
					},
					end: {
						line: 122,
						column: 89
					}
				},
				line: 122
			},
			'10': {
				name: '(anonymous_10)',
				decl: {
					start: {
						line: 133,
						column: 1
					},
					end: {
						line: 133,
						column: 2
					}
				},
				loc: {
					start: {
						line: 133,
						column: 16
					},
					end: {
						line: 135,
						column: 2
					}
				},
				line: 133
			},
			'11': {
				name: '(anonymous_11)',
				decl: {
					start: {
						line: 145,
						column: 1
					},
					end: {
						line: 145,
						column: 2
					}
				},
				loc: {
					start: {
						line: 145,
						column: 15
					},
					end: {
						line: 147,
						column: 2
					}
				},
				line: 145
			},
			'12': {
				name: '(anonymous_12)',
				decl: {
					start: {
						line: 157,
						column: 1
					},
					end: {
						line: 157,
						column: 2
					}
				},
				loc: {
					start: {
						line: 157,
						column: 29
					},
					end: {
						line: 159,
						column: 2
					}
				},
				line: 157
			},
			'13': {
				name: '(anonymous_13)',
				decl: {
					start: {
						line: 168,
						column: 1
					},
					end: {
						line: 168,
						column: 2
					}
				},
				loc: {
					start: {
						line: 168,
						column: 11
					},
					end: {
						line: 170,
						column: 2
					}
				},
				line: 168
			},
			'14': {
				name: '(anonymous_14)',
				decl: {
					start: {
						line: 177,
						column: 1
					},
					end: {
						line: 177,
						column: 2
					}
				},
				loc: {
					start: {
						line: 177,
						column: 13
					},
					end: {
						line: 179,
						column: 2
					}
				},
				line: 177
			},
			'15': {
				name: '(anonymous_15)',
				decl: {
					start: {
						line: 186,
						column: 1
					},
					end: {
						line: 186,
						column: 2
					}
				},
				loc: {
					start: {
						line: 186,
						column: 14
					},
					end: {
						line: 188,
						column: 2
					}
				},
				line: 186
			},
			'16': {
				name: '(anonymous_16)',
				decl: {
					start: {
						line: 193,
						column: 1
					},
					end: {
						line: 193,
						column: 2
					}
				},
				loc: {
					start: {
						line: 193,
						column: 17
					},
					end: {
						line: 197,
						column: 2
					}
				},
				line: 193
			},
			'17': {
				name: '(anonymous_17)',
				decl: {
					start: {
						line: 208,
						column: 1
					},
					end: {
						line: 208,
						column: 2
					}
				},
				loc: {
					start: {
						line: 208,
						column: 27
					},
					end: {
						line: 218,
						column: 2
					}
				},
				line: 208
			},
			'18': {
				name: '(anonymous_18)',
				decl: {
					start: {
						line: 217,
						column: 19
					},
					end: {
						line: 217,
						column: 20
					}
				},
				loc: {
					start: {
						line: 217,
						column: 30
					},
					end: {
						line: 217,
						column: 65
					}
				},
				line: 217
			},
			'19': {
				name: '(anonymous_19)',
				decl: {
					start: {
						line: 230,
						column: 1
					},
					end: {
						line: 230,
						column: 2
					}
				},
				loc: {
					start: {
						line: 230,
						column: 36
					},
					end: {
						line: 233,
						column: 2
					}
				},
				line: 230
			},
			'20': {
				name: '(anonymous_20)',
				decl: {
					start: {
						line: 232,
						column: 25
					},
					end: {
						line: 232,
						column: 26
					}
				},
				loc: {
					start: {
						line: 232,
						column: 37
					},
					end: {
						line: 232,
						column: 107
					}
				},
				line: 232
			},
			'21': {
				name: '(anonymous_21)',
				decl: {
					start: {
						line: 245,
						column: 1
					},
					end: {
						line: 245,
						column: 2
					}
				},
				loc: {
					start: {
						line: 245,
						column: 37
					},
					end: {
						line: 248,
						column: 2
					}
				},
				line: 245
			},
			'22': {
				name: '(anonymous_22)',
				decl: {
					start: {
						line: 247,
						column: 25
					},
					end: {
						line: 247,
						column: 26
					}
				},
				loc: {
					start: {
						line: 247,
						column: 37
					},
					end: {
						line: 247,
						column: 96
					}
				},
				line: 247
			},
			'23': {
				name: '(anonymous_23)',
				decl: {
					start: {
						line: 254,
						column: 19
					},
					end: {
						line: 254,
						column: 20
					}
				},
				loc: {
					start: {
						line: 254,
						column: 24
					},
					end: {
						line: 254,
						column: 33
					}
				},
				line: 254
			},
			'24': {
				name: '(anonymous_24)',
				decl: {
					start: {
						line: 254,
						column: 24
					},
					end: {
						line: 254,
						column: 25
					}
				},
				loc: {
					start: {
						line: 254,
						column: 30
					},
					end: {
						line: 254,
						column: 33
					}
				},
				line: 254
			},
			'25': {
				name: '(anonymous_25)',
				decl: {
					start: {
						line: 263,
						column: 31
					},
					end: {
						line: 263,
						column: 32
					}
				},
				loc: {
					start: {
						line: 263,
						column: 42
					},
					end: {
						line: 282,
						column: 1
					}
				},
				line: 263
			},
			'26': {
				name: '(anonymous_26)',
				decl: {
					start: {
						line: 270,
						column: 15
					},
					end: {
						line: 270,
						column: 16
					}
				},
				loc: {
					start: {
						line: 270,
						column: 22
					},
					end: {
						line: 274,
						column: 3
					}
				},
				line: 270
			},
			'27': {
				name: '(anonymous_27)',
				decl: {
					start: {
						line: 277,
						column: 33
					},
					end: {
						line: 277,
						column: 34
					}
				},
				loc: {
					start: {
						line: 277,
						column: 41
					},
					end: {
						line: 279,
						column: 2
					}
				},
				line: 277
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 65,
						column: 3
					},
					end: {
						line: 67,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 65,
						column: 3
					},
					end: {
						line: 67,
						column: 4
					}
				}, {
					start: {
						line: 65,
						column: 3
					},
					end: {
						line: 67,
						column: 4
					}
				}],
				line: 65
			},
			'1': {
				loc: {
					start: {
						line: 266,
						column: 1
					},
					end: {
						line: 275,
						column: 2
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 266,
						column: 1
					},
					end: {
						line: 275,
						column: 2
					}
				}, {
					start: {
						line: 266,
						column: 1
					},
					end: {
						line: 275,
						column: 2
					}
				}],
				line: 266
			},
			'2': {
				loc: {
					start: {
						line: 278,
						column: 9
					},
					end: {
						line: 278,
						column: 39
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 278,
						column: 9
					},
					end: {
						line: 278,
						column: 13
					}
				}, {
					start: {
						line: 278,
						column: 17
					},
					end: {
						line: 278,
						column: 39
					}
				}],
				line: 278
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0,
			'36': 0,
			'37': 0,
			'38': 0,
			'39': 0,
			'40': 0,
			'41': 0,
			'42': 0,
			'43': 0,
			'44': 0,
			'45': 0,
			'46': 0,
			'47': 0,
			'48': 0,
			'49': 0,
			'50': 0,
			'51': 0,
			'52': 0,
			'53': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AttributesObject = (cov_18kwcjo8ag.s[0]++, __webpack_require__(7));
var Parser = (cov_18kwcjo8ag.s[1]++, __webpack_require__(38));

/**
 * Media Object is created for each media-tag and contains the
 * information about its contents. It also has helpers functions that
 * can be used by plugins to add functionality to media-tag.
 *
 * @class MediaObject
 * @since 0.2.0
 */

var MediaObject = function () {

	/**
  * Creates an instance of MediaObject.
  * @param {Object} attributes Object with attributes that will specify the contents.
  * @param {HTMLElement} rootElement HTMLElement DOM Node that acts as container to this object.
  *
  * @memberOf MediaObject
  */
	function MediaObject(rootElement) {
		_classCallCheck(this, MediaObject);

		cov_18kwcjo8ag.f[0]++;
		cov_18kwcjo8ag.s[2]++;

		/**
   * Generate a unique id for this MediaObject, currently necessary to handle
   * multiple MediaObject in the various engines.
   */
		this.id = MediaObject.uid();

		cov_18kwcjo8ag.s[3]++;
		this.element = rootElement;

		cov_18kwcjo8ag.s[4]++;
		this.state = 'idle';

		/**
   * @type {Object} attributesObject Object with attributes that will specify the contents.
   */
		cov_18kwcjo8ag.s[5]++;
		this.attributesObject = new AttributesObject(rootElement);

		var properties = (cov_18kwcjo8ag.s[6]++, Parser.parse(this.attributesObject));
		cov_18kwcjo8ag.s[7]++;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = Object.keys(properties)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var property = _step.value;
				cov_18kwcjo8ag.s[8]++;

				this[property] = properties[property];
			}

			/**
    * @type {HTMLElement} rootElement HTMLElement DOM Node that acts as
    * container to this object.
    */

			// TODO: rethink about what is the best, explicit bind needed
			// functions OR saving the element
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		cov_18kwcjo8ag.s[9]++;
		this.hookedFns = {
			hasChildNodes: rootElement.hasChildNodes.bind(rootElement),
			removeChild: rootElement.removeChild.bind(rootElement),
			getLastChild: function getLastChild() {
				cov_18kwcjo8ag.f[1]++;
				cov_18kwcjo8ag.s[10]++;
				return rootElement.lastChild;
			},
			appendChild: rootElement.appendChild.bind(rootElement),
			children: function children() {
				cov_18kwcjo8ag.f[2]++;
				cov_18kwcjo8ag.s[11]++;
				return rootElement.children;
			}
		};
	}

	/**
  * Sets the properties. Properties are unique, no redefinition otherwise throws error.
  *
  * @param      {Object}  properties  The properties
  */


	_createClass(MediaObject, [{
		key: 'setProperties',
		value: function setProperties(properties) {
			cov_18kwcjo8ag.f[3]++;
			cov_18kwcjo8ag.s[12]++;

			for (var key in properties) {
				cov_18kwcjo8ag.s[13]++;

				if (this[key]) {
					cov_18kwcjo8ag.b[0][0]++;
					cov_18kwcjo8ag.s[14]++;

					throw new Error('The property ' + key + ' already exists in this MediaObject !');
				} else {
					cov_18kwcjo8ag.b[0][1]++;
				}
				cov_18kwcjo8ag.s[15]++;
				this[key] = properties[key];
			}
		}

		/**
   * Gets the identifier.
   *
   * @return     {Number}  The identifier.
   */

	}, {
		key: 'getId',
		value: function getId() {
			cov_18kwcjo8ag.f[4]++;
			cov_18kwcjo8ag.s[16]++;

			return this.id;
		}

		// TODO: define what will be direct method and what will be by getAttribute
		/**
   * Returns the value of a given attribute.
   *
   * @param {string} attrName Attribute identifier.
   * @returns any the contents of the attribute.
   *
   * @memberOf MediaObject
   */

	}, {
		key: 'getAttribute',
		value: function getAttribute(attrName) {
			cov_18kwcjo8ag.f[5]++;
			cov_18kwcjo8ag.s[17]++;

			return this.attributesObject[attrName];
		}

		/**
   * Sets the attribute.
   *
   * @param      {String}  name    The name
   * @param      {*}  value   The value
   */

	}, {
		key: 'setAttribute',
		value: function setAttribute(name, value) {
			cov_18kwcjo8ag.f[6]++;
			cov_18kwcjo8ag.s[18]++;

			this.attributesObject[name] = value;
		}

		/**
   * Removes an attribute.
   *
   * @param      {String}  name    The name
   */

	}, {
		key: 'removeAttribute',
		value: function removeAttribute(name) {
			cov_18kwcjo8ag.f[7]++;
			cov_18kwcjo8ag.s[19]++;

			delete this.attributesObject[name];
		}

		/**
   * Returns all the attribute identifiers that starts with 'data-attr'.
   * These attributes are normally passed down to the final element.
   *
   * @returns string[] List of attribute identifiers.
   *
   * @memberOf MediaObject
   */

	}, {
		key: 'getAllDataAttrKeys',
		value: function getAllDataAttrKeys() {
			cov_18kwcjo8ag.f[8]++;
			cov_18kwcjo8ag.s[20]++;

			return Object.keys(this.attributesObject).filter(function (field) {
				cov_18kwcjo8ag.f[9]++;
				cov_18kwcjo8ag.s[21]++;
				return field.startsWith('data-attr');
			});
		}

		/**
   * Returns the media content extension when available.
   *
   * @returns string Extension of media. For example, if the media
   * source is "image.png" the extension is "png".
   *
   * @memberOf MediaObject
   */

	}, {
		key: 'getExtension',
		value: function getExtension() {
			cov_18kwcjo8ag.f[10]++;
			cov_18kwcjo8ag.s[22]++;

			return this.extension;
		}

		/**
   * Returns the media content mime type when available.
   *
   * @returns string Media mime type. For example, if the media
   * source is "image.png" the mime type is "image/png".
   *
   * @memberOf MediaObject
   */

	}, {
		key: 'getMimeType',
		value: function getMimeType() {
			cov_18kwcjo8ag.f[11]++;
			cov_18kwcjo8ag.s[23]++;

			return this.mime;
		}

		/**
   * Check for existence of a given attribute.
   *
   * @param {string} attributeName Attribute identifier to be checked.
   * @returns Boolean true if attribute exists, false otherwise.
   *
   * @memberOf MediaObject
   */

	}, {
		key: 'hasAttribute',
		value: function hasAttribute(attributeName) {
			cov_18kwcjo8ag.f[12]++;
			cov_18kwcjo8ag.s[24]++;

			return attributeName in this.attributesObject;
		}

		/**
   * Return the data-type attribute value.
   *
   * @returns string data-type attribute value.
   *
   * @memberOf MediaObject
   */

	}, {
		key: 'getType',
		value: function getType() {
			cov_18kwcjo8ag.f[13]++;
			cov_18kwcjo8ag.s[25]++;

			return this.type;
		}

		/**
   * Gets the source.
   *
   * @return     {string}  The source.
   */

	}, {
		key: 'getSource',
		value: function getSource() {
			cov_18kwcjo8ag.f[14]++;
			cov_18kwcjo8ag.s[26]++;

			return this.src;
		}

		/**
   * Gets the sources.
   *
   * @return     {Array<Object>}  The sources.
   */

	}, {
		key: 'getSources',
		value: function getSources() {
			cov_18kwcjo8ag.f[15]++;
			cov_18kwcjo8ag.s[27]++;

			return this.sources;
		}

		/**
   * Cleans up the mediaTag element.
   */

	}, {
		key: 'clearContents',
		value: function clearContents() {
			cov_18kwcjo8ag.f[16]++;
			cov_18kwcjo8ag.s[28]++;

			while (this.hookedFns.hasChildNodes()) {
				cov_18kwcjo8ag.s[29]++;

				this.hookedFns.removeChild(this.hookedFns.getLastChild());
			}
		}

		/**
   * Replace the contents of the container, associated to the object,
   * by the given elements. All previous contents of the container are
   * erased.
   *
   * @param {HTMLElement[]} elements List of HTMLElement elements.
   *
   * @memberOf MediaObject
   */

	}, {
		key: 'replaceContents',
		value: function replaceContents(elements) {
			var _this = this;

			cov_18kwcjo8ag.f[17]++;
			cov_18kwcjo8ag.s[30]++;

			/**
    * Cleans up <media-tag> element. (root)
    */
			this.clearContents();

			/**
    * Adds elements to <media-tag> element. (root)
    */
			cov_18kwcjo8ag.s[31]++;
			elements.forEach(function (element) {
				cov_18kwcjo8ag.f[18]++;
				cov_18kwcjo8ag.s[32]++;
				return _this.hookedFns.appendChild(element);
			});
		}

		/**
   * Sets all data-attr-* to * on the given element. For example,
   * given a media-tag with data-attr-width="200px", this function
   * will set element.setAttribute('width', '200px'). Notice that
   * the attribute set have the prefix 'data-attr-' removed.
   *
   * @param {HTMLElement} element Element that will have attributes set.
   *
   * @memberOf MediaObject
   */

	}, {
		key: 'utilsSetAllDataAttributes',
		value: function utilsSetAllDataAttributes(element) {
			var _this2 = this;

			cov_18kwcjo8ag.f[19]++;

			var dataAttributes = (cov_18kwcjo8ag.s[33]++, this.getAllDataAttrKeys());
			cov_18kwcjo8ag.s[34]++;
			dataAttributes.forEach(function (dataAttr) {
				cov_18kwcjo8ag.f[20]++;
				cov_18kwcjo8ag.s[35]++;
				return element.setAttribute(dataAttr.substr(10), _this2.getAttribute(dataAttr));
			});
		}

		/**
   * Pass to the given element all data-attr-* attributes. For
   * example, given a media-tag with data-attr-width="200px", this
   * function will set element.setAttribute('data-attr-width','200px').
   * Notice that the attribute set has still the prefix 'data-attr-'.
   *
   * @param {HTMLElement} element Element that will have attributes set.
   *
   * @memberOf MediaObject
   */

	}, {
		key: 'utilsPassAllDataAttributes',
		value: function utilsPassAllDataAttributes(element) {
			var _this3 = this;

			cov_18kwcjo8ag.f[21]++;

			var dataAttributes = (cov_18kwcjo8ag.s[36]++, this.getAllDataAttrKeys());
			cov_18kwcjo8ag.s[37]++;
			dataAttributes.forEach(function (dataAttr) {
				cov_18kwcjo8ag.f[22]++;
				cov_18kwcjo8ag.s[38]++;
				return element.setAttribute(dataAttr, _this3.getAttribute(dataAttr));
			});
		}
	}]);

	return MediaObject;
}();

/**
 * Unique id generator.
 */


cov_18kwcjo8ag.s[39]++;
MediaObject.uid = function (i) {
	cov_18kwcjo8ag.f[23]++;
	cov_18kwcjo8ag.s[40]++;
	return function () {
		cov_18kwcjo8ag.f[24]++;
		cov_18kwcjo8ag.s[41]++;
		return i++;
	};
}(0);

/**
 * Builds a attributesObject with a DOM element.
 *
 * @param      {DOMElement}  element    The element
 * @return     {Object}  { description_of_the_return_value }
 */

cov_18kwcjo8ag.s[42]++;
MediaObject.attributesObject = function (element) {
	cov_18kwcjo8ag.f[25]++;

	var attributesObject = (cov_18kwcjo8ag.s[43]++, {});

	cov_18kwcjo8ag.s[44]++;
	if (element.hasAttributes()) {
		cov_18kwcjo8ag.b[1][0]++;

		var attributes = (cov_18kwcjo8ag.s[45]++, element.attributes);
		var keys = (cov_18kwcjo8ag.s[46]++, Object.keys(attributes));

		cov_18kwcjo8ag.s[47]++;
		keys.forEach(function (key) {
			cov_18kwcjo8ag.f[26]++;

			var attribute = (cov_18kwcjo8ag.s[48]++, attributes[key]);

			cov_18kwcjo8ag.s[49]++;
			attributesObject[attribute.name] = attribute.value;
		});
	} else {
		cov_18kwcjo8ag.b[1][1]++;
	}

	cov_18kwcjo8ag.s[50]++;
	attributesObject.hasAttribute = function (name) {
		cov_18kwcjo8ag.f[27]++;
		cov_18kwcjo8ag.s[51]++;

		return (cov_18kwcjo8ag.b[2][0]++, true) && (cov_18kwcjo8ag.b[2][1]++, attributesObject[name]);
	};

	cov_18kwcjo8ag.s[52]++;
	return attributesObject;
};

cov_18kwcjo8ag.s[53]++;
module.exports = MediaObject;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_18oy611cr5 = function () {
	var path = '/var/www/src/core/parser.js',
	    hash = '8a648b83a40b76e0db1561c93eada337e662fc94',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/core/parser.js',
		statementMap: {
			'0': {
				start: {
					line: 17,
					column: 19
				},
				end: {
					line: 17,
					column: 60
				}
			},
			'1': {
				start: {
					line: 18,
					column: 2
				},
				end: {
					line: 20,
					column: 3
				}
			},
			'2': {
				start: {
					line: 19,
					column: 3
				},
				end: {
					line: 19,
					column: 33
				}
			},
			'3': {
				start: {
					line: 21,
					column: 2
				},
				end: {
					line: 21,
					column: 19
				}
			},
			'4': {
				start: {
					line: 31,
					column: 19
				},
				end: {
					line: 31,
					column: 60
				}
			},
			'5': {
				start: {
					line: 32,
					column: 2
				},
				end: {
					line: 34,
					column: 3
				}
			},
			'6': {
				start: {
					line: 33,
					column: 3
				},
				end: {
					line: 33,
					column: 33
				}
			},
			'7': {
				start: {
					line: 35,
					column: 2
				},
				end: {
					line: 35,
					column: 19
				}
			},
			'8': {
				start: {
					line: 45,
					column: 2
				},
				end: {
					line: 45,
					column: 51
				}
			},
			'9': {
				start: {
					line: 55,
					column: 16
				},
				end: {
					line: 55,
					column: 64
				}
			},
			'10': {
				start: {
					line: 56,
					column: 2
				},
				end: {
					line: 58,
					column: 3
				}
			},
			'11': {
				start: {
					line: 57,
					column: 3
				},
				end: {
					line: 57,
					column: 19
				}
			},
			'12': {
				start: {
					line: 59,
					column: 2
				},
				end: {
					line: 59,
					column: 34
				}
			},
			'13': {
				start: {
					line: 69,
					column: 16
				},
				end: {
					line: 69,
					column: 64
				}
			},
			'14': {
				start: {
					line: 70,
					column: 2
				},
				end: {
					line: 72,
					column: 3
				}
			},
			'15': {
				start: {
					line: 71,
					column: 3
				},
				end: {
					line: 71,
					column: 33
				}
			},
			'16': {
				start: {
					line: 73,
					column: 2
				},
				end: {
					line: 73,
					column: 34
				}
			},
			'17': {
				start: {
					line: 83,
					column: 17
				},
				end: {
					line: 83,
					column: 52
				}
			},
			'18': {
				start: {
					line: 85,
					column: 2
				},
				end: {
					line: 85,
					column: 16
				}
			},
			'19': {
				start: {
					line: 95,
					column: 2
				},
				end: {
					line: 95,
					column: 58
				}
			},
			'20': {
				start: {
					line: 106,
					column: 3
				},
				end: {
					line: 106,
					column: 82
				}
			},
			'21': {
				start: {
					line: 108,
					column: 2
				},
				end: {
					line: 110,
					column: 3
				}
			},
			'22': {
				start: {
					line: 109,
					column: 3
				},
				end: {
					line: 109,
					column: 30
				}
			},
			'23': {
				start: {
					line: 111,
					column: 2
				},
				end: {
					line: 111,
					column: 14
				}
			},
			'24': {
				start: {
					line: 121,
					column: 18
				},
				end: {
					line: 121,
					column: 57
				}
			},
			'25': {
				start: {
					line: 123,
					column: 2
				},
				end: {
					line: 125,
					column: 3
				}
			},
			'26': {
				start: {
					line: 124,
					column: 3
				},
				end: {
					line: 124,
					column: 30
				}
			},
			'27': {
				start: {
					line: 126,
					column: 2
				},
				end: {
					line: 126,
					column: 14
				}
			},
			'28': {
				start: {
					line: 136,
					column: 2
				},
				end: {
					line: 145,
					column: 4
				}
			},
			'29': {
				start: {
					line: 149,
					column: 0
				},
				end: {
					line: 149,
					column: 24
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 16,
						column: 1
					},
					end: {
						line: 16,
						column: 2
					}
				},
				loc: {
					start: {
						line: 16,
						column: 35
					},
					end: {
						line: 22,
						column: 2
					}
				},
				line: 16
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 30,
						column: 1
					},
					end: {
						line: 30,
						column: 2
					}
				},
				loc: {
					start: {
						line: 30,
						column: 30
					},
					end: {
						line: 36,
						column: 2
					}
				},
				line: 30
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 44,
						column: 1
					},
					end: {
						line: 44,
						column: 2
					}
				},
				loc: {
					start: {
						line: 44,
						column: 30
					},
					end: {
						line: 46,
						column: 2
					}
				},
				line: 44
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 54,
						column: 1
					},
					end: {
						line: 54,
						column: 2
					}
				},
				loc: {
					start: {
						line: 54,
						column: 34
					},
					end: {
						line: 60,
						column: 2
					}
				},
				line: 54
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 68,
						column: 1
					},
					end: {
						line: 68,
						column: 2
					}
				},
				loc: {
					start: {
						line: 68,
						column: 34
					},
					end: {
						line: 74,
						column: 2
					}
				},
				line: 68
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 82,
						column: 1
					},
					end: {
						line: 82,
						column: 2
					}
				},
				loc: {
					start: {
						line: 82,
						column: 32
					},
					end: {
						line: 86,
						column: 2
					}
				},
				line: 82
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 94,
						column: 1
					},
					end: {
						line: 94,
						column: 2
					}
				},
				loc: {
					start: {
						line: 94,
						column: 33
					},
					end: {
						line: 96,
						column: 2
					}
				},
				line: 94
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 104,
						column: 1
					},
					end: {
						line: 104,
						column: 2
					}
				},
				loc: {
					start: {
						line: 104,
						column: 33
					},
					end: {
						line: 112,
						column: 2
					}
				},
				line: 104
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 120,
						column: 1
					},
					end: {
						line: 120,
						column: 2
					}
				},
				loc: {
					start: {
						line: 120,
						column: 33
					},
					end: {
						line: 127,
						column: 2
					}
				},
				line: 120
			},
			'9': {
				name: '(anonymous_9)',
				decl: {
					start: {
						line: 135,
						column: 1
					},
					end: {
						line: 135,
						column: 2
					}
				},
				loc: {
					start: {
						line: 135,
						column: 31
					},
					end: {
						line: 146,
						column: 2
					}
				},
				line: 135
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 18,
						column: 2
					},
					end: {
						line: 20,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 18,
						column: 2
					},
					end: {
						line: 20,
						column: 3
					}
				}, {
					start: {
						line: 18,
						column: 2
					},
					end: {
						line: 20,
						column: 3
					}
				}],
				line: 18
			},
			'1': {
				loc: {
					start: {
						line: 32,
						column: 2
					},
					end: {
						line: 34,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 32,
						column: 2
					},
					end: {
						line: 34,
						column: 3
					}
				}, {
					start: {
						line: 32,
						column: 2
					},
					end: {
						line: 34,
						column: 3
					}
				}],
				line: 32
			},
			'2': {
				loc: {
					start: {
						line: 56,
						column: 2
					},
					end: {
						line: 58,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 56,
						column: 2
					},
					end: {
						line: 58,
						column: 3
					}
				}, {
					start: {
						line: 56,
						column: 2
					},
					end: {
						line: 58,
						column: 3
					}
				}],
				line: 56
			},
			'3': {
				loc: {
					start: {
						line: 70,
						column: 2
					},
					end: {
						line: 72,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 70,
						column: 2
					},
					end: {
						line: 72,
						column: 3
					}
				}, {
					start: {
						line: 70,
						column: 2
					},
					end: {
						line: 72,
						column: 3
					}
				}],
				line: 70
			},
			'4': {
				loc: {
					start: {
						line: 106,
						column: 3
					},
					end: {
						line: 106,
						column: 82
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 106,
						column: 3
					},
					end: {
						line: 106,
						column: 42
					}
				}, {
					start: {
						line: 106,
						column: 46
					},
					end: {
						line: 106,
						column: 82
					}
				}],
				line: 106
			},
			'5': {
				loc: {
					start: {
						line: 108,
						column: 2
					},
					end: {
						line: 110,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 108,
						column: 2
					},
					end: {
						line: 110,
						column: 3
					}
				}, {
					start: {
						line: 108,
						column: 2
					},
					end: {
						line: 110,
						column: 3
					}
				}],
				line: 108
			},
			'6': {
				loc: {
					start: {
						line: 123,
						column: 2
					},
					end: {
						line: 125,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 123,
						column: 2
					},
					end: {
						line: 125,
						column: 3
					}
				}, {
					start: {
						line: 123,
						column: 2
					},
					end: {
						line: 125,
						column: 3
					}
				}],
				line: 123
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0],
			'4': [0, 0],
			'5': [0, 0],
			'6': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global window */

/**
 * Class for parse.
 *
 * @class      Parser (name)
 */
var Parser = function () {
	function Parser() {
		_classCallCheck(this, Parser);
	}

	_createClass(Parser, null, [{
		key: 'extension',


		/**
   * Returns the AttributeObject extension.
   *
   * @param      {Object}  AttributeObject  The media object
   * @return     {String}  The extension
   */
		value: function extension(AttributeObject) {
			cov_18oy611cr5.f[0]++;

			var dataType = (cov_18oy611cr5.s[0]++, AttributeObject.getAttribute('data-type'));
			cov_18oy611cr5.s[1]++;
			if (dataType) {
				cov_18oy611cr5.b[0][0]++;
				cov_18oy611cr5.s[2]++;

				return dataType.split('/')[1];
			} else {
				cov_18oy611cr5.b[0][1]++;
			}
			cov_18oy611cr5.s[3]++;
			return undefined;
		}

		/**
   * Returns the AttributeObject type.
   *
   * @param      {Object}  AttributeObject  The media object
   * @return     {String}  The type
   */

	}, {
		key: 'type',
		value: function type(AttributeObject) {
			cov_18oy611cr5.f[1]++;

			var dataType = (cov_18oy611cr5.s[4]++, AttributeObject.getAttribute('data-type'));
			cov_18oy611cr5.s[5]++;
			if (dataType) {
				cov_18oy611cr5.b[1][0]++;
				cov_18oy611cr5.s[6]++;

				return dataType.split('/')[0];
			} else {
				cov_18oy611cr5.b[1][1]++;
			}
			cov_18oy611cr5.s[7]++;
			return undefined;
		}

		/**
   * Returns the AttributeObject mime.
   *
   * @param      {Object}  AttributeObject  The media object
   * @return     {String}  The mime
   */

	}, {
		key: 'mime',
		value: function mime(AttributeObject) {
			cov_18oy611cr5.f[2]++;
			cov_18oy611cr5.s[8]++;

			return AttributeObject.getAttribute('data-type');
		}

		/**
   * Returns the AttributeObject protocol.
   *
   * @param      {Object}  AttributeObject  The media object
   * @return     {String}  The protocol
   */

	}, {
		key: 'protocol',
		value: function protocol(AttributeObject) {
			cov_18oy611cr5.f[3]++;

			var array = (cov_18oy611cr5.s[9]++, AttributeObject.getAttribute('src').split('://'));
			cov_18oy611cr5.s[10]++;
			if (array.length > 1) {
				cov_18oy611cr5.b[2][0]++;
				cov_18oy611cr5.s[11]++;

				return array[0];
			} else {
				cov_18oy611cr5.b[2][1]++;
			}
			cov_18oy611cr5.s[12]++;
			return window.location.protocol;
		}

		/**
   * Returns the AttributeObject hostname.
   *
   * @param      {Object}  AttributeObject  The media object
   * @return     {String}  The hostname
   */

	}, {
		key: 'hostname',
		value: function hostname(AttributeObject) {
			cov_18oy611cr5.f[4]++;

			var array = (cov_18oy611cr5.s[13]++, AttributeObject.getAttribute('src').split('://'));
			cov_18oy611cr5.s[14]++;
			if (array.length > 1) {
				cov_18oy611cr5.b[3][0]++;
				cov_18oy611cr5.s[15]++;

				return array[1].split('/')[0];
			} else {
				cov_18oy611cr5.b[3][1]++;
			}
			cov_18oy611cr5.s[16]++;
			return window.location.hostname;
		}

		/**
   * Returns the AttributeObject source.
   *
   * @param      {Object}  AttributeObject  The media object
   * @return     {String}  The source
   */

	}, {
		key: 'source',
		value: function source(AttributeObject) {
			cov_18oy611cr5.f[5]++;

			var source = (cov_18oy611cr5.s[17]++, AttributeObject.getAttribute('src'));

			cov_18oy611cr5.s[18]++;
			return source;
		}

		/**
   * Finds schemes in the source.
   *
   * @param      {Object}  AttributeObject  The media object
   * @return     {Array<string>}  All schemes found in the source.
   */

	}, {
		key: 'schemes',
		value: function schemes(AttributeObject) {
			cov_18oy611cr5.f[6]++;
			cov_18oy611cr5.s[19]++;

			return (/\w+:/.exec(AttributeObject.getAttribute('src'))
			);
		}

		/**
   * Returns json parsed object from AttributeObject sources.
   *
   * @param      {Object}  AttributeObject  The media object
   * @return     {?Array<Object>}
   */

	}, {
		key: 'sources',
		value: function sources(AttributeObject) {
			cov_18oy611cr5.f[7]++;

			var sources = (cov_18oy611cr5.s[20]++, (cov_18oy611cr5.b[4][0]++, AttributeObject.getAttribute('sources')) || (cov_18oy611cr5.b[4][1]++, AttributeObject.getAttribute('srcs')));

			cov_18oy611cr5.s[21]++;
			if (sources) {
				cov_18oy611cr5.b[5][0]++;
				cov_18oy611cr5.s[22]++;

				return JSON.parse(sources);
			} else {
				cov_18oy611cr5.b[5][1]++;
			}
			cov_18oy611cr5.s[23]++;
			return null;
		}

		/**
   * Returns json parsed object from AttributeObject actions.
   *
   * @param      {Object}  AttributeObject  The media object
   * @return     {?Array<Object>}
   */

	}, {
		key: 'actions',
		value: function actions(AttributeObject) {
			cov_18oy611cr5.f[8]++;

			var actions = (cov_18oy611cr5.s[24]++, AttributeObject.getAttribute('actions'));

			cov_18oy611cr5.s[25]++;
			if (actions) {
				cov_18oy611cr5.b[6][0]++;
				cov_18oy611cr5.s[26]++;

				return JSON.parse(actions);
			} else {
				cov_18oy611cr5.b[6][1]++;
			}
			cov_18oy611cr5.s[27]++;
			return null;
		}

		/**
   * Returns a properties set extracted from the AttributeObject.
   *
   * @param      {Object}  AttributeObject  The media object
   * @return     {Object}
   */

	}, {
		key: 'parse',
		value: function parse(AttributeObject) {
			cov_18oy611cr5.f[9]++;
			cov_18oy611cr5.s[28]++;

			return {
				protocol: Parser.protocol(AttributeObject),
				hostname: Parser.hostname(AttributeObject),
				src: Parser.source(AttributeObject),
				type: Parser.type(AttributeObject),
				extension: Parser.extension(AttributeObject),
				mime: Parser.mime(AttributeObject),
				sources: Parser.sources(AttributeObject),
				actions: Parser.actions(AttributeObject)
			};
		}
	}]);

	return Parser;
}();

cov_18oy611cr5.s[29]++;


module.exports = Parser;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1eye8s1egw = function () {
	var path = '/var/www/src/core/loader.js',
	    hash = '3979ed17ef3214be3c74f94c7deaf7f4226b4d1e',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/core/loader.js',
		statementMap: {
			'0': {
				start: {
					line: 2,
					column: 14
				},
				end: {
					line: 2,
					column: 40
				}
			},
			'1': {
				start: {
					line: 3,
					column: 22
				},
				end: {
					line: 3,
					column: 48
				}
			},
			'2': {
				start: {
					line: 13,
					column: 2
				},
				end: {
					line: 13,
					column: 27
				}
			},
			'3': {
				start: {
					line: 18,
					column: 2
				},
				end: {
					line: 18,
					column: 34
				}
			},
			'4': {
				start: {
					line: 22,
					column: 2
				},
				end: {
					line: 22,
					column: 33
				}
			},
			'5': {
				start: {
					line: 32,
					column: 2
				},
				end: {
					line: 43,
					column: 3
				}
			},
			'6': {
				start: {
					line: 33,
					column: 3
				},
				end: {
					line: 42,
					column: 7
				}
			},
			'7': {
				start: {
					line: 34,
					column: 19
				},
				end: {
					line: 34,
					column: 51
				}
			},
			'8': {
				start: {
					line: 36,
					column: 4
				},
				end: {
					line: 36,
					column: 36
				}
			},
			'9': {
				start: {
					line: 37,
					column: 4
				},
				end: {
					line: 37,
					column: 21
				}
			},
			'10': {
				start: {
					line: 38,
					column: 4
				},
				end: {
					line: 38,
					column: 28
				}
			},
			'11': {
				start: {
					line: 39,
					column: 4
				},
				end: {
					line: 39,
					column: 28
				}
			},
			'12': {
				start: {
					line: 40,
					column: 4
				},
				end: {
					line: 40,
					column: 26
				}
			},
			'13': {
				start: {
					line: 41,
					column: 4
				},
				end: {
					line: 41,
					column: 38
				}
			},
			'14': {
				start: {
					line: 44,
					column: 2
				},
				end: {
					line: 44,
					column: 36
				}
			},
			'15': {
				start: {
					line: 54,
					column: 2
				},
				end: {
					line: 77,
					column: 3
				}
			},
			'16': {
				start: {
					line: 55,
					column: 3
				},
				end: {
					line: 76,
					column: 6
				}
			},
			'17': {
				start: {
					line: 56,
					column: 19
				},
				end: {
					line: 56,
					column: 51
				}
			},
			'18': {
				start: {
					line: 58,
					column: 4
				},
				end: {
					line: 58,
					column: 21
				}
			},
			'19': {
				start: {
					line: 59,
					column: 4
				},
				end: {
					line: 59,
					column: 36
				}
			},
			'20': {
				start: {
					line: 61,
					column: 4
				},
				end: {
					line: 71,
					column: 7
				}
			},
			'21': {
				start: {
					line: 62,
					column: 27
				},
				end: {
					line: 62,
					column: 46
				}
			},
			'22': {
				start: {
					line: 64,
					column: 5
				},
				end: {
					line: 69,
					column: 6
				}
			},
			'23': {
				start: {
					line: 65,
					column: 6
				},
				end: {
					line: 65,
					column: 37
				}
			},
			'24': {
				start: {
					line: 67,
					column: 6
				},
				end: {
					line: 67,
					column: 49
				}
			},
			'25': {
				start: {
					line: 68,
					column: 6
				},
				end: {
					line: 68,
					column: 33
				}
			},
			'26': {
				start: {
					line: 70,
					column: 5
				},
				end: {
					line: 70,
					column: 47
				}
			},
			'27': {
				start: {
					line: 72,
					column: 4
				},
				end: {
					line: 74,
					column: 6
				}
			},
			'28': {
				start: {
					line: 73,
					column: 5
				},
				end: {
					line: 73,
					column: 17
				}
			},
			'29': {
				start: {
					line: 75,
					column: 4
				},
				end: {
					line: 75,
					column: 38
				}
			},
			'30': {
				start: {
					line: 78,
					column: 2
				},
				end: {
					line: 80,
					column: 5
				}
			},
			'31': {
				start: {
					line: 79,
					column: 3
				},
				end: {
					line: 79,
					column: 51
				}
			},
			'32': {
				start: {
					line: 84,
					column: 2
				},
				end: {
					line: 101,
					column: 3
				}
			},
			'33': {
				start: {
					line: 85,
					column: 3
				},
				end: {
					line: 100,
					column: 7
				}
			},
			'34': {
				start: {
					line: 86,
					column: 19
				},
				end: {
					line: 86,
					column: 51
				}
			},
			'35': {
				start: {
					line: 88,
					column: 4
				},
				end: {
					line: 88,
					column: 21
				}
			},
			'36': {
				start: {
					line: 89,
					column: 4
				},
				end: {
					line: 89,
					column: 36
				}
			},
			'37': {
				start: {
					line: 90,
					column: 4
				},
				end: {
					line: 95,
					column: 7
				}
			},
			'38': {
				start: {
					line: 91,
					column: 5
				},
				end: {
					line: 93,
					column: 6
				}
			},
			'39': {
				start: {
					line: 92,
					column: 6
				},
				end: {
					line: 92,
					column: 45
				}
			},
			'40': {
				start: {
					line: 94,
					column: 5
				},
				end: {
					line: 94,
					column: 34
				}
			},
			'41': {
				start: {
					line: 96,
					column: 4
				},
				end: {
					line: 98,
					column: 6
				}
			},
			'42': {
				start: {
					line: 97,
					column: 5
				},
				end: {
					line: 97,
					column: 17
				}
			},
			'43': {
				start: {
					line: 99,
					column: 4
				},
				end: {
					line: 99,
					column: 38
				}
			},
			'44': {
				start: {
					line: 102,
					column: 2
				},
				end: {
					line: 102,
					column: 36
				}
			},
			'45': {
				start: {
					line: 106,
					column: 0
				},
				end: {
					line: 106,
					column: 24
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 15
					},
					end: {
						line: 19,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 21,
						column: 1
					},
					end: {
						line: 21,
						column: 2
					}
				},
				loc: {
					start: {
						line: 21,
						column: 15
					},
					end: {
						line: 23,
						column: 2
					}
				},
				line: 21
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 31,
						column: 1
					},
					end: {
						line: 31,
						column: 2
					}
				},
				loc: {
					start: {
						line: 31,
						column: 13
					},
					end: {
						line: 45,
						column: 2
					}
				},
				line: 31
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 33,
						column: 44
					},
					end: {
						line: 33,
						column: 45
					}
				},
				loc: {
					start: {
						line: 33,
						column: 65
					},
					end: {
						line: 42,
						column: 4
					}
				},
				line: 33
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 53,
						column: 1
					},
					end: {
						line: 53,
						column: 2
					}
				},
				loc: {
					start: {
						line: 53,
						column: 20
					},
					end: {
						line: 81,
						column: 2
					}
				},
				line: 53
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 55,
						column: 22
					},
					end: {
						line: 55,
						column: 23
					}
				},
				loc: {
					start: {
						line: 55,
						column: 43
					},
					end: {
						line: 76,
						column: 4
					}
				},
				line: 55
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 61,
						column: 47
					},
					end: {
						line: 61,
						column: 48
					}
				},
				loc: {
					start: {
						line: 61,
						column: 56
					},
					end: {
						line: 71,
						column: 5
					}
				},
				line: 61
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 72,
						column: 21
					},
					end: {
						line: 72,
						column: 22
					}
				},
				loc: {
					start: {
						line: 72,
						column: 28
					},
					end: {
						line: 74,
						column: 5
					}
				},
				line: 72
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 78,
						column: 21
					},
					end: {
						line: 78,
						column: 22
					}
				},
				loc: {
					start: {
						line: 78,
						column: 32
					},
					end: {
						line: 80,
						column: 3
					}
				},
				line: 78
			},
			'9': {
				name: '(anonymous_9)',
				decl: {
					start: {
						line: 83,
						column: 1
					},
					end: {
						line: 83,
						column: 2
					}
				},
				loc: {
					start: {
						line: 83,
						column: 16
					},
					end: {
						line: 103,
						column: 2
					}
				},
				line: 83
			},
			'10': {
				name: '(anonymous_10)',
				decl: {
					start: {
						line: 85,
						column: 44
					},
					end: {
						line: 85,
						column: 45
					}
				},
				loc: {
					start: {
						line: 85,
						column: 65
					},
					end: {
						line: 100,
						column: 4
					}
				},
				line: 85
			},
			'11': {
				name: '(anonymous_11)',
				decl: {
					start: {
						line: 90,
						column: 43
					},
					end: {
						line: 90,
						column: 44
					}
				},
				loc: {
					start: {
						line: 90,
						column: 52
					},
					end: {
						line: 95,
						column: 5
					}
				},
				line: 90
			},
			'12': {
				name: '(anonymous_12)',
				decl: {
					start: {
						line: 96,
						column: 21
					},
					end: {
						line: 96,
						column: 22
					}
				},
				loc: {
					start: {
						line: 96,
						column: 28
					},
					end: {
						line: 98,
						column: 5
					}
				},
				line: 96
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 32,
						column: 2
					},
					end: {
						line: 43,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 32,
						column: 2
					},
					end: {
						line: 43,
						column: 3
					}
				}, {
					start: {
						line: 32,
						column: 2
					},
					end: {
						line: 43,
						column: 3
					}
				}],
				line: 32
			},
			'1': {
				loc: {
					start: {
						line: 54,
						column: 2
					},
					end: {
						line: 77,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 54,
						column: 2
					},
					end: {
						line: 77,
						column: 3
					}
				}, {
					start: {
						line: 54,
						column: 2
					},
					end: {
						line: 77,
						column: 3
					}
				}],
				line: 54
			},
			'2': {
				loc: {
					start: {
						line: 64,
						column: 5
					},
					end: {
						line: 69,
						column: 6
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 64,
						column: 5
					},
					end: {
						line: 69,
						column: 6
					}
				}, {
					start: {
						line: 64,
						column: 5
					},
					end: {
						line: 69,
						column: 6
					}
				}],
				line: 64
			},
			'3': {
				loc: {
					start: {
						line: 84,
						column: 2
					},
					end: {
						line: 101,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 84,
						column: 2
					},
					end: {
						line: 101,
						column: 3
					}
				}, {
					start: {
						line: 84,
						column: 2
					},
					end: {
						line: 101,
						column: 3
					}
				}],
				line: 84
			},
			'4': {
				loc: {
					start: {
						line: 91,
						column: 5
					},
					end: {
						line: 93,
						column: 6
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 91,
						column: 5
					},
					end: {
						line: 93,
						column: 6
					}
				}, {
					start: {
						line: 91,
						column: 5
					},
					end: {
						line: 93,
						column: 6
					}
				}],
				line: 91
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0,
			'36': 0,
			'37': 0,
			'38': 0,
			'39': 0,
			'40': 0,
			'41': 0,
			'42': 0,
			'43': 0,
			'44': 0,
			'45': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0],
			'4': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global document */
var Store = (cov_1eye8s1egw.s[0]++, __webpack_require__(6));
var Configuration = (cov_1eye8s1egw.s[1]++, __webpack_require__(14));

var Loader = function () {
	/**
  * Constructs the object.
  */
	function Loader() {
		_classCallCheck(this, Loader);

		cov_1eye8s1egw.f[0]++;
		cov_1eye8s1egw.s[2]++;

		/**
   * To store to manage loaded url like a kind of cache.
   */
		this.store = new Store();

		/**
   * To store promises and bring back a unique url to avoid multiple same loading.
   */
		cov_1eye8s1egw.s[3]++;
		this.promiseStore = new Store();
	}

	_createClass(Loader, [{
		key: 'isStored',
		value: function isStored(url) {
			cov_1eye8s1egw.f[1]++;
			cov_1eye8s1egw.s[4]++;

			return this.store.isStore(url);
		}

		/**
   * Loads script only one time.
   *
   * @param      {string}   url     The url
   * @return     {Promise}
   */

	}, {
		key: 'script',
		value: function script(url) {
			cov_1eye8s1egw.f[2]++;
			cov_1eye8s1egw.s[5]++;

			if (!this.promiseStore.isStored(url)) {
				cov_1eye8s1egw.b[0][0]++;
				cov_1eye8s1egw.s[6]++;

				this.promiseStore.store(url, new Promise(function (resolve, reject) {
					cov_1eye8s1egw.f[3]++;

					var script = (cov_1eye8s1egw.s[7]++, document.createElement('script'));

					cov_1eye8s1egw.s[8]++;
					script.type = 'text/javascript';
					cov_1eye8s1egw.s[9]++;
					script.src = url;
					cov_1eye8s1egw.s[10]++;
					script.onload = resolve;
					cov_1eye8s1egw.s[11]++;
					script.onerror = reject;
					cov_1eye8s1egw.s[12]++;
					script.abort = reject;
					cov_1eye8s1egw.s[13]++;
					document.head.appendChild(script);
				}));
			} else {
				cov_1eye8s1egw.b[0][1]++;
			}
			cov_1eye8s1egw.s[14]++;
			return this.promiseStore.get(url);
		}

		/**
   * Loads a configuration only one time.
   *
   * @param      {<type>}   url     The url
   * @return     {Promise}  { description_of_the_return_value }
   */

	}, {
		key: 'configuration',
		value: function configuration(url) {
			var _this = this;

			cov_1eye8s1egw.f[4]++;
			cov_1eye8s1egw.s[15]++;

			if (!this.store.isStored(url)) {
				cov_1eye8s1egw.b[1][0]++;
				cov_1eye8s1egw.s[16]++;

				return new Promise(function (resolve, reject) {
					cov_1eye8s1egw.f[5]++;

					var script = (cov_1eye8s1egw.s[17]++, document.createElement('script'));

					cov_1eye8s1egw.s[18]++;
					script.src = url;
					cov_1eye8s1egw.s[19]++;
					script.type = 'text/javascript';

					cov_1eye8s1egw.s[20]++;
					document.addEventListener('Configuration', function (event) {
						cov_1eye8s1egw.f[6]++;

						var configuration = (cov_1eye8s1egw.s[21]++, event.configuration);

						cov_1eye8s1egw.s[22]++;
						if (_this.store.isStored(url)) {
							cov_1eye8s1egw.b[2][0]++;
							cov_1eye8s1egw.s[23]++;

							configuration.origin = 'store';
						} else {
							cov_1eye8s1egw.b[2][1]++;
							cov_1eye8s1egw.s[24]++;

							_this.store.store(url, event.configuration);
							cov_1eye8s1egw.s[25]++;
							configuration.origin = url;
						}
						cov_1eye8s1egw.s[26]++;
						resolve(new Configuration(configuration));
					});
					cov_1eye8s1egw.s[27]++;
					script.onerror = function (err) {
						cov_1eye8s1egw.f[7]++;
						cov_1eye8s1egw.s[28]++;

						reject(err);
					};
					cov_1eye8s1egw.s[29]++;
					document.head.appendChild(script);
				});
			} else {
				cov_1eye8s1egw.b[1][1]++;
			}
			cov_1eye8s1egw.s[30]++;
			return new Promise(function (resolve) {
				cov_1eye8s1egw.f[8]++;
				cov_1eye8s1egw.s[31]++;

				resolve(new Configuration(_this.store.get(url)));
			});
		}
	}, {
		key: 'algorithm',
		value: function algorithm(url) {
			var _this2 = this;

			cov_1eye8s1egw.f[9]++;
			cov_1eye8s1egw.s[32]++;

			if (!this.promiseStore.isStored(url)) {
				cov_1eye8s1egw.b[3][0]++;
				cov_1eye8s1egw.s[33]++;

				this.promiseStore.store(url, new Promise(function (resolve, reject) {
					cov_1eye8s1egw.f[10]++;

					var script = (cov_1eye8s1egw.s[34]++, document.createElement('script'));

					cov_1eye8s1egw.s[35]++;
					script.src = url;
					cov_1eye8s1egw.s[36]++;
					script.type = 'text/javascript';
					cov_1eye8s1egw.s[37]++;
					document.addEventListener('Algorithm', function (event) {
						cov_1eye8s1egw.f[11]++;
						cov_1eye8s1egw.s[38]++;

						if (!_this2.store.isStored(url)) {
							cov_1eye8s1egw.b[4][0]++;
							cov_1eye8s1egw.s[39]++;

							_this2.store.store(url, event.algorithm);
						} else {
							cov_1eye8s1egw.b[4][1]++;
						}
						cov_1eye8s1egw.s[40]++;
						resolve(_this2.store.get(url));
					});
					cov_1eye8s1egw.s[41]++;
					script.onerror = function (err) {
						cov_1eye8s1egw.f[12]++;
						cov_1eye8s1egw.s[42]++;

						reject(err);
					};
					cov_1eye8s1egw.s[43]++;
					document.head.appendChild(script);
				}));
			} else {
				cov_1eye8s1egw.b[3][1]++;
			}
			cov_1eye8s1egw.s[44]++;
			return this.promiseStore.get(url);
		}
	}]);

	return Loader;
}();

cov_1eye8s1egw.s[45]++;


module.exports = Loader;

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_kzhji3qhs = function () {
	var path = '/var/www/src/plugins/crypto/algorithms/salsa20poly1305.js',
	    hash = 'f22df68ebb27dc316bb1e0edf89b93c590131471',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/crypto/algorithms/salsa20poly1305.js',
		statementMap: {
			'0': {
				start: {
					line: 2,
					column: 15
				},
				end: {
					line: 2,
					column: 46
				}
			},
			'1': {
				start: {
					line: 3,
					column: 21
				},
				end: {
					line: 3,
					column: 41
				}
			},
			'2': {
				start: {
					line: 18,
					column: 2
				},
				end: {
					line: 18,
					column: 40
				}
			},
			'3': {
				start: {
					line: 27,
					column: 15
				},
				end: {
					line: 27,
					column: 26
				}
			},
			'4': {
				start: {
					line: 28,
					column: 14
				},
				end: {
					line: 28,
					column: 34
				}
			},
			'5': {
				start: {
					line: 29,
					column: 2
				},
				end: {
					line: 29,
					column: 37
				}
			},
			'6': {
				start: {
					line: 39,
					column: 15
				},
				end: {
					line: 39,
					column: 26
				}
			},
			'7': {
				start: {
					line: 40,
					column: 15
				},
				end: {
					line: 40,
					column: 53
				}
			},
			'8': {
				start: {
					line: 41,
					column: 2
				},
				end: {
					line: 41,
					column: 31
				}
			},
			'9': {
				start: {
					line: 52,
					column: 16
				},
				end: {
					line: 52,
					column: 18
				}
			},
			'10': {
				start: {
					line: 53,
					column: 16
				},
				end: {
					line: 53,
					column: 43
				}
			},
			'11': {
				start: {
					line: 54,
					column: 17
				},
				end: {
					line: 54,
					column: 57
				}
			},
			'12': {
				start: {
					line: 55,
					column: 2
				},
				end: {
					line: 57,
					column: 3
				}
			},
			'13': {
				start: {
					line: 56,
					column: 3
				},
				end: {
					line: 56,
					column: 75
				}
			},
			'14': {
				start: {
					line: 58,
					column: 2
				},
				end: {
					line: 58,
					column: 20
				}
			},
			'15': {
				start: {
					line: 69,
					column: 2
				},
				end: {
					line: 71,
					column: 3
				}
			},
			'16': {
				start: {
					line: 70,
					column: 3
				},
				end: {
					line: 70,
					column: 21
				}
			},
			'17': {
				start: {
					line: 72,
					column: 16
				},
				end: {
					line: 72,
					column: 28
				}
			},
			'18': {
				start: {
					line: 73,
					column: 15
				},
				end: {
					line: 73,
					column: 26
				}
			},
			'19': {
				start: {
					line: 74,
					column: 16
				},
				end: {
					line: 74,
					column: 54
				}
			},
			'20': {
				start: {
					line: 75,
					column: 17
				},
				end: {
					line: 75,
					column: 52
				}
			},
			'21': {
				start: {
					line: 76,
					column: 19
				},
				end: {
					line: 76,
					column: 58
				}
			},
			'22': {
				start: {
					line: 77,
					column: 2
				},
				end: {
					line: 79,
					column: 3
				}
			},
			'23': {
				start: {
					line: 78,
					column: 3
				},
				end: {
					line: 78,
					column: 19
				}
			},
			'24': {
				start: {
					line: 80,
					column: 2
				},
				end: {
					line: 80,
					column: 49
				}
			},
			'25': {
				start: {
					line: 97,
					column: 2
				},
				end: {
					line: 104,
					column: 36
				}
			},
			'26': {
				start: {
					line: 99,
					column: 3
				},
				end: {
					line: 101,
					column: 4
				}
			},
			'27': {
				start: {
					line: 100,
					column: 4
				},
				end: {
					line: 100,
					column: 34
				}
			},
			'28': {
				start: {
					line: 102,
					column: 3
				},
				end: {
					line: 102,
					column: 33
				}
			},
			'29': {
				start: {
					line: 104,
					column: 23
				},
				end: {
					line: 104,
					column: 34
				}
			},
			'30': {
				start: {
					line: 114,
					column: 2
				},
				end: {
					line: 114,
					column: 49
				}
			},
			'31': {
				start: {
					line: 125,
					column: 2
				},
				end: {
					line: 127,
					column: 6
				}
			},
			'32': {
				start: {
					line: 138,
					column: 2
				},
				end: {
					line: 138,
					column: 76
				}
			},
			'33': {
				start: {
					line: 164,
					column: 1
				},
				end: {
					line: 181,
					column: 2
				}
			},
			'34': {
				start: {
					line: 173,
					column: 2
				},
				end: {
					line: 173,
					column: 55
				}
			},
			'35': {
				start: {
					line: 178,
					column: 2
				},
				end: {
					line: 178,
					column: 35
				}
			},
			'36': {
				start: {
					line: 179,
					column: 2
				},
				end: {
					line: 179,
					column: 45
				}
			},
			'37': {
				start: {
					line: 180,
					column: 2
				},
				end: {
					line: 180,
					column: 35
				}
			},
			'38': {
				start: {
					line: 185,
					column: 13
				},
				end: {
					line: 185,
					column: 44
				}
			},
			'39': {
				start: {
					line: 186,
					column: 16
				},
				end: {
					line: 186,
					column: 59
				}
			},
			'40': {
				start: {
					line: 187,
					column: 19
				},
				end: {
					line: 187,
					column: 47
				}
			},
			'41': {
				start: {
					line: 189,
					column: 13
				},
				end: {
					line: 189,
					column: 33
				}
			},
			'42': {
				start: {
					line: 190,
					column: 1
				},
				end: {
					line: 190,
					column: 28
				}
			},
			'43': {
				start: {
					line: 191,
					column: 1
				},
				end: {
					line: 191,
					column: 34
				}
			},
			'44': {
				start: {
					line: 192,
					column: 1
				},
				end: {
					line: 220,
					column: 3
				}
			},
			'45': {
				start: {
					line: 193,
					column: 22
				},
				end: {
					line: 193,
					column: 34
				}
			},
			'46': {
				start: {
					line: 194,
					column: 2
				},
				end: {
					line: 219,
					column: 3
				}
			},
			'47': {
				start: {
					line: 195,
					column: 14
				},
				end: {
					line: 195,
					column: 41
				}
			},
			'48': {
				start: {
					line: 196,
					column: 18
				},
				end: {
					line: 196,
					column: 47
				}
			},
			'49': {
				start: {
					line: 197,
					column: 15
				},
				end: {
					line: 197,
					column: 72
				}
			},
			'50': {
				start: {
					line: 199,
					column: 27
				},
				end: {
					line: 199,
					column: 50
				}
			},
			'51': {
				start: {
					line: 200,
					column: 3
				},
				end: {
					line: 202,
					column: 6
				}
			},
			'52': {
				start: {
					line: 203,
					column: 3
				},
				end: {
					line: 203,
					column: 50
				}
			},
			'53': {
				start: {
					line: 211,
					column: 3
				},
				end: {
					line: 211,
					column: 40
				}
			},
			'54': {
				start: {
					line: 212,
					column: 3
				},
				end: {
					line: 212,
					column: 50
				}
			},
			'55': {
				start: {
					line: 218,
					column: 3
				},
				end: {
					line: 218,
					column: 24
				}
			},
			'56': {
				start: {
					line: 221,
					column: 1
				},
				end: {
					line: 221,
					column: 16
				}
			},
			'57': {
				start: {
					line: 224,
					column: 0
				},
				end: {
					line: 224,
					column: 27
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 17,
						column: 1
					},
					end: {
						line: 17,
						column: 2
					}
				},
				loc: {
					start: {
						line: 17,
						column: 18
					},
					end: {
						line: 19,
						column: 2
					}
				},
				line: 17
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 26,
						column: 1
					},
					end: {
						line: 26,
						column: 2
					}
				},
				loc: {
					start: {
						line: 26,
						column: 26
					},
					end: {
						line: 30,
						column: 2
					}
				},
				line: 26
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 38,
						column: 1
					},
					end: {
						line: 38,
						column: 2
					}
				},
				loc: {
					start: {
						line: 38,
						column: 27
					},
					end: {
						line: 42,
						column: 2
					}
				},
				line: 38
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 51,
						column: 1
					},
					end: {
						line: 51,
						column: 2
					}
				},
				loc: {
					start: {
						line: 51,
						column: 25
					},
					end: {
						line: 59,
						column: 2
					}
				},
				line: 51
			},
			'4': {
				name: '(anonymous_4)',
				decl: {
					start: {
						line: 68,
						column: 1
					},
					end: {
						line: 68,
						column: 2
					}
				},
				loc: {
					start: {
						line: 68,
						column: 25
					},
					end: {
						line: 81,
						column: 2
					}
				},
				line: 68
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 96,
						column: 1
					},
					end: {
						line: 96,
						column: 2
					}
				},
				loc: {
					start: {
						line: 96,
						column: 28
					},
					end: {
						line: 105,
						column: 2
					}
				},
				line: 96
			},
			'6': {
				name: '(anonymous_6)',
				decl: {
					start: {
						line: 98,
						column: 8
					},
					end: {
						line: 98,
						column: 9
					}
				},
				loc: {
					start: {
						line: 98,
						column: 20
					},
					end: {
						line: 103,
						column: 3
					}
				},
				line: 98
			},
			'7': {
				name: '(anonymous_7)',
				decl: {
					start: {
						line: 104,
						column: 8
					},
					end: {
						line: 104,
						column: 9
					}
				},
				loc: {
					start: {
						line: 104,
						column: 23
					},
					end: {
						line: 104,
						column: 34
					}
				},
				line: 104
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 113,
						column: 1
					},
					end: {
						line: 113,
						column: 2
					}
				},
				loc: {
					start: {
						line: 113,
						column: 31
					},
					end: {
						line: 115,
						column: 2
					}
				},
				line: 113
			},
			'9': {
				name: '(anonymous_9)',
				decl: {
					start: {
						line: 124,
						column: 1
					},
					end: {
						line: 124,
						column: 2
					}
				},
				loc: {
					start: {
						line: 124,
						column: 32
					},
					end: {
						line: 128,
						column: 2
					}
				},
				line: 124
			},
			'10': {
				name: '(anonymous_10)',
				decl: {
					start: {
						line: 137,
						column: 1
					},
					end: {
						line: 137,
						column: 2
					}
				},
				loc: {
					start: {
						line: 137,
						column: 32
					},
					end: {
						line: 139,
						column: 2
					}
				},
				line: 137
			},
			'11': {
				name: 'applyMetadata',
				decl: {
					start: {
						line: 163,
						column: 9
					},
					end: {
						line: 163,
						column: 22
					}
				},
				loc: {
					start: {
						line: 163,
						column: 46
					},
					end: {
						line: 182,
						column: 1
					}
				},
				line: 163
			},
			'12': {
				name: 'algorithm',
				decl: {
					start: {
						line: 184,
						column: 9
					},
					end: {
						line: 184,
						column: 18
					}
				},
				loc: {
					start: {
						line: 184,
						column: 32
					},
					end: {
						line: 222,
						column: 1
					}
				},
				line: 184
			},
			'13': {
				name: '(anonymous_13)',
				decl: {
					start: {
						line: 192,
						column: 14
					},
					end: {
						line: 192,
						column: 15
					}
				},
				loc: {
					start: {
						line: 192,
						column: 20
					},
					end: {
						line: 220,
						column: 2
					}
				},
				line: 192
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 55,
						column: 2
					},
					end: {
						line: 57,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 55,
						column: 2
					},
					end: {
						line: 57,
						column: 3
					}
				}, {
					start: {
						line: 55,
						column: 2
					},
					end: {
						line: 57,
						column: 3
					}
				}],
				line: 55
			},
			'1': {
				loc: {
					start: {
						line: 69,
						column: 2
					},
					end: {
						line: 71,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 69,
						column: 2
					},
					end: {
						line: 71,
						column: 3
					}
				}, {
					start: {
						line: 69,
						column: 2
					},
					end: {
						line: 71,
						column: 3
					}
				}],
				line: 69
			},
			'2': {
				loc: {
					start: {
						line: 77,
						column: 2
					},
					end: {
						line: 79,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 77,
						column: 2
					},
					end: {
						line: 79,
						column: 3
					}
				}, {
					start: {
						line: 77,
						column: 2
					},
					end: {
						line: 79,
						column: 3
					}
				}],
				line: 77
			},
			'3': {
				loc: {
					start: {
						line: 99,
						column: 3
					},
					end: {
						line: 101,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 99,
						column: 3
					},
					end: {
						line: 101,
						column: 4
					}
				}, {
					start: {
						line: 99,
						column: 3
					},
					end: {
						line: 101,
						column: 4
					}
				}],
				line: 99
			},
			'4': {
				loc: {
					start: {
						line: 164,
						column: 1
					},
					end: {
						line: 181,
						column: 2
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 164,
						column: 1
					},
					end: {
						line: 181,
						column: 2
					}
				}, {
					start: {
						line: 164,
						column: 1
					},
					end: {
						line: 181,
						column: 2
					}
				}],
				line: 164
			},
			'5': {
				loc: {
					start: {
						line: 194,
						column: 2
					},
					end: {
						line: 219,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 194,
						column: 2
					},
					end: {
						line: 219,
						column: 3
					}
				}, {
					start: {
						line: 194,
						column: 2
					},
					end: {
						line: 219,
						column: 3
					}
				}],
				line: 194
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0,
			'36': 0,
			'37': 0,
			'38': 0,
			'39': 0,
			'40': 0,
			'41': 0,
			'42': 0,
			'43': 0,
			'44': 0,
			'45': 0,
			'46': 0,
			'47': 0,
			'48': 0,
			'49': 0,
			'50': 0,
			'51': 0,
			'52': 0,
			'53': 0,
			'54': 0,
			'55': 0,
			'56': 0,
			'57': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0],
			'4': [0, 0],
			'5': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global window, fetch, XMLHttpRequest, Blob, Event */
var Errors = (cov_kzhji3qhs.s[0]++, __webpack_require__(22));
var CryptoFilter = (cov_kzhji3qhs.s[1]++, __webpack_require__(12));

/**
 * Class for crypto.
 *
 * @class      Crypto (name)
 */

var Crypto = function () {
	function Crypto() {
		_classCallCheck(this, Crypto);
	}

	_createClass(Crypto, null, [{
		key: 'slice',

		/**
   * Convert a Uint8Array into Array.
   *
   * @param      {Uint8Array}  u8      The u 8
   * @return     {Array}  Array = require(Uint8Array.
   */
		value: function slice(u8) {
			cov_kzhji3qhs.f[0]++;
			cov_kzhji3qhs.s[2]++;

			return Array.prototype.slice.call(u8);
		}

		/**
   * Gets the random key string.
   *
   * @return     {String}  The random key string.
   */

	}, {
		key: 'getRandomKeyStr',
		value: function getRandomKeyStr() {
			cov_kzhji3qhs.f[1]++;

			var Nacl = (cov_kzhji3qhs.s[3]++, window.nacl);
			var rdm = (cov_kzhji3qhs.s[4]++, Nacl.randomBytes(18));
			cov_kzhji3qhs.s[5]++;
			return Nacl.util.encodeBase64(rdm);
		}

		/**
   * Gets the key = require(string.
   *
   * @param      {String}  str     The string
   * @return     {Uint8Array}  The key = require(string.
   */

	}, {
		key: 'getKeyFromStr',
		value: function getKeyFromStr(str) {
			cov_kzhji3qhs.f[2]++;

			var Nacl = (cov_kzhji3qhs.s[6]++, window.nacl);
			var hash = (cov_kzhji3qhs.s[7]++, Nacl.hash(Nacl.util.decodeBase64(str)));
			cov_kzhji3qhs.s[8]++;
			return hash.subarray(32, 64);
		}

		/**
   * Encrypts a Uint8Array with the given key.
   *
   * @param      {<type>}      u8      The u 8
   * @param      {<type>}      key     The key
   * @return     {Uint8Array}  The encrypted content.
   */

	}, {
		key: 'encrypt',
		value: function encrypt(u8, key) {
			cov_kzhji3qhs.f[3]++;

			var array = (cov_kzhji3qhs.s[9]++, u8);
			var nonce = (cov_kzhji3qhs.s[10]++, window.nacl.randomBytes(24));
			var packed = (cov_kzhji3qhs.s[11]++, window.nacl.secretbox(array, nonce, key));
			cov_kzhji3qhs.s[12]++;
			if (packed) {
				cov_kzhji3qhs.b[0][0]++;
				cov_kzhji3qhs.s[13]++;

				return new Uint8Array(Crypto.slice(nonce).concat(Crypto.slice(packed)));
			} else {
				cov_kzhji3qhs.b[0][1]++;
			}
			cov_kzhji3qhs.s[14]++;
			throw new Error();
		}

		/**
   * Decrypts a Uint8Array with the given key.
   *
   * @param      {Uint8Array}  u8      The u 8
   * @param      {String}  key     The key
   * @return     {String}  The decrypted content.
   */

	}, {
		key: 'decrypt',
		value: function decrypt(u8, key) {
			cov_kzhji3qhs.f[4]++;
			cov_kzhji3qhs.s[15]++;

			if (u8.length < 24) {
				cov_kzhji3qhs.b[1][0]++;
				cov_kzhji3qhs.s[16]++;

				throw new Error();
			} else {
				cov_kzhji3qhs.b[1][1]++;
			}
			var slice = (cov_kzhji3qhs.s[17]++, Crypto.slice);
			var Nacl = (cov_kzhji3qhs.s[18]++, window.nacl);
			var nonce = (cov_kzhji3qhs.s[19]++, new Uint8Array(slice(u8).slice(0, 24)));
			var packed = (cov_kzhji3qhs.s[20]++, new Uint8Array(slice(u8).slice(24)));
			var unpacked = (cov_kzhji3qhs.s[21]++, Nacl.secretbox.open(packed, nonce, key));
			cov_kzhji3qhs.s[22]++;
			if (unpacked) {
				cov_kzhji3qhs.b[2][0]++;
				cov_kzhji3qhs.s[23]++;

				return unpacked;
			} else {
				cov_kzhji3qhs.b[2][1]++;
			}
			cov_kzhji3qhs.s[24]++;
			throw new Error('Decrypted file in undefined');
		}
	}]);

	return Crypto;
}();

/**
 * Class for data manager.
 *
 * @class      DataManager (name)
 */


var DataManager = function () {
	function DataManager() {
		_classCallCheck(this, DataManager);
	}

	_createClass(DataManager, null, [{
		key: 'getArrayBuffer',

		/**
   * Gets the array buffer = require(a source url.
   *
   * @param      {<type>}  url     The url
   * @return     {<type>}  The array buffer.
   */
		value: function getArrayBuffer(url) {
			cov_kzhji3qhs.f[5]++;
			cov_kzhji3qhs.s[25]++;

			return fetch(url).then(function (response) {
				cov_kzhji3qhs.f[6]++;
				cov_kzhji3qhs.s[26]++;

				if (response.ok) {
					cov_kzhji3qhs.b[3][0]++;
					cov_kzhji3qhs.s[27]++;

					return response.arrayBuffer();
				} else {
					cov_kzhji3qhs.b[3][1]++;
				}
				cov_kzhji3qhs.s[28]++;
				throw new Errors.FetchFails();
			}).then(function (arrayBuffer) {
				cov_kzhji3qhs.f[7]++;
				cov_kzhji3qhs.s[29]++;
				return arrayBuffer;
			});
		}

		/**
   * Creates an url.
   *
   * @param      {ArrayBuffer}  arrayBuffer  The array buffer
   * @return     {String}  The url.
   */

	}, {
		key: 'createUrl',
		value: function createUrl(arrayBuffer) {
			cov_kzhji3qhs.f[8]++;
			cov_kzhji3qhs.s[30]++;

			return window.URL.createObjectURL(arrayBuffer);
		}

		/**
   * Gets the blob url.
   *
   * @param      {ArrayBuffer}  data    The data
   * @param      {String}  mtype   The mtype
   * @return     {String}  The blob url.
   */

	}, {
		key: 'getBlobUrl',
		value: function getBlobUrl(data, mtype) {
			cov_kzhji3qhs.f[9]++;
			cov_kzhji3qhs.s[31]++;

			return window.URL.createObjectURL(new Blob([data], {
				type: mtype
			}));
		}

		/**
   * Gets the data url.
   *
   * @param      {ArrayBuffer}  data    The data
   * @param      {string}  mtype   The mtype
   * @return     {string}  The data url.
   */

	}, {
		key: 'getDataUrl',
		value: function getDataUrl(data, mtype) {
			cov_kzhji3qhs.f[10]++;
			cov_kzhji3qhs.s[32]++;

			return 'data:' + mtype + ';base64,' + window.nacl.util.encodeBase64(data);
		}
	}]);

	return DataManager;
}();

/**
 * Applies metadata on media object only if CryptoFilter knows the media type.
 * Without these metadata the processing engine does not find any renderer and apply the default one.
 * It's a non render by information lack.
 *
 * -------------------------------------------------------------------------------------------
 * //mediaObject.setAttribute('type', decrypted.metadata.type);
 * //mediaObject.type = decrypted.metadata.type;
 * ///console.log(mediaObject);
 *
 * original model :
 *      <media-tag src="something" data-type="image/png" data-crypto-key="cryptpad:something">
 *
 * hypothetical model : (mime is hidden inside src data)
 *      <media-tag src="something" data-crypto-key="cryptpad:something">
 *
 * Crypto extracts metadata from the decrypted source and applies it on the media object.
 *
 * @param      {MediaObject}  mediaObject  The media object
 * @param      {Object}  metadata     The metadata
 */


function applyMetadata(mediaObject, metadata) {
	cov_kzhji3qhs.f[11]++;
	cov_kzhji3qhs.s[33]++;

	if (CryptoFilter.isAllowedMediaType(metadata.type)) {
		cov_kzhji3qhs.b[4][0]++;
		cov_kzhji3qhs.s[34]++;

		/**
   * @example
   * Inside 'src/plugins/renderers/image.js'
   *
   * ...
   * mediaObject.utilsSetAllDataAttributes(element); // Takes all [data-] from attributes and it's done inside plugin job parts.
   * ...
   */
		mediaObject.setAttribute('data-type', metadata.type);

		/**
   * Theses data are used in identification phasis and have to be set.
   */
		cov_kzhji3qhs.s[35]++;
		mediaObject.type = metadata.type;
		cov_kzhji3qhs.s[36]++;
		mediaObject.extension = metadata.extension;
		cov_kzhji3qhs.s[37]++;
		mediaObject.mime = metadata.mime;
	} else {
		cov_kzhji3qhs.b[4][1]++;
	}
}

function algorithm(mediaObject) {
	cov_kzhji3qhs.f[12]++;

	var src = (cov_kzhji3qhs.s[38]++, mediaObject.getAttribute('src'));
	var strKey = (cov_kzhji3qhs.s[39]++, mediaObject.getAttribute('data-crypto-key'));
	var cryptoKey = (cov_kzhji3qhs.s[40]++, Crypto.getKeyFromStr(strKey));

	var xhr = (cov_kzhji3qhs.s[41]++, new XMLHttpRequest());
	cov_kzhji3qhs.s[42]++;
	xhr.open('GET', src, true);
	cov_kzhji3qhs.s[43]++;
	xhr.responseType = 'arraybuffer';
	cov_kzhji3qhs.s[44]++;
	xhr.onload = function () {
		cov_kzhji3qhs.f[13]++;

		var arrayBuffer = (cov_kzhji3qhs.s[45]++, xhr.response);
		cov_kzhji3qhs.s[46]++;
		if (arrayBuffer) {
			cov_kzhji3qhs.b[5][0]++;

			var u8 = (cov_kzhji3qhs.s[47]++, new Uint8Array(arrayBuffer));
			var binStr = (cov_kzhji3qhs.s[48]++, Crypto.decrypt(u8, cryptoKey));
			var url = (cov_kzhji3qhs.s[49]++, DataManager.getBlobUrl(binStr, mediaObject.getMimeType()));

			var decryptionEvent = (cov_kzhji3qhs.s[50]++, new Event('decryption'));
			cov_kzhji3qhs.s[51]++;
			decryptionEvent.blob = new Blob([binStr], {
				type: mediaObject.getMimeType()
			});
			cov_kzhji3qhs.s[52]++;
			window.document.dispatchEvent(decryptionEvent);

			/**
    * Modifications applied on mediaObject.
    * After these modifications the typeCheck
    * method must return false otherwise the
    * filter may infinite loop.
    */
			cov_kzhji3qhs.s[53]++;
			mediaObject.setAttribute('src', url);
			cov_kzhji3qhs.s[54]++;
			mediaObject.removeAttribute('data-crypto-key');

			/**
    * Filters must call chain to try if the
    * current mediaObject matches other filters.
    */
			cov_kzhji3qhs.s[55]++;
			mediaObject.return();
		} else {
			cov_kzhji3qhs.b[5][1]++;
		}
	};
	cov_kzhji3qhs.s[56]++;
	xhr.send(null);
}

cov_kzhji3qhs.s[57]++;
module.exports = algorithm;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_g7yyf6xmi = function () {
    var path = '/var/www/src/plugins/crypto/algorithms/cryptpad.js',
        hash = '54f3f606cc6360b35f2d9da61ea58489938205cb',
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = '__coverage__',
        coverageData = {
        path: '/var/www/src/plugins/crypto/algorithms/cryptpad.js',
        statementMap: {
            '0': {
                start: {
                    line: 2,
                    column: 15
                },
                end: {
                    line: 2,
                    column: 46
                }
            },
            '1': {
                start: {
                    line: 3,
                    column: 17
                },
                end: {
                    line: 3,
                    column: 55
                }
            },
            '2': {
                start: {
                    line: 4,
                    column: 21
                },
                end: {
                    line: 4,
                    column: 41
                }
            },
            '3': {
                start: {
                    line: 6,
                    column: 17
                },
                end: {
                    line: 6,
                    column: 21
                }
            },
            '4': {
                start: {
                    line: 7,
                    column: 25
                },
                end: {
                    line: 7,
                    column: 35
                }
            },
            '5': {
                start: {
                    line: 8,
                    column: 26
                },
                end: {
                    line: 8,
                    column: 32
                }
            },
            '6': {
                start: {
                    line: 20,
                    column: 8
                },
                end: {
                    line: 20,
                    column: 53
                }
            },
            '7': {
                start: {
                    line: 28,
                    column: 16
                },
                end: {
                    line: 28,
                    column: 24
                }
            },
            '8': {
                start: {
                    line: 29,
                    column: 8
                },
                end: {
                    line: 48,
                    column: 9
                }
            },
            '9': {
                start: {
                    line: 30,
                    column: 12
                },
                end: {
                    line: 37,
                    column: 13
                }
            },
            '10': {
                start: {
                    line: 31,
                    column: 16
                },
                end: {
                    line: 33,
                    column: 17
                }
            },
            '11': {
                start: {
                    line: 32,
                    column: 20
                },
                end: {
                    line: 32,
                    column: 53
                }
            },
            '12': {
                start: {
                    line: 34,
                    column: 16
                },
                end: {
                    line: 36,
                    column: 17
                }
            },
            '13': {
                start: {
                    line: 35,
                    column: 20
                },
                end: {
                    line: 35,
                    column: 55
                }
            },
            '14': {
                start: {
                    line: 40,
                    column: 12
                },
                end: {
                    line: 40,
                    column: 53
                }
            },
            '15': {
                start: {
                    line: 40,
                    column: 32
                },
                end: {
                    line: 40,
                    column: 51
                }
            },
            '16': {
                start: {
                    line: 41,
                    column: 12
                },
                end: {
                    line: 41,
                    column: 21
                }
            },
            '17': {
                start: {
                    line: 45,
                    column: 12
                },
                end: {
                    line: 47,
                    column: 13
                }
            },
            '18': {
                start: {
                    line: 46,
                    column: 16
                },
                end: {
                    line: 46,
                    column: 53
                }
            },
            '19': {
                start: {
                    line: 52,
                    column: 8
                },
                end: {
                    line: 57,
                    column: 11
                }
            },
            '20': {
                start: {
                    line: 56,
                    column: 12
                },
                end: {
                    line: 56,
                    column: 44
                }
            },
            '21': {
                start: {
                    line: 61,
                    column: 8
                },
                end: {
                    line: 61,
                    column: 34
                }
            },
            '22': {
                start: {
                    line: 65,
                    column: 8
                },
                end: {
                    line: 65,
                    column: 32
                }
            },
            '23': {
                start: {
                    line: 75,
                    column: 8
                },
                end: {
                    line: 75,
                    column: 46
                }
            },
            '24': {
                start: {
                    line: 84,
                    column: 21
                },
                end: {
                    line: 84,
                    column: 32
                }
            },
            '25': {
                start: {
                    line: 85,
                    column: 20
                },
                end: {
                    line: 85,
                    column: 40
                }
            },
            '26': {
                start: {
                    line: 86,
                    column: 8
                },
                end: {
                    line: 86,
                    column: 43
                }
            },
            '27': {
                start: {
                    line: 96,
                    column: 8
                },
                end: {
                    line: 96,
                    column: 50
                }
            },
            '28': {
                start: {
                    line: 107,
                    column: 22
                },
                end: {
                    line: 107,
                    column: 24
                }
            },
            '29': {
                start: {
                    line: 108,
                    column: 22
                },
                end: {
                    line: 108,
                    column: 49
                }
            },
            '30': {
                start: {
                    line: 109,
                    column: 23
                },
                end: {
                    line: 109,
                    column: 63
                }
            },
            '31': {
                start: {
                    line: 110,
                    column: 8
                },
                end: {
                    line: 112,
                    column: 9
                }
            },
            '32': {
                start: {
                    line: 111,
                    column: 12
                },
                end: {
                    line: 111,
                    column: 90
                }
            },
            '33': {
                start: {
                    line: 113,
                    column: 8
                },
                end: {
                    line: 113,
                    column: 26
                }
            },
            '34': {
                start: {
                    line: 124,
                    column: 21
                },
                end: {
                    line: 124,
                    column: 32
                }
            },
            '35': {
                start: {
                    line: 126,
                    column: 25
                },
                end: {
                    line: 131,
                    column: 9
                }
            },
            '36': {
                start: {
                    line: 127,
                    column: 23
                },
                end: {
                    line: 127,
                    column: 54
                }
            },
            '37': {
                start: {
                    line: 128,
                    column: 12
                },
                end: {
                    line: 128,
                    column: 52
                }
            },
            '38': {
                start: {
                    line: 130,
                    column: 12
                },
                end: {
                    line: 130,
                    column: 46
                }
            },
            '39': {
                start: {
                    line: 133,
                    column: 20
                },
                end: {
                    line: 133,
                    column: 43
                }
            },
            '40': {
                start: {
                    line: 134,
                    column: 16
                },
                end: {
                    line: 134,
                    column: 17
                }
            },
            '41': {
                start: {
                    line: 136,
                    column: 21
                },
                end: {
                    line: 136,
                    column: 38
                }
            },
            '42': {
                start: {
                    line: 137,
                    column: 29
                },
                end: {
                    line: 137,
                    column: 59
                }
            },
            '43': {
                start: {
                    line: 139,
                    column: 18
                },
                end: {
                    line: 141,
                    column: 9
                }
            },
            '44': {
                start: {
                    line: 143,
                    column: 22
                },
                end: {
                    line: 143,
                    column: 72
                }
            },
            '45': {
                start: {
                    line: 145,
                    column: 24
                },
                end: {
                    line: 145,
                    column: 64
                }
            },
            '46': {
                start: {
                    line: 146,
                    column: 8
                },
                end: {
                    line: 146,
                    column: 35
                }
            },
            '47': {
                start: {
                    line: 148,
                    column: 8
                },
                end: {
                    line: 149,
                    column: 59
                }
            },
            '48': {
                start: {
                    line: 148,
                    column: 14
                },
                end: {
                    line: 148,
                    column: 73
                }
            },
            '49': {
                start: {
                    line: 149,
                    column: 20
                },
                end: {
                    line: 149,
                    column: 57
                }
            },
            '50': {
                start: {
                    line: 151,
                    column: 8
                },
                end: {
                    line: 151,
                    column: 58
                }
            },
            '51': {
                start: {
                    line: 151,
                    column: 29
                },
                end: {
                    line: 151,
                    column: 56
                }
            },
            '52': {
                start: {
                    line: 153,
                    column: 24
                },
                end: {
                    line: 170,
                    column: 9
                }
            },
            '53': {
                start: {
                    line: 154,
                    column: 12
                },
                end: {
                    line: 169,
                    column: 15
                }
            },
            '54': {
                start: {
                    line: 155,
                    column: 30
                },
                end: {
                    line: 155,
                    column: 72
                }
            },
            '55': {
                start: {
                    line: 156,
                    column: 28
                },
                end: {
                    line: 156,
                    column: 53
                }
            },
            '56': {
                start: {
                    line: 157,
                    column: 16
                },
                end: {
                    line: 157,
                    column: 20
                }
            },
            '57': {
                start: {
                    line: 158,
                    column: 28
                },
                end: {
                    line: 158,
                    column: 67
                }
            },
            '58': {
                start: {
                    line: 161,
                    column: 34
                },
                end: {
                    line: 161,
                    column: 70
                }
            },
            '59': {
                start: {
                    line: 162,
                    column: 16
                },
                end: {
                    line: 162,
                    column: 43
                }
            },
            '60': {
                start: {
                    line: 164,
                    column: 16
                },
                end: {
                    line: 164,
                    column: 73
                }
            },
            '61': {
                start: {
                    line: 164,
                    column: 34
                },
                end: {
                    line: 164,
                    column: 71
                }
            },
            '62': {
                start: {
                    line: 166,
                    column: 16
                },
                end: {
                    line: 166,
                    column: 51
                }
            },
            '63': {
                start: {
                    line: 168,
                    column: 16
                },
                end: {
                    line: 168,
                    column: 38
                }
            },
            '64': {
                start: {
                    line: 172,
                    column: 21
                },
                end: {
                    line: 172,
                    column: 23
                }
            },
            '65': {
                start: {
                    line: 175,
                    column: 20
                },
                end: {
                    line: 191,
                    column: 9
                }
            },
            '66': {
                start: {
                    line: 176,
                    column: 12
                },
                end: {
                    line: 190,
                    column: 15
                }
            },
            '67': {
                start: {
                    line: 177,
                    column: 16
                },
                end: {
                    line: 177,
                    column: 71
                }
            },
            '68': {
                start: {
                    line: 177,
                    column: 25
                },
                end: {
                    line: 177,
                    column: 69
                }
            },
            '69': {
                start: {
                    line: 177,
                    column: 57
                },
                end: {
                    line: 177,
                    column: 65
                }
            },
            '70': {
                start: {
                    line: 179,
                    column: 16
                },
                end: {
                    line: 188,
                    column: 17
                }
            },
            '71': {
                start: {
                    line: 180,
                    column: 20
                },
                end: {
                    line: 183,
                    column: 21
                }
            },
            '72': {
                start: {
                    line: 181,
                    column: 24
                },
                end: {
                    line: 181,
                    column: 47
                }
            },
            '73': {
                start: {
                    line: 182,
                    column: 24
                },
                end: {
                    line: 182,
                    column: 39
                }
            },
            '74': {
                start: {
                    line: 185,
                    column: 20
                },
                end: {
                    line: 185,
                    column: 43
                }
            },
            '75': {
                start: {
                    line: 186,
                    column: 20
                },
                end: {
                    line: 186,
                    column: 63
                }
            },
            '76': {
                start: {
                    line: 187,
                    column: 20
                },
                end: {
                    line: 187,
                    column: 45
                }
            },
            '77': {
                start: {
                    line: 189,
                    column: 16
                },
                end: {
                    line: 189,
                    column: 42
                }
            },
            '78': {
                start: {
                    line: 192,
                    column: 8
                },
                end: {
                    line: 192,
                    column: 16
                }
            },
            '79': {
                start: {
                    line: 209,
                    column: 8
                },
                end: {
                    line: 216,
                    column: 42
                }
            },
            '80': {
                start: {
                    line: 211,
                    column: 12
                },
                end: {
                    line: 213,
                    column: 13
                }
            },
            '81': {
                start: {
                    line: 212,
                    column: 16
                },
                end: {
                    line: 212,
                    column: 46
                }
            },
            '82': {
                start: {
                    line: 214,
                    column: 12
                },
                end: {
                    line: 214,
                    column: 42
                }
            },
            '83': {
                start: {
                    line: 216,
                    column: 29
                },
                end: {
                    line: 216,
                    column: 40
                }
            },
            '84': {
                start: {
                    line: 226,
                    column: 8
                },
                end: {
                    line: 226,
                    column: 55
                }
            },
            '85': {
                start: {
                    line: 237,
                    column: 8
                },
                end: {
                    line: 239,
                    column: 12
                }
            },
            '86': {
                start: {
                    line: 250,
                    column: 8
                },
                end: {
                    line: 250,
                    column: 82
                }
            },
            '87': {
                start: {
                    line: 274,
                    column: 17
                },
                end: {
                    line: 274,
                    column: 41
                }
            },
            '88': {
                start: {
                    line: 278,
                    column: 17
                },
                end: {
                    line: 278,
                    column: 30
                }
            },
            '89': {
                start: {
                    line: 279,
                    column: 17
                },
                end: {
                    line: 279,
                    column: 24
                }
            },
            '90': {
                start: {
                    line: 280,
                    column: 22
                },
                end: {
                    line: 280,
                    column: 29
                }
            },
            '91': {
                start: {
                    line: 282,
                    column: 4
                },
                end: {
                    line: 301,
                    column: 5
                }
            },
            '92': {
                start: {
                    line: 291,
                    column: 8
                },
                end: {
                    line: 291,
                    column: 61
                }
            },
            '93': {
                start: {
                    line: 296,
                    column: 8
                },
                end: {
                    line: 296,
                    column: 32
                }
            },
            '94': {
                start: {
                    line: 297,
                    column: 8
                },
                end: {
                    line: 297,
                    column: 42
                }
            },
            '95': {
                start: {
                    line: 298,
                    column: 8
                },
                end: {
                    line: 298,
                    column: 32
                }
            },
            '96': {
                start: {
                    line: 300,
                    column: 8
                },
                end: {
                    line: 300,
                    column: 102
                }
            },
            '97': {
                start: {
                    line: 306,
                    column: 4
                },
                end: {
                    line: 306,
                    column: 37
                }
            },
            '98': {
                start: {
                    line: 307,
                    column: 4
                },
                end: {
                    line: 307,
                    column: 62
                }
            },
            '99': {
                start: {
                    line: 311,
                    column: 16
                },
                end: {
                    line: 311,
                    column: 47
                }
            },
            '100': {
                start: {
                    line: 312,
                    column: 19
                },
                end: {
                    line: 312,
                    column: 62
                }
            },
            '101': {
                start: {
                    line: 313,
                    column: 22
                },
                end: {
                    line: 313,
                    column: 53
                }
            },
            '102': {
                start: {
                    line: 314,
                    column: 16
                },
                end: {
                    line: 314,
                    column: 36
                }
            },
            '103': {
                start: {
                    line: 316,
                    column: 14
                },
                end: {
                    line: 316,
                    column: 36
                }
            },
            '104': {
                start: {
                    line: 318,
                    column: 19
                },
                end: {
                    line: 375,
                    column: 5
                }
            },
            '105': {
                start: {
                    line: 319,
                    column: 19
                },
                end: {
                    line: 326,
                    column: 9
                }
            },
            '106': {
                start: {
                    line: 324,
                    column: 12
                },
                end: {
                    line: 324,
                    column: 58
                }
            },
            '107': {
                start: {
                    line: 325,
                    column: 12
                },
                end: {
                    line: 325,
                    column: 61
                }
            },
            '108': {
                start: {
                    line: 325,
                    column: 44
                },
                end: {
                    line: 325,
                    column: 59
                }
            },
            '109': {
                start: {
                    line: 329,
                    column: 32
                },
                end: {
                    line: 329,
                    column: 34
                }
            },
            '110': {
                start: {
                    line: 330,
                    column: 8
                },
                end: {
                    line: 330,
                    column: 54
                }
            },
            '111': {
                start: {
                    line: 331,
                    column: 8
                },
                end: {
                    line: 331,
                    column: 55
                }
            },
            '112': {
                start: {
                    line: 333,
                    column: 23
                },
                end: {
                    line: 333,
                    column: 40
                }
            },
            '113': {
                start: {
                    line: 334,
                    column: 20
                },
                end: {
                    line: 334,
                    column: 77
                }
            },
            '114': {
                start: {
                    line: 336,
                    column: 8
                },
                end: {
                    line: 338,
                    column: 11
                }
            },
            '115': {
                start: {
                    line: 340,
                    column: 8
                },
                end: {
                    line: 340,
                    column: 54
                }
            },
            '116': {
                start: {
                    line: 341,
                    column: 8
                },
                end: {
                    line: 341,
                    column: 55
                }
            },
            '117': {
                start: {
                    line: 349,
                    column: 8
                },
                end: {
                    line: 349,
                    column: 45
                }
            },
            '118': {
                start: {
                    line: 350,
                    column: 8
                },
                end: {
                    line: 350,
                    column: 55
                }
            },
            '119': {
                start: {
                    line: 353,
                    column: 8
                },
                end: {
                    line: 362,
                    column: 9
                }
            },
            '120': {
                start: {
                    line: 355,
                    column: 15
                },
                end: {
                    line: 362,
                    column: 9
                }
            },
            '121': {
                start: {
                    line: 357,
                    column: 15
                },
                end: {
                    line: 362,
                    column: 9
                }
            },
            '122': {
                start: {
                    line: 359,
                    column: 15
                },
                end: {
                    line: 362,
                    column: 9
                }
            },
            '123': {
                start: {
                    line: 361,
                    column: 12
                },
                end: {
                    line: 361,
                    column: 49
                }
            },
            '124': {
                start: {
                    line: 365,
                    column: 8
                },
                end: {
                    line: 365,
                    column: 55
                }
            },
            '125': {
                start: {
                    line: 367,
                    column: 8
                },
                end: {
                    line: 367,
                    column: 40
                }
            },
            '126': {
                start: {
                    line: 369,
                    column: 8
                },
                end: {
                    line: 372,
                    column: 9
                }
            },
            '127': {
                start: {
                    line: 370,
                    column: 12
                },
                end: {
                    line: 370,
                    column: 29
                }
            },
            '128': {
                start: {
                    line: 371,
                    column: 12
                },
                end: {
                    line: 371,
                    column: 19
                }
            },
            '129': {
                start: {
                    line: 374,
                    column: 8
                },
                end: {
                    line: 374,
                    column: 53
                }
            },
            '130': {
                start: {
                    line: 377,
                    column: 16
                },
                end: {
                    line: 377,
                    column: 75
                }
            },
            '131': {
                start: {
                    line: 378,
                    column: 4
                },
                end: {
                    line: 380,
                    column: 5
                }
            },
            '132': {
                start: {
                    line: 379,
                    column: 8
                },
                end: {
                    line: 379,
                    column: 36
                }
            },
            '133': {
                start: {
                    line: 382,
                    column: 4
                },
                end: {
                    line: 382,
                    column: 31
                }
            },
            '134': {
                start: {
                    line: 383,
                    column: 4
                },
                end: {
                    line: 383,
                    column: 37
                }
            },
            '135': {
                start: {
                    line: 385,
                    column: 15
                },
                end: {
                    line: 389,
                    column: 5
                }
            },
            '136': {
                start: {
                    line: 386,
                    column: 37
                },
                end: {
                    line: 386,
                    column: 65
                }
            },
            '137': {
                start: {
                    line: 387,
                    column: 8
                },
                end: {
                    line: 387,
                    column: 82
                }
            },
            '138': {
                start: {
                    line: 388,
                    column: 8
                },
                end: {
                    line: 388,
                    column: 60
                }
            },
            '139': {
                start: {
                    line: 391,
                    column: 4
                },
                end: {
                    line: 406,
                    column: 6
                }
            },
            '140': {
                start: {
                    line: 392,
                    column: 8
                },
                end: {
                    line: 394,
                    column: 9
                }
            },
            '141': {
                start: {
                    line: 393,
                    column: 12
                },
                end: {
                    line: 393,
                    column: 55
                }
            },
            '142': {
                start: {
                    line: 396,
                    column: 28
                },
                end: {
                    line: 396,
                    column: 40
                }
            },
            '143': {
                start: {
                    line: 397,
                    column: 8
                },
                end: {
                    line: 405,
                    column: 9
                }
            },
            '144': {
                start: {
                    line: 398,
                    column: 23
                },
                end: {
                    line: 398,
                    column: 50
                }
            },
            '145': {
                start: {
                    line: 400,
                    column: 12
                },
                end: {
                    line: 404,
                    column: 15
                }
            },
            '146': {
                start: {
                    line: 401,
                    column: 16
                },
                end: {
                    line: 401,
                    column: 46
                }
            },
            '147': {
                start: {
                    line: 401,
                    column: 27
                },
                end: {
                    line: 401,
                    column: 44
                }
            },
            '148': {
                start: {
                    line: 402,
                    column: 16
                },
                end: {
                    line: 402,
                    column: 39
                }
            },
            '149': {
                start: {
                    line: 403,
                    column: 16
                },
                end: {
                    line: 403,
                    column: 36
                }
            },
            '150': {
                start: {
                    line: 407,
                    column: 4
                },
                end: {
                    line: 407,
                    column: 19
                }
            },
            '151': {
                start: {
                    line: 410,
                    column: 0
                },
                end: {
                    line: 410,
                    column: 27
                }
            }
        },
        fnMap: {
            '0': {
                name: '(anonymous_0)',
                decl: {
                    start: {
                        line: 19,
                        column: 4
                    },
                    end: {
                        line: 19,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 19,
                        column: 26
                    },
                    end: {
                        line: 21,
                        column: 5
                    }
                },
                line: 19
            },
            '1': {
                name: '(anonymous_1)',
                decl: {
                    start: {
                        line: 27,
                        column: 4
                    },
                    end: {
                        line: 27,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 27,
                        column: 25
                    },
                    end: {
                        line: 49,
                        column: 5
                    }
                },
                line: 27
            },
            '2': {
                name: '(anonymous_2)',
                decl: {
                    start: {
                        line: 51,
                        column: 4
                    },
                    end: {
                        line: 51,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 51,
                        column: 28
                    },
                    end: {
                        line: 58,
                        column: 5
                    }
                },
                line: 51
            },
            '3': {
                name: '(anonymous_3)',
                decl: {
                    start: {
                        line: 55,
                        column: 14
                    },
                    end: {
                        line: 55,
                        column: 15
                    }
                },
                loc: {
                    start: {
                        line: 55,
                        column: 30
                    },
                    end: {
                        line: 57,
                        column: 9
                    }
                },
                line: 55
            },
            '4': {
                name: '(anonymous_4)',
                decl: {
                    start: {
                        line: 60,
                        column: 4
                    },
                    end: {
                        line: 60,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 60,
                        column: 28
                    },
                    end: {
                        line: 62,
                        column: 5
                    }
                },
                line: 60
            },
            '5': {
                name: '(anonymous_5)',
                decl: {
                    start: {
                        line: 64,
                        column: 4
                    },
                    end: {
                        line: 64,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 64,
                        column: 31
                    },
                    end: {
                        line: 66,
                        column: 5
                    }
                },
                line: 64
            },
            '6': {
                name: '(anonymous_6)',
                decl: {
                    start: {
                        line: 74,
                        column: 4
                    },
                    end: {
                        line: 74,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 74,
                        column: 21
                    },
                    end: {
                        line: 76,
                        column: 5
                    }
                },
                line: 74
            },
            '7': {
                name: '(anonymous_7)',
                decl: {
                    start: {
                        line: 83,
                        column: 4
                    },
                    end: {
                        line: 83,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 83,
                        column: 29
                    },
                    end: {
                        line: 87,
                        column: 5
                    }
                },
                line: 83
            },
            '8': {
                name: '(anonymous_8)',
                decl: {
                    start: {
                        line: 95,
                        column: 4
                    },
                    end: {
                        line: 95,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 95,
                        column: 30
                    },
                    end: {
                        line: 97,
                        column: 5
                    }
                },
                line: 95
            },
            '9': {
                name: '(anonymous_9)',
                decl: {
                    start: {
                        line: 106,
                        column: 4
                    },
                    end: {
                        line: 106,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 106,
                        column: 28
                    },
                    end: {
                        line: 114,
                        column: 5
                    }
                },
                line: 106
            },
            '10': {
                name: '(anonymous_10)',
                decl: {
                    start: {
                        line: 123,
                        column: 4
                    },
                    end: {
                        line: 123,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 123,
                        column: 35
                    },
                    end: {
                        line: 193,
                        column: 5
                    }
                },
                line: 123
            },
            '11': {
                name: '(anonymous_11)',
                decl: {
                    start: {
                        line: 126,
                        column: 25
                    },
                    end: {
                        line: 126,
                        column: 26
                    }
                },
                loc: {
                    start: {
                        line: 126,
                        column: 43
                    },
                    end: {
                        line: 131,
                        column: 9
                    }
                },
                line: 126
            },
            '12': {
                name: '(anonymous_12)',
                decl: {
                    start: {
                        line: 153,
                        column: 24
                    },
                    end: {
                        line: 153,
                        column: 25
                    }
                },
                loc: {
                    start: {
                        line: 153,
                        column: 38
                    },
                    end: {
                        line: 170,
                        column: 9
                    }
                },
                line: 153
            },
            '13': {
                name: '(anonymous_13)',
                decl: {
                    start: {
                        line: 154,
                        column: 23
                    },
                    end: {
                        line: 154,
                        column: 24
                    }
                },
                loc: {
                    start: {
                        line: 154,
                        column: 35
                    },
                    end: {
                        line: 169,
                        column: 13
                    }
                },
                line: 154
            },
            '14': {
                name: '(anonymous_14)',
                decl: {
                    start: {
                        line: 175,
                        column: 20
                    },
                    end: {
                        line: 175,
                        column: 21
                    }
                },
                loc: {
                    start: {
                        line: 175,
                        column: 32
                    },
                    end: {
                        line: 191,
                        column: 9
                    }
                },
                line: 175
            },
            '15': {
                name: '(anonymous_15)',
                decl: {
                    start: {
                        line: 176,
                        column: 22
                    },
                    end: {
                        line: 176,
                        column: 23
                    }
                },
                loc: {
                    start: {
                        line: 176,
                        column: 46
                    },
                    end: {
                        line: 190,
                        column: 13
                    }
                },
                line: 176
            },
            '16': {
                name: '(anonymous_16)',
                decl: {
                    start: {
                        line: 177,
                        column: 43
                    },
                    end: {
                        line: 177,
                        column: 44
                    }
                },
                loc: {
                    start: {
                        line: 177,
                        column: 55
                    },
                    end: {
                        line: 177,
                        column: 67
                    }
                },
                line: 177
            },
            '17': {
                name: '(anonymous_17)',
                decl: {
                    start: {
                        line: 208,
                        column: 4
                    },
                    end: {
                        line: 208,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 208,
                        column: 31
                    },
                    end: {
                        line: 217,
                        column: 5
                    }
                },
                line: 208
            },
            '18': {
                name: '(anonymous_18)',
                decl: {
                    start: {
                        line: 210,
                        column: 14
                    },
                    end: {
                        line: 210,
                        column: 15
                    }
                },
                loc: {
                    start: {
                        line: 210,
                        column: 26
                    },
                    end: {
                        line: 215,
                        column: 9
                    }
                },
                line: 210
            },
            '19': {
                name: '(anonymous_19)',
                decl: {
                    start: {
                        line: 216,
                        column: 14
                    },
                    end: {
                        line: 216,
                        column: 15
                    }
                },
                loc: {
                    start: {
                        line: 216,
                        column: 29
                    },
                    end: {
                        line: 216,
                        column: 40
                    }
                },
                line: 216
            },
            '20': {
                name: '(anonymous_20)',
                decl: {
                    start: {
                        line: 225,
                        column: 4
                    },
                    end: {
                        line: 225,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 225,
                        column: 34
                    },
                    end: {
                        line: 227,
                        column: 5
                    }
                },
                line: 225
            },
            '21': {
                name: '(anonymous_21)',
                decl: {
                    start: {
                        line: 236,
                        column: 4
                    },
                    end: {
                        line: 236,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 236,
                        column: 35
                    },
                    end: {
                        line: 240,
                        column: 5
                    }
                },
                line: 236
            },
            '22': {
                name: '(anonymous_22)',
                decl: {
                    start: {
                        line: 249,
                        column: 4
                    },
                    end: {
                        line: 249,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 249,
                        column: 35
                    },
                    end: {
                        line: 251,
                        column: 5
                    }
                },
                line: 249
            },
            '23': {
                name: 'applyMetadata',
                decl: {
                    start: {
                        line: 273,
                        column: 9
                    },
                    end: {
                        line: 273,
                        column: 22
                    }
                },
                loc: {
                    start: {
                        line: 273,
                        column: 46
                    },
                    end: {
                        line: 308,
                        column: 1
                    }
                },
                line: 273
            },
            '24': {
                name: 'algorithm',
                decl: {
                    start: {
                        line: 310,
                        column: 9
                    },
                    end: {
                        line: 310,
                        column: 18
                    }
                },
                loc: {
                    start: {
                        line: 310,
                        column: 32
                    },
                    end: {
                        line: 408,
                        column: 1
                    }
                },
                line: 310
            },
            '25': {
                name: '(anonymous_25)',
                decl: {
                    start: {
                        line: 318,
                        column: 19
                    },
                    end: {
                        line: 318,
                        column: 20
                    }
                },
                loc: {
                    start: {
                        line: 318,
                        column: 40
                    },
                    end: {
                        line: 375,
                        column: 5
                    }
                },
                line: 318
            },
            '26': {
                name: '(anonymous_26)',
                decl: {
                    start: {
                        line: 319,
                        column: 19
                    },
                    end: {
                        line: 319,
                        column: 20
                    }
                },
                loc: {
                    start: {
                        line: 319,
                        column: 32
                    },
                    end: {
                        line: 326,
                        column: 9
                    }
                },
                line: 319
            },
            '27': {
                name: '(anonymous_27)',
                decl: {
                    start: {
                        line: 385,
                        column: 15
                    },
                    end: {
                        line: 385,
                        column: 16
                    }
                },
                loc: {
                    start: {
                        line: 385,
                        column: 30
                    },
                    end: {
                        line: 389,
                        column: 5
                    }
                },
                line: 385
            },
            '28': {
                name: '(anonymous_28)',
                decl: {
                    start: {
                        line: 391,
                        column: 17
                    },
                    end: {
                        line: 391,
                        column: 18
                    }
                },
                loc: {
                    start: {
                        line: 391,
                        column: 29
                    },
                    end: {
                        line: 406,
                        column: 5
                    }
                },
                line: 391
            },
            '29': {
                name: '(anonymous_29)',
                decl: {
                    start: {
                        line: 400,
                        column: 45
                    },
                    end: {
                        line: 400,
                        column: 46
                    }
                },
                loc: {
                    start: {
                        line: 400,
                        column: 71
                    },
                    end: {
                        line: 404,
                        column: 13
                    }
                },
                line: 400
            }
        },
        branchMap: {
            '0': {
                loc: {
                    start: {
                        line: 30,
                        column: 12
                    },
                    end: {
                        line: 37,
                        column: 13
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 30,
                        column: 12
                    },
                    end: {
                        line: 37,
                        column: 13
                    }
                }, {
                    start: {
                        line: 30,
                        column: 12
                    },
                    end: {
                        line: 37,
                        column: 13
                    }
                }],
                line: 30
            },
            '1': {
                loc: {
                    start: {
                        line: 31,
                        column: 16
                    },
                    end: {
                        line: 33,
                        column: 17
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 31,
                        column: 16
                    },
                    end: {
                        line: 33,
                        column: 17
                    }
                }, {
                    start: {
                        line: 31,
                        column: 16
                    },
                    end: {
                        line: 33,
                        column: 17
                    }
                }],
                line: 31
            },
            '2': {
                loc: {
                    start: {
                        line: 34,
                        column: 16
                    },
                    end: {
                        line: 36,
                        column: 17
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 34,
                        column: 16
                    },
                    end: {
                        line: 36,
                        column: 17
                    }
                }, {
                    start: {
                        line: 34,
                        column: 16
                    },
                    end: {
                        line: 36,
                        column: 17
                    }
                }],
                line: 34
            },
            '3': {
                loc: {
                    start: {
                        line: 40,
                        column: 12
                    },
                    end: {
                        line: 40,
                        column: 53
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 40,
                        column: 12
                    },
                    end: {
                        line: 40,
                        column: 53
                    }
                }, {
                    start: {
                        line: 40,
                        column: 12
                    },
                    end: {
                        line: 40,
                        column: 53
                    }
                }],
                line: 40
            },
            '4': {
                loc: {
                    start: {
                        line: 45,
                        column: 12
                    },
                    end: {
                        line: 47,
                        column: 13
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 45,
                        column: 12
                    },
                    end: {
                        line: 47,
                        column: 13
                    }
                }, {
                    start: {
                        line: 45,
                        column: 12
                    },
                    end: {
                        line: 47,
                        column: 13
                    }
                }],
                line: 45
            },
            '5': {
                loc: {
                    start: {
                        line: 110,
                        column: 8
                    },
                    end: {
                        line: 112,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 110,
                        column: 8
                    },
                    end: {
                        line: 112,
                        column: 9
                    }
                }, {
                    start: {
                        line: 110,
                        column: 8
                    },
                    end: {
                        line: 112,
                        column: 9
                    }
                }],
                line: 110
            },
            '6': {
                loc: {
                    start: {
                        line: 151,
                        column: 8
                    },
                    end: {
                        line: 151,
                        column: 58
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 151,
                        column: 8
                    },
                    end: {
                        line: 151,
                        column: 58
                    }
                }, {
                    start: {
                        line: 151,
                        column: 8
                    },
                    end: {
                        line: 151,
                        column: 58
                    }
                }],
                line: 151
            },
            '7': {
                loc: {
                    start: {
                        line: 164,
                        column: 16
                    },
                    end: {
                        line: 164,
                        column: 73
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 164,
                        column: 16
                    },
                    end: {
                        line: 164,
                        column: 73
                    }
                }, {
                    start: {
                        line: 164,
                        column: 16
                    },
                    end: {
                        line: 164,
                        column: 73
                    }
                }],
                line: 164
            },
            '8': {
                loc: {
                    start: {
                        line: 177,
                        column: 16
                    },
                    end: {
                        line: 177,
                        column: 71
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 177,
                        column: 16
                    },
                    end: {
                        line: 177,
                        column: 71
                    }
                }, {
                    start: {
                        line: 177,
                        column: 16
                    },
                    end: {
                        line: 177,
                        column: 71
                    }
                }],
                line: 177
            },
            '9': {
                loc: {
                    start: {
                        line: 179,
                        column: 16
                    },
                    end: {
                        line: 188,
                        column: 17
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 179,
                        column: 16
                    },
                    end: {
                        line: 188,
                        column: 17
                    }
                }, {
                    start: {
                        line: 179,
                        column: 16
                    },
                    end: {
                        line: 188,
                        column: 17
                    }
                }],
                line: 179
            },
            '10': {
                loc: {
                    start: {
                        line: 180,
                        column: 20
                    },
                    end: {
                        line: 183,
                        column: 21
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 180,
                        column: 20
                    },
                    end: {
                        line: 183,
                        column: 21
                    }
                }, {
                    start: {
                        line: 180,
                        column: 20
                    },
                    end: {
                        line: 183,
                        column: 21
                    }
                }],
                line: 180
            },
            '11': {
                loc: {
                    start: {
                        line: 211,
                        column: 12
                    },
                    end: {
                        line: 213,
                        column: 13
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 211,
                        column: 12
                    },
                    end: {
                        line: 213,
                        column: 13
                    }
                }, {
                    start: {
                        line: 211,
                        column: 12
                    },
                    end: {
                        line: 213,
                        column: 13
                    }
                }],
                line: 211
            },
            '12': {
                loc: {
                    start: {
                        line: 282,
                        column: 4
                    },
                    end: {
                        line: 301,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 282,
                        column: 4
                    },
                    end: {
                        line: 301,
                        column: 5
                    }
                }, {
                    start: {
                        line: 282,
                        column: 4
                    },
                    end: {
                        line: 301,
                        column: 5
                    }
                }],
                line: 282
            },
            '13': {
                loc: {
                    start: {
                        line: 325,
                        column: 12
                    },
                    end: {
                        line: 325,
                        column: 61
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 325,
                        column: 12
                    },
                    end: {
                        line: 325,
                        column: 61
                    }
                }, {
                    start: {
                        line: 325,
                        column: 12
                    },
                    end: {
                        line: 325,
                        column: 61
                    }
                }],
                line: 325
            },
            '14': {
                loc: {
                    start: {
                        line: 353,
                        column: 8
                    },
                    end: {
                        line: 362,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 353,
                        column: 8
                    },
                    end: {
                        line: 362,
                        column: 9
                    }
                }, {
                    start: {
                        line: 353,
                        column: 8
                    },
                    end: {
                        line: 362,
                        column: 9
                    }
                }],
                line: 353
            },
            '15': {
                loc: {
                    start: {
                        line: 355,
                        column: 15
                    },
                    end: {
                        line: 362,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 355,
                        column: 15
                    },
                    end: {
                        line: 362,
                        column: 9
                    }
                }, {
                    start: {
                        line: 355,
                        column: 15
                    },
                    end: {
                        line: 362,
                        column: 9
                    }
                }],
                line: 355
            },
            '16': {
                loc: {
                    start: {
                        line: 357,
                        column: 15
                    },
                    end: {
                        line: 362,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 357,
                        column: 15
                    },
                    end: {
                        line: 362,
                        column: 9
                    }
                }, {
                    start: {
                        line: 357,
                        column: 15
                    },
                    end: {
                        line: 362,
                        column: 9
                    }
                }],
                line: 357
            },
            '17': {
                loc: {
                    start: {
                        line: 359,
                        column: 15
                    },
                    end: {
                        line: 362,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 359,
                        column: 15
                    },
                    end: {
                        line: 362,
                        column: 9
                    }
                }, {
                    start: {
                        line: 359,
                        column: 15
                    },
                    end: {
                        line: 362,
                        column: 9
                    }
                }],
                line: 359
            },
            '18': {
                loc: {
                    start: {
                        line: 369,
                        column: 8
                    },
                    end: {
                        line: 372,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 369,
                        column: 8
                    },
                    end: {
                        line: 372,
                        column: 9
                    }
                }, {
                    start: {
                        line: 369,
                        column: 8
                    },
                    end: {
                        line: 372,
                        column: 9
                    }
                }],
                line: 369
            },
            '19': {
                loc: {
                    start: {
                        line: 377,
                        column: 44
                    },
                    end: {
                        line: 377,
                        column: 75
                    }
                },
                type: 'binary-expr',
                locations: [{
                    start: {
                        line: 377,
                        column: 44
                    },
                    end: {
                        line: 377,
                        column: 69
                    }
                }, {
                    start: {
                        line: 377,
                        column: 73
                    },
                    end: {
                        line: 377,
                        column: 75
                    }
                }],
                line: 377
            },
            '20': {
                loc: {
                    start: {
                        line: 378,
                        column: 4
                    },
                    end: {
                        line: 380,
                        column: 5
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 378,
                        column: 4
                    },
                    end: {
                        line: 380,
                        column: 5
                    }
                }, {
                    start: {
                        line: 378,
                        column: 4
                    },
                    end: {
                        line: 380,
                        column: 5
                    }
                }],
                line: 378
            },
            '21': {
                loc: {
                    start: {
                        line: 387,
                        column: 39
                    },
                    end: {
                        line: 387,
                        column: 81
                    }
                },
                type: 'cond-expr',
                locations: [{
                    start: {
                        line: 387,
                        column: 65
                    },
                    end: {
                        line: 387,
                        column: 68
                    }
                }, {
                    start: {
                        line: 387,
                        column: 70
                    },
                    end: {
                        line: 387,
                        column: 81
                    }
                }],
                line: 387
            },
            '22': {
                loc: {
                    start: {
                        line: 392,
                        column: 8
                    },
                    end: {
                        line: 394,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 392,
                        column: 8
                    },
                    end: {
                        line: 394,
                        column: 9
                    }
                }, {
                    start: {
                        line: 392,
                        column: 8
                    },
                    end: {
                        line: 394,
                        column: 9
                    }
                }],
                line: 392
            },
            '23': {
                loc: {
                    start: {
                        line: 397,
                        column: 8
                    },
                    end: {
                        line: 405,
                        column: 9
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 397,
                        column: 8
                    },
                    end: {
                        line: 405,
                        column: 9
                    }
                }, {
                    start: {
                        line: 397,
                        column: 8
                    },
                    end: {
                        line: 405,
                        column: 9
                    }
                }],
                line: 397
            },
            '24': {
                loc: {
                    start: {
                        line: 401,
                        column: 16
                    },
                    end: {
                        line: 401,
                        column: 46
                    }
                },
                type: 'if',
                locations: [{
                    start: {
                        line: 401,
                        column: 16
                    },
                    end: {
                        line: 401,
                        column: 46
                    }
                }, {
                    start: {
                        line: 401,
                        column: 16
                    },
                    end: {
                        line: 401,
                        column: 46
                    }
                }],
                line: 401
            }
        },
        s: {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0,
            '6': 0,
            '7': 0,
            '8': 0,
            '9': 0,
            '10': 0,
            '11': 0,
            '12': 0,
            '13': 0,
            '14': 0,
            '15': 0,
            '16': 0,
            '17': 0,
            '18': 0,
            '19': 0,
            '20': 0,
            '21': 0,
            '22': 0,
            '23': 0,
            '24': 0,
            '25': 0,
            '26': 0,
            '27': 0,
            '28': 0,
            '29': 0,
            '30': 0,
            '31': 0,
            '32': 0,
            '33': 0,
            '34': 0,
            '35': 0,
            '36': 0,
            '37': 0,
            '38': 0,
            '39': 0,
            '40': 0,
            '41': 0,
            '42': 0,
            '43': 0,
            '44': 0,
            '45': 0,
            '46': 0,
            '47': 0,
            '48': 0,
            '49': 0,
            '50': 0,
            '51': 0,
            '52': 0,
            '53': 0,
            '54': 0,
            '55': 0,
            '56': 0,
            '57': 0,
            '58': 0,
            '59': 0,
            '60': 0,
            '61': 0,
            '62': 0,
            '63': 0,
            '64': 0,
            '65': 0,
            '66': 0,
            '67': 0,
            '68': 0,
            '69': 0,
            '70': 0,
            '71': 0,
            '72': 0,
            '73': 0,
            '74': 0,
            '75': 0,
            '76': 0,
            '77': 0,
            '78': 0,
            '79': 0,
            '80': 0,
            '81': 0,
            '82': 0,
            '83': 0,
            '84': 0,
            '85': 0,
            '86': 0,
            '87': 0,
            '88': 0,
            '89': 0,
            '90': 0,
            '91': 0,
            '92': 0,
            '93': 0,
            '94': 0,
            '95': 0,
            '96': 0,
            '97': 0,
            '98': 0,
            '99': 0,
            '100': 0,
            '101': 0,
            '102': 0,
            '103': 0,
            '104': 0,
            '105': 0,
            '106': 0,
            '107': 0,
            '108': 0,
            '109': 0,
            '110': 0,
            '111': 0,
            '112': 0,
            '113': 0,
            '114': 0,
            '115': 0,
            '116': 0,
            '117': 0,
            '118': 0,
            '119': 0,
            '120': 0,
            '121': 0,
            '122': 0,
            '123': 0,
            '124': 0,
            '125': 0,
            '126': 0,
            '127': 0,
            '128': 0,
            '129': 0,
            '130': 0,
            '131': 0,
            '132': 0,
            '133': 0,
            '134': 0,
            '135': 0,
            '136': 0,
            '137': 0,
            '138': 0,
            '139': 0,
            '140': 0,
            '141': 0,
            '142': 0,
            '143': 0,
            '144': 0,
            '145': 0,
            '146': 0,
            '147': 0,
            '148': 0,
            '149': 0,
            '150': 0,
            '151': 0
        },
        f: {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0,
            '6': 0,
            '7': 0,
            '8': 0,
            '9': 0,
            '10': 0,
            '11': 0,
            '12': 0,
            '13': 0,
            '14': 0,
            '15': 0,
            '16': 0,
            '17': 0,
            '18': 0,
            '19': 0,
            '20': 0,
            '21': 0,
            '22': 0,
            '23': 0,
            '24': 0,
            '25': 0,
            '26': 0,
            '27': 0,
            '28': 0,
            '29': 0
        },
        b: {
            '0': [0, 0],
            '1': [0, 0],
            '2': [0, 0],
            '3': [0, 0],
            '4': [0, 0],
            '5': [0, 0],
            '6': [0, 0],
            '7': [0, 0],
            '8': [0, 0],
            '9': [0, 0],
            '10': [0, 0],
            '11': [0, 0],
            '12': [0, 0],
            '13': [0, 0],
            '14': [0, 0],
            '15': [0, 0],
            '16': [0, 0],
            '17': [0, 0],
            '18': [0, 0],
            '19': [0, 0],
            '20': [0, 0],
            '21': [0, 0],
            '22': [0, 0],
            '23': [0, 0],
            '24': [0, 0]
        },
        _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global window, fetch, XMLHttpRequest, Blob, Event */
var Errors = (cov_g7yyf6xmi.s[0]++, __webpack_require__(22));
var MediaTag = (cov_g7yyf6xmi.s[1]++, __webpack_require__(19));
var CryptoFilter = (cov_g7yyf6xmi.s[2]++, __webpack_require__(12));

var PARANOIA = (cov_g7yyf6xmi.s[3]++, true);
var plainChunkLength = (cov_g7yyf6xmi.s[4]++, 128 * 1024);
var cypherChunkLength = (cov_g7yyf6xmi.s[5]++, 131088);

/**
 * Class for crypto.
 *
 * @class      Crypto (name)
 */

var Cryptopad = function () {
    function Cryptopad() {
        _classCallCheck(this, Cryptopad);
    }

    _createClass(Cryptopad, null, [{
        key: 'createNonce',

        /**
         * Create a nonce
         */
        value: function createNonce() {
            cov_g7yyf6xmi.f[0]++;
            cov_g7yyf6xmi.s[6]++;

            return new Uint8Array(new Array(24).fill(0));
        }

        /**
          * Increment a nonce
          * @param      {Uint8Array}  u8      The nonce
          */

    }, {
        key: 'increment',
        value: function increment(N) {
            cov_g7yyf6xmi.f[1]++;

            var l = (cov_g7yyf6xmi.s[7]++, N.length);
            cov_g7yyf6xmi.s[8]++;
            while (l-- > 1) {
                cov_g7yyf6xmi.s[9]++;

                if (PARANOIA) {
                    cov_g7yyf6xmi.b[0][0]++;
                    cov_g7yyf6xmi.s[10]++;

                    if (typeof N[l] !== 'number') {
                        cov_g7yyf6xmi.b[1][0]++;
                        cov_g7yyf6xmi.s[11]++;

                        throw new Error('E_UNSAFE_TYPE');
                    } else {
                        cov_g7yyf6xmi.b[1][1]++;
                    }
                    cov_g7yyf6xmi.s[12]++;
                    if (N[l] > 255) {
                        cov_g7yyf6xmi.b[2][0]++;
                        cov_g7yyf6xmi.s[13]++;

                        throw new Error('E_OUT_OF_BOUNDS');
                    } else {
                        cov_g7yyf6xmi.b[2][1]++;
                    }
                } else {
                    cov_g7yyf6xmi.b[0][1]++;
                }
                /*  jshint probably suspects this is unsafe because we lack types
                    but as long as this is only used on nonces, it should be safe  */
                cov_g7yyf6xmi.s[14]++;
                if (N[l] !== 255) {
                    cov_g7yyf6xmi.b[3][0]++;
                    cov_g7yyf6xmi.s[15]++;
                    return void N[l]++;
                } else {
                    cov_g7yyf6xmi.b[3][1]++;
                } // jshint ignore:line
                cov_g7yyf6xmi.s[16]++;
                N[l] = 0;

                // you don't need to worry about this running out.
                // you'd need a REAAAALLY big file
                cov_g7yyf6xmi.s[17]++;
                if (l === 0) {
                    cov_g7yyf6xmi.b[4][0]++;
                    cov_g7yyf6xmi.s[18]++;

                    throw new Error('E_NONCE_TOO_LARGE');
                } else {
                    cov_g7yyf6xmi.b[4][1]++;
                }
            }
        }
    }, {
        key: 'encodePrefix',
        value: function encodePrefix(p) {
            cov_g7yyf6xmi.f[2]++;
            cov_g7yyf6xmi.s[19]++;

            return [65280, // 255 << 8
            255].map(function (n, i) {
                cov_g7yyf6xmi.f[3]++;
                cov_g7yyf6xmi.s[20]++;

                return (p & n) >> (1 - i) * 8;
            });
        }
    }, {
        key: 'decodePrefix',
        value: function decodePrefix(A) {
            cov_g7yyf6xmi.f[4]++;
            cov_g7yyf6xmi.s[21]++;

            return A[0] << 8 | A[1];
        }
    }, {
        key: 'joinChunks',
        value: function joinChunks(chunks) {
            cov_g7yyf6xmi.f[5]++;
            cov_g7yyf6xmi.s[22]++;

            return new Blob(chunks);
        }

        /**
         * Convert a Uint8Array into Array.
         *
         * @param      {Uint8Array}  u8      The u 8
         * @return     {Array}  Array = require(Uint8Array.
         */

    }, {
        key: 'slice',
        value: function slice(u8) {
            cov_g7yyf6xmi.f[6]++;
            cov_g7yyf6xmi.s[23]++;

            return Array.prototype.slice.call(u8);
        }

        /**
         * Gets the random key string.
         *
         * @return     {String}  The random key string.
         */

    }, {
        key: 'getRandomKeyStr',
        value: function getRandomKeyStr() {
            cov_g7yyf6xmi.f[7]++;

            var Nacl = (cov_g7yyf6xmi.s[24]++, window.nacl);
            var rdm = (cov_g7yyf6xmi.s[25]++, Nacl.randomBytes(18));
            cov_g7yyf6xmi.s[26]++;
            return Nacl.util.encodeBase64(rdm);
        }

        /**
         * Gets the key = require(string.
         *
         * @param      {String}  str     The string
         * @return     {Uint8Array}  The key = require(string.
         */

    }, {
        key: 'getKeyFromStr',
        value: function getKeyFromStr(str) {
            cov_g7yyf6xmi.f[8]++;
            cov_g7yyf6xmi.s[27]++;

            return window.nacl.util.decodeBase64(str);
        }

        /**
         * Encrypts a Uint8Array with the given key.
         *
         * @param      {<type>}      u8      The u 8
         * @param      {<type>}      key     The key
         * @return     {Uint8Array}  The encrypted content.
         */

    }, {
        key: 'encrypt',
        value: function encrypt(u8, key) {
            cov_g7yyf6xmi.f[9]++;

            var array = (cov_g7yyf6xmi.s[28]++, u8);
            var nonce = (cov_g7yyf6xmi.s[29]++, window.nacl.randomBytes(24));
            var packed = (cov_g7yyf6xmi.s[30]++, window.nacl.secretbox(array, nonce, key));
            cov_g7yyf6xmi.s[31]++;
            if (packed) {
                cov_g7yyf6xmi.b[5][0]++;
                cov_g7yyf6xmi.s[32]++;

                return new Uint8Array(Cryptopad.slice(nonce).concat(Cryptopad.slice(packed)));
            } else {
                cov_g7yyf6xmi.b[5][1]++;
            }
            cov_g7yyf6xmi.s[33]++;
            throw new Error();
        }

        /**
         * Decrypts a Uint8Array with the given key.
         *
         * @param      {Uint8Array}  u8      The u 8
         * @param      {String}  key     The key
         * @return     object YOLO
         */

    }, {
        key: 'decrypt',
        value: function decrypt(u8, key, done) {
            cov_g7yyf6xmi.f[10]++;

            var Nacl = (cov_g7yyf6xmi.s[34]++, window.nacl);

            cov_g7yyf6xmi.s[35]++;
            var progress = function progress(offset) {
                cov_g7yyf6xmi.f[11]++;

                var ev = (cov_g7yyf6xmi.s[36]++, new Event('decryptionProgress'));
                cov_g7yyf6xmi.s[37]++;
                ev.percent = offset / u8.length * 100;

                cov_g7yyf6xmi.s[38]++;
                window.document.dispatchEvent(ev);
            };

            var nonce = (cov_g7yyf6xmi.s[39]++, Cryptopad.createNonce());
            var i = (cov_g7yyf6xmi.s[40]++, 0);

            var prefix = (cov_g7yyf6xmi.s[41]++, u8.subarray(0, 2));
            var metadataLength = (cov_g7yyf6xmi.s[42]++, Cryptopad.decodePrefix(prefix));

            var res = (cov_g7yyf6xmi.s[43]++, {
                metadata: undefined
            });

            var metaBox = (cov_g7yyf6xmi.s[44]++, new Uint8Array(u8.subarray(2, 2 + metadataLength)));

            var metaChunk = (cov_g7yyf6xmi.s[45]++, Nacl.secretbox.open(metaBox, nonce, key));
            cov_g7yyf6xmi.s[46]++;
            Cryptopad.increment(nonce);

            cov_g7yyf6xmi.s[47]++;
            try {
                cov_g7yyf6xmi.s[48]++;
                res.metadata = JSON.parse(Nacl.util.encodeUTF8(metaChunk));
            } catch (e) {
                cov_g7yyf6xmi.s[49]++;
                return done('E_METADATA_DECRYPTION');
            }

            cov_g7yyf6xmi.s[50]++;
            if (!res.metadata) {
                cov_g7yyf6xmi.b[6][0]++;
                cov_g7yyf6xmi.s[51]++;
                return done('NO_METADATA');
            } else {
                cov_g7yyf6xmi.b[6][1]++;
            }

            cov_g7yyf6xmi.s[52]++;
            var takeChunk = function takeChunk(cb) {
                cov_g7yyf6xmi.f[12]++;
                cov_g7yyf6xmi.s[53]++;

                setTimeout(function () {
                    cov_g7yyf6xmi.f[13]++;

                    var start = (cov_g7yyf6xmi.s[54]++, i * cypherChunkLength + 2 + metadataLength);
                    var end = (cov_g7yyf6xmi.s[55]++, start + cypherChunkLength);
                    cov_g7yyf6xmi.s[56]++;
                    i++;
                    var box = (cov_g7yyf6xmi.s[57]++, new Uint8Array(u8.subarray(start, end)));

                    // decrypt the chunk
                    var plaintext = (cov_g7yyf6xmi.s[58]++, Nacl.secretbox.open(box, nonce, key));
                    cov_g7yyf6xmi.s[59]++;
                    Cryptopad.increment(nonce);

                    cov_g7yyf6xmi.s[60]++;
                    if (!plaintext) {
                        cov_g7yyf6xmi.b[7][0]++;
                        cov_g7yyf6xmi.s[61]++;
                        return void cb('DECRYPTION_FAILURE');
                    } else {
                        cov_g7yyf6xmi.b[7][1]++;
                    }

                    cov_g7yyf6xmi.s[62]++;
                    progress(Math.min(end, u8.length));

                    cov_g7yyf6xmi.s[63]++;
                    cb(void 0, plaintext);
                });
            };

            var chunks = (cov_g7yyf6xmi.s[64]++, []);

            // decrypt file contents
            cov_g7yyf6xmi.s[65]++;
            var again = function again() {
                cov_g7yyf6xmi.f[14]++;
                cov_g7yyf6xmi.s[66]++;

                takeChunk(function (e, plaintext) {
                    cov_g7yyf6xmi.f[15]++;
                    cov_g7yyf6xmi.s[67]++;

                    if (e) {
                        cov_g7yyf6xmi.b[8][0]++;
                        cov_g7yyf6xmi.s[68]++;
                        return setTimeout(function () {
                            cov_g7yyf6xmi.f[16]++;
                            cov_g7yyf6xmi.s[69]++;
                            done(e);
                        });
                    } else {
                        cov_g7yyf6xmi.b[8][1]++;
                    }

                    cov_g7yyf6xmi.s[70]++;
                    if (plaintext) {
                        cov_g7yyf6xmi.b[9][0]++;
                        cov_g7yyf6xmi.s[71]++;

                        if (i * cypherChunkLength < u8.length) {
                            cov_g7yyf6xmi.b[10][0]++;
                            cov_g7yyf6xmi.s[72]++;
                            // not done
                            chunks.push(plaintext);
                            cov_g7yyf6xmi.s[73]++;
                            return again();
                        } else {
                            cov_g7yyf6xmi.b[10][1]++;
                        }

                        cov_g7yyf6xmi.s[74]++;
                        chunks.push(plaintext);
                        cov_g7yyf6xmi.s[75]++;
                        res.content = Cryptopad.joinChunks(chunks);
                        cov_g7yyf6xmi.s[76]++;
                        return done(void 0, res);
                    } else {
                        cov_g7yyf6xmi.b[9][1]++;
                    }
                    cov_g7yyf6xmi.s[77]++;
                    done('UNEXPECTED_ENDING');
                });
            };
            cov_g7yyf6xmi.s[78]++;
            again();
        }
    }]);

    return Cryptopad;
}();

/**
 * Class for data manager.
 *
 * @class      DataManager (name)
 */


var DataManager = function () {
    function DataManager() {
        _classCallCheck(this, DataManager);
    }

    _createClass(DataManager, null, [{
        key: 'getArrayBuffer',

        /**
         * Gets the array buffer = require(a source url.
         *
         * @param      {<type>}  url     The url
         * @return     {<type>}  The array buffer.
         */
        value: function getArrayBuffer(url) {
            cov_g7yyf6xmi.f[17]++;
            cov_g7yyf6xmi.s[79]++;

            return fetch(url).then(function (response) {
                cov_g7yyf6xmi.f[18]++;
                cov_g7yyf6xmi.s[80]++;

                if (response.ok) {
                    cov_g7yyf6xmi.b[11][0]++;
                    cov_g7yyf6xmi.s[81]++;

                    return response.arrayBuffer();
                } else {
                    cov_g7yyf6xmi.b[11][1]++;
                }
                cov_g7yyf6xmi.s[82]++;
                throw new Errors.FetchFails();
            }).then(function (arrayBuffer) {
                cov_g7yyf6xmi.f[19]++;
                cov_g7yyf6xmi.s[83]++;
                return arrayBuffer;
            });
        }

        /**
         * Creates an url.
         *
         * @param      {ArrayBuffer}  arrayBuffer  The array buffer
         * @return     {String}  The url.
         */

    }, {
        key: 'createUrl',
        value: function createUrl(arrayBuffer) {
            cov_g7yyf6xmi.f[20]++;
            cov_g7yyf6xmi.s[84]++;

            return window.URL.createObjectURL(arrayBuffer);
        }

        /**
         * Gets the blob url.
         *
         * @param      {ArrayBuffer}  data    The data
         * @param      {String}  mtype   The mtype
         * @return     {String}  The blob url.
         */

    }, {
        key: 'getBlobUrl',
        value: function getBlobUrl(data, mtype) {
            cov_g7yyf6xmi.f[21]++;
            cov_g7yyf6xmi.s[85]++;

            return window.URL.createObjectURL(new Blob([data], {
                type: mtype
            }));
        }

        /**
         * Gets the data url.
         *
         * @param      {ArrayBuffer}  data    The data
         * @param      {string}  mtype   The mtype
         * @return     {string}  The data url.
         */

    }, {
        key: 'getDataUrl',
        value: function getDataUrl(data, mtype) {
            cov_g7yyf6xmi.f[22]++;
            cov_g7yyf6xmi.s[86]++;

            return 'data:' + mtype + ';base64,' + window.nacl.util.encodeBase64(data);
        }
    }]);

    return DataManager;
}();

/**
 *
 * @example
 *
 * //mediaObject.setAttribute('type', decrypted.metadata.type);
 * //mediaObject.type = decrypted.metadata.type;
 * ///console.log(mediaObject);
 *
 * original model :
 *      <media-tag src="something" data-type="image/png" data-crypto-key="cryptpad:something">
 *
 * hypothetical model : (mime is hidden inside src data)
 *      <media-tag src="something" data-crypto-key="cryptpad:something">
 *
 * Crypto extracts metadata from the decrypted source and applies it on the media object.
 *
 * @param      {MediaObject}  mediaObject  The media object
 * @param      {Object}  metadata     The metadata
 */


function applyMetadata(mediaObject, metadata) {
    cov_g7yyf6xmi.f[23]++;

    var info = (cov_g7yyf6xmi.s[87]++, metadata.type.split('/'));
    /**
     * Normailse metadata to MediaTag model.
     */
    var mime = (cov_g7yyf6xmi.s[88]++, metadata.type);
    var type = (cov_g7yyf6xmi.s[89]++, info[0]);
    var extension = (cov_g7yyf6xmi.s[90]++, info[1]);

    cov_g7yyf6xmi.s[91]++;
    if (CryptoFilter.isAllowedMediaType(mime)) {
        cov_g7yyf6xmi.b[12][0]++;
        cov_g7yyf6xmi.s[92]++;

        /**
         * @example
         * Inside 'src/plugins/renderers/image.js'
         *
         * ...
         * mediaObject.utilsSetAllDataAttributes(element); // Takes all [data-] from attributes and it's done inside plugin job parts.
         * ...
         */
        mediaObject.setAttribute('data-type', metadata.type);

        /**
         * Theses data are used in identification phasis and have to be set.
         */
        cov_g7yyf6xmi.s[93]++;
        mediaObject.type = type;
        cov_g7yyf6xmi.s[94]++;
        mediaObject.extension = extension;
        cov_g7yyf6xmi.s[95]++;
        mediaObject.mime = mime;
    } else {
        cov_g7yyf6xmi.b[12][1]++;
        cov_g7yyf6xmi.s[96]++;

        console.log('Not allowed metadata, allowed ones are : ', CryptoFilter.getAllowedMediaTypes());
    }

    /**
     * Data to improve file format recognition at downloading.
     */
    cov_g7yyf6xmi.s[97]++;
    mediaObject.name = metadata.name;
    cov_g7yyf6xmi.s[98]++;
    mediaObject.setAttribute('data-attr-type', metadata.type);
};

function algorithm(mediaObject) {
    cov_g7yyf6xmi.f[24]++;

    var src = (cov_g7yyf6xmi.s[99]++, mediaObject.getAttribute('src'));
    var strKey = (cov_g7yyf6xmi.s[100]++, mediaObject.getAttribute('data-crypto-key'));
    var cryptoKey = (cov_g7yyf6xmi.s[101]++, Cryptopad.getKeyFromStr(strKey));
    var xhr = (cov_g7yyf6xmi.s[102]++, new XMLHttpRequest());

    var uid = (cov_g7yyf6xmi.s[103]++, [src, strKey].join(''));

    cov_g7yyf6xmi.s[104]++;
    var followUp = function followUp(decrypted) {
        cov_g7yyf6xmi.f[25]++;
        cov_g7yyf6xmi.s[105]++;

        var next = function next(f) {
            cov_g7yyf6xmi.f[26]++;
            cov_g7yyf6xmi.s[106]++;

            /**
             * Filters must call chain to try if the
             * current mediaObject matches other filters.
             */
            MediaTag.processingEngine.return(mediaObject);
            cov_g7yyf6xmi.s[107]++;
            if (typeof f === 'function') {
                cov_g7yyf6xmi.b[13][0]++;
                cov_g7yyf6xmi.s[108]++;
                f(mediaObject);
            } else {
                cov_g7yyf6xmi.b[13][1]++;
            }
        };

        // Metadata must be set before the blob construction.
        var decryptionEvent = (cov_g7yyf6xmi.s[109]++, {});
        cov_g7yyf6xmi.s[110]++;
        decryptionEvent.metadata = decrypted.metadata;
        cov_g7yyf6xmi.s[111]++;
        applyMetadata(mediaObject, decrypted.metadata);

        var binStr = (cov_g7yyf6xmi.s[112]++, decrypted.content);
        var url = (cov_g7yyf6xmi.s[113]++, DataManager.getBlobUrl(binStr, mediaObject.getMimeType()));

        cov_g7yyf6xmi.s[114]++;
        decryptionEvent.blob = new Blob([binStr], {
            type: mediaObject.getMimeType()
        });

        cov_g7yyf6xmi.s[115]++;
        decryptionEvent.metadata = decrypted.metadata;
        cov_g7yyf6xmi.s[116]++;
        CryptoFilter.addAllowedMediaType('audio/mpeg');

        /**
         * Modifications applied on mediaObject.
         * After these modifications the typeCheck
         * method must return false otherwise the
         * filter may infinite loop.
         */
        cov_g7yyf6xmi.s[117]++;
        mediaObject.setAttribute('src', url);
        cov_g7yyf6xmi.s[118]++;
        mediaObject.removeAttribute('data-crypto-key');

        //console.log(decrypted.metadata);
        cov_g7yyf6xmi.s[119]++;
        if (/audio\/(mp3|ogg|wav|webm|mpeg)/.test(decrypted.metadata.type)) {
            // audio types should do the right thing.

            cov_g7yyf6xmi.b[14][0]++;
        } else {
                cov_g7yyf6xmi.b[14][1]++;
                cov_g7yyf6xmi.s[120]++;
                if (/application\/pdf/.test(decrypted.metadata.type)) {
                    // let it be

                    cov_g7yyf6xmi.b[15][0]++;
                } else {
                        cov_g7yyf6xmi.b[15][1]++;
                        cov_g7yyf6xmi.s[121]++;
                        if (/video\//.test(decrypted.metadata.type)) {
                            // let it be

                            cov_g7yyf6xmi.b[16][0]++;
                        } else {
                                cov_g7yyf6xmi.b[16][1]++;
                                cov_g7yyf6xmi.s[122]++;
                                if (!/image\/(png|jpeg|jpg|gif)/.test(decrypted.metadata.type)) {
                                    cov_g7yyf6xmi.b[17][0]++;
                                    cov_g7yyf6xmi.s[123]++;

                                    // if it's not an image, present a download link
                                    decrypted.metadata.type = 'download';
                                } else {
                                    cov_g7yyf6xmi.b[17][1]++;
                                }
                            }
                    }
            } //console.log(decrypted.metadata);
        cov_g7yyf6xmi.s[124]++;
        applyMetadata(mediaObject, decrypted.metadata);

        cov_g7yyf6xmi.s[125]++;
        decryptionEvent.callback = next;

        cov_g7yyf6xmi.s[126]++;
        if (!window.MediaTag_onDecrypted) {
            cov_g7yyf6xmi.b[18][0]++;
            cov_g7yyf6xmi.s[127]++;

            setTimeout(next);
            cov_g7yyf6xmi.s[128]++;
            return;
        } else {
            cov_g7yyf6xmi.b[18][1]++;
        }

        cov_g7yyf6xmi.s[129]++;
        window.MediaTag_onDecrypted(decryptionEvent);
    };

    var Cache = (cov_g7yyf6xmi.s[130]++, MediaTag.__Cryptpad_Cache = (cov_g7yyf6xmi.b[19][0]++, MediaTag.__Cryptpad_Cache) || (cov_g7yyf6xmi.b[19][1]++, {}));
    cov_g7yyf6xmi.s[131]++;
    if (Cache[uid]) {
        cov_g7yyf6xmi.b[20][0]++;
        cov_g7yyf6xmi.s[132]++;

        return followUp(Cache[uid]);
    } else {
        cov_g7yyf6xmi.b[20][1]++;
    }

    cov_g7yyf6xmi.s[133]++;
    xhr.open('GET', src, true);
    cov_g7yyf6xmi.s[134]++;
    xhr.responseType = 'arraybuffer';

    cov_g7yyf6xmi.s[135]++;
    var fail = function fail(err) {
        cov_g7yyf6xmi.f[27]++;

        var decryptionErrorEvent = (cov_g7yyf6xmi.s[136]++, new Event('decryptionError'));
        cov_g7yyf6xmi.s[137]++;
        decryptionErrorEvent.message = typeof err === 'string' ? (cov_g7yyf6xmi.b[21][0]++, err) : (cov_g7yyf6xmi.b[21][1]++, err.message);
        cov_g7yyf6xmi.s[138]++;
        window.document.dispatchEvent(decryptionErrorEvent);
    };

    cov_g7yyf6xmi.s[139]++;
    xhr.onload = function () {
        cov_g7yyf6xmi.f[28]++;
        cov_g7yyf6xmi.s[140]++;

        if (/^4/.test('' + this.status)) {
            cov_g7yyf6xmi.b[22][0]++;
            cov_g7yyf6xmi.s[141]++;

            return fail("XHR_ERROR", '' + this.status);
        } else {
            cov_g7yyf6xmi.b[22][1]++;
        }

        var arrayBuffer = (cov_g7yyf6xmi.s[142]++, xhr.response);
        cov_g7yyf6xmi.s[143]++;
        if (arrayBuffer) {
            cov_g7yyf6xmi.b[23][0]++;

            var u8 = (cov_g7yyf6xmi.s[144]++, new Uint8Array(arrayBuffer));

            cov_g7yyf6xmi.s[145]++;
            Cryptopad.decrypt(u8, cryptoKey, function (err, decrypted) {
                cov_g7yyf6xmi.f[29]++;
                cov_g7yyf6xmi.s[146]++;

                if (err) {
                    cov_g7yyf6xmi.b[24][0]++;
                    cov_g7yyf6xmi.s[147]++;
                    return fail(err);
                } else {
                    cov_g7yyf6xmi.b[24][1]++;
                }
                cov_g7yyf6xmi.s[148]++;
                Cache[uid] = decrypted;
                cov_g7yyf6xmi.s[149]++;
                followUp(decrypted);
            });
        } else {
            cov_g7yyf6xmi.b[23][1]++;
        }
    };
    cov_g7yyf6xmi.s[150]++;
    xhr.send(null);
}

cov_g7yyf6xmi.s[151]++;
module.exports = algorithm;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1hf7rg78u6 = function () {
	var path = '/var/www/src/plugins/clear-key/filter.js',
	    hash = '73761fef033ad7ae67c342cf9079957089e97bd8',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/clear-key/filter.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 16
				},
				end: {
					line: 1,
					column: 36
				}
			},
			'1': {
				start: {
					line: 2,
					column: 20
				},
				end: {
					line: 2,
					column: 53
				}
			},
			'2': {
				start: {
					line: 9,
					column: 2
				},
				end: {
					line: 9,
					column: 30
				}
			},
			'3': {
				start: {
					line: 18,
					column: 19
				},
				end: {
					line: 18,
					column: 61
				}
			},
			'4': {
				start: {
					line: 19,
					column: 13
				},
				end: {
					line: 19,
					column: 38
				}
			},
			'5': {
				start: {
					line: 20,
					column: 14
				},
				end: {
					line: 20,
					column: 40
				}
			},
			'6': {
				start: {
					line: 22,
					column: 2
				},
				end: {
					line: 22,
					column: 37
				}
			},
			'7': {
				start: {
					line: 23,
					column: 2
				},
				end: {
					line: 23,
					column: 39
				}
			},
			'8': {
				start: {
					line: 24,
					column: 2
				},
				end: {
					line: 24,
					column: 48
				}
			},
			'9': {
				start: {
					line: 25,
					column: 2
				},
				end: {
					line: 25,
					column: 23
				}
			},
			'10': {
				start: {
					line: 29,
					column: 0
				},
				end: {
					line: 29,
					column: 32
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 8,
						column: 1
					},
					end: {
						line: 8,
						column: 2
					}
				},
				loc: {
					start: {
						line: 8,
						column: 15
					},
					end: {
						line: 10,
						column: 2
					}
				},
				line: 8
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 17,
						column: 1
					},
					end: {
						line: 17,
						column: 2
					}
				},
				loc: {
					start: {
						line: 17,
						column: 22
					},
					end: {
						line: 26,
						column: 2
					}
				},
				line: 17
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0
		},
		f: {
			'0': 0,
			'1': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = (cov_1hf7rg78u6.s[0]++, __webpack_require__(11));
var Identifier = (cov_1hf7rg78u6.s[1]++, __webpack_require__(0));

var ClearKeyFilter = function (_ref) {
	_inherits(ClearKeyFilter, _ref);

	/**
  * Constructs the object.
  */
	function ClearKeyFilter() {
		_classCallCheck(this, ClearKeyFilter);

		cov_1hf7rg78u6.f[0]++;
		cov_1hf7rg78u6.s[2]++;
		return _possibleConstructorReturn(this, (ClearKeyFilter.__proto__ || Object.getPrototypeOf(ClearKeyFilter)).call(this, Identifier.CLEAR_KEY));
	}

	/**
  * Job to realise on a mediaObject.
  *
  * @param      {MediaObject}  mediaObject  The media object
  */


	_createClass(ClearKeyFilter, [{
		key: 'process',
		value: function process(mediaObject) {
			cov_1hf7rg78u6.f[1]++;

			var clearKey = (cov_1hf7rg78u6.s[3]++, mediaObject.getAttribute('data-clear-key'));
			var id = (cov_1hf7rg78u6.s[4]++, clearKey.substring(0, 32));
			var key = (cov_1hf7rg78u6.s[5]++, clearKey.substring(33, 65));

			cov_1hf7rg78u6.s[6]++;
			mediaObject.setAttribute('id', id);
			cov_1hf7rg78u6.s[7]++;
			mediaObject.setAttribute('key', key);
			cov_1hf7rg78u6.s[8]++;
			mediaObject.removeAttribute('data-clear-key');
			cov_1hf7rg78u6.s[9]++;
			mediaObject.return();
		}
	}]);

	return ClearKeyFilter;
}((Filter));

cov_1hf7rg78u6.s[10]++;


module.exports = ClearKeyFilter;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2c70mx687p = function () {
	var path = '/var/www/src/plugins/media-object/sanitizer.js',
	    hash = 'c031660e745ef5c04be1bdc1ae3560d3c0d0d870',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/media-object/sanitizer.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 18
				},
				end: {
					line: 1,
					column: 41
				}
			},
			'1': {
				start: {
					line: 2,
					column: 20
				},
				end: {
					line: 2,
					column: 53
				}
			},
			'2': {
				start: {
					line: 9,
					column: 2
				},
				end: {
					line: 9,
					column: 33
				}
			},
			'3': {
				start: {
					line: 18,
					column: 2
				},
				end: {
					line: 18,
					column: 23
				}
			},
			'4': {
				start: {
					line: 22,
					column: 0
				},
				end: {
					line: 22,
					column: 38
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 8,
						column: 1
					},
					end: {
						line: 8,
						column: 2
					}
				},
				loc: {
					start: {
						line: 8,
						column: 15
					},
					end: {
						line: 10,
						column: 2
					}
				},
				line: 8
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 17,
						column: 1
					},
					end: {
						line: 17,
						column: 2
					}
				},
				loc: {
					start: {
						line: 17,
						column: 22
					},
					end: {
						line: 19,
						column: 2
					}
				},
				line: 17
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0
		},
		f: {
			'0': 0,
			'1': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sanitizer = (cov_2c70mx687p.s[0]++, __webpack_require__(15));
var Identifier = (cov_2c70mx687p.s[1]++, __webpack_require__(0));

var MediaObjectSanitizer = function (_ref) {
	_inherits(MediaObjectSanitizer, _ref);

	/**
  * Constructs the object.
  */
	function MediaObjectSanitizer() {
		_classCallCheck(this, MediaObjectSanitizer);

		cov_2c70mx687p.f[0]++;
		cov_2c70mx687p.s[2]++;
		return _possibleConstructorReturn(this, (MediaObjectSanitizer.__proto__ || Object.getPrototypeOf(MediaObjectSanitizer)).call(this, Identifier.MEDIA_OBJECT));
	}

	/**
  * Job to process on mediaObject.
  *
  * @param      {MediaObject}  mediaObject  The media object
  */


	_createClass(MediaObjectSanitizer, [{
		key: 'process',
		value: function process(mediaObject) {
			cov_2c70mx687p.f[1]++;
			cov_2c70mx687p.s[3]++;

			mediaObject.return();
		}
	}]);

	return MediaObjectSanitizer;
}((Sanitizer));

cov_2c70mx687p.s[4]++;


module.exports = MediaObjectSanitizer;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2kf5zvk544 = function () {
  var path = '/var/www/src/presets/media-tag.matchers.js',
      hash = 'ee2d1f9d9b52ea0499fbdb8e5f1e45335fd497ef',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/var/www/src/presets/media-tag.matchers.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 23
        },
        end: {
          line: 4,
          column: 58
        }
      },
      '1': {
        start: {
          line: 5,
          column: 23
        },
        end: {
          line: 5,
          column: 58
        }
      },
      '2': {
        start: {
          line: 6,
          column: 23
        },
        end: {
          line: 6,
          column: 58
        }
      },
      '3': {
        start: {
          line: 7,
          column: 22
        },
        end: {
          line: 7,
          column: 55
        }
      },
      '4': {
        start: {
          line: 8,
          column: 22
        },
        end: {
          line: 8,
          column: 56
        }
      },
      '5': {
        start: {
          line: 9,
          column: 25
        },
        end: {
          line: 9,
          column: 63
        }
      },
      '6': {
        start: {
          line: 14,
          column: 24
        },
        end: {
          line: 14,
          column: 60
        }
      },
      '7': {
        start: {
          line: 15,
          column: 25
        },
        end: {
          line: 15,
          column: 64
        }
      },
      '8': {
        start: {
          line: 20,
          column: 27
        },
        end: {
          line: 20,
          column: 69
        }
      },
      '9': {
        start: {
          line: 25,
          column: 20
        },
        end: {
          line: 25,
          column: 52
        }
      },
      '10': {
        start: {
          line: 33,
          column: 0
        },
        end: {
          line: 33,
          column: 47
        }
      },
      '11': {
        start: {
          line: 34,
          column: 0
        },
        end: {
          line: 34,
          column: 47
        }
      },
      '12': {
        start: {
          line: 35,
          column: 0
        },
        end: {
          line: 35,
          column: 47
        }
      },
      '13': {
        start: {
          line: 36,
          column: 0
        },
        end: {
          line: 36,
          column: 45
        }
      },
      '14': {
        start: {
          line: 37,
          column: 0
        },
        end: {
          line: 37,
          column: 46
        }
      },
      '15': {
        start: {
          line: 38,
          column: 0
        },
        end: {
          line: 38,
          column: 50
        }
      },
      '16': {
        start: {
          line: 40,
          column: 0
        },
        end: {
          line: 40,
          column: 48
        }
      },
      '17': {
        start: {
          line: 41,
          column: 0
        },
        end: {
          line: 41,
          column: 50
        }
      },
      '18': {
        start: {
          line: 43,
          column: 0
        },
        end: {
          line: 43,
          column: 53
        }
      },
      '19': {
        start: {
          line: 45,
          column: 0
        },
        end: {
          line: 45,
          column: 26
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0
    },
    f: {},
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

/**
 * Renderer matchers
 */
var ImageMatcher = (cov_2kf5zvk544.s[0]++, __webpack_require__(48));
var AudioMatcher = (cov_2kf5zvk544.s[1]++, __webpack_require__(49));
var VideoMatcher = (cov_2kf5zvk544.s[2]++, __webpack_require__(50));
var PdfMatcher = (cov_2kf5zvk544.s[3]++, __webpack_require__(51));
var DashMatcher = (cov_2kf5zvk544.s[4]++, __webpack_require__(52));
var DownloadMatcher = (cov_2kf5zvk544.s[5]++, __webpack_require__(53));

/**
 * Filter matchers
 */
var CryptoMatcher = (cov_2kf5zvk544.s[6]++, __webpack_require__(54));
var ClearKeyMatcher = (cov_2kf5zvk544.s[7]++, __webpack_require__(55));

/**
 * Sanitizer matchers
 */
var MediaObjectMatcher = (cov_2kf5zvk544.s[8]++, __webpack_require__(56));

/**
 * Media Tag API
 */
var MediaTag = (cov_2kf5zvk544.s[9]++, __webpack_require__(19));

/**
 * Store every matchers to detect when an job part plugin should be loaded
 * and should be applied on a media object. So it works for static and dynamic
 * media tag mode.
 */

cov_2kf5zvk544.s[10]++;
MediaTag.pluginStore.store(new ImageMatcher());
cov_2kf5zvk544.s[11]++;
MediaTag.pluginStore.store(new AudioMatcher());
cov_2kf5zvk544.s[12]++;
MediaTag.pluginStore.store(new VideoMatcher());
cov_2kf5zvk544.s[13]++;
MediaTag.pluginStore.store(new PdfMatcher());
cov_2kf5zvk544.s[14]++;
MediaTag.pluginStore.store(new DashMatcher());
cov_2kf5zvk544.s[15]++;
MediaTag.pluginStore.store(new DownloadMatcher());

cov_2kf5zvk544.s[16]++;
MediaTag.pluginStore.store(new CryptoMatcher());
cov_2kf5zvk544.s[17]++;
MediaTag.pluginStore.store(new ClearKeyMatcher());

cov_2kf5zvk544.s[18]++;
MediaTag.pluginStore.store(new MediaObjectMatcher());

cov_2kf5zvk544.s[19]++;
module.exports = MediaTag;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_bw2e0xodt = function () {
	var path = '/var/www/src/plugins/image/matcher.js',
	    hash = '42911535f766a3dac55ce396cbefbfa94a959323',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/image/matcher.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 20
				},
				end: {
					line: 1,
					column: 53
				}
			},
			'1': {
				start: {
					line: 2,
					column: 15
				},
				end: {
					line: 2,
					column: 42
				}
			},
			'2': {
				start: {
					line: 3,
					column: 17
				},
				end: {
					line: 3,
					column: 38
				}
			},
			'3': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 10,
					column: 41
				}
			},
			'4': {
				start: {
					line: 19,
					column: 26
				},
				end: {
					line: 19,
					column: 56
				}
			},
			'5': {
				start: {
					line: 20,
					column: 21
				},
				end: {
					line: 20,
					column: 61
				}
			},
			'6': {
				start: {
					line: 22,
					column: 2
				},
				end: {
					line: 25,
					column: 56
				}
			},
			'7': {
				start: {
					line: 29,
					column: 0
				},
				end: {
					line: 29,
					column: 30
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 15
					},
					end: {
						line: 11,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 18,
						column: 1
					},
					end: {
						line: 18,
						column: 2
					}
				},
				loc: {
					start: {
						line: 18,
						column: 22
					},
					end: {
						line: 26,
						column: 2
					}
				},
				line: 18
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 22,
						column: 9
					},
					end: {
						line: 25,
						column: 55
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 22,
						column: 9
					},
					end: {
						line: 22,
						column: 40
					}
				}, {
					start: {
						line: 23,
						column: 4
					},
					end: {
						line: 23,
						column: 37
					}
				}, {
					start: {
						line: 24,
						column: 4
					},
					end: {
						line: 24,
						column: 61
					}
				}, {
					start: {
						line: 25,
						column: 4
					},
					end: {
						line: 25,
						column: 55
					}
				}],
				line: 22
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0
		},
		f: {
			'0': 0,
			'1': 0
		},
		b: {
			'0': [0, 0, 0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Identifier = (cov_bw2e0xodt.s[0]++, __webpack_require__(0));
var Type = (cov_bw2e0xodt.s[1]++, __webpack_require__(1));
var Matcher = (cov_bw2e0xodt.s[2]++, __webpack_require__(2));

var ImageMatcher = function (_ref) {
	_inherits(ImageMatcher, _ref);

	/**
  * Constructs the object.
  */
	function ImageMatcher() {
		_classCallCheck(this, ImageMatcher);

		cov_bw2e0xodt.f[0]++;
		cov_bw2e0xodt.s[3]++;
		return _possibleConstructorReturn(this, (ImageMatcher.__proto__ || Object.getPrototypeOf(ImageMatcher)).call(this, Identifier.IMAGE, Type.RENDERER));
	}

	/**
  * Job to realise to render a image with a mediaObject.
  *
  * @param      {MediaObject}  mediaObject  The media object
  */


	_createClass(ImageMatcher, [{
		key: 'process',
		value: function process(mediaObject) {
			cov_bw2e0xodt.f[1]++;

			var regexExtensions = (cov_bw2e0xodt.s[4]++, /^png|jpg|jpeg|gif|svg[+]xml$/);
			var regexMimes = (cov_bw2e0xodt.s[5]++, /^image[/](png|jpg|jpeg|gif|svg[+]xml)$/);

			cov_bw2e0xodt.s[6]++;
			return (cov_bw2e0xodt.b[0][0]++, mediaObject.hasAttribute('src')) && (cov_bw2e0xodt.b[0][1]++, mediaObject.getType() === 'image') && (cov_bw2e0xodt.b[0][2]++, regexExtensions.exec(mediaObject.getExtension()) !== null) && (cov_bw2e0xodt.b[0][3]++, regexMimes.exec(mediaObject.getMimeType()) !== null);
		}
	}]);

	return ImageMatcher;
}((Matcher));

cov_bw2e0xodt.s[7]++;


module.exports = ImageMatcher;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1ih65iyq8k = function () {
	var path = '/var/www/src/plugins/audio/matcher.js',
	    hash = '7abef3995069500285bb136d78351a7536ef0f8e',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/audio/matcher.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 20
				},
				end: {
					line: 1,
					column: 53
				}
			},
			'1': {
				start: {
					line: 2,
					column: 15
				},
				end: {
					line: 2,
					column: 42
				}
			},
			'2': {
				start: {
					line: 3,
					column: 17
				},
				end: {
					line: 3,
					column: 38
				}
			},
			'3': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 10,
					column: 41
				}
			},
			'4': {
				start: {
					line: 19,
					column: 26
				},
				end: {
					line: 19,
					column: 51
				}
			},
			'5': {
				start: {
					line: 20,
					column: 21
				},
				end: {
					line: 20,
					column: 56
				}
			},
			'6': {
				start: {
					line: 22,
					column: 2
				},
				end: {
					line: 25,
					column: 56
				}
			},
			'7': {
				start: {
					line: 29,
					column: 0
				},
				end: {
					line: 29,
					column: 30
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 15
					},
					end: {
						line: 11,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 18,
						column: 1
					},
					end: {
						line: 18,
						column: 2
					}
				},
				loc: {
					start: {
						line: 18,
						column: 22
					},
					end: {
						line: 26,
						column: 2
					}
				},
				line: 18
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 22,
						column: 9
					},
					end: {
						line: 25,
						column: 55
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 22,
						column: 9
					},
					end: {
						line: 22,
						column: 40
					}
				}, {
					start: {
						line: 23,
						column: 4
					},
					end: {
						line: 23,
						column: 37
					}
				}, {
					start: {
						line: 24,
						column: 4
					},
					end: {
						line: 24,
						column: 61
					}
				}, {
					start: {
						line: 25,
						column: 4
					},
					end: {
						line: 25,
						column: 55
					}
				}],
				line: 22
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0
		},
		f: {
			'0': 0,
			'1': 0
		},
		b: {
			'0': [0, 0, 0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Identifier = (cov_1ih65iyq8k.s[0]++, __webpack_require__(0));
var Type = (cov_1ih65iyq8k.s[1]++, __webpack_require__(1));
var Matcher = (cov_1ih65iyq8k.s[2]++, __webpack_require__(2));

var AudioMatcher = function (_ref) {
	_inherits(AudioMatcher, _ref);

	/**
  * Constructs the object.
  */
	function AudioMatcher() {
		_classCallCheck(this, AudioMatcher);

		cov_1ih65iyq8k.f[0]++;
		cov_1ih65iyq8k.s[3]++;
		return _possibleConstructorReturn(this, (AudioMatcher.__proto__ || Object.getPrototypeOf(AudioMatcher)).call(this, Identifier.AUDIO, Type.RENDERER));
	}

	/**
  * Job to realise to render a image with a mediaObject.
  *
  * @param      {MediaObject}  mediaObject  The media object
  */


	_createClass(AudioMatcher, [{
		key: 'process',
		value: function process(mediaObject) {
			cov_1ih65iyq8k.f[1]++;

			var regexExtensions = (cov_1ih65iyq8k.s[4]++, /^mp3|ogg|webm|wav|mpeg$/);
			var regexMimes = (cov_1ih65iyq8k.s[5]++, /^audio[/](mp3|ogg|webm|wav|mpeg)$/);

			cov_1ih65iyq8k.s[6]++;
			return (cov_1ih65iyq8k.b[0][0]++, mediaObject.hasAttribute('src')) && (cov_1ih65iyq8k.b[0][1]++, mediaObject.getType() === 'audio') && (cov_1ih65iyq8k.b[0][2]++, regexExtensions.exec(mediaObject.getExtension()) !== null) && (cov_1ih65iyq8k.b[0][3]++, regexMimes.exec(mediaObject.getMimeType()) !== null);
		}
	}]);

	return AudioMatcher;
}((Matcher));

cov_1ih65iyq8k.s[7]++;


module.exports = AudioMatcher;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_6ttvtghwk = function () {
	var path = '/var/www/src/plugins/video/matcher.js',
	    hash = '58892e03caece55c3adbfd02e352aa6564997ca7',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/video/matcher.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 20
				},
				end: {
					line: 1,
					column: 53
				}
			},
			'1': {
				start: {
					line: 2,
					column: 15
				},
				end: {
					line: 2,
					column: 42
				}
			},
			'2': {
				start: {
					line: 3,
					column: 17
				},
				end: {
					line: 3,
					column: 38
				}
			},
			'3': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 10,
					column: 41
				}
			},
			'4': {
				start: {
					line: 19,
					column: 26
				},
				end: {
					line: 19,
					column: 42
				}
			},
			'5': {
				start: {
					line: 20,
					column: 21
				},
				end: {
					line: 20,
					column: 47
				}
			},
			'6': {
				start: {
					line: 22,
					column: 2
				},
				end: {
					line: 25,
					column: 56
				}
			},
			'7': {
				start: {
					line: 29,
					column: 0
				},
				end: {
					line: 29,
					column: 30
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 15
					},
					end: {
						line: 11,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 18,
						column: 1
					},
					end: {
						line: 18,
						column: 2
					}
				},
				loc: {
					start: {
						line: 18,
						column: 22
					},
					end: {
						line: 26,
						column: 2
					}
				},
				line: 18
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 22,
						column: 9
					},
					end: {
						line: 25,
						column: 55
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 22,
						column: 9
					},
					end: {
						line: 22,
						column: 40
					}
				}, {
					start: {
						line: 23,
						column: 4
					},
					end: {
						line: 23,
						column: 37
					}
				}, {
					start: {
						line: 24,
						column: 4
					},
					end: {
						line: 24,
						column: 61
					}
				}, {
					start: {
						line: 25,
						column: 4
					},
					end: {
						line: 25,
						column: 55
					}
				}],
				line: 22
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0
		},
		f: {
			'0': 0,
			'1': 0
		},
		b: {
			'0': [0, 0, 0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Identifier = (cov_6ttvtghwk.s[0]++, __webpack_require__(0));
var Type = (cov_6ttvtghwk.s[1]++, __webpack_require__(1));
var Matcher = (cov_6ttvtghwk.s[2]++, __webpack_require__(2));

var VideoMatcher = function (_ref) {
	_inherits(VideoMatcher, _ref);

	/**
  * Constructs the object.
  */
	function VideoMatcher() {
		_classCallCheck(this, VideoMatcher);

		cov_6ttvtghwk.f[0]++;
		cov_6ttvtghwk.s[3]++;
		return _possibleConstructorReturn(this, (VideoMatcher.__proto__ || Object.getPrototypeOf(VideoMatcher)).call(this, Identifier.VIDEO, Type.RENDERER));
	}

	/**
  * Job to realise to render a image with a mediaObject.
  *
  * @param      {MediaObject}  mediaObject  The media object
  */


	_createClass(VideoMatcher, [{
		key: 'process',
		value: function process(mediaObject) {
			cov_6ttvtghwk.f[1]++;

			var regexExtensions = (cov_6ttvtghwk.s[4]++, /^mp4|ogg|webm$/);
			var regexMimes = (cov_6ttvtghwk.s[5]++, /^video[/](mp4|ogg|webm)$/);

			cov_6ttvtghwk.s[6]++;
			return (cov_6ttvtghwk.b[0][0]++, mediaObject.hasAttribute('src')) && (cov_6ttvtghwk.b[0][1]++, mediaObject.getType() === 'video') && (cov_6ttvtghwk.b[0][2]++, regexExtensions.exec(mediaObject.getExtension()) !== null) && (cov_6ttvtghwk.b[0][3]++, regexMimes.exec(mediaObject.getMimeType()) !== null);
		}
	}]);

	return VideoMatcher;
}((Matcher));

cov_6ttvtghwk.s[7]++;


module.exports = VideoMatcher;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2crei5pmwr = function () {
	var path = '/var/www/src/plugins/pdf/matcher.js',
	    hash = '02c135f54ce7844c7cf388604d080523b0d1c94e',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/pdf/matcher.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 20
				},
				end: {
					line: 1,
					column: 53
				}
			},
			'1': {
				start: {
					line: 2,
					column: 15
				},
				end: {
					line: 2,
					column: 42
				}
			},
			'2': {
				start: {
					line: 3,
					column: 17
				},
				end: {
					line: 3,
					column: 38
				}
			},
			'3': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 10,
					column: 39
				}
			},
			'4': {
				start: {
					line: 19,
					column: 26
				},
				end: {
					line: 19,
					column: 33
				}
			},
			'5': {
				start: {
					line: 20,
					column: 21
				},
				end: {
					line: 20,
					column: 42
				}
			},
			'6': {
				start: {
					line: 22,
					column: 2
				},
				end: {
					line: 25,
					column: 56
				}
			},
			'7': {
				start: {
					line: 29,
					column: 0
				},
				end: {
					line: 29,
					column: 28
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 15
					},
					end: {
						line: 11,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 18,
						column: 1
					},
					end: {
						line: 18,
						column: 2
					}
				},
				loc: {
					start: {
						line: 18,
						column: 22
					},
					end: {
						line: 26,
						column: 2
					}
				},
				line: 18
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 22,
						column: 9
					},
					end: {
						line: 25,
						column: 55
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 22,
						column: 9
					},
					end: {
						line: 22,
						column: 40
					}
				}, {
					start: {
						line: 23,
						column: 4
					},
					end: {
						line: 23,
						column: 43
					}
				}, {
					start: {
						line: 24,
						column: 4
					},
					end: {
						line: 24,
						column: 61
					}
				}, {
					start: {
						line: 25,
						column: 4
					},
					end: {
						line: 25,
						column: 55
					}
				}],
				line: 22
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0
		},
		f: {
			'0': 0,
			'1': 0
		},
		b: {
			'0': [0, 0, 0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Identifier = (cov_2crei5pmwr.s[0]++, __webpack_require__(0));
var Type = (cov_2crei5pmwr.s[1]++, __webpack_require__(1));
var Matcher = (cov_2crei5pmwr.s[2]++, __webpack_require__(2));

var PdfMatcher = function (_ref) {
	_inherits(PdfMatcher, _ref);

	/**
  * Constructs the object.
  */
	function PdfMatcher() {
		_classCallCheck(this, PdfMatcher);

		cov_2crei5pmwr.f[0]++;
		cov_2crei5pmwr.s[3]++;
		return _possibleConstructorReturn(this, (PdfMatcher.__proto__ || Object.getPrototypeOf(PdfMatcher)).call(this, Identifier.PDF, Type.RENDERER));
	}

	/**
  * Job to realise to render a image with a mediaObject.
  *
  * @param      {MediaObject}  mediaObject  The media object
  */


	_createClass(PdfMatcher, [{
		key: 'process',
		value: function process(mediaObject) {
			cov_2crei5pmwr.f[1]++;

			var regexExtensions = (cov_2crei5pmwr.s[4]++, /^pdf$/);
			var regexMimes = (cov_2crei5pmwr.s[5]++, /^application[/]pdf$/);

			cov_2crei5pmwr.s[6]++;
			return (cov_2crei5pmwr.b[0][0]++, mediaObject.hasAttribute('src')) && (cov_2crei5pmwr.b[0][1]++, mediaObject.getType() === 'application') && (cov_2crei5pmwr.b[0][2]++, regexExtensions.exec(mediaObject.getExtension()) !== null) && (cov_2crei5pmwr.b[0][3]++, regexMimes.exec(mediaObject.getMimeType()) !== null);
		}
	}]);

	return PdfMatcher;
}((Matcher));

cov_2crei5pmwr.s[7]++;


module.exports = PdfMatcher;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1ibey3wvzj = function () {
	var path = '/var/www/src/plugins/dash/matcher.js',
	    hash = '4dfaa27cfa954064a05fe886e4f66861113cfd0f',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/dash/matcher.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 20
				},
				end: {
					line: 1,
					column: 53
				}
			},
			'1': {
				start: {
					line: 2,
					column: 15
				},
				end: {
					line: 2,
					column: 42
				}
			},
			'2': {
				start: {
					line: 3,
					column: 17
				},
				end: {
					line: 3,
					column: 38
				}
			},
			'3': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 10,
					column: 40
				}
			},
			'4': {
				start: {
					line: 19,
					column: 26
				},
				end: {
					line: 19,
					column: 40
				}
			},
			'5': {
				start: {
					line: 20,
					column: 21
				},
				end: {
					line: 20,
					column: 49
				}
			},
			'6': {
				start: {
					line: 22,
					column: 2
				},
				end: {
					line: 25,
					column: 56
				}
			},
			'7': {
				start: {
					line: 29,
					column: 0
				},
				end: {
					line: 29,
					column: 29
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 15
					},
					end: {
						line: 11,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 18,
						column: 1
					},
					end: {
						line: 18,
						column: 2
					}
				},
				loc: {
					start: {
						line: 18,
						column: 22
					},
					end: {
						line: 26,
						column: 2
					}
				},
				line: 18
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 22,
						column: 9
					},
					end: {
						line: 25,
						column: 55
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 22,
						column: 9
					},
					end: {
						line: 22,
						column: 40
					}
				}, {
					start: {
						line: 23,
						column: 4
					},
					end: {
						line: 23,
						column: 43
					}
				}, {
					start: {
						line: 24,
						column: 4
					},
					end: {
						line: 24,
						column: 61
					}
				}, {
					start: {
						line: 25,
						column: 4
					},
					end: {
						line: 25,
						column: 55
					}
				}],
				line: 22
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0
		},
		f: {
			'0': 0,
			'1': 0
		},
		b: {
			'0': [0, 0, 0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Identifier = (cov_1ibey3wvzj.s[0]++, __webpack_require__(0));
var Type = (cov_1ibey3wvzj.s[1]++, __webpack_require__(1));
var Matcher = (cov_1ibey3wvzj.s[2]++, __webpack_require__(2));

var DashMatcher = function (_ref) {
	_inherits(DashMatcher, _ref);

	/**
  * Constructs the object.
  */
	function DashMatcher() {
		_classCallCheck(this, DashMatcher);

		cov_1ibey3wvzj.f[0]++;
		cov_1ibey3wvzj.s[3]++;
		return _possibleConstructorReturn(this, (DashMatcher.__proto__ || Object.getPrototypeOf(DashMatcher)).call(this, Identifier.DASH, Type.RENDERER));
	}

	/**
  * Job to realise to render a image with a mediaObject.
  *
  * @param      {MediaObject}  mediaObject  The media object
  */


	_createClass(DashMatcher, [{
		key: 'process',
		value: function process(mediaObject) {
			cov_1ibey3wvzj.f[1]++;

			var regexExtensions = (cov_1ibey3wvzj.s[4]++, /^dash[+]xml$/);
			var regexMimes = (cov_1ibey3wvzj.s[5]++, /^application[/]dash[+]xml$/);

			cov_1ibey3wvzj.s[6]++;
			return (cov_1ibey3wvzj.b[0][0]++, mediaObject.hasAttribute('src')) && (cov_1ibey3wvzj.b[0][1]++, mediaObject.getType() === 'application') && (cov_1ibey3wvzj.b[0][2]++, regexExtensions.exec(mediaObject.getExtension()) !== null) && (cov_1ibey3wvzj.b[0][3]++, regexMimes.exec(mediaObject.getMimeType()) !== null);
		}
	}]);

	return DashMatcher;
}((Matcher));

cov_1ibey3wvzj.s[7]++;


module.exports = DashMatcher;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1ou56zvlyt = function () {
	var path = '/var/www/src/plugins/download/matcher.js',
	    hash = 'f11b8303aa91aaebb8d3a6ebfd0beb90e82afa77',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/download/matcher.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 20
				},
				end: {
					line: 1,
					column: 53
				}
			},
			'1': {
				start: {
					line: 2,
					column: 15
				},
				end: {
					line: 2,
					column: 42
				}
			},
			'2': {
				start: {
					line: 3,
					column: 17
				},
				end: {
					line: 3,
					column: 38
				}
			},
			'3': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 10,
					column: 44
				}
			},
			'4': {
				start: {
					line: 19,
					column: 2
				},
				end: {
					line: 20,
					column: 41
				}
			},
			'5': {
				start: {
					line: 24,
					column: 0
				},
				end: {
					line: 24,
					column: 30
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 15
					},
					end: {
						line: 11,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 18,
						column: 1
					},
					end: {
						line: 18,
						column: 2
					}
				},
				loc: {
					start: {
						line: 18,
						column: 22
					},
					end: {
						line: 21,
						column: 2
					}
				},
				line: 18
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 19,
						column: 9
					},
					end: {
						line: 20,
						column: 40
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 19,
						column: 9
					},
					end: {
						line: 19,
						column: 40
					}
				}, {
					start: {
						line: 20,
						column: 4
					},
					end: {
						line: 20,
						column: 40
					}
				}],
				line: 19
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0
		},
		f: {
			'0': 0,
			'1': 0
		},
		b: {
			'0': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Identifier = (cov_1ou56zvlyt.s[0]++, __webpack_require__(0));
var Type = (cov_1ou56zvlyt.s[1]++, __webpack_require__(1));
var Matcher = (cov_1ou56zvlyt.s[2]++, __webpack_require__(2));

var ImageMatcher = function (_ref) {
	_inherits(ImageMatcher, _ref);

	/**
  * Constructs the object.
  */
	function ImageMatcher() {
		_classCallCheck(this, ImageMatcher);

		cov_1ou56zvlyt.f[0]++;
		cov_1ou56zvlyt.s[3]++;
		return _possibleConstructorReturn(this, (ImageMatcher.__proto__ || Object.getPrototypeOf(ImageMatcher)).call(this, Identifier.DOWNLOAD, Type.RENDERER));
	}

	/**
  * Job to realise to render a image with a mediaObject.
  *
  * @param      {MediaObject}  mediaObject  The media object
  */


	_createClass(ImageMatcher, [{
		key: 'process',
		value: function process(mediaObject) {
			cov_1ou56zvlyt.f[1]++;
			cov_1ou56zvlyt.s[4]++;

			return (cov_1ou56zvlyt.b[0][0]++, mediaObject.hasAttribute('src')) && (cov_1ou56zvlyt.b[0][1]++, mediaObject.getType() === 'download');
		}
	}]);

	return ImageMatcher;
}((Matcher));

cov_1ou56zvlyt.s[5]++;


module.exports = ImageMatcher;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2f1k2h6e8w = function () {
	var path = '/var/www/src/plugins/crypto/matcher.js',
	    hash = '3dbf6bfe6084d846e927fb2d754506b0bc041f98',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/crypto/matcher.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 20
				},
				end: {
					line: 1,
					column: 53
				}
			},
			'1': {
				start: {
					line: 2,
					column: 15
				},
				end: {
					line: 2,
					column: 42
				}
			},
			'2': {
				start: {
					line: 3,
					column: 17
				},
				end: {
					line: 3,
					column: 38
				}
			},
			'3': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 10,
					column: 40
				}
			},
			'4': {
				start: {
					line: 19,
					column: 2
				},
				end: {
					line: 19,
					column: 53
				}
			},
			'5': {
				start: {
					line: 23,
					column: 0
				},
				end: {
					line: 23,
					column: 31
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 15
					},
					end: {
						line: 11,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 18,
						column: 1
					},
					end: {
						line: 18,
						column: 2
					}
				},
				loc: {
					start: {
						line: 18,
						column: 22
					},
					end: {
						line: 20,
						column: 2
					}
				},
				line: 18
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0
		},
		f: {
			'0': 0,
			'1': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Identifier = (cov_2f1k2h6e8w.s[0]++, __webpack_require__(0));
var Type = (cov_2f1k2h6e8w.s[1]++, __webpack_require__(1));
var Matcher = (cov_2f1k2h6e8w.s[2]++, __webpack_require__(2));

var CryptoMatcher = function (_ref) {
	_inherits(CryptoMatcher, _ref);

	/**
  * Constructs the object.
  */
	function CryptoMatcher() {
		_classCallCheck(this, CryptoMatcher);

		cov_2f1k2h6e8w.f[0]++;
		cov_2f1k2h6e8w.s[3]++;
		return _possibleConstructorReturn(this, (CryptoMatcher.__proto__ || Object.getPrototypeOf(CryptoMatcher)).call(this, Identifier.CRYPTO, Type.FILTER));
	}

	/**
  * Job to realise to render a image with a mediaObject.
  *
  * @param      {MediaObject}  mediaObject  The media object
  */


	_createClass(CryptoMatcher, [{
		key: 'process',
		value: function process(mediaObject) {
			cov_2f1k2h6e8w.f[1]++;
			cov_2f1k2h6e8w.s[4]++;

			return mediaObject.hasAttribute('data-crypto-key');
		}
	}]);

	return CryptoMatcher;
}((Matcher));

cov_2f1k2h6e8w.s[5]++;


module.exports = CryptoMatcher;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_z1c0stw6c = function () {
	var path = '/var/www/src/plugins/clear-key/matcher.js',
	    hash = '282a6afd7a1c3b22db742f72a30b823d3239dc2a',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/clear-key/matcher.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 20
				},
				end: {
					line: 1,
					column: 53
				}
			},
			'1': {
				start: {
					line: 2,
					column: 15
				},
				end: {
					line: 2,
					column: 42
				}
			},
			'2': {
				start: {
					line: 3,
					column: 17
				},
				end: {
					line: 3,
					column: 38
				}
			},
			'3': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 10,
					column: 43
				}
			},
			'4': {
				start: {
					line: 19,
					column: 2
				},
				end: {
					line: 19,
					column: 52
				}
			},
			'5': {
				start: {
					line: 23,
					column: 0
				},
				end: {
					line: 23,
					column: 33
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 15
					},
					end: {
						line: 11,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 18,
						column: 1
					},
					end: {
						line: 18,
						column: 2
					}
				},
				loc: {
					start: {
						line: 18,
						column: 22
					},
					end: {
						line: 20,
						column: 2
					}
				},
				line: 18
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0
		},
		f: {
			'0': 0,
			'1': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Identifier = (cov_z1c0stw6c.s[0]++, __webpack_require__(0));
var Type = (cov_z1c0stw6c.s[1]++, __webpack_require__(1));
var Matcher = (cov_z1c0stw6c.s[2]++, __webpack_require__(2));

var ClearKeyMatcher = function (_ref) {
	_inherits(ClearKeyMatcher, _ref);

	/**
  * Constructs the object.
  */
	function ClearKeyMatcher() {
		_classCallCheck(this, ClearKeyMatcher);

		cov_z1c0stw6c.f[0]++;
		cov_z1c0stw6c.s[3]++;
		return _possibleConstructorReturn(this, (ClearKeyMatcher.__proto__ || Object.getPrototypeOf(ClearKeyMatcher)).call(this, Identifier.CLEAR_KEY, Type.FILTER));
	}

	/**
  * Job to realise to render a image with a mediaObject.
  *
  * @param      {MediaObject}  mediaObject  The media object
  */


	_createClass(ClearKeyMatcher, [{
		key: 'process',
		value: function process(mediaObject) {
			cov_z1c0stw6c.f[1]++;
			cov_z1c0stw6c.s[4]++;

			return mediaObject.hasAttribute('data-clear-key');
		}
	}]);

	return ClearKeyMatcher;
}((Matcher));

cov_z1c0stw6c.s[5]++;


module.exports = ClearKeyMatcher;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1benyu7sjq = function () {
	var path = '/var/www/src/plugins/media-object/matcher.js',
	    hash = '5141457de57288f752e524c80cfdf287adf970ba',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/media-object/matcher.js',
		statementMap: {
			'0': {
				start: {
					line: 1,
					column: 20
				},
				end: {
					line: 1,
					column: 53
				}
			},
			'1': {
				start: {
					line: 2,
					column: 15
				},
				end: {
					line: 2,
					column: 42
				}
			},
			'2': {
				start: {
					line: 3,
					column: 17
				},
				end: {
					line: 3,
					column: 38
				}
			},
			'3': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 10,
					column: 49
				}
			},
			'4': {
				start: {
					line: 19,
					column: 2
				},
				end: {
					line: 20,
					column: 42
				}
			},
			'5': {
				start: {
					line: 24,
					column: 0
				},
				end: {
					line: 24,
					column: 36
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 15
					},
					end: {
						line: 11,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 18,
						column: 1
					},
					end: {
						line: 18,
						column: 2
					}
				},
				loc: {
					start: {
						line: 18,
						column: 22
					},
					end: {
						line: 21,
						column: 2
					}
				},
				line: 18
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 19,
						column: 9
					},
					end: {
						line: 20,
						column: 41
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 19,
						column: 9
					},
					end: {
						line: 19,
						column: 40
					}
				}, {
					start: {
						line: 20,
						column: 4
					},
					end: {
						line: 20,
						column: 41
					}
				}],
				line: 19
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0
		},
		f: {
			'0': 0,
			'1': 0
		},
		b: {
			'0': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Identifier = (cov_1benyu7sjq.s[0]++, __webpack_require__(0));
var Type = (cov_1benyu7sjq.s[1]++, __webpack_require__(1));
var Matcher = (cov_1benyu7sjq.s[2]++, __webpack_require__(2));

var MediaObjectMatcher = function (_ref) {
	_inherits(MediaObjectMatcher, _ref);

	/**
  * Constructs the object.
  */
	function MediaObjectMatcher() {
		_classCallCheck(this, MediaObjectMatcher);

		cov_1benyu7sjq.f[0]++;
		cov_1benyu7sjq.s[3]++;
		return _possibleConstructorReturn(this, (MediaObjectMatcher.__proto__ || Object.getPrototypeOf(MediaObjectMatcher)).call(this, Identifier.MEDIA_OBJECT, Type.SANITIZER));
	}

	/**
  * Job to realise to render a image with a mediaObject.
  *
  * @param      {MediaObject}  mediaObject  The media object
  */


	_createClass(MediaObjectMatcher, [{
		key: 'process',
		value: function process(mediaObject) {
			cov_1benyu7sjq.f[1]++;
			cov_1benyu7sjq.s[4]++;

			return (cov_1benyu7sjq.b[0][0]++, mediaObject.hasAttribute('src')) && (cov_1benyu7sjq.b[0][1]++, mediaObject.hasAttribute('data-type'));
		}
	}]);

	return MediaObjectMatcher;
}((Matcher));

cov_1benyu7sjq.s[5]++;


module.exports = MediaObjectMatcher;

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_mriitvuge = function () {
	var path = '/var/www/src/presets/media-tag.js',
	    hash = '8f4394a38e8ed03d47872b6adfb63bc5e2d53711',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/presets/media-tag.js',
		statementMap: {
			'0': {
				start: {
					line: 2,
					column: 20
				},
				end: {
					line: 2,
					column: 50
				}
			},
			'1': {
				start: {
					line: 4,
					column: 0
				},
				end: {
					line: 122,
					column: 3
				}
			},
			'2': {
				start: {
					line: 5,
					column: 18
				},
				end: {
					line: 5,
					column: 55
				}
			},
			'3': {
				start: {
					line: 6,
					column: 16
				},
				end: {
					line: 6,
					column: 29
				}
			},
			'4': {
				start: {
					line: 7,
					column: 23
				},
				end: {
					line: 12,
					column: 2
				}
			},
			'5': {
				start: {
					line: 20,
					column: 27
				},
				end: {
					line: 20,
					column: 29
				}
			},
			'6': {
				start: {
					line: 22,
					column: 2
				},
				end: {
					line: 46,
					column: 5
				}
			},
			'7': {
				start: {
					line: 23,
					column: 3
				},
				end: {
					line: 32,
					column: 4
				}
			},
			'8': {
				start: {
					line: 24,
					column: 4
				},
				end: {
					line: 31,
					column: 7
				}
			},
			'9': {
				start: {
					line: 25,
					column: 22
				},
				end: {
					line: 25,
					column: 73
				}
			},
			'10': {
				start: {
					line: 26,
					column: 5
				},
				end: {
					line: 26,
					column: 40
				}
			},
			'11': {
				start: {
					line: 28,
					column: 5
				},
				end: {
					line: 30,
					column: 6
				}
			},
			'12': {
				start: {
					line: 29,
					column: 6
				},
				end: {
					line: 29,
					column: 34
				}
			},
			'13': {
				start: {
					line: 33,
					column: 3
				},
				end: {
					line: 45,
					column: 4
				}
			},
			'14': {
				start: {
					line: 37,
					column: 4
				},
				end: {
					line: 44,
					column: 5
				}
			},
			'15': {
				start: {
					line: 41,
					column: 5
				},
				end: {
					line: 43,
					column: 6
				}
			},
			'16': {
				start: {
					line: 42,
					column: 6
				},
				end: {
					line: 42,
					column: 45
				}
			},
			'17': {
				start: {
					line: 48,
					column: 2
				},
				end: {
					line: 48,
					column: 26
				}
			},
			'18': {
				start: {
					line: 58,
					column: 2
				},
				end: {
					line: 64,
					column: 3
				}
			},
			'19': {
				start: {
					line: 59,
					column: 3
				},
				end: {
					line: 61,
					column: 6
				}
			},
			'20': {
				start: {
					line: 60,
					column: 4
				},
				end: {
					line: 60,
					column: 40
				}
			},
			'21': {
				start: {
					line: 62,
					column: 9
				},
				end: {
					line: 64,
					column: 3
				}
			},
			'22': {
				start: {
					line: 63,
					column: 3
				},
				end: {
					line: 63,
					column: 55
				}
			},
			'23': {
				start: {
					line: 65,
					column: 2
				},
				end: {
					line: 65,
					column: 14
				}
			},
			'24': {
				start: {
					line: 76,
					column: 14
				},
				end: {
					line: 76,
					column: 16
				}
			},
			'25': {
				start: {
					line: 78,
					column: 2
				},
				end: {
					line: 80,
					column: 3
				}
			},
			'26': {
				start: {
					line: 79,
					column: 3
				},
				end: {
					line: 79,
					column: 16
				}
			},
			'27': {
				start: {
					line: 81,
					column: 2
				},
				end: {
					line: 86,
					column: 3
				}
			},
			'28': {
				start: {
					line: 82,
					column: 3
				},
				end: {
					line: 84,
					column: 4
				}
			},
			'29': {
				start: {
					line: 83,
					column: 4
				},
				end: {
					line: 83,
					column: 22
				}
			},
			'30': {
				start: {
					line: 85,
					column: 3
				},
				end: {
					line: 85,
					column: 42
				}
			},
			'31': {
				start: {
					line: 87,
					column: 2
				},
				end: {
					line: 87,
					column: 15
				}
			},
			'32': {
				start: {
					line: 97,
					column: 2
				},
				end: {
					line: 106,
					column: 5
				}
			},
			'33': {
				start: {
					line: 98,
					column: 3
				},
				end: {
					line: 105,
					column: 4
				}
			},
			'34': {
				start: {
					line: 99,
					column: 4
				},
				end: {
					line: 101,
					column: 5
				}
			},
			'35': {
				start: {
					line: 100,
					column: 5
				},
				end: {
					line: 100,
					column: 35
				}
			},
			'36': {
				start: {
					line: 102,
					column: 4
				},
				end: {
					line: 102,
					column: 14
				}
			},
			'37': {
				start: {
					line: 104,
					column: 4
				},
				end: {
					line: 104,
					column: 16
				}
			},
			'38': {
				start: {
					line: 115,
					column: 2
				},
				end: {
					line: 117,
					column: 5
				}
			},
			'39': {
				start: {
					line: 116,
					column: 3
				},
				end: {
					line: 116,
					column: 22
				}
			},
			'40': {
				start: {
					line: 120,
					column: 1
				},
				end: {
					line: 120,
					column: 41
				}
			},
			'41': {
				start: {
					line: 121,
					column: 1
				},
				end: {
					line: 121,
					column: 64
				}
			},
			'42': {
				start: {
					line: 124,
					column: 0
				},
				end: {
					line: 124,
					column: 29
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 4,
						column: 46
					},
					end: {
						line: 4,
						column: 47
					}
				},
				loc: {
					start: {
						line: 4,
						column: 52
					},
					end: {
						line: 122,
						column: 1
					}
				},
				line: 4
			},
			'1': {
				name: 'getMediaTagElements',
				decl: {
					start: {
						line: 19,
						column: 10
					},
					end: {
						line: 19,
						column: 29
					}
				},
				loc: {
					start: {
						line: 19,
						column: 41
					},
					end: {
						line: 49,
						column: 2
					}
				},
				line: 19
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 22,
						column: 20
					},
					end: {
						line: 22,
						column: 21
					}
				},
				loc: {
					start: {
						line: 22,
						column: 32
					},
					end: {
						line: 46,
						column: 3
					}
				},
				line: 22
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 24,
						column: 32
					},
					end: {
						line: 24,
						column: 33
					}
				},
				loc: {
					start: {
						line: 24,
						column: 40
					},
					end: {
						line: 31,
						column: 5
					}
				},
				line: 24
			},
			'4': {
				name: 'hasIdleMediaObjects',
				decl: {
					start: {
						line: 57,
						column: 10
					},
					end: {
						line: 57,
						column: 29
					}
				},
				loc: {
					start: {
						line: 57,
						column: 47
					},
					end: {
						line: 66,
						column: 2
					}
				},
				line: 57
			},
			'5': {
				name: '(anonymous_5)',
				decl: {
					start: {
						line: 59,
						column: 44
					},
					end: {
						line: 59,
						column: 45
					}
				},
				loc: {
					start: {
						line: 59,
						column: 59
					},
					end: {
						line: 61,
						column: 4
					}
				},
				line: 59
			},
			'6': {
				name: 'find',
				decl: {
					start: {
						line: 75,
						column: 10
					},
					end: {
						line: 75,
						column: 14
					}
				},
				loc: {
					start: {
						line: 75,
						column: 29
					},
					end: {
						line: 88,
						column: 2
					}
				},
				line: 75
			},
			'7': {
				name: 'launch',
				decl: {
					start: {
						line: 96,
						column: 10
					},
					end: {
						line: 96,
						column: 16
					}
				},
				loc: {
					start: {
						line: 96,
						column: 35
					},
					end: {
						line: 107,
						column: 2
					}
				},
				line: 96
			},
			'8': {
				name: '(anonymous_8)',
				decl: {
					start: {
						line: 97,
						column: 21
					},
					end: {
						line: 97,
						column: 22
					}
				},
				loc: {
					start: {
						line: 97,
						column: 42
					},
					end: {
						line: 106,
						column: 3
					}
				},
				line: 97
			},
			'9': {
				name: 'handleMutations',
				decl: {
					start: {
						line: 114,
						column: 10
					},
					end: {
						line: 114,
						column: 25
					}
				},
				loc: {
					start: {
						line: 114,
						column: 37
					},
					end: {
						line: 118,
						column: 2
					}
				},
				line: 114
			},
			'10': {
				name: '(anonymous_10)',
				decl: {
					start: {
						line: 115,
						column: 47
					},
					end: {
						line: 115,
						column: 48
					}
				},
				loc: {
					start: {
						line: 115,
						column: 54
					},
					end: {
						line: 117,
						column: 3
					}
				},
				line: 115
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 23,
						column: 3
					},
					end: {
						line: 32,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 23,
						column: 3
					},
					end: {
						line: 32,
						column: 4
					}
				}, {
					start: {
						line: 23,
						column: 3
					},
					end: {
						line: 32,
						column: 4
					}
				}],
				line: 23
			},
			'1': {
				loc: {
					start: {
						line: 28,
						column: 5
					},
					end: {
						line: 30,
						column: 6
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 28,
						column: 5
					},
					end: {
						line: 30,
						column: 6
					}
				}, {
					start: {
						line: 28,
						column: 5
					},
					end: {
						line: 30,
						column: 6
					}
				}],
				line: 28
			},
			'2': {
				loc: {
					start: {
						line: 33,
						column: 3
					},
					end: {
						line: 45,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 33,
						column: 3
					},
					end: {
						line: 45,
						column: 4
					}
				}, {
					start: {
						line: 33,
						column: 3
					},
					end: {
						line: 45,
						column: 4
					}
				}],
				line: 33
			},
			'3': {
				loc: {
					start: {
						line: 37,
						column: 4
					},
					end: {
						line: 44,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 37,
						column: 4
					},
					end: {
						line: 44,
						column: 5
					}
				}, {
					start: {
						line: 37,
						column: 4
					},
					end: {
						line: 44,
						column: 5
					}
				}],
				line: 37
			},
			'4': {
				loc: {
					start: {
						line: 41,
						column: 5
					},
					end: {
						line: 43,
						column: 6
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 41,
						column: 5
					},
					end: {
						line: 43,
						column: 6
					}
				}, {
					start: {
						line: 41,
						column: 5
					},
					end: {
						line: 43,
						column: 6
					}
				}],
				line: 41
			},
			'5': {
				loc: {
					start: {
						line: 58,
						column: 2
					},
					end: {
						line: 64,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 58,
						column: 2
					},
					end: {
						line: 64,
						column: 3
					}
				}, {
					start: {
						line: 58,
						column: 2
					},
					end: {
						line: 64,
						column: 3
					}
				}],
				line: 58
			},
			'6': {
				loc: {
					start: {
						line: 62,
						column: 9
					},
					end: {
						line: 64,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 62,
						column: 9
					},
					end: {
						line: 64,
						column: 3
					}
				}, {
					start: {
						line: 62,
						column: 9
					},
					end: {
						line: 64,
						column: 3
					}
				}],
				line: 62
			},
			'7': {
				loc: {
					start: {
						line: 78,
						column: 2
					},
					end: {
						line: 80,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 78,
						column: 2
					},
					end: {
						line: 80,
						column: 3
					}
				}, {
					start: {
						line: 78,
						column: 2
					},
					end: {
						line: 80,
						column: 3
					}
				}],
				line: 78
			},
			'8': {
				loc: {
					start: {
						line: 82,
						column: 3
					},
					end: {
						line: 84,
						column: 4
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 82,
						column: 3
					},
					end: {
						line: 84,
						column: 4
					}
				}, {
					start: {
						line: 82,
						column: 3
					},
					end: {
						line: 84,
						column: 4
					}
				}],
				line: 82
			},
			'9': {
				loc: {
					start: {
						line: 99,
						column: 4
					},
					end: {
						line: 101,
						column: 5
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 99,
						column: 4
					},
					end: {
						line: 101,
						column: 5
					}
				}, {
					start: {
						line: 99,
						column: 4
					},
					end: {
						line: 101,
						column: 5
					}
				}],
				line: 99
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0,
			'33': 0,
			'34': 0,
			'35': 0,
			'36': 0,
			'37': 0,
			'38': 0,
			'39': 0,
			'40': 0,
			'41': 0,
			'42': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0],
			'4': [0, 0],
			'5': [0, 0],
			'6': [0, 0],
			'7': [0, 0],
			'8': [0, 0],
			'9': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* global document, MutationObserver */
var mediaTagAPI = (cov_mriitvuge.s[0]++, __webpack_require__(63));

cov_mriitvuge.s[1]++;
document.addEventListener('DOMContentLoaded', function () {
	cov_mriitvuge.f[0]++;

	var observer = (cov_mriitvuge.s[2]++, new MutationObserver(handleMutations));
	var target = (cov_mriitvuge.s[3]++, document.body);
	var configuration = (cov_mriitvuge.s[4]++, {
		characterData: true,
		childList: true,
		attributes: true,
		subtree: true
	});
	/**
  * Gets the media tag elements.
  *
  * @param      {<type>}  mutations  The mutations
  * @return     {Array}   The media tag elements.
  */
	function getMediaTagElements(mutations) {
		cov_mriitvuge.f[1]++;

		var mediaTagElements = (cov_mriitvuge.s[5]++, []);

		cov_mriitvuge.s[6]++;
		mutations.forEach(function (mutation) {
			cov_mriitvuge.f[2]++;
			cov_mriitvuge.s[7]++;

			if (mutation.addedNodes) {
				cov_mriitvuge.b[0][0]++;
				cov_mriitvuge.s[8]++;

				mutation.addedNodes.forEach(function (node) {
					cov_mriitvuge.f[3]++;

					var elements = (cov_mriitvuge.s[9]++, find(node, 'MEDIA-TAG').filter(hasIdleMediaObjects));
					cov_mriitvuge.s[10]++;
					mediaTagElements.push.apply(mediaTagElements, _toConsumableArray(elements));

					cov_mriitvuge.s[11]++;
					if (node.nodeName === 'MEDIA-TAG') {
						cov_mriitvuge.b[1][0]++;
						cov_mriitvuge.s[12]++;

						mediaTagElements.push(node);
					} else {
						cov_mriitvuge.b[1][1]++;
					}
				});
			} else {
				cov_mriitvuge.b[0][1]++;
			}
			cov_mriitvuge.s[13]++;
			if (mutation.target.nodeName === 'MEDIA-TAG') {
				cov_mriitvuge.b[2][0]++;
				cov_mriitvuge.s[14]++;

				/**
     * Avoid mutation due to MediaTag end process ...
     */
				if (mutation.type !== 'childList') {
					cov_mriitvuge.b[3][0]++;
					cov_mriitvuge.s[15]++;

					/**
      * We don't store two times a same mutated element.
      */
					if (!mediaTagElements.includes(mutation.target)) {
						cov_mriitvuge.b[4][0]++;
						cov_mriitvuge.s[16]++;

						mediaTagElements.push(mutation.target);
					} else {
						cov_mriitvuge.b[4][1]++;
					}
				} else {
					cov_mriitvuge.b[3][1]++;
				}
			} else {
				cov_mriitvuge.b[2][1]++;
			}
		});

		cov_mriitvuge.s[17]++;
		return mediaTagElements;
	}

	/**
  * Determines if it has idle media objects.
  *
  * @param      {<type>}   mediaTagElement  The media tag element
  * @return     {boolean}  True if has idle media objects, False otherwise.
  */
	function hasIdleMediaObjects(mediaTagElement) {
		cov_mriitvuge.f[4]++;
		cov_mriitvuge.s[18]++;

		if (mediaTagElement.mediaObjects) {
			cov_mriitvuge.b[5][0]++;
			cov_mriitvuge.s[19]++;

			return mediaTagElement.mediaObjects.some(function (mediaObject) {
				cov_mriitvuge.f[5]++;
				cov_mriitvuge.s[20]++;

				return mediaObject.state === 'idle';
			});
		} else {
				cov_mriitvuge.b[5][1]++;
				cov_mriitvuge.s[21]++;
				if (mediaTagElement.mediaObject) {
					cov_mriitvuge.b[6][0]++;
					cov_mriitvuge.s[22]++;

					return mediaTagElement.mediaObject.state === 'idle';
				} else {
					cov_mriitvuge.b[6][1]++;
				}
			}cov_mriitvuge.s[23]++;
		return true;
	}

	/**
  * Searches for the first match.
  *
  * @param      {<type>}  element  The element
  * @param      {<type>}  tag      The tag
  * @return     {Array}   { description_of_the_return_value }
  */
	function find(element, tag) {
		cov_mriitvuge.f[6]++;

		var nodes = (cov_mriitvuge.s[24]++, []);

		cov_mriitvuge.s[25]++;
		if (!element.children) {
			cov_mriitvuge.b[7][0]++;
			cov_mriitvuge.s[26]++;

			return nodes;
		} else {
			cov_mriitvuge.b[7][1]++;
		}
		cov_mriitvuge.s[27]++;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = element.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var child = _step.value;
				cov_mriitvuge.s[28]++;

				if (child.nodeName === tag) {
					cov_mriitvuge.b[8][0]++;
					cov_mriitvuge.s[29]++;

					nodes.push(child);
				} else {
					cov_mriitvuge.b[8][1]++;
				}
				cov_mriitvuge.s[30]++;
				nodes = nodes.concat(find(child, tag));
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		cov_mriitvuge.s[31]++;
		return nodes;
	}

	/**
  * { function_description }
  *
  * @param      {<type>}   mediaTagElements  The media tag elements
  * @return     {Promise}  { description_of_the_return_value }
  */
	function launch(mediaTagElements) {
		cov_mriitvuge.f[7]++;
		cov_mriitvuge.s[32]++;

		return new Promise(function (resolve, reject) {
			cov_mriitvuge.f[8]++;
			cov_mriitvuge.s[33]++;

			try {
				cov_mriitvuge.s[34]++;

				if (mediaTagElements.length > 0) {
					cov_mriitvuge.b[9][0]++;
					cov_mriitvuge.s[35]++;

					mediaTagAPI(mediaTagElements);
				} else {
					cov_mriitvuge.b[9][1]++;
				}
				cov_mriitvuge.s[36]++;
				resolve();
			} catch (err) {
				cov_mriitvuge.s[37]++;

				reject(err);
			}
		});
	}

	/**
  * { function_description }
  *
  * @param      {<type>}  mutations  The mutations
  */
	function handleMutations(mutations) {
		cov_mriitvuge.f[9]++;
		cov_mriitvuge.s[38]++;

		launch(getMediaTagElements(mutations)).catch(function (err) {
			cov_mriitvuge.f[10]++;
			cov_mriitvuge.s[39]++;

			console.error(err);
		});
	}

	cov_mriitvuge.s[40]++;
	observer.observe(target, configuration);
	cov_mriitvuge.s[41]++;
	launch(Array.from(document.getElementsByTagName('media-tag')));
});

cov_mriitvuge.s[42]++;
module.exports = mediaTagAPI;

/***/ }),
/* 62 */,
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_uak4y9bri = function () {
  var path = '/var/www/src/presets/media-tag.plugins.js',
      hash = '19d0a0da6de694af7f82062c046c52cb24a44541',
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/var/www/src/presets/media-tag.plugins.js',
    statementMap: {
      '0': {
        start: {
          line: 15,
          column: 33
        },
        end: {
          line: 15,
          column: 88
        }
      },
      '1': {
        start: {
          line: 16,
          column: 28
        },
        end: {
          line: 16,
          column: 76
        }
      },
      '2': {
        start: {
          line: 21,
          column: 22
        },
        end: {
          line: 21,
          column: 58
        }
      },
      '3': {
        start: {
          line: 22,
          column: 22
        },
        end: {
          line: 22,
          column: 58
        }
      },
      '4': {
        start: {
          line: 23,
          column: 22
        },
        end: {
          line: 23,
          column: 58
        }
      },
      '5': {
        start: {
          line: 24,
          column: 20
        },
        end: {
          line: 24,
          column: 54
        }
      },
      '6': {
        start: {
          line: 25,
          column: 21
        },
        end: {
          line: 25,
          column: 56
        }
      },
      '7': {
        start: {
          line: 26,
          column: 24
        },
        end: {
          line: 26,
          column: 63
        }
      },
      '8': {
        start: {
          line: 31,
          column: 22
        },
        end: {
          line: 31,
          column: 57
        }
      },
      '9': {
        start: {
          line: 32,
          column: 23
        },
        end: {
          line: 32,
          column: 61
        }
      },
      '10': {
        start: {
          line: 37,
          column: 29
        },
        end: {
          line: 37,
          column: 73
        }
      },
      '11': {
        start: {
          line: 44,
          column: 17
        },
        end: {
          line: 44,
          column: 48
        }
      },
      '12': {
        start: {
          line: 49,
          column: 0
        },
        end: {
          line: 49,
          column: 31
        }
      },
      '13': {
        start: {
          line: 50,
          column: 0
        },
        end: {
          line: 50,
          column: 53
        }
      },
      '14': {
        start: {
          line: 55,
          column: 0
        },
        end: {
          line: 55,
          column: 78
        }
      },
      '15': {
        start: {
          line: 56,
          column: 0
        },
        end: {
          line: 56,
          column: 64
        }
      },
      '16': {
        start: {
          line: 61,
          column: 0
        },
        end: {
          line: 62,
          column: 82
        }
      },
      '17': {
        start: {
          line: 69,
          column: 0
        },
        end: {
          line: 69,
          column: 37
        }
      },
      '18': {
        start: {
          line: 75,
          column: 0
        },
        end: {
          line: 90,
          column: 3
        }
      },
      '19': {
        start: {
          line: 113,
          column: 0
        },
        end: {
          line: 113,
          column: 46
        }
      },
      '20': {
        start: {
          line: 114,
          column: 0
        },
        end: {
          line: 114,
          column: 46
        }
      },
      '21': {
        start: {
          line: 115,
          column: 0
        },
        end: {
          line: 115,
          column: 46
        }
      },
      '22': {
        start: {
          line: 116,
          column: 0
        },
        end: {
          line: 116,
          column: 44
        }
      },
      '23': {
        start: {
          line: 117,
          column: 0
        },
        end: {
          line: 117,
          column: 45
        }
      },
      '24': {
        start: {
          line: 118,
          column: 0
        },
        end: {
          line: 118,
          column: 49
        }
      },
      '25': {
        start: {
          line: 120,
          column: 0
        },
        end: {
          line: 120,
          column: 47
        }
      },
      '26': {
        start: {
          line: 121,
          column: 0
        },
        end: {
          line: 121,
          column: 49
        }
      },
      '27': {
        start: {
          line: 123,
          column: 0
        },
        end: {
          line: 123,
          column: 55
        }
      },
      '28': {
        start: {
          line: 125,
          column: 0
        },
        end: {
          line: 125,
          column: 26
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0,
      '22': 0,
      '23': 0,
      '24': 0,
      '25': 0,
      '26': 0,
      '27': 0,
      '28': 0
    },
    f: {},
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

/**
 * Enumerations
 */
// const Permission = require('../enums/permission');
// const Identifier = require('../enums/identifier');

/**
 * Configuration
 */
// const Configuration = require('../core/configuration');

/**
 * Algorithms
 */
var Salsa20Poly1305Algorithm = (cov_uak4y9bri.s[0]++, __webpack_require__(43));
var CryptpadAlgorithm = (cov_uak4y9bri.s[1]++, __webpack_require__(44));

/**
 * Renderers
 */
var ImagePlugin = (cov_uak4y9bri.s[2]++, __webpack_require__(64));
var AudioPlugin = (cov_uak4y9bri.s[3]++, __webpack_require__(65));
var VideoPlugin = (cov_uak4y9bri.s[4]++, __webpack_require__(66));
var PdfPlugin = (cov_uak4y9bri.s[5]++, __webpack_require__(67));
var DashPlugin = (cov_uak4y9bri.s[6]++, __webpack_require__(68));
var DownloadPlugin = (cov_uak4y9bri.s[7]++, __webpack_require__(21));

/**
 * Filters
 */
var CryptoFilter = (cov_uak4y9bri.s[8]++, __webpack_require__(12));
var ClearKeyFilter = (cov_uak4y9bri.s[9]++, __webpack_require__(45));

/**
 * Sanitizers
 */
var MediaObjectSanitizer = (cov_uak4y9bri.s[10]++, __webpack_require__(46));

/**
 * Media Tag API with matchers.
 *
 * @type       {Function}
 */
var MediaTag = (cov_uak4y9bri.s[11]++, __webpack_require__(47));

/**
 * Configuration of the pdfjs viewer as main render for pdf plugin.
 */
cov_uak4y9bri.s[12]++;
MediaTag.PdfPlugin = PdfPlugin;
cov_uak4y9bri.s[13]++;
MediaTag.PdfPlugin.viewer = '/pdfjs/web/viewer.html';

/**
 * Store every algorithms inside CryptoFilter.
 */
cov_uak4y9bri.s[14]++;
CryptoFilter.functionStore.store('salsa20poly1305', Salsa20Poly1305Algorithm);
cov_uak4y9bri.s[15]++;
CryptoFilter.functionStore.store('cryptpad', CryptpadAlgorithm);

/**
 * Set default plugin for MediaTag.processingEngine
 */
cov_uak4y9bri.s[16]++;
MediaTag.processingEngine.setDefaultPlugin(new DownloadPlugin('<p> Media-Tag can\'t process your content </p>', 'Download'));

/**
 * WAY 1 : CRYPTO CAN DEFINE HIS OWN ALLOWED MEDIA TYPES (TYPE/MIME/...)
 * IT FORBID PLUGIN USAGE BY INFORMATION LACK (NO METADATA ARE SET IF MEDIA TYPE IS NOT ALLOWED)
 */

cov_uak4y9bri.s[17]++;
MediaTag.CryptoFilter = CryptoFilter;

/**
 * Allowed mime types that have to be set for a rendering after a decryption.
 */

cov_uak4y9bri.s[18]++;
MediaTag.CryptoFilter.setAllowedMediaTypes(['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'audio/mp3', 'audio/ogg', 'audio/wav', 'audio/webm', 'video/mp4', 'video/ogg', 'video/webm', 'application/pdf', 'application/dash+xml', 'download']);

/**
 * You can define a configuration to dissable some plugins.
 * If a renderer is forbidden, the processing engine must fall in it default case.
 *
 * @type       {Configuration}
 */

// const configuration = new Configuration({});

// configuration.setPermission(Identifier.IMAGE, Permission.FORBIDDEN);
// configuration.setPermission(Identifier.AUDIO, Permission.FORBIDDEN);
// configuration.setPermission(Identifier.VIDEO, Permission.FORBIDDEN);
// configuration.setPermission(Identifier.PDF, Permission.FORBIDDEN);
// configuration.setPermission(Identifier.DASH, Permission.FORBIDDEN);
// configuration.setPermission(Identifier.DOWNLOAD, Permission.FORBIDDEN);
// MediaTag.processingEngine.configure(configuration);

/**
 * Register every job/active part plugins.
 */

cov_uak4y9bri.s[19]++;
MediaTag.pluginStore.store(new ImagePlugin());
cov_uak4y9bri.s[20]++;
MediaTag.pluginStore.store(new AudioPlugin());
cov_uak4y9bri.s[21]++;
MediaTag.pluginStore.store(new VideoPlugin());
cov_uak4y9bri.s[22]++;
MediaTag.pluginStore.store(new PdfPlugin());
cov_uak4y9bri.s[23]++;
MediaTag.pluginStore.store(new DashPlugin());
cov_uak4y9bri.s[24]++;
MediaTag.pluginStore.store(new DownloadPlugin());

cov_uak4y9bri.s[25]++;
MediaTag.pluginStore.store(new CryptoFilter());
cov_uak4y9bri.s[26]++;
MediaTag.pluginStore.store(new ClearKeyFilter());

cov_uak4y9bri.s[27]++;
MediaTag.pluginStore.store(new MediaObjectSanitizer());

cov_uak4y9bri.s[28]++;
module.exports = MediaTag;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_4lv8yn9qt = function () {
	var path = '/var/www/src/plugins/image/renderer.js',
	    hash = '03328042892805a7ec51d38633723fed2ef9f7b5',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/image/renderer.js',
		statementMap: {
			'0': {
				start: {
					line: 2,
					column: 17
				},
				end: {
					line: 2,
					column: 39
				}
			},
			'1': {
				start: {
					line: 3,
					column: 20
				},
				end: {
					line: 3,
					column: 53
				}
			},
			'2': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 10,
					column: 26
				}
			},
			'3': {
				start: {
					line: 19,
					column: 18
				},
				end: {
					line: 19,
					column: 47
				}
			},
			'4': {
				start: {
					line: 21,
					column: 2
				},
				end: {
					line: 21,
					column: 63
				}
			},
			'5': {
				start: {
					line: 22,
					column: 2
				},
				end: {
					line: 22,
					column: 49
				}
			},
			'6': {
				start: {
					line: 23,
					column: 2
				},
				end: {
					line: 23,
					column: 41
				}
			},
			'7': {
				start: {
					line: 24,
					column: 2
				},
				end: {
					line: 24,
					column: 23
				}
			},
			'8': {
				start: {
					line: 28,
					column: 0
				},
				end: {
					line: 28,
					column: 31
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 15
					},
					end: {
						line: 11,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 18,
						column: 1
					},
					end: {
						line: 18,
						column: 2
					}
				},
				loc: {
					start: {
						line: 18,
						column: 22
					},
					end: {
						line: 25,
						column: 2
					}
				},
				line: 18
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0
		},
		f: {
			'0': 0,
			'1': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global document  */
var Renderer = (cov_4lv8yn9qt.s[0]++, __webpack_require__(4));
var Identifier = (cov_4lv8yn9qt.s[1]++, __webpack_require__(0));

var ImageRenderer = function (_ref) {
	_inherits(ImageRenderer, _ref);

	/**
  * Constructs the object.
  */
	function ImageRenderer() {
		_classCallCheck(this, ImageRenderer);

		cov_4lv8yn9qt.f[0]++;
		cov_4lv8yn9qt.s[2]++;
		return _possibleConstructorReturn(this, (ImageRenderer.__proto__ || Object.getPrototypeOf(ImageRenderer)).call(this, Identifier.IMAGE));
	}

	/**
  * Job to realise to render a image with a mediaObject.
  *
  * @param      {MediaObject}  mediaObject  The media object
  */


	_createClass(ImageRenderer, [{
		key: 'process',
		value: function process(mediaObject) {
			cov_4lv8yn9qt.f[1]++;

			var element = (cov_4lv8yn9qt.s[3]++, document.createElement('img'));

			cov_4lv8yn9qt.s[4]++;
			element.setAttribute('src', mediaObject.getAttribute('src'));
			cov_4lv8yn9qt.s[5]++;
			mediaObject.utilsSetAllDataAttributes(element);
			cov_4lv8yn9qt.s[6]++;
			mediaObject.replaceContents([element]);
			cov_4lv8yn9qt.s[7]++;
			mediaObject.return();
		}
	}]);

	return ImageRenderer;
}((Renderer));

cov_4lv8yn9qt.s[8]++;


module.exports = ImageRenderer;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1o955klzcy = function () {
	var path = '/var/www/src/plugins/audio/renderer.js',
	    hash = '4db1fcae3015966eab8cef610560a92720727b10',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/audio/renderer.js',
		statementMap: {
			'0': {
				start: {
					line: 2,
					column: 17
				},
				end: {
					line: 2,
					column: 39
				}
			},
			'1': {
				start: {
					line: 3,
					column: 20
				},
				end: {
					line: 3,
					column: 53
				}
			},
			'2': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 10,
					column: 26
				}
			},
			'3': {
				start: {
					line: 19,
					column: 18
				},
				end: {
					line: 19,
					column: 49
				}
			},
			'4': {
				start: {
					line: 21,
					column: 2
				},
				end: {
					line: 21,
					column: 63
				}
			},
			'5': {
				start: {
					line: 22,
					column: 2
				},
				end: {
					line: 22,
					column: 41
				}
			},
			'6': {
				start: {
					line: 23,
					column: 2
				},
				end: {
					line: 23,
					column: 49
				}
			},
			'7': {
				start: {
					line: 24,
					column: 2
				},
				end: {
					line: 24,
					column: 41
				}
			},
			'8': {
				start: {
					line: 26,
					column: 2
				},
				end: {
					line: 26,
					column: 23
				}
			},
			'9': {
				start: {
					line: 30,
					column: 0
				},
				end: {
					line: 30,
					column: 31
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 15
					},
					end: {
						line: 11,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 18,
						column: 1
					},
					end: {
						line: 18,
						column: 2
					}
				},
				loc: {
					start: {
						line: 18,
						column: 22
					},
					end: {
						line: 27,
						column: 2
					}
				},
				line: 18
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0
		},
		f: {
			'0': 0,
			'1': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global document */
var Renderer = (cov_1o955klzcy.s[0]++, __webpack_require__(4));
var Identifier = (cov_1o955klzcy.s[1]++, __webpack_require__(0));

var AudioRenderer = function (_ref) {
	_inherits(AudioRenderer, _ref);

	/**
  * Constructs the object.
  */
	function AudioRenderer() {
		_classCallCheck(this, AudioRenderer);

		cov_1o955klzcy.f[0]++;
		cov_1o955klzcy.s[2]++;
		return _possibleConstructorReturn(this, (AudioRenderer.__proto__ || Object.getPrototypeOf(AudioRenderer)).call(this, Identifier.AUDIO));
	}

	/**
  * Job to realise to render an audio with a mediaObject.
  *
  * @param      {MediaObject}  mediaObject  The media object
  */


	_createClass(AudioRenderer, [{
		key: 'process',
		value: function process(mediaObject) {
			cov_1o955klzcy.f[1]++;

			var element = (cov_1o955klzcy.s[3]++, document.createElement('audio'));

			cov_1o955klzcy.s[4]++;
			element.setAttribute('src', mediaObject.getAttribute('src'));
			cov_1o955klzcy.s[5]++;
			element.setAttribute('controls', true);
			cov_1o955klzcy.s[6]++;
			mediaObject.utilsSetAllDataAttributes(element);
			cov_1o955klzcy.s[7]++;
			mediaObject.replaceContents([element]);

			cov_1o955klzcy.s[8]++;
			mediaObject.return();
		}
	}]);

	return AudioRenderer;
}((Renderer));

cov_1o955klzcy.s[9]++;


module.exports = AudioRenderer;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_280wncwfyr = function () {
	var path = '/var/www/src/plugins/video/renderer.js',
	    hash = 'd4fce5ded80b8ca35ccbac3388d5a25df6407f66',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/video/renderer.js',
		statementMap: {
			'0': {
				start: {
					line: 2,
					column: 17
				},
				end: {
					line: 2,
					column: 39
				}
			},
			'1': {
				start: {
					line: 3,
					column: 20
				},
				end: {
					line: 3,
					column: 53
				}
			},
			'2': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 10,
					column: 26
				}
			},
			'3': {
				start: {
					line: 19,
					column: 18
				},
				end: {
					line: 19,
					column: 49
				}
			},
			'4': {
				start: {
					line: 21,
					column: 2
				},
				end: {
					line: 21,
					column: 63
				}
			},
			'5': {
				start: {
					line: 22,
					column: 2
				},
				end: {
					line: 22,
					column: 41
				}
			},
			'6': {
				start: {
					line: 23,
					column: 2
				},
				end: {
					line: 23,
					column: 49
				}
			},
			'7': {
				start: {
					line: 24,
					column: 2
				},
				end: {
					line: 24,
					column: 41
				}
			},
			'8': {
				start: {
					line: 25,
					column: 2
				},
				end: {
					line: 25,
					column: 23
				}
			},
			'9': {
				start: {
					line: 29,
					column: 0
				},
				end: {
					line: 29,
					column: 31
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 15
					},
					end: {
						line: 11,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 18,
						column: 1
					},
					end: {
						line: 18,
						column: 2
					}
				},
				loc: {
					start: {
						line: 18,
						column: 22
					},
					end: {
						line: 26,
						column: 2
					}
				},
				line: 18
			}
		},
		branchMap: {},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0
		},
		f: {
			'0': 0,
			'1': 0
		},
		b: {},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global document */
var Renderer = (cov_280wncwfyr.s[0]++, __webpack_require__(4));
var Identifier = (cov_280wncwfyr.s[1]++, __webpack_require__(0));

var VideoRenderer = function (_ref) {
	_inherits(VideoRenderer, _ref);

	/**
  * Constructs the object.
  */
	function VideoRenderer() {
		_classCallCheck(this, VideoRenderer);

		cov_280wncwfyr.f[0]++;
		cov_280wncwfyr.s[2]++;
		return _possibleConstructorReturn(this, (VideoRenderer.__proto__ || Object.getPrototypeOf(VideoRenderer)).call(this, Identifier.VIDEO));
	}

	/**
  * Job to realise to render a video with a mediaObject.
  *
  * @param      {MediaObject}  mediaObject  The media object
  */


	_createClass(VideoRenderer, [{
		key: 'process',
		value: function process(mediaObject) {
			cov_280wncwfyr.f[1]++;

			var element = (cov_280wncwfyr.s[3]++, document.createElement('video'));

			cov_280wncwfyr.s[4]++;
			element.setAttribute('src', mediaObject.getAttribute('src'));
			cov_280wncwfyr.s[5]++;
			element.setAttribute('controls', true);
			cov_280wncwfyr.s[6]++;
			mediaObject.utilsSetAllDataAttributes(element);
			cov_280wncwfyr.s[7]++;
			mediaObject.replaceContents([element]);
			cov_280wncwfyr.s[8]++;
			mediaObject.return();
		}
	}]);

	return VideoRenderer;
}((Renderer));

cov_280wncwfyr.s[9]++;


module.exports = VideoRenderer;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_1279de7pvk = function () {
	var path = '/var/www/src/plugins/pdf/renderer.js',
	    hash = '837f038dca7dd179396684e946d8ce71008b34a1',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/pdf/renderer.js',
		statementMap: {
			'0': {
				start: {
					line: 2,
					column: 17
				},
				end: {
					line: 2,
					column: 39
				}
			},
			'1': {
				start: {
					line: 3,
					column: 20
				},
				end: {
					line: 3,
					column: 53
				}
			},
			'2': {
				start: {
					line: 5,
					column: 13
				},
				end: {
					line: 8,
					column: 1
				}
			},
			'3': {
				start: {
					line: 15,
					column: 2
				},
				end: {
					line: 15,
					column: 24
				}
			},
			'4': {
				start: {
					line: 16,
					column: 2
				},
				end: {
					line: 16,
					column: 35
				}
			},
			'5': {
				start: {
					line: 17,
					column: 2
				},
				end: {
					line: 17,
					column: 31
				}
			},
			'6': {
				start: {
					line: 26,
					column: 14
				},
				end: {
					line: 26,
					column: 45
				}
			},
			'7': {
				start: {
					line: 27,
					column: 17
				},
				end: {
					line: 27,
					column: 49
				}
			},
			'8': {
				start: {
					line: 32,
					column: 2
				},
				end: {
					line: 34,
					column: 3
				}
			},
			'9': {
				start: {
					line: 33,
					column: 3
				},
				end: {
					line: 33,
					column: 40
				}
			},
			'10': {
				start: {
					line: 35,
					column: 2
				},
				end: {
					line: 37,
					column: 3
				}
			},
			'11': {
				start: {
					line: 36,
					column: 3
				},
				end: {
					line: 36,
					column: 61
				}
			},
			'12': {
				start: {
					line: 42,
					column: 2
				},
				end: {
					line: 44,
					column: 3
				}
			},
			'13': {
				start: {
					line: 43,
					column: 3
				},
				end: {
					line: 43,
					column: 28
				}
			},
			'14': {
				start: {
					line: 46,
					column: 2
				},
				end: {
					line: 68,
					column: 3
				}
			},
			'15': {
				start: {
					line: 48,
					column: 22
				},
				end: {
					line: 48,
					column: 50
				}
			},
			'16': {
				start: {
					line: 49,
					column: 16
				},
				end: {
					line: 49,
					column: 36
				}
			},
			'17': {
				start: {
					line: 51,
					column: 4
				},
				end: {
					line: 59,
					column: 6
				}
			},
			'18': {
				start: {
					line: 52,
					column: 5
				},
				end: {
					line: 58,
					column: 6
				}
			},
			'19': {
				start: {
					line: 53,
					column: 6
				},
				end: {
					line: 53,
					column: 29
				}
			},
			'20': {
				start: {
					line: 55,
					column: 6
				},
				end: {
					line: 56,
					column: 52
				}
			},
			'21': {
				start: {
					line: 57,
					column: 6
				},
				end: {
					line: 57,
					column: 28
				}
			},
			'22': {
				start: {
					line: 60,
					column: 4
				},
				end: {
					line: 60,
					column: 38
				}
			},
			'23': {
				start: {
					line: 61,
					column: 4
				},
				end: {
					line: 61,
					column: 15
				}
			},
			'24': {
				start: {
					line: 63,
					column: 4
				},
				end: {
					line: 63,
					column: 10
				}
			},
			'25': {
				start: {
					line: 66,
					column: 4
				},
				end: {
					line: 66,
					column: 26
				}
			},
			'26': {
				start: {
					line: 70,
					column: 2
				},
				end: {
					line: 70,
					column: 48
				}
			},
			'27': {
				start: {
					line: 71,
					column: 2
				},
				end: {
					line: 71,
					column: 40
				}
			},
			'28': {
				start: {
					line: 73,
					column: 2
				},
				end: {
					line: 75,
					column: 4
				}
			},
			'29': {
				start: {
					line: 74,
					column: 3
				},
				end: {
					line: 74,
					column: 24
				}
			},
			'30': {
				start: {
					line: 82,
					column: 0
				},
				end: {
					line: 82,
					column: 26
				}
			},
			'31': {
				start: {
					line: 87,
					column: 0
				},
				end: {
					line: 87,
					column: 30
				}
			},
			'32': {
				start: {
					line: 89,
					column: 0
				},
				end: {
					line: 89,
					column: 29
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 14,
						column: 1
					},
					end: {
						line: 14,
						column: 2
					}
				},
				loc: {
					start: {
						line: 14,
						column: 15
					},
					end: {
						line: 18,
						column: 2
					}
				},
				line: 14
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 25,
						column: 1
					},
					end: {
						line: 25,
						column: 2
					}
				},
				loc: {
					start: {
						line: 25,
						column: 22
					},
					end: {
						line: 76,
						column: 2
					}
				},
				line: 25
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 51,
						column: 17
					},
					end: {
						line: 51,
						column: 18
					}
				},
				loc: {
					start: {
						line: 51,
						column: 23
					},
					end: {
						line: 59,
						column: 5
					}
				},
				line: 51
			},
			'3': {
				name: '(anonymous_3)',
				decl: {
					start: {
						line: 73,
						column: 18
					},
					end: {
						line: 73,
						column: 19
					}
				},
				loc: {
					start: {
						line: 73,
						column: 24
					},
					end: {
						line: 75,
						column: 3
					}
				},
				line: 73
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 32,
						column: 2
					},
					end: {
						line: 34,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 32,
						column: 2
					},
					end: {
						line: 34,
						column: 3
					}
				}, {
					start: {
						line: 32,
						column: 2
					},
					end: {
						line: 34,
						column: 3
					}
				}],
				line: 32
			},
			'1': {
				loc: {
					start: {
						line: 35,
						column: 2
					},
					end: {
						line: 37,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 35,
						column: 2
					},
					end: {
						line: 37,
						column: 3
					}
				}, {
					start: {
						line: 35,
						column: 2
					},
					end: {
						line: 37,
						column: 3
					}
				}],
				line: 35
			},
			'2': {
				loc: {
					start: {
						line: 42,
						column: 2
					},
					end: {
						line: 44,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 42,
						column: 2
					},
					end: {
						line: 44,
						column: 3
					}
				}, {
					start: {
						line: 42,
						column: 2
					},
					end: {
						line: 44,
						column: 3
					}
				}],
				line: 42
			},
			'3': {
				loc: {
					start: {
						line: 46,
						column: 2
					},
					end: {
						line: 68,
						column: 3
					}
				},
				type: 'switch',
				locations: [{
					start: {
						line: 47,
						column: 3
					},
					end: {
						line: 64,
						column: 4
					}
				}, {
					start: {
						line: 65,
						column: 3
					},
					end: {
						line: 67,
						column: 4
					}
				}],
				line: 46
			},
			'4': {
				loc: {
					start: {
						line: 52,
						column: 5
					},
					end: {
						line: 58,
						column: 6
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 52,
						column: 5
					},
					end: {
						line: 58,
						column: 6
					}
				}, {
					start: {
						line: 52,
						column: 5
					},
					end: {
						line: 58,
						column: 6
					}
				}],
				line: 52
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0,
			'17': 0,
			'18': 0,
			'19': 0,
			'20': 0,
			'21': 0,
			'22': 0,
			'23': 0,
			'24': 0,
			'25': 0,
			'26': 0,
			'27': 0,
			'28': 0,
			'29': 0,
			'30': 0,
			'31': 0,
			'32': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0],
			'2': [0, 0],
			'3': [0, 0],
			'4': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global document, XMLHttpRequest */
var Renderer = (cov_1279de7pvk.s[0]++, __webpack_require__(4));
var Identifier = (cov_1279de7pvk.s[1]++, __webpack_require__(0));

var Mode = (cov_1279de7pvk.s[2]++, {
	PDFJS: 'pdfjs',
	DEFAULT: 'default'
});

var PdfRenderer = function (_ref) {
	_inherits(PdfRenderer, _ref);

	/**
  * Constructs the object.
  */
	function PdfRenderer() {
		_classCallCheck(this, PdfRenderer);

		cov_1279de7pvk.f[0]++;
		cov_1279de7pvk.s[3]++;

		var _this = _possibleConstructorReturn(this, (PdfRenderer.__proto__ || Object.getPrototypeOf(PdfRenderer)).call(this, Identifier.PDF));

		cov_1279de7pvk.s[4]++;

		_this.viewer = PdfRenderer.viewer;
		cov_1279de7pvk.s[5]++;
		_this.mode = PdfRenderer.mode;
		return _this;
	}

	/**
  * Job to realise to render a pdf with a mediaObject.
  *
  * @param      {MediaObject}  mediaObject  The media object
  */


	_createClass(PdfRenderer, [{
		key: 'process',
		value: function process(mediaObject) {
			cov_1279de7pvk.f[1]++;

			var url = (cov_1279de7pvk.s[6]++, mediaObject.getAttribute('src'));
			var iframe = (cov_1279de7pvk.s[7]++, document.createElement('iframe'));

			/**
    * Default dimention for the iframe if nothing is specified.
    */
			cov_1279de7pvk.s[8]++;
			if (!mediaObject.getAttribute('data-attr-width')) {
				cov_1279de7pvk.b[0][0]++;
				cov_1279de7pvk.s[9]++;

				iframe.setAttribute('width', '100%');
			} else {
				cov_1279de7pvk.b[0][1]++;
			}
			cov_1279de7pvk.s[10]++;
			if (!mediaObject.getAttribute('data-attr-height')) {
				cov_1279de7pvk.b[1][0]++;
				cov_1279de7pvk.s[11]++;

				iframe.setAttribute('height', document.body.scrollHeight);
			} else {
				cov_1279de7pvk.b[1][1]++;
			}

			/**
    * When no viewer is set, the pdf is rendered by the browser.
    */
			cov_1279de7pvk.s[12]++;
			if (!this.viewer) {
				cov_1279de7pvk.b[2][0]++;
				cov_1279de7pvk.s[13]++;

				this.mode = Mode.DEFAULT;
			} else {
				cov_1279de7pvk.b[2][1]++;
			}

			cov_1279de7pvk.s[14]++;
			switch (this.mode) {
				case Mode.PDFJS:
					cov_1279de7pvk.b[3][0]++;
					{
						var viewerUrl = (cov_1279de7pvk.s[15]++, this.viewer + '?file=' + url);
						var xhr = (cov_1279de7pvk.s[16]++, new XMLHttpRequest());

						cov_1279de7pvk.s[17]++;
						xhr.onload = function () {
							cov_1279de7pvk.f[2]++;
							cov_1279de7pvk.s[18]++;

							if (xhr.status < 400) {
								cov_1279de7pvk.b[4][0]++;
								cov_1279de7pvk.s[19]++;

								iframe.src = viewerUrl;
							} else {
								cov_1279de7pvk.b[4][1]++;
								cov_1279de7pvk.s[20]++;

								console.warn('The pdfjs viewer has not been found ...\n\t\t\t\t\t\t\tThe browser viewer will be used by default');
								cov_1279de7pvk.s[21]++;
								iframe.src = '' + url;
							}
						};
						cov_1279de7pvk.s[22]++;
						xhr.open('HEAD', viewerUrl, true);
						cov_1279de7pvk.s[23]++;
						xhr.send();

						cov_1279de7pvk.s[24]++;
						break;
					}
				default:
					cov_1279de7pvk.b[3][1]++;
					{
						cov_1279de7pvk.s[25]++;

						iframe.src = '' + url;
					}
			}

			cov_1279de7pvk.s[26]++;
			mediaObject.utilsSetAllDataAttributes(iframe);
			cov_1279de7pvk.s[27]++;
			mediaObject.replaceContents([iframe]);

			cov_1279de7pvk.s[28]++;
			iframe.onload = function () {
				cov_1279de7pvk.f[3]++;
				cov_1279de7pvk.s[29]++;

				mediaObject.return();
			};
		}
	}]);

	return PdfRenderer;
}((Renderer));

/**
 * Viewer for pdfjs render.
 */


cov_1279de7pvk.s[30]++;
PdfRenderer.viewer = null;

/**
 * Render mode.
 */
cov_1279de7pvk.s[31]++;
PdfRenderer.mode = Mode.PDFJS;

cov_1279de7pvk.s[32]++;
module.exports = PdfRenderer;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cov_2c4g1otlku = function () {
	var path = '/var/www/src/plugins/dash/renderer.js',
	    hash = 'a097895e70b09d0ba8e4dfe69e2ce4c4915e895c',
	    Function = function () {}.constructor,
	    global = new Function('return this')(),
	    gcv = '__coverage__',
	    coverageData = {
		path: '/var/www/src/plugins/dash/renderer.js',
		statementMap: {
			'0': {
				start: {
					line: 2,
					column: 17
				},
				end: {
					line: 2,
					column: 39
				}
			},
			'1': {
				start: {
					line: 3,
					column: 20
				},
				end: {
					line: 3,
					column: 53
				}
			},
			'2': {
				start: {
					line: 10,
					column: 2
				},
				end: {
					line: 10,
					column: 25
				}
			},
			'3': {
				start: {
					line: 19,
					column: 16
				},
				end: {
					line: 19,
					column: 47
				}
			},
			'4': {
				start: {
					line: 20,
					column: 17
				},
				end: {
					line: 20,
					column: 40
				}
			},
			'5': {
				start: {
					line: 21,
					column: 13
				},
				end: {
					line: 21,
					column: 43
				}
			},
			'6': {
				start: {
					line: 22,
					column: 14
				},
				end: {
					line: 22,
					column: 45
				}
			},
			'7': {
				start: {
					line: 24,
					column: 2
				},
				end: {
					line: 32,
					column: 3
				}
			},
			'8': {
				start: {
					line: 25,
					column: 32
				},
				end: {
					line: 25,
					column: 63
				}
			},
			'9': {
				start: {
					line: 26,
					column: 20
				},
				end: {
					line: 26,
					column: 52
				}
			},
			'10': {
				start: {
					line: 27,
					column: 3
				},
				end: {
					line: 31,
					column: 6
				}
			},
			'11': {
				start: {
					line: 33,
					column: 2
				},
				end: {
					line: 33,
					column: 39
				}
			},
			'12': {
				start: {
					line: 34,
					column: 2
				},
				end: {
					line: 34,
					column: 47
				}
			},
			'13': {
				start: {
					line: 35,
					column: 2
				},
				end: {
					line: 35,
					column: 39
				}
			},
			'14': {
				start: {
					line: 36,
					column: 2
				},
				end: {
					line: 36,
					column: 62
				}
			},
			'15': {
				start: {
					line: 37,
					column: 2
				},
				end: {
					line: 37,
					column: 23
				}
			},
			'16': {
				start: {
					line: 41,
					column: 0
				},
				end: {
					line: 41,
					column: 30
				}
			}
		},
		fnMap: {
			'0': {
				name: '(anonymous_0)',
				decl: {
					start: {
						line: 9,
						column: 1
					},
					end: {
						line: 9,
						column: 2
					}
				},
				loc: {
					start: {
						line: 9,
						column: 15
					},
					end: {
						line: 11,
						column: 2
					}
				},
				line: 9
			},
			'1': {
				name: '(anonymous_1)',
				decl: {
					start: {
						line: 18,
						column: 1
					},
					end: {
						line: 18,
						column: 2
					}
				},
				loc: {
					start: {
						line: 18,
						column: 22
					},
					end: {
						line: 38,
						column: 2
					}
				},
				line: 18
			},
			'2': {
				name: '(anonymous_2)',
				decl: {
					start: {
						line: 36,
						column: 52
					},
					end: {
						line: 36,
						column: 53
					}
				},
				loc: {
					start: {
						line: 36,
						column: 58
					},
					end: {
						line: 36,
						column: 60
					}
				},
				line: 36
			}
		},
		branchMap: {
			'0': {
				loc: {
					start: {
						line: 24,
						column: 2
					},
					end: {
						line: 32,
						column: 3
					}
				},
				type: 'if',
				locations: [{
					start: {
						line: 24,
						column: 2
					},
					end: {
						line: 32,
						column: 3
					}
				}, {
					start: {
						line: 24,
						column: 2
					},
					end: {
						line: 32,
						column: 3
					}
				}],
				line: 24
			},
			'1': {
				loc: {
					start: {
						line: 24,
						column: 6
					},
					end: {
						line: 24,
						column: 15
					}
				},
				type: 'binary-expr',
				locations: [{
					start: {
						line: 24,
						column: 6
					},
					end: {
						line: 24,
						column: 8
					}
				}, {
					start: {
						line: 24,
						column: 12
					},
					end: {
						line: 24,
						column: 15
					}
				}],
				line: 24
			}
		},
		s: {
			'0': 0,
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
			'10': 0,
			'11': 0,
			'12': 0,
			'13': 0,
			'14': 0,
			'15': 0,
			'16': 0
		},
		f: {
			'0': 0,
			'1': 0,
			'2': 0
		},
		b: {
			'0': [0, 0],
			'1': [0, 0]
		},
		_coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	},
	    coverage = global[gcv] || (global[gcv] = {});

	if (coverage[path] && coverage[path].hash === hash) {
		return coverage[path];
	}

	coverageData.hash = hash;
	return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global document, shaka */
var Renderer = (cov_2c4g1otlku.s[0]++, __webpack_require__(4));
var Identifier = (cov_2c4g1otlku.s[1]++, __webpack_require__(0));

var DashRenderer = function (_ref) {
	_inherits(DashRenderer, _ref);

	/**
  * Constructs the object.
  */
	function DashRenderer() {
		_classCallCheck(this, DashRenderer);

		cov_2c4g1otlku.f[0]++;
		cov_2c4g1otlku.s[2]++;
		return _possibleConstructorReturn(this, (DashRenderer.__proto__ || Object.getPrototypeOf(DashRenderer)).call(this, Identifier.DASH));
	}

	/**
  * Job to realise to render a dash with a mediaObject.
  *
  * @param      {MediaObject}  mediaObject  The media object
  */


	_createClass(DashRenderer, [{
		key: 'process',
		value: function process(mediaObject) {
			cov_2c4g1otlku.f[1]++;

			var video = (cov_2c4g1otlku.s[3]++, document.createElement('video'));
			var player = (cov_2c4g1otlku.s[4]++, new shaka.Player(video));
			var id = (cov_2c4g1otlku.s[5]++, mediaObject.getAttribute('id'));
			var key = (cov_2c4g1otlku.s[6]++, mediaObject.getAttribute('key'));

			cov_2c4g1otlku.s[7]++;
			if ((cov_2c4g1otlku.b[1][0]++, id) && (cov_2c4g1otlku.b[1][1]++, key)) {
				cov_2c4g1otlku.b[0][0]++;

				var clearKeyStringObject = (cov_2c4g1otlku.s[8]++, '{"' + id + '": "' + key + '"}');
				var clearKey = (cov_2c4g1otlku.s[9]++, JSON.parse(clearKeyStringObject));
				cov_2c4g1otlku.s[10]++;
				player.configure({
					drm: {
						clearKeys: clearKey
					}
				});
			} else {
				cov_2c4g1otlku.b[0][1]++;
			}
			cov_2c4g1otlku.s[11]++;
			video.setAttribute('controls', true);
			cov_2c4g1otlku.s[12]++;
			mediaObject.utilsSetAllDataAttributes(video);
			cov_2c4g1otlku.s[13]++;
			mediaObject.replaceContents([video]);
			cov_2c4g1otlku.s[14]++;
			player.load(mediaObject.getAttribute('src')).then(function () {
				cov_2c4g1otlku.f[2]++;
			});
			cov_2c4g1otlku.s[15]++;
			mediaObject.return();
		}
	}]);

	return DashRenderer;
}((Renderer));

cov_2c4g1otlku.s[16]++;


module.exports = DashRenderer;

/***/ })
/******/ ]);
});