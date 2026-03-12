import L from "react";
var b = { exports: {} }, E = {};
var D;
function re() {
  if (D) return E;
  D = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function f(d, s, n) {
    var l = null;
    if (n !== void 0 && (l = "" + n), s.key !== void 0 && (l = "" + s.key), "key" in s) {
      n = {};
      for (var u in s)
        u !== "key" && (n[u] = s[u]);
    } else n = s;
    return s = n.ref, {
      $$typeof: c,
      type: d,
      key: l,
      ref: s !== void 0 ? s : null,
      props: n
    };
  }
  return E.Fragment = i, E.jsx = f, E.jsxs = f, E;
}
var R = {};
var I;
function te() {
  return I || (I = 1, process.env.NODE_ENV !== "production" && (function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case J:
          return "Profiler";
        case q:
          return "StrictMode";
        case X:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case U:
            return "Portal";
          case z:
            return e.displayName || "Context";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case k:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function i(e) {
      return "" + e;
    }
    function f(e) {
      try {
        i(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), i(e);
      }
    }
    function d(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === k)
        return "<...>";
      try {
        var r = c(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function l(e) {
      if (g.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function u(e, r) {
      function t() {
        w || (w = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function M() {
      var e = c(this.type);
      return N[e] || (N[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function W(e, r, t, a, p, O) {
      var o = t.ref;
      return e = {
        $$typeof: y,
        type: e,
        key: r,
        props: t,
        _owner: a
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: M
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: p
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function A(e, r, t, a, p, O) {
      var o = r.children;
      if (o !== void 0)
        if (a)
          if (K(o)) {
            for (a = 0; a < o.length; a++)
              S(o[a]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(o);
      if (g.call(r, "key")) {
        o = c(e);
        var m = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        a = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", $[o + a] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          o,
          m,
          o
        ), $[o + a] = !0);
      }
      if (o = null, t !== void 0 && (f(t), o = "" + t), l(r) && (f(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var j in r)
          j !== "key" && (t[j] = r[j]);
      } else t = r;
      return o && u(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(
        e,
        o,
        t,
        s(),
        p,
        O
      );
    }
    function S(e) {
      P(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === k && (e._payload.status === "fulfilled" ? P(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function P(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    var v = L, y = /* @__PURE__ */ Symbol.for("react.transitional.element"), U = /* @__PURE__ */ Symbol.for("react.portal"), T = /* @__PURE__ */ Symbol.for("react.fragment"), q = /* @__PURE__ */ Symbol.for("react.strict_mode"), J = /* @__PURE__ */ Symbol.for("react.profiler"), V = /* @__PURE__ */ Symbol.for("react.consumer"), z = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), B = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), k = /* @__PURE__ */ Symbol.for("react.lazy"), Z = /* @__PURE__ */ Symbol.for("react.activity"), Q = /* @__PURE__ */ Symbol.for("react.client.reference"), h = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, g = Object.prototype.hasOwnProperty, K = Array.isArray, x = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var w, N = {}, C = v.react_stack_bottom_frame.bind(
      v,
      n
    )(), Y = x(d(n)), $ = {};
    R.Fragment = T, R.jsx = function(e, r, t) {
      var a = 1e4 > h.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        t,
        !1,
        a ? Error("react-stack-top-frame") : C,
        a ? x(d(e)) : Y
      );
    }, R.jsxs = function(e, r, t) {
      var a = 1e4 > h.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        t,
        !0,
        a ? Error("react-stack-top-frame") : C,
        a ? x(d(e)) : Y
      );
    };
  })()), R;
}
var F;
function ne() {
  return F || (F = 1, process.env.NODE_ENV === "production" ? b.exports = re() : b.exports = te()), b.exports;
}
var _ = ne();
const ae = ({ data: c, onChecked: i }) => {
  const [f, d] = L.useState(c), s = (n, l) => {
    d(f.map((u) => u.id === l.id ? { ...u, selected: n.target.checked } : u)), i && i({ ...l, selected: n.target.checked });
  };
  return /* @__PURE__ */ _.jsx("div", { children: f.map((n) => /* @__PURE__ */ _.jsxs("div", { children: [
    /* @__PURE__ */ _.jsx("input", { type: "checkbox", checked: n.selected, onChange: (l) => s(l, n) }),
    /* @__PURE__ */ _.jsx("span", { children: n.name }),
    /* @__PURE__ */ _.jsx("div", { className: "tree-node", children: n.children && /* @__PURE__ */ _.jsx(ae, { data: n.children, onChecked: i }) })
  ] }, n.id)) });
};
export {
  ae as Tree
};
