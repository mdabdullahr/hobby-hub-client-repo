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
var ef = { exports: {} },
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
  return iy || ((iy = 1), (ef.exports = a1())), ef.exports;
}
var v = i1(),
  tf = { exports: {} },
  xe = {};
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
  if (ry) return xe;
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
    T = Symbol.iterator;
  function w(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (T && E[T]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
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
    K = {};
  function P(E, $, te) {
    (this.props = E),
      (this.context = $),
      (this.refs = K),
      (this.updater = te || O);
  }
  (P.prototype.isReactComponent = {}),
    (P.prototype.setState = function (E, $) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, E, $, "setState");
    }),
    (P.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    });
  function I() {}
  I.prototype = P.prototype;
  function B(E, $, te) {
    (this.props = E),
      (this.context = $),
      (this.refs = K),
      (this.updater = te || O);
  }
  var q = (B.prototype = new I());
  (q.constructor = B), M(q, P.prototype), (q.isPureReactComponent = !0);
  var F = Array.isArray,
    Q = { H: null, A: null, T: null, S: null, V: null },
    D = Object.prototype.hasOwnProperty;
  function ee(E, $, te, W, se, Oe) {
    return (
      (te = Oe.ref),
      {
        $$typeof: a,
        type: E,
        key: $,
        ref: te !== void 0 ? te : null,
        props: Oe,
      }
    );
  }
  function ne(E, $) {
    return ee(E.type, $, void 0, void 0, void 0, E.props);
  }
  function le(E) {
    return typeof E == "object" && E !== null && E.$$typeof === a;
  }
  function Me(E) {
    var $ = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (te) {
        return $[te];
      })
    );
  }
  var ze = /\/+/g;
  function Ge(E, $) {
    return typeof E == "object" && E !== null && E.key != null
      ? Me("" + E.key)
      : $.toString(36);
  }
  function Re() {}
  function Ie(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (
          (typeof E.status == "string"
            ? E.then(Re, Re)
            : ((E.status = "pending"),
              E.then(
                function ($) {
                  E.status === "pending" &&
                    ((E.status = "fulfilled"), (E.value = $));
                },
                function ($) {
                  E.status === "pending" &&
                    ((E.status = "rejected"), (E.reason = $));
                }
              )),
          E.status)
        ) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function Le(E, $, te, W, se) {
    var Oe = typeof E;
    (Oe === "undefined" || Oe === "boolean") && (E = null);
    var he = !1;
    if (E === null) he = !0;
    else
      switch (Oe) {
        case "bigint":
        case "string":
        case "number":
          he = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case a:
            case t:
              he = !0;
              break;
            case b:
              return (he = E._init), Le(he(E._payload), $, te, W, se);
          }
      }
    if (he)
      return (
        (se = se(E)),
        (he = W === "" ? "." + Ge(E, 0) : W),
        F(se)
          ? ((te = ""),
            he != null && (te = he.replace(ze, "$&/") + "/"),
            Le(se, $, te, "", function (jn) {
              return jn;
            }))
          : se != null &&
            (le(se) &&
              (se = ne(
                se,
                te +
                  (se.key == null || (E && E.key === se.key)
                    ? ""
                    : ("" + se.key).replace(ze, "$&/") + "/") +
                  he
              )),
            $.push(se)),
        1
      );
    he = 0;
    var kt = W === "" ? "." : W + ":";
    if (F(E))
      for (var et = 0; et < E.length; et++)
        (W = E[et]), (Oe = kt + Ge(W, et)), (he += Le(W, $, te, Oe, se));
    else if (((et = w(E)), typeof et == "function"))
      for (E = et.call(E), et = 0; !(W = E.next()).done; )
        (W = W.value), (Oe = kt + Ge(W, et++)), (he += Le(W, $, te, Oe, se));
    else if (Oe === "object") {
      if (typeof E.then == "function") return Le(Ie(E), $, te, W, se);
      throw (
        (($ = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            ($ === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : $) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return he;
  }
  function L(E, $, te) {
    if (E == null) return E;
    var W = [],
      se = 0;
    return (
      Le(E, W, "", "", function (Oe) {
        return $.call(te, Oe, se++);
      }),
      W
    );
  }
  function Z(E) {
    if (E._status === -1) {
      var $ = E._result;
      ($ = $()),
        $.then(
          function (te) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = te));
          },
          function (te) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = te));
          }
        ),
        E._status === -1 && ((E._status = 0), (E._result = $));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var ae =
    typeof reportError == "function"
      ? reportError
      : function (E) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var $ = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof E == "object" &&
                E !== null &&
                typeof E.message == "string"
                  ? String(E.message)
                  : String(E),
              error: E,
            });
            if (!window.dispatchEvent($)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", E);
            return;
          }
          console.error(E);
        };
  function Ee() {}
  return (
    (xe.Children = {
      map: L,
      forEach: function (E, $, te) {
        L(
          E,
          function () {
            $.apply(this, arguments);
          },
          te
        );
      },
      count: function (E) {
        var $ = 0;
        return (
          L(E, function () {
            $++;
          }),
          $
        );
      },
      toArray: function (E) {
        return (
          L(E, function ($) {
            return $;
          }) || []
        );
      },
      only: function (E) {
        if (!le(E))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return E;
      },
    }),
    (xe.Component = P),
    (xe.Fragment = r),
    (xe.Profiler = c),
    (xe.PureComponent = B),
    (xe.StrictMode = o),
    (xe.Suspense = h),
    (xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q),
    (xe.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return Q.H.useMemoCache(E);
      },
    }),
    (xe.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (xe.cloneElement = function (E, $, te) {
      if (E == null)
        throw Error(
          "The argument must be a React element, but you passed " + E + "."
        );
      var W = M({}, E.props),
        se = E.key,
        Oe = void 0;
      if ($ != null)
        for (he in ($.ref !== void 0 && (Oe = void 0),
        $.key !== void 0 && (se = "" + $.key),
        $))
          !D.call($, he) ||
            he === "key" ||
            he === "__self" ||
            he === "__source" ||
            (he === "ref" && $.ref === void 0) ||
            (W[he] = $[he]);
      var he = arguments.length - 2;
      if (he === 1) W.children = te;
      else if (1 < he) {
        for (var kt = Array(he), et = 0; et < he; et++)
          kt[et] = arguments[et + 2];
        W.children = kt;
      }
      return ee(E.type, se, void 0, void 0, Oe, W);
    }),
    (xe.createContext = function (E) {
      return (
        (E = {
          $$typeof: f,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: d, _context: E }),
        E
      );
    }),
    (xe.createElement = function (E, $, te) {
      var W,
        se = {},
        Oe = null;
      if ($ != null)
        for (W in ($.key !== void 0 && (Oe = "" + $.key), $))
          D.call($, W) &&
            W !== "key" &&
            W !== "__self" &&
            W !== "__source" &&
            (se[W] = $[W]);
      var he = arguments.length - 2;
      if (he === 1) se.children = te;
      else if (1 < he) {
        for (var kt = Array(he), et = 0; et < he; et++)
          kt[et] = arguments[et + 2];
        se.children = kt;
      }
      if (E && E.defaultProps)
        for (W in ((he = E.defaultProps), he))
          se[W] === void 0 && (se[W] = he[W]);
      return ee(E, Oe, void 0, void 0, null, se);
    }),
    (xe.createRef = function () {
      return { current: null };
    }),
    (xe.forwardRef = function (E) {
      return { $$typeof: p, render: E };
    }),
    (xe.isValidElement = le),
    (xe.lazy = function (E) {
      return { $$typeof: b, _payload: { _status: -1, _result: E }, _init: Z };
    }),
    (xe.memo = function (E, $) {
      return { $$typeof: g, type: E, compare: $ === void 0 ? null : $ };
    }),
    (xe.startTransition = function (E) {
      var $ = Q.T,
        te = {};
      Q.T = te;
      try {
        var W = E(),
          se = Q.S;
        se !== null && se(te, W),
          typeof W == "object" &&
            W !== null &&
            typeof W.then == "function" &&
            W.then(Ee, ae);
      } catch (Oe) {
        ae(Oe);
      } finally {
        Q.T = $;
      }
    }),
    (xe.unstable_useCacheRefresh = function () {
      return Q.H.useCacheRefresh();
    }),
    (xe.use = function (E) {
      return Q.H.use(E);
    }),
    (xe.useActionState = function (E, $, te) {
      return Q.H.useActionState(E, $, te);
    }),
    (xe.useCallback = function (E, $) {
      return Q.H.useCallback(E, $);
    }),
    (xe.useContext = function (E) {
      return Q.H.useContext(E);
    }),
    (xe.useDebugValue = function () {}),
    (xe.useDeferredValue = function (E, $) {
      return Q.H.useDeferredValue(E, $);
    }),
    (xe.useEffect = function (E, $, te) {
      var W = Q.H;
      if (typeof te == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return W.useEffect(E, $);
    }),
    (xe.useId = function () {
      return Q.H.useId();
    }),
    (xe.useImperativeHandle = function (E, $, te) {
      return Q.H.useImperativeHandle(E, $, te);
    }),
    (xe.useInsertionEffect = function (E, $) {
      return Q.H.useInsertionEffect(E, $);
    }),
    (xe.useLayoutEffect = function (E, $) {
      return Q.H.useLayoutEffect(E, $);
    }),
    (xe.useMemo = function (E, $) {
      return Q.H.useMemo(E, $);
    }),
    (xe.useOptimistic = function (E, $) {
      return Q.H.useOptimistic(E, $);
    }),
    (xe.useReducer = function (E, $, te) {
      return Q.H.useReducer(E, $, te);
    }),
    (xe.useRef = function (E) {
      return Q.H.useRef(E);
    }),
    (xe.useState = function (E) {
      return Q.H.useState(E);
    }),
    (xe.useSyncExternalStore = function (E, $, te) {
      return Q.H.useSyncExternalStore(E, $, te);
    }),
    (xe.useTransition = function () {
      return Q.H.useTransition();
    }),
    (xe.version = "19.1.0"),
    xe
  );
}
var ly;
function Vf() {
  return ly || ((ly = 1), (tf.exports = r1())), tf.exports;
}
var R = Vf();
const Ve = n1(R);
var nf = { exports: {} },
  Jl = {},
  af = { exports: {} },
  rf = {};
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
            var Ee = (ae - 1) >>> 1,
              E = L[Ee];
            if (0 < c(E, Z)) (L[Ee] = Z), (L[ae] = E), (ae = Ee);
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
            e: for (var Ee = 0, E = L.length, $ = E >>> 1; Ee < $; ) {
              var te = 2 * (Ee + 1) - 1,
                W = L[te],
                se = te + 1,
                Oe = L[se];
              if (0 > c(W, ae))
                se < E && 0 > c(Oe, W)
                  ? ((L[Ee] = Oe), (L[se] = ae), (Ee = se))
                  : ((L[Ee] = W), (L[te] = ae), (Ee = te));
              else if (se < E && 0 > c(Oe, ae))
                (L[Ee] = Oe), (L[se] = ae), (Ee = se);
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
          T = null,
          w = 3,
          O = !1,
          M = !1,
          K = !1,
          P = !1,
          I = typeof setTimeout == "function" ? setTimeout : null,
          B = typeof clearTimeout == "function" ? clearTimeout : null,
          q = typeof setImmediate < "u" ? setImmediate : null;
        function F(L) {
          for (var Z = r(g); Z !== null; ) {
            if (Z.callback === null) o(g);
            else if (Z.startTime <= L)
              o(g), (Z.sortIndex = Z.expirationTime), t(h, Z);
            else break;
            Z = r(g);
          }
        }
        function Q(L) {
          if (((K = !1), F(L), !M))
            if (r(h) !== null) (M = !0), D || ((D = !0), Ge());
            else {
              var Z = r(g);
              Z !== null && Le(Q, Z.startTime - L);
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
                (M = !1), K && ((K = !1), B(ee), (ee = -1)), (O = !0);
                var ae = w;
                try {
                  t: {
                    for (
                      F(L), T = r(h);
                      T !== null && !(T.expirationTime > L && Me());

                    ) {
                      var Ee = T.callback;
                      if (typeof Ee == "function") {
                        (T.callback = null), (w = T.priorityLevel);
                        var E = Ee(T.expirationTime <= L);
                        if (((L = a.unstable_now()), typeof E == "function")) {
                          (T.callback = E), F(L), (Z = !0);
                          break t;
                        }
                        T === r(h) && o(h), F(L);
                      } else o(h);
                      T = r(h);
                    }
                    if (T !== null) Z = !0;
                    else {
                      var $ = r(g);
                      $ !== null && Le(Q, $.startTime - L), (Z = !1);
                    }
                  }
                  break e;
                } finally {
                  (T = null), (w = ae), (O = !1);
                }
                Z = void 0;
              }
            } finally {
              Z ? Ge() : (D = !1);
            }
          }
        }
        var Ge;
        if (typeof q == "function")
          Ge = function () {
            q(ze);
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
            var Ee = a.unstable_now();
            switch (
              (typeof ae == "object" && ae !== null
                ? ((ae = ae.delay),
                  (ae = typeof ae == "number" && 0 < ae ? Ee + ae : Ee))
                : (ae = Ee),
              L)
            ) {
              case 1:
                var E = -1;
                break;
              case 2:
                E = 250;
                break;
              case 5:
                E = 1073741823;
                break;
              case 4:
                E = 1e4;
                break;
              default:
                E = 5e3;
            }
            return (
              (E = ae + E),
              (L = {
                id: b++,
                callback: Z,
                priorityLevel: L,
                startTime: ae,
                expirationTime: E,
                sortIndex: -1,
              }),
              ae > Ee
                ? ((L.sortIndex = ae),
                  t(g, L),
                  r(h) === null &&
                    L === r(g) &&
                    (K ? (B(ee), (ee = -1)) : (K = !0), Le(Q, ae - Ee)))
                : ((L.sortIndex = E),
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
      })(rf)),
    rf
  );
}
var sy;
function o1() {
  return sy || ((sy = 1), (af.exports = l1())), af.exports;
}
var lf = { exports: {} },
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
  var a = Vf();
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
    var T =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: T == null ? null : "" + T,
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
          T = p(b, g.crossOrigin),
          w = typeof g.integrity == "string" ? g.integrity : void 0,
          O = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        b === "style"
          ? o.d.S(h, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: T,
              integrity: w,
              fetchPriority: O,
            })
          : b === "script" &&
            o.d.X(h, {
              crossOrigin: T,
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
          T = p(b, g.crossOrigin);
        o.d.L(h, b, {
          crossOrigin: T,
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
  if (uy) return lf.exports;
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
  return a(), (lf.exports = s1()), lf.exports;
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
    t = Vf(),
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
    T = Symbol.for("react.element"),
    w = Symbol.for("react.transitional.element"),
    O = Symbol.for("react.portal"),
    M = Symbol.for("react.fragment"),
    K = Symbol.for("react.strict_mode"),
    P = Symbol.for("react.profiler"),
    I = Symbol.for("react.provider"),
    B = Symbol.for("react.consumer"),
    q = Symbol.for("react.context"),
    F = Symbol.for("react.forward_ref"),
    Q = Symbol.for("react.suspense"),
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
      case K:
        return "StrictMode";
      case Q:
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
        case q:
          return (e.displayName || "Context") + ".Provider";
        case B:
          return (e._context.displayName || "Context") + ".Consumer";
        case F:
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
    Ee = [],
    E = -1;
  function $(e) {
    return { current: e };
  }
  function te(e) {
    0 > E || ((e.current = Ee[E]), (Ee[E] = null), E--);
  }
  function W(e, n) {
    E++, (Ee[E] = e.current), (e.current = n);
  }
  var se = $(null),
    Oe = $(null),
    he = $(null),
    kt = $(null);
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
  function jn() {
    te(se), te(Oe), te(he);
  }
  function vt(e) {
    e.memoizedState !== null && W(kt, e);
    var n = se.current,
      i = Mg(n, e.type);
    n !== i && (W(Oe, e), W(se, i));
  }
  function xn(e) {
    Oe.current === e && (te(se), te(Oe)),
      kt.current === e && (te(kt), (Yl._currentValue = ae));
  }
  var Fi = Object.prototype.hasOwnProperty,
    Wr = a.unstable_scheduleCallback,
    Tn = a.unstable_cancelCallback,
    Xc = a.unstable_shouldYield,
    Kc = a.unstable_requestPaint,
    Kt = a.unstable_now,
    Qc = a.unstable_getCurrentPriorityLevel,
    Uo = a.unstable_ImmediatePriority,
    jo = a.unstable_UserBlockingPriority,
    Zi = a.unstable_NormalPriority,
    Zn = a.unstable_LowPriority,
    xa = a.unstable_IdlePriority,
    zo = a.log,
    el = a.unstable_setDisableYieldValue,
    Ht = null,
    lt = null;
  function Sn(e) {
    if (
      (typeof zo == "function" && el(e),
      lt && typeof lt.setStrictMode == "function")
    )
      try {
        lt.setStrictMode(Ht, e);
      } catch {}
  }
  var St = Math.clz32 ? Math.clz32 : Io,
    Fc = Math.log,
    zn = Math.LN2;
  function Io(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Fc(e) / zn) | 0)) | 0;
  }
  var fi = 256,
    hi = 4194304;
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
  function mi(e, n, i) {
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
  function In(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function Bo(e, n) {
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
    var e = fi;
    return (fi <<= 1), (fi & 4194048) === 0 && (fi = 256), e;
  }
  function Ho() {
    var e = hi;
    return (hi <<= 1), (hi & 62914560) === 0 && (hi = 4194304), e;
  }
  function Wi(e) {
    for (var n = [], i = 0; 31 > i; i++) n.push(e);
    return n;
  }
  function pi(e, n) {
    (e.pendingLanes |= n),
      n !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Po(e, n, i, l, s, u) {
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
      var V = 31 - St(i),
        Y = 1 << V;
      (y[V] = 0), (_[V] = -1);
      var U = k[V];
      if (U !== null)
        for (k[V] = null, V = 0; V < U.length; V++) {
          var j = U[V];
          j !== null && (j.lane &= -536870913);
        }
      i &= ~Y;
    }
    l !== 0 && gi(e, l, 0),
      u !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(m & ~n));
  }
  function gi(e, n, i) {
    (e.pendingLanes |= n), (e.suspendedLanes &= ~n);
    var l = 31 - St(n);
    (e.entangledLanes |= n),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (i & 4194090));
  }
  function yi(e, n) {
    var i = (e.entangledLanes |= n);
    for (e = e.entanglements; i; ) {
      var l = 31 - St(i),
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
  function x() {
    var e = Z.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Zg(e.type));
  }
  function A(e, n) {
    var i = Z.p;
    try {
      return (Z.p = e), n();
    } finally {
      Z.p = i;
    }
  }
  var z = Math.random().toString(36).slice(2),
    X = "__reactFiber$" + z,
    J = "__reactProps$" + z,
    oe = "__reactContainer$" + z,
    pe = "__reactEvents$" + z,
    ie = "__reactListeners$" + z,
    de = "__reactHandles$" + z,
    fe = "__reactResources$" + z,
    ve = "__reactMarker$" + z;
  function ce(e) {
    delete e[X], delete e[J], delete e[pe], delete e[ie], delete e[de];
  }
  function _e(e) {
    var n = e[X];
    if (n) return n;
    for (var i = e.parentNode; i; ) {
      if ((n = i[oe] || i[X])) {
        if (
          ((i = n.alternate),
          n.child !== null || (i !== null && i.child !== null))
        )
          for (e = jg(e); e !== null; ) {
            if ((i = e[X])) return i;
            e = jg(e);
          }
        return n;
      }
      (e = i), (i = e.parentNode);
    }
    return null;
  }
  function Be(e) {
    if ((e = e[X] || e[oe])) {
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
    Ta = {};
  function Lt(e, n) {
    sn(e, n), sn(e + "Capture", n);
  }
  function sn(e, n) {
    for (Ta[e] = n, e = 0; e < n.length; e++) ke.add(n[e]);
  }
  var Pt = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Sa = {},
    Ca = {};
  function al(e) {
    return Fi.call(Ca, e)
      ? !0
      : Fi.call(Sa, e)
      ? !1
      : Pt.test(e)
      ? (Ca[e] = !0)
      : ((Sa[e] = !0), !1);
  }
  function cn(e, n, i) {
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
  function Se(e, n, i, l) {
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
  var Ot, Cn;
  function An(e) {
    if (Ot === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        (Ot = (n && n[1]) || ""),
          (Cn =
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
      Cn
    );
  }
  var vi = !1;
  function it(e, n) {
    if (!e || vi) return "";
    vi = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var Y = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Y.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Y, []);
                } catch (j) {
                  var U = j;
                }
                Reflect.construct(e, [], Y);
              } else {
                try {
                  Y.call();
                } catch (j) {
                  U = j;
                }
                e.call(Y.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                U = j;
              }
              (Y = e()) &&
                typeof Y.catch == "function" &&
                Y.catch(function () {});
            }
          } catch (j) {
            if (j && U && typeof j.stack == "string") return [j.stack, U.stack];
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
                  var V =
                    `
` + _[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      V.includes("<anonymous>") &&
                      (V = V.replace("<anonymous>", e.displayName)),
                    V
                  );
                }
              while (1 <= l && 0 <= s);
            break;
          }
      }
    } finally {
      (vi = !1), (Error.prepareStackTrace = i);
    }
    return (i = e ? e.displayName || e.name : "") ? An(i) : "";
  }
  function Aa(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return An(e.type);
      case 16:
        return An("Lazy");
      case 13:
        return An("Suspense");
      case 19:
        return An("SuspenseList");
      case 0:
      case 15:
        return it(e.type, !1);
      case 11:
        return it(e.type.render, !1);
      case 1:
        return it(e.type, !0);
      case 31:
        return An("Activity");
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
  function Vo(e) {
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
  function qo(e) {
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
  function un(e) {
    return e.replace(Jb, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function Zc(e, n, i, l, s, u, m, y) {
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
        ? Jc(e, m, Vt(n))
        : i != null
        ? Jc(e, m, Vt(i))
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
  function Jc(e, n, i) {
    (n === "number" && qo(e.ownerDocument) === e) ||
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
  function Wc(e) {
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
  function Go(e) {
    return tw.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var eu = null;
  function tu(e) {
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
            (Zc(
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
                'input[name="' + un("" + n) + '"][type="radio"]'
              ),
                n = 0;
              n < i.length;
              n++
            ) {
              var l = i[n];
              if (l !== e && l.form === e.form) {
                var s = l[J] || null;
                if (!s) throw Error(o(90));
                Zc(
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
  var nu = !1;
  function Lh(e, n, i) {
    if (nu) return e(n, i);
    nu = !0;
    try {
      var l = e(n);
      return l;
    } finally {
      if (
        ((nu = !1),
        (nr !== null || ar !== null) &&
          (Os(), nr && ((n = nr), (e = ar), (ar = nr = null), kh(n), e)))
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
    au = !1;
  if (ea)
    try {
      var ll = {};
      Object.defineProperty(ll, "passive", {
        get: function () {
          au = !0;
        },
      }),
        window.addEventListener("test", ll, ll),
        window.removeEventListener("test", ll, ll);
    } catch {
      au = !1;
    }
  var Ra = null,
    iu = null,
    $o = null;
  function Uh() {
    if ($o) return $o;
    var e,
      n = iu,
      i = n.length,
      l,
      s = "value" in Ra ? Ra.value : Ra.textContent,
      u = s.length;
    for (e = 0; e < i && n[e] === s[e]; e++);
    var m = i - e;
    for (l = 1; l <= m && n[i - l] === s[u - l]; l++);
    return ($o = s.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Yo(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Xo() {
    return !0;
  }
  function jh() {
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
          ? Xo
          : jh),
        (this.isPropagationStopped = jh),
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
            (this.isDefaultPrevented = Xo));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = Xo));
        },
        persist: function () {},
        isPersistent: Xo,
      }),
      n
    );
  }
  var bi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ko = qt(bi),
    ol = b({}, bi, { view: 0, detail: 0 }),
    nw = qt(ol),
    ru,
    lu,
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
      getModifierState: su,
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
                ? ((ru = e.screenX - sl.screenX), (lu = e.screenY - sl.screenY))
                : (lu = ru = 0),
              (sl = e)),
            ru);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : lu;
      },
    }),
    zh = qt(Qo),
    aw = b({}, Qo, { dataTransfer: 0 }),
    iw = qt(aw),
    rw = b({}, ol, { relatedTarget: 0 }),
    ou = qt(rw),
    lw = b({}, bi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ow = qt(lw),
    sw = b({}, bi, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    cw = qt(sw),
    uw = b({}, bi, { data: 0 }),
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
  function su() {
    return mw;
  }
  var pw = b({}, ol, {
      key: function (e) {
        if (e.key) {
          var n = dw[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = Yo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
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
      getModifierState: su,
      charCode: function (e) {
        return e.type === "keypress" ? Yo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Yo(e)
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
      getModifierState: su,
    }),
    bw = qt(vw),
    ww = b({}, bi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _w = qt(ww),
    Ew = b({}, Qo, {
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
    xw = qt(Ew),
    Tw = b({}, bi, { newState: 0, oldState: 0 }),
    Sw = qt(Tw),
    Cw = [9, 13, 27, 32],
    cu = ea && "CompositionEvent" in window,
    cl = null;
  ea && "documentMode" in document && (cl = document.documentMode);
  var Aw = ea && "TextEvent" in window && !cl,
    Hh = ea && (!cu || (cl && 8 < cl && 11 >= cl)),
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
      return e === "compositionend" || (!cu && qh(e, n))
        ? ((e = Uh()), ($o = iu = Ra = null), (ir = !1), e)
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
        ((i = new Ko("onChange", "change", null, i, l)),
        e.push({ event: i, listeners: n }));
  }
  var ul = null,
    dl = null;
  function Nw(e) {
    Cg(e, 0);
  }
  function Fo(e) {
    var n = at(e);
    if (Ah(n)) return e;
  }
  function Xh(e, n) {
    if (e === "change") return n;
  }
  var Kh = !1;
  if (ea) {
    var uu;
    if (ea) {
      var du = "oninput" in document;
      if (!du) {
        var Qh = document.createElement("div");
        Qh.setAttribute("oninput", "return;"),
          (du = typeof Qh.oninput == "function");
      }
      uu = du;
    } else uu = !1;
    Kh = uu && (!document.documentMode || 9 < document.documentMode);
  }
  function Fh() {
    ul && (ul.detachEvent("onpropertychange", Zh), (dl = ul = null));
  }
  function Zh(e) {
    if (e.propertyName === "value" && Fo(dl)) {
      var n = [];
      Yh(n, dl, e, tu(e)), Lh(Nw, n);
    }
  }
  function Mw(e, n, i) {
    e === "focusin"
      ? (Fh(), (ul = n), (dl = i), ul.attachEvent("onpropertychange", Zh))
      : e === "focusout" && Fh();
  }
  function kw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Fo(dl);
  }
  function Lw(e, n) {
    if (e === "click") return Fo(n);
  }
  function Uw(e, n) {
    if (e === "input" || e === "change") return Fo(n);
  }
  function jw(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var Qt = typeof Object.is == "function" ? Object.is : jw;
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
      if (!Fi.call(n, s) || !Qt(e[s], n[s])) return !1;
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
    for (var n = qo(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = n.contentWindow;
      else break;
      n = qo(e.document);
    }
    return n;
  }
  function fu(e) {
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
    hu = null,
    hl = null,
    mu = !1;
  function nm(e, n, i) {
    var l =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    mu ||
      rr == null ||
      rr !== qo(l) ||
      ((l = rr),
      "selectionStart" in l && fu(l)
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
        (l = Us(hu, "onSelect")),
        0 < l.length &&
          ((n = new Ko("onSelect", "select", null, n, i)),
          e.push({ event: n, listeners: l }),
          (n.target = rr))));
  }
  function wi(e, n) {
    var i = {};
    return (
      (i[e.toLowerCase()] = n.toLowerCase()),
      (i["Webkit" + e] = "webkit" + n),
      (i["Moz" + e] = "moz" + n),
      i
    );
  }
  var lr = {
      animationend: wi("Animation", "AnimationEnd"),
      animationiteration: wi("Animation", "AnimationIteration"),
      animationstart: wi("Animation", "AnimationStart"),
      transitionrun: wi("Transition", "TransitionRun"),
      transitionstart: wi("Transition", "TransitionStart"),
      transitioncancel: wi("Transition", "TransitionCancel"),
      transitionend: wi("Transition", "TransitionEnd"),
    },
    pu = {},
    am = {};
  ea &&
    ((am = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete lr.animationend.animation,
      delete lr.animationiteration.animation,
      delete lr.animationstart.animation),
    "TransitionEvent" in window || delete lr.transitionend.transition);
  function _i(e) {
    if (pu[e]) return pu[e];
    if (!lr[e]) return e;
    var n = lr[e],
      i;
    for (i in n) if (n.hasOwnProperty(i) && i in am) return (pu[e] = n[i]);
    return e;
  }
  var im = _i("animationend"),
    rm = _i("animationiteration"),
    lm = _i("animationstart"),
    Iw = _i("transitionrun"),
    Bw = _i("transitionstart"),
    Hw = _i("transitioncancel"),
    om = _i("transitionend"),
    sm = new Map(),
    gu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  gu.push("scrollEnd");
  function Rn(e, n) {
    sm.set(e, n), Lt(n, [e]);
  }
  var cm = new WeakMap();
  function dn(e, n) {
    if (typeof e == "object" && e !== null) {
      var i = cm.get(e);
      return i !== void 0
        ? i
        : ((n = { value: e, source: n, stack: il(n) }), cm.set(e, n), n);
    }
    return { value: e, source: n, stack: il(n) };
  }
  var fn = [],
    or = 0,
    yu = 0;
  function Zo() {
    for (var e = or, n = (yu = or = 0); n < e; ) {
      var i = fn[n];
      fn[n++] = null;
      var l = fn[n];
      fn[n++] = null;
      var s = fn[n];
      fn[n++] = null;
      var u = fn[n];
      if (((fn[n++] = null), l !== null && s !== null)) {
        var m = l.pending;
        m === null ? (s.next = s) : ((s.next = m.next), (m.next = s)),
          (l.pending = s);
      }
      u !== 0 && um(i, s, u);
    }
  }
  function Jo(e, n, i, l) {
    (fn[or++] = e),
      (fn[or++] = n),
      (fn[or++] = i),
      (fn[or++] = l),
      (yu |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function vu(e, n, i, l) {
    return Jo(e, n, i, l), Wo(e);
  }
  function sr(e, n) {
    return Jo(e, null, null, n), Wo(e);
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
          ((s = 31 - St(i)),
          (e = u.hiddenUpdates),
          (l = e[s]),
          l === null ? (e[s] = [n]) : l.push(n),
          (n.lane = i | 536870912)),
        u)
      : null;
  }
  function Wo(e) {
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
  function Ft(e, n, i, l) {
    return new Pw(e, n, i, l);
  }
  function bu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function ta(e, n) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = Ft(e.tag, n, e.key, e.mode)),
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
  function es(e, n, i, l, s, u) {
    var m = 0;
    if (((l = e), typeof e == "function")) bu(e) && (m = 1);
    else if (typeof e == "string")
      m = q2(e, i, se.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case le:
          return (e = Ft(31, i, n, s)), (e.elementType = le), (e.lanes = u), e;
        case M:
          return Ei(i.children, s, u, n);
        case K:
          (m = 8), (s |= 24);
          break;
        case P:
          return (
            (e = Ft(12, i, n, s | 2)), (e.elementType = P), (e.lanes = u), e
          );
        case Q:
          return (e = Ft(13, i, n, s)), (e.elementType = Q), (e.lanes = u), e;
        case D:
          return (e = Ft(19, i, n, s)), (e.elementType = D), (e.lanes = u), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case I:
              case q:
                m = 10;
                break e;
              case B:
                m = 9;
                break e;
              case F:
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
      (n = Ft(m, i, n, s)), (n.elementType = e), (n.type = l), (n.lanes = u), n
    );
  }
  function Ei(e, n, i, l) {
    return (e = Ft(7, e, l, n)), (e.lanes = i), e;
  }
  function wu(e, n, i) {
    return (e = Ft(6, e, null, n)), (e.lanes = i), e;
  }
  function _u(e, n, i) {
    return (
      (n = Ft(4, e.children !== null ? e.children : [], e.key, n)),
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
    ts = null,
    ns = 0,
    hn = [],
    mn = 0,
    xi = null,
    na = 1,
    aa = "";
  function Ti(e, n) {
    (ur[dr++] = ns), (ur[dr++] = ts), (ts = e), (ns = n);
  }
  function fm(e, n, i) {
    (hn[mn++] = na), (hn[mn++] = aa), (hn[mn++] = xi), (xi = e);
    var l = na;
    e = aa;
    var s = 32 - St(l) - 1;
    (l &= ~(1 << s)), (i += 1);
    var u = 32 - St(n) + s;
    if (30 < u) {
      var m = s - (s % 5);
      (u = (l & ((1 << m) - 1)).toString(32)),
        (l >>= m),
        (s -= m),
        (na = (1 << (32 - St(n) + s)) | (i << s) | l),
        (aa = u + e);
    } else (na = (1 << u) | (i << s) | l), (aa = e);
  }
  function Eu(e) {
    e.return !== null && (Ti(e, 1), fm(e, 1, 0));
  }
  function xu(e) {
    for (; e === ts; )
      (ts = ur[--dr]), (ur[dr] = null), (ns = ur[--dr]), (ur[dr] = null);
    for (; e === xi; )
      (xi = hn[--mn]),
        (hn[mn] = null),
        (aa = hn[--mn]),
        (hn[mn] = null),
        (na = hn[--mn]),
        (hn[mn] = null);
  }
  var Ut = null,
    ct = null,
    $e = !1,
    Si = null,
    Bn = !1,
    Tu = Error(o(519));
  function Ci(e) {
    var n = Error(o(418, ""));
    throw (gl(dn(n, e)), Tu);
  }
  function hm(e) {
    var n = e.stateNode,
      i = e.type,
      l = e.memoizedProps;
    switch (((n[X] = e), (n[J] = l), i)) {
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
          Vo(n);
        break;
      case "select":
        Ne("invalid", n);
        break;
      case "textarea":
        Ne("invalid", n), Dh(n, l.value, l.defaultValue, l.children), Vo(n);
    }
    (i = l.children),
      (typeof i != "string" && typeof i != "number" && typeof i != "bigint") ||
      n.textContent === "" + i ||
      l.suppressHydrationWarning === !0 ||
      Dg(n.textContent, i)
        ? (l.popover != null && (Ne("beforetoggle", n), Ne("toggle", n)),
          l.onScroll != null && Ne("scroll", n),
          l.onScrollEnd != null && Ne("scrollend", n),
          l.onClick != null && (n.onclick = js),
          (n = !0))
        : (n = !1),
      n || Ci(e);
  }
  function mm(e) {
    for (Ut = e.return; Ut; )
      switch (Ut.tag) {
        case 5:
        case 13:
          Bn = !1;
          return;
        case 27:
        case 3:
          Bn = !0;
          return;
        default:
          Ut = Ut.return;
      }
  }
  function ml(e) {
    if (e !== Ut) return !1;
    if (!$e) return mm(e), ($e = !0), !1;
    var n = e.tag,
      i;
    if (
      ((i = n !== 3 && n !== 27) &&
        ((i = n === 5) &&
          ((i = e.type),
          (i =
            !(i !== "form" && i !== "button") || Hd(e.type, e.memoizedProps))),
        (i = !i)),
      i && ct && Ci(e),
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
                ct = Dn(e.nextSibling);
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
        ? ((n = ct), Ga(e.type) ? ((e = Gd), (Gd = null), (ct = e)) : (ct = n))
        : (ct = Ut ? Dn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function pl() {
    (ct = Ut = null), ($e = !1);
  }
  function pm() {
    var e = Si;
    return (
      e !== null &&
        (Yt === null ? (Yt = e) : Yt.push.apply(Yt, e), (Si = null)),
      e
    );
  }
  function gl(e) {
    Si === null ? (Si = [e]) : Si.push(e);
  }
  var Su = $(null),
    Ai = null,
    ia = null;
  function Oa(e, n, i) {
    W(Su, n._currentValue), (n._currentValue = i);
  }
  function ra(e) {
    (e._currentValue = Su.current), te(Su);
  }
  function Cu(e, n, i) {
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
  function Au(e, n, i, l) {
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
                Cu(u.return, i, e),
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
          Cu(m, i, e),
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
    e !== null && Au(n, e, i, l), (n.flags |= 262144);
  }
  function as(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Qt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ri(e) {
    (Ai = e),
      (ia = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Dt(e) {
    return gm(Ai, e);
  }
  function is(e, n) {
    return Ai === null && Ri(e), gm(e, n);
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
      $$typeof: q,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ru() {
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
    Ou = 0,
    fr = 0,
    hr = null;
  function $w(e, n) {
    if (bl === null) {
      var i = (bl = []);
      (Ou = 0),
        (fr = Nd()),
        (hr = {
          status: "pending",
          value: void 0,
          then: function (l) {
            i.push(l);
          },
        });
    }
    return Ou++, n.then(ym, ym), n;
  }
  function ym() {
    if (--Ou === 0 && bl !== null) {
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
  var Oi = $(null);
  function Du() {
    var e = Oi.current;
    return e !== null ? e : tt.pooledCache;
  }
  function rs(e, n) {
    n === null ? W(Oi, Oi.current) : W(Oi, n.pool);
  }
  function bm() {
    var e = Du();
    return e === null ? null : { parent: bt._currentValue, pool: e };
  }
  var wl = Error(o(460)),
    wm = Error(o(474)),
    ls = Error(o(542)),
    Nu = { then: function () {} };
  function _m(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function os() {}
  function Em(e, n, i) {
    switch (
      ((i = e[i]),
      i === void 0 ? e.push(n) : i !== n && (n.then(os, os), (n = i)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((e = n.reason), Tm(e), e);
      default:
        if (typeof n.status == "string") n.then(os, os);
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
            throw ((e = n.reason), Tm(e), e);
        }
        throw ((_l = n), wl);
    }
  }
  var _l = null;
  function xm() {
    if (_l === null) throw Error(o(459));
    var e = _l;
    return (_l = null), e;
  }
  function Tm(e) {
    if (e === wl || e === ls) throw Error(o(483));
  }
  var Da = !1;
  function Mu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ku(e, n) {
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
        (n = Wo(e)),
        um(e, null, i),
        n
      );
    }
    return Jo(e, l, n, i), Wo(e);
  }
  function El(e, n, i) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (i & 4194048) !== 0))
    ) {
      var l = n.lanes;
      (l &= e.pendingLanes), (i |= l), (n.lanes = i), yi(e, i);
    }
  }
  function Lu(e, n) {
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
  function xl() {
    if (Uu) {
      var e = hr;
      if (e !== null) throw e;
    }
  }
  function Tl(e, n, i, l) {
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
      var V = e.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (y = V.lastBaseUpdate),
        y !== m &&
          (y === null ? (V.firstBaseUpdate = k) : (y.next = k),
          (V.lastBaseUpdate = _)));
    }
    if (u !== null) {
      var Y = s.baseState;
      (m = 0), (V = k = _ = null), (y = u);
      do {
        var U = y.lane & -536870913,
          j = U !== y.lane;
        if (j ? (Ue & U) === U : (l & U) === U) {
          U !== 0 && U === fr && (Uu = !0),
            V !== null &&
              (V = V.next =
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
            U = n;
            var Ze = i;
            switch (ge.tag) {
              case 1:
                if (((we = ge.payload), typeof we == "function")) {
                  Y = we.call(Ze, Y, U);
                  break e;
                }
                Y = we;
                break e;
              case 3:
                we.flags = (we.flags & -65537) | 128;
              case 0:
                if (
                  ((we = ge.payload),
                  (U = typeof we == "function" ? we.call(Ze, Y, U) : we),
                  U == null)
                )
                  break e;
                Y = b({}, Y, U);
                break e;
              case 2:
                Da = !0;
            }
          }
          (U = y.callback),
            U !== null &&
              ((e.flags |= 64),
              j && (e.flags |= 8192),
              (j = s.callbacks),
              j === null ? (s.callbacks = [U]) : j.push(U));
        } else
          (j = {
            lane: U,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            V === null ? ((k = V = j), (_ = Y)) : (V = V.next = j),
            (m |= U);
        if (((y = y.next), y === null)) {
          if (((y = s.shared.pending), y === null)) break;
          (j = y),
            (y = j.next),
            (j.next = null),
            (s.lastBaseUpdate = j),
            (s.shared.pending = null);
        }
      } while (!0);
      V === null && (_ = Y),
        (s.baseState = _),
        (s.firstBaseUpdate = k),
        (s.lastBaseUpdate = V),
        u === null && (s.shared.lanes = 0),
        (Ha |= m),
        (e.lanes = m),
        (e.memoizedState = Y);
    }
  }
  function Sm(e, n) {
    if (typeof e != "function") throw Error(o(191, e));
    e.call(n);
  }
  function Cm(e, n) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++) Sm(i[e], n);
  }
  var mr = $(null),
    ss = $(0);
  function Am(e, n) {
    (e = fa), W(ss, e), W(mr, n), (fa = e | n.baseLanes);
  }
  function ju() {
    W(ss, fa), W(mr, mr.current);
  }
  function zu() {
    (fa = ss.current), te(mr), te(ss);
  }
  var ka = 0,
    Te = null,
    Qe = null,
    gt = null,
    cs = !1,
    pr = !1,
    Di = !1,
    us = 0,
    Sl = 0,
    gr = null,
    Xw = 0;
  function dt() {
    throw Error(o(321));
  }
  function Iu(e, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < e.length; i++)
      if (!Qt(e[i], n[i])) return !1;
    return !0;
  }
  function Bu(e, n, i, l, s, u) {
    return (
      (ka = u),
      (Te = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (L.H = e === null || e.memoizedState === null ? up : dp),
      (Di = !1),
      (u = i(l, s)),
      (Di = !1),
      pr && (u = Om(n, i, l, s)),
      Rm(e),
      u
    );
  }
  function Rm(e) {
    L.H = gs;
    var n = Qe !== null && Qe.next !== null;
    if (((ka = 0), (gt = Qe = Te = null), (cs = !1), (Sl = 0), (gr = null), n))
      throw Error(o(300));
    e === null ||
      _t ||
      ((e = e.dependencies), e !== null && as(e) && (_t = !0));
  }
  function Om(e, n, i, l) {
    Te = e;
    var s = 0;
    do {
      if ((pr && (gr = null), (Sl = 0), (pr = !1), 25 <= s))
        throw Error(o(301));
      if (((s += 1), (gt = Qe = null), e.updateQueue != null)) {
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
      (Qe !== null ? Qe.memoizedState : null) !== e && (Te.flags |= 1024),
      n
    );
  }
  function Hu() {
    var e = us !== 0;
    return (us = 0), e;
  }
  function Pu(e, n, i) {
    (n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~i);
  }
  function Vu(e) {
    if (cs) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), (e = e.next);
      }
      cs = !1;
    }
    (ka = 0), (gt = Qe = Te = null), (pr = !1), (Sl = us = 0), (gr = null);
  }
  function Gt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return gt === null ? (Te.memoizedState = gt = e) : (gt = gt.next = e), gt;
  }
  function yt() {
    if (Qe === null) {
      var e = Te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Qe.next;
    var n = gt === null ? Te.memoizedState : gt.next;
    if (n !== null) (gt = n), (Qe = e);
    else {
      if (e === null)
        throw Te.alternate === null ? Error(o(467)) : Error(o(310));
      (Qe = e),
        (e = {
          memoizedState: Qe.memoizedState,
          baseState: Qe.baseState,
          baseQueue: Qe.baseQueue,
          queue: Qe.queue,
          next: null,
        }),
        gt === null ? (Te.memoizedState = gt = e) : (gt = gt.next = e);
    }
    return gt;
  }
  function qu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Cl(e) {
    var n = Sl;
    return (
      (Sl += 1),
      gr === null && (gr = []),
      (e = Em(gr, e, n)),
      (n = Te),
      (gt === null ? n.memoizedState : gt.next) === null &&
        ((n = n.alternate),
        (L.H = n === null || n.memoizedState === null ? up : dp)),
      e
    );
  }
  function ds(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Cl(e);
      if (e.$$typeof === q) return Dt(e);
    }
    throw Error(o(438, String(e)));
  }
  function Gu(e) {
    var n = null,
      i = Te.updateQueue;
    if ((i !== null && (n = i.memoCache), n == null)) {
      var l = Te.alternate;
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
      i === null && ((i = qu()), (Te.updateQueue = i)),
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
  function fs(e) {
    var n = yt();
    return $u(n, Qe, e);
  }
  function $u(e, n, i) {
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
        V = !1;
      do {
        var Y = k.lane & -536870913;
        if (Y !== k.lane ? (Ue & Y) === Y : (ka & Y) === Y) {
          var U = k.revertLane;
          if (U === 0)
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
              Y === fr && (V = !0);
          else if ((ka & U) === U) {
            (k = k.next), U === fr && (V = !0);
            continue;
          } else
            (Y = {
              lane: 0,
              revertLane: k.revertLane,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null,
            }),
              _ === null ? ((y = _ = Y), (m = u)) : (_ = _.next = Y),
              (Te.lanes |= U),
              (Ha |= U);
          (Y = k.action),
            Di && i(u, Y),
            (u = k.hasEagerState ? k.eagerState : i(u, Y));
        } else
          (U = {
            lane: Y,
            revertLane: k.revertLane,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null,
          }),
            _ === null ? ((y = _ = U), (m = u)) : (_ = _.next = U),
            (Te.lanes |= Y),
            (Ha |= Y);
        k = k.next;
      } while (k !== null && k !== n);
      if (
        (_ === null ? (m = u) : (_.next = y),
        !Qt(u, e.memoizedState) && ((_t = !0), V && ((i = hr), i !== null)))
      )
        throw i;
      (e.memoizedState = u),
        (e.baseState = m),
        (e.baseQueue = _),
        (l.lastRenderedState = u);
    }
    return s === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Yu(e) {
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
    var l = Te,
      s = yt(),
      u = $e;
    if (u) {
      if (i === void 0) throw Error(o(407));
      i = i();
    } else i = n();
    var m = !Qt((Qe || s).memoizedState, i);
    m && ((s.memoizedState = i), (_t = !0)), (s = s.queue);
    var y = km.bind(null, l, s, e);
    if (
      (Al(2048, 8, y, [e]),
      s.getSnapshot !== n || m || (gt !== null && gt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        yr(9, hs(), Mm.bind(null, l, s, i, n), null),
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
      (n = Te.updateQueue),
      n === null
        ? ((n = qu()), (Te.updateQueue = n), (n.stores = [e]))
        : ((i = n.stores), i === null ? (n.stores = [e]) : i.push(e));
  }
  function Mm(e, n, i, l) {
    (n.value = i), (n.getSnapshot = l), Lm(n) && Um(e);
  }
  function km(e, n, i) {
    return i(function () {
      Lm(n) && Um(e);
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
  function Um(e) {
    var n = sr(e, 2);
    n !== null && tn(n, e, 2);
  }
  function Xu(e) {
    var n = Gt();
    if (typeof e == "function") {
      var i = e;
      if (((e = i()), Di)) {
        Sn(!0);
        try {
          i();
        } finally {
          Sn(!1);
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
  function jm(e, n, i, l) {
    return (e.baseState = i), $u(e, Qe, typeof l == "function" ? l : la);
  }
  function Qw(e, n, i, l, s) {
    if (ps(e)) throw Error(o(485));
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
        Ku(e, n, k);
      } finally {
        L.T = u;
      }
    } else
      try {
        (u = i(s, l)), Im(e, n, u);
      } catch (k) {
        Ku(e, n, k);
      }
  }
  function Im(e, n, i) {
    i !== null && typeof i == "object" && typeof i.then == "function"
      ? i.then(
          function (l) {
            Bm(e, n, l);
          },
          function (l) {
            return Ku(e, n, l);
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
  function Ku(e, n, i) {
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
          var l = Te;
          if ($e) {
            if (ct) {
              t: {
                for (var s = ct, u = Bn; s.nodeType !== 8; ) {
                  if (!u) {
                    s = null;
                    break t;
                  }
                  if (((s = Dn(s.nextSibling)), s === null)) {
                    s = null;
                    break t;
                  }
                }
                (u = s.data), (s = u === "F!" || u === "F" ? s : null);
              }
              if (s) {
                (ct = Dn(s.nextSibling)), (l = s.data === "F!");
                break e;
              }
            }
            Ci(l);
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
      (i = op.bind(null, Te, l)),
      (l.dispatch = i),
      (l = Xu(!1)),
      (u = Wu.bind(null, Te, !1, l.queue)),
      (l = Gt()),
      (s = { state: n, dispatch: null, action: e, pending: null }),
      (l.queue = s),
      (i = Qw.bind(null, Te, s, u, i)),
      (s.dispatch = i),
      (l.memoizedState = e),
      [n, i, !1]
    );
  }
  function qm(e) {
    var n = yt();
    return Gm(n, Qe, e);
  }
  function Gm(e, n, i) {
    if (
      ((n = $u(e, n, Pm)[0]),
      (e = fs(la)[0]),
      typeof n == "object" && n !== null && typeof n.then == "function")
    )
      try {
        var l = Cl(n);
      } catch (m) {
        throw m === wl ? ls : m;
      }
    else l = n;
    n = yt();
    var s = n.queue,
      u = s.dispatch;
    return (
      i !== n.memoizedState &&
        ((Te.flags |= 2048), yr(9, hs(), Fw.bind(null, s, i), null)),
      [l, u, e]
    );
  }
  function Fw(e, n) {
    e.action = n;
  }
  function $m(e) {
    var n = yt(),
      i = Qe;
    if (i !== null) return Gm(n, i, e);
    yt(), (n = n.memoizedState), (i = yt());
    var l = i.queue.dispatch;
    return (i.memoizedState = e), [n, l, !1];
  }
  function yr(e, n, i, l) {
    return (
      (e = { tag: e, create: i, deps: l, inst: n, next: null }),
      (n = Te.updateQueue),
      n === null && ((n = qu()), (Te.updateQueue = n)),
      (i = n.lastEffect),
      i === null
        ? (n.lastEffect = e.next = e)
        : ((l = i.next), (i.next = e), (e.next = l), (n.lastEffect = e)),
      e
    );
  }
  function hs() {
    return { destroy: void 0, resource: void 0 };
  }
  function Ym() {
    return yt().memoizedState;
  }
  function ms(e, n, i, l) {
    var s = Gt();
    (l = l === void 0 ? null : l),
      (Te.flags |= e),
      (s.memoizedState = yr(1 | n, hs(), i, l));
  }
  function Al(e, n, i, l) {
    var s = yt();
    l = l === void 0 ? null : l;
    var u = s.memoizedState.inst;
    Qe !== null && l !== null && Iu(l, Qe.memoizedState.deps)
      ? (s.memoizedState = yr(n, u, i, l))
      : ((Te.flags |= e), (s.memoizedState = yr(1 | n, u, i, l)));
  }
  function Xm(e, n) {
    ms(8390656, 8, e, n);
  }
  function Km(e, n) {
    Al(2048, 8, e, n);
  }
  function Qm(e, n) {
    return Al(4, 2, e, n);
  }
  function Fm(e, n) {
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
    return n !== null && Iu(n, l[1]) ? l[0] : ((i.memoizedState = [e, n]), e);
  }
  function ep(e, n) {
    var i = yt();
    n = n === void 0 ? null : n;
    var l = i.memoizedState;
    if (n !== null && Iu(n, l[1])) return l[0];
    if (((l = e()), Di)) {
      Sn(!0);
      try {
        e();
      } finally {
        Sn(!1);
      }
    }
    return (i.memoizedState = [l, n]), l;
  }
  function Fu(e, n, i) {
    return i === void 0 || (ka & 1073741824) !== 0
      ? (e.memoizedState = n)
      : ((e.memoizedState = i), (e = ag()), (Te.lanes |= e), (Ha |= e), i);
  }
  function tp(e, n, i, l) {
    return Qt(i, n)
      ? i
      : mr.current !== null
      ? ((e = Fu(e, i, l)), Qt(e, n) || (_t = !0), e)
      : (ka & 42) === 0
      ? ((_t = !0), (e.memoizedState = i))
      : ((e = ag()), (Te.lanes |= e), (Ha |= e), n);
  }
  function np(e, n, i, l, s) {
    var u = Z.p;
    Z.p = u !== 0 && 8 > u ? u : 8;
    var m = L.T,
      y = {};
    (L.T = y), Wu(e, !1, n, i);
    try {
      var _ = s(),
        k = L.S;
      if (
        (k !== null && k(y, _),
        _ !== null && typeof _ == "object" && typeof _.then == "function")
      ) {
        var V = Yw(_, l);
        Rl(e, n, V, en(e));
      } else Rl(e, n, l, en(e));
    } catch (Y) {
      Rl(e, n, { then: function () {}, status: "rejected", reason: Y }, en());
    } finally {
      (Z.p = u), (L.T = m);
    }
  }
  function Zw() {}
  function Zu(e, n, i, l) {
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
    Rl(e, n, {}, en());
  }
  function Ju() {
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
          var i = en();
          e = Na(i);
          var l = Ma(n, e, i);
          l !== null && (tn(l, n, i), El(l, n, i)),
            (n = { cache: Ru() }),
            (e.payload = n);
          return;
      }
      n = n.return;
    }
  }
  function Ww(e, n, i) {
    var l = en();
    (i = {
      lane: l,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ps(e)
        ? sp(n, i)
        : ((i = vu(e, n, i, l)), i !== null && (tn(i, e, l), cp(i, n, l)));
  }
  function op(e, n, i) {
    var l = en();
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
    if (ps(e)) sp(n, s);
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
            return Jo(e, n, s, 0), tt === null && Zo(), !1;
        } catch {
        } finally {
        }
      if (((i = vu(e, n, s, l)), i !== null))
        return tn(i, e, l), cp(i, n, l), !0;
    }
    return !1;
  }
  function Wu(e, n, i, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Nd(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ps(e))
    ) {
      if (n) throw Error(o(479));
    } else (n = vu(e, i, l, 2)), n !== null && tn(n, e, 2);
  }
  function ps(e) {
    var n = e.alternate;
    return e === Te || (n !== null && n === Te);
  }
  function sp(e, n) {
    pr = cs = !0;
    var i = e.pending;
    i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
      (e.pending = n);
  }
  function cp(e, n, i) {
    if ((i & 4194048) !== 0) {
      var l = n.lanes;
      (l &= e.pendingLanes), (i |= l), (n.lanes = i), yi(e, i);
    }
  }
  var gs = {
      readContext: Dt,
      use: ds,
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
      use: ds,
      useCallback: function (e, n) {
        return (Gt().memoizedState = [e, n === void 0 ? null : n]), e;
      },
      useContext: Dt,
      useEffect: Xm,
      useImperativeHandle: function (e, n, i) {
        (i = i != null ? i.concat([e]) : null),
          ms(4194308, 4, Zm.bind(null, n, e), i);
      },
      useLayoutEffect: function (e, n) {
        return ms(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        ms(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var i = Gt();
        n = n === void 0 ? null : n;
        var l = e();
        if (Di) {
          Sn(!0);
          try {
            e();
          } finally {
            Sn(!1);
          }
        }
        return (i.memoizedState = [l, n]), l;
      },
      useReducer: function (e, n, i) {
        var l = Gt();
        if (i !== void 0) {
          var s = i(n);
          if (Di) {
            Sn(!0);
            try {
              i(n);
            } finally {
              Sn(!1);
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
          (e = e.dispatch = Ww.bind(null, Te, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = Gt();
        return (e = { current: e }), (n.memoizedState = e);
      },
      useState: function (e) {
        e = Xu(e);
        var n = e.queue,
          i = op.bind(null, Te, n);
        return (n.dispatch = i), [e.memoizedState, i];
      },
      useDebugValue: Qu,
      useDeferredValue: function (e, n) {
        var i = Gt();
        return Fu(i, e, n);
      },
      useTransition: function () {
        var e = Xu(!1);
        return (
          (e = np.bind(null, Te, e.queue, !0, !1)),
          (Gt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, n, i) {
        var l = Te,
          s = Gt();
        if ($e) {
          if (i === void 0) throw Error(o(407));
          i = i();
        } else {
          if (((i = n()), tt === null)) throw Error(o(349));
          (Ue & 124) !== 0 || Nm(l, n, i);
        }
        s.memoizedState = i;
        var u = { value: i, getSnapshot: n };
        return (
          (s.queue = u),
          Xm(km.bind(null, l, u, e), [e]),
          (l.flags |= 2048),
          yr(9, hs(), Mm.bind(null, l, u, i, n), null),
          i
        );
      },
      useId: function () {
        var e = Gt(),
          n = tt.identifierPrefix;
        if ($e) {
          var i = aa,
            l = na;
          (i = (l & ~(1 << (32 - St(l) - 1))).toString(32) + i),
            (n = "«" + n + "R" + i),
            (i = us++),
            0 < i && (n += "H" + i.toString(32)),
            (n += "»");
        } else (i = Xw++), (n = "«" + n + "r" + i.toString(32) + "»");
        return (e.memoizedState = n);
      },
      useHostTransitionStatus: Ju,
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
          (n = Wu.bind(null, Te, !0, i)),
          (i.dispatch = n),
          [e, n]
        );
      },
      useMemoCache: Gu,
      useCacheRefresh: function () {
        return (Gt().memoizedState = Jw.bind(null, Te));
      },
    },
    dp = {
      readContext: Dt,
      use: ds,
      useCallback: Wm,
      useContext: Dt,
      useEffect: Km,
      useImperativeHandle: Jm,
      useInsertionEffect: Qm,
      useLayoutEffect: Fm,
      useMemo: ep,
      useReducer: fs,
      useRef: Ym,
      useState: function () {
        return fs(la);
      },
      useDebugValue: Qu,
      useDeferredValue: function (e, n) {
        var i = yt();
        return tp(i, Qe.memoizedState, e, n);
      },
      useTransition: function () {
        var e = fs(la)[0],
          n = yt().memoizedState;
        return [typeof e == "boolean" ? e : Cl(e), n];
      },
      useSyncExternalStore: Dm,
      useId: rp,
      useHostTransitionStatus: Ju,
      useFormState: qm,
      useActionState: qm,
      useOptimistic: function (e, n) {
        var i = yt();
        return jm(i, Qe, e, n);
      },
      useMemoCache: Gu,
      useCacheRefresh: lp,
    },
    e2 = {
      readContext: Dt,
      use: ds,
      useCallback: Wm,
      useContext: Dt,
      useEffect: Km,
      useImperativeHandle: Jm,
      useInsertionEffect: Qm,
      useLayoutEffect: Fm,
      useMemo: ep,
      useReducer: Yu,
      useRef: Ym,
      useState: function () {
        return Yu(la);
      },
      useDebugValue: Qu,
      useDeferredValue: function (e, n) {
        var i = yt();
        return Qe === null ? Fu(i, e, n) : tp(i, Qe.memoizedState, e, n);
      },
      useTransition: function () {
        var e = Yu(la)[0],
          n = yt().memoizedState;
        return [typeof e == "boolean" ? e : Cl(e), n];
      },
      useSyncExternalStore: Dm,
      useId: rp,
      useHostTransitionStatus: Ju,
      useFormState: $m,
      useActionState: $m,
      useOptimistic: function (e, n) {
        var i = yt();
        return Qe !== null
          ? jm(i, Qe, e, n)
          : ((i.baseState = e), [e, i.queue.dispatch]);
      },
      useMemoCache: Gu,
      useCacheRefresh: lp,
    },
    vr = null,
    Ol = 0;
  function ys(e) {
    var n = Ol;
    return (Ol += 1), vr === null && (vr = []), Em(vr, e, n);
  }
  function Dl(e, n) {
    (n = n.props.ref), (e.ref = n !== void 0 ? n : null);
  }
  function vs(e, n) {
    throw n.$$typeof === T
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
    function n(C, S) {
      if (e) {
        var N = C.deletions;
        N === null ? ((C.deletions = [S]), (C.flags |= 16)) : N.push(S);
      }
    }
    function i(C, S) {
      if (!e) return null;
      for (; S !== null; ) n(C, S), (S = S.sibling);
      return null;
    }
    function l(C) {
      for (var S = new Map(); C !== null; )
        C.key !== null ? S.set(C.key, C) : S.set(C.index, C), (C = C.sibling);
      return S;
    }
    function s(C, S) {
      return (C = ta(C, S)), (C.index = 0), (C.sibling = null), C;
    }
    function u(C, S, N) {
      return (
        (C.index = N),
        e
          ? ((N = C.alternate),
            N !== null
              ? ((N = N.index), N < S ? ((C.flags |= 67108866), S) : N)
              : ((C.flags |= 67108866), S))
          : ((C.flags |= 1048576), S)
      );
    }
    function m(C) {
      return e && C.alternate === null && (C.flags |= 67108866), C;
    }
    function y(C, S, N, G) {
      return S === null || S.tag !== 6
        ? ((S = wu(N, C.mode, G)), (S.return = C), S)
        : ((S = s(S, N)), (S.return = C), S);
    }
    function _(C, S, N, G) {
      var re = N.type;
      return re === M
        ? V(C, S, N.props.children, G, N.key)
        : S !== null &&
          (S.elementType === re ||
            (typeof re == "object" &&
              re !== null &&
              re.$$typeof === ne &&
              fp(re) === S.type))
        ? ((S = s(S, N.props)), Dl(S, N), (S.return = C), S)
        : ((S = es(N.type, N.key, N.props, null, C.mode, G)),
          Dl(S, N),
          (S.return = C),
          S);
    }
    function k(C, S, N, G) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== N.containerInfo ||
        S.stateNode.implementation !== N.implementation
        ? ((S = _u(N, C.mode, G)), (S.return = C), S)
        : ((S = s(S, N.children || [])), (S.return = C), S);
    }
    function V(C, S, N, G, re) {
      return S === null || S.tag !== 7
        ? ((S = Ei(N, C.mode, G, re)), (S.return = C), S)
        : ((S = s(S, N)), (S.return = C), S);
    }
    function Y(C, S, N) {
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return (S = wu("" + S, C.mode, N)), (S.return = C), S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case w:
            return (
              (N = es(S.type, S.key, S.props, null, C.mode, N)),
              Dl(N, S),
              (N.return = C),
              N
            );
          case O:
            return (S = _u(S, C.mode, N)), (S.return = C), S;
          case ne:
            var G = S._init;
            return (S = G(S._payload)), Y(C, S, N);
        }
        if (Le(S) || Ge(S))
          return (S = Ei(S, C.mode, N, null)), (S.return = C), S;
        if (typeof S.then == "function") return Y(C, ys(S), N);
        if (S.$$typeof === q) return Y(C, is(C, S), N);
        vs(C, S);
      }
      return null;
    }
    function U(C, S, N, G) {
      var re = S !== null ? S.key : null;
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return re !== null ? null : y(C, S, "" + N, G);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case w:
            return N.key === re ? _(C, S, N, G) : null;
          case O:
            return N.key === re ? k(C, S, N, G) : null;
          case ne:
            return (re = N._init), (N = re(N._payload)), U(C, S, N, G);
        }
        if (Le(N) || Ge(N)) return re !== null ? null : V(C, S, N, G, null);
        if (typeof N.then == "function") return U(C, S, ys(N), G);
        if (N.$$typeof === q) return U(C, S, is(C, N), G);
        vs(C, N);
      }
      return null;
    }
    function j(C, S, N, G, re) {
      if (
        (typeof G == "string" && G !== "") ||
        typeof G == "number" ||
        typeof G == "bigint"
      )
        return (C = C.get(N) || null), y(S, C, "" + G, re);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case w:
            return (
              (C = C.get(G.key === null ? N : G.key) || null), _(S, C, G, re)
            );
          case O:
            return (
              (C = C.get(G.key === null ? N : G.key) || null), k(S, C, G, re)
            );
          case ne:
            var Ce = G._init;
            return (G = Ce(G._payload)), j(C, S, N, G, re);
        }
        if (Le(G) || Ge(G)) return (C = C.get(N) || null), V(S, C, G, re, null);
        if (typeof G.then == "function") return j(C, S, N, ys(G), re);
        if (G.$$typeof === q) return j(C, S, N, is(S, G), re);
        vs(S, G);
      }
      return null;
    }
    function we(C, S, N, G) {
      for (
        var re = null, Ce = null, ue = S, ye = (S = 0), xt = null;
        ue !== null && ye < N.length;
        ye++
      ) {
        ue.index > ye ? ((xt = ue), (ue = null)) : (xt = ue.sibling);
        var Pe = U(C, ue, N[ye], G);
        if (Pe === null) {
          ue === null && (ue = xt);
          break;
        }
        e && ue && Pe.alternate === null && n(C, ue),
          (S = u(Pe, S, ye)),
          Ce === null ? (re = Pe) : (Ce.sibling = Pe),
          (Ce = Pe),
          (ue = xt);
      }
      if (ye === N.length) return i(C, ue), $e && Ti(C, ye), re;
      if (ue === null) {
        for (; ye < N.length; ye++)
          (ue = Y(C, N[ye], G)),
            ue !== null &&
              ((S = u(ue, S, ye)),
              Ce === null ? (re = ue) : (Ce.sibling = ue),
              (Ce = ue));
        return $e && Ti(C, ye), re;
      }
      for (ue = l(ue); ye < N.length; ye++)
        (xt = j(ue, C, ye, N[ye], G)),
          xt !== null &&
            (e &&
              xt.alternate !== null &&
              ue.delete(xt.key === null ? ye : xt.key),
            (S = u(xt, S, ye)),
            Ce === null ? (re = xt) : (Ce.sibling = xt),
            (Ce = xt));
      return (
        e &&
          ue.forEach(function (Qa) {
            return n(C, Qa);
          }),
        $e && Ti(C, ye),
        re
      );
    }
    function ge(C, S, N, G) {
      if (N == null) throw Error(o(151));
      for (
        var re = null,
          Ce = null,
          ue = S,
          ye = (S = 0),
          xt = null,
          Pe = N.next();
        ue !== null && !Pe.done;
        ye++, Pe = N.next()
      ) {
        ue.index > ye ? ((xt = ue), (ue = null)) : (xt = ue.sibling);
        var Qa = U(C, ue, Pe.value, G);
        if (Qa === null) {
          ue === null && (ue = xt);
          break;
        }
        e && ue && Qa.alternate === null && n(C, ue),
          (S = u(Qa, S, ye)),
          Ce === null ? (re = Qa) : (Ce.sibling = Qa),
          (Ce = Qa),
          (ue = xt);
      }
      if (Pe.done) return i(C, ue), $e && Ti(C, ye), re;
      if (ue === null) {
        for (; !Pe.done; ye++, Pe = N.next())
          (Pe = Y(C, Pe.value, G)),
            Pe !== null &&
              ((S = u(Pe, S, ye)),
              Ce === null ? (re = Pe) : (Ce.sibling = Pe),
              (Ce = Pe));
        return $e && Ti(C, ye), re;
      }
      for (ue = l(ue); !Pe.done; ye++, Pe = N.next())
        (Pe = j(ue, C, ye, Pe.value, G)),
          Pe !== null &&
            (e &&
              Pe.alternate !== null &&
              ue.delete(Pe.key === null ? ye : Pe.key),
            (S = u(Pe, S, ye)),
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
    function Ze(C, S, N, G) {
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
              for (var re = N.key; S !== null; ) {
                if (S.key === re) {
                  if (((re = N.type), re === M)) {
                    if (S.tag === 7) {
                      i(C, S.sibling),
                        (G = s(S, N.props.children)),
                        (G.return = C),
                        (C = G);
                      break e;
                    }
                  } else if (
                    S.elementType === re ||
                    (typeof re == "object" &&
                      re !== null &&
                      re.$$typeof === ne &&
                      fp(re) === S.type)
                  ) {
                    i(C, S.sibling),
                      (G = s(S, N.props)),
                      Dl(G, N),
                      (G.return = C),
                      (C = G);
                    break e;
                  }
                  i(C, S);
                  break;
                } else n(C, S);
                S = S.sibling;
              }
              N.type === M
                ? ((G = Ei(N.props.children, C.mode, G, N.key)),
                  (G.return = C),
                  (C = G))
                : ((G = es(N.type, N.key, N.props, null, C.mode, G)),
                  Dl(G, N),
                  (G.return = C),
                  (C = G));
            }
            return m(C);
          case O:
            e: {
              for (re = N.key; S !== null; ) {
                if (S.key === re)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === N.containerInfo &&
                    S.stateNode.implementation === N.implementation
                  ) {
                    i(C, S.sibling),
                      (G = s(S, N.children || [])),
                      (G.return = C),
                      (C = G);
                    break e;
                  } else {
                    i(C, S);
                    break;
                  }
                else n(C, S);
                S = S.sibling;
              }
              (G = _u(N, C.mode, G)), (G.return = C), (C = G);
            }
            return m(C);
          case ne:
            return (re = N._init), (N = re(N._payload)), Ze(C, S, N, G);
        }
        if (Le(N)) return we(C, S, N, G);
        if (Ge(N)) {
          if (((re = Ge(N)), typeof re != "function")) throw Error(o(150));
          return (N = re.call(N)), ge(C, S, N, G);
        }
        if (typeof N.then == "function") return Ze(C, S, ys(N), G);
        if (N.$$typeof === q) return Ze(C, S, is(C, N), G);
        vs(C, N);
      }
      return (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
        ? ((N = "" + N),
          S !== null && S.tag === 6
            ? (i(C, S.sibling), (G = s(S, N)), (G.return = C), (C = G))
            : (i(C, S), (G = wu(N, C.mode, G)), (G.return = C), (C = G)),
          m(C))
        : i(C, S);
    }
    return function (C, S, N, G) {
      try {
        Ol = 0;
        var re = Ze(C, S, N, G);
        return (vr = null), re;
      } catch (ue) {
        if (ue === wl || ue === ls) throw ue;
        var Ce = Ft(29, ue, null, C.mode);
        return (Ce.lanes = G), (Ce.return = C), Ce;
      } finally {
      }
    };
  }
  var br = hp(!0),
    mp = hp(!1),
    pn = $(null),
    Hn = null;
  function La(e) {
    var n = e.alternate;
    W(wt, wt.current & 1),
      W(pn, e),
      Hn === null &&
        (n === null || mr.current !== null || n.memoizedState !== null) &&
        (Hn = e);
  }
  function pp(e) {
    if (e.tag === 22) {
      if ((W(wt, wt.current), W(pn, e), Hn === null)) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Hn = e);
      }
    } else Ua();
  }
  function Ua() {
    W(wt, wt.current), W(pn, pn.current);
  }
  function oa(e) {
    te(pn), Hn === e && (Hn = null), te(wt);
  }
  var wt = $(0);
  function bs(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (
          i !== null &&
          ((i = i.dehydrated), i === null || i.data === "$?" || qd(i))
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
  function ed(e, n, i, l) {
    (n = e.memoizedState),
      (i = i(l, n)),
      (i = i == null ? n : b({}, n, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var td = {
    enqueueSetState: function (e, n, i) {
      e = e._reactInternals;
      var l = en(),
        s = Na(l);
      (s.payload = n),
        i != null && (s.callback = i),
        (n = Ma(e, s, l)),
        n !== null && (tn(n, e, l), El(n, e, l));
    },
    enqueueReplaceState: function (e, n, i) {
      e = e._reactInternals;
      var l = en(),
        s = Na(l);
      (s.tag = 1),
        (s.payload = n),
        i != null && (s.callback = i),
        (n = Ma(e, s, l)),
        n !== null && (tn(n, e, l), El(n, e, l));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var i = en(),
        l = Na(i);
      (l.tag = 2),
        n != null && (l.callback = n),
        (n = Ma(e, l, i)),
        n !== null && (tn(n, e, i), El(n, e, i));
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
      n.state !== e && td.enqueueReplaceState(n, n.state, null);
  }
  function Ni(e, n) {
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
  var ws =
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
    ws(e);
  }
  function bp(e) {
    console.error(e);
  }
  function wp(e) {
    ws(e);
  }
  function _s(e, n) {
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
  function nd(e, n, i) {
    return (
      (i = Na(i)),
      (i.tag = 3),
      (i.payload = { element: null }),
      (i.callback = function () {
        _s(e, n);
      }),
      i
    );
  }
  function Ep(e) {
    return (e = Na(e)), (e.tag = 3), e;
  }
  function xp(e, n, i, l) {
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
        (i = pn.current),
        i !== null)
      ) {
        switch (i.tag) {
          case 13:
            return (
              Hn === null ? Cd() : i.alternate === null && ut === 0 && (ut = 3),
              (i.flags &= -257),
              (i.flags |= 65536),
              (i.lanes = s),
              l === Nu
                ? (i.flags |= 16384)
                : ((n = i.updateQueue),
                  n === null ? (i.updateQueue = new Set([l])) : n.add(l),
                  Rd(e, l, s)),
              !1
            );
          case 22:
            return (
              (i.flags |= 65536),
              l === Nu
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
                  Rd(e, l, s)),
              !1
            );
        }
        throw Error(o(435, i.tag));
      }
      return Rd(e, l, s), Cd(), !1;
    }
    if ($e)
      return (
        (n = pn.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = s),
            l !== Tu && ((e = Error(o(422), { cause: l })), gl(dn(e, i))))
          : (l !== Tu && ((n = Error(o(423), { cause: l })), gl(dn(n, i))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (s &= -s),
            (e.lanes |= s),
            (l = dn(l, i)),
            (s = nd(e.stateNode, l, s)),
            Lu(e, s),
            ut !== 4 && (ut = 2)),
        !1
      );
    var u = Error(o(520), { cause: l });
    if (
      ((u = dn(u, i)),
      zl === null ? (zl = [u]) : zl.push(u),
      ut !== 4 && (ut = 2),
      n === null)
    )
      return !0;
    (l = dn(l, i)), (i = n);
    do {
      switch (i.tag) {
        case 3:
          return (
            (i.flags |= 65536),
            (e = s & -s),
            (i.lanes |= e),
            (e = nd(i.stateNode, l, e)),
            Lu(i, e),
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
              (s = Ep(s)),
              xp(s, e, i, l),
              Lu(i, s),
              !1
            );
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var Tp = Error(o(461)),
    _t = !1;
  function Ct(e, n, i, l) {
    n.child = e === null ? mp(n, null, i, l) : br(n, e.child, i, l);
  }
  function Sp(e, n, i, l, s) {
    i = i.render;
    var u = n.ref;
    if ("ref" in l) {
      var m = {};
      for (var y in l) y !== "ref" && (m[y] = l[y]);
    } else m = l;
    return (
      Ri(n),
      (l = Bu(e, n, i, m, u, s)),
      (y = Hu()),
      e !== null && !_t
        ? (Pu(e, n, s), sa(e, n, s))
        : ($e && y && Eu(n), (n.flags |= 1), Ct(e, n, l, s), n.child)
    );
  }
  function Cp(e, n, i, l, s) {
    if (e === null) {
      var u = i.type;
      return typeof u == "function" &&
        !bu(u) &&
        u.defaultProps === void 0 &&
        i.compare === null
        ? ((n.tag = 15), (n.type = u), Ap(e, n, u, l, s))
        : ((e = es(i.type, null, l, n, n.mode, s)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((u = e.child), !ud(e, s))) {
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
        if (((_t = !1), (n.pendingProps = l = u), ud(e, s)))
          (e.flags & 131072) !== 0 && (_t = !0);
        else return (n.lanes = e.lanes), sa(e, n, s);
    }
    return ad(e, n, i, l, s);
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
          e !== null && rs(n, u !== null ? u.cachePool : null),
          u !== null ? Am(n, u) : ju(),
          pp(n);
      else
        return (
          (n.lanes = n.childLanes = 536870912),
          Op(e, n, u !== null ? u.baseLanes | i : i, i)
        );
    } else
      u !== null
        ? (rs(n, u.cachePool), Am(n, u), Ua(), (n.memoizedState = null))
        : (e !== null && rs(n, null), ju(), Ua());
    return Ct(e, n, s, i), n.child;
  }
  function Op(e, n, i, l) {
    var s = Du();
    return (
      (s = s === null ? null : { parent: bt._currentValue, pool: s }),
      (n.memoizedState = { baseLanes: i, cachePool: s }),
      e !== null && rs(n, null),
      ju(),
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
  function ad(e, n, i, l, s) {
    return (
      Ri(n),
      (i = Bu(e, n, i, l, void 0, s)),
      (l = Hu()),
      e !== null && !_t
        ? (Pu(e, n, s), sa(e, n, s))
        : ($e && l && Eu(n), (n.flags |= 1), Ct(e, n, i, s), n.child)
    );
  }
  function Dp(e, n, i, l, s, u) {
    return (
      Ri(n),
      (n.updateQueue = null),
      (i = Om(n, l, i, s)),
      Rm(e),
      (l = Hu()),
      e !== null && !_t
        ? (Pu(e, n, u), sa(e, n, u))
        : ($e && l && Eu(n), (n.flags |= 1), Ct(e, n, i, u), n.child)
    );
  }
  function Np(e, n, i, l, s) {
    if ((Ri(n), n.stateNode === null)) {
      var u = cr,
        m = i.contextType;
      typeof m == "object" && m !== null && (u = Dt(m)),
        (u = new i(l, u)),
        (n.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = td),
        (n.stateNode = u),
        (u._reactInternals = n),
        (u = n.stateNode),
        (u.props = l),
        (u.state = n.memoizedState),
        (u.refs = {}),
        Mu(n),
        (m = i.contextType),
        (u.context = typeof m == "object" && m !== null ? Dt(m) : cr),
        (u.state = n.memoizedState),
        (m = i.getDerivedStateFromProps),
        typeof m == "function" && (ed(n, i, m, l), (u.state = n.memoizedState)),
        typeof i.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((m = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          m !== u.state && td.enqueueReplaceState(u, u.state, null),
          Tl(n, l, u, s),
          xl(),
          (u.state = n.memoizedState)),
        typeof u.componentDidMount == "function" && (n.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      u = n.stateNode;
      var y = n.memoizedProps,
        _ = Ni(i, y);
      u.props = _;
      var k = u.context,
        V = i.contextType;
      (m = cr), typeof V == "object" && V !== null && (m = Dt(V));
      var Y = i.getDerivedStateFromProps;
      (V =
        typeof Y == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (y = n.pendingProps !== y),
        V ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((y || k !== m) && yp(n, u, l, m)),
        (Da = !1);
      var U = n.memoizedState;
      (u.state = U),
        Tl(n, l, u, s),
        xl(),
        (k = n.memoizedState),
        y || U !== k || Da
          ? (typeof Y == "function" && (ed(n, i, Y, l), (k = n.memoizedState)),
            (_ = Da || gp(n, i, _, l, U, k, m))
              ? (V ||
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
        ku(e, n),
        (m = n.memoizedProps),
        (V = Ni(i, m)),
        (u.props = V),
        (Y = n.pendingProps),
        (U = u.context),
        (k = i.contextType),
        (_ = cr),
        typeof k == "object" && k !== null && (_ = Dt(k)),
        (y = i.getDerivedStateFromProps),
        (k =
          typeof y == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((m !== Y || U !== _) && yp(n, u, l, _)),
        (Da = !1),
        (U = n.memoizedState),
        (u.state = U),
        Tl(n, l, u, s),
        xl();
      var j = n.memoizedState;
      m !== Y ||
      U !== j ||
      Da ||
      (e !== null && e.dependencies !== null && as(e.dependencies))
        ? (typeof y == "function" && (ed(n, i, y, l), (j = n.memoizedState)),
          (V =
            Da ||
            gp(n, i, V, l, U, j, _) ||
            (e !== null && e.dependencies !== null && as(e.dependencies)))
            ? (k ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(l, j, _),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(l, j, _)),
              typeof u.componentDidUpdate == "function" && (n.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (m === e.memoizedProps && U === e.memoizedState) ||
                (n.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (m === e.memoizedProps && U === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = l),
              (n.memoizedState = j)),
          (u.props = l),
          (u.state = j),
          (u.context = _),
          (l = V))
        : (typeof u.componentDidUpdate != "function" ||
            (m === e.memoizedProps && U === e.memoizedState) ||
            (n.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (m === e.memoizedProps && U === e.memoizedState) ||
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
  var id = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function rd(e) {
    return { baseLanes: e, cachePool: bm() };
  }
  function ld(e, n, i) {
    return (e = e !== null ? e.childLanes & ~i : 0), n && (e |= gn), e;
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
        if ((s ? La(n) : Ua(), $e)) {
          var y = ct,
            _;
          if ((_ = y)) {
            e: {
              for (_ = y, y = Bn; _.nodeType !== 8; ) {
                if (!y) {
                  y = null;
                  break e;
                }
                if (((_ = Dn(_.nextSibling)), _ === null)) {
                  y = null;
                  break e;
                }
              }
              y = _;
            }
            y !== null
              ? ((n.memoizedState = {
                  dehydrated: y,
                  treeContext: xi !== null ? { id: na, overflow: aa } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (_ = Ft(18, null, null, 0)),
                (_.stateNode = y),
                (_.return = n),
                (n.child = _),
                (Ut = n),
                (ct = null),
                (_ = !0))
              : (_ = !1);
          }
          _ || Ci(n);
        }
        if (
          ((y = n.memoizedState),
          y !== null && ((y = y.dehydrated), y !== null))
        )
          return qd(y) ? (n.lanes = 32) : (n.lanes = 536870912), null;
        oa(n);
      }
      return (
        (y = l.children),
        (l = l.fallback),
        s
          ? (Ua(),
            (s = n.mode),
            (y = xs({ mode: "hidden", children: y }, s)),
            (l = Ei(l, s, i, null)),
            (y.return = n),
            (l.return = n),
            (y.sibling = l),
            (n.child = y),
            (s = n.child),
            (s.memoizedState = rd(i)),
            (s.childLanes = ld(e, m, i)),
            (n.memoizedState = id),
            l)
          : (La(n), od(n, y))
      );
    }
    if (
      ((_ = e.memoizedState), _ !== null && ((y = _.dehydrated), y !== null))
    ) {
      if (u)
        n.flags & 256
          ? (La(n), (n.flags &= -257), (n = sd(e, n, i)))
          : n.memoizedState !== null
          ? (Ua(), (n.child = e.child), (n.flags |= 128), (n = null))
          : (Ua(),
            (s = l.fallback),
            (y = n.mode),
            (l = xs({ mode: "visible", children: l.children }, y)),
            (s = Ei(s, y, i, null)),
            (s.flags |= 2),
            (l.return = n),
            (s.return = n),
            (l.sibling = s),
            (n.child = l),
            br(n, e.child, null, i),
            (l = n.child),
            (l.memoizedState = rd(i)),
            (l.childLanes = ld(e, m, i)),
            (n.memoizedState = id),
            (n = s));
      else if ((La(n), qd(y))) {
        if (((m = y.nextSibling && y.nextSibling.dataset), m)) var k = m.dgst;
        (m = k),
          (l = Error(o(419))),
          (l.stack = ""),
          (l.digest = m),
          gl({ value: l, source: null, stack: null }),
          (n = sd(e, n, i));
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
          throw ((_.retryLane = l), sr(e, l), tn(m, e, l), Tp);
        y.data === "$?" || Cd(), (n = sd(e, n, i));
      } else
        y.data === "$?"
          ? ((n.flags |= 192), (n.child = e.child), (n = null))
          : ((e = _.treeContext),
            (ct = Dn(y.nextSibling)),
            (Ut = n),
            ($e = !0),
            (Si = null),
            (Bn = !1),
            e !== null &&
              ((hn[mn++] = na),
              (hn[mn++] = aa),
              (hn[mn++] = xi),
              (na = e.id),
              (aa = e.overflow),
              (xi = n)),
            (n = od(n, l.children)),
            (n.flags |= 4096));
      return n;
    }
    return s
      ? (Ua(),
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
          ? (y = rd(i))
          : ((_ = y.cachePool),
            _ !== null
              ? ((k = bt._currentValue),
                (_ = _.parent !== k ? { parent: k, pool: k } : _))
              : (_ = bm()),
            (y = { baseLanes: y.baseLanes | i, cachePool: _ })),
        (s.memoizedState = y),
        (s.childLanes = ld(e, m, i)),
        (n.memoizedState = id),
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
  function od(e, n) {
    return (
      (n = xs({ mode: "visible", children: n }, e.mode)),
      (n.return = e),
      (e.child = n)
    );
  }
  function xs(e, n) {
    return (
      (e = Ft(22, e, null, n)),
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
  function sd(e, n, i) {
    return (
      br(n, e.child, null, i),
      (e = od(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function Lp(e, n, i) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), Cu(e.return, n, i);
  }
  function cd(e, n, i, l, s) {
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
  function Up(e, n, i) {
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
            e !== null && bs(e) === null && (s = i),
            (i = i.sibling);
        (i = s),
          i === null
            ? ((s = n.child), (n.child = null))
            : ((s = i.sibling), (i.sibling = null)),
          cd(n, !1, s, i, u);
        break;
      case "backwards":
        for (i = null, s = n.child, n.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && bs(e) === null)) {
            n.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = i), (i = s), (s = e);
        }
        cd(n, !0, i, null, u);
        break;
      case "together":
        cd(n, !1, null, null, void 0);
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
  function ud(e, n) {
    return (e.lanes & n) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && as(e)));
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
          if (l) return Up(e, n, i);
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
  function jp(e, n, i) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps) _t = !0;
      else {
        if (!ud(e, i) && (n.flags & 128) === 0) return (_t = !1), n2(e, n, i);
        _t = (e.flags & 131072) !== 0;
      }
    else (_t = !1), $e && (n.flags & 1048576) !== 0 && fm(n, ns, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        e: {
          e = n.pendingProps;
          var l = n.elementType,
            s = l._init;
          if (((l = s(l._payload)), (n.type = l), typeof l == "function"))
            bu(l)
              ? ((e = Ni(l, e)), (n.tag = 1), (n = Np(null, n, l, e, i)))
              : ((n.tag = 0), (n = ad(null, n, l, e, i)));
          else {
            if (l != null) {
              if (((s = l.$$typeof), s === F)) {
                (n.tag = 11), (n = Sp(null, n, l, e, i));
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
        return ad(e, n, n.type, n.pendingProps, i);
      case 1:
        return (l = n.type), (s = Ni(l, n.pendingProps)), Np(e, n, l, s, i);
      case 3:
        e: {
          if ((et(n, n.stateNode.containerInfo), e === null))
            throw Error(o(387));
          l = n.pendingProps;
          var u = n.memoizedState;
          (s = u.element), ku(e, n), Tl(n, l, null, i);
          var m = n.memoizedState;
          if (
            ((l = m.cache),
            Oa(n, bt, l),
            l !== u.cache && Au(n, [bt], i, !0),
            xl(),
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
              (s = dn(Error(o(424)), n)), gl(s), (n = Mp(e, n, l, i));
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
                ct = Dn(e.firstChild),
                  Ut = n,
                  $e = !0,
                  Si = null,
                  Bn = !0,
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
                (l = zs(he.current).createElement(i)),
                (l[X] = n),
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
            (Ut = n),
            (Bn = !0),
            (s = ct),
            Ga(n.type) ? ((Gd = s), (ct = Dn(l.firstChild))) : (ct = s)),
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
              ((l = D2(l, n.type, n.pendingProps, Bn)),
              l !== null
                ? ((n.stateNode = l),
                  (Ut = n),
                  (ct = Dn(l.firstChild)),
                  (Bn = !1),
                  (s = !0))
                : (s = !1)),
            s || Ci(n)),
          vt(n),
          (s = n.type),
          (u = n.pendingProps),
          (m = e !== null ? e.memoizedProps : null),
          (l = u.children),
          Hd(s, u) ? (l = null) : m !== null && Hd(s, m) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((s = Bu(e, n, Kw, null, null, i)), (Yl._currentValue = s)),
          Es(e, n),
          Ct(e, n, l, i),
          n.child
        );
      case 6:
        return (
          e === null &&
            $e &&
            ((e = i = ct) &&
              ((i = N2(i, n.pendingProps, Bn)),
              i !== null
                ? ((n.stateNode = i), (Ut = n), (ct = null), (e = !0))
                : (e = !1)),
            e || Ci(n)),
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
        return Sp(e, n, n.type, n.pendingProps, i);
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
          Ri(n),
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
        return Up(e, n, i);
      case 31:
        return (
          (l = n.pendingProps),
          (i = n.mode),
          (l = { mode: l.mode, children: l.children }),
          e === null
            ? ((i = xs(l, i)),
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
          Ri(n),
          (l = Dt(bt)),
          e === null
            ? ((s = Du()),
              s === null &&
                ((s = tt),
                (u = Ru()),
                (s.pooledCache = u),
                u.refCount++,
                u !== null && (s.pooledCacheLanes |= i),
                (s = u)),
              (n.memoizedState = { parent: l, cache: s }),
              Mu(n),
              Oa(n, bt, s))
            : ((e.lanes & i) !== 0 && (ku(e, n), Tl(n, null, null, i), xl()),
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
                  l !== s.cache && Au(n, [bt], i, !0))),
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
        ((n = pn.current),
        n !== null &&
          ((Ue & 4194048) === Ue
            ? Hn !== null
            : ((Ue & 62914560) !== Ue && (Ue & 536870912) === 0) || n !== Hn))
      )
        throw ((_l = Nu), wm);
      e.flags |= 8192;
    }
  }
  function Ts(e, n) {
    n !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((n = e.tag !== 22 ? Ho() : 536870912), (e.lanes |= n), (xr |= n));
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
    switch ((xu(n), n.tag)) {
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
          jn(),
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
        xn(n), (i = he.current);
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
        if ((xn(n), (i = n.type), e !== null && n.stateNode != null))
          e.memoizedProps !== l && ca(n);
        else {
          if (!l) {
            if (n.stateNode === null) throw Error(o(166));
            return st(n), null;
          }
          if (((e = se.current), ml(n))) hm(n);
          else {
            switch (((s = zs(he.current)), e)) {
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
            (e[X] = n), (e[J] = l);
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
              (s = Ut),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  l = s.memoizedProps;
              }
            (e[X] = n),
              (e = !!(
                e.nodeValue === i ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Dg(e.nodeValue, i)
              )),
              e || Ci(n);
          } else (e = zs(e).createTextNode(l)), (e[X] = n), (n.stateNode = e);
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
              s[X] = n;
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
        return jn(), e === null && Ud(n.stateNode.containerInfo), st(n), null;
      case 10:
        return ra(n.type), st(n), null;
      case 19:
        if ((te(wt), (s = n.memoizedState), s === null)) return st(n), null;
        if (((l = (n.flags & 128) !== 0), (u = s.rendering), u === null))
          if (l) Nl(s, !1);
          else {
            if (ut !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((u = bs(e)), u !== null)) {
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
              Kt() > As &&
              ((n.flags |= 128), (l = !0), Nl(s, !1), (n.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = bs(u)), e !== null)) {
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
              2 * Kt() - s.renderingStartTime > As &&
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
            (s.renderingStartTime = Kt()),
            (n.sibling = null),
            (e = wt.current),
            W(wt, l ? (e & 1) | 2 : e & 1),
            n)
          : (st(n), null);
      case 22:
      case 23:
        return (
          oa(n),
          zu(),
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
          e !== null && te(Oi),
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
    switch ((xu(n), n.tag)) {
      case 1:
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          ra(bt),
          jn(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((n.flags = (e & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return xn(n), null;
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
        return jn(), null;
      case 10:
        return ra(n.type), null;
      case 22:
      case 23:
        return (
          oa(n),
          zu(),
          e !== null && te(Oi),
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
    switch ((xu(n), n.tag)) {
      case 3:
        ra(bt), jn();
        break;
      case 26:
      case 27:
      case 5:
        xn(n);
        break;
      case 4:
        jn();
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
        oa(n), zu(), e !== null && te(Oi);
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
  function ja(e, n, i) {
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
              } catch (V) {
                Je(s, _, V);
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (V) {
      Je(n, n.return, V);
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
    (i.props = Ni(e.type, e.memoizedProps)), (i.state = e.memoizedState);
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
  function Pn(e, n) {
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
  function dd(e, n, i) {
    try {
      var l = e.stateNode;
      S2(l, e.type, i, n), (l[J] = n);
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
  function fd(e) {
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
  function hd(e, n, i) {
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
            i != null || n.onclick !== null || (n.onclick = js));
    else if (
      l !== 4 &&
      (l === 27 && Ga(e.type) && ((i = e.stateNode), (n = null)),
      (e = e.child),
      e !== null)
    )
      for (hd(e, n, i), e = e.sibling; e !== null; )
        hd(e, n, i), (e = e.sibling);
  }
  function Ss(e, n, i) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), n ? i.insertBefore(e, n) : i.appendChild(e);
    else if (
      l !== 4 &&
      (l === 27 && Ga(e.type) && (i = e.stateNode), (e = e.child), e !== null)
    )
      for (Ss(e, n, i), e = e.sibling; e !== null; )
        Ss(e, n, i), (e = e.sibling);
  }
  function qp(e) {
    var n = e.stateNode,
      i = e.memoizedProps;
    try {
      for (var l = e.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      Rt(n, l, i), (n[X] = e), (n[J] = i);
    } catch (u) {
      Je(e, e.return, u);
    }
  }
  var ua = !1,
    ft = !1,
    md = !1,
    Gp = typeof WeakSet == "function" ? WeakSet : Set,
    Et = null;
  function r2(e, n) {
    if (((e = e.containerInfo), (Id = qs), (e = tm(e)), fu(e))) {
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
              V = 0,
              Y = e,
              U = null;
            t: for (;;) {
              for (
                var j;
                Y !== i || (s !== 0 && Y.nodeType !== 3) || (y = m + s),
                  Y !== u || (l !== 0 && Y.nodeType !== 3) || (_ = m + l),
                  Y.nodeType === 3 && (m += Y.nodeValue.length),
                  (j = Y.firstChild) !== null;

              )
                (U = Y), (Y = j);
              for (;;) {
                if (Y === e) break t;
                if (
                  (U === i && ++k === s && (y = m),
                  U === u && ++V === l && (_ = m),
                  (j = Y.nextSibling) !== null)
                )
                  break;
                (Y = U), (U = Y.parentNode);
              }
              Y = j;
            }
            i = y === -1 || _ === -1 ? null : { start: y, end: _ };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      Bd = { focusedElem: e, selectionRange: i }, qs = !1, Et = n;
      Et !== null;

    )
      if (
        ((n = Et), (e = n.child), (n.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = n), (Et = e);
      else
        for (; Et !== null; ) {
          switch (((n = Et), (u = n.alternate), (e = n.flags), n.tag)) {
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
                  var we = Ni(i.type, s, i.elementType === i.type);
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
                  Vd(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Vd(e);
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
            (e.return = n.return), (Et = e);
            break;
          }
          Et = n.return;
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
            var s = Ni(i.type, n.memoizedProps);
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
        ft || Pn(i, n),
          da(e, n, i),
          i.memoizedState
            ? i.memoizedState.count--
            : i.stateNode && ((i = i.stateNode), i.parentNode.removeChild(i));
        break;
      case 27:
        ft || Pn(i, n);
        var l = rt,
          s = $t;
        Ga(i.type) && ((rt = i.stateNode), ($t = !1)),
          da(e, n, i),
          Vl(i.stateNode),
          (rt = l),
          ($t = s);
        break;
      case 5:
        ft || Pn(i, n);
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
              Ug(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                i.stateNode
              ),
              Fl(e))
            : Ug(rt, i.stateNode));
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
        ft || ja(2, i, n), ft || ja(4, i, n), da(e, n, i);
        break;
      case 1:
        ft ||
          (Pn(i, n),
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
        Fl(e);
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
  function pd(e, n) {
    var i = l2(e);
    n.forEach(function (l) {
      var s = p2.bind(null, e, l);
      i.has(l) || (i.add(l), l.then(s, s));
    });
  }
  function Zt(e, n) {
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
      for (n = n.child; n !== null; ) Qp(n, e), (n = n.sibling);
  }
  var On = null;
  function Qp(e, n) {
    var i = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Zt(n, e),
          Jt(e),
          l & 4 && (ja(3, e, e.return), Ml(3, e), ja(5, e, e.return));
        break;
      case 1:
        Zt(n, e),
          Jt(e),
          l & 512 && (ft || i === null || Pn(i, i.return)),
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
        var s = On;
        if (
          (Zt(n, e),
          Jt(e),
          l & 512 && (ft || i === null || Pn(i, i.return)),
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
                          u[X] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = s.createElement(l)),
                          s.head.insertBefore(
                            u,
                            s.querySelector("head > title")
                          )),
                        Rt(u, l, i),
                        (u[X] = e),
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
                  (u[X] = e), He(u), (l = u);
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
                dd(e, e.memoizedProps, i.memoizedProps);
        }
        break;
      case 27:
        Zt(n, e),
          Jt(e),
          l & 512 && (ft || i === null || Pn(i, i.return)),
          i !== null && l & 4 && dd(e, e.memoizedProps, i.memoizedProps);
        break;
      case 5:
        if (
          (Zt(n, e),
          Jt(e),
          l & 512 && (ft || i === null || Pn(i, i.return)),
          e.flags & 32)
        ) {
          s = e.stateNode;
          try {
            tr(s, "");
          } catch (j) {
            Je(e, e.return, j);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((s = e.memoizedProps), dd(e, s, i !== null ? i.memoizedProps : s)),
          l & 1024 && (md = !0);
        break;
      case 6:
        if ((Zt(n, e), Jt(e), l & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (l = e.memoizedProps), (i = e.stateNode);
          try {
            i.nodeValue = l;
          } catch (j) {
            Je(e, e.return, j);
          }
        }
        break;
      case 3:
        if (
          ((Hs = null),
          (s = On),
          (On = Is(n.containerInfo)),
          Zt(n, e),
          (On = s),
          Jt(e),
          l & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            Fl(n.containerInfo);
          } catch (j) {
            Je(e, e.return, j);
          }
        md && ((md = !1), Fp(e));
        break;
      case 4:
        (l = On),
          (On = Is(e.stateNode.containerInfo)),
          Zt(n, e),
          Jt(e),
          (On = l);
        break;
      case 12:
        Zt(n, e), Jt(e);
        break;
      case 13:
        Zt(n, e),
          Jt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (i !== null && i.memoizedState !== null) &&
            (_d = Kt()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), pd(e, l)));
        break;
      case 22:
        s = e.memoizedState !== null;
        var _ = i !== null && i.memoizedState !== null,
          k = ua,
          V = ft;
        if (
          ((ua = k || s),
          (ft = V || _),
          Zt(n, e),
          (ft = V),
          (ua = k),
          Jt(e),
          l & 8192)
        )
          e: for (
            n = e.stateNode,
              n._visibility = s ? n._visibility & -2 : n._visibility | 1,
              s && (i === null || _ || ua || ft || Mi(e)),
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
                    var Y = _.memoizedProps.style,
                      U =
                        Y != null && Y.hasOwnProperty("display")
                          ? Y.display
                          : null;
                    y.style.display =
                      U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                  }
                } catch (j) {
                  Je(_, _.return, j);
                }
              }
            } else if (n.tag === 6) {
              if (i === null) {
                _ = n;
                try {
                  _.stateNode.nodeValue = s ? "" : _.memoizedProps;
                } catch (j) {
                  Je(_, _.return, j);
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
            i !== null && ((l.retryQueue = null), pd(e, i))));
        break;
      case 19:
        Zt(n, e),
          Jt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), pd(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Zt(n, e), Jt(e);
    }
  }
  function Jt(e) {
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
              u = fd(e);
            Ss(e, u, s);
            break;
          case 5:
            var m = i.stateNode;
            i.flags & 32 && (tr(m, ""), (i.flags &= -33));
            var y = fd(e);
            Ss(e, y, m);
            break;
          case 3:
          case 4:
            var _ = i.stateNode.containerInfo,
              k = fd(e);
            hd(e, k, _);
            break;
          default:
            throw Error(o(161));
        }
      } catch (V) {
        Je(e, e.return, V);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Fp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Fp(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function za(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) $p(e, n.alternate, n), (n = n.sibling);
  }
  function Mi(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ja(4, n, n.return), Mi(n);
          break;
        case 1:
          Pn(n, n.return);
          var i = n.stateNode;
          typeof i.componentWillUnmount == "function" && Hp(n, n.return, i),
            Mi(n);
          break;
        case 27:
          Vl(n.stateNode);
        case 26:
        case 5:
          Pn(n, n.return), Mi(n);
          break;
        case 22:
          n.memoizedState === null && Mi(n);
          break;
        case 30:
          Mi(n);
          break;
        default:
          Mi(n);
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
                  Sm(_[s], y);
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
  function gd(e, n) {
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
  function yd(e, n) {
    (e = null),
      n.alternate !== null && (e = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== e && (n.refCount++, e != null && vl(e));
  }
  function Vn(e, n, i, l) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) Zp(e, n, i, l), (n = n.sibling);
  }
  function Zp(e, n, i, l) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Vn(e, n, i, l), s & 2048 && Ml(9, n);
        break;
      case 1:
        Vn(e, n, i, l);
        break;
      case 3:
        Vn(e, n, i, l),
          s & 2048 &&
            ((e = null),
            n.alternate !== null && (e = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== e && (n.refCount++, e != null && vl(e)));
        break;
      case 12:
        if (s & 2048) {
          Vn(e, n, i, l), (e = n.stateNode);
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
        } else Vn(e, n, i, l);
        break;
      case 13:
        Vn(e, n, i, l);
        break;
      case 23:
        break;
      case 22:
        (u = n.stateNode),
          (m = n.alternate),
          n.memoizedState !== null
            ? u._visibility & 2
              ? Vn(e, n, i, l)
              : Ll(e, n)
            : u._visibility & 2
            ? Vn(e, n, i, l)
            : ((u._visibility |= 2),
              wr(e, n, i, l, (n.subtreeFlags & 10256) !== 0)),
          s & 2048 && gd(m, n);
        break;
      case 24:
        Vn(e, n, i, l), s & 2048 && yd(n.alternate, n);
        break;
      default:
        Vn(e, n, i, l);
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
          var V = m.stateNode;
          m.memoizedState !== null
            ? V._visibility & 2
              ? wr(u, m, y, _, s)
              : Ll(u, m)
            : ((V._visibility |= 2), wr(u, m, y, _, s)),
            s && k & 2048 && gd(m.alternate, m);
          break;
        case 24:
          wr(u, m, y, _, s), s && k & 2048 && yd(m.alternate, m);
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
            Ll(i, l), s & 2048 && gd(l.alternate, l);
            break;
          case 24:
            Ll(i, l), s & 2048 && yd(l.alternate, l);
            break;
          default:
            Ll(i, l);
        }
        n = n.sibling;
      }
  }
  var Ul = 8192;
  function _r(e) {
    if (e.subtreeFlags & Ul)
      for (e = e.child; e !== null; ) Jp(e), (e = e.sibling);
  }
  function Jp(e) {
    switch (e.tag) {
      case 26:
        _r(e),
          e.flags & Ul &&
            e.memoizedState !== null &&
            $2(On, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        _r(e);
        break;
      case 3:
      case 4:
        var n = On;
        (On = Is(e.stateNode.containerInfo)), _r(e), (On = n);
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = Ul), (Ul = 16777216), _r(e), (Ul = n))
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
  function jl(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var l = n[i];
          (Et = l), tg(l, e);
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
        jl(e), e.flags & 2048 && ja(9, e, e.return);
        break;
      case 3:
        jl(e);
        break;
      case 12:
        jl(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null &&
        n._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((n._visibility &= -3), Cs(e))
          : jl(e);
        break;
      default:
        jl(e);
    }
  }
  function Cs(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var i = 0; i < n.length; i++) {
          var l = n[i];
          (Et = l), tg(l, e);
        }
      Wp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((n = e), n.tag)) {
        case 0:
        case 11:
        case 15:
          ja(8, n, n.return), Cs(n);
          break;
        case 22:
          (i = n.stateNode),
            i._visibility & 2 && ((i._visibility &= -3), Cs(n));
          break;
        default:
          Cs(n);
      }
      e = e.sibling;
    }
  }
  function tg(e, n) {
    for (; Et !== null; ) {
      var i = Et;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ja(8, i, n);
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
      if (((l = i.child), l !== null)) (l.return = i), (Et = l);
      else
        e: for (i = e; Et !== null; ) {
          l = Et;
          var s = l.sibling,
            u = l.return;
          if ((Yp(l), l === i)) {
            Et = null;
            break e;
          }
          if (s !== null) {
            (s.return = u), (Et = s);
            break e;
          }
          Et = u;
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
    Ue = 0,
    Ke = 0,
    Wt = null,
    Ba = !1,
    Er = !1,
    vd = !1,
    fa = 0,
    ut = 0,
    Ha = 0,
    ki = 0,
    bd = 0,
    gn = 0,
    xr = 0,
    zl = null,
    Yt = null,
    wd = !1,
    _d = 0,
    As = 1 / 0,
    Rs = null,
    Pa = null,
    At = 0,
    Va = null,
    Tr = null,
    Sr = 0,
    Ed = 0,
    xd = null,
    ng = null,
    Il = 0,
    Td = null;
  function en() {
    if ((Xe & 2) !== 0 && Ue !== 0) return Ue & -Ue;
    if (L.T !== null) {
      var e = fr;
      return e !== 0 ? e : Nd();
    }
    return x();
  }
  function ag() {
    gn === 0 && (gn = (Ue & 536870912) === 0 || $e ? Ji() : 536870912);
    var e = pn.current;
    return e !== null && (e.flags |= 32), gn;
  }
  function tn(e, n, i) {
    ((e === tt && (Ke === 2 || Ke === 9)) || e.cancelPendingCommit !== null) &&
      (Cr(e, 0), qa(e, Ue, gn, !1)),
      pi(e, i),
      ((Xe & 2) === 0 || e !== tt) &&
        (e === tt &&
          ((Xe & 2) === 0 && (ki |= i), ut === 4 && qa(e, Ue, gn, !1)),
        qn(e));
  }
  function ig(e, n, i) {
    if ((Xe & 6) !== 0) throw Error(o(327));
    var l = (!i && (n & 124) === 0 && (n & e.expiredLanes) === 0) || In(e, n),
      s = l ? d2(e, n) : Ad(e, n, !0),
      u = l;
    do {
      if (s === 0) {
        Er && !l && qa(e, n, 0, !1);
        break;
      } else {
        if (((i = e.current.alternate), u && !c2(i))) {
          (s = Ad(e, n, !1)), (u = !1);
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
              if ((_ && (Cr(y, m).flags |= 256), (m = Ad(y, m, !1)), m !== 2)) {
                if (vd && !_) {
                  (y.errorRecoveryDisabledLanes |= u), (ki |= u), (s = 4);
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
              qa(l, n, gn, !Ba);
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
          if ((n & 62914560) === n && ((s = _d + 300 - Kt()), 10 < s)) {
            if ((qa(l, n, gn, !Ba), mi(l, 0, !0) !== 0)) break e;
            l.timeoutHandle = kg(
              rg.bind(null, l, i, Yt, Rs, wd, n, gn, ki, xr, Ba, u, 2, -0, 0),
              s
            );
            break e;
          }
          rg(l, i, Yt, Rs, wd, n, gn, ki, xr, Ba, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    qn(e);
  }
  function rg(e, n, i, l, s, u, m, y, _, k, V, Y, U, j) {
    if (
      ((e.timeoutHandle = -1),
      (Y = n.subtreeFlags),
      (Y & 8192 || (Y & 16785408) === 16785408) &&
        (($l = { stylesheets: null, count: 0, unsuspend: G2 }),
        Jp(n),
        (Y = Y2()),
        Y !== null))
    ) {
      (e.cancelPendingCommit = Y(
        fg.bind(null, e, n, u, i, l, s, m, y, _, V, 1, U, j)
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
    (n &= ~bd),
      (n &= ~ki),
      (e.suspendedLanes |= n),
      (e.pingedLanes &= ~n),
      l && (e.warmLanes |= n),
      (l = e.expirationTimes);
    for (var s = n; 0 < s; ) {
      var u = 31 - St(s),
        m = 1 << u;
      (l[u] = -1), (s &= ~m);
    }
    i !== 0 && gi(e, i, n);
  }
  function Os() {
    return (Xe & 6) === 0 ? (Bl(0), !1) : !0;
  }
  function Sd() {
    if (De !== null) {
      if (Ke === 0) var e = De.return;
      else (e = De), (ia = Ai = null), Vu(e), (vr = null), (Ol = 0), (e = De);
      for (; e !== null; ) Ip(e.alternate, e), (e = e.return);
      De = null;
    }
  }
  function Cr(e, n) {
    var i = e.timeoutHandle;
    i !== -1 && ((e.timeoutHandle = -1), A2(i)),
      (i = e.cancelPendingCommit),
      i !== null && ((e.cancelPendingCommit = null), i()),
      Sd(),
      (tt = e),
      (De = i = ta(e.current, null)),
      (Ue = n),
      (Ke = 0),
      (Wt = null),
      (Ba = !1),
      (Er = In(e, n)),
      (vd = !1),
      (xr = gn = bd = ki = Ha = ut = 0),
      (Yt = zl = null),
      (wd = !1),
      (n & 8) !== 0 && (n |= n & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= n; 0 < l; ) {
        var s = 31 - St(l),
          u = 1 << s;
        (n |= e[s]), (l &= ~u);
      }
    return (fa = n), Zo(), i;
  }
  function lg(e, n) {
    (Te = null),
      (L.H = gs),
      n === wl || n === ls
        ? ((n = xm()), (Ke = 3))
        : n === wm
        ? ((n = xm()), (Ke = 4))
        : (Ke =
            n === Tp
              ? 8
              : n !== null &&
                typeof n == "object" &&
                typeof n.then == "function"
              ? 6
              : 1),
      (Wt = n),
      De === null && ((ut = 1), _s(e, dn(n, e.current)));
  }
  function og() {
    var e = L.H;
    return (L.H = gs), e === null ? gs : e;
  }
  function sg() {
    var e = L.A;
    return (L.A = o2), e;
  }
  function Cd() {
    (ut = 4),
      Ba || ((Ue & 4194048) !== Ue && pn.current !== null) || (Er = !0),
      ((Ha & 134217727) === 0 && (ki & 134217727) === 0) ||
        tt === null ||
        qa(tt, Ue, gn, !1);
  }
  function Ad(e, n, i) {
    var l = Xe;
    Xe |= 2;
    var s = og(),
      u = sg();
    (tt !== e || Ue !== n) && ((Rs = null), Cr(e, n)), (n = !1);
    var m = ut;
    e: do
      try {
        if (Ke !== 0 && De !== null) {
          var y = De,
            _ = Wt;
          switch (Ke) {
            case 8:
              Sd(), (m = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              pn.current === null && (n = !0);
              var k = Ke;
              if (((Ke = 0), (Wt = null), Ar(e, y, _, k), i && Er)) {
                m = 0;
                break e;
              }
              break;
            default:
              (k = Ke), (Ke = 0), (Wt = null), Ar(e, y, _, k);
          }
        }
        u2(), (m = ut);
        break;
      } catch (V) {
        lg(e, V);
      }
    while (!0);
    return (
      n && e.shellSuspendCounter++,
      (ia = Ai = null),
      (Xe = l),
      (L.H = s),
      (L.A = u),
      De === null && ((tt = null), (Ue = 0), Zo()),
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
    tt !== e || Ue !== n
      ? ((Rs = null), (As = Kt() + 500), Cr(e, n))
      : (Er = In(e, n));
    e: do
      try {
        if (Ke !== 0 && De !== null) {
          n = De;
          var u = Wt;
          t: switch (Ke) {
            case 1:
              (Ke = 0), (Wt = null), Ar(e, n, u, 1);
              break;
            case 2:
            case 9:
              if (_m(u)) {
                (Ke = 0), (Wt = null), ug(n);
                break;
              }
              (n = function () {
                (Ke !== 2 && Ke !== 9) || tt !== e || (Ke = 7), qn(e);
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
                ? ((Ke = 0), (Wt = null), ug(n))
                : ((Ke = 0), (Wt = null), Ar(e, n, u, 7));
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
                    (Ke = 0), (Wt = null);
                    var _ = y.sibling;
                    if (_ !== null) De = _;
                    else {
                      var k = y.return;
                      k !== null ? ((De = k), Ds(k)) : (De = null);
                    }
                    break t;
                  }
              }
              (Ke = 0), (Wt = null), Ar(e, n, u, 5);
              break;
            case 6:
              (Ke = 0), (Wt = null), Ar(e, n, u, 6);
              break;
            case 8:
              Sd(), (ut = 6);
              break e;
            default:
              throw Error(o(462));
          }
        }
        f2();
        break;
      } catch (V) {
        lg(e, V);
      }
    while (!0);
    return (
      (ia = Ai = null),
      (L.H = l),
      (L.A = s),
      (Xe = i),
      De !== null ? 0 : ((tt = null), (Ue = 0), Zo(), ut)
    );
  }
  function f2() {
    for (; De !== null && !Xc(); ) cg(De);
  }
  function cg(e) {
    var n = jp(e.alternate, e, fa);
    (e.memoizedProps = e.pendingProps), n === null ? Ds(e) : (De = n);
  }
  function ug(e) {
    var n = e,
      i = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Dp(i, n, n.pendingProps, n.type, void 0, Ue);
        break;
      case 11:
        n = Dp(i, n, n.pendingProps, n.type.render, n.ref, Ue);
        break;
      case 5:
        Vu(n);
      default:
        Ip(i, n), (n = De = dm(n, fa)), (n = jp(i, n, fa));
    }
    (e.memoizedProps = e.pendingProps), n === null ? Ds(e) : (De = n);
  }
  function Ar(e, n, i, l) {
    (ia = Ai = null), Vu(n), (vr = null), (Ol = 0);
    var s = n.return;
    try {
      if (t2(e, s, n, i, Ue)) {
        (ut = 1), _s(e, dn(i, e.current)), (De = null);
        return;
      }
    } catch (u) {
      if (s !== null) throw ((De = s), u);
      (ut = 1), _s(e, dn(i, e.current)), (De = null);
      return;
    }
    n.flags & 32768
      ? ($e || l === 1
          ? (e = !0)
          : Er || (Ue & 536870912) !== 0
          ? (e = !1)
          : ((Ba = e = !0),
            (l === 2 || l === 9 || l === 3 || l === 6) &&
              ((l = pn.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        dg(n, e))
      : Ds(n);
  }
  function Ds(e) {
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
    do Ns();
    while (At !== 0);
    if ((Xe & 6) !== 0) throw Error(o(327));
    if (n !== null) {
      if (n === e.current) throw Error(o(177));
      if (
        ((u = n.lanes | n.childLanes),
        (u |= yu),
        Po(e, i, u, m, y, _),
        e === tt && ((De = tt = null), (Ue = 0)),
        (Tr = n),
        (Va = e),
        (Sr = i),
        (Ed = u),
        (xd = s),
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
        n = Tr,
        i = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || i) {
        (i = L.T), (L.T = null);
        var l = Z.p;
        Z.p = 2;
        var s = Xe;
        Xe |= 4;
        try {
          Qp(n, e);
          var u = Bd,
            m = tm(e.containerInfo),
            y = u.focusedElem,
            _ = u.selectionRange;
          if (
            m !== y &&
            y &&
            y.ownerDocument &&
            em(y.ownerDocument.documentElement, y)
          ) {
            if (_ !== null && fu(y)) {
              var k = _.start,
                V = _.end;
              if ((V === void 0 && (V = k), "selectionStart" in y))
                (y.selectionStart = k),
                  (y.selectionEnd = Math.min(V, y.value.length));
              else {
                var Y = y.ownerDocument || document,
                  U = (Y && Y.defaultView) || window;
                if (U.getSelection) {
                  var j = U.getSelection(),
                    we = y.textContent.length,
                    ge = Math.min(_.start, we),
                    Ze = _.end === void 0 ? ge : Math.min(_.end, we);
                  !j.extend && ge > Ze && ((m = Ze), (Ze = ge), (ge = m));
                  var C = Wh(y, ge),
                    S = Wh(y, Ze);
                  if (
                    C &&
                    S &&
                    (j.rangeCount !== 1 ||
                      j.anchorNode !== C.node ||
                      j.anchorOffset !== C.offset ||
                      j.focusNode !== S.node ||
                      j.focusOffset !== S.offset)
                  ) {
                    var N = Y.createRange();
                    N.setStart(C.node, C.offset),
                      j.removeAllRanges(),
                      ge > Ze
                        ? (j.addRange(N), j.extend(S.node, S.offset))
                        : (N.setEnd(S.node, S.offset), j.addRange(N));
                  }
                }
              }
            }
            for (Y = [], j = y; (j = j.parentNode); )
              j.nodeType === 1 &&
                Y.push({ element: j, left: j.scrollLeft, top: j.scrollTop });
            for (
              typeof y.focus == "function" && y.focus(), y = 0;
              y < Y.length;
              y++
            ) {
              var G = Y[y];
              (G.element.scrollLeft = G.left), (G.element.scrollTop = G.top);
            }
          }
          (qs = !!Id), (Bd = Id = null);
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
        n = Tr,
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
      (At = 0), Kc();
      var e = Va,
        n = Tr,
        i = Sr,
        l = ng;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (At = 5)
        : ((At = 0), (Tr = Va = null), gg(e, e.pendingLanes));
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
      (Sr & 3) !== 0 && Ns(),
        qn(e),
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
  function Ns(e) {
    return hg(), mg(), pg(), yg();
  }
  function yg() {
    if (At !== 5) return !1;
    var e = Va,
      n = Ed;
    Ed = 0;
    var i = nl(Sr),
      l = L.T,
      s = Z.p;
    try {
      (Z.p = 32 > i ? 32 : i), (L.T = null), (i = xd), (xd = null);
      var u = Va,
        m = Sr;
      if (((At = 0), (Tr = Va = null), (Sr = 0), (Xe & 6) !== 0))
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
    (n = dn(i, n)),
      (n = nd(e.stateNode, n, 2)),
      (e = Ma(e, n, 2)),
      e !== null && (pi(e, 2), qn(e));
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
            (e = dn(i, e)),
              (i = Ep(2)),
              (l = Ma(n, i, 2)),
              l !== null && (xp(i, l, n, e), pi(l, 2), qn(l));
            break;
          }
        }
        n = n.return;
      }
  }
  function Rd(e, n, i) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new s2();
      var s = new Set();
      l.set(n, s);
    } else (s = l.get(n)), s === void 0 && ((s = new Set()), l.set(n, s));
    s.has(i) ||
      ((vd = !0), s.add(i), (e = h2.bind(null, e, n, i)), n.then(e, e));
  }
  function h2(e, n, i) {
    var l = e.pingCache;
    l !== null && l.delete(n),
      (e.pingedLanes |= e.suspendedLanes & i),
      (e.warmLanes &= ~i),
      tt === e &&
        (Ue & i) === i &&
        (ut === 4 || (ut === 3 && (Ue & 62914560) === Ue && 300 > Kt() - _d)
          ? (Xe & 2) === 0 && Cr(e, 0)
          : (bd |= i),
        xr === Ue && (xr = 0)),
      qn(e);
  }
  function bg(e, n) {
    n === 0 && (n = Ho()), (e = sr(e, n)), e !== null && (pi(e, n), qn(e));
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
  var Ms = null,
    Rr = null,
    Od = !1,
    ks = !1,
    Dd = !1,
    Li = 0;
  function qn(e) {
    e !== Rr &&
      e.next === null &&
      (Rr === null ? (Ms = Rr = e) : (Rr = Rr.next = e)),
      (ks = !0),
      Od || ((Od = !0), v2());
  }
  function Bl(e, n) {
    if (!Dd && ks) {
      Dd = !0;
      do
        for (var i = !1, l = Ms; l !== null; ) {
          if (e !== 0) {
            var s = l.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var m = l.suspendedLanes,
                y = l.pingedLanes;
              (u = (1 << (31 - St(42 | e) + 1)) - 1),
                (u &= s & ~(m & ~y)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((i = !0), xg(l, u));
          } else
            (u = Ue),
              (u = mi(
                l,
                l === tt ? u : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (u & 3) === 0 || In(l, u) || ((i = !0), xg(l, u));
          l = l.next;
        }
      while (i);
      Dd = !1;
    }
  }
  function y2() {
    wg();
  }
  function wg() {
    ks = Od = !1;
    var e = 0;
    Li !== 0 && (C2() && (e = Li), (Li = 0));
    for (var n = Kt(), i = null, l = Ms; l !== null; ) {
      var s = l.next,
        u = _g(l, n);
      u === 0
        ? ((l.next = null),
          i === null ? (Ms = s) : (i.next = s),
          s === null && (Rr = i))
        : ((i = l), (e !== 0 || (u & 3) !== 0) && (ks = !0)),
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
      var m = 31 - St(u),
        y = 1 << m,
        _ = s[m];
      _ === -1
        ? ((y & i) === 0 || (y & l) !== 0) && (s[m] = Bo(y, n))
        : _ <= n && (e.expiredLanes |= y),
        (u &= ~y);
    }
    if (
      ((n = tt),
      (i = Ue),
      (i = mi(
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
        l !== null && l !== null && Tn(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((i & 3) === 0 || In(e, i)) {
      if (((n = i & -i), n === e.callbackPriority)) return n;
      switch ((l !== null && Tn(l), nl(i))) {
        case 2:
        case 8:
          i = jo;
          break;
        case 32:
          i = Zi;
          break;
        case 268435456:
          i = xa;
          break;
        default:
          i = Zi;
      }
      return (
        (l = Eg.bind(null, e)),
        (i = Wr(i, l)),
        (e.callbackPriority = n),
        (e.callbackNode = i),
        n
      );
    }
    return (
      l !== null && l !== null && Tn(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Eg(e, n) {
    if (At !== 0 && At !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var i = e.callbackNode;
    if (Ns() && e.callbackNode !== i) return null;
    var l = Ue;
    return (
      (l = mi(
        e,
        e === tt ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (ig(e, l, n),
          _g(e, Kt()),
          e.callbackNode != null && e.callbackNode === i
            ? Eg.bind(null, e)
            : null)
    );
  }
  function xg(e, n) {
    if (Ns()) return null;
    ig(e, n, !0);
  }
  function v2() {
    R2(function () {
      (Xe & 6) !== 0 ? Wr(Uo, y2) : wg();
    });
  }
  function Nd() {
    return Li === 0 && (Li = Ji()), Li;
  }
  function Tg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Go("" + e);
  }
  function Sg(e, n) {
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
      var u = Tg((s[J] || null).action),
        m = l.submitter;
      m &&
        ((n = (n = m[J] || null)
          ? Tg(n.formAction)
          : m.getAttribute("formAction")),
        n !== null && ((u = n), (m = null)));
      var y = new Ko("action", "action", null, l, s);
      e.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Li !== 0) {
                  var _ = m ? Sg(s, m) : new FormData(s);
                  Zu(
                    i,
                    { pending: !0, data: _, method: s.method, action: u },
                    null,
                    _
                  );
                }
              } else
                typeof u == "function" &&
                  (y.preventDefault(),
                  (_ = m ? Sg(s, m) : new FormData(s)),
                  Zu(
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
  for (var Md = 0; Md < gu.length; Md++) {
    var kd = gu[Md],
      w2 = kd.toLowerCase(),
      _2 = kd[0].toUpperCase() + kd.slice(1);
    Rn(w2, "on" + _2);
  }
  Rn(im, "onAnimationEnd"),
    Rn(rm, "onAnimationIteration"),
    Rn(lm, "onAnimationStart"),
    Rn("dblclick", "onDoubleClick"),
    Rn("focusin", "onFocus"),
    Rn("focusout", "onBlur"),
    Rn(Iw, "onTransitionRun"),
    Rn(Bw, "onTransitionStart"),
    Rn(Hw, "onTransitionCancel"),
    Rn(om, "onTransitionEnd"),
    sn("onMouseEnter", ["mouseout", "mouseover"]),
    sn("onMouseLeave", ["mouseout", "mouseover"]),
    sn("onPointerEnter", ["pointerout", "pointerover"]),
    sn("onPointerLeave", ["pointerout", "pointerover"]),
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
    E2 = new Set(
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
            } catch (V) {
              ws(V);
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
            } catch (V) {
              ws(V);
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
  function Ld(e, n, i) {
    var l = 0;
    n && (l |= 4), Ag(i, e, l, n);
  }
  var Ls = "_reactListening" + Math.random().toString(36).slice(2);
  function Ud(e) {
    if (!e[Ls]) {
      (e[Ls] = !0),
        ke.forEach(function (i) {
          i !== "selectionchange" && (E2.has(i) || Ld(i, !1, e), Ld(i, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Ls] || ((n[Ls] = !0), Ld("selectionchange", !1, n));
    }
  }
  function Ag(e, n, i, l) {
    switch (Zg(n)) {
      case 2:
        var s = Q2;
        break;
      case 8:
        s = F2;
        break;
      default:
        s = Qd;
    }
    (i = s.bind(null, n, i, e)),
      (s = void 0),
      !au ||
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
  function jd(e, n, i, l, s) {
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
        V = tu(i),
        Y = [];
      e: {
        var U = sm.get(e);
        if (U !== void 0) {
          var j = Ko,
            we = e;
          switch (e) {
            case "keypress":
              if (Yo(i) === 0) break e;
            case "keydown":
            case "keyup":
              j = gw;
              break;
            case "focusin":
              (we = "focus"), (j = ou);
              break;
            case "focusout":
              (we = "blur"), (j = ou);
              break;
            case "beforeblur":
            case "afterblur":
              j = ou;
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
              j = zh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = iw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = bw;
              break;
            case im:
            case rm:
            case lm:
              j = ow;
              break;
            case om:
              j = _w;
              break;
            case "scroll":
            case "scrollend":
              j = nw;
              break;
            case "wheel":
              j = xw;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = cw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = Bh;
              break;
            case "toggle":
            case "beforetoggle":
              j = Sw;
          }
          var ge = (n & 4) !== 0,
            Ze = !ge && (e === "scroll" || e === "scrollend"),
            C = ge ? (U !== null ? U + "Capture" : null) : U;
          ge = [];
          for (var S = k, N; S !== null; ) {
            var G = S;
            if (
              ((N = G.stateNode),
              (G = G.tag),
              (G !== 5 && G !== 26 && G !== 27) ||
                N === null ||
                C === null ||
                ((G = rl(S, C)), G != null && ge.push(Pl(S, G, N))),
              Ze)
            )
              break;
            S = S.return;
          }
          0 < ge.length &&
            ((U = new j(U, we, null, i, V)),
            Y.push({ event: U, listeners: ge }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((U = e === "mouseover" || e === "pointerover"),
            (j = e === "mouseout" || e === "pointerout"),
            U &&
              i !== eu &&
              (we = i.relatedTarget || i.fromElement) &&
              (_e(we) || we[oe]))
          )
            break e;
          if (
            (j || U) &&
            ((U =
              V.window === V
                ? V
                : (U = V.ownerDocument)
                ? U.defaultView || U.parentWindow
                : window),
            j
              ? ((we = i.relatedTarget || i.toElement),
                (j = k),
                (we = we ? _e(we) : null),
                we !== null &&
                  ((Ze = d(we)),
                  (ge = we.tag),
                  we !== Ze || (ge !== 5 && ge !== 27 && ge !== 6)) &&
                  (we = null))
              : ((j = null), (we = k)),
            j !== we)
          ) {
            if (
              ((ge = zh),
              (G = "onMouseLeave"),
              (C = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ge = Bh),
                (G = "onPointerLeave"),
                (C = "onPointerEnter"),
                (S = "pointer")),
              (Ze = j == null ? U : at(j)),
              (N = we == null ? U : at(we)),
              (U = new ge(G, S + "leave", j, i, V)),
              (U.target = Ze),
              (U.relatedTarget = N),
              (G = null),
              _e(V) === k &&
                ((ge = new ge(C, S + "enter", we, i, V)),
                (ge.target = N),
                (ge.relatedTarget = Ze),
                (G = ge)),
              (Ze = G),
              j && we)
            )
              t: {
                for (ge = j, C = we, S = 0, N = ge; N; N = Or(N)) S++;
                for (N = 0, G = C; G; G = Or(G)) N++;
                for (; 0 < S - N; ) (ge = Or(ge)), S--;
                for (; 0 < N - S; ) (C = Or(C)), N--;
                for (; S--; ) {
                  if (ge === C || (C !== null && ge === C.alternate)) break t;
                  (ge = Or(ge)), (C = Or(C));
                }
                ge = null;
              }
            else ge = null;
            j !== null && Rg(Y, U, j, ge, !1),
              we !== null && Ze !== null && Rg(Y, Ze, we, ge, !0);
          }
        }
        e: {
          if (
            ((U = k ? at(k) : window),
            (j = U.nodeName && U.nodeName.toLowerCase()),
            j === "select" || (j === "input" && U.type === "file"))
          )
            var re = Xh;
          else if ($h(U))
            if (Kh) re = Uw;
            else {
              re = kw;
              var Ce = Mw;
            }
          else
            (j = U.nodeName),
              !j ||
              j.toLowerCase() !== "input" ||
              (U.type !== "checkbox" && U.type !== "radio")
                ? k && Wc(k.elementType) && (re = Xh)
                : (re = Lw);
          if (re && (re = re(e, k))) {
            Yh(Y, re, i, V);
            break e;
          }
          Ce && Ce(e, U, k),
            e === "focusout" &&
              k &&
              U.type === "number" &&
              k.memoizedProps.value != null &&
              Jc(U, "number", U.value);
        }
        switch (((Ce = k ? at(k) : window), e)) {
          case "focusin":
            ($h(Ce) || Ce.contentEditable === "true") &&
              ((rr = Ce), (hu = k), (hl = null));
            break;
          case "focusout":
            hl = hu = rr = null;
            break;
          case "mousedown":
            mu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (mu = !1), nm(Y, i, V);
            break;
          case "selectionchange":
            if (zw) break;
          case "keydown":
          case "keyup":
            nm(Y, i, V);
        }
        var ue;
        if (cu)
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
              ? ye === "onCompositionEnd" && ir && (ue = Uh())
              : ((Ra = V),
                (iu = "value" in Ra ? Ra.value : Ra.textContent),
                (ir = !0))),
          (Ce = Us(k, ye)),
          0 < Ce.length &&
            ((ye = new Ih(ye, e, null, i, V)),
            Y.push({ event: ye, listeners: Ce }),
            ue
              ? (ye.data = ue)
              : ((ue = Gh(i)), ue !== null && (ye.data = ue)))),
          (ue = Aw ? Rw(e, i) : Ow(e, i)) &&
            ((ye = Us(k, "onBeforeInput")),
            0 < ye.length &&
              ((Ce = new Ih("onBeforeInput", "beforeinput", null, i, V)),
              Y.push({ event: Ce, listeners: ye }),
              (Ce.data = ue))),
          b2(Y, e, k, i, V);
      }
      Cg(Y, n);
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
  var x2 = /\r\n?/g,
    T2 = /\u0000|\uFFFD/g;
  function Og(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        x2,
        `
`
      )
      .replace(T2, "");
  }
  function Dg(e, n) {
    return (n = Og(n)), Og(e) === n;
  }
  function js() {}
  function Fe(e, n, i, l, s, u) {
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
        (l = Go("" + l)), e.setAttribute(i, l);
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
              ? (n !== "input" && Fe(e, n, "name", s.name, s, null),
                Fe(e, n, "formEncType", s.formEncType, s, null),
                Fe(e, n, "formMethod", s.formMethod, s, null),
                Fe(e, n, "formTarget", s.formTarget, s, null))
              : (Fe(e, n, "encType", s.encType, s, null),
                Fe(e, n, "method", s.method, s, null),
                Fe(e, n, "target", s.target, s, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(i);
          break;
        }
        (l = Go("" + l)), e.setAttribute(i, l);
        break;
      case "onClick":
        l != null && (e.onclick = js);
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
        (i = Go("" + l)),
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
        Ne("beforetoggle", e), Ne("toggle", e), cn(e, "popover", l);
        break;
      case "xlinkActuate":
        Se(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Se(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Se(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Se(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Se(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Se(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Se(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Se(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Se(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        cn(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) ||
          (i[0] !== "o" && i[0] !== "O") ||
          (i[1] !== "n" && i[1] !== "N")) &&
          ((i = ew.get(i) || i), cn(e, i, l));
    }
  }
  function zd(e, n, i, l, s, u) {
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
        l != null && (e.onclick = js);
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
        if (!Ta.hasOwnProperty(i))
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
              : cn(e, i, l);
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
                  Fe(e, n, u, m, i, null);
              }
          }
        s && Fe(e, n, "srcSet", i.srcSet, i, null),
          l && Fe(e, n, "src", i.src, i, null);
        return;
      case "input":
        Ne("invalid", e);
        var y = (u = m = s = null),
          _ = null,
          k = null;
        for (l in i)
          if (i.hasOwnProperty(l)) {
            var V = i[l];
            if (V != null)
              switch (l) {
                case "name":
                  s = V;
                  break;
                case "type":
                  m = V;
                  break;
                case "checked":
                  _ = V;
                  break;
                case "defaultChecked":
                  k = V;
                  break;
                case "value":
                  u = V;
                  break;
                case "defaultValue":
                  y = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null) throw Error(o(137, n));
                  break;
                default:
                  Fe(e, n, l, V, i, null);
              }
          }
        Rh(e, u, y, _, k, m, s, !1), Vo(e);
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
                Fe(e, n, s, y, i, null);
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
                Fe(e, n, m, y, i, null);
            }
        Dh(e, l, s, u), Vo(e);
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
                Fe(e, n, _, l, i, null);
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
                Fe(e, n, k, l, i, null);
            }
        return;
      default:
        if (Wc(n)) {
          for (V in i)
            i.hasOwnProperty(V) &&
              ((l = i[V]), l !== void 0 && zd(e, n, V, l, i, void 0));
          return;
        }
    }
    for (y in i)
      i.hasOwnProperty(y) && ((l = i[y]), l != null && Fe(e, n, y, l, i, null));
  }
  function S2(e, n, i, l) {
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
          V = null;
        for (j in i) {
          var Y = i[j];
          if (i.hasOwnProperty(j) && Y != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                _ = Y;
              default:
                l.hasOwnProperty(j) || Fe(e, n, j, null, l, Y);
            }
        }
        for (var U in l) {
          var j = l[U];
          if (((Y = i[U]), l.hasOwnProperty(U) && (j != null || Y != null)))
            switch (U) {
              case "type":
                u = j;
                break;
              case "name":
                s = j;
                break;
              case "checked":
                k = j;
                break;
              case "defaultChecked":
                V = j;
                break;
              case "value":
                m = j;
                break;
              case "defaultValue":
                y = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(o(137, n));
                break;
              default:
                j !== Y && Fe(e, n, U, j, l, Y);
            }
        }
        Zc(e, m, y, _, k, V, u, s);
        return;
      case "select":
        j = m = y = U = null;
        for (u in i)
          if (((_ = i[u]), i.hasOwnProperty(u) && _ != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                j = _;
              default:
                l.hasOwnProperty(u) || Fe(e, n, u, null, l, _);
            }
        for (s in l)
          if (
            ((u = l[s]),
            (_ = i[s]),
            l.hasOwnProperty(s) && (u != null || _ != null))
          )
            switch (s) {
              case "value":
                U = u;
                break;
              case "defaultValue":
                y = u;
                break;
              case "multiple":
                m = u;
              default:
                u !== _ && Fe(e, n, s, u, l, _);
            }
        (n = y),
          (i = m),
          (l = j),
          U != null
            ? er(e, !!i, U, !1)
            : !!l != !!i &&
              (n != null ? er(e, !!i, n, !0) : er(e, !!i, i ? [] : "", !1));
        return;
      case "textarea":
        j = U = null;
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
                Fe(e, n, y, null, l, s);
            }
        for (m in l)
          if (
            ((s = l[m]),
            (u = i[m]),
            l.hasOwnProperty(m) && (s != null || u != null))
          )
            switch (m) {
              case "value":
                U = s;
                break;
              case "defaultValue":
                j = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(o(91));
                break;
              default:
                s !== u && Fe(e, n, m, s, l, u);
            }
        Oh(e, U, j);
        return;
      case "option":
        for (var we in i)
          if (
            ((U = i[we]),
            i.hasOwnProperty(we) && U != null && !l.hasOwnProperty(we))
          )
            switch (we) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Fe(e, n, we, null, l, U);
            }
        for (_ in l)
          if (
            ((U = l[_]),
            (j = i[_]),
            l.hasOwnProperty(_) && U !== j && (U != null || j != null))
          )
            switch (_) {
              case "selected":
                e.selected =
                  U && typeof U != "function" && typeof U != "symbol";
                break;
              default:
                Fe(e, n, _, U, l, j);
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
          (U = i[ge]),
            i.hasOwnProperty(ge) &&
              U != null &&
              !l.hasOwnProperty(ge) &&
              Fe(e, n, ge, null, l, U);
        for (k in l)
          if (
            ((U = l[k]),
            (j = i[k]),
            l.hasOwnProperty(k) && U !== j && (U != null || j != null))
          )
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(o(137, n));
                break;
              default:
                Fe(e, n, k, U, l, j);
            }
        return;
      default:
        if (Wc(n)) {
          for (var Ze in i)
            (U = i[Ze]),
              i.hasOwnProperty(Ze) &&
                U !== void 0 &&
                !l.hasOwnProperty(Ze) &&
                zd(e, n, Ze, void 0, l, U);
          for (V in l)
            (U = l[V]),
              (j = i[V]),
              !l.hasOwnProperty(V) ||
                U === j ||
                (U === void 0 && j === void 0) ||
                zd(e, n, V, U, l, j);
          return;
        }
    }
    for (var C in i)
      (U = i[C]),
        i.hasOwnProperty(C) &&
          U != null &&
          !l.hasOwnProperty(C) &&
          Fe(e, n, C, null, l, U);
    for (Y in l)
      (U = l[Y]),
        (j = i[Y]),
        !l.hasOwnProperty(Y) ||
          U === j ||
          (U == null && j == null) ||
          Fe(e, n, Y, U, l, j);
  }
  var Id = null,
    Bd = null;
  function zs(e) {
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
  function Hd(e, n) {
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
  var Pd = null;
  function C2() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Pd
        ? !1
        : ((Pd = e), !0)
      : ((Pd = null), !1);
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
  function Ug(e, n) {
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
            e.removeChild(u), Fl(n);
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
    Fl(n);
  }
  function Vd(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var i = n;
      switch (((n = n.nextSibling), i.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Vd(i), ce(i);
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
      if (((e = Dn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function N2(e, n, i) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !i) ||
        ((e = Dn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function qd(e) {
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
  function Dn(e) {
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
  var Gd = null;
  function jg(e) {
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
    switch (((n = zs(i)), e)) {
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
  var yn = new Map(),
    Ig = new Set();
  function Is(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var ha = Z.d;
  Z.d = { f: k2, r: L2, D: U2, C: j2, L: z2, m: I2, X: H2, S: B2, M: P2 };
  function k2() {
    var e = ha.f(),
      n = Os();
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
      var s = un(n);
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
  function U2(e) {
    ha.D(e), Bg("dns-prefetch", e, null);
  }
  function j2(e, n) {
    ha.C(e, n), Bg("preconnect", e, n);
  }
  function z2(e, n, i) {
    ha.L(e, n, i);
    var l = Dr;
    if (l && e && n) {
      var s = 'link[rel="preload"][as="' + un(n) + '"]';
      n === "image" && i && i.imageSrcSet
        ? ((s += '[imagesrcset="' + un(i.imageSrcSet) + '"]'),
          typeof i.imageSizes == "string" &&
            (s += '[imagesizes="' + un(i.imageSizes) + '"]'))
        : (s += '[href="' + un(e) + '"]');
      var u = s;
      switch (n) {
        case "style":
          u = Nr(e);
          break;
        case "script":
          u = Mr(e);
      }
      yn.has(u) ||
        ((e = b(
          {
            rel: "preload",
            href: n === "image" && i && i.imageSrcSet ? void 0 : e,
            as: n,
          },
          i
        )),
        yn.set(u, e),
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
          'link[rel="modulepreload"][as="' + un(l) + '"][href="' + un(e) + '"]',
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
        !yn.has(u) &&
        ((e = b({ rel: "modulepreload", href: e }, n)),
        yn.set(u, e),
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
            (i = yn.get(u)) && $d(e, i);
          var _ = (m = l.createElement("link"));
          He(_),
            Rt(_, "link", e),
            (_._p = new Promise(function (k, V) {
              (_.onload = k), (_.onerror = V);
            })),
            _.addEventListener("load", function () {
              y.loading |= 1;
            }),
            _.addEventListener("error", function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            Bs(m, n, l);
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
          (n = yn.get(s)) && Yd(e, n),
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
          (n = yn.get(s)) && Yd(e, n),
          (u = i.createElement("script")),
          He(u),
          Rt(u, "link", e),
          i.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        l.set(s, u));
    }
  }
  function Hg(e, n, i, l) {
    var s = (s = he.current) ? Is(s) : null;
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
              yn.has(e) ||
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
                yn.set(e, i),
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
    return 'href="' + un(e) + '"';
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
    return '[src="' + un(e) + '"]';
  }
  function Gl(e) {
    return "script[async]" + e;
  }
  function Vg(e, n, i) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + un(i.href) + '"]');
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
            Bs(l, i.precedence, e),
            (n.instance = l)
          );
        case "stylesheet":
          s = Nr(i.href);
          var u = e.querySelector(ql(s));
          if (u) return (n.state.loading |= 4), (n.instance = u), He(u), u;
          (l = Pg(i)),
            (s = yn.get(s)) && $d(l, s),
            (u = (e.ownerDocument || e).createElement("link")),
            He(u);
          var m = u;
          return (
            (m._p = new Promise(function (y, _) {
              (m.onload = y), (m.onerror = _);
            })),
            Rt(u, "link", l),
            (n.state.loading |= 4),
            Bs(u, i.precedence, e),
            (n.instance = u)
          );
        case "script":
          return (
            (u = Mr(i.src)),
            (s = e.querySelector(Gl(u)))
              ? ((n.instance = s), He(s), s)
              : ((l = i),
                (s = yn.get(u)) && ((l = b({}, i)), Yd(l, s)),
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
        ((l = n.instance), (n.state.loading |= 4), Bs(l, i.precedence, e));
    return n.instance;
  }
  function Bs(e, n, i) {
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
  function $d(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.title == null && (e.title = n.title);
  }
  function Yd(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.integrity == null && (e.integrity = n.integrity);
  }
  var Hs = null;
  function qg(e, n, i) {
    if (Hs === null) {
      var l = new Map(),
        s = (Hs = new Map());
      s.set(i, l);
    } else (s = Hs), (l = s.get(i)), l || ((l = new Map()), s.set(i, l));
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
          u[X] ||
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
              (l.count++, (l = Ps.bind(l)), e.then(l, l)),
            (n.state.loading |= 4),
            (n.instance = u),
            He(u);
          return;
        }
        (u = e.ownerDocument || e),
          (i = Pg(i)),
          (s = yn.get(s)) && $d(i, s),
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
          (n = Ps.bind(l)),
          e.addEventListener("load", n),
          e.addEventListener("error", n));
    }
  }
  function Y2() {
    if ($l === null) throw Error(o(475));
    var e = $l;
    return (
      e.stylesheets && e.count === 0 && Xd(e, e.stylesheets),
      0 < e.count
        ? function (n) {
            var i = setTimeout(function () {
              if ((e.stylesheets && Xd(e, e.stylesheets), e.unsuspend)) {
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
  function Ps() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Xd(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Vs = null;
  function Xd(e, n) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Vs = new Map()),
        n.forEach(X2, e),
        (Vs = null),
        Ps.call(e));
  }
  function X2(e, n) {
    if (!(n.state.loading & 4)) {
      var i = Vs.get(e);
      if (i) var l = i.get(null);
      else {
        (i = new Map()), Vs.set(e, i);
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
        (l = Ps.bind(this)),
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
    $$typeof: q,
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
  function Yg(e, n, i, l, s, u, m, y, _, k, V, Y) {
    return (
      (e = new K2(e, n, i, m, y, _, k, Y)),
      (n = 1),
      u === !0 && (n |= 24),
      (u = Ft(3, null, null, n)),
      (e.current = u),
      (u.stateNode = e),
      (n = Ru()),
      n.refCount++,
      (e.pooledCache = n),
      n.refCount++,
      (u.memoizedState = { element: l, isDehydrated: i, cache: n }),
      Mu(u),
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
      i !== null && (tn(i, e, n), El(i, e, n));
  }
  function Qg(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function Kd(e, n) {
    Qg(e, n), (e = e.alternate) && Qg(e, n);
  }
  function Fg(e) {
    if (e.tag === 13) {
      var n = sr(e, 67108864);
      n !== null && tn(n, e, 67108864), Kd(e, 67108864);
    }
  }
  var qs = !0;
  function Q2(e, n, i, l) {
    var s = L.T;
    L.T = null;
    var u = Z.p;
    try {
      (Z.p = 2), Qd(e, n, i, l);
    } finally {
      (Z.p = u), (L.T = s);
    }
  }
  function F2(e, n, i, l) {
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
    if (qs) {
      var s = Fd(l);
      if (s === null) jd(e, n, l, Gs, i), Jg(e, l);
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
                      var _ = 1 << (31 - St(m));
                      (y.entanglements[1] |= _), (m &= ~_);
                    }
                    qn(u), (Xe & 6) === 0 && ((As = Kt() + 500), Bl(0));
                  }
                }
                break;
              case 13:
                (y = sr(u, 2)), y !== null && tn(y, u, 2), Os(), Kd(u, 2);
            }
          if (((u = Fd(l)), u === null && jd(e, n, l, Gs, i), u === s)) break;
          s = u;
        }
        s !== null && l.stopPropagation();
      } else jd(e, n, l, null, i);
    }
  }
  function Fd(e) {
    return (e = tu(e)), Zd(e);
  }
  var Gs = null;
  function Zd(e) {
    if (((Gs = null), (e = _e(e)), e !== null)) {
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
    return (Gs = e), null;
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
          case jo:
            return 8;
          case Zi:
          case Zn:
            return 32;
          case xa:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Jd = !1,
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
  function Ql(e, n, i, l, s, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: n,
          domEventName: i,
          eventSystemFlags: l,
          nativeEvent: u,
          targetContainers: [s],
        }),
        n !== null && ((n = Be(n)), n !== null && Fg(n)),
        e)
      : ((e.eventSystemFlags |= l),
        (n = e.targetContainers),
        s !== null && n.indexOf(s) === -1 && n.push(s),
        e);
  }
  function J2(e, n, i, l, s) {
    switch (n) {
      case "focusin":
        return ($a = Ql($a, e, n, i, l, s)), !0;
      case "dragenter":
        return (Ya = Ql(Ya, e, n, i, l, s)), !0;
      case "mouseover":
        return (Xa = Ql(Xa, e, n, i, l, s)), !0;
      case "pointerover":
        var u = s.pointerId;
        return Xl.set(u, Ql(Xl.get(u) || null, e, n, i, l, s)), !0;
      case "gotpointercapture":
        return (
          (u = s.pointerId), Kl.set(u, Ql(Kl.get(u) || null, e, n, i, l, s)), !0
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
              A(e.priority, function () {
                if (i.tag === 13) {
                  var l = en();
                  l = tl(l);
                  var s = sr(i, l);
                  s !== null && tn(s, i, l), Kd(i, l);
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
  function $s(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var i = Fd(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var l = new i.constructor(i.type, i);
        (eu = l), i.target.dispatchEvent(l), (eu = null);
      } else return (n = Be(i)), n !== null && Fg(n), (e.blockedOn = i), !1;
      n.shift();
    }
    return !0;
  }
  function ey(e, n, i) {
    $s(e) && i.delete(n);
  }
  function W2() {
    (Jd = !1),
      $a !== null && $s($a) && ($a = null),
      Ya !== null && $s(Ya) && (Ya = null),
      Xa !== null && $s(Xa) && (Xa = null),
      Xl.forEach(ey),
      Kl.forEach(ey);
  }
  function Ys(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      Jd ||
        ((Jd = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, W2)));
  }
  var Xs = null;
  function ty(e) {
    Xs !== e &&
      ((Xs = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Xs === e && (Xs = null);
        for (var n = 0; n < e.length; n += 3) {
          var i = e[n],
            l = e[n + 1],
            s = e[n + 2];
          if (typeof l != "function") {
            if (Zd(l || i) === null) continue;
            break;
          }
          var u = Be(i);
          u !== null &&
            (e.splice(n, 3),
            (n -= 3),
            Zu(u, { pending: !0, data: s, method: i.method, action: l }, l, s));
        }
      }));
  }
  function Fl(e) {
    function n(_) {
      return Ys(_, e);
    }
    $a !== null && Ys($a, e),
      Ya !== null && Ys(Ya, e),
      Xa !== null && Ys(Xa, e),
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
            else if (Zd(s) !== null) continue;
          } else y = m.action;
          typeof y == "function" ? (i[l + 1] = y) : (i.splice(l, 3), (l -= 3)),
            ty(i);
        }
      }
  }
  function Wd(e) {
    this._internalRoot = e;
  }
  (Ks.prototype.render = Wd.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(o(409));
      var i = n.current,
        l = en();
      Kg(i, l, e, n, null, null);
    }),
    (Ks.prototype.unmount = Wd.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          Kg(e.current, 2, null, e, null, null), Os(), (n[oe] = null);
        }
      });
  function Ks(e) {
    this._internalRoot = e;
  }
  Ks.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = x();
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
        new Wd(n)
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
        (l = en()),
        (l = tl(l)),
        (s = Na(l)),
        (s.callback = null),
        Ma(i, s, l),
        (i = l),
        (n.current.lanes = i),
        pi(n, i),
        qn(n),
        (e[oe] = n.current),
        Ud(e),
        new Ks(n)
      );
    }),
    (Jl.version = "19.1.0"),
    Jl
  );
}
var fy;
function d1() {
  if (fy) return nf.exports;
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
  return a(), (nf.exports = u1()), nf.exports;
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
      K = w.length;
    if (K < 2) return M;
    const P = (O == null ? void 0 : O.decode) || b;
    let I = 0;
    do {
      const B = w.indexOf("=", I);
      if (B === -1) break;
      const q = w.indexOf(";", I),
        F = q === -1 ? K : q;
      if (B > F) {
        I = w.lastIndexOf(";", B - 1) + 1;
        continue;
      }
      const Q = p(w, I, B),
        D = h(w, B, Q),
        ee = w.slice(Q, D);
      if (M[ee] === void 0) {
        let ne = p(w, B + 1, F),
          le = h(w, F, ne);
        const Me = P(w.slice(ne, le));
        M[ee] = Me;
      }
      I = F + 1;
    } while (I < K);
    return M;
  }
  function p(w, O, M) {
    do {
      const K = w.charCodeAt(O);
      if (K !== 32 && K !== 9) return O;
    } while (++O < M);
    return M;
  }
  function h(w, O, M) {
    for (; O > M; ) {
      const K = w.charCodeAt(--O);
      if (K !== 32 && K !== 9) return O + 1;
    }
    return M;
  }
  function g(w, O, M) {
    const K = (M == null ? void 0 : M.encode) || encodeURIComponent;
    if (!a.test(w)) throw new TypeError(`argument name is invalid: ${w}`);
    const P = K(O);
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
      if (!T(M.expires) || !Number.isFinite(M.expires.valueOf()))
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
  function T(w) {
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
  of = (a, t, r) => (
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
    return uo(
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
function uo(a, t, r = null, o) {
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
  function T() {
    p = "POP";
    let P = b(),
      I = P == null ? null : P - g;
    (g = P), h && h({ action: p, location: K.location, delta: I });
  }
  function w(P, I) {
    p = "PUSH";
    let B = uo(K.location, P, I);
    g = b() + 1;
    let q = py(B, g),
      F = K.createHref(B);
    try {
      f.pushState(q, "", F);
    } catch (Q) {
      if (Q instanceof DOMException && Q.name === "DataCloneError") throw Q;
      c.location.assign(F);
    }
    d && h && h({ action: p, location: K.location, delta: 1 });
  }
  function O(P, I) {
    p = "REPLACE";
    let B = uo(K.location, P, I);
    g = b();
    let q = py(B, g),
      F = K.createHref(B);
    f.replaceState(q, "", F),
      d && h && h({ action: p, location: K.location, delta: 0 });
  }
  function M(P) {
    return Rv(P);
  }
  let K = {
    get action() {
      return p;
    },
    get location() {
      return a(c, f);
    },
    listen(P) {
      if (h) throw new Error("A history only accepts one active listener");
      return (
        c.addEventListener(my, T),
        (h = P),
        () => {
          c.removeEventListener(my, T), (h = null);
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
  return K;
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
      if (of(this, ao).has(a)) return of(this, ao).get(a);
      if (a.defaultValue !== void 0) return a.defaultValue;
      throw new Error("No value found for context");
    }
    set(a, t) {
      of(this, ao).set(a, t);
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
function E1(a) {
  return _1.has(a);
}
function x1(a) {
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
      x1(c))
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
  return tc(a, t, r, !1);
}
function tc(a, t, r, o) {
  let c = typeof t == "string" ? oi(t) : t,
    d = wn(c.pathname || "/", r);
  if (d == null) return null;
  let f = Ov(a);
  S1(f);
  let p = null;
  for (let h = 0; p == null && h < f.length; ++h) {
    let g = j1(d);
    p = L1(f[h], g, o);
  }
  return p;
}
function T1(a, t) {
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
    let g = $n([o, h.relativePath]),
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
function S1(a) {
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
      T = uc(
        { path: h.relativePath, caseSensitive: h.caseSensitive, end: g },
        b
      ),
      w = h.route;
    if (
      (!T &&
        g &&
        r &&
        !o[o.length - 1].route.index &&
        (T = uc(
          { path: h.relativePath, caseSensitive: h.caseSensitive, end: !1 },
          b
        )),
      !T)
    )
      return null;
    Object.assign(c, T.params),
      f.push({
        params: c,
        pathname: $n([d, T.pathname]),
        pathnameBase: B1($n([d, T.pathnameBase])),
        route: w,
      }),
      T.pathnameBase !== "/" && (d = $n([d, T.pathnameBase]));
  }
  return f;
}
function uc(a, t) {
  typeof a == "string" && (a = { path: a, caseSensitive: !1, end: !0 });
  let [r, o] = U1(a.path, a.caseSensitive, a.end),
    c = t.match(r);
  if (!c) return null;
  let d = c[0],
    f = d.replace(/(.)\/+$/, "$1"),
    p = c.slice(1);
  return {
    params: o.reduce((g, { paramName: b, isOptional: T }, w) => {
      if (b === "*") {
        let M = p[w] || "";
        f = d.slice(0, d.length - M.length).replace(/(.)\/+$/, "$1");
      }
      const O = p[w];
      return (
        T && !O ? (g[b] = void 0) : (g[b] = (O || "").replace(/%2F/g, "/")), g
      );
    }, {}),
    pathname: d,
    pathnameBase: f,
    pattern: a,
  };
}
function U1(a, t = !1, r = !0) {
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
function j1(a) {
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
function wn(a, t) {
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
function sf(a, t, r, o) {
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
        sf("?", "pathname", "search", c)
      ),
      Ae(
        !c.pathname || !c.pathname.includes("#"),
        sf("#", "pathname", "hash", c)
      ),
      Ae(!c.search || !c.search.includes("#"), sf("#", "search", "hash", c)));
  let d = a === "" || c.pathname === "",
    f = d ? "/" : c.pathname,
    p;
  if (f == null) p = r;
  else {
    let T = t.length - 1;
    if (!o && f.startsWith("..")) {
      let w = f.split("/");
      for (; w[0] === ".."; ) w.shift(), (T -= 1);
      c.pathname = w.join("/");
    }
    p = T >= 0 ? t[T] : "/";
  }
  let h = z1(c, p),
    g = f && f !== "/" && f.endsWith("/"),
    b = (d || f === ".") && r.endsWith("/");
  return !h.pathname.endsWith("/") && (g || b) && (h.pathname += "/"), h;
}
var $n = (a) => a.join("/").replace(/\/\/+/g, "/"),
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
function fo(a) {
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
  cf = {
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
  qf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  K1 = (a) => ({ hasErrorBoundary: !!a.hasErrorBoundary }),
  kv = "remix-router-transitions",
  Lv = Symbol("ResetLoaderData");
function Q1(a) {
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
    T = null,
    w = new Set(),
    O = null,
    M = null,
    K = null,
    P = a.hydrationData != null,
    I = Ja(f, a.history.location, h),
    B = !1,
    q = null,
    F;
  if (I == null && !a.patchRoutesOnNavigation) {
    let x = vn(404, { pathname: a.history.location.pathname }),
      { matches: A, route: z } = Oy(f);
    (F = !0), (I = A), (q = { [z.id]: x });
  } else if (
    (I &&
      !a.hydrationData &&
      gi(I, f, a.history.location.pathname).active &&
      (I = null),
    I)
  )
    if (I.some((x) => x.route.lazy)) F = !1;
    else if (!I.some((x) => x.route.loader)) F = !0;
    else {
      let x = a.hydrationData ? a.hydrationData.loaderData : null,
        A = a.hydrationData ? a.hydrationData.errors : null;
      if (A) {
        let z = I.findIndex((X) => A[X.route.id] !== void 0);
        F = I.slice(0, z + 1).every((X) => !xf(X.route, x, A));
      } else F = I.every((z) => !xf(z.route, x, A));
    }
  else {
    (F = !1), (I = []);
    let x = gi(null, f, a.history.location.pathname);
    x.active && x.matches && ((B = !0), (I = x.matches));
  }
  let Q,
    D = {
      historyAction: a.history.action,
      location: a.history.location,
      matches: I,
      initialized: F,
      navigation: cf,
      restoreScrollPosition: a.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (a.hydrationData && a.hydrationData.loaderData) || {},
      actionData: (a.hydrationData && a.hydrationData.actionData) || null,
      errors: (a.hydrationData && a.hydrationData.errors) || q,
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
    Ee = new Map(),
    E = new Set(),
    $ = new Map(),
    te = new Map(),
    W = new Set(),
    se = new Map(),
    Oe,
    he = null;
  function kt() {
    if (
      ((T = a.history.listen(({ action: x, location: A, delta: z }) => {
        if (Oe) {
          Oe(), (Oe = void 0);
          return;
        }
        mt(
          se.size === 0 || z != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let X = Bo({
          currentLocation: D.location,
          nextLocation: A,
          historyAction: x,
        });
        if (X && z != null) {
          let J = new Promise((oe) => {
            Oe = oe;
          });
          a.history.go(z * -1),
            In(X, {
              state: "blocked",
              location: A,
              proceed() {
                In(X, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: A,
                }),
                  J.then(() => a.history.go(z));
              },
              reset() {
                let oe = new Map(D.blockers);
                oe.set(X, eo), vt({ blockers: oe });
              },
            });
          return;
        }
        return Tn(x, A);
      })),
      r)
    ) {
      d_(t, ze);
      let x = () => f_(t, ze);
      t.addEventListener("pagehide", x),
        (Ge = () => t.removeEventListener("pagehide", x));
    }
    return D.initialized || Tn("POP", D.location, { initialHydration: !0 }), Q;
  }
  function et() {
    T && T(),
      Ge && Ge(),
      w.clear(),
      le && le.abort(),
      D.fetchers.forEach((x, A) => St(A)),
      D.blockers.forEach((x, A) => mi(A));
  }
  function jn(x) {
    return w.add(x), () => w.delete(x);
  }
  function vt(x, A = {}) {
    D = { ...D, ...x };
    let z = [],
      X = [];
    D.fetchers.forEach((J, oe) => {
      J.state === "idle" && (W.has(oe) ? z.push(oe) : X.push(oe));
    }),
      W.forEach((J) => {
        !D.fetchers.has(J) && !L.has(J) && z.push(J);
      }),
      [...w].forEach((J) =>
        J(D, {
          deletedFetchers: z,
          viewTransitionOpts: A.viewTransitionOpts,
          flushSync: A.flushSync === !0,
        })
      ),
      z.forEach((J) => St(J)),
      X.forEach((J) => D.fetchers.delete(J));
  }
  function xn(x, A, { flushSync: z } = {}) {
    var fe, ve;
    let X =
        D.actionData != null &&
        D.navigation.formMethod != null &&
        an(D.navigation.formMethod) &&
        D.navigation.state === "loading" &&
        ((fe = x.state) == null ? void 0 : fe._isRedirect) !== !0,
      J;
    A.actionData
      ? Object.keys(A.actionData).length > 0
        ? (J = A.actionData)
        : (J = null)
      : X
      ? (J = D.actionData)
      : (J = null);
    let oe = A.loaderData
        ? Ay(D.loaderData, A.loaderData, A.matches || [], A.errors)
        : D.loaderData,
      pe = D.blockers;
    pe.size > 0 && ((pe = new Map(pe)), pe.forEach((ce, _e) => pe.set(_e, eo)));
    let ie =
      ne === !0 ||
      (D.navigation.formMethod != null &&
        an(D.navigation.formMethod) &&
        ((ve = x.state) == null ? void 0 : ve._isRedirect) !== !0);
    p && ((f = p), (p = void 0)),
      Re ||
        ee === "POP" ||
        (ee === "PUSH"
          ? a.history.push(x, x.state)
          : ee === "REPLACE" && a.history.replace(x, x.state));
    let de;
    if (ee === "POP") {
      let ce = ze.get(D.location.pathname);
      ce && ce.has(x.pathname)
        ? (de = { currentLocation: D.location, nextLocation: x })
        : ze.has(x.pathname) &&
          (de = { currentLocation: x, nextLocation: D.location });
    } else if (Me) {
      let ce = ze.get(D.location.pathname);
      ce
        ? ce.add(x.pathname)
        : ((ce = new Set([x.pathname])), ze.set(D.location.pathname, ce)),
        (de = { currentLocation: D.location, nextLocation: x });
    }
    vt(
      {
        ...A,
        actionData: J,
        loaderData: oe,
        historyAction: ee,
        location: x,
        initialized: !0,
        navigation: cf,
        revalidation: "idle",
        restoreScrollPosition: Po(x, A.matches || D.matches),
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
  async function Fi(x, A) {
    if (typeof x == "number") {
      a.history.go(x);
      return;
    }
    let z = Ef(
        D.location,
        D.matches,
        h,
        x,
        A == null ? void 0 : A.fromRouteId,
        A == null ? void 0 : A.relative
      ),
      { path: X, submission: J, error: oe } = vy(!1, z, A),
      pe = D.location,
      ie = uo(D.location, X, A && A.state);
    ie = { ...ie, ...a.history.encodeLocation(ie) };
    let de = A && A.replace != null ? A.replace : void 0,
      fe = "PUSH";
    de === !0
      ? (fe = "REPLACE")
      : de === !1 ||
        (J != null &&
          an(J.formMethod) &&
          J.formAction === D.location.pathname + D.location.search &&
          (fe = "REPLACE"));
    let ve =
        A && "preventScrollReset" in A ? A.preventScrollReset === !0 : void 0,
      ce = (A && A.flushSync) === !0,
      _e = Bo({ currentLocation: pe, nextLocation: ie, historyAction: fe });
    if (_e) {
      In(_e, {
        state: "blocked",
        location: ie,
        proceed() {
          In(_e, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: ie,
          }),
            Fi(x, A);
        },
        reset() {
          let Be = new Map(D.blockers);
          Be.set(_e, eo), vt({ blockers: Be });
        },
      });
      return;
    }
    await Tn(fe, ie, {
      submission: J,
      pendingError: oe,
      preventScrollReset: ve,
      replace: A && A.replace,
      enableViewTransition: A && A.viewTransition,
      flushSync: ce,
    });
  }
  function Wr() {
    he || (he = h_()), el(), vt({ revalidation: "loading" });
    let x = he.promise;
    return D.navigation.state === "submitting"
      ? x
      : D.navigation.state === "idle"
      ? (Tn(D.historyAction, D.location, {
          startUninterruptedRevalidation: !0,
        }),
        x)
      : (Tn(ee || D.historyAction, D.navigation.location, {
          overrideNavigation: D.navigation,
          enableViewTransition: Me === !0,
        }),
        x);
  }
  async function Tn(x, A, z) {
    le && le.abort(),
      (le = null),
      (ee = x),
      (Re = (z && z.startUninterruptedRevalidation) === !0),
      pi(D.location, D.matches),
      (ne = (z && z.preventScrollReset) === !0),
      (Me = (z && z.enableViewTransition) === !0);
    let X = p || f,
      J = z && z.overrideNavigation,
      oe =
        z != null &&
        z.initialHydration &&
        D.matches &&
        D.matches.length > 0 &&
        !B
          ? D.matches
          : Ja(X, A, h),
      pe = (z && z.flushSync) === !0;
    if (
      oe &&
      D.initialized &&
      !Ie &&
      l_(D.location, A) &&
      !(z && z.submission && an(z.submission.formMethod))
    ) {
      xn(A, { matches: oe }, { flushSync: pe });
      return;
    }
    let ie = gi(oe, X, A.pathname);
    if ((ie.active && ie.matches && (oe = ie.matches), !oe)) {
      let { error: ot, notFoundMatches: He, route: ke } = Ji(A.pathname);
      xn(
        A,
        { matches: He, loaderData: {}, errors: { [ke.id]: ot } },
        { flushSync: pe }
      );
      return;
    }
    le = new AbortController();
    let de = Lr(a.history, A, le.signal, z && z.submission),
      fe = new gy(
        a.unstable_getContext ? await a.unstable_getContext() : void 0
      ),
      ve;
    if (z && z.pendingError)
      ve = [zi(oe).route.id, { type: "error", error: z.pendingError }];
    else if (z && z.submission && an(z.submission.formMethod)) {
      let ot = await Xc(
        de,
        A,
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
        if (nn(ke) && fo(ke.error) && ke.error.status === 404) {
          (le = null),
            xn(A, {
              matches: ot.matches,
              loaderData: {},
              errors: { [He]: ke.error },
            });
          return;
        }
      }
      (oe = ot.matches || oe),
        (ve = ot.pendingActionResult),
        (J = uf(A, z.submission)),
        (pe = !1),
        (ie.active = !1),
        (de = Lr(a.history, de.url, de.signal));
    }
    let {
      shortCircuited: ce,
      matches: _e,
      loaderData: Be,
      errors: at,
    } = await Kc(
      de,
      A,
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
      xn(A, { matches: _e || oe, ...Ry(ve), loaderData: Be, errors: at }));
  }
  async function Xc(x, A, z, X, J, oe, pe, ie = {}) {
    el();
    let de = c_(A, z);
    if ((vt({ navigation: de }, { flushSync: ie.flushSync === !0 }), oe)) {
      let ce = await yi(X, A.pathname, x.signal);
      if (ce.type === "aborted") return { shortCircuited: !0 };
      if (ce.type === "error") {
        let _e = zi(ce.partialMatches).route.id;
        return {
          matches: ce.partialMatches,
          pendingActionResult: [_e, { type: "error", error: ce.error }],
        };
      } else if (ce.matches) X = ce.matches;
      else {
        let { notFoundMatches: _e, error: Be, route: at } = Ji(A.pathname);
        return {
          matches: _e,
          pendingActionResult: [at.id, { type: "error", error: Be }],
        };
      }
    }
    let fe,
      ve = io(X, A);
    if (!ve.route.action && !ve.route.lazy)
      fe = {
        type: "error",
        error: vn(405, {
          method: x.method,
          pathname: A.pathname,
          routeId: ve.route.id,
        }),
      };
    else {
      let ce = Ur(c, d, x, X, ve, pe ? [] : o, J),
        _e = await xa(x, ce, J, null);
      if (((fe = _e[ve.route.id]), !fe)) {
        for (let Be of X)
          if (_e[Be.route.id]) {
            fe = _e[Be.route.id];
            break;
          }
      }
      if (x.signal.aborted) return { shortCircuited: !0 };
    }
    if (Ii(fe)) {
      let ce;
      return (
        ie && ie.replace != null
          ? (ce = ie.replace)
          : (ce =
              Ty(fe.response.headers.get("Location"), new URL(x.url), h) ===
              D.location.pathname + D.location.search),
        await Zn(x, fe, !0, { submission: z, replace: ce }),
        { shortCircuited: !0 }
      );
    }
    if (nn(fe)) {
      let ce = zi(X, ve.route.id);
      return (
        (ie && ie.replace) !== !0 && (ee = "PUSH"),
        { matches: X, pendingActionResult: [ce.route.id, fe, ve.route.id] }
      );
    }
    return { matches: X, pendingActionResult: [ve.route.id, fe] };
  }
  async function Kc(x, A, z, X, J, oe, pe, ie, de, fe, ve, ce) {
    let _e = oe || uf(A, pe),
      Be = pe || ie || Ny(_e),
      at = !Re && !fe;
    if (J) {
      if (at) {
        let Ot = Kt(ce);
        vt(
          { navigation: _e, ...(Ot !== void 0 ? { actionData: Ot } : {}) },
          { flushSync: ve }
        );
      }
      let Se = await yi(z, A.pathname, x.signal);
      if (Se.type === "aborted") return { shortCircuited: !0 };
      if (Se.type === "error") {
        let Ot = zi(Se.partialMatches).route.id;
        return {
          matches: Se.partialMatches,
          loaderData: {},
          errors: { [Ot]: Se.error },
        };
      } else if (Se.matches) z = Se.matches;
      else {
        let { error: Ot, notFoundMatches: Cn, route: An } = Ji(A.pathname);
        return { matches: Cn, loaderData: {}, errors: { [An.id]: Ot } };
      }
    }
    let ot = p || f,
      { dsMatches: He, revalidatingFetchers: ke } = by(
        x,
        X,
        c,
        d,
        a.history,
        D,
        z,
        Be,
        A,
        fe ? [] : o,
        fe === !0,
        Ie,
        Le,
        W,
        $,
        E,
        ot,
        h,
        ce
      );
    if (
      ((ae = ++Z),
      !a.dataStrategy && !He.some((Se) => Se.shouldLoad) && ke.length === 0)
    ) {
      let Se = fi();
      return (
        xn(
          A,
          {
            matches: z,
            loaderData: {},
            errors: ce && nn(ce[1]) ? { [ce[0]]: ce[1].error } : null,
            ...Ry(ce),
            ...(Se ? { fetchers: new Map(D.fetchers) } : {}),
          },
          { flushSync: ve }
        ),
        { shortCircuited: !0 }
      );
    }
    if (at) {
      let Se = {};
      if (!J) {
        Se.navigation = _e;
        let Ot = Kt(ce);
        Ot !== void 0 && (Se.actionData = Ot);
      }
      ke.length > 0 && (Se.fetchers = Qc(ke)), vt(Se, { flushSync: ve });
    }
    ke.forEach((Se) => {
      zn(Se.key), Se.controller && L.set(Se.key, Se.controller);
    });
    let Ta = () => ke.forEach((Se) => zn(Se.key));
    le && le.signal.addEventListener("abort", Ta);
    let { loaderResults: Lt, fetcherResults: sn } = await zo(He, ke, x, X);
    if (x.signal.aborted) return { shortCircuited: !0 };
    le && le.signal.removeEventListener("abort", Ta),
      ke.forEach((Se) => L.delete(Se.key));
    let Pt = Fs(Lt);
    if (Pt)
      return (
        await Zn(x, Pt.result, !0, { replace: de }), { shortCircuited: !0 }
      );
    if (((Pt = Fs(sn)), Pt))
      return (
        E.add(Pt.key),
        await Zn(x, Pt.result, !0, { replace: de }),
        { shortCircuited: !0 }
      );
    let { loaderData: Sa, errors: Ca } = Cy(D, z, Lt, ce, ke, sn);
    fe && D.errors && (Ca = { ...D.errors, ...Ca });
    let al = fi(),
      cn = hi(ae),
      Wn = al || cn || ke.length > 0;
    return {
      matches: z,
      loaderData: Sa,
      errors: Ca,
      ...(Wn ? { fetchers: new Map(D.fetchers) } : {}),
    };
  }
  function Kt(x) {
    if (x && !nn(x[1])) return { [x[0]]: x[1].data };
    if (D.actionData)
      return Object.keys(D.actionData).length === 0 ? null : D.actionData;
  }
  function Qc(x) {
    return (
      x.forEach((A) => {
        let z = D.fetchers.get(A.key),
          X = to(void 0, z ? z.data : void 0);
        D.fetchers.set(A.key, X);
      }),
      new Map(D.fetchers)
    );
  }
  async function Uo(x, A, z, X) {
    zn(x);
    let J = (X && X.flushSync) === !0,
      oe = p || f,
      pe = Ef(D.location, D.matches, h, z, A, X == null ? void 0 : X.relative),
      ie = Ja(oe, pe, h),
      de = gi(ie, oe, pe);
    if ((de.active && de.matches && (ie = de.matches), !ie)) {
      lt(x, A, vn(404, { pathname: pe }), { flushSync: J });
      return;
    }
    let { path: fe, submission: ve, error: ce } = vy(!0, pe, X);
    if (ce) {
      lt(x, A, ce, { flushSync: J });
      return;
    }
    let _e = io(ie, fe),
      Be = new gy(
        a.unstable_getContext ? await a.unstable_getContext() : void 0
      ),
      at = (X && X.preventScrollReset) === !0;
    if (ve && an(ve.formMethod)) {
      await jo(x, A, fe, _e, ie, Be, de.active, J, at, ve);
      return;
    }
    $.set(x, { routeId: A, path: fe }),
      await Zi(x, A, fe, _e, ie, Be, de.active, J, at, ve);
  }
  async function jo(x, A, z, X, J, oe, pe, ie, de, fe) {
    el(), $.delete(x);
    function ve(it) {
      if (!it.route.action && !it.route.lazy) {
        let Aa = vn(405, { method: fe.formMethod, pathname: z, routeId: A });
        return lt(x, A, Aa, { flushSync: ie }), !0;
      }
      return !1;
    }
    if (!pe && ve(X)) return;
    let ce = D.fetchers.get(x);
    Ht(x, u_(fe, ce), { flushSync: ie });
    let _e = new AbortController(),
      Be = Lr(a.history, z, _e.signal, fe);
    if (pe) {
      let it = await yi(J, z, Be.signal, x);
      if (it.type === "aborted") return;
      if (it.type === "error") {
        lt(x, A, it.error, { flushSync: ie });
        return;
      } else if (it.matches) {
        if (((J = it.matches), (X = io(J, z)), ve(X))) return;
      } else {
        lt(x, A, vn(404, { pathname: z }), { flushSync: ie });
        return;
      }
    }
    L.set(x, _e);
    let at = Z,
      ot = Ur(c, d, Be, J, X, o, oe),
      ke = (await xa(Be, ot, oe, x))[X.route.id];
    if (Be.signal.aborted) {
      L.get(x) === _e && L.delete(x);
      return;
    }
    if (W.has(x)) {
      if (Ii(ke) || nn(ke)) {
        Ht(x, Za(void 0));
        return;
      }
    } else {
      if (Ii(ke))
        if ((L.delete(x), ae > at)) {
          Ht(x, Za(void 0));
          return;
        } else
          return (
            E.add(x),
            Ht(x, to(fe)),
            Zn(Be, ke, !1, { fetcherSubmission: fe, preventScrollReset: de })
          );
      if (nn(ke)) {
        lt(x, A, ke.error);
        return;
      }
    }
    let Ta = D.navigation.location || D.location,
      Lt = Lr(a.history, Ta, _e.signal),
      sn = p || f,
      Pt =
        D.navigation.state !== "idle"
          ? Ja(sn, D.navigation.location, h)
          : D.matches;
    Ae(Pt, "Didn't find any matches after fetcher action");
    let Sa = ++Z;
    Ee.set(x, Sa);
    let Ca = to(fe, ke.data);
    D.fetchers.set(x, Ca);
    let { dsMatches: al, revalidatingFetchers: cn } = by(
      Lt,
      oe,
      c,
      d,
      a.history,
      D,
      Pt,
      fe,
      Ta,
      o,
      !1,
      Ie,
      Le,
      W,
      $,
      E,
      sn,
      h,
      [X.route.id, ke]
    );
    cn
      .filter((it) => it.key !== x)
      .forEach((it) => {
        let Aa = it.key,
          il = D.fetchers.get(Aa),
          Vt = to(void 0, il ? il.data : void 0);
        D.fetchers.set(Aa, Vt),
          zn(Aa),
          it.controller && L.set(Aa, it.controller);
      }),
      vt({ fetchers: new Map(D.fetchers) });
    let Wn = () => cn.forEach((it) => zn(it.key));
    _e.signal.addEventListener("abort", Wn);
    let { loaderResults: Se, fetcherResults: Ot } = await zo(al, cn, Lt, oe);
    if (_e.signal.aborted) return;
    if (
      (_e.signal.removeEventListener("abort", Wn),
      Ee.delete(x),
      L.delete(x),
      cn.forEach((it) => L.delete(it.key)),
      D.fetchers.has(x))
    ) {
      let it = Za(ke.data);
      D.fetchers.set(x, it);
    }
    let Cn = Fs(Se);
    if (Cn) return Zn(Lt, Cn.result, !1, { preventScrollReset: de });
    if (((Cn = Fs(Ot)), Cn))
      return E.add(Cn.key), Zn(Lt, Cn.result, !1, { preventScrollReset: de });
    let { loaderData: An, errors: vi } = Cy(D, Pt, Se, void 0, cn, Ot);
    hi(Sa),
      D.navigation.state === "loading" && Sa > ae
        ? (Ae(ee, "Expected pending action"),
          le && le.abort(),
          xn(D.navigation.location, {
            matches: Pt,
            loaderData: An,
            errors: vi,
            fetchers: new Map(D.fetchers),
          }))
        : (vt({
            errors: vi,
            loaderData: Ay(D.loaderData, An, Pt, vi),
            fetchers: new Map(D.fetchers),
          }),
          (Ie = !1));
  }
  async function Zi(x, A, z, X, J, oe, pe, ie, de, fe) {
    let ve = D.fetchers.get(x);
    Ht(x, to(fe, ve ? ve.data : void 0), { flushSync: ie });
    let ce = new AbortController(),
      _e = Lr(a.history, z, ce.signal);
    if (pe) {
      let ke = await yi(J, z, _e.signal, x);
      if (ke.type === "aborted") return;
      if (ke.type === "error") {
        lt(x, A, ke.error, { flushSync: ie });
        return;
      } else if (ke.matches) (J = ke.matches), (X = io(J, z));
      else {
        lt(x, A, vn(404, { pathname: z }), { flushSync: ie });
        return;
      }
    }
    L.set(x, ce);
    let Be = Z,
      at = Ur(c, d, _e, J, X, o, oe),
      He = (await xa(_e, at, oe, x))[X.route.id];
    if ((L.get(x) === ce && L.delete(x), !_e.signal.aborted)) {
      if (W.has(x)) {
        Ht(x, Za(void 0));
        return;
      }
      if (Ii(He))
        if (ae > Be) {
          Ht(x, Za(void 0));
          return;
        } else {
          E.add(x), await Zn(_e, He, !1, { preventScrollReset: de });
          return;
        }
      if (nn(He)) {
        lt(x, A, He.error);
        return;
      }
      Ht(x, Za(He.data));
    }
  }
  async function Zn(
    x,
    A,
    z,
    {
      submission: X,
      fetcherSubmission: J,
      preventScrollReset: oe,
      replace: pe,
    } = {}
  ) {
    A.response.headers.has("X-Remix-Revalidate") && (Ie = !0);
    let ie = A.response.headers.get("Location");
    Ae(ie, "Expected a Location header on the redirect Response"),
      (ie = Ty(ie, new URL(x.url), h));
    let de = uo(D.location, ie, { _isRedirect: !0 });
    if (r) {
      let at = !1;
      if (A.response.headers.has("X-Remix-Reload-Document")) at = !0;
      else if (qf.test(ie)) {
        const ot = Rv(ie, !0);
        at = ot.origin !== t.location.origin || wn(ot.pathname, h) == null;
      }
      if (at) {
        pe ? t.location.replace(ie) : t.location.assign(ie);
        return;
      }
    }
    le = null;
    let fe =
        pe === !0 || A.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: ve, formAction: ce, formEncType: _e } = D.navigation;
    !X && !J && ve && ce && _e && (X = Ny(D.navigation));
    let Be = X || J;
    if (Y1.has(A.response.status) && Be && an(Be.formMethod))
      await Tn(fe, de, {
        submission: { ...Be, formAction: ie },
        preventScrollReset: oe || ne,
        enableViewTransition: z ? Me : void 0,
      });
    else {
      let at = uf(de, X);
      await Tn(fe, de, {
        overrideNavigation: at,
        fetcherSubmission: J,
        preventScrollReset: oe || ne,
        enableViewTransition: z ? Me : void 0,
      });
    }
  }
  async function xa(x, A, z, X) {
    let J,
      oe = {};
    try {
      J = await t_(g, x, A, X, z, !1);
    } catch (pe) {
      return (
        A.filter((ie) => ie.shouldLoad).forEach((ie) => {
          oe[ie.route.id] = { type: "error", error: pe };
        }),
        oe
      );
    }
    if (x.signal.aborted) return oe;
    for (let [pe, ie] of Object.entries(J))
      if (o_(ie)) {
        let de = ie.result;
        oe[pe] = { type: "redirect", response: i_(de, x, pe, A, h) };
      } else oe[pe] = await a_(ie);
    return oe;
  }
  async function zo(x, A, z, X) {
    let J = xa(z, x, X, null),
      oe = Promise.all(
        A.map(async (de) => {
          if (de.matches && de.match && de.request && de.controller) {
            let ve = (await xa(de.request, de.matches, X, de.key))[
              de.match.route.id
            ];
            return { [de.key]: ve };
          } else
            return Promise.resolve({
              [de.key]: {
                type: "error",
                error: vn(404, { pathname: de.path }),
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
      $.forEach((x, A) => {
        L.has(A) && Le.add(A), zn(A);
      });
  }
  function Ht(x, A, z = {}) {
    D.fetchers.set(x, A),
      vt(
        { fetchers: new Map(D.fetchers) },
        { flushSync: (z && z.flushSync) === !0 }
      );
  }
  function lt(x, A, z, X = {}) {
    let J = zi(D.matches, A);
    St(x),
      vt(
        { errors: { [J.route.id]: z }, fetchers: new Map(D.fetchers) },
        { flushSync: (X && X.flushSync) === !0 }
      );
  }
  function Sn(x) {
    return (
      te.set(x, (te.get(x) || 0) + 1),
      W.has(x) && W.delete(x),
      D.fetchers.get(x) || X1
    );
  }
  function St(x) {
    let A = D.fetchers.get(x);
    L.has(x) && !(A && A.state === "loading" && Ee.has(x)) && zn(x),
      $.delete(x),
      Ee.delete(x),
      E.delete(x),
      W.delete(x),
      Le.delete(x),
      D.fetchers.delete(x);
  }
  function Fc(x) {
    let A = (te.get(x) || 0) - 1;
    A <= 0 ? (te.delete(x), W.add(x)) : te.set(x, A),
      vt({ fetchers: new Map(D.fetchers) });
  }
  function zn(x) {
    let A = L.get(x);
    A && (A.abort(), L.delete(x));
  }
  function Io(x) {
    for (let A of x) {
      let z = Sn(A),
        X = Za(z.data);
      D.fetchers.set(A, X);
    }
  }
  function fi() {
    let x = [],
      A = !1;
    for (let z of E) {
      let X = D.fetchers.get(z);
      Ae(X, `Expected fetcher: ${z}`),
        X.state === "loading" && (E.delete(z), x.push(z), (A = !0));
    }
    return Io(x), A;
  }
  function hi(x) {
    let A = [];
    for (let [z, X] of Ee)
      if (X < x) {
        let J = D.fetchers.get(z);
        Ae(J, `Expected fetcher: ${z}`),
          J.state === "loading" && (zn(z), Ee.delete(z), A.push(z));
      }
    return Io(A), A.length > 0;
  }
  function Jn(x, A) {
    let z = D.blockers.get(x) || eo;
    return se.get(x) !== A && se.set(x, A), z;
  }
  function mi(x) {
    D.blockers.delete(x), se.delete(x);
  }
  function In(x, A) {
    let z = D.blockers.get(x) || eo;
    Ae(
      (z.state === "unblocked" && A.state === "blocked") ||
        (z.state === "blocked" && A.state === "blocked") ||
        (z.state === "blocked" && A.state === "proceeding") ||
        (z.state === "blocked" && A.state === "unblocked") ||
        (z.state === "proceeding" && A.state === "unblocked"),
      `Invalid blocker state transition: ${z.state} -> ${A.state}`
    );
    let X = new Map(D.blockers);
    X.set(x, A), vt({ blockers: X });
  }
  function Bo({ currentLocation: x, nextLocation: A, historyAction: z }) {
    if (se.size === 0) return;
    se.size > 1 && mt(!1, "A router only supports one blocker at a time");
    let X = Array.from(se.entries()),
      [J, oe] = X[X.length - 1],
      pe = D.blockers.get(J);
    if (
      !(pe && pe.state === "proceeding") &&
      oe({ currentLocation: x, nextLocation: A, historyAction: z })
    )
      return J;
  }
  function Ji(x) {
    let A = vn(404, { pathname: x }),
      z = p || f,
      { matches: X, route: J } = Oy(z);
    return { notFoundMatches: X, route: J, error: A };
  }
  function Ho(x, A, z) {
    if (((O = x), (K = A), (M = z || null), !P && D.navigation === cf)) {
      P = !0;
      let X = Po(D.location, D.matches);
      X != null && vt({ restoreScrollPosition: X });
    }
    return () => {
      (O = null), (K = null), (M = null);
    };
  }
  function Wi(x, A) {
    return (
      (M &&
        M(
          x,
          A.map((X) => T1(X, D.loaderData))
        )) ||
      x.key
    );
  }
  function pi(x, A) {
    if (O && K) {
      let z = Wi(x, A);
      O[z] = K();
    }
  }
  function Po(x, A) {
    if (O) {
      let z = Wi(x, A),
        X = O[z];
      if (typeof X == "number") return X;
    }
    return null;
  }
  function gi(x, A, z) {
    if (a.patchRoutesOnNavigation)
      if (x) {
        if (Object.keys(x[0].params).length > 0)
          return { active: !0, matches: tc(A, z, h, !0) };
      } else return { active: !0, matches: tc(A, z, h, !0) || [] };
    return { active: !1, matches: null };
  }
  async function yi(x, A, z, X) {
    if (!a.patchRoutesOnNavigation) return { type: "success", matches: x };
    let J = x;
    for (;;) {
      let oe = p == null,
        pe = p || f,
        ie = d;
      try {
        await a.patchRoutesOnNavigation({
          signal: z,
          path: A,
          matches: J,
          fetcherKey: X,
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
      let de = Ja(pe, A, h);
      if (de) return { type: "success", matches: de };
      let fe = tc(pe, A, h, !0);
      if (
        !fe ||
        (J.length === fe.length &&
          J.every((ve, ce) => ve.route.id === fe[ce].route.id))
      )
        return { type: "success", matches: null };
      J = fe;
    }
  }
  function tl(x) {
    (d = {}), (p = cc(x, c, void 0, d));
  }
  function nl(x, A) {
    let z = p == null;
    wy(x, A, p || f, d, c), z && ((f = [...f]), vt({}));
  }
  return (
    (Q = {
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
      subscribe: jn,
      enableScrollRestoration: Ho,
      navigate: Fi,
      fetch: Uo,
      revalidate: Wr,
      createHref: (x) => a.history.createHref(x),
      encodeLocation: (x) => a.history.encodeLocation(x),
      getFetcher: Sn,
      deleteFetcher: Fc,
      dispose: et,
      getBlocker: Jn,
      deleteBlocker: mi,
      patchRoutes: nl,
      _internalFetchControllers: L,
      _internalSetRoutes: tl,
    }),
    Q
  );
}
function F1(a) {
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
  let h = Mc(o || ".", Nc(f), wn(a.pathname, r) || a.pathname, d === "path");
  if (
    (o == null && ((h.search = a.search), (h.hash = a.hash)),
    (o == null || o === "" || o === ".") && p)
  ) {
    let g = Gf(h.search);
    if (p.route.index && !g)
      h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index";
    else if (!p.route.index && g) {
      let b = new URLSearchParams(h.search),
        T = b.getAll("index");
      b.delete("index"),
        T.filter((O) => O).forEach((O) => b.append("index", O));
      let w = b.toString();
      h.search = w ? `?${w}` : "";
    }
  }
  return (
    r !== "/" && (h.pathname = h.pathname === "/" ? r : $n([r, h.pathname])),
    li(h)
  );
}
function vy(a, t, r) {
  if (!r || !F1(r)) return { path: t };
  if (r.formMethod && !s_(r.formMethod))
    return { path: t, error: vn(405, { method: r.formMethod }) };
  let o = () => ({ path: t, error: vn(400, { type: "invalid-body" }) }),
    d = (r.formMethod || "get").toUpperCase(),
    f = Hv(t);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!an(d)) return o();
      let T =
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
          text: T,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!an(d)) return o();
      try {
        let T = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: t,
          submission: {
            formMethod: d,
            formAction: f,
            formEncType: r.formEncType,
            formData: void 0,
            json: T,
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
  if (r.formData) (p = Sf(r.formData)), (h = r.formData);
  else if (r.body instanceof FormData) (p = Sf(r.body)), (h = r.body);
  else if (r.body instanceof URLSearchParams) (p = r.body), (h = Sy(p));
  else if (r.body == null) (p = new URLSearchParams()), (h = new FormData());
  else
    try {
      (p = new URLSearchParams(r.body)), (h = Sy(p));
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
  if (an(g.formMethod)) return { path: t, submission: g };
  let b = oi(t);
  return (
    a && b.search && Gf(b.search) && p.append("index", ""),
    (b.search = `?${p}`),
    { path: li(b), submission: g }
  );
}
function by(a, t, r, o, c, d, f, p, h, g, b, T, w, O, M, K, P, I, B) {
  var Ge;
  let q = B ? (nn(B[1]) ? B[1].error : B[1].data) : void 0,
    F = c.createURL(d.location),
    Q = c.createURL(h),
    D;
  if (b && d.errors) {
    let Re = Object.keys(d.errors)[0];
    D = f.findIndex((Ie) => Ie.route.id === Re);
  } else if (B && nn(B[1])) {
    let Re = B[0];
    D = f.findIndex((Ie) => Ie.route.id === Re) - 1;
  }
  let ee = B ? B[1].statusCode : void 0,
    ne = ee && ee >= 400,
    le = {
      currentUrl: F,
      currentParams: ((Ge = d.matches[0]) == null ? void 0 : Ge.params) || {},
      nextUrl: Q,
      nextParams: f[0].params,
      ...p,
      actionResult: q,
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
          ? (L = xf(Le, d.loaderData, d.errors))
          : Z1(d.loaderData, d.matches[Ie], Re) && (L = !0),
        L !== null)
      )
        return Tf(r, o, a, Re, g, t, L);
      let Z = ne
          ? !1
          : T ||
            F.pathname + F.search === Q.pathname + Q.search ||
            F.search !== Q.search ||
            J1(d.matches[Ie], Re),
        ae = { ...le, defaultShouldRevalidate: Z },
        Ee = fc(Re, ae);
      return Tf(r, o, a, Re, g, t, Ee, ae);
    }),
    ze = [];
  return (
    M.forEach((Re, Ie) => {
      if (b || !f.some(($) => $.route.id === Re.routeId) || O.has(Ie)) return;
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
      if (K.has(Ie)) return;
      let L = d.fetchers.get(Ie),
        Z = io(Le, Re.path),
        ae = new AbortController(),
        Ee = Lr(c, Re.path, ae.signal),
        E = null;
      if (w.has(Ie)) w.delete(Ie), (E = Ur(r, o, Ee, Le, Z, g, t));
      else if (L && L.state !== "idle" && L.data === void 0)
        T && (E = Ur(r, o, Ee, Le, Z, g, t));
      else {
        let $ = { ...le, defaultShouldRevalidate: ne ? !1 : T };
        fc(Z, $) && (E = Ur(r, o, Ee, Le, Z, g, t, $));
      }
      E &&
        ze.push({
          key: Ie,
          routeId: Re.routeId,
          path: Re.path,
          matches: E,
          match: Z,
          request: Ee,
          controller: ae,
        });
    }),
    { dsMatches: Me, revalidatingFetchers: ze }
  );
}
function xf(a, t, r) {
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
  let f = t.filter((h) => !d.some((g) => Uv(h, g))),
    p = cc(
      f,
      c,
      [a || "_", "patch", String((d == null ? void 0 : d.length) || "0")],
      o
    );
  d.push(...p);
}
function Uv(a, t) {
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
          return (c = t.children) == null ? void 0 : c.some((d) => Uv(r, d));
        })
    : !1;
}
var _y = new WeakMap(),
  jv = ({ key: a, route: t, manifest: r, mapRouteProperties: o }) => {
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
        T = c[a] !== void 0 && a !== "hasErrorBoundary";
      if (g)
        mt(
          !g,
          "Route property " +
            a +
            " is not a supported lazy route property. This property will be ignored."
        ),
          (f[a] = Promise.resolve());
      else if (T)
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
  Ey = new WeakMap();
function W1(a, t, r, o, c) {
  let d = r[a.id];
  if ((Ae(d, "No route found in manifest"), !a.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof a.lazy == "function") {
    let b = Ey.get(d);
    if (b) return { lazyRoutePromise: b, lazyHandlerPromise: b };
    let T = (async () => {
      Ae(typeof a.lazy == "function", "No lazy route function found");
      let w = await a.lazy(),
        O = {};
      for (let M in w) {
        let K = w[M];
        if (K === void 0) continue;
        let P = E1(M),
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
          : (O[M] = K);
      }
      Object.assign(d, O), Object.assign(d, { ...o(d), lazy: void 0 });
    })();
    return (
      Ey.set(d, T),
      T.catch(() => {}),
      { lazyRoutePromise: T, lazyHandlerPromise: T }
    );
  }
  let f = Object.keys(a.lazy),
    p = [],
    h;
  for (let b of f) {
    if (c && c.includes(b)) continue;
    let T = jv({ key: b, route: a, manifest: r, mapRouteProperties: o });
    T && (p.push(T), b === t && (h = T));
  }
  let g = p.length > 0 ? Promise.all(p).then(() => {}) : void 0;
  return (
    g == null || g.catch(() => {}),
    h == null || h.catch(() => {}),
    { lazyRoutePromise: g, lazyHandlerPromise: h }
  );
}
async function xy(a) {
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
        () => xy(a),
        (t, r) => ({ [r]: { type: "error", result: t } })
      )
    : xy(a);
}
async function zv(a, t, r, o) {
  let { matches: c, request: d, params: f, context: p } = a,
    h = { handlerResult: void 0 };
  try {
    let g = c.flatMap((T) =>
        T.route.unstable_middleware
          ? T.route.unstable_middleware.map((w) => [T.route.id, w])
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
    T,
    w = async () => {
      if (b) throw new Error("You may only call `next()` once per middleware");
      (b = !0), await Iv(a, t, r, o, c, d + 1);
    };
  try {
    let O = await g(
      { request: a.request, params: a.params, context: a.context },
      w
    );
    return b ? (O === void 0 ? T : O) : w();
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
  let d = jv({
      key: "unstable_middleware",
      route: o.route,
      manifest: t,
      mapRouteProperties: a,
    }),
    f = W1(o.route, an(r.method) ? "action" : "loader", t, a, c);
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
function Ur(a, t, r, o, c, d, f, p = null) {
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
          (T, w) => ({ [w]: { type: "error", result: T } })
        );
      },
    });
  try {
    await Promise.all(
      r.flatMap((g) => {
        var b, T;
        return [
          (b = g._lazyPromises) == null ? void 0 : b.handler,
          (T = g._lazyPromises) == null ? void 0 : T.route,
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
    h = an(a.method),
    g = h ? "action" : "loader",
    b = (T) => {
      let w,
        O = new Promise((P, I) => (w = I));
      (p = () => w()), a.signal.addEventListener("abort", p);
      let M = (P) =>
          typeof T != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${g}" [routeId: ${t.route.id}]`
                )
              )
            : T(
                { request: a, params: t.params, context: d },
                ...(P !== void 0 ? [P] : [])
              ),
        K = (async () => {
          try {
            return { type: "data", result: await (c ? c((I) => M(I)) : M()) };
          } catch (P) {
            return { type: "error", result: P };
          }
        })();
      return Promise.race([K, O]);
    };
  try {
    let T = h ? t.route.action : t.route.loader;
    if (r || o)
      if (T) {
        let w,
          [O] = await Promise.all([
            b(T).catch((M) => {
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
          throw vn(405, { method: a.method, pathname: M, routeId: t.route.id });
        } else return { type: "data", result: void 0 };
      }
    else if (T) f = await b(T);
    else {
      let w = new URL(a.url),
        O = w.pathname + w.search;
      throw vn(404, { pathname: O });
    }
  } catch (T) {
    return { type: "error", result: T };
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
            statusCode: fo(t) ? t.status : void 0,
            headers:
              (f = t.init) != null && f.headers
                ? new Headers(t.init.headers)
                : void 0,
          }
      : { type: "error", error: t, statusCode: fo(t) ? t.status : void 0 }
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
    !qf.test(d))
  ) {
    let f = o.slice(0, o.findIndex((p) => p.route.id === r) + 1);
    (d = Ef(new URL(t.url), f, c, d)), a.headers.set("Location", d);
  }
  return a;
}
function Ty(a, t, r) {
  if (qf.test(a)) {
    let o = a,
      c = o.startsWith("//") ? new URL(t.protocol + o) : new URL(o),
      d = wn(c.pathname, r) != null;
    if (c.origin === t.origin && d) return c.pathname + c.search + c.hash;
  }
  return a;
}
function Lr(a, t, r, o) {
  let c = a.createURL(Hv(t)).toString(),
    d = { signal: r };
  if (o && an(o.formMethod)) {
    let { formMethod: f, formEncType: p } = o;
    (d.method = f.toUpperCase()),
      p === "application/json"
        ? ((d.headers = new Headers({ "Content-Type": p })),
          (d.body = JSON.stringify(o.json)))
        : p === "text/plain"
        ? (d.body = o.text)
        : p === "application/x-www-form-urlencoded" && o.formData
        ? (d.body = Sf(o.formData))
        : (d.body = o.formData);
  }
  return new Request(c, d);
}
function Sf(a) {
  let t = new URLSearchParams();
  for (let [r, o] of a.entries())
    t.append(r, typeof o == "string" ? o : o.name);
  return t;
}
function Sy(a) {
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
    b = r && nn(r[1]) ? r[1].error : void 0;
  return (
    a.forEach((T) => {
      if (!(T.route.id in t)) return;
      let w = T.route.id,
        O = t[w];
      if (
        (Ae(!Ii(O), "Cannot handle redirect results in processLoaderData"),
        nn(O))
      ) {
        let M = O.error;
        if ((b !== void 0 && ((M = b), (b = void 0)), (f = f || {}), c))
          f[w] = M;
        else {
          let K = zi(a, w);
          f[K.route.id] == null && (f[K.route.id] = M);
        }
        o || (d[w] = Lv),
          h || ((h = !0), (p = fo(O.error) ? O.error.status : 500)),
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
        let { key: g, match: b, controller: T } = h,
          w = d[g];
        if (
          (Ae(w, "Did not find corresponding fetcher result"),
          !(T && T.signal.aborted))
        )
          if (nn(w)) {
            let O = zi(a.matches, b == null ? void 0 : b.route.id);
            (p && p[O.route.id]) || (p = { ...p, [O.route.id]: w.error }),
              a.fetchers.delete(g);
          } else if (Ii(w)) Ae(!1, "Unhandled fetcher revalidation redirect");
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
    ? nn(a[1])
      ? { actionData: {} }
      : { actionData: { [a[0]]: a[1].data } }
    : {};
}
function zi(a, t) {
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
function vn(
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
function Fs(a) {
  let t = Object.entries(a);
  for (let r = t.length - 1; r >= 0; r--) {
    let [o, c] = t[r];
    if (Ii(c)) return { key: o, result: c };
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
function nn(a) {
  return a.type === "error";
}
function Ii(a) {
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
function an(a) {
  return V1.has(a.toUpperCase());
}
function Gf(a) {
  return new URLSearchParams(a).getAll("index").some((t) => t === "");
}
function io(a, t) {
  let r = typeof t == "string" ? oi(t).search : t.search;
  if (a[a.length - 1].route.index && Gf(r || "")) return a[a.length - 1];
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
function uf(a, t) {
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
var Yi = R.createContext(null);
Yi.displayName = "DataRouter";
var yo = R.createContext(null);
yo.displayName = "DataRouterState";
var $f = R.createContext({ isTransitioning: !1 });
$f.displayName = "ViewTransition";
var Vv = R.createContext(new Map());
Vv.displayName = "Fetchers";
var m_ = R.createContext(null);
m_.displayName = "Await";
var Ln = R.createContext(null);
Ln.displayName = "Navigation";
var kc = R.createContext(null);
kc.displayName = "Location";
var Un = R.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Un.displayName = "Route";
var Yf = R.createContext(null);
Yf.displayName = "RouteError";
function p_(a, { relative: t } = {}) {
  Ae(
    Xr(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: o } = R.useContext(Ln),
    { hash: c, pathname: d, search: f } = bo(a, { relative: t }),
    p = d;
  return (
    r !== "/" && (p = d === "/" ? r : $n([r, d])),
    o.createHref({ pathname: p, search: f, hash: c })
  );
}
function Xr() {
  return R.useContext(kc) != null;
}
function Qn() {
  return (
    Ae(
      Xr(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    R.useContext(kc).location
  );
}
var qv =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Gv(a) {
  R.useContext(Ln).static || R.useLayoutEffect(a);
}
function vo() {
  let { isDataRoute: a } = R.useContext(Un);
  return a ? O_() : g_();
}
function g_() {
  Ae(
    Xr(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let a = R.useContext(Yi),
    { basename: t, navigator: r } = R.useContext(Ln),
    { matches: o } = R.useContext(Un),
    { pathname: c } = Qn(),
    d = JSON.stringify(Nc(o)),
    f = R.useRef(!1);
  return (
    Gv(() => {
      f.current = !0;
    }),
    R.useCallback(
      (h, g = {}) => {
        if ((mt(f.current, qv), !f.current)) return;
        if (typeof h == "number") {
          r.go(h);
          return;
        }
        let b = Mc(h, JSON.parse(d), c, g.relative === "path");
        a == null &&
          t !== "/" &&
          (b.pathname = b.pathname === "/" ? t : $n([t, b.pathname])),
          (g.replace ? r.replace : r.push)(b, g.state, g);
      },
      [t, r, d, c, a]
    )
  );
}
var y_ = R.createContext(null);
function v_(a) {
  let t = R.useContext(Un).outlet;
  return t && R.createElement(y_.Provider, { value: a }, t);
}
function bo(a, { relative: t } = {}) {
  let { matches: r } = R.useContext(Un),
    { pathname: o } = Qn(),
    c = JSON.stringify(Nc(r));
  return R.useMemo(() => Mc(a, JSON.parse(c), o, t === "path"), [a, c, o, t]);
}
function b_(a, t, r, o) {
  Ae(
    Xr(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: c, static: d } = R.useContext(Ln),
    { matches: f } = R.useContext(Un),
    p = f[f.length - 1],
    h = p ? p.params : {},
    g = p ? p.pathname : "/",
    b = p ? p.pathnameBase : "/",
    T = p && p.route;
  {
    let B = (T && T.path) || "";
    Yv(
      g,
      !T || B.endsWith("*") || B.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${
        B === "/" ? "*" : `${B}/*`
      }">.`
    );
  }
  let w = Qn(),
    O;
  O = w;
  let M = O.pathname || "/",
    K = M;
  if (b !== "/") {
    let B = b.replace(/^\//, "").split("/");
    K = "/" + M.replace(/^\//, "").split("/").slice(B.length).join("/");
  }
  let P =
    !d && r && r.matches && r.matches.length > 0
      ? r.matches
      : Ja(a, { pathname: K });
  return (
    mt(
      T || P != null,
      `No routes matched location "${O.pathname}${O.search}${O.hash}" `
    ),
    mt(
      P == null ||
        P[P.length - 1].route.element !== void 0 ||
        P[P.length - 1].route.Component !== void 0 ||
        P[P.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    T_(
      P &&
        P.map((B) =>
          Object.assign({}, B, {
            params: Object.assign({}, h, B.params),
            pathname: $n([
              b,
              c.encodeLocation
                ? c.encodeLocation(B.pathname).pathname
                : B.pathname,
            ]),
            pathnameBase:
              B.pathnameBase === "/"
                ? b
                : $n([
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
    t = fo(a)
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
    (f = R.createElement(
      R.Fragment,
      null,
      R.createElement("p", null, "💿 Hey developer 👋"),
      R.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        R.createElement("code", { style: d }, "ErrorBoundary"),
        " or",
        " ",
        R.createElement("code", { style: d }, "errorElement"),
        " prop on your route."
      )
    )),
    R.createElement(
      R.Fragment,
      null,
      R.createElement("h2", null, "Unexpected Application Error!"),
      R.createElement("h3", { style: { fontStyle: "italic" } }, t),
      r ? R.createElement("pre", { style: c }, r) : null,
      f
    )
  );
}
var __ = R.createElement(w_, null),
  E_ = class extends R.Component {
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
        ? R.createElement(
            Un.Provider,
            { value: this.props.routeContext },
            R.createElement(Yf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function x_({ routeContext: a, match: t, children: r }) {
  let o = R.useContext(Yi);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = t.route.id),
    R.createElement(Un.Provider, { value: a }, r)
  );
}
function T_(a, t = [], r = null, o = null) {
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
        let { loaderData: b, errors: T } = r,
          w =
            g.route.loader &&
            !b.hasOwnProperty(g.route.id) &&
            (!T || T[g.route.id] === void 0);
        if (g.route.lazy || w) {
          (f = !0), p >= 0 ? (c = c.slice(0, p + 1)) : (c = [c[0]]);
          break;
        }
      }
    }
  return c.reduceRight((h, g, b) => {
    let T,
      w = !1,
      O = null,
      M = null;
    r &&
      ((T = d && g.route.id ? d[g.route.id] : void 0),
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
    let K = t.concat(c.slice(0, b + 1)),
      P = () => {
        let I;
        return (
          T
            ? (I = O)
            : w
            ? (I = M)
            : g.route.Component
            ? (I = R.createElement(g.route.Component, null))
            : g.route.element
            ? (I = g.route.element)
            : (I = h),
          R.createElement(x_, {
            match: g,
            routeContext: { outlet: h, matches: K, isDataRoute: r != null },
            children: I,
          })
        );
      };
    return r && (g.route.ErrorBoundary || g.route.errorElement || b === 0)
      ? R.createElement(E_, {
          location: r.location,
          revalidation: r.revalidation,
          component: O,
          error: T,
          children: P(),
          routeContext: { outlet: null, matches: K, isDataRoute: !0 },
        })
      : P();
  }, null);
}
function Xf(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function S_(a) {
  let t = R.useContext(Yi);
  return Ae(t, Xf(a)), t;
}
function $v(a) {
  let t = R.useContext(yo);
  return Ae(t, Xf(a)), t;
}
function C_(a) {
  let t = R.useContext(Un);
  return Ae(t, Xf(a)), t;
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
function Kf() {
  let a = $v("useLoaderData"),
    t = Lc("useLoaderData");
  return a.loaderData[t];
}
function R_() {
  var o;
  let a = R.useContext(Yf),
    t = $v("useRouteError"),
    r = Lc("useRouteError");
  return a !== void 0 ? a : (o = t.errors) == null ? void 0 : o[r];
}
function O_() {
  let { router: a } = S_("useNavigate"),
    t = Lc("useNavigate"),
    r = R.useRef(!1);
  return (
    Gv(() => {
      r.current = !0;
    }),
    R.useCallback(
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
        element: R.createElement(a.Component),
        Component: void 0,
      })),
    a.HydrateFallback &&
      (a.hydrateFallbackElement &&
        mt(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        ),
      Object.assign(t, {
        hydrateFallbackElement: R.createElement(a.HydrateFallback),
        HydrateFallback: void 0,
      })),
    a.ErrorBoundary &&
      (a.errorElement &&
        mt(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        ),
      Object.assign(t, {
        errorElement: R.createElement(a.ErrorBoundary),
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
  let [r, o] = R.useState(a.state),
    [c, d] = R.useState(),
    [f, p] = R.useState({ isTransitioning: !1 }),
    [h, g] = R.useState(),
    [b, T] = R.useState(),
    [w, O] = R.useState(),
    M = R.useRef(new Map()),
    K = R.useCallback(
      (q, { deletedFetchers: F, flushSync: Q, viewTransitionOpts: D }) => {
        q.fetchers.forEach((ne, le) => {
          ne.data !== void 0 && M.current.set(le, ne.data);
        }),
          F.forEach((ne) => M.current.delete(ne)),
          Ly(
            Q === !1 || t != null,
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
          t && Q ? t(() => o(q)) : R.startTransition(() => o(q));
          return;
        }
        if (t && Q) {
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
            t(() => o(q));
          });
          ne.finished.finally(() => {
            t(() => {
              g(void 0), T(void 0), d(void 0), p({ isTransitioning: !1 });
            });
          }),
            t(() => T(ne));
          return;
        }
        b
          ? (h && h.resolve(),
            b.skipTransition(),
            O({
              state: q,
              currentLocation: D.currentLocation,
              nextLocation: D.nextLocation,
            }))
          : (d(q),
            p({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: D.currentLocation,
              nextLocation: D.nextLocation,
            }));
      },
      [a.window, t, b, h]
    );
  R.useLayoutEffect(() => a.subscribe(K), [a, K]),
    R.useEffect(() => {
      f.isTransitioning && !f.flushSync && g(new M_());
    }, [f]),
    R.useEffect(() => {
      if (h && c && a.window) {
        let q = c,
          F = h.promise,
          Q = a.window.document.startViewTransition(async () => {
            R.startTransition(() => o(q)), await F;
          });
        Q.finished.finally(() => {
          g(void 0), T(void 0), d(void 0), p({ isTransitioning: !1 });
        }),
          T(Q);
      }
    }, [c, h, a.window]),
    R.useEffect(() => {
      h && c && r.location.key === c.location.key && h.resolve();
    }, [h, b, r.location, c]),
    R.useEffect(() => {
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
  let P = R.useMemo(
      () => ({
        createHref: a.createHref,
        encodeLocation: a.encodeLocation,
        go: (q) => a.navigate(q),
        push: (q, F, Q) =>
          a.navigate(q, {
            state: F,
            preventScrollReset: Q == null ? void 0 : Q.preventScrollReset,
          }),
        replace: (q, F, Q) =>
          a.navigate(q, {
            replace: !0,
            state: F,
            preventScrollReset: Q == null ? void 0 : Q.preventScrollReset,
          }),
      }),
      [a]
    ),
    I = a.basename || "/",
    B = R.useMemo(
      () => ({ router: a, navigator: P, static: !1, basename: I }),
      [a, P, I]
    );
  return R.createElement(
    R.Fragment,
    null,
    R.createElement(
      Yi.Provider,
      { value: B },
      R.createElement(
        yo.Provider,
        { value: r },
        R.createElement(
          Vv.Provider,
          { value: M.current },
          R.createElement(
            $f.Provider,
            { value: f },
            R.createElement(
              I_,
              {
                basename: I,
                location: r.location,
                navigationType: r.historyAction,
                navigator: P,
              },
              R.createElement(L_, {
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
var L_ = R.memo(U_);
function U_({ routes: a, future: t, state: r }) {
  return b_(a, void 0, r, t);
}
function j_({ to: a, replace: t, state: r, relative: o }) {
  Ae(
    Xr(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: c } = R.useContext(Ln);
  mt(
    !c,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: d } = R.useContext(Un),
    { pathname: f } = Qn(),
    p = vo(),
    h = Mc(a, Nc(d), f, o === "path"),
    g = JSON.stringify(h);
  return (
    R.useEffect(() => {
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
    p = R.useMemo(
      () => ({ basename: f, navigator: c, static: d, future: {} }),
      [f, c, d]
    );
  typeof r == "string" && (r = oi(r));
  let {
      pathname: h = "/",
      search: g = "",
      hash: b = "",
      state: T = null,
      key: w = "default",
    } = r,
    O = R.useMemo(() => {
      let M = wn(h, f);
      return M == null
        ? null
        : {
            location: { pathname: M, search: g, hash: b, state: T, key: w },
            navigationType: o,
          };
    }, [f, h, g, b, T, w, o]);
  return (
    mt(
      O != null,
      `<Router basename="${f}"> is not able to match the URL "${h}${g}${b}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    O == null
      ? null
      : R.createElement(
          Ln.Provider,
          { value: p },
          R.createElement(kc.Provider, { children: t, value: O })
        )
  );
}
var nc = "get",
  ac = "application/x-www-form-urlencoded";
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
var Zs = null;
function G_() {
  if (Zs === null)
    try {
      new FormData(document.createElement("form"), 0), (Zs = !1);
    } catch {
      Zs = !0;
    }
  return Zs;
}
var $_ = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function df(a) {
  return a != null && !$_.has(a)
    ? (mt(
        !1,
        `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ac}"`
      ),
      null)
    : a;
}
function Y_(a, t) {
  let r, o, c, d, f;
  if (H_(a)) {
    let p = a.getAttribute("action");
    (o = p ? wn(p, t) : null),
      (r = a.getAttribute("method") || nc),
      (c = df(a.getAttribute("enctype")) || ac),
      (d = new FormData(a));
  } else if (B_(a) || (P_(a) && (a.type === "submit" || a.type === "image"))) {
    let p = a.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let h = a.getAttribute("formaction") || p.getAttribute("action");
    if (
      ((o = h ? wn(h, t) : null),
      (r = a.getAttribute("formmethod") || p.getAttribute("method") || nc),
      (c =
        df(a.getAttribute("formenctype")) ||
        df(p.getAttribute("enctype")) ||
        ac),
      (d = new FormData(p, a)),
      !G_())
    ) {
      let { name: g, type: b, value: T } = a;
      if (b === "image") {
        let w = g ? `${g}.` : "";
        d.append(`${w}x`, "0"), d.append(`${w}y`, "0");
      } else g && d.append(g, T);
    }
  } else {
    if (Uc(a))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (r = nc), (o = null), (c = ac), (f = a);
  }
  return (
    d && c === "text/plain" && ((f = d), (d = void 0)),
    { action: o, method: r.toLowerCase(), encType: c, formData: d, body: f }
  );
}
function Qf(a, t) {
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
async function Q_(a, t, r) {
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
function Uy(a, t, r, o, c, d) {
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
        var T;
        let b = o.routes[h.route.id];
        if (!b || !b.hasLoader) return !1;
        if (f(h, g) || p(h, g)) return !0;
        if (h.route.shouldRevalidate) {
          let w = h.route.shouldRevalidate({
            currentUrl: new URL(c.pathname + c.search + c.hash, window.origin),
            currentParams: ((T = r[0]) == null ? void 0 : T.params) || {},
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
function F_(a, t, { includeHydrateFallback: r } = {}) {
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
var eE = new Set([100, 101, 204, 205]);
function tE(a, t) {
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
      : t && wn(r.pathname, t) === "/"
      ? (r.pathname = `${t.replace(/\/$/, "")}/_root.data`)
      : (r.pathname = `${r.pathname.replace(/\/$/, "")}.data`),
    r
  );
}
function Xv() {
  let a = R.useContext(Yi);
  return (
    Qf(
      a,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    a
  );
}
function nE() {
  let a = R.useContext(yo);
  return (
    Qf(
      a,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    a
  );
}
var Ff = R.createContext(void 0);
Ff.displayName = "FrameworkContext";
function Kv() {
  let a = R.useContext(Ff);
  return (
    Qf(a, "You must render this element inside a <HydratedRouter> element"), a
  );
}
function aE(a, t) {
  let r = R.useContext(Ff),
    [o, c] = R.useState(!1),
    [d, f] = R.useState(!1),
    {
      onFocus: p,
      onBlur: h,
      onMouseEnter: g,
      onMouseLeave: b,
      onTouchStart: T,
    } = t,
    w = R.useRef(null);
  R.useEffect(() => {
    if ((a === "render" && f(!0), a === "viewport")) {
      let K = (I) => {
          I.forEach((B) => {
            f(B.isIntersecting);
          });
        },
        P = new IntersectionObserver(K, { threshold: 0.5 });
      return (
        w.current && P.observe(w.current),
        () => {
          P.disconnect();
        }
      );
    }
  }, [a]),
    R.useEffect(() => {
      if (o) {
        let K = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(K);
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
            onTouchStart: no(T, O),
          },
        ]
    : [!1, w, {}];
}
function no(a, t) {
  return (r) => {
    a && a(r), r.defaultPrevented || t(r);
  };
}
function iE({ page: a, ...t }) {
  let { router: r } = Xv(),
    o = R.useMemo(() => Ja(r.routes, a, r.basename), [r.routes, a, r.basename]);
  return o ? R.createElement(lE, { page: a, matches: o, ...t }) : null;
}
function rE(a) {
  let { manifest: t, routeModules: r } = Kv(),
    [o, c] = R.useState([]);
  return (
    R.useEffect(() => {
      let d = !1;
      return (
        Q_(a, t, r).then((f) => {
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
function lE({ page: a, matches: t, ...r }) {
  let o = Qn(),
    { manifest: c, routeModules: d } = Kv(),
    { basename: f } = Xv(),
    { loaderData: p, matches: h } = nE(),
    g = R.useMemo(() => Uy(a, t, h, c, o, "data"), [a, t, h, c, o]),
    b = R.useMemo(() => Uy(a, t, h, c, o, "assets"), [a, t, h, c, o]),
    T = R.useMemo(() => {
      if (a === o.pathname + o.search + o.hash) return [];
      let M = new Set(),
        K = !1;
      if (
        (t.forEach((I) => {
          var q;
          let B = c.routes[I.route.id];
          !B ||
            !B.hasLoader ||
            ((!g.some((F) => F.route.id === I.route.id) &&
              I.route.id in p &&
              (q = d[I.route.id]) != null &&
              q.shouldRevalidate) ||
            B.hasClientLoader
              ? (K = !0)
              : M.add(I.route.id));
        }),
        M.size === 0)
      )
        return [];
      let P = tE(a, f);
      return (
        K &&
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
    w = R.useMemo(() => F_(b, c), [b, c]),
    O = rE(b);
  return R.createElement(
    R.Fragment,
    null,
    T.map((M) =>
      R.createElement("link", {
        key: M,
        rel: "prefetch",
        as: "fetch",
        href: M,
        ...r,
      })
    ),
    w.map((M) =>
      R.createElement("link", { key: M, rel: "modulepreload", href: M, ...r })
    ),
    O.map(({ key: M, link: K }) => R.createElement("link", { key: M, ...K }))
  );
}
function oE(...a) {
  return (t) => {
    a.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var Qv =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Qv && (window.__reactRouterVersion = "7.6.0");
} catch {}
function sE(a, t) {
  return Q1({
    basename: t == null ? void 0 : t.basename,
    unstable_getContext: t == null ? void 0 : t.unstable_getContext,
    future: t == null ? void 0 : t.future,
    history: g1({ window: t == null ? void 0 : t.window }),
    hydrationData: cE(),
    routes: a,
    mapRouteProperties: D_,
    hydrationRouteProperties: N_,
    dataStrategy: t == null ? void 0 : t.dataStrategy,
    patchRoutesOnNavigation: t == null ? void 0 : t.patchRoutesOnNavigation,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function cE() {
  let a = window == null ? void 0 : window.__staticRouterHydrationData;
  return a && a.errors && (a = { ...a, errors: uE(a.errors) }), a;
}
function uE(a) {
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
var Fv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Yn = R.forwardRef(function (
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
      viewTransition: T,
      ...w
    },
    O
  ) {
    let { basename: M } = R.useContext(Ln),
      K = typeof g == "string" && Fv.test(g),
      P,
      I = !1;
    if (typeof g == "string" && K && ((P = g), Qv))
      try {
        let le = new URL(window.location.href),
          Me = g.startsWith("//") ? new URL(le.protocol + g) : new URL(g),
          ze = wn(Me.pathname, M);
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
      [q, F, Q] = aE(o, w),
      D = hE(g, {
        replace: f,
        state: p,
        target: h,
        preventScrollReset: b,
        relative: c,
        viewTransition: T,
      });
    function ee(le) {
      t && t(le), le.defaultPrevented || D(le);
    }
    let ne = R.createElement("a", {
      ...w,
      ...Q,
      href: P || B,
      onClick: I || d ? t : ee,
      ref: oE(O, F),
      target: h,
      "data-discover": !K && r === "render" ? "true" : void 0,
    });
    return q && !K
      ? R.createElement(R.Fragment, null, ne, R.createElement(iE, { page: B }))
      : ne;
  });
Yn.displayName = "Link";
var ro = R.forwardRef(function (
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
  let T = bo(f, { relative: g.relative }),
    w = Qn(),
    O = R.useContext(yo),
    { navigator: M, basename: K } = R.useContext(Ln),
    P = O != null && vE(T) && p === !0,
    I = M.encodeLocation ? M.encodeLocation(T).pathname : T.pathname,
    B = w.pathname,
    q =
      O && O.navigation && O.navigation.location
        ? O.navigation.location.pathname
        : null;
  r ||
    ((B = B.toLowerCase()),
    (q = q ? q.toLowerCase() : null),
    (I = I.toLowerCase())),
    q && K && (q = wn(q, K) || q);
  const F = I !== "/" && I.endsWith("/") ? I.length - 1 : I.length;
  let Q = B === I || (!c && B.startsWith(I) && B.charAt(F) === "/"),
    D =
      q != null &&
      (q === I || (!c && q.startsWith(I) && q.charAt(I.length) === "/")),
    ee = { isActive: Q, isPending: D, isTransitioning: P },
    ne = Q ? t : void 0,
    le;
  typeof o == "function"
    ? (le = o(ee))
    : (le = [
        o,
        Q ? "active" : null,
        D ? "pending" : null,
        P ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Me = typeof d == "function" ? d(ee) : d;
  return R.createElement(
    Yn,
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
var dE = R.forwardRef(
  (
    {
      discover: a = "render",
      fetcherKey: t,
      navigate: r,
      reloadDocument: o,
      replace: c,
      state: d,
      method: f = nc,
      action: p,
      onSubmit: h,
      relative: g,
      preventScrollReset: b,
      viewTransition: T,
      ...w
    },
    O
  ) => {
    let M = gE(),
      K = yE(p, { relative: g }),
      P = f.toLowerCase() === "get" ? "get" : "post",
      I = typeof p == "string" && Fv.test(p),
      B = (q) => {
        if ((h && h(q), q.defaultPrevented)) return;
        q.preventDefault();
        let F = q.nativeEvent.submitter,
          Q = (F == null ? void 0 : F.getAttribute("formmethod")) || f;
        M(F || q.currentTarget, {
          fetcherKey: t,
          method: Q,
          navigate: r,
          replace: c,
          state: d,
          relative: g,
          preventScrollReset: b,
          viewTransition: T,
        });
      };
    return R.createElement("form", {
      ref: O,
      method: P,
      action: K,
      onSubmit: o ? h : B,
      ...w,
      "data-discover": !I && a === "render" ? "true" : void 0,
    });
  }
);
dE.displayName = "Form";
function fE(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Zv(a) {
  let t = R.useContext(Yi);
  return Ae(t, fE(a)), t;
}
function hE(
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
  let p = vo(),
    h = Qn(),
    g = bo(a, { relative: d });
  return R.useCallback(
    (b) => {
      if (q_(b, t)) {
        b.preventDefault();
        let T = r !== void 0 ? r : li(h) === li(g);
        p(a, {
          replace: T,
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
var mE = 0,
  pE = () => `__${String(++mE)}__`;
function gE() {
  let { router: a } = Zv("useSubmit"),
    { basename: t } = R.useContext(Ln),
    r = A_();
  return R.useCallback(
    async (o, c = {}) => {
      let { action: d, method: f, encType: p, formData: h, body: g } = Y_(o, t);
      if (c.navigate === !1) {
        let b = c.fetcherKey || pE();
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
function yE(a, { relative: t } = {}) {
  let { basename: r } = R.useContext(Ln),
    o = R.useContext(Un);
  Ae(o, "useFormAction must be used inside a RouteContext");
  let [c] = o.matches.slice(-1),
    d = { ...bo(a || ".", { relative: t }) },
    f = Qn();
  if (a == null) {
    d.search = f.search;
    let p = new URLSearchParams(d.search),
      h = p.getAll("index");
    if (h.some((b) => b === "")) {
      p.delete("index"),
        h.filter((T) => T).forEach((T) => p.append("index", T));
      let b = p.toString();
      d.search = b ? `?${b}` : "";
    }
  }
  return (
    (!a || a === ".") &&
      c.route.index &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (d.pathname = d.pathname === "/" ? r : $n([r, d.pathname])),
    li(d)
  );
}
function vE(a, t = {}) {
  let r = R.useContext($f);
  Ae(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = Zv("useViewTransitionState"),
    c = bo(a, { relative: t.relative });
  if (!r.isTransitioning) return !1;
  let d = wn(r.currentLocation.pathname, o) || r.currentLocation.pathname,
    f = wn(r.nextLocation.pathname, o) || r.nextLocation.pathname;
  return uc(c.pathname, f) != null || uc(c.pathname, d) != null;
}
[...eE];
const bE = () => v.jsx("div", {});
var Jv = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  jy = Ve.createContext && Ve.createContext(Jv),
  wE = ["attr", "size", "title"];
function _E(a, t) {
  if (a == null) return {};
  var r = EE(a, t),
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
function EE(a, t) {
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
          xE(a, o, r[o]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r))
      : zy(Object(r)).forEach(function (o) {
          Object.defineProperty(a, o, Object.getOwnPropertyDescriptor(r, o));
        });
  }
  return a;
}
function xE(a, t, r) {
  return (
    (t = TE(t)),
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
function TE(a) {
  var t = SE(a, "string");
  return typeof t == "symbol" ? t : t + "";
}
function SE(a, t) {
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
    Ve.createElement(CE, hc({ attr: mc({}, a.attr) }, t), Wv(a.child));
}
function CE(a) {
  var t = (r) => {
    var { attr: o, size: c, title: d } = a,
      f = _E(a, wE),
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
  return jy !== void 0
    ? Ve.createElement(jy.Consumer, null, (r) => t(r))
    : t(Jv);
}
function AE(a) {
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
const RE = () => {};
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
  OE = function (a) {
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
          T = ((d & 3) << 4) | (p >> 4);
        let w = ((p & 15) << 2) | (g >> 6),
          O = g & 63;
        h || ((O = 64), f || (w = 64)), o.push(r[b], r[T], r[w], r[O]);
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
        : OE(this.decodeStringToByteArray(a, t));
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
        const T = c < a.length ? r[a.charAt(c)] : 64;
        if ((++c, d == null || p == null || g == null || T == null))
          throw new DE();
        const w = (d << 2) | (p >> 4);
        if ((o.push(w), g !== 64)) {
          const O = ((p << 4) & 240) | (g >> 2);
          if ((o.push(O), T !== 64)) {
            const M = ((g << 6) & 192) | T;
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
class DE extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const NE = function (a) {
    const t = t0(a);
    return n0.encodeByteArray(t, !0);
  },
  a0 = function (a) {
    return NE(a).replace(/\./g, "");
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
 */ function ME() {
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
 */ const kE = () => ME().__FIREBASE_DEFAULTS__,
  LE = () => {
    if (typeof process > "u" || typeof Iy > "u") return;
    const a = Iy.__FIREBASE_DEFAULTS__;
    if (a) return JSON.parse(a);
  },
  UE = () => {
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
      return RE() || kE() || LE() || UE();
    } catch (a) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);
      return;
    }
  },
  jE = (a) => {
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
 */ class zE {
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
async function IE(a) {
  return (await fetch(a, { credentials: "include" })).ok;
}
const so = {};
function BE() {
  const a = { prod: [], emulator: [] };
  for (const t of Object.keys(so)) so[t] ? a.emulator.push(t) : a.prod.push(t);
  return a;
}
function HE(a) {
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
    so[a] === t ||
    so[a] ||
    By
  )
    return;
  so[a] = t;
  function r(w) {
    return `__firebase__banner__${w}`;
  }
  const o = "__firebase__banner",
    d = BE().prod.length > 0;
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
  function T() {
    const w = HE(o),
      O = r("text"),
      M = document.getElementById(O) || document.createElement("span"),
      K = r("learnmore"),
      P = document.getElementById(K) || document.createElement("a"),
      I = r("preprendIcon"),
      B =
        document.getElementById(I) ||
        document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (w.created) {
      const q = w.element;
      p(q), b(P, K);
      const F = g();
      h(B, I), q.append(B, M, P, F), document.body.appendChild(q);
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
    ? window.addEventListener("DOMContentLoaded", T)
    : T();
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
function PE() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())
  );
}
function VE() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function qE() {
  const a =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof a == "object" && a.id !== void 0;
}
function GE() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function $E() {
  const a = zt();
  return a.indexOf("MSIE ") >= 0 || a.indexOf("Trident/") >= 0;
}
function YE() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function XE() {
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
 */ const KE = "FirebaseError";
class ci extends Error {
  constructor(t, r, o) {
    super(r),
      (this.code = t),
      (this.customData = o),
      (this.name = KE),
      Object.setPrototypeOf(this, ci.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, wo.prototype.create);
  }
}
class wo {
  constructor(t, r, o) {
    (this.service = t), (this.serviceName = r), (this.errors = o);
  }
  create(t, ...r) {
    const o = r[0] || {},
      c = `${this.service}/${t}`,
      d = this.errors[t],
      f = d ? QE(d, o) : "Error",
      p = `${this.serviceName}: ${f} (${c}).`;
    return new ci(c, p, o);
  }
}
function QE(a, t) {
  return a.replace(FE, (r, o) => {
    const c = t[o];
    return c != null ? String(c) : `<${o}?>`;
  });
}
const FE = /\{\$([^}]+)}/g;
function ZE(a) {
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
 */ function _o(a) {
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
function JE(a, t) {
  const r = new WE(a, t);
  return r.subscribe.bind(r);
}
class WE {
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
    ex(t, ["next", "error", "complete"])
      ? (c = t)
      : (c = { next: t, error: r, complete: o }),
      c.next === void 0 && (c.next = ff),
      c.error === void 0 && (c.error = ff),
      c.complete === void 0 && (c.complete = ff);
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
function ex(a, t) {
  if (typeof a != "object" || a === null) return !1;
  for (const r of t) if (r in a && typeof a[r] == "function") return !0;
  return !1;
}
function ff() {}
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
 */ function Fn(a) {
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
 */ const ji = "[DEFAULT]";
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
 */ class tx {
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
      const o = new zE();
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
      if (ax(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: ji });
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
  clearInstance(t = ji) {
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
  isInitialized(t = ji) {
    return this.instances.has(t);
  }
  getOptions(t = ji) {
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
        instanceIdentifier: nx(t),
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
  normalizeInstanceIdentifier(t = ji) {
    return this.component ? (this.component.multipleInstances ? t : ji) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function nx(a) {
  return a === ji ? void 0 : a;
}
function ax(a) {
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
 */ class ix {
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
    const r = new tx(t, this);
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
const rx = {
    debug: We.DEBUG,
    verbose: We.VERBOSE,
    info: We.INFO,
    warn: We.WARN,
    error: We.ERROR,
    silent: We.SILENT,
  },
  lx = We.INFO,
  ox = {
    [We.DEBUG]: "log",
    [We.VERBOSE]: "log",
    [We.INFO]: "info",
    [We.WARN]: "warn",
    [We.ERROR]: "error",
  },
  sx = (a, t, ...r) => {
    if (t < a.logLevel) return;
    const o = new Date().toISOString(),
      c = ox[t];
    if (c) console[c](`[${o}]  ${a.name}:`, ...r);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      );
  };
class s0 {
  constructor(t) {
    (this.name = t),
      (this._logLevel = lx),
      (this._logHandler = sx),
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
    this._logLevel = typeof t == "string" ? rx[t] : t;
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
const cx = (a, t) => t.some((r) => a instanceof r);
let Py, Vy;
function ux() {
  return (
    Py ||
    (Py = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function dx() {
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
  Cf = new WeakMap(),
  u0 = new WeakMap(),
  hf = new WeakMap(),
  Wf = new WeakMap();
function fx(a) {
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
function hx(a) {
  if (Cf.has(a)) return;
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
  Cf.set(a, t);
}
let Af = {
  get(a, t, r) {
    if (a instanceof IDBTransaction) {
      if (t === "done") return Cf.get(a);
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
function mx(a) {
  Af = a(Af);
}
function px(a) {
  return a === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...r) {
        const o = a.call(mf(this), t, ...r);
        return u0.set(o, t.sort ? t.sort() : [t]), ii(o);
      }
    : dx().includes(a)
    ? function (...t) {
        return a.apply(mf(this), t), ii(c0.get(this));
      }
    : function (...t) {
        return ii(a.apply(mf(this), t));
      };
}
function gx(a) {
  return typeof a == "function"
    ? px(a)
    : (a instanceof IDBTransaction && hx(a),
      cx(a, ux()) ? new Proxy(a, Af) : a);
}
function ii(a) {
  if (a instanceof IDBRequest) return fx(a);
  if (hf.has(a)) return hf.get(a);
  const t = gx(a);
  return t !== a && (hf.set(a, t), Wf.set(t, a)), t;
}
const mf = (a) => Wf.get(a);
function yx(a, t, { blocked: r, upgrade: o, blocking: c, terminated: d } = {}) {
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
const vx = ["get", "getKey", "getAll", "getAllKeys", "count"],
  bx = ["put", "add", "delete", "clear"],
  pf = new Map();
function qy(a, t) {
  if (!(a instanceof IDBDatabase && !(t in a) && typeof t == "string")) return;
  if (pf.get(t)) return pf.get(t);
  const r = t.replace(/FromIndex$/, ""),
    o = t !== r,
    c = bx.includes(r);
  if (
    !(r in (o ? IDBIndex : IDBObjectStore).prototype) ||
    !(c || vx.includes(r))
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
  return pf.set(t, d), d;
}
mx((a) => ({
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
 */ class wx {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((r) => {
        if (_x(r)) {
          const o = r.getImmediate();
          return `${o.library}/${o.version}`;
        } else return null;
      })
      .filter((r) => r)
      .join(" ");
  }
}
function _x(a) {
  const t = a.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const Rf = "@firebase/app",
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
  Ex = "@firebase/app-compat",
  xx = "@firebase/analytics-compat",
  Tx = "@firebase/analytics",
  Sx = "@firebase/app-check-compat",
  Cx = "@firebase/app-check",
  Ax = "@firebase/auth",
  Rx = "@firebase/auth-compat",
  Ox = "@firebase/database",
  Dx = "@firebase/data-connect",
  Nx = "@firebase/database-compat",
  Mx = "@firebase/functions",
  kx = "@firebase/functions-compat",
  Lx = "@firebase/installations",
  Ux = "@firebase/installations-compat",
  jx = "@firebase/messaging",
  zx = "@firebase/messaging-compat",
  Ix = "@firebase/performance",
  Bx = "@firebase/performance-compat",
  Hx = "@firebase/remote-config",
  Px = "@firebase/remote-config-compat",
  Vx = "@firebase/storage",
  qx = "@firebase/storage-compat",
  Gx = "@firebase/firestore",
  $x = "@firebase/vertexai",
  Yx = "@firebase/firestore-compat",
  Xx = "firebase",
  Kx = "11.7.3";
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
 */ const Of = "[DEFAULT]",
  Qx = {
    [Rf]: "fire-core",
    [Ex]: "fire-core-compat",
    [Tx]: "fire-analytics",
    [xx]: "fire-analytics-compat",
    [Cx]: "fire-app-check",
    [Sx]: "fire-app-check-compat",
    [Ax]: "fire-auth",
    [Rx]: "fire-auth-compat",
    [Ox]: "fire-rtdb",
    [Dx]: "fire-data-connect",
    [Nx]: "fire-rtdb-compat",
    [Mx]: "fire-fn",
    [kx]: "fire-fn-compat",
    [Lx]: "fire-iid",
    [Ux]: "fire-iid-compat",
    [jx]: "fire-fcm",
    [zx]: "fire-fcm-compat",
    [Ix]: "fire-perf",
    [Bx]: "fire-perf-compat",
    [Hx]: "fire-rc",
    [Px]: "fire-rc-compat",
    [Vx]: "fire-gcs",
    [qx]: "fire-gcs-compat",
    [Gx]: "fire-fst",
    [Yx]: "fire-fst-compat",
    [$x]: "fire-vertex",
    "fire-js": "fire-js",
    [Xx]: "fire-js-all",
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
  Fx = new Map(),
  Df = new Map();
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
function ho(a) {
  const t = a.name;
  if (Df.has(t))
    return (
      ba.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  Df.set(t, a);
  for (const r of pc.values()) $y(r, a);
  for (const r of Fx.values()) $y(r, a);
  return !0;
}
function d0(a, t) {
  const r = a.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return r && r.triggerHeartbeat(), a.container.getProvider(t);
}
function bn(a) {
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
 */ const Zx = {
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
  ri = new wo("app", "Firebase", Zx);
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
 */ class Jx {
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
 */ const Eo = Kx;
function f0(a, t = {}) {
  let r = a;
  typeof t != "object" && (t = { name: t });
  const o = Object.assign({ name: Of, automaticDataCollectionEnabled: !1 }, t),
    c = o.name;
  if (typeof c != "string" || !c)
    throw ri.create("bad-app-name", { appName: String(c) });
  if ((r || (r = r0()), !r)) throw ri.create("no-options");
  const d = pc.get(c);
  if (d) {
    if (Vr(r, d.options) && Vr(o, d.config)) return d;
    throw ri.create("duplicate-app", { appName: c });
  }
  const f = new ix(c);
  for (const h of Df.values()) f.addComponent(h);
  const p = new Jx(r, o, f);
  return pc.set(c, p), p;
}
function Wx(a = Of) {
  const t = pc.get(a);
  if (!t && a === Of && r0()) return f0();
  if (!t) throw ri.create("no-app", { appName: a });
  return t;
}
function jr(a, t, r) {
  var o;
  let c = (o = Qx[a]) !== null && o !== void 0 ? o : a;
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
  ho(new qr(`${c}-version`, () => ({ library: c, version: t }), "VERSION"));
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
 */ const eT = "firebase-heartbeat-database",
  tT = 1,
  mo = "firebase-heartbeat-store";
let gf = null;
function h0() {
  return (
    gf ||
      (gf = yx(eT, tT, {
        upgrade: (a, t) => {
          switch (t) {
            case 0:
              try {
                a.createObjectStore(mo);
              } catch (r) {
                console.warn(r);
              }
          }
        },
      }).catch((a) => {
        throw ri.create("idb-open", { originalErrorMessage: a.message });
      })),
    gf
  );
}
async function nT(a) {
  try {
    const r = (await h0()).transaction(mo),
      o = await r.objectStore(mo).get(m0(a));
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
    const o = (await h0()).transaction(mo, "readwrite");
    await o.objectStore(mo).put(t, m0(a)), await o.done;
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
 */ const aT = 1024,
  iT = 30;
class rT {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const r = this.container.getProvider("app").getImmediate();
    (this._storage = new oT(r)),
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
        this._heartbeatsCache.heartbeats.length > iT)
      ) {
        const f = sT(this._heartbeatsCache.heartbeats);
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
        { heartbeatsToSend: o, unsentEntries: c } = lT(
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
function lT(a, t = aT) {
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
class oT {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return YE()
      ? XE()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const r = await nT(this.app);
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
function sT(a) {
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
 */ function cT(a) {
  ho(new qr("platform-logger", (t) => new wx(t), "PRIVATE")),
    ho(new qr("heartbeat", (t) => new rT(t), "PRIVATE")),
    jr(Rf, Gy, a),
    jr(Rf, Gy, "esm2017"),
    jr("fire-js", "");
}
cT("");
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
const uT = p0,
  g0 = new wo("auth", "Firebase", p0());
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
function dT(a, ...t) {
  gc.logLevel <= We.WARN && gc.warn(`Auth (${Eo}): ${a}`, ...t);
}
function ic(a, ...t) {
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
 */ function _n(a, ...t) {
  throw nh(a, ...t);
}
function Mn(a, ...t) {
  return nh(a, ...t);
}
function th(a, t, r) {
  const o = Object.assign(Object.assign({}, uT()), { [t]: r });
  return new wo("auth", "Firebase", o).create(t, { appName: a.name });
}
function ya(a) {
  return th(
    a,
    "operation-not-supported-in-this-environment",
    "Operations that alter the current user are not supported in conjunction with FirebaseServerApp"
  );
}
function fT(a, t, r) {
  const o = r;
  if (!(t instanceof o))
    throw (
      (o.name !== t.constructor.name && _n(a, "argument-error"),
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
  throw (ic(t), new Error(t));
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
 */ function Nf() {
  var a;
  return (
    (typeof self < "u" &&
      ((a = self.location) === null || a === void 0 ? void 0 : a.href)) ||
    ""
  );
}
function hT() {
  return Qy() === "http:" || Qy() === "https:";
}
function Qy() {
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
 */ function mT() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (hT() || qE() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function pT() {
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
 */ class xo {
  constructor(t, r) {
    (this.shortDelay = t),
      (this.longDelay = r),
      wa(r > t, "Short delay should be less than long delay!"),
      (this.isMobile = PE() || GE());
  }
  get() {
    return mT()
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
 */ const gT = {
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
 */ const yT = [
    "/v1/accounts:signInWithCustomToken",
    "/v1/accounts:signInWithEmailLink",
    "/v1/accounts:signInWithIdp",
    "/v1/accounts:signInWithPassword",
    "/v1/accounts:signInWithPhoneNumber",
    "/v1/token",
  ],
  vT = new xo(3e4, 6e4);
function ui(a, t) {
  return a.tenantId && !t.tenantId
    ? Object.assign(Object.assign({}, t), { tenantId: a.tenantId })
    : t;
}
async function Ea(a, t, r, o, c = {}) {
  return v0(a, c, async () => {
    let d = {},
      f = {};
    o && (t === "GET" ? (f = o) : (d = { body: JSON.stringify(o) }));
    const p = _o(Object.assign({ key: a.config.apiKey }, f)).slice(1),
      h = await a._getAdditionalHeaders();
    (h["Content-Type"] = "application/json"),
      a.languageCode && (h["X-Firebase-Locale"] = a.languageCode);
    const g = Object.assign({ method: t, headers: h }, d);
    return (
      VE() || (g.referrerPolicy = "no-referrer"),
      a.emulatorConfig &&
        Jf(a.emulatorConfig.host) &&
        (g.credentials = "include"),
      y0.fetch()(await b0(a, a.config.apiHost, r, p), g)
    );
  });
}
async function v0(a, t, r) {
  a._canInitEmulator = !1;
  const o = Object.assign(Object.assign({}, gT), t);
  try {
    const c = new wT(a),
      d = await Promise.race([r(), c.promise]);
    c.clearNetworkTimeout();
    const f = await d.json();
    if ("needConfirmation" in f)
      throw Js(a, "account-exists-with-different-credential", f);
    if (d.ok && !("errorMessage" in f)) return f;
    {
      const p = d.ok ? f.errorMessage : f.error.message,
        [h, g] = p.split(" : ");
      if (h === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Js(a, "credential-already-in-use", f);
      if (h === "EMAIL_EXISTS") throw Js(a, "email-already-in-use", f);
      if (h === "USER_DISABLED") throw Js(a, "user-disabled", f);
      const b = o[h] || h.toLowerCase().replace(/[_\s]+/g, "-");
      if (g) throw th(a, b, g);
      _n(a, b);
    }
  } catch (c) {
    if (c instanceof ci) throw c;
    _n(a, "network-request-failed", { message: String(c) });
  }
}
async function To(a, t, r, o, c = {}) {
  const d = await Ea(a, t, r, o, c);
  return (
    "mfaPendingCredential" in d &&
      _n(a, "multi-factor-auth-required", { _serverResponse: d }),
    d
  );
}
async function b0(a, t, r, o) {
  const c = `${t}${r}?${o}`,
    d = a,
    f = d.config.emulator ? ah(a.config, c) : `${a.config.apiScheme}://${c}`;
  return yT.includes(r) &&
    (await d._persistenceManagerAvailable, d._getPersistenceType() === "COOKIE")
    ? d._getPersistence()._getFinalTarget(f).toString()
    : f;
}
function bT(a) {
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
class wT {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(t) {
    (this.auth = t),
      (this.timer = null),
      (this.promise = new Promise((r, o) => {
        this.timer = setTimeout(
          () => o(Mn(this.auth, "network-request-failed")),
          vT.get()
        );
      }));
  }
}
function Js(a, t, r) {
  const o = { appName: a.name };
  r.email && (o.email = r.email),
    r.phoneNumber && (o.phoneNumber = r.phoneNumber);
  const c = Mn(a, t, o);
  return (c.customData._tokenResponse = r), c;
}
function Fy(a) {
  return a !== void 0 && a.enterprise !== void 0;
}
class _T {
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
      if (r.provider && r.provider === t) return bT(r.enforcementState);
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
async function ET(a, t) {
  return Ea(a, "GET", "/v2/recaptchaConfig", ui(a, t));
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
 */ async function xT(a, t) {
  return Ea(a, "POST", "/v1/accounts:delete", t);
}
async function yc(a, t) {
  return Ea(a, "POST", "/v1/accounts:lookup", t);
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
 */ function co(a) {
  if (a)
    try {
      const t = new Date(Number(a));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function TT(a, t = !1) {
  const r = Fn(a),
    o = await r.getIdToken(t),
    c = ih(o);
  be(c && c.exp && c.auth_time && c.iat, r.auth, "internal-error");
  const d = typeof c.firebase == "object" ? c.firebase : void 0,
    f = d == null ? void 0 : d.sign_in_provider;
  return {
    claims: c,
    token: o,
    authTime: co(yf(c.auth_time)),
    issuedAtTime: co(yf(c.iat)),
    expirationTime: co(yf(c.exp)),
    signInProvider: f || null,
    signInSecondFactor: (d == null ? void 0 : d.sign_in_second_factor) || null,
  };
}
function yf(a) {
  return Number(a) * 1e3;
}
function ih(a) {
  const [t, r, o] = a.split(".");
  if (t === void 0 || r === void 0 || o === void 0)
    return ic("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const c = i0(r);
    return c
      ? JSON.parse(c)
      : (ic("Failed to decode base64 JWT payload"), null);
  } catch (c) {
    return (
      ic(
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
        ST(o) &&
        a.auth.currentUser === a &&
        (await a.auth.signOut()),
      o)
    );
  }
}
function ST({ code: a }) {
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
 */ class CT {
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
 */ class Mf {
  constructor(t, r) {
    (this.createdAt = t), (this.lastLoginAt = r), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = co(this.lastLoginAt)),
      (this.creationTime = co(this.createdAt));
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
    p = RT(a.providerData, f),
    h = a.isAnonymous,
    g = !(a.email && d.passwordHash) && !(p != null && p.length),
    b = h ? g : !1,
    T = {
      uid: d.localId,
      displayName: d.displayName || null,
      photoURL: d.photoUrl || null,
      email: d.email || null,
      emailVerified: d.emailVerified || !1,
      phoneNumber: d.phoneNumber || null,
      tenantId: d.tenantId || null,
      providerData: p,
      metadata: new Mf(d.createdAt, d.lastLoginAt),
      isAnonymous: b,
    };
  Object.assign(a, T);
}
async function AT(a) {
  const t = Fn(a);
  await vc(t),
    await t.auth._persistUserIfCurrent(t),
    t.auth._notifyListenersIfCurrent(t);
}
function RT(a, t) {
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
 */ async function OT(a, t) {
  const r = await v0(a, {}, async () => {
    const o = _o({ grant_type: "refresh_token", refresh_token: t }).slice(1),
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
async function DT(a, t) {
  return Ea(a, "POST", "/v2/accounts:revokeToken", ui(a, t));
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
    const { accessToken: o, refreshToken: c, expiresIn: d } = await OT(t, r);
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
 */ function Fa(a, t) {
  be(typeof a == "string" || typeof a > "u", "internal-error", { appName: t });
}
class Nn {
  constructor(t) {
    var { uid: r, auth: o, stsTokenManager: c } = t,
      d = eh(t, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new CT(this)),
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
      (this.metadata = new Mf(d.createdAt || void 0, d.lastLoginAt || void 0));
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
    return TT(this, t);
  }
  reload() {
    return AT(this);
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
    const r = new Nn(
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
    if (bn(this.auth.app)) return Promise.reject(ya(this.auth));
    const t = await this.getIdToken();
    return (
      await Gr(this, xT(this.auth, { idToken: t })),
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
    const T = (o = r.displayName) !== null && o !== void 0 ? o : void 0,
      w = (c = r.email) !== null && c !== void 0 ? c : void 0,
      O = (d = r.phoneNumber) !== null && d !== void 0 ? d : void 0,
      M = (f = r.photoURL) !== null && f !== void 0 ? f : void 0,
      K = (p = r.tenantId) !== null && p !== void 0 ? p : void 0,
      P = (h = r._redirectEventId) !== null && h !== void 0 ? h : void 0,
      I = (g = r.createdAt) !== null && g !== void 0 ? g : void 0,
      B = (b = r.lastLoginAt) !== null && b !== void 0 ? b : void 0,
      {
        uid: q,
        emailVerified: F,
        isAnonymous: Q,
        providerData: D,
        stsTokenManager: ee,
      } = r;
    be(q && ee, t, "internal-error");
    const ne = zr.fromJSON(this.name, ee);
    be(typeof q == "string", t, "internal-error"),
      Fa(T, t.name),
      Fa(w, t.name),
      be(typeof F == "boolean", t, "internal-error"),
      be(typeof Q == "boolean", t, "internal-error"),
      Fa(O, t.name),
      Fa(M, t.name),
      Fa(K, t.name),
      Fa(P, t.name),
      Fa(I, t.name),
      Fa(B, t.name);
    const le = new Nn({
      uid: q,
      auth: t,
      email: w,
      emailVerified: F,
      displayName: T,
      isAnonymous: Q,
      photoURL: M,
      phoneNumber: O,
      tenantId: K,
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
    const d = new Nn({
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
    const h = new Nn({
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
        metadata: new Mf(c.createdAt, c.lastLoginAt),
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
 */ function rc(a, t, r) {
  return `firebase:${a}:${t}:${r}`;
}
class Ir {
  constructor(t, r, o) {
    (this.persistence = t), (this.auth = r), (this.userKey = o);
    const { config: c, name: d } = this.auth;
    (this.fullUserKey = rc(this.userKey, c.apiKey, d)),
      (this.fullPersistenceKey = rc("persistence", c.apiKey, d)),
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
      return r ? Nn._fromGetAccountInfoResponse(this.auth, r, t) : null;
    }
    return Nn._fromJSON(this.auth, t);
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
    const f = rc(o, t.config.apiKey, t.name);
    let p = null;
    for (const g of r)
      try {
        const b = await g._get(f);
        if (b) {
          let T;
          if (typeof b == "string") {
            const w = await yc(t, { idToken: b }).catch(() => {});
            if (!w) break;
            T = await Nn._fromGetAccountInfoResponse(t, w, b);
          } else T = Nn._fromJSON(t, b);
          g !== d && (p = T), (d = g);
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
  if (S0(t)) return "IEMobile";
  if (t.includes("msie") || t.includes("trident/")) return "IE";
  if (t.includes("edge/")) return "Edge";
  if (E0(t)) return "Firefox";
  if (t.includes("silk/")) return "Silk";
  if (A0(t)) return "Blackberry";
  if (R0(t)) return "Webos";
  if (x0(t)) return "Safari";
  if ((t.includes("chrome/") || T0(t)) && !t.includes("edge/")) return "Chrome";
  if (C0(t)) return "Android";
  {
    const r = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      o = a.match(r);
    if ((o == null ? void 0 : o.length) === 2) return o[1];
  }
  return "Other";
}
function E0(a = zt()) {
  return /firefox\//i.test(a);
}
function x0(a = zt()) {
  const t = a.toLowerCase();
  return (
    t.includes("safari/") &&
    !t.includes("chrome/") &&
    !t.includes("crios/") &&
    !t.includes("android")
  );
}
function T0(a = zt()) {
  return /crios\//i.test(a);
}
function S0(a = zt()) {
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
function NT(a = zt()) {
  var t;
  return (
    rh(a) &&
    !!(!((t = window.navigator) === null || t === void 0) && t.standalone)
  );
}
function MT() {
  return $E() && document.documentMode === 10;
}
function O0(a = zt()) {
  return rh(a) || C0(a) || R0(a) || A0(a) || /windows phone/i.test(a) || S0(a);
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
 */ class kT {
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
 */ async function LT(a, t = {}) {
  return Ea(a, "GET", "/v2/passwordPolicy", ui(a, t));
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
 */ const UT = 6;
class jT {
  constructor(t) {
    var r, o, c, d;
    const f = t.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (r = f.minPasswordLength) !== null && r !== void 0 ? r : UT),
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
 */ class zT {
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
      (this.beforeStateQueue = new kT(this)),
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
        o = await Nn._fromGetAccountInfoResponse(this, r, t);
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
    if (bn(this.app)) {
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
    this.languageCode = pT();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    if (bn(this.app)) return Promise.reject(ya(this));
    const r = t ? Fn(t) : null;
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
    return bn(this.app)
      ? Promise.reject(ya(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(t) {
    return bn(this.app)
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
    const t = await LT(this),
      r = new jT(t);
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
    this._errorFactory = new wo("auth", "Firebase", t());
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
      this.tenantId != null && (o.tenantId = this.tenantId), await DT(this, o);
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
    if (bn(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const r = await ((t = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getToken());
    return (
      r != null &&
        r.error &&
        dT(`Error while retrieving App Check token: ${r.error}`),
      r == null ? void 0 : r.token
    );
  }
}
function di(a) {
  return Fn(a);
}
class tv {
  constructor(t) {
    (this.auth = t),
      (this.observer = null),
      (this.addObserver = JE((r) => (this.observer = r)));
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
 */ let jc = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: "",
};
function IT(a) {
  jc = a;
}
function N0(a) {
  return jc.loadJS(a);
}
function BT() {
  return jc.recaptchaEnterpriseScript;
}
function HT() {
  return jc.gapiScript;
}
function PT(a) {
  return `__${a}${Math.floor(Math.random() * 1e6)}`;
}
class VT {
  constructor() {
    this.enterprise = new qT();
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
class qT {
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
const GT = "recaptcha-enterprise",
  M0 = "NO_RECAPTCHA";
class $T {
  constructor(t) {
    (this.type = GT), (this.auth = di(t));
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
        ET(d, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE",
        })
          .then((h) => {
            if (h.recaptchaKey === void 0)
              p(new Error("recaptcha Enterprise site key undefined"));
            else {
              const g = new _T(h);
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
      Fy(h)
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
      ? new VT().execute("siteKey", { action: "verify" })
      : new Promise((d, f) => {
          o(this.auth)
            .then((p) => {
              if (!r && Fy(window.grecaptcha)) c(p, d, f);
              else {
                if (typeof window > "u") {
                  f(
                    new Error("RecaptchaVerifier is only supported in browser")
                  );
                  return;
                }
                let h = BT();
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
  const d = new $T(a);
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
async function kf(a, t, r, o, c) {
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
 */ function YT(a, t) {
  const r = d0(a, "auth");
  if (r.isInitialized()) {
    const c = r.getImmediate(),
      d = r.getOptions();
    if (Vr(d, t ?? {})) return c;
    _n(c, "already-initialized");
  }
  return r.initialize({ options: t });
}
function XT(a, t) {
  const r = (t == null ? void 0 : t.persistence) || [],
    o = (Array.isArray(r) ? r : [r]).map(ga);
  t != null && t.errorMap && a._updateErrorMap(t.errorMap),
    a._initializeWithPersistence(
      o,
      t == null ? void 0 : t.popupRedirectResolver
    );
}
function KT(a, t, r) {
  const o = di(a);
  be(/^https?:\/\//.test(t), o, "invalid-emulator-scheme");
  const c = !1,
    d = k0(t),
    { host: f, port: p } = QT(t),
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
    Jf(f) ? (o0("Auth", !0), IE(`${d}//${f}${h}`)) : FT();
}
function k0(a) {
  const t = a.indexOf(":");
  return t < 0 ? "" : a.substr(0, t + 1);
}
function QT(a) {
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
function FT() {
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
async function ZT(a, t) {
  return Ea(a, "POST", "/v1/accounts:signUp", t);
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
 */ async function JT(a, t) {
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
 */ async function WT(a, t) {
  return To(a, "POST", "/v1/accounts:signInWithEmailLink", ui(a, t));
}
async function eS(a, t) {
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
 */ class po extends lh {
  constructor(t, r, o, c = null) {
    super("password", o),
      (this._email = t),
      (this._password = r),
      (this._tenantId = c);
  }
  static _fromEmailAndPassword(t, r) {
    return new po(t, r, "password");
  }
  static _fromEmailAndCode(t, r, o = null) {
    return new po(t, r, "emailLink", o);
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
        return kf(t, r, "signInWithPassword", JT);
      case "emailLink":
        return WT(t, { email: this._email, oobCode: this._password });
      default:
        _n(t, "internal-error");
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
        return kf(t, o, "signUpPassword", ZT);
      case "emailLink":
        return eS(t, {
          idToken: r,
          email: this._email,
          oobCode: this._password,
        });
      default:
        _n(t, "internal-error");
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
 */ const tS = "http://localhost";
class Vi extends lh {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(t) {
    const r = new Vi(t.providerId, t.signInMethod);
    return (
      t.idToken || t.accessToken
        ? (t.idToken && (r.idToken = t.idToken),
          t.accessToken && (r.accessToken = t.accessToken),
          t.nonce && !t.pendingToken && (r.nonce = t.nonce),
          t.pendingToken && (r.pendingToken = t.pendingToken))
        : t.oauthToken && t.oauthTokenSecret
        ? ((r.accessToken = t.oauthToken), (r.secret = t.oauthTokenSecret))
        : _n("argument-error"),
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
    const f = new Vi(o, c);
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
    const t = { requestUri: tS, returnSecureToken: !0 };
    if (this.pendingToken) t.pendingToken = this.pendingToken;
    else {
      const r = {};
      this.idToken && (r.id_token = this.idToken),
        this.accessToken && (r.access_token = this.accessToken),
        this.secret && (r.oauth_token_secret = this.secret),
        (r.providerId = this.providerId),
        this.nonce && !this.pendingToken && (r.nonce = this.nonce),
        (t.postBody = _o(r));
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
 */ function nS(a) {
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
function aS(a) {
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
      T = nS((c = h.mode) !== null && c !== void 0 ? c : null);
    be(g && b && T, "argument-error"),
      (this.apiKey = g),
      (this.operation = T),
      (this.code = b),
      (this.continueUrl =
        (d = h.continueUrl) !== null && d !== void 0 ? d : null),
      (this.languageCode = (f = h.lang) !== null && f !== void 0 ? f : null),
      (this.tenantId = (p = h.tenantId) !== null && p !== void 0 ? p : null);
  }
  static parseLink(t) {
    const r = aS(t);
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
    return po._fromEmailAndPassword(t, r);
  }
  static credentialWithLink(t, r) {
    const o = oh.parseLink(r);
    return be(o, "argument-error"), po._fromEmailAndCode(t, o.code, o.tenantId);
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
 */ class So extends sh {
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
 */ class Wa extends So {
  constructor() {
    super("facebook.com");
  }
  static credential(t) {
    return Vi._fromParams({
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
 */ class ma extends So {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(t, r) {
    return Vi._fromParams({
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
 */ class ei extends So {
  constructor() {
    super("github.com");
  }
  static credential(t) {
    return Vi._fromParams({
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
 */ class ti extends So {
  constructor() {
    super("twitter.com");
  }
  static credential(t, r) {
    return Vi._fromParams({
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
 */ async function iS(a, t) {
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
 */ class qi {
  constructor(t) {
    (this.user = t.user),
      (this.providerId = t.providerId),
      (this._tokenResponse = t._tokenResponse),
      (this.operationType = t.operationType);
  }
  static async _fromIdTokenResponse(t, r, o, c = !1) {
    const d = await Nn._fromIdTokenResponse(t, o, c),
      f = iv(o);
    return new qi({
      user: d,
      providerId: f,
      _tokenResponse: o,
      operationType: r,
    });
  }
  static async _forOperation(t, r, o) {
    await t._updateTokensIfNecessary(o, !0);
    const c = iv(o);
    return new qi({
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
async function rS(a, t, r = !1) {
  const o = await Gr(a, t._linkToIdToken(a.auth, await a.getIdToken()), r);
  return qi._forOperation(a, "link", o);
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
 */ async function lS(a, t, r = !1) {
  const { auth: o } = a;
  if (bn(o.app)) return Promise.reject(ya(o));
  const c = "reauthenticate";
  try {
    const d = await Gr(a, L0(o, c, t, a), r);
    be(d.idToken, o, "internal-error");
    const f = ih(d.idToken);
    be(f, o, "internal-error");
    const { sub: p } = f;
    return be(a.uid === p, o, "user-mismatch"), qi._forOperation(a, c, d);
  } catch (d) {
    throw (
      ((d == null ? void 0 : d.code) === "auth/user-not-found" &&
        _n(o, "user-mismatch"),
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
 */ async function U0(a, t, r = !1) {
  if (bn(a.app)) return Promise.reject(ya(a));
  const o = "signIn",
    c = await L0(a, o, t),
    d = await qi._fromIdTokenResponse(a, o, c);
  return r || (await a._updateCurrentUser(d.user)), d;
}
async function oS(a, t) {
  return U0(di(a), t);
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
 */ async function j0(a) {
  const t = di(a);
  t._getPasswordPolicyInternal() && (await t._updatePasswordPolicy());
}
async function sS(a, t, r) {
  if (bn(a.app)) return Promise.reject(ya(a));
  const o = di(a),
    f = await kf(
      o,
      {
        returnSecureToken: !0,
        email: t,
        password: r,
        clientType: "CLIENT_TYPE_WEB",
      },
      "signUpPassword",
      iS
    ).catch((h) => {
      throw (h.code === "auth/password-does-not-meet-requirements" && j0(a), h);
    }),
    p = await qi._fromIdTokenResponse(o, "signIn", f);
  return await o._updateCurrentUser(p.user), p;
}
function cS(a, t, r) {
  return bn(a.app)
    ? Promise.reject(ya(a))
    : oS(Fn(a), Kr.credential(t, r)).catch(async (o) => {
        throw (
          (o.code === "auth/password-does-not-meet-requirements" && j0(a), o)
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
 */ async function uS(a, t) {
  return Ea(a, "POST", "/v1/accounts:update", t);
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
 */ async function dS(a, { displayName: t, photoURL: r }) {
  if (t === void 0 && r === void 0) return;
  const o = Fn(a),
    d = {
      idToken: await o.getIdToken(),
      displayName: t,
      photoUrl: r,
      returnSecureToken: !0,
    },
    f = await Gr(o, uS(o.auth, d));
  (o.displayName = f.displayName || null), (o.photoURL = f.photoUrl || null);
  const p = o.providerData.find(({ providerId: h }) => h === "password");
  p && ((p.displayName = o.displayName), (p.photoURL = o.photoURL)),
    await o._updateTokensIfNecessary(f);
}
function fS(a, t, r, o) {
  return Fn(a).onIdTokenChanged(t, r, o);
}
function hS(a, t, r) {
  return Fn(a).beforeAuthStateChanged(t, r);
}
function mS(a, t, r, o) {
  return Fn(a).onAuthStateChanged(t, r, o);
}
function pS(a) {
  return Fn(a).signOut();
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
 */ const gS = 1e3,
  yS = 10;
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
    MT() && d !== t.newValue && t.newValue !== t.oldValue
      ? setTimeout(c, yS)
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
      }, gS));
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
const vS = I0;
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
 */ function bS(a) {
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
 */ class zc {
  constructor(t) {
    (this.eventTarget = t),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(t) {
    const r = this.receivers.find((c) => c.isListeningto(t));
    if (r) return r;
    const o = new zc(t);
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
      h = await bS(p);
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
zc.receivers = [];
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
 */ class wS {
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
        onMessage(T) {
          const w = T;
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
function _S(a) {
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
async function ES() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function xS() {
  var a;
  return (
    ((a = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    a === void 0
      ? void 0
      : a.controller) || null
  );
}
function TS() {
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
  SS = 1,
  _c = "firebaseLocalStorage",
  q0 = "fbase_key";
class Co {
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
function Ic(a, t) {
  return a.transaction([_c], t ? "readwrite" : "readonly").objectStore(_c);
}
function CS() {
  const a = indexedDB.deleteDatabase(V0);
  return new Co(a).toPromise();
}
function Lf() {
  const a = indexedDB.open(V0, SS);
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
          : (o.close(), await CS(), t(await Lf()));
      });
  });
}
async function rv(a, t, r) {
  const o = Ic(a, !0).put({ [q0]: t, value: r });
  return new Co(o).toPromise();
}
async function AS(a, t) {
  const r = Ic(a, !1).get(t),
    o = await new Co(r).toPromise();
  return o === void 0 ? null : o.value;
}
function lv(a, t) {
  const r = Ic(a, !0).delete(t);
  return new Co(r).toPromise();
}
const RS = 800,
  OS = 3;
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
    return this.db ? this.db : ((this.db = await Lf()), this.db);
  }
  async _withRetries(t) {
    let r = 0;
    for (;;)
      try {
        const o = await this._openDb();
        return await t(o);
      } catch (o) {
        if (r++ > OS) throw o;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return P0() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = zc._getInstance(TS())),
      this.receiver._subscribe("keyChanged", async (t, r) => ({
        keyProcessed: (await this._poll()).includes(r.key),
      })),
      this.receiver._subscribe("ping", async (t, r) => ["keyChanged"]);
  }
  async initializeSender() {
    var t, r;
    if (((this.activeServiceWorker = await ES()), !this.activeServiceWorker))
      return;
    this.sender = new wS(this.activeServiceWorker);
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
        xS() !== this.activeServiceWorker
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
      const t = await Lf();
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
    const r = await this._withRetries((o) => AS(o, t));
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
      const d = Ic(c, !1).getAll();
      return new Co(d).toPromise();
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
      (this.pollTimer = setInterval(async () => this._poll(), RS));
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
const DS = G0;
new xo(3e4, 6e4);
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
function NS(a) {
  return U0(a.auth, new uh(a), a.bypassAuthState);
}
function MS(a) {
  const { auth: t, user: r } = a;
  return be(r, t, "internal-error"), lS(r, new uh(a), a.bypassAuthState);
}
async function kS(a) {
  const { auth: t, user: r } = a;
  return be(r, t, "internal-error"), rS(r, new uh(a), a.bypassAuthState);
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
        return NS;
      case "linkViaPopup":
      case "linkViaRedirect":
        return kS;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return MS;
      default:
        _n(this.auth, "internal-error");
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
 */ const LS = new xo(2e3, 1e4);
async function US(a, t, r) {
  if (bn(a.app))
    return Promise.reject(Mn(a, "operation-not-supported-in-this-environment"));
  const o = di(a);
  fT(a, t, sh);
  const c = $0(o, r);
  return new Bi(o, "signInViaPopup", t, c).executeNotNull();
}
class Bi extends Y0 {
  constructor(t, r, o, c, d) {
    super(t, r, c, d),
      (this.provider = o),
      (this.authWindow = null),
      (this.pollId = null),
      Bi.currentPopupAction && Bi.currentPopupAction.cancel(),
      (Bi.currentPopupAction = this);
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
        r || this.reject(Mn(this.auth, "web-storage-unsupported"));
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
    this.reject(Mn(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (Bi.currentPopupAction = null);
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
            this.reject(Mn(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(t, LS.get());
    };
    t();
  }
}
Bi.currentPopupAction = null;
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
 */ const jS = "pendingRedirect",
  lc = new Map();
class zS extends Y0 {
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
    let t = lc.get(this.auth._key());
    if (!t) {
      try {
        const o = (await IS(this.resolver, this.auth))
          ? await super.execute()
          : null;
        t = () => Promise.resolve(o);
      } catch (r) {
        t = () => Promise.reject(r);
      }
      lc.set(this.auth._key(), t);
    }
    return (
      this.bypassAuthState ||
        lc.set(this.auth._key(), () => Promise.resolve(null)),
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
async function IS(a, t) {
  const r = PS(t),
    o = HS(a);
  if (!(await o._isAvailable())) return !1;
  const c = (await o._get(r)) === "true";
  return await o._remove(r), c;
}
function BS(a, t) {
  lc.set(a._key(), t);
}
function HS(a) {
  return ga(a._redirectPersistence);
}
function PS(a) {
  return rc(jS, a.config.apiKey, a.name);
}
async function VS(a, t, r = !1) {
  if (bn(a.app)) return Promise.reject(ya(a));
  const o = di(a),
    c = $0(o, t),
    f = await new zS(o, c, r).execute();
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
 */ const qS = 10 * 60 * 1e3;
class GS {
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
        !$S(t) ||
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
      r.onError(Mn(this.auth, c));
    } else r.onAuthEvent(t);
  }
  isEventForConsumer(t, r) {
    const o = r.eventId === null || (!!t.eventId && t.eventId === r.eventId);
    return r.filter.includes(t.type) && o;
  }
  hasEventBeenHandled(t) {
    return (
      Date.now() - this.lastProcessedEventTime >= qS &&
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
function $S(a) {
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
 */ async function YS(a, t = {}) {
  return Ea(a, "GET", "/v1/projects", t);
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
 */ const XS = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  KS = /^https?/;
async function QS(a) {
  if (a.config.emulator) return;
  const { authorizedDomains: t } = await YS(a);
  for (const r of t)
    try {
      if (FS(r)) return;
    } catch {}
  _n(a, "unauthorized-domain");
}
function FS(a) {
  const t = Nf(),
    { protocol: r, hostname: o } = new URL(t);
  if (a.startsWith("chrome-extension://")) {
    const f = new URL(a);
    return f.hostname === "" && o === ""
      ? r === "chrome-extension:" &&
          a.replace("chrome-extension://", "") ===
            t.replace("chrome-extension://", "")
      : r === "chrome-extension:" && f.hostname === o;
  }
  if (!KS.test(r)) return !1;
  if (XS.test(a)) return o === a;
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
 */ const ZS = new xo(3e4, 6e4);
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
function JS(a) {
  return new Promise((t, r) => {
    var o, c, d;
    function f() {
      sv(),
        gapi.load("gapi.iframes", {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            sv(), r(Mn(a, "network-request-failed"));
          },
          timeout: ZS.get(),
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
      const p = PT("iframefcb");
      return (
        (Xn()[p] = () => {
          gapi.load ? f() : r(Mn(a, "network-request-failed"));
        }),
        N0(`${HT()}?onload=${p}`).catch((h) => r(h))
      );
    }
  }).catch((t) => {
    throw ((oc = null), t);
  });
}
let oc = null;
function WS(a) {
  return (oc = oc || JS(a)), oc;
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
 */ const eC = new xo(5e3, 15e3),
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
  return d.length && (o.fw = d.join(",")), `${r}?${_o(o).slice(1)}`;
}
async function lC(a) {
  const t = await WS(a),
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
          const f = Mn(a, "network-request-failed"),
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
  r && (p = T0(g) ? uC : r), E0(g) && ((t = t || dC), (h.scrollbars = "yes"));
  const b = Object.entries(h).reduce((w, [O, M]) => `${w}${O}=${M},`, "");
  if (NT(g) && p !== "_self") return hC(t || "", p), new cv(null);
  const T = window.open(t || "", p, b);
  be(T, a, "popup-blocked");
  try {
    T.focus();
  } catch {}
  return new cv(T);
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
      ZE(t.getCustomParameters()) ||
        (f.customParameters = JSON.stringify(t.getCustomParameters()));
    for (const [b, T] of Object.entries({})) f[b] = T;
  }
  if (t instanceof So) {
    const b = t.getScopes().filter((T) => T !== "");
    b.length > 0 && (f.scopes = b.join(","));
  }
  a.tenantId && (f.tid = a.tenantId);
  const p = f;
  for (const b of Object.keys(p)) p[b] === void 0 && delete p[b];
  const h = await a._getAppCheckToken(),
    g = h ? `#${gC}=${encodeURIComponent(h)}` : "";
  return `${yC(a)}?${_o(p).slice(1)}${g}`;
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
 */ const vf = "webStorageSupport";
class vC {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = H0),
      (this._completeRedirectFn = VS),
      (this._overrideRedirectResult = BS);
  }
  async _openPopup(t, r, o, c) {
    var d;
    wa(
      (d = this.eventManagers[t._key()]) === null || d === void 0
        ? void 0
        : d.manager,
      "_initialize() not called before _openPopup()"
    );
    const f = await uv(t, r, o, Nf(), c);
    return fC(t, f, ch());
  }
  async _openRedirect(t, r, o, c) {
    await this._originValidation(t);
    const d = await uv(t, r, o, Nf(), c);
    return _S(d), new Promise(() => {});
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
      o = new GS(t);
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
      vf,
      { type: vf },
      (c) => {
        var d;
        const f =
          (d = c == null ? void 0 : c[0]) === null || d === void 0
            ? void 0
            : d[vf];
        f !== void 0 && r(!!f), _n(t, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(t) {
    const r = t._key();
    return (
      this.originValidationPromises[r] ||
        (this.originValidationPromises[r] = QS(t)),
      this.originValidationPromises[r]
    );
  }
  get _shouldInitProactively() {
    return O0() || x0() || rh();
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
function EC(a) {
  ho(
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
          g = new zT(o, c, d, h);
        return XT(g, r), g;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((t, r, o) => {
        t.getProvider("auth-internal").initialize();
      })
  ),
    ho(
      new qr(
        "auth-internal",
        (t) => {
          const r = di(t.getProvider("auth").getImmediate());
          return ((o) => new wC(o))(r);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    jr(dv, fv, _C(a)),
    jr(dv, fv, "esm2017");
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
 */ const xC = 5 * 60,
  TC = l0("authIdTokenMaxAge") || xC;
let hv = null;
const SC = (a) => async (t) => {
  const r = t && (await t.getIdTokenResult()),
    o = r && (new Date().getTime() - Date.parse(r.issuedAtTime)) / 1e3;
  if (o && o > TC) return;
  const c = r == null ? void 0 : r.token;
  hv !== c &&
    ((hv = c),
    await fetch(a, {
      method: c ? "POST" : "DELETE",
      headers: c ? { Authorization: `Bearer ${c}` } : {},
    }));
};
function CC(a = Wx()) {
  const t = d0(a, "auth");
  if (t.isInitialized()) return t.getImmediate();
  const r = YT(a, { popupRedirectResolver: bC, persistence: [DS, vS, H0] }),
    o = l0("authTokenSyncURL");
  if (o && typeof isSecureContext == "boolean" && isSecureContext) {
    const d = new URL(o, location.origin);
    if (location.origin === d.origin) {
      const f = SC(d.toString());
      hS(r, f, () => f(r.currentUser)), fS(r, (p) => f(p));
    }
  }
  const c = jE("auth");
  return c ? KT(r, `http://${c}`) : o0("Auth", !1), r;
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
IT({
  loadJS(a) {
    return new Promise((t, r) => {
      const o = document.createElement("script");
      o.setAttribute("src", a),
        (o.onload = t),
        (o.onerror = (c) => {
          const d = Mn("internal-error");
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
EC("Browser");
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
 */ jr(RC, OC, "app");
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
  Xi = R.createContext(),
  MC = new ma(),
  kC = ({ children: a }) => {
    const [t, r] = R.useState(null),
      [o, c] = R.useState(!0),
      d = () => US(kr, MC),
      f = (T, w) => (c(!0), sS(kr, T, w)),
      p = (T, w) => (c(!0), cS(kr, T, w)),
      h = () => pS(kr),
      g = (T) => dS(kr.currentUser, T);
    R.useEffect(() => {
      const T = mS(kr, (w) => {
        r(w), c(!1);
      });
      return () => T();
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
    return v.jsx(Xi.Provider, { value: b, children: a });
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
function UC(a, t, r) {
  LC(a, t), t.set(a, r);
}
function jC(a, t, r) {
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
  Q0 = "swal2-",
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
  H = HC.reduce((a, t) => ((a[t] = Q0 + t), a), {}),
  PC = ["success", "warning", "info", "question", "error"],
  Ec = PC.reduce((a, t) => ((a[t] = Q0 + t), a), {}),
  F0 = "SweetAlert2:",
  dh = (a) => a.charAt(0).toUpperCase() + a.slice(1),
  It = (a) => {
    console.warn(`${F0} ${typeof a == "object" ? a.join(" ") : a}`);
  },
  Ki = (a) => {
    console.error(`${F0} ${a}`);
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
  Bc = (a) => (typeof a == "function" ? a() : a),
  fh = (a) => a && typeof a.toPromise == "function",
  Ao = (a) => (fh(a) ? a.toPromise() : Promise.resolve(a)),
  hh = (a) => a && Promise.resolve(a) === a,
  Bt = () => document.body.querySelector(`.${H.container}`),
  Ro = (a) => {
    const t = Bt();
    return t ? t.querySelector(a) : null;
  },
  ln = (a) => Ro(`.${a}`),
  qe = () => ln(H.popup),
  Qr = () => ln(H.icon),
  qC = () => ln(H["icon-content"]),
  J0 = () => ln(H.title),
  mh = () => ln(H["html-container"]),
  W0 = () => ln(H.image),
  ph = () => ln(H["progress-steps"]),
  Hc = () => ln(H["validation-message"]),
  Kn = () => Ro(`.${H.actions} .${H.confirm}`),
  Fr = () => Ro(`.${H.actions} .${H.cancel}`),
  Qi = () => Ro(`.${H.actions} .${H.deny}`),
  GC = () => ln(H["input-label"]),
  Zr = () => Ro(`.${H.loader}`),
  Oo = () => ln(H.actions),
  eb = () => ln(H.footer),
  Pc = () => ln(H["timer-progress-bar"]),
  gh = () => ln(H.close),
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
  Vc = () => {
    const a = qe();
    return a ? va(a, H.toast) : !1;
  },
  YC = () => {
    const a = qe();
    return a ? a.hasAttribute("data-loading") : !1;
  },
  on = (a, t) => {
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
        !Object.values(Ec).includes(r) &&
        !Object.values(t.showClass || {}).includes(r) &&
        a.classList.remove(r);
    });
  },
  rn = (a, t, r) => {
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
  qc = (a, t) => {
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
  En = (a, t) => {
    nb(a, t, !1);
  },
  ni = (a, t) => {
    const r = Array.from(a.children);
    for (let o = 0; o < r.length; o++) {
      const c = r[o];
      if (c instanceof HTMLElement && va(c, t)) return c;
    }
  },
  Hi = (a, t, r) => {
    r === `${parseInt(r)}` && (r = parseInt(r)),
      r || parseInt(r) === 0
        ? a.style.setProperty(t, typeof r == "number" ? `${r}px` : r)
        : a.style.removeProperty(t);
  },
  Tt = (a, t = "flex") => {
    a && (a.style.display = t);
  },
  Mt = (a) => {
    a && (a.style.display = "none");
  },
  bh = (a, t = "block") => {
    a &&
      new MutationObserver(() => {
        Do(a, a.innerHTML, t);
      }).observe(a, { childList: !0, subtree: !0 });
  },
  gv = (a, t, r, o) => {
    const c = a.querySelector(t);
    c && c.style.setProperty(r, o);
  },
  Do = (a, t, r = "flex") => {
    t ? Tt(a, r) : Mt(a);
  },
  Xt = (a) =>
    !!(a && (a.offsetWidth || a.offsetHeight || a.getClientRects().length)),
  KC = () => !Xt(Kn()) && !Xt(Qi()) && !Xt(Fr()),
  Uf = (a) => a.scrollHeight > a.clientHeight,
  QC = (a, t) => {
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
    const r = Pc();
    r &&
      Xt(r) &&
      (t && ((r.style.transition = "none"), (r.style.width = "100%")),
      setTimeout(() => {
        (r.style.transition = `width ${a / 1e3}s linear`),
          (r.style.width = "0%");
      }, 10));
  },
  FC = () => {
    const a = Pc();
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
        En(
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
      on(r, JC),
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
      : a && on(t, a);
  },
  rA = (a, t) => {
    a.jquery ? lA(t, a) : on(t, a.toString());
  },
  lA = (a, t) => {
    if (((a.textContent = ""), 0 in t))
      for (let r = 0; r in t; r++) a.appendChild(t[r].cloneNode(!0));
    else a.appendChild(t.cloneNode(!0));
  },
  oA = (a, t) => {
    const r = Oo(),
      o = Zr();
    !r ||
      !o ||
      (!t.showConfirmButton && !t.showDenyButton && !t.showCancelButton
        ? Mt(r)
        : Tt(r),
      rn(r, t, "actions"),
      sA(r, o, t),
      on(o, t.loaderHtml || ""),
      rn(o, t, "loader"));
  };
function sA(a, t, r) {
  const o = Kn(),
    c = Qi(),
    d = Fr();
  !o ||
    !c ||
    !d ||
    (wf(o, "confirm", r),
    wf(c, "deny", r),
    wf(d, "cancel", r),
    cA(o, c, d, r),
    r.reverseButtons &&
      (r.toast
        ? (a.insertBefore(d, o), a.insertBefore(c, o))
        : (a.insertBefore(d, t), a.insertBefore(c, t), a.insertBefore(o, t))));
}
function cA(a, t, r, o) {
  if (!o.buttonsStyling) {
    En([a, t, r], H.styled);
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
    bf(a),
    bf(t),
    bf(r);
}
function bf(a) {
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
function wf(a, t, r) {
  const o = dh(t);
  Do(a, r[`show${o}Button`], "inline-block"),
    on(a, r[`${t}ButtonText`] || ""),
    a.setAttribute("aria-label", r[`${t}ButtonAriaLabel`] || ""),
    (a.className = H[t]),
    rn(a, r, `${t}Button`);
}
const uA = (a, t) => {
    const r = gh();
    r &&
      (on(r, t.closeButtonHtml || ""),
      rn(r, t, "closeButton"),
      Do(r, t.showCloseButton),
      r.setAttribute("aria-label", t.closeButtonAriaLabel || ""));
  },
  dA = (a, t) => {
    const r = Bt();
    r &&
      (fA(r, t.backdrop),
      hA(r, t.position),
      mA(r, t.grow),
      rn(r, t, "container"));
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
    Tt(t),
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
    const o = qc(r, a);
    if (o) {
      vA(o);
      for (const c in t) o.setAttribute(c, t[c]);
    }
  },
  wA = (a) => {
    if (!a.input) return;
    const t = ib(a.input);
    t && rn(t, a, "input");
  },
  Eh = (a, t) => {
    !a.placeholder &&
      t.inputPlaceholder &&
      (a.placeholder = t.inputPlaceholder);
  },
  No = (a, t, r) => {
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
  xc = (a, t) => {
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
      xc(a, t.inputValue), No(a, a, t), Eh(a, t), (a.type = t.input), a
    );
ht.file = (a, t) => (No(a, a, t), Eh(a, t), a);
ht.range = (a, t) => {
  const r = a.querySelector("input"),
    o = a.querySelector("output");
  return (
    xc(r, t.inputValue), (r.type = t.input), xc(o, t.inputValue), No(r, a, t), a
  );
};
ht.select = (a, t) => {
  if (((a.textContent = ""), t.inputPlaceholder)) {
    const r = document.createElement("option");
    on(r, t.inputPlaceholder),
      (r.value = ""),
      (r.disabled = !0),
      (r.selected = !0),
      a.appendChild(r);
  }
  return No(a, a, t), a;
};
ht.radio = (a) => ((a.textContent = ""), a);
ht.checkbox = (a, t) => {
  const r = qc(qe(), "checkbox");
  (r.value = "1"), (r.checked = !!t.inputValue);
  const o = a.querySelector("span");
  return on(o, t.inputPlaceholder || t.inputLabel), r;
};
ht.textarea = (a, t) => {
  xc(a, t.inputValue), Eh(a, t), No(a, a, t);
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
            d > o ? (qe().style.width = `${d}px`) : Hi(qe(), "width", t.width);
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
      rn(r, t, "htmlContainer"),
      t.html
        ? (_h(t.html, r), Tt(r, "block"))
        : t.text
        ? ((r.textContent = t.text), Tt(r, "block"))
        : Mt(r),
      gA(a, t));
  },
  EA = (a, t) => {
    const r = eb();
    r &&
      (bh(r),
      Do(r, t.footer, "block"),
      t.footer && _h(t.footer, r),
      rn(r, t, "footer"));
  },
  xA = (a, t) => {
    const r = nt.innerParams.get(a),
      o = Qr();
    if (!o) return;
    if (r && t.icon === r.icon) {
      vv(o, t), yv(o, t);
      return;
    }
    if (!t.icon && !t.iconHtml) {
      Mt(o);
      return;
    }
    if (t.icon && Object.keys(Ec).indexOf(t.icon) === -1) {
      Ki(
        `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`
      ),
        Mt(o);
      return;
    }
    Tt(o),
      vv(o, t),
      yv(o, t),
      Ye(o, t.showClass && t.showClass.icon),
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", rb);
  },
  yv = (a, t) => {
    for (const [r, o] of Object.entries(Ec)) t.icon !== r && En(a, o);
    Ye(a, t.icon && Ec[t.icon]), CA(a, t), rb(), rn(a, t, "icon");
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
  TA = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
  SA = `
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
      ? ((o = TA), (r = r.replace(/ style=".*?"/g, "")))
      : t.icon === "error"
      ? (o = SA)
      : t.icon && (o = bv({ question: "?", warning: "!", info: "i" }[t.icon])),
      r.trim() !== o.trim() && on(a, o);
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
      Tt(r, ""),
        r.setAttribute("src", t.imageUrl),
        r.setAttribute("alt", t.imageAlt || ""),
        Hi(r, "width", t.imageWidth),
        Hi(r, "height", t.imageHeight),
        (r.className = H.image),
        rn(r, t, "image");
    }
  };
let xh = !1,
  lb = 0,
  ob = 0,
  sb = 0,
  cb = 0;
const RA = (a) => {
    a.addEventListener("mousedown", Tc),
      document.body.addEventListener("mousemove", Sc),
      a.addEventListener("mouseup", Cc),
      a.addEventListener("touchstart", Tc),
      document.body.addEventListener("touchmove", Sc),
      a.addEventListener("touchend", Cc);
  },
  OA = (a) => {
    a.removeEventListener("mousedown", Tc),
      document.body.removeEventListener("mousemove", Sc),
      a.removeEventListener("mouseup", Cc),
      a.removeEventListener("touchstart", Tc),
      document.body.removeEventListener("touchmove", Sc),
      a.removeEventListener("touchend", Cc);
  },
  Tc = (a) => {
    const t = qe();
    if (a.target === t || Qr().contains(a.target)) {
      xh = !0;
      const r = ub(a);
      (lb = r.clientX),
        (ob = r.clientY),
        (sb = parseInt(t.style.insetInlineStart) || 0),
        (cb = parseInt(t.style.insetBlockStart) || 0),
        Ye(t, "swal2-dragging");
    }
  },
  Sc = (a) => {
    const t = qe();
    if (xh) {
      let { clientX: r, clientY: o } = ub(a);
      (t.style.insetInlineStart = `${sb + (r - lb)}px`),
        (t.style.insetBlockStart = `${cb + (o - ob)}px`);
    }
  },
  Cc = () => {
    const a = qe();
    (xh = !1), En(a, "swal2-dragging");
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
        Hi(r, "width", t.width), (o.style.width = "100%");
        const c = Zr();
        c && o.insertBefore(c, Qr());
      } else Hi(o, "width", t.width);
      Hi(o, "padding", t.padding),
        t.color && (o.style.color = t.color),
        t.background && (o.style.background = t.background),
        Mt(Hc()),
        NA(o, t),
        t.draggable && !t.toast
          ? (Ye(o, H.draggable), RA(o))
          : (En(o, H.draggable), OA(o));
    }
  },
  NA = (a, t) => {
    const r = t.showClass || {};
    (a.className = `${H.popup} ${Xt(a) ? r.popup : ""}`),
      t.toast
        ? (Ye([document.documentElement, document.body], H["toast-shown"]),
          Ye(a, H.toast))
        : Ye(a, H.modal),
      rn(a, t, "popup"),
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
    Tt(r),
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
    return Ye(t, H["progress-step"]), on(t, a), t;
  },
  LA = (a) => {
    const t = document.createElement("li");
    return (
      Ye(t, H["progress-step-line"]),
      a.progressStepsDistance && Hi(t, "width", a.progressStepsDistance),
      t
    );
  },
  UA = (a, t) => {
    const r = J0();
    r &&
      (bh(r),
      Do(r, t.title || t.titleText, "block"),
      t.title && _h(t.title, r),
      t.titleText && (r.innerText = t.titleText),
      rn(r, t, "title"));
  },
  db = (a, t) => {
    DA(a, t),
      dA(a, t),
      MA(a, t),
      xA(a, t),
      AA(a, t),
      UA(a, t),
      uA(a, t),
      _A(a, t),
      oA(a, t),
      EA(a, t);
    const r = qe();
    typeof t.didRender == "function" && r && t.didRender(r),
      me.eventEmitter.emit("didRender", r);
  },
  jA = () => Xt(qe()),
  fb = () => {
    var a;
    return (a = Kn()) === null || a === void 0 ? void 0 : a.click();
  },
  zA = () => {
    var a;
    return (a = Qi()) === null || a === void 0 ? void 0 : a.click();
  },
  IA = () => {
    var a;
    return (a = Fr()) === null || a === void 0 ? void 0 : a.click();
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
  jf = (a, t) => {
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
    if (!Bc(t.allowEnterKey)) return;
    const r = qc(qe(), t.input);
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
    a.shiftKey ? jf(o, -1) : jf(o, 1), a.stopPropagation(), a.preventDefault();
  },
  GA = (a) => {
    const t = Oo(),
      r = Kn(),
      o = Qi(),
      c = Fr();
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
    Bc(t.allowEscapeKey) && (a.preventDefault(), r(Jr.esc));
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
      t = QA(r);
    }),
      (a.ontouchmove = (r) => {
        t && (r.preventDefault(), r.stopPropagation());
      });
  },
  QA = (a) => {
    const t = a.target,
      r = Bt(),
      o = mh();
    return !r || !o || FA(a) || ZA(a)
      ? !1
      : t === r ||
          (!Uf(r) &&
            t instanceof HTMLElement &&
            !QC(t, o) &&
            t.tagName !== "INPUT" &&
            t.tagName !== "TEXTAREA" &&
            !(Uf(o) && o.contains(t)));
  },
  FA = (a) =>
    a.touches && a.touches.length && a.touches[0].touchType === "stylus",
  ZA = (a) => a.touches && a.touches.length > 1,
  JA = () => {
    if (va(document.body, H.iosfix)) {
      const a = parseInt(document.body.style.top, 10);
      En(document.body, H.iosfix),
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
  Vc() ? wv(a, o) : (BC(r).then(() => wv(a, o)), hb(me)),
    gb
      ? (t.setAttribute("style", "display:none !important"),
        t.removeAttribute("class"),
        (t.innerHTML = ""))
      : t.remove(),
    vh() && (t3(), JA(), pb()),
    n3();
}
function n3() {
  En(
    [document.documentElement, document.body],
    [H.shown, H["height-auto"], H["no-backdrop"], H["toast-shown"]]
  );
}
function ai(a) {
  a = i3(a);
  const t = $r.swalPromiseResolve.get(this),
    r = a3(this);
  this.isAwaitingPromise ? a.isDismissed || (Mo(this), t(a)) : r && t(a);
}
const a3 = (a) => {
  const t = qe();
  if (!t) return !1;
  const r = nt.innerParams.get(a);
  if (!r || va(t, r.hideClass.popup)) return !1;
  En(t, r.showClass.popup), Ye(t, r.hideClass.popup);
  const o = Bt();
  return (
    En(o, r.showClass.backdrop), Ye(o, r.hideClass.backdrop), r3(a, t, r), !0
  );
};
function vb(a) {
  const t = $r.swalPromiseReject.get(this);
  Mo(this), t && t(a);
}
const Mo = (a) => {
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
    if ((t || new kn(), (t = qe()), !t)) return;
    const r = Zr();
    Vc() ? Mt(Qr()) : o3(t, a),
      Tt(r),
      t.setAttribute("data-loading", "true"),
      t.setAttribute("aria-busy", "true"),
      t.focus();
  },
  o3 = (a, t) => {
    const r = Oo(),
      o = Zr();
    !r ||
      !o ||
      (!t && Xt(Kn()) && (t = Kn()),
      Tt(r),
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
        Ao(t.inputOptions).then((c) => {
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
      Ao(t.inputValue)
        .then((o) => {
          (r.value = t.input === "number" ? `${parseFloat(o) || 0}` : `${o}`),
            Tt(r),
            r.focus(),
            a.hideLoading();
        })
        .catch((o) => {
          Ki(`Error in inputValue promise: ${o}`),
            (r.value = ""),
            Tt(r),
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
      on(h, f),
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
    on(b, p),
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
    a.disableButtons(), t.input ? wb(a, "confirm") : Sh(a, !0);
  },
  v3 = (a) => {
    const t = nt.innerParams.get(a);
    a.disableButtons(), t.returnInputValueOnDeny ? wb(a, "deny") : Th(a, !1);
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
      ? Th(a, c)
      : Sh(a, c);
  },
  w3 = (a, t, r) => {
    const o = nt.innerParams.get(a);
    a.disableInput(),
      Promise.resolve()
        .then(() => Ao(o.inputValidator(t, o.validationMessage)))
        .then((d) => {
          a.enableButtons(),
            a.enableInput(),
            d ? a.showValidationMessage(d) : r === "deny" ? Th(a, t) : Sh(a, t);
        });
  },
  Th = (a, t) => {
    const r = nt.innerParams.get(a || void 0);
    r.showLoaderOnDeny && Yr(Qi()),
      r.preDeny
        ? ((a.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => Ao(r.preDeny(t, r.validationMessage)))
            .then((c) => {
              c === !1
                ? (a.hideLoading(), Mo(a))
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
  Sh = (a, t) => {
    const r = nt.innerParams.get(a || void 0);
    r.showLoaderOnConfirm && Yr(),
      r.preConfirm
        ? (a.resetValidationMessage(),
          (a.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => Ao(r.preConfirm(t, r.validationMessage)))
            .then((c) => {
              Xt(Hc()) || c === !1
                ? (a.hideLoading(), Mo(a))
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
    Vc() ? a.icon && Tt(Qr()) : _3(t),
    En([t.popup, t.actions], H.loading),
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
  t.length ? Tt(t[0], "inline-block") : KC() && Mt(a.actions);
};
function Eb() {
  const a = nt.innerParams.get(this),
    t = nt.domCache.get(this);
  return t ? qc(t.popup, a.input) : null;
}
function xb(a, t, r) {
  const o = nt.domCache.get(a);
  t.forEach((c) => {
    o[c].disabled = r;
  });
}
function Tb(a, t) {
  const r = qe();
  if (!(!r || !a))
    if (a.type === "radio") {
      const o = r.querySelectorAll(`[name="${H.radio}"]`);
      for (let c = 0; c < o.length; c++) o[c].disabled = t;
    } else a.disabled = t;
}
function Sb() {
  xb(this, ["confirmButton", "denyButton", "cancelButton"], !1);
}
function Cb() {
  xb(this, ["confirmButton", "denyButton", "cancelButton"], !0);
}
function Ab() {
  Tb(this.getInput(), !1);
}
function Rb() {
  Tb(this.getInput(), !0);
}
function Ob(a) {
  const t = nt.domCache.get(this),
    r = nt.innerParams.get(this);
  on(t.validationMessage, a),
    (t.validationMessage.className = H["validation-message"]),
    r.customClass &&
      r.customClass.validationMessage &&
      Ye(t.validationMessage, r.customClass.validationMessage),
    Tt(t.validationMessage);
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
    En(t, H.inputerror));
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
  E3 = [
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
  x3 = { allowEnterKey: void 0 },
  T3 = [
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
  Mb = (a) => E3.indexOf(a) !== -1,
  kb = (a) => x3[a],
  S3 = (a) => {
    Nb(a) || It(`Unknown parameter "${a}"`);
  },
  C3 = (a) => {
    T3.includes(a) && It(`The parameter "${a}" is incompatible with toasts`);
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
    for (const t in a) S3(t), a.toast && C3(t), A3(t);
  };
function Ub(a) {
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
function jb() {
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
      ? (_f(nt, a), (a.isAwaitingPromise = !0))
      : (_f($r, a),
        _f(nt, a),
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
  _f = (a, t) => {
    for (const r in a) a[r].delete(t);
  };
var D3 = Object.freeze({
  __proto__: null,
  _destroy: jb,
  close: ai,
  closeModal: ai,
  closePopup: ai,
  closeToast: ai,
  disableButtons: Cb,
  disableInput: Rb,
  disableLoading: Rc,
  enableButtons: Sb,
  enableInput: Ab,
  getInput: Eb,
  handleAwaitingPromise: Mo,
  hideLoading: Rc,
  rejectPromise: vb,
  resetValidationMessage: Db,
  showValidationMessage: Ob,
  update: Ub,
});
const N3 = (a, t, r) => {
    a.toast ? M3(a, t, r) : (L3(t), U3(t), j3(a, t, r));
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
  U3 = (a) => {
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
  j3 = (a, t, r) => {
    t.container.onclick = (o) => {
      if (Oc) {
        Oc = !1;
        return;
      }
      o.target === t.container && Bc(a.allowOutsideClick) && r(Jr.backdrop);
    };
  },
  z3 = (a) => typeof a == "object" && a.jquery,
  Ev = (a) => a instanceof Element || z3(a),
  I3 = (a) => {
    const t = {};
    return (
      typeof a[0] == "object" && !Ev(a[0])
        ? Object.assign(t, a[0])
        : ["title", "html", "icon"].forEach((r, o) => {
            const c = a[o];
            typeof c == "string" || Ev(c)
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
    if (me.timeout) return FC(), me.timeout.stop();
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
let xv = !1;
const zf = {};
function $3(a = "data-swal-template") {
  (zf[a] = this),
    xv || (document.body.addEventListener("click", Y3), (xv = !0));
}
const Y3 = (a) => {
  for (let t = a.target; t && t !== document; t = t.parentNode)
    for (const r in zf) {
      const o = t.getAttribute(r);
      if (o) {
        zf[r].fire({ template: o });
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
  Q3 = (a, t) => {
    me.eventEmitter.once(a, t);
  },
  F3 = (a, t) => {
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
  getActions: Oo,
  getCancelButton: Fr,
  getCloseButton: gh,
  getConfirmButton: Kn,
  getContainer: Bt,
  getDenyButton: Qi,
  getFocusableElements: yh,
  getFooter: eb,
  getHtmlContainer: mh,
  getIcon: Qr,
  getIconContent: qC,
  getImage: W0,
  getInputLabel: GC,
  getLoader: Zr,
  getPopup: qe,
  getProgressSteps: ph,
  getTimerLeft: P3,
  getTimerProgressBar: Pc,
  getTitle: J0,
  getValidationMessage: Hc,
  increaseTimer: q3,
  isDeprecatedParameter: kb,
  isLoading: YC,
  isTimerRunning: G3,
  isUpdatableParameter: Mb,
  isValidParameter: Nb,
  isVisible: jA,
  mixin: H3,
  off: F3,
  on: K3,
  once: Q3,
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
        Gi(o, ["name", "value"]);
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
        Gi(o, ["type", "color", "aria-label"]);
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
        (Gi(r, ["src", "width", "height", "alt"]),
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
        (Gi(r, ["type", "color"]),
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
      (Gi(r, ["type", "label", "placeholder", "value"]),
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
          Gi(c, ["value"]);
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
      d && (Gi(d, []), (r[c.replace(/^swal-/, "")] = d.innerHTML.trim()));
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
  Gi = (a, t) => {
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
      !Vc() &&
        !me.previousActiveElement &&
        (me.previousActiveElement = document.activeElement),
      typeof a.didOpen == "function" && setTimeout(() => a.didOpen(r)),
      me.eventEmitter.emit("didOpen", r),
      En(t, H["no-transition"]);
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
          Tt(t, "grid"),
          setTimeout(() => {
            Ye(t, r.showClass.popup), t.style.removeProperty("opacity");
          }, Pb))
        : Tt(t, "grid"),
      Ye([document.documentElement, document.body], H.shown),
      r.heightAuto &&
        r.backdrop &&
        !r.toast &&
        Ye([document.documentElement, document.body], H["height-auto"]);
  };
var Tv = {
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
    (a.input === "email" && (a.inputValidator = Tv.email),
    a.input === "url" && (a.inputValidator = Tv.url));
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
let Gn;
var Ws = new WeakMap();
class pt {
  constructor(...t) {
    if ((UC(this, Ws, void 0), typeof window > "u")) return;
    Gn = this;
    const r = Object.freeze(this.constructor.argsToParams(t));
    (this.params = r),
      (this.isAwaitingPromise = !1),
      jC(Ws, this, this._main(Gn.params));
  }
  _main(t, r = {}) {
    if ((Lb(Object.assign({}, r, t)), me.currentInstance)) {
      const d = $r.swalPromiseResolve.get(me.currentInstance),
        { isAwaitingPromise: f } = me.currentInstance;
      me.currentInstance._destroy(), f || d({ isDismissed: !0 }), vh() && pb();
    }
    me.currentInstance = Gn;
    const o = gR(t, r);
    mR(o),
      Object.freeze(o),
      me.timeout && (me.timeout.stop(), delete me.timeout),
      clearTimeout(me.restoreFocusTimeout);
    const c = yR(Gn);
    return db(Gn, o), nt.innerParams.set(Gn, o), pR(Gn, c, o);
  }
  then(t) {
    return mv(Ws, this).then(t);
  }
  finally(t) {
    return mv(Ws, this).finally(t);
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
      actions: Oo(),
      confirmButton: Kn(),
      denyButton: Qi(),
      cancelButton: Fr(),
      loader: Zr(),
      closeButton: gh(),
      validationMessage: Hc(),
      progressSteps: ph(),
    };
    return nt.domCache.set(a, t), t;
  },
  vR = (a, t, r) => {
    const o = Pc();
    Mt(o),
      t.timer &&
        ((a.timeout = new J3(() => {
          r("timer"), delete a.timeout;
        }, t.timer)),
        t.timerProgressBar &&
          (Tt(o),
          rn(o, t, "timerProgressBar"),
          setTimeout(() => {
            a.timeout && a.timeout.running && wh(t.timer);
          })));
  },
  bR = (a, t) => {
    if (!t.toast) {
      if (!Bc(t.allowEnterKey)) {
        Z0("allowEnterKey"), ER();
        return;
      }
      wR(a) || _R(a, t) || jf(-1, 1);
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
  ER = () => {
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
pt.prototype.enableButtons = Sb;
pt.prototype.getInput = Eb;
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
pt.prototype.update = Ub;
pt.prototype._destroy = jb;
Object.assign(pt, Z3);
Object.keys(D3).forEach((a) => {
  pt[a] = function (...t) {
    return Gn && Gn[a] ? Gn[a](...t) : null;
  };
});
pt.DismissReason = Jr;
pt.version = "11.21.2";
const kn = pt;
kn.default = kn;
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
function Pi() {
  for (var a, t, r = 0, o = "", c = arguments.length; r < c; r++)
    (a = arguments[r]) && (t = Vb(a)) && (o && (o += " "), (o += t));
  return o;
}
function xR(a) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = a)
      : r.appendChild(document.createTextNode(a));
}
xR(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var ko = (a) => typeof a == "number" && !isNaN(a),
  $i = (a) => typeof a == "string",
  _a = (a) => typeof a == "function",
  TR = (a) => $i(a) || ko(a),
  If = (a) => ($i(a) || _a(a) ? a : null),
  SR = (a, t) => (a === !1 || (ko(a) && a > 0) ? a : t),
  Bf = (a) => R.isValidElement(a) || $i(a) || _a(a) || ko(a);
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
    playToast: T,
  }) {
    let w = r ? `${a}--${f}` : a,
      O = r ? `${t}--${f}` : t,
      M = R.useRef(0);
    return (
      R.useLayoutEffect(() => {
        let K = g.current,
          P = w.split(" "),
          I = (B) => {
            B.target === g.current &&
              (T(),
              K.removeEventListener("animationend", I),
              K.removeEventListener("animationcancel", I),
              M.current === 0 &&
                B.type !== "animationcancel" &&
                K.classList.remove(...P));
          };
        K.classList.add(...P),
          K.addEventListener("animationend", I),
          K.addEventListener("animationcancel", I);
      }, []),
      R.useEffect(() => {
        let K = g.current,
          P = () => {
            K.removeEventListener("animationend", P), o ? CR(K, h, c) : h();
          };
        b ||
          (p
            ? P()
            : ((M.current = 1),
              (K.className += ` ${O}`),
              K.addEventListener("animationend", P)));
      }, [b]),
      Ve.createElement(Ve.Fragment, null, d)
    );
  };
}
function Sv(a, t) {
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
  return R.isValidElement(a) && !$i(a.type)
    ? R.cloneElement(a, {
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
  let T = c || (f && p === 0),
    w = {
      animationDuration: `${a}ms`,
      animationPlayState: t ? "running" : "paused",
    };
  f && (w.transform = `scaleX(${p})`);
  let O = Pi(
      "Toastify__progress-bar",
      f
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${b}`,
      `Toastify__progress-bar--${o}`,
      { "Toastify__progress-bar--rtl": h }
    ),
    M = _a(d) ? d({ rtl: h, type: o, defaultClassName: O }) : Pi(O, d),
    K = {
      [f && p >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        f && p < 1
          ? null
          : () => {
              g && r();
            },
    };
  return Ve.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": T },
    Ve.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${b} Toastify__progress-bar--${o}`,
    }),
    Ve.createElement("div", {
      role: "progressbar",
      "aria-hidden": T ? "true" : "false",
      "aria-label": "notification timer",
      className: M,
      style: w,
      ...K,
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
    T = () => {
      (f = Array.from(h.values())), g.forEach((B) => B());
    },
    w = ({ containerId: B, toastId: q, updateId: F }) => {
      let Q = B ? B !== a : a !== 1,
        D = h.has(q) && F == null;
      return Q || D;
    },
    O = (B, q) => {
      h.forEach((F) => {
        var Q;
        (q == null || q === F.props.toastId) &&
          ((Q = F.toggle) == null || Q.call(F, B));
      });
    },
    M = (B) => {
      var q, F;
      (F = (q = B.props) == null ? void 0 : q.onClose) == null ||
        F.call(q, B.removalReason),
        (B.isActive = !1);
    },
    K = (B) => {
      if (B == null) h.forEach(M);
      else {
        let q = h.get(B);
        q && M(q);
      }
      T();
    },
    P = () => {
      (c -= d.length), (d = []);
    },
    I = (B) => {
      var q, F;
      let { toastId: Q, updateId: D } = B.props,
        ee = D == null;
      B.staleId && h.delete(B.staleId),
        (B.isActive = !0),
        h.set(Q, B),
        T(),
        r(Sv(B, ee ? "added" : "updated")),
        ee && ((F = (q = B.props).onOpen) == null || F.call(q));
    };
  return {
    id: a,
    props: p,
    observe: b,
    toggle: O,
    removeToast: K,
    toasts: h,
    clearQueue: P,
    buildToast: (B, q) => {
      if (w(q)) return;
      let { toastId: F, updateId: Q, data: D, staleId: ee, delay: ne } = q,
        le = Q == null;
      le && c++;
      let Me = {
        ...p,
        style: p.toastStyle,
        key: o++,
        ...Object.fromEntries(
          Object.entries(q).filter(([Ge, Re]) => Re != null)
        ),
        toastId: F,
        updateId: Q,
        data: D,
        isIn: !1,
        className: If(q.className || p.toastClassName),
        progressClassName: If(q.progressClassName || p.progressClassName),
        autoClose: q.isLoading ? !1 : SR(q.autoClose, p.autoClose),
        closeToast(Ge) {
          (h.get(F).removalReason = Ge), K(F);
        },
        deleteToast() {
          let Ge = h.get(F);
          if (Ge != null) {
            if (
              (r(Sv(Ge, "removed")),
              h.delete(F),
              c--,
              c < 0 && (c = 0),
              d.length > 0)
            ) {
              I(d.shift());
              return;
            }
            T();
          }
        },
      };
      (Me.closeButton = p.closeButton),
        q.closeButton === !1 || Bf(q.closeButton)
          ? (Me.closeButton = q.closeButton)
          : q.closeButton === !0 &&
            (Me.closeButton = Bf(p.closeButton) ? p.closeButton : !0);
      let ze = { content: B, props: Me, staleId: ee };
      p.limit && p.limit > 0 && c > p.limit && le
        ? d.push(ze)
        : ko(ne)
        ? setTimeout(() => {
            I(ze);
          }, ne)
        : I(ze);
    },
    setProps(B) {
      p = B;
    },
    setToggle: (B, q) => {
      let F = h.get(B);
      F && (F.toggle = q);
    },
    isToastActive: (B) => {
      var q;
      return (q = h.get(B)) == null ? void 0 : q.isActive;
    },
    getSnapshot: () => f,
  };
}
var jt = new Map(),
  go = [],
  Hf = new Set(),
  MR = (a) => Hf.forEach((t) => t(a)),
  $b = () => jt.size > 0;
function kR() {
  go.forEach((a) => Xb(a.content, a.options)), (go = []);
}
var LR = (a, { containerId: t }) => {
  var r;
  return (r = jt.get(t || 1)) == null ? void 0 : r.toasts.get(a);
};
function Yb(a, t) {
  var r;
  if (t) return !!((r = jt.get(t)) != null && r.isToastActive(a));
  let o = !1;
  return (
    jt.forEach((c) => {
      c.isToastActive(a) && (o = !0);
    }),
    o
  );
}
function UR(a) {
  if (!$b()) {
    go = go.filter((t) => a != null && t.options.toastId !== a);
    return;
  }
  if (a == null || TR(a))
    jt.forEach((t) => {
      t.removeToast(a);
    });
  else if (a && ("containerId" in a || "id" in a)) {
    let t = jt.get(a.containerId);
    t
      ? t.removeToast(a.id)
      : jt.forEach((r) => {
          r.removeToast(a.id);
        });
  }
}
var jR = (a = {}) => {
  jt.forEach((t) => {
    t.props.limit &&
      (!a.containerId || t.id === a.containerId) &&
      t.clearQueue();
  });
};
function Xb(a, t) {
  Bf(a) &&
    ($b() || go.push({ content: a, options: t }),
    jt.forEach((r) => {
      r.buildToast(a, t);
    }));
}
function zR(a) {
  var t;
  (t = jt.get(a.containerId || 1)) == null || t.setToggle(a.id, a.fn);
}
function Kb(a, t) {
  jt.forEach((r) => {
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
      jt.set(t, o);
      let c = o.observe(r);
      return (
        kR(),
        () => {
          c(), jt.delete(t);
        }
      );
    },
    setProps(r) {
      var o;
      (o = jt.get(t)) == null || o.setProps(r);
    },
    getSnapshot() {
      var r;
      return (r = jt.get(t)) == null ? void 0 : r.getSnapshot();
    },
  };
}
function BR(a) {
  return (
    Hf.add(a),
    () => {
      Hf.delete(a);
    }
  );
}
function HR(a) {
  return a && ($i(a.toastId) || ko(a.toastId)) ? a.toastId : Gb();
}
function Lo(a, t) {
  return Xb(a, t), t.toastId;
}
function Gc(a, t) {
  return { ...t, type: (t && t.type) || a, toastId: HR(t) };
}
function $c(a) {
  return (t, r) => Lo(t, Gc(a, r));
}
function je(a, t) {
  return Lo(a, Gc("default", t));
}
je.loading = (a, t) =>
  Lo(
    a,
    Gc("default", {
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
  t && (d = $i(t) ? je.loading(t, c) : je.loading(t.render, { ...c, ...t }));
  let f = {
      isLoading: null,
      autoClose: null,
      closeOnClick: null,
      closeButton: null,
      draggable: null,
    },
    p = (g, b, T) => {
      if (b == null) {
        je.dismiss(d);
        return;
      }
      let w = { type: g, ...f, ...c, data: T },
        O = $i(b) ? { render: b } : b;
      return d ? je.update(d, { ...w, ...O }) : je(O.render, { ...w, ...O }), T;
    },
    h = _a(a) ? a() : a;
  return h.then((g) => p("success", o, g)).catch((g) => p("error", r, g)), h;
}
je.promise = PR;
je.success = $c("success");
je.info = $c("info");
je.error = $c("error");
je.warning = $c("warning");
je.warn = je.warning;
je.dark = (a, t) => Lo(a, Gc("default", { theme: "dark", ...t }));
function VR(a) {
  UR(a);
}
je.dismiss = VR;
je.clearWaitingQueue = jR;
je.isActive = Yb;
je.update = (a, t = {}) => {
  let r = LR(a, t);
  if (r) {
    let { props: o, content: c } = r,
      d = { delay: 100, ...o, ...t, toastId: t.toastId || a, updateId: Gb() };
    d.toastId !== a && (d.staleId = a);
    let f = d.render || c;
    delete d.render, Lo(f, d);
  }
};
je.done = (a) => {
  je.update(a, { progress: 1 });
};
je.onChange = BR;
je.play = (a) => Kb(!0, a);
je.pause = (a) => Kb(!1, a);
function qR(a) {
  var t;
  let { subscribe: r, getSnapshot: o, setProps: c } = R.useRef(IR(a)).current;
  c(a);
  let d = (t = R.useSyncExternalStore(r, o, o)) == null ? void 0 : t.slice();
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
  let [t, r] = R.useState(!1),
    [o, c] = R.useState(!1),
    d = R.useRef(null),
    f = R.useRef({
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
      closeOnClick: T,
    } = a;
  zR({ id: a.toastId, containerId: a.containerId, fn: r }),
    R.useEffect(() => {
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
  function K(ee) {
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
      document.addEventListener("pointermove", F),
      document.addEventListener("pointerup", Q);
  }
  function q() {
    document.removeEventListener("pointermove", F),
      document.removeEventListener("pointerup", Q);
  }
  function F(ee) {
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
  function Q() {
    q();
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
  let D = { onPointerDown: M, onPointerUp: K };
  return (
    p && h && ((D.onMouseEnter = I), a.stacked || (D.onMouseLeave = P)),
    T &&
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
var $R = typeof window < "u" ? R.useLayoutEffect : R.useEffect,
  Yc = ({ theme: a, type: t, isLoading: r, ...o }) =>
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
    Yc,
    { ...a },
    Ve.createElement("path", {
      d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
    })
  );
}
function XR(a) {
  return Ve.createElement(
    Yc,
    { ...a },
    Ve.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
    })
  );
}
function KR(a) {
  return Ve.createElement(
    Yc,
    { ...a },
    Ve.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
    })
  );
}
function QR(a) {
  return Ve.createElement(
    Yc,
    { ...a },
    Ve.createElement("path", {
      d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
    })
  );
}
function FR() {
  return Ve.createElement("div", { className: "Toastify__spinner" });
}
var Pf = { info: XR, warning: YR, success: KR, error: QR, spinner: FR },
  ZR = (a) => a in Pf;
function JR({ theme: a, type: t, isLoading: r, icon: o }) {
  let c = null,
    d = { theme: a, type: t };
  return (
    o === !1 ||
      (_a(o)
        ? (c = o({ ...d, isLoading: r }))
        : R.isValidElement(o)
        ? (c = R.cloneElement(o, d))
        : r
        ? (c = Pf.spinner())
        : ZR(t) && (c = Pf[t](d))),
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
        hideProgressBar: T,
        closeToast: w,
        transition: O,
        position: M,
        className: K,
        style: P,
        progressClassName: I,
        updateId: B,
        role: q,
        progress: F,
        rtl: Q,
        toastId: D,
        deleteToast: ee,
        isIn: ne,
        isLoading: le,
        closeOnClick: Me,
        theme: ze,
        ariaLabel: Ge,
      } = a,
      Re = Pi(
        "Toastify__toast",
        `Toastify__toast-theme--${ze}`,
        `Toastify__toast--${b}`,
        { "Toastify__toast--rtl": Q },
        { "Toastify__toast--close-on-click": Me }
      ),
      Ie = _a(K)
        ? K({ rtl: Q, position: M, type: b, defaultClassName: Re })
        : Pi(Re, K),
      Le = JR(a),
      L = !!F || !h,
      Z = { closeToast: w, type: b, theme: ze },
      ae = null;
    return (
      f === !1 ||
        (_a(f)
          ? (ae = f(Z))
          : R.isValidElement(f)
          ? (ae = R.cloneElement(f, Z))
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
            ...(ne && { role: q, "aria-label": Ge }),
          },
          Le != null &&
            Ve.createElement(
              "div",
              {
                className: Pi("Toastify__toast-icon", {
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
              rtl: Q,
              theme: ze,
              delay: h,
              isRunning: t,
              isIn: ne,
              closeToast: w,
              hide: T,
              type: b,
              className: I,
              controlledProgress: L,
              progress: F || 0,
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
    [o, c] = R.useState(!0),
    d = R.useRef(null),
    { getToastToRender: f, isToastActive: p, count: h } = qR(t),
    { className: g, style: b, rtl: T, containerId: w, hotKeys: O } = t;
  function M(P) {
    let I = Pi("Toastify__toast-container", `Toastify__toast-container--${P}`, {
      "Toastify__toast-container--rtl": T,
    });
    return _a(g)
      ? g({ position: P, rtl: T, defaultClassName: I })
      : Pi(I, If(g));
  }
  function K() {
    r && (c(!0), je.play());
  }
  return (
    $R(() => {
      var P;
      if (r) {
        let I = d.current.querySelectorAll('[data-in="true"]'),
          B = 12,
          q = (P = t.position) == null ? void 0 : P.includes("top"),
          F = 0,
          Q = 0;
        Array.from(I)
          .reverse()
          .forEach((D, ee) => {
            let ne = D;
            ne.classList.add("Toastify__toast--stacked"),
              ee > 0 && (ne.dataset.collapsed = `${o}`),
              ne.dataset.pos || (ne.dataset.pos = q ? "top" : "bot");
            let le = F * (o ? 0.2 : 1) + (o ? 0 : B * ee);
            ne.style.setProperty("--y", `${q ? le : le * -1}px`),
              ne.style.setProperty("--g", `${B}`),
              ne.style.setProperty("--s", `${1 - (o ? Q : 0)}`),
              (F += ne.offsetHeight),
              (Q += 0.025);
          });
      }
    }, [o, h, r]),
    R.useEffect(() => {
      function P(I) {
        var B;
        let q = d.current;
        O(I) &&
          ((B = q.querySelector('[tabIndex="0"]')) == null || B.focus(),
          c(!1),
          je.pause()),
          I.key === "Escape" &&
            (document.activeElement === q ||
              (q != null && q.contains(document.activeElement))) &&
            (c(!0), je.play());
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
          r && (c(!1), je.pause());
        },
        onMouseLeave: K,
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
          I.map(({ content: q, props: F }) =>
            Ve.createElement(
              WR,
              {
                ...F,
                stacked: r,
                collapseAll: K,
                isIn: p(F.toastId, F.containerId),
                key: `t-${F.key}`,
              },
              q
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
    const { user: a, logoutUser: t } = R.useContext(Xi),
      r = () => {
        t()
          .then(() => {
            kn.fire({
              title: "Successfully Logged Out...!",
              icon: "success",
              draggable: !0,
            });
          })
          .catch((o) => {
            je.error("Logout failed...!");
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
                : v.jsx(Yn, {
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
        v.jsx(bE, {}),
        v.jsx(aO, {}),
      ],
    }),
  lO = () => {
    const a = Kf();
    return (
      console.log(a),
      v.jsx("div", {
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
                              children: v.jsx(Yn, {
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
            }),
          ],
        }),
      })
    );
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
    const { user: a } = R.useContext(Xi),
      t = (r) => {
        r.preventDefault();
        const o = r.target,
          c = new FormData(o),
          d = Object.fromEntries(c.entries());
        fetch("http://localhost:3000/groups", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(d),
        })
          .then((f) => f.json())
          .then((f) => {
            f.acknowledged &&
              kn.fire({
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
    const a = Kf(),
      {
        groupName: t,
        hobbyCategory: r,
        description: o,
        meetingLocation: c,
        imageUrl: d,
        maxMembers: f,
        startDate: p,
        name: h,
        email: g,
      } = a;
    return (
      console.log(a),
      v.jsx("div", {
        className: "min-h-screen bg-cover bg-center p-4 md:p-6",
        style: {
          backgroundImage: "url('https://i.ibb.co/yBXDgJkm/mugic.jpg')",
        },
        children: v.jsx("div", {
          className: "mt-24 w-full max-w-7xl mx-auto",
          children: v.jsxs("div", {
            className: "overflow-x-auto backdrop-blur-3xl rounded-xl shadow-md",
            children: [
              v.jsx("img", {
                className: "w-full h-full md:h-[400px] bg-cover",
                src: d,
                alt: "group Image",
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
                      t,
                    ],
                  }),
                  v.jsxs("h5", {
                    className: "txt-lg lg:text-2xl",
                    children: [
                      v.jsx("strong", { children: "Category :" }),
                      " ",
                      r,
                    ],
                  }),
                  v.jsxs("p", {
                    className: "text-sm lg:text-xl",
                    children: [
                      v.jsx("strong", { children: "Meeting Location : " }),
                      c,
                    ],
                  }),
                  v.jsxs("p", {
                    className: "text-sm lg:text-xl",
                    children: [
                      v.jsx("strong", { children: "Maximum Members : " }),
                      f,
                    ],
                  }),
                  v.jsxs("p", {
                    className: "text-sm lg:text-xl",
                    children: [
                      v.jsx("strong", { children: "Start Date : " }),
                      p,
                    ],
                  }),
                  v.jsxs("p", {
                    className: "text-sm lg:text-xl",
                    children: [
                      v.jsx("strong", { children: "Created By : " }),
                      h,
                    ],
                  }),
                  v.jsxs("p", {
                    className: "text-sm lg:text-xl",
                    children: [
                      v.jsx("strong", { children: "Admin Email : " }),
                      g,
                    ],
                  }),
                  v.jsxs("p", {
                    className: "text-sm lg:text-xl",
                    children: [
                      v.jsx("strong", { children: "Description : " }),
                      o,
                    ],
                  }),
                  v.jsx("button", {
                    "data-aos": "zoom-in",
                    className:
                      "w-full cursor-pointer bg-transparent border-4 border-white shadow hover:bg-orange-600 hover:text-white text-orange-600 font-semibold py-3 rounded-md text-2xl specific-text transition-transform duration-500 hover:scale-105",
                    children: "Join Group",
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    );
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
            v.jsx(Yn, {
              to: "/login",
              className:
                "px-5 py-2 rounded bg-orange-500 hover:bg-orange-600 text-white  font-medium text-lg md:text-xl lg:text-2xl",
              children: "Get Started",
            }),
          ],
        }),
      ],
    }),
  dO = () =>
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
    }),
  sc = () =>
    v.jsx("div", {
      className: "min-h-screen flex justify-center items-center",
      children: v.jsx("span", {
        className: "loading loading-spinner loading-xl text-primary",
      }),
    });
function Qb(a) {
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
function Fb(a) {
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
function fO(a) {
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
function hO(a) {
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
function mO(a) {
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
const pO = () => {
  const { loginUser: a, googleLogin: t } = R.useContext(Xi),
    r = vo(),
    o = Qn(),
    c = R.useRef(),
    d = (p) => {
      p.preventDefault();
      const h = p.target,
        g = h.email.value,
        b = h.password.value;
      a(g, b)
        .then((T) => {
          kn.fire({
            title: "Successfully Login!",
            icon: "success",
            draggable: !0,
          }),
            r(`${o.state ? o.state : "/"}`);
        })
        .catch((T) => {
          je.error("Login fail" + T.code);
        });
    },
    f = () => {
      t()
        .then((p) => {
          kn.fire({
            title: "Google Login Successfully...!",
            icon: "success",
            draggable: !0,
          }),
            r(`${o.state ? o.state : "/"}`);
        })
        .catch((p) => {
          je.error("Google Login fail " + p.message);
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
                      children: v.jsx(Qb, {}),
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
                      children: v.jsx(Fb, {}),
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
            v.jsx(Yn, {
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
function gO(a) {
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
const yO = () => {
    const [a, t] = R.useState([]),
      { user: r } = R.useContext(Xi);
    R.useEffect(() => {
      fetch(
        `http://localhost:3000/groups?emailParams=${
          r == null ? void 0 : r.email
        }`
      )
        .then((c) => c.json())
        .then((c) => t(c));
    }, [r == null ? void 0 : r.email]);
    const o = (c) => {
      kn.fire({
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
                kn.fire({
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
                                    v.jsx(Yn, {
                                      to: `/groupDetail/${c._id}`,
                                      children: v.jsx("button", {
                                        className:
                                          "cursor-pointer rounded bg-transparent shadow shadow-gray-300 p-[10px]",
                                        children: v.jsx(gO, {
                                          size: 20,
                                          color: " #17a2b8",
                                        }),
                                      }),
                                    }),
                                    v.jsx(Yn, {
                                      to: `/updateGroup/${c._id}`,
                                      children: v.jsx("button", {
                                        className:
                                          "cursor-pointer rounded bg-transparent shadow shadow-gray-300 p-[10px]",
                                        children: v.jsx(fO, {
                                          size: 20,
                                          color: "#b182e3",
                                        }),
                                      }),
                                    }),
                                    v.jsx("button", {
                                      onClick: () => o(c._id),
                                      className:
                                        "cursor-pointer rounded bg-transparent shadow shadow-gray-300 p-[10px]",
                                      children: v.jsx(AE, {
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
                    v.jsxs("p", {
                      className:
                        "text-center font-semibold text-lg lg:text-2xl",
                      children: [
                        "Right now your no group available here, please",
                        " ",
                        v.jsx(Yn, {
                          className: "underline font-bold text-green-500",
                          to: "/createGroup",
                          children: "Create Group",
                        }),
                      ],
                    }),
                  ],
                }),
          }),
        ],
      }),
    });
  },
  vO = () => {
    const { createUser: a, updateUser: t, setUser: r } = R.useContext(Xi),
      o = vo(),
      c = (d) => {
        d.preventDefault();
        const f = d.target,
          p = f.name.value,
          h = f.photo.value,
          g = f.email.value,
          b = f.password.value;
        if (!/[A-Z]/.test(b)) {
          je.error("Password must contain at least one uppercase letter.");
          return;
        }
        if (!/[a-z]/.test(b)) {
          je.error("Password must contain at least one lowercase letter.");
          return;
        }
        if (b.length < 6) {
          je.error("Password must be at least 6 characters long.");
          return;
        }
        a(g, b)
          .then((T) => {
            const w = T.user;
            t({ displayName: p, photoURL: h })
              .then(() => {
                r({ ...w, displayName: p, photoURL: h }),
                  kn.fire({
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
          .catch((T) => {
            const w = T.message;
            je.error("Register fail" + w);
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
                        children: v.jsx(mO, {}),
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
                        children: v.jsx(hO, {}),
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
                        children: v.jsx(Qb, {}),
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
                        children: v.jsx(Fb, {}),
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
              v.jsx(Yn, {
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
  bO = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
  ],
  wO = () => {
    const a = vo(),
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
      } = Kf(),
      T = (w) => {
        w.preventDefault();
        const O = w.target,
          M = new FormData(O),
          K = Object.fromEntries(M.entries());
        fetch(`http://localhost:3000/groups/${h}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(K),
        })
          .then((P) => P.json())
          .then((P) => {
            P.modifiedCount &&
              (console.log("data after db", P),
              kn.fire({
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
          onSubmit: T,
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
                      children: bO.map((w) =>
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
  ec = ({ children: a }) => {
    const { user: t, loader: r } = R.useContext(Xi),
      o = Qn();
    return r
      ? v.jsx(sc, {})
      : t && t != null && t.email
      ? a
      : v.jsx(j_, { state: o.pathname, to: "/login" });
  },
  _O = sE([
    {
      path: "/",
      Component: rO,
      children: [
        { index: !0, Component: dO },
        {
          path: "allGroups",
          loader: () => fetch("http://localhost:3000/groups"),
          Component: lO,
          hydrateFallbackElement: v.jsx(sc, {}),
        },
        {
          path: "createGroup",
          element: v.jsx(ec, { children: v.jsx(sO, {}) }),
        },
        { path: "register", Component: vO },
        { path: "login", Component: pO },
        {
          path: "groupDetail/:id",
          loader: ({ params: a }) =>
            fetch(`http://localhost:3000/groups/${a.id}`),
          element: v.jsx(ec, { children: v.jsx(cO, {}) }),
          hydrateFallbackElement: v.jsx(sc, {}),
        },
        { path: "myGroups", element: v.jsx(ec, { children: v.jsx(yO, {}) }) },
        {
          path: "updateGroup/:id",
          loader: ({ params: a }) =>
            fetch(`http://localhost:3000/groups/${a.id}`),
          element: v.jsx(ec, { children: v.jsx(wO, {}) }),
          hydrateFallbackElement: v.jsx(sc, {}),
        },
      ],
    },
  ]);
f1.createRoot(document.getElementById("root")).render(
  v.jsx(R.StrictMode, {
    children: v.jsx(kC, { children: v.jsx(k_, { router: _O }) }),
  })
);
