var Vr =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function jR(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ga = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ (function (e, n) {
  (function () {
    var i,
      s = "4.17.21",
      a = 200,
      u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
      l = "Expected a function",
      f = "Invalid `variable` option passed into `_.template`",
      p = "__lodash_hash_undefined__",
      g = 500,
      E = "__lodash_placeholder__",
      R = 1,
      T = 2,
      A = 4,
      S = 1,
      L = 2,
      D = 1,
      P = 2,
      G = 4,
      $ = 8,
      H = 16,
      M = 32,
      X = 64,
      le = 128,
      W = 256,
      Q = 512,
      ue = 30,
      K = "...",
      Z = 800,
      Te = 16,
      B = 1,
      fe = 2,
      N = 3,
      U = 1 / 0,
      Y = 9007199254740991,
      k = 17976931348623157e292,
      he = 0 / 0,
      _e = 4294967295,
      Or = _e - 1,
      Vs = _e >>> 1,
      qt = [
        ["ary", le],
        ["bind", D],
        ["bindKey", P],
        ["curry", $],
        ["curryRight", H],
        ["flip", Q],
        ["partial", M],
        ["partialRight", X],
        ["rearg", W],
      ],
      on = "[object Arguments]",
      oe = "[object Array]",
      Ge = "[object AsyncFunction]",
      ke = "[object Boolean]",
      Et = "[object Date]",
      ze = "[object DOMException]",
      zt = "[object Error]",
      ai = "[object Function]",
      tu = "[object GeneratorFunction]",
      bt = "[object Map]",
      Sr = "[object Number]",
      g_ = "[object Null]",
      Xt = "[object Object]",
      nu = "[object Promise]",
      E_ = "[object Proxy]",
      yr = "[object RegExp]",
      Ct = "[object Set]",
      Ar = "[object String]",
      li = "[object Symbol]",
      m_ = "[object Undefined]",
      wr = "[object WeakMap]",
      I_ = "[object WeakSet]",
      Dr = "[object ArrayBuffer]",
      Yn = "[object DataView]",
      Ys = "[object Float32Array]",
      zs = "[object Float64Array]",
      Xs = "[object Int8Array]",
      Ks = "[object Int16Array]",
      ks = "[object Int32Array]",
      Qs = "[object Uint8Array]",
      Zs = "[object Uint8ClampedArray]",
      Js = "[object Uint16Array]",
      js = "[object Uint32Array]",
      T_ = /\b__p \+= '';/g,
      v_ = /\b(__p \+=) '' \+/g,
      R_ = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      ru = /&(?:amp|lt|gt|quot|#39);/g,
      iu = /[&<>"']/g,
      O_ = RegExp(ru.source),
      S_ = RegExp(iu.source),
      y_ = /<%-([\s\S]+?)%>/g,
      A_ = /<%([\s\S]+?)%>/g,
      su = /<%=([\s\S]+?)%>/g,
      w_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      D_ = /^\w*$/,
      b_ =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      eo = /[\\^$.*+?()[\]{}|]/g,
      C_ = RegExp(eo.source),
      to = /^\s+/,
      L_ = /\s/,
      P_ = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      M_ = /\{\n\/\* \[wrapped with (.+)\] \*/,
      x_ = /,? & /,
      N_ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      F_ = /[()=,{}\[\]\/\s]/,
      B_ = /\\(\\)?/g,
      G_ = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      ou = /\w*$/,
      U_ = /^[-+]0x[0-9a-f]+$/i,
      $_ = /^0b[01]+$/i,
      q_ = /^\[object .+?Constructor\]$/,
      W_ = /^0o[0-7]+$/i,
      H_ = /^(?:0|[1-9]\d*)$/,
      V_ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      ui = /($^)/,
      Y_ = /['\n\r\u2028\u2029\\]/g,
      ci = "\\ud800-\\udfff",
      z_ = "\\u0300-\\u036f",
      X_ = "\\ufe20-\\ufe2f",
      K_ = "\\u20d0-\\u20ff",
      au = z_ + X_ + K_,
      lu = "\\u2700-\\u27bf",
      uu = "a-z\\xdf-\\xf6\\xf8-\\xff",
      k_ = "\\xac\\xb1\\xd7\\xf7",
      Q_ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
      Z_ = "\\u2000-\\u206f",
      J_ =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      cu = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      fu = "\\ufe0e\\ufe0f",
      du = k_ + Q_ + Z_ + J_,
      no = "['\u2019]",
      j_ = "[" + ci + "]",
      pu = "[" + du + "]",
      fi = "[" + au + "]",
      hu = "\\d+",
      eg = "[" + lu + "]",
      _u = "[" + uu + "]",
      gu = "[^" + ci + du + hu + lu + uu + cu + "]",
      ro = "\\ud83c[\\udffb-\\udfff]",
      tg = "(?:" + fi + "|" + ro + ")",
      Eu = "[^" + ci + "]",
      io = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      so = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      zn = "[" + cu + "]",
      mu = "\\u200d",
      Iu = "(?:" + _u + "|" + gu + ")",
      ng = "(?:" + zn + "|" + gu + ")",
      Tu = "(?:" + no + "(?:d|ll|m|re|s|t|ve))?",
      vu = "(?:" + no + "(?:D|LL|M|RE|S|T|VE))?",
      Ru = tg + "?",
      Ou = "[" + fu + "]?",
      rg = "(?:" + mu + "(?:" + [Eu, io, so].join("|") + ")" + Ou + Ru + ")*",
      ig = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
      sg = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
      Su = Ou + Ru + rg,
      og = "(?:" + [eg, io, so].join("|") + ")" + Su,
      ag = "(?:" + [Eu + fi + "?", fi, io, so, j_].join("|") + ")",
      lg = RegExp(no, "g"),
      ug = RegExp(fi, "g"),
      oo = RegExp(ro + "(?=" + ro + ")|" + ag + Su, "g"),
      cg = RegExp(
        [
          zn + "?" + _u + "+" + Tu + "(?=" + [pu, zn, "$"].join("|") + ")",
          ng + "+" + vu + "(?=" + [pu, zn + Iu, "$"].join("|") + ")",
          zn + "?" + Iu + "+" + Tu,
          zn + "+" + vu,
          sg,
          ig,
          hu,
          og,
        ].join("|"),
        "g"
      ),
      fg = RegExp("[" + mu + ci + au + fu + "]"),
      dg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      pg = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      hg = -1,
      Re = {};
    (Re[Ys] =
      Re[zs] =
      Re[Xs] =
      Re[Ks] =
      Re[ks] =
      Re[Qs] =
      Re[Zs] =
      Re[Js] =
      Re[js] =
        !0),
      (Re[on] =
        Re[oe] =
        Re[Dr] =
        Re[ke] =
        Re[Yn] =
        Re[Et] =
        Re[zt] =
        Re[ai] =
        Re[bt] =
        Re[Sr] =
        Re[Xt] =
        Re[yr] =
        Re[Ct] =
        Re[Ar] =
        Re[wr] =
          !1);
    var ve = {};
    (ve[on] =
      ve[oe] =
      ve[Dr] =
      ve[Yn] =
      ve[ke] =
      ve[Et] =
      ve[Ys] =
      ve[zs] =
      ve[Xs] =
      ve[Ks] =
      ve[ks] =
      ve[bt] =
      ve[Sr] =
      ve[Xt] =
      ve[yr] =
      ve[Ct] =
      ve[Ar] =
      ve[li] =
      ve[Qs] =
      ve[Zs] =
      ve[Js] =
      ve[js] =
        !0),
      (ve[zt] = ve[ai] = ve[wr] = !1);
    var _g = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      gg = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      Eg = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      },
      mg = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      Ig = parseFloat,
      Tg = parseInt,
      yu = typeof Vr == "object" && Vr && Vr.Object === Object && Vr,
      vg = typeof self == "object" && self && self.Object === Object && self,
      He = yu || vg || Function("return this")(),
      ao = n && !n.nodeType && n,
      Rn = ao && !0 && e && !e.nodeType && e,
      Au = Rn && Rn.exports === ao,
      lo = Au && yu.process,
      mt = (function () {
        try {
          var v = Rn && Rn.require && Rn.require("util").types;
          return v || (lo && lo.binding && lo.binding("util"));
        } catch {}
      })(),
      wu = mt && mt.isArrayBuffer,
      Du = mt && mt.isDate,
      bu = mt && mt.isMap,
      Cu = mt && mt.isRegExp,
      Lu = mt && mt.isSet,
      Pu = mt && mt.isTypedArray;
    function ut(v, w, y) {
      switch (y.length) {
        case 0:
          return v.call(w);
        case 1:
          return v.call(w, y[0]);
        case 2:
          return v.call(w, y[0], y[1]);
        case 3:
          return v.call(w, y[0], y[1], y[2]);
      }
      return v.apply(w, y);
    }
    function Rg(v, w, y, V) {
      for (var te = -1, ge = v == null ? 0 : v.length; ++te < ge; ) {
        var Ne = v[te];
        w(V, Ne, y(Ne), v);
      }
      return V;
    }
    function It(v, w) {
      for (
        var y = -1, V = v == null ? 0 : v.length;
        ++y < V && w(v[y], y, v) !== !1;

      );
      return v;
    }
    function Og(v, w) {
      for (var y = v == null ? 0 : v.length; y-- && w(v[y], y, v) !== !1; );
      return v;
    }
    function Mu(v, w) {
      for (var y = -1, V = v == null ? 0 : v.length; ++y < V; )
        if (!w(v[y], y, v)) return !1;
      return !0;
    }
    function an(v, w) {
      for (
        var y = -1, V = v == null ? 0 : v.length, te = 0, ge = [];
        ++y < V;

      ) {
        var Ne = v[y];
        w(Ne, y, v) && (ge[te++] = Ne);
      }
      return ge;
    }
    function di(v, w) {
      var y = v == null ? 0 : v.length;
      return !!y && Xn(v, w, 0) > -1;
    }
    function uo(v, w, y) {
      for (var V = -1, te = v == null ? 0 : v.length; ++V < te; )
        if (y(w, v[V])) return !0;
      return !1;
    }
    function Oe(v, w) {
      for (var y = -1, V = v == null ? 0 : v.length, te = Array(V); ++y < V; )
        te[y] = w(v[y], y, v);
      return te;
    }
    function ln(v, w) {
      for (var y = -1, V = w.length, te = v.length; ++y < V; ) v[te + y] = w[y];
      return v;
    }
    function co(v, w, y, V) {
      var te = -1,
        ge = v == null ? 0 : v.length;
      for (V && ge && (y = v[++te]); ++te < ge; ) y = w(y, v[te], te, v);
      return y;
    }
    function Sg(v, w, y, V) {
      var te = v == null ? 0 : v.length;
      for (V && te && (y = v[--te]); te--; ) y = w(y, v[te], te, v);
      return y;
    }
    function fo(v, w) {
      for (var y = -1, V = v == null ? 0 : v.length; ++y < V; )
        if (w(v[y], y, v)) return !0;
      return !1;
    }
    var yg = po("length");
    function Ag(v) {
      return v.split("");
    }
    function wg(v) {
      return v.match(N_) || [];
    }
    function xu(v, w, y) {
      var V;
      return (
        y(v, function (te, ge, Ne) {
          if (w(te, ge, Ne)) return (V = ge), !1;
        }),
        V
      );
    }
    function pi(v, w, y, V) {
      for (var te = v.length, ge = y + (V ? 1 : -1); V ? ge-- : ++ge < te; )
        if (w(v[ge], ge, v)) return ge;
      return -1;
    }
    function Xn(v, w, y) {
      return w === w ? Ug(v, w, y) : pi(v, Nu, y);
    }
    function Dg(v, w, y, V) {
      for (var te = y - 1, ge = v.length; ++te < ge; )
        if (V(v[te], w)) return te;
      return -1;
    }
    function Nu(v) {
      return v !== v;
    }
    function Fu(v, w) {
      var y = v == null ? 0 : v.length;
      return y ? _o(v, w) / y : he;
    }
    function po(v) {
      return function (w) {
        return w == null ? i : w[v];
      };
    }
    function ho(v) {
      return function (w) {
        return v == null ? i : v[w];
      };
    }
    function Bu(v, w, y, V, te) {
      return (
        te(v, function (ge, Ne, Ie) {
          y = V ? ((V = !1), ge) : w(y, ge, Ne, Ie);
        }),
        y
      );
    }
    function bg(v, w) {
      var y = v.length;
      for (v.sort(w); y--; ) v[y] = v[y].value;
      return v;
    }
    function _o(v, w) {
      for (var y, V = -1, te = v.length; ++V < te; ) {
        var ge = w(v[V]);
        ge !== i && (y = y === i ? ge : y + ge);
      }
      return y;
    }
    function go(v, w) {
      for (var y = -1, V = Array(v); ++y < v; ) V[y] = w(y);
      return V;
    }
    function Cg(v, w) {
      return Oe(w, function (y) {
        return [y, v[y]];
      });
    }
    function Gu(v) {
      return v && v.slice(0, Wu(v) + 1).replace(to, "");
    }
    function ct(v) {
      return function (w) {
        return v(w);
      };
    }
    function Eo(v, w) {
      return Oe(w, function (y) {
        return v[y];
      });
    }
    function br(v, w) {
      return v.has(w);
    }
    function Uu(v, w) {
      for (var y = -1, V = v.length; ++y < V && Xn(w, v[y], 0) > -1; );
      return y;
    }
    function $u(v, w) {
      for (var y = v.length; y-- && Xn(w, v[y], 0) > -1; );
      return y;
    }
    function Lg(v, w) {
      for (var y = v.length, V = 0; y--; ) v[y] === w && ++V;
      return V;
    }
    var Pg = ho(_g),
      Mg = ho(gg);
    function xg(v) {
      return "\\" + mg[v];
    }
    function Ng(v, w) {
      return v == null ? i : v[w];
    }
    function Kn(v) {
      return fg.test(v);
    }
    function Fg(v) {
      return dg.test(v);
    }
    function Bg(v) {
      for (var w, y = []; !(w = v.next()).done; ) y.push(w.value);
      return y;
    }
    function mo(v) {
      var w = -1,
        y = Array(v.size);
      return (
        v.forEach(function (V, te) {
          y[++w] = [te, V];
        }),
        y
      );
    }
    function qu(v, w) {
      return function (y) {
        return v(w(y));
      };
    }
    function un(v, w) {
      for (var y = -1, V = v.length, te = 0, ge = []; ++y < V; ) {
        var Ne = v[y];
        (Ne === w || Ne === E) && ((v[y] = E), (ge[te++] = y));
      }
      return ge;
    }
    function hi(v) {
      var w = -1,
        y = Array(v.size);
      return (
        v.forEach(function (V) {
          y[++w] = V;
        }),
        y
      );
    }
    function Gg(v) {
      var w = -1,
        y = Array(v.size);
      return (
        v.forEach(function (V) {
          y[++w] = [V, V];
        }),
        y
      );
    }
    function Ug(v, w, y) {
      for (var V = y - 1, te = v.length; ++V < te; ) if (v[V] === w) return V;
      return -1;
    }
    function $g(v, w, y) {
      for (var V = y + 1; V--; ) if (v[V] === w) return V;
      return V;
    }
    function kn(v) {
      return Kn(v) ? Wg(v) : yg(v);
    }
    function Lt(v) {
      return Kn(v) ? Hg(v) : Ag(v);
    }
    function Wu(v) {
      for (var w = v.length; w-- && L_.test(v.charAt(w)); );
      return w;
    }
    var qg = ho(Eg);
    function Wg(v) {
      for (var w = (oo.lastIndex = 0); oo.test(v); ) ++w;
      return w;
    }
    function Hg(v) {
      return v.match(oo) || [];
    }
    function Vg(v) {
      return v.match(cg) || [];
    }
    var Yg = function v(w) {
        w = w == null ? He : Qn.defaults(He.Object(), w, Qn.pick(He, pg));
        var y = w.Array,
          V = w.Date,
          te = w.Error,
          ge = w.Function,
          Ne = w.Math,
          Ie = w.Object,
          Io = w.RegExp,
          zg = w.String,
          Tt = w.TypeError,
          _i = y.prototype,
          Xg = ge.prototype,
          Zn = Ie.prototype,
          gi = w["__core-js_shared__"],
          Ei = Xg.toString,
          me = Zn.hasOwnProperty,
          Kg = 0,
          Hu = (function () {
            var t = /[^.]+$/.exec((gi && gi.keys && gi.keys.IE_PROTO) || "");
            return t ? "Symbol(src)_1." + t : "";
          })(),
          mi = Zn.toString,
          kg = Ei.call(Ie),
          Qg = He._,
          Zg = Io(
            "^" +
              Ei.call(me)
                .replace(eo, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          Ii = Au ? w.Buffer : i,
          cn = w.Symbol,
          Ti = w.Uint8Array,
          Vu = Ii ? Ii.allocUnsafe : i,
          vi = qu(Ie.getPrototypeOf, Ie),
          Yu = Ie.create,
          zu = Zn.propertyIsEnumerable,
          Ri = _i.splice,
          Xu = cn ? cn.isConcatSpreadable : i,
          Cr = cn ? cn.iterator : i,
          On = cn ? cn.toStringTag : i,
          Oi = (function () {
            try {
              var t = Dn(Ie, "defineProperty");
              return t({}, "", {}), t;
            } catch {}
          })(),
          Jg = w.clearTimeout !== He.clearTimeout && w.clearTimeout,
          jg = V && V.now !== He.Date.now && V.now,
          eE = w.setTimeout !== He.setTimeout && w.setTimeout,
          Si = Ne.ceil,
          yi = Ne.floor,
          To = Ie.getOwnPropertySymbols,
          tE = Ii ? Ii.isBuffer : i,
          Ku = w.isFinite,
          nE = _i.join,
          rE = qu(Ie.keys, Ie),
          Fe = Ne.max,
          Xe = Ne.min,
          iE = V.now,
          sE = w.parseInt,
          ku = Ne.random,
          oE = _i.reverse,
          vo = Dn(w, "DataView"),
          Lr = Dn(w, "Map"),
          Ro = Dn(w, "Promise"),
          Jn = Dn(w, "Set"),
          Pr = Dn(w, "WeakMap"),
          Mr = Dn(Ie, "create"),
          Ai = Pr && new Pr(),
          jn = {},
          aE = bn(vo),
          lE = bn(Lr),
          uE = bn(Ro),
          cE = bn(Jn),
          fE = bn(Pr),
          wi = cn ? cn.prototype : i,
          xr = wi ? wi.valueOf : i,
          Qu = wi ? wi.toString : i;
        function h(t) {
          if (Ae(t) && !re(t) && !(t instanceof de)) {
            if (t instanceof vt) return t;
            if (me.call(t, "__wrapped__")) return Zc(t);
          }
          return new vt(t);
        }
        var er = (function () {
          function t() {}
          return function (r) {
            if (!ye(r)) return {};
            if (Yu) return Yu(r);
            t.prototype = r;
            var o = new t();
            return (t.prototype = i), o;
          };
        })();
        function Di() {}
        function vt(t, r) {
          (this.__wrapped__ = t),
            (this.__actions__ = []),
            (this.__chain__ = !!r),
            (this.__index__ = 0),
            (this.__values__ = i);
        }
        (h.templateSettings = {
          escape: y_,
          evaluate: A_,
          interpolate: su,
          variable: "",
          imports: { _: h },
        }),
          (h.prototype = Di.prototype),
          (h.prototype.constructor = h),
          (vt.prototype = er(Di.prototype)),
          (vt.prototype.constructor = vt);
        function de(t) {
          (this.__wrapped__ = t),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = _e),
            (this.__views__ = []);
        }
        function dE() {
          var t = new de(this.__wrapped__);
          return (
            (t.__actions__ = rt(this.__actions__)),
            (t.__dir__ = this.__dir__),
            (t.__filtered__ = this.__filtered__),
            (t.__iteratees__ = rt(this.__iteratees__)),
            (t.__takeCount__ = this.__takeCount__),
            (t.__views__ = rt(this.__views__)),
            t
          );
        }
        function pE() {
          if (this.__filtered__) {
            var t = new de(this);
            (t.__dir__ = -1), (t.__filtered__ = !0);
          } else (t = this.clone()), (t.__dir__ *= -1);
          return t;
        }
        function hE() {
          var t = this.__wrapped__.value(),
            r = this.__dir__,
            o = re(t),
            c = r < 0,
            d = o ? t.length : 0,
            _ = Am(0, d, this.__views__),
            m = _.start,
            I = _.end,
            O = I - m,
            b = c ? I : m - 1,
            C = this.__iteratees__,
            F = C.length,
            q = 0,
            z = Xe(O, this.__takeCount__);
          if (!o || (!c && d == O && z == O)) return Tc(t, this.__actions__);
          var j = [];
          e: for (; O-- && q < z; ) {
            b += r;
            for (var se = -1, ee = t[b]; ++se < F; ) {
              var ce = C[se],
                pe = ce.iteratee,
                pt = ce.type,
                Je = pe(ee);
              if (pt == fe) ee = Je;
              else if (!Je) {
                if (pt == B) continue e;
                break e;
              }
            }
            j[q++] = ee;
          }
          return j;
        }
        (de.prototype = er(Di.prototype)), (de.prototype.constructor = de);
        function Sn(t) {
          var r = -1,
            o = t == null ? 0 : t.length;
          for (this.clear(); ++r < o; ) {
            var c = t[r];
            this.set(c[0], c[1]);
          }
        }
        function _E() {
          (this.__data__ = Mr ? Mr(null) : {}), (this.size = 0);
        }
        function gE(t) {
          var r = this.has(t) && delete this.__data__[t];
          return (this.size -= r ? 1 : 0), r;
        }
        function EE(t) {
          var r = this.__data__;
          if (Mr) {
            var o = r[t];
            return o === p ? i : o;
          }
          return me.call(r, t) ? r[t] : i;
        }
        function mE(t) {
          var r = this.__data__;
          return Mr ? r[t] !== i : me.call(r, t);
        }
        function IE(t, r) {
          var o = this.__data__;
          return (
            (this.size += this.has(t) ? 0 : 1),
            (o[t] = Mr && r === i ? p : r),
            this
          );
        }
        (Sn.prototype.clear = _E),
          (Sn.prototype.delete = gE),
          (Sn.prototype.get = EE),
          (Sn.prototype.has = mE),
          (Sn.prototype.set = IE);
        function Kt(t) {
          var r = -1,
            o = t == null ? 0 : t.length;
          for (this.clear(); ++r < o; ) {
            var c = t[r];
            this.set(c[0], c[1]);
          }
        }
        function TE() {
          (this.__data__ = []), (this.size = 0);
        }
        function vE(t) {
          var r = this.__data__,
            o = bi(r, t);
          if (o < 0) return !1;
          var c = r.length - 1;
          return o == c ? r.pop() : Ri.call(r, o, 1), --this.size, !0;
        }
        function RE(t) {
          var r = this.__data__,
            o = bi(r, t);
          return o < 0 ? i : r[o][1];
        }
        function OE(t) {
          return bi(this.__data__, t) > -1;
        }
        function SE(t, r) {
          var o = this.__data__,
            c = bi(o, t);
          return c < 0 ? (++this.size, o.push([t, r])) : (o[c][1] = r), this;
        }
        (Kt.prototype.clear = TE),
          (Kt.prototype.delete = vE),
          (Kt.prototype.get = RE),
          (Kt.prototype.has = OE),
          (Kt.prototype.set = SE);
        function kt(t) {
          var r = -1,
            o = t == null ? 0 : t.length;
          for (this.clear(); ++r < o; ) {
            var c = t[r];
            this.set(c[0], c[1]);
          }
        }
        function yE() {
          (this.size = 0),
            (this.__data__ = {
              hash: new Sn(),
              map: new (Lr || Kt)(),
              string: new Sn(),
            });
        }
        function AE(t) {
          var r = qi(this, t).delete(t);
          return (this.size -= r ? 1 : 0), r;
        }
        function wE(t) {
          return qi(this, t).get(t);
        }
        function DE(t) {
          return qi(this, t).has(t);
        }
        function bE(t, r) {
          var o = qi(this, t),
            c = o.size;
          return o.set(t, r), (this.size += o.size == c ? 0 : 1), this;
        }
        (kt.prototype.clear = yE),
          (kt.prototype.delete = AE),
          (kt.prototype.get = wE),
          (kt.prototype.has = DE),
          (kt.prototype.set = bE);
        function yn(t) {
          var r = -1,
            o = t == null ? 0 : t.length;
          for (this.__data__ = new kt(); ++r < o; ) this.add(t[r]);
        }
        function CE(t) {
          return this.__data__.set(t, p), this;
        }
        function LE(t) {
          return this.__data__.has(t);
        }
        (yn.prototype.add = yn.prototype.push = CE), (yn.prototype.has = LE);
        function Pt(t) {
          var r = (this.__data__ = new Kt(t));
          this.size = r.size;
        }
        function PE() {
          (this.__data__ = new Kt()), (this.size = 0);
        }
        function ME(t) {
          var r = this.__data__,
            o = r.delete(t);
          return (this.size = r.size), o;
        }
        function xE(t) {
          return this.__data__.get(t);
        }
        function NE(t) {
          return this.__data__.has(t);
        }
        function FE(t, r) {
          var o = this.__data__;
          if (o instanceof Kt) {
            var c = o.__data__;
            if (!Lr || c.length < a - 1)
              return c.push([t, r]), (this.size = ++o.size), this;
            o = this.__data__ = new kt(c);
          }
          return o.set(t, r), (this.size = o.size), this;
        }
        (Pt.prototype.clear = PE),
          (Pt.prototype.delete = ME),
          (Pt.prototype.get = xE),
          (Pt.prototype.has = NE),
          (Pt.prototype.set = FE);
        function Zu(t, r) {
          var o = re(t),
            c = !o && Cn(t),
            d = !o && !c && _n(t),
            _ = !o && !c && !d && ir(t),
            m = o || c || d || _,
            I = m ? go(t.length, zg) : [],
            O = I.length;
          for (var b in t)
            (r || me.call(t, b)) &&
              !(
                m &&
                (b == "length" ||
                  (d && (b == "offset" || b == "parent")) ||
                  (_ &&
                    (b == "buffer" ||
                      b == "byteLength" ||
                      b == "byteOffset")) ||
                  jt(b, O))
              ) &&
              I.push(b);
          return I;
        }
        function Ju(t) {
          var r = t.length;
          return r ? t[Mo(0, r - 1)] : i;
        }
        function BE(t, r) {
          return Wi(rt(t), An(r, 0, t.length));
        }
        function GE(t) {
          return Wi(rt(t));
        }
        function Oo(t, r, o) {
          ((o !== i && !Mt(t[r], o)) || (o === i && !(r in t))) && Qt(t, r, o);
        }
        function Nr(t, r, o) {
          var c = t[r];
          (!(me.call(t, r) && Mt(c, o)) || (o === i && !(r in t))) &&
            Qt(t, r, o);
        }
        function bi(t, r) {
          for (var o = t.length; o--; ) if (Mt(t[o][0], r)) return o;
          return -1;
        }
        function UE(t, r, o, c) {
          return (
            fn(t, function (d, _, m) {
              r(c, d, o(d), m);
            }),
            c
          );
        }
        function ju(t, r) {
          return t && Ht(r, Ue(r), t);
        }
        function $E(t, r) {
          return t && Ht(r, st(r), t);
        }
        function Qt(t, r, o) {
          r == "__proto__" && Oi
            ? Oi(t, r, {
                configurable: !0,
                enumerable: !0,
                value: o,
                writable: !0,
              })
            : (t[r] = o);
        }
        function So(t, r) {
          for (var o = -1, c = r.length, d = y(c), _ = t == null; ++o < c; )
            d[o] = _ ? i : ia(t, r[o]);
          return d;
        }
        function An(t, r, o) {
          return (
            t === t &&
              (o !== i && (t = t <= o ? t : o),
              r !== i && (t = t >= r ? t : r)),
            t
          );
        }
        function Rt(t, r, o, c, d, _) {
          var m,
            I = r & R,
            O = r & T,
            b = r & A;
          if ((o && (m = d ? o(t, c, d, _) : o(t)), m !== i)) return m;
          if (!ye(t)) return t;
          var C = re(t);
          if (C) {
            if (((m = Dm(t)), !I)) return rt(t, m);
          } else {
            var F = Ke(t),
              q = F == ai || F == tu;
            if (_n(t)) return Oc(t, I);
            if (F == Xt || F == on || (q && !d)) {
              if (((m = O || q ? {} : Wc(t)), !I))
                return O ? Em(t, $E(m, t)) : gm(t, ju(m, t));
            } else {
              if (!ve[F]) return d ? t : {};
              m = bm(t, F, I);
            }
          }
          _ || (_ = new Pt());
          var z = _.get(t);
          if (z) return z;
          _.set(t, m),
            mf(t)
              ? t.forEach(function (ee) {
                  m.add(Rt(ee, r, o, ee, t, _));
                })
              : gf(t) &&
                t.forEach(function (ee, ce) {
                  m.set(ce, Rt(ee, r, o, ce, t, _));
                });
          var j = b ? (O ? Vo : Ho) : O ? st : Ue,
            se = C ? i : j(t);
          return (
            It(se || t, function (ee, ce) {
              se && ((ce = ee), (ee = t[ce])),
                Nr(m, ce, Rt(ee, r, o, ce, t, _));
            }),
            m
          );
        }
        function qE(t) {
          var r = Ue(t);
          return function (o) {
            return ec(o, t, r);
          };
        }
        function ec(t, r, o) {
          var c = o.length;
          if (t == null) return !c;
          for (t = Ie(t); c--; ) {
            var d = o[c],
              _ = r[d],
              m = t[d];
            if ((m === i && !(d in t)) || !_(m)) return !1;
          }
          return !0;
        }
        function tc(t, r, o) {
          if (typeof t != "function") throw new Tt(l);
          return Wr(function () {
            t.apply(i, o);
          }, r);
        }
        function Fr(t, r, o, c) {
          var d = -1,
            _ = di,
            m = !0,
            I = t.length,
            O = [],
            b = r.length;
          if (!I) return O;
          o && (r = Oe(r, ct(o))),
            c
              ? ((_ = uo), (m = !1))
              : r.length >= a && ((_ = br), (m = !1), (r = new yn(r)));
          e: for (; ++d < I; ) {
            var C = t[d],
              F = o == null ? C : o(C);
            if (((C = c || C !== 0 ? C : 0), m && F === F)) {
              for (var q = b; q--; ) if (r[q] === F) continue e;
              O.push(C);
            } else _(r, F, c) || O.push(C);
          }
          return O;
        }
        var fn = Dc(Wt),
          nc = Dc(Ao, !0);
        function WE(t, r) {
          var o = !0;
          return (
            fn(t, function (c, d, _) {
              return (o = !!r(c, d, _)), o;
            }),
            o
          );
        }
        function Ci(t, r, o) {
          for (var c = -1, d = t.length; ++c < d; ) {
            var _ = t[c],
              m = r(_);
            if (m != null && (I === i ? m === m && !dt(m) : o(m, I)))
              var I = m,
                O = _;
          }
          return O;
        }
        function HE(t, r, o, c) {
          var d = t.length;
          for (
            o = ie(o),
              o < 0 && (o = -o > d ? 0 : d + o),
              c = c === i || c > d ? d : ie(c),
              c < 0 && (c += d),
              c = o > c ? 0 : Tf(c);
            o < c;

          )
            t[o++] = r;
          return t;
        }
        function rc(t, r) {
          var o = [];
          return (
            fn(t, function (c, d, _) {
              r(c, d, _) && o.push(c);
            }),
            o
          );
        }
        function Ve(t, r, o, c, d) {
          var _ = -1,
            m = t.length;
          for (o || (o = Lm), d || (d = []); ++_ < m; ) {
            var I = t[_];
            r > 0 && o(I)
              ? r > 1
                ? Ve(I, r - 1, o, c, d)
                : ln(d, I)
              : c || (d[d.length] = I);
          }
          return d;
        }
        var yo = bc(),
          ic = bc(!0);
        function Wt(t, r) {
          return t && yo(t, r, Ue);
        }
        function Ao(t, r) {
          return t && ic(t, r, Ue);
        }
        function Li(t, r) {
          return an(r, function (o) {
            return en(t[o]);
          });
        }
        function wn(t, r) {
          r = pn(r, t);
          for (var o = 0, c = r.length; t != null && o < c; ) t = t[Vt(r[o++])];
          return o && o == c ? t : i;
        }
        function sc(t, r, o) {
          var c = r(t);
          return re(t) ? c : ln(c, o(t));
        }
        function Qe(t) {
          return t == null
            ? t === i
              ? m_
              : g_
            : On && On in Ie(t)
            ? ym(t)
            : Gm(t);
        }
        function wo(t, r) {
          return t > r;
        }
        function VE(t, r) {
          return t != null && me.call(t, r);
        }
        function YE(t, r) {
          return t != null && r in Ie(t);
        }
        function zE(t, r, o) {
          return t >= Xe(r, o) && t < Fe(r, o);
        }
        function Do(t, r, o) {
          for (
            var c = o ? uo : di,
              d = t[0].length,
              _ = t.length,
              m = _,
              I = y(_),
              O = 1 / 0,
              b = [];
            m--;

          ) {
            var C = t[m];
            m && r && (C = Oe(C, ct(r))),
              (O = Xe(C.length, O)),
              (I[m] =
                !o && (r || (d >= 120 && C.length >= 120))
                  ? new yn(m && C)
                  : i);
          }
          C = t[0];
          var F = -1,
            q = I[0];
          e: for (; ++F < d && b.length < O; ) {
            var z = C[F],
              j = r ? r(z) : z;
            if (((z = o || z !== 0 ? z : 0), !(q ? br(q, j) : c(b, j, o)))) {
              for (m = _; --m; ) {
                var se = I[m];
                if (!(se ? br(se, j) : c(t[m], j, o))) continue e;
              }
              q && q.push(j), b.push(z);
            }
          }
          return b;
        }
        function XE(t, r, o, c) {
          return (
            Wt(t, function (d, _, m) {
              r(c, o(d), _, m);
            }),
            c
          );
        }
        function Br(t, r, o) {
          (r = pn(r, t)), (t = zc(t, r));
          var c = t == null ? t : t[Vt(St(r))];
          return c == null ? i : ut(c, t, o);
        }
        function oc(t) {
          return Ae(t) && Qe(t) == on;
        }
        function KE(t) {
          return Ae(t) && Qe(t) == Dr;
        }
        function kE(t) {
          return Ae(t) && Qe(t) == Et;
        }
        function Gr(t, r, o, c, d) {
          return t === r
            ? !0
            : t == null || r == null || (!Ae(t) && !Ae(r))
            ? t !== t && r !== r
            : QE(t, r, o, c, Gr, d);
        }
        function QE(t, r, o, c, d, _) {
          var m = re(t),
            I = re(r),
            O = m ? oe : Ke(t),
            b = I ? oe : Ke(r);
          (O = O == on ? Xt : O), (b = b == on ? Xt : b);
          var C = O == Xt,
            F = b == Xt,
            q = O == b;
          if (q && _n(t)) {
            if (!_n(r)) return !1;
            (m = !0), (C = !1);
          }
          if (q && !C)
            return (
              _ || (_ = new Pt()),
              m || ir(t) ? Uc(t, r, o, c, d, _) : Om(t, r, O, o, c, d, _)
            );
          if (!(o & S)) {
            var z = C && me.call(t, "__wrapped__"),
              j = F && me.call(r, "__wrapped__");
            if (z || j) {
              var se = z ? t.value() : t,
                ee = j ? r.value() : r;
              return _ || (_ = new Pt()), d(se, ee, o, c, _);
            }
          }
          return q ? (_ || (_ = new Pt()), Sm(t, r, o, c, d, _)) : !1;
        }
        function ZE(t) {
          return Ae(t) && Ke(t) == bt;
        }
        function bo(t, r, o, c) {
          var d = o.length,
            _ = d,
            m = !c;
          if (t == null) return !_;
          for (t = Ie(t); d--; ) {
            var I = o[d];
            if (m && I[2] ? I[1] !== t[I[0]] : !(I[0] in t)) return !1;
          }
          for (; ++d < _; ) {
            I = o[d];
            var O = I[0],
              b = t[O],
              C = I[1];
            if (m && I[2]) {
              if (b === i && !(O in t)) return !1;
            } else {
              var F = new Pt();
              if (c) var q = c(b, C, O, t, r, F);
              if (!(q === i ? Gr(C, b, S | L, c, F) : q)) return !1;
            }
          }
          return !0;
        }
        function ac(t) {
          if (!ye(t) || Mm(t)) return !1;
          var r = en(t) ? Zg : q_;
          return r.test(bn(t));
        }
        function JE(t) {
          return Ae(t) && Qe(t) == yr;
        }
        function jE(t) {
          return Ae(t) && Ke(t) == Ct;
        }
        function em(t) {
          return Ae(t) && Ki(t.length) && !!Re[Qe(t)];
        }
        function lc(t) {
          return typeof t == "function"
            ? t
            : t == null
            ? ot
            : typeof t == "object"
            ? re(t)
              ? fc(t[0], t[1])
              : cc(t)
            : Lf(t);
        }
        function Co(t) {
          if (!qr(t)) return rE(t);
          var r = [];
          for (var o in Ie(t)) me.call(t, o) && o != "constructor" && r.push(o);
          return r;
        }
        function tm(t) {
          if (!ye(t)) return Bm(t);
          var r = qr(t),
            o = [];
          for (var c in t)
            (c == "constructor" && (r || !me.call(t, c))) || o.push(c);
          return o;
        }
        function Lo(t, r) {
          return t < r;
        }
        function uc(t, r) {
          var o = -1,
            c = it(t) ? y(t.length) : [];
          return (
            fn(t, function (d, _, m) {
              c[++o] = r(d, _, m);
            }),
            c
          );
        }
        function cc(t) {
          var r = zo(t);
          return r.length == 1 && r[0][2]
            ? Vc(r[0][0], r[0][1])
            : function (o) {
                return o === t || bo(o, t, r);
              };
        }
        function fc(t, r) {
          return Ko(t) && Hc(r)
            ? Vc(Vt(t), r)
            : function (o) {
                var c = ia(o, t);
                return c === i && c === r ? sa(o, t) : Gr(r, c, S | L);
              };
        }
        function Pi(t, r, o, c, d) {
          t !== r &&
            yo(
              r,
              function (_, m) {
                if ((d || (d = new Pt()), ye(_))) nm(t, r, m, o, Pi, c, d);
                else {
                  var I = c ? c(Qo(t, m), _, m + "", t, r, d) : i;
                  I === i && (I = _), Oo(t, m, I);
                }
              },
              st
            );
        }
        function nm(t, r, o, c, d, _, m) {
          var I = Qo(t, o),
            O = Qo(r, o),
            b = m.get(O);
          if (b) {
            Oo(t, o, b);
            return;
          }
          var C = _ ? _(I, O, o + "", t, r, m) : i,
            F = C === i;
          if (F) {
            var q = re(O),
              z = !q && _n(O),
              j = !q && !z && ir(O);
            (C = O),
              q || z || j
                ? re(I)
                  ? (C = I)
                  : De(I)
                  ? (C = rt(I))
                  : z
                  ? ((F = !1), (C = Oc(O, !0)))
                  : j
                  ? ((F = !1), (C = Sc(O, !0)))
                  : (C = [])
                : Hr(O) || Cn(O)
                ? ((C = I),
                  Cn(I) ? (C = vf(I)) : (!ye(I) || en(I)) && (C = Wc(O)))
                : (F = !1);
          }
          F && (m.set(O, C), d(C, O, c, _, m), m.delete(O)), Oo(t, o, C);
        }
        function dc(t, r) {
          var o = t.length;
          if (!!o) return (r += r < 0 ? o : 0), jt(r, o) ? t[r] : i;
        }
        function pc(t, r, o) {
          r.length
            ? (r = Oe(r, function (_) {
                return re(_)
                  ? function (m) {
                      return wn(m, _.length === 1 ? _[0] : _);
                    }
                  : _;
              }))
            : (r = [ot]);
          var c = -1;
          r = Oe(r, ct(J()));
          var d = uc(t, function (_, m, I) {
            var O = Oe(r, function (b) {
              return b(_);
            });
            return { criteria: O, index: ++c, value: _ };
          });
          return bg(d, function (_, m) {
            return _m(_, m, o);
          });
        }
        function rm(t, r) {
          return hc(t, r, function (o, c) {
            return sa(t, c);
          });
        }
        function hc(t, r, o) {
          for (var c = -1, d = r.length, _ = {}; ++c < d; ) {
            var m = r[c],
              I = wn(t, m);
            o(I, m) && Ur(_, pn(m, t), I);
          }
          return _;
        }
        function im(t) {
          return function (r) {
            return wn(r, t);
          };
        }
        function Po(t, r, o, c) {
          var d = c ? Dg : Xn,
            _ = -1,
            m = r.length,
            I = t;
          for (t === r && (r = rt(r)), o && (I = Oe(t, ct(o))); ++_ < m; )
            for (
              var O = 0, b = r[_], C = o ? o(b) : b;
              (O = d(I, C, O, c)) > -1;

            )
              I !== t && Ri.call(I, O, 1), Ri.call(t, O, 1);
          return t;
        }
        function _c(t, r) {
          for (var o = t ? r.length : 0, c = o - 1; o--; ) {
            var d = r[o];
            if (o == c || d !== _) {
              var _ = d;
              jt(d) ? Ri.call(t, d, 1) : Fo(t, d);
            }
          }
          return t;
        }
        function Mo(t, r) {
          return t + yi(ku() * (r - t + 1));
        }
        function sm(t, r, o, c) {
          for (var d = -1, _ = Fe(Si((r - t) / (o || 1)), 0), m = y(_); _--; )
            (m[c ? _ : ++d] = t), (t += o);
          return m;
        }
        function xo(t, r) {
          var o = "";
          if (!t || r < 1 || r > Y) return o;
          do r % 2 && (o += t), (r = yi(r / 2)), r && (t += t);
          while (r);
          return o;
        }
        function ae(t, r) {
          return Zo(Yc(t, r, ot), t + "");
        }
        function om(t) {
          return Ju(sr(t));
        }
        function am(t, r) {
          var o = sr(t);
          return Wi(o, An(r, 0, o.length));
        }
        function Ur(t, r, o, c) {
          if (!ye(t)) return t;
          r = pn(r, t);
          for (
            var d = -1, _ = r.length, m = _ - 1, I = t;
            I != null && ++d < _;

          ) {
            var O = Vt(r[d]),
              b = o;
            if (O === "__proto__" || O === "constructor" || O === "prototype")
              return t;
            if (d != m) {
              var C = I[O];
              (b = c ? c(C, O, I) : i),
                b === i && (b = ye(C) ? C : jt(r[d + 1]) ? [] : {});
            }
            Nr(I, O, b), (I = I[O]);
          }
          return t;
        }
        var gc = Ai
            ? function (t, r) {
                return Ai.set(t, r), t;
              }
            : ot,
          lm = Oi
            ? function (t, r) {
                return Oi(t, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: aa(r),
                  writable: !0,
                });
              }
            : ot;
        function um(t) {
          return Wi(sr(t));
        }
        function Ot(t, r, o) {
          var c = -1,
            d = t.length;
          r < 0 && (r = -r > d ? 0 : d + r),
            (o = o > d ? d : o),
            o < 0 && (o += d),
            (d = r > o ? 0 : (o - r) >>> 0),
            (r >>>= 0);
          for (var _ = y(d); ++c < d; ) _[c] = t[c + r];
          return _;
        }
        function cm(t, r) {
          var o;
          return (
            fn(t, function (c, d, _) {
              return (o = r(c, d, _)), !o;
            }),
            !!o
          );
        }
        function Mi(t, r, o) {
          var c = 0,
            d = t == null ? c : t.length;
          if (typeof r == "number" && r === r && d <= Vs) {
            for (; c < d; ) {
              var _ = (c + d) >>> 1,
                m = t[_];
              m !== null && !dt(m) && (o ? m <= r : m < r)
                ? (c = _ + 1)
                : (d = _);
            }
            return d;
          }
          return No(t, r, ot, o);
        }
        function No(t, r, o, c) {
          var d = 0,
            _ = t == null ? 0 : t.length;
          if (_ === 0) return 0;
          r = o(r);
          for (
            var m = r !== r, I = r === null, O = dt(r), b = r === i;
            d < _;

          ) {
            var C = yi((d + _) / 2),
              F = o(t[C]),
              q = F !== i,
              z = F === null,
              j = F === F,
              se = dt(F);
            if (m) var ee = c || j;
            else
              b
                ? (ee = j && (c || q))
                : I
                ? (ee = j && q && (c || !z))
                : O
                ? (ee = j && q && !z && (c || !se))
                : z || se
                ? (ee = !1)
                : (ee = c ? F <= r : F < r);
            ee ? (d = C + 1) : (_ = C);
          }
          return Xe(_, Or);
        }
        function Ec(t, r) {
          for (var o = -1, c = t.length, d = 0, _ = []; ++o < c; ) {
            var m = t[o],
              I = r ? r(m) : m;
            if (!o || !Mt(I, O)) {
              var O = I;
              _[d++] = m === 0 ? 0 : m;
            }
          }
          return _;
        }
        function mc(t) {
          return typeof t == "number" ? t : dt(t) ? he : +t;
        }
        function ft(t) {
          if (typeof t == "string") return t;
          if (re(t)) return Oe(t, ft) + "";
          if (dt(t)) return Qu ? Qu.call(t) : "";
          var r = t + "";
          return r == "0" && 1 / t == -U ? "-0" : r;
        }
        function dn(t, r, o) {
          var c = -1,
            d = di,
            _ = t.length,
            m = !0,
            I = [],
            O = I;
          if (o) (m = !1), (d = uo);
          else if (_ >= a) {
            var b = r ? null : vm(t);
            if (b) return hi(b);
            (m = !1), (d = br), (O = new yn());
          } else O = r ? [] : I;
          e: for (; ++c < _; ) {
            var C = t[c],
              F = r ? r(C) : C;
            if (((C = o || C !== 0 ? C : 0), m && F === F)) {
              for (var q = O.length; q--; ) if (O[q] === F) continue e;
              r && O.push(F), I.push(C);
            } else d(O, F, o) || (O !== I && O.push(F), I.push(C));
          }
          return I;
        }
        function Fo(t, r) {
          return (
            (r = pn(r, t)), (t = zc(t, r)), t == null || delete t[Vt(St(r))]
          );
        }
        function Ic(t, r, o, c) {
          return Ur(t, r, o(wn(t, r)), c);
        }
        function xi(t, r, o, c) {
          for (
            var d = t.length, _ = c ? d : -1;
            (c ? _-- : ++_ < d) && r(t[_], _, t);

          );
          return o
            ? Ot(t, c ? 0 : _, c ? _ + 1 : d)
            : Ot(t, c ? _ + 1 : 0, c ? d : _);
        }
        function Tc(t, r) {
          var o = t;
          return (
            o instanceof de && (o = o.value()),
            co(
              r,
              function (c, d) {
                return d.func.apply(d.thisArg, ln([c], d.args));
              },
              o
            )
          );
        }
        function Bo(t, r, o) {
          var c = t.length;
          if (c < 2) return c ? dn(t[0]) : [];
          for (var d = -1, _ = y(c); ++d < c; )
            for (var m = t[d], I = -1; ++I < c; )
              I != d && (_[d] = Fr(_[d] || m, t[I], r, o));
          return dn(Ve(_, 1), r, o);
        }
        function vc(t, r, o) {
          for (var c = -1, d = t.length, _ = r.length, m = {}; ++c < d; ) {
            var I = c < _ ? r[c] : i;
            o(m, t[c], I);
          }
          return m;
        }
        function Go(t) {
          return De(t) ? t : [];
        }
        function Uo(t) {
          return typeof t == "function" ? t : ot;
        }
        function pn(t, r) {
          return re(t) ? t : Ko(t, r) ? [t] : Qc(Ee(t));
        }
        var fm = ae;
        function hn(t, r, o) {
          var c = t.length;
          return (o = o === i ? c : o), !r && o >= c ? t : Ot(t, r, o);
        }
        var Rc =
          Jg ||
          function (t) {
            return He.clearTimeout(t);
          };
        function Oc(t, r) {
          if (r) return t.slice();
          var o = t.length,
            c = Vu ? Vu(o) : new t.constructor(o);
          return t.copy(c), c;
        }
        function $o(t) {
          var r = new t.constructor(t.byteLength);
          return new Ti(r).set(new Ti(t)), r;
        }
        function dm(t, r) {
          var o = r ? $o(t.buffer) : t.buffer;
          return new t.constructor(o, t.byteOffset, t.byteLength);
        }
        function pm(t) {
          var r = new t.constructor(t.source, ou.exec(t));
          return (r.lastIndex = t.lastIndex), r;
        }
        function hm(t) {
          return xr ? Ie(xr.call(t)) : {};
        }
        function Sc(t, r) {
          var o = r ? $o(t.buffer) : t.buffer;
          return new t.constructor(o, t.byteOffset, t.length);
        }
        function yc(t, r) {
          if (t !== r) {
            var o = t !== i,
              c = t === null,
              d = t === t,
              _ = dt(t),
              m = r !== i,
              I = r === null,
              O = r === r,
              b = dt(r);
            if (
              (!I && !b && !_ && t > r) ||
              (_ && m && O && !I && !b) ||
              (c && m && O) ||
              (!o && O) ||
              !d
            )
              return 1;
            if (
              (!c && !_ && !b && t < r) ||
              (b && o && d && !c && !_) ||
              (I && o && d) ||
              (!m && d) ||
              !O
            )
              return -1;
          }
          return 0;
        }
        function _m(t, r, o) {
          for (
            var c = -1,
              d = t.criteria,
              _ = r.criteria,
              m = d.length,
              I = o.length;
            ++c < m;

          ) {
            var O = yc(d[c], _[c]);
            if (O) {
              if (c >= I) return O;
              var b = o[c];
              return O * (b == "desc" ? -1 : 1);
            }
          }
          return t.index - r.index;
        }
        function Ac(t, r, o, c) {
          for (
            var d = -1,
              _ = t.length,
              m = o.length,
              I = -1,
              O = r.length,
              b = Fe(_ - m, 0),
              C = y(O + b),
              F = !c;
            ++I < O;

          )
            C[I] = r[I];
          for (; ++d < m; ) (F || d < _) && (C[o[d]] = t[d]);
          for (; b--; ) C[I++] = t[d++];
          return C;
        }
        function wc(t, r, o, c) {
          for (
            var d = -1,
              _ = t.length,
              m = -1,
              I = o.length,
              O = -1,
              b = r.length,
              C = Fe(_ - I, 0),
              F = y(C + b),
              q = !c;
            ++d < C;

          )
            F[d] = t[d];
          for (var z = d; ++O < b; ) F[z + O] = r[O];
          for (; ++m < I; ) (q || d < _) && (F[z + o[m]] = t[d++]);
          return F;
        }
        function rt(t, r) {
          var o = -1,
            c = t.length;
          for (r || (r = y(c)); ++o < c; ) r[o] = t[o];
          return r;
        }
        function Ht(t, r, o, c) {
          var d = !o;
          o || (o = {});
          for (var _ = -1, m = r.length; ++_ < m; ) {
            var I = r[_],
              O = c ? c(o[I], t[I], I, o, t) : i;
            O === i && (O = t[I]), d ? Qt(o, I, O) : Nr(o, I, O);
          }
          return o;
        }
        function gm(t, r) {
          return Ht(t, Xo(t), r);
        }
        function Em(t, r) {
          return Ht(t, $c(t), r);
        }
        function Ni(t, r) {
          return function (o, c) {
            var d = re(o) ? Rg : UE,
              _ = r ? r() : {};
            return d(o, t, J(c, 2), _);
          };
        }
        function tr(t) {
          return ae(function (r, o) {
            var c = -1,
              d = o.length,
              _ = d > 1 ? o[d - 1] : i,
              m = d > 2 ? o[2] : i;
            for (
              _ = t.length > 3 && typeof _ == "function" ? (d--, _) : i,
                m && Ze(o[0], o[1], m) && ((_ = d < 3 ? i : _), (d = 1)),
                r = Ie(r);
              ++c < d;

            ) {
              var I = o[c];
              I && t(r, I, c, _);
            }
            return r;
          });
        }
        function Dc(t, r) {
          return function (o, c) {
            if (o == null) return o;
            if (!it(o)) return t(o, c);
            for (
              var d = o.length, _ = r ? d : -1, m = Ie(o);
              (r ? _-- : ++_ < d) && c(m[_], _, m) !== !1;

            );
            return o;
          };
        }
        function bc(t) {
          return function (r, o, c) {
            for (var d = -1, _ = Ie(r), m = c(r), I = m.length; I--; ) {
              var O = m[t ? I : ++d];
              if (o(_[O], O, _) === !1) break;
            }
            return r;
          };
        }
        function mm(t, r, o) {
          var c = r & D,
            d = $r(t);
          function _() {
            var m = this && this !== He && this instanceof _ ? d : t;
            return m.apply(c ? o : this, arguments);
          }
          return _;
        }
        function Cc(t) {
          return function (r) {
            r = Ee(r);
            var o = Kn(r) ? Lt(r) : i,
              c = o ? o[0] : r.charAt(0),
              d = o ? hn(o, 1).join("") : r.slice(1);
            return c[t]() + d;
          };
        }
        function nr(t) {
          return function (r) {
            return co(bf(Df(r).replace(lg, "")), t, "");
          };
        }
        function $r(t) {
          return function () {
            var r = arguments;
            switch (r.length) {
              case 0:
                return new t();
              case 1:
                return new t(r[0]);
              case 2:
                return new t(r[0], r[1]);
              case 3:
                return new t(r[0], r[1], r[2]);
              case 4:
                return new t(r[0], r[1], r[2], r[3]);
              case 5:
                return new t(r[0], r[1], r[2], r[3], r[4]);
              case 6:
                return new t(r[0], r[1], r[2], r[3], r[4], r[5]);
              case 7:
                return new t(r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
            }
            var o = er(t.prototype),
              c = t.apply(o, r);
            return ye(c) ? c : o;
          };
        }
        function Im(t, r, o) {
          var c = $r(t);
          function d() {
            for (var _ = arguments.length, m = y(_), I = _, O = rr(d); I--; )
              m[I] = arguments[I];
            var b = _ < 3 && m[0] !== O && m[_ - 1] !== O ? [] : un(m, O);
            if (((_ -= b.length), _ < o))
              return Nc(t, r, Fi, d.placeholder, i, m, b, i, i, o - _);
            var C = this && this !== He && this instanceof d ? c : t;
            return ut(C, this, m);
          }
          return d;
        }
        function Lc(t) {
          return function (r, o, c) {
            var d = Ie(r);
            if (!it(r)) {
              var _ = J(o, 3);
              (r = Ue(r)),
                (o = function (I) {
                  return _(d[I], I, d);
                });
            }
            var m = t(r, o, c);
            return m > -1 ? d[_ ? r[m] : m] : i;
          };
        }
        function Pc(t) {
          return Jt(function (r) {
            var o = r.length,
              c = o,
              d = vt.prototype.thru;
            for (t && r.reverse(); c--; ) {
              var _ = r[c];
              if (typeof _ != "function") throw new Tt(l);
              if (d && !m && $i(_) == "wrapper") var m = new vt([], !0);
            }
            for (c = m ? c : o; ++c < o; ) {
              _ = r[c];
              var I = $i(_),
                O = I == "wrapper" ? Yo(_) : i;
              O &&
              ko(O[0]) &&
              O[1] == (le | $ | M | W) &&
              !O[4].length &&
              O[9] == 1
                ? (m = m[$i(O[0])].apply(m, O[3]))
                : (m = _.length == 1 && ko(_) ? m[I]() : m.thru(_));
            }
            return function () {
              var b = arguments,
                C = b[0];
              if (m && b.length == 1 && re(C)) return m.plant(C).value();
              for (var F = 0, q = o ? r[F].apply(this, b) : C; ++F < o; )
                q = r[F].call(this, q);
              return q;
            };
          });
        }
        function Fi(t, r, o, c, d, _, m, I, O, b) {
          var C = r & le,
            F = r & D,
            q = r & P,
            z = r & ($ | H),
            j = r & Q,
            se = q ? i : $r(t);
          function ee() {
            for (var ce = arguments.length, pe = y(ce), pt = ce; pt--; )
              pe[pt] = arguments[pt];
            if (z)
              var Je = rr(ee),
                ht = Lg(pe, Je);
            if (
              (c && (pe = Ac(pe, c, d, z)),
              _ && (pe = wc(pe, _, m, z)),
              (ce -= ht),
              z && ce < b)
            ) {
              var be = un(pe, Je);
              return Nc(t, r, Fi, ee.placeholder, o, pe, be, I, O, b - ce);
            }
            var xt = F ? o : this,
              nn = q ? xt[t] : t;
            return (
              (ce = pe.length),
              I ? (pe = Um(pe, I)) : j && ce > 1 && pe.reverse(),
              C && O < ce && (pe.length = O),
              this && this !== He && this instanceof ee && (nn = se || $r(nn)),
              nn.apply(xt, pe)
            );
          }
          return ee;
        }
        function Mc(t, r) {
          return function (o, c) {
            return XE(o, t, r(c), {});
          };
        }
        function Bi(t, r) {
          return function (o, c) {
            var d;
            if (o === i && c === i) return r;
            if ((o !== i && (d = o), c !== i)) {
              if (d === i) return c;
              typeof o == "string" || typeof c == "string"
                ? ((o = ft(o)), (c = ft(c)))
                : ((o = mc(o)), (c = mc(c))),
                (d = t(o, c));
            }
            return d;
          };
        }
        function qo(t) {
          return Jt(function (r) {
            return (
              (r = Oe(r, ct(J()))),
              ae(function (o) {
                var c = this;
                return t(r, function (d) {
                  return ut(d, c, o);
                });
              })
            );
          });
        }
        function Gi(t, r) {
          r = r === i ? " " : ft(r);
          var o = r.length;
          if (o < 2) return o ? xo(r, t) : r;
          var c = xo(r, Si(t / kn(r)));
          return Kn(r) ? hn(Lt(c), 0, t).join("") : c.slice(0, t);
        }
        function Tm(t, r, o, c) {
          var d = r & D,
            _ = $r(t);
          function m() {
            for (
              var I = -1,
                O = arguments.length,
                b = -1,
                C = c.length,
                F = y(C + O),
                q = this && this !== He && this instanceof m ? _ : t;
              ++b < C;

            )
              F[b] = c[b];
            for (; O--; ) F[b++] = arguments[++I];
            return ut(q, d ? o : this, F);
          }
          return m;
        }
        function xc(t) {
          return function (r, o, c) {
            return (
              c && typeof c != "number" && Ze(r, o, c) && (o = c = i),
              (r = tn(r)),
              o === i ? ((o = r), (r = 0)) : (o = tn(o)),
              (c = c === i ? (r < o ? 1 : -1) : tn(c)),
              sm(r, o, c, t)
            );
          };
        }
        function Ui(t) {
          return function (r, o) {
            return (
              (typeof r == "string" && typeof o == "string") ||
                ((r = yt(r)), (o = yt(o))),
              t(r, o)
            );
          };
        }
        function Nc(t, r, o, c, d, _, m, I, O, b) {
          var C = r & $,
            F = C ? m : i,
            q = C ? i : m,
            z = C ? _ : i,
            j = C ? i : _;
          (r |= C ? M : X), (r &= ~(C ? X : M)), r & G || (r &= ~(D | P));
          var se = [t, r, d, z, F, j, q, I, O, b],
            ee = o.apply(i, se);
          return ko(t) && Xc(ee, se), (ee.placeholder = c), Kc(ee, t, r);
        }
        function Wo(t) {
          var r = Ne[t];
          return function (o, c) {
            if (
              ((o = yt(o)), (c = c == null ? 0 : Xe(ie(c), 292)), c && Ku(o))
            ) {
              var d = (Ee(o) + "e").split("e"),
                _ = r(d[0] + "e" + (+d[1] + c));
              return (
                (d = (Ee(_) + "e").split("e")), +(d[0] + "e" + (+d[1] - c))
              );
            }
            return r(o);
          };
        }
        var vm =
          Jn && 1 / hi(new Jn([, -0]))[1] == U
            ? function (t) {
                return new Jn(t);
              }
            : ca;
        function Fc(t) {
          return function (r) {
            var o = Ke(r);
            return o == bt ? mo(r) : o == Ct ? Gg(r) : Cg(r, t(r));
          };
        }
        function Zt(t, r, o, c, d, _, m, I) {
          var O = r & P;
          if (!O && typeof t != "function") throw new Tt(l);
          var b = c ? c.length : 0;
          if (
            (b || ((r &= ~(M | X)), (c = d = i)),
            (m = m === i ? m : Fe(ie(m), 0)),
            (I = I === i ? I : ie(I)),
            (b -= d ? d.length : 0),
            r & X)
          ) {
            var C = c,
              F = d;
            c = d = i;
          }
          var q = O ? i : Yo(t),
            z = [t, r, o, c, d, C, F, _, m, I];
          if (
            (q && Fm(z, q),
            (t = z[0]),
            (r = z[1]),
            (o = z[2]),
            (c = z[3]),
            (d = z[4]),
            (I = z[9] = z[9] === i ? (O ? 0 : t.length) : Fe(z[9] - b, 0)),
            !I && r & ($ | H) && (r &= ~($ | H)),
            !r || r == D)
          )
            var j = mm(t, r, o);
          else
            r == $ || r == H
              ? (j = Im(t, r, I))
              : (r == M || r == (D | M)) && !d.length
              ? (j = Tm(t, r, o, c))
              : (j = Fi.apply(i, z));
          var se = q ? gc : Xc;
          return Kc(se(j, z), t, r);
        }
        function Bc(t, r, o, c) {
          return t === i || (Mt(t, Zn[o]) && !me.call(c, o)) ? r : t;
        }
        function Gc(t, r, o, c, d, _) {
          return (
            ye(t) && ye(r) && (_.set(r, t), Pi(t, r, i, Gc, _), _.delete(r)), t
          );
        }
        function Rm(t) {
          return Hr(t) ? i : t;
        }
        function Uc(t, r, o, c, d, _) {
          var m = o & S,
            I = t.length,
            O = r.length;
          if (I != O && !(m && O > I)) return !1;
          var b = _.get(t),
            C = _.get(r);
          if (b && C) return b == r && C == t;
          var F = -1,
            q = !0,
            z = o & L ? new yn() : i;
          for (_.set(t, r), _.set(r, t); ++F < I; ) {
            var j = t[F],
              se = r[F];
            if (c) var ee = m ? c(se, j, F, r, t, _) : c(j, se, F, t, r, _);
            if (ee !== i) {
              if (ee) continue;
              q = !1;
              break;
            }
            if (z) {
              if (
                !fo(r, function (ce, pe) {
                  if (!br(z, pe) && (j === ce || d(j, ce, o, c, _)))
                    return z.push(pe);
                })
              ) {
                q = !1;
                break;
              }
            } else if (!(j === se || d(j, se, o, c, _))) {
              q = !1;
              break;
            }
          }
          return _.delete(t), _.delete(r), q;
        }
        function Om(t, r, o, c, d, _, m) {
          switch (o) {
            case Yn:
              if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset)
                return !1;
              (t = t.buffer), (r = r.buffer);
            case Dr:
              return !(
                t.byteLength != r.byteLength || !_(new Ti(t), new Ti(r))
              );
            case ke:
            case Et:
            case Sr:
              return Mt(+t, +r);
            case zt:
              return t.name == r.name && t.message == r.message;
            case yr:
            case Ar:
              return t == r + "";
            case bt:
              var I = mo;
            case Ct:
              var O = c & S;
              if ((I || (I = hi), t.size != r.size && !O)) return !1;
              var b = m.get(t);
              if (b) return b == r;
              (c |= L), m.set(t, r);
              var C = Uc(I(t), I(r), c, d, _, m);
              return m.delete(t), C;
            case li:
              if (xr) return xr.call(t) == xr.call(r);
          }
          return !1;
        }
        function Sm(t, r, o, c, d, _) {
          var m = o & S,
            I = Ho(t),
            O = I.length,
            b = Ho(r),
            C = b.length;
          if (O != C && !m) return !1;
          for (var F = O; F--; ) {
            var q = I[F];
            if (!(m ? q in r : me.call(r, q))) return !1;
          }
          var z = _.get(t),
            j = _.get(r);
          if (z && j) return z == r && j == t;
          var se = !0;
          _.set(t, r), _.set(r, t);
          for (var ee = m; ++F < O; ) {
            q = I[F];
            var ce = t[q],
              pe = r[q];
            if (c) var pt = m ? c(pe, ce, q, r, t, _) : c(ce, pe, q, t, r, _);
            if (!(pt === i ? ce === pe || d(ce, pe, o, c, _) : pt)) {
              se = !1;
              break;
            }
            ee || (ee = q == "constructor");
          }
          if (se && !ee) {
            var Je = t.constructor,
              ht = r.constructor;
            Je != ht &&
              "constructor" in t &&
              "constructor" in r &&
              !(
                typeof Je == "function" &&
                Je instanceof Je &&
                typeof ht == "function" &&
                ht instanceof ht
              ) &&
              (se = !1);
          }
          return _.delete(t), _.delete(r), se;
        }
        function Jt(t) {
          return Zo(Yc(t, i, ef), t + "");
        }
        function Ho(t) {
          return sc(t, Ue, Xo);
        }
        function Vo(t) {
          return sc(t, st, $c);
        }
        var Yo = Ai
          ? function (t) {
              return Ai.get(t);
            }
          : ca;
        function $i(t) {
          for (
            var r = t.name + "", o = jn[r], c = me.call(jn, r) ? o.length : 0;
            c--;

          ) {
            var d = o[c],
              _ = d.func;
            if (_ == null || _ == t) return d.name;
          }
          return r;
        }
        function rr(t) {
          var r = me.call(h, "placeholder") ? h : t;
          return r.placeholder;
        }
        function J() {
          var t = h.iteratee || la;
          return (
            (t = t === la ? lc : t),
            arguments.length ? t(arguments[0], arguments[1]) : t
          );
        }
        function qi(t, r) {
          var o = t.__data__;
          return Pm(r) ? o[typeof r == "string" ? "string" : "hash"] : o.map;
        }
        function zo(t) {
          for (var r = Ue(t), o = r.length; o--; ) {
            var c = r[o],
              d = t[c];
            r[o] = [c, d, Hc(d)];
          }
          return r;
        }
        function Dn(t, r) {
          var o = Ng(t, r);
          return ac(o) ? o : i;
        }
        function ym(t) {
          var r = me.call(t, On),
            o = t[On];
          try {
            t[On] = i;
            var c = !0;
          } catch {}
          var d = mi.call(t);
          return c && (r ? (t[On] = o) : delete t[On]), d;
        }
        var Xo = To
            ? function (t) {
                return t == null
                  ? []
                  : ((t = Ie(t)),
                    an(To(t), function (r) {
                      return zu.call(t, r);
                    }));
              }
            : fa,
          $c = To
            ? function (t) {
                for (var r = []; t; ) ln(r, Xo(t)), (t = vi(t));
                return r;
              }
            : fa,
          Ke = Qe;
        ((vo && Ke(new vo(new ArrayBuffer(1))) != Yn) ||
          (Lr && Ke(new Lr()) != bt) ||
          (Ro && Ke(Ro.resolve()) != nu) ||
          (Jn && Ke(new Jn()) != Ct) ||
          (Pr && Ke(new Pr()) != wr)) &&
          (Ke = function (t) {
            var r = Qe(t),
              o = r == Xt ? t.constructor : i,
              c = o ? bn(o) : "";
            if (c)
              switch (c) {
                case aE:
                  return Yn;
                case lE:
                  return bt;
                case uE:
                  return nu;
                case cE:
                  return Ct;
                case fE:
                  return wr;
              }
            return r;
          });
        function Am(t, r, o) {
          for (var c = -1, d = o.length; ++c < d; ) {
            var _ = o[c],
              m = _.size;
            switch (_.type) {
              case "drop":
                t += m;
                break;
              case "dropRight":
                r -= m;
                break;
              case "take":
                r = Xe(r, t + m);
                break;
              case "takeRight":
                t = Fe(t, r - m);
                break;
            }
          }
          return { start: t, end: r };
        }
        function wm(t) {
          var r = t.match(M_);
          return r ? r[1].split(x_) : [];
        }
        function qc(t, r, o) {
          r = pn(r, t);
          for (var c = -1, d = r.length, _ = !1; ++c < d; ) {
            var m = Vt(r[c]);
            if (!(_ = t != null && o(t, m))) break;
            t = t[m];
          }
          return _ || ++c != d
            ? _
            : ((d = t == null ? 0 : t.length),
              !!d && Ki(d) && jt(m, d) && (re(t) || Cn(t)));
        }
        function Dm(t) {
          var r = t.length,
            o = new t.constructor(r);
          return (
            r &&
              typeof t[0] == "string" &&
              me.call(t, "index") &&
              ((o.index = t.index), (o.input = t.input)),
            o
          );
        }
        function Wc(t) {
          return typeof t.constructor == "function" && !qr(t) ? er(vi(t)) : {};
        }
        function bm(t, r, o) {
          var c = t.constructor;
          switch (r) {
            case Dr:
              return $o(t);
            case ke:
            case Et:
              return new c(+t);
            case Yn:
              return dm(t, o);
            case Ys:
            case zs:
            case Xs:
            case Ks:
            case ks:
            case Qs:
            case Zs:
            case Js:
            case js:
              return Sc(t, o);
            case bt:
              return new c();
            case Sr:
            case Ar:
              return new c(t);
            case yr:
              return pm(t);
            case Ct:
              return new c();
            case li:
              return hm(t);
          }
        }
        function Cm(t, r) {
          var o = r.length;
          if (!o) return t;
          var c = o - 1;
          return (
            (r[c] = (o > 1 ? "& " : "") + r[c]),
            (r = r.join(o > 2 ? ", " : " ")),
            t.replace(
              P_,
              `{
/* [wrapped with ` +
                r +
                `] */
`
            )
          );
        }
        function Lm(t) {
          return re(t) || Cn(t) || !!(Xu && t && t[Xu]);
        }
        function jt(t, r) {
          var o = typeof t;
          return (
            (r = r == null ? Y : r),
            !!r &&
              (o == "number" || (o != "symbol" && H_.test(t))) &&
              t > -1 &&
              t % 1 == 0 &&
              t < r
          );
        }
        function Ze(t, r, o) {
          if (!ye(o)) return !1;
          var c = typeof r;
          return (
            c == "number" ? it(o) && jt(r, o.length) : c == "string" && r in o
          )
            ? Mt(o[r], t)
            : !1;
        }
        function Ko(t, r) {
          if (re(t)) return !1;
          var o = typeof t;
          return o == "number" ||
            o == "symbol" ||
            o == "boolean" ||
            t == null ||
            dt(t)
            ? !0
            : D_.test(t) || !w_.test(t) || (r != null && t in Ie(r));
        }
        function Pm(t) {
          var r = typeof t;
          return r == "string" ||
            r == "number" ||
            r == "symbol" ||
            r == "boolean"
            ? t !== "__proto__"
            : t === null;
        }
        function ko(t) {
          var r = $i(t),
            o = h[r];
          if (typeof o != "function" || !(r in de.prototype)) return !1;
          if (t === o) return !0;
          var c = Yo(o);
          return !!c && t === c[0];
        }
        function Mm(t) {
          return !!Hu && Hu in t;
        }
        var xm = gi ? en : da;
        function qr(t) {
          var r = t && t.constructor,
            o = (typeof r == "function" && r.prototype) || Zn;
          return t === o;
        }
        function Hc(t) {
          return t === t && !ye(t);
        }
        function Vc(t, r) {
          return function (o) {
            return o == null ? !1 : o[t] === r && (r !== i || t in Ie(o));
          };
        }
        function Nm(t) {
          var r = zi(t, function (c) {
              return o.size === g && o.clear(), c;
            }),
            o = r.cache;
          return r;
        }
        function Fm(t, r) {
          var o = t[1],
            c = r[1],
            d = o | c,
            _ = d < (D | P | le),
            m =
              (c == le && o == $) ||
              (c == le && o == W && t[7].length <= r[8]) ||
              (c == (le | W) && r[7].length <= r[8] && o == $);
          if (!(_ || m)) return t;
          c & D && ((t[2] = r[2]), (d |= o & D ? 0 : G));
          var I = r[3];
          if (I) {
            var O = t[3];
            (t[3] = O ? Ac(O, I, r[4]) : I), (t[4] = O ? un(t[3], E) : r[4]);
          }
          return (
            (I = r[5]),
            I &&
              ((O = t[5]),
              (t[5] = O ? wc(O, I, r[6]) : I),
              (t[6] = O ? un(t[5], E) : r[6])),
            (I = r[7]),
            I && (t[7] = I),
            c & le && (t[8] = t[8] == null ? r[8] : Xe(t[8], r[8])),
            t[9] == null && (t[9] = r[9]),
            (t[0] = r[0]),
            (t[1] = d),
            t
          );
        }
        function Bm(t) {
          var r = [];
          if (t != null) for (var o in Ie(t)) r.push(o);
          return r;
        }
        function Gm(t) {
          return mi.call(t);
        }
        function Yc(t, r, o) {
          return (
            (r = Fe(r === i ? t.length - 1 : r, 0)),
            function () {
              for (
                var c = arguments, d = -1, _ = Fe(c.length - r, 0), m = y(_);
                ++d < _;

              )
                m[d] = c[r + d];
              d = -1;
              for (var I = y(r + 1); ++d < r; ) I[d] = c[d];
              return (I[r] = o(m)), ut(t, this, I);
            }
          );
        }
        function zc(t, r) {
          return r.length < 2 ? t : wn(t, Ot(r, 0, -1));
        }
        function Um(t, r) {
          for (var o = t.length, c = Xe(r.length, o), d = rt(t); c--; ) {
            var _ = r[c];
            t[c] = jt(_, o) ? d[_] : i;
          }
          return t;
        }
        function Qo(t, r) {
          if (
            !(r === "constructor" && typeof t[r] == "function") &&
            r != "__proto__"
          )
            return t[r];
        }
        var Xc = kc(gc),
          Wr =
            eE ||
            function (t, r) {
              return He.setTimeout(t, r);
            },
          Zo = kc(lm);
        function Kc(t, r, o) {
          var c = r + "";
          return Zo(t, Cm(c, $m(wm(c), o)));
        }
        function kc(t) {
          var r = 0,
            o = 0;
          return function () {
            var c = iE(),
              d = Te - (c - o);
            if (((o = c), d > 0)) {
              if (++r >= Z) return arguments[0];
            } else r = 0;
            return t.apply(i, arguments);
          };
        }
        function Wi(t, r) {
          var o = -1,
            c = t.length,
            d = c - 1;
          for (r = r === i ? c : r; ++o < r; ) {
            var _ = Mo(o, d),
              m = t[_];
            (t[_] = t[o]), (t[o] = m);
          }
          return (t.length = r), t;
        }
        var Qc = Nm(function (t) {
          var r = [];
          return (
            t.charCodeAt(0) === 46 && r.push(""),
            t.replace(b_, function (o, c, d, _) {
              r.push(d ? _.replace(B_, "$1") : c || o);
            }),
            r
          );
        });
        function Vt(t) {
          if (typeof t == "string" || dt(t)) return t;
          var r = t + "";
          return r == "0" && 1 / t == -U ? "-0" : r;
        }
        function bn(t) {
          if (t != null) {
            try {
              return Ei.call(t);
            } catch {}
            try {
              return t + "";
            } catch {}
          }
          return "";
        }
        function $m(t, r) {
          return (
            It(qt, function (o) {
              var c = "_." + o[0];
              r & o[1] && !di(t, c) && t.push(c);
            }),
            t.sort()
          );
        }
        function Zc(t) {
          if (t instanceof de) return t.clone();
          var r = new vt(t.__wrapped__, t.__chain__);
          return (
            (r.__actions__ = rt(t.__actions__)),
            (r.__index__ = t.__index__),
            (r.__values__ = t.__values__),
            r
          );
        }
        function qm(t, r, o) {
          (o ? Ze(t, r, o) : r === i) ? (r = 1) : (r = Fe(ie(r), 0));
          var c = t == null ? 0 : t.length;
          if (!c || r < 1) return [];
          for (var d = 0, _ = 0, m = y(Si(c / r)); d < c; )
            m[_++] = Ot(t, d, (d += r));
          return m;
        }
        function Wm(t) {
          for (
            var r = -1, o = t == null ? 0 : t.length, c = 0, d = [];
            ++r < o;

          ) {
            var _ = t[r];
            _ && (d[c++] = _);
          }
          return d;
        }
        function Hm() {
          var t = arguments.length;
          if (!t) return [];
          for (var r = y(t - 1), o = arguments[0], c = t; c--; )
            r[c - 1] = arguments[c];
          return ln(re(o) ? rt(o) : [o], Ve(r, 1));
        }
        var Vm = ae(function (t, r) {
            return De(t) ? Fr(t, Ve(r, 1, De, !0)) : [];
          }),
          Ym = ae(function (t, r) {
            var o = St(r);
            return (
              De(o) && (o = i), De(t) ? Fr(t, Ve(r, 1, De, !0), J(o, 2)) : []
            );
          }),
          zm = ae(function (t, r) {
            var o = St(r);
            return De(o) && (o = i), De(t) ? Fr(t, Ve(r, 1, De, !0), i, o) : [];
          });
        function Xm(t, r, o) {
          var c = t == null ? 0 : t.length;
          return c
            ? ((r = o || r === i ? 1 : ie(r)), Ot(t, r < 0 ? 0 : r, c))
            : [];
        }
        function Km(t, r, o) {
          var c = t == null ? 0 : t.length;
          return c
            ? ((r = o || r === i ? 1 : ie(r)),
              (r = c - r),
              Ot(t, 0, r < 0 ? 0 : r))
            : [];
        }
        function km(t, r) {
          return t && t.length ? xi(t, J(r, 3), !0, !0) : [];
        }
        function Qm(t, r) {
          return t && t.length ? xi(t, J(r, 3), !0) : [];
        }
        function Zm(t, r, o, c) {
          var d = t == null ? 0 : t.length;
          return d
            ? (o && typeof o != "number" && Ze(t, r, o) && ((o = 0), (c = d)),
              HE(t, r, o, c))
            : [];
        }
        function Jc(t, r, o) {
          var c = t == null ? 0 : t.length;
          if (!c) return -1;
          var d = o == null ? 0 : ie(o);
          return d < 0 && (d = Fe(c + d, 0)), pi(t, J(r, 3), d);
        }
        function jc(t, r, o) {
          var c = t == null ? 0 : t.length;
          if (!c) return -1;
          var d = c - 1;
          return (
            o !== i && ((d = ie(o)), (d = o < 0 ? Fe(c + d, 0) : Xe(d, c - 1))),
            pi(t, J(r, 3), d, !0)
          );
        }
        function ef(t) {
          var r = t == null ? 0 : t.length;
          return r ? Ve(t, 1) : [];
        }
        function Jm(t) {
          var r = t == null ? 0 : t.length;
          return r ? Ve(t, U) : [];
        }
        function jm(t, r) {
          var o = t == null ? 0 : t.length;
          return o ? ((r = r === i ? 1 : ie(r)), Ve(t, r)) : [];
        }
        function eI(t) {
          for (var r = -1, o = t == null ? 0 : t.length, c = {}; ++r < o; ) {
            var d = t[r];
            c[d[0]] = d[1];
          }
          return c;
        }
        function tf(t) {
          return t && t.length ? t[0] : i;
        }
        function tI(t, r, o) {
          var c = t == null ? 0 : t.length;
          if (!c) return -1;
          var d = o == null ? 0 : ie(o);
          return d < 0 && (d = Fe(c + d, 0)), Xn(t, r, d);
        }
        function nI(t) {
          var r = t == null ? 0 : t.length;
          return r ? Ot(t, 0, -1) : [];
        }
        var rI = ae(function (t) {
            var r = Oe(t, Go);
            return r.length && r[0] === t[0] ? Do(r) : [];
          }),
          iI = ae(function (t) {
            var r = St(t),
              o = Oe(t, Go);
            return (
              r === St(o) ? (r = i) : o.pop(),
              o.length && o[0] === t[0] ? Do(o, J(r, 2)) : []
            );
          }),
          sI = ae(function (t) {
            var r = St(t),
              o = Oe(t, Go);
            return (
              (r = typeof r == "function" ? r : i),
              r && o.pop(),
              o.length && o[0] === t[0] ? Do(o, i, r) : []
            );
          });
        function oI(t, r) {
          return t == null ? "" : nE.call(t, r);
        }
        function St(t) {
          var r = t == null ? 0 : t.length;
          return r ? t[r - 1] : i;
        }
        function aI(t, r, o) {
          var c = t == null ? 0 : t.length;
          if (!c) return -1;
          var d = c;
          return (
            o !== i && ((d = ie(o)), (d = d < 0 ? Fe(c + d, 0) : Xe(d, c - 1))),
            r === r ? $g(t, r, d) : pi(t, Nu, d, !0)
          );
        }
        function lI(t, r) {
          return t && t.length ? dc(t, ie(r)) : i;
        }
        var uI = ae(nf);
        function nf(t, r) {
          return t && t.length && r && r.length ? Po(t, r) : t;
        }
        function cI(t, r, o) {
          return t && t.length && r && r.length ? Po(t, r, J(o, 2)) : t;
        }
        function fI(t, r, o) {
          return t && t.length && r && r.length ? Po(t, r, i, o) : t;
        }
        var dI = Jt(function (t, r) {
          var o = t == null ? 0 : t.length,
            c = So(t, r);
          return (
            _c(
              t,
              Oe(r, function (d) {
                return jt(d, o) ? +d : d;
              }).sort(yc)
            ),
            c
          );
        });
        function pI(t, r) {
          var o = [];
          if (!(t && t.length)) return o;
          var c = -1,
            d = [],
            _ = t.length;
          for (r = J(r, 3); ++c < _; ) {
            var m = t[c];
            r(m, c, t) && (o.push(m), d.push(c));
          }
          return _c(t, d), o;
        }
        function Jo(t) {
          return t == null ? t : oE.call(t);
        }
        function hI(t, r, o) {
          var c = t == null ? 0 : t.length;
          return c
            ? (o && typeof o != "number" && Ze(t, r, o)
                ? ((r = 0), (o = c))
                : ((r = r == null ? 0 : ie(r)), (o = o === i ? c : ie(o))),
              Ot(t, r, o))
            : [];
        }
        function _I(t, r) {
          return Mi(t, r);
        }
        function gI(t, r, o) {
          return No(t, r, J(o, 2));
        }
        function EI(t, r) {
          var o = t == null ? 0 : t.length;
          if (o) {
            var c = Mi(t, r);
            if (c < o && Mt(t[c], r)) return c;
          }
          return -1;
        }
        function mI(t, r) {
          return Mi(t, r, !0);
        }
        function II(t, r, o) {
          return No(t, r, J(o, 2), !0);
        }
        function TI(t, r) {
          var o = t == null ? 0 : t.length;
          if (o) {
            var c = Mi(t, r, !0) - 1;
            if (Mt(t[c], r)) return c;
          }
          return -1;
        }
        function vI(t) {
          return t && t.length ? Ec(t) : [];
        }
        function RI(t, r) {
          return t && t.length ? Ec(t, J(r, 2)) : [];
        }
        function OI(t) {
          var r = t == null ? 0 : t.length;
          return r ? Ot(t, 1, r) : [];
        }
        function SI(t, r, o) {
          return t && t.length
            ? ((r = o || r === i ? 1 : ie(r)), Ot(t, 0, r < 0 ? 0 : r))
            : [];
        }
        function yI(t, r, o) {
          var c = t == null ? 0 : t.length;
          return c
            ? ((r = o || r === i ? 1 : ie(r)),
              (r = c - r),
              Ot(t, r < 0 ? 0 : r, c))
            : [];
        }
        function AI(t, r) {
          return t && t.length ? xi(t, J(r, 3), !1, !0) : [];
        }
        function wI(t, r) {
          return t && t.length ? xi(t, J(r, 3)) : [];
        }
        var DI = ae(function (t) {
            return dn(Ve(t, 1, De, !0));
          }),
          bI = ae(function (t) {
            var r = St(t);
            return De(r) && (r = i), dn(Ve(t, 1, De, !0), J(r, 2));
          }),
          CI = ae(function (t) {
            var r = St(t);
            return (
              (r = typeof r == "function" ? r : i), dn(Ve(t, 1, De, !0), i, r)
            );
          });
        function LI(t) {
          return t && t.length ? dn(t) : [];
        }
        function PI(t, r) {
          return t && t.length ? dn(t, J(r, 2)) : [];
        }
        function MI(t, r) {
          return (
            (r = typeof r == "function" ? r : i),
            t && t.length ? dn(t, i, r) : []
          );
        }
        function jo(t) {
          if (!(t && t.length)) return [];
          var r = 0;
          return (
            (t = an(t, function (o) {
              if (De(o)) return (r = Fe(o.length, r)), !0;
            })),
            go(r, function (o) {
              return Oe(t, po(o));
            })
          );
        }
        function rf(t, r) {
          if (!(t && t.length)) return [];
          var o = jo(t);
          return r == null
            ? o
            : Oe(o, function (c) {
                return ut(r, i, c);
              });
        }
        var xI = ae(function (t, r) {
            return De(t) ? Fr(t, r) : [];
          }),
          NI = ae(function (t) {
            return Bo(an(t, De));
          }),
          FI = ae(function (t) {
            var r = St(t);
            return De(r) && (r = i), Bo(an(t, De), J(r, 2));
          }),
          BI = ae(function (t) {
            var r = St(t);
            return (r = typeof r == "function" ? r : i), Bo(an(t, De), i, r);
          }),
          GI = ae(jo);
        function UI(t, r) {
          return vc(t || [], r || [], Nr);
        }
        function $I(t, r) {
          return vc(t || [], r || [], Ur);
        }
        var qI = ae(function (t) {
          var r = t.length,
            o = r > 1 ? t[r - 1] : i;
          return (o = typeof o == "function" ? (t.pop(), o) : i), rf(t, o);
        });
        function sf(t) {
          var r = h(t);
          return (r.__chain__ = !0), r;
        }
        function WI(t, r) {
          return r(t), t;
        }
        function Hi(t, r) {
          return r(t);
        }
        var HI = Jt(function (t) {
          var r = t.length,
            o = r ? t[0] : 0,
            c = this.__wrapped__,
            d = function (_) {
              return So(_, t);
            };
          return r > 1 ||
            this.__actions__.length ||
            !(c instanceof de) ||
            !jt(o)
            ? this.thru(d)
            : ((c = c.slice(o, +o + (r ? 1 : 0))),
              c.__actions__.push({ func: Hi, args: [d], thisArg: i }),
              new vt(c, this.__chain__).thru(function (_) {
                return r && !_.length && _.push(i), _;
              }));
        });
        function VI() {
          return sf(this);
        }
        function YI() {
          return new vt(this.value(), this.__chain__);
        }
        function zI() {
          this.__values__ === i && (this.__values__ = If(this.value()));
          var t = this.__index__ >= this.__values__.length,
            r = t ? i : this.__values__[this.__index__++];
          return { done: t, value: r };
        }
        function XI() {
          return this;
        }
        function KI(t) {
          for (var r, o = this; o instanceof Di; ) {
            var c = Zc(o);
            (c.__index__ = 0),
              (c.__values__ = i),
              r ? (d.__wrapped__ = c) : (r = c);
            var d = c;
            o = o.__wrapped__;
          }
          return (d.__wrapped__ = t), r;
        }
        function kI() {
          var t = this.__wrapped__;
          if (t instanceof de) {
            var r = t;
            return (
              this.__actions__.length && (r = new de(this)),
              (r = r.reverse()),
              r.__actions__.push({ func: Hi, args: [Jo], thisArg: i }),
              new vt(r, this.__chain__)
            );
          }
          return this.thru(Jo);
        }
        function QI() {
          return Tc(this.__wrapped__, this.__actions__);
        }
        var ZI = Ni(function (t, r, o) {
          me.call(t, o) ? ++t[o] : Qt(t, o, 1);
        });
        function JI(t, r, o) {
          var c = re(t) ? Mu : WE;
          return o && Ze(t, r, o) && (r = i), c(t, J(r, 3));
        }
        function jI(t, r) {
          var o = re(t) ? an : rc;
          return o(t, J(r, 3));
        }
        var eT = Lc(Jc),
          tT = Lc(jc);
        function nT(t, r) {
          return Ve(Vi(t, r), 1);
        }
        function rT(t, r) {
          return Ve(Vi(t, r), U);
        }
        function iT(t, r, o) {
          return (o = o === i ? 1 : ie(o)), Ve(Vi(t, r), o);
        }
        function of(t, r) {
          var o = re(t) ? It : fn;
          return o(t, J(r, 3));
        }
        function af(t, r) {
          var o = re(t) ? Og : nc;
          return o(t, J(r, 3));
        }
        var sT = Ni(function (t, r, o) {
          me.call(t, o) ? t[o].push(r) : Qt(t, o, [r]);
        });
        function oT(t, r, o, c) {
          (t = it(t) ? t : sr(t)), (o = o && !c ? ie(o) : 0);
          var d = t.length;
          return (
            o < 0 && (o = Fe(d + o, 0)),
            ki(t) ? o <= d && t.indexOf(r, o) > -1 : !!d && Xn(t, r, o) > -1
          );
        }
        var aT = ae(function (t, r, o) {
            var c = -1,
              d = typeof r == "function",
              _ = it(t) ? y(t.length) : [];
            return (
              fn(t, function (m) {
                _[++c] = d ? ut(r, m, o) : Br(m, r, o);
              }),
              _
            );
          }),
          lT = Ni(function (t, r, o) {
            Qt(t, o, r);
          });
        function Vi(t, r) {
          var o = re(t) ? Oe : uc;
          return o(t, J(r, 3));
        }
        function uT(t, r, o, c) {
          return t == null
            ? []
            : (re(r) || (r = r == null ? [] : [r]),
              (o = c ? i : o),
              re(o) || (o = o == null ? [] : [o]),
              pc(t, r, o));
        }
        var cT = Ni(
          function (t, r, o) {
            t[o ? 0 : 1].push(r);
          },
          function () {
            return [[], []];
          }
        );
        function fT(t, r, o) {
          var c = re(t) ? co : Bu,
            d = arguments.length < 3;
          return c(t, J(r, 4), o, d, fn);
        }
        function dT(t, r, o) {
          var c = re(t) ? Sg : Bu,
            d = arguments.length < 3;
          return c(t, J(r, 4), o, d, nc);
        }
        function pT(t, r) {
          var o = re(t) ? an : rc;
          return o(t, Xi(J(r, 3)));
        }
        function hT(t) {
          var r = re(t) ? Ju : om;
          return r(t);
        }
        function _T(t, r, o) {
          (o ? Ze(t, r, o) : r === i) ? (r = 1) : (r = ie(r));
          var c = re(t) ? BE : am;
          return c(t, r);
        }
        function gT(t) {
          var r = re(t) ? GE : um;
          return r(t);
        }
        function ET(t) {
          if (t == null) return 0;
          if (it(t)) return ki(t) ? kn(t) : t.length;
          var r = Ke(t);
          return r == bt || r == Ct ? t.size : Co(t).length;
        }
        function mT(t, r, o) {
          var c = re(t) ? fo : cm;
          return o && Ze(t, r, o) && (r = i), c(t, J(r, 3));
        }
        var IT = ae(function (t, r) {
            if (t == null) return [];
            var o = r.length;
            return (
              o > 1 && Ze(t, r[0], r[1])
                ? (r = [])
                : o > 2 && Ze(r[0], r[1], r[2]) && (r = [r[0]]),
              pc(t, Ve(r, 1), [])
            );
          }),
          Yi =
            jg ||
            function () {
              return He.Date.now();
            };
        function TT(t, r) {
          if (typeof r != "function") throw new Tt(l);
          return (
            (t = ie(t)),
            function () {
              if (--t < 1) return r.apply(this, arguments);
            }
          );
        }
        function lf(t, r, o) {
          return (
            (r = o ? i : r),
            (r = t && r == null ? t.length : r),
            Zt(t, le, i, i, i, i, r)
          );
        }
        function uf(t, r) {
          var o;
          if (typeof r != "function") throw new Tt(l);
          return (
            (t = ie(t)),
            function () {
              return (
                --t > 0 && (o = r.apply(this, arguments)), t <= 1 && (r = i), o
              );
            }
          );
        }
        var ea = ae(function (t, r, o) {
            var c = D;
            if (o.length) {
              var d = un(o, rr(ea));
              c |= M;
            }
            return Zt(t, c, r, o, d);
          }),
          cf = ae(function (t, r, o) {
            var c = D | P;
            if (o.length) {
              var d = un(o, rr(cf));
              c |= M;
            }
            return Zt(r, c, t, o, d);
          });
        function ff(t, r, o) {
          r = o ? i : r;
          var c = Zt(t, $, i, i, i, i, i, r);
          return (c.placeholder = ff.placeholder), c;
        }
        function df(t, r, o) {
          r = o ? i : r;
          var c = Zt(t, H, i, i, i, i, i, r);
          return (c.placeholder = df.placeholder), c;
        }
        function pf(t, r, o) {
          var c,
            d,
            _,
            m,
            I,
            O,
            b = 0,
            C = !1,
            F = !1,
            q = !0;
          if (typeof t != "function") throw new Tt(l);
          (r = yt(r) || 0),
            ye(o) &&
              ((C = !!o.leading),
              (F = "maxWait" in o),
              (_ = F ? Fe(yt(o.maxWait) || 0, r) : _),
              (q = "trailing" in o ? !!o.trailing : q));
          function z(be) {
            var xt = c,
              nn = d;
            return (c = d = i), (b = be), (m = t.apply(nn, xt)), m;
          }
          function j(be) {
            return (b = be), (I = Wr(ce, r)), C ? z(be) : m;
          }
          function se(be) {
            var xt = be - O,
              nn = be - b,
              Pf = r - xt;
            return F ? Xe(Pf, _ - nn) : Pf;
          }
          function ee(be) {
            var xt = be - O,
              nn = be - b;
            return O === i || xt >= r || xt < 0 || (F && nn >= _);
          }
          function ce() {
            var be = Yi();
            if (ee(be)) return pe(be);
            I = Wr(ce, se(be));
          }
          function pe(be) {
            return (I = i), q && c ? z(be) : ((c = d = i), m);
          }
          function pt() {
            I !== i && Rc(I), (b = 0), (c = O = d = I = i);
          }
          function Je() {
            return I === i ? m : pe(Yi());
          }
          function ht() {
            var be = Yi(),
              xt = ee(be);
            if (((c = arguments), (d = this), (O = be), xt)) {
              if (I === i) return j(O);
              if (F) return Rc(I), (I = Wr(ce, r)), z(O);
            }
            return I === i && (I = Wr(ce, r)), m;
          }
          return (ht.cancel = pt), (ht.flush = Je), ht;
        }
        var vT = ae(function (t, r) {
            return tc(t, 1, r);
          }),
          RT = ae(function (t, r, o) {
            return tc(t, yt(r) || 0, o);
          });
        function OT(t) {
          return Zt(t, Q);
        }
        function zi(t, r) {
          if (typeof t != "function" || (r != null && typeof r != "function"))
            throw new Tt(l);
          var o = function () {
            var c = arguments,
              d = r ? r.apply(this, c) : c[0],
              _ = o.cache;
            if (_.has(d)) return _.get(d);
            var m = t.apply(this, c);
            return (o.cache = _.set(d, m) || _), m;
          };
          return (o.cache = new (zi.Cache || kt)()), o;
        }
        zi.Cache = kt;
        function Xi(t) {
          if (typeof t != "function") throw new Tt(l);
          return function () {
            var r = arguments;
            switch (r.length) {
              case 0:
                return !t.call(this);
              case 1:
                return !t.call(this, r[0]);
              case 2:
                return !t.call(this, r[0], r[1]);
              case 3:
                return !t.call(this, r[0], r[1], r[2]);
            }
            return !t.apply(this, r);
          };
        }
        function ST(t) {
          return uf(2, t);
        }
        var yT = fm(function (t, r) {
            r =
              r.length == 1 && re(r[0])
                ? Oe(r[0], ct(J()))
                : Oe(Ve(r, 1), ct(J()));
            var o = r.length;
            return ae(function (c) {
              for (var d = -1, _ = Xe(c.length, o); ++d < _; )
                c[d] = r[d].call(this, c[d]);
              return ut(t, this, c);
            });
          }),
          ta = ae(function (t, r) {
            var o = un(r, rr(ta));
            return Zt(t, M, i, r, o);
          }),
          hf = ae(function (t, r) {
            var o = un(r, rr(hf));
            return Zt(t, X, i, r, o);
          }),
          AT = Jt(function (t, r) {
            return Zt(t, W, i, i, i, r);
          });
        function wT(t, r) {
          if (typeof t != "function") throw new Tt(l);
          return (r = r === i ? r : ie(r)), ae(t, r);
        }
        function DT(t, r) {
          if (typeof t != "function") throw new Tt(l);
          return (
            (r = r == null ? 0 : Fe(ie(r), 0)),
            ae(function (o) {
              var c = o[r],
                d = hn(o, 0, r);
              return c && ln(d, c), ut(t, this, d);
            })
          );
        }
        function bT(t, r, o) {
          var c = !0,
            d = !0;
          if (typeof t != "function") throw new Tt(l);
          return (
            ye(o) &&
              ((c = "leading" in o ? !!o.leading : c),
              (d = "trailing" in o ? !!o.trailing : d)),
            pf(t, r, { leading: c, maxWait: r, trailing: d })
          );
        }
        function CT(t) {
          return lf(t, 1);
        }
        function LT(t, r) {
          return ta(Uo(r), t);
        }
        function PT() {
          if (!arguments.length) return [];
          var t = arguments[0];
          return re(t) ? t : [t];
        }
        function MT(t) {
          return Rt(t, A);
        }
        function xT(t, r) {
          return (r = typeof r == "function" ? r : i), Rt(t, A, r);
        }
        function NT(t) {
          return Rt(t, R | A);
        }
        function FT(t, r) {
          return (r = typeof r == "function" ? r : i), Rt(t, R | A, r);
        }
        function BT(t, r) {
          return r == null || ec(t, r, Ue(r));
        }
        function Mt(t, r) {
          return t === r || (t !== t && r !== r);
        }
        var GT = Ui(wo),
          UT = Ui(function (t, r) {
            return t >= r;
          }),
          Cn = oc(
            (function () {
              return arguments;
            })()
          )
            ? oc
            : function (t) {
                return Ae(t) && me.call(t, "callee") && !zu.call(t, "callee");
              },
          re = y.isArray,
          $T = wu ? ct(wu) : KE;
        function it(t) {
          return t != null && Ki(t.length) && !en(t);
        }
        function De(t) {
          return Ae(t) && it(t);
        }
        function qT(t) {
          return t === !0 || t === !1 || (Ae(t) && Qe(t) == ke);
        }
        var _n = tE || da,
          WT = Du ? ct(Du) : kE;
        function HT(t) {
          return Ae(t) && t.nodeType === 1 && !Hr(t);
        }
        function VT(t) {
          if (t == null) return !0;
          if (
            it(t) &&
            (re(t) ||
              typeof t == "string" ||
              typeof t.splice == "function" ||
              _n(t) ||
              ir(t) ||
              Cn(t))
          )
            return !t.length;
          var r = Ke(t);
          if (r == bt || r == Ct) return !t.size;
          if (qr(t)) return !Co(t).length;
          for (var o in t) if (me.call(t, o)) return !1;
          return !0;
        }
        function YT(t, r) {
          return Gr(t, r);
        }
        function zT(t, r, o) {
          o = typeof o == "function" ? o : i;
          var c = o ? o(t, r) : i;
          return c === i ? Gr(t, r, i, o) : !!c;
        }
        function na(t) {
          if (!Ae(t)) return !1;
          var r = Qe(t);
          return (
            r == zt ||
            r == ze ||
            (typeof t.message == "string" &&
              typeof t.name == "string" &&
              !Hr(t))
          );
        }
        function XT(t) {
          return typeof t == "number" && Ku(t);
        }
        function en(t) {
          if (!ye(t)) return !1;
          var r = Qe(t);
          return r == ai || r == tu || r == Ge || r == E_;
        }
        function _f(t) {
          return typeof t == "number" && t == ie(t);
        }
        function Ki(t) {
          return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Y;
        }
        function ye(t) {
          var r = typeof t;
          return t != null && (r == "object" || r == "function");
        }
        function Ae(t) {
          return t != null && typeof t == "object";
        }
        var gf = bu ? ct(bu) : ZE;
        function KT(t, r) {
          return t === r || bo(t, r, zo(r));
        }
        function kT(t, r, o) {
          return (o = typeof o == "function" ? o : i), bo(t, r, zo(r), o);
        }
        function QT(t) {
          return Ef(t) && t != +t;
        }
        function ZT(t) {
          if (xm(t)) throw new te(u);
          return ac(t);
        }
        function JT(t) {
          return t === null;
        }
        function jT(t) {
          return t == null;
        }
        function Ef(t) {
          return typeof t == "number" || (Ae(t) && Qe(t) == Sr);
        }
        function Hr(t) {
          if (!Ae(t) || Qe(t) != Xt) return !1;
          var r = vi(t);
          if (r === null) return !0;
          var o = me.call(r, "constructor") && r.constructor;
          return typeof o == "function" && o instanceof o && Ei.call(o) == kg;
        }
        var ra = Cu ? ct(Cu) : JE;
        function ev(t) {
          return _f(t) && t >= -Y && t <= Y;
        }
        var mf = Lu ? ct(Lu) : jE;
        function ki(t) {
          return typeof t == "string" || (!re(t) && Ae(t) && Qe(t) == Ar);
        }
        function dt(t) {
          return typeof t == "symbol" || (Ae(t) && Qe(t) == li);
        }
        var ir = Pu ? ct(Pu) : em;
        function tv(t) {
          return t === i;
        }
        function nv(t) {
          return Ae(t) && Ke(t) == wr;
        }
        function rv(t) {
          return Ae(t) && Qe(t) == I_;
        }
        var iv = Ui(Lo),
          sv = Ui(function (t, r) {
            return t <= r;
          });
        function If(t) {
          if (!t) return [];
          if (it(t)) return ki(t) ? Lt(t) : rt(t);
          if (Cr && t[Cr]) return Bg(t[Cr]());
          var r = Ke(t),
            o = r == bt ? mo : r == Ct ? hi : sr;
          return o(t);
        }
        function tn(t) {
          if (!t) return t === 0 ? t : 0;
          if (((t = yt(t)), t === U || t === -U)) {
            var r = t < 0 ? -1 : 1;
            return r * k;
          }
          return t === t ? t : 0;
        }
        function ie(t) {
          var r = tn(t),
            o = r % 1;
          return r === r ? (o ? r - o : r) : 0;
        }
        function Tf(t) {
          return t ? An(ie(t), 0, _e) : 0;
        }
        function yt(t) {
          if (typeof t == "number") return t;
          if (dt(t)) return he;
          if (ye(t)) {
            var r = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = ye(r) ? r + "" : r;
          }
          if (typeof t != "string") return t === 0 ? t : +t;
          t = Gu(t);
          var o = $_.test(t);
          return o || W_.test(t)
            ? Tg(t.slice(2), o ? 2 : 8)
            : U_.test(t)
            ? he
            : +t;
        }
        function vf(t) {
          return Ht(t, st(t));
        }
        function ov(t) {
          return t ? An(ie(t), -Y, Y) : t === 0 ? t : 0;
        }
        function Ee(t) {
          return t == null ? "" : ft(t);
        }
        var av = tr(function (t, r) {
            if (qr(r) || it(r)) {
              Ht(r, Ue(r), t);
              return;
            }
            for (var o in r) me.call(r, o) && Nr(t, o, r[o]);
          }),
          Rf = tr(function (t, r) {
            Ht(r, st(r), t);
          }),
          Qi = tr(function (t, r, o, c) {
            Ht(r, st(r), t, c);
          }),
          lv = tr(function (t, r, o, c) {
            Ht(r, Ue(r), t, c);
          }),
          uv = Jt(So);
        function cv(t, r) {
          var o = er(t);
          return r == null ? o : ju(o, r);
        }
        var fv = ae(function (t, r) {
            t = Ie(t);
            var o = -1,
              c = r.length,
              d = c > 2 ? r[2] : i;
            for (d && Ze(r[0], r[1], d) && (c = 1); ++o < c; )
              for (var _ = r[o], m = st(_), I = -1, O = m.length; ++I < O; ) {
                var b = m[I],
                  C = t[b];
                (C === i || (Mt(C, Zn[b]) && !me.call(t, b))) && (t[b] = _[b]);
              }
            return t;
          }),
          dv = ae(function (t) {
            return t.push(i, Gc), ut(Of, i, t);
          });
        function pv(t, r) {
          return xu(t, J(r, 3), Wt);
        }
        function hv(t, r) {
          return xu(t, J(r, 3), Ao);
        }
        function _v(t, r) {
          return t == null ? t : yo(t, J(r, 3), st);
        }
        function gv(t, r) {
          return t == null ? t : ic(t, J(r, 3), st);
        }
        function Ev(t, r) {
          return t && Wt(t, J(r, 3));
        }
        function mv(t, r) {
          return t && Ao(t, J(r, 3));
        }
        function Iv(t) {
          return t == null ? [] : Li(t, Ue(t));
        }
        function Tv(t) {
          return t == null ? [] : Li(t, st(t));
        }
        function ia(t, r, o) {
          var c = t == null ? i : wn(t, r);
          return c === i ? o : c;
        }
        function vv(t, r) {
          return t != null && qc(t, r, VE);
        }
        function sa(t, r) {
          return t != null && qc(t, r, YE);
        }
        var Rv = Mc(function (t, r, o) {
            r != null && typeof r.toString != "function" && (r = mi.call(r)),
              (t[r] = o);
          }, aa(ot)),
          Ov = Mc(function (t, r, o) {
            r != null && typeof r.toString != "function" && (r = mi.call(r)),
              me.call(t, r) ? t[r].push(o) : (t[r] = [o]);
          }, J),
          Sv = ae(Br);
        function Ue(t) {
          return it(t) ? Zu(t) : Co(t);
        }
        function st(t) {
          return it(t) ? Zu(t, !0) : tm(t);
        }
        function yv(t, r) {
          var o = {};
          return (
            (r = J(r, 3)),
            Wt(t, function (c, d, _) {
              Qt(o, r(c, d, _), c);
            }),
            o
          );
        }
        function Av(t, r) {
          var o = {};
          return (
            (r = J(r, 3)),
            Wt(t, function (c, d, _) {
              Qt(o, d, r(c, d, _));
            }),
            o
          );
        }
        var wv = tr(function (t, r, o) {
            Pi(t, r, o);
          }),
          Of = tr(function (t, r, o, c) {
            Pi(t, r, o, c);
          }),
          Dv = Jt(function (t, r) {
            var o = {};
            if (t == null) return o;
            var c = !1;
            (r = Oe(r, function (_) {
              return (_ = pn(_, t)), c || (c = _.length > 1), _;
            })),
              Ht(t, Vo(t), o),
              c && (o = Rt(o, R | T | A, Rm));
            for (var d = r.length; d--; ) Fo(o, r[d]);
            return o;
          });
        function bv(t, r) {
          return Sf(t, Xi(J(r)));
        }
        var Cv = Jt(function (t, r) {
          return t == null ? {} : rm(t, r);
        });
        function Sf(t, r) {
          if (t == null) return {};
          var o = Oe(Vo(t), function (c) {
            return [c];
          });
          return (
            (r = J(r)),
            hc(t, o, function (c, d) {
              return r(c, d[0]);
            })
          );
        }
        function Lv(t, r, o) {
          r = pn(r, t);
          var c = -1,
            d = r.length;
          for (d || ((d = 1), (t = i)); ++c < d; ) {
            var _ = t == null ? i : t[Vt(r[c])];
            _ === i && ((c = d), (_ = o)), (t = en(_) ? _.call(t) : _);
          }
          return t;
        }
        function Pv(t, r, o) {
          return t == null ? t : Ur(t, r, o);
        }
        function Mv(t, r, o, c) {
          return (
            (c = typeof c == "function" ? c : i), t == null ? t : Ur(t, r, o, c)
          );
        }
        var yf = Fc(Ue),
          Af = Fc(st);
        function xv(t, r, o) {
          var c = re(t),
            d = c || _n(t) || ir(t);
          if (((r = J(r, 4)), o == null)) {
            var _ = t && t.constructor;
            d
              ? (o = c ? new _() : [])
              : ye(t)
              ? (o = en(_) ? er(vi(t)) : {})
              : (o = {});
          }
          return (
            (d ? It : Wt)(t, function (m, I, O) {
              return r(o, m, I, O);
            }),
            o
          );
        }
        function Nv(t, r) {
          return t == null ? !0 : Fo(t, r);
        }
        function Fv(t, r, o) {
          return t == null ? t : Ic(t, r, Uo(o));
        }
        function Bv(t, r, o, c) {
          return (
            (c = typeof c == "function" ? c : i),
            t == null ? t : Ic(t, r, Uo(o), c)
          );
        }
        function sr(t) {
          return t == null ? [] : Eo(t, Ue(t));
        }
        function Gv(t) {
          return t == null ? [] : Eo(t, st(t));
        }
        function Uv(t, r, o) {
          return (
            o === i && ((o = r), (r = i)),
            o !== i && ((o = yt(o)), (o = o === o ? o : 0)),
            r !== i && ((r = yt(r)), (r = r === r ? r : 0)),
            An(yt(t), r, o)
          );
        }
        function $v(t, r, o) {
          return (
            (r = tn(r)),
            o === i ? ((o = r), (r = 0)) : (o = tn(o)),
            (t = yt(t)),
            zE(t, r, o)
          );
        }
        function qv(t, r, o) {
          if (
            (o && typeof o != "boolean" && Ze(t, r, o) && (r = o = i),
            o === i &&
              (typeof r == "boolean"
                ? ((o = r), (r = i))
                : typeof t == "boolean" && ((o = t), (t = i))),
            t === i && r === i
              ? ((t = 0), (r = 1))
              : ((t = tn(t)), r === i ? ((r = t), (t = 0)) : (r = tn(r))),
            t > r)
          ) {
            var c = t;
            (t = r), (r = c);
          }
          if (o || t % 1 || r % 1) {
            var d = ku();
            return Xe(t + d * (r - t + Ig("1e-" + ((d + "").length - 1))), r);
          }
          return Mo(t, r);
        }
        var Wv = nr(function (t, r, o) {
          return (r = r.toLowerCase()), t + (o ? wf(r) : r);
        });
        function wf(t) {
          return oa(Ee(t).toLowerCase());
        }
        function Df(t) {
          return (t = Ee(t)), t && t.replace(V_, Pg).replace(ug, "");
        }
        function Hv(t, r, o) {
          (t = Ee(t)), (r = ft(r));
          var c = t.length;
          o = o === i ? c : An(ie(o), 0, c);
          var d = o;
          return (o -= r.length), o >= 0 && t.slice(o, d) == r;
        }
        function Vv(t) {
          return (t = Ee(t)), t && S_.test(t) ? t.replace(iu, Mg) : t;
        }
        function Yv(t) {
          return (t = Ee(t)), t && C_.test(t) ? t.replace(eo, "\\$&") : t;
        }
        var zv = nr(function (t, r, o) {
            return t + (o ? "-" : "") + r.toLowerCase();
          }),
          Xv = nr(function (t, r, o) {
            return t + (o ? " " : "") + r.toLowerCase();
          }),
          Kv = Cc("toLowerCase");
        function kv(t, r, o) {
          (t = Ee(t)), (r = ie(r));
          var c = r ? kn(t) : 0;
          if (!r || c >= r) return t;
          var d = (r - c) / 2;
          return Gi(yi(d), o) + t + Gi(Si(d), o);
        }
        function Qv(t, r, o) {
          (t = Ee(t)), (r = ie(r));
          var c = r ? kn(t) : 0;
          return r && c < r ? t + Gi(r - c, o) : t;
        }
        function Zv(t, r, o) {
          (t = Ee(t)), (r = ie(r));
          var c = r ? kn(t) : 0;
          return r && c < r ? Gi(r - c, o) + t : t;
        }
        function Jv(t, r, o) {
          return (
            o || r == null ? (r = 0) : r && (r = +r),
            sE(Ee(t).replace(to, ""), r || 0)
          );
        }
        function jv(t, r, o) {
          return (
            (o ? Ze(t, r, o) : r === i) ? (r = 1) : (r = ie(r)), xo(Ee(t), r)
          );
        }
        function eR() {
          var t = arguments,
            r = Ee(t[0]);
          return t.length < 3 ? r : r.replace(t[1], t[2]);
        }
        var tR = nr(function (t, r, o) {
          return t + (o ? "_" : "") + r.toLowerCase();
        });
        function nR(t, r, o) {
          return (
            o && typeof o != "number" && Ze(t, r, o) && (r = o = i),
            (o = o === i ? _e : o >>> 0),
            o
              ? ((t = Ee(t)),
                t &&
                (typeof r == "string" || (r != null && !ra(r))) &&
                ((r = ft(r)), !r && Kn(t))
                  ? hn(Lt(t), 0, o)
                  : t.split(r, o))
              : []
          );
        }
        var rR = nr(function (t, r, o) {
          return t + (o ? " " : "") + oa(r);
        });
        function iR(t, r, o) {
          return (
            (t = Ee(t)),
            (o = o == null ? 0 : An(ie(o), 0, t.length)),
            (r = ft(r)),
            t.slice(o, o + r.length) == r
          );
        }
        function sR(t, r, o) {
          var c = h.templateSettings;
          o && Ze(t, r, o) && (r = i), (t = Ee(t)), (r = Qi({}, r, c, Bc));
          var d = Qi({}, r.imports, c.imports, Bc),
            _ = Ue(d),
            m = Eo(d, _),
            I,
            O,
            b = 0,
            C = r.interpolate || ui,
            F = "__p += '",
            q = Io(
              (r.escape || ui).source +
                "|" +
                C.source +
                "|" +
                (C === su ? G_ : ui).source +
                "|" +
                (r.evaluate || ui).source +
                "|$",
              "g"
            ),
            z =
              "//# sourceURL=" +
              (me.call(r, "sourceURL")
                ? (r.sourceURL + "").replace(/\s/g, " ")
                : "lodash.templateSources[" + ++hg + "]") +
              `
`;
          t.replace(q, function (ee, ce, pe, pt, Je, ht) {
            return (
              pe || (pe = pt),
              (F += t.slice(b, ht).replace(Y_, xg)),
              ce &&
                ((I = !0),
                (F +=
                  `' +
__e(` +
                  ce +
                  `) +
'`)),
              Je &&
                ((O = !0),
                (F +=
                  `';
` +
                  Je +
                  `;
__p += '`)),
              pe &&
                (F +=
                  `' +
((__t = (` +
                  pe +
                  `)) == null ? '' : __t) +
'`),
              (b = ht + ee.length),
              ee
            );
          }),
            (F += `';
`);
          var j = me.call(r, "variable") && r.variable;
          if (!j)
            F =
              `with (obj) {
` +
              F +
              `
}
`;
          else if (F_.test(j)) throw new te(f);
          (F = (O ? F.replace(T_, "") : F)
            .replace(v_, "$1")
            .replace(R_, "$1;")),
            (F =
              "function(" +
              (j || "obj") +
              `) {
` +
              (j
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (I ? ", __e = _.escape" : "") +
              (O
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              F +
              `return __p
}`);
          var se = Cf(function () {
            return ge(_, z + "return " + F).apply(i, m);
          });
          if (((se.source = F), na(se))) throw se;
          return se;
        }
        function oR(t) {
          return Ee(t).toLowerCase();
        }
        function aR(t) {
          return Ee(t).toUpperCase();
        }
        function lR(t, r, o) {
          if (((t = Ee(t)), t && (o || r === i))) return Gu(t);
          if (!t || !(r = ft(r))) return t;
          var c = Lt(t),
            d = Lt(r),
            _ = Uu(c, d),
            m = $u(c, d) + 1;
          return hn(c, _, m).join("");
        }
        function uR(t, r, o) {
          if (((t = Ee(t)), t && (o || r === i))) return t.slice(0, Wu(t) + 1);
          if (!t || !(r = ft(r))) return t;
          var c = Lt(t),
            d = $u(c, Lt(r)) + 1;
          return hn(c, 0, d).join("");
        }
        function cR(t, r, o) {
          if (((t = Ee(t)), t && (o || r === i))) return t.replace(to, "");
          if (!t || !(r = ft(r))) return t;
          var c = Lt(t),
            d = Uu(c, Lt(r));
          return hn(c, d).join("");
        }
        function fR(t, r) {
          var o = ue,
            c = K;
          if (ye(r)) {
            var d = "separator" in r ? r.separator : d;
            (o = "length" in r ? ie(r.length) : o),
              (c = "omission" in r ? ft(r.omission) : c);
          }
          t = Ee(t);
          var _ = t.length;
          if (Kn(t)) {
            var m = Lt(t);
            _ = m.length;
          }
          if (o >= _) return t;
          var I = o - kn(c);
          if (I < 1) return c;
          var O = m ? hn(m, 0, I).join("") : t.slice(0, I);
          if (d === i) return O + c;
          if ((m && (I += O.length - I), ra(d))) {
            if (t.slice(I).search(d)) {
              var b,
                C = O;
              for (
                d.global || (d = Io(d.source, Ee(ou.exec(d)) + "g")),
                  d.lastIndex = 0;
                (b = d.exec(C));

              )
                var F = b.index;
              O = O.slice(0, F === i ? I : F);
            }
          } else if (t.indexOf(ft(d), I) != I) {
            var q = O.lastIndexOf(d);
            q > -1 && (O = O.slice(0, q));
          }
          return O + c;
        }
        function dR(t) {
          return (t = Ee(t)), t && O_.test(t) ? t.replace(ru, qg) : t;
        }
        var pR = nr(function (t, r, o) {
            return t + (o ? " " : "") + r.toUpperCase();
          }),
          oa = Cc("toUpperCase");
        function bf(t, r, o) {
          return (
            (t = Ee(t)),
            (r = o ? i : r),
            r === i ? (Fg(t) ? Vg(t) : wg(t)) : t.match(r) || []
          );
        }
        var Cf = ae(function (t, r) {
            try {
              return ut(t, i, r);
            } catch (o) {
              return na(o) ? o : new te(o);
            }
          }),
          hR = Jt(function (t, r) {
            return (
              It(r, function (o) {
                (o = Vt(o)), Qt(t, o, ea(t[o], t));
              }),
              t
            );
          });
        function _R(t) {
          var r = t == null ? 0 : t.length,
            o = J();
          return (
            (t = r
              ? Oe(t, function (c) {
                  if (typeof c[1] != "function") throw new Tt(l);
                  return [o(c[0]), c[1]];
                })
              : []),
            ae(function (c) {
              for (var d = -1; ++d < r; ) {
                var _ = t[d];
                if (ut(_[0], this, c)) return ut(_[1], this, c);
              }
            })
          );
        }
        function gR(t) {
          return qE(Rt(t, R));
        }
        function aa(t) {
          return function () {
            return t;
          };
        }
        function ER(t, r) {
          return t == null || t !== t ? r : t;
        }
        var mR = Pc(),
          IR = Pc(!0);
        function ot(t) {
          return t;
        }
        function la(t) {
          return lc(typeof t == "function" ? t : Rt(t, R));
        }
        function TR(t) {
          return cc(Rt(t, R));
        }
        function vR(t, r) {
          return fc(t, Rt(r, R));
        }
        var RR = ae(function (t, r) {
            return function (o) {
              return Br(o, t, r);
            };
          }),
          OR = ae(function (t, r) {
            return function (o) {
              return Br(t, o, r);
            };
          });
        function ua(t, r, o) {
          var c = Ue(r),
            d = Li(r, c);
          o == null &&
            !(ye(r) && (d.length || !c.length)) &&
            ((o = r), (r = t), (t = this), (d = Li(r, Ue(r))));
          var _ = !(ye(o) && "chain" in o) || !!o.chain,
            m = en(t);
          return (
            It(d, function (I) {
              var O = r[I];
              (t[I] = O),
                m &&
                  (t.prototype[I] = function () {
                    var b = this.__chain__;
                    if (_ || b) {
                      var C = t(this.__wrapped__),
                        F = (C.__actions__ = rt(this.__actions__));
                      return (
                        F.push({ func: O, args: arguments, thisArg: t }),
                        (C.__chain__ = b),
                        C
                      );
                    }
                    return O.apply(t, ln([this.value()], arguments));
                  });
            }),
            t
          );
        }
        function SR() {
          return He._ === this && (He._ = Qg), this;
        }
        function ca() {}
        function yR(t) {
          return (
            (t = ie(t)),
            ae(function (r) {
              return dc(r, t);
            })
          );
        }
        var AR = qo(Oe),
          wR = qo(Mu),
          DR = qo(fo);
        function Lf(t) {
          return Ko(t) ? po(Vt(t)) : im(t);
        }
        function bR(t) {
          return function (r) {
            return t == null ? i : wn(t, r);
          };
        }
        var CR = xc(),
          LR = xc(!0);
        function fa() {
          return [];
        }
        function da() {
          return !1;
        }
        function PR() {
          return {};
        }
        function MR() {
          return "";
        }
        function xR() {
          return !0;
        }
        function NR(t, r) {
          if (((t = ie(t)), t < 1 || t > Y)) return [];
          var o = _e,
            c = Xe(t, _e);
          (r = J(r)), (t -= _e);
          for (var d = go(c, r); ++o < t; ) r(o);
          return d;
        }
        function FR(t) {
          return re(t) ? Oe(t, Vt) : dt(t) ? [t] : rt(Qc(Ee(t)));
        }
        function BR(t) {
          var r = ++Kg;
          return Ee(t) + r;
        }
        var GR = Bi(function (t, r) {
            return t + r;
          }, 0),
          UR = Wo("ceil"),
          $R = Bi(function (t, r) {
            return t / r;
          }, 1),
          qR = Wo("floor");
        function WR(t) {
          return t && t.length ? Ci(t, ot, wo) : i;
        }
        function HR(t, r) {
          return t && t.length ? Ci(t, J(r, 2), wo) : i;
        }
        function VR(t) {
          return Fu(t, ot);
        }
        function YR(t, r) {
          return Fu(t, J(r, 2));
        }
        function zR(t) {
          return t && t.length ? Ci(t, ot, Lo) : i;
        }
        function XR(t, r) {
          return t && t.length ? Ci(t, J(r, 2), Lo) : i;
        }
        var KR = Bi(function (t, r) {
            return t * r;
          }, 1),
          kR = Wo("round"),
          QR = Bi(function (t, r) {
            return t - r;
          }, 0);
        function ZR(t) {
          return t && t.length ? _o(t, ot) : 0;
        }
        function JR(t, r) {
          return t && t.length ? _o(t, J(r, 2)) : 0;
        }
        return (
          (h.after = TT),
          (h.ary = lf),
          (h.assign = av),
          (h.assignIn = Rf),
          (h.assignInWith = Qi),
          (h.assignWith = lv),
          (h.at = uv),
          (h.before = uf),
          (h.bind = ea),
          (h.bindAll = hR),
          (h.bindKey = cf),
          (h.castArray = PT),
          (h.chain = sf),
          (h.chunk = qm),
          (h.compact = Wm),
          (h.concat = Hm),
          (h.cond = _R),
          (h.conforms = gR),
          (h.constant = aa),
          (h.countBy = ZI),
          (h.create = cv),
          (h.curry = ff),
          (h.curryRight = df),
          (h.debounce = pf),
          (h.defaults = fv),
          (h.defaultsDeep = dv),
          (h.defer = vT),
          (h.delay = RT),
          (h.difference = Vm),
          (h.differenceBy = Ym),
          (h.differenceWith = zm),
          (h.drop = Xm),
          (h.dropRight = Km),
          (h.dropRightWhile = km),
          (h.dropWhile = Qm),
          (h.fill = Zm),
          (h.filter = jI),
          (h.flatMap = nT),
          (h.flatMapDeep = rT),
          (h.flatMapDepth = iT),
          (h.flatten = ef),
          (h.flattenDeep = Jm),
          (h.flattenDepth = jm),
          (h.flip = OT),
          (h.flow = mR),
          (h.flowRight = IR),
          (h.fromPairs = eI),
          (h.functions = Iv),
          (h.functionsIn = Tv),
          (h.groupBy = sT),
          (h.initial = nI),
          (h.intersection = rI),
          (h.intersectionBy = iI),
          (h.intersectionWith = sI),
          (h.invert = Rv),
          (h.invertBy = Ov),
          (h.invokeMap = aT),
          (h.iteratee = la),
          (h.keyBy = lT),
          (h.keys = Ue),
          (h.keysIn = st),
          (h.map = Vi),
          (h.mapKeys = yv),
          (h.mapValues = Av),
          (h.matches = TR),
          (h.matchesProperty = vR),
          (h.memoize = zi),
          (h.merge = wv),
          (h.mergeWith = Of),
          (h.method = RR),
          (h.methodOf = OR),
          (h.mixin = ua),
          (h.negate = Xi),
          (h.nthArg = yR),
          (h.omit = Dv),
          (h.omitBy = bv),
          (h.once = ST),
          (h.orderBy = uT),
          (h.over = AR),
          (h.overArgs = yT),
          (h.overEvery = wR),
          (h.overSome = DR),
          (h.partial = ta),
          (h.partialRight = hf),
          (h.partition = cT),
          (h.pick = Cv),
          (h.pickBy = Sf),
          (h.property = Lf),
          (h.propertyOf = bR),
          (h.pull = uI),
          (h.pullAll = nf),
          (h.pullAllBy = cI),
          (h.pullAllWith = fI),
          (h.pullAt = dI),
          (h.range = CR),
          (h.rangeRight = LR),
          (h.rearg = AT),
          (h.reject = pT),
          (h.remove = pI),
          (h.rest = wT),
          (h.reverse = Jo),
          (h.sampleSize = _T),
          (h.set = Pv),
          (h.setWith = Mv),
          (h.shuffle = gT),
          (h.slice = hI),
          (h.sortBy = IT),
          (h.sortedUniq = vI),
          (h.sortedUniqBy = RI),
          (h.split = nR),
          (h.spread = DT),
          (h.tail = OI),
          (h.take = SI),
          (h.takeRight = yI),
          (h.takeRightWhile = AI),
          (h.takeWhile = wI),
          (h.tap = WI),
          (h.throttle = bT),
          (h.thru = Hi),
          (h.toArray = If),
          (h.toPairs = yf),
          (h.toPairsIn = Af),
          (h.toPath = FR),
          (h.toPlainObject = vf),
          (h.transform = xv),
          (h.unary = CT),
          (h.union = DI),
          (h.unionBy = bI),
          (h.unionWith = CI),
          (h.uniq = LI),
          (h.uniqBy = PI),
          (h.uniqWith = MI),
          (h.unset = Nv),
          (h.unzip = jo),
          (h.unzipWith = rf),
          (h.update = Fv),
          (h.updateWith = Bv),
          (h.values = sr),
          (h.valuesIn = Gv),
          (h.without = xI),
          (h.words = bf),
          (h.wrap = LT),
          (h.xor = NI),
          (h.xorBy = FI),
          (h.xorWith = BI),
          (h.zip = GI),
          (h.zipObject = UI),
          (h.zipObjectDeep = $I),
          (h.zipWith = qI),
          (h.entries = yf),
          (h.entriesIn = Af),
          (h.extend = Rf),
          (h.extendWith = Qi),
          ua(h, h),
          (h.add = GR),
          (h.attempt = Cf),
          (h.camelCase = Wv),
          (h.capitalize = wf),
          (h.ceil = UR),
          (h.clamp = Uv),
          (h.clone = MT),
          (h.cloneDeep = NT),
          (h.cloneDeepWith = FT),
          (h.cloneWith = xT),
          (h.conformsTo = BT),
          (h.deburr = Df),
          (h.defaultTo = ER),
          (h.divide = $R),
          (h.endsWith = Hv),
          (h.eq = Mt),
          (h.escape = Vv),
          (h.escapeRegExp = Yv),
          (h.every = JI),
          (h.find = eT),
          (h.findIndex = Jc),
          (h.findKey = pv),
          (h.findLast = tT),
          (h.findLastIndex = jc),
          (h.findLastKey = hv),
          (h.floor = qR),
          (h.forEach = of),
          (h.forEachRight = af),
          (h.forIn = _v),
          (h.forInRight = gv),
          (h.forOwn = Ev),
          (h.forOwnRight = mv),
          (h.get = ia),
          (h.gt = GT),
          (h.gte = UT),
          (h.has = vv),
          (h.hasIn = sa),
          (h.head = tf),
          (h.identity = ot),
          (h.includes = oT),
          (h.indexOf = tI),
          (h.inRange = $v),
          (h.invoke = Sv),
          (h.isArguments = Cn),
          (h.isArray = re),
          (h.isArrayBuffer = $T),
          (h.isArrayLike = it),
          (h.isArrayLikeObject = De),
          (h.isBoolean = qT),
          (h.isBuffer = _n),
          (h.isDate = WT),
          (h.isElement = HT),
          (h.isEmpty = VT),
          (h.isEqual = YT),
          (h.isEqualWith = zT),
          (h.isError = na),
          (h.isFinite = XT),
          (h.isFunction = en),
          (h.isInteger = _f),
          (h.isLength = Ki),
          (h.isMap = gf),
          (h.isMatch = KT),
          (h.isMatchWith = kT),
          (h.isNaN = QT),
          (h.isNative = ZT),
          (h.isNil = jT),
          (h.isNull = JT),
          (h.isNumber = Ef),
          (h.isObject = ye),
          (h.isObjectLike = Ae),
          (h.isPlainObject = Hr),
          (h.isRegExp = ra),
          (h.isSafeInteger = ev),
          (h.isSet = mf),
          (h.isString = ki),
          (h.isSymbol = dt),
          (h.isTypedArray = ir),
          (h.isUndefined = tv),
          (h.isWeakMap = nv),
          (h.isWeakSet = rv),
          (h.join = oI),
          (h.kebabCase = zv),
          (h.last = St),
          (h.lastIndexOf = aI),
          (h.lowerCase = Xv),
          (h.lowerFirst = Kv),
          (h.lt = iv),
          (h.lte = sv),
          (h.max = WR),
          (h.maxBy = HR),
          (h.mean = VR),
          (h.meanBy = YR),
          (h.min = zR),
          (h.minBy = XR),
          (h.stubArray = fa),
          (h.stubFalse = da),
          (h.stubObject = PR),
          (h.stubString = MR),
          (h.stubTrue = xR),
          (h.multiply = KR),
          (h.nth = lI),
          (h.noConflict = SR),
          (h.noop = ca),
          (h.now = Yi),
          (h.pad = kv),
          (h.padEnd = Qv),
          (h.padStart = Zv),
          (h.parseInt = Jv),
          (h.random = qv),
          (h.reduce = fT),
          (h.reduceRight = dT),
          (h.repeat = jv),
          (h.replace = eR),
          (h.result = Lv),
          (h.round = kR),
          (h.runInContext = v),
          (h.sample = hT),
          (h.size = ET),
          (h.snakeCase = tR),
          (h.some = mT),
          (h.sortedIndex = _I),
          (h.sortedIndexBy = gI),
          (h.sortedIndexOf = EI),
          (h.sortedLastIndex = mI),
          (h.sortedLastIndexBy = II),
          (h.sortedLastIndexOf = TI),
          (h.startCase = rR),
          (h.startsWith = iR),
          (h.subtract = QR),
          (h.sum = ZR),
          (h.sumBy = JR),
          (h.template = sR),
          (h.times = NR),
          (h.toFinite = tn),
          (h.toInteger = ie),
          (h.toLength = Tf),
          (h.toLower = oR),
          (h.toNumber = yt),
          (h.toSafeInteger = ov),
          (h.toString = Ee),
          (h.toUpper = aR),
          (h.trim = lR),
          (h.trimEnd = uR),
          (h.trimStart = cR),
          (h.truncate = fR),
          (h.unescape = dR),
          (h.uniqueId = BR),
          (h.upperCase = pR),
          (h.upperFirst = oa),
          (h.each = of),
          (h.eachRight = af),
          (h.first = tf),
          ua(
            h,
            (function () {
              var t = {};
              return (
                Wt(h, function (r, o) {
                  me.call(h.prototype, o) || (t[o] = r);
                }),
                t
              );
            })(),
            { chain: !1 }
          ),
          (h.VERSION = s),
          It(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (t) {
              h[t].placeholder = h;
            }
          ),
          It(["drop", "take"], function (t, r) {
            (de.prototype[t] = function (o) {
              o = o === i ? 1 : Fe(ie(o), 0);
              var c = this.__filtered__ && !r ? new de(this) : this.clone();
              return (
                c.__filtered__
                  ? (c.__takeCount__ = Xe(o, c.__takeCount__))
                  : c.__views__.push({
                      size: Xe(o, _e),
                      type: t + (c.__dir__ < 0 ? "Right" : ""),
                    }),
                c
              );
            }),
              (de.prototype[t + "Right"] = function (o) {
                return this.reverse()[t](o).reverse();
              });
          }),
          It(["filter", "map", "takeWhile"], function (t, r) {
            var o = r + 1,
              c = o == B || o == N;
            de.prototype[t] = function (d) {
              var _ = this.clone();
              return (
                _.__iteratees__.push({ iteratee: J(d, 3), type: o }),
                (_.__filtered__ = _.__filtered__ || c),
                _
              );
            };
          }),
          It(["head", "last"], function (t, r) {
            var o = "take" + (r ? "Right" : "");
            de.prototype[t] = function () {
              return this[o](1).value()[0];
            };
          }),
          It(["initial", "tail"], function (t, r) {
            var o = "drop" + (r ? "" : "Right");
            de.prototype[t] = function () {
              return this.__filtered__ ? new de(this) : this[o](1);
            };
          }),
          (de.prototype.compact = function () {
            return this.filter(ot);
          }),
          (de.prototype.find = function (t) {
            return this.filter(t).head();
          }),
          (de.prototype.findLast = function (t) {
            return this.reverse().find(t);
          }),
          (de.prototype.invokeMap = ae(function (t, r) {
            return typeof t == "function"
              ? new de(this)
              : this.map(function (o) {
                  return Br(o, t, r);
                });
          })),
          (de.prototype.reject = function (t) {
            return this.filter(Xi(J(t)));
          }),
          (de.prototype.slice = function (t, r) {
            t = ie(t);
            var o = this;
            return o.__filtered__ && (t > 0 || r < 0)
              ? new de(o)
              : (t < 0 ? (o = o.takeRight(-t)) : t && (o = o.drop(t)),
                r !== i &&
                  ((r = ie(r)), (o = r < 0 ? o.dropRight(-r) : o.take(r - t))),
                o);
          }),
          (de.prototype.takeRightWhile = function (t) {
            return this.reverse().takeWhile(t).reverse();
          }),
          (de.prototype.toArray = function () {
            return this.take(_e);
          }),
          Wt(de.prototype, function (t, r) {
            var o = /^(?:filter|find|map|reject)|While$/.test(r),
              c = /^(?:head|last)$/.test(r),
              d = h[c ? "take" + (r == "last" ? "Right" : "") : r],
              _ = c || /^find/.test(r);
            !d ||
              (h.prototype[r] = function () {
                var m = this.__wrapped__,
                  I = c ? [1] : arguments,
                  O = m instanceof de,
                  b = I[0],
                  C = O || re(m),
                  F = function (ce) {
                    var pe = d.apply(h, ln([ce], I));
                    return c && q ? pe[0] : pe;
                  };
                C &&
                  o &&
                  typeof b == "function" &&
                  b.length != 1 &&
                  (O = C = !1);
                var q = this.__chain__,
                  z = !!this.__actions__.length,
                  j = _ && !q,
                  se = O && !z;
                if (!_ && C) {
                  m = se ? m : new de(this);
                  var ee = t.apply(m, I);
                  return (
                    ee.__actions__.push({ func: Hi, args: [F], thisArg: i }),
                    new vt(ee, q)
                  );
                }
                return j && se
                  ? t.apply(this, I)
                  : ((ee = this.thru(F)),
                    j ? (c ? ee.value()[0] : ee.value()) : ee);
              });
          }),
          It(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (t) {
              var r = _i[t],
                o = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                c = /^(?:pop|shift)$/.test(t);
              h.prototype[t] = function () {
                var d = arguments;
                if (c && !this.__chain__) {
                  var _ = this.value();
                  return r.apply(re(_) ? _ : [], d);
                }
                return this[o](function (m) {
                  return r.apply(re(m) ? m : [], d);
                });
              };
            }
          ),
          Wt(de.prototype, function (t, r) {
            var o = h[r];
            if (o) {
              var c = o.name + "";
              me.call(jn, c) || (jn[c] = []), jn[c].push({ name: r, func: o });
            }
          }),
          (jn[Fi(i, P).name] = [{ name: "wrapper", func: i }]),
          (de.prototype.clone = dE),
          (de.prototype.reverse = pE),
          (de.prototype.value = hE),
          (h.prototype.at = HI),
          (h.prototype.chain = VI),
          (h.prototype.commit = YI),
          (h.prototype.next = zI),
          (h.prototype.plant = KI),
          (h.prototype.reverse = kI),
          (h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = QI),
          (h.prototype.first = h.prototype.head),
          Cr && (h.prototype[Cr] = XI),
          h
        );
      },
      Qn = Yg();
    Rn ? (((Rn.exports = Qn)._ = Qn), (ao._ = Qn)) : (He._ = Qn);
  }).call(Vr);
})(Ga, Ga.exports);
const e0 = Ga.exports;
var Kd = { exports: {} },
  El = { exports: {} },
  kd = function (n, i) {
    return function () {
      for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
        a[u] = arguments[u];
      return n.apply(i, a);
    };
  },
  t0 = kd,
  ml = Object.prototype.toString,
  Il = (function (e) {
    return function (n) {
      var i = ml.call(n);
      return e[i] || (e[i] = i.slice(8, -1).toLowerCase());
    };
  })(Object.create(null));
function Wn(e) {
  return (
    (e = e.toLowerCase()),
    function (i) {
      return Il(i) === e;
    }
  );
}
function Tl(e) {
  return Array.isArray(e);
}
function fs(e) {
  return typeof e > "u";
}
function n0(e) {
  return (
    e !== null &&
    !fs(e) &&
    e.constructor !== null &&
    !fs(e.constructor) &&
    typeof e.constructor.isBuffer == "function" &&
    e.constructor.isBuffer(e)
  );
}
var Qd = Wn("ArrayBuffer");
function r0(e) {
  var n;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (n = ArrayBuffer.isView(e))
      : (n = e && e.buffer && Qd(e.buffer)),
    n
  );
}
function i0(e) {
  return typeof e == "string";
}
function s0(e) {
  return typeof e == "number";
}
function Zd(e) {
  return e !== null && typeof e == "object";
}
function ss(e) {
  if (Il(e) !== "object") return !1;
  var n = Object.getPrototypeOf(e);
  return n === null || n === Object.prototype;
}
var o0 = Wn("Date"),
  a0 = Wn("File"),
  l0 = Wn("Blob"),
  u0 = Wn("FileList");
function vl(e) {
  return ml.call(e) === "[object Function]";
}
function c0(e) {
  return Zd(e) && vl(e.pipe);
}
function f0(e) {
  var n = "[object FormData]";
  return (
    e &&
    ((typeof FormData == "function" && e instanceof FormData) ||
      ml.call(e) === n ||
      (vl(e.toString) && e.toString() === n))
  );
}
var d0 = Wn("URLSearchParams");
function p0(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function h0() {
  return typeof navigator < "u" &&
    (navigator.product === "ReactNative" ||
      navigator.product === "NativeScript" ||
      navigator.product === "NS")
    ? !1
    : typeof window < "u" && typeof document < "u";
}
function Rl(e, n) {
  if (!(e === null || typeof e > "u"))
    if ((typeof e != "object" && (e = [e]), Tl(e)))
      for (var i = 0, s = e.length; i < s; i++) n.call(null, e[i], i, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && n.call(null, e[a], a, e);
}
function Ua() {
  var e = {};
  function n(a, u) {
    ss(e[u]) && ss(a)
      ? (e[u] = Ua(e[u], a))
      : ss(a)
      ? (e[u] = Ua({}, a))
      : Tl(a)
      ? (e[u] = a.slice())
      : (e[u] = a);
  }
  for (var i = 0, s = arguments.length; i < s; i++) Rl(arguments[i], n);
  return e;
}
function _0(e, n, i) {
  return (
    Rl(n, function (a, u) {
      i && typeof a == "function" ? (e[u] = t0(a, i)) : (e[u] = a);
    }),
    e
  );
}
function g0(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function E0(e, n, i, s) {
  (e.prototype = Object.create(n.prototype, s)),
    (e.prototype.constructor = e),
    i && Object.assign(e.prototype, i);
}
function m0(e, n, i) {
  var s,
    a,
    u,
    l = {};
  n = n || {};
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      (u = s[a]), l[u] || ((n[u] = e[u]), (l[u] = !0));
    e = Object.getPrototypeOf(e);
  } while (e && (!i || i(e, n)) && e !== Object.prototype);
  return n;
}
function I0(e, n, i) {
  (e = String(e)),
    (i === void 0 || i > e.length) && (i = e.length),
    (i -= n.length);
  var s = e.indexOf(n, i);
  return s !== -1 && s === i;
}
function T0(e) {
  if (!e) return null;
  var n = e.length;
  if (fs(n)) return null;
  for (var i = new Array(n); n-- > 0; ) i[n] = e[n];
  return i;
}
var v0 = (function (e) {
    return function (n) {
      return e && n instanceof e;
    };
  })(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)),
  Ye = {
    isArray: Tl,
    isArrayBuffer: Qd,
    isBuffer: n0,
    isFormData: f0,
    isArrayBufferView: r0,
    isString: i0,
    isNumber: s0,
    isObject: Zd,
    isPlainObject: ss,
    isUndefined: fs,
    isDate: o0,
    isFile: a0,
    isBlob: l0,
    isFunction: vl,
    isStream: c0,
    isURLSearchParams: d0,
    isStandardBrowserEnv: h0,
    forEach: Rl,
    merge: Ua,
    extend: _0,
    trim: p0,
    stripBOM: g0,
    inherits: E0,
    toFlatObject: m0,
    kindOf: Il,
    kindOfTest: Wn,
    endsWith: I0,
    toArray: T0,
    isTypedArray: v0,
    isFileList: u0,
  },
  or = Ye;
function Mf(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
var Jd = function (n, i, s) {
    if (!i) return n;
    var a;
    if (s) a = s(i);
    else if (or.isURLSearchParams(i)) a = i.toString();
    else {
      var u = [];
      or.forEach(i, function (p, g) {
        p === null ||
          typeof p > "u" ||
          (or.isArray(p) ? (g = g + "[]") : (p = [p]),
          or.forEach(p, function (R) {
            or.isDate(R)
              ? (R = R.toISOString())
              : or.isObject(R) && (R = JSON.stringify(R)),
              u.push(Mf(g) + "=" + Mf(R));
          }));
      }),
        (a = u.join("&"));
    }
    if (a) {
      var l = n.indexOf("#");
      l !== -1 && (n = n.slice(0, l)),
        (n += (n.indexOf("?") === -1 ? "?" : "&") + a);
    }
    return n;
  },
  R0 = Ye;
function Is() {
  this.handlers = [];
}
Is.prototype.use = function (n, i, s) {
  return (
    this.handlers.push({
      fulfilled: n,
      rejected: i,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null,
    }),
    this.handlers.length - 1
  );
};
Is.prototype.eject = function (n) {
  this.handlers[n] && (this.handlers[n] = null);
};
Is.prototype.forEach = function (n) {
  R0.forEach(this.handlers, function (s) {
    s !== null && n(s);
  });
};
var O0 = Is,
  S0 = Ye,
  y0 = function (n, i) {
    S0.forEach(n, function (a, u) {
      u !== i &&
        u.toUpperCase() === i.toUpperCase() &&
        ((n[i] = a), delete n[u]);
    });
  },
  jd = Ye;
function dr(e, n, i, s, a) {
  Error.call(this),
    (this.message = e),
    (this.name = "AxiosError"),
    n && (this.code = n),
    i && (this.config = i),
    s && (this.request = s),
    a && (this.response = a);
}
jd.inherits(dr, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
var ep = dr.prototype,
  tp = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
].forEach(function (e) {
  tp[e] = { value: e };
});
Object.defineProperties(dr, tp);
Object.defineProperty(ep, "isAxiosError", { value: !0 });
dr.from = function (e, n, i, s, a, u) {
  var l = Object.create(ep);
  return (
    jd.toFlatObject(e, l, function (p) {
      return p !== Error.prototype;
    }),
    dr.call(l, e.message, n, i, s, a),
    (l.name = e.name),
    u && Object.assign(l, u),
    l
  );
};
var Ir = dr,
  np = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Nt = Ye;
function A0(e, n) {
  n = n || new FormData();
  var i = [];
  function s(u) {
    return u === null
      ? ""
      : Nt.isDate(u)
      ? u.toISOString()
      : Nt.isArrayBuffer(u) || Nt.isTypedArray(u)
      ? typeof Blob == "function"
        ? new Blob([u])
        : Buffer.from(u)
      : u;
  }
  function a(u, l) {
    if (Nt.isPlainObject(u) || Nt.isArray(u)) {
      if (i.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + l);
      i.push(u),
        Nt.forEach(u, function (p, g) {
          if (!Nt.isUndefined(p)) {
            var E = l ? l + "." + g : g,
              R;
            if (p && !l && typeof p == "object") {
              if (Nt.endsWith(g, "{}")) p = JSON.stringify(p);
              else if (Nt.endsWith(g, "[]") && (R = Nt.toArray(p))) {
                R.forEach(function (T) {
                  !Nt.isUndefined(T) && n.append(E, s(T));
                });
                return;
              }
            }
            a(p, E);
          }
        }),
        i.pop();
    } else n.append(l, s(u));
  }
  return a(e), n;
}
var rp = A0,
  pa,
  xf;
function w0() {
  if (xf) return pa;
  xf = 1;
  var e = Ir;
  return (
    (pa = function (i, s, a) {
      var u = a.config.validateStatus;
      !a.status || !u || u(a.status)
        ? i(a)
        : s(
            new e(
              "Request failed with status code " + a.status,
              [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][
                Math.floor(a.status / 100) - 4
              ],
              a.config,
              a.request,
              a
            )
          );
    }),
    pa
  );
}
var ha, Nf;
function D0() {
  if (Nf) return ha;
  Nf = 1;
  var e = Ye;
  return (
    (ha = e.isStandardBrowserEnv()
      ? (function () {
          return {
            write: function (s, a, u, l, f, p) {
              var g = [];
              g.push(s + "=" + encodeURIComponent(a)),
                e.isNumber(u) && g.push("expires=" + new Date(u).toGMTString()),
                e.isString(l) && g.push("path=" + l),
                e.isString(f) && g.push("domain=" + f),
                p === !0 && g.push("secure"),
                (document.cookie = g.join("; "));
            },
            read: function (s) {
              var a = document.cookie.match(
                new RegExp("(^|;\\s*)(" + s + ")=([^;]*)")
              );
              return a ? decodeURIComponent(a[3]) : null;
            },
            remove: function (s) {
              this.write(s, "", Date.now() - 864e5);
            },
          };
        })()
      : (function () {
          return {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
        })()),
    ha
  );
}
var b0 = function (n) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
  },
  C0 = function (n, i) {
    return i ? n.replace(/\/+$/, "") + "/" + i.replace(/^\/+/, "") : n;
  },
  L0 = b0,
  P0 = C0,
  ip = function (n, i) {
    return n && !L0(i) ? P0(n, i) : i;
  },
  _a,
  Ff;
function M0() {
  if (Ff) return _a;
  Ff = 1;
  var e = Ye,
    n = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ];
  return (
    (_a = function (s) {
      var a = {},
        u,
        l,
        f;
      return (
        s &&
          e.forEach(
            s.split(`
`),
            function (g) {
              if (
                ((f = g.indexOf(":")),
                (u = e.trim(g.substr(0, f)).toLowerCase()),
                (l = e.trim(g.substr(f + 1))),
                u)
              ) {
                if (a[u] && n.indexOf(u) >= 0) return;
                u === "set-cookie"
                  ? (a[u] = (a[u] ? a[u] : []).concat([l]))
                  : (a[u] = a[u] ? a[u] + ", " + l : l);
              }
            }
          ),
        a
      );
    }),
    _a
  );
}
var ga, Bf;
function x0() {
  if (Bf) return ga;
  Bf = 1;
  var e = Ye;
  return (
    (ga = e.isStandardBrowserEnv()
      ? (function () {
          var i = /(msie|trident)/i.test(navigator.userAgent),
            s = document.createElement("a"),
            a;
          function u(l) {
            var f = l;
            return (
              i && (s.setAttribute("href", f), (f = s.href)),
              s.setAttribute("href", f),
              {
                href: s.href,
                protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
                host: s.host,
                search: s.search ? s.search.replace(/^\?/, "") : "",
                hash: s.hash ? s.hash.replace(/^#/, "") : "",
                hostname: s.hostname,
                port: s.port,
                pathname:
                  s.pathname.charAt(0) === "/" ? s.pathname : "/" + s.pathname,
              }
            );
          }
          return (
            (a = u(window.location.href)),
            function (f) {
              var p = e.isString(f) ? u(f) : f;
              return p.protocol === a.protocol && p.host === a.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })()),
    ga
  );
}
var Ea, Gf;
function Ts() {
  if (Gf) return Ea;
  Gf = 1;
  var e = Ir,
    n = Ye;
  function i(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED),
      (this.name = "CanceledError");
  }
  return n.inherits(i, e, { __CANCEL__: !0 }), (Ea = i), Ea;
}
var ma, Uf;
function N0() {
  return (
    Uf ||
      ((Uf = 1),
      (ma = function (n) {
        var i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
        return (i && i[1]) || "";
      })),
    ma
  );
}
var Ia, $f;
function qf() {
  if ($f) return Ia;
  $f = 1;
  var e = Ye,
    n = w0(),
    i = D0(),
    s = Jd,
    a = ip,
    u = M0(),
    l = x0(),
    f = np,
    p = Ir,
    g = Ts(),
    E = N0();
  return (
    (Ia = function (T) {
      return new Promise(function (S, L) {
        var D = T.data,
          P = T.headers,
          G = T.responseType,
          $;
        function H() {
          T.cancelToken && T.cancelToken.unsubscribe($),
            T.signal && T.signal.removeEventListener("abort", $);
        }
        e.isFormData(D) && e.isStandardBrowserEnv() && delete P["Content-Type"];
        var M = new XMLHttpRequest();
        if (T.auth) {
          var X = T.auth.username || "",
            le = T.auth.password
              ? unescape(encodeURIComponent(T.auth.password))
              : "";
          P.Authorization = "Basic " + btoa(X + ":" + le);
        }
        var W = a(T.baseURL, T.url);
        M.open(T.method.toUpperCase(), s(W, T.params, T.paramsSerializer), !0),
          (M.timeout = T.timeout);
        function Q() {
          if (!!M) {
            var Z =
                "getAllResponseHeaders" in M
                  ? u(M.getAllResponseHeaders())
                  : null,
              Te =
                !G || G === "text" || G === "json"
                  ? M.responseText
                  : M.response,
              B = {
                data: Te,
                status: M.status,
                statusText: M.statusText,
                headers: Z,
                config: T,
                request: M,
              };
            n(
              function (N) {
                S(N), H();
              },
              function (N) {
                L(N), H();
              },
              B
            ),
              (M = null);
          }
        }
        if (
          ("onloadend" in M
            ? (M.onloadend = Q)
            : (M.onreadystatechange = function () {
                !M ||
                  M.readyState !== 4 ||
                  (M.status === 0 &&
                    !(M.responseURL && M.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(Q);
              }),
          (M.onabort = function () {
            !M ||
              (L(new p("Request aborted", p.ECONNABORTED, T, M)), (M = null));
          }),
          (M.onerror = function () {
            L(new p("Network Error", p.ERR_NETWORK, T, M, M)), (M = null);
          }),
          (M.ontimeout = function () {
            var Te = T.timeout
                ? "timeout of " + T.timeout + "ms exceeded"
                : "timeout exceeded",
              B = T.transitional || f;
            T.timeoutErrorMessage && (Te = T.timeoutErrorMessage),
              L(
                new p(
                  Te,
                  B.clarifyTimeoutError ? p.ETIMEDOUT : p.ECONNABORTED,
                  T,
                  M
                )
              ),
              (M = null);
          }),
          e.isStandardBrowserEnv())
        ) {
          var ue =
            (T.withCredentials || l(W)) && T.xsrfCookieName
              ? i.read(T.xsrfCookieName)
              : void 0;
          ue && (P[T.xsrfHeaderName] = ue);
        }
        "setRequestHeader" in M &&
          e.forEach(P, function (Te, B) {
            typeof D > "u" && B.toLowerCase() === "content-type"
              ? delete P[B]
              : M.setRequestHeader(B, Te);
          }),
          e.isUndefined(T.withCredentials) ||
            (M.withCredentials = !!T.withCredentials),
          G && G !== "json" && (M.responseType = T.responseType),
          typeof T.onDownloadProgress == "function" &&
            M.addEventListener("progress", T.onDownloadProgress),
          typeof T.onUploadProgress == "function" &&
            M.upload &&
            M.upload.addEventListener("progress", T.onUploadProgress),
          (T.cancelToken || T.signal) &&
            (($ = function (Z) {
              !M ||
                (L(!Z || (Z && Z.type) ? new g() : Z), M.abort(), (M = null));
            }),
            T.cancelToken && T.cancelToken.subscribe($),
            T.signal &&
              (T.signal.aborted ? $() : T.signal.addEventListener("abort", $))),
          D || (D = null);
        var K = E(W);
        if (K && ["http", "https", "file"].indexOf(K) === -1) {
          L(new p("Unsupported protocol " + K + ":", p.ERR_BAD_REQUEST, T));
          return;
        }
        M.send(D);
      });
    }),
    Ia
  );
}
var Ta, Wf;
function F0() {
  return Wf || ((Wf = 1), (Ta = null)), Ta;
}
var $e = Ye,
  Hf = y0,
  Vf = Ir,
  B0 = np,
  G0 = rp,
  U0 = { "Content-Type": "application/x-www-form-urlencoded" };
function Yf(e, n) {
  !$e.isUndefined(e) &&
    $e.isUndefined(e["Content-Type"]) &&
    (e["Content-Type"] = n);
}
function $0() {
  var e;
  return (
    (typeof XMLHttpRequest < "u" ||
      (typeof process < "u" &&
        Object.prototype.toString.call(process) === "[object process]")) &&
      (e = qf()),
    e
  );
}
function q0(e, n, i) {
  if ($e.isString(e))
    try {
      return (n || JSON.parse)(e), $e.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (i || JSON.stringify)(e);
}
var vs = {
  transitional: B0,
  adapter: $0(),
  transformRequest: [
    function (n, i) {
      if (
        (Hf(i, "Accept"),
        Hf(i, "Content-Type"),
        $e.isFormData(n) ||
          $e.isArrayBuffer(n) ||
          $e.isBuffer(n) ||
          $e.isStream(n) ||
          $e.isFile(n) ||
          $e.isBlob(n))
      )
        return n;
      if ($e.isArrayBufferView(n)) return n.buffer;
      if ($e.isURLSearchParams(n))
        return (
          Yf(i, "application/x-www-form-urlencoded;charset=utf-8"), n.toString()
        );
      var s = $e.isObject(n),
        a = i && i["Content-Type"],
        u;
      if ((u = $e.isFileList(n)) || (s && a === "multipart/form-data")) {
        var l = this.env && this.env.FormData;
        return G0(u ? { "files[]": n } : n, l && new l());
      } else if (s || a === "application/json")
        return Yf(i, "application/json"), q0(n);
      return n;
    },
  ],
  transformResponse: [
    function (n) {
      var i = this.transitional || vs.transitional,
        s = i && i.silentJSONParsing,
        a = i && i.forcedJSONParsing,
        u = !s && this.responseType === "json";
      if (u || (a && $e.isString(n) && n.length))
        try {
          return JSON.parse(n);
        } catch (l) {
          if (u)
            throw l.name === "SyntaxError"
              ? Vf.from(l, Vf.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      return n;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: F0() },
  validateStatus: function (n) {
    return n >= 200 && n < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
$e.forEach(["delete", "get", "head"], function (n) {
  vs.headers[n] = {};
});
$e.forEach(["post", "put", "patch"], function (n) {
  vs.headers[n] = $e.merge(U0);
});
var Ol = vs,
  W0 = Ye,
  H0 = Ol,
  V0 = function (n, i, s) {
    var a = this || H0;
    return (
      W0.forEach(s, function (l) {
        n = l.call(a, n, i);
      }),
      n
    );
  },
  va,
  zf;
function sp() {
  return (
    zf ||
      ((zf = 1),
      (va = function (n) {
        return !!(n && n.__CANCEL__);
      })),
    va
  );
}
var Xf = Ye,
  Ra = V0,
  Y0 = sp(),
  z0 = Ol,
  X0 = Ts();
function Oa(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new X0();
}
var K0 = function (n) {
    Oa(n),
      (n.headers = n.headers || {}),
      (n.data = Ra.call(n, n.data, n.headers, n.transformRequest)),
      (n.headers = Xf.merge(
        n.headers.common || {},
        n.headers[n.method] || {},
        n.headers
      )),
      Xf.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (a) {
          delete n.headers[a];
        }
      );
    var i = n.adapter || z0.adapter;
    return i(n).then(
      function (a) {
        return (
          Oa(n),
          (a.data = Ra.call(n, a.data, a.headers, n.transformResponse)),
          a
        );
      },
      function (a) {
        return (
          Y0(a) ||
            (Oa(n),
            a &&
              a.response &&
              (a.response.data = Ra.call(
                n,
                a.response.data,
                a.response.headers,
                n.transformResponse
              ))),
          Promise.reject(a)
        );
      }
    );
  },
  _t = Ye,
  op = function (n, i) {
    i = i || {};
    var s = {};
    function a(E, R) {
      return _t.isPlainObject(E) && _t.isPlainObject(R)
        ? _t.merge(E, R)
        : _t.isPlainObject(R)
        ? _t.merge({}, R)
        : _t.isArray(R)
        ? R.slice()
        : R;
    }
    function u(E) {
      if (_t.isUndefined(i[E])) {
        if (!_t.isUndefined(n[E])) return a(void 0, n[E]);
      } else return a(n[E], i[E]);
    }
    function l(E) {
      if (!_t.isUndefined(i[E])) return a(void 0, i[E]);
    }
    function f(E) {
      if (_t.isUndefined(i[E])) {
        if (!_t.isUndefined(n[E])) return a(void 0, n[E]);
      } else return a(void 0, i[E]);
    }
    function p(E) {
      if (E in i) return a(n[E], i[E]);
      if (E in n) return a(void 0, n[E]);
    }
    var g = {
      url: l,
      method: l,
      data: l,
      baseURL: f,
      transformRequest: f,
      transformResponse: f,
      paramsSerializer: f,
      timeout: f,
      timeoutMessage: f,
      withCredentials: f,
      adapter: f,
      responseType: f,
      xsrfCookieName: f,
      xsrfHeaderName: f,
      onUploadProgress: f,
      onDownloadProgress: f,
      decompress: f,
      maxContentLength: f,
      maxBodyLength: f,
      beforeRedirect: f,
      transport: f,
      httpAgent: f,
      httpsAgent: f,
      cancelToken: f,
      socketPath: f,
      responseEncoding: f,
      validateStatus: p,
    };
    return (
      _t.forEach(Object.keys(n).concat(Object.keys(i)), function (R) {
        var T = g[R] || u,
          A = T(R);
        (_t.isUndefined(A) && T !== p) || (s[R] = A);
      }),
      s
    );
  },
  Sa,
  Kf;
function ap() {
  return Kf || ((Kf = 1), (Sa = { version: "0.27.2" })), Sa;
}
var k0 = ap().version,
  En = Ir,
  Sl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  function (e, n) {
    Sl[e] = function (s) {
      return typeof s === e || "a" + (n < 1 ? "n " : " ") + e;
    };
  }
);
var kf = {};
Sl.transitional = function (n, i, s) {
  function a(u, l) {
    return (
      "[Axios v" +
      k0 +
      "] Transitional option '" +
      u +
      "'" +
      l +
      (s ? ". " + s : "")
    );
  }
  return function (u, l, f) {
    if (n === !1)
      throw new En(
        a(l, " has been removed" + (i ? " in " + i : "")),
        En.ERR_DEPRECATED
      );
    return (
      i &&
        !kf[l] &&
        ((kf[l] = !0),
        console.warn(
          a(
            l,
            " has been deprecated since v" +
              i +
              " and will be removed in the near future"
          )
        )),
      n ? n(u, l, f) : !0
    );
  };
};
function Q0(e, n, i) {
  if (typeof e != "object")
    throw new En("options must be an object", En.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), a = s.length; a-- > 0; ) {
    var u = s[a],
      l = n[u];
    if (l) {
      var f = e[u],
        p = f === void 0 || l(f, u, e);
      if (p !== !0)
        throw new En("option " + u + " must be " + p, En.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0) throw new En("Unknown option " + u, En.ERR_BAD_OPTION);
  }
}
var Z0 = { assertOptions: Q0, validators: Sl },
  lp = Ye,
  J0 = Jd,
  Qf = O0,
  Zf = K0,
  Rs = op,
  j0 = ip,
  up = Z0,
  ar = up.validators;
function pr(e) {
  (this.defaults = e),
    (this.interceptors = { request: new Qf(), response: new Qf() });
}
pr.prototype.request = function (n, i) {
  typeof n == "string" ? ((i = i || {}), (i.url = n)) : (i = n || {}),
    (i = Rs(this.defaults, i)),
    i.method
      ? (i.method = i.method.toLowerCase())
      : this.defaults.method
      ? (i.method = this.defaults.method.toLowerCase())
      : (i.method = "get");
  var s = i.transitional;
  s !== void 0 &&
    up.assertOptions(
      s,
      {
        silentJSONParsing: ar.transitional(ar.boolean),
        forcedJSONParsing: ar.transitional(ar.boolean),
        clarifyTimeoutError: ar.transitional(ar.boolean),
      },
      !1
    );
  var a = [],
    u = !0;
  this.interceptors.request.forEach(function (A) {
    (typeof A.runWhen == "function" && A.runWhen(i) === !1) ||
      ((u = u && A.synchronous), a.unshift(A.fulfilled, A.rejected));
  });
  var l = [];
  this.interceptors.response.forEach(function (A) {
    l.push(A.fulfilled, A.rejected);
  });
  var f;
  if (!u) {
    var p = [Zf, void 0];
    for (
      Array.prototype.unshift.apply(p, a),
        p = p.concat(l),
        f = Promise.resolve(i);
      p.length;

    )
      f = f.then(p.shift(), p.shift());
    return f;
  }
  for (var g = i; a.length; ) {
    var E = a.shift(),
      R = a.shift();
    try {
      g = E(g);
    } catch (T) {
      R(T);
      break;
    }
  }
  try {
    f = Zf(g);
  } catch (T) {
    return Promise.reject(T);
  }
  for (; l.length; ) f = f.then(l.shift(), l.shift());
  return f;
};
pr.prototype.getUri = function (n) {
  n = Rs(this.defaults, n);
  var i = j0(n.baseURL, n.url);
  return J0(i, n.params, n.paramsSerializer);
};
lp.forEach(["delete", "get", "head", "options"], function (n) {
  pr.prototype[n] = function (i, s) {
    return this.request(
      Rs(s || {}, { method: n, url: i, data: (s || {}).data })
    );
  };
});
lp.forEach(["post", "put", "patch"], function (n) {
  function i(s) {
    return function (u, l, f) {
      return this.request(
        Rs(f || {}, {
          method: n,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: u,
          data: l,
        })
      );
    };
  }
  (pr.prototype[n] = i()), (pr.prototype[n + "Form"] = i(!0));
});
var eO = pr,
  ya,
  Jf;
function tO() {
  if (Jf) return ya;
  Jf = 1;
  var e = Ts();
  function n(i) {
    if (typeof i != "function")
      throw new TypeError("executor must be a function.");
    var s;
    this.promise = new Promise(function (l) {
      s = l;
    });
    var a = this;
    this.promise.then(function (u) {
      if (!!a._listeners) {
        var l,
          f = a._listeners.length;
        for (l = 0; l < f; l++) a._listeners[l](u);
        a._listeners = null;
      }
    }),
      (this.promise.then = function (u) {
        var l,
          f = new Promise(function (p) {
            a.subscribe(p), (l = p);
          }).then(u);
        return (
          (f.cancel = function () {
            a.unsubscribe(l);
          }),
          f
        );
      }),
      i(function (l) {
        a.reason || ((a.reason = new e(l)), s(a.reason));
      });
  }
  return (
    (n.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
    (n.prototype.subscribe = function (s) {
      if (this.reason) {
        s(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(s) : (this._listeners = [s]);
    }),
    (n.prototype.unsubscribe = function (s) {
      if (!!this._listeners) {
        var a = this._listeners.indexOf(s);
        a !== -1 && this._listeners.splice(a, 1);
      }
    }),
    (n.source = function () {
      var s,
        a = new n(function (l) {
          s = l;
        });
      return { token: a, cancel: s };
    }),
    (ya = n),
    ya
  );
}
var Aa, jf;
function nO() {
  return (
    jf ||
      ((jf = 1),
      (Aa = function (n) {
        return function (s) {
          return n.apply(null, s);
        };
      })),
    Aa
  );
}
var wa, ed;
function rO() {
  if (ed) return wa;
  ed = 1;
  var e = Ye;
  return (
    (wa = function (i) {
      return e.isObject(i) && i.isAxiosError === !0;
    }),
    wa
  );
}
var td = Ye,
  iO = kd,
  os = eO,
  sO = op,
  oO = Ol;
function cp(e) {
  var n = new os(e),
    i = iO(os.prototype.request, n);
  return (
    td.extend(i, os.prototype, n),
    td.extend(i, n),
    (i.create = function (a) {
      return cp(sO(e, a));
    }),
    i
  );
}
var lt = cp(oO);
lt.Axios = os;
lt.CanceledError = Ts();
lt.CancelToken = tO();
lt.isCancel = sp();
lt.VERSION = ap().version;
lt.toFormData = rp;
lt.AxiosError = Ir;
lt.Cancel = lt.CanceledError;
lt.all = function (n) {
  return Promise.all(n);
};
lt.spread = nO();
lt.isAxiosError = rO();
El.exports = lt;
El.exports.default = lt;
(function (e) {
  e.exports = El.exports;
})(Kd);
const aO = jR(Kd.exports);
window._ = e0;
window.axios = aO;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var $a = !1,
  qa = !1,
  Nn = [];
function lO(e) {
  uO(e);
}
function uO(e) {
  Nn.includes(e) || Nn.push(e), cO();
}
function fp(e) {
  let n = Nn.indexOf(e);
  n !== -1 && Nn.splice(n, 1);
}
function cO() {
  !qa && !$a && (($a = !0), queueMicrotask(fO));
}
function fO() {
  ($a = !1), (qa = !0);
  for (let e = 0; e < Nn.length; e++) Nn[e]();
  (Nn.length = 0), (qa = !1);
}
var Tr,
  ni,
  Os,
  dp,
  Wa = !0;
function dO(e) {
  (Wa = !1), e(), (Wa = !0);
}
function pO(e) {
  (Tr = e.reactive),
    (Os = e.release),
    (ni = (n) =>
      e.effect(n, {
        scheduler: (i) => {
          Wa ? lO(i) : i();
        },
      })),
    (dp = e.raw);
}
function nd(e) {
  ni = e;
}
function hO(e) {
  let n = () => {};
  return [
    (s) => {
      let a = ni(s);
      return (
        e._x_effects ||
          ((e._x_effects = new Set()),
          (e._x_runEffects = () => {
            e._x_effects.forEach((u) => u());
          })),
        e._x_effects.add(a),
        (n = () => {
          a !== void 0 && (e._x_effects.delete(a), Os(a));
        }),
        a
      );
    },
    () => {
      n();
    },
  ];
}
var pp = [],
  hp = [],
  _p = [];
function _O(e) {
  _p.push(e);
}
function gp(e, n) {
  typeof n == "function"
    ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(n))
    : ((n = e), hp.push(n));
}
function gO(e) {
  pp.push(e);
}
function EO(e, n, i) {
  e._x_attributeCleanups || (e._x_attributeCleanups = {}),
    e._x_attributeCleanups[n] || (e._x_attributeCleanups[n] = []),
    e._x_attributeCleanups[n].push(i);
}
function Ep(e, n) {
  !e._x_attributeCleanups ||
    Object.entries(e._x_attributeCleanups).forEach(([i, s]) => {
      (n === void 0 || n.includes(i)) &&
        (s.forEach((a) => a()), delete e._x_attributeCleanups[i]);
    });
}
var yl = new MutationObserver(Dl),
  Al = !1;
function mp() {
  yl.observe(document, {
    subtree: !0,
    childList: !0,
    attributes: !0,
    attributeOldValue: !0,
  }),
    (Al = !0);
}
function mO() {
  IO(), yl.disconnect(), (Al = !1);
}
var Zr = [],
  Da = !1;
function IO() {
  (Zr = Zr.concat(yl.takeRecords())),
    Zr.length &&
      !Da &&
      ((Da = !0),
      queueMicrotask(() => {
        TO(), (Da = !1);
      }));
}
function TO() {
  Dl(Zr), (Zr.length = 0);
}
function We(e) {
  if (!Al) return e();
  mO();
  let n = e();
  return mp(), n;
}
var wl = !1,
  ds = [];
function vO() {
  wl = !0;
}
function RO() {
  (wl = !1), Dl(ds), (ds = []);
}
function Dl(e) {
  if (wl) {
    ds = ds.concat(e);
    return;
  }
  let n = [],
    i = [],
    s = new Map(),
    a = new Map();
  for (let u = 0; u < e.length; u++)
    if (
      !e[u].target._x_ignoreMutationObserver &&
      (e[u].type === "childList" &&
        (e[u].addedNodes.forEach((l) => l.nodeType === 1 && n.push(l)),
        e[u].removedNodes.forEach((l) => l.nodeType === 1 && i.push(l))),
      e[u].type === "attributes")
    ) {
      let l = e[u].target,
        f = e[u].attributeName,
        p = e[u].oldValue,
        g = () => {
          s.has(l) || s.set(l, []),
            s.get(l).push({ name: f, value: l.getAttribute(f) });
        },
        E = () => {
          a.has(l) || a.set(l, []), a.get(l).push(f);
        };
      l.hasAttribute(f) && p === null
        ? g()
        : l.hasAttribute(f)
        ? (E(), g())
        : E();
    }
  a.forEach((u, l) => {
    Ep(l, u);
  }),
    s.forEach((u, l) => {
      pp.forEach((f) => f(l, u));
    });
  for (let u of i)
    if (!n.includes(u) && (hp.forEach((l) => l(u)), u._x_cleanups))
      for (; u._x_cleanups.length; ) u._x_cleanups.pop()();
  n.forEach((u) => {
    (u._x_ignoreSelf = !0), (u._x_ignore = !0);
  });
  for (let u of n)
    i.includes(u) ||
      !u.isConnected ||
      (delete u._x_ignoreSelf,
      delete u._x_ignore,
      _p.forEach((l) => l(u)),
      (u._x_ignore = !0),
      (u._x_ignoreSelf = !0));
  n.forEach((u) => {
    delete u._x_ignoreSelf, delete u._x_ignore;
  }),
    (n = null),
    (i = null),
    (s = null),
    (a = null);
}
function Ip(e) {
  return ii(hr(e));
}
function ri(e, n, i) {
  return (
    (e._x_dataStack = [n, ...hr(i || e)]),
    () => {
      e._x_dataStack = e._x_dataStack.filter((s) => s !== n);
    }
  );
}
function rd(e, n) {
  let i = e._x_dataStack[0];
  Object.entries(n).forEach(([s, a]) => {
    i[s] = a;
  });
}
function hr(e) {
  return e._x_dataStack
    ? e._x_dataStack
    : typeof ShadowRoot == "function" && e instanceof ShadowRoot
    ? hr(e.host)
    : e.parentNode
    ? hr(e.parentNode)
    : [];
}
function ii(e) {
  let n = new Proxy(
    {},
    {
      ownKeys: () => Array.from(new Set(e.flatMap((i) => Object.keys(i)))),
      has: (i, s) => e.some((a) => a.hasOwnProperty(s)),
      get: (i, s) =>
        (e.find((a) => {
          if (a.hasOwnProperty(s)) {
            let u = Object.getOwnPropertyDescriptor(a, s);
            if (
              (u.get && u.get._x_alreadyBound) ||
              (u.set && u.set._x_alreadyBound)
            )
              return !0;
            if ((u.get || u.set) && u.enumerable) {
              let l = u.get,
                f = u.set,
                p = u;
              (l = l && l.bind(n)),
                (f = f && f.bind(n)),
                l && (l._x_alreadyBound = !0),
                f && (f._x_alreadyBound = !0),
                Object.defineProperty(a, s, { ...p, get: l, set: f });
            }
            return !0;
          }
          return !1;
        }) || {})[s],
      set: (i, s, a) => {
        let u = e.find((l) => l.hasOwnProperty(s));
        return u ? (u[s] = a) : (e[e.length - 1][s] = a), !0;
      },
    }
  );
  return n;
}
function Tp(e) {
  let n = (s) => typeof s == "object" && !Array.isArray(s) && s !== null,
    i = (s, a = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(s)).forEach(
        ([u, { value: l, enumerable: f }]) => {
          if (f === !1 || l === void 0) return;
          let p = a === "" ? u : `${a}.${u}`;
          typeof l == "object" && l !== null && l._x_interceptor
            ? (s[u] = l.initialize(e, p, u))
            : n(l) && l !== s && !(l instanceof Element) && i(l, p);
        }
      );
    };
  return i(e);
}
function vp(e, n = () => {}) {
  let i = {
    initialValue: void 0,
    _x_interceptor: !0,
    initialize(s, a, u) {
      return e(
        this.initialValue,
        () => OO(s, a),
        (l) => Ha(s, a, l),
        a,
        u
      );
    },
  };
  return (
    n(i),
    (s) => {
      if (typeof s == "object" && s !== null && s._x_interceptor) {
        let a = i.initialize.bind(i);
        i.initialize = (u, l, f) => {
          let p = s.initialize(u, l, f);
          return (i.initialValue = p), a(u, l, f);
        };
      } else i.initialValue = s;
      return i;
    }
  );
}
function OO(e, n) {
  return n.split(".").reduce((i, s) => i[s], e);
}
function Ha(e, n, i) {
  if ((typeof n == "string" && (n = n.split(".")), n.length === 1)) e[n[0]] = i;
  else {
    if (n.length === 0) throw error;
    return e[n[0]] || (e[n[0]] = {}), Ha(e[n[0]], n.slice(1), i);
  }
}
var Rp = {};
function $t(e, n) {
  Rp[e] = n;
}
function Va(e, n) {
  return (
    Object.entries(Rp).forEach(([i, s]) => {
      Object.defineProperty(e, `$${i}`, {
        get() {
          let [a, u] = Dp(n);
          return (a = { interceptor: vp, ...a }), gp(n, u), s(n, a);
        },
        enumerable: !1,
      });
    }),
    e
  );
}
function SO(e, n, i, ...s) {
  try {
    return i(...s);
  } catch (a) {
    ti(a, e, n);
  }
}
function ti(e, n, i = void 0) {
  Object.assign(e, { el: n, expression: i }),
    console.warn(
      `Alpine Expression Error: ${e.message}

${
  i
    ? 'Expression: "' +
      i +
      `"

`
    : ""
}`,
      n
    ),
    setTimeout(() => {
      throw e;
    }, 0);
}
var as = !0;
function yO(e) {
  let n = as;
  (as = !1), e(), (as = n);
}
function cr(e, n, i = {}) {
  let s;
  return et(e, n)((a) => (s = a), i), s;
}
function et(...e) {
  return Op(...e);
}
var Op = Sp;
function AO(e) {
  Op = e;
}
function Sp(e, n) {
  let i = {};
  Va(i, e);
  let s = [i, ...hr(e)];
  if (typeof n == "function") return wO(s, n);
  let a = bO(s, n, e);
  return SO.bind(null, e, n, a);
}
function wO(e, n) {
  return (i = () => {}, { scope: s = {}, params: a = [] } = {}) => {
    let u = n.apply(ii([s, ...e]), a);
    ps(i, u);
  };
}
var ba = {};
function DO(e, n) {
  if (ba[e]) return ba[e];
  let i = Object.getPrototypeOf(async function () {}).constructor,
    s =
      /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e)
        ? `(() => { ${e} })()`
        : e,
    u = (() => {
      try {
        return new i(
          ["__self", "scope"],
          `with (scope) { __self.result = ${s} }; __self.finished = true; return __self.result;`
        );
      } catch (l) {
        return ti(l, n, e), Promise.resolve();
      }
    })();
  return (ba[e] = u), u;
}
function bO(e, n, i) {
  let s = DO(n, i);
  return (a = () => {}, { scope: u = {}, params: l = [] } = {}) => {
    (s.result = void 0), (s.finished = !1);
    let f = ii([u, ...e]);
    if (typeof s == "function") {
      let p = s(s, f).catch((g) => ti(g, i, n));
      s.finished
        ? (ps(a, s.result, f, l, i), (s.result = void 0))
        : p
            .then((g) => {
              ps(a, g, f, l, i);
            })
            .catch((g) => ti(g, i, n))
            .finally(() => (s.result = void 0));
    }
  };
}
function ps(e, n, i, s, a) {
  if (as && typeof n == "function") {
    let u = n.apply(i, s);
    u instanceof Promise
      ? u.then((l) => ps(e, l, i, s)).catch((l) => ti(l, a, n))
      : e(u);
  } else e(n);
}
var bl = "x-";
function vr(e = "") {
  return bl + e;
}
function CO(e) {
  bl = e;
}
var yp = {};
function Me(e, n) {
  yp[e] = n;
}
function Cl(e, n, i) {
  if (((n = Array.from(n)), e._x_virtualDirectives)) {
    let u = Object.entries(e._x_virtualDirectives).map(([f, p]) => ({
        name: f,
        value: p,
      })),
      l = Ap(u);
    (u = u.map((f) =>
      l.find((p) => p.name === f.name)
        ? { name: `x-bind:${f.name}`, value: `"${f.value}"` }
        : f
    )),
      (n = n.concat(u));
  }
  let s = {};
  return n
    .map(Lp((u, l) => (s[u] = l)))
    .filter(Mp)
    .map(MO(s, i))
    .sort(xO)
    .map((u) => PO(e, u));
}
function Ap(e) {
  return Array.from(e)
    .map(Lp())
    .filter((n) => !Mp(n));
}
var Ya = !1,
  Qr = new Map(),
  wp = Symbol();
function LO(e) {
  Ya = !0;
  let n = Symbol();
  (wp = n), Qr.set(n, []);
  let i = () => {
      for (; Qr.get(n).length; ) Qr.get(n).shift()();
      Qr.delete(n);
    },
    s = () => {
      (Ya = !1), i();
    };
  e(i), s();
}
function Dp(e) {
  let n = [],
    i = (f) => n.push(f),
    [s, a] = hO(e);
  return (
    n.push(a),
    [
      {
        Alpine: si,
        effect: s,
        cleanup: i,
        evaluateLater: et.bind(et, e),
        evaluate: cr.bind(cr, e),
      },
      () => n.forEach((f) => f()),
    ]
  );
}
function PO(e, n) {
  let i = () => {},
    s = yp[n.type] || i,
    [a, u] = Dp(e);
  EO(e, n.original, u);
  let l = () => {
    e._x_ignore ||
      e._x_ignoreSelf ||
      (s.inline && s.inline(e, n, a),
      (s = s.bind(s, e, n, a)),
      Ya ? Qr.get(wp).push(s) : s());
  };
  return (l.runCleanups = u), l;
}
var bp =
    (e, n) =>
    ({ name: i, value: s }) => (
      i.startsWith(e) && (i = i.replace(e, n)), { name: i, value: s }
    ),
  Cp = (e) => e;
function Lp(e = () => {}) {
  return ({ name: n, value: i }) => {
    let { name: s, value: a } = Pp.reduce((u, l) => l(u), {
      name: n,
      value: i,
    });
    return s !== n && e(s, n), { name: s, value: a };
  };
}
var Pp = [];
function Ll(e) {
  Pp.push(e);
}
function Mp({ name: e }) {
  return xp().test(e);
}
var xp = () => new RegExp(`^${bl}([^:^.]+)\\b`);
function MO(e, n) {
  return ({ name: i, value: s }) => {
    let a = i.match(xp()),
      u = i.match(/:([a-zA-Z0-9\-:]+)/),
      l = i.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
      f = n || e[i] || i;
    return {
      type: a ? a[1] : null,
      value: u ? u[1] : null,
      modifiers: l.map((p) => p.replace(".", "")),
      expression: s,
      original: f,
    };
  };
}
var za = "DEFAULT",
  Zi = [
    "ignore",
    "ref",
    "data",
    "id",
    "tabs",
    "radio",
    "switch",
    "disclosure",
    "bind",
    "init",
    "for",
    "mask",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    za,
    "teleport",
  ];
function xO(e, n) {
  let i = Zi.indexOf(e.type) === -1 ? za : e.type,
    s = Zi.indexOf(n.type) === -1 ? za : n.type;
  return Zi.indexOf(i) - Zi.indexOf(s);
}
function Jr(e, n, i = {}) {
  e.dispatchEvent(
    new CustomEvent(n, { detail: i, bubbles: !0, composed: !0, cancelable: !0 })
  );
}
var Xa = [],
  Pl = !1;
function Np(e = () => {}) {
  return (
    queueMicrotask(() => {
      Pl ||
        setTimeout(() => {
          Ka();
        });
    }),
    new Promise((n) => {
      Xa.push(() => {
        e(), n();
      });
    })
  );
}
function Ka() {
  for (Pl = !1; Xa.length; ) Xa.shift()();
}
function NO() {
  Pl = !0;
}
function qn(e, n) {
  if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
    Array.from(e.children).forEach((a) => qn(a, n));
    return;
  }
  let i = !1;
  if ((n(e, () => (i = !0)), i)) return;
  let s = e.firstElementChild;
  for (; s; ) qn(s, n), (s = s.nextElementSibling);
}
function _r(e, ...n) {
  console.warn(`Alpine Warning: ${e}`, ...n);
}
function FO() {
  document.body ||
    _r(
      "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
    ),
    Jr(document, "alpine:init"),
    Jr(document, "alpine:initializing"),
    mp(),
    _O((n) => Tn(n, qn)),
    gp((n) => GO(n)),
    gO((n, i) => {
      Cl(n, i).forEach((s) => s());
    });
  let e = (n) => !Ss(n.parentElement, !0);
  Array.from(document.querySelectorAll(Gp()))
    .filter(e)
    .forEach((n) => {
      Tn(n);
    }),
    Jr(document, "alpine:initialized");
}
var Ml = [],
  Fp = [];
function Bp() {
  return Ml.map((e) => e());
}
function Gp() {
  return Ml.concat(Fp).map((e) => e());
}
function Up(e) {
  Ml.push(e);
}
function $p(e) {
  Fp.push(e);
}
function Ss(e, n = !1) {
  return ys(e, (i) => {
    if ((n ? Gp() : Bp()).some((a) => i.matches(a))) return !0;
  });
}
function ys(e, n) {
  if (!!e) {
    if (n(e)) return e;
    if ((e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement))
      return ys(e.parentElement, n);
  }
}
function BO(e) {
  return Bp().some((n) => e.matches(n));
}
function Tn(e, n = qn) {
  LO(() => {
    n(e, (i, s) => {
      Cl(i, i.attributes).forEach((a) => a()), i._x_ignore && s();
    });
  });
}
function GO(e) {
  qn(e, (n) => Ep(n));
}
function xl(e, n) {
  return Array.isArray(n)
    ? id(e, n.join(" "))
    : typeof n == "object" && n !== null
    ? UO(e, n)
    : typeof n == "function"
    ? xl(e, n())
    : id(e, n);
}
function id(e, n) {
  let i = (a) =>
      a
        .split(" ")
        .filter((u) => !e.classList.contains(u))
        .filter(Boolean),
    s = (a) => (
      e.classList.add(...a),
      () => {
        e.classList.remove(...a);
      }
    );
  return (n = n === !0 ? (n = "") : n || ""), s(i(n));
}
function UO(e, n) {
  let i = (f) => f.split(" ").filter(Boolean),
    s = Object.entries(n)
      .flatMap(([f, p]) => (p ? i(f) : !1))
      .filter(Boolean),
    a = Object.entries(n)
      .flatMap(([f, p]) => (p ? !1 : i(f)))
      .filter(Boolean),
    u = [],
    l = [];
  return (
    a.forEach((f) => {
      e.classList.contains(f) && (e.classList.remove(f), l.push(f));
    }),
    s.forEach((f) => {
      e.classList.contains(f) || (e.classList.add(f), u.push(f));
    }),
    () => {
      l.forEach((f) => e.classList.add(f)),
        u.forEach((f) => e.classList.remove(f));
    }
  );
}
function As(e, n) {
  return typeof n == "object" && n !== null ? $O(e, n) : qO(e, n);
}
function $O(e, n) {
  let i = {};
  return (
    Object.entries(n).forEach(([s, a]) => {
      (i[s] = e.style[s]),
        s.startsWith("--") || (s = WO(s)),
        e.style.setProperty(s, a);
    }),
    setTimeout(() => {
      e.style.length === 0 && e.removeAttribute("style");
    }),
    () => {
      As(e, i);
    }
  );
}
function qO(e, n) {
  let i = e.getAttribute("style", n);
  return (
    e.setAttribute("style", n),
    () => {
      e.setAttribute("style", i || "");
    }
  );
}
function WO(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function ka(e, n = () => {}) {
  let i = !1;
  return function () {
    i ? n.apply(this, arguments) : ((i = !0), e.apply(this, arguments));
  };
}
Me(
  "transition",
  (e, { value: n, modifiers: i, expression: s }, { evaluate: a }) => {
    typeof s == "function" && (s = a(s)), s ? HO(e, s, n) : VO(e, i, n);
  }
);
function HO(e, n, i) {
  qp(e, xl, ""),
    {
      enter: (a) => {
        e._x_transition.enter.during = a;
      },
      "enter-start": (a) => {
        e._x_transition.enter.start = a;
      },
      "enter-end": (a) => {
        e._x_transition.enter.end = a;
      },
      leave: (a) => {
        e._x_transition.leave.during = a;
      },
      "leave-start": (a) => {
        e._x_transition.leave.start = a;
      },
      "leave-end": (a) => {
        e._x_transition.leave.end = a;
      },
    }[i](n);
}
function VO(e, n, i) {
  qp(e, As);
  let s = !n.includes("in") && !n.includes("out") && !i,
    a = s || n.includes("in") || ["enter"].includes(i),
    u = s || n.includes("out") || ["leave"].includes(i);
  n.includes("in") && !s && (n = n.filter((P, G) => G < n.indexOf("out"))),
    n.includes("out") && !s && (n = n.filter((P, G) => G > n.indexOf("out")));
  let l = !n.includes("opacity") && !n.includes("scale"),
    f = l || n.includes("opacity"),
    p = l || n.includes("scale"),
    g = f ? 0 : 1,
    E = p ? Yr(n, "scale", 95) / 100 : 1,
    R = Yr(n, "delay", 0),
    T = Yr(n, "origin", "center"),
    A = "opacity, transform",
    S = Yr(n, "duration", 150) / 1e3,
    L = Yr(n, "duration", 75) / 1e3,
    D = "cubic-bezier(0.4, 0.0, 0.2, 1)";
  a &&
    ((e._x_transition.enter.during = {
      transformOrigin: T,
      transitionDelay: R,
      transitionProperty: A,
      transitionDuration: `${S}s`,
      transitionTimingFunction: D,
    }),
    (e._x_transition.enter.start = { opacity: g, transform: `scale(${E})` }),
    (e._x_transition.enter.end = { opacity: 1, transform: "scale(1)" })),
    u &&
      ((e._x_transition.leave.during = {
        transformOrigin: T,
        transitionDelay: R,
        transitionProperty: A,
        transitionDuration: `${L}s`,
        transitionTimingFunction: D,
      }),
      (e._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }),
      (e._x_transition.leave.end = { opacity: g, transform: `scale(${E})` }));
}
function qp(e, n, i = {}) {
  e._x_transition ||
    (e._x_transition = {
      enter: { during: i, start: i, end: i },
      leave: { during: i, start: i, end: i },
      in(s = () => {}, a = () => {}) {
        Qa(
          e,
          n,
          {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end,
          },
          s,
          a
        );
      },
      out(s = () => {}, a = () => {}) {
        Qa(
          e,
          n,
          {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end,
          },
          s,
          a
        );
      },
    });
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function (
  e,
  n,
  i,
  s
) {
  const a =
    document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
  let u = () => a(i);
  if (n) {
    e._x_transition && (e._x_transition.enter || e._x_transition.leave)
      ? e._x_transition.enter &&
        (Object.entries(e._x_transition.enter.during).length ||
          Object.entries(e._x_transition.enter.start).length ||
          Object.entries(e._x_transition.enter.end).length)
        ? e._x_transition.in(i)
        : u()
      : e._x_transition
      ? e._x_transition.in(i)
      : u();
    return;
  }
  (e._x_hidePromise = e._x_transition
    ? new Promise((l, f) => {
        e._x_transition.out(
          () => {},
          () => l(s)
        ),
          e._x_transitioning.beforeCancel(() =>
            f({ isFromCancelledTransition: !0 })
          );
      })
    : Promise.resolve(s)),
    queueMicrotask(() => {
      let l = Wp(e);
      l
        ? (l._x_hideChildren || (l._x_hideChildren = []),
          l._x_hideChildren.push(e))
        : a(() => {
            let f = (p) => {
              let g = Promise.all([
                p._x_hidePromise,
                ...(p._x_hideChildren || []).map(f),
              ]).then(([E]) => E());
              return delete p._x_hidePromise, delete p._x_hideChildren, g;
            };
            f(e).catch((p) => {
              if (!p.isFromCancelledTransition) throw p;
            });
          });
    });
};
function Wp(e) {
  let n = e.parentNode;
  if (!!n) return n._x_hidePromise ? n : Wp(n);
}
function Qa(
  e,
  n,
  { during: i, start: s, end: a } = {},
  u = () => {},
  l = () => {}
) {
  if (
    (e._x_transitioning && e._x_transitioning.cancel(),
    Object.keys(i).length === 0 &&
      Object.keys(s).length === 0 &&
      Object.keys(a).length === 0)
  ) {
    u(), l();
    return;
  }
  let f, p, g;
  YO(e, {
    start() {
      f = n(e, s);
    },
    during() {
      p = n(e, i);
    },
    before: u,
    end() {
      f(), (g = n(e, a));
    },
    after: l,
    cleanup() {
      p(), g();
    },
  });
}
function YO(e, n) {
  let i,
    s,
    a,
    u = ka(() => {
      We(() => {
        (i = !0),
          s || n.before(),
          a || (n.end(), Ka()),
          n.after(),
          e.isConnected && n.cleanup(),
          delete e._x_transitioning;
      });
    });
  (e._x_transitioning = {
    beforeCancels: [],
    beforeCancel(l) {
      this.beforeCancels.push(l);
    },
    cancel: ka(function () {
      for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
      u();
    }),
    finish: u,
  }),
    We(() => {
      n.start(), n.during();
    }),
    NO(),
    requestAnimationFrame(() => {
      if (i) return;
      let l =
          Number(
            getComputedStyle(e)
              .transitionDuration.replace(/,.*/, "")
              .replace("s", "")
          ) * 1e3,
        f =
          Number(
            getComputedStyle(e)
              .transitionDelay.replace(/,.*/, "")
              .replace("s", "")
          ) * 1e3;
      l === 0 &&
        (l =
          Number(getComputedStyle(e).animationDuration.replace("s", "")) * 1e3),
        We(() => {
          n.before();
        }),
        (s = !0),
        requestAnimationFrame(() => {
          i ||
            (We(() => {
              n.end();
            }),
            Ka(),
            setTimeout(e._x_transitioning.finish, l + f),
            (a = !0));
        });
    });
}
function Yr(e, n, i) {
  if (e.indexOf(n) === -1) return i;
  const s = e[e.indexOf(n) + 1];
  if (!s || (n === "scale" && isNaN(s))) return i;
  if (n === "duration") {
    let a = s.match(/([0-9]+)ms/);
    if (a) return a[1];
  }
  return n === "origin" &&
    ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(n) + 2])
    ? [s, e[e.indexOf(n) + 2]].join(" ")
    : s;
}
var Za = !1;
function ws(e, n = () => {}) {
  return (...i) => (Za ? n(...i) : e(...i));
}
function zO(e, n) {
  n._x_dataStack || (n._x_dataStack = e._x_dataStack),
    (Za = !0),
    KO(() => {
      XO(n);
    }),
    (Za = !1);
}
function XO(e) {
  let n = !1;
  Tn(e, (s, a) => {
    qn(s, (u, l) => {
      if (n && BO(u)) return l();
      (n = !0), a(u, l);
    });
  });
}
function KO(e) {
  let n = ni;
  nd((i, s) => {
    let a = n(i);
    return Os(a), () => {};
  }),
    e(),
    nd(n);
}
function Hp(e, n, i, s = []) {
  switch (
    (e._x_bindings || (e._x_bindings = Tr({})),
    (e._x_bindings[n] = i),
    (n = s.includes("camel") ? tS(n) : n),
    n)
  ) {
    case "value":
      kO(e, i);
      break;
    case "style":
      ZO(e, i);
      break;
    case "class":
      QO(e, i);
      break;
    default:
      JO(e, n, i);
      break;
  }
}
function kO(e, n) {
  if (e.type === "radio")
    e.attributes.value === void 0 && (e.value = n),
      window.fromModel && (e.checked = sd(e.value, n));
  else if (e.type === "checkbox")
    Number.isInteger(n)
      ? (e.value = n)
      : !Number.isInteger(n) &&
        !Array.isArray(n) &&
        typeof n != "boolean" &&
        ![null, void 0].includes(n)
      ? (e.value = String(n))
      : Array.isArray(n)
      ? (e.checked = n.some((i) => sd(i, e.value)))
      : (e.checked = !!n);
  else if (e.tagName === "SELECT") eS(e, n);
  else {
    if (e.value === n) return;
    e.value = n;
  }
}
function QO(e, n) {
  e._x_undoAddedClasses && e._x_undoAddedClasses(),
    (e._x_undoAddedClasses = xl(e, n));
}
function ZO(e, n) {
  e._x_undoAddedStyles && e._x_undoAddedStyles(),
    (e._x_undoAddedStyles = As(e, n));
}
function JO(e, n, i) {
  [null, void 0, !1].includes(i) && nS(n)
    ? e.removeAttribute(n)
    : (Vp(n) && (i = n), jO(e, n, i));
}
function jO(e, n, i) {
  e.getAttribute(n) != i && e.setAttribute(n, i);
}
function eS(e, n) {
  const i = [].concat(n).map((s) => s + "");
  Array.from(e.options).forEach((s) => {
    s.selected = i.includes(s.value);
  });
}
function tS(e) {
  return e.toLowerCase().replace(/-(\w)/g, (n, i) => i.toUpperCase());
}
function sd(e, n) {
  return e == n;
}
function Vp(e) {
  return [
    "disabled",
    "checked",
    "required",
    "readonly",
    "hidden",
    "open",
    "selected",
    "autofocus",
    "itemscope",
    "multiple",
    "novalidate",
    "allowfullscreen",
    "allowpaymentrequest",
    "formnovalidate",
    "autoplay",
    "controls",
    "loop",
    "muted",
    "playsinline",
    "default",
    "ismap",
    "reversed",
    "async",
    "defer",
    "nomodule",
  ].includes(e);
}
function nS(e) {
  return ![
    "aria-pressed",
    "aria-checked",
    "aria-expanded",
    "aria-selected",
  ].includes(e);
}
function rS(e, n, i) {
  if (e._x_bindings && e._x_bindings[n] !== void 0) return e._x_bindings[n];
  let s = e.getAttribute(n);
  return s === null
    ? typeof i == "function"
      ? i()
      : i
    : s === ""
    ? !0
    : Vp(n)
    ? !![n, "true"].includes(s)
    : s;
}
function Yp(e, n) {
  var i;
  return function () {
    var s = this,
      a = arguments,
      u = function () {
        (i = null), e.apply(s, a);
      };
    clearTimeout(i), (i = setTimeout(u, n));
  };
}
function zp(e, n) {
  let i;
  return function () {
    let s = this,
      a = arguments;
    i || (e.apply(s, a), (i = !0), setTimeout(() => (i = !1), n));
  };
}
function iS(e) {
  e(si);
}
var Ln = {},
  od = !1;
function sS(e, n) {
  if ((od || ((Ln = Tr(Ln)), (od = !0)), n === void 0)) return Ln[e];
  (Ln[e] = n),
    typeof n == "object" &&
      n !== null &&
      n.hasOwnProperty("init") &&
      typeof n.init == "function" &&
      Ln[e].init(),
    Tp(Ln[e]);
}
function oS() {
  return Ln;
}
var Xp = {};
function aS(e, n) {
  let i = typeof n != "function" ? () => n : n;
  e instanceof Element ? Kp(e, i()) : (Xp[e] = i);
}
function lS(e) {
  return (
    Object.entries(Xp).forEach(([n, i]) => {
      Object.defineProperty(e, n, {
        get() {
          return (...s) => i(...s);
        },
      });
    }),
    e
  );
}
function Kp(e, n, i) {
  let s = [];
  for (; s.length; ) s.pop()();
  let a = Object.entries(n).map(([l, f]) => ({ name: l, value: f })),
    u = Ap(a);
  (a = a.map((l) =>
    u.find((f) => f.name === l.name)
      ? { name: `x-bind:${l.name}`, value: `"${l.value}"` }
      : l
  )),
    Cl(e, a, i).map((l) => {
      s.push(l.runCleanups), l();
    });
}
var kp = {};
function uS(e, n) {
  kp[e] = n;
}
function cS(e, n) {
  return (
    Object.entries(kp).forEach(([i, s]) => {
      Object.defineProperty(e, i, {
        get() {
          return (...a) => s.bind(n)(...a);
        },
        enumerable: !1,
      });
    }),
    e
  );
}
var fS = {
    get reactive() {
      return Tr;
    },
    get release() {
      return Os;
    },
    get effect() {
      return ni;
    },
    get raw() {
      return dp;
    },
    version: "3.10.4",
    flushAndStopDeferringMutations: RO,
    dontAutoEvaluateFunctions: yO,
    disableEffectScheduling: dO,
    setReactivityEngine: pO,
    closestDataStack: hr,
    skipDuringClone: ws,
    addRootSelector: Up,
    addInitSelector: $p,
    addScopeToNode: ri,
    deferMutations: vO,
    mapAttributes: Ll,
    evaluateLater: et,
    setEvaluator: AO,
    mergeProxies: ii,
    findClosest: ys,
    closestRoot: Ss,
    interceptor: vp,
    transition: Qa,
    setStyles: As,
    mutateDom: We,
    directive: Me,
    throttle: zp,
    debounce: Yp,
    evaluate: cr,
    initTree: Tn,
    nextTick: Np,
    prefixed: vr,
    prefix: CO,
    plugin: iS,
    magic: $t,
    store: sS,
    start: FO,
    clone: zO,
    bound: rS,
    $data: Ip,
    data: uS,
    bind: aS,
  },
  si = fS;
function dS(e, n) {
  const i = Object.create(null),
    s = e.split(",");
  for (let a = 0; a < s.length; a++) i[s[a]] = !0;
  return n ? (a) => !!i[a.toLowerCase()] : (a) => !!i[a];
}
var pS = Object.freeze({});
Object.freeze([]);
var Qp = Object.assign,
  hS = Object.prototype.hasOwnProperty,
  Ds = (e, n) => hS.call(e, n),
  Fn = Array.isArray,
  jr = (e) => Zp(e) === "[object Map]",
  _S = (e) => typeof e == "string",
  Nl = (e) => typeof e == "symbol",
  bs = (e) => e !== null && typeof e == "object",
  gS = Object.prototype.toString,
  Zp = (e) => gS.call(e),
  Jp = (e) => Zp(e).slice(8, -1),
  Fl = (e) =>
    _S(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  ES = (e) => {
    const n = Object.create(null);
    return (i) => n[i] || (n[i] = e(i));
  },
  mS = ES((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  jp = (e, n) => e !== n && (e === e || n === n),
  Ja = new WeakMap(),
  zr = [],
  Yt,
  Bn = Symbol("iterate"),
  ja = Symbol("Map key iterate");
function IS(e) {
  return e && e._isEffect === !0;
}
function TS(e, n = pS) {
  IS(e) && (e = e.raw);
  const i = OS(e, n);
  return n.lazy || i(), i;
}
function vS(e) {
  e.active && (eh(e), e.options.onStop && e.options.onStop(), (e.active = !1));
}
var RS = 0;
function OS(e, n) {
  const i = function () {
    if (!i.active) return e();
    if (!zr.includes(i)) {
      eh(i);
      try {
        return yS(), zr.push(i), (Yt = i), e();
      } finally {
        zr.pop(), th(), (Yt = zr[zr.length - 1]);
      }
    }
  };
  return (
    (i.id = RS++),
    (i.allowRecurse = !!n.allowRecurse),
    (i._isEffect = !0),
    (i.active = !0),
    (i.raw = e),
    (i.deps = []),
    (i.options = n),
    i
  );
}
function eh(e) {
  const { deps: n } = e;
  if (n.length) {
    for (let i = 0; i < n.length; i++) n[i].delete(e);
    n.length = 0;
  }
}
var gr = !0,
  Bl = [];
function SS() {
  Bl.push(gr), (gr = !1);
}
function yS() {
  Bl.push(gr), (gr = !0);
}
function th() {
  const e = Bl.pop();
  gr = e === void 0 ? !0 : e;
}
function Ut(e, n, i) {
  if (!gr || Yt === void 0) return;
  let s = Ja.get(e);
  s || Ja.set(e, (s = new Map()));
  let a = s.get(i);
  a || s.set(i, (a = new Set())),
    a.has(Yt) ||
      (a.add(Yt),
      Yt.deps.push(a),
      Yt.options.onTrack &&
        Yt.options.onTrack({ effect: Yt, target: e, type: n, key: i }));
}
function vn(e, n, i, s, a, u) {
  const l = Ja.get(e);
  if (!l) return;
  const f = new Set(),
    p = (E) => {
      E &&
        E.forEach((R) => {
          (R !== Yt || R.allowRecurse) && f.add(R);
        });
    };
  if (n === "clear") l.forEach(p);
  else if (i === "length" && Fn(e))
    l.forEach((E, R) => {
      (R === "length" || R >= s) && p(E);
    });
  else
    switch ((i !== void 0 && p(l.get(i)), n)) {
      case "add":
        Fn(e)
          ? Fl(i) && p(l.get("length"))
          : (p(l.get(Bn)), jr(e) && p(l.get(ja)));
        break;
      case "delete":
        Fn(e) || (p(l.get(Bn)), jr(e) && p(l.get(ja)));
        break;
      case "set":
        jr(e) && p(l.get(Bn));
        break;
    }
  const g = (E) => {
    E.options.onTrigger &&
      E.options.onTrigger({
        effect: E,
        target: e,
        key: i,
        type: n,
        newValue: s,
        oldValue: a,
        oldTarget: u,
      }),
      E.options.scheduler ? E.options.scheduler(E) : E();
  };
  f.forEach(g);
}
var AS = dS("__proto__,__v_isRef,__isVue"),
  nh = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((e) => Symbol[e])
      .filter(Nl)
  ),
  wS = Cs(),
  DS = Cs(!1, !0),
  bS = Cs(!0),
  CS = Cs(!0, !0),
  hs = {};
["includes", "indexOf", "lastIndexOf"].forEach((e) => {
  const n = Array.prototype[e];
  hs[e] = function (...i) {
    const s = Se(this);
    for (let u = 0, l = this.length; u < l; u++) Ut(s, "get", u + "");
    const a = n.apply(s, i);
    return a === -1 || a === !1 ? n.apply(s, i.map(Se)) : a;
  };
});
["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
  const n = Array.prototype[e];
  hs[e] = function (...i) {
    SS();
    const s = n.apply(this, i);
    return th(), s;
  };
});
function Cs(e = !1, n = !1) {
  return function (s, a, u) {
    if (a === "__v_isReactive") return !e;
    if (a === "__v_isReadonly") return e;
    if (a === "__v_raw" && u === (e ? (n ? $S : Eh) : n ? US : gh).get(s))
      return s;
    const l = Fn(s);
    if (!e && l && Ds(hs, a)) return Reflect.get(hs, a, u);
    const f = Reflect.get(s, a, u);
    return (Nl(a) ? nh.has(a) : AS(a)) || (e || Ut(s, "get", a), n)
      ? f
      : el(f)
      ? !l || !Fl(a)
        ? f.value
        : f
      : bs(f)
      ? e
        ? mh(f)
        : ql(f)
      : f;
  };
}
var LS = rh(),
  PS = rh(!0);
function rh(e = !1) {
  return function (i, s, a, u) {
    let l = i[s];
    if (!e && ((a = Se(a)), (l = Se(l)), !Fn(i) && el(l) && !el(a)))
      return (l.value = a), !0;
    const f = Fn(i) && Fl(s) ? Number(s) < i.length : Ds(i, s),
      p = Reflect.set(i, s, a, u);
    return (
      i === Se(u) &&
        (f ? jp(a, l) && vn(i, "set", s, a, l) : vn(i, "add", s, a)),
      p
    );
  };
}
function MS(e, n) {
  const i = Ds(e, n),
    s = e[n],
    a = Reflect.deleteProperty(e, n);
  return a && i && vn(e, "delete", n, void 0, s), a;
}
function xS(e, n) {
  const i = Reflect.has(e, n);
  return (!Nl(n) || !nh.has(n)) && Ut(e, "has", n), i;
}
function NS(e) {
  return Ut(e, "iterate", Fn(e) ? "length" : Bn), Reflect.ownKeys(e);
}
var ih = { get: wS, set: LS, deleteProperty: MS, has: xS, ownKeys: NS },
  sh = {
    get: bS,
    set(e, n) {
      return (
        console.warn(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          e
        ),
        !0
      );
    },
    deleteProperty(e, n) {
      return (
        console.warn(
          `Delete operation on key "${String(n)}" failed: target is readonly.`,
          e
        ),
        !0
      );
    },
  };
Qp({}, ih, { get: DS, set: PS });
Qp({}, sh, { get: CS });
var Gl = (e) => (bs(e) ? ql(e) : e),
  Ul = (e) => (bs(e) ? mh(e) : e),
  $l = (e) => e,
  Ls = (e) => Reflect.getPrototypeOf(e);
function Ps(e, n, i = !1, s = !1) {
  e = e.__v_raw;
  const a = Se(e),
    u = Se(n);
  n !== u && !i && Ut(a, "get", n), !i && Ut(a, "get", u);
  const { has: l } = Ls(a),
    f = s ? $l : i ? Ul : Gl;
  if (l.call(a, n)) return f(e.get(n));
  if (l.call(a, u)) return f(e.get(u));
  e !== a && e.get(n);
}
function Ms(e, n = !1) {
  const i = this.__v_raw,
    s = Se(i),
    a = Se(e);
  return (
    e !== a && !n && Ut(s, "has", e),
    !n && Ut(s, "has", a),
    e === a ? i.has(e) : i.has(e) || i.has(a)
  );
}
function xs(e, n = !1) {
  return (
    (e = e.__v_raw), !n && Ut(Se(e), "iterate", Bn), Reflect.get(e, "size", e)
  );
}
function oh(e) {
  e = Se(e);
  const n = Se(this);
  return Ls(n).has.call(n, e) || (n.add(e), vn(n, "add", e, e)), this;
}
function ah(e, n) {
  n = Se(n);
  const i = Se(this),
    { has: s, get: a } = Ls(i);
  let u = s.call(i, e);
  u ? _h(i, s, e) : ((e = Se(e)), (u = s.call(i, e)));
  const l = a.call(i, e);
  return (
    i.set(e, n),
    u ? jp(n, l) && vn(i, "set", e, n, l) : vn(i, "add", e, n),
    this
  );
}
function lh(e) {
  const n = Se(this),
    { has: i, get: s } = Ls(n);
  let a = i.call(n, e);
  a ? _h(n, i, e) : ((e = Se(e)), (a = i.call(n, e)));
  const u = s ? s.call(n, e) : void 0,
    l = n.delete(e);
  return a && vn(n, "delete", e, void 0, u), l;
}
function uh() {
  const e = Se(this),
    n = e.size !== 0,
    i = jr(e) ? new Map(e) : new Set(e),
    s = e.clear();
  return n && vn(e, "clear", void 0, void 0, i), s;
}
function Ns(e, n) {
  return function (s, a) {
    const u = this,
      l = u.__v_raw,
      f = Se(l),
      p = n ? $l : e ? Ul : Gl;
    return (
      !e && Ut(f, "iterate", Bn), l.forEach((g, E) => s.call(a, p(g), p(E), u))
    );
  };
}
function Ji(e, n, i) {
  return function (...s) {
    const a = this.__v_raw,
      u = Se(a),
      l = jr(u),
      f = e === "entries" || (e === Symbol.iterator && l),
      p = e === "keys" && l,
      g = a[e](...s),
      E = i ? $l : n ? Ul : Gl;
    return (
      !n && Ut(u, "iterate", p ? ja : Bn),
      {
        next() {
          const { value: R, done: T } = g.next();
          return T
            ? { value: R, done: T }
            : { value: f ? [E(R[0]), E(R[1])] : E(R), done: T };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function mn(e) {
  return function (...n) {
    {
      const i = n[0] ? `on key "${n[0]}" ` : "";
      console.warn(
        `${mS(e)} operation ${i}failed: target is readonly.`,
        Se(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
var ch = {
    get(e) {
      return Ps(this, e);
    },
    get size() {
      return xs(this);
    },
    has: Ms,
    add: oh,
    set: ah,
    delete: lh,
    clear: uh,
    forEach: Ns(!1, !1),
  },
  fh = {
    get(e) {
      return Ps(this, e, !1, !0);
    },
    get size() {
      return xs(this);
    },
    has: Ms,
    add: oh,
    set: ah,
    delete: lh,
    clear: uh,
    forEach: Ns(!1, !0),
  },
  dh = {
    get(e) {
      return Ps(this, e, !0);
    },
    get size() {
      return xs(this, !0);
    },
    has(e) {
      return Ms.call(this, e, !0);
    },
    add: mn("add"),
    set: mn("set"),
    delete: mn("delete"),
    clear: mn("clear"),
    forEach: Ns(!0, !1),
  },
  ph = {
    get(e) {
      return Ps(this, e, !0, !0);
    },
    get size() {
      return xs(this, !0);
    },
    has(e) {
      return Ms.call(this, e, !0);
    },
    add: mn("add"),
    set: mn("set"),
    delete: mn("delete"),
    clear: mn("clear"),
    forEach: Ns(!0, !0),
  },
  FS = ["keys", "values", "entries", Symbol.iterator];
FS.forEach((e) => {
  (ch[e] = Ji(e, !1, !1)),
    (dh[e] = Ji(e, !0, !1)),
    (fh[e] = Ji(e, !1, !0)),
    (ph[e] = Ji(e, !0, !0));
});
function hh(e, n) {
  const i = n ? (e ? ph : fh) : e ? dh : ch;
  return (s, a, u) =>
    a === "__v_isReactive"
      ? !e
      : a === "__v_isReadonly"
      ? e
      : a === "__v_raw"
      ? s
      : Reflect.get(Ds(i, a) && a in s ? i : s, a, u);
}
var BS = { get: hh(!1, !1) },
  GS = { get: hh(!0, !1) };
function _h(e, n, i) {
  const s = Se(i);
  if (s !== i && n.call(e, s)) {
    const a = Jp(e);
    console.warn(
      `Reactive ${a} contains both the raw and reactive versions of the same object${
        a === "Map" ? " as keys" : ""
      }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
var gh = new WeakMap(),
  US = new WeakMap(),
  Eh = new WeakMap(),
  $S = new WeakMap();
function qS(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function WS(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : qS(Jp(e));
}
function ql(e) {
  return e && e.__v_isReadonly ? e : Ih(e, !1, ih, BS, gh);
}
function mh(e) {
  return Ih(e, !0, sh, GS, Eh);
}
function Ih(e, n, i, s, a) {
  if (!bs(e))
    return console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(n && e.__v_isReactive)) return e;
  const u = a.get(e);
  if (u) return u;
  const l = WS(e);
  if (l === 0) return e;
  const f = new Proxy(e, l === 2 ? s : i);
  return a.set(e, f), f;
}
function Se(e) {
  return (e && Se(e.__v_raw)) || e;
}
function el(e) {
  return Boolean(e && e.__v_isRef === !0);
}
$t("nextTick", () => Np);
$t("dispatch", (e) => Jr.bind(Jr, e));
$t("watch", (e, { evaluateLater: n, effect: i }) => (s, a) => {
  let u = n(s),
    l = !0,
    f,
    p = i(() =>
      u((g) => {
        JSON.stringify(g),
          l
            ? (f = g)
            : queueMicrotask(() => {
                a(g, f), (f = g);
              }),
          (l = !1);
      })
    );
  e._x_effects.delete(p);
});
$t("store", oS);
$t("data", (e) => Ip(e));
$t("root", (e) => Ss(e));
$t(
  "refs",
  (e) => (e._x_refs_proxy || (e._x_refs_proxy = ii(HS(e))), e._x_refs_proxy)
);
function HS(e) {
  let n = [],
    i = e;
  for (; i; ) i._x_refs && n.push(i._x_refs), (i = i.parentNode);
  return n;
}
var Ca = {};
function Th(e) {
  return Ca[e] || (Ca[e] = 0), ++Ca[e];
}
function VS(e, n) {
  return ys(e, (i) => {
    if (i._x_ids && i._x_ids[n]) return !0;
  });
}
function YS(e, n) {
  e._x_ids || (e._x_ids = {}), e._x_ids[n] || (e._x_ids[n] = Th(n));
}
$t("id", (e) => (n, i = null) => {
  let s = VS(e, n),
    a = s ? s._x_ids[n] : Th(n);
  return i ? `${n}-${a}-${i}` : `${n}-${a}`;
});
$t("el", (e) => e);
vh("Focus", "focus", "focus");
vh("Persist", "persist", "persist");
function vh(e, n, i) {
  $t(n, (s) =>
    _r(
      `You can't use [$${directiveName}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${i}`,
      s
    )
  );
}
Me("modelable", (e, { expression: n }, { effect: i, evaluateLater: s }) => {
  let a = s(n),
    u = () => {
      let g;
      return a((E) => (g = E)), g;
    },
    l = s(`${n} = __placeholder`),
    f = (g) => l(() => {}, { scope: { __placeholder: g } }),
    p = u();
  f(p),
    queueMicrotask(() => {
      if (!e._x_model) return;
      e._x_removeModelListeners.default();
      let g = e._x_model.get,
        E = e._x_model.set;
      i(() => f(g())), i(() => E(u()));
    });
});
Me("teleport", (e, { expression: n }, { cleanup: i }) => {
  e.tagName.toLowerCase() !== "template" &&
    _r("x-teleport can only be used on a <template> tag", e);
  let s = document.querySelector(n);
  s || _r(`Cannot find x-teleport element for selector: "${n}"`);
  let a = e.content.cloneNode(!0).firstElementChild;
  (e._x_teleport = a),
    (a._x_teleportBack = e),
    e._x_forwardEvents &&
      e._x_forwardEvents.forEach((u) => {
        a.addEventListener(u, (l) => {
          l.stopPropagation(), e.dispatchEvent(new l.constructor(l.type, l));
        });
      }),
    ri(a, {}, e),
    We(() => {
      s.appendChild(a), Tn(a), (a._x_ignore = !0);
    }),
    i(() => a.remove());
});
var Rh = () => {};
Rh.inline = (e, { modifiers: n }, { cleanup: i }) => {
  n.includes("self") ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
    i(() => {
      n.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
    });
};
Me("ignore", Rh);
Me("effect", (e, { expression: n }, { effect: i }) => i(et(e, n)));
function Oh(e, n, i, s) {
  let a = e,
    u = (p) => s(p),
    l = {},
    f = (p, g) => (E) => g(p, E);
  if (
    (i.includes("dot") && (n = zS(n)),
    i.includes("camel") && (n = XS(n)),
    i.includes("passive") && (l.passive = !0),
    i.includes("capture") && (l.capture = !0),
    i.includes("window") && (a = window),
    i.includes("document") && (a = document),
    i.includes("prevent") &&
      (u = f(u, (p, g) => {
        g.preventDefault(), p(g);
      })),
    i.includes("stop") &&
      (u = f(u, (p, g) => {
        g.stopPropagation(), p(g);
      })),
    i.includes("self") &&
      (u = f(u, (p, g) => {
        g.target === e && p(g);
      })),
    (i.includes("away") || i.includes("outside")) &&
      ((a = document),
      (u = f(u, (p, g) => {
        e.contains(g.target) ||
          (g.target.isConnected !== !1 &&
            ((e.offsetWidth < 1 && e.offsetHeight < 1) ||
              (e._x_isShown !== !1 && p(g))));
      }))),
    i.includes("once") &&
      (u = f(u, (p, g) => {
        p(g), a.removeEventListener(n, u, l);
      })),
    (u = f(u, (p, g) => {
      (kS(n) && QS(g, i)) || p(g);
    })),
    i.includes("debounce"))
  ) {
    let p = i[i.indexOf("debounce") + 1] || "invalid-wait",
      g = tl(p.split("ms")[0]) ? Number(p.split("ms")[0]) : 250;
    u = Yp(u, g);
  }
  if (i.includes("throttle")) {
    let p = i[i.indexOf("throttle") + 1] || "invalid-wait",
      g = tl(p.split("ms")[0]) ? Number(p.split("ms")[0]) : 250;
    u = zp(u, g);
  }
  return (
    a.addEventListener(n, u, l),
    () => {
      a.removeEventListener(n, u, l);
    }
  );
}
function zS(e) {
  return e.replace(/-/g, ".");
}
function XS(e) {
  return e.toLowerCase().replace(/-(\w)/g, (n, i) => i.toUpperCase());
}
function tl(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function KS(e) {
  return e
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[_\s]/, "-")
    .toLowerCase();
}
function kS(e) {
  return ["keydown", "keyup"].includes(e);
}
function QS(e, n) {
  let i = n.filter(
    (u) => !["window", "document", "prevent", "stop", "once"].includes(u)
  );
  if (i.includes("debounce")) {
    let u = i.indexOf("debounce");
    i.splice(u, tl((i[u + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (i.length === 0 || (i.length === 1 && ad(e.key).includes(i[0]))) return !1;
  const a = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((u) =>
    i.includes(u)
  );
  return (
    (i = i.filter((u) => !a.includes(u))),
    !(
      a.length > 0 &&
      a.filter(
        (l) => ((l === "cmd" || l === "super") && (l = "meta"), e[`${l}Key`])
      ).length === a.length &&
      ad(e.key).includes(i[0])
    )
  );
}
function ad(e) {
  if (!e) return [];
  e = KS(e);
  let n = {
    ctrl: "control",
    slash: "/",
    space: "-",
    spacebar: "-",
    cmd: "meta",
    esc: "escape",
    up: "arrow-up",
    down: "arrow-down",
    left: "arrow-left",
    right: "arrow-right",
    period: ".",
    equal: "=",
  };
  return (
    (n[e] = e),
    Object.keys(n)
      .map((i) => {
        if (n[i] === e) return i;
      })
      .filter((i) => i)
  );
}
Me("model", (e, { modifiers: n, expression: i }, { effect: s, cleanup: a }) => {
  let u = et(e, i),
    l = `${i} = rightSideOfExpression($event, ${i})`,
    f = et(e, l);
  var p =
    e.tagName.toLowerCase() === "select" ||
    ["checkbox", "radio"].includes(e.type) ||
    n.includes("lazy")
      ? "change"
      : "input";
  let g = ZS(e, n, i),
    E = Oh(e, p, n, (T) => {
      f(() => {}, { scope: { $event: T, rightSideOfExpression: g } });
    });
  e._x_removeModelListeners || (e._x_removeModelListeners = {}),
    (e._x_removeModelListeners.default = E),
    a(() => e._x_removeModelListeners.default());
  let R = et(e, `${i} = __placeholder`);
  (e._x_model = {
    get() {
      let T;
      return u((A) => (T = A)), T;
    },
    set(T) {
      R(() => {}, { scope: { __placeholder: T } });
    },
  }),
    (e._x_forceModelUpdate = () => {
      u((T) => {
        T === void 0 && i.match(/\./) && (T = ""),
          (window.fromModel = !0),
          We(() => Hp(e, "value", T)),
          delete window.fromModel;
      });
    }),
    s(() => {
      (n.includes("unintrusive") && document.activeElement.isSameNode(e)) ||
        e._x_forceModelUpdate();
    });
});
function ZS(e, n, i) {
  return (
    e.type === "radio" &&
      We(() => {
        e.hasAttribute("name") || e.setAttribute("name", i);
      }),
    (s, a) =>
      We(() => {
        if (s instanceof CustomEvent && s.detail !== void 0)
          return s.detail || s.target.value;
        if (e.type === "checkbox")
          if (Array.isArray(a)) {
            let u = n.includes("number") ? La(s.target.value) : s.target.value;
            return s.target.checked
              ? a.concat([u])
              : a.filter((l) => !JS(l, u));
          } else return s.target.checked;
        else {
          if (e.tagName.toLowerCase() === "select" && e.multiple)
            return n.includes("number")
              ? Array.from(s.target.selectedOptions).map((u) => {
                  let l = u.value || u.text;
                  return La(l);
                })
              : Array.from(s.target.selectedOptions).map(
                  (u) => u.value || u.text
                );
          {
            let u = s.target.value;
            return n.includes("number")
              ? La(u)
              : n.includes("trim")
              ? u.trim()
              : u;
          }
        }
      })
  );
}
function La(e) {
  let n = e ? parseFloat(e) : null;
  return jS(n) ? n : e;
}
function JS(e, n) {
  return e == n;
}
function jS(e) {
  return !Array.isArray(e) && !isNaN(e);
}
Me("cloak", (e) =>
  queueMicrotask(() => We(() => e.removeAttribute(vr("cloak"))))
);
$p(() => `[${vr("init")}]`);
Me(
  "init",
  ws((e, { expression: n }, { evaluate: i }) =>
    typeof n == "string" ? !!n.trim() && i(n, {}, !1) : i(n, {}, !1)
  )
);
Me("text", (e, { expression: n }, { effect: i, evaluateLater: s }) => {
  let a = s(n);
  i(() => {
    a((u) => {
      We(() => {
        e.textContent = u;
      });
    });
  });
});
Me("html", (e, { expression: n }, { effect: i, evaluateLater: s }) => {
  let a = s(n);
  i(() => {
    a((u) => {
      We(() => {
        (e.innerHTML = u),
          (e._x_ignoreSelf = !0),
          Tn(e),
          delete e._x_ignoreSelf;
      });
    });
  });
});
Ll(bp(":", Cp(vr("bind:"))));
Me(
  "bind",
  (
    e,
    { value: n, modifiers: i, expression: s, original: a },
    { effect: u }
  ) => {
    if (!n) {
      let f = {};
      lS(f),
        et(e, s)(
          (g) => {
            Kp(e, g, a);
          },
          { scope: f }
        );
      return;
    }
    if (n === "key") return ey(e, s);
    let l = et(e, s);
    u(() =>
      l((f) => {
        f === void 0 && typeof s == "string" && s.match(/\./) && (f = ""),
          We(() => Hp(e, n, f, i));
      })
    );
  }
);
function ey(e, n) {
  e._x_keyExpression = n;
}
Up(() => `[${vr("data")}]`);
Me(
  "data",
  ws((e, { expression: n }, { cleanup: i }) => {
    n = n === "" ? "{}" : n;
    let s = {};
    Va(s, e);
    let a = {};
    cS(a, s);
    let u = cr(e, n, { scope: a });
    u === void 0 && (u = {}), Va(u, e);
    let l = Tr(u);
    Tp(l);
    let f = ri(e, l);
    l.init && cr(e, l.init),
      i(() => {
        l.destroy && cr(e, l.destroy), f();
      });
  })
);
Me("show", (e, { modifiers: n, expression: i }, { effect: s }) => {
  let a = et(e, i);
  e._x_doHide ||
    (e._x_doHide = () => {
      We(() => {
        e.style.setProperty(
          "display",
          "none",
          n.includes("important") ? "important" : void 0
        );
      });
    }),
    e._x_doShow ||
      (e._x_doShow = () => {
        We(() => {
          e.style.length === 1 && e.style.display === "none"
            ? e.removeAttribute("style")
            : e.style.removeProperty("display");
        });
      });
  let u = () => {
      e._x_doHide(), (e._x_isShown = !1);
    },
    l = () => {
      e._x_doShow(), (e._x_isShown = !0);
    },
    f = () => setTimeout(l),
    p = ka(
      (R) => (R ? l() : u()),
      (R) => {
        typeof e._x_toggleAndCascadeWithTransitions == "function"
          ? e._x_toggleAndCascadeWithTransitions(e, R, l, u)
          : R
          ? f()
          : u();
      }
    ),
    g,
    E = !0;
  s(() =>
    a((R) => {
      (!E && R === g) ||
        (n.includes("immediate") && (R ? f() : u()), p(R), (g = R), (E = !1));
    })
  );
});
Me("for", (e, { expression: n }, { effect: i, cleanup: s }) => {
  let a = ny(n),
    u = et(e, a.items),
    l = et(e, e._x_keyExpression || "index");
  (e._x_prevKeys = []),
    (e._x_lookup = {}),
    i(() => ty(e, a, u, l)),
    s(() => {
      Object.values(e._x_lookup).forEach((f) => f.remove()),
        delete e._x_prevKeys,
        delete e._x_lookup;
    });
});
function ty(e, n, i, s) {
  let a = (l) => typeof l == "object" && !Array.isArray(l),
    u = e;
  i((l) => {
    ry(l) && l >= 0 && (l = Array.from(Array(l).keys(), (D) => D + 1)),
      l === void 0 && (l = []);
    let f = e._x_lookup,
      p = e._x_prevKeys,
      g = [],
      E = [];
    if (a(l))
      l = Object.entries(l).map(([D, P]) => {
        let G = ld(n, P, D, l);
        s(($) => E.push($), { scope: { index: D, ...G } }), g.push(G);
      });
    else
      for (let D = 0; D < l.length; D++) {
        let P = ld(n, l[D], D, l);
        s((G) => E.push(G), { scope: { index: D, ...P } }), g.push(P);
      }
    let R = [],
      T = [],
      A = [],
      S = [];
    for (let D = 0; D < p.length; D++) {
      let P = p[D];
      E.indexOf(P) === -1 && A.push(P);
    }
    p = p.filter((D) => !A.includes(D));
    let L = "template";
    for (let D = 0; D < E.length; D++) {
      let P = E[D],
        G = p.indexOf(P);
      if (G === -1) p.splice(D, 0, P), R.push([L, D]);
      else if (G !== D) {
        let $ = p.splice(D, 1)[0],
          H = p.splice(G - 1, 1)[0];
        p.splice(D, 0, H), p.splice(G, 0, $), T.push([$, H]);
      } else S.push(P);
      L = P;
    }
    for (let D = 0; D < A.length; D++) {
      let P = A[D];
      f[P]._x_effects && f[P]._x_effects.forEach(fp),
        f[P].remove(),
        (f[P] = null),
        delete f[P];
    }
    for (let D = 0; D < T.length; D++) {
      let [P, G] = T[D],
        $ = f[P],
        H = f[G],
        M = document.createElement("div");
      We(() => {
        H.after(M),
          $.after(H),
          H._x_currentIfEl && H.after(H._x_currentIfEl),
          M.before($),
          $._x_currentIfEl && $.after($._x_currentIfEl),
          M.remove();
      }),
        rd(H, g[E.indexOf(G)]);
    }
    for (let D = 0; D < R.length; D++) {
      let [P, G] = R[D],
        $ = P === "template" ? u : f[P];
      $._x_currentIfEl && ($ = $._x_currentIfEl);
      let H = g[G],
        M = E[G],
        X = document.importNode(u.content, !0).firstElementChild;
      ri(X, Tr(H), u),
        We(() => {
          $.after(X), Tn(X);
        }),
        typeof M == "object" &&
          _r(
            "x-for key cannot be an object, it must be a string or an integer",
            u
          ),
        (f[M] = X);
    }
    for (let D = 0; D < S.length; D++) rd(f[S[D]], g[E.indexOf(S[D])]);
    u._x_prevKeys = E;
  });
}
function ny(e) {
  let n = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
    i = /^\s*\(|\)\s*$/g,
    s = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
    a = e.match(s);
  if (!a) return;
  let u = {};
  u.items = a[2].trim();
  let l = a[1].replace(i, "").trim(),
    f = l.match(n);
  return (
    f
      ? ((u.item = l.replace(n, "").trim()),
        (u.index = f[1].trim()),
        f[2] && (u.collection = f[2].trim()))
      : (u.item = l),
    u
  );
}
function ld(e, n, i, s) {
  let a = {};
  return (
    /^\[.*\]$/.test(e.item) && Array.isArray(n)
      ? e.item
          .replace("[", "")
          .replace("]", "")
          .split(",")
          .map((l) => l.trim())
          .forEach((l, f) => {
            a[l] = n[f];
          })
      : /^\{.*\}$/.test(e.item) && !Array.isArray(n) && typeof n == "object"
      ? e.item
          .replace("{", "")
          .replace("}", "")
          .split(",")
          .map((l) => l.trim())
          .forEach((l) => {
            a[l] = n[l];
          })
      : (a[e.item] = n),
    e.index && (a[e.index] = i),
    e.collection && (a[e.collection] = s),
    a
  );
}
function ry(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function Sh() {}
Sh.inline = (e, { expression: n }, { cleanup: i }) => {
  let s = Ss(e);
  s._x_refs || (s._x_refs = {}),
    (s._x_refs[n] = e),
    i(() => delete s._x_refs[n]);
};
Me("ref", Sh);
Me("if", (e, { expression: n }, { effect: i, cleanup: s }) => {
  let a = et(e, n),
    u = () => {
      if (e._x_currentIfEl) return e._x_currentIfEl;
      let f = e.content.cloneNode(!0).firstElementChild;
      return (
        ri(f, {}, e),
        We(() => {
          e.after(f), Tn(f);
        }),
        (e._x_currentIfEl = f),
        (e._x_undoIf = () => {
          qn(f, (p) => {
            p._x_effects && p._x_effects.forEach(fp);
          }),
            f.remove(),
            delete e._x_currentIfEl;
        }),
        f
      );
    },
    l = () => {
      !e._x_undoIf || (e._x_undoIf(), delete e._x_undoIf);
    };
  i(() =>
    a((f) => {
      f ? u() : l();
    })
  ),
    s(() => e._x_undoIf && e._x_undoIf());
});
Me("id", (e, { expression: n }, { evaluate: i }) => {
  i(n).forEach((a) => YS(e, a));
});
Ll(bp("@", Cp(vr("on:"))));
Me(
  "on",
  ws((e, { value: n, modifiers: i, expression: s }, { cleanup: a }) => {
    let u = s ? et(e, s) : () => {};
    e.tagName.toLowerCase() === "template" &&
      (e._x_forwardEvents || (e._x_forwardEvents = []),
      e._x_forwardEvents.includes(n) || e._x_forwardEvents.push(n));
    let l = Oh(e, n, i, (f) => {
      u(() => {}, { scope: { $event: f }, params: [f] });
    });
    a(() => l());
  })
);
Fs("Collapse", "collapse", "collapse");
Fs("Intersect", "intersect", "intersect");
Fs("Focus", "trap", "focus");
Fs("Mask", "mask", "mask");
function Fs(e, n, i) {
  Me(n, (s) =>
    _r(
      `You can't use [x-${n}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${i}`,
      s
    )
  );
}
si.setEvaluator(Sp);
si.setReactivityEngine({ reactive: ql, effect: TS, release: vS, raw: Se });
var iy = si,
  yh = iy;
/*!
 * FilePond 4.30.4
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */ const sy = (e) => e instanceof HTMLElement,
  oy = (e, n = [], i = []) => {
    const s = { ...e },
      a = [],
      u = [],
      l = () => ({ ...s }),
      f = () => {
        const S = [...a];
        return (a.length = 0), S;
      },
      p = () => {
        const S = [...u];
        (u.length = 0),
          S.forEach(({ type: L, data: D }) => {
            g(L, D);
          });
      },
      g = (S, L, D) => {
        if (D && !document.hidden) {
          u.push({ type: S, data: L });
          return;
        }
        A[S] && A[S](L), a.push({ type: S, data: L });
      },
      E = (S, ...L) => (T[S] ? T[S](...L) : null),
      R = {
        getState: l,
        processActionQueue: f,
        processDispatchQueue: p,
        dispatch: g,
        query: E,
      };
    let T = {};
    n.forEach((S) => {
      T = { ...S(s), ...T };
    });
    let A = {};
    return (
      i.forEach((S) => {
        A = { ...S(g, E, s), ...A };
      }),
      R
    );
  },
  ay = (e, n, i) => {
    if (typeof i == "function") {
      e[n] = i;
      return;
    }
    Object.defineProperty(e, n, { ...i });
  },
  we = (e, n) => {
    for (const i in e) !e.hasOwnProperty(i) || n(i, e[i]);
  },
  In = (e) => {
    const n = {};
    return (
      we(e, (i) => {
        ay(n, i, e[i]);
      }),
      n
    );
  },
  Pe = (e, n, i = null) => {
    if (i === null) return e.getAttribute(n) || e.hasAttribute(n);
    e.setAttribute(n, i);
  },
  ly = "http://www.w3.org/2000/svg",
  uy = ["svg", "path"],
  ud = (e) => uy.includes(e),
  _s = (e, n, i = {}) => {
    typeof n == "object" && ((i = n), (n = null));
    const s = ud(e)
      ? document.createElementNS(ly, e)
      : document.createElement(e);
    return (
      n && (ud(e) ? Pe(s, "class", n) : (s.className = n)),
      we(i, (a, u) => {
        Pe(s, a, u);
      }),
      s
    );
  },
  cy = (e) => (n, i) => {
    typeof i < "u" && e.children[i]
      ? e.insertBefore(n, e.children[i])
      : e.appendChild(n);
  },
  fy = (e, n) => (i, s) => (typeof s < "u" ? n.splice(s, 0, i) : n.push(i), i),
  dy = (e, n) => (i) => (
    n.splice(n.indexOf(i), 1),
    i.element.parentNode && e.removeChild(i.element),
    i
  ),
  py = (() => typeof window < "u" && typeof window.document < "u")(),
  Ah = () => py,
  hy = Ah() ? _s("svg") : {},
  _y = "children" in hy ? (e) => e.children.length : (e) => e.childNodes.length,
  wh = (e, n, i, s) => {
    const a = i[0] || e.left,
      u = i[1] || e.top,
      l = a + e.width,
      f = u + e.height * (s[1] || 1),
      p = {
        element: { ...e },
        inner: { left: e.left, top: e.top, right: e.right, bottom: e.bottom },
        outer: { left: a, top: u, right: l, bottom: f },
      };
    return (
      n
        .filter((g) => !g.isRectIgnored())
        .map((g) => g.rect)
        .forEach((g) => {
          cd(p.inner, { ...g.inner }), cd(p.outer, { ...g.outer });
        }),
      fd(p.inner),
      (p.outer.bottom += p.element.marginBottom),
      (p.outer.right += p.element.marginRight),
      fd(p.outer),
      p
    );
  },
  cd = (e, n) => {
    (n.top += e.top),
      (n.right += e.left),
      (n.bottom += e.top),
      (n.left += e.left),
      n.bottom > e.bottom && (e.bottom = n.bottom),
      n.right > e.right && (e.right = n.right);
  },
  fd = (e) => {
    (e.width = e.right - e.left), (e.height = e.bottom - e.top);
  },
  Pn = (e) => typeof e == "number",
  gy = (e, n, i, s = 0.001) => Math.abs(e - n) < s && Math.abs(i) < s,
  Ey = ({ stiffness: e = 0.5, damping: n = 0.75, mass: i = 10 } = {}) => {
    let s = null,
      a = null,
      u = 0,
      l = !1;
    const g = In({
      interpolate: (E, R) => {
        if (l) return;
        if (!(Pn(s) && Pn(a))) {
          (l = !0), (u = 0);
          return;
        }
        (u += (-(a - s) * e) / i),
          (a += u),
          (u *= n),
          gy(a, s, u) || R
            ? ((a = s), (u = 0), (l = !0), g.onupdate(a), g.oncomplete(a))
            : g.onupdate(a);
      },
      target: {
        set: (E) => {
          if (
            (Pn(E) && !Pn(a) && (a = E),
            s === null && ((s = E), (a = E)),
            (s = E),
            a === s || typeof s > "u")
          ) {
            (l = !0), (u = 0), g.onupdate(a), g.oncomplete(a);
            return;
          }
          l = !1;
        },
        get: () => s,
      },
      resting: { get: () => l },
      onupdate: (E) => {},
      oncomplete: (E) => {},
    });
    return g;
  },
  my = (e) => (e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e),
  Iy = ({ duration: e = 500, easing: n = my, delay: i = 0 } = {}) => {
    let s = null,
      a,
      u,
      l = !0,
      f = !1,
      p = null;
    const E = In({
      interpolate: (R, T) => {
        l ||
          p === null ||
          (s === null && (s = R),
          !(R - s < i) &&
            ((a = R - s - i),
            a >= e || T
              ? ((a = 1),
                (u = f ? 0 : 1),
                E.onupdate(u * p),
                E.oncomplete(u * p),
                (l = !0))
              : ((u = a / e),
                E.onupdate((a >= 0 ? n(f ? 1 - u : u) : 0) * p))));
      },
      target: {
        get: () => (f ? 0 : p),
        set: (R) => {
          if (p === null) {
            (p = R), E.onupdate(R), E.oncomplete(R);
            return;
          }
          R < p ? ((p = 1), (f = !0)) : ((f = !1), (p = R)),
            (l = !1),
            (s = null);
        },
      },
      resting: { get: () => l },
      onupdate: (R) => {},
      oncomplete: (R) => {},
    });
    return E;
  },
  dd = { spring: Ey, tween: Iy },
  Ty = (e, n, i) => {
    const s = e[n] && typeof e[n][i] == "object" ? e[n][i] : e[n] || e,
      a = typeof s == "string" ? s : s.type,
      u = typeof s == "object" ? { ...s } : {};
    return dd[a] ? dd[a](u) : null;
  },
  Wl = (e, n, i, s = !1) => {
    (n = Array.isArray(n) ? n : [n]),
      n.forEach((a) => {
        e.forEach((u) => {
          let l = u,
            f = () => i[u],
            p = (g) => (i[u] = g);
          typeof u == "object" &&
            ((l = u.key), (f = u.getter || f), (p = u.setter || p)),
            !(a[l] && !s) && (a[l] = { get: f, set: p });
        });
      });
  },
  vy = ({
    mixinConfig: e,
    viewProps: n,
    viewInternalAPI: i,
    viewExternalAPI: s,
  }) => {
    const a = { ...n },
      u = [];
    return (
      we(e, (l, f) => {
        const p = Ty(f);
        if (!p) return;
        (p.onupdate = (E) => {
          n[l] = E;
        }),
          (p.target = a[l]),
          Wl(
            [
              {
                key: l,
                setter: (E) => {
                  p.target !== E && (p.target = E);
                },
                getter: () => n[l],
              },
            ],
            [i, s],
            n,
            !0
          ),
          u.push(p);
      }),
      {
        write: (l) => {
          let f = document.hidden,
            p = !0;
          return (
            u.forEach((g) => {
              g.resting || (p = !1), g.interpolate(l, f);
            }),
            p
          );
        },
        destroy: () => {},
      }
    );
  },
  Ry = (e) => (n, i) => {
    e.addEventListener(n, i);
  },
  Oy = (e) => (n, i) => {
    e.removeEventListener(n, i);
  },
  Sy = ({
    mixinConfig: e,
    viewProps: n,
    viewInternalAPI: i,
    viewExternalAPI: s,
    viewState: a,
    view: u,
  }) => {
    const l = [],
      f = Ry(u.element),
      p = Oy(u.element);
    return (
      (s.on = (g, E) => {
        l.push({ type: g, fn: E }), f(g, E);
      }),
      (s.off = (g, E) => {
        l.splice(
          l.findIndex((R) => R.type === g && R.fn === E),
          1
        ),
          p(g, E);
      }),
      {
        write: () => !0,
        destroy: () => {
          l.forEach((g) => {
            p(g.type, g.fn);
          });
        },
      }
    );
  },
  yy = ({ mixinConfig: e, viewProps: n, viewExternalAPI: i }) => {
    Wl(e, i, n);
  },
  je = (e) => e != null,
  Ay = {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    originX: 0,
    originY: 0,
  },
  wy = ({
    mixinConfig: e,
    viewProps: n,
    viewInternalAPI: i,
    viewExternalAPI: s,
    view: a,
  }) => {
    const u = { ...n },
      l = {};
    Wl(e, [i, s], n);
    const f = () => [n.translateX || 0, n.translateY || 0],
      p = () => [n.scaleX || 0, n.scaleY || 0],
      g = () => (a.rect ? wh(a.rect, a.childViews, f(), p()) : null);
    return (
      (i.rect = { get: g }),
      (s.rect = { get: g }),
      e.forEach((E) => {
        n[E] = typeof u[E] > "u" ? Ay[E] : u[E];
      }),
      {
        write: () => {
          if (!!Dy(l, n))
            return by(a.element, n), Object.assign(l, { ...n }), !0;
        },
        destroy: () => {},
      }
    );
  },
  Dy = (e, n) => {
    if (Object.keys(e).length !== Object.keys(n).length) return !0;
    for (const i in n) if (n[i] !== e[i]) return !0;
    return !1;
  },
  by = (
    e,
    {
      opacity: n,
      perspective: i,
      translateX: s,
      translateY: a,
      scaleX: u,
      scaleY: l,
      rotateX: f,
      rotateY: p,
      rotateZ: g,
      originX: E,
      originY: R,
      width: T,
      height: A,
    }
  ) => {
    let S = "",
      L = "";
    (je(E) || je(R)) && (L += `transform-origin: ${E || 0}px ${R || 0}px;`),
      je(i) && (S += `perspective(${i}px) `),
      (je(s) || je(a)) && (S += `translate3d(${s || 0}px, ${a || 0}px, 0) `),
      (je(u) || je(l)) &&
        (S += `scale3d(${je(u) ? u : 1}, ${je(l) ? l : 1}, 1) `),
      je(g) && (S += `rotateZ(${g}rad) `),
      je(f) && (S += `rotateX(${f}rad) `),
      je(p) && (S += `rotateY(${p}rad) `),
      S.length && (L += `transform:${S};`),
      je(n) &&
        ((L += `opacity:${n};`),
        n === 0 && (L += "visibility:hidden;"),
        n < 1 && (L += "pointer-events:none;")),
      je(A) && (L += `height:${A}px;`),
      je(T) && (L += `width:${T}px;`);
    const D = e.elementCurrentStyle || "";
    (L.length !== D.length || L !== D) &&
      ((e.style.cssText = L), (e.elementCurrentStyle = L));
  },
  Cy = { styles: wy, listeners: Sy, animations: vy, apis: yy },
  pd = (e = {}, n = {}, i = {}) => (
    n.layoutCalculated ||
      ((e.paddingTop = parseInt(i.paddingTop, 10) || 0),
      (e.marginTop = parseInt(i.marginTop, 10) || 0),
      (e.marginRight = parseInt(i.marginRight, 10) || 0),
      (e.marginBottom = parseInt(i.marginBottom, 10) || 0),
      (e.marginLeft = parseInt(i.marginLeft, 10) || 0),
      (n.layoutCalculated = !0)),
    (e.left = n.offsetLeft || 0),
    (e.top = n.offsetTop || 0),
    (e.width = n.offsetWidth || 0),
    (e.height = n.offsetHeight || 0),
    (e.right = e.left + e.width),
    (e.bottom = e.top + e.height),
    (e.scrollTop = n.scrollTop),
    (e.hidden = n.offsetParent === null),
    e
  ),
  xe =
    ({
      tag: e = "div",
      name: n = null,
      attributes: i = {},
      read: s = () => {},
      write: a = () => {},
      create: u = () => {},
      destroy: l = () => {},
      filterFrameActionsForChild: f = (A, S) => S,
      didCreateView: p = () => {},
      didWriteView: g = () => {},
      ignoreRect: E = !1,
      ignoreRectUpdate: R = !1,
      mixins: T = [],
    } = {}) =>
    (A, S = {}) => {
      const L = _s(e, `filepond--${n}`, i),
        D = window.getComputedStyle(L, null),
        P = pd();
      let G = null,
        $ = !1;
      const H = [],
        M = [],
        X = {},
        le = {},
        W = [a],
        Q = [s],
        ue = [l],
        K = () => L,
        Z = () => H.concat(),
        Te = () => X,
        B = (oe) => (Ge, ke) => Ge(oe, ke),
        fe = () => G || ((G = wh(P, H, [0, 0], [1, 1])), G),
        N = () => D,
        U = () => {
          (G = null),
            H.forEach((ke) => ke._read()),
            !(R && P.width && P.height) && pd(P, L, D);
          const Ge = { root: qt, props: S, rect: P };
          Q.forEach((ke) => ke(Ge));
        },
        Y = (oe, Ge, ke) => {
          let Et = Ge.length === 0;
          return (
            W.forEach((ze) => {
              ze({
                props: S,
                root: qt,
                actions: Ge,
                timestamp: oe,
                shouldOptimize: ke,
              }) === !1 && (Et = !1);
            }),
            M.forEach((ze) => {
              ze.write(oe) === !1 && (Et = !1);
            }),
            H.filter((ze) => !!ze.element.parentNode).forEach((ze) => {
              ze._write(oe, f(ze, Ge), ke) || (Et = !1);
            }),
            H.forEach((ze, zt) => {
              ze.element.parentNode ||
                (qt.appendChild(ze.element, zt),
                ze._read(),
                ze._write(oe, f(ze, Ge), ke),
                (Et = !1));
            }),
            ($ = Et),
            g({ props: S, root: qt, actions: Ge, timestamp: oe }),
            Et
          );
        },
        k = () => {
          M.forEach((oe) => oe.destroy()),
            ue.forEach((oe) => {
              oe({ root: qt, props: S });
            }),
            H.forEach((oe) => oe._destroy());
        },
        he = { element: { get: K }, style: { get: N }, childViews: { get: Z } },
        _e = {
          ...he,
          rect: { get: fe },
          ref: { get: Te },
          is: (oe) => n === oe,
          appendChild: cy(L),
          createChildView: B(A),
          linkView: (oe) => (H.push(oe), oe),
          unlinkView: (oe) => {
            H.splice(H.indexOf(oe), 1);
          },
          appendChildView: fy(L, H),
          removeChildView: dy(L, H),
          registerWriter: (oe) => W.push(oe),
          registerReader: (oe) => Q.push(oe),
          registerDestroyer: (oe) => ue.push(oe),
          invalidateLayout: () => (L.layoutCalculated = !1),
          dispatch: A.dispatch,
          query: A.query,
        },
        Or = {
          element: { get: K },
          childViews: { get: Z },
          rect: { get: fe },
          resting: { get: () => $ },
          isRectIgnored: () => E,
          _read: U,
          _write: Y,
          _destroy: k,
        },
        Vs = { ...he, rect: { get: () => P } };
      Object.keys(T)
        .sort((oe, Ge) => (oe === "styles" ? 1 : Ge === "styles" ? -1 : 0))
        .forEach((oe) => {
          const Ge = Cy[oe]({
            mixinConfig: T[oe],
            viewProps: S,
            viewState: le,
            viewInternalAPI: _e,
            viewExternalAPI: Or,
            view: In(Vs),
          });
          Ge && M.push(Ge);
        });
      const qt = In(_e);
      u({ root: qt, props: S });
      const on = _y(L);
      return (
        H.forEach((oe, Ge) => {
          qt.appendChild(oe.element, on + Ge);
        }),
        p(qt),
        In(Or)
      );
    },
  Ly = (e, n, i = 60) => {
    const s = "__framePainter";
    if (window[s]) {
      window[s].readers.push(e), window[s].writers.push(n);
      return;
    }
    window[s] = { readers: [e], writers: [n] };
    const a = window[s],
      u = 1e3 / i;
    let l = null,
      f = null,
      p = null,
      g = null;
    const E = () => {
      document.hidden
        ? ((p = () => window.setTimeout(() => R(performance.now()), u)),
          (g = () => window.clearTimeout(f)))
        : ((p = () => window.requestAnimationFrame(R)),
          (g = () => window.cancelAnimationFrame(f)));
    };
    document.addEventListener("visibilitychange", () => {
      g && g(), E(), R(performance.now());
    });
    const R = (T) => {
      (f = p(R)), l || (l = T);
      const A = T - l;
      A <= u ||
        ((l = T - (A % u)),
        a.readers.forEach((S) => S()),
        a.writers.forEach((S) => S(T)));
    };
    return (
      E(),
      R(performance.now()),
      {
        pause: () => {
          g(f);
        },
      }
    );
  },
  nt =
    (e, n) =>
    ({
      root: i,
      props: s,
      actions: a = [],
      timestamp: u,
      shouldOptimize: l,
    }) => {
      a
        .filter((f) => e[f.type])
        .forEach((f) =>
          e[f.type]({
            root: i,
            props: s,
            action: f.data,
            timestamp: u,
            shouldOptimize: l,
          })
        ),
        n &&
          n({ root: i, props: s, actions: a, timestamp: u, shouldOptimize: l });
    },
  hd = (e, n) => n.parentNode.insertBefore(e, n),
  _d = (e, n) => n.parentNode.insertBefore(e, n.nextSibling),
  Bs = (e) => Array.isArray(e),
  rn = (e) => e == null,
  Py = (e) => e.trim(),
  Gs = (e) => "" + e,
  My = (e, n = ",") =>
    rn(e)
      ? []
      : Bs(e)
      ? e
      : Gs(e)
          .split(n)
          .map(Py)
          .filter((i) => i.length),
  Dh = (e) => typeof e == "boolean",
  bh = (e) => (Dh(e) ? e : e === "true"),
  tt = (e) => typeof e == "string",
  Ch = (e) => (Pn(e) ? e : tt(e) ? Gs(e).replace(/[a-z]+/gi, "") : 0),
  ls = (e) => parseInt(Ch(e), 10),
  gd = (e) => parseFloat(Ch(e)),
  Rr = (e) => Pn(e) && isFinite(e) && Math.floor(e) === e,
  Ed = (e, n = 1e3) => {
    if (Rr(e)) return e;
    let i = Gs(e).trim();
    return /MB$/i.test(i)
      ? ((i = i.replace(/MB$i/, "").trim()), ls(i) * n * n)
      : /KB/i.test(i)
      ? ((i = i.replace(/KB$i/, "").trim()), ls(i) * n)
      : ls(i);
  },
  Mn = (e) => typeof e == "function",
  xy = (e) => {
    let n = self,
      i = e.split("."),
      s = null;
    for (; (s = i.shift()); ) if (((n = n[s]), !n)) return null;
    return n;
  },
  md = {
    process: "POST",
    patch: "PATCH",
    revert: "DELETE",
    fetch: "GET",
    restore: "GET",
    load: "GET",
  },
  Ny = (e) => {
    const n = {};
    return (
      (n.url = tt(e) ? e : e.url || ""),
      (n.timeout = e.timeout ? parseInt(e.timeout, 10) : 0),
      (n.headers = e.headers ? e.headers : {}),
      we(md, (i) => {
        n[i] = Fy(i, e[i], md[i], n.timeout, n.headers);
      }),
      (n.process = e.process || tt(e) || e.url ? n.process : null),
      (n.remove = e.remove || null),
      delete n.headers,
      n
    );
  },
  Fy = (e, n, i, s, a) => {
    if (n === null) return null;
    if (typeof n == "function") return n;
    const u = {
      url: i === "GET" || i === "PATCH" ? `?${e}=` : "",
      method: i,
      headers: a,
      withCredentials: !1,
      timeout: s,
      onload: null,
      ondata: null,
      onerror: null,
    };
    if (tt(n)) return (u.url = n), u;
    if ((Object.assign(u, n), tt(u.headers))) {
      const l = u.headers.split(/:(.+)/);
      u.headers = { header: l[0], value: l[1] };
    }
    return (u.withCredentials = bh(u.withCredentials)), u;
  },
  By = (e) => Ny(e),
  Gy = (e) => e === null,
  qe = (e) => typeof e == "object" && e !== null,
  Uy = (e) =>
    qe(e) &&
    tt(e.url) &&
    qe(e.process) &&
    qe(e.revert) &&
    qe(e.restore) &&
    qe(e.fetch),
  nl = (e) =>
    Bs(e)
      ? "array"
      : Gy(e)
      ? "null"
      : Rr(e)
      ? "int"
      : /^[0-9]+ ?(?:GB|MB|KB)$/gi.test(e)
      ? "bytes"
      : Uy(e)
      ? "api"
      : typeof e,
  $y = (e) =>
    e
      .replace(/{\s*'/g, '{"')
      .replace(/'\s*}/g, '"}')
      .replace(/'\s*:/g, '":')
      .replace(/:\s*'/g, ':"')
      .replace(/,\s*'/g, ',"')
      .replace(/'\s*,/g, '",'),
  qy = {
    array: My,
    boolean: bh,
    int: (e) => (nl(e) === "bytes" ? Ed(e) : ls(e)),
    number: gd,
    float: gd,
    bytes: Ed,
    string: (e) => (Mn(e) ? e : Gs(e)),
    function: (e) => xy(e),
    serverapi: By,
    object: (e) => {
      try {
        return JSON.parse($y(e));
      } catch {
        return null;
      }
    },
  },
  Wy = (e, n) => qy[n](e),
  Lh = (e, n, i) => {
    if (e === n) return e;
    let s = nl(e);
    if (s !== i) {
      const a = Wy(e, i);
      if (((s = nl(a)), a === null))
        throw `Trying to assign value with incorrect type to "${option}", allowed type: "${i}"`;
      e = a;
    }
    return e;
  },
  Hy = (e, n) => {
    let i = e;
    return {
      enumerable: !0,
      get: () => i,
      set: (s) => {
        i = Lh(s, e, n);
      },
    };
  },
  Vy = (e) => {
    const n = {};
    return (
      we(e, (i) => {
        const s = e[i];
        n[i] = Hy(s[0], s[1]);
      }),
      In(n)
    );
  },
  Yy = (e) => ({
    items: [],
    listUpdateTimeout: null,
    itemUpdateTimeout: null,
    processingQueue: [],
    options: Vy(e),
  }),
  Us = (e, n = "-") =>
    e
      .split(/(?=[A-Z])/)
      .map((i) => i.toLowerCase())
      .join(n),
  zy = (e, n) => {
    const i = {};
    return (
      we(n, (s) => {
        i[s] = {
          get: () => e.getState().options[s],
          set: (a) => {
            e.dispatch(`SET_${Us(s, "_").toUpperCase()}`, { value: a });
          },
        };
      }),
      i
    );
  },
  Xy = (e) => (n, i, s) => {
    const a = {};
    return (
      we(e, (u) => {
        const l = Us(u, "_").toUpperCase();
        a[`SET_${l}`] = (f) => {
          try {
            s.options[u] = f.value;
          } catch {}
          n(`DID_SET_${l}`, { value: s.options[u] });
        };
      }),
      a
    );
  },
  Ky = (e) => (n) => {
    const i = {};
    return (
      we(e, (s) => {
        i[`GET_${Us(s, "_").toUpperCase()}`] = (a) => n.options[s];
      }),
      i
    );
  },
  Dt = { API: 1, DROP: 2, BROWSE: 3, PASTE: 4, NONE: 5 },
  Hl = () => Math.random().toString(36).substring(2, 11),
  Vl = (e, n) => e.splice(n, 1),
  ky = (e, n) => {
    n ? e() : document.hidden ? Promise.resolve(1).then(e) : setTimeout(e, 0);
  },
  $s = () => {
    const e = [],
      n = (s, a) => {
        Vl(
          e,
          e.findIndex((u) => u.event === s && (u.cb === a || !a))
        );
      },
      i = (s, a, u) => {
        e.filter((l) => l.event === s)
          .map((l) => l.cb)
          .forEach((l) => ky(() => l(...a), u));
      };
    return {
      fireSync: (s, ...a) => {
        i(s, a, !0);
      },
      fire: (s, ...a) => {
        i(s, a, !1);
      },
      on: (s, a) => {
        e.push({ event: s, cb: a });
      },
      onOnce: (s, a) => {
        e.push({
          event: s,
          cb: (...u) => {
            n(s, a), a(...u);
          },
        });
      },
      off: n,
    };
  },
  Ph = (e, n, i) => {
    Object.getOwnPropertyNames(e)
      .filter((s) => !i.includes(s))
      .forEach((s) =>
        Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(e, s))
      );
  },
  Qy = [
    "fire",
    "process",
    "revert",
    "load",
    "on",
    "off",
    "onOnce",
    "retryLoad",
    "extend",
    "archive",
    "archived",
    "release",
    "released",
    "requestProcessing",
    "freeze",
  ],
  at = (e) => {
    const n = {};
    return Ph(e, n, Qy), n;
  },
  Zy = (e) => {
    e.forEach((n, i) => {
      n.released && Vl(e, i);
    });
  },
  ne = {
    INIT: 1,
    IDLE: 2,
    PROCESSING_QUEUED: 9,
    PROCESSING: 3,
    PROCESSING_COMPLETE: 5,
    PROCESSING_ERROR: 6,
    PROCESSING_REVERT_ERROR: 10,
    LOADING: 7,
    LOAD_ERROR: 8,
  },
  Be = { INPUT: 1, LIMBO: 2, LOCAL: 3 },
  Mh = (e) => /[^0-9]+/.exec(e),
  xh = () => Mh((1.1).toLocaleString())[0],
  Jy = () => {
    const e = xh(),
      n = (1e3).toLocaleString(),
      i = (1e3).toString();
    return n !== i ? Mh(n)[0] : e === "." ? "," : ".";
  },
  x = {
    BOOLEAN: "boolean",
    INT: "int",
    NUMBER: "number",
    STRING: "string",
    ARRAY: "array",
    OBJECT: "object",
    FUNCTION: "function",
    ACTION: "action",
    SERVER_API: "serverapi",
    REGEX: "regex",
  },
  Yl = [],
  Ft = (e, n, i) =>
    new Promise((s, a) => {
      const u = Yl.filter((f) => f.key === e).map((f) => f.cb);
      if (u.length === 0) {
        s(n);
        return;
      }
      const l = u.shift();
      u.reduce((f, p) => f.then((g) => p(g, i)), l(n, i))
        .then((f) => s(f))
        .catch((f) => a(f));
    }),
  Hn = (e, n, i) => Yl.filter((s) => s.key === e).map((s) => s.cb(n, i)),
  jy = (e, n) => Yl.push({ key: e, cb: n }),
  eA = (e) => Object.assign(lr, e),
  gs = () => ({ ...lr }),
  tA = (e) => {
    we(e, (n, i) => {
      !lr[n] || (lr[n][0] = Lh(i, lr[n][0], lr[n][1]));
    });
  },
  lr = {
    id: [null, x.STRING],
    name: ["filepond", x.STRING],
    disabled: [!1, x.BOOLEAN],
    className: [null, x.STRING],
    required: [!1, x.BOOLEAN],
    captureMethod: [null, x.STRING],
    allowSyncAcceptAttribute: [!0, x.BOOLEAN],
    allowDrop: [!0, x.BOOLEAN],
    allowBrowse: [!0, x.BOOLEAN],
    allowPaste: [!0, x.BOOLEAN],
    allowMultiple: [!1, x.BOOLEAN],
    allowReplace: [!0, x.BOOLEAN],
    allowRevert: [!0, x.BOOLEAN],
    allowRemove: [!0, x.BOOLEAN],
    allowProcess: [!0, x.BOOLEAN],
    allowReorder: [!1, x.BOOLEAN],
    allowDirectoriesOnly: [!1, x.BOOLEAN],
    storeAsFile: [!1, x.BOOLEAN],
    forceRevert: [!1, x.BOOLEAN],
    maxFiles: [null, x.INT],
    checkValidity: [!1, x.BOOLEAN],
    itemInsertLocationFreedom: [!0, x.BOOLEAN],
    itemInsertLocation: ["before", x.STRING],
    itemInsertInterval: [75, x.INT],
    dropOnPage: [!1, x.BOOLEAN],
    dropOnElement: [!0, x.BOOLEAN],
    dropValidation: [!1, x.BOOLEAN],
    ignoredFiles: [[".ds_store", "thumbs.db", "desktop.ini"], x.ARRAY],
    instantUpload: [!0, x.BOOLEAN],
    maxParallelUploads: [2, x.INT],
    allowMinimumUploadDuration: [!0, x.BOOLEAN],
    chunkUploads: [!1, x.BOOLEAN],
    chunkForce: [!1, x.BOOLEAN],
    chunkSize: [5e6, x.INT],
    chunkRetryDelays: [[500, 1e3, 3e3], x.ARRAY],
    server: [null, x.SERVER_API],
    fileSizeBase: [1e3, x.INT],
    labelFileSizeBytes: ["bytes", x.STRING],
    labelFileSizeKilobytes: ["KB", x.STRING],
    labelFileSizeMegabytes: ["MB", x.STRING],
    labelFileSizeGigabytes: ["GB", x.STRING],
    labelDecimalSeparator: [xh(), x.STRING],
    labelThousandsSeparator: [Jy(), x.STRING],
    labelIdle: [
      'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
      x.STRING,
    ],
    labelInvalidField: ["Field contains invalid files", x.STRING],
    labelFileWaitingForSize: ["Waiting for size", x.STRING],
    labelFileSizeNotAvailable: ["Size not available", x.STRING],
    labelFileCountSingular: ["file in list", x.STRING],
    labelFileCountPlural: ["files in list", x.STRING],
    labelFileLoading: ["Loading", x.STRING],
    labelFileAdded: ["Added", x.STRING],
    labelFileLoadError: ["Error during load", x.STRING],
    labelFileRemoved: ["Removed", x.STRING],
    labelFileRemoveError: ["Error during remove", x.STRING],
    labelFileProcessing: ["Uploading", x.STRING],
    labelFileProcessingComplete: ["Upload complete", x.STRING],
    labelFileProcessingAborted: ["Upload cancelled", x.STRING],
    labelFileProcessingError: ["Error during upload", x.STRING],
    labelFileProcessingRevertError: ["Error during revert", x.STRING],
    labelTapToCancel: ["tap to cancel", x.STRING],
    labelTapToRetry: ["tap to retry", x.STRING],
    labelTapToUndo: ["tap to undo", x.STRING],
    labelButtonRemoveItem: ["Remove", x.STRING],
    labelButtonAbortItemLoad: ["Abort", x.STRING],
    labelButtonRetryItemLoad: ["Retry", x.STRING],
    labelButtonAbortItemProcessing: ["Cancel", x.STRING],
    labelButtonUndoItemProcessing: ["Undo", x.STRING],
    labelButtonRetryItemProcessing: ["Retry", x.STRING],
    labelButtonProcessItem: ["Upload", x.STRING],
    iconRemove: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',
      x.STRING,
    ],
    iconProcess: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',
      x.STRING,
    ],
    iconRetry: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',
      x.STRING,
    ],
    iconUndo: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',
      x.STRING,
    ],
    iconDone: [
      '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',
      x.STRING,
    ],
    oninit: [null, x.FUNCTION],
    onwarning: [null, x.FUNCTION],
    onerror: [null, x.FUNCTION],
    onactivatefile: [null, x.FUNCTION],
    oninitfile: [null, x.FUNCTION],
    onaddfilestart: [null, x.FUNCTION],
    onaddfileprogress: [null, x.FUNCTION],
    onaddfile: [null, x.FUNCTION],
    onprocessfilestart: [null, x.FUNCTION],
    onprocessfileprogress: [null, x.FUNCTION],
    onprocessfileabort: [null, x.FUNCTION],
    onprocessfilerevert: [null, x.FUNCTION],
    onprocessfile: [null, x.FUNCTION],
    onprocessfiles: [null, x.FUNCTION],
    onremovefile: [null, x.FUNCTION],
    onpreparefile: [null, x.FUNCTION],
    onupdatefiles: [null, x.FUNCTION],
    onreorderfiles: [null, x.FUNCTION],
    beforeDropFile: [null, x.FUNCTION],
    beforeAddFile: [null, x.FUNCTION],
    beforeRemoveFile: [null, x.FUNCTION],
    beforePrepareFile: [null, x.FUNCTION],
    stylePanelLayout: [null, x.STRING],
    stylePanelAspectRatio: [null, x.STRING],
    styleItemPanelAspectRatio: [null, x.STRING],
    styleButtonRemoveItemPosition: ["left", x.STRING],
    styleButtonProcessItemPosition: ["right", x.STRING],
    styleLoadIndicatorPosition: ["right", x.STRING],
    styleProgressIndicatorPosition: ["right", x.STRING],
    styleButtonRemoveItemAlign: [!1, x.BOOLEAN],
    files: [[], x.ARRAY],
    credits: [["https://pqina.nl/", "Powered by PQINA"], x.ARRAY],
  },
  xn = (e, n) =>
    rn(n)
      ? e[0] || null
      : Rr(n)
      ? e[n] || null
      : (typeof n == "object" && (n = n.id), e.find((i) => i.id === n) || null),
  Nh = (e) => {
    if (rn(e)) return e;
    if (/:/.test(e)) {
      const n = e.split(":");
      return n[1] / n[0];
    }
    return parseFloat(e);
  },
  Bt = (e) => e.filter((n) => !n.archived),
  Fh = { EMPTY: 0, IDLE: 1, ERROR: 2, BUSY: 3, READY: 4 };
let ji = null;
const nA = () => {
    if (ji === null)
      try {
        const e = new DataTransfer();
        e.items.add(new File(["hello world"], "This_Works.txt"));
        const n = document.createElement("input");
        n.setAttribute("type", "file"),
          (n.files = e.files),
          (ji = n.files.length === 1);
      } catch {
        ji = !1;
      }
    return ji;
  },
  rA = [ne.LOAD_ERROR, ne.PROCESSING_ERROR, ne.PROCESSING_REVERT_ERROR],
  iA = [ne.LOADING, ne.PROCESSING, ne.PROCESSING_QUEUED, ne.INIT],
  sA = [ne.PROCESSING_COMPLETE],
  oA = (e) => rA.includes(e.status),
  aA = (e) => iA.includes(e.status),
  lA = (e) => sA.includes(e.status),
  Id = (e) =>
    qe(e.options.server) &&
    (qe(e.options.server.process) || Mn(e.options.server.process)),
  uA = (e) => ({
    GET_STATUS: () => {
      const n = Bt(e.items),
        { EMPTY: i, ERROR: s, BUSY: a, IDLE: u, READY: l } = Fh;
      return n.length === 0
        ? i
        : n.some(oA)
        ? s
        : n.some(aA)
        ? a
        : n.some(lA)
        ? l
        : u;
    },
    GET_ITEM: (n) => xn(e.items, n),
    GET_ACTIVE_ITEM: (n) => xn(Bt(e.items), n),
    GET_ACTIVE_ITEMS: () => Bt(e.items),
    GET_ITEMS: () => e.items,
    GET_ITEM_NAME: (n) => {
      const i = xn(e.items, n);
      return i ? i.filename : null;
    },
    GET_ITEM_SIZE: (n) => {
      const i = xn(e.items, n);
      return i ? i.fileSize : null;
    },
    GET_STYLES: () =>
      Object.keys(e.options)
        .filter((n) => /^style/.test(n))
        .map((n) => ({ name: n, value: e.options[n] })),
    GET_PANEL_ASPECT_RATIO: () =>
      /circle/.test(e.options.stylePanelLayout)
        ? 1
        : Nh(e.options.stylePanelAspectRatio),
    GET_ITEM_PANEL_ASPECT_RATIO: () => e.options.styleItemPanelAspectRatio,
    GET_ITEMS_BY_STATUS: (n) => Bt(e.items).filter((i) => i.status === n),
    GET_TOTAL_ITEMS: () => Bt(e.items).length,
    SHOULD_UPDATE_FILE_INPUT: () => e.options.storeAsFile && nA() && !Id(e),
    IS_ASYNC: () => Id(e),
    GET_FILE_SIZE_LABELS: (n) => ({
      labelBytes: n("GET_LABEL_FILE_SIZE_BYTES") || void 0,
      labelKilobytes: n("GET_LABEL_FILE_SIZE_KILOBYTES") || void 0,
      labelMegabytes: n("GET_LABEL_FILE_SIZE_MEGABYTES") || void 0,
      labelGigabytes: n("GET_LABEL_FILE_SIZE_GIGABYTES") || void 0,
    }),
  }),
  cA = (e) => {
    const n = Bt(e.items).length;
    if (!e.options.allowMultiple) return n === 0;
    const i = e.options.maxFiles;
    return i === null || n < i;
  },
  Bh = (e, n, i) => Math.max(Math.min(i, e), n),
  fA = (e, n, i) => e.splice(n, 0, i),
  dA = (e, n, i) =>
    rn(n)
      ? null
      : typeof i > "u"
      ? (e.push(n), n)
      : ((i = Bh(i, 0, e.length)), fA(e, i, n), n),
  rl = (e) =>
    /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(
      e
    ),
  oi = (e) => e.split("/").pop().split("?").shift(),
  qs = (e) => e.split(".").pop(),
  pA = (e) => {
    if (typeof e != "string") return "";
    const n = e.split("/").pop();
    return /svg/.test(n)
      ? "svg"
      : /zip|compressed/.test(n)
      ? "zip"
      : /plain/.test(n)
      ? "txt"
      : /msword/.test(n)
      ? "doc"
      : /[a-z]+/.test(n)
      ? n === "jpeg"
        ? "jpg"
        : n
      : "";
  },
  Xr = (e, n = "") => (n + e).slice(-n.length),
  Gh = (e = new Date()) =>
    `${e.getFullYear()}-${Xr(e.getMonth() + 1, "00")}-${Xr(
      e.getDate(),
      "00"
    )}_${Xr(e.getHours(), "00")}-${Xr(e.getMinutes(), "00")}-${Xr(
      e.getSeconds(),
      "00"
    )}`,
  Er = (e, n, i = null, s = null) => {
    const a =
      typeof i == "string" ? e.slice(0, e.size, i) : e.slice(0, e.size, e.type);
    return (
      (a.lastModifiedDate = new Date()),
      e._relativePath && (a._relativePath = e._relativePath),
      tt(n) || (n = Gh()),
      n && s === null && qs(n)
        ? (a.name = n)
        : ((s = s || pA(a.type)), (a.name = n + (s ? "." + s : ""))),
      a
    );
  },
  hA = () =>
    (window.BlobBuilder =
      window.BlobBuilder ||
      window.WebKitBlobBuilder ||
      window.MozBlobBuilder ||
      window.MSBlobBuilder),
  Uh = (e, n) => {
    const i = hA();
    if (i) {
      const s = new i();
      return s.append(e), s.getBlob(n);
    }
    return new Blob([e], { type: n });
  },
  _A = (e, n) => {
    const i = new ArrayBuffer(e.length),
      s = new Uint8Array(i);
    for (let a = 0; a < e.length; a++) s[a] = e.charCodeAt(a);
    return Uh(i, n);
  },
  $h = (e) => (/^data:(.+);/.exec(e) || [])[1] || null,
  gA = (e) => e.split(",")[1].replace(/\s/g, ""),
  EA = (e) => atob(gA(e)),
  mA = (e) => {
    const n = $h(e),
      i = EA(e);
    return _A(i, n);
  },
  IA = (e, n, i) => Er(mA(e), n, null, i),
  TA = (e) => {
    if (!/^content-disposition:/i.test(e)) return null;
    const n = e
      .split(/filename=|filename\*=.+''/)
      .splice(1)
      .map((i) => i.trim().replace(/^["']|[;"']{0,2}$/g, ""))
      .filter((i) => i.length);
    return n.length ? decodeURI(n[n.length - 1]) : null;
  },
  vA = (e) => {
    if (/content-length:/i.test(e)) {
      const n = e.match(/[0-9]+/)[0];
      return n ? parseInt(n, 10) : null;
    }
    return null;
  },
  RA = (e) =>
    (/x-content-transfer-id:/i.test(e) && (e.split(":")[1] || "").trim()) ||
    null,
  zl = (e) => {
    const n = { source: null, name: null, size: null },
      i = e.split(`
`);
    for (let s of i) {
      const a = TA(s);
      if (a) {
        n.name = a;
        continue;
      }
      const u = vA(s);
      if (u) {
        n.size = u;
        continue;
      }
      const l = RA(s);
      if (l) {
        n.source = l;
        continue;
      }
    }
    return n;
  },
  OA = (e) => {
    const n = {
        source: null,
        complete: !1,
        progress: 0,
        size: null,
        timestamp: null,
        duration: 0,
        request: null,
      },
      i = () => n.progress,
      s = () => {
        n.request && n.request.abort && n.request.abort();
      },
      a = () => {
        const f = n.source;
        l.fire("init", f),
          f instanceof File
            ? l.fire("load", f)
            : f instanceof Blob
            ? l.fire("load", Er(f, f.name))
            : rl(f)
            ? l.fire("load", IA(f))
            : u(f);
      },
      u = (f) => {
        if (!e) {
          l.fire("error", { type: "error", body: "Can't load URL", code: 400 });
          return;
        }
        (n.timestamp = Date.now()),
          (n.request = e(
            f,
            (p) => {
              (n.duration = Date.now() - n.timestamp),
                (n.complete = !0),
                p instanceof Blob && (p = Er(p, p.name || oi(f))),
                l.fire("load", p instanceof Blob ? p : p ? p.body : null);
            },
            (p) => {
              l.fire(
                "error",
                typeof p == "string" ? { type: "error", code: 0, body: p } : p
              );
            },
            (p, g, E) => {
              if (
                (E && (n.size = E), (n.duration = Date.now() - n.timestamp), !p)
              ) {
                n.progress = null;
                return;
              }
              (n.progress = g / E), l.fire("progress", n.progress);
            },
            () => {
              l.fire("abort");
            },
            (p) => {
              const g = zl(typeof p == "string" ? p : p.headers);
              l.fire("meta", {
                size: n.size || g.size,
                filename: g.name,
                source: g.source,
              });
            }
          ));
      },
      l = {
        ...$s(),
        setSource: (f) => (n.source = f),
        getProgress: i,
        abort: s,
        load: a,
      };
    return l;
  },
  Td = (e) => /GET|HEAD/.test(e),
  Gn = (e, n, i) => {
    const s = {
      onheaders: () => {},
      onprogress: () => {},
      onload: () => {},
      ontimeout: () => {},
      onerror: () => {},
      onabort: () => {},
      abort: () => {
        (a = !0), l.abort();
      },
    };
    let a = !1,
      u = !1;
    (i = { method: "POST", headers: {}, withCredentials: !1, ...i }),
      (n = encodeURI(n)),
      Td(i.method) &&
        e &&
        (n = `${n}${encodeURIComponent(
          typeof e == "string" ? e : JSON.stringify(e)
        )}`);
    const l = new XMLHttpRequest(),
      f = Td(i.method) ? l : l.upload;
    return (
      (f.onprogress = (p) => {
        a || s.onprogress(p.lengthComputable, p.loaded, p.total);
      }),
      (l.onreadystatechange = () => {
        l.readyState < 2 ||
          (l.readyState === 4 && l.status === 0) ||
          u ||
          ((u = !0), s.onheaders(l));
      }),
      (l.onload = () => {
        l.status >= 200 && l.status < 300 ? s.onload(l) : s.onerror(l);
      }),
      (l.onerror = () => s.onerror(l)),
      (l.onabort = () => {
        (a = !0), s.onabort();
      }),
      (l.ontimeout = () => s.ontimeout(l)),
      l.open(i.method, n, !0),
      Rr(i.timeout) && (l.timeout = i.timeout),
      Object.keys(i.headers).forEach((p) => {
        const g = unescape(encodeURIComponent(i.headers[p]));
        l.setRequestHeader(p, g);
      }),
      i.responseType && (l.responseType = i.responseType),
      i.withCredentials && (l.withCredentials = !0),
      l.send(e),
      s
    );
  },
  Ce = (e, n, i, s) => ({ type: e, code: n, body: i, headers: s }),
  Un = (e) => (n) => {
    e(Ce("error", 0, "Timeout", n.getAllResponseHeaders()));
  },
  vd = (e) => /\?/.test(e),
  ei = (...e) => {
    let n = "";
    return (
      e.forEach((i) => {
        n += vd(n) && vd(i) ? i.replace(/\?/, "&") : i;
      }),
      n
    );
  },
  Pa = (e = "", n) => {
    if (typeof n == "function") return n;
    if (!n || !tt(n.url)) return null;
    const i = n.onload || ((a) => a),
      s = n.onerror || ((a) => null);
    return (a, u, l, f, p, g) => {
      const E = Gn(a, ei(e, n.url), { ...n, responseType: "blob" });
      return (
        (E.onload = (R) => {
          const T = R.getAllResponseHeaders(),
            A = zl(T).name || oi(a);
          u(
            Ce(
              "load",
              R.status,
              n.method === "HEAD" ? null : Er(i(R.response), A),
              T
            )
          );
        }),
        (E.onerror = (R) => {
          l(
            Ce(
              "error",
              R.status,
              s(R.response) || R.statusText,
              R.getAllResponseHeaders()
            )
          );
        }),
        (E.onheaders = (R) => {
          g(Ce("headers", R.status, null, R.getAllResponseHeaders()));
        }),
        (E.ontimeout = Un(l)),
        (E.onprogress = f),
        (E.onabort = p),
        E
      );
    };
  },
  At = { QUEUED: 0, COMPLETE: 1, PROCESSING: 2, ERROR: 3, WAITING: 4 },
  SA = (e, n, i, s, a, u, l, f, p, g, E) => {
    const R = [],
      {
        chunkTransferId: T,
        chunkServer: A,
        chunkSize: S,
        chunkRetryDelays: L,
      } = E,
      D = { serverId: T, aborted: !1 },
      P = n.ondata || ((B) => B),
      G =
        n.onload ||
        ((B, fe) =>
          fe === "HEAD" ? B.getResponseHeader("Upload-Offset") : B.response),
      $ = n.onerror || ((B) => null),
      H = (B) => {
        const fe = new FormData();
        qe(a) && fe.append(i, JSON.stringify(a));
        const N =
            typeof n.headers == "function"
              ? n.headers(s, a)
              : { ...n.headers, "Upload-Length": s.size },
          U = { ...n, headers: N },
          Y = Gn(P(fe), ei(e, n.url), U);
        (Y.onload = (k) => B(G(k, U.method))),
          (Y.onerror = (k) =>
            l(
              Ce(
                "error",
                k.status,
                $(k.response) || k.statusText,
                k.getAllResponseHeaders()
              )
            )),
          (Y.ontimeout = Un(l));
      },
      M = (B) => {
        const fe = ei(e, A.url, D.serverId),
          U = {
            headers:
              typeof n.headers == "function"
                ? n.headers(D.serverId)
                : { ...n.headers },
            method: "HEAD",
          },
          Y = Gn(null, fe, U);
        (Y.onload = (k) => B(G(k, U.method))),
          (Y.onerror = (k) =>
            l(
              Ce(
                "error",
                k.status,
                $(k.response) || k.statusText,
                k.getAllResponseHeaders()
              )
            )),
          (Y.ontimeout = Un(l));
      },
      X = Math.floor(s.size / S);
    for (let B = 0; B <= X; B++) {
      const fe = B * S,
        N = s.slice(fe, fe + S, "application/offset+octet-stream");
      R[B] = {
        index: B,
        size: N.size,
        offset: fe,
        data: N,
        file: s,
        progress: 0,
        retries: [...L],
        status: At.QUEUED,
        error: null,
        request: null,
        timeout: null,
      };
    }
    const le = () => u(D.serverId),
      W = (B) => B.status === At.QUEUED || B.status === At.ERROR,
      Q = (B) => {
        if (D.aborted) return;
        if (((B = B || R.find(W)), !B)) {
          R.every((he) => he.status === At.COMPLETE) && le();
          return;
        }
        (B.status = At.PROCESSING), (B.progress = null);
        const fe = A.ondata || ((he) => he),
          N = A.onerror || ((he) => null),
          U = ei(e, A.url, D.serverId),
          Y =
            typeof A.headers == "function"
              ? A.headers(B)
              : {
                  ...A.headers,
                  "Content-Type": "application/offset+octet-stream",
                  "Upload-Offset": B.offset,
                  "Upload-Length": s.size,
                  "Upload-Name": s.name,
                },
          k = (B.request = Gn(fe(B.data), U, { ...A, headers: Y }));
        (k.onload = () => {
          (B.status = At.COMPLETE), (B.request = null), Z();
        }),
          (k.onprogress = (he, _e, Or) => {
            (B.progress = he ? _e : null), K();
          }),
          (k.onerror = (he) => {
            (B.status = At.ERROR),
              (B.request = null),
              (B.error = N(he.response) || he.statusText),
              ue(B) ||
                l(
                  Ce(
                    "error",
                    he.status,
                    N(he.response) || he.statusText,
                    he.getAllResponseHeaders()
                  )
                );
          }),
          (k.ontimeout = (he) => {
            (B.status = At.ERROR), (B.request = null), ue(B) || Un(l)(he);
          }),
          (k.onabort = () => {
            (B.status = At.QUEUED), (B.request = null), p();
          });
      },
      ue = (B) =>
        B.retries.length === 0
          ? !1
          : ((B.status = At.WAITING),
            clearTimeout(B.timeout),
            (B.timeout = setTimeout(() => {
              Q(B);
            }, B.retries.shift())),
            !0),
      K = () => {
        const B = R.reduce(
          (N, U) => (N === null || U.progress === null ? null : N + U.progress),
          0
        );
        if (B === null) return f(!1, 0, 0);
        const fe = R.reduce((N, U) => N + U.size, 0);
        f(!0, B, fe);
      },
      Z = () => {
        R.filter((fe) => fe.status === At.PROCESSING).length >= 1 || Q();
      },
      Te = () => {
        R.forEach((B) => {
          clearTimeout(B.timeout), B.request && B.request.abort();
        });
      };
    return (
      D.serverId
        ? M((B) => {
            D.aborted ||
              (R.filter((fe) => fe.offset < B).forEach((fe) => {
                (fe.status = At.COMPLETE), (fe.progress = fe.size);
              }),
              Z());
          })
        : H((B) => {
            D.aborted || (g(B), (D.serverId = B), Z());
          }),
      {
        abort: () => {
          (D.aborted = !0), Te();
        },
      }
    );
  },
  yA = (e, n, i, s) => (a, u, l, f, p, g, E) => {
    if (!a) return;
    const R = s.chunkUploads,
      T = R && a.size > s.chunkSize,
      A = R && (T || s.chunkForce);
    if (a instanceof Blob && A) return SA(e, n, i, a, u, l, f, p, g, E, s);
    const S = n.ondata || ((M) => M),
      L = n.onload || ((M) => M),
      D = n.onerror || ((M) => null),
      P =
        typeof n.headers == "function"
          ? n.headers(a, u) || {}
          : { ...n.headers },
      G = { ...n, headers: P };
    var $ = new FormData();
    qe(u) && $.append(i, JSON.stringify(u)),
      (a instanceof Blob ? [{ name: null, file: a }] : a).forEach((M) => {
        $.append(
          i,
          M.file,
          M.name === null ? M.file.name : `${M.name}${M.file.name}`
        );
      });
    const H = Gn(S($), ei(e, n.url), G);
    return (
      (H.onload = (M) => {
        l(Ce("load", M.status, L(M.response), M.getAllResponseHeaders()));
      }),
      (H.onerror = (M) => {
        f(
          Ce(
            "error",
            M.status,
            D(M.response) || M.statusText,
            M.getAllResponseHeaders()
          )
        );
      }),
      (H.ontimeout = Un(f)),
      (H.onprogress = p),
      (H.onabort = g),
      H
    );
  },
  AA = (e = "", n, i, s) =>
    typeof n == "function"
      ? (...a) => n(i, ...a, s)
      : !n || !tt(n.url)
      ? null
      : yA(e, n, i, s),
  Kr = (e = "", n) => {
    if (typeof n == "function") return n;
    if (!n || !tt(n.url)) return (a, u) => u();
    const i = n.onload || ((a) => a),
      s = n.onerror || ((a) => null);
    return (a, u, l) => {
      const f = Gn(a, e + n.url, n);
      return (
        (f.onload = (p) => {
          u(Ce("load", p.status, i(p.response), p.getAllResponseHeaders()));
        }),
        (f.onerror = (p) => {
          l(
            Ce(
              "error",
              p.status,
              s(p.response) || p.statusText,
              p.getAllResponseHeaders()
            )
          );
        }),
        (f.ontimeout = Un(l)),
        f
      );
    };
  },
  qh = (e = 0, n = 1) => e + Math.random() * (n - e),
  wA = (e, n = 1e3, i = 0, s = 25, a = 250) => {
    let u = null;
    const l = Date.now(),
      f = () => {
        let p = Date.now() - l,
          g = qh(s, a);
        p + g > n && (g = p + g - n);
        let E = p / n;
        if (E >= 1 || document.hidden) {
          e(1);
          return;
        }
        e(E), (u = setTimeout(f, g));
      };
    return (
      n > 0 && f(),
      {
        clear: () => {
          clearTimeout(u);
        },
      }
    );
  },
  DA = (e, n) => {
    const i = {
        complete: !1,
        perceivedProgress: 0,
        perceivedPerformanceUpdater: null,
        progress: null,
        timestamp: null,
        perceivedDuration: 0,
        duration: 0,
        request: null,
        response: null,
      },
      { allowMinimumUploadDuration: s } = n,
      a = (E, R) => {
        const T = () => {
            i.duration === 0 ||
              i.progress === null ||
              g.fire("progress", g.getProgress());
          },
          A = () => {
            (i.complete = !0), g.fire("load-perceived", i.response.body);
          };
        g.fire("start"),
          (i.timestamp = Date.now()),
          (i.perceivedPerformanceUpdater = wA(
            (S) => {
              (i.perceivedProgress = S),
                (i.perceivedDuration = Date.now() - i.timestamp),
                T(),
                i.response && i.perceivedProgress === 1 && !i.complete && A();
            },
            s ? qh(750, 1500) : 0
          )),
          (i.request = e(
            E,
            R,
            (S) => {
              (i.response = qe(S)
                ? S
                : { type: "load", code: 200, body: `${S}`, headers: {} }),
                (i.duration = Date.now() - i.timestamp),
                (i.progress = 1),
                g.fire("load", i.response.body),
                (!s || (s && i.perceivedProgress === 1)) && A();
            },
            (S) => {
              i.perceivedPerformanceUpdater.clear(),
                g.fire(
                  "error",
                  qe(S) ? S : { type: "error", code: 0, body: `${S}` }
                );
            },
            (S, L, D) => {
              (i.duration = Date.now() - i.timestamp),
                (i.progress = S ? L / D : null),
                T();
            },
            () => {
              i.perceivedPerformanceUpdater.clear(),
                g.fire("abort", i.response ? i.response.body : null);
            },
            (S) => {
              g.fire("transfer", S);
            }
          ));
      },
      u = () => {
        !i.request ||
          (i.perceivedPerformanceUpdater.clear(),
          i.request.abort && i.request.abort(),
          (i.complete = !0));
      },
      l = () => {
        u(),
          (i.complete = !1),
          (i.perceivedProgress = 0),
          (i.progress = 0),
          (i.timestamp = null),
          (i.perceivedDuration = 0),
          (i.duration = 0),
          (i.request = null),
          (i.response = null);
      },
      f = s
        ? () => (i.progress ? Math.min(i.progress, i.perceivedProgress) : null)
        : () => i.progress || null,
      p = s
        ? () => Math.min(i.duration, i.perceivedDuration)
        : () => i.duration,
      g = {
        ...$s(),
        process: a,
        abort: u,
        getProgress: f,
        getDuration: p,
        reset: l,
      };
    return g;
  },
  Wh = (e) => e.substring(0, e.lastIndexOf(".")) || e,
  bA = (e) => {
    let n = [e.name, e.size, e.type];
    return (
      e instanceof Blob || rl(e)
        ? (n[0] = e.name || Gh())
        : rl(e)
        ? ((n[1] = e.length), (n[2] = $h(e)))
        : tt(e) &&
          ((n[0] = oi(e)), (n[1] = 0), (n[2] = "application/octet-stream")),
      { name: n[0], size: n[1], type: n[2] }
    );
  },
  mr = (e) => !!(e instanceof File || (e instanceof Blob && e.name)),
  Hh = (e) => {
    if (!qe(e)) return e;
    const n = Bs(e) ? [] : {};
    for (const i in e) {
      if (!e.hasOwnProperty(i)) continue;
      const s = e[i];
      n[i] = s && qe(s) ? Hh(s) : s;
    }
    return n;
  },
  CA = (e = null, n = null, i = null) => {
    const s = Hl(),
      a = {
        archived: !1,
        frozen: !1,
        released: !1,
        source: null,
        file: i,
        serverFileReference: n,
        transferId: null,
        processingAborted: !1,
        status: n ? ne.PROCESSING_COMPLETE : ne.INIT,
        activeLoader: null,
        activeProcessor: null,
      };
    let u = null;
    const l = {},
      f = (W) => (a.status = W),
      p = (W, ...Q) => {
        a.released || a.frozen || X.fire(W, ...Q);
      },
      g = () => qs(a.file.name),
      E = () => a.file.type,
      R = () => a.file.size,
      T = () => a.file,
      A = (W, Q, ue) => {
        if (((a.source = W), X.fireSync("init"), a.file)) {
          X.fireSync("load-skip");
          return;
        }
        (a.file = bA(W)),
          Q.on("init", () => {
            p("load-init");
          }),
          Q.on("meta", (K) => {
            (a.file.size = K.size),
              (a.file.filename = K.filename),
              K.source &&
                ((e = Be.LIMBO),
                (a.serverFileReference = K.source),
                (a.status = ne.PROCESSING_COMPLETE)),
              p("load-meta");
          }),
          Q.on("progress", (K) => {
            f(ne.LOADING), p("load-progress", K);
          }),
          Q.on("error", (K) => {
            f(ne.LOAD_ERROR), p("load-request-error", K);
          }),
          Q.on("abort", () => {
            f(ne.INIT), p("load-abort");
          }),
          Q.on("load", (K) => {
            a.activeLoader = null;
            const Z = (B) => {
                (a.file = mr(B) ? B : a.file),
                  e === Be.LIMBO && a.serverFileReference
                    ? f(ne.PROCESSING_COMPLETE)
                    : f(ne.IDLE),
                  p("load");
              },
              Te = (B) => {
                (a.file = K),
                  p("load-meta"),
                  f(ne.LOAD_ERROR),
                  p("load-file-error", B);
              };
            if (a.serverFileReference) {
              Z(K);
              return;
            }
            ue(K, Z, Te);
          }),
          Q.setSource(W),
          (a.activeLoader = Q),
          Q.load();
      },
      S = () => {
        !a.activeLoader || a.activeLoader.load();
      },
      L = () => {
        if (a.activeLoader) {
          a.activeLoader.abort();
          return;
        }
        f(ne.INIT), p("load-abort");
      },
      D = (W, Q) => {
        if (a.processingAborted) {
          a.processingAborted = !1;
          return;
        }
        if ((f(ne.PROCESSING), (u = null), !(a.file instanceof Blob))) {
          X.on("load", () => {
            D(W, Q);
          });
          return;
        }
        W.on("load", (Z) => {
          (a.transferId = null), (a.serverFileReference = Z);
        }),
          W.on("transfer", (Z) => {
            a.transferId = Z;
          }),
          W.on("load-perceived", (Z) => {
            (a.activeProcessor = null),
              (a.transferId = null),
              (a.serverFileReference = Z),
              f(ne.PROCESSING_COMPLETE),
              p("process-complete", Z);
          }),
          W.on("start", () => {
            p("process-start");
          }),
          W.on("error", (Z) => {
            (a.activeProcessor = null),
              f(ne.PROCESSING_ERROR),
              p("process-error", Z);
          }),
          W.on("abort", (Z) => {
            (a.activeProcessor = null),
              (a.serverFileReference = Z),
              f(ne.IDLE),
              p("process-abort"),
              u && u();
          }),
          W.on("progress", (Z) => {
            p("process-progress", Z);
          });
        const ue = (Z) => {
            a.archived || W.process(Z, { ...l });
          },
          K = console.error;
        Q(a.file, ue, K), (a.activeProcessor = W);
      },
      P = () => {
        (a.processingAborted = !1), f(ne.PROCESSING_QUEUED);
      },
      G = () =>
        new Promise((W) => {
          if (!a.activeProcessor) {
            (a.processingAborted = !0), f(ne.IDLE), p("process-abort"), W();
            return;
          }
          (u = () => {
            W();
          }),
            a.activeProcessor.abort();
        }),
      $ = (W, Q) =>
        new Promise((ue, K) => {
          const Z =
            a.serverFileReference !== null
              ? a.serverFileReference
              : a.transferId;
          if (Z === null) {
            ue();
            return;
          }
          W(
            Z,
            () => {
              (a.serverFileReference = null), (a.transferId = null), ue();
            },
            (Te) => {
              if (!Q) {
                ue();
                return;
              }
              f(ne.PROCESSING_REVERT_ERROR), p("process-revert-error"), K(Te);
            }
          ),
            f(ne.IDLE),
            p("process-revert");
        }),
      H = (W, Q, ue) => {
        const K = W.split("."),
          Z = K[0],
          Te = K.pop();
        let B = l;
        K.forEach((fe) => (B = B[fe])),
          JSON.stringify(B[Te]) !== JSON.stringify(Q) &&
            ((B[Te] = Q),
            p("metadata-update", { key: Z, value: l[Z], silent: ue }));
      },
      X = {
        id: { get: () => s },
        origin: { get: () => e, set: (W) => (e = W) },
        serverId: { get: () => a.serverFileReference },
        transferId: { get: () => a.transferId },
        status: { get: () => a.status },
        filename: { get: () => a.file.name },
        filenameWithoutExtension: { get: () => Wh(a.file.name) },
        fileExtension: { get: g },
        fileType: { get: E },
        fileSize: { get: R },
        file: { get: T },
        relativePath: { get: () => a.file._relativePath },
        source: { get: () => a.source },
        getMetadata: (W) => Hh(W ? l[W] : l),
        setMetadata: (W, Q, ue) => {
          if (qe(W)) {
            const K = W;
            return (
              Object.keys(K).forEach((Z) => {
                H(Z, K[Z], Q);
              }),
              W
            );
          }
          return H(W, Q, ue), Q;
        },
        extend: (W, Q) => (le[W] = Q),
        abortLoad: L,
        retryLoad: S,
        requestProcessing: P,
        abortProcessing: G,
        load: A,
        process: D,
        revert: $,
        ...$s(),
        freeze: () => (a.frozen = !0),
        release: () => (a.released = !0),
        released: { get: () => a.released },
        archive: () => (a.archived = !0),
        archived: { get: () => a.archived },
      },
      le = In(X);
    return le;
  },
  LA = (e, n) => (rn(n) ? 0 : tt(n) ? e.findIndex((i) => i.id === n) : -1),
  Rd = (e, n) => {
    const i = LA(e, n);
    if (!(i < 0)) return e[i] || null;
  },
  Od = (e, n, i, s, a, u) => {
    const l = Gn(null, e, { method: "GET", responseType: "blob" });
    return (
      (l.onload = (f) => {
        const p = f.getAllResponseHeaders(),
          g = zl(p).name || oi(e);
        n(Ce("load", f.status, Er(f.response, g), p));
      }),
      (l.onerror = (f) => {
        i(Ce("error", f.status, f.statusText, f.getAllResponseHeaders()));
      }),
      (l.onheaders = (f) => {
        u(Ce("headers", f.status, null, f.getAllResponseHeaders()));
      }),
      (l.ontimeout = Un(i)),
      (l.onprogress = s),
      (l.onabort = a),
      l
    );
  },
  Sd = (e) => (
    e.indexOf("//") === 0 && (e = location.protocol + e),
    e
      .toLowerCase()
      .replace("blob:", "")
      .replace(/([a-z])?:\/\//, "$1")
      .split("/")[0]
  ),
  PA = (e) =>
    (e.indexOf(":") > -1 || e.indexOf("//") > -1) &&
    Sd(location.href) !== Sd(e),
  es =
    (e) =>
    (...n) =>
      Mn(e) ? e(...n) : e,
  MA = (e) => !mr(e.file),
  Ma = (e, n) => {
    clearTimeout(n.listUpdateTimeout),
      (n.listUpdateTimeout = setTimeout(() => {
        e("DID_UPDATE_ITEMS", { items: Bt(n.items) });
      }, 0));
  },
  yd = (e, ...n) =>
    new Promise((i) => {
      if (!e) return i(!0);
      const s = e(...n);
      if (s == null) return i(!0);
      if (typeof s == "boolean") return i(s);
      typeof s.then == "function" && s.then(i);
    }),
  xa = (e, n) => {
    e.items.sort((i, s) => n(at(i), at(s)));
  },
  wt =
    (e, n) =>
    ({ query: i, success: s = () => {}, failure: a = () => {}, ...u } = {}) => {
      const l = xn(e.items, i);
      if (!l) {
        a({ error: Ce("error", 0, "Item not found"), file: null });
        return;
      }
      n(l, s, a, u || {});
    },
  xA = (e, n, i) => ({
    ABORT_ALL: () => {
      Bt(i.items).forEach((s) => {
        s.freeze(), s.abortLoad(), s.abortProcessing();
      });
    },
    DID_SET_FILES: ({ value: s = [] }) => {
      const a = s.map((l) => ({
        source: l.source ? l.source : l,
        options: l.options,
      }));
      let u = Bt(i.items);
      u.forEach((l) => {
        a.find((f) => f.source === l.source || f.source === l.file) ||
          e("REMOVE_ITEM", { query: l, remove: !1 });
      }),
        (u = Bt(i.items)),
        a.forEach((l, f) => {
          u.find((p) => p.source === l.source || p.file === l.source) ||
            e("ADD_ITEM", { ...l, interactionMethod: Dt.NONE, index: f });
        });
    },
    DID_UPDATE_ITEM_METADATA: ({ id: s, action: a, change: u }) => {
      u.silent ||
        (clearTimeout(i.itemUpdateTimeout),
        (i.itemUpdateTimeout = setTimeout(() => {
          const l = Rd(i.items, s);
          if (!n("IS_ASYNC")) {
            Ft("SHOULD_PREPARE_OUTPUT", !1, {
              item: l,
              query: n,
              action: a,
              change: u,
            }).then((E) => {
              const R = n("GET_BEFORE_PREPARE_FILE");
              R && (E = R(l, E)),
                E &&
                  e(
                    "REQUEST_PREPARE_OUTPUT",
                    {
                      query: s,
                      item: l,
                      success: (T) => {
                        e("DID_PREPARE_OUTPUT", { id: s, file: T });
                      },
                    },
                    !0
                  );
            });
            return;
          }
          l.origin === Be.LOCAL &&
            e("DID_LOAD_ITEM", {
              id: l.id,
              error: null,
              serverFileReference: l.source,
            });
          const f = () => {
              setTimeout(() => {
                e("REQUEST_ITEM_PROCESSING", { query: s });
              }, 32);
            },
            p = (E) => {
              l.revert(
                Kr(i.options.server.url, i.options.server.revert),
                n("GET_FORCE_REVERT")
              )
                .then(E ? f : () => {})
                .catch(() => {});
            },
            g = (E) => {
              l.abortProcessing().then(E ? f : () => {});
            };
          if (l.status === ne.PROCESSING_COMPLETE)
            return p(i.options.instantUpload);
          if (l.status === ne.PROCESSING) return g(i.options.instantUpload);
          i.options.instantUpload && f();
        }, 0)));
    },
    MOVE_ITEM: ({ query: s, index: a }) => {
      const u = xn(i.items, s);
      if (!u) return;
      const l = i.items.indexOf(u);
      (a = Bh(a, 0, i.items.length - 1)),
        l !== a && i.items.splice(a, 0, i.items.splice(l, 1)[0]);
    },
    SORT: ({ compare: s }) => {
      xa(i, s), e("DID_SORT_ITEMS", { items: n("GET_ACTIVE_ITEMS") });
    },
    ADD_ITEMS: ({
      items: s,
      index: a,
      interactionMethod: u,
      success: l = () => {},
      failure: f = () => {},
    }) => {
      let p = a;
      if (a === -1 || typeof a > "u") {
        const A = n("GET_ITEM_INSERT_LOCATION"),
          S = n("GET_TOTAL_ITEMS");
        p = A === "before" ? 0 : S;
      }
      const g = n("GET_IGNORED_FILES"),
        E = (A) => (mr(A) ? !g.includes(A.name.toLowerCase()) : !rn(A)),
        T = s.filter(E).map(
          (A) =>
            new Promise((S, L) => {
              e("ADD_ITEM", {
                interactionMethod: u,
                source: A.source || A,
                success: S,
                failure: L,
                index: p++,
                options: A.options || {},
              });
            })
        );
      Promise.all(T).then(l).catch(f);
    },
    ADD_ITEM: ({
      source: s,
      index: a = -1,
      interactionMethod: u,
      success: l = () => {},
      failure: f = () => {},
      options: p = {},
    }) => {
      if (rn(s)) {
        f({ error: Ce("error", 0, "No source"), file: null });
        return;
      }
      if (mr(s) && i.options.ignoredFiles.includes(s.name.toLowerCase()))
        return;
      if (!cA(i)) {
        if (
          i.options.allowMultiple ||
          (!i.options.allowMultiple && !i.options.allowReplace)
        ) {
          const G = Ce("warning", 0, "Max files");
          e("DID_THROW_MAX_FILES", { source: s, error: G }),
            f({ error: G, file: null });
          return;
        }
        const P = Bt(i.items)[0];
        if (
          P.status === ne.PROCESSING_COMPLETE ||
          P.status === ne.PROCESSING_REVERT_ERROR
        ) {
          const G = n("GET_FORCE_REVERT");
          if (
            (P.revert(Kr(i.options.server.url, i.options.server.revert), G)
              .then(() => {
                !G ||
                  e("ADD_ITEM", {
                    source: s,
                    index: a,
                    interactionMethod: u,
                    success: l,
                    failure: f,
                    options: p,
                  });
              })
              .catch(() => {}),
            G)
          )
            return;
        }
        e("REMOVE_ITEM", { query: P.id });
      }
      const g =
          p.type === "local"
            ? Be.LOCAL
            : p.type === "limbo"
            ? Be.LIMBO
            : Be.INPUT,
        E = CA(g, g === Be.INPUT ? null : s, p.file);
      Object.keys(p.metadata || {}).forEach((P) => {
        E.setMetadata(P, p.metadata[P]);
      }),
        Hn("DID_CREATE_ITEM", E, { query: n, dispatch: e });
      const R = n("GET_ITEM_INSERT_LOCATION");
      i.options.itemInsertLocationFreedom ||
        (a = R === "before" ? -1 : i.items.length),
        dA(i.items, E, a),
        Mn(R) && s && xa(i, R);
      const T = E.id;
      E.on("init", () => {
        e("DID_INIT_ITEM", { id: T });
      }),
        E.on("load-init", () => {
          e("DID_START_ITEM_LOAD", { id: T });
        }),
        E.on("load-meta", () => {
          e("DID_UPDATE_ITEM_META", { id: T });
        }),
        E.on("load-progress", (P) => {
          e("DID_UPDATE_ITEM_LOAD_PROGRESS", { id: T, progress: P });
        }),
        E.on("load-request-error", (P) => {
          const G = es(i.options.labelFileLoadError)(P);
          if (P.code >= 400 && P.code < 500) {
            e("DID_THROW_ITEM_INVALID", {
              id: T,
              error: P,
              status: { main: G, sub: `${P.code} (${P.body})` },
            }),
              f({ error: P, file: at(E) });
            return;
          }
          e("DID_THROW_ITEM_LOAD_ERROR", {
            id: T,
            error: P,
            status: { main: G, sub: i.options.labelTapToRetry },
          });
        }),
        E.on("load-file-error", (P) => {
          e("DID_THROW_ITEM_INVALID", {
            id: T,
            error: P.status,
            status: P.status,
          }),
            f({ error: P.status, file: at(E) });
        }),
        E.on("load-abort", () => {
          e("REMOVE_ITEM", { query: T });
        }),
        E.on("load-skip", () => {
          e("COMPLETE_LOAD_ITEM", {
            query: T,
            item: E,
            data: { source: s, success: l },
          });
        }),
        E.on("load", () => {
          const P = (G) => {
            if (!G) {
              e("REMOVE_ITEM", { query: T });
              return;
            }
            E.on("metadata-update", ($) => {
              e("DID_UPDATE_ITEM_METADATA", { id: T, change: $ });
            }),
              Ft("SHOULD_PREPARE_OUTPUT", !1, { item: E, query: n }).then(
                ($) => {
                  const H = n("GET_BEFORE_PREPARE_FILE");
                  H && ($ = H(E, $));
                  const M = () => {
                    e("COMPLETE_LOAD_ITEM", {
                      query: T,
                      item: E,
                      data: { source: s, success: l },
                    }),
                      Ma(e, i);
                  };
                  if ($) {
                    e(
                      "REQUEST_PREPARE_OUTPUT",
                      {
                        query: T,
                        item: E,
                        success: (X) => {
                          e("DID_PREPARE_OUTPUT", { id: T, file: X }), M();
                        },
                      },
                      !0
                    );
                    return;
                  }
                  M();
                }
              );
          };
          Ft("DID_LOAD_ITEM", E, { query: n, dispatch: e })
            .then(() => {
              yd(n("GET_BEFORE_ADD_FILE"), at(E)).then(P);
            })
            .catch((G) => {
              if (!G || !G.error || !G.status) return P(!1);
              e("DID_THROW_ITEM_INVALID", {
                id: T,
                error: G.error,
                status: G.status,
              });
            });
        }),
        E.on("process-start", () => {
          e("DID_START_ITEM_PROCESSING", { id: T });
        }),
        E.on("process-progress", (P) => {
          e("DID_UPDATE_ITEM_PROCESS_PROGRESS", { id: T, progress: P });
        }),
        E.on("process-error", (P) => {
          e("DID_THROW_ITEM_PROCESSING_ERROR", {
            id: T,
            error: P,
            status: {
              main: es(i.options.labelFileProcessingError)(P),
              sub: i.options.labelTapToRetry,
            },
          });
        }),
        E.on("process-revert-error", (P) => {
          e("DID_THROW_ITEM_PROCESSING_REVERT_ERROR", {
            id: T,
            error: P,
            status: {
              main: es(i.options.labelFileProcessingRevertError)(P),
              sub: i.options.labelTapToRetry,
            },
          });
        }),
        E.on("process-complete", (P) => {
          e("DID_COMPLETE_ITEM_PROCESSING", {
            id: T,
            error: null,
            serverFileReference: P,
          }),
            e("DID_DEFINE_VALUE", { id: T, value: P });
        }),
        E.on("process-abort", () => {
          e("DID_ABORT_ITEM_PROCESSING", { id: T });
        }),
        E.on("process-revert", () => {
          e("DID_REVERT_ITEM_PROCESSING", { id: T }),
            e("DID_DEFINE_VALUE", { id: T, value: null });
        }),
        e("DID_ADD_ITEM", { id: T, index: a, interactionMethod: u }),
        Ma(e, i);
      const { url: A, load: S, restore: L, fetch: D } = i.options.server || {};
      E.load(
        s,
        OA(
          g === Be.INPUT
            ? tt(s) && PA(s) && D
              ? Pa(A, D)
              : Od
            : g === Be.LIMBO
            ? Pa(A, L)
            : Pa(A, S)
        ),
        (P, G, $) => {
          Ft("LOAD_FILE", P, { query: n }).then(G).catch($);
        }
      );
    },
    REQUEST_PREPARE_OUTPUT: ({
      item: s,
      success: a,
      failure: u = () => {},
    }) => {
      const l = { error: Ce("error", 0, "Item not found"), file: null };
      if (s.archived) return u(l);
      Ft("PREPARE_OUTPUT", s.file, { query: n, item: s }).then((f) => {
        Ft("COMPLETE_PREPARE_OUTPUT", f, { query: n, item: s }).then((p) => {
          if (s.archived) return u(l);
          a(p);
        });
      });
    },
    COMPLETE_LOAD_ITEM: ({ item: s, data: a }) => {
      const { success: u, source: l } = a,
        f = n("GET_ITEM_INSERT_LOCATION");
      if (
        (Mn(f) && l && xa(i, f),
        e("DID_LOAD_ITEM", {
          id: s.id,
          error: null,
          serverFileReference: s.origin === Be.INPUT ? null : l,
        }),
        u(at(s)),
        s.origin === Be.LOCAL)
      ) {
        e("DID_LOAD_LOCAL_ITEM", { id: s.id });
        return;
      }
      if (s.origin === Be.LIMBO) {
        e("DID_COMPLETE_ITEM_PROCESSING", {
          id: s.id,
          error: null,
          serverFileReference: l,
        }),
          e("DID_DEFINE_VALUE", { id: s.id, value: s.serverId || l });
        return;
      }
      n("IS_ASYNC") &&
        i.options.instantUpload &&
        e("REQUEST_ITEM_PROCESSING", { query: s.id });
    },
    RETRY_ITEM_LOAD: wt(i, (s) => {
      s.retryLoad();
    }),
    REQUEST_ITEM_PREPARE: wt(i, (s, a, u) => {
      e(
        "REQUEST_PREPARE_OUTPUT",
        {
          query: s.id,
          item: s,
          success: (l) => {
            e("DID_PREPARE_OUTPUT", { id: s.id, file: l }),
              a({ file: s, output: l });
          },
          failure: u,
        },
        !0
      );
    }),
    REQUEST_ITEM_PROCESSING: wt(i, (s, a, u) => {
      if (!(s.status === ne.IDLE || s.status === ne.PROCESSING_ERROR)) {
        const f = () =>
            e("REQUEST_ITEM_PROCESSING", { query: s, success: a, failure: u }),
          p = () => (document.hidden ? f() : setTimeout(f, 32));
        s.status === ne.PROCESSING_COMPLETE ||
        s.status === ne.PROCESSING_REVERT_ERROR
          ? s
              .revert(
                Kr(i.options.server.url, i.options.server.revert),
                n("GET_FORCE_REVERT")
              )
              .then(p)
              .catch(() => {})
          : s.status === ne.PROCESSING && s.abortProcessing().then(p);
        return;
      }
      s.status !== ne.PROCESSING_QUEUED &&
        (s.requestProcessing(),
        e("DID_REQUEST_ITEM_PROCESSING", { id: s.id }),
        e("PROCESS_ITEM", { query: s, success: a, failure: u }, !0));
    }),
    PROCESS_ITEM: wt(i, (s, a, u) => {
      const l = n("GET_MAX_PARALLEL_UPLOADS");
      if (n("GET_ITEMS_BY_STATUS", ne.PROCESSING).length === l) {
        i.processingQueue.push({ id: s.id, success: a, failure: u });
        return;
      }
      if (s.status === ne.PROCESSING) return;
      const p = () => {
        const E = i.processingQueue.shift();
        if (!E) return;
        const { id: R, success: T, failure: A } = E,
          S = xn(i.items, R);
        if (!S || S.archived) {
          p();
          return;
        }
        e("PROCESS_ITEM", { query: R, success: T, failure: A }, !0);
      };
      s.onOnce("process-complete", () => {
        a(at(s)), p();
        const E = i.options.server;
        if (i.options.instantUpload && s.origin === Be.LOCAL && Mn(E.remove)) {
          const A = () => {};
          (s.origin = Be.LIMBO), i.options.server.remove(s.source, A, A);
        }
        n("GET_ITEMS_BY_STATUS", ne.PROCESSING_COMPLETE).length ===
          i.items.length && e("DID_COMPLETE_ITEM_PROCESSING_ALL");
      }),
        s.onOnce("process-error", (E) => {
          u({ error: E, file: at(s) }), p();
        });
      const g = i.options;
      s.process(
        DA(
          AA(g.server.url, g.server.process, g.name, {
            chunkTransferId: s.transferId,
            chunkServer: g.server.patch,
            chunkUploads: g.chunkUploads,
            chunkForce: g.chunkForce,
            chunkSize: g.chunkSize,
            chunkRetryDelays: g.chunkRetryDelays,
          }),
          { allowMinimumUploadDuration: n("GET_ALLOW_MINIMUM_UPLOAD_DURATION") }
        ),
        (E, R, T) => {
          Ft("PREPARE_OUTPUT", E, { query: n, item: s })
            .then((A) => {
              e("DID_PREPARE_OUTPUT", { id: s.id, file: A }), R(A);
            })
            .catch(T);
        }
      );
    }),
    RETRY_ITEM_PROCESSING: wt(i, (s) => {
      e("REQUEST_ITEM_PROCESSING", { query: s });
    }),
    REQUEST_REMOVE_ITEM: wt(i, (s) => {
      yd(n("GET_BEFORE_REMOVE_FILE"), at(s)).then((a) => {
        !a || e("REMOVE_ITEM", { query: s });
      });
    }),
    RELEASE_ITEM: wt(i, (s) => {
      s.release();
    }),
    REMOVE_ITEM: wt(i, (s, a, u, l) => {
      const f = () => {
          const g = s.id;
          Rd(i.items, g).archive(),
            e("DID_REMOVE_ITEM", { error: null, id: g, item: s }),
            Ma(e, i),
            a(at(s));
        },
        p = i.options.server;
      s.origin === Be.LOCAL && p && Mn(p.remove) && l.remove !== !1
        ? (e("DID_START_ITEM_REMOVE", { id: s.id }),
          p.remove(
            s.source,
            () => f(),
            (g) => {
              e("DID_THROW_ITEM_REMOVE_ERROR", {
                id: s.id,
                error: Ce("error", 0, g, null),
                status: {
                  main: es(i.options.labelFileRemoveError)(g),
                  sub: i.options.labelTapToRetry,
                },
              });
            }
          ))
        : (((l.revert && s.origin !== Be.LOCAL && s.serverId !== null) ||
            (i.options.chunkUploads && s.file.size > i.options.chunkSize) ||
            (i.options.chunkUploads && i.options.chunkForce)) &&
            s.revert(
              Kr(i.options.server.url, i.options.server.revert),
              n("GET_FORCE_REVERT")
            ),
          f());
    }),
    ABORT_ITEM_LOAD: wt(i, (s) => {
      s.abortLoad();
    }),
    ABORT_ITEM_PROCESSING: wt(i, (s) => {
      if (s.serverId) {
        e("REVERT_ITEM_PROCESSING", { id: s.id });
        return;
      }
      s.abortProcessing().then(() => {
        i.options.instantUpload && e("REMOVE_ITEM", { query: s.id });
      });
    }),
    REQUEST_REVERT_ITEM_PROCESSING: wt(i, (s) => {
      if (!i.options.instantUpload) {
        e("REVERT_ITEM_PROCESSING", { query: s });
        return;
      }
      const a = (f) => {
          !f || e("REVERT_ITEM_PROCESSING", { query: s });
        },
        u = n("GET_BEFORE_REMOVE_FILE");
      if (!u) return a(!0);
      const l = u(at(s));
      if (l == null) return a(!0);
      if (typeof l == "boolean") return a(l);
      typeof l.then == "function" && l.then(a);
    }),
    REVERT_ITEM_PROCESSING: wt(i, (s) => {
      s.revert(
        Kr(i.options.server.url, i.options.server.revert),
        n("GET_FORCE_REVERT")
      )
        .then(() => {
          (i.options.instantUpload || MA(s)) &&
            e("REMOVE_ITEM", { query: s.id });
        })
        .catch(() => {});
    }),
    SET_OPTIONS: ({ options: s }) => {
      const a = Object.keys(s),
        u = NA.filter((f) => a.includes(f));
      [...u, ...Object.keys(s).filter((f) => !u.includes(f))].forEach((f) => {
        e(`SET_${Us(f, "_").toUpperCase()}`, { value: s[f] });
      });
    },
  }),
  NA = ["server"],
  Xl = (e) => e,
  sn = (e) => document.createElement(e),
  Le = (e, n) => {
    let i = e.childNodes[0];
    i
      ? n !== i.nodeValue && (i.nodeValue = n)
      : ((i = document.createTextNode(n)), e.appendChild(i));
  },
  Ad = (e, n, i, s) => {
    const a = (((s % 360) - 90) * Math.PI) / 180;
    return { x: e + i * Math.cos(a), y: n + i * Math.sin(a) };
  },
  FA = (e, n, i, s, a, u) => {
    const l = Ad(e, n, i, a),
      f = Ad(e, n, i, s);
    return ["M", l.x, l.y, "A", i, i, 0, u, 0, f.x, f.y].join(" ");
  },
  BA = (e, n, i, s, a) => {
    let u = 1;
    return (
      a > s && a - s <= 0.5 && (u = 0),
      s > a && s - a >= 0.5 && (u = 0),
      FA(e, n, i, Math.min(0.9999, s) * 360, Math.min(0.9999, a) * 360, u)
    );
  },
  GA = ({ root: e, props: n }) => {
    (n.spin = !1), (n.progress = 0), (n.opacity = 0);
    const i = _s("svg");
    (e.ref.path = _s("path", { "stroke-width": 2, "stroke-linecap": "round" })),
      i.appendChild(e.ref.path),
      (e.ref.svg = i),
      e.appendChild(i);
  },
  UA = ({ root: e, props: n }) => {
    if (n.opacity === 0) return;
    n.align && (e.element.dataset.align = n.align);
    const i = parseInt(Pe(e.ref.path, "stroke-width"), 10),
      s = e.rect.element.width * 0.5;
    let a = 0,
      u = 0;
    n.spin ? ((a = 0), (u = 0.5)) : ((a = 0), (u = n.progress));
    const l = BA(s, s, s - i, a, u);
    Pe(e.ref.path, "d", l),
      Pe(e.ref.path, "stroke-opacity", n.spin || n.progress > 0 ? 1 : 0);
  },
  wd = xe({
    tag: "div",
    name: "progress-indicator",
    ignoreRectUpdate: !0,
    ignoreRect: !0,
    create: GA,
    write: UA,
    mixins: {
      apis: ["progress", "spin", "align"],
      styles: ["opacity"],
      animations: {
        opacity: { type: "tween", duration: 500 },
        progress: { type: "spring", stiffness: 0.95, damping: 0.65, mass: 10 },
      },
    },
  }),
  $A = ({ root: e, props: n }) => {
    (e.element.innerHTML = (n.icon || "") + `<span>${n.label}</span>`),
      (n.isDisabled = !1);
  },
  qA = ({ root: e, props: n }) => {
    const { isDisabled: i } = n,
      s = e.query("GET_DISABLED") || n.opacity === 0;
    s && !i
      ? ((n.isDisabled = !0), Pe(e.element, "disabled", "disabled"))
      : !s && i && ((n.isDisabled = !1), e.element.removeAttribute("disabled"));
  },
  Vh = xe({
    tag: "button",
    attributes: { type: "button" },
    ignoreRect: !0,
    ignoreRectUpdate: !0,
    name: "file-action-button",
    mixins: {
      apis: ["label"],
      styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"],
      animations: {
        scaleX: "spring",
        scaleY: "spring",
        translateX: "spring",
        translateY: "spring",
        opacity: { type: "tween", duration: 250 },
      },
      listeners: !0,
    },
    create: $A,
    write: qA,
  }),
  Yh = (e, n = ".", i = 1e3, s = {}) => {
    const {
      labelBytes: a = "bytes",
      labelKilobytes: u = "KB",
      labelMegabytes: l = "MB",
      labelGigabytes: f = "GB",
    } = s;
    e = Math.round(Math.abs(e));
    const p = i,
      g = i * i,
      E = i * i * i;
    return e < p
      ? `${e} ${a}`
      : e < g
      ? `${Math.floor(e / p)} ${u}`
      : e < E
      ? `${Dd(e / g, 1, n)} ${l}`
      : `${Dd(e / E, 2, n)} ${f}`;
  },
  Dd = (e, n, i) =>
    e
      .toFixed(n)
      .split(".")
      .filter((s) => s !== "0")
      .join(i),
  WA = ({ root: e, props: n }) => {
    const i = sn("span");
    (i.className = "filepond--file-info-main"),
      Pe(i, "aria-hidden", "true"),
      e.appendChild(i),
      (e.ref.fileName = i);
    const s = sn("span");
    (s.className = "filepond--file-info-sub"),
      e.appendChild(s),
      (e.ref.fileSize = s),
      Le(s, e.query("GET_LABEL_FILE_WAITING_FOR_SIZE")),
      Le(i, Xl(e.query("GET_ITEM_NAME", n.id)));
  },
  il = ({ root: e, props: n }) => {
    Le(
      e.ref.fileSize,
      Yh(
        e.query("GET_ITEM_SIZE", n.id),
        ".",
        e.query("GET_FILE_SIZE_BASE"),
        e.query("GET_FILE_SIZE_LABELS", e.query)
      )
    ),
      Le(e.ref.fileName, Xl(e.query("GET_ITEM_NAME", n.id)));
  },
  bd = ({ root: e, props: n }) => {
    if (Rr(e.query("GET_ITEM_SIZE", n.id))) {
      il({ root: e, props: n });
      return;
    }
    Le(e.ref.fileSize, e.query("GET_LABEL_FILE_SIZE_NOT_AVAILABLE"));
  },
  HA = xe({
    name: "file-info",
    ignoreRect: !0,
    ignoreRectUpdate: !0,
    write: nt({
      DID_LOAD_ITEM: il,
      DID_UPDATE_ITEM_META: il,
      DID_THROW_ITEM_LOAD_ERROR: bd,
      DID_THROW_ITEM_INVALID: bd,
    }),
    didCreateView: (e) => {
      Hn("CREATE_VIEW", { ...e, view: e });
    },
    create: WA,
    mixins: {
      styles: ["translateX", "translateY"],
      animations: { translateX: "spring", translateY: "spring" },
    },
  }),
  zh = (e) => Math.round(e * 100),
  VA = ({ root: e }) => {
    const n = sn("span");
    (n.className = "filepond--file-status-main"),
      e.appendChild(n),
      (e.ref.main = n);
    const i = sn("span");
    (i.className = "filepond--file-status-sub"),
      e.appendChild(i),
      (e.ref.sub = i),
      Xh({ root: e, action: { progress: null } });
  },
  Xh = ({ root: e, action: n }) => {
    const i =
      n.progress === null
        ? e.query("GET_LABEL_FILE_LOADING")
        : `${e.query("GET_LABEL_FILE_LOADING")} ${zh(n.progress)}%`;
    Le(e.ref.main, i), Le(e.ref.sub, e.query("GET_LABEL_TAP_TO_CANCEL"));
  },
  YA = ({ root: e, action: n }) => {
    const i =
      n.progress === null
        ? e.query("GET_LABEL_FILE_PROCESSING")
        : `${e.query("GET_LABEL_FILE_PROCESSING")} ${zh(n.progress)}%`;
    Le(e.ref.main, i), Le(e.ref.sub, e.query("GET_LABEL_TAP_TO_CANCEL"));
  },
  zA = ({ root: e }) => {
    Le(e.ref.main, e.query("GET_LABEL_FILE_PROCESSING")),
      Le(e.ref.sub, e.query("GET_LABEL_TAP_TO_CANCEL"));
  },
  XA = ({ root: e }) => {
    Le(e.ref.main, e.query("GET_LABEL_FILE_PROCESSING_ABORTED")),
      Le(e.ref.sub, e.query("GET_LABEL_TAP_TO_RETRY"));
  },
  KA = ({ root: e }) => {
    Le(e.ref.main, e.query("GET_LABEL_FILE_PROCESSING_COMPLETE")),
      Le(e.ref.sub, e.query("GET_LABEL_TAP_TO_UNDO"));
  },
  Cd = ({ root: e }) => {
    Le(e.ref.main, ""), Le(e.ref.sub, "");
  },
  kr = ({ root: e, action: n }) => {
    Le(e.ref.main, n.status.main), Le(e.ref.sub, n.status.sub);
  },
  kA = xe({
    name: "file-status",
    ignoreRect: !0,
    ignoreRectUpdate: !0,
    write: nt({
      DID_LOAD_ITEM: Cd,
      DID_REVERT_ITEM_PROCESSING: Cd,
      DID_REQUEST_ITEM_PROCESSING: zA,
      DID_ABORT_ITEM_PROCESSING: XA,
      DID_COMPLETE_ITEM_PROCESSING: KA,
      DID_UPDATE_ITEM_PROCESS_PROGRESS: YA,
      DID_UPDATE_ITEM_LOAD_PROGRESS: Xh,
      DID_THROW_ITEM_LOAD_ERROR: kr,
      DID_THROW_ITEM_INVALID: kr,
      DID_THROW_ITEM_PROCESSING_ERROR: kr,
      DID_THROW_ITEM_PROCESSING_REVERT_ERROR: kr,
      DID_THROW_ITEM_REMOVE_ERROR: kr,
    }),
    didCreateView: (e) => {
      Hn("CREATE_VIEW", { ...e, view: e });
    },
    create: VA,
    mixins: {
      styles: ["translateX", "translateY", "opacity"],
      animations: {
        opacity: { type: "tween", duration: 250 },
        translateX: "spring",
        translateY: "spring",
      },
    },
  }),
  sl = {
    AbortItemLoad: {
      label: "GET_LABEL_BUTTON_ABORT_ITEM_LOAD",
      action: "ABORT_ITEM_LOAD",
      className: "filepond--action-abort-item-load",
      align: "LOAD_INDICATOR_POSITION",
    },
    RetryItemLoad: {
      label: "GET_LABEL_BUTTON_RETRY_ITEM_LOAD",
      action: "RETRY_ITEM_LOAD",
      icon: "GET_ICON_RETRY",
      className: "filepond--action-retry-item-load",
      align: "BUTTON_PROCESS_ITEM_POSITION",
    },
    RemoveItem: {
      label: "GET_LABEL_BUTTON_REMOVE_ITEM",
      action: "REQUEST_REMOVE_ITEM",
      icon: "GET_ICON_REMOVE",
      className: "filepond--action-remove-item",
      align: "BUTTON_REMOVE_ITEM_POSITION",
    },
    ProcessItem: {
      label: "GET_LABEL_BUTTON_PROCESS_ITEM",
      action: "REQUEST_ITEM_PROCESSING",
      icon: "GET_ICON_PROCESS",
      className: "filepond--action-process-item",
      align: "BUTTON_PROCESS_ITEM_POSITION",
    },
    AbortItemProcessing: {
      label: "GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING",
      action: "ABORT_ITEM_PROCESSING",
      className: "filepond--action-abort-item-processing",
      align: "BUTTON_PROCESS_ITEM_POSITION",
    },
    RetryItemProcessing: {
      label: "GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING",
      action: "RETRY_ITEM_PROCESSING",
      icon: "GET_ICON_RETRY",
      className: "filepond--action-retry-item-processing",
      align: "BUTTON_PROCESS_ITEM_POSITION",
    },
    RevertItemProcessing: {
      label: "GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING",
      action: "REQUEST_REVERT_ITEM_PROCESSING",
      icon: "GET_ICON_UNDO",
      className: "filepond--action-revert-item-processing",
      align: "BUTTON_PROCESS_ITEM_POSITION",
    },
  },
  ol = [];
we(sl, (e) => {
  ol.push(e);
});
const gt = (e) => {
    if (al(e) === "right") return 0;
    const n = e.ref.buttonRemoveItem.rect.element;
    return n.hidden ? null : n.width + n.left;
  },
  QA = (e) => e.ref.buttonAbortItemLoad.rect.element.width,
  ts = (e) => Math.floor(e.ref.buttonRemoveItem.rect.element.height / 4),
  ZA = (e) => Math.floor(e.ref.buttonRemoveItem.rect.element.left / 2),
  JA = (e) => e.query("GET_STYLE_LOAD_INDICATOR_POSITION"),
  jA = (e) => e.query("GET_STYLE_PROGRESS_INDICATOR_POSITION"),
  al = (e) => e.query("GET_STYLE_BUTTON_REMOVE_ITEM_POSITION"),
  ew = {
    buttonAbortItemLoad: { opacity: 0 },
    buttonRetryItemLoad: { opacity: 0 },
    buttonRemoveItem: { opacity: 0 },
    buttonProcessItem: { opacity: 0 },
    buttonAbortItemProcessing: { opacity: 0 },
    buttonRetryItemProcessing: { opacity: 0 },
    buttonRevertItemProcessing: { opacity: 0 },
    loadProgressIndicator: { opacity: 0, align: JA },
    processProgressIndicator: { opacity: 0, align: jA },
    processingCompleteIndicator: { opacity: 0, scaleX: 0.75, scaleY: 0.75 },
    info: { translateX: 0, translateY: 0, opacity: 0 },
    status: { translateX: 0, translateY: 0, opacity: 0 },
  },
  Ld = {
    buttonRemoveItem: { opacity: 1 },
    buttonProcessItem: { opacity: 1 },
    info: { translateX: gt },
    status: { translateX: gt },
  },
  Na = {
    buttonAbortItemProcessing: { opacity: 1 },
    processProgressIndicator: { opacity: 1 },
    status: { opacity: 1 },
  },
  ur = {
    DID_THROW_ITEM_INVALID: {
      buttonRemoveItem: { opacity: 1 },
      info: { translateX: gt },
      status: { translateX: gt, opacity: 1 },
    },
    DID_START_ITEM_LOAD: {
      buttonAbortItemLoad: { opacity: 1 },
      loadProgressIndicator: { opacity: 1 },
      status: { opacity: 1 },
    },
    DID_THROW_ITEM_LOAD_ERROR: {
      buttonRetryItemLoad: { opacity: 1 },
      buttonRemoveItem: { opacity: 1 },
      info: { translateX: gt },
      status: { opacity: 1 },
    },
    DID_START_ITEM_REMOVE: {
      processProgressIndicator: { opacity: 1, align: al },
      info: { translateX: gt },
      status: { opacity: 0 },
    },
    DID_THROW_ITEM_REMOVE_ERROR: {
      processProgressIndicator: { opacity: 0, align: al },
      buttonRemoveItem: { opacity: 1 },
      info: { translateX: gt },
      status: { opacity: 1, translateX: gt },
    },
    DID_LOAD_ITEM: Ld,
    DID_LOAD_LOCAL_ITEM: {
      buttonRemoveItem: { opacity: 1 },
      info: { translateX: gt },
      status: { translateX: gt },
    },
    DID_START_ITEM_PROCESSING: Na,
    DID_REQUEST_ITEM_PROCESSING: Na,
    DID_UPDATE_ITEM_PROCESS_PROGRESS: Na,
    DID_COMPLETE_ITEM_PROCESSING: {
      buttonRevertItemProcessing: { opacity: 1 },
      info: { opacity: 1 },
      status: { opacity: 1 },
    },
    DID_THROW_ITEM_PROCESSING_ERROR: {
      buttonRemoveItem: { opacity: 1 },
      buttonRetryItemProcessing: { opacity: 1 },
      status: { opacity: 1 },
      info: { translateX: gt },
    },
    DID_THROW_ITEM_PROCESSING_REVERT_ERROR: {
      buttonRevertItemProcessing: { opacity: 1 },
      status: { opacity: 1 },
      info: { opacity: 1 },
    },
    DID_ABORT_ITEM_PROCESSING: {
      buttonRemoveItem: { opacity: 1 },
      buttonProcessItem: { opacity: 1 },
      info: { translateX: gt },
      status: { opacity: 1 },
    },
    DID_REVERT_ITEM_PROCESSING: Ld,
  },
  tw = xe({
    create: ({ root: e }) => {
      e.element.innerHTML = e.query("GET_ICON_DONE");
    },
    name: "processing-complete-indicator",
    ignoreRect: !0,
    mixins: {
      styles: ["scaleX", "scaleY", "opacity"],
      animations: {
        scaleX: "spring",
        scaleY: "spring",
        opacity: { type: "tween", duration: 250 },
      },
    },
  }),
  nw = ({ root: e, props: n }) => {
    const i = Object.keys(sl).reduce((S, L) => ((S[L] = { ...sl[L] }), S), {}),
      { id: s } = n,
      a = e.query("GET_ALLOW_REVERT"),
      u = e.query("GET_ALLOW_REMOVE"),
      l = e.query("GET_ALLOW_PROCESS"),
      f = e.query("GET_INSTANT_UPLOAD"),
      p = e.query("IS_ASYNC"),
      g = e.query("GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN");
    let E;
    p
      ? l && !a
        ? (E = (S) => !/RevertItemProcessing/.test(S))
        : !l && a
        ? (E = (S) =>
            !/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(S))
        : !l && !a && (E = (S) => !/Process/.test(S))
      : (E = (S) => !/Process/.test(S));
    const R = E ? ol.filter(E) : ol.concat();
    if (
      (f &&
        a &&
        ((i.RevertItemProcessing.label = "GET_LABEL_BUTTON_REMOVE_ITEM"),
        (i.RevertItemProcessing.icon = "GET_ICON_REMOVE")),
      p && !a)
    ) {
      const S = ur.DID_COMPLETE_ITEM_PROCESSING;
      (S.info.translateX = ZA),
        (S.info.translateY = ts),
        (S.status.translateY = ts),
        (S.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 });
    }
    if (
      (p &&
        !l &&
        ([
          "DID_START_ITEM_PROCESSING",
          "DID_REQUEST_ITEM_PROCESSING",
          "DID_UPDATE_ITEM_PROCESS_PROGRESS",
          "DID_THROW_ITEM_PROCESSING_ERROR",
        ].forEach((S) => {
          ur[S].status.translateY = ts;
        }),
        (ur.DID_THROW_ITEM_PROCESSING_ERROR.status.translateX = QA)),
      g && a)
    ) {
      i.RevertItemProcessing.align = "BUTTON_REMOVE_ITEM_POSITION";
      const S = ur.DID_COMPLETE_ITEM_PROCESSING;
      (S.info.translateX = gt),
        (S.status.translateY = ts),
        (S.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 });
    }
    u || (i.RemoveItem.disabled = !0),
      we(i, (S, L) => {
        const D = e.createChildView(Vh, {
          label: e.query(L.label),
          icon: e.query(L.icon),
          opacity: 0,
        });
        R.includes(S) && e.appendChildView(D),
          L.disabled &&
            (D.element.setAttribute("disabled", "disabled"),
            D.element.setAttribute("hidden", "hidden")),
          (D.element.dataset.align = e.query(`GET_STYLE_${L.align}`)),
          D.element.classList.add(L.className),
          D.on("click", (P) => {
            P.stopPropagation(),
              !L.disabled && e.dispatch(L.action, { query: s });
          }),
          (e.ref[`button${S}`] = D);
      }),
      (e.ref.processingCompleteIndicator = e.appendChildView(
        e.createChildView(tw)
      )),
      (e.ref.processingCompleteIndicator.element.dataset.align = e.query(
        "GET_STYLE_BUTTON_PROCESS_ITEM_POSITION"
      )),
      (e.ref.info = e.appendChildView(e.createChildView(HA, { id: s }))),
      (e.ref.status = e.appendChildView(e.createChildView(kA, { id: s })));
    const T = e.appendChildView(
      e.createChildView(wd, {
        opacity: 0,
        align: e.query("GET_STYLE_LOAD_INDICATOR_POSITION"),
      })
    );
    T.element.classList.add("filepond--load-indicator"),
      (e.ref.loadProgressIndicator = T);
    const A = e.appendChildView(
      e.createChildView(wd, {
        opacity: 0,
        align: e.query("GET_STYLE_PROGRESS_INDICATOR_POSITION"),
      })
    );
    A.element.classList.add("filepond--process-indicator"),
      (e.ref.processProgressIndicator = A),
      (e.ref.activeStyles = []);
  },
  rw = ({ root: e, actions: n, props: i }) => {
    iw({ root: e, actions: n, props: i });
    let s = n
      .concat()
      .filter((a) => /^DID_/.test(a.type))
      .reverse()
      .find((a) => ur[a.type]);
    if (s) {
      e.ref.activeStyles = [];
      const a = ur[s.type];
      we(ew, (u, l) => {
        const f = e.ref[u];
        we(l, (p, g) => {
          const E = a[u] && typeof a[u][p] < "u" ? a[u][p] : g;
          e.ref.activeStyles.push({ control: f, key: p, value: E });
        });
      });
    }
    e.ref.activeStyles.forEach(({ control: a, key: u, value: l }) => {
      a[u] = typeof l == "function" ? l(e) : l;
    });
  },
  iw = nt({
    DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: ({ root: e, action: n }) => {
      e.ref.buttonAbortItemProcessing.label = n.value;
    },
    DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: ({ root: e, action: n }) => {
      e.ref.buttonAbortItemLoad.label = n.value;
    },
    DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL: ({ root: e, action: n }) => {
      e.ref.buttonAbortItemRemoval.label = n.value;
    },
    DID_REQUEST_ITEM_PROCESSING: ({ root: e }) => {
      (e.ref.processProgressIndicator.spin = !0),
        (e.ref.processProgressIndicator.progress = 0);
    },
    DID_START_ITEM_LOAD: ({ root: e }) => {
      (e.ref.loadProgressIndicator.spin = !0),
        (e.ref.loadProgressIndicator.progress = 0);
    },
    DID_START_ITEM_REMOVE: ({ root: e }) => {
      (e.ref.processProgressIndicator.spin = !0),
        (e.ref.processProgressIndicator.progress = 0);
    },
    DID_UPDATE_ITEM_LOAD_PROGRESS: ({ root: e, action: n }) => {
      (e.ref.loadProgressIndicator.spin = !1),
        (e.ref.loadProgressIndicator.progress = n.progress);
    },
    DID_UPDATE_ITEM_PROCESS_PROGRESS: ({ root: e, action: n }) => {
      (e.ref.processProgressIndicator.spin = !1),
        (e.ref.processProgressIndicator.progress = n.progress);
    },
  }),
  sw = xe({
    create: nw,
    write: rw,
    didCreateView: (e) => {
      Hn("CREATE_VIEW", { ...e, view: e });
    },
    name: "file",
  }),
  ow = ({ root: e, props: n }) => {
    (e.ref.fileName = sn("legend")),
      e.appendChild(e.ref.fileName),
      (e.ref.file = e.appendChildView(e.createChildView(sw, { id: n.id }))),
      (e.ref.data = !1);
  },
  aw = ({ root: e, props: n }) => {
    Le(e.ref.fileName, Xl(e.query("GET_ITEM_NAME", n.id)));
  },
  lw = xe({
    create: ow,
    ignoreRect: !0,
    write: nt({ DID_LOAD_ITEM: aw }),
    didCreateView: (e) => {
      Hn("CREATE_VIEW", { ...e, view: e });
    },
    tag: "fieldset",
    name: "file-wrapper",
  }),
  Pd = { type: "spring", damping: 0.6, mass: 7 },
  uw = ({ root: e, props: n }) => {
    [
      { name: "top" },
      {
        name: "center",
        props: { translateY: null, scaleY: null },
        mixins: {
          animations: { scaleY: Pd },
          styles: ["translateY", "scaleY"],
        },
      },
      {
        name: "bottom",
        props: { translateY: null },
        mixins: { animations: { translateY: Pd }, styles: ["translateY"] },
      },
    ].forEach((i) => {
      cw(e, i, n.name);
    }),
      e.element.classList.add(`filepond--${n.name}`),
      (e.ref.scalable = null);
  },
  cw = (e, n, i) => {
    const s = xe({
        name: `panel-${n.name} filepond--${i}`,
        mixins: n.mixins,
        ignoreRectUpdate: !0,
      }),
      a = e.createChildView(s, n.props);
    e.ref[n.name] = e.appendChildView(a);
  },
  fw = ({ root: e, props: n }) => {
    if (
      ((e.ref.scalable === null || n.scalable !== e.ref.scalable) &&
        ((e.ref.scalable = Dh(n.scalable) ? n.scalable : !0),
        (e.element.dataset.scalable = e.ref.scalable)),
      !n.height)
    )
      return;
    const i = e.ref.top.rect.element,
      s = e.ref.bottom.rect.element,
      a = Math.max(i.height + s.height, n.height);
    (e.ref.center.translateY = i.height),
      (e.ref.center.scaleY = (a - i.height - s.height) / 100),
      (e.ref.bottom.translateY = a - s.height);
  },
  Kh = xe({
    name: "panel",
    read: ({ root: e, props: n }) =>
      (n.heightCurrent = e.ref.bottom.translateY),
    write: fw,
    create: uw,
    ignoreRect: !0,
    mixins: { apis: ["height", "heightCurrent", "scalable"] },
  }),
  dw = (e) => {
    const n = e.map((s) => s.id);
    let i;
    return {
      setIndex: (s) => {
        i = s;
      },
      getIndex: () => i,
      getItemIndex: (s) => n.indexOf(s.id),
    };
  },
  Md = { type: "spring", stiffness: 0.75, damping: 0.45, mass: 10 },
  xd = "spring",
  Nd = {
    DID_START_ITEM_LOAD: "busy",
    DID_UPDATE_ITEM_LOAD_PROGRESS: "loading",
    DID_THROW_ITEM_INVALID: "load-invalid",
    DID_THROW_ITEM_LOAD_ERROR: "load-error",
    DID_LOAD_ITEM: "idle",
    DID_THROW_ITEM_REMOVE_ERROR: "remove-error",
    DID_START_ITEM_REMOVE: "busy",
    DID_START_ITEM_PROCESSING: "busy processing",
    DID_REQUEST_ITEM_PROCESSING: "busy processing",
    DID_UPDATE_ITEM_PROCESS_PROGRESS: "processing",
    DID_COMPLETE_ITEM_PROCESSING: "processing-complete",
    DID_THROW_ITEM_PROCESSING_ERROR: "processing-error",
    DID_THROW_ITEM_PROCESSING_REVERT_ERROR: "processing-revert-error",
    DID_ABORT_ITEM_PROCESSING: "cancelled",
    DID_REVERT_ITEM_PROCESSING: "idle",
  },
  pw = ({ root: e, props: n }) => {
    if (
      ((e.ref.handleClick = (s) =>
        e.dispatch("DID_ACTIVATE_ITEM", { id: n.id })),
      (e.element.id = `filepond--item-${n.id}`),
      e.element.addEventListener("click", e.ref.handleClick),
      (e.ref.container = e.appendChildView(
        e.createChildView(lw, { id: n.id })
      )),
      (e.ref.panel = e.appendChildView(
        e.createChildView(Kh, { name: "item-panel" })
      )),
      (e.ref.panel.height = null),
      (n.markedForRemoval = !1),
      !e.query("GET_ALLOW_REORDER"))
    )
      return;
    e.element.dataset.dragState = "idle";
    const i = (s) => {
      if (!s.isPrimary) return;
      let a = !1;
      const u = { x: s.pageX, y: s.pageY };
      (n.dragOrigin = { x: e.translateX, y: e.translateY }),
        (n.dragCenter = { x: s.offsetX, y: s.offsetY });
      const l = dw(e.query("GET_ACTIVE_ITEMS"));
      e.dispatch("DID_GRAB_ITEM", { id: n.id, dragState: l });
      const f = (g) => {
          if (!g.isPrimary) return;
          g.stopPropagation(),
            g.preventDefault(),
            (n.dragOffset = { x: g.pageX - u.x, y: g.pageY - u.y }),
            n.dragOffset.x * n.dragOffset.x + n.dragOffset.y * n.dragOffset.y >
              16 &&
              !a &&
              ((a = !0),
              e.element.removeEventListener("click", e.ref.handleClick)),
            e.dispatch("DID_DRAG_ITEM", { id: n.id, dragState: l });
        },
        p = (g) => {
          !g.isPrimary ||
            (document.removeEventListener("pointermove", f),
            document.removeEventListener("pointerup", p),
            (n.dragOffset = { x: g.pageX - u.x, y: g.pageY - u.y }),
            e.dispatch("DID_DROP_ITEM", { id: n.id, dragState: l }),
            a &&
              setTimeout(
                () => e.element.addEventListener("click", e.ref.handleClick),
                0
              ));
        };
      document.addEventListener("pointermove", f),
        document.addEventListener("pointerup", p);
    };
    e.element.addEventListener("pointerdown", i);
  },
  hw = nt({
    DID_UPDATE_PANEL_HEIGHT: ({ root: e, action: n }) => {
      e.height = n.height;
    },
  }),
  _w = nt(
    {
      DID_GRAB_ITEM: ({ root: e, props: n }) => {
        n.dragOrigin = { x: e.translateX, y: e.translateY };
      },
      DID_DRAG_ITEM: ({ root: e }) => {
        e.element.dataset.dragState = "drag";
      },
      DID_DROP_ITEM: ({ root: e, props: n }) => {
        (n.dragOffset = null),
          (n.dragOrigin = null),
          (e.element.dataset.dragState = "drop");
      },
    },
    ({ root: e, actions: n, props: i, shouldOptimize: s }) => {
      e.element.dataset.dragState === "drop" &&
        e.scaleX <= 1 &&
        (e.element.dataset.dragState = "idle");
      let a = n
        .concat()
        .filter((l) => /^DID_/.test(l.type))
        .reverse()
        .find((l) => Nd[l.type]);
      a &&
        a.type !== i.currentState &&
        ((i.currentState = a.type),
        (e.element.dataset.filepondItemState = Nd[i.currentState] || ""));
      const u =
        e.query("GET_ITEM_PANEL_ASPECT_RATIO") ||
        e.query("GET_PANEL_ASPECT_RATIO");
      u
        ? s || (e.height = e.rect.element.width * u)
        : (hw({ root: e, actions: n, props: i }),
          !e.height &&
            e.ref.container.rect.element.height > 0 &&
            (e.height = e.ref.container.rect.element.height)),
        s && (e.ref.panel.height = null),
        (e.ref.panel.height = e.height);
    }
  ),
  gw = xe({
    create: pw,
    write: _w,
    destroy: ({ root: e, props: n }) => {
      e.element.removeEventListener("click", e.ref.handleClick),
        e.dispatch("RELEASE_ITEM", { query: n.id });
    },
    tag: "li",
    name: "item",
    mixins: {
      apis: [
        "id",
        "interactionMethod",
        "markedForRemoval",
        "spawnDate",
        "dragCenter",
        "dragOrigin",
        "dragOffset",
      ],
      styles: [
        "translateX",
        "translateY",
        "scaleX",
        "scaleY",
        "opacity",
        "height",
      ],
      animations: {
        scaleX: xd,
        scaleY: xd,
        translateX: Md,
        translateY: Md,
        opacity: { type: "tween", duration: 150 },
      },
    },
  });
var Kl = (e, n) => Math.max(1, Math.floor((e + 1) / n));
const kl = (e, n, i) => {
    if (!i) return;
    const s = e.rect.element.width,
      a = n.length;
    let u = null;
    if (a === 0 || i.top < n[0].rect.element.top) return -1;
    const f = n[0].rect.element,
      p = f.marginLeft + f.marginRight,
      g = f.width + p,
      E = Kl(s, g);
    if (E === 1) {
      for (let A = 0; A < a; A++) {
        const S = n[A],
          L = S.rect.outer.top + S.rect.element.height * 0.5;
        if (i.top < L) return A;
      }
      return a;
    }
    const R = f.marginTop + f.marginBottom,
      T = f.height + R;
    for (let A = 0; A < a; A++) {
      const S = A % E,
        L = Math.floor(A / E),
        D = S * g,
        P = L * T,
        G = P - f.marginTop,
        $ = D + g,
        H = P + T + f.marginBottom;
      if (i.top < H && i.top > G) {
        if (i.left < $) return A;
        A !== a - 1 ? (u = A) : (u = null);
      }
    }
    return u !== null ? u : a;
  },
  ns = {
    height: 0,
    width: 0,
    get getHeight() {
      return this.height;
    },
    set setHeight(e) {
      (this.height === 0 || e === 0) && (this.height = e);
    },
    get getWidth() {
      return this.width;
    },
    set setWidth(e) {
      (this.width === 0 || e === 0) && (this.width = e);
    },
    setDimensions: function (e, n) {
      (this.height === 0 || e === 0) && (this.height = e),
        (this.width === 0 || n === 0) && (this.width = n);
    },
  },
  Ew = ({ root: e }) => {
    Pe(e.element, "role", "list"), (e.ref.lastItemSpanwDate = Date.now());
  },
  mw = ({ root: e, action: n }) => {
    const { id: i, index: s, interactionMethod: a } = n;
    e.ref.addIndex = s;
    const u = Date.now();
    let l = u,
      f = 1;
    if (a !== Dt.NONE) {
      f = 0;
      const p = e.query("GET_ITEM_INSERT_INTERVAL"),
        g = u - e.ref.lastItemSpanwDate;
      l = g < p ? u + (p - g) : u;
    }
    (e.ref.lastItemSpanwDate = l),
      e.appendChildView(
        e.createChildView(gw, {
          spawnDate: l,
          id: i,
          opacity: f,
          interactionMethod: a,
        }),
        s
      );
  },
  Fd = (e, n, i, s = 0, a = 1) => {
    e.dragOffset
      ? ((e.translateX = null),
        (e.translateY = null),
        (e.translateX = e.dragOrigin.x + e.dragOffset.x),
        (e.translateY = e.dragOrigin.y + e.dragOffset.y),
        (e.scaleX = 1.025),
        (e.scaleY = 1.025))
      : ((e.translateX = n),
        (e.translateY = i),
        Date.now() > e.spawnDate &&
          (e.opacity === 0 && Iw(e, n, i, s, a),
          (e.scaleX = 1),
          (e.scaleY = 1),
          (e.opacity = 1)));
  },
  Iw = (e, n, i, s, a) => {
    e.interactionMethod === Dt.NONE
      ? ((e.translateX = null),
        (e.translateX = n),
        (e.translateY = null),
        (e.translateY = i))
      : e.interactionMethod === Dt.DROP
      ? ((e.translateX = null),
        (e.translateX = n - s * 20),
        (e.translateY = null),
        (e.translateY = i - a * 10),
        (e.scaleX = 0.8),
        (e.scaleY = 0.8))
      : e.interactionMethod === Dt.BROWSE
      ? ((e.translateY = null), (e.translateY = i - 30))
      : e.interactionMethod === Dt.API &&
        ((e.translateX = null), (e.translateX = n - 30), (e.translateY = null));
  },
  Tw = ({ root: e, action: n }) => {
    const { id: i } = n,
      s = e.childViews.find((a) => a.id === i);
    !s ||
      ((s.scaleX = 0.9),
      (s.scaleY = 0.9),
      (s.opacity = 0),
      (s.markedForRemoval = !0));
  },
  Fa = (e) =>
    e.rect.element.height +
    e.rect.element.marginBottom * 0.5 +
    e.rect.element.marginTop * 0.5,
  vw = (e) =>
    e.rect.element.width +
    e.rect.element.marginLeft * 0.5 +
    e.rect.element.marginRight * 0.5,
  Rw = ({ root: e, action: n }) => {
    const { id: i, dragState: s } = n,
      a = e.query("GET_ITEM", { id: i }),
      u = e.childViews.find((D) => D.id === i),
      l = e.childViews.length,
      f = s.getItemIndex(a);
    if (!u) return;
    const p = {
        x: u.dragOrigin.x + u.dragOffset.x + u.dragCenter.x,
        y: u.dragOrigin.y + u.dragOffset.y + u.dragCenter.y,
      },
      g = Fa(u),
      E = vw(u);
    let R = Math.floor(e.rect.outer.width / E);
    R > l && (R = l);
    const T = Math.floor(l / R + 1);
    (ns.setHeight = g * T), (ns.setWidth = E * R);
    var A = {
      y: Math.floor(p.y / g),
      x: Math.floor(p.x / E),
      getGridIndex: function () {
        return p.y > ns.getHeight || p.y < 0 || p.x > ns.getWidth || p.x < 0
          ? f
          : this.y * R + this.x;
      },
      getColIndex: function () {
        const P = e.query("GET_ACTIVE_ITEMS"),
          G = e.childViews.filter((K) => K.rect.element.height),
          $ = P.map((K) => G.find((Z) => Z.id === K.id)),
          H = $.findIndex((K) => K === u),
          M = Fa(u),
          X = $.length;
        let le = X,
          W = 0,
          Q = 0,
          ue = 0;
        for (let K = 0; K < X; K++)
          if (((W = Fa($[K])), (ue = Q), (Q = ue + W), p.y < Q)) {
            if (H > K) {
              if (p.y < ue + M) {
                le = K;
                break;
              }
              continue;
            }
            le = K;
            break;
          }
        return le;
      },
    };
    const S = R > 1 ? A.getGridIndex() : A.getColIndex();
    e.dispatch("MOVE_ITEM", { query: u, index: S });
    const L = s.getIndex();
    if (L === void 0 || L !== S) {
      if ((s.setIndex(S), L === void 0)) return;
      e.dispatch("DID_REORDER_ITEMS", {
        items: e.query("GET_ACTIVE_ITEMS"),
        origin: f,
        target: S,
      });
    }
  },
  Ow = nt({ DID_ADD_ITEM: mw, DID_REMOVE_ITEM: Tw, DID_DRAG_ITEM: Rw }),
  Sw = ({ root: e, props: n, actions: i, shouldOptimize: s }) => {
    Ow({ root: e, props: n, actions: i });
    const { dragCoordinates: a } = n,
      u = e.rect.element.width,
      l = e.childViews.filter(($) => $.rect.element.height),
      f = e
        .query("GET_ACTIVE_ITEMS")
        .map(($) => l.find((H) => H.id === $.id))
        .filter(($) => $),
      p = a ? kl(e, f, a) : null,
      g = e.ref.addIndex || null;
    e.ref.addIndex = null;
    let E = 0,
      R = 0,
      T = 0;
    if (f.length === 0) return;
    const A = f[0].rect.element,
      S = A.marginTop + A.marginBottom,
      L = A.marginLeft + A.marginRight,
      D = A.width + L,
      P = A.height + S,
      G = Kl(u, D);
    if (G === 1) {
      let $ = 0,
        H = 0;
      f.forEach((M, X) => {
        if (p) {
          let Q = X - p;
          Q === -2
            ? (H = -S * 0.25)
            : Q === -1
            ? (H = -S * 0.75)
            : Q === 0
            ? (H = S * 0.75)
            : Q === 1
            ? (H = S * 0.25)
            : (H = 0);
        }
        s && ((M.translateX = null), (M.translateY = null)),
          M.markedForRemoval || Fd(M, 0, $ + H),
          ($ +=
            (M.rect.element.height + S) * (M.markedForRemoval ? M.opacity : 1));
      });
    } else {
      let $ = 0,
        H = 0;
      f.forEach((M, X) => {
        X === p && (E = 1),
          X === g && (T += 1),
          M.markedForRemoval && M.opacity < 0.5 && (R -= 1);
        const le = X + T + E + R,
          W = le % G,
          Q = Math.floor(le / G),
          ue = W * D,
          K = Q * P,
          Z = Math.sign(ue - $),
          Te = Math.sign(K - H);
        ($ = ue),
          (H = K),
          !M.markedForRemoval &&
            (s && ((M.translateX = null), (M.translateY = null)),
            Fd(M, ue, K, Z, Te));
      });
    }
  },
  yw = (e, n) =>
    n.filter((i) => (i.data && i.data.id ? e.id === i.data.id : !0)),
  Aw = xe({
    create: Ew,
    write: Sw,
    tag: "ul",
    name: "list",
    didWriteView: ({ root: e }) => {
      e.childViews
        .filter((n) => n.markedForRemoval && n.opacity === 0 && n.resting)
        .forEach((n) => {
          n._destroy(), e.removeChildView(n);
        });
    },
    filterFrameActionsForChild: yw,
    mixins: { apis: ["dragCoordinates"] },
  }),
  ww = ({ root: e, props: n }) => {
    (e.ref.list = e.appendChildView(e.createChildView(Aw))),
      (n.dragCoordinates = null),
      (n.overflowing = !1);
  },
  Dw = ({ root: e, props: n, action: i }) => {
    !e.query("GET_ITEM_INSERT_LOCATION_FREEDOM") ||
      (n.dragCoordinates = {
        left: i.position.scopeLeft - e.ref.list.rect.element.left,
        top:
          i.position.scopeTop -
          (e.rect.outer.top +
            e.rect.element.marginTop +
            e.rect.element.scrollTop),
      });
  },
  bw = ({ props: e }) => {
    e.dragCoordinates = null;
  },
  Cw = nt({ DID_DRAG: Dw, DID_END_DRAG: bw }),
  Lw = ({ root: e, props: n, actions: i }) => {
    if (
      (Cw({ root: e, props: n, actions: i }),
      (e.ref.list.dragCoordinates = n.dragCoordinates),
      n.overflowing &&
        !n.overflow &&
        ((n.overflowing = !1),
        (e.element.dataset.state = ""),
        (e.height = null)),
      n.overflow)
    ) {
      const s = Math.round(n.overflow);
      s !== e.height &&
        ((n.overflowing = !0),
        (e.element.dataset.state = "overflow"),
        (e.height = s));
    }
  },
  Pw = xe({
    create: ww,
    write: Lw,
    name: "list-scroller",
    mixins: {
      apis: ["overflow", "dragCoordinates"],
      styles: ["height", "translateY"],
      animations: { translateY: "spring" },
    },
  }),
  Gt = (e, n, i, s = "") => {
    i ? Pe(e, n, s) : e.removeAttribute(n);
  },
  Mw = (e) => {
    if (!(!e || e.value === "")) {
      try {
        e.value = "";
      } catch {}
      if (e.value) {
        const n = sn("form"),
          i = e.parentNode,
          s = e.nextSibling;
        n.appendChild(e),
          n.reset(),
          s ? i.insertBefore(e, s) : i.appendChild(e);
      }
    }
  },
  xw = ({ root: e, props: n }) => {
    (e.element.id = `filepond--browser-${n.id}`),
      Pe(e.element, "name", e.query("GET_NAME")),
      Pe(e.element, "aria-controls", `filepond--assistant-${n.id}`),
      Pe(e.element, "aria-labelledby", `filepond--drop-label-${n.id}`),
      kh({ root: e, action: { value: e.query("GET_ACCEPTED_FILE_TYPES") } }),
      Qh({ root: e, action: { value: e.query("GET_ALLOW_MULTIPLE") } }),
      Zh({ root: e, action: { value: e.query("GET_ALLOW_DIRECTORIES_ONLY") } }),
      ll({ root: e }),
      Jh({ root: e, action: { value: e.query("GET_REQUIRED") } }),
      jh({ root: e, action: { value: e.query("GET_CAPTURE_METHOD") } }),
      (e.ref.handleChange = (i) => {
        if (!e.element.value) return;
        const s = Array.from(e.element.files).map(
          (a) => ((a._relativePath = a.webkitRelativePath), a)
        );
        setTimeout(() => {
          n.onload(s), Mw(e.element);
        }, 250);
      }),
      e.element.addEventListener("change", e.ref.handleChange);
  },
  kh = ({ root: e, action: n }) => {
    !e.query("GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE") ||
      Gt(e.element, "accept", !!n.value, n.value ? n.value.join(",") : "");
  },
  Qh = ({ root: e, action: n }) => {
    Gt(e.element, "multiple", n.value);
  },
  Zh = ({ root: e, action: n }) => {
    Gt(e.element, "webkitdirectory", n.value);
  },
  ll = ({ root: e }) => {
    const n = e.query("GET_DISABLED"),
      i = e.query("GET_ALLOW_BROWSE"),
      s = n || !i;
    Gt(e.element, "disabled", s);
  },
  Jh = ({ root: e, action: n }) => {
    n.value
      ? e.query("GET_TOTAL_ITEMS") === 0 && Gt(e.element, "required", !0)
      : Gt(e.element, "required", !1);
  },
  jh = ({ root: e, action: n }) => {
    Gt(e.element, "capture", !!n.value, n.value === !0 ? "" : n.value);
  },
  Bd = ({ root: e }) => {
    const { element: n } = e;
    e.query("GET_TOTAL_ITEMS") > 0
      ? (Gt(n, "required", !1), Gt(n, "name", !1))
      : (Gt(n, "name", !0, e.query("GET_NAME")),
        e.query("GET_CHECK_VALIDITY") && n.setCustomValidity(""),
        e.query("GET_REQUIRED") && Gt(n, "required", !0));
  },
  Nw = ({ root: e }) => {
    !e.query("GET_CHECK_VALIDITY") ||
      e.element.setCustomValidity(e.query("GET_LABEL_INVALID_FIELD"));
  },
  Fw = xe({
    tag: "input",
    name: "browser",
    ignoreRect: !0,
    ignoreRectUpdate: !0,
    attributes: { type: "file" },
    create: xw,
    destroy: ({ root: e }) => {
      e.element.removeEventListener("change", e.ref.handleChange);
    },
    write: nt({
      DID_LOAD_ITEM: Bd,
      DID_REMOVE_ITEM: Bd,
      DID_THROW_ITEM_INVALID: Nw,
      DID_SET_DISABLED: ll,
      DID_SET_ALLOW_BROWSE: ll,
      DID_SET_ALLOW_DIRECTORIES_ONLY: Zh,
      DID_SET_ALLOW_MULTIPLE: Qh,
      DID_SET_ACCEPTED_FILE_TYPES: kh,
      DID_SET_CAPTURE_METHOD: jh,
      DID_SET_REQUIRED: Jh,
    }),
  }),
  Gd = { ENTER: 13, SPACE: 32 },
  Bw = ({ root: e, props: n }) => {
    const i = sn("label");
    Pe(i, "for", `filepond--browser-${n.id}`),
      Pe(i, "id", `filepond--drop-label-${n.id}`),
      Pe(i, "aria-hidden", "true"),
      (e.ref.handleKeyDown = (s) => {
        (s.keyCode === Gd.ENTER || s.keyCode === Gd.SPACE) &&
          (s.preventDefault(), e.ref.label.click());
      }),
      (e.ref.handleClick = (s) => {
        s.target === i || i.contains(s.target) || e.ref.label.click();
      }),
      i.addEventListener("keydown", e.ref.handleKeyDown),
      e.element.addEventListener("click", e.ref.handleClick),
      e_(i, n.caption),
      e.appendChild(i),
      (e.ref.label = i);
  },
  e_ = (e, n) => {
    e.innerHTML = n;
    const i = e.querySelector(".filepond--label-action");
    return i && Pe(i, "tabindex", "0"), n;
  },
  Gw = xe({
    name: "drop-label",
    ignoreRect: !0,
    create: Bw,
    destroy: ({ root: e }) => {
      e.ref.label.addEventListener("keydown", e.ref.handleKeyDown),
        e.element.removeEventListener("click", e.ref.handleClick);
    },
    write: nt({
      DID_SET_LABEL_IDLE: ({ root: e, action: n }) => {
        e_(e.ref.label, n.value);
      },
    }),
    mixins: {
      styles: ["opacity", "translateX", "translateY"],
      animations: {
        opacity: { type: "tween", duration: 150 },
        translateX: "spring",
        translateY: "spring",
      },
    },
  }),
  Uw = xe({
    name: "drip-blob",
    ignoreRect: !0,
    mixins: {
      styles: ["translateX", "translateY", "scaleX", "scaleY", "opacity"],
      animations: {
        scaleX: "spring",
        scaleY: "spring",
        translateX: "spring",
        translateY: "spring",
        opacity: { type: "tween", duration: 250 },
      },
    },
  }),
  $w = ({ root: e }) => {
    const n = e.rect.element.width * 0.5,
      i = e.rect.element.height * 0.5;
    e.ref.blob = e.appendChildView(
      e.createChildView(Uw, {
        opacity: 0,
        scaleX: 2.5,
        scaleY: 2.5,
        translateX: n,
        translateY: i,
      })
    );
  },
  qw = ({ root: e, action: n }) => {
    if (!e.ref.blob) {
      $w({ root: e });
      return;
    }
    (e.ref.blob.translateX = n.position.scopeLeft),
      (e.ref.blob.translateY = n.position.scopeTop),
      (e.ref.blob.scaleX = 1),
      (e.ref.blob.scaleY = 1),
      (e.ref.blob.opacity = 1);
  },
  Ww = ({ root: e }) => {
    !e.ref.blob || (e.ref.blob.opacity = 0);
  },
  Hw = ({ root: e }) => {
    !e.ref.blob ||
      ((e.ref.blob.scaleX = 2.5),
      (e.ref.blob.scaleY = 2.5),
      (e.ref.blob.opacity = 0));
  },
  Vw = ({ root: e, props: n, actions: i }) => {
    Yw({ root: e, props: n, actions: i });
    const { blob: s } = e.ref;
    i.length === 0 &&
      s &&
      s.opacity === 0 &&
      (e.removeChildView(s), (e.ref.blob = null));
  },
  Yw = nt({ DID_DRAG: qw, DID_DROP: Hw, DID_END_DRAG: Ww }),
  zw = xe({ ignoreRect: !0, ignoreRectUpdate: !0, name: "drip", write: Vw }),
  t_ = (e, n) => {
    try {
      const i = new DataTransfer();
      n.forEach((s) => {
        s instanceof File
          ? i.items.add(s)
          : i.items.add(new File([s], s.name, { type: s.type }));
      }),
        (e.files = i.files);
    } catch {
      return !1;
    }
    return !0;
  },
  Xw = ({ root: e }) => (e.ref.fields = {}),
  Ws = (e, n) => e.ref.fields[n],
  Ql = (e) => {
    e.query("GET_ACTIVE_ITEMS").forEach((n) => {
      !e.ref.fields[n.id] || e.element.appendChild(e.ref.fields[n.id]);
    });
  },
  Ud = ({ root: e }) => Ql(e),
  Kw = ({ root: e, action: n }) => {
    const a =
        !(e.query("GET_ITEM", n.id).origin === Be.LOCAL) &&
        e.query("SHOULD_UPDATE_FILE_INPUT"),
      u = sn("input");
    (u.type = a ? "file" : "hidden"),
      (u.name = e.query("GET_NAME")),
      (u.disabled = e.query("GET_DISABLED")),
      (e.ref.fields[n.id] = u),
      Ql(e);
  },
  kw = ({ root: e, action: n }) => {
    const i = Ws(e, n.id);
    if (
      !i ||
      (n.serverFileReference !== null && (i.value = n.serverFileReference),
      !e.query("SHOULD_UPDATE_FILE_INPUT"))
    )
      return;
    const s = e.query("GET_ITEM", n.id);
    t_(i, [s.file]);
  },
  Qw = ({ root: e, action: n }) => {
    !e.query("SHOULD_UPDATE_FILE_INPUT") ||
      setTimeout(() => {
        const i = Ws(e, n.id);
        !i || t_(i, [n.file]);
      }, 0);
  },
  Zw = ({ root: e }) => {
    e.element.disabled = e.query("GET_DISABLED");
  },
  Jw = ({ root: e, action: n }) => {
    const i = Ws(e, n.id);
    !i ||
      (i.parentNode && i.parentNode.removeChild(i), delete e.ref.fields[n.id]);
  },
  jw = ({ root: e, action: n }) => {
    const i = Ws(e, n.id);
    !i ||
      (n.value === null ? i.removeAttribute("value") : (i.value = n.value),
      Ql(e));
  },
  eD = nt({
    DID_SET_DISABLED: Zw,
    DID_ADD_ITEM: Kw,
    DID_LOAD_ITEM: kw,
    DID_REMOVE_ITEM: Jw,
    DID_DEFINE_VALUE: jw,
    DID_PREPARE_OUTPUT: Qw,
    DID_REORDER_ITEMS: Ud,
    DID_SORT_ITEMS: Ud,
  }),
  tD = xe({
    tag: "fieldset",
    name: "data",
    create: Xw,
    write: eD,
    ignoreRect: !0,
  }),
  nD = (e) => ("getRootNode" in e ? e.getRootNode() : document),
  rD = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg", "tiff"],
  iD = ["css", "csv", "html", "txt"],
  sD = { zip: "zip|compressed", epub: "application/epub+zip" },
  n_ = (e = "") => (
    (e = e.toLowerCase()),
    rD.includes(e)
      ? "image/" + (e === "jpg" ? "jpeg" : e === "svg" ? "svg+xml" : e)
      : iD.includes(e)
      ? "text/" + e
      : sD[e] || ""
  ),
  Zl = (e) =>
    new Promise((n, i) => {
      const s = pD(e);
      if (s.length && !oD(e)) return n(s);
      aD(e).then(n);
    }),
  oD = (e) => (e.files ? e.files.length > 0 : !1),
  aD = (e) =>
    new Promise((n, i) => {
      const s = (e.items ? Array.from(e.items) : [])
        .filter((a) => lD(a))
        .map((a) => uD(a));
      if (!s.length) {
        n(e.files ? Array.from(e.files) : []);
        return;
      }
      Promise.all(s)
        .then((a) => {
          const u = [];
          a.forEach((l) => {
            u.push.apply(u, l);
          }),
            n(
              u
                .filter((l) => l)
                .map(
                  (l) => (
                    l._relativePath || (l._relativePath = l.webkitRelativePath),
                    l
                  )
                )
            );
        })
        .catch(console.error);
    }),
  lD = (e) => {
    if (r_(e)) {
      const n = Jl(e);
      if (n) return n.isFile || n.isDirectory;
    }
    return e.kind === "file";
  },
  uD = (e) =>
    new Promise((n, i) => {
      if (dD(e)) {
        cD(Jl(e)).then(n).catch(i);
        return;
      }
      n([e.getAsFile()]);
    }),
  cD = (e) =>
    new Promise((n, i) => {
      const s = [];
      let a = 0,
        u = 0;
      const l = () => {
          u === 0 && a === 0 && n(s);
        },
        f = (p) => {
          a++;
          const g = p.createReader(),
            E = () => {
              g.readEntries((R) => {
                if (R.length === 0) {
                  a--, l();
                  return;
                }
                R.forEach((T) => {
                  T.isDirectory
                    ? f(T)
                    : (u++,
                      T.file((A) => {
                        const S = fD(A);
                        T.fullPath && (S._relativePath = T.fullPath),
                          s.push(S),
                          u--,
                          l();
                      }));
                }),
                  E();
              }, i);
            };
          E();
        };
      f(e);
    }),
  fD = (e) => {
    if (e.type.length) return e;
    const n = e.lastModifiedDate,
      i = e.name,
      s = n_(qs(e.name));
    return (
      s.length &&
        ((e = e.slice(0, e.size, s)), (e.name = i), (e.lastModifiedDate = n)),
      e
    );
  },
  dD = (e) => r_(e) && (Jl(e) || {}).isDirectory,
  r_ = (e) => "webkitGetAsEntry" in e,
  Jl = (e) => e.webkitGetAsEntry(),
  pD = (e) => {
    let n = [];
    try {
      if (((n = _D(e)), n.length)) return n;
      n = hD(e);
    } catch {}
    return n;
  },
  hD = (e) => {
    let n = e.getData("url");
    return typeof n == "string" && n.length ? [n] : [];
  },
  _D = (e) => {
    let n = e.getData("text/html");
    if (typeof n == "string" && n.length) {
      const i = n.match(/src\s*=\s*"(.+?)"/);
      if (i) return [i[1]];
    }
    return [];
  },
  Es = [],
  $n = (e) => ({
    pageLeft: e.pageX,
    pageTop: e.pageY,
    scopeLeft: e.offsetX || e.layerX,
    scopeTop: e.offsetY || e.layerY,
  }),
  gD = (e, n, i) => {
    const s = ED(n),
      a = {
        element: e,
        filterElement: i,
        state: null,
        ondrop: () => {},
        onenter: () => {},
        ondrag: () => {},
        onexit: () => {},
        onload: () => {},
        allowdrop: () => {},
      };
    return (a.destroy = s.addListener(a)), a;
  },
  ED = (e) => {
    const n = Es.find((s) => s.element === e);
    if (n) return n;
    const i = mD(e);
    return Es.push(i), i;
  },
  mD = (e) => {
    const n = [],
      i = { dragenter: TD, dragover: vD, dragleave: OD, drop: RD },
      s = {};
    we(i, (u, l) => {
      (s[u] = l(e, n)), e.addEventListener(u, s[u], !1);
    });
    const a = {
      element: e,
      addListener: (u) => (
        n.push(u),
        () => {
          n.splice(n.indexOf(u), 1),
            n.length === 0 &&
              (Es.splice(Es.indexOf(a), 1),
              we(i, (l) => {
                e.removeEventListener(l, s[l], !1);
              }));
        }
      ),
    };
    return a;
  },
  ID = (e, n) => (
    "elementFromPoint" in e || (e = document), e.elementFromPoint(n.x, n.y)
  ),
  jl = (e, n) => {
    const i = nD(n),
      s = ID(i, {
        x: e.pageX - window.pageXOffset,
        y: e.pageY - window.pageYOffset,
      });
    return s === n || n.contains(s);
  };
let i_ = null;
const rs = (e, n) => {
    try {
      e.dropEffect = n;
    } catch {}
  },
  TD = (e, n) => (i) => {
    i.preventDefault(),
      (i_ = i.target),
      n.forEach((s) => {
        const { element: a, onenter: u } = s;
        jl(i, a) && ((s.state = "enter"), u($n(i)));
      });
  },
  vD = (e, n) => (i) => {
    i.preventDefault();
    const s = i.dataTransfer;
    Zl(s).then((a) => {
      let u = !1;
      n.some((l) => {
        const {
          filterElement: f,
          element: p,
          onenter: g,
          onexit: E,
          ondrag: R,
          allowdrop: T,
        } = l;
        rs(s, "copy");
        const A = T(a);
        if (!A) {
          rs(s, "none");
          return;
        }
        if (jl(i, p)) {
          if (((u = !0), l.state === null)) {
            (l.state = "enter"), g($n(i));
            return;
          }
          if (((l.state = "over"), f && !A)) {
            rs(s, "none");
            return;
          }
          R($n(i));
        } else
          f && !u && rs(s, "none"), l.state && ((l.state = null), E($n(i)));
      });
    });
  },
  RD = (e, n) => (i) => {
    i.preventDefault();
    const s = i.dataTransfer;
    Zl(s).then((a) => {
      n.forEach((u) => {
        const {
          filterElement: l,
          element: f,
          ondrop: p,
          onexit: g,
          allowdrop: E,
        } = u;
        if (((u.state = null), !(l && !jl(i, f)))) {
          if (!E(a)) return g($n(i));
          p($n(i), a);
        }
      });
    });
  },
  OD = (e, n) => (i) => {
    i_ === i.target &&
      n.forEach((s) => {
        const { onexit: a } = s;
        (s.state = null), a($n(i));
      });
  },
  SD = (e, n, i) => {
    e.classList.add("filepond--hopper");
    const {
        catchesDropsOnPage: s,
        requiresDropOnElement: a,
        filterItems: u = (E) => E,
      } = i,
      l = gD(e, s ? document.documentElement : e, a);
    let f = "",
      p = "";
    (l.allowdrop = (E) => n(u(E))),
      (l.ondrop = (E, R) => {
        const T = u(R);
        if (!n(T)) {
          g.ondragend(E);
          return;
        }
        (p = "drag-drop"), g.onload(T, E);
      }),
      (l.ondrag = (E) => {
        g.ondrag(E);
      }),
      (l.onenter = (E) => {
        (p = "drag-over"), g.ondragstart(E);
      }),
      (l.onexit = (E) => {
        (p = "drag-exit"), g.ondragend(E);
      });
    const g = {
      updateHopperState: () => {
        f !== p && ((e.dataset.hopperState = p), (f = p));
      },
      onload: () => {},
      ondragstart: () => {},
      ondrag: () => {},
      ondragend: () => {},
      destroy: () => {
        l.destroy();
      },
    };
    return g;
  };
let ul = !1;
const fr = [],
  s_ = (e) => {
    const n = document.activeElement;
    if (n && /textarea|input/i.test(n.nodeName)) {
      let i = !1,
        s = n;
      for (; s !== document.body; ) {
        if (s.classList.contains("filepond--root")) {
          i = !0;
          break;
        }
        s = s.parentNode;
      }
      if (!i) return;
    }
    Zl(e.clipboardData).then((i) => {
      !i.length || fr.forEach((s) => s(i));
    });
  },
  yD = (e) => {
    fr.includes(e) ||
      (fr.push(e), !ul && ((ul = !0), document.addEventListener("paste", s_)));
  },
  AD = (e) => {
    Vl(fr, fr.indexOf(e)),
      fr.length === 0 && (document.removeEventListener("paste", s_), (ul = !1));
  },
  wD = () => {
    const e = (i) => {
        n.onload(i);
      },
      n = {
        destroy: () => {
          AD(e);
        },
        onload: () => {},
      };
    return yD(e), n;
  },
  DD = ({ root: e, props: n }) => {
    (e.element.id = `filepond--assistant-${n.id}`),
      Pe(e.element, "role", "status"),
      Pe(e.element, "aria-live", "polite"),
      Pe(e.element, "aria-relevant", "additions");
  };
let $d = null,
  qd = null;
const Ba = [],
  Hs = (e, n) => {
    e.element.textContent = n;
  },
  bD = (e) => {
    e.element.textContent = "";
  },
  o_ = (e, n, i) => {
    const s = e.query("GET_TOTAL_ITEMS");
    Hs(
      e,
      `${i} ${n}, ${s} ${
        s === 1
          ? e.query("GET_LABEL_FILE_COUNT_SINGULAR")
          : e.query("GET_LABEL_FILE_COUNT_PLURAL")
      }`
    ),
      clearTimeout(qd),
      (qd = setTimeout(() => {
        bD(e);
      }, 1500));
  },
  a_ = (e) => e.element.parentNode.contains(document.activeElement),
  CD = ({ root: e, action: n }) => {
    if (!a_(e)) return;
    e.element.textContent = "";
    const i = e.query("GET_ITEM", n.id);
    Ba.push(i.filename),
      clearTimeout($d),
      ($d = setTimeout(() => {
        o_(e, Ba.join(", "), e.query("GET_LABEL_FILE_ADDED")), (Ba.length = 0);
      }, 750));
  },
  LD = ({ root: e, action: n }) => {
    if (!a_(e)) return;
    const i = n.item;
    o_(e, i.filename, e.query("GET_LABEL_FILE_REMOVED"));
  },
  PD = ({ root: e, action: n }) => {
    const s = e.query("GET_ITEM", n.id).filename,
      a = e.query("GET_LABEL_FILE_PROCESSING_COMPLETE");
    Hs(e, `${s} ${a}`);
  },
  Wd = ({ root: e, action: n }) => {
    const s = e.query("GET_ITEM", n.id).filename,
      a = e.query("GET_LABEL_FILE_PROCESSING_ABORTED");
    Hs(e, `${s} ${a}`);
  },
  is = ({ root: e, action: n }) => {
    const s = e.query("GET_ITEM", n.id).filename;
    Hs(e, `${n.status.main} ${s} ${n.status.sub}`);
  },
  MD = xe({
    create: DD,
    ignoreRect: !0,
    ignoreRectUpdate: !0,
    write: nt({
      DID_LOAD_ITEM: CD,
      DID_REMOVE_ITEM: LD,
      DID_COMPLETE_ITEM_PROCESSING: PD,
      DID_ABORT_ITEM_PROCESSING: Wd,
      DID_REVERT_ITEM_PROCESSING: Wd,
      DID_THROW_ITEM_REMOVE_ERROR: is,
      DID_THROW_ITEM_LOAD_ERROR: is,
      DID_THROW_ITEM_INVALID: is,
      DID_THROW_ITEM_PROCESSING_ERROR: is,
    }),
    tag: "span",
    name: "assistant",
  }),
  l_ = (e, n = "-") =>
    e.replace(new RegExp(`${n}.`, "g"), (i) => i.charAt(1).toUpperCase()),
  u_ = (e, n = 16, i = !0) => {
    let s = Date.now(),
      a = null;
    return (...u) => {
      clearTimeout(a);
      const l = Date.now() - s,
        f = () => {
          (s = Date.now()), e(...u);
        };
      l < n ? i || (a = setTimeout(f, n - l)) : f();
    };
  },
  xD = 1e6,
  ms = (e) => e.preventDefault(),
  ND = ({ root: e, props: n }) => {
    const i = e.query("GET_ID");
    i && (e.element.id = i);
    const s = e.query("GET_CLASS_NAME");
    s &&
      s
        .split(" ")
        .filter((p) => p.length)
        .forEach((p) => {
          e.element.classList.add(p);
        }),
      (e.ref.label = e.appendChildView(
        e.createChildView(Gw, {
          ...n,
          translateY: null,
          caption: e.query("GET_LABEL_IDLE"),
        })
      )),
      (e.ref.list = e.appendChildView(
        e.createChildView(Pw, { translateY: null })
      )),
      (e.ref.panel = e.appendChildView(
        e.createChildView(Kh, { name: "panel-root" })
      )),
      (e.ref.assistant = e.appendChildView(e.createChildView(MD, { ...n }))),
      (e.ref.data = e.appendChildView(e.createChildView(tD, { ...n }))),
      (e.ref.measure = sn("div")),
      (e.ref.measure.style.height = "100%"),
      e.element.appendChild(e.ref.measure),
      (e.ref.bounds = null),
      e
        .query("GET_STYLES")
        .filter((p) => !rn(p.value))
        .map(({ name: p, value: g }) => {
          e.element.dataset[p] = g;
        }),
      (e.ref.widthPrevious = null),
      (e.ref.widthUpdated = u_(() => {
        (e.ref.updateHistory = []), e.dispatch("DID_RESIZE_ROOT");
      }, 250)),
      (e.ref.previousAspectRatio = null),
      (e.ref.updateHistory = []);
    const a = window.matchMedia("(pointer: fine) and (hover: hover)").matches,
      u = "PointerEvent" in window;
    e.query("GET_ALLOW_REORDER") &&
      u &&
      !a &&
      (e.element.addEventListener("touchmove", ms, { passive: !1 }),
      e.element.addEventListener("gesturestart", ms));
    const l = e.query("GET_CREDITS");
    if (l.length === 2) {
      const p = document.createElement("a");
      (p.className = "filepond--credits"),
        p.setAttribute("aria-hidden", "true"),
        (p.href = l[0]),
        (p.tabindex = -1),
        (p.target = "_blank"),
        (p.rel = "noopener noreferrer"),
        (p.textContent = l[1]),
        e.element.appendChild(p),
        (e.ref.credits = p);
    }
  },
  FD = ({ root: e, props: n, actions: i }) => {
    if (
      (qD({ root: e, props: n, actions: i }),
      i
        .filter((X) => /^DID_SET_STYLE_/.test(X.type))
        .filter((X) => !rn(X.data.value))
        .map(({ type: X, data: le }) => {
          const W = l_(X.substring(8).toLowerCase(), "_");
          (e.element.dataset[W] = le.value), e.invalidateLayout();
        }),
      e.rect.element.hidden)
    )
      return;
    e.rect.element.width !== e.ref.widthPrevious &&
      ((e.ref.widthPrevious = e.rect.element.width), e.ref.widthUpdated());
    let s = e.ref.bounds;
    s ||
      ((s = e.ref.bounds = UD(e)),
      e.element.removeChild(e.ref.measure),
      (e.ref.measure = null));
    const { hopper: a, label: u, list: l, panel: f } = e.ref;
    a && a.updateHopperState();
    const p = e.query("GET_PANEL_ASPECT_RATIO"),
      g = e.query("GET_ALLOW_MULTIPLE"),
      E = e.query("GET_TOTAL_ITEMS"),
      R = g ? e.query("GET_MAX_FILES") || xD : 1,
      T = E === R,
      A = i.find((X) => X.type === "DID_ADD_ITEM");
    if (T && A) {
      const X = A.data.interactionMethod;
      (u.opacity = 0),
        g
          ? (u.translateY = -40)
          : X === Dt.API
          ? (u.translateX = 40)
          : X === Dt.BROWSE
          ? (u.translateY = 40)
          : (u.translateY = 30);
    } else T || ((u.opacity = 1), (u.translateX = 0), (u.translateY = 0));
    const S = BD(e),
      L = GD(e),
      D = u.rect.element.height,
      P = !g || T ? 0 : D,
      G = T ? l.rect.element.marginTop : 0,
      $ = E === 0 ? 0 : l.rect.element.marginBottom,
      H = P + G + L.visual + $,
      M = P + G + L.bounds + $;
    if (
      ((l.translateY = Math.max(0, P - l.rect.element.marginTop) - S.top), p)
    ) {
      const X = e.rect.element.width,
        le = X * p;
      p !== e.ref.previousAspectRatio &&
        ((e.ref.previousAspectRatio = p), (e.ref.updateHistory = []));
      const W = e.ref.updateHistory;
      W.push(X);
      const Q = 2;
      if (W.length > Q * 2) {
        const K = W.length,
          Z = K - 10;
        let Te = 0;
        for (let B = K; B >= Z; B--)
          if ((W[B] === W[B - 2] && Te++, Te >= Q)) return;
      }
      (f.scalable = !1), (f.height = le);
      const ue = le - P - ($ - S.bottom) - (T ? G : 0);
      L.visual > ue ? (l.overflow = ue) : (l.overflow = null), (e.height = le);
    } else if (s.fixedHeight) {
      f.scalable = !1;
      const X = s.fixedHeight - P - ($ - S.bottom) - (T ? G : 0);
      L.visual > X ? (l.overflow = X) : (l.overflow = null);
    } else if (s.cappedHeight) {
      const X = H >= s.cappedHeight,
        le = Math.min(s.cappedHeight, H);
      (f.scalable = !0), (f.height = X ? le : le - S.top - S.bottom);
      const W = le - P - ($ - S.bottom) - (T ? G : 0);
      H > s.cappedHeight && L.visual > W
        ? (l.overflow = W)
        : (l.overflow = null),
        (e.height = Math.min(s.cappedHeight, M - S.top - S.bottom));
    } else {
      const X = E > 0 ? S.top + S.bottom : 0;
      (f.scalable = !0),
        (f.height = Math.max(D, H - X)),
        (e.height = Math.max(D, M - X));
    }
    e.ref.credits &&
      f.heightCurrent &&
      (e.ref.credits.style.transform = `translateY(${f.heightCurrent}px)`);
  },
  BD = (e) => {
    const n = e.ref.list.childViews[0].childViews[0];
    return n
      ? { top: n.rect.element.marginTop, bottom: n.rect.element.marginBottom }
      : { top: 0, bottom: 0 };
  },
  GD = (e) => {
    let n = 0,
      i = 0;
    const s = e.ref.list,
      a = s.childViews[0],
      u = a.childViews.filter((G) => G.rect.element.height),
      l = e
        .query("GET_ACTIVE_ITEMS")
        .map((G) => u.find(($) => $.id === G.id))
        .filter((G) => G);
    if (l.length === 0) return { visual: n, bounds: i };
    const f = a.rect.element.width,
      p = kl(a, l, s.dragCoordinates),
      g = l[0].rect.element,
      E = g.marginTop + g.marginBottom,
      R = g.marginLeft + g.marginRight,
      T = g.width + R,
      A = g.height + E,
      S = typeof p < "u" && p >= 0 ? 1 : 0,
      L = l.find((G) => G.markedForRemoval && G.opacity < 0.45) ? -1 : 0,
      D = l.length + S + L,
      P = Kl(f, T);
    return (
      P === 1
        ? l.forEach((G) => {
            const $ = G.rect.element.height + E;
            (i += $), (n += $ * G.opacity);
          })
        : ((i = Math.ceil(D / P) * A), (n = i)),
      { visual: n, bounds: i }
    );
  },
  UD = (e) => {
    const n = e.ref.measureHeight || null;
    return {
      cappedHeight: parseInt(e.style.maxHeight, 10) || null,
      fixedHeight: n === 0 ? null : n,
    };
  },
  eu = (e, n) => {
    const i = e.query("GET_ALLOW_REPLACE"),
      s = e.query("GET_ALLOW_MULTIPLE"),
      a = e.query("GET_TOTAL_ITEMS");
    let u = e.query("GET_MAX_FILES");
    const l = n.length;
    return !s && l > 1
      ? (e.dispatch("DID_THROW_MAX_FILES", {
          source: n,
          error: Ce("warning", 0, "Max files"),
        }),
        !0)
      : ((u = s ? u : 1),
        !s && i
          ? !1
          : Rr(u) && a + l > u
          ? (e.dispatch("DID_THROW_MAX_FILES", {
              source: n,
              error: Ce("warning", 0, "Max files"),
            }),
            !0)
          : !1);
  },
  $D = (e, n, i) => {
    const s = e.childViews[0];
    return kl(s, n, {
      left: i.scopeLeft - s.rect.element.left,
      top:
        i.scopeTop -
        (e.rect.outer.top +
          e.rect.element.marginTop +
          e.rect.element.scrollTop),
    });
  },
  Hd = (e) => {
    const n = e.query("GET_ALLOW_DROP"),
      i = e.query("GET_DISABLED"),
      s = n && !i;
    if (s && !e.ref.hopper) {
      const a = SD(
        e.element,
        (u) => {
          const l = e.query("GET_BEFORE_DROP_FILE") || (() => !0);
          return e.query("GET_DROP_VALIDATION")
            ? u.every(
                (p) =>
                  Hn("ALLOW_HOPPER_ITEM", p, { query: e.query }).every(
                    (g) => g === !0
                  ) && l(p)
              )
            : !0;
        },
        {
          filterItems: (u) => {
            const l = e.query("GET_IGNORED_FILES");
            return u.filter((f) =>
              mr(f) ? !l.includes(f.name.toLowerCase()) : !0
            );
          },
          catchesDropsOnPage: e.query("GET_DROP_ON_PAGE"),
          requiresDropOnElement: e.query("GET_DROP_ON_ELEMENT"),
        }
      );
      (a.onload = (u, l) => {
        const p = e.ref.list.childViews[0].childViews.filter(
            (E) => E.rect.element.height
          ),
          g = e
            .query("GET_ACTIVE_ITEMS")
            .map((E) => p.find((R) => R.id === E.id))
            .filter((E) => E);
        Ft("ADD_ITEMS", u, { dispatch: e.dispatch }).then((E) => {
          if (eu(e, E)) return !1;
          e.dispatch("ADD_ITEMS", {
            items: E,
            index: $D(e.ref.list, g, l),
            interactionMethod: Dt.DROP,
          });
        }),
          e.dispatch("DID_DROP", { position: l }),
          e.dispatch("DID_END_DRAG", { position: l });
      }),
        (a.ondragstart = (u) => {
          e.dispatch("DID_START_DRAG", { position: u });
        }),
        (a.ondrag = u_((u) => {
          e.dispatch("DID_DRAG", { position: u });
        })),
        (a.ondragend = (u) => {
          e.dispatch("DID_END_DRAG", { position: u });
        }),
        (e.ref.hopper = a),
        (e.ref.drip = e.appendChildView(e.createChildView(zw)));
    } else
      !s &&
        e.ref.hopper &&
        (e.ref.hopper.destroy(),
        (e.ref.hopper = null),
        e.removeChildView(e.ref.drip));
  },
  Vd = (e, n) => {
    const i = e.query("GET_ALLOW_BROWSE"),
      s = e.query("GET_DISABLED"),
      a = i && !s;
    a && !e.ref.browser
      ? (e.ref.browser = e.appendChildView(
          e.createChildView(Fw, {
            ...n,
            onload: (u) => {
              Ft("ADD_ITEMS", u, { dispatch: e.dispatch }).then((l) => {
                if (eu(e, l)) return !1;
                e.dispatch("ADD_ITEMS", {
                  items: l,
                  index: -1,
                  interactionMethod: Dt.BROWSE,
                });
              });
            },
          }),
          0
        ))
      : !a &&
        e.ref.browser &&
        (e.removeChildView(e.ref.browser), (e.ref.browser = null));
  },
  Yd = (e) => {
    const n = e.query("GET_ALLOW_PASTE"),
      i = e.query("GET_DISABLED"),
      s = n && !i;
    s && !e.ref.paster
      ? ((e.ref.paster = wD()),
        (e.ref.paster.onload = (a) => {
          Ft("ADD_ITEMS", a, { dispatch: e.dispatch }).then((u) => {
            if (eu(e, u)) return !1;
            e.dispatch("ADD_ITEMS", {
              items: u,
              index: -1,
              interactionMethod: Dt.PASTE,
            });
          });
        }))
      : !s && e.ref.paster && (e.ref.paster.destroy(), (e.ref.paster = null));
  },
  qD = nt({
    DID_SET_ALLOW_BROWSE: ({ root: e, props: n }) => {
      Vd(e, n);
    },
    DID_SET_ALLOW_DROP: ({ root: e }) => {
      Hd(e);
    },
    DID_SET_ALLOW_PASTE: ({ root: e }) => {
      Yd(e);
    },
    DID_SET_DISABLED: ({ root: e, props: n }) => {
      Hd(e),
        Yd(e),
        Vd(e, n),
        e.query("GET_DISABLED")
          ? (e.element.dataset.disabled = "disabled")
          : e.element.removeAttribute("data-disabled");
    },
  }),
  WD = xe({
    name: "root",
    read: ({ root: e }) => {
      e.ref.measure && (e.ref.measureHeight = e.ref.measure.offsetHeight);
    },
    create: ND,
    write: FD,
    destroy: ({ root: e }) => {
      e.ref.paster && e.ref.paster.destroy(),
        e.ref.hopper && e.ref.hopper.destroy(),
        e.element.removeEventListener("touchmove", ms),
        e.element.removeEventListener("gesturestart", ms);
    },
    mixins: { styles: ["height"] },
  }),
  HD = (e = {}) => {
    let n = null;
    const i = gs(),
      s = oy(Yy(i), [uA, Ky(i)], [xA, Xy(i)]);
    s.dispatch("SET_OPTIONS", { options: e });
    const a = () => {
      document.hidden || s.dispatch("KICK");
    };
    document.addEventListener("visibilitychange", a);
    let u = null,
      l = !1,
      f = !1,
      p = null,
      g = null;
    const E = () => {
      l || (l = !0),
        clearTimeout(u),
        (u = setTimeout(() => {
          (l = !1),
            (p = null),
            (g = null),
            f && ((f = !1), s.dispatch("DID_STOP_RESIZE"));
        }, 500));
    };
    window.addEventListener("resize", E);
    const R = WD(s, { id: Hl() });
    let T = !1,
      A = !1;
    const S = {
        _read: () => {
          l &&
            ((g = window.innerWidth),
            p || (p = g),
            !f && g !== p && (s.dispatch("DID_START_RESIZE"), (f = !0))),
            A && T && (T = R.element.offsetParent === null),
            !T && (R._read(), (A = R.rect.element.hidden));
        },
        _write: (N) => {
          const U = s.processActionQueue().filter((Y) => !/^SET_/.test(Y.type));
          (T && !U.length) ||
            (G(U),
            (T = R._write(N, U, f)),
            Zy(s.query("GET_ITEMS")),
            T && s.processDispatchQueue());
        },
      },
      L = (N) => (U) => {
        const Y = { type: N };
        if (!U) return Y;
        if (
          (U.hasOwnProperty("error") &&
            (Y.error = U.error ? { ...U.error } : null),
          U.status && (Y.status = { ...U.status }),
          U.file && (Y.output = U.file),
          U.source)
        )
          Y.file = U.source;
        else if (U.item || U.id) {
          const k = U.item ? U.item : s.query("GET_ITEM", U.id);
          Y.file = k ? at(k) : null;
        }
        return (
          U.items && (Y.items = U.items.map(at)),
          /progress/.test(N) && (Y.progress = U.progress),
          U.hasOwnProperty("origin") &&
            U.hasOwnProperty("target") &&
            ((Y.origin = U.origin), (Y.target = U.target)),
          Y
        );
      },
      D = {
        DID_DESTROY: L("destroy"),
        DID_INIT: L("init"),
        DID_THROW_MAX_FILES: L("warning"),
        DID_INIT_ITEM: L("initfile"),
        DID_START_ITEM_LOAD: L("addfilestart"),
        DID_UPDATE_ITEM_LOAD_PROGRESS: L("addfileprogress"),
        DID_LOAD_ITEM: L("addfile"),
        DID_THROW_ITEM_INVALID: [L("error"), L("addfile")],
        DID_THROW_ITEM_LOAD_ERROR: [L("error"), L("addfile")],
        DID_THROW_ITEM_REMOVE_ERROR: [L("error"), L("removefile")],
        DID_PREPARE_OUTPUT: L("preparefile"),
        DID_START_ITEM_PROCESSING: L("processfilestart"),
        DID_UPDATE_ITEM_PROCESS_PROGRESS: L("processfileprogress"),
        DID_ABORT_ITEM_PROCESSING: L("processfileabort"),
        DID_COMPLETE_ITEM_PROCESSING: L("processfile"),
        DID_COMPLETE_ITEM_PROCESSING_ALL: L("processfiles"),
        DID_REVERT_ITEM_PROCESSING: L("processfilerevert"),
        DID_THROW_ITEM_PROCESSING_ERROR: [L("error"), L("processfile")],
        DID_REMOVE_ITEM: L("removefile"),
        DID_UPDATE_ITEMS: L("updatefiles"),
        DID_ACTIVATE_ITEM: L("activatefile"),
        DID_REORDER_ITEMS: L("reorderfiles"),
      },
      P = (N) => {
        const U = { pond: fe, ...N };
        delete U.type,
          R.element.dispatchEvent(
            new CustomEvent(`FilePond:${N.type}`, {
              detail: U,
              bubbles: !0,
              cancelable: !0,
              composed: !0,
            })
          );
        const Y = [];
        N.hasOwnProperty("error") && Y.push(N.error),
          N.hasOwnProperty("file") && Y.push(N.file);
        const k = ["type", "error", "file"];
        Object.keys(N)
          .filter((_e) => !k.includes(_e))
          .forEach((_e) => Y.push(N[_e])),
          fe.fire(N.type, ...Y);
        const he = s.query(`GET_ON${N.type.toUpperCase()}`);
        he && he(...Y);
      },
      G = (N) => {
        !N.length ||
          N.filter((U) => D[U.type]).forEach((U) => {
            const Y = D[U.type];
            (Array.isArray(Y) ? Y : [Y]).forEach((k) => {
              U.type === "DID_INIT_ITEM"
                ? P(k(U.data))
                : setTimeout(() => {
                    P(k(U.data));
                  }, 0);
            });
          });
      },
      $ = (N) => s.dispatch("SET_OPTIONS", { options: N }),
      H = (N) => s.query("GET_ACTIVE_ITEM", N),
      M = (N) =>
        new Promise((U, Y) => {
          s.dispatch("REQUEST_ITEM_PREPARE", {
            query: N,
            success: (k) => {
              U(k);
            },
            failure: (k) => {
              Y(k);
            },
          });
        }),
      X = (N, U = {}) =>
        new Promise((Y, k) => {
          Q([{ source: N, options: U }], { index: U.index })
            .then((he) => Y(he && he[0]))
            .catch(k);
        }),
      le = (N) => N.file && N.id,
      W = (N, U) => (
        typeof N == "object" && !le(N) && !U && ((U = N), (N = void 0)),
        s.dispatch("REMOVE_ITEM", { ...U, query: N }),
        s.query("GET_ACTIVE_ITEM", N) === null
      ),
      Q = (...N) =>
        new Promise((U, Y) => {
          const k = [],
            he = {};
          if (Bs(N[0])) k.push.apply(k, N[0]), Object.assign(he, N[1] || {});
          else {
            const _e = N[N.length - 1];
            typeof _e == "object" &&
              !(_e instanceof Blob) &&
              Object.assign(he, N.pop()),
              k.push(...N);
          }
          s.dispatch("ADD_ITEMS", {
            items: k,
            index: he.index,
            interactionMethod: Dt.API,
            success: U,
            failure: Y,
          });
        }),
      ue = () => s.query("GET_ACTIVE_ITEMS"),
      K = (N) =>
        new Promise((U, Y) => {
          s.dispatch("REQUEST_ITEM_PROCESSING", {
            query: N,
            success: (k) => {
              U(k);
            },
            failure: (k) => {
              Y(k);
            },
          });
        }),
      Z = (...N) => {
        const U = Array.isArray(N[0]) ? N[0] : N,
          Y = U.length ? U : ue();
        return Promise.all(Y.map(M));
      },
      Te = (...N) => {
        const U = Array.isArray(N[0]) ? N[0] : N;
        if (!U.length) {
          const Y = ue().filter(
            (k) =>
              !(k.status === ne.IDLE && k.origin === Be.LOCAL) &&
              k.status !== ne.PROCESSING &&
              k.status !== ne.PROCESSING_COMPLETE &&
              k.status !== ne.PROCESSING_REVERT_ERROR
          );
          return Promise.all(Y.map(K));
        }
        return Promise.all(U.map(K));
      },
      B = (...N) => {
        const U = Array.isArray(N[0]) ? N[0] : N;
        let Y;
        typeof U[U.length - 1] == "object"
          ? (Y = U.pop())
          : Array.isArray(N[0]) && (Y = N[1]);
        const k = ue();
        return U.length
          ? U.map((_e) => (Pn(_e) ? (k[_e] ? k[_e].id : null) : _e))
              .filter((_e) => _e)
              .map((_e) => W(_e, Y))
          : Promise.all(k.map((_e) => W(_e, Y)));
      },
      fe = {
        ...$s(),
        ...S,
        ...zy(s, i),
        setOptions: $,
        addFile: X,
        addFiles: Q,
        getFile: H,
        processFile: K,
        prepareFile: M,
        removeFile: W,
        moveFile: (N, U) => s.dispatch("MOVE_ITEM", { query: N, index: U }),
        getFiles: ue,
        processFiles: Te,
        removeFiles: B,
        prepareFiles: Z,
        sort: (N) => s.dispatch("SORT", { compare: N }),
        browse: () => {
          var N = R.element.querySelector("input[type=file]");
          N && N.click();
        },
        destroy: () => {
          fe.fire("destroy", R.element),
            s.dispatch("ABORT_ALL"),
            R._destroy(),
            window.removeEventListener("resize", E),
            document.removeEventListener("visibilitychange", a),
            s.dispatch("DID_DESTROY");
        },
        insertBefore: (N) => hd(R.element, N),
        insertAfter: (N) => _d(R.element, N),
        appendTo: (N) => N.appendChild(R.element),
        replaceElement: (N) => {
          hd(R.element, N), N.parentNode.removeChild(N), (n = N);
        },
        restoreElement: () => {
          !n ||
            (_d(n, R.element),
            R.element.parentNode.removeChild(R.element),
            (n = null));
        },
        isAttachedTo: (N) => R.element === N || n === N,
        element: { get: () => R.element },
        status: { get: () => s.query("GET_STATUS") },
      };
    return s.dispatch("DID_INIT"), In(fe);
  },
  c_ = (e = {}) => {
    const n = {};
    return (
      we(gs(), (s, a) => {
        n[s] = a[0];
      }),
      HD({ ...n, ...e })
    );
  },
  VD = (e) => e.charAt(0).toLowerCase() + e.slice(1),
  YD = (e) => l_(e.replace(/^data-/, "")),
  f_ = (e, n) => {
    we(n, (i, s) => {
      we(e, (a, u) => {
        const l = new RegExp(i);
        if (!l.test(a) || (delete e[a], s === !1)) return;
        if (tt(s)) {
          e[s] = u;
          return;
        }
        const p = s.group;
        qe(s) && !e[p] && (e[p] = {}), (e[p][VD(a.replace(l, ""))] = u);
      }),
        s.mapping && f_(e[s.group], s.mapping);
    });
  },
  zD = (e, n = {}) => {
    const i = [];
    we(e.attributes, (a) => {
      i.push(e.attributes[a]);
    });
    const s = i
      .filter((a) => a.name)
      .reduce((a, u) => {
        const l = Pe(e, u.name);
        return (a[YD(u.name)] = l === u.name ? !0 : l), a;
      }, {});
    return f_(s, n), s;
  },
  XD = (e, n = {}) => {
    const i = {
      "^class$": "className",
      "^multiple$": "allowMultiple",
      "^capture$": "captureMethod",
      "^webkitdirectory$": "allowDirectoriesOnly",
      "^server": {
        group: "server",
        mapping: {
          "^process": { group: "process" },
          "^revert": { group: "revert" },
          "^fetch": { group: "fetch" },
          "^restore": { group: "restore" },
          "^load": { group: "load" },
        },
      },
      "^type$": !1,
      "^files$": !1,
    };
    Hn("SET_ATTRIBUTE_TO_OPTION_MAP", i);
    const s = { ...n },
      a = zD(
        e.nodeName === "FIELDSET" ? e.querySelector("input[type=file]") : e,
        i
      );
    Object.keys(a).forEach((l) => {
      qe(a[l])
        ? (qe(s[l]) || (s[l] = {}), Object.assign(s[l], a[l]))
        : (s[l] = a[l]);
    }),
      (s.files = (n.files || []).concat(
        Array.from(e.querySelectorAll("input:not([type=file])")).map((l) => ({
          source: l.value,
          options: { type: l.dataset.type },
        }))
      ));
    const u = c_(s);
    return (
      e.files &&
        Array.from(e.files).forEach((l) => {
          u.addFile(l);
        }),
      u.replaceElement(e),
      u
    );
  },
  KD = (...e) => (sy(e[0]) ? XD(...e) : c_(...e)),
  kD = ["fire", "_read", "_write"],
  zd = (e) => {
    const n = {};
    return Ph(e, n, kD), n;
  },
  QD = (e, n) => e.replace(/(?:{([a-zA-Z]+)})/g, (i, s) => n[s]),
  ZD = (e) => {
    const n = new Blob(["(", e.toString(), ")()"], {
        type: "application/javascript",
      }),
      i = URL.createObjectURL(n),
      s = new Worker(i);
    return {
      transfer: (a, u) => {},
      post: (a, u, l) => {
        const f = Hl();
        (s.onmessage = (p) => {
          p.data.id === f && u(p.data.message);
        }),
          s.postMessage({ id: f, message: a }, l);
      },
      terminate: () => {
        s.terminate(), URL.revokeObjectURL(i);
      },
    };
  },
  JD = (e) =>
    new Promise((n, i) => {
      const s = new Image();
      (s.onload = () => {
        n(s);
      }),
        (s.onerror = (a) => {
          i(a);
        }),
        (s.src = e);
    }),
  d_ = (e, n) => {
    const i = e.slice(0, e.size, e.type);
    return (i.lastModifiedDate = e.lastModifiedDate), (i.name = n), i;
  },
  jD = (e) => d_(e, e.name),
  Xd = [],
  eb = (e) => {
    if (Xd.includes(e)) return;
    Xd.push(e);
    const n = e({
      addFilter: jy,
      utils: {
        Type: x,
        forin: we,
        isString: tt,
        isFile: mr,
        toNaturalFileSize: Yh,
        replaceInString: QD,
        getExtensionFromFilename: qs,
        getFilenameWithoutExtension: Wh,
        guesstimateMimeType: n_,
        getFileFromBlob: Er,
        getFilenameFromURL: oi,
        createRoute: nt,
        createWorker: ZD,
        createView: xe,
        createItemAPI: at,
        loadImage: JD,
        copyFile: jD,
        renameFile: d_,
        createBlob: Uh,
        applyFilterChain: Ft,
        text: Le,
        getNumericAspectRatioFromString: Nh,
      },
      views: { fileActionButton: Vh },
    });
    eA(n.options);
  },
  tb = () =>
    Object.prototype.toString.call(window.operamini) === "[object OperaMini]",
  nb = () => "Promise" in window,
  rb = () => "slice" in Blob.prototype,
  ib = () => "URL" in window && "createObjectURL" in window.URL,
  sb = () => "visibilityState" in document,
  ob = () => "performance" in window,
  ab = () => "supports" in (window.CSS || {}),
  lb = () => /MSIE|Trident/.test(window.navigator.userAgent),
  cl = (() => {
    const e =
      Ah() && !tb() && sb() && nb() && rb() && ib() && ob() && (ab() || lb());
    return () => e;
  })(),
  gn = { apps: [] },
  ub = "filepond",
  Vn = () => {};
let p_ = {},
  h_ = {},
  __ = {},
  fl = {},
  us = Vn,
  cs = Vn,
  dl = Vn,
  pl = Vn,
  hl = Vn,
  _l = Vn,
  gl = Vn;
if (cl()) {
  Ly(
    () => {
      gn.apps.forEach((i) => i._read());
    },
    (i) => {
      gn.apps.forEach((s) => s._write(i));
    }
  );
  const e = () => {
    document.dispatchEvent(
      new CustomEvent("FilePond:loaded", {
        detail: {
          supported: cl,
          create: us,
          destroy: cs,
          parse: dl,
          find: pl,
          registerPlugin: hl,
          setOptions: gl,
        },
      })
    ),
      document.removeEventListener("DOMContentLoaded", e);
  };
  document.readyState !== "loading"
    ? setTimeout(() => e(), 0)
    : document.addEventListener("DOMContentLoaded", e);
  const n = () =>
    we(gs(), (i, s) => {
      fl[i] = s[1];
    });
  (p_ = { ...Fh }),
    (__ = { ...Be }),
    (h_ = { ...ne }),
    (fl = {}),
    n(),
    (us = (...i) => {
      const s = KD(...i);
      return s.on("destroy", cs), gn.apps.push(s), zd(s);
    }),
    (cs = (i) => {
      const s = gn.apps.findIndex((a) => a.isAttachedTo(i));
      return s >= 0 ? (gn.apps.splice(s, 1)[0].restoreElement(), !0) : !1;
    }),
    (dl = (i) =>
      Array.from(i.querySelectorAll(`.${ub}`))
        .filter((u) => !gn.apps.find((l) => l.isAttachedTo(u)))
        .map((u) => us(u))),
    (pl = (i) => {
      const s = gn.apps.find((a) => a.isAttachedTo(i));
      return s ? zd(s) : null;
    }),
    (hl = (...i) => {
      i.forEach(eb), n();
    }),
    (_l = () => {
      const i = {};
      return (
        we(gs(), (s, a) => {
          i[s] = a[0];
        }),
        i
      );
    }),
    (gl = (i) => (
      qe(i) &&
        (gn.apps.forEach((s) => {
          s.setOptions(i);
        }),
        tA(i)),
      _l()
    ));
}
const cb = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      get FileOrigin() {
        return __;
      },
      get FileStatus() {
        return h_;
      },
      get OptionTypes() {
        return fl;
      },
      get Status() {
        return p_;
      },
      get create() {
        return us;
      },
      get destroy() {
        return cs;
      },
      get find() {
        return pl;
      },
      get getOptions() {
        return _l;
      },
      get parse() {
        return dl;
      },
      get registerPlugin() {
        return hl;
      },
      get setOptions() {
        return gl;
      },
      supported: cl,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
window.Alpine = yh;
yh.start();
window.FilePond = cb;
