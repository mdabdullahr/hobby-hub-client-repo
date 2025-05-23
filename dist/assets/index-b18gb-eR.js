(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) l(s);
  new MutationObserver((s) => {
    for (const u of s)
      if (u.type === "childList")
        for (const f of u.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && l(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(s) {
    const u = {};
    return (
      s.integrity && (u.integrity = s.integrity),
      s.referrerPolicy && (u.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function l(s) {
    if (s.ep) return;
    s.ep = !0;
    const u = i(s);
    fetch(s.href, u);
  }
})();
function Oy(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var nf = { exports: {} },
  el = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r0;
function l2() {
  if (r0) return el;
  r0 = 1;
  var a = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.fragment");
  function i(l, s, u) {
    var f = null;
    if (
      (u !== void 0 && (f = "" + u),
      s.key !== void 0 && (f = "" + s.key),
      "key" in s)
    ) {
      u = {};
      for (var m in s) m !== "key" && (u[m] = s[m]);
    } else u = s;
    return (
      (s = u.ref),
      { $$typeof: a, type: l, key: f, ref: s !== void 0 ? s : null, props: u }
    );
  }
  return (el.Fragment = t), (el.jsx = i), (el.jsxs = i), el;
}
var i0;
function s2() {
  return i0 || ((i0 = 1), (nf.exports = l2())), nf.exports;
}
var y = s2(),
  af = { exports: {} },
  Ne = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var o0;
function c2() {
  if (o0) return Ne;
  o0 = 1;
  var a = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    x = Symbol.iterator;
  function w(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (x && E[x]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var T = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    A = Object.assign,
    P = {};
  function H(E, $, ie) {
    (this.props = E),
      (this.context = $),
      (this.refs = P),
      (this.updater = ie || T);
  }
  (H.prototype.isReactComponent = {}),
    (H.prototype.setState = function (E, $) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, E, $, "setState");
    }),
    (H.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    });
  function z() {}
  z.prototype = H.prototype;
  function I(E, $, ie) {
    (this.props = E),
      (this.context = $),
      (this.refs = P),
      (this.updater = ie || T);
  }
  var V = (I.prototype = new z());
  (V.constructor = I), A(V, H.prototype), (V.isPureReactComponent = !0);
  var Q = Array.isArray,
    F = { H: null, A: null, T: null, S: null, V: null },
    O = Object.prototype.hasOwnProperty;
  function ne(E, $, ie, ee, se, Ce) {
    return (
      (ie = Ce.ref),
      {
        $$typeof: a,
        type: E,
        key: $,
        ref: ie !== void 0 ? ie : null,
        props: Ce,
      }
    );
  }
  function Z(E, $) {
    return ne(E.type, $, void 0, void 0, void 0, E.props);
  }
  function re(E) {
    return typeof E == "object" && E !== null && E.$$typeof === a;
  }
  function Oe(E) {
    var $ = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (ie) {
        return $[ie];
      })
    );
  }
  var ae = /\/+/g;
  function W(E, $) {
    return typeof E == "object" && E !== null && E.key != null
      ? Oe("" + E.key)
      : $.toString(36);
  }
  function ce() {}
  function oe(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (
          (typeof E.status == "string"
            ? E.then(ce, ce)
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
  function be(E, $, ie, ee, se) {
    var Ce = typeof E;
    (Ce === "undefined" || Ce === "boolean") && (E = null);
    var fe = !1;
    if (E === null) fe = !0;
    else
      switch (Ce) {
        case "bigint":
        case "string":
        case "number":
          fe = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case a:
            case t:
              fe = !0;
              break;
            case b:
              return (fe = E._init), be(fe(E._payload), $, ie, ee, se);
          }
      }
    if (fe)
      return (
        (se = se(E)),
        (fe = ee === "" ? "." + W(E, 0) : ee),
        Q(se)
          ? ((ie = ""),
            fe != null && (ie = fe.replace(ae, "$&/") + "/"),
            be(se, $, ie, "", function (st) {
              return st;
            }))
          : se != null &&
            (re(se) &&
              (se = Z(
                se,
                ie +
                  (se.key == null || (E && E.key === se.key)
                    ? ""
                    : ("" + se.key).replace(ae, "$&/") + "/") +
                  fe
              )),
            $.push(se)),
        1
      );
    fe = 0;
    var Ve = ee === "" ? "." : ee + ":";
    if (Q(E))
      for (var ke = 0; ke < E.length; ke++)
        (ee = E[ke]), (Ce = Ve + W(ee, ke)), (fe += be(ee, $, ie, Ce, se));
    else if (((ke = w(E)), typeof ke == "function"))
      for (E = ke.call(E), ke = 0; !(ee = E.next()).done; )
        (ee = ee.value), (Ce = Ve + W(ee, ke++)), (fe += be(ee, $, ie, Ce, se));
    else if (Ce === "object") {
      if (typeof E.then == "function") return be(oe(E), $, ie, ee, se);
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
    return fe;
  }
  function D(E, $, ie) {
    if (E == null) return E;
    var ee = [],
      se = 0;
    return (
      be(E, ee, "", "", function (Ce) {
        return $.call(ie, Ce, se++);
      }),
      ee
    );
  }
  function J(E) {
    if (E._status === -1) {
      var $ = E._result;
      ($ = $()),
        $.then(
          function (ie) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = ie));
          },
          function (ie) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = ie));
          }
        ),
        E._status === -1 && ((E._status = 0), (E._result = $));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var le =
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
    (Ne.Children = {
      map: D,
      forEach: function (E, $, ie) {
        D(
          E,
          function () {
            $.apply(this, arguments);
          },
          ie
        );
      },
      count: function (E) {
        var $ = 0;
        return (
          D(E, function () {
            $++;
          }),
          $
        );
      },
      toArray: function (E) {
        return (
          D(E, function ($) {
            return $;
          }) || []
        );
      },
      only: function (E) {
        if (!re(E))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return E;
      },
    }),
    (Ne.Component = H),
    (Ne.Fragment = i),
    (Ne.Profiler = s),
    (Ne.PureComponent = I),
    (Ne.StrictMode = l),
    (Ne.Suspense = h),
    (Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F),
    (Ne.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return F.H.useMemoCache(E);
      },
    }),
    (Ne.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (Ne.cloneElement = function (E, $, ie) {
      if (E == null)
        throw Error(
          "The argument must be a React element, but you passed " + E + "."
        );
      var ee = A({}, E.props),
        se = E.key,
        Ce = void 0;
      if ($ != null)
        for (fe in ($.ref !== void 0 && (Ce = void 0),
        $.key !== void 0 && (se = "" + $.key),
        $))
          !O.call($, fe) ||
            fe === "key" ||
            fe === "__self" ||
            fe === "__source" ||
            (fe === "ref" && $.ref === void 0) ||
            (ee[fe] = $[fe]);
      var fe = arguments.length - 2;
      if (fe === 1) ee.children = ie;
      else if (1 < fe) {
        for (var Ve = Array(fe), ke = 0; ke < fe; ke++)
          Ve[ke] = arguments[ke + 2];
        ee.children = Ve;
      }
      return ne(E.type, se, void 0, void 0, Ce, ee);
    }),
    (Ne.createContext = function (E) {
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
        (E.Consumer = { $$typeof: u, _context: E }),
        E
      );
    }),
    (Ne.createElement = function (E, $, ie) {
      var ee,
        se = {},
        Ce = null;
      if ($ != null)
        for (ee in ($.key !== void 0 && (Ce = "" + $.key), $))
          O.call($, ee) &&
            ee !== "key" &&
            ee !== "__self" &&
            ee !== "__source" &&
            (se[ee] = $[ee]);
      var fe = arguments.length - 2;
      if (fe === 1) se.children = ie;
      else if (1 < fe) {
        for (var Ve = Array(fe), ke = 0; ke < fe; ke++)
          Ve[ke] = arguments[ke + 2];
        se.children = Ve;
      }
      if (E && E.defaultProps)
        for (ee in ((fe = E.defaultProps), fe))
          se[ee] === void 0 && (se[ee] = fe[ee]);
      return ne(E, Ce, void 0, void 0, null, se);
    }),
    (Ne.createRef = function () {
      return { current: null };
    }),
    (Ne.forwardRef = function (E) {
      return { $$typeof: m, render: E };
    }),
    (Ne.isValidElement = re),
    (Ne.lazy = function (E) {
      return { $$typeof: b, _payload: { _status: -1, _result: E }, _init: J };
    }),
    (Ne.memo = function (E, $) {
      return { $$typeof: p, type: E, compare: $ === void 0 ? null : $ };
    }),
    (Ne.startTransition = function (E) {
      var $ = F.T,
        ie = {};
      F.T = ie;
      try {
        var ee = E(),
          se = F.S;
        se !== null && se(ie, ee),
          typeof ee == "object" &&
            ee !== null &&
            typeof ee.then == "function" &&
            ee.then(Ee, le);
      } catch (Ce) {
        le(Ce);
      } finally {
        F.T = $;
      }
    }),
    (Ne.unstable_useCacheRefresh = function () {
      return F.H.useCacheRefresh();
    }),
    (Ne.use = function (E) {
      return F.H.use(E);
    }),
    (Ne.useActionState = function (E, $, ie) {
      return F.H.useActionState(E, $, ie);
    }),
    (Ne.useCallback = function (E, $) {
      return F.H.useCallback(E, $);
    }),
    (Ne.useContext = function (E) {
      return F.H.useContext(E);
    }),
    (Ne.useDebugValue = function () {}),
    (Ne.useDeferredValue = function (E, $) {
      return F.H.useDeferredValue(E, $);
    }),
    (Ne.useEffect = function (E, $, ie) {
      var ee = F.H;
      if (typeof ie == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return ee.useEffect(E, $);
    }),
    (Ne.useId = function () {
      return F.H.useId();
    }),
    (Ne.useImperativeHandle = function (E, $, ie) {
      return F.H.useImperativeHandle(E, $, ie);
    }),
    (Ne.useInsertionEffect = function (E, $) {
      return F.H.useInsertionEffect(E, $);
    }),
    (Ne.useLayoutEffect = function (E, $) {
      return F.H.useLayoutEffect(E, $);
    }),
    (Ne.useMemo = function (E, $) {
      return F.H.useMemo(E, $);
    }),
    (Ne.useOptimistic = function (E, $) {
      return F.H.useOptimistic(E, $);
    }),
    (Ne.useReducer = function (E, $, ie) {
      return F.H.useReducer(E, $, ie);
    }),
    (Ne.useRef = function (E) {
      return F.H.useRef(E);
    }),
    (Ne.useState = function (E) {
      return F.H.useState(E);
    }),
    (Ne.useSyncExternalStore = function (E, $, ie) {
      return F.H.useSyncExternalStore(E, $, ie);
    }),
    (Ne.useTransition = function () {
      return F.H.useTransition();
    }),
    (Ne.version = "19.1.0"),
    Ne
  );
}
var l0;
function Gf() {
  return l0 || ((l0 = 1), (af.exports = c2())), af.exports;
}
var R = Gf();
const Ye = Oy(R);
var rf = { exports: {} },
  tl = {},
  of = { exports: {} },
  lf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var s0;
function u2() {
  return (
    s0 ||
      ((s0 = 1),
      (function (a) {
        function t(D, J) {
          var le = D.length;
          D.push(J);
          e: for (; 0 < le; ) {
            var Ee = (le - 1) >>> 1,
              E = D[Ee];
            if (0 < s(E, J)) (D[Ee] = J), (D[le] = E), (le = Ee);
            else break e;
          }
        }
        function i(D) {
          return D.length === 0 ? null : D[0];
        }
        function l(D) {
          if (D.length === 0) return null;
          var J = D[0],
            le = D.pop();
          if (le !== J) {
            D[0] = le;
            e: for (var Ee = 0, E = D.length, $ = E >>> 1; Ee < $; ) {
              var ie = 2 * (Ee + 1) - 1,
                ee = D[ie],
                se = ie + 1,
                Ce = D[se];
              if (0 > s(ee, le))
                se < E && 0 > s(Ce, ee)
                  ? ((D[Ee] = Ce), (D[se] = le), (Ee = se))
                  : ((D[Ee] = ee), (D[ie] = le), (Ee = ie));
              else if (se < E && 0 > s(Ce, le))
                (D[Ee] = Ce), (D[se] = le), (Ee = se);
              else break e;
            }
          }
          return J;
        }
        function s(D, J) {
          var le = D.sortIndex - J.sortIndex;
          return le !== 0 ? le : D.id - J.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var u = performance;
          a.unstable_now = function () {
            return u.now();
          };
        } else {
          var f = Date,
            m = f.now();
          a.unstable_now = function () {
            return f.now() - m;
          };
        }
        var h = [],
          p = [],
          b = 1,
          x = null,
          w = 3,
          T = !1,
          A = !1,
          P = !1,
          H = !1,
          z = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          V = typeof setImmediate < "u" ? setImmediate : null;
        function Q(D) {
          for (var J = i(p); J !== null; ) {
            if (J.callback === null) l(p);
            else if (J.startTime <= D)
              l(p), (J.sortIndex = J.expirationTime), t(h, J);
            else break;
            J = i(p);
          }
        }
        function F(D) {
          if (((P = !1), Q(D), !A))
            if (i(h) !== null) (A = !0), O || ((O = !0), W());
            else {
              var J = i(p);
              J !== null && be(F, J.startTime - D);
            }
        }
        var O = !1,
          ne = -1,
          Z = 5,
          re = -1;
        function Oe() {
          return H ? !0 : !(a.unstable_now() - re < Z);
        }
        function ae() {
          if (((H = !1), O)) {
            var D = a.unstable_now();
            re = D;
            var J = !0;
            try {
              e: {
                (A = !1), P && ((P = !1), I(ne), (ne = -1)), (T = !0);
                var le = w;
                try {
                  t: {
                    for (
                      Q(D), x = i(h);
                      x !== null && !(x.expirationTime > D && Oe());

                    ) {
                      var Ee = x.callback;
                      if (typeof Ee == "function") {
                        (x.callback = null), (w = x.priorityLevel);
                        var E = Ee(x.expirationTime <= D);
                        if (((D = a.unstable_now()), typeof E == "function")) {
                          (x.callback = E), Q(D), (J = !0);
                          break t;
                        }
                        x === i(h) && l(h), Q(D);
                      } else l(h);
                      x = i(h);
                    }
                    if (x !== null) J = !0;
                    else {
                      var $ = i(p);
                      $ !== null && be(F, $.startTime - D), (J = !1);
                    }
                  }
                  break e;
                } finally {
                  (x = null), (w = le), (T = !1);
                }
                J = void 0;
              }
            } finally {
              J ? W() : (O = !1);
            }
          }
        }
        var W;
        if (typeof V == "function")
          W = function () {
            V(ae);
          };
        else if (typeof MessageChannel < "u") {
          var ce = new MessageChannel(),
            oe = ce.port2;
          (ce.port1.onmessage = ae),
            (W = function () {
              oe.postMessage(null);
            });
        } else
          W = function () {
            z(ae, 0);
          };
        function be(D, J) {
          ne = z(function () {
            D(a.unstable_now());
          }, J);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (D) {
            D.callback = null;
          }),
          (a.unstable_forceFrameRate = function (D) {
            0 > D || 125 < D
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Z = 0 < D ? Math.floor(1e3 / D) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (a.unstable_next = function (D) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = w;
            }
            var le = w;
            w = J;
            try {
              return D();
            } finally {
              w = le;
            }
          }),
          (a.unstable_requestPaint = function () {
            H = !0;
          }),
          (a.unstable_runWithPriority = function (D, J) {
            switch (D) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                D = 3;
            }
            var le = w;
            w = D;
            try {
              return J();
            } finally {
              w = le;
            }
          }),
          (a.unstable_scheduleCallback = function (D, J, le) {
            var Ee = a.unstable_now();
            switch (
              (typeof le == "object" && le !== null
                ? ((le = le.delay),
                  (le = typeof le == "number" && 0 < le ? Ee + le : Ee))
                : (le = Ee),
              D)
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
              (E = le + E),
              (D = {
                id: b++,
                callback: J,
                priorityLevel: D,
                startTime: le,
                expirationTime: E,
                sortIndex: -1,
              }),
              le > Ee
                ? ((D.sortIndex = le),
                  t(p, D),
                  i(h) === null &&
                    D === i(p) &&
                    (P ? (I(ne), (ne = -1)) : (P = !0), be(F, le - Ee)))
                : ((D.sortIndex = E),
                  t(h, D),
                  A || T || ((A = !0), O || ((O = !0), W()))),
              D
            );
          }),
          (a.unstable_shouldYield = Oe),
          (a.unstable_wrapCallback = function (D) {
            var J = w;
            return function () {
              var le = w;
              w = J;
              try {
                return D.apply(this, arguments);
              } finally {
                w = le;
              }
            };
          });
      })(lf)),
    lf
  );
}
var c0;
function d2() {
  return c0 || ((c0 = 1), (of.exports = u2())), of.exports;
}
var sf = { exports: {} },
  Pt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var u0;
function f2() {
  if (u0) return Pt;
  u0 = 1;
  var a = Gf();
  function t(h) {
    var p = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        p += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return (
      "Minified React error #" +
      h +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function i() {}
  var l = {
      d: {
        f: i,
        r: function () {
          throw Error(t(522));
        },
        D: i,
        C: i,
        L: i,
        m: i,
        X: i,
        S: i,
        M: i,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function u(h, p, b) {
    var x =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: x == null ? null : "" + x,
      children: h,
      containerInfo: p,
      implementation: b,
    };
  }
  var f = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(h, p) {
    if (h === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l),
    (Pt.createPortal = function (h, p) {
      var b =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(t(299));
      return u(h, p, null, b);
    }),
    (Pt.flushSync = function (h) {
      var p = f.T,
        b = l.p;
      try {
        if (((f.T = null), (l.p = 2), h)) return h();
      } finally {
        (f.T = p), (l.p = b), l.d.f();
      }
    }),
    (Pt.preconnect = function (h, p) {
      typeof h == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        l.d.C(h, p));
    }),
    (Pt.prefetchDNS = function (h) {
      typeof h == "string" && l.d.D(h);
    }),
    (Pt.preinit = function (h, p) {
      if (typeof h == "string" && p && typeof p.as == "string") {
        var b = p.as,
          x = m(b, p.crossOrigin),
          w = typeof p.integrity == "string" ? p.integrity : void 0,
          T = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        b === "style"
          ? l.d.S(h, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: x,
              integrity: w,
              fetchPriority: T,
            })
          : b === "script" &&
            l.d.X(h, {
              crossOrigin: x,
              integrity: w,
              fetchPriority: T,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (Pt.preinitModule = function (h, p) {
      if (typeof h == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var b = m(p.as, p.crossOrigin);
            l.d.M(h, {
              crossOrigin: b,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && l.d.M(h);
    }),
    (Pt.preload = function (h, p) {
      if (
        typeof h == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var b = p.as,
          x = m(b, p.crossOrigin);
        l.d.L(h, b, {
          crossOrigin: x,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (Pt.preloadModule = function (h, p) {
      if (typeof h == "string")
        if (p) {
          var b = m(p.as, p.crossOrigin);
          l.d.m(h, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: b,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else l.d.m(h);
    }),
    (Pt.requestFormReset = function (h) {
      l.d.r(h);
    }),
    (Pt.unstable_batchedUpdates = function (h, p) {
      return h(p);
    }),
    (Pt.useFormState = function (h, p, b) {
      return f.H.useFormState(h, p, b);
    }),
    (Pt.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (Pt.version = "19.1.0"),
    Pt
  );
}
var d0;
function h2() {
  if (d0) return sf.exports;
  d0 = 1;
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
  return a(), (sf.exports = f2()), sf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var f0;
function m2() {
  if (f0) return tl;
  f0 = 1;
  var a = d2(),
    t = Gf(),
    i = h2();
  function l(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++)
        n += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function u(e) {
    var n = e,
      r = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), (n.flags & 4098) !== 0 && (r = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? r : null;
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
  function m(e) {
    if (u(e) !== e) throw Error(l(188));
  }
  function h(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = u(e)), n === null)) throw Error(l(188));
      return n !== e ? null : e;
    }
    for (var r = e, o = n; ; ) {
      var c = r.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (((o = c.return), o !== null)) {
          r = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === r) return m(c), e;
          if (d === o) return m(c), n;
          d = d.sibling;
        }
        throw Error(l(188));
      }
      if (r.return !== o.return) (r = c), (o = d);
      else {
        for (var g = !1, v = c.child; v; ) {
          if (v === r) {
            (g = !0), (r = c), (o = d);
            break;
          }
          if (v === o) {
            (g = !0), (o = c), (r = d);
            break;
          }
          v = v.sibling;
        }
        if (!g) {
          for (v = d.child; v; ) {
            if (v === r) {
              (g = !0), (r = d), (o = c);
              break;
            }
            if (v === o) {
              (g = !0), (o = d), (r = c);
              break;
            }
            v = v.sibling;
          }
          if (!g) throw Error(l(189));
        }
      }
      if (r.alternate !== o) throw Error(l(190));
    }
    if (r.tag !== 3) throw Error(l(188));
    return r.stateNode.current === r ? e : n;
  }
  function p(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((n = p(e)), n !== null)) return n;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign,
    x = Symbol.for("react.element"),
    w = Symbol.for("react.transitional.element"),
    T = Symbol.for("react.portal"),
    A = Symbol.for("react.fragment"),
    P = Symbol.for("react.strict_mode"),
    H = Symbol.for("react.profiler"),
    z = Symbol.for("react.provider"),
    I = Symbol.for("react.consumer"),
    V = Symbol.for("react.context"),
    Q = Symbol.for("react.forward_ref"),
    F = Symbol.for("react.suspense"),
    O = Symbol.for("react.suspense_list"),
    ne = Symbol.for("react.memo"),
    Z = Symbol.for("react.lazy"),
    re = Symbol.for("react.activity"),
    Oe = Symbol.for("react.memo_cache_sentinel"),
    ae = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (ae && e[ae]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ce = Symbol.for("react.client.reference");
  function oe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ce ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case A:
        return "Fragment";
      case H:
        return "Profiler";
      case P:
        return "StrictMode";
      case F:
        return "Suspense";
      case O:
        return "SuspenseList";
      case re:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case T:
          return "Portal";
        case V:
          return (e.displayName || "Context") + ".Provider";
        case I:
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
        case ne:
          return (
            (n = e.displayName || null), n !== null ? n : oe(e.type) || "Memo"
          );
        case Z:
          (n = e._payload), (e = e._init);
          try {
            return oe(e(n));
          } catch {}
      }
    return null;
  }
  var be = Array.isArray,
    D = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    J = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    le = { pending: !1, data: null, method: null, action: null },
    Ee = [],
    E = -1;
  function $(e) {
    return { current: e };
  }
  function ie(e) {
    0 > E || ((e.current = Ee[E]), (Ee[E] = null), E--);
  }
  function ee(e, n) {
    E++, (Ee[E] = e.current), (e.current = n);
  }
  var se = $(null),
    Ce = $(null),
    fe = $(null),
    Ve = $(null);
  function ke(e, n) {
    switch ((ee(fe, n), ee(Ce, e), ee(se, null), n.nodeType)) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Dg(e) : 0;
        break;
      default:
        if (((e = n.tagName), (n = n.namespaceURI)))
          (n = Dg(n)), (e = Mg(n, e));
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
    ie(se), ee(se, e);
  }
  function st() {
    ie(se), ie(Ce), ie(fe);
  }
  function We(e) {
    e.memoizedState !== null && ee(Ve, e);
    var n = se.current,
      r = Mg(n, e.type);
    n !== r && (ee(Ce, e), ee(se, r));
  }
  function xt(e) {
    Ce.current === e && (ie(se), ie(Ce)),
      Ve.current === e && (ie(Ve), (Fo._currentValue = le));
  }
  var Ut = Object.prototype.hasOwnProperty,
    Qe = a.unstable_scheduleCallback,
    De = a.unstable_cancelCallback,
    At = a.unstable_shouldYield,
    yn = a.unstable_requestPaint,
    It = a.unstable_now,
    Zc = a.unstable_getCurrentPriorityLevel,
    Il = a.unstable_ImmediatePriority,
    Bl = a.unstable_UserBlockingPriority,
    ei = a.unstable_NormalPriority,
    na = a.unstable_LowPriority,
    Ra = a.unstable_IdlePriority,
    Hl = a.log,
    no = a.unstable_setDisableYieldValue,
    Ft = null,
    dt = null;
  function Mn(e) {
    if (
      (typeof Hl == "function" && no(e),
      dt && typeof dt.setStrictMode == "function")
    )
      try {
        dt.setStrictMode(Ft, e);
      } catch {}
  }
  var Dt = Math.clz32 ? Math.clz32 : Pl,
    Jc = Math.log,
    qn = Math.LN2;
  function Pl(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Jc(e) / qn) | 0)) | 0;
  }
  var yr = 256,
    vr = 4194304;
  function aa(e) {
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
  function br(e, n, r) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var c = 0,
      d = e.suspendedLanes,
      g = e.pingedLanes;
    e = e.warmLanes;
    var v = o & 134217727;
    return (
      v !== 0
        ? ((o = v & ~d),
          o !== 0
            ? (c = aa(o))
            : ((g &= v),
              g !== 0
                ? (c = aa(g))
                : r || ((r = v & ~e), r !== 0 && (c = aa(r)))))
        : ((v = o & ~d),
          v !== 0
            ? (c = aa(v))
            : g !== 0
            ? (c = aa(g))
            : r || ((r = o & ~e), r !== 0 && (c = aa(r)))),
      c === 0
        ? 0
        : n !== 0 &&
          n !== c &&
          (n & d) === 0 &&
          ((d = c & -c),
          (r = n & -n),
          d >= r || (d === 32 && (r & 4194048) !== 0))
        ? n
        : c
    );
  }
  function Gn(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function Vl(e, n) {
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
  function ti() {
    var e = yr;
    return (yr <<= 1), (yr & 4194048) === 0 && (yr = 256), e;
  }
  function ql() {
    var e = vr;
    return (vr <<= 1), (vr & 62914560) === 0 && (vr = 4194304), e;
  }
  function ni(e) {
    for (var n = [], r = 0; 31 > r; r++) n.push(e);
    return n;
  }
  function wr(e, n) {
    (e.pendingLanes |= n),
      n !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Gl(e, n, r, o, c, d) {
    var g = e.pendingLanes;
    (e.pendingLanes = r),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= r),
      (e.entangledLanes &= r),
      (e.errorRecoveryDisabledLanes &= r),
      (e.shellSuspendCounter = 0);
    var v = e.entanglements,
      _ = e.expirationTimes,
      j = e.hiddenUpdates;
    for (r = g & ~r; 0 < r; ) {
      var G = 31 - Dt(r),
        X = 1 << G;
      (v[G] = 0), (_[G] = -1);
      var L = j[G];
      if (L !== null)
        for (j[G] = null, G = 0; G < L.length; G++) {
          var U = L[G];
          U !== null && (U.lane &= -536870913);
        }
      r &= ~X;
    }
    o !== 0 && xr(e, o, 0),
      d !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(g & ~n));
  }
  function xr(e, n, r) {
    (e.pendingLanes |= n), (e.suspendedLanes &= ~n);
    var o = 31 - Dt(n);
    (e.entangledLanes |= n),
      (e.entanglements[o] = e.entanglements[o] | 1073741824 | (r & 4194090));
  }
  function _r(e, n) {
    var r = (e.entangledLanes |= n);
    for (e = e.entanglements; r; ) {
      var o = 31 - Dt(r),
        c = 1 << o;
      (c & n) | (e[o] & n) && (e[o] |= n), (r &= ~c);
    }
  }
  function ao(e) {
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
  function ro(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function S() {
    var e = J.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Jg(e.type));
  }
  function N(e, n) {
    var r = J.p;
    try {
      return (J.p = e), n();
    } finally {
      J.p = r;
    }
  }
  var B = Math.random().toString(36).slice(2),
    K = "__reactFiber$" + B,
    te = "__reactProps$" + B,
    he = "__reactContainer$" + B,
    we = "__reactEvents$" + B,
    ue = "__reactListeners$" + B,
    ge = "__reactHandles$" + B,
    ye = "__reactResources$" + B,
    Se = "__reactMarker$" + B;
  function me(e) {
    delete e[K], delete e[te], delete e[we], delete e[ue], delete e[ge];
  }
  function Re(e) {
    var n = e[K];
    if (n) return n;
    for (var r = e.parentNode; r; ) {
      if ((n = r[he] || r[K])) {
        if (
          ((r = n.alternate),
          n.child !== null || (r !== null && r.child !== null))
        )
          for (e = Ug(e); e !== null; ) {
            if ((r = e[K])) return r;
            e = Ug(e);
          }
        return n;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function qe(e) {
    if ((e = e[K] || e[he])) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function lt(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(l(33));
  }
  function ft(e) {
    var n = e[ye];
    return (
      n ||
        (n = e[ye] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function Ge(e) {
    e[Se] = !0;
  }
  var Be = new Set(),
    Oa = {};
  function qt(e, n) {
    vn(e, n), vn(e + "Capture", n);
  }
  function vn(e, n) {
    for (Oa[e] = n, e = 0; e < n.length; e++) Be.add(n[e]);
  }
  var Qt = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    ka = {},
    Na = {};
  function io(e) {
    return Ut.call(Na, e)
      ? !0
      : Ut.call(ka, e)
      ? !1
      : Qt.test(e)
      ? (Na[e] = !0)
      : ((ka[e] = !0), !1);
  }
  function bn(e, n, r) {
    if (io(n))
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var o = n.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + r);
      }
  }
  function ra(e, n, r) {
    if (r === null) e.removeAttribute(n);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + r);
    }
  }
  function je(e, n, r, o) {
    if (o === null) e.removeAttribute(r);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(r);
          return;
      }
      e.setAttributeNS(n, r, "" + o);
    }
  }
  var Bt, jn;
  function Ln(e) {
    if (Bt === void 0)
      try {
        throw Error();
      } catch (r) {
        var n = r.stack.trim().match(/\n( *(at )?)/);
        (Bt = (n && n[1]) || ""),
          (jn =
            -1 <
            r.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < r.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Bt +
      e +
      jn
    );
  }
  var Er = !1;
  function ct(e, n) {
    if (!e || Er) return "";
    Er = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
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
                  var L = U;
                }
                Reflect.construct(e, [], X);
              } else {
                try {
                  X.call();
                } catch (U) {
                  L = U;
                }
                e.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                L = U;
              }
              (X = e()) &&
                typeof X.catch == "function" &&
                X.catch(function () {});
            }
          } catch (U) {
            if (U && L && typeof U.stack == "string") return [U.stack, L.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      c &&
        c.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var d = o.DetermineComponentFrameRoot(),
        g = d[0],
        v = d[1];
      if (g && v) {
        var _ = g.split(`
`),
          j = v.split(`
`);
        for (
          c = o = 0;
          o < _.length && !_[o].includes("DetermineComponentFrameRoot");

        )
          o++;
        for (; c < j.length && !j[c].includes("DetermineComponentFrameRoot"); )
          c++;
        if (o === _.length || c === j.length)
          for (
            o = _.length - 1, c = j.length - 1;
            1 <= o && 0 <= c && _[o] !== j[c];

          )
            c--;
        for (; 1 <= o && 0 <= c; o--, c--)
          if (_[o] !== j[c]) {
            if (o !== 1 || c !== 1)
              do
                if ((o--, c--, 0 > c || _[o] !== j[c])) {
                  var G =
                    `
` + _[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      G.includes("<anonymous>") &&
                      (G = G.replace("<anonymous>", e.displayName)),
                    G
                  );
                }
              while (1 <= o && 0 <= c);
            break;
          }
      }
    } finally {
      (Er = !1), (Error.prepareStackTrace = r);
    }
    return (r = e ? e.displayName || e.name : "") ? Ln(r) : "";
  }
  function Da(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ln(e.type);
      case 16:
        return Ln("Lazy");
      case 13:
        return Ln("Suspense");
      case 19:
        return Ln("SuspenseList");
      case 0:
      case 15:
        return ct(e.type, !1);
      case 11:
        return ct(e.type.render, !1);
      case 1:
        return ct(e.type, !0);
      case 31:
        return Ln("Activity");
      default:
        return "";
    }
  }
  function oo(e) {
    try {
      var n = "";
      do (n += Da(e)), (e = e.return);
      while (e);
      return n;
    } catch (r) {
      return (
        `
Error generating stack: ` +
        r.message +
        `
` +
        r.stack
      );
    }
  }
  function Zt(e) {
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
  function Ah(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function nw(e) {
    var n = Ah(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      o = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var c = r.get,
        d = r.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (g) {
            (o = "" + g), d.call(this, g);
          },
        }),
        Object.defineProperty(e, n, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (g) {
            o = "" + g;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function $l(e) {
    e._valueTracker || (e._valueTracker = nw(e));
  }
  function Rh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var r = n.getValue(),
      o = "";
    return (
      e && (o = Ah(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== r ? (n.setValue(e), !0) : !1
    );
  }
  function Yl(e) {
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
  var aw = /[\n"\\]/g;
  function wn(e) {
    return e.replace(aw, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function Wc(e, n, r, o, c, d, g, v) {
    (e.name = ""),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.type = g)
        : e.removeAttribute("type"),
      n != null
        ? g === "number"
          ? ((n === 0 && e.value === "") || e.value != n) &&
            (e.value = "" + Zt(n))
          : e.value !== "" + Zt(n) && (e.value = "" + Zt(n))
        : (g !== "submit" && g !== "reset") || e.removeAttribute("value"),
      n != null
        ? eu(e, g, Zt(n))
        : r != null
        ? eu(e, g, Zt(r))
        : o != null && e.removeAttribute("value"),
      c == null && d != null && (e.defaultChecked = !!d),
      c != null &&
        (e.checked = c && typeof c != "function" && typeof c != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (e.name = "" + Zt(v))
        : e.removeAttribute("name");
  }
  function Oh(e, n, r, o, c, d, g, v) {
    if (
      (d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (e.type = d),
      n != null || r != null)
    ) {
      if (!((d !== "submit" && d !== "reset") || n != null)) return;
      (r = r != null ? "" + Zt(r) : ""),
        (n = n != null ? "" + Zt(n) : r),
        v || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (o = o ?? c),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (e.checked = v ? e.checked : !!o),
      (e.defaultChecked = !!o),
      g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (e.name = g);
  }
  function eu(e, n, r) {
    (n === "number" && Yl(e.ownerDocument) === e) ||
      e.defaultValue === "" + r ||
      (e.defaultValue = "" + r);
  }
  function ai(e, n, r, o) {
    if (((e = e.options), n)) {
      n = {};
      for (var c = 0; c < r.length; c++) n["$" + r[c]] = !0;
      for (r = 0; r < e.length; r++)
        (c = n.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== c && (e[r].selected = c),
          c && o && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + Zt(r), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === r) {
          (e[c].selected = !0), o && (e[c].defaultSelected = !0);
          return;
        }
        n !== null || e[c].disabled || (n = e[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function kh(e, n, r) {
    if (
      n != null &&
      ((n = "" + Zt(n)), n !== e.value && (e.value = n), r == null)
    ) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = r != null ? "" + Zt(r) : "";
  }
  function Nh(e, n, r, o) {
    if (n == null) {
      if (o != null) {
        if (r != null) throw Error(l(92));
        if (be(o)) {
          if (1 < o.length) throw Error(l(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), (n = r);
    }
    (r = Zt(n)),
      (e.defaultValue = r),
      (o = e.textContent),
      o === r && o !== "" && o !== null && (e.value = o);
  }
  function ri(e, n) {
    if (n) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var rw = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Dh(e, n, r) {
    var o = n.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === ""
      ? o
        ? e.setProperty(n, "")
        : n === "float"
        ? (e.cssFloat = "")
        : (e[n] = "")
      : o
      ? e.setProperty(n, r)
      : typeof r != "number" || r === 0 || rw.has(n)
      ? n === "float"
        ? (e.cssFloat = r)
        : (e[n] = ("" + r).trim())
      : (e[n] = r + "px");
  }
  function Mh(e, n, r) {
    if (n != null && typeof n != "object") throw Error(l(62));
    if (((e = e.style), r != null)) {
      for (var o in r)
        !r.hasOwnProperty(o) ||
          (n != null && n.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? e.setProperty(o, "")
            : o === "float"
            ? (e.cssFloat = "")
            : (e[o] = ""));
      for (var c in n)
        (o = n[c]), n.hasOwnProperty(c) && r[c] !== o && Dh(e, c, o);
    } else for (var d in n) n.hasOwnProperty(d) && Dh(e, d, n[d]);
  }
  function tu(e) {
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
  var iw = new Map([
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
    ow =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Xl(e) {
    return ow.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var nu = null;
  function au(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ii = null,
    oi = null;
  function jh(e) {
    var n = qe(e);
    if (n && (e = n.stateNode)) {
      var r = e[te] || null;
      e: switch (((e = n.stateNode), n.type)) {
        case "input":
          if (
            (Wc(
              e,
              r.value,
              r.defaultValue,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name
            ),
            (n = r.name),
            r.type === "radio" && n != null)
          ) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                'input[name="' + wn("" + n) + '"][type="radio"]'
              ),
                n = 0;
              n < r.length;
              n++
            ) {
              var o = r[n];
              if (o !== e && o.form === e.form) {
                var c = o[te] || null;
                if (!c) throw Error(l(90));
                Wc(
                  o,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (n = 0; n < r.length; n++)
              (o = r[n]), o.form === e.form && Rh(o);
          }
          break e;
        case "textarea":
          kh(e, r.value, r.defaultValue);
          break e;
        case "select":
          (n = r.value), n != null && ai(e, !!r.multiple, n, !1);
      }
    }
  }
  var ru = !1;
  function Lh(e, n, r) {
    if (ru) return e(n, r);
    ru = !0;
    try {
      var o = e(n);
      return o;
    } finally {
      if (
        ((ru = !1),
        (ii !== null || oi !== null) &&
          (Ds(), ii && ((n = ii), (e = oi), (oi = ii = null), jh(n), e)))
      )
        for (n = 0; n < e.length; n++) jh(e[n]);
    }
  }
  function lo(e, n) {
    var r = e.stateNode;
    if (r === null) return null;
    var o = r[te] || null;
    if (o === null) return null;
    r = o[n];
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
        (o = !o.disabled) ||
          ((e = e.type),
          (o = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !o);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(l(231, n, typeof r));
    return r;
  }
  var ia = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    iu = !1;
  if (ia)
    try {
      var so = {};
      Object.defineProperty(so, "passive", {
        get: function () {
          iu = !0;
        },
      }),
        window.addEventListener("test", so, so),
        window.removeEventListener("test", so, so);
    } catch {
      iu = !1;
    }
  var Ma = null,
    ou = null,
    Kl = null;
  function zh() {
    if (Kl) return Kl;
    var e,
      n = ou,
      r = n.length,
      o,
      c = "value" in Ma ? Ma.value : Ma.textContent,
      d = c.length;
    for (e = 0; e < r && n[e] === c[e]; e++);
    var g = r - e;
    for (o = 1; o <= g && n[r - o] === c[d - o]; o++);
    return (Kl = c.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Fl(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ql() {
    return !0;
  }
  function Uh() {
    return !1;
  }
  function Jt(e) {
    function n(r, o, c, d, g) {
      (this._reactName = r),
        (this._targetInst = c),
        (this.type = o),
        (this.nativeEvent = d),
        (this.target = g),
        (this.currentTarget = null);
      for (var v in e)
        e.hasOwnProperty(v) && ((r = e[v]), (this[v] = r ? r(d) : d[v]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? Ql
          : Uh),
        (this.isPropagationStopped = Uh),
        this
      );
    }
    return (
      b(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = Ql));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = Ql));
        },
        persist: function () {},
        isPersistent: Ql,
      }),
      n
    );
  }
  var Sr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Zl = Jt(Sr),
    co = b({}, Sr, { view: 0, detail: 0 }),
    lw = Jt(co),
    lu,
    su,
    uo,
    Jl = b({}, co, {
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
      getModifierState: uu,
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
          : (e !== uo &&
              (uo && e.type === "mousemove"
                ? ((lu = e.screenX - uo.screenX), (su = e.screenY - uo.screenY))
                : (su = lu = 0),
              (uo = e)),
            lu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : su;
      },
    }),
    Ih = Jt(Jl),
    sw = b({}, Jl, { dataTransfer: 0 }),
    cw = Jt(sw),
    uw = b({}, co, { relatedTarget: 0 }),
    cu = Jt(uw),
    dw = b({}, Sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    fw = Jt(dw),
    hw = b({}, Sr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    mw = Jt(hw),
    pw = b({}, Sr, { data: 0 }),
    Bh = Jt(pw),
    gw = {
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
    yw = {
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
    vw = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function bw(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = vw[e])
      ? !!n[e]
      : !1;
  }
  function uu() {
    return bw;
  }
  var ww = b({}, co, {
      key: function (e) {
        if (e.key) {
          var n = gw[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = Fl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? yw[e.keyCode] || "Unidentified"
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
      getModifierState: uu,
      charCode: function (e) {
        return e.type === "keypress" ? Fl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Fl(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    xw = Jt(ww),
    _w = b({}, Jl, {
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
    Hh = Jt(_w),
    Ew = b({}, co, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: uu,
    }),
    Sw = Jt(Ew),
    Tw = b({}, Sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Cw = Jt(Tw),
    Aw = b({}, Jl, {
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
    Rw = Jt(Aw),
    Ow = b({}, Sr, { newState: 0, oldState: 0 }),
    kw = Jt(Ow),
    Nw = [9, 13, 27, 32],
    du = ia && "CompositionEvent" in window,
    fo = null;
  ia && "documentMode" in document && (fo = document.documentMode);
  var Dw = ia && "TextEvent" in window && !fo,
    Ph = ia && (!du || (fo && 8 < fo && 11 >= fo)),
    Vh = " ",
    qh = !1;
  function Gh(e, n) {
    switch (e) {
      case "keyup":
        return Nw.indexOf(n.keyCode) !== -1;
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
  function $h(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var li = !1;
  function Mw(e, n) {
    switch (e) {
      case "compositionend":
        return $h(n);
      case "keypress":
        return n.which !== 32 ? null : ((qh = !0), Vh);
      case "textInput":
        return (e = n.data), e === Vh && qh ? null : e;
      default:
        return null;
    }
  }
  function jw(e, n) {
    if (li)
      return e === "compositionend" || (!du && Gh(e, n))
        ? ((e = zh()), (Kl = ou = Ma = null), (li = !1), e)
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
        return Ph && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Lw = {
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
  function Yh(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Lw[e.type] : n === "textarea";
  }
  function Xh(e, n, r, o) {
    ii ? (oi ? oi.push(o) : (oi = [o])) : (ii = o),
      (n = Is(n, "onChange")),
      0 < n.length &&
        ((r = new Zl("onChange", "change", null, r, o)),
        e.push({ event: r, listeners: n }));
  }
  var ho = null,
    mo = null;
  function zw(e) {
    Ag(e, 0);
  }
  function Wl(e) {
    var n = lt(e);
    if (Rh(n)) return e;
  }
  function Kh(e, n) {
    if (e === "change") return n;
  }
  var Fh = !1;
  if (ia) {
    var fu;
    if (ia) {
      var hu = "oninput" in document;
      if (!hu) {
        var Qh = document.createElement("div");
        Qh.setAttribute("oninput", "return;"),
          (hu = typeof Qh.oninput == "function");
      }
      fu = hu;
    } else fu = !1;
    Fh = fu && (!document.documentMode || 9 < document.documentMode);
  }
  function Zh() {
    ho && (ho.detachEvent("onpropertychange", Jh), (mo = ho = null));
  }
  function Jh(e) {
    if (e.propertyName === "value" && Wl(mo)) {
      var n = [];
      Xh(n, mo, e, au(e)), Lh(zw, n);
    }
  }
  function Uw(e, n, r) {
    e === "focusin"
      ? (Zh(), (ho = n), (mo = r), ho.attachEvent("onpropertychange", Jh))
      : e === "focusout" && Zh();
  }
  function Iw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Wl(mo);
  }
  function Bw(e, n) {
    if (e === "click") return Wl(n);
  }
  function Hw(e, n) {
    if (e === "input" || e === "change") return Wl(n);
  }
  function Pw(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var rn = typeof Object.is == "function" ? Object.is : Pw;
  function po(e, n) {
    if (rn(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var r = Object.keys(e),
      o = Object.keys(n);
    if (r.length !== o.length) return !1;
    for (o = 0; o < r.length; o++) {
      var c = r[o];
      if (!Ut.call(n, c) || !rn(e[c], n[c])) return !1;
    }
    return !0;
  }
  function Wh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function em(e, n) {
    var r = Wh(e);
    e = 0;
    for (var o; r; ) {
      if (r.nodeType === 3) {
        if (((o = e + r.textContent.length), e <= n && o >= n))
          return { node: r, offset: n - e };
        e = o;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Wh(r);
    }
  }
  function tm(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? tm(e, n.parentNode)
        : "contains" in e
        ? e.contains(n)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function nm(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var n = Yl(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof n.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = n.contentWindow;
      else break;
      n = Yl(e.document);
    }
    return n;
  }
  function mu(e) {
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
  var Vw = ia && "documentMode" in document && 11 >= document.documentMode,
    si = null,
    pu = null,
    go = null,
    gu = !1;
  function am(e, n, r) {
    var o =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    gu ||
      si == null ||
      si !== Yl(o) ||
      ((o = si),
      "selectionStart" in o && mu(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (go && po(go, o)) ||
        ((go = o),
        (o = Is(pu, "onSelect")),
        0 < o.length &&
          ((n = new Zl("onSelect", "select", null, n, r)),
          e.push({ event: n, listeners: o }),
          (n.target = si))));
  }
  function Tr(e, n) {
    var r = {};
    return (
      (r[e.toLowerCase()] = n.toLowerCase()),
      (r["Webkit" + e] = "webkit" + n),
      (r["Moz" + e] = "moz" + n),
      r
    );
  }
  var ci = {
      animationend: Tr("Animation", "AnimationEnd"),
      animationiteration: Tr("Animation", "AnimationIteration"),
      animationstart: Tr("Animation", "AnimationStart"),
      transitionrun: Tr("Transition", "TransitionRun"),
      transitionstart: Tr("Transition", "TransitionStart"),
      transitioncancel: Tr("Transition", "TransitionCancel"),
      transitionend: Tr("Transition", "TransitionEnd"),
    },
    yu = {},
    rm = {};
  ia &&
    ((rm = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ci.animationend.animation,
      delete ci.animationiteration.animation,
      delete ci.animationstart.animation),
    "TransitionEvent" in window || delete ci.transitionend.transition);
  function Cr(e) {
    if (yu[e]) return yu[e];
    if (!ci[e]) return e;
    var n = ci[e],
      r;
    for (r in n) if (n.hasOwnProperty(r) && r in rm) return (yu[e] = n[r]);
    return e;
  }
  var im = Cr("animationend"),
    om = Cr("animationiteration"),
    lm = Cr("animationstart"),
    qw = Cr("transitionrun"),
    Gw = Cr("transitionstart"),
    $w = Cr("transitioncancel"),
    sm = Cr("transitionend"),
    cm = new Map(),
    vu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  vu.push("scrollEnd");
  function zn(e, n) {
    cm.set(e, n), qt(n, [e]);
  }
  var um = new WeakMap();
  function xn(e, n) {
    if (typeof e == "object" && e !== null) {
      var r = um.get(e);
      return r !== void 0
        ? r
        : ((n = { value: e, source: n, stack: oo(n) }), um.set(e, n), n);
    }
    return { value: e, source: n, stack: oo(n) };
  }
  var _n = [],
    ui = 0,
    bu = 0;
  function es() {
    for (var e = ui, n = (bu = ui = 0); n < e; ) {
      var r = _n[n];
      _n[n++] = null;
      var o = _n[n];
      _n[n++] = null;
      var c = _n[n];
      _n[n++] = null;
      var d = _n[n];
      if (((_n[n++] = null), o !== null && c !== null)) {
        var g = o.pending;
        g === null ? (c.next = c) : ((c.next = g.next), (g.next = c)),
          (o.pending = c);
      }
      d !== 0 && dm(r, c, d);
    }
  }
  function ts(e, n, r, o) {
    (_n[ui++] = e),
      (_n[ui++] = n),
      (_n[ui++] = r),
      (_n[ui++] = o),
      (bu |= o),
      (e.lanes |= o),
      (e = e.alternate),
      e !== null && (e.lanes |= o);
  }
  function wu(e, n, r, o) {
    return ts(e, n, r, o), ns(e);
  }
  function di(e, n) {
    return ts(e, null, null, n), ns(e);
  }
  function dm(e, n, r) {
    e.lanes |= r;
    var o = e.alternate;
    o !== null && (o.lanes |= r);
    for (var c = !1, d = e.return; d !== null; )
      (d.childLanes |= r),
        (o = d.alternate),
        o !== null && (o.childLanes |= r),
        d.tag === 22 &&
          ((e = d.stateNode), e === null || e._visibility & 1 || (c = !0)),
        (e = d),
        (d = d.return);
    return e.tag === 3
      ? ((d = e.stateNode),
        c &&
          n !== null &&
          ((c = 31 - Dt(r)),
          (e = d.hiddenUpdates),
          (o = e[c]),
          o === null ? (e[c] = [n]) : o.push(n),
          (n.lane = r | 536870912)),
        d)
      : null;
  }
  function ns(e) {
    if (50 < Po) throw ((Po = 0), (Cd = null), Error(l(185)));
    for (var n = e.return; n !== null; ) (e = n), (n = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var fi = {};
  function Yw(e, n, r, o) {
    (this.tag = e),
      (this.key = r),
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
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function on(e, n, r, o) {
    return new Yw(e, n, r, o);
  }
  function xu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function oa(e, n) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = on(e.tag, n, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = n),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 65011712),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (r.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      (r.refCleanup = e.refCleanup),
      r
    );
  }
  function fm(e, n) {
    e.flags &= 65011714;
    var r = e.alternate;
    return (
      r === null
        ? ((e.childLanes = 0),
          (e.lanes = n),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = r.childLanes),
          (e.lanes = r.lanes),
          (e.child = r.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = r.memoizedProps),
          (e.memoizedState = r.memoizedState),
          (e.updateQueue = r.updateQueue),
          (e.type = r.type),
          (n = r.dependencies),
          (e.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      e
    );
  }
  function as(e, n, r, o, c, d) {
    var g = 0;
    if (((o = e), typeof e == "function")) xu(e) && (g = 1);
    else if (typeof e == "string")
      g = K1(e, r, se.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case re:
          return (e = on(31, r, n, c)), (e.elementType = re), (e.lanes = d), e;
        case A:
          return Ar(r.children, c, d, n);
        case P:
          (g = 8), (c |= 24);
          break;
        case H:
          return (
            (e = on(12, r, n, c | 2)), (e.elementType = H), (e.lanes = d), e
          );
        case F:
          return (e = on(13, r, n, c)), (e.elementType = F), (e.lanes = d), e;
        case O:
          return (e = on(19, r, n, c)), (e.elementType = O), (e.lanes = d), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case z:
              case V:
                g = 10;
                break e;
              case I:
                g = 9;
                break e;
              case Q:
                g = 11;
                break e;
              case ne:
                g = 14;
                break e;
              case Z:
                (g = 16), (o = null);
                break e;
            }
          (g = 29),
            (r = Error(l(130, e === null ? "null" : typeof e, ""))),
            (o = null);
      }
    return (
      (n = on(g, r, n, c)), (n.elementType = e), (n.type = o), (n.lanes = d), n
    );
  }
  function Ar(e, n, r, o) {
    return (e = on(7, e, o, n)), (e.lanes = r), e;
  }
  function _u(e, n, r) {
    return (e = on(6, e, null, n)), (e.lanes = r), e;
  }
  function Eu(e, n, r) {
    return (
      (n = on(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = r),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  var hi = [],
    mi = 0,
    rs = null,
    is = 0,
    En = [],
    Sn = 0,
    Rr = null,
    la = 1,
    sa = "";
  function Or(e, n) {
    (hi[mi++] = is), (hi[mi++] = rs), (rs = e), (is = n);
  }
  function hm(e, n, r) {
    (En[Sn++] = la), (En[Sn++] = sa), (En[Sn++] = Rr), (Rr = e);
    var o = la;
    e = sa;
    var c = 32 - Dt(o) - 1;
    (o &= ~(1 << c)), (r += 1);
    var d = 32 - Dt(n) + c;
    if (30 < d) {
      var g = c - (c % 5);
      (d = (o & ((1 << g) - 1)).toString(32)),
        (o >>= g),
        (c -= g),
        (la = (1 << (32 - Dt(n) + c)) | (r << c) | o),
        (sa = d + e);
    } else (la = (1 << d) | (r << c) | o), (sa = e);
  }
  function Su(e) {
    e.return !== null && (Or(e, 1), hm(e, 1, 0));
  }
  function Tu(e) {
    for (; e === rs; )
      (rs = hi[--mi]), (hi[mi] = null), (is = hi[--mi]), (hi[mi] = null);
    for (; e === Rr; )
      (Rr = En[--Sn]),
        (En[Sn] = null),
        (sa = En[--Sn]),
        (En[Sn] = null),
        (la = En[--Sn]),
        (En[Sn] = null);
  }
  var Gt = null,
    mt = null,
    Ke = !1,
    kr = null,
    $n = !1,
    Cu = Error(l(519));
  function Nr(e) {
    var n = Error(l(418, ""));
    throw (bo(xn(n, e)), Cu);
  }
  function mm(e) {
    var n = e.stateNode,
      r = e.type,
      o = e.memoizedProps;
    switch (((n[K] = e), (n[te] = o), r)) {
      case "dialog":
        Ie("cancel", n), Ie("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ie("load", n);
        break;
      case "video":
      case "audio":
        for (r = 0; r < qo.length; r++) Ie(qo[r], n);
        break;
      case "source":
        Ie("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ie("error", n), Ie("load", n);
        break;
      case "details":
        Ie("toggle", n);
        break;
      case "input":
        Ie("invalid", n),
          Oh(
            n,
            o.value,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name,
            !0
          ),
          $l(n);
        break;
      case "select":
        Ie("invalid", n);
        break;
      case "textarea":
        Ie("invalid", n), Nh(n, o.value, o.defaultValue, o.children), $l(n);
    }
    (r = o.children),
      (typeof r != "string" && typeof r != "number" && typeof r != "bigint") ||
      n.textContent === "" + r ||
      o.suppressHydrationWarning === !0 ||
      Ng(n.textContent, r)
        ? (o.popover != null && (Ie("beforetoggle", n), Ie("toggle", n)),
          o.onScroll != null && Ie("scroll", n),
          o.onScrollEnd != null && Ie("scrollend", n),
          o.onClick != null && (n.onclick = Bs),
          (n = !0))
        : (n = !1),
      n || Nr(e);
  }
  function pm(e) {
    for (Gt = e.return; Gt; )
      switch (Gt.tag) {
        case 5:
        case 13:
          $n = !1;
          return;
        case 27:
        case 3:
          $n = !0;
          return;
        default:
          Gt = Gt.return;
      }
  }
  function yo(e) {
    if (e !== Gt) return !1;
    if (!Ke) return pm(e), (Ke = !0), !1;
    var n = e.tag,
      r;
    if (
      ((r = n !== 3 && n !== 27) &&
        ((r = n === 5) &&
          ((r = e.type),
          (r =
            !(r !== "form" && r !== "button") || Vd(e.type, e.memoizedProps))),
        (r = !r)),
      r && mt && Nr(e),
      pm(e),
      n === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(l(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (((r = e.data), r === "/$")) {
              if (n === 0) {
                mt = In(e.nextSibling);
                break e;
              }
              n--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || n++;
          e = e.nextSibling;
        }
        mt = null;
      }
    } else
      n === 27
        ? ((n = mt), Fa(e.type) ? ((e = Yd), (Yd = null), (mt = e)) : (mt = n))
        : (mt = Gt ? In(e.stateNode.nextSibling) : null);
    return !0;
  }
  function vo() {
    (mt = Gt = null), (Ke = !1);
  }
  function gm() {
    var e = kr;
    return (
      e !== null &&
        (tn === null ? (tn = e) : tn.push.apply(tn, e), (kr = null)),
      e
    );
  }
  function bo(e) {
    kr === null ? (kr = [e]) : kr.push(e);
  }
  var Au = $(null),
    Dr = null,
    ca = null;
  function ja(e, n, r) {
    ee(Au, n._currentValue), (n._currentValue = r);
  }
  function ua(e) {
    (e._currentValue = Au.current), ie(Au);
  }
  function Ru(e, n, r) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), o !== null && (o.childLanes |= n))
          : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function Ou(e, n, r, o) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var d = c.dependencies;
      if (d !== null) {
        var g = c.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var v = d;
          d = c;
          for (var _ = 0; _ < n.length; _++)
            if (v.context === n[_]) {
              (d.lanes |= r),
                (v = d.alternate),
                v !== null && (v.lanes |= r),
                Ru(d.return, r, e),
                o || (g = null);
              break e;
            }
          d = v.next;
        }
      } else if (c.tag === 18) {
        if (((g = c.return), g === null)) throw Error(l(341));
        (g.lanes |= r),
          (d = g.alternate),
          d !== null && (d.lanes |= r),
          Ru(g, r, e),
          (g = null);
      } else g = c.child;
      if (g !== null) g.return = c;
      else
        for (g = c; g !== null; ) {
          if (g === e) {
            g = null;
            break;
          }
          if (((c = g.sibling), c !== null)) {
            (c.return = g.return), (g = c);
            break;
          }
          g = g.return;
        }
      c = g;
    }
  }
  function wo(e, n, r, o) {
    e = null;
    for (var c = n, d = !1; c !== null; ) {
      if (!d) {
        if ((c.flags & 524288) !== 0) d = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var g = c.alternate;
        if (g === null) throw Error(l(387));
        if (((g = g.memoizedProps), g !== null)) {
          var v = c.type;
          rn(c.pendingProps.value, g.value) ||
            (e !== null ? e.push(v) : (e = [v]));
        }
      } else if (c === Ve.current) {
        if (((g = c.alternate), g === null)) throw Error(l(387));
        g.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (e !== null ? e.push(Fo) : (e = [Fo]));
      }
      c = c.return;
    }
    e !== null && Ou(n, e, r, o), (n.flags |= 262144);
  }
  function os(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!rn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Mr(e) {
    (Dr = e),
      (ca = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Ht(e) {
    return ym(Dr, e);
  }
  function ls(e, n) {
    return Dr === null && Mr(e), ym(e, n);
  }
  function ym(e, n) {
    var r = n._currentValue;
    if (((n = { context: n, memoizedValue: r, next: null }), ca === null)) {
      if (e === null) throw Error(l(308));
      (ca = n),
        (e.dependencies = { lanes: 0, firstContext: n }),
        (e.flags |= 524288);
    } else ca = ca.next = n;
    return r;
  }
  var Xw =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (r, o) {
                  e.push(o);
                },
              });
            this.abort = function () {
              (n.aborted = !0),
                e.forEach(function (r) {
                  return r();
                });
            };
          },
    Kw = a.unstable_scheduleCallback,
    Fw = a.unstable_NormalPriority,
    Tt = {
      $$typeof: V,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ku() {
    return { controller: new Xw(), data: new Map(), refCount: 0 };
  }
  function xo(e) {
    e.refCount--,
      e.refCount === 0 &&
        Kw(Fw, function () {
          e.controller.abort();
        });
  }
  var _o = null,
    Nu = 0,
    pi = 0,
    gi = null;
  function Qw(e, n) {
    if (_o === null) {
      var r = (_o = []);
      (Nu = 0),
        (pi = Md()),
        (gi = {
          status: "pending",
          value: void 0,
          then: function (o) {
            r.push(o);
          },
        });
    }
    return Nu++, n.then(vm, vm), n;
  }
  function vm() {
    if (--Nu === 0 && _o !== null) {
      gi !== null && (gi.status = "fulfilled");
      var e = _o;
      (_o = null), (pi = 0), (gi = null);
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Zw(e, n) {
    var r = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (c) {
          r.push(c);
        },
      };
    return (
      e.then(
        function () {
          (o.status = "fulfilled"), (o.value = n);
          for (var c = 0; c < r.length; c++) (0, r[c])(n);
        },
        function (c) {
          for (o.status = "rejected", o.reason = c, c = 0; c < r.length; c++)
            (0, r[c])(void 0);
        }
      ),
      o
    );
  }
  var bm = D.S;
  D.S = function (e, n) {
    typeof n == "object" &&
      n !== null &&
      typeof n.then == "function" &&
      Qw(e, n),
      bm !== null && bm(e, n);
  };
  var jr = $(null);
  function Du() {
    var e = jr.current;
    return e !== null ? e : it.pooledCache;
  }
  function ss(e, n) {
    n === null ? ee(jr, jr.current) : ee(jr, n.pool);
  }
  function wm() {
    var e = Du();
    return e === null ? null : { parent: Tt._currentValue, pool: e };
  }
  var Eo = Error(l(460)),
    xm = Error(l(474)),
    cs = Error(l(542)),
    Mu = { then: function () {} };
  function _m(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function us() {}
  function Em(e, n, r) {
    switch (
      ((r = e[r]),
      r === void 0 ? e.push(n) : r !== n && (n.then(us, us), (n = r)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((e = n.reason), Tm(e), e);
      default:
        if (typeof n.status == "string") n.then(us, us);
        else {
          if (((e = it), e !== null && 100 < e.shellSuspendCounter))
            throw Error(l(482));
          (e = n),
            (e.status = "pending"),
            e.then(
              function (o) {
                if (n.status === "pending") {
                  var c = n;
                  (c.status = "fulfilled"), (c.value = o);
                }
              },
              function (o) {
                if (n.status === "pending") {
                  var c = n;
                  (c.status = "rejected"), (c.reason = o);
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
        throw ((So = n), Eo);
    }
  }
  var So = null;
  function Sm() {
    if (So === null) throw Error(l(459));
    var e = So;
    return (So = null), e;
  }
  function Tm(e) {
    if (e === Eo || e === cs) throw Error(l(483));
  }
  var La = !1;
  function ju(e) {
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
  function za(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ua(e, n, r) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (Ze & 2) !== 0)) {
      var c = o.pending;
      return (
        c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
        (o.pending = n),
        (n = ns(e)),
        dm(e, null, r),
        n
      );
    }
    return ts(e, o, n, r), ns(e);
  }
  function To(e, n, r) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (r & 4194048) !== 0))
    ) {
      var o = n.lanes;
      (o &= e.pendingLanes), (r |= o), (n.lanes = r), _r(e, r);
    }
  }
  function zu(e, n) {
    var r = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), r === o)) {
      var c = null,
        d = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var g = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null,
          };
          d === null ? (c = d = g) : (d = d.next = g), (r = r.next);
        } while (r !== null);
        d === null ? (c = d = n) : (d = d.next = n);
      } else c = d = n;
      (r = {
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: d,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = n) : (e.next = n),
      (r.lastBaseUpdate = n);
  }
  var Uu = !1;
  function Co() {
    if (Uu) {
      var e = gi;
      if (e !== null) throw e;
    }
  }
  function Ao(e, n, r, o) {
    Uu = !1;
    var c = e.updateQueue;
    La = !1;
    var d = c.firstBaseUpdate,
      g = c.lastBaseUpdate,
      v = c.shared.pending;
    if (v !== null) {
      c.shared.pending = null;
      var _ = v,
        j = _.next;
      (_.next = null), g === null ? (d = j) : (g.next = j), (g = _);
      var G = e.alternate;
      G !== null &&
        ((G = G.updateQueue),
        (v = G.lastBaseUpdate),
        v !== g &&
          (v === null ? (G.firstBaseUpdate = j) : (v.next = j),
          (G.lastBaseUpdate = _)));
    }
    if (d !== null) {
      var X = c.baseState;
      (g = 0), (G = j = _ = null), (v = d);
      do {
        var L = v.lane & -536870913,
          U = L !== v.lane;
        if (U ? (He & L) === L : (o & L) === L) {
          L !== 0 && L === pi && (Uu = !0),
            G !== null &&
              (G = G.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var Ae = e,
              xe = v;
            L = n;
            var nt = r;
            switch (xe.tag) {
              case 1:
                if (((Ae = xe.payload), typeof Ae == "function")) {
                  X = Ae.call(nt, X, L);
                  break e;
                }
                X = Ae;
                break e;
              case 3:
                Ae.flags = (Ae.flags & -65537) | 128;
              case 0:
                if (
                  ((Ae = xe.payload),
                  (L = typeof Ae == "function" ? Ae.call(nt, X, L) : Ae),
                  L == null)
                )
                  break e;
                X = b({}, X, L);
                break e;
              case 2:
                La = !0;
            }
          }
          (L = v.callback),
            L !== null &&
              ((e.flags |= 64),
              U && (e.flags |= 8192),
              (U = c.callbacks),
              U === null ? (c.callbacks = [L]) : U.push(L));
        } else
          (U = {
            lane: L,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            G === null ? ((j = G = U), (_ = X)) : (G = G.next = U),
            (g |= L);
        if (((v = v.next), v === null)) {
          if (((v = c.shared.pending), v === null)) break;
          (U = v),
            (v = U.next),
            (U.next = null),
            (c.lastBaseUpdate = U),
            (c.shared.pending = null);
        }
      } while (!0);
      G === null && (_ = X),
        (c.baseState = _),
        (c.firstBaseUpdate = j),
        (c.lastBaseUpdate = G),
        d === null && (c.shared.lanes = 0),
        ($a |= g),
        (e.lanes = g),
        (e.memoizedState = X);
    }
  }
  function Cm(e, n) {
    if (typeof e != "function") throw Error(l(191, e));
    e.call(n);
  }
  function Am(e, n) {
    var r = e.callbacks;
    if (r !== null)
      for (e.callbacks = null, e = 0; e < r.length; e++) Cm(r[e], n);
  }
  var yi = $(null),
    ds = $(0);
  function Rm(e, n) {
    (e = ya), ee(ds, e), ee(yi, n), (ya = e | n.baseLanes);
  }
  function Iu() {
    ee(ds, ya), ee(yi, yi.current);
  }
  function Bu() {
    (ya = ds.current), ie(yi), ie(ds);
  }
  var Ia = 0,
    Me = null,
    et = null,
    _t = null,
    fs = !1,
    vi = !1,
    Lr = !1,
    hs = 0,
    Ro = 0,
    bi = null,
    Jw = 0;
  function gt() {
    throw Error(l(321));
  }
  function Hu(e, n) {
    if (n === null) return !1;
    for (var r = 0; r < n.length && r < e.length; r++)
      if (!rn(e[r], n[r])) return !1;
    return !0;
  }
  function Pu(e, n, r, o, c, d) {
    return (
      (Ia = d),
      (Me = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (D.H = e === null || e.memoizedState === null ? dp : fp),
      (Lr = !1),
      (d = r(o, c)),
      (Lr = !1),
      vi && (d = km(n, r, o, c)),
      Om(e),
      d
    );
  }
  function Om(e) {
    D.H = bs;
    var n = et !== null && et.next !== null;
    if (((Ia = 0), (_t = et = Me = null), (fs = !1), (Ro = 0), (bi = null), n))
      throw Error(l(300));
    e === null ||
      Rt ||
      ((e = e.dependencies), e !== null && os(e) && (Rt = !0));
  }
  function km(e, n, r, o) {
    Me = e;
    var c = 0;
    do {
      if ((vi && (bi = null), (Ro = 0), (vi = !1), 25 <= c))
        throw Error(l(301));
      if (((c += 1), (_t = et = null), e.updateQueue != null)) {
        var d = e.updateQueue;
        (d.lastEffect = null),
          (d.events = null),
          (d.stores = null),
          d.memoCache != null && (d.memoCache.index = 0);
      }
      (D.H = i1), (d = n(r, o));
    } while (vi);
    return d;
  }
  function Ww() {
    var e = D.H,
      n = e.useState()[0];
    return (
      (n = typeof n.then == "function" ? Oo(n) : n),
      (e = e.useState()[0]),
      (et !== null ? et.memoizedState : null) !== e && (Me.flags |= 1024),
      n
    );
  }
  function Vu() {
    var e = hs !== 0;
    return (hs = 0), e;
  }
  function qu(e, n, r) {
    (n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~r);
  }
  function Gu(e) {
    if (fs) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), (e = e.next);
      }
      fs = !1;
    }
    (Ia = 0), (_t = et = Me = null), (vi = !1), (Ro = hs = 0), (bi = null);
  }
  function Wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return _t === null ? (Me.memoizedState = _t = e) : (_t = _t.next = e), _t;
  }
  function Et() {
    if (et === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = et.next;
    var n = _t === null ? Me.memoizedState : _t.next;
    if (n !== null) (_t = n), (et = e);
    else {
      if (e === null)
        throw Me.alternate === null ? Error(l(467)) : Error(l(310));
      (et = e),
        (e = {
          memoizedState: et.memoizedState,
          baseState: et.baseState,
          baseQueue: et.baseQueue,
          queue: et.queue,
          next: null,
        }),
        _t === null ? (Me.memoizedState = _t = e) : (_t = _t.next = e);
    }
    return _t;
  }
  function $u() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Oo(e) {
    var n = Ro;
    return (
      (Ro += 1),
      bi === null && (bi = []),
      (e = Em(bi, e, n)),
      (n = Me),
      (_t === null ? n.memoizedState : _t.next) === null &&
        ((n = n.alternate),
        (D.H = n === null || n.memoizedState === null ? dp : fp)),
      e
    );
  }
  function ms(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Oo(e);
      if (e.$$typeof === V) return Ht(e);
    }
    throw Error(l(438, String(e)));
  }
  function Yu(e) {
    var n = null,
      r = Me.updateQueue;
    if ((r !== null && (n = r.memoCache), n == null)) {
      var o = Me.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (n = {
              data: o.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      r === null && ((r = $u()), (Me.updateQueue = r)),
      (r.memoCache = n),
      (r = n.data[n.index]),
      r === void 0)
    )
      for (r = n.data[n.index] = Array(e), o = 0; o < e; o++) r[o] = Oe;
    return n.index++, r;
  }
  function da(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function ps(e) {
    var n = Et();
    return Xu(n, et, e);
  }
  function Xu(e, n, r) {
    var o = e.queue;
    if (o === null) throw Error(l(311));
    o.lastRenderedReducer = r;
    var c = e.baseQueue,
      d = o.pending;
    if (d !== null) {
      if (c !== null) {
        var g = c.next;
        (c.next = d.next), (d.next = g);
      }
      (n.baseQueue = c = d), (o.pending = null);
    }
    if (((d = e.baseState), c === null)) e.memoizedState = d;
    else {
      n = c.next;
      var v = (g = null),
        _ = null,
        j = n,
        G = !1;
      do {
        var X = j.lane & -536870913;
        if (X !== j.lane ? (He & X) === X : (Ia & X) === X) {
          var L = j.revertLane;
          if (L === 0)
            _ !== null &&
              (_ = _.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: j.action,
                  hasEagerState: j.hasEagerState,
                  eagerState: j.eagerState,
                  next: null,
                }),
              X === pi && (G = !0);
          else if ((Ia & L) === L) {
            (j = j.next), L === pi && (G = !0);
            continue;
          } else
            (X = {
              lane: 0,
              revertLane: j.revertLane,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null,
            }),
              _ === null ? ((v = _ = X), (g = d)) : (_ = _.next = X),
              (Me.lanes |= L),
              ($a |= L);
          (X = j.action),
            Lr && r(d, X),
            (d = j.hasEagerState ? j.eagerState : r(d, X));
        } else
          (L = {
            lane: X,
            revertLane: j.revertLane,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          }),
            _ === null ? ((v = _ = L), (g = d)) : (_ = _.next = L),
            (Me.lanes |= X),
            ($a |= X);
        j = j.next;
      } while (j !== null && j !== n);
      if (
        (_ === null ? (g = d) : (_.next = v),
        !rn(d, e.memoizedState) && ((Rt = !0), G && ((r = gi), r !== null)))
      )
        throw r;
      (e.memoizedState = d),
        (e.baseState = g),
        (e.baseQueue = _),
        (o.lastRenderedState = d);
    }
    return c === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Ku(e) {
    var n = Et(),
      r = n.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var o = r.dispatch,
      c = r.pending,
      d = n.memoizedState;
    if (c !== null) {
      r.pending = null;
      var g = (c = c.next);
      do (d = e(d, g.action)), (g = g.next);
      while (g !== c);
      rn(d, n.memoizedState) || (Rt = !0),
        (n.memoizedState = d),
        n.baseQueue === null && (n.baseState = d),
        (r.lastRenderedState = d);
    }
    return [d, o];
  }
  function Nm(e, n, r) {
    var o = Me,
      c = Et(),
      d = Ke;
    if (d) {
      if (r === void 0) throw Error(l(407));
      r = r();
    } else r = n();
    var g = !rn((et || c).memoizedState, r);
    g && ((c.memoizedState = r), (Rt = !0)), (c = c.queue);
    var v = jm.bind(null, o, c, e);
    if (
      (ko(2048, 8, v, [e]),
      c.getSnapshot !== n || g || (_t !== null && _t.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        wi(9, gs(), Mm.bind(null, o, c, r, n), null),
        it === null)
      )
        throw Error(l(349));
      d || (Ia & 124) !== 0 || Dm(o, n, r);
    }
    return r;
  }
  function Dm(e, n, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: r }),
      (n = Me.updateQueue),
      n === null
        ? ((n = $u()), (Me.updateQueue = n), (n.stores = [e]))
        : ((r = n.stores), r === null ? (n.stores = [e]) : r.push(e));
  }
  function Mm(e, n, r, o) {
    (n.value = r), (n.getSnapshot = o), Lm(n) && zm(e);
  }
  function jm(e, n, r) {
    return r(function () {
      Lm(n) && zm(e);
    });
  }
  function Lm(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var r = n();
      return !rn(e, r);
    } catch {
      return !0;
    }
  }
  function zm(e) {
    var n = di(e, 2);
    n !== null && dn(n, e, 2);
  }
  function Fu(e) {
    var n = Wt();
    if (typeof e == "function") {
      var r = e;
      if (((e = r()), Lr)) {
        Mn(!0);
        try {
          r();
        } finally {
          Mn(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = e),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: da,
        lastRenderedState: e,
      }),
      n
    );
  }
  function Um(e, n, r, o) {
    return (e.baseState = r), Xu(e, et, typeof o == "function" ? o : da);
  }
  function e1(e, n, r, o, c) {
    if (vs(e)) throw Error(l(485));
    if (((e = n.action), e !== null)) {
      var d = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (g) {
          d.listeners.push(g);
        },
      };
      D.T !== null ? r(!0) : (d.isTransition = !1),
        o(d),
        (r = n.pending),
        r === null
          ? ((d.next = n.pending = d), Im(n, d))
          : ((d.next = r.next), (n.pending = r.next = d));
    }
  }
  function Im(e, n) {
    var r = n.action,
      o = n.payload,
      c = e.state;
    if (n.isTransition) {
      var d = D.T,
        g = {};
      D.T = g;
      try {
        var v = r(c, o),
          _ = D.S;
        _ !== null && _(g, v), Bm(e, n, v);
      } catch (j) {
        Qu(e, n, j);
      } finally {
        D.T = d;
      }
    } else
      try {
        (d = r(c, o)), Bm(e, n, d);
      } catch (j) {
        Qu(e, n, j);
      }
  }
  function Bm(e, n, r) {
    r !== null && typeof r == "object" && typeof r.then == "function"
      ? r.then(
          function (o) {
            Hm(e, n, o);
          },
          function (o) {
            return Qu(e, n, o);
          }
        )
      : Hm(e, n, r);
  }
  function Hm(e, n, r) {
    (n.status = "fulfilled"),
      (n.value = r),
      Pm(n),
      (e.state = r),
      (n = e.pending),
      n !== null &&
        ((r = n.next),
        r === n ? (e.pending = null) : ((r = r.next), (n.next = r), Im(e, r)));
  }
  function Qu(e, n, r) {
    var o = e.pending;
    if (((e.pending = null), o !== null)) {
      o = o.next;
      do (n.status = "rejected"), (n.reason = r), Pm(n), (n = n.next);
      while (n !== o);
    }
    e.action = null;
  }
  function Pm(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Vm(e, n) {
    return n;
  }
  function qm(e, n) {
    if (Ke) {
      var r = it.formState;
      if (r !== null) {
        e: {
          var o = Me;
          if (Ke) {
            if (mt) {
              t: {
                for (var c = mt, d = $n; c.nodeType !== 8; ) {
                  if (!d) {
                    c = null;
                    break t;
                  }
                  if (((c = In(c.nextSibling)), c === null)) {
                    c = null;
                    break t;
                  }
                }
                (d = c.data), (c = d === "F!" || d === "F" ? c : null);
              }
              if (c) {
                (mt = In(c.nextSibling)), (o = c.data === "F!");
                break e;
              }
            }
            Nr(o);
          }
          o = !1;
        }
        o && (n = r[0]);
      }
    }
    return (
      (r = Wt()),
      (r.memoizedState = r.baseState = n),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vm,
        lastRenderedState: n,
      }),
      (r.queue = o),
      (r = sp.bind(null, Me, o)),
      (o.dispatch = r),
      (o = Fu(!1)),
      (d = td.bind(null, Me, !1, o.queue)),
      (o = Wt()),
      (c = { state: n, dispatch: null, action: e, pending: null }),
      (o.queue = c),
      (r = e1.bind(null, Me, c, d, r)),
      (c.dispatch = r),
      (o.memoizedState = e),
      [n, r, !1]
    );
  }
  function Gm(e) {
    var n = Et();
    return $m(n, et, e);
  }
  function $m(e, n, r) {
    if (
      ((n = Xu(e, n, Vm)[0]),
      (e = ps(da)[0]),
      typeof n == "object" && n !== null && typeof n.then == "function")
    )
      try {
        var o = Oo(n);
      } catch (g) {
        throw g === Eo ? cs : g;
      }
    else o = n;
    n = Et();
    var c = n.queue,
      d = c.dispatch;
    return (
      r !== n.memoizedState &&
        ((Me.flags |= 2048), wi(9, gs(), t1.bind(null, c, r), null)),
      [o, d, e]
    );
  }
  function t1(e, n) {
    e.action = n;
  }
  function Ym(e) {
    var n = Et(),
      r = et;
    if (r !== null) return $m(n, r, e);
    Et(), (n = n.memoizedState), (r = Et());
    var o = r.queue.dispatch;
    return (r.memoizedState = e), [n, o, !1];
  }
  function wi(e, n, r, o) {
    return (
      (e = { tag: e, create: r, deps: o, inst: n, next: null }),
      (n = Me.updateQueue),
      n === null && ((n = $u()), (Me.updateQueue = n)),
      (r = n.lastEffect),
      r === null
        ? (n.lastEffect = e.next = e)
        : ((o = r.next), (r.next = e), (e.next = o), (n.lastEffect = e)),
      e
    );
  }
  function gs() {
    return { destroy: void 0, resource: void 0 };
  }
  function Xm() {
    return Et().memoizedState;
  }
  function ys(e, n, r, o) {
    var c = Wt();
    (o = o === void 0 ? null : o),
      (Me.flags |= e),
      (c.memoizedState = wi(1 | n, gs(), r, o));
  }
  function ko(e, n, r, o) {
    var c = Et();
    o = o === void 0 ? null : o;
    var d = c.memoizedState.inst;
    et !== null && o !== null && Hu(o, et.memoizedState.deps)
      ? (c.memoizedState = wi(n, d, r, o))
      : ((Me.flags |= e), (c.memoizedState = wi(1 | n, d, r, o)));
  }
  function Km(e, n) {
    ys(8390656, 8, e, n);
  }
  function Fm(e, n) {
    ko(2048, 8, e, n);
  }
  function Qm(e, n) {
    return ko(4, 2, e, n);
  }
  function Zm(e, n) {
    return ko(4, 4, e, n);
  }
  function Jm(e, n) {
    if (typeof n == "function") {
      e = e();
      var r = n(e);
      return function () {
        typeof r == "function" ? r() : n(null);
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
  function Wm(e, n, r) {
    (r = r != null ? r.concat([e]) : null), ko(4, 4, Jm.bind(null, n, e), r);
  }
  function Zu() {}
  function ep(e, n) {
    var r = Et();
    n = n === void 0 ? null : n;
    var o = r.memoizedState;
    return n !== null && Hu(n, o[1]) ? o[0] : ((r.memoizedState = [e, n]), e);
  }
  function tp(e, n) {
    var r = Et();
    n = n === void 0 ? null : n;
    var o = r.memoizedState;
    if (n !== null && Hu(n, o[1])) return o[0];
    if (((o = e()), Lr)) {
      Mn(!0);
      try {
        e();
      } finally {
        Mn(!1);
      }
    }
    return (r.memoizedState = [o, n]), o;
  }
  function Ju(e, n, r) {
    return r === void 0 || (Ia & 1073741824) !== 0
      ? (e.memoizedState = n)
      : ((e.memoizedState = r), (e = rg()), (Me.lanes |= e), ($a |= e), r);
  }
  function np(e, n, r, o) {
    return rn(r, n)
      ? r
      : yi.current !== null
      ? ((e = Ju(e, r, o)), rn(e, n) || (Rt = !0), e)
      : (Ia & 42) === 0
      ? ((Rt = !0), (e.memoizedState = r))
      : ((e = rg()), (Me.lanes |= e), ($a |= e), n);
  }
  function ap(e, n, r, o, c) {
    var d = J.p;
    J.p = d !== 0 && 8 > d ? d : 8;
    var g = D.T,
      v = {};
    (D.T = v), td(e, !1, n, r);
    try {
      var _ = c(),
        j = D.S;
      if (
        (j !== null && j(v, _),
        _ !== null && typeof _ == "object" && typeof _.then == "function")
      ) {
        var G = Zw(_, o);
        No(e, n, G, un(e));
      } else No(e, n, o, un(e));
    } catch (X) {
      No(e, n, { then: function () {}, status: "rejected", reason: X }, un());
    } finally {
      (J.p = d), (D.T = g);
    }
  }
  function n1() {}
  function Wu(e, n, r, o) {
    if (e.tag !== 5) throw Error(l(476));
    var c = rp(e).queue;
    ap(
      e,
      c,
      n,
      le,
      r === null
        ? n1
        : function () {
            return ip(e), r(o);
          }
    );
  }
  function rp(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: le,
      baseState: le,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: da,
        lastRenderedState: le,
      },
      next: null,
    };
    var r = {};
    return (
      (n.next = {
        memoizedState: r,
        baseState: r,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: da,
          lastRenderedState: r,
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
    var n = rp(e).next.queue;
    No(e, n, {}, un());
  }
  function ed() {
    return Ht(Fo);
  }
  function op() {
    return Et().memoizedState;
  }
  function lp() {
    return Et().memoizedState;
  }
  function a1(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var r = un();
          e = za(r);
          var o = Ua(n, e, r);
          o !== null && (dn(o, n, r), To(o, n, r)),
            (n = { cache: ku() }),
            (e.payload = n);
          return;
      }
      n = n.return;
    }
  }
  function r1(e, n, r) {
    var o = un();
    (r = {
      lane: o,
      revertLane: 0,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      vs(e)
        ? cp(n, r)
        : ((r = wu(e, n, r, o)), r !== null && (dn(r, e, o), up(r, n, o)));
  }
  function sp(e, n, r) {
    var o = un();
    No(e, n, r, o);
  }
  function No(e, n, r, o) {
    var c = {
      lane: o,
      revertLane: 0,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (vs(e)) cp(n, c);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = n.lastRenderedReducer), d !== null)
      )
        try {
          var g = n.lastRenderedState,
            v = d(g, r);
          if (((c.hasEagerState = !0), (c.eagerState = v), rn(v, g)))
            return ts(e, n, c, 0), it === null && es(), !1;
        } catch {
        } finally {
        }
      if (((r = wu(e, n, c, o)), r !== null))
        return dn(r, e, o), up(r, n, o), !0;
    }
    return !1;
  }
  function td(e, n, r, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: Md(),
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      vs(e))
    ) {
      if (n) throw Error(l(479));
    } else (n = wu(e, r, o, 2)), n !== null && dn(n, e, 2);
  }
  function vs(e) {
    var n = e.alternate;
    return e === Me || (n !== null && n === Me);
  }
  function cp(e, n) {
    vi = fs = !0;
    var r = e.pending;
    r === null ? (n.next = n) : ((n.next = r.next), (r.next = n)),
      (e.pending = n);
  }
  function up(e, n, r) {
    if ((r & 4194048) !== 0) {
      var o = n.lanes;
      (o &= e.pendingLanes), (r |= o), (n.lanes = r), _r(e, r);
    }
  }
  var bs = {
      readContext: Ht,
      use: ms,
      useCallback: gt,
      useContext: gt,
      useEffect: gt,
      useImperativeHandle: gt,
      useLayoutEffect: gt,
      useInsertionEffect: gt,
      useMemo: gt,
      useReducer: gt,
      useRef: gt,
      useState: gt,
      useDebugValue: gt,
      useDeferredValue: gt,
      useTransition: gt,
      useSyncExternalStore: gt,
      useId: gt,
      useHostTransitionStatus: gt,
      useFormState: gt,
      useActionState: gt,
      useOptimistic: gt,
      useMemoCache: gt,
      useCacheRefresh: gt,
    },
    dp = {
      readContext: Ht,
      use: ms,
      useCallback: function (e, n) {
        return (Wt().memoizedState = [e, n === void 0 ? null : n]), e;
      },
      useContext: Ht,
      useEffect: Km,
      useImperativeHandle: function (e, n, r) {
        (r = r != null ? r.concat([e]) : null),
          ys(4194308, 4, Jm.bind(null, n, e), r);
      },
      useLayoutEffect: function (e, n) {
        return ys(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        ys(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var r = Wt();
        n = n === void 0 ? null : n;
        var o = e();
        if (Lr) {
          Mn(!0);
          try {
            e();
          } finally {
            Mn(!1);
          }
        }
        return (r.memoizedState = [o, n]), o;
      },
      useReducer: function (e, n, r) {
        var o = Wt();
        if (r !== void 0) {
          var c = r(n);
          if (Lr) {
            Mn(!0);
            try {
              r(n);
            } finally {
              Mn(!1);
            }
          }
        } else c = n;
        return (
          (o.memoizedState = o.baseState = c),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: c,
          }),
          (o.queue = e),
          (e = e.dispatch = r1.bind(null, Me, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = Wt();
        return (e = { current: e }), (n.memoizedState = e);
      },
      useState: function (e) {
        e = Fu(e);
        var n = e.queue,
          r = sp.bind(null, Me, n);
        return (n.dispatch = r), [e.memoizedState, r];
      },
      useDebugValue: Zu,
      useDeferredValue: function (e, n) {
        var r = Wt();
        return Ju(r, e, n);
      },
      useTransition: function () {
        var e = Fu(!1);
        return (
          (e = ap.bind(null, Me, e.queue, !0, !1)),
          (Wt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, n, r) {
        var o = Me,
          c = Wt();
        if (Ke) {
          if (r === void 0) throw Error(l(407));
          r = r();
        } else {
          if (((r = n()), it === null)) throw Error(l(349));
          (He & 124) !== 0 || Dm(o, n, r);
        }
        c.memoizedState = r;
        var d = { value: r, getSnapshot: n };
        return (
          (c.queue = d),
          Km(jm.bind(null, o, d, e), [e]),
          (o.flags |= 2048),
          wi(9, gs(), Mm.bind(null, o, d, r, n), null),
          r
        );
      },
      useId: function () {
        var e = Wt(),
          n = it.identifierPrefix;
        if (Ke) {
          var r = sa,
            o = la;
          (r = (o & ~(1 << (32 - Dt(o) - 1))).toString(32) + r),
            (n = "«" + n + "R" + r),
            (r = hs++),
            0 < r && (n += "H" + r.toString(32)),
            (n += "»");
        } else (r = Jw++), (n = "«" + n + "r" + r.toString(32) + "»");
        return (e.memoizedState = n);
      },
      useHostTransitionStatus: ed,
      useFormState: qm,
      useActionState: qm,
      useOptimistic: function (e) {
        var n = Wt();
        n.memoizedState = n.baseState = e;
        var r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (n.queue = r),
          (n = td.bind(null, Me, !0, r)),
          (r.dispatch = n),
          [e, n]
        );
      },
      useMemoCache: Yu,
      useCacheRefresh: function () {
        return (Wt().memoizedState = a1.bind(null, Me));
      },
    },
    fp = {
      readContext: Ht,
      use: ms,
      useCallback: ep,
      useContext: Ht,
      useEffect: Fm,
      useImperativeHandle: Wm,
      useInsertionEffect: Qm,
      useLayoutEffect: Zm,
      useMemo: tp,
      useReducer: ps,
      useRef: Xm,
      useState: function () {
        return ps(da);
      },
      useDebugValue: Zu,
      useDeferredValue: function (e, n) {
        var r = Et();
        return np(r, et.memoizedState, e, n);
      },
      useTransition: function () {
        var e = ps(da)[0],
          n = Et().memoizedState;
        return [typeof e == "boolean" ? e : Oo(e), n];
      },
      useSyncExternalStore: Nm,
      useId: op,
      useHostTransitionStatus: ed,
      useFormState: Gm,
      useActionState: Gm,
      useOptimistic: function (e, n) {
        var r = Et();
        return Um(r, et, e, n);
      },
      useMemoCache: Yu,
      useCacheRefresh: lp,
    },
    i1 = {
      readContext: Ht,
      use: ms,
      useCallback: ep,
      useContext: Ht,
      useEffect: Fm,
      useImperativeHandle: Wm,
      useInsertionEffect: Qm,
      useLayoutEffect: Zm,
      useMemo: tp,
      useReducer: Ku,
      useRef: Xm,
      useState: function () {
        return Ku(da);
      },
      useDebugValue: Zu,
      useDeferredValue: function (e, n) {
        var r = Et();
        return et === null ? Ju(r, e, n) : np(r, et.memoizedState, e, n);
      },
      useTransition: function () {
        var e = Ku(da)[0],
          n = Et().memoizedState;
        return [typeof e == "boolean" ? e : Oo(e), n];
      },
      useSyncExternalStore: Nm,
      useId: op,
      useHostTransitionStatus: ed,
      useFormState: Ym,
      useActionState: Ym,
      useOptimistic: function (e, n) {
        var r = Et();
        return et !== null
          ? Um(r, et, e, n)
          : ((r.baseState = e), [e, r.queue.dispatch]);
      },
      useMemoCache: Yu,
      useCacheRefresh: lp,
    },
    xi = null,
    Do = 0;
  function ws(e) {
    var n = Do;
    return (Do += 1), xi === null && (xi = []), Em(xi, e, n);
  }
  function Mo(e, n) {
    (n = n.props.ref), (e.ref = n !== void 0 ? n : null);
  }
  function xs(e, n) {
    throw n.$$typeof === x
      ? Error(l(525))
      : ((e = Object.prototype.toString.call(n)),
        Error(
          l(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : e
          )
        ));
  }
  function hp(e) {
    var n = e._init;
    return n(e._payload);
  }
  function mp(e) {
    function n(k, C) {
      if (e) {
        var M = k.deletions;
        M === null ? ((k.deletions = [C]), (k.flags |= 16)) : M.push(C);
      }
    }
    function r(k, C) {
      if (!e) return null;
      for (; C !== null; ) n(k, C), (C = C.sibling);
      return null;
    }
    function o(k) {
      for (var C = new Map(); k !== null; )
        k.key !== null ? C.set(k.key, k) : C.set(k.index, k), (k = k.sibling);
      return C;
    }
    function c(k, C) {
      return (k = oa(k, C)), (k.index = 0), (k.sibling = null), k;
    }
    function d(k, C, M) {
      return (
        (k.index = M),
        e
          ? ((M = k.alternate),
            M !== null
              ? ((M = M.index), M < C ? ((k.flags |= 67108866), C) : M)
              : ((k.flags |= 67108866), C))
          : ((k.flags |= 1048576), C)
      );
    }
    function g(k) {
      return e && k.alternate === null && (k.flags |= 67108866), k;
    }
    function v(k, C, M, Y) {
      return C === null || C.tag !== 6
        ? ((C = _u(M, k.mode, Y)), (C.return = k), C)
        : ((C = c(C, M)), (C.return = k), C);
    }
    function _(k, C, M, Y) {
      var de = M.type;
      return de === A
        ? G(k, C, M.props.children, Y, M.key)
        : C !== null &&
          (C.elementType === de ||
            (typeof de == "object" &&
              de !== null &&
              de.$$typeof === Z &&
              hp(de) === C.type))
        ? ((C = c(C, M.props)), Mo(C, M), (C.return = k), C)
        : ((C = as(M.type, M.key, M.props, null, k.mode, Y)),
          Mo(C, M),
          (C.return = k),
          C);
    }
    function j(k, C, M, Y) {
      return C === null ||
        C.tag !== 4 ||
        C.stateNode.containerInfo !== M.containerInfo ||
        C.stateNode.implementation !== M.implementation
        ? ((C = Eu(M, k.mode, Y)), (C.return = k), C)
        : ((C = c(C, M.children || [])), (C.return = k), C);
    }
    function G(k, C, M, Y, de) {
      return C === null || C.tag !== 7
        ? ((C = Ar(M, k.mode, Y, de)), (C.return = k), C)
        : ((C = c(C, M)), (C.return = k), C);
    }
    function X(k, C, M) {
      if (
        (typeof C == "string" && C !== "") ||
        typeof C == "number" ||
        typeof C == "bigint"
      )
        return (C = _u("" + C, k.mode, M)), (C.return = k), C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case w:
            return (
              (M = as(C.type, C.key, C.props, null, k.mode, M)),
              Mo(M, C),
              (M.return = k),
              M
            );
          case T:
            return (C = Eu(C, k.mode, M)), (C.return = k), C;
          case Z:
            var Y = C._init;
            return (C = Y(C._payload)), X(k, C, M);
        }
        if (be(C) || W(C))
          return (C = Ar(C, k.mode, M, null)), (C.return = k), C;
        if (typeof C.then == "function") return X(k, ws(C), M);
        if (C.$$typeof === V) return X(k, ls(k, C), M);
        xs(k, C);
      }
      return null;
    }
    function L(k, C, M, Y) {
      var de = C !== null ? C.key : null;
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return de !== null ? null : v(k, C, "" + M, Y);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case w:
            return M.key === de ? _(k, C, M, Y) : null;
          case T:
            return M.key === de ? j(k, C, M, Y) : null;
          case Z:
            return (de = M._init), (M = de(M._payload)), L(k, C, M, Y);
        }
        if (be(M) || W(M)) return de !== null ? null : G(k, C, M, Y, null);
        if (typeof M.then == "function") return L(k, C, ws(M), Y);
        if (M.$$typeof === V) return L(k, C, ls(k, M), Y);
        xs(k, M);
      }
      return null;
    }
    function U(k, C, M, Y, de) {
      if (
        (typeof Y == "string" && Y !== "") ||
        typeof Y == "number" ||
        typeof Y == "bigint"
      )
        return (k = k.get(M) || null), v(C, k, "" + Y, de);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case w:
            return (
              (k = k.get(Y.key === null ? M : Y.key) || null), _(C, k, Y, de)
            );
          case T:
            return (
              (k = k.get(Y.key === null ? M : Y.key) || null), j(C, k, Y, de)
            );
          case Z:
            var Le = Y._init;
            return (Y = Le(Y._payload)), U(k, C, M, Y, de);
        }
        if (be(Y) || W(Y)) return (k = k.get(M) || null), G(C, k, Y, de, null);
        if (typeof Y.then == "function") return U(k, C, M, ws(Y), de);
        if (Y.$$typeof === V) return U(k, C, M, ls(C, Y), de);
        xs(C, Y);
      }
      return null;
    }
    function Ae(k, C, M, Y) {
      for (
        var de = null, Le = null, pe = C, _e = (C = 0), kt = null;
        pe !== null && _e < M.length;
        _e++
      ) {
        pe.index > _e ? ((kt = pe), (pe = null)) : (kt = pe.sibling);
        var $e = L(k, pe, M[_e], Y);
        if ($e === null) {
          pe === null && (pe = kt);
          break;
        }
        e && pe && $e.alternate === null && n(k, pe),
          (C = d($e, C, _e)),
          Le === null ? (de = $e) : (Le.sibling = $e),
          (Le = $e),
          (pe = kt);
      }
      if (_e === M.length) return r(k, pe), Ke && Or(k, _e), de;
      if (pe === null) {
        for (; _e < M.length; _e++)
          (pe = X(k, M[_e], Y)),
            pe !== null &&
              ((C = d(pe, C, _e)),
              Le === null ? (de = pe) : (Le.sibling = pe),
              (Le = pe));
        return Ke && Or(k, _e), de;
      }
      for (pe = o(pe); _e < M.length; _e++)
        (kt = U(pe, k, _e, M[_e], Y)),
          kt !== null &&
            (e &&
              kt.alternate !== null &&
              pe.delete(kt.key === null ? _e : kt.key),
            (C = d(kt, C, _e)),
            Le === null ? (de = kt) : (Le.sibling = kt),
            (Le = kt));
      return (
        e &&
          pe.forEach(function (er) {
            return n(k, er);
          }),
        Ke && Or(k, _e),
        de
      );
    }
    function xe(k, C, M, Y) {
      if (M == null) throw Error(l(151));
      for (
        var de = null,
          Le = null,
          pe = C,
          _e = (C = 0),
          kt = null,
          $e = M.next();
        pe !== null && !$e.done;
        _e++, $e = M.next()
      ) {
        pe.index > _e ? ((kt = pe), (pe = null)) : (kt = pe.sibling);
        var er = L(k, pe, $e.value, Y);
        if (er === null) {
          pe === null && (pe = kt);
          break;
        }
        e && pe && er.alternate === null && n(k, pe),
          (C = d(er, C, _e)),
          Le === null ? (de = er) : (Le.sibling = er),
          (Le = er),
          (pe = kt);
      }
      if ($e.done) return r(k, pe), Ke && Or(k, _e), de;
      if (pe === null) {
        for (; !$e.done; _e++, $e = M.next())
          ($e = X(k, $e.value, Y)),
            $e !== null &&
              ((C = d($e, C, _e)),
              Le === null ? (de = $e) : (Le.sibling = $e),
              (Le = $e));
        return Ke && Or(k, _e), de;
      }
      for (pe = o(pe); !$e.done; _e++, $e = M.next())
        ($e = U(pe, k, _e, $e.value, Y)),
          $e !== null &&
            (e &&
              $e.alternate !== null &&
              pe.delete($e.key === null ? _e : $e.key),
            (C = d($e, C, _e)),
            Le === null ? (de = $e) : (Le.sibling = $e),
            (Le = $e));
      return (
        e &&
          pe.forEach(function (o2) {
            return n(k, o2);
          }),
        Ke && Or(k, _e),
        de
      );
    }
    function nt(k, C, M, Y) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === A &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case w:
            e: {
              for (var de = M.key; C !== null; ) {
                if (C.key === de) {
                  if (((de = M.type), de === A)) {
                    if (C.tag === 7) {
                      r(k, C.sibling),
                        (Y = c(C, M.props.children)),
                        (Y.return = k),
                        (k = Y);
                      break e;
                    }
                  } else if (
                    C.elementType === de ||
                    (typeof de == "object" &&
                      de !== null &&
                      de.$$typeof === Z &&
                      hp(de) === C.type)
                  ) {
                    r(k, C.sibling),
                      (Y = c(C, M.props)),
                      Mo(Y, M),
                      (Y.return = k),
                      (k = Y);
                    break e;
                  }
                  r(k, C);
                  break;
                } else n(k, C);
                C = C.sibling;
              }
              M.type === A
                ? ((Y = Ar(M.props.children, k.mode, Y, M.key)),
                  (Y.return = k),
                  (k = Y))
                : ((Y = as(M.type, M.key, M.props, null, k.mode, Y)),
                  Mo(Y, M),
                  (Y.return = k),
                  (k = Y));
            }
            return g(k);
          case T:
            e: {
              for (de = M.key; C !== null; ) {
                if (C.key === de)
                  if (
                    C.tag === 4 &&
                    C.stateNode.containerInfo === M.containerInfo &&
                    C.stateNode.implementation === M.implementation
                  ) {
                    r(k, C.sibling),
                      (Y = c(C, M.children || [])),
                      (Y.return = k),
                      (k = Y);
                    break e;
                  } else {
                    r(k, C);
                    break;
                  }
                else n(k, C);
                C = C.sibling;
              }
              (Y = Eu(M, k.mode, Y)), (Y.return = k), (k = Y);
            }
            return g(k);
          case Z:
            return (de = M._init), (M = de(M._payload)), nt(k, C, M, Y);
        }
        if (be(M)) return Ae(k, C, M, Y);
        if (W(M)) {
          if (((de = W(M)), typeof de != "function")) throw Error(l(150));
          return (M = de.call(M)), xe(k, C, M, Y);
        }
        if (typeof M.then == "function") return nt(k, C, ws(M), Y);
        if (M.$$typeof === V) return nt(k, C, ls(k, M), Y);
        xs(k, M);
      }
      return (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
        ? ((M = "" + M),
          C !== null && C.tag === 6
            ? (r(k, C.sibling), (Y = c(C, M)), (Y.return = k), (k = Y))
            : (r(k, C), (Y = _u(M, k.mode, Y)), (Y.return = k), (k = Y)),
          g(k))
        : r(k, C);
    }
    return function (k, C, M, Y) {
      try {
        Do = 0;
        var de = nt(k, C, M, Y);
        return (xi = null), de;
      } catch (pe) {
        if (pe === Eo || pe === cs) throw pe;
        var Le = on(29, pe, null, k.mode);
        return (Le.lanes = Y), (Le.return = k), Le;
      } finally {
      }
    };
  }
  var _i = mp(!0),
    pp = mp(!1),
    Tn = $(null),
    Yn = null;
  function Ba(e) {
    var n = e.alternate;
    ee(Ct, Ct.current & 1),
      ee(Tn, e),
      Yn === null &&
        (n === null || yi.current !== null || n.memoizedState !== null) &&
        (Yn = e);
  }
  function gp(e) {
    if (e.tag === 22) {
      if ((ee(Ct, Ct.current), ee(Tn, e), Yn === null)) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Yn = e);
      }
    } else Ha();
  }
  function Ha() {
    ee(Ct, Ct.current), ee(Tn, Tn.current);
  }
  function fa(e) {
    ie(Tn), Yn === e && (Yn = null), ie(Ct);
  }
  var Ct = $(0);
  function _s(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var r = n.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || $d(r))
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
  function nd(e, n, r, o) {
    (n = e.memoizedState),
      (r = r(o, n)),
      (r = r == null ? n : b({}, n, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var ad = {
    enqueueSetState: function (e, n, r) {
      e = e._reactInternals;
      var o = un(),
        c = za(o);
      (c.payload = n),
        r != null && (c.callback = r),
        (n = Ua(e, c, o)),
        n !== null && (dn(n, e, o), To(n, e, o));
    },
    enqueueReplaceState: function (e, n, r) {
      e = e._reactInternals;
      var o = un(),
        c = za(o);
      (c.tag = 1),
        (c.payload = n),
        r != null && (c.callback = r),
        (n = Ua(e, c, o)),
        n !== null && (dn(n, e, o), To(n, e, o));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var r = un(),
        o = za(r);
      (o.tag = 2),
        n != null && (o.callback = n),
        (n = Ua(e, o, r)),
        n !== null && (dn(n, e, r), To(n, e, r));
    },
  };
  function yp(e, n, r, o, c, d, g) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, d, g)
        : n.prototype && n.prototype.isPureReactComponent
        ? !po(r, o) || !po(c, d)
        : !0
    );
  }
  function vp(e, n, r, o) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(r, o),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(r, o),
      n.state !== e && ad.enqueueReplaceState(n, n.state, null);
  }
  function zr(e, n) {
    var r = n;
    if ("ref" in n) {
      r = {};
      for (var o in n) o !== "ref" && (r[o] = n[o]);
    }
    if ((e = e.defaultProps)) {
      r === n && (r = b({}, r));
      for (var c in e) r[c] === void 0 && (r[c] = e[c]);
    }
    return r;
  }
  var Es =
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
  function bp(e) {
    Es(e);
  }
  function wp(e) {
    console.error(e);
  }
  function xp(e) {
    Es(e);
  }
  function Ss(e, n) {
    try {
      var r = e.onUncaughtError;
      r(n.value, { componentStack: n.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function _p(e, n, r) {
    try {
      var o = e.onCaughtError;
      o(r.value, {
        componentStack: r.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function rd(e, n, r) {
    return (
      (r = za(r)),
      (r.tag = 3),
      (r.payload = { element: null }),
      (r.callback = function () {
        Ss(e, n);
      }),
      r
    );
  }
  function Ep(e) {
    return (e = za(e)), (e.tag = 3), e;
  }
  function Sp(e, n, r, o) {
    var c = r.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var d = o.value;
      (e.payload = function () {
        return c(d);
      }),
        (e.callback = function () {
          _p(n, r, o);
        });
    }
    var g = r.stateNode;
    g !== null &&
      typeof g.componentDidCatch == "function" &&
      (e.callback = function () {
        _p(n, r, o),
          typeof c != "function" &&
            (Ya === null ? (Ya = new Set([this])) : Ya.add(this));
        var v = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function o1(e, n, r, o, c) {
    if (
      ((r.flags |= 32768),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      if (
        ((n = r.alternate),
        n !== null && wo(n, r, c, !0),
        (r = Tn.current),
        r !== null)
      ) {
        switch (r.tag) {
          case 13:
            return (
              Yn === null ? Rd() : r.alternate === null && pt === 0 && (pt = 3),
              (r.flags &= -257),
              (r.flags |= 65536),
              (r.lanes = c),
              o === Mu
                ? (r.flags |= 16384)
                : ((n = r.updateQueue),
                  n === null ? (r.updateQueue = new Set([o])) : n.add(o),
                  kd(e, o, c)),
              !1
            );
          case 22:
            return (
              (r.flags |= 65536),
              o === Mu
                ? (r.flags |= 16384)
                : ((n = r.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([o]),
                      }),
                      (r.updateQueue = n))
                    : ((r = n.retryQueue),
                      r === null ? (n.retryQueue = new Set([o])) : r.add(o)),
                  kd(e, o, c)),
              !1
            );
        }
        throw Error(l(435, r.tag));
      }
      return kd(e, o, c), Rd(), !1;
    }
    if (Ke)
      return (
        (n = Tn.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = c),
            o !== Cu && ((e = Error(l(422), { cause: o })), bo(xn(e, r))))
          : (o !== Cu && ((n = Error(l(423), { cause: o })), bo(xn(n, r))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (c &= -c),
            (e.lanes |= c),
            (o = xn(o, r)),
            (c = rd(e.stateNode, o, c)),
            zu(e, c),
            pt !== 4 && (pt = 2)),
        !1
      );
    var d = Error(l(520), { cause: o });
    if (
      ((d = xn(d, r)),
      Ho === null ? (Ho = [d]) : Ho.push(d),
      pt !== 4 && (pt = 2),
      n === null)
    )
      return !0;
    (o = xn(o, r)), (r = n);
    do {
      switch (r.tag) {
        case 3:
          return (
            (r.flags |= 65536),
            (e = c & -c),
            (r.lanes |= e),
            (e = rd(r.stateNode, o, e)),
            zu(r, e),
            !1
          );
        case 1:
          if (
            ((n = r.type),
            (d = r.stateNode),
            (r.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (d !== null &&
                  typeof d.componentDidCatch == "function" &&
                  (Ya === null || !Ya.has(d)))))
          )
            return (
              (r.flags |= 65536),
              (c &= -c),
              (r.lanes |= c),
              (c = Ep(c)),
              Sp(c, e, r, o),
              zu(r, c),
              !1
            );
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var Tp = Error(l(461)),
    Rt = !1;
  function Mt(e, n, r, o) {
    n.child = e === null ? pp(n, null, r, o) : _i(n, e.child, r, o);
  }
  function Cp(e, n, r, o, c) {
    r = r.render;
    var d = n.ref;
    if ("ref" in o) {
      var g = {};
      for (var v in o) v !== "ref" && (g[v] = o[v]);
    } else g = o;
    return (
      Mr(n),
      (o = Pu(e, n, r, g, d, c)),
      (v = Vu()),
      e !== null && !Rt
        ? (qu(e, n, c), ha(e, n, c))
        : (Ke && v && Su(n), (n.flags |= 1), Mt(e, n, o, c), n.child)
    );
  }
  function Ap(e, n, r, o, c) {
    if (e === null) {
      var d = r.type;
      return typeof d == "function" &&
        !xu(d) &&
        d.defaultProps === void 0 &&
        r.compare === null
        ? ((n.tag = 15), (n.type = d), Rp(e, n, d, o, c))
        : ((e = as(r.type, null, o, n, n.mode, c)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((d = e.child), !fd(e, c))) {
      var g = d.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : po), r(g, o) && e.ref === n.ref)
      )
        return ha(e, n, c);
    }
    return (
      (n.flags |= 1),
      (e = oa(d, o)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Rp(e, n, r, o, c) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (po(d, o) && e.ref === n.ref)
        if (((Rt = !1), (n.pendingProps = o = d), fd(e, c)))
          (e.flags & 131072) !== 0 && (Rt = !0);
        else return (n.lanes = e.lanes), ha(e, n, c);
    }
    return id(e, n, r, o, c);
  }
  function Op(e, n, r) {
    var o = n.pendingProps,
      c = o.children,
      d = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (((o = d !== null ? d.baseLanes | r : r), e !== null)) {
          for (c = n.child = e.child, d = 0; c !== null; )
            (d = d | c.lanes | c.childLanes), (c = c.sibling);
          n.childLanes = d & ~o;
        } else (n.childLanes = 0), (n.child = null);
        return kp(e, n, o, r);
      }
      if ((r & 536870912) !== 0)
        (n.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && ss(n, d !== null ? d.cachePool : null),
          d !== null ? Rm(n, d) : Iu(),
          gp(n);
      else
        return (
          (n.lanes = n.childLanes = 536870912),
          kp(e, n, d !== null ? d.baseLanes | r : r, r)
        );
    } else
      d !== null
        ? (ss(n, d.cachePool), Rm(n, d), Ha(), (n.memoizedState = null))
        : (e !== null && ss(n, null), Iu(), Ha());
    return Mt(e, n, c, r), n.child;
  }
  function kp(e, n, r, o) {
    var c = Du();
    return (
      (c = c === null ? null : { parent: Tt._currentValue, pool: c }),
      (n.memoizedState = { baseLanes: r, cachePool: c }),
      e !== null && ss(n, null),
      Iu(),
      gp(n),
      e !== null && wo(e, n, o, !0),
      null
    );
  }
  function Ts(e, n) {
    var r = n.ref;
    if (r === null) e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object") throw Error(l(284));
      (e === null || e.ref !== r) && (n.flags |= 4194816);
    }
  }
  function id(e, n, r, o, c) {
    return (
      Mr(n),
      (r = Pu(e, n, r, o, void 0, c)),
      (o = Vu()),
      e !== null && !Rt
        ? (qu(e, n, c), ha(e, n, c))
        : (Ke && o && Su(n), (n.flags |= 1), Mt(e, n, r, c), n.child)
    );
  }
  function Np(e, n, r, o, c, d) {
    return (
      Mr(n),
      (n.updateQueue = null),
      (r = km(n, o, r, c)),
      Om(e),
      (o = Vu()),
      e !== null && !Rt
        ? (qu(e, n, d), ha(e, n, d))
        : (Ke && o && Su(n), (n.flags |= 1), Mt(e, n, r, d), n.child)
    );
  }
  function Dp(e, n, r, o, c) {
    if ((Mr(n), n.stateNode === null)) {
      var d = fi,
        g = r.contextType;
      typeof g == "object" && g !== null && (d = Ht(g)),
        (d = new r(o, d)),
        (n.memoizedState =
          d.state !== null && d.state !== void 0 ? d.state : null),
        (d.updater = ad),
        (n.stateNode = d),
        (d._reactInternals = n),
        (d = n.stateNode),
        (d.props = o),
        (d.state = n.memoizedState),
        (d.refs = {}),
        ju(n),
        (g = r.contextType),
        (d.context = typeof g == "object" && g !== null ? Ht(g) : fi),
        (d.state = n.memoizedState),
        (g = r.getDerivedStateFromProps),
        typeof g == "function" && (nd(n, r, g, o), (d.state = n.memoizedState)),
        typeof r.getDerivedStateFromProps == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function" ||
          (typeof d.UNSAFE_componentWillMount != "function" &&
            typeof d.componentWillMount != "function") ||
          ((g = d.state),
          typeof d.componentWillMount == "function" && d.componentWillMount(),
          typeof d.UNSAFE_componentWillMount == "function" &&
            d.UNSAFE_componentWillMount(),
          g !== d.state && ad.enqueueReplaceState(d, d.state, null),
          Ao(n, o, d, c),
          Co(),
          (d.state = n.memoizedState)),
        typeof d.componentDidMount == "function" && (n.flags |= 4194308),
        (o = !0);
    } else if (e === null) {
      d = n.stateNode;
      var v = n.memoizedProps,
        _ = zr(r, v);
      d.props = _;
      var j = d.context,
        G = r.contextType;
      (g = fi), typeof G == "object" && G !== null && (g = Ht(G));
      var X = r.getDerivedStateFromProps;
      (G =
        typeof X == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function"),
        (v = n.pendingProps !== v),
        G ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((v || j !== g) && vp(n, d, o, g)),
        (La = !1);
      var L = n.memoizedState;
      (d.state = L),
        Ao(n, o, d, c),
        Co(),
        (j = n.memoizedState),
        v || L !== j || La
          ? (typeof X == "function" && (nd(n, r, X, o), (j = n.memoizedState)),
            (_ = La || yp(n, r, _, o, L, j, g))
              ? (G ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = o),
                (n.memoizedState = j)),
            (d.props = o),
            (d.state = j),
            (d.context = g),
            (o = _))
          : (typeof d.componentDidMount == "function" && (n.flags |= 4194308),
            (o = !1));
    } else {
      (d = n.stateNode),
        Lu(e, n),
        (g = n.memoizedProps),
        (G = zr(r, g)),
        (d.props = G),
        (X = n.pendingProps),
        (L = d.context),
        (j = r.contextType),
        (_ = fi),
        typeof j == "object" && j !== null && (_ = Ht(j)),
        (v = r.getDerivedStateFromProps),
        (j =
          typeof v == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function") ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((g !== X || L !== _) && vp(n, d, o, _)),
        (La = !1),
        (L = n.memoizedState),
        (d.state = L),
        Ao(n, o, d, c),
        Co();
      var U = n.memoizedState;
      g !== X ||
      L !== U ||
      La ||
      (e !== null && e.dependencies !== null && os(e.dependencies))
        ? (typeof v == "function" && (nd(n, r, v, o), (U = n.memoizedState)),
          (G =
            La ||
            yp(n, r, G, o, L, U, _) ||
            (e !== null && e.dependencies !== null && os(e.dependencies)))
            ? (j ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(o, U, _),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(o, U, _)),
              typeof d.componentDidUpdate == "function" && (n.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (g === e.memoizedProps && L === e.memoizedState) ||
                (n.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (g === e.memoizedProps && L === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = o),
              (n.memoizedState = U)),
          (d.props = o),
          (d.state = U),
          (d.context = _),
          (o = G))
        : (typeof d.componentDidUpdate != "function" ||
            (g === e.memoizedProps && L === e.memoizedState) ||
            (n.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (g === e.memoizedProps && L === e.memoizedState) ||
            (n.flags |= 1024),
          (o = !1));
    }
    return (
      (d = o),
      Ts(e, n),
      (o = (n.flags & 128) !== 0),
      d || o
        ? ((d = n.stateNode),
          (r =
            o && typeof r.getDerivedStateFromError != "function"
              ? null
              : d.render()),
          (n.flags |= 1),
          e !== null && o
            ? ((n.child = _i(n, e.child, null, c)),
              (n.child = _i(n, null, r, c)))
            : Mt(e, n, r, c),
          (n.memoizedState = d.state),
          (e = n.child))
        : (e = ha(e, n, c)),
      e
    );
  }
  function Mp(e, n, r, o) {
    return vo(), (n.flags |= 256), Mt(e, n, r, o), n.child;
  }
  var od = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function ld(e) {
    return { baseLanes: e, cachePool: wm() };
  }
  function sd(e, n, r) {
    return (e = e !== null ? e.childLanes & ~r : 0), n && (e |= Cn), e;
  }
  function jp(e, n, r) {
    var o = n.pendingProps,
      c = !1,
      d = (n.flags & 128) !== 0,
      g;
    if (
      ((g = d) ||
        (g =
          e !== null && e.memoizedState === null ? !1 : (Ct.current & 2) !== 0),
      g && ((c = !0), (n.flags &= -129)),
      (g = (n.flags & 32) !== 0),
      (n.flags &= -33),
      e === null)
    ) {
      if (Ke) {
        if ((c ? Ba(n) : Ha(), Ke)) {
          var v = mt,
            _;
          if ((_ = v)) {
            e: {
              for (_ = v, v = $n; _.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break e;
                }
                if (((_ = In(_.nextSibling)), _ === null)) {
                  v = null;
                  break e;
                }
              }
              v = _;
            }
            v !== null
              ? ((n.memoizedState = {
                  dehydrated: v,
                  treeContext: Rr !== null ? { id: la, overflow: sa } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (_ = on(18, null, null, 0)),
                (_.stateNode = v),
                (_.return = n),
                (n.child = _),
                (Gt = n),
                (mt = null),
                (_ = !0))
              : (_ = !1);
          }
          _ || Nr(n);
        }
        if (
          ((v = n.memoizedState),
          v !== null && ((v = v.dehydrated), v !== null))
        )
          return $d(v) ? (n.lanes = 32) : (n.lanes = 536870912), null;
        fa(n);
      }
      return (
        (v = o.children),
        (o = o.fallback),
        c
          ? (Ha(),
            (c = n.mode),
            (v = Cs({ mode: "hidden", children: v }, c)),
            (o = Ar(o, c, r, null)),
            (v.return = n),
            (o.return = n),
            (v.sibling = o),
            (n.child = v),
            (c = n.child),
            (c.memoizedState = ld(r)),
            (c.childLanes = sd(e, g, r)),
            (n.memoizedState = od),
            o)
          : (Ba(n), cd(n, v))
      );
    }
    if (
      ((_ = e.memoizedState), _ !== null && ((v = _.dehydrated), v !== null))
    ) {
      if (d)
        n.flags & 256
          ? (Ba(n), (n.flags &= -257), (n = ud(e, n, r)))
          : n.memoizedState !== null
          ? (Ha(), (n.child = e.child), (n.flags |= 128), (n = null))
          : (Ha(),
            (c = o.fallback),
            (v = n.mode),
            (o = Cs({ mode: "visible", children: o.children }, v)),
            (c = Ar(c, v, r, null)),
            (c.flags |= 2),
            (o.return = n),
            (c.return = n),
            (o.sibling = c),
            (n.child = o),
            _i(n, e.child, null, r),
            (o = n.child),
            (o.memoizedState = ld(r)),
            (o.childLanes = sd(e, g, r)),
            (n.memoizedState = od),
            (n = c));
      else if ((Ba(n), $d(v))) {
        if (((g = v.nextSibling && v.nextSibling.dataset), g)) var j = g.dgst;
        (g = j),
          (o = Error(l(419))),
          (o.stack = ""),
          (o.digest = g),
          bo({ value: o, source: null, stack: null }),
          (n = ud(e, n, r));
      } else if (
        (Rt || wo(e, n, r, !1), (g = (r & e.childLanes) !== 0), Rt || g)
      ) {
        if (
          ((g = it),
          g !== null &&
            ((o = r & -r),
            (o = (o & 42) !== 0 ? 1 : ao(o)),
            (o = (o & (g.suspendedLanes | r)) !== 0 ? 0 : o),
            o !== 0 && o !== _.retryLane))
        )
          throw ((_.retryLane = o), di(e, o), dn(g, e, o), Tp);
        v.data === "$?" || Rd(), (n = ud(e, n, r));
      } else
        v.data === "$?"
          ? ((n.flags |= 192), (n.child = e.child), (n = null))
          : ((e = _.treeContext),
            (mt = In(v.nextSibling)),
            (Gt = n),
            (Ke = !0),
            (kr = null),
            ($n = !1),
            e !== null &&
              ((En[Sn++] = la),
              (En[Sn++] = sa),
              (En[Sn++] = Rr),
              (la = e.id),
              (sa = e.overflow),
              (Rr = n)),
            (n = cd(n, o.children)),
            (n.flags |= 4096));
      return n;
    }
    return c
      ? (Ha(),
        (c = o.fallback),
        (v = n.mode),
        (_ = e.child),
        (j = _.sibling),
        (o = oa(_, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = _.subtreeFlags & 65011712),
        j !== null ? (c = oa(j, c)) : ((c = Ar(c, v, r, null)), (c.flags |= 2)),
        (c.return = n),
        (o.return = n),
        (o.sibling = c),
        (n.child = o),
        (o = c),
        (c = n.child),
        (v = e.child.memoizedState),
        v === null
          ? (v = ld(r))
          : ((_ = v.cachePool),
            _ !== null
              ? ((j = Tt._currentValue),
                (_ = _.parent !== j ? { parent: j, pool: j } : _))
              : (_ = wm()),
            (v = { baseLanes: v.baseLanes | r, cachePool: _ })),
        (c.memoizedState = v),
        (c.childLanes = sd(e, g, r)),
        (n.memoizedState = od),
        o)
      : (Ba(n),
        (r = e.child),
        (e = r.sibling),
        (r = oa(r, { mode: "visible", children: o.children })),
        (r.return = n),
        (r.sibling = null),
        e !== null &&
          ((g = n.deletions),
          g === null ? ((n.deletions = [e]), (n.flags |= 16)) : g.push(e)),
        (n.child = r),
        (n.memoizedState = null),
        r);
  }
  function cd(e, n) {
    return (
      (n = Cs({ mode: "visible", children: n }, e.mode)),
      (n.return = e),
      (e.child = n)
    );
  }
  function Cs(e, n) {
    return (
      (e = on(22, e, null, n)),
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
  function ud(e, n, r) {
    return (
      _i(n, e.child, null, r),
      (e = cd(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function Lp(e, n, r) {
    e.lanes |= n;
    var o = e.alternate;
    o !== null && (o.lanes |= n), Ru(e.return, n, r);
  }
  function dd(e, n, r, o, c) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: r,
          tailMode: c,
        })
      : ((d.isBackwards = n),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = o),
        (d.tail = r),
        (d.tailMode = c));
  }
  function zp(e, n, r) {
    var o = n.pendingProps,
      c = o.revealOrder,
      d = o.tail;
    if ((Mt(e, n, o.children, r), (o = Ct.current), (o & 2) !== 0))
      (o = (o & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Lp(e, r, n);
          else if (e.tag === 19) Lp(e, r, n);
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
      o &= 1;
    }
    switch ((ee(Ct, o), c)) {
      case "forwards":
        for (r = n.child, c = null; r !== null; )
          (e = r.alternate),
            e !== null && _s(e) === null && (c = r),
            (r = r.sibling);
        (r = c),
          r === null
            ? ((c = n.child), (n.child = null))
            : ((c = r.sibling), (r.sibling = null)),
          dd(n, !1, c, r, d);
        break;
      case "backwards":
        for (r = null, c = n.child, n.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && _s(e) === null)) {
            n.child = c;
            break;
          }
          (e = c.sibling), (c.sibling = r), (r = c), (c = e);
        }
        dd(n, !0, r, null, d);
        break;
      case "together":
        dd(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function ha(e, n, r) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      ($a |= n.lanes),
      (r & n.childLanes) === 0)
    )
      if (e !== null) {
        if ((wo(e, n, r, !1), (r & n.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && n.child !== e.child) throw Error(l(153));
    if (n.child !== null) {
      for (
        e = n.child, r = oa(e, e.pendingProps), n.child = r, r.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = oa(e, e.pendingProps)),
          (r.return = n);
      r.sibling = null;
    }
    return n.child;
  }
  function fd(e, n) {
    return (e.lanes & n) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && os(e)));
  }
  function l1(e, n, r) {
    switch (n.tag) {
      case 3:
        ke(n, n.stateNode.containerInfo),
          ja(n, Tt, e.memoizedState.cache),
          vo();
        break;
      case 27:
      case 5:
        We(n);
        break;
      case 4:
        ke(n, n.stateNode.containerInfo);
        break;
      case 10:
        ja(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (Ba(n), (n.flags |= 128), null)
            : (r & n.child.childLanes) !== 0
            ? jp(e, n, r)
            : (Ba(n), (e = ha(e, n, r)), e !== null ? e.sibling : null);
        Ba(n);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (
          ((o = (r & n.childLanes) !== 0),
          o || (wo(e, n, r, !1), (o = (r & n.childLanes) !== 0)),
          c)
        ) {
          if (o) return zp(e, n, r);
          n.flags |= 128;
        }
        if (
          ((c = n.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          ee(Ct, Ct.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), Op(e, n, r);
      case 24:
        ja(n, Tt, e.memoizedState.cache);
    }
    return ha(e, n, r);
  }
  function Up(e, n, r) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps) Rt = !0;
      else {
        if (!fd(e, r) && (n.flags & 128) === 0) return (Rt = !1), l1(e, n, r);
        Rt = (e.flags & 131072) !== 0;
      }
    else (Rt = !1), Ke && (n.flags & 1048576) !== 0 && hm(n, is, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        e: {
          e = n.pendingProps;
          var o = n.elementType,
            c = o._init;
          if (((o = c(o._payload)), (n.type = o), typeof o == "function"))
            xu(o)
              ? ((e = zr(o, e)), (n.tag = 1), (n = Dp(null, n, o, e, r)))
              : ((n.tag = 0), (n = id(null, n, o, e, r)));
          else {
            if (o != null) {
              if (((c = o.$$typeof), c === Q)) {
                (n.tag = 11), (n = Cp(null, n, o, e, r));
                break e;
              } else if (c === ne) {
                (n.tag = 14), (n = Ap(null, n, o, e, r));
                break e;
              }
            }
            throw ((n = oe(o) || o), Error(l(306, n, "")));
          }
        }
        return n;
      case 0:
        return id(e, n, n.type, n.pendingProps, r);
      case 1:
        return (o = n.type), (c = zr(o, n.pendingProps)), Dp(e, n, o, c, r);
      case 3:
        e: {
          if ((ke(n, n.stateNode.containerInfo), e === null))
            throw Error(l(387));
          o = n.pendingProps;
          var d = n.memoizedState;
          (c = d.element), Lu(e, n), Ao(n, o, null, r);
          var g = n.memoizedState;
          if (
            ((o = g.cache),
            ja(n, Tt, o),
            o !== d.cache && Ou(n, [Tt], r, !0),
            Co(),
            (o = g.element),
            d.isDehydrated)
          )
            if (
              ((d = { element: o, isDehydrated: !1, cache: g.cache }),
              (n.updateQueue.baseState = d),
              (n.memoizedState = d),
              n.flags & 256)
            ) {
              n = Mp(e, n, o, r);
              break e;
            } else if (o !== c) {
              (c = xn(Error(l(424)), n)), bo(c), (n = Mp(e, n, o, r));
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
                mt = In(e.firstChild),
                  Gt = n,
                  Ke = !0,
                  kr = null,
                  $n = !0,
                  r = pp(n, null, o, r),
                  n.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
            }
          else {
            if ((vo(), o === c)) {
              n = ha(e, n, r);
              break e;
            }
            Mt(e, n, o, r);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          Ts(e, n),
          e === null
            ? (r = Pg(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = r)
              : Ke ||
                ((r = n.type),
                (e = n.pendingProps),
                (o = Hs(fe.current).createElement(r)),
                (o[K] = n),
                (o[te] = e),
                Lt(o, r, e),
                Ge(o),
                (n.stateNode = o))
            : (n.memoizedState = Pg(
                n.type,
                e.memoizedProps,
                n.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          We(n),
          e === null &&
            Ke &&
            ((o = n.stateNode = Ig(n.type, n.pendingProps, fe.current)),
            (Gt = n),
            ($n = !0),
            (c = mt),
            Fa(n.type) ? ((Yd = c), (mt = In(o.firstChild))) : (mt = c)),
          Mt(e, n, n.pendingProps.children, r),
          Ts(e, n),
          e === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          e === null &&
            Ke &&
            ((c = o = mt) &&
              ((o = L1(o, n.type, n.pendingProps, $n)),
              o !== null
                ? ((n.stateNode = o),
                  (Gt = n),
                  (mt = In(o.firstChild)),
                  ($n = !1),
                  (c = !0))
                : (c = !1)),
            c || Nr(n)),
          We(n),
          (c = n.type),
          (d = n.pendingProps),
          (g = e !== null ? e.memoizedProps : null),
          (o = d.children),
          Vd(c, d) ? (o = null) : g !== null && Vd(c, g) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((c = Pu(e, n, Ww, null, null, r)), (Fo._currentValue = c)),
          Ts(e, n),
          Mt(e, n, o, r),
          n.child
        );
      case 6:
        return (
          e === null &&
            Ke &&
            ((e = r = mt) &&
              ((r = z1(r, n.pendingProps, $n)),
              r !== null
                ? ((n.stateNode = r), (Gt = n), (mt = null), (e = !0))
                : (e = !1)),
            e || Nr(n)),
          null
        );
      case 13:
        return jp(e, n, r);
      case 4:
        return (
          ke(n, n.stateNode.containerInfo),
          (o = n.pendingProps),
          e === null ? (n.child = _i(n, null, o, r)) : Mt(e, n, o, r),
          n.child
        );
      case 11:
        return Cp(e, n, n.type, n.pendingProps, r);
      case 7:
        return Mt(e, n, n.pendingProps, r), n.child;
      case 8:
        return Mt(e, n, n.pendingProps.children, r), n.child;
      case 12:
        return Mt(e, n, n.pendingProps.children, r), n.child;
      case 10:
        return (
          (o = n.pendingProps),
          ja(n, n.type, o.value),
          Mt(e, n, o.children, r),
          n.child
        );
      case 9:
        return (
          (c = n.type._context),
          (o = n.pendingProps.children),
          Mr(n),
          (c = Ht(c)),
          (o = o(c)),
          (n.flags |= 1),
          Mt(e, n, o, r),
          n.child
        );
      case 14:
        return Ap(e, n, n.type, n.pendingProps, r);
      case 15:
        return Rp(e, n, n.type, n.pendingProps, r);
      case 19:
        return zp(e, n, r);
      case 31:
        return (
          (o = n.pendingProps),
          (r = n.mode),
          (o = { mode: o.mode, children: o.children }),
          e === null
            ? ((r = Cs(o, r)),
              (r.ref = n.ref),
              (n.child = r),
              (r.return = n),
              (n = r))
            : ((r = oa(e.child, o)),
              (r.ref = n.ref),
              (n.child = r),
              (r.return = n),
              (n = r)),
          n
        );
      case 22:
        return Op(e, n, r);
      case 24:
        return (
          Mr(n),
          (o = Ht(Tt)),
          e === null
            ? ((c = Du()),
              c === null &&
                ((c = it),
                (d = ku()),
                (c.pooledCache = d),
                d.refCount++,
                d !== null && (c.pooledCacheLanes |= r),
                (c = d)),
              (n.memoizedState = { parent: o, cache: c }),
              ju(n),
              ja(n, Tt, c))
            : ((e.lanes & r) !== 0 && (Lu(e, n), Ao(n, null, null, r), Co()),
              (c = e.memoizedState),
              (d = n.memoizedState),
              c.parent !== o
                ? ((c = { parent: o, cache: o }),
                  (n.memoizedState = c),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = c),
                  ja(n, Tt, o))
                : ((o = d.cache),
                  ja(n, Tt, o),
                  o !== c.cache && Ou(n, [Tt], r, !0))),
          Mt(e, n, n.pendingProps.children, r),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(l(156, n.tag));
  }
  function ma(e) {
    e.flags |= 4;
  }
  function Ip(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Yg(n))) {
      if (
        ((n = Tn.current),
        n !== null &&
          ((He & 4194048) === He
            ? Yn !== null
            : ((He & 62914560) !== He && (He & 536870912) === 0) || n !== Yn))
      )
        throw ((So = Mu), xm);
      e.flags |= 8192;
    }
  }
  function As(e, n) {
    n !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((n = e.tag !== 22 ? ql() : 536870912), (e.lanes |= n), (Ci |= n));
  }
  function jo(e, n) {
    if (!Ke)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), (r = r.sibling);
          o === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function ht(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      o = 0;
    if (n)
      for (var c = e.child; c !== null; )
        (r |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags & 65011712),
          (o |= c.flags & 65011712),
          (c.return = e),
          (c = c.sibling);
    else
      for (c = e.child; c !== null; )
        (r |= c.lanes | c.childLanes),
          (o |= c.subtreeFlags),
          (o |= c.flags),
          (c.return = e),
          (c = c.sibling);
    return (e.subtreeFlags |= o), (e.childLanes = r), n;
  }
  function s1(e, n, r) {
    var o = n.pendingProps;
    switch ((Tu(n), n.tag)) {
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
        return ht(n), null;
      case 1:
        return ht(n), null;
      case 3:
        return (
          (r = n.stateNode),
          (o = null),
          e !== null && (o = e.memoizedState.cache),
          n.memoizedState.cache !== o && (n.flags |= 2048),
          ua(Tt),
          st(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (yo(n)
              ? ma(n)
              : e === null ||
                (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), gm())),
          ht(n),
          null
        );
      case 26:
        return (
          (r = n.memoizedState),
          e === null
            ? (ma(n),
              r !== null ? (ht(n), Ip(n, r)) : (ht(n), (n.flags &= -16777217)))
            : r
            ? r !== e.memoizedState
              ? (ma(n), ht(n), Ip(n, r))
              : (ht(n), (n.flags &= -16777217))
            : (e.memoizedProps !== o && ma(n), ht(n), (n.flags &= -16777217)),
          null
        );
      case 27:
        xt(n), (r = fe.current);
        var c = n.type;
        if (e !== null && n.stateNode != null) e.memoizedProps !== o && ma(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(l(166));
            return ht(n), null;
          }
          (e = se.current),
            yo(n) ? mm(n) : ((e = Ig(c, o, r)), (n.stateNode = e), ma(n));
        }
        return ht(n), null;
      case 5:
        if ((xt(n), (r = n.type), e !== null && n.stateNode != null))
          e.memoizedProps !== o && ma(n);
        else {
          if (!o) {
            if (n.stateNode === null) throw Error(l(166));
            return ht(n), null;
          }
          if (((e = se.current), yo(n))) mm(n);
          else {
            switch (((c = Hs(fe.current)), e)) {
              case 1:
                e = c.createElementNS("http://www.w3.org/2000/svg", r);
                break;
              case 2:
                e = c.createElementNS("http://www.w3.org/1998/Math/MathML", r);
                break;
              default:
                switch (r) {
                  case "svg":
                    e = c.createElementNS("http://www.w3.org/2000/svg", r);
                    break;
                  case "math":
                    e = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      r
                    );
                    break;
                  case "script":
                    (e = c.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof o.is == "string"
                        ? c.createElement("select", { is: o.is })
                        : c.createElement("select")),
                      o.multiple
                        ? (e.multiple = !0)
                        : o.size && (e.size = o.size);
                    break;
                  default:
                    e =
                      typeof o.is == "string"
                        ? c.createElement(r, { is: o.is })
                        : c.createElement(r);
                }
            }
            (e[K] = n), (e[te] = o);
            e: for (c = n.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) e.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                (c.child.return = c), (c = c.child);
                continue;
              }
              if (c === n) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === n) break e;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
            n.stateNode = e;
            e: switch ((Lt(e, r, o), r)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!o.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && ma(n);
          }
        }
        return ht(n), (n.flags &= -16777217), null;
      case 6:
        if (e && n.stateNode != null) e.memoizedProps !== o && ma(n);
        else {
          if (typeof o != "string" && n.stateNode === null) throw Error(l(166));
          if (((e = fe.current), yo(n))) {
            if (
              ((e = n.stateNode),
              (r = n.memoizedProps),
              (o = null),
              (c = Gt),
              c !== null)
            )
              switch (c.tag) {
                case 27:
                case 5:
                  o = c.memoizedProps;
              }
            (e[K] = n),
              (e = !!(
                e.nodeValue === r ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                Ng(e.nodeValue, r)
              )),
              e || Nr(n);
          } else (e = Hs(e).createTextNode(o)), (e[K] = n), (n.stateNode = e);
        }
        return ht(n), null;
      case 13:
        if (
          ((o = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((c = yo(n)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(l(318));
              if (
                ((c = n.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(l(317));
              c[K] = n;
            } else
              vo(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            ht(n), (c = !1);
          } else
            (c = gm()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = c),
              (c = !0);
          if (!c) return n.flags & 256 ? (fa(n), n) : (fa(n), null);
        }
        if ((fa(n), (n.flags & 128) !== 0)) return (n.lanes = r), n;
        if (
          ((r = o !== null), (e = e !== null && e.memoizedState !== null), r)
        ) {
          (o = n.child),
            (c = null),
            o.alternate !== null &&
              o.alternate.memoizedState !== null &&
              o.alternate.memoizedState.cachePool !== null &&
              (c = o.alternate.memoizedState.cachePool.pool);
          var d = null;
          o.memoizedState !== null &&
            o.memoizedState.cachePool !== null &&
            (d = o.memoizedState.cachePool.pool),
            d !== c && (o.flags |= 2048);
        }
        return (
          r !== e && r && (n.child.flags |= 8192),
          As(n, n.updateQueue),
          ht(n),
          null
        );
      case 4:
        return st(), e === null && Ud(n.stateNode.containerInfo), ht(n), null;
      case 10:
        return ua(n.type), ht(n), null;
      case 19:
        if ((ie(Ct), (c = n.memoizedState), c === null)) return ht(n), null;
        if (((o = (n.flags & 128) !== 0), (d = c.rendering), d === null))
          if (o) jo(c, !1);
          else {
            if (pt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((d = _s(e)), d !== null)) {
                  for (
                    n.flags |= 128,
                      jo(c, !1),
                      e = d.updateQueue,
                      n.updateQueue = e,
                      As(n, e),
                      n.subtreeFlags = 0,
                      e = r,
                      r = n.child;
                    r !== null;

                  )
                    fm(r, e), (r = r.sibling);
                  return ee(Ct, (Ct.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              It() > ks &&
              ((n.flags |= 128), (o = !0), jo(c, !1), (n.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = _s(d)), e !== null)) {
              if (
                ((n.flags |= 128),
                (o = !0),
                (e = e.updateQueue),
                (n.updateQueue = e),
                As(n, e),
                jo(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !d.alternate &&
                  !Ke)
              )
                return ht(n), null;
            } else
              2 * It() - c.renderingStartTime > ks &&
                r !== 536870912 &&
                ((n.flags |= 128), (o = !0), jo(c, !1), (n.lanes = 4194304));
          c.isBackwards
            ? ((d.sibling = n.child), (n.child = d))
            : ((e = c.last),
              e !== null ? (e.sibling = d) : (n.child = d),
              (c.last = d));
        }
        return c.tail !== null
          ? ((n = c.tail),
            (c.rendering = n),
            (c.tail = n.sibling),
            (c.renderingStartTime = It()),
            (n.sibling = null),
            (e = Ct.current),
            ee(Ct, o ? (e & 1) | 2 : e & 1),
            n)
          : (ht(n), null);
      case 22:
      case 23:
        return (
          fa(n),
          Bu(),
          (o = n.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== o && (n.flags |= 8192)
            : o && (n.flags |= 8192),
          o
            ? (r & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (ht(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : ht(n),
          (r = n.updateQueue),
          r !== null && As(n, r.retryQueue),
          (r = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (r = e.memoizedState.cachePool.pool),
          (o = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (o = n.memoizedState.cachePool.pool),
          o !== r && (n.flags |= 2048),
          e !== null && ie(jr),
          null
        );
      case 24:
        return (
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          n.memoizedState.cache !== r && (n.flags |= 2048),
          ua(Tt),
          ht(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, n.tag));
  }
  function c1(e, n) {
    switch ((Tu(n), n.tag)) {
      case 1:
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          ua(Tt),
          st(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((n.flags = (e & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return xt(n), null;
      case 13:
        if (
          (fa(n), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(l(340));
          vo();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return ie(Ct), null;
      case 4:
        return st(), null;
      case 10:
        return ua(n.type), null;
      case 22:
      case 23:
        return (
          fa(n),
          Bu(),
          e !== null && ie(jr),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 24:
        return ua(Tt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Bp(e, n) {
    switch ((Tu(n), n.tag)) {
      case 3:
        ua(Tt), st();
        break;
      case 26:
      case 27:
      case 5:
        xt(n);
        break;
      case 4:
        st();
        break;
      case 13:
        fa(n);
        break;
      case 19:
        ie(Ct);
        break;
      case 10:
        ua(n.type);
        break;
      case 22:
      case 23:
        fa(n), Bu(), e !== null && ie(jr);
        break;
      case 24:
        ua(Tt);
    }
  }
  function Lo(e, n) {
    try {
      var r = n.updateQueue,
        o = r !== null ? r.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        r = c;
        do {
          if ((r.tag & e) === e) {
            o = void 0;
            var d = r.create,
              g = r.inst;
            (o = d()), (g.destroy = o);
          }
          r = r.next;
        } while (r !== c);
      }
    } catch (v) {
      at(n, n.return, v);
    }
  }
  function Pa(e, n, r) {
    try {
      var o = n.updateQueue,
        c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var d = c.next;
        o = d;
        do {
          if ((o.tag & e) === e) {
            var g = o.inst,
              v = g.destroy;
            if (v !== void 0) {
              (g.destroy = void 0), (c = n);
              var _ = r,
                j = v;
              try {
                j();
              } catch (G) {
                at(c, _, G);
              }
            }
          }
          o = o.next;
        } while (o !== d);
      }
    } catch (G) {
      at(n, n.return, G);
    }
  }
  function Hp(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var r = e.stateNode;
      try {
        Am(n, r);
      } catch (o) {
        at(e, e.return, o);
      }
    }
  }
  function Pp(e, n, r) {
    (r.props = zr(e.type, e.memoizedProps)), (r.state = e.memoizedState);
    try {
      r.componentWillUnmount();
    } catch (o) {
      at(e, n, o);
    }
  }
  function zo(e, n) {
    try {
      var r = e.ref;
      if (r !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof r == "function" ? (e.refCleanup = r(o)) : (r.current = o);
      }
    } catch (c) {
      at(e, n, c);
    }
  }
  function Xn(e, n) {
    var r = e.ref,
      o = e.refCleanup;
    if (r !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (c) {
          at(e, n, c);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof r == "function")
        try {
          r(null);
        } catch (c) {
          at(e, n, c);
        }
      else r.current = null;
  }
  function Vp(e) {
    var n = e.type,
      r = e.memoizedProps,
      o = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          r.autoFocus && o.focus();
          break e;
        case "img":
          r.src ? (o.src = r.src) : r.srcSet && (o.srcset = r.srcSet);
      }
    } catch (c) {
      at(e, e.return, c);
    }
  }
  function hd(e, n, r) {
    try {
      var o = e.stateNode;
      k1(o, e.type, r, n), (o[te] = n);
    } catch (c) {
      at(e, e.return, c);
    }
  }
  function qp(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Fa(e.type)) ||
      e.tag === 4
    );
  }
  function md(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || qp(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && Fa(e.type)) ||
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
  function pd(e, n, r) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode),
        n
          ? (r.nodeType === 9
              ? r.body
              : r.nodeName === "HTML"
              ? r.ownerDocument.body
              : r
            ).insertBefore(e, n)
          : ((n =
              r.nodeType === 9
                ? r.body
                : r.nodeName === "HTML"
                ? r.ownerDocument.body
                : r),
            n.appendChild(e),
            (r = r._reactRootContainer),
            r != null || n.onclick !== null || (n.onclick = Bs));
    else if (
      o !== 4 &&
      (o === 27 && Fa(e.type) && ((r = e.stateNode), (n = null)),
      (e = e.child),
      e !== null)
    )
      for (pd(e, n, r), e = e.sibling; e !== null; )
        pd(e, n, r), (e = e.sibling);
  }
  function Rs(e, n, r) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode), n ? r.insertBefore(e, n) : r.appendChild(e);
    else if (
      o !== 4 &&
      (o === 27 && Fa(e.type) && (r = e.stateNode), (e = e.child), e !== null)
    )
      for (Rs(e, n, r), e = e.sibling; e !== null; )
        Rs(e, n, r), (e = e.sibling);
  }
  function Gp(e) {
    var n = e.stateNode,
      r = e.memoizedProps;
    try {
      for (var o = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      Lt(n, o, r), (n[K] = e), (n[te] = r);
    } catch (d) {
      at(e, e.return, d);
    }
  }
  var pa = !1,
    yt = !1,
    gd = !1,
    $p = typeof WeakSet == "function" ? WeakSet : Set,
    Ot = null;
  function u1(e, n) {
    if (((e = e.containerInfo), (Hd = Ys), (e = nm(e)), mu(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var o = r.getSelection && r.getSelection();
          if (o && o.rangeCount !== 0) {
            r = o.anchorNode;
            var c = o.anchorOffset,
              d = o.focusNode;
            o = o.focusOffset;
            try {
              r.nodeType, d.nodeType;
            } catch {
              r = null;
              break e;
            }
            var g = 0,
              v = -1,
              _ = -1,
              j = 0,
              G = 0,
              X = e,
              L = null;
            t: for (;;) {
              for (
                var U;
                X !== r || (c !== 0 && X.nodeType !== 3) || (v = g + c),
                  X !== d || (o !== 0 && X.nodeType !== 3) || (_ = g + o),
                  X.nodeType === 3 && (g += X.nodeValue.length),
                  (U = X.firstChild) !== null;

              )
                (L = X), (X = U);
              for (;;) {
                if (X === e) break t;
                if (
                  (L === r && ++j === c && (v = g),
                  L === d && ++G === o && (_ = g),
                  (U = X.nextSibling) !== null)
                )
                  break;
                (X = L), (L = X.parentNode);
              }
              X = U;
            }
            r = v === -1 || _ === -1 ? null : { start: v, end: _ };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Pd = { focusedElem: e, selectionRange: r }, Ys = !1, Ot = n;
      Ot !== null;

    )
      if (
        ((n = Ot), (e = n.child), (n.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = n), (Ot = e);
      else
        for (; Ot !== null; ) {
          switch (((n = Ot), (d = n.alternate), (e = n.flags), n.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && d !== null) {
                (e = void 0),
                  (r = n),
                  (c = d.memoizedProps),
                  (d = d.memoizedState),
                  (o = r.stateNode);
                try {
                  var Ae = zr(r.type, c, r.elementType === r.type);
                  (e = o.getSnapshotBeforeUpdate(Ae, d)),
                    (o.__reactInternalSnapshotBeforeUpdate = e);
                } catch (xe) {
                  at(r, r.return, xe);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = n.stateNode.containerInfo), (r = e.nodeType), r === 9)
                )
                  Gd(e);
                else if (r === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Gd(e);
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
              if ((e & 1024) !== 0) throw Error(l(163));
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (Ot = e);
            break;
          }
          Ot = n.return;
        }
  }
  function Yp(e, n, r) {
    var o = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        Va(e, r), o & 4 && Lo(5, r);
        break;
      case 1:
        if ((Va(e, r), o & 4))
          if (((e = r.stateNode), n === null))
            try {
              e.componentDidMount();
            } catch (g) {
              at(r, r.return, g);
            }
          else {
            var c = zr(r.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              e.componentDidUpdate(c, n, e.__reactInternalSnapshotBeforeUpdate);
            } catch (g) {
              at(r, r.return, g);
            }
          }
        o & 64 && Hp(r), o & 512 && zo(r, r.return);
        break;
      case 3:
        if ((Va(e, r), o & 64 && ((e = r.updateQueue), e !== null))) {
          if (((n = null), r.child !== null))
            switch (r.child.tag) {
              case 27:
              case 5:
                n = r.child.stateNode;
                break;
              case 1:
                n = r.child.stateNode;
            }
          try {
            Am(e, n);
          } catch (g) {
            at(r, r.return, g);
          }
        }
        break;
      case 27:
        n === null && o & 4 && Gp(r);
      case 26:
      case 5:
        Va(e, r), n === null && o & 4 && Vp(r), o & 512 && zo(r, r.return);
        break;
      case 12:
        Va(e, r);
        break;
      case 13:
        Va(e, r),
          o & 4 && Fp(e, r),
          o & 64 &&
            ((e = r.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((r = b1.bind(null, r)), U1(e, r))));
        break;
      case 22:
        if (((o = r.memoizedState !== null || pa), !o)) {
          (n = (n !== null && n.memoizedState !== null) || yt), (c = pa);
          var d = yt;
          (pa = o),
            (yt = n) && !d ? qa(e, r, (r.subtreeFlags & 8772) !== 0) : Va(e, r),
            (pa = c),
            (yt = d);
        }
        break;
      case 30:
        break;
      default:
        Va(e, r);
    }
  }
  function Xp(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), Xp(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((n = e.stateNode), n !== null && me(n)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var ut = null,
    en = !1;
  function ga(e, n, r) {
    for (r = r.child; r !== null; ) Kp(e, n, r), (r = r.sibling);
  }
  function Kp(e, n, r) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(Ft, r);
      } catch {}
    switch (r.tag) {
      case 26:
        yt || Xn(r, n),
          ga(e, n, r),
          r.memoizedState
            ? r.memoizedState.count--
            : r.stateNode && ((r = r.stateNode), r.parentNode.removeChild(r));
        break;
      case 27:
        yt || Xn(r, n);
        var o = ut,
          c = en;
        Fa(r.type) && ((ut = r.stateNode), (en = !1)),
          ga(e, n, r),
          $o(r.stateNode),
          (ut = o),
          (en = c);
        break;
      case 5:
        yt || Xn(r, n);
      case 6:
        if (
          ((o = ut),
          (c = en),
          (ut = null),
          ga(e, n, r),
          (ut = o),
          (en = c),
          ut !== null)
        )
          if (en)
            try {
              (ut.nodeType === 9
                ? ut.body
                : ut.nodeName === "HTML"
                ? ut.ownerDocument.body
                : ut
              ).removeChild(r.stateNode);
            } catch (d) {
              at(r, n, d);
            }
          else
            try {
              ut.removeChild(r.stateNode);
            } catch (d) {
              at(r, n, d);
            }
        break;
      case 18:
        ut !== null &&
          (en
            ? ((e = ut),
              zg(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                r.stateNode
              ),
              Wo(e))
            : zg(ut, r.stateNode));
        break;
      case 4:
        (o = ut),
          (c = en),
          (ut = r.stateNode.containerInfo),
          (en = !0),
          ga(e, n, r),
          (ut = o),
          (en = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        yt || Pa(2, r, n), yt || Pa(4, r, n), ga(e, n, r);
        break;
      case 1:
        yt ||
          (Xn(r, n),
          (o = r.stateNode),
          typeof o.componentWillUnmount == "function" && Pp(r, n, o)),
          ga(e, n, r);
        break;
      case 21:
        ga(e, n, r);
        break;
      case 22:
        (yt = (o = yt) || r.memoizedState !== null), ga(e, n, r), (yt = o);
        break;
      default:
        ga(e, n, r);
    }
  }
  function Fp(e, n) {
    if (
      n.memoizedState === null &&
      ((e = n.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Wo(e);
      } catch (r) {
        at(n, n.return, r);
      }
  }
  function d1(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new $p()), n;
      case 22:
        return (
          (e = e.stateNode),
          (n = e._retryCache),
          n === null && (n = e._retryCache = new $p()),
          n
        );
      default:
        throw Error(l(435, e.tag));
    }
  }
  function yd(e, n) {
    var r = d1(e);
    n.forEach(function (o) {
      var c = w1.bind(null, e, o);
      r.has(o) || (r.add(o), o.then(c, c));
    });
  }
  function ln(e, n) {
    var r = n.deletions;
    if (r !== null)
      for (var o = 0; o < r.length; o++) {
        var c = r[o],
          d = e,
          g = n,
          v = g;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Fa(v.type)) {
                (ut = v.stateNode), (en = !1);
                break e;
              }
              break;
            case 5:
              (ut = v.stateNode), (en = !1);
              break e;
            case 3:
            case 4:
              (ut = v.stateNode.containerInfo), (en = !0);
              break e;
          }
          v = v.return;
        }
        if (ut === null) throw Error(l(160));
        Kp(d, g, c),
          (ut = null),
          (en = !1),
          (d = c.alternate),
          d !== null && (d.return = null),
          (c.return = null);
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; ) Qp(n, e), (n = n.sibling);
  }
  var Un = null;
  function Qp(e, n) {
    var r = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ln(n, e),
          sn(e),
          o & 4 && (Pa(3, e, e.return), Lo(3, e), Pa(5, e, e.return));
        break;
      case 1:
        ln(n, e),
          sn(e),
          o & 512 && (yt || r === null || Xn(r, r.return)),
          o & 64 &&
            pa &&
            ((e = e.updateQueue),
            e !== null &&
              ((o = e.callbacks),
              o !== null &&
                ((r = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = r === null ? o : r.concat(o)))));
        break;
      case 26:
        var c = Un;
        if (
          (ln(n, e),
          sn(e),
          o & 512 && (yt || r === null || Xn(r, r.return)),
          o & 4)
        ) {
          var d = r !== null ? r.memoizedState : null;
          if (((o = e.memoizedState), r === null))
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  (o = e.type),
                    (r = e.memoizedProps),
                    (c = c.ownerDocument || c);
                  t: switch (o) {
                    case "title":
                      (d = c.getElementsByTagName("title")[0]),
                        (!d ||
                          d[Se] ||
                          d[K] ||
                          d.namespaceURI === "http://www.w3.org/2000/svg" ||
                          d.hasAttribute("itemprop")) &&
                          ((d = c.createElement(o)),
                          c.head.insertBefore(
                            d,
                            c.querySelector("head > title")
                          )),
                        Lt(d, o, r),
                        (d[K] = e),
                        Ge(d),
                        (o = d);
                      break e;
                    case "link":
                      var g = Gg("link", "href", c).get(o + (r.href || ""));
                      if (g) {
                        for (var v = 0; v < g.length; v++)
                          if (
                            ((d = g[v]),
                            d.getAttribute("href") ===
                              (r.href == null || r.href === ""
                                ? null
                                : r.href) &&
                              d.getAttribute("rel") ===
                                (r.rel == null ? null : r.rel) &&
                              d.getAttribute("title") ===
                                (r.title == null ? null : r.title) &&
                              d.getAttribute("crossorigin") ===
                                (r.crossOrigin == null ? null : r.crossOrigin))
                          ) {
                            g.splice(v, 1);
                            break t;
                          }
                      }
                      (d = c.createElement(o)),
                        Lt(d, o, r),
                        c.head.appendChild(d);
                      break;
                    case "meta":
                      if (
                        (g = Gg("meta", "content", c).get(
                          o + (r.content || "")
                        ))
                      ) {
                        for (v = 0; v < g.length; v++)
                          if (
                            ((d = g[v]),
                            d.getAttribute("content") ===
                              (r.content == null ? null : "" + r.content) &&
                              d.getAttribute("name") ===
                                (r.name == null ? null : r.name) &&
                              d.getAttribute("property") ===
                                (r.property == null ? null : r.property) &&
                              d.getAttribute("http-equiv") ===
                                (r.httpEquiv == null ? null : r.httpEquiv) &&
                              d.getAttribute("charset") ===
                                (r.charSet == null ? null : r.charSet))
                          ) {
                            g.splice(v, 1);
                            break t;
                          }
                      }
                      (d = c.createElement(o)),
                        Lt(d, o, r),
                        c.head.appendChild(d);
                      break;
                    default:
                      throw Error(l(468, o));
                  }
                  (d[K] = e), Ge(d), (o = d);
                }
                e.stateNode = o;
              } else $g(c, e.type, e.stateNode);
            else e.stateNode = qg(c, o, e.memoizedProps);
          else
            d !== o
              ? (d === null
                  ? r.stateNode !== null &&
                    ((r = r.stateNode), r.parentNode.removeChild(r))
                  : d.count--,
                o === null
                  ? $g(c, e.type, e.stateNode)
                  : qg(c, o, e.memoizedProps))
              : o === null &&
                e.stateNode !== null &&
                hd(e, e.memoizedProps, r.memoizedProps);
        }
        break;
      case 27:
        ln(n, e),
          sn(e),
          o & 512 && (yt || r === null || Xn(r, r.return)),
          r !== null && o & 4 && hd(e, e.memoizedProps, r.memoizedProps);
        break;
      case 5:
        if (
          (ln(n, e),
          sn(e),
          o & 512 && (yt || r === null || Xn(r, r.return)),
          e.flags & 32)
        ) {
          c = e.stateNode;
          try {
            ri(c, "");
          } catch (U) {
            at(e, e.return, U);
          }
        }
        o & 4 &&
          e.stateNode != null &&
          ((c = e.memoizedProps), hd(e, c, r !== null ? r.memoizedProps : c)),
          o & 1024 && (gd = !0);
        break;
      case 6:
        if ((ln(n, e), sn(e), o & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          (o = e.memoizedProps), (r = e.stateNode);
          try {
            r.nodeValue = o;
          } catch (U) {
            at(e, e.return, U);
          }
        }
        break;
      case 3:
        if (
          ((qs = null),
          (c = Un),
          (Un = Ps(n.containerInfo)),
          ln(n, e),
          (Un = c),
          sn(e),
          o & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Wo(n.containerInfo);
          } catch (U) {
            at(e, e.return, U);
          }
        gd && ((gd = !1), Zp(e));
        break;
      case 4:
        (o = Un),
          (Un = Ps(e.stateNode.containerInfo)),
          ln(n, e),
          sn(e),
          (Un = o);
        break;
      case 12:
        ln(n, e), sn(e);
        break;
      case 13:
        ln(n, e),
          sn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (r !== null && r.memoizedState !== null) &&
            (Ed = It()),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), yd(e, o)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var _ = r !== null && r.memoizedState !== null,
          j = pa,
          G = yt;
        if (
          ((pa = j || c),
          (yt = G || _),
          ln(n, e),
          (yt = G),
          (pa = j),
          sn(e),
          o & 8192)
        )
          e: for (
            n = e.stateNode,
              n._visibility = c ? n._visibility & -2 : n._visibility | 1,
              c && (r === null || _ || pa || yt || Ur(e)),
              r = null,
              n = e;
            ;

          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (r === null) {
                _ = r = n;
                try {
                  if (((d = _.stateNode), c))
                    (g = d.style),
                      typeof g.setProperty == "function"
                        ? g.setProperty("display", "none", "important")
                        : (g.display = "none");
                  else {
                    v = _.stateNode;
                    var X = _.memoizedProps.style,
                      L =
                        X != null && X.hasOwnProperty("display")
                          ? X.display
                          : null;
                    v.style.display =
                      L == null || typeof L == "boolean" ? "" : ("" + L).trim();
                  }
                } catch (U) {
                  at(_, _.return, U);
                }
              }
            } else if (n.tag === 6) {
              if (r === null) {
                _ = n;
                try {
                  _.stateNode.nodeValue = c ? "" : _.memoizedProps;
                } catch (U) {
                  at(_, _.return, U);
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
              r === n && (r = null), (n = n.return);
            }
            r === n && (r = null),
              (n.sibling.return = n.return),
              (n = n.sibling);
          }
        o & 4 &&
          ((o = e.updateQueue),
          o !== null &&
            ((r = o.retryQueue),
            r !== null && ((o.retryQueue = null), yd(e, r))));
        break;
      case 19:
        ln(n, e),
          sn(e),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), yd(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ln(n, e), sn(e);
    }
  }
  function sn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var r, o = e.return; o !== null; ) {
          if (qp(o)) {
            r = o;
            break;
          }
          o = o.return;
        }
        if (r == null) throw Error(l(160));
        switch (r.tag) {
          case 27:
            var c = r.stateNode,
              d = md(e);
            Rs(e, d, c);
            break;
          case 5:
            var g = r.stateNode;
            r.flags & 32 && (ri(g, ""), (r.flags &= -33));
            var v = md(e);
            Rs(e, v, g);
            break;
          case 3:
          case 4:
            var _ = r.stateNode.containerInfo,
              j = md(e);
            pd(e, j, _);
            break;
          default:
            throw Error(l(161));
        }
      } catch (G) {
        at(e, e.return, G);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Zp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Zp(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function Va(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) Yp(e, n.alternate, n), (n = n.sibling);
  }
  function Ur(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Pa(4, n, n.return), Ur(n);
          break;
        case 1:
          Xn(n, n.return);
          var r = n.stateNode;
          typeof r.componentWillUnmount == "function" && Pp(n, n.return, r),
            Ur(n);
          break;
        case 27:
          $o(n.stateNode);
        case 26:
        case 5:
          Xn(n, n.return), Ur(n);
          break;
        case 22:
          n.memoizedState === null && Ur(n);
          break;
        case 30:
          Ur(n);
          break;
        default:
          Ur(n);
      }
      e = e.sibling;
    }
  }
  function qa(e, n, r) {
    for (r = r && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var o = n.alternate,
        c = e,
        d = n,
        g = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          qa(c, d, r), Lo(4, d);
          break;
        case 1:
          if (
            (qa(c, d, r),
            (o = d),
            (c = o.stateNode),
            typeof c.componentDidMount == "function")
          )
            try {
              c.componentDidMount();
            } catch (j) {
              at(o, o.return, j);
            }
          if (((o = d), (c = o.updateQueue), c !== null)) {
            var v = o.stateNode;
            try {
              var _ = c.shared.hiddenCallbacks;
              if (_ !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < _.length; c++)
                  Cm(_[c], v);
            } catch (j) {
              at(o, o.return, j);
            }
          }
          r && g & 64 && Hp(d), zo(d, d.return);
          break;
        case 27:
          Gp(d);
        case 26:
        case 5:
          qa(c, d, r), r && o === null && g & 4 && Vp(d), zo(d, d.return);
          break;
        case 12:
          qa(c, d, r);
          break;
        case 13:
          qa(c, d, r), r && g & 4 && Fp(c, d);
          break;
        case 22:
          d.memoizedState === null && qa(c, d, r), zo(d, d.return);
          break;
        case 30:
          break;
        default:
          qa(c, d, r);
      }
      n = n.sibling;
    }
  }
  function vd(e, n) {
    var r = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (r = e.memoizedState.cachePool.pool),
      (e = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (e = n.memoizedState.cachePool.pool),
      e !== r && (e != null && e.refCount++, r != null && xo(r));
  }
  function bd(e, n) {
    (e = null),
      n.alternate !== null && (e = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== e && (n.refCount++, e != null && xo(e));
  }
  function Kn(e, n, r, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) Jp(e, n, r, o), (n = n.sibling);
  }
  function Jp(e, n, r, o) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Kn(e, n, r, o), c & 2048 && Lo(9, n);
        break;
      case 1:
        Kn(e, n, r, o);
        break;
      case 3:
        Kn(e, n, r, o),
          c & 2048 &&
            ((e = null),
            n.alternate !== null && (e = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== e && (n.refCount++, e != null && xo(e)));
        break;
      case 12:
        if (c & 2048) {
          Kn(e, n, r, o), (e = n.stateNode);
          try {
            var d = n.memoizedProps,
              g = d.id,
              v = d.onPostCommit;
            typeof v == "function" &&
              v(
                g,
                n.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (_) {
            at(n, n.return, _);
          }
        } else Kn(e, n, r, o);
        break;
      case 13:
        Kn(e, n, r, o);
        break;
      case 23:
        break;
      case 22:
        (d = n.stateNode),
          (g = n.alternate),
          n.memoizedState !== null
            ? d._visibility & 2
              ? Kn(e, n, r, o)
              : Uo(e, n)
            : d._visibility & 2
            ? Kn(e, n, r, o)
            : ((d._visibility |= 2),
              Ei(e, n, r, o, (n.subtreeFlags & 10256) !== 0)),
          c & 2048 && vd(g, n);
        break;
      case 24:
        Kn(e, n, r, o), c & 2048 && bd(n.alternate, n);
        break;
      default:
        Kn(e, n, r, o);
    }
  }
  function Ei(e, n, r, o, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var d = e,
        g = n,
        v = r,
        _ = o,
        j = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          Ei(d, g, v, _, c), Lo(8, g);
          break;
        case 23:
          break;
        case 22:
          var G = g.stateNode;
          g.memoizedState !== null
            ? G._visibility & 2
              ? Ei(d, g, v, _, c)
              : Uo(d, g)
            : ((G._visibility |= 2), Ei(d, g, v, _, c)),
            c && j & 2048 && vd(g.alternate, g);
          break;
        case 24:
          Ei(d, g, v, _, c), c && j & 2048 && bd(g.alternate, g);
          break;
        default:
          Ei(d, g, v, _, c);
      }
      n = n.sibling;
    }
  }
  function Uo(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var r = e,
          o = n,
          c = o.flags;
        switch (o.tag) {
          case 22:
            Uo(r, o), c & 2048 && vd(o.alternate, o);
            break;
          case 24:
            Uo(r, o), c & 2048 && bd(o.alternate, o);
            break;
          default:
            Uo(r, o);
        }
        n = n.sibling;
      }
  }
  var Io = 8192;
  function Si(e) {
    if (e.subtreeFlags & Io)
      for (e = e.child; e !== null; ) Wp(e), (e = e.sibling);
  }
  function Wp(e) {
    switch (e.tag) {
      case 26:
        Si(e),
          e.flags & Io &&
            e.memoizedState !== null &&
            Q1(Un, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Si(e);
        break;
      case 3:
      case 4:
        var n = Un;
        (Un = Ps(e.stateNode.containerInfo)), Si(e), (Un = n);
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = Io), (Io = 16777216), Si(e), (Io = n))
            : Si(e));
        break;
      default:
        Si(e);
    }
  }
  function eg(e) {
    var n = e.alternate;
    if (n !== null && ((e = n.child), e !== null)) {
      n.child = null;
      do (n = e.sibling), (e.sibling = null), (e = n);
      while (e !== null);
    }
  }
  function Bo(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var o = n[r];
          (Ot = o), ng(o, e);
        }
      eg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) tg(e), (e = e.sibling);
  }
  function tg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Bo(e), e.flags & 2048 && Pa(9, e, e.return);
        break;
      case 3:
        Bo(e);
        break;
      case 12:
        Bo(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null &&
        n._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((n._visibility &= -3), Os(e))
          : Bo(e);
        break;
      default:
        Bo(e);
    }
  }
  function Os(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var o = n[r];
          (Ot = o), ng(o, e);
        }
      eg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((n = e), n.tag)) {
        case 0:
        case 11:
        case 15:
          Pa(8, n, n.return), Os(n);
          break;
        case 22:
          (r = n.stateNode),
            r._visibility & 2 && ((r._visibility &= -3), Os(n));
          break;
        default:
          Os(n);
      }
      e = e.sibling;
    }
  }
  function ng(e, n) {
    for (; Ot !== null; ) {
      var r = Ot;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Pa(8, r, n);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var o = r.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          xo(r.memoizedState.cache);
      }
      if (((o = r.child), o !== null)) (o.return = r), (Ot = o);
      else
        e: for (r = e; Ot !== null; ) {
          o = Ot;
          var c = o.sibling,
            d = o.return;
          if ((Xp(o), o === r)) {
            Ot = null;
            break e;
          }
          if (c !== null) {
            (c.return = d), (Ot = c);
            break e;
          }
          Ot = d;
        }
    }
  }
  var f1 = {
      getCacheForType: function (e) {
        var n = Ht(Tt),
          r = n.data.get(e);
        return r === void 0 && ((r = e()), n.data.set(e, r)), r;
      },
    },
    h1 = typeof WeakMap == "function" ? WeakMap : Map,
    Ze = 0,
    it = null,
    Ue = null,
    He = 0,
    Je = 0,
    cn = null,
    Ga = !1,
    Ti = !1,
    wd = !1,
    ya = 0,
    pt = 0,
    $a = 0,
    Ir = 0,
    xd = 0,
    Cn = 0,
    Ci = 0,
    Ho = null,
    tn = null,
    _d = !1,
    Ed = 0,
    ks = 1 / 0,
    Ns = null,
    Ya = null,
    jt = 0,
    Xa = null,
    Ai = null,
    Ri = 0,
    Sd = 0,
    Td = null,
    ag = null,
    Po = 0,
    Cd = null;
  function un() {
    if ((Ze & 2) !== 0 && He !== 0) return He & -He;
    if (D.T !== null) {
      var e = pi;
      return e !== 0 ? e : Md();
    }
    return S();
  }
  function rg() {
    Cn === 0 && (Cn = (He & 536870912) === 0 || Ke ? ti() : 536870912);
    var e = Tn.current;
    return e !== null && (e.flags |= 32), Cn;
  }
  function dn(e, n, r) {
    ((e === it && (Je === 2 || Je === 9)) || e.cancelPendingCommit !== null) &&
      (Oi(e, 0), Ka(e, He, Cn, !1)),
      wr(e, r),
      ((Ze & 2) === 0 || e !== it) &&
        (e === it &&
          ((Ze & 2) === 0 && (Ir |= r), pt === 4 && Ka(e, He, Cn, !1)),
        Fn(e));
  }
  function ig(e, n, r) {
    if ((Ze & 6) !== 0) throw Error(l(327));
    var o = (!r && (n & 124) === 0 && (n & e.expiredLanes) === 0) || Gn(e, n),
      c = o ? g1(e, n) : Od(e, n, !0),
      d = o;
    do {
      if (c === 0) {
        Ti && !o && Ka(e, n, 0, !1);
        break;
      } else {
        if (((r = e.current.alternate), d && !m1(r))) {
          (c = Od(e, n, !1)), (d = !1);
          continue;
        }
        if (c === 2) {
          if (((d = n), e.errorRecoveryDisabledLanes & d)) var g = 0;
          else
            (g = e.pendingLanes & -536870913),
              (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0);
          if (g !== 0) {
            n = g;
            e: {
              var v = e;
              c = Ho;
              var _ = v.current.memoizedState.isDehydrated;
              if ((_ && (Oi(v, g).flags |= 256), (g = Od(v, g, !1)), g !== 2)) {
                if (wd && !_) {
                  (v.errorRecoveryDisabledLanes |= d), (Ir |= d), (c = 4);
                  break e;
                }
                (d = tn),
                  (tn = c),
                  d !== null && (tn === null ? (tn = d) : tn.push.apply(tn, d));
              }
              c = g;
            }
            if (((d = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          Oi(e, 0), Ka(e, n, 0, !0);
          break;
        }
        e: {
          switch (((o = e), (d = c), d)) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Ka(o, n, Cn, !Ga);
              break e;
            case 2:
              tn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((n & 62914560) === n && ((c = Ed + 300 - It()), 10 < c)) {
            if ((Ka(o, n, Cn, !Ga), br(o, 0, !0) !== 0)) break e;
            o.timeoutHandle = jg(
              og.bind(null, o, r, tn, Ns, _d, n, Cn, Ir, Ci, Ga, d, 2, -0, 0),
              c
            );
            break e;
          }
          og(o, r, tn, Ns, _d, n, Cn, Ir, Ci, Ga, d, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Fn(e);
  }
  function og(e, n, r, o, c, d, g, v, _, j, G, X, L, U) {
    if (
      ((e.timeoutHandle = -1),
      (X = n.subtreeFlags),
      (X & 8192 || (X & 16785408) === 16785408) &&
        ((Ko = { stylesheets: null, count: 0, unsuspend: F1 }),
        Wp(n),
        (X = Z1()),
        X !== null))
    ) {
      (e.cancelPendingCommit = X(
        hg.bind(null, e, n, d, r, o, c, g, v, _, G, 1, L, U)
      )),
        Ka(e, d, g, !j);
      return;
    }
    hg(e, n, d, r, o, c, g, v, _);
  }
  function m1(e) {
    for (var n = e; ; ) {
      var r = n.tag;
      if (
        (r === 0 || r === 11 || r === 15) &&
        n.flags & 16384 &&
        ((r = n.updateQueue), r !== null && ((r = r.stores), r !== null))
      )
        for (var o = 0; o < r.length; o++) {
          var c = r[o],
            d = c.getSnapshot;
          c = c.value;
          try {
            if (!rn(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((r = n.child), n.subtreeFlags & 16384 && r !== null))
        (r.return = n), (n = r);
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
  function Ka(e, n, r, o) {
    (n &= ~xd),
      (n &= ~Ir),
      (e.suspendedLanes |= n),
      (e.pingedLanes &= ~n),
      o && (e.warmLanes |= n),
      (o = e.expirationTimes);
    for (var c = n; 0 < c; ) {
      var d = 31 - Dt(c),
        g = 1 << d;
      (o[d] = -1), (c &= ~g);
    }
    r !== 0 && xr(e, r, n);
  }
  function Ds() {
    return (Ze & 6) === 0 ? (Vo(0), !1) : !0;
  }
  function Ad() {
    if (Ue !== null) {
      if (Je === 0) var e = Ue.return;
      else (e = Ue), (ca = Dr = null), Gu(e), (xi = null), (Do = 0), (e = Ue);
      for (; e !== null; ) Bp(e.alternate, e), (e = e.return);
      Ue = null;
    }
  }
  function Oi(e, n) {
    var r = e.timeoutHandle;
    r !== -1 && ((e.timeoutHandle = -1), D1(r)),
      (r = e.cancelPendingCommit),
      r !== null && ((e.cancelPendingCommit = null), r()),
      Ad(),
      (it = e),
      (Ue = r = oa(e.current, null)),
      (He = n),
      (Je = 0),
      (cn = null),
      (Ga = !1),
      (Ti = Gn(e, n)),
      (wd = !1),
      (Ci = Cn = xd = Ir = $a = pt = 0),
      (tn = Ho = null),
      (_d = !1),
      (n & 8) !== 0 && (n |= n & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= n; 0 < o; ) {
        var c = 31 - Dt(o),
          d = 1 << c;
        (n |= e[c]), (o &= ~d);
      }
    return (ya = n), es(), r;
  }
  function lg(e, n) {
    (Me = null),
      (D.H = bs),
      n === Eo || n === cs
        ? ((n = Sm()), (Je = 3))
        : n === xm
        ? ((n = Sm()), (Je = 4))
        : (Je =
            n === Tp
              ? 8
              : n !== null &&
                typeof n == "object" &&
                typeof n.then == "function"
              ? 6
              : 1),
      (cn = n),
      Ue === null && ((pt = 1), Ss(e, xn(n, e.current)));
  }
  function sg() {
    var e = D.H;
    return (D.H = bs), e === null ? bs : e;
  }
  function cg() {
    var e = D.A;
    return (D.A = f1), e;
  }
  function Rd() {
    (pt = 4),
      Ga || ((He & 4194048) !== He && Tn.current !== null) || (Ti = !0),
      (($a & 134217727) === 0 && (Ir & 134217727) === 0) ||
        it === null ||
        Ka(it, He, Cn, !1);
  }
  function Od(e, n, r) {
    var o = Ze;
    Ze |= 2;
    var c = sg(),
      d = cg();
    (it !== e || He !== n) && ((Ns = null), Oi(e, n)), (n = !1);
    var g = pt;
    e: do
      try {
        if (Je !== 0 && Ue !== null) {
          var v = Ue,
            _ = cn;
          switch (Je) {
            case 8:
              Ad(), (g = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Tn.current === null && (n = !0);
              var j = Je;
              if (((Je = 0), (cn = null), ki(e, v, _, j), r && Ti)) {
                g = 0;
                break e;
              }
              break;
            default:
              (j = Je), (Je = 0), (cn = null), ki(e, v, _, j);
          }
        }
        p1(), (g = pt);
        break;
      } catch (G) {
        lg(e, G);
      }
    while (!0);
    return (
      n && e.shellSuspendCounter++,
      (ca = Dr = null),
      (Ze = o),
      (D.H = c),
      (D.A = d),
      Ue === null && ((it = null), (He = 0), es()),
      g
    );
  }
  function p1() {
    for (; Ue !== null; ) ug(Ue);
  }
  function g1(e, n) {
    var r = Ze;
    Ze |= 2;
    var o = sg(),
      c = cg();
    it !== e || He !== n
      ? ((Ns = null), (ks = It() + 500), Oi(e, n))
      : (Ti = Gn(e, n));
    e: do
      try {
        if (Je !== 0 && Ue !== null) {
          n = Ue;
          var d = cn;
          t: switch (Je) {
            case 1:
              (Je = 0), (cn = null), ki(e, n, d, 1);
              break;
            case 2:
            case 9:
              if (_m(d)) {
                (Je = 0), (cn = null), dg(n);
                break;
              }
              (n = function () {
                (Je !== 2 && Je !== 9) || it !== e || (Je = 7), Fn(e);
              }),
                d.then(n, n);
              break e;
            case 3:
              Je = 7;
              break e;
            case 4:
              Je = 5;
              break e;
            case 7:
              _m(d)
                ? ((Je = 0), (cn = null), dg(n))
                : ((Je = 0), (cn = null), ki(e, n, d, 7));
              break;
            case 5:
              var g = null;
              switch (Ue.tag) {
                case 26:
                  g = Ue.memoizedState;
                case 5:
                case 27:
                  var v = Ue;
                  if (!g || Yg(g)) {
                    (Je = 0), (cn = null);
                    var _ = v.sibling;
                    if (_ !== null) Ue = _;
                    else {
                      var j = v.return;
                      j !== null ? ((Ue = j), Ms(j)) : (Ue = null);
                    }
                    break t;
                  }
              }
              (Je = 0), (cn = null), ki(e, n, d, 5);
              break;
            case 6:
              (Je = 0), (cn = null), ki(e, n, d, 6);
              break;
            case 8:
              Ad(), (pt = 6);
              break e;
            default:
              throw Error(l(462));
          }
        }
        y1();
        break;
      } catch (G) {
        lg(e, G);
      }
    while (!0);
    return (
      (ca = Dr = null),
      (D.H = o),
      (D.A = c),
      (Ze = r),
      Ue !== null ? 0 : ((it = null), (He = 0), es(), pt)
    );
  }
  function y1() {
    for (; Ue !== null && !At(); ) ug(Ue);
  }
  function ug(e) {
    var n = Up(e.alternate, e, ya);
    (e.memoizedProps = e.pendingProps), n === null ? Ms(e) : (Ue = n);
  }
  function dg(e) {
    var n = e,
      r = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Np(r, n, n.pendingProps, n.type, void 0, He);
        break;
      case 11:
        n = Np(r, n, n.pendingProps, n.type.render, n.ref, He);
        break;
      case 5:
        Gu(n);
      default:
        Bp(r, n), (n = Ue = fm(n, ya)), (n = Up(r, n, ya));
    }
    (e.memoizedProps = e.pendingProps), n === null ? Ms(e) : (Ue = n);
  }
  function ki(e, n, r, o) {
    (ca = Dr = null), Gu(n), (xi = null), (Do = 0);
    var c = n.return;
    try {
      if (o1(e, c, n, r, He)) {
        (pt = 1), Ss(e, xn(r, e.current)), (Ue = null);
        return;
      }
    } catch (d) {
      if (c !== null) throw ((Ue = c), d);
      (pt = 1), Ss(e, xn(r, e.current)), (Ue = null);
      return;
    }
    n.flags & 32768
      ? (Ke || o === 1
          ? (e = !0)
          : Ti || (He & 536870912) !== 0
          ? (e = !1)
          : ((Ga = e = !0),
            (o === 2 || o === 9 || o === 3 || o === 6) &&
              ((o = Tn.current),
              o !== null && o.tag === 13 && (o.flags |= 16384))),
        fg(n, e))
      : Ms(n);
  }
  function Ms(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        fg(n, Ga);
        return;
      }
      e = n.return;
      var r = s1(n.alternate, n, ya);
      if (r !== null) {
        Ue = r;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        Ue = n;
        return;
      }
      Ue = n = e;
    } while (n !== null);
    pt === 0 && (pt = 5);
  }
  function fg(e, n) {
    do {
      var r = c1(e.alternate, e);
      if (r !== null) {
        (r.flags &= 32767), (Ue = r);
        return;
      }
      if (
        ((r = e.return),
        r !== null &&
          ((r.flags |= 32768), (r.subtreeFlags = 0), (r.deletions = null)),
        !n && ((e = e.sibling), e !== null))
      ) {
        Ue = e;
        return;
      }
      Ue = e = r;
    } while (e !== null);
    (pt = 6), (Ue = null);
  }
  function hg(e, n, r, o, c, d, g, v, _) {
    e.cancelPendingCommit = null;
    do js();
    while (jt !== 0);
    if ((Ze & 6) !== 0) throw Error(l(327));
    if (n !== null) {
      if (n === e.current) throw Error(l(177));
      if (
        ((d = n.lanes | n.childLanes),
        (d |= bu),
        Gl(e, r, d, g, v, _),
        e === it && ((Ue = it = null), (He = 0)),
        (Ai = n),
        (Xa = e),
        (Ri = r),
        (Sd = d),
        (Td = c),
        (ag = o),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            x1(ei, function () {
              return vg(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (o = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || o)
      ) {
        (o = D.T), (D.T = null), (c = J.p), (J.p = 2), (g = Ze), (Ze |= 4);
        try {
          u1(e, n, r);
        } finally {
          (Ze = g), (J.p = c), (D.T = o);
        }
      }
      (jt = 1), mg(), pg(), gg();
    }
  }
  function mg() {
    if (jt === 1) {
      jt = 0;
      var e = Xa,
        n = Ai,
        r = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || r) {
        (r = D.T), (D.T = null);
        var o = J.p;
        J.p = 2;
        var c = Ze;
        Ze |= 4;
        try {
          Qp(n, e);
          var d = Pd,
            g = nm(e.containerInfo),
            v = d.focusedElem,
            _ = d.selectionRange;
          if (
            g !== v &&
            v &&
            v.ownerDocument &&
            tm(v.ownerDocument.documentElement, v)
          ) {
            if (_ !== null && mu(v)) {
              var j = _.start,
                G = _.end;
              if ((G === void 0 && (G = j), "selectionStart" in v))
                (v.selectionStart = j),
                  (v.selectionEnd = Math.min(G, v.value.length));
              else {
                var X = v.ownerDocument || document,
                  L = (X && X.defaultView) || window;
                if (L.getSelection) {
                  var U = L.getSelection(),
                    Ae = v.textContent.length,
                    xe = Math.min(_.start, Ae),
                    nt = _.end === void 0 ? xe : Math.min(_.end, Ae);
                  !U.extend && xe > nt && ((g = nt), (nt = xe), (xe = g));
                  var k = em(v, xe),
                    C = em(v, nt);
                  if (
                    k &&
                    C &&
                    (U.rangeCount !== 1 ||
                      U.anchorNode !== k.node ||
                      U.anchorOffset !== k.offset ||
                      U.focusNode !== C.node ||
                      U.focusOffset !== C.offset)
                  ) {
                    var M = X.createRange();
                    M.setStart(k.node, k.offset),
                      U.removeAllRanges(),
                      xe > nt
                        ? (U.addRange(M), U.extend(C.node, C.offset))
                        : (M.setEnd(C.node, C.offset), U.addRange(M));
                  }
                }
              }
            }
            for (X = [], U = v; (U = U.parentNode); )
              U.nodeType === 1 &&
                X.push({ element: U, left: U.scrollLeft, top: U.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < X.length;
              v++
            ) {
              var Y = X[v];
              (Y.element.scrollLeft = Y.left), (Y.element.scrollTop = Y.top);
            }
          }
          (Ys = !!Hd), (Pd = Hd = null);
        } finally {
          (Ze = c), (J.p = o), (D.T = r);
        }
      }
      (e.current = n), (jt = 2);
    }
  }
  function pg() {
    if (jt === 2) {
      jt = 0;
      var e = Xa,
        n = Ai,
        r = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || r) {
        (r = D.T), (D.T = null);
        var o = J.p;
        J.p = 2;
        var c = Ze;
        Ze |= 4;
        try {
          Yp(e, n.alternate, n);
        } finally {
          (Ze = c), (J.p = o), (D.T = r);
        }
      }
      jt = 3;
    }
  }
  function gg() {
    if (jt === 4 || jt === 3) {
      (jt = 0), yn();
      var e = Xa,
        n = Ai,
        r = Ri,
        o = ag;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (jt = 5)
        : ((jt = 0), (Ai = Xa = null), yg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (
        (c === 0 && (Ya = null),
        ro(r),
        (n = n.stateNode),
        dt && typeof dt.onCommitFiberRoot == "function")
      )
        try {
          dt.onCommitFiberRoot(Ft, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (o !== null) {
        (n = D.T), (c = J.p), (J.p = 2), (D.T = null);
        try {
          for (var d = e.onRecoverableError, g = 0; g < o.length; g++) {
            var v = o[g];
            d(v.value, { componentStack: v.stack });
          }
        } finally {
          (D.T = n), (J.p = c);
        }
      }
      (Ri & 3) !== 0 && js(),
        Fn(e),
        (c = e.pendingLanes),
        (r & 4194090) !== 0 && (c & 42) !== 0
          ? e === Cd
            ? Po++
            : ((Po = 0), (Cd = e))
          : (Po = 0),
        Vo(0);
    }
  }
  function yg(e, n) {
    (e.pooledCacheLanes &= n) === 0 &&
      ((n = e.pooledCache), n != null && ((e.pooledCache = null), xo(n)));
  }
  function js(e) {
    return mg(), pg(), gg(), vg();
  }
  function vg() {
    if (jt !== 5) return !1;
    var e = Xa,
      n = Sd;
    Sd = 0;
    var r = ro(Ri),
      o = D.T,
      c = J.p;
    try {
      (J.p = 32 > r ? 32 : r), (D.T = null), (r = Td), (Td = null);
      var d = Xa,
        g = Ri;
      if (((jt = 0), (Ai = Xa = null), (Ri = 0), (Ze & 6) !== 0))
        throw Error(l(331));
      var v = Ze;
      if (
        ((Ze |= 4),
        tg(d.current),
        Jp(d, d.current, g, r),
        (Ze = v),
        Vo(0, !1),
        dt && typeof dt.onPostCommitFiberRoot == "function")
      )
        try {
          dt.onPostCommitFiberRoot(Ft, d);
        } catch {}
      return !0;
    } finally {
      (J.p = c), (D.T = o), yg(e, n);
    }
  }
  function bg(e, n, r) {
    (n = xn(r, n)),
      (n = rd(e.stateNode, n, 2)),
      (e = Ua(e, n, 2)),
      e !== null && (wr(e, 2), Fn(e));
  }
  function at(e, n, r) {
    if (e.tag === 3) bg(e, e, r);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          bg(n, e, r);
          break;
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (Ya === null || !Ya.has(o)))
          ) {
            (e = xn(r, e)),
              (r = Ep(2)),
              (o = Ua(n, r, 2)),
              o !== null && (Sp(r, o, n, e), wr(o, 2), Fn(o));
            break;
          }
        }
        n = n.return;
      }
  }
  function kd(e, n, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new h1();
      var c = new Set();
      o.set(n, c);
    } else (c = o.get(n)), c === void 0 && ((c = new Set()), o.set(n, c));
    c.has(r) ||
      ((wd = !0), c.add(r), (e = v1.bind(null, e, n, r)), n.then(e, e));
  }
  function v1(e, n, r) {
    var o = e.pingCache;
    o !== null && o.delete(n),
      (e.pingedLanes |= e.suspendedLanes & r),
      (e.warmLanes &= ~r),
      it === e &&
        (He & r) === r &&
        (pt === 4 || (pt === 3 && (He & 62914560) === He && 300 > It() - Ed)
          ? (Ze & 2) === 0 && Oi(e, 0)
          : (xd |= r),
        Ci === He && (Ci = 0)),
      Fn(e);
  }
  function wg(e, n) {
    n === 0 && (n = ql()), (e = di(e, n)), e !== null && (wr(e, n), Fn(e));
  }
  function b1(e) {
    var n = e.memoizedState,
      r = 0;
    n !== null && (r = n.retryLane), wg(e, r);
  }
  function w1(e, n) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          c = e.memoizedState;
        c !== null && (r = c.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    o !== null && o.delete(n), wg(e, r);
  }
  function x1(e, n) {
    return Qe(e, n);
  }
  var Ls = null,
    Ni = null,
    Nd = !1,
    zs = !1,
    Dd = !1,
    Br = 0;
  function Fn(e) {
    e !== Ni &&
      e.next === null &&
      (Ni === null ? (Ls = Ni = e) : (Ni = Ni.next = e)),
      (zs = !0),
      Nd || ((Nd = !0), E1());
  }
  function Vo(e, n) {
    if (!Dd && zs) {
      Dd = !0;
      do
        for (var r = !1, o = Ls; o !== null; ) {
          if (e !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var d = 0;
            else {
              var g = o.suspendedLanes,
                v = o.pingedLanes;
              (d = (1 << (31 - Dt(42 | e) + 1)) - 1),
                (d &= c & ~(g & ~v)),
                (d = d & 201326741 ? (d & 201326741) | 1 : d ? d | 2 : 0);
            }
            d !== 0 && ((r = !0), Sg(o, d));
          } else
            (d = He),
              (d = br(
                o,
                o === it ? d : 0,
                o.cancelPendingCommit !== null || o.timeoutHandle !== -1
              )),
              (d & 3) === 0 || Gn(o, d) || ((r = !0), Sg(o, d));
          o = o.next;
        }
      while (r);
      Dd = !1;
    }
  }
  function _1() {
    xg();
  }
  function xg() {
    zs = Nd = !1;
    var e = 0;
    Br !== 0 && (N1() && (e = Br), (Br = 0));
    for (var n = It(), r = null, o = Ls; o !== null; ) {
      var c = o.next,
        d = _g(o, n);
      d === 0
        ? ((o.next = null),
          r === null ? (Ls = c) : (r.next = c),
          c === null && (Ni = r))
        : ((r = o), (e !== 0 || (d & 3) !== 0) && (zs = !0)),
        (o = c);
    }
    Vo(e);
  }
  function _g(e, n) {
    for (
      var r = e.suspendedLanes,
        o = e.pingedLanes,
        c = e.expirationTimes,
        d = e.pendingLanes & -62914561;
      0 < d;

    ) {
      var g = 31 - Dt(d),
        v = 1 << g,
        _ = c[g];
      _ === -1
        ? ((v & r) === 0 || (v & o) !== 0) && (c[g] = Vl(v, n))
        : _ <= n && (e.expiredLanes |= v),
        (d &= ~v);
    }
    if (
      ((n = it),
      (r = He),
      (r = br(
        e,
        e === n ? r : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (o = e.callbackNode),
      r === 0 ||
        (e === n && (Je === 2 || Je === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        o !== null && o !== null && De(o),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((r & 3) === 0 || Gn(e, r)) {
      if (((n = r & -r), n === e.callbackPriority)) return n;
      switch ((o !== null && De(o), ro(r))) {
        case 2:
        case 8:
          r = Bl;
          break;
        case 32:
          r = ei;
          break;
        case 268435456:
          r = Ra;
          break;
        default:
          r = ei;
      }
      return (
        (o = Eg.bind(null, e)),
        (r = Qe(r, o)),
        (e.callbackPriority = n),
        (e.callbackNode = r),
        n
      );
    }
    return (
      o !== null && o !== null && De(o),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Eg(e, n) {
    if (jt !== 0 && jt !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var r = e.callbackNode;
    if (js() && e.callbackNode !== r) return null;
    var o = He;
    return (
      (o = br(
        e,
        e === it ? o : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      o === 0
        ? null
        : (ig(e, o, n),
          _g(e, It()),
          e.callbackNode != null && e.callbackNode === r
            ? Eg.bind(null, e)
            : null)
    );
  }
  function Sg(e, n) {
    if (js()) return null;
    ig(e, n, !0);
  }
  function E1() {
    M1(function () {
      (Ze & 6) !== 0 ? Qe(Il, _1) : xg();
    });
  }
  function Md() {
    return Br === 0 && (Br = ti()), Br;
  }
  function Tg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Xl("" + e);
  }
  function Cg(e, n) {
    var r = n.ownerDocument.createElement("input");
    return (
      (r.name = n.name),
      (r.value = n.value),
      e.id && r.setAttribute("form", e.id),
      n.parentNode.insertBefore(r, n),
      (e = new FormData(e)),
      r.parentNode.removeChild(r),
      e
    );
  }
  function S1(e, n, r, o, c) {
    if (n === "submit" && r && r.stateNode === c) {
      var d = Tg((c[te] || null).action),
        g = o.submitter;
      g &&
        ((n = (n = g[te] || null)
          ? Tg(n.formAction)
          : g.getAttribute("formAction")),
        n !== null && ((d = n), (g = null)));
      var v = new Zl("action", "action", null, o, c);
      e.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (Br !== 0) {
                  var _ = g ? Cg(c, g) : new FormData(c);
                  Wu(
                    r,
                    { pending: !0, data: _, method: c.method, action: d },
                    null,
                    _
                  );
                }
              } else
                typeof d == "function" &&
                  (v.preventDefault(),
                  (_ = g ? Cg(c, g) : new FormData(c)),
                  Wu(
                    r,
                    { pending: !0, data: _, method: c.method, action: d },
                    d,
                    _
                  ));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var jd = 0; jd < vu.length; jd++) {
    var Ld = vu[jd],
      T1 = Ld.toLowerCase(),
      C1 = Ld[0].toUpperCase() + Ld.slice(1);
    zn(T1, "on" + C1);
  }
  zn(im, "onAnimationEnd"),
    zn(om, "onAnimationIteration"),
    zn(lm, "onAnimationStart"),
    zn("dblclick", "onDoubleClick"),
    zn("focusin", "onFocus"),
    zn("focusout", "onBlur"),
    zn(qw, "onTransitionRun"),
    zn(Gw, "onTransitionStart"),
    zn($w, "onTransitionCancel"),
    zn(sm, "onTransitionEnd"),
    vn("onMouseEnter", ["mouseout", "mouseover"]),
    vn("onMouseLeave", ["mouseout", "mouseover"]),
    vn("onPointerEnter", ["pointerout", "pointerover"]),
    vn("onPointerLeave", ["pointerout", "pointerover"]),
    qt(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    qt(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    qt(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    qt(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    qt(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var qo =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    A1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(qo)
    );
  function Ag(e, n) {
    n = (n & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var o = e[r],
        c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (n)
          for (var g = o.length - 1; 0 <= g; g--) {
            var v = o[g],
              _ = v.instance,
              j = v.currentTarget;
            if (((v = v.listener), _ !== d && c.isPropagationStopped()))
              break e;
            (d = v), (c.currentTarget = j);
            try {
              d(c);
            } catch (G) {
              Es(G);
            }
            (c.currentTarget = null), (d = _);
          }
        else
          for (g = 0; g < o.length; g++) {
            if (
              ((v = o[g]),
              (_ = v.instance),
              (j = v.currentTarget),
              (v = v.listener),
              _ !== d && c.isPropagationStopped())
            )
              break e;
            (d = v), (c.currentTarget = j);
            try {
              d(c);
            } catch (G) {
              Es(G);
            }
            (c.currentTarget = null), (d = _);
          }
      }
    }
  }
  function Ie(e, n) {
    var r = n[we];
    r === void 0 && (r = n[we] = new Set());
    var o = e + "__bubble";
    r.has(o) || (Rg(n, e, 2, !1), r.add(o));
  }
  function zd(e, n, r) {
    var o = 0;
    n && (o |= 4), Rg(r, e, o, n);
  }
  var Us = "_reactListening" + Math.random().toString(36).slice(2);
  function Ud(e) {
    if (!e[Us]) {
      (e[Us] = !0),
        Be.forEach(function (r) {
          r !== "selectionchange" && (A1.has(r) || zd(r, !1, e), zd(r, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Us] || ((n[Us] = !0), zd("selectionchange", !1, n));
    }
  }
  function Rg(e, n, r, o) {
    switch (Jg(n)) {
      case 2:
        var c = e2;
        break;
      case 8:
        c = t2;
        break;
      default:
        c = Zd;
    }
    (r = c.bind(null, n, r, e)),
      (c = void 0),
      !iu ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (c = !0),
      o
        ? c !== void 0
          ? e.addEventListener(n, r, { capture: !0, passive: c })
          : e.addEventListener(n, r, !0)
        : c !== void 0
        ? e.addEventListener(n, r, { passive: c })
        : e.addEventListener(n, r, !1);
  }
  function Id(e, n, r, o, c) {
    var d = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var g = o.tag;
        if (g === 3 || g === 4) {
          var v = o.stateNode.containerInfo;
          if (v === c) break;
          if (g === 4)
            for (g = o.return; g !== null; ) {
              var _ = g.tag;
              if ((_ === 3 || _ === 4) && g.stateNode.containerInfo === c)
                return;
              g = g.return;
            }
          for (; v !== null; ) {
            if (((g = Re(v)), g === null)) return;
            if (((_ = g.tag), _ === 5 || _ === 6 || _ === 26 || _ === 27)) {
              o = d = g;
              continue e;
            }
            v = v.parentNode;
          }
        }
        o = o.return;
      }
    Lh(function () {
      var j = d,
        G = au(r),
        X = [];
      e: {
        var L = cm.get(e);
        if (L !== void 0) {
          var U = Zl,
            Ae = e;
          switch (e) {
            case "keypress":
              if (Fl(r) === 0) break e;
            case "keydown":
            case "keyup":
              U = xw;
              break;
            case "focusin":
              (Ae = "focus"), (U = cu);
              break;
            case "focusout":
              (Ae = "blur"), (U = cu);
              break;
            case "beforeblur":
            case "afterblur":
              U = cu;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              U = Ih;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = cw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = Sw;
              break;
            case im:
            case om:
            case lm:
              U = fw;
              break;
            case sm:
              U = Cw;
              break;
            case "scroll":
            case "scrollend":
              U = lw;
              break;
            case "wheel":
              U = Rw;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = mw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = Hh;
              break;
            case "toggle":
            case "beforetoggle":
              U = kw;
          }
          var xe = (n & 4) !== 0,
            nt = !xe && (e === "scroll" || e === "scrollend"),
            k = xe ? (L !== null ? L + "Capture" : null) : L;
          xe = [];
          for (var C = j, M; C !== null; ) {
            var Y = C;
            if (
              ((M = Y.stateNode),
              (Y = Y.tag),
              (Y !== 5 && Y !== 26 && Y !== 27) ||
                M === null ||
                k === null ||
                ((Y = lo(C, k)), Y != null && xe.push(Go(C, Y, M))),
              nt)
            )
              break;
            C = C.return;
          }
          0 < xe.length &&
            ((L = new U(L, Ae, null, r, G)),
            X.push({ event: L, listeners: xe }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((L = e === "mouseover" || e === "pointerover"),
            (U = e === "mouseout" || e === "pointerout"),
            L &&
              r !== nu &&
              (Ae = r.relatedTarget || r.fromElement) &&
              (Re(Ae) || Ae[he]))
          )
            break e;
          if (
            (U || L) &&
            ((L =
              G.window === G
                ? G
                : (L = G.ownerDocument)
                ? L.defaultView || L.parentWindow
                : window),
            U
              ? ((Ae = r.relatedTarget || r.toElement),
                (U = j),
                (Ae = Ae ? Re(Ae) : null),
                Ae !== null &&
                  ((nt = u(Ae)),
                  (xe = Ae.tag),
                  Ae !== nt || (xe !== 5 && xe !== 27 && xe !== 6)) &&
                  (Ae = null))
              : ((U = null), (Ae = j)),
            U !== Ae)
          ) {
            if (
              ((xe = Ih),
              (Y = "onMouseLeave"),
              (k = "onMouseEnter"),
              (C = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((xe = Hh),
                (Y = "onPointerLeave"),
                (k = "onPointerEnter"),
                (C = "pointer")),
              (nt = U == null ? L : lt(U)),
              (M = Ae == null ? L : lt(Ae)),
              (L = new xe(Y, C + "leave", U, r, G)),
              (L.target = nt),
              (L.relatedTarget = M),
              (Y = null),
              Re(G) === j &&
                ((xe = new xe(k, C + "enter", Ae, r, G)),
                (xe.target = M),
                (xe.relatedTarget = nt),
                (Y = xe)),
              (nt = Y),
              U && Ae)
            )
              t: {
                for (xe = U, k = Ae, C = 0, M = xe; M; M = Di(M)) C++;
                for (M = 0, Y = k; Y; Y = Di(Y)) M++;
                for (; 0 < C - M; ) (xe = Di(xe)), C--;
                for (; 0 < M - C; ) (k = Di(k)), M--;
                for (; C--; ) {
                  if (xe === k || (k !== null && xe === k.alternate)) break t;
                  (xe = Di(xe)), (k = Di(k));
                }
                xe = null;
              }
            else xe = null;
            U !== null && Og(X, L, U, xe, !1),
              Ae !== null && nt !== null && Og(X, nt, Ae, xe, !0);
          }
        }
        e: {
          if (
            ((L = j ? lt(j) : window),
            (U = L.nodeName && L.nodeName.toLowerCase()),
            U === "select" || (U === "input" && L.type === "file"))
          )
            var de = Kh;
          else if (Yh(L))
            if (Fh) de = Hw;
            else {
              de = Iw;
              var Le = Uw;
            }
          else
            (U = L.nodeName),
              !U ||
              U.toLowerCase() !== "input" ||
              (L.type !== "checkbox" && L.type !== "radio")
                ? j && tu(j.elementType) && (de = Kh)
                : (de = Bw);
          if (de && (de = de(e, j))) {
            Xh(X, de, r, G);
            break e;
          }
          Le && Le(e, L, j),
            e === "focusout" &&
              j &&
              L.type === "number" &&
              j.memoizedProps.value != null &&
              eu(L, "number", L.value);
        }
        switch (((Le = j ? lt(j) : window), e)) {
          case "focusin":
            (Yh(Le) || Le.contentEditable === "true") &&
              ((si = Le), (pu = j), (go = null));
            break;
          case "focusout":
            go = pu = si = null;
            break;
          case "mousedown":
            gu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (gu = !1), am(X, r, G);
            break;
          case "selectionchange":
            if (Vw) break;
          case "keydown":
          case "keyup":
            am(X, r, G);
        }
        var pe;
        if (du)
          e: {
            switch (e) {
              case "compositionstart":
                var _e = "onCompositionStart";
                break e;
              case "compositionend":
                _e = "onCompositionEnd";
                break e;
              case "compositionupdate":
                _e = "onCompositionUpdate";
                break e;
            }
            _e = void 0;
          }
        else
          li
            ? Gh(e, r) && (_e = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (_e = "onCompositionStart");
        _e &&
          (Ph &&
            r.locale !== "ko" &&
            (li || _e !== "onCompositionStart"
              ? _e === "onCompositionEnd" && li && (pe = zh())
              : ((Ma = G),
                (ou = "value" in Ma ? Ma.value : Ma.textContent),
                (li = !0))),
          (Le = Is(j, _e)),
          0 < Le.length &&
            ((_e = new Bh(_e, e, null, r, G)),
            X.push({ event: _e, listeners: Le }),
            pe
              ? (_e.data = pe)
              : ((pe = $h(r)), pe !== null && (_e.data = pe)))),
          (pe = Dw ? Mw(e, r) : jw(e, r)) &&
            ((_e = Is(j, "onBeforeInput")),
            0 < _e.length &&
              ((Le = new Bh("onBeforeInput", "beforeinput", null, r, G)),
              X.push({ event: Le, listeners: _e }),
              (Le.data = pe))),
          S1(X, e, j, r, G);
      }
      Ag(X, n);
    });
  }
  function Go(e, n, r) {
    return { instance: e, listener: n, currentTarget: r };
  }
  function Is(e, n) {
    for (var r = n + "Capture", o = []; e !== null; ) {
      var c = e,
        d = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          d === null ||
          ((c = lo(e, r)),
          c != null && o.unshift(Go(e, c, d)),
          (c = lo(e, n)),
          c != null && o.push(Go(e, c, d))),
        e.tag === 3)
      )
        return o;
      e = e.return;
    }
    return [];
  }
  function Di(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Og(e, n, r, o, c) {
    for (var d = n._reactName, g = []; r !== null && r !== o; ) {
      var v = r,
        _ = v.alternate,
        j = v.stateNode;
      if (((v = v.tag), _ !== null && _ === o)) break;
      (v !== 5 && v !== 26 && v !== 27) ||
        j === null ||
        ((_ = j),
        c
          ? ((j = lo(r, d)), j != null && g.unshift(Go(r, j, _)))
          : c || ((j = lo(r, d)), j != null && g.push(Go(r, j, _)))),
        (r = r.return);
    }
    g.length !== 0 && e.push({ event: n, listeners: g });
  }
  var R1 = /\r\n?/g,
    O1 = /\u0000|\uFFFD/g;
  function kg(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        R1,
        `
`
      )
      .replace(O1, "");
  }
  function Ng(e, n) {
    return (n = kg(n)), kg(e) === n;
  }
  function Bs() {}
  function tt(e, n, r, o, c, d) {
    switch (r) {
      case "children":
        typeof o == "string"
          ? n === "body" || (n === "textarea" && o === "") || ri(e, o)
          : (typeof o == "number" || typeof o == "bigint") &&
            n !== "body" &&
            ri(e, "" + o);
        break;
      case "className":
        ra(e, "class", o);
        break;
      case "tabIndex":
        ra(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ra(e, r, o);
        break;
      case "style":
        Mh(e, o, d);
        break;
      case "data":
        if (n !== "object") {
          ra(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || r !== "href")) {
          e.removeAttribute(r);
          break;
        }
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "symbol" ||
          typeof o == "boolean"
        ) {
          e.removeAttribute(r);
          break;
        }
        (o = Xl("" + o)), e.setAttribute(r, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            r,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof d == "function" &&
            (r === "formAction"
              ? (n !== "input" && tt(e, n, "name", c.name, c, null),
                tt(e, n, "formEncType", c.formEncType, c, null),
                tt(e, n, "formMethod", c.formMethod, c, null),
                tt(e, n, "formTarget", c.formTarget, c, null))
              : (tt(e, n, "encType", c.encType, c, null),
                tt(e, n, "method", c.method, c, null),
                tt(e, n, "target", c.target, c, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(r);
          break;
        }
        (o = Xl("" + o)), e.setAttribute(r, o);
        break;
      case "onClick":
        o != null && (e.onclick = Bs);
        break;
      case "onScroll":
        o != null && Ie("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Ie("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(l(61));
          if (((r = o.__html), r != null)) {
            if (c.children != null) throw Error(l(60));
            e.innerHTML = r;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
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
          o == null ||
          typeof o == "function" ||
          typeof o == "boolean" ||
          typeof o == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (r = Xl("" + o)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol"
          ? e.setAttribute(r, "" + o)
          : e.removeAttribute(r);
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
        o && typeof o != "function" && typeof o != "symbol"
          ? e.setAttribute(r, "")
          : e.removeAttribute(r);
        break;
      case "capture":
      case "download":
        o === !0
          ? e.setAttribute(r, "")
          : o !== !1 &&
            o != null &&
            typeof o != "function" &&
            typeof o != "symbol"
          ? e.setAttribute(r, o)
          : e.removeAttribute(r);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        !isNaN(o) &&
        1 <= o
          ? e.setAttribute(r, o)
          : e.removeAttribute(r);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? e.removeAttribute(r)
          : e.setAttribute(r, o);
        break;
      case "popover":
        Ie("beforetoggle", e), Ie("toggle", e), bn(e, "popover", o);
        break;
      case "xlinkActuate":
        je(e, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        je(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        je(e, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        je(e, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        je(e, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        je(e, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        je(e, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        je(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        je(e, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        bn(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < r.length) ||
          (r[0] !== "o" && r[0] !== "O") ||
          (r[1] !== "n" && r[1] !== "N")) &&
          ((r = iw.get(r) || r), bn(e, r, o));
    }
  }
  function Bd(e, n, r, o, c, d) {
    switch (r) {
      case "style":
        Mh(e, o, d);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(l(61));
          if (((r = o.__html), r != null)) {
            if (c.children != null) throw Error(l(60));
            e.innerHTML = r;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? ri(e, o)
          : (typeof o == "number" || typeof o == "bigint") && ri(e, "" + o);
        break;
      case "onScroll":
        o != null && Ie("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Ie("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = Bs);
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
        if (!Oa.hasOwnProperty(r))
          e: {
            if (
              r[0] === "o" &&
              r[1] === "n" &&
              ((c = r.endsWith("Capture")),
              (n = r.slice(2, c ? r.length - 7 : void 0)),
              (d = e[te] || null),
              (d = d != null ? d[r] : null),
              typeof d == "function" && e.removeEventListener(n, d, c),
              typeof o == "function")
            ) {
              typeof d != "function" &&
                d !== null &&
                (r in e
                  ? (e[r] = null)
                  : e.hasAttribute(r) && e.removeAttribute(r)),
                e.addEventListener(n, o, c);
              break e;
            }
            r in e
              ? (e[r] = o)
              : o === !0
              ? e.setAttribute(r, "")
              : bn(e, r, o);
          }
    }
  }
  function Lt(e, n, r) {
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
        Ie("error", e), Ie("load", e);
        var o = !1,
          c = !1,
          d;
        for (d in r)
          if (r.hasOwnProperty(d)) {
            var g = r[d];
            if (g != null)
              switch (d) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(137, n));
                default:
                  tt(e, n, d, g, r, null);
              }
          }
        c && tt(e, n, "srcSet", r.srcSet, r, null),
          o && tt(e, n, "src", r.src, r, null);
        return;
      case "input":
        Ie("invalid", e);
        var v = (d = g = c = null),
          _ = null,
          j = null;
        for (o in r)
          if (r.hasOwnProperty(o)) {
            var G = r[o];
            if (G != null)
              switch (o) {
                case "name":
                  c = G;
                  break;
                case "type":
                  g = G;
                  break;
                case "checked":
                  _ = G;
                  break;
                case "defaultChecked":
                  j = G;
                  break;
                case "value":
                  d = G;
                  break;
                case "defaultValue":
                  v = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null) throw Error(l(137, n));
                  break;
                default:
                  tt(e, n, o, G, r, null);
              }
          }
        Oh(e, d, v, _, j, g, c, !1), $l(e);
        return;
      case "select":
        Ie("invalid", e), (o = g = d = null);
        for (c in r)
          if (r.hasOwnProperty(c) && ((v = r[c]), v != null))
            switch (c) {
              case "value":
                d = v;
                break;
              case "defaultValue":
                g = v;
                break;
              case "multiple":
                o = v;
              default:
                tt(e, n, c, v, r, null);
            }
        (n = d),
          (r = g),
          (e.multiple = !!o),
          n != null ? ai(e, !!o, n, !1) : r != null && ai(e, !!o, r, !0);
        return;
      case "textarea":
        Ie("invalid", e), (d = c = o = null);
        for (g in r)
          if (r.hasOwnProperty(g) && ((v = r[g]), v != null))
            switch (g) {
              case "value":
                o = v;
                break;
              case "defaultValue":
                c = v;
                break;
              case "children":
                d = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(l(91));
                break;
              default:
                tt(e, n, g, v, r, null);
            }
        Nh(e, o, c, d), $l(e);
        return;
      case "option":
        for (_ in r)
          if (r.hasOwnProperty(_) && ((o = r[_]), o != null))
            switch (_) {
              case "selected":
                e.selected =
                  o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                tt(e, n, _, o, r, null);
            }
        return;
      case "dialog":
        Ie("beforetoggle", e), Ie("toggle", e), Ie("cancel", e), Ie("close", e);
        break;
      case "iframe":
      case "object":
        Ie("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < qo.length; o++) Ie(qo[o], e);
        break;
      case "image":
        Ie("error", e), Ie("load", e);
        break;
      case "details":
        Ie("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ie("error", e), Ie("load", e);
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
        for (j in r)
          if (r.hasOwnProperty(j) && ((o = r[j]), o != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, n));
              default:
                tt(e, n, j, o, r, null);
            }
        return;
      default:
        if (tu(n)) {
          for (G in r)
            r.hasOwnProperty(G) &&
              ((o = r[G]), o !== void 0 && Bd(e, n, G, o, r, void 0));
          return;
        }
    }
    for (v in r)
      r.hasOwnProperty(v) && ((o = r[v]), o != null && tt(e, n, v, o, r, null));
  }
  function k1(e, n, r, o) {
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
        var c = null,
          d = null,
          g = null,
          v = null,
          _ = null,
          j = null,
          G = null;
        for (U in r) {
          var X = r[U];
          if (r.hasOwnProperty(U) && X != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                _ = X;
              default:
                o.hasOwnProperty(U) || tt(e, n, U, null, o, X);
            }
        }
        for (var L in o) {
          var U = o[L];
          if (((X = r[L]), o.hasOwnProperty(L) && (U != null || X != null)))
            switch (L) {
              case "type":
                d = U;
                break;
              case "name":
                c = U;
                break;
              case "checked":
                j = U;
                break;
              case "defaultChecked":
                G = U;
                break;
              case "value":
                g = U;
                break;
              case "defaultValue":
                v = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(l(137, n));
                break;
              default:
                U !== X && tt(e, n, L, U, o, X);
            }
        }
        Wc(e, g, v, _, j, G, d, c);
        return;
      case "select":
        U = g = v = L = null;
        for (d in r)
          if (((_ = r[d]), r.hasOwnProperty(d) && _ != null))
            switch (d) {
              case "value":
                break;
              case "multiple":
                U = _;
              default:
                o.hasOwnProperty(d) || tt(e, n, d, null, o, _);
            }
        for (c in o)
          if (
            ((d = o[c]),
            (_ = r[c]),
            o.hasOwnProperty(c) && (d != null || _ != null))
          )
            switch (c) {
              case "value":
                L = d;
                break;
              case "defaultValue":
                v = d;
                break;
              case "multiple":
                g = d;
              default:
                d !== _ && tt(e, n, c, d, o, _);
            }
        (n = v),
          (r = g),
          (o = U),
          L != null
            ? ai(e, !!r, L, !1)
            : !!o != !!r &&
              (n != null ? ai(e, !!r, n, !0) : ai(e, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        U = L = null;
        for (v in r)
          if (
            ((c = r[v]),
            r.hasOwnProperty(v) && c != null && !o.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                tt(e, n, v, null, o, c);
            }
        for (g in o)
          if (
            ((c = o[g]),
            (d = r[g]),
            o.hasOwnProperty(g) && (c != null || d != null))
          )
            switch (g) {
              case "value":
                L = c;
                break;
              case "defaultValue":
                U = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(l(91));
                break;
              default:
                c !== d && tt(e, n, g, c, o, d);
            }
        kh(e, L, U);
        return;
      case "option":
        for (var Ae in r)
          if (
            ((L = r[Ae]),
            r.hasOwnProperty(Ae) && L != null && !o.hasOwnProperty(Ae))
          )
            switch (Ae) {
              case "selected":
                e.selected = !1;
                break;
              default:
                tt(e, n, Ae, null, o, L);
            }
        for (_ in o)
          if (
            ((L = o[_]),
            (U = r[_]),
            o.hasOwnProperty(_) && L !== U && (L != null || U != null))
          )
            switch (_) {
              case "selected":
                e.selected =
                  L && typeof L != "function" && typeof L != "symbol";
                break;
              default:
                tt(e, n, _, L, o, U);
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
        for (var xe in r)
          (L = r[xe]),
            r.hasOwnProperty(xe) &&
              L != null &&
              !o.hasOwnProperty(xe) &&
              tt(e, n, xe, null, o, L);
        for (j in o)
          if (
            ((L = o[j]),
            (U = r[j]),
            o.hasOwnProperty(j) && L !== U && (L != null || U != null))
          )
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null) throw Error(l(137, n));
                break;
              default:
                tt(e, n, j, L, o, U);
            }
        return;
      default:
        if (tu(n)) {
          for (var nt in r)
            (L = r[nt]),
              r.hasOwnProperty(nt) &&
                L !== void 0 &&
                !o.hasOwnProperty(nt) &&
                Bd(e, n, nt, void 0, o, L);
          for (G in o)
            (L = o[G]),
              (U = r[G]),
              !o.hasOwnProperty(G) ||
                L === U ||
                (L === void 0 && U === void 0) ||
                Bd(e, n, G, L, o, U);
          return;
        }
    }
    for (var k in r)
      (L = r[k]),
        r.hasOwnProperty(k) &&
          L != null &&
          !o.hasOwnProperty(k) &&
          tt(e, n, k, null, o, L);
    for (X in o)
      (L = o[X]),
        (U = r[X]),
        !o.hasOwnProperty(X) ||
          L === U ||
          (L == null && U == null) ||
          tt(e, n, X, L, o, U);
  }
  var Hd = null,
    Pd = null;
  function Hs(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Dg(e) {
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
  function Vd(e, n) {
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
  var qd = null;
  function N1() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === qd
        ? !1
        : ((qd = e), !0)
      : ((qd = null), !1);
  }
  var jg = typeof setTimeout == "function" ? setTimeout : void 0,
    D1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Lg = typeof Promise == "function" ? Promise : void 0,
    M1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Lg < "u"
        ? function (e) {
            return Lg.resolve(null).then(e).catch(j1);
          }
        : jg;
  function j1(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Fa(e) {
    return e === "head";
  }
  function zg(e, n) {
    var r = n,
      o = 0,
      c = 0;
    do {
      var d = r.nextSibling;
      if ((e.removeChild(r), d && d.nodeType === 8))
        if (((r = d.data), r === "/$")) {
          if (0 < o && 8 > o) {
            r = o;
            var g = e.ownerDocument;
            if ((r & 1 && $o(g.documentElement), r & 2 && $o(g.body), r & 4))
              for (r = g.head, $o(r), g = r.firstChild; g; ) {
                var v = g.nextSibling,
                  _ = g.nodeName;
                g[Se] ||
                  _ === "SCRIPT" ||
                  _ === "STYLE" ||
                  (_ === "LINK" && g.rel.toLowerCase() === "stylesheet") ||
                  r.removeChild(g),
                  (g = v);
              }
          }
          if (c === 0) {
            e.removeChild(d), Wo(n);
            return;
          }
          c--;
        } else
          r === "$" || r === "$?" || r === "$!"
            ? c++
            : (o = r.charCodeAt(0) - 48);
      else o = 0;
      r = d;
    } while (r);
    Wo(n);
  }
  function Gd(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var r = n;
      switch (((n = n.nextSibling), r.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Gd(r), me(r);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (r.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(r);
    }
  }
  function L1(e, n, r, o) {
    for (; e.nodeType === 1; ) {
      var c = r;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (o) {
        if (!e[Se])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((d = e.getAttribute("rel")),
                d === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                d !== c.rel ||
                e.getAttribute("href") !==
                  (c.href == null || c.href === "" ? null : c.href) ||
                e.getAttribute("crossorigin") !==
                  (c.crossOrigin == null ? null : c.crossOrigin) ||
                e.getAttribute("title") !== (c.title == null ? null : c.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((d = e.getAttribute("src")),
                (d !== (c.src == null ? null : c.src) ||
                  e.getAttribute("type") !== (c.type == null ? null : c.type) ||
                  e.getAttribute("crossorigin") !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  d &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var d = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === d) return e;
      } else return e;
      if (((e = In(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function z1(e, n, r) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !r) ||
        ((e = In(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function $d(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function U1(e, n) {
    var r = e.ownerDocument;
    if (e.data !== "$?" || r.readyState === "complete") n();
    else {
      var o = function () {
        n(), r.removeEventListener("DOMContentLoaded", o);
      };
      r.addEventListener("DOMContentLoaded", o), (e._reactRetry = o);
    }
  }
  function In(e) {
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
  var Yd = null;
  function Ug(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (n === 0) return e;
          n--;
        } else r === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Ig(e, n, r) {
    switch (((n = Hs(r)), e)) {
      case "html":
        if (((e = n.documentElement), !e)) throw Error(l(452));
        return e;
      case "head":
        if (((e = n.head), !e)) throw Error(l(453));
        return e;
      case "body":
        if (((e = n.body), !e)) throw Error(l(454));
        return e;
      default:
        throw Error(l(451));
    }
  }
  function $o(e) {
    for (var n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
    me(e);
  }
  var An = new Map(),
    Bg = new Set();
  function Ps(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var va = J.d;
  J.d = { f: I1, r: B1, D: H1, C: P1, L: V1, m: q1, X: $1, S: G1, M: Y1 };
  function I1() {
    var e = va.f(),
      n = Ds();
    return e || n;
  }
  function B1(e) {
    var n = qe(e);
    n !== null && n.tag === 5 && n.type === "form" ? ip(n) : va.r(e);
  }
  var Mi = typeof document > "u" ? null : document;
  function Hg(e, n, r) {
    var o = Mi;
    if (o && typeof n == "string" && n) {
      var c = wn(n);
      (c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof r == "string" && (c += '[crossorigin="' + r + '"]'),
        Bg.has(c) ||
          (Bg.add(c),
          (e = { rel: e, crossOrigin: r, href: n }),
          o.querySelector(c) === null &&
            ((n = o.createElement("link")),
            Lt(n, "link", e),
            Ge(n),
            o.head.appendChild(n)));
    }
  }
  function H1(e) {
    va.D(e), Hg("dns-prefetch", e, null);
  }
  function P1(e, n) {
    va.C(e, n), Hg("preconnect", e, n);
  }
  function V1(e, n, r) {
    va.L(e, n, r);
    var o = Mi;
    if (o && e && n) {
      var c = 'link[rel="preload"][as="' + wn(n) + '"]';
      n === "image" && r && r.imageSrcSet
        ? ((c += '[imagesrcset="' + wn(r.imageSrcSet) + '"]'),
          typeof r.imageSizes == "string" &&
            (c += '[imagesizes="' + wn(r.imageSizes) + '"]'))
        : (c += '[href="' + wn(e) + '"]');
      var d = c;
      switch (n) {
        case "style":
          d = ji(e);
          break;
        case "script":
          d = Li(e);
      }
      An.has(d) ||
        ((e = b(
          {
            rel: "preload",
            href: n === "image" && r && r.imageSrcSet ? void 0 : e,
            as: n,
          },
          r
        )),
        An.set(d, e),
        o.querySelector(c) !== null ||
          (n === "style" && o.querySelector(Yo(d))) ||
          (n === "script" && o.querySelector(Xo(d))) ||
          ((n = o.createElement("link")),
          Lt(n, "link", e),
          Ge(n),
          o.head.appendChild(n)));
    }
  }
  function q1(e, n) {
    va.m(e, n);
    var r = Mi;
    if (r && e) {
      var o = n && typeof n.as == "string" ? n.as : "script",
        c =
          'link[rel="modulepreload"][as="' + wn(o) + '"][href="' + wn(e) + '"]',
        d = c;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = Li(e);
      }
      if (
        !An.has(d) &&
        ((e = b({ rel: "modulepreload", href: e }, n)),
        An.set(d, e),
        r.querySelector(c) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(Xo(d))) return;
        }
        (o = r.createElement("link")),
          Lt(o, "link", e),
          Ge(o),
          r.head.appendChild(o);
      }
    }
  }
  function G1(e, n, r) {
    va.S(e, n, r);
    var o = Mi;
    if (o && e) {
      var c = ft(o).hoistableStyles,
        d = ji(e);
      n = n || "default";
      var g = c.get(d);
      if (!g) {
        var v = { loading: 0, preload: null };
        if ((g = o.querySelector(Yo(d)))) v.loading = 5;
        else {
          (e = b({ rel: "stylesheet", href: e, "data-precedence": n }, r)),
            (r = An.get(d)) && Xd(e, r);
          var _ = (g = o.createElement("link"));
          Ge(_),
            Lt(_, "link", e),
            (_._p = new Promise(function (j, G) {
              (_.onload = j), (_.onerror = G);
            })),
            _.addEventListener("load", function () {
              v.loading |= 1;
            }),
            _.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            Vs(g, n, o);
        }
        (g = { type: "stylesheet", instance: g, count: 1, state: v }),
          c.set(d, g);
      }
    }
  }
  function $1(e, n) {
    va.X(e, n);
    var r = Mi;
    if (r && e) {
      var o = ft(r).hoistableScripts,
        c = Li(e),
        d = o.get(c);
      d ||
        ((d = r.querySelector(Xo(c))),
        d ||
          ((e = b({ src: e, async: !0 }, n)),
          (n = An.get(c)) && Kd(e, n),
          (d = r.createElement("script")),
          Ge(d),
          Lt(d, "link", e),
          r.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        o.set(c, d));
    }
  }
  function Y1(e, n) {
    va.M(e, n);
    var r = Mi;
    if (r && e) {
      var o = ft(r).hoistableScripts,
        c = Li(e),
        d = o.get(c);
      d ||
        ((d = r.querySelector(Xo(c))),
        d ||
          ((e = b({ src: e, async: !0, type: "module" }, n)),
          (n = An.get(c)) && Kd(e, n),
          (d = r.createElement("script")),
          Ge(d),
          Lt(d, "link", e),
          r.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        o.set(c, d));
    }
  }
  function Pg(e, n, r, o) {
    var c = (c = fe.current) ? Ps(c) : null;
    if (!c) throw Error(l(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string"
          ? ((n = ji(r.href)),
            (r = ft(c).hoistableStyles),
            (o = r.get(n)),
            o ||
              ((o = { type: "style", instance: null, count: 0, state: null }),
              r.set(n, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          r.rel === "stylesheet" &&
          typeof r.href == "string" &&
          typeof r.precedence == "string"
        ) {
          e = ji(r.href);
          var d = ft(c).hoistableStyles,
            g = d.get(e);
          if (
            (g ||
              ((c = c.ownerDocument || c),
              (g = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              d.set(e, g),
              (d = c.querySelector(Yo(e))) &&
                !d._p &&
                ((g.instance = d), (g.state.loading = 5)),
              An.has(e) ||
                ((r = {
                  rel: "preload",
                  as: "style",
                  href: r.href,
                  crossOrigin: r.crossOrigin,
                  integrity: r.integrity,
                  media: r.media,
                  hrefLang: r.hrefLang,
                  referrerPolicy: r.referrerPolicy,
                }),
                An.set(e, r),
                d || X1(c, e, r, g.state))),
            n && o === null)
          )
            throw Error(l(528, ""));
          return g;
        }
        if (n && o !== null) throw Error(l(529, ""));
        return null;
      case "script":
        return (
          (n = r.async),
          (r = r.src),
          typeof r == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = Li(r)),
              (r = ft(c).hoistableScripts),
              (o = r.get(n)),
              o ||
                ((o = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                r.set(n, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(l(444, e));
    }
  }
  function ji(e) {
    return 'href="' + wn(e) + '"';
  }
  function Yo(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Vg(e) {
    return b({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function X1(e, n, r, o) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (o.loading = 1)
      : ((n = e.createElement("link")),
        (o.preload = n),
        n.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        Lt(n, "link", r),
        Ge(n),
        e.head.appendChild(n));
  }
  function Li(e) {
    return '[src="' + wn(e) + '"]';
  }
  function Xo(e) {
    return "script[async]" + e;
  }
  function qg(e, n, r) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var o = e.querySelector('style[data-href~="' + wn(r.href) + '"]');
          if (o) return (n.instance = o), Ge(o), o;
          var c = b({}, r, {
            "data-href": r.href,
            "data-precedence": r.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (e.ownerDocument || e).createElement("style")),
            Ge(o),
            Lt(o, "style", c),
            Vs(o, r.precedence, e),
            (n.instance = o)
          );
        case "stylesheet":
          c = ji(r.href);
          var d = e.querySelector(Yo(c));
          if (d) return (n.state.loading |= 4), (n.instance = d), Ge(d), d;
          (o = Vg(r)),
            (c = An.get(c)) && Xd(o, c),
            (d = (e.ownerDocument || e).createElement("link")),
            Ge(d);
          var g = d;
          return (
            (g._p = new Promise(function (v, _) {
              (g.onload = v), (g.onerror = _);
            })),
            Lt(d, "link", o),
            (n.state.loading |= 4),
            Vs(d, r.precedence, e),
            (n.instance = d)
          );
        case "script":
          return (
            (d = Li(r.src)),
            (c = e.querySelector(Xo(d)))
              ? ((n.instance = c), Ge(c), c)
              : ((o = r),
                (c = An.get(d)) && ((o = b({}, r)), Kd(o, c)),
                (e = e.ownerDocument || e),
                (c = e.createElement("script")),
                Ge(c),
                Lt(c, "link", o),
                e.head.appendChild(c),
                (n.instance = c))
          );
        case "void":
          return null;
        default:
          throw Error(l(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((o = n.instance), (n.state.loading |= 4), Vs(o, r.precedence, e));
    return n.instance;
  }
  function Vs(e, n, r) {
    for (
      var o = r.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        c = o.length ? o[o.length - 1] : null,
        d = c,
        g = 0;
      g < o.length;
      g++
    ) {
      var v = o[g];
      if (v.dataset.precedence === n) d = v;
      else if (d !== c) break;
    }
    d
      ? d.parentNode.insertBefore(e, d.nextSibling)
      : ((n = r.nodeType === 9 ? r.head : r), n.insertBefore(e, n.firstChild));
  }
  function Xd(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.title == null && (e.title = n.title);
  }
  function Kd(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.integrity == null && (e.integrity = n.integrity);
  }
  var qs = null;
  function Gg(e, n, r) {
    if (qs === null) {
      var o = new Map(),
        c = (qs = new Map());
      c.set(r, o);
    } else (c = qs), (o = c.get(r)), o || ((o = new Map()), c.set(r, o));
    if (o.has(e)) return o;
    for (
      o.set(e, null), r = r.getElementsByTagName(e), c = 0;
      c < r.length;
      c++
    ) {
      var d = r[c];
      if (
        !(
          d[Se] ||
          d[K] ||
          (e === "link" && d.getAttribute("rel") === "stylesheet")
        ) &&
        d.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var g = d.getAttribute(n) || "";
        g = e + g;
        var v = o.get(g);
        v ? v.push(d) : o.set(g, [d]);
      }
    }
    return o;
  }
  function $g(e, n, r) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        r,
        n === "title" ? e.querySelector("head > title") : null
      );
  }
  function K1(e, n, r) {
    if (r === 1 || n.itemProp != null) return !1;
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
  function Yg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ko = null;
  function F1() {}
  function Q1(e, n, r) {
    if (Ko === null) throw Error(l(475));
    var o = Ko;
    if (
      n.type === "stylesheet" &&
      (typeof r.media != "string" || matchMedia(r.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var c = ji(r.href),
          d = e.querySelector(Yo(c));
        if (d) {
          (e = d._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (o.count++, (o = Gs.bind(o)), e.then(o, o)),
            (n.state.loading |= 4),
            (n.instance = d),
            Ge(d);
          return;
        }
        (d = e.ownerDocument || e),
          (r = Vg(r)),
          (c = An.get(c)) && Xd(r, c),
          (d = d.createElement("link")),
          Ge(d);
        var g = d;
        (g._p = new Promise(function (v, _) {
          (g.onload = v), (g.onerror = _);
        })),
          Lt(d, "link", r),
          (n.instance = d);
      }
      o.stylesheets === null && (o.stylesheets = new Map()),
        o.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (o.count++,
          (n = Gs.bind(o)),
          e.addEventListener("load", n),
          e.addEventListener("error", n));
    }
  }
  function Z1() {
    if (Ko === null) throw Error(l(475));
    var e = Ko;
    return (
      e.stylesheets && e.count === 0 && Fd(e, e.stylesheets),
      0 < e.count
        ? function (n) {
            var r = setTimeout(function () {
              if ((e.stylesheets && Fd(e, e.stylesheets), e.unsuspend)) {
                var o = e.unsuspend;
                (e.unsuspend = null), o();
              }
            }, 6e4);
            return (
              (e.unsuspend = n),
              function () {
                (e.unsuspend = null), clearTimeout(r);
              }
            );
          }
        : null
    );
  }
  function Gs() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Fd(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var $s = null;
  function Fd(e, n) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        ($s = new Map()),
        n.forEach(J1, e),
        ($s = null),
        Gs.call(e));
  }
  function J1(e, n) {
    if (!(n.state.loading & 4)) {
      var r = $s.get(e);
      if (r) var o = r.get(null);
      else {
        (r = new Map()), $s.set(e, r);
        for (
          var c = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            d = 0;
          d < c.length;
          d++
        ) {
          var g = c[d];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") &&
            (r.set(g.dataset.precedence, g), (o = g));
        }
        o && r.set(null, o);
      }
      (c = n.instance),
        (g = c.getAttribute("data-precedence")),
        (d = r.get(g) || o),
        d === o && r.set(null, c),
        r.set(g, c),
        this.count++,
        (o = Gs.bind(this)),
        c.addEventListener("load", o),
        c.addEventListener("error", o),
        d
          ? d.parentNode.insertBefore(c, d.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(c, e.firstChild)),
        (n.state.loading |= 4);
    }
  }
  var Fo = {
    $$typeof: V,
    Provider: null,
    Consumer: null,
    _currentValue: le,
    _currentValue2: le,
    _threadCount: 0,
  };
  function W1(e, n, r, o, c, d, g, v) {
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
      (this.expirationTimes = ni(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ni(0)),
      (this.hiddenUpdates = ni(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = c),
      (this.onCaughtError = d),
      (this.onRecoverableError = g),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = v),
      (this.incompleteTransitions = new Map());
  }
  function Xg(e, n, r, o, c, d, g, v, _, j, G, X) {
    return (
      (e = new W1(e, n, r, g, v, _, j, X)),
      (n = 1),
      d === !0 && (n |= 24),
      (d = on(3, null, null, n)),
      (e.current = d),
      (d.stateNode = e),
      (n = ku()),
      n.refCount++,
      (e.pooledCache = n),
      n.refCount++,
      (d.memoizedState = { element: o, isDehydrated: r, cache: n }),
      ju(d),
      e
    );
  }
  function Kg(e) {
    return e ? ((e = fi), e) : fi;
  }
  function Fg(e, n, r, o, c, d) {
    (c = Kg(c)),
      o.context === null ? (o.context = c) : (o.pendingContext = c),
      (o = za(n)),
      (o.payload = { element: r }),
      (d = d === void 0 ? null : d),
      d !== null && (o.callback = d),
      (r = Ua(e, o, n)),
      r !== null && (dn(r, e, n), To(r, e, n));
  }
  function Qg(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < n ? r : n;
    }
  }
  function Qd(e, n) {
    Qg(e, n), (e = e.alternate) && Qg(e, n);
  }
  function Zg(e) {
    if (e.tag === 13) {
      var n = di(e, 67108864);
      n !== null && dn(n, e, 67108864), Qd(e, 67108864);
    }
  }
  var Ys = !0;
  function e2(e, n, r, o) {
    var c = D.T;
    D.T = null;
    var d = J.p;
    try {
      (J.p = 2), Zd(e, n, r, o);
    } finally {
      (J.p = d), (D.T = c);
    }
  }
  function t2(e, n, r, o) {
    var c = D.T;
    D.T = null;
    var d = J.p;
    try {
      (J.p = 8), Zd(e, n, r, o);
    } finally {
      (J.p = d), (D.T = c);
    }
  }
  function Zd(e, n, r, o) {
    if (Ys) {
      var c = Jd(o);
      if (c === null) Id(e, n, o, Xs, r), Wg(e, o);
      else if (a2(c, e, n, r, o)) o.stopPropagation();
      else if ((Wg(e, o), n & 4 && -1 < n2.indexOf(e))) {
        for (; c !== null; ) {
          var d = qe(c);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (((d = d.stateNode), d.current.memoizedState.isDehydrated)) {
                  var g = aa(d.pendingLanes);
                  if (g !== 0) {
                    var v = d;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; g; ) {
                      var _ = 1 << (31 - Dt(g));
                      (v.entanglements[1] |= _), (g &= ~_);
                    }
                    Fn(d), (Ze & 6) === 0 && ((ks = It() + 500), Vo(0));
                  }
                }
                break;
              case 13:
                (v = di(d, 2)), v !== null && dn(v, d, 2), Ds(), Qd(d, 2);
            }
          if (((d = Jd(o)), d === null && Id(e, n, o, Xs, r), d === c)) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Id(e, n, o, null, r);
    }
  }
  function Jd(e) {
    return (e = au(e)), Wd(e);
  }
  var Xs = null;
  function Wd(e) {
    if (((Xs = null), (e = Re(e)), e !== null)) {
      var n = u(e);
      if (n === null) e = null;
      else {
        var r = n.tag;
        if (r === 13) {
          if (((e = f(n)), e !== null)) return e;
          e = null;
        } else if (r === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return (Xs = e), null;
  }
  function Jg(e) {
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
        switch (Zc()) {
          case Il:
            return 2;
          case Bl:
            return 8;
          case ei:
          case na:
            return 32;
          case Ra:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ef = !1,
    Qa = null,
    Za = null,
    Ja = null,
    Qo = new Map(),
    Zo = new Map(),
    Wa = [],
    n2 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Wg(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Qa = null;
        break;
      case "dragenter":
      case "dragleave":
        Za = null;
        break;
      case "mouseover":
      case "mouseout":
        Ja = null;
        break;
      case "pointerover":
      case "pointerout":
        Qo.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Zo.delete(n.pointerId);
    }
  }
  function Jo(e, n, r, o, c, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: n,
          domEventName: r,
          eventSystemFlags: o,
          nativeEvent: d,
          targetContainers: [c],
        }),
        n !== null && ((n = qe(n)), n !== null && Zg(n)),
        e)
      : ((e.eventSystemFlags |= o),
        (n = e.targetContainers),
        c !== null && n.indexOf(c) === -1 && n.push(c),
        e);
  }
  function a2(e, n, r, o, c) {
    switch (n) {
      case "focusin":
        return (Qa = Jo(Qa, e, n, r, o, c)), !0;
      case "dragenter":
        return (Za = Jo(Za, e, n, r, o, c)), !0;
      case "mouseover":
        return (Ja = Jo(Ja, e, n, r, o, c)), !0;
      case "pointerover":
        var d = c.pointerId;
        return Qo.set(d, Jo(Qo.get(d) || null, e, n, r, o, c)), !0;
      case "gotpointercapture":
        return (
          (d = c.pointerId), Zo.set(d, Jo(Zo.get(d) || null, e, n, r, o, c)), !0
        );
    }
    return !1;
  }
  function e0(e) {
    var n = Re(e.target);
    if (n !== null) {
      var r = u(n);
      if (r !== null) {
        if (((n = r.tag), n === 13)) {
          if (((n = f(r)), n !== null)) {
            (e.blockedOn = n),
              N(e.priority, function () {
                if (r.tag === 13) {
                  var o = un();
                  o = ao(o);
                  var c = di(r, o);
                  c !== null && dn(c, r, o), Qd(r, o);
                }
              });
            return;
          }
        } else if (n === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ks(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var r = Jd(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        (nu = o), r.target.dispatchEvent(o), (nu = null);
      } else return (n = qe(r)), n !== null && Zg(n), (e.blockedOn = r), !1;
      n.shift();
    }
    return !0;
  }
  function t0(e, n, r) {
    Ks(e) && r.delete(n);
  }
  function r2() {
    (ef = !1),
      Qa !== null && Ks(Qa) && (Qa = null),
      Za !== null && Ks(Za) && (Za = null),
      Ja !== null && Ks(Ja) && (Ja = null),
      Qo.forEach(t0),
      Zo.forEach(t0);
  }
  function Fs(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      ef ||
        ((ef = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, r2)));
  }
  var Qs = null;
  function n0(e) {
    Qs !== e &&
      ((Qs = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Qs === e && (Qs = null);
        for (var n = 0; n < e.length; n += 3) {
          var r = e[n],
            o = e[n + 1],
            c = e[n + 2];
          if (typeof o != "function") {
            if (Wd(o || r) === null) continue;
            break;
          }
          var d = qe(r);
          d !== null &&
            (e.splice(n, 3),
            (n -= 3),
            Wu(d, { pending: !0, data: c, method: r.method, action: o }, o, c));
        }
      }));
  }
  function Wo(e) {
    function n(_) {
      return Fs(_, e);
    }
    Qa !== null && Fs(Qa, e),
      Za !== null && Fs(Za, e),
      Ja !== null && Fs(Ja, e),
      Qo.forEach(n),
      Zo.forEach(n);
    for (var r = 0; r < Wa.length; r++) {
      var o = Wa[r];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Wa.length && ((r = Wa[0]), r.blockedOn === null); )
      e0(r), r.blockedOn === null && Wa.shift();
    if (((r = (e.ownerDocument || e).$$reactFormReplay), r != null))
      for (o = 0; o < r.length; o += 3) {
        var c = r[o],
          d = r[o + 1],
          g = c[te] || null;
        if (typeof d == "function") g || n0(r);
        else if (g) {
          var v = null;
          if (d && d.hasAttribute("formAction")) {
            if (((c = d), (g = d[te] || null))) v = g.formAction;
            else if (Wd(c) !== null) continue;
          } else v = g.action;
          typeof v == "function" ? (r[o + 1] = v) : (r.splice(o, 3), (o -= 3)),
            n0(r);
        }
      }
  }
  function tf(e) {
    this._internalRoot = e;
  }
  (Zs.prototype.render = tf.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(l(409));
      var r = n.current,
        o = un();
      Fg(r, o, e, n, null, null);
    }),
    (Zs.prototype.unmount = tf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          Fg(e.current, 2, null, e, null, null), Ds(), (n[he] = null);
        }
      });
  function Zs(e) {
    this._internalRoot = e;
  }
  Zs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = S();
      e = { blockedOn: null, target: e, priority: n };
      for (var r = 0; r < Wa.length && n !== 0 && n < Wa[r].priority; r++);
      Wa.splice(r, 0, e), r === 0 && e0(e);
    }
  };
  var a0 = t.version;
  if (a0 !== "19.1.0") throw Error(l(527, a0, "19.1.0"));
  J.findDOMNode = function (e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function"
        ? Error(l(188))
        : ((e = Object.keys(e).join(",")), Error(l(268, e)));
    return (
      (e = h(n)),
      (e = e !== null ? p(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var i2 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Js = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Js.isDisabled && Js.supportsFiber)
      try {
        (Ft = Js.inject(i2)), (dt = Js);
      } catch {}
  }
  return (
    (tl.createRoot = function (e, n) {
      if (!s(e)) throw Error(l(299));
      var r = !1,
        o = "",
        c = bp,
        d = wp,
        g = xp,
        v = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (r = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (v = n.unstable_transitionCallbacks)),
        (n = Xg(e, 1, !1, null, null, r, o, c, d, g, v, null)),
        (e[he] = n.current),
        Ud(e),
        new tf(n)
      );
    }),
    (tl.hydrateRoot = function (e, n, r) {
      if (!s(e)) throw Error(l(299));
      var o = !1,
        c = "",
        d = bp,
        g = wp,
        v = xp,
        _ = null,
        j = null;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (o = !0),
          r.identifierPrefix !== void 0 && (c = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (d = r.onUncaughtError),
          r.onCaughtError !== void 0 && (g = r.onCaughtError),
          r.onRecoverableError !== void 0 && (v = r.onRecoverableError),
          r.unstable_transitionCallbacks !== void 0 &&
            (_ = r.unstable_transitionCallbacks),
          r.formState !== void 0 && (j = r.formState)),
        (n = Xg(e, 1, !0, n, r ?? null, o, c, d, g, v, _, j)),
        (n.context = Kg(null)),
        (r = n.current),
        (o = un()),
        (o = ao(o)),
        (c = za(o)),
        (c.callback = null),
        Ua(r, c, o),
        (r = o),
        (n.current.lanes = r),
        wr(n, r),
        Fn(n),
        (e[he] = n.current),
        Ud(e),
        new Zs(n)
      );
    }),
    (tl.version = "19.1.0"),
    tl
  );
}
var h0;
function p2() {
  if (h0) return rf.exports;
  h0 = 1;
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
  return a(), (rf.exports = m2()), rf.exports;
}
var g2 = p2(),
  nl = {},
  m0;
function y2() {
  if (m0) return nl;
  (m0 = 1),
    Object.defineProperty(nl, "__esModule", { value: !0 }),
    (nl.parse = f),
    (nl.serialize = p);
  const a = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    t = /^[\u0021-\u003A\u003C-\u007E]*$/,
    i =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    l = /^[\u0020-\u003A\u003D-\u007E]*$/,
    s = Object.prototype.toString,
    u = (() => {
      const w = function () {};
      return (w.prototype = Object.create(null)), w;
    })();
  function f(w, T) {
    const A = new u(),
      P = w.length;
    if (P < 2) return A;
    const H = (T == null ? void 0 : T.decode) || b;
    let z = 0;
    do {
      const I = w.indexOf("=", z);
      if (I === -1) break;
      const V = w.indexOf(";", z),
        Q = V === -1 ? P : V;
      if (I > Q) {
        z = w.lastIndexOf(";", I - 1) + 1;
        continue;
      }
      const F = m(w, z, I),
        O = h(w, I, F),
        ne = w.slice(F, O);
      if (A[ne] === void 0) {
        let Z = m(w, I + 1, Q),
          re = h(w, Q, Z);
        const Oe = H(w.slice(Z, re));
        A[ne] = Oe;
      }
      z = Q + 1;
    } while (z < P);
    return A;
  }
  function m(w, T, A) {
    do {
      const P = w.charCodeAt(T);
      if (P !== 32 && P !== 9) return T;
    } while (++T < A);
    return A;
  }
  function h(w, T, A) {
    for (; T > A; ) {
      const P = w.charCodeAt(--T);
      if (P !== 32 && P !== 9) return T + 1;
    }
    return A;
  }
  function p(w, T, A) {
    const P = (A == null ? void 0 : A.encode) || encodeURIComponent;
    if (!a.test(w)) throw new TypeError(`argument name is invalid: ${w}`);
    const H = P(T);
    if (!t.test(H)) throw new TypeError(`argument val is invalid: ${T}`);
    let z = w + "=" + H;
    if (!A) return z;
    if (A.maxAge !== void 0) {
      if (!Number.isInteger(A.maxAge))
        throw new TypeError(`option maxAge is invalid: ${A.maxAge}`);
      z += "; Max-Age=" + A.maxAge;
    }
    if (A.domain) {
      if (!i.test(A.domain))
        throw new TypeError(`option domain is invalid: ${A.domain}`);
      z += "; Domain=" + A.domain;
    }
    if (A.path) {
      if (!l.test(A.path))
        throw new TypeError(`option path is invalid: ${A.path}`);
      z += "; Path=" + A.path;
    }
    if (A.expires) {
      if (!x(A.expires) || !Number.isFinite(A.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${A.expires}`);
      z += "; Expires=" + A.expires.toUTCString();
    }
    if (
      (A.httpOnly && (z += "; HttpOnly"),
      A.secure && (z += "; Secure"),
      A.partitioned && (z += "; Partitioned"),
      A.priority)
    )
      switch (
        typeof A.priority == "string" ? A.priority.toLowerCase() : void 0
      ) {
        case "low":
          z += "; Priority=Low";
          break;
        case "medium":
          z += "; Priority=Medium";
          break;
        case "high":
          z += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${A.priority}`);
      }
    if (A.sameSite)
      switch (
        typeof A.sameSite == "string" ? A.sameSite.toLowerCase() : A.sameSite
      ) {
        case !0:
        case "strict":
          z += "; SameSite=Strict";
          break;
        case "lax":
          z += "; SameSite=Lax";
          break;
        case "none":
          z += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${A.sameSite}`);
      }
    return z;
  }
  function b(w) {
    if (w.indexOf("%") === -1) return w;
    try {
      return decodeURIComponent(w);
    } catch {
      return w;
    }
  }
  function x(w) {
    return s.call(w) === "[object Date]";
  }
  return nl;
}
y2();
/**
 * react-router v7.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var ky = (a) => {
    throw TypeError(a);
  },
  v2 = (a, t, i) => t.has(a) || ky("Cannot " + i),
  cf = (a, t, i) => (
    v2(a, t, "read from private field"), i ? i.call(a) : t.get(a)
  ),
  b2 = (a, t, i) =>
    t.has(a)
      ? ky("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(a)
      : t.set(a, i),
  p0 = "popstate";
function w2(a = {}) {
  function t(l, s) {
    let { pathname: u, search: f, hash: m } = l.location;
    return ml(
      "",
      { pathname: u, search: f, hash: m },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function i(l, s) {
    return typeof s == "string" ? s : dr(s);
  }
  return _2(t, i, null, a);
}
function ze(a, t) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(t);
}
function bt(a, t) {
  if (!a) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function x2() {
  return Math.random().toString(36).substring(2, 10);
}
function g0(a, t) {
  return { usr: a.state, key: a.key, idx: t };
}
function ml(a, t, i = null, l) {
  return {
    pathname: typeof a == "string" ? a : a.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? fr(t) : t),
    state: i,
    key: (t && t.key) || l || x2(),
  };
}
function dr({ pathname: a = "/", search: t = "", hash: i = "" }) {
  return (
    t && t !== "?" && (a += t.charAt(0) === "?" ? t : "?" + t),
    i && i !== "#" && (a += i.charAt(0) === "#" ? i : "#" + i),
    a
  );
}
function fr(a) {
  let t = {};
  if (a) {
    let i = a.indexOf("#");
    i >= 0 && ((t.hash = a.substring(i)), (a = a.substring(0, i)));
    let l = a.indexOf("?");
    l >= 0 && ((t.search = a.substring(l)), (a = a.substring(0, l))),
      a && (t.pathname = a);
  }
  return t;
}
function _2(a, t, i, l = {}) {
  let { window: s = document.defaultView, v5Compat: u = !1 } = l,
    f = s.history,
    m = "POP",
    h = null,
    p = b();
  p == null && ((p = 0), f.replaceState({ ...f.state, idx: p }, ""));
  function b() {
    return (f.state || { idx: null }).idx;
  }
  function x() {
    m = "POP";
    let H = b(),
      z = H == null ? null : H - p;
    (p = H), h && h({ action: m, location: P.location, delta: z });
  }
  function w(H, z) {
    m = "PUSH";
    let I = ml(P.location, H, z);
    p = b() + 1;
    let V = g0(I, p),
      Q = P.createHref(I);
    try {
      f.pushState(V, "", Q);
    } catch (F) {
      if (F instanceof DOMException && F.name === "DataCloneError") throw F;
      s.location.assign(Q);
    }
    u && h && h({ action: m, location: P.location, delta: 1 });
  }
  function T(H, z) {
    m = "REPLACE";
    let I = ml(P.location, H, z);
    p = b();
    let V = g0(I, p),
      Q = P.createHref(I);
    f.replaceState(V, "", Q),
      u && h && h({ action: m, location: P.location, delta: 0 });
  }
  function A(H) {
    return Ny(H);
  }
  let P = {
    get action() {
      return m;
    },
    get location() {
      return a(s, f);
    },
    listen(H) {
      if (h) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(p0, x),
        (h = H),
        () => {
          s.removeEventListener(p0, x), (h = null);
        }
      );
    },
    createHref(H) {
      return t(s, H);
    },
    createURL: A,
    encodeLocation(H) {
      let z = A(H);
      return { pathname: z.pathname, search: z.search, hash: z.hash };
    },
    push: w,
    replace: T,
    go(H) {
      return f.go(H);
    },
  };
  return P;
}
function Ny(a, t = !1) {
  let i = "http://localhost";
  typeof window < "u" &&
    (i =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    ze(i, "No window.location.(origin|href) available to create URL");
  let l = typeof a == "string" ? a : dr(a);
  return (
    (l = l.replace(/ $/, "%20")),
    !t && l.startsWith("//") && (l = i + l),
    new URL(l, i)
  );
}
var ol,
  y0 = class {
    constructor(a) {
      if ((b2(this, ol, new Map()), a)) for (let [t, i] of a) this.set(t, i);
    }
    get(a) {
      if (cf(this, ol).has(a)) return cf(this, ol).get(a);
      if (a.defaultValue !== void 0) return a.defaultValue;
      throw new Error("No value found for context");
    }
    set(a, t) {
      cf(this, ol).set(a, t);
    }
  };
ol = new WeakMap();
var E2 = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function S2(a) {
  return E2.has(a);
}
var T2 = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "unstable_middleware",
  "children",
]);
function C2(a) {
  return T2.has(a);
}
function A2(a) {
  return a.index === !0;
}
function fc(a, t, i = [], l = {}) {
  return a.map((s, u) => {
    let f = [...i, String(u)],
      m = typeof s.id == "string" ? s.id : f.join("-");
    if (
      (ze(
        s.index !== !0 || !s.children,
        "Cannot specify children on an index route"
      ),
      ze(
        !l[m],
        `Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`
      ),
      A2(s))
    ) {
      let h = { ...s, ...t(s), id: m };
      return (l[m] = h), h;
    } else {
      let h = { ...s, ...t(s), id: m, children: void 0 };
      return (
        (l[m] = h), s.children && (h.children = fc(s.children, t, f, l)), h
      );
    }
  });
}
function ar(a, t, i = "/") {
  return rc(a, t, i, !1);
}
function rc(a, t, i, l) {
  let s = typeof t == "string" ? fr(t) : t,
    u = kn(s.pathname || "/", i);
  if (u == null) return null;
  let f = Dy(a);
  O2(f);
  let m = null;
  for (let h = 0; m == null && h < f.length; ++h) {
    let p = H2(u);
    m = I2(f[h], p, l);
  }
  return m;
}
function R2(a, t) {
  let { route: i, pathname: l, params: s } = a;
  return { id: i.id, pathname: l, params: s, data: t[i.id], handle: i.handle };
}
function Dy(a, t = [], i = [], l = "") {
  let s = (u, f, m) => {
    let h = {
      relativePath: m === void 0 ? u.path || "" : m,
      caseSensitive: u.caseSensitive === !0,
      childrenIndex: f,
      route: u,
    };
    h.relativePath.startsWith("/") &&
      (ze(
        h.relativePath.startsWith(l),
        `Absolute route path "${h.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (h.relativePath = h.relativePath.slice(l.length)));
    let p = Zn([l, h.relativePath]),
      b = i.concat(h);
    u.children &&
      u.children.length > 0 &&
      (ze(
        u.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${p}".`
      ),
      Dy(u.children, t, b, p)),
      !(u.path == null && !u.index) &&
        t.push({ path: p, score: z2(p, u.index), routesMeta: b });
  };
  return (
    a.forEach((u, f) => {
      var m;
      if (u.path === "" || !((m = u.path) != null && m.includes("?"))) s(u, f);
      else for (let h of My(u.path)) s(u, f, h);
    }),
    t
  );
}
function My(a) {
  let t = a.split("/");
  if (t.length === 0) return [];
  let [i, ...l] = t,
    s = i.endsWith("?"),
    u = i.replace(/\?$/, "");
  if (l.length === 0) return s ? [u, ""] : [u];
  let f = My(l.join("/")),
    m = [];
  return (
    m.push(...f.map((h) => (h === "" ? u : [u, h].join("/")))),
    s && m.push(...f),
    m.map((h) => (a.startsWith("/") && h === "" ? "/" : h))
  );
}
function O2(a) {
  a.sort((t, i) =>
    t.score !== i.score
      ? i.score - t.score
      : U2(
          t.routesMeta.map((l) => l.childrenIndex),
          i.routesMeta.map((l) => l.childrenIndex)
        )
  );
}
var k2 = /^:[\w-]+$/,
  N2 = 3,
  D2 = 2,
  M2 = 1,
  j2 = 10,
  L2 = -2,
  v0 = (a) => a === "*";
function z2(a, t) {
  let i = a.split("/"),
    l = i.length;
  return (
    i.some(v0) && (l += L2),
    t && (l += D2),
    i
      .filter((s) => !v0(s))
      .reduce((s, u) => s + (k2.test(u) ? N2 : u === "" ? M2 : j2), l)
  );
}
function U2(a, t) {
  return a.length === t.length && a.slice(0, -1).every((l, s) => l === t[s])
    ? a[a.length - 1] - t[t.length - 1]
    : 0;
}
function I2(a, t, i = !1) {
  let { routesMeta: l } = a,
    s = {},
    u = "/",
    f = [];
  for (let m = 0; m < l.length; ++m) {
    let h = l[m],
      p = m === l.length - 1,
      b = u === "/" ? t : t.slice(u.length) || "/",
      x = hc(
        { path: h.relativePath, caseSensitive: h.caseSensitive, end: p },
        b
      ),
      w = h.route;
    if (
      (!x &&
        p &&
        i &&
        !l[l.length - 1].route.index &&
        (x = hc(
          { path: h.relativePath, caseSensitive: h.caseSensitive, end: !1 },
          b
        )),
      !x)
    )
      return null;
    Object.assign(s, x.params),
      f.push({
        params: s,
        pathname: Zn([u, x.pathname]),
        pathnameBase: q2(Zn([u, x.pathnameBase])),
        route: w,
      }),
      x.pathnameBase !== "/" && (u = Zn([u, x.pathnameBase]));
  }
  return f;
}
function hc(a, t) {
  typeof a == "string" && (a = { path: a, caseSensitive: !1, end: !0 });
  let [i, l] = B2(a.path, a.caseSensitive, a.end),
    s = t.match(i);
  if (!s) return null;
  let u = s[0],
    f = u.replace(/(.)\/+$/, "$1"),
    m = s.slice(1);
  return {
    params: l.reduce((p, { paramName: b, isOptional: x }, w) => {
      if (b === "*") {
        let A = m[w] || "";
        f = u.slice(0, u.length - A.length).replace(/(.)\/+$/, "$1");
      }
      const T = m[w];
      return (
        x && !T ? (p[b] = void 0) : (p[b] = (T || "").replace(/%2F/g, "/")), p
      );
    }, {}),
    pathname: u,
    pathnameBase: f,
    pattern: a,
  };
}
function B2(a, t = !1, i = !0) {
  bt(
    a === "*" || !a.endsWith("*") || a.endsWith("/*"),
    `Route path "${a}" will be treated as if it were "${a.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let l = [],
    s =
      "^" +
      a
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, m, h) => (
            l.push({ paramName: m, isOptional: h != null }),
            h ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    a.endsWith("*")
      ? (l.push({ paramName: "*" }),
        (s += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : i
      ? (s += "\\/*$")
      : a !== "" && a !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), l]
  );
}
function H2(a) {
  try {
    return a
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      bt(
        !1,
        `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      a
    );
  }
}
function kn(a, t) {
  if (t === "/") return a;
  if (!a.toLowerCase().startsWith(t.toLowerCase())) return null;
  let i = t.endsWith("/") ? t.length - 1 : t.length,
    l = a.charAt(i);
  return l && l !== "/" ? null : a.slice(i) || "/";
}
function P2(a, t = "/") {
  let {
    pathname: i,
    search: l = "",
    hash: s = "",
  } = typeof a == "string" ? fr(a) : a;
  return {
    pathname: i ? (i.startsWith("/") ? i : V2(i, t)) : t,
    search: G2(l),
    hash: $2(s),
  };
}
function V2(a, t) {
  let i = t.replace(/\/+$/, "").split("/");
  return (
    a.split("/").forEach((s) => {
      s === ".." ? i.length > 1 && i.pop() : s !== "." && i.push(s);
    }),
    i.length > 1 ? i.join("/") : "/"
  );
}
function uf(a, t, i, l) {
  return `Cannot include a '${a}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    l
  )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function jy(a) {
  return a.filter(
    (t, i) => i === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function jc(a) {
  let t = jy(a);
  return t.map((i, l) => (l === t.length - 1 ? i.pathname : i.pathnameBase));
}
function Lc(a, t, i, l = !1) {
  let s;
  typeof a == "string"
    ? (s = fr(a))
    : ((s = { ...a }),
      ze(
        !s.pathname || !s.pathname.includes("?"),
        uf("?", "pathname", "search", s)
      ),
      ze(
        !s.pathname || !s.pathname.includes("#"),
        uf("#", "pathname", "hash", s)
      ),
      ze(!s.search || !s.search.includes("#"), uf("#", "search", "hash", s)));
  let u = a === "" || s.pathname === "",
    f = u ? "/" : s.pathname,
    m;
  if (f == null) m = i;
  else {
    let x = t.length - 1;
    if (!l && f.startsWith("..")) {
      let w = f.split("/");
      for (; w[0] === ".."; ) w.shift(), (x -= 1);
      s.pathname = w.join("/");
    }
    m = x >= 0 ? t[x] : "/";
  }
  let h = P2(s, m),
    p = f && f !== "/" && f.endsWith("/"),
    b = (u || f === ".") && i.endsWith("/");
  return !h.pathname.endsWith("/") && (p || b) && (h.pathname += "/"), h;
}
var Zn = (a) => a.join("/").replace(/\/\/+/g, "/"),
  q2 = (a) => a.replace(/\/+$/, "").replace(/^\/*/, "/"),
  G2 = (a) => (!a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a),
  $2 = (a) => (!a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a),
  mc = class {
    constructor(a, t, i, l = !1) {
      (this.status = a),
        (this.statusText = t || ""),
        (this.internal = l),
        i instanceof Error
          ? ((this.data = i.toString()), (this.error = i))
          : (this.data = i);
    }
  };
function pl(a) {
  return (
    a != null &&
    typeof a.status == "number" &&
    typeof a.statusText == "string" &&
    typeof a.internal == "boolean" &&
    "data" in a
  );
}
var Ly = ["POST", "PUT", "PATCH", "DELETE"],
  Y2 = new Set(Ly),
  X2 = ["GET", ...Ly],
  K2 = new Set(X2),
  F2 = new Set([301, 302, 303, 307, 308]),
  Q2 = new Set([307, 308]),
  df = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Z2 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  al = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  $f = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  J2 = (a) => ({ hasErrorBoundary: !!a.hasErrorBoundary }),
  zy = "remix-router-transitions",
  Uy = Symbol("ResetLoaderData");
function W2(a) {
  const t = a.window ? a.window : typeof window < "u" ? window : void 0,
    i =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u";
  ze(
    a.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let l = a.hydrationRouteProperties || [],
    s = a.mapRouteProperties || J2,
    u = {},
    f = fc(a.routes, s, void 0, u),
    m,
    h = a.basename || "/",
    p = a.dataStrategy || rx,
    b = { unstable_middleware: !1, ...a.future },
    x = null,
    w = new Set(),
    T = null,
    A = null,
    P = null,
    H = a.hydrationData != null,
    z = ar(f, a.history.location, h),
    I = !1,
    V = null,
    Q;
  if (z == null && !a.patchRoutesOnNavigation) {
    let S = Rn(404, { pathname: a.history.location.pathname }),
      { matches: N, route: B } = k0(f);
    (Q = !0), (z = N), (V = { [B.id]: S });
  } else if (
    (z &&
      !a.hydrationData &&
      xr(z, f, a.history.location.pathname).active &&
      (z = null),
    z)
  )
    if (z.some((S) => S.route.lazy)) Q = !1;
    else if (!z.some((S) => S.route.loader)) Q = !0;
    else {
      let S = a.hydrationData ? a.hydrationData.loaderData : null,
        N = a.hydrationData ? a.hydrationData.errors : null;
      if (N) {
        let B = z.findIndex((K) => N[K.route.id] !== void 0);
        Q = z.slice(0, B + 1).every((K) => !Tf(K.route, S, N));
      } else Q = z.every((B) => !Tf(B.route, S, N));
    }
  else {
    (Q = !1), (z = []);
    let S = xr(null, f, a.history.location.pathname);
    S.active && S.matches && ((I = !0), (z = S.matches));
  }
  let F,
    O = {
      historyAction: a.history.action,
      location: a.history.location,
      matches: z,
      initialized: Q,
      navigation: df,
      restoreScrollPosition: a.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (a.hydrationData && a.hydrationData.loaderData) || {},
      actionData: (a.hydrationData && a.hydrationData.actionData) || null,
      errors: (a.hydrationData && a.hydrationData.errors) || V,
      fetchers: new Map(),
      blockers: new Map(),
    },
    ne = "POP",
    Z = !1,
    re,
    Oe = !1,
    ae = new Map(),
    W = null,
    ce = !1,
    oe = !1,
    be = new Set(),
    D = new Map(),
    J = 0,
    le = -1,
    Ee = new Map(),
    E = new Set(),
    $ = new Map(),
    ie = new Map(),
    ee = new Set(),
    se = new Map(),
    Ce,
    fe = null;
  function Ve() {
    if (
      ((x = a.history.listen(({ action: S, location: N, delta: B }) => {
        if (Ce) {
          Ce(), (Ce = void 0);
          return;
        }
        bt(
          se.size === 0 || B != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let K = Vl({
          currentLocation: O.location,
          nextLocation: N,
          historyAction: S,
        });
        if (K && B != null) {
          let te = new Promise((he) => {
            Ce = he;
          });
          a.history.go(B * -1),
            Gn(K, {
              state: "blocked",
              location: N,
              proceed() {
                Gn(K, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: N,
                }),
                  te.then(() => a.history.go(B));
              },
              reset() {
                let he = new Map(O.blockers);
                he.set(K, al), We({ blockers: he });
              },
            });
          return;
        }
        return De(S, N);
      })),
      i)
    ) {
      px(t, ae);
      let S = () => gx(t, ae);
      t.addEventListener("pagehide", S),
        (W = () => t.removeEventListener("pagehide", S));
    }
    return O.initialized || De("POP", O.location, { initialHydration: !0 }), F;
  }
  function ke() {
    x && x(),
      W && W(),
      w.clear(),
      re && re.abort(),
      O.fetchers.forEach((S, N) => Dt(N)),
      O.blockers.forEach((S, N) => br(N));
  }
  function st(S) {
    return w.add(S), () => w.delete(S);
  }
  function We(S, N = {}) {
    O = { ...O, ...S };
    let B = [],
      K = [];
    O.fetchers.forEach((te, he) => {
      te.state === "idle" && (ee.has(he) ? B.push(he) : K.push(he));
    }),
      ee.forEach((te) => {
        !O.fetchers.has(te) && !D.has(te) && B.push(te);
      }),
      [...w].forEach((te) =>
        te(O, {
          deletedFetchers: B,
          viewTransitionOpts: N.viewTransitionOpts,
          flushSync: N.flushSync === !0,
        })
      ),
      B.forEach((te) => Dt(te)),
      K.forEach((te) => O.fetchers.delete(te));
  }
  function xt(S, N, { flushSync: B } = {}) {
    var ye, Se;
    let K =
        O.actionData != null &&
        O.navigation.formMethod != null &&
        hn(O.navigation.formMethod) &&
        O.navigation.state === "loading" &&
        ((ye = S.state) == null ? void 0 : ye._isRedirect) !== !0,
      te;
    N.actionData
      ? Object.keys(N.actionData).length > 0
        ? (te = N.actionData)
        : (te = null)
      : K
      ? (te = O.actionData)
      : (te = null);
    let he = N.loaderData
        ? R0(O.loaderData, N.loaderData, N.matches || [], N.errors)
        : O.loaderData,
      we = O.blockers;
    we.size > 0 && ((we = new Map(we)), we.forEach((me, Re) => we.set(Re, al)));
    let ue =
      Z === !0 ||
      (O.navigation.formMethod != null &&
        hn(O.navigation.formMethod) &&
        ((Se = S.state) == null ? void 0 : Se._isRedirect) !== !0);
    m && ((f = m), (m = void 0)),
      ce ||
        ne === "POP" ||
        (ne === "PUSH"
          ? a.history.push(S, S.state)
          : ne === "REPLACE" && a.history.replace(S, S.state));
    let ge;
    if (ne === "POP") {
      let me = ae.get(O.location.pathname);
      me && me.has(S.pathname)
        ? (ge = { currentLocation: O.location, nextLocation: S })
        : ae.has(S.pathname) &&
          (ge = { currentLocation: S, nextLocation: O.location });
    } else if (Oe) {
      let me = ae.get(O.location.pathname);
      me
        ? me.add(S.pathname)
        : ((me = new Set([S.pathname])), ae.set(O.location.pathname, me)),
        (ge = { currentLocation: O.location, nextLocation: S });
    }
    We(
      {
        ...N,
        actionData: te,
        loaderData: he,
        historyAction: ne,
        location: S,
        initialized: !0,
        navigation: df,
        revalidation: "idle",
        restoreScrollPosition: Gl(S, N.matches || O.matches),
        preventScrollReset: ue,
        blockers: we,
      },
      { viewTransitionOpts: ge, flushSync: B === !0 }
    ),
      (ne = "POP"),
      (Z = !1),
      (Oe = !1),
      (ce = !1),
      (oe = !1),
      fe == null || fe.resolve(),
      (fe = null);
  }
  async function Ut(S, N) {
    if (typeof S == "number") {
      a.history.go(S);
      return;
    }
    let B = Sf(
        O.location,
        O.matches,
        h,
        S,
        N == null ? void 0 : N.fromRouteId,
        N == null ? void 0 : N.relative
      ),
      { path: K, submission: te, error: he } = b0(!1, B, N),
      we = O.location,
      ue = ml(O.location, K, N && N.state);
    ue = { ...ue, ...a.history.encodeLocation(ue) };
    let ge = N && N.replace != null ? N.replace : void 0,
      ye = "PUSH";
    ge === !0
      ? (ye = "REPLACE")
      : ge === !1 ||
        (te != null &&
          hn(te.formMethod) &&
          te.formAction === O.location.pathname + O.location.search &&
          (ye = "REPLACE"));
    let Se =
        N && "preventScrollReset" in N ? N.preventScrollReset === !0 : void 0,
      me = (N && N.flushSync) === !0,
      Re = Vl({ currentLocation: we, nextLocation: ue, historyAction: ye });
    if (Re) {
      Gn(Re, {
        state: "blocked",
        location: ue,
        proceed() {
          Gn(Re, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: ue,
          }),
            Ut(S, N);
        },
        reset() {
          let qe = new Map(O.blockers);
          qe.set(Re, al), We({ blockers: qe });
        },
      });
      return;
    }
    await De(ye, ue, {
      submission: te,
      pendingError: he,
      preventScrollReset: Se,
      replace: N && N.replace,
      enableViewTransition: N && N.viewTransition,
      flushSync: me,
    });
  }
  function Qe() {
    fe || (fe = yx()), no(), We({ revalidation: "loading" });
    let S = fe.promise;
    return O.navigation.state === "submitting"
      ? S
      : O.navigation.state === "idle"
      ? (De(O.historyAction, O.location, {
          startUninterruptedRevalidation: !0,
        }),
        S)
      : (De(ne || O.historyAction, O.navigation.location, {
          overrideNavigation: O.navigation,
          enableViewTransition: Oe === !0,
        }),
        S);
  }
  async function De(S, N, B) {
    re && re.abort(),
      (re = null),
      (ne = S),
      (ce = (B && B.startUninterruptedRevalidation) === !0),
      wr(O.location, O.matches),
      (Z = (B && B.preventScrollReset) === !0),
      (Oe = (B && B.enableViewTransition) === !0);
    let K = m || f,
      te = B && B.overrideNavigation,
      he =
        B != null &&
        B.initialHydration &&
        O.matches &&
        O.matches.length > 0 &&
        !I
          ? O.matches
          : ar(K, N, h),
      we = (B && B.flushSync) === !0;
    if (
      he &&
      O.initialized &&
      !oe &&
      ux(O.location, N) &&
      !(B && B.submission && hn(B.submission.formMethod))
    ) {
      xt(N, { matches: he }, { flushSync: we });
      return;
    }
    let ue = xr(he, K, N.pathname);
    if ((ue.active && ue.matches && (he = ue.matches), !he)) {
      let { error: ft, notFoundMatches: Ge, route: Be } = ti(N.pathname);
      xt(
        N,
        { matches: Ge, loaderData: {}, errors: { [Be.id]: ft } },
        { flushSync: we }
      );
      return;
    }
    re = new AbortController();
    let ge = Ui(a.history, N, re.signal, B && B.submission),
      ye = new y0(
        a.unstable_getContext ? await a.unstable_getContext() : void 0
      ),
      Se;
    if (B && B.pendingError)
      Se = [Vr(he).route.id, { type: "error", error: B.pendingError }];
    else if (B && B.submission && hn(B.submission.formMethod)) {
      let ft = await At(
        ge,
        N,
        B.submission,
        he,
        ye,
        ue.active,
        B && B.initialHydration === !0,
        { replace: B.replace, flushSync: we }
      );
      if (ft.shortCircuited) return;
      if (ft.pendingActionResult) {
        let [Ge, Be] = ft.pendingActionResult;
        if (fn(Be) && pl(Be.error) && Be.error.status === 404) {
          (re = null),
            xt(N, {
              matches: ft.matches,
              loaderData: {},
              errors: { [Ge]: Be.error },
            });
          return;
        }
      }
      (he = ft.matches || he),
        (Se = ft.pendingActionResult),
        (te = ff(N, B.submission)),
        (we = !1),
        (ue.active = !1),
        (ge = Ui(a.history, ge.url, ge.signal));
    }
    let {
      shortCircuited: me,
      matches: Re,
      loaderData: qe,
      errors: lt,
    } = await yn(
      ge,
      N,
      he,
      ye,
      ue.active,
      te,
      B && B.submission,
      B && B.fetcherSubmission,
      B && B.replace,
      B && B.initialHydration === !0,
      we,
      Se
    );
    me ||
      ((re = null),
      xt(N, { matches: Re || he, ...O0(Se), loaderData: qe, errors: lt }));
  }
  async function At(S, N, B, K, te, he, we, ue = {}) {
    no();
    let ge = hx(N, B);
    if ((We({ navigation: ge }, { flushSync: ue.flushSync === !0 }), he)) {
      let me = await _r(K, N.pathname, S.signal);
      if (me.type === "aborted") return { shortCircuited: !0 };
      if (me.type === "error") {
        let Re = Vr(me.partialMatches).route.id;
        return {
          matches: me.partialMatches,
          pendingActionResult: [Re, { type: "error", error: me.error }],
        };
      } else if (me.matches) K = me.matches;
      else {
        let { notFoundMatches: Re, error: qe, route: lt } = ti(N.pathname);
        return {
          matches: Re,
          pendingActionResult: [lt.id, { type: "error", error: qe }],
        };
      }
    }
    let ye,
      Se = ll(K, N);
    if (!Se.route.action && !Se.route.lazy)
      ye = {
        type: "error",
        error: Rn(405, {
          method: S.method,
          pathname: N.pathname,
          routeId: Se.route.id,
        }),
      };
    else {
      let me = Ii(s, u, S, K, Se, we ? [] : l, te),
        Re = await Ra(S, me, te, null);
      if (((ye = Re[Se.route.id]), !ye)) {
        for (let qe of K)
          if (Re[qe.route.id]) {
            ye = Re[qe.route.id];
            break;
          }
      }
      if (S.signal.aborted) return { shortCircuited: !0 };
    }
    if (qr(ye)) {
      let me;
      return (
        ue && ue.replace != null
          ? (me = ue.replace)
          : (me =
              T0(ye.response.headers.get("Location"), new URL(S.url), h) ===
              O.location.pathname + O.location.search),
        await na(S, ye, !0, { submission: B, replace: me }),
        { shortCircuited: !0 }
      );
    }
    if (fn(ye)) {
      let me = Vr(K, Se.route.id);
      return (
        (ue && ue.replace) !== !0 && (ne = "PUSH"),
        { matches: K, pendingActionResult: [me.route.id, ye, Se.route.id] }
      );
    }
    return { matches: K, pendingActionResult: [Se.route.id, ye] };
  }
  async function yn(S, N, B, K, te, he, we, ue, ge, ye, Se, me) {
    let Re = he || ff(N, we),
      qe = we || ue || D0(Re),
      lt = !ce && !ye;
    if (te) {
      if (lt) {
        let Bt = It(me);
        We(
          { navigation: Re, ...(Bt !== void 0 ? { actionData: Bt } : {}) },
          { flushSync: Se }
        );
      }
      let je = await _r(B, N.pathname, S.signal);
      if (je.type === "aborted") return { shortCircuited: !0 };
      if (je.type === "error") {
        let Bt = Vr(je.partialMatches).route.id;
        return {
          matches: je.partialMatches,
          loaderData: {},
          errors: { [Bt]: je.error },
        };
      } else if (je.matches) B = je.matches;
      else {
        let { error: Bt, notFoundMatches: jn, route: Ln } = ti(N.pathname);
        return { matches: jn, loaderData: {}, errors: { [Ln.id]: Bt } };
      }
    }
    let ft = m || f,
      { dsMatches: Ge, revalidatingFetchers: Be } = w0(
        S,
        K,
        s,
        u,
        a.history,
        O,
        B,
        qe,
        N,
        ye ? [] : l,
        ye === !0,
        oe,
        be,
        ee,
        $,
        E,
        ft,
        h,
        me
      );
    if (
      ((le = ++J),
      !a.dataStrategy && !Ge.some((je) => je.shouldLoad) && Be.length === 0)
    ) {
      let je = yr();
      return (
        xt(
          N,
          {
            matches: B,
            loaderData: {},
            errors: me && fn(me[1]) ? { [me[0]]: me[1].error } : null,
            ...O0(me),
            ...(je ? { fetchers: new Map(O.fetchers) } : {}),
          },
          { flushSync: Se }
        ),
        { shortCircuited: !0 }
      );
    }
    if (lt) {
      let je = {};
      if (!te) {
        je.navigation = Re;
        let Bt = It(me);
        Bt !== void 0 && (je.actionData = Bt);
      }
      Be.length > 0 && (je.fetchers = Zc(Be)), We(je, { flushSync: Se });
    }
    Be.forEach((je) => {
      qn(je.key), je.controller && D.set(je.key, je.controller);
    });
    let Oa = () => Be.forEach((je) => qn(je.key));
    re && re.signal.addEventListener("abort", Oa);
    let { loaderResults: qt, fetcherResults: vn } = await Hl(Ge, Be, S, K);
    if (S.signal.aborted) return { shortCircuited: !0 };
    re && re.signal.removeEventListener("abort", Oa),
      Be.forEach((je) => D.delete(je.key));
    let Qt = Ws(qt);
    if (Qt)
      return (
        await na(S, Qt.result, !0, { replace: ge }), { shortCircuited: !0 }
      );
    if (((Qt = Ws(vn)), Qt))
      return (
        E.add(Qt.key),
        await na(S, Qt.result, !0, { replace: ge }),
        { shortCircuited: !0 }
      );
    let { loaderData: ka, errors: Na } = A0(O, B, qt, me, Be, vn);
    ye && O.errors && (Na = { ...O.errors, ...Na });
    let io = yr(),
      bn = vr(le),
      ra = io || bn || Be.length > 0;
    return {
      matches: B,
      loaderData: ka,
      errors: Na,
      ...(ra ? { fetchers: new Map(O.fetchers) } : {}),
    };
  }
  function It(S) {
    if (S && !fn(S[1])) return { [S[0]]: S[1].data };
    if (O.actionData)
      return Object.keys(O.actionData).length === 0 ? null : O.actionData;
  }
  function Zc(S) {
    return (
      S.forEach((N) => {
        let B = O.fetchers.get(N.key),
          K = rl(void 0, B ? B.data : void 0);
        O.fetchers.set(N.key, K);
      }),
      new Map(O.fetchers)
    );
  }
  async function Il(S, N, B, K) {
    qn(S);
    let te = (K && K.flushSync) === !0,
      he = m || f,
      we = Sf(O.location, O.matches, h, B, N, K == null ? void 0 : K.relative),
      ue = ar(he, we, h),
      ge = xr(ue, he, we);
    if ((ge.active && ge.matches && (ue = ge.matches), !ue)) {
      dt(S, N, Rn(404, { pathname: we }), { flushSync: te });
      return;
    }
    let { path: ye, submission: Se, error: me } = b0(!0, we, K);
    if (me) {
      dt(S, N, me, { flushSync: te });
      return;
    }
    let Re = ll(ue, ye),
      qe = new y0(
        a.unstable_getContext ? await a.unstable_getContext() : void 0
      ),
      lt = (K && K.preventScrollReset) === !0;
    if (Se && hn(Se.formMethod)) {
      await Bl(S, N, ye, Re, ue, qe, ge.active, te, lt, Se);
      return;
    }
    $.set(S, { routeId: N, path: ye }),
      await ei(S, N, ye, Re, ue, qe, ge.active, te, lt, Se);
  }
  async function Bl(S, N, B, K, te, he, we, ue, ge, ye) {
    no(), $.delete(S);
    function Se(ct) {
      if (!ct.route.action && !ct.route.lazy) {
        let Da = Rn(405, { method: ye.formMethod, pathname: B, routeId: N });
        return dt(S, N, Da, { flushSync: ue }), !0;
      }
      return !1;
    }
    if (!we && Se(K)) return;
    let me = O.fetchers.get(S);
    Ft(S, mx(ye, me), { flushSync: ue });
    let Re = new AbortController(),
      qe = Ui(a.history, B, Re.signal, ye);
    if (we) {
      let ct = await _r(te, B, qe.signal, S);
      if (ct.type === "aborted") return;
      if (ct.type === "error") {
        dt(S, N, ct.error, { flushSync: ue });
        return;
      } else if (ct.matches) {
        if (((te = ct.matches), (K = ll(te, B)), Se(K))) return;
      } else {
        dt(S, N, Rn(404, { pathname: B }), { flushSync: ue });
        return;
      }
    }
    D.set(S, Re);
    let lt = J,
      ft = Ii(s, u, qe, te, K, l, he),
      Be = (await Ra(qe, ft, he, S))[K.route.id];
    if (qe.signal.aborted) {
      D.get(S) === Re && D.delete(S);
      return;
    }
    if (ee.has(S)) {
      if (qr(Be) || fn(Be)) {
        Ft(S, nr(void 0));
        return;
      }
    } else {
      if (qr(Be))
        if ((D.delete(S), le > lt)) {
          Ft(S, nr(void 0));
          return;
        } else
          return (
            E.add(S),
            Ft(S, rl(ye)),
            na(qe, Be, !1, { fetcherSubmission: ye, preventScrollReset: ge })
          );
      if (fn(Be)) {
        dt(S, N, Be.error);
        return;
      }
    }
    let Oa = O.navigation.location || O.location,
      qt = Ui(a.history, Oa, Re.signal),
      vn = m || f,
      Qt =
        O.navigation.state !== "idle"
          ? ar(vn, O.navigation.location, h)
          : O.matches;
    ze(Qt, "Didn't find any matches after fetcher action");
    let ka = ++J;
    Ee.set(S, ka);
    let Na = rl(ye, Be.data);
    O.fetchers.set(S, Na);
    let { dsMatches: io, revalidatingFetchers: bn } = w0(
      qt,
      he,
      s,
      u,
      a.history,
      O,
      Qt,
      ye,
      Oa,
      l,
      !1,
      oe,
      be,
      ee,
      $,
      E,
      vn,
      h,
      [K.route.id, Be]
    );
    bn
      .filter((ct) => ct.key !== S)
      .forEach((ct) => {
        let Da = ct.key,
          oo = O.fetchers.get(Da),
          Zt = rl(void 0, oo ? oo.data : void 0);
        O.fetchers.set(Da, Zt),
          qn(Da),
          ct.controller && D.set(Da, ct.controller);
      }),
      We({ fetchers: new Map(O.fetchers) });
    let ra = () => bn.forEach((ct) => qn(ct.key));
    Re.signal.addEventListener("abort", ra);
    let { loaderResults: je, fetcherResults: Bt } = await Hl(io, bn, qt, he);
    if (Re.signal.aborted) return;
    if (
      (Re.signal.removeEventListener("abort", ra),
      Ee.delete(S),
      D.delete(S),
      bn.forEach((ct) => D.delete(ct.key)),
      O.fetchers.has(S))
    ) {
      let ct = nr(Be.data);
      O.fetchers.set(S, ct);
    }
    let jn = Ws(je);
    if (jn) return na(qt, jn.result, !1, { preventScrollReset: ge });
    if (((jn = Ws(Bt)), jn))
      return E.add(jn.key), na(qt, jn.result, !1, { preventScrollReset: ge });
    let { loaderData: Ln, errors: Er } = A0(O, Qt, je, void 0, bn, Bt);
    vr(ka),
      O.navigation.state === "loading" && ka > le
        ? (ze(ne, "Expected pending action"),
          re && re.abort(),
          xt(O.navigation.location, {
            matches: Qt,
            loaderData: Ln,
            errors: Er,
            fetchers: new Map(O.fetchers),
          }))
        : (We({
            errors: Er,
            loaderData: R0(O.loaderData, Ln, Qt, Er),
            fetchers: new Map(O.fetchers),
          }),
          (oe = !1));
  }
  async function ei(S, N, B, K, te, he, we, ue, ge, ye) {
    let Se = O.fetchers.get(S);
    Ft(S, rl(ye, Se ? Se.data : void 0), { flushSync: ue });
    let me = new AbortController(),
      Re = Ui(a.history, B, me.signal);
    if (we) {
      let Be = await _r(te, B, Re.signal, S);
      if (Be.type === "aborted") return;
      if (Be.type === "error") {
        dt(S, N, Be.error, { flushSync: ue });
        return;
      } else if (Be.matches) (te = Be.matches), (K = ll(te, B));
      else {
        dt(S, N, Rn(404, { pathname: B }), { flushSync: ue });
        return;
      }
    }
    D.set(S, me);
    let qe = J,
      lt = Ii(s, u, Re, te, K, l, he),
      Ge = (await Ra(Re, lt, he, S))[K.route.id];
    if ((D.get(S) === me && D.delete(S), !Re.signal.aborted)) {
      if (ee.has(S)) {
        Ft(S, nr(void 0));
        return;
      }
      if (qr(Ge))
        if (le > qe) {
          Ft(S, nr(void 0));
          return;
        } else {
          E.add(S), await na(Re, Ge, !1, { preventScrollReset: ge });
          return;
        }
      if (fn(Ge)) {
        dt(S, N, Ge.error);
        return;
      }
      Ft(S, nr(Ge.data));
    }
  }
  async function na(
    S,
    N,
    B,
    {
      submission: K,
      fetcherSubmission: te,
      preventScrollReset: he,
      replace: we,
    } = {}
  ) {
    N.response.headers.has("X-Remix-Revalidate") && (oe = !0);
    let ue = N.response.headers.get("Location");
    ze(ue, "Expected a Location header on the redirect Response"),
      (ue = T0(ue, new URL(S.url), h));
    let ge = ml(O.location, ue, { _isRedirect: !0 });
    if (i) {
      let lt = !1;
      if (N.response.headers.has("X-Remix-Reload-Document")) lt = !0;
      else if ($f.test(ue)) {
        const ft = Ny(ue, !0);
        lt = ft.origin !== t.location.origin || kn(ft.pathname, h) == null;
      }
      if (lt) {
        we ? t.location.replace(ue) : t.location.assign(ue);
        return;
      }
    }
    re = null;
    let ye =
        we === !0 || N.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: Se, formAction: me, formEncType: Re } = O.navigation;
    !K && !te && Se && me && Re && (K = D0(O.navigation));
    let qe = K || te;
    if (Q2.has(N.response.status) && qe && hn(qe.formMethod))
      await De(ye, ge, {
        submission: { ...qe, formAction: ue },
        preventScrollReset: he || Z,
        enableViewTransition: B ? Oe : void 0,
      });
    else {
      let lt = ff(ge, K);
      await De(ye, ge, {
        overrideNavigation: lt,
        fetcherSubmission: te,
        preventScrollReset: he || Z,
        enableViewTransition: B ? Oe : void 0,
      });
    }
  }
  async function Ra(S, N, B, K) {
    let te,
      he = {};
    try {
      te = await ix(p, S, N, K, B, !1);
    } catch (we) {
      return (
        N.filter((ue) => ue.shouldLoad).forEach((ue) => {
          he[ue.route.id] = { type: "error", error: we };
        }),
        he
      );
    }
    if (S.signal.aborted) return he;
    for (let [we, ue] of Object.entries(te))
      if (dx(ue)) {
        let ge = ue.result;
        he[we] = { type: "redirect", response: sx(ge, S, we, N, h) };
      } else he[we] = await lx(ue);
    return he;
  }
  async function Hl(S, N, B, K) {
    let te = Ra(B, S, K, null),
      he = Promise.all(
        N.map(async (ge) => {
          if (ge.matches && ge.match && ge.request && ge.controller) {
            let Se = (await Ra(ge.request, ge.matches, K, ge.key))[
              ge.match.route.id
            ];
            return { [ge.key]: Se };
          } else
            return Promise.resolve({
              [ge.key]: {
                type: "error",
                error: Rn(404, { pathname: ge.path }),
              },
            });
        })
      ),
      we = await te,
      ue = (await he).reduce((ge, ye) => Object.assign(ge, ye), {});
    return { loaderResults: we, fetcherResults: ue };
  }
  function no() {
    (oe = !0),
      $.forEach((S, N) => {
        D.has(N) && be.add(N), qn(N);
      });
  }
  function Ft(S, N, B = {}) {
    O.fetchers.set(S, N),
      We(
        { fetchers: new Map(O.fetchers) },
        { flushSync: (B && B.flushSync) === !0 }
      );
  }
  function dt(S, N, B, K = {}) {
    let te = Vr(O.matches, N);
    Dt(S),
      We(
        { errors: { [te.route.id]: B }, fetchers: new Map(O.fetchers) },
        { flushSync: (K && K.flushSync) === !0 }
      );
  }
  function Mn(S) {
    return (
      ie.set(S, (ie.get(S) || 0) + 1),
      ee.has(S) && ee.delete(S),
      O.fetchers.get(S) || Z2
    );
  }
  function Dt(S) {
    let N = O.fetchers.get(S);
    D.has(S) && !(N && N.state === "loading" && Ee.has(S)) && qn(S),
      $.delete(S),
      Ee.delete(S),
      E.delete(S),
      ee.delete(S),
      be.delete(S),
      O.fetchers.delete(S);
  }
  function Jc(S) {
    let N = (ie.get(S) || 0) - 1;
    N <= 0 ? (ie.delete(S), ee.add(S)) : ie.set(S, N),
      We({ fetchers: new Map(O.fetchers) });
  }
  function qn(S) {
    let N = D.get(S);
    N && (N.abort(), D.delete(S));
  }
  function Pl(S) {
    for (let N of S) {
      let B = Mn(N),
        K = nr(B.data);
      O.fetchers.set(N, K);
    }
  }
  function yr() {
    let S = [],
      N = !1;
    for (let B of E) {
      let K = O.fetchers.get(B);
      ze(K, `Expected fetcher: ${B}`),
        K.state === "loading" && (E.delete(B), S.push(B), (N = !0));
    }
    return Pl(S), N;
  }
  function vr(S) {
    let N = [];
    for (let [B, K] of Ee)
      if (K < S) {
        let te = O.fetchers.get(B);
        ze(te, `Expected fetcher: ${B}`),
          te.state === "loading" && (qn(B), Ee.delete(B), N.push(B));
      }
    return Pl(N), N.length > 0;
  }
  function aa(S, N) {
    let B = O.blockers.get(S) || al;
    return se.get(S) !== N && se.set(S, N), B;
  }
  function br(S) {
    O.blockers.delete(S), se.delete(S);
  }
  function Gn(S, N) {
    let B = O.blockers.get(S) || al;
    ze(
      (B.state === "unblocked" && N.state === "blocked") ||
        (B.state === "blocked" && N.state === "blocked") ||
        (B.state === "blocked" && N.state === "proceeding") ||
        (B.state === "blocked" && N.state === "unblocked") ||
        (B.state === "proceeding" && N.state === "unblocked"),
      `Invalid blocker state transition: ${B.state} -> ${N.state}`
    );
    let K = new Map(O.blockers);
    K.set(S, N), We({ blockers: K });
  }
  function Vl({ currentLocation: S, nextLocation: N, historyAction: B }) {
    if (se.size === 0) return;
    se.size > 1 && bt(!1, "A router only supports one blocker at a time");
    let K = Array.from(se.entries()),
      [te, he] = K[K.length - 1],
      we = O.blockers.get(te);
    if (
      !(we && we.state === "proceeding") &&
      he({ currentLocation: S, nextLocation: N, historyAction: B })
    )
      return te;
  }
  function ti(S) {
    let N = Rn(404, { pathname: S }),
      B = m || f,
      { matches: K, route: te } = k0(B);
    return { notFoundMatches: K, route: te, error: N };
  }
  function ql(S, N, B) {
    if (((T = S), (P = N), (A = B || null), !H && O.navigation === df)) {
      H = !0;
      let K = Gl(O.location, O.matches);
      K != null && We({ restoreScrollPosition: K });
    }
    return () => {
      (T = null), (P = null), (A = null);
    };
  }
  function ni(S, N) {
    return (
      (A &&
        A(
          S,
          N.map((K) => R2(K, O.loaderData))
        )) ||
      S.key
    );
  }
  function wr(S, N) {
    if (T && P) {
      let B = ni(S, N);
      T[B] = P();
    }
  }
  function Gl(S, N) {
    if (T) {
      let B = ni(S, N),
        K = T[B];
      if (typeof K == "number") return K;
    }
    return null;
  }
  function xr(S, N, B) {
    if (a.patchRoutesOnNavigation)
      if (S) {
        if (Object.keys(S[0].params).length > 0)
          return { active: !0, matches: rc(N, B, h, !0) };
      } else return { active: !0, matches: rc(N, B, h, !0) || [] };
    return { active: !1, matches: null };
  }
  async function _r(S, N, B, K) {
    if (!a.patchRoutesOnNavigation) return { type: "success", matches: S };
    let te = S;
    for (;;) {
      let he = m == null,
        we = m || f,
        ue = u;
      try {
        await a.patchRoutesOnNavigation({
          signal: B,
          path: N,
          matches: te,
          fetcherKey: K,
          patch: (Se, me) => {
            B.aborted || x0(Se, me, we, ue, s);
          },
        });
      } catch (Se) {
        return { type: "error", error: Se, partialMatches: te };
      } finally {
        he && !B.aborted && (f = [...f]);
      }
      if (B.aborted) return { type: "aborted" };
      let ge = ar(we, N, h);
      if (ge) return { type: "success", matches: ge };
      let ye = rc(we, N, h, !0);
      if (
        !ye ||
        (te.length === ye.length &&
          te.every((Se, me) => Se.route.id === ye[me].route.id))
      )
        return { type: "success", matches: null };
      te = ye;
    }
  }
  function ao(S) {
    (u = {}), (m = fc(S, s, void 0, u));
  }
  function ro(S, N) {
    let B = m == null;
    x0(S, N, m || f, u, s), B && ((f = [...f]), We({}));
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
        return O;
      },
      get routes() {
        return f;
      },
      get window() {
        return t;
      },
      initialize: Ve,
      subscribe: st,
      enableScrollRestoration: ql,
      navigate: Ut,
      fetch: Il,
      revalidate: Qe,
      createHref: (S) => a.history.createHref(S),
      encodeLocation: (S) => a.history.encodeLocation(S),
      getFetcher: Mn,
      deleteFetcher: Jc,
      dispose: ke,
      getBlocker: aa,
      deleteBlocker: br,
      patchRoutes: ro,
      _internalFetchControllers: D,
      _internalSetRoutes: ao,
    }),
    F
  );
}
function ex(a) {
  return (
    a != null &&
    (("formData" in a && a.formData != null) ||
      ("body" in a && a.body !== void 0))
  );
}
function Sf(a, t, i, l, s, u) {
  let f, m;
  if (s) {
    f = [];
    for (let p of t)
      if ((f.push(p), p.route.id === s)) {
        m = p;
        break;
      }
  } else (f = t), (m = t[t.length - 1]);
  let h = Lc(l || ".", jc(f), kn(a.pathname, i) || a.pathname, u === "path");
  if (
    (l == null && ((h.search = a.search), (h.hash = a.hash)),
    (l == null || l === "" || l === ".") && m)
  ) {
    let p = Yf(h.search);
    if (m.route.index && !p)
      h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index";
    else if (!m.route.index && p) {
      let b = new URLSearchParams(h.search),
        x = b.getAll("index");
      b.delete("index"),
        x.filter((T) => T).forEach((T) => b.append("index", T));
      let w = b.toString();
      h.search = w ? `?${w}` : "";
    }
  }
  return (
    i !== "/" && (h.pathname = h.pathname === "/" ? i : Zn([i, h.pathname])),
    dr(h)
  );
}
function b0(a, t, i) {
  if (!i || !ex(i)) return { path: t };
  if (i.formMethod && !fx(i.formMethod))
    return { path: t, error: Rn(405, { method: i.formMethod }) };
  let l = () => ({ path: t, error: Rn(400, { type: "invalid-body" }) }),
    u = (i.formMethod || "get").toUpperCase(),
    f = qy(t);
  if (i.body !== void 0) {
    if (i.formEncType === "text/plain") {
      if (!hn(u)) return l();
      let x =
        typeof i.body == "string"
          ? i.body
          : i.body instanceof FormData || i.body instanceof URLSearchParams
          ? Array.from(i.body.entries()).reduce(
              (w, [T, A]) => `${w}${T}=${A}
`,
              ""
            )
          : String(i.body);
      return {
        path: t,
        submission: {
          formMethod: u,
          formAction: f,
          formEncType: i.formEncType,
          formData: void 0,
          json: void 0,
          text: x,
        },
      };
    } else if (i.formEncType === "application/json") {
      if (!hn(u)) return l();
      try {
        let x = typeof i.body == "string" ? JSON.parse(i.body) : i.body;
        return {
          path: t,
          submission: {
            formMethod: u,
            formAction: f,
            formEncType: i.formEncType,
            formData: void 0,
            json: x,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  ze(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let m, h;
  if (i.formData) (m = Af(i.formData)), (h = i.formData);
  else if (i.body instanceof FormData) (m = Af(i.body)), (h = i.body);
  else if (i.body instanceof URLSearchParams) (m = i.body), (h = C0(m));
  else if (i.body == null) (m = new URLSearchParams()), (h = new FormData());
  else
    try {
      (m = new URLSearchParams(i.body)), (h = C0(m));
    } catch {
      return l();
    }
  let p = {
    formMethod: u,
    formAction: f,
    formEncType: (i && i.formEncType) || "application/x-www-form-urlencoded",
    formData: h,
    json: void 0,
    text: void 0,
  };
  if (hn(p.formMethod)) return { path: t, submission: p };
  let b = fr(t);
  return (
    a && b.search && Yf(b.search) && m.append("index", ""),
    (b.search = `?${m}`),
    { path: dr(b), submission: p }
  );
}
function w0(a, t, i, l, s, u, f, m, h, p, b, x, w, T, A, P, H, z, I) {
  var W;
  let V = I ? (fn(I[1]) ? I[1].error : I[1].data) : void 0,
    Q = s.createURL(u.location),
    F = s.createURL(h),
    O;
  if (b && u.errors) {
    let ce = Object.keys(u.errors)[0];
    O = f.findIndex((oe) => oe.route.id === ce);
  } else if (I && fn(I[1])) {
    let ce = I[0];
    O = f.findIndex((oe) => oe.route.id === ce) - 1;
  }
  let ne = I ? I[1].statusCode : void 0,
    Z = ne && ne >= 400,
    re = {
      currentUrl: Q,
      currentParams: ((W = u.matches[0]) == null ? void 0 : W.params) || {},
      nextUrl: F,
      nextParams: f[0].params,
      ...m,
      actionResult: V,
      actionStatus: ne,
    },
    Oe = f.map((ce, oe) => {
      let { route: be } = ce,
        D = null;
      if (
        (O != null && oe > O
          ? (D = !1)
          : be.lazy
          ? (D = !0)
          : be.loader == null
          ? (D = !1)
          : b
          ? (D = Tf(be, u.loaderData, u.errors))
          : tx(u.loaderData, u.matches[oe], ce) && (D = !0),
        D !== null)
      )
        return Cf(i, l, a, ce, p, t, D);
      let J = Z
          ? !1
          : x ||
            Q.pathname + Q.search === F.pathname + F.search ||
            Q.search !== F.search ||
            nx(u.matches[oe], ce),
        le = { ...re, defaultShouldRevalidate: J },
        Ee = pc(ce, le);
      return Cf(i, l, a, ce, p, t, Ee, le);
    }),
    ae = [];
  return (
    A.forEach((ce, oe) => {
      if (b || !f.some(($) => $.route.id === ce.routeId) || T.has(oe)) return;
      let be = ar(H, ce.path, z);
      if (!be) {
        ae.push({
          key: oe,
          routeId: ce.routeId,
          path: ce.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (P.has(oe)) return;
      let D = u.fetchers.get(oe),
        J = ll(be, ce.path),
        le = new AbortController(),
        Ee = Ui(s, ce.path, le.signal),
        E = null;
      if (w.has(oe)) w.delete(oe), (E = Ii(i, l, Ee, be, J, p, t));
      else if (D && D.state !== "idle" && D.data === void 0)
        x && (E = Ii(i, l, Ee, be, J, p, t));
      else {
        let $ = { ...re, defaultShouldRevalidate: Z ? !1 : x };
        pc(J, $) && (E = Ii(i, l, Ee, be, J, p, t, $));
      }
      E &&
        ae.push({
          key: oe,
          routeId: ce.routeId,
          path: ce.path,
          matches: E,
          match: J,
          request: Ee,
          controller: le,
        });
    }),
    { dsMatches: Oe, revalidatingFetchers: ae }
  );
}
function Tf(a, t, i) {
  if (a.lazy) return !0;
  if (!a.loader) return !1;
  let l = t != null && a.id in t,
    s = i != null && i[a.id] !== void 0;
  return !l && s
    ? !1
    : typeof a.loader == "function" && a.loader.hydrate === !0
    ? !0
    : !l && !s;
}
function tx(a, t, i) {
  let l = !t || i.route.id !== t.route.id,
    s = !a.hasOwnProperty(i.route.id);
  return l || s;
}
function nx(a, t) {
  let i = a.route.path;
  return (
    a.pathname !== t.pathname ||
    (i != null && i.endsWith("*") && a.params["*"] !== t.params["*"])
  );
}
function pc(a, t) {
  if (a.route.shouldRevalidate) {
    let i = a.route.shouldRevalidate(t);
    if (typeof i == "boolean") return i;
  }
  return t.defaultShouldRevalidate;
}
function x0(a, t, i, l, s) {
  let u;
  if (a) {
    let h = l[a];
    ze(h, `No route found to patch children into: routeId = ${a}`),
      h.children || (h.children = []),
      (u = h.children);
  } else u = i;
  let f = t.filter((h) => !u.some((p) => Iy(h, p))),
    m = fc(
      f,
      s,
      [a || "_", "patch", String((u == null ? void 0 : u.length) || "0")],
      l
    );
  u.push(...m);
}
function Iy(a, t) {
  return "id" in a && "id" in t && a.id === t.id
    ? !0
    : a.index === t.index &&
      a.path === t.path &&
      a.caseSensitive === t.caseSensitive
    ? (!a.children || a.children.length === 0) &&
      (!t.children || t.children.length === 0)
      ? !0
      : a.children.every((i, l) => {
          var s;
          return (s = t.children) == null ? void 0 : s.some((u) => Iy(i, u));
        })
    : !1;
}
var _0 = new WeakMap(),
  By = ({ key: a, route: t, manifest: i, mapRouteProperties: l }) => {
    let s = i[t.id];
    if (
      (ze(s, "No route found in manifest"),
      !s.lazy || typeof s.lazy != "object")
    )
      return;
    let u = s.lazy[a];
    if (!u) return;
    let f = _0.get(s);
    f || ((f = {}), _0.set(s, f));
    let m = f[a];
    if (m) return m;
    let h = (async () => {
      let p = S2(a),
        x = s[a] !== void 0 && a !== "hasErrorBoundary";
      if (p)
        bt(
          !p,
          "Route property " +
            a +
            " is not a supported lazy route property. This property will be ignored."
        ),
          (f[a] = Promise.resolve());
      else if (x)
        bt(
          !1,
          `Route "${s.id}" has a static property "${a}" defined. The lazy property will be ignored.`
        );
      else {
        let w = await u();
        w != null && (Object.assign(s, { [a]: w }), Object.assign(s, l(s)));
      }
      typeof s.lazy == "object" &&
        ((s.lazy[a] = void 0),
        Object.values(s.lazy).every((w) => w === void 0) && (s.lazy = void 0));
    })();
    return (f[a] = h), h;
  },
  E0 = new WeakMap();
function ax(a, t, i, l, s) {
  let u = i[a.id];
  if ((ze(u, "No route found in manifest"), !a.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof a.lazy == "function") {
    let b = E0.get(u);
    if (b) return { lazyRoutePromise: b, lazyHandlerPromise: b };
    let x = (async () => {
      ze(typeof a.lazy == "function", "No lazy route function found");
      let w = await a.lazy(),
        T = {};
      for (let A in w) {
        let P = w[A];
        if (P === void 0) continue;
        let H = C2(A),
          I = u[A] !== void 0 && A !== "hasErrorBoundary";
        H
          ? bt(
              !H,
              "Route property " +
                A +
                " is not a supported property to be returned from a lazy route function. This property will be ignored."
            )
          : I
          ? bt(
              !I,
              `Route "${u.id}" has a static property "${A}" defined but its lazy function is also returning a value for this property. The lazy route property "${A}" will be ignored.`
            )
          : (T[A] = P);
      }
      Object.assign(u, T), Object.assign(u, { ...l(u), lazy: void 0 });
    })();
    return (
      E0.set(u, x),
      x.catch(() => {}),
      { lazyRoutePromise: x, lazyHandlerPromise: x }
    );
  }
  let f = Object.keys(a.lazy),
    m = [],
    h;
  for (let b of f) {
    if (s && s.includes(b)) continue;
    let x = By({ key: b, route: a, manifest: i, mapRouteProperties: l });
    x && (m.push(x), b === t && (h = x));
  }
  let p = m.length > 0 ? Promise.all(m).then(() => {}) : void 0;
  return (
    p == null || p.catch(() => {}),
    h == null || h.catch(() => {}),
    { lazyRoutePromise: p, lazyHandlerPromise: h }
  );
}
async function S0(a) {
  let t = a.matches.filter((s) => s.shouldLoad),
    i = {};
  return (
    (await Promise.all(t.map((s) => s.resolve()))).forEach((s, u) => {
      i[t[u].route.id] = s;
    }),
    i
  );
}
async function rx(a) {
  return a.matches.some((t) => t.route.unstable_middleware)
    ? Hy(
        a,
        !1,
        () => S0(a),
        (t, i) => ({ [i]: { type: "error", result: t } })
      )
    : S0(a);
}
async function Hy(a, t, i, l) {
  let { matches: s, request: u, params: f, context: m } = a,
    h = { handlerResult: void 0 };
  try {
    let p = s.flatMap((x) =>
        x.route.unstable_middleware
          ? x.route.unstable_middleware.map((w) => [x.route.id, w])
          : []
      ),
      b = await Py({ request: u, params: f, context: m }, p, t, h, i);
    return t ? b : h.handlerResult;
  } catch (p) {
    if (!h.middlewareError) throw p;
    let b = await l(h.middlewareError.error, h.middlewareError.routeId);
    return h.handlerResult ? Object.assign(h.handlerResult, b) : b;
  }
}
async function Py(a, t, i, l, s, u = 0) {
  let { request: f } = a;
  if (f.signal.aborted)
    throw f.signal.reason
      ? f.signal.reason
      : new Error(
          `Request aborted without an \`AbortSignal.reason\`: ${f.method} ${f.url}`
        );
  let m = t[u];
  if (!m) return (l.handlerResult = await s()), l.handlerResult;
  let [h, p] = m,
    b = !1,
    x,
    w = async () => {
      if (b) throw new Error("You may only call `next()` once per middleware");
      (b = !0), await Py(a, t, i, l, s, u + 1);
    };
  try {
    let T = await p(
      { request: a.request, params: a.params, context: a.context },
      w
    );
    return b ? (T === void 0 ? x : T) : w();
  } catch (T) {
    throw (
      (l.middlewareError
        ? l.middlewareError.error !== T &&
          (l.middlewareError = { routeId: h, error: T })
        : (l.middlewareError = { routeId: h, error: T }),
      T)
    );
  }
}
function Vy(a, t, i, l, s) {
  let u = By({
      key: "unstable_middleware",
      route: l.route,
      manifest: t,
      mapRouteProperties: a,
    }),
    f = ax(l.route, hn(i.method) ? "action" : "loader", t, a, s);
  return {
    middleware: u,
    route: f.lazyRoutePromise,
    handler: f.lazyHandlerPromise,
  };
}
function Cf(a, t, i, l, s, u, f, m = null) {
  let h = !1,
    p = Vy(a, t, i, l, s);
  return {
    ...l,
    _lazyPromises: p,
    shouldLoad: f,
    unstable_shouldRevalidateArgs: m,
    unstable_shouldCallHandler(b) {
      return (
        (h = !0),
        m
          ? typeof b == "boolean"
            ? pc(l, { ...m, defaultShouldRevalidate: b })
            : pc(l, m)
          : f
      );
    },
    resolve(b) {
      return h ||
        f ||
        (b && i.method === "GET" && (l.route.lazy || l.route.loader))
        ? ox({
            request: i,
            match: l,
            lazyHandlerPromise: p == null ? void 0 : p.handler,
            lazyRoutePromise: p == null ? void 0 : p.route,
            handlerOverride: b,
            scopedContext: u,
          })
        : Promise.resolve({ type: "data", result: void 0 });
    },
  };
}
function Ii(a, t, i, l, s, u, f, m = null) {
  return l.map((h) =>
    h.route.id !== s.route.id
      ? {
          ...h,
          shouldLoad: !1,
          unstable_shouldRevalidateArgs: m,
          unstable_shouldCallHandler: () => !1,
          _lazyPromises: Vy(a, t, i, h, u),
          resolve: () => Promise.resolve({ type: "data", result: void 0 }),
        }
      : Cf(a, t, i, h, u, f, !0, m)
  );
}
async function ix(a, t, i, l, s, u) {
  i.some((p) => {
    var b;
    return (b = p._lazyPromises) == null ? void 0 : b.middleware;
  }) &&
    (await Promise.all(
      i.map((p) => {
        var b;
        return (b = p._lazyPromises) == null ? void 0 : b.middleware;
      })
    ));
  let f = { request: t, params: i[0].params, context: s, matches: i },
    h = await a({
      ...f,
      fetcherKey: l,
      unstable_runClientMiddleware: (p) => {
        let b = f;
        return Hy(
          b,
          !1,
          () =>
            p({
              ...b,
              fetcherKey: l,
              unstable_runClientMiddleware: () => {
                throw new Error(
                  "Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler"
                );
              },
            }),
          (x, w) => ({ [w]: { type: "error", result: x } })
        );
      },
    });
  try {
    await Promise.all(
      i.flatMap((p) => {
        var b, x;
        return [
          (b = p._lazyPromises) == null ? void 0 : b.handler,
          (x = p._lazyPromises) == null ? void 0 : x.route,
        ];
      })
    );
  } catch {}
  return h;
}
async function ox({
  request: a,
  match: t,
  lazyHandlerPromise: i,
  lazyRoutePromise: l,
  handlerOverride: s,
  scopedContext: u,
}) {
  let f,
    m,
    h = hn(a.method),
    p = h ? "action" : "loader",
    b = (x) => {
      let w,
        T = new Promise((H, z) => (w = z));
      (m = () => w()), a.signal.addEventListener("abort", m);
      let A = (H) =>
          typeof x != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${p}" [routeId: ${t.route.id}]`
                )
              )
            : x(
                { request: a, params: t.params, context: u },
                ...(H !== void 0 ? [H] : [])
              ),
        P = (async () => {
          try {
            return { type: "data", result: await (s ? s((z) => A(z)) : A()) };
          } catch (H) {
            return { type: "error", result: H };
          }
        })();
      return Promise.race([P, T]);
    };
  try {
    let x = h ? t.route.action : t.route.loader;
    if (i || l)
      if (x) {
        let w,
          [T] = await Promise.all([
            b(x).catch((A) => {
              w = A;
            }),
            i,
            l,
          ]);
        if (w !== void 0) throw w;
        f = T;
      } else {
        await i;
        let w = h ? t.route.action : t.route.loader;
        if (w) [f] = await Promise.all([b(w), l]);
        else if (p === "action") {
          let T = new URL(a.url),
            A = T.pathname + T.search;
          throw Rn(405, { method: a.method, pathname: A, routeId: t.route.id });
        } else return { type: "data", result: void 0 };
      }
    else if (x) f = await b(x);
    else {
      let w = new URL(a.url),
        T = w.pathname + w.search;
      throw Rn(404, { pathname: T });
    }
  } catch (x) {
    return { type: "error", result: x };
  } finally {
    m && a.signal.removeEventListener("abort", m);
  }
  return f;
}
async function lx(a) {
  var l, s, u, f, m, h;
  let { result: t, type: i } = a;
  if (Gy(t)) {
    let p;
    try {
      let b = t.headers.get("Content-Type");
      b && /\bapplication\/json\b/.test(b)
        ? t.body == null
          ? (p = null)
          : (p = await t.json())
        : (p = await t.text());
    } catch (b) {
      return { type: "error", error: b };
    }
    return i === "error"
      ? {
          type: "error",
          error: new mc(t.status, t.statusText, p),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: "data", data: p, statusCode: t.status, headers: t.headers };
  }
  return i === "error"
    ? N0(t)
      ? t.data instanceof Error
        ? {
            type: "error",
            error: t.data,
            statusCode: (l = t.init) == null ? void 0 : l.status,
            headers:
              (s = t.init) != null && s.headers
                ? new Headers(t.init.headers)
                : void 0,
          }
        : {
            type: "error",
            error: new mc(
              ((u = t.init) == null ? void 0 : u.status) || 500,
              void 0,
              t.data
            ),
            statusCode: pl(t) ? t.status : void 0,
            headers:
              (f = t.init) != null && f.headers
                ? new Headers(t.init.headers)
                : void 0,
          }
      : { type: "error", error: t, statusCode: pl(t) ? t.status : void 0 }
    : N0(t)
    ? {
        type: "data",
        data: t.data,
        statusCode: (m = t.init) == null ? void 0 : m.status,
        headers:
          (h = t.init) != null && h.headers
            ? new Headers(t.init.headers)
            : void 0,
      }
    : { type: "data", data: t };
}
function sx(a, t, i, l, s) {
  let u = a.headers.get("Location");
  if (
    (ze(
      u,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !$f.test(u))
  ) {
    let f = l.slice(0, l.findIndex((m) => m.route.id === i) + 1);
    (u = Sf(new URL(t.url), f, s, u)), a.headers.set("Location", u);
  }
  return a;
}
function T0(a, t, i) {
  if ($f.test(a)) {
    let l = a,
      s = l.startsWith("//") ? new URL(t.protocol + l) : new URL(l),
      u = kn(s.pathname, i) != null;
    if (s.origin === t.origin && u) return s.pathname + s.search + s.hash;
  }
  return a;
}
function Ui(a, t, i, l) {
  let s = a.createURL(qy(t)).toString(),
    u = { signal: i };
  if (l && hn(l.formMethod)) {
    let { formMethod: f, formEncType: m } = l;
    (u.method = f.toUpperCase()),
      m === "application/json"
        ? ((u.headers = new Headers({ "Content-Type": m })),
          (u.body = JSON.stringify(l.json)))
        : m === "text/plain"
        ? (u.body = l.text)
        : m === "application/x-www-form-urlencoded" && l.formData
        ? (u.body = Af(l.formData))
        : (u.body = l.formData);
  }
  return new Request(s, u);
}
function Af(a) {
  let t = new URLSearchParams();
  for (let [i, l] of a.entries())
    t.append(i, typeof l == "string" ? l : l.name);
  return t;
}
function C0(a) {
  let t = new FormData();
  for (let [i, l] of a.entries()) t.append(i, l);
  return t;
}
function cx(a, t, i, l = !1, s = !1) {
  let u = {},
    f = null,
    m,
    h = !1,
    p = {},
    b = i && fn(i[1]) ? i[1].error : void 0;
  return (
    a.forEach((x) => {
      if (!(x.route.id in t)) return;
      let w = x.route.id,
        T = t[w];
      if (
        (ze(!qr(T), "Cannot handle redirect results in processLoaderData"),
        fn(T))
      ) {
        let A = T.error;
        if ((b !== void 0 && ((A = b), (b = void 0)), (f = f || {}), s))
          f[w] = A;
        else {
          let P = Vr(a, w);
          f[P.route.id] == null && (f[P.route.id] = A);
        }
        l || (u[w] = Uy),
          h || ((h = !0), (m = pl(T.error) ? T.error.status : 500)),
          T.headers && (p[w] = T.headers);
      } else
        (u[w] = T.data),
          T.statusCode && T.statusCode !== 200 && !h && (m = T.statusCode),
          T.headers && (p[w] = T.headers);
    }),
    b !== void 0 && i && ((f = { [i[0]]: b }), i[2] && (u[i[2]] = void 0)),
    { loaderData: u, errors: f, statusCode: m || 200, loaderHeaders: p }
  );
}
function A0(a, t, i, l, s, u) {
  let { loaderData: f, errors: m } = cx(t, i, l);
  return (
    s
      .filter((h) => !h.matches || h.matches.some((p) => p.shouldLoad))
      .forEach((h) => {
        let { key: p, match: b, controller: x } = h,
          w = u[p];
        if (
          (ze(w, "Did not find corresponding fetcher result"),
          !(x && x.signal.aborted))
        )
          if (fn(w)) {
            let T = Vr(a.matches, b == null ? void 0 : b.route.id);
            (m && m[T.route.id]) || (m = { ...m, [T.route.id]: w.error }),
              a.fetchers.delete(p);
          } else if (qr(w)) ze(!1, "Unhandled fetcher revalidation redirect");
          else {
            let T = nr(w.data);
            a.fetchers.set(p, T);
          }
      }),
    { loaderData: f, errors: m }
  );
}
function R0(a, t, i, l) {
  let s = Object.entries(t)
    .filter(([, u]) => u !== Uy)
    .reduce((u, [f, m]) => ((u[f] = m), u), {});
  for (let u of i) {
    let f = u.route.id;
    if (
      (!t.hasOwnProperty(f) &&
        a.hasOwnProperty(f) &&
        u.route.loader &&
        (s[f] = a[f]),
      l && l.hasOwnProperty(f))
    )
      break;
  }
  return s;
}
function O0(a) {
  return a
    ? fn(a[1])
      ? { actionData: {} }
      : { actionData: { [a[0]]: a[1].data } }
    : {};
}
function Vr(a, t) {
  return (
    (t ? a.slice(0, a.findIndex((l) => l.route.id === t) + 1) : [...a])
      .reverse()
      .find((l) => l.route.hasErrorBoundary === !0) || a[0]
  );
}
function k0(a) {
  let t =
    a.length === 1
      ? a[0]
      : a.find((i) => i.index || !i.path || i.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Rn(
  a,
  { pathname: t, routeId: i, method: l, type: s, message: u } = {}
) {
  let f = "Unknown Server Error",
    m = "Unknown @remix-run/router error";
  return (
    a === 400
      ? ((f = "Bad Request"),
        l && t && i
          ? (m = `You made a ${l} request to "${t}" but did not provide a \`loader\` for route "${i}", so there is no way to handle the request.`)
          : s === "invalid-body" && (m = "Unable to encode submission body"))
      : a === 403
      ? ((f = "Forbidden"), (m = `Route "${i}" does not match URL "${t}"`))
      : a === 404
      ? ((f = "Not Found"), (m = `No route matches URL "${t}"`))
      : a === 405 &&
        ((f = "Method Not Allowed"),
        l && t && i
          ? (m = `You made a ${l.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${i}", so there is no way to handle the request.`)
          : l && (m = `Invalid request method "${l.toUpperCase()}"`)),
    new mc(a || 500, f, new Error(m), !0)
  );
}
function Ws(a) {
  let t = Object.entries(a);
  for (let i = t.length - 1; i >= 0; i--) {
    let [l, s] = t[i];
    if (qr(s)) return { key: l, result: s };
  }
}
function qy(a) {
  let t = typeof a == "string" ? fr(a) : a;
  return dr({ ...t, hash: "" });
}
function ux(a, t) {
  return a.pathname !== t.pathname || a.search !== t.search
    ? !1
    : a.hash === ""
    ? t.hash !== ""
    : a.hash === t.hash
    ? !0
    : t.hash !== "";
}
function dx(a) {
  return Gy(a.result) && F2.has(a.result.status);
}
function fn(a) {
  return a.type === "error";
}
function qr(a) {
  return (a && a.type) === "redirect";
}
function N0(a) {
  return (
    typeof a == "object" &&
    a != null &&
    "type" in a &&
    "data" in a &&
    "init" in a &&
    a.type === "DataWithResponseInit"
  );
}
function Gy(a) {
  return (
    a != null &&
    typeof a.status == "number" &&
    typeof a.statusText == "string" &&
    typeof a.headers == "object" &&
    typeof a.body < "u"
  );
}
function fx(a) {
  return K2.has(a.toUpperCase());
}
function hn(a) {
  return Y2.has(a.toUpperCase());
}
function Yf(a) {
  return new URLSearchParams(a).getAll("index").some((t) => t === "");
}
function ll(a, t) {
  let i = typeof t == "string" ? fr(t).search : t.search;
  if (a[a.length - 1].route.index && Yf(i || "")) return a[a.length - 1];
  let l = jy(a);
  return l[l.length - 1];
}
function D0(a) {
  let {
    formMethod: t,
    formAction: i,
    formEncType: l,
    text: s,
    formData: u,
    json: f,
  } = a;
  if (!(!t || !i || !l)) {
    if (s != null)
      return {
        formMethod: t,
        formAction: i,
        formEncType: l,
        formData: void 0,
        json: void 0,
        text: s,
      };
    if (u != null)
      return {
        formMethod: t,
        formAction: i,
        formEncType: l,
        formData: u,
        json: void 0,
        text: void 0,
      };
    if (f !== void 0)
      return {
        formMethod: t,
        formAction: i,
        formEncType: l,
        formData: void 0,
        json: f,
        text: void 0,
      };
  }
}
function ff(a, t) {
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
function hx(a, t) {
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
function rl(a, t) {
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
function mx(a, t) {
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
function nr(a) {
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
function px(a, t) {
  try {
    let i = a.sessionStorage.getItem(zy);
    if (i) {
      let l = JSON.parse(i);
      for (let [s, u] of Object.entries(l || {}))
        u && Array.isArray(u) && t.set(s, new Set(u || []));
    }
  } catch {}
}
function gx(a, t) {
  if (t.size > 0) {
    let i = {};
    for (let [l, s] of t) i[l] = [...s];
    try {
      a.sessionStorage.setItem(zy, JSON.stringify(i));
    } catch (l) {
      bt(
        !1,
        `Failed to save applied view transitions in sessionStorage (${l}).`
      );
    }
  }
}
function yx() {
  let a,
    t,
    i = new Promise((l, s) => {
      (a = async (u) => {
        l(u);
        try {
          await i;
        } catch {}
      }),
        (t = async (u) => {
          s(u);
          try {
            await i;
          } catch {}
        });
    });
  return { promise: i, resolve: a, reject: t };
}
var Zr = R.createContext(null);
Zr.displayName = "DataRouter";
var wl = R.createContext(null);
wl.displayName = "DataRouterState";
var Xf = R.createContext({ isTransitioning: !1 });
Xf.displayName = "ViewTransition";
var $y = R.createContext(new Map());
$y.displayName = "Fetchers";
var vx = R.createContext(null);
vx.displayName = "Await";
var Pn = R.createContext(null);
Pn.displayName = "Navigation";
var zc = R.createContext(null);
zc.displayName = "Location";
var Vn = R.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Vn.displayName = "Route";
var Kf = R.createContext(null);
Kf.displayName = "RouteError";
function bx(a, { relative: t } = {}) {
  ze(
    Qi(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: i, navigator: l } = R.useContext(Pn),
    { hash: s, pathname: u, search: f } = _l(a, { relative: t }),
    m = u;
  return (
    i !== "/" && (m = u === "/" ? i : Zn([i, u])),
    l.createHref({ pathname: m, search: f, hash: s })
  );
}
function Qi() {
  return R.useContext(zc) != null;
}
function ea() {
  return (
    ze(
      Qi(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    R.useContext(zc).location
  );
}
var Yy =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Xy(a) {
  R.useContext(Pn).static || R.useLayoutEffect(a);
}
function xl() {
  let { isDataRoute: a } = R.useContext(Vn);
  return a ? Mx() : wx();
}
function wx() {
  ze(
    Qi(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let a = R.useContext(Zr),
    { basename: t, navigator: i } = R.useContext(Pn),
    { matches: l } = R.useContext(Vn),
    { pathname: s } = ea(),
    u = JSON.stringify(jc(l)),
    f = R.useRef(!1);
  return (
    Xy(() => {
      f.current = !0;
    }),
    R.useCallback(
      (h, p = {}) => {
        if ((bt(f.current, Yy), !f.current)) return;
        if (typeof h == "number") {
          i.go(h);
          return;
        }
        let b = Lc(h, JSON.parse(u), s, p.relative === "path");
        a == null &&
          t !== "/" &&
          (b.pathname = b.pathname === "/" ? t : Zn([t, b.pathname])),
          (p.replace ? i.replace : i.push)(b, p.state, p);
      },
      [t, i, u, s, a]
    )
  );
}
var xx = R.createContext(null);
function _x(a) {
  let t = R.useContext(Vn).outlet;
  return t && R.createElement(xx.Provider, { value: a }, t);
}
function _l(a, { relative: t } = {}) {
  let { matches: i } = R.useContext(Vn),
    { pathname: l } = ea(),
    s = JSON.stringify(jc(i));
  return R.useMemo(() => Lc(a, JSON.parse(s), l, t === "path"), [a, s, l, t]);
}
function Ex(a, t, i, l) {
  ze(
    Qi(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: s, static: u } = R.useContext(Pn),
    { matches: f } = R.useContext(Vn),
    m = f[f.length - 1],
    h = m ? m.params : {},
    p = m ? m.pathname : "/",
    b = m ? m.pathnameBase : "/",
    x = m && m.route;
  {
    let I = (x && x.path) || "";
    Fy(
      p,
      !x || I.endsWith("*") || I.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${I}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${I}"> to <Route path="${
        I === "/" ? "*" : `${I}/*`
      }">.`
    );
  }
  let w = ea(),
    T;
  T = w;
  let A = T.pathname || "/",
    P = A;
  if (b !== "/") {
    let I = b.replace(/^\//, "").split("/");
    P = "/" + A.replace(/^\//, "").split("/").slice(I.length).join("/");
  }
  let H =
    !u && i && i.matches && i.matches.length > 0
      ? i.matches
      : ar(a, { pathname: P });
  return (
    bt(
      x || H != null,
      `No routes matched location "${T.pathname}${T.search}${T.hash}" `
    ),
    bt(
      H == null ||
        H[H.length - 1].route.element !== void 0 ||
        H[H.length - 1].route.Component !== void 0 ||
        H[H.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    Rx(
      H &&
        H.map((I) =>
          Object.assign({}, I, {
            params: Object.assign({}, h, I.params),
            pathname: Zn([
              b,
              s.encodeLocation
                ? s.encodeLocation(I.pathname).pathname
                : I.pathname,
            ]),
            pathnameBase:
              I.pathnameBase === "/"
                ? b
                : Zn([
                    b,
                    s.encodeLocation
                      ? s.encodeLocation(I.pathnameBase).pathname
                      : I.pathnameBase,
                  ]),
          })
        ),
      f,
      i,
      l
    )
  );
}
function Sx() {
  let a = Dx(),
    t = pl(a)
      ? `${a.status} ${a.statusText}`
      : a instanceof Error
      ? a.message
      : JSON.stringify(a),
    i = a instanceof Error ? a.stack : null,
    l = "rgba(200,200,200, 0.5)",
    s = { padding: "0.5rem", backgroundColor: l },
    u = { padding: "2px 4px", backgroundColor: l },
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
        R.createElement("code", { style: u }, "ErrorBoundary"),
        " or",
        " ",
        R.createElement("code", { style: u }, "errorElement"),
        " prop on your route."
      )
    )),
    R.createElement(
      R.Fragment,
      null,
      R.createElement("h2", null, "Unexpected Application Error!"),
      R.createElement("h3", { style: { fontStyle: "italic" } }, t),
      i ? R.createElement("pre", { style: s }, i) : null,
      f
    )
  );
}
var Tx = R.createElement(Sx, null),
  Cx = class extends R.Component {
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
            Vn.Provider,
            { value: this.props.routeContext },
            R.createElement(Kf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Ax({ routeContext: a, match: t, children: i }) {
  let l = R.useContext(Zr);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = t.route.id),
    R.createElement(Vn.Provider, { value: a }, i)
  );
}
function Rx(a, t = [], i = null, l = null) {
  if (a == null) {
    if (!i) return null;
    if (i.errors) a = i.matches;
    else if (t.length === 0 && !i.initialized && i.matches.length > 0)
      a = i.matches;
    else return null;
  }
  let s = a,
    u = i == null ? void 0 : i.errors;
  if (u != null) {
    let h = s.findIndex(
      (p) => p.route.id && (u == null ? void 0 : u[p.route.id]) !== void 0
    );
    ze(
      h >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        u
      ).join(",")}`
    ),
      (s = s.slice(0, Math.min(s.length, h + 1)));
  }
  let f = !1,
    m = -1;
  if (i)
    for (let h = 0; h < s.length; h++) {
      let p = s[h];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (m = h),
        p.route.id)
      ) {
        let { loaderData: b, errors: x } = i,
          w =
            p.route.loader &&
            !b.hasOwnProperty(p.route.id) &&
            (!x || x[p.route.id] === void 0);
        if (p.route.lazy || w) {
          (f = !0), m >= 0 ? (s = s.slice(0, m + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((h, p, b) => {
    let x,
      w = !1,
      T = null,
      A = null;
    i &&
      ((x = u && p.route.id ? u[p.route.id] : void 0),
      (T = p.route.errorElement || Tx),
      f &&
        (m < 0 && b === 0
          ? (Fy(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (w = !0),
            (A = null))
          : m === b &&
            ((w = !0), (A = p.route.hydrateFallbackElement || null))));
    let P = t.concat(s.slice(0, b + 1)),
      H = () => {
        let z;
        return (
          x
            ? (z = T)
            : w
            ? (z = A)
            : p.route.Component
            ? (z = R.createElement(p.route.Component, null))
            : p.route.element
            ? (z = p.route.element)
            : (z = h),
          R.createElement(Ax, {
            match: p,
            routeContext: { outlet: h, matches: P, isDataRoute: i != null },
            children: z,
          })
        );
      };
    return i && (p.route.ErrorBoundary || p.route.errorElement || b === 0)
      ? R.createElement(Cx, {
          location: i.location,
          revalidation: i.revalidation,
          component: T,
          error: x,
          children: H(),
          routeContext: { outlet: null, matches: P, isDataRoute: !0 },
        })
      : H();
  }, null);
}
function Ff(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ox(a) {
  let t = R.useContext(Zr);
  return ze(t, Ff(a)), t;
}
function Ky(a) {
  let t = R.useContext(wl);
  return ze(t, Ff(a)), t;
}
function kx(a) {
  let t = R.useContext(Vn);
  return ze(t, Ff(a)), t;
}
function Uc(a) {
  let t = kx(a),
    i = t.matches[t.matches.length - 1];
  return (
    ze(
      i.route.id,
      `${a} can only be used on routes that contain a unique "id"`
    ),
    i.route.id
  );
}
function Nx() {
  return Uc("useRouteId");
}
function Ic() {
  let a = Ky("useLoaderData"),
    t = Uc("useLoaderData");
  return a.loaderData[t];
}
function Dx() {
  var l;
  let a = R.useContext(Kf),
    t = Ky("useRouteError"),
    i = Uc("useRouteError");
  return a !== void 0 ? a : (l = t.errors) == null ? void 0 : l[i];
}
function Mx() {
  let { router: a } = Ox("useNavigate"),
    t = Uc("useNavigate"),
    i = R.useRef(!1);
  return (
    Xy(() => {
      i.current = !0;
    }),
    R.useCallback(
      async (s, u = {}) => {
        bt(i.current, Yy),
          i.current &&
            (typeof s == "number"
              ? a.navigate(s)
              : await a.navigate(s, { fromRouteId: t, ...u }));
      },
      [a, t]
    )
  );
}
var M0 = {};
function Fy(a, t, i) {
  !t && !M0[a] && ((M0[a] = !0), bt(!1, i));
}
var j0 = {};
function L0(a, t) {
  !a && !j0[t] && ((j0[t] = !0), console.warn(t));
}
function jx(a) {
  let t = {
    hasErrorBoundary:
      a.hasErrorBoundary || a.ErrorBoundary != null || a.errorElement != null,
  };
  return (
    a.Component &&
      (a.element &&
        bt(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        ),
      Object.assign(t, {
        element: R.createElement(a.Component),
        Component: void 0,
      })),
    a.HydrateFallback &&
      (a.hydrateFallbackElement &&
        bt(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        ),
      Object.assign(t, {
        hydrateFallbackElement: R.createElement(a.HydrateFallback),
        HydrateFallback: void 0,
      })),
    a.ErrorBoundary &&
      (a.errorElement &&
        bt(
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
var Lx = ["HydrateFallback", "hydrateFallbackElement"],
  zx = class {
    constructor() {
      (this.status = "pending"),
        (this.promise = new Promise((t, i) => {
          (this.resolve = (l) => {
            this.status === "pending" && ((this.status = "resolved"), t(l));
          }),
            (this.reject = (l) => {
              this.status === "pending" && ((this.status = "rejected"), i(l));
            });
        }));
    }
  };
function Ux({ router: a, flushSync: t }) {
  let [i, l] = R.useState(a.state),
    [s, u] = R.useState(),
    [f, m] = R.useState({ isTransitioning: !1 }),
    [h, p] = R.useState(),
    [b, x] = R.useState(),
    [w, T] = R.useState(),
    A = R.useRef(new Map()),
    P = R.useCallback(
      (V, { deletedFetchers: Q, flushSync: F, viewTransitionOpts: O }) => {
        V.fetchers.forEach((Z, re) => {
          Z.data !== void 0 && A.current.set(re, Z.data);
        }),
          Q.forEach((Z) => A.current.delete(Z)),
          L0(
            F === !1 || t != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          );
        let ne =
          a.window != null &&
          a.window.document != null &&
          typeof a.window.document.startViewTransition == "function";
        if (
          (L0(
            O == null || ne,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
          ),
          !O || !ne)
        ) {
          t && F ? t(() => l(V)) : R.startTransition(() => l(V));
          return;
        }
        if (t && F) {
          t(() => {
            b && (h && h.resolve(), b.skipTransition()),
              m({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: O.currentLocation,
                nextLocation: O.nextLocation,
              });
          });
          let Z = a.window.document.startViewTransition(() => {
            t(() => l(V));
          });
          Z.finished.finally(() => {
            t(() => {
              p(void 0), x(void 0), u(void 0), m({ isTransitioning: !1 });
            });
          }),
            t(() => x(Z));
          return;
        }
        b
          ? (h && h.resolve(),
            b.skipTransition(),
            T({
              state: V,
              currentLocation: O.currentLocation,
              nextLocation: O.nextLocation,
            }))
          : (u(V),
            m({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: O.currentLocation,
              nextLocation: O.nextLocation,
            }));
      },
      [a.window, t, b, h]
    );
  R.useLayoutEffect(() => a.subscribe(P), [a, P]),
    R.useEffect(() => {
      f.isTransitioning && !f.flushSync && p(new zx());
    }, [f]),
    R.useEffect(() => {
      if (h && s && a.window) {
        let V = s,
          Q = h.promise,
          F = a.window.document.startViewTransition(async () => {
            R.startTransition(() => l(V)), await Q;
          });
        F.finished.finally(() => {
          p(void 0), x(void 0), u(void 0), m({ isTransitioning: !1 });
        }),
          x(F);
      }
    }, [s, h, a.window]),
    R.useEffect(() => {
      h && s && i.location.key === s.location.key && h.resolve();
    }, [h, b, i.location, s]),
    R.useEffect(() => {
      !f.isTransitioning &&
        w &&
        (u(w.state),
        m({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: w.currentLocation,
          nextLocation: w.nextLocation,
        }),
        T(void 0));
    }, [f.isTransitioning, w]);
  let H = R.useMemo(
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
    z = a.basename || "/",
    I = R.useMemo(
      () => ({ router: a, navigator: H, static: !1, basename: z }),
      [a, H, z]
    );
  return R.createElement(
    R.Fragment,
    null,
    R.createElement(
      Zr.Provider,
      { value: I },
      R.createElement(
        wl.Provider,
        { value: i },
        R.createElement(
          $y.Provider,
          { value: A.current },
          R.createElement(
            Xf.Provider,
            { value: f },
            R.createElement(
              Vx,
              {
                basename: z,
                location: i.location,
                navigationType: i.historyAction,
                navigator: H,
              },
              R.createElement(Ix, {
                routes: a.routes,
                future: a.future,
                state: i,
              })
            )
          )
        )
      )
    ),
    null
  );
}
var Ix = R.memo(Bx);
function Bx({ routes: a, future: t, state: i }) {
  return Ex(a, void 0, i, t);
}
function Hx({ to: a, replace: t, state: i, relative: l }) {
  ze(
    Qi(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: s } = R.useContext(Pn);
  bt(
    !s,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: u } = R.useContext(Vn),
    { pathname: f } = ea(),
    m = xl(),
    h = Lc(a, jc(u), f, l === "path"),
    p = JSON.stringify(h);
  return (
    R.useEffect(() => {
      m(JSON.parse(p), { replace: t, state: i, relative: l });
    }, [m, p, l, t, i]),
    null
  );
}
function Px(a) {
  return _x(a.context);
}
function Vx({
  basename: a = "/",
  children: t = null,
  location: i,
  navigationType: l = "POP",
  navigator: s,
  static: u = !1,
}) {
  ze(
    !Qi(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let f = a.replace(/^\/*/, "/"),
    m = R.useMemo(
      () => ({ basename: f, navigator: s, static: u, future: {} }),
      [f, s, u]
    );
  typeof i == "string" && (i = fr(i));
  let {
      pathname: h = "/",
      search: p = "",
      hash: b = "",
      state: x = null,
      key: w = "default",
    } = i,
    T = R.useMemo(() => {
      let A = kn(h, f);
      return A == null
        ? null
        : {
            location: { pathname: A, search: p, hash: b, state: x, key: w },
            navigationType: l,
          };
    }, [f, h, p, b, x, w, l]);
  return (
    bt(
      T != null,
      `<Router basename="${f}"> is not able to match the URL "${h}${p}${b}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    T == null
      ? null
      : R.createElement(
          Pn.Provider,
          { value: m },
          R.createElement(zc.Provider, { children: t, value: T })
        )
  );
}
var ic = "get",
  oc = "application/x-www-form-urlencoded";
function Bc(a) {
  return a != null && typeof a.tagName == "string";
}
function qx(a) {
  return Bc(a) && a.tagName.toLowerCase() === "button";
}
function Gx(a) {
  return Bc(a) && a.tagName.toLowerCase() === "form";
}
function $x(a) {
  return Bc(a) && a.tagName.toLowerCase() === "input";
}
function Yx(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function Xx(a, t) {
  return a.button === 0 && (!t || t === "_self") && !Yx(a);
}
var ec = null;
function Kx() {
  if (ec === null)
    try {
      new FormData(document.createElement("form"), 0), (ec = !1);
    } catch {
      ec = !0;
    }
  return ec;
}
var Fx = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function hf(a) {
  return a != null && !Fx.has(a)
    ? (bt(
        !1,
        `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${oc}"`
      ),
      null)
    : a;
}
function Qx(a, t) {
  let i, l, s, u, f;
  if (Gx(a)) {
    let m = a.getAttribute("action");
    (l = m ? kn(m, t) : null),
      (i = a.getAttribute("method") || ic),
      (s = hf(a.getAttribute("enctype")) || oc),
      (u = new FormData(a));
  } else if (qx(a) || ($x(a) && (a.type === "submit" || a.type === "image"))) {
    let m = a.form;
    if (m == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let h = a.getAttribute("formaction") || m.getAttribute("action");
    if (
      ((l = h ? kn(h, t) : null),
      (i = a.getAttribute("formmethod") || m.getAttribute("method") || ic),
      (s =
        hf(a.getAttribute("formenctype")) ||
        hf(m.getAttribute("enctype")) ||
        oc),
      (u = new FormData(m, a)),
      !Kx())
    ) {
      let { name: p, type: b, value: x } = a;
      if (b === "image") {
        let w = p ? `${p}.` : "";
        u.append(`${w}x`, "0"), u.append(`${w}y`, "0");
      } else p && u.append(p, x);
    }
  } else {
    if (Bc(a))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (i = ic), (l = null), (s = oc), (f = a);
  }
  return (
    u && s === "text/plain" && ((f = u), (u = void 0)),
    { action: l, method: i.toLowerCase(), encType: s, formData: u, body: f }
  );
}
function Qf(a, t) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(t);
}
async function Zx(a, t) {
  if (a.id in t) return t[a.id];
  try {
    let i = await import(a.module);
    return (t[a.id] = i), i;
  } catch (i) {
    return (
      console.error(
        `Error loading route module \`${a.module}\`, reloading page...`
      ),
      console.error(i),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Jx(a) {
  return a == null
    ? !1
    : a.href == null
    ? a.rel === "preload" &&
      typeof a.imageSrcSet == "string" &&
      typeof a.imageSizes == "string"
    : typeof a.rel == "string" && typeof a.href == "string";
}
async function Wx(a, t, i) {
  let l = await Promise.all(
    a.map(async (s) => {
      let u = t.routes[s.route.id];
      if (u) {
        let f = await Zx(u, i);
        return f.links ? f.links() : [];
      }
      return [];
    })
  );
  return a_(
    l
      .flat(1)
      .filter(Jx)
      .filter((s) => s.rel === "stylesheet" || s.rel === "preload")
      .map((s) =>
        s.rel === "stylesheet"
          ? { ...s, rel: "prefetch", as: "style" }
          : { ...s, rel: "prefetch" }
      )
  );
}
function z0(a, t, i, l, s, u) {
  let f = (h, p) => (i[p] ? h.route.id !== i[p].route.id : !0),
    m = (h, p) => {
      var b;
      return (
        i[p].pathname !== h.pathname ||
        (((b = i[p].route.path) == null ? void 0 : b.endsWith("*")) &&
          i[p].params["*"] !== h.params["*"])
      );
    };
  return u === "assets"
    ? t.filter((h, p) => f(h, p) || m(h, p))
    : u === "data"
    ? t.filter((h, p) => {
        var x;
        let b = l.routes[h.route.id];
        if (!b || !b.hasLoader) return !1;
        if (f(h, p) || m(h, p)) return !0;
        if (h.route.shouldRevalidate) {
          let w = h.route.shouldRevalidate({
            currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
            currentParams: ((x = i[0]) == null ? void 0 : x.params) || {},
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
function e_(a, t, { includeHydrateFallback: i } = {}) {
  return t_(
    a
      .map((l) => {
        let s = t.routes[l.route.id];
        if (!s) return [];
        let u = [s.module];
        return (
          s.clientActionModule && (u = u.concat(s.clientActionModule)),
          s.clientLoaderModule && (u = u.concat(s.clientLoaderModule)),
          i &&
            s.hydrateFallbackModule &&
            (u = u.concat(s.hydrateFallbackModule)),
          s.imports && (u = u.concat(s.imports)),
          u
        );
      })
      .flat(1)
  );
}
function t_(a) {
  return [...new Set(a)];
}
function n_(a) {
  let t = {},
    i = Object.keys(a).sort();
  for (let l of i) t[l] = a[l];
  return t;
}
function a_(a, t) {
  let i = new Set();
  return (
    new Set(t),
    a.reduce((l, s) => {
      let u = JSON.stringify(n_(s));
      return i.has(u) || (i.add(u), l.push({ key: u, link: s })), l;
    }, [])
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var r_ = new Set([100, 101, 204, 205]);
function i_(a, t) {
  let i =
    typeof a == "string"
      ? new URL(
          a,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : a;
  return (
    i.pathname === "/"
      ? (i.pathname = "_root.data")
      : t && kn(i.pathname, t) === "/"
      ? (i.pathname = `${t.replace(/\/$/, "")}/_root.data`)
      : (i.pathname = `${i.pathname.replace(/\/$/, "")}.data`),
    i
  );
}
function Qy() {
  let a = R.useContext(Zr);
  return (
    Qf(
      a,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    a
  );
}
function o_() {
  let a = R.useContext(wl);
  return (
    Qf(
      a,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    a
  );
}
var Zf = R.createContext(void 0);
Zf.displayName = "FrameworkContext";
function Zy() {
  let a = R.useContext(Zf);
  return (
    Qf(a, "You must render this element inside a <HydratedRouter> element"), a
  );
}
function l_(a, t) {
  let i = R.useContext(Zf),
    [l, s] = R.useState(!1),
    [u, f] = R.useState(!1),
    {
      onFocus: m,
      onBlur: h,
      onMouseEnter: p,
      onMouseLeave: b,
      onTouchStart: x,
    } = t,
    w = R.useRef(null);
  R.useEffect(() => {
    if ((a === "render" && f(!0), a === "viewport")) {
      let P = (z) => {
          z.forEach((I) => {
            f(I.isIntersecting);
          });
        },
        H = new IntersectionObserver(P, { threshold: 0.5 });
      return (
        w.current && H.observe(w.current),
        () => {
          H.disconnect();
        }
      );
    }
  }, [a]),
    R.useEffect(() => {
      if (l) {
        let P = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(P);
        };
      }
    }, [l]);
  let T = () => {
      s(!0);
    },
    A = () => {
      s(!1), f(!1);
    };
  return i
    ? a !== "intent"
      ? [u, w, {}]
      : [
          u,
          w,
          {
            onFocus: il(m, T),
            onBlur: il(h, A),
            onMouseEnter: il(p, T),
            onMouseLeave: il(b, A),
            onTouchStart: il(x, T),
          },
        ]
    : [!1, w, {}];
}
function il(a, t) {
  return (i) => {
    a && a(i), i.defaultPrevented || t(i);
  };
}
function s_({ page: a, ...t }) {
  let { router: i } = Qy(),
    l = R.useMemo(() => ar(i.routes, a, i.basename), [i.routes, a, i.basename]);
  return l ? R.createElement(u_, { page: a, matches: l, ...t }) : null;
}
function c_(a) {
  let { manifest: t, routeModules: i } = Zy(),
    [l, s] = R.useState([]);
  return (
    R.useEffect(() => {
      let u = !1;
      return (
        Wx(a, t, i).then((f) => {
          u || s(f);
        }),
        () => {
          u = !0;
        }
      );
    }, [a, t, i]),
    l
  );
}
function u_({ page: a, matches: t, ...i }) {
  let l = ea(),
    { manifest: s, routeModules: u } = Zy(),
    { basename: f } = Qy(),
    { loaderData: m, matches: h } = o_(),
    p = R.useMemo(() => z0(a, t, h, s, l, "data"), [a, t, h, s, l]),
    b = R.useMemo(() => z0(a, t, h, s, l, "assets"), [a, t, h, s, l]),
    x = R.useMemo(() => {
      if (a === l.pathname + l.search + l.hash) return [];
      let A = new Set(),
        P = !1;
      if (
        (t.forEach((z) => {
          var V;
          let I = s.routes[z.route.id];
          !I ||
            !I.hasLoader ||
            ((!p.some((Q) => Q.route.id === z.route.id) &&
              z.route.id in m &&
              (V = u[z.route.id]) != null &&
              V.shouldRevalidate) ||
            I.hasClientLoader
              ? (P = !0)
              : A.add(z.route.id));
        }),
        A.size === 0)
      )
        return [];
      let H = i_(a, f);
      return (
        P &&
          A.size > 0 &&
          H.searchParams.set(
            "_routes",
            t
              .filter((z) => A.has(z.route.id))
              .map((z) => z.route.id)
              .join(",")
          ),
        [H.pathname + H.search]
      );
    }, [f, m, l, s, p, t, a, u]),
    w = R.useMemo(() => e_(b, s), [b, s]),
    T = c_(b);
  return R.createElement(
    R.Fragment,
    null,
    x.map((A) =>
      R.createElement("link", {
        key: A,
        rel: "prefetch",
        as: "fetch",
        href: A,
        ...i,
      })
    ),
    w.map((A) =>
      R.createElement("link", { key: A, rel: "modulepreload", href: A, ...i })
    ),
    T.map(({ key: A, link: P }) => R.createElement("link", { key: A, ...P }))
  );
}
function d_(...a) {
  return (t) => {
    a.forEach((i) => {
      typeof i == "function" ? i(t) : i != null && (i.current = t);
    });
  };
}
var Jy =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Jy && (window.__reactRouterVersion = "7.6.0");
} catch {}
function f_(a, t) {
  return W2({
    basename: t == null ? void 0 : t.basename,
    unstable_getContext: t == null ? void 0 : t.unstable_getContext,
    future: t == null ? void 0 : t.future,
    history: w2({ window: t == null ? void 0 : t.window }),
    hydrationData: h_(),
    routes: a,
    mapRouteProperties: jx,
    hydrationRouteProperties: Lx,
    dataStrategy: t == null ? void 0 : t.dataStrategy,
    patchRoutesOnNavigation: t == null ? void 0 : t.patchRoutesOnNavigation,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function h_() {
  let a = window == null ? void 0 : window.__staticRouterHydrationData;
  return a && a.errors && (a = { ...a, errors: m_(a.errors) }), a;
}
function m_(a) {
  if (!a) return null;
  let t = Object.entries(a),
    i = {};
  for (let [l, s] of t)
    if (s && s.__type === "RouteErrorResponse")
      i[l] = new mc(s.status, s.statusText, s.data, s.internal === !0);
    else if (s && s.__type === "Error") {
      if (s.__subType) {
        let u = window[s.__subType];
        if (typeof u == "function")
          try {
            let f = new u(s.message);
            (f.stack = ""), (i[l] = f);
          } catch {}
      }
      if (i[l] == null) {
        let u = new Error(s.message);
        (u.stack = ""), (i[l] = u);
      }
    } else i[l] = s;
  return i;
}
var Wy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  zt = R.forwardRef(function (
    {
      onClick: t,
      discover: i = "render",
      prefetch: l = "none",
      relative: s,
      reloadDocument: u,
      replace: f,
      state: m,
      target: h,
      to: p,
      preventScrollReset: b,
      viewTransition: x,
      ...w
    },
    T
  ) {
    let { basename: A } = R.useContext(Pn),
      P = typeof p == "string" && Wy.test(p),
      H,
      z = !1;
    if (typeof p == "string" && P && ((H = p), Jy))
      try {
        let re = new URL(window.location.href),
          Oe = p.startsWith("//") ? new URL(re.protocol + p) : new URL(p),
          ae = kn(Oe.pathname, A);
        Oe.origin === re.origin && ae != null
          ? (p = ae + Oe.search + Oe.hash)
          : (z = !0);
      } catch {
        bt(
          !1,
          `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let I = bx(p, { relative: s }),
      [V, Q, F] = l_(l, w),
      O = y_(p, {
        replace: f,
        state: m,
        target: h,
        preventScrollReset: b,
        relative: s,
        viewTransition: x,
      });
    function ne(re) {
      t && t(re), re.defaultPrevented || O(re);
    }
    let Z = R.createElement("a", {
      ...w,
      ...F,
      href: H || I,
      onClick: z || u ? t : ne,
      ref: d_(T, Q),
      target: h,
      "data-discover": !P && i === "render" ? "true" : void 0,
    });
    return V && !P
      ? R.createElement(R.Fragment, null, Z, R.createElement(s_, { page: I }))
      : Z;
  });
zt.displayName = "Link";
var sl = R.forwardRef(function (
  {
    "aria-current": t = "page",
    caseSensitive: i = !1,
    className: l = "",
    end: s = !1,
    style: u,
    to: f,
    viewTransition: m,
    children: h,
    ...p
  },
  b
) {
  let x = _l(f, { relative: p.relative }),
    w = ea(),
    T = R.useContext(wl),
    { navigator: A, basename: P } = R.useContext(Pn),
    H = T != null && __(x) && m === !0,
    z = A.encodeLocation ? A.encodeLocation(x).pathname : x.pathname,
    I = w.pathname,
    V =
      T && T.navigation && T.navigation.location
        ? T.navigation.location.pathname
        : null;
  i ||
    ((I = I.toLowerCase()),
    (V = V ? V.toLowerCase() : null),
    (z = z.toLowerCase())),
    V && P && (V = kn(V, P) || V);
  const Q = z !== "/" && z.endsWith("/") ? z.length - 1 : z.length;
  let F = I === z || (!s && I.startsWith(z) && I.charAt(Q) === "/"),
    O =
      V != null &&
      (V === z || (!s && V.startsWith(z) && V.charAt(z.length) === "/")),
    ne = { isActive: F, isPending: O, isTransitioning: H },
    Z = F ? t : void 0,
    re;
  typeof l == "function"
    ? (re = l(ne))
    : (re = [
        l,
        F ? "active" : null,
        O ? "pending" : null,
        H ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Oe = typeof u == "function" ? u(ne) : u;
  return R.createElement(
    zt,
    {
      ...p,
      "aria-current": Z,
      className: re,
      ref: b,
      style: Oe,
      to: f,
      viewTransition: m,
    },
    typeof h == "function" ? h(ne) : h
  );
});
sl.displayName = "NavLink";
var p_ = R.forwardRef(
  (
    {
      discover: a = "render",
      fetcherKey: t,
      navigate: i,
      reloadDocument: l,
      replace: s,
      state: u,
      method: f = ic,
      action: m,
      onSubmit: h,
      relative: p,
      preventScrollReset: b,
      viewTransition: x,
      ...w
    },
    T
  ) => {
    let A = w_(),
      P = x_(m, { relative: p }),
      H = f.toLowerCase() === "get" ? "get" : "post",
      z = typeof m == "string" && Wy.test(m),
      I = (V) => {
        if ((h && h(V), V.defaultPrevented)) return;
        V.preventDefault();
        let Q = V.nativeEvent.submitter,
          F = (Q == null ? void 0 : Q.getAttribute("formmethod")) || f;
        A(Q || V.currentTarget, {
          fetcherKey: t,
          method: F,
          navigate: i,
          replace: s,
          state: u,
          relative: p,
          preventScrollReset: b,
          viewTransition: x,
        });
      };
    return R.createElement("form", {
      ref: T,
      method: H,
      action: P,
      onSubmit: l ? h : I,
      ...w,
      "data-discover": !z && a === "render" ? "true" : void 0,
    });
  }
);
p_.displayName = "Form";
function g_(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ev(a) {
  let t = R.useContext(Zr);
  return ze(t, g_(a)), t;
}
function y_(
  a,
  {
    target: t,
    replace: i,
    state: l,
    preventScrollReset: s,
    relative: u,
    viewTransition: f,
  } = {}
) {
  let m = xl(),
    h = ea(),
    p = _l(a, { relative: u });
  return R.useCallback(
    (b) => {
      if (Xx(b, t)) {
        b.preventDefault();
        let x = i !== void 0 ? i : dr(h) === dr(p);
        m(a, {
          replace: x,
          state: l,
          preventScrollReset: s,
          relative: u,
          viewTransition: f,
        });
      }
    },
    [h, m, p, i, l, t, a, s, u, f]
  );
}
var v_ = 0,
  b_ = () => `__${String(++v_)}__`;
function w_() {
  let { router: a } = ev("useSubmit"),
    { basename: t } = R.useContext(Pn),
    i = Nx();
  return R.useCallback(
    async (l, s = {}) => {
      let { action: u, method: f, encType: m, formData: h, body: p } = Qx(l, t);
      if (s.navigate === !1) {
        let b = s.fetcherKey || b_();
        await a.fetch(b, i, s.action || u, {
          preventScrollReset: s.preventScrollReset,
          formData: h,
          body: p,
          formMethod: s.method || f,
          formEncType: s.encType || m,
          flushSync: s.flushSync,
        });
      } else
        await a.navigate(s.action || u, {
          preventScrollReset: s.preventScrollReset,
          formData: h,
          body: p,
          formMethod: s.method || f,
          formEncType: s.encType || m,
          replace: s.replace,
          state: s.state,
          fromRouteId: i,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition,
        });
    },
    [a, t, i]
  );
}
function x_(a, { relative: t } = {}) {
  let { basename: i } = R.useContext(Pn),
    l = R.useContext(Vn);
  ze(l, "useFormAction must be used inside a RouteContext");
  let [s] = l.matches.slice(-1),
    u = { ..._l(a || ".", { relative: t }) },
    f = ea();
  if (a == null) {
    u.search = f.search;
    let m = new URLSearchParams(u.search),
      h = m.getAll("index");
    if (h.some((b) => b === "")) {
      m.delete("index"),
        h.filter((x) => x).forEach((x) => m.append("index", x));
      let b = m.toString();
      u.search = b ? `?${b}` : "";
    }
  }
  return (
    (!a || a === ".") &&
      s.route.index &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    i !== "/" && (u.pathname = u.pathname === "/" ? i : Zn([i, u.pathname])),
    dr(u)
  );
}
function __(a, t = {}) {
  let i = R.useContext(Xf);
  ze(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: l } = ev("useViewTransitionState"),
    s = _l(a, { relative: t.relative });
  if (!i.isTransitioning) return !1;
  let u = kn(i.currentLocation.pathname, l) || i.currentLocation.pathname,
    f = kn(i.nextLocation.pathname, l) || i.nextLocation.pathname;
  return hc(s.pathname, f) != null || hc(s.pathname, u) != null;
}
[...r_];
var tv = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  U0 = Ye.createContext && Ye.createContext(tv),
  E_ = ["attr", "size", "title"];
function S_(a, t) {
  if (a == null) return {};
  var i = T_(a, t),
    l,
    s;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(a);
    for (s = 0; s < u.length; s++)
      (l = u[s]),
        !(t.indexOf(l) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(a, l) &&
          (i[l] = a[l]);
  }
  return i;
}
function T_(a, t) {
  if (a == null) return {};
  var i = {};
  for (var l in a)
    if (Object.prototype.hasOwnProperty.call(a, l)) {
      if (t.indexOf(l) >= 0) continue;
      i[l] = a[l];
    }
  return i;
}
function gc() {
  return (
    (gc = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var l in i)
              Object.prototype.hasOwnProperty.call(i, l) && (a[l] = i[l]);
          }
          return a;
        }),
    gc.apply(this, arguments)
  );
}
function I0(a, t) {
  var i = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(a);
    t &&
      (l = l.filter(function (s) {
        return Object.getOwnPropertyDescriptor(a, s).enumerable;
      })),
      i.push.apply(i, l);
  }
  return i;
}
function yc(a) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? I0(Object(i), !0).forEach(function (l) {
          C_(a, l, i[l]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
      : I0(Object(i)).forEach(function (l) {
          Object.defineProperty(a, l, Object.getOwnPropertyDescriptor(i, l));
        });
  }
  return a;
}
function C_(a, t, i) {
  return (
    (t = A_(t)),
    t in a
      ? Object.defineProperty(a, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (a[t] = i),
    a
  );
}
function A_(a) {
  var t = R_(a, "string");
  return typeof t == "symbol" ? t : t + "";
}
function R_(a, t) {
  if (typeof a != "object" || !a) return a;
  var i = a[Symbol.toPrimitive];
  if (i !== void 0) {
    var l = i.call(a, t);
    if (typeof l != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(a);
}
function nv(a) {
  return (
    a &&
    a.map((t, i) =>
      Ye.createElement(t.tag, yc({ key: i }, t.attr), nv(t.child))
    )
  );
}
function St(a) {
  return (t) =>
    Ye.createElement(O_, gc({ attr: yc({}, a.attr) }, t), nv(a.child));
}
function O_(a) {
  var t = (i) => {
    var { attr: l, size: s, title: u } = a,
      f = S_(a, E_),
      m = s || i.size || "1em",
      h;
    return (
      i.className && (h = i.className),
      a.className && (h = (h ? h + " " : "") + a.className),
      Ye.createElement(
        "svg",
        gc(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          i.attr,
          l,
          f,
          {
            className: h,
            style: yc(yc({ color: a.color || i.color }, i.style), a.style),
            height: m,
            width: m,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        u && Ye.createElement("title", null, u),
        a.children
      )
    );
  };
  return U0 !== void 0
    ? Ye.createElement(U0.Consumer, null, (i) => t(i))
    : t(tv);
}
function k_(a) {
  return St({
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
        },
        child: [],
      },
    ],
  })(a);
}
function N_(a) {
  return St({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
        child: [],
      },
    ],
  })(a);
}
function D_(a) {
  return St({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
        },
        child: [],
      },
    ],
  })(a);
}
function M_(a) {
  return St({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
        child: [],
      },
    ],
  })(a);
}
function av(a) {
  return St({
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
function j_(a) {
  return St({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z",
        },
        child: [],
      },
    ],
  })(a);
}
function rv(a) {
  return St({
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
function L_(a) {
  return St({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z",
        },
        child: [],
      },
    ],
  })(a);
}
function z_(a) {
  return St({
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
function U_(a) {
  return St({
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
function I_(a) {
  return St({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",
        },
        child: [],
      },
    ],
  })(a);
}
function B_(a) {
  return St({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z",
        },
        child: [],
      },
    ],
  })(a);
}
function H_(a) {
  return St({
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
function P_(a) {
  return St({
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
function V_(a) {
  return St({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
        },
        child: [],
      },
    ],
  })(a);
}
function q_(a) {
  return St({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z",
        },
        child: [],
      },
    ],
  })(a);
}
function G_(a) {
  return St({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
        },
        child: [],
      },
    ],
  })(a);
}
function $_(a) {
  return St({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M11 4V2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1zm7.36 3.05 1.41-1.42a.996.996 0 1 0-1.41-1.41l-1.41 1.42a.996.996 0 1 0 1.41 1.41zM22 11h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zm-10 8c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1zM5.64 7.05 4.22 5.64c-.39-.39-.39-1.03 0-1.41s1.03-.39 1.41 0l1.41 1.41c.39.39.39 1.03 0 1.41s-1.02.39-1.4 0zm11.31 9.9a.996.996 0 0 0 0 1.41l1.41 1.41c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.41-1.41a.996.996 0 0 0-1.41 0zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm3.64 6.78 1.41-1.41c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.41 1.41a.996.996 0 0 0 0 1.41c.38.39 1.02.39 1.41 0zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z",
        },
        child: [],
      },
    ],
  })(a);
}
function iv(a) {
  return St({
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
const Y_ = () => {
    const [a, t] = R.useState(!1);
    return (
      R.useEffect(() => {
        const i = document.documentElement.classList;
        t(i.contains("dark"));
        const l = new MutationObserver(() => {
          t(i.contains("dark"));
        });
        return (
          l.observe(document.documentElement, {
            attributes: !0,
            attributeFilter: ["class"],
          }),
          () => l.disconnect()
        );
      }, []),
      y.jsxs("div", {
        className: `bg-cover bg-center ${
          a
            ? "bg-gradient-to-r from-gray-900 to-gray-800"
            : "bg-[url('https://i.ibb.co/gML0q5Mt/abstract-white-background-geometric-texture.jpg')]"
        }`,
        children: [
          y.jsxs("div", {
            "data-aos": "fade-up",
            className:
              "w-11/12 lg:w-8/12 mx-auto pt-20 pb-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-52",
            children: [
              y.jsxs("div", {
                children: [
                  y.jsx("h4", {
                    className: `text-2xl md:text-4xl font-bold text-orange-500 specific-text ${
                      a ? "text-gray-400" : ""
                    }`,
                    children: "HobbyHub",
                  }),
                  y.jsx("p", {
                    className: `text-xs md:text-lg mt-4 mb-6 ${
                      a ? "text-gray-400" : "text-gray-600"
                    }`,
                    children:
                      "Always ready to be your friend. Come & Contact with us to share your memorable moments with your best companion.",
                  }),
                  y.jsxs("div", {
                    className: "flex items-center gap-4 mt-4",
                    children: [
                      y.jsx("a", {
                        href: "https://www.facebook.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: `rounded-full p-2 ${
                          a
                            ? "bg-blue-900 text-white"
                            : "bg-blue-500 text-white"
                        }`,
                        children: y.jsx(k_, { size: 20 }),
                      }),
                      y.jsx("a", {
                        href: "https://www.twitter.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: `rounded-full p-2 ${
                          a
                            ? "bg-blue-900 text-white"
                            : "bg-blue-500 text-white"
                        }`,
                        children: y.jsx(M_, { size: 20 }),
                      }),
                      y.jsx("a", {
                        href: "https://www.instagram.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-white bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-500 rounded-full p-2",
                        children: y.jsx(N_, { size: 20 }),
                      }),
                      y.jsx("a", {
                        href: "https://www.linkedin.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: `rounded-full p-2 ${
                          a
                            ? "bg-blue-900 text-white"
                            : "bg-blue-500 text-white"
                        }`,
                        children: y.jsx(D_, { size: 20 }),
                      }),
                    ],
                  }),
                  y.jsx("h3", {
                    className: `text-lg md:text-3xl font-semibold mt-8 mb-4 ${
                      a ? "text-gray-400" : "text-gray-600"
                    }`,
                    children: "Get in Touch",
                  }),
                  y.jsxs("div", {
                    className: `space-y-4 ${
                      a ? "text-gray-400" : "text-gray-600"
                    }`,
                    children: [
                      y.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          y.jsx(G_, {
                            className: `text-sm md:text-lg lg:text-2xl ${
                              a ? "text-gray-400" : "text-gray-600"
                            }`,
                          }),
                          y.jsx("span", { children: "+880 1234-567890" }),
                        ],
                      }),
                      y.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          y.jsx(V_, {
                            className: `text-sm md:text-lg lg:text-2xl ${
                              a ? "text-gray-400" : "text-gray-600"
                            }`,
                          }),
                          y.jsx("span", { children: "example@gmail.com" }),
                        ],
                      }),
                      y.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          y.jsx(q_, {
                            className: `text-sm md:text-lg lg:text-2xl ${
                              a ? "text-gray-400" : "text-gray-600"
                            }`,
                          }),
                          y.jsx("span", { children: "Dhaka, Bangladesh" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              y.jsxs("div", {
                children: [
                  y.jsx("h3", {
                    className: `text-lg md:text-3xl font-semibold mt-0 ${
                      a ? "text-gray-400" : "text-gray-600"
                    }`,
                    children: "Connect with Us",
                  }),
                  y.jsxs("div", {
                    className: "flex flex-col space-y-4 mt-6",
                    children: [
                      y.jsx("input", {
                        className:
                          "bg-white dark:bg-gray-900 border text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 h-12 px-4 rounded-md focus:outline-none",
                        type: "text",
                        placeholder: "Name",
                      }),
                      y.jsx("input", {
                        className:
                          "bg-white dark:bg-gray-900 border text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600 h-12 px-4 rounded-md focus:outline-none",
                        type: "email",
                        placeholder: "Email",
                      }),
                      y.jsx("textarea", {
                        rows: "5",
                        className:
                          "w-full p-4 rounded-md text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:outline-none",
                        placeholder: "Write your message...",
                      }),
                      y.jsx("button", {
                        className:
                          "text-orange-500 border-2 border-orange-500 py-2 rounded-full hover:bg-orange-500 hover:text-white transition duration-300",
                        children: "Send Message",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          y.jsx("div", {
            className: `bg-cover bg-center ${
              a
                ? "bg-gray-800"
                : "bg-[url('https://i.ibb.co/rKLCQVYV/lock.jpg')]"
            }`,
            children: y.jsx("h5", {
              className:
                "text-xs md:text-lg text-white dark:text-gray-500 text-center py-5",
              children: "© HobbyHub — All Rights Reserved",
            }),
          }),
        ],
      })
    );
  },
  X_ = () => {};
var B0 = {};
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
 */ const ov = function (a) {
    const t = [];
    let i = 0;
    for (let l = 0; l < a.length; l++) {
      let s = a.charCodeAt(l);
      s < 128
        ? (t[i++] = s)
        : s < 2048
        ? ((t[i++] = (s >> 6) | 192), (t[i++] = (s & 63) | 128))
        : (s & 64512) === 55296 &&
          l + 1 < a.length &&
          (a.charCodeAt(l + 1) & 64512) === 56320
        ? ((s = 65536 + ((s & 1023) << 10) + (a.charCodeAt(++l) & 1023)),
          (t[i++] = (s >> 18) | 240),
          (t[i++] = ((s >> 12) & 63) | 128),
          (t[i++] = ((s >> 6) & 63) | 128),
          (t[i++] = (s & 63) | 128))
        : ((t[i++] = (s >> 12) | 224),
          (t[i++] = ((s >> 6) & 63) | 128),
          (t[i++] = (s & 63) | 128));
    }
    return t;
  },
  K_ = function (a) {
    const t = [];
    let i = 0,
      l = 0;
    for (; i < a.length; ) {
      const s = a[i++];
      if (s < 128) t[l++] = String.fromCharCode(s);
      else if (s > 191 && s < 224) {
        const u = a[i++];
        t[l++] = String.fromCharCode(((s & 31) << 6) | (u & 63));
      } else if (s > 239 && s < 365) {
        const u = a[i++],
          f = a[i++],
          m = a[i++],
          h =
            (((s & 7) << 18) | ((u & 63) << 12) | ((f & 63) << 6) | (m & 63)) -
            65536;
        (t[l++] = String.fromCharCode(55296 + (h >> 10))),
          (t[l++] = String.fromCharCode(56320 + (h & 1023)));
      } else {
        const u = a[i++],
          f = a[i++];
        t[l++] = String.fromCharCode(
          ((s & 15) << 12) | ((u & 63) << 6) | (f & 63)
        );
      }
    }
    return t.join("");
  },
  lv = {
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
      const i = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        l = [];
      for (let s = 0; s < a.length; s += 3) {
        const u = a[s],
          f = s + 1 < a.length,
          m = f ? a[s + 1] : 0,
          h = s + 2 < a.length,
          p = h ? a[s + 2] : 0,
          b = u >> 2,
          x = ((u & 3) << 4) | (m >> 4);
        let w = ((m & 15) << 2) | (p >> 6),
          T = p & 63;
        h || ((T = 64), f || (w = 64)), l.push(i[b], i[x], i[w], i[T]);
      }
      return l.join("");
    },
    encodeString(a, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(a)
        : this.encodeByteArray(ov(a), t);
    },
    decodeString(a, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(a)
        : K_(this.decodeStringToByteArray(a, t));
    },
    decodeStringToByteArray(a, t) {
      this.init_();
      const i = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        l = [];
      for (let s = 0; s < a.length; ) {
        const u = i[a.charAt(s++)],
          m = s < a.length ? i[a.charAt(s)] : 0;
        ++s;
        const p = s < a.length ? i[a.charAt(s)] : 64;
        ++s;
        const x = s < a.length ? i[a.charAt(s)] : 64;
        if ((++s, u == null || m == null || p == null || x == null))
          throw new F_();
        const w = (u << 2) | (m >> 4);
        if ((l.push(w), p !== 64)) {
          const T = ((m << 4) & 240) | (p >> 2);
          if ((l.push(T), x !== 64)) {
            const A = ((p << 6) & 192) | x;
            l.push(A);
          }
        }
      }
      return l;
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
class F_ extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const Q_ = function (a) {
    const t = ov(a);
    return lv.encodeByteArray(t, !0);
  },
  sv = function (a) {
    return Q_(a).replace(/\./g, "");
  },
  cv = function (a) {
    try {
      return lv.decodeString(a, !0);
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
 */ function Z_() {
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
 */ const J_ = () => Z_().__FIREBASE_DEFAULTS__,
  W_ = () => {
    if (typeof process > "u" || typeof B0 > "u") return;
    const a = B0.__FIREBASE_DEFAULTS__;
    if (a) return JSON.parse(a);
  },
  eE = () => {
    if (typeof document > "u") return;
    let a;
    try {
      a = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = a && cv(a[1]);
    return t && JSON.parse(t);
  },
  Jf = () => {
    try {
      return X_() || J_() || W_() || eE();
    } catch (a) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);
      return;
    }
  },
  tE = (a) => {
    var t, i;
    return (i =
      (t = Jf()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || i === void 0
      ? void 0
      : i[a];
  },
  uv = () => {
    var a;
    return (a = Jf()) === null || a === void 0 ? void 0 : a.config;
  },
  dv = (a) => {
    var t;
    return (t = Jf()) === null || t === void 0 ? void 0 : t[`_${a}`];
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
 */ class nE {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, i) => {
        (this.resolve = t), (this.reject = i);
      }));
  }
  wrapCallback(t) {
    return (i, l) => {
      i ? this.reject(i) : this.resolve(l),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(i) : t(i, l));
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
 */ function Wf(a) {
  return a.endsWith(".cloudworkstations.dev");
}
async function aE(a) {
  return (await fetch(a, { credentials: "include" })).ok;
}
const fl = {};
function rE() {
  const a = { prod: [], emulator: [] };
  for (const t of Object.keys(fl)) fl[t] ? a.emulator.push(t) : a.prod.push(t);
  return a;
}
function iE(a) {
  let t = document.getElementById(a),
    i = !1;
  return (
    t ||
      ((t = document.createElement("div")), t.setAttribute("id", a), (i = !0)),
    { created: i, element: t }
  );
}
let H0 = !1;
function fv(a, t) {
  if (
    typeof window > "u" ||
    typeof document > "u" ||
    !Wf(window.location.host) ||
    fl[a] === t ||
    fl[a] ||
    H0
  )
    return;
  fl[a] = t;
  function i(w) {
    return `__firebase__banner__${w}`;
  }
  const l = "__firebase__banner",
    u = rE().prod.length > 0;
  function f() {
    const w = document.getElementById(l);
    w && w.remove();
  }
  function m(w) {
    (w.style.display = "flex"),
      (w.style.background = "#7faaf0"),
      (w.style.position = "fixed"),
      (w.style.bottom = "5px"),
      (w.style.left = "5px"),
      (w.style.padding = ".5em"),
      (w.style.borderRadius = "5px"),
      (w.style.alignItems = "center");
  }
  function h(w, T) {
    w.setAttribute("width", "24"),
      w.setAttribute("id", T),
      w.setAttribute("height", "24"),
      w.setAttribute("viewBox", "0 0 24 24"),
      w.setAttribute("fill", "none"),
      (w.style.marginLeft = "-6px");
  }
  function p() {
    const w = document.createElement("span");
    return (
      (w.style.cursor = "pointer"),
      (w.style.marginLeft = "16px"),
      (w.style.fontSize = "24px"),
      (w.innerHTML = " &times;"),
      (w.onclick = () => {
        (H0 = !0), f();
      }),
      w
    );
  }
  function b(w, T) {
    w.setAttribute("id", T),
      (w.innerText = "Learn more"),
      (w.href =
        "https://firebase.google.com/docs/studio/preview-apps#preview-backend"),
      w.setAttribute("target", "__blank"),
      (w.style.paddingLeft = "5px"),
      (w.style.textDecoration = "underline");
  }
  function x() {
    const w = iE(l),
      T = i("text"),
      A = document.getElementById(T) || document.createElement("span"),
      P = i("learnmore"),
      H = document.getElementById(P) || document.createElement("a"),
      z = i("preprendIcon"),
      I =
        document.getElementById(z) ||
        document.createElementNS("http://www.w3.org/2000/svg", "svg");
    if (w.created) {
      const V = w.element;
      m(V), b(H, P);
      const Q = p();
      h(I, z), V.append(I, A, H, Q), document.body.appendChild(V);
    }
    u
      ? ((A.innerText = "Preview backend disconnected."),
        (I.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`))
      : ((I.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`),
        (A.innerText = "Preview backend running in this workspace.")),
      A.setAttribute("id", T);
  }
  document.readyState === "loading"
    ? window.addEventListener("DOMContentLoaded", x)
    : x();
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
 */ function Yt() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function oE() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yt())
  );
}
function lE() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function sE() {
  const a =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof a == "object" && a.id !== void 0;
}
function cE() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function uE() {
  const a = Yt();
  return a.indexOf("MSIE ") >= 0 || a.indexOf("Trident/") >= 0;
}
function dE() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function fE() {
  return new Promise((a, t) => {
    try {
      let i = !0;
      const l = "validate-browser-context-for-indexeddb-analytics-module",
        s = self.indexedDB.open(l);
      (s.onsuccess = () => {
        s.result.close(), i || self.indexedDB.deleteDatabase(l), a(!0);
      }),
        (s.onupgradeneeded = () => {
          i = !1;
        }),
        (s.onerror = () => {
          var u;
          t(
            ((u = s.error) === null || u === void 0 ? void 0 : u.message) || ""
          );
        });
    } catch (i) {
      t(i);
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
 */ const hE = "FirebaseError";
class hr extends Error {
  constructor(t, i, l) {
    super(i),
      (this.code = t),
      (this.customData = l),
      (this.name = hE),
      Object.setPrototypeOf(this, hr.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, El.prototype.create);
  }
}
class El {
  constructor(t, i, l) {
    (this.service = t), (this.serviceName = i), (this.errors = l);
  }
  create(t, ...i) {
    const l = i[0] || {},
      s = `${this.service}/${t}`,
      u = this.errors[t],
      f = u ? mE(u, l) : "Error",
      m = `${this.serviceName}: ${f} (${s}).`;
    return new hr(s, m, l);
  }
}
function mE(a, t) {
  return a.replace(pE, (i, l) => {
    const s = t[l];
    return s != null ? String(s) : `<${l}?>`;
  });
}
const pE = /\{\$([^}]+)}/g;
function gE(a) {
  for (const t in a) if (Object.prototype.hasOwnProperty.call(a, t)) return !1;
  return !0;
}
function $i(a, t) {
  if (a === t) return !0;
  const i = Object.keys(a),
    l = Object.keys(t);
  for (const s of i) {
    if (!l.includes(s)) return !1;
    const u = a[s],
      f = t[s];
    if (P0(u) && P0(f)) {
      if (!$i(u, f)) return !1;
    } else if (u !== f) return !1;
  }
  for (const s of l) if (!i.includes(s)) return !1;
  return !0;
}
function P0(a) {
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
 */ function Sl(a) {
  const t = [];
  for (const [i, l] of Object.entries(a))
    Array.isArray(l)
      ? l.forEach((s) => {
          t.push(encodeURIComponent(i) + "=" + encodeURIComponent(s));
        })
      : t.push(encodeURIComponent(i) + "=" + encodeURIComponent(l));
  return t.length ? "&" + t.join("&") : "";
}
function cl(a) {
  const t = {};
  return (
    a
      .replace(/^\?/, "")
      .split("&")
      .forEach((l) => {
        if (l) {
          const [s, u] = l.split("=");
          t[decodeURIComponent(s)] = decodeURIComponent(u);
        }
      }),
    t
  );
}
function ul(a) {
  const t = a.indexOf("?");
  if (!t) return "";
  const i = a.indexOf("#", t);
  return a.substring(t, i > 0 ? i : void 0);
}
function yE(a, t) {
  const i = new vE(a, t);
  return i.subscribe.bind(i);
}
class vE {
  constructor(t, i) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = i),
      this.task
        .then(() => {
          t(this);
        })
        .catch((l) => {
          this.error(l);
        });
  }
  next(t) {
    this.forEachObserver((i) => {
      i.next(t);
    });
  }
  error(t) {
    this.forEachObserver((i) => {
      i.error(t);
    }),
      this.close(t);
  }
  complete() {
    this.forEachObserver((t) => {
      t.complete();
    }),
      this.close();
  }
  subscribe(t, i, l) {
    let s;
    if (t === void 0 && i === void 0 && l === void 0)
      throw new Error("Missing Observer.");
    bE(t, ["next", "error", "complete"])
      ? (s = t)
      : (s = { next: t, error: i, complete: l }),
      s.next === void 0 && (s.next = mf),
      s.error === void 0 && (s.error = mf),
      s.complete === void 0 && (s.complete = mf);
    const u = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? s.error(this.finalError) : s.complete();
          } catch {}
        }),
      this.observers.push(s),
      u
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
      for (let i = 0; i < this.observers.length; i++) this.sendOne(i, t);
  }
  sendOne(t, i) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[t] !== void 0)
        try {
          i(this.observers[t]);
        } catch (l) {
          typeof console < "u" && console.error && console.error(l);
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
function bE(a, t) {
  if (typeof a != "object" || a === null) return !1;
  for (const i of t) if (i in a && typeof a[i] == "function") return !0;
  return !1;
}
function mf() {}
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
 */ function ta(a) {
  return a && a._delegate ? a._delegate : a;
}
class Yi {
  constructor(t, i, l) {
    (this.name = t),
      (this.instanceFactory = i),
      (this.type = l),
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
 */ const Pr = "[DEFAULT]";
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
  constructor(t, i) {
    (this.name = t),
      (this.container = i),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const i = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(i)) {
      const l = new nE();
      if (
        (this.instancesDeferred.set(i, l),
        this.isInitialized(i) || this.shouldAutoInitialize())
      )
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          s && l.resolve(s);
        } catch {}
    }
    return this.instancesDeferred.get(i).promise;
  }
  getImmediate(t) {
    var i;
    const l = this.normalizeInstanceIdentifier(
        t == null ? void 0 : t.identifier
      ),
      s =
        (i = t == null ? void 0 : t.optional) !== null && i !== void 0 ? i : !1;
    if (this.isInitialized(l) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: l });
      } catch (u) {
        if (s) return null;
        throw u;
      }
    else {
      if (s) return null;
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
      if (_E(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Pr });
        } catch {}
      for (const [i, l] of this.instancesDeferred.entries()) {
        const s = this.normalizeInstanceIdentifier(i);
        try {
          const u = this.getOrInitializeService({ instanceIdentifier: s });
          l.resolve(u);
        } catch {}
      }
    }
  }
  clearInstance(t = Pr) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((i) => "INTERNAL" in i).map((i) => i.INTERNAL.delete()),
      ...t.filter((i) => "_delete" in i).map((i) => i._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = Pr) {
    return this.instances.has(t);
  }
  getOptions(t = Pr) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: i = {} } = t,
      l = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(l))
      throw Error(`${this.name}(${l}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const s = this.getOrInitializeService({
      instanceIdentifier: l,
      options: i,
    });
    for (const [u, f] of this.instancesDeferred.entries()) {
      const m = this.normalizeInstanceIdentifier(u);
      l === m && f.resolve(s);
    }
    return s;
  }
  onInit(t, i) {
    var l;
    const s = this.normalizeInstanceIdentifier(i),
      u =
        (l = this.onInitCallbacks.get(s)) !== null && l !== void 0
          ? l
          : new Set();
    u.add(t), this.onInitCallbacks.set(s, u);
    const f = this.instances.get(s);
    return (
      f && t(f, s),
      () => {
        u.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, i) {
    const l = this.onInitCallbacks.get(i);
    if (l)
      for (const s of l)
        try {
          s(t, i);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: i = {} }) {
    let l = this.instances.get(t);
    if (
      !l &&
      this.component &&
      ((l = this.component.instanceFactory(this.container, {
        instanceIdentifier: xE(t),
        options: i,
      })),
      this.instances.set(t, l),
      this.instancesOptions.set(t, i),
      this.invokeOnInitCallbacks(l, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, l);
      } catch {}
    return l || null;
  }
  normalizeInstanceIdentifier(t = Pr) {
    return this.component ? (this.component.multipleInstances ? t : Pr) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function xE(a) {
  return a === Pr ? void 0 : a;
}
function _E(a) {
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
 */ class EE {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const i = this.getProvider(t.name);
    if (i.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      );
    i.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const i = new wE(t, this);
    return this.providers.set(t, i), i;
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
 */ var rt;
(function (a) {
  (a[(a.DEBUG = 0)] = "DEBUG"),
    (a[(a.VERBOSE = 1)] = "VERBOSE"),
    (a[(a.INFO = 2)] = "INFO"),
    (a[(a.WARN = 3)] = "WARN"),
    (a[(a.ERROR = 4)] = "ERROR"),
    (a[(a.SILENT = 5)] = "SILENT");
})(rt || (rt = {}));
const SE = {
    debug: rt.DEBUG,
    verbose: rt.VERBOSE,
    info: rt.INFO,
    warn: rt.WARN,
    error: rt.ERROR,
    silent: rt.SILENT,
  },
  TE = rt.INFO,
  CE = {
    [rt.DEBUG]: "log",
    [rt.VERBOSE]: "log",
    [rt.INFO]: "info",
    [rt.WARN]: "warn",
    [rt.ERROR]: "error",
  },
  AE = (a, t, ...i) => {
    if (t < a.logLevel) return;
    const l = new Date().toISOString(),
      s = CE[t];
    if (s) console[s](`[${l}]  ${a.name}:`, ...i);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      );
  };
class hv {
  constructor(t) {
    (this.name = t),
      (this._logLevel = TE),
      (this._logHandler = AE),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in rt))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? SE[t] : t;
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
    this._userLogHandler && this._userLogHandler(this, rt.DEBUG, ...t),
      this._logHandler(this, rt.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, rt.VERBOSE, ...t),
      this._logHandler(this, rt.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, rt.INFO, ...t),
      this._logHandler(this, rt.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, rt.WARN, ...t),
      this._logHandler(this, rt.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, rt.ERROR, ...t),
      this._logHandler(this, rt.ERROR, ...t);
  }
}
const RE = (a, t) => t.some((i) => a instanceof i);
let V0, q0;
function OE() {
  return (
    V0 ||
    (V0 = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function kE() {
  return (
    q0 ||
    (q0 = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const mv = new WeakMap(),
  Rf = new WeakMap(),
  pv = new WeakMap(),
  pf = new WeakMap(),
  eh = new WeakMap();
function NE(a) {
  const t = new Promise((i, l) => {
    const s = () => {
        a.removeEventListener("success", u), a.removeEventListener("error", f);
      },
      u = () => {
        i(cr(a.result)), s();
      },
      f = () => {
        l(a.error), s();
      };
    a.addEventListener("success", u), a.addEventListener("error", f);
  });
  return (
    t
      .then((i) => {
        i instanceof IDBCursor && mv.set(i, a);
      })
      .catch(() => {}),
    eh.set(t, a),
    t
  );
}
function DE(a) {
  if (Rf.has(a)) return;
  const t = new Promise((i, l) => {
    const s = () => {
        a.removeEventListener("complete", u),
          a.removeEventListener("error", f),
          a.removeEventListener("abort", f);
      },
      u = () => {
        i(), s();
      },
      f = () => {
        l(a.error || new DOMException("AbortError", "AbortError")), s();
      };
    a.addEventListener("complete", u),
      a.addEventListener("error", f),
      a.addEventListener("abort", f);
  });
  Rf.set(a, t);
}
let Of = {
  get(a, t, i) {
    if (a instanceof IDBTransaction) {
      if (t === "done") return Rf.get(a);
      if (t === "objectStoreNames") return a.objectStoreNames || pv.get(a);
      if (t === "store")
        return i.objectStoreNames[1]
          ? void 0
          : i.objectStore(i.objectStoreNames[0]);
    }
    return cr(a[t]);
  },
  set(a, t, i) {
    return (a[t] = i), !0;
  },
  has(a, t) {
    return a instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in a;
  },
};
function ME(a) {
  Of = a(Of);
}
function jE(a) {
  return a === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...i) {
        const l = a.call(gf(this), t, ...i);
        return pv.set(l, t.sort ? t.sort() : [t]), cr(l);
      }
    : kE().includes(a)
    ? function (...t) {
        return a.apply(gf(this), t), cr(mv.get(this));
      }
    : function (...t) {
        return cr(a.apply(gf(this), t));
      };
}
function LE(a) {
  return typeof a == "function"
    ? jE(a)
    : (a instanceof IDBTransaction && DE(a),
      RE(a, OE()) ? new Proxy(a, Of) : a);
}
function cr(a) {
  if (a instanceof IDBRequest) return NE(a);
  if (pf.has(a)) return pf.get(a);
  const t = LE(a);
  return t !== a && (pf.set(a, t), eh.set(t, a)), t;
}
const gf = (a) => eh.get(a);
function zE(a, t, { blocked: i, upgrade: l, blocking: s, terminated: u } = {}) {
  const f = indexedDB.open(a, t),
    m = cr(f);
  return (
    l &&
      f.addEventListener("upgradeneeded", (h) => {
        l(cr(f.result), h.oldVersion, h.newVersion, cr(f.transaction), h);
      }),
    i && f.addEventListener("blocked", (h) => i(h.oldVersion, h.newVersion, h)),
    m
      .then((h) => {
        u && h.addEventListener("close", () => u()),
          s &&
            h.addEventListener("versionchange", (p) =>
              s(p.oldVersion, p.newVersion, p)
            );
      })
      .catch(() => {}),
    m
  );
}
const UE = ["get", "getKey", "getAll", "getAllKeys", "count"],
  IE = ["put", "add", "delete", "clear"],
  yf = new Map();
function G0(a, t) {
  if (!(a instanceof IDBDatabase && !(t in a) && typeof t == "string")) return;
  if (yf.get(t)) return yf.get(t);
  const i = t.replace(/FromIndex$/, ""),
    l = t !== i,
    s = IE.includes(i);
  if (
    !(i in (l ? IDBIndex : IDBObjectStore).prototype) ||
    !(s || UE.includes(i))
  )
    return;
  const u = async function (f, ...m) {
    const h = this.transaction(f, s ? "readwrite" : "readonly");
    let p = h.store;
    return (
      l && (p = p.index(m.shift())),
      (await Promise.all([p[i](...m), s && h.done]))[0]
    );
  };
  return yf.set(t, u), u;
}
ME((a) => ({
  ...a,
  get: (t, i, l) => G0(t, i) || a.get(t, i, l),
  has: (t, i) => !!G0(t, i) || a.has(t, i),
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
 */ class BE {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((i) => {
        if (HE(i)) {
          const l = i.getImmediate();
          return `${l.library}/${l.version}`;
        } else return null;
      })
      .filter((i) => i)
      .join(" ");
  }
}
function HE(a) {
  const t = a.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const kf = "@firebase/app",
  $0 = "0.12.3";
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
 */ const Sa = new hv("@firebase/app"),
  PE = "@firebase/app-compat",
  VE = "@firebase/analytics-compat",
  qE = "@firebase/analytics",
  GE = "@firebase/app-check-compat",
  $E = "@firebase/app-check",
  YE = "@firebase/auth",
  XE = "@firebase/auth-compat",
  KE = "@firebase/database",
  FE = "@firebase/data-connect",
  QE = "@firebase/database-compat",
  ZE = "@firebase/functions",
  JE = "@firebase/functions-compat",
  WE = "@firebase/installations",
  eS = "@firebase/installations-compat",
  tS = "@firebase/messaging",
  nS = "@firebase/messaging-compat",
  aS = "@firebase/performance",
  rS = "@firebase/performance-compat",
  iS = "@firebase/remote-config",
  oS = "@firebase/remote-config-compat",
  lS = "@firebase/storage",
  sS = "@firebase/storage-compat",
  cS = "@firebase/firestore",
  uS = "@firebase/vertexai",
  dS = "@firebase/firestore-compat",
  fS = "firebase",
  hS = "11.7.3";
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
 */ const Nf = "[DEFAULT]",
  mS = {
    [kf]: "fire-core",
    [PE]: "fire-core-compat",
    [qE]: "fire-analytics",
    [VE]: "fire-analytics-compat",
    [$E]: "fire-app-check",
    [GE]: "fire-app-check-compat",
    [YE]: "fire-auth",
    [XE]: "fire-auth-compat",
    [KE]: "fire-rtdb",
    [FE]: "fire-data-connect",
    [QE]: "fire-rtdb-compat",
    [ZE]: "fire-fn",
    [JE]: "fire-fn-compat",
    [WE]: "fire-iid",
    [eS]: "fire-iid-compat",
    [tS]: "fire-fcm",
    [nS]: "fire-fcm-compat",
    [aS]: "fire-perf",
    [rS]: "fire-perf-compat",
    [iS]: "fire-rc",
    [oS]: "fire-rc-compat",
    [lS]: "fire-gcs",
    [sS]: "fire-gcs-compat",
    [cS]: "fire-fst",
    [dS]: "fire-fst-compat",
    [uS]: "fire-vertex",
    "fire-js": "fire-js",
    [fS]: "fire-js-all",
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
 */ const vc = new Map(),
  pS = new Map(),
  Df = new Map();
function Y0(a, t) {
  try {
    a.container.addComponent(t);
  } catch (i) {
    Sa.debug(
      `Component ${t.name} failed to register with FirebaseApp ${a.name}`,
      i
    );
  }
}
function gl(a) {
  const t = a.name;
  if (Df.has(t))
    return (
      Sa.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  Df.set(t, a);
  for (const i of vc.values()) Y0(i, a);
  for (const i of pS.values()) Y0(i, a);
  return !0;
}
function gv(a, t) {
  const i = a.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return i && i.triggerHeartbeat(), a.container.getProvider(t);
}
function On(a) {
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
 */ const gS = {
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
  ur = new El("app", "Firebase", gS);
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
 */ class yS {
  constructor(t, i, l) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, i)),
      (this._name = i.name),
      (this._automaticDataCollectionEnabled = i.automaticDataCollectionEnabled),
      (this._container = l),
      this.container.addComponent(new Yi("app", () => this, "PUBLIC"));
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
    if (this.isDeleted) throw ur.create("app-deleted", { appName: this._name });
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
 */ const Tl = hS;
function yv(a, t = {}) {
  let i = a;
  typeof t != "object" && (t = { name: t });
  const l = Object.assign({ name: Nf, automaticDataCollectionEnabled: !1 }, t),
    s = l.name;
  if (typeof s != "string" || !s)
    throw ur.create("bad-app-name", { appName: String(s) });
  if ((i || (i = uv()), !i)) throw ur.create("no-options");
  const u = vc.get(s);
  if (u) {
    if ($i(i, u.options) && $i(l, u.config)) return u;
    throw ur.create("duplicate-app", { appName: s });
  }
  const f = new EE(s);
  for (const h of Df.values()) f.addComponent(h);
  const m = new yS(i, l, f);
  return vc.set(s, m), m;
}
function vS(a = Nf) {
  const t = vc.get(a);
  if (!t && a === Nf && uv()) return yv();
  if (!t) throw ur.create("no-app", { appName: a });
  return t;
}
function Bi(a, t, i) {
  var l;
  let s = (l = mS[a]) !== null && l !== void 0 ? l : a;
  i && (s += `-${i}`);
  const u = s.match(/\s|\//),
    f = t.match(/\s|\//);
  if (u || f) {
    const m = [`Unable to register library "${s}" with version "${t}":`];
    u &&
      m.push(
        `library name "${s}" contains illegal characters (whitespace or "/")`
      ),
      u && f && m.push("and"),
      f &&
        m.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      Sa.warn(m.join(" "));
    return;
  }
  gl(new Yi(`${s}-version`, () => ({ library: s, version: t }), "VERSION"));
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
 */ const bS = "firebase-heartbeat-database",
  wS = 1,
  yl = "firebase-heartbeat-store";
let vf = null;
function vv() {
  return (
    vf ||
      (vf = zE(bS, wS, {
        upgrade: (a, t) => {
          switch (t) {
            case 0:
              try {
                a.createObjectStore(yl);
              } catch (i) {
                console.warn(i);
              }
          }
        },
      }).catch((a) => {
        throw ur.create("idb-open", { originalErrorMessage: a.message });
      })),
    vf
  );
}
async function xS(a) {
  try {
    const i = (await vv()).transaction(yl),
      l = await i.objectStore(yl).get(bv(a));
    return await i.done, l;
  } catch (t) {
    if (t instanceof hr) Sa.warn(t.message);
    else {
      const i = ur.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      Sa.warn(i.message);
    }
  }
}
async function X0(a, t) {
  try {
    const l = (await vv()).transaction(yl, "readwrite");
    await l.objectStore(yl).put(t, bv(a)), await l.done;
  } catch (i) {
    if (i instanceof hr) Sa.warn(i.message);
    else {
      const l = ur.create("idb-set", {
        originalErrorMessage: i == null ? void 0 : i.message,
      });
      Sa.warn(l.message);
    }
  }
}
function bv(a) {
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
 */ const _S = 1024,
  ES = 30;
class SS {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const i = this.container.getProvider("app").getImmediate();
    (this._storage = new CS(i)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((l) => ((this._heartbeatsCache = l), l)));
  }
  async triggerHeartbeat() {
    var t, i;
    try {
      const s = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        u = K0();
      if (
        (((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null &&
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          ((i = this._heartbeatsCache) === null || i === void 0
            ? void 0
            : i.heartbeats) == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === u ||
        this._heartbeatsCache.heartbeats.some((f) => f.date === u)
      )
        return;
      if (
        (this._heartbeatsCache.heartbeats.push({ date: u, agent: s }),
        this._heartbeatsCache.heartbeats.length > ES)
      ) {
        const f = AS(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(f, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (l) {
      Sa.warn(l);
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
      const i = K0(),
        { heartbeatsToSend: l, unsentEntries: s } = TS(
          this._heartbeatsCache.heartbeats
        ),
        u = sv(JSON.stringify({ version: 2, heartbeats: l }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = i),
        s.length > 0
          ? ((this._heartbeatsCache.heartbeats = s),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        u
      );
    } catch (i) {
      return Sa.warn(i), "";
    }
  }
}
function K0() {
  return new Date().toISOString().substring(0, 10);
}
function TS(a, t = _S) {
  const i = [];
  let l = a.slice();
  for (const s of a) {
    const u = i.find((f) => f.agent === s.agent);
    if (u) {
      if ((u.dates.push(s.date), F0(i) > t)) {
        u.dates.pop();
        break;
      }
    } else if ((i.push({ agent: s.agent, dates: [s.date] }), F0(i) > t)) {
      i.pop();
      break;
    }
    l = l.slice(1);
  }
  return { heartbeatsToSend: i, unsentEntries: l };
}
class CS {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return dE()
      ? fE()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const i = await xS(this.app);
      return i != null && i.heartbeats ? i : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(t) {
    var i;
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return X0(this.app, {
        lastSentHeartbeatDate:
          (i = t.lastSentHeartbeatDate) !== null && i !== void 0
            ? i
            : s.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var i;
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return X0(this.app, {
        lastSentHeartbeatDate:
          (i = t.lastSentHeartbeatDate) !== null && i !== void 0
            ? i
            : s.lastSentHeartbeatDate,
        heartbeats: [...s.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function F0(a) {
  return sv(JSON.stringify({ version: 2, heartbeats: a })).length;
}
function AS(a) {
  if (a.length === 0) return -1;
  let t = 0,
    i = a[0].date;
  for (let l = 1; l < a.length; l++)
    a[l].date < i && ((i = a[l].date), (t = l));
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
 */ function RS(a) {
  gl(new Yi("platform-logger", (t) => new BE(t), "PRIVATE")),
    gl(new Yi("heartbeat", (t) => new SS(t), "PRIVATE")),
    Bi(kf, $0, a),
    Bi(kf, $0, "esm2017"),
    Bi("fire-js", "");
}
RS("");
function th(a, t) {
  var i = {};
  for (var l in a)
    Object.prototype.hasOwnProperty.call(a, l) &&
      t.indexOf(l) < 0 &&
      (i[l] = a[l]);
  if (a != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, l = Object.getOwnPropertySymbols(a); s < l.length; s++)
      t.indexOf(l[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(a, l[s]) &&
        (i[l[s]] = a[l[s]]);
  return i;
}
function wv() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const OS = wv,
  xv = new El("auth", "Firebase", wv());
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
 */ const bc = new hv("@firebase/auth");
function kS(a, ...t) {
  bc.logLevel <= rt.WARN && bc.warn(`Auth (${Tl}): ${a}`, ...t);
}
function lc(a, ...t) {
  bc.logLevel <= rt.ERROR && bc.error(`Auth (${Tl}): ${a}`, ...t);
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
 */ function Nn(a, ...t) {
  throw ah(a, ...t);
}
function Hn(a, ...t) {
  return ah(a, ...t);
}
function nh(a, t, i) {
  const l = Object.assign(Object.assign({}, OS()), { [t]: i });
  return new El("auth", "Firebase", l).create(t, { appName: a.name });
}
function _a(a) {
  return nh(
    a,
    "operation-not-supported-in-this-environment",
    "Operations that alter the current user are not supported in conjunction with FirebaseServerApp"
  );
}
function NS(a, t, i) {
  const l = i;
  if (!(t instanceof l))
    throw (
      (l.name !== t.constructor.name && Nn(a, "argument-error"),
      nh(
        a,
        "argument-error",
        `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
      ))
    );
}
function ah(a, ...t) {
  if (typeof a != "string") {
    const i = t[0],
      l = [...t.slice(1)];
    return l[0] && (l[0].appName = a.name), a._errorFactory.create(i, ...l);
  }
  return xv.create(a, ...t);
}
function Te(a, t, ...i) {
  if (!a) throw ah(t, ...i);
}
function wa(a) {
  const t = "INTERNAL ASSERTION FAILED: " + a;
  throw (lc(t), new Error(t));
}
function Ta(a, t) {
  a || wa(t);
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
function DS() {
  return Q0() === "http:" || Q0() === "https:";
}
function Q0() {
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
 */ function MS() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (DS() || sE() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function jS() {
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
 */ class Cl {
  constructor(t, i) {
    (this.shortDelay = t),
      (this.longDelay = i),
      Ta(i > t, "Short delay should be less than long delay!"),
      (this.isMobile = oE() || cE());
  }
  get() {
    return MS()
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
 */ function rh(a, t) {
  Ta(a.emulator, "Emulator should always be set here");
  const { url: i } = a.emulator;
  return t ? `${i}${t.startsWith("/") ? t.slice(1) : t}` : i;
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
 */ class _v {
  static initialize(t, i, l) {
    (this.fetchImpl = t),
      i && (this.headersImpl = i),
      l && (this.responseImpl = l);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < "u") return fetch;
    wa(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u") return Headers;
    wa(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u") return Response;
    wa(
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
 */ const LS = {
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
 */ const zS = [
    "/v1/accounts:signInWithCustomToken",
    "/v1/accounts:signInWithEmailLink",
    "/v1/accounts:signInWithIdp",
    "/v1/accounts:signInWithPassword",
    "/v1/accounts:signInWithPhoneNumber",
    "/v1/token",
  ],
  US = new Cl(3e4, 6e4);
function mr(a, t) {
  return a.tenantId && !t.tenantId
    ? Object.assign(Object.assign({}, t), { tenantId: a.tenantId })
    : t;
}
async function Aa(a, t, i, l, s = {}) {
  return Ev(a, s, async () => {
    let u = {},
      f = {};
    l && (t === "GET" ? (f = l) : (u = { body: JSON.stringify(l) }));
    const m = Sl(Object.assign({ key: a.config.apiKey }, f)).slice(1),
      h = await a._getAdditionalHeaders();
    (h["Content-Type"] = "application/json"),
      a.languageCode && (h["X-Firebase-Locale"] = a.languageCode);
    const p = Object.assign({ method: t, headers: h }, u);
    return (
      lE() || (p.referrerPolicy = "no-referrer"),
      a.emulatorConfig &&
        Wf(a.emulatorConfig.host) &&
        (p.credentials = "include"),
      _v.fetch()(await Sv(a, a.config.apiHost, i, m), p)
    );
  });
}
async function Ev(a, t, i) {
  a._canInitEmulator = !1;
  const l = Object.assign(Object.assign({}, LS), t);
  try {
    const s = new BS(a),
      u = await Promise.race([i(), s.promise]);
    s.clearNetworkTimeout();
    const f = await u.json();
    if ("needConfirmation" in f)
      throw tc(a, "account-exists-with-different-credential", f);
    if (u.ok && !("errorMessage" in f)) return f;
    {
      const m = u.ok ? f.errorMessage : f.error.message,
        [h, p] = m.split(" : ");
      if (h === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw tc(a, "credential-already-in-use", f);
      if (h === "EMAIL_EXISTS") throw tc(a, "email-already-in-use", f);
      if (h === "USER_DISABLED") throw tc(a, "user-disabled", f);
      const b = l[h] || h.toLowerCase().replace(/[_\s]+/g, "-");
      if (p) throw nh(a, b, p);
      Nn(a, b);
    }
  } catch (s) {
    if (s instanceof hr) throw s;
    Nn(a, "network-request-failed", { message: String(s) });
  }
}
async function Al(a, t, i, l, s = {}) {
  const u = await Aa(a, t, i, l, s);
  return (
    "mfaPendingCredential" in u &&
      Nn(a, "multi-factor-auth-required", { _serverResponse: u }),
    u
  );
}
async function Sv(a, t, i, l) {
  const s = `${t}${i}?${l}`,
    u = a,
    f = u.config.emulator ? rh(a.config, s) : `${a.config.apiScheme}://${s}`;
  return zS.includes(i) &&
    (await u._persistenceManagerAvailable, u._getPersistenceType() === "COOKIE")
    ? u._getPersistence()._getFinalTarget(f).toString()
    : f;
}
function IS(a) {
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
class BS {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(t) {
    (this.auth = t),
      (this.timer = null),
      (this.promise = new Promise((i, l) => {
        this.timer = setTimeout(
          () => l(Hn(this.auth, "network-request-failed")),
          US.get()
        );
      }));
  }
}
function tc(a, t, i) {
  const l = { appName: a.name };
  i.email && (l.email = i.email),
    i.phoneNumber && (l.phoneNumber = i.phoneNumber);
  const s = Hn(a, t, l);
  return (s.customData._tokenResponse = i), s;
}
function Z0(a) {
  return a !== void 0 && a.enterprise !== void 0;
}
class HS {
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
    for (const i of this.recaptchaEnforcementState)
      if (i.provider && i.provider === t) return IS(i.enforcementState);
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
async function PS(a, t) {
  return Aa(a, "GET", "/v2/recaptchaConfig", mr(a, t));
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
 */ async function VS(a, t) {
  return Aa(a, "POST", "/v1/accounts:delete", t);
}
async function wc(a, t) {
  return Aa(a, "POST", "/v1/accounts:lookup", t);
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
 */ function hl(a) {
  if (a)
    try {
      const t = new Date(Number(a));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function qS(a, t = !1) {
  const i = ta(a),
    l = await i.getIdToken(t),
    s = ih(l);
  Te(s && s.exp && s.auth_time && s.iat, i.auth, "internal-error");
  const u = typeof s.firebase == "object" ? s.firebase : void 0,
    f = u == null ? void 0 : u.sign_in_provider;
  return {
    claims: s,
    token: l,
    authTime: hl(bf(s.auth_time)),
    issuedAtTime: hl(bf(s.iat)),
    expirationTime: hl(bf(s.exp)),
    signInProvider: f || null,
    signInSecondFactor: (u == null ? void 0 : u.sign_in_second_factor) || null,
  };
}
function bf(a) {
  return Number(a) * 1e3;
}
function ih(a) {
  const [t, i, l] = a.split(".");
  if (t === void 0 || i === void 0 || l === void 0)
    return lc("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const s = cv(i);
    return s
      ? JSON.parse(s)
      : (lc("Failed to decode base64 JWT payload"), null);
  } catch (s) {
    return (
      lc(
        "Caught error parsing JWT payload as JSON",
        s == null ? void 0 : s.toString()
      ),
      null
    );
  }
}
function J0(a) {
  const t = ih(a);
  return (
    Te(t, "internal-error"),
    Te(typeof t.exp < "u", "internal-error"),
    Te(typeof t.iat < "u", "internal-error"),
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
 */ async function Xi(a, t, i = !1) {
  if (i) return t;
  try {
    return await t;
  } catch (l) {
    throw (
      (l instanceof hr &&
        GS(l) &&
        a.auth.currentUser === a &&
        (await a.auth.signOut()),
      l)
    );
  }
}
function GS({ code: a }) {
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
 */ class $S {
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
    var i;
    if (t) {
      const l = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), l;
    } else {
      this.errorBackoff = 3e4;
      const s =
        ((i = this.user.stsTokenManager.expirationTime) !== null && i !== void 0
          ? i
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, s);
    }
  }
  schedule(t = !1) {
    if (!this.isRunning) return;
    const i = this.getInterval(t);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, i);
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
 */ class jf {
  constructor(t, i) {
    (this.createdAt = t), (this.lastLoginAt = i), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = hl(this.lastLoginAt)),
      (this.creationTime = hl(this.createdAt));
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
 */ async function xc(a) {
  var t;
  const i = a.auth,
    l = await a.getIdToken(),
    s = await Xi(a, wc(i, { idToken: l }));
  Te(s == null ? void 0 : s.users.length, i, "internal-error");
  const u = s.users[0];
  a._notifyReloadListener(u);
  const f =
      !((t = u.providerUserInfo) === null || t === void 0) && t.length
        ? Tv(u.providerUserInfo)
        : [],
    m = XS(a.providerData, f),
    h = a.isAnonymous,
    p = !(a.email && u.passwordHash) && !(m != null && m.length),
    b = h ? p : !1,
    x = {
      uid: u.localId,
      displayName: u.displayName || null,
      photoURL: u.photoUrl || null,
      email: u.email || null,
      emailVerified: u.emailVerified || !1,
      phoneNumber: u.phoneNumber || null,
      tenantId: u.tenantId || null,
      providerData: m,
      metadata: new jf(u.createdAt, u.lastLoginAt),
      isAnonymous: b,
    };
  Object.assign(a, x);
}
async function YS(a) {
  const t = ta(a);
  await xc(t),
    await t.auth._persistUserIfCurrent(t),
    t.auth._notifyListenersIfCurrent(t);
}
function XS(a, t) {
  return [
    ...a.filter((l) => !t.some((s) => s.providerId === l.providerId)),
    ...t,
  ];
}
function Tv(a) {
  return a.map((t) => {
    var { providerId: i } = t,
      l = th(t, ["providerId"]);
    return {
      providerId: i,
      uid: l.rawId || "",
      displayName: l.displayName || null,
      email: l.email || null,
      phoneNumber: l.phoneNumber || null,
      photoURL: l.photoUrl || null,
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
 */ async function KS(a, t) {
  const i = await Ev(a, {}, async () => {
    const l = Sl({ grant_type: "refresh_token", refresh_token: t }).slice(1),
      { tokenApiHost: s, apiKey: u } = a.config,
      f = await Sv(a, s, "/v1/token", `key=${u}`),
      m = await a._getAdditionalHeaders();
    return (
      (m["Content-Type"] = "application/x-www-form-urlencoded"),
      _v.fetch()(f, { method: "POST", headers: m, body: l })
    );
  });
  return {
    accessToken: i.access_token,
    expiresIn: i.expires_in,
    refreshToken: i.refresh_token,
  };
}
async function FS(a, t) {
  return Aa(a, "POST", "/v2/accounts:revokeToken", mr(a, t));
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
 */ class Hi {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(t) {
    Te(t.idToken, "internal-error"),
      Te(typeof t.idToken < "u", "internal-error"),
      Te(typeof t.refreshToken < "u", "internal-error");
    const i =
      "expiresIn" in t && typeof t.expiresIn < "u"
        ? Number(t.expiresIn)
        : J0(t.idToken);
    this.updateTokensAndExpiration(t.idToken, t.refreshToken, i);
  }
  updateFromIdToken(t) {
    Te(t.length !== 0, "internal-error");
    const i = J0(t);
    this.updateTokensAndExpiration(t, null, i);
  }
  async getToken(t, i = !1) {
    return !i && this.accessToken && !this.isExpired
      ? this.accessToken
      : (Te(this.refreshToken, t, "user-token-expired"),
        this.refreshToken
          ? (await this.refresh(t, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(t, i) {
    const { accessToken: l, refreshToken: s, expiresIn: u } = await KS(t, i);
    this.updateTokensAndExpiration(l, s, Number(u));
  }
  updateTokensAndExpiration(t, i, l) {
    (this.refreshToken = i || null),
      (this.accessToken = t || null),
      (this.expirationTime = Date.now() + l * 1e3);
  }
  static fromJSON(t, i) {
    const { refreshToken: l, accessToken: s, expirationTime: u } = i,
      f = new Hi();
    return (
      l &&
        (Te(typeof l == "string", "internal-error", { appName: t }),
        (f.refreshToken = l)),
      s &&
        (Te(typeof s == "string", "internal-error", { appName: t }),
        (f.accessToken = s)),
      u &&
        (Te(typeof u == "number", "internal-error", { appName: t }),
        (f.expirationTime = u)),
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
    return Object.assign(new Hi(), this.toJSON());
  }
  _performRefresh() {
    return wa("not implemented");
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
 */ function tr(a, t) {
  Te(typeof a == "string" || typeof a > "u", "internal-error", { appName: t });
}
class Bn {
  constructor(t) {
    var { uid: i, auth: l, stsTokenManager: s } = t,
      u = th(t, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new $S(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = i),
      (this.auth = l),
      (this.stsTokenManager = s),
      (this.accessToken = s.accessToken),
      (this.displayName = u.displayName || null),
      (this.email = u.email || null),
      (this.emailVerified = u.emailVerified || !1),
      (this.phoneNumber = u.phoneNumber || null),
      (this.photoURL = u.photoURL || null),
      (this.isAnonymous = u.isAnonymous || !1),
      (this.tenantId = u.tenantId || null),
      (this.providerData = u.providerData ? [...u.providerData] : []),
      (this.metadata = new jf(u.createdAt || void 0, u.lastLoginAt || void 0));
  }
  async getIdToken(t) {
    const i = await Xi(this, this.stsTokenManager.getToken(this.auth, t));
    return (
      Te(i, this.auth, "internal-error"),
      this.accessToken !== i &&
        ((this.accessToken = i),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      i
    );
  }
  getIdTokenResult(t) {
    return qS(this, t);
  }
  reload() {
    return YS(this);
  }
  _assign(t) {
    this !== t &&
      (Te(this.uid === t.uid, this.auth, "internal-error"),
      (this.displayName = t.displayName),
      (this.photoURL = t.photoURL),
      (this.email = t.email),
      (this.emailVerified = t.emailVerified),
      (this.phoneNumber = t.phoneNumber),
      (this.isAnonymous = t.isAnonymous),
      (this.tenantId = t.tenantId),
      (this.providerData = t.providerData.map((i) => Object.assign({}, i))),
      this.metadata._copy(t.metadata),
      this.stsTokenManager._assign(t.stsTokenManager));
  }
  _clone(t) {
    const i = new Bn(
      Object.assign(Object.assign({}, this), {
        auth: t,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
    return i.metadata._copy(this.metadata), i;
  }
  _onReload(t) {
    Te(!this.reloadListener, this.auth, "internal-error"),
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
  async _updateTokensIfNecessary(t, i = !1) {
    let l = !1;
    t.idToken &&
      t.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(t), (l = !0)),
      i && (await xc(this)),
      await this.auth._persistUserIfCurrent(this),
      l && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (On(this.auth.app)) return Promise.reject(_a(this.auth));
    const t = await this.getIdToken();
    return (
      await Xi(this, VS(this.auth, { idToken: t })),
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
  static _fromJSON(t, i) {
    var l, s, u, f, m, h, p, b;
    const x = (l = i.displayName) !== null && l !== void 0 ? l : void 0,
      w = (s = i.email) !== null && s !== void 0 ? s : void 0,
      T = (u = i.phoneNumber) !== null && u !== void 0 ? u : void 0,
      A = (f = i.photoURL) !== null && f !== void 0 ? f : void 0,
      P = (m = i.tenantId) !== null && m !== void 0 ? m : void 0,
      H = (h = i._redirectEventId) !== null && h !== void 0 ? h : void 0,
      z = (p = i.createdAt) !== null && p !== void 0 ? p : void 0,
      I = (b = i.lastLoginAt) !== null && b !== void 0 ? b : void 0,
      {
        uid: V,
        emailVerified: Q,
        isAnonymous: F,
        providerData: O,
        stsTokenManager: ne,
      } = i;
    Te(V && ne, t, "internal-error");
    const Z = Hi.fromJSON(this.name, ne);
    Te(typeof V == "string", t, "internal-error"),
      tr(x, t.name),
      tr(w, t.name),
      Te(typeof Q == "boolean", t, "internal-error"),
      Te(typeof F == "boolean", t, "internal-error"),
      tr(T, t.name),
      tr(A, t.name),
      tr(P, t.name),
      tr(H, t.name),
      tr(z, t.name),
      tr(I, t.name);
    const re = new Bn({
      uid: V,
      auth: t,
      email: w,
      emailVerified: Q,
      displayName: x,
      isAnonymous: F,
      photoURL: A,
      phoneNumber: T,
      tenantId: P,
      stsTokenManager: Z,
      createdAt: z,
      lastLoginAt: I,
    });
    return (
      O &&
        Array.isArray(O) &&
        (re.providerData = O.map((Oe) => Object.assign({}, Oe))),
      H && (re._redirectEventId = H),
      re
    );
  }
  static async _fromIdTokenResponse(t, i, l = !1) {
    const s = new Hi();
    s.updateFromServerResponse(i);
    const u = new Bn({
      uid: i.localId,
      auth: t,
      stsTokenManager: s,
      isAnonymous: l,
    });
    return await xc(u), u;
  }
  static async _fromGetAccountInfoResponse(t, i, l) {
    const s = i.users[0];
    Te(s.localId !== void 0, "internal-error");
    const u = s.providerUserInfo !== void 0 ? Tv(s.providerUserInfo) : [],
      f = !(s.email && s.passwordHash) && !(u != null && u.length),
      m = new Hi();
    m.updateFromIdToken(l);
    const h = new Bn({
        uid: s.localId,
        auth: t,
        stsTokenManager: m,
        isAnonymous: f,
      }),
      p = {
        uid: s.localId,
        displayName: s.displayName || null,
        photoURL: s.photoUrl || null,
        email: s.email || null,
        emailVerified: s.emailVerified || !1,
        phoneNumber: s.phoneNumber || null,
        tenantId: s.tenantId || null,
        providerData: u,
        metadata: new jf(s.createdAt, s.lastLoginAt),
        isAnonymous: !(s.email && s.passwordHash) && !(u != null && u.length),
      };
    return Object.assign(h, p), h;
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
 */ const W0 = new Map();
function xa(a) {
  Ta(a instanceof Function, "Expected a class definition");
  let t = W0.get(a);
  return t
    ? (Ta(t instanceof a, "Instance stored in cache mismatched with class"), t)
    : ((t = new a()), W0.set(a, t), t);
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
 */ class Cv {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(t, i) {
    this.storage[t] = i;
  }
  async _get(t) {
    const i = this.storage[t];
    return i === void 0 ? null : i;
  }
  async _remove(t) {
    delete this.storage[t];
  }
  _addListener(t, i) {}
  _removeListener(t, i) {}
}
Cv.type = "NONE";
const ey = Cv;
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
 */ function sc(a, t, i) {
  return `firebase:${a}:${t}:${i}`;
}
class Pi {
  constructor(t, i, l) {
    (this.persistence = t), (this.auth = i), (this.userKey = l);
    const { config: s, name: u } = this.auth;
    (this.fullUserKey = sc(this.userKey, s.apiKey, u)),
      (this.fullPersistenceKey = sc("persistence", s.apiKey, u)),
      (this.boundEventHandler = i._onStorageEvent.bind(i)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(t) {
    return this.persistence._set(this.fullUserKey, t.toJSON());
  }
  async getCurrentUser() {
    const t = await this.persistence._get(this.fullUserKey);
    if (!t) return null;
    if (typeof t == "string") {
      const i = await wc(this.auth, { idToken: t }).catch(() => {});
      return i ? Bn._fromGetAccountInfoResponse(this.auth, i, t) : null;
    }
    return Bn._fromJSON(this.auth, t);
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
    const i = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = t), i))
      return this.setCurrentUser(i);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(t, i, l = "authUser") {
    if (!i.length) return new Pi(xa(ey), t, l);
    const s = (
      await Promise.all(
        i.map(async (p) => {
          if (await p._isAvailable()) return p;
        })
      )
    ).filter((p) => p);
    let u = s[0] || xa(ey);
    const f = sc(l, t.config.apiKey, t.name);
    let m = null;
    for (const p of i)
      try {
        const b = await p._get(f);
        if (b) {
          let x;
          if (typeof b == "string") {
            const w = await wc(t, { idToken: b }).catch(() => {});
            if (!w) break;
            x = await Bn._fromGetAccountInfoResponse(t, w, b);
          } else x = Bn._fromJSON(t, b);
          p !== u && (m = x), (u = p);
          break;
        }
      } catch {}
    const h = s.filter((p) => p._shouldAllowMigration);
    return !u._shouldAllowMigration || !h.length
      ? new Pi(u, t, l)
      : ((u = h[0]),
        m && (await u._set(f, m.toJSON())),
        await Promise.all(
          i.map(async (p) => {
            if (p !== u)
              try {
                await p._remove(f);
              } catch {}
          })
        ),
        new Pi(u, t, l));
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
 */ function ty(a) {
  const t = a.toLowerCase();
  if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
    return "Opera";
  if (kv(t)) return "IEMobile";
  if (t.includes("msie") || t.includes("trident/")) return "IE";
  if (t.includes("edge/")) return "Edge";
  if (Av(t)) return "Firefox";
  if (t.includes("silk/")) return "Silk";
  if (Dv(t)) return "Blackberry";
  if (Mv(t)) return "Webos";
  if (Rv(t)) return "Safari";
  if ((t.includes("chrome/") || Ov(t)) && !t.includes("edge/")) return "Chrome";
  if (Nv(t)) return "Android";
  {
    const i = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      l = a.match(i);
    if ((l == null ? void 0 : l.length) === 2) return l[1];
  }
  return "Other";
}
function Av(a = Yt()) {
  return /firefox\//i.test(a);
}
function Rv(a = Yt()) {
  const t = a.toLowerCase();
  return (
    t.includes("safari/") &&
    !t.includes("chrome/") &&
    !t.includes("crios/") &&
    !t.includes("android")
  );
}
function Ov(a = Yt()) {
  return /crios\//i.test(a);
}
function kv(a = Yt()) {
  return /iemobile/i.test(a);
}
function Nv(a = Yt()) {
  return /android/i.test(a);
}
function Dv(a = Yt()) {
  return /blackberry/i.test(a);
}
function Mv(a = Yt()) {
  return /webos/i.test(a);
}
function oh(a = Yt()) {
  return (
    /iphone|ipad|ipod/i.test(a) || (/macintosh/i.test(a) && /mobile/i.test(a))
  );
}
function QS(a = Yt()) {
  var t;
  return (
    oh(a) &&
    !!(!((t = window.navigator) === null || t === void 0) && t.standalone)
  );
}
function ZS() {
  return uE() && document.documentMode === 10;
}
function jv(a = Yt()) {
  return oh(a) || Nv(a) || Mv(a) || Dv(a) || /windows phone/i.test(a) || kv(a);
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
 */ function Lv(a, t = []) {
  let i;
  switch (a) {
    case "Browser":
      i = ty(Yt());
      break;
    case "Worker":
      i = `${ty(Yt())}-${a}`;
      break;
    default:
      i = a;
  }
  const l = t.length ? t.join(",") : "FirebaseCore-web";
  return `${i}/JsCore/${Tl}/${l}`;
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
 */ class JS {
  constructor(t) {
    (this.auth = t), (this.queue = []);
  }
  pushCallback(t, i) {
    const l = (u) =>
      new Promise((f, m) => {
        try {
          const h = t(u);
          f(h);
        } catch (h) {
          m(h);
        }
      });
    (l.onAbort = i), this.queue.push(l);
    const s = this.queue.length - 1;
    return () => {
      this.queue[s] = () => Promise.resolve();
    };
  }
  async runMiddleware(t) {
    if (this.auth.currentUser === t) return;
    const i = [];
    try {
      for (const l of this.queue) await l(t), l.onAbort && i.push(l.onAbort);
    } catch (l) {
      i.reverse();
      for (const s of i)
        try {
          s();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: l == null ? void 0 : l.message,
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
 */ async function WS(a, t = {}) {
  return Aa(a, "GET", "/v2/passwordPolicy", mr(a, t));
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
 */ const eT = 6;
class tT {
  constructor(t) {
    var i, l, s, u;
    const f = t.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (i = f.minPasswordLength) !== null && i !== void 0 ? i : eT),
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
        (s =
          (l = t.allowedNonAlphanumericCharacters) === null || l === void 0
            ? void 0
            : l.join("")) !== null && s !== void 0
          ? s
          : ""),
      (this.forceUpgradeOnSignin =
        (u = t.forceUpgradeOnSignin) !== null && u !== void 0 ? u : !1),
      (this.schemaVersion = t.schemaVersion);
  }
  validatePassword(t) {
    var i, l, s, u, f, m;
    const h = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(t, h),
      this.validatePasswordCharacterOptions(t, h),
      h.isValid &&
        (h.isValid =
          (i = h.meetsMinPasswordLength) !== null && i !== void 0 ? i : !0),
      h.isValid &&
        (h.isValid =
          (l = h.meetsMaxPasswordLength) !== null && l !== void 0 ? l : !0),
      h.isValid &&
        (h.isValid =
          (s = h.containsLowercaseLetter) !== null && s !== void 0 ? s : !0),
      h.isValid &&
        (h.isValid =
          (u = h.containsUppercaseLetter) !== null && u !== void 0 ? u : !0),
      h.isValid &&
        (h.isValid =
          (f = h.containsNumericCharacter) !== null && f !== void 0 ? f : !0),
      h.isValid &&
        (h.isValid =
          (m = h.containsNonAlphanumericCharacter) !== null && m !== void 0
            ? m
            : !0),
      h
    );
  }
  validatePasswordLengthOptions(t, i) {
    const l = this.customStrengthOptions.minPasswordLength,
      s = this.customStrengthOptions.maxPasswordLength;
    l && (i.meetsMinPasswordLength = t.length >= l),
      s && (i.meetsMaxPasswordLength = t.length <= s);
  }
  validatePasswordCharacterOptions(t, i) {
    this.updatePasswordCharacterOptionsStatuses(i, !1, !1, !1, !1);
    let l;
    for (let s = 0; s < t.length; s++)
      (l = t.charAt(s)),
        this.updatePasswordCharacterOptionsStatuses(
          i,
          l >= "a" && l <= "z",
          l >= "A" && l <= "Z",
          l >= "0" && l <= "9",
          this.allowedNonAlphanumericCharacters.includes(l)
        );
  }
  updatePasswordCharacterOptionsStatuses(t, i, l, s, u) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (t.containsLowercaseLetter || (t.containsLowercaseLetter = i)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (t.containsUppercaseLetter || (t.containsUppercaseLetter = l)),
      this.customStrengthOptions.containsNumericCharacter &&
        (t.containsNumericCharacter || (t.containsNumericCharacter = s)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (t.containsNonAlphanumericCharacter ||
          (t.containsNonAlphanumericCharacter = u));
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
 */ class nT {
  constructor(t, i, l, s) {
    (this.app = t),
      (this.heartbeatServiceProvider = i),
      (this.appCheckServiceProvider = l),
      (this.config = s),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new ny(this)),
      (this.idTokenSubscription = new ny(this)),
      (this.beforeStateQueue = new JS(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = xv),
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
      (this.clientVersion = s.sdkClientVersion),
      (this._persistenceManagerAvailable = new Promise(
        (u) => (this._resolvePersistenceManagerAvailable = u)
      ));
  }
  _initializeWithPersistence(t, i) {
    return (
      i && (this._popupRedirectResolver = xa(i)),
      (this._initializationPromise = this.queue(async () => {
        var l, s, u;
        if (
          !this._deleted &&
          ((this.persistenceManager = await Pi.create(this, t)),
          (l = this._resolvePersistenceManagerAvailable) === null ||
            l === void 0 ||
            l.call(this),
          !this._deleted)
        ) {
          if (
            !((s = this._popupRedirectResolver) === null || s === void 0) &&
            s._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(i),
            (this.lastNotifiedUid =
              ((u = this.currentUser) === null || u === void 0
                ? void 0
                : u.uid) || null),
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
      const i = await wc(this, { idToken: t }),
        l = await Bn._fromGetAccountInfoResponse(this, i, t);
      await this.directlySetCurrentUser(l);
    } catch (i) {
      console.warn(
        "FirebaseServerApp could not login user with provided authIdToken: ",
        i
      ),
        await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(t) {
    var i;
    if (On(this.app)) {
      const f = this.app.settings.authIdToken;
      return f
        ? new Promise((m) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(f).then(m, m)
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const l = await this.assertedPersistence.getCurrentUser();
    let s = l,
      u = !1;
    if (t && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const f =
          (i = this.redirectUser) === null || i === void 0
            ? void 0
            : i._redirectEventId,
        m = s == null ? void 0 : s._redirectEventId,
        h = await this.tryRedirectSignIn(t);
      (!f || f === m) && h != null && h.user && ((s = h.user), (u = !0));
    }
    if (!s) return this.directlySetCurrentUser(null);
    if (!s._redirectEventId) {
      if (u)
        try {
          await this.beforeStateQueue.runMiddleware(s);
        } catch (f) {
          (s = l),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(f)
            );
        }
      return s
        ? this.reloadAndSetCurrentUserOrClear(s)
        : this.directlySetCurrentUser(null);
    }
    return (
      Te(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === s._redirectEventId
        ? this.directlySetCurrentUser(s)
        : this.reloadAndSetCurrentUserOrClear(s)
    );
  }
  async tryRedirectSignIn(t) {
    let i = null;
    try {
      i = await this._popupRedirectResolver._completeRedirectFn(this, t, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return i;
  }
  async reloadAndSetCurrentUserOrClear(t) {
    try {
      await xc(t);
    } catch (i) {
      if ((i == null ? void 0 : i.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(t);
  }
  useDeviceLanguage() {
    this.languageCode = jS();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    if (On(this.app)) return Promise.reject(_a(this));
    const i = t ? ta(t) : null;
    return (
      i &&
        Te(
          i.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token"
        ),
      this._updateCurrentUser(i && i._clone(this))
    );
  }
  async _updateCurrentUser(t, i = !1) {
    if (!this._deleted)
      return (
        t && Te(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
        i || (await this.beforeStateQueue.runMiddleware(t)),
        this.queue(async () => {
          await this.directlySetCurrentUser(t), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return On(this.app)
      ? Promise.reject(_a(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(t) {
    return On(this.app)
      ? Promise.reject(_a(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(xa(t));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(t) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const i = this._getPasswordPolicyInternal();
    return i.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            "unsupported-password-policy-schema-version",
            {}
          )
        )
      : i.validatePassword(t);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const t = await WS(this),
      i = new tT(t);
    this.tenantId === null
      ? (this._projectPasswordPolicy = i)
      : (this._tenantPasswordPolicies[this.tenantId] = i);
  }
  _getPersistenceType() {
    return this.assertedPersistence.persistence.type;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence;
  }
  _updateErrorMap(t) {
    this._errorFactory = new El("auth", "Firebase", t());
  }
  onAuthStateChanged(t, i, l) {
    return this.registerStateListener(this.authStateSubscription, t, i, l);
  }
  beforeAuthStateChanged(t, i) {
    return this.beforeStateQueue.pushCallback(t, i);
  }
  onIdTokenChanged(t, i, l) {
    return this.registerStateListener(this.idTokenSubscription, t, i, l);
  }
  authStateReady() {
    return new Promise((t, i) => {
      if (this.currentUser) t();
      else {
        const l = this.onAuthStateChanged(() => {
          l(), t();
        }, i);
      }
    });
  }
  async revokeAccessToken(t) {
    if (this.currentUser) {
      const i = await this.currentUser.getIdToken(),
        l = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token: t,
          idToken: i,
        };
      this.tenantId != null && (l.tenantId = this.tenantId), await FS(this, l);
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
  async _setRedirectUser(t, i) {
    const l = await this.getOrInitRedirectPersistenceManager(i);
    return t === null ? l.removeCurrentUser() : l.setCurrentUser(t);
  }
  async getOrInitRedirectPersistenceManager(t) {
    if (!this.redirectPersistenceManager) {
      const i = (t && xa(t)) || this._popupRedirectResolver;
      Te(i, this, "argument-error"),
        (this.redirectPersistenceManager = await Pi.create(
          this,
          [xa(i._redirectPersistence)],
          "redirectUser"
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(t) {
    var i, l;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((i = this._currentUser) === null || i === void 0
        ? void 0
        : i._redirectEventId) === t
        ? this._currentUser
        : ((l = this.redirectUser) === null || l === void 0
            ? void 0
            : l._redirectEventId) === t
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
    var t, i;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const l =
      (i = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !==
        null && i !== void 0
        ? i
        : null;
    this.lastNotifiedUid !== l &&
      ((this.lastNotifiedUid = l),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(t, i, l, s) {
    if (this._deleted) return () => {};
    const u = typeof i == "function" ? i : i.next.bind(i);
    let f = !1;
    const m = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (Te(m, this, "internal-error"),
      m.then(() => {
        f || u(this.currentUser);
      }),
      typeof i == "function")
    ) {
      const h = t.addObserver(i, l, s);
      return () => {
        (f = !0), h();
      };
    } else {
      const h = t.addObserver(i);
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
      Te(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(t) {
    !t ||
      this.frameworks.includes(t) ||
      (this.frameworks.push(t),
      this.frameworks.sort(),
      (this.clientVersion = Lv(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var t;
    const i = { "X-Client-Version": this.clientVersion };
    this.app.options.appId && (i["X-Firebase-gmpid"] = this.app.options.appId);
    const l = await ((t = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getHeartbeatsHeader());
    l && (i["X-Firebase-Client"] = l);
    const s = await this._getAppCheckToken();
    return s && (i["X-Firebase-AppCheck"] = s), i;
  }
  async _getAppCheckToken() {
    var t;
    if (On(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const i = await ((t = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getToken());
    return (
      i != null &&
        i.error &&
        kS(`Error while retrieving App Check token: ${i.error}`),
      i == null ? void 0 : i.token
    );
  }
}
function pr(a) {
  return ta(a);
}
class ny {
  constructor(t) {
    (this.auth = t),
      (this.observer = null),
      (this.addObserver = yE((i) => (this.observer = i)));
  }
  get next() {
    return (
      Te(this.observer, this.auth, "internal-error"),
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
 */ let Hc = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: "",
};
function aT(a) {
  Hc = a;
}
function zv(a) {
  return Hc.loadJS(a);
}
function rT() {
  return Hc.recaptchaEnterpriseScript;
}
function iT() {
  return Hc.gapiScript;
}
function oT(a) {
  return `__${a}${Math.floor(Math.random() * 1e6)}`;
}
class lT {
  constructor() {
    this.enterprise = new sT();
  }
  ready(t) {
    t();
  }
  execute(t, i) {
    return Promise.resolve("token");
  }
  render(t, i) {
    return "";
  }
}
class sT {
  ready(t) {
    t();
  }
  execute(t, i) {
    return Promise.resolve("token");
  }
  render(t, i) {
    return "";
  }
}
const cT = "recaptcha-enterprise",
  Uv = "NO_RECAPTCHA";
class uT {
  constructor(t) {
    (this.type = cT), (this.auth = pr(t));
  }
  async verify(t = "verify", i = !1) {
    async function l(u) {
      if (!i) {
        if (u.tenantId == null && u._agentRecaptchaConfig != null)
          return u._agentRecaptchaConfig.siteKey;
        if (
          u.tenantId != null &&
          u._tenantRecaptchaConfigs[u.tenantId] !== void 0
        )
          return u._tenantRecaptchaConfigs[u.tenantId].siteKey;
      }
      return new Promise(async (f, m) => {
        PS(u, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE",
        })
          .then((h) => {
            if (h.recaptchaKey === void 0)
              m(new Error("recaptcha Enterprise site key undefined"));
            else {
              const p = new HS(h);
              return (
                u.tenantId == null
                  ? (u._agentRecaptchaConfig = p)
                  : (u._tenantRecaptchaConfigs[u.tenantId] = p),
                f(p.siteKey)
              );
            }
          })
          .catch((h) => {
            m(h);
          });
      });
    }
    function s(u, f, m) {
      const h = window.grecaptcha;
      Z0(h)
        ? h.enterprise.ready(() => {
            h.enterprise
              .execute(u, { action: t })
              .then((p) => {
                f(p);
              })
              .catch(() => {
                f(Uv);
              });
          })
        : m(Error("No reCAPTCHA enterprise script loaded."));
    }
    return this.auth.settings.appVerificationDisabledForTesting
      ? new lT().execute("siteKey", { action: "verify" })
      : new Promise((u, f) => {
          l(this.auth)
            .then((m) => {
              if (!i && Z0(window.grecaptcha)) s(m, u, f);
              else {
                if (typeof window > "u") {
                  f(
                    new Error("RecaptchaVerifier is only supported in browser")
                  );
                  return;
                }
                let h = rT();
                h.length !== 0 && (h += m),
                  zv(h)
                    .then(() => {
                      s(m, u, f);
                    })
                    .catch((p) => {
                      f(p);
                    });
              }
            })
            .catch((m) => {
              f(m);
            });
        });
  }
}
async function ay(a, t, i, l = !1, s = !1) {
  const u = new uT(a);
  let f;
  if (s) f = Uv;
  else
    try {
      f = await u.verify(i);
    } catch {
      f = await u.verify(i, !0);
    }
  const m = Object.assign({}, t);
  if (i === "mfaSmsEnrollment" || i === "mfaSmsSignIn") {
    if ("phoneEnrollmentInfo" in m) {
      const h = m.phoneEnrollmentInfo.phoneNumber,
        p = m.phoneEnrollmentInfo.recaptchaToken;
      Object.assign(m, {
        phoneEnrollmentInfo: {
          phoneNumber: h,
          recaptchaToken: p,
          captchaResponse: f,
          clientType: "CLIENT_TYPE_WEB",
          recaptchaVersion: "RECAPTCHA_ENTERPRISE",
        },
      });
    } else if ("phoneSignInInfo" in m) {
      const h = m.phoneSignInInfo.recaptchaToken;
      Object.assign(m, {
        phoneSignInInfo: {
          recaptchaToken: h,
          captchaResponse: f,
          clientType: "CLIENT_TYPE_WEB",
          recaptchaVersion: "RECAPTCHA_ENTERPRISE",
        },
      });
    }
    return m;
  }
  return (
    l
      ? Object.assign(m, { captchaResp: f })
      : Object.assign(m, { captchaResponse: f }),
    Object.assign(m, { clientType: "CLIENT_TYPE_WEB" }),
    Object.assign(m, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
    m
  );
}
async function Lf(a, t, i, l, s) {
  var u;
  if (
    !((u = a._getRecaptchaConfig()) === null || u === void 0) &&
    u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")
  ) {
    const f = await ay(a, t, i, i === "getOobCode");
    return l(a, f);
  } else
    return l(a, t).catch(async (f) => {
      if (f.code === "auth/missing-recaptcha-token") {
        console.log(
          `${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`
        );
        const m = await ay(a, t, i, i === "getOobCode");
        return l(a, m);
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
 */ function dT(a, t) {
  const i = gv(a, "auth");
  if (i.isInitialized()) {
    const s = i.getImmediate(),
      u = i.getOptions();
    if ($i(u, t ?? {})) return s;
    Nn(s, "already-initialized");
  }
  return i.initialize({ options: t });
}
function fT(a, t) {
  const i = (t == null ? void 0 : t.persistence) || [],
    l = (Array.isArray(i) ? i : [i]).map(xa);
  t != null && t.errorMap && a._updateErrorMap(t.errorMap),
    a._initializeWithPersistence(
      l,
      t == null ? void 0 : t.popupRedirectResolver
    );
}
function hT(a, t, i) {
  const l = pr(a);
  Te(/^https?:\/\//.test(t), l, "invalid-emulator-scheme");
  const s = !1,
    u = Iv(t),
    { host: f, port: m } = mT(t),
    h = m === null ? "" : `:${m}`,
    p = { url: `${u}//${f}${h}/` },
    b = Object.freeze({
      host: f,
      port: m,
      protocol: u.replace(":", ""),
      options: Object.freeze({ disableWarnings: s }),
    });
  if (!l._canInitEmulator) {
    Te(l.config.emulator && l.emulatorConfig, l, "emulator-config-failed"),
      Te(
        $i(p, l.config.emulator) && $i(b, l.emulatorConfig),
        l,
        "emulator-config-failed"
      );
    return;
  }
  (l.config.emulator = p),
    (l.emulatorConfig = b),
    (l.settings.appVerificationDisabledForTesting = !0),
    Wf(f) ? (fv("Auth", !0), aE(`${u}//${f}${h}`)) : pT();
}
function Iv(a) {
  const t = a.indexOf(":");
  return t < 0 ? "" : a.substr(0, t + 1);
}
function mT(a) {
  const t = Iv(a),
    i = /(\/\/)?([^?#/]+)/.exec(a.substr(t.length));
  if (!i) return { host: "", port: null };
  const l = i[2].split("@").pop() || "",
    s = /^(\[[^\]]+\])(:|$)/.exec(l);
  if (s) {
    const u = s[1];
    return { host: u, port: ry(l.substr(u.length + 1)) };
  } else {
    const [u, f] = l.split(":");
    return { host: u, port: ry(f) };
  }
}
function ry(a) {
  if (!a) return null;
  const t = Number(a);
  return isNaN(t) ? null : t;
}
function pT() {
  function a() {
    const t = document.createElement("p"),
      i = t.style;
    (t.innerText =
      "Running in emulator mode. Do not use with production credentials."),
      (i.position = "fixed"),
      (i.width = "100%"),
      (i.backgroundColor = "#ffffff"),
      (i.border = ".1em solid #000000"),
      (i.color = "#b50000"),
      (i.bottom = "0px"),
      (i.left = "0px"),
      (i.margin = "0px"),
      (i.zIndex = "10000"),
      (i.textAlign = "center"),
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
  constructor(t, i) {
    (this.providerId = t), (this.signInMethod = i);
  }
  toJSON() {
    return wa("not implemented");
  }
  _getIdTokenResponse(t) {
    return wa("not implemented");
  }
  _linkToIdToken(t, i) {
    return wa("not implemented");
  }
  _getReauthenticationResolver(t) {
    return wa("not implemented");
  }
}
async function gT(a, t) {
  return Aa(a, "POST", "/v1/accounts:signUp", t);
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
 */ async function yT(a, t) {
  return Al(a, "POST", "/v1/accounts:signInWithPassword", mr(a, t));
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
 */ async function vT(a, t) {
  return Al(a, "POST", "/v1/accounts:signInWithEmailLink", mr(a, t));
}
async function bT(a, t) {
  return Al(a, "POST", "/v1/accounts:signInWithEmailLink", mr(a, t));
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
 */ class vl extends lh {
  constructor(t, i, l, s = null) {
    super("password", l),
      (this._email = t),
      (this._password = i),
      (this._tenantId = s);
  }
  static _fromEmailAndPassword(t, i) {
    return new vl(t, i, "password");
  }
  static _fromEmailAndCode(t, i, l = null) {
    return new vl(t, i, "emailLink", l);
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
    const i = typeof t == "string" ? JSON.parse(t) : t;
    if (i != null && i.email && i != null && i.password) {
      if (i.signInMethod === "password")
        return this._fromEmailAndPassword(i.email, i.password);
      if (i.signInMethod === "emailLink")
        return this._fromEmailAndCode(i.email, i.password, i.tenantId);
    }
    return null;
  }
  async _getIdTokenResponse(t) {
    switch (this.signInMethod) {
      case "password":
        const i = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return Lf(t, i, "signInWithPassword", yT);
      case "emailLink":
        return vT(t, { email: this._email, oobCode: this._password });
      default:
        Nn(t, "internal-error");
    }
  }
  async _linkToIdToken(t, i) {
    switch (this.signInMethod) {
      case "password":
        const l = {
          idToken: i,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return Lf(t, l, "signUpPassword", gT);
      case "emailLink":
        return bT(t, {
          idToken: i,
          email: this._email,
          oobCode: this._password,
        });
      default:
        Nn(t, "internal-error");
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
 */ async function Vi(a, t) {
  return Al(a, "POST", "/v1/accounts:signInWithIdp", mr(a, t));
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
 */ const wT = "http://localhost";
class Xr extends lh {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(t) {
    const i = new Xr(t.providerId, t.signInMethod);
    return (
      t.idToken || t.accessToken
        ? (t.idToken && (i.idToken = t.idToken),
          t.accessToken && (i.accessToken = t.accessToken),
          t.nonce && !t.pendingToken && (i.nonce = t.nonce),
          t.pendingToken && (i.pendingToken = t.pendingToken))
        : t.oauthToken && t.oauthTokenSecret
        ? ((i.accessToken = t.oauthToken), (i.secret = t.oauthTokenSecret))
        : Nn("argument-error"),
      i
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
    const i = typeof t == "string" ? JSON.parse(t) : t,
      { providerId: l, signInMethod: s } = i,
      u = th(i, ["providerId", "signInMethod"]);
    if (!l || !s) return null;
    const f = new Xr(l, s);
    return (
      (f.idToken = u.idToken || void 0),
      (f.accessToken = u.accessToken || void 0),
      (f.secret = u.secret),
      (f.nonce = u.nonce),
      (f.pendingToken = u.pendingToken || null),
      f
    );
  }
  _getIdTokenResponse(t) {
    const i = this.buildRequest();
    return Vi(t, i);
  }
  _linkToIdToken(t, i) {
    const l = this.buildRequest();
    return (l.idToken = i), Vi(t, l);
  }
  _getReauthenticationResolver(t) {
    const i = this.buildRequest();
    return (i.autoCreate = !1), Vi(t, i);
  }
  buildRequest() {
    const t = { requestUri: wT, returnSecureToken: !0 };
    if (this.pendingToken) t.pendingToken = this.pendingToken;
    else {
      const i = {};
      this.idToken && (i.id_token = this.idToken),
        this.accessToken && (i.access_token = this.accessToken),
        this.secret && (i.oauth_token_secret = this.secret),
        (i.providerId = this.providerId),
        this.nonce && !this.pendingToken && (i.nonce = this.nonce),
        (t.postBody = Sl(i));
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
 */ function xT(a) {
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
function _T(a) {
  const t = cl(ul(a)).link,
    i = t ? cl(ul(t)).deep_link_id : null,
    l = cl(ul(a)).deep_link_id;
  return (l ? cl(ul(l)).link : null) || l || i || t || a;
}
class sh {
  constructor(t) {
    var i, l, s, u, f, m;
    const h = cl(ul(t)),
      p = (i = h.apiKey) !== null && i !== void 0 ? i : null,
      b = (l = h.oobCode) !== null && l !== void 0 ? l : null,
      x = xT((s = h.mode) !== null && s !== void 0 ? s : null);
    Te(p && b && x, "argument-error"),
      (this.apiKey = p),
      (this.operation = x),
      (this.code = b),
      (this.continueUrl =
        (u = h.continueUrl) !== null && u !== void 0 ? u : null),
      (this.languageCode = (f = h.lang) !== null && f !== void 0 ? f : null),
      (this.tenantId = (m = h.tenantId) !== null && m !== void 0 ? m : null);
  }
  static parseLink(t) {
    const i = _T(t);
    try {
      return new sh(i);
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
 */ class Zi {
  constructor() {
    this.providerId = Zi.PROVIDER_ID;
  }
  static credential(t, i) {
    return vl._fromEmailAndPassword(t, i);
  }
  static credentialWithLink(t, i) {
    const l = sh.parseLink(i);
    return Te(l, "argument-error"), vl._fromEmailAndCode(t, l.code, l.tenantId);
  }
}
Zi.PROVIDER_ID = "password";
Zi.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
Zi.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
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
 */ class ch {
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
 */ class Rl extends ch {
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
 */ class rr extends Rl {
  constructor() {
    super("facebook.com");
  }
  static credential(t) {
    return Xr._fromParams({
      providerId: rr.PROVIDER_ID,
      signInMethod: rr.FACEBOOK_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return rr.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return rr.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return rr.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
rr.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
rr.PROVIDER_ID = "facebook.com";
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
 */ class ba extends Rl {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(t, i) {
    return Xr._fromParams({
      providerId: ba.PROVIDER_ID,
      signInMethod: ba.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: i,
    });
  }
  static credentialFromResult(t) {
    return ba.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return ba.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthIdToken: i, oauthAccessToken: l } = t;
    if (!i && !l) return null;
    try {
      return ba.credential(i, l);
    } catch {
      return null;
    }
  }
}
ba.GOOGLE_SIGN_IN_METHOD = "google.com";
ba.PROVIDER_ID = "google.com";
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
 */ class ir extends Rl {
  constructor() {
    super("github.com");
  }
  static credential(t) {
    return Xr._fromParams({
      providerId: ir.PROVIDER_ID,
      signInMethod: ir.GITHUB_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return ir.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return ir.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return ir.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
ir.GITHUB_SIGN_IN_METHOD = "github.com";
ir.PROVIDER_ID = "github.com";
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
 */ class or extends Rl {
  constructor() {
    super("twitter.com");
  }
  static credential(t, i) {
    return Xr._fromParams({
      providerId: or.PROVIDER_ID,
      signInMethod: or.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: i,
    });
  }
  static credentialFromResult(t) {
    return or.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return or.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthAccessToken: i, oauthTokenSecret: l } = t;
    if (!i || !l) return null;
    try {
      return or.credential(i, l);
    } catch {
      return null;
    }
  }
}
or.TWITTER_SIGN_IN_METHOD = "twitter.com";
or.PROVIDER_ID = "twitter.com";
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
 */ async function ET(a, t) {
  return Al(a, "POST", "/v1/accounts:signUp", mr(a, t));
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
  constructor(t) {
    (this.user = t.user),
      (this.providerId = t.providerId),
      (this._tokenResponse = t._tokenResponse),
      (this.operationType = t.operationType);
  }
  static async _fromIdTokenResponse(t, i, l, s = !1) {
    const u = await Bn._fromIdTokenResponse(t, l, s),
      f = iy(l);
    return new Kr({
      user: u,
      providerId: f,
      _tokenResponse: l,
      operationType: i,
    });
  }
  static async _forOperation(t, i, l) {
    await t._updateTokensIfNecessary(l, !0);
    const s = iy(l);
    return new Kr({
      user: t,
      providerId: s,
      _tokenResponse: l,
      operationType: i,
    });
  }
}
function iy(a) {
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
 */ class _c extends hr {
  constructor(t, i, l, s) {
    var u;
    super(i.code, i.message),
      (this.operationType = l),
      (this.user = s),
      Object.setPrototypeOf(this, _c.prototype),
      (this.customData = {
        appName: t.name,
        tenantId: (u = t.tenantId) !== null && u !== void 0 ? u : void 0,
        _serverResponse: i.customData._serverResponse,
        operationType: l,
      });
  }
  static _fromErrorAndOperation(t, i, l, s) {
    return new _c(t, i, l, s);
  }
}
function Bv(a, t, i, l) {
  return (
    t === "reauthenticate"
      ? i._getReauthenticationResolver(a)
      : i._getIdTokenResponse(a)
  ).catch((u) => {
    throw u.code === "auth/multi-factor-auth-required"
      ? _c._fromErrorAndOperation(a, u, t, l)
      : u;
  });
}
async function ST(a, t, i = !1) {
  const l = await Xi(a, t._linkToIdToken(a.auth, await a.getIdToken()), i);
  return Kr._forOperation(a, "link", l);
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
 */ async function TT(a, t, i = !1) {
  const { auth: l } = a;
  if (On(l.app)) return Promise.reject(_a(l));
  const s = "reauthenticate";
  try {
    const u = await Xi(a, Bv(l, s, t, a), i);
    Te(u.idToken, l, "internal-error");
    const f = ih(u.idToken);
    Te(f, l, "internal-error");
    const { sub: m } = f;
    return Te(a.uid === m, l, "user-mismatch"), Kr._forOperation(a, s, u);
  } catch (u) {
    throw (
      ((u == null ? void 0 : u.code) === "auth/user-not-found" &&
        Nn(l, "user-mismatch"),
      u)
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
 */ async function Hv(a, t, i = !1) {
  if (On(a.app)) return Promise.reject(_a(a));
  const l = "signIn",
    s = await Bv(a, l, t),
    u = await Kr._fromIdTokenResponse(a, l, s);
  return i || (await a._updateCurrentUser(u.user)), u;
}
async function CT(a, t) {
  return Hv(pr(a), t);
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
 */ async function Pv(a) {
  const t = pr(a);
  t._getPasswordPolicyInternal() && (await t._updatePasswordPolicy());
}
async function AT(a, t, i) {
  if (On(a.app)) return Promise.reject(_a(a));
  const l = pr(a),
    f = await Lf(
      l,
      {
        returnSecureToken: !0,
        email: t,
        password: i,
        clientType: "CLIENT_TYPE_WEB",
      },
      "signUpPassword",
      ET
    ).catch((h) => {
      throw (h.code === "auth/password-does-not-meet-requirements" && Pv(a), h);
    }),
    m = await Kr._fromIdTokenResponse(l, "signIn", f);
  return await l._updateCurrentUser(m.user), m;
}
function RT(a, t, i) {
  return On(a.app)
    ? Promise.reject(_a(a))
    : CT(ta(a), Zi.credential(t, i)).catch(async (l) => {
        throw (
          (l.code === "auth/password-does-not-meet-requirements" && Pv(a), l)
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
 */ async function OT(a, t) {
  return Aa(a, "POST", "/v1/accounts:update", t);
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
 */ async function kT(a, { displayName: t, photoURL: i }) {
  if (t === void 0 && i === void 0) return;
  const l = ta(a),
    u = {
      idToken: await l.getIdToken(),
      displayName: t,
      photoUrl: i,
      returnSecureToken: !0,
    },
    f = await Xi(l, OT(l.auth, u));
  (l.displayName = f.displayName || null), (l.photoURL = f.photoUrl || null);
  const m = l.providerData.find(({ providerId: h }) => h === "password");
  m && ((m.displayName = l.displayName), (m.photoURL = l.photoURL)),
    await l._updateTokensIfNecessary(f);
}
function NT(a, t, i, l) {
  return ta(a).onIdTokenChanged(t, i, l);
}
function DT(a, t, i) {
  return ta(a).beforeAuthStateChanged(t, i);
}
function MT(a, t, i, l) {
  return ta(a).onAuthStateChanged(t, i, l);
}
function jT(a) {
  return ta(a).signOut();
}
const Ec = "__sak";
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
 */ class Vv {
  constructor(t, i) {
    (this.storageRetriever = t), (this.type = i);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(Ec, "1"),
          this.storage.removeItem(Ec),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(t, i) {
    return this.storage.setItem(t, JSON.stringify(i)), Promise.resolve();
  }
  _get(t) {
    const i = this.storage.getItem(t);
    return Promise.resolve(i ? JSON.parse(i) : null);
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
 */ const LT = 1e3,
  zT = 10;
class qv extends Vv {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (t, i) => this.onStorageEvent(t, i)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.fallbackToPolling = jv()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(t) {
    for (const i of Object.keys(this.listeners)) {
      const l = this.storage.getItem(i),
        s = this.localCache[i];
      l !== s && t(i, s, l);
    }
  }
  onStorageEvent(t, i = !1) {
    if (!t.key) {
      this.forAllChangedKeys((f, m, h) => {
        this.notifyListeners(f, h);
      });
      return;
    }
    const l = t.key;
    i ? this.detachListener() : this.stopPolling();
    const s = () => {
        const f = this.storage.getItem(l);
        (!i && this.localCache[l] === f) || this.notifyListeners(l, f);
      },
      u = this.storage.getItem(l);
    ZS() && u !== t.newValue && t.newValue !== t.oldValue
      ? setTimeout(s, zT)
      : s();
  }
  notifyListeners(t, i) {
    this.localCache[t] = i;
    const l = this.listeners[t];
    if (l) for (const s of Array.from(l)) s(i && JSON.parse(i));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((t, i, l) => {
          this.onStorageEvent(
            new StorageEvent("storage", { key: t, oldValue: i, newValue: l }),
            !0
          );
        });
      }, LT));
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
  _addListener(t, i) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[t] ||
        ((this.listeners[t] = new Set()),
        (this.localCache[t] = this.storage.getItem(t))),
      this.listeners[t].add(i);
  }
  _removeListener(t, i) {
    this.listeners[t] &&
      (this.listeners[t].delete(i),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(t, i) {
    await super._set(t, i), (this.localCache[t] = JSON.stringify(i));
  }
  async _get(t) {
    const i = await super._get(t);
    return (this.localCache[t] = JSON.stringify(i)), i;
  }
  async _remove(t) {
    await super._remove(t), delete this.localCache[t];
  }
}
qv.type = "LOCAL";
const UT = qv;
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
 */ class Gv extends Vv {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(t, i) {}
  _removeListener(t, i) {}
}
Gv.type = "SESSION";
const $v = Gv;
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
 */ function IT(a) {
  return Promise.all(
    a.map(async (t) => {
      try {
        return { fulfilled: !0, value: await t };
      } catch (i) {
        return { fulfilled: !1, reason: i };
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
 */ class Pc {
  constructor(t) {
    (this.eventTarget = t),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(t) {
    const i = this.receivers.find((s) => s.isListeningto(t));
    if (i) return i;
    const l = new Pc(t);
    return this.receivers.push(l), l;
  }
  isListeningto(t) {
    return this.eventTarget === t;
  }
  async handleEvent(t) {
    const i = t,
      { eventId: l, eventType: s, data: u } = i.data,
      f = this.handlersMap[s];
    if (!(f != null && f.size)) return;
    i.ports[0].postMessage({ status: "ack", eventId: l, eventType: s });
    const m = Array.from(f).map(async (p) => p(i.origin, u)),
      h = await IT(m);
    i.ports[0].postMessage({
      status: "done",
      eventId: l,
      eventType: s,
      response: h,
    });
  }
  _subscribe(t, i) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[t] || (this.handlersMap[t] = new Set()),
      this.handlersMap[t].add(i);
  }
  _unsubscribe(t, i) {
    this.handlersMap[t] && i && this.handlersMap[t].delete(i),
      (!i || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
Pc.receivers = [];
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
 */ function uh(a = "", t = 10) {
  let i = "";
  for (let l = 0; l < t; l++) i += Math.floor(Math.random() * 10);
  return a + i;
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
 */ class BT {
  constructor(t) {
    (this.target = t), (this.handlers = new Set());
  }
  removeMessageHandler(t) {
    t.messageChannel &&
      (t.messageChannel.port1.removeEventListener("message", t.onMessage),
      t.messageChannel.port1.close()),
      this.handlers.delete(t);
  }
  async _send(t, i, l = 50) {
    const s = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!s) throw new Error("connection_unavailable");
    let u, f;
    return new Promise((m, h) => {
      const p = uh("", 20);
      s.port1.start();
      const b = setTimeout(() => {
        h(new Error("unsupported_event"));
      }, l);
      (f = {
        messageChannel: s,
        onMessage(x) {
          const w = x;
          if (w.data.eventId === p)
            switch (w.data.status) {
              case "ack":
                clearTimeout(b),
                  (u = setTimeout(() => {
                    h(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(u), m(w.data.response);
                break;
              default:
                clearTimeout(b),
                  clearTimeout(u),
                  h(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(f),
        s.port1.addEventListener("message", f.onMessage),
        this.target.postMessage({ eventType: t, eventId: p, data: i }, [
          s.port2,
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
 */ function Jn() {
  return window;
}
function HT(a) {
  Jn().location.href = a;
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
 */ function Yv() {
  return (
    typeof Jn().WorkerGlobalScope < "u" &&
    typeof Jn().importScripts == "function"
  );
}
async function PT() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function VT() {
  var a;
  return (
    ((a = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    a === void 0
      ? void 0
      : a.controller) || null
  );
}
function qT() {
  return Yv() ? self : null;
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
 */ const Xv = "firebaseLocalStorageDb",
  GT = 1,
  Sc = "firebaseLocalStorage",
  Kv = "fbase_key";
class Ol {
  constructor(t) {
    this.request = t;
  }
  toPromise() {
    return new Promise((t, i) => {
      this.request.addEventListener("success", () => {
        t(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          i(this.request.error);
        });
    });
  }
}
function Vc(a, t) {
  return a.transaction([Sc], t ? "readwrite" : "readonly").objectStore(Sc);
}
function $T() {
  const a = indexedDB.deleteDatabase(Xv);
  return new Ol(a).toPromise();
}
function zf() {
  const a = indexedDB.open(Xv, GT);
  return new Promise((t, i) => {
    a.addEventListener("error", () => {
      i(a.error);
    }),
      a.addEventListener("upgradeneeded", () => {
        const l = a.result;
        try {
          l.createObjectStore(Sc, { keyPath: Kv });
        } catch (s) {
          i(s);
        }
      }),
      a.addEventListener("success", async () => {
        const l = a.result;
        l.objectStoreNames.contains(Sc)
          ? t(l)
          : (l.close(), await $T(), t(await zf()));
      });
  });
}
async function oy(a, t, i) {
  const l = Vc(a, !0).put({ [Kv]: t, value: i });
  return new Ol(l).toPromise();
}
async function YT(a, t) {
  const i = Vc(a, !1).get(t),
    l = await new Ol(i).toPromise();
  return l === void 0 ? null : l.value;
}
function ly(a, t) {
  const i = Vc(a, !0).delete(t);
  return new Ol(i).toPromise();
}
const XT = 800,
  KT = 3;
class Fv {
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
    return this.db ? this.db : ((this.db = await zf()), this.db);
  }
  async _withRetries(t) {
    let i = 0;
    for (;;)
      try {
        const l = await this._openDb();
        return await t(l);
      } catch (l) {
        if (i++ > KT) throw l;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Yv() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = Pc._getInstance(qT())),
      this.receiver._subscribe("keyChanged", async (t, i) => ({
        keyProcessed: (await this._poll()).includes(i.key),
      })),
      this.receiver._subscribe("ping", async (t, i) => ["keyChanged"]);
  }
  async initializeSender() {
    var t, i;
    if (((this.activeServiceWorker = await PT()), !this.activeServiceWorker))
      return;
    this.sender = new BT(this.activeServiceWorker);
    const l = await this.sender._send("ping", {}, 800);
    l &&
      !((t = l[0]) === null || t === void 0) &&
      t.fulfilled &&
      !((i = l[0]) === null || i === void 0) &&
      i.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(t) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        VT() !== this.activeServiceWorker
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
      const t = await zf();
      return await oy(t, Ec, "1"), await ly(t, Ec), !0;
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
  async _set(t, i) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((l) => oy(l, t, i)),
        (this.localCache[t] = i),
        this.notifyServiceWorker(t)
      )
    );
  }
  async _get(t) {
    const i = await this._withRetries((l) => YT(l, t));
    return (this.localCache[t] = i), i;
  }
  async _remove(t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((i) => ly(i, t)),
        delete this.localCache[t],
        this.notifyServiceWorker(t)
      )
    );
  }
  async _poll() {
    const t = await this._withRetries((s) => {
      const u = Vc(s, !1).getAll();
      return new Ol(u).toPromise();
    });
    if (!t) return [];
    if (this.pendingWrites !== 0) return [];
    const i = [],
      l = new Set();
    if (t.length !== 0)
      for (const { fbase_key: s, value: u } of t)
        l.add(s),
          JSON.stringify(this.localCache[s]) !== JSON.stringify(u) &&
            (this.notifyListeners(s, u), i.push(s));
    for (const s of Object.keys(this.localCache))
      this.localCache[s] &&
        !l.has(s) &&
        (this.notifyListeners(s, null), i.push(s));
    return i;
  }
  notifyListeners(t, i) {
    this.localCache[t] = i;
    const l = this.listeners[t];
    if (l) for (const s of Array.from(l)) s(i);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), XT));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(t, i) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[t] || ((this.listeners[t] = new Set()), this._get(t)),
      this.listeners[t].add(i);
  }
  _removeListener(t, i) {
    this.listeners[t] &&
      (this.listeners[t].delete(i),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Fv.type = "LOCAL";
const FT = Fv;
new Cl(3e4, 6e4);
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
 */ function Qv(a, t) {
  return t
    ? xa(t)
    : (Te(a._popupRedirectResolver, a, "argument-error"),
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
 */ class dh extends lh {
  constructor(t) {
    super("custom", "custom"), (this.params = t);
  }
  _getIdTokenResponse(t) {
    return Vi(t, this._buildIdpRequest());
  }
  _linkToIdToken(t, i) {
    return Vi(t, this._buildIdpRequest(i));
  }
  _getReauthenticationResolver(t) {
    return Vi(t, this._buildIdpRequest());
  }
  _buildIdpRequest(t) {
    const i = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return t && (i.idToken = t), i;
  }
}
function QT(a) {
  return Hv(a.auth, new dh(a), a.bypassAuthState);
}
function ZT(a) {
  const { auth: t, user: i } = a;
  return Te(i, t, "internal-error"), TT(i, new dh(a), a.bypassAuthState);
}
async function JT(a) {
  const { auth: t, user: i } = a;
  return Te(i, t, "internal-error"), ST(i, new dh(a), a.bypassAuthState);
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
 */ class Zv {
  constructor(t, i, l, s, u = !1) {
    (this.auth = t),
      (this.resolver = l),
      (this.user = s),
      (this.bypassAuthState = u),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(i) ? i : [i]);
  }
  execute() {
    return new Promise(async (t, i) => {
      this.pendingPromise = { resolve: t, reject: i };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (l) {
        this.reject(l);
      }
    });
  }
  async onAuthEvent(t) {
    const {
      urlResponse: i,
      sessionId: l,
      postBody: s,
      tenantId: u,
      error: f,
      type: m,
    } = t;
    if (f) {
      this.reject(f);
      return;
    }
    const h = {
      auth: this.auth,
      requestUri: i,
      sessionId: l,
      tenantId: u || void 0,
      postBody: s || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(m)(h));
    } catch (p) {
      this.reject(p);
    }
  }
  onError(t) {
    this.reject(t);
  }
  getIdpTask(t) {
    switch (t) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return QT;
      case "linkViaPopup":
      case "linkViaRedirect":
        return JT;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return ZT;
      default:
        Nn(this.auth, "internal-error");
    }
  }
  resolve(t) {
    Ta(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(t),
      this.unregisterAndCleanUp();
  }
  reject(t) {
    Ta(this.pendingPromise, "Pending promise was never set"),
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
 */ const WT = new Cl(2e3, 1e4);
async function e3(a, t, i) {
  if (On(a.app))
    return Promise.reject(Hn(a, "operation-not-supported-in-this-environment"));
  const l = pr(a);
  NS(a, t, ch);
  const s = Qv(l, i);
  return new Gr(l, "signInViaPopup", t, s).executeNotNull();
}
class Gr extends Zv {
  constructor(t, i, l, s, u) {
    super(t, i, s, u),
      (this.provider = l),
      (this.authWindow = null),
      (this.pollId = null),
      Gr.currentPopupAction && Gr.currentPopupAction.cancel(),
      (Gr.currentPopupAction = this);
  }
  async executeNotNull() {
    const t = await this.execute();
    return Te(t, this.auth, "internal-error"), t;
  }
  async onExecution() {
    Ta(this.filter.length === 1, "Popup operations only handle one event");
    const t = uh();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      t
    )),
      (this.authWindow.associatedEvent = t),
      this.resolver._originValidation(this.auth).catch((i) => {
        this.reject(i);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (i) => {
        i || this.reject(Hn(this.auth, "web-storage-unsupported"));
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
    this.reject(Hn(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (Gr.currentPopupAction = null);
  }
  pollUserCancellation() {
    const t = () => {
      var i, l;
      if (
        !(
          (l =
            (i = this.authWindow) === null || i === void 0
              ? void 0
              : i.window) === null || l === void 0
        ) &&
        l.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(Hn(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(t, WT.get());
    };
    t();
  }
}
Gr.currentPopupAction = null;
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
 */ const t3 = "pendingRedirect",
  cc = new Map();
class n3 extends Zv {
  constructor(t, i, l = !1) {
    super(
      t,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      i,
      void 0,
      l
    ),
      (this.eventId = null);
  }
  async execute() {
    let t = cc.get(this.auth._key());
    if (!t) {
      try {
        const l = (await a3(this.resolver, this.auth))
          ? await super.execute()
          : null;
        t = () => Promise.resolve(l);
      } catch (i) {
        t = () => Promise.reject(i);
      }
      cc.set(this.auth._key(), t);
    }
    return (
      this.bypassAuthState ||
        cc.set(this.auth._key(), () => Promise.resolve(null)),
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
      const i = await this.auth._redirectUserForId(t.eventId);
      if (i) return (this.user = i), super.onAuthEvent(t);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function a3(a, t) {
  const i = o3(t),
    l = i3(a);
  if (!(await l._isAvailable())) return !1;
  const s = (await l._get(i)) === "true";
  return await l._remove(i), s;
}
function r3(a, t) {
  cc.set(a._key(), t);
}
function i3(a) {
  return xa(a._redirectPersistence);
}
function o3(a) {
  return sc(t3, a.config.apiKey, a.name);
}
async function l3(a, t, i = !1) {
  if (On(a.app)) return Promise.reject(_a(a));
  const l = pr(a),
    s = Qv(l, t),
    f = await new n3(l, s, i).execute();
  return (
    f &&
      !i &&
      (delete f.user._redirectEventId,
      await l._persistUserIfCurrent(f.user),
      await l._setRedirectUser(null, t)),
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
 */ const s3 = 10 * 60 * 1e3;
class c3 {
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
    let i = !1;
    return (
      this.consumers.forEach((l) => {
        this.isEventForConsumer(t, l) &&
          ((i = !0), this.sendToConsumer(t, l), this.saveEventToCache(t));
      }),
      this.hasHandledPotentialRedirect ||
        !u3(t) ||
        ((this.hasHandledPotentialRedirect = !0),
        i || ((this.queuedRedirectEvent = t), (i = !0))),
      i
    );
  }
  sendToConsumer(t, i) {
    var l;
    if (t.error && !Jv(t)) {
      const s =
        ((l = t.error.code) === null || l === void 0
          ? void 0
          : l.split("auth/")[1]) || "internal-error";
      i.onError(Hn(this.auth, s));
    } else i.onAuthEvent(t);
  }
  isEventForConsumer(t, i) {
    const l = i.eventId === null || (!!t.eventId && t.eventId === i.eventId);
    return i.filter.includes(t.type) && l;
  }
  hasEventBeenHandled(t) {
    return (
      Date.now() - this.lastProcessedEventTime >= s3 &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(sy(t))
    );
  }
  saveEventToCache(t) {
    this.cachedEventUids.add(sy(t)), (this.lastProcessedEventTime = Date.now());
  }
}
function sy(a) {
  return [a.type, a.eventId, a.sessionId, a.tenantId]
    .filter((t) => t)
    .join("-");
}
function Jv({ type: a, error: t }) {
  return (
    a === "unknown" && (t == null ? void 0 : t.code) === "auth/no-auth-event"
  );
}
function u3(a) {
  switch (a.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Jv(a);
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
 */ async function d3(a, t = {}) {
  return Aa(a, "GET", "/v1/projects", t);
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
 */ const f3 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  h3 = /^https?/;
async function m3(a) {
  if (a.config.emulator) return;
  const { authorizedDomains: t } = await d3(a);
  for (const i of t)
    try {
      if (p3(i)) return;
    } catch {}
  Nn(a, "unauthorized-domain");
}
function p3(a) {
  const t = Mf(),
    { protocol: i, hostname: l } = new URL(t);
  if (a.startsWith("chrome-extension://")) {
    const f = new URL(a);
    return f.hostname === "" && l === ""
      ? i === "chrome-extension:" &&
          a.replace("chrome-extension://", "") ===
            t.replace("chrome-extension://", "")
      : i === "chrome-extension:" && f.hostname === l;
  }
  if (!h3.test(i)) return !1;
  if (f3.test(a)) return l === a;
  const s = a.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + s + "|" + s + ")$", "i").test(l);
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
 */ const g3 = new Cl(3e4, 6e4);
function cy() {
  const a = Jn().___jsl;
  if (a != null && a.H) {
    for (const t of Object.keys(a.H))
      if (
        ((a.H[t].r = a.H[t].r || []),
        (a.H[t].L = a.H[t].L || []),
        (a.H[t].r = [...a.H[t].L]),
        a.CP)
      )
        for (let i = 0; i < a.CP.length; i++) a.CP[i] = null;
  }
}
function y3(a) {
  return new Promise((t, i) => {
    var l, s, u;
    function f() {
      cy(),
        gapi.load("gapi.iframes", {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            cy(), i(Hn(a, "network-request-failed"));
          },
          timeout: g3.get(),
        });
    }
    if (
      !(
        (s = (l = Jn().gapi) === null || l === void 0 ? void 0 : l.iframes) ===
          null || s === void 0
      ) &&
      s.Iframe
    )
      t(gapi.iframes.getContext());
    else if (!((u = Jn().gapi) === null || u === void 0) && u.load) f();
    else {
      const m = oT("iframefcb");
      return (
        (Jn()[m] = () => {
          gapi.load ? f() : i(Hn(a, "network-request-failed"));
        }),
        zv(`${iT()}?onload=${m}`).catch((h) => i(h))
      );
    }
  }).catch((t) => {
    throw ((uc = null), t);
  });
}
let uc = null;
function v3(a) {
  return (uc = uc || y3(a)), uc;
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
 */ const b3 = new Cl(5e3, 15e3),
  w3 = "__/auth/iframe",
  x3 = "emulator/auth/iframe",
  _3 = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  E3 = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function S3(a) {
  const t = a.config;
  Te(t.authDomain, a, "auth-domain-config-required");
  const i = t.emulator ? rh(t, x3) : `https://${a.config.authDomain}/${w3}`,
    l = { apiKey: t.apiKey, appName: a.name, v: Tl },
    s = E3.get(a.config.apiHost);
  s && (l.eid = s);
  const u = a._getFrameworks();
  return u.length && (l.fw = u.join(",")), `${i}?${Sl(l).slice(1)}`;
}
async function T3(a) {
  const t = await v3(a),
    i = Jn().gapi;
  return (
    Te(i, a, "internal-error"),
    t.open(
      {
        where: document.body,
        url: S3(a),
        messageHandlersFilter: i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: _3,
        dontclear: !0,
      },
      (l) =>
        new Promise(async (s, u) => {
          await l.restyle({ setHideOnLeave: !1 });
          const f = Hn(a, "network-request-failed"),
            m = Jn().setTimeout(() => {
              u(f);
            }, b3.get());
          function h() {
            Jn().clearTimeout(m), s(l);
          }
          l.ping(h).then(h, () => {
            u(f);
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
 */ const C3 = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  A3 = 500,
  R3 = 600,
  O3 = "_blank",
  k3 = "http://localhost";
class uy {
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
function N3(a, t, i, l = A3, s = R3) {
  const u = Math.max((window.screen.availHeight - s) / 2, 0).toString(),
    f = Math.max((window.screen.availWidth - l) / 2, 0).toString();
  let m = "";
  const h = Object.assign(Object.assign({}, C3), {
      width: l.toString(),
      height: s.toString(),
      top: u,
      left: f,
    }),
    p = Yt().toLowerCase();
  i && (m = Ov(p) ? O3 : i), Av(p) && ((t = t || k3), (h.scrollbars = "yes"));
  const b = Object.entries(h).reduce((w, [T, A]) => `${w}${T}=${A},`, "");
  if (QS(p) && m !== "_self") return D3(t || "", m), new uy(null);
  const x = window.open(t || "", m, b);
  Te(x, a, "popup-blocked");
  try {
    x.focus();
  } catch {}
  return new uy(x);
}
function D3(a, t) {
  const i = document.createElement("a");
  (i.href = a), (i.target = t);
  const l = document.createEvent("MouseEvent");
  l.initMouseEvent(
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
    i.dispatchEvent(l);
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
 */ const M3 = "__/auth/handler",
  j3 = "emulator/auth/handler",
  L3 = encodeURIComponent("fac");
async function dy(a, t, i, l, s, u) {
  Te(a.config.authDomain, a, "auth-domain-config-required"),
    Te(a.config.apiKey, a, "invalid-api-key");
  const f = {
    apiKey: a.config.apiKey,
    appName: a.name,
    authType: i,
    redirectUrl: l,
    v: Tl,
    eventId: s,
  };
  if (t instanceof ch) {
    t.setDefaultLanguage(a.languageCode),
      (f.providerId = t.providerId || ""),
      gE(t.getCustomParameters()) ||
        (f.customParameters = JSON.stringify(t.getCustomParameters()));
    for (const [b, x] of Object.entries({})) f[b] = x;
  }
  if (t instanceof Rl) {
    const b = t.getScopes().filter((x) => x !== "");
    b.length > 0 && (f.scopes = b.join(","));
  }
  a.tenantId && (f.tid = a.tenantId);
  const m = f;
  for (const b of Object.keys(m)) m[b] === void 0 && delete m[b];
  const h = await a._getAppCheckToken(),
    p = h ? `#${L3}=${encodeURIComponent(h)}` : "";
  return `${z3(a)}?${Sl(m).slice(1)}${p}`;
}
function z3({ config: a }) {
  return a.emulator ? rh(a, j3) : `https://${a.authDomain}/${M3}`;
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
 */ const wf = "webStorageSupport";
class U3 {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = $v),
      (this._completeRedirectFn = l3),
      (this._overrideRedirectResult = r3);
  }
  async _openPopup(t, i, l, s) {
    var u;
    Ta(
      (u = this.eventManagers[t._key()]) === null || u === void 0
        ? void 0
        : u.manager,
      "_initialize() not called before _openPopup()"
    );
    const f = await dy(t, i, l, Mf(), s);
    return N3(t, f, uh());
  }
  async _openRedirect(t, i, l, s) {
    await this._originValidation(t);
    const u = await dy(t, i, l, Mf(), s);
    return HT(u), new Promise(() => {});
  }
  _initialize(t) {
    const i = t._key();
    if (this.eventManagers[i]) {
      const { manager: s, promise: u } = this.eventManagers[i];
      return s
        ? Promise.resolve(s)
        : (Ta(u, "If manager is not set, promise should be"), u);
    }
    const l = this.initAndGetManager(t);
    return (
      (this.eventManagers[i] = { promise: l }),
      l.catch(() => {
        delete this.eventManagers[i];
      }),
      l
    );
  }
  async initAndGetManager(t) {
    const i = await T3(t),
      l = new c3(t);
    return (
      i.register(
        "authEvent",
        (s) => (
          Te(s == null ? void 0 : s.authEvent, t, "invalid-auth-event"),
          { status: l.onEvent(s.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[t._key()] = { manager: l }),
      (this.iframes[t._key()] = i),
      l
    );
  }
  _isIframeWebStorageSupported(t, i) {
    this.iframes[t._key()].send(
      wf,
      { type: wf },
      (s) => {
        var u;
        const f =
          (u = s == null ? void 0 : s[0]) === null || u === void 0
            ? void 0
            : u[wf];
        f !== void 0 && i(!!f), Nn(t, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(t) {
    const i = t._key();
    return (
      this.originValidationPromises[i] ||
        (this.originValidationPromises[i] = m3(t)),
      this.originValidationPromises[i]
    );
  }
  get _shouldInitProactively() {
    return jv() || Rv() || oh();
  }
}
const I3 = U3;
var fy = "@firebase/auth",
  hy = "1.10.4";
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
 */ class B3 {
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
    const i = this.auth.onIdTokenChanged((l) => {
      t((l == null ? void 0 : l.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(t, i), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(t) {
    this.assertAuthConfigured();
    const i = this.internalListeners.get(t);
    i && (this.internalListeners.delete(t), i(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    Te(
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
 */ function H3(a) {
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
function P3(a) {
  gl(
    new Yi(
      "auth",
      (t, { options: i }) => {
        const l = t.getProvider("app").getImmediate(),
          s = t.getProvider("heartbeat"),
          u = t.getProvider("app-check-internal"),
          { apiKey: f, authDomain: m } = l.options;
        Te(f && !f.includes(":"), "invalid-api-key", { appName: l.name });
        const h = {
            apiKey: f,
            authDomain: m,
            clientPlatform: a,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: Lv(a),
          },
          p = new nT(l, s, u, h);
        return fT(p, i), p;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((t, i, l) => {
        t.getProvider("auth-internal").initialize();
      })
  ),
    gl(
      new Yi(
        "auth-internal",
        (t) => {
          const i = pr(t.getProvider("auth").getImmediate());
          return ((l) => new B3(l))(i);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    Bi(fy, hy, H3(a)),
    Bi(fy, hy, "esm2017");
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
 */ const V3 = 5 * 60,
  q3 = dv("authIdTokenMaxAge") || V3;
let my = null;
const G3 = (a) => async (t) => {
  const i = t && (await t.getIdTokenResult()),
    l = i && (new Date().getTime() - Date.parse(i.issuedAtTime)) / 1e3;
  if (l && l > q3) return;
  const s = i == null ? void 0 : i.token;
  my !== s &&
    ((my = s),
    await fetch(a, {
      method: s ? "POST" : "DELETE",
      headers: s ? { Authorization: `Bearer ${s}` } : {},
    }));
};
function $3(a = vS()) {
  const t = gv(a, "auth");
  if (t.isInitialized()) return t.getImmediate();
  const i = dT(a, { popupRedirectResolver: I3, persistence: [FT, UT, $v] }),
    l = dv("authTokenSyncURL");
  if (l && typeof isSecureContext == "boolean" && isSecureContext) {
    const u = new URL(l, location.origin);
    if (location.origin === u.origin) {
      const f = G3(u.toString());
      DT(i, f, () => f(i.currentUser)), NT(i, (m) => f(m));
    }
  }
  const s = tE("auth");
  return s ? hT(i, `http://${s}`) : fv("Auth", !1), i;
}
function Y3() {
  var a, t;
  return (t =
    (a = document.getElementsByTagName("head")) === null || a === void 0
      ? void 0
      : a[0]) !== null && t !== void 0
    ? t
    : document;
}
aT({
  loadJS(a) {
    return new Promise((t, i) => {
      const l = document.createElement("script");
      l.setAttribute("src", a),
        (l.onload = t),
        (l.onerror = (s) => {
          const u = Hn("internal-error");
          (u.customData = s), i(u);
        }),
        (l.type = "text/javascript"),
        (l.charset = "UTF-8"),
        Y3().appendChild(l);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript:
    "https://www.google.com/recaptcha/enterprise.js?render=",
});
P3("Browser");
var X3 = "firebase",
  K3 = "11.7.3";
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
 */ Bi(X3, K3, "app");
const F3 = {
    apiKey: "AIzaSyBOz2CpiZrWijPT4ePrfm8MEUUzJ9fEgSU",
    authDomain: "hobby-hub-auth.firebaseapp.com",
    projectId: "hobby-hub-auth",
    storageBucket: "hobby-hub-auth.firebasestorage.app",
    messagingSenderId: "1047856974536",
    appId: "1:1047856974536:web:228d111b5c61c92ce673fd",
  },
  Q3 = yv(F3),
  zi = $3(Q3),
  gr = R.createContext(),
  Z3 = new ba(),
  J3 = ({ children: a }) => {
    const [t, i] = R.useState(null),
      [l, s] = R.useState(!0),
      u = () => e3(zi, Z3),
      f = (x, w) => (s(!0), AT(zi, x, w)),
      m = (x, w) => (s(!0), RT(zi, x, w)),
      h = () => jT(zi),
      p = (x) => kT(zi.currentUser, x);
    R.useEffect(() => {
      const x = MT(zi, (w) => {
        i(w), s(!1);
      });
      return () => x();
    }, []);
    const b = {
      googleLogin: u,
      createUser: f,
      loginUser: m,
      logoutUser: h,
      updateUser: p,
      user: t,
      setUser: i,
      loader: l,
      setLoader: s,
    };
    return y.jsx(gr.Provider, { value: b, children: a });
  };
/*!
 * sweetalert2 v11.21.2
 * Released under the MIT License.
 */ function Wv(a, t, i) {
  if (typeof a == "function" ? a === t : a.has(t))
    return arguments.length < 3 ? t : i;
  throw new TypeError("Private element is not present on this object");
}
function W3(a, t) {
  if (t.has(a))
    throw new TypeError(
      "Cannot initialize the same private elements twice on an object"
    );
}
function py(a, t) {
  return a.get(Wv(a, t));
}
function e4(a, t, i) {
  W3(a, t), t.set(a, i);
}
function t4(a, t, i) {
  return a.set(Wv(a, t), i), i;
}
const n4 = 100,
  ve = {},
  a4 = () => {
    ve.previousActiveElement instanceof HTMLElement
      ? (ve.previousActiveElement.focus(), (ve.previousActiveElement = null))
      : document.body && document.body.focus();
  },
  r4 = (a) =>
    new Promise((t) => {
      if (!a) return t();
      const i = window.scrollX,
        l = window.scrollY;
      (ve.restoreFocusTimeout = setTimeout(() => {
        a4(), t();
      }, n4)),
        window.scrollTo(i, l);
    }),
  eb = "swal2-",
  i4 = [
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
  q = i4.reduce((a, t) => ((a[t] = eb + t), a), {}),
  o4 = ["success", "warning", "info", "question", "error"],
  Tc = o4.reduce((a, t) => ((a[t] = eb + t), a), {}),
  tb = "SweetAlert2:",
  fh = (a) => a.charAt(0).toUpperCase() + a.slice(1),
  Xt = (a) => {
    console.warn(`${tb} ${typeof a == "object" ? a.join(" ") : a}`);
  },
  Jr = (a) => {
    console.error(`${tb} ${a}`);
  },
  gy = [],
  l4 = (a) => {
    gy.includes(a) || (gy.push(a), Xt(a));
  },
  nb = (a, t = null) => {
    l4(
      `"${a}" is deprecated and will be removed in the next major release.${
        t ? ` Use "${t}" instead.` : ""
      }`
    );
  },
  qc = (a) => (typeof a == "function" ? a() : a),
  hh = (a) => a && typeof a.toPromise == "function",
  kl = (a) => (hh(a) ? a.toPromise() : Promise.resolve(a)),
  mh = (a) => a && Promise.resolve(a) === a,
  Kt = () => document.body.querySelector(`.${q.container}`),
  Nl = (a) => {
    const t = Kt();
    return t ? t.querySelector(a) : null;
  },
  pn = (a) => Nl(`.${a}`),
  Xe = () => pn(q.popup),
  Ji = () => pn(q.icon),
  s4 = () => pn(q["icon-content"]),
  ab = () => pn(q.title),
  ph = () => pn(q["html-container"]),
  rb = () => pn(q.image),
  gh = () => pn(q["progress-steps"]),
  Gc = () => pn(q["validation-message"]),
  Wn = () => Nl(`.${q.actions} .${q.confirm}`),
  Wi = () => Nl(`.${q.actions} .${q.cancel}`),
  Wr = () => Nl(`.${q.actions} .${q.deny}`),
  c4 = () => pn(q["input-label"]),
  eo = () => Nl(`.${q.loader}`),
  Dl = () => pn(q.actions),
  ib = () => pn(q.footer),
  $c = () => pn(q["timer-progress-bar"]),
  yh = () => pn(q.close),
  u4 = `
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
  vh = () => {
    const a = Xe();
    if (!a) return [];
    const t = a.querySelectorAll(
        '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
      ),
      i = Array.from(t).sort((u, f) => {
        const m = parseInt(u.getAttribute("tabindex") || "0"),
          h = parseInt(f.getAttribute("tabindex") || "0");
        return m > h ? 1 : m < h ? -1 : 0;
      }),
      l = a.querySelectorAll(u4),
      s = Array.from(l).filter((u) => u.getAttribute("tabindex") !== "-1");
    return [...new Set(i.concat(s))].filter((u) => nn(u));
  },
  bh = () =>
    Ea(document.body, q.shown) &&
    !Ea(document.body, q["toast-shown"]) &&
    !Ea(document.body, q["no-backdrop"]),
  Yc = () => {
    const a = Xe();
    return a ? Ea(a, q.toast) : !1;
  },
  d4 = () => {
    const a = Xe();
    return a ? a.hasAttribute("data-loading") : !1;
  },
  gn = (a, t) => {
    if (((a.textContent = ""), t)) {
      const l = new DOMParser().parseFromString(t, "text/html"),
        s = l.querySelector("head");
      s &&
        Array.from(s.childNodes).forEach((f) => {
          a.appendChild(f);
        });
      const u = l.querySelector("body");
      u &&
        Array.from(u.childNodes).forEach((f) => {
          f instanceof HTMLVideoElement || f instanceof HTMLAudioElement
            ? a.appendChild(f.cloneNode(!0))
            : a.appendChild(f);
        });
    }
  },
  Ea = (a, t) => {
    if (!t) return !1;
    const i = t.split(/\s+/);
    for (let l = 0; l < i.length; l++)
      if (!a.classList.contains(i[l])) return !1;
    return !0;
  },
  f4 = (a, t) => {
    Array.from(a.classList).forEach((i) => {
      !Object.values(q).includes(i) &&
        !Object.values(Tc).includes(i) &&
        !Object.values(t.showClass || {}).includes(i) &&
        a.classList.remove(i);
    });
  },
  mn = (a, t, i) => {
    if ((f4(a, t), !t.customClass)) return;
    const l = t.customClass[i];
    if (l) {
      if (typeof l != "string" && !l.forEach) {
        Xt(
          `Invalid type of customClass.${i}! Expected string or iterable object, got "${typeof l}"`
        );
        return;
      }
      Fe(a, l);
    }
  },
  Xc = (a, t) => {
    if (!t) return null;
    switch (t) {
      case "select":
      case "textarea":
      case "file":
        return a.querySelector(`.${q.popup} > .${q[t]}`);
      case "checkbox":
        return a.querySelector(`.${q.popup} > .${q.checkbox} input`);
      case "radio":
        return (
          a.querySelector(`.${q.popup} > .${q.radio} input:checked`) ||
          a.querySelector(`.${q.popup} > .${q.radio} input:first-child`)
        );
      case "range":
        return a.querySelector(`.${q.popup} > .${q.range} input`);
      default:
        return a.querySelector(`.${q.popup} > .${q.input}`);
    }
  },
  ob = (a) => {
    if ((a.focus(), a.type !== "file")) {
      const t = a.value;
      (a.value = ""), (a.value = t);
    }
  },
  lb = (a, t, i) => {
    !a ||
      !t ||
      (typeof t == "string" && (t = t.split(/\s+/).filter(Boolean)),
      t.forEach((l) => {
        Array.isArray(a)
          ? a.forEach((s) => {
              i ? s.classList.add(l) : s.classList.remove(l);
            })
          : i
          ? a.classList.add(l)
          : a.classList.remove(l);
      }));
  },
  Fe = (a, t) => {
    lb(a, t, !0);
  },
  Dn = (a, t) => {
    lb(a, t, !1);
  },
  lr = (a, t) => {
    const i = Array.from(a.children);
    for (let l = 0; l < i.length; l++) {
      const s = i[l];
      if (s instanceof HTMLElement && Ea(s, t)) return s;
    }
  },
  $r = (a, t, i) => {
    i === `${parseInt(i)}` && (i = parseInt(i)),
      i || parseInt(i) === 0
        ? a.style.setProperty(t, typeof i == "number" ? `${i}px` : i)
        : a.style.removeProperty(t);
  },
  Nt = (a, t = "flex") => {
    a && (a.style.display = t);
  },
  Vt = (a) => {
    a && (a.style.display = "none");
  },
  wh = (a, t = "block") => {
    a &&
      new MutationObserver(() => {
        Ml(a, a.innerHTML, t);
      }).observe(a, { childList: !0, subtree: !0 });
  },
  yy = (a, t, i, l) => {
    const s = a.querySelector(t);
    s && s.style.setProperty(i, l);
  },
  Ml = (a, t, i = "flex") => {
    t ? Nt(a, i) : Vt(a);
  },
  nn = (a) =>
    !!(a && (a.offsetWidth || a.offsetHeight || a.getClientRects().length)),
  h4 = () => !nn(Wn()) && !nn(Wr()) && !nn(Wi()),
  Uf = (a) => a.scrollHeight > a.clientHeight,
  m4 = (a, t) => {
    let i = a;
    for (; i && i !== t; ) {
      if (Uf(i)) return !0;
      i = i.parentElement;
    }
    return !1;
  },
  sb = (a) => {
    const t = window.getComputedStyle(a),
      i = parseFloat(t.getPropertyValue("animation-duration") || "0"),
      l = parseFloat(t.getPropertyValue("transition-duration") || "0");
    return i > 0 || l > 0;
  },
  xh = (a, t = !1) => {
    const i = $c();
    i &&
      nn(i) &&
      (t && ((i.style.transition = "none"), (i.style.width = "100%")),
      setTimeout(() => {
        (i.style.transition = `width ${a / 1e3}s linear`),
          (i.style.width = "0%");
      }, 10));
  },
  p4 = () => {
    const a = $c();
    if (!a) return;
    const t = parseInt(window.getComputedStyle(a).width);
    a.style.removeProperty("transition"), (a.style.width = "100%");
    const i = parseInt(window.getComputedStyle(a).width),
      l = (t / i) * 100;
    a.style.width = `${l}%`;
  },
  g4 = () => typeof window > "u" || typeof document > "u",
  y4 = `
 <div aria-labelledby="${q.title}" aria-describedby="${q["html-container"]}" class="${q.popup}" tabindex="-1">
   <button type="button" class="${q.close}"></button>
   <ul class="${q["progress-steps"]}"></ul>
   <div class="${q.icon}"></div>
   <img class="${q.image}" />
   <h2 class="${q.title}" id="${q.title}"></h2>
   <div class="${q["html-container"]}" id="${q["html-container"]}"></div>
   <input class="${q.input}" id="${q.input}" />
   <input type="file" class="${q.file}" />
   <div class="${q.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${q.select}" id="${q.select}"></select>
   <div class="${q.radio}"></div>
   <label class="${q.checkbox}">
     <input type="checkbox" id="${q.checkbox}" />
     <span class="${q.label}"></span>
   </label>
   <textarea class="${q.textarea}" id="${q.textarea}"></textarea>
   <div class="${q["validation-message"]}" id="${q["validation-message"]}"></div>
   <div class="${q.actions}">
     <div class="${q.loader}"></div>
     <button type="button" class="${q.confirm}"></button>
     <button type="button" class="${q.deny}"></button>
     <button type="button" class="${q.cancel}"></button>
   </div>
   <div class="${q.footer}"></div>
   <div class="${q["timer-progress-bar-container"]}">
     <div class="${q["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ""),
  v4 = () => {
    const a = Kt();
    return a
      ? (a.remove(),
        Dn(
          [document.documentElement, document.body],
          [q["no-backdrop"], q["toast-shown"], q["has-column"]]
        ),
        !0)
      : !1;
  },
  Hr = () => {
    ve.currentInstance.resetValidationMessage();
  },
  b4 = () => {
    const a = Xe(),
      t = lr(a, q.input),
      i = lr(a, q.file),
      l = a.querySelector(`.${q.range} input`),
      s = a.querySelector(`.${q.range} output`),
      u = lr(a, q.select),
      f = a.querySelector(`.${q.checkbox} input`),
      m = lr(a, q.textarea);
    (t.oninput = Hr),
      (i.onchange = Hr),
      (u.onchange = Hr),
      (f.onchange = Hr),
      (m.oninput = Hr),
      (l.oninput = () => {
        Hr(), (s.value = l.value);
      }),
      (l.onchange = () => {
        Hr(), (s.value = l.value);
      });
  },
  w4 = (a) => (typeof a == "string" ? document.querySelector(a) : a),
  x4 = (a) => {
    const t = Xe();
    t.setAttribute("role", a.toast ? "alert" : "dialog"),
      t.setAttribute("aria-live", a.toast ? "polite" : "assertive"),
      a.toast || t.setAttribute("aria-modal", "true");
  },
  _4 = (a) => {
    window.getComputedStyle(a).direction === "rtl" && Fe(Kt(), q.rtl);
  },
  E4 = (a) => {
    const t = v4();
    if (g4()) {
      Jr("SweetAlert2 requires document to initialize");
      return;
    }
    const i = document.createElement("div");
    (i.className = q.container),
      t && Fe(i, q["no-transition"]),
      gn(i, y4),
      (i.dataset.swal2Theme = a.theme);
    const l = w4(a.target);
    l.appendChild(i),
      a.topLayer && (i.setAttribute("popover", ""), i.showPopover()),
      x4(a),
      _4(l),
      b4();
  },
  _h = (a, t) => {
    a instanceof HTMLElement
      ? t.appendChild(a)
      : typeof a == "object"
      ? S4(a, t)
      : a && gn(t, a);
  },
  S4 = (a, t) => {
    a.jquery ? T4(t, a) : gn(t, a.toString());
  },
  T4 = (a, t) => {
    if (((a.textContent = ""), 0 in t))
      for (let i = 0; i in t; i++) a.appendChild(t[i].cloneNode(!0));
    else a.appendChild(t.cloneNode(!0));
  },
  C4 = (a, t) => {
    const i = Dl(),
      l = eo();
    !i ||
      !l ||
      (!t.showConfirmButton && !t.showDenyButton && !t.showCancelButton
        ? Vt(i)
        : Nt(i),
      mn(i, t, "actions"),
      A4(i, l, t),
      gn(l, t.loaderHtml || ""),
      mn(l, t, "loader"));
  };
function A4(a, t, i) {
  const l = Wn(),
    s = Wr(),
    u = Wi();
  !l ||
    !s ||
    !u ||
    (_f(l, "confirm", i),
    _f(s, "deny", i),
    _f(u, "cancel", i),
    R4(l, s, u, i),
    i.reverseButtons &&
      (i.toast
        ? (a.insertBefore(u, l), a.insertBefore(s, l))
        : (a.insertBefore(u, t), a.insertBefore(s, t), a.insertBefore(l, t))));
}
function R4(a, t, i, l) {
  if (!l.buttonsStyling) {
    Dn([a, t, i], q.styled);
    return;
  }
  Fe([a, t, i], q.styled),
    l.confirmButtonColor &&
      a.style.setProperty(
        "--swal2-confirm-button-background-color",
        l.confirmButtonColor
      ),
    l.denyButtonColor &&
      t.style.setProperty(
        "--swal2-deny-button-background-color",
        l.denyButtonColor
      ),
    l.cancelButtonColor &&
      i.style.setProperty(
        "--swal2-cancel-button-background-color",
        l.cancelButtonColor
      ),
    xf(a),
    xf(t),
    xf(i);
}
function xf(a) {
  const t = window.getComputedStyle(a),
    i = t.backgroundColor.replace(
      /rgba?\((\d+), (\d+), (\d+).*/,
      "rgba($1, $2, $3, 0.5)"
    );
  a.style.setProperty(
    "--swal2-action-button-outline",
    t.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/, ` ${i}`)
  );
}
function _f(a, t, i) {
  const l = fh(t);
  Ml(a, i[`show${l}Button`], "inline-block"),
    gn(a, i[`${t}ButtonText`] || ""),
    a.setAttribute("aria-label", i[`${t}ButtonAriaLabel`] || ""),
    (a.className = q[t]),
    mn(a, i, `${t}Button`);
}
const O4 = (a, t) => {
    const i = yh();
    i &&
      (gn(i, t.closeButtonHtml || ""),
      mn(i, t, "closeButton"),
      Ml(i, t.showCloseButton),
      i.setAttribute("aria-label", t.closeButtonAriaLabel || ""));
  },
  k4 = (a, t) => {
    const i = Kt();
    i &&
      (N4(i, t.backdrop),
      D4(i, t.position),
      M4(i, t.grow),
      mn(i, t, "container"));
  };
function N4(a, t) {
  typeof t == "string"
    ? (a.style.background = t)
    : t || Fe([document.documentElement, document.body], q["no-backdrop"]);
}
function D4(a, t) {
  t &&
    (t in q
      ? Fe(a, q[t])
      : (Xt('The "position" parameter is not valid, defaulting to "center"'),
        Fe(a, q.center)));
}
function M4(a, t) {
  t && Fe(a, q[`grow-${t}`]);
}
var ot = { innerParams: new WeakMap(), domCache: new WeakMap() };
const j4 = [
    "input",
    "file",
    "range",
    "select",
    "radio",
    "checkbox",
    "textarea",
  ],
  L4 = (a, t) => {
    const i = Xe();
    if (!i) return;
    const l = ot.innerParams.get(a),
      s = !l || t.input !== l.input;
    j4.forEach((u) => {
      const f = lr(i, q[u]);
      f && (I4(u, t.inputAttributes), (f.className = q[u]), s && Vt(f));
    }),
      t.input && (s && z4(t), B4(t));
  },
  z4 = (a) => {
    if (!a.input) return;
    if (!vt[a.input]) {
      Jr(
        `Unexpected type of input! Expected ${Object.keys(vt).join(
          " | "
        )}, got "${a.input}"`
      );
      return;
    }
    const t = cb(a.input);
    if (!t) return;
    const i = vt[a.input](t, a);
    Nt(t),
      a.inputAutoFocus &&
        setTimeout(() => {
          ob(i);
        });
  },
  U4 = (a) => {
    for (let t = 0; t < a.attributes.length; t++) {
      const i = a.attributes[t].name;
      ["id", "type", "value", "style"].includes(i) || a.removeAttribute(i);
    }
  },
  I4 = (a, t) => {
    const i = Xe();
    if (!i) return;
    const l = Xc(i, a);
    if (l) {
      U4(l);
      for (const s in t) l.setAttribute(s, t[s]);
    }
  },
  B4 = (a) => {
    if (!a.input) return;
    const t = cb(a.input);
    t && mn(t, a, "input");
  },
  Eh = (a, t) => {
    !a.placeholder &&
      t.inputPlaceholder &&
      (a.placeholder = t.inputPlaceholder);
  },
  jl = (a, t, i) => {
    if (i.inputLabel) {
      const l = document.createElement("label"),
        s = q["input-label"];
      l.setAttribute("for", a.id),
        (l.className = s),
        typeof i.customClass == "object" && Fe(l, i.customClass.inputLabel),
        (l.innerText = i.inputLabel),
        t.insertAdjacentElement("beforebegin", l);
    }
  },
  cb = (a) => {
    const t = Xe();
    if (t) return lr(t, q[a] || q.input);
  },
  Cc = (a, t) => {
    ["string", "number"].includes(typeof t)
      ? (a.value = `${t}`)
      : mh(t) ||
        Xt(
          `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`
        );
  },
  vt = {};
vt.text =
  vt.email =
  vt.password =
  vt.number =
  vt.tel =
  vt.url =
  vt.search =
  vt.date =
  vt["datetime-local"] =
  vt.time =
  vt.week =
  vt.month =
    (a, t) => (
      Cc(a, t.inputValue), jl(a, a, t), Eh(a, t), (a.type = t.input), a
    );
vt.file = (a, t) => (jl(a, a, t), Eh(a, t), a);
vt.range = (a, t) => {
  const i = a.querySelector("input"),
    l = a.querySelector("output");
  return (
    Cc(i, t.inputValue), (i.type = t.input), Cc(l, t.inputValue), jl(i, a, t), a
  );
};
vt.select = (a, t) => {
  if (((a.textContent = ""), t.inputPlaceholder)) {
    const i = document.createElement("option");
    gn(i, t.inputPlaceholder),
      (i.value = ""),
      (i.disabled = !0),
      (i.selected = !0),
      a.appendChild(i);
  }
  return jl(a, a, t), a;
};
vt.radio = (a) => ((a.textContent = ""), a);
vt.checkbox = (a, t) => {
  const i = Xc(Xe(), "checkbox");
  (i.value = "1"), (i.checked = !!t.inputValue);
  const l = a.querySelector("span");
  return gn(l, t.inputPlaceholder || t.inputLabel), i;
};
vt.textarea = (a, t) => {
  Cc(a, t.inputValue), Eh(a, t), jl(a, a, t);
  const i = (l) =>
    parseInt(window.getComputedStyle(l).marginLeft) +
    parseInt(window.getComputedStyle(l).marginRight);
  return (
    setTimeout(() => {
      if ("MutationObserver" in window) {
        const l = parseInt(window.getComputedStyle(Xe()).width),
          s = () => {
            if (!document.body.contains(a)) return;
            const u = a.offsetWidth + i(a);
            u > l ? (Xe().style.width = `${u}px`) : $r(Xe(), "width", t.width);
          };
        new MutationObserver(s).observe(a, {
          attributes: !0,
          attributeFilter: ["style"],
        });
      }
    }),
    a
  );
};
const H4 = (a, t) => {
    const i = ph();
    i &&
      (wh(i),
      mn(i, t, "htmlContainer"),
      t.html
        ? (_h(t.html, i), Nt(i, "block"))
        : t.text
        ? ((i.textContent = t.text), Nt(i, "block"))
        : Vt(i),
      L4(a, t));
  },
  P4 = (a, t) => {
    const i = ib();
    i &&
      (wh(i),
      Ml(i, t.footer, "block"),
      t.footer && _h(t.footer, i),
      mn(i, t, "footer"));
  },
  V4 = (a, t) => {
    const i = ot.innerParams.get(a),
      l = Ji();
    if (!l) return;
    if (i && t.icon === i.icon) {
      by(l, t), vy(l, t);
      return;
    }
    if (!t.icon && !t.iconHtml) {
      Vt(l);
      return;
    }
    if (t.icon && Object.keys(Tc).indexOf(t.icon) === -1) {
      Jr(
        `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`
      ),
        Vt(l);
      return;
    }
    Nt(l),
      by(l, t),
      vy(l, t),
      Fe(l, t.showClass && t.showClass.icon),
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", ub);
  },
  vy = (a, t) => {
    for (const [i, l] of Object.entries(Tc)) t.icon !== i && Dn(a, l);
    Fe(a, t.icon && Tc[t.icon]), $4(a, t), ub(), mn(a, t, "icon");
  },
  ub = () => {
    const a = Xe();
    if (!a) return;
    const t = window.getComputedStyle(a).getPropertyValue("background-color"),
      i = a.querySelectorAll(
        "[class^=swal2-success-circular-line], .swal2-success-fix"
      );
    for (let l = 0; l < i.length; l++) i[l].style.backgroundColor = t;
  },
  q4 = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
  G4 = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
  by = (a, t) => {
    if (!t.icon && !t.iconHtml) return;
    let i = a.innerHTML,
      l = "";
    t.iconHtml
      ? (l = wy(t.iconHtml))
      : t.icon === "success"
      ? ((l = q4), (i = i.replace(/ style=".*?"/g, "")))
      : t.icon === "error"
      ? (l = G4)
      : t.icon && (l = wy({ question: "?", warning: "!", info: "i" }[t.icon])),
      i.trim() !== l.trim() && gn(a, l);
  },
  $4 = (a, t) => {
    if (t.iconColor) {
      (a.style.color = t.iconColor), (a.style.borderColor = t.iconColor);
      for (const i of [
        ".swal2-success-line-tip",
        ".swal2-success-line-long",
        ".swal2-x-mark-line-left",
        ".swal2-x-mark-line-right",
      ])
        yy(a, i, "background-color", t.iconColor);
      yy(a, ".swal2-success-ring", "border-color", t.iconColor);
    }
  },
  wy = (a) => `<div class="${q["icon-content"]}">${a}</div>`,
  Y4 = (a, t) => {
    const i = rb();
    if (i) {
      if (!t.imageUrl) {
        Vt(i);
        return;
      }
      Nt(i, ""),
        i.setAttribute("src", t.imageUrl),
        i.setAttribute("alt", t.imageAlt || ""),
        $r(i, "width", t.imageWidth),
        $r(i, "height", t.imageHeight),
        (i.className = q.image),
        mn(i, t, "image");
    }
  };
let Sh = !1,
  db = 0,
  fb = 0,
  hb = 0,
  mb = 0;
const X4 = (a) => {
    a.addEventListener("mousedown", Ac),
      document.body.addEventListener("mousemove", Rc),
      a.addEventListener("mouseup", Oc),
      a.addEventListener("touchstart", Ac),
      document.body.addEventListener("touchmove", Rc),
      a.addEventListener("touchend", Oc);
  },
  K4 = (a) => {
    a.removeEventListener("mousedown", Ac),
      document.body.removeEventListener("mousemove", Rc),
      a.removeEventListener("mouseup", Oc),
      a.removeEventListener("touchstart", Ac),
      document.body.removeEventListener("touchmove", Rc),
      a.removeEventListener("touchend", Oc);
  },
  Ac = (a) => {
    const t = Xe();
    if (a.target === t || Ji().contains(a.target)) {
      Sh = !0;
      const i = pb(a);
      (db = i.clientX),
        (fb = i.clientY),
        (hb = parseInt(t.style.insetInlineStart) || 0),
        (mb = parseInt(t.style.insetBlockStart) || 0),
        Fe(t, "swal2-dragging");
    }
  },
  Rc = (a) => {
    const t = Xe();
    if (Sh) {
      let { clientX: i, clientY: l } = pb(a);
      (t.style.insetInlineStart = `${hb + (i - db)}px`),
        (t.style.insetBlockStart = `${mb + (l - fb)}px`);
    }
  },
  Oc = () => {
    const a = Xe();
    (Sh = !1), Dn(a, "swal2-dragging");
  },
  pb = (a) => {
    let t = 0,
      i = 0;
    return (
      a.type.startsWith("mouse")
        ? ((t = a.clientX), (i = a.clientY))
        : a.type.startsWith("touch") &&
          ((t = a.touches[0].clientX), (i = a.touches[0].clientY)),
      { clientX: t, clientY: i }
    );
  },
  F4 = (a, t) => {
    const i = Kt(),
      l = Xe();
    if (!(!i || !l)) {
      if (t.toast) {
        $r(i, "width", t.width), (l.style.width = "100%");
        const s = eo();
        s && l.insertBefore(s, Ji());
      } else $r(l, "width", t.width);
      $r(l, "padding", t.padding),
        t.color && (l.style.color = t.color),
        t.background && (l.style.background = t.background),
        Vt(Gc()),
        Q4(l, t),
        t.draggable && !t.toast
          ? (Fe(l, q.draggable), X4(l))
          : (Dn(l, q.draggable), K4(l));
    }
  },
  Q4 = (a, t) => {
    const i = t.showClass || {};
    (a.className = `${q.popup} ${nn(a) ? i.popup : ""}`),
      t.toast
        ? (Fe([document.documentElement, document.body], q["toast-shown"]),
          Fe(a, q.toast))
        : Fe(a, q.modal),
      mn(a, t, "popup"),
      typeof t.customClass == "string" && Fe(a, t.customClass),
      t.icon && Fe(a, q[`icon-${t.icon}`]);
  },
  Z4 = (a, t) => {
    const i = gh();
    if (!i) return;
    const { progressSteps: l, currentProgressStep: s } = t;
    if (!l || l.length === 0 || s === void 0) {
      Vt(i);
      return;
    }
    Nt(i),
      (i.textContent = ""),
      s >= l.length &&
        Xt(
          "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
        ),
      l.forEach((u, f) => {
        const m = J4(u);
        if (
          (i.appendChild(m),
          f === s && Fe(m, q["active-progress-step"]),
          f !== l.length - 1)
        ) {
          const h = W4(t);
          i.appendChild(h);
        }
      });
  },
  J4 = (a) => {
    const t = document.createElement("li");
    return Fe(t, q["progress-step"]), gn(t, a), t;
  },
  W4 = (a) => {
    const t = document.createElement("li");
    return (
      Fe(t, q["progress-step-line"]),
      a.progressStepsDistance && $r(t, "width", a.progressStepsDistance),
      t
    );
  },
  e5 = (a, t) => {
    const i = ab();
    i &&
      (wh(i),
      Ml(i, t.title || t.titleText, "block"),
      t.title && _h(t.title, i),
      t.titleText && (i.innerText = t.titleText),
      mn(i, t, "title"));
  },
  gb = (a, t) => {
    F4(a, t),
      k4(a, t),
      Z4(a, t),
      V4(a, t),
      Y4(a, t),
      e5(a, t),
      O4(a, t),
      H4(a, t),
      C4(a, t),
      P4(a, t);
    const i = Xe();
    typeof t.didRender == "function" && i && t.didRender(i),
      ve.eventEmitter.emit("didRender", i);
  },
  t5 = () => nn(Xe()),
  yb = () => {
    var a;
    return (a = Wn()) === null || a === void 0 ? void 0 : a.click();
  },
  n5 = () => {
    var a;
    return (a = Wr()) === null || a === void 0 ? void 0 : a.click();
  },
  a5 = () => {
    var a;
    return (a = Wi()) === null || a === void 0 ? void 0 : a.click();
  },
  to = Object.freeze({
    cancel: "cancel",
    backdrop: "backdrop",
    close: "close",
    esc: "esc",
    timer: "timer",
  }),
  vb = (a) => {
    a.keydownTarget &&
      a.keydownHandlerAdded &&
      (a.keydownTarget.removeEventListener("keydown", a.keydownHandler, {
        capture: a.keydownListenerCapture,
      }),
      (a.keydownHandlerAdded = !1));
  },
  r5 = (a, t, i) => {
    vb(a),
      t.toast ||
        ((a.keydownHandler = (l) => o5(t, l, i)),
        (a.keydownTarget = t.keydownListenerCapture ? window : Xe()),
        (a.keydownListenerCapture = t.keydownListenerCapture),
        a.keydownTarget.addEventListener("keydown", a.keydownHandler, {
          capture: a.keydownListenerCapture,
        }),
        (a.keydownHandlerAdded = !0));
  },
  If = (a, t) => {
    var i;
    const l = vh();
    if (l.length) {
      (a = a + t),
        a === -2 && (a = l.length - 1),
        a === l.length ? (a = 0) : a === -1 && (a = l.length - 1),
        l[a].focus();
      return;
    }
    (i = Xe()) === null || i === void 0 || i.focus();
  },
  bb = ["ArrowRight", "ArrowDown"],
  i5 = ["ArrowLeft", "ArrowUp"],
  o5 = (a, t, i) => {
    a &&
      (t.isComposing ||
        t.keyCode === 229 ||
        (a.stopKeydownPropagation && t.stopPropagation(),
        t.key === "Enter"
          ? l5(t, a)
          : t.key === "Tab"
          ? s5(t)
          : [...bb, ...i5].includes(t.key)
          ? c5(t.key)
          : t.key === "Escape" && u5(t, a, i)));
  },
  l5 = (a, t) => {
    if (!qc(t.allowEnterKey)) return;
    const i = Xc(Xe(), t.input);
    if (
      a.target &&
      i &&
      a.target instanceof HTMLElement &&
      a.target.outerHTML === i.outerHTML
    ) {
      if (["textarea", "file"].includes(t.input)) return;
      yb(), a.preventDefault();
    }
  },
  s5 = (a) => {
    const t = a.target,
      i = vh();
    let l = -1;
    for (let s = 0; s < i.length; s++)
      if (t === i[s]) {
        l = s;
        break;
      }
    a.shiftKey ? If(l, -1) : If(l, 1), a.stopPropagation(), a.preventDefault();
  },
  c5 = (a) => {
    const t = Dl(),
      i = Wn(),
      l = Wr(),
      s = Wi();
    if (!t || !i || !l || !s) return;
    const u = [i, l, s];
    if (
      document.activeElement instanceof HTMLElement &&
      !u.includes(document.activeElement)
    )
      return;
    const f = bb.includes(a) ? "nextElementSibling" : "previousElementSibling";
    let m = document.activeElement;
    if (m) {
      for (let h = 0; h < t.children.length; h++) {
        if (((m = m[f]), !m)) return;
        if (m instanceof HTMLButtonElement && nn(m)) break;
      }
      m instanceof HTMLButtonElement && m.focus();
    }
  },
  u5 = (a, t, i) => {
    qc(t.allowEscapeKey) && (a.preventDefault(), i(to.esc));
  };
var Ki = {
  swalPromiseResolve: new WeakMap(),
  swalPromiseReject: new WeakMap(),
};
const d5 = () => {
    const a = Kt();
    Array.from(document.body.children).forEach((i) => {
      i.contains(a) ||
        (i.hasAttribute("aria-hidden") &&
          i.setAttribute(
            "data-previous-aria-hidden",
            i.getAttribute("aria-hidden") || ""
          ),
        i.setAttribute("aria-hidden", "true"));
    });
  },
  wb = () => {
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
  xb = typeof window < "u" && !!window.GestureEvent,
  f5 = () => {
    if (xb && !Ea(document.body, q.iosfix)) {
      const a = document.body.scrollTop;
      (document.body.style.top = `${a * -1}px`),
        Fe(document.body, q.iosfix),
        h5();
    }
  },
  h5 = () => {
    const a = Kt();
    if (!a) return;
    let t;
    (a.ontouchstart = (i) => {
      t = m5(i);
    }),
      (a.ontouchmove = (i) => {
        t && (i.preventDefault(), i.stopPropagation());
      });
  },
  m5 = (a) => {
    const t = a.target,
      i = Kt(),
      l = ph();
    return !i || !l || p5(a) || g5(a)
      ? !1
      : t === i ||
          (!Uf(i) &&
            t instanceof HTMLElement &&
            !m4(t, l) &&
            t.tagName !== "INPUT" &&
            t.tagName !== "TEXTAREA" &&
            !(Uf(l) && l.contains(t)));
  },
  p5 = (a) =>
    a.touches && a.touches.length && a.touches[0].touchType === "stylus",
  g5 = (a) => a.touches && a.touches.length > 1,
  y5 = () => {
    if (Ea(document.body, q.iosfix)) {
      const a = parseInt(document.body.style.top, 10);
      Dn(document.body, q.iosfix),
        (document.body.style.top = ""),
        (document.body.scrollTop = a * -1);
    }
  },
  v5 = () => {
    const a = document.createElement("div");
    (a.className = q["scrollbar-measure"]), document.body.appendChild(a);
    const t = a.getBoundingClientRect().width - a.clientWidth;
    return document.body.removeChild(a), t;
  };
let qi = null;
const b5 = (a) => {
    qi === null &&
      (document.body.scrollHeight > window.innerHeight || a === "scroll") &&
      ((qi = parseInt(
        window.getComputedStyle(document.body).getPropertyValue("padding-right")
      )),
      (document.body.style.paddingRight = `${qi + v5()}px`));
  },
  w5 = () => {
    qi !== null &&
      ((document.body.style.paddingRight = `${qi}px`), (qi = null));
  };
function _b(a, t, i, l) {
  Yc() ? xy(a, l) : (r4(i).then(() => xy(a, l)), vb(ve)),
    xb
      ? (t.setAttribute("style", "display:none !important"),
        t.removeAttribute("class"),
        (t.innerHTML = ""))
      : t.remove(),
    bh() && (w5(), y5(), wb()),
    x5();
}
function x5() {
  Dn(
    [document.documentElement, document.body],
    [q.shown, q["height-auto"], q["no-backdrop"], q["toast-shown"]]
  );
}
function sr(a) {
  a = E5(a);
  const t = Ki.swalPromiseResolve.get(this),
    i = _5(this);
  this.isAwaitingPromise ? a.isDismissed || (Ll(this), t(a)) : i && t(a);
}
const _5 = (a) => {
  const t = Xe();
  if (!t) return !1;
  const i = ot.innerParams.get(a);
  if (!i || Ea(t, i.hideClass.popup)) return !1;
  Dn(t, i.showClass.popup), Fe(t, i.hideClass.popup);
  const l = Kt();
  return (
    Dn(l, i.showClass.backdrop), Fe(l, i.hideClass.backdrop), S5(a, t, i), !0
  );
};
function Eb(a) {
  const t = Ki.swalPromiseReject.get(this);
  Ll(this), t && t(a);
}
const Ll = (a) => {
    a.isAwaitingPromise &&
      (delete a.isAwaitingPromise, ot.innerParams.get(a) || a._destroy());
  },
  E5 = (a) =>
    typeof a > "u"
      ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
      : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, a),
  S5 = (a, t, i) => {
    var l;
    const s = Kt(),
      u = sb(t);
    typeof i.willClose == "function" && i.willClose(t),
      (l = ve.eventEmitter) === null || l === void 0 || l.emit("willClose", t),
      u
        ? T5(a, t, s, i.returnFocus, i.didClose)
        : _b(a, s, i.returnFocus, i.didClose);
  },
  T5 = (a, t, i, l, s) => {
    ve.swalCloseEventFinishedCallback = _b.bind(null, a, i, l, s);
    const u = function (f) {
      if (f.target === t) {
        var m;
        (m = ve.swalCloseEventFinishedCallback) === null ||
          m === void 0 ||
          m.call(ve),
          delete ve.swalCloseEventFinishedCallback,
          t.removeEventListener("animationend", u),
          t.removeEventListener("transitionend", u);
      }
    };
    t.addEventListener("animationend", u),
      t.addEventListener("transitionend", u);
  },
  xy = (a, t) => {
    setTimeout(() => {
      var i;
      typeof t == "function" && t.bind(a.params)(),
        (i = ve.eventEmitter) === null || i === void 0 || i.emit("didClose"),
        a._destroy && a._destroy();
    });
  },
  Fi = (a) => {
    let t = Xe();
    if ((t || new an(), (t = Xe()), !t)) return;
    const i = eo();
    Yc() ? Vt(Ji()) : C5(t, a),
      Nt(i),
      t.setAttribute("data-loading", "true"),
      t.setAttribute("aria-busy", "true"),
      t.focus();
  },
  C5 = (a, t) => {
    const i = Dl(),
      l = eo();
    !i ||
      !l ||
      (!t && nn(Wn()) && (t = Wn()),
      Nt(i),
      t &&
        (Vt(t),
        l.setAttribute("data-button-to-replace", t.className),
        i.insertBefore(l, t)),
      Fe([a, i], q.loading));
  },
  A5 = (a, t) => {
    t.input === "select" || t.input === "radio"
      ? D5(a, t)
      : ["text", "email", "number", "tel", "textarea"].some(
          (i) => i === t.input
        ) &&
        (hh(t.inputValue) || mh(t.inputValue)) &&
        (Fi(Wn()), M5(a, t));
  },
  R5 = (a, t) => {
    const i = a.getInput();
    if (!i) return null;
    switch (t.input) {
      case "checkbox":
        return O5(i);
      case "radio":
        return k5(i);
      case "file":
        return N5(i);
      default:
        return t.inputAutoTrim ? i.value.trim() : i.value;
    }
  },
  O5 = (a) => (a.checked ? 1 : 0),
  k5 = (a) => (a.checked ? a.value : null),
  N5 = (a) =>
    a.files && a.files.length
      ? a.getAttribute("multiple") !== null
        ? a.files
        : a.files[0]
      : null,
  D5 = (a, t) => {
    const i = Xe();
    if (!i) return;
    const l = (s) => {
      t.input === "select"
        ? j5(i, kc(s), t)
        : t.input === "radio" && L5(i, kc(s), t);
    };
    hh(t.inputOptions) || mh(t.inputOptions)
      ? (Fi(Wn()),
        kl(t.inputOptions).then((s) => {
          a.hideLoading(), l(s);
        }))
      : typeof t.inputOptions == "object"
      ? l(t.inputOptions)
      : Jr(
          `Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof t.inputOptions}`
        );
  },
  M5 = (a, t) => {
    const i = a.getInput();
    i &&
      (Vt(i),
      kl(t.inputValue)
        .then((l) => {
          (i.value = t.input === "number" ? `${parseFloat(l) || 0}` : `${l}`),
            Nt(i),
            i.focus(),
            a.hideLoading();
        })
        .catch((l) => {
          Jr(`Error in inputValue promise: ${l}`),
            (i.value = ""),
            Nt(i),
            i.focus(),
            a.hideLoading();
        }));
  };
function j5(a, t, i) {
  const l = lr(a, q.select);
  if (!l) return;
  const s = (u, f, m) => {
    const h = document.createElement("option");
    (h.value = m),
      gn(h, f),
      (h.selected = Sb(m, i.inputValue)),
      u.appendChild(h);
  };
  t.forEach((u) => {
    const f = u[0],
      m = u[1];
    if (Array.isArray(m)) {
      const h = document.createElement("optgroup");
      (h.label = f),
        (h.disabled = !1),
        l.appendChild(h),
        m.forEach((p) => s(h, p[1], p[0]));
    } else s(l, m, f);
  }),
    l.focus();
}
function L5(a, t, i) {
  const l = lr(a, q.radio);
  if (!l) return;
  t.forEach((u) => {
    const f = u[0],
      m = u[1],
      h = document.createElement("input"),
      p = document.createElement("label");
    (h.type = "radio"),
      (h.name = q.radio),
      (h.value = f),
      Sb(f, i.inputValue) && (h.checked = !0);
    const b = document.createElement("span");
    gn(b, m),
      (b.className = q.label),
      p.appendChild(h),
      p.appendChild(b),
      l.appendChild(p);
  });
  const s = l.querySelectorAll("input");
  s.length && s[0].focus();
}
const kc = (a) => {
    const t = [];
    return (
      a instanceof Map
        ? a.forEach((i, l) => {
            let s = i;
            typeof s == "object" && (s = kc(s)), t.push([l, s]);
          })
        : Object.keys(a).forEach((i) => {
            let l = a[i];
            typeof l == "object" && (l = kc(l)), t.push([i, l]);
          }),
      t
    );
  },
  Sb = (a, t) => !!t && t.toString() === a.toString(),
  z5 = (a) => {
    const t = ot.innerParams.get(a);
    a.disableButtons(), t.input ? Tb(a, "confirm") : Ch(a, !0);
  },
  U5 = (a) => {
    const t = ot.innerParams.get(a);
    a.disableButtons(), t.returnInputValueOnDeny ? Tb(a, "deny") : Th(a, !1);
  },
  I5 = (a, t) => {
    a.disableButtons(), t(to.cancel);
  },
  Tb = (a, t) => {
    const i = ot.innerParams.get(a);
    if (!i.input) {
      Jr(
        `The "input" parameter is needed to be set when using returnInputValueOn${fh(
          t
        )}`
      );
      return;
    }
    const l = a.getInput(),
      s = R5(a, i);
    i.inputValidator
      ? B5(a, s, t)
      : l && !l.checkValidity()
      ? (a.enableButtons(),
        a.showValidationMessage(i.validationMessage || l.validationMessage))
      : t === "deny"
      ? Th(a, s)
      : Ch(a, s);
  },
  B5 = (a, t, i) => {
    const l = ot.innerParams.get(a);
    a.disableInput(),
      Promise.resolve()
        .then(() => kl(l.inputValidator(t, l.validationMessage)))
        .then((u) => {
          a.enableButtons(),
            a.enableInput(),
            u ? a.showValidationMessage(u) : i === "deny" ? Th(a, t) : Ch(a, t);
        });
  },
  Th = (a, t) => {
    const i = ot.innerParams.get(a || void 0);
    i.showLoaderOnDeny && Fi(Wr()),
      i.preDeny
        ? ((a.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => kl(i.preDeny(t, i.validationMessage)))
            .then((s) => {
              s === !1
                ? (a.hideLoading(), Ll(a))
                : a.close({ isDenied: !0, value: typeof s > "u" ? t : s });
            })
            .catch((s) => Cb(a || void 0, s)))
        : a.close({ isDenied: !0, value: t });
  },
  _y = (a, t) => {
    a.close({ isConfirmed: !0, value: t });
  },
  Cb = (a, t) => {
    a.rejectPromise(t);
  },
  Ch = (a, t) => {
    const i = ot.innerParams.get(a || void 0);
    i.showLoaderOnConfirm && Fi(),
      i.preConfirm
        ? (a.resetValidationMessage(),
          (a.isAwaitingPromise = !0),
          Promise.resolve()
            .then(() => kl(i.preConfirm(t, i.validationMessage)))
            .then((s) => {
              nn(Gc()) || s === !1
                ? (a.hideLoading(), Ll(a))
                : _y(a, typeof s > "u" ? t : s);
            })
            .catch((s) => Cb(a || void 0, s)))
        : _y(a, t);
  };
function Nc() {
  const a = ot.innerParams.get(this);
  if (!a) return;
  const t = ot.domCache.get(this);
  Vt(t.loader),
    Yc() ? a.icon && Nt(Ji()) : H5(t),
    Dn([t.popup, t.actions], q.loading),
    t.popup.removeAttribute("aria-busy"),
    t.popup.removeAttribute("data-loading"),
    (t.confirmButton.disabled = !1),
    (t.denyButton.disabled = !1),
    (t.cancelButton.disabled = !1);
}
const H5 = (a) => {
  const t = a.popup.getElementsByClassName(
    a.loader.getAttribute("data-button-to-replace")
  );
  t.length ? Nt(t[0], "inline-block") : h4() && Vt(a.actions);
};
function Ab() {
  const a = ot.innerParams.get(this),
    t = ot.domCache.get(this);
  return t ? Xc(t.popup, a.input) : null;
}
function Rb(a, t, i) {
  const l = ot.domCache.get(a);
  t.forEach((s) => {
    l[s].disabled = i;
  });
}
function Ob(a, t) {
  const i = Xe();
  if (!(!i || !a))
    if (a.type === "radio") {
      const l = i.querySelectorAll(`[name="${q.radio}"]`);
      for (let s = 0; s < l.length; s++) l[s].disabled = t;
    } else a.disabled = t;
}
function kb() {
  Rb(this, ["confirmButton", "denyButton", "cancelButton"], !1);
}
function Nb() {
  Rb(this, ["confirmButton", "denyButton", "cancelButton"], !0);
}
function Db() {
  Ob(this.getInput(), !1);
}
function Mb() {
  Ob(this.getInput(), !0);
}
function jb(a) {
  const t = ot.domCache.get(this),
    i = ot.innerParams.get(this);
  gn(t.validationMessage, a),
    (t.validationMessage.className = q["validation-message"]),
    i.customClass &&
      i.customClass.validationMessage &&
      Fe(t.validationMessage, i.customClass.validationMessage),
    Nt(t.validationMessage);
  const l = this.getInput();
  l &&
    (l.setAttribute("aria-invalid", "true"),
    l.setAttribute("aria-describedby", q["validation-message"]),
    ob(l),
    Fe(l, q.inputerror));
}
function Lb() {
  const a = ot.domCache.get(this);
  a.validationMessage && Vt(a.validationMessage);
  const t = this.getInput();
  t &&
    (t.removeAttribute("aria-invalid"),
    t.removeAttribute("aria-describedby"),
    Dn(t, q.inputerror));
}
const Gi = {
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
  P5 = [
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
  V5 = { allowEnterKey: void 0 },
  q5 = [
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
  zb = (a) => Object.prototype.hasOwnProperty.call(Gi, a),
  Ub = (a) => P5.indexOf(a) !== -1,
  Ib = (a) => V5[a],
  G5 = (a) => {
    zb(a) || Xt(`Unknown parameter "${a}"`);
  },
  $5 = (a) => {
    q5.includes(a) && Xt(`The parameter "${a}" is incompatible with toasts`);
  },
  Y5 = (a) => {
    const t = Ib(a);
    t && nb(a, t);
  },
  Bb = (a) => {
    a.backdrop === !1 &&
      a.allowOutsideClick &&
      Xt(
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
        Xt(
          `Invalid theme "${a.theme}". Expected "light", "dark", "auto", "minimal", "borderless", or "embed-iframe"`
        );
    for (const t in a) G5(t), a.toast && $5(t), Y5(t);
  };
function Hb(a) {
  const t = Kt(),
    i = Xe(),
    l = ot.innerParams.get(this);
  if (!i || Ea(i, l.hideClass.popup)) {
    Xt(
      "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
    );
    return;
  }
  const s = X5(a),
    u = Object.assign({}, l, s);
  Bb(u),
    (t.dataset.swal2Theme = u.theme),
    gb(this, u),
    ot.innerParams.set(this, u),
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, a),
        writable: !1,
        enumerable: !0,
      },
    });
}
const X5 = (a) => {
  const t = {};
  return (
    Object.keys(a).forEach((i) => {
      Ub(i) ? (t[i] = a[i]) : Xt(`Invalid parameter to update: ${i}`);
    }),
    t
  );
};
function Pb() {
  const a = ot.domCache.get(this),
    t = ot.innerParams.get(this);
  if (!t) {
    Vb(this);
    return;
  }
  a.popup &&
    ve.swalCloseEventFinishedCallback &&
    (ve.swalCloseEventFinishedCallback(),
    delete ve.swalCloseEventFinishedCallback),
    typeof t.didDestroy == "function" && t.didDestroy(),
    ve.eventEmitter.emit("didDestroy"),
    K5(this);
}
const K5 = (a) => {
    Vb(a),
      delete a.params,
      delete ve.keydownHandler,
      delete ve.keydownTarget,
      delete ve.currentInstance;
  },
  Vb = (a) => {
    a.isAwaitingPromise
      ? (Ef(ot, a), (a.isAwaitingPromise = !0))
      : (Ef(Ki, a),
        Ef(ot, a),
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
  Ef = (a, t) => {
    for (const i in a) a[i].delete(t);
  };
var F5 = Object.freeze({
  __proto__: null,
  _destroy: Pb,
  close: sr,
  closeModal: sr,
  closePopup: sr,
  closeToast: sr,
  disableButtons: Nb,
  disableInput: Mb,
  disableLoading: Nc,
  enableButtons: kb,
  enableInput: Db,
  getInput: Ab,
  handleAwaitingPromise: Ll,
  hideLoading: Nc,
  rejectPromise: Eb,
  resetValidationMessage: Lb,
  showValidationMessage: jb,
  update: Hb,
});
const Q5 = (a, t, i) => {
    a.toast ? Z5(a, t, i) : (W5(t), e6(t), t6(a, t, i));
  },
  Z5 = (a, t, i) => {
    t.popup.onclick = () => {
      (a && (J5(a) || a.timer || a.input)) || i(to.close);
    };
  },
  J5 = (a) =>
    !!(
      a.showConfirmButton ||
      a.showDenyButton ||
      a.showCancelButton ||
      a.showCloseButton
    );
let Dc = !1;
const W5 = (a) => {
    a.popup.onmousedown = () => {
      a.container.onmouseup = function (t) {
        (a.container.onmouseup = () => {}),
          t.target === a.container && (Dc = !0);
      };
    };
  },
  e6 = (a) => {
    a.container.onmousedown = (t) => {
      t.target === a.container && t.preventDefault(),
        (a.popup.onmouseup = function (i) {
          (a.popup.onmouseup = () => {}),
            (i.target === a.popup ||
              (i.target instanceof HTMLElement &&
                a.popup.contains(i.target))) &&
              (Dc = !0);
        });
    };
  },
  t6 = (a, t, i) => {
    t.container.onclick = (l) => {
      if (Dc) {
        Dc = !1;
        return;
      }
      l.target === t.container && qc(a.allowOutsideClick) && i(to.backdrop);
    };
  },
  n6 = (a) => typeof a == "object" && a.jquery,
  Ey = (a) => a instanceof Element || n6(a),
  a6 = (a) => {
    const t = {};
    return (
      typeof a[0] == "object" && !Ey(a[0])
        ? Object.assign(t, a[0])
        : ["title", "html", "icon"].forEach((i, l) => {
            const s = a[l];
            typeof s == "string" || Ey(s)
              ? (t[i] = s)
              : s !== void 0 &&
                Jr(
                  `Unexpected type of ${i}! Expected "string" or "Element", got ${typeof s}`
                );
          }),
      t
    );
  };
function r6(...a) {
  return new this(...a);
}
function i6(a) {
  class t extends this {
    _main(l, s) {
      return super._main(l, Object.assign({}, a, s));
    }
  }
  return t;
}
const o6 = () => ve.timeout && ve.timeout.getTimerLeft(),
  qb = () => {
    if (ve.timeout) return p4(), ve.timeout.stop();
  },
  Gb = () => {
    if (ve.timeout) {
      const a = ve.timeout.start();
      return xh(a), a;
    }
  },
  l6 = () => {
    const a = ve.timeout;
    return a && (a.running ? qb() : Gb());
  },
  s6 = (a) => {
    if (ve.timeout) {
      const t = ve.timeout.increase(a);
      return xh(t, !0), t;
    }
  },
  c6 = () => !!(ve.timeout && ve.timeout.isRunning());
let Sy = !1;
const Bf = {};
function u6(a = "data-swal-template") {
  (Bf[a] = this),
    Sy || (document.body.addEventListener("click", d6), (Sy = !0));
}
const d6 = (a) => {
  for (let t = a.target; t && t !== document; t = t.parentNode)
    for (const i in Bf) {
      const l = t.getAttribute(i);
      if (l) {
        Bf[i].fire({ template: l });
        return;
      }
    }
};
class f6 {
  constructor() {
    this.events = {};
  }
  _getHandlersByEventName(t) {
    return typeof this.events[t] > "u" && (this.events[t] = []), this.events[t];
  }
  on(t, i) {
    const l = this._getHandlersByEventName(t);
    l.includes(i) || l.push(i);
  }
  once(t, i) {
    const l = (...s) => {
      this.removeListener(t, l), i.apply(this, s);
    };
    this.on(t, l);
  }
  emit(t, ...i) {
    this._getHandlersByEventName(t).forEach((l) => {
      try {
        l.apply(this, i);
      } catch (s) {
        console.error(s);
      }
    });
  }
  removeListener(t, i) {
    const l = this._getHandlersByEventName(t),
      s = l.indexOf(i);
    s > -1 && l.splice(s, 1);
  }
  removeAllListeners(t) {
    this.events[t] !== void 0 && (this.events[t].length = 0);
  }
  reset() {
    this.events = {};
  }
}
ve.eventEmitter = new f6();
const h6 = (a, t) => {
    ve.eventEmitter.on(a, t);
  },
  m6 = (a, t) => {
    ve.eventEmitter.once(a, t);
  },
  p6 = (a, t) => {
    if (!a) {
      ve.eventEmitter.reset();
      return;
    }
    t
      ? ve.eventEmitter.removeListener(a, t)
      : ve.eventEmitter.removeAllListeners(a);
  };
var g6 = Object.freeze({
  __proto__: null,
  argsToParams: a6,
  bindClickHandler: u6,
  clickCancel: a5,
  clickConfirm: yb,
  clickDeny: n5,
  enableLoading: Fi,
  fire: r6,
  getActions: Dl,
  getCancelButton: Wi,
  getCloseButton: yh,
  getConfirmButton: Wn,
  getContainer: Kt,
  getDenyButton: Wr,
  getFocusableElements: vh,
  getFooter: ib,
  getHtmlContainer: ph,
  getIcon: Ji,
  getIconContent: s4,
  getImage: rb,
  getInputLabel: c4,
  getLoader: eo,
  getPopup: Xe,
  getProgressSteps: gh,
  getTimerLeft: o6,
  getTimerProgressBar: $c,
  getTitle: ab,
  getValidationMessage: Gc,
  increaseTimer: s6,
  isDeprecatedParameter: Ib,
  isLoading: d4,
  isTimerRunning: c6,
  isUpdatableParameter: Ub,
  isValidParameter: zb,
  isVisible: t5,
  mixin: i6,
  off: p6,
  on: h6,
  once: m6,
  resumeTimer: Gb,
  showLoading: Fi,
  stopTimer: qb,
  toggleTimer: l6,
});
class y6 {
  constructor(t, i) {
    (this.callback = t),
      (this.remaining = i),
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
    const i = this.running;
    return (
      i && this.stop(), (this.remaining += t), i && this.start(), this.remaining
    );
  }
  getTimerLeft() {
    return this.running && (this.stop(), this.start()), this.remaining;
  }
  isRunning() {
    return this.running;
  }
}
const $b = ["swal-title", "swal-html", "swal-footer"],
  v6 = (a) => {
    const t =
      typeof a.template == "string"
        ? document.querySelector(a.template)
        : a.template;
    if (!t) return {};
    const i = t.content;
    return (
      C6(i), Object.assign(b6(i), w6(i), x6(i), _6(i), E6(i), S6(i), T6(i, $b))
    );
  },
  b6 = (a) => {
    const t = {};
    return (
      Array.from(a.querySelectorAll("swal-param")).forEach((l) => {
        Fr(l, ["name", "value"]);
        const s = l.getAttribute("name"),
          u = l.getAttribute("value");
        !s ||
          !u ||
          (typeof Gi[s] == "boolean"
            ? (t[s] = u !== "false")
            : typeof Gi[s] == "object"
            ? (t[s] = JSON.parse(u))
            : (t[s] = u));
      }),
      t
    );
  },
  w6 = (a) => {
    const t = {};
    return (
      Array.from(a.querySelectorAll("swal-function-param")).forEach((l) => {
        const s = l.getAttribute("name"),
          u = l.getAttribute("value");
        !s || !u || (t[s] = new Function(`return ${u}`)());
      }),
      t
    );
  },
  x6 = (a) => {
    const t = {};
    return (
      Array.from(a.querySelectorAll("swal-button")).forEach((l) => {
        Fr(l, ["type", "color", "aria-label"]);
        const s = l.getAttribute("type");
        !s ||
          !["confirm", "cancel", "deny"].includes(s) ||
          ((t[`${s}ButtonText`] = l.innerHTML),
          (t[`show${fh(s)}Button`] = !0),
          l.hasAttribute("color") &&
            (t[`${s}ButtonColor`] = l.getAttribute("color")),
          l.hasAttribute("aria-label") &&
            (t[`${s}ButtonAriaLabel`] = l.getAttribute("aria-label")));
      }),
      t
    );
  },
  _6 = (a) => {
    const t = {},
      i = a.querySelector("swal-image");
    return (
      i &&
        (Fr(i, ["src", "width", "height", "alt"]),
        i.hasAttribute("src") && (t.imageUrl = i.getAttribute("src") || void 0),
        i.hasAttribute("width") &&
          (t.imageWidth = i.getAttribute("width") || void 0),
        i.hasAttribute("height") &&
          (t.imageHeight = i.getAttribute("height") || void 0),
        i.hasAttribute("alt") &&
          (t.imageAlt = i.getAttribute("alt") || void 0)),
      t
    );
  },
  E6 = (a) => {
    const t = {},
      i = a.querySelector("swal-icon");
    return (
      i &&
        (Fr(i, ["type", "color"]),
        i.hasAttribute("type") && (t.icon = i.getAttribute("type")),
        i.hasAttribute("color") && (t.iconColor = i.getAttribute("color")),
        (t.iconHtml = i.innerHTML)),
      t
    );
  },
  S6 = (a) => {
    const t = {},
      i = a.querySelector("swal-input");
    i &&
      (Fr(i, ["type", "label", "placeholder", "value"]),
      (t.input = i.getAttribute("type") || "text"),
      i.hasAttribute("label") && (t.inputLabel = i.getAttribute("label")),
      i.hasAttribute("placeholder") &&
        (t.inputPlaceholder = i.getAttribute("placeholder")),
      i.hasAttribute("value") && (t.inputValue = i.getAttribute("value")));
    const l = Array.from(a.querySelectorAll("swal-input-option"));
    return (
      l.length &&
        ((t.inputOptions = {}),
        l.forEach((s) => {
          Fr(s, ["value"]);
          const u = s.getAttribute("value");
          if (!u) return;
          const f = s.innerHTML;
          t.inputOptions[u] = f;
        })),
      t
    );
  },
  T6 = (a, t) => {
    const i = {};
    for (const l in t) {
      const s = t[l],
        u = a.querySelector(s);
      u && (Fr(u, []), (i[s.replace(/^swal-/, "")] = u.innerHTML.trim()));
    }
    return i;
  },
  C6 = (a) => {
    const t = $b.concat([
      "swal-param",
      "swal-function-param",
      "swal-button",
      "swal-image",
      "swal-icon",
      "swal-input",
      "swal-input-option",
    ]);
    Array.from(a.children).forEach((i) => {
      const l = i.tagName.toLowerCase();
      t.includes(l) || Xt(`Unrecognized element <${l}>`);
    });
  },
  Fr = (a, t) => {
    Array.from(a.attributes).forEach((i) => {
      t.indexOf(i.name) === -1 &&
        Xt([
          `Unrecognized attribute "${i.name}" on <${a.tagName.toLowerCase()}>.`,
          `${
            t.length
              ? `Allowed attributes are: ${t.join(", ")}`
              : "To set the value, use HTML within the element."
          }`,
        ]);
    });
  },
  Yb = 10,
  A6 = (a) => {
    const t = Kt(),
      i = Xe();
    typeof a.willOpen == "function" && a.willOpen(i),
      ve.eventEmitter.emit("willOpen", i);
    const s = window.getComputedStyle(document.body).overflowY;
    k6(t, i, a),
      setTimeout(() => {
        R6(t, i);
      }, Yb),
      bh() && (O6(t, a.scrollbarPadding, s), d5()),
      !Yc() &&
        !ve.previousActiveElement &&
        (ve.previousActiveElement = document.activeElement),
      typeof a.didOpen == "function" && setTimeout(() => a.didOpen(i)),
      ve.eventEmitter.emit("didOpen", i),
      Dn(t, q["no-transition"]);
  },
  Mc = (a) => {
    const t = Xe();
    if (a.target !== t) return;
    const i = Kt();
    t.removeEventListener("animationend", Mc),
      t.removeEventListener("transitionend", Mc),
      (i.style.overflowY = "auto");
  },
  R6 = (a, t) => {
    sb(t)
      ? ((a.style.overflowY = "hidden"),
        t.addEventListener("animationend", Mc),
        t.addEventListener("transitionend", Mc))
      : (a.style.overflowY = "auto");
  },
  O6 = (a, t, i) => {
    f5(),
      t && i !== "hidden" && b5(i),
      setTimeout(() => {
        a.scrollTop = 0;
      });
  },
  k6 = (a, t, i) => {
    Fe(a, i.showClass.backdrop),
      i.animation
        ? (t.style.setProperty("opacity", "0", "important"),
          Nt(t, "grid"),
          setTimeout(() => {
            Fe(t, i.showClass.popup), t.style.removeProperty("opacity");
          }, Yb))
        : Nt(t, "grid"),
      Fe([document.documentElement, document.body], q.shown),
      i.heightAuto &&
        i.backdrop &&
        !i.toast &&
        Fe([document.documentElement, document.body], q["height-auto"]);
  };
var Ty = {
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
function N6(a) {
  a.inputValidator ||
    (a.input === "email" && (a.inputValidator = Ty.email),
    a.input === "url" && (a.inputValidator = Ty.url));
}
function D6(a) {
  (!a.target ||
    (typeof a.target == "string" && !document.querySelector(a.target)) ||
    (typeof a.target != "string" && !a.target.appendChild)) &&
    (Xt('Target parameter is not valid, defaulting to "body"'),
    (a.target = "body"));
}
function M6(a) {
  N6(a),
    a.showLoaderOnConfirm &&
      !a.preConfirm &&
      Xt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
    D6(a),
    typeof a.title == "string" &&
      (a.title = a.title
        .split(
          `
`
        )
        .join("<br />")),
    E4(a);
}
let Qn;
var nc = new WeakMap();
class wt {
  constructor(...t) {
    if ((e4(this, nc, void 0), typeof window > "u")) return;
    Qn = this;
    const i = Object.freeze(this.constructor.argsToParams(t));
    (this.params = i),
      (this.isAwaitingPromise = !1),
      t4(nc, this, this._main(Qn.params));
  }
  _main(t, i = {}) {
    if ((Bb(Object.assign({}, i, t)), ve.currentInstance)) {
      const u = Ki.swalPromiseResolve.get(ve.currentInstance),
        { isAwaitingPromise: f } = ve.currentInstance;
      ve.currentInstance._destroy(), f || u({ isDismissed: !0 }), bh() && wb();
    }
    ve.currentInstance = Qn;
    const l = L6(t, i);
    M6(l),
      Object.freeze(l),
      ve.timeout && (ve.timeout.stop(), delete ve.timeout),
      clearTimeout(ve.restoreFocusTimeout);
    const s = z6(Qn);
    return gb(Qn, l), ot.innerParams.set(Qn, l), j6(Qn, s, l);
  }
  then(t) {
    return py(nc, this).then(t);
  }
  finally(t) {
    return py(nc, this).finally(t);
  }
}
const j6 = (a, t, i) =>
    new Promise((l, s) => {
      const u = (f) => {
        a.close({ isDismissed: !0, dismiss: f });
      };
      Ki.swalPromiseResolve.set(a, l),
        Ki.swalPromiseReject.set(a, s),
        (t.confirmButton.onclick = () => {
          z5(a);
        }),
        (t.denyButton.onclick = () => {
          U5(a);
        }),
        (t.cancelButton.onclick = () => {
          I5(a, u);
        }),
        (t.closeButton.onclick = () => {
          u(to.close);
        }),
        Q5(i, t, u),
        r5(ve, i, u),
        A5(a, i),
        A6(i),
        U6(ve, i, u),
        I6(t, i),
        setTimeout(() => {
          t.container.scrollTop = 0;
        });
    }),
  L6 = (a, t) => {
    const i = v6(a),
      l = Object.assign({}, Gi, t, i, a);
    return (
      (l.showClass = Object.assign({}, Gi.showClass, l.showClass)),
      (l.hideClass = Object.assign({}, Gi.hideClass, l.hideClass)),
      l.animation === !1 &&
        ((l.showClass = { backdrop: "swal2-noanimation" }), (l.hideClass = {})),
      l
    );
  },
  z6 = (a) => {
    const t = {
      popup: Xe(),
      container: Kt(),
      actions: Dl(),
      confirmButton: Wn(),
      denyButton: Wr(),
      cancelButton: Wi(),
      loader: eo(),
      closeButton: yh(),
      validationMessage: Gc(),
      progressSteps: gh(),
    };
    return ot.domCache.set(a, t), t;
  },
  U6 = (a, t, i) => {
    const l = $c();
    Vt(l),
      t.timer &&
        ((a.timeout = new y6(() => {
          i("timer"), delete a.timeout;
        }, t.timer)),
        t.timerProgressBar &&
          (Nt(l),
          mn(l, t, "timerProgressBar"),
          setTimeout(() => {
            a.timeout && a.timeout.running && xh(t.timer);
          })));
  },
  I6 = (a, t) => {
    if (!t.toast) {
      if (!qc(t.allowEnterKey)) {
        nb("allowEnterKey"), P6();
        return;
      }
      B6(a) || H6(a, t) || If(-1, 1);
    }
  },
  B6 = (a) => {
    const t = Array.from(a.popup.querySelectorAll("[autofocus]"));
    for (const i of t)
      if (i instanceof HTMLElement && nn(i)) return i.focus(), !0;
    return !1;
  },
  H6 = (a, t) =>
    t.focusDeny && nn(a.denyButton)
      ? (a.denyButton.focus(), !0)
      : t.focusCancel && nn(a.cancelButton)
      ? (a.cancelButton.focus(), !0)
      : t.focusConfirm && nn(a.confirmButton)
      ? (a.confirmButton.focus(), !0)
      : !1,
  P6 = () => {
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
        const i = document.createElement("audio");
        (i.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
          (i.loop = !0),
          document.body.appendChild(i),
          setTimeout(() => {
            i.play().catch(() => {});
          }, 2500);
      }, 500)
    : localStorage.setItem("swal-initiation", `${a}`);
}
wt.prototype.disableButtons = Nb;
wt.prototype.enableButtons = kb;
wt.prototype.getInput = Ab;
wt.prototype.disableInput = Mb;
wt.prototype.enableInput = Db;
wt.prototype.hideLoading = Nc;
wt.prototype.disableLoading = Nc;
wt.prototype.showValidationMessage = jb;
wt.prototype.resetValidationMessage = Lb;
wt.prototype.close = sr;
wt.prototype.closePopup = sr;
wt.prototype.closeModal = sr;
wt.prototype.closeToast = sr;
wt.prototype.rejectPromise = Eb;
wt.prototype.update = Hb;
wt.prototype._destroy = Pb;
Object.assign(wt, g6);
Object.keys(F5).forEach((a) => {
  wt[a] = function (...t) {
    return Qn && Qn[a] ? Qn[a](...t) : null;
  };
});
wt.DismissReason = to;
wt.version = "11.21.2";
const an = wt;
an.default = an;
typeof document < "u" &&
  (function (a, t) {
    var i = a.createElement("style");
    if ((a.getElementsByTagName("head")[0].appendChild(i), i.styleSheet))
      i.styleSheet.disabled || (i.styleSheet.cssText = t);
    else
      try {
        i.innerHTML = t;
      } catch {
        i.innerText = t;
      }
  })(
    document,
    ':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-footer-border-color: #eee;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-confirm-button-border: 0;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-border: 0;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-border: 0;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-button-transition);box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:var(--swal2-confirm-button-border);border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), black 10%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), black 20%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:var(--swal2-deny-button-border);border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), black 10%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), black 20%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:var(--swal2-cancel-button-border);border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), black 10%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), black 20%)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-outline)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:1px solid #d9d9d9;border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}'
  );
function Xb(a) {
  var t,
    i,
    l = "";
  if (typeof a == "string" || typeof a == "number") l += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var s = a.length;
      for (t = 0; t < s; t++)
        a[t] && (i = Xb(a[t])) && (l && (l += " "), (l += i));
    } else for (i in a) a[i] && (l && (l += " "), (l += i));
  return l;
}
function Yr() {
  for (var a, t, i = 0, l = "", s = arguments.length; i < s; i++)
    (a = arguments[i]) && (t = Xb(a)) && (l && (l += " "), (l += t));
  return l;
}
function V6(a) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0],
    i = document.createElement("style");
  (i.type = "text/css"),
    t.firstChild ? t.insertBefore(i, t.firstChild) : t.appendChild(i),
    i.styleSheet
      ? (i.styleSheet.cssText = a)
      : i.appendChild(document.createTextNode(a));
}
V6(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var zl = (a) => typeof a == "number" && !isNaN(a),
  Qr = (a) => typeof a == "string",
  Ca = (a) => typeof a == "function",
  q6 = (a) => Qr(a) || zl(a),
  Hf = (a) => (Qr(a) || Ca(a) ? a : null),
  G6 = (a, t) => (a === !1 || (zl(a) && a > 0) ? a : t),
  Pf = (a) => R.isValidElement(a) || Qr(a) || Ca(a) || zl(a);
function $6(a, t, i = 300) {
  let { scrollHeight: l, style: s } = a;
  requestAnimationFrame(() => {
    (s.minHeight = "initial"),
      (s.height = l + "px"),
      (s.transition = `all ${i}ms`),
      requestAnimationFrame(() => {
        (s.height = "0"), (s.padding = "0"), (s.margin = "0"), setTimeout(t, i);
      });
  });
}
function Y6({
  enter: a,
  exit: t,
  appendPosition: i = !1,
  collapse: l = !0,
  collapseDuration: s = 300,
}) {
  return function ({
    children: u,
    position: f,
    preventExitTransition: m,
    done: h,
    nodeRef: p,
    isIn: b,
    playToast: x,
  }) {
    let w = i ? `${a}--${f}` : a,
      T = i ? `${t}--${f}` : t,
      A = R.useRef(0);
    return (
      R.useLayoutEffect(() => {
        let P = p.current,
          H = w.split(" "),
          z = (I) => {
            I.target === p.current &&
              (x(),
              P.removeEventListener("animationend", z),
              P.removeEventListener("animationcancel", z),
              A.current === 0 &&
                I.type !== "animationcancel" &&
                P.classList.remove(...H));
          };
        P.classList.add(...H),
          P.addEventListener("animationend", z),
          P.addEventListener("animationcancel", z);
      }, []),
      R.useEffect(() => {
        let P = p.current,
          H = () => {
            P.removeEventListener("animationend", H), l ? $6(P, h, s) : h();
          };
        b ||
          (m
            ? H()
            : ((A.current = 1),
              (P.className += ` ${T}`),
              P.addEventListener("animationend", H)));
      }, [b]),
      Ye.createElement(Ye.Fragment, null, u)
    );
  };
}
function Cy(a, t) {
  return {
    content: Kb(a.content, a.props),
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
function Kb(a, t, i = !1) {
  return R.isValidElement(a) && !Qr(a.type)
    ? R.cloneElement(a, {
        closeToast: t.closeToast,
        toastProps: t,
        data: t.data,
        isPaused: i,
      })
    : Ca(a)
    ? a({ closeToast: t.closeToast, toastProps: t, data: t.data, isPaused: i })
    : a;
}
function X6({ closeToast: a, theme: t, ariaLabel: i = "close" }) {
  return Ye.createElement(
    "button",
    {
      className: `Toastify__close-button Toastify__close-button--${t}`,
      type: "button",
      onClick: (l) => {
        l.stopPropagation(), a(!0);
      },
      "aria-label": i,
    },
    Ye.createElement(
      "svg",
      { "aria-hidden": "true", viewBox: "0 0 14 16" },
      Ye.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
      })
    )
  );
}
function K6({
  delay: a,
  isRunning: t,
  closeToast: i,
  type: l = "default",
  hide: s,
  className: u,
  controlledProgress: f,
  progress: m,
  rtl: h,
  isIn: p,
  theme: b,
}) {
  let x = s || (f && m === 0),
    w = {
      animationDuration: `${a}ms`,
      animationPlayState: t ? "running" : "paused",
    };
  f && (w.transform = `scaleX(${m})`);
  let T = Yr(
      "Toastify__progress-bar",
      f
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${b}`,
      `Toastify__progress-bar--${l}`,
      { "Toastify__progress-bar--rtl": h }
    ),
    A = Ca(u) ? u({ rtl: h, type: l, defaultClassName: T }) : Yr(T, u),
    P = {
      [f && m >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        f && m < 1
          ? null
          : () => {
              p && i();
            },
    };
  return Ye.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": x },
    Ye.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${b} Toastify__progress-bar--${l}`,
    }),
    Ye.createElement("div", {
      role: "progressbar",
      "aria-hidden": x ? "true" : "false",
      "aria-label": "notification timer",
      className: A,
      style: w,
      ...P,
    })
  );
}
var F6 = 1,
  Fb = () => `${F6++}`;
function Q6(a, t, i) {
  let l = 1,
    s = 0,
    u = [],
    f = [],
    m = t,
    h = new Map(),
    p = new Set(),
    b = (I) => (p.add(I), () => p.delete(I)),
    x = () => {
      (f = Array.from(h.values())), p.forEach((I) => I());
    },
    w = ({ containerId: I, toastId: V, updateId: Q }) => {
      let F = I ? I !== a : a !== 1,
        O = h.has(V) && Q == null;
      return F || O;
    },
    T = (I, V) => {
      h.forEach((Q) => {
        var F;
        (V == null || V === Q.props.toastId) &&
          ((F = Q.toggle) == null || F.call(Q, I));
      });
    },
    A = (I) => {
      var V, Q;
      (Q = (V = I.props) == null ? void 0 : V.onClose) == null ||
        Q.call(V, I.removalReason),
        (I.isActive = !1);
    },
    P = (I) => {
      if (I == null) h.forEach(A);
      else {
        let V = h.get(I);
        V && A(V);
      }
      x();
    },
    H = () => {
      (s -= u.length), (u = []);
    },
    z = (I) => {
      var V, Q;
      let { toastId: F, updateId: O } = I.props,
        ne = O == null;
      I.staleId && h.delete(I.staleId),
        (I.isActive = !0),
        h.set(F, I),
        x(),
        i(Cy(I, ne ? "added" : "updated")),
        ne && ((Q = (V = I.props).onOpen) == null || Q.call(V));
    };
  return {
    id: a,
    props: m,
    observe: b,
    toggle: T,
    removeToast: P,
    toasts: h,
    clearQueue: H,
    buildToast: (I, V) => {
      if (w(V)) return;
      let { toastId: Q, updateId: F, data: O, staleId: ne, delay: Z } = V,
        re = F == null;
      re && s++;
      let Oe = {
        ...m,
        style: m.toastStyle,
        key: l++,
        ...Object.fromEntries(
          Object.entries(V).filter(([W, ce]) => ce != null)
        ),
        toastId: Q,
        updateId: F,
        data: O,
        isIn: !1,
        className: Hf(V.className || m.toastClassName),
        progressClassName: Hf(V.progressClassName || m.progressClassName),
        autoClose: V.isLoading ? !1 : G6(V.autoClose, m.autoClose),
        closeToast(W) {
          (h.get(Q).removalReason = W), P(Q);
        },
        deleteToast() {
          let W = h.get(Q);
          if (W != null) {
            if (
              (i(Cy(W, "removed")),
              h.delete(Q),
              s--,
              s < 0 && (s = 0),
              u.length > 0)
            ) {
              z(u.shift());
              return;
            }
            x();
          }
        },
      };
      (Oe.closeButton = m.closeButton),
        V.closeButton === !1 || Pf(V.closeButton)
          ? (Oe.closeButton = V.closeButton)
          : V.closeButton === !0 &&
            (Oe.closeButton = Pf(m.closeButton) ? m.closeButton : !0);
      let ae = { content: I, props: Oe, staleId: ne };
      m.limit && m.limit > 0 && s > m.limit && re
        ? u.push(ae)
        : zl(Z)
        ? setTimeout(() => {
            z(ae);
          }, Z)
        : z(ae);
    },
    setProps(I) {
      m = I;
    },
    setToggle: (I, V) => {
      let Q = h.get(I);
      Q && (Q.toggle = V);
    },
    isToastActive: (I) => {
      var V;
      return (V = h.get(I)) == null ? void 0 : V.isActive;
    },
    getSnapshot: () => f,
  };
}
var $t = new Map(),
  bl = [],
  Vf = new Set(),
  Z6 = (a) => Vf.forEach((t) => t(a)),
  Qb = () => $t.size > 0;
function J6() {
  bl.forEach((a) => Jb(a.content, a.options)), (bl = []);
}
var W6 = (a, { containerId: t }) => {
  var i;
  return (i = $t.get(t || 1)) == null ? void 0 : i.toasts.get(a);
};
function Zb(a, t) {
  var i;
  if (t) return !!((i = $t.get(t)) != null && i.isToastActive(a));
  let l = !1;
  return (
    $t.forEach((s) => {
      s.isToastActive(a) && (l = !0);
    }),
    l
  );
}
function eC(a) {
  if (!Qb()) {
    bl = bl.filter((t) => a != null && t.options.toastId !== a);
    return;
  }
  if (a == null || q6(a))
    $t.forEach((t) => {
      t.removeToast(a);
    });
  else if (a && ("containerId" in a || "id" in a)) {
    let t = $t.get(a.containerId);
    t
      ? t.removeToast(a.id)
      : $t.forEach((i) => {
          i.removeToast(a.id);
        });
  }
}
var tC = (a = {}) => {
  $t.forEach((t) => {
    t.props.limit &&
      (!a.containerId || t.id === a.containerId) &&
      t.clearQueue();
  });
};
function Jb(a, t) {
  Pf(a) &&
    (Qb() || bl.push({ content: a, options: t }),
    $t.forEach((i) => {
      i.buildToast(a, t);
    }));
}
function nC(a) {
  var t;
  (t = $t.get(a.containerId || 1)) == null || t.setToggle(a.id, a.fn);
}
function Wb(a, t) {
  $t.forEach((i) => {
    (t == null ||
      !(t != null && t.containerId) ||
      (t == null ? void 0 : t.containerId) === i.id) &&
      i.toggle(a, t == null ? void 0 : t.id);
  });
}
function aC(a) {
  let t = a.containerId || 1;
  return {
    subscribe(i) {
      let l = Q6(t, a, Z6);
      $t.set(t, l);
      let s = l.observe(i);
      return (
        J6(),
        () => {
          s(), $t.delete(t);
        }
      );
    },
    setProps(i) {
      var l;
      (l = $t.get(t)) == null || l.setProps(i);
    },
    getSnapshot() {
      var i;
      return (i = $t.get(t)) == null ? void 0 : i.getSnapshot();
    },
  };
}
function rC(a) {
  return (
    Vf.add(a),
    () => {
      Vf.delete(a);
    }
  );
}
function iC(a) {
  return a && (Qr(a.toastId) || zl(a.toastId)) ? a.toastId : Fb();
}
function Ul(a, t) {
  return Jb(a, t), t.toastId;
}
function Kc(a, t) {
  return { ...t, type: (t && t.type) || a, toastId: iC(t) };
}
function Fc(a) {
  return (t, i) => Ul(t, Kc(a, i));
}
function Pe(a, t) {
  return Ul(a, Kc("default", t));
}
Pe.loading = (a, t) =>
  Ul(
    a,
    Kc("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  );
function oC(a, { pending: t, error: i, success: l }, s) {
  let u;
  t && (u = Qr(t) ? Pe.loading(t, s) : Pe.loading(t.render, { ...s, ...t }));
  let f = {
      isLoading: null,
      autoClose: null,
      closeOnClick: null,
      closeButton: null,
      draggable: null,
    },
    m = (p, b, x) => {
      if (b == null) {
        Pe.dismiss(u);
        return;
      }
      let w = { type: p, ...f, ...s, data: x },
        T = Qr(b) ? { render: b } : b;
      return u ? Pe.update(u, { ...w, ...T }) : Pe(T.render, { ...w, ...T }), x;
    },
    h = Ca(a) ? a() : a;
  return h.then((p) => m("success", l, p)).catch((p) => m("error", i, p)), h;
}
Pe.promise = oC;
Pe.success = Fc("success");
Pe.info = Fc("info");
Pe.error = Fc("error");
Pe.warning = Fc("warning");
Pe.warn = Pe.warning;
Pe.dark = (a, t) => Ul(a, Kc("default", { theme: "dark", ...t }));
function lC(a) {
  eC(a);
}
Pe.dismiss = lC;
Pe.clearWaitingQueue = tC;
Pe.isActive = Zb;
Pe.update = (a, t = {}) => {
  let i = W6(a, t);
  if (i) {
    let { props: l, content: s } = i,
      u = { delay: 100, ...l, ...t, toastId: t.toastId || a, updateId: Fb() };
    u.toastId !== a && (u.staleId = a);
    let f = u.render || s;
    delete u.render, Ul(f, u);
  }
};
Pe.done = (a) => {
  Pe.update(a, { progress: 1 });
};
Pe.onChange = rC;
Pe.play = (a) => Wb(!0, a);
Pe.pause = (a) => Wb(!1, a);
function sC(a) {
  var t;
  let { subscribe: i, getSnapshot: l, setProps: s } = R.useRef(aC(a)).current;
  s(a);
  let u = (t = R.useSyncExternalStore(i, l, l)) == null ? void 0 : t.slice();
  function f(m) {
    if (!u) return [];
    let h = new Map();
    return (
      a.newestOnTop && u.reverse(),
      u.forEach((p) => {
        let { position: b } = p.props;
        h.has(b) || h.set(b, []), h.get(b).push(p);
      }),
      Array.from(h, (p) => m(p[0], p[1]))
    );
  }
  return {
    getToastToRender: f,
    isToastActive: Zb,
    count: u == null ? void 0 : u.length,
  };
}
function cC(a) {
  let [t, i] = R.useState(!1),
    [l, s] = R.useState(!1),
    u = R.useRef(null),
    f = R.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: m,
      pauseOnHover: h,
      closeToast: p,
      onClick: b,
      closeOnClick: x,
    } = a;
  nC({ id: a.toastId, containerId: a.containerId, fn: i }),
    R.useEffect(() => {
      if (a.pauseOnFocusLoss)
        return (
          w(),
          () => {
            T();
          }
        );
    }, [a.pauseOnFocusLoss]);
  function w() {
    document.hasFocus() || z(),
      window.addEventListener("focus", H),
      window.addEventListener("blur", z);
  }
  function T() {
    window.removeEventListener("focus", H),
      window.removeEventListener("blur", z);
  }
  function A(ne) {
    if (a.draggable === !0 || a.draggable === ne.pointerType) {
      I();
      let Z = u.current;
      (f.canCloseOnClick = !0),
        (f.canDrag = !0),
        (Z.style.transition = "none"),
        a.draggableDirection === "x"
          ? ((f.start = ne.clientX),
            (f.removalDistance = Z.offsetWidth * (a.draggablePercent / 100)))
          : ((f.start = ne.clientY),
            (f.removalDistance =
              (Z.offsetHeight *
                (a.draggablePercent === 80
                  ? a.draggablePercent * 1.5
                  : a.draggablePercent)) /
              100));
    }
  }
  function P(ne) {
    let {
      top: Z,
      bottom: re,
      left: Oe,
      right: ae,
    } = u.current.getBoundingClientRect();
    ne.nativeEvent.type !== "touchend" &&
    a.pauseOnHover &&
    ne.clientX >= Oe &&
    ne.clientX <= ae &&
    ne.clientY >= Z &&
    ne.clientY <= re
      ? z()
      : H();
  }
  function H() {
    i(!0);
  }
  function z() {
    i(!1);
  }
  function I() {
    (f.didMove = !1),
      document.addEventListener("pointermove", Q),
      document.addEventListener("pointerup", F);
  }
  function V() {
    document.removeEventListener("pointermove", Q),
      document.removeEventListener("pointerup", F);
  }
  function Q(ne) {
    let Z = u.current;
    if (f.canDrag && Z) {
      (f.didMove = !0),
        t && z(),
        a.draggableDirection === "x"
          ? (f.delta = ne.clientX - f.start)
          : (f.delta = ne.clientY - f.start),
        f.start !== ne.clientX && (f.canCloseOnClick = !1);
      let re =
        a.draggableDirection === "x"
          ? `${f.delta}px, var(--y)`
          : `0, calc(${f.delta}px + var(--y))`;
      (Z.style.transform = `translate3d(${re},0)`),
        (Z.style.opacity = `${1 - Math.abs(f.delta / f.removalDistance)}`);
    }
  }
  function F() {
    V();
    let ne = u.current;
    if (f.canDrag && f.didMove && ne) {
      if (((f.canDrag = !1), Math.abs(f.delta) > f.removalDistance)) {
        s(!0), a.closeToast(!0), a.collapseAll();
        return;
      }
      (ne.style.transition = "transform 0.2s, opacity 0.2s"),
        ne.style.removeProperty("transform"),
        ne.style.removeProperty("opacity");
    }
  }
  let O = { onPointerDown: A, onPointerUp: P };
  return (
    m && h && ((O.onMouseEnter = z), a.stacked || (O.onMouseLeave = H)),
    x &&
      (O.onClick = (ne) => {
        b && b(ne), f.canCloseOnClick && p(!0);
      }),
    {
      playToast: H,
      pauseToast: z,
      isRunning: t,
      preventExitTransition: l,
      toastRef: u,
      eventHandlers: O,
    }
  );
}
var uC = typeof window < "u" ? R.useLayoutEffect : R.useEffect,
  Qc = ({ theme: a, type: t, isLoading: i, ...l }) =>
    Ye.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        a === "colored" ? "currentColor" : `var(--toastify-icon-color-${t})`,
      ...l,
    });
function dC(a) {
  return Ye.createElement(
    Qc,
    { ...a },
    Ye.createElement("path", {
      d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
    })
  );
}
function fC(a) {
  return Ye.createElement(
    Qc,
    { ...a },
    Ye.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
    })
  );
}
function hC(a) {
  return Ye.createElement(
    Qc,
    { ...a },
    Ye.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
    })
  );
}
function mC(a) {
  return Ye.createElement(
    Qc,
    { ...a },
    Ye.createElement("path", {
      d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
    })
  );
}
function pC() {
  return Ye.createElement("div", { className: "Toastify__spinner" });
}
var qf = { info: fC, warning: dC, success: hC, error: mC, spinner: pC },
  gC = (a) => a in qf;
function yC({ theme: a, type: t, isLoading: i, icon: l }) {
  let s = null,
    u = { theme: a, type: t };
  return (
    l === !1 ||
      (Ca(l)
        ? (s = l({ ...u, isLoading: i }))
        : R.isValidElement(l)
        ? (s = R.cloneElement(l, u))
        : i
        ? (s = qf.spinner())
        : gC(t) && (s = qf[t](u))),
    s
  );
}
var vC = (a) => {
    let {
        isRunning: t,
        preventExitTransition: i,
        toastRef: l,
        eventHandlers: s,
        playToast: u,
      } = cC(a),
      {
        closeButton: f,
        children: m,
        autoClose: h,
        onClick: p,
        type: b,
        hideProgressBar: x,
        closeToast: w,
        transition: T,
        position: A,
        className: P,
        style: H,
        progressClassName: z,
        updateId: I,
        role: V,
        progress: Q,
        rtl: F,
        toastId: O,
        deleteToast: ne,
        isIn: Z,
        isLoading: re,
        closeOnClick: Oe,
        theme: ae,
        ariaLabel: W,
      } = a,
      ce = Yr(
        "Toastify__toast",
        `Toastify__toast-theme--${ae}`,
        `Toastify__toast--${b}`,
        { "Toastify__toast--rtl": F },
        { "Toastify__toast--close-on-click": Oe }
      ),
      oe = Ca(P)
        ? P({ rtl: F, position: A, type: b, defaultClassName: ce })
        : Yr(ce, P),
      be = yC(a),
      D = !!Q || !h,
      J = { closeToast: w, type: b, theme: ae },
      le = null;
    return (
      f === !1 ||
        (Ca(f)
          ? (le = f(J))
          : R.isValidElement(f)
          ? (le = R.cloneElement(f, J))
          : (le = X6(J))),
      Ye.createElement(
        T,
        {
          isIn: Z,
          done: ne,
          position: A,
          preventExitTransition: i,
          nodeRef: l,
          playToast: u,
        },
        Ye.createElement(
          "div",
          {
            id: O,
            tabIndex: 0,
            onClick: p,
            "data-in": Z,
            className: oe,
            ...s,
            style: H,
            ref: l,
            ...(Z && { role: V, "aria-label": W }),
          },
          be != null &&
            Ye.createElement(
              "div",
              {
                className: Yr("Toastify__toast-icon", {
                  "Toastify--animate-icon Toastify__zoom-enter": !re,
                }),
              },
              be
            ),
          Kb(m, a, !t),
          le,
          !a.customProgressBar &&
            Ye.createElement(K6, {
              ...(I && !D ? { key: `p-${I}` } : {}),
              rtl: F,
              theme: ae,
              delay: h,
              isRunning: t,
              isIn: Z,
              closeToast: w,
              hide: x,
              type: b,
              className: z,
              controlledProgress: D,
              progress: Q || 0,
            })
        )
      )
    );
  },
  bC = (a, t = !1) => ({
    enter: `Toastify--animate Toastify__${a}-enter`,
    exit: `Toastify--animate Toastify__${a}-exit`,
    appendPosition: t,
  }),
  wC = Y6(bC("bounce", !0)),
  xC = {
    position: "top-right",
    transition: wC,
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
function _C(a) {
  let t = { ...xC, ...a },
    i = a.stacked,
    [l, s] = R.useState(!0),
    u = R.useRef(null),
    { getToastToRender: f, isToastActive: m, count: h } = sC(t),
    { className: p, style: b, rtl: x, containerId: w, hotKeys: T } = t;
  function A(H) {
    let z = Yr("Toastify__toast-container", `Toastify__toast-container--${H}`, {
      "Toastify__toast-container--rtl": x,
    });
    return Ca(p)
      ? p({ position: H, rtl: x, defaultClassName: z })
      : Yr(z, Hf(p));
  }
  function P() {
    i && (s(!0), Pe.play());
  }
  return (
    uC(() => {
      var H;
      if (i) {
        let z = u.current.querySelectorAll('[data-in="true"]'),
          I = 12,
          V = (H = t.position) == null ? void 0 : H.includes("top"),
          Q = 0,
          F = 0;
        Array.from(z)
          .reverse()
          .forEach((O, ne) => {
            let Z = O;
            Z.classList.add("Toastify__toast--stacked"),
              ne > 0 && (Z.dataset.collapsed = `${l}`),
              Z.dataset.pos || (Z.dataset.pos = V ? "top" : "bot");
            let re = Q * (l ? 0.2 : 1) + (l ? 0 : I * ne);
            Z.style.setProperty("--y", `${V ? re : re * -1}px`),
              Z.style.setProperty("--g", `${I}`),
              Z.style.setProperty("--s", `${1 - (l ? F : 0)}`),
              (Q += Z.offsetHeight),
              (F += 0.025);
          });
      }
    }, [l, h, i]),
    R.useEffect(() => {
      function H(z) {
        var I;
        let V = u.current;
        T(z) &&
          ((I = V.querySelector('[tabIndex="0"]')) == null || I.focus(),
          s(!1),
          Pe.pause()),
          z.key === "Escape" &&
            (document.activeElement === V ||
              (V != null && V.contains(document.activeElement))) &&
            (s(!0), Pe.play());
      }
      return (
        document.addEventListener("keydown", H),
        () => {
          document.removeEventListener("keydown", H);
        }
      );
    }, [T]),
    Ye.createElement(
      "section",
      {
        ref: u,
        className: "Toastify",
        id: w,
        onMouseEnter: () => {
          i && (s(!1), Pe.pause());
        },
        onMouseLeave: P,
        "aria-live": "polite",
        "aria-atomic": "false",
        "aria-relevant": "additions text",
        "aria-label": t["aria-label"],
      },
      f((H, z) => {
        let I = z.length ? { ...b } : { ...b, pointerEvents: "none" };
        return Ye.createElement(
          "div",
          {
            tabIndex: -1,
            className: A(H),
            "data-stacked": i,
            style: I,
            key: `c-${H}`,
          },
          z.map(({ content: V, props: Q }) =>
            Ye.createElement(
              vC,
              {
                ...Q,
                stacked: i,
                collapseAll: P,
                isIn: m(Q.toastId, Q.containerId),
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
const ew = R.createContext("light"),
  EC = ({ children: a }) => {
    const [t, i] = R.useState(localStorage.getItem("theme") === "dark");
    return (
      R.useEffect(() => {
        t
          ? (document.documentElement.classList.add("dark"),
            localStorage.setItem("theme", "dark"))
          : (document.documentElement.classList.remove("dark"),
            localStorage.setItem("theme", "light"));
      }, [t]),
      y.jsx(ew.Provider, {
        value: { darkMode: t, setDarkMode: i },
        children: a,
      })
    );
  },
  SC = () => R.useContext(ew),
  TC = () => {
    const { darkMode: a, setDarkMode: t } = SC();
    return y.jsx("button", {
      onClick: () => t(!a),
      children: a
        ? y.jsx($_, { size: 25, className: "cursor-pointer" })
        : y.jsx(L_, { size: 25, className: "text-gray-900 cursor-pointer" }),
    });
  },
  Ay = y.jsxs(y.Fragment, {
    children: [
      y.jsx("li", {
        className: "text-lg text-orange-500 md:text-xl",
        children: y.jsx(sl, { to: "/", children: "Home" }),
      }),
      y.jsx("li", {
        className: "text-lg text-orange-500 md:text-xl ",
        children: y.jsx(sl, { to: "/allGroups", children: "All Groups" }),
      }),
      y.jsx("li", {
        className: "text-lg text-orange-500 md:text-xl ",
        children: y.jsx(sl, { to: "/createGroup", children: "Create Group" }),
      }),
      y.jsx("li", {
        className: "text-lg text-orange-500 md:text-xl ",
        children: y.jsx(sl, { to: "/myGroups", children: "My Groups" }),
      }),
    ],
  }),
  tw = () => {
    const { user: a, logoutUser: t } = R.useContext(gr),
      i = () => {
        t()
          .then(() => {
            an.fire({
              title: "Successfully Logged Out...!",
              icon: "success",
              draggable: !0,
            });
          })
          .catch((l) => {
            Pe.error("Logout failed...!");
          });
      };
    return y.jsx("div", {
      className:
        "fixed top-0 left-0 w-full z-50 bg-transparent bg-opacity-50 backdrop-blur-md",
      children: y.jsxs("div", {
        className: "navbar w-11/12 mx-auto py-3",
        children: [
          y.jsxs("div", {
            className: "navbar-start",
            children: [
              y.jsxs("div", {
                className: "dropdown",
                children: [
                  y.jsx("div", {
                    tabIndex: 0,
                    role: "button",
                    className: " mr-5 lg:hidden",
                    children: y.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "h-5 w-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: [
                        " ",
                        y.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M4 6h16M4 12h8m-8 6h16",
                        }),
                        " ",
                      ],
                    }),
                  }),
                  y.jsx("ul", {
                    tabIndex: 0,
                    className:
                      "menu menu-sm dropdown-content bg-gray-400 bg-opacity-50 backdrop-blur-md rounded-box z-1 mt-3 w-52 p-2 shadow",
                    children: Ay,
                  }),
                ],
              }),
              y.jsx(iv, {
                className: "rounded-full border mr-2 bg-orange-500",
                size: 30,
                color: "#Ffffff",
              }),
              y.jsx("h3", {
                className:
                  "text-2xl md:text-3xl lg:text-4xl specific-text font-bold text-orange-500 hidden md:block",
                children: "HobbyHub",
              }),
            ],
          }),
          y.jsx("div", {
            className: "navbar-center hidden lg:flex",
            children: y.jsx("ul", {
              className: "menu menu-horizontal px-1",
              children: Ay,
            }),
          }),
          y.jsxs("div", {
            className: "navbar-end gap-2 md:gap-5",
            children: [
              y.jsx("div", { children: y.jsx(TC, {}) }),
              a &&
                y.jsxs("div", {
                  className: "relative group",
                  children: [
                    y.jsx("img", {
                      className:
                        "w-6 md:w-12 h-6 md:h-12 rounded-full border border-orange-600",
                      src: a.photoURL,
                      alt: "userImg",
                    }),
                    y.jsx("div", {
                      className:
                        "absolute  left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10",
                      children: a.displayName,
                    }),
                  ],
                }),
              a
                ? y.jsx("button", {
                    onClick: i,
                    "data-aos": "zoom-in",
                    className:
                      "text-white specific-text text-sm md:text-2xl bg-orange-500 font-medium px-3 md:px-8 py-1 md:py-2 rounded transition-transform duration-500 hover:scale-105 cursor-pointer",
                    children: "LogOut",
                  })
                : y.jsx(zt, {
                    to: "/login",
                    "data-aos": "zoom-in",
                    className:
                      "text-white bg-orange-500 text-sm md:text-2xl specific-text font-medium px-3 md:px-8 py-1 md:py-2 rounded transition-transform duration-500 hover:scale-105",
                    children: "Login",
                  }),
            ],
          }),
        ],
      }),
    });
  },
  CC = () =>
    y.jsx(y.Fragment, {
      children: y.jsx(EC, {
        children: y.jsxs("div", {
          className: "bg-white dark:bg-gray-900 dark:text-white",
          children: [
            y.jsx(tw, {}),
            y.jsx("div", { children: y.jsx(Px, {}) }),
            y.jsx(Y_, {}),
            y.jsx(_C, {}),
          ],
        }),
      }),
    }),
  AC = () => {
    const a = Ic(),
      [t, i] = R.useState(!1);
    return (
      R.useEffect(() => {
        const l = document.documentElement.classList;
        i(l.contains("dark"));
        const s = new MutationObserver(() => {
          i(l.contains("dark"));
        });
        return (
          s.observe(document.documentElement, {
            attributes: !0,
            attributeFilter: ["class"],
          }),
          () => s.disconnect()
        );
      }, []),
      y.jsx("div", {
        className: `bg-cover bg-center p-4 md:p-6 ${
          t
            ? "bg-gray-900"
            : "bg-[url('https://i.ibb.co/4ZG779SZ/paingting.jpg')]"
        }`,
        children: y.jsxs("div", {
          className: "pt-24 w-full max-w-7xl mx-auto mb-20",
          children: [
            y.jsx("h2", {
              "data-aos": "zoom-in",
              className:
                "text-2xl md:text-4xl lg:text-5xl text-orange-500 font-bold text-center specific-text",
              children: "ALL Groups",
            }),
            y.jsx("p", {
              className:
                "text-center text-gray-500 text-sm md:text-lg lg:text-xl mb-6 lg:mb-10 mt-2 px-0 lg:px-20",
              children:
                "On this page, you will be able to explore all the groups created by different users. You can view group details and learn more about each group’s purpose and members. Please note that you cannot update or delete any groups from this section, as it is for informational purposes only.",
            }),
            y.jsx("div", {
              "data-aos": "fade-up",
              className: "overflow-x-auto rounded-xl shadow-2xl",
              children: a.length
                ? y.jsx("div", {
                    className:
                      "overflow-x-auto rounded-xl shadow-md dark:bg-gray-800",
                    children: y.jsxs("table", {
                      className: "table w-full text-center md:text-left",
                      children: [
                        y.jsx("thead", {
                          className:
                            "bg-gradient-to-r from-orange-500 to-red-500 text-white",
                          children: y.jsxs("tr", {
                            children: [
                              y.jsx("th", {
                                className: "text-sm md:text-base lg:text-lg",
                                children: "No.",
                              }),
                              y.jsx("th", {
                                className: "text-sm md:text-base lg:text-lg",
                                children: "Group Name",
                              }),
                              y.jsx("th", {
                                className: "text-sm md:text-base lg:text-lg",
                                children: "Admin",
                              }),
                              y.jsx("th", {
                                className: "text-sm md:text-base lg:text-lg",
                                children: "Email",
                              }),
                              y.jsx("th", {
                                className: "text-sm md:text-base lg:text-lg",
                                children: "Action",
                              }),
                            ],
                          }),
                        }),
                        y.jsx("tbody", {
                          children: a.map((l, s) =>
                            y.jsxs(
                              "tr",
                              {
                                className:
                                  "hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200",
                                children: [
                                  y.jsx("td", {
                                    className:
                                      "text-xs md:text-sm lg:text-base font-semibold text-gray-600 dark:text-gray-400",
                                    children: s + 1,
                                  }),
                                  y.jsx("td", {
                                    children: y.jsx("div", {
                                      className:
                                        "flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3",
                                      children: y.jsxs("div", {
                                        children: [
                                          y.jsx("div", {
                                            className:
                                              "font-bold text-sm md:text-lg text-gray-600 dark:text-gray-400",
                                            children: l.groupName,
                                          }),
                                          y.jsx("div", {
                                            className:
                                              "text-xs md:text-sm text-gray-600 dark:text-gray-400",
                                            children: l.hobbyCategory,
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  y.jsx("td", {
                                    className:
                                      "text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-400",
                                    children: l.name,
                                  }),
                                  y.jsx("td", {
                                    className:
                                      "text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-400",
                                    children: l.email,
                                  }),
                                  y.jsx("td", {
                                    children: y.jsx(zt, {
                                      to: `/groupDetail/${l._id}`,
                                      children: y.jsx("button", {
                                        className:
                                          "cursor-pointer text-orange-500 text-xs md:text-sm lg:text-lg underline",
                                        children: "See more",
                                      }),
                                    }),
                                  }),
                                ],
                              },
                              l._id
                            )
                          ),
                        }),
                      ],
                    }),
                  })
                : y.jsxs("div", {
                    "data-aos": "fade-up",
                    className: "p-10 lg:p-20 space-y-5 dark:bg-gray-800",
                    children: [
                      y.jsx("h2", {
                        className:
                          "text-center font-bold text-2xl md:text-5xl specific-text text-red-400",
                        children: "Oops...!",
                      }),
                      y.jsx("p", {
                        className:
                          "text-center font-semibold text-lg lg:text-2xl text-gray-600 dark:text-gray-400",
                        children:
                          "Right now no group available here, please...",
                      }),
                      y.jsx(zt, {
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
      })
    );
  },
  RC = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
  ],
  OC = () => {
    const { user: a } = R.useContext(gr),
      [t, i] = R.useState(!1),
      l = (s) => {
        s.preventDefault();
        const u = s.target,
          f = new FormData(u),
          p = { ...Object.fromEntries(f.entries()), members: [] };
        fetch("https://hobbyhub-11-server-site.vercel.app/groups", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(p),
        })
          .then((b) => b.json())
          .then((b) => {
            b.acknowledged &&
              an.fire({
                title: "Created Group Successfully!",
                icon: "success",
                draggable: !0,
              });
          });
      };
    return (
      R.useEffect(() => {
        const s = document.documentElement.classList;
        i(s.contains("dark"));
        const u = new MutationObserver(() => {
          i(s.contains("dark"));
        });
        return (
          u.observe(document.documentElement, {
            attributes: !0,
            attributeFilter: ["class"],
          }),
          () => u.disconnect()
        );
      }, []),
      y.jsx("div", {
        className: `min-h-screen bg-cover bg-center flex items-center justify-center ${
          t
            ? "bg-[url('https://i.ibb.co/PvPbJjMy/businessman-hand-pointing-something-touching-touch-screen-black-background-copy-space-34683-2391.jpg')]"
            : "bg-[url('https://i.ibb.co/qMQF3MBw/cartoon-group.jpg')]"
        }`,
        children: y.jsx("div", {
          className: "my-24 w-11/12 lg:w-10/12",
          children: y.jsxs("form", {
            "data-aos": "zoom-in",
            onSubmit: l,
            className:
              "max-w-6xl space-y-6 text-gray-600 dark:text-gray-400 shadow-2xl p-5 md:p-10 lg:p-16 transition-transform duration-500 hover:scale-105 rounded-2xl dark:bg-gray-900",
            children: [
              y.jsx("h2", {
                className:
                  "text-center mb-10 text-2xl md:text-4xl specific-text font-bold text-orange-500",
                children: "Create Group",
              }),
              y.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                  y.jsxs("div", {
                    children: [
                      y.jsxs("label", {
                        className: "block mb-1 font-semibold",
                        htmlFor: "groupName",
                        children: [
                          "Group Name ",
                          y.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      y.jsx("input", {
                        id: "groupName",
                        name: "groupName",
                        type: "text",
                        required: !0,
                        className:
                          "w-full rounded-md p-2  bg-white dark:bg-gray-800 focus:outline-none",
                        placeholder: "Enter group name",
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    children: [
                      y.jsx("label", {
                        className: "block mb-1 font-semibold",
                        htmlFor: "hobbyCategory",
                        children: "Hobby Category",
                      }),
                      y.jsx("select", {
                        id: "hobbyCategory",
                        name: "hobbyCategory",
                        className:
                          "w-full rounded-md p-2  bg-white dark:bg-gray-800 focus:outline-none",
                        children: RC.map((s) =>
                          y.jsx("option", { value: s, children: s }, s)
                        ),
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    children: [
                      y.jsxs("label", {
                        className: "block mb-1 font-semibold",
                        htmlFor: "meetingLocation",
                        children: [
                          "Meeting Location ",
                          y.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      y.jsx("input", {
                        id: "meetingLocation",
                        name: "meetingLocation",
                        type: "text",
                        required: !0,
                        className:
                          "w-full rounded-md p-2 bg-white dark:bg-gray-800  focus:outline-none",
                        placeholder: "Enter meeting location",
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    children: [
                      y.jsxs("label", {
                        className: "block mb-1 font-semibold",
                        htmlFor: "maxMembers",
                        children: [
                          "Max Members ",
                          y.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      y.jsx("input", {
                        id: "maxMembers",
                        name: "maxMembers",
                        type: "number",
                        min: "1",
                        required: !0,
                        className:
                          "w-full rounded-md p-2 bg-white dark:bg-gray-800 focus:outline-none",
                        placeholder: "Enter max members",
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    children: [
                      y.jsxs("label", {
                        className: "block mb-1 font-semibold",
                        htmlFor: "startDate",
                        children: [
                          "Start Date ",
                          y.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      y.jsx("input", {
                        id: "startDate",
                        name: "startDate",
                        type: "date",
                        required: !0,
                        className:
                          "w-full rounded-md p-2 bg-white dark:bg-gray-800 focus:outline-none",
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    children: [
                      y.jsxs("label", {
                        className: "block mb-1 font-semibold",
                        htmlFor: "imageUrl",
                        children: [
                          "Image URL ",
                          y.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      y.jsx("input", {
                        id: "imageUrl",
                        name: "imageUrl",
                        type: "url",
                        required: !0,
                        placeholder: "image URL",
                        className:
                          "w-full rounded-md p-2 bg-white dark:bg-gray-800 focus:outline-none",
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    children: [
                      y.jsx("label", {
                        className: "block mb-1 font-semibold",
                        children: "User Name",
                      }),
                      y.jsx("input", {
                        value: a.displayName,
                        readOnly: !0,
                        name: "name",
                        type: "text",
                        className:
                          "w-full rounded-md p-2 bg-white dark:bg-gray-800  focus:outline-none",
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    children: [
                      y.jsx("label", {
                        className: "block mb-1 font-semibold",
                        children: "User Email",
                      }),
                      y.jsx("input", {
                        value: a.email,
                        readOnly: !0,
                        name: "email",
                        type: "email",
                        className:
                          "w-full rounded-md p-2 bg-white dark:bg-gray-800  focus:outline-none",
                      }),
                    ],
                  }),
                ],
              }),
              y.jsxs("div", {
                children: [
                  y.jsxs("label", {
                    className: "block mb-1 font-semibold",
                    htmlFor: "description",
                    children: [
                      "Description ",
                      y.jsx("span", {
                        className: "text-red-500",
                        children: "*",
                      }),
                    ],
                  }),
                  y.jsx("textarea", {
                    id: "description",
                    name: "description",
                    required: !0,
                    rows: 4,
                    className:
                      "w-full rounded-md p-2  bg-white dark:bg-gray-800 focus:outline-none",
                    placeholder: "Write a brief description",
                  }),
                ],
              }),
              y.jsx("button", {
                type: "submit",
                "data-aos": "zoom-in",
                className:
                  "w-full cursor-pointer bg-transparent border-4 border-white shadow hover:bg-orange-600 hover:text-white text-orange-600 font-semibold py-3 rounded-md text-2xl specific-text transition-transform duration-500 hover:scale-105",
                children: "Create",
              }),
            ],
          }),
        }),
      })
    );
  },
  kC = () => {
    const a = Ic(),
      {
        _id: t,
        groupName: i,
        hobbyCategory: l,
        description: s,
        meetingLocation: u,
        imageUrl: f,
        maxMembers: m,
        startDate: h,
        name: p,
        email: b,
        members: x = [],
      } = a,
      { user: w } = R.useContext(gr),
      [T, A] = R.useState(!1),
      [P, H] = R.useState(x),
      [z, I] = R.useState(!1),
      V = w && P.includes(w.email),
      Q = new Date(),
      O = new Date(h) >= Q,
      ne = async () => {
        A(!0);
        try {
          const re = await (
            await fetch(
              `https://hobbyhub-11-server-site.vercel.app/groups/${t}/join`,
              {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: w.email }),
              }
            )
          ).json();
          re.success
            ? (an.fire({
                icon: "success",
                title: "Joined!",
                text: "Successfully joined the group!",
                timer: 2e3,
                showConfirmButton: !1,
              }),
              H((Oe) => [...Oe, w.email]))
            : an.fire({
                icon: "error",
                title: "Oops!",
                text: re.reason || "Failed to join the group.",
              });
        } catch (Z) {
          console.error(Z),
            an.fire({
              icon: "error",
              title: "Error",
              text: "Something went wrong.",
            });
        } finally {
          A(!1);
        }
      };
    return (
      R.useEffect(() => {
        const Z = document.documentElement.classList;
        I(Z.contains("dark"));
        const re = new MutationObserver(() => {
          I(Z.contains("dark"));
        });
        return (
          re.observe(document.documentElement, {
            attributes: !0,
            attributeFilter: ["class"],
          }),
          () => re.disconnect()
        );
      }, []),
      y.jsx("div", {
        className: `bg-cover bg-center p-4 md:p-6 ${
          z
            ? "bg-[url('https://i.ibb.co/PvCCp2vL/istockphoto-1294603953-612x612.jpg')]"
            : "bg-[url('https://i.ibb.co/yBXDgJkm/mugic.jpg')]"
        }`,
        children: y.jsx("div", {
          "data-aos": "fade-up",
          className: "my-24 w-full max-w-7xl mx-auto ",
          children: y.jsxs("div", {
            className:
              "overflow-x-auto backdrop-blur-3xl rounded-xl shadow-md shadow-gray-",
            children: [
              y.jsx("img", {
                className: "w-full h-full md:h-[400px] bg-cover",
                src: f,
                alt: "group",
              }),
              y.jsxs("div", {
                "data-aos": "fade-left",
                className: "p-10 text-gray-800 dark:text-gray-400 space-y-5",
                children: [
                  y.jsxs("h2", {
                    className:
                      "text-2xl lg:text-4xl font-bold flex items-center gap-2",
                    children: [
                      y.jsx(iv, { className: "border rounded-full" }),
                      " ",
                      i,
                    ],
                  }),
                  y.jsxs("h5", {
                    className: "txt-lg lg:text-2xl",
                    children: [
                      y.jsx("strong", { children: "Category:" }),
                      " ",
                      l,
                    ],
                  }),
                  y.jsxs("p", {
                    className: "text-sm lg:text-xl",
                    children: [
                      y.jsx("strong", { children: "Meeting Location:" }),
                      " ",
                      u,
                    ],
                  }),
                  y.jsxs("p", {
                    className: "text-sm lg:text-xl",
                    children: [
                      y.jsx("strong", { children: "Maximum Members:" }),
                      " ",
                      m,
                    ],
                  }),
                  y.jsxs("p", {
                    className: "text-sm lg:text-xl",
                    children: [
                      y.jsx("strong", { children: "Start Date:" }),
                      " ",
                      h,
                    ],
                  }),
                  y.jsxs("p", {
                    className: "text-sm lg:text-xl",
                    children: [
                      y.jsx("strong", { children: "Created By:" }),
                      " ",
                      p,
                    ],
                  }),
                  y.jsxs("p", {
                    className: "text-sm lg:text-xl",
                    children: [
                      y.jsx("strong", { children: "Admin Email:" }),
                      " ",
                      b,
                    ],
                  }),
                  y.jsxs("p", {
                    className: "text-sm lg:text-xl",
                    children: [
                      y.jsx("strong", { children: "Description:" }),
                      " ",
                      s,
                    ],
                  }),
                  O
                    ? y.jsx("button", {
                        onClick: ne,
                        disabled: V || T || P.length >= Number(m),
                        className: `w-full cursor-pointer border-4 border-white shadow text-xl py-3 rounded-md specific-text transition-transform duration-500 ${
                          V || P.length >= Number(m)
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                            : "bg-transparent hover:bg-orange-600 hover:text-white text-orange-600"
                        }`,
                        title: V
                          ? "You have already joined"
                          : P.length >= Number(m)
                          ? "Group is full"
                          : "",
                        children: V
                          ? "Already Joined"
                          : T
                          ? "Joining..."
                          : P.length >= Number(m)
                          ? "Group Full"
                          : "Join Group",
                      })
                    : y.jsx("p", {
                        className:
                          "text-center text-red-600 font-semibold text-lg",
                        children: "This group is no longer active.",
                      }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  },
  NC = () =>
    y.jsxs("div", {
      className:
        "relative min-h-screen bg-cover bg-center flex items-center justify-center text-center px-4",
      style: {
        backgroundImage:
          "url('https://i.ibb.co/1JGGL08S/istockphoto-483629308-612x612.jpg')",
      },
      children: [
        y.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60 z-0",
        }),
        y.jsxs("div", {
          "data-aos": "fade-up",
          className: "relative z-10",
          children: [
            y.jsx("h1", {
              className:
                "text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white mb-4 specific-text",
              children: "Connect Through Hobbies",
            }),
            y.jsx("p", {
              className:
                "text-white font-medium text-sm md:text-lg lg:text-xl max-w-3xl mx-auto mt-3 md:mt-4 mb-6",
              children:
                "Discover and join local hobby groups or create your own. Whether it's books, hikes, art, or more — build meaningful connections around what you love.",
            }),
            y.jsx(zt, {
              to: "/login",
              className:
                "px-5 py-2 rounded bg-orange-500 hover:bg-orange-600 text-white  font-medium text-lg md:text-xl lg:text-2xl",
              children: "Get Started",
            }),
          ],
        }),
      ],
    }),
  DC = ({ group: a }) => {
    const {
        _id: t,
        groupName: i,
        description: l,
        startDate: s,
        maxMembers: u,
        members: f = [],
        imageUrl: m,
      } = a,
      h = new Date(s);
    h.setDate(h.getDate() + 1);
    const p = h.toISOString().split("T")[0];
    return y.jsxs("div", {
      "data-aos": "fade-up",
      className:
        "bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between p-6",
      children: [
        m &&
          y.jsx("div", {
            "data-aos": "zoom-in",
            className: "overflow-hidden",
            children: y.jsx("img", {
              src: m,
              alt: i,
              className:
                "w-full h-40 object-cover rounded-xl mb-4 transition-transform duration-500 hover:scale-90",
            }),
          }),
        y.jsxs("div", {
          children: [
            y.jsx("h3", {
              className:
                "text-lg md:text-xl lg:text-2xl font-bold text-orange-500 mb-2",
              children: i,
            }),
            y.jsx("p", {
              className:
                "text-gray-600 dark:text-gray-400 text-an md:text-lg mb-4 line-clamp-3",
              children: l,
            }),
            y.jsxs("p", {
              className:
                "text-sm lg:text-lg text-gray-500 dark:text-gray-400 mb-1",
              children: ["📅 ", s, " - ", p],
            }),
            y.jsxs("p", {
              className: "text-sm md:text-lg text-gray-500 dark:text-gray-400",
              children: ["👥 ", f.length, " / ", u, " members"],
            }),
          ],
        }),
        y.jsx("div", {
          className: "mt-4 text-center",
          children: y.jsx(zt, {
            to: `/groupDetail/${t}`,
            className:
              "inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm transition duration-200",
            children: "View Details",
          }),
        }),
      ],
    });
  },
  MC = () => {
    const a = Ic(),
      t = new Date(),
      i = new Date(t.getFullYear(), t.getMonth(), t.getDate()),
      l = a.filter((u) => new Date(u.startDate) >= i),
      s = l.slice(0, 6);
    return y.jsxs("div", {
      className: "mb-10",
      children: [
        y.jsx(NC, {}),
        y.jsxs("section", {
          className: "w-11/12 lg:w-10/12 mx-auto",
          children: [
            y.jsxs("section", {
              "data-aos": "fade-up",
              className: "my-10 lg:my-20",
              children: [
                y.jsx("h2", {
                  className:
                    "text-2xl text-orange-500 md:text-4xl lg:text-5xl specific-text text-center font-bold",
                  children: "Featured Groups",
                }),
                y.jsx("p", {
                  className:
                    "text-center text-sm md:text-lg lg:text-xl mt-5 text-gray-600 dark:text-gray-400 max-w-7xl mx-auto",
                  children:
                    "Featured Groups are handpicked ongoing hobby or interest groups from our platform, specially curated for you. Here, you’ll find active members collaborating, making new friends, and growing their skills together. These groups represent the heart and enthusiasm of our community. Join your favorite group now to learn something new and have fun!",
                }),
                l.length === 0
                  ? y.jsx("div", {
                      className:
                        "flex justify-center items-center mt-10 lg:mt-20",
                      children: y.jsxs("div", {
                        className:
                          "bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 md:p-10 lg:p-16 text-center max-w-5xl w-full",
                        children: [
                          y.jsx("h3", {
                            className:
                              "text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-white mb-3",
                            children: "No Ongoing Groups Found",
                          }),
                          y.jsx("p", {
                            className:
                              "text-gray-500 dark:text-gray-400 mb-5 text-xs md:text-lg lg:text-xl",
                            children:
                              "Currently, there are no active groups available. You can create a new group or explore other available groups.",
                          }),
                          y.jsx(zt, {
                            to: "/allGroups",
                            className:
                              "inline-block text-xs md:text-lg lg:text-xl bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition duration-200",
                            children: "Browse Groups",
                          }),
                        ],
                      }),
                    })
                  : y.jsx("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 lg:my-20",
                      children: s.map((u) => y.jsx(DC, { group: u }, u._id)),
                    }),
              ],
            }),
            y.jsxs("section", {
              "data-aos": "fade-up",
              className:
                "max-w-7xl mx-auto bg-gradient-to-br from-orange-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-md px-8 py-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8",
              children: [
                y.jsxs("div", {
                  className: "md:w-1/2 text-center md:text-left",
                  children: [
                    y.jsx("h2", {
                      className:
                        "text-2xl md:text-4xl font-bold text-gray-600 dark:text-white mb-4",
                      children: "Turn Hobbies Into Real Friendships",
                    }),
                    y.jsx("p", {
                      className:
                        "text-sm md:text-lg text-gray-500 dark:text-gray-400 mb-6",
                      children:
                        "Join a thriving community of people who share your interests. Whether you're into photography, hiking, reading, or cooking — HobbyHub helps you find the perfect group to connect, learn, and grow together.",
                    }),
                    y.jsxs("div", {
                      className:
                        "flex flex-col sm:flex-row gap-4 justify-center md:justify-start",
                      children: [
                        y.jsx(zt, {
                          to: "/allGroups",
                          children: y.jsx("button", {
                            className:
                              "bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition shadow-md cursor-pointer",
                            children: "Explore Groups",
                          }),
                        }),
                        y.jsx(zt, {
                          to: "/createGroup",
                          children: y.jsx("button", {
                            className:
                              "border-2 border-orange-500 text-orange-500 dark:text-orange-300 px-6 py-3 rounded-md hover:bg-orange-100 dark:hover:bg-gray-700 transition shadow-md cursor-pointer",
                            children: "Start a New Group",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                y.jsx("div", {
                  className: "md:w-1/2",
                  children: y.jsx("img", {
                    src: "https://i.ibb.co/DDRQyQ1N/grouping-removebg-preview.png",
                    alt: "Connect Through Hobbies",
                    className:
                      "w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] mx-auto rounded-2xl",
                  }),
                }),
              ],
            }),
            y.jsxs("section", {
              "data-aos": "fade-up",
              className:
                "max-w-7xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-10 my-20",
              children: [
                y.jsx("h2", {
                  className:
                    "text-2xl md:text-4xl font-bold text-center text-gray-600 dark:text-white mb-12",
                  children: "Why Choose HobbyHub?",
                }),
                y.jsxs("div", {
                  className: "grid md:grid-cols-3 gap-10 text-center",
                  children: [
                    y.jsxs("div", {
                      className:
                        "flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-xl transition",
                      children: [
                        y.jsx("div", {
                          className:
                            "bg-indigo-100 dark:bg-indigo-800 p-4 rounded-full mb-4 text-indigo-600 dark:text-indigo-300 text-4xl",
                          children: y.jsx(B_, {}),
                        }),
                        y.jsx("h3", {
                          className:
                            "text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2",
                          children: "Simple & Friendly",
                        }),
                        y.jsx("p", {
                          className:
                            "text-sm md:text-lg text-gray-600 dark:text-gray-400",
                          children:
                            "Effortless to use with an intuitive UI that makes connecting easy.",
                        }),
                      ],
                    }),
                    y.jsxs("div", {
                      className:
                        "flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-xl transition",
                      children: [
                        y.jsx("div", {
                          className:
                            "bg-green-100 dark:bg-green-800 p-4 rounded-full mb-4 text-green-600 dark:text-green-300 text-4xl",
                          children: y.jsx(I_, {}),
                        }),
                        y.jsx("h3", {
                          className:
                            "text-sm md:text-lg text-xl font-semibold text-green-700 dark:text-green-300 mb-2",
                          children: "Join or Create",
                        }),
                        y.jsx("p", {
                          className: "text-gray-600 dark:text-gray-400",
                          children:
                            "Explore existing hobby groups or launch your own with ease.",
                        }),
                      ],
                    }),
                    y.jsxs("div", {
                      className:
                        "flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-xl transition",
                      children: [
                        y.jsx("div", {
                          className:
                            "bg-purple-100 dark:bg-purple-800 p-4 rounded-full mb-4 text-purple-600 dark:text-purple-300 text-4xl",
                          children: y.jsx(j_, {}),
                        }),
                        y.jsx("h3", {
                          className:
                            "text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2",
                          children: "Real Community",
                        }),
                        y.jsx("p", {
                          className:
                            "text-sm md:text-lg text-gray-600 dark:text-gray-400",
                          children:
                            "Connect with real people nearby and enjoy hobbies together offline.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  dl = () =>
    y.jsx("div", {
      className: "min-h-screen flex justify-center items-center",
      children: y.jsx("span", {
        className: "loading loading-spinner loading-xl text-primary",
      }),
    }),
  jC = () => {
    const { loginUser: a, googleLogin: t } = R.useContext(gr),
      i = xl(),
      l = ea(),
      s = R.useRef(),
      u = (m) => {
        m.preventDefault();
        const h = m.target,
          p = h.email.value,
          b = h.password.value;
        a(p, b)
          .then((x) => {
            an.fire({
              title: "Successfully Login!",
              icon: "success",
              draggable: !0,
            }),
              i(`${l.state ? l.state : "/"}`);
          })
          .catch((x) => {
            Pe.error("Login fail" + x.code);
          });
      },
      f = () => {
        t()
          .then((m) => {
            an.fire({
              title: "Google Login Successfully...!",
              icon: "success",
              draggable: !0,
            }),
              i(`${l.state ? l.state : "/"}`);
          })
          .catch((m) => {
            Pe.error("Google Login fail " + m.message);
          });
      };
    return y.jsx("div", {
      className:
        "min-h-screen bg-cover bg-center flex items-center justify-center",
      style: {
        backgroundImage:
          "url('https://i.ibb.co/1JGGL08S/istockphoto-483629308-612x612.jpg')",
      },
      children: y.jsxs("div", {
        "data-aos": "zoom-in",
        className:
          "transition-transform duration-500 hover:scale-105 backdrop-blur-xs p-8 rounded-2xl w-full max-w-md text-white shadow shadow-white ",
        children: [
          y.jsx("div", {
            className: " mb-4",
            children: y.jsx("h2", {
              className: "text-2xl text-center font-bold",
              children: "Login",
            }),
          }),
          y.jsxs("form", {
            onSubmit: u,
            className: "space-y-4",
            children: [
              y.jsxs("div", {
                children: [
                  y.jsx("label", {
                    className: "block mb-1",
                    children: "Email",
                  }),
                  y.jsxs("div", {
                    className: "relative",
                    children: [
                      y.jsx("span", {
                        className:
                          "absolute left-3 top-3 text-white opacity-70",
                        children: y.jsx(av, {}),
                      }),
                      y.jsx("input", {
                        name: "email",
                        ref: s,
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
              y.jsxs("div", {
                children: [
                  y.jsx("label", {
                    className: "block mb-1",
                    children: "Password",
                  }),
                  y.jsxs("div", {
                    className: "relative",
                    children: [
                      y.jsx("span", {
                        className:
                          "absolute left-3 top-3 text-white opacity-70",
                        children: y.jsx(rv, {}),
                      }),
                      y.jsx("input", {
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
              y.jsxs("div", {
                className: "flex justify-between text-sm items-center",
                children: [
                  y.jsxs("label", {
                    className: "flex items-center gap-2",
                    children: [
                      y.jsx("input", {
                        type: "checkbox",
                        className: "accent-blue-400",
                      }),
                      "Remember me",
                    ],
                  }),
                  y.jsx("a", {
                    href: "#",
                    className: "hover:underline",
                    children: "Forgot Password?",
                  }),
                ],
              }),
              y.jsx("button", {
                type: "submit",
                className:
                  "w-full cursor-pointer py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition",
                children: "Login",
              }),
            ],
          }),
          y.jsxs("p", {
            className: "text-center text-sm mt-4",
            children: [
              "Don’t have an account?",
              " ",
              y.jsx(zt, {
                to: "/register",
                className: "underline font-semibold",
                children: "Register",
              }),
            ],
          }),
          y.jsx("div", {
            className: "divider text-white before:bg-white after:bg-white",
            children: "OR",
          }),
          y.jsxs("button", {
            onClick: f,
            className: "btn bg-white text-black border-[#e5e5e5] w-full",
            children: [
              y.jsx("svg", {
                "aria-label": "Google logo",
                width: "16",
                height: "16",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512",
                children: y.jsxs("g", {
                  children: [
                    y.jsx("path", { d: "m0 0H512V512H0", fill: "#fff" }),
                    y.jsx("path", {
                      fill: "#34a853",
                      d: "M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341",
                    }),
                    y.jsx("path", {
                      fill: "#4285f4",
                      d: "m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57",
                    }),
                    y.jsx("path", {
                      fill: "#fbbc02",
                      d: "m90 341a208 200 0 010-171l63 49q-12 37 0 73",
                    }),
                    y.jsx("path", {
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
function LC(a) {
  return St({
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
const zC = () => {
    const [a, t] = R.useState([]),
      [i, l] = R.useState(!1),
      { user: s } = R.useContext(gr);
    R.useEffect(() => {
      fetch(
        `https://hobbyhub-11-server-site.vercel.app/groups?emailParams=${
          s == null ? void 0 : s.email
        }`
      )
        .then((f) => f.json())
        .then((f) => t(f));
    }, [s == null ? void 0 : s.email]);
    const u = (f) => {
      an.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((m) => {
        m.isConfirmed &&
          fetch(`https://hobbyhub-11-server-site.vercel.app/groups/${f}`, {
            method: "DELETE",
          })
            .then((h) => h.json())
            .then((h) => {
              if (h.deletedCount) {
                an.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                const p = a.filter((b) => b._id !== f);
                t(p);
              }
            });
      });
    };
    return (
      R.useEffect(() => {
        const f = document.documentElement.classList;
        l(f.contains("dark"));
        const m = new MutationObserver(() => {
          l(f.contains("dark"));
        });
        return (
          m.observe(document.documentElement, {
            attributes: !0,
            attributeFilter: ["class"],
          }),
          () => m.disconnect()
        );
      }, []),
      y.jsx("div", {
        className: `bg-cover bg-center p-4 md:p-6 ${
          i
            ? "bg-gray-900"
            : "bg-[url('https://i.ibb.co/4ZG779SZ/paingting.jpg')]"
        }`,
        children: y.jsxs("div", {
          className: "mt-24 w-full max-w-7xl mx-auto mb-20",
          children: [
            y.jsxs("div", {
              "data-aos": "zoom-in",
              children: [
                y.jsx("h2", {
                  className: `text-2xl md:text-4xl lg:text-5xl text-orange-500 font-bold text-center specific-text\r
        `,
                  children: "Your Created Group",
                }),
                y.jsx("p", {
                  className:
                    "text-center text-gray-500 text-sm md:text-lg lg:text-xl mb-6 lg:mb-10 mt-2 px-0 lg:px-20",
                  children:
                    "On this page you will be able to see all your created groups and take action. You will be able to see the details of your group, if you need to update the group then you can update it by clicking on the update button and if you need to delete the group then you can delete it by clicking on the delete button",
                }),
              ],
            }),
            y.jsx("div", {
              "data-aos": "fade-up",
              className:
                "overflow-x-auto rounded-xl shadow-2xl dark:bg-gray-800",
              children: a.length
                ? y.jsxs("table", {
                    className: "table w-full text-center md:text-left",
                    children: [
                      y.jsx("thead", {
                        className:
                          "bg-gradient-to-r from-orange-500 to-red-500 text-white",
                        children: y.jsxs("tr", {
                          children: [
                            y.jsx("th", {
                              className: "text-sm md:text-base lg:text-lg",
                              children: "No.",
                            }),
                            y.jsx("th", {
                              className: "text-sm md:text-base lg:text-lg",
                              children: "Group Name",
                            }),
                            y.jsx("th", {
                              className: "text-sm md:text-base lg:text-lg",
                              children: "Admin",
                            }),
                            y.jsx("th", {
                              className: "text-sm md:text-base lg:text-lg",
                              children: "Email",
                            }),
                            y.jsx("th", {
                              className: "text-sm md:text-base lg:text-lg",
                              children: "Action",
                            }),
                          ],
                        }),
                      }),
                      y.jsx("tbody", {
                        children: a.map((f, m) =>
                          y.jsxs(
                            "tr",
                            {
                              className:
                                "hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200",
                              children: [
                                y.jsx("td", {
                                  className:
                                    "text-xs md:text-sm lg:text-base font-semibold text-gray-600 dark:text-gray-400",
                                  children: m + 1,
                                }),
                                y.jsx("td", {
                                  children: y.jsx("div", {
                                    className:
                                      "flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3 ",
                                    children: y.jsxs("div", {
                                      children: [
                                        y.jsx("div", {
                                          className:
                                            "font-bold text-sm md:text-lg text-gray-500 dark:text-gray-400",
                                          children: f.groupName,
                                        }),
                                        y.jsx("div", {
                                          className:
                                            "text-xs md:text-sm text-gray-500 dark:text-gray-400 ",
                                          children: f.hobbyCategory,
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                y.jsx("td", {
                                  className:
                                    "text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-400",
                                  children: f.name,
                                }),
                                y.jsx("td", {
                                  className:
                                    "text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-400",
                                  children: f.email,
                                }),
                                y.jsx("td", {
                                  children: y.jsxs("div", {
                                    className: "flex gap-4",
                                    children: [
                                      y.jsx(zt, {
                                        to: `/groupDetail/${f._id}`,
                                        children: y.jsx("button", {
                                          className:
                                            "cursor-pointer rounded bg-transparent shadow shadow-gray-300 p-[10px]",
                                          children: y.jsx(LC, {
                                            size: 20,
                                            color: " #17a2b8",
                                          }),
                                        }),
                                      }),
                                      y.jsx(zt, {
                                        to: `/updateGroup/${f._id}`,
                                        children: y.jsx("button", {
                                          className:
                                            "cursor-pointer rounded bg-transparent shadow shadow-gray-300 p-[10px]",
                                          children: y.jsx(z_, {
                                            size: 20,
                                            color: "#b182e3",
                                          }),
                                        }),
                                      }),
                                      y.jsx("button", {
                                        onClick: () => u(f._id),
                                        className:
                                          "cursor-pointer rounded bg-transparent shadow shadow-gray-300 p-[10px]",
                                        children: y.jsx(P_, {
                                          size: 20,
                                          color: "#FF0000",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            },
                            f._id
                          )
                        ),
                      }),
                    ],
                  })
                : y.jsxs("div", {
                    "data-aos": "fade-up",
                    className: "p-10 lg:p-20 space-y-5 dark:bg-gray-800",
                    children: [
                      y.jsx("h2", {
                        className:
                          "text-center font-bold text-2xl md:text-5xl specific-text text-red-400",
                        children: "Oops...!",
                      }),
                      y.jsx("p", {
                        className:
                          "text-center font-semibold text-lg lg:text-2xl text-gray-600 dark:text-gray-400",
                        children:
                          "Right now your no group available here, please...",
                      }),
                      y.jsx(zt, {
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
      })
    );
  },
  UC = () => {
    const { createUser: a, updateUser: t, setUser: i } = R.useContext(gr),
      l = xl(),
      s = (u) => {
        u.preventDefault();
        const f = u.target,
          m = f.name.value,
          h = f.photo.value,
          p = f.email.value,
          b = f.password.value;
        if (!/[A-Z]/.test(b)) {
          Pe.error("Password must contain at least one uppercase letter.");
          return;
        }
        if (!/[a-z]/.test(b)) {
          Pe.error("Password must contain at least one lowercase letter.");
          return;
        }
        if (b.length < 6) {
          Pe.error("Password must be at least 6 characters long.");
          return;
        }
        a(p, b)
          .then((x) => {
            const w = x.user;
            t({ displayName: m, photoURL: h })
              .then(() => {
                i({ ...w, displayName: m, photoURL: h }),
                  an.fire({
                    title: "Register Successfully...!",
                    icon: "success",
                    draggable: !0,
                  }),
                  l("/");
              })
              .catch((T) => {
                console.log(T), i(w);
              });
          })
          .catch((x) => {
            const w = x.message;
            Pe.error("Register fail" + w);
          });
      };
    return y.jsx("div", {
      className:
        "min-h-screen bg-cover bg-center flex items-center justify-center",
      style: {
        backgroundImage: "url('https://i.ibb.co/Y495bg1M/img-122.jpg')",
      },
      children: y.jsxs("div", {
        "data-aos": "zoom-in",
        className:
          "transition-transform duration-500 hover:scale-105 backdrop-blur-xs p-8 rounded-2xl w-full max-w-md shadow shadow-white text-white",
        children: [
          y.jsx("div", {
            className: "mb-4",
            children: y.jsx("h2", {
              className: "text-2xl text-center font-bold",
              children: "Register",
            }),
          }),
          y.jsxs("form", {
            onSubmit: s,
            className: "space-y-4",
            children: [
              y.jsxs("div", {
                children: [
                  y.jsx("label", { className: "block mb-1", children: "Name" }),
                  y.jsxs("div", {
                    className: "relative",
                    children: [
                      y.jsx("span", {
                        className:
                          "absolute left-3 top-2.5 text-white opacity-70",
                        children: y.jsx(H_, {}),
                      }),
                      y.jsx("input", {
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
              y.jsxs("div", {
                children: [
                  y.jsx("label", {
                    className: "block mb-1",
                    children: "Photo",
                  }),
                  y.jsxs("div", {
                    className: "relative",
                    children: [
                      y.jsx("span", {
                        className:
                          "absolute left-3 top-3.5 text-white opacity-70",
                        children: y.jsx(U_, {}),
                      }),
                      y.jsx("input", {
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
              y.jsxs("div", {
                children: [
                  y.jsx("label", {
                    className: "block mb-1",
                    children: "Email",
                  }),
                  y.jsxs("div", {
                    className: "relative",
                    children: [
                      y.jsx("span", {
                        className:
                          "absolute left-3 top-3 text-white opacity-70",
                        children: y.jsx(av, {}),
                      }),
                      y.jsx("input", {
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
              y.jsxs("div", {
                children: [
                  y.jsx("label", {
                    className: "block mb-1",
                    children: "Password",
                  }),
                  y.jsxs("div", {
                    className: "relative",
                    children: [
                      y.jsx("span", {
                        className:
                          "absolute left-3 top-3 text-white opacity-70",
                        children: y.jsx(rv, {}),
                      }),
                      y.jsx("input", {
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
              y.jsx("button", {
                type: "submit",
                className:
                  "w-full cursor-pointer py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition",
                children: "Register",
              }),
            ],
          }),
          y.jsxs("p", {
            className: "text-center text-sm mt-4",
            children: [
              "Already have an account?",
              " ",
              y.jsx(zt, {
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
  IC = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
  ],
  BC = () => {
    const a = xl(),
      {
        groupName: t,
        hobbyCategory: i,
        description: l,
        meetingLocation: s,
        maxMembers: u,
        startDate: f,
        imageUrl: m,
        _id: h,
        name: p,
        email: b,
      } = Ic(),
      [x, w] = R.useState(!1),
      T = (A) => {
        A.preventDefault();
        const P = A.target,
          H = new FormData(P),
          z = Object.fromEntries(H.entries());
        fetch(`https://hobbyhub-11-server-site.vercel.app/groups/${h}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(z),
        })
          .then((I) => I.json())
          .then((I) => {
            I.modifiedCount &&
              (console.log("data after db", I),
              an.fire({
                title: "Group Update Successfully!",
                icon: "success",
                draggable: !0,
              }),
              a("/"));
          });
      };
    return (
      R.useEffect(() => {
        const A = document.documentElement.classList;
        w(A.contains("dark"));
        const P = new MutationObserver(() => {
          w(A.contains("dark"));
        });
        return (
          P.observe(document.documentElement, {
            attributes: !0,
            attributeFilter: ["class"],
          }),
          () => P.disconnect()
        );
      }, []),
      y.jsx("div", {
        className: `min-h-screen bg-cover bg-center flex items-center justify-center ${
          x
            ? "bg-[url('https://i.ibb.co/PvPbJjMy/businessman-hand-pointing-something-touching-touch-screen-black-background-copy-space-34683-2391.jpg')]"
            : "bg-[url('https://i.ibb.co/qMQF3MBw/cartoon-group.jpg')]"
        }`,
        children: y.jsx("div", {
          className: "my-24 w-11/12 lg:w-10/12",
          children: y.jsxs("form", {
            "data-aos": "zoom-in",
            onSubmit: T,
            className:
              "max-w-6xl space-y-6 text-gray-600 dark:text-gray-400 shadow-2xl p-5 md:p-10 lg:p-16 rounded-2xl transition-transform duration-500 hover:scale-105 dark:bg-gray-900",
            children: [
              y.jsx("h2", {
                className:
                  "text-center mb-10 text-2xl md:text-4xl specific-text font-bold text-orange-500",
                children: "Update Group",
              }),
              y.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                  y.jsxs("div", {
                    children: [
                      y.jsx("label", {
                        className: "font-semibold mb-1",
                        children: "Group Name",
                      }),
                      y.jsx("input", {
                        id: "groupName",
                        name: "groupName",
                        type: "text",
                        defaultValue: t,
                        className:
                          "w-full rounded-md p-2  bg-white dark:bg-gray-800 focus:outline-none",
                        placeholder: "Enter group name",
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    children: [
                      y.jsx("label", {
                        className: "mb-1 font-semibold",
                        children: "Hobby Category",
                      }),
                      y.jsx("select", {
                        id: "hobbyCategory",
                        name: "hobbyCategory",
                        defaultValue: i,
                        className:
                          "w-full rounded-md p-2  bg-white dark:bg-gray-800 focus:outline-none",
                        children: IC.map((A) =>
                          y.jsx("option", { value: A, children: A }, A)
                        ),
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    children: [
                      y.jsx("label", {
                        className: "mb-1 font-semibold",
                        children: "Meeting Location",
                      }),
                      y.jsx("input", {
                        id: "meetingLocation",
                        name: "meetingLocation",
                        type: "text",
                        defaultValue: s,
                        className:
                          "w-full rounded-md p-2  bg-white dark:bg-gray-800 focus:outline-none",
                        placeholder: "Enter meeting location",
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    children: [
                      y.jsx("label", {
                        className: "mb-1 font-semibold",
                        children: "Max Members",
                      }),
                      y.jsx("input", {
                        id: "maxMembers",
                        name: "maxMembers",
                        type: "number",
                        min: "1",
                        defaultValue: u,
                        className:
                          "w-full rounded-md p-2  bg-white dark:bg-gray-800 focus:outline-none",
                        placeholder: "Enter max members",
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    children: [
                      y.jsx("label", {
                        className: "mb-1 font-semibold",
                        children: "Start Date",
                      }),
                      y.jsx("input", {
                        id: "startDate",
                        name: "startDate",
                        type: "date",
                        defaultValue: f,
                        className:
                          "w-full rounded-md p-2  bg-white dark:bg-gray-800 focus:outline-none",
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    children: [
                      y.jsx("label", {
                        className: " mb-1 font-semibold",
                        children: "Image URL",
                      }),
                      y.jsx("input", {
                        defaultValue: m,
                        id: "imageUrl",
                        name: "imageUrl",
                        type: "url",
                        placeholder: "image URL",
                        className:
                          "w-full rounded-md p-2  bg-white dark:bg-gray-800 focus:outline-none",
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    children: [
                      y.jsx("label", {
                        className: "block mb-1 font-semibold",
                        children: "User Name",
                      }),
                      y.jsx("input", {
                        value: p,
                        readOnly: !0,
                        name: "name",
                        type: "text",
                        className:
                          "w-full rounded-md p-2  bg-white dark:bg-gray-800 focus:outline-none",
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    children: [
                      y.jsx("label", {
                        className: "block mb-1 font-semibold",
                        children: "User Email",
                      }),
                      y.jsx("input", {
                        value: b,
                        readOnly: !0,
                        name: "email",
                        type: "email",
                        className:
                          "w-full rounded-md p-2  bg-white dark:bg-gray-800 focus:outline-none",
                      }),
                    ],
                  }),
                ],
              }),
              y.jsxs("div", {
                children: [
                  y.jsx("label", {
                    className: "mb-1 font-semibold",
                    children: "Description",
                  }),
                  y.jsx("textarea", {
                    id: "description",
                    name: "description",
                    defaultValue: l,
                    rows: 4,
                    className:
                      "w-full rounded-md p-2  bg-white dark:bg-gray-800 focus:outline-none",
                    placeholder: "Write a brief description",
                  }),
                ],
              }),
              y.jsx("button", {
                "data-aos": "zoom-in",
                type: "submit",
                className:
                  "w-full cursor-pointer bg-transparent border-4 border-white shadow hover:bg-orange-600 hover:text-white text-orange-600 font-semibold py-3 rounded-md text-2xl specific-text transition-transform duration-500 hover:scale-105",
                children: "Update",
              }),
            ],
          }),
        }),
      })
    );
  },
  ac = ({ children: a }) => {
    const { user: t, loader: i } = R.useContext(gr),
      l = ea();
    return i
      ? y.jsx(dl, {})
      : t && t != null && t.email
      ? a
      : y.jsx(Hx, { state: l.pathname, to: "/login" });
  },
  HC = () =>
    y.jsxs("div", {
      className:
        "min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-4",
      style: {
        backgroundImage:
          "url('https://i.ibb.co/s9sYZRSm/free-photos-free-images-647d84-1024.jpg')",
      },
      children: [
        y.jsx(tw, {}),
        y.jsx("section", {
          className:
            " bg-transparent rounded-2xl shadow-md shadow-white px-8 py-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center border-4 border-gray-400 ",
          children: y.jsxs("div", {
            children: [
              y.jsx("h2", {
                className: "text-5xl font-semibold specific-text",
                children: "Oops !",
              }),
              y.jsx("p", {
                className: "text-white font-medium text-2xl my-8",
                children: "It looks like you have taken a wrong turn",
              }),
              y.jsx("h1", {
                className: "text-9xl font-bold text-white",
                children: "404",
              }),
              y.jsx("h4", {
                className: "text-white font-semibold text-2xl mt-3",
                children: "PAGE NOT FOUND",
              }),
              y.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-2 mt-8",
                children: [
                  y.jsx(zt, {
                    to: "/",
                    children: y.jsx("button", {
                      className:
                        "bg-white text-gray-700 text-xl font-medium px-5 py-3 rounded cursor-pointer",
                      children: "Back to Home",
                    }),
                  }),
                  y.jsx(zt, {
                    to: "/createGroup",
                    children: y.jsx("button", {
                      className:
                        "text-white text-xl font-medium px-5 py-3 rounded border-2 border-orange-500 cursor-pointer ",
                      children: "Create Group",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  PC = f_([
    {
      path: "/",
      Component: CC,
      errorElement: y.jsx(HC, {}),
      children: [
        {
          index: !0,
          loader: () =>
            fetch("https://hobbyhub-11-server-site.vercel.app/groups"),
          Component: MC,
          hydrateFallbackElement: y.jsx(dl, {}),
        },
        {
          path: "allGroups",
          loader: () =>
            fetch("https://hobbyhub-11-server-site.vercel.app/groups"),
          Component: AC,
          hydrateFallbackElement: y.jsx(dl, {}),
        },
        {
          path: "createGroup",
          element: y.jsx(ac, { children: y.jsx(OC, {}) }),
        },
        { path: "register", Component: UC },
        { path: "login", Component: jC },
        {
          path: "groupDetail/:id",
          loader: ({ params: a }) =>
            fetch(`https://hobbyhub-11-server-site.vercel.app/groups/${a.id}`),
          element: y.jsx(ac, { children: y.jsx(kC, {}) }),
          hydrateFallbackElement: y.jsx(dl, {}),
        },
        { path: "myGroups", element: y.jsx(ac, { children: y.jsx(zC, {}) }) },
        {
          path: "updateGroup/:id",
          loader: ({ params: a }) =>
            fetch(`https://hobbyhub-11-server-site.vercel.app/groups/${a.id}`),
          element: y.jsx(ac, { children: y.jsx(BC, {}) }),
          hydrateFallbackElement: y.jsx(dl, {}),
        },
      ],
    },
  ]);
var dc = { exports: {} },
  VC = dc.exports,
  Ry;
function qC() {
  return (
    Ry ||
      ((Ry = 1),
      (function (a, t) {
        (function (i, l) {
          a.exports = l();
        })(VC, function () {
          return (function (i) {
            function l(u) {
              if (s[u]) return s[u].exports;
              var f = (s[u] = { exports: {}, id: u, loaded: !1 });
              return (
                i[u].call(f.exports, f, f.exports, l),
                (f.loaded = !0),
                f.exports
              );
            }
            var s = {};
            return (l.m = i), (l.c = s), (l.p = "dist/"), l(0);
          })([
            function (i, l, s) {
              function u(oe) {
                return oe && oe.__esModule ? oe : { default: oe };
              }
              var f =
                  Object.assign ||
                  function (oe) {
                    for (var be = 1; be < arguments.length; be++) {
                      var D = arguments[be];
                      for (var J in D)
                        Object.prototype.hasOwnProperty.call(D, J) &&
                          (oe[J] = D[J]);
                    }
                    return oe;
                  },
                m = s(1),
                h = (u(m), s(6)),
                p = u(h),
                b = s(7),
                x = u(b),
                w = s(8),
                T = u(w),
                A = s(9),
                P = u(A),
                H = s(10),
                z = u(H),
                I = s(11),
                V = u(I),
                Q = s(14),
                F = u(Q),
                O = [],
                ne = !1,
                Z = {
                  offset: 120,
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  disable: !1,
                  once: !1,
                  startEvent: "DOMContentLoaded",
                  throttleDelay: 99,
                  debounceDelay: 50,
                  disableMutationObserver: !1,
                },
                re = function () {
                  var oe =
                    arguments.length > 0 &&
                    arguments[0] !== void 0 &&
                    arguments[0];
                  if ((oe && (ne = !0), ne))
                    return (
                      (O = (0, V.default)(O, Z)), (0, z.default)(O, Z.once), O
                    );
                },
                Oe = function () {
                  (O = (0, F.default)()), re();
                },
                ae = function () {
                  O.forEach(function (oe, be) {
                    oe.node.removeAttribute("data-aos"),
                      oe.node.removeAttribute("data-aos-easing"),
                      oe.node.removeAttribute("data-aos-duration"),
                      oe.node.removeAttribute("data-aos-delay");
                  });
                },
                W = function (oe) {
                  return (
                    oe === !0 ||
                    (oe === "mobile" && P.default.mobile()) ||
                    (oe === "phone" && P.default.phone()) ||
                    (oe === "tablet" && P.default.tablet()) ||
                    (typeof oe == "function" && oe() === !0)
                  );
                },
                ce = function (oe) {
                  (Z = f(Z, oe)), (O = (0, F.default)());
                  var be = document.all && !window.atob;
                  return W(Z.disable) || be
                    ? ae()
                    : (Z.disableMutationObserver ||
                        T.default.isSupported() ||
                        (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                        (Z.disableMutationObserver = !0)),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-easing", Z.easing),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-duration", Z.duration),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-delay", Z.delay),
                      Z.startEvent === "DOMContentLoaded" &&
                      ["complete", "interactive"].indexOf(document.readyState) >
                        -1
                        ? re(!0)
                        : Z.startEvent === "load"
                        ? window.addEventListener(Z.startEvent, function () {
                            re(!0);
                          })
                        : document.addEventListener(Z.startEvent, function () {
                            re(!0);
                          }),
                      window.addEventListener(
                        "resize",
                        (0, x.default)(re, Z.debounceDelay, !0)
                      ),
                      window.addEventListener(
                        "orientationchange",
                        (0, x.default)(re, Z.debounceDelay, !0)
                      ),
                      window.addEventListener(
                        "scroll",
                        (0, p.default)(function () {
                          (0, z.default)(O, Z.once);
                        }, Z.throttleDelay)
                      ),
                      Z.disableMutationObserver ||
                        T.default.ready("[data-aos]", Oe),
                      O);
                };
              i.exports = { init: ce, refresh: re, refreshHard: Oe };
            },
            function (i, l) {},
            ,
            ,
            ,
            ,
            function (i, l) {
              (function (s) {
                function u(W, ce, oe) {
                  function be(De) {
                    var At = se,
                      yn = Ce;
                    return (
                      (se = Ce = void 0), (We = De), (Ve = W.apply(yn, At))
                    );
                  }
                  function D(De) {
                    return (
                      (We = De), (ke = setTimeout(Ee, ce)), xt ? be(De) : Ve
                    );
                  }
                  function J(De) {
                    var At = De - st,
                      yn = De - We,
                      It = ce - At;
                    return Ut ? Oe(It, fe - yn) : It;
                  }
                  function le(De) {
                    var At = De - st,
                      yn = De - We;
                    return (
                      st === void 0 || At >= ce || At < 0 || (Ut && yn >= fe)
                    );
                  }
                  function Ee() {
                    var De = ae();
                    return le(De) ? E(De) : void (ke = setTimeout(Ee, J(De)));
                  }
                  function E(De) {
                    return (
                      (ke = void 0),
                      Qe && se ? be(De) : ((se = Ce = void 0), Ve)
                    );
                  }
                  function $() {
                    ke !== void 0 && clearTimeout(ke),
                      (We = 0),
                      (se = st = Ce = ke = void 0);
                  }
                  function ie() {
                    return ke === void 0 ? Ve : E(ae());
                  }
                  function ee() {
                    var De = ae(),
                      At = le(De);
                    if (((se = arguments), (Ce = this), (st = De), At)) {
                      if (ke === void 0) return D(st);
                      if (Ut) return (ke = setTimeout(Ee, ce)), be(st);
                    }
                    return ke === void 0 && (ke = setTimeout(Ee, ce)), Ve;
                  }
                  var se,
                    Ce,
                    fe,
                    Ve,
                    ke,
                    st,
                    We = 0,
                    xt = !1,
                    Ut = !1,
                    Qe = !0;
                  if (typeof W != "function") throw new TypeError(w);
                  return (
                    (ce = b(ce) || 0),
                    m(oe) &&
                      ((xt = !!oe.leading),
                      (Ut = "maxWait" in oe),
                      (fe = Ut ? re(b(oe.maxWait) || 0, ce) : fe),
                      (Qe = "trailing" in oe ? !!oe.trailing : Qe)),
                    (ee.cancel = $),
                    (ee.flush = ie),
                    ee
                  );
                }
                function f(W, ce, oe) {
                  var be = !0,
                    D = !0;
                  if (typeof W != "function") throw new TypeError(w);
                  return (
                    m(oe) &&
                      ((be = "leading" in oe ? !!oe.leading : be),
                      (D = "trailing" in oe ? !!oe.trailing : D)),
                    u(W, ce, { leading: be, maxWait: ce, trailing: D })
                  );
                }
                function m(W) {
                  var ce = typeof W > "u" ? "undefined" : x(W);
                  return !!W && (ce == "object" || ce == "function");
                }
                function h(W) {
                  return (
                    !!W && (typeof W > "u" ? "undefined" : x(W)) == "object"
                  );
                }
                function p(W) {
                  return (
                    (typeof W > "u" ? "undefined" : x(W)) == "symbol" ||
                    (h(W) && Z.call(W) == A)
                  );
                }
                function b(W) {
                  if (typeof W == "number") return W;
                  if (p(W)) return T;
                  if (m(W)) {
                    var ce = typeof W.valueOf == "function" ? W.valueOf() : W;
                    W = m(ce) ? ce + "" : ce;
                  }
                  if (typeof W != "string") return W === 0 ? W : +W;
                  W = W.replace(P, "");
                  var oe = z.test(W);
                  return oe || I.test(W)
                    ? V(W.slice(2), oe ? 2 : 8)
                    : H.test(W)
                    ? T
                    : +W;
                }
                var x =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function (W) {
                          return typeof W;
                        }
                      : function (W) {
                          return W &&
                            typeof Symbol == "function" &&
                            W.constructor === Symbol &&
                            W !== Symbol.prototype
                            ? "symbol"
                            : typeof W;
                        },
                  w = "Expected a function",
                  T = NaN,
                  A = "[object Symbol]",
                  P = /^\s+|\s+$/g,
                  H = /^[-+]0x[0-9a-f]+$/i,
                  z = /^0b[01]+$/i,
                  I = /^0o[0-7]+$/i,
                  V = parseInt,
                  Q =
                    (typeof s > "u" ? "undefined" : x(s)) == "object" &&
                    s &&
                    s.Object === Object &&
                    s,
                  F =
                    (typeof self > "u" ? "undefined" : x(self)) == "object" &&
                    self &&
                    self.Object === Object &&
                    self,
                  O = Q || F || Function("return this")(),
                  ne = Object.prototype,
                  Z = ne.toString,
                  re = Math.max,
                  Oe = Math.min,
                  ae = function () {
                    return O.Date.now();
                  };
                i.exports = f;
              }).call(
                l,
                (function () {
                  return this;
                })()
              );
            },
            function (i, l) {
              (function (s) {
                function u(ae, W, ce) {
                  function oe(Qe) {
                    var De = ee,
                      At = se;
                    return (
                      (ee = se = void 0), (st = Qe), (fe = ae.apply(At, De))
                    );
                  }
                  function be(Qe) {
                    return (
                      (st = Qe), (Ve = setTimeout(le, W)), We ? oe(Qe) : fe
                    );
                  }
                  function D(Qe) {
                    var De = Qe - ke,
                      At = Qe - st,
                      yn = W - De;
                    return xt ? re(yn, Ce - At) : yn;
                  }
                  function J(Qe) {
                    var De = Qe - ke,
                      At = Qe - st;
                    return (
                      ke === void 0 || De >= W || De < 0 || (xt && At >= Ce)
                    );
                  }
                  function le() {
                    var Qe = Oe();
                    return J(Qe) ? Ee(Qe) : void (Ve = setTimeout(le, D(Qe)));
                  }
                  function Ee(Qe) {
                    return (
                      (Ve = void 0),
                      Ut && ee ? oe(Qe) : ((ee = se = void 0), fe)
                    );
                  }
                  function E() {
                    Ve !== void 0 && clearTimeout(Ve),
                      (st = 0),
                      (ee = ke = se = Ve = void 0);
                  }
                  function $() {
                    return Ve === void 0 ? fe : Ee(Oe());
                  }
                  function ie() {
                    var Qe = Oe(),
                      De = J(Qe);
                    if (((ee = arguments), (se = this), (ke = Qe), De)) {
                      if (Ve === void 0) return be(ke);
                      if (xt) return (Ve = setTimeout(le, W)), oe(ke);
                    }
                    return Ve === void 0 && (Ve = setTimeout(le, W)), fe;
                  }
                  var ee,
                    se,
                    Ce,
                    fe,
                    Ve,
                    ke,
                    st = 0,
                    We = !1,
                    xt = !1,
                    Ut = !0;
                  if (typeof ae != "function") throw new TypeError(x);
                  return (
                    (W = p(W) || 0),
                    f(ce) &&
                      ((We = !!ce.leading),
                      (xt = "maxWait" in ce),
                      (Ce = xt ? Z(p(ce.maxWait) || 0, W) : Ce),
                      (Ut = "trailing" in ce ? !!ce.trailing : Ut)),
                    (ie.cancel = E),
                    (ie.flush = $),
                    ie
                  );
                }
                function f(ae) {
                  var W = typeof ae > "u" ? "undefined" : b(ae);
                  return !!ae && (W == "object" || W == "function");
                }
                function m(ae) {
                  return (
                    !!ae && (typeof ae > "u" ? "undefined" : b(ae)) == "object"
                  );
                }
                function h(ae) {
                  return (
                    (typeof ae > "u" ? "undefined" : b(ae)) == "symbol" ||
                    (m(ae) && ne.call(ae) == T)
                  );
                }
                function p(ae) {
                  if (typeof ae == "number") return ae;
                  if (h(ae)) return w;
                  if (f(ae)) {
                    var W = typeof ae.valueOf == "function" ? ae.valueOf() : ae;
                    ae = f(W) ? W + "" : W;
                  }
                  if (typeof ae != "string") return ae === 0 ? ae : +ae;
                  ae = ae.replace(A, "");
                  var ce = H.test(ae);
                  return ce || z.test(ae)
                    ? I(ae.slice(2), ce ? 2 : 8)
                    : P.test(ae)
                    ? w
                    : +ae;
                }
                var b =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function (ae) {
                          return typeof ae;
                        }
                      : function (ae) {
                          return ae &&
                            typeof Symbol == "function" &&
                            ae.constructor === Symbol &&
                            ae !== Symbol.prototype
                            ? "symbol"
                            : typeof ae;
                        },
                  x = "Expected a function",
                  w = NaN,
                  T = "[object Symbol]",
                  A = /^\s+|\s+$/g,
                  P = /^[-+]0x[0-9a-f]+$/i,
                  H = /^0b[01]+$/i,
                  z = /^0o[0-7]+$/i,
                  I = parseInt,
                  V =
                    (typeof s > "u" ? "undefined" : b(s)) == "object" &&
                    s &&
                    s.Object === Object &&
                    s,
                  Q =
                    (typeof self > "u" ? "undefined" : b(self)) == "object" &&
                    self &&
                    self.Object === Object &&
                    self,
                  F = V || Q || Function("return this")(),
                  O = Object.prototype,
                  ne = O.toString,
                  Z = Math.max,
                  re = Math.min,
                  Oe = function () {
                    return F.Date.now();
                  };
                i.exports = u;
              }).call(
                l,
                (function () {
                  return this;
                })()
              );
            },
            function (i, l) {
              function s(b) {
                var x = void 0,
                  w = void 0;
                for (x = 0; x < b.length; x += 1)
                  if (
                    ((w = b[x]),
                    (w.dataset && w.dataset.aos) ||
                      (w.children && s(w.children)))
                  )
                    return !0;
                return !1;
              }
              function u() {
                return (
                  window.MutationObserver ||
                  window.WebKitMutationObserver ||
                  window.MozMutationObserver
                );
              }
              function f() {
                return !!u();
              }
              function m(b, x) {
                var w = window.document,
                  T = u(),
                  A = new T(h);
                (p = x),
                  A.observe(w.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0,
                  });
              }
              function h(b) {
                b &&
                  b.forEach(function (x) {
                    var w = Array.prototype.slice.call(x.addedNodes),
                      T = Array.prototype.slice.call(x.removedNodes),
                      A = w.concat(T);
                    if (s(A)) return p();
                  });
              }
              Object.defineProperty(l, "__esModule", { value: !0 });
              var p = function () {};
              l.default = { isSupported: f, ready: m };
            },
            function (i, l) {
              function s(w, T) {
                if (!(w instanceof T))
                  throw new TypeError("Cannot call a class as a function");
              }
              function u() {
                return (
                  navigator.userAgent || navigator.vendor || window.opera || ""
                );
              }
              Object.defineProperty(l, "__esModule", { value: !0 });
              var f = (function () {
                  function w(T, A) {
                    for (var P = 0; P < A.length; P++) {
                      var H = A[P];
                      (H.enumerable = H.enumerable || !1),
                        (H.configurable = !0),
                        "value" in H && (H.writable = !0),
                        Object.defineProperty(T, H.key, H);
                    }
                  }
                  return function (T, A, P) {
                    return A && w(T.prototype, A), P && w(T, P), T;
                  };
                })(),
                m =
                  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                h =
                  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                p =
                  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                b =
                  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                x = (function () {
                  function w() {
                    s(this, w);
                  }
                  return (
                    f(w, [
                      {
                        key: "phone",
                        value: function () {
                          var T = u();
                          return !(!m.test(T) && !h.test(T.substr(0, 4)));
                        },
                      },
                      {
                        key: "mobile",
                        value: function () {
                          var T = u();
                          return !(!p.test(T) && !b.test(T.substr(0, 4)));
                        },
                      },
                      {
                        key: "tablet",
                        value: function () {
                          return this.mobile() && !this.phone();
                        },
                      },
                    ]),
                    w
                  );
                })();
              l.default = new x();
            },
            function (i, l) {
              Object.defineProperty(l, "__esModule", { value: !0 });
              var s = function (f, m, h) {
                  var p = f.node.getAttribute("data-aos-once");
                  m > f.position
                    ? f.node.classList.add("aos-animate")
                    : typeof p < "u" &&
                      (p === "false" || (!h && p !== "true")) &&
                      f.node.classList.remove("aos-animate");
                },
                u = function (f, m) {
                  var h = window.pageYOffset,
                    p = window.innerHeight;
                  f.forEach(function (b, x) {
                    s(b, p + h, m);
                  });
                };
              l.default = u;
            },
            function (i, l, s) {
              function u(p) {
                return p && p.__esModule ? p : { default: p };
              }
              Object.defineProperty(l, "__esModule", { value: !0 });
              var f = s(12),
                m = u(f),
                h = function (p, b) {
                  return (
                    p.forEach(function (x, w) {
                      x.node.classList.add("aos-init"),
                        (x.position = (0, m.default)(x.node, b.offset));
                    }),
                    p
                  );
                };
              l.default = h;
            },
            function (i, l, s) {
              function u(p) {
                return p && p.__esModule ? p : { default: p };
              }
              Object.defineProperty(l, "__esModule", { value: !0 });
              var f = s(13),
                m = u(f),
                h = function (p, b) {
                  var x = 0,
                    w = 0,
                    T = window.innerHeight,
                    A = {
                      offset: p.getAttribute("data-aos-offset"),
                      anchor: p.getAttribute("data-aos-anchor"),
                      anchorPlacement: p.getAttribute(
                        "data-aos-anchor-placement"
                      ),
                    };
                  switch (
                    (A.offset && !isNaN(A.offset) && (w = parseInt(A.offset)),
                    A.anchor &&
                      document.querySelectorAll(A.anchor) &&
                      (p = document.querySelectorAll(A.anchor)[0]),
                    (x = (0, m.default)(p).top),
                    A.anchorPlacement)
                  ) {
                    case "top-bottom":
                      break;
                    case "center-bottom":
                      x += p.offsetHeight / 2;
                      break;
                    case "bottom-bottom":
                      x += p.offsetHeight;
                      break;
                    case "top-center":
                      x += T / 2;
                      break;
                    case "bottom-center":
                      x += T / 2 + p.offsetHeight;
                      break;
                    case "center-center":
                      x += T / 2 + p.offsetHeight / 2;
                      break;
                    case "top-top":
                      x += T;
                      break;
                    case "bottom-top":
                      x += p.offsetHeight + T;
                      break;
                    case "center-top":
                      x += p.offsetHeight / 2 + T;
                  }
                  return (
                    A.anchorPlacement || A.offset || isNaN(b) || (w = b), x + w
                  );
                };
              l.default = h;
            },
            function (i, l) {
              Object.defineProperty(l, "__esModule", { value: !0 });
              var s = function (u) {
                for (
                  var f = 0, m = 0;
                  u && !isNaN(u.offsetLeft) && !isNaN(u.offsetTop);

                )
                  (f +=
                    u.offsetLeft - (u.tagName != "BODY" ? u.scrollLeft : 0)),
                    (m +=
                      u.offsetTop - (u.tagName != "BODY" ? u.scrollTop : 0)),
                    (u = u.offsetParent);
                return { top: m, left: f };
              };
              l.default = s;
            },
            function (i, l) {
              Object.defineProperty(l, "__esModule", { value: !0 });
              var s = function (u) {
                return (
                  (u = u || document.querySelectorAll("[data-aos]")),
                  Array.prototype.map.call(u, function (f) {
                    return { node: f };
                  })
                );
              };
              l.default = s;
            },
          ]);
        });
      })(dc)),
    dc.exports
  );
}
var GC = qC();
const $C = Oy(GC);
function YC({ children: a }) {
  return (
    R.useEffect(() => {
      $C.init({ duration: 1e3, once: !0 });
    }, []),
    a
  );
}
g2.createRoot(document.getElementById("root")).render(
  y.jsx(R.StrictMode, {
    children: y.jsx(YC, {
      children: y.jsx(J3, { children: y.jsx(Ux, { router: PC }) }),
    }),
  })
);
