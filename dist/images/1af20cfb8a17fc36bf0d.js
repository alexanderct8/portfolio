function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import "./normalize.css";
import "./style.css";
import "./about.js";
var menu = document.querySelector('.nav_menu');
var openMenuBtn = document.querySelector('.open-menu');
var closeMenuBtn = document.querySelector('.close-menu');

function toggleMenu() {
  menu.classList.toggle('nav_menu-opened');
}

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
var form = document.querySelector('#form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(_x) {
  return _handleSubmit.apply(this, arguments);
}

function _handleSubmit() {
  _handleSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
    var form, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            form = new FormData(this);
            _context.next = 4;
            return fetch(this.action, {
              method: this.method,
              body: form,
              headers: {
                'Accept': 'application/json'
              }
            });

          case 4:
            response = _context.sent;

            if (response.ok) {
              this.reset();
              alert('El mensaje se envio con exito. Gracias');
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _handleSubmit.apply(this, arguments);
}

;