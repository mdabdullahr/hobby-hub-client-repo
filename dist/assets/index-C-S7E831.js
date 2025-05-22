(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const f of d.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && o(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function o(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = r(c);
    fetch(c.href, d);
  }
})();
function n1(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var tf = { exports: {} },
  Zl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ay;
function a1() {
  if (ay) return Zl;
  ay = 1;
  var a = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.fragment");
  function r(o, c, d) {
    var f = null;
    if (
      (d !== void 0 && (f = "" + d),
      c.key !== void 0 && (f = "" + c.key),
      "key" in c)
    ) {
      d = {};
      for (var p in c) p !== "key" && (d[p] = c[p]);
    } else d = c;
    return (
      (c = d.ref),
      { $$typeof: a, type: o, key: f, ref: c !== void 0 ? c : null, props: d }
    );
  }
  return (Zl.Fragment = t), (Zl.jsx = r), (Zl.jsxs = r), Zl;
}
var iy;
function i1() {
  return iy || ((iy = 1), (tf.exports = a1())), tf.exports;
}
var v = i1(),
  nf = { exports: {} },
  Ee = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ry;
function r1() {
  if (ry) return Ee;
  ry = 1;
  var a = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    E = Symbol.iterator;
  function w(x) {
    return x === null || typeof x != "object"
      ? null
      : ((x = (E && x[E]) || x["@@iterator"]),
        typeof x == "function" ? x : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    M = Object.assign,
    $ = {};
  function P(x, Y, te) {
    (this.props = x),
      (this.context = Y),
      (this.refs = $),
      (this.updater = te || O);
  }
  (P.prototype.isReactComponent = {}),
    (P.prototype.setState = function (x, Y) {
      if (typeof x != "object" && typeof x != "function" && x != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, x, Y, "setState");
    }),
    (P.prototype.forceUpdate = function (x) {
      this.updater.enqueueForceUpdate(this, x, "forceUpdate");
    });
  function I() {}
  I.prototype = P.prototype;
  function B(x, Y, te) {
    (this.props = x),
      (this.context = Y),
      (this.refs = $),
      (this.updater = te || O);
  }
  var V = (B.prototype = new I());
  (V.constructor = B), M(V, P.prototype), (V.isPureReactComponent = !0);
  var Q = Array.isArray,
    F = { H: null, A: null, T: null, S: null, V: null },
    D = Object.prototype.hasOwnProperty;
  function ee(x, Y, te, W, se, Oe) {
    return (
      (te = Oe.ref),
      {
        $$typeof: a,
        type: x,
        key: Y,
        ref: te !== void 0 ? te : null,
        props: Oe,
      }
    );
  }
  function ne(x, Y) {
    return ee(x.type, Y, void 0, void 0, void 0, x.props);
  }
  function le(x) {
    return typeof x == "object" && x !== null && x.$$typeof === a;
  }
  function Me(x) {
    var Y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      x.replace(/[=:]/g, function (te) {
        return Y[te];
      })
    );
  }
  var ze = /\/+/g;
  function Ge(x, Y) {
    return typeof x == "object" && x !== null && x.key != null
      ? Me("" + x.key)
      : Y.toString(36);
  }
  function Re() {}
  function Ie(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (
          (typeof x.status == "string"
            ? x.then(Re, Re)
            : ((x.status = "pending"),
              x.then(
                function (Y) {
                  x.status === "pending" &&
                    ((x.status = "fulfilled"), (x.value = Y));
                },
                function (Y) {
                  x.status === "pending" &&
                    ((x.status = "rejected"), (x.reason = Y));
                }
              )),
          x.status)
        ) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function Le(x, Y, te, W, se) {
    var Oe = typeof x;
    (Oe === "undefined" || Oe === "boolean") && (x = null);
    var he = !1;
    if (x === null) he = !0;
    else
      switch (Oe) {
        case "bigint":
        case "string":
        case "number":
          he = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case a:
            case t:
              he = !0;
              break;
            case b:
              return (he = x._init), Le(he(x._payload), Y, te, W, se);
          }
      }
    if (he)
      return (
        (se = se(x)),
        (he = W === "" ? "." + Ge(x, 0) : W),
        Q(se)
          ? ((te = ""),
            he != null && (te = he.replace(ze, "$&/") + "/"),
            Le(se, Y, te, "", function (zn) {
              return zn;
            }))
          : se != null &&
            (le(se) &&
              (se = ne(
                se,
                te +
                  (se.key == null || (x && x.key === se.key)
                    ? ""
                    : ("" + se.key).replace(ze, "$&/") + "/") +
                  he
              )),
            Y.push(se)),
        1
      );
    he = 0;
    var kt = W === "" ? "." : W + ":";
    if (Q(x))
      for (var et = 0; et < x.length; et++)
        (W = x[et]), (Oe = kt + Ge(W, et)), (he += Le(W, Y, te, Oe, se));
    else if (((et = w(x)), typeof et == "function"))
      for (x = et.call(x), et = 0; !(W = x.next()).done; )
        (W = W.value), (Oe = kt + Ge(W, et++)), (he += Le(W, Y, te, Oe, se));
    else if (Oe === "object") {
      if (typeof x.then == "function") return Le(Ie(x), Y, te, W, se);
      throw (
        ((Y = String(x)),
        Error(
          "Objects are not valid as a React child (found: " +
            (Y === "[object Object]"
              ? "object with keys {" + Object.keys(x).join(", ") + "}"
              : Y) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return he;
  }
  function L(x, Y, te) {
    if (x == null) return x;
    var W = [],
      se = 0;
    return (
      Le(x, W, "", "", function (Oe) {
        return Y.call(te, Oe, se++);
      }),
      W
    );
  }
  function Z(x) {
    if (x._status === -1) {
      var Y = x._result;
      (Y = Y()),
        Y.then(
          function (te) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 1), (x._result = te));
          },
          function (te) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 2), (x._result = te));
          }
        ),
        x._status === -1 && ((x._status = 0), (x._result = Y));
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var ae =
    typeof reportError == "function"
      ? reportError
      : function (x) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var Y = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof x == "object" &&
                x !== null &&
                typeof x.message == "string"
                  ? String(x.message)
                  : String(x),
              error: x,
            });
            if (!window.dispatchEvent(Y)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", x);
            return;
          }
          console.error(x);
        };
  function xe() {}
  return (
    (Ee.Children = {
      map: L,
      forEach: function (x, Y, te) {
        L(
          x,
          function () {
            Y.apply(this, arguments);
          },
          te
        );
      },
      count: function (x) {
        var Y = 0;
        return (
          L(x, function () {
            Y++;
          }),
          Y
        );
      },
      toArray: function (x) {
        return (
          L(x, function (Y) {
            return Y;
          }) || []
        );
      },
      only: function (x) {
        if (!le(x))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return x;
      },
    }),
    (Ee.Component = P),
    (Ee.Fragment = r),
    (Ee.Profiler = c),
    (Ee.PureComponent = B),
    (Ee.StrictMode = o),
    (Ee.Suspense = h),
    (Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F),
    (Ee.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (x) {
        return F.H.useMemoCache(x);
      },
    }),
    (Ee.cache = function (x) {
      return function () {
        return x.apply(null, arguments);
      };
    }),
    (Ee.cloneElement = function (x, Y, te) {
      if (x == null)
        throw Error(
          "The argument must be a React element, but you passed " + x + "."
        );
      var W = M({}, x.props),
        se = x.key,
        Oe = void 0;
      if (Y != null)
        for (he in (Y.ref !== void 0 && (Oe = void 0),
        Y.key !== void 0 && (se = "" + Y.key),
        Y))
          !D.call(Y, he) ||
            he === "key" ||
            he === "__self" ||
            he === "__source" ||
            (he === "ref" && Y.ref === void 0) ||
            (W[he] = Y[he]);
      var he = arguments.length - 2;
      if (he === 1) W.children = te;
      else if (1 < he) {
        for (var kt = Array(he), et = 0; et < he; et++)
          kt[et] = arguments[et + 2];
        W.children = kt;
      }
      return ee(x.type, se, void 0, void 0, Oe, W);
    }),
    (Ee.createContext = function (x) {
      return (
        (x = {
          $$typeof: f,
          _currentValue: x,
          _currentValue2: x,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (x.Provider = x),
        (x.Consumer = { $$typeof: d, _context: x }),
        x
      );
    }),
    (Ee.createElement = function (x, Y, te) {
      var W,
        se = {},
        Oe = null;
      if (Y != null)
        for (W in (Y.key !== void 0 && (Oe = "" + Y.key), Y))
          D.call(Y, W) &&
            W !== "key" &&
            W !== "__self" &&
            W !== "__source" &&
            (se[W] = Y[W]);
      var he = arguments.length - 2;
      if (he === 1) se.children = te;
      else if (1 < he) {
        for (var kt = Array(he), et = 0; et < he; et++)
          kt[et] = arguments[et + 2];
        se.children = kt;
      }
      if (x && x.defaultProps)
        for (W in ((he = x.defaultProps), he))
          se[W] === void 0 && (se[W] = he[W]);
      return ee(x, Oe, void 0, void 0, null, se);
    }),
    (Ee.createRef = function () {
      return { current: null };
    }),
    (Ee.forwardRef = function (x) {
      return { $$typeof: p, render: x };
    }),
    (Ee.isValidElement = le),
    (Ee.lazy = function (x) {
      return { $$typeof: b, _payload: { _status: -1, _result: x }, _init: Z };
    }),
    (Ee.memo = function (x, Y) {
      return { $$typeof: g, type: x, compare: Y === void 0 ? null : Y };
    }),
    (Ee.startTransition = function (x) {
      var Y = F.T,
        te = {};
      F.T = te;
      try {
        var W = x(),
          se = F.S;
        se !== null && se(te, W),
          typeof W == "object" &&
            W !== null &&
            typeof W.then == "function" &&
            W.then(xe, ae);
      } catch (Oe) {
        ae(Oe);
      } finally {
        F.T = Y;
      }
    }),
    (Ee.unstable_useCacheRefresh = function () {
      return F.H.useCacheRefresh();
    }),
    (Ee.use = function (x) {
      return F.H.use(x);
    }),
    (Ee.useActionState = function (x, Y, te) {
      return F.H.useActionState(x, Y, te);
    }),
    (Ee.useCallback = function (x, Y) {
      return F.H.useCallback(x, Y);
    }),
    (Ee.useContext = function (x) {
      return F.H.useContext(x);
    }),
    (Ee.useDebugValue = function () {}),
    (Ee.useDeferredValue = function (x, Y) {
      return F.H.useDeferredValue(x, Y);
    }),
    (Ee.useEffect = function (x, Y, te) {
      var W = F.H;
      if (typeof te == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return W.useEffect(x, Y);
    }),
    (Ee.useId = function () {
      return F.H.useId();
    }),
    (Ee.useImperativeHandle = function (x, Y, te) {
      return F.H.useImperativeHandle(x, Y, te);
    }),
    (Ee.useInsertionEffect = function (x, Y) {
      return F.H.useInsertionEffect(x, Y);
    }),
    (Ee.useLayoutEffect = function (x, Y) {
      return F.H.useLayoutEffect(x, Y);
    }),
    (Ee.useMemo = function (x, Y) {
      return F.H.useMemo(x, Y);
    }),
    (Ee.useOptimistic = function (x, Y) {
      return F.H.useOptimistic(x, Y);
    }),
    (Ee.useReducer = function (x, Y, te) {
      return F.H.useReducer(x, Y, te);
    }),
    (Ee.useRef = function (x) {
      return F.H.useRef(x);
    }),
    (Ee.useState = function (x) {
      return F.H.useState(x);
    }),
    (Ee.useSyncExternalStore = function (x, Y, te) {
      return F.H.useSyncExternalStore(x, Y, te);
    }),
    (Ee.useTransition = function () {
      return F.H.useTransition();
    }),
    (Ee.version = "19.1.0"),
    Ee
  );
}
var ly;
function qf() {
  return ly || ((ly = 1), (nf.exports = r1())), nf.exports;
}
var A = qf();
const Ve = n1(A);
var af = { exports: {} },
  Jl = {},
  rf = { exports: {} },
  lf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oy;
function l1() {
  return (
    oy ||
      ((oy = 1),
      (function (a) {
        function t(L, Z) {
          var ae = L.length;
          L.push(Z);
          e: for (; 0 < ae; ) {
            var xe = (ae - 1) >>> 1,
              x = L[xe];
            if (0 < c(x, Z)) (L[xe] = Z), (L[ae] = x), (ae = xe);
            else break e;
          }
        }
        function r(L) {
          return L.length === 0 ? null : L[0];
        }
        function o(L) {
          if (L.length === 0) return null;
          var Z = L[0],
            ae = L.pop();
          if (ae !== Z) {
            L[0] = ae;
            e: for (var xe = 0, x = L.length, Y = x >>> 1; xe < Y; ) {
              var te = 2 * (xe + 1) - 1,
                W = L[te],
                se = te + 1,
                Oe = L[se];
              if (0 > c(W, ae))
                se < x && 0 > c(Oe, W)
                  ? ((L[xe] = Oe), (L[se] = ae), (xe = se))
                  : ((L[xe] = W), (L[te] = ae), (xe = te));
              else if (se < x && 0 > c(Oe, ae))
                (L[xe] = Oe), (L[se] = ae), (xe = se);
              else break e;
            }
          }
          return Z;
        }
        function c(L, Z) {
          var ae = L.sortIndex - Z.sortIndex;
          return ae !== 0 ? ae : L.id - Z.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          a.unstable_now = function () {
            return d.now();
          };
        } else {
          var f = Date,
            p = f.now();
          a.unstable_now = function () {
            return f.now() - p;
          };
        }
        var h = [],
          g = [],
          b = 1,
          E = null,
          w = 3,
          O = !1,
          M = !1,
          $ = !1,
          P = !1,
          I = typeof setTimeout == "function" ? setTimeout : null,
          B = typeof clearTimeout == "function" ? clearTimeout : null,
          V = typeof setImmediate < "u" ? setImmediate : null;
        function Q(L) {
          for (var Z = r(g); Z !== null; ) {
            if (Z.callback === null) o(g);
            else if (Z.startTime <= L)
              o(g), (Z.sortIndex = Z.expirationTime), t(h, Z);
            else break;
            Z = r(g);
          }
        }
        function F(L) {
          if ((($ = !1), Q(L), !M))
            if (r(h) !== null) (M = !0), D || ((D = !0), Ge());
            else {
              var Z = r(g);
              Z !== null && Le(F, Z.startTime - L);
            }
        }
        var D = !1,
          ee = -1,
          ne = 5,
          le = -1;
        function Me() {
          return P ? !0 : !(a.unstable_now() - le < ne);
        }
        function ze() {
          if (((P = !1), D)) {
            var L = a.unstable_now();
            le = L;
            var Z = !0;
            try {
              e: {
                (M = !1), $ && (($ = !1), B(ee), (ee = -1)), (O = !0);
                var ae = w;
                try {
                  t: {
                    for (
                      Q(L), E = r(h);
                      E !== null && !(E.expirationTime > L && Me());

                    ) {
                      var xe = E.callback;
                      if (typeof xe == "function") {
                        (E.callback = null), (w = E.priorityLevel);
                        var x = xe(E.expirationTime <= L);
                        if (((L = a.unstable_now()), typeof x == "function")) {
                          (E.callback = x), Q(L), (Z = !0);
                          break t;
                        }
                        E === r(h) && o(h), Q(L);
                      } else o(h);
                      E = r(h);
                    }
                    if (E !== null) Z = !0;
                    else {
                      var Y = r(g);
                      Y !== null && Le(F, Y.startTime - L), (Z = !1);
                    }
                  }
                  break e;
                } finally {
                  (E = null), (w = ae), (O = !1);
                }
                Z = void 0;
              }
            } finally {
              Z ? Ge() : (D = !1);
            }
          }
        }
        var Ge;
        if (typeof V == "function")
          Ge = function () {
            V(ze);
          };
        else if (typeof MessageChannel < "u") {
          var Re = new MessageChannel(),
            Ie = Re.port2;
          (Re.port1.onmessage = ze),
            (Ge = function () {
              Ie.postMessage(null);
            });
        } else
          Ge = function () {
            I(ze, 0);
          };
        function Le(L, Z) {
          ee = I(function () {
            L(a.unstable_now());
          }, Z);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (L) {
            L.callback = null;
          }),
          (a.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ne = 0 < L ? Math.floor(1e3 / L) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (a.unstable_next = function (L) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var Z = 3;
                break;
              default:
                Z = w;
            }
            var ae = w;
            w = Z;
            try {
              return L();
            } finally {
              w = ae;
            }
          }),
          (a.unstable_requestPaint = function () {
            P = !0;
          }),
          (a.unstable_runWithPriority = function (L, Z) {
            switch (L) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                L = 3;
            }
            var ae = w;
            w = L;
            try {
              return Z();
            } finally {
              w = ae;
            }
          }),
          (a.unstable_scheduleCallback = function (L, Z, ae) {
            var xe = a.unstable_now();
            switch (
              (typeof ae == "object" && ae !== null
                ? ((ae = ae.delay),
                  (ae = typeof ae == "number" && 0 < ae ? xe + ae : xe))
                : (ae = xe),
              L)
            ) {
              case 1:
                var x = -1;
                break;
              case 2:
                x = 250;
                break;
              case 5:
                x = 1073741823;
                break;
              case 4:
                x = 1e4;
                break;
              default:
                x = 5e3;
            }
            return (
              (x = ae + x),
              (L = {
                id: b++,
                callback: Z,
                priorityLevel: L,
                startTime: ae,
                expirationTime: x,
                sortIndex: -1,
              }),
              ae > xe
                ? ((L.sortIndex = ae),
                  t(g, L),
                  r(h) === null &&
                    L === r(g) &&
                    ($ ? (B(ee), (ee = -1)) : ($ = !0), Le(F, ae - xe)))
                : ((L.sortIndex = x),
                  t(h, L),
                  M || O || ((M = !0), D || ((D = !0), Ge()))),
              L
            );
          }),
          (a.unstable_shouldYield = Me),
          (a.unstable_wrapCallback = function (L) {
            var Z = w;
            return function () {
              var ae = w;
              w = Z;
              try {
                return L.apply(this, arguments);
              } finally {
                w = ae;
              }
            };
          });
      })(lf)),
    lf
  );
}
var sy;
function o1() {
  return sy || ((sy = 1), (rf.exports = l1())), rf.exports;
}
var of = { exports: {} },
  Nt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cy;
function s1() {
  if (cy) return Nt;
  cy = 1;
  var a = qf();
  function t(h) {
    var g = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        g += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return (
      "Minified React error #" +
      h +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var o = {
      d: {
        f: r,
        r: function () {
          throw Error(t(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function d(h, g, b) {
    var E =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: E == null ? null : "" + E,
      children: h,
      containerInfo: g,
      implementation: b,
    };
  }
  var f = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(h, g) {
    if (h === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (Nt.createPortal = function (h, g) {
      var b =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(t(299));
      return d(h, g, null, b);
    }),
    (Nt.flushSync = function (h) {
      var g = f.T,
        b = o.p;
      try {
        if (((f.T = null), (o.p = 2), h)) return h();
      } finally {
        (f.T = g), (o.p = b), o.d.f();
      }
    }),
    (Nt.preconnect = function (h, g) {
      typeof h == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        o.d.C(h, g));
    }),
    (Nt.prefetchDNS = function (h) {
      typeof h == "string" && o.d.D(h);
    }),
    (Nt.preinit = function (h, g) {
      if (typeof h == "string" && g && typeof g.as == "string") {
        var b = g.as,
          E = p(b, g.crossOrigin),
          w = typeof g.integrity == "string" ? g.integrity : void 0,
          O = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        b === "style"
          ? o.d.S(h, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: E,
              integrity: w,
              fetchPriority: O,
            })
          : b === "script" &&
            o.d.X(h, {
              crossOrigin: E,
              integrity: w,
              fetchPriority: O,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (Nt.preinitModule = function (h, g) {
      if (typeof h == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var b = p(g.as, g.crossOrigin);
            o.d.M(h, {
              crossOrigin: b,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && o.d.M(h);
    }),
    (Nt.preload = function (h, g) {
      if (
        typeof h == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var b = g.as,
          E = p(b, g.crossOrigin);
        o.d.L(h, b, {
          crossOrigin: E,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (Nt.preloadModule = function (h, g) {
      if (typeof h == "string")
        if (g) {
          var b = p(g.as, g.crossOrigin);
          o.d.m(h, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: b,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else o.d.m(h);
    }),
    (Nt.requestFormReset = function (h) {
      o.d.r(h);
    }),
    (Nt.unstable_batchedUpdates = function (h, g) {
      return h(g);
    }),
    (Nt.useFormState = function (h, g, b) {
      return f.H.useFormState(h, g, b);
    }),
    (Nt.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (Nt.version = "19.1.0"),
    Nt
  );
}
var uy;
function c1() {
  if (uy) return of.exports;
  uy = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (t) {
        console.error(t);
      }
  }
  return a(), (of.exports = s1()), of.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dy;
function u1() {
  if (dy) return Jl;
  dy = 1;
  var a = o1(),
    t = qf(),
    r = c1();
  function o(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        n += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function d(e) {
    var n = e,
      i = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), (n.flags & 4098) !== 0 && (i = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? i : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (d(e) !== e) throw Error(o(188));
  }
  function h(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = d(e)), n === null)) throw Error(o(188));
      return n !== e ? null : e;
    }
    for (var i = e, l = n; ; ) {
      var s = i.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (((l = s.return), l !== null)) {
          i = l;
          continue;
        }
        break;
      }
      if (s.child === u.child) {
        for (u = s.child; u; ) {
          if (u === i) return p(s), e;
          if (u === l) return p(s), n;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (i.return !== l.return) (i = s), (l = u);
      else {
        for (var m = !1, y = s.child; y; ) {
          if (y === i) {
            (m = !0), (i = s), (l = u);
            break;
          }
          if (y === l) {
            (m = !0), (l = s), (i = u);
            break;
          }
          y = y.sibling;
        }
        if (!m) {
          for (y = u.child; y; ) {
            if (y === i) {
              (m = !0), (i = u), (l = s);
              break;
            }
            if (y === l) {
              (m = !0), (l = u), (i = s);
              break;
            }
            y = y.sibling;
          }
          if (!m) throw Error(o(189));
        }
      }
      if (i.alternate !== l) throw Error(o(190));
    }
    if (i.tag !== 3) throw Error(o(188));
    return i.stateNode.current === i ? e : n;
  }
  function g(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((n = g(e)), n !== null)) return n;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign,
    E = Symbol.for("react.element"),
    w = Symbol.for("react.transitional.element"),
    O = Symbol.for("react.portal"),
    M = Symbol.for("react.fragment"),
    $ = Symbol.for("react.strict_mode"),
    P = Symbol.for("react.profiler"),
    I = Symbol.for("react.provider"),
    B = Symbol.for("react.consumer"),
    V = Symbol.for("react.context"),
    Q = Symbol.for("react.forward_ref"),
    F = Symbol.for("react.suspense"),
    D = Symbol.for("react.suspense_list"),
    ee = Symbol.for("react.memo"),
    ne = Symbol.for("react.lazy"),
    le = Symbol.for("react.activity"),
    Me = Symbol.for("react.memo_cache_sentinel"),
    ze = Symbol.iterator;
  function Ge(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (ze && e[ze]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Re = Symbol.for("react.client.reference");
  function Ie(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Re ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case M:
        return "Fragment";
      case P:
        return "Profiler";
      case $:
        return "StrictMode";
      case F:
        return "Suspense";
      case D:
        return "SuspenseList";
      case le:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case O:
          return "Portal";
        case V:
          return (e.displayName || "Context") + ".Provider";
        case B:
          return (e._context.displayName || "Context") + ".Consumer";
        case Q:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ee:
          return (
            (n = e.displayName || null), n !== null ? n : Ie(e.type) || "Memo"
          );
        case ne:
          (n = e._payload), (e = e._init);
          try {
            return Ie(e(n));
          } catch {}
      }
    return null;
  }
  var Le = Array.isArray,
    L = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ae = { pending: !1, data: null, method: null, action: null },
    xe = [],
    x = -1;
  function Y(e) {
    return { current: e };
  }
  function te(e) {
    0 > x || ((e.current = xe[x]), (xe[x] = null), x--);
  }
  function W(e, n) {
    x++, (xe[x] = e.current), (e.current = n);
  }
  var se = Y(null),
    Oe = Y(null),
    he = Y(null),
    kt = Y(null);
  function et(e, n) {
    switch ((W(he, n), W(Oe, e), W(se, null), n.nodeType)) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Ng(e) : 0;
        break;
      default:
        if (((e = n.tagName), (n = n.namespaceURI)))
          (n = Ng(n)), (e = Mg(n, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    te(se), W(se, e);
  }
  function zn() {
    te(se), te(Oe), te(he);
  }
  function vt(e) {
    e.memoizedState !== null && W(kt, e);
    var n = se.current,
      i = Mg(n, e.type);
    n !== i && (W(Oe, e), W(se, i));
  }
  function Tn(e) {
    Oe.current === e && (te(se), te(Oe)),
      kt.current === e && (te(kt), (Yl._currentValue = ae));
  }
  var Qi = Object.prototype.hasOwnProperty,
    Wr = a.unstable_scheduleCallback,
    Cn = a.unstable_cancelCallback,
    Kc = a.unstable_shouldYield,
    Fc = a.unstable_requestPaint,
    Ft = a.unstable_now,
    Qc = a.unstable_getCurrentPriorityLevel,
    Uo = a.unstable_ImmediatePriority,
    zo = a.unstable_UserBlockingPriority,
    Zi = a.unstable_NormalPriority,
    Zn = a.unstable_LowPriority,
    Ea = a.unstable_IdlePriority,
    Io = a.log,
    el = a.unstable_setDisableYieldValue,
    Ht = null,
    lt = null;
  function An(e) {
    if (
      (typeof Io == "function" && el(e),
      lt && typeof lt.setStrictMode == "function")
    )
      try {
        lt.setStrictMode(Ht, e);
      } catch {}
  }
  var Tt = Math.clz32 ? Math.clz32 : Bo,
    Zc = Math.log,
    In = Math.LN2;
  function Bo(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Zc(e) / In) | 0)) | 0;
  }
  var hi = 256,
    mi = 4194304;
  function Jn(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function pi(e, n, i) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var s = 0,
      u = e.suspendedLanes,
      m = e.pingedLanes;
    e = e.warmLanes;
    var y = l & 134217727;
    return (
      y !== 0
        ? ((l = y & ~u),
          l !== 0
            ? (s = Jn(l))
            : ((m &= y),
              m !== 0
                ? (s = Jn(m))
                : i || ((i = y & ~e), i !== 0 && (s = Jn(i)))))
        : ((y = l & ~u),
          y !== 0
            ? (s = Jn(y))
            : m !== 0
            ? (s = Jn(m))
            : i || ((i = l & ~e), i !== 0 && (s = Jn(i)))),
      s === 0
        ? 0
        : n !== 0 &&
          n !== s &&
          (n & u) === 0 &&
          ((u = s & -s),
          (i = n & -n),
          u >= i || (u === 32 && (i & 4194048) !== 0))
        ? n
        : s
    );
  }
  function Bn(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function Ho(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ji() {
    var e = hi;
    return (hi <<= 1), (hi & 4194048) === 0 && (hi = 256), e;
  }
  function Po() {
    var e = mi;
    return (mi <<= 1), (mi & 62914560) === 0 && (mi = 4194304), e;
  }
  function Wi(e) {
    for (var n = [], i = 0; 31 > i; i++) n.push(e);
    return n;
  }
  function gi(e, n) {
    (e.pendingLanes |= n),
      n !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Vo(e, n, i, l, s, u) {
    var m = e.pendingLanes;
    (e.pendingLanes = i),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= i),
      (e.entangledLanes &= i),
      (e.errorRecoveryDisabledLanes &= i),
      (e.shellSuspendCounter = 0);
    var y = e.entanglements,
      _ = e.expirationTimes,
      k = e.hiddenUpdates;
    for (i = m & ~i; 0 < i; ) {
      var q = 31 - Tt(i),
        X = 1 << q;
      (y[q] = 0), (_[q] = -1);
      var j = k[q];
      if (j !== null)
        for (k[q] = null, q = 0; q < j.length; q++) {
          var U = j[q];
          U !== null && (U.lane &= -536870913);
        }
      i &= ~X;
    }
    l !== 0 && yi(e, l, 0),
      u !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(m & ~n));
  }
  function yi(e, n, i) {
    (e.pendingLanes |= n), (e.suspendedLanes &= ~n);
    var l = 31 - Tt(n);
    (e.entangledLanes |= n),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (i & 4194090));
  }
  function vi(e, n) {
    var i = (e.entangledLanes |= n);
    for (e = e.entanglements; i; ) {
      var l = 31 - Tt(i),
        s = 1 << l;
      (s & n) | (e[l] & n) && (e[l] |= n), (i &= ~s);
    }
  }
  function tl(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function nl(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function S() {
    var e = Z.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Zg(e.type));
  }
  function R(e, n) {
    var i = Z.p;
    try {
      return (Z.p = e), n();
    } finally {
      Z.p = i;
    }
  }
  var z = Math.random().toString(36).slice(2),
    K = "__reactFiber$" + z,
    J = "__reactProps$" + z,
    oe = "__reactContainer$" + z,
    pe = "__reactEvents$" + z,
    ie = "__reactListeners$" + z,
    de = "__reactHandles$" + z,
    fe = "__reactResources$" + z,
    ve = "__reactMarker$" + z;
  function ce(e) {
    delete e[K], delete e[J], delete e[pe], delete e[ie], delete e[de];
  }
  function _e(e) {
    var n = e[K];
    if (n) return n;
    for (var i = e.parentNode; i; ) {
      if ((n = i[oe] || i[K])) {
        if (
          ((i = n.alternate),
          n.child !== null || (i !== null && i.child !== null))
        )
          for (e = Ug(e); e !== null; ) {
            if ((i = e[K])) return i;
            e = Ug(e);
          }
        return n;
      }
      (e = i), (i = e.parentNode);
    }
    return null;
  }
  function Be(e) {
    if ((e = e[K] || e[oe])) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function at(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(o(33));
  }
  function ot(e) {
    var n = e[fe];
    return (
      n ||
        (n = e[fe] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function He(e) {
    e[ve] = !0;
  }
  var ke = new Set(),
    Sa = {};
  function Lt(e, n) {
    un(e, n), un(e + "Capture", n);
  }
  function un(e, n) {
    for (Sa[e] = n, e = 0; e < n.length; e++) ke.add(n[e]);
  }
  var Pt = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Ta = {},
    Ca = {};
  function al(e) {
    return Qi.call(Ca, e)
      ? !0
      : Qi.call(Ta, e)
      ? !1
      : Pt.test(e)
      ? (Ca[e] = !0)
      : ((Ta[e] = !0), !1);
  }
  function dn(e, n, i) {
    if (al(n))
      if (i === null) e.removeAttribute(n);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var l = n.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + i);
      }
  }
  function Wn(e, n, i) {
    if (i === null) e.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + i);
    }
  }
  function Te(e, n, i, l) {
    if (l === null) e.removeAttribute(i);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttributeNS(n, i, "" + l);
    }
  }
  var Ot, Rn;
  function On(e) {
    if (Ot === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        (Ot = (n && n[1]) || ""),
          (Rn =
            -1 <
            i.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < i.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Ot +
      e +
      Rn
    );
  }
  var bi = !1;
  function it(e, n) {
    if (!e || bi) return "";
    bi = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var X = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(X.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(X, []);
                } catch (U) {
                  var j = U;
                }
                Reflect.construct(e, [], X);
              } else {
                try {
                  X.call();
                } catch (U) {
                  j = U;
                }
                e.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                j = U;
              }
              (X = e()) &&
                typeof X.catch == "function" &&
                X.catch(function () {});
            }
          } catch (U) {
            if (U && j && typeof U.stack == "string") return [U.stack, j.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      s &&
        s.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = l.DetermineComponentFrameRoot(),
        m = u[0],
        y = u[1];
      if (m && y) {
        var _ = m.split(`
`),
          k = y.split(`
`);
        for (
          s = l = 0;
          l < _.length && !_[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; s < k.length && !k[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (l === _.length || s === k.length)
          for (
            l = _.length - 1, s = k.length - 1;
            1 <= l && 0 <= s && _[l] !== k[s];

          )
            s--;
        for (; 1 <= l && 0 <= s; l--, s--)
          if (_[l] !== k[s]) {
            if (l !== 1 || s !== 1)
              do
                if ((l--, s--, 0 > s || _[l] !== k[s])) {
                  var q =
                    `
` + _[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      q.includes("<anonymous>") &&
                      (q = q.replace("<anonymous>", e.displayName)),
                    q
                  );
                }
              while (1 <= l && 0 <= s);
            break;
          }
      }
    } finally {
      (bi = !1), (Error.prepareStackTrace = i);
    }
    return (i = e ? e.displayName || e.name : "") ? On(i) : "";
  }
  function Aa(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return On(e.type);
      case 16:
        return On("Lazy");
      case 13:
        return On("Suspense");
      case 19:
        return On("SuspenseList");
      case 0:
      case 15:
        return it(e.type, !1);
      case 11:
        return it(e.type.render, !1);
      case 1:
        return it(e.type, !0);
      case 31:
        return On("Activity");
      default:
        return "";
    }
  }
  function il(e) {
    try {
      var n = "";
      do (n += Aa(e)), (e = e.return);
      while (e);
      return n;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  function Vt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ch(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function Zb(e) {
    var n = Ch(e) ? "checked" : "value",
      i = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      l = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var s = i.get,
        u = i.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (m) {
            (l = "" + m), u.call(this, m);
          },
        }),
        Object.defineProperty(e, n, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (m) {
            l = "" + m;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function qo(e) {
    e._valueTracker || (e._valueTracker = Zb(e));
  }
  function Ah(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var i = n.getValue(),
      l = "";
    return (
      e && (l = Ch(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== i ? (n.setValue(e), !0) : !1
    );
  }
  function Go(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Jb = /[\n"\\]/g;
  function fn(e) {
    return e.replace(Jb, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function Jc(e, n, i, l, s, u, m, y) {
    (e.name = ""),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (e.type = m)
        : e.removeAttribute("type"),
      n != null
        ? m === "number"
          ? ((n === 0 && e.value === "") || e.value != n) &&
            (e.value = "" + Vt(n))
          : e.value !== "" + Vt(n) && (e.value = "" + Vt(n))
        : (m !== "submit" && m !== "reset") || e.removeAttribute("value"),
      n != null
        ? Wc(e, m, Vt(n))
        : i != null
        ? Wc(e, m, Vt(i))
        : l != null && e.removeAttribute("value"),
      s == null && u != null && (e.defaultChecked = !!u),
      s != null &&
        (e.checked = s && typeof s != "function" && typeof s != "symbol"),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (e.name = "" + Vt(y))
        : e.removeAttribute("name");
  }
  function Rh(e, n, i, l, s, u, m, y) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.type = u),
      n != null || i != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || n != null)) return;
      (i = i != null ? "" + Vt(i) : ""),
        (n = n != null ? "" + Vt(n) : i),
        y || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (l = l ?? s),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = y ? e.checked : !!l),
      (e.defaultChecked = !!l),
      m != null &&
        typeof m != "function" &&
        typeof m != "symbol" &&
        typeof m != "boolean" &&
        (e.name = m);
  }
  function Wc(e, n, i) {
    (n === "number" && Go(e.ownerDocument) === e) ||
      e.defaultValue === "" + i ||
      (e.defaultValue = "" + i);
  }
  function er(e, n, i, l) {
    if (((e = e.options), n)) {
      n = {};
      for (var s = 0; s < i.length; s++) n["$" + i[s]] = !0;
      for (i = 0; i < e.length; i++)
        (s = n.hasOwnProperty("$" + e[i].value)),
          e[i].selected !== s && (e[i].selected = s),
          s && l && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + Vt(i), n = null, s = 0; s < e.length; s++) {
        if (e[s].value === i) {
          (e[s].selected = !0), l && (e[s].defaultSelected = !0);
          return;
        }
        n !== null || e[s].disabled || (n = e[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Oh(e, n, i) {
    if (
      n != null &&
      ((n = "" + Vt(n)), n !== e.value && (e.value = n), i == null)
    ) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = i != null ? "" + Vt(i) : "";
  }
  function Dh(e, n, i, l) {
    if (n == null) {
      if (l != null) {
        if (i != null) throw Error(o(92));
        if (Le(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        i = l;
      }
      i == null && (i = ""), (n = i);
    }
    (i = Vt(n)),
      (e.defaultValue = i),
      (l = e.textContent),
      l === i && l !== "" && l !== null && (e.value = l);
  }
  function tr(e, n) {
    if (n) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Wb = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Nh(e, n, i) {
    var l = n.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === ""
      ? l
        ? e.setProperty(n, "")
        : n === "float"
        ? (e.cssFloat = "")
        : (e[n] = "")
      : l
      ? e.setProperty(n, i)
      : typeof i != "number" || i === 0 || Wb.has(n)
      ? n === "float"
        ? (e.cssFloat = i)
        : (e[n] = ("" + i).trim())
      : (e[n] = i + "px");
  }
  function Mh(e, n, i) {
    if (n != null && typeof n != "object") throw Error(o(62));
    if (((e = e.style), i != null)) {
      for (var l in i)
        !i.hasOwnProperty(l) ||
          (n != null && n.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
            ? (e.cssFloat = "")
            : (e[l] = ""));
      for (var s in n)
        (l = n[s]), n.hasOwnProperty(s) && i[s] !== l && Nh(e, s, l);
    } else for (var u in n) n.hasOwnProperty(u) && Nh(e, u, n[u]);
  }
  function eu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ew = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    tw =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function $o(e) {
    return tw.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var tu = null;
  function nu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var nr = null,
    ar = null;
  function kh(e) {
    var n = Be(e);
    if (n && (e = n.stateNode)) {
      var i = e[J] || null;
      e: switch (((e = n.stateNode), n.type)) {
        case "input":
          if (
            (Jc(
              e,
              i.value,
              i.defaultValue,
              i.defaultValue,
              i.checked,
              i.defaultChecked,
              i.type,
              i.name
            ),
            (n = i.name),
            i.type === "radio" && n != null)
          ) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll(
                'input[name="' + fn("" + n) + '"][type="radio"]'
              ),
                n = 0;
              n < i.length;
              n++
            ) {
              var l = i[n];
              if (l !== e && l.form === e.form) {
                var s = l[J] || null;
                if (!s) throw Error(o(90));
                Jc(
                  l,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < i.length; n++)
              (l = i[n]), l.form === e.form && Ah(l);
          }
          break e;
        case "textarea":
          Oh(e, i.value, i.defaultValue);
          break e;
        case "select":
          (n = i.value), n != null && er(e, !!i.multiple, n, !1);
      }
    }
  }
  var au = !1;
  function Lh(e, n, i) {
    if (au) return e(n, i);
    au = !0;
    try {
      var l = e(n);
      return l;
    } finally {
      if (
        ((au = !1),
        (nr !== null || ar !== null) &&
          (Ds(), nr && ((n = nr), (e = ar), (ar = nr = null), kh(n), e)))
      )
        for (n = 0; n < e.length; n++) kh(e[n]);
    }
  }
  function rl(e, n) {
    var i = e.stateNode;
    if (i === null) return null;
    var l = i[J] || null;
    if (l === null) return null;
    i = l[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function") throw Error(o(231, n, typeof i));
    return i;
  }
  var ea = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    iu = !1;
  if (ea)
    try {
      var ll = {};
      Object.defineProperty(ll, "passive", {
        get: function () {
          iu = !0;
        },
      }),
        window.addEventListener("test", ll, ll),
        window.removeEventListener("test", ll, ll);
    } catch {
      iu = !1;
    }
  var Ra = null,
    ru = null,
    Yo = null;
  function jh() {
    if (Yo) return Yo;
    var e,
      n = ru,
      i = n.length,
      l,
      s = "value" in Ra ? Ra.value : Ra.textContent,
      u = s.length;
    for (e = 0; e < i && n[e] === s[e]; e++);
    var m = i - e;
    for (l = 1; l <= m && n[i - l] === s[u - l]; l++);
    return (Yo = s.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Xo(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ko() {
    return !0;
  }
  function Uh() {
    return !1;
  }
  function qt(e) {
    function n(i, l, s, u, m) {
      (this._reactName = i),
        (this._targetInst = s),
        (this.type = l),
        (this.nativeEvent = u),
        (this.target = m),
        (this.currentTarget = null);
      for (var y in e)
        e.hasOwnProperty(y) && ((i = e[y]), (this[y] = i ? i(u) : u[y]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Ko
          : Uh),
        (this.isPropagationStopped = Uh),
        this
      );
    }
    return (
      b(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            (this.isDefaultPrevented = Ko));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = Ko));
        },
        persist: function () {},
        isPersistent: Ko,
      }),
      n
    );
  }
  var wi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Fo = qt(wi),
    ol = b({}, wi, { view: 0, detail: 0 }),
    nw = qt(ol),
    lu,
    ou,
    sl,
    Qo = b({}, ol, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: cu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== sl &&
              (sl && e.type === "mousemove"
                ? ((lu = e.screenX - sl.screenX), (ou = e.screenY - sl.screenY))
                : (ou = lu = 0),
              (sl = e)),
            lu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ou;
      },
    }),
    zh = qt(Qo),
    aw = b({}, Qo, { dataTransfer: 0 }),
    iw = qt(aw),
    rw = b({}, ol, { relatedTarget: 0 }),
    su = qt(rw),
    lw = b({}, wi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ow = qt(lw),
    sw = b({}, wi, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    cw = qt(sw),
    uw = b({}, wi, { data: 0 }),
    Ih = qt(uw),
    dw = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    fw = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    hw = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function mw(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = hw[e])
      ? !!n[e]
      : !1;
  }
  function cu() {
    return mw;
  }
  var pw = b({}, ol, {
      key: function (e) {
        if (e.key) {
          var n = dw[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = Xo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? fw[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: cu,
      charCode: function (e) {
        return e.type === "keypress" ? Xo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Xo(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    gw = qt(pw),
    yw = b({}, Qo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Bh = qt(yw),
    vw = b({}, ol, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: cu,
    }),
    bw = qt(vw),
    ww = b({}, wi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _w = qt(ww),
    xw = b({}, Qo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ew = qt(xw),
    Sw = b({}, wi, { newState: 0, oldState: 0 }),
    Tw = qt(Sw),
    Cw = [9, 13, 27, 32],
    uu = ea && "CompositionEvent" in window,
    cl = null;
  ea && "documentMode" in document && (cl = document.documentMode);
  var Aw = ea && "TextEvent" in window && !cl,
    Hh = ea && (!uu || (cl && 8 < cl && 11 >= cl)),
    Ph = " ",
    Vh = !1;
  function qh(e, n) {
    switch (e) {
      case "keyup":
        return Cw.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Gh(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var ir = !1;
  function Rw(e, n) {
    switch (e) {
      case "compositionend":
        return Gh(n);
      case "keypress":
        return n.which !== 32 ? null : ((Vh = !0), Ph);
      case "textInput":
        return (e = n.data), e === Ph && Vh ? null : e;
      default:
        return null;
    }
  }
  function Ow(e, n) {
    if (ir)
      return e === "compositionend" || (!uu && qh(e, n))
        ? ((e = jh()), (Yo = ru = Ra = null), (ir = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Hh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Dw = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function $h(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Dw[e.type] : n === "textarea";
  }
  function Yh(e, n, i, l) {
    nr ? (ar ? ar.push(l) : (ar = [l])) : (nr = l),
      (n = Us(n, "onChange")),
      0 < n.length &&
        ((i = new Fo("onChange", "change", null, i, l)),
        e.push({ event: i, listeners: n }));
  }
  var ul = null,
    dl = null;
  function Nw(e) {
    Cg(e, 0);
  }
  function Zo(e) {
    var n = at(e);
    if (Ah(n)) return e;
  }
  function Xh(e, n) {
    if (e === "change") return n;
  }
  var Kh = !1;
  if (ea) {
    var du;
    if (ea) {
      var fu = "oninput" in document;
      if (!fu) {
        var Fh = document.createElement("div");
        Fh.setAttribute("oninput", "return;"),
          (fu = typeof Fh.oninput == "function");
      }
      du = fu;
    } else du = !1;
    Kh = du && (!document.documentMode || 9 < document.documentMode);
  }
  function Qh() {
    ul && (ul.detachEvent("onpropertychange", Zh), (dl = ul = null));
  }
  function Zh(e) {
    if (e.propertyName === "value" && Zo(dl)) {
      var n = [];
      Yh(n, dl, e, nu(e)), Lh(Nw, n);
    }
  }
  function Mw(e, n, i) {
    e === "focusin"
      ? (Qh(), (ul = n), (dl = i), ul.attachEvent("onpropertychange", Zh))
      : e === "focusout" && Qh();
  }
  function kw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Zo(dl);
  }
  function Lw(e, n) {
    if (e === "click") return Zo(n);
  }
  function jw(e, n) {
    if (e === "input" || e === "change") return Zo(n);
  }
  function Uw(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var Qt = typeof Object.is == "function" ? Object.is : Uw;
  function fl(e, n) {
    if (Qt(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var i = Object.keys(e),
      l = Object.keys(n);
    if (i.length !== l.length) return !1;
    for (l = 0; l < i.length; l++) {
      var s = i[l];
      if (!Qi.call(n, s) || !Qt(e[s], n[s])) return !1;
    }
    return !0;
  }
  function Jh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Wh(e, n) {
    var i = Jh(e);
    e = 0;
    for (var l; i; ) {
      if (i.nodeType === 3) {
        if (((l = e + i.textContent.length), e <= n && l >= n))
          return { node: i, offset: n - e };
        e = l;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Jh(i);
    }
  }
  function em(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? em(e, n.parentNode)
        : "contains" in e
        ? e.contains(n)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function tm(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var n = Go(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = n.contentWindow;
      else break;
      n = Go(e.document);
    }
    return n;
  }
  function hu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var zw = ea && "documentMode" in document && 11 >= document.documentMode,
    rr = null,
    mu = null,
    hl = null,
    pu = !1;
  function nm(e, n, i) {
    var l =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    pu ||
      rr == null ||
      rr !== Go(l) ||
      ((l = rr),
      "selectionStart" in l && hu(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (hl && fl(hl, l)) ||
        ((hl = l),
        (l = Us(mu, "onSelect")),
        0 < l.length &&
          ((n = new Fo("onSelect", "select", null, n, i)),
          e.push({ event: n, listeners: l }),
          (n.target = rr))));
  }
  function _i(e, n) {
    var i = {};
    return (
      (i[e.toLowerCase()] = n.toLowerCase()),
      (i["Webkit" + e] = "webkit" + n),
      (i["Moz" + e] = "moz" + n),
      i
    );
  }
  var lr = {
      animationend: _i("Animation", "AnimationEnd"),
      animationiteration: _i("Animation", "AnimationIteration"),
      animationstart: _i("Animation", "AnimationStart"),
      transitionrun: _i("Transition", "TransitionRun"),
      transitionstart: _i("Transition", "TransitionStart"),
      transitioncancel: _i("Transition", "TransitionCancel"),
      transitionend: _i("Transition", "TransitionEnd"),
    },
    gu = {},
    am = {};
  ea &&
    ((am = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete lr.animationend.animation,
      delete lr.animationiteration.animation,
      delete lr.animationstart.animation),
    "TransitionEvent" in window || delete lr.transitionend.transition);
  function xi(e) {
    if (gu[e]) return gu[e];
    if (!lr[e]) return e;
    var n = lr[e],
      i;
    for (i in n) if (n.hasOwnProperty(i) && i in am) return (gu[e] = n[i]);
    return e;
  }
  var im = xi("animationend"),
    rm = xi("animationiteration"),
    lm = xi("animationstart"),
    Iw = xi("transitionrun"),
    Bw = xi("transitionstart"),
    Hw = xi("transitioncancel"),
    om = xi("transitionend"),
    sm = new Map(),
    yu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  yu.push("scrollEnd");
  function Dn(e, n) {
    sm.set(e, n), Lt(n, [e]);
  }
  var cm = new WeakMap();
  function hn(e, n) {
    if (typeof e == "object" && e !== null) {
      var i = cm.get(e);
      return i !== void 0
        ? i
        : ((n = { value: e, source: n, stack: il(n) }), cm.set(e, n), n);
    }
    return { value: e, source: n, stack: il(n) };
  }
  var mn = [],
    or = 0,
    vu = 0;
  function Jo() {
    for (var e = or, n = (vu = or = 0); n < e; ) {
      var i = mn[n];
      mn[n++] = null;
      var l = mn[n];
      mn[n++] = null;
      var s = mn[n];
      mn[n++] = null;
      var u = mn[n];
      if (((mn[n++] = null), l !== null && s !== null)) {
        var m = l.pending;
        m === null ? (s.next = s) : ((s.next = m.next), (m.next = s)),
          (l.pending = s);
      }
      u !== 0 && um(i, s, u);
    }
  }
  function Wo(e, n, i, l) {
    (mn[or++] = e),
      (mn[or++] = n),
      (mn[or++] = i),
      (mn[or++] = l),
      (vu |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function bu(e, n, i, l) {
    return Wo(e, n, i, l), es(e);
  }
  function sr(e, n) {
    return Wo(e, null, null, n), es(e);
  }
  function um(e, n, i) {
    e.lanes |= i;
    var l = e.alternate;
    l !== null && (l.lanes |= i);
    for (var s = !1, u = e.return; u !== null; )
      (u.childLanes |= i),
        (l = u.alternate),
        l !== null && (l.childLanes |= i),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (s = !0)),
        (e = u),
        (u = u.return);
    return e.tag === 3
      ? ((u = e.stateNode),
        s &&
          n !== null &&
          ((s = 31 - Tt(i)),
          (e = u.hiddenUpdates),
          (l = e[s]),
          l === null ? (e[s] = [n]) : l.push(n),
          (n.lane = i | 536870912)),
        u)
      : null;
  }
  function es(e) {
    if (50 < Il) throw ((Il = 0), (Td = null), Error(o(185)));
    for (var n = e.return; n !== null; ) (e = n), (n = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var cr = {};
  function Pw(e, n, i, l) {
    (this.tag = e),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Zt(e, n, i, l) {
    return new Pw(e, n, i, l);
  }
  function wu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function ta(e, n) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = Zt(e.tag, n, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = n),
          (i.type = e.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = e.flags & 65011712),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (i.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      (i.refCleanup = e.refCleanup),
      i
    );
  }
  function dm(e, n) {
    e.flags &= 65011714;
    var i = e.alternate;
    return (
      i === null
        ? ((e.childLanes = 0),
          (e.lanes = n),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = i.childLanes),
          (e.lanes = i.lanes),
          (e.child = i.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = i.memoizedProps),
          (e.memoizedState = i.memoizedState),
          (e.updateQueue = i.updateQueue),
          (e.type = i.type),
          (n = i.dependencies),
          (e.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      e
    );
  }
  function ts(e, n, i, l, s, u) {
    var m = 0;
    if (((l = e), typeof e == "function")) wu(e) && (m = 1);
    else if (typeof e == "string")
      m = q2(e, i, se.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case le:
          return (e = Zt(31, i, n, s)), (e.elementType = le), (e.lanes = u), e;
        case M:
          return Ei(i.children, s, u, n);
        case $:
          (m = 8), (s |= 24);
          break;
        case P:
          return (
            (e = Zt(12, i, n, s | 2)), (e.elementType = P), (e.lanes = u), e
          );
        case F:
          return (e = Zt(13, i, n, s)), (e.elementType = F), (e.lanes = u), e;
        case D:
          return (e = Zt(19, i, n, s)), (e.elementType = D), (e.lanes = u), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case I:
              case V:
                m = 10;
                break e;
              case B:
                m = 9;
                break e;
              case Q:
                m = 11;
                break e;
              case ee:
                m = 14;
                break e;
              case ne:
                (m = 16), (l = null);
                break e;
            }
          (m = 29),
            (i = Error(o(130, e === null ? "null" : typeof e, ""))),
            (l = null);
      }
    return (
      (n = Zt(m, i, n, s)), (n.elementType = e), (n.type = l), (n.lanes = u), n
    );
  }
  function Ei(e, n, i, l) {
    return (e = Zt(7, e, l, n)), (e.lanes = i), e;
  }
  function _u(e, n, i) {
    return (e = Zt(6, e, null, n)), (e.lanes = i), e;
  }
  function xu(e, n, i) {
    return (
      (n = Zt(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = i),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  var ur = [],
    dr = 0,
    ns = null,
    as = 0,
    pn = [],
    gn = 0,
    Si = null,
    na = 1,
    aa = "";
  function Ti(e, n) {
    (ur[dr++] = as), (ur[dr++] = ns), (ns = e), (as = n);
  }
  function fm(e, n, i) {
    (pn[gn++] = na), (pn[gn++] = aa), (pn[gn++] = Si), (Si = e);
    var l = na;
    e = aa;
    var s = 32 - Tt(l) - 1;
    (l &= ~(1 << s)), (i += 1);
    var u = 32 - Tt(n) + s;
    if (30 < u) {
      var m = s - (s % 5);
      (u = (l & ((1 << m) - 1)).toString(32)),
        (l >>= m),
        (s -= m),
        (na = (1 << (32 - Tt(n) + s)) | (i << s) | l),
        (aa = u + e);
    } else (na = (1 << u) | (i << s) | l), (aa = e);
  }
  function Eu(e) {
    e.return !== null && (Ti(e, 1), fm(e, 1, 0));
  }
  function Su(e) {
    for (; e === ns; )
      (ns = ur[--dr]), (ur[dr] = null), (as = ur[--dr]), (ur[dr] = null);
    for (; e === Si; )
      (Si = pn[--gn]),
        (pn[gn] = null),
        (aa = pn[--gn]),
        (pn[gn] = null),
        (na = pn[--gn]),
        (pn[gn] = null);
  }
  var jt = null,
    ct = null,
    $e = !1,
    Ci = null,
    Hn = !1,
    Tu = Error(o(519));
  function Ai(e) {
    var n = Error(o(418, ""));
    throw (gl(hn(n, e)), Tu);
  }
  function hm(e) {
    var n = e.stateNode,
      i = e.type,
      l = e.memoizedProps;
    switch (((n[K] = e), (n[J] = l), i)) {
      case "dialog":
        Ne("cancel", n), Ne("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ne("load", n);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Hl.length; i++) Ne(Hl[i], n);
        break;
      case "source":
        Ne("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ne("error", n), Ne("load", n);
        break;
      case "details":
        Ne("toggle", n);
        break;
      case "input":
        Ne("invalid", n),
          Rh(
            n,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          qo(n);
        break;
      case "select":
        Ne("invalid", n);
        break;
      case "textarea":
        Ne("invalid", n), Dh(n, l.value, l.defaultValue, l.children), qo(n);
    }
    (i = l.children),
      (typeof i != "string" && typeof i != "number" && typeof i != "bigint") ||
      n.textContent === "" + i ||
      l.suppressHydrationWarning === !0 ||
      Dg(n.textContent, i)
        ? (l.popover != null && (Ne("beforetoggle", n), Ne("toggle", n)),
          l.onScroll != null && Ne("scroll", n),
          l.onScrollEnd != null && Ne("scrollend", n),
          l.onClick != null && (n.onclick = zs),
          (n = !0))
        : (n = !1),
      n || Ai(e);
  }
  function mm(e) {
    for (jt = e.return; jt; )
      switch (jt.tag) {
        case 5:
        case 13:
          Hn = !1;
          return;
        case 27:
        case 3:
          Hn = !0;
          return;
        default:
          jt = jt.return;
      }
  }
  function ml(e) {
    if (e !== jt) return !1;
    if (!$e) return mm(e), ($e = !0), !1;
    var n = e.tag,
      i;
    if (
      ((i = n !== 3 && n !== 27) &&
        ((i = n === 5) &&
          ((i = e.type),
          (i =
            !(i !== "form" && i !== "button") || Pd(e.type, e.memoizedProps))),
        (i = !i)),
      i && ct && Ai(e),
      mm(e),
      n === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (((i = e.data), i === "/$")) {
              if (n === 0) {
                ct = Mn(e.nextSibling);
                break e;
              }
              n--;
            } else (i !== "$" && i !== "$!" && i !== "$?") || n++;
          e = e.nextSibling;
        }
        ct = null;
      }
    } else
      n === 27
        ? ((n = ct), Ga(e.type) ? ((e = $d), ($d = null), (ct = e)) : (ct = n))
        : (ct = jt ? Mn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function pl() {
    (ct = jt = null), ($e = !1);
  }
  function pm() {
    var e = Ci;
    return (
      e !== null &&
        (Yt === null ? (Yt = e) : Yt.push.apply(Yt, e), (Ci = null)),
      e
    );
  }
  function gl(e) {
    Ci === null ? (Ci = [e]) : Ci.push(e);
  }
  var Cu = Y(null),
    Ri = null,
    ia = null;
  function Oa(e, n, i) {
    W(Cu, n._currentValue), (n._currentValue = i);
  }
  function ra(e) {
    (e._currentValue = Cu.current), te(Cu);
  }
  function Au(e, n, i) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), l !== null && (l.childLanes |= n))
          : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function Ru(e, n, i, l) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var u = s.dependencies;
      if (u !== null) {
        var m = s.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var y = u;
          u = s;
          for (var _ = 0; _ < n.length; _++)
            if (y.context === n[_]) {
              (u.lanes |= i),
                (y = u.alternate),
                y !== null && (y.lanes |= i),
                Au(u.return, i, e),
                l || (m = null);
              break e;
            }
          u = y.next;
        }
      } else if (s.tag === 18) {
        if (((m = s.return), m === null)) throw Error(o(341));
        (m.lanes |= i),
          (u = m.alternate),
          u !== null && (u.lanes |= i),
          Au(m, i, e),
          (m = null);
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === e) {
            m = null;
            break;
          }
          if (((s = m.sibling), s !== null)) {
            (s.return = m.return), (m = s);
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function yl(e, n, i, l) {
    e = null;
    for (var s = n, u = !1; s !== null; ) {
      if (!u) {
        if ((s.flags & 524288) !== 0) u = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(o(387));
        if (((m = m.memoizedProps), m !== null)) {
          var y = s.type;
          Qt(s.pendingProps.value, m.value) ||
            (e !== null ? e.push(y) : (e = [y]));
        }
      } else if (s === kt.current) {
        if (((m = s.alternate), m === null)) throw Error(o(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (e !== null ? e.push(Yl) : (e = [Yl]));
      }
      s = s.return;
    }
    e !== null && Ru(n, e, i, l), (n.flags |= 262144);
  }
  function is(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Qt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Oi(e) {
    (Ri = e),
      (ia = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Dt(e) {
    return gm(Ri, e);
  }
  function rs(e, n) {
    return Ri === null && Oi(e), gm(e, n);
  }
  function gm(e, n) {
    var i = n._currentValue;
    if (((n = { context: n, memoizedValue: i, next: null }), ia === null)) {
      if (e === null) throw Error(o(308));
      (ia = n),
        (e.dependencies = { lanes: 0, firstContext: n }),
        (e.flags |= 524288);
    } else ia = ia.next = n;
    return i;
  }
  var Vw =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (i, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (n.aborted = !0),
                e.forEach(function (i) {
                  return i();
                });
            };
          },
    qw = a.unstable_scheduleCallback,
    Gw = a.unstable_NormalPriority,
    bt = {
      $$typeof: V,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ou() {
    return { controller: new Vw(), data: new Map(), refCount: 0 };
  }
  function vl(e) {
    e.refCount--,
      e.refCount === 0 &&
        qw(Gw, function () {
          e.controller.abort();
        });
  }
  var bl = null,
    Du = 0,
    fr = 0,
    hr = null;
  function $w(e, n) {
    if (bl === null) {
      var i = (bl = []);
      (Du = 0),
        (fr = Md()),
        (hr = {
          status: "pending",
          value: void 0,
          then: function (l) {
            i.push(l);
          },
        });
    }
    return Du++, n.then(ym, ym), n;
  }
  function ym() {
    if (--Du === 0 && bl !== null) {
      hr !== null && (hr.status = "fulfilled");
      var e = bl;
      (bl = null), (fr = 0), (hr = null);
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Yw(e, n) {
    var i = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          i.push(s);
        },
      };
    return (
      e.then(
        function () {
          (l.status = "fulfilled"), (l.value = n);
          for (var s = 0; s < i.length; s++) (0, i[s])(n);
        },
        function (s) {
          for (l.status = "rejected", l.reason = s, s = 0; s < i.length; s++)
            (0, i[s])(void 0);
        }
      ),
      l
    );
  }
  var vm = L.S;
  L.S = function (e, n) {
    typeof n == "object" &&
      n !== null &&
      typeof n.then == "function" &&
      $w(e, n),
      vm !== null && vm(e, n);
  };
  var Di = Y(null);
  function Nu() {
    var e = Di.current;
    return e !== null ? e : tt.pooledCache;
  }
  function ls(e, n) {
    n === null ? W(Di, Di.current) : W(Di, n.pool);
  }
  function bm() {
    var e = Nu();
    return e === null ? null : { parent: bt._currentValue, pool: e };
  }
  var wl = Error(o(460)),
    wm = Error(o(474)),
    os = Error(o(542)),
    Mu = { then: function () {} };
  function _m(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function ss() {}
  function xm(e, n, i) {
    switch (
      ((i = e[i]),
      i === void 0 ? e.push(n) : i !== n && (n.then(ss, ss), (n = i)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((e = n.reason), Sm(e), e);
      default:
        if (typeof n.status == "string") n.then(ss, ss);
        else {
          if (((e = tt), e !== null && 100 < e.shellSuspendCounter))
            throw Error(o(482));
          (e = n),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (n.status === "pending") {
                  var s = n;
                  (s.status = "fulfilled"), (s.value = l);
                }
              },
              function (l) {
                if (n.status === "pending") {
                  var s = n;
                  (s.status = "rejected"), (s.reason = l);
                }
              }
            );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((e = n.reason), Sm(e), e);
        }
        throw ((_l = n), wl);
    }
  }
  var _l = null;
  function Em() {
    if (_l === null) throw Error(o(459));
    var e = _l;
    return (_l = null), e;
  }
  function Sm(e) {
    if (e === wl || e === os) throw Error(o(483));
  }
  var Da = !1;
  function ku(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Lu(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Na(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ma(e, n, i) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Xe & 2) !== 0)) {
      var s = l.pending;
      return (
        s === null ? (n.next = n) : ((n.next = s.next), (s.next = n)),
        (l.pending = n),
        (n = es(e)),
        um(e, null, i),
        n
      );
    }
    return Wo(e, l, n, i), es(e);
  }
  function xl(e, n, i) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (i & 4194048) !== 0))
    ) {
      var l = n.lanes;
      (l &= e.pendingLanes), (i |= l), (n.lanes = i), vi(e, i);
    }
  }
  function ju(e, n) {
    var i = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), i === l)) {
      var s = null,
        u = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var m = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null,
          };
          u === null ? (s = u = m) : (u = u.next = m), (i = i.next);
        } while (i !== null);
        u === null ? (s = u = n) : (u = u.next = n);
      } else s = u = n;
      (i = {
        baseState: l.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = i);
      return;
    }
    (e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = n) : (e.next = n),
      (i.lastBaseUpdate = n);
  }
  var Uu = !1;
  function El() {
    if (Uu) {
      var e = hr;
      if (e !== null) throw e;
    }
  }
  function Sl(e, n, i, l) {
    Uu = !1;
    var s = e.updateQueue;
    Da = !1;
    var u = s.firstBaseUpdate,
      m = s.lastBaseUpdate,
      y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var _ = y,
        k = _.next;
      (_.next = null), m === null ? (u = k) : (m.next = k), (m = _);
      var q = e.alternate;
      q !== null &&
        ((q = q.updateQueue),
        (y = q.lastBaseUpdate),
        y !== m &&
          (y === null ? (q.firstBaseUpdate = k) : (y.next = k),
          (q.lastBaseUpdate = _)));
    }
    if (u !== null) {
      var X = s.baseState;
      (m = 0), (q = k = _ = null), (y = u);
      do {
        var j = y.lane & -536870913,
          U = j !== y.lane;
        if (U ? (je & j) === j : (l & j) === j) {
          j !== 0 && j === fr && (Uu = !0),
            q !== null &&
              (q = q.next =
                {
                  lane: 0,
                  tag: y.tag,
                  payload: y.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var we = e,
              ge = y;
            j = n;
            var Ze = i;
            switch (ge.tag) {
              case 1:
                if (((we = ge.payload), typeof we == "function")) {
                  X = we.call(Ze, X, j);
                  break e;
                }
                X = we;
                break e;
              case 3:
                we.flags = (we.flags & -65537) | 128;
              case 0:
                if (
                  ((we = ge.payload),
                  (j = typeof we == "function" ? we.call(Ze, X, j) : we),
                  j == null)
                )
                  break e;
                X = b({}, X, j);
                break e;
              case 2:
                Da = !0;
            }
          }
          (j = y.callback),
            j !== null &&
              ((e.flags |= 64),
              U && (e.flags |= 8192),
              (U = s.callbacks),
              U === null ? (s.callbacks = [j]) : U.push(j));
        } else
          (U = {
            lane: j,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            q === null ? ((k = q = U), (_ = X)) : (q = q.next = U),
            (m |= j);
        if (((y = y.next), y === null)) {
          if (((y = s.shared.pending), y === null)) break;
          (U = y),
            (y = U.next),
            (U.next = null),
            (s.lastBaseUpdate = U),
            (s.shared.pending = null);
        }
      } while (!0);
      q === null && (_ = X),
        (s.baseState = _),
        (s.firstBaseUpdate = k),
        (s.lastBaseUpdate = q),
        u === null && (s.shared.lanes = 0),
        (Ha |= m),
        (e.lanes = m),
        (e.memoizedState = X);
    }
  }
  function Tm(e, n) {
    if (typeof e != "function") throw Error(o(191, e));
    e.call(n);
  }
  function Cm(e, n) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++) Tm(i[e], n);
  }
  var mr = Y(null),
    cs = Y(0);
  function Am(e, n) {
    (e = fa), W(cs, e), W(mr, n), (fa = e | n.baseLanes);
  }
  function zu() {
    W(cs, fa), W(mr, mr.current);
  }
  function Iu() {
    (fa = cs.current), te(mr), te(cs);
  }
  var ka = 0,
    Se = null,
    Fe = null,
    gt = null,
    us = !1,
    pr = !1,
    Ni = !1,
    ds = 0,
    Tl = 0,
    gr = null,
    Xw = 0;
  function dt() {
    throw Error(o(321));
  }
  function Bu(e, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < e.length; i++)
      if (!Qt(e[i], n[i])) return !1;
    return !0;
  }
  function Hu(e, n, i, l, s, u) {
    return (
      (ka = u),
      (Se = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (L.H = e === null || e.memoizedState === null ? up : dp),
      (Ni = !1),
      (u = i(l, s)),
      (Ni = !1),
      pr && (u = Om(n, i, l, s)),
      Rm(e),
      u
    );
  }
  function Rm(e) {
    L.H = ys;
    var n = Fe !== null && Fe.next !== null;
    if (((ka = 0), (gt = Fe = Se = null), (us = !1), (Tl = 0), (gr = null), n))
      throw Error(o(300));
    e === null ||
      _t ||
      ((e = e.dependencies), e !== null && is(e) && (_t = !0));
  }
  function Om(e, n, i, l) {
    Se = e;
    var s = 0;
    do {
      if ((pr && (gr = null), (Tl = 0), (pr = !1), 25 <= s))
        throw Error(o(301));
      if (((s += 1), (gt = Fe = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (L.H = e2), (u = n(i, l));
    } while (pr);
    return u;
  }
  function Kw() {
    var e = L.H,
      n = e.useState()[0];
    return (
      (n = typeof n.then == "function" ? Cl(n) : n),
      (e = e.useState()[0]),
      (Fe !== null ? Fe.memoizedState : null) !== e && (Se.flags |= 1024),
      n
    );
  }
  function Pu() {
    var e = ds !== 0;
    return (ds = 0), e;
  }
  function Vu(e, n, i) {
    (n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~i);
  }
  function qu(e) {
    if (us) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), (e = e.next);
      }
      us = !1;
    }
    (ka = 0), (gt = Fe = Se = null), (pr = !1), (Tl = ds = 0), (gr = null);
  }
  function Gt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return gt === null ? (Se.memoizedState = gt = e) : (gt = gt.next = e), gt;
  }
  function yt() {
    if (Fe === null) {
      var e = Se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Fe.next;
    var n = gt === null ? Se.memoizedState : gt.next;
    if (n !== null) (gt = n), (Fe = e);
    else {
      if (e === null)
        throw Se.alternate === null ? Error(o(467)) : Error(o(310));
      (Fe = e),
        (e = {
          memoizedState: Fe.memoizedState,
          baseState: Fe.baseState,
          baseQueue: Fe.baseQueue,
          queue: Fe.queue,
          next: null,
        }),
        gt === null ? (Se.memoizedState = gt = e) : (gt = gt.next = e);
    }
    return gt;
  }
  function Gu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Cl(e) {
    var n = Tl;
    return (
      (Tl += 1),
      gr === null && (gr = []),
      (e = xm(gr, e, n)),
      (n = Se),
      (gt === null ? n.memoizedState : gt.next) === null &&
        ((n = n.alternate),
        (L.H = n === null || n.memoizedState === null ? up : dp)),
      e
    );
  }
  function fs(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Cl(e);
      if (e.$$typeof === V) return Dt(e);
    }
    throw Error(o(438, String(e)));
  }
  function $u(e) {
    var n = null,
      i = Se.updateQueue;
    if ((i !== null && (n = i.memoCache), n == null)) {
      var l = Se.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (n = {
              data: l.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      i === null && ((i = Gu()), (Se.updateQueue = i)),
      (i.memoCache = n),
      (i = n.data[n.index]),
      i === void 0)
    )
      for (i = n.data[n.index] = Array(e), l = 0; l < e; l++) i[l] = Me;
    return n.index++, i;
  }
  function la(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function hs(e) {
    var n = yt();
    return Yu(n, Fe, e);
  }
  function Yu(e, n, i) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = i;
    var s = e.baseQueue,
      u = l.pending;
    if (u !== null) {
      if (s !== null) {
        var m = s.next;
        (s.next = u.next), (u.next = m);
      }
      (n.baseQueue = s = u), (l.pending = null);
    }
    if (((u = e.baseState), s === null)) e.memoizedState = u;
    else {
      n = s.next;
      var y = (m = null),
        _ = null,
        k = n,
        q = !1;
      do {
        var X = k.lane & -536870913;
        if (X !== k.lane ? (je & X) === X : (ka & X) === X) {
          var j = k.revertLane;
          if (j === 0)
            _ !== null &&
              (_ = _.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: k.action,
                  hasEagerState: k.hasEagerState,
                  eagerState: k.eagerState,
                  next: null,
                }),
              X === fr && (q = !0);
          else if ((ka & j) === j) {
            (k = k.next), j === fr && (q = !0);
            continue;
          } else
            (X = {
              lane: 0,
              revertLane: k.revertLane,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null,
            }),
              _ === null ? ((y = _ = X), (m = u)) : (_ = _.next = X),
              (Se.lanes |= j),
              (Ha |= j);
          (X = k.action),
            Ni && i(u, X),
            (u = k.hasEagerState ? k.eagerState : i(u, X));
        } else
          (j = {
            lane: X,
            revertLane: k.revertLane,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null,
          }),
            _ === null ? ((y = _ = j), (m = u)) : (_ = _.next = j),
            (Se.lanes |= X),
            (Ha |= X);
        k = k.next;
      } while (k !== null && k !== n);
      if (
        (_ === null ? (m = u) : (_.next = y),
        !Qt(u, e.memoizedState) && ((_t = !0), q && ((i = hr), i !== null)))
      )
        throw i;
      (e.memoizedState = u),
        (e.baseState = m),
        (e.baseQueue = _),
        (l.lastRenderedState = u);
    }
    return s === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Xu(e) {
    var n = yt(),
      i = n.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = e;
    var l = i.dispatch,
      s = i.pending,
      u = n.memoizedState;
    if (s !== null) {
      i.pending = null;
      var m = (s = s.next);
      do (u = e(u, m.action)), (m = m.next);
      while (m !== s);
      Qt(u, n.memoizedState) || (_t = !0),
        (n.memoizedState = u),
        n.baseQueue === null && (n.baseState = u),
        (i.lastRenderedState = u);
    }
    return [u, l];
  }
  function Dm(e, n, i) {
    var l = Se,
      s = yt(),
      u = $e;
    if (u) {
      if (i === void 0) throw Error(o(407));
      i = i();
    } else i = n();
    var m = !Qt((Fe || s).memoizedState, i);
    m && ((s.memoizedState = i), (_t = !0)), (s = s.queue);
    var y = km.bind(null, l, s, e);
    if (
      (Al(2048, 8, y, [e]),
      s.getSnapshot !== n || m || (gt !== null && gt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        yr(9, ms(), Mm.bind(null, l, s, i, n), null),
        tt === null)
      )
        throw Error(o(349));
      u || (ka & 124) !== 0 || Nm(l, n, i);
    }
    return i;
  }
  function Nm(e, n, i) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: i }),
      (n = Se.updateQueue),
      n === null
        ? ((n = Gu()), (Se.updateQueue = n), (n.stores = [e]))
        : ((i = n.stores), i === null ? (n.stores = [e]) : i.push(e));
  }
  function Mm(e, n, i, l) {
    (n.value = i), (n.getSnapshot = l), Lm(n) && jm(e);
  }
  function km(e, n, i) {
    return i(function () {
      Lm(n) && jm(e);
    });
  }
  function Lm(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !Qt(e, i);
    } catch {
      return !0;
    }
  }
  function jm(e) {
    var n = sr(e, 2);
    n !== null && nn(n, e, 2);
  }
  function Ku(e) {
    var n = Gt();
    if (typeof e == "function") {
      var i = e;
      if (((e = i()), Ni)) {
        An(!0);
        try {
          i();
        } finally {
          An(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = e),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: la,
        lastRenderedState: e,
      }),
      n
    );
  }
  function Um(e, n, i, l) {
    return (e.baseState = i), Yu(e, Fe, typeof l == "function" ? l : la);
  }
  function Fw(e, n, i, l, s) {
    if (gs(e)) throw Error(o(485));
    if (((e = n.action), e !== null)) {
      var u = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (m) {
          u.listeners.push(m);
        },
      };
      L.T !== null ? i(!0) : (u.isTransition = !1),
        l(u),
        (i = n.pending),
        i === null
          ? ((u.next = n.pending = u), zm(n, u))
          : ((u.next = i.next), (n.pending = i.next = u));
    }
  }
  function zm(e, n) {
    var i = n.action,
      l = n.payload,
      s = e.state;
    if (n.isTransition) {
      var u = L.T,
        m = {};
      L.T = m;
      try {
        var y = i(s, l),
          _ = L.S;
        _ !== null && _(m, y), Im(e, n, y);
      } catch (k) {
        Fu(e, n, k);
      } finally {
        L.T = u;
      }
    } else
      try {
        (u = i(s, l)), Im(e, n, u);
      } catch (k) {
        Fu(e, n, k);
      }
  }
  function Im(e, n, i) {
    i !== null && typeof i == "object" && typeof i.then == "function"
      ? i.then(
          function (l) {
            Bm(e, n, l);
          },
          function (l) {
            return Fu(e, n, l);
          }
        )
      : Bm(e, n, i);
  }
  function Bm(e, n, i) {
    (n.status = "fulfilled"),
      (n.value = i),
      Hm(n),
      (e.state = i),
      (n = e.pending),
      n !== null &&
        ((i = n.next),
        i === n ? (e.pending = null) : ((i = i.next), (n.next = i), zm(e, i)));
  }
  function Fu(e, n, i) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (n.status = "rejected"), (n.reason = i), Hm(n), (n = n.next);
      while (n !== l);
    }
    e.action = null;
  }
  function Hm(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Pm(e, n) {
    return n;
  }
  function Vm(e, n) {
    if ($e) {
      var i = tt.formState;
      if (i !== null) {
        e: {
          var l = Se;
          if ($e) {
            if (ct) {
              t: {
                for (var s = ct, u = Hn; s.nodeType !== 8; ) {
                  if (!u) {
                    s = null;
                    break t;
                  }
                  if (((s = Mn(s.nextSibling)), s === null)) {
                    s = null;
                    break t;
                  }
                }
                (u = s.data), (s = u === "F!" || u === "F" ? s : null);
              }
              if (s) {
                (ct = Mn(s.nextSibling)), (l = s.data === "F!");
                break e;
              }
            }
            Ai(l);
          }
          l = !1;
        }
        l && (n = i[0]);
      }
    }
    return (
      (i = Gt()),
      (i.memoizedState = i.baseState = n),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Pm,
        lastRenderedState: n,
      }),
      (i.queue = l),
      (i = op.bind(null, Se, l)),
      (l.dispatch = i),
      (l = Ku(!1)),
      (u = ed.bind(null, Se, !1, l.queue)),
      (l = Gt()),
      (s = { state: n, dispatch: null, action: e, pending: null }),
      (l.queue = s),
      (i = Fw.bind(null, Se, s, u, i)),
      (s.dispatch = i),
      (l.memoizedState = e),
      [n, i, !1]
    );
  }
  function qm(e) {
    var n = yt();
    return Gm(n, Fe, e);
  }
  function Gm(e, n, i) {
    if (
      ((n = Yu(e, n, Pm)[0]),
      (e = hs(la)[0]),
      typeof n == "object" && n !== null && typeof n.then == "function")
    )
      try {
        var l = Cl(n);
      } catch (m) {
        throw m === wl ? os : m;
      }
    else l = n;
    n = yt();
    var s = n.queue,
      u = s.dispatch;
    return (
      i !== n.memoizedState &&
        ((Se.flags |= 2048), yr(9, ms(), Qw.bind(null, s, i), null)),
      [l, u, e]
    );
  }
  function Qw(e, n) {
    e.action = n;
  }
  function $m(e) {
    var n = yt(),
      i = Fe;
    if (i !== null) return Gm(n, i, e);
    yt(), (n = n.memoizedState), (i = yt());
    var l = i.queue.dispatch;
    return (i.memoizedState = e), [n, l, !1];
  }
  function yr(e, n, i, l) {
    return (
      (e = { tag: e, create: i, deps: l, inst: n, next: null }),
      (n = Se.updateQueue),
      n === null && ((n = Gu()), (Se.updateQueue = n)),
      (i = n.lastEffect),
      i === null
        ? (n.lastEffect = e.next = e)
        : ((l = i.next), (i.next = e), (e.next = l), (n.lastEffect = e)),
      e
    );
  }
  function ms() {
    return { destroy: void 0, resource: void 0 };
  }
  function Ym() {
    return yt().memoizedState;
  }
  function ps(e, n, i, l) {
    var s = Gt();
    (l = l === void 0 ? null : l),
      (Se.flags |= e),
      (s.memoizedState = yr(1 | n, ms(), i, l));
  }
  function Al(e, n, i, l) {
    var s = yt();
    l = l === void 0 ? null : l;
    var u = s.memoizedState.inst;
    Fe !== null && l !== null && Bu(l, Fe.memoizedState.deps)
      ? (s.memoizedState = yr(n, u, i, l))
      : ((Se.flags |= e), (s.memoizedState = yr(1 | n, u, i, l)));
  }
  function Xm(e, n) {
    ps(8390656, 8, e, n);
  }
  function Km(e, n) {
    Al(2048, 8, e, n);
  }
  function Fm(e, n) {
    return Al(4, 2, e, n);
  }
  function Qm(e, n) {
    return Al(4, 4, e, n);
  }
  function Zm(e, n) {
    if (typeof n == "function") {
      e = e();
      var i = n(e);
      return function () {
        typeof i == "function" ? i() : n(null);
      };
    }
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function Jm(e, n, i) {
    (i = i != null ? i.concat([e]) : null), Al(4, 4, Zm.bind(null, n, e), i);
  }
  function Qu() {}
  function Wm(e, n) {
    var i = yt();
    n = n === void 0 ? null : n;
    var l = i.memoizedState;
    return n !== null && Bu(n, l[1]) ? l[0] : ((i.memoizedState = [e, n]), e);
  }
  function ep(e, n) {
    var i = yt();
    n = n === void 0 ? null : n;
    var l = i.memoizedState;
    if (n !== null && Bu(n, l[1])) return l[0];
    if (((l = e()), Ni)) {
      An(!0);
      try {
        e();
      } finally {
        An(!1);
      }
    }
    return (i.memoizedState = [l, n]), l;
  }
  function Zu(e, n, i) {
    return i === void 0 || (ka & 1073741824) !== 0
      ? (e.memoizedState = n)
      : ((e.memoizedState = i), (e = ag()), (Se.lanes |= e), (Ha |= e), i);
  }
  function tp(e, n, i, l) {
    return Qt(i, n)
      ? i
      : mr.current !== null
      ? ((e = Zu(e, i, l)), Qt(e, n) || (_t = !0), e)
      : (ka & 42) === 0
      ? ((_t = !0), (e.memoizedState = i))
      : ((e = ag()), (Se.lanes |= e), (Ha |= e), n);
  }
  function np(e, n, i, l, s) {
    var u = Z.p;
    Z.p = u !== 0 && 8 > u ? u : 8;
    var m = L.T,
      y = {};
    (L.T = y), ed(e, !1, n, i);
    try {
      var _ = s(),
        k = L.S;
      if (
        (k !== null && k(y, _),
        _ !== null && typeof _ == "object" && typeof _.then == "function")
      ) {
        var q = Yw(_, l);
        Rl(e, n, q, tn(e));
      } else Rl(e, n, l, tn(e));
    } catch (X) {
      Rl(e, n, { then: function () {}, status: "rejected", reason: X }, tn());
    } finally {
      (Z.p = u), (L.T = m);
    }
  }
  function Zw() {}
  function Ju(e, n, i, l) {
    if (e.tag !== 5) throw Error(o(476));
    var s = ap(e).queue;
    np(
      e,
      s,
      n,
      ae,
      i === null
        ? Zw
        : function () {
            return ip(e), i(l);
          }
    );
  }
  function ap(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ae,
      baseState: ae,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: la,
        lastRenderedState: ae,
      },
      next: null,
    };
    var i = {};
    return (
      (n.next = {
        memoizedState: i,
        baseState: i,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: la,
          lastRenderedState: i,
        },
        next: null,
      }),
      (e.memoizedState = n),
      (e = e.alternate),
      e !== null && (e.memoizedState = n),
      n
    );
  }
  function ip(e) {
    var n = ap(e).next.queue;
    Rl(e, n, {}, tn());
  }
  function Wu() {
    return Dt(Yl);
  }
  function rp() {
    return yt().memoizedState;
  }
  function lp() {
    return yt().memoizedState;
  }
  function Jw(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var i = tn();
          e = Na(i);
          var l = Ma(n, e, i);
          l !== null && (nn(l, n, i), xl(l, n, i)),
            (n = { cache: Ou() }),
            (e.payload = n);
          return;
      }
      n = n.return;
    }
  }
  function Ww(e, n, i) {
    var l = tn();
    (i = {
      lane: l,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      gs(e)
        ? sp(n, i)
        : ((i = bu(e, n, i, l)), i !== null && (nn(i, e, l), cp(i, n, l)));
  }
  function op(e, n, i) {
    var l = tn();
    Rl(e, n, i, l);
  }
  function Rl(e, n, i, l) {
    var s = {
      lane: l,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (gs(e)) sp(n, s);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = n.lastRenderedReducer), u !== null)
      )
        try {
          var m = n.lastRenderedState,
            y = u(m, i);
          if (((s.hasEagerState = !0), (s.eagerState = y), Qt(y, m)))
            return Wo(e, n, s, 0), tt === null && Jo(), !1;
        } catch {
        } finally {
        }
      if (((i = bu(e, n, s, l)), i !== null))
        return nn(i, e, l), cp(i, n, l), !0;
    }
    return !1;
  }
  function ed(e, n, i, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Md(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      gs(e))
    ) {
      if (n) throw Error(o(479));
    } else (n = bu(e, i, l, 2)), n !== null && nn(n, e, 2);
  }
  function gs(e) {
    var n = e.alternate;
    return e === Se || (n !== null && n === Se);
  }
  function sp(e, n) {
    pr = us = !0;
    var i = e.pending;
    i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
      (e.pending = n);
  }
  function cp(e, n, i) {
    if ((i & 4194048) !== 0) {
      var l = n.lanes;
      (l &= e.pendingLanes), (i |= l), (n.lanes = i), vi(e, i);
    }
  }
  var ys = {
      readContext: Dt,
      use: fs,
      useCallback: dt,
      useContext: dt,
      useEffect: dt,
      useImperativeHandle: dt,
      useLayoutEffect: dt,
      useInsertionEffect: dt,
      useMemo: dt,
      useReducer: dt,
      useRef: dt,
      useState: dt,
      useDebugValue: dt,
      useDeferredValue: dt,
      useTransition: dt,
      useSyncExternalStore: dt,
      useId: dt,
      useHostTransitionStatus: dt,
      useFormState: dt,
      useActionState: dt,
      useOptimistic: dt,
      useMemoCache: dt,
      useCacheRefresh: dt,
    },
    up = {
      readContext: Dt,
      use: fs,
      useCallback: function (e, n) {
        return (Gt().memoizedState = [e, n === void 0 ? null : n]), e;
      },
      useContext: Dt,
      useEffect: Xm,
      useImperativeHandle: function (e, n, i) {
        (i = i != null ? i.concat([e]) : null),
          ps(4194308, 4, Zm.bind(null, n, e), i);
      },
      useLayoutEffect: function (e, n) {
        return ps(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        ps(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var i = Gt();
        n = n === void 0 ? null : n;
        var l = e();
        if (Ni) {
          An(!0);
          try {
            e();
          } finally {
            An(!1);
          }
        }
        return (i.memoizedState = [l, n]), l;
      },
      useReducer: function (e, n, i) {
        var l = Gt();
        if (i !== void 0) {
          var s = i(n);
          if (Ni) {
            An(!0);
            try {
              i(n);
            } finally {
              An(!1);
            }
          }
        } else s = n;
        return (
          (l.memoizedState = l.baseState = s),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: s,
          }),
          (l.queue = e),
          (e = e.dispatch = Ww.bind(null, Se, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = Gt();
        return (e = { current: e }), (n.memoizedState = e);
      },
      useState: function (e) {
        e = Ku(e);
        var n = e.queue,
          i = op.bind(null, Se, n);
        return (n.dispatch = i), [e.memoizedState, i];
      },
      useDebugValue: Qu,
      useDeferredValue: function (e, n) {
        var i = Gt();
        return Zu(i, e, n);
      },
      useTransition: function () {
        var e = Ku(!1);
        return (
          (e = np.bind(null, Se, e.queue, !0, !1)),
          (Gt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, n, i) {
        var l = Se,
          s = Gt();
        if ($e) {
          if (i === void 0) throw Error(o(407));
          i = i();
        } else {
          if (((i = n()), tt === null)) throw Error(o(349));
          (je & 124) !== 0 || Nm(l, n, i);
        }
        s.memoizedState = i;
        var u = { value: i, getSnapshot: n };
        return (
          (s.queue = u),
          Xm(km.bind(null, l, u, e), [e]),
          (l.flags |= 2048),
          yr(9, ms(), Mm.bind(null, l, u, i, n), null),
          i
        );
      },
      useId: function () {
        var e = Gt(),
          n = tt.identifierPrefix;
        if ($e) {
          var i = aa,
            l = na;
          (i = (l & ~(1 << (32 - Tt(l) - 1))).toString(32) + i),
            (n = "«" + n + "R" + i),
            (i = ds++),
            0 < i && (n += "H" + i.toString(32)),
            (n += "»");
        } else (i = Xw++), (n = "«" + n + "r" + i.toString(32) + "»");
        return (e.memoizedState = n);
      },
      useHostTransitionStatus: Wu,
      useFormState: Vm,
      useActionState: Vm,
      useOptimistic: function (e) {
        var n = Gt();
        n.memoizedState = n.baseState = e;
        var i = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (n.queue = i),
          (n = ed.bind(null, Se, !0, i)),
          (i.dispatch = n),
          [e, n]
        );
      },
      useMemoCache: $u,
      useCacheRefresh: function () {
        return (Gt().memoizedState = Jw.bind(null, Se));
      },
    },
    dp = {
      readContext: Dt,
      use: fs,
      useCallback: Wm,
      useContext: Dt,
      useEffect: Km,
      useImperativeHandle: Jm,
      useInsertionEffect: Fm,
      useLayoutEffect: Qm,
      useMemo: ep,
      useReducer: hs,
      useRef: Ym,
      useState: function () {
        return hs(la);
      },
      useDebugValue: Qu,
      useDeferredValue: function (e, n) {
        var i = yt();
        return tp(i, Fe.memoizedState, e, n);
      },
      useTransition: function () {
        var e = hs(la)[0],
          n = yt().memoizedState;
        return [typeof e == "boolean" ? e : Cl(e), n];
      },
      useSyncExternalStore: Dm,
      useId: rp,
      useHostTransitionStatus: Wu,
      useFormState: qm,
      useActionState: qm,
      useOptimistic: function (e, n) {
        var i = yt();
        return Um(i, Fe, e, n);
      },
      useMemoCache: $u,
      useCacheRefresh: lp,
    },
    e2 = {
      readContext: Dt,
      use: fs,
      useCallback: Wm,
      useContext: Dt,
      useEffect: Km,
      useImperativeHandle: Jm,
      useInsertionEffect: Fm,
      useLayoutEffect: Qm,
      useMemo: ep,
      useReducer: Xu,
      useRef: Ym,
      useState: function () {
        return Xu(la);
      },
      useDebugValue: Qu,
      useDeferredValue: function (e, n) {
        var i = yt();
        return Fe === null ? Zu(i, e, n) : tp(i, Fe.memoizedState, e, n);
      },
      useTransition: function () {
        var e = Xu(la)[0],
          n = yt().memoizedState;
        return [typeof e == "boolean" ? e : Cl(e), n];
      },
      useSyncExternalStore: Dm,
      useId: rp,
      useHostTransitionStatus: Wu,
      useFormState: $m,
      useActionState: $m,
      useOptimistic: function (e, n) {
        var i = yt();
        return Fe !== null
          ? Um(i, Fe, e, n)
          : ((i.baseState = e), [e, i.queue.dispatch]);
      },
      useMemoCache: $u,
      useCacheRefresh: lp,
    },
    vr = null,
    Ol = 0;
  function vs(e) {
    var n = Ol;
    return (Ol += 1), vr === null && (vr = []), xm(vr, e, n);
  }
  function Dl(e, n) {
    (n = n.props.ref), (e.ref = n !== void 0 ? n : null);
  }
  function bs(e, n) {
    throw n.$$typeof === E
      ? Error(o(525))
      : ((e = Object.prototype.toString.call(n)),
        Error(
          o(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : e
          )
        ));
  }
  function fp(e) {
    var n = e._init;
    return n(e._payload);
  }
  function hp(e) {
    function n(C, T) {
      if (e) {
        var N = C.deletions;
        N === null ? ((C.deletions = [T]), (C.flags |= 16)) : N.push(T);
      }
    }
    function i(C, T) {
      if (!e) return null;
      for (; T !== null; ) n(C, T), (T = T.sibling);
      return null;
    }
    function l(C) {
      for (var T = new Map(); C !== null; )
        C.key !== null ? T.set(C.key, C) : T.set(C.index, C), (C = C.sibling);
      return T;
    }
    function s(C, T) {
      return (C = ta(C, T)), (C.index = 0), (C.sibling = null), C;
    }
    function u(C, T, N) {
      return (
        (C.index = N),
        e
          ? ((N = C.alternate),
            N !== null
              ? ((N = N.index), N < T ? ((C.flags |= 67108866), T) : N)
              : ((C.flags |= 67108866), T))
          : ((C.flags |= 1048576), T)
      );
    }
    function m(C) {
      return e && C.alternate === null && (C.flags |= 67108866), C;
    }
    function y(C, T, N, G) {
      return T === null || T.tag !== 6
        ? ((T = _u(N, C.mode, G)), (T.return = C), T)
        : ((T = s(T, N)), (T.return = C), T);
    }
    function _(C, T, N, G) {
      var re = N.type;
      return re === M
        ? q(C, T, N.props.children, G, N.key)
        : T !== null &&
          (T.elementType === re ||
            (typeof re == "object" &&
              re !== null &&
              re.$$typeof === ne &&
              fp(re) === T.type))
        ? ((T = s(T, N.props)), Dl(T, N), (T.return = C), T)
        : ((T = ts(N.type, N.key, N.props, null, C.mode, G)),
          Dl(T, N),
          (T.return = C),
          T);
    }
    function k(C, T, N, G) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== N.containerInfo ||
        T.stateNode.implementation !== N.implementation
        ? ((T = xu(N, C.mode, G)), (T.return = C), T)
        : ((T = s(T, N.children || [])), (T.return = C), T);
    }
    function q(C, T, N, G, re) {
      return T === null || T.tag !== 7
        ? ((T = Ei(N, C.mode, G, re)), (T.return = C), T)
        : ((T = s(T, N)), (T.return = C), T);
    }
    function X(C, T, N) {
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return (T = _u("" + T, C.mode, N)), (T.return = C), T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case w:
            return (
              (N = ts(T.type, T.key, T.props, null, C.mode, N)),
              Dl(N, T),
              (N.return = C),
              N
            );
          case O:
            return (T = xu(T, C.mode, N)), (T.return = C), T;
          case ne:
            var G = T._init;
            return (T = G(T._payload)), X(C, T, N);
        }
        if (Le(T) || Ge(T))
          return (T = Ei(T, C.mode, N, null)), (T.return = C), T;
        if (typeof T.then == "function") return X(C, vs(T), N);
        if (T.$$typeof === V) return X(C, rs(C, T), N);
        bs(C, T);
      }
      return null;
    }
    function j(C, T, N, G) {
      var re = T !== null ? T.key : null;
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return re !== null ? null : y(C, T, "" + N, G);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case w:
            return N.key === re ? _(C, T, N, G) : null;
          case O:
            return N.key === re ? k(C, T, N, G) : null;
          case ne:
            return (re = N._init), (N = re(N._payload)), j(C, T, N, G);
        }
        if (Le(N) || Ge(N)) return re !== null ? null : q(C, T, N, G, null);
        if (typeof N.then == "function") return j(C, T, vs(N), G);
        if (N.$$typeof === V) return j(C, T, rs(C, N), G);
        bs(C, N);
      }
      return null;
    }
    function U(C, T, N, G, re) {
      if (
        (typeof G == "string" && G !== "") ||
        typeof G == "number" ||
        typeof G == "bigint"
      )
        return (C = C.get(N) || null), y(T, C, "" + G, re);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case w:
            return (
              (C = C.get(G.key === null ? N : G.key) || null), _(T, C, G, re)
            );
          case O:
            return (
              (C = C.get(G.key === null ? N : G.key) || null), k(T, C, G, re)
            );
          case ne:
            var Ce = G._init;
            return (G = Ce(G._payload)), U(C, T, N, G, re);
        }
        if (Le(G) || Ge(G)) return (C = C.get(N) || null), q(T, C, G, re, null);
        if (typeof G.then == "function") return U(C, T, N, vs(G), re);
        if (G.$$typeof === V) return U(C, T, N, rs(T, G), re);
        bs(T, G);
      }
      return null;
    }
    function we(C, T, N, G) {
      for (
        var re = null, Ce = null, ue = T, ye = (T = 0), Et = null;
        ue !== null && ye < N.length;
        ye++
      ) {
        ue.index > ye ? ((Et = ue), (ue = null)) : (Et = ue.sibling);
        var Pe = j(C, ue, N[ye], G);
        if (Pe === null) {
          ue === null && (ue = Et);
          break;
        }
        e && ue && Pe.alternate === null && n(C, ue),
          (T = u(Pe, T, ye)),
          Ce === null ? (re = Pe) : (Ce.sibling = Pe),
          (Ce = Pe),
          (ue = Et);
      }
      if (ye === N.length) return i(C, ue), $e && Ti(C, ye), re;
      if (ue === null) {
        for (; ye < N.length; ye++)
          (ue = X(C, N[ye], G)),
            ue !== null &&
              ((T = u(ue, T, ye)),
              Ce === null ? (re = ue) : (Ce.sibling = ue),
              (Ce = ue));
        return $e && Ti(C, ye), re;
      }
      for (ue = l(ue); ye < N.length; ye++)
        (Et = U(ue, C, ye, N[ye], G)),
          Et !== null &&
            (e &&
              Et.alternate !== null &&
              ue.delete(Et.key === null ? ye : Et.key),
            (T = u(Et, T, ye)),
            Ce === null ? (re = Et) : (Ce.sibling = Et),
            (Ce = Et));
      return (
        e &&
          ue.forEach(function (Fa) {
            return n(C, Fa);
          }),
        $e && Ti(C, ye),
        re
      );
    }
    function ge(C, T, N, G) {
      if (N == null) throw Error(o(151));
      for (
        var re = null,
          Ce = null,
          ue = T,
          ye = (T = 0),
          Et = null,
          Pe = N.next();
        ue !== null && !Pe.done;
        ye++, Pe = N.next()
      ) {
        ue.index > ye ? ((Et = ue), (ue = null)) : (Et = ue.sibling);
        var Fa = j(C, ue, Pe.value, G);
        if (Fa === null) {
          ue === null && (ue = Et);
          break;
        }
        e && ue && Fa.alternate === null && n(C, ue),
          (T = u(Fa, T, ye)),
          Ce === null ? (re = Fa) : (Ce.sibling = Fa),
          (Ce = Fa),
          (ue = Et);
      }
      if (Pe.done) return i(C, ue), $e && Ti(C, ye), re;
      if (ue === null) {
        for (; !Pe.done; ye++, Pe = N.next())
          (Pe = X(C, Pe.value, G)),
            Pe !== null &&
              ((T = u(Pe, T, ye)),
              Ce === null ? (re = Pe) : (Ce.sibling = Pe),
              (Ce = Pe));
        return $e && Ti(C, ye), re;
      }
      for (ue = l(ue); !Pe.done; ye++, Pe = N.next())
        (Pe = U(ue, C, ye, Pe.value, G)),
          Pe !== null &&
            (e &&
              Pe.alternate !== null &&
              ue.delete(Pe.key === null ? ye : Pe.key),
            (T = u(Pe, T, ye)),
            Ce === null ? (re = Pe) : (Ce.sibling = Pe),
            (Ce = Pe));
      return (
        e &&
          ue.forEach(function (t1) {
            return n(C, t1);
          }),
        $e && Ti(C, ye),
        re
      );
    }
    function Ze(C, T, N, G) {
      if (
        (typeof N == "object" &&
          N !== null &&
          N.type === M &&
          N.key === null &&
          (N = N.props.children),
        typeof N == "object" && N !== null)
      ) {
        switch (N.$$typeof) {
          case w:
            e: {
              for (var re = N.key; T !== null; ) {
                if (T.key === re) {
                  if (((re = N.type), re === M)) {
                    if (T.tag === 7) {
                      i(C, T.sibling),
                        (G = s(T, N.props.children)),
                        (G.return = C),
                        (C = G);
                      break e;
                    }
                  } else if (
                    T.elementType === re ||
                    (typeof re == "object" &&
                      re !== null &&
                      re.$$typeof === ne &&
                      fp(re) === T.type)
                  ) {
                    i(C, T.sibling),
                      (G = s(T, N.props)),
                      Dl(G, N),
                      (G.return = C),
                      (C = G);
                    break e;
                  }
                  i(C, T);
                  break;
                } else n(C, T);
                T = T.sibling;
              }
              N.type === M
                ? ((G = Ei(N.props.children, C.mode, G, N.key)),
                  (G.return = C),
                  (C = G))
                : ((G = ts(N.type, N.key, N.props, null, C.mode, G)),
                  Dl(G, N),
                  (G.return = C),
                  (C = G));
            }
            return m(C);
          case O:
            e: {
              for (re = N.key; T !== null; ) {
                if (T.key === re)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === N.containerInfo &&
                    T.stateNode.implementation === N.implementation
                  ) {
                    i(C, T.sibling),
                      (G = s(T, N.children || [])),
                      (G.return = C),
                      (C = G);
                    break e;
                  } else {
                    i(C, T);
                    break;
                  }
                else n(C, T);
                T = T.sibling;
              }
              (G = xu(N, C.mode, G)), (G.return = C), (C = G);
            }
            return m(C);
          case ne:
            return (re = N._init), (N = re(N._payload)), Ze(C, T, N, G);
        }
        if (Le(N)) return we(C, T, N, G);
        if (Ge(N)) {
          if (((re = Ge(N)), typeof re != "function")) throw Error(o(150));
          return (N = re.call(N)), ge(C, T, N, G);
        }
        if (typeof N.then == "function") return Ze(C, T, vs(N), G);
        if (N.$$typeof === V) return Ze(C, T, rs(C, N), G);
        bs(C, N);
      }
      return (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
        ? ((N = "" + N),
          T !== null && T.tag === 6
            ? (i(C, T.sibling), (G = s(T, N)), (G.return = C), (C = G))
            : (i(C, T), (G = _u(N, C.mode, G)), (G.return = C), (C = G)),
          m(C))
        : i(C, T);
    }
    return function (C, T, N, G) {
      try {
        Ol = 0;
        var re = Ze(C, T, N, G);
        return (vr = null), re;
      } catch (ue) {
        if (ue === wl || ue === os) throw ue;
        var Ce = Zt(29, ue, null, C.mode);
        return (Ce.lanes = G), (Ce.return = C), Ce;
      } finally {
      }
    };
  }
  var br = hp(!0),
    mp = hp(!1),
    yn = Y(null),
    Pn = null;
  function La(e) {
    var n = e.alternate;
    W(wt, wt.current & 1),
      W(yn, e),
      Pn === null &&
        (n === null || mr.current !== null || n.memoizedState !== null) &&
        (Pn = e);
  }
  function pp(e) {
    if (e.tag === 22) {
      if ((W(wt, wt.current), W(yn, e), Pn === null)) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Pn = e);
      }
    } else ja();
  }
  function ja() {
    W(wt, wt.current), W(yn, yn.current);
  }
  function oa(e) {
    te(yn), Pn === e && (Pn = null), te(wt);
  }
  var wt = Y(0);
  function ws(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (
          i !== null &&
          ((i = i.dehydrated), i === null || i.data === "$?" || Gd(i))
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  function td(e, n, i, l) {
    (n = e.memoizedState),
      (i = i(l, n)),
      (i = i == null ? n : b({}, n, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var nd = {
    enqueueSetState: function (e, n, i) {
      e = e._reactInternals;
      var l = tn(),
        s = Na(l);
      (s.payload = n),
        i != null && (s.callback = i),
        (n = Ma(e, s, l)),
        n !== null && (nn(n, e, l), xl(n, e, l));
    },
    enqueueReplaceState: function (e, n, i) {
      e = e._reactInternals;
      var l = tn(),
        s = Na(l);
      (s.tag = 1),
        (s.payload = n),
        i != null && (s.callback = i),
        (n = Ma(e, s, l)),
        n !== null && (nn(n, e, l), xl(n, e, l));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var i = tn(),
        l = Na(i);
      (l.tag = 2),
        n != null && (l.callback = n),
        (n = Ma(e, l, i)),
        n !== null && (nn(n, e, i), xl(n, e, i));
    },
  };
  function gp(e, n, i, l, s, u, m) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, u, m)
        : n.prototype && n.prototype.isPureReactComponent
        ? !fl(i, l) || !fl(s, u)
        : !0
    );
  }
  function yp(e, n, i, l) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(i, l),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(i, l),
      n.state !== e && nd.enqueueReplaceState(n, n.state, null);
  }
  function Mi(e, n) {
    var i = n;
    if ("ref" in n) {
      i = {};
      for (var l in n) l !== "ref" && (i[l] = n[l]);
    }
    if ((e = e.defaultProps)) {
      i === n && (i = b({}, i));
      for (var s in e) i[s] === void 0 && (i[s] = e[s]);
    }
    return i;
  }
  var _s =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var n = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(n)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function vp(e) {
    _s(e);
  }
  function bp(e) {
    console.error(e);
  }
  function wp(e) {
    _s(e);
  }
  function xs(e, n) {
    try {
      var i = e.onUncaughtError;
      i(n.value, { componentStack: n.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function _p(e, n, i) {
    try {
      var l = e.onCaughtError;
      l(i.value, {
        componentStack: i.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function ad(e, n, i) {
    return (
      (i = Na(i)),
      (i.tag = 3),
      (i.payload = { element: null }),
      (i.callback = function () {
        xs(e, n);
      }),
      i
    );
  }
  function xp(e) {
    return (e = Na(e)), (e.tag = 3), e;
  }
  function Ep(e, n, i, l) {
    var s = i.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = l.value;
      (e.payload = function () {
        return s(u);
      }),
        (e.callback = function () {
          _p(n, i, l);
        });
    }
    var m = i.stateNode;
    m !== null &&
      typeof m.componentDidCatch == "function" &&
      (e.callback = function () {
        _p(n, i, l),
          typeof s != "function" &&
            (Pa === null ? (Pa = new Set([this])) : Pa.add(this));
        var y = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: y !== null ? y : "",
        });
      });
  }
  function t2(e, n, i, l, s) {
    if (
      ((i.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((n = i.alternate),
        n !== null && yl(n, i, s, !0),
        (i = yn.current),
        i !== null)
      ) {
        switch (i.tag) {
          case 13:
            return (
              Pn === null ? Ad() : i.alternate === null && ut === 0 && (ut = 3),
              (i.flags &= -257),
              (i.flags |= 65536),
              (i.lanes = s),
              l === Mu
                ? (i.flags |= 16384)
                : ((n = i.updateQueue),
                  n === null ? (i.updateQueue = new Set([l])) : n.add(l),
                  Od(e, l, s)),
              !1
            );
          case 22:
            return (
              (i.flags |= 65536),
              l === Mu
                ? (i.flags |= 16384)
                : ((n = i.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (i.updateQueue = n))
                    : ((i = n.retryQueue),
                      i === null ? (n.retryQueue = new Set([l])) : i.add(l)),
                  Od(e, l, s)),
              !1
            );
        }
        throw Error(o(435, i.tag));
      }
      return Od(e, l, s), Ad(), !1;
    }
    if ($e)
      return (
        (n = yn.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = s),
            l !== Tu && ((e = Error(o(422), { cause: l })), gl(hn(e, i))))
          : (l !== Tu && ((n = Error(o(423), { cause: l })), gl(hn(n, i))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (s &= -s),
            (e.lanes |= s),
            (l = hn(l, i)),
            (s = ad(e.stateNode, l, s)),
            ju(e, s),
            ut !== 4 && (ut = 2)),
        !1
      );
    var u = Error(o(520), { cause: l });
    if (
      ((u = hn(u, i)),
      zl === null ? (zl = [u]) : zl.push(u),
      ut !== 4 && (ut = 2),
      n === null)
    )
      return !0;
    (l = hn(l, i)), (i = n);
    do {
      switch (i.tag) {
        case 3:
          return (
            (i.flags |= 65536),
            (e = s & -s),
            (i.lanes |= e),
            (e = ad(i.stateNode, l, e)),
            ju(i, e),
            !1
          );
        case 1:
          if (
            ((n = i.type),
            (u = i.stateNode),
            (i.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (Pa === null || !Pa.has(u)))))
          )
            return (
              (i.flags |= 65536),
              (s &= -s),
              (i.lanes |= s),
              (s = xp(s)),
              Ep(s, e, i, l),
              ju(i, s),
              !1
            );
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var Sp = Error(o(461)),
    _t = !1;
  function Ct(e, n, i, l) {
    n.child = e === null ? mp(n, null, i, l) : br(n, e.child, i, l);
  }
  function Tp(e, n, i, l, s) {
    i = i.render;
    var u = n.ref;
    if ("ref" in l) {
      var m = {};
      for (var y in l) y !== "ref" && (m[y] = l[y]);
    } else m = l;
    return (
      Oi(n),
      (l = Hu(e, n, i, m, u, s)),
      (y = Pu()),
      e !== null && !_t
        ? (Vu(e, n, s), sa(e, n, s))
        : ($e && y && Eu(n), (n.flags |= 1), Ct(e, n, l, s), n.child)
    );
  }
  function Cp(e, n, i, l, s) {
    if (e === null) {
      var u = i.type;
      return typeof u == "function" &&
        !wu(u) &&
        u.defaultProps === void 0 &&
        i.compare === null
        ? ((n.tag = 15), (n.type = u), Ap(e, n, u, l, s))
        : ((e = ts(i.type, null, l, n, n.mode, s)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((u = e.child), !dd(e, s))) {
      var m = u.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : fl), i(m, l) && e.ref === n.ref)
      )
        return sa(e, n, s);
    }
    return (
      (n.flags |= 1),
      (e = ta(u, l)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Ap(e, n, i, l, s) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (fl(u, l) && e.ref === n.ref)
        if (((_t = !1), (n.pendingProps = l = u), dd(e, s)))
          (e.flags & 131072) !== 0 && (_t = !0);
        else return (n.lanes = e.lanes), sa(e, n, s);
    }
    return id(e, n, i, l, s);
  }
  function Rp(e, n, i) {
    var l = n.pendingProps,
      s = l.children,
      u = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (((l = u !== null ? u.baseLanes | i : i), e !== null)) {
          for (s = n.child = e.child, u = 0; s !== null; )
            (u = u | s.lanes | s.childLanes), (s = s.sibling);
          n.childLanes = u & ~l;
        } else (n.childLanes = 0), (n.child = null);
        return Op(e, n, l, i);
      }
      if ((i & 536870912) !== 0)
        (n.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && ls(n, u !== null ? u.cachePool : null),
          u !== null ? Am(n, u) : zu(),
          pp(n);
      else
        return (
          (n.lanes = n.childLanes = 536870912),
          Op(e, n, u !== null ? u.baseLanes | i : i, i)
        );
    } else
      u !== null
        ? (ls(n, u.cachePool), Am(n, u), ja(), (n.memoizedState = null))
        : (e !== null && ls(n, null), zu(), ja());
    return Ct(e, n, s, i), n.child;
  }
  function Op(e, n, i, l) {
    var s = Nu();
    return (
      (s = s === null ? null : { parent: bt._currentValue, pool: s }),
      (n.memoizedState = { baseLanes: i, cachePool: s }),
      e !== null && ls(n, null),
      zu(),
      pp(n),
      e !== null && yl(e, n, l, !0),
      null
    );
  }
  function Es(e, n) {
    var i = n.ref;
    if (i === null) e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object") throw Error(o(284));
      (e === null || e.ref !== i) && (n.flags |= 4194816);
    }
  }
  function id(e, n, i, l, s) {
    return (
      Oi(n),
      (i = Hu(e, n, i, l, void 0, s)),
      (l = Pu()),
      e !== null && !_t
        ? (Vu(e, n, s), sa(e, n, s))
        : ($e && l && Eu(n), (n.flags |= 1), Ct(e, n, i, s), n.child)
    );
  }
  function Dp(e, n, i, l, s, u) {
    return (
      Oi(n),
      (n.updateQueue = null),
      (i = Om(n, l, i, s)),
      Rm(e),
      (l = Pu()),
      e !== null && !_t
        ? (Vu(e, n, u), sa(e, n, u))
        : ($e && l && Eu(n), (n.flags |= 1), Ct(e, n, i, u), n.child)
    );
  }
  function Np(e, n, i, l, s) {
    if ((Oi(n), n.stateNode === null)) {
      var u = cr,
        m = i.contextType;
      typeof m == "object" && m !== null && (u = Dt(m)),
        (u = new i(l, u)),
        (n.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = nd),
        (n.stateNode = u),
        (u._reactInternals = n),
        (u = n.stateNode),
        (u.props = l),
        (u.state = n.memoizedState),
        (u.refs = {}),
        ku(n),
        (m = i.contextType),
        (u.context = typeof m == "object" && m !== null ? Dt(m) : cr),
        (u.state = n.memoizedState),
        (m = i.getDerivedStateFromProps),
        typeof m == "function" && (td(n, i, m, l), (u.state = n.memoizedState)),
        typeof i.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((m = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          m !== u.state && nd.enqueueReplaceState(u, u.state, null),
          Sl(n, l, u, s),
          El(),
          (u.state = n.memoizedState)),
        typeof u.componentDidMount == "function" && (n.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      u = n.stateNode;
      var y = n.memoizedProps,
        _ = Mi(i, y);
      u.props = _;
      var k = u.context,
        q = i.contextType;
      (m = cr), typeof q == "object" && q !== null && (m = Dt(q));
      var X = i.getDerivedStateFromProps;
      (q =
        typeof X == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (y = n.pendingProps !== y),
        q ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((y || k !== m) && yp(n, u, l, m)),
        (Da = !1);
      var j = n.memoizedState;
      (u.state = j),
        Sl(n, l, u, s),
        El(),
        (k = n.memoizedState),
        y || j !== k || Da
          ? (typeof X == "function" && (td(n, i, X, l), (k = n.memoizedState)),
            (_ = Da || gp(n, i, _, l, j, k, m))
              ? (q ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = l),
                (n.memoizedState = k)),
            (u.props = l),
            (u.state = k),
            (u.context = m),
            (l = _))
          : (typeof u.componentDidMount == "function" && (n.flags |= 4194308),
            (l = !1));
    } else {
      (u = n.stateNode),
        Lu(e, n),
        (m = n.memoizedProps),
        (q = Mi(i, m)),
        (u.props = q),
        (X = n.pendingProps),
        (j = u.context),
        (k = i.contextType),
        (_ = cr),
        typeof k == "object" && k !== null && (_ = Dt(k)),
        (y = i.getDerivedStateFromProps),
        (k =
          typeof y == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((m !== X || j !== _) && yp(n, u, l, _)),
        (Da = !1),
        (j = n.memoizedState),
        (u.state = j),
        Sl(n, l, u, s),
        El();
      var U = n.memoizedState;
      m !== X ||
      j !== U ||
      Da ||
      (e !== null && e.dependencies !== null && is(e.dependencies))
        ? (typeof y == "function" && (td(n, i, y, l), (U = n.memoizedState)),
          (q =
            Da ||
            gp(n, i, q, l, j, U, _) ||
            (e !== null && e.dependencies !== null && is(e.dependencies)))
            ? (k ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(l, U, _),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(l, U, _)),
              typeof u.componentDidUpdate == "function" && (n.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (m === e.memoizedProps && j === e.memoizedState) ||
                (n.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (m === e.memoizedProps && j === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = l),
              (n.memoizedState = U)),
          (u.props = l),
          (u.state = U),
          (u.context = _),
          (l = q))
        : (typeof u.componentDidUpdate != "function" ||
            (m === e.memoizedProps && j === e.memoizedState) ||
            (n.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (m === e.memoizedProps && j === e.memoizedState) ||
            (n.flags |= 1024),
          (l = !1));
    }
    return (
      (u = l),
      Es(e, n),
      (l = (n.flags & 128) !== 0),
      u || l
        ? ((u = n.stateNode),
          (i =
            l && typeof i.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (n.flags |= 1),
          e !== null && l
            ? ((n.child = br(n, e.child, null, s)),
              (n.child = br(n, null, i, s)))
            : Ct(e, n, i, s),
          (n.memoizedState = u.state),
          (e = n.child))
        : (e = sa(e, n, s)),
      e
    );
  }
  function Mp(e, n, i, l) {
    return pl(), (n.flags |= 256), Ct(e, n, i, l), n.child;
  }
  var rd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function ld(e) {
    return { baseLanes: e, cachePool: bm() };
  }
  function od(e, n, i) {
    return (e = e !== null ? e.childLanes & ~i : 0), n && (e |= vn), e;
  }
  function kp(e, n, i) {
    var l = n.pendingProps,
      s = !1,
      u = (n.flags & 128) !== 0,
      m;
    if (
      ((m = u) ||
        (m =
          e !== null && e.memoizedState === null ? !1 : (wt.current & 2) !== 0),
      m && ((s = !0), (n.flags &= -129)),
      (m = (n.flags & 32) !== 0),
      (n.flags &= -33),
      e === null)
    ) {
      if ($e) {
        if ((s ? La(n) : ja(), $e)) {
          var y = ct,
            _;
          if ((_ = y)) {
            e: {
              for (_ = y, y = Hn; _.nodeType !== 8; ) {
                if (!y) {
                  y = null;
                  break e;
                }
                if (((_ = Mn(_.nextSibling)), _ === null)) {
                  y = null;
                  break e;
                }
              }
              y = _;
            }
            y !== null
              ? ((n.memoizedState = {
                  dehydrated: y,
                  treeContext: Si !== null ? { id: na, overflow: aa } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (_ = Zt(18, null, null, 0)),
                (_.stateNode = y),
                (_.return = n),
                (n.child = _),
                (jt = n),
                (ct = null),
                (_ = !0))
              : (_ = !1);
          }
          _ || Ai(n);
        }
        if (
          ((y = n.memoizedState),
          y !== null && ((y = y.dehydrated), y !== null))
        )
          return Gd(y) ? (n.lanes = 32) : (n.lanes = 536870912), null;
        oa(n);
      }
      return (
        (y = l.children),
        (l = l.fallback),
        s
          ? (ja(),
            (s = n.mode),
            (y = Ss({ mode: "hidden", children: y }, s)),
            (l = Ei(l, s, i, null)),
            (y.return = n),
            (l.return = n),
            (y.sibling = l),
            (n.child = y),
            (s = n.child),
            (s.memoizedState = ld(i)),
            (s.childLanes = od(e, m, i)),
            (n.memoizedState = rd),
            l)
          : (La(n), sd(n, y))
      );
    }
    if (
      ((_ = e.memoizedState), _ !== null && ((y = _.dehydrated), y !== null))
    ) {
      if (u)
        n.flags & 256
          ? (La(n), (n.flags &= -257), (n = cd(e, n, i)))
          : n.memoizedState !== null
          ? (ja(), (n.child = e.child), (n.flags |= 128), (n = null))
          : (ja(),
            (s = l.fallback),
            (y = n.mode),
            (l = Ss({ mode: "visible", children: l.children }, y)),
            (s = Ei(s, y, i, null)),
            (s.flags |= 2),
            (l.return = n),
            (s.return = n),
            (l.sibling = s),
            (n.child = l),
            br(n, e.child, null, i),
            (l = n.child),
            (l.memoizedState = ld(i)),
            (l.childLanes = od(e, m, i)),
            (n.memoizedState = rd),
            (n = s));
      else if ((La(n), Gd(y))) {
        if (((m = y.nextSibling && y.nextSibling.dataset), m)) var k = m.dgst;
        (m = k),
          (l = Error(o(419))),
          (l.stack = ""),
          (l.digest = m),
          gl({ value: l, source: null, stack: null }),
          (n = cd(e, n, i));
      } else if (
        (_t || yl(e, n, i, !1), (m = (i & e.childLanes) !== 0), _t || m)
      ) {
        if (
          ((m = tt),
          m !== null &&
            ((l = i & -i),
            (l = (l & 42) !== 0 ? 1 : tl(l)),
            (l = (l & (m.suspendedLanes | i)) !== 0 ? 0 : l),
            l !== 0 && l !== _.retryLane))
        )
          throw ((_.retryLane = l), sr(e, l), nn(m, e, l), Sp);
        y.data === "$?" || Ad(), (n = cd(e, n, i));
      } else
        y.data === "$?"
          ? ((n.flags |= 192), (n.child = e.child), (n = null))
          : ((e = _.treeContext),
            (ct = Mn(y.nextSibling)),
            (jt = n),
            ($e = !0),
            (Ci = null),
            (Hn = !1),
            e !== null &&
              ((pn[gn++] = na),
              (pn[gn++] = aa),
              (pn[gn++] = Si),
              (na = e.id),
              (aa = e.overflow),
              (Si = n)),
            (n = sd(n, l.children)),
            (n.flags |= 4096));
      return n;
    }
    return s
      ? (ja(),
        (s = l.fallback),
        (y = n.mode),
        (_ = e.child),
        (k = _.sibling),
        (l = ta(_, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = _.subtreeFlags & 65011712),
        k !== null ? (s = ta(k, s)) : ((s = Ei(s, y, i, null)), (s.flags |= 2)),
        (s.return = n),
        (l.return = n),
        (l.sibling = s),
        (n.child = l),
        (l = s),
        (s = n.child),
        (y = e.child.memoizedState),
        y === null
          ? (y = ld(i))
          : ((_ = y.cachePool),
            _ !== null
              ? ((k = bt._currentValue),
                (_ = _.parent !== k ? { parent: k, pool: k } : _))
              : (_ = bm()),
            (y = { baseLanes: y.baseLanes | i, cachePool: _ })),
        (s.memoizedState = y),
        (s.childLanes = od(e, m, i)),
        (n.memoizedState = rd),
        l)
      : (La(n),
        (i = e.child),
        (e = i.sibling),
        (i = ta(i, { mode: "visible", children: l.children })),
        (i.return = n),
        (i.sibling = null),
        e !== null &&
          ((m = n.deletions),
          m === null ? ((n.deletions = [e]), (n.flags |= 16)) : m.push(e)),
        (n.child = i),
        (n.memoizedState = null),
        i);
  }
  function sd(e, n) {
    return (
      (n = Ss({ mode: "visible", children: n }, e.mode)),
      (n.return = e),
      (e.child = n)
    );
  }
  function Ss(e, n) {
    return (
      (e = Zt(22, e, null, n)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function cd(e, n, i) {
    return (
      br(n, e.child, null, i),
      (e = sd(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function Lp(e, n, i) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), Au(e.return, n, i);
  }
  function ud(e, n, i, l, s) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: i,
          tailMode: s,
        })
      : ((u.isBackwards = n),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = l),
        (u.tail = i),
        (u.tailMode = s));
  }
  function jp(e, n, i) {
    var l = n.pendingProps,
      s = l.revealOrder,
      u = l.tail;
    if ((Ct(e, n, l.children, i), (l = wt.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Lp(e, i, n);
          else if (e.tag === 19) Lp(e, i, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    switch ((W(wt, l), s)) {
      case "forwards":
        for (i = n.child, s = null; i !== null; )
          (e = i.alternate),
            e !== null && ws(e) === null && (s = i),
            (i = i.sibling);
        (i = s),
          i === null
            ? ((s = n.child), (n.child = null))
            : ((s = i.sibling), (i.sibling = null)),
          ud(n, !1, s, i, u);
        break;
      case "backwards":
        for (i = null, s = n.child, n.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && ws(e) === null)) {
            n.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = i), (i = s), (s = e);
        }
        ud(n, !0, i, null, u);
        break;
      case "together":
        ud(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function sa(e, n, i) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (Ha |= n.lanes),
      (i & n.childLanes) === 0)
    )
      if (e !== null) {
        if ((yl(e, n, i, !1), (i & n.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && n.child !== e.child) throw Error(o(153));
    if (n.child !== null) {
      for (
        e = n.child, i = ta(e, e.pendingProps), n.child = i, i.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (i = i.sibling = ta(e, e.pendingProps)),
          (i.return = n);
      i.sibling = null;
    }
    return n.child;
  }
  function dd(e, n) {
    return (e.lanes & n) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && is(e)));
  }
  function n2(e, n, i) {
    switch (n.tag) {
      case 3:
        et(n, n.stateNode.containerInfo),
          Oa(n, bt, e.memoizedState.cache),
          pl();
        break;
      case 27:
      case 5:
        vt(n);
        break;
      case 4:
        et(n, n.stateNode.containerInfo);
        break;
      case 10:
        Oa(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var l = n.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (La(n), (n.flags |= 128), null)
            : (i & n.child.childLanes) !== 0
            ? kp(e, n, i)
            : (La(n), (e = sa(e, n, i)), e !== null ? e.sibling : null);
        La(n);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (
          ((l = (i & n.childLanes) !== 0),
          l || (yl(e, n, i, !1), (l = (i & n.childLanes) !== 0)),
          s)
        ) {
          if (l) return jp(e, n, i);
          n.flags |= 128;
        }
        if (
          ((s = n.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          W(wt, wt.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), Rp(e, n, i);
      case 24:
        Oa(n, bt, e.memoizedState.cache);
    }
    return sa(e, n, i);
  }
  function Up(e, n, i) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps) _t = !0;
      else {
        if (!dd(e, i) && (n.flags & 128) === 0) return (_t = !1), n2(e, n, i);
        _t = (e.flags & 131072) !== 0;
      }
    else (_t = !1), $e && (n.flags & 1048576) !== 0 && fm(n, as, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        e: {
          e = n.pendingProps;
          var l = n.elementType,
            s = l._init;
          if (((l = s(l._payload)), (n.type = l), typeof l == "function"))
            wu(l)
              ? ((e = Mi(l, e)), (n.tag = 1), (n = Np(null, n, l, e, i)))
              : ((n.tag = 0), (n = id(null, n, l, e, i)));
          else {
            if (l != null) {
              if (((s = l.$$typeof), s === Q)) {
                (n.tag = 11), (n = Tp(null, n, l, e, i));
                break e;
              } else if (s === ee) {
                (n.tag = 14), (n = Cp(null, n, l, e, i));
                break e;
              }
            }
            throw ((n = Ie(l) || l), Error(o(306, n, "")));
          }
        }
        return n;
      case 0:
        return id(e, n, n.type, n.pendingProps, i);
      case 1:
        return (l = n.type), (s = Mi(l, n.pendingProps)), Np(e, n, l, s, i);
      case 3:
        e: {
          if ((et(n, n.stateNode.containerInfo), e === null))
            throw Error(o(387));
          l = n.pendingProps;
          var u = n.memoizedState;
          (s = u.element), Lu(e, n), Sl(n, l, null, i);
          var m = n.memoizedState;
          if (
            ((l = m.cache),
            Oa(n, bt, l),
            l !== u.cache && Ru(n, [bt], i, !0),
            El(),
            (l = m.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: l, isDehydrated: !1, cache: m.cache }),
              (n.updateQueue.baseState = u),
              (n.memoizedState = u),
              n.flags & 256)
            ) {
              n = Mp(e, n, l, i);
              break e;
            } else if (l !== s) {
              (s = hn(Error(o(424)), n)), gl(s), (n = Mp(e, n, l, i));
              break e;
            } else {
              switch (((e = n.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                ct = Mn(e.firstChild),
                  jt = n,
                  $e = !0,
                  Ci = null,
                  Hn = !0,
                  i = mp(n, null, l, i),
                  n.child = i;
                i;

              )
                (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
            }
          else {
            if ((pl(), l === s)) {
              n = sa(e, n, i);
              break e;
            }
            Ct(e, n, l, i);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          Es(e, n),
          e === null
            ? (i = Hg(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = i)
              : $e ||
                ((i = n.type),
                (e = n.pendingProps),
                (l = Is(he.current).createElement(i)),
                (l[K] = n),
                (l[J] = e),
                Rt(l, i, e),
                He(l),
                (n.stateNode = l))
            : (n.memoizedState = Hg(
                n.type,
                e.memoizedProps,
                n.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          vt(n),
          e === null &&
            $e &&
            ((l = n.stateNode = zg(n.type, n.pendingProps, he.current)),
            (jt = n),
            (Hn = !0),
            (s = ct),
            Ga(n.type) ? (($d = s), (ct = Mn(l.firstChild))) : (ct = s)),
          Ct(e, n, n.pendingProps.children, i),
          Es(e, n),
          e === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          e === null &&
            $e &&
            ((s = l = ct) &&
              ((l = D2(l, n.type, n.pendingProps, Hn)),
              l !== null
                ? ((n.stateNode = l),
                  (jt = n),
                  (ct = Mn(l.firstChild)),
                  (Hn = !1),
                  (s = !0))
                : (s = !1)),
            s || Ai(n)),
          vt(n),
          (s = n.type),
          (u = n.pendingProps),
          (m = e !== null ? e.memoizedProps : null),
          (l = u.children),
          Pd(s, u) ? (l = null) : m !== null && Pd(s, m) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((s = Hu(e, n, Kw, null, null, i)), (Yl._currentValue = s)),
          Es(e, n),
          Ct(e, n, l, i),
          n.child
        );
      case 6:
        return (
          e === null &&
            $e &&
            ((e = i = ct) &&
              ((i = N2(i, n.pendingProps, Hn)),
              i !== null
                ? ((n.stateNode = i), (jt = n), (ct = null), (e = !0))
                : (e = !1)),
            e || Ai(n)),
          null
        );
      case 13:
        return kp(e, n, i);
      case 4:
        return (
          et(n, n.stateNode.containerInfo),
          (l = n.pendingProps),
          e === null ? (n.child = br(n, null, l, i)) : Ct(e, n, l, i),
          n.child
        );
      case 11:
        return Tp(e, n, n.type, n.pendingProps, i);
      case 7:
        return Ct(e, n, n.pendingProps, i), n.child;
      case 8:
        return Ct(e, n, n.pendingProps.children, i), n.child;
      case 12:
        return Ct(e, n, n.pendingProps.children, i), n.child;
      case 10:
        return (
          (l = n.pendingProps),
          Oa(n, n.type, l.value),
          Ct(e, n, l.children, i),
          n.child
        );
      case 9:
        return (
          (s = n.type._context),
          (l = n.pendingProps.children),
          Oi(n),
          (s = Dt(s)),
          (l = l(s)),
          (n.flags |= 1),
          Ct(e, n, l, i),
          n.child
        );
      case 14:
        return Cp(e, n, n.type, n.pendingProps, i);
      case 15:
        return Ap(e, n, n.type, n.pendingProps, i);
      case 19:
        return jp(e, n, i);
      case 31:
        return (
          (l = n.pendingProps),
          (i = n.mode),
          (l = { mode: l.mode, children: l.children }),
          e === null
            ? ((i = Ss(l, i)),
              (i.ref = n.ref),
              (n.child = i),
              (i.return = n),
              (n = i))
            : ((i = ta(e.child, l)),
              (i.ref = n.ref),
              (n.child = i),
              (i.return = n),
              (n = i)),
          n
        );
      case 22:
        return Rp(e, n, i);
      case 24:
        return (
          Oi(n),
          (l = Dt(bt)),
          e === null
            ? ((s = Nu()),
              s === null &&
                ((s = tt),
                (u = Ou()),
                (s.pooledCache = u),
                u.refCount++,
                u !== null && (s.pooledCacheLanes |= i),
                (s = u)),
              (n.memoizedState = { parent: l, cache: s }),
              ku(n),
              Oa(n, bt, s))
            : ((e.lanes & i) !== 0 && (Lu(e, n), Sl(n, null, null, i), El()),
              (s = e.memoizedState),
              (u = n.memoizedState),
              s.parent !== l
                ? ((s = { parent: l, cache: l }),
                  (n.memoizedState = s),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = s),
                  Oa(n, bt, l))
                : ((l = u.cache),
                  Oa(n, bt, l),
                  l !== s.cache && Ru(n, [bt], i, !0))),
          Ct(e, n, n.pendingProps.children, i),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(o(156, n.tag));
  }
  function ca(e) {
    e.flags |= 4;
  }
  function zp(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !$g(n))) {
      if (
        ((n = yn.current),
        n !== null &&
          ((je & 4194048) === je
            ? Pn !== null
            : ((je & 62914560) !== je && (je & 536870912) === 0) || n !== Pn))
      )
        throw ((_l = Mu), wm);
      e.flags |= 8192;
    }
  }
  function Ts(e, n) {
    n !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((n = e.tag !== 22 ? Po() : 536870912), (e.lanes |= n), (Er |= n));
  }
  function Nl(e, n) {
    if (!$e)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), (n = n.sibling);
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = e.tail;
          for (var l = null; i !== null; )
            i.alternate !== null && (l = i), (i = i.sibling);
          l === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function st(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      l = 0;
    if (n)
      for (var s = e.child; s !== null; )
        (i |= s.lanes | s.childLanes),
          (l |= s.subtreeFlags & 65011712),
          (l |= s.flags & 65011712),
          (s.return = e),
          (s = s.sibling);
    else
      for (s = e.child; s !== null; )
        (i |= s.lanes | s.childLanes),
          (l |= s.subtreeFlags),
          (l |= s.flags),
          (s.return = e),
          (s = s.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = i), n;
  }
  function a2(e, n, i) {
    var l = n.pendingProps;
    switch ((Su(n), n.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return st(n), null;
      case 1:
        return st(n), null;
      case 3:
        return (
          (i = n.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          n.memoizedState.cache !== l && (n.flags |= 2048),
          ra(bt),
          zn(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (ml(n)
              ? ca(n)
              : e === null ||
                (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), pm())),
          st(n),
          null
        );
      case 26:
        return (
          (i = n.memoizedState),
          e === null
            ? (ca(n),
              i !== null ? (st(n), zp(n, i)) : (st(n), (n.flags &= -16777217)))
            : i
            ? i !== e.memoizedState
              ? (ca(n), st(n), zp(n, i))
              : (st(n), (n.flags &= -16777217))
            : (e.memoizedProps !== l && ca(n), st(n), (n.flags &= -16777217)),
          null
        );
      case 27:
        Tn(n), (i = he.current);
        var s = n.type;
        if (e !== null && n.stateNode != null) e.memoizedProps !== l && ca(n);
        else {
          if (!l) {
            if (n.stateNode === null) throw Error(o(166));
            return st(n), null;
          }
          (e = se.current),
            ml(n) ? hm(n) : ((e = zg(s, l, i)), (n.stateNode = e), ca(n));
        }
        return st(n), null;
      case 5:
        if ((Tn(n), (i = n.type), e !== null && n.stateNode != null))
          e.memoizedProps !== l && ca(n);
        else {
          if (!l) {
            if (n.stateNode === null) throw Error(o(166));
            return st(n), null;
          }
          if (((e = se.current), ml(n))) hm(n);
          else {
            switch (((s = Is(he.current)), e)) {
              case 1:
                e = s.createElementNS("http://www.w3.org/2000/svg", i);
                break;
              case 2:
                e = s.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                break;
              default:
                switch (i) {
                  case "svg":
                    e = s.createElementNS("http://www.w3.org/2000/svg", i);
                    break;
                  case "math":
                    e = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i
                    );
                    break;
                  case "script":
                    (e = s.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof l.is == "string"
                        ? s.createElement("select", { is: l.is })
                        : s.createElement("select")),
                      l.multiple
                        ? (e.multiple = !0)
                        : l.size && (e.size = l.size);
                    break;
                  default:
                    e =
                      typeof l.is == "string"
                        ? s.createElement(i, { is: l.is })
                        : s.createElement(i);
                }
            }
            (e[K] = n), (e[J] = l);
            e: for (s = n.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) e.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                (s.child.return = s), (s = s.child);
                continue;
              }
              if (s === n) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === n) break e;
                s = s.return;
              }
              (s.sibling.return = s.return), (s = s.sibling);
            }
            n.stateNode = e;
            e: switch ((Rt(e, i, l), i)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && ca(n);
          }
        }
        return st(n), (n.flags &= -16777217), null;
      case 6:
        if (e && n.stateNode != null) e.memoizedProps !== l && ca(n);
        else {
          if (typeof l != "string" && n.stateNode === null) throw Error(o(166));
          if (((e = he.current), ml(n))) {
            if (
              ((e = n.stateNode),
              (i = n.memoizedProps),
              (l = null),
              (s = jt),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  l = s.memoizedProps;
              }
            (e[K] = n),
              (e = !!(
                e.nodeValue === i ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Dg(e.nodeValue, i)
              )),
              e || Ai(n);
          } else (e = Is(e).createTextNode(l)), (e[K] = n), (n.stateNode = e);
        }
        return st(n), null;
      case 13:
        if (
          ((l = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((s = ml(n)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(o(318));
              if (
                ((s = n.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(o(317));
              s[K] = n;
            } else
              pl(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            st(n), (s = !1);
          } else
            (s = pm()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = s),
              (s = !0);
          if (!s) return n.flags & 256 ? (oa(n), n) : (oa(n), null);
        }
        if ((oa(n), (n.flags & 128) !== 0)) return (n.lanes = i), n;
        if (
          ((i = l !== null), (e = e !== null && e.memoizedState !== null), i)
        ) {
          (l = n.child),
            (s = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (s = l.alternate.memoizedState.cachePool.pool);
          var u = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (u = l.memoizedState.cachePool.pool),
            u !== s && (l.flags |= 2048);
        }
        return (
          i !== e && i && (n.child.flags |= 8192),
          Ts(n, n.updateQueue),
          st(n),
          null
        );
      case 4:
        return zn(), e === null && Ud(n.stateNode.containerInfo), st(n), null;
      case 10:
        return ra(n.type), st(n), null;
      case 19:
        if ((te(wt), (s = n.memoizedState), s === null)) return st(n), null;
        if (((l = (n.flags & 128) !== 0), (u = s.rendering), u === null))
          if (l) Nl(s, !1);
          else {
            if (ut !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((u = ws(e)), u !== null)) {
                  for (
                    n.flags |= 128,
                      Nl(s, !1),
                      e = u.updateQueue,
                      n.updateQueue = e,
                      Ts(n, e),
                      n.subtreeFlags = 0,
                      e = i,
                      i = n.child;
                    i !== null;

                  )
                    dm(i, e), (i = i.sibling);
                  return W(wt, (wt.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            s.tail !== null &&
              Ft() > Rs &&
              ((n.flags |= 128), (l = !0), Nl(s, !1), (n.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = ws(u)), e !== null)) {
              if (
                ((n.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (n.updateQueue = e),
                Ts(n, e),
                Nl(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !u.alternate &&
                  !$e)
              )
                return st(n), null;
            } else
              2 * Ft() - s.renderingStartTime > Rs &&
                i !== 536870912 &&
                ((n.flags |= 128), (l = !0), Nl(s, !1), (n.lanes = 4194304));
          s.isBackwards
            ? ((u.sibling = n.child), (n.child = u))
            : ((e = s.last),
              e !== null ? (e.sibling = u) : (n.child = u),
              (s.last = u));
        }
        return s.tail !== null
          ? ((n = s.tail),
            (s.rendering = n),
            (s.tail = n.sibling),
            (s.renderingStartTime = Ft()),
            (n.sibling = null),
            (e = wt.current),
            W(wt, l ? (e & 1) | 2 : e & 1),
            n)
          : (st(n), null);
      case 22:
      case 23:
        return (
          oa(n),
          Iu(),
          (l = n.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (n.flags |= 8192)
            : l && (n.flags |= 8192),
          l
            ? (i & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (st(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : st(n),
          (i = n.updateQueue),
          i !== null && Ts(n, i.retryQueue),
          (i = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          (l = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (l = n.memoizedState.cachePool.pool),
          l !== i && (n.flags |= 2048),
          e !== null && te(Di),
          null
        );
      case 24:
        return (
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          n.memoizedState.cache !== i && (n.flags |= 2048),
          ra(bt),
          st(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, n.tag));
  }
  function i2(e, n) {
    switch ((Su(n), n.tag)) {
      case 1:
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          ra(bt),
          zn(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((n.flags = (e & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Tn(n), null;
      case 13:
        if (
          (oa(n), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(o(340));
          pl();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return te(wt), null;
      case 4:
        return zn(), null;
      case 10:
        return ra(n.type), null;
      case 22:
      case 23:
        return (
          oa(n),
          Iu(),
          e !== null && te(Di),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 24:
        return ra(bt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ip(e, n) {
    switch ((Su(n), n.tag)) {
      case 3:
        ra(bt), zn();
        break;
      case 26:
      case 27:
      case 5:
        Tn(n);
        break;
      case 4:
        zn();
        break;
      case 13:
        oa(n);
        break;
      case 19:
        te(wt);
        break;
      case 10:
        ra(n.type);
        break;
      case 22:
      case 23:
        oa(n), Iu(), e !== null && te(Di);
        break;
      case 24:
        ra(bt);
    }
  }
  function Ml(e, n) {
    try {
      var i = n.updateQueue,
        l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next;
        i = s;
        do {
          if ((i.tag & e) === e) {
            l = void 0;
            var u = i.create,
              m = i.inst;
            (l = u()), (m.destroy = l);
          }
          i = i.next;
        } while (i !== s);
      }
    } catch (y) {
      Je(n, n.return, y);
    }
  }
  function Ua(e, n, i) {
    try {
      var l = n.updateQueue,
        s = l !== null ? l.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            var m = l.inst,
              y = m.destroy;
            if (y !== void 0) {
              (m.destroy = void 0), (s = n);
              var _ = i,
                k = y;
              try {
                k();
              } catch (q) {
                Je(s, _, q);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (q) {
      Je(n, n.return, q);
    }
  }
  function Bp(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var i = e.stateNode;
      try {
        Cm(n, i);
      } catch (l) {
        Je(e, e.return, l);
      }
    }
  }
  function Hp(e, n, i) {
    (i.props = Mi(e.type, e.memoizedProps)), (i.state = e.memoizedState);
    try {
      i.componentWillUnmount();
    } catch (l) {
      Je(e, n, l);
    }
  }
  function kl(e, n) {
    try {
      var i = e.ref;
      if (i !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof i == "function" ? (e.refCleanup = i(l)) : (i.current = l);
      }
    } catch (s) {
      Je(e, n, s);
    }
  }
  function Vn(e, n) {
    var i = e.ref,
      l = e.refCleanup;
    if (i !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (s) {
          Je(e, n, s);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (s) {
          Je(e, n, s);
        }
      else i.current = null;
  }
  function Pp(e) {
    var n = e.type,
      i = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && l.focus();
          break e;
        case "img":
          i.src ? (l.src = i.src) : i.srcSet && (l.srcset = i.srcSet);
      }
    } catch (s) {
      Je(e, e.return, s);
    }
  }
  function fd(e, n, i) {
    try {
      var l = e.stateNode;
      T2(l, e.type, i, n), (l[J] = n);
    } catch (s) {
      Je(e, e.return, s);
    }
  }
  function Vp(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Ga(e.type)) ||
      e.tag === 4
    );
  }
  function hd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Vp(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && Ga(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function md(e, n, i) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        n
          ? (i.nodeType === 9
              ? i.body
              : i.nodeName === "HTML"
              ? i.ownerDocument.body
              : i
            ).insertBefore(e, n)
          : ((n =
              i.nodeType === 9
                ? i.body
                : i.nodeName === "HTML"
                ? i.ownerDocument.body
                : i),
            n.appendChild(e),
            (i = i._reactRootContainer),
            i != null || n.onclick !== null || (n.onclick = zs));
    else if (
      l !== 4 &&
      (l === 27 && Ga(e.type) && ((i = e.stateNode), (n = null)),
      (e = e.child),
      e !== null)
    )
      for (md(e, n, i), e = e.sibling; e !== null; )
        md(e, n, i), (e = e.sibling);
  }
  function Cs(e, n, i) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), n ? i.insertBefore(e, n) : i.appendChild(e);
    else if (
      l !== 4 &&
      (l === 27 && Ga(e.type) && (i = e.stateNode), (e = e.child), e !== null)
    )
      for (Cs(e, n, i), e = e.sibling; e !== null; )
        Cs(e, n, i), (e = e.sibling);
  }
  function qp(e) {
    var n = e.stateNode,
      i = e.memoizedProps;
    try {
      for (var l = e.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      Rt(n, l, i), (n[K] = e), (n[J] = i);
    } catch (u) {
      Je(e, e.return, u);
    }
  }
  var ua = !1,
    ft = !1,
    pd = !1,
    Gp = typeof WeakSet == "function" ? WeakSet : Set,
    xt = null;
  function r2(e, n) {
    if (((e = e.containerInfo), (Bd = Gs), (e = tm(e)), hu(e))) {
      if ("selectionStart" in e)
        var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var l = i.getSelection && i.getSelection();
          if (l && l.rangeCount !== 0) {
            i = l.anchorNode;
            var s = l.anchorOffset,
              u = l.focusNode;
            l = l.focusOffset;
            try {
              i.nodeType, u.nodeType;
            } catch {
              i = null;
              break e;
            }
            var m = 0,
              y = -1,
              _ = -1,
              k = 0,
              q = 0,
              X = e,
              j = null;
            t: for (;;) {
              for (
                var U;
                X !== i || (s !== 0 && X.nodeType !== 3) || (y = m + s),
                  X !== u || (l !== 0 && X.nodeType !== 3) || (_ = m + l),
                  X.nodeType === 3 && (m += X.nodeValue.length),
                  (U = X.firstChild) !== null;

              )
                (j = X), (X = U);
              for (;;) {
                if (X === e) break t;
                if (
                  (j === i && ++k === s && (y = m),
                  j === u && ++q === l && (_ = m),
                  (U = X.nextSibling) !== null)
                )
                  break;
                (X = j), (j = X.parentNode);
              }
              X = U;
            }
            i = y === -1 || _ === -1 ? null : { start: y, end: _ };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      Hd = { focusedElem: e, selectionRange: i }, Gs = !1, xt = n;
      xt !== null;

    )
      if (
        ((n = xt), (e = n.child), (n.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = n), (xt = e);
      else
        for (; xt !== null; ) {
          switch (((n = xt), (u = n.alternate), (e = n.flags), n.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                (e = void 0),
                  (i = n),
                  (s = u.memoizedProps),
                  (u = u.memoizedState),
                  (l = i.stateNode);
                try {
                  var we = Mi(i.type, s, i.elementType === i.type);
                  (e = l.getSnapshotBeforeUpdate(we, u)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (ge) {
                  Je(i, i.return, ge);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = n.stateNode.containerInfo), (i = e.nodeType), i === 9)
                )
                  qd(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      qd(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (xt = e);
            break;
          }
          xt = n.return;
        }
  }
  function $p(e, n, i) {
    var l = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        za(e, i), l & 4 && Ml(5, i);
        break;
      case 1:
        if ((za(e, i), l & 4))
          if (((e = i.stateNode), n === null))
            try {
              e.componentDidMount();
            } catch (m) {
              Je(i, i.return, m);
            }
          else {
            var s = Mi(i.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              e.componentDidUpdate(s, n, e.__reactInternalSnapshotBeforeUpdate);
            } catch (m) {
              Je(i, i.return, m);
            }
          }
        l & 64 && Bp(i), l & 512 && kl(i, i.return);
        break;
      case 3:
        if ((za(e, i), l & 64 && ((e = i.updateQueue), e !== null))) {
          if (((n = null), i.child !== null))
            switch (i.child.tag) {
              case 27:
              case 5:
                n = i.child.stateNode;
                break;
              case 1:
                n = i.child.stateNode;
            }
          try {
            Cm(e, n);
          } catch (m) {
            Je(i, i.return, m);
          }
        }
        break;
      case 27:
        n === null && l & 4 && qp(i);
      case 26:
      case 5:
        za(e, i), n === null && l & 4 && Pp(i), l & 512 && kl(i, i.return);
        break;
      case 12:
        za(e, i);
        break;
      case 13:
        za(e, i),
          l & 4 && Kp(e, i),
          l & 64 &&
            ((e = i.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((i = m2.bind(null, i)), M2(e, i))));
        break;
      case 22:
        if (((l = i.memoizedState !== null || ua), !l)) {
          (n = (n !== null && n.memoizedState !== null) || ft), (s = ua);
          var u = ft;
          (ua = l),
            (ft = n) && !u ? Ia(e, i, (i.subtreeFlags & 8772) !== 0) : za(e, i),
            (ua = s),
            (ft = u);
        }
        break;
      case 30:
        break;
      default:
        za(e, i);
    }
  }
  function Yp(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), Yp(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((n = e.stateNode), n !== null && ce(n)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var rt = null,
    $t = !1;
  function da(e, n, i) {
    for (i = i.child; i !== null; ) Xp(e, n, i), (i = i.sibling);
  }
  function Xp(e, n, i) {
    if (lt && typeof lt.onCommitFiberUnmount == "function")
      try {
        lt.onCommitFiberUnmount(Ht, i);
      } catch {}
    switch (i.tag) {
      case 26:
        ft || Vn(i, n),
          da(e, n, i),
          i.memoizedState
            ? i.memoizedState.count--
            : i.stateNode && ((i = i.stateNode), i.parentNode.removeChild(i));
        break;
      case 27:
        ft || Vn(i, n);
        var l = rt,
          s = $t;
        Ga(i.type) && ((rt = i.stateNode), ($t = !1)),
          da(e, n, i),
          Vl(i.stateNode),
          (rt = l),
          ($t = s);
        break;
      case 5:
        ft || Vn(i, n);
      case 6:
        if (
          ((l = rt),
          (s = $t),
          (rt = null),
          da(e, n, i),
          (rt = l),
          ($t = s),
          rt !== null)
        )
          if ($t)
            try {
              (rt.nodeType === 9
                ? rt.body
                : rt.nodeName === "HTML"
                ? rt.ownerDocument.body
                : rt
              ).removeChild(i.stateNode);
            } catch (u) {
              Je(i, n, u);
            }
          else
            try {
              rt.removeChild(i.stateNode);
            } catch (u) {
              Je(i, n, u);
            }
        break;
      case 18:
        rt !== null &&
          ($t
            ? ((e = rt),
              jg(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                i.stateNode
              ),
              Ql(e))
            : jg(rt, i.stateNode));
        break;
      case 4:
        (l = rt),
          (s = $t),
          (rt = i.stateNode.containerInfo),
          ($t = !0),
          da(e, n, i),
          (rt = l),
          ($t = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ft || Ua(2, i, n), ft || Ua(4, i, n), da(e, n, i);
        break;
      case 1:
        ft ||
          (Vn(i, n),
          (l = i.stateNode),
          typeof l.componentWillUnmount == "function" && Hp(i, n, l)),
          da(e, n, i);
        break;
      case 21:
        da(e, n, i);
        break;
      case 22:
        (ft = (l = ft) || i.memoizedState !== null), da(e, n, i), (ft = l);
        break;
      default:
        da(e, n, i);
    }
  }
  function Kp(e, n) {
    if (
      n.memoizedState === null &&
      ((e = n.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ql(e);
      } catch (i) {
        Je(n, n.return, i);
      }
  }
  function l2(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Gp()), n;
      case 22:
        return (
          (e = e.stateNode),
          (n = e._retryCache),
          n === null && (n = e._retryCache = new Gp()),
          n
        );
      default:
        throw Error(o(435, e.tag));
    }
  }
  function gd(e, n) {
    var i = l2(e);
    n.forEach(function (l) {
      var s = p2.bind(null, e, l);
      i.has(l) || (i.add(l), l.then(s, s));
    });
  }
  function Jt(e, n) {
    var i = n.deletions;
    if (i !== null)
      for (var l = 0; l < i.length; l++) {
        var s = i[l],
          u = e,
          m = n,
          y = m;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Ga(y.type)) {
                (rt = y.stateNode), ($t = !1);
                break e;
              }
              break;
            case 5:
              (rt = y.stateNode), ($t = !1);
              break e;
            case 3:
            case 4:
              (rt = y.stateNode.containerInfo), ($t = !0);
              break e;
          }
          y = y.return;
        }
        if (rt === null) throw Error(o(160));
        Xp(u, m, s),
          (rt = null),
          ($t = !1),
          (u = s.alternate),
          u !== null && (u.return = null),
          (s.return = null);
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; ) Fp(n, e), (n = n.sibling);
  }
  var Nn = null;
  function Fp(e, n) {
    var i = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Jt(n, e),
          Wt(e),
          l & 4 && (Ua(3, e, e.return), Ml(3, e), Ua(5, e, e.return));
        break;
      case 1:
        Jt(n, e),
          Wt(e),
          l & 512 && (ft || i === null || Vn(i, i.return)),
          l & 64 &&
            ua &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((i = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = i === null ? l : i.concat(l)))));
        break;
      case 26:
        var s = Nn;
        if (
          (Jt(n, e),
          Wt(e),
          l & 512 && (ft || i === null || Vn(i, i.return)),
          l & 4)
        ) {
          var u = i !== null ? i.memoizedState : null;
          if (((l = e.memoizedState), i === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type),
                    (i = e.memoizedProps),
                    (s = s.ownerDocument || s);
                  t: switch (l) {
                    case "title":
                      (u = s.getElementsByTagName("title")[0]),
                        (!u ||
                          u[ve] ||
                          u[K] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = s.createElement(l)),
                          s.head.insertBefore(
                            u,
                            s.querySelector("head > title")
                          )),
                        Rt(u, l, i),
                        (u[K] = e),
                        He(u),
                        (l = u);
                      break e;
                    case "link":
                      var m = qg("link", "href", s).get(l + (i.href || ""));
                      if (m) {
                        for (var y = 0; y < m.length; y++)
                          if (
                            ((u = m[y]),
                            u.getAttribute("href") ===
                              (i.href == null || i.href === ""
                                ? null
                                : i.href) &&
                              u.getAttribute("rel") ===
                                (i.rel == null ? null : i.rel) &&
                              u.getAttribute("title") ===
                                (i.title == null ? null : i.title) &&
                              u.getAttribute("crossorigin") ===
                                (i.crossOrigin == null ? null : i.crossOrigin))
                          ) {
                            m.splice(y, 1);
                            break t;
                          }
                      }
                      (u = s.createElement(l)),
                        Rt(u, l, i),
                        s.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (m = qg("meta", "content", s).get(
                          l + (i.content || "")
                        ))
                      ) {
                        for (y = 0; y < m.length; y++)
                          if (
                            ((u = m[y]),
                            u.getAttribute("content") ===
                              (i.content == null ? null : "" + i.content) &&
                              u.getAttribute("name") ===
                                (i.name == null ? null : i.name) &&
                              u.getAttribute("property") ===
                                (i.property == null ? null : i.property) &&
                              u.getAttribute("http-equiv") ===
                                (i.httpEquiv == null ? null : i.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (i.charSet == null ? null : i.charSet))
                          ) {
                            m.splice(y, 1);
                            break t;
                          }
                      }
                      (u = s.createElement(l)),
                        Rt(u, l, i),
                        s.head.appendChild(u);
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  (u[K] = e), He(u), (l = u);
                }
                e.stateNode = l;
              } else Gg(s, e.type, e.stateNode);
            else e.stateNode = Vg(s, l, e.memoizedProps);
          else
            u !== l
              ? (u === null
                  ? i.stateNode !== null &&
                    ((i = i.stateNode), i.parentNode.removeChild(i))
                  : u.count--,
                l === null
                  ? Gg(s, e.type, e.stateNode)
                  : Vg(s, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                fd(e, e.memoizedProps, i.memoizedProps);
        }
        break;
      case 27:
        Jt(n, e),
          Wt(e),
          l & 512 && (ft || i === null || Vn(i, i.return)),
          i !== null && l & 4 && fd(e, e.memoizedProps, i.memoizedProps);
        break;
      case 5:
        if (
          (Jt(n, e),
          Wt(e),
          l & 512 && (ft || i === null || Vn(i, i.return)),
          e.flags & 32)
        ) {
          s = e.stateNode;
          try {
            tr(s, "");
          } catch (U) {
            Je(e, e.return, U);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((s = e.memoizedProps), fd(e, s, i !== null ? i.memoizedProps : s)),
          l & 1024 && (pd = !0);
        break;
      case 6:
        if ((Jt(n, e), Wt(e), l & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (l = e.memoizedProps), (i = e.stateNode);
          try {
            i.nodeValue = l;
          } catch (U) {
            Je(e, e.return, U);
          }
        }
        break;
      case 3:
        if (
          ((Ps = null),
          (s = Nn),
          (Nn = Bs(n.containerInfo)),
          Jt(n, e),
          (Nn = s),
          Wt(e),
          l & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            Ql(n.containerInfo);
          } catch (U) {
            Je(e, e.return, U);
          }
        pd && ((pd = !1), Qp(e));
        break;
      case 4:
        (l = Nn),
          (Nn = Bs(e.stateNode.containerInfo)),
          Jt(n, e),
          Wt(e),
          (Nn = l);
        break;
      case 12:
        Jt(n, e), Wt(e);
        break;
      case 13:
        Jt(n, e),
          Wt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (i !== null && i.memoizedState !== null) &&
            (xd = Ft()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), gd(e, l)));
        break;
      case 22:
        s = e.memoizedState !== null;
        var _ = i !== null && i.memoizedState !== null,
          k = ua,
          q = ft;
        if (
          ((ua = k || s),
          (ft = q || _),
          Jt(n, e),
          (ft = q),
          (ua = k),
          Wt(e),
          l & 8192)
        )
          e: for (
            n = e.stateNode,
              n._visibility = s ? n._visibility & -2 : n._visibility | 1,
              s && (i === null || _ || ua || ft || ki(e)),
              i = null,
              n = e;
            ;

          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (i === null) {
                _ = i = n;
                try {
                  if (((u = _.stateNode), s))
                    (m = u.style),
                      typeof m.setProperty == "function"
                        ? m.setProperty("display", "none", "important")
                        : (m.display = "none");
                  else {
                    y = _.stateNode;
                    var X = _.memoizedProps.style,
                      j =
                        X != null && X.hasOwnProperty("display")
                          ? X.display
                          : null;
                    y.style.display =
                      j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (U) {
                  Je(_, _.return, U);
                }
              }
            } else if (n.tag === 6) {
              if (i === null) {
                _ = n;
                try {
                  _.stateNode.nodeValue = s ? "" : _.memoizedProps;
                } catch (U) {
                  Je(_, _.return, U);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === e) &&
              n.child !== null
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              i === n && (i = null), (n = n.return);
            }
            i === n && (i = null),
              (n.sibling.return = n.return),
              (n = n.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((i = l.retryQueue),
            i !== null && ((l.retryQueue = null), gd(e, i))));
        break;
      case 19:
        Jt(n, e),
          Wt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), gd(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Jt(n, e), Wt(e);
    }
  }
  function Wt(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var i, l = e.return; l !== null; ) {
          if (Vp(l)) {
            i = l;
            break;
          }
          l = l.return;
        }
        if (i == null) throw Error(o(160));
        switch (i.tag) {
          case 27:
            var s = i.stateNode,
              u = hd(e);
            Cs(e, u, s);
            break;
          case 5:
            var m = i.stateNode;
            i.flags & 32 && (tr(m, ""), (i.flags &= -33));
            var y = hd(e);
            Cs(e, y, m);
            break;
          case 3:
          case 4:
            var _ = i.stateNode.containerInfo,
              k = hd(e);
            md(e, k, _);
            break;
          default:
            throw Error(o(161));
        }
      } catch (q) {
        Je(e, e.return, q);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Qp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Qp(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function za(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) $p(e, n.alternate, n), (n = n.sibling);
  }
  function ki(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ua(4, n, n.return), ki(n);
          break;
        case 1:
          Vn(n, n.return);
          var i = n.stateNode;
          typeof i.componentWillUnmount == "function" && Hp(n, n.return, i),
            ki(n);
          break;
        case 27:
          Vl(n.stateNode);
        case 26:
        case 5:
          Vn(n, n.return), ki(n);
          break;
        case 22:
          n.memoizedState === null && ki(n);
          break;
        case 30:
          ki(n);
          break;
        default:
          ki(n);
      }
      e = e.sibling;
    }
  }
  function Ia(e, n, i) {
    for (i = i && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var l = n.alternate,
        s = e,
        u = n,
        m = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ia(s, u, i), Ml(4, u);
          break;
        case 1:
          if (
            (Ia(s, u, i),
            (l = u),
            (s = l.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (k) {
              Je(l, l.return, k);
            }
          if (((l = u), (s = l.updateQueue), s !== null)) {
            var y = l.stateNode;
            try {
              var _ = s.shared.hiddenCallbacks;
              if (_ !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < _.length; s++)
                  Tm(_[s], y);
            } catch (k) {
              Je(l, l.return, k);
            }
          }
          i && m & 64 && Bp(u), kl(u, u.return);
          break;
        case 27:
          qp(u);
        case 26:
        case 5:
          Ia(s, u, i), i && l === null && m & 4 && Pp(u), kl(u, u.return);
          break;
        case 12:
          Ia(s, u, i);
          break;
        case 13:
          Ia(s, u, i), i && m & 4 && Kp(s, u);
          break;
        case 22:
          u.memoizedState === null && Ia(s, u, i), kl(u, u.return);
          break;
        case 30:
          break;
        default:
          Ia(s, u, i);
      }
      n = n.sibling;
    }
  }
  function yd(e, n) {
    var i = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (i = e.memoizedState.cachePool.pool),
      (e = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (e = n.memoizedState.cachePool.pool),
      e !== i && (e != null && e.refCount++, i != null && vl(i));
  }
  function vd(e, n) {
    (e = null),
      n.alternate !== null && (e = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== e && (n.refCount++, e != null && vl(e));
  }
  function qn(e, n, i, l) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) Zp(e, n, i, l), (n = n.sibling);
  }
  function Zp(e, n, i, l) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        qn(e, n, i, l), s & 2048 && Ml(9, n);
        break;
      case 1:
        qn(e, n, i, l);
        break;
      case 3:
        qn(e, n, i, l),
          s & 2048 &&
            ((e = null),
            n.alternate !== null && (e = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== e && (n.refCount++, e != null && vl(e)));
        break;
      case 12:
        if (s & 2048) {
          qn(e, n, i, l), (e = n.stateNode);
          try {
            var u = n.memoizedProps,
              m = u.id,
              y = u.onPostCommit;
            typeof y == "function" &&
              y(
                m,
                n.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (_) {
            Je(n, n.return, _);
          }
        } else qn(e, n, i, l);
        break;
      case 13:
        qn(e, n, i, l);
        break;
      case 23:
        break;
      case 22:
        (u = n.stateNode),
          (m = n.alternate),
          n.memoizedState !== null
            ? u._visibility & 2
              ? qn(e, n, i, l)
              : Ll(e, n)
            : u._visibility & 2
            ? qn(e, n, i, l)
            : ((u._visibility |= 2),
              wr(e, n, i, l, (n.subtreeFlags & 10256) !== 0)),
          s & 2048 && yd(m, n);
        break;
      case 24:
        qn(e, n, i, l), s & 2048 && vd(n.alternate, n);
        break;
      default:
        qn(e, n, i, l);
    }
  }
  function wr(e, n, i, l, s) {
    for (s = s && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var u = e,
        m = n,
        y = i,
        _ = l,
        k = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          wr(u, m, y, _, s), Ml(8, m);
          break;
        case 23:
          break;
        case 22:
          var q = m.stateNode;
          m.memoizedState !== null
            ? q._visibility & 2
              ? wr(u, m, y, _, s)
              : Ll(u, m)
            : ((q._visibility |= 2), wr(u, m, y, _, s)),
            s && k & 2048 && yd(m.alternate, m);
          break;
        case 24:
          wr(u, m, y, _, s), s && k & 2048 && vd(m.alternate, m);
          break;
        default:
          wr(u, m, y, _, s);
      }
      n = n.sibling;
    }
  }
  function Ll(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var i = e,
          l = n,
          s = l.flags;
        switch (l.tag) {
          case 22:
            Ll(i, l), s & 2048 && yd(l.alternate, l);
            break;
          case 24:
            Ll(i, l), s & 2048 && vd(l.alternate, l);
            break;
          default:
            Ll(i, l);
        }
        n = n.sibling;
      }
  }
  var jl = 8192;
  function _r(e) {
    if (e.subtreeFlags & jl)
      for (e = e.child; e !== null; ) Jp(e), (e = e.sibling);
  }
  function Jp(e) {
    switch (e.tag) {
      case 26:
        _r(e),
          e.flags & jl &&
            e.memoizedState !== null &&
            $2(Nn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        _r(e);
        break;
      case 3:
      case 4:
        var n = Nn;
        (Nn = Bs(e.stateNode.containerInfo)), _r(e), (Nn = n);
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = jl), (jl = 16777216), _r(e), (jl = n))
            : _r(e));
        break;
      default:
        _r(e);
    }
  }
  function Wp(e) {
    var n = e.alternate;
    if (n !== null && ((e = n.child), e !== null)) {
      n.child = null;
      do (n = e.sibling), (e.sibling = null), (e = n);
      while (e !== null);
    }
  }
  function Ul(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var l = n[i];
          (xt = l), tg(l, e);
        }
      Wp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) eg(e), (e = e.sibling);
  }
  function eg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ul(e), e.flags & 2048 && Ua(9, e, e.return);
        break;
      case 3:
        Ul(e);
        break;
      case 12:
        Ul(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null &&
        n._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((n._visibility &= -3), As(e))
          : Ul(e);
        break;
      default:
        Ul(e);
    }
  }
  function As(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var l = n[i];
          (xt = l), tg(l, e);
        }
      Wp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((n = e), n.tag)) {
        case 0:
        case 11:
        case 15:
          Ua(8, n, n.return), As(n);
          break;
        case 22:
          (i = n.stateNode),
            i._visibility & 2 && ((i._visibility &= -3), As(n));
          break;
        default:
          As(n);
      }
      e = e.sibling;
    }
  }
  function tg(e, n) {
    for (; xt !== null; ) {
      var i = xt;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Ua(8, i, n);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var l = i.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          vl(i.memoizedState.cache);
      }
      if (((l = i.child), l !== null)) (l.return = i), (xt = l);
      else
        e: for (i = e; xt !== null; ) {
          l = xt;
          var s = l.sibling,
            u = l.return;
          if ((Yp(l), l === i)) {
            xt = null;
            break e;
          }
          if (s !== null) {
            (s.return = u), (xt = s);
            break e;
          }
          xt = u;
        }
    }
  }
  var o2 = {
      getCacheForType: function (e) {
        var n = Dt(bt),
          i = n.data.get(e);
        return i === void 0 && ((i = e()), n.data.set(e, i)), i;
      },
    },
    s2 = typeof WeakMap == "function" ? WeakMap : Map,
    Xe = 0,
    tt = null,
    De = null,
    je = 0,
    Ke = 0,
    en = null,
    Ba = !1,
    xr = !1,
    bd = !1,
    fa = 0,
    ut = 0,
    Ha = 0,
    Li = 0,
    wd = 0,
    vn = 0,
    Er = 0,
    zl = null,
    Yt = null,
    _d = !1,
    xd = 0,
    Rs = 1 / 0,
    Os = null,
    Pa = null,
    At = 0,
    Va = null,
    Sr = null,
    Tr = 0,
    Ed = 0,
    Sd = null,
    ng = null,
    Il = 0,
    Td = null;
  function tn() {
    if ((Xe & 2) !== 0 && je !== 0) return je & -je;
    if (L.T !== null) {
      var e = fr;
      return e !== 0 ? e : Md();
    }
    return S();
  }
  function ag() {
    vn === 0 && (vn = (je & 536870912) === 0 || $e ? Ji() : 536870912);
    var e = yn.current;
    return e !== null && (e.flags |= 32), vn;
  }
  function nn(e, n, i) {
    ((e === tt && (Ke === 2 || Ke === 9)) || e.cancelPendingCommit !== null) &&
      (Cr(e, 0), qa(e, je, vn, !1)),
      gi(e, i),
      ((Xe & 2) === 0 || e !== tt) &&
        (e === tt &&
          ((Xe & 2) === 0 && (Li |= i), ut === 4 && qa(e, je, vn, !1)),
        Gn(e));
  }
  function ig(e, n, i) {
    if ((Xe & 6) !== 0) throw Error(o(327));
    var l = (!i && (n & 124) === 0 && (n & e.expiredLanes) === 0) || Bn(e, n),
      s = l ? d2(e, n) : Rd(e, n, !0),
      u = l;
    do {
      if (s === 0) {
        xr && !l && qa(e, n, 0, !1);
        break;
      } else {
        if (((i = e.current.alternate), u && !c2(i))) {
          (s = Rd(e, n, !1)), (u = !1);
          continue;
        }
        if (s === 2) {
          if (((u = n), e.errorRecoveryDisabledLanes & u)) var m = 0;
          else
            (m = e.pendingLanes & -536870913),
              (m = m !== 0 ? m : m & 536870912 ? 536870912 : 0);
          if (m !== 0) {
            n = m;
            e: {
              var y = e;
              s = zl;
              var _ = y.current.memoizedState.isDehydrated;
              if ((_ && (Cr(y, m).flags |= 256), (m = Rd(y, m, !1)), m !== 2)) {
                if (bd && !_) {
                  (y.errorRecoveryDisabledLanes |= u), (Li |= u), (s = 4);
                  break e;
                }
                (u = Yt),
                  (Yt = s),
                  u !== null && (Yt === null ? (Yt = u) : Yt.push.apply(Yt, u));
              }
              s = m;
            }
            if (((u = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          Cr(e, 0), qa(e, n, 0, !0);
          break;
        }
        e: {
          switch (((l = e), (u = s), u)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              qa(l, n, vn, !Ba);
              break e;
            case 2:
              Yt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((n & 62914560) === n && ((s = xd + 300 - Ft()), 10 < s)) {
            if ((qa(l, n, vn, !Ba), pi(l, 0, !0) !== 0)) break e;
            l.timeoutHandle = kg(
              rg.bind(null, l, i, Yt, Os, _d, n, vn, Li, Er, Ba, u, 2, -0, 0),
              s
            );
            break e;
          }
          rg(l, i, Yt, Os, _d, n, vn, Li, Er, Ba, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Gn(e);
  }
  function rg(e, n, i, l, s, u, m, y, _, k, q, X, j, U) {
    if (
      ((e.timeoutHandle = -1),
      (X = n.subtreeFlags),
      (X & 8192 || (X & 16785408) === 16785408) &&
        (($l = { stylesheets: null, count: 0, unsuspend: G2 }),
        Jp(n),
        (X = Y2()),
        X !== null))
    ) {
      (e.cancelPendingCommit = X(
        fg.bind(null, e, n, u, i, l, s, m, y, _, q, 1, j, U)
      )),
        qa(e, u, m, !k);
      return;
    }
    fg(e, n, u, i, l, s, m, y, _);
  }
  function c2(e) {
    for (var n = e; ; ) {
      var i = n.tag;
      if (
        (i === 0 || i === 11 || i === 15) &&
        n.flags & 16384 &&
        ((i = n.updateQueue), i !== null && ((i = i.stores), i !== null))
      )
        for (var l = 0; l < i.length; l++) {
          var s = i[l],
            u = s.getSnapshot;
          s = s.value;
          try {
            if (!Qt(u(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((i = n.child), n.subtreeFlags & 16384 && i !== null))
        (i.return = n), (n = i);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function qa(e, n, i, l) {
    (n &= ~wd),
      (n &= ~Li),
      (e.suspendedLanes |= n),
      (e.pingedLanes &= ~n),
      l && (e.warmLanes |= n),
      (l = e.expirationTimes);
    for (var s = n; 0 < s; ) {
      var u = 31 - Tt(s),
        m = 1 << u;
      (l[u] = -1), (s &= ~m);
    }
    i !== 0 && yi(e, i, n);
  }
  function Ds() {
    return (Xe & 6) === 0 ? (Bl(0), !1) : !0;
  }
  function Cd() {
    if (De !== null) {
      if (Ke === 0) var e = De.return;
      else (e = De), (ia = Ri = null), qu(e), (vr = null), (Ol = 0), (e = De);
      for (; e !== null; ) Ip(e.alternate, e), (e = e.return);
      De = null;
    }
  }
  function Cr(e, n) {
    var i = e.timeoutHandle;
    i !== -1 && ((e.timeoutHandle = -1), A2(i)),
      (i = e.cancelPendingCommit),
      i !== null && ((e.cancelPendingCommit = null), i()),
      Cd(),
      (tt = e),
      (De = i = ta(e.current, null)),
      (je = n),
      (Ke = 0),
      (en = null),
      (Ba = !1),
      (xr = Bn(e, n)),
      (bd = !1),
      (Er = vn = wd = Li = Ha = ut = 0),
      (Yt = zl = null),
      (_d = !1),
      (n & 8) !== 0 && (n |= n & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= n; 0 < l; ) {
        var s = 31 - Tt(l),
          u = 1 << s;
        (n |= e[s]), (l &= ~u);
      }
    return (fa = n), Jo(), i;
  }
  function lg(e, n) {
    (Se = null),
      (L.H = ys),
      n === wl || n === os
        ? ((n = Em()), (Ke = 3))
        : n === wm
        ? ((n = Em()), (Ke = 4))
        : (Ke =
            n === Sp
              ? 8
              : n !== null &&
                typeof n == "object" &&
                typeof n.then == "function"
              ? 6
              : 1),
      (en = n),
      De === null && ((ut = 1), xs(e, hn(n, e.current)));
  }
  function og() {
    var e = L.H;
    return (L.H = ys), e === null ? ys : e;
  }
  function sg() {
    var e = L.A;
    return (L.A = o2), e;
  }
  function Ad() {
    (ut = 4),
      Ba || ((je & 4194048) !== je && yn.current !== null) || (xr = !0),
      ((Ha & 134217727) === 0 && (Li & 134217727) === 0) ||
        tt === null ||
        qa(tt, je, vn, !1);
  }
  function Rd(e, n, i) {
    var l = Xe;
    Xe |= 2;
    var s = og(),
      u = sg();
    (tt !== e || je !== n) && ((Os = null), Cr(e, n)), (n = !1);
    var m = ut;
    e: do
      try {
        if (Ke !== 0 && De !== null) {
          var y = De,
            _ = en;
          switch (Ke) {
            case 8:
              Cd(), (m = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              yn.current === null && (n = !0);
              var k = Ke;
              if (((Ke = 0), (en = null), Ar(e, y, _, k), i && xr)) {
                m = 0;
                break e;
              }
              break;
            default:
              (k = Ke), (Ke = 0), (en = null), Ar(e, y, _, k);
          }
        }
        u2(), (m = ut);
        break;
      } catch (q) {
        lg(e, q);
      }
    while (!0);
    return (
      n && e.shellSuspendCounter++,
      (ia = Ri = null),
      (Xe = l),
      (L.H = s),
      (L.A = u),
      De === null && ((tt = null), (je = 0), Jo()),
      m
    );
  }
  function u2() {
    for (; De !== null; ) cg(De);
  }
  function d2(e, n) {
    var i = Xe;
    Xe |= 2;
    var l = og(),
      s = sg();
    tt !== e || je !== n
      ? ((Os = null), (Rs = Ft() + 500), Cr(e, n))
      : (xr = Bn(e, n));
    e: do
      try {
        if (Ke !== 0 && De !== null) {
          n = De;
          var u = en;
          t: switch (Ke) {
            case 1:
              (Ke = 0), (en = null), Ar(e, n, u, 1);
              break;
            case 2:
            case 9:
              if (_m(u)) {
                (Ke = 0), (en = null), ug(n);
                break;
              }
              (n = function () {
                (Ke !== 2 && Ke !== 9) || tt !== e || (Ke = 7), Gn(e);
              }),
                u.then(n, n);
              break e;
            case 3:
              Ke = 7;
              break e;
            case 4:
              Ke = 5;
              break e;
            case 7:
              _m(u)
                ? ((Ke = 0), (en = null), ug(n))
                : ((Ke = 0), (en = null), Ar(e, n, u, 7));
              break;
            case 5:
              var m = null;
              switch (De.tag) {
                case 26:
                  m = De.memoizedState;
                case 5:
                case 27:
                  var y = De;
                  if (!m || $g(m)) {
                    (Ke = 0), (en = null);
                    var _ = y.sibling;
                    if (_ !== null) De = _;
                    else {
                      var k = y.return;
                      k !== null ? ((De = k), Ns(k)) : (De = null);
                    }
                    break t;
                  }
              }
              (Ke = 0), (en = null), Ar(e, n, u, 5);
              break;
            case 6:
              (Ke = 0), (en = null), Ar(e, n, u, 6);
              break;
            case 8:
              Cd(), (ut = 6);
              break e;
            default:
              throw Error(o(462));
          }
        }
        f2();
        break;
      } catch (q) {
        lg(e, q);
      }
    while (!0);
    return (
      (ia = Ri = null),
      (L.H = l),
      (L.A = s),
      (Xe = i),
      De !== null ? 0 : ((tt = null), (je = 0), Jo(), ut)
    );
  }
  function f2() {
    for (; De !== null && !Kc(); ) cg(De);
  }
  function cg(e) {
    var n = Up(e.alternate, e, fa);
    (e.memoizedProps = e.pendingProps), n === null ? Ns(e) : (De = n);
  }
  function ug(e) {
    var n = e,
      i = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Dp(i, n, n.pendingProps, n.type, void 0, je);
        break;
      case 11:
        n = Dp(i, n, n.pendingProps, n.type.render, n.ref, je);
        break;
      case 5:
        qu(n);
      default:
        Ip(i, n), (n = De = dm(n, fa)), (n = Up(i, n, fa));
    }
    (e.memoizedProps = e.pendingProps), n === null ? Ns(e) : (De = n);
  }
  function Ar(e, n, i, l) {
    (ia = Ri = null), qu(n), (vr = null), (Ol = 0);
    var s = n.return;
    try {
      if (t2(e, s, n, i, je)) {
        (ut = 1), xs(e, hn(i, e.current)), (De = null);
        return;
      }
    } catch (u) {
      if (s !== null) throw ((De = s), u);
      (ut = 1), xs(e, hn(i, e.current)), (De = null);
      return;
    }
    n.flags & 32768
      ? ($e || l === 1
          ? (e = !0)
          : xr || (je & 536870912) !== 0
          ? (e = !1)
          : ((Ba = e = !0),
            (l === 2 || l === 9 || l === 3 || l === 6) &&
              ((l = yn.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        dg(n, e))
      : Ns(n);
  }
  function Ns(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        dg(n, Ba);
        return;
      }
      e = n.return;
      var i = a2(n.alternate, n, fa);
      if (i !== null) {
        De = i;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        De = n;
        return;
      }
      De = n = e;
    } while (n !== null);
    ut === 0 && (ut = 5);
  }
  function dg(e, n) {
    do {
      var i = i2(e.alternate, e);
      if (i !== null) {
        (i.flags &= 32767), (De = i);
        return;
      }
      if (
        ((i = e.return),
        i !== null &&
          ((i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null)),
        !n && ((e = e.sibling), e !== null))
      ) {
        De = e;
        return;
      }
      De = e = i;
    } while (e !== null);
    (ut = 6), (De = null);
  }
  function fg(e, n, i, l, s, u, m, y, _) {
    e.cancelPendingCommit = null;
    do Ms();
    while (At !== 0);
    if ((Xe & 6) !== 0) throw Error(o(327));
    if (n !== null) {
      if (n === e.current) throw Error(o(177));
      if (
        ((u = n.lanes | n.childLanes),
        (u |= vu),
        Vo(e, i, u, m, y, _),
        e === tt && ((De = tt = null), (je = 0)),
        (Sr = n),
        (Va = e),
        (Tr = i),
        (Ed = u),
        (Sd = s),
        (ng = l),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            g2(Zi, function () {
              return yg(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = L.T), (L.T = null), (s = Z.p), (Z.p = 2), (m = Xe), (Xe |= 4);
        try {
          r2(e, n, i);
        } finally {
          (Xe = m), (Z.p = s), (L.T = l);
        }
      }
      (At = 1), hg(), mg(), pg();
    }
  }
  function hg() {
    if (At === 1) {
      At = 0;
      var e = Va,
        n = Sr,
        i = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || i) {
        (i = L.T), (L.T = null);
        var l = Z.p;
        Z.p = 2;
        var s = Xe;
        Xe |= 4;
        try {
          Fp(n, e);
          var u = Hd,
            m = tm(e.containerInfo),
            y = u.focusedElem,
            _ = u.selectionRange;
          if (
            m !== y &&
            y &&
            y.ownerDocument &&
            em(y.ownerDocument.documentElement, y)
          ) {
            if (_ !== null && hu(y)) {
              var k = _.start,
                q = _.end;
              if ((q === void 0 && (q = k), "selectionStart" in y))
                (y.selectionStart = k),
                  (y.selectionEnd = Math.min(q, y.value.length));
              else {
                var X = y.ownerDocument || document,
                  j = (X && X.defaultView) || window;
                if (j.getSelection) {
                  var U = j.getSelection(),
                    we = y.textContent.length,
                    ge = Math.min(_.start, we),
                    Ze = _.end === void 0 ? ge : Math.min(_.end, we);
                  !U.extend && ge > Ze && ((m = Ze), (Ze = ge), (ge = m));
                  var C = Wh(y, ge),
                    T = Wh(y, Ze);
                  if (
                    C &&
                    T &&
                    (U.rangeCount !== 1 ||
                      U.anchorNode !== C.node ||
                      U.anchorOffset !== C.offset ||
                      U.focusNode !== T.node ||
                      U.focusOffset !== T.offset)
                  ) {
                    var N = X.createRange();
                    N.setStart(C.node, C.offset),
                      U.removeAllRanges(),
                      ge > Ze
                        ? (U.addRange(N), U.extend(T.node, T.offset))
                        : (N.setEnd(T.node, T.offset), U.addRange(N));
                  }
                }
              }
            }
            for (X = [], U = y; (U = U.parentNode); )
              U.nodeType === 1 &&
                X.push({ element: U, left: U.scrollLeft, top: U.scrollTop });
            for (
              typeof y.focus == "function" && y.focus(), y = 0;
              y < X.length;
              y++
            ) {
              var G = X[y];
              (G.element.scrollLeft = G.left), (G.element.scrollTop = G.top);
            }
          }
          (Gs = !!Bd), (Hd = Bd = null);
        } finally {
          (Xe = s), (Z.p = l), (L.T = i);
        }
      }
      (e.current = n), (At = 2);
    }
  }
  function mg() {
    if (At === 2) {
      At = 0;
      var e = Va,
        n = Sr,
        i = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || i) {
        (i = L.T), (L.T = null);
        var l = Z.p;
        Z.p = 2;
        var s = Xe;
        Xe |= 4;
        try {
          $p(e, n.alternate, n);
        } finally {
          (Xe = s), (Z.p = l), (L.T = i);
        }
      }
      At = 3;
    }
  }
  function pg() {
    if (At === 4 || At === 3) {
      (At = 0), Fc();
      var e = Va,
        n = Sr,
        i = Tr,
        l = ng;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (At = 5)
        : ((At = 0), (Sr = Va = null), gg(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (
        (s === 0 && (Pa = null),
        nl(i),
        (n = n.stateNode),
        lt && typeof lt.onCommitFiberRoot == "function")
      )
        try {
          lt.onCommitFiberRoot(Ht, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (n = L.T), (s = Z.p), (Z.p = 2), (L.T = null);
        try {
          for (var u = e.onRecoverableError, m = 0; m < l.length; m++) {
            var y = l[m];
            u(y.value, { componentStack: y.stack });
          }
        } finally {
          (L.T = n), (Z.p = s);
        }
      }
      (Tr & 3) !== 0 && Ms(),
        Gn(e),
        (s = e.pendingLanes),
        (i & 4194090) !== 0 && (s & 42) !== 0
          ? e === Td
            ? Il++
            : ((Il = 0), (Td = e))
          : (Il = 0),
        Bl(0);
    }
  }
  function gg(e, n) {
    (e.pooledCacheLanes &= n) === 0 &&
      ((n = e.pooledCache), n != null && ((e.pooledCache = null), vl(n)));
  }
  function Ms(e) {
    return hg(), mg(), pg(), yg();
  }
  function yg() {
    if (At !== 5) return !1;
    var e = Va,
      n = Ed;
    Ed = 0;
    var i = nl(Tr),
      l = L.T,
      s = Z.p;
    try {
      (Z.p = 32 > i ? 32 : i), (L.T = null), (i = Sd), (Sd = null);
      var u = Va,
        m = Tr;
      if (((At = 0), (Sr = Va = null), (Tr = 0), (Xe & 6) !== 0))
        throw Error(o(331));
      var y = Xe;
      if (
        ((Xe |= 4),
        eg(u.current),
        Zp(u, u.current, m, i),
        (Xe = y),
        Bl(0, !1),
        lt && typeof lt.onPostCommitFiberRoot == "function")
      )
        try {
          lt.onPostCommitFiberRoot(Ht, u);
        } catch {}
      return !0;
    } finally {
      (Z.p = s), (L.T = l), gg(e, n);
    }
  }
  function vg(e, n, i) {
    (n = hn(i, n)),
      (n = ad(e.stateNode, n, 2)),
      (e = Ma(e, n, 2)),
      e !== null && (gi(e, 2), Gn(e));
  }
  function Je(e, n, i) {
    if (e.tag === 3) vg(e, e, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          vg(n, e, i);
          break;
        } else if (n.tag === 1) {
          var l = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Pa === null || !Pa.has(l)))
          ) {
            (e = hn(i, e)),
              (i = xp(2)),
              (l = Ma(n, i, 2)),
              l !== null && (Ep(i, l, n, e), gi(l, 2), Gn(l));
            break;
          }
        }
        n = n.return;
      }
  }
  function Od(e, n, i) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new s2();
      var s = new Set();
      l.set(n, s);
    } else (s = l.get(n)), s === void 0 && ((s = new Set()), l.set(n, s));
    s.has(i) ||
      ((bd = !0), s.add(i), (e = h2.bind(null, e, n, i)), n.then(e, e));
  }
  function h2(e, n, i) {
    var l = e.pingCache;
    l !== null && l.delete(n),
      (e.pingedLanes |= e.suspendedLanes & i),
      (e.warmLanes &= ~i),
      tt === e &&
        (je & i) === i &&
        (ut === 4 || (ut === 3 && (je & 62914560) === je && 300 > Ft() - xd)
          ? (Xe & 2) === 0 && Cr(e, 0)
          : (wd |= i),
        Er === je && (Er = 0)),
      Gn(e);
  }
  function bg(e, n) {
    n === 0 && (n = Po()), (e = sr(e, n)), e !== null && (gi(e, n), Gn(e));
  }
  function m2(e) {
    var n = e.memoizedState,
      i = 0;
    n !== null && (i = n.retryLane), bg(e, i);
  }
  function p2(e, n) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          s = e.memoizedState;
        s !== null && (i = s.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(n), bg(e, i);
  }
  function g2(e, n) {
    return Wr(e, n);
  }
  var ks = null,
    Rr = null,
    Dd = !1,
    Ls = !1,
    Nd = !1,
    ji = 0;
  function Gn(e) {
    e !== Rr &&
      e.next === null &&
      (Rr === null ? (ks = Rr = e) : (Rr = Rr.next = e)),
      (Ls = !0),
      Dd || ((Dd = !0), v2());
  }
  function Bl(e, n) {
    if (!Nd && Ls) {
      Nd = !0;
      do
        for (var i = !1, l = ks; l !== null; ) {
          if (e !== 0) {
            var s = l.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var m = l.suspendedLanes,
                y = l.pingedLanes;
              (u = (1 << (31 - Tt(42 | e) + 1)) - 1),
                (u &= s & ~(m & ~y)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((i = !0), Eg(l, u));
          } else
            (u = je),
              (u = pi(
                l,
                l === tt ? u : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Bn(l, u) || ((i = !0), Eg(l, u));
          l = l.next;
        }
      while (i);
      Nd = !1;
    }
  }
  function y2() {
    wg();
  }
  function wg() {
    Ls = Dd = !1;
    var e = 0;
    ji !== 0 && (C2() && (e = ji), (ji = 0));
    for (var n = Ft(), i = null, l = ks; l !== null; ) {
      var s = l.next,
        u = _g(l, n);
      u === 0
        ? ((l.next = null),
          i === null ? (ks = s) : (i.next = s),
          s === null && (Rr = i))
        : ((i = l), (e !== 0 || (u & 3) !== 0) && (Ls = !0)),
        (l = s);
    }
    Bl(e);
  }
  function _g(e, n) {
    for (
      var i = e.suspendedLanes,
        l = e.pingedLanes,
        s = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;

    ) {
      var m = 31 - Tt(u),
        y = 1 << m,
        _ = s[m];
      _ === -1
        ? ((y & i) === 0 || (y & l) !== 0) && (s[m] = Ho(y, n))
        : _ <= n && (e.expiredLanes |= y),
        (u &= ~y);
    }
    if (
      ((n = tt),
      (i = je),
      (i = pi(
        e,
        e === n ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (l = e.callbackNode),
      i === 0 ||
        (e === n && (Ke === 2 || Ke === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && Cn(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((i & 3) === 0 || Bn(e, i)) {
      if (((n = i & -i), n === e.callbackPriority)) return n;
      switch ((l !== null && Cn(l), nl(i))) {
        case 2:
        case 8:
          i = zo;
          break;
        case 32:
          i = Zi;
          break;
        case 268435456:
          i = Ea;
          break;
        default:
          i = Zi;
      }
      return (
        (l = xg.bind(null, e)),
        (i = Wr(i, l)),
        (e.callbackPriority = n),
        (e.callbackNode = i),
        n
      );
    }
    return (
      l !== null && l !== null && Cn(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function xg(e, n) {
    if (At !== 0 && At !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var i = e.callbackNode;
    if (Ms() && e.callbackNode !== i) return null;
    var l = je;
    return (
      (l = pi(
        e,
        e === tt ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (ig(e, l, n),
          _g(e, Ft()),
          e.callbackNode != null && e.callbackNode === i
            ? xg.bind(null, e)
            : null)
    );
  }
  function Eg(e, n) {
    if (Ms()) return null;
    ig(e, n, !0);
  }
  function v2() {
    R2(function () {
      (Xe & 6) !== 0 ? Wr(Uo, y2) : wg();
    });
  }
  function Md() {
    return ji === 0 && (ji = Ji()), ji;
  }
  function Sg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : $o("" + e);
  }
  function Tg(e, n) {
    var i = n.ownerDocument.createElement("input");
    return (
      (i.name = n.name),
      (i.value = n.value),
      e.id && i.setAttribute("form", e.id),
      n.parentNode.insertBefore(i, n),
      (e = new FormData(e)),
      i.parentNode.removeChild(i),
      e
    );
  }
  function b2(e, n, i, l, s) {
    if (n === "submit" && i && i.stateNode === s) {
      var u = Sg((s[J] || null).action),
        m = l.submitter;
      m &&
        ((n = (n = m[J] || null)
          ? Sg(n.formAction)
          : m.getAttribute("formAction")),
        n !== null && ((u = n), (m = null)));
      var y = new Fo("action", "action", null, l, s);
      e.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (ji !== 0) {
                  var _ = m ? Tg(s, m) : new FormData(s);
                  Ju(
                    i,
                    { pending: !0, data: _, method: s.method, action: u },
                    null,
                    _
                  );
                }
              } else
                typeof u == "function" &&
                  (y.preventDefault(),
                  (_ = m ? Tg(s, m) : new FormData(s)),
                  Ju(
                    i,
                    { pending: !0, data: _, method: s.method, action: u },
                    u,
                    _
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var kd = 0; kd < yu.length; kd++) {
    var Ld = yu[kd],
      w2 = Ld.toLowerCase(),
      _2 = Ld[0].toUpperCase() + Ld.slice(1);
    Dn(w2, "on" + _2);
  }
  Dn(im, "onAnimationEnd"),
    Dn(rm, "onAnimationIteration"),
    Dn(lm, "onAnimationStart"),
    Dn("dblclick", "onDoubleClick"),
    Dn("focusin", "onFocus"),
    Dn("focusout", "onBlur"),
    Dn(Iw, "onTransitionRun"),
    Dn(Bw, "onTransitionStart"),
    Dn(Hw, "onTransitionCancel"),
    Dn(om, "onTransitionEnd"),
    un("onMouseEnter", ["mouseout", "mouseover"]),
    un("onMouseLeave", ["mouseout", "mouseover"]),
    un("onPointerEnter", ["pointerout", "pointerover"]),
    un("onPointerLeave", ["pointerout", "pointerover"]),
    Lt(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Lt(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Lt(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Lt(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Lt(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Hl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    x2 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Hl)
    );
  function Cg(e, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var l = e[i],
        s = l.event;
      l = l.listeners;
      e: {
        var u = void 0;
        if (n)
          for (var m = l.length - 1; 0 <= m; m--) {
            var y = l[m],
              _ = y.instance,
              k = y.currentTarget;
            if (((y = y.listener), _ !== u && s.isPropagationStopped()))
              break e;
            (u = y), (s.currentTarget = k);
            try {
              u(s);
            } catch (q) {
              _s(q);
            }
            (s.currentTarget = null), (u = _);
          }
        else
          for (m = 0; m < l.length; m++) {
            if (
              ((y = l[m]),
              (_ = y.instance),
              (k = y.currentTarget),
              (y = y.listener),
              _ !== u && s.isPropagationStopped())
            )
              break e;
            (u = y), (s.currentTarget = k);
            try {
              u(s);
            } catch (q) {
              _s(q);
            }
            (s.currentTarget = null), (u = _);
          }
      }
    }
  }
  function Ne(e, n) {
    var i = n[pe];
    i === void 0 && (i = n[pe] = new Set());
    var l = e + "__bubble";
    i.has(l) || (Ag(n, e, 2, !1), i.add(l));
  }
  function jd(e, n, i) {
    var l = 0;
    n && (l |= 4), Ag(i, e, l, n);
  }
  var js = "_reactListening" + Math.random().toString(36).slice(2);
  function Ud(e) {
    if (!e[js]) {
      (e[js] = !0),
        ke.forEach(function (i) {
          i !== "selectionchange" && (x2.has(i) || jd(i, !1, e), jd(i, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[js] || ((n[js] = !0), jd("selectionchange", !1, n));
    }
  }
  function Ag(e, n, i, l) {
    switch (Zg(n)) {
      case 2:
        var s = F2;
        break;
      case 8:
        s = Q2;
        break;
      default:
        s = Qd;
    }
    (i = s.bind(null, n, i, e)),
      (s = void 0),
      !iu ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (s = !0),
      l
        ? s !== void 0
          ? e.addEventListener(n, i, { capture: !0, passive: s })
          : e.addEventListener(n, i, !0)
        : s !== void 0
        ? e.addEventListener(n, i, { passive: s })
        : e.addEventListener(n, i, !1);
  }
  function zd(e, n, i, l, s) {
    var u = l;
    if ((n & 1) === 0 && (n & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var m = l.tag;
        if (m === 3 || m === 4) {
          var y = l.stateNode.containerInfo;
          if (y === s) break;
          if (m === 4)
            for (m = l.return; m !== null; ) {
              var _ = m.tag;
              if ((_ === 3 || _ === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; y !== null; ) {
            if (((m = _e(y)), m === null)) return;
            if (((_ = m.tag), _ === 5 || _ === 6 || _ === 26 || _ === 27)) {
              l = u = m;
              continue e;
            }
            y = y.parentNode;
          }
        }
        l = l.return;
      }
    Lh(function () {
      var k = u,
        q = nu(i),
        X = [];
      e: {
        var j = sm.get(e);
        if (j !== void 0) {
          var U = Fo,
            we = e;
          switch (e) {
            case "keypress":
              if (Xo(i) === 0) break e;
            case "keydown":
            case "keyup":
              U = gw;
              break;
            case "focusin":
              (we = "focus"), (U = su);
              break;
            case "focusout":
              (we = "blur"), (U = su);
              break;
            case "beforeblur":
            case "afterblur":
              U = su;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              U = zh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = iw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = bw;
              break;
            case im:
            case rm:
            case lm:
              U = ow;
              break;
            case om:
              U = _w;
              break;
            case "scroll":
            case "scrollend":
              U = nw;
              break;
            case "wheel":
              U = Ew;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = cw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = Bh;
              break;
            case "toggle":
            case "beforetoggle":
              U = Tw;
          }
          var ge = (n & 4) !== 0,
            Ze = !ge && (e === "scroll" || e === "scrollend"),
            C = ge ? (j !== null ? j + "Capture" : null) : j;
          ge = [];
          for (var T = k, N; T !== null; ) {
            var G = T;
            if (
              ((N = G.stateNode),
              (G = G.tag),
              (G !== 5 && G !== 26 && G !== 27) ||
                N === null ||
                C === null ||
                ((G = rl(T, C)), G != null && ge.push(Pl(T, G, N))),
              Ze)
            )
              break;
            T = T.return;
          }
          0 < ge.length &&
            ((j = new U(j, we, null, i, q)),
            X.push({ event: j, listeners: ge }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((j = e === "mouseover" || e === "pointerover"),
            (U = e === "mouseout" || e === "pointerout"),
            j &&
              i !== tu &&
              (we = i.relatedTarget || i.fromElement) &&
              (_e(we) || we[oe]))
          )
            break e;
          if (
            (U || j) &&
            ((j =
              q.window === q
                ? q
                : (j = q.ownerDocument)
                ? j.defaultView || j.parentWindow
                : window),
            U
              ? ((we = i.relatedTarget || i.toElement),
                (U = k),
                (we = we ? _e(we) : null),
                we !== null &&
                  ((Ze = d(we)),
                  (ge = we.tag),
                  we !== Ze || (ge !== 5 && ge !== 27 && ge !== 6)) &&
                  (we = null))
              : ((U = null), (we = k)),
            U !== we)
          ) {
            if (
              ((ge = zh),
              (G = "onMouseLeave"),
              (C = "onMouseEnter"),
              (T = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ge = Bh),
                (G = "onPointerLeave"),
                (C = "onPointerEnter"),
                (T = "pointer")),
              (Ze = U == null ? j : at(U)),
              (N = we == null ? j : at(we)),
              (j = new ge(G, T + "leave", U, i, q)),
              (j.target = Ze),
              (j.relatedTarget = N),
              (G = null),
              _e(q) === k &&
                ((ge = new ge(C, T + "enter", we, i, q)),
                (ge.target = N),
                (ge.relatedTarget = Ze),
                (G = ge)),
              (Ze = G),
              U && we)
            )
              t: {
                for (ge = U, C = we, T = 0, N = ge; N; N = Or(N)) T++;
                for (N = 0, G = C; G; G = Or(G)) N++;
                for (; 0 < T - N; ) (ge = Or(ge)), T--;
                for (; 0 < N - T; ) (C = Or(C)), N--;
                for (; T--; ) {
                  if (ge === C || (C !== null && ge === C.alternate)) break t;
                  (ge = Or(ge)), (C = Or(C));
                }
                ge = null;
              }
            else ge = null;
            U !== null && Rg(X, j, U, ge, !1),
              we !== null && Ze !== null && Rg(X, Ze, we, ge, !0);
          }
        }
        e: {
          if (
            ((j = k ? at(k) : window),
            (U = j.nodeName && j.nodeName.toLowerCase()),
            U === "select" || (U === "input" && j.type === "file"))
          )
            var re = Xh;
          else if ($h(j))
            if (Kh) re = jw;
            else {
              re = kw;
              var Ce = Mw;
            }
          else
            (U = j.nodeName),
              !U ||
              U.toLowerCase() !== "input" ||
              (j.type !== "checkbox" && j.type !== "radio")
                ? k && eu(k.elementType) && (re = Xh)
                : (re = Lw);
          if (re && (re = re(e, k))) {
            Yh(X, re, i, q);
            break e;
          }
          Ce && Ce(e, j, k),
            e === "focusout" &&
              k &&
              j.type === "number" &&
              k.memoizedProps.value != null &&
              Wc(j, "number", j.value);
        }
        switch (((Ce = k ? at(k) : window), e)) {
          case "focusin":
            ($h(Ce) || Ce.contentEditable === "true") &&
              ((rr = Ce), (mu = k), (hl = null));
            break;
          case "focusout":
            hl = mu = rr = null;
            break;
          case "mousedown":
            pu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (pu = !1), nm(X, i, q);
            break;
          case "selectionchange":
            if (zw) break;
          case "keydown":
          case "keyup":
            nm(X, i, q);
        }
        var ue;
        if (uu)
          e: {
            switch (e) {
              case "compositionstart":
                var ye = "onCompositionStart";
                break e;
              case "compositionend":
                ye = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ye = "onCompositionUpdate";
                break e;
            }
            ye = void 0;
          }
        else
          ir
            ? qh(e, i) && (ye = "onCompositionEnd")
            : e === "keydown" &&
              i.keyCode === 229 &&
              (ye = "onCompositionStart");
        ye &&
          (Hh &&
            i.locale !== "ko" &&
            (ir || ye !== "onCompositionStart"
              ? ye === "onCompositionEnd" && ir && (ue = jh())
              : ((Ra = q),
                (ru = "value" in Ra ? Ra.value : Ra.textContent),
                (ir = !0))),
          (Ce = Us(k, ye)),
          0 < Ce.length &&
            ((ye = new Ih(ye, e, null, i, q)),
            X.push({ event: ye, listeners: Ce }),
            ue
              ? (ye.data = ue)
              : ((ue = Gh(i)), ue !== null && (ye.data = ue)))),
          (ue = Aw ? Rw(e, i) : Ow(e, i)) &&
            ((ye = Us(k, "onBeforeInput")),
            0 < ye.length &&
              ((Ce = new Ih("onBeforeInput", "beforeinput", null, i, q)),
              X.push({ event: Ce, listeners: ye }),
              (Ce.data = ue))),
          b2(X, e, k, i, q);
      }
      Cg(X, n);
    });
  }
  function Pl(e, n, i) {
    return { instance: e, listener: n, currentTarget: i };
  }
  function Us(e, n) {
    for (var i = n + "Capture", l = []; e !== null; ) {
      var s = e,
        u = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          u === null ||
          ((s = rl(e, i)),
          s != null && l.unshift(Pl(e, s, u)),
          (s = rl(e, n)),
          s != null && l.push(Pl(e, s, u))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function Or(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Rg(e, n, i, l, s) {
    for (var u = n._reactName, m = []; i !== null && i !== l; ) {
      var y = i,
        _ = y.alternate,
        k = y.stateNode;
      if (((y = y.tag), _ !== null && _ === l)) break;
      (y !== 5 && y !== 26 && y !== 27) ||
        k === null ||
        ((_ = k),
        s
          ? ((k = rl(i, u)), k != null && m.unshift(Pl(i, k, _)))
          : s || ((k = rl(i, u)), k != null && m.push(Pl(i, k, _)))),
        (i = i.return);
    }
    m.length !== 0 && e.push({ event: n, listeners: m });
  }
  var E2 = /\r\n?/g,
    S2 = /\u0000|\uFFFD/g;
  function Og(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        E2,
        `
`
      )
      .replace(S2, "");
  }
  function Dg(e, n) {
    return (n = Og(n)), Og(e) === n;
  }
  function zs() {}
  function Qe(e, n, i, l, s, u) {
    switch (i) {
      case "children":
        typeof l == "string"
          ? n === "body" || (n === "textarea" && l === "") || tr(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            n !== "body" &&
            tr(e, "" + l);
        break;
      case "className":
        Wn(e, "class", l);
        break;
      case "tabIndex":
        Wn(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Wn(e, i, l);
        break;
      case "style":
        Mh(e, l, u);
        break;
      case "data":
        if (n !== "object") {
          Wn(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (n !== "a" || i !== "href")) {
          e.removeAttribute(i);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(i);
          break;
        }
        (l = $o("" + l)), e.setAttribute(i, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (i === "formAction"
              ? (n !== "input" && Qe(e, n, "name", s.name, s, null),
                Qe(e, n, "formEncType", s.formEncType, s, null),
                Qe(e, n, "formMethod", s.formMethod, s, null),
                Qe(e, n, "formTarget", s.formTarget, s, null))
              : (Qe(e, n, "encType", s.encType, s, null),
                Qe(e, n, "method", s.method, s, null),
                Qe(e, n, "target", s.target, s, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(i);
          break;
        }
        (l = $o("" + l)), e.setAttribute(i, l);
        break;
      case "onClick":
        l != null && (e.onclick = zs);
        break;
      case "onScroll":
        l != null && Ne("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ne("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
          if (((i = l.__html), i != null)) {
            if (s.children != null) throw Error(o(60));
            e.innerHTML = i;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (i = $o("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(i, "" + l)
          : e.removeAttribute(i);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(i, "")
          : e.removeAttribute(i);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(i, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? e.setAttribute(i, l)
          : e.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(i, l)
          : e.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(i)
          : e.setAttribute(i, l);
        break;
      case "popover":
        Ne("beforetoggle", e), Ne("toggle", e), dn(e, "popover", l);
        break;
      case "xlinkActuate":
        Te(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Te(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Te(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Te(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Te(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Te(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Te(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Te(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Te(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        dn(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) ||
          (i[0] !== "o" && i[0] !== "O") ||
          (i[1] !== "n" && i[1] !== "N")) &&
          ((i = ew.get(i) || i), dn(e, i, l));
    }
  }
  function Id(e, n, i, l, s, u) {
    switch (i) {
      case "style":
        Mh(e, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
          if (((i = l.__html), i != null)) {
            if (s.children != null) throw Error(o(60));
            e.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? tr(e, l)
          : (typeof l == "number" || typeof l == "bigint") && tr(e, "" + l);
        break;
      case "onScroll":
        l != null && Ne("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ne("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = zs);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Sa.hasOwnProperty(i))
          e: {
            if (
              i[0] === "o" &&
              i[1] === "n" &&
              ((s = i.endsWith("Capture")),
              (n = i.slice(2, s ? i.length - 7 : void 0)),
              (u = e[J] || null),
              (u = u != null ? u[i] : null),
              typeof u == "function" && e.removeEventListener(n, u, s),
              typeof l == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (i in e
                  ? (e[i] = null)
                  : e.hasAttribute(i) && e.removeAttribute(i)),
                e.addEventListener(n, l, s);
              break e;
            }
            i in e
              ? (e[i] = l)
              : l === !0
              ? e.setAttribute(i, "")
              : dn(e, i, l);
          }
    }
  }
  function Rt(e, n, i) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ne("error", e), Ne("load", e);
        var l = !1,
          s = !1,
          u;
        for (u in i)
          if (i.hasOwnProperty(u)) {
            var m = i[u];
            if (m != null)
              switch (u) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, n));
                default:
                  Qe(e, n, u, m, i, null);
              }
          }
        s && Qe(e, n, "srcSet", i.srcSet, i, null),
          l && Qe(e, n, "src", i.src, i, null);
        return;
      case "input":
        Ne("invalid", e);
        var y = (u = m = s = null),
          _ = null,
          k = null;
        for (l in i)
          if (i.hasOwnProperty(l)) {
            var q = i[l];
            if (q != null)
              switch (l) {
                case "name":
                  s = q;
                  break;
                case "type":
                  m = q;
                  break;
                case "checked":
                  _ = q;
                  break;
                case "defaultChecked":
                  k = q;
                  break;
                case "value":
                  u = q;
                  break;
                case "defaultValue":
                  y = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null) throw Error(o(137, n));
                  break;
                default:
                  Qe(e, n, l, q, i, null);
              }
          }
        Rh(e, u, y, _, k, m, s, !1), qo(e);
        return;
      case "select":
        Ne("invalid", e), (l = m = u = null);
        for (s in i)
          if (i.hasOwnProperty(s) && ((y = i[s]), y != null))
            switch (s) {
              case "value":
                u = y;
                break;
              case "defaultValue":
                m = y;
                break;
              case "multiple":
                l = y;
              default:
                Qe(e, n, s, y, i, null);
            }
        (n = u),
          (i = m),
          (e.multiple = !!l),
          n != null ? er(e, !!l, n, !1) : i != null && er(e, !!l, i, !0);
        return;
      case "textarea":
        Ne("invalid", e), (u = s = l = null);
        for (m in i)
          if (i.hasOwnProperty(m) && ((y = i[m]), y != null))
            switch (m) {
              case "value":
                l = y;
                break;
              case "defaultValue":
                s = y;
                break;
              case "children":
                u = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(o(91));
                break;
              default:
                Qe(e, n, m, y, i, null);
            }
        Dh(e, l, s, u), qo(e);
        return;
      case "option":
        for (_ in i)
          if (i.hasOwnProperty(_) && ((l = i[_]), l != null))
            switch (_) {
              case "selected":
                e.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Qe(e, n, _, l, i, null);
            }
        return;
      case "dialog":
        Ne("beforetoggle", e), Ne("toggle", e), Ne("cancel", e), Ne("close", e);
        break;
      case "iframe":
      case "object":
        Ne("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Hl.length; l++) Ne(Hl[l], e);
        break;
      case "image":
        Ne("error", e), Ne("load", e);
        break;
      case "details":
        Ne("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ne("error", e), Ne("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (k in i)
          if (i.hasOwnProperty(k) && ((l = i[k]), l != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, n));
              default:
                Qe(e, n, k, l, i, null);
            }
        return;
      default:
        if (eu(n)) {
          for (q in i)
            i.hasOwnProperty(q) &&
              ((l = i[q]), l !== void 0 && Id(e, n, q, l, i, void 0));
          return;
        }
    }
    for (y in i)
      i.hasOwnProperty(y) && ((l = i[y]), l != null && Qe(e, n, y, l, i, null));
  }
  function T2(e, n, i, l) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          u = null,
          m = null,
          y = null,
          _ = null,
          k = null,
          q = null;
        for (U in i) {
          var X = i[U];
          if (i.hasOwnProperty(U) && X != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                _ = X;
              default:
                l.hasOwnProperty(U) || Qe(e, n, U, null, l, X);
            }
        }
        for (var j in l) {
          var U = l[j];
          if (((X = i[j]), l.hasOwnProperty(j) && (U != null || X != null)))
            switch (j) {
              case "type":
                u = U;
                break;
              case "name":
                s = U;
                break;
              case "checked":
                k = U;
                break;
              case "defaultChecked":
                q = U;
                break;
              case "value":
                m = U;
                break;
              case "defaultValue":
                y = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(o(137, n));
                break;
              default:
                U !== X && Qe(e, n, j, U, l, X);
            }
        }
        Jc(e, m, y, _, k, q, u, s);
        return;
      case "select":
        U = m = y = j = null;
        for (u in i)
          if (((_ = i[u]), i.hasOwnProperty(u) && _ != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                U = _;
              default:
                l.hasOwnProperty(u) || Qe(e, n, u, null, l, _);
            }
        for (s in l)
          if (
            ((u = l[s]),
            (_ = i[s]),
            l.hasOwnProperty(s) && (u != null || _ != null))
          )
            switch (s) {
              case "value":
                j = u;
                break;
              case "defaultValue":
                y = u;
                break;
              case "multiple":
                m = u;
              default:
                u !== _ && Qe(e, n, s, u, l, _);
            }
        (n = y),
          (i = m),
          (l = U),
          j != null
            ? er(e, !!i, j, !1)
            : !!l != !!i &&
              (n != null ? er(e, !!i, n, !0) : er(e, !!i, i ? [] : "", !1));
        return;
      case "textarea":
        U = j = null;
        for (y in i)
          if (
            ((s = i[y]),
            i.hasOwnProperty(y) && s != null && !l.hasOwnProperty(y))
          )
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Qe(e, n, y, null, l, s);
            }
        for (m in l)
          if (
            ((s = l[m]),
            (u = i[m]),
            l.hasOwnProperty(m) && (s != null || u != null))
          )
            switch (m) {
              case "value":
                j = s;
                break;
              case "defaultValue":
                U = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(o(91));
                break;
              default:
                s !== u && Qe(e, n, m, s, l, u);
            }
        Oh(e, j, U);
        return;
      case "option":
        for (var we in i)
          if (
            ((j = i[we]),
            i.hasOwnProperty(we) && j != null && !l.hasOwnProperty(we))
          )
            switch (we) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Qe(e, n, we, null, l, j);
            }
        for (_ in l)
          if (
            ((j = l[_]),
            (U = i[_]),
            l.hasOwnProperty(_) && j !== U && (j != null || U != null))
          )
            switch (_) {
              case "selected":
                e.selected =
                  j && typeof j != "function" && typeof j != "symbol";
                break;
              default:
                Qe(e, n, _, j, l, U);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ge in i)
          (j = i[ge]),
            i.hasOwnProperty(ge) &&
              j != null &&
              !l.hasOwnProperty(ge) &&
              Qe(e, n, ge, null, l, j);
        for (k in l)
          if (
            ((j = l[k]),
            (U = i[k]),
            l.hasOwnProperty(k) && j !== U && (j != null || U != null))
          )
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(o(137, n));
                break;
              default:
                Qe(e, n, k, j, l, U);
            }
        return;
      default:
        if (eu(n)) {
          for (var Ze in i)
            (j = i[Ze]),
              i.hasOwnProperty(Ze) &&
                j !== void 0 &&
                !l.hasOwnProperty(Ze) &&
                Id(e, n, Ze, void 0, l, j);
          for (q in l)
            (j = l[q]),
              (U = i[q]),
              !l.hasOwnProperty(q) ||
                j === U ||
                (j === void 0 && U === void 0) ||
                Id(e, n, q, j, l, U);
          return;
        }
    }
    for (var C in i)
      (j = i[C]),
        i.hasOwnProperty(C) &&
          j != null &&
          !l.hasOwnProperty(C) &&
          Qe(e, n, C, null, l, j);
    for (X in l)
      (j = l[X]),
        (U = i[X]),
        !l.hasOwnProperty(X) ||
          j === U ||
          (j == null && U == null) ||
          Qe(e, n, X, j, l, U);
  }
  var Bd = null,
    Hd = null;
  function Is(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Ng(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Mg(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function Pd(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Vd = null;
  function C2() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Vd
        ? !1
        : ((Vd = e), !0)
      : ((Vd = null), !1);
  }
  var kg = typeof setTimeout == "function" ? setTimeout : void 0,
    A2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Lg = typeof Promise == "function" ? Promise : void 0,
    R2 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Lg < "u"
        ? function (e) {
            return Lg.resolve(null).then(e).catch(O2);
          }
        : kg;
  function O2(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ga(e) {
    return e === "head";
  }
  function jg(e, n) {
    var i = n,
      l = 0,
      s = 0;
    do {
      var u = i.nextSibling;
      if ((e.removeChild(i), u && u.nodeType === 8))
        if (((i = u.data), i === "/$")) {
          if (0 < l && 8 > l) {
            i = l;
            var m = e.ownerDocument;
            if ((i & 1 && Vl(m.documentElement), i & 2 && Vl(m.body), i & 4))
              for (i = m.head, Vl(i), m = i.firstChild; m; ) {
                var y = m.nextSibling,
                  _ = m.nodeName;
                m[ve] ||
                  _ === "SCRIPT" ||
                  _ === "STYLE" ||
                  (_ === "LINK" && m.rel.toLowerCase() === "stylesheet") ||
                  i.removeChild(m),
                  (m = y);
              }
          }
          if (s === 0) {
            e.removeChild(u), Ql(n);
            return;
          }
          s--;
        } else
          i === "$" || i === "$?" || i === "$!"
            ? s++
            : (l = i.charCodeAt(0) - 48);
      else l = 0;
      i = u;
    } while (i);
    Ql(n);
  }
  function qd(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var i = n;
      switch (((n = n.nextSibling), i.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          qd(i), ce(i);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(i);
    }
  }
  function D2(e, n, i, l) {
    for (; e.nodeType === 1; ) {
      var s = i;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[ve])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((u = e.getAttribute("rel")),
                u === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== s.rel ||
                e.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                e.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                e.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((u = e.getAttribute("src")),
                (u !== (s.src == null ? null : s.src) ||
                  e.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  e.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  u &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var u = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (((e = Mn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function N2(e, n, i) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !i) ||
        ((e = Mn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Gd(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function M2(e, n) {
    var i = e.ownerDocument;
    if (e.data !== "$?" || i.readyState === "complete") n();
    else {
      var l = function () {
        n(), i.removeEventListener("DOMContentLoaded", l);
      };
      i.addEventListener("DOMContentLoaded", l), (e._reactRetry = l);
    }
  }
  function Mn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = e.data),
          n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
        )
          break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  var $d = null;
  function Ug(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (n === 0) return e;
          n--;
        } else i === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function zg(e, n, i) {
    switch (((n = Is(i)), e)) {
      case "html":
        if (((e = n.documentElement), !e)) throw Error(o(452));
        return e;
      case "head":
        if (((e = n.head), !e)) throw Error(o(453));
        return e;
      case "body":
        if (((e = n.body), !e)) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function Vl(e) {
    for (var n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
    ce(e);
  }
  var bn = new Map(),
    Ig = new Set();
  function Bs(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var ha = Z.d;
  Z.d = { f: k2, r: L2, D: j2, C: U2, L: z2, m: I2, X: H2, S: B2, M: P2 };
  function k2() {
    var e = ha.f(),
      n = Ds();
    return e || n;
  }
  function L2(e) {
    var n = Be(e);
    n !== null && n.tag === 5 && n.type === "form" ? ip(n) : ha.r(e);
  }
  var Dr = typeof document > "u" ? null : document;
  function Bg(e, n, i) {
    var l = Dr;
    if (l && typeof n == "string" && n) {
      var s = fn(n);
      (s = 'link[rel="' + e + '"][href="' + s + '"]'),
        typeof i == "string" && (s += '[crossorigin="' + i + '"]'),
        Ig.has(s) ||
          (Ig.add(s),
          (e = { rel: e, crossOrigin: i, href: n }),
          l.querySelector(s) === null &&
            ((n = l.createElement("link")),
            Rt(n, "link", e),
            He(n),
            l.head.appendChild(n)));
    }
  }
  function j2(e) {
    ha.D(e), Bg("dns-prefetch", e, null);
  }
  function U2(e, n) {
    ha.C(e, n), Bg("preconnect", e, n);
  }
  function z2(e, n, i) {
    ha.L(e, n, i);
    var l = Dr;
    if (l && e && n) {
      var s = 'link[rel="preload"][as="' + fn(n) + '"]';
      n === "image" && i && i.imageSrcSet
        ? ((s += '[imagesrcset="' + fn(i.imageSrcSet) + '"]'),
          typeof i.imageSizes == "string" &&
            (s += '[imagesizes="' + fn(i.imageSizes) + '"]'))
        : (s += '[href="' + fn(e) + '"]');
      var u = s;
      switch (n) {
        case "style":
          u = Nr(e);
          break;
        case "script":
          u = Mr(e);
      }
      bn.has(u) ||
        ((e = b(
          {
            rel: "preload",
            href: n === "image" && i && i.imageSrcSet ? void 0 : e,
            as: n,
          },
          i
        )),
        bn.set(u, e),
        l.querySelector(s) !== null ||
          (n === "style" && l.querySelector(ql(u))) ||
          (n === "script" && l.querySelector(Gl(u))) ||
          ((n = l.createElement("link")),
          Rt(n, "link", e),
          He(n),
          l.head.appendChild(n)));
    }
  }
  function I2(e, n) {
    ha.m(e, n);
    var i = Dr;
    if (i && e) {
      var l = n && typeof n.as == "string" ? n.as : "script",
        s =
          'link[rel="modulepreload"][as="' + fn(l) + '"][href="' + fn(e) + '"]',
        u = s;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Mr(e);
      }
      if (
        !bn.has(u) &&
        ((e = b({ rel: "modulepreload", href: e }, n)),
        bn.set(u, e),
        i.querySelector(s) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(Gl(u))) return;
        }
        (l = i.createElement("link")),
          Rt(l, "link", e),
          He(l),
          i.head.appendChild(l);
      }
    }
  }
  function B2(e, n, i) {
    ha.S(e, n, i);
    var l = Dr;
    if (l && e) {
      var s = ot(l).hoistableStyles,
        u = Nr(e);
      n = n || "default";
      var m = s.get(u);
      if (!m) {
        var y = { loading: 0, preload: null };
        if ((m = l.querySelector(ql(u)))) y.loading = 5;
        else {
          (e = b({ rel: "stylesheet", href: e, "data-precedence": n }, i)),
            (i = bn.get(u)) && Yd(e, i);
          var _ = (m = l.createElement("link"));
          He(_),
            Rt(_, "link", e),
            (_._p = new Promise(function (k, q) {
              (_.onload = k), (_.onerror = q);
            })),
            _.addEventListener("load", function () {
              y.loading |= 1;
            }),
            _.addEventListener("error", function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            Hs(m, n, l);
        }
        (m = { type: "stylesheet", instance: m, count: 1, state: y }),
          s.set(u, m);
      }
    }
  }
  function H2(e, n) {
    ha.X(e, n);
    var i = Dr;
    if (i && e) {
      var l = ot(i).hoistableScripts,
        s = Mr(e),
        u = l.get(s);
      u ||
        ((u = i.querySelector(Gl(s))),
        u ||
          ((e = b({ src: e, async: !0 }, n)),
          (n = bn.get(s)) && Xd(e, n),
          (u = i.createElement("script")),
          He(u),
          Rt(u, "link", e),
          i.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        l.set(s, u));
    }
  }
  function P2(e, n) {
    ha.M(e, n);
    var i = Dr;
    if (i && e) {
      var l = ot(i).hoistableScripts,
        s = Mr(e),
        u = l.get(s);
      u ||
        ((u = i.querySelector(Gl(s))),
        u ||
          ((e = b({ src: e, async: !0, type: "module" }, n)),
          (n = bn.get(s)) && Xd(e, n),
          (u = i.createElement("script")),
          He(u),
          Rt(u, "link", e),
          i.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        l.set(s, u));
    }
  }
  function Hg(e, n, i, l) {
    var s = (s = he.current) ? Bs(s) : null;
    if (!s) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string"
          ? ((n = Nr(i.href)),
            (i = ot(s).hoistableStyles),
            (l = i.get(n)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              i.set(n, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          i.rel === "stylesheet" &&
          typeof i.href == "string" &&
          typeof i.precedence == "string"
        ) {
          e = Nr(i.href);
          var u = ot(s).hoistableStyles,
            m = u.get(e);
          if (
            (m ||
              ((s = s.ownerDocument || s),
              (m = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, m),
              (u = s.querySelector(ql(e))) &&
                !u._p &&
                ((m.instance = u), (m.state.loading = 5)),
              bn.has(e) ||
                ((i = {
                  rel: "preload",
                  as: "style",
                  href: i.href,
                  crossOrigin: i.crossOrigin,
                  integrity: i.integrity,
                  media: i.media,
                  hrefLang: i.hrefLang,
                  referrerPolicy: i.referrerPolicy,
                }),
                bn.set(e, i),
                u || V2(s, e, i, m.state))),
            n && l === null)
          )
            throw Error(o(528, ""));
          return m;
        }
        if (n && l !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (n = i.async),
          (i = i.src),
          typeof i == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = Mr(i)),
              (i = ot(s).hoistableScripts),
              (l = i.get(n)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                i.set(n, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, e));
    }
  }
  function Nr(e) {
    return 'href="' + fn(e) + '"';
  }
  function ql(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Pg(e) {
    return b({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function V2(e, n, i, l) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (l.loading = 1)
      : ((n = e.createElement("link")),
        (l.preload = n),
        n.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        Rt(n, "link", i),
        He(n),
        e.head.appendChild(n));
  }
  function Mr(e) {
    return '[src="' + fn(e) + '"]';
  }
  function Gl(e) {
    return "script[async]" + e;
  }
  function Vg(e, n, i) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + fn(i.href) + '"]');
          if (l) return (n.instance = l), He(l), l;
          var s = b({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            He(l),
            Rt(l, "style", s),
            Hs(l, i.precedence, e),
            (n.instance = l)
          );
        case "stylesheet":
          s = Nr(i.href);
          var u = e.querySelector(ql(s));
          if (u) return (n.state.loading |= 4), (n.instance = u), He(u), u;
          (l = Pg(i)),
            (s = bn.get(s)) && Yd(l, s),
            (u = (e.ownerDocument || e).createElement("link")),
            He(u);
          var m = u;
          return (
            (m._p = new Promise(function (y, _) {
              (m.onload = y), (m.onerror = _);
            })),
            Rt(u, "link", l),
            (n.state.loading |= 4),
            Hs(u, i.precedence, e),
            (n.instance = u)
          );
        case "script":
          return (
            (u = Mr(i.src)),
            (s = e.querySelector(Gl(u)))
              ? ((n.instance = s), He(s), s)
              : ((l = i),
                (s = bn.get(u)) && ((l = b({}, i)), Xd(l, s)),
                (e = e.ownerDocument || e),
                (s = e.createElement("script")),
                He(s),
                Rt(s, "link", l),
                e.head.appendChild(s),
                (n.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((l = n.instance), (n.state.loading |= 4), Hs(l, i.precedence, e));
    return n.instance;
  }
  function Hs(e, n, i) {
    for (
      var l = i.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        s = l.length ? l[l.length - 1] : null,
        u = s,
        m = 0;
      m < l.length;
      m++
    ) {
      var y = l[m];
      if (y.dataset.precedence === n) u = y;
      else if (u !== s) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((n = i.nodeType === 9 ? i.head : i), n.insertBefore(e, n.firstChild));
  }
  function Yd(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.title == null && (e.title = n.title);
  }
  function Xd(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.integrity == null && (e.integrity = n.integrity);
  }
  var Ps = null;
  function qg(e, n, i) {
    if (Ps === null) {
      var l = new Map(),
        s = (Ps = new Map());
      s.set(i, l);
    } else (s = Ps), (l = s.get(i)), l || ((l = new Map()), s.set(i, l));
    if (l.has(e)) return l;
    for (
      l.set(e, null), i = i.getElementsByTagName(e), s = 0;
      s < i.length;
      s++
    ) {
      var u = i[s];
      if (
        !(
          u[ve] ||
          u[K] ||
          (e === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var m = u.getAttribute(n) || "";
        m = e + m;
        var y = l.get(m);
        y ? y.push(u) : l.set(m, [u]);
      }
    }
    return l;
  }
  function Gg(e, n, i) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        i,
        n === "title" ? e.querySelector("head > title") : null
      );
  }
  function q2(e, n, i) {
    if (i === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof n.precedence != "string" ||
          typeof n.href != "string" ||
          n.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        switch (n.rel) {
          case "stylesheet":
            return (
              (e = n.disabled), typeof n.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function $g(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var $l = null;
  function G2() {}
  function $2(e, n, i) {
    if ($l === null) throw Error(o(475));
    var l = $l;
    if (
      n.type === "stylesheet" &&
      (typeof i.media != "string" || matchMedia(i.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var s = Nr(i.href),
          u = e.querySelector(ql(s));
        if (u) {
          (e = u._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (l.count++, (l = Vs.bind(l)), e.then(l, l)),
            (n.state.loading |= 4),
            (n.instance = u),
            He(u);
          return;
        }
        (u = e.ownerDocument || e),
          (i = Pg(i)),
          (s = bn.get(s)) && Yd(i, s),
          (u = u.createElement("link")),
          He(u);
        var m = u;
        (m._p = new Promise(function (y, _) {
          (m.onload = y), (m.onerror = _);
        })),
          Rt(u, "link", i),
          (n.instance = u);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (l.count++,
          (n = Vs.bind(l)),
          e.addEventListener("load", n),
          e.addEventListener("error", n));
    }
  }
  function Y2() {
    if ($l === null) throw Error(o(475));
    var e = $l;
    return (
      e.stylesheets && e.count === 0 && Kd(e, e.stylesheets),
      0 < e.count
        ? function (n) {
            var i = setTimeout(function () {
              if ((e.stylesheets && Kd(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                (e.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (e.unsuspend = n),
              function () {
                (e.unsuspend = null), clearTimeout(i);
              }
            );
          }
        : null
    );
  }
  function Vs() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Kd(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var qs = null;
  function Kd(e, n) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (qs = new Map()),
        n.forEach(X2, e),
        (qs = null),
        Vs.call(e));
  }
  function X2(e, n) {
    if (!(n.state.loading & 4)) {
      var i = qs.get(e);
      if (i) var l = i.get(null);
      else {
        (i = new Map()), qs.set(e, i);
        for (
          var s = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < s.length;
          u++
        ) {
          var m = s[u];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") &&
            (i.set(m.dataset.precedence, m), (l = m));
        }
        l && i.set(null, l);
      }
      (s = n.instance),
        (m = s.getAttribute("data-precedence")),
        (u = i.get(m) || l),
        u === l && i.set(null, s),
        i.set(m, s),
        this.count++,
        (l = Vs.bind(this)),
        s.addEventListener("load", l),
        s.addEventListener("error", l),
        u
          ? u.parentNode.insertBefore(s, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(s, e.firstChild)),
        (n.state.loading |= 4);
    }
  }
  var Yl = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: ae,
    _currentValue2: ae,
    _threadCount: 0,
  };
  function K2(e, n, i, l, s, u, m, y) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Wi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Wi(0)),
      (this.hiddenUpdates = Wi(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = s),
      (this.onCaughtError = u),
      (this.onRecoverableError = m),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = y),
      (this.incompleteTransitions = new Map());
  }
  function Yg(e, n, i, l, s, u, m, y, _, k, q, X) {
    return (
      (e = new K2(e, n, i, m, y, _, k, X)),
      (n = 1),
      u === !0 && (n |= 24),
      (u = Zt(3, null, null, n)),
      (e.current = u),
      (u.stateNode = e),
      (n = Ou()),
      n.refCount++,
      (e.pooledCache = n),
      n.refCount++,
      (u.memoizedState = { element: l, isDehydrated: i, cache: n }),
      ku(u),
      e
    );
  }
  function Xg(e) {
    return e ? ((e = cr), e) : cr;
  }
  function Kg(e, n, i, l, s, u) {
    (s = Xg(s)),
      l.context === null ? (l.context = s) : (l.pendingContext = s),
      (l = Na(n)),
      (l.payload = { element: i }),
      (u = u === void 0 ? null : u),
      u !== null && (l.callback = u),
      (i = Ma(e, l, n)),
      i !== null && (nn(i, e, n), xl(i, e, n));
  }
  function Fg(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function Fd(e, n) {
    Fg(e, n), (e = e.alternate) && Fg(e, n);
  }
  function Qg(e) {
    if (e.tag === 13) {
      var n = sr(e, 67108864);
      n !== null && nn(n, e, 67108864), Fd(e, 67108864);
    }
  }
  var Gs = !0;
  function F2(e, n, i, l) {
    var s = L.T;
    L.T = null;
    var u = Z.p;
    try {
      (Z.p = 2), Qd(e, n, i, l);
    } finally {
      (Z.p = u), (L.T = s);
    }
  }
  function Q2(e, n, i, l) {
    var s = L.T;
    L.T = null;
    var u = Z.p;
    try {
      (Z.p = 8), Qd(e, n, i, l);
    } finally {
      (Z.p = u), (L.T = s);
    }
  }
  function Qd(e, n, i, l) {
    if (Gs) {
      var s = Zd(l);
      if (s === null) zd(e, n, l, $s, i), Jg(e, l);
      else if (J2(s, e, n, i, l)) l.stopPropagation();
      else if ((Jg(e, l), n & 4 && -1 < Z2.indexOf(e))) {
        for (; s !== null; ) {
          var u = Be(s);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var m = Jn(u.pendingLanes);
                  if (m !== 0) {
                    var y = u;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; m; ) {
                      var _ = 1 << (31 - Tt(m));
                      (y.entanglements[1] |= _), (m &= ~_);
                    }
                    Gn(u), (Xe & 6) === 0 && ((Rs = Ft() + 500), Bl(0));
                  }
                }
                break;
              case 13:
                (y = sr(u, 2)), y !== null && nn(y, u, 2), Ds(), Fd(u, 2);
            }
          if (((u = Zd(l)), u === null && zd(e, n, l, $s, i), u === s)) break;
          s = u;
        }
        s !== null && l.stopPropagation();
      } else zd(e, n, l, null, i);
    }
  }
  function Zd(e) {
    return (e = nu(e)), Jd(e);
  }
  var $s = null;
  function Jd(e) {
    if ((($s = null), (e = _e(e)), e !== null)) {
      var n = d(e);
      if (n === null) e = null;
      else {
        var i = n.tag;
        if (i === 13) {
          if (((e = f(n)), e !== null)) return e;
          e = null;
        } else if (i === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return ($s = e), null;
  }
  function Zg(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Qc()) {
          case Uo:
            return 2;
          case zo:
            return 8;
          case Zi:
          case Zn:
            return 32;
          case Ea:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Wd = !1,
    $a = null,
    Ya = null,
    Xa = null,
    Xl = new Map(),
    Kl = new Map(),
    Ka = [],
    Z2 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Jg(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        $a = null;
        break;
      case "dragenter":
      case "dragleave":
        Ya = null;
        break;
      case "mouseover":
      case "mouseout":
        Xa = null;
        break;
      case "pointerover":
      case "pointerout":
        Xl.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Kl.delete(n.pointerId);
    }
  }
  function Fl(e, n, i, l, s, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: n,
          domEventName: i,
          eventSystemFlags: l,
          nativeEvent: u,
          targetContainers: [s],
        }),
        n !== null && ((n = Be(n)), n !== null && Qg(n)),
        e)
      : ((e.eventSystemFlags |= l),
        (n = e.targetContainers),
        s !== null && n.indexOf(s) === -1 && n.push(s),
        e);
  }
  function J2(e, n, i, l, s) {
    switch (n) {
      case "focusin":
        return ($a = Fl($a, e, n, i, l, s)), !0;
      case "dragenter":
        return (Ya = Fl(Ya, e, n, i, l, s)), !0;
      case "mouseover":
        return (Xa = Fl(Xa, e, n, i, l, s)), !0;
      case "pointerover":
        var u = s.pointerId;
        return Xl.set(u, Fl(Xl.get(u) || null, e, n, i, l, s)), !0;
      case "gotpointercapture":
        return (
          (u = s.pointerId), Kl.set(u, Fl(Kl.get(u) || null, e, n, i, l, s)), !0
        );
    }
    return !1;
  }
  function Wg(e) {
    var n = _e(e.target);
    if (n !== null) {
      var i = d(n);
      if (i !== null) {
        if (((n = i.tag), n === 13)) {
          if (((n = f(i)), n !== null)) {
            (e.blockedOn = n),
              R(e.priority, function () {
                if (i.tag === 13) {
                  var l = tn();
                  l = tl(l);
                  var s = sr(i, l);
                  s !== null && nn(s, i, l), Fd(i, l);
                }
              });
            return;
          }
        } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ys(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var i = Zd(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var l = new i.constructor(i.type, i);
        (tu = l), i.target.dispatchEvent(l), (tu = null);
      } else return (n = Be(i)), n !== null && Qg(n), (e.blockedOn = i), !1;
      n.shift();
    }
    return !0;
  }
  function ey(e, n, i) {
    Ys(e) && i.delete(n);
  }
  function W2() {
    (Wd = !1),
      $a !== null && Ys($a) && ($a = null),
      Ya !== null && Ys(Ya) && (Ya = null),
      Xa !== null && Ys(Xa) && (Xa = null),
      Xl.forEach(ey),
      Kl.forEach(ey);
  }
  function Xs(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      Wd ||
        ((Wd = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, W2)));
  }
  var Ks = null;
  function ty(e) {
    Ks !== e &&
      ((Ks = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Ks === e && (Ks = null);
        for (var n = 0; n < e.length; n += 3) {
          var i = e[n],
            l = e[n + 1],
            s = e[n + 2];
          if (typeof l != "function") {
            if (Jd(l || i) === null) continue;
            break;
          }
          var u = Be(i);
          u !== null &&
            (e.splice(n, 3),
            (n -= 3),
            Ju(u, { pending: !0, data: s, method: i.method, action: l }, l, s));
        }
      }));
  }
  function Ql(e) {
    function n(_) {
      return Xs(_, e);
    }
    $a !== null && Xs($a, e),
      Ya !== null && Xs(Ya, e),
      Xa !== null && Xs(Xa, e),
      Xl.forEach(n),
      Kl.forEach(n);
    for (var i = 0; i < Ka.length; i++) {
      var l = Ka[i];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Ka.length && ((i = Ka[0]), i.blockedOn === null); )
      Wg(i), i.blockedOn === null && Ka.shift();
    if (((i = (e.ownerDocument || e).$$reactFormReplay), i != null))
      for (l = 0; l < i.length; l += 3) {
        var s = i[l],
          u = i[l + 1],
          m = s[J] || null;
        if (typeof u == "function") m || ty(i);
        else if (m) {
          var y = null;
          if (u && u.hasAttribute("formAction")) {
            if (((s = u), (m = u[J] || null))) y = m.formAction;
            else if (Jd(s) !== null) continue;
          } else y = m.action;
          typeof y == "function" ? (i[l + 1] = y) : (i.splice(l, 3), (l -= 3)),
            ty(i);
        }
      }
  }
  function ef(e) {
    this._internalRoot = e;
  }
  (Fs.prototype.render = ef.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(o(409));
      var i = n.current,
        l = tn();
      Kg(i, l, e, n, null, null);
    }),
    (Fs.prototype.unmount = ef.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          Kg(e.current, 2, null, e, null, null), Ds(), (n[oe] = null);
        }
      });
  function Fs(e) {
    this._internalRoot = e;
  }
  Fs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = S();
      e = { blockedOn: null, target: e, priority: n };
      for (var i = 0; i < Ka.length && n !== 0 && n < Ka[i].priority; i++);
      Ka.splice(i, 0, e), i === 0 && Wg(e);
    }
  };
  var ny = t.version;
  if (ny !== "19.1.0") throw Error(o(527, ny, "19.1.0"));
  Z.findDOMNode = function (e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function"
        ? Error(o(188))
        : ((e = Object.keys(e).join(",")), Error(o(268, e)));
    return (
      (e = h(n)),
      (e = e !== null ? g(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var e1 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qs.isDisabled && Qs.supportsFiber)
      try {
        (Ht = Qs.inject(e1)), (lt = Qs);
      } catch {}
  }
  return (
    (Jl.createRoot = function (e, n) {
      if (!c(e)) throw Error(o(299));
      var i = !1,
        l = "",
        s = vp,
        u = bp,
        m = wp,
        y = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
          n.onCaughtError !== void 0 && (u = n.onCaughtError),
          n.onRecoverableError !== void 0 && (m = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (y = n.unstable_transitionCallbacks)),
        (n = Yg(e, 1, !1, null, null, i, l, s, u, m, y, null)),
        (e[oe] = n.current),
        Ud(e),
        new ef(n)
      );
    }),
    (Jl.hydrateRoot = function (e, n, i) {
      if (!c(e)) throw Error(o(299));
      var l = !1,
        s = "",
        u = vp,
        m = bp,
        y = wp,
        _ = null,
        k = null;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (l = !0),
          i.identifierPrefix !== void 0 && (s = i.identifierPrefix),
          i.onUncaughtError !== void 0 && (u = i.onUncaughtError),
          i.onCaughtError !== void 0 && (m = i.onCaughtError),
          i.onRecoverableError !== void 0 && (y = i.onRecoverableError),
          i.unstable_transitionCallbacks !== void 0 &&
            (_ = i.unstable_transitionCallbacks),
          i.formState !== void 0 && (k = i.formState)),
        (n = Yg(e, 1, !0, n, i ?? null, l, s, u, m, y, _, k)),
        (n.context = Xg(null)),
        (i = n.current),
        (l = tn()),
        (l = tl(l)),
        (s = Na(l)),
        (s.callback = null),
        Ma(i, s, l),
        (i = l),
        (n.current.lanes = i),
        gi(n, i),
        Gn(n),
        (e[oe] = n.current),
        Ud(e),
        new Fs(n)
      );
    }),
    (Jl.version = "19.1.0"),
    Jl
  );
}
var fy;
function d1() {
  if (fy) return af.exports;
  fy = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (t) {
        console.error(t);
      }
  }
  return a(), (af.exports = u1()), af.exports;
}
var f1 = d1(),
  Wl = {},
  hy;
function h1() {
  if (hy) return Wl;
  (hy = 1),
    Object.defineProperty(Wl, "__esModule", { value: !0 }),
    (Wl.parse = f),
    (Wl.serialize = g);
  const a = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    t = /^[\u0021-\u003A\u003C-\u007E]*$/,
    r =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    o = /^[\u0020-\u003A\u003D-\u007E]*$/,
    c = Object.prototype.toString,
    d = (() => {
      const w = function () {};
      return (w.prototype = Object.create(null)), w;
    })();
  function f(w, O) {
    const M = new d(),
      $ = w.length;
    if ($ < 2) return M;
    const P = (O == null ? void 0 : O.decode) || b;
    let I = 0;
    do {
      const B = w.indexOf("=", I);
      if (B === -1) break;
      const V = w.indexOf(";", I),
        Q = V === -1 ? $ : V;
      if (B > Q) {
        I = w.lastIndexOf(";", B - 1) + 1;
        continue;
      }
      const F = p(w, I, B),
        D = h(w, B, F),
        ee = w.slice(F, D);
      if (M[ee] === void 0) {
        let ne = p(w, B + 1, Q),
          le = h(w, Q, ne);
        const Me = P(w.slice(ne, le));
        M[ee] = Me;
      }
      I = Q + 1;
    } while (I < $);
    return M;
  }
  function p(w, O, M) {
    do {
      const $ = w.charCodeAt(O);
      if ($ !== 32 && $ !== 9) return O;
    } while (++O < M);
    return M;
  }
  function h(w, O, M) {
    for (; O > M; ) {
      const $ = w.charCodeAt(--O);
      if ($ !== 32 && $ !== 9) return O + 1;
    }
    return M;
  }
  function g(w, O, M) {
    const $ = (M == null ? void 0 : M.encode) || encodeURIComponent;
    if (!a.test(w)) throw new TypeError(`argument name is invalid: ${w}`);
    const P = $(O);
    if (!t.test(P)) throw new TypeError(`argument val is invalid: ${O}`);
    let I = w + "=" + P;
    if (!M) return I;
    if (M.maxAge !== void 0) {
      if (!Number.isInteger(M.maxAge))
        throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);
      I += "; Max-Age=" + M.maxAge;
    }
    if (M.domain) {
      if (!r.test(M.domain))
        throw new TypeError(`option domain is invalid: ${M.domain}`);
      I += "; Domain=" + M.domain;
    }
    if (M.path) {
      if (!o.test(M.path))
        throw new TypeError(`option path is invalid: ${M.path}`);
      I += "; Path=" + M.path;
    }
    if (M.expires) {
      if (!E(M.expires) || !Number.isFinite(M.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${M.expires}`);
      I += "; Expires=" + M.expires.toUTCString();
    }
    if (
      (M.httpOnly && (I += "; HttpOnly"),
      M.secure && (I += "; Secure"),
      M.partitioned && (I += "; Partitioned"),
      M.priority)
    )
      switch (
        typeof M.priority == "string" ? M.priority.toLowerCase() : void 0
      ) {
        case "low":
          I += "; Priority=Low";
          break;
        case "medium":
          I += "; Priority=Medium";
          break;
        case "high":
          I += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${M.priority}`);
      }
    if (M.sameSite)
      switch (
        typeof M.sameSite == "string" ? M.sameSite.toLowerCase() : M.sameSite
      ) {
        case !0:
        case "strict":
          I += "; SameSite=Strict";
          break;
        case "lax":
          I += "; SameSite=Lax";
          break;
        case "none":
          I += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${M.sameSite}`);
      }
    return I;
  }
  function b(w) {
    if (w.indexOf("%") === -1) return w;
    try {
      return decodeURIComponent(w);
    } catch {
      return w;
    }
  }
  function E(w) {
    return c.call(w) === "[object Date]";
  }
  return Wl;
}
h1();
/**
 * react-router v7.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Av = (a) => {
    throw TypeError(a);
  },
  m1 = (a, t, r) => t.has(a) || Av("Cannot " + r),
  sf = (a, t, r) => (
    m1(a, t, "read from private field"), r ? r.call(a) : t.get(a)
  ),
  p1 = (a, t, r) =>
    t.has(a)
      ? Av("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(a)
      : t.set(a, r),
  my = "popstate";
function g1(a = {}) {
  function t(o, c) {
    let { pathname: d, search: f, hash: p } = o.location;
    return fo(
      "",
      { pathname: d, search: f, hash: p },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || "default"
    );
  }
  function r(o, c) {
    return typeof c == "string" ? c : li(c);
  }
  return v1(t, r, null, a);
}
function Ae(a, t) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(t);
}
function mt(a, t) {
  if (!a) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function y1() {
  return Math.random().toString(36).substring(2, 10);
}
function py(a, t) {
  return { usr: a.state, key: a.key, idx: t };
}
function fo(a, t, r = null, o) {
  return {
    pathname: typeof a == "string" ? a : a.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? oi(t) : t),
    state: r,
    key: (t && t.key) || o || y1(),
  };
}
function li({ pathname: a = "/", search: t = "", hash: r = "" }) {
  return (
    t && t !== "?" && (a += t.charAt(0) === "?" ? t : "?" + t),
    r && r !== "#" && (a += r.charAt(0) === "#" ? r : "#" + r),
    a
  );
}
function oi(a) {
  let t = {};
  if (a) {
    let r = a.indexOf("#");
    r >= 0 && ((t.hash = a.substring(r)), (a = a.substring(0, r)));
    let o = a.indexOf("?");
    o >= 0 && ((t.search = a.substring(o)), (a = a.substring(0, o))),
      a && (t.pathname = a);
  }
  return t;
}
function v1(a, t, r, o = {}) {
  let { window: c = document.defaultView, v5Compat: d = !1 } = o,
    f = c.history,
    p = "POP",
    h = null,
    g = b();
  g == null && ((g = 0), f.replaceState({ ...f.state, idx: g }, ""));
  function b() {
    return (f.state || { idx: null }).idx;
  }
  function E() {
    p = "POP";
    let P = b(),
      I = P == null ? null : P - g;
    (g = P), h && h({ action: p, location: $.location, delta: I });
  }
  function w(P, I) {
    p = "PUSH";
    let B = fo($.location, P, I);
    g = b() + 1;
    let V = py(B, g),
      Q = $.createHref(B);
    try {
      f.pushState(V, "", Q);
    } catch (F) {
      if (F instanceof DOMException && F.name === "DataCloneError") throw F;
      c.location.assign(Q);
    }
    d && h && h({ action: p, location: $.location, delta: 1 });
  }
  function O(P, I) {
    p = "REPLACE";
    let B = fo($.location, P, I);
    g = b();
    let V = py(B, g),
      Q = $.createHref(B);
    f.replaceState(V, "", Q),
      d && h && h({ action: p, location: $.location, delta: 0 });
  }
  function M(P) {
    return Rv(P);
  }
  let $ = {
    get action() {
      return p;
    },
    get location() {
      return a(c, f);
    },
    listen(P) {
      if (h) throw new Error("A history only accepts one active listener");
      return (
        c.addEventListener(my, E),
        (h = P),
        () => {
          c.removeEventListener(my, E), (h = null);
        }
      );
    },
    createHref(P) {
      return t(c, P);
    },
    createURL: M,
    encodeLocation(P) {
      let I = M(P);
      return { pathname: I.pathname, search: I.search, hash: I.hash };
    },
    push: w,
    replace: O,
    go(P) {
      return f.go(P);
    },
  };
  return $;
}
function Rv(a, t = !1) {
  let r = "http://localhost";
  typeof window < "u" &&
    (r =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Ae(r, "No window.location.(origin|href) available to create URL");
  let o = typeof a == "string" ? a : li(a);
  return (
    (o = o.replace(/ $/, "%20")),
    !t && o.startsWith("//") && (o = r + o),
    new URL(o, r)
  );
}
var ao,
  gy = class {
    constructor(a) {
      if ((p1(this, ao, new Map()), a)) for (let [t, r] of a) this.set(t, r);
    }
    get(a) {
      if (sf(this, ao).has(a)) return sf(this, ao).get(a);
      if (a.defaultValue !== void 0) return a.defaultValue;
      throw new Error("No value found for context");
    }
    set(a, t) {
      sf(this, ao).set(a, t);
    }
  };
ao = new WeakMap();
var b1 = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function w1(a) {
  return b1.has(a);
}
var _1 = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "unstable_middleware",
  "children",
]);
function x1(a) {
  return _1.has(a);
}
function E1(a) {
  return a.index === !0;
}
function cc(a, t, r = [], o = {}) {
  return a.map((c, d) => {
    let f = [...r, String(d)],
      p = typeof c.id == "string" ? c.id : f.join("-");
    if (
      (Ae(
        c.index !== !0 || !c.children,
        "Cannot specify children on an index route"
      ),
      Ae(
        !o[p],
        `Found a route id collision on id "${p}".  Route id's must be globally unique within Data Router usages`
      ),
      E1(c))
    ) {
      let h = { ...c, ...t(c), id: p };
      return (o[p] = h), h;
    } else {
      let h = { ...c, ...t(c), id: p, children: void 0 };
      return (
        (o[p] = h), c.children && (h.children = cc(c.children, t, f, o)), h
      );
    }
  });
}
function Ja(a, t, r = "/") {
  return nc(a, t, r, !1);
}
function nc(a, t, r, o) {
  let c = typeof t == "string" ? oi(t) : t,
    d = xn(c.pathname || "/", r);
  if (d == null) return null;
  let f = Ov(a);
  T1(f);
  let p = null;
  for (let h = 0; p == null && h < f.length; ++h) {
    let g = U1(d);
    p = L1(f[h], g, o);
  }
  return p;
}
function S1(a, t) {
  let { route: r, pathname: o, params: c } = a;
  return { id: r.id, pathname: o, params: c, data: t[r.id], handle: r.handle };
}
function Ov(a, t = [], r = [], o = "") {
  let c = (d, f, p) => {
    let h = {
      relativePath: p === void 0 ? d.path || "" : p,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: f,
      route: d,
    };
    h.relativePath.startsWith("/") &&
      (Ae(
        h.relativePath.startsWith(o),
        `Absolute route path "${h.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (h.relativePath = h.relativePath.slice(o.length)));
    let g = Yn([o, h.relativePath]),
      b = r.concat(h);
    d.children &&
      d.children.length > 0 &&
      (Ae(
        d.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`
      ),
      Ov(d.children, t, b, g)),
      !(d.path == null && !d.index) &&
        t.push({ path: g, score: M1(g, d.index), routesMeta: b });
  };
  return (
    a.forEach((d, f) => {
      var p;
      if (d.path === "" || !((p = d.path) != null && p.includes("?"))) c(d, f);
      else for (let h of Dv(d.path)) c(d, f, h);
    }),
    t
  );
}
function Dv(a) {
  let t = a.split("/");
  if (t.length === 0) return [];
  let [r, ...o] = t,
    c = r.endsWith("?"),
    d = r.replace(/\?$/, "");
  if (o.length === 0) return c ? [d, ""] : [d];
  let f = Dv(o.join("/")),
    p = [];
  return (
    p.push(...f.map((h) => (h === "" ? d : [d, h].join("/")))),
    c && p.push(...f),
    p.map((h) => (a.startsWith("/") && h === "" ? "/" : h))
  );
}
function T1(a) {
  a.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : k1(
          t.routesMeta.map((o) => o.childrenIndex),
          r.routesMeta.map((o) => o.childrenIndex)
        )
  );
}
var C1 = /^:[\w-]+$/,
  A1 = 3,
  R1 = 2,
  O1 = 1,
  D1 = 10,
  N1 = -2,
  yy = (a) => a === "*";
function M1(a, t) {
  let r = a.split("/"),
    o = r.length;
  return (
    r.some(yy) && (o += N1),
    t && (o += R1),
    r
      .filter((c) => !yy(c))
      .reduce((c, d) => c + (C1.test(d) ? A1 : d === "" ? O1 : D1), o)
  );
}
function k1(a, t) {
  return a.length === t.length && a.slice(0, -1).every((o, c) => o === t[c])
    ? a[a.length - 1] - t[t.length - 1]
    : 0;
}
function L1(a, t, r = !1) {
  let { routesMeta: o } = a,
    c = {},
    d = "/",
    f = [];
  for (let p = 0; p < o.length; ++p) {
    let h = o[p],
      g = p === o.length - 1,
      b = d === "/" ? t : t.slice(d.length) || "/",
      E = uc(
        { path: h.relativePath, caseSensitive: h.caseSensitive, end: g },
        b
      ),
      w = h.route;
    if (
      (!E &&
        g &&
        r &&
        !o[o.length - 1].route.index &&
        (E = uc(
          { path: h.relativePath, caseSensitive: h.caseSensitive, end: !1 },
          b
        )),
      !E)
    )
      return null;
    Object.assign(c, E.params),
      f.push({
        params: c,
        pathname: Yn([d, E.pathname]),
        pathnameBase: B1(Yn([d, E.pathnameBase])),
        route: w,
      }),
      E.pathnameBase !== "/" && (d = Yn([d, E.pathnameBase]));
  }
  return f;
}
function uc(a, t) {
  typeof a == "string" && (a = { path: a, caseSensitive: !1, end: !0 });
  let [r, o] = j1(a.path, a.caseSensitive, a.end),
    c = t.match(r);
  if (!c) return null;
  let d = c[0],
    f = d.replace(/(.)\/+$/, "$1"),
    p = c.slice(1);
  return {
    params: o.reduce((g, { paramName: b, isOptional: E }, w) => {
      if (b === "*") {
        let M = p[w] || "";
        f = d.slice(0, d.length - M.length).replace(/(.)\/+$/, "$1");
      }
      const O = p[w];
      return (
        E && !O ? (g[b] = void 0) : (g[b] = (O || "").replace(/%2F/g, "/")), g
      );
    }, {}),
    pathname: d,
    pathnameBase: f,
    pattern: a,
  };
}
function j1(a, t = !1, r = !0) {
  mt(
    a === "*" || !a.endsWith("*") || a.endsWith("/*"),
    `Route path "${a}" will be treated as if it were "${a.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let o = [],
    c =
      "^" +
      a
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, p, h) => (
            o.push({ paramName: p, isOptional: h != null }),
            h ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    a.endsWith("*")
      ? (o.push({ paramName: "*" }),
        (c += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (c += "\\/*$")
      : a !== "" && a !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c, t ? void 0 : "i"), o]
  );
}
function U1(a) {
  try {
    return a
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      mt(
        !1,
        `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      a
    );
  }
}
function xn(a, t) {
  if (t === "/") return a;
  if (!a.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    o = a.charAt(r);
  return o && o !== "/" ? null : a.slice(r) || "/";
}
function z1(a, t = "/") {
  let {
    pathname: r,
    search: o = "",
    hash: c = "",
  } = typeof a == "string" ? oi(a) : a;
  return {
    pathname: r ? (r.startsWith("/") ? r : I1(r, t)) : t,
    search: H1(o),
    hash: P1(c),
  };
}
function I1(a, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    a.split("/").forEach((c) => {
      c === ".." ? r.length > 1 && r.pop() : c !== "." && r.push(c);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function cf(a, t, r, o) {
  return `Cannot include a '${a}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Nv(a) {
  return a.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Nc(a) {
  let t = Nv(a);
  return t.map((r, o) => (o === t.length - 1 ? r.pathname : r.pathnameBase));
}
function Mc(a, t, r, o = !1) {
  let c;
  typeof a == "string"
    ? (c = oi(a))
    : ((c = { ...a }),
      Ae(
        !c.pathname || !c.pathname.includes("?"),
        cf("?", "pathname", "search", c)
      ),
      Ae(
        !c.pathname || !c.pathname.includes("#"),
        cf("#", "pathname", "hash", c)
      ),
      Ae(!c.search || !c.search.includes("#"), cf("#", "search", "hash", c)));
  let d = a === "" || c.pathname === "",
    f = d ? "/" : c.pathname,
    p;
  if (f == null) p = r;
  else {
    let E = t.length - 1;
    if (!o && f.startsWith("..")) {
      let w = f.split("/");
      for (; w[0] === ".."; ) w.shift(), (E -= 1);
      c.pathname = w.join("/");
    }
    p = E >= 0 ? t[E] : "/";
  }
  let h = z1(c, p),
    g = f && f !== "/" && f.endsWith("/"),
    b = (d || f === ".") && r.endsWith("/");
  return !h.pathname.endsWith("/") && (g || b) && (h.pathname += "/"), h;
}
var Yn = (a) => a.join("/").replace(/\/\/+/g, "/"),
  B1 = (a) => a.replace(/\/+$/, "").replace(/^\/*/, "/"),
  H1 = (a) => (!a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a),
  P1 = (a) => (!a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a),
  dc = class {
    constructor(a, t, r, o = !1) {
      (this.status = a),
        (this.statusText = t || ""),
        (this.internal = o),
        r instanceof Error
          ? ((this.data = r.toString()), (this.error = r))
          : (this.data = r);
    }
  };
function ho(a) {
  return (
    a != null &&
    typeof a.status == "number" &&
    typeof a.statusText == "string" &&
    typeof a.internal == "boolean" &&
    "data" in a
  );
}
var Mv = ["POST", "PUT", "PATCH", "DELETE"],
  V1 = new Set(Mv),
  q1 = ["GET", ...Mv],
  G1 = new Set(q1),
  $1 = new Set([301, 302, 303, 307, 308]),
  Y1 = new Set([307, 308]),
  uf = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  X1 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  eo = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Gf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  K1 = (a) => ({ hasErrorBoundary: !!a.hasErrorBoundary }),
  kv = "remix-router-transitions",
  Lv = Symbol("ResetLoaderData");
function F1(a) {
  const t = a.window ? a.window : typeof window < "u" ? window : void 0,
    r =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u";
  Ae(
    a.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let o = a.hydrationRouteProperties || [],
    c = a.mapRouteProperties || K1,
    d = {},
    f = cc(a.routes, c, void 0, d),
    p,
    h = a.basename || "/",
    g = a.dataStrategy || e_,
    b = { unstable_middleware: !1, ...a.future },
    E = null,
    w = new Set(),
    O = null,
    M = null,
    $ = null,
    P = a.hydrationData != null,
    I = Ja(f, a.history.location, h),
    B = !1,
    V = null,
    Q;
  if (I == null && !a.patchRoutesOnNavigation) {
    let S = wn(404, { pathname: a.history.location.pathname }),
      { matches: R, route: z } = Oy(f);
    (Q = !0), (I = R), (V = { [z.id]: S });
  } else if (
    (I &&
      !a.hydrationData &&
      yi(I, f, a.history.location.pathname).active &&
      (I = null),
    I)
  )
    if (I.some((S) => S.route.lazy)) Q = !1;
    else if (!I.some((S) => S.route.loader)) Q = !0;
    else {
      let S = a.hydrationData ? a.hydrationData.loaderData : null,
        R = a.hydrationData ? a.hydrationData.errors : null;
      if (R) {
        let z = I.findIndex((K) => R[K.route.id] !== void 0);
        Q = I.slice(0, z + 1).every((K) => !Sf(K.route, S, R));
      } else Q = I.every((z) => !Sf(z.route, S, R));
    }
  else {
    (Q = !1), (I = []);
    let S = yi(null, f, a.history.location.pathname);
    S.active && S.matches && ((B = !0), (I = S.matches));
  }
  let F,
    D = {
      historyAction: a.history.action,
      location: a.history.location,
      matches: I,
      initialized: Q,
      navigation: uf,
      restoreScrollPosition: a.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (a.hydrationData && a.hydrationData.loaderData) || {},
      actionData: (a.hydrationData && a.hydrationData.actionData) || null,
      errors: (a.hydrationData && a.hydrationData.errors) || V,
      fetchers: new Map(),
      blockers: new Map(),
    },
    ee = "POP",
    ne = !1,
    le,
    Me = !1,
    ze = new Map(),
    Ge = null,
    Re = !1,
    Ie = !1,
    Le = new Set(),
    L = new Map(),
    Z = 0,
    ae = -1,
    xe = new Map(),
    x = new Set(),
    Y = new Map(),
    te = new Map(),
    W = new Set(),
    se = new Map(),
    Oe,
    he = null;
  function kt() {
    if (
      ((E = a.history.listen(({ action: S, location: R, delta: z }) => {
        if (Oe) {
          Oe(), (Oe = void 0);
          return;
        }
        mt(
          se.size === 0 || z != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let K = Ho({
          currentLocation: D.location,
          nextLocation: R,
          historyAction: S,
        });
        if (K && z != null) {
          let J = new Promise((oe) => {
            Oe = oe;
          });
          a.history.go(z * -1),
            Bn(K, {
              state: "blocked",
              location: R,
              proceed() {
                Bn(K, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: R,
                }),
                  J.then(() => a.history.go(z));
              },
              reset() {
                let oe = new Map(D.blockers);
                oe.set(K, eo), vt({ blockers: oe });
              },
            });
          return;
        }
        return Cn(S, R);
      })),
      r)
    ) {
      d_(t, ze);
      let S = () => f_(t, ze);
      t.addEventListener("pagehide", S),
        (Ge = () => t.removeEventListener("pagehide", S));
    }
    return D.initialized || Cn("POP", D.location, { initialHydration: !0 }), F;
  }
  function et() {
    E && E(),
      Ge && Ge(),
      w.clear(),
      le && le.abort(),
      D.fetchers.forEach((S, R) => Tt(R)),
      D.blockers.forEach((S, R) => pi(R));
  }
  function zn(S) {
    return w.add(S), () => w.delete(S);
  }
  function vt(S, R = {}) {
    D = { ...D, ...S };
    let z = [],
      K = [];
    D.fetchers.forEach((J, oe) => {
      J.state === "idle" && (W.has(oe) ? z.push(oe) : K.push(oe));
    }),
      W.forEach((J) => {
        !D.fetchers.has(J) && !L.has(J) && z.push(J);
      }),
      [...w].forEach((J) =>
        J(D, {
          deletedFetchers: z,
          viewTransitionOpts: R.viewTransitionOpts,
          flushSync: R.flushSync === !0,
        })
      ),
      z.forEach((J) => Tt(J)),
      K.forEach((J) => D.fetchers.delete(J));
  }
  function Tn(S, R, { flushSync: z } = {}) {
    var fe, ve;
    let K =
        D.actionData != null &&
        D.navigation.formMethod != null &&
        rn(D.navigation.formMethod) &&
        D.navigation.state === "loading" &&
        ((fe = S.state) == null ? void 0 : fe._isRedirect) !== !0,
      J;
    R.actionData
      ? Object.keys(R.actionData).length > 0
        ? (J = R.actionData)
        : (J = null)
      : K
      ? (J = D.actionData)
      : (J = null);
    let oe = R.loaderData
        ? Ay(D.loaderData, R.loaderData, R.matches || [], R.errors)
        : D.loaderData,
      pe = D.blockers;
    pe.size > 0 && ((pe = new Map(pe)), pe.forEach((ce, _e) => pe.set(_e, eo)));
    let ie =
      ne === !0 ||
      (D.navigation.formMethod != null &&
        rn(D.navigation.formMethod) &&
        ((ve = S.state) == null ? void 0 : ve._isRedirect) !== !0);
    p && ((f = p), (p = void 0)),
      Re ||
        ee === "POP" ||
        (ee === "PUSH"
          ? a.history.push(S, S.state)
          : ee === "REPLACE" && a.history.replace(S, S.state));
    let de;
    if (ee === "POP") {
      let ce = ze.get(D.location.pathname);
      ce && ce.has(S.pathname)
        ? (de = { currentLocation: D.location, nextLocation: S })
        : ze.has(S.pathname) &&
          (de = { currentLocation: S, nextLocation: D.location });
    } else if (Me) {
      let ce = ze.get(D.location.pathname);
      ce
        ? ce.add(S.pathname)
        : ((ce = new Set([S.pathname])), ze.set(D.location.pathname, ce)),
        (de = { currentLocation: D.location, nextLocation: S });
    }
    vt(
      {
        ...R,
        actionData: J,
        loaderData: oe,
        historyAction: ee,
        location: S,
        initialized: !0,
        navigation: uf,
        revalidation: "idle",
        restoreScrollPosition: Vo(S, R.matches || D.matches),
        preventScrollReset: ie,
        blockers: pe,
      },
      { viewTransitionOpts: de, flushSync: z === !0 }
    ),
      (ee = "POP"),
      (ne = !1),
      (Me = !1),
      (Re = !1),
      (Ie = !1),
      he == null || he.resolve(),
      (he = null);
  }
  async function Qi(S, R) {
    if (typeof S == "number") {
      a.history.go(S);
      return;
    }
    let z = Ef(
        D.location,
        D.matches,
        h,
        S,
        R == null ? void 0 : R.fromRouteId,
        R == null ? void 0 : R.relative
      ),
      { path: K, submission: J, error: oe } = vy(!1, z, R),
      pe = D.location,
      ie = fo(D.location, K, R && R.state);
    ie = { ...ie, ...a.history.encodeLocation(ie) };
    let de = R && R.replace != null ? R.replace : void 0,
      fe = "PUSH";
    de === !0
      ? (fe = "REPLACE")
      : de === !1 ||
        (J != null &&
          rn(J.formMethod) &&
          J.formAction === D.location.pathname + D.location.search &&
          (fe = "REPLACE"));
    let ve =
        R && "preventScrollReset" in R ? R.preventScrollReset === !0 : void 0,
      ce = (R && R.flushSync) === !0,
      _e = Ho({ currentLocation: pe, nextLocation: ie, historyAction: fe });
    if (_e) {
      Bn(_e, {
        state: "blocked",
        location: ie,
        proceed() {
          Bn(_e, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: ie,
          }),
            Qi(S, R);
        },
        reset() {
          let Be = new Map(D.blockers);
          Be.set(_e, eo), vt({ blockers: Be });
        },
      });
      return;
    }
    await Cn(fe, ie, {
      submission: J,
      pendingError: oe,
      preventScrollReset: ve,
      replace: R && R.replace,
      enableViewTransition: R && R.viewTransition,
      flushSync: ce,
    });
  }
  function Wr() {
    he || (he = h_()), el(), vt({ revalidation: "loading" });
    let S = he.promise;
    return D.navigation.state === "submitting"
      ? S
      : D.navigation.state === "idle"
      ? (Cn(D.historyAction, D.location, {
          startUninterruptedRevalidation: !0,
        }),
        S)
      : (Cn(ee || D.historyAction, D.navigation.location, {
          overrideNavigation: D.navigation,
          enableViewTransition: Me === !0,
        }),
        S);
  }
  async function Cn(S, R, z) {
    le && le.abort(),
      (le = null),
      (ee = S),
      (Re = (z && z.startUninterruptedRevalidation) === !0),
      gi(D.location, D.matches),
      (ne = (z && z.preventScrollReset) === !0),
      (Me = (z && z.enableViewTransition) === !0);
    let K = p || f,
      J = z && z.overrideNavigation,
      oe =
        z != null &&
        z.initialHydration &&
        D.matches &&
        D.matches.length > 0 &&
        !B
          ? D.matches
          : Ja(K, R, h),
      pe = (z && z.flushSync) === !0;
    if (
      oe &&
      D.initialized &&
      !Ie &&
      l_(D.location, R) &&
      !(z && z.submission && rn(z.submission.formMethod))
    ) {
      Tn(R, { matches: oe }, { flushSync: pe });
      return;
    }
    let ie = yi(oe, K, R.pathname);
    if ((ie.active && ie.matches && (oe = ie.matches), !oe)) {
      let { error: ot, notFoundMatches: He, route: ke } = Ji(R.pathname);
      Tn(
        R,
        { matches: He, loaderData: {}, errors: { [ke.id]: ot } },
        { flushSync: pe }
      );
      return;
    }
    le = new AbortController();
    let de = Lr(a.history, R, le.signal, z && z.submission),
      fe = new gy(
        a.unstable_getContext ? await a.unstable_getContext() : void 0
      ),
      ve;
    if (z && z.pendingError)
      ve = [Ii(oe).route.id, { type: "error", error: z.pendingError }];
    else if (z && z.submission && rn(z.submission.formMethod)) {
      let ot = await Kc(
        de,
        R,
        z.submission,
        oe,
        fe,
        ie.active,
        z && z.initialHydration === !0,
        { replace: z.replace, flushSync: pe }
      );
      if (ot.shortCircuited) return;
      if (ot.pendingActionResult) {
        let [He, ke] = ot.pendingActionResult;
        if (an(ke) && ho(ke.error) && ke.error.status === 404) {
          (le = null),
            Tn(R, {
              matches: ot.matches,
              loaderData: {},
              errors: { [He]: ke.error },
            });
          return;
        }
      }
      (oe = ot.matches || oe),
        (ve = ot.pendingActionResult),
        (J = df(R, z.submission)),
        (pe = !1),
        (ie.active = !1),
        (de = Lr(a.history, de.url, de.signal));
    }
    let {
      shortCircuited: ce,
      matches: _e,
      loaderData: Be,
      errors: at,
    } = await Fc(
      de,
      R,
      oe,
      fe,
      ie.active,
      J,
      z && z.submission,
      z && z.fetcherSubmission,
      z && z.replace,
      z && z.initialHydration === !0,
      pe,
      ve
    );
    ce ||
      ((le = null),
      Tn(R, { matches: _e || oe, ...Ry(ve), loaderData: Be, errors: at }));
  }
  async function Kc(S, R, z, K, J, oe, pe, ie = {}) {
    el();
    let de = c_(R, z);
    if ((vt({ navigation: de }, { flushSync: ie.flushSync === !0 }), oe)) {
      let ce = await vi(K, R.pathname, S.signal);
      if (ce.type === "aborted") return { shortCircuited: !0 };
      if (ce.type === "error") {
        let _e = Ii(ce.partialMatches).route.id;
        return {
          matches: ce.partialMatches,
          pendingActionResult: [_e, { type: "error", error: ce.error }],
        };
      } else if (ce.matches) K = ce.matches;
      else {
        let { notFoundMatches: _e, error: Be, route: at } = Ji(R.pathname);
        return {
          matches: _e,
          pendingActionResult: [at.id, { type: "error", error: Be }],
        };
      }
    }
    let fe,
      ve = io(K, R);
    if (!ve.route.action && !ve.route.lazy)
      fe = {
        type: "error",
        error: wn(405, {
          method: S.method,
          pathname: R.pathname,
          routeId: ve.route.id,
        }),
      };
    else {
      let ce = jr(c, d, S, K, ve, pe ? [] : o, J),
        _e = await Ea(S, ce, J, null);
      if (((fe = _e[ve.route.id]), !fe)) {
        for (let Be of K)
          if (_e[Be.route.id]) {
            fe = _e[Be.route.id];
            break;
          }
      }
      if (S.signal.aborted) return { shortCircuited: !0 };
    }
    if (Bi(fe)) {
      let ce;
      return (
        ie && ie.replace != null
          ? (ce = ie.replace)
          : (ce =
              Sy(fe.response.headers.get("Location"), new URL(S.url), h) ===
              D.location.pathname + D.location.search),
        await Zn(S, fe, !0, { submission: z, replace: ce }),
        { shortCircuited: !0 }
      );
    }
    if (an(fe)) {
      let ce = Ii(K, ve.route.id);
      return (
        (ie && ie.replace) !== !0 && (ee = "PUSH"),
        { matches: K, pendingActionResult: [ce.route.id, fe, ve.route.id] }
      );
    }
    return { matches: K, pendingActionResult: [ve.route.id, fe] };
  }
  async function Fc(S, R, z, K, J, oe, pe, ie, de, fe, ve, ce) {
    let _e = oe || df(R, pe),
      Be = pe || ie || Ny(_e),
      at = !Re && !fe;
    if (J) {
      if (at) {
        let Ot = Ft(ce);
        vt(
          { navigation: _e, ...(Ot !== void 0 ? { actionData: Ot } : {}) },
          { flushSync: ve }
        );
      }
      let Te = await vi(z, R.pathname, S.signal);
      if (Te.type === "aborted") return { shortCircuited: !0 };
      if (Te.type === "error") {
        let Ot = Ii(Te.partialMatches).route.id;
        return {
          matches: Te.partialMatches,
          loaderData: {},
          errors: { [Ot]: Te.error },
        };
      } else if (Te.matches) z = Te.matches;
      else {
        let { error: Ot, notFoundMatches: Rn, route: On } = Ji(R.pathname);
        return { matches: Rn, loaderData: {}, errors: { [On.id]: Ot } };
      }
    }
    let ot = p || f,
      { dsMatches: He, revalidatingFetchers: ke } = by(
        S,
        K,
        c,
        d,
        a.history,
        D,
        z,
        Be,
        R,
        fe ? [] : o,
        fe === !0,
        Ie,
        Le,
        W,
        Y,
        x,
        ot,
        h,
        ce
      );
    if (
      ((ae = ++Z),
      !a.dataStrategy && !He.some((Te) => Te.shouldLoad) && ke.length === 0)
    ) {
      let Te = hi();
      return (
        Tn(
          R,
          {
            matches: z,
            loaderData: {},
            errors: ce && an(ce[1]) ? { [ce[0]]: ce[1].error } : null,
            ...Ry(ce),
            ...(Te ? { fetchers: new Map(D.fetchers) } : {}),
          },
          { flushSync: ve }
        ),
        { shortCircuited: !0 }
      );
    }
    if (at) {
      let Te = {};
      if (!J) {
        Te.navigation = _e;
        let Ot = Ft(ce);
        Ot !== void 0 && (Te.actionData = Ot);
      }
      ke.length > 0 && (Te.fetchers = Qc(ke)), vt(Te, { flushSync: ve });
    }
    ke.forEach((Te) => {
      In(Te.key), Te.controller && L.set(Te.key, Te.controller);
    });
    let Sa = () => ke.forEach((Te) => In(Te.key));
    le && le.signal.addEventListener("abort", Sa);
    let { loaderResults: Lt, fetcherResults: un } = await Io(He, ke, S, K);
    if (S.signal.aborted) return { shortCircuited: !0 };
    le && le.signal.removeEventListener("abort", Sa),
      ke.forEach((Te) => L.delete(Te.key));
    let Pt = Zs(Lt);
    if (Pt)
      return (
        await Zn(S, Pt.result, !0, { replace: de }), { shortCircuited: !0 }
      );
    if (((Pt = Zs(un)), Pt))
      return (
        x.add(Pt.key),
        await Zn(S, Pt.result, !0, { replace: de }),
        { shortCircuited: !0 }
      );
    let { loaderData: Ta, errors: Ca } = Cy(D, z, Lt, ce, ke, un);
    fe && D.errors && (Ca = { ...D.errors, ...Ca });
    let al = hi(),
      dn = mi(ae),
      Wn = al || dn || ke.length > 0;
    return {
      matches: z,
      loaderData: Ta,
      errors: Ca,
      ...(Wn ? { fetchers: new Map(D.fetchers) } : {}),
    };
  }
  function Ft(S) {
    if (S && !an(S[1])) return { [S[0]]: S[1].data };
    if (D.actionData)
      return Object.keys(D.actionData).length === 0 ? null : D.actionData;
  }
  function Qc(S) {
    return (
      S.forEach((R) => {
        let z = D.fetchers.get(R.key),
          K = to(void 0, z ? z.data : void 0);
        D.fetchers.set(R.key, K);
      }),
      new Map(D.fetchers)
    );
  }
  async function Uo(S, R, z, K) {
    In(S);
    let J = (K && K.flushSync) === !0,
      oe = p || f,
      pe = Ef(D.location, D.matches, h, z, R, K == null ? void 0 : K.relative),
      ie = Ja(oe, pe, h),
      de = yi(ie, oe, pe);
    if ((de.active && de.matches && (ie = de.matches), !ie)) {
      lt(S, R, wn(404, { pathname: pe }), { flushSync: J });
      return;
    }
    let { path: fe, submission: ve, error: ce } = vy(!0, pe, K);
    if (ce) {
      lt(S, R, ce, { flushSync: J });
      return;
    }
    let _e = io(ie, fe),
      Be = new gy(
        a.unstable_getContext ? await a.unstable_getContext() : void 0
      ),
      at = (K && K.preventScrollReset) === !0;
    if (ve && rn(ve.formMethod)) {
      await zo(S, R, fe, _e, ie, Be, de.active, J, at, ve);
      return;
    }
    Y.set(S, { routeId: R, path: fe }),
      await Zi(S, R, fe, _e, ie, Be, de.active, J, at, ve);
  }
  async function zo(S, R, z, K, J, oe, pe, ie, de, fe) {
    el(), Y.delete(S);
    function ve(it) {
      if (!it.route.action && !it.route.lazy) {
        let Aa = wn(405, { method: fe.formMethod, pathname: z, routeId: R });
        return lt(S, R, Aa, { flushSync: ie }), !0;
      }
      return !1;
    }
    if (!pe && ve(K)) return;
    let ce = D.fetchers.get(S);
    Ht(S, u_(fe, ce), { flushSync: ie });
    let _e = new AbortController(),
      Be = Lr(a.history, z, _e.signal, fe);
    if (pe) {
      let it = await vi(J, z, Be.signal, S);
      if (it.type === "aborted") return;
      if (it.type === "error") {
        lt(S, R, it.error, { flushSync: ie });
        return;
      } else if (it.matches) {
        if (((J = it.matches), (K = io(J, z)), ve(K))) return;
      } else {
        lt(S, R, wn(404, { pathname: z }), { flushSync: ie });
        return;
      }
    }
    L.set(S, _e);
    let at = Z,
      ot = jr(c, d, Be, J, K, o, oe),
      ke = (await Ea(Be, ot, oe, S))[K.route.id];
    if (Be.signal.aborted) {
      L.get(S) === _e && L.delete(S);
      return;
    }
    if (W.has(S)) {
      if (Bi(ke) || an(ke)) {
        Ht(S, Za(void 0));
        return;
      }
    } else {
      if (Bi(ke))
        if ((L.delete(S), ae > at)) {
          Ht(S, Za(void 0));
          return;
        } else
          return (
            x.add(S),
            Ht(S, to(fe)),
            Zn(Be, ke, !1, { fetcherSubmission: fe, preventScrollReset: de })
          );
      if (an(ke)) {
        lt(S, R, ke.error);
        return;
      }
    }
    let Sa = D.navigation.location || D.location,
      Lt = Lr(a.history, Sa, _e.signal),
      un = p || f,
      Pt =
        D.navigation.state !== "idle"
          ? Ja(un, D.navigation.location, h)
          : D.matches;
    Ae(Pt, "Didn't find any matches after fetcher action");
    let Ta = ++Z;
    xe.set(S, Ta);
    let Ca = to(fe, ke.data);
    D.fetchers.set(S, Ca);
    let { dsMatches: al, revalidatingFetchers: dn } = by(
      Lt,
      oe,
      c,
      d,
      a.history,
      D,
      Pt,
      fe,
      Sa,
      o,
      !1,
      Ie,
      Le,
      W,
      Y,
      x,
      un,
      h,
      [K.route.id, ke]
    );
    dn
      .filter((it) => it.key !== S)
      .forEach((it) => {
        let Aa = it.key,
          il = D.fetchers.get(Aa),
          Vt = to(void 0, il ? il.data : void 0);
        D.fetchers.set(Aa, Vt),
          In(Aa),
          it.controller && L.set(Aa, it.controller);
      }),
      vt({ fetchers: new Map(D.fetchers) });
    let Wn = () => dn.forEach((it) => In(it.key));
    _e.signal.addEventListener("abort", Wn);
    let { loaderResults: Te, fetcherResults: Ot } = await Io(al, dn, Lt, oe);
    if (_e.signal.aborted) return;
    if (
      (_e.signal.removeEventListener("abort", Wn),
      xe.delete(S),
      L.delete(S),
      dn.forEach((it) => L.delete(it.key)),
      D.fetchers.has(S))
    ) {
      let it = Za(ke.data);
      D.fetchers.set(S, it);
    }
    let Rn = Zs(Te);
    if (Rn) return Zn(Lt, Rn.result, !1, { preventScrollReset: de });
    if (((Rn = Zs(Ot)), Rn))
      return x.add(Rn.key), Zn(Lt, Rn.result, !1, { preventScrollReset: de });
    let { loaderData: On, errors: bi } = Cy(D, Pt, Te, void 0, dn, Ot);
    mi(Ta),
      D.navigation.state === "loading" && Ta > ae
        ? (Ae(ee, "Expected pending action"),
          le && le.abort(),
          Tn(D.navigation.location, {
            matches: Pt,
            loaderData: On,
            errors: bi,
            fetchers: new Map(D.fetchers),
          }))
        : (vt({
            errors: bi,
            loaderData: Ay(D.loaderData, On, Pt, bi),
            fetchers: new Map(D.fetchers),
          }),
          (Ie = !1));
  }
  async function Zi(S, R, z, K, J, oe, pe, ie, de, fe) {
    let ve = D.fetchers.get(S);
    Ht(S, to(fe, ve ? ve.data : void 0), { flushSync: ie });
    let ce = new AbortController(),
      _e = Lr(a.history, z, ce.signal);
    if (pe) {
      let ke = await vi(J, z, _e.signal, S);
      if (ke.type === "aborted") return;
      if (ke.type === "error") {
        lt(S, R, ke.error, { flushSync: ie });
        return;
      } else if (ke.matches) (J = ke.matches), (K = io(J, z));
      else {
        lt(S, R, wn(404, { pathname: z }), { flushSync: ie });
        return;
      }
    }
    L.set(S, ce);
    let Be = Z,
      at = jr(c, d, _e, J, K, o, oe),
      He = (await Ea(_e, at, oe, S))[K.route.id];
    if ((L.get(S) === ce && L.delete(S), !_e.signal.aborted)) {
      if (W.has(S)) {
        Ht(S, Za(void 0));
        return;
      }
      if (Bi(He))
        if (ae > Be) {
          Ht(S, Za(void 0));
          return;
        } else {
          x.add(S), await Zn(_e, He, !1, { preventScrollReset: de });
          return;
        }
      if (an(He)) {
        lt(S, R, He.error);
        return;
      }
      Ht(S, Za(He.data));
    }
  }
  async function Zn(
    S,
    R,
    z,
    {
      submission: K,
      fetcherSubmission: J,
      preventScrollReset: oe,
      replace: pe,
    } = {}
  ) {
    R.response.headers.has("X-Remix-Revalidate") && (Ie = !0);
    let ie = R.response.headers.get("Location");
    Ae(ie, "Expected a Location header on the redirect Response"),
      (ie = Sy(ie, new URL(S.url), h));
    let de = fo(D.location, ie, { _isRedirect: !0 });
    if (r) {
      let at = !1;
      if (R.response.headers.has("X-Remix-Reload-Document")) at = !0;
      else if (Gf.test(ie)) {
        const ot = Rv(ie, !0);
        at = ot.origin !== t.location.origin || xn(ot.pathname, h) == null;
      }
      if (at) {
        pe ? t.location.replace(ie) : t.location.assign(ie);
        return;
      }
    }
    le = null;
    let fe =
        pe === !0 || R.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: ve, formAction: ce, formEncType: _e } = D.navigation;
    !K && !J && ve && ce && _e && (K = Ny(D.navigation));
    let Be = K || J;
    if (Y1.has(R.response.status) && Be && rn(Be.formMethod))
      await Cn(fe, de, {
        submission: { ...Be, formAction: ie },
        preventScrollReset: oe || ne,
        enableViewTransition: z ? Me : void 0,
      });
    else {
      let at = df(de, K);
      await Cn(fe, de, {
        overrideNavigation: at,
        fetcherSubmission: J,
        preventScrollReset: oe || ne,
        enableViewTransition: z ? Me : void 0,
      });
    }
  }
  async function Ea(S, R, z, K) {
    let J,
      oe = {};
    try {
      J = await t_(g, S, R, K, z, !1);
    } catch (pe) {
      return (
        R.filter((ie) => ie.shouldLoad).forEach((ie) => {
          oe[ie.route.id] = { type: "error", error: pe };
        }),
        oe
      );
    }
    if (S.signal.aborted) return oe;
    for (let [pe, ie] of Object.entries(J))
      if (o_(ie)) {
        let de = ie.result;
        oe[pe] = { type: "redirect", response: i_(de, S, pe, R, h) };
      } else oe[pe] = await a_(ie);
    return oe;
  }
  async function Io(S, R, z, K) {
    let J = Ea(z, S, K, null),
      oe = Promise.all(
        R.map(async (de) => {
          if (de.matches && de.match && de.request && de.controller) {
            let ve = (await Ea(de.request, de.matches, K, de.key))[
              de.match.route.id
            ];
            return { [de.key]: ve };
          } else
            return Promise.resolve({
              [de.key]: {
                type: "error",
                error: wn(404, { pathname: de.path }),
              },
            });
        })
      ),
      pe = await J,
      ie = (await oe).reduce((de, fe) => Object.assign(de, fe), {});
    return { loaderResults: pe, fetcherResults: ie };
  }
  function el() {
    (Ie = !0),
      Y.forEach((S, R) => {
        L.has(R) && Le.add(R), In(R);
      });
  }
  function Ht(S, R, z = {}) {
    D.fetchers.set(S, R),
      vt(
        { fetchers: new Map(D.fetchers) },
        { flushSync: (z && z.flushSync) === !0 }
      );
  }
  function lt(S, R, z, K = {}) {
    let J = Ii(D.matches, R);
    Tt(S),
      vt(
        { errors: { [J.route.id]: z }, fetchers: new Map(D.fetchers) },
        { flushSync: (K && K.flushSync) === !0 }
      );
  }
  function An(S) {
    return (
      te.set(S, (te.get(S) || 0) + 1),
      W.has(S) && W.delete(S),
      D.fetchers.get(S) || X1
    );
  }
  function Tt(S) {
    let R = D.fetchers.get(S);
    L.has(S) && !(R && R.state === "loading" && xe.has(S)) && In(S),
      Y.delete(S),
      xe.delete(S),
      x.delete(S),
      W.delete(S),
      Le.delete(S),
      D.fetchers.delete(S);
  }
  function Zc(S) {
    let R = (te.get(S) || 0) - 1;
    R <= 0 ? (te.delete(S), W.add(S)) : te.set(S, R),
      vt({ fetchers: new Map(D.fetchers) });
  }
  function In(S) {
    let R = L.get(S);
    R && (R.abort(), L.delete(S));
  }
  function Bo(S) {
    for (let R of S) {
      let z = An(R),
        K = Za(z.data);
      D.fetchers.set(R, K);
    }
  }
  function hi() {
    let S = [],
      R = !1;
    for (let z of x) {
      let K = D.fetchers.get(z);
      Ae(K, `Expected fetcher: ${z}`),
        K.state === "loading" && (x.delete(z), S.push(z), (R = !0));
    }
    return Bo(S), R;
  }
  function mi(S) {
    let R = [];
    for (let [z, K] of xe)
      if (K < S) {
        let J = D.fetchers.get(z);
        Ae(J, `Expected fetcher: ${z}`),
          J.state === "loading" && (In(z), xe.delete(z), R.push(z));
      }
    return Bo(R), R.length > 0;
  }
  function Jn(S, R) {
    let z = D.blockers.get(S) || eo;
    return se.get(S) !== R && se.set(S, R), z;
  }
  function pi(S) {
    D.blockers.delete(S), se.delete(S);
  }
  function Bn(S, R) {
    let z = D.blockers.get(S) || eo;
    Ae(
      (z.state === "unblocked" && R.state === "blocked") ||
        (z.state === "blocked" && R.state === "blocked") ||
        (z.state === "blocked" && R.state === "proceeding") ||
        (z.state === "blocked" && R.state === "unblocked") ||
        (z.state === "proceeding" && R.state === "unblocked"),
      `Invalid blocker state transition: ${z.state} -> ${R.state}`
    );
    let K = new Map(D.blockers);
    K.set(S, R), vt({ blockers: K });
  }
  function Ho({ currentLocation: S, nextLocation: R, historyAction: z }) {
    if (se.size === 0) return;
    se.size > 1 && mt(!1, "A router only supports one blocker at a time");
    let K = Array.from(se.entries()),
      [J, oe] = K[K.length - 1],
      pe = D.blockers.get(J);
    if (
      !(pe && pe.state === "proceeding") &&
      oe({ currentLocation: S, nextLocation: R, historyAction: z })
    )
      return J;
  }
  function Ji(S) {
    let R = wn(404, { pathname: S }),
      z = p || f,
      { matches: K, route: J } = Oy(z);
    return { notFoundMatches: K, route: J, error: R };
  }
  function Po(S, R, z) {
    if (((O = S), ($ = R), (M = z || null), !P && D.navigation === uf)) {
      P = !0;
      let K = Vo(D.location, D.matches);
      K != null && vt({ restoreScrollPosition: K });
    }
    return () => {
      (O = null), ($ = null), (M = null);
    };
  }
  function Wi(S, R) {
    return (
      (M &&
        M(
          S,
          R.map((K) => S1(K, D.loaderData))
        )) ||
      S.key
    );
  }
  function gi(S, R) {
    if (O && $) {
      let z = Wi(S, R);
      O[z] = $();
    }
  }
  function Vo(S, R) {
    if (O) {
      let z = Wi(S, R),
        K = O[z];
      if (typeof K == "number") return K;
    }
    return null;
  }
  function yi(S, R, z) {
    if (a.patchRoutesOnNavigation)
      if (S) {
        if (Object.keys(S[0].params).length > 0)
          return { active: !0, matches: nc(R, z, h, !0) };
      } else return { active: !0, matches: nc(R, z, h, !0) || [] };
    return { active: !1, matches: null };
  }
  async function vi(S, R, z, K) {
    if (!a.patchRoutesOnNavigation) return { type: "success", matches: S };
    let J = S;
    for (;;) {
      let oe = p == null,
        pe = p || f,
        ie = d;
      try {
        await a.patchRoutesOnNavigation({
          signal: z,
          path: R,
          matches: J,
          fetcherKey: K,
          patch: (ve, ce) => {
            z.aborted || wy(ve, ce, pe, ie, c);
          },
        });
      } catch (ve) {
        return { type: "error", error: ve, partialMatches: J };
      } finally {
        oe && !z.aborted && (f = [...f]);
      }
      if (z.aborted) return { type: "aborted" };
      let de = Ja(pe, R, h);
      if (de) return { type: "success", matches: de };
      let fe = nc(pe, R, h, !0);
      if (
        !fe ||
        (J.length === fe.length &&
          J.every((ve, ce) => ve.route.id === fe[ce].route.id))
      )
        return { type: "success", matches: null };
      J = fe;
    }
  }
  function tl(S) {
    (d = {}), (p = cc(S, c, void 0, d));
  }
  function nl(S, R) {
    let z = p == null;
    wy(S, R, p || f, d, c), z && ((f = [...f]), vt({}));
  }
  return (
    (F = {
      get basename() {
        return h;
      },
      get future() {
        return b;
      },
      get state() {
        return D;
      },
      get routes() {
        return f;
      },
      get window() {
        return t;
      },
      initialize: kt,
      subscribe: zn,
      enableScrollRestoration: Po,
      navigate: Qi,
      fetch: Uo,
      revalidate: Wr,
      createHref: (S) => a.history.createHref(S),
      encodeLocation: (S) => a.history.encodeLocation(S),
      getFetcher: An,
      deleteFetcher: Zc,
      dispose: et,
      getBlocker: Jn,
      deleteBlocker: pi,
      patchRoutes: nl,
      _internalFetchControllers: L,
      _internalSetRoutes: tl,
    }),
    F
  );
}
function Q1(a) {
  return (
    a != null &&
    (("formData" in a && a.formData != null) ||
      ("body" in a && a.body !== void 0))
  );
}
function Ef(a, t, r, o, c, d) {
  let f, p;
  if (c) {
    f = [];
    for (let g of t)
      if ((f.push(g), g.route.id === c)) {
        p = g;
        break;
      }
  } else (f = t), (p = t[t.length - 1]);
  let h = Mc(o || ".", Nc(f), xn(a.pathname, r) || a.pathname, d === "path");
  if (
    (o == null && ((h.search = a.search), (h.hash = a.hash)),
    (o == null || o === "" || o === ".") && p)
  ) {
    let g = $f(h.search);
    if (p.route.index && !g)
      h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index";
    else if (!p.route.index && g) {
      let b = new URLSearchParams(h.search),
        E = b.getAll("index");
      b.delete("index"),
        E.filter((O) => O).forEach((O) => b.append("index", O));
      let w = b.toString();
      h.search = w ? `?${w}` : "";
    }
  }
  return (
    r !== "/" && (h.pathname = h.pathname === "/" ? r : Yn([r, h.pathname])),
    li(h)
  );
}
function vy(a, t, r) {
  if (!r || !Q1(r)) return { path: t };
  if (r.formMethod && !s_(r.formMethod))
    return { path: t, error: wn(405, { method: r.formMethod }) };
  let o = () => ({ path: t, error: wn(400, { type: "invalid-body" }) }),
    d = (r.formMethod || "get").toUpperCase(),
    f = Hv(t);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!rn(d)) return o();
      let E =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce(
              (w, [O, M]) => `${w}${O}=${M}
`,
              ""
            )
          : String(r.body);
      return {
        path: t,
        submission: {
          formMethod: d,
          formAction: f,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: E,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!rn(d)) return o();
      try {
        let E = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: t,
          submission: {
            formMethod: d,
            formAction: f,
            formEncType: r.formEncType,
            formData: void 0,
            json: E,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  Ae(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let p, h;
  if (r.formData) (p = Cf(r.formData)), (h = r.formData);
  else if (r.body instanceof FormData) (p = Cf(r.body)), (h = r.body);
  else if (r.body instanceof URLSearchParams) (p = r.body), (h = Ty(p));
  else if (r.body == null) (p = new URLSearchParams()), (h = new FormData());
  else
    try {
      (p = new URLSearchParams(r.body)), (h = Ty(p));
    } catch {
      return o();
    }
  let g = {
    formMethod: d,
    formAction: f,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: h,
    json: void 0,
    text: void 0,
  };
  if (rn(g.formMethod)) return { path: t, submission: g };
  let b = oi(t);
  return (
    a && b.search && $f(b.search) && p.append("index", ""),
    (b.search = `?${p}`),
    { path: li(b), submission: g }
  );
}
function by(a, t, r, o, c, d, f, p, h, g, b, E, w, O, M, $, P, I, B) {
  var Ge;
  let V = B ? (an(B[1]) ? B[1].error : B[1].data) : void 0,
    Q = c.createURL(d.location),
    F = c.createURL(h),
    D;
  if (b && d.errors) {
    let Re = Object.keys(d.errors)[0];
    D = f.findIndex((Ie) => Ie.route.id === Re);
  } else if (B && an(B[1])) {
    let Re = B[0];
    D = f.findIndex((Ie) => Ie.route.id === Re) - 1;
  }
  let ee = B ? B[1].statusCode : void 0,
    ne = ee && ee >= 400,
    le = {
      currentUrl: Q,
      currentParams: ((Ge = d.matches[0]) == null ? void 0 : Ge.params) || {},
      nextUrl: F,
      nextParams: f[0].params,
      ...p,
      actionResult: V,
      actionStatus: ee,
    },
    Me = f.map((Re, Ie) => {
      let { route: Le } = Re,
        L = null;
      if (
        (D != null && Ie > D
          ? (L = !1)
          : Le.lazy
          ? (L = !0)
          : Le.loader == null
          ? (L = !1)
          : b
          ? (L = Sf(Le, d.loaderData, d.errors))
          : Z1(d.loaderData, d.matches[Ie], Re) && (L = !0),
        L !== null)
      )
        return Tf(r, o, a, Re, g, t, L);
      let Z = ne
          ? !1
          : E ||
            Q.pathname + Q.search === F.pathname + F.search ||
            Q.search !== F.search ||
            J1(d.matches[Ie], Re),
        ae = { ...le, defaultShouldRevalidate: Z },
        xe = fc(Re, ae);
      return Tf(r, o, a, Re, g, t, xe, ae);
    }),
    ze = [];
  return (
    M.forEach((Re, Ie) => {
      if (b || !f.some((Y) => Y.route.id === Re.routeId) || O.has(Ie)) return;
      let Le = Ja(P, Re.path, I);
      if (!Le) {
        ze.push({
          key: Ie,
          routeId: Re.routeId,
          path: Re.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if ($.has(Ie)) return;
      let L = d.fetchers.get(Ie),
        Z = io(Le, Re.path),
        ae = new AbortController(),
        xe = Lr(c, Re.path, ae.signal),
        x = null;
      if (w.has(Ie)) w.delete(Ie), (x = jr(r, o, xe, Le, Z, g, t));
      else if (L && L.state !== "idle" && L.data === void 0)
        E && (x = jr(r, o, xe, Le, Z, g, t));
      else {
        let Y = { ...le, defaultShouldRevalidate: ne ? !1 : E };
        fc(Z, Y) && (x = jr(r, o, xe, Le, Z, g, t, Y));
      }
      x &&
        ze.push({
          key: Ie,
          routeId: Re.routeId,
          path: Re.path,
          matches: x,
          match: Z,
          request: xe,
          controller: ae,
        });
    }),
    { dsMatches: Me, revalidatingFetchers: ze }
  );
}
function Sf(a, t, r) {
  if (a.lazy) return !0;
  if (!a.loader) return !1;
  let o = t != null && a.id in t,
    c = r != null && r[a.id] !== void 0;
  return !o && c
    ? !1
    : typeof a.loader == "function" && a.loader.hydrate === !0
    ? !0
    : !o && !c;
}
function Z1(a, t, r) {
  let o = !t || r.route.id !== t.route.id,
    c = !a.hasOwnProperty(r.route.id);
  return o || c;
}
function J1(a, t) {
  let r = a.route.path;
  return (
    a.pathname !== t.pathname ||
    (r != null && r.endsWith("*") && a.params["*"] !== t.params["*"])
  );
}
function fc(a, t) {
  if (a.route.shouldRevalidate) {
    let r = a.route.shouldRevalidate(t);
    if (typeof r == "boolean") return r;
  }
  return t.defaultShouldRevalidate;
}
function wy(a, t, r, o, c) {
  let d;
  if (a) {
    let h = o[a];
    Ae(h, `No route found to patch children into: routeId = ${a}`),
      h.children || (h.children = []),
      (d = h.children);
  } else d = r;
  let f = t.filter((h) => !d.some((g) => jv(h, g))),
    p = cc(
      f,
      c,
      [a || "_", "patch", String((d == null ? void 0 : d.length) || "0")],
      o
    );
  d.push(...p);
}
function jv(a, t) {
  return "id" in a && "id" in t && a.id === t.id
    ? !0
    : a.index === t.index &&
      a.path === t.path &&
      a.caseSensitive === t.caseSensitive
    ? (!a.children || a.children.length === 0) &&
      (!t.children || t.children.length === 0)
      ? !0
      : a.children.every((r, o) => {
          var c;
          return (c = t.children) == null ? void 0 : c.some((d) => jv(r, d));
        })
    : !1;
}
var _y = new WeakMap(),
  Uv = ({ key: a, route: t, manifest: r, mapRouteProperties: o }) => {
    let c = r[t.id];
    if (
      (Ae(c, "No route found in manifest"),
      !c.lazy || typeof c.lazy != "object")
    )
      return;
    let d = c.lazy[a];
    if (!d) return;
    let f = _y.get(c);
    f || ((f = {}), _y.set(c, f));
    let p = f[a];
    if (p) return p;
    let h = (async () => {
      let g = w1(a),
        E = c[a] !== void 0 && a !== "hasErrorBoundary";
      if (g)
        mt(
          !g,
          "Route property " +
            a +
            " is not a supported lazy route property. This property will be ignored."
        ),
          (f[a] = Promise.resolve());
      else if (E)
        mt(
          !1,
          `Route "${c.id}" has a static property "${a}" defined. The lazy property will be ignored.`
        );
      else {
        let w = await d();
        w != null && (Object.assign(c, { [a]: w }), Object.assign(c, o(c)));
      }
      typeof c.lazy == "object" &&
        ((c.lazy[a] = void 0),
        Object.values(c.lazy).every((w) => w === void 0) && (c.lazy = void 0));
    })();
    return (f[a] = h), h;
  },
  xy = new WeakMap();
function W1(a, t, r, o, c) {
  let d = r[a.id];
  if ((Ae(d, "No route found in manifest"), !a.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof a.lazy == "function") {
    let b = xy.get(d);
    if (b) return { lazyRoutePromise: b, lazyHandlerPromise: b };
    let E = (async () => {
      Ae(typeof a.lazy == "function", "No lazy route function found");
      let w = await a.lazy(),
        O = {};
      for (let M in w) {
        let $ = w[M];
        if ($ === void 0) continue;
        let P = x1(M),
          B = d[M] !== void 0 && M !== "hasErrorBoundary";
        P
          ? mt(
              !P,
              "Route property " +
                M +
                " is not a supported property to be returned from a lazy route function. This property will be ignored."
            )
          : B
          ? mt(
              !B,
              `Route "${d.id}" has a static property "${M}" defined but its lazy function is also returning a value for this property. The lazy route property "${M}" will be ignored.`
            )
          : (O[M] = $);
      }
      Object.assign(d, O), Object.assign(d, { ...o(d), lazy: void 0 });
    })();
    return (
      xy.set(d, E),
      E.catch(() => {}),
      { lazyRoutePromise: E, lazyHandlerPromise: E }
    );
  }
  let f = Object.keys(a.lazy),
    p = [],
    h;
  for (let b of f) {
    if (c && c.includes(b)) continue;
    let E = Uv({ key: b, route: a, manifest: r, mapRouteProperties: o });
    E && (p.push(E), b === t && (h = E));
  }
  let g = p.length > 0 ? Promise.all(p).then(() => {}) : void 0;
  return (
    g == null || g.catch(() => {}),
    h == null || h.catch(() => {}),
    { lazyRoutePromise: g, lazyHandlerPromise: h }
  );
}
async function Ey(a) {
  let t = a.matches.filter((c) => c.shouldLoad),
    r = {};
  return (
    (await Promise.all(t.map((c) => c.resolve()))).forEach((c, d) => {
      r[t[d].route.id] = c;
    }),
    r
  );
}
async function e_(a) {
  return a.matches.some((t) => t.route.unstable_middleware)
    ? zv(
        a,
        !1,
        () => Ey(a),
        (t, r) => ({ [r]: { type: "error", result: t } })
      )
    : Ey(a);
}
async function zv(a, t, r, o) {
  let { matches: c, request: d, params: f, context: p } = a,
    h = { handlerResult: void 0 };
  try {
    let g = c.flatMap((E) =>
        E.route.unstable_middleware
          ? E.route.unstable_middleware.map((w) => [E.route.id, w])
          : []
      ),
      b = await Iv({ request: d, params: f, context: p }, g, t, h, r);
    return t ? b : h.handlerResult;
  } catch (g) {
    if (!h.middlewareError) throw g;
    let b = await o(h.middlewareError.error, h.middlewareError.routeId);
    return h.handlerResult ? Object.assign(h.handlerResult, b) : b;
  }
}
async function Iv(a, t, r, o, c, d = 0) {
  let { request: f } = a;
  if (f.signal.aborted)
    throw f.signal.reason
      ? f.signal.reason
      : new Error(
          `Request aborted without an \`AbortSignal.reason\`: ${f.method} ${f.url}`
        );
  let p = t[d];
  if (!p) return (o.handlerResult = await c()), o.handlerResult;
  let [h, g] = p,
    b = !1,
    E,
    w = async () => {
      if (b) throw new Error("You may only call `next()` once per middleware");
      (b = !0), await Iv(a, t, r, o, c, d + 1);
    };
  try {
    let O = await g(
      { request: a.request, params: a.params, context: a.context },
      w
    );
    return b ? (O === void 0 ? E : O) : w();
  } catch (O) {
    throw (
      (o.middlewareError
        ? o.middlewareError.error !== O &&
          (o.middlewareError = { routeId: h, error: O })
        : (o.middlewareError = { routeId: h, error: O }),
      O)
    );
  }
}
function Bv(a, t, r, o, c) {
  let d = Uv({
      key: "unstable_middleware",
      route: o.route,
      manifest: t,
      mapRouteProperties: a,
    }),
    f = W1(o.route, rn(r.method) ? "action" : "loader", t, a, c);
  return {
    middleware: d,
    route: f.lazyRoutePromise,
    handler: f.lazyHandlerPromise,
  };
}
function Tf(a, t, r, o, c, d, f, p = null) {
  let h = !1,
    g = Bv(a, t, r, o, c);
  return {
    ...o,
    _lazyPromises: g,
    shouldLoad: f,
    unstable_shouldRevalidateArgs: p,
    unstable_shouldCallHandler(b) {
      return (
        (h = !0),
        p
          ? typeof b == "boolean"
            ? fc(o, { ...p, defaultShouldRevalidate: b })
            : fc(o, p)
          : f
      );
    },
    resolve(b) {
      return h ||
        f ||
        (b && r.method === "GET" && (o.route.lazy || o.route.loader))
        ? n_({
            request: r,
            match: o,
            lazyHandlerPromise: g == null ? void 0 : g.handler,
            lazyRoutePromise: g == null ? void 0 : g.route,
            handlerOverride: b,
            scopedContext: d,
          })
        : Promise.resolve({ type: "data", result: void 0 });
    },
  };
}
function jr(a, t, r, o, c, d, f, p = null) {
  return o.map((h) =>
    h.route.id !== c.route.id
      ? {
          ...h,
          shouldLoad: !1,
          unstable_shouldRevalidateArgs: p,
          unstable_shouldCallHandler: () => !1,
          _lazyPromises: Bv(a, t, r, h, d),
          resolve: () => Promise.resolve({ type: "data", result: void 0 }),
        }
      : Tf(a, t, r, h, d, f, !0, p)
  );
}
async function t_(a, t, r, o, c, d) {
  r.some((g) => {
    var b;
    return (b = g._lazyPromises) == null ? void 0 : b.middleware;
  }) &&
    (await Promise.all(
      r.map((g) => {
        var b;
        return (b = g._lazyPromises) == null ? void 0 : b.middleware;
      })
    ));
  let f = { request: t, params: r[0].params, context: c, matches: r },
    h = await a({
      ...f,
      fetcherKey: o,
      unstable_runClientMiddleware: (g) => {
        let b = f;
        return zv(
          b,
          !1,
          () =>
            g({
              ...b,
              fetcherKey: o,
              unstable_runClientMiddleware: () => {
                throw new Error(
                  "Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler"
                );
              },
            }),
          (E, w) => ({ [w]: { type: "error", result: E } })
        );
      },
    });
  try {
    await Promise.all(
      r.flatMap((g) => {
        var b, E;
        return [
          (b = g._lazyPromises) == null ? void 0 : b.handler,
          (E = g._lazyPromises) == null ? void 0 : E.route,
        ];
      })
    );
  } catch {}
  return h;
}
async function n_({
  request: a,
  match: t,
  lazyHandlerPromise: r,
  lazyRoutePromise: o,
  handlerOverride: c,
  scopedContext: d,
}) {
  let f,
    p,
    h = rn(a.method),
    g = h ? "action" : "loader",
    b = (E) => {
      let w,
        O = new Promise((P, I) => (w = I));
      (p = () => w()), a.signal.addEventListener("abort", p);
      let M = (P) =>
          typeof E != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${g}" [routeId: ${t.route.id}]`
                )
              )
            : E(
                { request: a, params: t.params, context: d },
                ...(P !== void 0 ? [P] : [])
              ),
        $ = (async () => {
          try {
            return { type: "data", result: await (c ? c((I) => M(I)) : M()) };
          } catch (P) {
            return { type: "error", result: P };
          }
        })();
      return Promise.race([$, O]);
    };
  try {
    let E = h ? t.route.action : t.route.loader;
    if (r || o)
      if (E) {
        let w,
          [O] = await Promise.all([
            b(E).catch((M) => {
              w = M;
            }),
            r,
            o,
          ]);
        if (w !== void 0) throw w;
        f = O;
      } else {
        await r;
        let w = h ? t.route.action : t.route.loader;
        if (w) [f] = await Promise.all([b(w), o]);
        else if (g === "action") {
          let O = new URL(a.url),
            M = O.pathname + O.search;
          throw wn(405, { method: a.method, pathname: M, routeId: t.route.id });
        } else return { type: "data", result: void 0 };
      }
    else if (E) f = await b(E);
    else {
      let w = new URL(a.url),
        O = w.pathname + w.search;
      throw wn(404, { pathname: O });
    }
  } catch (E) {
    return { type: "error", result: E };
  } finally {
    p && a.signal.removeEventListener("abort", p);
  }
  return f;
}
async function a_(a) {
  var o, c, d, f, p, h;
  let { result: t, type: r } = a;
  if (Pv(t)) {
    let g;
    try {
      let b = t.headers.get("Content-Type");
      b && /\bapplication\/json\b/.test(b)
        ? t.body == null
          ? (g = null)
          : (g = await t.json())
        : (g = await t.text());
    } catch (b) {
      return { type: "error", error: b };
    }
    return r === "error"
      ? {
          type: "error",
          error: new dc(t.status, t.statusText, g),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: "data", data: g, statusCode: t.status, headers: t.headers };
  }
  return r === "error"
    ? Dy(t)
      ? t.data instanceof Error
        ? {
            type: "error",
            error: t.data,
            statusCode: (o = t.init) == null ? void 0 : o.status,
            headers:
              (c = t.init) != null && c.headers
                ? new Headers(t.init.headers)
                : void 0,
          }
        : {
            type: "error",
            error: new dc(
              ((d = t.init) == null ? void 0 : d.status) || 500,
              void 0,
              t.data
            ),
            statusCode: ho(t) ? t.status : void 0,
            headers:
              (f = t.init) != null && f.headers
                ? new Headers(t.init.headers)
                : void 0,
          }
      : { type: "error", error: t, statusCode: ho(t) ? t.status : void 0 }
    : Dy(t)
    ? {
        type: "data",
        data: t.data,
        statusCode: (p = t.init) == null ? void 0 : p.status,
        headers:
          (h = t.init) != null && h.headers
            ? new Headers(t.init.headers)
            : void 0,
      }
    : { type: "data", data: t };
}
function i_(a, t, r, o, c) {
  let d = a.headers.get("Location");
  if (
    (Ae(
      d,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !Gf.test(d))
  ) {
    let f = o.slice(0, o.findIndex((p) => p.route.id === r) + 1);
    (d = Ef(new URL(t.url), f, c, d)), a.headers.set("Location", d);
  }
  return a;
}
function Sy(a, t, r) {
  if (Gf.test(a)) {
    let o = a,
      c = o.startsWith("//") ? new URL(t.protocol + o) : new URL(o),
      d = xn(c.pathname, r) != null;
    if (c.origin === t.origin && d) return c.pathname + c.search + c.hash;
  }
  return a;
}
function Lr(a, t, r, o) {
  let c = a.createURL(Hv(t)).toString(),
    d = { signal: r };
  if (o && rn(o.formMethod)) {
    let { formMethod: f, formEncType: p } = o;
    (d.method = f.toUpperCase()),
      p === "application/json"
        ? ((d.headers = new Headers({ "Content-Type": p })),
          (d.body = JSON.stringify(o.json)))
        : p === "text/plain"
        ? (d.body = o.text)
        : p === "application/x-www-form-urlencoded" && o.formData
        ? (d.body = Cf(o.formData))
        : (d.body = o.formData);
  }
  return new Request(c, d);
}
function Cf(a) {
  let t = new URLSearchParams();
  for (let [r, o] of a.entries())
    t.append(r, typeof o == "string" ? o : o.name);
  return t;
}
function Ty(a) {
  let t = new FormData();
  for (let [r, o] of a.entries()) t.append(r, o);
  return t;
}
function r_(a, t, r, o = !1, c = !1) {
  let d = {},
    f = null,
    p,
    h = !1,
    g = {},
    b = r && an(r[1]) ? r[1].error : void 0;
  return (
    a.forEach((E) => {
      if (!(E.route.id in t)) return;
      let w = E.route.id,
        O = t[w];
      if (
        (Ae(!Bi(O), "Cannot handle redirect results in processLoaderData"),
        an(O))
      ) {
        let M = O.error;
        if ((b !== void 0 && ((M = b), (b = void 0)), (f = f || {}), c))
          f[w] = M;
        else {
          let $ = Ii(a, w);
          f[$.route.id] == null && (f[$.route.id] = M);
        }
        o || (d[w] = Lv),
          h || ((h = !0), (p = ho(O.error) ? O.error.status : 500)),
          O.headers && (g[w] = O.headers);
      } else
        (d[w] = O.data),
          O.statusCode && O.statusCode !== 200 && !h && (p = O.statusCode),
          O.headers && (g[w] = O.headers);
    }),
    b !== void 0 && r && ((f = { [r[0]]: b }), r[2] && (d[r[2]] = void 0)),
    { loaderData: d, errors: f, statusCode: p || 200, loaderHeaders: g }
  );
}
function Cy(a, t, r, o, c, d) {
  let { loaderData: f, errors: p } = r_(t, r, o);
  return (
    c
      .filter((h) => !h.matches || h.matches.some((g) => g.shouldLoad))
      .forEach((h) => {
        let { key: g, match: b, controller: E } = h,
          w = d[g];
        if (
          (Ae(w, "Did not find corresponding fetcher result"),
          !(E && E.signal.aborted))
        )
          if (an(w)) {
            let O = Ii(a.matches, b == null ? void 0 : b.route.id);
            (p && p[O.route.id]) || (p = { ...p, [O.route.id]: w.error }),
              a.fetchers.delete(g);
          } else if (Bi(w)) Ae(!1, "Unhandled fetcher revalidation redirect");
          else {
            let O = Za(w.data);
            a.fetchers.set(g, O);
          }
      }),
    { loaderData: f, errors: p }
  );
}
function Ay(a, t, r, o) {
  let c = Object.entries(t)
    .filter(([, d]) => d !== Lv)
    .reduce((d, [f, p]) => ((d[f] = p), d), {});
  for (let d of r) {
    let f = d.route.id;
    if (
      (!t.hasOwnProperty(f) &&
        a.hasOwnProperty(f) &&
        d.route.loader &&
        (c[f] = a[f]),
      o && o.hasOwnProperty(f))
    )
      break;
  }
  return c;
}
function Ry(a) {
  return a
    ? an(a[1])
      ? { actionData: {} }
      : { actionData: { [a[0]]: a[1].data } }
    : {};
}
function Ii(a, t) {
  return (
    (t ? a.slice(0, a.findIndex((o) => o.route.id === t) + 1) : [...a])
      .reverse()
      .find((o) => o.route.hasErrorBoundary === !0) || a[0]
  );
}
function Oy(a) {
  let t =
    a.length === 1
      ? a[0]
      : a.find((r) => r.index || !r.path || r.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function wn(
  a,
  { pathname: t, routeId: r, method: o, type: c, message: d } = {}
) {
  let f = "Unknown Server Error",
    p = "Unknown @remix-run/router error";
  return (
    a === 400
      ? ((f = "Bad Request"),
        o && t && r
          ? (p = `You made a ${o} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`)
          : c === "invalid-body" && (p = "Unable to encode submission body"))
      : a === 403
      ? ((f = "Forbidden"), (p = `Route "${r}" does not match URL "${t}"`))
      : a === 404
      ? ((f = "Not Found"), (p = `No route matches URL "${t}"`))
      : a === 405 &&
        ((f = "Method Not Allowed"),
        o && t && r
          ? (p = `You made a ${o.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`)
          : o && (p = `Invalid request method "${o.toUpperCase()}"`)),
    new dc(a || 500, f, new Error(p), !0)
  );
}
function Zs(a) {
  let t = Object.entries(a);
  for (let r = t.length - 1; r >= 0; r--) {
    let [o, c] = t[r];
    if (Bi(c)) return { key: o, result: c };
  }
}
function Hv(a) {
  let t = typeof a == "string" ? oi(a) : a;
  return li({ ...t, hash: "" });
}
function l_(a, t) {
  return a.pathname !== t.pathname || a.search !== t.search
    ? !1
    : a.hash === ""
    ? t.hash !== ""
    : a.hash === t.hash
    ? !0
    : t.hash !== "";
}
function o_(a) {
  return Pv(a.result) && $1.has(a.result.status);
}
function an(a) {
  return a.type === "error";
}
function Bi(a) {
  return (a && a.type) === "redirect";
}
function Dy(a) {
  return (
    typeof a == "object" &&
    a != null &&
    "type" in a &&
    "data" in a &&
    "init" in a &&
    a.type === "DataWithResponseInit"
  );
}
function Pv(a) {
  return (
    a != null &&
    typeof a.status == "number" &&
    typeof a.statusText == "string" &&
    typeof a.headers == "object" &&
    typeof a.body < "u"
  );
}
function s_(a) {
  return G1.has(a.toUpperCase());
}
function rn(a) {
  return V1.has(a.toUpperCase());
}
function $f(a) {
  return new URLSearchParams(a).getAll("index").some((t) => t === "");
}
function io(a, t) {
  let r = typeof t == "string" ? oi(t).search : t.search;
  if (a[a.length - 1].route.index && $f(r || "")) return a[a.length - 1];
  let o = Nv(a);
  return o[o.length - 1];
}
function Ny(a) {
  let {
    formMethod: t,
    formAction: r,
    formEncType: o,
    text: c,
    formData: d,
    json: f,
  } = a;
  if (!(!t || !r || !o)) {
    if (c != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: o,
        formData: void 0,
        json: void 0,
        text: c,
      };
    if (d != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: o,
        formData: d,
        json: void 0,
        text: void 0,
      };
    if (f !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: o,
        formData: void 0,
        json: f,
        text: void 0,
      };
  }
}
function df(a, t) {
  return t
    ? {
        state: "loading",
        location: a,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: a,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function c_(a, t) {
  return {
    state: "submitting",
    location: a,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function to(a, t) {
  return a
    ? {
        state: "loading",
        formMethod: a.formMethod,
        formAction: a.formAction,
        formEncType: a.formEncType,
        formData: a.formData,
        json: a.json,
        text: a.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function u_(a, t) {
  return {
    state: "submitting",
    formMethod: a.formMethod,
    formAction: a.formAction,
    formEncType: a.formEncType,
    formData: a.formData,
    json: a.json,
    text: a.text,
    data: t ? t.data : void 0,
  };
}
function Za(a) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: a,
  };
}
function d_(a, t) {
  try {
    let r = a.sessionStorage.getItem(kv);
    if (r) {
      let o = JSON.parse(r);
      for (let [c, d] of Object.entries(o || {}))
        d && Array.isArray(d) && t.set(c, new Set(d || []));
    }
  } catch {}
}
function f_(a, t) {
  if (t.size > 0) {
    let r = {};
    for (let [o, c] of t) r[o] = [...c];
    try {
      a.sessionStorage.setItem(kv, JSON.stringify(r));
    } catch (o) {
      mt(
        !1,
        `Failed to save applied view transitions in sessionStorage (${o}).`
      );
    }
  }
}
function h_() {
  let a,
    t,
    r = new Promise((o, c) => {
      (a = async (d) => {
        o(d);
        try {
          await r;
        } catch {}
      }),
        (t = async (d) => {
          c(d);
          try {
            await r;
          } catch {}
        });
    });
  return { promise: r, resolve: a, reject: t };
}
var Xi = A.createContext(null);
Xi.displayName = "DataRouter";
var vo = A.createContext(null);
vo.displayName = "DataRouterState";
var Yf = A.createContext({ isTransitioning: !1 });
Yf.displayName = "ViewTransition";
var Vv = A.createContext(new Map());
Vv.displayName = "Fetchers";
var m_ = A.createContext(null);
m_.displayName = "Await";
var jn = A.createContext(null);
jn.displayName = "Navigation";
var kc = A.createContext(null);
kc.displayName = "Location";
var Un = A.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Un.displayName = "Route";
var Xf = A.createContext(null);
Xf.displayName = "RouteError";
function p_(a, { relative: t } = {}) {
  Ae(
    Xr(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: o } = A.useContext(jn),
    { hash: c, pathname: d, search: f } = wo(a, { relative: t }),
    p = d;
  return (
    r !== "/" && (p = d === "/" ? r : Yn([r, d])),
    o.createHref({ pathname: p, search: f, hash: c })
  );
}
function Xr() {
  return A.useContext(kc) != null;
}
function Fn() {
  return (
    Ae(
      Xr(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    A.useContext(kc).location
  );
}
var qv =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Gv(a) {
  A.useContext(jn).static || A.useLayoutEffect(a);
}
function bo() {
  let { isDataRoute: a } = A.useContext(Un);
  return a ? O_() : g_();
}
function g_() {
  Ae(
    Xr(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let a = A.useContext(Xi),
    { basename: t, navigator: r } = A.useContext(jn),
    { matches: o } = A.useContext(Un),
    { pathname: c } = Fn(),
    d = JSON.stringify(Nc(o)),
    f = A.useRef(!1);
  return (
    Gv(() => {
      f.current = !0;
    }),
    A.useCallback(
      (h, g = {}) => {
        if ((mt(f.current, qv), !f.current)) return;
        if (typeof h == "number") {
          r.go(h);
          return;
        }
        let b = Mc(h, JSON.parse(d), c, g.relative === "path");
        a == null &&
          t !== "/" &&
          (b.pathname = b.pathname === "/" ? t : Yn([t, b.pathname])),
          (g.replace ? r.replace : r.push)(b, g.state, g);
      },
      [t, r, d, c, a]
    )
  );
}
var y_ = A.createContext(null);
function v_(a) {
  let t = A.useContext(Un).outlet;
  return t && A.createElement(y_.Provider, { value: a }, t);
}
function wo(a, { relative: t } = {}) {
  let { matches: r } = A.useContext(Un),
    { pathname: o } = Fn(),
    c = JSON.stringify(Nc(r));
  return A.useMemo(() => Mc(a, JSON.parse(c), o, t === "path"), [a, c, o, t]);
}
function b_(a, t, r, o) {
  Ae(
    Xr(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c, static: d } = A.useContext(jn),
    { matches: f } = A.useContext(Un),
    p = f[f.length - 1],
    h = p ? p.params : {},
    g = p ? p.pathname : "/",
    b = p ? p.pathnameBase : "/",
    E = p && p.route;
  {
    let B = (E && E.path) || "";
    Yv(
      g,
      !E || B.endsWith("*") || B.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${
        B === "/" ? "*" : `${B}/*`
      }">.`
    );
  }
  let w = Fn(),
    O;
  O = w;
  let M = O.pathname || "/",
    $ = M;
  if (b !== "/") {
    let B = b.replace(/^\//, "").split("/");
    $ = "/" + M.replace(/^\//, "").split("/").slice(B.length).join("/");
  }
  let P =
    !d && r && r.matches && r.matches.length > 0
      ? r.matches
      : Ja(a, { pathname: $ });
  return (
    mt(
      E || P != null,
      `No routes matched location "${O.pathname}${O.search}${O.hash}" `
    ),
    mt(
      P == null ||
        P[P.length - 1].route.element !== void 0 ||
        P[P.length - 1].route.Component !== void 0 ||
        P[P.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    S_(
      P &&
        P.map((B) =>
          Object.assign({}, B, {
            params: Object.assign({}, h, B.params),
            pathname: Yn([
              b,
              c.encodeLocation
                ? c.encodeLocation(B.pathname).pathname
                : B.pathname,
            ]),
            pathnameBase:
              B.pathnameBase === "/"
                ? b
                : Yn([
                    b,
                    c.encodeLocation
                      ? c.encodeLocation(B.pathnameBase).pathname
                      : B.pathnameBase,
                  ]),
          })
        ),
      f,
      r,
      o
    )
  );
}
function w_() {
  let a = R_(),
    t = ho(a)
      ? `${a.status} ${a.statusText}`
      : a instanceof Error
      ? a.message
      : JSON.stringify(a),
    r = a instanceof Error ? a.stack : null,
    o = "rgba(200,200,200, 0.5)",
    c = { padding: "0.5rem", backgroundColor: o },
    d = { padding: "2px 4px", backgroundColor: o },
    f = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", a),
    (f = A.createElement(
      A.Fragment,
      null,
      A.createElement("p", null, "💿 Hey developer 👋"),
      A.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        A.createElement("code", { style: d }, "ErrorBoundary"),
        " or",
        " ",
        A.createElement("code", { style: d }, "errorElement"),
        " prop on your route."
      )
    )),
    A.createElement(
      A.Fragment,
      null,
      A.createElement("h2", null, "Unexpected Application Error!"),
      A.createElement("h3", { style: { fontStyle: "italic" } }, t),
      r ? A.createElement("pre", { style: c }, r) : null,
      f
    )
  );
}
var __ = A.createElement(w_, null),
  x_ = class extends A.Component {
    constructor(a) {
      super(a),
        (this.state = {
          location: a.location,
          revalidation: a.revalidation,
          error: a.error,
        });
    }
    static getDerivedStateFromError(a) {
      return { error: a };
    }
    static getDerivedStateFromProps(a, t) {
      return t.location !== a.location ||
        (t.revalidation !== "idle" && a.revalidation === "idle")
        ? { error: a.error, location: a.location, revalidation: a.revalidation }
        : {
            error: a.error !== void 0 ? a.error : t.error,
            location: t.location,
            revalidation: a.revalidation || t.revalidation,
          };
    }
    componentDidCatch(a, t) {
      console.error(
        "React Router caught the following error during render",
        a,
        t
      );
    }
    render() {
      return this.state.error !== void 0
        ? A.createElement(
            Un.Provider,
            { value: this.props.routeContext },
            A.createElement(Xf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function E_({ routeContext: a, match: t, children: r }) {
  let o = A.useContext(Xi);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = t.route.id),
    A.createElement(Un.Provider, { value: a }, r)
  );
}
function S_(a, t = [], r = null, o = null) {
  if (a == null) {
    if (!r) return null;
    if (r.errors) a = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      a = r.matches;
    else return null;
  }
  let c = a,
    d = r == null ? void 0 : r.errors;
  if (d != null) {
    let h = c.findIndex(
      (g) => g.route.id && (d == null ? void 0 : d[g.route.id]) !== void 0
    );
    Ae(
      h >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        d
      ).join(",")}`
    ),
      (c = c.slice(0, Math.min(c.length, h + 1)));
  }
  let f = !1,
    p = -1;
  if (r)
    for (let h = 0; h < c.length; h++) {
      let g = c[h];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (p = h),
        g.route.id)
      ) {
        let { loaderData: b, errors: E } = r,
          w =
            g.route.loader &&
            !b.hasOwnProperty(g.route.id) &&
            (!E || E[g.route.id] === void 0);
        if (g.route.lazy || w) {
          (f = !0), p >= 0 ? (c = c.slice(0, p + 1)) : (c = [c[0]]);
          break;
        }
      }
    }
  return c.reduceRight((h, g, b) => {
    let E,
      w = !1,
      O = null,
      M = null;
    r &&
      ((E = d && g.route.id ? d[g.route.id] : void 0),
      (O = g.route.errorElement || __),
      f &&
        (p < 0 && b === 0
          ? (Yv(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (w = !0),
            (M = null))
          : p === b &&
            ((w = !0), (M = g.route.hydrateFallbackElement || null))));
    let $ = t.concat(c.slice(0, b + 1)),
      P = () => {
        let I;
        return (
          E
            ? (I = O)
            : w
            ? (I = M)
            : g.route.Component
            ? (I = A.createElement(g.route.Component, null))
            : g.route.element
            ? (I = g.route.element)
            : (I = h),
          A.createElement(E_, {
            match: g,
            routeContext: { outlet: h, matches: $, isDataRoute: r != null },
            children: I,
          })
        );
      };
    return r && (g.route.ErrorBoundary || g.route.errorElement || b === 0)
      ? A.createElement(x_, {
          location: r.location,
          revalidation: r.revalidation,
          component: O,
          error: E,
          children: P(),
          routeContext: { outlet: null, matches: $, isDataRoute: !0 },
        })
      : P();
  }, null);
}
function Kf(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function T_(a) {
  let t = A.useContext(Xi);
  return Ae(t, Kf(a)), t;
}
function $v(a) {
  let t = A.useContext(vo);
  return Ae(t, Kf(a)), t;
}
function C_(a) {
  let t = A.useContext(Un);
  return Ae(t, Kf(a)), t;
}
function Lc(a) {
  let t = C_(a),
    r = t.matches[t.matches.length - 1];
  return (
    Ae(
      r.route.id,
      `${a} can only be used on routes that contain a unique "id"`
    ),
    r.route.id
  );
}
function A_() {
  return Lc("useRouteId");
}
function jc() {
  let a = $v("useLoaderData"),
    t = Lc("useLoaderData");
  return a.loaderData[t];
}
function R_() {
  var o;
  let a = A.useContext(Xf),
    t = $v("useRouteError"),
    r = Lc("useRouteError");
  return a !== void 0 ? a : (o = t.errors) == null ? void 0 : o[r];
}
function O_() {
  let { router: a } = T_("useNavigate"),
    t = Lc("useNavigate"),
    r = A.useRef(!1);
  return (
    Gv(() => {
      r.current = !0;
    }),
    A.useCallback(
      async (c, d = {}) => {
        mt(r.current, qv),
          r.current &&
            (typeof c == "number"
              ? a.navigate(c)
              : await a.navigate(c, { fromRouteId: t, ...d }));
      },
      [a, t]
    )
  );
}
var My = {};
function Yv(a, t, r) {
  !t && !My[a] && ((My[a] = !0), mt(!1, r));
}
var ky = {};
function Ly(a, t) {
  !a && !ky[t] && ((ky[t] = !0), console.warn(t));
}
function D_(a) {
  let t = {
    hasErrorBoundary:
      a.hasErrorBoundary || a.ErrorBoundary != null || a.errorElement != null,
  };
  return (
    a.Component &&
      (a.element &&
        mt(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        ),
      Object.assign(t, {
        element: A.createElement(a.Component),
        Component: void 0,
      })),
    a.HydrateFallback &&
      (a.hydrateFallbackElement &&
        mt(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        ),
      Object.assign(t, {
        hydrateFallbackElement: A.createElement(a.HydrateFallback),
        HydrateFallback: void 0,
      })),
    a.ErrorBoundary &&
      (a.errorElement &&
        mt(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        ),
      Object.assign(t, {
        errorElement: A.createElement(a.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    t
  );
}
var N_ = ["HydrateFallback", "hydrateFallbackElement"],
  M_ = class {
    constructor() {
      (this.status = "pending"),
        (this.promise = new Promise((t, r) => {
          (this.resolve = (o) => {
            this.status === "pending" && ((this.status = "resolved"), t(o));
          }),
            (this.reject = (o) => {
              this.status === "pending" && ((this.status = "rejected"), r(o));
            });
        }));
    }
  };
function k_({ router: a, flushSync: t }) {
  let [r, o] = A.useState(a.state),
    [c, d] = A.useState(),
    [f, p] = A.useState({ isTransitioning: !1 }),
    [h, g] = A.useState(),
    [b, E] = A.useState(),
    [w, O] = A.useState(),
    M = A.useRef(new Map()),
    $ = A.useCallback(
      (V, { deletedFetchers: Q, flushSync: F, viewTransitionOpts: D }) => {
        V.fetchers.forEach((ne, le) => {
          ne.data !== void 0 && M.current.set(le, ne.data);
        }),
          Q.forEach((ne) => M.current.delete(ne)),
          Ly(
            F === !1 || t != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          );
        let ee =
          a.window != null &&
          a.window.document != null &&
          typeof a.window.document.startViewTransition == "function";
        if (
          (Ly(
            D == null || ee,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
          ),
          !D || !ee)
        ) {
          t && F ? t(() => o(V)) : A.startTransition(() => o(V));
          return;
        }
        if (t && F) {
          t(() => {
            b && (h && h.resolve(), b.skipTransition()),
              p({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: D.currentLocation,
                nextLocation: D.nextLocation,
              });
          });
          let ne = a.window.document.startViewTransition(() => {
            t(() => o(V));
          });
          ne.finished.finally(() => {
            t(() => {
              g(void 0), E(void 0), d(void 0), p({ isTransitioning: !1 });
            });
          }),
            t(() => E(ne));
          return;
        }
        b
          ? (h && h.resolve(),
            b.skipTransition(),
            O({
              state: V,
              currentLocation: D.currentLocation,
              nextLocation: D.nextLocation,
            }))
          : (d(V),
            p({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: D.currentLocation,
              nextLocation: D.nextLocation,
            }));
      },
      [a.window, t, b, h]
    );
  A.useLayoutEffect(() => a.subscribe($), [a, $]),
    A.useEffect(() => {
      f.isTransitioning && !f.flushSync && g(new M_());
    }, [f]),
    A.useEffect(() => {
      if (h && c && a.window) {
        let V = c,
          Q = h.promise,
          F = a.window.document.startViewTransition(async () => {
            A.startTransition(() => o(V)), await Q;
          });
        F.finished.finally(() => {
          g(void 0), E(void 0), d(void 0), p({ isTransitioning: !1 });
        }),
          E(F);
      }
    }, [c, h, a.window]),
    A.useEffect(() => {
      h && c && r.location.key === c.location.key && h.resolve();
    }, [h, b, r.location, c]),
    A.useEffect(() => {
      !f.isTransitioning &&
        w &&
        (d(w.state),
        p({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: w.currentLocation,
          nextLocation: w.nextLocation,
        }),
        O(void 0));
    }, [f.isTransitioning, w]);
  let P = A.useMemo(
      () => ({
        createHref: a.createHref,
        encodeLocation: a.encodeLocation,
        go: (V) => a.navigate(V),
        push: (V, Q, F) =>
          a.navigate(V, {
            state: Q,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
        replace: (V, Q, F) =>
          a.navigate(V, {
            replace: !0,
            state: Q,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
      }),
      [a]
    ),
    I = a.basename || "/",
    B = A.useMemo(
      () => ({ router: a, navigator: P, static: !1, basename: I }),
      [a, P, I]
    );
  return A.createElement(
    A.Fragment,
    null,
    A.createElement(
      Xi.Provider,
      { value: B },
      A.createElement(
        vo.Provider,
        { value: r },
        A.createElement(
          Vv.Provider,
          { value: M.current },
          A.createElement(
            Yf.Provider,
            { value: f },
            A.createElement(
              I_,
              {
                basename: I,
                location: r.location,
                navigationType: r.historyAction,
                navigator: P,
              },
              A.createElement(L_, {
                routes: a.routes,
                future: a.future,
                state: r,
              })
            )
          )
        )
      )
    ),
    null
  );
}
var L_ = A.memo(j_);
function j_({ routes: a, future: t, state: r }) {
  return b_(a, void 0, r, t);
}
function U_({ to: a, replace: t, state: r, relative: o }) {
  Ae(
    Xr(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: c } = A.useContext(jn);
  mt(
    !c,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: d } = A.useContext(Un),
    { pathname: f } = Fn(),
    p = bo(),
    h = Mc(a, Nc(d), f, o === "path"),
    g = JSON.stringify(h);
  return (
    A.useEffect(() => {
      p(JSON.parse(g), { replace: t, state: r, relative: o });
    }, [p, g, o, t, r]),
    null
  );
}
function z_(a) {
  return v_(a.context);
}
function I_({
  basename: a = "/",
  children: t = null,
  location: r,
  navigationType: o = "POP",
  navigator: c,
  static: d = !1,
}) {
  Ae(
    !Xr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let f = a.replace(/^\/*/, "/"),
    p = A.useMemo(
      () => ({ basename: f, navigator: c, static: d, future: {} }),
      [f, c, d]
    );
  typeof r == "string" && (r = oi(r));
  let {
      pathname: h = "/",
      search: g = "",
      hash: b = "",
      state: E = null,
      key: w = "default",
    } = r,
    O = A.useMemo(() => {
      let M = xn(h, f);
      return M == null
        ? null
        : {
            location: { pathname: M, search: g, hash: b, state: E, key: w },
            navigationType: o,
          };
    }, [f, h, g, b, E, w, o]);
  return (
    mt(
      O != null,
      `<Router basename="${f}"> is not able to match the URL "${h}${g}${b}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    O == null
      ? null
      : A.createElement(
          jn.Provider,
          { value: p },
          A.createElement(kc.Provider, { children: t, value: O })
        )
  );
}
var ac = "get",
  ic = "application/x-www-form-urlencoded";
function Uc(a) {
  return a != null && typeof a.tagName == "string";
}
function B_(a) {
  return Uc(a) && a.tagName.toLowerCase() === "button";
}
function H_(a) {
  return Uc(a) && a.tagName.toLowerCase() === "form";
}
function P_(a) {
  return Uc(a) && a.tagName.toLowerCase() === "input";
}
function V_(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function q_(a, t) {
  return a.button === 0 && (!t || t === "_self") && !V_(a);
}
var Js = null;
function G_() {
  if (Js === null)
    try {
      new FormData(document.createElement("form"), 0), (Js = !1);
    } catch {
      Js = !0;
    }
  return Js;
}
var $_ = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function ff(a) {
  return a != null && !$_.has(a)
    ? (mt(
        !1,
        `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ic}"`
      ),
      null)
    : a;
}
function Y_(a, t) {
  let r, o, c, d, f;
  if (H_(a)) {
    let p = a.getAttribute("action");
    (o = p ? xn(p, t) : null),
      (r = a.getAttribute("method") || ac),
      (c = ff(a.getAttribute("enctype")) || ic),
      (d = new FormData(a));
  } else if (B_(a) || (P_(a) && (a.type === "submit" || a.type === "image"))) {
    let p = a.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let h = a.getAttribute("formaction") || p.getAttribute("action");
    if (
      ((o = h ? xn(h, t) : null),
      (r = a.getAttribute("formmethod") || p.getAttribute("method") || ac),
      (c =
        ff(a.getAttribute("formenctype")) ||
        ff(p.getAttribute("enctype")) ||
        ic),
      (d = new FormData(p, a)),
      !G_())
    ) {
      let { name: g, type: b, value: E } = a;
      if (b === "image") {
        let w = g ? `${g}.` : "";
        d.append(`${w}x`, "0"), d.append(`${w}y`, "0");
      } else g && d.append(g, E);
    }
  } else {
    if (Uc(a))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (r = ac), (o = null), (c = ic), (f = a);
  }
  return (
    d && c === "text/plain" && ((f = d), (d = void 0)),
    { action: o, method: r.toLowerCase(), encType: c, formData: d, body: f }
  );
}
function Ff(a, t) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(t);
}
async function X_(a, t) {
  if (a.id in t) return t[a.id];
  try {
    let r = await import(a.module);
    return (t[a.id] = r), r;
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${a.module}\`, reloading page...`
      ),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function K_(a) {
  return a == null
    ? !1
    : a.href == null
    ? a.rel === "preload" &&
      typeof a.imageSrcSet == "string" &&
      typeof a.imageSizes == "string"
    : typeof a.rel == "string" && typeof a.href == "string";
}
async function F_(a, t, r) {
  let o = await Promise.all(
    a.map(async (c) => {
      let d = t.routes[c.route.id];
      if (d) {
        let f = await X_(d, r);
        return f.links ? f.links() : [];
      }
      return [];
    })
  );
  return W_(
    o
      .flat(1)
      .filter(K_)
      .filter((c) => c.rel === "stylesheet" || c.rel === "preload")
      .map((c) =>
        c.rel === "stylesheet"
          ? { ...c, rel: "prefetch", as: "style" }
          : { ...c, rel: "prefetch" }
      )
  );
}
function jy(a, t, r, o, c, d) {
  let f = (h, g) => (r[g] ? h.route.id !== r[g].route.id : !0),
    p = (h, g) => {
      var b;
      return (
        r[g].pathname !== h.pathname ||
        (((b = r[g].route.path) == null ? void 0 : b.endsWith("*")) &&
          r[g].params["*"] !== h.params["*"])
      );
    };
  return d === "assets"
    ? t.filter((h, g) => f(h, g) || p(h, g))
    : d === "data"
    ? t.filter((h, g) => {
        var E;
        let b = o.routes[h.route.id];
        if (!b || !b.hasLoader) return !1;
        if (f(h, g) || p(h, g)) return !0;
        if (h.route.shouldRevalidate) {
          let w = h.route.shouldRevalidate({
            currentUrl: new URL(c.pathname + c.search + c.hash, window.origin),
            currentParams: ((E = r[0]) == null ? void 0 : E.params) || {},
            nextUrl: new URL(a, window.origin),
            nextParams: h.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof w == "boolean") return w;
        }
        return !0;
      })
    : [];
}
function Q_(a, t, { includeHydrateFallback: r } = {}) {
  return Z_(
    a
      .map((o) => {
        let c = t.routes[o.route.id];
        if (!c) return [];
        let d = [c.module];
        return (
          c.clientActionModule && (d = d.concat(c.clientActionModule)),
          c.clientLoaderModule && (d = d.concat(c.clientLoaderModule)),
          r &&
            c.hydrateFallbackModule &&
            (d = d.concat(c.hydrateFallbackModule)),
          c.imports && (d = d.concat(c.imports)),
          d
        );
      })
      .flat(1)
  );
}
function Z_(a) {
  return [...new Set(a)];
}
function J_(a) {
  let t = {},
    r = Object.keys(a).sort();
  for (let o of r) t[o] = a[o];
  return t;
}
function W_(a, t) {
  let r = new Set();
  return (
    new Set(t),
    a.reduce((o, c) => {
      let d = JSON.stringify(J_(c));
      return r.has(d) || (r.add(d), o.push({ key: d, link: c })), o;
    }, [])
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var ex = new Set([100, 101, 204, 205]);
function tx(a, t) {
  let r =
    typeof a == "string"
      ? new URL(
          a,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : a;
  return (
    r.pathname === "/"
      ? (r.pathname = "_root.data")
      : t && xn(r.pathname, t) === "/"
      ? (r.pathname = `${t.replace(/\/$/, "")}/_root.data`)
      : (r.pathname = `${r.pathname.replace(/\/$/, "")}.data`),
    r
  );
}
function Xv() {
  let a = A.useContext(Xi);
  return (
    Ff(
      a,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    a
  );
}
function nx() {
  let a = A.useContext(vo);
  return (
    Ff(
      a,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    a
  );
}
var Qf = A.createContext(void 0);
Qf.displayName = "FrameworkContext";
function Kv() {
  let a = A.useContext(Qf);
  return (
    Ff(a, "You must render this element inside a <HydratedRouter> element"), a
  );
}
function ax(a, t) {
  let r = A.useContext(Qf),
    [o, c] = A.useState(!1),
    [d, f] = A.useState(!1),
    {
      onFocus: p,
      onBlur: h,
      onMouseEnter: g,
      onMouseLeave: b,
      onTouchStart: E,
    } = t,
    w = A.useRef(null);
  A.useEffect(() => {
    if ((a === "render" && f(!0), a === "viewport")) {
      let $ = (I) => {
          I.forEach((B) => {
            f(B.isIntersecting);
          });
        },
        P = new IntersectionObserver($, { threshold: 0.5 });
      return (
        w.current && P.observe(w.current),
        () => {
          P.disconnect();
        }
      );
    }
  }, [a]),
    A.useEffect(() => {
      if (o) {
        let $ = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout($);
        };
      }
    }, [o]);
  let O = () => {
      c(!0);
    },
    M = () => {
      c(!1), f(!1);
    };
  return r
    ? a !== "intent"
      ? [d, w, {}]
      : [
          d,
          w,
          {
            onFocus: no(p, O),
            onBlur: no(h, M),
            onMouseEnter: no(g, O),
            onMouseLeave: no(b, M),
            onTouchStart: no(E, O),
          },
        ]
    : [!1, w, {}];
}
function no(a, t) {
  return (r) => {
    a && a(r), r.defaultPrevented || t(r);
  };
}
function ix({ page: a, ...t }) {
  let { router: r } = Xv(),
    o = A.useMemo(() => Ja(r.routes, a, r.basename), [r.routes, a, r.basename]);
  return o ? A.createElement(lx, { page: a, matches: o, ...t }) : null;
}
function rx(a) {
  let { manifest: t, routeModules: r } = Kv(),
    [o, c] = A.useState([]);
  return (
    A.useEffect(() => {
      let d = !1;
      return (
        F_(a, t, r).then((f) => {
          d || c(f);
        }),
        () => {
          d = !0;
        }
      );
    }, [a, t, r]),
    o
  );
}
function lx({ page: a, matches: t, ...r }) {
  let o = Fn(),
    { manifest: c, routeModules: d } = Kv(),
    { basename: f } = Xv(),
    { loaderData: p, matches: h } = nx(),
    g = A.useMemo(() => jy(a, t, h, c, o, "data"), [a, t, h, c, o]),
    b = A.useMemo(() => jy(a, t, h, c, o, "assets"), [a, t, h, c, o]),
    E = A.useMemo(() => {
      if (a === o.pathname + o.search + o.hash) return [];
      let M = new Set(),
        $ = !1;
      if (
        (t.forEach((I) => {
          var V;
          let B = c.routes[I.route.id];
          !B ||
            !B.hasLoader ||
            ((!g.some((Q) => Q.route.id === I.route.id) &&
              I.route.id in p &&
              (V = d[I.route.id]) != null &&
              V.shouldRevalidate) ||
            B.hasClientLoader
              ? ($ = !0)
              : M.add(I.route.id));
        }),
        M.size === 0)
      )
        return [];
      let P = tx(a, f);
      return (
        $ &&
          M.size > 0 &&
          P.searchParams.set(
            "_routes",
            t
              .filter((I) => M.has(I.route.id))
              .map((I) => I.route.id)
              .join(",")
          ),
        [P.pathname + P.search]
      );
    }, [f, p, o, c, g, t, a, d]),
    w = A.useMemo(() => Q_(b, c), [b, c]),
    O = rx(b);
  return A.createElement(
    A.Fragment,
    null,
    E.map((M) =>
      A.createElement("link", {
        key: M,
        rel: "prefetch",
        as: "fetch",
        href: M,
        ...r,
      })
    ),
    w.map((M) =>
      A.createElement("link", { key: M, rel: "modulepreload", href: M, ...r })
    ),
    O.map(({ key: M, link: $ }) => A.createElement("link", { key: M, ...$ }))
  );
}
function ox(...a) {
  return (t) => {
    a.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var Fv =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Fv && (window.__reactRouterVersion = "7.6.0");
} catch {}
function sx(a, t) {
  return F1({
    basename: t == null ? void 0 : t.basename,
    unstable_getContext: t == null ? void 0 : t.unstable_getContext,
    future: t == null ? void 0 : t.future,
    history: g1({ window: t == null ? void 0 : t.window }),
    hydrationData: cx(),
    routes: a,
    mapRouteProperties: D_,
    hydrationRouteProperties: N_,
    dataStrategy: t == null ? void 0 : t.dataStrategy,
    patchRoutesOnNavigation: t == null ? void 0 : t.patchRoutesOnNavigation,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function cx() {
  let a = window == null ? void 0 : window.__staticRouterHydrationData;
  return a && a.errors && (a = { ...a, errors: ux(a.errors) }), a;
}
function ux(a) {
  if (!a) return null;
  let t = Object.entries(a),
    r = {};
  for (let [o, c] of t)
    if (c && c.__type === "RouteErrorResponse")
      r[o] = new dc(c.status, c.statusText, c.data, c.internal === !0);
    else if (c && c.__type === "Error") {
      if (c.__subType) {
        let d = window[c.__subType];
        if (typeof d == "function")
          try {
            let f = new d(c.message);
            (f.stack = ""), (r[o] = f);
          } catch {}
      }
      if (r[o] == null) {
        let d = new Error(c.message);
        (d.stack = ""), (r[o] = d);
      }
    } else r[o] = c;
  return r;
}
var Qv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ln = A.forwardRef(function (
    {
      onClick: t,
      discover: r = "render",
      prefetch: o = "none",
      relative: c,
      reloadDocument: d,
      replace: f,
      state: p,
      target: h,
      to: g,
      preventScrollReset: b,
      viewTransition: E,
      ...w
    },
    O
  ) {
    let { basename: M } = A.useContext(jn),
      $ = typeof g == "string" && Qv.test(g),
      P,
      I = !1;
    if (typeof g == "string" && $ && ((P = g), Fv))
      try {
        let le = new URL(window.location.href),
          Me = g.startsWith("//") ? new URL(le.protocol + g) : new URL(g),
          ze = xn(Me.pathname, M);
        Me.origin === le.origin && ze != null
          ? (g = ze + Me.search + Me.hash)
          : (I = !0);
      } catch {
        mt(
          !1,
          `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let B = p_(g, { relative: c }),
      [V, Q, F] = ax(o, w),
      D = hx(g, {
        replace: f,
        state: p,
        target: h,
        preventScrollReset: b,
        relative: c,
        viewTransition: E,
      });
    function ee(le) {
      t && t(le), le.defaultPrevented || D(le);
    }
    let ne = A.createElement("a", {
      ...w,
      ...F,
      href: P || B,
      onClick: I || d ? t : ee,
      ref: ox(O, Q),
      target: h,
      "data-discover": !$ && r === "render" ? "true" : void 0,
    });
    return V && !$
      ? A.createElement(A.Fragment, null, ne, A.createElement(ix, { page: B }))
      : ne;
  });
ln.displayName = "Link";
var ro = A.forwardRef(function (
  {
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: o = "",
    end: c = !1,
    style: d,
    to: f,
    viewTransition: p,
    children: h,
    ...g
  },
  b
) {
  let E = wo(f, { relative: g.relative }),
    w = Fn(),
    O = A.useContext(vo),
    { navigator: M, basename: $ } = A.useContext(jn),
    P = O != null && vx(E) && p === !0,
    I = M.encodeLocation ? M.encodeLocation(E).pathname : E.pathname,
    B = w.pathname,
    V =
      O && O.navigation && O.navigation.location
        ? O.navigation.location.pathname
        : null;
  r ||
    ((B = B.toLowerCase()),
    (V = V ? V.toLowerCase() : null),
    (I = I.toLowerCase())),
    V && $ && (V = xn(V, $) || V);
  const Q = I !== "/" && I.endsWith("/") ? I.length - 1 : I.length;
  let F = B === I || (!c && B.startsWith(I) && B.charAt(Q) === "/"),
    D =
      V != null &&
      (V === I || (!c && V.startsWith(I) && V.charAt(I.length) === "/")),
    ee = { isActive: F, isPending: D, isTransitioning: P },
    ne = F ? t : void 0,
    le;
  typeof o == "function"
    ? (le = o(ee))
    : (le = [
        o,
        F ? "active" : null,
        D ? "pending" : null,
        P ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Me = typeof d == "function" ? d(ee) : d;
  return A.createElement(
    ln,
    {
      ...g,
      "aria-current": ne,
      className: le,
      ref: b,
      style: Me,
      to: f,
      viewTransition: p,
    },
    typeof h == "function" ? h(ee) : h
  );
});
ro.displayName = "NavLink";
var dx = A.forwardRef(
  (
    {
      discover: a = "render",
      fetcherKey: t,
      navigate: r,
      reloadDocument: o,
      replace: c,
      state: d,
      method: f = ac,
      action: p,
      onSubmit: h,
      relative: g,
      preventScrollReset: b,
      viewTransition: E,
      ...w
    },
    O
  ) => {
    let M = gx(),
      $ = yx(p, { relative: g }),
      P = f.toLowerCase() === "get" ? "get" : "post",
      I = typeof p == "string" && Qv.test(p),
      B = (V) => {
        if ((h && h(V), V.defaultPrevented)) return;
        V.preventDefault();
        let Q = V.nativeEvent.submitter,
          F = (Q == null ? void 0 : Q.getAttribute("formmethod")) || f;
        M(Q || V.currentTarget, {
          fetcherKey: t,
          method: F,
          navigate: r,
          replace: c,
          state: d,
          relative: g,
          preventScrollReset: b,
          viewTransition: E,
        });
      };
    return A.createElement("form", {
      ref: O,
      method: P,
      action: $,
      onSubmit: o ? h : B,
      ...w,
      "data-discover": !I && a === "render" ? "true" : void 0,
    });
  }
);
dx.displayName = "Form";
function fx(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Zv(a) {
  let t = A.useContext(Xi);
  return Ae(t, fx(a)), t;
}
function hx(
  a,
  {
    target: t,
    replace: r,
    state: o,
    preventScrollReset: c,
    relative: d,
    viewTransition: f,
  } = {}
) {
  let p = bo(),
    h = Fn(),
    g = wo(a, { relative: d });
  return A.useCallback(
    (b) => {
      if (q_(b, t)) {
        b.preventDefault();
        let E = r !== void 0 ? r : li(h) === li(g);
        p(a, {
          replace: E,
          state: o,
          preventScrollReset: c,
          relative: d,
          viewTransition: f,
        });
      }
    },
    [h, p, g, r, o, t, a, c, d, f]
  );
}
var mx = 0,
  px = () => `__${String(++mx)}__`;
function gx() {
  let { router: a } = Zv("useSubmit"),
    { basename: t } = A.useContext(jn),
    r = A_();
  return A.useCallback(
    async (o, c = {}) => {
      let { action: d, method: f, encType: p, formData: h, body: g } = Y_(o, t);
      if (c.navigate === !1) {
        let b = c.fetcherKey || px();
        await a.fetch(b, r, c.action || d, {
          preventScrollReset: c.preventScrollReset,
          formData: h,
          body: g,
          formMethod: c.method || f,
          formEncType: c.encType || p,
          flushSync: c.flushSync,
        });
      } else
        await a.navigate(c.action || d, {
          preventScrollReset: c.preventScrollReset,
          formData: h,
          body: g,
          formMethod: c.method || f,
          formEncType: c.encType || p,
          replace: c.replace,
          state: c.state,
          fromRouteId: r,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition,
        });
    },
    [a, t, r]
  );
}
function yx(a, { relative: t } = {}) {
  let { basename: r } = A.useContext(jn),
    o = A.useContext(Un);
  Ae(o, "useFormAction must be used inside a RouteContext");
  let [c] = o.matches.slice(-1),
    d = { ...wo(a || ".", { relative: t }) },
    f = Fn();
  if (a == null) {
    d.search = f.search;
    let p = new URLSearchParams(d.search),
      h = p.getAll("index");
    if (h.some((b) => b === "")) {
      p.delete("index"),
        h.filter((E) => E).forEach((E) => p.append("index", E));
      let b = p.toString();
      d.search = b ? `?${b}` : "";
    }
  }
  return (
    (!a || a === ".") &&
      c.route.index &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (d.pathname = d.pathname === "/" ? r : Yn([r, d.pathname])),
    li(d)
  );
}
function vx(a, t = {}) {
  let r = A.useContext(Yf);
  Ae(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = Zv("useViewTransitionState"),
    c = wo(a, { relative: t.relative });
  if (!r.isTransitioning) return !1;
  let d = xn(r.currentLocation.pathname, o) || r.currentLocation.pathname,
    f = xn(r.nextLocation.pathname, o) || r.nextLocation.pathname;
  return uc(c.pathname, f) != null || uc(c.pathname, d) != null;
}
[...ex];
const bx = () => v.jsx("div", {});
var Jv = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Uy = Ve.createContext && Ve.createContext(Jv),
  wx = ["attr", "size", "title"];
function _x(a, t) {
  if (a == null) return {};
  var r = xx(a, t),
    o,
    c;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    for (c = 0; c < d.length; c++)
      (o = d[c]),
        !(t.indexOf(o) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(a, o) &&
          (r[o] = a[o]);
  }
  return r;
}
function xx(a, t) {
  if (a == null) return {};
  var r = {};
  for (var o in a)
    if (Object.prototype.hasOwnProperty.call(a, o)) {
      if (t.indexOf(o) >= 0) continue;
      r[o] = a[o];
    }
  return r;
}
function hc() {
  return (
    (hc = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var o in r)
              Object.prototype.hasOwnProperty.call(r, o) && (a[o] = r[o]);
          }
          return a;
        }),
    hc.apply(this, arguments)
  );
}
function zy(a, t) {
  var r = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(a);
    t &&
      (o = o.filter(function (c) {
        return Object.getOwnPropertyDescriptor(a, c).enumerable;
      })),
      r.push.apply(r, o);
  }
  return r;
}
function mc(a) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zy(Object(r), !0).forEach(function (o) {
          Ex(a, o, r[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r))
      : zy(Object(r)).forEach(function (o) {
          Object.defineProperty(a, o, Object.getOwnPropertyDescriptor(r, o));
        });
  }
  return a;
}
function Ex(a, t, r) {
  return (
    (t = Sx(t)),
    t in a
      ? Object.defineProperty(a, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (a[t] = r),
    a
  );
}
function Sx(a) {
  var t = Tx(a, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Tx(a, t) {
  if (typeof a != "object" || !a) return a;
  var r = a[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(a, t);
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(a);
}
function Wv(a) {
  return (
    a &&
    a.map((t, r) =>
      Ve.createElement(t.tag, mc({ key: r }, t.attr), Wv(t.child))
    )
  );
}
function si(a) {
  return (t) =>
    Ve.createElement(Cx, hc({ attr: mc({}, a.attr) }, t), Wv(a.child));
}
function Cx(a) {
  var t = (r) => {
    var { attr: o, size: c, title: d } = a,
      f = _x(a, wx),
      p = c || r.size || "1em",
      h;
    return (
      r.className && (h = r.className),
      a.className && (h = (h ? h + " " : "") + a.className),
      Ve.createElement(
        "svg",
        hc(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          o,
          f,
          {
            className: h,
            style: mc(mc({ color: a.color || r.color }, r.style), a.style),
            height: p,
            width: p,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        d && Ve.createElement("title", null, d),
        a.children
      )
    );
  };
  return Uy !== void 0
    ? Ve.createElement(Uy.Consumer, null, (r) => t(r))
    : t(Jv);
}
function Ax(a) {
  return si({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
        },
        child: [],
      },
    ],
  })(a);
}
function e0(a) {
  return si({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58A2.01 2.01 0 0 0 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0 0 20 14c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z",
        },
        child: [],
      },
    ],
  })(a);
}
const Rx = () => {};
var Iy = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const t0 = function (a) {
    const t = [];
    let r = 0;
    for (let o = 0; o < a.length; o++) {
      let c = a.charCodeAt(o);
      c < 128
        ? (t[r++] = c)
        : c < 2048
        ? ((t[r++] = (c >> 6) | 192), (t[r++] = (c & 63) | 128))
        : (c & 64512) === 55296 &&
          o + 1 < a.length &&
          (a.charCodeAt(o + 1) & 64512) === 56320
        ? ((c = 65536 + ((c & 1023) << 10) + (a.charCodeAt(++o) & 1023)),
          (t[r++] = (c >> 18) | 240),
          (t[r++] = ((c >> 12) & 63) | 128),
          (t[r++] = ((c >> 6) & 63) | 128),
          (t[r++] = (c & 63) | 128))
        : ((t[r++] = (c >> 12) | 224),
          (t[r++] = ((c >> 6) & 63) | 128),
          (t[r++] = (c & 63) | 128));
    }
    return t;
  },
  Ox = function (a) {
    const t = [];
    let r = 0,
      o = 0;
    for (; r < a.length; ) {
      const c = a[r++];
      if (c < 128) t[o++] = String.fromCharCode(c);
      else if (c > 191 && c < 224) {
        const d = a[r++];
        t[o++] = String.fromCharCode(((c & 31) << 6) | (d & 63));
      } else if (c > 239 && c < 365) {
        const d = a[r++],
          f = a[r++],
          p = a[r++],
          h =
            (((c & 7) << 18) | ((d & 63) << 12) | ((f & 63) << 6) | (p & 63)) -
            65536;
        (t[o++] = String.fromCharCode(55296 + (h >> 10))),
          (t[o++] = String.fromCharCode(56320 + (h & 1023)));
      } else {
        const d = a[r++],
          f = a[r++];
        t[o++] = String.fromCharCode(
          ((c & 15) << 12) | ((d & 63) << 6) | (f & 63)
        );
      }
    }
    return t.join("");
  },
  n0 = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(a, t) {
      if (!Array.isArray(a))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const r = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        o = [];
      for (let c = 0; c < a.length; c += 3) {
        const d = a[c],
          f = c + 1 < a.length,
          p = f ? a[c + 1] : 0,
          h = c + 2 < a.length,
          g = h ? a[c + 2] : 0,
          b = d >> 2,
          E = ((d & 3) << 4) | (p >> 4);
        let w = ((p & 15) << 2) | (g >> 6),
          O = g & 63;
        h || ((O = 64), f || (w = 64)), o.push(r[b], r[E], r[w], r[O]);
      }
      return o.join("");
    },
    encodeString(a, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(a)
        : this.encodeByteArray(t0(a), t);
    },
    decodeString(a, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(a)
        : Ox(this.decodeStringToByteArray(a, t));
    },
    decodeStringToByteArray(a, t) {
      this.init_();
      const r = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        o = [];
      for (let c = 0; c < a.length; ) {
        const d = r[a.charAt(c++)],
          p = c < a.length ? r[a.charAt(c)] : 0;
        ++c;
        const g = c < a.length ? r[a.charAt(c)] : 64;
        ++c;
        const E = c < a.length ? r[a.charAt(c)] : 64;
        if ((++c, d == null || p == null || g == null || E == null))
          throw new Dx();
        const w = (d << 2) | (p >> 4);
        if ((o.push(w), g !== 64)) {
          const O = ((p << 4) & 240) | (g >> 2);
          if ((o.push(O), E !== 64)) {
            const M = ((g << 6) & 192) | E;
            o.push(M);
          }
        }
      }
      return o;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let a = 0; a < this.ENCODED_VALS.length; a++)
          (this.byteToCharMap_[a] = this.ENCODED_VALS.charAt(a)),
            (this.charToByteMap_[this.byteToCharMap_[a]] = a),
            (this.byteToCharMapWebSafe_[a] =
              this.ENCODED_VALS_WEBSAFE.charAt(a)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]] = a),
            a >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)] = a),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)] = a));
      }
    },
  };
class Dx extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const Nx = function (a) {
    const t = t0(a);
    return n0.encodeByteArray(t, !0);
  },
  a0 = function (a) {
    return Nx(a).replace(/\./g, "");
  },
  i0 = function (a) {
    try {
      return n0.decodeString(a, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Mx() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const kx = () => Mx().__FIREBASE_DEFAULTS__,
  Lx = () => {
    if (typeof process > "u" || typeof Iy > "u") return;
    const a = Iy.__FIREBASE_DEFAULTS__;
    if (a) return JSON.parse(a);
  },
  jx = () => {
    if (typeof document > "u") return;
    let a;
    try {
      a = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = a && i0(a[1]);
    return t && JSON.parse(t);
  },
  Zf = () => {
    try {
      return Rx() || kx() || Lx() || jx();
    } catch (a) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);
      return;
    }
  },
  Ux = (a) => {
    var t, r;
    return (r =
      (t = Zf()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || r === void 0
      ? void 0
      : r[a];
  },
  r0 = () => {
    var a;
    return (a = Zf()) === null || a === void 0 ? void 0 : a.config;
  },
  l0 = (a) => {
    var t;
    return (t = Zf()) === null || t === void 0 ? void 0 : t[`_${a}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zx {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, r) => {
        (this.resolve = t), (this.reject = r);
      }));
  }
  wrapCallback(t) {
    return (r, o) => {
      r ? this.reject(r) : this.resolve(o),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(r) : t(r, o));
    };
  }
}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Jf(a) {
  return a.endsWith(".cloudworkstations.dev");
}
async function Ix(a) {
  return (await fetch(a, { credentials: "include" })).ok;
}
const co = {};
function Bx() {
  const a = { prod: [], emulator: [] };
  for (const t of Object.keys(co)) co[t] ? a.emulator.push(t) : a.prod.push(t);
  return a;
}
function Hx(a) {
  let t = document.getElementById(a),
    r = !1;
  return (
    t ||
      ((t = document.createElement("div")), t.setAttribute("id", a), (r = !0)),
    { created: r, element: t }
  );
}
let By = !1;
function o0(a, t) {
  if (
    typeof window > "u" ||
    typeof document > "u" ||
    !Jf(window.location.host) ||
    co[a] === t ||
    co[a] ||
    By
  )
    return;
  co[a] = t;
  function r(w) {
    return `__firebase__banner__${w}`;
  }
  const o = "__firebase__banner",
    d = Bx().prod.length > 0;
  function f() {
    const w = document.getElementById(o);
    w && w.remove();
  }
  function p(w) {
    (w.style.display = "flex"),
      (w.style.background = "#7faaf0"),
      (w.style.position = "fixed"),
      (w.style.bottom = "5px"),
      (w.style.left = "5px"),
      (w.style.padding = ".5em"),
      (w.style.borderRadius = "5px"),
      (w.style.alignItems = "center");
  }
  function h(w, O) {
    w.setAttribute("width", "24"),
      w.setAttribute("id", O),
      w.setAttribute("height", "24"),
      w.setAttribute("viewBox", "0 0 24 24"),
      w.setAttribute("fill", "none"),
      (w.style.marginLeft = "-6px");
  }
  function g() {
    const w = document.createElement("span");
    return (
      (w.style.cursor = "pointer"),
      (w.style.marginLeft = "16px"),
      (w.style.fontSize = "24px"),
      (w.innerHTML = " &times;"),
      (w.onclick = () => {
        (By = !0), f();
      }),
      w
    );
  }
  function b(w, O) {
    w.setAttribute("id", O),
      (w.innerText = "Learn more"),
      (w.href =
        "https://firebase.google.com/docs/studio/preview-apps#preview-backend"),
      w.setAttribute("target", "__blank"),
      (w.style.paddingLeft = "5px"),
      (w.style.textDecoration = "underline");
  }
  function E() {
    const w = Hx(o),
      O = r("text"),
      M = document.getElementById(O) || document.createElement("span"),
      $ = r("learnmore"),
      P = document.getElementById($) || document.createElement("a"),
      I = r("preprendIcon"),
      B =
        document.getElementById(I) ||
        document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (w.created) {
      const V = w.element;
      p(V), b(P, $);
      const Q = g();
      h(B, I), V.append(B, M, P, Q), document.body.appendChild(V);
    }
    d
      ? ((M.innerText = "Preview backend disconnected."),
        (B.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`))
      : ((B.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`),
        (M.innerText = "Preview backend running in this workspace.")),
      M.setAttribute("id", O);
  }
  document.readyState === "loading"
    ? window.addEventListener("DOMContentLoaded", E)
    : E();
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function zt() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function Px() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())
  );
}
function Vx() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function qx() {
  const a =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof a == "object" && a.id !== void 0;
}
function Gx() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function $x() {
  const a = zt();
  return a.indexOf("MSIE ") >= 0 || a.indexOf("Trident/") >= 0;
}
function Yx() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function Xx() {
  return new Promise((a, t) => {
    try {
      let r = !0;
      const o = "validate-browser-context-for-indexeddb-analytics-module",
        c = self.indexedDB.open(o);
      (c.onsuccess = () => {
        c.result.close(), r || self.indexedDB.deleteDatabase(o), a(!0);
      }),
        (c.onupgradeneeded = () => {
          r = !1;
        }),
        (c.onerror = () => {
          var d;
          t(
            ((d = c.error) === null || d === void 0 ? void 0 : d.message) || ""
          );
        });
    } catch (r) {
      t(r);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Kx = "FirebaseError";
class ci extends Error {
  constructor(t, r, o) {
    super(r),
      (this.code = t),
      (this.customData = o),
      (this.name = Kx),
      Object.setPrototypeOf(this, ci.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, _o.prototype.create);
  }
}
class _o {
  constructor(t, r, o) {
    (this.service = t), (this.serviceName = r), (this.errors = o);
  }
  create(t, ...r) {
    const o = r[0] || {},
      c = `${this.service}/${t}`,
      d = this.errors[t],
      f = d ? Fx(d, o) : "Error",
      p = `${this.serviceName}: ${f} (${c}).`;
    return new ci(c, p, o);
  }
}
function Fx(a, t) {
  return a.replace(Qx, (r, o) => {
    const c = t[o];
    return c != null ? String(c) : `<${o}?>`;
  });
}
const Qx = /\{\$([^}]+)}/g;
function Zx(a) {
  for (const t in a) if (Object.prototype.hasOwnProperty.call(a, t)) return !1;
  return !0;
}
function Vr(a, t) {
  if (a === t) return !0;
  const r = Object.keys(a),
    o = Object.keys(t);
  for (const c of r) {
    if (!o.includes(c)) return !1;
    const d = a[c],
      f = t[c];
    if (Hy(d) && Hy(f)) {
      if (!Vr(d, f)) return !1;
    } else if (d !== f) return !1;
  }
  for (const c of o) if (!r.includes(c)) return !1;
  return !0;
}
function Hy(a) {
  return a !== null && typeof a == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function xo(a) {
  const t = [];
  for (const [r, o] of Object.entries(a))
    Array.isArray(o)
      ? o.forEach((c) => {
          t.push(encodeURIComponent(r) + "=" + encodeURIComponent(c));
        })
      : t.push(encodeURIComponent(r) + "=" + encodeURIComponent(o));
  return t.length ? "&" + t.join("&") : "";
}
function lo(a) {
  const t = {};
  return (
    a
      .replace(/^\?/, "")
      .split("&")
      .forEach((o) => {
        if (o) {
          const [c, d] = o.split("=");
          t[decodeURIComponent(c)] = decodeURIComponent(d);
        }
      }),
    t
  );
}
function oo(a) {
  const t = a.indexOf("?");
  if (!t) return "";
  const r = a.indexOf("#", t);
  return a.substring(t, r > 0 ? r : void 0);
}
function Jx(a, t) {
  const r = new Wx(a, t);
  return r.subscribe.bind(r);
}
class Wx {
  constructor(t, r) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = r),
      this.task
        .then(() => {
          t(this);
        })
        .catch((o) => {
          this.error(o);
        });
  }
  next(t) {
    this.forEachObserver((r) => {
      r.next(t);
    });
  }
  error(t) {
    this.forEachObserver((r) => {
      r.error(t);
    }),
      this.close(t);
  }
  complete() {
    this.forEachObserver((t) => {
      t.complete();
    }),
      this.close();
  }
  subscribe(t, r, o) {
    let c;
    if (t === void 0 && r === void 0 && o === void 0)
      throw new Error("Missing Observer.");
    eE(t, ["next", "error", "complete"])
      ? (c = t)
      : (c = { next: t, error: r, complete: o }),
      c.next === void 0 && (c.next = hf),
      c.error === void 0 && (c.error = hf),
      c.complete === void 0 && (c.complete = hf);
    const d = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? c.error(this.finalError) : c.complete();
          } catch {}
        }),
      this.observers.push(c),
      d
    );
  }
  unsubscribeOne(t) {
    this.observers === void 0 ||
      this.observers[t] === void 0 ||
      (delete this.observers[t],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(t) {
    if (!this.finalized)
      for (let r = 0; r < this.observers.length; r++) this.sendOne(r, t);
  }
  sendOne(t, r) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[t] !== void 0)
        try {
          r(this.observers[t]);
        } catch (o) {
          typeof console < "u" && console.error && console.error(o);
        }
    });
  }
  close(t) {
    this.finalized ||
      ((this.finalized = !0),
      t !== void 0 && (this.finalError = t),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function eE(a, t) {
  if (typeof a != "object" || a === null) return !1;
  for (const r of t) if (r in a && typeof a[r] == "function") return !0;
  return !1;
}
function hf() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Qn(a) {
  return a && a._delegate ? a._delegate : a;
}
class qr {
  constructor(t, r, o) {
    (this.name = t),
      (this.instanceFactory = r),
      (this.type = o),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const zi = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tE {
  constructor(t, r) {
    (this.name = t),
      (this.container = r),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const r = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(r)) {
      const o = new zx();
      if (
        (this.instancesDeferred.set(r, o),
        this.isInitialized(r) || this.shouldAutoInitialize())
      )
        try {
          const c = this.getOrInitializeService({ instanceIdentifier: r });
          c && o.resolve(c);
        } catch {}
    }
    return this.instancesDeferred.get(r).promise;
  }
  getImmediate(t) {
    var r;
    const o = this.normalizeInstanceIdentifier(
        t == null ? void 0 : t.identifier
      ),
      c =
        (r = t == null ? void 0 : t.optional) !== null && r !== void 0 ? r : !1;
    if (this.isInitialized(o) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: o });
      } catch (d) {
        if (c) return null;
        throw d;
      }
    else {
      if (c) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (aE(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: zi });
        } catch {}
      for (const [r, o] of this.instancesDeferred.entries()) {
        const c = this.normalizeInstanceIdentifier(r);
        try {
          const d = this.getOrInitializeService({ instanceIdentifier: c });
          o.resolve(d);
        } catch {}
      }
    }
  }
  clearInstance(t = zi) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((r) => "INTERNAL" in r).map((r) => r.INTERNAL.delete()),
      ...t.filter((r) => "_delete" in r).map((r) => r._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = zi) {
    return this.instances.has(t);
  }
  getOptions(t = zi) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: r = {} } = t,
      o = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(o))
      throw Error(`${this.name}(${o}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const c = this.getOrInitializeService({
      instanceIdentifier: o,
      options: r,
    });
    for (const [d, f] of this.instancesDeferred.entries()) {
      const p = this.normalizeInstanceIdentifier(d);
      o === p && f.resolve(c);
    }
    return c;
  }
  onInit(t, r) {
    var o;
    const c = this.normalizeInstanceIdentifier(r),
      d =
        (o = this.onInitCallbacks.get(c)) !== null && o !== void 0
          ? o
          : new Set();
    d.add(t), this.onInitCallbacks.set(c, d);
    const f = this.instances.get(c);
    return (
      f && t(f, c),
      () => {
        d.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, r) {
    const o = this.onInitCallbacks.get(r);
    if (o)
      for (const c of o)
        try {
          c(t, r);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: r = {} }) {
    let o = this.instances.get(t);
    if (
      !o &&
      this.component &&
      ((o = this.component.instanceFactory(this.container, {
        instanceIdentifier: nE(t),
        options: r,
      })),
      this.instances.set(t, o),
      this.instancesOptions.set(t, r),
      this.invokeOnInitCallbacks(o, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, o);
      } catch {}
    return o || null;
  }
  normalizeInstanceIdentifier(t = zi) {
    return this.component ? (this.component.multipleInstances ? t : zi) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function nE(a) {
  return a === zi ? void 0 : a;
}
function aE(a) {
  return a.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iE {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const r = this.getProvider(t.name);
    if (r.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      );
    r.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const r = new tE(t, this);
    return this.providers.set(t, r), r;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var We;
(function (a) {
  (a[(a.DEBUG = 0)] = "DEBUG"),
    (a[(a.VERBOSE = 1)] = "VERBOSE"),
    (a[(a.INFO = 2)] = "INFO"),
    (a[(a.WARN = 3)] = "WARN"),
    (a[(a.ERROR = 4)] = "ERROR"),
    (a[(a.SILENT = 5)] = "SILENT");
})(We || (We = {}));
const rE = {
    debug: We.DEBUG,
    verbose: We.VERBOSE,
    info: We.INFO,
    warn: We.WARN,
    error: We.ERROR,
    silent: We.SILENT,
  },
  lE = We.INFO,
  oE = {
    [We.DEBUG]: "log",
    [We.VERBOSE]: "log",
    [We.INFO]: "info",
    [We.WARN]: "warn",
    [We.ERROR]: "error",
  },
  sE = (a, t, ...r) => {
    if (t < a.logLevel) return;
    const o = new Date().toISOString(),
      c = oE[t];
    if (c) console[c](`[${o}]  ${a.name}:`, ...r);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      );
  };
class s0 {
  constructor(t) {
    (this.name = t),
      (this._logLevel = lE),
      (this._logHandler = sE),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in We))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? rE[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, We.DEBUG, ...t),
      this._logHandler(this, We.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, We.VERBOSE, ...t),
      this._logHandler(this, We.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, We.INFO, ...t),
      this._logHandler(this, We.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, We.WARN, ...t),
      this._logHandler(this, We.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, We.ERROR, ...t),
      this._logHandler(this, We.ERROR, ...t);
  }
}
const cE = (a, t) => t.some((r) => a instanceof r);
let Py, Vy;
function uE() {
  return (
    Py ||
    (Py = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function dE() {
  return (
    Vy ||
    (Vy = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const c0 = new WeakMap(),
  Af = new WeakMap(),
  u0 = new WeakMap(),
  mf = new WeakMap(),
  Wf = new WeakMap();
function fE(a) {
  const t = new Promise((r, o) => {
    const c = () => {
        a.removeEventListener("success", d), a.removeEventListener("error", f);
      },
      d = () => {
        r(ii(a.result)), c();
      },
      f = () => {
        o(a.error), c();
      };
    a.addEventListener("success", d), a.addEventListener("error", f);
  });
  return (
    t
      .then((r) => {
        r instanceof IDBCursor && c0.set(r, a);
      })
      .catch(() => {}),
    Wf.set(t, a),
    t
  );
}
function hE(a) {
  if (Af.has(a)) return;
  const t = new Promise((r, o) => {
    const c = () => {
        a.removeEventListener("complete", d),
          a.removeEventListener("error", f),
          a.removeEventListener("abort", f);
      },
      d = () => {
        r(), c();
      },
      f = () => {
        o(a.error || new DOMException("AbortError", "AbortError")), c();
      };
    a.addEventListener("complete", d),
      a.addEventListener("error", f),
      a.addEventListener("abort", f);
  });
  Af.set(a, t);
}
let Rf = {
  get(a, t, r) {
    if (a instanceof IDBTransaction) {
      if (t === "done") return Af.get(a);
      if (t === "objectStoreNames") return a.objectStoreNames || u0.get(a);
      if (t === "store")
        return r.objectStoreNames[1]
          ? void 0
          : r.objectStore(r.objectStoreNames[0]);
    }
    return ii(a[t]);
  },
  set(a, t, r) {
    return (a[t] = r), !0;
  },
  has(a, t) {
    return a instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in a;
  },
};
function mE(a) {
  Rf = a(Rf);
}
function pE(a) {
  return a === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...r) {
        const o = a.call(pf(this), t, ...r);
        return u0.set(o, t.sort ? t.sort() : [t]), ii(o);
      }
    : dE().includes(a)
    ? function (...t) {
        return a.apply(pf(this), t), ii(c0.get(this));
      }
    : function (...t) {
        return ii(a.apply(pf(this), t));
      };
}
function gE(a) {
  return typeof a == "function"
    ? pE(a)
    : (a instanceof IDBTransaction && hE(a),
      cE(a, uE()) ? new Proxy(a, Rf) : a);
}
function ii(a) {
  if (a instanceof IDBRequest) return fE(a);
  if (mf.has(a)) return mf.get(a);
  const t = gE(a);
  return t !== a && (mf.set(a, t), Wf.set(t, a)), t;
}
const pf = (a) => Wf.get(a);
function yE(a, t, { blocked: r, upgrade: o, blocking: c, terminated: d } = {}) {
  const f = indexedDB.open(a, t),
    p = ii(f);
  return (
    o &&
      f.addEventListener("upgradeneeded", (h) => {
        o(ii(f.result), h.oldVersion, h.newVersion, ii(f.transaction), h);
      }),
    r && f.addEventListener("blocked", (h) => r(h.oldVersion, h.newVersion, h)),
    p
      .then((h) => {
        d && h.addEventListener("close", () => d()),
          c &&
            h.addEventListener("versionchange", (g) =>
              c(g.oldVersion, g.newVersion, g)
            );
      })
      .catch(() => {}),
    p
  );
}
const vE = ["get", "getKey", "getAll", "getAllKeys", "count"],
  bE = ["put", "add", "delete", "clear"],
  gf = new Map();
function qy(a, t) {
  if (!(a instanceof IDBDatabase && !(t in a) && typeof t == "string")) return;
  if (gf.get(t)) return gf.get(t);
  const r = t.replace(/FromIndex$/, ""),
    o = t !== r,
    c = bE.includes(r);
  if (
    !(r in (o ? IDBIndex : IDBObjectStore).prototype) ||
    !(c || vE.includes(r))
  )
    return;
  const d = async function (f, ...p) {
    const h = this.transaction(f, c ? "readwrite" : "readonly");
    let g = h.store;
    return (
      o && (g = g.index(p.shift())),
      (await Promise.all([g[r](...p), c && h.done]))[0]
    );
  };
  return gf.set(t, d), d;
}
mE((a) => ({
  ...a,
  get: (t, r, o) => qy(t, r) || a.get(t, r, o),
  has: (t, r) => !!qy(t, r) || a.has(t, r),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wE {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((r) => {
        if (_E(r)) {
          const o = r.getImmediate();
          return `${o.library}/${o.version}`;
        } else return null;
      })
      .filter((r) => r)
      .join(" ");
  }
}
function _E(a) {
  const t = a.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const Of = "@firebase/app",
  Gy = "0.12.3";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ba = new s0("@firebase/app"),
  xE = "@firebase/app-compat",
  EE = "@firebase/analytics-compat",
  SE = "@firebase/analytics",
  TE = "@firebase/app-check-compat",
  CE = "@firebase/app-check",
  AE = "@firebase/auth",
  RE = "@firebase/auth-compat",
  OE = "@firebase/database",
  DE = "@firebase/data-connect",
  NE = "@firebase/database-compat",
  ME = "@firebase/functions",
  kE = "@firebase/functions-compat",
  LE = "@firebase/installations",
  jE = "@firebase/installations-compat",
  UE = "@firebase/messaging",
  zE = "@firebase/messaging-compat",
  IE = "@firebase/performance",
  BE = "@firebase/performance-compat",
  HE = "@firebase/remote-config",
  PE = "@firebase/remote-config-compat",
  VE = "@firebase/storage",
  qE = "@firebase/storage-compat",
  GE = "@firebase/firestore",
  $E = "@firebase/vertexai",
  YE = "@firebase/firestore-compat",
  XE = "firebase",
  KE = "11.7.3";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Df = "[DEFAULT]",
  FE = {
    [Of]: "fire-core",
    [xE]: "fire-core-compat",
    [SE]: "fire-analytics",
    [EE]: "fire-analytics-compat",
    [CE]: "fire-app-check",
    [TE]: "fire-app-check-compat",
    [AE]: "fire-auth",
    [RE]: "fire-auth-compat",
    [OE]: "fire-rtdb",
    [DE]: "fire-data-connect",
    [NE]: "fire-rtdb-compat",
    [ME]: "fire-fn",
    [kE]: "fire-fn-compat",
    [LE]: "fire-iid",
    [jE]: "fire-iid-compat",
    [UE]: "fire-fcm",
    [zE]: "fire-fcm-compat",
    [IE]: "fire-perf",
    [BE]: "fire-perf-compat",
    [HE]: "fire-rc",
    [PE]: "fire-rc-compat",
    [VE]: "fire-gcs",
    [qE]: "fire-gcs-compat",
    [GE]: "fire-fst",
    [YE]: "fire-fst-compat",
    [$E]: "fire-vertex",
    "fire-js": "fire-js",
    [XE]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const pc = new Map(),
  QE = new Map(),
  Nf = new Map();
function $y(a, t) {
  try {
    a.container.addComponent(t);
  } catch (r) {
    ba.debug(
      `Component ${t.name} failed to register with FirebaseApp ${a.name}`,
      r
    );
  }
}
function mo(a) {
  const t = a.name;
  if (Nf.has(t))
    return (
      ba.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  Nf.set(t, a);
  for (const r of pc.values()) $y(r, a);
  for (const r of QE.values()) $y(r, a);
  return !0;
}
function d0(a, t) {
  const r = a.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return r && r.triggerHeartbeat(), a.container.getProvider(t);
}
function _n(a) {
  return a == null ? !1 : a.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ZE = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  ri = new _o("app", "Firebase", ZE);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class JE {
  constructor(t, r, o) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, r)),
      (this._name = r.name),
      (this._automaticDataCollectionEnabled = r.automaticDataCollectionEnabled),
      (this._container = o),
      this.container.addComponent(new qr("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw ri.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Eo = KE;
function f0(a, t = {}) {
  let r = a;
  typeof t != "object" && (t = { name: t });
  const o = Object.assign({ name: Df, automaticDataCollectionEnabled: !1 }, t),
    c = o.name;
  if (typeof c != "string" || !c)
    throw ri.create("bad-app-name", { appName: String(c) });
  if ((r || (r = r0()), !r)) throw ri.create("no-options");
  const d = pc.get(c);
  if (d) {
    if (Vr(r, d.options) && Vr(o, d.config)) return d;
    throw ri.create("duplicate-app", { appName: c });
  }
  const f = new iE(c);
  for (const h of Nf.values()) f.addComponent(h);
  const p = new JE(r, o, f);
  return pc.set(c, p), p;
}
function WE(a = Df) {
  const t = pc.get(a);
  if (!t && a === Df && r0()) return f0();
  if (!t) throw ri.create("no-app", { appName: a });
  return t;
}
function Ur(a, t, r) {
  var o;
  let c = (o = FE[a]) !== null && o !== void 0 ? o : a;
  r && (c += `-${r}`);
  const d = c.match(/\s|\//),
    f = t.match(/\s|\//);
  if (d || f) {
    const p = [`Unable to register library "${c}" with version "${t}":`];
    d &&
      p.push(
        `library name "${c}" contains illegal characters (whitespace or "/")`
      ),
      d && f && p.push("and"),
      f &&
        p.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      ba.warn(p.join(" "));
    return;
  }
  mo(new qr(`${c}-version`, () => ({ library: c, version: t }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const eS = "firebase-heartbeat-database",
  tS = 1,
  po = "firebase-heartbeat-store";
let yf = null;
function h0() {
  return (
    yf ||
      (yf = yE(eS, tS, {
        upgrade: (a, t) => {
          switch (t) {
            case 0:
              try {
                a.createObjectStore(po);
              } catch (r) {
                console.warn(r);
              }
          }
        },
      }).catch((a) => {
        throw ri.create("idb-open", { originalErrorMessage: a.message });
      })),
    yf
  );
}
async function nS(a) {
  try {
    const r = (await h0()).transaction(po),
      o = await r.objectStore(po).get(m0(a));
    return await r.done, o;
  } catch (t) {
    if (t instanceof ci) ba.warn(t.message);
    else {
      const r = ri.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      ba.warn(r.message);
    }
  }
}
async function Yy(a, t) {
  try {
    const o = (await h0()).transaction(po, "readwrite");
    await o.objectStore(po).put(t, m0(a)), await o.done;
  } catch (r) {
    if (r instanceof ci) ba.warn(r.message);
    else {
      const o = ri.create("idb-set", {
        originalErrorMessage: r == null ? void 0 : r.message,
      });
      ba.warn(o.message);
    }
  }
}
function m0(a) {
  return `${a.name}!${a.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const aS = 1024,
  iS = 30;
class rS {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const r = this.container.getProvider("app").getImmediate();
    (this._storage = new oS(r)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((o) => ((this._heartbeatsCache = o), o)));
  }
  async triggerHeartbeat() {
    var t, r;
    try {
      const c = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        d = Xy();
      if (
        (((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null &&
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          ((r = this._heartbeatsCache) === null || r === void 0
            ? void 0
            : r.heartbeats) == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === d ||
        this._heartbeatsCache.heartbeats.some((f) => f.date === d)
      )
        return;
      if (
        (this._heartbeatsCache.heartbeats.push({ date: d, agent: c }),
        this._heartbeatsCache.heartbeats.length > iS)
      ) {
        const f = sS(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(f, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (o) {
      ba.warn(o);
    }
  }
  async getHeartbeatsHeader() {
    var t;
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return "";
      const r = Xy(),
        { heartbeatsToSend: o, unsentEntries: c } = lS(
          this._heartbeatsCache.heartbeats
        ),
        d = a0(JSON.stringify({ version: 2, heartbeats: o }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = r),
        c.length > 0
          ? ((this._heartbeatsCache.heartbeats = c),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        d
      );
    } catch (r) {
      return ba.warn(r), "";
    }
  }
}
function Xy() {
  return new Date().toISOString().substring(0, 10);
}
function lS(a, t = aS) {
  const r = [];
  let o = a.slice();
  for (const c of a) {
    const d = r.find((f) => f.agent === c.agent);
    if (d) {
      if ((d.dates.push(c.date), Ky(r) > t)) {
        d.dates.pop();
        break;
      }
    } else if ((r.push({ agent: c.agent, dates: [c.date] }), Ky(r) > t)) {
      r.pop();
      break;
    }
    o = o.slice(1);
  }
  return { heartbeatsToSend: r, unsentEntries: o };
}
class oS {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return Yx()
      ? Xx()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const r = await nS(this.app);
      return r != null && r.heartbeats ? r : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(t) {
    var r;
    if (await this._canUseIndexedDBPromise) {
      const c = await this.read();
      return Yy(this.app, {
        lastSentHeartbeatDate:
          (r = t.lastSentHeartbeatDate) !== null && r !== void 0
            ? r
            : c.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var r;
    if (await this._canUseIndexedDBPromise) {
      const c = await this.read();
      return Yy(this.app, {
        lastSentHeartbeatDate:
          (r = t.lastSentHeartbeatDate) !== null && r !== void 0
            ? r
            : c.lastSentHeartbeatDate,
        heartbeats: [...c.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function Ky(a) {
  return a0(JSON.stringify({ version: 2, heartbeats: a })).length;
}
function sS(a) {
  if (a.length === 0) return -1;
  let t = 0,
    r = a[0].date;
  for (let o = 1; o < a.length; o++)
    a[o].date < r && ((r = a[o].date), (t = o));
  return t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function cS(a) {
  mo(new qr("platform-logger", (t) => new wE(t), "PRIVATE")),
    mo(new qr("heartbeat", (t) => new rS(t), "PRIVATE")),
    Ur(Of, Gy, a),
    Ur(Of, Gy, "esm2017"),
    Ur("fire-js", "");
}
cS("");
function eh(a, t) {
  var r = {};
  for (var o in a)
    Object.prototype.hasOwnProperty.call(a, o) &&
      t.indexOf(o) < 0 &&
      (r[o] = a[o]);
  if (a != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, o = Object.getOwnPropertySymbols(a); c < o.length; c++)
      t.indexOf(o[c]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(a, o[c]) &&
        (r[o[c]] = a[o[c]]);
  return r;
}
function p0() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const uS = p0,
  g0 = new _o("auth", "Firebase", p0());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gc = new s0("@firebase/auth");
function dS(a, ...t) {
  gc.logLevel <= We.WARN && gc.warn(`Auth (${Eo}): ${a}`, ...t);
}
function rc(a, ...t) {
  gc.logLevel <= We.ERROR && gc.error(`Auth (${Eo}): ${a}`, ...t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function En(a, ...t) {
  throw nh(a, ...t);
}
function Ln(a, ...t) {
  return nh(a, ...t);
}
function th(a, t, r) {
  const o = Object.assign(Object.assign({}, uS()), { [t]: r });
  return new _o("auth", "Firebase", o).create(t, { appName: a.name });
}
function ya(a) {
  return th(
    a,
    "operation-not-supported-in-this-environment",
    "Operations that alter the current user are not supported in conjunction with FirebaseServerApp"
  );
}
function fS(a, t, r) {
  const o = r;
  if (!(t instanceof o))
    throw (
      (o.name !== t.constructor.name && En(a, "argument-error"),
      th(
        a,
        "argument-error",
        `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
      ))
    );
}
function nh(a, ...t) {
  if (typeof a != "string") {
    const r = t[0],
      o = [...t.slice(1)];
    return o[0] && (o[0].appName = a.name), a._errorFactory.create(r, ...o);
  }
  return g0.create(a, ...t);
}
function be(a, t, ...r) {
  if (!a) throw nh(t, ...r);
}
function pa(a) {
  const t = "INTERNAL ASSERTION FAILED: " + a;
  throw (rc(t), new Error(t));
}
function wa(a, t) {
  a || pa(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Mf() {
  var a;
  return (
    (typeof self < "u" &&
      ((a = self.location) === null || a === void 0 ? void 0 : a.href)) ||
    ""
  );
}
function hS() {
  return Fy() === "http:" || Fy() === "https:";
}
function Fy() {
  var a;
  return (
    (typeof self < "u" &&
      ((a = self.location) === null || a === void 0 ? void 0 : a.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function mS() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (hS() || qx() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function pS() {
  if (typeof navigator > "u") return null;
  const a = navigator;
  return (a.languages && a.languages[0]) || a.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class So {
  constructor(t, r) {
    (this.shortDelay = t),
      (this.longDelay = r),
      wa(r > t, "Short delay should be less than long delay!"),
      (this.isMobile = Px() || Gx());
  }
  get() {
    return mS()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ah(a, t) {
  wa(a.emulator, "Emulator should always be set here");
  const { url: r } = a.emulator;
  return t ? `${r}${t.startsWith("/") ? t.slice(1) : t}` : r;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class y0 {
  static initialize(t, r, o) {
    (this.fetchImpl = t),
      r && (this.headersImpl = r),
      o && (this.responseImpl = o);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < "u") return fetch;
    pa(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u") return Headers;
    pa(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u") return Response;
    pa(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gS = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const yS = [
    "/v1/accounts:signInWithCustomToken",
    "/v1/accounts:signInWithEmailLink",
    "/v1/accounts:signInWithIdp",
    "/v1/accounts:signInWithPassword",
    "/v1/accounts:signInWithPhoneNumber",
    "/v1/token",
  ],
  vS = new So(3e4, 6e4);
function ui(a, t) {
  return a.tenantId && !t.tenantId
    ? Object.assign(Object.assign({}, t), { tenantId: a.tenantId })
    : t;
}
async function xa(a, t, r, o, c = {}) {
  return v0(a, c, async () => {
    let d = {},
      f = {};
    o && (t === "GET" ? (f = o) : (d = { body: JSON.stringify(o) }));
    const p = xo(Object.assign({ key: a.config.apiKey }, f)).slice(1),
      h = await a._getAdditionalHeaders();
    (h["Content-Type"] = "application/json"),
      a.languageCode && (h["X-Firebase-Locale"] = a.languageCode);
    const g = Object.assign({ method: t, headers: h }, d);
    return (
      Vx() || (g.referrerPolicy = "no-referrer"),
      a.emulatorConfig &&
        Jf(a.emulatorConfig.host) &&
        (g.credentials = "include"),
      y0.fetch()(await b0(a, a.config.apiHost, r, p), g)
    );
  });
}
async function v0(a, t, r) {
  a._canInitEmulator = !1;
  const o = Object.assign(Object.assign({}, gS), t);
  try {
    const c = new wS(a),
      d = await Promise.race([r(), c.promise]);
    c.clearNetworkTimeout();
    const f = await d.json();
    if ("needConfirmation" in f)
      throw Ws(a, "account-exists-with-different-credential", f);
    if (d.ok && !("errorMessage" in f)) return f;
    {
      const p = d.ok ? f.errorMessage : f.error.message,
        [h, g] = p.split(" : ");
      if (h === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Ws(a, "credential-already-in-use", f);
      if (h === "EMAIL_EXISTS") throw Ws(a, "email-already-in-use", f);
      if (h === "USER_DISABLED") throw Ws(a, "user-disabled", f);
      const b = o[h] || h.toLowerCase().replace(/[_\s]+/g, "-");
      if (g) throw th(a, b, g);
      En(a, b);
    }
  } catch (c) {
    if (c instanceof ci) throw c;
    En(a, "network-request-failed", { message: String(c) });
  }
}
async function To(a, t, r, o, c = {}) {
  const d = await xa(a, t, r, o, c);
  return (
    "mfaPendingCredential" in d &&
      En(a, "multi-factor-auth-required", { _serverResponse: d }),
    d
  );
}
async function b0(a, t, r, o) {
  const c = `${t}${r}?${o}`,
    d = a,
    f = d.config.emulator ? ah(a.config, c) : `${a.config.apiScheme}://${c}`;
  return yS.includes(r) &&
    (await d._persistenceManagerAvailable, d._getPersistenceType() === "COOKIE")
    ? d._getPersistence()._getFinalTarget(f).toString()
    : f;
}
function bS(a) {
  switch (a) {
    case "ENFORCE":
      return "ENFORCE";
    case "AUDIT":
      return "AUDIT";
    case "OFF":
      return "OFF";
    default:
      return "ENFORCEMENT_STATE_UNSPECIFIED";
  }
}
class wS {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(t) {
    (this.auth = t),
      (this.timer = null),
      (this.promise = new Promise((r, o) => {
        this.timer = setTimeout(
          () => o(Ln(this.auth, "network-request-failed")),
          vS.get()
        );
      }));
  }
}
function Ws(a, t, r) {
  const o = { appName: a.name };
  r.email && (o.email = r.email),
    r.phoneNumber && (o.phoneNumber = r.phoneNumber);
  const c = Ln(a, t, o);
  return (c.customData._tokenResponse = r), c;
}
function Qy(a) {
  return a !== void 0 && a.enterprise !== void 0;
}
class _S {
  constructor(t) {
    if (
      ((this.siteKey = ""),
      (this.recaptchaEnforcementState = []),
      t.recaptchaKey === void 0)
    )
      throw new Error("recaptchaKey undefined");
    (this.siteKey = t.recaptchaKey.split("/")[3]),
      (this.recaptchaEnforcementState = t.recaptchaEnforcementState);
  }
  getProviderEnforcementState(t) {
    if (
      !this.recaptchaEnforcementState ||
      this.recaptchaEnforcementState.length === 0
    )
      return null;
    for (const r of this.recaptchaEnforcementState)
      if (r.provider && r.provider === t) return bS(r.enforcementState);
    return null;
  }
  isProviderEnabled(t) {
    return (
      this.getProviderEnforcementState(t) === "ENFORCE" ||
      this.getProviderEnforcementState(t) === "AUDIT"
    );
  }
  isAnyProviderEnabled() {
    return (
      this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") ||
      this.isProviderEnabled("PHONE_PROVIDER")
    );
  }
}
async function xS(a, t) {
  return xa(a, "GET", "/v2/recaptchaConfig", ui(a, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ES(a, t) {
  return xa(a, "POST", "/v1/accounts:delete", t);
}
async function yc(a, t) {
  return xa(a, "POST", "/v1/accounts:lookup", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function uo(a) {
  if (a)
    try {
      const t = new Date(Number(a));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function SS(a, t = !1) {
  const r = Qn(a),
    o = await r.getIdToken(t),
    c = ih(o);
  be(c && c.exp && c.auth_time && c.iat, r.auth, "internal-error");
  const d = typeof c.firebase == "object" ? c.firebase : void 0,
    f = d == null ? void 0 : d.sign_in_provider;
  return {
    claims: c,
    token: o,
    authTime: uo(vf(c.auth_time)),
    issuedAtTime: uo(vf(c.iat)),
    expirationTime: uo(vf(c.exp)),
    signInProvider: f || null,
    signInSecondFactor: (d == null ? void 0 : d.sign_in_second_factor) || null,
  };
}
function vf(a) {
  return Number(a) * 1e3;
}
function ih(a) {
  const [t, r, o] = a.split(".");
  if (t === void 0 || r === void 0 || o === void 0)
    return rc("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const c = i0(r);
    return c
      ? JSON.parse(c)
      : (rc("Failed to decode base64 JWT payload"), null);
  } catch (c) {
    return (
      rc(
        "Caught error parsing JWT payload as JSON",
        c == null ? void 0 : c.toString()
      ),
      null
    );
  }
}
function Zy(a) {
  const t = ih(a);
  return (
    be(t, "internal-error"),
    be(typeof t.exp < "u", "internal-error"),
    be(typeof t.iat < "u", "internal-error"),
    Number(t.exp) - Number(t.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Gr(a, t, r = !1) {
  if (r) return t;
  try {
    return await t;
  } catch (o) {
    throw (
      (o instanceof ci &&
        TS(o) &&
        a.auth.currentUser === a &&
        (await a.auth.signOut()),
      o)
    );
  }
}
function TS({ code: a }) {
  return a === "auth/user-disabled" || a === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class CS {
  constructor(t) {
    (this.user = t),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(t) {
    var r;
    if (t) {
      const o = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), o;
    } else {
      this.errorBackoff = 3e4;
      const c =
        ((r = this.user.stsTokenManager.expirationTime) !== null && r !== void 0
          ? r
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, c);
    }
  }
  schedule(t = !1) {
    if (!this.isRunning) return;
    const r = this.getInterval(t);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, r);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (t) {
      (t == null ? void 0 : t.code) === "auth/network-request-failed" &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kf {
  constructor(t, r) {
    (this.createdAt = t), (this.lastLoginAt = r), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = uo(this.lastLoginAt)),
      (this.creationTime = uo(this.createdAt));
  }
  _copy(t) {
    (this.createdAt = t.createdAt),
      (this.lastLoginAt = t.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function vc(a) {
  var t;
  const r = a.auth,
    o = await a.getIdToken(),
    c = await Gr(a, yc(r, { idToken: o }));
  be(c == null ? void 0 : c.users.length, r, "internal-error");
  const d = c.users[0];
  a._notifyReloadListener(d);
  const f =
      !((t = d.providerUserInfo) === null || t === void 0) && t.length
        ? w0(d.providerUserInfo)
        : [],
    p = RS(a.providerData, f),
    h = a.isAnonymous,
    g = !(a.email && d.passwordHash) && !(p != null && p.length),
    b = h ? g : !1,
    E = {
      uid: d.localId,
      displayName: d.displayName || null,
      photoURL: d.photoUrl || null,
      email: d.email || null,
      emailVerified: d.emailVerified || !1,
      phoneNumber: d.phoneNumber || null,
      tenantId: d.tenantId || null,
      providerData: p,
      metadata: new kf(d.createdAt, d.lastLoginAt),
      isAnonymous: b,
    };
  Object.assign(a, E);
}
async function AS(a) {
  const t = Qn(a);
  await vc(t),
    await t.auth._persistUserIfCurrent(t),
    t.auth._notifyListenersIfCurrent(t);
}
function RS(a, t) {
  return [
    ...a.filter((o) => !t.some((c) => c.providerId === o.providerId)),
    ...t,
  ];
}
function w0(a) {
  return a.map((t) => {
    var { providerId: r } = t,
      o = eh(t, ["providerId"]);
    return {
      providerId: r,
      uid: o.rawId || "",
      displayName: o.displayName || null,
      email: o.email || null,
      phoneNumber: o.phoneNumber || null,
      photoURL: o.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function OS(a, t) {
  const r = await v0(a, {}, async () => {
    const o = xo({ grant_type: "refresh_token", refresh_token: t }).slice(1),
      { tokenApiHost: c, apiKey: d } = a.config,
      f = await b0(a, c, "/v1/token", `key=${d}`),
      p = await a._getAdditionalHeaders();
    return (
      (p["Content-Type"] = "application/x-www-form-urlencoded"),
      y0.fetch()(f, { method: "POST", headers: p, body: o })
    );
  });
  return {
    accessToken: r.access_token,
    expiresIn: r.expires_in,
    refreshToken: r.refresh_token,
  };
}
async function DS(a, t) {
  return xa(a, "POST", "/v2/accounts:revokeToken", ui(a, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zr {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(t) {
    be(t.idToken, "internal-error"),
      be(typeof t.idToken < "u", "internal-error"),
      be(typeof t.refreshToken < "u", "internal-error");
    const r =
      "expiresIn" in t && typeof t.expiresIn < "u"
        ? Number(t.expiresIn)
        : Zy(t.idToken);
    this.updateTokensAndExpiration(t.idToken, t.refreshToken, r);
  }
  updateFromIdToken(t) {
    be(t.length !== 0, "internal-error");
    const r = Zy(t);
    this.updateTokensAndExpiration(t, null, r);
  }
  async getToken(t, r = !1) {
    return !r && this.accessToken && !this.isExpired
      ? this.accessToken
      : (be(this.refreshToken, t, "user-token-expired"),
        this.refreshToken
          ? (await this.refresh(t, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(t, r) {
    const { accessToken: o, refreshToken: c, expiresIn: d } = await OS(t, r);
    this.updateTokensAndExpiration(o, c, Number(d));
  }
  updateTokensAndExpiration(t, r, o) {
    (this.refreshToken = r || null),
      (this.accessToken = t || null),
      (this.expirationTime = Date.now() + o * 1e3);
  }
  static fromJSON(t, r) {
    const { refreshToken: o, accessToken: c, expirationTime: d } = r,
      f = new zr();
    return (
      o &&
        (be(typeof o == "string", "internal-error", { appName: t }),
        (f.refreshToken = o)),
      c &&
        (be(typeof c == "string", "internal-error", { appName: t }),
        (f.accessToken = c)),
      d &&
        (be(typeof d == "number", "internal-error", { appName: t }),
        (f.expirationTime = d)),
      f
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(t) {
    (this.accessToken = t.accessToken),
      (this.refreshToken = t.refreshToken),
      (this.expirationTime = t.expirationTime);
  }
  _clone() {
    return Object.assign(new zr(), this.toJSON());
  }
  _performRefresh() {
    return pa("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Qa(a, t) {
  be(typeof a == "string" || typeof a > "u", "internal-error", { appName: t });
}
class kn {
  constructor(t) {
    var { uid: r, auth: o, stsTokenManager: c } = t,
      d = eh(t, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new CS(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = r),
      (this.auth = o),
      (this.stsTokenManager = c),
      (this.accessToken = c.accessToken),
      (this.displayName = d.displayName || null),
      (this.email = d.email || null),
      (this.emailVerified = d.emailVerified || !1),
      (this.phoneNumber = d.phoneNumber || null),
      (this.photoURL = d.photoURL || null),
      (this.isAnonymous = d.isAnonymous || !1),
      (this.tenantId = d.tenantId || null),
      (this.providerData = d.providerData ? [...d.providerData] : []),
      (this.metadata = new kf(d.createdAt || void 0, d.lastLoginAt || void 0));
  }
  async getIdToken(t) {
    const r = await Gr(this, this.stsTokenManager.getToken(this.auth, t));
    return (
      be(r, this.auth, "internal-error"),
      this.accessToken !== r &&
        ((this.accessToken = r),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      r
    );
  }
  getIdTokenResult(t) {
    return SS(this, t);
  }
  reload() {
    return AS(this);
  }
  _assign(t) {
    this !== t &&
      (be(this.uid === t.uid, this.auth, "internal-error"),
      (this.displayName = t.displayName),
      (this.photoURL = t.photoURL),
      (this.email = t.email),
      (this.emailVerified = t.emailVerified),
      (this.phoneNumber = t.phoneNumber),
      (this.isAnonymous = t.isAnonymous),
      (this.tenantId = t.tenantId),
      (this.providerData = t.providerData.map((r) => Object.assign({}, r))),
      this.metadata._copy(t.metadata),
      this.stsTokenManager._assign(t.stsTokenManager));
  }
  _clone(t) {
    const r = new kn(
      Object.assign(Object.assign({}, this), {
        auth: t,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
    return r.metadata._copy(this.metadata), r;
  }
  _onReload(t) {
    be(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = t),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(t) {
    this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(t, r = !1) {
    let o = !1;
    t.idToken &&
      t.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(t), (o = !0)),
      r && (await vc(this)),
      await this.auth._persistUserIfCurrent(this),
      o && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (_n(this.auth.app)) return Promise.reject(ya(this.auth));
    const t = await this.getIdToken();
    return (
      await Gr(this, ES(this.auth, { idToken: t })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((t) => Object.assign({}, t)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(t, r) {
    var o, c, d, f, p, h, g, b;
    const E = (o = r.displayName) !== null && o !== void 0 ? o : void 0,
      w = (c = r.email) !== null && c !== void 0 ? c : void 0,
      O = (d = r.phoneNumber) !== null && d !== void 0 ? d : void 0,
      M = (f = r.photoURL) !== null && f !== void 0 ? f : void 0,
      $ = (p = r.tenantId) !== null && p !== void 0 ? p : void 0,
      P = (h = r._redirectEventId) !== null && h !== void 0 ? h : void 0,
      I = (g = r.createdAt) !== null && g !== void 0 ? g : void 0,
      B = (b = r.lastLoginAt) !== null && b !== void 0 ? b : void 0,
      {
        uid: V,
        emailVerified: Q,
        isAnonymous: F,
        providerData: D,
        stsTokenManager: ee,
      } = r;
    be(V && ee, t, "internal-error");
    const ne = zr.fromJSON(this.name, ee);
    be(typeof V == "string", t, "internal-error"),
      Qa(E, t.name),
      Qa(w, t.name),
      be(typeof Q == "boolean", t, "internal-error"),
      be(typeof F == "boolean", t, "internal-error"),
      Qa(O, t.name),
      Qa(M, t.name),
      Qa($, t.name),
      Qa(P, t.name),
      Qa(I, t.name),
      Qa(B, t.name);
    const le = new kn({
      uid: V,
      auth: t,
      email: w,
      emailVerified: Q,
      displayName: E,
      isAnonymous: F,
      photoURL: M,
      phoneNumber: O,
      tenantId: $,
      stsTokenManager: ne,
      createdAt: I,
      lastLoginAt: B,
    });
    return (
      D &&
        Array.isArray(D) &&
        (le.providerData = D.map((Me) => Object.assign({}, Me))),
      P && (le._redirectEventId = P),
      le
    );
  }
  static async _fromIdTokenResponse(t, r, o = !1) {
    const c = new zr();
    c.updateFromServerResponse(r);
    const d = new kn({
      uid: r.localId,
      auth: t,
      stsTokenManager: c,
      isAnonymous: o,
    });
    return await vc(d), d;
  }
  static async _fromGetAccountInfoResponse(t, r, o) {
    const c = r.users[0];
    be(c.localId !== void 0, "internal-error");
    const d = c.providerUserInfo !== void 0 ? w0(c.providerUserInfo) : [],
      f = !(c.email && c.passwordHash) && !(d != null && d.length),
      p = new zr();
    p.updateFromIdToken(o);
    const h = new kn({
        uid: c.localId,
        auth: t,
        stsTokenManager: p,
        isAnonymous: f,
      }),
      g = {
        uid: c.localId,
        displayName: c.displayName || null,
        photoURL: c.photoUrl || null,
        email: c.email || null,
        emailVerified: c.emailVerified || !1,
        phoneNumber: c.phoneNumber || null,
        tenantId: c.tenantId || null,
        providerData: d,
        metadata: new kf(c.createdAt, c.lastLoginAt),
        isAnonymous: !(c.email && c.passwordHash) && !(d != null && d.length),
      };
    return Object.assign(h, g), h;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Jy = new Map();
function ga(a) {
  wa(a instanceof Function, "Expected a class definition");
  let t = Jy.get(a);
  return t
    ? (wa(t instanceof a, "Instance stored in cache mismatched with class"), t)
    : ((t = new a()), Jy.set(a, t), t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _0 {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(t, r) {
    this.storage[t] = r;
  }
  async _get(t) {
    const r = this.storage[t];
    return r === void 0 ? null : r;
  }
  async _remove(t) {
    delete this.storage[t];
  }
  _addListener(t, r) {}
  _removeListener(t, r) {}
}
_0.type = "NONE";
const Wy = _0;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function lc(a, t, r) {
  return `firebase:${a}:${t}:${r}`;
}
class Ir {
  constructor(t, r, o) {
    (this.persistence = t), (this.auth = r), (this.userKey = o);
    const { config: c, name: d } = this.auth;
    (this.fullUserKey = lc(this.userKey, c.apiKey, d)),
      (this.fullPersistenceKey = lc("persistence", c.apiKey, d)),
      (this.boundEventHandler = r._onStorageEvent.bind(r)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(t) {
    return this.persistence._set(this.fullUserKey, t.toJSON());
  }
  async getCurrentUser() {
    const t = await this.persistence._get(this.fullUserKey);
    if (!t) return null;
    if (typeof t == "string") {
      const r = await yc(this.auth, { idToken: t }).catch(() => {});
      return r ? kn._fromGetAccountInfoResponse(this.auth, r, t) : null;
    }
    return kn._fromJSON(this.auth, t);
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(t) {
    if (this.persistence === t) return;
    const r = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = t), r))
      return this.setCurrentUser(r);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(t, r, o = "authUser") {
    if (!r.length) return new Ir(ga(Wy), t, o);
    const c = (
      await Promise.all(
        r.map(async (g) => {
          if (await g._isAvailable()) return g;
        })
      )
    ).filter((g) => g);
    let d = c[0] || ga(Wy);
    const f = lc(o, t.config.apiKey, t.name);
    let p = null;
    for (const g of r)
      try {
        const b = await g._get(f);
        if (b) {
          let E;
          if (typeof b == "string") {
            const w = await yc(t, { idToken: b }).catch(() => {});
            if (!w) break;
            E = await kn._fromGetAccountInfoResponse(t, w, b);
          } else E = kn._fromJSON(t, b);
          g !== d && (p = E), (d = g);
          break;
        }
      } catch {}
    const h = c.filter((g) => g._shouldAllowMigration);
    return !d._shouldAllowMigration || !h.length
      ? new Ir(d, t, o)
      : ((d = h[0]),
        p && (await d._set(f, p.toJSON())),
        await Promise.all(
          r.map(async (g) => {
            if (g !== d)
              try {
                await g._remove(f);
              } catch {}
          })
        ),
        new Ir(d, t, o));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ev(a) {
  const t = a.toLowerCase();
  if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
    return "Opera";
  if (T0(t)) return "IEMobile";
  if (t.includes("msie") || t.includes("trident/")) return "IE";
  if (t.includes("edge/")) return "Edge";
  if (x0(t)) return "Firefox";
  if (t.includes("silk/")) return "Silk";
  if (A0(t)) return "Blackberry";
  if (R0(t)) return "Webos";
  if (E0(t)) return "Safari";
  if ((t.includes("chrome/") || S0(t)) && !t.includes("edge/")) return "Chrome";
  if (C0(t)) return "Android";
  {
    const r = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      o = a.match(r);
    if ((o == null ? void 0 : o.length) === 2) return o[1];
  }
  return "Other";
}
function x0(a = zt()) {
  return /firefox\//i.test(a);
}
function E0(a = zt()) {
  const t = a.toLowerCase();
  return (
    t.includes("safari/") &&
    !t.includes("chrome/") &&
    !t.includes("crios/") &&
    !t.includes("android")
  );
}
function S0(a = zt()) {
  return /crios\//i.test(a);
}
function T0(a = zt()) {
  return /iemobile/i.test(a);
}
function C0(a = zt()) {
  return /android/i.test(a);
}
function A0(a = zt()) {
  return /blackberry/i.test(a);
}
function R0(a = zt()) {
  return /webos/i.test(a);
}
function rh(a = zt()) {
  return (
    /iphone|ipad|ipod/i.test(a) || (/macintosh/i.test(a) && /mobile/i.test(a))
  );
}
function NS(a = zt()) {
  var t;
  return (
    rh(a) &&
    !!(!((t = window.navigator) === null || t === void 0) && t.standalone)
  );
}
function MS() {
  return $x() && document.documentMode === 10;
}
function O0(a = zt()) {
  return rh(a) || C0(a) || R0(a) || A0(a) || /windows phone/i.test(a) || T0(a);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function D0(a, t = []) {
  let r;
  switch (a) {
    case "Browser":
      r = ev(zt());
      break;
    case "Worker":
      r = `${ev(zt())}-${a}`;
      break;
    default:
      r = a;
  }
  const o = t.length ? t.join(",") : "FirebaseCore-web";
  return `${r}/JsCore/${Eo}/${o}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kS {
  constructor(t) {
    (this.auth = t), (this.queue = []);
  }
  pushCallback(t, r) {
    const o = (d) =>
      new Promise((f, p) => {
        try {
          const h = t(d);
          f(h);
        } catch (h) {
          p(h);
        }
      });
    (o.onAbort = r), this.queue.push(o);
    const c = this.queue.length - 1;
    return () => {
      this.queue[c] = () => Promise.resolve();
    };
  }
  async runMiddleware(t) {
    if (this.auth.currentUser === t) return;
    const r = [];
    try {
      for (const o of this.queue) await o(t), o.onAbort && r.push(o.onAbort);
    } catch (o) {
      r.reverse();
      for (const c of r)
        try {
          c();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: o == null ? void 0 : o.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function LS(a, t = {}) {
  return xa(a, "GET", "/v2/passwordPolicy", ui(a, t));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const jS = 6;
class US {
  constructor(t) {
    var r, o, c, d;
    const f = t.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (r = f.minPasswordLength) !== null && r !== void 0 ? r : jS),
      f.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = f.maxPasswordLength),
      f.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          f.containsLowercaseCharacter),
      f.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          f.containsUppercaseCharacter),
      f.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          f.containsNumericCharacter),
      f.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          f.containsNonAlphanumericCharacter),
      (this.enforcementState = t.enforcementState),
      this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" &&
        (this.enforcementState = "OFF"),
      (this.allowedNonAlphanumericCharacters =
        (c =
          (o = t.allowedNonAlphanumericCharacters) === null || o === void 0
            ? void 0
            : o.join("")) !== null && c !== void 0
          ? c
          : ""),
      (this.forceUpgradeOnSignin =
        (d = t.forceUpgradeOnSignin) !== null && d !== void 0 ? d : !1),
      (this.schemaVersion = t.schemaVersion);
  }
  validatePassword(t) {
    var r, o, c, d, f, p;
    const h = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(t, h),
      this.validatePasswordCharacterOptions(t, h),
      h.isValid &&
        (h.isValid =
          (r = h.meetsMinPasswordLength) !== null && r !== void 0 ? r : !0),
      h.isValid &&
        (h.isValid =
          (o = h.meetsMaxPasswordLength) !== null && o !== void 0 ? o : !0),
      h.isValid &&
        (h.isValid =
          (c = h.containsLowercaseLetter) !== null && c !== void 0 ? c : !0),
      h.isValid &&
        (h.isValid =
          (d = h.containsUppercaseLetter) !== null && d !== void 0 ? d : !0),
      h.isValid &&
        (h.isValid =
          (f = h.containsNumericCharacter) !== null && f !== void 0 ? f : !0),
      h.isValid &&
        (h.isValid =
          (p = h.containsNonAlphanumericCharacter) !== null && p !== void 0
            ? p
            : !0),
      h
    );
  }
  validatePasswordLengthOptions(t, r) {
    const o = this.customStrengthOptions.minPasswordLength,
      c = this.customStrengthOptions.maxPasswordLength;
    o && (r.meetsMinPasswordLength = t.length >= o),
      c && (r.meetsMaxPasswordLength = t.length <= c);
  }
  validatePasswordCharacterOptions(t, r) {
    this.updatePasswordCharacterOptionsStatuses(r, !1, !1, !1, !1);
    let o;
    for (let c = 0; c < t.length; c++)
      (o = t.charAt(c)),
        this.updatePasswordCharacterOptionsStatuses(
          r,
          o >= "a" && o <= "z",
          o >= "A" && o <= "Z",
          o >= "0" && o <= "9",
          this.allowedNonAlphanumericCharacters.includes(o)
        );
  }
  updatePasswordCharacterOptionsStatuses(t, r, o, c, d) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (t.containsLowercaseLetter || (t.containsLowercaseLetter = r)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (t.containsUppercaseLetter || (t.containsUppercaseLetter = o)),
      this.customStrengthOptions.containsNumericCharacter &&
        (t.containsNumericCharacter || (t.containsNumericCharacter = c)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (t.containsNonAlphanumericCharacter ||
          (t.containsNonAlphanumericCharacter = d));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zS {
  constructor(t, r, o, c) {
    (this.app = t),
      (this.heartbeatServiceProvider = r),
      (this.appCheckServiceProvider = o),
      (this.config = c),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new tv(this)),
      (this.idTokenSubscription = new tv(this)),
      (this.beforeStateQueue = new kS(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = g0),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this._resolvePersistenceManagerAvailable = void 0),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = t.name),
      (this.clientVersion = c.sdkClientVersion),
      (this._persistenceManagerAvailable = new Promise(
        (d) => (this._resolvePersistenceManagerAvailable = d)
      ));
  }
  _initializeWithPersistence(t, r) {
    return (
      r && (this._popupRedirectResolver = ga(r)),
      (this._initializationPromise = this.queue(async () => {
        var o, c, d;
        if (
          !this._deleted &&
          ((this.persistenceManager = await Ir.create(this, t)),
          (o = this._resolvePersistenceManagerAvailable) === null ||
            o === void 0 ||
            o.call(this),
          !this._deleted)
        ) {
          if (
            !((c = this._popupRedirectResolver) === null || c === void 0) &&
            c._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(r),
            (this.lastNotifiedUid =
              ((d = this.currentUser) === null || d === void 0
                ? void 0
                : d.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const t = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !t)) {
      if (this.currentUser && t && this.currentUser.uid === t.uid) {
        this._currentUser._assign(t), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(t, !0);
    }
  }
  async initializeCurrentUserFromIdToken(t) {
    try {
      const r = await yc(this, { idToken: t }),
        o = await kn._fromGetAccountInfoResponse(this, r, t);
      await this.directlySetCurrentUser(o);
    } catch (r) {
      console.warn(
        "FirebaseServerApp could not login user with provided authIdToken: ",
        r
      ),
        await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(t) {
    var r;
    if (_n(this.app)) {
      const f = this.app.settings.authIdToken;
      return f
        ? new Promise((p) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(f).then(p, p)
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const o = await this.assertedPersistence.getCurrentUser();
    let c = o,
      d = !1;
    if (t && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const f =
          (r = this.redirectUser) === null || r === void 0
            ? void 0
            : r._redirectEventId,
        p = c == null ? void 0 : c._redirectEventId,
        h = await this.tryRedirectSignIn(t);
      (!f || f === p) && h != null && h.user && ((c = h.user), (d = !0));
    }
    if (!c) return this.directlySetCurrentUser(null);
    if (!c._redirectEventId) {
      if (d)
        try {
          await this.beforeStateQueue.runMiddleware(c);
        } catch (f) {
          (c = o),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(f)
            );
        }
      return c
        ? this.reloadAndSetCurrentUserOrClear(c)
        : this.directlySetCurrentUser(null);
    }
    return (
      be(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === c._redirectEventId
        ? this.directlySetCurrentUser(c)
        : this.reloadAndSetCurrentUserOrClear(c)
    );
  }
  async tryRedirectSignIn(t) {
    let r = null;
    try {
      r = await this._popupRedirectResolver._completeRedirectFn(this, t, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return r;
  }
  async reloadAndSetCurrentUserOrClear(t) {
    try {
      await vc(t);
    } catch (r) {
      if ((r == null ? void 0 : r.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(t);
  }
  useDeviceLanguage() {
    this.languageCode = pS();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    if (_n(this.app)) return Promise.reject(ya(this));
    const r = t ? Qn(t) : null;
    return (
      r &&
        be(
          r.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token"
        ),
      this._updateCurrentUser(r && r._clone(this))
    );
  }
  async _updateCurrentUser(t, r = !1) {
    if (!this._deleted)
      return (
        t && be(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
        r || (await this.beforeStateQueue.runMiddleware(t)),
        this.queue(async () => {
          await this.directlySetCurrentUser(t), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return _n(this.app)
      ? Promise.reject(ya(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(t) {
    return _n(this.app)
      ? Promise.reject(ya(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(ga(t));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(t) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const r = this._getPasswordPolicyInternal();
    return r.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            "unsupported-password-policy-schema-version",
            {}
          )
        )
      : r.validatePassword(t);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const t = await LS(this),
      r = new US(t);
    this.tenantId === null
      ? (this._projectPasswordPolicy = r)
      : (this._tenantPasswordPolicies[this.tenantId] = r);
  }
  _getPersistenceType() {
    return this.assertedPersistence.persistence.type;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence;
  }
  _updateErrorMap(t) {
    this._errorFactory = new _o("auth", "Firebase", t());
  }
  onAuthStateChanged(t, r, o) {
    return this.registerStateListener(this.authStateSubscription, t, r, o);
  }
  beforeAuthStateChanged(t, r) {
    return this.beforeStateQueue.pushCallback(t, r);
  }
  onIdTokenChanged(t, r, o) {
    return this.registerStateListener(this.idTokenSubscription, t, r, o);
  }
  authStateReady() {
    return new Promise((t, r) => {
      if (this.currentUser) t();
      else {
        const o = this.onAuthStateChanged(() => {
          o(), t();
        }, r);
      }
    });
  }
  async revokeAccessToken(t) {
    if (this.currentUser) {
      const r = await this.currentUser.getIdToken(),
        o = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token: t,
          idToken: r,
        };
      this.tenantId != null && (o.tenantId = this.tenantId), await DS(this, o);
    }
  }
  toJSON() {
    var t;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON(),
    };
  }
  async _setRedirectUser(t, r) {
    const o = await this.getOrInitRedirectPersistenceManager(r);
    return t === null ? o.removeCurrentUser() : o.setCurrentUser(t);
  }
  async getOrInitRedirectPersistenceManager(t) {
    if (!this.redirectPersistenceManager) {
      const r = (t && ga(t)) || this._popupRedirectResolver;
      be(r, this, "argument-error"),
        (this.redirectPersistenceManager = await Ir.create(
          this,
          [ga(r._redirectPersistence)],
          "redirectUser"
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(t) {
    var r, o;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((r = this._currentUser) === null || r === void 0
        ? void 0
        : r._redirectEventId) === t
        ? this._currentUser
        : ((o = this.redirectUser) === null || o === void 0
            ? void 0
            : o._redirectEventId) === t
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(t) {
    if (t === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(t));
  }
  _notifyListenersIfCurrent(t) {
    t === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var t, r;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const o =
      (r = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !==
        null && r !== void 0
        ? r
        : null;
    this.lastNotifiedUid !== o &&
      ((this.lastNotifiedUid = o),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(t, r, o, c) {
    if (this._deleted) return () => {};
    const d = typeof r == "function" ? r : r.next.bind(r);
    let f = !1;
    const p = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (be(p, this, "internal-error"),
      p.then(() => {
        f || d(this.currentUser);
      }),
      typeof r == "function")
    ) {
      const h = t.addObserver(r, o, c);
      return () => {
        (f = !0), h();
      };
    } else {
      const h = t.addObserver(r);
      return () => {
        (f = !0), h();
      };
    }
  }
  async directlySetCurrentUser(t) {
    this.currentUser &&
      this.currentUser !== t &&
      this._currentUser._stopProactiveRefresh(),
      t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
      (this.currentUser = t),
      t
        ? await this.assertedPersistence.setCurrentUser(t)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(t) {
    return (this.operations = this.operations.then(t, t)), this.operations;
  }
  get assertedPersistence() {
    return (
      be(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(t) {
    !t ||
      this.frameworks.includes(t) ||
      (this.frameworks.push(t),
      this.frameworks.sort(),
      (this.clientVersion = D0(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var t;
    const r = { "X-Client-Version": this.clientVersion };
    this.app.options.appId && (r["X-Firebase-gmpid"] = this.app.options.appId);
    const o = await ((t = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getHeartbeatsHeader());
    o && (r["X-Firebase-Client"] = o);
    const c = await this._getAppCheckToken();
    return c && (r["X-Firebase-AppCheck"] = c), r;
  }
  async _getAppCheckToken() {
    var t;
    if (_n(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const r = await ((t = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getToken());
    return (
      r != null &&
        r.error &&
        dS(`Error while retrieving App Check token: ${r.error}`),
      r == null ? void 0 : r.token
    );
  }
}
function di(a) {
  return Qn(a);
}
class tv {
  constructor(t) {
    (this.auth = t),
      (this.observer = null),
      (this.addObserver = Jx((r) => (this.observer = r)));
  }
  get next() {
    return (
      be(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let zc = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: "",
};
function IS(a) {
  zc = a;
}
function N0(a) {
  return zc.loadJS(a);
}
function BS() {
  return zc.recaptchaEnterpriseScript;
}
function HS() {
  return zc.gapiScript;
}
function PS(a) {
  return `__${a}${Math.floor(Math.random() * 1e6)}`;
}
class VS {
  constructor() {
    this.enterprise = new qS();
  }
  ready(t) {
    t();
  }
  execute(t, r) {
    return Promise.resolve("token");
  }
  render(t, r) {
    return "";
  }
}
class qS {
  ready(t) {
    t();
  }
  execute(t, r) {
    return Promise.resolve("token");
  }
  render(t, r) {
    return "";
  }
}
const GS = "recaptcha-enterprise",
  M0 = "NO_RECAPTCHA";
class $S {
  constructor(t) {
    (this.type = GS), (this.auth = di(t));
  }
  async verify(t = "verify", r = !1) {
    async function o(d) {
      if (!r) {
        if (d.tenantId == null && d._agentRecaptchaConfig != null)
          return d._agentRecaptchaConfig.siteKey;
        if (
          d.tenantId != null &&
          d._tenantRecaptchaConfigs[d.tenantId] !== void 0
        )
          return d._tenantRecaptchaConfigs[d.tenantId].siteKey;
      }
      return new Promise(async (f, p) => {
        xS(d, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE",
        })
          .then((h) => {
            if (h.recaptchaKey === void 0)
              p(new Error("recaptcha Enterprise site key undefined"));
            else {
              const g = new _S(h);
              return (
                d.tenantId == null
                  ? (d._agentRecaptchaConfig = g)
                  : (d._tenantRecaptchaConfigs[d.tenantId] = g),
                f(g.siteKey)
              );
            }
          })
          .catch((h) => {
            p(h);
          });
      });
    }
    function c(d, f, p) {
      const h = window.grecaptcha;
      Qy(h)
        ? h.enterprise.ready(() => {
            h.enterprise
              .execute(d, { action: t })
              .then((g) => {
                f(g);
              })
              .catch(() => {
                f(M0);
              });
          })
        : p(Error("No reCAPTCHA enterprise script loaded."));
    }
    return this.auth.settings.appVerificationDisabledForTesting
      ? new VS().execute("siteKey", { action: "verify" })
      : new Promise((d, f) => {
          o(this.auth)
            .then((p) => {
              if (!r && Qy(window.grecaptcha)) c(p, d, f);
              else {
                if (typeof window > "u") {
                  f(
                    new Error("RecaptchaVerifier is only supported in browser")
                  );
                  return;
                }
                let h = BS();
                h.length !== 0 && (h += p),
                  N0(h)
                    .then(() => {
                      c(p, d, f);
                    })
                    .catch((g) => {
                      f(g);
                    });
              }
            })
            .catch((p) => {
              f(p);
            });
        });
  }
}
async function nv(a, t, r, o = !1, c = !1) {
  const d = new $S(a);
  let f;
  if (c) f = M0;
  else
    try {
      f = await d.verify(r);
    } catch {
      f = await d.verify(r, !0);
    }
  const p = Object.assign({}, t);
  if (r === "mfaSmsEnrollment" || r === "mfaSmsSignIn") {
    if ("phoneEnrollmentInfo" in p) {
      const h = p.phoneEnrollmentInfo.phoneNumber,
        g = p.phoneEnrollmentInfo.recaptchaToken;
      Object.assign(p, {
        phoneEnrollmentInfo: {
          phoneNumber: h,
          recaptchaToken: g,
          captchaResponse: f,
          clientType: "CLIENT_TYPE_WEB",
          recaptchaVersion: "RECAPTCHA_ENTERPRISE",
        },
      });
    } else if ("phoneSignInInfo" in p) {
      const h = p.phoneSignInInfo.recaptchaToken;
      Object.assign(p, {
        phoneSignInInfo: {
          recaptchaToken: h,
          captchaResponse: f,
          clientType: "CLIENT_TYPE_WEB",
          recaptchaVersion: "RECAPTCHA_ENTERPRISE",
        },
      });
    }
    return p;
  }
  return (
    o
      ? Object.assign(p, { captchaResp: f })
      : Object.assign(p, { captchaResponse: f }),
    Object.assign(p, { clientType: "CLIENT_TYPE_WEB" }),
    Object.assign(p, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
    p
  );
}
async function Lf(a, t, r, o, c) {
  var d;
  if (
    !((d = a._getRecaptchaConfig()) === null || d === void 0) &&
    d.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")
  ) {
    const f = await nv(a, t, r, r === "getOobCode");
    return o(a, f);
  } else
    return o(a, t).catch(async (f) => {
      if (f.code === "auth/missing-recaptcha-token") {
        console.log(
          `${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`
        );
        const p = await nv(a, t, r, r === "getOobCode");
        return o(a, p);
      } else return Promise.reject(f);
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function YS(a, t) {
  const r = d0(a, "auth");
  if (r.isInitialized()) {
    const c = r.getImmediate(),
      d = r.getOptions();
    if (Vr(d, t ?? {})) return c;
    En(c, "already-initialized");
  }
  return r.initialize({ options: t });
}
function XS(a, t) {
  const r = (t == null ? void 0 : t.persistence) || [],
    o = (Array.isArray(r) ? r : [r]).map(ga);
  t != null && t.errorMap && a._updateErrorMap(t.errorMap),
    a._initializeWithPersistence(
      o,
      t == null ? void 0 : t.popupRedirectResolver
    );
}
function KS(a, t, r) {
  const o = di(a);
  be(/^https?:\/\//.test(t), o, "invalid-emulator-scheme");
  const c = !1,
    d = k0(t),
    { host: f, port: p } = FS(t),
    h = p === null ? "" : `:${p}`,
    g = { url: `${d}//${f}${h}/` },
    b = Object.freeze({
      host: f,
      port: p,
      protocol: d.replace(":", ""),
      options: Object.freeze({ disableWarnings: c }),
    });
  if (!o._canInitEmulator) {
    be(o.config.emulator && o.emulatorConfig, o, "emulator-config-failed"),
      be(
        Vr(g, o.config.emulator) && Vr(b, o.emulatorConfig),
        o,
        "emulator-config-failed"
      );
    return;
  }
  (o.config.emulator = g),
    (o.emulatorConfig = b),
    (o.settings.appVerificationDisabledForTesting = !0),
    Jf(f) ? (o0("Auth", !0), Ix(`${d}//${f}${h}`)) : QS();
}
function k0(a) {
  const t = a.indexOf(":");
  return t < 0 ? "" : a.substr(0, t + 1);
}
function FS(a) {
  const t = k0(a),
    r = /(\/\/)?([^?#/]+)/.exec(a.substr(t.length));
  if (!r) return { host: "", port: null };
  const o = r[2].split("@").pop() || "",
    c = /^(\[[^\]]+\])(:|$)/.exec(o);
  if (c) {
    const d = c[1];
    return { host: d, port: av(o.substr(d.length + 1)) };
  } else {
    const [d, f] = o.split(":");
    return { host: d, port: av(f) };
  }
}
function av(a) {
  if (!a) return null;
  const t = Number(a);
  return isNaN(t) ? null : t;
}
function QS() {
  function a() {
    const t = document.createElement("p"),
      r = t.style;
    (t.innerText =
      "Running in emulator mode. Do not use with production credentials."),
      (r.position = "fixed"),
      (r.width = "100%"),
      (r.backgroundColor = "#ffffff"),
      (r.border = ".1em solid #000000"),
      (r.color = "#b50000"),
      (r.bottom = "0px"),
      (r.left = "0px"),
      (r.margin = "0px"),
      (r.zIndex = "10000"),
      (r.textAlign = "center"),
      t.classList.add("firebase-emulator-warning"),
      document.body.appendChild(t);
  }
  typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading"
        ? window.addEventListener("DOMContentLoaded", a)
        : a());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lh {
  constructor(t, r) {
    (this.providerId = t), (this.signInMethod = r);
  }
  toJSON() {
    return pa("not implemented");
  }
  _getIdTokenResponse(t) {
    return pa("not implemented");
  }
  _linkToIdToken(t, r) {
    return pa("not implemented");
  }
  _getReauthenticationResolver(t) {
    return pa("not implemented");
  }
}
async function ZS(a, t) {
  return xa(a, "POST", "/v1/accounts:signUp", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function JS(a, t) {
  return To(a, "POST", "/v1/accounts:signInWithPassword", ui(a, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function WS(a, t) {
  return To(a, "POST", "/v1/accounts:signInWithEmailLink", ui(a, t));
}
async function eT(a, t) {
  return To(a, "POST", "/v1/accounts:signInWithEmailLink", ui(a, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class go extends lh {
  constructor(t, r, o, c = null) {
    super("password", o),
      (this._email = t),
      (this._password = r),
      (this._tenantId = c);
  }
  static _fromEmailAndPassword(t, r) {
    return new go(t, r, "password");
  }
  static _fromEmailAndCode(t, r, o = null) {
    return new go(t, r, "emailLink", o);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId,
    };
  }
  static fromJSON(t) {
    const r = typeof t == "string" ? JSON.parse(t) : t;
    if (r != null && r.email && r != null && r.password) {
      if (r.signInMethod === "password")
        return this._fromEmailAndPassword(r.email, r.password);
      if (r.signInMethod === "emailLink")
        return this._fromEmailAndCode(r.email, r.password, r.tenantId);
    }
    return null;
  }
  async _getIdTokenResponse(t) {
    switch (this.signInMethod) {
      case "password":
        const r = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return Lf(t, r, "signInWithPassword", JS);
      case "emailLink":
        return WS(t, { email: this._email, oobCode: this._password });
      default:
        En(t, "internal-error");
    }
  }
  async _linkToIdToken(t, r) {
    switch (this.signInMethod) {
      case "password":
        const o = {
          idToken: r,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return Lf(t, o, "signUpPassword", ZS);
      case "emailLink":
        return eT(t, {
          idToken: r,
          email: this._email,
          oobCode: this._password,
        });
      default:
        En(t, "internal-error");
    }
  }
  _getReauthenticationResolver(t) {
    return this._getIdTokenResponse(t);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Br(a, t) {
  return To(a, "POST", "/v1/accounts:signInWithIdp", ui(a, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tT = "http://localhost";
class qi extends lh {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(t) {
    const r = new qi(t.providerId, t.signInMethod);
    return (
      t.idToken || t.accessToken
        ? (t.idToken && (r.idToken = t.idToken),
          t.accessToken && (r.accessToken = t.accessToken),
          t.nonce && !t.pendingToken && (r.nonce = t.nonce),
          t.pendingToken && (r.pendingToken = t.pendingToken))
        : t.oauthToken && t.oauthTokenSecret
        ? ((r.accessToken = t.oauthToken), (r.secret = t.oauthTokenSecret))
        : En("argument-error"),
      r
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(t) {
    const r = typeof t == "string" ? JSON.parse(t) : t,
      { providerId: o, signInMethod: c } = r,
      d = eh(r, ["providerId", "signInMethod"]);
    if (!o || !c) return null;
    const f = new qi(o, c);
    return (
      (f.idToken = d.idToken || void 0),
      (f.accessToken = d.accessToken || void 0),
      (f.secret = d.secret),
      (f.nonce = d.nonce),
      (f.pendingToken = d.pendingToken || null),
      f
    );
  }
  _getIdTokenResponse(t) {
    const r = this.buildRequest();
    return Br(t, r);
  }
  _linkToIdToken(t, r) {
    const o = this.buildRequest();
    return (o.idToken = r), Br(t, o);
  }
  _getReauthenticationResolver(t) {
    const r = this.buildRequest();
    return (r.autoCreate = !1), Br(t, r);
  }
  buildRequest() {
    const t = { requestUri: tT, returnSecureToken: !0 };
    if (this.pendingToken) t.pendingToken = this.pendingToken;
    else {
      const r = {};
      this.idToken && (r.id_token = this.idToken),
        this.accessToken && (r.access_token = this.accessToken),
        this.secret && (r.oauth_token_secret = this.secret),
        (r.providerId = this.providerId),
        this.nonce && !this.pendingToken && (r.nonce = this.nonce),
        (t.postBody = xo(r));
    }
    return t;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nT(a) {
  switch (a) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function aT(a) {
  const t = lo(oo(a)).link,
    r = t ? lo(oo(t)).deep_link_id : null,
    o = lo(oo(a)).deep_link_id;
  return (o ? lo(oo(o)).link : null) || o || r || t || a;
}
class oh {
  constructor(t) {
    var r, o, c, d, f, p;
    const h = lo(oo(t)),
      g = (r = h.apiKey) !== null && r !== void 0 ? r : null,
      b = (o = h.oobCode) !== null && o !== void 0 ? o : null,
      E = nT((c = h.mode) !== null && c !== void 0 ? c : null);
    be(g && b && E, "argument-error"),
      (this.apiKey = g),
      (this.operation = E),
      (this.code = b),
      (this.continueUrl =
        (d = h.continueUrl) !== null && d !== void 0 ? d : null),
      (this.languageCode = (f = h.lang) !== null && f !== void 0 ? f : null),
      (this.tenantId = (p = h.tenantId) !== null && p !== void 0 ? p : null);
  }
  static parseLink(t) {
    const r = aT(t);
    try {
      return new oh(r);
    } catch {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kr {
  constructor() {
    this.providerId = Kr.PROVIDER_ID;
  }
  static credential(t, r) {
    return go._fromEmailAndPassword(t, r);
  }
  static credentialWithLink(t, r) {
    const o = oh.parseLink(r);
    return be(o, "argument-error"), go._fromEmailAndCode(t, o.code, o.tenantId);
  }
}
Kr.PROVIDER_ID = "password";
Kr.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
Kr.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sh {
  constructor(t) {
    (this.providerId = t),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(t) {
    this.defaultLanguageCode = t;
  }
  setCustomParameters(t) {
    return (this.customParameters = t), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Co extends sh {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(t) {
    return this.scopes.includes(t) || this.scopes.push(t), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wa extends Co {
  constructor() {
    super("facebook.com");
  }
  static credential(t) {
    return qi._fromParams({
      providerId: Wa.PROVIDER_ID,
      signInMethod: Wa.FACEBOOK_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return Wa.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Wa.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return Wa.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Wa.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Wa.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ma extends Co {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(t, r) {
    return qi._fromParams({
      providerId: ma.PROVIDER_ID,
      signInMethod: ma.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: r,
    });
  }
  static credentialFromResult(t) {
    return ma.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return ma.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthIdToken: r, oauthAccessToken: o } = t;
    if (!r && !o) return null;
    try {
      return ma.credential(r, o);
    } catch {
      return null;
    }
  }
}
ma.GOOGLE_SIGN_IN_METHOD = "google.com";
ma.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ei extends Co {
  constructor() {
    super("github.com");
  }
  static credential(t) {
    return qi._fromParams({
      providerId: ei.PROVIDER_ID,
      signInMethod: ei.GITHUB_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return ei.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return ei.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return ei.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
ei.GITHUB_SIGN_IN_METHOD = "github.com";
ei.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ti extends Co {
  constructor() {
    super("twitter.com");
  }
  static credential(t, r) {
    return qi._fromParams({
      providerId: ti.PROVIDER_ID,
      signInMethod: ti.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: r,
    });
  }
  static credentialFromResult(t) {
    return ti.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return ti.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthAccessToken: r, oauthTokenSecret: o } = t;
    if (!r || !o) return null;
    try {
      return ti.credential(r, o);
    } catch {
      return null;
    }
  }
}
ti.TWITTER_SIGN_IN_METHOD = "twitter.com";
ti.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function iT(a, t) {
  return To(a, "POST", "/v1/accounts:signUp", ui(a, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gi {
  constructor(t) {
    (this.user = t.user),
      (this.providerId = t.providerId),
      (this._tokenResponse = t._tokenResponse),
      (this.operationType = t.operationType);
  }
  static async _fromIdTokenResponse(t, r, o, c = !1) {
    const d = await kn._fromIdTokenResponse(t, o, c),
      f = iv(o);
    return new Gi({
      user: d,
      providerId: f,
      _tokenResponse: o,
      operationType: r,
    });
  }
  static async _forOperation(t, r, o) {
    await t._updateTokensIfNecessary(o, !0);
    const c = iv(o);
    return new Gi({
      user: t,
      providerId: c,
      _tokenResponse: o,
      operationType: r,
    });
  }
}
function iv(a) {
  return a.providerId ? a.providerId : "phoneNumber" in a ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bc extends ci {
  constructor(t, r, o, c) {
    var d;
    super(r.code, r.message),
      (this.operationType = o),
      (this.user = c),
      Object.setPrototypeOf(this, bc.prototype),
      (this.customData = {
        appName: t.name,
        tenantId: (d = t.tenantId) !== null && d !== void 0 ? d : void 0,
        _serverResponse: r.customData._serverResponse,
        operationType: o,
      });
  }
  static _fromErrorAndOperation(t, r, o, c) {
    return new bc(t, r, o, c);
  }
}
function L0(a, t, r, o) {
  return (
    t === "reauthenticate"
      ? r._getReauthenticationResolver(a)
      : r._getIdTokenResponse(a)
  ).catch((d) => {
    throw d.code === "auth/multi-factor-auth-required"
      ? bc._fromErrorAndOperation(a, d, t, o)
      : d;
  });
}
async function rT(a, t, r = !1) {
  const o = await Gr(a, t._linkToIdToken(a.auth, await a.getIdToken()), r);
  return Gi._forOperation(a, "link", o);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function lT(a, t, r = !1) {
  const { auth: o } = a;
  if (_n(o.app)) return Promise.reject(ya(o));
  const c = "reauthenticate";
  try {
    const d = await Gr(a, L0(o, c, t, a), r);
    be(d.idToken, o, "internal-error");
    const f = ih(d.idToken);
    be(f, o, "internal-error");
    const { sub: p } = f;
    return be(a.uid === p, o, "user-mismatch"), Gi._forOperation(a, c, d);
  } catch (d) {
    throw (
      ((d == null ? void 0 : d.code) === "auth/user-not-found" &&
        En(o, "user-mismatch"),
      d)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function j0(a, t, r = !1) {
  if (_n(a.app)) return Promise.reject(ya(a));
  const o = "signIn",
    c = await L0(a, o, t),
    d = await Gi._fromIdTokenResponse(a, o, c);
  return r || (await a._updateCurrentUser(d.user)), d;
}
async function oT(a, t) {
  return j0(di(a), t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function U0(a) {
  const t = di(a);
  t._getPasswordPolicyInternal() && (await t._updatePasswordPolicy());
}
async function sT(a, t, r) {
  if (_n(a.app)) return Promise.reject(ya(a));
  const o = di(a),
    f = await Lf(
      o,
      {
        returnSecureToken: !0,
        email: t,
        password: r,
        clientType: "CLIENT_TYPE_WEB",
      },
      "signUpPassword",
      iT
    ).catch((h) => {
      throw (h.code === "auth/password-does-not-meet-requirements" && U0(a), h);
    }),
    p = await Gi._fromIdTokenResponse(o, "signIn", f);
  return await o._updateCurrentUser(p.user), p;
}
function cT(a, t, r) {
  return _n(a.app)
    ? Promise.reject(ya(a))
    : oT(Qn(a), Kr.credential(t, r)).catch(async (o) => {
        throw (
          (o.code === "auth/password-does-not-meet-requirements" && U0(a), o)
        );
      });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function uT(a, t) {
  return xa(a, "POST", "/v1/accounts:update", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function dT(a, { displayName: t, photoURL: r }) {
  if (t === void 0 && r === void 0) return;
  const o = Qn(a),
    d = {
      idToken: await o.getIdToken(),
      displayName: t,
      photoUrl: r,
      returnSecureToken: !0,
    },
    f = await Gr(o, uT(o.auth, d));
  (o.displayName = f.displayName || null), (o.photoURL = f.photoUrl || null);
  const p = o.providerData.find(({ providerId: h }) => h === "password");
  p && ((p.displayName = o.displayName), (p.photoURL = o.photoURL)),
    await o._updateTokensIfNecessary(f);
}
function fT(a, t, r, o) {
  return Qn(a).onIdTokenChanged(t, r, o);
}
function hT(a, t, r) {
  return Qn(a).beforeAuthStateChanged(t, r);
}
function mT(a, t, r, o) {
  return Qn(a).onAuthStateChanged(t, r, o);
}
function pT(a) {
  return Qn(a).signOut();
}
const wc = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class z0 {
  constructor(t, r) {
    (this.storageRetriever = t), (this.type = r);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(wc, "1"),
          this.storage.removeItem(wc),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(t, r) {
    return this.storage.setItem(t, JSON.stringify(r)), Promise.resolve();
  }
  _get(t) {
    const r = this.storage.getItem(t);
    return Promise.resolve(r ? JSON.parse(r) : null);
  }
  _remove(t) {
    return this.storage.removeItem(t), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gT = 1e3,
  yT = 10;
class I0 extends z0 {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (t, r) => this.onStorageEvent(t, r)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.fallbackToPolling = O0()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(t) {
    for (const r of Object.keys(this.listeners)) {
      const o = this.storage.getItem(r),
        c = this.localCache[r];
      o !== c && t(r, c, o);
    }
  }
  onStorageEvent(t, r = !1) {
    if (!t.key) {
      this.forAllChangedKeys((f, p, h) => {
        this.notifyListeners(f, h);
      });
      return;
    }
    const o = t.key;
    r ? this.detachListener() : this.stopPolling();
    const c = () => {
        const f = this.storage.getItem(o);
        (!r && this.localCache[o] === f) || this.notifyListeners(o, f);
      },
      d = this.storage.getItem(o);
    MS() && d !== t.newValue && t.newValue !== t.oldValue
      ? setTimeout(c, yT)
      : c();
  }
  notifyListeners(t, r) {
    this.localCache[t] = r;
    const o = this.listeners[t];
    if (o) for (const c of Array.from(o)) c(r && JSON.parse(r));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((t, r, o) => {
          this.onStorageEvent(
            new StorageEvent("storage", { key: t, oldValue: r, newValue: o }),
            !0
          );
        });
      }, gT));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(t, r) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[t] ||
        ((this.listeners[t] = new Set()),
        (this.localCache[t] = this.storage.getItem(t))),
      this.listeners[t].add(r);
  }
  _removeListener(t, r) {
    this.listeners[t] &&
      (this.listeners[t].delete(r),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(t, r) {
    await super._set(t, r), (this.localCache[t] = JSON.stringify(r));
  }
  async _get(t) {
    const r = await super._get(t);
    return (this.localCache[t] = JSON.stringify(r)), r;
  }
  async _remove(t) {
    await super._remove(t), delete this.localCache[t];
  }
}
I0.type = "LOCAL";
const vT = I0;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class B0 extends z0 {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(t, r) {}
  _removeListener(t, r) {}
}
B0.type = "SESSION";
const H0 = B0;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bT(a) {
  return Promise.all(
    a.map(async (t) => {
      try {
        return { fulfilled: !0, value: await t };
      } catch (r) {
        return { fulfilled: !1, reason: r };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ic {
  constructor(t) {
    (this.eventTarget = t),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(t) {
    const r = this.receivers.find((c) => c.isListeningto(t));
    if (r) return r;
    const o = new Ic(t);
    return this.receivers.push(o), o;
  }
  isListeningto(t) {
    return this.eventTarget === t;
  }
  async handleEvent(t) {
    const r = t,
      { eventId: o, eventType: c, data: d } = r.data,
      f = this.handlersMap[c];
    if (!(f != null && f.size)) return;
    r.ports[0].postMessage({ status: "ack", eventId: o, eventType: c });
    const p = Array.from(f).map(async (g) => g(r.origin, d)),
      h = await bT(p);
    r.ports[0].postMessage({
      status: "done",
      eventId: o,
      eventType: c,
      response: h,
    });
  }
  _subscribe(t, r) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[t] || (this.handlersMap[t] = new Set()),
      this.handlersMap[t].add(r);
  }
  _unsubscribe(t, r) {
    this.handlersMap[t] && r && this.handlersMap[t].delete(r),
      (!r || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
Ic.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ch(a = "", t = 10) {
  let r = "";
  for (let o = 0; o < t; o++) r += Math.floor(Math.random() * 10);
  return a + r;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wT {
  constructor(t) {
    (this.target = t), (this.handlers = new Set());
  }
  removeMessageHandler(t) {
    t.messageChannel &&
      (t.messageChannel.port1.removeEventListener("message", t.onMessage),
      t.messageChannel.port1.close()),
      this.handlers.delete(t);
  }
  async _send(t, r, o = 50) {
    const c = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!c) throw new Error("connection_unavailable");
    let d, f;
    return new Promise((p, h) => {
      const g = ch("", 20);
      c.port1.start();
      const b = setTimeout(() => {
        h(new Error("unsupported_event"));
      }, o);
      (f = {
        messageChannel: c,
        onMessage(E) {
          const w = E;
          if (w.data.eventId === g)
            switch (w.data.status) {
              case "ack":
                clearTimeout(b),
                  (d = setTimeout(() => {
                    h(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(d), p(w.data.response);
                break;
              default:
                clearTimeout(b),
                  clearTimeout(d),
                  h(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(f),
        c.port1.addEventListener("message", f.onMessage),
        this.target.postMessage({ eventType: t, eventId: g, data: r }, [
          c.port2,
        ]);
    }).finally(() => {
      f && this.removeMessageHandler(f);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Xn() {
  return window;
}
function _T(a) {
  Xn().location.href = a;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function P0() {
  return (
    typeof Xn().WorkerGlobalScope < "u" &&
    typeof Xn().importScripts == "function"
  );
}
async function xT() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function ET() {
  var a;
  return (
    ((a = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    a === void 0
      ? void 0
      : a.controller) || null
  );
}
function ST() {
  return P0() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const V0 = "firebaseLocalStorageDb",
  TT = 1,
  _c = "firebaseLocalStorage",
  q0 = "fbase_key";
class Ao {
  constructor(t) {
    this.request = t;
  }
  toPromise() {
    return new Promise((t, r) => {
      this.request.addEventListener("success", () => {
        t(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          r(this.request.error);
        });
    });
  }
}
function Bc(a, t) {
  return a.transaction([_c], t ? "readwrite" : "readonly").objectStore(_c);
}
function CT() {
  const a = indexedDB.deleteDatabase(V0);
  return new Ao(a).toPromise();
}
function jf() {
  const a = indexedDB.open(V0, TT);
  return new Promise((t, r) => {
    a.addEventListener("error", () => {
      r(a.error);
    }),
      a.addEventListener("upgradeneeded", () => {
        const o = a.result;
        try {
          o.createObjectStore(_c, { keyPath: q0 });
        } catch (c) {
          r(c);
        }
      }),
      a.addEventListener("success", async () => {
        const o = a.result;
        o.objectStoreNames.contains(_c)
          ? t(o)
          : (o.close(), await CT(), t(await jf()));
      });
  });
}
async function rv(a, t, r) {
  const o = Bc(a, !0).put({ [q0]: t, value: r });
  return new Ao(o).toPromise();
}
async function AT(a, t) {
  const r = Bc(a, !1).get(t),
    o = await new Ao(r).toPromise();
  return o === void 0 ? null : o.value;
}
function lv(a, t) {
  const r = Bc(a, !0).delete(t);
  return new Ao(r).toPromise();
}
const RT = 800,
  OT = 3;
class G0 {
  constructor() {
    (this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await jf()), this.db);
  }
  async _withRetries(t) {
    let r = 0;
    for (;;)
      try {
        const o = await this._openDb();
        return await t(o);
      } catch (o) {
        if (r++ > OT) throw o;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return P0() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = Ic._getInstance(ST())),
      this.receiver._subscribe("keyChanged", async (t, r) => ({
        keyProcessed: (await this._poll()).includes(r.key),
      })),
      this.receiver._subscribe("ping", async (t, r) => ["keyChanged"]);
  }
  async initializeSender() {
    var t, r;
    if (((this.activeServiceWorker = await xT()), !this.activeServiceWorker))
      return;
    this.sender = new wT(this.activeServiceWorker);
    const o = await this.sender._send("ping", {}, 800);
    o &&
      !((t = o[0]) === null || t === void 0) &&
      t.fulfilled &&
      !((r = o[0]) === null || r === void 0) &&
      r.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(t) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        ET() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          { key: t },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const t = await jf();
      return await rv(t, wc, "1"), await lv(t, wc), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(t) {
    this.pendingWrites++;
    try {
      await t();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(t, r) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((o) => rv(o, t, r)),
        (this.localCache[t] = r),
        this.notifyServiceWorker(t)
      )
    );
  }
  async _get(t) {
    const r = await this._withRetries((o) => AT(o, t));
    return (this.localCache[t] = r), r;
  }
  async _remove(t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => lv(r, t)),
        delete this.localCache[t],
        this.notifyServiceWorker(t)
      )
    );
  }
  async _poll() {
    const t = await this._withRetries((c) => {
      const d = Bc(c, !1).getAll();
      return new Ao(d).toPromise();
    });
    if (!t) return [];
    if (this.pendingWrites !== 0) return [];
    const r = [],
      o = new Set();
    if (t.length !== 0)
      for (const { fbase_key: c, value: d } of t)
        o.add(c),
          JSON.stringify(this.localCache[c]) !== JSON.stringify(d) &&
            (this.notifyListeners(c, d), r.push(c));
    for (const c of Object.keys(this.localCache))
      this.localCache[c] &&
        !o.has(c) &&
        (this.notifyListeners(c, null), r.push(c));
    return r;
  }
  notifyListeners(t, r) {
    this.localCache[t] = r;
    const o = this.listeners[t];
    if (o) for (const c of Array.from(o)) c(r);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), RT));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(t, r) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[t] || ((this.listeners[t] = new Set()), this._get(t)),
      this.listeners[t].add(r);
  }
  _removeListener(t, r) {
    this.listeners[t] &&
      (this.listeners[t].delete(r),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
G0.type = "LOCAL";
const DT = G0;
new So(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $0(a, t) {
  return t
    ? ga(t)
    : (be(a._popupRedirectResolver, a, "argument-error"),
      a._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uh extends lh {
  constructor(t) {
    super("custom", "custom"), (this.params = t);
  }
  _getIdTokenResponse(t) {
    return Br(t, this._buildIdpRequest());
  }
  _linkToIdToken(t, r) {
    return Br(t, this._buildIdpRequest(r));
  }
  _getReauthenticationResolver(t) {
    return Br(t, this._buildIdpRequest());
  }
  _buildIdpRequest(t) {
    const r = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return t && (r.idToken = t), r;
  }
}
function NT(a) {
  return j0(a.auth, new uh(a), a.bypassAuthState);
}
function MT(a) {
  const { auth: t, user: r } = a;
  return be(r, t, "internal-error"), lT(r, new uh(a), a.bypassAuthState);
}
async function kT(a) {
  const { auth: t, user: r } = a;
  return be(r, t, "internal-error"), rT(r, new uh(a), a.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Y0 {
  constructor(t, r, o, c, d = !1) {
    (this.auth = t),
      (this.resolver = o),
      (this.user = c),
      (this.bypassAuthState = d),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(r) ? r : [r]);
  }
  execute() {
    return new Promise(async (t, r) => {
      this.pendingPromise = { resolve: t, reject: r };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (o) {
        this.reject(o);
      }
    });
  }
  async onAuthEvent(t) {
    const {
      urlResponse: r,
      sessionId: o,
      postBody: c,
      tenantId: d,
      error: f,
      type: p,
    } = t;
    if (f) {
      this.reject(f);
      return;
    }
    const h = {
      auth: this.auth,
      requestUri: r,
      sessionId: o,
      tenantId: d || void 0,
      postBody: c || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(p)(h));
    } catch (g) {
      this.reject(g);
    }
  }
  onError(t) {
    this.reject(t);
  }
  getIdpTask(t) {
    switch (t) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return NT;
      case "linkViaPopup":
      case "linkViaRedirect":
        return kT;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return MT;
      default:
        En(this.auth, "internal-error");
    }
  }
  resolve(t) {
    wa(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(t),
      this.unregisterAndCleanUp();
  }
  reject(t) {
    wa(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(t),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const LT = new So(2e3, 1e4);
async function jT(a, t, r) {
  if (_n(a.app))
    return Promise.reject(Ln(a, "operation-not-supported-in-this-environment"));
  const o = di(a);
  fS(a, t, sh);
  const c = $0(o, r);
  return new Hi(o, "signInViaPopup", t, c).executeNotNull();
}
class Hi extends Y0 {
  constructor(t, r, o, c, d) {
    super(t, r, c, d),
      (this.provider = o),
      (this.authWindow = null),
      (this.pollId = null),
      Hi.currentPopupAction && Hi.currentPopupAction.cancel(),
      (Hi.currentPopupAction = this);
  }
  async executeNotNull() {
    const t = await this.execute();
    return be(t, this.auth, "internal-error"), t;
  }
  async onExecution() {
    wa(this.filter.length === 1, "Popup operations only handle one event");
    const t = ch();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      t
    )),
      (this.authWindow.associatedEvent = t),
      this.resolver._originValidation(this.auth).catch((r) => {
        this.reject(r);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (r) => {
        r || this.reject(Ln(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var t;
    return (
      ((t = this.authWindow) === null || t === void 0
        ? void 0
        : t.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(Ln(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (Hi.currentPopupAction = null);
  }
  pollUserCancellation() {
    const t = () => {
      var r, o;
      if (
        !(
          (o =
            (r = this.authWindow) === null || r === void 0
              ? void 0
              : r.window) === null || o === void 0
        ) &&
        o.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(Ln(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(t, LT.get());
    };
    t();
  }
}
Hi.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const UT = "pendingRedirect",
  oc = new Map();
class zT extends Y0 {
  constructor(t, r, o = !1) {
    super(
      t,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      r,
      void 0,
      o
    ),
      (this.eventId = null);
  }
  async execute() {
    let t = oc.get(this.auth._key());
    if (!t) {
      try {
        const o = (await IT(this.resolver, this.auth))
          ? await super.execute()
          : null;
        t = () => Promise.resolve(o);
      } catch (r) {
        t = () => Promise.reject(r);
      }
      oc.set(this.auth._key(), t);
    }
    return (
      this.bypassAuthState ||
        oc.set(this.auth._key(), () => Promise.resolve(null)),
      t()
    );
  }
  async onAuthEvent(t) {
    if (t.type === "signInViaRedirect") return super.onAuthEvent(t);
    if (t.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (t.eventId) {
      const r = await this.auth._redirectUserForId(t.eventId);
      if (r) return (this.user = r), super.onAuthEvent(t);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function IT(a, t) {
  const r = PT(t),
    o = HT(a);
  if (!(await o._isAvailable())) return !1;
  const c = (await o._get(r)) === "true";
  return await o._remove(r), c;
}
function BT(a, t) {
  oc.set(a._key(), t);
}
function HT(a) {
  return ga(a._redirectPersistence);
}
function PT(a) {
  return lc(UT, a.config.apiKey, a.name);
}
async function VT(a, t, r = !1) {
  if (_n(a.app)) return Promise.reject(ya(a));
  const o = di(a),
    c = $0(o, t),
    f = await new zT(o, c, r).execute();
  return (
    f &&
      !r &&
      (delete f.user._redirectEventId,
      await o._persistUserIfCurrent(f.user),
      await o._setRedirectUser(null, t)),
    f
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qT = 10 * 60 * 1e3;
class GT {
  constructor(t) {
    (this.auth = t),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(t) {
    this.consumers.add(t),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, t) &&
        (this.sendToConsumer(this.queuedRedirectEvent, t),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(t) {
    this.consumers.delete(t);
  }
  onEvent(t) {
    if (this.hasEventBeenHandled(t)) return !1;
    let r = !1;
    return (
      this.consumers.forEach((o) => {
        this.isEventForConsumer(t, o) &&
          ((r = !0), this.sendToConsumer(t, o), this.saveEventToCache(t));
      }),
      this.hasHandledPotentialRedirect ||
        !$T(t) ||
        ((this.hasHandledPotentialRedirect = !0),
        r || ((this.queuedRedirectEvent = t), (r = !0))),
      r
    );
  }
  sendToConsumer(t, r) {
    var o;
    if (t.error && !X0(t)) {
      const c =
        ((o = t.error.code) === null || o === void 0
          ? void 0
          : o.split("auth/")[1]) || "internal-error";
      r.onError(Ln(this.auth, c));
    } else r.onAuthEvent(t);
  }
  isEventForConsumer(t, r) {
    const o = r.eventId === null || (!!t.eventId && t.eventId === r.eventId);
    return r.filter.includes(t.type) && o;
  }
  hasEventBeenHandled(t) {
    return (
      Date.now() - this.lastProcessedEventTime >= qT &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(ov(t))
    );
  }
  saveEventToCache(t) {
    this.cachedEventUids.add(ov(t)), (this.lastProcessedEventTime = Date.now());
  }
}
function ov(a) {
  return [a.type, a.eventId, a.sessionId, a.tenantId]
    .filter((t) => t)
    .join("-");
}
function X0({ type: a, error: t }) {
  return (
    a === "unknown" && (t == null ? void 0 : t.code) === "auth/no-auth-event"
  );
}
function $T(a) {
  switch (a.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return X0(a);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function YT(a, t = {}) {
  return xa(a, "GET", "/v1/projects", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const XT = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  KT = /^https?/;
async function FT(a) {
  if (a.config.emulator) return;
  const { authorizedDomains: t } = await YT(a);
  for (const r of t)
    try {
      if (QT(r)) return;
    } catch {}
  En(a, "unauthorized-domain");
}
function QT(a) {
  const t = Mf(),
    { protocol: r, hostname: o } = new URL(t);
  if (a.startsWith("chrome-extension://")) {
    const f = new URL(a);
    return f.hostname === "" && o === ""
      ? r === "chrome-extension:" &&
          a.replace("chrome-extension://", "") ===
            t.replace("chrome-extension://", "")
      : r === "chrome-extension:" && f.hostname === o;
  }
  if (!KT.test(r)) return !1;
  if (XT.test(a)) return o === a;
  const c = a.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + c + "|" + c + ")$", "i").test(o);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ZT = new So(3e4, 6e4);
function sv() {
  const a = Xn().___jsl;
  if (a != null && a.H) {
    for (const t of Object.keys(a.H))
      if (
        ((a.H[t].r = a.H[t].r || []),
        (a.H[t].L = a.H[t].L || []),
        (a.H[t].r = [...a.H[t].L]),
        a.CP)
      )
        for (let r = 0; r < a.CP.length; r++) a.CP[r] = null;
  }
}
function JT(a) {
  return new Promise((t, r) => {
    var o, c, d;
    function f() {
      sv(),
        gapi.load("gapi.iframes", {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            sv(), r(Ln(a, "network-request-failed"));
          },
          timeout: ZT.get(),
        });
    }
    if (
      !(
        (c = (o = Xn().gapi) === null || o === void 0 ? void 0 : o.iframes) ===
          null || c === void 0
      ) &&
      c.Iframe
    )
      t(gapi.iframes.getContext());
    else if (!((d = Xn().gapi) === null || d === void 0) && d.load) f();
    else {
      const p = PS("iframefcb");
      return (
        (Xn()[p] = () => {
          gapi.load ? f() : r(Ln(a, "network-request-failed"));
        }),
        N0(`${HS()}?onload=${p}`).catch((h) => r(h))
      );
    }
  }).catch((t) => {
    throw ((sc = null), t);
  });
}
let sc = null;
function WT(a) {
  return (sc = sc || JT(a)), sc;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const eC = new So(5e3, 15e3),
  tC = "__/auth/iframe",
  nC = "emulator/auth/iframe",
  aC = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  iC = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function rC(a) {
  const t = a.config;
  be(t.authDomain, a, "auth-domain-config-required");
  const r = t.emulator ? ah(t, nC) : `https://${a.config.authDomain}/${tC}`,
    o = { apiKey: t.apiKey, appName: a.name, v: Eo },
    c = iC.get(a.config.apiHost);
  c && (o.eid = c);
  const d = a._getFrameworks();
  return d.length && (o.fw = d.join(",")), `${r}?${xo(o).slice(1)}`;
}
async function lC(a) {
  const t = await WT(a),
    r = Xn().gapi;
  return (
    be(r, a, "internal-error"),
    t.open(
      {
        where: document.body,
        url: rC(a),
        messageHandlersFilter: r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: aC,
        dontclear: !0,
      },
      (o) =>
        new Promise(async (c, d) => {
          await o.restyle({ setHideOnLeave: !1 });
          const f = Ln(a, "network-request-failed"),
            p = Xn().setTimeout(() => {
              d(f);
            }, eC.get());
          function h() {
            Xn().clearTimeout(p), c(o);
          }
          o.ping(h).then(h, () => {
            d(f);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const oC = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  sC = 500,
  cC = 600,
  uC = "_blank",
  dC = "http://localhost";
class cv {
  constructor(t) {
    (this.window = t), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function fC(a, t, r, o = sC, c = cC) {
  const d = Math.max((window.screen.availHeight - c) / 2, 0).toString(),
    f = Math.max((window.screen.availWidth - o) / 2, 0).toString();
  let p = "";
  const h = Object.assign(Object.assign({}, oC), {
      width: o.toString(),
      height: c.toString(),
      top: d,
      left: f,
    }),
    g = zt().toLowerCase();
  r && (p = S0(g) ? uC : r), x0(g) && ((t = t || dC), (h.scrollbars = "yes"));
  const b = Object.entries(h).reduce((w, [O, M]) => `${w}${O}=${M},`, "");
  if (NS(g) && p !== "_self") return hC(t || "", p), new cv(null);
  const E = window.open(t || "", p, b);
  be(E, a, "popup-blocked");
  try {
    E.focus();
  } catch {}
  return new cv(E);
}
function hC(a, t) {
  const r = document.createElement("a");
  (r.href = a), (r.target = t);
  const o = document.createEvent("MouseEvent");
  o.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    r.dispatchEvent(o);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const mC = "__/auth/handler",
  pC = "emulator/auth/handler",
  gC = encodeURIComponent("fac");
async function uv(a, t, r, o, c, d) {
  be(a.config.authDomain, a, "auth-domain-config-required"),
    be(a.config.apiKey, a, "invalid-api-key");
  const f = {
    apiKey: a.config.apiKey,
    appName: a.name,
    authType: r,
    redirectUrl: o,
    v: Eo,
    eventId: c,
  };
  if (t instanceof sh) {
    t.setDefaultLanguage(a.languageCode),
      (f.providerId = t.providerId || ""),
      Zx(t.getCustomParameters()) ||
        (f.customParameters = JSON.stringify(t.getCustomParameters()));
    for (const [b, E] of Object.entries({})) f[b] = E;
  }
  if (t instanceof Co) {
    const b = t.getScopes().filter((E) => E !== "");
    b.length > 0 && (f.scopes = b.join(","));
  }
  a.tenantId && (f.tid = a.tenantId);
  const p = f;
  for (const b of Object.keys(p)) p[b] === void 0 && delete p[b];
  const h = await a._getAppCheckToken(),
    g = h ? `#${gC}=${encodeURIComponent(h)}` : "";
  return `${yC(a)}?${xo(p).slice(1)}${g}`;
}
function yC({ config: a }) {
  return a.emulator ? ah(a, pC) : `https://${a.authDomain}/${mC}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const bf = "webStorageSupport";
class vC {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = H0),
      (this._completeRedirectFn = VT),
      (this._overrideRedirectResult = BT);
  }
  async _openPopup(t, r, o, c) {
    var d;
    wa(
      (d = this.eventManagers[t._key()]) === null || d === void 0
        ? void 0
        : d.manager,
      "_initialize() not called before _openPopup()"
    );
    const f = await uv(t, r, o, Mf(), c);
    return fC(t, f, ch());
  }
  async _openRedirect(t, r, o, c) {
    await this._originValidation(t);
    const d = await uv(t, r, o, Mf(), c);
    return _T(d), new Promise(() => {});
  }
  _initialize(t) {
    const r = t._key();
    if (this.eventManagers[r]) {
      const { manager: c, promise: d } = this.eventManagers[r];
      return c
        ? Promise.resolve(c)
        : (wa(d, "If manager is not set, promise should be"), d);
    }
    const o = this.initAndGetManager(t);
    return (
      (this.eventManagers[r] = { promise: o }),
      o.catch(() => {
        delete this.eventManagers[r];
      }),
      o
    );
  }
  async initAndGetManager(t) {
    const r = await lC(t),
      o = new GT(t);
    return (
      r.register(
        "authEvent",
        (c) => (
          be(c == null ? void 0 : c.authEvent, t, "invalid-auth-event"),
          { status: o.onEvent(c.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[t._key()] = { manager: o }),
      (this.iframes[t._key()] = r),
      o
    );
  }
  _isIframeWebStorageSupported(t, r) {
    this.iframes[t._key()].send(
      bf,
      { type: bf },
      (c) => {
        var d;
        const f =
          (d = c == null ? void 0 : c[0]) === null || d === void 0
            ? void 0
            : d[bf];
        f !== void 0 && r(!!f), En(t, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(t) {
    const r = t._key();
    return (
      this.originValidationPromises[r] ||
        (this.originValidationPromises[r] = FT(t)),
      this.originValidationPromises[r]
    );
  }
  get _shouldInitProactively() {
    return O0() || E0() || rh();
  }
}
const bC = vC;
var dv = "@firebase/auth",
  fv = "1.10.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wC {
  constructor(t) {
    (this.auth = t), (this.internalListeners = new Map());
  }
  getUid() {
    var t;
    return (
      this.assertAuthConfigured(),
      ((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) ||
        null
    );
  }
  async getToken(t) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(t) }
        : null
    );
  }
  addAuthTokenListener(t) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return;
    const r = this.auth.onIdTokenChanged((o) => {
      t((o == null ? void 0 : o.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(t, r), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(t) {
    this.assertAuthConfigured();
    const r = this.internalListeners.get(t);
    r && (this.internalListeners.delete(t), r(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    be(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _C(a) {
  switch (a) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function xC(a) {
  mo(
    new qr(
      "auth",
      (t, { options: r }) => {
        const o = t.getProvider("app").getImmediate(),
          c = t.getProvider("heartbeat"),
          d = t.getProvider("app-check-internal"),
          { apiKey: f, authDomain: p } = o.options;
        be(f && !f.includes(":"), "invalid-api-key", { appName: o.name });
        const h = {
            apiKey: f,
            authDomain: p,
            clientPlatform: a,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: D0(a),
          },
          g = new zS(o, c, d, h);
        return XS(g, r), g;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((t, r, o) => {
        t.getProvider("auth-internal").initialize();
      })
  ),
    mo(
      new qr(
        "auth-internal",
        (t) => {
          const r = di(t.getProvider("auth").getImmediate());
          return ((o) => new wC(o))(r);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    Ur(dv, fv, _C(a)),
    Ur(dv, fv, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const EC = 5 * 60,
  SC = l0("authIdTokenMaxAge") || EC;
let hv = null;
const TC = (a) => async (t) => {
  const r = t && (await t.getIdTokenResult()),
    o = r && (new Date().getTime() - Date.parse(r.issuedAtTime)) / 1e3;
  if (o && o > SC) return;
  const c = r == null ? void 0 : r.token;
  hv !== c &&
    ((hv = c),
    await fetch(a, {
      method: c ? "POST" : "DELETE",
      headers: c ? { Authorization: `Bearer ${c}` } : {},
    }));
};
function CC(a = WE()) {
  const t = d0(a, "auth");
  if (t.isInitialized()) return t.getImmediate();
  const r = YS(a, { popupRedirectResolver: bC, persistence: [DT, vT, H0] }),
    o = l0("authTokenSyncURL");
  if (o && typeof isSecureContext == "boolean" && isSecureContext) {
    const d = new URL(o, location.origin);
    if (location.origin === d.origin) {
      const f = TC(d.toString());
      hT(r, f, () => f(r.currentUser)), fT(r, (p) => f(p));
    }
  }
  const c = Ux("auth");
  return c ? KS(r, `http://${c}`) : o0("Auth", !1), r;
}
function AC() {
  var a, t;
  return (t =
    (a = document.getElementsByTagName("head")) === null || a === void 0
      ? void 0
      : a[0]) !== null && t !== void 0
    ? t
    : document;
}
IS({
  loadJS(a) {
    return new Promise((t, r) => {
      const o = document.createElement("script");
      o.setAttribute("src", a),
        (o.onload = t),
        (o.onerror = (c) => {
          const d = Ln("internal-error");
          (d.customData = c), r(d);
        }),
        (o.type = "text/javascript"),
        (o.charset = "UTF-8"),
        AC().appendChild(o);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript:
    "https://www.google.com/recaptcha/enterprise.js?render=",
});
xC("Browser");
var RC = "firebase",
  OC = "11.7.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Ur(RC, OC, "app");
const DC = {
    apiKey: "AIzaSyBOz2CpiZrWijPT4ePrfm8MEUUzJ9fEgSU",
    authDomain: "hobby-hub-auth.firebaseapp.com",
    projectId: "hobby-hub-auth",
    storageBucket: "hobby-hub-auth.firebasestorage.app",
    messagingSenderId: "1047856974536",
    appId: "1:1047856974536:web:228d111b5c61c92ce673fd",
  },
  NC = f0(DC),
  kr = CC(NC),
  fi = A.createContext(),
  MC = new ma(),
  kC = ({ children: a }) => {
    const [t, r] = A.useState(null),
      [o, c] = A.useState(!0),
      d = () => jT(kr, MC),
      f = (E, w) => (c(!0), sT(kr, E, w)),
      p = (E, w) => (c(!0), cT(kr, E, w)),
      h = () => pT(kr),
      g = (E) => dT(kr.currentUser, E);
    A.useEffect(() => {
      const E = mT(kr, (w) => {
        r(w), c(!1);
      });
      return () => E();
    }, []);
    const b = {
      googleLogin: d,
      createUser: f,
      loginUser: p,
      logoutUser: h,
      updateUser: g,
      user: t,
      setUser: r,
      loader: o,
      setLoader: c,
    };
    return v.jsx(fi.Provider, { value: b, children: a });
  };
/*!
 * sweetalert2 v11.21.2
 * Released under the MIT License.
 */ function K0(a, t, r) {
  if (typeof a == "function" ? a === t : a.has(t))
    return arguments.length < 3 ? t : r;
  throw new TypeError("Private element is not present on this object");
}
function LC(a, t) {
  if (t.has(a))
    throw new TypeError(
      "Cannot initialize the same private elements twice on an object"
    );
}
function mv(a, t) {
  return a.get(K0(a, t));
}
function jC(a, t, r) {
  LC(a, t), t.set(a, r);
}
function UC(a, t, r) {
  return a.set(K0(a, t), r), r;
}
const zC = 100,
  me = {},
  IC = () => {
    me.previousActiveElement instanceof HTMLElement
      ? (me.previousActiveElement.focus(), (me.previousActiveElement = null))
      : document.body && document.body.focus();
  },
  BC = (a) =>
    new Promise((t) => {
      if (!a) return t();
      const r = window.scrollX,
        o = window.scrollY;
      (me.restoreFocusTimeout = setTimeout(() => {
        IC(), t();
      }, zC)),
        window.scrollTo(r, o);
    }),
  F0 = "swal2-",
  HC = [
    "container",
    "shown",
    "height-auto",
    "iosfix",
    "popup",
    "modal",
    "no-backdrop",
    "no-transition",
    "toast",
    "toast-shown",
    "show",
    "hide",
    "close",
    "title",
    "html-container",
    "actions",
    "confirm",
    "deny",
    "cancel",
    "footer",
    "icon",
    "icon-content",
    "image",
    "input",
    "file",
    "range",
    "select",
    "radio",
    "checkbox",
    "label",
    "textarea",
    "inputerror",
    "input-label",
    "validation-message",
    "progress-steps",
    "active-progress-step",
    "progress-step",
    "progress-step-line",
    "loader",
    "loading",
    "styled",
    "top",
    "top-start",
    "top-end",
    "top-left",
    "top-right",
    "center",
    "center-start",
    "center-end",
    "center-left",
    "center-right",
    "bottom",
    "bottom-start",
    "bottom-end",
    "bottom-left",
    "bottom-right",
    "grow-row",
    "grow-column",
    "grow-fullscreen",
    "rtl",
    "timer-progress-bar",
    "timer-progress-bar-container",
    "scrollbar-measure",
    "icon-success",
    "icon-warning",
    "icon-info",
    "icon-question",
    "icon-error",
    "draggable",
    "dragging",
  ],
  H = HC.reduce((a, t) => ((a[t] = F0 + t), a), {}),
  PC = ["success", "warning", "info", "question", "error"],
  xc = PC.reduce((a, t) => ((a[t] = F0 + t), a), {}),
  Q0 = "SweetAlert2:",
  dh = (a) => a.charAt(0).toUpperCase() + a.slice(1),
  It = (a) => {
    console.warn(`${Q0} ${typeof a == "object" ? a.join(" ") : a}`);
  },
  Ki = (a) => {
    console.error(`${Q0} ${a}`);
  },
  pv = [],
  VC = (a) => {
    pv.includes(a) || (pv.push(a), It(a));
  },
  Z0 = (a, t = null) => {
    VC(
      `"${a}" is deprecated and will be removed in the next major release.${
        t ? ` Use "${t}" instead.` : ""
      }`
    );
  },
  Hc = (a) => (typeof a == "function" ? a() : a),
  fh = (a) => a && typeof a.toPromise == "function",
  Ro = (a) => (fh(a) ? a.toPromise() : Promise.resolve(a)),
  hh = (a) => a && Promise.resolve(a) === a,
  Bt = () => document.body.querySelector(`.${H.container}`),
  Oo = (a) => {
    const t = Bt();
    return t ? t.querySelector(a) : null;
  },
  sn = (a) => Oo(`.${a}`),
  qe = () => sn(H.popup),
  Fr = () => sn(H.icon),
  qC = () => sn(H["icon-content"]),
  J0 = () => sn(H.title),
  mh = () => sn(H["html-container"]),
  W0 = () => sn(H.image),
  ph = () => sn(H["progress-steps"]),
  Pc = () => sn(H["validation-message"]),
  Kn = () => Oo(`.${H.actions} .${H.confirm}`),
  Qr = () => Oo(`.${H.actions} .${H.cancel}`),
  Fi = () => Oo(`.${H.actions} .${H.deny}`),
  GC = () => sn(H["input-label"]),
  Zr = () => Oo(`.${H.loader}`),
  Do = () => sn(H.actions),
  eb = () => sn(H.footer),
  Vc = () => sn(H["timer-progress-bar"]),
  gh = () => sn(H.close),
  $C = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
  yh = () => {
    const a = qe();
    if (!a) return [];
    const t = a.querySelectorAll(
        '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
      ),
      r = Array.from(t).sort((d, f) => {
        const p = parseInt(d.getAttribute("tabindex") || "0"),
          h = parseInt(f.getAttribute("tabindex") || "0");
        return p > h ? 1 : p < h ? -1 : 0;
      }),
      o = a.querySelectorAll($C),
      c = Array.from(o).filter((d) => d.getAttribute("tabindex") !== "-1");
    return [...new Set(r.concat(c))].filter((d) => Xt(d));
  },
  vh = () =>
    va(document.body, H.shown) &&
    !va(document.body, H["toast-shown"]) &&
    !va(document.body, H["no-backdrop"]),
  qc = () => {
    const a = qe();
    return a ? va(a, H.toast) : !1;
  },
  YC = () => {
    const a = qe();
    return a ? a.hasAttribute("data-loading") : !1;
  },
  cn = (a, t) => {
    if (((a.textContent = ""), t)) {
      const o = new DOMParser().parseFromString(t, "text/html"),
        c = o.querySelector("head");
      c &&
        Array.from(c.childNodes).forEach((f) => {
          a.appendChild(f);
        });
      const d = o.querySelector("body");
      d &&
        Array.from(d.childNodes).forEach((f) => {
          f instanceof HTMLVideoElement || f instanceof HTMLAudioElement
            ? a.appendChild(f.cloneNode(!0))
            : a.appendChild(f);
        });
    }
  },
  va = (a, t) => {
    if (!t) return !1;
    const r = t.split(/\s+/);
    for (let o = 0; o < r.length; o++)
      if (!a.classList.contains(r[o])) return !1;
    return !0;
  },
  XC = (a, t) => {
    Array.from(a.classList).forEach((r) => {
      !Object.values(H).includes(r) &&
        !Object.values(xc).includes(r) &&
        !Object.values(t.showClass || {}).includes(r) &&
        a.classList.remove(r);
    });
  },
  on = (a, t, r) => {
    if ((XC(a, t), !t.customClass)) return;
    const o = t.customClass[r];
    if (o) {
      if (typeof o != "string" && !o.forEach) {
        It(
          `Invalid type of customClass.${r}! Expected string or iterable object, got "${typeof o}"`
        );
        return;
      }
      Ye(a, o);
    }
  },
  Gc = (a, t) => {
    if (!t) return null;
    switch (t) {
      case "select":
      case "textarea":
      case "file":
        return a.querySelector(`.${H.popup} > .${H[t]}`);
      case "checkbox":
        return a.querySelector(`.${H.popup} > .${H.checkbox} input`);
      case "radio":
        return (
          a.querySelector(`.${H.popup} > .${H.radio} input:checked`) ||
          a.querySelector(`.${H.popup} > .${H.radio} input:first-child`)
        );
      case "range":
        return a.querySelector(`.${H.popup} > .${H.range} input`);
      default:
        return a.querySelector(`.${H.popup} > .${H.input}`);
    }
  },
  tb = (a) => {
    if ((a.focus(), a.type !== "file")) {
      const t = a.value;
      (a.value = ""), (a.value = t);
    }
  },
  nb = (a, t, r) => {
    !a ||
      !t ||
      (typeof t == "string" && (t = t.split(/\s+/).filter(Boolean)),
      t.forEach((o) => {
        Array.isArray(a)
          ? a.forEach((c) => {
              r ? c.classList.add(o) : c.classList.remove(o);
            })
          : r
          ? a.classList.add(o)
          : a.classList.remove(o);
      }));
  },
  Ye = (a, t) => {
    nb(a, t, !0);
  },
  Sn = (a, t) => {
    nb(a, t, !1);
  },
  ni = (a, t) => {
    const r = Array.from(a.children);
    for (let o = 0; o < r.length; o++) {
      const c = r[o];
      if (c instanceof HTMLElement && va(c, t)) return c;
    }
  },
  Pi = (a, t, r) => {
    r === `${parseInt(r)}` && (r = parseInt(r)),
      r || parseInt(r) === 0
        ? a.style.setProperty(t, typeof r == "number" ? `${r}px` : r)
        : a.style.removeProperty(t);
  },
  St = (a, t = "flex") => {
    a && (a.style.display = t);
  },
  Mt = (a) => {
    a && (a.style.display = "none");
  },
  bh = (a, t = "block") => {
    a &&
      new MutationObserver(() => {
        No(a, a.innerHTML, t);
      }).observe(a, { childList: !0, subtree: !0 });
  },
  gv = (a, t, r, o) => {
    const c = a.querySelector(t);
    c && c.style.setProperty(r, o);
  },
  No = (a, t, r = "flex") => {
    t ? St(a, r) : Mt(a);
  },
  Xt = (a) =>
    !!(a && (a.offsetWidth || a.offsetHeight || a.getClientRects().length)),
  KC = () => !Xt(Kn()) && !Xt(Fi()) && !Xt(Qr()),
  Uf = (a) => a.scrollHeight > a.clientHeight,
  FC = (a, t) => {
    let r = a;
    for (; r && r !== t; ) {
      if (Uf(r)) return !0;
      r = r.parentElement;
    }
    return !1;
  },
  ab = (a) => {
    const t = window.getComputedStyle(a),
      r = parseFloat(t.getPropertyValue("animation-duration") || "0"),
      o = parseFloat(t.getPropertyValue("transition-duration") || "0");
    return r > 0 || o > 0;
  },
  wh = (a, t = !1) => {
    const r = Vc();
    r &&
      Xt(r) &&
      (t && ((r.style.transition = "none"), (r.style.width = "100%")),
      setTimeout(() => {
        (r.style.transition = `width ${a / 1e3}s linear`),
          (r.style.width = "0%");
      }, 10));
  },
  QC = () => {
    const a = Vc();
    if (!a) return;
    const t = parseInt(window.getComputedStyle(a).width);
    a.style.removeProperty("transition"), (a.style.width = "100%");
    const r = parseInt(window.getComputedStyle(a).width),
      o = (t / r) * 100;
    a.style.width = `${o}%`;
  },
  ZC = () => typeof window > "u" || typeof document > "u",
  JC = `
 <div aria-labelledby="${H.title}" aria-describedby="${H["html-container"]}" class="${H.popup}" tabindex="-1">
   <button type="button" class="${H.close}"></button>
   <ul class="${H["progress-steps"]}"></ul>
   <div class="${H.icon}"></div>
   <img class="${H.image}" />
   <h2 class="${H.title}" id="${H.title}"></h2>
   <div class="${H["html-container"]}" id="${H["html-container"]}"></div>
   <input class="${H.input}" id="${H.input}" />
   <input type="file" class="${H.file}" />
   <div class="${H.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${H.select}" id="${H.select}"></select>
   <div class="${H.radio}"></div>
   <label class="${H.checkbox}">
     <input type="checkbox" id="${H.checkbox}" />
     <span class="${H.label}"></span>
   </label>
   <textarea class="${H.textarea}" id="${H.textarea}"></textarea>
   <div class="${H["validation-message"]}" id="${H["validation-message"]}"></div>
   <div class="${H.actions}">
     <div class="${H.loader}"></div>
     <button type="button" class="${H.confirm}"></button>
     <button type="button" class="${H.deny}"></button>
     <button type="button" class="${H.cancel}"></button>
   </div>
   <div class="${H.footer}"></div>
   <div class="${H["timer-progress-bar-container"]}">
     <div class="${H["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ""),
  WC = () => {
    const a = Bt();
    return a
      ? (a.remove(),
        Sn(
          [document.documentElement, document.body],
          [H["no-backdrop"], H["toast-shown"], H["has-column"]]
        ),
        !0)
      : !1;
  },
  Ui = () => {
    me.currentInstance.resetValidationMessage();
  },
  eA = () => {
    const a = qe(),
      t = ni(a, H.input),
      r = ni(a, H.file),
      o = a.querySelector(`.${H.range} input`),
      c = a.querySelector(`.${H.range} output`),
      d = ni(a, H.select),
      f = a.querySelector(`.${H.checkbox} input`),
      p = ni(a, H.textarea);
    (t.oninput = Ui),
      (r.onchange = Ui),
      (d.onchange = Ui),
      (f.onchange = Ui),
      (p.oninput = Ui),
      (o.oninput = () => {
        Ui(), (c.value = o.value);
      }),
      (o.onchange = () => {
        Ui(), (c.value = o.value);
      });
  },
  tA = (a) => (typeof a == "string" ? document.querySelector(a) : a),
  nA = (a) => {
    const t = qe();
    t.setAttribute("role", a.toast ? "alert" : "dialog"),
      t.setAttribute("aria-live", a.toast ? "polite" : "assertive"),
      a.toast || t.setAttribute("aria-modal", "true");
  },
  aA = (a) => {
    window.getComputedStyle(a).direction === "rtl" && Ye(Bt(), H.rtl);
  },
  iA = (a) => {
    const t = WC();
    if (ZC()) {
      Ki("SweetAlert2 requires document to initialize");
      return;
    }
    const r = document.createElement("div");
    (r.className = H.container),
      t && Ye(r, H["no-transition"]),
      cn(r, JC),
      (r.dataset.swal2Theme = a.theme);
    const o = tA(a.target);
    o.appendChild(r),
      a.topLayer && (r.setAttribute("popover", ""), r.showPopover()),
      nA(a),
      aA(o),
      eA();
  },
  _h = (a, t) => {
    a instanceof HTMLElement
      ? t.appendChild(a)
      : typeof a == "object"
      ? rA(a, t)
      : a && cn(t, a);
  },
  rA = (a, t) => {
    a.jquery ? lA(t, a) : cn(t, a.toString());
  },
  lA = (a, t) => {
    if (((a.textContent = ""), 0 in t))
      for (let r = 0; r in t; r++) a.appendChild(t[r].cloneNode(!0));
    else a.appendChild(t.cloneNode(!0));
  },
  oA = (a, t) => {
    const r = Do(),
      o = Zr();
    !r ||
      !o ||
      (!t.showConfirmButton && !t.showDenyButton && !t.showCancelButton
        ? Mt(r)
        : St(r),
      on(r, t, "actions"),
      sA(r, o, t),
      cn(o, t.loaderHtml || ""),
      on(o, t, "loader"));
  };
function sA(a, t, r) {
  const o = Kn(),
    c = Fi(),
    d = Qr();
  !o ||
    !c ||
    !d ||
    (_f(o, "confirm", r),
    _f(c, "deny", r),
    _f(d, "cancel", r),
    cA(o, c, d, r),
    r.reverseButtons &&
      (r.toast
        ? (a.insertBefore(d, o), a.insertBefore(c, o))
        : (a.insertBefore(d, t), a.insertBefore(c, t), a.insertBefore(o, t))));
}
function cA(a, t, r, o) {
  if (!o.buttonsStyling) {
    Sn([a, t, r], H.styled);
    return;
  }
  Ye([a, t, r], H.styled),
    o.confirmButtonColor &&
      a.style.setProperty(
        "--swal2-confirm-button-background-color",
        o.confirmButtonColor
      ),
    o.denyButtonColor &&
      t.style.setProperty(
        "--swal2-deny-button-background-color",
        o.denyButtonColor
      ),
    o.cancelButtonColor &&
      r.style.setProperty(
        "--swal2-cancel-button-background-color",
        o.cancelButtonColor
      ),
    wf(a),
    wf(t),
    wf(r);
}
function wf(a) {
  const t = window.getComputedStyle(a),
    r = t.backgroundColor.replace(
      /rgba?\((\d+), (\d+), (\d+).*/,
      "rgba($1, $2, $3, 0.5)"
    );
  a.style.setProperty(
    "--swal2-action-button-outline",
    t.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/, ` ${r}`)
  );
}
function _f(a, t, r) {
  const o = dh(t);
  No(a, r[`show${o}Button`], "inline-block"),
    cn(a, r[`${t}ButtonText`] || ""),
    a.setAttribute("aria-label", r[`${t}ButtonAriaLabel`] || ""),
    (a.className = H[t]),
    on(a, r, `${t}Button`);
}
const uA = (a, t) => {
    const r = gh();
    r &&
      (cn(r, t.closeButtonHtml || ""),
      on(r, t, "closeButton"),
      No(r, t.showCloseButton),
      r.setAttribute("aria-label", t.closeButtonAriaLabel || ""));
  },
  dA = (a, t) => {
    const r = Bt();
    r &&
      (fA(r, t.backdrop),
      hA(r, t.position),
      mA(r, t.grow),
      on(r, t, "container"));
  };
function fA(a, t) {
  typeof t == "string"
    ? (a.style.background = t)
    : t || Ye([document.documentElement, document.body], H["no-backdrop"]);
}
function hA(a, t) {
  t &&
    (t in H
      ? Ye(a, H[t])
      : (It('The "position" parameter is not valid, defaulting to "center"'),
        Ye(a, H.center)));
}
function mA(a, t) {
  t && Ye(a, H[`grow-${t}`]);
}
var nt = { innerParams: new WeakMap(), domCache: new WeakMap() };
const pA = [
    "input",
    "file",
    "range",
    "select",
    "radio",
    "checkbox",
    "textarea",
  ],
  gA = (a, t) => {
    const r = qe();
    if (!r) return;
    const o = nt.innerParams.get(a),
      c = !o || t.input !== o.input;
    pA.forEach((d) => {
      const f = ni(r, H[d]);
      f && (bA(d, t.inputAttributes), (f.className = H[d]), c && Mt(f));
    }),
      t.input && (c && yA(t), wA(t));
  },
  yA = (a) => {
    if (!a.input) return;
    if (!ht[a.input]) {
      Ki(
        `Unexpected type of input! Expected ${Object.keys(ht).join(
          " | "
        )}, got "${a.input}"`
      );
      return;
    }
    const t = ib(a.input);
    if (!t) return;
    const r = ht[a.input](t, a);
    St(t),
      a.inputAutoFocus &&
        setTimeout(() => {
          tb(r);
        });
  },
  vA = (a) => {
    for (let t = 0; t < a.attributes.length; t++) {
      const r = a.attributes[t].name;
      ["id", "type", "value", "style"].includes(r) || a.removeAttribute(r);
    }
  },
  bA = (a, t) => {
    const r = qe();
    if (!r) return;
    const o = Gc(r, a);
    if (o) {
      vA(o);
      for (const c in t) o.setAttribute(c, t[c]);
    }
  },
  wA = (a) => {
    if (!a.input) return;
    const t = ib(a.input);
    t && on(t, a, "input");
  },
  xh = (a, t) => {
    !a.placeholder &&
      t.inputPlaceholder &&
      (a.placeholder = t.inputPlaceholder);
  },
  Mo = (a, t, r) => {
    if (r.inputLabel) {
      const o = document.createElement("label"),
        c = H["input-label"];
      o.setAttribute("for", a.id),
        (o.className = c),
        typeof r.customClass == "object" && Ye(o, r.customClass.inputLabel),
        (o.innerText = r.inputLabel),
        t.insertAdjacentElement("beforebegin", o);
    }
  },
  ib = (a) => {
    const t = qe();
    if (t) return ni(t, H[a] || H.input);
  },
  Ec = (a, t) => {
    ["string", "number"].includes(typeof t)
      ? (a.value = `${t}`)
      : hh(t) ||
        It(
          `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`
        );
  },
  ht = {};
ht.text =
  ht.email =
  ht.password =
  ht.number =
  ht.tel =
  ht.url =
  ht.search =
  ht.date =
  ht["datetime-local"] =
  ht.time =
  ht.week =
  ht.month =
    (a, t) => (
      Ec(a, t.inputValue), Mo(a, a, t), xh(a, t), (a.type = t.input), a
    );
ht.file = (a, t) => (Mo(a, a, t), xh(a, t), a);
ht.range = (a, t) => {
  const r = a.querySelector("input"),
    o = a.querySelector("output");
  return (
    Ec(r, t.inputValue), (r.type = t.input), Ec(o, t.inputValue), Mo(r, a, t), a
  );
};
ht.select = (a, t) => {
  if (((a.textContent = ""), t.inputPlaceholder)) {
    const r = document.createElement("option");
    cn(r, t.inputPlaceholder),
      (r.value = ""),
      (r.disabled = !0),
      (r.selected = !0),
      a.appendChild(r);
  }
  return Mo(a, a, t), a;
};
ht.radio = (a) => ((a.textContent = ""), a);
ht.checkbox = (a, t) => {
  const r = Gc(qe(), "checkbox");
  (r.value = "1"), (r.checked = !!t.inputValue);
  const o = a.querySelector("span");
  return cn(o, t.inputPlaceholder || t.inputLabel), r;
};
ht.textarea = (a, t) => {
  Ec(a, t.inputValue), xh(a, t), Mo(a, a, t);
  const r = (o) =>
    parseInt(window.getComputedStyle(o).marginLeft) +
    parseInt(window.getComputedStyle(o).marginRight);
  return (
    setTimeout(() => {
      if ("MutationObserver" in window) {
        const o = parseInt(window.getComputedStyle(qe()).width),
          c = () => {
            if (!document.body.contains(a)) return;
            const d = a.offsetWidth + r(a);
            d > o ? (qe().style.width = `${d}px`) : Pi(qe(), "width", t.width);
          };
        new MutationObserver(c).observe(a, {
          attributes: !0,
          attributeFilter: ["style"],
        });
      }
    }),
    a
  );
};
const _A = (a, t) => {
    const r = mh();
    r &&
      (bh(r),
      on(r, t, "htmlContainer"),
      t.html
        ? (_h(t.html, r), St(r, "block"))
        : t.text
        ? ((r.textContent = t.text), St(r, "block"))
        : Mt(r),
      gA(a, t));
  },
  xA = (a, t) => {
    const r = eb();
    r &&
      (bh(r),
      No(r, t.footer, "block"),
      t.footer && _h(t.footer, r),
      on(r, t, "footer"));
  },
  EA = (a, t) => {
    const r = nt.innerParams.get(a),
      o = Fr();
    if (!o) return;
    if (r && t.icon === r.icon) {
      vv(o, t), yv(o, t);
      return;
    }
    if (!t.icon && !t.iconHtml) {
      Mt(o);
      return;
    }
    if (t.icon && Object.keys(xc).indexOf(t.icon) === -1) {
      Ki(
        `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`
      ),
        Mt(o);
      return;
    }
    St(o),
      vv(o, t),
      yv(o, t),
      Ye(o, t.showClass && t.showClass.icon),
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", rb);
  },
  yv = (a, t) => {
    for (const [r, o] of Object.entries(xc)) t.icon !== r && Sn(a, o);
    Ye(a, t.icon && xc[t.icon]), CA(a, t), rb(), on(a, t, "icon");
  },
  rb = () => {
    const a = qe();
    if (!a) return;
    const t = window.getComputedStyle(a).getPropertyValue("background-color"),
      r = a.querySelectorAll(
        "[class^=swal2-success-circular-line], .swal2-success-fix"
      );
    for (let o = 0; o < r.length; o++) r[o].style.backgroundColor = t;
  },
  SA = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
  TA = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
  vv = (a, t) => {
    if (!t.icon && !t.iconHtml) return;
    let r = a.innerHTML,
      o = "";
    t.iconHtml
      ? (o = bv(t.iconHtml))
      : t.icon === "success"
      ? ((o = SA), (r = r.replace(/ style=".*?"/g, "")))
      : t.icon === "error"
      ? (o = TA)
      : t.icon && (o = bv({ question: "?", warning: "!", info: "i" }[t.icon])),
      r.trim() !== o.trim() && cn(a, o);
  },
  CA = (a, t) => {
    if (t.iconColor) {
      (a.style.color = t.iconColor), (a.style.borderColor = t.iconColor);
      for (const r of [
        ".swal2-success-line-tip",
        ".swal2-success-line-long",
        ".swal2-x-mark-line-left",
        ".swal2-x-mark-line-right",
      ])
        gv(a, r, "background-color", t.iconColor);
      gv(a, ".swal2-success-ring", "border-color", t.iconColor);
    }
  },
  bv = (a) => `<div class="${H["icon-content"]}">${a}</div>`,
  AA = (a, t) => {
    const r = W0();
    if (r) {
      if (!t.imageUrl) {
        Mt(r);
        return;
      }
      St(r, ""),
        r.setAttribute("src", t.imageUrl),
        r.setAttribute("alt", t.imageAlt || ""),
        Pi(r, "width", t.imageWidth),
        Pi(r, "height", t.imageHeight),
        (r.className = H.image),
        on(r, t, "image");
    }
  };
let Eh = !1,
  lb = 0,
  ob = 0,
  sb = 0,
  cb = 0;
const RA = (a) => {
    a.addEventListener("mousedown", Sc),
      document.body.addEventListener("mousemove", Tc),
      a.addEventListener("mouseup", Cc),
      a.addEventListener("touchstart", Sc),
      document.body.addEventListener("touchmove", Tc),
      a.addEventListener("touchend", Cc);
  },
  OA = (a) => {
    a.removeEventListener("mousedown", Sc),
      document.body.removeEventListener("mousemove", Tc),
      a.removeEventListener("mouseup", Cc),
      a.removeEventListener("touchstart", Sc),
      document.body.removeEventListener("touchmove", Tc),
      a.removeEventListener("touchend", Cc);
  },
  Sc = (a) => {
    const t = qe();
    if (a.target === t || Fr().contains(a.target)) {
      Eh = !0;
      const r = ub(a);
      (lb = r.clientX),
        (ob = r.clientY),
        (sb = parseInt(t.style.insetInlineStart) || 0),
        (cb = parseInt(t.style.insetBlockStart) || 0),
        Ye(t, "swal2-dragging");
    }
  },
  Tc = (a) => {
    const t = qe();
    if (Eh) {
      let { clientX: r, clientY: o } = ub(a);
      (t.style.insetInlineStart = `${sb + (r - lb)}px`),
        (t.style.insetBlockStart = `${cb + (o - ob)}px`);
    }
  },
  Cc = () => {
    const a = qe();
    (Eh = !1), Sn(a, "swal2-dragging");
  },
  ub = (a) => {
    let t = 0,
      r = 0;
    return (
      a.type.startsWith("mouse")
        ? ((t = a.clientX), (r = a.clientY))
        : a.type.startsWith("touch") &&
          ((t = a.touches[0].clientX), (r = a.touches[0].clientY)),
      { clientX: t, clientY: r }
    );
  },
  DA = (a, t) => {
    const r = Bt(),
      o = qe();
    if (!(!r || !o)) {
      if (t.toast) {
        Pi(r, "width", t.width), (o.style.width = "100%");
        const c = Zr();
        c && o.insertBefore(c, Fr());
      } else Pi(o, "width", t.width);
      Pi(o, "padding", t.padding),
        t.color && (o.style.color = t.color),
        t.background && (o.style.background = t.background),
        Mt(Pc()),
        NA(o, t),
        t.draggable && !t.toast
          ? (Ye(o, H.draggable), RA(o))
          : (Sn(o, H.draggable), OA(o));
    }
  },
  NA = (a, t) => {
    const r = t.showClass || {};
    (a.className = `${H.popup} ${Xt(a) ? r.popup : ""}`),
      t.toast
        ? (Ye([document.documentElement, document.body], H["toast-shown"]),
          Ye(a, H.toast))
        : Ye(a, H.modal),
      on(a, t, "popup"),
      typeof t.customClass == "string" && Ye(a, t.customClass),
      t.icon && Ye(a, H[`icon-${t.icon}`]);
  },
  MA = (a, t) => {
    const r = ph();
    if (!r) return;
    const { progressSteps: o, currentProgressStep: c } = t;
    if (!o || o.length === 0 || c === void 0) {
      Mt(r);
      return;
    }
    St(r),
      (r.textContent = ""),
      c >= o.length &&
        It(
          "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
        ),
      o.forEach((d, f) => {
        const p = kA(d);
        if (
          (r.appendChild(p),
          f === c && Ye(p, H["active-progress-step"]),
          f !== o.length - 1)
        ) {
          const h = LA(t);
          r.appendChild(h);
        }
      });
  },
  kA = (a) => {
    const t = document.createElement("li");
    return Ye(t, H["progress-step"]), cn(t, a), t;
  },
  LA = (a) => {
    const t = document.createElement("li");
    return (
      Ye(t, H["progress-step-line"]),
      a.progressStepsDistance && Pi(t, "width", a.progressStepsDistance),
      t
    );
  },
  jA = (a, t) => {
    const r = J0();
    r &&
      (bh(r),
      No(r, t.title || t.titleText, "block"),
      t.title && _h(t.title, r),
      t.titleText && (r.innerText = t.titleText),
      on(r, t, "title"));
  },
  db = (a, t) => {
    DA(a, t),
      dA(a, t),
      MA(a, t),
      EA(a, t),
      AA(a, t),
      jA(a, t),
      uA(a, t),
      _A(a, t),
      oA(a, t),
      xA(a, t);
    const r = qe();
    typeof t.didRender == "function" && r && t.didRender(r),
      me.eventEmitter.emit("didRender", r);
  },
  UA = () => Xt(qe()),
  fb = () => {
    var a;
    return (a = Kn()) === null || a === void 0 ? void 0 : a.click();
  },
  zA = () => {
    var a;
    return (a = Fi()) === null || a === void 0 ? void 0 : a.click();
  },
  IA = () => {
    var a;
    return (a = Qr()) === null || a === void 0 ? void 0 : a.click();
  },
  Jr = Object.freeze({
    cancel: "cancel",
    backdrop: "backdrop",
    close: "close",
    esc: "esc",
    timer: "timer",
  }),
  hb = (a) => {
    a.keydownTarget &&
      a.keydownHandlerAdded &&
      (a.keydownTarget.removeEventListener("keydown", a.keydownHandler, {
        capture: a.keydownListenerCapture,
      }),
      (a.keydownHandlerAdded = !1));
  },
  BA = (a, t, r) => {
    hb(a),
      t.toast ||
        ((a.keydownHandler = (o) => PA(t, o, r)),
        (a.keydownTarget = t.keydownListenerCapture ? window : qe()),
        (a.keydownListenerCapture = t.keydownListenerCapture),
        a.keydownTarget.addEventListener("keydown", a.keydownHandler, {
          capture: a.keydownListenerCapture,
        }),
        (a.keydownHandlerAdded = !0));
  },
  zf = (a, t) => {
    var r;
    const o = yh();
    if (o.length) {
      (a = a + t),
        a === -2 && (a = o.length - 1),
        a === o.length ? (a = 0) : a === -1 && (a = o.length - 1),
        o[a].focus();
      return;
    }
    (r = qe()) === null || r === void 0 || r.focus();
  },
  mb = ["ArrowRight", "ArrowDown"],
  HA = ["ArrowLeft", "ArrowUp"],
  PA = (a, t, r) => {
    a &&
      (t.isComposing ||
        t.keyCode === 229 ||
        (a.stopKeydownPropagation && t.stopPropagation(),
        t.key === "Enter"
          ? VA(t, a)
          : t.key === "Tab"
          ? qA(t)
          : [...mb, ...HA].includes(t.key)
          ? GA(t.key)
          : t.key === "Escape" && $A(t, a, r)));
  },
  VA = (a, t) => {
    if (!Hc(t.allowEnterKey)) return;
    const r = Gc(qe(), t.input);
    if (
      a.target &&
      r &&
      a.target instanceof HTMLElement &&
      a.target.outerHTML === r.outerHTML
    ) {
      if (["textarea", "file"].includes(t.input)) return;
      fb(), a.preventDefault();
    }
  },
  qA = (a) => {
    const t = a.target,
      r = yh();
    let o = -1;
    for (let c = 0; c < r.length; c++)
      if (t === r[c]) {
        o = c;
        break;
      }
    a.shiftKey ? zf(o, -1) : zf(o, 1), a.stopPropagation(), a.preventDefault();
  },
  GA = (a) => {
    const t = Do(),
      r = Kn(),
      o = Fi(),
      c = Qr();
    if (!t || !r || !o || !c) return;
    const d = [r, o, c];
    if (
      document.activeElement instanceof HTMLElement &&
      !d.includes(document.activeElement)
    )
      return;
    const f = mb.includes(a) ? "nextElementSibling" : "previousElementSibling";
    let p = document.activeElement;
    if (p) {
      for (let h = 0; h < t.children.length; h++) {
        if (((p = p[f]), !p)) return;
        if (p instanceof HTMLButtonElement && Xt(p)) break;
      }
      p instanceof HTMLButtonElement && p.focus();
    }
  },
  $A = (a, t, r) => {
    Hc(t.allowEscapeKey) && (a.preventDefault(), r(Jr.esc));
  };
var $r = {
  swalPromiseResolve: new WeakMap(),
  swalPromiseReject: new WeakMap(),
};
const YA = () => {
    const a = Bt();
    Array.from(document.body.children).forEach((r) => {
      r.contains(a) ||
        (r.hasAttribute("aria-hidden") &&
          r.setAttribute(
            "data-previous-aria-hidden",
            r.getAttribute("aria-hidden") || ""
          ),
        r.setAttribute("aria-hidden", "true"));
    });
  },
  pb = () => {
    Array.from(document.body.children).forEach((t) => {
      t.hasAttribute("data-previous-aria-hidden")
        ? (t.setAttribute(
            "aria-hidden",
            t.getAttribute("data-previous-aria-hidden") || ""
          ),
          t.removeAttribute("data-previous-aria-hidden"))
        : t.removeAttribute("aria-hidden");
    });
  },
  gb = typeof window < "u" && !!window.GestureEvent,
  XA = () => {
    if (gb && !va(document.body, H.iosfix)) {
      const a = document.body.scrollTop;
      (document.body.style.top = `${a * -1}px`),
        Ye(document.body, H.iosfix),
        KA();
    }
  },
  KA = () => {
    const a = Bt();
    if (!a) return;
    let t;
    (a.ontouchstart = (r) => {
      t = FA(r);
    }),
      (a.ontouchmove = (r) => {
        t && (r.preventDefault(), r.stopPropagation());
      });
  },
  FA = (a) => {
    const t = a.target,
      r = Bt(),
      o = mh();
    return !r || !o || QA(a) || ZA(a)
      ? !1
      : t === r ||
          (!Uf(r) &&
            t instanceof HTMLElement &&
            !FC(t, o) &&
            t.tagName !== "INPUT" &&
            t.tagName !== "TEXTAREA" &&
            !(Uf(o) && o.contains(t)));
  },
  QA = (a) =>
    a.touches && a.touches.length && a.touches[0].touchType === "stylus",
  ZA = (a) => a.touches && a.touches.length > 1,
  JA = () => {
    if (va(document.body, H.iosfix)) {
      const a = parseInt(document.body.style.top, 10);
      Sn(document.body, H.iosfix),
        (document.body.style.top = ""),
        (document.body.scrollTop = a * -1);
    }
  },
  WA = () => {
    const a = document.createElement("div");
    (a.className = H["scrollbar-measure"]), document.body.appendChild(a);
    const t = a.getBoundingClientRect().width - a.clientWidth;
    return document.body.removeChild(a), t;
  };
let Hr = null;
const e3 = (a) => {
    Hr === null &&
      (document.body.scrollHeight > window.innerHeight || a === "scroll") &&
      ((Hr = parseInt(
        window.getComputedStyle(document.body).getPropertyValue("padding-right")
      )),
      (document.body.style.paddingRight = `${Hr + WA()}px`));
  },
  t3 = () => {
    Hr !== null &&
      ((document.body.style.paddingRight = `${Hr}px`), (Hr = null));
  };
function yb(a, t, r, o) {
  qc() ? wv(a, o) : (BC(r).then(() => wv(a, o)), hb(me)),
    gb
      ? (t.setAttribute("style", "display:none !important"),
        t.removeAttribute("class"),
        (t.innerHTML = ""))
      : t.remove(),
    vh() && (t3(), JA(), pb()),
    n3();
}
function n3() {
  Sn(
    [document.documentElement, document.body],
    [H.shown, H["height-auto"], H["no-backdrop"], H["toast-shown"]]
  );
}
function ai(a) {
  a = i3(a);
  const t = $r.swalPromiseResolve.get(this),
    r = a3(this);
  this.isAwaitingPromise ? a.isDismissed || (ko(this), t(a)) : r && t(a);
}
const a3 = (a) => {
  const t = qe();
  if (!t) return !1;
  const r = nt.innerParams.get(a);
  if (!r || va(t, r.hideClass.popup)) return !1;
  Sn(t, r.showClass.popup), Ye(t, r.hideClass.popup);
  const o = Bt();
  return (
    Sn(o, r.showClass.backdrop), Ye(o, r.hideClass.backdrop), r3(a, t, r), !0
  );
};
function vb(a) {
  const t = $r.swalPromiseReject.get(this);
  ko(this), t && t(a);
}
const ko = (a) => {
    a.isAwaitingPromise &&
      (delete a.isAwaitingPromise, nt.innerParams.get(a) || a._destroy());
  },
  i3 = (a) =>
    typeof a > "u"
      ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
      : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, a),
  r3 = (a, t, r) => {
    var o;
    const c = Bt(),
      d = ab(t);
    typeof r.willClose == "function" && r.willClose(t),
      (o = me.eventEmitter) === null || o === void 0 || o.emit("willClose", t),
      d
        ? l3(a, t, c, r.returnFocus, r.didClose)
        : yb(a, c, r.returnFocus, r.didClose);
  },
  l3 = (a, t, r, o, c) => {
    me.swalCloseEventFinishedCallback = yb.bind(null, a, r, o, c);
    const d = function (f) {
      if (f.target === t) {
        var p;
        (p = me.swalCloseEventFinishedCallback) === null ||
          p === void 0 ||
          p.call(me),
          delete me.swalCloseEventFinishedCallback,
          t.removeEventListener("animationend", d),
          t.removeEventListener("transitionend", d);
      }
    };
    t.addEventListener("animationend", d),
      t.addEventListener("transitionend", d);
  },
  wv = (a, t) => {
    setTimeout(() => {
      var r;
      typeof t == "function" && t.bind(a.params)(),
        (r = me.eventEmitter) === null || r === void 0 || r.emit("didClose"),
        a._destroy && a._destroy();
    });
  },
  Yr = (a) => {
    let t = qe();
    if ((t || new Kt(), (t = qe()), !t)) return;
    const r = Zr();
    qc() ? Mt(Fr()) : o3(t, a),
      St(r),
      t.setAttribute("data-loading", "true"),
      t.setAttribute("aria-busy", "true"),
      t.focus();
  },
  o3 = (a, t) => {
    const r = Do(),
      o = Zr();
    !r ||
      !o ||
      (!t && Xt(Kn()) && (t = Kn()),
      St(r),
      t &&
        (Mt(t),
        o.setAttribute("data-button-to-replace", t.className),
        r.insertBefore(o, t)),
      Ye([a, r], H.loading));
  },
  s3 = (a, t) => {
    t.input === "select" || t.input === "radio"
      ? h3(a, t)
      : ["text", "email", "number", "tel", "textarea"].some(
          (r) => r === t.input
        ) &&
        (fh(t.inputValue) || hh(t.inputValue)) &&
        (Yr(Kn()), m3(a, t));
  },
  c3 = (a, t) => {
    const r = a.getInput();
    if (!r) return null;
    switch (t.input) {
      case "checkbox":
        return u3(r);
      case "radio":
        return d3(r);
      case "file":
        return f3(r);
      default:
        return t.inputAutoTrim ? r.value.trim() : r.value;
    }
  },
  u3 = (a) => (a.checked ? 1 : 0),
  d3 = (a) => (a.checked ? a.value : null),
  f3 = (a) =>
    a.files && a.files.length
      ? a.getAttribute("multiple") !== null
        ? a.files
        : a.files[0]
      : null,
  h3 = (a, t) => {
    const r = qe();
    if (!r) return;
    const o = (c) => {
      t.input === "select"
        ? p3(r, Ac(c), t)
        : t.input === "radio" && g3(r, Ac(c), t);
    };
    fh(t.inputOptions) || hh(t.inputOptions)
      ? (Yr(Kn()),
        Ro(t.inputOptions).then((c) => {
          a.hideLoading(), o(c);
        }))
      : typeof t.inputOptions == "object"
      ? o(t.inputOptions)
      : Ki(
          `Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof t.inputOptions}`
        );
  },
  m3 = (a, t) => {
    const r = a.getInput();
    r &&
      (Mt(r),
      Ro(t.inputValue)
        .then((o) => {
          (r.value = t.input === "number" ? `${parseFloat(o) || 0}` : `${o}`),
            St(r),
            r.focus(),
            a.hideLoading();
        })
        .catch((o) => {
          Ki(`Error in inputValue promise: ${o}`),
            (r.value = ""),
            St(r),
            r.focus(),
            a.hideLoading();
        }));
  };
function p3(a, t, r) {
  const o = ni(a, H.select);
  if (!o) return;
  const c = (d, f, p) => {
    const h = document.createElement("option");
    (h.value = p),
      cn(h, f),
      (h.selected = bb(p, r.inputValue)),
      d.appendChild(h);
  };
  t.forEach((d) => {
    const f = d[0],
      p = d[1];
    if (Array.isArray(p)) {
      const h = document.createElement("optgroup");
      (h.label = f),
        (h.disabled = !1),
        o.appendChild(h),
        p.forEach((g) => c(h, g[1], g[0]));
    } else c(o, p, f);
  }),
    o.focus();
}
function g3(a, t, r) {
  const o = ni(a, H.radio);
  if (!o) return;
  t.forEach((d) => {
    const f = d[0],
      p = d[1],
      h = document.createElement("input"),
      g = document.createElement("label");
    (h.type = "radio"),
      (h.name = H.radio),
      (h.value = f),
      bb(f, r.inputValue) && (h.checked = !0);
    const b = document.createElement("span");
    cn(b, p),
      (b.className = H.label),
      g.appendChild(h),
      g.appendChild(b),
      o.appendChild(g);
  });
  const c = o.querySelectorAll("input");
  c.length && c[0].focus();
}
const Ac = (a) => {
    const t = [];
    return (
      a instanceof Map
        ? a.forEach((r, o) => {
            let c = r;
            typeof c == "object" && (c = Ac(c)), t.push([o, c]);
          })
        : Object.keys(a).forEach((r) => {
            let o = a[r];
            typeof o == "object" && (o = Ac(o)), t.push([r, o]);
          }),
      t
    );
  },
  bb = (a, t) => !!t && t.toString() === a.toString(),
  y3 = (a) => {
    const t = nt.innerParams.get(a);
    a.disableButtons(), t.input ? wb(a, "confirm") : Th(a, !0);
  },
  v3 = (a) => {
    const t = nt.innerParams.get(a);
    a.disableButtons(), t.returnInputValueOnDeny ? wb(a, "deny") : Sh(a, !1);
  },
  b3 = (a, t) => {
    a.disableButtons(), t(Jr.cancel);
  },
  wb = (a, t) => {
    const r = nt.innerParams.get(a);
    if (!r.input) {
      Ki(
        `The "input" parameter is needed to be set when using returnInputValueOn${dh(
          t
        )}`
      );
      return;
    }
    const o = a.getInput(),
      c = c3(a, r);
    r.inputValidator
      ? w3(a, c, t)
      : o && !o.checkValidity()
      ? (a.enableButtons(),
        a.showValidationMessage(r.validationMessage || o.validationMessage))
      : t === "deny"
      ? Sh(a, c)
      : Th(a, c);
  },
  w3 = (a, t, r) => {
    const o = nt.innerParams.get(a);
    a.disableInput(),
      Promise.resolve()
        .then(() => Ro(o.inputValidator(t, o.validationMessage)))
        .then((d) => {
          a.enableButtons(),
            a.enableInput(),
            d ? a.showValidationMessage(d) : r === "deny" ? Sh(a, t) : Th(a, t);
        });
  },
  Sh = (a, t) => {
    const r = nt.innerParams.get(a || void 0);
    r.showLoaderOnDeny && Yr(Fi()),
      r.preDeny
        ? ((a.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => Ro(r.preDeny(t, r.validationMessage)))
            .then((c) => {
              c === !1
                ? (a.hideLoading(), ko(a))
                : a.close({ isDenied: !0, value: typeof c > "u" ? t : c });
            })
            .catch((c) => _b(a || void 0, c)))
        : a.close({ isDenied: !0, value: t });
  },
  _v = (a, t) => {
    a.close({ isConfirmed: !0, value: t });
  },
  _b = (a, t) => {
    a.rejectPromise(t);
  },
  Th = (a, t) => {
    const r = nt.innerParams.get(a || void 0);
    r.showLoaderOnConfirm && Yr(),
      r.preConfirm
        ? (a.resetValidationMessage(),
          (a.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => Ro(r.preConfirm(t, r.validationMessage)))
            .then((c) => {
              Xt(Pc()) || c === !1
                ? (a.hideLoading(), ko(a))
                : _v(a, typeof c > "u" ? t : c);
            })
            .catch((c) => _b(a || void 0, c)))
        : _v(a, t);
  };
function Rc() {
  const a = nt.innerParams.get(this);
  if (!a) return;
  const t = nt.domCache.get(this);
  Mt(t.loader),
    qc() ? a.icon && St(Fr()) : _3(t),
    Sn([t.popup, t.actions], H.loading),
    t.popup.removeAttribute("aria-busy"),
    t.popup.removeAttribute("data-loading"),
    (t.confirmButton.disabled = !1),
    (t.denyButton.disabled = !1),
    (t.cancelButton.disabled = !1);
}
const _3 = (a) => {
  const t = a.popup.getElementsByClassName(
    a.loader.getAttribute("data-button-to-replace")
  );
  t.length ? St(t[0], "inline-block") : KC() && Mt(a.actions);
};
function xb() {
  const a = nt.innerParams.get(this),
    t = nt.domCache.get(this);
  return t ? Gc(t.popup, a.input) : null;
}
function Eb(a, t, r) {
  const o = nt.domCache.get(a);
  t.forEach((c) => {
    o[c].disabled = r;
  });
}
function Sb(a, t) {
  const r = qe();
  if (!(!r || !a))
    if (a.type === "radio") {
      const o = r.querySelectorAll(`[name="${H.radio}"]`);
      for (let c = 0; c < o.length; c++) o[c].disabled = t;
    } else a.disabled = t;
}
function Tb() {
  Eb(this, ["confirmButton", "denyButton", "cancelButton"], !1);
}
function Cb() {
  Eb(this, ["confirmButton", "denyButton", "cancelButton"], !0);
}
function Ab() {
  Sb(this.getInput(), !1);
}
function Rb() {
  Sb(this.getInput(), !0);
}
function Ob(a) {
  const t = nt.domCache.get(this),
    r = nt.innerParams.get(this);
  cn(t.validationMessage, a),
    (t.validationMessage.className = H["validation-message"]),
    r.customClass &&
      r.customClass.validationMessage &&
      Ye(t.validationMessage, r.customClass.validationMessage),
    St(t.validationMessage);
  const o = this.getInput();
  o &&
    (o.setAttribute("aria-invalid", "true"),
    o.setAttribute("aria-describedby", H["validation-message"]),
    tb(o),
    Ye(o, H.inputerror));
}
function Db() {
  const a = nt.domCache.get(this);
  a.validationMessage && Mt(a.validationMessage);
  const t = this.getInput();
  t &&
    (t.removeAttribute("aria-invalid"),
    t.removeAttribute("aria-describedby"),
    Sn(t, H.inputerror));
}
const Pr = {
    title: "",
    titleText: "",
    text: "",
    html: "",
    footer: "",
    icon: void 0,
    iconColor: void 0,
    iconHtml: void 0,
    template: void 0,
    toast: !1,
    draggable: !1,
    animation: !0,
    theme: "light",
    showClass: {
      popup: "swal2-show",
      backdrop: "swal2-backdrop-show",
      icon: "swal2-icon-show",
    },
    hideClass: {
      popup: "swal2-hide",
      backdrop: "swal2-backdrop-hide",
      icon: "swal2-icon-hide",
    },
    customClass: {},
    target: "body",
    color: void 0,
    backdrop: !0,
    heightAuto: !0,
    allowOutsideClick: !0,
    allowEscapeKey: !0,
    allowEnterKey: !0,
    stopKeydownPropagation: !0,
    keydownListenerCapture: !1,
    showConfirmButton: !0,
    showDenyButton: !1,
    showCancelButton: !1,
    preConfirm: void 0,
    preDeny: void 0,
    confirmButtonText: "OK",
    confirmButtonAriaLabel: "",
    confirmButtonColor: void 0,
    denyButtonText: "No",
    denyButtonAriaLabel: "",
    denyButtonColor: void 0,
    cancelButtonText: "Cancel",
    cancelButtonAriaLabel: "",
    cancelButtonColor: void 0,
    buttonsStyling: !0,
    reverseButtons: !1,
    focusConfirm: !0,
    focusDeny: !1,
    focusCancel: !1,
    returnFocus: !0,
    showCloseButton: !1,
    closeButtonHtml: "&times;",
    closeButtonAriaLabel: "Close this dialog",
    loaderHtml: "",
    showLoaderOnConfirm: !1,
    showLoaderOnDeny: !1,
    imageUrl: void 0,
    imageWidth: void 0,
    imageHeight: void 0,
    imageAlt: "",
    timer: void 0,
    timerProgressBar: !1,
    width: void 0,
    padding: void 0,
    background: void 0,
    input: void 0,
    inputPlaceholder: "",
    inputLabel: "",
    inputValue: "",
    inputOptions: {},
    inputAutoFocus: !0,
    inputAutoTrim: !0,
    inputAttributes: {},
    inputValidator: void 0,
    returnInputValueOnDeny: !1,
    validationMessage: void 0,
    grow: !1,
    position: "center",
    progressSteps: [],
    currentProgressStep: void 0,
    progressStepsDistance: void 0,
    willOpen: void 0,
    didOpen: void 0,
    didRender: void 0,
    willClose: void 0,
    didClose: void 0,
    didDestroy: void 0,
    scrollbarPadding: !0,
    topLayer: !1,
  },
  x3 = [
    "allowEscapeKey",
    "allowOutsideClick",
    "background",
    "buttonsStyling",
    "cancelButtonAriaLabel",
    "cancelButtonColor",
    "cancelButtonText",
    "closeButtonAriaLabel",
    "closeButtonHtml",
    "color",
    "confirmButtonAriaLabel",
    "confirmButtonColor",
    "confirmButtonText",
    "currentProgressStep",
    "customClass",
    "denyButtonAriaLabel",
    "denyButtonColor",
    "denyButtonText",
    "didClose",
    "didDestroy",
    "draggable",
    "footer",
    "hideClass",
    "html",
    "icon",
    "iconColor",
    "iconHtml",
    "imageAlt",
    "imageHeight",
    "imageUrl",
    "imageWidth",
    "preConfirm",
    "preDeny",
    "progressSteps",
    "returnFocus",
    "reverseButtons",
    "showCancelButton",
    "showCloseButton",
    "showConfirmButton",
    "showDenyButton",
    "text",
    "title",
    "titleText",
    "theme",
    "willClose",
  ],
  E3 = { allowEnterKey: void 0 },
  S3 = [
    "allowOutsideClick",
    "allowEnterKey",
    "backdrop",
    "draggable",
    "focusConfirm",
    "focusDeny",
    "focusCancel",
    "returnFocus",
    "heightAuto",
    "keydownListenerCapture",
  ],
  Nb = (a) => Object.prototype.hasOwnProperty.call(Pr, a),
  Mb = (a) => x3.indexOf(a) !== -1,
  kb = (a) => E3[a],
  T3 = (a) => {
    Nb(a) || It(`Unknown parameter "${a}"`);
  },
  C3 = (a) => {
    S3.includes(a) && It(`The parameter "${a}" is incompatible with toasts`);
  },
  A3 = (a) => {
    const t = kb(a);
    t && Z0(a, t);
  },
  Lb = (a) => {
    a.backdrop === !1 &&
      a.allowOutsideClick &&
      It(
        '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
      ),
      a.theme &&
        ![
          "light",
          "dark",
          "auto",
          "minimal",
          "borderless",
          "embed-iframe",
        ].includes(a.theme) &&
        It(
          `Invalid theme "${a.theme}". Expected "light", "dark", "auto", "minimal", "borderless", or "embed-iframe"`
        );
    for (const t in a) T3(t), a.toast && C3(t), A3(t);
  };
function jb(a) {
  const t = Bt(),
    r = qe(),
    o = nt.innerParams.get(this);
  if (!r || va(r, o.hideClass.popup)) {
    It(
      "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
    );
    return;
  }
  const c = R3(a),
    d = Object.assign({}, o, c);
  Lb(d),
    (t.dataset.swal2Theme = d.theme),
    db(this, d),
    nt.innerParams.set(this, d),
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, a),
        writable: !1,
        enumerable: !0,
      },
    });
}
const R3 = (a) => {
  const t = {};
  return (
    Object.keys(a).forEach((r) => {
      Mb(r) ? (t[r] = a[r]) : It(`Invalid parameter to update: ${r}`);
    }),
    t
  );
};
function Ub() {
  const a = nt.domCache.get(this),
    t = nt.innerParams.get(this);
  if (!t) {
    zb(this);
    return;
  }
  a.popup &&
    me.swalCloseEventFinishedCallback &&
    (me.swalCloseEventFinishedCallback(),
    delete me.swalCloseEventFinishedCallback),
    typeof t.didDestroy == "function" && t.didDestroy(),
    me.eventEmitter.emit("didDestroy"),
    O3(this);
}
const O3 = (a) => {
    zb(a),
      delete a.params,
      delete me.keydownHandler,
      delete me.keydownTarget,
      delete me.currentInstance;
  },
  zb = (a) => {
    a.isAwaitingPromise
      ? (xf(nt, a), (a.isAwaitingPromise = !0))
      : (xf($r, a),
        xf(nt, a),
        delete a.isAwaitingPromise,
        delete a.disableButtons,
        delete a.enableButtons,
        delete a.getInput,
        delete a.disableInput,
        delete a.enableInput,
        delete a.hideLoading,
        delete a.disableLoading,
        delete a.showValidationMessage,
        delete a.resetValidationMessage,
        delete a.close,
        delete a.closePopup,
        delete a.closeModal,
        delete a.closeToast,
        delete a.rejectPromise,
        delete a.update,
        delete a._destroy);
  },
  xf = (a, t) => {
    for (const r in a) a[r].delete(t);
  };
var D3 = Object.freeze({
  __proto__: null,
  _destroy: Ub,
  close: ai,
  closeModal: ai,
  closePopup: ai,
  closeToast: ai,
  disableButtons: Cb,
  disableInput: Rb,
  disableLoading: Rc,
  enableButtons: Tb,
  enableInput: Ab,
  getInput: xb,
  handleAwaitingPromise: ko,
  hideLoading: Rc,
  rejectPromise: vb,
  resetValidationMessage: Db,
  showValidationMessage: Ob,
  update: jb,
});
const N3 = (a, t, r) => {
    a.toast ? M3(a, t, r) : (L3(t), j3(t), U3(a, t, r));
  },
  M3 = (a, t, r) => {
    t.popup.onclick = () => {
      (a && (k3(a) || a.timer || a.input)) || r(Jr.close);
    };
  },
  k3 = (a) =>
    !!(
      a.showConfirmButton ||
      a.showDenyButton ||
      a.showCancelButton ||
      a.showCloseButton
    );
let Oc = !1;
const L3 = (a) => {
    a.popup.onmousedown = () => {
      a.container.onmouseup = function (t) {
        (a.container.onmouseup = () => {}),
          t.target === a.container && (Oc = !0);
      };
    };
  },
  j3 = (a) => {
    a.container.onmousedown = (t) => {
      t.target === a.container && t.preventDefault(),
        (a.popup.onmouseup = function (r) {
          (a.popup.onmouseup = () => {}),
            (r.target === a.popup ||
              (r.target instanceof HTMLElement &&
                a.popup.contains(r.target))) &&
              (Oc = !0);
        });
    };
  },
  U3 = (a, t, r) => {
    t.container.onclick = (o) => {
      if (Oc) {
        Oc = !1;
        return;
      }
      o.target === t.container && Hc(a.allowOutsideClick) && r(Jr.backdrop);
    };
  },
  z3 = (a) => typeof a == "object" && a.jquery,
  xv = (a) => a instanceof Element || z3(a),
  I3 = (a) => {
    const t = {};
    return (
      typeof a[0] == "object" && !xv(a[0])
        ? Object.assign(t, a[0])
        : ["title", "html", "icon"].forEach((r, o) => {
            const c = a[o];
            typeof c == "string" || xv(c)
              ? (t[r] = c)
              : c !== void 0 &&
                Ki(
                  `Unexpected type of ${r}! Expected "string" or "Element", got ${typeof c}`
                );
          }),
      t
    );
  };
function B3(...a) {
  return new this(...a);
}
function H3(a) {
  class t extends this {
    _main(o, c) {
      return super._main(o, Object.assign({}, a, c));
    }
  }
  return t;
}
const P3 = () => me.timeout && me.timeout.getTimerLeft(),
  Ib = () => {
    if (me.timeout) return QC(), me.timeout.stop();
  },
  Bb = () => {
    if (me.timeout) {
      const a = me.timeout.start();
      return wh(a), a;
    }
  },
  V3 = () => {
    const a = me.timeout;
    return a && (a.running ? Ib() : Bb());
  },
  q3 = (a) => {
    if (me.timeout) {
      const t = me.timeout.increase(a);
      return wh(t, !0), t;
    }
  },
  G3 = () => !!(me.timeout && me.timeout.isRunning());
let Ev = !1;
const If = {};
function $3(a = "data-swal-template") {
  (If[a] = this),
    Ev || (document.body.addEventListener("click", Y3), (Ev = !0));
}
const Y3 = (a) => {
  for (let t = a.target; t && t !== document; t = t.parentNode)
    for (const r in If) {
      const o = t.getAttribute(r);
      if (o) {
        If[r].fire({ template: o });
        return;
      }
    }
};
class X3 {
  constructor() {
    this.events = {};
  }
  _getHandlersByEventName(t) {
    return typeof this.events[t] > "u" && (this.events[t] = []), this.events[t];
  }
  on(t, r) {
    const o = this._getHandlersByEventName(t);
    o.includes(r) || o.push(r);
  }
  once(t, r) {
    const o = (...c) => {
      this.removeListener(t, o), r.apply(this, c);
    };
    this.on(t, o);
  }
  emit(t, ...r) {
    this._getHandlersByEventName(t).forEach((o) => {
      try {
        o.apply(this, r);
      } catch (c) {
        console.error(c);
      }
    });
  }
  removeListener(t, r) {
    const o = this._getHandlersByEventName(t),
      c = o.indexOf(r);
    c > -1 && o.splice(c, 1);
  }
  removeAllListeners(t) {
    this.events[t] !== void 0 && (this.events[t].length = 0);
  }
  reset() {
    this.events = {};
  }
}
me.eventEmitter = new X3();
const K3 = (a, t) => {
    me.eventEmitter.on(a, t);
  },
  F3 = (a, t) => {
    me.eventEmitter.once(a, t);
  },
  Q3 = (a, t) => {
    if (!a) {
      me.eventEmitter.reset();
      return;
    }
    t
      ? me.eventEmitter.removeListener(a, t)
      : me.eventEmitter.removeAllListeners(a);
  };
var Z3 = Object.freeze({
  __proto__: null,
  argsToParams: I3,
  bindClickHandler: $3,
  clickCancel: IA,
  clickConfirm: fb,
  clickDeny: zA,
  enableLoading: Yr,
  fire: B3,
  getActions: Do,
  getCancelButton: Qr,
  getCloseButton: gh,
  getConfirmButton: Kn,
  getContainer: Bt,
  getDenyButton: Fi,
  getFocusableElements: yh,
  getFooter: eb,
  getHtmlContainer: mh,
  getIcon: Fr,
  getIconContent: qC,
  getImage: W0,
  getInputLabel: GC,
  getLoader: Zr,
  getPopup: qe,
  getProgressSteps: ph,
  getTimerLeft: P3,
  getTimerProgressBar: Vc,
  getTitle: J0,
  getValidationMessage: Pc,
  increaseTimer: q3,
  isDeprecatedParameter: kb,
  isLoading: YC,
  isTimerRunning: G3,
  isUpdatableParameter: Mb,
  isValidParameter: Nb,
  isVisible: UA,
  mixin: H3,
  off: Q3,
  on: K3,
  once: F3,
  resumeTimer: Bb,
  showLoading: Yr,
  stopTimer: Ib,
  toggleTimer: V3,
});
class J3 {
  constructor(t, r) {
    (this.callback = t),
      (this.remaining = r),
      (this.running = !1),
      this.start();
  }
  start() {
    return (
      this.running ||
        ((this.running = !0),
        (this.started = new Date()),
        (this.id = setTimeout(this.callback, this.remaining))),
      this.remaining
    );
  }
  stop() {
    return (
      this.started &&
        this.running &&
        ((this.running = !1),
        clearTimeout(this.id),
        (this.remaining -= new Date().getTime() - this.started.getTime())),
      this.remaining
    );
  }
  increase(t) {
    const r = this.running;
    return (
      r && this.stop(), (this.remaining += t), r && this.start(), this.remaining
    );
  }
  getTimerLeft() {
    return this.running && (this.stop(), this.start()), this.remaining;
  }
  isRunning() {
    return this.running;
  }
}
const Hb = ["swal-title", "swal-html", "swal-footer"],
  W3 = (a) => {
    const t =
      typeof a.template == "string"
        ? document.querySelector(a.template)
        : a.template;
    if (!t) return {};
    const r = t.content;
    return (
      oR(r), Object.assign(eR(r), tR(r), nR(r), aR(r), iR(r), rR(r), lR(r, Hb))
    );
  },
  eR = (a) => {
    const t = {};
    return (
      Array.from(a.querySelectorAll("swal-param")).forEach((o) => {
        $i(o, ["name", "value"]);
        const c = o.getAttribute("name"),
          d = o.getAttribute("value");
        !c ||
          !d ||
          (typeof Pr[c] == "boolean"
            ? (t[c] = d !== "false")
            : typeof Pr[c] == "object"
            ? (t[c] = JSON.parse(d))
            : (t[c] = d));
      }),
      t
    );
  },
  tR = (a) => {
    const t = {};
    return (
      Array.from(a.querySelectorAll("swal-function-param")).forEach((o) => {
        const c = o.getAttribute("name"),
          d = o.getAttribute("value");
        !c || !d || (t[c] = new Function(`return ${d}`)());
      }),
      t
    );
  },
  nR = (a) => {
    const t = {};
    return (
      Array.from(a.querySelectorAll("swal-button")).forEach((o) => {
        $i(o, ["type", "color", "aria-label"]);
        const c = o.getAttribute("type");
        !c ||
          !["confirm", "cancel", "deny"].includes(c) ||
          ((t[`${c}ButtonText`] = o.innerHTML),
          (t[`show${dh(c)}Button`] = !0),
          o.hasAttribute("color") &&
            (t[`${c}ButtonColor`] = o.getAttribute("color")),
          o.hasAttribute("aria-label") &&
            (t[`${c}ButtonAriaLabel`] = o.getAttribute("aria-label")));
      }),
      t
    );
  },
  aR = (a) => {
    const t = {},
      r = a.querySelector("swal-image");
    return (
      r &&
        ($i(r, ["src", "width", "height", "alt"]),
        r.hasAttribute("src") && (t.imageUrl = r.getAttribute("src") || void 0),
        r.hasAttribute("width") &&
          (t.imageWidth = r.getAttribute("width") || void 0),
        r.hasAttribute("height") &&
          (t.imageHeight = r.getAttribute("height") || void 0),
        r.hasAttribute("alt") &&
          (t.imageAlt = r.getAttribute("alt") || void 0)),
      t
    );
  },
  iR = (a) => {
    const t = {},
      r = a.querySelector("swal-icon");
    return (
      r &&
        ($i(r, ["type", "color"]),
        r.hasAttribute("type") && (t.icon = r.getAttribute("type")),
        r.hasAttribute("color") && (t.iconColor = r.getAttribute("color")),
        (t.iconHtml = r.innerHTML)),
      t
    );
  },
  rR = (a) => {
    const t = {},
      r = a.querySelector("swal-input");
    r &&
      ($i(r, ["type", "label", "placeholder", "value"]),
      (t.input = r.getAttribute("type") || "text"),
      r.hasAttribute("label") && (t.inputLabel = r.getAttribute("label")),
      r.hasAttribute("placeholder") &&
        (t.inputPlaceholder = r.getAttribute("placeholder")),
      r.hasAttribute("value") && (t.inputValue = r.getAttribute("value")));
    const o = Array.from(a.querySelectorAll("swal-input-option"));
    return (
      o.length &&
        ((t.inputOptions = {}),
        o.forEach((c) => {
          $i(c, ["value"]);
          const d = c.getAttribute("value");
          if (!d) return;
          const f = c.innerHTML;
          t.inputOptions[d] = f;
        })),
      t
    );
  },
  lR = (a, t) => {
    const r = {};
    for (const o in t) {
      const c = t[o],
        d = a.querySelector(c);
      d && ($i(d, []), (r[c.replace(/^swal-/, "")] = d.innerHTML.trim()));
    }
    return r;
  },
  oR = (a) => {
    const t = Hb.concat([
      "swal-param",
      "swal-function-param",
      "swal-button",
      "swal-image",
      "swal-icon",
      "swal-input",
      "swal-input-option",
    ]);
    Array.from(a.children).forEach((r) => {
      const o = r.tagName.toLowerCase();
      t.includes(o) || It(`Unrecognized element <${o}>`);
    });
  },
  $i = (a, t) => {
    Array.from(a.attributes).forEach((r) => {
      t.indexOf(r.name) === -1 &&
        It([
          `Unrecognized attribute "${r.name}" on <${a.tagName.toLowerCase()}>.`,
          `${
            t.length
              ? `Allowed attributes are: ${t.join(", ")}`
              : "To set the value, use HTML within the element."
          }`,
        ]);
    });
  },
  Pb = 10,
  sR = (a) => {
    const t = Bt(),
      r = qe();
    typeof a.willOpen == "function" && a.willOpen(r),
      me.eventEmitter.emit("willOpen", r);
    const c = window.getComputedStyle(document.body).overflowY;
    dR(t, r, a),
      setTimeout(() => {
        cR(t, r);
      }, Pb),
      vh() && (uR(t, a.scrollbarPadding, c), YA()),
      !qc() &&
        !me.previousActiveElement &&
        (me.previousActiveElement = document.activeElement),
      typeof a.didOpen == "function" && setTimeout(() => a.didOpen(r)),
      me.eventEmitter.emit("didOpen", r),
      Sn(t, H["no-transition"]);
  },
  Dc = (a) => {
    const t = qe();
    if (a.target !== t) return;
    const r = Bt();
    t.removeEventListener("animationend", Dc),
      t.removeEventListener("transitionend", Dc),
      (r.style.overflowY = "auto");
  },
  cR = (a, t) => {
    ab(t)
      ? ((a.style.overflowY = "hidden"),
        t.addEventListener("animationend", Dc),
        t.addEventListener("transitionend", Dc))
      : (a.style.overflowY = "auto");
  },
  uR = (a, t, r) => {
    XA(),
      t && r !== "hidden" && e3(r),
      setTimeout(() => {
        a.scrollTop = 0;
      });
  },
  dR = (a, t, r) => {
    Ye(a, r.showClass.backdrop),
      r.animation
        ? (t.style.setProperty("opacity", "0", "important"),
          St(t, "grid"),
          setTimeout(() => {
            Ye(t, r.showClass.popup), t.style.removeProperty("opacity");
          }, Pb))
        : St(t, "grid"),
      Ye([document.documentElement, document.body], H.shown),
      r.heightAuto &&
        r.backdrop &&
        !r.toast &&
        Ye([document.documentElement, document.body], H["height-auto"]);
  };
var Sv = {
  email: (a, t) =>
    /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(a)
      ? Promise.resolve()
      : Promise.resolve(t || "Invalid email address"),
  url: (a, t) =>
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
      a
    )
      ? Promise.resolve()
      : Promise.resolve(t || "Invalid URL"),
};
function fR(a) {
  a.inputValidator ||
    (a.input === "email" && (a.inputValidator = Sv.email),
    a.input === "url" && (a.inputValidator = Sv.url));
}
function hR(a) {
  (!a.target ||
    (typeof a.target == "string" && !document.querySelector(a.target)) ||
    (typeof a.target != "string" && !a.target.appendChild)) &&
    (It('Target parameter is not valid, defaulting to "body"'),
    (a.target = "body"));
}
function mR(a) {
  fR(a),
    a.showLoaderOnConfirm &&
      !a.preConfirm &&
      It(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
    hR(a),
    typeof a.title == "string" &&
      (a.title = a.title
        .split(
          `
`
        )
        .join("<br />")),
    iA(a);
}
let $n;
var ec = new WeakMap();
class pt {
  constructor(...t) {
    if ((jC(this, ec, void 0), typeof window > "u")) return;
    $n = this;
    const r = Object.freeze(this.constructor.argsToParams(t));
    (this.params = r),
      (this.isAwaitingPromise = !1),
      UC(ec, this, this._main($n.params));
  }
  _main(t, r = {}) {
    if ((Lb(Object.assign({}, r, t)), me.currentInstance)) {
      const d = $r.swalPromiseResolve.get(me.currentInstance),
        { isAwaitingPromise: f } = me.currentInstance;
      me.currentInstance._destroy(), f || d({ isDismissed: !0 }), vh() && pb();
    }
    me.currentInstance = $n;
    const o = gR(t, r);
    mR(o),
      Object.freeze(o),
      me.timeout && (me.timeout.stop(), delete me.timeout),
      clearTimeout(me.restoreFocusTimeout);
    const c = yR($n);
    return db($n, o), nt.innerParams.set($n, o), pR($n, c, o);
  }
  then(t) {
    return mv(ec, this).then(t);
  }
  finally(t) {
    return mv(ec, this).finally(t);
  }
}
const pR = (a, t, r) =>
    new Promise((o, c) => {
      const d = (f) => {
        a.close({ isDismissed: !0, dismiss: f });
      };
      $r.swalPromiseResolve.set(a, o),
        $r.swalPromiseReject.set(a, c),
        (t.confirmButton.onclick = () => {
          y3(a);
        }),
        (t.denyButton.onclick = () => {
          v3(a);
        }),
        (t.cancelButton.onclick = () => {
          b3(a, d);
        }),
        (t.closeButton.onclick = () => {
          d(Jr.close);
        }),
        N3(r, t, d),
        BA(me, r, d),
        s3(a, r),
        sR(r),
        vR(me, r, d),
        bR(t, r),
        setTimeout(() => {
          t.container.scrollTop = 0;
        });
    }),
  gR = (a, t) => {
    const r = W3(a),
      o = Object.assign({}, Pr, t, r, a);
    return (
      (o.showClass = Object.assign({}, Pr.showClass, o.showClass)),
      (o.hideClass = Object.assign({}, Pr.hideClass, o.hideClass)),
      o.animation === !1 &&
        ((o.showClass = { backdrop: "swal2-noanimation" }), (o.hideClass = {})),
      o
    );
  },
  yR = (a) => {
    const t = {
      popup: qe(),
      container: Bt(),
      actions: Do(),
      confirmButton: Kn(),
      denyButton: Fi(),
      cancelButton: Qr(),
      loader: Zr(),
      closeButton: gh(),
      validationMessage: Pc(),
      progressSteps: ph(),
    };
    return nt.domCache.set(a, t), t;
  },
  vR = (a, t, r) => {
    const o = Vc();
    Mt(o),
      t.timer &&
        ((a.timeout = new J3(() => {
          r("timer"), delete a.timeout;
        }, t.timer)),
        t.timerProgressBar &&
          (St(o),
          on(o, t, "timerProgressBar"),
          setTimeout(() => {
            a.timeout && a.timeout.running && wh(t.timer);
          })));
  },
  bR = (a, t) => {
    if (!t.toast) {
      if (!Hc(t.allowEnterKey)) {
        Z0("allowEnterKey"), xR();
        return;
      }
      wR(a) || _R(a, t) || zf(-1, 1);
    }
  },
  wR = (a) => {
    const t = Array.from(a.popup.querySelectorAll("[autofocus]"));
    for (const r of t)
      if (r instanceof HTMLElement && Xt(r)) return r.focus(), !0;
    return !1;
  },
  _R = (a, t) =>
    t.focusDeny && Xt(a.denyButton)
      ? (a.denyButton.focus(), !0)
      : t.focusCancel && Xt(a.cancelButton)
      ? (a.cancelButton.focus(), !0)
      : t.focusConfirm && Xt(a.confirmButton)
      ? (a.confirmButton.focus(), !0)
      : !1,
  xR = () => {
    document.activeElement instanceof HTMLElement &&
      typeof document.activeElement.blur == "function" &&
      document.activeElement.blur();
  };
if (
  typeof window < "u" &&
  /^ru\b/.test(navigator.language) &&
  location.host.match(/\.(ru|su|by|xn--p1ai)$/)
) {
  const a = new Date(),
    t = localStorage.getItem("swal-initiation");
  t
    ? (a.getTime() - Date.parse(t)) / (1e3 * 60 * 60 * 24) > 3 &&
      setTimeout(() => {
        document.body.style.pointerEvents = "none";
        const r = document.createElement("audio");
        (r.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
          (r.loop = !0),
          document.body.appendChild(r),
          setTimeout(() => {
            r.play().catch(() => {});
          }, 2500);
      }, 500)
    : localStorage.setItem("swal-initiation", `${a}`);
}
pt.prototype.disableButtons = Cb;
pt.prototype.enableButtons = Tb;
pt.prototype.getInput = xb;
pt.prototype.disableInput = Rb;
pt.prototype.enableInput = Ab;
pt.prototype.hideLoading = Rc;
pt.prototype.disableLoading = Rc;
pt.prototype.showValidationMessage = Ob;
pt.prototype.resetValidationMessage = Db;
pt.prototype.close = ai;
pt.prototype.closePopup = ai;
pt.prototype.closeModal = ai;
pt.prototype.closeToast = ai;
pt.prototype.rejectPromise = vb;
pt.prototype.update = jb;
pt.prototype._destroy = Ub;
Object.assign(pt, Z3);
Object.keys(D3).forEach((a) => {
  pt[a] = function (...t) {
    return $n && $n[a] ? $n[a](...t) : null;
  };
});
pt.DismissReason = Jr;
pt.version = "11.21.2";
const Kt = pt;
Kt.default = Kt;
typeof document < "u" &&
  (function (a, t) {
    var r = a.createElement("style");
    if ((a.getElementsByTagName("head")[0].appendChild(r), r.styleSheet))
      r.styleSheet.disabled || (r.styleSheet.cssText = t);
    else
      try {
        r.innerHTML = t;
      } catch {
        r.innerText = t;
      }
  })(
    document,
    ':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-footer-border-color: #eee;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-confirm-button-border: 0;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-border: 0;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-border: 0;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-button-transition);box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:var(--swal2-confirm-button-border);border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), black 10%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), black 20%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:var(--swal2-deny-button-border);border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), black 10%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), black 20%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:var(--swal2-cancel-button-border);border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), black 10%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), black 20%)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-outline)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:1px solid #d9d9d9;border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}'
  );
function Vb(a) {
  var t,
    r,
    o = "";
  if (typeof a == "string" || typeof a == "number") o += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var c = a.length;
      for (t = 0; t < c; t++)
        a[t] && (r = Vb(a[t])) && (o && (o += " "), (o += r));
    } else for (r in a) a[r] && (o && (o += " "), (o += r));
  return o;
}
function Vi() {
  for (var a, t, r = 0, o = "", c = arguments.length; r < c; r++)
    (a = arguments[r]) && (t = Vb(a)) && (o && (o += " "), (o += t));
  return o;
}
function ER(a) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = a)
      : r.appendChild(document.createTextNode(a));
}
ER(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var Lo = (a) => typeof a == "number" && !isNaN(a),
  Yi = (a) => typeof a == "string",
  _a = (a) => typeof a == "function",
  SR = (a) => Yi(a) || Lo(a),
  Bf = (a) => (Yi(a) || _a(a) ? a : null),
  TR = (a, t) => (a === !1 || (Lo(a) && a > 0) ? a : t),
  Hf = (a) => A.isValidElement(a) || Yi(a) || _a(a) || Lo(a);
function CR(a, t, r = 300) {
  let { scrollHeight: o, style: c } = a;
  requestAnimationFrame(() => {
    (c.minHeight = "initial"),
      (c.height = o + "px"),
      (c.transition = `all ${r}ms`),
      requestAnimationFrame(() => {
        (c.height = "0"), (c.padding = "0"), (c.margin = "0"), setTimeout(t, r);
      });
  });
}
function AR({
  enter: a,
  exit: t,
  appendPosition: r = !1,
  collapse: o = !0,
  collapseDuration: c = 300,
}) {
  return function ({
    children: d,
    position: f,
    preventExitTransition: p,
    done: h,
    nodeRef: g,
    isIn: b,
    playToast: E,
  }) {
    let w = r ? `${a}--${f}` : a,
      O = r ? `${t}--${f}` : t,
      M = A.useRef(0);
    return (
      A.useLayoutEffect(() => {
        let $ = g.current,
          P = w.split(" "),
          I = (B) => {
            B.target === g.current &&
              (E(),
              $.removeEventListener("animationend", I),
              $.removeEventListener("animationcancel", I),
              M.current === 0 &&
                B.type !== "animationcancel" &&
                $.classList.remove(...P));
          };
        $.classList.add(...P),
          $.addEventListener("animationend", I),
          $.addEventListener("animationcancel", I);
      }, []),
      A.useEffect(() => {
        let $ = g.current,
          P = () => {
            $.removeEventListener("animationend", P), o ? CR($, h, c) : h();
          };
        b ||
          (p
            ? P()
            : ((M.current = 1),
              ($.className += ` ${O}`),
              $.addEventListener("animationend", P)));
      }, [b]),
      Ve.createElement(Ve.Fragment, null, d)
    );
  };
}
function Tv(a, t) {
  return {
    content: qb(a.content, a.props),
    containerId: a.props.containerId,
    id: a.props.toastId,
    theme: a.props.theme,
    type: a.props.type,
    data: a.props.data || {},
    isLoading: a.props.isLoading,
    icon: a.props.icon,
    reason: a.removalReason,
    status: t,
  };
}
function qb(a, t, r = !1) {
  return A.isValidElement(a) && !Yi(a.type)
    ? A.cloneElement(a, {
        closeToast: t.closeToast,
        toastProps: t,
        data: t.data,
        isPaused: r,
      })
    : _a(a)
    ? a({ closeToast: t.closeToast, toastProps: t, data: t.data, isPaused: r })
    : a;
}
function RR({ closeToast: a, theme: t, ariaLabel: r = "close" }) {
  return Ve.createElement(
    "button",
    {
      className: `Toastify__close-button Toastify__close-button--${t}`,
      type: "button",
      onClick: (o) => {
        o.stopPropagation(), a(!0);
      },
      "aria-label": r,
    },
    Ve.createElement(
      "svg",
      { "aria-hidden": "true", viewBox: "0 0 14 16" },
      Ve.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
      })
    )
  );
}
function OR({
  delay: a,
  isRunning: t,
  closeToast: r,
  type: o = "default",
  hide: c,
  className: d,
  controlledProgress: f,
  progress: p,
  rtl: h,
  isIn: g,
  theme: b,
}) {
  let E = c || (f && p === 0),
    w = {
      animationDuration: `${a}ms`,
      animationPlayState: t ? "running" : "paused",
    };
  f && (w.transform = `scaleX(${p})`);
  let O = Vi(
      "Toastify__progress-bar",
      f
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${b}`,
      `Toastify__progress-bar--${o}`,
      { "Toastify__progress-bar--rtl": h }
    ),
    M = _a(d) ? d({ rtl: h, type: o, defaultClassName: O }) : Vi(O, d),
    $ = {
      [f && p >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        f && p < 1
          ? null
          : () => {
              g && r();
            },
    };
  return Ve.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": E },
    Ve.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${b} Toastify__progress-bar--${o}`,
    }),
    Ve.createElement("div", {
      role: "progressbar",
      "aria-hidden": E ? "true" : "false",
      "aria-label": "notification timer",
      className: M,
      style: w,
      ...$,
    })
  );
}
var DR = 1,
  Gb = () => `${DR++}`;
function NR(a, t, r) {
  let o = 1,
    c = 0,
    d = [],
    f = [],
    p = t,
    h = new Map(),
    g = new Set(),
    b = (B) => (g.add(B), () => g.delete(B)),
    E = () => {
      (f = Array.from(h.values())), g.forEach((B) => B());
    },
    w = ({ containerId: B, toastId: V, updateId: Q }) => {
      let F = B ? B !== a : a !== 1,
        D = h.has(V) && Q == null;
      return F || D;
    },
    O = (B, V) => {
      h.forEach((Q) => {
        var F;
        (V == null || V === Q.props.toastId) &&
          ((F = Q.toggle) == null || F.call(Q, B));
      });
    },
    M = (B) => {
      var V, Q;
      (Q = (V = B.props) == null ? void 0 : V.onClose) == null ||
        Q.call(V, B.removalReason),
        (B.isActive = !1);
    },
    $ = (B) => {
      if (B == null) h.forEach(M);
      else {
        let V = h.get(B);
        V && M(V);
      }
      E();
    },
    P = () => {
      (c -= d.length), (d = []);
    },
    I = (B) => {
      var V, Q;
      let { toastId: F, updateId: D } = B.props,
        ee = D == null;
      B.staleId && h.delete(B.staleId),
        (B.isActive = !0),
        h.set(F, B),
        E(),
        r(Tv(B, ee ? "added" : "updated")),
        ee && ((Q = (V = B.props).onOpen) == null || Q.call(V));
    };
  return {
    id: a,
    props: p,
    observe: b,
    toggle: O,
    removeToast: $,
    toasts: h,
    clearQueue: P,
    buildToast: (B, V) => {
      if (w(V)) return;
      let { toastId: Q, updateId: F, data: D, staleId: ee, delay: ne } = V,
        le = F == null;
      le && c++;
      let Me = {
        ...p,
        style: p.toastStyle,
        key: o++,
        ...Object.fromEntries(
          Object.entries(V).filter(([Ge, Re]) => Re != null)
        ),
        toastId: Q,
        updateId: F,
        data: D,
        isIn: !1,
        className: Bf(V.className || p.toastClassName),
        progressClassName: Bf(V.progressClassName || p.progressClassName),
        autoClose: V.isLoading ? !1 : TR(V.autoClose, p.autoClose),
        closeToast(Ge) {
          (h.get(Q).removalReason = Ge), $(Q);
        },
        deleteToast() {
          let Ge = h.get(Q);
          if (Ge != null) {
            if (
              (r(Tv(Ge, "removed")),
              h.delete(Q),
              c--,
              c < 0 && (c = 0),
              d.length > 0)
            ) {
              I(d.shift());
              return;
            }
            E();
          }
        },
      };
      (Me.closeButton = p.closeButton),
        V.closeButton === !1 || Hf(V.closeButton)
          ? (Me.closeButton = V.closeButton)
          : V.closeButton === !0 &&
            (Me.closeButton = Hf(p.closeButton) ? p.closeButton : !0);
      let ze = { content: B, props: Me, staleId: ee };
      p.limit && p.limit > 0 && c > p.limit && le
        ? d.push(ze)
        : Lo(ne)
        ? setTimeout(() => {
            I(ze);
          }, ne)
        : I(ze);
    },
    setProps(B) {
      p = B;
    },
    setToggle: (B, V) => {
      let Q = h.get(B);
      Q && (Q.toggle = V);
    },
    isToastActive: (B) => {
      var V;
      return (V = h.get(B)) == null ? void 0 : V.isActive;
    },
    getSnapshot: () => f,
  };
}
var Ut = new Map(),
  yo = [],
  Pf = new Set(),
  MR = (a) => Pf.forEach((t) => t(a)),
  $b = () => Ut.size > 0;
function kR() {
  yo.forEach((a) => Xb(a.content, a.options)), (yo = []);
}
var LR = (a, { containerId: t }) => {
  var r;
  return (r = Ut.get(t || 1)) == null ? void 0 : r.toasts.get(a);
};
function Yb(a, t) {
  var r;
  if (t) return !!((r = Ut.get(t)) != null && r.isToastActive(a));
  let o = !1;
  return (
    Ut.forEach((c) => {
      c.isToastActive(a) && (o = !0);
    }),
    o
  );
}
function jR(a) {
  if (!$b()) {
    yo = yo.filter((t) => a != null && t.options.toastId !== a);
    return;
  }
  if (a == null || SR(a))
    Ut.forEach((t) => {
      t.removeToast(a);
    });
  else if (a && ("containerId" in a || "id" in a)) {
    let t = Ut.get(a.containerId);
    t
      ? t.removeToast(a.id)
      : Ut.forEach((r) => {
          r.removeToast(a.id);
        });
  }
}
var UR = (a = {}) => {
  Ut.forEach((t) => {
    t.props.limit &&
      (!a.containerId || t.id === a.containerId) &&
      t.clearQueue();
  });
};
function Xb(a, t) {
  Hf(a) &&
    ($b() || yo.push({ content: a, options: t }),
    Ut.forEach((r) => {
      r.buildToast(a, t);
    }));
}
function zR(a) {
  var t;
  (t = Ut.get(a.containerId || 1)) == null || t.setToggle(a.id, a.fn);
}
function Kb(a, t) {
  Ut.forEach((r) => {
    (t == null ||
      !(t != null && t.containerId) ||
      (t == null ? void 0 : t.containerId) === r.id) &&
      r.toggle(a, t == null ? void 0 : t.id);
  });
}
function IR(a) {
  let t = a.containerId || 1;
  return {
    subscribe(r) {
      let o = NR(t, a, MR);
      Ut.set(t, o);
      let c = o.observe(r);
      return (
        kR(),
        () => {
          c(), Ut.delete(t);
        }
      );
    },
    setProps(r) {
      var o;
      (o = Ut.get(t)) == null || o.setProps(r);
    },
    getSnapshot() {
      var r;
      return (r = Ut.get(t)) == null ? void 0 : r.getSnapshot();
    },
  };
}
function BR(a) {
  return (
    Pf.add(a),
    () => {
      Pf.delete(a);
    }
  );
}
function HR(a) {
  return a && (Yi(a.toastId) || Lo(a.toastId)) ? a.toastId : Gb();
}
function jo(a, t) {
  return Xb(a, t), t.toastId;
}
function $c(a, t) {
  return { ...t, type: (t && t.type) || a, toastId: HR(t) };
}
function Yc(a) {
  return (t, r) => jo(t, $c(a, r));
}
function Ue(a, t) {
  return jo(a, $c("default", t));
}
Ue.loading = (a, t) =>
  jo(
    a,
    $c("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  );
function PR(a, { pending: t, error: r, success: o }, c) {
  let d;
  t && (d = Yi(t) ? Ue.loading(t, c) : Ue.loading(t.render, { ...c, ...t }));
  let f = {
      isLoading: null,
      autoClose: null,
      closeOnClick: null,
      closeButton: null,
      draggable: null,
    },
    p = (g, b, E) => {
      if (b == null) {
        Ue.dismiss(d);
        return;
      }
      let w = { type: g, ...f, ...c, data: E },
        O = Yi(b) ? { render: b } : b;
      return d ? Ue.update(d, { ...w, ...O }) : Ue(O.render, { ...w, ...O }), E;
    },
    h = _a(a) ? a() : a;
  return h.then((g) => p("success", o, g)).catch((g) => p("error", r, g)), h;
}
Ue.promise = PR;
Ue.success = Yc("success");
Ue.info = Yc("info");
Ue.error = Yc("error");
Ue.warning = Yc("warning");
Ue.warn = Ue.warning;
Ue.dark = (a, t) => jo(a, $c("default", { theme: "dark", ...t }));
function VR(a) {
  jR(a);
}
Ue.dismiss = VR;
Ue.clearWaitingQueue = UR;
Ue.isActive = Yb;
Ue.update = (a, t = {}) => {
  let r = LR(a, t);
  if (r) {
    let { props: o, content: c } = r,
      d = { delay: 100, ...o, ...t, toastId: t.toastId || a, updateId: Gb() };
    d.toastId !== a && (d.staleId = a);
    let f = d.render || c;
    delete d.render, jo(f, d);
  }
};
Ue.done = (a) => {
  Ue.update(a, { progress: 1 });
};
Ue.onChange = BR;
Ue.play = (a) => Kb(!0, a);
Ue.pause = (a) => Kb(!1, a);
function qR(a) {
  var t;
  let { subscribe: r, getSnapshot: o, setProps: c } = A.useRef(IR(a)).current;
  c(a);
  let d = (t = A.useSyncExternalStore(r, o, o)) == null ? void 0 : t.slice();
  function f(p) {
    if (!d) return [];
    let h = new Map();
    return (
      a.newestOnTop && d.reverse(),
      d.forEach((g) => {
        let { position: b } = g.props;
        h.has(b) || h.set(b, []), h.get(b).push(g);
      }),
      Array.from(h, (g) => p(g[0], g[1]))
    );
  }
  return {
    getToastToRender: f,
    isToastActive: Yb,
    count: d == null ? void 0 : d.length,
  };
}
function GR(a) {
  let [t, r] = A.useState(!1),
    [o, c] = A.useState(!1),
    d = A.useRef(null),
    f = A.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: p,
      pauseOnHover: h,
      closeToast: g,
      onClick: b,
      closeOnClick: E,
    } = a;
  zR({ id: a.toastId, containerId: a.containerId, fn: r }),
    A.useEffect(() => {
      if (a.pauseOnFocusLoss)
        return (
          w(),
          () => {
            O();
          }
        );
    }, [a.pauseOnFocusLoss]);
  function w() {
    document.hasFocus() || I(),
      window.addEventListener("focus", P),
      window.addEventListener("blur", I);
  }
  function O() {
    window.removeEventListener("focus", P),
      window.removeEventListener("blur", I);
  }
  function M(ee) {
    if (a.draggable === !0 || a.draggable === ee.pointerType) {
      B();
      let ne = d.current;
      (f.canCloseOnClick = !0),
        (f.canDrag = !0),
        (ne.style.transition = "none"),
        a.draggableDirection === "x"
          ? ((f.start = ee.clientX),
            (f.removalDistance = ne.offsetWidth * (a.draggablePercent / 100)))
          : ((f.start = ee.clientY),
            (f.removalDistance =
              (ne.offsetHeight *
                (a.draggablePercent === 80
                  ? a.draggablePercent * 1.5
                  : a.draggablePercent)) /
              100));
    }
  }
  function $(ee) {
    let {
      top: ne,
      bottom: le,
      left: Me,
      right: ze,
    } = d.current.getBoundingClientRect();
    ee.nativeEvent.type !== "touchend" &&
    a.pauseOnHover &&
    ee.clientX >= Me &&
    ee.clientX <= ze &&
    ee.clientY >= ne &&
    ee.clientY <= le
      ? I()
      : P();
  }
  function P() {
    r(!0);
  }
  function I() {
    r(!1);
  }
  function B() {
    (f.didMove = !1),
      document.addEventListener("pointermove", Q),
      document.addEventListener("pointerup", F);
  }
  function V() {
    document.removeEventListener("pointermove", Q),
      document.removeEventListener("pointerup", F);
  }
  function Q(ee) {
    let ne = d.current;
    if (f.canDrag && ne) {
      (f.didMove = !0),
        t && I(),
        a.draggableDirection === "x"
          ? (f.delta = ee.clientX - f.start)
          : (f.delta = ee.clientY - f.start),
        f.start !== ee.clientX && (f.canCloseOnClick = !1);
      let le =
        a.draggableDirection === "x"
          ? `${f.delta}px, var(--y)`
          : `0, calc(${f.delta}px + var(--y))`;
      (ne.style.transform = `translate3d(${le},0)`),
        (ne.style.opacity = `${1 - Math.abs(f.delta / f.removalDistance)}`);
    }
  }
  function F() {
    V();
    let ee = d.current;
    if (f.canDrag && f.didMove && ee) {
      if (((f.canDrag = !1), Math.abs(f.delta) > f.removalDistance)) {
        c(!0), a.closeToast(!0), a.collapseAll();
        return;
      }
      (ee.style.transition = "transform 0.2s, opacity 0.2s"),
        ee.style.removeProperty("transform"),
        ee.style.removeProperty("opacity");
    }
  }
  let D = { onPointerDown: M, onPointerUp: $ };
  return (
    p && h && ((D.onMouseEnter = I), a.stacked || (D.onMouseLeave = P)),
    E &&
      (D.onClick = (ee) => {
        b && b(ee), f.canCloseOnClick && g(!0);
      }),
    {
      playToast: P,
      pauseToast: I,
      isRunning: t,
      preventExitTransition: o,
      toastRef: d,
      eventHandlers: D,
    }
  );
}
var $R = typeof window < "u" ? A.useLayoutEffect : A.useEffect,
  Xc = ({ theme: a, type: t, isLoading: r, ...o }) =>
    Ve.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        a === "colored" ? "currentColor" : `var(--toastify-icon-color-${t})`,
      ...o,
    });
function YR(a) {
  return Ve.createElement(
    Xc,
    { ...a },
    Ve.createElement("path", {
      d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
    })
  );
}
function XR(a) {
  return Ve.createElement(
    Xc,
    { ...a },
    Ve.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
    })
  );
}
function KR(a) {
  return Ve.createElement(
    Xc,
    { ...a },
    Ve.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
    })
  );
}
function FR(a) {
  return Ve.createElement(
    Xc,
    { ...a },
    Ve.createElement("path", {
      d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
    })
  );
}
function QR() {
  return Ve.createElement("div", { className: "Toastify__spinner" });
}
var Vf = { info: XR, warning: YR, success: KR, error: FR, spinner: QR },
  ZR = (a) => a in Vf;
function JR({ theme: a, type: t, isLoading: r, icon: o }) {
  let c = null,
    d = { theme: a, type: t };
  return (
    o === !1 ||
      (_a(o)
        ? (c = o({ ...d, isLoading: r }))
        : A.isValidElement(o)
        ? (c = A.cloneElement(o, d))
        : r
        ? (c = Vf.spinner())
        : ZR(t) && (c = Vf[t](d))),
    c
  );
}
var WR = (a) => {
    let {
        isRunning: t,
        preventExitTransition: r,
        toastRef: o,
        eventHandlers: c,
        playToast: d,
      } = GR(a),
      {
        closeButton: f,
        children: p,
        autoClose: h,
        onClick: g,
        type: b,
        hideProgressBar: E,
        closeToast: w,
        transition: O,
        position: M,
        className: $,
        style: P,
        progressClassName: I,
        updateId: B,
        role: V,
        progress: Q,
        rtl: F,
        toastId: D,
        deleteToast: ee,
        isIn: ne,
        isLoading: le,
        closeOnClick: Me,
        theme: ze,
        ariaLabel: Ge,
      } = a,
      Re = Vi(
        "Toastify__toast",
        `Toastify__toast-theme--${ze}`,
        `Toastify__toast--${b}`,
        { "Toastify__toast--rtl": F },
        { "Toastify__toast--close-on-click": Me }
      ),
      Ie = _a($)
        ? $({ rtl: F, position: M, type: b, defaultClassName: Re })
        : Vi(Re, $),
      Le = JR(a),
      L = !!Q || !h,
      Z = { closeToast: w, type: b, theme: ze },
      ae = null;
    return (
      f === !1 ||
        (_a(f)
          ? (ae = f(Z))
          : A.isValidElement(f)
          ? (ae = A.cloneElement(f, Z))
          : (ae = RR(Z))),
      Ve.createElement(
        O,
        {
          isIn: ne,
          done: ee,
          position: M,
          preventExitTransition: r,
          nodeRef: o,
          playToast: d,
        },
        Ve.createElement(
          "div",
          {
            id: D,
            tabIndex: 0,
            onClick: g,
            "data-in": ne,
            className: Ie,
            ...c,
            style: P,
            ref: o,
            ...(ne && { role: V, "aria-label": Ge }),
          },
          Le != null &&
            Ve.createElement(
              "div",
              {
                className: Vi("Toastify__toast-icon", {
                  "Toastify--animate-icon Toastify__zoom-enter": !le,
                }),
              },
              Le
            ),
          qb(p, a, !t),
          ae,
          !a.customProgressBar &&
            Ve.createElement(OR, {
              ...(B && !L ? { key: `p-${B}` } : {}),
              rtl: F,
              theme: ze,
              delay: h,
              isRunning: t,
              isIn: ne,
              closeToast: w,
              hide: E,
              type: b,
              className: I,
              controlledProgress: L,
              progress: Q || 0,
            })
        )
      )
    );
  },
  eO = (a, t = !1) => ({
    enter: `Toastify--animate Toastify__${a}-enter`,
    exit: `Toastify--animate Toastify__${a}-exit`,
    appendPosition: t,
  }),
  tO = AR(eO("bounce", !0)),
  nO = {
    position: "top-right",
    transition: tO,
    autoClose: 5e3,
    closeButton: !0,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    draggable: "touch",
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
    "aria-label": "Notifications Alt+T",
    hotKeys: (a) => a.altKey && a.code === "KeyT",
  };
function aO(a) {
  let t = { ...nO, ...a },
    r = a.stacked,
    [o, c] = A.useState(!0),
    d = A.useRef(null),
    { getToastToRender: f, isToastActive: p, count: h } = qR(t),
    { className: g, style: b, rtl: E, containerId: w, hotKeys: O } = t;
  function M(P) {
    let I = Vi("Toastify__toast-container", `Toastify__toast-container--${P}`, {
      "Toastify__toast-container--rtl": E,
    });
    return _a(g)
      ? g({ position: P, rtl: E, defaultClassName: I })
      : Vi(I, Bf(g));
  }
  function $() {
    r && (c(!0), Ue.play());
  }
  return (
    $R(() => {
      var P;
      if (r) {
        let I = d.current.querySelectorAll('[data-in="true"]'),
          B = 12,
          V = (P = t.position) == null ? void 0 : P.includes("top"),
          Q = 0,
          F = 0;
        Array.from(I)
          .reverse()
          .forEach((D, ee) => {
            let ne = D;
            ne.classList.add("Toastify__toast--stacked"),
              ee > 0 && (ne.dataset.collapsed = `${o}`),
              ne.dataset.pos || (ne.dataset.pos = V ? "top" : "bot");
            let le = Q * (o ? 0.2 : 1) + (o ? 0 : B * ee);
            ne.style.setProperty("--y", `${V ? le : le * -1}px`),
              ne.style.setProperty("--g", `${B}`),
              ne.style.setProperty("--s", `${1 - (o ? F : 0)}`),
              (Q += ne.offsetHeight),
              (F += 0.025);
          });
      }
    }, [o, h, r]),
    A.useEffect(() => {
      function P(I) {
        var B;
        let V = d.current;
        O(I) &&
          ((B = V.querySelector('[tabIndex="0"]')) == null || B.focus(),
          c(!1),
          Ue.pause()),
          I.key === "Escape" &&
            (document.activeElement === V ||
              (V != null && V.contains(document.activeElement))) &&
            (c(!0), Ue.play());
      }
      return (
        document.addEventListener("keydown", P),
        () => {
          document.removeEventListener("keydown", P);
        }
      );
    }, [O]),
    Ve.createElement(
      "section",
      {
        ref: d,
        className: "Toastify",
        id: w,
        onMouseEnter: () => {
          r && (c(!1), Ue.pause());
        },
        onMouseLeave: $,
        "aria-live": "polite",
        "aria-atomic": "false",
        "aria-relevant": "additions text",
        "aria-label": t["aria-label"],
      },
      f((P, I) => {
        let B = I.length ? { ...b } : { ...b, pointerEvents: "none" };
        return Ve.createElement(
          "div",
          {
            tabIndex: -1,
            className: M(P),
            "data-stacked": r,
            style: B,
            key: `c-${P}`,
          },
          I.map(({ content: V, props: Q }) =>
            Ve.createElement(
              WR,
              {
                ...Q,
                stacked: r,
                collapseAll: $,
                isIn: p(Q.toastId, Q.containerId),
                key: `t-${Q.key}`,
              },
              V
            )
          )
        );
      })
    )
  );
}
const Cv = v.jsxs(v.Fragment, {
    children: [
      v.jsx("li", {
        className: "text-lg text-orange-500 md:text-xl",
        children: v.jsx(ro, { to: "/", children: "Home" }),
      }),
      v.jsx("li", {
        className: "text-lg text-orange-500 md:text-xl ",
        children: v.jsx(ro, { to: "/allGroups", children: "All Groups" }),
      }),
      v.jsx("li", {
        className: "text-lg text-orange-500 md:text-xl ",
        children: v.jsx(ro, { to: "/createGroup", children: "Create Group" }),
      }),
      v.jsx("li", {
        className: "text-lg text-orange-500 md:text-xl ",
        children: v.jsx(ro, { to: "/myGroups", children: "My Groups" }),
      }),
    ],
  }),
  iO = () => {
    const { user: a, logoutUser: t } = A.useContext(fi),
      r = () => {
        t()
          .then(() => {
            Kt.fire({
              title: "Successfully Logged Out...!",
              icon: "success",
              draggable: !0,
            });
          })
          .catch((o) => {
            Ue.error("Logout failed...!");
          });
      };
    return v.jsx("div", {
      className:
        "fixed top-0 left-0 w-full z-50 bg-transparent bg-opacity-50 backdrop-blur-md",
      children: v.jsxs("div", {
        className: "navbar w-11/12 mx-auto py-3",
        children: [
          v.jsxs("div", {
            className: "navbar-start",
            children: [
              v.jsxs("div", {
                className: "dropdown",
                children: [
                  v.jsx("div", {
                    tabIndex: 0,
                    role: "button",
                    className: " mr-5 lg:hidden",
                    children: v.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "h-5 w-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: [
                        " ",
                        v.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M4 6h16M4 12h8m-8 6h16",
                        }),
                        " ",
                      ],
                    }),
                  }),
                  v.jsx("ul", {
                    tabIndex: 0,
                    className:
                      "menu menu-sm dropdown-content bg-gray-400 bg-opacity-50 backdrop-blur-md rounded-box z-1 mt-3 w-52 p-2 shadow",
                    children: Cv,
                  }),
                ],
              }),
              v.jsx(e0, {
                className: "rounded-full border mr-2 bg-orange-500",
                size: 30,
                color: "#Ffffff",
              }),
              v.jsxs("a", {
                className:
                  "text-2xl md:text-3xl lg:text-4xl specific-text font-bold",
                children: [
                  v.jsx("span", {
                    className: "text-orange-600",
                    children: "Hobby",
                  }),
                  v.jsx("span", {
                    className: "text-orange-600",
                    children: "Hub",
                  }),
                ],
              }),
            ],
          }),
          v.jsx("div", {
            className: "navbar-center hidden lg:flex",
            children: v.jsx("ul", {
              className: "menu menu-horizontal px-1",
              children: Cv,
            }),
          }),
          v.jsxs("div", {
            className: "navbar-end gap-2 md:gap-5",
            children: [
              a &&
                v.jsxs("div", {
                  className: "relative group",
                  children: [
                    v.jsx("img", {
                      className:
                        "w-6 md:w-12 h-6 md:h-12 rounded-full border border-orange-600",
                      src: a.photoURL,
                      alt: "userImg",
                    }),
                    v.jsx("div", {
                      className:
                        "absolute  left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10",
                      children: a.displayName,
                    }),
                  ],
                }),
              a
                ? v.jsx("button", {
                    onClick: r,
                    "data-aos": "zoom-in",
                    className:
                      "text-white specific-text text-2xl bg-orange-500 font-medium px-3 md:px-8 py-1 md:py-2 rounded transition-transform duration-500 hover:scale-105 cursor-pointer",
                    children: "LogOut",
                  })
                : v.jsx(ln, {
                    to: "/login",
                    "data-aos": "zoom-in",
                    className:
                      "text-white bg-orange-500 text-2xl specific-text font-medium px-3 md:px-8 py-1 md:py-2 rounded transition-transform duration-500 hover:scale-105",
                    children: "Login",
                  }),
            ],
          }),
        ],
      }),
    });
  },
  rO = () =>
    v.jsxs("div", {
      children: [
        v.jsx(iO, {}),
        v.jsx("div", { children: v.jsx(z_, {}) }),
        v.jsx(bx, {}),
        v.jsx(aO, {}),
      ],
    }),
  lO = () => {
    const a = jc();
    return v.jsx("div", {
      className: "min-h-screen bg-cover bg-center p-4 md:p-6",
      style: {
        backgroundImage: "url('https://i.ibb.co/4ZG779SZ/paingting.jpg')",
      },
      children: v.jsxs("div", {
        className: "mt-24 w-full max-w-7xl mx-auto",
        children: [
          v.jsx("h2", {
            className:
              "text-2xl md:text-4xl lg:text-5xl text-orange-500 font-bold text-center specific-text",
            children: "ALL Groups",
          }),
          v.jsx("p", {
            className:
              "text-center text-gray-500 text-sm md:text-lg lg:text-xl mb-6 lg:mb-10 mt-2 px-0 lg:px-20",
            children:
              "On this page, you will be able to explore all the groups created by different users. You can view group details and learn more about each group’s purpose and members. Please note that you cannot update or delete any groups from this section, as it is for informational purposes only.",
          }),
          v.jsx("div", {
            className: "overflow-x-auto rounded-xl shadow-2xl",
            children: a.length
              ? v.jsx("div", {
                  className: "overflow-x-auto rounded-xl shadow-md",
                  children: v.jsxs("table", {
                    className: "table w-full text-center md:text-left",
                    children: [
                      v.jsx("thead", {
                        className:
                          "bg-gradient-to-r from-orange-500 to-red-500 text-white",
                        children: v.jsxs("tr", {
                          children: [
                            v.jsx("th", {
                              className: "text-sm md:text-base lg:text-lg",
                              children: "No.",
                            }),
                            v.jsx("th", {
                              className: "text-sm md:text-base lg:text-lg",
                              children: "Group Name",
                            }),
                            v.jsx("th", {
                              className: "text-sm md:text-base lg:text-lg",
                              children: "Admin",
                            }),
                            v.jsx("th", {
                              className: "text-sm md:text-base lg:text-lg",
                              children: "Email",
                            }),
                            v.jsx("th", {
                              className: "text-sm md:text-base lg:text-lg",
                              children: "Action",
                            }),
                          ],
                        }),
                      }),
                      v.jsx("tbody", {
                        children: a.map((t, r) =>
                          v.jsxs(
                            "tr",
                            {
                              className:
                                "hover:bg-gray-100 transition-all duration-200",
                              children: [
                                v.jsx("td", {
                                  className:
                                    "text-xs md:text-sm lg:text-base font-semibold",
                                  children: r + 1,
                                }),
                                v.jsx("td", {
                                  children: v.jsx("div", {
                                    className:
                                      "flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3",
                                    children: v.jsxs("div", {
                                      children: [
                                        v.jsx("div", {
                                          className:
                                            "font-bold text-sm md:text-lg text-gray-500",
                                          children: t.groupName,
                                        }),
                                        v.jsx("div", {
                                          className:
                                            "text-xs md:text-sm text-gray-500",
                                          children: t.hobbyCategory,
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                v.jsx("td", {
                                  className: "text-xs md:text-sm lg:text-base",
                                  children: t.name,
                                }),
                                v.jsx("td", {
                                  className: "text-xs md:text-sm lg:text-base",
                                  children: t.email,
                                }),
                                v.jsx("td", {
                                  children: v.jsx(ln, {
                                    to: `/groupDetail/${t._id}`,
                                    children: v.jsx("button", {
                                      className:
                                        "cursor-pointer text-orange-500 text-xs md:text-sm lg:text-lg underline",
                                      children: "See more",
                                    }),
                                  }),
                                }),
                              ],
                            },
                            t._id
                          )
                        ),
                      }),
                    ],
                  }),
                })
              : v.jsxs("div", {
                  className: "p-10 lg:p-20 space-y-5",
                  children: [
                    v.jsx("h2", {
                      className:
                        "text-center font-bold text-2xl md:text-5xl specific-text text-red-400",
                      children: "Oops...!",
                    }),
                    v.jsx("p", {
                      className:
                        "text-center font-semibold text-lg lg:text-2xl",
                      children: "Right now no group available here, please...",
                    }),
                    v.jsx(ln, {
                      className:
                        "text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded mt-2 flex justify-center items-center font-semibold",
                      to: "/createGroup",
                      children: "Create Group",
                    }),
                  ],
                }),
          }),
        ],
      }),
    });
  },
  oO = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
  ],
  sO = () => {
    const { user: a } = A.useContext(fi),
      t = (r) => {
        r.preventDefault();
        const o = r.target,
          c = new FormData(o),
          p = { ...Object.fromEntries(c.entries()), members: [] };
        fetch("http://localhost:3000/groups", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(p),
        })
          .then((h) => h.json())
          .then((h) => {
            h.acknowledged &&
              Kt.fire({
                title: "Created Group Successfully!",
                icon: "success",
                draggable: !0,
              });
          });
      };
    return v.jsx("div", {
      className:
        "min-h-screen bg-cover bg-center flex items-center justify-center",
      style: {
        backgroundImage: "url('https://i.ibb.co/qMQF3MBw/cartoon-group.jpg')",
      },
      children: v.jsx("div", {
        className: "mt-24 w-11/12 lg:w-10/12",
        children: v.jsxs("form", {
          "data-aos": "zoom-in",
          onSubmit: t,
          className:
            "max-w-6xl space-y-6 text-secondary shadow-2xl p-5 md:p-10 lg:p-16 transition-transform duration-500 hover:scale-105 rounded-2xl",
          children: [
            v.jsx("h2", {
              className:
                "text-center mb-10 text-2xl md:text-4xl specific-text font-bold text-orange-500",
              children: "Create Group",
            }),
            v.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
              children: [
                v.jsxs("div", {
                  children: [
                    v.jsxs("label", {
                      className: "block mb-1 font-semibold",
                      htmlFor: "groupName",
                      children: [
                        "Group Name ",
                        v.jsx("span", {
                          className: "text-red-500",
                          children: "*",
                        }),
                      ],
                    }),
                    v.jsx("input", {
                      id: "groupName",
                      name: "groupName",
                      type: "text",
                      required: !0,
                      className:
                        "w-full rounded-md p-2  bg-white  focus:outline-none",
                      placeholder: "Enter group name",
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("label", {
                      className: "block mb-1 font-semibold",
                      htmlFor: "hobbyCategory",
                      children: "Hobby Category",
                    }),
                    v.jsx("select", {
                      id: "hobbyCategory",
                      name: "hobbyCategory",
                      className:
                        "w-full rounded-md p-2  bg-white  focus:outline-none",
                      children: oO.map((r) =>
                        v.jsx("option", { value: r, children: r }, r)
                      ),
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsxs("label", {
                      className: "block mb-1 font-semibold",
                      htmlFor: "meetingLocation",
                      children: [
                        "Meeting Location ",
                        v.jsx("span", {
                          className: "text-red-500",
                          children: "*",
                        }),
                      ],
                    }),
                    v.jsx("input", {
                      id: "meetingLocation",
                      name: "meetingLocation",
                      type: "text",
                      required: !0,
                      className:
                        "w-full rounded-md p-2 bg-white  focus:outline-none",
                      placeholder: "Enter meeting location",
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsxs("label", {
                      className: "block mb-1 font-semibold",
                      htmlFor: "maxMembers",
                      children: [
                        "Max Members ",
                        v.jsx("span", {
                          className: "text-red-500",
                          children: "*",
                        }),
                      ],
                    }),
                    v.jsx("input", {
                      id: "maxMembers",
                      name: "maxMembers",
                      type: "number",
                      min: "1",
                      required: !0,
                      className:
                        "w-full rounded-md p-2 bg-white focus:outline-none",
                      placeholder: "Enter max members",
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsxs("label", {
                      className: "block mb-1 font-semibold",
                      htmlFor: "startDate",
                      children: [
                        "Start Date ",
                        v.jsx("span", {
                          className: "text-red-500",
                          children: "*",
                        }),
                      ],
                    }),
                    v.jsx("input", {
                      id: "startDate",
                      name: "startDate",
                      type: "date",
                      required: !0,
                      className:
                        "w-full rounded-md p-2 bg-white focus:outline-none",
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsxs("label", {
                      className: "block mb-1 font-semibold",
                      htmlFor: "imageUrl",
                      children: [
                        "Image URL ",
                        v.jsx("span", {
                          className: "text-red-500",
                          children: "*",
                        }),
                      ],
                    }),
                    v.jsx("input", {
                      id: "imageUrl",
                      name: "imageUrl",
                      type: "url",
                      required: !0,
                      placeholder: "image URL",
                      className:
                        "w-full rounded-md p-2 bg-white focus:outline-none",
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("label", {
                      className: "block mb-1 font-semibold",
                      children: "User Name",
                    }),
                    v.jsx("input", {
                      value: a.displayName,
                      readOnly: !0,
                      name: "name",
                      type: "text",
                      className:
                        "w-full rounded-md p-2 bg-white  focus:outline-none",
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("label", {
                      className: "block mb-1 font-semibold",
                      children: "User Email",
                    }),
                    v.jsx("input", {
                      value: a.email,
                      readOnly: !0,
                      name: "email",
                      type: "email",
                      className:
                        "w-full rounded-md p-2 bg-white  focus:outline-none",
                    }),
                  ],
                }),
              ],
            }),
            v.jsxs("div", {
              children: [
                v.jsxs("label", {
                  className: "block mb-1 font-semibold",
                  htmlFor: "description",
                  children: [
                    "Description ",
                    v.jsx("span", { className: "text-red-500", children: "*" }),
                  ],
                }),
                v.jsx("textarea", {
                  id: "description",
                  name: "description",
                  required: !0,
                  rows: 4,
                  className:
                    "w-full rounded-md p-2  bg-white focus:outline-none",
                  placeholder: "Write a brief description",
                }),
              ],
            }),
            v.jsx("button", {
              type: "submit",
              "data-aos": "zoom-in",
              className:
                "w-full cursor-pointer bg-transparent border-4 border-white shadow hover:bg-orange-600 hover:text-white text-orange-600 font-semibold py-3 rounded-md text-2xl specific-text transition-transform duration-500 hover:scale-105",
              children: "Create",
            }),
          ],
        }),
      }),
    });
  },
  cO = () => {
    const a = jc(),
      {
        _id: t,
        groupName: r,
        hobbyCategory: o,
        description: c,
        meetingLocation: d,
        imageUrl: f,
        maxMembers: p,
        startDate: h,
        name: g,
        email: b,
        members: E = [],
      } = a,
      { user: w } = A.useContext(fi),
      [O, M] = A.useState(!1),
      [$, P] = A.useState(E),
      I = w && $.includes(w.email),
      B = new Date(),
      Q = new Date(h) >= B,
      F = async () => {
        M(!0);
        try {
          const ee = await (
            await fetch(`http://localhost:3000/groups/${t}/join`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: w.email }),
            })
          ).json();
          ee.success
            ? (Kt.fire({
                icon: "success",
                title: "Joined!",
                text: "Successfully joined the group!",
                timer: 2e3,
                showConfirmButton: !1,
              }),
              P((ne) => [...ne, w.email]))
            : Kt.fire({
                icon: "error",
                title: "Oops!",
                text: ee.reason || "Failed to join the group.",
              });
        } catch (D) {
          console.error(D),
            Kt.fire({
              icon: "error",
              title: "Error",
              text: "Something went wrong.",
            });
        } finally {
          M(!1);
        }
      };
    return v.jsx("div", {
      className: "min-h-screen bg-cover bg-center p-4 md:p-6",
      style: { backgroundImage: "url('https://i.ibb.co/yBXDgJkm/mugic.jpg')" },
      children: v.jsx("div", {
        className: "mt-24 w-full max-w-7xl mx-auto",
        children: v.jsxs("div", {
          className: "overflow-x-auto backdrop-blur-3xl rounded-xl shadow-md",
          children: [
            v.jsx("img", {
              className: "w-full h-full md:h-[400px] bg-cover",
              src: f,
              alt: "group",
            }),
            v.jsxs("div", {
              className: "p-10 text-secondary space-y-5",
              children: [
                v.jsxs("h2", {
                  className:
                    "text-2xl lg:text-4xl font-bold flex items-center gap-2",
                  children: [
                    v.jsx(e0, { className: "border rounded-full" }),
                    " ",
                    r,
                  ],
                }),
                v.jsxs("h5", {
                  className: "txt-lg lg:text-2xl",
                  children: [
                    v.jsx("strong", { children: "Category:" }),
                    " ",
                    o,
                  ],
                }),
                v.jsxs("p", {
                  className: "text-sm lg:text-xl",
                  children: [
                    v.jsx("strong", { children: "Meeting Location:" }),
                    " ",
                    d,
                  ],
                }),
                v.jsxs("p", {
                  className: "text-sm lg:text-xl",
                  children: [
                    v.jsx("strong", { children: "Maximum Members:" }),
                    " ",
                    p,
                  ],
                }),
                v.jsxs("p", {
                  className: "text-sm lg:text-xl",
                  children: [
                    v.jsx("strong", { children: "Start Date:" }),
                    " ",
                    h,
                  ],
                }),
                v.jsxs("p", {
                  className: "text-sm lg:text-xl",
                  children: [
                    v.jsx("strong", { children: "Created By:" }),
                    " ",
                    g,
                  ],
                }),
                v.jsxs("p", {
                  className: "text-sm lg:text-xl",
                  children: [
                    v.jsx("strong", { children: "Admin Email:" }),
                    " ",
                    b,
                  ],
                }),
                v.jsxs("p", {
                  className: "text-sm lg:text-xl",
                  children: [
                    v.jsx("strong", { children: "Description:" }),
                    " ",
                    c,
                  ],
                }),
                Q
                  ? v.jsx("button", {
                      onClick: F,
                      disabled: I || O || $.length >= Number(p),
                      className: `w-full cursor-pointer border-4 border-white shadow text-xl py-3 rounded-md specific-text transition-transform duration-500 ${
                        I || $.length >= Number(p)
                          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                          : "bg-transparent hover:bg-orange-600 hover:text-white text-orange-600"
                      }`,
                      title: I
                        ? "You have already joined"
                        : $.length >= Number(p)
                        ? "Group is full"
                        : "",
                      children: I
                        ? "Already Joined"
                        : O
                        ? "Joining..."
                        : $.length >= Number(p)
                        ? "Group Full"
                        : "Join Group",
                    })
                  : v.jsx("p", {
                      className:
                        "text-center text-red-600 font-semibold text-lg",
                      children: "This group is no longer active.",
                    }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  uO = () =>
    v.jsxs("div", {
      className:
        "relative min-h-screen bg-cover bg-center flex items-center justify-center text-center px-4",
      style: {
        backgroundImage:
          "url('https://i.ibb.co/1JGGL08S/istockphoto-483629308-612x612.jpg')",
      },
      children: [
        v.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60 z-0",
        }),
        v.jsxs("div", {
          className: "relative z-10",
          children: [
            v.jsx("h1", {
              className:
                "text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white mb-4 specific-text",
              children: "Connect Through Hobbies",
            }),
            v.jsx("p", {
              className:
                "text-white font-medium text-sm md:text-lg lg:text-xl max-w-3xl mx-auto mt-3 md:mt-4 mb-6",
              children:
                "Discover and join local hobby groups or create your own. Whether it's books, hikes, art, or more — build meaningful connections around what you love.",
            }),
            v.jsx(ln, {
              to: "/login",
              className:
                "px-5 py-2 rounded bg-orange-500 hover:bg-orange-600 text-white  font-medium text-lg md:text-xl lg:text-2xl",
              children: "Get Started",
            }),
          ],
        }),
      ],
    }),
  dO = ({ group: a }) => {
    const {
        _id: t,
        groupName: r,
        description: o,
        startDate: c,
        maxMembers: d,
        members: f = [],
        imageUrl: p,
      } = a,
      h = new Date(c);
    h.setDate(h.getDate() + 1);
    const g = h.toISOString().split("T")[0];
    return v.jsxs("div", {
      className:
        "bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between p-6",
      children: [
        p &&
          v.jsx("img", {
            src: p,
            alt: r,
            className: "w-full h-40 object-cover rounded-xl mb-4",
          }),
        v.jsxs("div", {
          children: [
            v.jsx("h3", {
              className:
                "text-lg md:text-xl lg:text-2xl font-bold text-orange-500 mb-2",
              children: r,
            }),
            v.jsx("p", {
              className: "text-gray-600 text-an md:text-lg mb-4 line-clamp-3",
              children: o,
            }),
            v.jsxs("p", {
              className: "text-sm lg:text-lg text-gray-500 mb-1",
              children: ["📅 ", c, " - ", g],
            }),
            v.jsxs("p", {
              className: "text-sm md:text-lg text-gray-500",
              children: ["👥 ", f.length, " / ", d, " members"],
            }),
          ],
        }),
        v.jsx("div", {
          className: "mt-4 text-center",
          children: v.jsx(ln, {
            to: `/groupDetail/${t}`,
            className:
              "inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm transition duration-200",
            children: "View Details",
          }),
        }),
      ],
    });
  },
  fO = () => {
    const a = jc();
    console.log(a);
    const t = new Date(),
      r = new Date(t.getFullYear(), t.getMonth(), t.getDate()),
      o = a.filter((d) => {
        const f = new Date(d.startDate);
        return console.log(f), f >= r;
      }),
      c = o.slice(0, 6);
    return (
      console.log("featured ongoing group", c),
      v.jsxs("div", {
        className: "mb-10",
        children: [
          v.jsx(uO, {}),
          v.jsxs("section", {
            className: "my-10 lg:my-20 w-11/12 lg:w-10/12 mx-auto min-h-screen",
            children: [
              v.jsx("h2", {
                className:
                  "text-2xl text-orange-500 md:text-4xl lg:text-5xl specific-text text-center font-bold",
                children: "Featured Groups",
              }),
              v.jsx("p", {
                className:
                  "text-center text-sm md:text-lg lg:text-xl mt-5 text-gray-600 max-w-7xl mx-auto",
                children:
                  "Featured Groups are handpicked ongoing hobby or interest groups from our platform, specially curated for you. Here, you’ll find active members collaborating, making new friends, and growing their skills together. These groups represent the heart and enthusiasm of our community. Join your favorite group now to learn something new and have fun!",
              }),
              o.length === 0
                ? v.jsx("div", {
                    className:
                      "flex justify-center items-center mt-10 lg:mt-20",
                    children: v.jsxs("div", {
                      className:
                        "bg-white shadow-lg rounded-xl p-6 md:p-10 lg:p-16 text-center max-w-5xl w-full",
                      children: [
                        v.jsx("h3", {
                          className:
                            "text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-3",
                          children: "No Ongoing Groups Found",
                        }),
                        v.jsx("p", {
                          className:
                            "text-gray-500 mb-5 text-xs md:text-lg lg:text-xl",
                          children:
                            "Currently, there are no active groups available. You can create a new group or explore other available groups.",
                        }),
                        v.jsx(ln, {
                          to: "/allGroups",
                          className:
                            "inline-block text-xs md:text-lg lg:text-xl bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition duration-200",
                          children: "Browse Groups",
                        }),
                      ],
                    }),
                  })
                : v.jsx("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 lg:my-20",
                    children: o.map((d) => v.jsx(dO, { group: d }, d._id)),
                  }),
            ],
          }),
          v.jsxs("section", {
            className:
              "bg-gray-100 py-12 px-4 text-center max-w-4xl mx-auto rounded-xl mb-12",
            children: [
              v.jsx("h3", {
                className: "text-2xl font-semibold mb-4",
                children: "আমাদের কমিউনিটি ইভেন্টে অংশ নিন",
              }),
              v.jsx("p", {
                className: "text-gray-700 max-w-xl mx-auto",
                children:
                  "ওয়ার্কশপ, মিটআপ ও সামাজিক অনুষ্ঠানগুলোতে অংশগ্রহণ করুন। এই অনুষ্ঠানগুলো নতুন বন্ধু তৈরির ও দক্ষতা বাড়ানোর জন্য আদর্শ।",
              }),
            ],
          }),
          v.jsxs("section", {
            className:
              "bg-white py-12 px-4 text-center max-w-4xl mx-auto rounded-xl shadow-lg mb-12",
            children: [
              v.jsx("h3", {
                className: "text-2xl font-semibold mb-4",
                children: "নিজের গ্রুপ শুরু করুন",
              }),
              v.jsx("p", {
                className: "text-gray-700 max-w-xl mx-auto",
                children:
                  "আপনার প্যাশন শেয়ার করতে চান? নিজে একটি গ্রুপ তৈরি করুন এবং অন্যদের আমন্ত্রণ জানান। আমরা আপনার কমিউনিটি পরিচালনা ও বৃদ্ধির জন্য প্রয়োজনীয় সব টুলস দিচ্ছি।",
              }),
            ],
          }),
        ],
      })
    );
  },
  so = () =>
    v.jsx("div", {
      className: "min-h-screen flex justify-center items-center",
      children: v.jsx("span", {
        className: "loading loading-spinner loading-xl text-primary",
      }),
    });
function Fb(a) {
  return si({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
        },
        child: [],
      },
    ],
  })(a);
}
function Qb(a) {
  return si({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",
        },
        child: [],
      },
    ],
  })(a);
}
function hO(a) {
  return si({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z",
        },
        child: [],
      },
    ],
  })(a);
}
function mO(a) {
  return si({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM96 224a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm288 224H64v-32l64-64 32 32 128-128 96 96z",
        },
        child: [],
      },
    ],
  })(a);
}
function pO(a) {
  return si({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",
        },
        child: [],
      },
    ],
  })(a);
}
const gO = () => {
  const { loginUser: a, googleLogin: t } = A.useContext(fi),
    r = bo(),
    o = Fn(),
    c = A.useRef(),
    d = (p) => {
      p.preventDefault();
      const h = p.target,
        g = h.email.value,
        b = h.password.value;
      a(g, b)
        .then((E) => {
          Kt.fire({
            title: "Successfully Login!",
            icon: "success",
            draggable: !0,
          }),
            r(`${o.state ? o.state : "/"}`);
        })
        .catch((E) => {
          Ue.error("Login fail" + E.code);
        });
    },
    f = () => {
      t()
        .then((p) => {
          Kt.fire({
            title: "Google Login Successfully...!",
            icon: "success",
            draggable: !0,
          }),
            r(`${o.state ? o.state : "/"}`);
        })
        .catch((p) => {
          Ue.error("Google Login fail " + p.message);
        });
    };
  return v.jsx("div", {
    className:
      "min-h-screen bg-cover bg-center flex items-center justify-center",
    style: {
      backgroundImage:
        "url('https://i.ibb.co/1JGGL08S/istockphoto-483629308-612x612.jpg')",
    },
    children: v.jsxs("div", {
      "data-aos": "zoom-in",
      className:
        "transition-transform duration-500 hover:scale-105 backdrop-blur-xs p-8 rounded-2xl w-full max-w-md text-white shadow shadow-white ",
      children: [
        v.jsx("div", {
          className: " mb-4",
          children: v.jsx("h2", {
            className: "text-2xl text-center font-bold",
            children: "Login",
          }),
        }),
        v.jsxs("form", {
          onSubmit: d,
          className: "space-y-4",
          children: [
            v.jsxs("div", {
              children: [
                v.jsx("label", { className: "block mb-1", children: "Email" }),
                v.jsxs("div", {
                  className: "relative",
                  children: [
                    v.jsx("span", {
                      className: "absolute left-3 top-3 text-white opacity-70",
                      children: v.jsx(Fb, {}),
                    }),
                    v.jsx("input", {
                      name: "email",
                      ref: c,
                      type: "email",
                      className:
                        "w-full pl-10 pr-4 py-2 rounded-md border  bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-blue-300",
                      placeholder: "Enter your email",
                      required: !0,
                    }),
                  ],
                }),
              ],
            }),
            v.jsxs("div", {
              children: [
                v.jsx("label", {
                  className: "block mb-1",
                  children: "Password",
                }),
                v.jsxs("div", {
                  className: "relative",
                  children: [
                    v.jsx("span", {
                      className: "absolute left-3 top-3 text-white opacity-70",
                      children: v.jsx(Qb, {}),
                    }),
                    v.jsx("input", {
                      name: "password",
                      type: "password",
                      className:
                        "w-full pl-10 pr-4 py-2 rounded-md border bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-blue-300",
                      placeholder: "Enter your password",
                      required: !0,
                    }),
                  ],
                }),
              ],
            }),
            v.jsxs("div", {
              className: "flex justify-between text-sm items-center",
              children: [
                v.jsxs("label", {
                  className: "flex items-center gap-2",
                  children: [
                    v.jsx("input", {
                      type: "checkbox",
                      className: "accent-blue-400",
                    }),
                    "Remember me",
                  ],
                }),
                v.jsx("a", {
                  href: "#",
                  className: "hover:underline",
                  children: "Forgot Password?",
                }),
              ],
            }),
            v.jsx("button", {
              type: "submit",
              className:
                "w-full cursor-pointer py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition",
              children: "Login",
            }),
          ],
        }),
        v.jsxs("p", {
          className: "text-center text-sm mt-4",
          children: [
            "Don’t have an account?",
            " ",
            v.jsx(ln, {
              to: "/register",
              className: "underline font-semibold",
              children: "Register",
            }),
          ],
        }),
        v.jsx("div", {
          className: "divider text-white before:bg-white after:bg-white",
          children: "OR",
        }),
        v.jsxs("button", {
          onClick: f,
          className: "btn bg-white text-black border-[#e5e5e5] w-full",
          children: [
            v.jsx("svg", {
              "aria-label": "Google logo",
              width: "16",
              height: "16",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 512 512",
              children: v.jsxs("g", {
                children: [
                  v.jsx("path", { d: "m0 0H512V512H0", fill: "#fff" }),
                  v.jsx("path", {
                    fill: "#34a853",
                    d: "M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341",
                  }),
                  v.jsx("path", {
                    fill: "#4285f4",
                    d: "m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57",
                  }),
                  v.jsx("path", {
                    fill: "#fbbc02",
                    d: "m90 341a208 200 0 010-171l63 49q-12 37 0 73",
                  }),
                  v.jsx("path", {
                    fill: "#ea4335",
                    d: "m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55",
                  }),
                ],
              }),
            }),
            "Login with Google",
          ],
        }),
      ],
    }),
  });
};
function yO(a) {
  return si({
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2",
        },
        child: [],
      },
    ],
  })(a);
}
const vO = () => {
    const [a, t] = A.useState([]),
      { user: r } = A.useContext(fi);
    A.useEffect(() => {
      fetch(
        `http://localhost:3000/groups?emailParams=${
          r == null ? void 0 : r.email
        }`
      )
        .then((c) => c.json())
        .then((c) => t(c));
    }, [r == null ? void 0 : r.email]);
    const o = (c) => {
      Kt.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((d) => {
        d.isConfirmed &&
          fetch(`http://localhost:3000/groups/${c}`, { method: "DELETE" })
            .then((f) => f.json())
            .then((f) => {
              if (f.deletedCount) {
                Kt.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                const p = a.filter((h) => h._id !== c);
                t(p);
              }
            });
      });
    };
    return v.jsx("div", {
      className: "min-h-screen bg-cover bg-center p-4 md:p-6",
      style: {
        backgroundImage: "url('https://i.ibb.co/4ZG779SZ/paingting.jpg')",
      },
      children: v.jsxs("div", {
        className: "mt-24 w-full max-w-7xl mx-auto",
        children: [
          v.jsx("h2", {
            className: `text-2xl md:text-4xl lg:text-5xl text-orange-500 font-bold text-center specific-text\r
        `,
            children: "Your Created Group",
          }),
          v.jsx("p", {
            className:
              "text-center text-gray-500 text-sm md:text-lg lg:text-xl mb-6 lg:mb-10 mt-2 px-0 lg:px-20",
            children:
              "On this page you will be able to see all your created groups and take action. You will be able to see the details of your group, if you need to update the group then you can update it by clicking on the update button and if you need to delete the group then you can delete it by clicking on the delete button",
          }),
          v.jsx("div", {
            className: "overflow-x-auto rounded-xl shadow-2xl",
            children: a.length
              ? v.jsxs("table", {
                  className: "table w-full text-center md:text-left",
                  children: [
                    v.jsx("thead", {
                      className:
                        "bg-gradient-to-r from-orange-500 to-red-500 text-white",
                      children: v.jsxs("tr", {
                        children: [
                          v.jsx("th", {
                            className: "text-sm md:text-base lg:text-lg",
                            children: "No.",
                          }),
                          v.jsx("th", {
                            className: "text-sm md:text-base lg:text-lg",
                            children: "Group Name",
                          }),
                          v.jsx("th", {
                            className: "text-sm md:text-base lg:text-lg",
                            children: "Admin",
                          }),
                          v.jsx("th", {
                            className: "text-sm md:text-base lg:text-lg",
                            children: "Email",
                          }),
                          v.jsx("th", {
                            className: "text-sm md:text-base lg:text-lg",
                            children: "Action",
                          }),
                        ],
                      }),
                    }),
                    v.jsx("tbody", {
                      children: a.map((c, d) =>
                        v.jsxs(
                          "tr",
                          {
                            className:
                              "hover:bg-gray-100 transition-all duration-200",
                            children: [
                              v.jsx("td", {
                                className:
                                  "text-xs md:text-sm lg:text-base font-semibold",
                                children: d + 1,
                              }),
                              v.jsx("td", {
                                children: v.jsx("div", {
                                  className:
                                    "flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3",
                                  children: v.jsxs("div", {
                                    children: [
                                      v.jsx("div", {
                                        className:
                                          "font-bold text-sm md:text-lg text-gray-500",
                                        children: c.groupName,
                                      }),
                                      v.jsx("div", {
                                        className:
                                          "text-xs md:text-sm text-gray-500",
                                        children: c.hobbyCategory,
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              v.jsx("td", {
                                className: "text-xs md:text-sm lg:text-base",
                                children: c.name,
                              }),
                              v.jsx("td", {
                                className: "text-xs md:text-sm lg:text-base",
                                children: c.email,
                              }),
                              v.jsx("td", {
                                children: v.jsxs("div", {
                                  className: "flex gap-4",
                                  children: [
                                    v.jsx(ln, {
                                      to: `/groupDetail/${c._id}`,
                                      children: v.jsx("button", {
                                        className:
                                          "cursor-pointer rounded bg-transparent shadow shadow-gray-300 p-[10px]",
                                        children: v.jsx(yO, {
                                          size: 20,
                                          color: " #17a2b8",
                                        }),
                                      }),
                                    }),
                                    v.jsx(ln, {
                                      to: `/updateGroup/${c._id}`,
                                      children: v.jsx("button", {
                                        className:
                                          "cursor-pointer rounded bg-transparent shadow shadow-gray-300 p-[10px]",
                                        children: v.jsx(hO, {
                                          size: 20,
                                          color: "#b182e3",
                                        }),
                                      }),
                                    }),
                                    v.jsx("button", {
                                      onClick: () => o(c._id),
                                      className:
                                        "cursor-pointer rounded bg-transparent shadow shadow-gray-300 p-[10px]",
                                      children: v.jsx(Ax, {
                                        size: 20,
                                        color: "#FF0000",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          },
                          c._id
                        )
                      ),
                    }),
                  ],
                })
              : v.jsxs("div", {
                  className: "p-10 lg:p-20 space-y-5",
                  children: [
                    v.jsx("h2", {
                      className:
                        "text-center font-bold text-2xl md:text-5xl specific-text text-red-400",
                      children: "Oops...!",
                    }),
                    v.jsx("p", {
                      className:
                        "text-center font-semibold text-lg lg:text-2xl",
                      children:
                        "Right now your no group available here, please...",
                    }),
                    v.jsx(ln, {
                      className:
                        "text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded mt-2 flex justify-center items-center font-semibold",
                      to: "/createGroup",
                      children: "Create Group",
                    }),
                  ],
                }),
          }),
        ],
      }),
    });
  },
  bO = () => {
    const { createUser: a, updateUser: t, setUser: r } = A.useContext(fi),
      o = bo(),
      c = (d) => {
        d.preventDefault();
        const f = d.target,
          p = f.name.value,
          h = f.photo.value,
          g = f.email.value,
          b = f.password.value;
        if (!/[A-Z]/.test(b)) {
          Ue.error("Password must contain at least one uppercase letter.");
          return;
        }
        if (!/[a-z]/.test(b)) {
          Ue.error("Password must contain at least one lowercase letter.");
          return;
        }
        if (b.length < 6) {
          Ue.error("Password must be at least 6 characters long.");
          return;
        }
        a(g, b)
          .then((E) => {
            const w = E.user;
            t({ displayName: p, photoURL: h })
              .then(() => {
                r({ ...w, displayName: p, photoURL: h }),
                  Kt.fire({
                    title: "Register Successfully...!",
                    icon: "success",
                    draggable: !0,
                  }),
                  o("/");
              })
              .catch((O) => {
                console.log(O), r(w);
              });
          })
          .catch((E) => {
            const w = E.message;
            Ue.error("Register fail" + w);
          });
      };
    return v.jsx("div", {
      className:
        "min-h-screen bg-cover bg-center flex items-center justify-center",
      style: {
        backgroundImage: "url('https://i.ibb.co/Y495bg1M/img-122.jpg')",
      },
      children: v.jsxs("div", {
        "data-aos": "zoom-in",
        className:
          "transition-transform duration-500 hover:scale-105 backdrop-blur-xs p-8 rounded-2xl w-full max-w-md shadow shadow-white text-white",
        children: [
          v.jsx("div", {
            className: "mb-4",
            children: v.jsx("h2", {
              className: "text-2xl text-center font-bold",
              children: "Register",
            }),
          }),
          v.jsxs("form", {
            onSubmit: c,
            className: "space-y-4",
            children: [
              v.jsxs("div", {
                children: [
                  v.jsx("label", { className: "block mb-1", children: "Name" }),
                  v.jsxs("div", {
                    className: "relative",
                    children: [
                      v.jsx("span", {
                        className:
                          "absolute left-3 top-2.5 text-white opacity-70",
                        children: v.jsx(pO, {}),
                      }),
                      v.jsx("input", {
                        name: "name",
                        type: "text",
                        className:
                          "w-full pl-10 pr-4 py-2 rounded-md border  bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-blue-300",
                        placeholder: "Enter your name",
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs("div", {
                children: [
                  v.jsx("label", {
                    className: "block mb-1",
                    children: "Photo",
                  }),
                  v.jsxs("div", {
                    className: "relative",
                    children: [
                      v.jsx("span", {
                        className:
                          "absolute left-3 top-3.5 text-white opacity-70",
                        children: v.jsx(mO, {}),
                      }),
                      v.jsx("input", {
                        name: "photo",
                        type: "text",
                        className:
                          "w-full pl-10 pr-4 py-2 rounded-md border  bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-blue-300",
                        placeholder: "Enter your photoURL",
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs("div", {
                children: [
                  v.jsx("label", {
                    className: "block mb-1",
                    children: "Email",
                  }),
                  v.jsxs("div", {
                    className: "relative",
                    children: [
                      v.jsx("span", {
                        className:
                          "absolute left-3 top-3 text-white opacity-70",
                        children: v.jsx(Fb, {}),
                      }),
                      v.jsx("input", {
                        name: "email",
                        type: "email",
                        className:
                          "w-full pl-10 pr-4 py-2 rounded-md border  bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-blue-300",
                        placeholder: "Enter your email",
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs("div", {
                children: [
                  v.jsx("label", {
                    className: "block mb-1",
                    children: "Password",
                  }),
                  v.jsxs("div", {
                    className: "relative",
                    children: [
                      v.jsx("span", {
                        className:
                          "absolute left-3 top-3 text-white opacity-70",
                        children: v.jsx(Qb, {}),
                      }),
                      v.jsx("input", {
                        name: "password",
                        type: "password",
                        className:
                          "w-full pl-10 pr-4 py-2 rounded-md border bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-blue-300",
                        placeholder: "Enter your password",
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              v.jsx("button", {
                type: "submit",
                className:
                  "w-full cursor-pointer py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition",
                children: "Register",
              }),
            ],
          }),
          v.jsxs("p", {
            className: "text-center text-sm mt-4",
            children: [
              "Already have an account?",
              " ",
              v.jsx(ln, {
                to: "/login",
                className: "underline font-semibold",
                children: "Login",
              }),
            ],
          }),
        ],
      }),
    });
  },
  wO = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
  ],
  _O = () => {
    const a = bo(),
      {
        groupName: t,
        hobbyCategory: r,
        description: o,
        meetingLocation: c,
        maxMembers: d,
        startDate: f,
        imageUrl: p,
        _id: h,
        name: g,
        email: b,
      } = jc(),
      E = (w) => {
        w.preventDefault();
        const O = w.target,
          M = new FormData(O),
          $ = Object.fromEntries(M.entries());
        fetch(`http://localhost:3000/groups/${h}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify($),
        })
          .then((P) => P.json())
          .then((P) => {
            P.modifiedCount &&
              (console.log("data after db", P),
              Kt.fire({
                title: "Coffee Update Successfully!",
                icon: "success",
                draggable: !0,
              }),
              a("/"));
          });
      };
    return v.jsx("div", {
      className:
        "min-h-screen bg-cover bg-center flex items-center justify-center",
      style: {
        backgroundImage: "url('https://i.ibb.co/qMQF3MBw/cartoon-group.jpg')",
      },
      children: v.jsx("div", {
        className: "mt-24 w-11/12 lg:w-10/12",
        children: v.jsxs("form", {
          "data-aos": "zoom-in",
          onSubmit: E,
          className:
            "max-w-6xl space-y-6 text-secondary shadow-2xl p-5 md:p-10 lg:p-16 rounded-2xl transition-transform duration-500 hover:scale-105",
          children: [
            v.jsx("h2", {
              className:
                "text-center mb-10 text-2xl md:text-4xl specific-text font-bold text-orange-500",
              children: "Update Group",
            }),
            v.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
              children: [
                v.jsxs("div", {
                  children: [
                    v.jsx("label", {
                      className: "font-semibold mb-1",
                      children: "Group Name",
                    }),
                    v.jsx("input", {
                      id: "groupName",
                      name: "groupName",
                      type: "text",
                      defaultValue: t,
                      className:
                        "w-full rounded-md p-2  bg-white  focus:outline-none",
                      placeholder: "Enter group name",
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("label", {
                      className: "mb-1 font-semibold",
                      children: "Hobby Category",
                    }),
                    v.jsx("select", {
                      id: "hobbyCategory",
                      name: "hobbyCategory",
                      defaultValue: r,
                      className:
                        "w-full rounded-md p-2  bg-white  focus:outline-none",
                      children: wO.map((w) =>
                        v.jsx("option", { value: w, children: w }, w)
                      ),
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("label", {
                      className: "mb-1 font-semibold",
                      children: "Meeting Location",
                    }),
                    v.jsx("input", {
                      id: "meetingLocation",
                      name: "meetingLocation",
                      type: "text",
                      defaultValue: c,
                      className:
                        "w-full rounded-md p-2  bg-white  focus:outline-none",
                      placeholder: "Enter meeting location",
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("label", {
                      className: "mb-1 font-semibold",
                      children: "Max Members",
                    }),
                    v.jsx("input", {
                      id: "maxMembers",
                      name: "maxMembers",
                      type: "number",
                      min: "1",
                      defaultValue: d,
                      className:
                        "w-full rounded-md p-2  bg-white  focus:outline-none",
                      placeholder: "Enter max members",
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("label", {
                      className: "mb-1 font-semibold",
                      children: "Start Date",
                    }),
                    v.jsx("input", {
                      id: "startDate",
                      name: "startDate",
                      type: "date",
                      defaultValue: f,
                      className:
                        "w-full rounded-md p-2  bg-white  focus:outline-none",
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("label", {
                      className: " mb-1 font-semibold",
                      children: "Image URL",
                    }),
                    v.jsx("input", {
                      defaultValue: p,
                      id: "imageUrl",
                      name: "imageUrl",
                      type: "url",
                      placeholder: "image URL",
                      className:
                        "w-full rounded-md p-2  bg-white  focus:outline-none",
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("label", {
                      className: "block mb-1 font-semibold",
                      children: "User Name",
                    }),
                    v.jsx("input", {
                      value: g,
                      readOnly: !0,
                      name: "name",
                      type: "text",
                      className:
                        "w-full rounded-md p-2  bg-white  focus:outline-none",
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("label", {
                      className: "block mb-1 font-semibold",
                      children: "User Email",
                    }),
                    v.jsx("input", {
                      value: b,
                      readOnly: !0,
                      name: "email",
                      type: "email",
                      className:
                        "w-full rounded-md p-2  bg-white  focus:outline-none",
                    }),
                  ],
                }),
              ],
            }),
            v.jsxs("div", {
              children: [
                v.jsx("label", {
                  className: "mb-1 font-semibold",
                  children: "Description",
                }),
                v.jsx("textarea", {
                  id: "description",
                  name: "description",
                  defaultValue: o,
                  rows: 4,
                  className:
                    "w-full rounded-md p-2  bg-white  focus:outline-none",
                  placeholder: "Write a brief description",
                }),
              ],
            }),
            v.jsx("button", {
              "data-aos": "zoom-in",
              type: "submit",
              className:
                "w-full cursor-pointer bg-transparent border-4 border-white shadow hover:bg-orange-600 hover:text-white text-orange-600 font-semibold py-3 rounded-md text-2xl specific-text transition-transform duration-500 hover:scale-105",
              children: "Update",
            }),
          ],
        }),
      }),
    });
  },
  tc = ({ children: a }) => {
    const { user: t, loader: r } = A.useContext(fi),
      o = Fn();
    return r
      ? v.jsx(so, {})
      : t && t != null && t.email
      ? a
      : v.jsx(U_, { state: o.pathname, to: "/login" });
  },
  xO = sx([
    {
      path: "/",
      Component: rO,
      children: [
        {
          index: !0,
          loader: () => fetch("http://localhost:3000/groups"),
          Component: fO,
          hydrateFallbackElement: v.jsx(so, {}),
        },
        {
          path: "allGroups",
          loader: () => fetch("http://localhost:3000/groups"),
          Component: lO,
          hydrateFallbackElement: v.jsx(so, {}),
        },
        {
          path: "createGroup",
          element: v.jsx(tc, { children: v.jsx(sO, {}) }),
        },
        { path: "register", Component: bO },
        { path: "login", Component: gO },
        {
          path: "groupDetail/:id",
          loader: ({ params: a }) =>
            fetch(`http://localhost:3000/groups/${a.id}`),
          element: v.jsx(tc, { children: v.jsx(cO, {}) }),
          hydrateFallbackElement: v.jsx(so, {}),
        },
        { path: "myGroups", element: v.jsx(tc, { children: v.jsx(vO, {}) }) },
        {
          path: "updateGroup/:id",
          loader: ({ params: a }) =>
            fetch(`http://localhost:3000/groups/${a.id}`),
          element: v.jsx(tc, { children: v.jsx(_O, {}) }),
          hydrateFallbackElement: v.jsx(so, {}),
        },
      ],
    },
  ]);
f1.createRoot(document.getElementById("root")).render(
  v.jsx(A.StrictMode, {
    children: v.jsx(kC, { children: v.jsx(k_, { router: xO }) }),
  })
);
