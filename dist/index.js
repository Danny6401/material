var Bn = Object.defineProperty;
var Fn = (e, t, r) => t in e ? Bn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var qe = (e, t, r) => Fn(e, typeof t != "symbol" ? t + "" : t, r);
import * as M from "react";
import Ve, { isValidElement as gt, cloneElement as mt, Children as Dn, useState as jn } from "react";
import zn from "@emotion/styled";
import { keyframes as rt, css as nn } from "@emotion/react";
function Vn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var lt = { exports: {} }, Ke = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr;
function Ln() {
  if (gr) return Ke;
  gr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), o.key !== void 0 && (s = "" + o.key), "key" in o) {
      i = {};
      for (var a in o)
        a !== "key" && (i[a] = o[a]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: n,
      key: s,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return Ke.Fragment = t, Ke.jsx = r, Ke.jsxs = r, Ke;
}
var He = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function Wn() {
  return mr || (mr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === l ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case c:
          return "Fragment";
        case O:
          return "Profiler";
        case T:
          return "StrictMode";
        case b:
          return "Suspense";
        case N:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case C:
            return "Portal";
          case P:
            return (d.displayName || "Context") + ".Provider";
          case F:
            return (d._context.displayName || "Context") + ".Consumer";
          case S:
            var v = d.render;
            return d = d.displayName, d || (d = v.displayName || v.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case U:
            return v = d.displayName || null, v !== null ? v : e(d.type) || "Memo";
          case Y:
            v = d._payload, d = d._init;
            try {
              return e(d(v));
            } catch {
            }
        }
      return null;
    }
    function t(d) {
      return "" + d;
    }
    function r(d) {
      try {
        t(d);
        var v = !1;
      } catch {
        v = !0;
      }
      if (v) {
        v = console;
        var R = v.error, k = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return R.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), t(d);
      }
    }
    function n(d) {
      if (d === c) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === Y)
        return "<...>";
      try {
        var v = e(d);
        return v ? "<" + v + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var d = E.A;
      return d === null ? null : d.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(d) {
      if ($.call(d, "key")) {
        var v = Object.getOwnPropertyDescriptor(d, "key").get;
        if (v && v.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function a(d, v) {
      function R() {
        ne || (ne = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: R,
        configurable: !0
      });
    }
    function f() {
      var d = e(this.type);
      return H[d] || (H[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function p(d, v, R, k, A, B, D, j) {
      return R = B.ref, d = {
        $$typeof: x,
        type: d,
        key: v,
        props: B,
        _owner: A
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(d, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: D
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function m(d, v, R, k, A, B, D, j) {
      var I = v.children;
      if (I !== void 0)
        if (k)
          if (_(I)) {
            for (k = 0; k < I.length; k++)
              g(I[k]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(I);
      if ($.call(v, "key")) {
        I = e(d);
        var V = Object.keys(v).filter(function(ue) {
          return ue !== "key";
        });
        k = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", oe[I + k] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          I,
          V,
          I
        ), oe[I + k] = !0);
      }
      if (I = null, R !== void 0 && (r(R), I = "" + R), s(v) && (r(v.key), I = "" + v.key), "key" in v) {
        R = {};
        for (var L in v)
          L !== "key" && (R[L] = v[L]);
      } else R = v;
      return I && a(
        R,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), p(
        d,
        I,
        B,
        A,
        o(),
        R,
        D,
        j
      );
    }
    function g(d) {
      typeof d == "object" && d !== null && d.$$typeof === x && d._store && (d._store.validated = 1);
    }
    var h = Ve, x = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), P = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), l = Symbol.for("react.client.reference"), E = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, _ = Array.isArray, W = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      "react-stack-bottom-frame": function(d) {
        return d();
      }
    };
    var ne, H = {}, ae = h["react-stack-bottom-frame"].bind(
      h,
      i
    )(), fe = W(n(i)), oe = {};
    He.Fragment = c, He.jsx = function(d, v, R, k, A) {
      var B = 1e4 > E.recentlyCreatedOwnerStacks++;
      return m(
        d,
        v,
        R,
        !1,
        k,
        A,
        B ? Error("react-stack-top-frame") : ae,
        B ? W(n(d)) : fe
      );
    }, He.jsxs = function(d, v, R, k, A) {
      var B = 1e4 > E.recentlyCreatedOwnerStacks++;
      return m(
        d,
        v,
        R,
        !0,
        k,
        A,
        B ? Error("react-stack-top-frame") : ae,
        B ? W(n(d)) : fe
      );
    };
  }()), He;
}
var hr;
function Un() {
  return hr || (hr = 1, process.env.NODE_ENV === "production" ? lt.exports = Ln() : lt.exports = Wn()), lt.exports;
}
var te = Un();
function ke(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const Yn = "$$material";
function Gn(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var qn = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function Kn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Hn = /[A-Z]|^ms/g, Xn = /_EMO_([^_]+?)_([^]*?)_EMO_/g, on = function(t) {
  return t.charCodeAt(1) === 45;
}, yr = function(t) {
  return t != null && typeof t != "boolean";
}, Nt = /* @__PURE__ */ Kn(function(e) {
  return on(e) ? e : e.replace(Hn, "-$&").toLowerCase();
}), br = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Xn, function(n, o, i) {
          return Oe = {
            name: o,
            styles: i,
            next: Oe
          }, o;
        });
  }
  return qn[t] !== 1 && !on(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function bt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Oe = {
          name: o.name,
          styles: o.styles,
          next: Oe
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Oe = {
              name: s.name,
              styles: s.styles,
              next: Oe
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return Jn(e, t, r);
    }
  }
  var f = r;
  return f;
}
function Jn(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += bt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object") {
        var a = s;
        yr(a) && (n += Nt(i) + ":" + br(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var f = 0; f < s.length; f++)
          yr(s[f]) && (n += Nt(i) + ":" + br(i, s[f]) + ";");
      else {
        var p = bt(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Nt(i) + ":" + p + ";";
            break;
          }
          default:
            n += i + "{" + p + "}";
        }
      }
    }
  return n;
}
var vr = /label:\s*([^\s;{]+)\s*(;|$)/g, Oe;
function Qn(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Oe = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += bt(r, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += bt(r, t, e[a]), n) {
      var f = i;
      o += f[a];
    }
  vr.lastIndex = 0;
  for (var p = "", m; (m = vr.exec(o)) !== null; )
    p += "-" + m[1];
  var g = Gn(o) + p;
  return {
    name: g,
    styles: o,
    next: Oe
  };
}
var ct = { exports: {} }, ut = { exports: {} }, G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cr;
function Zn() {
  if (Cr) return G;
  Cr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
  function P(b) {
    if (typeof b == "object" && b !== null) {
      var N = b.$$typeof;
      switch (N) {
        case t:
          switch (b = b.type, b) {
            case f:
            case p:
            case n:
            case i:
            case o:
            case g:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case a:
                case m:
                case C:
                case x:
                case s:
                  return b;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function S(b) {
    return P(b) === p;
  }
  return G.AsyncMode = f, G.ConcurrentMode = p, G.ContextConsumer = a, G.ContextProvider = s, G.Element = t, G.ForwardRef = m, G.Fragment = n, G.Lazy = C, G.Memo = x, G.Portal = r, G.Profiler = i, G.StrictMode = o, G.Suspense = g, G.isAsyncMode = function(b) {
    return S(b) || P(b) === f;
  }, G.isConcurrentMode = S, G.isContextConsumer = function(b) {
    return P(b) === a;
  }, G.isContextProvider = function(b) {
    return P(b) === s;
  }, G.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, G.isForwardRef = function(b) {
    return P(b) === m;
  }, G.isFragment = function(b) {
    return P(b) === n;
  }, G.isLazy = function(b) {
    return P(b) === C;
  }, G.isMemo = function(b) {
    return P(b) === x;
  }, G.isPortal = function(b) {
    return P(b) === r;
  }, G.isProfiler = function(b) {
    return P(b) === i;
  }, G.isStrictMode = function(b) {
    return P(b) === o;
  }, G.isSuspense = function(b) {
    return P(b) === g;
  }, G.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === p || b === i || b === o || b === g || b === h || typeof b == "object" && b !== null && (b.$$typeof === C || b.$$typeof === x || b.$$typeof === s || b.$$typeof === a || b.$$typeof === m || b.$$typeof === T || b.$$typeof === O || b.$$typeof === F || b.$$typeof === c);
  }, G.typeOf = P, G;
}
var q = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sr;
function eo() {
  return Sr || (Sr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
    function P(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === n || w === p || w === i || w === o || w === g || w === h || typeof w == "object" && w !== null && (w.$$typeof === C || w.$$typeof === x || w.$$typeof === s || w.$$typeof === a || w.$$typeof === m || w.$$typeof === T || w.$$typeof === O || w.$$typeof === F || w.$$typeof === c);
    }
    function S(w) {
      if (typeof w == "object" && w !== null) {
        var he = w.$$typeof;
        switch (he) {
          case t:
            var we = w.type;
            switch (we) {
              case f:
              case p:
              case n:
              case i:
              case o:
              case g:
                return we;
              default:
                var at = we && we.$$typeof;
                switch (at) {
                  case a:
                  case m:
                  case C:
                  case x:
                  case s:
                    return at;
                  default:
                    return he;
                }
            }
          case r:
            return he;
        }
      }
    }
    var b = f, N = p, U = a, Y = s, re = t, l = m, E = n, $ = C, _ = x, W = r, ne = i, H = o, ae = g, fe = !1;
    function oe(w) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(w) || S(w) === f;
    }
    function d(w) {
      return S(w) === p;
    }
    function v(w) {
      return S(w) === a;
    }
    function R(w) {
      return S(w) === s;
    }
    function k(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function A(w) {
      return S(w) === m;
    }
    function B(w) {
      return S(w) === n;
    }
    function D(w) {
      return S(w) === C;
    }
    function j(w) {
      return S(w) === x;
    }
    function I(w) {
      return S(w) === r;
    }
    function V(w) {
      return S(w) === i;
    }
    function L(w) {
      return S(w) === o;
    }
    function ue(w) {
      return S(w) === g;
    }
    q.AsyncMode = b, q.ConcurrentMode = N, q.ContextConsumer = U, q.ContextProvider = Y, q.Element = re, q.ForwardRef = l, q.Fragment = E, q.Lazy = $, q.Memo = _, q.Portal = W, q.Profiler = ne, q.StrictMode = H, q.Suspense = ae, q.isAsyncMode = oe, q.isConcurrentMode = d, q.isContextConsumer = v, q.isContextProvider = R, q.isElement = k, q.isForwardRef = A, q.isFragment = B, q.isLazy = D, q.isMemo = j, q.isPortal = I, q.isProfiler = V, q.isStrictMode = L, q.isSuspense = ue, q.isValidElementType = P, q.typeOf = S;
  }()), q;
}
var xr;
function an() {
  return xr || (xr = 1, process.env.NODE_ENV === "production" ? ut.exports = Zn() : ut.exports = eo()), ut.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Bt, Er;
function to() {
  if (Er) return Bt;
  Er = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, a = 0; a < 10; a++)
        s["_" + String.fromCharCode(a)] = a;
      var f = Object.getOwnPropertyNames(s).map(function(m) {
        return s[m];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        p[m] = m;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Bt = o() ? Object.assign : function(i, s) {
    for (var a, f = n(i), p, m = 1; m < arguments.length; m++) {
      a = Object(arguments[m]);
      for (var g in a)
        t.call(a, g) && (f[g] = a[g]);
      if (e) {
        p = e(a);
        for (var h = 0; h < p.length; h++)
          r.call(a, p[h]) && (f[p[h]] = a[p[h]]);
      }
    }
    return f;
  }, Bt;
}
var Ft, Tr;
function Qt() {
  if (Tr) return Ft;
  Tr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ft = e, Ft;
}
var Dt, wr;
function sn() {
  return wr || (wr = 1, Dt = Function.call.bind(Object.prototype.hasOwnProperty)), Dt;
}
var jt, Rr;
function ro() {
  if (Rr) return jt;
  Rr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Qt(), r = {}, n = /* @__PURE__ */ sn();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, a, f, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in i)
        if (n(i, m)) {
          var g;
          try {
            if (typeof i[m] != "function") {
              var h = Error(
                (f || "React class") + ": " + a + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            g = i[m](s, m, f, a, null, t);
          } catch (C) {
            g = C;
          }
          if (g && !(g instanceof Error) && e(
            (f || "React class") + ": type specification of " + a + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in r)) {
            r[g.message] = !0;
            var x = p ? p() : "";
            e(
              "Failed " + a + " type: " + g.message + (x ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, jt = o, jt;
}
var zt, Or;
function no() {
  if (Or) return zt;
  Or = 1;
  var e = an(), t = to(), r = /* @__PURE__ */ Qt(), n = /* @__PURE__ */ sn(), o = /* @__PURE__ */ ro(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(a) {
    var f = "Warning: " + a;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return zt = function(a, f) {
    var p = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function g(d) {
      var v = d && (p && d[p] || d[m]);
      if (typeof v == "function")
        return v;
    }
    var h = "<<anonymous>>", x = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: F(),
      arrayOf: P,
      element: S(),
      elementType: b(),
      instanceOf: N,
      node: l(),
      objectOf: Y,
      oneOf: U,
      oneOfType: re,
      shape: $,
      exact: _
    };
    function C(d, v) {
      return d === v ? d !== 0 || 1 / d === 1 / v : d !== d && v !== v;
    }
    function c(d, v) {
      this.message = d, this.data = v && typeof v == "object" ? v : {}, this.stack = "";
    }
    c.prototype = Error.prototype;
    function T(d) {
      if (process.env.NODE_ENV !== "production")
        var v = {}, R = 0;
      function k(B, D, j, I, V, L, ue) {
        if (I = I || h, L = L || j, ue !== r) {
          if (f) {
            var w = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw w.name = "Invariant Violation", w;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var he = I + ":" + j;
            !v[he] && // Avoid spamming the console because they are often not actionable except for lib authors
            R < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + L + "` prop on `" + I + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), v[he] = !0, R++);
          }
        }
        return D[j] == null ? B ? D[j] === null ? new c("The " + V + " `" + L + "` is marked as required " + ("in `" + I + "`, but its value is `null`.")) : new c("The " + V + " `" + L + "` is marked as required in " + ("`" + I + "`, but its value is `undefined`.")) : null : d(D, j, I, V, L);
      }
      var A = k.bind(null, !1);
      return A.isRequired = k.bind(null, !0), A;
    }
    function O(d) {
      function v(R, k, A, B, D, j) {
        var I = R[k], V = H(I);
        if (V !== d) {
          var L = ae(I);
          return new c(
            "Invalid " + B + " `" + D + "` of type " + ("`" + L + "` supplied to `" + A + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return T(v);
    }
    function F() {
      return T(s);
    }
    function P(d) {
      function v(R, k, A, B, D) {
        if (typeof d != "function")
          return new c("Property `" + D + "` of component `" + A + "` has invalid PropType notation inside arrayOf.");
        var j = R[k];
        if (!Array.isArray(j)) {
          var I = H(j);
          return new c("Invalid " + B + " `" + D + "` of type " + ("`" + I + "` supplied to `" + A + "`, expected an array."));
        }
        for (var V = 0; V < j.length; V++) {
          var L = d(j, V, A, B, D + "[" + V + "]", r);
          if (L instanceof Error)
            return L;
        }
        return null;
      }
      return T(v);
    }
    function S() {
      function d(v, R, k, A, B) {
        var D = v[R];
        if (!a(D)) {
          var j = H(D);
          return new c("Invalid " + A + " `" + B + "` of type " + ("`" + j + "` supplied to `" + k + "`, expected a single ReactElement."));
        }
        return null;
      }
      return T(d);
    }
    function b() {
      function d(v, R, k, A, B) {
        var D = v[R];
        if (!e.isValidElementType(D)) {
          var j = H(D);
          return new c("Invalid " + A + " `" + B + "` of type " + ("`" + j + "` supplied to `" + k + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return T(d);
    }
    function N(d) {
      function v(R, k, A, B, D) {
        if (!(R[k] instanceof d)) {
          var j = d.name || h, I = oe(R[k]);
          return new c("Invalid " + B + " `" + D + "` of type " + ("`" + I + "` supplied to `" + A + "`, expected ") + ("instance of `" + j + "`."));
        }
        return null;
      }
      return T(v);
    }
    function U(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function v(R, k, A, B, D) {
        for (var j = R[k], I = 0; I < d.length; I++)
          if (C(j, d[I]))
            return null;
        var V = JSON.stringify(d, function(ue, w) {
          var he = ae(w);
          return he === "symbol" ? String(w) : w;
        });
        return new c("Invalid " + B + " `" + D + "` of value `" + String(j) + "` " + ("supplied to `" + A + "`, expected one of " + V + "."));
      }
      return T(v);
    }
    function Y(d) {
      function v(R, k, A, B, D) {
        if (typeof d != "function")
          return new c("Property `" + D + "` of component `" + A + "` has invalid PropType notation inside objectOf.");
        var j = R[k], I = H(j);
        if (I !== "object")
          return new c("Invalid " + B + " `" + D + "` of type " + ("`" + I + "` supplied to `" + A + "`, expected an object."));
        for (var V in j)
          if (n(j, V)) {
            var L = d(j, V, A, B, D + "." + V, r);
            if (L instanceof Error)
              return L;
          }
        return null;
      }
      return T(v);
    }
    function re(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var v = 0; v < d.length; v++) {
        var R = d[v];
        if (typeof R != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(R) + " at index " + v + "."
          ), s;
      }
      function k(A, B, D, j, I) {
        for (var V = [], L = 0; L < d.length; L++) {
          var ue = d[L], w = ue(A, B, D, j, I, r);
          if (w == null)
            return null;
          w.data && n(w.data, "expectedType") && V.push(w.data.expectedType);
        }
        var he = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new c("Invalid " + j + " `" + I + "` supplied to " + ("`" + D + "`" + he + "."));
      }
      return T(k);
    }
    function l() {
      function d(v, R, k, A, B) {
        return W(v[R]) ? null : new c("Invalid " + A + " `" + B + "` supplied to " + ("`" + k + "`, expected a ReactNode."));
      }
      return T(d);
    }
    function E(d, v, R, k, A) {
      return new c(
        (d || "React class") + ": " + v + " type `" + R + "." + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + A + "`."
      );
    }
    function $(d) {
      function v(R, k, A, B, D) {
        var j = R[k], I = H(j);
        if (I !== "object")
          return new c("Invalid " + B + " `" + D + "` of type `" + I + "` " + ("supplied to `" + A + "`, expected `object`."));
        for (var V in d) {
          var L = d[V];
          if (typeof L != "function")
            return E(A, B, D, V, ae(L));
          var ue = L(j, V, A, B, D + "." + V, r);
          if (ue)
            return ue;
        }
        return null;
      }
      return T(v);
    }
    function _(d) {
      function v(R, k, A, B, D) {
        var j = R[k], I = H(j);
        if (I !== "object")
          return new c("Invalid " + B + " `" + D + "` of type `" + I + "` " + ("supplied to `" + A + "`, expected `object`."));
        var V = t({}, R[k], d);
        for (var L in V) {
          var ue = d[L];
          if (n(d, L) && typeof ue != "function")
            return E(A, B, D, L, ae(ue));
          if (!ue)
            return new c(
              "Invalid " + B + " `" + D + "` key `" + L + "` supplied to `" + A + "`.\nBad object: " + JSON.stringify(R[k], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var w = ue(j, L, A, B, D + "." + L, r);
          if (w)
            return w;
        }
        return null;
      }
      return T(v);
    }
    function W(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(W);
          if (d === null || a(d))
            return !0;
          var v = g(d);
          if (v) {
            var R = v.call(d), k;
            if (v !== d.entries) {
              for (; !(k = R.next()).done; )
                if (!W(k.value))
                  return !1;
            } else
              for (; !(k = R.next()).done; ) {
                var A = k.value;
                if (A && !W(A[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(d, v) {
      return d === "symbol" ? !0 : v ? v["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && v instanceof Symbol : !1;
    }
    function H(d) {
      var v = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : ne(v, d) ? "symbol" : v;
    }
    function ae(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var v = H(d);
      if (v === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return v;
    }
    function fe(d) {
      var v = ae(d);
      switch (v) {
        case "array":
        case "object":
          return "an " + v;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + v;
        default:
          return v;
      }
    }
    function oe(d) {
      return !d.constructor || !d.constructor.name ? h : d.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, zt;
}
var Vt, $r;
function oo() {
  if ($r) return Vt;
  $r = 1;
  var e = /* @__PURE__ */ Qt();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Vt = function() {
    function n(s, a, f, p, m, g) {
      if (g !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Vt;
}
var Pr;
function io() {
  if (Pr) return ct.exports;
  if (Pr = 1, process.env.NODE_ENV !== "production") {
    var e = an(), t = !0;
    ct.exports = /* @__PURE__ */ no()(e.isElement, t);
  } else
    ct.exports = /* @__PURE__ */ oo()();
  return ct.exports;
}
var ao = /* @__PURE__ */ io();
const u = /* @__PURE__ */ Vn(ao);
/**
 * @mui/styled-engine v7.1.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function so(e, t) {
  const r = zn(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function lo(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const kr = [];
function _r(e) {
  return kr[0] = e, Qn(kr);
}
var dt = { exports: {} }, X = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar;
function co() {
  if (Ar) return X;
  Ar = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), x = Symbol.for("react.client.reference");
  function C(c) {
    if (typeof c == "object" && c !== null) {
      var T = c.$$typeof;
      switch (T) {
        case e:
          switch (c = c.type, c) {
            case r:
            case o:
            case n:
            case f:
            case p:
            case h:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case s:
                case a:
                case g:
                case m:
                  return c;
                case i:
                  return c;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  return X.ContextConsumer = i, X.ContextProvider = s, X.Element = e, X.ForwardRef = a, X.Fragment = r, X.Lazy = g, X.Memo = m, X.Portal = t, X.Profiler = o, X.StrictMode = n, X.Suspense = f, X.SuspenseList = p, X.isContextConsumer = function(c) {
    return C(c) === i;
  }, X.isContextProvider = function(c) {
    return C(c) === s;
  }, X.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === e;
  }, X.isForwardRef = function(c) {
    return C(c) === a;
  }, X.isFragment = function(c) {
    return C(c) === r;
  }, X.isLazy = function(c) {
    return C(c) === g;
  }, X.isMemo = function(c) {
    return C(c) === m;
  }, X.isPortal = function(c) {
    return C(c) === t;
  }, X.isProfiler = function(c) {
    return C(c) === o;
  }, X.isStrictMode = function(c) {
    return C(c) === n;
  }, X.isSuspense = function(c) {
    return C(c) === f;
  }, X.isSuspenseList = function(c) {
    return C(c) === p;
  }, X.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === r || c === o || c === n || c === f || c === p || typeof c == "object" && c !== null && (c.$$typeof === g || c.$$typeof === m || c.$$typeof === s || c.$$typeof === i || c.$$typeof === a || c.$$typeof === x || c.getModuleId !== void 0);
  }, X.typeOf = C, X;
}
var J = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ir;
function uo() {
  return Ir || (Ir = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c) {
      if (typeof c == "object" && c !== null) {
        var T = c.$$typeof;
        switch (T) {
          case t:
            switch (c = c.type, c) {
              case n:
              case i:
              case o:
              case p:
              case m:
              case x:
                return c;
              default:
                switch (c = c && c.$$typeof, c) {
                  case a:
                  case f:
                  case h:
                  case g:
                    return c;
                  case s:
                    return c;
                  default:
                    return T;
                }
            }
          case r:
            return T;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), x = Symbol.for("react.view_transition"), C = Symbol.for("react.client.reference");
    J.ContextConsumer = s, J.ContextProvider = a, J.Element = t, J.ForwardRef = f, J.Fragment = n, J.Lazy = h, J.Memo = g, J.Portal = r, J.Profiler = i, J.StrictMode = o, J.Suspense = p, J.SuspenseList = m, J.isContextConsumer = function(c) {
      return e(c) === s;
    }, J.isContextProvider = function(c) {
      return e(c) === a;
    }, J.isElement = function(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }, J.isForwardRef = function(c) {
      return e(c) === f;
    }, J.isFragment = function(c) {
      return e(c) === n;
    }, J.isLazy = function(c) {
      return e(c) === h;
    }, J.isMemo = function(c) {
      return e(c) === g;
    }, J.isPortal = function(c) {
      return e(c) === r;
    }, J.isProfiler = function(c) {
      return e(c) === i;
    }, J.isStrictMode = function(c) {
      return e(c) === o;
    }, J.isSuspense = function(c) {
      return e(c) === p;
    }, J.isSuspenseList = function(c) {
      return e(c) === m;
    }, J.isValidElementType = function(c) {
      return typeof c == "string" || typeof c == "function" || c === n || c === i || c === o || c === p || c === m || typeof c == "object" && c !== null && (c.$$typeof === h || c.$$typeof === g || c.$$typeof === a || c.$$typeof === s || c.$$typeof === f || c.$$typeof === C || c.getModuleId !== void 0);
    }, J.typeOf = e;
  }()), J;
}
var Mr;
function fo() {
  return Mr || (Mr = 1, process.env.NODE_ENV === "production" ? dt.exports = /* @__PURE__ */ co() : dt.exports = /* @__PURE__ */ uo()), dt.exports;
}
var vt = /* @__PURE__ */ fo();
function Ee(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ln(e) {
  if (/* @__PURE__ */ M.isValidElement(e) || vt.isValidElementType(e) || !Ee(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = ln(e[r]);
  }), t;
}
function me(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Ee(e) && Ee(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ M.isValidElement(t[o]) || vt.isValidElementType(t[o]) ? n[o] = t[o] : Ee(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ee(e[o]) ? n[o] = me(e[o], t[o], r) : r.clone ? n[o] = Ee(t[o]) ? ln(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const po = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function go(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = po(t), s = Object.keys(i);
  function a(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function f(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function p(h, x) {
    const C = s.indexOf(x);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(C !== -1 && typeof t[s[C]] == "number" ? t[s[C]] : x) - n / 100}${r})`;
  }
  function m(h) {
    return s.indexOf(h) + 1 < s.length ? p(h, s[s.indexOf(h) + 1]) : a(h);
  }
  function g(h) {
    const x = s.indexOf(h);
    return x === 0 ? a(s[1]) : x === s.length - 1 ? f(s[x]) : p(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: a,
    down: f,
    between: p,
    only: m,
    not: g,
    unit: r,
    ...o
  };
}
function mo(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var s, a;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((s = n.match(i)) == null ? void 0 : s[1]) || 0) - +(((a = o.match(i)) == null ? void 0 : a[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function ho(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function yo(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : ke(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function bo(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function r(i, s) {
    i.up = (...a) => t(e.breakpoints.up(...a), s), i.down = (...a) => t(e.breakpoints.down(...a), s), i.between = (...a) => t(e.breakpoints.between(...a), s), i.only = (...a) => t(e.breakpoints.only(...a), s), i.not = (...a) => {
      const f = t(e.breakpoints.not(...a), s);
      return f.includes("not all and") ? f.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : f;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const vo = {
  borderRadius: 4
}, Ae = process.env.NODE_ENV !== "production" ? u.oneOfType([u.number, u.string, u.object, u.array]) : {};
function Ze(e, t) {
  return t ? me(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Et = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Nr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Et[e]}px)`
}, Co = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Et[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Te(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Nr;
    return t.reduce((s, a, f) => (s[i.up(i.keys[f])] = r(t[f]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Nr;
    return Object.keys(t).reduce((s, a) => {
      if (ho(i.keys, a)) {
        const f = yo(n.containerQueries ? n : Co, a);
        f && (s[f] = r(t[a], a));
      } else if (Object.keys(i.values || Et).includes(a)) {
        const f = i.up(a);
        s[f] = r(t[a], a);
      } else {
        const f = a;
        s[f] = t[f];
      }
      return s;
    }, {});
  }
  return r(t);
}
function So(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function xo(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Q(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ke(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Tt(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Ct(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Tt(e, r) || n, t && (o = t(o, n, e)), o;
}
function ce(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], f = s.theme, p = Tt(f, n) || {};
    return Te(s, a, (g) => {
      let h = Ct(p, o, g);
      return g === h && typeof g == "string" && (h = Ct(p, o, `${t}${g === "default" ? "" : Q(g)}`, g)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Ae
  } : {}, i.filterProps = [t], i;
}
function Eo(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const To = {
  m: "margin",
  p: "padding"
}, wo = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Br = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ro = Eo((e) => {
  if (e.length > 2)
    if (Br[e])
      e = Br[e];
    else
      return [e];
  const [t, r] = e.split(""), n = To[t], o = wo[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), wt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Rt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Oo = [...wt, ...Rt];
function nt(e, t, r, n) {
  const o = Tt(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const a = o[s];
    return i >= 0 ? a : typeof a == "number" ? -a : typeof a == "string" && a.startsWith("var(") ? `calc(-1 * ${a})` : `-${a}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Zt(e) {
  return nt(e, "spacing", 8, "spacing");
}
function ot(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function $o(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = ot(t, r), n), {});
}
function Po(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Ro(r), i = $o(o, n), s = e[r];
  return Te(e, s, i);
}
function cn(e, t) {
  const r = Zt(e.theme);
  return Object.keys(e).map((n) => Po(e, t, n, r)).reduce(Ze, {});
}
function se(e) {
  return cn(e, wt);
}
se.propTypes = process.env.NODE_ENV !== "production" ? wt.reduce((e, t) => (e[t] = Ae, e), {}) : {};
se.filterProps = wt;
function le(e) {
  return cn(e, Rt);
}
le.propTypes = process.env.NODE_ENV !== "production" ? Rt.reduce((e, t) => (e[t] = Ae, e), {}) : {};
le.filterProps = Rt;
process.env.NODE_ENV !== "production" && Oo.reduce((e, t) => (e[t] = Ae, e), {});
function un(e = 8, t = Zt({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function Ot(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Ze(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function be(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ve(e, t) {
  return ce({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const ko = ve("border", be), _o = ve("borderTop", be), Ao = ve("borderRight", be), Io = ve("borderBottom", be), Mo = ve("borderLeft", be), No = ve("borderColor"), Bo = ve("borderTopColor"), Fo = ve("borderRightColor"), Do = ve("borderBottomColor"), jo = ve("borderLeftColor"), zo = ve("outline", be), Vo = ve("outlineColor"), $t = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = nt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: ot(t, n)
    });
    return Te(e, e.borderRadius, r);
  }
  return null;
};
$t.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ae
} : {};
$t.filterProps = ["borderRadius"];
Ot(ko, _o, Ao, Io, Mo, No, Bo, Fo, Do, jo, $t, zo, Vo);
const Pt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = nt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: ot(t, n)
    });
    return Te(e, e.gap, r);
  }
  return null;
};
Pt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ae
} : {};
Pt.filterProps = ["gap"];
const kt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = nt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: ot(t, n)
    });
    return Te(e, e.columnGap, r);
  }
  return null;
};
kt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ae
} : {};
kt.filterProps = ["columnGap"];
const _t = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = nt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: ot(t, n)
    });
    return Te(e, e.rowGap, r);
  }
  return null;
};
_t.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ae
} : {};
_t.filterProps = ["rowGap"];
const Lo = ce({
  prop: "gridColumn"
}), Wo = ce({
  prop: "gridRow"
}), Uo = ce({
  prop: "gridAutoFlow"
}), Yo = ce({
  prop: "gridAutoColumns"
}), Go = ce({
  prop: "gridAutoRows"
}), qo = ce({
  prop: "gridTemplateColumns"
}), Ko = ce({
  prop: "gridTemplateRows"
}), Ho = ce({
  prop: "gridTemplateAreas"
}), Xo = ce({
  prop: "gridArea"
});
Ot(Pt, kt, _t, Lo, Wo, Uo, Yo, Go, qo, Ko, Ho, Xo);
function Le(e, t) {
  return t === "grey" ? t : e;
}
const Jo = ce({
  prop: "color",
  themeKey: "palette",
  transform: Le
}), Qo = ce({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Le
}), Zo = ce({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Le
});
Ot(Jo, Qo, Zo);
function ge(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ei = ce({
  prop: "width",
  transform: ge
}), er = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, s, a, f;
      const n = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[r]) || Et[r];
      return n ? ((f = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : f.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: ge(r)
      };
    };
    return Te(e, e.maxWidth, t);
  }
  return null;
};
er.filterProps = ["maxWidth"];
const ti = ce({
  prop: "minWidth",
  transform: ge
}), ri = ce({
  prop: "height",
  transform: ge
}), ni = ce({
  prop: "maxHeight",
  transform: ge
}), oi = ce({
  prop: "minHeight",
  transform: ge
});
ce({
  prop: "size",
  cssProperty: "width",
  transform: ge
});
ce({
  prop: "size",
  cssProperty: "height",
  transform: ge
});
const ii = ce({
  prop: "boxSizing"
});
Ot(ei, er, ti, ri, ni, oi, ii);
const At = {
  // borders
  border: {
    themeKey: "borders",
    transform: be
  },
  borderTop: {
    themeKey: "borders",
    transform: be
  },
  borderRight: {
    themeKey: "borders",
    transform: be
  },
  borderBottom: {
    themeKey: "borders",
    transform: be
  },
  borderLeft: {
    themeKey: "borders",
    transform: be
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: be
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: $t
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Le
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Le
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Le
  },
  // spacing
  p: {
    style: le
  },
  pt: {
    style: le
  },
  pr: {
    style: le
  },
  pb: {
    style: le
  },
  pl: {
    style: le
  },
  px: {
    style: le
  },
  py: {
    style: le
  },
  padding: {
    style: le
  },
  paddingTop: {
    style: le
  },
  paddingRight: {
    style: le
  },
  paddingBottom: {
    style: le
  },
  paddingLeft: {
    style: le
  },
  paddingX: {
    style: le
  },
  paddingY: {
    style: le
  },
  paddingInline: {
    style: le
  },
  paddingInlineStart: {
    style: le
  },
  paddingInlineEnd: {
    style: le
  },
  paddingBlock: {
    style: le
  },
  paddingBlockStart: {
    style: le
  },
  paddingBlockEnd: {
    style: le
  },
  m: {
    style: se
  },
  mt: {
    style: se
  },
  mr: {
    style: se
  },
  mb: {
    style: se
  },
  ml: {
    style: se
  },
  mx: {
    style: se
  },
  my: {
    style: se
  },
  margin: {
    style: se
  },
  marginTop: {
    style: se
  },
  marginRight: {
    style: se
  },
  marginBottom: {
    style: se
  },
  marginLeft: {
    style: se
  },
  marginX: {
    style: se
  },
  marginY: {
    style: se
  },
  marginInline: {
    style: se
  },
  marginInlineStart: {
    style: se
  },
  marginInlineEnd: {
    style: se
  },
  marginBlock: {
    style: se
  },
  marginBlockStart: {
    style: se
  },
  marginBlockEnd: {
    style: se
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Pt
  },
  rowGap: {
    style: _t
  },
  columnGap: {
    style: kt
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: ge
  },
  maxWidth: {
    style: er
  },
  minWidth: {
    transform: ge
  },
  height: {
    transform: ge
  },
  maxHeight: {
    transform: ge
  },
  minHeight: {
    transform: ge
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function ai(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function si(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function li() {
  function e(r, n, o, i) {
    const s = {
      [r]: n,
      theme: o
    }, a = i[r];
    if (!a)
      return {
        [r]: n
      };
    const {
      cssProperty: f = r,
      themeKey: p,
      transform: m,
      style: g
    } = a;
    if (n == null)
      return null;
    if (p === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const h = Tt(o, p) || {};
    return g ? g(s) : Te(s, n, (C) => {
      let c = Ct(h, m, C);
      return C === c && typeof C == "string" && (c = Ct(h, m, `${r}${C === "default" ? "" : Q(C)}`, C)), f === !1 ? c : {
        [f]: c
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? At;
    function s(a) {
      let f = a;
      if (typeof a == "function")
        f = a(o);
      else if (typeof a != "object")
        return a;
      if (!f)
        return null;
      const p = So(o.breakpoints), m = Object.keys(p);
      let g = p;
      return Object.keys(f).forEach((h) => {
        const x = si(f[h], o);
        if (x != null)
          if (typeof x == "object")
            if (i[h])
              g = Ze(g, e(h, x, o, i));
            else {
              const C = Te({
                theme: o
              }, x, (c) => ({
                [h]: c
              }));
              ai(C, x) ? g[h] = t({
                sx: x,
                theme: o
              }) : g = Ze(g, C);
            }
          else
            g = Ze(g, e(h, x, o, i));
      }), mo(o, xo(m, g));
    }
    return Array.isArray(n) ? n.map(s) : s(n);
  }
  return t;
}
const We = li();
We.filterProps = ["sx"];
function ci(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function dn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, a = go(r), f = un(o);
  let p = me({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: f,
    shape: {
      ...vo,
      ...i
    }
  }, s);
  return p = bo(p), p.applyStyles = ci, p = t.reduce((m, g) => me(m, g), p), p.unstable_sxConfig = {
    ...At,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, p.unstable_sx = function(g) {
    return We({
      sx: g,
      theme: this
    });
  }, p;
}
const Fr = (e) => e, ui = () => {
  let e = Fr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Fr;
    }
  };
}, di = ui();
function fn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = fn(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function pe() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = fn(e)) && (n && (n += " "), n += t);
  return n;
}
const fi = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Ne(e, t, r = "Mui") {
  const n = fi[t];
  return n ? `${r}-${n}` : `${di.generate(e)}-${t}`;
}
function Ue(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Ne(e, o, r);
  }), n;
}
function pn(e, t = "") {
  return e.displayName || e.name || t;
}
function Dr(e, t, r) {
  const n = pn(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function pi(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return pn(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case vt.ForwardRef:
          return Dr(e, e.render, "ForwardRef");
        case vt.Memo:
          return Dr(e, e.type, "memo");
        default:
          return;
      }
  }
}
function gn(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: _r(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = _r(o.style));
  }), n;
}
const gi = dn();
function Lt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function mi(e) {
  return e ? (t, r) => r[e] : null;
}
function hi(e, t, r) {
  e.theme = Ci(e.theme) ? r : e.theme[t] || e.theme;
}
function ht(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => ht(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return mn(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function mn(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (typeof s.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !s.props(n))
        continue;
    } else
      for (const a in s.props)
        if (e[a] !== s.props[a] && ((o = e.ownerState) == null ? void 0 : o[a]) !== s.props[a])
          continue e;
    typeof s.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(s.style(n))) : r.push(s.style);
  }
  return r;
}
function yi(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = gi,
    rootShouldForwardProp: n = Lt,
    slotShouldForwardProp: o = Lt
  } = e;
  function i(a) {
    hi(a, t, r);
  }
  return (a, f = {}) => {
    lo(a, (b) => b.filter((N) => N !== We));
    const {
      name: p,
      slot: m,
      skipVariantsResolver: g,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: x = mi(hn(m)),
      ...C
    } = f, c = g !== void 0 ? g : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), T = h || !1;
    let O = Lt;
    m === "Root" || m === "root" ? O = n : m ? O = o : Si(a) && (O = void 0);
    const F = so(a, {
      shouldForwardProp: O,
      label: vi(p, m),
      ...C
    }), P = (b) => {
      if (typeof b == "function" && b.__emotion_real !== b)
        return function(U) {
          return ht(U, b);
        };
      if (Ee(b)) {
        const N = gn(b);
        return N.variants ? function(Y) {
          return ht(Y, N);
        } : N.style;
      }
      return b;
    }, S = (...b) => {
      const N = [], U = b.map(P), Y = [];
      if (N.push(i), p && x && Y.push(function($) {
        var H, ae;
        const W = (ae = (H = $.theme.components) == null ? void 0 : H[p]) == null ? void 0 : ae.styleOverrides;
        if (!W)
          return null;
        const ne = {};
        for (const fe in W)
          ne[fe] = ht($, W[fe]);
        return x($, ne);
      }), p && !c && Y.push(function($) {
        var ne, H;
        const _ = $.theme, W = (H = (ne = _ == null ? void 0 : _.components) == null ? void 0 : ne[p]) == null ? void 0 : H.variants;
        return W ? mn($, W) : null;
      }), T || Y.push(We), Array.isArray(U[0])) {
        const E = U.shift(), $ = new Array(N.length).fill(""), _ = new Array(Y.length).fill("");
        let W;
        W = [...$, ...E, ..._], W.raw = [...$, ...E.raw, ..._], N.unshift(W);
      }
      const re = [...N, ...U, ...Y], l = F(...re);
      return a.muiName && (l.muiName = a.muiName), process.env.NODE_ENV !== "production" && (l.displayName = bi(p, m, a)), l;
    };
    return F.withConfig && (S.withConfig = F.withConfig), S;
  };
}
function bi(e, t, r) {
  return e ? `${e}${Q(t || "")}` : `Styled(${pi(r)})`;
}
function vi(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${hn(t || "Root")}`), r;
}
function Ci(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Si(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function hn(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function St(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], s = t[o];
        if (!s)
          r[o] = i || {};
        else if (!i)
          r[o] = s;
        else {
          r[o] = {
            ...s
          };
          for (const a in i)
            if (Object.prototype.hasOwnProperty.call(i, a)) {
              const f = a;
              r[o][f] = St(i[f], s[f]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
const xi = typeof window < "u" ? M.useLayoutEffect : M.useEffect;
function Ei(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function tr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Ei(e, t, r);
}
function Ti(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function _e(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return _e(Ti(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ke(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ke(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const wi = (e) => {
  const t = _e(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Je = (e, t) => {
  try {
    return wi(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function It(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function yn(e) {
  e = _e(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (p, m = (p + r / 30) % 12) => o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let a = "rgb";
  const f = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", f.push(t[3])), It({
    type: a,
    values: f
  });
}
function Yt(e) {
  e = _e(e);
  let t = e.type === "hsl" || e.type === "hsla" ? _e(yn(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function jr(e, t) {
  const r = Yt(e), n = Yt(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function K(e, t) {
  return e = _e(e), t = tr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, It(e);
}
function ft(e, t, r) {
  try {
    return K(e, t);
  } catch {
    return e;
  }
}
function rr(e, t) {
  if (e = _e(e), t = tr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return It(e);
}
function Z(e, t, r) {
  try {
    return rr(e, t);
  } catch {
    return e;
  }
}
function nr(e, t) {
  if (e = _e(e), t = tr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return It(e);
}
function ee(e, t, r) {
  try {
    return nr(e, t);
  } catch {
    return e;
  }
}
function Ri(e, t = 0.15) {
  return Yt(e) > 0.5 ? rr(e, t) : nr(e, t);
}
function pt(e, t, r) {
  try {
    return Ri(e, t);
  } catch {
    return e;
  }
}
const Oi = /* @__PURE__ */ M.createContext(void 0);
process.env.NODE_ENV !== "production" && (u.node, u.object);
function $i(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? St(o.defaultProps, n) : !o.styleOverrides && !o.variants ? St(o, n) : n;
}
function Pi({
  props: e,
  name: t
}) {
  const r = M.useContext(Oi);
  return $i({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const zr = {
  theme: void 0
};
function ki(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (zr.theme = o.theme, i = gn(e(zr)), t = i, r = o.theme), i;
  };
}
function _i(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Vr = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Ai = (e, t, r) => {
  function n(o, i = [], s = []) {
    Object.entries(o).forEach(([a, f]) => {
      (!r || r && !r([...i, a])) && f != null && (typeof f == "object" && Object.keys(f).length > 0 ? n(f, [...i, a], Array.isArray(f) ? [...s, a] : s) : t([...i, a], f, s));
    });
  }
  n(e);
}, Ii = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Wt(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, s = {};
  return Ai(
    e,
    (a, f, p) => {
      if ((typeof f == "string" || typeof f == "number") && (!n || !n(a, f))) {
        const m = `--${r ? `${r}-` : ""}${a.join("-")}`, g = Ii(a, f);
        Object.assign(o, {
          [m]: g
        }), Vr(i, a, `var(${m})`, p), Vr(s, a, `var(${m}, ${g})`, p);
      }
    },
    (a) => a[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function Mi(e, t = {}) {
  const {
    getSelector: r = T,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: s,
    defaultColorScheme: a = "light",
    ...f
  } = e, {
    vars: p,
    css: m,
    varsWithDefaults: g
  } = Wt(f, t);
  let h = g;
  const x = {}, {
    [a]: C,
    ...c
  } = i;
  if (Object.entries(c || {}).forEach(([P, S]) => {
    const {
      vars: b,
      css: N,
      varsWithDefaults: U
    } = Wt(S, t);
    h = me(h, U), x[P] = {
      css: N,
      vars: b
    };
  }), C) {
    const {
      css: P,
      vars: S,
      varsWithDefaults: b
    } = Wt(C, t);
    h = me(h, b), x[a] = {
      css: P,
      vars: S
    };
  }
  function T(P, S) {
    var N, U;
    let b = o;
    if (o === "class" && (b = ".%s"), o === "data" && (b = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (b = `[${o}="%s"]`), P) {
      if (b === "media")
        return e.defaultColorScheme === P ? ":root" : {
          [`@media (prefers-color-scheme: ${((U = (N = i[P]) == null ? void 0 : N.palette) == null ? void 0 : U.mode) || P})`]: {
            ":root": S
          }
        };
      if (b)
        return e.defaultColorScheme === P ? `:root, ${b.replace("%s", String(P))}` : b.replace("%s", String(P));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let P = {
        ...p
      };
      return Object.entries(x).forEach(([, {
        vars: S
      }]) => {
        P = me(P, S);
      }), P;
    },
    generateStyleSheets: () => {
      var Y, re;
      const P = [], S = e.defaultColorScheme || "light";
      function b(l, E) {
        Object.keys(E).length && P.push(typeof l == "string" ? {
          [l]: {
            ...E
          }
        } : l);
      }
      b(r(void 0, {
        ...m
      }), m);
      const {
        [S]: N,
        ...U
      } = x;
      if (N) {
        const {
          css: l
        } = N, E = (re = (Y = i[S]) == null ? void 0 : Y.palette) == null ? void 0 : re.mode, $ = !n && E ? {
          colorScheme: E,
          ...l
        } : {
          ...l
        };
        b(r(S, {
          ...$
        }), $);
      }
      return Object.entries(U).forEach(([l, {
        css: E
      }]) => {
        var W, ne;
        const $ = (ne = (W = i[l]) == null ? void 0 : W.palette) == null ? void 0 : ne.mode, _ = !n && $ ? {
          colorScheme: $,
          ...E
        } : {
          ...E
        };
        b(r(l, {
          ..._
        }), _);
      }), P;
    }
  };
}
function Ni(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
function it(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let s = "", a = !0;
    for (let f = 0; f < i.length; f += 1) {
      const p = i[f];
      p && (s += (a === !0 ? "" : " ") + t(p), a = !1, r && r[p] && (s += " " + r[p]));
    }
    n[o] = s;
  }
  return n;
}
const et = {
  black: "#000",
  white: "#fff"
}, Bi = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Be = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Fe = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Xe = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, De = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, je = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, ze = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function bn() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: et.white,
      default: et.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const Fi = bn();
function vn() {
  return {
    text: {
      primary: et.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: et.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Lr = vn();
function Wr(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = nr(e.main, o) : t === "dark" && (e.dark = rr(e.main, i)));
}
function Di(e = "light") {
  return e === "dark" ? {
    main: De[200],
    light: De[50],
    dark: De[400]
  } : {
    main: De[700],
    light: De[400],
    dark: De[800]
  };
}
function ji(e = "light") {
  return e === "dark" ? {
    main: Be[200],
    light: Be[50],
    dark: Be[400]
  } : {
    main: Be[500],
    light: Be[300],
    dark: Be[700]
  };
}
function zi(e = "light") {
  return e === "dark" ? {
    main: Fe[500],
    light: Fe[300],
    dark: Fe[700]
  } : {
    main: Fe[700],
    light: Fe[400],
    dark: Fe[800]
  };
}
function Vi(e = "light") {
  return e === "dark" ? {
    main: je[400],
    light: je[300],
    dark: je[700]
  } : {
    main: je[700],
    light: je[500],
    dark: je[900]
  };
}
function Li(e = "light") {
  return e === "dark" ? {
    main: ze[400],
    light: ze[300],
    dark: ze[700]
  } : {
    main: ze[800],
    light: ze[500],
    dark: ze[900]
  };
}
function Wi(e = "light") {
  return e === "dark" ? {
    main: Xe[400],
    light: Xe[300],
    dark: Xe[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Xe[500],
    dark: Xe[900]
  };
}
function or(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || Di(t), s = e.secondary || ji(t), a = e.error || zi(t), f = e.info || Vi(t), p = e.success || Li(t), m = e.warning || Wi(t);
  function g(c) {
    const T = jr(c, Lr.text.primary) >= r ? Lr.text.primary : Fi.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const O = jr(c, T);
      O < 3 && console.error([`MUI: The contrast ratio of ${O}:1 for ${T} on ${c}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return T;
  }
  const h = ({
    color: c,
    name: T,
    mainShade: O = 500,
    lightShade: F = 300,
    darkShade: P = 700
  }) => {
    if (c = {
      ...c
    }, !c.main && c[O] && (c.main = c[O]), !c.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${T ? ` (${T})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${O}\` property.` : ke(11, T ? ` (${T})` : "", O));
    if (typeof c.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${T ? ` (${T})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(c.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ke(12, T ? ` (${T})` : "", JSON.stringify(c.main)));
    return Wr(c, "light", F, n), Wr(c, "dark", P, n), c.contrastText || (c.contrastText = g(c.main)), c;
  };
  let x;
  return t === "light" ? x = bn() : t === "dark" && (x = vn()), process.env.NODE_ENV !== "production" && (x || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), me({
    // A collection of common colors.
    common: {
      ...et
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: Bi,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: g,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...x
  }, o);
}
function Ui(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Yi(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function Gi(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ur = {
  textTransform: "uppercase"
}, Yr = '"Roboto", "Helvetica", "Arial", sans-serif';
function qi(e, t) {
  const {
    fontFamily: r = Yr,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: p,
    pxToRem: m,
    ...g
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = n / 14, x = m || ((T) => `${T / f * h}rem`), C = (T, O, F, P, S) => ({
    fontFamily: r,
    fontWeight: T,
    fontSize: x(O),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: F,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Yr ? {
      letterSpacing: `${Gi(P / O)}em`
    } : {},
    ...S,
    ...p
  }), c = {
    h1: C(o, 96, 1.167, -1.5),
    h2: C(o, 60, 1.2, -0.5),
    h3: C(i, 48, 1.167, 0),
    h4: C(i, 34, 1.235, 0.25),
    h5: C(i, 24, 1.334, 0),
    h6: C(s, 20, 1.6, 0.15),
    subtitle1: C(i, 16, 1.75, 0.15),
    subtitle2: C(s, 14, 1.57, 0.1),
    body1: C(i, 16, 1.5, 0.15),
    body2: C(i, 14, 1.43, 0.15),
    button: C(s, 14, 1.75, 0.4, Ur),
    caption: C(i, 12, 1.66, 0.4),
    overline: C(i, 12, 2.66, 1, Ur),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return me({
    htmlFontSize: f,
    pxToRem: x,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: a,
    ...c
  }, g, {
    clone: !1
    // No need to clone deep
  });
}
const Ki = 0.2, Hi = 0.14, Xi = 0.12;
function ie(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ki})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Hi})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Xi})`].join(",");
}
const Ji = ["none", ie(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ie(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ie(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ie(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ie(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ie(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ie(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ie(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ie(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ie(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ie(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ie(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ie(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ie(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ie(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ie(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ie(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ie(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ie(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ie(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ie(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ie(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ie(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ie(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Qi = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Zi = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Gr(e) {
  return `${Math.round(e)}ms`;
}
function ea(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function ta(e) {
  const t = {
    ...Qi,
    ...e.easing
  }, r = {
    ...Zi,
    ...e.duration
  };
  return {
    getAutoHeightDuration: ea,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: a = t.easeInOut,
        delay: f = 0,
        ...p
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const m = (h) => typeof h == "string", g = (h) => !Number.isNaN(parseFloat(h));
        !m(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !g(s) && !m(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), m(a) || console.error('MUI: Argument "easing" must be a string.'), !g(f) && !m(f) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(p).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(p).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof s == "string" ? s : Gr(s)} ${a} ${typeof f == "string" ? f : Gr(f)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const ra = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function na(e) {
  return Ee(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Cn(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !na(a) || s.startsWith("unstable_") ? delete n[s] : Ee(a) && (n[s] = {
        ...a
      }, r(n[s]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Gt(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: a = {},
    shape: f,
    ...p
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : ke(20));
  const m = or(i), g = dn(e);
  let h = me(g, {
    mixins: Yi(g.breakpoints, n),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ji.slice(),
    typography: qi(m, a),
    transitions: ta(s),
    zIndex: {
      ...ra
    }
  });
  if (h = me(h, p), h = t.reduce((x, C) => me(x, C), h), process.env.NODE_ENV !== "production") {
    const x = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], C = (c, T) => {
      let O;
      for (O in c) {
        const F = c[O];
        if (x.includes(O) && Object.keys(F).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const P = Ne("", O);
            console.error([`MUI: The \`${T}\` component increases the CSS specificity of the \`${O}\` internal state.`, "You can not override it like this: ", JSON.stringify(c, null, 2), "", `Instead, you need to use the '&.${P}' syntax:`, JSON.stringify({
              root: {
                [`&.${P}`]: F
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          c[O] = {};
        }
      }
    };
    Object.keys(h.components).forEach((c) => {
      const T = h.components[c].styleOverrides;
      T && c.startsWith("Mui") && C(T, c);
    });
  }
  return h.unstable_sxConfig = {
    ...At,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, h.unstable_sx = function(C) {
    return We({
      sx: C,
      theme: this
    });
  }, h.toRuntimeSource = Cn, h;
}
function oa(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const ia = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = oa(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Sn(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function xn(e) {
  return e === "dark" ? ia : [];
}
function aa(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = or(t);
  return {
    palette: i,
    opacity: {
      ...Sn(i.mode),
      ...r
    },
    overlays: n || xn(i.mode),
    ...o
  };
}
function sa(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const la = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], ca = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return la(e.cssVarPrefix).forEach((a) => {
        s[a] = r[a], delete r[a];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: s
        }
      } : i ? {
        [i.replace("%s", t)]: s,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function ua(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function y(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Qe(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : yn(e);
}
function Se(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Je(Qe(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function da(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ce = (e) => {
  try {
    return e();
  } catch {
  }
}, fa = (e = "mui") => _i(e);
function Ut(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = aa({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...s
  } = Gt({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...Sn(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || xn(o)
  }, s;
}
function pa(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = sa,
    colorSchemeSelector: a = r.light && r.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...p
  } = e, m = Object.keys(r)[0], g = n || (r.light && m !== "light" ? "light" : m), h = fa(i), {
    [g]: x,
    light: C,
    dark: c,
    ...T
  } = r, O = {
    ...T
  };
  let F = x;
  if ((g === "dark" && !("dark" in r) || g === "light" && !("light" in r)) && (F = !0), !F)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${g}\` option is either missing or invalid.` : ke(21, g));
  const P = Ut(O, F, p, g);
  C && !O.light && Ut(O, C, void 0, "light"), c && !O.dark && Ut(O, c, void 0, "dark");
  let S = {
    defaultColorScheme: g,
    ...P,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: f,
    getCssVar: h,
    colorSchemes: O,
    font: {
      ...Ui(P.typography),
      ...P.font
    },
    spacing: da(p.spacing)
  };
  Object.keys(S.colorSchemes).forEach((re) => {
    const l = S.colorSchemes[re].palette, E = ($) => {
      const _ = $.split("-"), W = _[1], ne = _[2];
      return h($, l[W][ne]);
    };
    if (l.mode === "light" && (y(l.common, "background", "#fff"), y(l.common, "onBackground", "#000")), l.mode === "dark" && (y(l.common, "background", "#000"), y(l.common, "onBackground", "#fff")), ua(l, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), l.mode === "light") {
      y(l.Alert, "errorColor", Z(l.error.light, 0.6)), y(l.Alert, "infoColor", Z(l.info.light, 0.6)), y(l.Alert, "successColor", Z(l.success.light, 0.6)), y(l.Alert, "warningColor", Z(l.warning.light, 0.6)), y(l.Alert, "errorFilledBg", E("palette-error-main")), y(l.Alert, "infoFilledBg", E("palette-info-main")), y(l.Alert, "successFilledBg", E("palette-success-main")), y(l.Alert, "warningFilledBg", E("palette-warning-main")), y(l.Alert, "errorFilledColor", Ce(() => l.getContrastText(l.error.main))), y(l.Alert, "infoFilledColor", Ce(() => l.getContrastText(l.info.main))), y(l.Alert, "successFilledColor", Ce(() => l.getContrastText(l.success.main))), y(l.Alert, "warningFilledColor", Ce(() => l.getContrastText(l.warning.main))), y(l.Alert, "errorStandardBg", ee(l.error.light, 0.9)), y(l.Alert, "infoStandardBg", ee(l.info.light, 0.9)), y(l.Alert, "successStandardBg", ee(l.success.light, 0.9)), y(l.Alert, "warningStandardBg", ee(l.warning.light, 0.9)), y(l.Alert, "errorIconColor", E("palette-error-main")), y(l.Alert, "infoIconColor", E("palette-info-main")), y(l.Alert, "successIconColor", E("palette-success-main")), y(l.Alert, "warningIconColor", E("palette-warning-main")), y(l.AppBar, "defaultBg", E("palette-grey-100")), y(l.Avatar, "defaultBg", E("palette-grey-400")), y(l.Button, "inheritContainedBg", E("palette-grey-300")), y(l.Button, "inheritContainedHoverBg", E("palette-grey-A100")), y(l.Chip, "defaultBorder", E("palette-grey-400")), y(l.Chip, "defaultAvatarColor", E("palette-grey-700")), y(l.Chip, "defaultIconColor", E("palette-grey-700")), y(l.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), y(l.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), y(l.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), y(l.LinearProgress, "primaryBg", ee(l.primary.main, 0.62)), y(l.LinearProgress, "secondaryBg", ee(l.secondary.main, 0.62)), y(l.LinearProgress, "errorBg", ee(l.error.main, 0.62)), y(l.LinearProgress, "infoBg", ee(l.info.main, 0.62)), y(l.LinearProgress, "successBg", ee(l.success.main, 0.62)), y(l.LinearProgress, "warningBg", ee(l.warning.main, 0.62)), y(l.Skeleton, "bg", `rgba(${E("palette-text-primaryChannel")} / 0.11)`), y(l.Slider, "primaryTrack", ee(l.primary.main, 0.62)), y(l.Slider, "secondaryTrack", ee(l.secondary.main, 0.62)), y(l.Slider, "errorTrack", ee(l.error.main, 0.62)), y(l.Slider, "infoTrack", ee(l.info.main, 0.62)), y(l.Slider, "successTrack", ee(l.success.main, 0.62)), y(l.Slider, "warningTrack", ee(l.warning.main, 0.62));
      const $ = pt(l.background.default, 0.8);
      y(l.SnackbarContent, "bg", $), y(l.SnackbarContent, "color", Ce(() => l.getContrastText($))), y(l.SpeedDialAction, "fabHoverBg", pt(l.background.paper, 0.15)), y(l.StepConnector, "border", E("palette-grey-400")), y(l.StepContent, "border", E("palette-grey-400")), y(l.Switch, "defaultColor", E("palette-common-white")), y(l.Switch, "defaultDisabledColor", E("palette-grey-100")), y(l.Switch, "primaryDisabledColor", ee(l.primary.main, 0.62)), y(l.Switch, "secondaryDisabledColor", ee(l.secondary.main, 0.62)), y(l.Switch, "errorDisabledColor", ee(l.error.main, 0.62)), y(l.Switch, "infoDisabledColor", ee(l.info.main, 0.62)), y(l.Switch, "successDisabledColor", ee(l.success.main, 0.62)), y(l.Switch, "warningDisabledColor", ee(l.warning.main, 0.62)), y(l.TableCell, "border", ee(ft(l.divider, 1), 0.88)), y(l.Tooltip, "bg", ft(l.grey[700], 0.92));
    }
    if (l.mode === "dark") {
      y(l.Alert, "errorColor", ee(l.error.light, 0.6)), y(l.Alert, "infoColor", ee(l.info.light, 0.6)), y(l.Alert, "successColor", ee(l.success.light, 0.6)), y(l.Alert, "warningColor", ee(l.warning.light, 0.6)), y(l.Alert, "errorFilledBg", E("palette-error-dark")), y(l.Alert, "infoFilledBg", E("palette-info-dark")), y(l.Alert, "successFilledBg", E("palette-success-dark")), y(l.Alert, "warningFilledBg", E("palette-warning-dark")), y(l.Alert, "errorFilledColor", Ce(() => l.getContrastText(l.error.dark))), y(l.Alert, "infoFilledColor", Ce(() => l.getContrastText(l.info.dark))), y(l.Alert, "successFilledColor", Ce(() => l.getContrastText(l.success.dark))), y(l.Alert, "warningFilledColor", Ce(() => l.getContrastText(l.warning.dark))), y(l.Alert, "errorStandardBg", Z(l.error.light, 0.9)), y(l.Alert, "infoStandardBg", Z(l.info.light, 0.9)), y(l.Alert, "successStandardBg", Z(l.success.light, 0.9)), y(l.Alert, "warningStandardBg", Z(l.warning.light, 0.9)), y(l.Alert, "errorIconColor", E("palette-error-main")), y(l.Alert, "infoIconColor", E("palette-info-main")), y(l.Alert, "successIconColor", E("palette-success-main")), y(l.Alert, "warningIconColor", E("palette-warning-main")), y(l.AppBar, "defaultBg", E("palette-grey-900")), y(l.AppBar, "darkBg", E("palette-background-paper")), y(l.AppBar, "darkColor", E("palette-text-primary")), y(l.Avatar, "defaultBg", E("palette-grey-600")), y(l.Button, "inheritContainedBg", E("palette-grey-800")), y(l.Button, "inheritContainedHoverBg", E("palette-grey-700")), y(l.Chip, "defaultBorder", E("palette-grey-700")), y(l.Chip, "defaultAvatarColor", E("palette-grey-300")), y(l.Chip, "defaultIconColor", E("palette-grey-300")), y(l.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), y(l.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), y(l.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), y(l.LinearProgress, "primaryBg", Z(l.primary.main, 0.5)), y(l.LinearProgress, "secondaryBg", Z(l.secondary.main, 0.5)), y(l.LinearProgress, "errorBg", Z(l.error.main, 0.5)), y(l.LinearProgress, "infoBg", Z(l.info.main, 0.5)), y(l.LinearProgress, "successBg", Z(l.success.main, 0.5)), y(l.LinearProgress, "warningBg", Z(l.warning.main, 0.5)), y(l.Skeleton, "bg", `rgba(${E("palette-text-primaryChannel")} / 0.13)`), y(l.Slider, "primaryTrack", Z(l.primary.main, 0.5)), y(l.Slider, "secondaryTrack", Z(l.secondary.main, 0.5)), y(l.Slider, "errorTrack", Z(l.error.main, 0.5)), y(l.Slider, "infoTrack", Z(l.info.main, 0.5)), y(l.Slider, "successTrack", Z(l.success.main, 0.5)), y(l.Slider, "warningTrack", Z(l.warning.main, 0.5));
      const $ = pt(l.background.default, 0.98);
      y(l.SnackbarContent, "bg", $), y(l.SnackbarContent, "color", Ce(() => l.getContrastText($))), y(l.SpeedDialAction, "fabHoverBg", pt(l.background.paper, 0.15)), y(l.StepConnector, "border", E("palette-grey-600")), y(l.StepContent, "border", E("palette-grey-600")), y(l.Switch, "defaultColor", E("palette-grey-300")), y(l.Switch, "defaultDisabledColor", E("palette-grey-600")), y(l.Switch, "primaryDisabledColor", Z(l.primary.main, 0.55)), y(l.Switch, "secondaryDisabledColor", Z(l.secondary.main, 0.55)), y(l.Switch, "errorDisabledColor", Z(l.error.main, 0.55)), y(l.Switch, "infoDisabledColor", Z(l.info.main, 0.55)), y(l.Switch, "successDisabledColor", Z(l.success.main, 0.55)), y(l.Switch, "warningDisabledColor", Z(l.warning.main, 0.55)), y(l.TableCell, "border", Z(ft(l.divider, 1), 0.68)), y(l.Tooltip, "bg", ft(l.grey[700], 0.92));
    }
    Se(l.background, "default"), Se(l.background, "paper"), Se(l.common, "background"), Se(l.common, "onBackground"), Se(l, "divider"), Object.keys(l).forEach(($) => {
      const _ = l[$];
      $ !== "tonalOffset" && _ && typeof _ == "object" && (_.main && y(l[$], "mainChannel", Je(Qe(_.main))), _.light && y(l[$], "lightChannel", Je(Qe(_.light))), _.dark && y(l[$], "darkChannel", Je(Qe(_.dark))), _.contrastText && y(l[$], "contrastTextChannel", Je(Qe(_.contrastText))), $ === "text" && (Se(l[$], "primary"), Se(l[$], "secondary")), $ === "action" && (_.active && Se(l[$], "active"), _.selected && Se(l[$], "selected")));
    });
  }), S = t.reduce((re, l) => me(re, l), S);
  const b = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: ca(S)
  }, {
    vars: N,
    generateThemeVars: U,
    generateStyleSheets: Y
  } = Mi(S, b);
  return S.vars = N, Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([re, l]) => {
    S[re] = l;
  }), S.generateThemeVars = U, S.generateStyleSheets = Y, S.generateSpacing = function() {
    return un(p.spacing, Zt(this));
  }, S.getColorSchemeSelector = Ni(a), S.spacing = S.generateSpacing(), S.shouldSkipGeneratingVar = s, S.unstable_sxConfig = {
    ...At,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, S.unstable_sx = function(l) {
    return We({
      sx: l,
      theme: this
    });
  }, S.toRuntimeSource = Cn, S;
}
function qr(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: or({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function En(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...s
  } = e, a = i || "light", f = o == null ? void 0 : o[a], p = {
    ...o,
    ...r ? {
      [a]: {
        ...typeof f != "boolean" && f,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Gt(e, ...t);
    let m = r;
    "palette" in e || p[a] && (p[a] !== !0 ? m = p[a].palette : a === "dark" && (m = {
      mode: "dark"
    }));
    const g = Gt({
      ...e,
      palette: m
    }, ...t);
    return g.defaultColorScheme = a, g.colorSchemes = p, g.palette.mode === "light" && (g.colorSchemes.light = {
      ...p.light !== !0 && p.light,
      palette: g.palette
    }, qr(g, "dark", p.dark)), g.palette.mode === "dark" && (g.colorSchemes.dark = {
      ...p.dark !== !0 && p.dark,
      palette: g.palette
    }, qr(g, "light", p.light)), g;
  }
  return !r && !("light" in p) && a === "light" && (p.light = !0), pa({
    ...s,
    colorSchemes: p,
    defaultColorScheme: a,
    ...typeof n != "boolean" && n
  }, ...t);
}
const ga = En();
function ma(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ir = (e) => ma(e) && e !== "classes", de = yi({
  themeId: Yn,
  defaultTheme: ga,
  rootShouldForwardProp: ir
}), Pe = ki;
process.env.NODE_ENV !== "production" && (u.node, u.object.isRequired);
function Ye(e) {
  return Pi(e);
}
let Kr = 0;
function ha(e) {
  const [t, r] = M.useState(e), n = e || t;
  return M.useEffect(() => {
    t == null && (Kr += 1, r(`mui-${Kr}`));
  }, [t]), n;
}
const ya = {
  ...M
}, Hr = ya.useId;
function Tn(e) {
  if (Hr !== void 0) {
    const t = Hr();
    return e ?? t;
  }
  return ha(e);
}
function yt(e) {
  const t = M.useRef(e);
  return xi(() => {
    t.current = e;
  }), M.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Xr(...e) {
  const t = M.useRef(void 0), r = M.useCallback((n) => {
    const o = e.map((i) => {
      if (i == null)
        return null;
      if (typeof i == "function") {
        const s = i, a = s(n);
        return typeof a == "function" ? a : () => {
          s(null);
        };
      }
      return i.current = n, () => {
        i.current = null;
      };
    });
    return () => {
      o.forEach((i) => i == null ? void 0 : i());
    };
  }, e);
  return M.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    t.current && (t.current(), t.current = void 0), n != null && (t.current = r(n));
  }, e);
}
const ba = u.oneOfType([u.func, u.object]);
function ar(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function va(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ca(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof i == "function" && !va(i) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Sa = ar(u.elementType, Ca);
function Jr(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const Qr = {};
function wn(e, t) {
  const r = M.useRef(Qr);
  return r.current === Qr && (r.current = e(t)), r;
}
class xt {
  constructor() {
    qe(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new xt();
  }
  static use() {
    const t = wn(xt.create).current, [r, n] = M.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, M.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Ea(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function xa() {
  return xt.use();
}
function Ea() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function qt() {
  return qt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qt.apply(null, arguments);
}
function Ta(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Kt(e, t) {
  return Kt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Kt(e, t);
}
function wa(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Kt(e, t);
}
const Zr = Ve.createContext(null);
function Ra(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sr(e, t) {
  var r = function(i) {
    return t && gt(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Dn.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Oa(e, t) {
  e = e || {}, t = t || {};
  function r(m) {
    return m in t ? t[m] : e[m];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, a = {};
  for (var f in t) {
    if (n[f])
      for (s = 0; s < n[f].length; s++) {
        var p = n[f][s];
        a[n[f][s]] = r(p);
      }
    a[f] = r(f);
  }
  for (s = 0; s < o.length; s++)
    a[o[s]] = r(o[s]);
  return a;
}
function Me(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function $a(e, t) {
  return sr(e.children, function(r) {
    return mt(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Me(r, "appear", e),
      enter: Me(r, "enter", e),
      exit: Me(r, "exit", e)
    });
  });
}
function Pa(e, t, r) {
  var n = sr(e.children), o = Oa(t, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (gt(s)) {
      var a = i in t, f = i in n, p = t[i], m = gt(p) && !p.props.in;
      f && (!a || m) ? o[i] = mt(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: Me(s, "exit", e),
        enter: Me(s, "enter", e)
      }) : !f && a && !m ? o[i] = mt(s, {
        in: !1
      }) : f && a && gt(p) && (o[i] = mt(s, {
        onExited: r.bind(null, s),
        in: p.props.in,
        exit: Me(s, "exit", e),
        enter: Me(s, "enter", e)
      }));
    }
  }), o;
}
var ka = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, _a = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, lr = /* @__PURE__ */ function(e) {
  wa(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(Ra(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, a = i.handleExited, f = i.firstRender;
    return {
      children: f ? $a(o, a) : Pa(o, s, a),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = sr(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(a) {
      var f = qt({}, a.children);
      return delete f[o.key], {
        children: f
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, a = Ta(o, ["component", "childFactory"]), f = this.state.contextValue, p = ka(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ Ve.createElement(Zr.Provider, {
      value: f
    }, p) : /* @__PURE__ */ Ve.createElement(Zr.Provider, {
      value: f
    }, /* @__PURE__ */ Ve.createElement(i, a, p));
  }, t;
}(Ve.Component);
lr.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: u.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: u.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: u.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: u.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: u.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: u.func
} : {};
lr.defaultProps = _a;
const Aa = [];
function Ia(e) {
  M.useEffect(e, Aa);
}
class cr {
  constructor() {
    qe(this, "currentId", null);
    qe(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    qe(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new cr();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function Ma() {
  const e = wn(cr.create).current;
  return Ia(e.disposeEffect), e;
}
function Rn(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: a,
    onExited: f,
    timeout: p
  } = e, [m, g] = M.useState(!1), h = pe(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), x = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, C = pe(r.child, m && r.childLeaving, n && r.childPulsate);
  return !a && !m && g(!0), M.useEffect(() => {
    if (!a && f != null) {
      const c = setTimeout(f, p);
      return () => {
        clearTimeout(c);
      };
    }
  }, [f, a, p]), /* @__PURE__ */ te.jsx("span", {
    className: h,
    style: x,
    children: /* @__PURE__ */ te.jsx("span", {
      className: C
    })
  });
}
process.env.NODE_ENV !== "production" && (Rn.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object.isRequired,
  className: u.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: u.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: u.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: u.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: u.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: u.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: u.number,
  /**
   * exit delay
   */
  timeout: u.number.isRequired
});
const ye = Ue("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ht = 550, Na = 80, Ba = rt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Fa = rt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Da = rt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, ja = de("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), za = de(Rn, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${ye.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ba};
    animation-duration: ${Ht}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${ye.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${ye.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ye.childLeaving} {
    opacity: 0;
    animation-name: ${Fa};
    animation-duration: ${Ht}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${ye.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Da};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, On = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = Ye({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s,
    ...a
  } = n, [f, p] = M.useState([]), m = M.useRef(0), g = M.useRef(null);
  M.useEffect(() => {
    g.current && (g.current(), g.current = null);
  }, [f]);
  const h = M.useRef(!1), x = Ma(), C = M.useRef(null), c = M.useRef(null), T = M.useCallback((S) => {
    const {
      pulsate: b,
      rippleX: N,
      rippleY: U,
      rippleSize: Y,
      cb: re
    } = S;
    p((l) => [...l, /* @__PURE__ */ te.jsx(za, {
      classes: {
        ripple: pe(i.ripple, ye.ripple),
        rippleVisible: pe(i.rippleVisible, ye.rippleVisible),
        ripplePulsate: pe(i.ripplePulsate, ye.ripplePulsate),
        child: pe(i.child, ye.child),
        childLeaving: pe(i.childLeaving, ye.childLeaving),
        childPulsate: pe(i.childPulsate, ye.childPulsate)
      },
      timeout: Ht,
      pulsate: b,
      rippleX: N,
      rippleY: U,
      rippleSize: Y
    }, m.current)]), m.current += 1, g.current = re;
  }, [i]), O = M.useCallback((S = {}, b = {}, N = () => {
  }) => {
    const {
      pulsate: U = !1,
      center: Y = o || b.pulsate,
      fakeElement: re = !1
      // For test purposes
    } = b;
    if ((S == null ? void 0 : S.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (S == null ? void 0 : S.type) === "touchstart" && (h.current = !0);
    const l = re ? null : c.current, E = l ? l.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let $, _, W;
    if (Y || S === void 0 || S.clientX === 0 && S.clientY === 0 || !S.clientX && !S.touches)
      $ = Math.round(E.width / 2), _ = Math.round(E.height / 2);
    else {
      const {
        clientX: ne,
        clientY: H
      } = S.touches && S.touches.length > 0 ? S.touches[0] : S;
      $ = Math.round(ne - E.left), _ = Math.round(H - E.top);
    }
    if (Y)
      W = Math.sqrt((2 * E.width ** 2 + E.height ** 2) / 3), W % 2 === 0 && (W += 1);
    else {
      const ne = Math.max(Math.abs((l ? l.clientWidth : 0) - $), $) * 2 + 2, H = Math.max(Math.abs((l ? l.clientHeight : 0) - _), _) * 2 + 2;
      W = Math.sqrt(ne ** 2 + H ** 2);
    }
    S != null && S.touches ? C.current === null && (C.current = () => {
      T({
        pulsate: U,
        rippleX: $,
        rippleY: _,
        rippleSize: W,
        cb: N
      });
    }, x.start(Na, () => {
      C.current && (C.current(), C.current = null);
    })) : T({
      pulsate: U,
      rippleX: $,
      rippleY: _,
      rippleSize: W,
      cb: N
    });
  }, [o, T, x]), F = M.useCallback(() => {
    O({}, {
      pulsate: !0
    });
  }, [O]), P = M.useCallback((S, b) => {
    if (x.clear(), (S == null ? void 0 : S.type) === "touchend" && C.current) {
      C.current(), C.current = null, x.start(0, () => {
        P(S, b);
      });
      return;
    }
    C.current = null, p((N) => N.length > 0 ? N.slice(1) : N), g.current = b;
  }, [x]);
  return M.useImperativeHandle(r, () => ({
    pulsate: F,
    start: O,
    stop: P
  }), [F, O, P]), /* @__PURE__ */ te.jsx(ja, {
    className: pe(ye.root, i.root, s),
    ref: c,
    ...a,
    children: /* @__PURE__ */ te.jsx(lr, {
      component: null,
      exit: !0,
      children: f
    })
  });
});
process.env.NODE_ENV !== "production" && (On.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: u.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string
});
function Va(e) {
  return Ne("MuiButtonBase", e);
}
const La = Ue("MuiButtonBase", ["root", "disabled", "focusVisible"]), Wa = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = it({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Va, o);
  return r && n && (s.root += ` ${n}`), s;
}, Ua = de("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${La.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Mt = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = Ye({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: a,
    component: f = "button",
    disabled: p = !1,
    disableRipple: m = !1,
    disableTouchRipple: g = !1,
    focusRipple: h = !1,
    focusVisibleClassName: x,
    LinkComponent: C = "a",
    onBlur: c,
    onClick: T,
    onContextMenu: O,
    onDragLeave: F,
    onFocus: P,
    onFocusVisible: S,
    onKeyDown: b,
    onKeyUp: N,
    onMouseDown: U,
    onMouseLeave: Y,
    onMouseUp: re,
    onTouchEnd: l,
    onTouchMove: E,
    onTouchStart: $,
    tabIndex: _ = 0,
    TouchRippleProps: W,
    touchRippleRef: ne,
    type: H,
    ...ae
  } = n, fe = M.useRef(null), oe = xa(), d = Xr(oe.ref, ne), [v, R] = M.useState(!1);
  p && v && R(!1), M.useImperativeHandle(o, () => ({
    focusVisible: () => {
      R(!0), fe.current.focus();
    }
  }), []);
  const k = oe.shouldMount && !m && !p;
  M.useEffect(() => {
    v && h && !m && oe.pulsate();
  }, [m, h, v, oe]);
  const A = xe(oe, "start", U, g), B = xe(oe, "stop", O, g), D = xe(oe, "stop", F, g), j = xe(oe, "stop", re, g), I = xe(oe, "stop", (z) => {
    v && z.preventDefault(), Y && Y(z);
  }, g), V = xe(oe, "start", $, g), L = xe(oe, "stop", l, g), ue = xe(oe, "stop", E, g), w = xe(oe, "stop", (z) => {
    Jr(z.target) || R(!1), c && c(z);
  }, !1), he = yt((z) => {
    fe.current || (fe.current = z.currentTarget), Jr(z.target) && (R(!0), S && S(z)), P && P(z);
  }), we = () => {
    const z = fe.current;
    return f && f !== "button" && !(z.tagName === "A" && z.href);
  }, at = yt((z) => {
    h && !z.repeat && v && z.key === " " && oe.stop(z, () => {
      oe.start(z);
    }), z.target === z.currentTarget && we() && z.key === " " && z.preventDefault(), b && b(z), z.target === z.currentTarget && we() && z.key === "Enter" && !p && (z.preventDefault(), T && T(z));
  }), In = yt((z) => {
    h && z.key === " " && v && !z.defaultPrevented && oe.stop(z, () => {
      oe.pulsate(z);
    }), N && N(z), T && z.target === z.currentTarget && we() && z.key === " " && !z.defaultPrevented && T(z);
  });
  let st = f;
  st === "button" && (ae.href || ae.to) && (st = C);
  const Ge = {};
  st === "button" ? (Ge.type = H === void 0 ? "button" : H, Ge.disabled = p) : (!ae.href && !ae.to && (Ge.role = "button"), p && (Ge["aria-disabled"] = p));
  const Mn = Xr(r, fe), pr = {
    ...n,
    centerRipple: i,
    component: f,
    disabled: p,
    disableRipple: m,
    disableTouchRipple: g,
    focusRipple: h,
    tabIndex: _,
    focusVisible: v
  }, Nn = Wa(pr);
  return /* @__PURE__ */ te.jsxs(Ua, {
    as: st,
    className: pe(Nn.root, a),
    ownerState: pr,
    onBlur: w,
    onClick: T,
    onContextMenu: B,
    onFocus: he,
    onKeyDown: at,
    onKeyUp: In,
    onMouseDown: A,
    onMouseLeave: I,
    onMouseUp: j,
    onDragLeave: D,
    onTouchEnd: L,
    onTouchMove: ue,
    onTouchStart: V,
    ref: Mn,
    tabIndex: p ? -1 : _,
    type: H,
    ...Ge,
    ...ae,
    children: [s, k ? /* @__PURE__ */ te.jsx(On, {
      ref: d,
      center: i,
      ...W
    }) : null]
  });
});
function xe(e, t, r, n = !1) {
  return yt((o) => (r && r(o), n || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (Mt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: ba,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: u.bool,
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Sa,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: u.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: u.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: u.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: u.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: u.string,
  /**
   * @ignore
   */
  href: u.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: u.elementType,
  /**
   * @ignore
   */
  onBlur: u.func,
  /**
   * @ignore
   */
  onClick: u.func,
  /**
   * @ignore
   */
  onContextMenu: u.func,
  /**
   * @ignore
   */
  onDragLeave: u.func,
  /**
   * @ignore
   */
  onFocus: u.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: u.func,
  /**
   * @ignore
   */
  onKeyDown: u.func,
  /**
   * @ignore
   */
  onKeyUp: u.func,
  /**
   * @ignore
   */
  onMouseDown: u.func,
  /**
   * @ignore
   */
  onMouseLeave: u.func,
  /**
   * @ignore
   */
  onMouseUp: u.func,
  /**
   * @ignore
   */
  onTouchEnd: u.func,
  /**
   * @ignore
   */
  onTouchMove: u.func,
  /**
   * @ignore
   */
  onTouchStart: u.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * @default 0
   */
  tabIndex: u.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: u.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: u.oneOfType([u.func, u.shape({
    current: u.shape({
      pulsate: u.func.isRequired,
      start: u.func.isRequired,
      stop: u.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: u.oneOfType([u.oneOf(["button", "reset", "submit"]), u.string])
});
function Ya(e) {
  return typeof e.main == "string";
}
function Ga(e, t = []) {
  if (!Ya(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function tt(e = []) {
  return ([, t]) => t && Ga(t, e);
}
function qa(e) {
  return Ne("MuiCircularProgress", e);
}
Ue("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Re = 44, Xt = rt`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Jt = rt`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, Ka = typeof Xt != "string" ? nn`
        animation: ${Xt} 1.4s linear infinite;
      ` : null, Ha = typeof Jt != "string" ? nn`
        animation: ${Jt} 1.4s ease-in-out infinite;
      ` : null, Xa = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, i = {
    root: ["root", r, `color${Q(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${Q(r)}`, o && "circleDisableShrink"]
  };
  return it(i, qa, t);
}, Ja = de("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${Q(r.color)}`]];
  }
})(Pe(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: Ka || {
      animation: `${Xt} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(tt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), Qa = de("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), Za = de("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${Q(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(Pe(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: Ha || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Jt} 1.4s ease-in-out infinite`
    }
  }]
}))), ur = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = Ye({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: s = !1,
    size: a = 40,
    style: f,
    thickness: p = 3.6,
    value: m = 0,
    variant: g = "indeterminate",
    ...h
  } = n, x = {
    ...n,
    color: i,
    disableShrink: s,
    size: a,
    thickness: p,
    value: m,
    variant: g
  }, C = Xa(x), c = {}, T = {}, O = {};
  if (g === "determinate") {
    const F = 2 * Math.PI * ((Re - p) / 2);
    c.strokeDasharray = F.toFixed(3), O["aria-valuenow"] = Math.round(m), c.strokeDashoffset = `${((100 - m) / 100 * F).toFixed(3)}px`, T.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ te.jsx(Ja, {
    className: pe(C.root, o),
    style: {
      width: a,
      height: a,
      ...T,
      ...f
    },
    ownerState: x,
    ref: r,
    role: "progressbar",
    ...O,
    ...h,
    children: /* @__PURE__ */ te.jsx(Qa, {
      className: C.svg,
      ownerState: x,
      viewBox: `${Re / 2} ${Re / 2} ${Re} ${Re}`,
      children: /* @__PURE__ */ te.jsx(Za, {
        className: C.circle,
        style: c,
        ownerState: x,
        cx: Re,
        cy: Re,
        r: (Re - p) / 2,
        fill: "none",
        strokeWidth: p
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (ur.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: u.oneOfType([u.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), u.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: ar(u.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: u.oneOfType([u.number, u.string]),
  /**
   * @ignore
   */
  style: u.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: u.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: u.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: u.oneOf(["determinate", "indeterminate"])
});
function es(e) {
  return Ne("MuiButton", e);
}
const Ie = Ue("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), $n = /* @__PURE__ */ M.createContext({});
process.env.NODE_ENV !== "production" && ($n.displayName = "ButtonGroupContext");
const Pn = /* @__PURE__ */ M.createContext(void 0);
process.env.NODE_ENV !== "production" && (Pn.displayName = "ButtonGroupButtonContext");
const ts = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    loading: s,
    loadingPosition: a,
    classes: f
  } = e, p = {
    root: ["root", s && "loading", i, `${i}${Q(t)}`, `size${Q(o)}`, `${i}Size${Q(o)}`, `color${Q(t)}`, r && "disableElevation", n && "fullWidth", s && `loadingPosition${Q(a)}`],
    startIcon: ["icon", "startIcon", `iconSize${Q(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${Q(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, m = it(p, es, f);
  return {
    ...f,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...m
  };
}, kn = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], rs = de(Mt, {
  shouldForwardProp: (e) => ir(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${Q(r.color)}`], t[`size${Q(r.size)}`], t[`${r.variant}Size${Q(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(Pe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Ie.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${Ie.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Ie.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${Ie.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(tt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : K(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : K(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : K(e.palette[n].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : K(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : K(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${Ie.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Ie.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${Ie.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), ns = de("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${Q(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...kn]
})), os = de("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${Q(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...kn]
})), is = de("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), en = de("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), _n = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = M.useContext($n), o = M.useContext(Pn), i = St(n, t), s = Ye({
    props: i,
    name: "MuiButton"
  }), {
    children: a,
    color: f = "primary",
    component: p = "button",
    className: m,
    disabled: g = !1,
    disableElevation: h = !1,
    disableFocusRipple: x = !1,
    endIcon: C,
    focusVisibleClassName: c,
    fullWidth: T = !1,
    id: O,
    loading: F = null,
    loadingIndicator: P,
    loadingPosition: S = "center",
    size: b = "medium",
    startIcon: N,
    type: U,
    variant: Y = "text",
    ...re
  } = s, l = Tn(O), E = P ?? /* @__PURE__ */ te.jsx(ur, {
    "aria-labelledby": l,
    color: "inherit",
    size: 16
  }), $ = {
    ...s,
    color: f,
    component: p,
    disabled: g,
    disableElevation: h,
    disableFocusRipple: x,
    fullWidth: T,
    loading: F,
    loadingIndicator: E,
    loadingPosition: S,
    size: b,
    type: U,
    variant: Y
  }, _ = ts($), W = (N || F && S === "start") && /* @__PURE__ */ te.jsx(ns, {
    className: _.startIcon,
    ownerState: $,
    children: N || /* @__PURE__ */ te.jsx(en, {
      className: _.loadingIconPlaceholder,
      ownerState: $
    })
  }), ne = (C || F && S === "end") && /* @__PURE__ */ te.jsx(os, {
    className: _.endIcon,
    ownerState: $,
    children: C || /* @__PURE__ */ te.jsx(en, {
      className: _.loadingIconPlaceholder,
      ownerState: $
    })
  }), H = o || "", ae = typeof F == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ te.jsx("span", {
      className: _.loadingWrapper,
      style: {
        display: "contents"
      },
      children: F && /* @__PURE__ */ te.jsx(is, {
        className: _.loadingIndicator,
        ownerState: $,
        children: E
      })
    })
  ) : null;
  return /* @__PURE__ */ te.jsxs(rs, {
    ownerState: $,
    className: pe(n.className, _.root, m, H),
    component: p,
    disabled: g || F,
    focusRipple: !x,
    focusVisibleClassName: pe(_.focusVisible, c),
    ref: r,
    type: U,
    id: F ? l : O,
    ...re,
    classes: _,
    children: [W, S !== "end" && ae, a, S === "end" && ae, ne]
  });
});
process.env.NODE_ENV !== "production" && (_n.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: u.oneOfType([u.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), u.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: u.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: u.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: u.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: u.bool,
  /**
   * Element placed after the children.
   */
  endIcon: u.node,
  /**
   * @ignore
   */
  focusVisibleClassName: u.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: u.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: u.string,
  /**
   * @ignore
   */
  id: u.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: u.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: u.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: u.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: u.oneOfType([u.oneOf(["small", "medium", "large"]), u.string]),
  /**
   * Element placed before the children.
   */
  startIcon: u.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * @ignore
   */
  type: u.oneOfType([u.oneOf(["button", "reset", "submit"]), u.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: u.oneOfType([u.oneOf(["contained", "outlined", "text"]), u.string])
});
const $e = {
  primary: {
    main: "#1994FC",
    //為了MUI theme的設定 無用
    costMain: "#1994FC",
    //這才是主色調
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#D1EAFE",
    fabFont: "#1994FC"
  },
  surface: {
    costMain: "#1994FC",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#F5F5F6",
    fabFont: "#1994FC"
  },
  secondary: {
    main: "#1994FC",
    costMain: "#DBE9FF",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#F5F5F6",
    neutral: "#34393D",
    fabBg: "#DBE9FF",
    fabFont: "#2D66BF"
  },
  tertiary: {
    costMain: "#1994FC",
    onMain: "#FFFFFF",
    shadow: "#000000",
    outline: "#CECECE",
    elevated: "#FAFAFA",
    tonal: "#DBE9FF",
    onTonal: "#2D66BF",
    iconFont: "#7A7D80",
    iconOverlay: "#505050",
    surface: "#BDDEDF",
    neutral: "#0E3A3B",
    fabBg: "#BDDEDF",
    fabFont: "#0E3A3B"
  }
}, dr = ["#373737"], as = (e, t = "primary") => {
  var o;
  const r = $e[t], n = ((o = e == null ? void 0 : e.palette) == null ? void 0 : o[t]) ?? r;
  return {
    disabledcolor: dr[0],
    filled: {
      borderColor: "transparent",
      bgColor: n.costMain ?? r.costMain,
      //theme傳進來的顏色/fallback的顏色
      fontColor: n.onMain ?? r.onMain,
      overlay: n.onMain ?? r.onMain,
      focusBorderColor: "transparent",
      shadowColor: n.shadow ?? r.shadow
    },
    outlined: {
      borderColor: n.outline ?? r.outline,
      bgColor: "transparent",
      fontColor: n.costMain ?? r.costMain,
      overlay: n.costMain ?? r.costMain,
      focusBorderColor: n.costMain ?? r.costMain,
      shadowColor: "transparent"
    },
    text: {
      borderColor: "transparent",
      bgColor: "transparent",
      fontColor: n.costMain ?? r.costMain,
      overlay: n.costMain ?? r.costMain,
      focusBorderColor: "transparent",
      shadowColor: "transparent"
    },
    elevated: {
      borderColor: "transparent",
      bgColor: n.elevated ?? r.elevated,
      fontColor: n.costMain ?? r.costMain,
      overlay: n.costMain ?? r.costMain,
      focusBorderColor: "transparent",
      shadowColor: n.shadow ?? r.shadow
    },
    tonal: {
      borderColor: "transparent",
      bgColor: n.tonal ?? r.tonal,
      fontColor: n.onTonal ?? r.onTonal,
      overlay: n.onTonal ?? r.onTonal,
      focusBorderColor: "transparent",
      shadowColor: n.shadow ?? r.shadow
    }
  };
}, ss = de(_n)(({
  "data-variant": e,
  size: t = "medium",
  theme: r,
  "data-color": n = "primary"
}) => {
  const o = as(r, n), s = [
    "filled",
    "outlined",
    "text",
    "elevated",
    "tonal"
  ].includes(
    e
  ) ? e : "filled", a = o[s], f = {
    small: {},
    medium: {
      fontSize: "14px",
      height: "40px"
    },
    large: {
      fontSize: "20px",
      height: "70px"
    }
  }[t], p = (m) => ({
    textTransform: "none",
    fontFamily: "'Noto Sans', 'Noto Sans TC', sans-serif;",
    borderRadius: 6,
    fontWeight: 500,
    padding: "10px 24px",
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: m.overlay,
      // 半透明白色遮罩
      borderRadius: 6,
      opacity: 0,
      transition: "opacity 0.3s",
      pointerEvents: "none",
      // 確保不影響互動
      zIndex: 1
      // 蓋在 button 上但不蓋文字
    },
    "&:hover::before": {
      opacity: 0.08
    },
    "&:active::before, &:focus-visible::before": {
      opacity: 0.12
    },
    "&.Mui-disabled": {
      color: K(o.disabledcolor, 0.38)
    },
    ...f
  });
  switch (s) {
    case "filled":
      return {
        ...p(a),
        backgroundColor: a.bgColor,
        color: a.fontColor,
        "&:hover": {
          boxShadow: `0px 1px 3px 1px ${K(a.shadowColor, 0.15)}, 0px 1px 2px 0px ${K(a.shadowColor, 0.3)}`
        },
        "&:active": {
          boxShadow: "none"
        },
        "&.Mui-disabled": {
          backgroundColor: K(o.disabledcolor, 0.12)
        }
      };
    case "outlined":
      return {
        ...p(a),
        border: `1px solid ${a.borderColor}`,
        color: a.fontColor,
        backgroundColor: a.bgColor,
        "&:focus-visible": {
          border: `1px solid ${a.fontColor}`
        },
        "&:active": {
          border: `1px solid ${a.borderColor}`
        }
      };
    case "text":
      return {
        ...p(a),
        backgroundColor: a.bgColor,
        color: a.fontColor,
        "&:focus-visible::before": {
          backgroundColor: K(a.overlay, 0.12)
        }
      };
    case "elevated":
      return {
        ...p(a),
        backgroundColor: a.bgColor,
        color: a.fontColor,
        boxShadow: `0px 1px 3px 1px ${K(a.shadowColor, 0.15)}, 0px 1px 2px 0px ${K(a.shadowColor, 0.3)}`,
        "&:hover": {
          boxShadow: `0px 2px 6px 2px ${K(a.shadowColor, 0.15)}, 0px 1px 2px 0px ${K(a.shadowColor, 0.3)}`
        },
        "&:active, &:focus-visible": {
          boxShadow: `0px 1px 3px 1px ${K(a.shadowColor, 0.15)}, 0px 1px 2px 0px ${K(a.shadowColor, 0.3)}`
        },
        "&.Mui-disabled": {
          backgroundColor: K(o.disabledcolor, 0.12)
        }
      };
    case "tonal":
      return {
        ...p(a),
        backgroundColor: a.bgColor,
        color: a.fontColor,
        "&:hover": {
          boxShadow: `0px 1px 3px 1px ${K(a.shadowColor, 0.15)}, 0px 1px 2px 0px ${K(a.shadowColor, 0.3)}`
        },
        "&:active": {
          boxShadow: "none"
        },
        "&.Mui-disabled": {
          backgroundColor: K(o.disabledcolor, 0.12)
        }
      };
  }
}), ws = ({
  variant: e = "filled",
  color: t = "primary",
  ...r
}) => /* @__PURE__ */ te.jsx(
  ss,
  {
    disableElevation: !0,
    disableRipple: !0,
    ...r,
    "data-color": t,
    "data-variant": e
  }
);
function ls(e) {
  return Ne("MuiFab", e);
}
const tn = Ue("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), cs = (e) => {
  const {
    color: t,
    variant: r,
    classes: n,
    size: o
  } = e, i = {
    root: ["root", r, `size${Q(o)}`, t === "inherit" ? "colorInherit" : t]
  }, s = it(i, ls, n);
  return {
    ...n,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...s
  };
}, us = de(Mt, {
  name: "MuiFab",
  slot: "Root",
  shouldForwardProp: (e) => ir(e) || e === "classes",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`size${Q(r.size)}`], r.color === "inherit" && t.colorInherit, t[Q(r.size)], t[r.color]];
  }
})(Pe(({
  theme: e
}) => {
  var t, r;
  return {
    ...e.typography.button,
    minHeight: 36,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
      duration: e.transitions.duration.short
    }),
    borderRadius: "50%",
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    zIndex: (e.vars || e).zIndex.fab,
    boxShadow: (e.vars || e).shadows[6],
    "&:active": {
      boxShadow: (e.vars || e).shadows[12]
    },
    color: e.vars ? e.vars.palette.grey[900] : (r = (t = e.palette).getContrastText) == null ? void 0 : r.call(t, e.palette.grey[300]),
    backgroundColor: (e.vars || e).palette.grey[300],
    "&:hover": {
      backgroundColor: (e.vars || e).palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette.grey[300]
      },
      textDecoration: "none"
    },
    [`&.${tn.focusVisible}`]: {
      boxShadow: (e.vars || e).shadows[6]
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        width: 40,
        height: 40
      }
    }, {
      props: {
        size: "medium"
      },
      style: {
        width: 48,
        height: 48
      }
    }, {
      props: {
        variant: "extended"
      },
      style: {
        borderRadius: 48 / 2,
        padding: "0 16px",
        width: "auto",
        minHeight: "auto",
        minWidth: 48,
        height: 48
      }
    }, {
      props: {
        variant: "extended",
        size: "small"
      },
      style: {
        width: "auto",
        padding: "0 8px",
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34
      }
    }, {
      props: {
        variant: "extended",
        size: "medium"
      },
      style: {
        width: "auto",
        padding: "0 16px",
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40
      }
    }, {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit"
      }
    }]
  };
}), Pe(({
  theme: e
}) => ({
  variants: [...Object.entries(e.palette).filter(tt(["dark", "contrastText"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].contrastText,
      backgroundColor: (e.vars || e).palette[t].main,
      "&:hover": {
        backgroundColor: (e.vars || e).palette[t].dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette[t].main
        }
      }
    }
  }))]
})), Pe(({
  theme: e
}) => ({
  [`&.${tn.disabled}`]: {
    color: (e.vars || e).palette.action.disabled,
    boxShadow: (e.vars || e).shadows[0],
    backgroundColor: (e.vars || e).palette.action.disabledBackground
  }
}))), An = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = Ye({
    props: t,
    name: "MuiFab"
  }), {
    children: o,
    className: i,
    color: s = "default",
    component: a = "button",
    disabled: f = !1,
    disableFocusRipple: p = !1,
    focusVisibleClassName: m,
    size: g = "large",
    variant: h = "circular",
    ...x
  } = n, C = {
    ...n,
    color: s,
    component: a,
    disabled: f,
    disableFocusRipple: p,
    size: g,
    variant: h
  }, c = cs(C);
  return /* @__PURE__ */ te.jsx(us, {
    className: pe(c.root, i),
    component: a,
    disabled: f,
    focusRipple: !p,
    focusVisibleClassName: pe(c.focusVisible, m),
    ownerState: C,
    ref: r,
    ...x,
    classes: c,
    children: o
  });
});
process.env.NODE_ENV !== "production" && (An.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: u.oneOfType([u.oneOf(["default", "error", "info", "inherit", "primary", "secondary", "success", "warning"]), u.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: u.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: u.bool,
  /**
   * If `true`, the ripple effect is disabled.
   */
  disableRipple: u.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: u.string,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: u.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'large'
   */
  size: u.oneOfType([u.oneOf(["small", "medium", "large"]), u.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * The variant to use.
   * @default 'circular'
   */
  variant: u.oneOfType([u.oneOf(["circular", "extended"]), u.string])
});
const ds = (e, t = "primary") => {
  var o;
  const r = $e[t], n = ((o = e == null ? void 0 : e.palette) == null ? void 0 : o[t]) ?? r;
  return {
    bgColor: n.fabBg ?? r.fabBg,
    fontColor: n.fabFont ?? r.fabFont,
    overlay: n.fabFont ?? r.fabFont
  };
}, fs = de(An)(({ "data-color": e, size: t = "medium", variant: r, theme: n }) => {
  const o = ds(n, e), i = {
    small: {
      height: "40px",
      width: "40px",
      "& svg": {
        fontSize: 24
      }
    },
    medium: {
      height: "56px",
      width: "56px",
      "& svg": {
        fontSize: 24
      }
    },
    large: {
      height: "96px",
      width: "96px",
      "& svg": {
        fontSize: 36
      }
    }
  }[t], s = r === "extended";
  return {
    fontFamily: "'Noto Sans', 'Noto Sans TC', sans-serif;",
    fontWeight: 500,
    textTransform: "none",
    position: "relative",
    backgroundColor: o.bgColor,
    color: o.fontColor,
    borderRadius: s ? "6px" : "50%",
    ...s ? {} : i,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: o.overlay,
      borderRadius: s ? "6px" : "50%",
      opacity: 0,
      transition: "opacity 0.2s ease-in-out"
    },
    "&:hover, &:focus-visible, &:active, &:focus": {
      backgroundColor: o.bgColor
    },
    "&:hover::before": {
      opacity: 0.08
    },
    "&:focus-visible::before, &:active::before": {
      opacity: 0.12
    }
  };
}), Rs = ({ color: e = "surface", ...t }) => /* @__PURE__ */ te.jsx(fs, { "data-color": e, size: "medium", disableFocusRipple: !0, ...t });
function ps(e) {
  return Ne("MuiIconButton", e);
}
const rn = Ue("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), gs = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i,
    loading: s
  } = e, a = {
    root: ["root", s && "loading", r && "disabled", n !== "default" && `color${Q(n)}`, o && `edge${Q(o)}`, `size${Q(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return it(a, ps, t);
}, ms = de(Mt, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.loading && t.loading, r.color !== "default" && t[`color${Q(r.color)}`], r.edge && t[`edge${Q(r.edge)}`], t[`size${Q(r.size)}`]];
  }
})(Pe(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (t) => !t.disableRipple,
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : K(e.palette.action.active, e.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), Pe(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(tt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(tt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : K((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${rn.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${rn.loading}`]: {
    color: "transparent"
  }
}))), hs = de("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (e.vars || e).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), fr = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = Ye({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: s,
    color: a = "default",
    disabled: f = !1,
    disableFocusRipple: p = !1,
    size: m = "medium",
    id: g,
    loading: h = null,
    loadingIndicator: x,
    ...C
  } = n, c = Tn(g), T = x ?? /* @__PURE__ */ te.jsx(ur, {
    "aria-labelledby": c,
    color: "inherit",
    size: 16
  }), O = {
    ...n,
    edge: o,
    color: a,
    disabled: f,
    disableFocusRipple: p,
    loading: h,
    loadingIndicator: T,
    size: m
  }, F = gs(O);
  return /* @__PURE__ */ te.jsxs(ms, {
    id: h ? c : g,
    className: pe(F.root, s),
    centerRipple: !0,
    focusRipple: !p,
    disabled: f || h,
    ref: r,
    ...C,
    ownerState: O,
    children: [typeof h == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ te.jsx("span", {
      className: F.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ te.jsx(hs, {
        className: F.loadingIndicator,
        ownerState: O,
        children: h && T
      })
    }), i]
  });
});
process.env.NODE_ENV !== "production" && (fr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: ar(u.node, (e) => M.Children.toArray(e.children).some((r) => /* @__PURE__ */ M.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: u.oneOfType([u.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), u.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: u.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: u.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: u.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: u.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: u.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: u.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: u.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: u.oneOfType([u.oneOf(["small", "medium", "large"]), u.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object])
});
const ys = (e, t = "primary") => {
  var o;
  const r = $e[t], n = ((o = e == null ? void 0 : e.palette) == null ? void 0 : o[t]) ?? r;
  return {
    disabledcolor: dr[0],
    filled: {
      bgColor: n.costMain ?? r.costMain,
      fontColor: n.onMain ?? r.onMain,
      overlay: n.onMain ?? r.onMain,
      borderColor: "transparent"
    },
    standard: {
      bgColor: "transparent",
      fontColor: n.iconFont ?? r.iconFont,
      overlay: n.iconOverlay ?? r.iconOverlay,
      borderColor: "transparent"
    },
    tonal: {
      bgColor: n.tonal ?? r.tonal,
      fontColor: n.iconFont ?? r.iconFont,
      overlay: n.onTonal ?? r.onTonal,
      borderColor: "transparent"
    },
    outlined: {
      bgColor: "transparent",
      fontColor: n.iconFont ?? r.iconFont,
      overlay: n.iconOverlay ?? r.iconOverlay,
      borderColor: n.outline ?? r.outline
    }
  };
}, bs = (e, t = "primary") => {
  var o;
  const r = $e[t], n = ((o = e == null ? void 0 : e.palette) == null ? void 0 : o[t]) ?? r;
  return {
    disabledcolor: dr[0],
    filled: {
      bgColor: n.surface ?? r.surface,
      fontColor: n.costMain ?? r.costMain,
      overlay: n.costMain ?? r.costMain,
      selectedBgColor: n.costMain ?? r.costMain,
      selectedFontColor: n.onMain ?? r.onMain,
      selectedOverlay: n.onMain ?? r.onMain,
      borderColor: "transparent"
    },
    standard: {
      bgColor: "transparent",
      fontColor: n.costMain ?? r.costMain,
      overlay: n.iconOverlay ?? r.iconOverlay,
      selectedBgColor: "transparent",
      selectedFontColor: n.costMain ?? r.costMain,
      selectedOverlay: n.costMain ?? r.onMain,
      borderColor: "transparent"
    },
    tonal: {
      bgColor: n.surface ?? r.surface,
      fontColor: n.onTonal ?? r.onTonal,
      overlay: n.iconOverlay ?? r.iconOverlay,
      selectedBgColor: n.tonal ?? r.tonal,
      selectedFontColor: n.onTonal ?? r.onTonal,
      selectedOverlay: n.onTonal ?? r.onTonal,
      borderColor: "transparent"
    },
    outlined: {
      bgColor: "transparent",
      fontColor: n.iconFont ?? r.iconFont,
      overlay: n.iconOverlay ?? r.iconOverlay,
      selectedBgColor: n.neutral ?? r.neutral,
      selectedFontColor: n.onMain ?? r.onMain,
      selectedOverlay: n.onMain ?? r.onMain,
      borderColor: n.outline ?? r.outline
    }
  };
}, vs = de(fr)(({
  "data-variant": e,
  "data-color": t,
  size: r = "small",
  theme: n
}) => {
  const o = ys(n, t), i = ["filled", "standard", "tonal", "outlined"].includes(e) ? e : "filled", s = o[i], a = {
    small: {
      height: "40px",
      width: "40px",
      "& svg": {
        fontSize: 24
      }
    },
    medium: {
      height: "56px",
      width: "56px",
      "& svg": {
        fontSize: 24
      }
    },
    large: {
      height: "96px",
      width: "96px",
      "& svg": {
        fontSize: 36
      }
    }
  }[r], f = () => ({
    backgroundColor: s.bgColor,
    color: s.fontColor,
    borderRadius: 6,
    ...a,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: s.overlay,
      // 半透明白色遮罩
      borderRadius: 6,
      opacity: 0,
      transition: "opacity 0.3s",
      pointerEvents: "none",
      // 確保不影響互動
      zIndex: 1
      // 蓋在 button 上但不蓋文字
    },
    "&.Mui-disabled": {
      backgroundColor: K(o.disabledcolor, 0.08),
      color: K(o.disabledcolor, 0.38)
    },
    "&:hover": {
      backgroundColor: s.bgColor
    },
    "&:hover::before": {
      opacity: 0.08
    },
    "&:active::before, &:focus-visible::before": {
      opacity: 0.12
    }
  });
  switch (i) {
    case "filled":
      return {
        ...f(),
        "&:hover": {
          backgroundColor: s.bgColor
        }
      };
    case "standard":
      return {
        ...f(),
        "&.Mui-disabled": {
          backgroundColor: "transparent"
        }
      };
    case "tonal":
      return {
        ...f(),
        "&:hover": {
          backgroundColor: s.bgColor
        }
      };
    case "outlined":
      return {
        ...f(),
        border: `1px solid ${s.borderColor}`,
        "&:hover": {
          backgroundColor: s.bgColor,
          border: `1px solid ${s.borderColor}`
        },
        "&.Mui-disabled": {
          backgroundColor: "transparent"
        }
      };
  }
}), Cs = de(fr)(({
  "data-variant": e,
  "data-color": t,
  clicked: r,
  size: n = "small",
  theme: o
}) => {
  const i = bs(o, t), s = ["filled", "standard", "tonal", "outlined"].includes(e) ? e : "filled", a = i[s], f = {
    small: {
      height: "40px",
      width: "40px",
      "& svg": {
        fontSize: 24
      }
    },
    medium: {
      height: "56px",
      width: "56px",
      "& svg": {
        fontSize: 24
      }
    },
    large: {
      height: "96px",
      width: "96px",
      "& svg": {
        fontSize: 36
      }
    }
  }[n], p = () => ({
    backgroundColor: r ? a.selectedBgColor : a.bgColor,
    color: r ? a.selectedFontColor : a.fontColor,
    borderRadius: 6,
    ...f,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: r ? a.selectedOverlay : a.overlay,
      // 半透明白色遮罩
      borderRadius: 6,
      opacity: 0,
      transition: "opacity 0.3s",
      pointerEvents: "none",
      // 確保不影響互動
      zIndex: 1
      // 蓋在 button 上但不蓋文字
    },
    "&.Mui-disabled": {
      backgroundColor: K(i.disabledcolor, 0.12),
      color: K(i.disabledcolor, 0.38)
    },
    "&:hover": {
      backgroundColor: r ? a.selectedBgColor : a.bgColor
    },
    "&:hover::before": {
      opacity: 0.08
    },
    "&:active::before, &:focus-visible::before": {
      opacity: 0.12
    }
  });
  switch (s) {
    case "filled":
      return {
        ...p()
      };
    case "standard":
      return {
        ...p(),
        "&.Mui-disabled": {
          backgroundColor: "transparent"
        }
      };
    case "tonal":
      return {
        ...p(),
        "&.Mui-disabled": {
          backgroundColor: K(i.disabledcolor, 0.08),
          color: K(
            r ? a.selectedFontColor : a.fontColor,
            0.38
          )
        }
      };
    case "outlined":
      return {
        ...p(),
        border: r ? "" : `1px solid ${a.borderColor}`,
        "&.Mui-disabled": {
          backgroundColor: r ? K(i.disabledcolor, 0.12) : "transparent"
        },
        "&:hover": {
          border: r ? "" : `1px solid ${a.borderColor}`
        }
      };
  }
}), Os = ({
  variant: e,
  toggleIcon: t,
  children: r,
  color: n = "primary",
  ...o
}) => {
  const [i, s] = jn(!1), a = () => {
    console.log("toggleClick"), s(!i);
  };
  return t ? /* @__PURE__ */ te.jsx(
    Cs,
    {
      disableRipple: !0,
      "data-color": n,
      "data-variant": e,
      ...o,
      onClick: a,
      clicked: i,
      children: i ? r : t
    }
  ) : /* @__PURE__ */ te.jsx(
    vs,
    {
      disableRipple: !0,
      "data-color": n,
      "data-variant": e,
      ...o,
      children: r
    }
  );
}, $s = En({
  palette: {
    primary: $e.primary,
    secondary: $e.secondary,
    tertiary: $e.tertiary,
    surface: $e.surface
  }
});
export {
  ws as Button,
  Rs as Fab,
  Os as IconButton,
  $s as lemonTheme
};
