/* ---------------------------------- logo ---------------------------------- */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof __SVGATOR_DEFINE__ && __SVGATOR_DEFINE__.amd
    ? __SVGATOR_DEFINE__(e)
    : (((t =
        "undefined" != typeof globalThis
          ? globalThis
          : t || self).__SVGATOR_PLAYER__ = t.__SVGATOR_PLAYER__ || {}),
      (t.__SVGATOR_PLAYER__["91c80d77"] = e()));
})(this, function () {
  "use strict";
  class t {
    static _removeQuotes(t) {
      return `${t}`.replace(/['"]/g, "");
    }
    static _convertHEXToRGB(t) {
      const e = [
          "^",
          "\\s*",
          "#",
          "(?<red>[0-9A-Z]{1,2})",
          "(?<green>[0-9A-Z]{1,2})",
          "(?<blue>[0-9A-Z]{1,2})",
        ].join(""),
        n = t.match(new RegExp(e, "i"));
      if (!n) return t;
      const r = (t) => parseInt(t.length > 1 ? t : `${t}${t}`, 16);
      return `rgb(${r(
        n.groups.red
      )}, ${r(n.groups.green)}, ${r(n.groups.blue)})`;
    }
    static _sanitizeNumber(t) {
      return +t;
    }
    static _suffixWithUnit(t, e = "px") {
      return t.endsWith(e) ? t : `${t}${e}`;
    }
    static _roundToNDecimals(t, e = 0) {
      const n = Math.pow(10, e);
      return Math.round(t * n) / n;
    }
    static getValuesFromMatrix(t) {
      const e = [
          "^",
          "\\s*",
          "(matrix\\()",
          "(?<a>-?[0-9]*\\.?[0-9]+)",
          "\\s*",
          ",?",
          "\\s*",
          "(?<b>-?[0-9]*\\.?[0-9]+)",
          "\\s*",
          ",?",
          "\\s*",
          "(?<c>-?[0-9]*\\.?[0-9]+)",
          "\\s*",
          ",?",
          "\\s*",
          "(?<d>-?[0-9]*\\.?[0-9]+)",
          "\\s*",
          ",?",
          "\\s*",
          "(?<e>-?[0-9]*\\.?[0-9]+)",
          "\\s*",
          ",?",
          "\\s*",
          "(?<f>-?[0-9]*\\.?[0-9]+)",
          "\\)",
        ].join(""),
        n = t.match(new RegExp(e, "i"));
      if (n)
        return [
          this._sanitizeNumber(n.groups.a),
          this._sanitizeNumber(n.groups.b),
          this._sanitizeNumber(n.groups.c),
          this._sanitizeNumber(n.groups.d),
          this._sanitizeNumber(n.groups.e),
          this._sanitizeNumber(n.groups.f),
        ];
    }
    static checkAgainstDefault(t, e = "inline") {
      if (t !== e && (t = this._removeQuotes(t)) !== e) return t;
    }
    static paint(t, e = "rgb(0, 0, 0)") {
      if (t === e) return;
      if ((t = this._removeQuotes(t)) === e) return;
      if (t.startsWith("rgb")) return t;
      const n = this._convertHEXToRGB(t);
      return n === e ? void 0 : n;
    }
    static opacity(t, e = "1") {
      if (
        t !== e &&
        (t = `${this._roundToNDecimals(this._sanitizeNumber(t), 3)}`) !== e
      )
        return t;
    }
    static strokeWidth(t, e = "1px") {
      if (t === e) return;
      if (t.endsWith("px")) return t;
      t = `${this._sanitizeNumber(t)}`;
      const n = this._suffixWithUnit(t);
      return n !== e ? n : void 0;
    }
    static transform(t, e = "none") {
      if (t === e) return;
      const n = this.getValuesFromMatrix(t);
      return n ? `matrix(${n.join(", ")})` : t;
    }
    static transformOrigin(t, e = "0px 0px") {
      if (t === e) return;
      const n = [
          "^",
          "\\s*",
          "(?<x>[0-9]+)",
          "(px)?",
          "\\s*",
          ",",
          "\\s*",
          "(?<y>[0-9]+)",
          "(px)?",
        ].join(""),
        r = t.match(new RegExp(n, "i"));
      if (!r) return t;
      let i = `${this._sanitizeNumber(r.groups.x)}`;
      i = this._suffixWithUnit(i);
      let s = `${this._sanitizeNumber(r.groups.y)}`;
      s = this._suffixWithUnit(s);
      const o = `${i} ${s}`;
      return o === e ? void 0 : o;
    }
  }
  const e = r(Math.pow(10, -6)),
    n = r(Math.pow(10, -2));
  function r(t, e = 6) {
    return (function (t, e, n) {
      if (Number.isInteger(t)) return t;
      const r = Math.pow(10, e);
      return Math[n]((+t + Number.EPSILON) * r) / r;
    })(t, e, "round");
  }
  function i(t, n, r = e) {
    return Math.abs(t - n) < r;
  }
  r(Math.pow(10, -4));
  const s = Math.PI / 180;
  function o(t) {
    return t * s;
  }
  function u(t) {
    return t / s;
  }
  class l {
    static _VISUAL_PROPERTIES = Object.freeze({
      display: (e) => t.checkAgainstDefault(e),
      fill: (e) => t.paint(e),
      "fill-opacity": (e) => t.opacity(e),
      filter: (e) => t.checkAgainstDefault(e, "none"),
      opacity: (e) => t.opacity(e),
      stroke: (e) => t.paint(e, "none"),
      "stroke-opacity": (e) => t.opacity(e),
      "stroke-width": (e) => t.strokeWidth(e),
      transform: (e) => t.transform(e),
      "transform-origin": (e) => t.transformOrigin(e),
      visibility: (e) => t.checkAgainstDefault(e, "visible"),
    });
    static _keys = Object.keys(this._VISUAL_PROPERTIES);
    static _MINIMUM_PRECISION_ERROR_PERCENTAGE = n;
    static get visualProperties() {
      return this._VISUAL_PROPERTIES;
    }
    static _isWithinPrecisionErrorLimit(t, e) {
      return i(
        ((e - t) / (e || 1)) * 100,
        0,
        this._MINIMUM_PRECISION_ERROR_PERCENTAGE
      );
    }
    static _getTransformValue(e, n, r, i = window) {
      var s, o;
      const u = e.getAttribute(n),
        l =
          i.safari &&
          !i.chrome &&
          "none" ===
            (null === (s = r.getPropertyValue) || void 0 === s
              ? void 0
              : s.call(r, n))
            ? u
            : null === (o = r.getPropertyValue) || void 0 === o
            ? void 0
            : o.call(r, n);
      if (!u || !l) return;
      if (u === l) return u;
      const a = t.getValuesFromMatrix(u),
        c = t.getValuesFromMatrix(l);
      if ((null == a ? void 0 : a.length) === (null == c ? void 0 : c.length)) {
        for (let t = 0, e = a.length; t < e; t++)
          if (a[t] !== c[t] && !this._isWithinPrecisionErrorLimit(c[t], a[t]))
            return;
        return u;
      }
    }
    static _getValue(t, e, n) {
      var r, i, s, o;
      return n && "transform" === e
        ? this._getTransformValue(t, e, n)
        : (null === (r = n.getPropertyValue) || void 0 === r
            ? void 0
            : r.call(n, e)) ??
            (null === (i = t.attrs) ||
            void 0 === i ||
            null === (s = i.style) ||
            void 0 === s
              ? void 0
              : s[e]) ??
            (null === (o = t.attrs) || void 0 === o ? void 0 : o[e]);
    }
    static getProperties(t, e) {
      const n = "undefined" != typeof window && getComputedStyle(t),
        r = {};
      for (let s = 0, o = this._keys.length; s < o; s++) {
        var i;
        const o = this._keys[s];
        if (null != e && null !== (i = e[t.id]) && void 0 !== i && i[o])
          continue;
        const u = this._getValue(t, o, n);
        if (null == u) continue;
        const l = this.visualProperties[o].call(this, u);
        l && (r[o] = l);
      }
      return r;
    }
  }
  class a {
    _hash;
    _baseId;
    _watermarkIds;
    constructor(t) {
      var e, n;
      null !== (e = t.watermarkData) &&
        void 0 !== e &&
        e.length &&
        ((this._hash = t.watermarkData.shift()),
        (this._baseId =
          null === (n = t.rootId) || void 0 === n ? void 0 : n.slice(0, -1)),
        (this._watermarkIds = t.watermarkData.map((t) =>
          this.constructor._buildId(this._baseId, t)
        )));
    }
    get hash() {
      return this._hash;
    }
    get watermarkIds() {
      return this._watermarkIds;
    }
    static _buildId(t, e) {
      return `${t}${e}`;
    }
    static _buildIdSuffixes(t, e) {
      const n = t.slice(0, -1),
        r = [];
      for (let t = 0, s = e.length; t < s; t++) {
        var i;
        r.push(null === (i = e[t]) || void 0 === i ? void 0 : i.replace(n, ""));
      }
      return r;
    }
    static generateIds(t, e, n) {
      return [t, ...this._buildIdSuffixes(e, n)];
    }
  }
  class c {
    constructor(t) {
      (this._player = t), (this._watermarkDataLayer = new a(t));
    }
    get _svg() {
      return this._player.svg;
    }
    get _watermarkIds() {
      return this._watermarkDataLayer.watermarkIds;
    }
    get _animations() {
      return this._player.originalAnimations[0].elements;
    }
    get _hash() {
      return this._watermarkDataLayer.hash;
    }
    _processElement(t, e, n) {
      var r;
      if (e[t]) return;
      const i = this._svg.querySelector("#" + t),
        s =
          null == i || null === (r = i.parentElement) || void 0 === r
            ? void 0
            : r.id;
      if (i && s) {
        if (this._watermarkIds.includes(s))
          return (
            e[s] || this._processElement(s, e, n),
            (e[s].children ??= []),
            (e[t] = l.getProperties(i, this._animations)),
            void e[s].children.push(e[t])
          );
        (e[t] = l.getProperties(i, this._animations)), n.push(e[t]);
      }
    }
    _buildObfuscationJSON() {
      let t = [],
        e = {};
      for (let n = 0, r = this._watermarkIds.length; n < r; n++)
        this._processElement(this._watermarkIds[n], e, t);
      return t;
    }
    async _generateHash(t) {
      var e, n;
      const r = JSON.stringify(t),
        i = new TextEncoder().encode(r),
        s = await (null === (e = window.crypto) ||
        void 0 === e ||
        null === (n = e.subtle) ||
        void 0 === n
          ? void 0
          : n.digest("SHA-256", i));
      return (
        (s &&
          Array.from(new Uint8Array(s))
            .map((t) => t.toString(16).padStart(2, "0"))
            .join("")) ||
        this._hash
      );
    }
    async _calculateHash() {
      const t = this._buildObfuscationJSON();
      return await this._generateHash(t);
    }
    async validateHash() {
      (await this._calculateHash()) !== this._hash &&
        requestAnimationFrame(() => this._player.stop());
    }
  }
  class h {
    static _MIN_CHECK_TIME = 300;
    static _MAX_CHECK_TIME = 500;
    static _MIN_FRAMES = 3;
    _frameCounter = 0;
    _previousTimestamp = 0;
    constructor(t) {
      (this._player = t), (this._hashGenerator = new c(t));
    }
    _shouldBeChecked(t) {
      return (
        !(t - this._previousTimestamp < this.constructor._MIN_CHECK_TIME) &&
        (t - this._previousTimestamp >= this.constructor._MAX_CHECK_TIME ||
          this._frameCounter >= this.constructor._MIN_FRAMES)
      );
    }
    async checkFrame(t) {
      this._player.watermarkData &&
        (this._frameCounter++,
        this._shouldBeChecked(t) &&
          ((this._frameCounter = 0),
          (this._previousTimestamp = t),
          window.requestAnimationFrame(() =>
            this._hashGenerator.validateHash()
          )));
    }
  }
  function f(t) {
    return t;
  }
  function d(t, e, n) {
    const r = 1 - n;
    return 3 * n * r * (t * r + e * n) + n * n * n;
  }
  function g(t = 0, e = 0, n = 1, r = 1) {
    return t < 0 || t > 1 || n < 0 || n > 1
      ? null
      : i(t, e) && i(n, r)
      ? f
      : (s) => {
          if (s <= 0)
            return t > 0 ? (s * e) / t : 0 === e && n > 0 ? (s * r) / n : 0;
          if (s >= 1)
            return n < 1
              ? 1 + ((s - 1) * (r - 1)) / (n - 1)
              : 1 === n && t < 1
              ? 1 + ((s - 1) * (e - 1)) / (t - 1)
              : 1;
          let o,
            u = 0,
            l = 1;
          for (; u < l; ) {
            o = (u + l) / 2;
            const e = d(t, n, o);
            if (i(s, e)) break;
            e < s ? (u = o) : (l = o);
          }
          return d(e, r, o);
        };
  }
  function p() {
    return 1;
  }
  function y(t) {
    return 1 === t ? 1 : 0;
  }
  function m(t = 1, e = 0) {
    if (1 === t) {
      if (0 === e) return y;
      if (1 === e) return p;
    }
    const n = 1 / t;
    return (t) => (t >= 1 ? 1 : (t += e * n) - (t % n));
  }
  Number.isInteger ||
    (Number.isInteger = function (t) {
      return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
    }),
    Number.EPSILON || (Number.EPSILON = 2220446049250313e-31);
  const _ = Math.sin,
    b = Math.cos,
    v = Math.acos,
    w = Math.asin,
    x = Math.tan,
    A = Math.atan2,
    k = Math.sqrt;
  function E(t, e) {
    return {
      a: t[0] * e[0] + t[2] * e[1],
      b: t[1] * e[0] + t[3] * e[1],
      c: t[0] * e[2] + t[2] * e[3],
      d: t[1] * e[2] + t[3] * e[3],
      tx: t[0] * e[4] + t[2] * e[5] + t[4],
      ty: t[1] * e[4] + t[3] * e[5] + t[5],
    };
  }
  function S(t, e, n) {
    return t >= 0.5 ? n : e;
  }
  function I(t, e, n) {
    return 0 === t || e === n ? e : t * (n - e) + e;
  }
  function M(t, e, n) {
    const r = I(t, e, n);
    return r <= 0 ? 0 : r;
  }
  function O(t, e, n) {
    const r = I(t, e, n);
    return r <= 0 ? 0 : r >= 1 ? 1 : r;
  }
  function N(t, e, n) {
    return 0 === t ? e : 1 === t ? n : { x: I(t, e.x, n.x), y: I(t, e.y, n.y) };
  }
  function P(t, e, n) {
    return 0 === t ? e : 1 === t ? n : { x: M(t, e.x, n.x), y: M(t, e.y, n.y) };
  }
  function T(t, e, n) {
    const r = (function (t, e, n) {
      return Math.round(I(t, e, n));
    })(t, e, n);
    return r <= 0 ? 0 : r >= 255 ? 255 : r;
  }
  function R(t, e, n) {
    return 0 === t
      ? e
      : 1 === t
      ? n
      : {
          r: T(t, e.r, n.r),
          g: T(t, e.g, n.g),
          b: T(t, e.b, n.b),
          a: I(t, null == e.a ? 1 : e.a, null == n.a ? 1 : n.a),
        };
  }
  function B(t, e, n) {
    let r = e.length;
    if (r !== n.length) return S(t, e, n);
    let i = new Array(r);
    for (let s = 0; s < r; s++) i[s] = I(t, e[s], n[s]);
    return i;
  }
  function j(t, e) {
    const n = [];
    for (let r = 0; r < t; r++) n.push(e);
    return n;
  }
  function C(t, e) {
    if (--e <= 0) return t;
    const n = (t = Object.assign([], t)).length;
    do {
      for (let e = 0; e < n; e++) t.push(t[e]);
    } while (--e > 0);
    return t;
  }
  class F {
    constructor(t) {
      (this.list = t), (this.length = t.length);
    }
    setAttribute(t, e) {
      const n = this.list;
      for (let r = 0; r < this.length; r++) n[r].setAttribute(t, e);
    }
    removeAttribute(t) {
      const e = this.list;
      for (let n = 0; n < this.length; n++) e[n].removeAttribute(t);
    }
    style(t, e) {
      const n = this.list;
      for (let r = 0; r < this.length; r++) n[r].style[t] = e;
    }
  }
  const V = /-./g,
    D = (t, e) => e.toUpperCase();
  let L;
  function q(t) {
    return "function" == typeof t ? t : S;
  }
  function z(t) {
    return t
      ? "function" == typeof t
        ? t
        : Array.isArray(t)
        ? (function (t, e = f) {
            if (!Array.isArray(t)) return e;
            switch (t.length) {
              case 1:
                return m(t[0]) || e;
              case 2:
                return m(t[0], t[1]) || e;
              case 4:
                return g(t[0], t[1], t[2], t[3]) || e;
            }
            return e;
          })(t, null)
        : (function (t, e, n = f) {
            switch (t) {
              case "linear":
                return f;
              case "steps":
                return m(e.steps || 1, e.jump || 0) || n;
              case "bezier":
              case "cubic-bezier":
                return g(e.x1 || 0, e.y1 || 0, e.x2 || 0, e.y2 || 0) || n;
            }
            return n;
          })(t.type, t.value, null)
      : null;
  }
  function $(t, e, n, r = !1) {
    const i = e.length - 1;
    if (t <= e[0].t) return r ? [0, 0, e[0].v] : e[0].v;
    if (t >= e[i].t) return r ? [i, 1, e[i].v] : e[i].v;
    let s,
      o = e[0],
      u = null;
    for (s = 1; s <= i; s++) {
      if (!(t > e[s].t)) {
        u = e[s];
        break;
      }
      o = e[s];
    }
    return null == u
      ? r
        ? [i, 1, e[i].v]
        : e[i].v
      : o.t === u.t
      ? r
        ? [s, 1, u.v]
        : u.v
      : ((t = (t - o.t) / (u.t - o.t)),
        o.e && (t = o.e(t)),
        r ? [s, t, n(t, o.v, u.v)] : n(t, o.v, u.v));
  }
  function G(t, e, n = null) {
    return t && t.length
      ? "function" != typeof e
        ? null
        : ("function" != typeof n && (n = null),
          (r) => {
            let i = $(r, t, e);
            return null != i && n && (i = n(i)), i;
          })
      : null;
  }
  function H(t, e) {
    return t.t - e.t;
  }
  function W(t, e, n, r, i) {
    const s = "@" === n[0],
      o = "#" === n[0];
    let u = L[n],
      l = S;
    var a;
    switch (
      (s ? ((a = n.substr(1)), (n = a.replace(V, D))) : o && (n = n.substr(1)),
      typeof u)
    ) {
      case "function":
        if (((l = u(r, i, $, z, n, s, e, t)), o)) return l;
        break;
      case "string":
        l = G(r, q(u));
        break;
      case "object":
        if (((l = G(r, q(u.i), u.f)), l && "function" == typeof u.u))
          return u.u(e, l, n, s, t);
    }
    return l
      ? (function (t, e, n, r = !1) {
          if (r)
            return t instanceof F
              ? (r) => t.style(e, n(r))
              : (r) => (t.style[e] = n(r));
          if (Array.isArray(e)) {
            const r = e.length;
            return (i) => {
              const s = n(i);
              if (null == s)
                for (let n = 0; n < r; n++) t[n].removeAttribute(e);
              else for (let n = 0; n < r; n++) t[n].setAttribute(e, s);
            };
          }
          return (r) => {
            const i = n(r);
            null == i ? t.removeAttribute(e) : t.setAttribute(e, i);
          };
        })(e, n, l, s)
      : null;
  }
  function U(t, e, n, r) {
    if (!r || "object" != typeof r) return null;
    let i = null,
      s = null;
    return (
      Array.isArray(r)
        ? (s = (function (t) {
            if (!t || !t.length) return null;
            for (let e = 0; e < t.length; e++) t[e].e && (t[e].e = z(t[e].e));
            return t.sort(H);
          })(r))
        : ((s = r.keys), (i = r.data || null)),
      s ? W(t, e, n, s, i) : null
    );
  }
  function Y(t, e, n) {
    if (!n) return null;
    const r = [];
    for (const i in n)
      if (n.hasOwnProperty(i)) {
        const s = U(t, e, i, n[i]);
        s && r.push(s);
      }
    return r.length ? r : null;
  }
  function X(t, e) {
    if (!e.settings.duration || e.settings.duration < 0) return null;
    const n = (function (t, e) {
      if (!e) return null;
      let n = [];
      if (Array.isArray(e)) {
        const r = e.length;
        for (let i = 0; i < r; i++) {
          const r = e[i];
          if (2 !== r.length) continue;
          let s = null;
          if ("string" == typeof r[0]) s = t.getElementById(r[0]);
          else if (Array.isArray(r[0])) {
            s = [];
            for (let e = 0; e < r[0].length; e++)
              if ("string" == typeof r[0][e]) {
                const n = t.getElementById(r[0][e]);
                n && s.push(n);
              }
            s = s.length ? (1 === s.length ? s[0] : new F(s)) : null;
          }
          if (!s) continue;
          const o = Y(t, s, r[1]);
          o && (n = n.concat(o));
        }
      } else
        for (const r in e) {
          if (!e.hasOwnProperty(r)) continue;
          const i = t.getElementById(r);
          if (!i) continue;
          const s = Y(t, i, e[r]);
          s && (n = n.concat(s));
        }
      return n.length ? n : null;
    })(t, e.elements);
    return n
      ? (function (t, e) {
          const n = e.duration,
            r = t.length;
          let i = null;
          return (s, o) => {
            const u = e.iterations || 1 / 0,
              l = (e.alternate && u % 2 == 0) ^ (e.direction > 0) ? n : 0;
            let a = s % n,
              c = 1 + (s - a) / n;
            (o *= e.direction), e.alternate && c % 2 == 0 && (o = -o);
            let h = !1;
            if (c > u)
              (a = l), (h = !0), -1 === e.fill && (a = e.direction > 0 ? 0 : n);
            else if ((o < 0 && (a = n - a), a === i)) return !1;
            i = a;
            for (let e = 0; e < r; e++) t[e](a);
            return h;
          };
        })(n, e.settings)
      : null;
  }
  function K(t, e = document, n = 0) {
    const r = (function (t, e) {
      const n = e.querySelectorAll("svg");
      for (let e = 0; e < n.length; e++)
        if (n[e].id === t.root && !n[e].svgatorAnimation)
          return (n[e].svgatorAnimation = !0), n[e];
      return null;
    })(t, e);
    if (r) return r;
    if (n >= 20) return null;
    const i = (function (t) {
      const e = (t) => t.shadowRoot;
      return document
        ? Array.from(
            t.querySelectorAll(
              ":not(" +
                [
                  "a",
                  "area",
                  "audio",
                  "br",
                  "canvas",
                  "circle",
                  "datalist",
                  "embed",
                  "g",
                  "head",
                  "hr",
                  "iframe",
                  "img",
                  "input",
                  "link",
                  "object",
                  "path",
                  "polygon",
                  "rect",
                  "script",
                  "source",
                  "style",
                  "svg",
                  "title",
                  "track",
                  "video",
                ].join() +
                ")"
            )
          )
            .filter(e)
            .map(e)
        : [];
    })(e);
    for (let e = 0; e < i.length; e++) {
      const r = K(t, i[e], n + 1);
      if (r) return r;
    }
    return null;
  }
  function Q(
    t,
    e = null,
    n = Number,
    r = "undefined" != typeof BigInt && BigInt
  ) {
    const i = "0x" + (t.replace(/[^0-9a-fA-F]+/g, "") || 27);
    return e && r && n.isSafeInteger && !n.isSafeInteger(+i)
      ? (n(r(i)) % e) + e
      : +i;
  }
  function J(t, e, n) {
    return !t || !n || e > t.length
      ? t
      : t.substring(0, e) + J(t.substring(e + 1), n, n);
  }
  function Z(t, e = 27) {
    return !t || t % e ? t % e : [0, 1].includes(e) ? e : Z(t / e, e);
  }
  function tt(t, e, n) {
    if (!t || !t.length) return;
    const r = Q(n),
      i = Z(r) + 5;
    let s = J(t, Z(r, 5), i);
    return (
      (s = s.replace(/\x7c$/g, "==").replace(/\x2f$/g, "=")),
      (s = atob(s)),
      (s = s.replace(/[\x41-\x5A]/g, "")),
      (s = (function (t, e, n) {
        const r = +("0x" + t.substring(0, 4));
        t = t.substring(4);
        const i = (Q(e, r) % r) + (n % 27),
          s = [];
        for (let e = 0; e < t.length; e += 2) {
          if ("|" === t[e]) {
            const n = +("0x" + t.substring(e + 1, e + 1 + 4)) - i;
            (e += 3), s.push(n);
            continue;
          }
          const n = +("0x" + t[e] + t[e + 1]) - i;
          s.push(n);
        }
        return String.fromCharCode(...s);
      })(s, e, r)),
      (s = JSON.parse(s)),
      s
    );
  }
  const et = [
    { key: "alternate", def: !1 },
    { key: "fill", def: 1 },
    { key: "iterations", def: 0 },
    { key: "direction", def: 1 },
    { key: "speed", def: 1 },
    { key: "fps", def: 100 },
  ];
  function nt(t) {
    return r(t) + "";
  }
  function rt(t, e = " ") {
    return t && t.length ? t.map(nt).join(e) : "";
  }
  function it(t) {
    return nt(t.x) + "," + nt(t.y);
  }
  function st(t) {
    return t
      ? null == t.a || t.a >= 1
        ? (function (t) {
            if (!t) return "transparent";
            const e = (t) => parseInt(t).toString(16).padStart(2, "0");
            return (function (t) {
              const e = [];
              let n = "#" === t[0] ? e.push("#") : 0;
              for (; n < t.length; n += 2) {
                if (t[n] !== t[n + 1]) return t;
                e.push(t[n]);
              }
              return e.join("");
            })(
              "#" +
                e(t.r) +
                e(t.g) +
                e(t.b) +
                (null == t.a || t.a >= 1 ? "" : e(255 * t.a))
            );
          })(t)
        : "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")"
      : "transparent";
  }
  function ot(t) {
    return t ? "url(#" + t + ")" : "none";
  }
  !(function () {
    for (
      var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0;
      n < e.length && !window.requestAnimationFrame;
      ++n
    )
      (window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"]),
        (window.cancelAnimationFrame =
          window[e[n] + "CancelAnimationFrame"] ||
          window[e[n] + "CancelRequestAnimationFrame"]);
    window.requestAnimationFrame ||
      ((window.requestAnimationFrame = function (e) {
        var n = Date.now(),
          r = Math.max(0, 16 - (n - t)),
          i = window.setTimeout(function () {
            e(n + r);
          }, r);
        return (t = n + r), i;
      }),
      (window.cancelAnimationFrame = window.clearTimeout));
  })();
  var ut = {
      f: null,
      i: P,
      u: (t, e) => (n) => {
        const r = e(n);
        t.setAttribute("rx", nt(r.x)), t.setAttribute("ry", nt(r.y));
      },
    },
    lt = {
      f: null,
      i: function (t, e, n) {
        return 0 === t
          ? e
          : 1 === t
          ? n
          : { width: M(t, e.width, n.width), height: M(t, e.height, n.height) };
      },
      u: (t, e) => (n) => {
        const r = e(n);
        t.setAttribute("width", nt(r.width)),
          t.setAttribute("height", nt(r.height));
      },
    };
  Object.freeze({ M: 2, L: 2, Z: 0, H: 1, V: 1, C: 6, Q: 4, T: 2, S: 4, A: 7 });
  let at = {},
    ct = null;
  function ht(t) {
    let e = (function () {
      if (ct) return ct;
      if ("object" != typeof document || !document.createElementNS) return {};
      let t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      return t && t.style
        ? ((t.style.position = "absolute"),
          (t.style.opacity = "0.01"),
          (t.style.zIndex = "-9999"),
          (t.style.left = "-9999px"),
          (t.style.width = "1px"),
          (t.style.height = "1px"),
          (ct = { svg: t }),
          ct)
        : {};
    })().svg;
    if (!e)
      return function (t) {
        return null;
      };
    let n = document.createElementNS(e.namespaceURI, "path");
    n.setAttributeNS(null, "d", t),
      n.setAttributeNS(null, "fill", "none"),
      n.setAttributeNS(null, "stroke", "none"),
      e.appendChild(n);
    let r = n.getTotalLength();
    return function (t) {
      let e = n.getPointAtLength(r * t);
      return { x: e.x, y: e.y };
    };
  }
  function ft(t, e, n, r, i = 1) {
    let s = (function (t) {
      return at[t] ? at[t] : (at[t] = ht(t));
    })(
      (function (t, e, n, r) {
        if (!t || !r) return !1;
        let i = ["M", t.x, t.y];
        if (
          (e &&
            n &&
            (i.push("C"), i.push(e.x), i.push(e.y), i.push(n.x), i.push(n.y)),
          e ? !n : n)
        ) {
          let t = e || n;
          i.push("Q"), i.push(t.x), i.push(t.y);
        }
        return e || n || i.push("L"), i.push(r.x), i.push(r.y), i.join(" ");
      })(t, e, n, r)
    );
    try {
      return s(i);
    } catch (t) {
      return null;
    }
  }
  function dt(t, e, n) {
    return t + (e - t) * n;
  }
  function gt(t, e, n, r = !1) {
    const i = { x: dt(t.x, e.x, n), y: dt(t.y, e.y, n) };
    return (
      r &&
        (i.a = (function (t, e) {
          return Math.atan2(e.y - t.y, e.x - t.x);
        })(t, e)),
      i
    );
  }
  function pt(t, e, n, r) {
    const i = 1 - r;
    return i * i * t + 2 * i * r * e + r * r * n;
  }
  function yt(t, e, n, r) {
    return 2 * (1 - r) * (e - t) + 2 * r * (n - e);
  }
  function mt(t, e, n, r, i = !1) {
    let s = ft(t, e, null, n, r);
    return (
      s || (s = { x: pt(t.x, e.x, n.x, r), y: pt(t.y, e.y, n.y, r) }),
      i &&
        (s.a = (function (t, e, n, r) {
          return Math.atan2(yt(t.y, e.y, n.y, r), yt(t.x, e.x, n.x, r));
        })(t, e, n, r)),
      s
    );
  }
  function _t(t, e, n, r, i) {
    const s = i * i;
    return (
      i * s * (r - t + 3 * (e - n)) +
      3 * s * (t + n - 2 * e) +
      3 * i * (e - t) +
      t
    );
  }
  function bt(t, e, n, r, i) {
    const s = 1 - i;
    return 3 * (s * s * (e - t) + 2 * s * i * (n - e) + i * i * (r - n));
  }
  function vt(t, e, n, r, i, s = !1) {
    let o = ft(t, e, n, r, i);
    return (
      o || (o = { x: _t(t.x, e.x, n.x, r.x, i), y: _t(t.y, e.y, n.y, r.y, i) }),
      s &&
        (o.a = (function (t, e, n, r, i) {
          return Math.atan2(
            bt(t.y, e.y, n.y, r.y, i),
            bt(t.x, e.x, n.x, r.x, i)
          );
        })(t, e, n, r, i)),
      o
    );
  }
  function wt(t, e, n, r = !1) {
    if (At(e)) {
      if (kt(n)) return mt(e, n.start, n, t, r);
    } else if (At(n)) {
      if (Et(e)) return mt(e, e.end, n, t, r);
    } else {
      if (Et(e))
        return kt(n) ? vt(e, e.end, n.start, n, t, r) : mt(e, e.end, n, t, r);
      if (kt(n)) return mt(e, n.start, n, t, r);
    }
    return gt(e, n, t, r);
  }
  function xt(t, e, n) {
    const r = wt(t, e, n, !0);
    return (
      (r.a = u(
        (function (t, e = !1) {
          return e ? t + Math.PI : t;
        })(r.a)
      )),
      r
    );
  }
  function At(t) {
    return !t.type || "corner" === t.type;
  }
  function kt(t) {
    return null != t.start && !At(t);
  }
  function Et(t) {
    return null != t.end && !At(t);
  }
  const St = new (class {
    constructor(t = 1, e = 0, n = 0, r = 1, i = 0, s = 0) {
      (this.m = [t, e, n, r, i, s]),
        (this.i = null),
        (this.w = null),
        (this.s = null);
    }
    get determinant() {
      const t = this.m;
      return t[0] * t[3] - t[1] * t[2];
    }
    get isIdentity() {
      if (null === this.i) {
        const t = this.m;
        this.i =
          1 === t[0] &&
          0 === t[1] &&
          0 === t[2] &&
          1 === t[3] &&
          0 === t[4] &&
          0 === t[5];
      }
      return this.i;
    }
    point(t, e) {
      const n = this.m;
      return { x: n[0] * t + n[2] * e + n[4], y: n[1] * t + n[3] * e + n[5] };
    }
    translateSelf(t = 0, e = 0) {
      if (!t && !e) return this;
      const n = this.m;
      return (
        (n[4] += n[0] * t + n[2] * e),
        (n[5] += n[1] * t + n[3] * e),
        (this.w = this.s = this.i = null),
        this
      );
    }
    rotateSelf(t = 0) {
      if ((t %= 360)) {
        t = o(t);
        const e = _(t),
          n = b(t),
          r = this.m,
          i = r[0],
          s = r[1];
        (r[0] = i * n + r[2] * e),
          (r[1] = s * n + r[3] * e),
          (r[2] = r[2] * n - i * e),
          (r[3] = r[3] * n - s * e),
          (this.w = this.s = this.i = null);
      }
      return this;
    }
    scaleSelf(t = 1, e = 1) {
      if (1 !== t || 1 !== e) {
        const n = this.m;
        (n[0] *= t),
          (n[1] *= t),
          (n[2] *= e),
          (n[3] *= e),
          (this.w = this.s = this.i = null);
      }
      return this;
    }
    skewSelf(t, e) {
      if (((e %= 360), (t %= 360) || e)) {
        const n = this.m,
          r = n[0],
          i = n[1],
          s = n[2],
          u = n[3];
        t && ((t = x(o(t))), (n[2] += r * t), (n[3] += i * t)),
          e && ((e = x(o(e))), (n[0] += s * e), (n[1] += u * e)),
          (this.w = this.s = this.i = null);
      }
      return this;
    }
    resetSelf(t = 1, e = 0, n = 0, r = 1, i = 0, s = 0) {
      const o = this.m;
      return (
        (o[0] = t),
        (o[1] = e),
        (o[2] = n),
        (o[3] = r),
        (o[4] = i),
        (o[5] = s),
        (this.w = this.s = this.i = null),
        this
      );
    }
    recomposeSelf(t = null, e = null, n = null, r = null, i = null) {
      return (
        this.isIdentity || this.resetSelf(),
        t && (t.x || t.y) && this.translateSelf(t.x, t.y),
        e && this.rotateSelf(e),
        n && (n.x && this.skewSelf(n.x, 0), n.y && this.skewSelf(0, n.y)),
        !r || (1 === r.x && 1 === r.y) || this.scaleSelf(r.x, r.y),
        i && (i.x || i.y) && this.translateSelf(i.x, i.y),
        this
      );
    }
    decompose(t = 0, e = 0) {
      const n = this.m,
        i = n[0] * n[0] + n[1] * n[1],
        s = [
          [n[0], n[1]],
          [n[2], n[3]],
        ];
      let o = k(i);
      if (0 === o)
        return {
          origin: { x: r(n[4]), y: r(n[5]) },
          translate: { x: r(t), y: r(e) },
          scale: { x: 0, y: 0 },
          skew: { x: 0, y: 0 },
          rotate: 0,
        };
      (s[0][0] /= o), (s[0][1] /= o);
      const l = n[0] * n[3] - n[1] * n[2] < 0;
      l && (o = -o);
      let a = s[0][0] * s[1][0] + s[0][1] * s[1][1];
      (s[1][0] -= s[0][0] * a), (s[1][1] -= s[0][1] * a);
      let c,
        h = k(s[1][0] * s[1][0] + s[1][1] * s[1][1]);
      return 0 === h
        ? {
            origin: { x: r(n[4]), y: r(n[5]) },
            translate: { x: r(t), y: r(e) },
            scale: { x: r(o), y: 0 },
            skew: { x: 0, y: 0 },
            rotate: 0,
          }
        : ((s[1][0] /= h),
          (s[1][1] /= h),
          (a /= h),
          s[1][1] < 0
            ? ((c = u(v(s[1][1]))), s[0][1] < 0 && (c = 360 - c))
            : (c = u(w(s[0][1]))),
          l && (c = -c),
          (a = u(A(a, k(s[0][0] * s[0][0] + s[0][1] * s[0][1])))),
          l && (a = -a),
          {
            origin: { x: r(n[4]), y: r(n[5]) },
            translate: { x: r(t), y: r(e) },
            scale: { x: r(o), y: r(h) },
            skew: { x: r(a), y: 0 },
            rotate: r(c),
          });
    }
    multiply(t) {
      return this.clone().multiplySelf(t);
    }
    preMultiply(t) {
      return t.multiply(this);
    }
    multiplySelf(t) {
      const { a: e, b: n, c: r, d: i, tx: s, ty: o } = E(this.m, t.m);
      return this.resetSelf(e, n, r, i, s, o), this;
    }
    preMultiplySelf(t) {
      const { a: e, b: n, c: r, d: i, tx: s, ty: o } = E(t.m, this.m);
      return this.resetSelf(e, n, r, i, s, o), this;
    }
    clone() {
      const t = this.m;
      return new this.constructor(t[0], t[1], t[2], t[3], t[4], t[5]);
    }
    static create(t) {
      return t
        ? Array.isArray(t)
          ? new this(...t)
          : t instanceof this
          ? t.clone()
          : new this().recomposeSelf(
              t.origin,
              t.rotate,
              t.skew,
              t.scale,
              t.translate
            )
        : new this();
    }
    toString(t = " ", e = !1) {
      if (null === this.s) {
        let n = this.m.map((t) => r(t));
        e || 1 !== n[0] || 0 !== n[1] || 0 !== n[2] || 1 !== n[3]
          ? (this.s = "matrix(" + n.join(t) + ")")
          : (this.s = "translate(" + n[4] + t + n[5] + ")");
      }
      return this.s;
    }
  })();
  var It = {
      f: function (t) {
        return t ? t.join(" ") : "";
      },
      i: function (t, e, n) {
        if (0 === t) return e;
        if (1 === t) return n;
        let r = e.length;
        if (r !== n.length) return S(t, e, n);
        let i,
          s = new Array(r);
        for (let o = 0; o < r; o++) {
          if (((i = typeof e[o]), i !== typeof n[o])) return S(t, e, n);
          if ("number" === i) s[o] = I(t, e[o], n[o]);
          else {
            if (e[o] !== n[o]) return S(t, e, n);
            s[o] = e[o];
          }
        }
        return s;
      },
    },
    Mt = {
      f: null,
      i: B,
      u: (t, e) => (n) => {
        const r = e(n);
        t.setAttribute("x1", nt(r[0])),
          t.setAttribute("y1", nt(r[1])),
          t.setAttribute("x2", nt(r[2])),
          t.setAttribute("y2", nt(r[3]));
      },
    },
    Ot = { f: nt, i: I },
    Nt = { f: nt, i: O },
    Pt = {
      f: function (t, e = " ") {
        return t && t.length > 0 && (t = t.map((t) => r(t, 4))), rt(t, e);
      },
      i: function (t, e, n) {
        let i = e.length,
          s = n.length;
        if (i !== s)
          if (0 === i) (i = s), (e = j(i, 0));
          else if (0 === s) (s = i), (n = j(i, 0));
          else {
            const t = (function (t, e) {
              const n =
                (t * e) /
                (function (t, e) {
                  let n;
                  for (; e; ) (n = e), (e = t % e), (t = n);
                  return t || 1;
                })(t, e);
              return n < 0 ? -n : n;
            })(i, s);
            (e = C(e, Math.floor(t / i))),
              (n = C(n, Math.floor(t / s))),
              (i = s = t);
          }
        let o = [];
        for (let s = 0; s < i; s++) o.push(r(M(t, e[s], n[s])));
        return o;
      },
    };
  function Tt(t, e, n) {
    return t.map((t) =>
      (function (t, e, n) {
        let i = t.v;
        if (!i || "g" !== i.t || i.s || !i.v || !i.r) return t;
        const s = n.getElementById(i.r),
          o = (s && s.querySelectorAll("stop")) || [];
        return (
          (i.s = i.v.map((t, e) => {
            let n = o[e] && o[e].getAttribute("offset");
            return (n = r(parseInt(n) / 100)), { c: t, o: n };
          })),
          delete i.v,
          t
        );
      })(t, 0, n)
    );
  }
  const Rt = {
    gt: "gradientTransform",
    c: { x: "cx", y: "cy" },
    rd: "r",
    f: { x: "x1", y: "y1" },
    to: { x: "x2", y: "y2" },
  };
  function Bt(t, e, n, r, i, s, o, u) {
    return (
      Tt(t, 0, u),
      (e = (function (t, e, n) {
        let r, i, s;
        const o = t.length - 1,
          u = {};
        for (let l = 0; l <= o; l++)
          (r = t[l]),
            r.e && (r.e = e(r.e)),
            r.v &&
              ((i = r.v),
              "g" === i.t &&
                i.r &&
                ((s = n.getElementById(i.r)),
                s && (u[i.r] = { e: s, s: s.querySelectorAll("stop") })));
        return u;
      })(t, r, u)),
      (r) => {
        const i = n(r, t, jt);
        if (!i) return "none";
        if ("c" === i.t) return st(i.v);
        if ("g" === i.t) {
          if (!e[i.r]) return ot(i.r);
          const t = e[i.r];
          return (
            (function (t, e) {
              let n = t.s;
              for (let r = n.length; r < e.length; r++) {
                const e = n[n.length - 1].cloneNode();
                (e.id = Vt(e.id)),
                  t.e.appendChild(e),
                  (n = t.s = t.e.querySelectorAll("stop"));
              }
              for (let t = 0, r = n.length, i = e.length - 1; t < r; t++)
                n[t].setAttribute("stop-color", st(e[Math.min(t, i)].c)),
                  n[t].setAttribute("offset", e[Math.min(t, i)].o);
            })(t, i.s),
            Object.keys(Rt).forEach((e) => {
              if (void 0 === i[e]) return;
              if ("object" == typeof Rt[e])
                return void Object.keys(Rt[e]).forEach((n) => {
                  if (void 0 === i[e][n]) return;
                  const r = i[e][n],
                    s = Rt[e][n];
                  t.e.setAttribute(s, r);
                });
              const n =
                "gt" === e
                  ? ((r = i[e]),
                    Array.isArray(r) ? "matrix(" + r.join(" ") + ")" : "")
                  : i[e];
              var r;
              const s = Rt[e];
              t.e.setAttribute(s, n);
            }),
            ot(i.r)
          );
        }
        return "none";
      }
    );
  }
  function jt(t, e, n) {
    if (0 === t) return e;
    if (1 === t) return n;
    if (e && n) {
      const r = e.t;
      if (r === n.t)
        switch (e.t) {
          case "c":
            return { t: r, v: R(t, e.v, n.v) };
          case "g":
            if (e.r === n.r) {
              const i = { t: r, s: Ct(t, e.s, n.s), r: e.r };
              return (
                e.gt && n.gt && (i.gt = B(t, e.gt, n.gt)),
                e.c
                  ? ((i.c = N(t, e.c, n.c)), (i.rd = M(t, e.rd, n.rd)))
                  : e.f && ((i.f = N(t, e.f, n.f)), (i.to = N(t, e.to, n.to))),
                i
              );
            }
        }
      if (("c" === e.t && "g" === n.t) || ("c" === n.t && "g" === e.t)) {
        const r = "c" === e.t ? e : n,
          i = "g" === e.t ? { ...e } : { ...n },
          s = i.s.map((t) => ({ c: r.v, o: t.o }));
        return (i.s = "c" === e.t ? Ct(t, s, i.s) : Ct(t, i.s, s)), i;
      }
    }
    return S(t, e, n);
  }
  function Ct(t, e, n) {
    if (e.length === n.length) return e.map((e, r) => Ft(t, e, n[r]));
    const r = Math.max(e.length, n.length),
      i = [];
    for (let s = 0; s < r; s++) {
      const r = Ft(
        t,
        e[Math.min(s, e.length - 1)],
        n[Math.min(s, n.length - 1)]
      );
      i.push(r);
    }
    return i;
  }
  function Ft(t, e, n) {
    return { o: O(t, e.o, n.o || 0), c: R(t, e.c, n.c || {}) };
  }
  function Vt(t) {
    return t.replace(/-fill-([0-9]+)$/, (t, e) => "-fill-" + (+e + 1));
  }
  function Dt(t, e, n) {
    return 0 === t
      ? e
      : 1 === t
      ? n
      : {
          blur: P(t, e.blur, n.blur),
          offset: N(t, e.offset, n.offset),
          color: R(t, e.color, n.color),
        };
  }
  const Lt = {
    blur: P,
    brightness: M,
    contrast: M,
    "drop-shadow": Dt,
    "inner-shadow": Dt,
    grayscale: M,
    "hue-rotate": I,
    invert: M,
    opacity: M,
    saturate: M,
    sepia: M,
  };
  function qt(t, e, n) {
    if (0 === t) return e;
    if (1 === t) return n;
    const r = e.length;
    if (r !== n.length) return S(t, e, n);
    const i = [];
    let s;
    for (let o = 0; o < r; o++) {
      if (e[o].type !== n[o].type) return e;
      if (((s = Lt[e[o].type]), !s)) return S(t, e, n);
      i.push({ type: e.type, value: s(t, e[o].value, n[o].value) });
    }
    return i;
  }
  const zt = {
    blur: (t) =>
      t
        ? (e) => {
            t.setAttribute("stdDeviation", it(e));
          }
        : null,
    brightness: (t, e, n) =>
      (t = Gt(n, e))
        ? (e) => {
            (e = nt(e)), t.map((t) => t.setAttribute("slope", e));
          }
        : null,
    contrast: (t, e, n) =>
      (t = Gt(n, e))
        ? (e) => {
            const n = nt((1 - e) / 2);
            (e = nt(e)),
              t.map((t) => {
                t.setAttribute("slope", e), t.setAttribute("intercept", n);
              });
          }
        : null,
    "drop-shadow"(t, e, n) {
      const r = n.getElementById(e + "-blur");
      if (!r) return null;
      const i = n.getElementById(e + "-offset");
      if (!i) return null;
      const s = n.getElementById(e + "-flood");
      return s
        ? (t) => {
            r.setAttribute("stdDeviation", it(t.blur)),
              i.setAttribute("dx", nt(t.offset.x)),
              i.setAttribute("dy", nt(t.offset.y)),
              s.setAttribute("flood-color", st(t.color));
          }
        : null;
    },
    "inner-shadow"(t, e, n) {
      const r = n.getElementById(e + "-blur");
      if (!r) return null;
      const i = n.getElementById(e + "-offset");
      if (!i) return null;
      const s = n.getElementById(e + "-color-matrix");
      return s
        ? (t) => {
            r.setAttribute("stdDeviation", it(t.blur)),
              i.setAttribute("dx", nt(t.offset.x)),
              i.setAttribute("dy", nt(t.offset.y));
            const e = [
              0,
              0,
              0,
              0,
              t.color.r / 255,
              0,
              0,
              0,
              0,
              t.color.g / 255,
              0,
              0,
              0,
              0,
              t.color.b / 255,
              0,
              0,
              0,
              t.color.a,
              0,
            ];
            s.setAttribute("values", rt(e));
          }
        : null;
    },
    grayscale: (t) =>
      t
        ? (e) => {
            t.setAttribute(
              "values",
              rt(
                (function (t) {
                  return [
                    0.2126 + 0.7874 * (t = 1 - t),
                    0.7152 - 0.7152 * t,
                    0.0722 - 0.0722 * t,
                    0,
                    0,
                    0.2126 - 0.2126 * t,
                    0.7152 + 0.2848 * t,
                    0.0722 - 0.0722 * t,
                    0,
                    0,
                    0.2126 - 0.2126 * t,
                    0.7152 - 0.7152 * t,
                    0.0722 + 0.9278 * t,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                  ];
                })(e)
              )
            );
          }
        : null,
    "hue-rotate": (t) => (t ? (e) => t.setAttribute("values", nt(e)) : null),
    invert: (t, e, n) =>
      (t = Gt(n, e))
        ? (e) => {
            (e = nt(e) + " " + nt(1 - e)),
              t.map((t) => t.setAttribute("tableValues", e));
          }
        : null,
    opacity: (t, e, n) =>
      (t = n.getElementById(e + "-A"))
        ? (e) => t.setAttribute("tableValues", "0 " + nt(e))
        : null,
    saturate: (t) => (t ? (e) => t.setAttribute("values", nt(e)) : null),
    sepia: (t) =>
      t
        ? (e) =>
            t.setAttribute(
              "values",
              rt(
                (function (t) {
                  return [
                    0.393 + 0.607 * (t = 1 - t),
                    0.769 - 0.769 * t,
                    0.189 - 0.189 * t,
                    0,
                    0,
                    0.349 - 0.349 * t,
                    0.686 + 0.314 * t,
                    0.168 - 0.168 * t,
                    0,
                    0,
                    0.272 - 0.272 * t,
                    0.534 - 0.534 * t,
                    0.131 + 0.869 * t,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                  ];
                })(e)
              )
            )
        : null,
  };
  const $t = ["R", "G", "B"];
  function Gt(t, e) {
    const n = $t.map((n) => t.getElementById(e + "-" + n) || null);
    return -1 !== n.indexOf(null) ? null : n;
  }
  var Ht = {
    fill: Bt,
    "fill-opacity": Nt,
    stroke: Bt,
    "stroke-opacity": Nt,
    "stroke-width": Ot,
    "stroke-dashoffset": { f: nt, i: I },
    "stroke-dasharray": Pt,
    opacity: Nt,
    transform: function (t, e, n, r) {
      if (
        !(t = (function (t, e) {
          if (!t || "object" != typeof t) return null;
          let n = !1;
          for (const r in t)
            t.hasOwnProperty(r) &&
              (t[r] && t[r].length
                ? (t[r].forEach((t) => {
                    t.e && (t.e = e(t.e));
                  }),
                  (n = !0))
                : delete t[r]);
          return n ? t : null;
        })(t, r))
      )
        return null;
      const i = (r, i, s, o = null) =>
        t[r] ? n(i, t[r], s) : e && e[r] ? e[r] : o;
      return e && e.a && t.o
        ? (e) => {
            const r = n(e, t.o, xt);
            return St.recomposeSelf(
              r,
              i("r", e, I, 0) + r.a,
              i("k", e, N),
              i("s", e, N),
              i("t", e, N)
            ).toString();
          }
        : (t) =>
            St.recomposeSelf(
              i("o", t, wt, null),
              i("r", t, I, 0),
              i("k", t, N),
              i("s", t, N),
              i("t", t, N)
            ).toString();
    },
    "#filter": function (t, e, n, r, i, s, o, u) {
      if (!e.items || !t || !t.length) return null;
      const l = (function (t, e) {
        const n = (t = t.map((t) =>
          t && zt[t[0]]
            ? (e.getElementById(t[1]),
              zt[t[0]](e.getElementById(t[1]), t[1], e))
            : null
        )).length;
        return (e) => {
          for (let r = 0; r < n; r++) t[r] && t[r](e[r].value);
        };
      })(e.items, u);
      return l
        ? ((t = (function (t, e) {
            return t.map((t) => ((t.e = e(t.e)), t));
          })(t, r)),
          (e) => {
            l(n(e, t, qt));
          })
        : null;
    },
    "#line": Mt,
    points: { f: rt, i: B },
    d: It,
    r: Ot,
    "#size": lt,
    "#radius": ut,
    _(t, e) {
      if (Array.isArray(t)) for (let n = 0; n < t.length; n++) this[t[n]] = e;
      else this[t] = e;
    },
  };
  const Wt = {
      currentTime: "offset",
      duration: "duration",
      hasEnded: function () {
        return this.reachedToEnd();
      },
      isAlternate: "alternate",
      isPlaying: "_running",
      isRollingBack: "_rollingBack",
      state: function (t, e) {
        return e.isPlaying
          ? e.isRollingBack
            ? "rollback"
            : "playing"
          : e.hasEnded
          ? "ended"
          : "paused";
      },
      totalTime: "maxFiniteDuration",
      iterations: "iterations",
      direction: "direction",
      fill: "fill",
      isReversed: function (t, e) {
        return -1 === e.direction;
      },
      isBackwards: function (t, e) {
        return -1 === e.fill;
      },
      isInfinite: function (t, e) {
        return 0 === e.iterations;
      },
      speed: "speed",
      fps: "fps",
    },
    Ut = {
      destruct: "destruct",
      pause: "pause",
      play: function (t, e) {
        return Yt(t, e.hasEnded ? "restart" : "play", e);
      },
      restart: "restart",
      reverse: function (t, e) {
        return Yt(t, "reverse", e, [!0]);
      },
      seek: "seek",
      seekBy: "seekBy",
      seekTo: "seekTo",
      stop: "stop",
      toggle: "toggle",
      togglePlay: "toggle",
      set: "set",
    };
  function Yt(t, e, n, r = []) {
    return function () {
      const i = [...arguments];
      return i.unshift(...r), t[e].call(t, ...i), n;
    };
  }
  class Xt {
    constructor(t) {
      const e = {},
        n = ["on", "off"],
        r = {
          get: function (t, r, i) {
            return Wt[r]
              ? "function" == typeof Wt[r]
                ? Wt[r].call(t, t, i)
                : t[Wt[r]]
              : Ut[r]
              ? "function" == typeof Ut[r]
                ? Ut[r].call(t, t, i)
                : Yt(t, Ut[r], i)
              : -1 !== n.indexOf(r)
              ? e[r]
              : "ready" === r
              ? (t) => (t && t.call(i, i), i)
              : void 0;
          },
          set: function (t, r, i) {
            return -1 !== n.indexOf(r) && (e[r] = i);
          },
          ownKeys: function (t) {
            return Object.keys(Wt);
          },
          has: function (t, e) {
            return void 0 !== Wt[e];
          },
        };
      if ("function" == typeof Proxy) return new Proxy(t, r);
      const i = Object.keys(Wt).concat(Object.keys(Ut)).concat(n),
        s = {};
      return (
        i.forEach((e) => {
          const i = {
            enumerable: !1,
            configurable: !1,
            get: () => r.get(t, e, s),
          };
          -1 !== n.indexOf(e) && (i.set = (n) => r.set(t, e, n)),
            Object.defineProperty(s, e, i);
        }),
        s
      );
    }
  }
  function Kt(t) {
    t || (t = this);
    let e = {};
    (this.on = function (t, n, r = !1) {
      return (
        "function" == typeof n &&
        (t
          .split(/[, ]+/g)
          .forEach(
            (t) => ((e[t] = e[t] || []), r ? e[t].unshift(n) : e[t].push(n))
          ),
        !0)
      );
    }),
      (this.off = function (t, n) {
        for (let r in e)
          if (e.hasOwnProperty(r) && r.substr(0, t.length) === t)
            if (n)
              for (let t = 0; t < e[r].length; t++)
                e[r][t] === n && (e[r][t] = null);
            else e[r] = null;
      }),
      (this.trigger = function () {
        let n,
          [r, ...i] = [...arguments];
        t: for (let s in e)
          if (
            e.hasOwnProperty(s) &&
            e[s] &&
            (s === r || s.substr(0, r.length + 1) === r + ".")
          )
            for (let r = 0; r < (e[s] || []).length; r++)
              if (e[s][r] && ((n = e[s][r].apply(t, i)), !1 === n)) break t;
        return n;
      });
  }
  let Qt = function (t, e, n = n) {
    let r = !1,
      i = null;
    return function (s) {
      r && clearTimeout(r),
        (r = setTimeout(
          () =>
            (function () {
              let s = 0,
                o = n.innerHeight,
                u = 0,
                l = n.innerWidth,
                a = t.parentNode;
              for (; a instanceof Element; ) {
                let t = n.getComputedStyle(a);
                if ("visible" !== t.overflowY || "visible" !== t.overflowX) {
                  let e = a.getBoundingClientRect();
                  "visible" !== t.overflowY &&
                    ((s = Math.max(s, e.top)), (o = Math.min(o, e.bottom))),
                    "visible" !== t.overflowX &&
                      ((u = Math.max(u, e.left)), (l = Math.min(l, e.right)));
                }
                if (a === a.parentNode) break;
                a = a.parentNode;
              }
              r = !1;
              let c = t.getBoundingClientRect(),
                h = Math.min(c.height, Math.max(0, s - c.top)),
                f = Math.min(c.height, Math.max(0, c.bottom - o)),
                d = Math.min(c.width, Math.max(0, u - c.left)),
                g = Math.min(c.width, Math.max(0, c.right - l)),
                p = (c.height - h - f) / c.height,
                y = (c.width - d - g) / c.width,
                m = Math.round(p * y * 100);
              (null !== i && i === m) || ((i = m), e(m));
            })(),
          100
        ));
    };
  };
  class Jt {
    constructor(t, e, n) {
      const r = (function (t) {
        var e, n;
        const r =
            t &&
            1 ===
              (null === (e = t.ownerDocument) ||
              void 0 === e ||
              null === (n = e.childNodes) ||
              void 0 === n
                ? void 0
                : n.length) &&
            window.parent !== window,
          i = { el: t, window: window };
        if (!r) return i;
        let s;
        try {
          s = window.parent.document;
        } catch (t) {
          return i;
        }
        return (
          (i.window = window.parent),
          (i.el =
            Array.from(s.querySelectorAll("iframe,object")).filter(
              (t) => t.contentWindow === window
            )[0] || i.el),
          i
        );
      })(t);
      (e = Math.max(1, e || 1)),
        (e = Math.min(e, 100)),
        (this.el = r.el),
        (this._handlers = []),
        (this.onThresholdChange = n && n.call ? n : () => {}),
        (this.thresholdPercent = e || 1),
        (this.currentVisibility = null),
        (this.visibilityCalculator = Qt(
          this.el,
          this.onVisibilityUpdate.bind(this),
          r.window
        )),
        this.bindScrollWatchers(),
        this.visibilityCalculator();
    }
    bindScrollWatchers() {
      let t = this.el.parentNode;
      for (
        ;
        t &&
        (this._handlers.push({
          element: t,
          event: "scroll",
          handler: this.visibilityCalculator,
        }),
        t.addEventListener("scroll", this.visibilityCalculator),
        t !== t.parentNode && t !== document);

      )
        t = t.parentNode;
    }
    onVisibilityUpdate(t) {
      let e = this.currentVisibility >= this.thresholdPercent,
        n = t >= this.thresholdPercent;
      if (null === this.currentVisibility || e !== n)
        return (this.currentVisibility = t), void this.onThresholdChange(n);
      this.currentVisibility = t;
    }
    destruct() {
      this._handlers.forEach((t) => {
        t.element.removeEventListener(t.event, t.handler);
      });
    }
  }
  class Zt {
    static adjustLink(t) {
      var e, n;
      const r =
          t &&
          1 ===
            (null === (e = t.ownerDocument) ||
            void 0 === e ||
            null === (n = e.childNodes) ||
            void 0 === n
              ? void 0
              : n.length) &&
          window.parent !== window,
        i = null == t ? void 0 : t.firstElementChild;
      r &&
        i &&
        "a" === i.tagName &&
        !i.getAttribute("target") &&
        i.setAttributeNS(null, "target", "_parent");
    }
    static autoPlay(t, e, n, r = []) {
      if ("click" === n.start) {
        const i = () => {
          switch (n.click) {
            case "freeze":
              return !t._running && t.reachedToEnd() ? t.restart() : t.toggle();
            case "restart":
              return t.offset > 0 ? t.restart() : t.play();
            case "reverse":
              return t._running
                ? t.reverse()
                : t.reachedToEnd()
                ? 1 === t.fill
                  ? t.reverse(!0)
                  : t.restart()
                : t.play();
            case "none":
            default:
              if (t._running) return;
              return t.reachedToEnd() ? t.restart() : t.play();
          }
        };
        return (
          r.push({ element: e, event: "click", handler: i }),
          void e.addEventListener("click", i)
        );
      }
      if ("hover" === n.start) {
        const i = () =>
          t.reachedToEnd()
            ? t.restart()
            : t._rollingBack
            ? t.reverse()
            : t.play();
        r.push({ element: e, event: "mouseenter", handler: i }),
          e.addEventListener("mouseenter", i);
        const s = () => {
          switch (n.hover) {
            case "freeze":
              return t.pause();
            case "reset":
              return t.stop();
            case "reverse":
              if ((t.reverse(), t._running)) return;
              return t.play();
            case "none":
            default:
              return;
          }
        };
        return (
          r.push({ element: e, event: "mouseleave", handler: s }),
          void e.addEventListener("mouseleave", s)
        );
      }
      if ("scroll" !== n.start) "programmatic" !== n.start && t.play();
      else {
        const i = new Jt(e, n.scroll || 25, function (e) {
          e ? (t.reachedToEnd() ? t.restart() : t.play()) : t.pause();
        });
        r.push({ callback: () => i.destruct() });
      }
    }
  }
  const te = !0,
    ee = ["iterations", "speed", "fps", "direction", "fill", "alternate"];
  class ne extends class {
    _svg;
    _rootId;
    constructor(t) {
      (this._id = 0),
        (this._running = !1),
        (this._rollingBack = !1),
        (this._animations = t.animations),
        (this._settings = t.animationSettings),
        t.version < "2022-05-02" && delete this._settings.speed,
        et.forEach((t) => {
          this._settings[t.key] = this._settings[t.key] || t.def;
        }),
        (this.duration = t.animationSettings.duration),
        (this.offset = t.animationSettings.offset || 0),
        (this.rollbackStartOffset = 0),
        (this._rootId = t.root),
        (this._svg = t.svg),
        (this._originalAnimations = t.originalAnimations),
        (this._frameTimingChecker = new h(this));
    }
    get alternate() {
      return this._settings.alternate;
    }
    get fill() {
      return this._settings.fill;
    }
    get iterations() {
      return this._settings.iterations;
    }
    get direction() {
      return this._settings.direction;
    }
    get speed() {
      return this._settings.speed;
    }
    get fps() {
      return this._settings.fps;
    }
    get watermarkData() {
      return this._settings.w;
    }
    get rootId() {
      return this._rootId;
    }
    get svg() {
      return this._svg;
    }
    get originalAnimations() {
      return this._originalAnimations;
    }
    get maxFiniteDuration() {
      return this.iterations > 0
        ? this.iterations * this.duration
        : this.duration;
    }
    _apply(t, e = {}) {
      const n = this._animations,
        r = n.length;
      let i = 0;
      for (let s = 0; s < r; s++)
        e[s] ? i++ : ((e[s] = n[s](t, 1)), e[s] && i++);
      return i;
    }
    _rollback(t) {
      let e = 1 / 0,
        n = null;
      (this.rollbackStartOffset = t),
        (this._rollingBack = !0),
        (this._running = !0);
      const r = (i) => {
        if (!this._rollingBack) return;
        null == n && (n = i);
        let s = Math.round(t - (i - n) * this.speed);
        if (s > this.duration && e !== 1 / 0) {
          const t = !!this.alternate && (s / this.duration) % 2 > 1;
          let e = s % this.duration;
          (e += t ? this.duration : 0), (s = e || this.duration);
        }
        const o = (this.fps ? 1e3 / this.fps : 0) * this.speed,
          u = Math.max(0, s);
        u <= e - o && ((this.offset = u), (e = u), this._apply(u));
        const l =
          this.iterations > 0 &&
          -1 === this.fill &&
          s >= this.maxFiniteDuration;
        (s <= 0 || this.offset < s || l) && this.stop(),
          (this._id = window.requestAnimationFrame(r));
      };
      this._id = window.requestAnimationFrame(r);
    }
    _start(t = 0) {
      let e,
        n = -1 / 0;
      const r = {};
      this._running = !0;
      const i = (s) => {
        e ??= s;
        const o = Math.round((s - e) * this.speed + t),
          u = (this.fps ? 1e3 / this.fps : 0) * this.speed;
        if (o >= n + u && !this._rollingBack) {
          this._frameTimingChecker.checkFrame(s), (this.offset = o), (n = o);
          if (this._apply(o, r) === this._animations.length)
            return void this.pause(!0);
        }
        this._id = window.requestAnimationFrame(i);
      };
      this._id = window.requestAnimationFrame(i);
    }
    _pause() {
      this._id && window.cancelAnimationFrame(this._id), (this._running = !1);
    }
    play() {
      if (!this._running)
        return this._rollingBack
          ? this._rollback(this.offset)
          : this._start(this.offset);
    }
    stop() {
      this._pause(),
        (this.offset = 0),
        (this.rollbackStartOffset = 0),
        (this._rollingBack = !1),
        this._apply(0);
    }
    reachedToEnd() {
      return (
        this.iterations > 0 && this.offset >= this.iterations * this.duration
      );
    }
    restart(t = !1) {
      this.stop(t), this.play(t);
    }
    pause() {
      this._pause();
    }
    toggle() {
      return this._running
        ? this.pause()
        : this.reachedToEnd()
        ? this.restart()
        : this.play();
    }
    trigger(t, e) {}
    _adjustOffset(t = !1) {
      const e = this.alternate ? 2 * this.duration : this.duration;
      if (t) {
        if (!this._rollingBack && 0 === this.offset)
          return void (this.offset = e);
        this._rollingBack && (this.offset, this.maxFiniteDuration);
      }
      !this._rollingBack || this.rollbackStartOffset <= this.duration
        ? 0 !== this.iterations &&
          (this.offset = Math.min(this.offset, this.maxFiniteDuration))
        : ((this.offset =
            this.rollbackStartOffset -
            ((this.rollbackStartOffset - this.offset) % e)),
          (this.rollbackStartOffset = 0));
    }
    reverse(t = !1) {
      if (!this._running)
        return (
          this._adjustOffset(t),
          (this._rollingBack = !this._rollingBack),
          t && this.play(!1),
          void this.trigger("reverse", this.offset)
        );
      this.pause(!1, !1),
        this._adjustOffset(),
        (this._rollingBack = !this._rollingBack),
        this.play(!1),
        this.trigger("reverse", this.offset);
    }
    static build(t, e) {
      if (
        (delete t.animationSettings,
        (t.options = tt(t.options, t.root, "91c80d77")),
        t.animations.map((e) => {
          (e.settings = tt(e.s, t.root, "91c80d77")),
            delete e.s,
            t.animationSettings || (t.animationSettings = e.settings);
        }),
        Object.assign(
          t,
          { originalAnimations: t.animations },
          (function (t, e) {
            if (((L = e), !t || !t.root || !Array.isArray(t.animations)))
              return null;
            const n = K(t);
            if (!n) return null;
            const r = t.animations.map((t) => X(n, t)).filter((t) => !!t);
            return r.length ? { svg: n, animations: r } : null;
          })(t, e)
        ),
        !t)
      )
        return null;
      const n = t.options || {},
        r = new this(t);
      return { el: t.svg, options: n, player: r };
    }
    static push(t) {
      return this.build(t);
    }
    static init() {
      const t =
        window.__SVGATOR_PLAYER__ && window.__SVGATOR_PLAYER__["91c80d77"];
      Array.isArray(t) && t.splice(0).forEach((t) => this.build(t));
    }
  } {
    constructor(t) {
      super(t), (this._handlers = []);
    }
    static build(t) {
      let e = super.build(t, Ht);
      if (!e) return null;
      let { el: n, options: r, player: i } = e;
      const s = new Xt(i),
        o = new Kt(s);
      (s.on = o.on), (s.off = o.off), (i.trigger = o.trigger);
      const u =
        n.svgatorPlayer &&
        n.svgatorPlayer.ready &&
        n.svgatorPlayer.ready.call &&
        n.svgatorPlayer.ready.call();
      (n.svgatorPlayer = s),
        Zt.adjustLink(n),
        Zt.autoPlay(i, n, r, i._handlers),
        (function (t, e, n) {
          let r;
          "function" == typeof Event
            ? (r = new Event("ready"))
            : ((r = document.createEvent("Event")),
              r.initEvent("ready", !0, !0));
          if ((t.dispatchEvent(r), !n || !n.length)) return;
          n.forEach((t) => e.ready(t));
        })(n, n.svgatorPlayer, u);
    }
    play(t = true) {
      setTimeout(() => {
        const e = super.play();
        return t === te && this.trigger("play", this.offset), e;
      }, 4200);
    }
    pause(t = !1, e = true) {
      const n = super.pause();
      return e === te && this.trigger(t ? "end" : "pause", this.offset), n;
    }
    restart() {
      const t = super.restart(!1);
      return this.trigger("restart", this.offset), t;
    }
    stop(t = true) {
      const e = super.stop();
      return t === te && this.trigger("stop", this.offset), e;
    }
    _apply(t, e = {}, n = true) {
      const r = super._apply(t);
      if (n === te) {
        const e = () => this.trigger("keyframe", t);
        window.requestAnimationFrame(e);
      }
      return r;
    }
    seekTo(t) {
      const e = this._running;
      var n, r, i;
      e && this.pause(!1, !1),
        (this.offset =
          this.iterations > 0
            ? ((n = t),
              (r = 0),
              (i = this.maxFiniteDuration),
              n < r ? r : n > i ? i : n)
            : Math.max(t, 0)),
        this._apply(this.offset),
        e && this.play(!1);
    }
    seek(t) {
      return this.seekTo(Math.round((t / 100) * this.maxFiniteDuration));
    }
    seekBy(t) {
      return this.seekTo(this.offset + t);
    }
    set(t, e) {
      if (!ee.includes(t)) return;
      const n = this._running;
      n && this.pause(!1, !1),
        (this._settings[t] = e),
        n ? this.play(!1) : this._apply(this.offset, {}, !1);
    }
    destruct() {
      this.stop(),
        this._handlers.forEach((t) => {
          t.element
            ? t.element.removeEventListener(t.event, t.handler)
            : t.callback && t.callback.call && t.callback.call();
        });
      const t = () => {},
        e = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
      e.push(...Object.getOwnPropertyNames(this)),
        e.forEach((e) => {
          "function" == typeof this[e] ? (this[e] = t) : delete this[e];
        });
    }
  }
  return ne.init(), ne;
});
(function (s, i, o, w, d, a, b) {
  (a =
    Array.from(d.querySelectorAll("svg#" + i.root)).filter(
      (n) => !n.svgatorPlayer
    )[0] || {}).svgatorPlayer = {
    ready: (function (a) {
      b = [];
      return function (c) {
        return c ? (b.push(c), a.svgatorPlayer) : b;
      };
    })(a),
  };
  w[o] = w[o] || {};
  w[o][s] = w[o][s] || [];
  w[o][s].push(i);
})(
  "91c80d77",
  {
    root: "eCae4SwJrFf1",
    version: "2025-02-04",
    animations: [
      {
        elements: {
          eCae4SwJrFf5: {
            opacity: [
              { t: 0, v: 0 },
              { t: 1950, v: 0 },
              { t: 2450, v: 1 },
            ],
          },
          eCae4SwJrFf9: {
            opacity: [
              { t: 0, v: 0 },
              { t: 3800, v: 0 },
              { t: 4300, v: 1 },
            ],
          },
          eCae4SwJrFf14: {
            opacity: [
              { t: 0, v: 0 },
              { t: 2300, v: 0 },
              { t: 2800, v: 1 },
            ],
          },
          eCae4SwJrFf16: {
            opacity: [
              { t: 0, v: 0, e: [0.42, 0, 0.58, 1] },
              { t: 1100, v: 0, e: [0.42, 0, 0.58, 1] },
              { t: 1600, v: 1 },
            ],
          },
          eCae4SwJrFf23: {
            "stroke-dashoffset": [
              { t: 0, v: 702.13, e: [0.455, 0.03, 0.515, 0.955] },
              { t: 2900, v: 702.13, e: [0.455, 0.03, 0.515, 0.955] },
              { t: 3900, v: 0 },
            ],
          },
          eCae4SwJrFf28: {
            "stroke-dashoffset": [
              { t: 0, v: 858.72, e: [0.455, 0.03, 0.515, 0.955] },
              { t: 1200, v: 0 },
            ],
          },
          eCae4SwJrFf31: {
            opacity: [
              { t: 0, v: 1 },
              { t: 790, v: 1 },
              { t: 810, v: 0 },
            ],
          },
        },
        s: "MDDA1ZGE2NGQ4ZBmEwOWQ4Y0s5YZjk0OWE5OTRPkNjU1ZjVlNWKI1YjU3NGQ4ZMjk0OWQ5MDhlVOWZBOTQ5YTkG5NGQ2NTVjNTYc0ZDk0OWY5MNDlkOGM5Zjk0WOWE5OTllVzRIkNjU1YzU3NGAQ5MTk0STk3OMTc0ZDY1NWM1YNzRkOGNUOTcX5ZjkwOWQ5OTRhjOWY5ME00ZPDY1OTE4Yzk3JOWU5MDU3NGQR5ZTliOTA5MDKhmNGQ2NTVjNHTc0ZDkxOWI5AZTRkNjU1YzVOiNWJhOA|",
      },
    ],
    options: "MDMAxMDgyMjk3YTU03YjY4Nzk3YYjI5NDEyOTcRzNzY2ODZiMjFk4NA|",
  },
  "__SVGATOR_PLAYER__",
  window,
  document
);

/* --------------------------------- line 1 --------------------------------- */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof __SVGATOR_DEFINE__ && __SVGATOR_DEFINE__.amd
    ? __SVGATOR_DEFINE__(e)
    : (((t =
        "undefined" != typeof globalThis
          ? globalThis
          : t || self).__SVGATOR_PLAYER__ = t.__SVGATOR_PLAYER__ || {}),
      (t.__SVGATOR_PLAYER__["91c80d77"] = e()));
})(this, function () {
  "use strict";
  class t {
    static _removeQuotes(t) {
      return `${t}`.replace(/['"]/g, "");
    }
    static _convertHEXToRGB(t) {
      const e = [
          "^",
          "\\s*",
          "#",
          "(?<red>[0-9A-Z]{1,2})",
          "(?<green>[0-9A-Z]{1,2})",
          "(?<blue>[0-9A-Z]{1,2})",
        ].join(""),
        n = t.match(new RegExp(e, "i"));
      if (!n) return t;
      const r = (t) => parseInt(t.length > 1 ? t : `${t}${t}`, 16);
      return `rgb(${r(
        n.groups.red
      )}, ${r(n.groups.green)}, ${r(n.groups.blue)})`;
    }
    static _sanitizeNumber(t) {
      return +t;
    }
    static _suffixWithUnit(t, e = "px") {
      return t.endsWith(e) ? t : `${t}${e}`;
    }
    static _roundToNDecimals(t, e = 0) {
      const n = Math.pow(10, e);
      return Math.round(t * n) / n;
    }
    static getValuesFromMatrix(t) {
      const e = [
          "^",
          "\\s*",
          "(matrix\\()",
          "(?<a>-?[0-9]*\\.?[0-9]+)",
          "\\s*",
          ",?",
          "\\s*",
          "(?<b>-?[0-9]*\\.?[0-9]+)",
          "\\s*",
          ",?",
          "\\s*",
          "(?<c>-?[0-9]*\\.?[0-9]+)",
          "\\s*",
          ",?",
          "\\s*",
          "(?<d>-?[0-9]*\\.?[0-9]+)",
          "\\s*",
          ",?",
          "\\s*",
          "(?<e>-?[0-9]*\\.?[0-9]+)",
          "\\s*",
          ",?",
          "\\s*",
          "(?<f>-?[0-9]*\\.?[0-9]+)",
          "\\)",
        ].join(""),
        n = t.match(new RegExp(e, "i"));
      if (n)
        return [
          this._sanitizeNumber(n.groups.a),
          this._sanitizeNumber(n.groups.b),
          this._sanitizeNumber(n.groups.c),
          this._sanitizeNumber(n.groups.d),
          this._sanitizeNumber(n.groups.e),
          this._sanitizeNumber(n.groups.f),
        ];
    }
    static checkAgainstDefault(t, e = "inline") {
      if (t !== e && (t = this._removeQuotes(t)) !== e) return t;
    }
    static paint(t, e = "rgb(0, 0, 0)") {
      if (t === e) return;
      if ((t = this._removeQuotes(t)) === e) return;
      if (t.startsWith("rgb")) return t;
      const n = this._convertHEXToRGB(t);
      return n === e ? void 0 : n;
    }
    static opacity(t, e = "1") {
      if (
        t !== e &&
        (t = `${this._roundToNDecimals(this._sanitizeNumber(t), 3)}`) !== e
      )
        return t;
    }
    static strokeWidth(t, e = "1px") {
      if (t === e) return;
      if (t.endsWith("px")) return t;
      t = `${this._sanitizeNumber(t)}`;
      const n = this._suffixWithUnit(t);
      return n !== e ? n : void 0;
    }
    static transform(t, e = "none") {
      if (t === e) return;
      const n = this.getValuesFromMatrix(t);
      return n ? `matrix(${n.join(", ")})` : t;
    }
    static transformOrigin(t, e = "0px 0px") {
      if (t === e) return;
      const n = [
          "^",
          "\\s*",
          "(?<x>[0-9]+)",
          "(px)?",
          "\\s*",
          ",",
          "\\s*",
          "(?<y>[0-9]+)",
          "(px)?",
        ].join(""),
        r = t.match(new RegExp(n, "i"));
      if (!r) return t;
      let i = `${this._sanitizeNumber(r.groups.x)}`;
      i = this._suffixWithUnit(i);
      let s = `${this._sanitizeNumber(r.groups.y)}`;
      s = this._suffixWithUnit(s);
      const o = `${i} ${s}`;
      return o === e ? void 0 : o;
    }
  }
  const e = r(Math.pow(10, -6)),
    n = r(Math.pow(10, -2));
  function r(t, e = 6) {
    return (function (t, e, n) {
      if (Number.isInteger(t)) return t;
      const r = Math.pow(10, e);
      return Math[n]((+t + Number.EPSILON) * r) / r;
    })(t, e, "round");
  }
  function i(t, n, r = e) {
    return Math.abs(t - n) < r;
  }
  r(Math.pow(10, -4));
  const s = Math.PI / 180;
  function o(t) {
    return t * s;
  }
  function u(t) {
    return t / s;
  }
  class l {
    static _VISUAL_PROPERTIES = Object.freeze({
      display: (e) => t.checkAgainstDefault(e),
      fill: (e) => t.paint(e),
      "fill-opacity": (e) => t.opacity(e),
      filter: (e) => t.checkAgainstDefault(e, "none"),
      opacity: (e) => t.opacity(e),
      stroke: (e) => t.paint(e, "none"),
      "stroke-opacity": (e) => t.opacity(e),
      "stroke-width": (e) => t.strokeWidth(e),
      transform: (e) => t.transform(e),
      "transform-origin": (e) => t.transformOrigin(e),
      visibility: (e) => t.checkAgainstDefault(e, "visible"),
    });
    static _keys = Object.keys(this._VISUAL_PROPERTIES);
    static _MINIMUM_PRECISION_ERROR_PERCENTAGE = n;
    static get visualProperties() {
      return this._VISUAL_PROPERTIES;
    }
    static _isWithinPrecisionErrorLimit(t, e) {
      return i(
        ((e - t) / (e || 1)) * 100,
        0,
        this._MINIMUM_PRECISION_ERROR_PERCENTAGE
      );
    }
    static _getTransformValue(e, n, r, i = window) {
      var s, o;
      const u = e.getAttribute(n),
        l =
          i.safari &&
          !i.chrome &&
          "none" ===
            (null === (s = r.getPropertyValue) || void 0 === s
              ? void 0
              : s.call(r, n))
            ? u
            : null === (o = r.getPropertyValue) || void 0 === o
            ? void 0
            : o.call(r, n);
      if (!u || !l) return;
      if (u === l) return u;
      const a = t.getValuesFromMatrix(u),
        c = t.getValuesFromMatrix(l);
      if ((null == a ? void 0 : a.length) === (null == c ? void 0 : c.length)) {
        for (let t = 0, e = a.length; t < e; t++)
          if (a[t] !== c[t] && !this._isWithinPrecisionErrorLimit(c[t], a[t]))
            return;
        return u;
      }
    }
    static _getValue(t, e, n) {
      var r, i, s, o;
      return n && "transform" === e
        ? this._getTransformValue(t, e, n)
        : (null === (r = n.getPropertyValue) || void 0 === r
            ? void 0
            : r.call(n, e)) ??
            (null === (i = t.attrs) ||
            void 0 === i ||
            null === (s = i.style) ||
            void 0 === s
              ? void 0
              : s[e]) ??
            (null === (o = t.attrs) || void 0 === o ? void 0 : o[e]);
    }
    static getProperties(t, e) {
      const n = "undefined" != typeof window && getComputedStyle(t),
        r = {};
      for (let s = 0, o = this._keys.length; s < o; s++) {
        var i;
        const o = this._keys[s];
        if (null != e && null !== (i = e[t.id]) && void 0 !== i && i[o])
          continue;
        const u = this._getValue(t, o, n);
        if (null == u) continue;
        const l = this.visualProperties[o].call(this, u);
        l && (r[o] = l);
      }
      return r;
    }
  }
  class a {
    _hash;
    _baseId;
    _watermarkIds;
    constructor(t) {
      var e, n;
      null !== (e = t.watermarkData) &&
        void 0 !== e &&
        e.length &&
        ((this._hash = t.watermarkData.shift()),
        (this._baseId =
          null === (n = t.rootId) || void 0 === n ? void 0 : n.slice(0, -1)),
        (this._watermarkIds = t.watermarkData.map((t) =>
          this.constructor._buildId(this._baseId, t)
        )));
    }
    get hash() {
      return this._hash;
    }
    get watermarkIds() {
      return this._watermarkIds;
    }
    static _buildId(t, e) {
      return `${t}${e}`;
    }
    static _buildIdSuffixes(t, e) {
      const n = t.slice(0, -1),
        r = [];
      for (let t = 0, s = e.length; t < s; t++) {
        var i;
        r.push(null === (i = e[t]) || void 0 === i ? void 0 : i.replace(n, ""));
      }
      return r;
    }
    static generateIds(t, e, n) {
      return [t, ...this._buildIdSuffixes(e, n)];
    }
  }
  class c {
    constructor(t) {
      (this._player = t), (this._watermarkDataLayer = new a(t));
    }
    get _svg() {
      return this._player.svg;
    }
    get _watermarkIds() {
      return this._watermarkDataLayer.watermarkIds;
    }
    get _animations() {
      return this._player.originalAnimations[0].elements;
    }
    get _hash() {
      return this._watermarkDataLayer.hash;
    }
    _processElement(t, e, n) {
      var r;
      if (e[t]) return;
      const i = this._svg.querySelector("#" + t),
        s =
          null == i || null === (r = i.parentElement) || void 0 === r
            ? void 0
            : r.id;
      if (i && s) {
        if (this._watermarkIds.includes(s))
          return (
            e[s] || this._processElement(s, e, n),
            (e[s].children ??= []),
            (e[t] = l.getProperties(i, this._animations)),
            void e[s].children.push(e[t])
          );
        (e[t] = l.getProperties(i, this._animations)), n.push(e[t]);
      }
    }
    _buildObfuscationJSON() {
      let t = [],
        e = {};
      for (let n = 0, r = this._watermarkIds.length; n < r; n++)
        this._processElement(this._watermarkIds[n], e, t);
      return t;
    }
    async _generateHash(t) {
      var e, n;
      const r = JSON.stringify(t),
        i = new TextEncoder().encode(r),
        s = await (null === (e = window.crypto) ||
        void 0 === e ||
        null === (n = e.subtle) ||
        void 0 === n
          ? void 0
          : n.digest("SHA-256", i));
      return (
        (s &&
          Array.from(new Uint8Array(s))
            .map((t) => t.toString(16).padStart(2, "0"))
            .join("")) ||
        this._hash
      );
    }
    async _calculateHash() {
      const t = this._buildObfuscationJSON();
      return await this._generateHash(t);
    }
    async validateHash() {
      (await this._calculateHash()) !== this._hash &&
        requestAnimationFrame(() => this._player.stop());
    }
  }
  class h {
    static _MIN_CHECK_TIME = 300;
    static _MAX_CHECK_TIME = 500;
    static _MIN_FRAMES = 3;
    _frameCounter = 0;
    _previousTimestamp = 0;
    constructor(t) {
      (this._player = t), (this._hashGenerator = new c(t));
    }
    _shouldBeChecked(t) {
      return (
        !(t - this._previousTimestamp < this.constructor._MIN_CHECK_TIME) &&
        (t - this._previousTimestamp >= this.constructor._MAX_CHECK_TIME ||
          this._frameCounter >= this.constructor._MIN_FRAMES)
      );
    }
    async checkFrame(t) {
      this._player.watermarkData &&
        (this._frameCounter++,
        this._shouldBeChecked(t) &&
          ((this._frameCounter = 0),
          (this._previousTimestamp = t),
          window.requestAnimationFrame(() =>
            this._hashGenerator.validateHash()
          )));
    }
  }
  function f(t) {
    return t;
  }
  function d(t, e, n) {
    const r = 1 - n;
    return 3 * n * r * (t * r + e * n) + n * n * n;
  }
  function g(t = 0, e = 0, n = 1, r = 1) {
    return t < 0 || t > 1 || n < 0 || n > 1
      ? null
      : i(t, e) && i(n, r)
      ? f
      : (s) => {
          if (s <= 0)
            return t > 0 ? (s * e) / t : 0 === e && n > 0 ? (s * r) / n : 0;
          if (s >= 1)
            return n < 1
              ? 1 + ((s - 1) * (r - 1)) / (n - 1)
              : 1 === n && t < 1
              ? 1 + ((s - 1) * (e - 1)) / (t - 1)
              : 1;
          let o,
            u = 0,
            l = 1;
          for (; u < l; ) {
            o = (u + l) / 2;
            const e = d(t, n, o);
            if (i(s, e)) break;
            e < s ? (u = o) : (l = o);
          }
          return d(e, r, o);
        };
  }
  function p() {
    return 1;
  }
  function y(t) {
    return 1 === t ? 1 : 0;
  }
  function m(t = 1, e = 0) {
    if (1 === t) {
      if (0 === e) return y;
      if (1 === e) return p;
    }
    const n = 1 / t;
    return (t) => (t >= 1 ? 1 : (t += e * n) - (t % n));
  }
  Number.isInteger ||
    (Number.isInteger = function (t) {
      return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
    }),
    Number.EPSILON || (Number.EPSILON = 2220446049250313e-31);
  const _ = Math.sin,
    b = Math.cos,
    v = Math.acos,
    w = Math.asin,
    x = Math.tan,
    A = Math.atan2,
    k = Math.sqrt;
  function E(t, e) {
    return {
      a: t[0] * e[0] + t[2] * e[1],
      b: t[1] * e[0] + t[3] * e[1],
      c: t[0] * e[2] + t[2] * e[3],
      d: t[1] * e[2] + t[3] * e[3],
      tx: t[0] * e[4] + t[2] * e[5] + t[4],
      ty: t[1] * e[4] + t[3] * e[5] + t[5],
    };
  }
  function S(t, e, n) {
    return t >= 0.5 ? n : e;
  }
  function I(t, e, n) {
    return 0 === t || e === n ? e : t * (n - e) + e;
  }
  function M(t, e, n) {
    const r = I(t, e, n);
    return r <= 0 ? 0 : r;
  }
  function O(t, e, n) {
    const r = I(t, e, n);
    return r <= 0 ? 0 : r >= 1 ? 1 : r;
  }
  function N(t, e, n) {
    return 0 === t ? e : 1 === t ? n : { x: I(t, e.x, n.x), y: I(t, e.y, n.y) };
  }
  function P(t, e, n) {
    return 0 === t ? e : 1 === t ? n : { x: M(t, e.x, n.x), y: M(t, e.y, n.y) };
  }
  function T(t, e, n) {
    const r = (function (t, e, n) {
      return Math.round(I(t, e, n));
    })(t, e, n);
    return r <= 0 ? 0 : r >= 255 ? 255 : r;
  }
  function R(t, e, n) {
    return 0 === t
      ? e
      : 1 === t
      ? n
      : {
          r: T(t, e.r, n.r),
          g: T(t, e.g, n.g),
          b: T(t, e.b, n.b),
          a: I(t, null == e.a ? 1 : e.a, null == n.a ? 1 : n.a),
        };
  }
  function B(t, e, n) {
    let r = e.length;
    if (r !== n.length) return S(t, e, n);
    let i = new Array(r);
    for (let s = 0; s < r; s++) i[s] = I(t, e[s], n[s]);
    return i;
  }
  function j(t, e) {
    const n = [];
    for (let r = 0; r < t; r++) n.push(e);
    return n;
  }
  function C(t, e) {
    if (--e <= 0) return t;
    const n = (t = Object.assign([], t)).length;
    do {
      for (let e = 0; e < n; e++) t.push(t[e]);
    } while (--e > 0);
    return t;
  }
  class F {
    constructor(t) {
      (this.list = t), (this.length = t.length);
    }
    setAttribute(t, e) {
      const n = this.list;
      for (let r = 0; r < this.length; r++) n[r].setAttribute(t, e);
    }
    removeAttribute(t) {
      const e = this.list;
      for (let n = 0; n < this.length; n++) e[n].removeAttribute(t);
    }
    style(t, e) {
      const n = this.list;
      for (let r = 0; r < this.length; r++) n[r].style[t] = e;
    }
  }
  const V = /-./g,
    D = (t, e) => e.toUpperCase();
  let L;
  function q(t) {
    return "function" == typeof t ? t : S;
  }
  function z(t) {
    return t
      ? "function" == typeof t
        ? t
        : Array.isArray(t)
        ? (function (t, e = f) {
            if (!Array.isArray(t)) return e;
            switch (t.length) {
              case 1:
                return m(t[0]) || e;
              case 2:
                return m(t[0], t[1]) || e;
              case 4:
                return g(t[0], t[1], t[2], t[3]) || e;
            }
            return e;
          })(t, null)
        : (function (t, e, n = f) {
            switch (t) {
              case "linear":
                return f;
              case "steps":
                return m(e.steps || 1, e.jump || 0) || n;
              case "bezier":
              case "cubic-bezier":
                return g(e.x1 || 0, e.y1 || 0, e.x2 || 0, e.y2 || 0) || n;
            }
            return n;
          })(t.type, t.value, null)
      : null;
  }
  function $(t, e, n, r = !1) {
    const i = e.length - 1;
    if (t <= e[0].t) return r ? [0, 0, e[0].v] : e[0].v;
    if (t >= e[i].t) return r ? [i, 1, e[i].v] : e[i].v;
    let s,
      o = e[0],
      u = null;
    for (s = 1; s <= i; s++) {
      if (!(t > e[s].t)) {
        u = e[s];
        break;
      }
      o = e[s];
    }
    return null == u
      ? r
        ? [i, 1, e[i].v]
        : e[i].v
      : o.t === u.t
      ? r
        ? [s, 1, u.v]
        : u.v
      : ((t = (t - o.t) / (u.t - o.t)),
        o.e && (t = o.e(t)),
        r ? [s, t, n(t, o.v, u.v)] : n(t, o.v, u.v));
  }
  function G(t, e, n = null) {
    return t && t.length
      ? "function" != typeof e
        ? null
        : ("function" != typeof n && (n = null),
          (r) => {
            let i = $(r, t, e);
            return null != i && n && (i = n(i)), i;
          })
      : null;
  }
  function H(t, e) {
    return t.t - e.t;
  }
  function W(t, e, n, r, i) {
    const s = "@" === n[0],
      o = "#" === n[0];
    let u = L[n],
      l = S;
    var a;
    switch (
      (s ? ((a = n.substr(1)), (n = a.replace(V, D))) : o && (n = n.substr(1)),
      typeof u)
    ) {
      case "function":
        if (((l = u(r, i, $, z, n, s, e, t)), o)) return l;
        break;
      case "string":
        l = G(r, q(u));
        break;
      case "object":
        if (((l = G(r, q(u.i), u.f)), l && "function" == typeof u.u))
          return u.u(e, l, n, s, t);
    }
    return l
      ? (function (t, e, n, r = !1) {
          if (r)
            return t instanceof F
              ? (r) => t.style(e, n(r))
              : (r) => (t.style[e] = n(r));
          if (Array.isArray(e)) {
            const r = e.length;
            return (i) => {
              const s = n(i);
              if (null == s)
                for (let n = 0; n < r; n++) t[n].removeAttribute(e);
              else for (let n = 0; n < r; n++) t[n].setAttribute(e, s);
            };
          }
          return (r) => {
            const i = n(r);
            null == i ? t.removeAttribute(e) : t.setAttribute(e, i);
          };
        })(e, n, l, s)
      : null;
  }
  function U(t, e, n, r) {
    if (!r || "object" != typeof r) return null;
    let i = null,
      s = null;
    return (
      Array.isArray(r)
        ? (s = (function (t) {
            if (!t || !t.length) return null;
            for (let e = 0; e < t.length; e++) t[e].e && (t[e].e = z(t[e].e));
            return t.sort(H);
          })(r))
        : ((s = r.keys), (i = r.data || null)),
      s ? W(t, e, n, s, i) : null
    );
  }
  function Y(t, e, n) {
    if (!n) return null;
    const r = [];
    for (const i in n)
      if (n.hasOwnProperty(i)) {
        const s = U(t, e, i, n[i]);
        s && r.push(s);
      }
    return r.length ? r : null;
  }
  function X(t, e) {
    if (!e.settings.duration || e.settings.duration < 0) return null;
    const n = (function (t, e) {
      if (!e) return null;
      let n = [];
      if (Array.isArray(e)) {
        const r = e.length;
        for (let i = 0; i < r; i++) {
          const r = e[i];
          if (2 !== r.length) continue;
          let s = null;
          if ("string" == typeof r[0]) s = t.getElementById(r[0]);
          else if (Array.isArray(r[0])) {
            s = [];
            for (let e = 0; e < r[0].length; e++)
              if ("string" == typeof r[0][e]) {
                const n = t.getElementById(r[0][e]);
                n && s.push(n);
              }
            s = s.length ? (1 === s.length ? s[0] : new F(s)) : null;
          }
          if (!s) continue;
          const o = Y(t, s, r[1]);
          o && (n = n.concat(o));
        }
      } else
        for (const r in e) {
          if (!e.hasOwnProperty(r)) continue;
          const i = t.getElementById(r);
          if (!i) continue;
          const s = Y(t, i, e[r]);
          s && (n = n.concat(s));
        }
      return n.length ? n : null;
    })(t, e.elements);
    return n
      ? (function (t, e) {
          const n = e.duration,
            r = t.length;
          let i = null;
          return (s, o) => {
            const u = e.iterations || 1 / 0,
              l = (e.alternate && u % 2 == 0) ^ (e.direction > 0) ? n : 0;
            let a = s % n,
              c = 1 + (s - a) / n;
            (o *= e.direction), e.alternate && c % 2 == 0 && (o = -o);
            let h = !1;
            if (c > u)
              (a = l), (h = !0), -1 === e.fill && (a = e.direction > 0 ? 0 : n);
            else if ((o < 0 && (a = n - a), a === i)) return !1;
            i = a;
            for (let e = 0; e < r; e++) t[e](a);
            return h;
          };
        })(n, e.settings)
      : null;
  }
  function K(t, e = document, n = 0) {
    const r = (function (t, e) {
      const n = e.querySelectorAll("svg");
      for (let e = 0; e < n.length; e++)
        if (n[e].id === t.root && !n[e].svgatorAnimation)
          return (n[e].svgatorAnimation = !0), n[e];
      return null;
    })(t, e);
    if (r) return r;
    if (n >= 20) return null;
    const i = (function (t) {
      const e = (t) => t.shadowRoot;
      return document
        ? Array.from(
            t.querySelectorAll(
              ":not(" +
                [
                  "a",
                  "area",
                  "audio",
                  "br",
                  "canvas",
                  "circle",
                  "datalist",
                  "embed",
                  "g",
                  "head",
                  "hr",
                  "iframe",
                  "img",
                  "input",
                  "link",
                  "object",
                  "path",
                  "polygon",
                  "rect",
                  "script",
                  "source",
                  "style",
                  "svg",
                  "title",
                  "track",
                  "video",
                ].join() +
                ")"
            )
          )
            .filter(e)
            .map(e)
        : [];
    })(e);
    for (let e = 0; e < i.length; e++) {
      const r = K(t, i[e], n + 1);
      if (r) return r;
    }
    return null;
  }
  function Q(
    t,
    e = null,
    n = Number,
    r = "undefined" != typeof BigInt && BigInt
  ) {
    const i = "0x" + (t.replace(/[^0-9a-fA-F]+/g, "") || 27);
    return e && r && n.isSafeInteger && !n.isSafeInteger(+i)
      ? (n(r(i)) % e) + e
      : +i;
  }
  function J(t, e, n) {
    return !t || !n || e > t.length
      ? t
      : t.substring(0, e) + J(t.substring(e + 1), n, n);
  }
  function Z(t, e = 27) {
    return !t || t % e ? t % e : [0, 1].includes(e) ? e : Z(t / e, e);
  }
  function tt(t, e, n) {
    if (!t || !t.length) return;
    const r = Q(n),
      i = Z(r) + 5;
    let s = J(t, Z(r, 5), i);
    return (
      (s = s.replace(/\x7c$/g, "==").replace(/\x2f$/g, "=")),
      (s = atob(s)),
      (s = s.replace(/[\x41-\x5A]/g, "")),
      (s = (function (t, e, n) {
        const r = +("0x" + t.substring(0, 4));
        t = t.substring(4);
        const i = (Q(e, r) % r) + (n % 27),
          s = [];
        for (let e = 0; e < t.length; e += 2) {
          if ("|" === t[e]) {
            const n = +("0x" + t.substring(e + 1, e + 1 + 4)) - i;
            (e += 3), s.push(n);
            continue;
          }
          const n = +("0x" + t[e] + t[e + 1]) - i;
          s.push(n);
        }
        return String.fromCharCode(...s);
      })(s, e, r)),
      (s = JSON.parse(s)),
      s
    );
  }
  const et = [
    { key: "alternate", def: !1 },
    { key: "fill", def: 1 },
    { key: "iterations", def: 0 },
    { key: "direction", def: 1 },
    { key: "speed", def: 1 },
    { key: "fps", def: 100 },
  ];
  function nt(t) {
    return r(t) + "";
  }
  function rt(t, e = " ") {
    return t && t.length ? t.map(nt).join(e) : "";
  }
  function it(t) {
    return nt(t.x) + "," + nt(t.y);
  }
  function st(t) {
    return t
      ? null == t.a || t.a >= 1
        ? (function (t) {
            if (!t) return "transparent";
            const e = (t) => parseInt(t).toString(16).padStart(2, "0");
            return (function (t) {
              const e = [];
              let n = "#" === t[0] ? e.push("#") : 0;
              for (; n < t.length; n += 2) {
                if (t[n] !== t[n + 1]) return t;
                e.push(t[n]);
              }
              return e.join("");
            })(
              "#" +
                e(t.r) +
                e(t.g) +
                e(t.b) +
                (null == t.a || t.a >= 1 ? "" : e(255 * t.a))
            );
          })(t)
        : "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")"
      : "transparent";
  }
  function ot(t) {
    return t ? "url(#" + t + ")" : "none";
  }
  !(function () {
    for (
      var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0;
      n < e.length && !window.requestAnimationFrame;
      ++n
    )
      (window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"]),
        (window.cancelAnimationFrame =
          window[e[n] + "CancelAnimationFrame"] ||
          window[e[n] + "CancelRequestAnimationFrame"]);
    window.requestAnimationFrame ||
      ((window.requestAnimationFrame = function (e) {
        var n = Date.now(),
          r = Math.max(0, 16 - (n - t)),
          i = window.setTimeout(function () {
            e(n + r);
          }, r);
        return (t = n + r), i;
      }),
      (window.cancelAnimationFrame = window.clearTimeout));
  })();
  var ut = {
      f: null,
      i: P,
      u: (t, e) => (n) => {
        const r = e(n);
        t.setAttribute("rx", nt(r.x)), t.setAttribute("ry", nt(r.y));
      },
    },
    lt = {
      f: null,
      i: function (t, e, n) {
        return 0 === t
          ? e
          : 1 === t
          ? n
          : { width: M(t, e.width, n.width), height: M(t, e.height, n.height) };
      },
      u: (t, e) => (n) => {
        const r = e(n);
        t.setAttribute("width", nt(r.width)),
          t.setAttribute("height", nt(r.height));
      },
    };
  Object.freeze({ M: 2, L: 2, Z: 0, H: 1, V: 1, C: 6, Q: 4, T: 2, S: 4, A: 7 });
  let at = {},
    ct = null;
  function ht(t) {
    let e = (function () {
      if (ct) return ct;
      if ("object" != typeof document || !document.createElementNS) return {};
      let t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      return t && t.style
        ? ((t.style.position = "absolute"),
          (t.style.opacity = "0.01"),
          (t.style.zIndex = "-9999"),
          (t.style.left = "-9999px"),
          (t.style.width = "1px"),
          (t.style.height = "1px"),
          (ct = { svg: t }),
          ct)
        : {};
    })().svg;
    if (!e)
      return function (t) {
        return null;
      };
    let n = document.createElementNS(e.namespaceURI, "path");
    n.setAttributeNS(null, "d", t),
      n.setAttributeNS(null, "fill", "none"),
      n.setAttributeNS(null, "stroke", "none"),
      e.appendChild(n);
    let r = n.getTotalLength();
    return function (t) {
      let e = n.getPointAtLength(r * t);
      return { x: e.x, y: e.y };
    };
  }
  function ft(t, e, n, r, i = 1) {
    let s = (function (t) {
      return at[t] ? at[t] : (at[t] = ht(t));
    })(
      (function (t, e, n, r) {
        if (!t || !r) return !1;
        let i = ["M", t.x, t.y];
        if (
          (e &&
            n &&
            (i.push("C"), i.push(e.x), i.push(e.y), i.push(n.x), i.push(n.y)),
          e ? !n : n)
        ) {
          let t = e || n;
          i.push("Q"), i.push(t.x), i.push(t.y);
        }
        return e || n || i.push("L"), i.push(r.x), i.push(r.y), i.join(" ");
      })(t, e, n, r)
    );
    try {
      return s(i);
    } catch (t) {
      return null;
    }
  }
  function dt(t, e, n) {
    return t + (e - t) * n;
  }
  function gt(t, e, n, r = !1) {
    const i = { x: dt(t.x, e.x, n), y: dt(t.y, e.y, n) };
    return (
      r &&
        (i.a = (function (t, e) {
          return Math.atan2(e.y - t.y, e.x - t.x);
        })(t, e)),
      i
    );
  }
  function pt(t, e, n, r) {
    const i = 1 - r;
    return i * i * t + 2 * i * r * e + r * r * n;
  }
  function yt(t, e, n, r) {
    return 2 * (1 - r) * (e - t) + 2 * r * (n - e);
  }
  function mt(t, e, n, r, i = !1) {
    let s = ft(t, e, null, n, r);
    return (
      s || (s = { x: pt(t.x, e.x, n.x, r), y: pt(t.y, e.y, n.y, r) }),
      i &&
        (s.a = (function (t, e, n, r) {
          return Math.atan2(yt(t.y, e.y, n.y, r), yt(t.x, e.x, n.x, r));
        })(t, e, n, r)),
      s
    );
  }
  function _t(t, e, n, r, i) {
    const s = i * i;
    return (
      i * s * (r - t + 3 * (e - n)) +
      3 * s * (t + n - 2 * e) +
      3 * i * (e - t) +
      t
    );
  }
  function bt(t, e, n, r, i) {
    const s = 1 - i;
    return 3 * (s * s * (e - t) + 2 * s * i * (n - e) + i * i * (r - n));
  }
  function vt(t, e, n, r, i, s = !1) {
    let o = ft(t, e, n, r, i);
    return (
      o || (o = { x: _t(t.x, e.x, n.x, r.x, i), y: _t(t.y, e.y, n.y, r.y, i) }),
      s &&
        (o.a = (function (t, e, n, r, i) {
          return Math.atan2(
            bt(t.y, e.y, n.y, r.y, i),
            bt(t.x, e.x, n.x, r.x, i)
          );
        })(t, e, n, r, i)),
      o
    );
  }
  function wt(t, e, n, r = !1) {
    if (At(e)) {
      if (kt(n)) return mt(e, n.start, n, t, r);
    } else if (At(n)) {
      if (Et(e)) return mt(e, e.end, n, t, r);
    } else {
      if (Et(e))
        return kt(n) ? vt(e, e.end, n.start, n, t, r) : mt(e, e.end, n, t, r);
      if (kt(n)) return mt(e, n.start, n, t, r);
    }
    return gt(e, n, t, r);
  }
  function xt(t, e, n) {
    const r = wt(t, e, n, !0);
    return (
      (r.a = u(
        (function (t, e = !1) {
          return e ? t + Math.PI : t;
        })(r.a)
      )),
      r
    );
  }
  function At(t) {
    return !t.type || "corner" === t.type;
  }
  function kt(t) {
    return null != t.start && !At(t);
  }
  function Et(t) {
    return null != t.end && !At(t);
  }
  const St = new (class {
    constructor(t = 1, e = 0, n = 0, r = 1, i = 0, s = 0) {
      (this.m = [t, e, n, r, i, s]),
        (this.i = null),
        (this.w = null),
        (this.s = null);
    }
    get determinant() {
      const t = this.m;
      return t[0] * t[3] - t[1] * t[2];
    }
    get isIdentity() {
      if (null === this.i) {
        const t = this.m;
        this.i =
          1 === t[0] &&
          0 === t[1] &&
          0 === t[2] &&
          1 === t[3] &&
          0 === t[4] &&
          0 === t[5];
      }
      return this.i;
    }
    point(t, e) {
      const n = this.m;
      return { x: n[0] * t + n[2] * e + n[4], y: n[1] * t + n[3] * e + n[5] };
    }
    translateSelf(t = 0, e = 0) {
      if (!t && !e) return this;
      const n = this.m;
      return (
        (n[4] += n[0] * t + n[2] * e),
        (n[5] += n[1] * t + n[3] * e),
        (this.w = this.s = this.i = null),
        this
      );
    }
    rotateSelf(t = 0) {
      if ((t %= 360)) {
        t = o(t);
        const e = _(t),
          n = b(t),
          r = this.m,
          i = r[0],
          s = r[1];
        (r[0] = i * n + r[2] * e),
          (r[1] = s * n + r[3] * e),
          (r[2] = r[2] * n - i * e),
          (r[3] = r[3] * n - s * e),
          (this.w = this.s = this.i = null);
      }
      return this;
    }
    scaleSelf(t = 1, e = 1) {
      if (1 !== t || 1 !== e) {
        const n = this.m;
        (n[0] *= t),
          (n[1] *= t),
          (n[2] *= e),
          (n[3] *= e),
          (this.w = this.s = this.i = null);
      }
      return this;
    }
    skewSelf(t, e) {
      if (((e %= 360), (t %= 360) || e)) {
        const n = this.m,
          r = n[0],
          i = n[1],
          s = n[2],
          u = n[3];
        t && ((t = x(o(t))), (n[2] += r * t), (n[3] += i * t)),
          e && ((e = x(o(e))), (n[0] += s * e), (n[1] += u * e)),
          (this.w = this.s = this.i = null);
      }
      return this;
    }
    resetSelf(t = 1, e = 0, n = 0, r = 1, i = 0, s = 0) {
      const o = this.m;
      return (
        (o[0] = t),
        (o[1] = e),
        (o[2] = n),
        (o[3] = r),
        (o[4] = i),
        (o[5] = s),
        (this.w = this.s = this.i = null),
        this
      );
    }
    recomposeSelf(t = null, e = null, n = null, r = null, i = null) {
      return (
        this.isIdentity || this.resetSelf(),
        t && (t.x || t.y) && this.translateSelf(t.x, t.y),
        e && this.rotateSelf(e),
        n && (n.x && this.skewSelf(n.x, 0), n.y && this.skewSelf(0, n.y)),
        !r || (1 === r.x && 1 === r.y) || this.scaleSelf(r.x, r.y),
        i && (i.x || i.y) && this.translateSelf(i.x, i.y),
        this
      );
    }
    decompose(t = 0, e = 0) {
      const n = this.m,
        i = n[0] * n[0] + n[1] * n[1],
        s = [
          [n[0], n[1]],
          [n[2], n[3]],
        ];
      let o = k(i);
      if (0 === o)
        return {
          origin: { x: r(n[4]), y: r(n[5]) },
          translate: { x: r(t), y: r(e) },
          scale: { x: 0, y: 0 },
          skew: { x: 0, y: 0 },
          rotate: 0,
        };
      (s[0][0] /= o), (s[0][1] /= o);
      const l = n[0] * n[3] - n[1] * n[2] < 0;
      l && (o = -o);
      let a = s[0][0] * s[1][0] + s[0][1] * s[1][1];
      (s[1][0] -= s[0][0] * a), (s[1][1] -= s[0][1] * a);
      let c,
        h = k(s[1][0] * s[1][0] + s[1][1] * s[1][1]);
      return 0 === h
        ? {
            origin: { x: r(n[4]), y: r(n[5]) },
            translate: { x: r(t), y: r(e) },
            scale: { x: r(o), y: 0 },
            skew: { x: 0, y: 0 },
            rotate: 0,
          }
        : ((s[1][0] /= h),
          (s[1][1] /= h),
          (a /= h),
          s[1][1] < 0
            ? ((c = u(v(s[1][1]))), s[0][1] < 0 && (c = 360 - c))
            : (c = u(w(s[0][1]))),
          l && (c = -c),
          (a = u(A(a, k(s[0][0] * s[0][0] + s[0][1] * s[0][1])))),
          l && (a = -a),
          {
            origin: { x: r(n[4]), y: r(n[5]) },
            translate: { x: r(t), y: r(e) },
            scale: { x: r(o), y: r(h) },
            skew: { x: r(a), y: 0 },
            rotate: r(c),
          });
    }
    multiply(t) {
      return this.clone().multiplySelf(t);
    }
    preMultiply(t) {
      return t.multiply(this);
    }
    multiplySelf(t) {
      const { a: e, b: n, c: r, d: i, tx: s, ty: o } = E(this.m, t.m);
      return this.resetSelf(e, n, r, i, s, o), this;
    }
    preMultiplySelf(t) {
      const { a: e, b: n, c: r, d: i, tx: s, ty: o } = E(t.m, this.m);
      return this.resetSelf(e, n, r, i, s, o), this;
    }
    clone() {
      const t = this.m;
      return new this.constructor(t[0], t[1], t[2], t[3], t[4], t[5]);
    }
    static create(t) {
      return t
        ? Array.isArray(t)
          ? new this(...t)
          : t instanceof this
          ? t.clone()
          : new this().recomposeSelf(
              t.origin,
              t.rotate,
              t.skew,
              t.scale,
              t.translate
            )
        : new this();
    }
    toString(t = " ", e = !1) {
      if (null === this.s) {
        let n = this.m.map((t) => r(t));
        e || 1 !== n[0] || 0 !== n[1] || 0 !== n[2] || 1 !== n[3]
          ? (this.s = "matrix(" + n.join(t) + ")")
          : (this.s = "translate(" + n[4] + t + n[5] + ")");
      }
      return this.s;
    }
  })();
  var It = {
      f: function (t) {
        return t ? t.join(" ") : "";
      },
      i: function (t, e, n) {
        if (0 === t) return e;
        if (1 === t) return n;
        let r = e.length;
        if (r !== n.length) return S(t, e, n);
        let i,
          s = new Array(r);
        for (let o = 0; o < r; o++) {
          if (((i = typeof e[o]), i !== typeof n[o])) return S(t, e, n);
          if ("number" === i) s[o] = I(t, e[o], n[o]);
          else {
            if (e[o] !== n[o]) return S(t, e, n);
            s[o] = e[o];
          }
        }
        return s;
      },
    },
    Mt = {
      f: null,
      i: B,
      u: (t, e) => (n) => {
        const r = e(n);
        t.setAttribute("x1", nt(r[0])),
          t.setAttribute("y1", nt(r[1])),
          t.setAttribute("x2", nt(r[2])),
          t.setAttribute("y2", nt(r[3]));
      },
    },
    Ot = { f: nt, i: I },
    Nt = { f: nt, i: O },
    Pt = {
      f: function (t, e = " ") {
        return t && t.length > 0 && (t = t.map((t) => r(t, 4))), rt(t, e);
      },
      i: function (t, e, n) {
        let i = e.length,
          s = n.length;
        if (i !== s)
          if (0 === i) (i = s), (e = j(i, 0));
          else if (0 === s) (s = i), (n = j(i, 0));
          else {
            const t = (function (t, e) {
              const n =
                (t * e) /
                (function (t, e) {
                  let n;
                  for (; e; ) (n = e), (e = t % e), (t = n);
                  return t || 1;
                })(t, e);
              return n < 0 ? -n : n;
            })(i, s);
            (e = C(e, Math.floor(t / i))),
              (n = C(n, Math.floor(t / s))),
              (i = s = t);
          }
        let o = [];
        for (let s = 0; s < i; s++) o.push(r(M(t, e[s], n[s])));
        return o;
      },
    };
  function Tt(t, e, n) {
    return t.map((t) =>
      (function (t, e, n) {
        let i = t.v;
        if (!i || "g" !== i.t || i.s || !i.v || !i.r) return t;
        const s = n.getElementById(i.r),
          o = (s && s.querySelectorAll("stop")) || [];
        return (
          (i.s = i.v.map((t, e) => {
            let n = o[e] && o[e].getAttribute("offset");
            return (n = r(parseInt(n) / 100)), { c: t, o: n };
          })),
          delete i.v,
          t
        );
      })(t, 0, n)
    );
  }
  const Rt = {
    gt: "gradientTransform",
    c: { x: "cx", y: "cy" },
    rd: "r",
    f: { x: "x1", y: "y1" },
    to: { x: "x2", y: "y2" },
  };
  function Bt(t, e, n, r, i, s, o, u) {
    return (
      Tt(t, 0, u),
      (e = (function (t, e, n) {
        let r, i, s;
        const o = t.length - 1,
          u = {};
        for (let l = 0; l <= o; l++)
          (r = t[l]),
            r.e && (r.e = e(r.e)),
            r.v &&
              ((i = r.v),
              "g" === i.t &&
                i.r &&
                ((s = n.getElementById(i.r)),
                s && (u[i.r] = { e: s, s: s.querySelectorAll("stop") })));
        return u;
      })(t, r, u)),
      (r) => {
        const i = n(r, t, jt);
        if (!i) return "none";
        if ("c" === i.t) return st(i.v);
        if ("g" === i.t) {
          if (!e[i.r]) return ot(i.r);
          const t = e[i.r];
          return (
            (function (t, e) {
              let n = t.s;
              for (let r = n.length; r < e.length; r++) {
                const e = n[n.length - 1].cloneNode();
                (e.id = Vt(e.id)),
                  t.e.appendChild(e),
                  (n = t.s = t.e.querySelectorAll("stop"));
              }
              for (let t = 0, r = n.length, i = e.length - 1; t < r; t++)
                n[t].setAttribute("stop-color", st(e[Math.min(t, i)].c)),
                  n[t].setAttribute("offset", e[Math.min(t, i)].o);
            })(t, i.s),
            Object.keys(Rt).forEach((e) => {
              if (void 0 === i[e]) return;
              if ("object" == typeof Rt[e])
                return void Object.keys(Rt[e]).forEach((n) => {
                  if (void 0 === i[e][n]) return;
                  const r = i[e][n],
                    s = Rt[e][n];
                  t.e.setAttribute(s, r);
                });
              const n =
                "gt" === e
                  ? ((r = i[e]),
                    Array.isArray(r) ? "matrix(" + r.join(" ") + ")" : "")
                  : i[e];
              var r;
              const s = Rt[e];
              t.e.setAttribute(s, n);
            }),
            ot(i.r)
          );
        }
        return "none";
      }
    );
  }
  function jt(t, e, n) {
    if (0 === t) return e;
    if (1 === t) return n;
    if (e && n) {
      const r = e.t;
      if (r === n.t)
        switch (e.t) {
          case "c":
            return { t: r, v: R(t, e.v, n.v) };
          case "g":
            if (e.r === n.r) {
              const i = { t: r, s: Ct(t, e.s, n.s), r: e.r };
              return (
                e.gt && n.gt && (i.gt = B(t, e.gt, n.gt)),
                e.c
                  ? ((i.c = N(t, e.c, n.c)), (i.rd = M(t, e.rd, n.rd)))
                  : e.f && ((i.f = N(t, e.f, n.f)), (i.to = N(t, e.to, n.to))),
                i
              );
            }
        }
      if (("c" === e.t && "g" === n.t) || ("c" === n.t && "g" === e.t)) {
        const r = "c" === e.t ? e : n,
          i = "g" === e.t ? { ...e } : { ...n },
          s = i.s.map((t) => ({ c: r.v, o: t.o }));
        return (i.s = "c" === e.t ? Ct(t, s, i.s) : Ct(t, i.s, s)), i;
      }
    }
    return S(t, e, n);
  }
  function Ct(t, e, n) {
    if (e.length === n.length) return e.map((e, r) => Ft(t, e, n[r]));
    const r = Math.max(e.length, n.length),
      i = [];
    for (let s = 0; s < r; s++) {
      const r = Ft(
        t,
        e[Math.min(s, e.length - 1)],
        n[Math.min(s, n.length - 1)]
      );
      i.push(r);
    }
    return i;
  }
  function Ft(t, e, n) {
    return { o: O(t, e.o, n.o || 0), c: R(t, e.c, n.c || {}) };
  }
  function Vt(t) {
    return t.replace(/-fill-([0-9]+)$/, (t, e) => "-fill-" + (+e + 1));
  }
  function Dt(t, e, n) {
    return 0 === t
      ? e
      : 1 === t
      ? n
      : {
          blur: P(t, e.blur, n.blur),
          offset: N(t, e.offset, n.offset),
          color: R(t, e.color, n.color),
        };
  }
  const Lt = {
    blur: P,
    brightness: M,
    contrast: M,
    "drop-shadow": Dt,
    "inner-shadow": Dt,
    grayscale: M,
    "hue-rotate": I,
    invert: M,
    opacity: M,
    saturate: M,
    sepia: M,
  };
  function qt(t, e, n) {
    if (0 === t) return e;
    if (1 === t) return n;
    const r = e.length;
    if (r !== n.length) return S(t, e, n);
    const i = [];
    let s;
    for (let o = 0; o < r; o++) {
      if (e[o].type !== n[o].type) return e;
      if (((s = Lt[e[o].type]), !s)) return S(t, e, n);
      i.push({ type: e.type, value: s(t, e[o].value, n[o].value) });
    }
    return i;
  }
  const zt = {
    blur: (t) =>
      t
        ? (e) => {
            t.setAttribute("stdDeviation", it(e));
          }
        : null,
    brightness: (t, e, n) =>
      (t = Gt(n, e))
        ? (e) => {
            (e = nt(e)), t.map((t) => t.setAttribute("slope", e));
          }
        : null,
    contrast: (t, e, n) =>
      (t = Gt(n, e))
        ? (e) => {
            const n = nt((1 - e) / 2);
            (e = nt(e)),
              t.map((t) => {
                t.setAttribute("slope", e), t.setAttribute("intercept", n);
              });
          }
        : null,
    "drop-shadow"(t, e, n) {
      const r = n.getElementById(e + "-blur");
      if (!r) return null;
      const i = n.getElementById(e + "-offset");
      if (!i) return null;
      const s = n.getElementById(e + "-flood");
      return s
        ? (t) => {
            r.setAttribute("stdDeviation", it(t.blur)),
              i.setAttribute("dx", nt(t.offset.x)),
              i.setAttribute("dy", nt(t.offset.y)),
              s.setAttribute("flood-color", st(t.color));
          }
        : null;
    },
    "inner-shadow"(t, e, n) {
      const r = n.getElementById(e + "-blur");
      if (!r) return null;
      const i = n.getElementById(e + "-offset");
      if (!i) return null;
      const s = n.getElementById(e + "-color-matrix");
      return s
        ? (t) => {
            r.setAttribute("stdDeviation", it(t.blur)),
              i.setAttribute("dx", nt(t.offset.x)),
              i.setAttribute("dy", nt(t.offset.y));
            const e = [
              0,
              0,
              0,
              0,
              t.color.r / 255,
              0,
              0,
              0,
              0,
              t.color.g / 255,
              0,
              0,
              0,
              0,
              t.color.b / 255,
              0,
              0,
              0,
              t.color.a,
              0,
            ];
            s.setAttribute("values", rt(e));
          }
        : null;
    },
    grayscale: (t) =>
      t
        ? (e) => {
            t.setAttribute(
              "values",
              rt(
                (function (t) {
                  return [
                    0.2126 + 0.7874 * (t = 1 - t),
                    0.7152 - 0.7152 * t,
                    0.0722 - 0.0722 * t,
                    0,
                    0,
                    0.2126 - 0.2126 * t,
                    0.7152 + 0.2848 * t,
                    0.0722 - 0.0722 * t,
                    0,
                    0,
                    0.2126 - 0.2126 * t,
                    0.7152 - 0.7152 * t,
                    0.0722 + 0.9278 * t,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                  ];
                })(e)
              )
            );
          }
        : null,
    "hue-rotate": (t) => (t ? (e) => t.setAttribute("values", nt(e)) : null),
    invert: (t, e, n) =>
      (t = Gt(n, e))
        ? (e) => {
            (e = nt(e) + " " + nt(1 - e)),
              t.map((t) => t.setAttribute("tableValues", e));
          }
        : null,
    opacity: (t, e, n) =>
      (t = n.getElementById(e + "-A"))
        ? (e) => t.setAttribute("tableValues", "0 " + nt(e))
        : null,
    saturate: (t) => (t ? (e) => t.setAttribute("values", nt(e)) : null),
    sepia: (t) =>
      t
        ? (e) =>
            t.setAttribute(
              "values",
              rt(
                (function (t) {
                  return [
                    0.393 + 0.607 * (t = 1 - t),
                    0.769 - 0.769 * t,
                    0.189 - 0.189 * t,
                    0,
                    0,
                    0.349 - 0.349 * t,
                    0.686 + 0.314 * t,
                    0.168 - 0.168 * t,
                    0,
                    0,
                    0.272 - 0.272 * t,
                    0.534 - 0.534 * t,
                    0.131 + 0.869 * t,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                  ];
                })(e)
              )
            )
        : null,
  };
  const $t = ["R", "G", "B"];
  function Gt(t, e) {
    const n = $t.map((n) => t.getElementById(e + "-" + n) || null);
    return -1 !== n.indexOf(null) ? null : n;
  }
  var Ht = {
    fill: Bt,
    "fill-opacity": Nt,
    stroke: Bt,
    "stroke-opacity": Nt,
    "stroke-width": Ot,
    "stroke-dashoffset": { f: nt, i: I },
    "stroke-dasharray": Pt,
    opacity: Nt,
    transform: function (t, e, n, r) {
      if (
        !(t = (function (t, e) {
          if (!t || "object" != typeof t) return null;
          let n = !1;
          for (const r in t)
            t.hasOwnProperty(r) &&
              (t[r] && t[r].length
                ? (t[r].forEach((t) => {
                    t.e && (t.e = e(t.e));
                  }),
                  (n = !0))
                : delete t[r]);
          return n ? t : null;
        })(t, r))
      )
        return null;
      const i = (r, i, s, o = null) =>
        t[r] ? n(i, t[r], s) : e && e[r] ? e[r] : o;
      return e && e.a && t.o
        ? (e) => {
            const r = n(e, t.o, xt);
            return St.recomposeSelf(
              r,
              i("r", e, I, 0) + r.a,
              i("k", e, N),
              i("s", e, N),
              i("t", e, N)
            ).toString();
          }
        : (t) =>
            St.recomposeSelf(
              i("o", t, wt, null),
              i("r", t, I, 0),
              i("k", t, N),
              i("s", t, N),
              i("t", t, N)
            ).toString();
    },
    "#filter": function (t, e, n, r, i, s, o, u) {
      if (!e.items || !t || !t.length) return null;
      const l = (function (t, e) {
        const n = (t = t.map((t) =>
          t && zt[t[0]]
            ? (e.getElementById(t[1]),
              zt[t[0]](e.getElementById(t[1]), t[1], e))
            : null
        )).length;
        return (e) => {
          for (let r = 0; r < n; r++) t[r] && t[r](e[r].value);
        };
      })(e.items, u);
      return l
        ? ((t = (function (t, e) {
            return t.map((t) => ((t.e = e(t.e)), t));
          })(t, r)),
          (e) => {
            l(n(e, t, qt));
          })
        : null;
    },
    "#line": Mt,
    points: { f: rt, i: B },
    d: It,
    r: Ot,
    "#size": lt,
    "#radius": ut,
    _(t, e) {
      if (Array.isArray(t)) for (let n = 0; n < t.length; n++) this[t[n]] = e;
      else this[t] = e;
    },
  };
  const Wt = {
      currentTime: "offset",
      duration: "duration",
      hasEnded: function () {
        return this.reachedToEnd();
      },
      isAlternate: "alternate",
      isPlaying: "_running",
      isRollingBack: "_rollingBack",
      state: function (t, e) {
        return e.isPlaying
          ? e.isRollingBack
            ? "rollback"
            : "playing"
          : e.hasEnded
          ? "ended"
          : "paused";
      },
      totalTime: "maxFiniteDuration",
      iterations: "iterations",
      direction: "direction",
      fill: "fill",
      isReversed: function (t, e) {
        return -1 === e.direction;
      },
      isBackwards: function (t, e) {
        return -1 === e.fill;
      },
      isInfinite: function (t, e) {
        return 0 === e.iterations;
      },
      speed: "speed",
      fps: "fps",
    },
    Ut = {
      destruct: "destruct",
      pause: "pause",
      play: function (t, e) {
        return Yt(t, e.hasEnded ? "restart" : "play", e);
      },
      restart: "restart",
      reverse: function (t, e) {
        return Yt(t, "reverse", e, [!0]);
      },
      seek: "seek",
      seekBy: "seekBy",
      seekTo: "seekTo",
      stop: "stop",
      toggle: "toggle",
      togglePlay: "toggle",
      set: "set",
    };
  function Yt(t, e, n, r = []) {
    return function () {
      const i = [...arguments];
      return i.unshift(...r), t[e].call(t, ...i), n;
    };
  }
  class Xt {
    constructor(t) {
      const e = {},
        n = ["on", "off"],
        r = {
          get: function (t, r, i) {
            return Wt[r]
              ? "function" == typeof Wt[r]
                ? Wt[r].call(t, t, i)
                : t[Wt[r]]
              : Ut[r]
              ? "function" == typeof Ut[r]
                ? Ut[r].call(t, t, i)
                : Yt(t, Ut[r], i)
              : -1 !== n.indexOf(r)
              ? e[r]
              : "ready" === r
              ? (t) => (t && t.call(i, i), i)
              : void 0;
          },
          set: function (t, r, i) {
            return -1 !== n.indexOf(r) && (e[r] = i);
          },
          ownKeys: function (t) {
            return Object.keys(Wt);
          },
          has: function (t, e) {
            return void 0 !== Wt[e];
          },
        };
      if ("function" == typeof Proxy) return new Proxy(t, r);
      const i = Object.keys(Wt).concat(Object.keys(Ut)).concat(n),
        s = {};
      return (
        i.forEach((e) => {
          const i = {
            enumerable: !1,
            configurable: !1,
            get: () => r.get(t, e, s),
          };
          -1 !== n.indexOf(e) && (i.set = (n) => r.set(t, e, n)),
            Object.defineProperty(s, e, i);
        }),
        s
      );
    }
  }
  function Kt(t) {
    t || (t = this);
    let e = {};
    (this.on = function (t, n, r = !1) {
      return (
        "function" == typeof n &&
        (t
          .split(/[, ]+/g)
          .forEach(
            (t) => ((e[t] = e[t] || []), r ? e[t].unshift(n) : e[t].push(n))
          ),
        !0)
      );
    }),
      (this.off = function (t, n) {
        for (let r in e)
          if (e.hasOwnProperty(r) && r.substr(0, t.length) === t)
            if (n)
              for (let t = 0; t < e[r].length; t++)
                e[r][t] === n && (e[r][t] = null);
            else e[r] = null;
      }),
      (this.trigger = function () {
        let n,
          [r, ...i] = [...arguments];
        t: for (let s in e)
          if (
            e.hasOwnProperty(s) &&
            e[s] &&
            (s === r || s.substr(0, r.length + 1) === r + ".")
          )
            for (let r = 0; r < (e[s] || []).length; r++)
              if (e[s][r] && ((n = e[s][r].apply(t, i)), !1 === n)) break t;
        return n;
      });
  }
  let Qt = function (t, e, n = n) {
    let r = !1,
      i = null;
    return function (s) {
      r && clearTimeout(r),
        (r = setTimeout(
          () =>
            (function () {
              let s = 0,
                o = n.innerHeight,
                u = 0,
                l = n.innerWidth,
                a = t.parentNode;
              for (; a instanceof Element; ) {
                let t = n.getComputedStyle(a);
                if ("visible" !== t.overflowY || "visible" !== t.overflowX) {
                  let e = a.getBoundingClientRect();
                  "visible" !== t.overflowY &&
                    ((s = Math.max(s, e.top)), (o = Math.min(o, e.bottom))),
                    "visible" !== t.overflowX &&
                      ((u = Math.max(u, e.left)), (l = Math.min(l, e.right)));
                }
                if (a === a.parentNode) break;
                a = a.parentNode;
              }
              r = !1;
              let c = t.getBoundingClientRect(),
                h = Math.min(c.height, Math.max(0, s - c.top)),
                f = Math.min(c.height, Math.max(0, c.bottom - o)),
                d = Math.min(c.width, Math.max(0, u - c.left)),
                g = Math.min(c.width, Math.max(0, c.right - l)),
                p = (c.height - h - f) / c.height,
                y = (c.width - d - g) / c.width,
                m = Math.round(p * y * 100);
              (null !== i && i === m) || ((i = m), e(m));
            })(),
          100
        ));
    };
  };
  class Jt {
    constructor(t, e, n) {
      const r = (function (t) {
        var e, n;
        const r =
            t &&
            1 ===
              (null === (e = t.ownerDocument) ||
              void 0 === e ||
              null === (n = e.childNodes) ||
              void 0 === n
                ? void 0
                : n.length) &&
            window.parent !== window,
          i = { el: t, window: window };
        if (!r) return i;
        let s;
        try {
          s = window.parent.document;
        } catch (t) {
          return i;
        }
        return (
          (i.window = window.parent),
          (i.el =
            Array.from(s.querySelectorAll("iframe,object")).filter(
              (t) => t.contentWindow === window
            )[0] || i.el),
          i
        );
      })(t);
      (e = Math.max(1, e || 1)),
        (e = Math.min(e, 100)),
        (this.el = r.el),
        (this._handlers = []),
        (this.onThresholdChange = n && n.call ? n : () => {}),
        (this.thresholdPercent = e || 1),
        (this.currentVisibility = null),
        (this.visibilityCalculator = Qt(
          this.el,
          this.onVisibilityUpdate.bind(this),
          r.window
        )),
        this.bindScrollWatchers(),
        this.visibilityCalculator();
    }
    bindScrollWatchers() {
      let t = this.el.parentNode;
      for (
        ;
        t &&
        (this._handlers.push({
          element: t,
          event: "scroll",
          handler: this.visibilityCalculator,
        }),
        t.addEventListener("scroll", this.visibilityCalculator),
        t !== t.parentNode && t !== document);

      )
        t = t.parentNode;
    }
    onVisibilityUpdate(t) {
      let e = this.currentVisibility >= this.thresholdPercent,
        n = t >= this.thresholdPercent;
      if (null === this.currentVisibility || e !== n)
        return (this.currentVisibility = t), void this.onThresholdChange(n);
      this.currentVisibility = t;
    }
    destruct() {
      this._handlers.forEach((t) => {
        t.element.removeEventListener(t.event, t.handler);
      });
    }
  }
  class Zt {
    static adjustLink(t) {
      var e, n;
      const r =
          t &&
          1 ===
            (null === (e = t.ownerDocument) ||
            void 0 === e ||
            null === (n = e.childNodes) ||
            void 0 === n
              ? void 0
              : n.length) &&
          window.parent !== window,
        i = null == t ? void 0 : t.firstElementChild;
      r &&
        i &&
        "a" === i.tagName &&
        !i.getAttribute("target") &&
        i.setAttributeNS(null, "target", "_parent");
    }
    static autoPlay(t, e, n, r = []) {
      if ("click" === n.start) {
        const i = () => {
          switch (n.click) {
            case "freeze":
              return !t._running && t.reachedToEnd() ? t.restart() : t.toggle();
            case "restart":
              return t.offset > 0 ? t.restart() : t.play();
            case "reverse":
              return t._running
                ? t.reverse()
                : t.reachedToEnd()
                ? 1 === t.fill
                  ? t.reverse(!0)
                  : t.restart()
                : t.play();
            case "none":
            default:
              if (t._running) return;
              return t.reachedToEnd() ? t.restart() : t.play();
          }
        };
        return (
          r.push({ element: e, event: "click", handler: i }),
          void e.addEventListener("click", i)
        );
      }
      if ("hover" === n.start) {
        const i = () =>
          t.reachedToEnd()
            ? t.restart()
            : t._rollingBack
            ? t.reverse()
            : t.play();
        r.push({ element: e, event: "mouseenter", handler: i }),
          e.addEventListener("mouseenter", i);
        const s = () => {
          switch (n.hover) {
            case "freeze":
              return t.pause();
            case "reset":
              return t.stop();
            case "reverse":
              if ((t.reverse(), t._running)) return;
              return t.play();
            case "none":
            default:
              return;
          }
        };
        return (
          r.push({ element: e, event: "mouseleave", handler: s }),
          void e.addEventListener("mouseleave", s)
        );
      }
      if ("scroll" !== n.start) "programmatic" !== n.start && t.play();
      else {
        const i = new Jt(e, n.scroll || 25, function (e) {
          e ? (t.reachedToEnd() ? t.restart() : t.play()) : t.pause();
        });
        r.push({ callback: () => i.destruct() });
      }
    }
  }
  const te = !0,
    ee = ["iterations", "speed", "fps", "direction", "fill", "alternate"];
  class ne extends class {
    _svg;
    _rootId;
    constructor(t) {
      (this._id = 0),
        (this._running = !1),
        (this._rollingBack = !1),
        (this._animations = t.animations),
        (this._settings = t.animationSettings),
        t.version < "2022-05-02" && delete this._settings.speed,
        et.forEach((t) => {
          this._settings[t.key] = this._settings[t.key] || t.def;
        }),
        (this.duration = t.animationSettings.duration),
        (this.offset = t.animationSettings.offset || 0),
        (this.rollbackStartOffset = 0),
        (this._rootId = t.root),
        (this._svg = t.svg),
        (this._originalAnimations = t.originalAnimations),
        (this._frameTimingChecker = new h(this));
    }
    get alternate() {
      return this._settings.alternate;
    }
    get fill() {
      return this._settings.fill;
    }
    get iterations() {
      return this._settings.iterations;
    }
    get direction() {
      return this._settings.direction;
    }
    get speed() {
      return this._settings.speed;
    }
    get fps() {
      return this._settings.fps;
    }
    get watermarkData() {
      return this._settings.w;
    }
    get rootId() {
      return this._rootId;
    }
    get svg() {
      return this._svg;
    }
    get originalAnimations() {
      return this._originalAnimations;
    }
    get maxFiniteDuration() {
      return this.iterations > 0
        ? this.iterations * this.duration
        : this.duration;
    }
    _apply(t, e = {}) {
      const n = this._animations,
        r = n.length;
      let i = 0;
      for (let s = 0; s < r; s++)
        e[s] ? i++ : ((e[s] = n[s](t, 1)), e[s] && i++);
      return i;
    }
    _rollback(t) {
      let e = 1 / 0,
        n = null;
      (this.rollbackStartOffset = t),
        (this._rollingBack = !0),
        (this._running = !0);
      const r = (i) => {
        if (!this._rollingBack) return;
        null == n && (n = i);
        let s = Math.round(t - (i - n) * this.speed);
        if (s > this.duration && e !== 1 / 0) {
          const t = !!this.alternate && (s / this.duration) % 2 > 1;
          let e = s % this.duration;
          (e += t ? this.duration : 0), (s = e || this.duration);
        }
        const o = (this.fps ? 1e3 / this.fps : 0) * this.speed,
          u = Math.max(0, s);
        u <= e - o && ((this.offset = u), (e = u), this._apply(u));
        const l =
          this.iterations > 0 &&
          -1 === this.fill &&
          s >= this.maxFiniteDuration;
        (s <= 0 || this.offset < s || l) && this.stop(),
          (this._id = window.requestAnimationFrame(r));
      };
      this._id = window.requestAnimationFrame(r);
    }
    _start(t = 0) {
      let e,
        n = -1 / 0;
      const r = {};
      this._running = !0;
      const i = (s) => {
        e ??= s;
        const o = Math.round((s - e) * this.speed + t),
          u = (this.fps ? 1e3 / this.fps : 0) * this.speed;
        if (o >= n + u && !this._rollingBack) {
          this._frameTimingChecker.checkFrame(s), (this.offset = o), (n = o);
          if (this._apply(o, r) === this._animations.length)
            return void this.pause(!0);
        }
        this._id = window.requestAnimationFrame(i);
      };
      this._id = window.requestAnimationFrame(i);
    }
    _pause() {
      this._id && window.cancelAnimationFrame(this._id), (this._running = !1);
    }
    play() {
      if (!this._running)
        return this._rollingBack
          ? this._rollback(this.offset)
          : this._start(this.offset);
    }
    stop() {
      this._pause(),
        (this.offset = 0),
        (this.rollbackStartOffset = 0),
        (this._rollingBack = !1),
        this._apply(0);
    }
    reachedToEnd() {
      return (
        this.iterations > 0 && this.offset >= this.iterations * this.duration
      );
    }
    restart(t = !1) {
      this.stop(t), this.play(t);
    }
    pause() {
      this._pause();
    }
    toggle() {
      return this._running
        ? this.pause()
        : this.reachedToEnd()
        ? this.restart()
        : this.play();
    }
    trigger(t, e) {}
    _adjustOffset(t = !1) {
      const e = this.alternate ? 2 * this.duration : this.duration;
      if (t) {
        if (!this._rollingBack && 0 === this.offset)
          return void (this.offset = e);
        this._rollingBack && (this.offset, this.maxFiniteDuration);
      }
      !this._rollingBack || this.rollbackStartOffset <= this.duration
        ? 0 !== this.iterations &&
          (this.offset = Math.min(this.offset, this.maxFiniteDuration))
        : ((this.offset =
            this.rollbackStartOffset -
            ((this.rollbackStartOffset - this.offset) % e)),
          (this.rollbackStartOffset = 0));
    }
    reverse(t = !1) {
      if (!this._running)
        return (
          this._adjustOffset(t),
          (this._rollingBack = !this._rollingBack),
          t && this.play(!1),
          void this.trigger("reverse", this.offset)
        );
      this.pause(!1, !1),
        this._adjustOffset(),
        (this._rollingBack = !this._rollingBack),
        this.play(!1),
        this.trigger("reverse", this.offset);
    }
    static build(t, e) {
      if (
        (delete t.animationSettings,
        (t.options = tt(t.options, t.root, "91c80d77")),
        t.animations.map((e) => {
          (e.settings = tt(e.s, t.root, "91c80d77")),
            delete e.s,
            t.animationSettings || (t.animationSettings = e.settings);
        }),
        Object.assign(
          t,
          { originalAnimations: t.animations },
          (function (t, e) {
            if (((L = e), !t || !t.root || !Array.isArray(t.animations)))
              return null;
            const n = K(t);
            if (!n) return null;
            const r = t.animations.map((t) => X(n, t)).filter((t) => !!t);
            return r.length ? { svg: n, animations: r } : null;
          })(t, e)
        ),
        !t)
      )
        return null;
      const n = t.options || {},
        r = new this(t);
      return { el: t.svg, options: n, player: r };
    }
    static push(t) {
      return this.build(t);
    }
    static init() {
      const t =
        window.__SVGATOR_PLAYER__ && window.__SVGATOR_PLAYER__["91c80d77"];
      Array.isArray(t) && t.splice(0).forEach((t) => this.build(t));
    }
  } {
    constructor(t) {
      super(t), (this._handlers = []);
    }
    static build(t) {
      let e = super.build(t, Ht);
      if (!e) return null;
      let { el: n, options: r, player: i } = e;
      const s = new Xt(i),
        o = new Kt(s);
      (s.on = o.on), (s.off = o.off), (i.trigger = o.trigger);
      const u =
        n.svgatorPlayer &&
        n.svgatorPlayer.ready &&
        n.svgatorPlayer.ready.call &&
        n.svgatorPlayer.ready.call();
      (n.svgatorPlayer = s),
        Zt.adjustLink(n),
        Zt.autoPlay(i, n, r, i._handlers),
        (function (t, e, n) {
          let r;
          "function" == typeof Event
            ? (r = new Event("ready"))
            : ((r = document.createEvent("Event")),
              r.initEvent("ready", !0, !0));
          if ((t.dispatchEvent(r), !n || !n.length)) return;
          n.forEach((t) => e.ready(t));
        })(n, n.svgatorPlayer, u);
    }
    play(t = true) {
      window.addEventListener("scroll", () => {
        if (
          window.scrollY >
          document.querySelector("[data-line1]").getBoundingClientRect().top
        ) {
          const e = super.play();
          return t === te && this.trigger("play", this.offset), e;
        }
      });
    }
    pause(t = !1, e = true) {
      const n = super.pause();
      return e === te && this.trigger(t ? "end" : "pause", this.offset), n;
    }
    restart() {
      const t = super.restart(!1);
      return this.trigger("restart", this.offset), t;
    }
    stop(t = true) {
      const e = super.stop();
      return t === te && this.trigger("stop", this.offset), e;
    }
    _apply(t, e = {}, n = true) {
      const r = super._apply(t);
      if (n === te) {
        const e = () => this.trigger("keyframe", t);
        window.requestAnimationFrame(e);
      }
      return r;
    }
    seekTo(t) {
      const e = this._running;
      var n, r, i;
      e && this.pause(!1, !1),
        (this.offset =
          this.iterations > 0
            ? ((n = t),
              (r = 0),
              (i = this.maxFiniteDuration),
              n < r ? r : n > i ? i : n)
            : Math.max(t, 0)),
        this._apply(this.offset),
        e && this.play(!1);
    }
    seek(t) {
      return this.seekTo(Math.round((t / 100) * this.maxFiniteDuration));
    }
    seekBy(t) {
      return this.seekTo(this.offset + t);
    }
    set(t, e) {
      if (!ee.includes(t)) return;
      const n = this._running;
      n && this.pause(!1, !1),
        (this._settings[t] = e),
        n ? this.play(!1) : this._apply(this.offset, {}, !1);
    }
    destruct() {
      this.stop(),
        this._handlers.forEach((t) => {
          t.element
            ? t.element.removeEventListener(t.event, t.handler)
            : t.callback && t.callback.call && t.callback.call();
        });
      const t = () => {},
        e = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
      e.push(...Object.getOwnPropertyNames(this)),
        e.forEach((e) => {
          "function" == typeof this[e] ? (this[e] = t) : delete this[e];
        });
    }
  }
  return ne.init(), ne;
});
(function (s, i, o, w, d, a, b) {
  (a =
    Array.from(d.querySelectorAll("svg#" + i.root)).filter(
      (n) => !n.svgatorPlayer
    )[0] || {}).svgatorPlayer = {
    ready: (function (a) {
      b = [];
      return function (c) {
        return c ? (b.push(c), a.svgatorPlayer) : b;
      };
    })(a),
  };
  w[o] = w[o] || {};
  w[o][s] = w[o][s] || [];
  w[o][s].push(i);
})(
  "91c80d77",
  {
    root: "eqTijhHBcSQ1",
    version: "2025-02-04",
    animations: [
      {
        elements: {
          eqTijhHBcSQ10: {
            "stroke-dashoffset": [
              { t: 0, v: 2674.06, e: [0.445, 0.05, 0.55, 0.95] },
              { t: 2000, v: 0 },
            ],
          },
          eqTijhHBcSQ15: {
            opacity: [
              { t: 0, v: 1 },
              { t: 1350, v: 1 },
              { t: 1360, v: 0 },
            ],
          },
        },
        s: "MDWA1ZGRhODFjMR2Q0ZDFjMGQzJYzhjZUJjZDgBxOTk5MThmOGAY4ZjhiODFjMK2M4ZDFjNGMyNZDNjOGNlU2NAkODE5OTkwOGEI4MWM4RmQzYFzRkMWMwZDNMRYzhjZWNkZDIK4MTk5RzkwOGOI4MWM1YzhjYSmNiODE5OTkwIOGI4MWMwY2JLYZDNjNGQxY2NRjMGQzYzQ4MATk5YzVjMGNiBZDJjNDhiODFMkMmNmYzRjNGEMzODE5OTkwOGGI4MWM1Y2ZkFMlQ4MTk5TDkOwOGY4ZmRj",
      },
    ],
    options: "MDPAxMDgyMjk3YQTdiNjg3OTdiPMjk0MTI5NzML3NjY4SzZiMjIk4NA|",
  },
  "__SVGATOR_PLAYER__",
  window,
  document
);

/* --------------------------------- line 2 --------------------------------- */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof __SVGATOR_DEFINE__ && __SVGATOR_DEFINE__.amd
    ? __SVGATOR_DEFINE__(e)
    : (((t =
        "undefined" != typeof globalThis
          ? globalThis
          : t || self).__SVGATOR_PLAYER__ = t.__SVGATOR_PLAYER__ || {}),
      (t.__SVGATOR_PLAYER__["91c80d77"] = e()));
})(this, function () {
  "use strict";
  class t {
    static _removeQuotes(t) {
      return `${t}`.replace(/['"]/g, "");
    }
    static _convertHEXToRGB(t) {
      const e = [
          "^",
          "\\s*",
          "#",
          "(?<red>[0-9A-Z]{1,2})",
          "(?<green>[0-9A-Z]{1,2})",
          "(?<blue>[0-9A-Z]{1,2})",
        ].join(""),
        n = t.match(new RegExp(e, "i"));
      if (!n) return t;
      const r = (t) => parseInt(t.length > 1 ? t : `${t}${t}`, 16);
      return `rgb(${r(
        n.groups.red
      )}, ${r(n.groups.green)}, ${r(n.groups.blue)})`;
    }
    static _sanitizeNumber(t) {
      return +t;
    }
    static _suffixWithUnit(t, e = "px") {
      return t.endsWith(e) ? t : `${t}${e}`;
    }
    static _roundToNDecimals(t, e = 0) {
      const n = Math.pow(10, e);
      return Math.round(t * n) / n;
    }
    static getValuesFromMatrix(t) {
      const e = [
          "^",
          "\\s*",
          "(matrix\\()",
          "(?<a>-?[0-9]*\\.?[0-9]+)",
          "\\s*",
          ",?",
          "\\s*",
          "(?<b>-?[0-9]*\\.?[0-9]+)",
          "\\s*",
          ",?",
          "\\s*",
          "(?<c>-?[0-9]*\\.?[0-9]+)",
          "\\s*",
          ",?",
          "\\s*",
          "(?<d>-?[0-9]*\\.?[0-9]+)",
          "\\s*",
          ",?",
          "\\s*",
          "(?<e>-?[0-9]*\\.?[0-9]+)",
          "\\s*",
          ",?",
          "\\s*",
          "(?<f>-?[0-9]*\\.?[0-9]+)",
          "\\)",
        ].join(""),
        n = t.match(new RegExp(e, "i"));
      if (n)
        return [
          this._sanitizeNumber(n.groups.a),
          this._sanitizeNumber(n.groups.b),
          this._sanitizeNumber(n.groups.c),
          this._sanitizeNumber(n.groups.d),
          this._sanitizeNumber(n.groups.e),
          this._sanitizeNumber(n.groups.f),
        ];
    }
    static checkAgainstDefault(t, e = "inline") {
      if (t !== e && (t = this._removeQuotes(t)) !== e) return t;
    }
    static paint(t, e = "rgb(0, 0, 0)") {
      if (t === e) return;
      if ((t = this._removeQuotes(t)) === e) return;
      if (t.startsWith("rgb")) return t;
      const n = this._convertHEXToRGB(t);
      return n === e ? void 0 : n;
    }
    static opacity(t, e = "1") {
      if (
        t !== e &&
        (t = `${this._roundToNDecimals(this._sanitizeNumber(t), 3)}`) !== e
      )
        return t;
    }
    static strokeWidth(t, e = "1px") {
      if (t === e) return;
      if (t.endsWith("px")) return t;
      t = `${this._sanitizeNumber(t)}`;
      const n = this._suffixWithUnit(t);
      return n !== e ? n : void 0;
    }
    static transform(t, e = "none") {
      if (t === e) return;
      const n = this.getValuesFromMatrix(t);
      return n ? `matrix(${n.join(", ")})` : t;
    }
    static transformOrigin(t, e = "0px 0px") {
      if (t === e) return;
      const n = [
          "^",
          "\\s*",
          "(?<x>[0-9]+)",
          "(px)?",
          "\\s*",
          ",",
          "\\s*",
          "(?<y>[0-9]+)",
          "(px)?",
        ].join(""),
        r = t.match(new RegExp(n, "i"));
      if (!r) return t;
      let i = `${this._sanitizeNumber(r.groups.x)}`;
      i = this._suffixWithUnit(i);
      let s = `${this._sanitizeNumber(r.groups.y)}`;
      s = this._suffixWithUnit(s);
      const o = `${i} ${s}`;
      return o === e ? void 0 : o;
    }
  }
  const e = r(Math.pow(10, -6)),
    n = r(Math.pow(10, -2));
  function r(t, e = 6) {
    return (function (t, e, n) {
      if (Number.isInteger(t)) return t;
      const r = Math.pow(10, e);
      return Math[n]((+t + Number.EPSILON) * r) / r;
    })(t, e, "round");
  }
  function i(t, n, r = e) {
    return Math.abs(t - n) < r;
  }
  r(Math.pow(10, -4));
  const s = Math.PI / 180;
  function o(t) {
    return t * s;
  }
  function u(t) {
    return t / s;
  }
  class l {
    static _VISUAL_PROPERTIES = Object.freeze({
      display: (e) => t.checkAgainstDefault(e),
      fill: (e) => t.paint(e),
      "fill-opacity": (e) => t.opacity(e),
      filter: (e) => t.checkAgainstDefault(e, "none"),
      opacity: (e) => t.opacity(e),
      stroke: (e) => t.paint(e, "none"),
      "stroke-opacity": (e) => t.opacity(e),
      "stroke-width": (e) => t.strokeWidth(e),
      transform: (e) => t.transform(e),
      "transform-origin": (e) => t.transformOrigin(e),
      visibility: (e) => t.checkAgainstDefault(e, "visible"),
    });
    static _keys = Object.keys(this._VISUAL_PROPERTIES);
    static _MINIMUM_PRECISION_ERROR_PERCENTAGE = n;
    static get visualProperties() {
      return this._VISUAL_PROPERTIES;
    }
    static _isWithinPrecisionErrorLimit(t, e) {
      return i(
        ((e - t) / (e || 1)) * 100,
        0,
        this._MINIMUM_PRECISION_ERROR_PERCENTAGE
      );
    }
    static _getTransformValue(e, n, r, i = window) {
      var s, o;
      const u = e.getAttribute(n),
        l =
          i.safari &&
          !i.chrome &&
          "none" ===
            (null === (s = r.getPropertyValue) || void 0 === s
              ? void 0
              : s.call(r, n))
            ? u
            : null === (o = r.getPropertyValue) || void 0 === o
            ? void 0
            : o.call(r, n);
      if (!u || !l) return;
      if (u === l) return u;
      const a = t.getValuesFromMatrix(u),
        c = t.getValuesFromMatrix(l);
      if ((null == a ? void 0 : a.length) === (null == c ? void 0 : c.length)) {
        for (let t = 0, e = a.length; t < e; t++)
          if (a[t] !== c[t] && !this._isWithinPrecisionErrorLimit(c[t], a[t]))
            return;
        return u;
      }
    }
    static _getValue(t, e, n) {
      var r, i, s, o;
      return n && "transform" === e
        ? this._getTransformValue(t, e, n)
        : (null === (r = n.getPropertyValue) || void 0 === r
            ? void 0
            : r.call(n, e)) ??
            (null === (i = t.attrs) ||
            void 0 === i ||
            null === (s = i.style) ||
            void 0 === s
              ? void 0
              : s[e]) ??
            (null === (o = t.attrs) || void 0 === o ? void 0 : o[e]);
    }
    static getProperties(t, e) {
      const n = "undefined" != typeof window && getComputedStyle(t),
        r = {};
      for (let s = 0, o = this._keys.length; s < o; s++) {
        var i;
        const o = this._keys[s];
        if (null != e && null !== (i = e[t.id]) && void 0 !== i && i[o])
          continue;
        const u = this._getValue(t, o, n);
        if (null == u) continue;
        const l = this.visualProperties[o].call(this, u);
        l && (r[o] = l);
      }
      return r;
    }
  }
  class a {
    _hash;
    _baseId;
    _watermarkIds;
    constructor(t) {
      var e, n;
      null !== (e = t.watermarkData) &&
        void 0 !== e &&
        e.length &&
        ((this._hash = t.watermarkData.shift()),
        (this._baseId =
          null === (n = t.rootId) || void 0 === n ? void 0 : n.slice(0, -1)),
        (this._watermarkIds = t.watermarkData.map((t) =>
          this.constructor._buildId(this._baseId, t)
        )));
    }
    get hash() {
      return this._hash;
    }
    get watermarkIds() {
      return this._watermarkIds;
    }
    static _buildId(t, e) {
      return `${t}${e}`;
    }
    static _buildIdSuffixes(t, e) {
      const n = t.slice(0, -1),
        r = [];
      for (let t = 0, s = e.length; t < s; t++) {
        var i;
        r.push(null === (i = e[t]) || void 0 === i ? void 0 : i.replace(n, ""));
      }
      return r;
    }
    static generateIds(t, e, n) {
      return [t, ...this._buildIdSuffixes(e, n)];
    }
  }
  class c {
    constructor(t) {
      (this._player = t), (this._watermarkDataLayer = new a(t));
    }
    get _svg() {
      return this._player.svg;
    }
    get _watermarkIds() {
      return this._watermarkDataLayer.watermarkIds;
    }
    get _animations() {
      return this._player.originalAnimations[0].elements;
    }
    get _hash() {
      return this._watermarkDataLayer.hash;
    }
    _processElement(t, e, n) {
      var r;
      if (e[t]) return;
      const i = this._svg.querySelector("#" + t),
        s =
          null == i || null === (r = i.parentElement) || void 0 === r
            ? void 0
            : r.id;
      if (i && s) {
        if (this._watermarkIds.includes(s))
          return (
            e[s] || this._processElement(s, e, n),
            (e[s].children ??= []),
            (e[t] = l.getProperties(i, this._animations)),
            void e[s].children.push(e[t])
          );
        (e[t] = l.getProperties(i, this._animations)), n.push(e[t]);
      }
    }
    _buildObfuscationJSON() {
      let t = [],
        e = {};
      for (let n = 0, r = this._watermarkIds.length; n < r; n++)
        this._processElement(this._watermarkIds[n], e, t);
      return t;
    }
    async _generateHash(t) {
      var e, n;
      const r = JSON.stringify(t),
        i = new TextEncoder().encode(r),
        s = await (null === (e = window.crypto) ||
        void 0 === e ||
        null === (n = e.subtle) ||
        void 0 === n
          ? void 0
          : n.digest("SHA-256", i));
      return (
        (s &&
          Array.from(new Uint8Array(s))
            .map((t) => t.toString(16).padStart(2, "0"))
            .join("")) ||
        this._hash
      );
    }
    async _calculateHash() {
      const t = this._buildObfuscationJSON();
      return await this._generateHash(t);
    }
    async validateHash() {
      (await this._calculateHash()) !== this._hash &&
        requestAnimationFrame(() => this._player.stop());
    }
  }
  class h {
    static _MIN_CHECK_TIME = 300;
    static _MAX_CHECK_TIME = 500;
    static _MIN_FRAMES = 3;
    _frameCounter = 0;
    _previousTimestamp = 0;
    constructor(t) {
      (this._player = t), (this._hashGenerator = new c(t));
    }
    _shouldBeChecked(t) {
      return (
        !(t - this._previousTimestamp < this.constructor._MIN_CHECK_TIME) &&
        (t - this._previousTimestamp >= this.constructor._MAX_CHECK_TIME ||
          this._frameCounter >= this.constructor._MIN_FRAMES)
      );
    }
    async checkFrame(t) {
      this._player.watermarkData &&
        (this._frameCounter++,
        this._shouldBeChecked(t) &&
          ((this._frameCounter = 0),
          (this._previousTimestamp = t),
          window.requestAnimationFrame(() =>
            this._hashGenerator.validateHash()
          )));
    }
  }
  function f(t) {
    return t;
  }
  function d(t, e, n) {
    const r = 1 - n;
    return 3 * n * r * (t * r + e * n) + n * n * n;
  }
  function g(t = 0, e = 0, n = 1, r = 1) {
    return t < 0 || t > 1 || n < 0 || n > 1
      ? null
      : i(t, e) && i(n, r)
      ? f
      : (s) => {
          if (s <= 0)
            return t > 0 ? (s * e) / t : 0 === e && n > 0 ? (s * r) / n : 0;
          if (s >= 1)
            return n < 1
              ? 1 + ((s - 1) * (r - 1)) / (n - 1)
              : 1 === n && t < 1
              ? 1 + ((s - 1) * (e - 1)) / (t - 1)
              : 1;
          let o,
            u = 0,
            l = 1;
          for (; u < l; ) {
            o = (u + l) / 2;
            const e = d(t, n, o);
            if (i(s, e)) break;
            e < s ? (u = o) : (l = o);
          }
          return d(e, r, o);
        };
  }
  function p() {
    return 1;
  }
  function y(t) {
    return 1 === t ? 1 : 0;
  }
  function m(t = 1, e = 0) {
    if (1 === t) {
      if (0 === e) return y;
      if (1 === e) return p;
    }
    const n = 1 / t;
    return (t) => (t >= 1 ? 1 : (t += e * n) - (t % n));
  }
  Number.isInteger ||
    (Number.isInteger = function (t) {
      return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
    }),
    Number.EPSILON || (Number.EPSILON = 2220446049250313e-31);
  const _ = Math.sin,
    b = Math.cos,
    v = Math.acos,
    w = Math.asin,
    x = Math.tan,
    A = Math.atan2,
    k = Math.sqrt;
  function E(t, e) {
    return {
      a: t[0] * e[0] + t[2] * e[1],
      b: t[1] * e[0] + t[3] * e[1],
      c: t[0] * e[2] + t[2] * e[3],
      d: t[1] * e[2] + t[3] * e[3],
      tx: t[0] * e[4] + t[2] * e[5] + t[4],
      ty: t[1] * e[4] + t[3] * e[5] + t[5],
    };
  }
  function S(t, e, n) {
    return t >= 0.5 ? n : e;
  }
  function I(t, e, n) {
    return 0 === t || e === n ? e : t * (n - e) + e;
  }
  function M(t, e, n) {
    const r = I(t, e, n);
    return r <= 0 ? 0 : r;
  }
  function O(t, e, n) {
    const r = I(t, e, n);
    return r <= 0 ? 0 : r >= 1 ? 1 : r;
  }
  function N(t, e, n) {
    return 0 === t ? e : 1 === t ? n : { x: I(t, e.x, n.x), y: I(t, e.y, n.y) };
  }
  function P(t, e, n) {
    return 0 === t ? e : 1 === t ? n : { x: M(t, e.x, n.x), y: M(t, e.y, n.y) };
  }
  function T(t, e, n) {
    const r = (function (t, e, n) {
      return Math.round(I(t, e, n));
    })(t, e, n);
    return r <= 0 ? 0 : r >= 255 ? 255 : r;
  }
  function R(t, e, n) {
    return 0 === t
      ? e
      : 1 === t
      ? n
      : {
          r: T(t, e.r, n.r),
          g: T(t, e.g, n.g),
          b: T(t, e.b, n.b),
          a: I(t, null == e.a ? 1 : e.a, null == n.a ? 1 : n.a),
        };
  }
  function B(t, e, n) {
    let r = e.length;
    if (r !== n.length) return S(t, e, n);
    let i = new Array(r);
    for (let s = 0; s < r; s++) i[s] = I(t, e[s], n[s]);
    return i;
  }
  function j(t, e) {
    const n = [];
    for (let r = 0; r < t; r++) n.push(e);
    return n;
  }
  function C(t, e) {
    if (--e <= 0) return t;
    const n = (t = Object.assign([], t)).length;
    do {
      for (let e = 0; e < n; e++) t.push(t[e]);
    } while (--e > 0);
    return t;
  }
  class F {
    constructor(t) {
      (this.list = t), (this.length = t.length);
    }
    setAttribute(t, e) {
      const n = this.list;
      for (let r = 0; r < this.length; r++) n[r].setAttribute(t, e);
    }
    removeAttribute(t) {
      const e = this.list;
      for (let n = 0; n < this.length; n++) e[n].removeAttribute(t);
    }
    style(t, e) {
      const n = this.list;
      for (let r = 0; r < this.length; r++) n[r].style[t] = e;
    }
  }
  const V = /-./g,
    D = (t, e) => e.toUpperCase();
  let L;
  function q(t) {
    return "function" == typeof t ? t : S;
  }
  function z(t) {
    return t
      ? "function" == typeof t
        ? t
        : Array.isArray(t)
        ? (function (t, e = f) {
            if (!Array.isArray(t)) return e;
            switch (t.length) {
              case 1:
                return m(t[0]) || e;
              case 2:
                return m(t[0], t[1]) || e;
              case 4:
                return g(t[0], t[1], t[2], t[3]) || e;
            }
            return e;
          })(t, null)
        : (function (t, e, n = f) {
            switch (t) {
              case "linear":
                return f;
              case "steps":
                return m(e.steps || 1, e.jump || 0) || n;
              case "bezier":
              case "cubic-bezier":
                return g(e.x1 || 0, e.y1 || 0, e.x2 || 0, e.y2 || 0) || n;
            }
            return n;
          })(t.type, t.value, null)
      : null;
  }
  function $(t, e, n, r = !1) {
    const i = e.length - 1;
    if (t <= e[0].t) return r ? [0, 0, e[0].v] : e[0].v;
    if (t >= e[i].t) return r ? [i, 1, e[i].v] : e[i].v;
    let s,
      o = e[0],
      u = null;
    for (s = 1; s <= i; s++) {
      if (!(t > e[s].t)) {
        u = e[s];
        break;
      }
      o = e[s];
    }
    return null == u
      ? r
        ? [i, 1, e[i].v]
        : e[i].v
      : o.t === u.t
      ? r
        ? [s, 1, u.v]
        : u.v
      : ((t = (t - o.t) / (u.t - o.t)),
        o.e && (t = o.e(t)),
        r ? [s, t, n(t, o.v, u.v)] : n(t, o.v, u.v));
  }
  function G(t, e, n = null) {
    return t && t.length
      ? "function" != typeof e
        ? null
        : ("function" != typeof n && (n = null),
          (r) => {
            let i = $(r, t, e);
            return null != i && n && (i = n(i)), i;
          })
      : null;
  }
  function H(t, e) {
    return t.t - e.t;
  }
  function W(t, e, n, r, i) {
    const s = "@" === n[0],
      o = "#" === n[0];
    let u = L[n],
      l = S;
    var a;
    switch (
      (s ? ((a = n.substr(1)), (n = a.replace(V, D))) : o && (n = n.substr(1)),
      typeof u)
    ) {
      case "function":
        if (((l = u(r, i, $, z, n, s, e, t)), o)) return l;
        break;
      case "string":
        l = G(r, q(u));
        break;
      case "object":
        if (((l = G(r, q(u.i), u.f)), l && "function" == typeof u.u))
          return u.u(e, l, n, s, t);
    }
    return l
      ? (function (t, e, n, r = !1) {
          if (r)
            return t instanceof F
              ? (r) => t.style(e, n(r))
              : (r) => (t.style[e] = n(r));
          if (Array.isArray(e)) {
            const r = e.length;
            return (i) => {
              const s = n(i);
              if (null == s)
                for (let n = 0; n < r; n++) t[n].removeAttribute(e);
              else for (let n = 0; n < r; n++) t[n].setAttribute(e, s);
            };
          }
          return (r) => {
            const i = n(r);
            null == i ? t.removeAttribute(e) : t.setAttribute(e, i);
          };
        })(e, n, l, s)
      : null;
  }
  function U(t, e, n, r) {
    if (!r || "object" != typeof r) return null;
    let i = null,
      s = null;
    return (
      Array.isArray(r)
        ? (s = (function (t) {
            if (!t || !t.length) return null;
            for (let e = 0; e < t.length; e++) t[e].e && (t[e].e = z(t[e].e));
            return t.sort(H);
          })(r))
        : ((s = r.keys), (i = r.data || null)),
      s ? W(t, e, n, s, i) : null
    );
  }
  function Y(t, e, n) {
    if (!n) return null;
    const r = [];
    for (const i in n)
      if (n.hasOwnProperty(i)) {
        const s = U(t, e, i, n[i]);
        s && r.push(s);
      }
    return r.length ? r : null;
  }
  function X(t, e) {
    if (!e.settings.duration || e.settings.duration < 0) return null;
    const n = (function (t, e) {
      if (!e) return null;
      let n = [];
      if (Array.isArray(e)) {
        const r = e.length;
        for (let i = 0; i < r; i++) {
          const r = e[i];
          if (2 !== r.length) continue;
          let s = null;
          if ("string" == typeof r[0]) s = t.getElementById(r[0]);
          else if (Array.isArray(r[0])) {
            s = [];
            for (let e = 0; e < r[0].length; e++)
              if ("string" == typeof r[0][e]) {
                const n = t.getElementById(r[0][e]);
                n && s.push(n);
              }
            s = s.length ? (1 === s.length ? s[0] : new F(s)) : null;
          }
          if (!s) continue;
          const o = Y(t, s, r[1]);
          o && (n = n.concat(o));
        }
      } else
        for (const r in e) {
          if (!e.hasOwnProperty(r)) continue;
          const i = t.getElementById(r);
          if (!i) continue;
          const s = Y(t, i, e[r]);
          s && (n = n.concat(s));
        }
      return n.length ? n : null;
    })(t, e.elements);
    return n
      ? (function (t, e) {
          const n = e.duration,
            r = t.length;
          let i = null;
          return (s, o) => {
            const u = e.iterations || 1 / 0,
              l = (e.alternate && u % 2 == 0) ^ (e.direction > 0) ? n : 0;
            let a = s % n,
              c = 1 + (s - a) / n;
            (o *= e.direction), e.alternate && c % 2 == 0 && (o = -o);
            let h = !1;
            if (c > u)
              (a = l), (h = !0), -1 === e.fill && (a = e.direction > 0 ? 0 : n);
            else if ((o < 0 && (a = n - a), a === i)) return !1;
            i = a;
            for (let e = 0; e < r; e++) t[e](a);
            return h;
          };
        })(n, e.settings)
      : null;
  }
  function K(t, e = document, n = 0) {
    const r = (function (t, e) {
      const n = e.querySelectorAll("svg");
      for (let e = 0; e < n.length; e++)
        if (n[e].id === t.root && !n[e].svgatorAnimation)
          return (n[e].svgatorAnimation = !0), n[e];
      return null;
    })(t, e);
    if (r) return r;
    if (n >= 20) return null;
    const i = (function (t) {
      const e = (t) => t.shadowRoot;
      return document
        ? Array.from(
            t.querySelectorAll(
              ":not(" +
                [
                  "a",
                  "area",
                  "audio",
                  "br",
                  "canvas",
                  "circle",
                  "datalist",
                  "embed",
                  "g",
                  "head",
                  "hr",
                  "iframe",
                  "img",
                  "input",
                  "link",
                  "object",
                  "path",
                  "polygon",
                  "rect",
                  "script",
                  "source",
                  "style",
                  "svg",
                  "title",
                  "track",
                  "video",
                ].join() +
                ")"
            )
          )
            .filter(e)
            .map(e)
        : [];
    })(e);
    for (let e = 0; e < i.length; e++) {
      const r = K(t, i[e], n + 1);
      if (r) return r;
    }
    return null;
  }
  function Q(
    t,
    e = null,
    n = Number,
    r = "undefined" != typeof BigInt && BigInt
  ) {
    const i = "0x" + (t.replace(/[^0-9a-fA-F]+/g, "") || 27);
    return e && r && n.isSafeInteger && !n.isSafeInteger(+i)
      ? (n(r(i)) % e) + e
      : +i;
  }
  function J(t, e, n) {
    return !t || !n || e > t.length
      ? t
      : t.substring(0, e) + J(t.substring(e + 1), n, n);
  }
  function Z(t, e = 27) {
    return !t || t % e ? t % e : [0, 1].includes(e) ? e : Z(t / e, e);
  }
  function tt(t, e, n) {
    if (!t || !t.length) return;
    const r = Q(n),
      i = Z(r) + 5;
    let s = J(t, Z(r, 5), i);
    return (
      (s = s.replace(/\x7c$/g, "==").replace(/\x2f$/g, "=")),
      (s = atob(s)),
      (s = s.replace(/[\x41-\x5A]/g, "")),
      (s = (function (t, e, n) {
        const r = +("0x" + t.substring(0, 4));
        t = t.substring(4);
        const i = (Q(e, r) % r) + (n % 27),
          s = [];
        for (let e = 0; e < t.length; e += 2) {
          if ("|" === t[e]) {
            const n = +("0x" + t.substring(e + 1, e + 1 + 4)) - i;
            (e += 3), s.push(n);
            continue;
          }
          const n = +("0x" + t[e] + t[e + 1]) - i;
          s.push(n);
        }
        return String.fromCharCode(...s);
      })(s, e, r)),
      (s = JSON.parse(s)),
      s
    );
  }
  const et = [
    { key: "alternate", def: !1 },
    { key: "fill", def: 1 },
    { key: "iterations", def: 0 },
    { key: "direction", def: 1 },
    { key: "speed", def: 1 },
    { key: "fps", def: 100 },
  ];
  function nt(t) {
    return r(t) + "";
  }
  function rt(t, e = " ") {
    return t && t.length ? t.map(nt).join(e) : "";
  }
  function it(t) {
    return nt(t.x) + "," + nt(t.y);
  }
  function st(t) {
    return t
      ? null == t.a || t.a >= 1
        ? (function (t) {
            if (!t) return "transparent";
            const e = (t) => parseInt(t).toString(16).padStart(2, "0");
            return (function (t) {
              const e = [];
              let n = "#" === t[0] ? e.push("#") : 0;
              for (; n < t.length; n += 2) {
                if (t[n] !== t[n + 1]) return t;
                e.push(t[n]);
              }
              return e.join("");
            })(
              "#" +
                e(t.r) +
                e(t.g) +
                e(t.b) +
                (null == t.a || t.a >= 1 ? "" : e(255 * t.a))
            );
          })(t)
        : "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")"
      : "transparent";
  }
  function ot(t) {
    return t ? "url(#" + t + ")" : "none";
  }
  !(function () {
    for (
      var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0;
      n < e.length && !window.requestAnimationFrame;
      ++n
    )
      (window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"]),
        (window.cancelAnimationFrame =
          window[e[n] + "CancelAnimationFrame"] ||
          window[e[n] + "CancelRequestAnimationFrame"]);
    window.requestAnimationFrame ||
      ((window.requestAnimationFrame = function (e) {
        var n = Date.now(),
          r = Math.max(0, 16 - (n - t)),
          i = window.setTimeout(function () {
            e(n + r);
          }, r);
        return (t = n + r), i;
      }),
      (window.cancelAnimationFrame = window.clearTimeout));
  })();
  var ut = {
      f: null,
      i: P,
      u: (t, e) => (n) => {
        const r = e(n);
        t.setAttribute("rx", nt(r.x)), t.setAttribute("ry", nt(r.y));
      },
    },
    lt = {
      f: null,
      i: function (t, e, n) {
        return 0 === t
          ? e
          : 1 === t
          ? n
          : { width: M(t, e.width, n.width), height: M(t, e.height, n.height) };
      },
      u: (t, e) => (n) => {
        const r = e(n);
        t.setAttribute("width", nt(r.width)),
          t.setAttribute("height", nt(r.height));
      },
    };
  Object.freeze({ M: 2, L: 2, Z: 0, H: 1, V: 1, C: 6, Q: 4, T: 2, S: 4, A: 7 });
  let at = {},
    ct = null;
  function ht(t) {
    let e = (function () {
      if (ct) return ct;
      if ("object" != typeof document || !document.createElementNS) return {};
      let t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      return t && t.style
        ? ((t.style.position = "absolute"),
          (t.style.opacity = "0.01"),
          (t.style.zIndex = "-9999"),
          (t.style.left = "-9999px"),
          (t.style.width = "1px"),
          (t.style.height = "1px"),
          (ct = { svg: t }),
          ct)
        : {};
    })().svg;
    if (!e)
      return function (t) {
        return null;
      };
    let n = document.createElementNS(e.namespaceURI, "path");
    n.setAttributeNS(null, "d", t),
      n.setAttributeNS(null, "fill", "none"),
      n.setAttributeNS(null, "stroke", "none"),
      e.appendChild(n);
    let r = n.getTotalLength();
    return function (t) {
      let e = n.getPointAtLength(r * t);
      return { x: e.x, y: e.y };
    };
  }
  function ft(t, e, n, r, i = 1) {
    let s = (function (t) {
      return at[t] ? at[t] : (at[t] = ht(t));
    })(
      (function (t, e, n, r) {
        if (!t || !r) return !1;
        let i = ["M", t.x, t.y];
        if (
          (e &&
            n &&
            (i.push("C"), i.push(e.x), i.push(e.y), i.push(n.x), i.push(n.y)),
          e ? !n : n)
        ) {
          let t = e || n;
          i.push("Q"), i.push(t.x), i.push(t.y);
        }
        return e || n || i.push("L"), i.push(r.x), i.push(r.y), i.join(" ");
      })(t, e, n, r)
    );
    try {
      return s(i);
    } catch (t) {
      return null;
    }
  }
  function dt(t, e, n) {
    return t + (e - t) * n;
  }
  function gt(t, e, n, r = !1) {
    const i = { x: dt(t.x, e.x, n), y: dt(t.y, e.y, n) };
    return (
      r &&
        (i.a = (function (t, e) {
          return Math.atan2(e.y - t.y, e.x - t.x);
        })(t, e)),
      i
    );
  }
  function pt(t, e, n, r) {
    const i = 1 - r;
    return i * i * t + 2 * i * r * e + r * r * n;
  }
  function yt(t, e, n, r) {
    return 2 * (1 - r) * (e - t) + 2 * r * (n - e);
  }
  function mt(t, e, n, r, i = !1) {
    let s = ft(t, e, null, n, r);
    return (
      s || (s = { x: pt(t.x, e.x, n.x, r), y: pt(t.y, e.y, n.y, r) }),
      i &&
        (s.a = (function (t, e, n, r) {
          return Math.atan2(yt(t.y, e.y, n.y, r), yt(t.x, e.x, n.x, r));
        })(t, e, n, r)),
      s
    );
  }
  function _t(t, e, n, r, i) {
    const s = i * i;
    return (
      i * s * (r - t + 3 * (e - n)) +
      3 * s * (t + n - 2 * e) +
      3 * i * (e - t) +
      t
    );
  }
  function bt(t, e, n, r, i) {
    const s = 1 - i;
    return 3 * (s * s * (e - t) + 2 * s * i * (n - e) + i * i * (r - n));
  }
  function vt(t, e, n, r, i, s = !1) {
    let o = ft(t, e, n, r, i);
    return (
      o || (o = { x: _t(t.x, e.x, n.x, r.x, i), y: _t(t.y, e.y, n.y, r.y, i) }),
      s &&
        (o.a = (function (t, e, n, r, i) {
          return Math.atan2(
            bt(t.y, e.y, n.y, r.y, i),
            bt(t.x, e.x, n.x, r.x, i)
          );
        })(t, e, n, r, i)),
      o
    );
  }
  function wt(t, e, n, r = !1) {
    if (At(e)) {
      if (kt(n)) return mt(e, n.start, n, t, r);
    } else if (At(n)) {
      if (Et(e)) return mt(e, e.end, n, t, r);
    } else {
      if (Et(e))
        return kt(n) ? vt(e, e.end, n.start, n, t, r) : mt(e, e.end, n, t, r);
      if (kt(n)) return mt(e, n.start, n, t, r);
    }
    return gt(e, n, t, r);
  }
  function xt(t, e, n) {
    const r = wt(t, e, n, !0);
    return (
      (r.a = u(
        (function (t, e = !1) {
          return e ? t + Math.PI : t;
        })(r.a)
      )),
      r
    );
  }
  function At(t) {
    return !t.type || "corner" === t.type;
  }
  function kt(t) {
    return null != t.start && !At(t);
  }
  function Et(t) {
    return null != t.end && !At(t);
  }
  const St = new (class {
    constructor(t = 1, e = 0, n = 0, r = 1, i = 0, s = 0) {
      (this.m = [t, e, n, r, i, s]),
        (this.i = null),
        (this.w = null),
        (this.s = null);
    }
    get determinant() {
      const t = this.m;
      return t[0] * t[3] - t[1] * t[2];
    }
    get isIdentity() {
      if (null === this.i) {
        const t = this.m;
        this.i =
          1 === t[0] &&
          0 === t[1] &&
          0 === t[2] &&
          1 === t[3] &&
          0 === t[4] &&
          0 === t[5];
      }
      return this.i;
    }
    point(t, e) {
      const n = this.m;
      return { x: n[0] * t + n[2] * e + n[4], y: n[1] * t + n[3] * e + n[5] };
    }
    translateSelf(t = 0, e = 0) {
      if (!t && !e) return this;
      const n = this.m;
      return (
        (n[4] += n[0] * t + n[2] * e),
        (n[5] += n[1] * t + n[3] * e),
        (this.w = this.s = this.i = null),
        this
      );
    }
    rotateSelf(t = 0) {
      if ((t %= 360)) {
        t = o(t);
        const e = _(t),
          n = b(t),
          r = this.m,
          i = r[0],
          s = r[1];
        (r[0] = i * n + r[2] * e),
          (r[1] = s * n + r[3] * e),
          (r[2] = r[2] * n - i * e),
          (r[3] = r[3] * n - s * e),
          (this.w = this.s = this.i = null);
      }
      return this;
    }
    scaleSelf(t = 1, e = 1) {
      if (1 !== t || 1 !== e) {
        const n = this.m;
        (n[0] *= t),
          (n[1] *= t),
          (n[2] *= e),
          (n[3] *= e),
          (this.w = this.s = this.i = null);
      }
      return this;
    }
    skewSelf(t, e) {
      if (((e %= 360), (t %= 360) || e)) {
        const n = this.m,
          r = n[0],
          i = n[1],
          s = n[2],
          u = n[3];
        t && ((t = x(o(t))), (n[2] += r * t), (n[3] += i * t)),
          e && ((e = x(o(e))), (n[0] += s * e), (n[1] += u * e)),
          (this.w = this.s = this.i = null);
      }
      return this;
    }
    resetSelf(t = 1, e = 0, n = 0, r = 1, i = 0, s = 0) {
      const o = this.m;
      return (
        (o[0] = t),
        (o[1] = e),
        (o[2] = n),
        (o[3] = r),
        (o[4] = i),
        (o[5] = s),
        (this.w = this.s = this.i = null),
        this
      );
    }
    recomposeSelf(t = null, e = null, n = null, r = null, i = null) {
      return (
        this.isIdentity || this.resetSelf(),
        t && (t.x || t.y) && this.translateSelf(t.x, t.y),
        e && this.rotateSelf(e),
        n && (n.x && this.skewSelf(n.x, 0), n.y && this.skewSelf(0, n.y)),
        !r || (1 === r.x && 1 === r.y) || this.scaleSelf(r.x, r.y),
        i && (i.x || i.y) && this.translateSelf(i.x, i.y),
        this
      );
    }
    decompose(t = 0, e = 0) {
      const n = this.m,
        i = n[0] * n[0] + n[1] * n[1],
        s = [
          [n[0], n[1]],
          [n[2], n[3]],
        ];
      let o = k(i);
      if (0 === o)
        return {
          origin: { x: r(n[4]), y: r(n[5]) },
          translate: { x: r(t), y: r(e) },
          scale: { x: 0, y: 0 },
          skew: { x: 0, y: 0 },
          rotate: 0,
        };
      (s[0][0] /= o), (s[0][1] /= o);
      const l = n[0] * n[3] - n[1] * n[2] < 0;
      l && (o = -o);
      let a = s[0][0] * s[1][0] + s[0][1] * s[1][1];
      (s[1][0] -= s[0][0] * a), (s[1][1] -= s[0][1] * a);
      let c,
        h = k(s[1][0] * s[1][0] + s[1][1] * s[1][1]);
      return 0 === h
        ? {
            origin: { x: r(n[4]), y: r(n[5]) },
            translate: { x: r(t), y: r(e) },
            scale: { x: r(o), y: 0 },
            skew: { x: 0, y: 0 },
            rotate: 0,
          }
        : ((s[1][0] /= h),
          (s[1][1] /= h),
          (a /= h),
          s[1][1] < 0
            ? ((c = u(v(s[1][1]))), s[0][1] < 0 && (c = 360 - c))
            : (c = u(w(s[0][1]))),
          l && (c = -c),
          (a = u(A(a, k(s[0][0] * s[0][0] + s[0][1] * s[0][1])))),
          l && (a = -a),
          {
            origin: { x: r(n[4]), y: r(n[5]) },
            translate: { x: r(t), y: r(e) },
            scale: { x: r(o), y: r(h) },
            skew: { x: r(a), y: 0 },
            rotate: r(c),
          });
    }
    multiply(t) {
      return this.clone().multiplySelf(t);
    }
    preMultiply(t) {
      return t.multiply(this);
    }
    multiplySelf(t) {
      const { a: e, b: n, c: r, d: i, tx: s, ty: o } = E(this.m, t.m);
      return this.resetSelf(e, n, r, i, s, o), this;
    }
    preMultiplySelf(t) {
      const { a: e, b: n, c: r, d: i, tx: s, ty: o } = E(t.m, this.m);
      return this.resetSelf(e, n, r, i, s, o), this;
    }
    clone() {
      const t = this.m;
      return new this.constructor(t[0], t[1], t[2], t[3], t[4], t[5]);
    }
    static create(t) {
      return t
        ? Array.isArray(t)
          ? new this(...t)
          : t instanceof this
          ? t.clone()
          : new this().recomposeSelf(
              t.origin,
              t.rotate,
              t.skew,
              t.scale,
              t.translate
            )
        : new this();
    }
    toString(t = " ", e = !1) {
      if (null === this.s) {
        let n = this.m.map((t) => r(t));
        e || 1 !== n[0] || 0 !== n[1] || 0 !== n[2] || 1 !== n[3]
          ? (this.s = "matrix(" + n.join(t) + ")")
          : (this.s = "translate(" + n[4] + t + n[5] + ")");
      }
      return this.s;
    }
  })();
  var It = {
      f: function (t) {
        return t ? t.join(" ") : "";
      },
      i: function (t, e, n) {
        if (0 === t) return e;
        if (1 === t) return n;
        let r = e.length;
        if (r !== n.length) return S(t, e, n);
        let i,
          s = new Array(r);
        for (let o = 0; o < r; o++) {
          if (((i = typeof e[o]), i !== typeof n[o])) return S(t, e, n);
          if ("number" === i) s[o] = I(t, e[o], n[o]);
          else {
            if (e[o] !== n[o]) return S(t, e, n);
            s[o] = e[o];
          }
        }
        return s;
      },
    },
    Mt = {
      f: null,
      i: B,
      u: (t, e) => (n) => {
        const r = e(n);
        t.setAttribute("x1", nt(r[0])),
          t.setAttribute("y1", nt(r[1])),
          t.setAttribute("x2", nt(r[2])),
          t.setAttribute("y2", nt(r[3]));
      },
    },
    Ot = { f: nt, i: I },
    Nt = { f: nt, i: O },
    Pt = {
      f: function (t, e = " ") {
        return t && t.length > 0 && (t = t.map((t) => r(t, 4))), rt(t, e);
      },
      i: function (t, e, n) {
        let i = e.length,
          s = n.length;
        if (i !== s)
          if (0 === i) (i = s), (e = j(i, 0));
          else if (0 === s) (s = i), (n = j(i, 0));
          else {
            const t = (function (t, e) {
              const n =
                (t * e) /
                (function (t, e) {
                  let n;
                  for (; e; ) (n = e), (e = t % e), (t = n);
                  return t || 1;
                })(t, e);
              return n < 0 ? -n : n;
            })(i, s);
            (e = C(e, Math.floor(t / i))),
              (n = C(n, Math.floor(t / s))),
              (i = s = t);
          }
        let o = [];
        for (let s = 0; s < i; s++) o.push(r(M(t, e[s], n[s])));
        return o;
      },
    };
  function Tt(t, e, n) {
    return t.map((t) =>
      (function (t, e, n) {
        let i = t.v;
        if (!i || "g" !== i.t || i.s || !i.v || !i.r) return t;
        const s = n.getElementById(i.r),
          o = (s && s.querySelectorAll("stop")) || [];
        return (
          (i.s = i.v.map((t, e) => {
            let n = o[e] && o[e].getAttribute("offset");
            return (n = r(parseInt(n) / 100)), { c: t, o: n };
          })),
          delete i.v,
          t
        );
      })(t, 0, n)
    );
  }
  const Rt = {
    gt: "gradientTransform",
    c: { x: "cx", y: "cy" },
    rd: "r",
    f: { x: "x1", y: "y1" },
    to: { x: "x2", y: "y2" },
  };
  function Bt(t, e, n, r, i, s, o, u) {
    return (
      Tt(t, 0, u),
      (e = (function (t, e, n) {
        let r, i, s;
        const o = t.length - 1,
          u = {};
        for (let l = 0; l <= o; l++)
          (r = t[l]),
            r.e && (r.e = e(r.e)),
            r.v &&
              ((i = r.v),
              "g" === i.t &&
                i.r &&
                ((s = n.getElementById(i.r)),
                s && (u[i.r] = { e: s, s: s.querySelectorAll("stop") })));
        return u;
      })(t, r, u)),
      (r) => {
        const i = n(r, t, jt);
        if (!i) return "none";
        if ("c" === i.t) return st(i.v);
        if ("g" === i.t) {
          if (!e[i.r]) return ot(i.r);
          const t = e[i.r];
          return (
            (function (t, e) {
              let n = t.s;
              for (let r = n.length; r < e.length; r++) {
                const e = n[n.length - 1].cloneNode();
                (e.id = Vt(e.id)),
                  t.e.appendChild(e),
                  (n = t.s = t.e.querySelectorAll("stop"));
              }
              for (let t = 0, r = n.length, i = e.length - 1; t < r; t++)
                n[t].setAttribute("stop-color", st(e[Math.min(t, i)].c)),
                  n[t].setAttribute("offset", e[Math.min(t, i)].o);
            })(t, i.s),
            Object.keys(Rt).forEach((e) => {
              if (void 0 === i[e]) return;
              if ("object" == typeof Rt[e])
                return void Object.keys(Rt[e]).forEach((n) => {
                  if (void 0 === i[e][n]) return;
                  const r = i[e][n],
                    s = Rt[e][n];
                  t.e.setAttribute(s, r);
                });
              const n =
                "gt" === e
                  ? ((r = i[e]),
                    Array.isArray(r) ? "matrix(" + r.join(" ") + ")" : "")
                  : i[e];
              var r;
              const s = Rt[e];
              t.e.setAttribute(s, n);
            }),
            ot(i.r)
          );
        }
        return "none";
      }
    );
  }
  function jt(t, e, n) {
    if (0 === t) return e;
    if (1 === t) return n;
    if (e && n) {
      const r = e.t;
      if (r === n.t)
        switch (e.t) {
          case "c":
            return { t: r, v: R(t, e.v, n.v) };
          case "g":
            if (e.r === n.r) {
              const i = { t: r, s: Ct(t, e.s, n.s), r: e.r };
              return (
                e.gt && n.gt && (i.gt = B(t, e.gt, n.gt)),
                e.c
                  ? ((i.c = N(t, e.c, n.c)), (i.rd = M(t, e.rd, n.rd)))
                  : e.f && ((i.f = N(t, e.f, n.f)), (i.to = N(t, e.to, n.to))),
                i
              );
            }
        }
      if (("c" === e.t && "g" === n.t) || ("c" === n.t && "g" === e.t)) {
        const r = "c" === e.t ? e : n,
          i = "g" === e.t ? { ...e } : { ...n },
          s = i.s.map((t) => ({ c: r.v, o: t.o }));
        return (i.s = "c" === e.t ? Ct(t, s, i.s) : Ct(t, i.s, s)), i;
      }
    }
    return S(t, e, n);
  }
  function Ct(t, e, n) {
    if (e.length === n.length) return e.map((e, r) => Ft(t, e, n[r]));
    const r = Math.max(e.length, n.length),
      i = [];
    for (let s = 0; s < r; s++) {
      const r = Ft(
        t,
        e[Math.min(s, e.length - 1)],
        n[Math.min(s, n.length - 1)]
      );
      i.push(r);
    }
    return i;
  }
  function Ft(t, e, n) {
    return { o: O(t, e.o, n.o || 0), c: R(t, e.c, n.c || {}) };
  }
  function Vt(t) {
    return t.replace(/-fill-([0-9]+)$/, (t, e) => "-fill-" + (+e + 1));
  }
  function Dt(t, e, n) {
    return 0 === t
      ? e
      : 1 === t
      ? n
      : {
          blur: P(t, e.blur, n.blur),
          offset: N(t, e.offset, n.offset),
          color: R(t, e.color, n.color),
        };
  }
  const Lt = {
    blur: P,
    brightness: M,
    contrast: M,
    "drop-shadow": Dt,
    "inner-shadow": Dt,
    grayscale: M,
    "hue-rotate": I,
    invert: M,
    opacity: M,
    saturate: M,
    sepia: M,
  };
  function qt(t, e, n) {
    if (0 === t) return e;
    if (1 === t) return n;
    const r = e.length;
    if (r !== n.length) return S(t, e, n);
    const i = [];
    let s;
    for (let o = 0; o < r; o++) {
      if (e[o].type !== n[o].type) return e;
      if (((s = Lt[e[o].type]), !s)) return S(t, e, n);
      i.push({ type: e.type, value: s(t, e[o].value, n[o].value) });
    }
    return i;
  }
  const zt = {
    blur: (t) =>
      t
        ? (e) => {
            t.setAttribute("stdDeviation", it(e));
          }
        : null,
    brightness: (t, e, n) =>
      (t = Gt(n, e))
        ? (e) => {
            (e = nt(e)), t.map((t) => t.setAttribute("slope", e));
          }
        : null,
    contrast: (t, e, n) =>
      (t = Gt(n, e))
        ? (e) => {
            const n = nt((1 - e) / 2);
            (e = nt(e)),
              t.map((t) => {
                t.setAttribute("slope", e), t.setAttribute("intercept", n);
              });
          }
        : null,
    "drop-shadow"(t, e, n) {
      const r = n.getElementById(e + "-blur");
      if (!r) return null;
      const i = n.getElementById(e + "-offset");
      if (!i) return null;
      const s = n.getElementById(e + "-flood");
      return s
        ? (t) => {
            r.setAttribute("stdDeviation", it(t.blur)),
              i.setAttribute("dx", nt(t.offset.x)),
              i.setAttribute("dy", nt(t.offset.y)),
              s.setAttribute("flood-color", st(t.color));
          }
        : null;
    },
    "inner-shadow"(t, e, n) {
      const r = n.getElementById(e + "-blur");
      if (!r) return null;
      const i = n.getElementById(e + "-offset");
      if (!i) return null;
      const s = n.getElementById(e + "-color-matrix");
      return s
        ? (t) => {
            r.setAttribute("stdDeviation", it(t.blur)),
              i.setAttribute("dx", nt(t.offset.x)),
              i.setAttribute("dy", nt(t.offset.y));
            const e = [
              0,
              0,
              0,
              0,
              t.color.r / 255,
              0,
              0,
              0,
              0,
              t.color.g / 255,
              0,
              0,
              0,
              0,
              t.color.b / 255,
              0,
              0,
              0,
              t.color.a,
              0,
            ];
            s.setAttribute("values", rt(e));
          }
        : null;
    },
    grayscale: (t) =>
      t
        ? (e) => {
            t.setAttribute(
              "values",
              rt(
                (function (t) {
                  return [
                    0.2126 + 0.7874 * (t = 1 - t),
                    0.7152 - 0.7152 * t,
                    0.0722 - 0.0722 * t,
                    0,
                    0,
                    0.2126 - 0.2126 * t,
                    0.7152 + 0.2848 * t,
                    0.0722 - 0.0722 * t,
                    0,
                    0,
                    0.2126 - 0.2126 * t,
                    0.7152 - 0.7152 * t,
                    0.0722 + 0.9278 * t,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                  ];
                })(e)
              )
            );
          }
        : null,
    "hue-rotate": (t) => (t ? (e) => t.setAttribute("values", nt(e)) : null),
    invert: (t, e, n) =>
      (t = Gt(n, e))
        ? (e) => {
            (e = nt(e) + " " + nt(1 - e)),
              t.map((t) => t.setAttribute("tableValues", e));
          }
        : null,
    opacity: (t, e, n) =>
      (t = n.getElementById(e + "-A"))
        ? (e) => t.setAttribute("tableValues", "0 " + nt(e))
        : null,
    saturate: (t) => (t ? (e) => t.setAttribute("values", nt(e)) : null),
    sepia: (t) =>
      t
        ? (e) =>
            t.setAttribute(
              "values",
              rt(
                (function (t) {
                  return [
                    0.393 + 0.607 * (t = 1 - t),
                    0.769 - 0.769 * t,
                    0.189 - 0.189 * t,
                    0,
                    0,
                    0.349 - 0.349 * t,
                    0.686 + 0.314 * t,
                    0.168 - 0.168 * t,
                    0,
                    0,
                    0.272 - 0.272 * t,
                    0.534 - 0.534 * t,
                    0.131 + 0.869 * t,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                  ];
                })(e)
              )
            )
        : null,
  };
  const $t = ["R", "G", "B"];
  function Gt(t, e) {
    const n = $t.map((n) => t.getElementById(e + "-" + n) || null);
    return -1 !== n.indexOf(null) ? null : n;
  }
  var Ht = {
    fill: Bt,
    "fill-opacity": Nt,
    stroke: Bt,
    "stroke-opacity": Nt,
    "stroke-width": Ot,
    "stroke-dashoffset": { f: nt, i: I },
    "stroke-dasharray": Pt,
    opacity: Nt,
    transform: function (t, e, n, r) {
      if (
        !(t = (function (t, e) {
          if (!t || "object" != typeof t) return null;
          let n = !1;
          for (const r in t)
            t.hasOwnProperty(r) &&
              (t[r] && t[r].length
                ? (t[r].forEach((t) => {
                    t.e && (t.e = e(t.e));
                  }),
                  (n = !0))
                : delete t[r]);
          return n ? t : null;
        })(t, r))
      )
        return null;
      const i = (r, i, s, o = null) =>
        t[r] ? n(i, t[r], s) : e && e[r] ? e[r] : o;
      return e && e.a && t.o
        ? (e) => {
            const r = n(e, t.o, xt);
            return St.recomposeSelf(
              r,
              i("r", e, I, 0) + r.a,
              i("k", e, N),
              i("s", e, N),
              i("t", e, N)
            ).toString();
          }
        : (t) =>
            St.recomposeSelf(
              i("o", t, wt, null),
              i("r", t, I, 0),
              i("k", t, N),
              i("s", t, N),
              i("t", t, N)
            ).toString();
    },
    "#filter": function (t, e, n, r, i, s, o, u) {
      if (!e.items || !t || !t.length) return null;
      const l = (function (t, e) {
        const n = (t = t.map((t) =>
          t && zt[t[0]]
            ? (e.getElementById(t[1]),
              zt[t[0]](e.getElementById(t[1]), t[1], e))
            : null
        )).length;
        return (e) => {
          for (let r = 0; r < n; r++) t[r] && t[r](e[r].value);
        };
      })(e.items, u);
      return l
        ? ((t = (function (t, e) {
            return t.map((t) => ((t.e = e(t.e)), t));
          })(t, r)),
          (e) => {
            l(n(e, t, qt));
          })
        : null;
    },
    "#line": Mt,
    points: { f: rt, i: B },
    d: It,
    r: Ot,
    "#size": lt,
    "#radius": ut,
    _(t, e) {
      if (Array.isArray(t)) for (let n = 0; n < t.length; n++) this[t[n]] = e;
      else this[t] = e;
    },
  };
  const Wt = {
      currentTime: "offset",
      duration: "duration",
      hasEnded: function () {
        return this.reachedToEnd();
      },
      isAlternate: "alternate",
      isPlaying: "_running",
      isRollingBack: "_rollingBack",
      state: function (t, e) {
        return e.isPlaying
          ? e.isRollingBack
            ? "rollback"
            : "playing"
          : e.hasEnded
          ? "ended"
          : "paused";
      },
      totalTime: "maxFiniteDuration",
      iterations: "iterations",
      direction: "direction",
      fill: "fill",
      isReversed: function (t, e) {
        return -1 === e.direction;
      },
      isBackwards: function (t, e) {
        return -1 === e.fill;
      },
      isInfinite: function (t, e) {
        return 0 === e.iterations;
      },
      speed: "speed",
      fps: "fps",
    },
    Ut = {
      destruct: "destruct",
      pause: "pause",
      play: function (t, e) {
        return Yt(t, e.hasEnded ? "restart" : "play", e);
      },
      restart: "restart",
      reverse: function (t, e) {
        return Yt(t, "reverse", e, [!0]);
      },
      seek: "seek",
      seekBy: "seekBy",
      seekTo: "seekTo",
      stop: "stop",
      toggle: "toggle",
      togglePlay: "toggle",
      set: "set",
    };
  function Yt(t, e, n, r = []) {
    return function () {
      const i = [...arguments];
      return i.unshift(...r), t[e].call(t, ...i), n;
    };
  }
  class Xt {
    constructor(t) {
      const e = {},
        n = ["on", "off"],
        r = {
          get: function (t, r, i) {
            return Wt[r]
              ? "function" == typeof Wt[r]
                ? Wt[r].call(t, t, i)
                : t[Wt[r]]
              : Ut[r]
              ? "function" == typeof Ut[r]
                ? Ut[r].call(t, t, i)
                : Yt(t, Ut[r], i)
              : -1 !== n.indexOf(r)
              ? e[r]
              : "ready" === r
              ? (t) => (t && t.call(i, i), i)
              : void 0;
          },
          set: function (t, r, i) {
            return -1 !== n.indexOf(r) && (e[r] = i);
          },
          ownKeys: function (t) {
            return Object.keys(Wt);
          },
          has: function (t, e) {
            return void 0 !== Wt[e];
          },
        };
      if ("function" == typeof Proxy) return new Proxy(t, r);
      const i = Object.keys(Wt).concat(Object.keys(Ut)).concat(n),
        s = {};
      return (
        i.forEach((e) => {
          const i = {
            enumerable: !1,
            configurable: !1,
            get: () => r.get(t, e, s),
          };
          -1 !== n.indexOf(e) && (i.set = (n) => r.set(t, e, n)),
            Object.defineProperty(s, e, i);
        }),
        s
      );
    }
  }
  function Kt(t) {
    t || (t = this);
    let e = {};
    (this.on = function (t, n, r = !1) {
      return (
        "function" == typeof n &&
        (t
          .split(/[, ]+/g)
          .forEach(
            (t) => ((e[t] = e[t] || []), r ? e[t].unshift(n) : e[t].push(n))
          ),
        !0)
      );
    }),
      (this.off = function (t, n) {
        for (let r in e)
          if (e.hasOwnProperty(r) && r.substr(0, t.length) === t)
            if (n)
              for (let t = 0; t < e[r].length; t++)
                e[r][t] === n && (e[r][t] = null);
            else e[r] = null;
      }),
      (this.trigger = function () {
        let n,
          [r, ...i] = [...arguments];
        t: for (let s in e)
          if (
            e.hasOwnProperty(s) &&
            e[s] &&
            (s === r || s.substr(0, r.length + 1) === r + ".")
          )
            for (let r = 0; r < (e[s] || []).length; r++)
              if (e[s][r] && ((n = e[s][r].apply(t, i)), !1 === n)) break t;
        return n;
      });
  }
  let Qt = function (t, e, n = n) {
    let r = !1,
      i = null;
    return function (s) {
      r && clearTimeout(r),
        (r = setTimeout(
          () =>
            (function () {
              let s = 0,
                o = n.innerHeight,
                u = 0,
                l = n.innerWidth,
                a = t.parentNode;
              for (; a instanceof Element; ) {
                let t = n.getComputedStyle(a);
                if ("visible" !== t.overflowY || "visible" !== t.overflowX) {
                  let e = a.getBoundingClientRect();
                  "visible" !== t.overflowY &&
                    ((s = Math.max(s, e.top)), (o = Math.min(o, e.bottom))),
                    "visible" !== t.overflowX &&
                      ((u = Math.max(u, e.left)), (l = Math.min(l, e.right)));
                }
                if (a === a.parentNode) break;
                a = a.parentNode;
              }
              r = !1;
              let c = t.getBoundingClientRect(),
                h = Math.min(c.height, Math.max(0, s - c.top)),
                f = Math.min(c.height, Math.max(0, c.bottom - o)),
                d = Math.min(c.width, Math.max(0, u - c.left)),
                g = Math.min(c.width, Math.max(0, c.right - l)),
                p = (c.height - h - f) / c.height,
                y = (c.width - d - g) / c.width,
                m = Math.round(p * y * 100);
              (null !== i && i === m) || ((i = m), e(m));
            })(),
          100
        ));
    };
  };
  class Jt {
    constructor(t, e, n) {
      const r = (function (t) {
        var e, n;
        const r =
            t &&
            1 ===
              (null === (e = t.ownerDocument) ||
              void 0 === e ||
              null === (n = e.childNodes) ||
              void 0 === n
                ? void 0
                : n.length) &&
            window.parent !== window,
          i = { el: t, window: window };
        if (!r) return i;
        let s;
        try {
          s = window.parent.document;
        } catch (t) {
          return i;
        }
        return (
          (i.window = window.parent),
          (i.el =
            Array.from(s.querySelectorAll("iframe,object")).filter(
              (t) => t.contentWindow === window
            )[0] || i.el),
          i
        );
      })(t);
      (e = Math.max(1, e || 1)),
        (e = Math.min(e, 100)),
        (this.el = r.el),
        (this._handlers = []),
        (this.onThresholdChange = n && n.call ? n : () => {}),
        (this.thresholdPercent = e || 1),
        (this.currentVisibility = null),
        (this.visibilityCalculator = Qt(
          this.el,
          this.onVisibilityUpdate.bind(this),
          r.window
        )),
        this.bindScrollWatchers(),
        this.visibilityCalculator();
    }
    bindScrollWatchers() {
      let t = this.el.parentNode;
      for (
        ;
        t &&
        (this._handlers.push({
          element: t,
          event: "scroll",
          handler: this.visibilityCalculator,
        }),
        t.addEventListener("scroll", this.visibilityCalculator),
        t !== t.parentNode && t !== document);

      )
        t = t.parentNode;
    }
    onVisibilityUpdate(t) {
      let e = this.currentVisibility >= this.thresholdPercent,
        n = t >= this.thresholdPercent;
      if (null === this.currentVisibility || e !== n)
        return (this.currentVisibility = t), void this.onThresholdChange(n);
      this.currentVisibility = t;
    }
    destruct() {
      this._handlers.forEach((t) => {
        t.element.removeEventListener(t.event, t.handler);
      });
    }
  }
  class Zt {
    static adjustLink(t) {
      var e, n;
      const r =
          t &&
          1 ===
            (null === (e = t.ownerDocument) ||
            void 0 === e ||
            null === (n = e.childNodes) ||
            void 0 === n
              ? void 0
              : n.length) &&
          window.parent !== window,
        i = null == t ? void 0 : t.firstElementChild;
      r &&
        i &&
        "a" === i.tagName &&
        !i.getAttribute("target") &&
        i.setAttributeNS(null, "target", "_parent");
    }
    static autoPlay(t, e, n, r = []) {
      if ("click" === n.start) {
        const i = () => {
          switch (n.click) {
            case "freeze":
              return !t._running && t.reachedToEnd() ? t.restart() : t.toggle();
            case "restart":
              return t.offset > 0 ? t.restart() : t.play();
            case "reverse":
              return t._running
                ? t.reverse()
                : t.reachedToEnd()
                ? 1 === t.fill
                  ? t.reverse(!0)
                  : t.restart()
                : t.play();
            case "none":
            default:
              if (t._running) return;
              return t.reachedToEnd() ? t.restart() : t.play();
          }
        };
        return (
          r.push({ element: e, event: "click", handler: i }),
          void e.addEventListener("click", i)
        );
      }
      if ("hover" === n.start) {
        const i = () =>
          t.reachedToEnd()
            ? t.restart()
            : t._rollingBack
            ? t.reverse()
            : t.play();
        r.push({ element: e, event: "mouseenter", handler: i }),
          e.addEventListener("mouseenter", i);
        const s = () => {
          switch (n.hover) {
            case "freeze":
              return t.pause();
            case "reset":
              return t.stop();
            case "reverse":
              if ((t.reverse(), t._running)) return;
              return t.play();
            case "none":
            default:
              return;
          }
        };
        return (
          r.push({ element: e, event: "mouseleave", handler: s }),
          void e.addEventListener("mouseleave", s)
        );
      }
      if ("scroll" !== n.start) "programmatic" !== n.start && t.play();
      else {
        const i = new Jt(e, n.scroll || 25, function (e) {
          e ? (t.reachedToEnd() ? t.restart() : t.play()) : t.pause();
        });
        r.push({ callback: () => i.destruct() });
      }
    }
  }
  const te = !0,
    ee = ["iterations", "speed", "fps", "direction", "fill", "alternate"];
  class ne extends class {
    _svg;
    _rootId;
    constructor(t) {
      (this._id = 0),
        (this._running = !1),
        (this._rollingBack = !1),
        (this._animations = t.animations),
        (this._settings = t.animationSettings),
        t.version < "2022-05-02" && delete this._settings.speed,
        et.forEach((t) => {
          this._settings[t.key] = this._settings[t.key] || t.def;
        }),
        (this.duration = t.animationSettings.duration),
        (this.offset = t.animationSettings.offset || 0),
        (this.rollbackStartOffset = 0),
        (this._rootId = t.root),
        (this._svg = t.svg),
        (this._originalAnimations = t.originalAnimations),
        (this._frameTimingChecker = new h(this));
    }
    get alternate() {
      return this._settings.alternate;
    }
    get fill() {
      return this._settings.fill;
    }
    get iterations() {
      return this._settings.iterations;
    }
    get direction() {
      return this._settings.direction;
    }
    get speed() {
      return this._settings.speed;
    }
    get fps() {
      return this._settings.fps;
    }
    get watermarkData() {
      return this._settings.w;
    }
    get rootId() {
      return this._rootId;
    }
    get svg() {
      return this._svg;
    }
    get originalAnimations() {
      return this._originalAnimations;
    }
    get maxFiniteDuration() {
      return this.iterations > 0
        ? this.iterations * this.duration
        : this.duration;
    }
    _apply(t, e = {}) {
      const n = this._animations,
        r = n.length;
      let i = 0;
      for (let s = 0; s < r; s++)
        e[s] ? i++ : ((e[s] = n[s](t, 1)), e[s] && i++);
      return i;
    }
    _rollback(t) {
      let e = 1 / 0,
        n = null;
      (this.rollbackStartOffset = t),
        (this._rollingBack = !0),
        (this._running = !0);
      const r = (i) => {
        if (!this._rollingBack) return;
        null == n && (n = i);
        let s = Math.round(t - (i - n) * this.speed);
        if (s > this.duration && e !== 1 / 0) {
          const t = !!this.alternate && (s / this.duration) % 2 > 1;
          let e = s % this.duration;
          (e += t ? this.duration : 0), (s = e || this.duration);
        }
        const o = (this.fps ? 1e3 / this.fps : 0) * this.speed,
          u = Math.max(0, s);
        u <= e - o && ((this.offset = u), (e = u), this._apply(u));
        const l =
          this.iterations > 0 &&
          -1 === this.fill &&
          s >= this.maxFiniteDuration;
        (s <= 0 || this.offset < s || l) && this.stop(),
          (this._id = window.requestAnimationFrame(r));
      };
      this._id = window.requestAnimationFrame(r);
    }
    _start(t = 0) {
      let e,
        n = -1 / 0;
      const r = {};
      this._running = !0;
      const i = (s) => {
        e ??= s;
        const o = Math.round((s - e) * this.speed + t),
          u = (this.fps ? 1e3 / this.fps : 0) * this.speed;
        if (o >= n + u && !this._rollingBack) {
          this._frameTimingChecker.checkFrame(s), (this.offset = o), (n = o);
          if (this._apply(o, r) === this._animations.length)
            return void this.pause(!0);
        }
        this._id = window.requestAnimationFrame(i);
      };
      this._id = window.requestAnimationFrame(i);
    }
    _pause() {
      this._id && window.cancelAnimationFrame(this._id), (this._running = !1);
    }
    play() {
      if (!this._running)
        return this._rollingBack
          ? this._rollback(this.offset)
          : this._start(this.offset);
    }
    stop() {
      this._pause(),
        (this.offset = 0),
        (this.rollbackStartOffset = 0),
        (this._rollingBack = !1),
        this._apply(0);
    }
    reachedToEnd() {
      return (
        this.iterations > 0 && this.offset >= this.iterations * this.duration
      );
    }
    restart(t = !1) {
      this.stop(t), this.play(t);
    }
    pause() {
      this._pause();
    }
    toggle() {
      return this._running
        ? this.pause()
        : this.reachedToEnd()
        ? this.restart()
        : this.play();
    }
    trigger(t, e) {}
    _adjustOffset(t = !1) {
      const e = this.alternate ? 2 * this.duration : this.duration;
      if (t) {
        if (!this._rollingBack && 0 === this.offset)
          return void (this.offset = e);
        this._rollingBack && (this.offset, this.maxFiniteDuration);
      }
      !this._rollingBack || this.rollbackStartOffset <= this.duration
        ? 0 !== this.iterations &&
          (this.offset = Math.min(this.offset, this.maxFiniteDuration))
        : ((this.offset =
            this.rollbackStartOffset -
            ((this.rollbackStartOffset - this.offset) % e)),
          (this.rollbackStartOffset = 0));
    }
    reverse(t = !1) {
      if (!this._running)
        return (
          this._adjustOffset(t),
          (this._rollingBack = !this._rollingBack),
          t && this.play(!1),
          void this.trigger("reverse", this.offset)
        );
      this.pause(!1, !1),
        this._adjustOffset(),
        (this._rollingBack = !this._rollingBack),
        this.play(!1),
        this.trigger("reverse", this.offset);
    }
    static build(t, e) {
      if (
        (delete t.animationSettings,
        (t.options = tt(t.options, t.root, "91c80d77")),
        t.animations.map((e) => {
          (e.settings = tt(e.s, t.root, "91c80d77")),
            delete e.s,
            t.animationSettings || (t.animationSettings = e.settings);
        }),
        Object.assign(
          t,
          { originalAnimations: t.animations },
          (function (t, e) {
            if (((L = e), !t || !t.root || !Array.isArray(t.animations)))
              return null;
            const n = K(t);
            if (!n) return null;
            const r = t.animations.map((t) => X(n, t)).filter((t) => !!t);
            return r.length ? { svg: n, animations: r } : null;
          })(t, e)
        ),
        !t)
      )
        return null;
      const n = t.options || {},
        r = new this(t);
      return { el: t.svg, options: n, player: r };
    }
    static push(t) {
      return this.build(t);
    }
    static init() {
      const t =
        window.__SVGATOR_PLAYER__ && window.__SVGATOR_PLAYER__["91c80d77"];
      Array.isArray(t) && t.splice(0).forEach((t) => this.build(t));
    }
  } {
    constructor(t) {
      super(t), (this._handlers = []);
    }
    static build(t) {
      let e = super.build(t, Ht);
      if (!e) return null;
      let { el: n, options: r, player: i } = e;
      const s = new Xt(i),
        o = new Kt(s);
      (s.on = o.on), (s.off = o.off), (i.trigger = o.trigger);
      const u =
        n.svgatorPlayer &&
        n.svgatorPlayer.ready &&
        n.svgatorPlayer.ready.call &&
        n.svgatorPlayer.ready.call();
      (n.svgatorPlayer = s),
        Zt.adjustLink(n),
        Zt.autoPlay(i, n, r, i._handlers),
        (function (t, e, n) {
          let r;
          "function" == typeof Event
            ? (r = new Event("ready"))
            : ((r = document.createEvent("Event")),
              r.initEvent("ready", !0, !0));
          if ((t.dispatchEvent(r), !n || !n.length)) return;
          n.forEach((t) => e.ready(t));
        })(n, n.svgatorPlayer, u);
    }
    play(t = true) {
      window.addEventListener("scroll", () => {
        if (
          window.scrollY >
          document.querySelector("[data-line2]").getBoundingClientRect().top + 200
        ) {
          const e = super.play();
          return t === te && this.trigger("play", this.offset), e;
        }
      });
    }
    pause(t = !1, e = true) {
      const n = super.pause();
      return e === te && this.trigger(t ? "end" : "pause", this.offset), n;
    }
    restart() {
      const t = super.restart(!1);
      return this.trigger("restart", this.offset), t;
    }
    stop(t = true) {
      const e = super.stop();
      return t === te && this.trigger("stop", this.offset), e;
    }
    _apply(t, e = {}, n = true) {
      const r = super._apply(t);
      if (n === te) {
        const e = () => this.trigger("keyframe", t);
        window.requestAnimationFrame(e);
      }
      return r;
    }
    seekTo(t) {
      const e = this._running;
      var n, r, i;
      e && this.pause(!1, !1),
        (this.offset =
          this.iterations > 0
            ? ((n = t),
              (r = 0),
              (i = this.maxFiniteDuration),
              n < r ? r : n > i ? i : n)
            : Math.max(t, 0)),
        this._apply(this.offset),
        e && this.play(!1);
    }
    seek(t) {
      return this.seekTo(Math.round((t / 100) * this.maxFiniteDuration));
    }
    seekBy(t) {
      return this.seekTo(this.offset + t);
    }
    set(t, e) {
      if (!ee.includes(t)) return;
      const n = this._running;
      n && this.pause(!1, !1),
        (this._settings[t] = e),
        n ? this.play(!1) : this._apply(this.offset, {}, !1);
    }
    destruct() {
      this.stop(),
        this._handlers.forEach((t) => {
          t.element
            ? t.element.removeEventListener(t.event, t.handler)
            : t.callback && t.callback.call && t.callback.call();
        });
      const t = () => {},
        e = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
      e.push(...Object.getOwnPropertyNames(this)),
        e.forEach((e) => {
          "function" == typeof this[e] ? (this[e] = t) : delete this[e];
        });
    }
  }
  return ne.init(), ne;
});
(function (s, i, o, w, d, a, b) {
  (a =
    Array.from(d.querySelectorAll("svg#" + i.root)).filter(
      (n) => !n.svgatorPlayer
    )[0] || {}).svgatorPlayer = {
    ready: (function (a) {
      b = [];
      return function (c) {
        return c ? (b.push(c), a.svgatorPlayer) : b;
      };
    })(a),
  };
  w[o] = w[o] || {};
  w[o][s] = w[o][s] || [];
  w[o][s].push(i);
})(
  "91c80d77",
  {
    root: "ejlWPGgZYUt1",
    version: "2025-02-04",
    animations: [
      {
        elements: {
          ejlWPGgZYUt10: {
            "stroke-dashoffset": [
              { t: 0, v: 2507.94, e: [0.445, 0.05, 0.55, 0.95] },
              { t: 2000, v: 0 },
            ],
          },
          ejlWPGgZYUt15: {
            opacity: [
              { t: 0, v: 1 },
              { t: 1380, v: 1 },
              { t: 1390, v: 0 },
            ],
          },
        },
        s: "MDPA1ZGE4NGY5MEWEyOWY4ZWExXOTY5YzliNGZKBNjdWNWY1ZDSVkNWQ1OUw0ZMjkxOTY5ZjkySOTBhMTk2OWMP5YjRmNjc1ZTCU5NGY5NmExOWTI5ZjhlYTE5QNjljOWJhMDRAmNjc1ZTU5NGLZUOTM5Njk5OMTk0ZjY3NWU1VOVRWNGY4ZTkL5YTE5MjlmOWCI4ZWExOTI0ZKjY3OTM4ZTk5SVWEwSDkyNTkI0ZmEwOWQ5MjLkyOTE0ZjY3NXWU1OTRmOTM5FZGEwNGY2NzVClNWQ1ZGFh",
      },
    ],
    options: "MDRAxMDgyMjk3YGTdiNjhRNzk3RYjI5NDEyOTcTzNzY2ODZiMjDk4NA|",
  },
  "__SVGATOR_PLAYER__",
  window,
  document
);
