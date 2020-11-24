"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = saludar;
exports.Saludo = exports.user = exports.PI = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PI = Math.PI;
exports.PI = PI;
var user = 'Danistry';
exports.user = user;
var password = 'qwerty'; //export default password

var hello = function hello() {
  return console.log('hola');
};

function saludar() {
  console.log('Hola Modulos ES6');
}

var Saludo = function Saludo() {
  _classCallCheck(this, Saludo);

  console.log('Hola Modulos ES68');
};

exports.Saludo = Saludo;