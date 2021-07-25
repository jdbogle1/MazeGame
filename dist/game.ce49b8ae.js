// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/cst.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cst = void 0;
exports.cst = {
  scenes: {
    Load: "load",
    Maze: "maze"
  },
  image: {
    bg: {
      cross: "cross.png",
      end: "end.png",
      lturn: "lturn.png",
      rturn: "rturn.png",
      straight: "straight.png",
      tee: "tee.png",
      tleft: "tleft.png",
      tright: "tright.png"
    },
    ui: {
      cross: "cor_cross.png",
      endB: "end_b.png",
      endL: "end_l.png",
      endR: "end_r.png",
      endT: "end_t.png",
      straightH: "straight_h.png",
      straightV: "straight_v.png",
      teeB: "tee_b.png",
      teeL: "tee_l.png",
      teeR: "tee_r.png",
      teeT: "tee_t.png",
      turnBL: "turn_bl.png",
      turnBR: "turn_br.png",
      turnTL: "turn_tl.png",
      turnTR: "turn_tr.png",
      player: "icon_player.png",
      button: "button.png"
    },
    sprite: {}
  },
  audio: {
    music: {},
    sfx: {
      step: "step.wav"
    }
  },
  text: {
    help: {
      control: {
        title: "Controls:",
        1: "W - Enter the next room",
        2: "A - Turn left and enter the next room",
        3: "S - Turn around and enter the previous room",
        4: "D - Turn right and enter the next room",
        5: "TAB - Check the map"
      }
    }
  }
};
},{}],"node_modules/generate-maze/dist/generate-maze.js":[function(require,module,exports) {
var define;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.generateMaze=t():e.generateMaze=t()}(self,(function(){return(()=>{var e={607:(e,t,r)=>{e.exports=r(808).default},808:(e,t,r)=>{"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return e.slice(0,-1)}function u(e,t=0){return t?Array.from(Array(t-e).keys()).map((t=>t+e)):Array.from(Array(e).keys())}function s(e){return[...new Set(e)]}function i(e,t){const r=s(e.map((e=>e.set))).filter(Boolean),n=(o=u(1,e.length+1),c=r,[o,c].reduce(((e,t)=>e.filter((e=>!t.includes(e)))))).sort((()=>.5-t()));var o,c;e.filter((e=>!e.set)).forEach(((e,t)=>e.set=n[t]))}function a(e,t,r=.5){f(e).forEach(((n,o)=>{const c=e[o+1],f=n.set!==c.set,u=t()<=r;f&&u&&(function(e,t,r){e.forEach((e=>{e.set===t&&(e.set=r)}))}(e,c.set,n.set),n.right=!1,c.left=!1)}))}r.d(t,{default:()=>l});const l=function(e=8,t=e,r=!0,n=1){const c=function(e){return function(){let t=e+=1831565813;return t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}(n),l=[],p=u(e);for(let n=0;n<t;n+=1){const o=p.map((o=>({x:o,y:n,top:r||n>0,left:r||o>0,bottom:r||n<t-1,right:r||o<e-1})));l.push(o)}f(l).forEach(((e,t)=>{i(e,c),a(e,c),function(e,t,r){const n=Object.values(function(e,t){let r=s(e.map((e=>e.set))).reduce(((e,t)=>o(o({},e),{},{[t]:[]})),{});return e.forEach((e=>r[e.set].push(e))),r}(e)),{ceil:c}=Math;n.forEach((e=>{(function(e,t,r){t=null==t?1:t;const n=null==e?0:e.length;if(!n||t<1)return[];t=t>n?n:t;let o=-1;const c=n-1,f=[...e];for(;++o<t;){const e=o+Math.floor(r()*(c-o+1)),t=f[e];f[e]=f[o],f[o]=t}return f.slice(0,t)})(e,c(r()*e.length),r).forEach((e=>{if(e){const r=t[e.x];e.bottom=!1,r.top=!1,r.set=e.set}}))}))}(e,l[t+1],c)}));const b=(y=l)[y.length-1];var y;return i(b,c),a(b,c,1),l}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,r),c.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r(607)})()}));

},{}],"src/classes/MainClass.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = void 0;

var cst_1 = require("../cst");

var MainClass =
/** @class */
function () {
  function MainClass() {
    this.centre = {
      x: 0,
      y: 0
    };
    this.width = 0;
    this.height = 0;
  }

  MainClass.prototype.randInt = function (min, max) {
    console.log(Math.floor(Math.random() * max + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  MainClass.prototype.genMaze = function (scene, width, height, seed) {
    //@ts-ignore
    var generator = require("generate-maze");

    scene.maze = generator(width, height, true, seed);
    console.log(scene.maze);
    scene.mazeRooms = [];

    for (var i = 0; i < scene.maze.length; i++) {
      scene.mazeRooms[i] = [];

      for (var j = 0; j < scene.maze[i].length; j++) {
        var room = scene.maze[i][j];

        if (!room.top) {
          if (!room.left) {
            if (!room.right) {
              if (!room.bottom) {
                scene.mazeRooms[i][j] = scene.add.image(j * 100, i * 100, cst_1.cst.image.ui.cross);
              } else {
                scene.mazeRooms[i][j] = scene.add.image(j * 100, i * 100, cst_1.cst.image.ui.teeT);
              }
            } else if (!room.bottom) {
              scene.mazeRooms[i][j] = scene.add.image(j * 100, i * 100, cst_1.cst.image.ui.teeL);
            } else {
              scene.mazeRooms[i][j] = scene.add.image(j * 100, i * 100, cst_1.cst.image.ui.turnTL);
            }
          } else if (!room.right) {
            if (!room.bottom) {
              scene.mazeRooms[i][j] = scene.add.image(j * 100, i * 100, cst_1.cst.image.ui.teeR);
            } else {
              scene.mazeRooms[i][j] = scene.add.image(j * 100, i * 100, cst_1.cst.image.ui.turnTR);
            }
          } else if (!room.bottom) {
            scene.mazeRooms[i][j] = scene.add.image(j * 100, i * 100, cst_1.cst.image.ui.straightV);
          } else {
            scene.mazeRooms[i][j] = scene.add.image(j * 100, i * 100, cst_1.cst.image.ui.endT);
          }
        } else if (!room.left) {
          if (!room.right) {
            if (!room.bottom) {
              scene.mazeRooms[i][j] = scene.add.image(j * 100, i * 100, cst_1.cst.image.ui.teeB);
            } else {
              scene.mazeRooms[i][j] = scene.add.image(j * 100, i * 100, cst_1.cst.image.ui.straightH);
            }
          } else if (!room.bottom) {
            scene.mazeRooms[i][j] = scene.add.image(j * 100, i * 100, cst_1.cst.image.ui.turnBL);
          } else {
            scene.mazeRooms[i][j] = scene.add.image(j * 100, i * 100, cst_1.cst.image.ui.endL);
          }
        } else if (!room.right) {
          if (!room.bottom) {
            scene.mazeRooms[i][j] = scene.add.image(j * 100, i * 100, cst_1.cst.image.ui.turnBR);
          } else {
            scene.mazeRooms[i][j] = scene.add.image(j * 100, i * 100, cst_1.cst.image.ui.endR);
          }
        } else if (!room.bottom) {
          scene.mazeRooms[i][j] = scene.add.image(j * 100, i * 100, cst_1.cst.image.ui.endB);
        }
      }
    }
  };

  MainClass.prototype.genRoom = function (scene, maze, player) {
    var room = maze[player.pos.y][player.pos.x];

    if (room.texture.key == cst_1.cst.image.ui.endB && player.facing == "bottom" || room.texture.key == cst_1.cst.image.ui.endL && player.facing == "left" || room.texture.key == cst_1.cst.image.ui.endR && player.facing == "right" || room.texture.key == cst_1.cst.image.ui.endT && player.facing == "top" || room.texture.key == cst_1.cst.image.ui.straightH && (player.facing == "right" || player.facing == "left") || room.texture.key == cst_1.cst.image.ui.straightV && (player.facing == "top" || player.facing == "bottom")) {
      return cst_1.cst.image.bg.straight;
    } else if (room.texture.key == cst_1.cst.image.ui.endB && player.facing != "bottom" || room.texture.key == cst_1.cst.image.ui.endL && player.facing != "left" || room.texture.key == cst_1.cst.image.ui.endR && player.facing != "right" || room.texture.key == cst_1.cst.image.ui.endT && player.facing != "top") {
      return cst_1.cst.image.bg.end;
    } else if (room.texture.key == cst_1.cst.image.ui.cross) {
      return cst_1.cst.image.bg.cross;
    } else if (room.texture.key == cst_1.cst.image.ui.turnBL && player.facing == "top" || room.texture.key == cst_1.cst.image.ui.turnTR && player.facing == "bottom" || room.texture.key == cst_1.cst.image.ui.turnBL && player.facing == "left" || room.texture.key == cst_1.cst.image.ui.turnTR && player.facing == "right" || room.texture.key == cst_1.cst.image.ui.turnTL && player.facing == "right" || room.texture.key == cst_1.cst.image.ui.turnBR && player.facing == "right" || room.texture.key == cst_1.cst.image.ui.turnBR && player.facing == "left" || room.texture.key == cst_1.cst.image.ui.turnTL && player.facing == "right") {
      return cst_1.cst.image.bg.lturn;
    } else if (room.texture.key == cst_1.cst.image.ui.turnTL && player.facing == "bottom" || room.texture.key == cst_1.cst.image.ui.turnBR && player.facing == "top" || room.texture.key == cst_1.cst.image.ui.turnTL && player.facing == "right" || room.texture.key == cst_1.cst.image.ui.turnBR && player.facing == "left" || room.texture.key == cst_1.cst.image.ui.turnTR && player.facing == "left" || room.texture.key == cst_1.cst.image.ui.turnBL && player.facing == "right") {
      return cst_1.cst.image.bg.rturn;
    } else if (room.texture.key == cst_1.cst.image.ui.teeB && player.facing == "top" || room.texture.key == cst_1.cst.image.ui.teeL && player.facing == "right" || room.texture.key == cst_1.cst.image.ui.teeR && player.facing == "left" || room.texture.key == cst_1.cst.image.ui.teeT && player.facing == "bottom") {
      return cst_1.cst.image.bg.tee;
    } else if (room.texture.key == cst_1.cst.image.ui.teeB && player.facing == "left" || room.texture.key == cst_1.cst.image.ui.teeL && player.facing == "top" || room.texture.key == cst_1.cst.image.ui.teeT && player.facing == "right" || room.texture.key == cst_1.cst.image.ui.teeR && player.facing == "bottom" || room.texture.key == cst_1.cst.image.ui.turnBR && player.facing == "bottom") {
      return cst_1.cst.image.bg.tleft;
    } else if (room.texture.key == cst_1.cst.image.ui.teeB && player.facing == "right" || room.texture.key == cst_1.cst.image.ui.teeL && player.facing == "bottom" || room.texture.key == cst_1.cst.image.ui.teeT && player.facing == "left" || room.texture.key == cst_1.cst.image.ui.teeR && player.facing == "top") {
      return cst_1.cst.image.bg.tright;
    }
  };

  return MainClass;
}();

exports.main = new MainClass();
},{"../cst":"src/cst.ts","generate-maze":"node_modules/generate-maze/dist/generate-maze.js"}],"src/scenes/MazeScene.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MazeScene = void 0;

var cst_1 = require("../cst");

var MainClass_1 = require("../classes/MainClass");

var MazeScene =
/** @class */
function (_super) {
  __extends(MazeScene, _super);

  function MazeScene() {
    return _super.call(this, {
      key: cst_1.cst.scenes.Maze
    }) || this;
  }

  MazeScene.prototype.preload = function () {};

  MazeScene.prototype.create = function () {
    var _this = this; //Gemerate Maze


    this.cameras.main.setBackgroundColor(0xaaaaaa);
    MainClass_1.main.genMaze(this, MainClass_1.main.randInt(4, 6), MainClass_1.main.randInt(3, 4), Math.random() * 10000);
    this.mazeGroup = this.add.group();

    for (var i = 0; i < this.maze.length; i++) {
      for (var j = 0; j < this.maze[i].length; j++) {
        this.mazeGroup.add(this.mazeRooms[i][j]);
      }
    } //Spawn Player


    this.player = this.add.sprite(100, 100, cst_1.cst.image.ui.player);
    this.player.pos = {
      x: 0,
      y: 0
    };

    if (this.maze[0][0].bottom == true) {
      this.player.facing = "right";
    } else {
      this.player.facing = "bottom";
    } //Maze Group


    this.mazeGroup.add(this.player);
    this.mazeGroup.setOrigin(0.5, 0.5);
    this.mazeGroup.incXY(MainClass_1.main.centre.x - this.maze[0].length * 30, MainClass_1.main.centre.y - this.maze.length * 35); //Set up backgrounds

    MainClass_1.main.genRoom(this, this.mazeRooms, this.player);
    this.bg = this.add.image(0, 0, MainClass_1.main.genRoom(this, this.mazeRooms, this.player)).setOrigin(0); //Controls

    this.input.keyboard.on("keyup-W", function () {
      if (_this.player.facing == "bottom" && !_this.maze[_this.player.pos.y][_this.player.pos.x].bottom && _this.player.pos.y < _this.maze.length) {
        _this.player.pos.y++;
      } else if (_this.player.facing == "left" && !_this.maze[_this.player.pos.y][_this.player.pos.x].left && _this.player.pos.x > 0) {
        _this.player.pos.x--;
      } else if (_this.player.facing == "right" && !_this.maze[_this.player.pos.y][_this.player.pos.x].right && _this.player.pos.x < _this.maze[0].length) {
        _this.player.pos.x++;
      } else if (_this.player.facing == "top" && !_this.maze[_this.player.pos.y][_this.player.pos.x].top && _this.player.pos.y > 0) {
        _this.player.pos.y--;
      }
    });
    this.input.keyboard.on("keyup-A", function () {
      console.log(_this.player.facing, _this.maze[_this.player.pos.y][_this.player.pos.x].left, _this.player.pos.y);

      if (_this.player.facing == "bottom" && !_this.maze[_this.player.pos.y][_this.player.pos.x].right && _this.player.pos.x < _this.maze[0].length) {
        _this.player.pos.x++;
        _this.player.facing = "right";
      } else if (_this.player.facing == "left" && !_this.maze[_this.player.pos.y][_this.player.pos.x].bottom && _this.player.pos.y < _this.maze.length) {
        _this.player.pos.y++;
        _this.player.facing = "bottom";
      } else if (_this.player.facing == "right" && !_this.maze[_this.player.pos.y][_this.player.pos.x].top && _this.player.pos.x > 0) {
        _this.player.pos.y--;
        _this.player.facing = "top";
      } else if (_this.player.facing == "top" && !_this.maze[_this.player.pos.y][_this.player.pos.x].left && _this.player.pos.x > 0) {
        _this.player.pos.x--;
        _this.player.facing = "left";
      }
    });
    this.input.keyboard.on("keyup-S", function () {
      if (_this.player.facing == "bottom" && !_this.maze[_this.player.pos.y][_this.player.pos.x].top && _this.player.pos.y > 0) {
        _this.player.pos.y--;
        _this.player.facing = "top";
      } else if (_this.player.facing == "left" && !_this.maze[_this.player.pos.y][_this.player.pos.x].right && _this.player.pos.x < _this.maze[0].length) {
        _this.player.pos.x++;
        _this.player.facing = "right";
      } else if (_this.player.facing == "right" && !_this.maze[_this.player.pos.y][_this.player.pos.x].left && _this.player.pos.x > 0) {
        _this.player.pos.x--;
        _this.player.facing = "left";
      } else if (_this.player.facing == "top" && !_this.maze[_this.player.pos.y][_this.player.pos.x].bottom && _this.player.pos.y < _this.maze.length) {
        _this.player.pos.y++;
        _this.player.facing = "bottom";
      }
    });
    this.input.keyboard.on("keyup-D", function () {
      if (_this.player.facing == "bottom" && !_this.maze[_this.player.pos.y][_this.player.pos.x].left && _this.player.pos.x > 0) {
        _this.player.pos.x--;
        _this.player.facing = "left";
      } else if (_this.player.facing == "left" && !_this.maze[_this.player.pos.y][_this.player.pos.x].top && _this.player.pos.y > 0) {
        _this.player.pos.y--;
        _this.player.facing = "top";
      } else if (_this.player.facing == "right" && !_this.maze[_this.player.pos.y][_this.player.pos.x].bottom && _this.player.pos.y < _this.maze.length) {
        _this.player.pos.y++;
        _this.player.facing = "bottom";
      } else if (_this.player.facing == "top" && !_this.maze[_this.player.pos.y][_this.player.pos.x].right && _this.player.pos.x < _this.maze[0].length) {
        _this.player.pos.x++;
        _this.player.facing = "right";
      }
    });
    this.input.keyboard.on("keyup", function () {
      _this.bg = _this.add.image(0, 0, MainClass_1.main.genRoom(_this, _this.mazeRooms, _this.player)).setOrigin(0);
      console.log(_this.player.facing, _this.maze[_this.player.pos.y][_this.player.pos.x]);
    });
    this.keyboard = this.input.keyboard.addKeys("TAB"); //UI

    this.btnHelp = this.add.sprite(MainClass_1.main.width - 200, MainClass_1.main.height - 50, cst_1.cst.image.ui.button).setDepth(5).setInteractive().setScale(1.4);
    this.txtHelp = this.add.text(this.btnHelp.x, this.btnHelp.y, "Help", {
      color: "#ffffff",
      fontFamily: "timesnewroman",
      fontSize: "40px"
    }).setOrigin(0.5).setDepth(5);
    this.btnHelp.on("pointerup", function () {
      _this.overHelp = _this.add.rectangle(50, 50, MainClass_1.main.width - 100, MainClass_1.main.height - 100, 0xaaaaaa, 0.6).setDepth(6).setOrigin(0);

      _this.btnHelp.setDepth(-1);

      _this.txtHelp.setDepth(-1);

      _this.btnClose = _this.add.sprite(MainClass_1.main.width - 250, MainClass_1.main.height - 100, cst_1.cst.image.ui.button).setDepth(7).setInteractive().setScale(1.4);
      _this.txtClose = _this.add.text(_this.btnClose.x, _this.btnClose.y, "Close", {
        color: "#ffffff",
        fontFamily: "timesnewroman",
        fontSize: "40px"
      }).setOrigin(0.5).setDepth(6);

      _this.btnClose.setInteractive();

      _this.btnClose.on("pointerup", function () {
        _this.btnClose.destroy();

        _this.txtClose.destroy();

        _this.overHelp.destroy();

        _this.btnHelp.setDepth(5);

        _this.txtHelp.setDepth(5);

        for (var i = 0; i < _this.txtControl.length; i++) {
          _this.txtControl[i].destroy();
        }
      });

      _this.txtControl = [];
      var txtConfig = {
        color: "#ffffff",
        fontFamily: "timesnewroman",
        fontSize: "20px"
      };
      _this.txtControl[0] = _this.add.text(75, 75, cst_1.cst.text.help.control.title, {
        color: "#ffffff",
        fontFamily: "timesnewroman",
        fontSize: "40px"
      }).setDepth(6);
      _this.txtControl[1] = _this.add.text(_this.txtControl[0].x, _this.txtControl[0].y + 50, cst_1.cst.text.help.control[1], txtConfig).setDepth(6);

      for (var i = 2; i < 6; i++) {
        _this.txtControl[i] = _this.add.text(_this.txtControl[i - 1].x, _this.txtControl[i - 1].y + 25, cst_1.cst.text.help.control[i], txtConfig).setDepth(6);
      }
    });
  };

  MazeScene.prototype.update = function (delta) {
    this.player.x = this.player.pos.x * 100 + this.mazeRooms[0][0].x;
    this.player.y = this.player.pos.y * 100 + this.mazeRooms[0][0].y; //@ts-ignore

    if (this.keyboard.TAB.isDown) {
      this.mazeGroup.setDepth(2);
    } else {
      this.mazeGroup.setDepth(-1);
    }
  };

  return MazeScene;
}(Phaser.Scene);

exports.MazeScene = MazeScene;
},{"../cst":"src/cst.ts","../classes/MainClass":"src/classes/MainClass.ts"}],"src/scenes/LoadScene.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0; //@ts-ignore

var cst_1 = require("../cst");

var MainClass_1 = require("../classes/MainClass");

var MazeScene_1 = require("./MazeScene");

var LoadScene =
/** @class */
function (_super) {
  __extends(LoadScene, _super);

  function LoadScene() {
    return _super.call(this, {
      key: cst_1.cst.scenes.Load
    }) || this;
  }

  LoadScene.prototype.loadScenes = function () {
    this.scene.add(cst_1.cst.scenes.Maze, MazeScene_1.MazeScene, false);
  };

  LoadScene.prototype.loadImages = function () {
    this.load.setPath("./assets/image/bg");

    for (var prop in cst_1.cst.image.bg) {
      //@ts-ignore
      this.load.image(cst_1.cst.image.bg[prop], cst_1.cst.image.bg[prop]);
    }

    this.load.setPath("./assets/image/ui");

    for (var prop in cst_1.cst.image.ui) {
      //@ts-ignore
      this.load.image(cst_1.cst.image.ui[prop], cst_1.cst.image.ui[prop]);
    }

    this.load.setPath("./assets/image/sprite");

    for (var prop in cst_1.cst.image.sprite) {
      //@ts-ignore
      this.load.image(cst_1.cst.image.sprite[prop], cst_1.cst.image.sprite[prop]);
    }
  };

  LoadScene.prototype.loadAudio = function () {
    this.load.setPath("./assets/audio/sfx");

    for (var prop in cst_1.cst.audio.sfx) {
      //@ts-ignore
      this.load.image(cst_1.cst.audio.sfx[prop], cst_1.cst.audio.sfx[prop]);
    }

    this.load.setPath("./assets/audio/music");

    for (var prop in cst_1.cst.audio.music) {
      //@ts-ignore
      this.load.image(cst_1.cst.audio.music[prop], cst_1.cst.audio.music[prop]);
    }
  };

  LoadScene.prototype.preload = function () {
    var _this = this;

    MainClass_1.main.centre.x = this.game.scale.width / 2;
    MainClass_1.main.centre.y = this.game.scale.height / 2;
    MainClass_1.main.width = this.game.scale.width;
    MainClass_1.main.height = this.game.scale.height;
    this.loadImages();
    this.loadScenes();
    this.loadAudio();
    this.load.on("load", function (file) {
      console.log(file.src);
    });
    var loadBar = this.add.graphics({
      fillStyle: {
        color: 0xff0000
      }
    });
    this.load.on("progress", function (percent) {
      loadBar.fillRect(0, _this.game.renderer.height / 2, _this.game.renderer.width * percent, 100);
    });
    this.load.on("complete", function () {
      _this.add.text(_this.game.scale.width / 2, _this.game.scale.height / 2 + 50, "Press any button to continue...", {
        color: "#000",
        fontSize: "30px",
        fontStyle: "bold",
        fontFamily: "argos"
      }).setOrigin(0.5, 0.5);

      _this.input.keyboard.on("keyup", function () {
        _this.scene.start(cst_1.cst.scenes.Maze, {
          msg: "hello"
        });
      });
    });
  };

  LoadScene.prototype.create = function () {};

  LoadScene.prototype.update = function (delta) {};

  return LoadScene;
}(Phaser.Scene);

exports.LoadScene = LoadScene;
},{"../cst":"src/cst.ts","../classes/MainClass":"src/classes/MainClass.ts","./MazeScene":"src/scenes/MazeScene.ts"}],"src/game.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** @type {import("../typings/phaser")} */

var LoadScene_1 = require("./scenes/LoadScene");

var game = new Phaser.Game({
  scale: {
    width: 1280,
    height: 720
  },
  scene: [LoadScene_1.LoadScene]
});
},{"./scenes/LoadScene":"src/scenes/LoadScene.ts"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51489" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/game.ts"], null)
//# sourceMappingURL=/game.ce49b8ae.js.map