(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _quote = require("./quote");

var _quote2 = _interopRequireDefault(_quote);

var _ui = require("./ui");

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_quote2.default.findAll().then(_ui2.default.renderQuotes).catch(function (error) {
    console.log(error);
});

},{"./quote":2,"./ui":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Quote = {
    findAll: function findAll() {
        return new Promise(function (resolve, reject) {
            var uri = "http://localhost:3000/quotes";
            var request = new XMLHttpRequest();

            request.open("GET", uri, true);

            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    resolve(JSON.parse(request.response));
                }
            };

            request.onerror = function () {
                reject(new Error("Something went wrong on the API"));
            };

            request.send();
        });
    }
};

exports.default = Quote;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var ui = {
    renderQuotes: function renderQuotes(quotes) {
        console.log(quotes);
    }
};

exports.default = ui;

},{}]},{},[1]);
