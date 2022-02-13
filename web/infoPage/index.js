/******/ (() => { // webpackBootstrap
/******/  var __webpack_modules__ = ({

/***/ 3383:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7353);
/* harmony import */ var _javascript_SmoothScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2362);
/* harmony import */ var _javascript_SmoothScroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_javascript_SmoothScroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _javascript_quiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1931);
/* harmony import */ var _javascript_quiz__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_javascript_quiz__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7645);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



 // Parallax

var introBg = document.querySelector(".intro__background img");
var rocks = document.querySelector(".hero__rocks");
var rabbits = document.querySelector(".hero__rabbits");
var path = document.querySelector(".hero__path");
var whatis = document.querySelector(".whatis");
window.addEventListener("load", parallax);
window.addEventListener("scroll", parallax);

function parallax(event) {
  var backgroundValue = Math.min(400, pageYOffset * 0.35);
  var rocksValue = Math.max(-50, pageYOffset * -0.15);
  var rabbitsValue = Math.max(-650, pageYOffset * -0.75);
  introBg.style.transform = "translateY(".concat(backgroundValue, "px)");
  rocks.style.transform = "translateY(".concat(rocksValue, "px)");
  rabbits.style.transform = "translateY(".concat(rabbitsValue, "px) translateX(-50%)");
  path.style.transform = "translateY(".concat(rabbitsValue, "px)");
  whatis.style.marginTop = "".concat(rabbitsValue - 1, "px");
} // Preloader


var preloader = document.getElementById("preloader");
setTimeout(function () {
  var loaderLine = document.getElementById("loaderLine");
  console.log(loaderLine);
  Object.assign(loaderLine.style, {
    transitionDuration: 0,
    width: "100%",
    animation: "AnyStopAnimation"
  });
  preloader.classList.add("hide");
  setTimeout(function () {
    document.body.classList.remove("no-scroll");
    preloader.remove();
  }, 800);
}, 6000); // Total Section

totalInit();

function totalInit() {
  var items = _toConsumableArray(document.querySelectorAll(".total-item__content.fadein"));

  var OFFSET_ELEMENT = 0.75;
  var FINISH_IN = window.innerHeight / 2;
  window.addEventListener("scroll", function () {
    var _iterator = _createForOfIteratorHelper(items),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        var _item$getBoundingClie = item.getBoundingClientRect(),
            top = _item$getBoundingClie.top,
            height = _item$getBoundingClie.height;

        var elementTop = window.pageYOffset + top;
        var elementBottom = elementTop + height * OFFSET_ELEMENT;
        var currentElementPosition = window.pageYOffset + window.innerHeight - elementBottom;
        var value = currentElementPosition / (FINISH_IN || 1000);
        var valueCount = Math.max(Math.min(value, 1), -1);
        item.style.opacity = valueCount;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
} // Faq


faqInit();

function faqInit() {
  var items = [];
  var list = document.querySelector(".faq__list");
  list.style.height = "";

  var _iterator2 = _createForOfIteratorHelper(document.querySelectorAll(".faq-item")),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var element = _step2.value;
      var content = element.querySelector(".faq-item__content");
      var item = new Proxy({
        active: false,
        element: element,
        content: content
      }, {
        set: function set(target, prop, value) {
          if (prop === "active") {
            target[prop] = value;

            if (value === true) {
              target.content.style.height = target.content.scrollHeight + "px";
              target.content.style.padding = "";
            } else {
              target.content.style.height = 0;
              target.content.style.padding = 0;
            }

            return true;
          }

          return false;
        }
      });
      items.push(item);
      faqItemHandler(item);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  list.style.height = list.offsetHeight + "px";
  return items;
}

function faqItemHandler(item) {
  var element = item.element;
  item.active = false;
  element.addEventListener("click", function () {
    var active = !item.active;
    item.active = active;
    active === true ? element.classList.add("opened") : element.classList.remove("opened");
  });
} // Menu init


initMenu();

function initMenu() {
  var body = document.body;
  var openMenuBtn = document.getElementById("burgermenu");
  var closeMenuBtn = document.getElementById("close-menu");
  openMenuBtn.addEventListener("click", function () {
    body.classList.add("show-menu");
  });
  closeMenuBtn.addEventListener("click", function () {
    body.classList.remove("show-menu");
  });
} // Clone Elements


cloneElement();

function cloneElement() {
  var _iterator3 = _createForOfIteratorHelper(document.querySelectorAll("[data-insert]")),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var elementReplace = _step3.value;
      var parentElement = elementReplace.parentElement;
      var data = elementReplace.dataset.insert;
      var elementToClone = document.querySelector("[data-clone='".concat(data, "']"));
      if (!elementToClone) continue;
      elementToClone.removeAttribute("data-clone");
      var clonedElement = elementToClone.cloneNode(true);
      clonedElement.classList.add("cloned");
      parentElement.replaceChild(clonedElement, elementReplace);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
} // Smooth Scroll


_javascript_SmoothScroll__WEBPACK_IMPORTED_MODULE_1___default()({
  animationTime: 500,
  stepSize: 50,
  accelerationDelta: 30,
  accelerationMax: 2,
  arrowScroll: 50,
  pulseScale: 4,
  pulseAlgorithm: true,
  pulseNormalize: 1,
  keyboardSupport: true,
  touchpadSupport: true
}); // --------------------------------------------------------------------------------------


var animationHandlers = []; // total
// const total = document.querySelector('.total')
// const totalItemFlowContainer = document.querySelector('.total-item__flow-container')
// const totalItemContent = Array.from(document.querySelectorAll('.total-item__content'))
// animationHandlers.push(() => {
//     const totalItemFlowContainerCoords = Renderer.getElementCoords(totalItemFlowContainer)
//     if (totalItemFlowContainerCoords.width !== parseInt(total.style.height)) {
//         total.style.height = `${totalItemFlowContainerCoords.width}px`
//     }
//     if (Renderer.isElementVisible(total)) {
//         const totalMaxCoord = Renderer.getElementCoords(total).height - window.innerHeight
//         const totalScrollTop = Renderer.getScrollCoordsFromElement(total).windowTop.fromTop
//         const totalScrollBottom = Renderer.getScrollCoordsFromElement(total).windowBottom.fromTop
//         totalItemFlowContainer.style.transform = `translateX(${-totalScrollTop}px)`
//         const totalContentOpacity = [
//             (totalScrollBottom - totalMaxCoord * 1/3 / 4) / (totalMaxCoord * 1/3 / 3) * 1,
//             (totalScrollBottom - totalMaxCoord * 1/3) / (totalMaxCoord * 2/3 - totalMaxCoord * 1/2) * 1,
//             (totalScrollBottom - totalMaxCoord * 2/3) / (totalMaxCoord - totalMaxCoord * 2/3) * 1,
//         ]
//         totalItemContent.forEach((content,idx) => {
//             content.style.cssText = `opacity: ${totalContentOpacity[idx]};`
//         })
//     }
// })
// frameByFrame in faq, progress, roadmap

var frameByFrameCanvases = [document.querySelector('#faqFramByFrame'), document.querySelector('#progressFramByFrame'), document.querySelector('#roadmapFramByFrame')];
frameByFrameCanvases.forEach(function (framesContainer) {
  var frames = Array.from(framesContainer.querySelectorAll('img'));
  animationHandlers.push(function () {
    var timeline = _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getElementCoords */ .Z.getElementCoords(framesContainer).height + _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getElementCoords */ .Z.getElementCoords(framesContainer).height / 4;
    var timelineStep = timeline / frames.length;
    var scrollCoord = _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getScrollCoordsFromElement */ .Z.getScrollCoordsFromElement(framesContainer).windowBottom.fromBetweenTopMiddle;
    frames.forEach(function (frame, idx) {
      if (scrollCoord > timelineStep * idx) {
        frame.style.opacity = 1;
      } else {
        frame.style.opacity = 0;
      }
    });
  });
}); // hover effect in progress

var progressContent = Array.from(document.querySelectorAll('.progress__content'));
var progressContentImg = Array.from(document.querySelectorAll('.progress__content .hovered-video'));
var timeout = null;
animationHandlers.push(function () {
  progressContent.forEach(function (content, idx) {
    var _Renderer$getMouseWin = _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getMouseWindowCoords */ .Z.getMouseWindowCoords(),
        x = _Renderer$getMouseWin.x,
        y = _Renderer$getMouseWin.y;

    var progressScrollTop = _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getScrollCoordsFromElement */ .Z.getScrollCoordsFromElement(progress).windowTop.fromTop;

    if (window.scrollY + window.innerHeight < _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getElementCoords */ .Z.getElementCoords(progress).bottom) {
      progressContentImg[idx].style.transform = "translate(".concat(x + progressScrollTop, "px, ").concat(Math.min(y + progressScrollTop, y), "px)");
    } else {
      progressContentImg[idx].style.transform = "translate(".concat(x + progressScrollTop, "px, ").concat(y + (window.scrollY + window.innerHeight - _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getElementCoords */ .Z.getElementCoords(progress).bottom), "px)");
    }

    if (_renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.isElementHovered */ .Z.isElementHovered(content)) {
      clearTimeout(timeout);
      progressContentImg[idx].style.visibility = 'visible';
      progressContentImg[idx].style.opacity = 1;
      return;
    }

    progressContentImg[idx].style.opacity = 0;
    timeout = setTimeout(function () {
      progressContentImg[idx].style.visibility = 'hidden';
    }, 300);
  });
}); // horizontal scroll in progress

var progress = document.querySelector('.progress');
var progressFlowContainer = document.querySelector('.progress__flow-container');
animationHandlers.push(function () {
  var progressFlowContainerCoords = _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getElementCoords */ .Z.getElementCoords(progressFlowContainer);

  if (progressFlowContainerCoords.width !== parseInt(progress.style.height)) {
    progress.style.height = "".concat(progressFlowContainerCoords.width + window.innerHeight / 2, "px");
  }

  if (_renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.isElementVisible */ .Z.isElementVisible(progress)) {
    var progressScrollTop = _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getScrollCoordsFromElement */ .Z.getScrollCoordsFromElement(progress).windowTop.fromTop;
    progressFlowContainer.style.transform = "translateX(".concat(-progressScrollTop, "px)");
  }
}); // roadmap storytell

var roadmap = document.querySelector('.roadmap');
var roadmapPhase12 = document.querySelector('.roadmap .-phase12');
var roadmapPhase3 = document.querySelector('.roadmap .-phase3');
var roadmapPhase4 = document.querySelector('.roadmap .-phase4');
var roadmapPhase5 = document.querySelector('.roadmap .-phase5');
var el12 = {
  title: document.querySelector('.roadmap h2'),
  contentPhase1: document.querySelectorAll('.roadmap .-phase12 .roadmap__content-block')[0],
  contentPhase2: document.querySelectorAll('.roadmap .-phase12 .roadmap__content-block')[1],
  rocketTop: document.querySelectorAll('.roadmap .-phase12 .canvas img')[0],
  earth: document.querySelectorAll('.roadmap .-phase12 .canvas img')[1],
  moon: document.querySelectorAll('.roadmap .-phase12 .canvas img')[2],
  rocketSmall: document.querySelectorAll('.roadmap .-phase12 .canvas img')[3],
  hare: document.querySelectorAll('.roadmap .-phase12 .canvas img')[4],
  plate1: document.querySelectorAll('.roadmap .-phase12 .canvas img')[5],
  plate2: document.querySelectorAll('.roadmap .-phase12 .canvas img')[6]
};
var el3 = {
  contentPhase: document.querySelector('.roadmap .-phase3 .roadmap__content-block'),
  rubbish: document.querySelectorAll('.roadmap .-phase3 .canvas img')[0],
  ship: document.querySelectorAll('.roadmap .-phase3 .canvas img')[1],
  ships: document.querySelectorAll('.roadmap .-phase3 .canvas img')[2],
  planetShard: document.querySelectorAll('.roadmap .-phase3 .canvas img')[3]
};
var el4 = {
  contentPhase: document.querySelector('.roadmap .-phase4 .roadmap__flow-container'),
  collectionImage1Wrapper: document.querySelectorAll('.roadmap .-phase4 .roadmap__collections .collection')[0],
  collectionImage2Wrapper: document.querySelectorAll('.roadmap .-phase4 .roadmap__collections .collection')[1],
  collectionImage3Wrapper: document.querySelectorAll('.roadmap .-phase4 .roadmap__collections .collection')[2],
  collectionImage1: document.querySelectorAll('.roadmap .-phase4 .roadmap__collections .collection img')[0],
  collectionImage2: document.querySelectorAll('.roadmap .-phase4 .roadmap__collections .collection img')[1],
  collectionImage3: document.querySelectorAll('.roadmap .-phase4 .roadmap__collections .collection img')[2],
  saturn: document.querySelectorAll('.roadmap .-phase4 .canvas img')[0],
  planetZoomed: document.querySelectorAll('.roadmap .-phase4 .canvas img')[1]
};
// uppingShips: document.querySelectorAll('.roadmap .-phase4 .canvas img')[1],

animationHandlers.push(function () {
  var roadmapScrollTop = _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getScrollCoordsFromElement */ .Z.getScrollCoordsFromElement(roadmap).windowBottom.fromTop;

  if (_renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.isElementVisible */ .Z.isElementVisible(roadmap)) {
    transitionPhase12(roadmapScrollTop);
    transitionPhase3(roadmapScrollTop);
    transitionPhase4(roadmapScrollTop);
  }
});

function transitionPhase12(roadmapScrollTop) {
  if (roadmapScrollTop < _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getElementCoords */ .Z.getElementCoords(roadmapPhase3).bottom - _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getElementCoords */ .Z.getElementCoords(roadmap).top + window.innerHeight / 2) {
    el12.title.style.transform = "translate3d(0, ".concat(roadmapScrollTop / 10, "px, 0) scale(").concat(1 - roadmapScrollTop / 30000, ")");
    el12.rocketTop.style.transform = "translate3d(0, ".concat(-roadmapScrollTop / 3, "px, 0) scale(").concat(1 + roadmapScrollTop / 10000, ")");
    el12.moon.style.transform = "translate3d(0, ".concat(-roadmapScrollTop / 4, "px, 0)");
    el12.earth.style.transform = "translate3d(".concat(roadmapScrollTop / 10, "px, ").concat(roadmapScrollTop / 7, "px, 0) scale(").concat(1 - roadmapScrollTop / 5000, ")");
    el12.contentPhase1.style.transform = "translate3d(0, ".concat(roadmapScrollTop / 10, "px, 0) scale(").concat(Math.min(0.7 + roadmapScrollTop / 5000, 1), ")");
    el12.contentPhase2.style.transform = "translate3d(0, ".concat(roadmapScrollTop / 8, "px, 0) scale(").concat(Math.min(0.65 + roadmapScrollTop / 5000, 1), ")");
    el12.rocketSmall.style.transform = "translate3d(".concat(roadmapScrollTop / 5, "px, ").concat(-roadmapScrollTop, "px, 0)");
    el12.hare.style.transform = "translate3d(".concat(roadmapScrollTop / 4, "px, ").concat(-roadmapScrollTop / 4, "px, 0) scale(").concat(Math.min(0.65 + roadmapScrollTop / 3000, 4), ") rotate(").concat(roadmapScrollTop / 4, "deg)");
    el12.plate1.style.transform = "translate3d(".concat(roadmapScrollTop / 7, "px, 0, 0) scale(").concat(1 + roadmapScrollTop / 10000, ")");
    el12.plate2.style.transform = "translate3d(".concat(-roadmapScrollTop / 7, "px, ").concat(-roadmapScrollTop / 7, "px, 0)");
  }
}

function transitionPhase3(roadmapScrollTop) {
  if (roadmapScrollTop > _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getElementCoords */ .Z.getElementCoords(roadmapPhase3).top - _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getElementCoords */ .Z.getElementCoords(roadmap).top && roadmapScrollTop < _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getElementCoords */ .Z.getElementCoords(roadmapPhase4).bottom - _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getElementCoords */ .Z.getElementCoords(roadmap).top) {
    var resetedRoadmapScrollTop = roadmapScrollTop - (_renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getElementCoords */ .Z.getElementCoords(roadmapPhase3).top - _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getElementCoords */ .Z.getElementCoords(roadmap).top);
    el3.contentPhase.style.transform = "translate3d(0, ".concat(resetedRoadmapScrollTop / 5, "px, 0)");
    el3.rubbish.style.transform = "translate3d(0, ".concat(-roadmapScrollTop / 15, "px, 0)");
    el3.ship.style.transform = "translate3d(0, ".concat(-roadmapScrollTop / 5, "px, 0) scale(").concat(3.25 - roadmapScrollTop / 2000, ")");
    el3.planetShard.style.transform = "translate3d(".concat(roadmapScrollTop / 20, "px, ").concat(roadmapScrollTop / 20, "px, 0)");
  }
}

function transitionPhase4(roadmapScrollTop) {
  if (roadmapScrollTop > _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getElementCoords */ .Z.getElementCoords(roadmapPhase3).bottom - _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getElementCoords */ .Z.getElementCoords(roadmap).top && roadmapScrollTop < _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getElementCoords */ .Z.getElementCoords(roadmapPhase5).bottom - _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getElementCoords */ .Z.getElementCoords(roadmap).top) {
    var resetedRoadmapScrollTop = roadmapScrollTop - (_renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getElementCoords */ .Z.getElementCoords(roadmapPhase3).bottom - _renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.getElementCoords */ .Z.getElementCoords(roadmap).top);
    el4.contentPhase.style.transform = "translate3d(0, ".concat(resetedRoadmapScrollTop / 5, "px, 0)");

    if (window.innerWidth > 750) {
      el4.collectionImage1Wrapper.style.transform = "translate3d(0, ".concat(Math.max(650 - resetedRoadmapScrollTop / 2, 0), "px, 0)");
      el4.collectionImage2Wrapper.style.transform = "translate3d(0, ".concat(Math.max(700 - resetedRoadmapScrollTop / 2, 0), "px, 0)");
      el4.collectionImage3Wrapper.style.transform = "translate3d(0, ".concat(Math.max(600 - resetedRoadmapScrollTop / 2, 0), "px, 0)");
    } else {
      el4.collectionImage1Wrapper.style.transform = "translate3d(0, 0, 0)";
      el4.collectionImage2Wrapper.style.transform = "translate3d(0, 0, 0)";
      el4.collectionImage3Wrapper.style.transform = "translate3d(0, 0, 0)";
    }

    el4.collectionImage1Wrapper.style.maxHeight = "".concat(resetedRoadmapScrollTop / 3.25, "px");
    el4.collectionImage2Wrapper.style.maxHeight = "".concat(resetedRoadmapScrollTop / 3.25, "px");
    el4.collectionImage3Wrapper.style.maxHeight = "".concat(resetedRoadmapScrollTop / 3.25, "px");
    el4.collectionImage1.style.transform = "scale(".concat(Math.max(2 - resetedRoadmapScrollTop / 1500, 1), ")");
    el4.collectionImage2.style.transform = "scale(".concat(Math.max(2 - resetedRoadmapScrollTop / 1500, 1), ")");
    el4.collectionImage3.style.transform = "scale(".concat(Math.max(2 - resetedRoadmapScrollTop / 1500, 1), ")");
    el4.planetZoomed.style.transform = "translate3d(0, ".concat(-resetedRoadmapScrollTop / 5, "px, 0)");
    el4.saturn.style.transform = "translate3d(".concat(-resetedRoadmapScrollTop / 5, "px, ").concat(-resetedRoadmapScrollTop / 10, "px, 0)");
  }
}

_renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.useMouseEvent */ .Z.useMouseEvent();
_renderer__WEBPACK_IMPORTED_MODULE_3__/* .default.render */ .Z.render(animationHandlers);

/***/ }),

/***/ 2362:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function () {
  var s,
      i,
      c,
      a,
      o = {
    frameRate: 150,
    animationTime: 400,
    stepSize: 100,
    pulseAlgorithm: !0,
    pulseScale: 4,
    pulseNormalize: 1,
    accelerationDelta: 50,
    accelerationMax: 3,
    keyboardSupport: !0,
    arrowScroll: 50,
    fixedBackground: !0,
    excluded: ""
  },
      p = o,
      u = !1,
      d = !1,
      n = {
    x: 0,
    y: 0
  },
      f = !1,
      m = document.documentElement,
      l = [],
      h = /^Mac/.test(navigator.platform),
      w = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    spacebar: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36
  },
      v = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
  };

  function y() {
    if (!f && document.body) {
      f = !0;
      var e = document.body,
          t = document.documentElement,
          o = window.innerHeight,
          n = e.scrollHeight;
      if (m = 0 <= document.compatMode.indexOf("CSS") ? t : e, s = e, p.keyboardSupport && Y("keydown", x), top != self) d = !0;else if (Q && o < n && (e.offsetHeight <= o || t.offsetHeight <= o)) {
        var r,
            a = document.createElement("div");
        a.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + m.scrollHeight + "px", document.body.appendChild(a), c = function c() {
          r = r || setTimeout(function () {
            u || (a.style.height = "0", a.style.height = m.scrollHeight + "px", r = null);
          }, 500);
        }, setTimeout(c, 10), Y("resize", c);

        if ((i = new R(c)).observe(e, {
          attributes: !0,
          childList: !0,
          characterData: !1
        }), m.offsetHeight <= o) {
          var l = document.createElement("div");
          l.style.clear = "both", e.appendChild(l);
        }
      }
      p.fixedBackground || u || (e.style.backgroundAttachment = "scroll", t.style.backgroundAttachment = "scroll");
    }
  }

  var b = [],
      g = !1,
      r = Date.now();

  function S(d, f, m) {
    if (function (e, t) {
      e = 0 < e ? 1 : -1, t = 0 < t ? 1 : -1, n.x === e && n.y === t || (n.x = e, n.y = t, b = [], r = 0);
    }(f, m), 1 != p.accelerationMax) {
      var e = Date.now() - r;

      if (e < p.accelerationDelta) {
        var t = (1 + 50 / e) / 2;
        1 < t && (t = Math.min(t, p.accelerationMax), f *= t, m *= t);
      }

      r = Date.now();
    }

    if (b.push({
      x: f,
      y: m,
      lastX: f < 0 ? .99 : -.99,
      lastY: m < 0 ? .99 : -.99,
      start: Date.now()
    }), !g) {
      var o = q(),
          h = d === o || d === document.body;
      null == d.$scrollBehavior && function (e) {
        var t = M(e);

        if (null == B[t]) {
          var o = getComputedStyle(e, "")["scroll-behavior"];
          B[t] = "smooth" == o;
        }

        return B[t];
      }(d) && (d.$scrollBehavior = d.style.scrollBehavior, d.style.scrollBehavior = "auto");

      var w = function w(e) {
        for (var t = Date.now(), o = 0, n = 0, r = 0; r < b.length; r++) {
          var a = b[r],
              l = t - a.start,
              i = l >= p.animationTime,
              c = i ? 1 : l / p.animationTime;
          p.pulseAlgorithm && (c = F(c));
          var s = a.x * c - a.lastX >> 0,
              u = a.y * c - a.lastY >> 0;
          o += s, n += u, a.lastX += s, a.lastY += u, i && (b.splice(r, 1), r--);
        }

        h ? window.scrollBy(o, n) : (o && (d.scrollLeft += o), n && (d.scrollTop += n)), f || m || (b = []), b.length ? j(w, d, 1e3 / p.frameRate + 1) : (g = !1, null != d.$scrollBehavior && (d.style.scrollBehavior = d.$scrollBehavior, d.$scrollBehavior = null));
      };

      j(w, d, 0), g = !0;
    }
  }

  function e(e) {
    f || y();
    var t = e.target;
    if (e.defaultPrevented || e.ctrlKey) return !0;
    if (N(s, "embed") || N(t, "embed") && /\.pdf/i.test(t.src) || N(s, "object") || t.shadowRoot) return !0;
    var o = -e.wheelDeltaX || e.deltaX || 0,
        n = -e.wheelDeltaY || e.deltaY || 0;
    h && (e.wheelDeltaX && K(e.wheelDeltaX, 120) && (o = e.wheelDeltaX / Math.abs(e.wheelDeltaX) * -120), e.wheelDeltaY && K(e.wheelDeltaY, 120) && (n = e.wheelDeltaY / Math.abs(e.wheelDeltaY) * -120)), o || n || (n = -e.wheelDelta || 0), 1 === e.deltaMode && (o *= 40, n *= 40);
    var r = z(t);
    return r ? !!function (e) {
      if (!e) return;
      l.length || (l = [e, e, e]);
      e = Math.abs(e), l.push(e), l.shift(), clearTimeout(a), a = setTimeout(function () {
        try {
          localStorage.SS_deltaBuffer = l.join(",");
        } catch (e) {}
      }, 1e3);
      var t = 120 < e && P(e),
          o = !P(120) && !P(100) && !t;
      return e < 50 || o;
    }(n) || (1.2 < Math.abs(o) && (o *= p.stepSize / 120), 1.2 < Math.abs(n) && (n *= p.stepSize / 120), S(r, o, n), e.preventDefault(), void C()) : !d || !W || (Object.defineProperty(e, "target", {
      value: window.frameElement
    }), parent.wheel(e));
  }

  function x(e) {
    var t = e.target,
        o = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== w.spacebar;
    document.body.contains(s) || (s = document.activeElement);
    var n = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if (e.defaultPrevented || /^(textarea|select|embed|object)$/i.test(t.nodeName) || N(t, "input") && !n.test(t.type) || N(s, "video") || function (e) {
      var t = e.target,
          o = !1;
      if (-1 != document.URL.indexOf("www.youtube.com/watch")) do {
        if (o = t.classList && t.classList.contains("html5-video-controls")) break;
      } while (t = t.parentNode);
      return o;
    }(e) || t.isContentEditable || o) return !0;
    if ((N(t, "button") || N(t, "input") && n.test(t.type)) && e.keyCode === w.spacebar) return !0;
    if (N(t, "input") && "radio" == t.type && v[e.keyCode]) return !0;
    var r = 0,
        a = 0,
        l = z(s);
    if (!l) return !d || !W || parent.keydown(e);
    var i = l.clientHeight;

    switch (l == document.body && (i = window.innerHeight), e.keyCode) {
      case w.up:
        a = -p.arrowScroll;
        break;

      case w.down:
        a = p.arrowScroll;
        break;

      case w.spacebar:
        a = -(e.shiftKey ? 1 : -1) * i * .9;
        break;

      case w.pageup:
        a = .9 * -i;
        break;

      case w.pagedown:
        a = .9 * i;
        break;

      case w.home:
        l == document.body && document.scrollingElement && (l = document.scrollingElement), a = -l.scrollTop;
        break;

      case w.end:
        var c = l.scrollHeight - l.scrollTop - i;
        a = 0 < c ? 10 + c : 0;
        break;

      case w.left:
        r = -p.arrowScroll;
        break;

      case w.right:
        r = p.arrowScroll;
        break;

      default:
        return !0;
    }

    S(l, r, a), e.preventDefault(), C();
  }

  function t(e) {
    s = e.target;
  }

  var k,
      D,
      M = (k = 0, function (e) {
    return e.uniqueID || (e.uniqueID = k++);
  }),
      E = {},
      T = {},
      B = {};

  function C() {
    clearTimeout(D), D = setInterval(function () {
      E = T = B = {};
    }, 1e3);
  }

  function H(e, t, o) {
    for (var n = o ? E : T, r = e.length; r--;) {
      n[M(e[r])] = t;
    }

    return t;
  }

  function z(e) {
    var t = [],
        o = document.body,
        n = m.scrollHeight;

    do {
      var r = ( false ? 0 : T)[M(e)];
      if (r) return H(t, r);

      if (t.push(e), n === e.scrollHeight) {
        var a = O(m) && O(o) || X(m);
        if (d && L(m) || !d && a) return H(t, q());
      } else if (L(e) && X(e)) return H(t, e);
    } while (e = e.parentElement);
  }

  function L(e) {
    return e.clientHeight + 10 < e.scrollHeight;
  }

  function O(e) {
    return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y");
  }

  function X(e) {
    var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
    return "scroll" === t || "auto" === t;
  }

  function Y(e, t, o) {
    window.addEventListener(e, t, o || !1);
  }

  function A(e, t, o) {
    window.removeEventListener(e, t, o || !1);
  }

  function N(e, t) {
    return e && (e.nodeName || "").toLowerCase() === t.toLowerCase();
  }

  if (window.localStorage && localStorage.SS_deltaBuffer) try {
    l = localStorage.SS_deltaBuffer.split(",");
  } catch (e) {}

  function K(e, t) {
    return Math.floor(e / t) == e / t;
  }

  function P(e) {
    return K(l[0], e) && K(l[1], e) && K(l[2], e);
  }

  var $,
      j = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e, t, o) {
    window.setTimeout(e, o || 1e3 / 60);
  },
      R = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
      q = ($ = document.scrollingElement, function () {
    if (!$) {
      var e = document.createElement("div");
      e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e);
      var t = document.body.scrollTop;
      document.documentElement.scrollTop, window.scrollBy(0, 3), $ = document.body.scrollTop != t ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(e);
    }

    return $;
  });

  function V(e) {
    var t;
    return ((e *= p.pulseScale) < 1 ? e - (1 - Math.exp(-e)) : (e -= 1, (t = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - t))) * p.pulseNormalize;
  }

  function F(e) {
    return 1 <= e ? 1 : e <= 0 ? 0 : (1 == p.pulseNormalize && (p.pulseNormalize /= V(1)), V(e));
  }

  var I = window.navigator.userAgent,
      _ = /Edge/.test(I),
      W = /chrome/i.test(I) && !_,
      U = /safari/i.test(I) && !_,
      G = /mobile/i.test(I),
      J = /Windows NT 6.1/i.test(I) && /rv:11/i.test(I),
      Q = U && (/Version\/8/i.test(I) || /Version\/9/i.test(I)),
      Z = (W || U || J) && !G,
      ee = !1;

  try {
    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
      get: function get() {
        ee = !0;
      }
    }));
  } catch (e) {}

  var te = !!ee && {
    passive: !1
  },
      oe = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  function ne(e) {
    for (var t in e) {
      o.hasOwnProperty(t) && (p[t] = e[t]);
    }
  }

  oe && Z && (Y(oe, e, te), Y("mousedown", t), Y("load", y)), ne.destroy = function () {
    i && i.disconnect(), A(oe, e), A("mousedown", t), A("keydown", x), A("resize", c), A("load", y);
  }, window.SmoothScrollOptions && ne(window.SmoothScrollOptions),  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return ne;
  }).call(exports, __webpack_require__, exports, module),
    __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}();

/***/ }),

/***/ 1931:
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var expire = 1640818800;
initClock(expire);
// initFormsQuiz();

function initClock(finishDate) {
  var clock = document.getElementById("quizTimer");
  var hoursElement = clock.querySelector('[data-clock="hours"]');
  var minsElement = clock.querySelector('[data-clock="minutes"]');
  var secondsElement = clock.querySelector('[data-clock="seconds"]');
  var date = Date.now();

  function launchClock() {
    var diff = Date.now() - date;

    if (diff < 1000) {
      return setTimeout(launchClock, 1000 - diff);
    } else {
      date = Date.now();
    }

    let startDate = new Date("Dec 30, 2021 20:47:00").getTime();
    let now = new Date().getTime();
    let diff2 = (startDate - now);

    var finish = (finishDate - Date.now()) / 1000;
    let days = Math.floor(diff2 / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = parseInt(finish / 60 % 60, 10);
    var ss = parseInt(finish % 60, 10);
    var okss = parseInt(60+ss);
    var okmm = parseInt(60+mm);
    var okhh = parseInt(24+hours);
    okhh = parseInt(okhh*days);
    var ssToString2 = String(okss < 10 ? "0" + okss : okss);
    var mmToString = String(okmm < 10 ? "0" + okmm : okmm);
    var hhToString = "00";
    hoursElement.innerHTML = "                        \n            <span class=\"quizTimer__item\">".concat(hhToString[0], "</span>\n            <span class=\"quizTimer__item\">").concat(hhToString[1], "</span>\n        ");
    minsElement.innerHTML = "                        \n            <span class=\"quizTimer__item\">".concat(mmToString[0], "</span>\n            <span class=\"quizTimer__item\">").concat(mmToString[1], "</span>\n        ");
    secondsElement.innerHTML = "                        \n            <span class=\"quizTimer__item\">".concat(ssToString2[0], "</span>\n            <span class=\"quizTimer__item\">").concat(ssToString2[1], "</span>\n        ");
    requestAnimationFrame(launchClock);
  }

  launchClock();
}

function initFormsQuiz() {
  var onSubmit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
  // Base settings
  var MAX_STAGE = null; // Maximal stage for function setStage to install

  var parent = document.getElementById("quiz");
  var reqBtn = document.getElementById("reqQuiz");
  var closeBtn = parent.querySelector("[data-quiz-close]");

  var elements = _toConsumableArray(parent.querySelectorAll("[data-quiz-stage]")).map(function (element) {
    var quizStage = Number(element.dataset.quizStage);

    if (MAX_STAGE === null) {
      MAX_STAGE = quizStage;
    }

    if (quizStage === 1) {
      initStageOne(element);
    } else if (quizStage === 2) {
      initStageTwo(element);
    }

    MAX_STAGE = MAX_STAGE < quizStage ? quizStage : MAX_STAGE;
    return {
      element: element,
      quizStage: quizStage
    };
  });

  var inputs = _toConsumableArray(parent.querySelectorAll("input"));

  var data = {}; // Save values from inputs and send them to Server 

  var currentStage = 1;
  inputs.forEach(inputHandler); // Set handlers for change input values

  setStage(currentStage); // Install init stage

  function setStage(stage) {
    clearClasses();
    currentStage = Math.min(stage, MAX_STAGE);

    var _iterator = _createForOfIteratorHelper(elements),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _step.value,
            element = _step$value.element,
            quizStage = _step$value.quizStage;
        element.style.display = currentStage === quizStage ? "" : "none";
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (currentStage !== 1) {
      return;
    }

    for (var _i = 0, _Object$keys = Object.keys(data); _i < _Object$keys.length; _i++) {
      var prop = _Object$keys[_i];
      data[prop] = null;
    }
  }

  function inputHandler(item) {
    item.addEventListener("change", handler);

    function handler(event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;
      data[name] = value;
    }
  } // Handlers


  reqBtn.addEventListener("click", function () {
    document.body.classList.add("quizOpen");
    setStage(1);
  });
  closeBtn.addEventListener("click", function () {
    document.body.classList.remove("quizOpen");
  }); // Validators
  // const TWITTER_VAL = /(^|[^@\w])@(\w{1,15})\b/;
  // const DISCORD_VAL = /^.{3,32}#[0-9]{4}$/;
  // const ETHEREUM_VAL = /^0x[a-fA-F0-9]{40}$/;
  // const TELEGRAM_VAL = /.*[\W](@(?=.{5,64}(?:\s|$))(?![_])(?!.*[_]{2})[a-zA-Z0-9_]+(?<![_.])).*/;
  // const EMAIL_VAL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  // Current Form Handlers

  function clearClasses() {
    document.querySelectorAll(".not-valid").forEach(function (item) {
      item.classList.remove("not-valid");
    });
  }

  function initStageOne(parent) {
    var btn = parent.querySelector("button");
    var twitter = parent.querySelector(".input-twitter");
    var discord = parent.querySelector(".input-discord");
    btn.addEventListener("click", function () {
      clearClasses();

      if (!data.twitter || data.twitter.trim() == "") {
        return twitter.classList.add("not-valid");
      }

      if (!data.discord || data.discord.trim() == "") {
        return discord.classList.add("not-valid");
      }

      setStage(2);
    });
  }

function sendData( data ) {
  console.log( 'Sending data' );

  const XHR = new XMLHttpRequest();

  let urlEncodedData = "",
      urlEncodedDataPairs = [],
      name;

  // Turn the data object into an array of URL-encoded key/value pairs.
  for( name in data ) {
    urlEncodedDataPairs.push( encodeURIComponent( name ) + '=' + encodeURIComponent( data[name] ) );
  }

  // Combine the pairs into a single string and replace all %-encoded spaces to
  // the '+' character; matches the behaviour of browser form submissions.
  urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );

  console.log(urlEncodedData);
  // Define what happens on successful data submission
  XHR.addEventListener( 'load', function(event) {
    //alert( 'Yeah! Data sent and response loaded.' );
  } );

  // Define what happens in case of error
  XHR.addEventListener( 'error', function(event) {
    alert( 'Oops! Something went wrong.' );
  } );

  // Set up our request
  XHR.open( 'POST', 'https://niftynafty.com/assets/send.php' );

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

  // Finally, send our data.
  XHR.send( urlEncodedData );
}

  function initStageTwo(parent) {
    var btn = parent.querySelector("button");
    var ethereum = parent.querySelector(".input-eth");
    var telegram = parent.querySelector(".input-tg");
    var email = parent.querySelector(".input-email");
    btn.addEventListener("click", function () {
      clearClasses();

      if (!data.eth || data.eth.trim() == "") {
        return ethereum.classList.add("not-valid");
      }

      // if (!data.telegram && !data.email || data.telegram && data.email && data.telegram.trim() == "" && data.email.trim() == "") {
      //   telegram.classList.add("not-valid");
      //   email.classList.add("not-valid");
      //   return;
      // }

      onSubmit(data);
      sendData(data);
      setStage(3);
    });
  }
}

/***/ }),

/***/ 7645:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: !0
}), exports.Z = void 0;
var _default = {
  mouse: null,
  getElementCoords: function getElementCoords(a) {
    return {
      top: a.getBoundingClientRect().top + window.scrollY,
      bottom: a.getBoundingClientRect().bottom + window.scrollY,
      left: a.getBoundingClientRect().left + window.scrollX,
      right: a.getBoundingClientRect().right + window.scrollX,
      height: a.getBoundingClientRect().height,
      width: a.getBoundingClientRect().width
    };
  },
  getScrollCoordsFromElement: function getScrollCoordsFromElement(a) {
    var b = this.getElementCoords(a);
    return {
      windowTop: {
        fromTop: window.scrollY - b.top,
        fromBetweenTopMiddle: window.scrollY - (b.top + b.height / 4),
        fromMiddle: window.scrollY - (b.top + b.height / 2),
        fromBetweenMiddleBottom: window.scrollY - (b.bottom - b.height / 4),
        fromBottom: window.scrollY - b.bottom
      },
      windowBottom: {
        fromTop: window.scrollY + window.innerHeight - b.top,
        fromBetweenTopMiddle: window.scrollY + window.innerHeight - (b.top + b.height / 4),
        fromMiddle: window.scrollY + window.innerHeight - (b.top + b.height / 2),
        fromBetweenMiddleBottom: window.scrollY + window.innerHeight - (b.bottom - b.height / 4),
        fromBottom: window.scrollY + window.innerHeight - b.bottom
      }
    };
  },
  getMouseWindowCoords: function getMouseWindowCoords() {
    return null === this.mouse ? {
      x: null,
      y: null
    } : {
      x: this.mouse.clientX,
      y: this.mouse.clientY
    };
  },
  getMouseDocumentCoords: function getMouseDocumentCoords() {
    return null === this.mouse ? {
      x: null,
      y: null
    } : {
      x: this.mouse.pageX,
      y: this.mouse.pageY
    };
  },
  isElementVisible: function isElementVisible(a) {
    var b = this.getElementCoords(a);
    return b.bottom >= window.scrollY && b.top <= window.scrollY + window.innerHeight;
  },
  isElementHovered: function isElementHovered(a) {
    var b = this.getElementCoords(a),
        c = this.getMouseDocumentCoords();
    return b.top < c.y && b.bottom > c.y && b.left < c.x && b.right > c.x;
  },
  useMouseEvent: function useMouseEvent() {
    var a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : document;
    a.addEventListener("mousemove", function (a) {
      this.mouse = a;
    }.bind(this)), a.addEventListener("mouseenter", function (a) {
      this.mouse = a;
    }.bind(this));
  },
  render: function render(a) {
    requestAnimationFrame(function c(b) {
      a.forEach(function (a) {
        return a(b);
      }), requestAnimationFrame(c);
    });
  }
};
exports.Z = _default;

/***/ }),

/***/ 7353:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
// extracted by mini-css-extract-plugin

    if(true) {
      // 1640369231980
      var cssReload = __webpack_require__(2826)(module.id, {"publicPath":"../","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

/******/  });
/************************************************************************/
/******/  // The module cache
/******/  var __webpack_module_cache__ = {};
/******/  
/******/  // The require function
/******/  function __webpack_require__(moduleId) {
/******/    // Check if module is in cache
/******/    var cachedModule = __webpack_module_cache__[moduleId];
/******/    if (cachedModule !== undefined) {
/******/      if (cachedModule.error !== undefined) throw cachedModule.error;
/******/      return cachedModule.exports;
/******/    }
/******/    // Create a new module (and put it into the cache)
/******/    var module = __webpack_module_cache__[moduleId] = {
/******/      id: moduleId,
/******/      loaded: false,
/******/      exports: {}
/******/    };
/******/  
/******/    // Execute the module function
/******/    try {
/******/      var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/      __webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/      module = execOptions.module;
/******/      execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/    } catch(e) {
/******/      module.error = e;
/******/      throw e;
/******/    }
/******/  
/******/    // Flag the module as loaded
/******/    module.loaded = true;
/******/  
/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }
/******/  
/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = __webpack_modules__;
/******/  
/******/  // expose the module cache
/******/  __webpack_require__.c = __webpack_module_cache__;
/******/  
/******/  // expose the module execution interceptor
/******/  __webpack_require__.i = [];
/******/  
/************************************************************************/
/******/  /* webpack/runtime/chunk loaded */
/******/  (() => {
/******/    var deferred = [];
/******/    __webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/      if(chunkIds) {
/******/        priority = priority || 0;
/******/        for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/        deferred[i] = [chunkIds, fn, priority];
/******/        return;
/******/      }
/******/      var notFulfilled = Infinity;
/******/      for (var i = 0; i < deferred.length; i++) {
/******/        var [chunkIds, fn, priority] = deferred[i];
/******/        var fulfilled = true;
/******/        for (var j = 0; j < chunkIds.length; j++) {
/******/          if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/            chunkIds.splice(j--, 1);
/******/          } else {
/******/            fulfilled = false;
/******/            if(priority < notFulfilled) notFulfilled = priority;
/******/          }
/******/        }
/******/        if(fulfilled) {
/******/          deferred.splice(i--, 1)
/******/          result = fn();
/******/        }
/******/      }
/******/      return result;
/******/    };
/******/  })();
/******/  
/******/  /* webpack/runtime/compat get default export */
/******/  (() => {
/******/    // getDefaultExport function for compatibility with non-harmony modules
/******/    __webpack_require__.n = (module) => {
/******/      var getter = module && module.__esModule ?
/******/        () => (module['default']) :
/******/        () => (module);
/******/      __webpack_require__.d(getter, { a: getter });
/******/      return getter;
/******/    };
/******/  })();
/******/  
/******/  /* webpack/runtime/define property getters */
/******/  (() => {
/******/    // define getter functions for harmony exports
/******/    __webpack_require__.d = (exports, definition) => {
/******/      for(var key in definition) {
/******/        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/          Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/        }
/******/      }
/******/    };
/******/  })();
/******/  
/******/  /* webpack/runtime/get javascript update chunk filename */
/******/  (() => {
/******/    // This function allow to reference all chunks
/******/    __webpack_require__.hu = (chunkId) => {
/******/      // return url for filenames based on template
/******/      return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/    };
/******/  })();
/******/  
/******/  /* webpack/runtime/get mini-css chunk filename */
/******/  (() => {
/******/    // This function allow to reference all chunks
/******/    __webpack_require__.miniCssF = (chunkId) => {
/******/      // return url for filenames based on template
/******/      return undefined;
/******/    };
/******/  })();
/******/  
/******/  /* webpack/runtime/get update manifest filename */
/******/  (() => {
/******/    __webpack_require__.hmrF = () => ("index." + __webpack_require__.h() + ".hot-update.json");
/******/  })();
/******/  
/******/  /* webpack/runtime/getFullHash */
/******/  (() => {
/******/    __webpack_require__.h = () => ("e80816bc8b1d4b02d735")
/******/  })();
/******/  
/******/  /* webpack/runtime/global */
/******/  (() => {
/******/    __webpack_require__.g = (function() {
/******/      if (typeof globalThis === 'object') return globalThis;
/******/      try {
/******/        return this || new Function('return this')();
/******/      } catch (e) {
/******/        if (typeof window === 'object') return window;
/******/      }
/******/    })();
/******/  })();
/******/  
/******/  /* webpack/runtime/hasOwnProperty shorthand */
/******/  (() => {
/******/    __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/  })();
/******/  
/******/  /* webpack/runtime/load script */
/******/  (() => {
/******/    var inProgress = {};
/******/    // data-webpack is not used as build has no uniqueName
/******/    // loadScript function to load a script via script tag
/******/    __webpack_require__.l = (url, done, key, chunkId) => {
/******/      if(inProgress[url]) { inProgress[url].push(done); return; }
/******/      var script, needAttach;
/******/      if(key !== undefined) {
/******/        var scripts = document.getElementsByTagName("script");
/******/        for(var i = 0; i < scripts.length; i++) {
/******/          var s = scripts[i];
/******/          if(s.getAttribute("src") == url) { script = s; break; }
/******/        }
/******/      }
/******/      if(!script) {
/******/        needAttach = true;
/******/        script = document.createElement('script');
/******/    
/******/        script.charset = 'utf-8';
/******/        script.timeout = 120;
/******/        if (__webpack_require__.nc) {
/******/          script.setAttribute("nonce", __webpack_require__.nc);
/******/        }
/******/    
/******/        script.src = url;
/******/      }
/******/      inProgress[url] = [done];
/******/      var onScriptComplete = (prev, event) => {
/******/        // avoid mem leaks in IE.
/******/        script.onerror = script.onload = null;
/******/        clearTimeout(timeout);
/******/        var doneFns = inProgress[url];
/******/        delete inProgress[url];
/******/        script.parentNode && script.parentNode.removeChild(script);
/******/        doneFns && doneFns.forEach((fn) => (fn(event)));
/******/        if(prev) return prev(event);
/******/      }
/******/      ;
/******/      var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/      script.onerror = onScriptComplete.bind(null, script.onerror);
/******/      script.onload = onScriptComplete.bind(null, script.onload);
/******/      needAttach && document.head.appendChild(script);
/******/    };
/******/  })();
/******/  
/******/  /* webpack/runtime/node module decorator */
/******/  (() => {
/******/    __webpack_require__.nmd = (module) => {
/******/      module.paths = [];
/******/      if (!module.children) module.children = [];
/******/      return module;
/******/    };
/******/  })();
/******/  
/******/  /* webpack/runtime/hot module replacement */
/******/  (() => {
/******/    var currentModuleData = {};
/******/    var installedModules = __webpack_require__.c;
/******/    
/******/    // module and require creation
/******/    var currentChildModule;
/******/    var currentParents = [];
/******/    
/******/    // status
/******/    var registeredStatusHandlers = [];
/******/    var currentStatus = "idle";
/******/    
/******/    // while downloading
/******/    var blockingPromises;
/******/    
/******/    // The update info
/******/    var currentUpdateApplyHandlers;
/******/    var queuedInvalidatedModules;
/******/    
/******/    // eslint-disable-next-line no-unused-vars
/******/    __webpack_require__.hmrD = currentModuleData;
/******/    
/******/    __webpack_require__.i.push(function (options) {
/******/      var module = options.module;
/******/      var require = createRequire(options.require, options.id);
/******/      module.hot = createModuleHotObject(options.id, module);
/******/      module.parents = currentParents;
/******/      module.children = [];
/******/      currentParents = [];
/******/      options.require = require;
/******/    });
/******/    
/******/    __webpack_require__.hmrC = {};
/******/    __webpack_require__.hmrI = {};
/******/    
/******/    function createRequire(require, moduleId) {
/******/      var me = installedModules[moduleId];
/******/      if (!me) return require;
/******/      var fn = function (request) {
/******/        if (me.hot.active) {
/******/          if (installedModules[request]) {
/******/            var parents = installedModules[request].parents;
/******/            if (parents.indexOf(moduleId) === -1) {
/******/              parents.push(moduleId);
/******/            }
/******/          } else {
/******/            currentParents = [moduleId];
/******/            currentChildModule = request;
/******/          }
/******/          if (me.children.indexOf(request) === -1) {
/******/            me.children.push(request);
/******/          }
/******/        } else {
/******/          console.warn(
/******/            "[HMR] unexpected require(" +
/******/              request +
/******/              ") from disposed module " +
/******/              moduleId
/******/          );
/******/          currentParents = [];
/******/        }
/******/        return require(request);
/******/      };
/******/      var createPropertyDescriptor = function (name) {
/******/        return {
/******/          configurable: true,
/******/          enumerable: true,
/******/          get: function () {
/******/            return require[name];
/******/          },
/******/          set: function (value) {
/******/            require[name] = value;
/******/          }
/******/        };
/******/      };
/******/      for (var name in require) {
/******/        if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/          Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/        }
/******/      }
/******/      fn.e = function (chunkId) {
/******/        return trackBlockingPromise(require.e(chunkId));
/******/      };
/******/      return fn;
/******/    }
/******/    
/******/    function createModuleHotObject(moduleId, me) {
/******/      var _main = currentChildModule !== moduleId;
/******/      var hot = {
/******/        // private stuff
/******/        _acceptedDependencies: {},
/******/        _acceptedErrorHandlers: {},
/******/        _declinedDependencies: {},
/******/        _selfAccepted: false,
/******/        _selfDeclined: false,
/******/        _selfInvalidated: false,
/******/        _disposeHandlers: [],
/******/        _main: _main,
/******/        _requireSelf: function () {
/******/          currentParents = me.parents.slice();
/******/          currentChildModule = _main ? undefined : moduleId;
/******/          __webpack_require__(moduleId);
/******/        },
/******/    
/******/        // Module API
/******/        active: true,
/******/        accept: function (dep, callback, errorHandler) {
/******/          if (dep === undefined) hot._selfAccepted = true;
/******/          else if (typeof dep === "function") hot._selfAccepted = dep;
/******/          else if (typeof dep === "object" && dep !== null) {
/******/            for (var i = 0; i < dep.length; i++) {
/******/              hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/              hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/            }
/******/          } else {
/******/            hot._acceptedDependencies[dep] = callback || function () {};
/******/            hot._acceptedErrorHandlers[dep] = errorHandler;
/******/          }
/******/        },
/******/        decline: function (dep) {
/******/          if (dep === undefined) hot._selfDeclined = true;
/******/          else if (typeof dep === "object" && dep !== null)
/******/            for (var i = 0; i < dep.length; i++)
/******/              hot._declinedDependencies[dep[i]] = true;
/******/          else hot._declinedDependencies[dep] = true;
/******/        },
/******/        dispose: function (callback) {
/******/          hot._disposeHandlers.push(callback);
/******/        },
/******/        addDisposeHandler: function (callback) {
/******/          hot._disposeHandlers.push(callback);
/******/        },
/******/        removeDisposeHandler: function (callback) {
/******/          var idx = hot._disposeHandlers.indexOf(callback);
/******/          if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/        },
/******/        invalidate: function () {
/******/          this._selfInvalidated = true;
/******/          switch (currentStatus) {
/******/            case "idle":
/******/              currentUpdateApplyHandlers = [];
/******/              Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/                __webpack_require__.hmrI[key](
/******/                  moduleId,
/******/                  currentUpdateApplyHandlers
/******/                );
/******/              });
/******/              setStatus("ready");
/******/              break;
/******/            case "ready":
/******/              Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/                __webpack_require__.hmrI[key](
/******/                  moduleId,
/******/                  currentUpdateApplyHandlers
/******/                );
/******/              });
/******/              break;
/******/            case "prepare":
/******/            case "check":
/******/            case "dispose":
/******/            case "apply":
/******/              (queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/                moduleId
/******/              );
/******/              break;
/******/            default:
/******/              // ignore requests in error states
/******/              break;
/******/          }
/******/        },
/******/    
/******/        // Management API
/******/        check: hotCheck,
/******/        apply: hotApply,
/******/        status: function (l) {
/******/          if (!l) return currentStatus;
/******/          registeredStatusHandlers.push(l);
/******/        },
/******/        addStatusHandler: function (l) {
/******/          registeredStatusHandlers.push(l);
/******/        },
/******/        removeStatusHandler: function (l) {
/******/          var idx = registeredStatusHandlers.indexOf(l);
/******/          if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/        },
/******/    
/******/        //inherit from previous dispose call
/******/        data: currentModuleData[moduleId]
/******/      };
/******/      currentChildModule = undefined;
/******/      return hot;
/******/    }
/******/    
/******/    function setStatus(newStatus) {
/******/      currentStatus = newStatus;
/******/      for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/        registeredStatusHandlers[i].call(null, newStatus);
/******/    }
/******/    
/******/    function trackBlockingPromise(promise) {
/******/      switch (currentStatus) {
/******/        case "ready":
/******/          setStatus("prepare");
/******/          blockingPromises.push(promise);
/******/          waitForBlockingPromises(function () {
/******/            setStatus("ready");
/******/          });
/******/          return promise;
/******/        case "prepare":
/******/          blockingPromises.push(promise);
/******/          return promise;
/******/        default:
/******/          return promise;
/******/      }
/******/    }
/******/    
/******/    function waitForBlockingPromises(fn) {
/******/      if (blockingPromises.length === 0) return fn();
/******/      var blocker = blockingPromises;
/******/      blockingPromises = [];
/******/      return Promise.all(blocker).then(function () {
/******/        return waitForBlockingPromises(fn);
/******/      });
/******/    }
/******/    
/******/    function hotCheck(applyOnUpdate) {
/******/      if (currentStatus !== "idle") {
/******/        throw new Error("check() is only allowed in idle status");
/******/      }
/******/      setStatus("check");
/******/      return __webpack_require__.hmrM().then(function (update) {
/******/        if (!update) {
/******/          setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/          return null;
/******/        }
/******/    
/******/        setStatus("prepare");
/******/    
/******/        var updatedModules = [];
/******/        blockingPromises = [];
/******/        currentUpdateApplyHandlers = [];
/******/    
/******/        return Promise.all(
/******/          Object.keys(__webpack_require__.hmrC).reduce(function (
/******/            promises,
/******/            key
/******/          ) {
/******/            __webpack_require__.hmrC[key](
/******/              update.c,
/******/              update.r,
/******/              update.m,
/******/              promises,
/******/              currentUpdateApplyHandlers,
/******/              updatedModules
/******/            );
/******/            return promises;
/******/          },
/******/          [])
/******/        ).then(function () {
/******/          return waitForBlockingPromises(function () {
/******/            if (applyOnUpdate) {
/******/              return internalApply(applyOnUpdate);
/******/            } else {
/******/              setStatus("ready");
/******/    
/******/              return updatedModules;
/******/            }
/******/          });
/******/        });
/******/      });
/******/    }
/******/    
/******/    function hotApply(options) {
/******/      if (currentStatus !== "ready") {
/******/        return Promise.resolve().then(function () {
/******/          throw new Error("apply() is only allowed in ready status");
/******/        });
/******/      }
/******/      return internalApply(options);
/******/    }
/******/    
/******/    function internalApply(options) {
/******/      options = options || {};
/******/    
/******/      applyInvalidatedModules();
/******/    
/******/      var results = currentUpdateApplyHandlers.map(function (handler) {
/******/        return handler(options);
/******/      });
/******/      currentUpdateApplyHandlers = undefined;
/******/    
/******/      var errors = results
/******/        .map(function (r) {
/******/          return r.error;
/******/        })
/******/        .filter(Boolean);
/******/    
/******/      if (errors.length > 0) {
/******/        setStatus("abort");
/******/        return Promise.resolve().then(function () {
/******/          throw errors[0];
/******/        });
/******/      }
/******/    
/******/      // Now in "dispose" phase
/******/      setStatus("dispose");
/******/    
/******/      results.forEach(function (result) {
/******/        if (result.dispose) result.dispose();
/******/      });
/******/    
/******/      // Now in "apply" phase
/******/      setStatus("apply");
/******/    
/******/      var error;
/******/      var reportError = function (err) {
/******/        if (!error) error = err;
/******/      };
/******/    
/******/      var outdatedModules = [];
/******/      results.forEach(function (result) {
/******/        if (result.apply) {
/******/          var modules = result.apply(reportError);
/******/          if (modules) {
/******/            for (var i = 0; i < modules.length; i++) {
/******/              outdatedModules.push(modules[i]);
/******/            }
/******/          }
/******/        }
/******/      });
/******/    
/******/      // handle errors in accept handlers and self accepted module load
/******/      if (error) {
/******/        setStatus("fail");
/******/        return Promise.resolve().then(function () {
/******/          throw error;
/******/        });
/******/      }
/******/    
/******/      if (queuedInvalidatedModules) {
/******/        return internalApply(options).then(function (list) {
/******/          outdatedModules.forEach(function (moduleId) {
/******/            if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/          });
/******/          return list;
/******/        });
/******/      }
/******/    
/******/      setStatus("idle");
/******/      return Promise.resolve(outdatedModules);
/******/    }
/******/    
/******/    function applyInvalidatedModules() {
/******/      if (queuedInvalidatedModules) {
/******/        if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/        Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/          queuedInvalidatedModules.forEach(function (moduleId) {
/******/            __webpack_require__.hmrI[key](
/******/              moduleId,
/******/              currentUpdateApplyHandlers
/******/            );
/******/          });
/******/        });
/******/        queuedInvalidatedModules = undefined;
/******/        return true;
/******/      }
/******/    }
/******/  })();
/******/  
/******/  /* webpack/runtime/publicPath */
/******/  (() => {
/******/    var scriptUrl;
/******/    if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/    var document = __webpack_require__.g.document;
/******/    if (!scriptUrl && document) {
/******/      if (document.currentScript)
/******/        scriptUrl = document.currentScript.src
/******/      if (!scriptUrl) {
/******/        var scripts = document.getElementsByTagName("script");
/******/        if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/      }
/******/    }
/******/    // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/    // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/    if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/    scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/    __webpack_require__.p = scriptUrl;
/******/  })();
/******/  
/******/  /* webpack/runtime/css loading */
/******/  (() => {
/******/    var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/      var linkTag = document.createElement("link");
/******/    
/******/      linkTag.rel = "stylesheet";
/******/      linkTag.type = "text/css";
/******/      var onLinkComplete = (event) => {
/******/        // avoid mem leaks.
/******/        linkTag.onerror = linkTag.onload = null;
/******/        if (event.type === 'load') {
/******/          resolve();
/******/        } else {
/******/          var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/          var realHref = event && event.target && event.target.href || fullhref;
/******/          var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/          err.code = "CSS_CHUNK_LOAD_FAILED";
/******/          err.type = errorType;
/******/          err.request = realHref;
/******/          linkTag.parentNode.removeChild(linkTag)
/******/          reject(err);
/******/        }
/******/      }
/******/      linkTag.onerror = linkTag.onload = onLinkComplete;
/******/      linkTag.href = fullhref;
/******/    
/******/      document.head.appendChild(linkTag);
/******/      return linkTag;
/******/    };
/******/    var findStylesheet = (href, fullhref) => {
/******/      var existingLinkTags = document.getElementsByTagName("link");
/******/      for(var i = 0; i < existingLinkTags.length; i++) {
/******/        var tag = existingLinkTags[i];
/******/        var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/        if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/      }
/******/      var existingStyleTags = document.getElementsByTagName("style");
/******/      for(var i = 0; i < existingStyleTags.length; i++) {
/******/        var tag = existingStyleTags[i];
/******/        var dataHref = tag.getAttribute("data-href");
/******/        if(dataHref === href || dataHref === fullhref) return tag;
/******/      }
/******/    };
/******/    var loadStylesheet = (chunkId) => {
/******/      return new Promise((resolve, reject) => {
/******/        var href = __webpack_require__.miniCssF(chunkId);
/******/        var fullhref = __webpack_require__.p + href;
/******/        if(findStylesheet(href, fullhref)) return resolve();
/******/        createStylesheet(chunkId, fullhref, resolve, reject);
/******/      });
/******/    }
/******/    // no chunk loading
/******/    
/******/    var oldTags = [];
/******/    var newTags = [];
/******/    var applyHandler = (options) => {
/******/      return { dispose: () => {
/******/        for(var i = 0; i < oldTags.length; i++) {
/******/          var oldTag = oldTags[i];
/******/          if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/        }
/******/        oldTags.length = 0;
/******/      }, apply: () => {
/******/        for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/        newTags.length = 0;
/******/      } };
/******/    }
/******/    __webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/      applyHandlers.push(applyHandler);
/******/      chunkIds.forEach((chunkId) => {
/******/        var href = __webpack_require__.miniCssF(chunkId);
/******/        var fullhref = __webpack_require__.p + href;
/******/        var oldTag = findStylesheet(href, fullhref);
/******/        if(!oldTag) return;
/******/        promises.push(new Promise((resolve, reject) => {
/******/          var tag = createStylesheet(chunkId, fullhref, () => {
/******/            tag.as = "style";
/******/            tag.rel = "preload";
/******/            resolve();
/******/          }, reject);
/******/          oldTags.push(oldTag);
/******/          newTags.push(tag);
/******/        }));
/******/      });
/******/    }
/******/  })();
/******/  
/******/  /* webpack/runtime/jsonp chunk loading */
/******/  (() => {
/******/    // no baseURI
/******/    
/******/    // object to store loaded and loading chunks
/******/    // undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/    // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/    var installedChunks = {
/******/      826: 0
/******/    };
/******/    
/******/    // no chunk on demand loading
/******/    
/******/    // no prefetching
/******/    
/******/    // no preloaded
/******/    
/******/    var currentUpdatedModulesList;
/******/    var waitingUpdateResolves = {};
/******/    function loadUpdateChunk(chunkId) {
/******/      return new Promise((resolve, reject) => {
/******/        waitingUpdateResolves[chunkId] = resolve;
/******/        // start update chunk loading
/******/        var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/        // create error before stack unwound to get useful stacktrace later
/******/        var error = new Error();
/******/        var loadingEnded = (event) => {
/******/          if(waitingUpdateResolves[chunkId]) {
/******/            waitingUpdateResolves[chunkId] = undefined
/******/            var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/            var realSrc = event && event.target && event.target.src;
/******/            error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/            error.name = 'ChunkLoadError';
/******/            error.type = errorType;
/******/            error.request = realSrc;
/******/            reject(error);
/******/          }
/******/        };
/******/        __webpack_require__.l(url, loadingEnded);
/******/      });
/******/    }
/******/    
/******/    self["webpackHotUpdate"] = (chunkId, moreModules, runtime) => {
/******/      for(var moduleId in moreModules) {
/******/        if(__webpack_require__.o(moreModules, moduleId)) {
/******/          currentUpdate[moduleId] = moreModules[moduleId];
/******/          if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/        }
/******/      }
/******/      if(runtime) currentUpdateRuntime.push(runtime);
/******/      if(waitingUpdateResolves[chunkId]) {
/******/        waitingUpdateResolves[chunkId]();
/******/        waitingUpdateResolves[chunkId] = undefined;
/******/      }
/******/    };
/******/    
/******/    var currentUpdateChunks;
/******/    var currentUpdate;
/******/    var currentUpdateRemovedChunks;
/******/    var currentUpdateRuntime;
/******/    function applyHandler(options) {
/******/      if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/      currentUpdateChunks = undefined;
/******/      function getAffectedModuleEffects(updateModuleId) {
/******/        var outdatedModules = [updateModuleId];
/******/        var outdatedDependencies = {};
/******/    
/******/        var queue = outdatedModules.map(function (id) {
/******/          return {
/******/            chain: [id],
/******/            id: id
/******/          };
/******/        });
/******/        while (queue.length > 0) {
/******/          var queueItem = queue.pop();
/******/          var moduleId = queueItem.id;
/******/          var chain = queueItem.chain;
/******/          var module = __webpack_require__.c[moduleId];
/******/          if (
/******/            !module ||
/******/            (module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/          )
/******/            continue;
/******/          if (module.hot._selfDeclined) {
/******/            return {
/******/              type: "self-declined",
/******/              chain: chain,
/******/              moduleId: moduleId
/******/            };
/******/          }
/******/          if (module.hot._main) {
/******/            return {
/******/              type: "unaccepted",
/******/              chain: chain,
/******/              moduleId: moduleId
/******/            };
/******/          }
/******/          for (var i = 0; i < module.parents.length; i++) {
/******/            var parentId = module.parents[i];
/******/            var parent = __webpack_require__.c[parentId];
/******/            if (!parent) continue;
/******/            if (parent.hot._declinedDependencies[moduleId]) {
/******/              return {
/******/                type: "declined",
/******/                chain: chain.concat([parentId]),
/******/                moduleId: moduleId,
/******/                parentId: parentId
/******/              };
/******/            }
/******/            if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/            if (parent.hot._acceptedDependencies[moduleId]) {
/******/              if (!outdatedDependencies[parentId])
/******/                outdatedDependencies[parentId] = [];
/******/              addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/              continue;
/******/            }
/******/            delete outdatedDependencies[parentId];
/******/            outdatedModules.push(parentId);
/******/            queue.push({
/******/              chain: chain.concat([parentId]),
/******/              id: parentId
/******/            });
/******/          }
/******/        }
/******/    
/******/        return {
/******/          type: "accepted",
/******/          moduleId: updateModuleId,
/******/          outdatedModules: outdatedModules,
/******/          outdatedDependencies: outdatedDependencies
/******/        };
/******/      }
/******/    
/******/      function addAllToSet(a, b) {
/******/        for (var i = 0; i < b.length; i++) {
/******/          var item = b[i];
/******/          if (a.indexOf(item) === -1) a.push(item);
/******/        }
/******/      }
/******/    
/******/      // at begin all updates modules are outdated
/******/      // the "outdated" status can propagate to parents if they don't accept the children
/******/      var outdatedDependencies = {};
/******/      var outdatedModules = [];
/******/      var appliedUpdate = {};
/******/    
/******/      var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/        console.warn(
/******/          "[HMR] unexpected require(" + module.id + ") to disposed module"
/******/        );
/******/      };
/******/    
/******/      for (var moduleId in currentUpdate) {
/******/        if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/          var newModuleFactory = currentUpdate[moduleId];
/******/          /** @type {TODO} */
/******/          var result;
/******/          if (newModuleFactory) {
/******/            result = getAffectedModuleEffects(moduleId);
/******/          } else {
/******/            result = {
/******/              type: "disposed",
/******/              moduleId: moduleId
/******/            };
/******/          }
/******/          /** @type {Error|false} */
/******/          var abortError = false;
/******/          var doApply = false;
/******/          var doDispose = false;
/******/          var chainInfo = "";
/******/          if (result.chain) {
/******/            chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/          }
/******/          switch (result.type) {
/******/            case "self-declined":
/******/              if (options.onDeclined) options.onDeclined(result);
/******/              if (!options.ignoreDeclined)
/******/                abortError = new Error(
/******/                  "Aborted because of self decline: " +
/******/                    result.moduleId +
/******/                    chainInfo
/******/                );
/******/              break;
/******/            case "declined":
/******/              if (options.onDeclined) options.onDeclined(result);
/******/              if (!options.ignoreDeclined)
/******/                abortError = new Error(
/******/                  "Aborted because of declined dependency: " +
/******/                    result.moduleId +
/******/                    " in " +
/******/                    result.parentId +
/******/                    chainInfo
/******/                );
/******/              break;
/******/            case "unaccepted":
/******/              if (options.onUnaccepted) options.onUnaccepted(result);
/******/              if (!options.ignoreUnaccepted)
/******/                abortError = new Error(
/******/                  "Aborted because " + moduleId + " is not accepted" + chainInfo
/******/                );
/******/              break;
/******/            case "accepted":
/******/              if (options.onAccepted) options.onAccepted(result);
/******/              doApply = true;
/******/              break;
/******/            case "disposed":
/******/              if (options.onDisposed) options.onDisposed(result);
/******/              doDispose = true;
/******/              break;
/******/            default:
/******/              throw new Error("Unexception type " + result.type);
/******/          }
/******/          if (abortError) {
/******/            return {
/******/              error: abortError
/******/            };
/******/          }
/******/          if (doApply) {
/******/            appliedUpdate[moduleId] = newModuleFactory;
/******/            addAllToSet(outdatedModules, result.outdatedModules);
/******/            for (moduleId in result.outdatedDependencies) {
/******/              if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/                if (!outdatedDependencies[moduleId])
/******/                  outdatedDependencies[moduleId] = [];
/******/                addAllToSet(
/******/                  outdatedDependencies[moduleId],
/******/                  result.outdatedDependencies[moduleId]
/******/                );
/******/              }
/******/            }
/******/          }
/******/          if (doDispose) {
/******/            addAllToSet(outdatedModules, [result.moduleId]);
/******/            appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/          }
/******/        }
/******/      }
/******/      currentUpdate = undefined;
/******/    
/******/      // Store self accepted outdated modules to require them later by the module system
/******/      var outdatedSelfAcceptedModules = [];
/******/      for (var j = 0; j < outdatedModules.length; j++) {
/******/        var outdatedModuleId = outdatedModules[j];
/******/        var module = __webpack_require__.c[outdatedModuleId];
/******/        if (
/******/          module &&
/******/          (module.hot._selfAccepted || module.hot._main) &&
/******/          // removed self-accepted modules should not be required
/******/          appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/          // when called invalidate self-accepting is not possible
/******/          !module.hot._selfInvalidated
/******/        ) {
/******/          outdatedSelfAcceptedModules.push({
/******/            module: outdatedModuleId,
/******/            require: module.hot._requireSelf,
/******/            errorHandler: module.hot._selfAccepted
/******/          });
/******/        }
/******/      }
/******/    
/******/      var moduleOutdatedDependencies;
/******/    
/******/      return {
/******/        dispose: function () {
/******/          currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/            delete installedChunks[chunkId];
/******/          });
/******/          currentUpdateRemovedChunks = undefined;
/******/    
/******/          var idx;
/******/          var queue = outdatedModules.slice();
/******/          while (queue.length > 0) {
/******/            var moduleId = queue.pop();
/******/            var module = __webpack_require__.c[moduleId];
/******/            if (!module) continue;
/******/    
/******/            var data = {};
/******/    
/******/            // Call dispose handlers
/******/            var disposeHandlers = module.hot._disposeHandlers;
/******/            for (j = 0; j < disposeHandlers.length; j++) {
/******/              disposeHandlers[j].call(null, data);
/******/            }
/******/            __webpack_require__.hmrD[moduleId] = data;
/******/    
/******/            // disable module (this disables requires from this module)
/******/            module.hot.active = false;
/******/    
/******/            // remove module from cache
/******/            delete __webpack_require__.c[moduleId];
/******/    
/******/            // when disposing there is no need to call dispose handler
/******/            delete outdatedDependencies[moduleId];
/******/    
/******/            // remove "parents" references from all children
/******/            for (j = 0; j < module.children.length; j++) {
/******/              var child = __webpack_require__.c[module.children[j]];
/******/              if (!child) continue;
/******/              idx = child.parents.indexOf(moduleId);
/******/              if (idx >= 0) {
/******/                child.parents.splice(idx, 1);
/******/              }
/******/            }
/******/          }
/******/    
/******/          // remove outdated dependency from module children
/******/          var dependency;
/******/          for (var outdatedModuleId in outdatedDependencies) {
/******/            if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/              module = __webpack_require__.c[outdatedModuleId];
/******/              if (module) {
/******/                moduleOutdatedDependencies =
/******/                  outdatedDependencies[outdatedModuleId];
/******/                for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/                  dependency = moduleOutdatedDependencies[j];
/******/                  idx = module.children.indexOf(dependency);
/******/                  if (idx >= 0) module.children.splice(idx, 1);
/******/                }
/******/              }
/******/            }
/******/          }
/******/        },
/******/        apply: function (reportError) {
/******/          // insert new code
/******/          for (var updateModuleId in appliedUpdate) {
/******/            if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/              __webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/            }
/******/          }
/******/    
/******/          // run new runtime modules
/******/          for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/            currentUpdateRuntime[i](__webpack_require__);
/******/          }
/******/    
/******/          // call accept handlers
/******/          for (var outdatedModuleId in outdatedDependencies) {
/******/            if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/              var module = __webpack_require__.c[outdatedModuleId];
/******/              if (module) {
/******/                moduleOutdatedDependencies =
/******/                  outdatedDependencies[outdatedModuleId];
/******/                var callbacks = [];
/******/                var errorHandlers = [];
/******/                var dependenciesForCallbacks = [];
/******/                for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/                  var dependency = moduleOutdatedDependencies[j];
/******/                  var acceptCallback =
/******/                    module.hot._acceptedDependencies[dependency];
/******/                  var errorHandler =
/******/                    module.hot._acceptedErrorHandlers[dependency];
/******/                  if (acceptCallback) {
/******/                    if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/                    callbacks.push(acceptCallback);
/******/                    errorHandlers.push(errorHandler);
/******/                    dependenciesForCallbacks.push(dependency);
/******/                  }
/******/                }
/******/                for (var k = 0; k < callbacks.length; k++) {
/******/                  try {
/******/                    callbacks[k].call(null, moduleOutdatedDependencies);
/******/                  } catch (err) {
/******/                    if (typeof errorHandlers[k] === "function") {
/******/                      try {
/******/                        errorHandlers[k](err, {
/******/                          moduleId: outdatedModuleId,
/******/                          dependencyId: dependenciesForCallbacks[k]
/******/                        });
/******/                      } catch (err2) {
/******/                        if (options.onErrored) {
/******/                          options.onErrored({
/******/                            type: "accept-error-handler-errored",
/******/                            moduleId: outdatedModuleId,
/******/                            dependencyId: dependenciesForCallbacks[k],
/******/                            error: err2,
/******/                            originalError: err
/******/                          });
/******/                        }
/******/                        if (!options.ignoreErrored) {
/******/                          reportError(err2);
/******/                          reportError(err);
/******/                        }
/******/                      }
/******/                    } else {
/******/                      if (options.onErrored) {
/******/                        options.onErrored({
/******/                          type: "accept-errored",
/******/                          moduleId: outdatedModuleId,
/******/                          dependencyId: dependenciesForCallbacks[k],
/******/                          error: err
/******/                        });
/******/                      }
/******/                      if (!options.ignoreErrored) {
/******/                        reportError(err);
/******/                      }
/******/                    }
/******/                  }
/******/                }
/******/              }
/******/            }
/******/          }
/******/    
/******/          // Load self accepted modules
/******/          for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/            var item = outdatedSelfAcceptedModules[o];
/******/            var moduleId = item.module;
/******/            try {
/******/              item.require(moduleId);
/******/            } catch (err) {
/******/              if (typeof item.errorHandler === "function") {
/******/                try {
/******/                  item.errorHandler(err, {
/******/                    moduleId: moduleId,
/******/                    module: __webpack_require__.c[moduleId]
/******/                  });
/******/                } catch (err2) {
/******/                  if (options.onErrored) {
/******/                    options.onErrored({
/******/                      type: "self-accept-error-handler-errored",
/******/                      moduleId: moduleId,
/******/                      error: err2,
/******/                      originalError: err
/******/                    });
/******/                  }
/******/                  if (!options.ignoreErrored) {
/******/                    reportError(err2);
/******/                    reportError(err);
/******/                  }
/******/                }
/******/              } else {
/******/                if (options.onErrored) {
/******/                  options.onErrored({
/******/                    type: "self-accept-errored",
/******/                    moduleId: moduleId,
/******/                    error: err
/******/                  });
/******/                }
/******/                if (!options.ignoreErrored) {
/******/                  reportError(err);
/******/                }
/******/              }
/******/            }
/******/          }
/******/    
/******/          return outdatedModules;
/******/        }
/******/      };
/******/    }
/******/    __webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/      if (!currentUpdate) {
/******/        currentUpdate = {};
/******/        currentUpdateRuntime = [];
/******/        currentUpdateRemovedChunks = [];
/******/        applyHandlers.push(applyHandler);
/******/      }
/******/      if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/        currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/      }
/******/    };
/******/    __webpack_require__.hmrC.jsonp = function (
/******/      chunkIds,
/******/      removedChunks,
/******/      removedModules,
/******/      promises,
/******/      applyHandlers,
/******/      updatedModulesList
/******/    ) {
/******/      applyHandlers.push(applyHandler);
/******/      currentUpdateChunks = {};
/******/      currentUpdateRemovedChunks = removedChunks;
/******/      currentUpdate = removedModules.reduce(function (obj, key) {
/******/        obj[key] = false;
/******/        return obj;
/******/      }, {});
/******/      currentUpdateRuntime = [];
/******/      chunkIds.forEach(function (chunkId) {
/******/        if (
/******/          __webpack_require__.o(installedChunks, chunkId) &&
/******/          installedChunks[chunkId] !== undefined
/******/        ) {
/******/          promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/          currentUpdateChunks[chunkId] = true;
/******/        }
/******/      });
/******/      if (__webpack_require__.f) {
/******/        __webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/          if (
/******/            currentUpdateChunks &&
/******/            !__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/            __webpack_require__.o(installedChunks, chunkId) &&
/******/            installedChunks[chunkId] !== undefined
/******/          ) {
/******/            promises.push(loadUpdateChunk(chunkId));
/******/            currentUpdateChunks[chunkId] = true;
/******/          }
/******/        };
/******/      }
/******/    };
/******/    
/******/    __webpack_require__.hmrM = () => {
/******/      if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/      return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/        if(response.status === 404) return; // no update available
/******/        if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/        return response.json();
/******/      });
/******/    };
/******/    
/******/    __webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/    
/******/    // install a JSONP callback for chunk loading
/******/    var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/      var [chunkIds, moreModules, runtime] = data;
/******/      // add "moreModules" to the modules object,
/******/      // then flag all "chunkIds" as loaded and fire callback
/******/      var moduleId, chunkId, i = 0;
/******/      for(moduleId in moreModules) {
/******/        if(__webpack_require__.o(moreModules, moduleId)) {
/******/          __webpack_require__.m[moduleId] = moreModules[moduleId];
/******/        }
/******/      }
/******/      if(runtime) runtime(__webpack_require__);
/******/      if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/      for(;i < chunkIds.length; i++) {
/******/        chunkId = chunkIds[i];
/******/        if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/          installedChunks[chunkId][0]();
/******/        }
/******/        installedChunks[chunkIds[i]] = 0;
/******/      }
/******/      __webpack_require__.O();
/******/    }
/******/    
/******/    var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/    chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/    chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/  })();
/******/  
/************************************************************************/
/******/  
/******/  // module cache are used so entry inlining is disabled
/******/  // startup
/******/  // Load entry module and return exports
/******/  __webpack_require__.O(undefined, [369], () => (__webpack_require__(3270)))
/******/  var __webpack_exports__ = __webpack_require__.O(undefined, [369], () => (__webpack_require__(3383)))
/******/  __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/  
/******/ })()
;