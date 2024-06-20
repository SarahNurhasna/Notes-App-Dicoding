(() => {
  var t = {
      619: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(t, u(o.key), o);
          }
        }
        function n(t) {
          var e = 'function' == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return -1 !== Function.toString.call(t).indexOf('[native code]');
                  } catch (e) {
                    return 'function' == typeof t;
                  }
                })(t)
              )
                return t;
              if ('function' != typeof t)
                throw new TypeError('Super expression must either be null or a function');
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var c = new (t.bind.apply(t, i))();
                  return n && r(c, n.prototype), c;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                r(n, t)
              );
            }),
            n(t)
          );
        }
        function o() {
          try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          } catch (t) {}
          return (o = function () {
            return !!t;
          })();
        }
        function r(t, e) {
          return (
            (r = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            r(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function c(t, e, n) {
          return (
            (e = u(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function u(e) {
          var n = (function (e, n) {
            if ('object' != t(e) || !e) return e;
            var o = e[Symbol.toPrimitive];
            if (void 0 !== o) {
              var r = o.call(e, 'string');
              if ('object' != t(r)) return r;
              throw new TypeError('@@toPrimitive must return a primitive value.');
            }
            return String(e);
          })(e);
          return 'symbol' == t(n) ? n : n + '';
        }
        var a = (function (n) {
          function u() {
            var e, n, r, a, l, s, f;
            return (
              (function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, u),
              c(
                ((l = this),
                (s = i((s = u))),
                (a = (function (e, n) {
                  if (n && ('object' === t(n) || 'function' == typeof n)) return n;
                  if (void 0 !== n)
                    throw new TypeError('Derived constructors may only return object or undefined');
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(e);
                })(l, o() ? Reflect.construct(s, f || [], i(l).constructor) : s.apply(l, f)))),
                '_shadowRoot',
                null,
              ),
              c(a, '_style', null),
              (a._shadowRoot = a.attachShadow({ mode: 'open' })),
              (a._color = null !== (e = a.getAttribute('color')) && void 0 !== e ? e : '#092639'),
              (a._backgroundColor =
                null !== (n = a.getAttribute('background-color')) && void 0 !== n ? n : '#acc8ff'),
              (a._imgSrc =
                null !== (r = a.getAttribute('src')) && void 0 !== r ? r : 'lightmode.svg'),
              (a._style = document.createElement('style')),
              a
            );
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && r(t, e);
            })(u, n),
            (a = u),
            (l = [
              {
                key: '_emptyContent',
                value: function () {
                  this._shadowRoot.innerHTML = '';
                },
              },
              {
                key: '_updateStyle',
                value: function () {
                  this._style.textContent =
                    '\n        :host {\n            display: block;\n            width: 100%;\n            position: fixed;\n            z-index: 999;\n            border-bottom: 1px solid #DCDCDC;\n            color: '
                      .concat(this._color, ';\n            background-color: ')
                      .concat(
                        this._backgroundColor,
                        ';\n        }\n\n        div{\n            display: flex;\n            padding: 5px 40px 5px 40px;\n            flex-direction: row;\n            align-items: center;\n            justify-content: space-between;\n            background-color: ',
                      )
                      .concat(
                        this.getAttribute('background-color'),
                        ';\n        }\n\n        button {\n            border: none;\n            outline: none;\n            background: none;\n            cursor: pointer;\n            padding: 1px;\n        }\n\n        h1 {\n            font-size: clamp(24px, 4vw, 32px);\n        }\n      ',
                      );
                },
              },
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: 'render',
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '  \n        <div>\n            <h1>Notes App</h1>\n            <button id="lightmode-darkmode">\n                <img src= '.concat(
                        this._imgSrc,
                        ' alt="Toggle light/dark mode" />\n            </button>\n        </div>\n      ',
                      ));
                },
              },
              {
                key: 'attributeChangedCallback',
                value: function (t, e, n) {
                  e !== n && ((this['_'.concat(t)] = n), this.render());
                },
              },
            ]) && e(a.prototype, l),
            Object.defineProperty(a, 'prototype', { writable: !1 }),
            a
          );
          var a, l;
        })(n(HTMLElement));
        c(a, 'observedAttributes', ['background-color', 'color', 'src']),
          customElements.define('app-bar', a);
      },
      299: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(t, u(o.key), o);
          }
        }
        function n(t) {
          var e = 'function' == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return -1 !== Function.toString.call(t).indexOf('[native code]');
                  } catch (e) {
                    return 'function' == typeof t;
                  }
                })(t)
              )
                return t;
              if ('function' != typeof t)
                throw new TypeError('Super expression must either be null or a function');
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var c = new (t.bind.apply(t, i))();
                  return n && r(c, n.prototype), c;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                r(n, t)
              );
            }),
            n(t)
          );
        }
        function o() {
          try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          } catch (t) {}
          return (o = function () {
            return !!t;
          })();
        }
        function r(t, e) {
          return (
            (r = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            r(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function c(t, e, n) {
          return (
            (e = u(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function u(e) {
          var n = (function (e, n) {
            if ('object' != t(e) || !e) return e;
            var o = e[Symbol.toPrimitive];
            if (void 0 !== o) {
              var r = o.call(e, 'string');
              if ('object' != t(r)) return r;
              throw new TypeError('@@toPrimitive must return a primitive value.');
            }
            return String(e);
          })(e);
          return 'symbol' == t(n) ? n : n + '';
        }
        var a = (function (n) {
          function u() {
            var e, n, r, a, l, s;
            return (
              (function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, u),
              c(
                ((a = this),
                (l = i((l = u))),
                (r = (function (e, n) {
                  if (n && ('object' === t(n) || 'function' == typeof n)) return n;
                  if (void 0 !== n)
                    throw new TypeError('Derived constructors may only return object or undefined');
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(e);
                })(a, o() ? Reflect.construct(l, s || [], i(a).constructor) : l.apply(a, s)))),
                '_shadowRoot',
                null,
              ),
              c(r, '_style', null),
              (r._shadowRoot = r.attachShadow({ mode: 'open' })),
              (r._color = null !== (e = r.getAttribute('color')) && void 0 !== e ? e : '#092639'),
              (r._backgroundColor =
                null !== (n = r.getAttribute('background-color')) && void 0 !== n ? n : '#acc8ff'),
              (r._style = document.createElement('style')),
              r
            );
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && r(t, e);
            })(u, n),
            (a = u),
            (l = [
              {
                key: '_updateStyle',
                value: function () {
                  this._style.textContent =
                    '\n        :host {\n          display: block;\n          width: 100%;\n          color: '
                      .concat(this._color, ';\n          background-color: ')
                      .concat(
                        this._backgroundColor,
                        ';\n          border-top: 1px solid #DCDCDC;\n        }\n  \n        div {\n          padding: 15px;\n          text-align: center;\n          background-color: ',
                      )
                      .concat(
                        this.getAttribute('background-color'),
                        ';\n          font-size: clamp(14px, 3vw, 16px);\n      ',
                      );
                },
              },
              {
                key: '_emptyContent',
                value: function () {
                  this._shadowRoot.innerHTML = '';
                },
              },
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: 'render',
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '   \n        <div>\n            <p>Dicoding Notes App Project &#169; 2024, Sarah Nurhasna Khairunnisa</p>\n        </div>\n      ');
                },
              },
              {
                key: 'attributeChangedCallback',
                value: function (t, e, n) {
                  (this['_'.concat(t)] = n), this.render();
                },
              },
            ]) && e(a.prototype, l),
            Object.defineProperty(a, 'prototype', { writable: !1 }),
            a
          );
          var a, l;
        })(n(HTMLElement));
        c(a, 'observedAttributes', ['background-color', 'color']),
          customElements.define('footer-bar', a);
      },
      542: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t) {
          var i = 'function' == typeof Map ? new Map() : void 0;
          return (
            (e = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return -1 !== Function.toString.call(t).indexOf('[native code]');
                  } catch (e) {
                    return 'function' == typeof t;
                  }
                })(t)
              )
                return t;
              if ('function' != typeof t)
                throw new TypeError('Super expression must either be null or a function');
              if (void 0 !== i) {
                if (i.has(t)) return i.get(t);
                i.set(t, e);
              }
              function e() {
                return (function (t, e, r) {
                  if (n()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var c = new (t.bind.apply(t, i))();
                  return r && o(c, r.prototype), c;
                })(t, arguments, r(this).constructor);
              }
              return (
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(e, t)
              );
            }),
            e(t)
          );
        }
        function n() {
          try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          } catch (t) {}
          return (n = function () {
            return !!t;
          })();
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            o(t, e)
          );
        }
        function r(t) {
          return (
            (r = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            r(t)
          );
        }
        var i = (function (e) {
          function i() {
            var e, o, c, u;
            return (
              (function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, i),
              (((o = this),
              (c = i),
              (c = r(c)),
              (e = (function (e, n) {
                if (n && ('object' === t(n) || 'function' == typeof n)) return n;
                if (void 0 !== n)
                  throw new TypeError('Derived constructors may only return object or undefined');
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(e);
              })(
                o,
                n() ? Reflect.construct(c, u || [], r(o).constructor) : c.apply(o, u),
              )))._shadowRoot = e.attachShadow({ mode: 'open' })),
              (e._shadowRoot.innerHTML +=
                ' \n        <style>\n            .loading {\n                padding-top: 10px;\n                color: #a0a0a0;\n            }\n        </style>  \n        <div class="loading">Loading to catch data, please wait...</div>\n    '),
              e
            );
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && o(t, e);
            })(i, e),
            (c = i),
            Object.defineProperty(c, 'prototype', { writable: !1 }),
            c
          );
          var c;
        })(e(HTMLElement));
        customElements.define('loading-indicator', i);
      },
      397: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            t(e)
          );
        }
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(t, u(o.key), o);
          }
        }
        function n(t) {
          var e = 'function' == typeof Map ? new Map() : void 0;
          return (
            (n = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return -1 !== Function.toString.call(t).indexOf('[native code]');
                  } catch (e) {
                    return 'function' == typeof t;
                  }
                })(t)
              )
                return t;
              if ('function' != typeof t)
                throw new TypeError('Super expression must either be null or a function');
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n);
              }
              function n() {
                return (function (t, e, n) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, e);
                  var c = new (t.bind.apply(t, i))();
                  return n && r(c, n.prototype), c;
                })(t, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                r(n, t)
              );
            }),
            n(t)
          );
        }
        function o() {
          try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          } catch (t) {}
          return (o = function () {
            return !!t;
          })();
        }
        function r(t, e) {
          return (
            (r = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
            r(t, e)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function c(t, e, n) {
          return (
            (e = u(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function u(e) {
          var n = (function (e, n) {
            if ('object' != t(e) || !e) return e;
            var o = e[Symbol.toPrimitive];
            if (void 0 !== o) {
              var r = o.call(e, 'string');
              if ('object' != t(r)) return r;
              throw new TypeError('@@toPrimitive must return a primitive value.');
            }
            return String(e);
          })(e);
          return 'symbol' == t(n) ? n : n + '';
        }
        var a = (function (n) {
          function u() {
            var e, n, r, a;
            return (
              (function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, u),
              c(
                ((n = this),
                (r = i((r = u))),
                (e = (function (e, n) {
                  if (n && ('object' === t(n) || 'function' == typeof n)) return n;
                  if (void 0 !== n)
                    throw new TypeError('Derived constructors may only return object or undefined');
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(e);
                })(n, o() ? Reflect.construct(r, a || [], i(n).constructor) : r.apply(n, a)))),
                '_shadowRoot',
                null,
              ),
              c(e, '_style', null),
              c(e, '_submitEvent', 'submit'),
              (e._shadowRoot = e.attachShadow({ mode: 'open' })),
              (e._style = document.createElement('style')),
              e
            );
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError('Super expression must either be null or a function');
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && r(t, e);
            })(u, n),
            (a = u),
            (l = [
              {
                key: '_updateStyle',
                value: function () {
                  this._style.textContent =
                    '\n          :host {\n            display: block;\n            color: #092639;\n          }\n          \n          section {\n            margin-top: 110px;\n            border: 1px solid #092639;\n            border-radius: 10px;\n            background-color: #d0e0ff;\n          }\n\n          ::placeholder {\n            color: grey;\n            font-size: 1em;\n            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n          }\n          \n          .input-section {\n            display: flex;\n            flex-direction: column;\n            padding: 24px;\n          }\n          \n          .input-section > h2 {\n            font-size: clamp(18px, 4vw, 24px);\n            text-align: center;\n            padding-bottom: 20px;\n            border-bottom: 1px solid #092639;\n            margin: 0;\n          }\n\n          .input-section > form > .input {\n            margin: 10px 0;\n          }\n\n          .input-section > form > .input-title {\n            padding-top: 10px;\n          }\n          \n          .input-section > form > button {\n            display: block;\n            width: 100%;\n            padding: 8px;\n            background-color: #acc8ff;\n            color: #092639;\n            border-radius: 5px;\n            border: 1px solid #092639;\n            cursor: pointer;\n          }\n\n          .input-section > form > button:hover {\n            background-color: #79a4fb;\n          }\n          \n          .input-section > form > button > span,\n          label {\n            font-weight: bold;\n          }\n          \n          .input-section > form > .input > input, \n          textarea {\n            display: block;\n            width: 100%;\n            padding: 8px;\n            margin-top: 8px;\n            border-radius: 5px;\n            box-sizing: border-box;\n            border: 1px solid #092639;\n          }\n          \n          .input-section > form > .input-content {\n            display: grid;\n            grid-template-columns: 1fr auto;\n            grid-template-rows: auto auto;\n          }\n          \n          .input-section > form > .input-content > .content-label {\n            grid-row: 1 / 2;\n            grid-column: 1 / 2;\n            align-self: center;\n          }\n          \n          .input-section > form > .input-content > #notifikasiSisaKarakter {\n            grid-row: 1 / 2;\n            grid-column: 2 / 3;\n            justify-self: end;\n            font-size: clamp(10px, 3vw, 12px);\n            font-weight: 600;\n          }\n          \n          .input-section > form > .input-content > textarea {\n            grid-row: 2 / 3;\n            grid-column: 1 / 3;\n            font-family: "Poppins", sans-serif;\n          }\n\n          label[for="inputNoteTitle"], label[for="inputNoteContent"] {\n            font-size: clamp(12px, 4vw, 16px);\n          }\n        ';
                },
              },
              {
                key: '_emptyContent',
                value: function () {
                  this._shadowRoot.innerHTML = '';
                },
              },
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: 'render',
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '   \n        <section class="input-section" id="form">\n          <h2>Make a new notes!</h2>\n          <form id="inputNote">\n            <div class="input input-title">\n              <label for="inputNoteTitle">Title</label>\n              <input id="inputNoteTitle" type="text" name="inputNoteTitle" placeholder="Type your note\'s title..." required/>\n            </div>\n            <div class="input input-content">\n              <label for="inputNoteContent" class="content-label">Content</label>\n              <label id="notifikasiSisaKarakter"> Character left: <span id="sisaKarakter"></span> </label>\n              <textarea name="noteContent" id="inputNoteContent" cols="30" rows="5" maxlength="100" placeholder="Type your note\'s content..." required></textarea>\n            </div>\n            <button id="NoteSubmit" type="submit"><span>Add Note</span></button>\n          </form>\n        </section>\n    ');
                  var t = this._shadowRoot.getElementById('inputNoteContent'),
                    e = this._shadowRoot.getElementById('sisaKarakter'),
                    n = this._shadowRoot.getElementById('notifikasiSisaKarakter');
                  (e.innerText = t.maxLength),
                    t.addEventListener('input', function () {
                      var o = t.value.length,
                        r = t.maxLength - o;
                      (e.innerText = r.toString()), (n.style.color = r <= 5 ? 'red' : 'black');
                    });
                },
              },
            ]) && e(a.prototype, l),
            Object.defineProperty(a, 'prototype', { writable: !1 }),
            a
          );
          var a, l;
        })(n(HTMLElement));
        customElements.define('note-form', a);
      },
      919: (t, e, n) => {
        'use strict';
        n.d(e, { A: () => u });
        var o = n(601),
          r = n.n(o),
          i = n(314),
          c = n.n(i)()(r());
        c.push([
          t.id,
          '* {\n  padding: 0;\n  margin: 0;\n\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: "Poppins", sans-serif;\n}\n\nheader {\n  display: block;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nmain {\n  min-height: 100vh;\n  max-width: 900px;\n  width: 90%;\n  margin: 0 auto;\n  padding: 16px;\n  color: #092639;\n}\n\nh2 {\n  font-size: clamp(18px, 4vw, 24px);\n}\n\n.section-title {\n  margin-top: 30px;\n}\n\n',
          '',
        ]);
        const u = c;
      },
      314: (t) => {
        'use strict';
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = '',
                  o = void 0 !== e[5];
                return (
                  e[4] && (n += '@supports ('.concat(e[4], ') {')),
                  e[2] && (n += '@media '.concat(e[2], ' {')),
                  o && (n += '@layer'.concat(e[5].length > 0 ? ' '.concat(e[5]) : '', ' {')),
                  (n += t(e)),
                  o && (n += '}'),
                  e[2] && (n += '}'),
                  e[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (e.i = function (t, n, o, r, i) {
              'string' == typeof t && (t = [[null, t, void 0]]);
              var c = {};
              if (o)
                for (var u = 0; u < this.length; u++) {
                  var a = this[u][0];
                  null != a && (c[a] = !0);
                }
              for (var l = 0; l < t.length; l++) {
                var s = [].concat(t[l]);
                (o && c[s[0]]) ||
                  (void 0 !== i &&
                    (void 0 === s[5] ||
                      (s[1] = '@layer'
                        .concat(s[5].length > 0 ? ' '.concat(s[5]) : '', ' {')
                        .concat(s[1], '}')),
                    (s[5] = i)),
                  n &&
                    (s[2]
                      ? ((s[1] = '@media '.concat(s[2], ' {').concat(s[1], '}')), (s[2] = n))
                      : (s[2] = n)),
                  r &&
                    (s[4]
                      ? ((s[1] = '@supports ('.concat(s[4], ') {').concat(s[1], '}')), (s[4] = r))
                      : (s[4] = ''.concat(r))),
                  e.push(s));
              }
            }),
            e
          );
        };
      },
      601: (t) => {
        'use strict';
        t.exports = function (t) {
          return t[1];
        };
      },
      72: (t) => {
        'use strict';
        var e = [];
        function n(t) {
          for (var n = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === t) {
              n = o;
              break;
            }
          return n;
        }
        function o(t, o) {
          for (var i = {}, c = [], u = 0; u < t.length; u++) {
            var a = t[u],
              l = o.base ? a[0] + o.base : a[0],
              s = i[l] || 0,
              f = ''.concat(l, ' ').concat(s);
            i[l] = s + 1;
            var p = n(f),
              d = {
                css: a[1],
                media: a[2],
                sourceMap: a[3],
                supports: a[4],
                layer: a[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(d);
            else {
              var y = r(d, o);
              (o.byIndex = u), e.splice(u, 0, { identifier: f, updater: y, references: 1 });
            }
            c.push(f);
          }
          return c;
        }
        function r(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, r) {
          var i = o((t = t || []), (r = r || {}));
          return function (t) {
            t = t || [];
            for (var c = 0; c < i.length; c++) {
              var u = n(i[c]);
              e[u].references--;
            }
            for (var a = o(t, r), l = 0; l < i.length; l++) {
              var s = n(i[l]);
              0 === e[s].references && (e[s].updater(), e.splice(s, 1));
            }
            i = a;
          };
        };
      },
      659: (t) => {
        'use strict';
        var e = {};
        t.exports = function (t, n) {
          var o = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          o.appendChild(n);
        };
      },
      540: (t) => {
        'use strict';
        t.exports = function (t) {
          var e = document.createElement('style');
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, n) => {
        'use strict';
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute('nonce', e);
        };
      },
      825: (t) => {
        'use strict';
        t.exports = function (t) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var o = '';
                n.supports && (o += '@supports ('.concat(n.supports, ') {')),
                  n.media && (o += '@media '.concat(n.media, ' {'));
                var r = void 0 !== n.layer;
                r && (o += '@layer'.concat(n.layer.length > 0 ? ' '.concat(n.layer) : '', ' {')),
                  (o += n.css),
                  r && (o += '}'),
                  n.media && (o += '}'),
                  n.supports && (o += '}');
                var i = n.sourceMap;
                i &&
                  'undefined' != typeof btoa &&
                  (o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                    ' */',
                  )),
                  e.styleTagTransform(o, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        'use strict';
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var i = (e[o] = { id: o, exports: {} });
    return t[o](i, i.exports, n), i.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var o in e)
        n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      'use strict';
      var t = n(72),
        e = n.n(t),
        o = n(825),
        r = n.n(o),
        i = n(659),
        c = n.n(i),
        u = n(56),
        a = n.n(u),
        l = n(540),
        s = n.n(l),
        f = n(113),
        p = n.n(f),
        d = n(919),
        y = {};
      function b(t) {
        return (
          (b =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          b(t)
        );
      }
      function h(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, m(o.key), o);
        }
      }
      function m(t) {
        var e = (function (t, e) {
          if ('object' != b(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(t, 'string');
            if ('object' != b(o)) return o;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == b(e) ? e : e + '';
      }
      (y.styleTagTransform = p()),
        (y.setAttributes = a()),
        (y.insert = c().bind(null, 'head')),
        (y.domAPI = r()),
        (y.insertStyleElement = s()),
        e()(d.A, y),
        d.A && d.A.locals && d.A.locals,
        n(619),
        n(299),
        n(397);
      const v = (function () {
        return (
          (t = function t() {
            !(function (t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, t);
          }),
          (e = [
            {
              key: 'emptyElement',
              value: function (t) {
                t.innerHTML = '';
              },
            },
            {
              key: 'showElement',
              value: function (t) {
                (t.style.display = 'block'), (t.hidden = !1);
              },
            },
            {
              key: 'hideElement',
              value: function (t) {
                (t.style.display = 'none'), (t.hidden = !0);
              },
            },
            {
              key: 'isValidInteger',
              value: function (t) {
                return Number.isNaN(t) || Number.isFinite(t);
              },
            },
            {
              key: 'showFormattedDate',
              value: function (t) {
                return new Date(t).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                });
              },
            },
          ]),
          null && h(t.prototype, null),
          e && h(t, e),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          t
        );
        var t, e;
      })();
      function g(t) {
        return (
          (g =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          g(t)
        );
      }
      function w(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, k(o.key), o);
        }
      }
      function _(t) {
        var e = 'function' == typeof Map ? new Map() : void 0;
        return (
          (_ = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return -1 !== Function.toString.call(t).indexOf('[native code]');
                } catch (e) {
                  return 'function' == typeof t;
                }
              })(t)
            )
              return t;
            if ('function' != typeof t)
              throw new TypeError('Super expression must either be null or a function');
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (x()) return Reflect.construct.apply(null, arguments);
                var o = [null];
                o.push.apply(o, e);
                var r = new (t.bind.apply(t, o))();
                return n && S(r, n.prototype), r;
              })(t, arguments, O(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              S(n, t)
            );
          }),
          _(t)
        );
      }
      function x() {
        try {
          var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (x = function () {
          return !!t;
        })();
      }
      function S(t, e) {
        return (
          (S = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          S(t, e)
        );
      }
      function O(t) {
        return (
          (O = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          O(t)
        );
      }
      function j(t, e, n) {
        return (
          (e = k(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function k(t) {
        var e = (function (t, e) {
          if ('object' != g(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(t, 'string');
            if ('object' != g(o)) return o;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == g(e) ? e : e + '';
      }
      var T = (function (t) {
        function e() {
          var t, n, o, r;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, e),
            j(
              ((n = this),
              (o = O((o = e))),
              (t = (function (t, e) {
                if (e && ('object' === g(e) || 'function' == typeof e)) return e;
                if (void 0 !== e)
                  throw new TypeError('Derived constructors may only return object or undefined');
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(t);
              })(n, x() ? Reflect.construct(o, r || [], O(n).constructor) : o.apply(n, r)))),
              '_shadowRoot',
              null,
            ),
            j(t, '_style', null),
            j(t, '_note', {
              id: null,
              title: null,
              body: null,
              createdAt: null,
              archived: null,
            }),
            (t._shadowRoot = t.attachShadow({ mode: 'open' })),
            (t._style = document.createElement('style')),
            t
          );
        }
        return (
          (function (t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError('Super expression must either be null or a function');
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && S(t, e);
          })(e, t),
          (n = e),
          (o = [
            {
              key: 'connectedCallback',
              value: function () {
                this.render();
              },
            },
            {
              key: '_emptyContent',
              value: function () {
                this._shadowRoot.innerHTML = '';
              },
            },
            {
              key: 'note',
              get: function () {
                return this._note;
              },
              set: function (t) {
                (this._note = t), this.render();
              },
            },
            {
              key: '_updateStyle',
              value: function () {
                this._style.textContent =
                  '\n      :host {\n        display: flex;\n        flex-direction: row;\n        overflow: hidden;\n      }\n\n      .card {\n        display: flex;\n        flex-direction: column;\n        background-color: #dce8ff;\n        padding: 20px;\n        border-radius: 10px;\n        border: 1px solid #092639;\n        overflow: hidden;\n        width: 100%\n      }\n\n      .note-content {\n        flex-grow: 1;\n      }\n\n      .note-content > .note-title {\n        font-size: clamp(16px, 3vw, 20px);\n        padding-bottom: 10px;\n        border-bottom: 1px solid #092639;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin: auto;\n        white-space: nowrap;\n      }\n\n      .note-content > .note-body {\n        font-size: clamp(14px, 3vw, 16px);\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .note-content > .note-date {\n        font-size: 0.75em;\n        opacity: 75%;\n      }\n\n      .note-button > button {\n        background-color: #ff6969;\n        color: white;\n        font-weight: bold;\n        width: 8vh;\n        border-radius: 5px;\n        border: 1px solid #092639;\n        margin-top: 16px;\n        padding: 5px;\n        text-align: center;\n        cursor: pointer;\n      }\n\n      .note-button > button:hover {\n        background-color: #ff2929;\n      }\n    ';
              },
            },
            {
              key: 'render',
              value: function () {
                var t = this;
                this._emptyContent(),
                  this._updateStyle(),
                  this._shadowRoot.appendChild(this._style),
                  (this._shadowRoot.innerHTML +=
                    '\n      <div class="card">\n        <div class="note-content">\n          <h3 class="note-title">'
                      .concat(this._note.title, '</h3>\n          <p class="note-date">')
                      .concat(
                        v.showFormattedDate(this._note.createdAt),
                        '</p>\n          <p class="note-body">',
                      )
                      .concat(
                        this._note.body,
                        '</p>\n        </div>\n        <div class="note-button">\n          <button id="deleteButton" class="delete-button">Delete</button>\n        </div>\n      </div>\n    ',
                      )),
                  this._shadowRoot
                    .getElementById('deleteButton')
                    .addEventListener('click', function () {
                      confirm('Are you sure you want to delete this note?') && t.remove();
                    });
              },
            },
          ]) && w(n.prototype, o),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          n
        );
        var n, o;
      })(_(HTMLElement));
      function E(t) {
        return (
          (E =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          E(t)
        );
      }
      function P(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, N(o.key), o);
        }
      }
      function C(t) {
        var e = 'function' == typeof Map ? new Map() : void 0;
        return (
          (C = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return -1 !== Function.toString.call(t).indexOf('[native code]');
                } catch (e) {
                  return 'function' == typeof t;
                }
              })(t)
            )
              return t;
            if ('function' != typeof t)
              throw new TypeError('Super expression must either be null or a function');
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return (function (t, e, n) {
                if (R()) return Reflect.construct.apply(null, arguments);
                var o = [null];
                o.push.apply(o, e);
                var r = new (t.bind.apply(t, o))();
                return n && A(r, n.prototype), r;
              })(t, arguments, M(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              A(n, t)
            );
          }),
          C(t)
        );
      }
      function R() {
        try {
          var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (R = function () {
          return !!t;
        })();
      }
      function A(t, e) {
        return (
          (A = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          A(t, e)
        );
      }
      function M(t) {
        return (
          (M = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          M(t)
        );
      }
      function L(t, e, n) {
        return (
          (e = N(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function N(t) {
        var e = (function (t, e) {
          if ('object' != E(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(t, 'string');
            if ('object' != E(o)) return o;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == E(e) ? e : e + '';
      }
      customElements.define('note-item', T);
      var B = (function (t) {
        function e() {
          var t, n, o, r;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, e),
            L(
              ((n = this),
              (o = M((o = e))),
              (t = (function (t, e) {
                if (e && ('object' === E(e) || 'function' == typeof e)) return e;
                if (void 0 !== e)
                  throw new TypeError('Derived constructors may only return object or undefined');
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(t);
              })(n, R() ? Reflect.construct(o, r || [], M(n).constructor) : o.apply(n, r)))),
              '_shadowRoot',
              null,
            ),
            L(t, '_style', null),
            L(t, '_column', 3),
            L(t, '_gutter', 16),
            (t._shadowRoot = t.attachShadow({ mode: 'open' })),
            (t._style = document.createElement('style')),
            t.render(),
            t
          );
        }
        return (
          (function (t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError('Super expression must either be null or a function');
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && A(t, e);
          })(e, t),
          (n = e),
          (r = [
            {
              key: 'observedAttributes',
              get: function () {
                return ['column', 'gutter'];
              },
            },
          ]),
          (o = [
            {
              key: '_emptyContent',
              value: function () {
                this._shadowRoot.innerHTML = '';
              },
            },
            {
              key: 'column',
              get: function () {
                return this._column;
              },
              set: function (t) {
                var e = Number(t);
                v.isValidInteger(e) && (this.column = t);
              },
            },
            {
              key: 'gutter',
              get: function () {
                return this._gutter;
              },
            },
            {
              key: '_updateStyle',
              value: function () {
                this._style.textContent =
                  '\n      :host{\n        display: block;\n      }\n\n      .list{\n        display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n        gap: '.concat(
                    this.gutter,
                    'px;\n        color: #092639;\n        margin: 15px 0px 20px 0px;   \n      }\n    ',
                  );
              },
            },
            {
              key: 'render',
              value: function () {
                this._emptyContent(),
                  this._updateStyle(),
                  this._shadowRoot.appendChild(this._style),
                  (this._shadowRoot.innerHTML +=
                    "\n      <div class='list'>\n        <slot></slot>\n      </div>\n    ");
              },
            },
            {
              key: 'attributeChangedCallBack',
              value: function (t, e, n) {
                switch (t) {
                  case 'column':
                    this._column = n;
                    break;
                  case 'gutter':
                    this._gutter = n;
                }
                this.render();
              },
            },
          ]) && P(n.prototype, o),
          r && P(n, r),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          n
        );
        var n, o, r;
      })(C(HTMLElement));
      function D(t) {
        return (
          (D =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          D(t)
        );
      }
      function H(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, I(o.key), o);
        }
      }
      function I(t) {
        var e = (function (t, e) {
          if ('object' != D(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(t, 'string');
            if ('object' != D(o)) return o;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == D(e) ? e : e + '';
      }
      customElements.define('note-list', B), n(542);
      var z = [
          {
            id: 'notes-jT-jjsyz61J8XKiI',
            title: 'Welcome to Notes, Dimas!',
            body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
            createdAt: '2022-07-28T10:03:12.594Z',
            archived: !1,
          },
          {
            id: 'notes-aB-cdefg12345',
            title: 'Meeting Agenda',
            body: 'Discuss project updates and assign tasks for the upcoming week.',
            createdAt: '2022-08-05T15:30:00.000Z',
            archived: !1,
          },
          {
            id: 'notes-XyZ-789012345',
            title: 'Shopping List',
            body: 'Milk, eggs, bread, fruits, and vegetables.',
            createdAt: '2022-08-10T08:45:23.120Z',
            archived: !1,
          },
          {
            id: 'notes-1a-2b3c4d5e6f',
            title: 'Personal Goals',
            body: 'Read two books per month, exercise three times a week, learn a new language.',
            createdAt: '2022-08-15T18:12:55.789Z',
            archived: !1,
          },
          {
            id: 'notes-LMN-456789',
            title: 'Recipe: Spaghetti Bolognese',
            body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
            createdAt: '2022-08-20T12:30:40.200Z',
            archived: !1,
          },
          {
            id: 'notes-QwErTyUiOp',
            title: 'Workout Routine',
            body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
            createdAt: '2022-08-25T09:15:17.890Z',
            archived: !1,
          },
          {
            id: 'notes-abcdef-987654',
            title: 'Book Recommendations',
            body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
            createdAt: '2022-09-01T14:20:05.321Z',
            archived: !1,
          },
          {
            id: 'notes-zyxwv-54321',
            title: 'Daily Reflections',
            body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
            createdAt: '2022-09-07T20:40:30.150Z',
            archived: !1,
          },
          {
            id: 'notes-poiuyt-987654',
            title: 'Travel Bucket List',
            body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
            createdAt: '2022-09-15T11:55:44.678Z',
            archived: !1,
          },
          {
            id: 'notes-asdfgh-123456',
            title: 'Coding Projects',
            body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
            createdAt: '2022-09-20T17:10:12.987Z',
            archived: !1,
          },
          {
            id: 'notes-5678-abcd-efgh',
            title: 'Project Deadline',
            body: 'Complete project tasks by the deadline on October 1st.',
            createdAt: '2022-09-28T14:00:00.000Z',
            archived: !1,
          },
          {
            id: 'notes-9876-wxyz-1234',
            title: 'Health Checkup',
            body: 'Schedule a routine health checkup with the doctor.',
            createdAt: '2022-10-05T09:30:45.600Z',
            archived: !1,
          },
          {
            id: 'notes-qwerty-8765-4321',
            title: 'Financial Goals',
            body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
            createdAt: '2022-10-12T12:15:30.890Z',
            archived: !1,
          },
          {
            id: 'notes-98765-54321-12345',
            title: 'Holiday Plans',
            body: 'Research and plan for the upcoming holiday destination.',
            createdAt: '2022-10-20T16:45:00.000Z',
            archived: !1,
          },
          {
            id: 'notes-1234-abcd-5678',
            title: 'Language Learning',
            body: 'Practice Spanish vocabulary for 30 minutes every day.',
            createdAt: '2022-10-28T08:00:20.120Z',
            archived: !1,
          },
        ],
        Z = (function () {
          return (
            (t = function t() {
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, t);
            }),
            (e = [
              {
                key: 'getAll',
                value: function () {
                  return z;
                },
              },
            ]),
            null && H(t.prototype, null),
            e && H(t, e),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            t
          );
          var t, e;
        })();
      function q(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      const F = function () {
        var t,
          e,
          n = document.querySelector('#activeNoteContainer').querySelector('note-list'),
          o = function (t) {
            var e,
              o = t.map(function (t) {
                var e = document.createElement('note-item');
                return (e.note = t), e;
              });
            v.emptyElement(n),
              n.append.apply(
                n,
                (function (t) {
                  if (Array.isArray(t)) return q(t);
                })((e = o)) ||
                  (function (t) {
                    if (
                      ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
                      null != t['@@iterator']
                    )
                      return Array.from(t);
                  })(e) ||
                  (function (t, e) {
                    if (t) {
                      if ('string' == typeof t) return q(t, e);
                      var n = Object.prototype.toString.call(t).slice(8, -1);
                      return (
                        'Object' === n && t.constructor && (n = t.constructor.name),
                        'Map' === n || 'Set' === n
                          ? Array.from(t)
                          : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? q(t, e)
                            : void 0
                      );
                    }
                  })(e) ||
                  (function () {
                    throw new TypeError(
                      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                  })(),
              );
          };
        (t = Z.getAll()),
          o(t),
          (e = document.querySelector('note-form')).shadowRoot
            .querySelector('#NoteSubmit')
            .addEventListener('submit', function (t) {
              t.preventDefault();
              var n = e.shadowRoot.getElementById('inputNoteTitle').value,
                r = e.shadowRoot.getElementById('inputNoteContent').value,
                i = {
                  id: +new Date(),
                  title: n,
                  body: r,
                  createdAt: new Date(),
                  archived: !1,
                };
              z.push(i), o(z);
            });
      };
      document.addEventListener('DOMContentLoaded', function () {
        var t = document.querySelector('app-bar'),
          e = document.querySelector('footer-bar'),
          n = t.shadowRoot.querySelector('#lightmode-darkmode'),
          o = t.shadowRoot.querySelector('img'),
          r = document.querySelectorAll('.section-title'),
          i = document.querySelectorAll('loading-indicator'),
          c = !1;
        (n.onclick = function () {
          var n = (c = !c) ? '#ffffff' : '#092639',
            u = c ? '#cccccc' : '#a0a0a0',
            a = c ? '#1B273E' : '#acc8ff',
            l = c ? '#25324E' : '#ffffff',
            s = c ? 'darkmode.svg' : 'lightmode.svg';
          o.setAttribute('src', s),
            e.setAttribute('color', n),
            e.setAttribute('background-color', a),
            (t.style.color = n),
            (t.style.backgroundColor = a),
            (document.body.style.backgroundColor = l),
            r.forEach(function (t) {
              t.style.color = n;
            }),
            i.forEach(function (t) {
              var e = t.shadowRoot.querySelector('.loading');
              e && (e.style.color = u);
            });
        }),
          F();
      });
    })();
})();
