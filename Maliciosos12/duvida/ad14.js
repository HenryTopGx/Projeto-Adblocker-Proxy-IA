(function(sttc) {
    var window = this;
    if (window.googletag && googletag.evalScripts) {
        googletag.evalScripts();
    }
    if (window.googletag && googletag._loaded_)
        return;
    var n, aa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    , ca = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }, da = ca(this), ea = "function" === typeof Symbol && "symbol" === typeof Symbol("x"), u = {}, fa = {}, v = function(a, b, c) {
        if (!c || null != a) {
            c = fa[b];
            if (null == c)
                return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
    }, w = function(a, b, c) {
        if (b)
            a: {
                var d = a.split(".");
                a = 1 === d.length;
                var e = d[0], f;
                !a && e in u ? f = u : f = da;
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f))
                        break a;
                    f = f[g]
                }
                d = d[d.length - 1];
                c = ea && "es6" === c ? f[d] : null;
                b = b(c);
                null != b && (a ? ba(u, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (void 0 === fa[d] && (a = 1E9 * Math.random() >>> 0,
                fa[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d),
                ba(f, fa[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
    };
    w("Symbol", function(a) {
        if (a)
            return a;
        var b = function(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.g
        }
        ;
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_"
          , d = 0
          , e = function(f) {
            if (this instanceof e)
                throw new TypeError("Symbol is not a constructor");
            return new b(c + (f || "") + "_" + d++,f)
        };
        return e
    }, "es6");
    w("Symbol.iterator", function(a) {
        if (a)
            return a;
        a = (0,
        u.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ha(aa(this))
                }
            })
        }
        return a
    }, "es6");
    var ha = function(a) {
        a = {
            next: a
        };
        a[v(u.Symbol, "iterator")] = function() {
            return this
        }
        ;
        return a
    }
      , ia = function(a) {
        return a.raw = a
    }
      , x = function(a) {
        var b = "undefined" != typeof u.Symbol && v(u.Symbol, "iterator") && a[v(u.Symbol, "iterator")];
        if (b)
            return b.call(a);
        if ("number" == typeof a.length)
            return {
                next: aa(a)
            };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }
      , ja = function(a) {
        if (!(a instanceof Array)) {
            a = x(a);
            for (var b, c = []; !(b = a.next()).done; )
                c.push(b.value);
            a = c
        }
        return a
    }
      , la = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
      , ma = ea && "function" == typeof v(Object, "assign") ? v(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d)
                    la(d, e) && (a[e] = d[e])
        }
        return a
    }
    ;
    w("Object.assign", function(a) {
        return a || ma
    }, "es6");
    var na = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , oa;
    if (ea && "function" == typeof Object.setPrototypeOf)
        oa = Object.setPrototypeOf;
    else {
        var pa;
        a: {
            var qa = {
                a: !0
            }
              , ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a
            } catch (a) {}
            pa = !1
        }
        oa = pa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var sa = oa
      , y = function(a, b) {
        a.prototype = na(b.prototype);
        a.prototype.constructor = a;
        if (sa)
            sa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.zb = b.prototype
    }
      , ta = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    };
    w("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;
                d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    w("WeakMap", function(a) {
        function b() {}
        function c(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
            if (!a || !Object.seal)
                return !1;
            try {
                var g = Object.seal({})
                  , h = Object.seal({})
                  , k = new a([[g, 2], [h, 3]]);
                if (2 != k.get(g) || 3 != k.get(h))
                    return !1;
                k.delete(g);
                k.set(h, 4);
                return !k.has(g) && 4 == k.get(h)
            } catch (l) {
                return !1
            }
        }())
            return a;
        var d = "$jscomp_hidden_" + Math.random()
          , e = 0
          , f = function(g) {
            this.g = (e += Math.random() + 1).toString();
            if (g) {
                g = x(g);
                for (var h; !(h = g.next()).done; )
                    h = h.value,
                    this.set(h[0], h[1])
            }
        };
        f.prototype.set = function(g, h) {
            if (!c(g))
                throw Error("Invalid WeakMap key");
            if (!la(g, d)) {
                var k = new b;
                ba(g, d, {
                    value: k
                })
            }
            if (!la(g, d))
                throw Error("WeakMap key fail: " + g);
            g[d][this.g] = h;
            return this
        }
        ;
        f.prototype.get = function(g) {
            return c(g) && la(g, d) ? g[d][this.g] : void 0
        }
        ;
        f.prototype.has = function(g) {
            return c(g) && la(g, d) && la(g[d], this.g)
        }
        ;
        f.prototype.delete = function(g) {
            return c(g) && la(g, d) && la(g[d], this.g) ? delete g[d][this.g] : !1
        }
        ;
        return f
    }, "es6");
    w("Map", function(a) {
        if (function() {
            if (!a || "function" != typeof a || !v(a.prototype, "entries") || "function" != typeof Object.seal)
                return !1;
            try {
                var h = Object.seal({
                    x: 4
                })
                  , k = new a(x([[h, "s"]]));
                if ("s" != k.get(h) || 1 != k.size || k.get({
                    x: 4
                }) || k.set({
                    x: 4
                }, "t") != k || 2 != k.size)
                    return !1;
                var l = v(k, "entries").call(k)
                  , m = l.next();
                if (m.done || m.value[0] != h || "s" != m.value[1])
                    return !1;
                m = l.next();
                return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
            } catch (q) {
                return !1
            }
        }())
            return a;
        var b = new u.WeakMap
          , c = function(h) {
            this[0] = {};
            this[1] = f();
            this.size = 0;
            if (h) {
                h = x(h);
                for (var k; !(k = h.next()).done; )
                    k = k.value,
                    this.set(k[0], k[1])
            }
        };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.A ? l.A.value = k : (l.A = {
                next: this[1],
                I: this[1].I,
                head: this[1],
                key: h,
                value: k
            },
            l.list.push(l.A),
            this[1].I.next = l.A,
            this[1].I = l.A,
            this.size++);
            return this
        }
        ;
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.A && h.list ? (h.list.splice(h.index, 1),
            h.list.length || delete this[0][h.id],
            h.A.I.next = h.A.next,
            h.A.next.I = h.A.I,
            h.A.head = null,
            this.size--,
            !0) : !1
        }
        ;
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].I = f();
            this.size = 0
        }
        ;
        c.prototype.has = function(h) {
            return !!d(this, h).A
        }
        ;
        c.prototype.get = function(h) {
            return (h = d(this, h).A) && h.value
        }
        ;
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        }
        ;
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        }
        ;
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        }
        ;
        c.prototype.forEach = function(h, k) {
            for (var l = v(this, "entries").call(this), m; !(m = l.next()).done; )
                m = m.value,
                h.call(k, m[1], m[0], this)
        }
        ;
        c.prototype[v(u.Symbol, "iterator")] = v(c.prototype, "entries");
        var d = function(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g,
            b.set(k, l)) : l = "p_" + k;
            var m = h[0][l];
            if (m && la(h[0], l))
                for (h = 0; h < m.length; h++) {
                    var q = m[h];
                    if (k !== k && q.key !== q.key || k === q.key)
                        return {
                            id: l,
                            list: m,
                            index: h,
                            A: q
                        }
                }
            return {
                id: l,
                list: m,
                index: -1,
                A: void 0
            }
        }
          , e = function(h, k) {
            var l = h[1];
            return ha(function() {
                if (l) {
                    for (; l.head != h[1]; )
                        l = l.I;
                    for (; l.next != l.head; )
                        return l = l.next,
                        {
                            done: !1,
                            value: k(l)
                        };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }
          , f = function() {
            var h = {};
            return h.I = h.next = h.head = h
        }
          , g = 0;
        return c
    }, "es6");
    w("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    }, "es6");
    w("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    w("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return v(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    w("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return v(Number, "isInteger").call(Number, b) && Math.abs(b) <= v(Number, "MAX_SAFE_INTEGER")
        }
    }, "es6");
    w("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b)
                return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    }, "es6");
    w("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                la(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    w("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    w("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || v(Object, "is").call(Object, f, b))
                    return !0
            }
            return !1
        }
    }, "es7");
    var ua = function(a, b, c) {
        if (null == a)
            throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    w("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== ua(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    var va = function(a, b) {
        a instanceof String && (a += "");
        var c = 0
          , d = !1
          , e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
        e[v(u.Symbol, "iterator")] = function() {
            return e
        }
        ;
        return e
    };
    w("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return va(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    w("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return va(this, function(b) {
                return b
            })
        }
    }, "es6");
    w("Array.prototype.values", function(a) {
        return a ? a : function() {
            return va(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    w("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            }
            ;
            var e = []
              , f = "undefined" != typeof u.Symbol && v(u.Symbol, "iterator") && b[v(u.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done; )
                    e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length,
                g = 0; g < f; g++)
                    e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    w("Set", function(a) {
        if (function() {
            if (!a || "function" != typeof a || !v(a.prototype, "entries") || "function" != typeof Object.seal)
                return !1;
            try {
                var c = Object.seal({
                    x: 4
                })
                  , d = new a(x([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                    x: 4
                }) != d || 2 != d.size)
                    return !1;
                var e = v(d, "entries").call(d)
                  , f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c)
                    return !1;
                f = e.next();
                return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (g) {
                return !1
            }
        }())
            return a;
        var b = function(c) {
            this.g = new u.Map;
            if (c) {
                c = x(c);
                for (var d; !(d = c.next()).done; )
                    this.add(d.value)
            }
            this.size = this.g.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        }
        ;
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        }
        ;
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        }
        ;
        b.prototype.has = function(c) {
            return this.g.has(c)
        }
        ;
        b.prototype.entries = function() {
            return v(this.g, "entries").call(this.g)
        }
        ;
        b.prototype.values = function() {
            return v(this.g, "values").call(this.g)
        }
        ;
        b.prototype.keys = v(b.prototype, "values");
        b.prototype[v(u.Symbol, "iterator")] = v(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        }
        ;
        return b
    }, "es6");
    w("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                la(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    w("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ua(this, b, "startsWith")
              , e = d.length
              , f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e; )
                if (d[c++] != b[g++])
                    return !1;
            return g >= f
        }
    }, "es6");
    w("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = ua(this, null, "repeat");
            if (0 > b || 1342177279 < b)
                throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b; )
                if (b & 1 && (d += c),
                b >>>= 1)
                    c += c;
            return d
        }
    }, "es6");
    w("globalThis", function(a) {
        return a || da
    }, "es_2020");
    w("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = ua(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? v(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
    var z = this || self
      , xa = function(a) {
        var b = wa("CLOSURE_FLAGS");
        a = b && b[a];
        return null != a ? a : !1
    }
      , wa = function(a) {
        a = a.split(".");
        for (var b = z, c = 0; c < a.length; c++)
            if (b = b[a[c]],
            null == b)
                return null;
        return b
    }
      , ya = function(a, b, c) {
        a = a.split(".");
        c = c || z;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };
    function za(a) {
        z.setTimeout(function() {
            throw a;
        }, 0)
    }
    ;var Aa = function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
      , Ca = function(a, b) {
        var c = 0;
        a = Aa(String(a)).split(".");
        b = Aa(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || ""
              , g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length)
                    break;
                c = Ba(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ba(0 == f[2].length, 0 == g[2].length) || Ba(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }
      , Ba = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Da = xa(610401301)
      , Ea = xa(188588736);
    var Fa, Ga = z.navigator;
    Fa = Ga ? Ga.userAgentData || null : null;
    function Ha(a) {
        return Da ? Fa ? Fa.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    }
    function C(a) {
        var b;
        a: {
            if (b = z.navigator)
                if (b = b.userAgent)
                    break a;
            b = ""
        }
        return -1 != b.indexOf(a)
    }
    ;function Ia() {
        return Da ? !!Fa && 0 < Fa.brands.length : !1
    }
    function Ja() {
        return Ia() ? Ha("Chromium") : (C("Chrome") || C("CriOS")) && !(Ia() ? 0 : C("Edge")) || C("Silk")
    }
    ;var Ka = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    function La(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    ;var Ma = function(a) {
        Ma[" "](a);
        return a
    };
    Ma[" "] = function() {}
    ;
    var Na = Ia() ? !1 : C("Trident") || C("MSIE");
    !C("Android") || Ja();
    Ja();
    C("Safari") && (Ja() || (Ia() ? 0 : C("Coast")) || (Ia() ? 0 : C("Opera")) || (Ia() ? 0 : C("Edge")) || (Ia() ? Ha("Microsoft Edge") : C("Edg/")) || Ia() && Ha("Opera"));
    var Oa = {}
      , Pa = null
      , Ra = function(a) {
        var b = [];
        Qa(a, function(c) {
            b.push(c)
        });
        return b
    }
      , Qa = function(a, b) {
        function c(k) {
            for (; d < a.length; ) {
                var l = a.charAt(d++)
                  , m = Pa[l];
                if (null != m)
                    return m;
                if (!/^[\s\xa0]*$/.test(l))
                    throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        Sa();
        for (var d = 0; ; ) {
            var e = c(-1)
              , f = c(0)
              , g = c(64)
              , h = c(64);
            if (64 === h && -1 === e)
                break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2),
            64 != h && b(g << 6 & 192 | h))
        }
    }
      , Sa = function() {
        if (!Pa) {
            Pa = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Oa[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Pa[f] && (Pa[f] = e)
                }
            }
        }
    };
    var Ta = "undefined" !== typeof Uint8Array
      , Ua = !Na && "function" === typeof btoa;
    function Va() {
        return "function" === typeof BigInt
    }
    ;var D = 0
      , Wa = 0;
    function Xa(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = x(Ya(c, a)),
        b = c.next().value,
        a = c.next().value,
        c = b);
        D = c >>> 0;
        Wa = a >>> 0
    }
    function Za(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (2097151 >= b)
            var c = "" + (4294967296 * b + a);
        else
            Va() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215,
            b = b >> 16 & 65535,
            a = (a & 16777215) + 6777216 * c + 6710656 * b,
            c += 8147497 * b,
            b *= 2,
            1E7 <= a && (c += Math.floor(a / 1E7),
            a %= 1E7),
            1E7 <= c && (b += Math.floor(c / 1E7),
            c %= 1E7),
            c = b + $a(c) + $a(a));
        return c
    }
    function $a(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }
    function ab() {
        var a = D
          , b = Wa;
        b & 2147483648 ? Va() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = x(Ya(a, b)),
        a = b.next().value,
        b = b.next().value,
        a = "-" + Za(a, b)) : a = Za(a, b);
        return a
    }
    function Ya(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    }
    ;function bb(a) {
        return Array.prototype.slice.call(a)
    }
    ;function cb(a) {
        return "function" === typeof u.Symbol && "symbol" === typeof (0,
        u.Symbol)() ? (0,
        u.Symbol)() : a
    }
    var E = cb()
      , db = cb("0di")
      , fb = cb("2ex")
      , gb = cb("0dg");
    var hb = E ? function(a, b) {
        a[E] |= b
    }
    : function(a, b) {
        void 0 !== a.g ? a.g |= b : Object.defineProperties(a, {
            g: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }
      , ib = E ? function(a, b) {
        a[E] &= ~b
    }
    : function(a, b) {
        void 0 !== a.g && (a.g &= ~b)
    }
    ;
    function F(a, b, c) {
        return c ? a | b : a & ~b
    }
    var G = E ? function(a) {
        return a[E] | 0
    }
    : function(a) {
        return a.g | 0
    }
      , H = E ? function(a) {
        return a[E]
    }
    : function(a) {
        return a.g
    }
      , I = E ? function(a, b) {
        a[E] = b;
        return a
    }
    : function(a, b) {
        void 0 !== a.g ? a.g = b : Object.defineProperties(a, {
            g: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return a
    }
    ;
    function jb(a, b) {
        I(b, (a | 0) & -14591)
    }
    function kb(a, b) {
        I(b, (a | 34) & -14557)
    }
    function lb(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    }
    ;var mb = {}
      , nb = {};
    function ob(a) {
        return !(!a || "object" !== typeof a || a.g !== nb)
    }
    function pb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var qb;
    function rb(a, b, c) {
        if (!Array.isArray(a) || a.length)
            return !1;
        var d = G(a);
        if (d & 1)
            return !0;
        if (!(b && (Array.isArray(b) ? v(b, "includes").call(b, c) : b.has(c))))
            return !1;
        I(a, d | 1);
        return !0
    }
    var sb, tb = [];
    I(tb, 55);
    sb = Object.freeze(tb);
    function ub(a) {
        if (a & 2)
            throw Error();
    }
    var vb = function() {};
    Object.freeze(new function() {}
    );
    Object.freeze(new vb);
    var wb = Object.freeze(new vb);
    var xb = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var yb, zb;
    function Ab(a) {
        if (zb)
            throw Error("");
        zb = function(b) {
            z.setTimeout(function() {
                a(b)
            }, 0)
        }
    }
    function Bb(a) {
        if (zb)
            try {
                zb(a)
            } catch (b) {
                throw b.cause = a,
                b;
            }
    }
    function Cb() {
        var a = Error();
        xb(a, "incident");
        zb ? Bb(a) : za(a)
    }
    function Db(a) {
        a = Error(a);
        xb(a, "warning");
        Bb(a);
        return a
    }
    ;function Eb(a) {
        if ("boolean" !== typeof a) {
            var b = typeof a;
            throw Error("Expected boolean but got " + ("object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null") + ": " + a);
        }
        return a
    }
    var Fb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    function Gb(a) {
        var b = typeof a;
        return "number" === b ? v(Number, "isFinite").call(Number, a) : "string" !== b ? !1 : Fb.test(a)
    }
    function J(a) {
        if (null != a) {
            if (!v(Number, "isFinite").call(Number, a))
                throw Db("enum");
            a |= 0
        }
        return a
    }
    function Hb(a) {
        if ("number" !== typeof a)
            throw Db("int32");
        if (!v(Number, "isFinite").call(Number, a))
            throw Db("int32");
        return a | 0
    }
    function Ib(a) {
        return null == a ? a : Hb(a)
    }
    function Jb(a) {
        if (null == a)
            return a;
        if ("string" === typeof a) {
            if (!a)
                return;
            a = +a
        }
        if ("number" === typeof a)
            return v(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    }
    function Kb(a) {
        if (null == a)
            return a;
        if ("string" === typeof a) {
            if (!a)
                return;
            a = +a
        }
        if ("number" === typeof a)
            return v(Number, "isFinite").call(Number, a) ? a >>> 0 : void 0
    }
    function Lb(a) {
        if (null != a) {
            var b = !!b;
            if (!Gb(a))
                throw Db("int64");
            a = "string" === typeof a ? Mb(a) : b ? Nb(a) : Ob(a)
        }
        return a
    }
    function Pb(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    }
    function Ob(a) {
        a = v(Math, "trunc").call(Math, a);
        if (!v(Number, "isSafeInteger").call(Number, a)) {
            Xa(a);
            var b = D
              , c = Wa;
            if (a = c & 2147483648)
                b = ~b + 1 >>> 0,
                c = ~c >>> 0,
                0 == b && (c = c + 1 >>> 0);
            b = 4294967296 * c + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }
    function Nb(a) {
        a = v(Math, "trunc").call(Math, a);
        if (v(Number, "isSafeInteger").call(Number, a))
            a = String(a);
        else {
            var b = String(a);
            Pb(b) ? a = b : (Xa(a),
            a = ab())
        }
        return a
    }
    function Mb(a) {
        var b = v(Math, "trunc").call(Math, Number(a));
        if (v(Number, "isSafeInteger").call(Number, b))
            return String(b);
        b = a.indexOf(".");
        -1 !== b && (a = a.substring(0, b));
        if (!Pb(a)) {
            if (16 > a.length)
                Xa(Number(a));
            else if (Va())
                a = BigInt(a),
                D = Number(a & BigInt(4294967295)) >>> 0,
                Wa = Number(a >> BigInt(32) & BigInt(4294967295));
            else {
                b = +("-" === a[0]);
                Wa = D = 0;
                for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e,
                e += 6)
                    d = Number(a.slice(d, e)),
                    Wa *= 1E6,
                    D = 1E6 * D + d,
                    4294967296 <= D && (Wa += v(Math, "trunc").call(Math, D / 4294967296),
                    Wa >>>= 0,
                    D >>>= 0);
                b && (b = x(Ya(D, Wa)),
                a = b.next().value,
                b = b.next().value,
                D = a,
                Wa = b)
            }
            a = ab()
        }
        return a
    }
    function Qb(a) {
        if ("string" !== typeof a)
            throw Error();
        return a
    }
    function K(a) {
        if (null != a && "string" !== typeof a)
            throw Error();
        return a
    }
    function Rb(a) {
        return null == a || "string" === typeof a ? a : void 0
    }
    function Sb(a, b, c, d) {
        if (null != a && "object" === typeof a && a.ha === mb)
            return a;
        if (!Array.isArray(a))
            return c ? d & 2 ? Tb(b) : new b : void 0;
        var e = c = G(a);
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && I(a, e);
        return new b(a)
    }
    function Tb(a) {
        var b = a[db];
        if (b)
            return b;
        b = new a;
        hb(b.i, 34);
        return a[db] = b
    }
    ;var Ub;
    function Vb(a, b) {
        Ub = b;
        a = new a(b);
        Ub = void 0;
        return a
    }
    function L(a, b, c) {
        null == a && (a = Ub);
        Ub = void 0;
        if (null == a) {
            var d = 96;
            c ? (a = [c],
            d |= 512) : a = [];
            b && (d = d & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a))
                throw Error("narr");
            d = G(a);
            if (d & 2048)
                throw Error("farr");
            if (d & 64)
                return a;
            d |= 64;
            if (c && (d |= 512,
            c !== a[0]))
                throw Error("mid");
            a: {
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1;
                    if (pb(c[f])) {
                        d |= 256;
                        b = f - (+!!(d & 512) - 1);
                        if (1024 <= b)
                            throw Error("pvtlmt");
                        d = d & -16760833 | (b & 1023) << 14;
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, e - (+!!(d & 512) - 1));
                    if (1024 < b)
                        throw Error("spvt");
                    d = d & -16760833 | (b & 1023) << 14
                }
            }
        }
        I(a, d);
        return a
    }
    ;function Wb(a, b) {
        return Xb(b)
    }
    function Xb(a) {
        switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a)
                if (Array.isArray(a)) {
                    if (rb(a, void 0, 0))
                        return
                } else if (Ta && null != a && a instanceof Uint8Array) {
                    if (Ua) {
                        for (var b = "", c = 0, d = a.length - 10240; c < d; )
                            b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                        a = btoa(b)
                    } else {
                        void 0 === b && (b = 0);
                        Sa();
                        b = Oa[b];
                        c = Array(Math.floor(a.length / 3));
                        d = b[64] || "";
                        for (var e = 0, f = 0; e < a.length - 2; e += 3) {
                            var g = a[e]
                              , h = a[e + 1]
                              , k = a[e + 2]
                              , l = b[g >> 2];
                            g = b[(g & 3) << 4 | h >> 4];
                            h = b[(h & 15) << 2 | k >> 6];
                            k = b[k & 63];
                            c[f++] = l + g + h + k
                        }
                        l = 0;
                        k = d;
                        switch (a.length - e) {
                        case 2:
                            l = a[e + 1],
                            k = b[(l & 15) << 2] || d;
                        case 1:
                            a = a[e],
                            c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
                        }
                        a = c.join("")
                    }
                    return a
                }
        }
        return a
    }
    ;function Yb(a, b, c) {
        a = bb(a);
        var d = a.length
          , e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++)
            a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (var f in e)
                Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }
    function Zb(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a))
                a = rb(a, void 0, 0) ? void 0 : e && G(a) & 2 ? a : $b(a, b, c, void 0 !== d, e);
            else if (pb(a)) {
                var f = {}, g;
                for (g in a)
                    Object.prototype.hasOwnProperty.call(a, g) && (f[g] = Zb(a[g], b, c, d, e));
                a = f
            } else
                a = b(a, d);
            return a
        }
    }
    function $b(a, b, c, d, e) {
        var f = d || c ? G(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = bb(a);
        for (var g = 0; g < a.length; g++)
            a[g] = Zb(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }
    function ac(a) {
        return a.ha === mb ? a.toJSON() : Xb(a)
    }
    ;function bc(a, b, c) {
        c = void 0 === c ? kb : c;
        if (null != a) {
            if (Ta && a instanceof Uint8Array)
                return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = G(a);
                d & 2 || (b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16))),
                a = b ? I(a, (d | 34) & -12293) : $b(a, bc, d & 4 ? kb : c, !0, !0));
                return a
            }
            a.ha === mb && (c = a.i,
            d = H(c),
            a = d & 2 ? a : Vb(a.constructor, cc(c, d, !0)));
            return a
        }
    }
    function cc(a, b, c) {
        var d = c || b & 2 ? kb : jb
          , e = !!(b & 32);
        a = Yb(a, b, function(f) {
            return bc(f, e, d)
        });
        hb(a, 32 | (c ? 2 : 0));
        return a
    }
    function dc(a) {
        var b = a.i
          , c = H(b);
        return c & 2 ? Vb(a.constructor, cc(b, c, !1)) : a
    }
    ;function ec(a, b, c, d) {
        if (!(4 & b))
            return !0;
        if (null == c)
            return !1;
        !d && 0 === c && (4096 & b || 8192 & b) && 5 > (a.constructor[gb] = (a.constructor[gb] | 0) + 1) && Cb();
        return 0 === c ? !1 : !(c & b)
    }
    var M = function(a, b) {
        a = a.i;
        return fc(a, H(a), b)
    };
    function gc(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(0 > b || b >= a.length || b >= c))
            return a[b]
    }
    var fc = function(a, b, c, d) {
        if (-1 === c)
            return null;
        var e = lb(b);
        if (c >= e) {
            if (b & 256)
                return a[a.length - 1][c]
        } else {
            var f = a.length;
            if (d && b & 256 && (d = a[f - 1][c],
            null != d)) {
                if (gc(a, b, e, c) && null != fb) {
                    var g;
                    a = null != (g = yb) ? g : yb = {};
                    g = a[fb] || 0;
                    4 <= g || (a[fb] = g + 1,
                    Cb())
                }
                return d
            }
            return gc(a, b, e, c)
        }
    }
      , O = function(a, b, c) {
        var d = a.i
          , e = H(d);
        ub(e);
        N(d, e, b, c);
        return a
    };
    function N(a, b, c, d, e) {
        var f = lb(b);
        if (c >= f || e) {
            var g = b;
            if (b & 256)
                e = a[a.length - 1];
            else {
                if (null == d)
                    return g;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && I(a, g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1],
        c in a && delete a[c]);
        return b
    }
    function hc(a, b, c) {
        var d = a.i
          , e = H(d)
          , f = 2 & e ? 1 : 2
          , g = ic(d, e, b)
          , h = G(g);
        if (ec(a, h, void 0, !1)) {
            if (4 & h || Object.isFrozen(g))
                g = bb(g),
                h = jc(h, e),
                e = N(d, e, b, g);
            for (var k = a = 0; a < g.length; a++) {
                var l = c(g[a]);
                null != l && (g[k++] = l)
            }
            k < a && (g.length = k);
            h = kc(h, e);
            h = F(h, 20, !0);
            h = F(h, 4096, !1);
            h = F(h, 8192, !1);
            I(g, h);
            2 & h && Object.freeze(g)
        }
        lc(h) || (c = h,
        h = (a = 1 === f || 4 === f && !!(32 & h)) ? F(h, 2, !0) : mc(h, e, !1),
        h !== c && I(g, h),
        a && Object.freeze(g));
        2 === f && lc(h) && (g = bb(g),
        h = jc(h, e),
        h = mc(h, e, !1),
        I(g, h),
        N(d, e, b, g));
        return g
    }
    function ic(a, b, c) {
        a = fc(a, b, c);
        return Array.isArray(a) ? a : sb
    }
    function kc(a, b) {
        0 === a && (a = jc(a, b));
        return a = F(a, 1, !0)
    }
    function lc(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }
    function nc(a, b, c, d) {
        var e = a.i
          , f = H(e);
        ub(f);
        if (null == c)
            return N(e, f, b),
            a;
        var g = G(c)
          , h = g
          , k = !!(2 & g) || Object.isFrozen(c)
          , l = !k && (void 0 === wb || !1);
        if (ec(a, g))
            for (g = 21,
            k && (c = bb(c),
            h = 0,
            g = jc(g, f),
            g = mc(g, f, !0)),
            k = 0; k < c.length; k++)
                c[k] = d(c[k]);
        l && (c = bb(c),
        h = 0,
        g = jc(g, f),
        g = mc(g, f, !0));
        g !== h && I(c, g);
        N(e, f, b, c);
        return a
    }
    function P(a, b, c, d) {
        var e = a.i
          , f = H(e);
        ub(f);
        N(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    }
    function oc(a, b) {
        var c = a.i
          , d = G(c);
        ub(H(a.i));
        var e = d & 2;
        a = fc(c, d, 4, !1);
        Array.isArray(a) || (a = sb);
        var f = !!(d & 32)
          , g = G(a);
        0 === g && f && !e ? (g |= 33,
        I(a, g)) : g & 1 || (g |= 1,
        I(a, g));
        if (e)
            g & 2 || hb(a, 34),
            Object.freeze(a);
        else if (2 & g || 2048 & g)
            a = bb(a),
            e = 1,
            f && (e |= 32),
            I(a, e),
            N(c, d, 4, a, !1);
        c = a;
        d = G(c);
        d = !!(4 & d) && !!(4096 & d);
        if (Array.isArray(b))
            for (a = 0; a < b.length; a++)
                c.push(Qb(b[a], d));
        else
            for (b = x(b),
            a = b.next(); !a.done; a = b.next())
                c.push(Qb(a.value, d))
    }
    var Q = function(a, b, c, d) {
        var e = a.i
          , f = H(e);
        ub(f);
        (c = pc(e, f, c)) && c !== b && null != d && (f = N(e, f, c));
        N(e, f, b, d);
        return a
    }
      , qc = function(a, b, c) {
        a = a.i;
        return pc(a, H(a), b) === c ? c : -1
    }
      , rc = function(a, b) {
        a = a.i;
        return pc(a, H(a), b)
    };
    function pc(a, b, c) {
        for (var d = 0, e = 0; e < c.length; e++) {
            var f = c[e];
            null != fc(a, b, f) && (0 !== d && (b = N(a, b, d)),
            d = f)
        }
        return d
    }
    var tc = function(a) {
        var b = sc;
        a = a.i;
        var c = H(a);
        ub(c);
        var d = fc(a, c, 4);
        b = dc(Sb(d, b, !0, c));
        d !== b && N(a, c, 4, b);
        return b
    };
    function uc(a, b, c, d) {
        a = a.i;
        var e = H(a)
          , f = fc(a, e, c, d);
        b = Sb(f, b, !1, e);
        b !== f && null != b && N(a, e, c, b, d);
        return b
    }
    var vc = function(a, b, c) {
        return (a = uc(a, b, c, !1)) ? a : Tb(b)
    }
      , R = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = uc(a, b, c, d);
        if (null == b)
            return b;
        a = a.i;
        var e = H(a);
        if (!(e & 2)) {
            var f = dc(b);
            f !== b && (b = f,
            N(a, e, c, b, d))
        }
        return b
    };
    function wc(a, b, c, d, e, f) {
        var g = !!(2 & b)
          , h = g ? 1 : 2;
        e = !!e;
        f && (f = !g);
        g = ic(a, b, d);
        var k = G(g)
          , l = !!(4 & k);
        if (!l) {
            k = kc(k, b);
            var m = g
              , q = b
              , p = !!(2 & k);
            p && (q = F(q, 2, !0));
            for (var r = !p, t = !0, A = 0, B = 0; A < m.length; A++) {
                var ka = Sb(m[A], c, !1, q);
                if (ka instanceof c) {
                    if (!p) {
                        var eb = !!(G(ka.i) & 2);
                        r && (r = !eb);
                        t && (t = eb)
                    }
                    m[B++] = ka
                }
            }
            B < A && (m.length = B);
            k = F(k, 4, !0);
            k = F(k, 16, t);
            k = F(k, 8, r);
            I(m, k);
            p && Object.freeze(m)
        }
        if (f && !(8 & k || !g.length && (1 === h || 4 === h && 32 & k))) {
            lc(k) && (g = bb(g),
            k = jc(k, b),
            b = N(a, b, d, g));
            c = g;
            f = k;
            for (m = 0; m < c.length; m++)
                k = c[m],
                q = dc(k),
                k !== q && (c[m] = q);
            f = F(f, 8, !0);
            f = F(f, 16, !c.length);
            I(c, f);
            k = f
        }
        lc(k) || (c = k,
        k = (f = 1 === h || 4 === h && !!(32 & k)) ? F(k, !g.length || 16 & k && (!l || 32 & k) ? 2 : 2048, !0) : mc(k, b, e),
        k !== c && I(g, k),
        f && Object.freeze(g));
        2 === h && lc(k) && (g = bb(g),
        k = jc(k, b),
        k = mc(k, b, e),
        I(g, k),
        N(a, b, d, g));
        return g
    }
    var S = function(a, b, c) {
        a = a.i;
        var d = H(a);
        return wc(a, d, b, c, !1, !(2 & d))
    }
      , xc = function(a, b, c) {
        null == c && (c = void 0);
        return O(a, b, c)
    }
      , yc = function(a, b, c, d) {
        null == d && (d = void 0);
        return Q(a, b, c, d)
    }
      , zc = function(a, b, c) {
        var d = a.i
          , e = H(d);
        ub(e);
        if (null == c)
            return N(d, e, b),
            a;
        for (var f = G(c), g = f, h = !!(2 & f) || !!(2048 & f), k = h || Object.isFrozen(c), l = !k && (void 0 === wb || !1), m = !0, q = !0, p = 0; p < c.length; p++) {
            var r = c[p];
            h || (r = !!(G(r.i) & 2),
            m && (m = !r),
            q && (q = r))
        }
        h || (f = F(f, 5, !0),
        f = F(f, 8, m),
        f = F(f, 16, q));
        if (l || k && f !== g)
            c = bb(c),
            g = 0,
            f = jc(f, e),
            f = mc(f, e, !0);
        f !== g && I(c, f);
        N(d, e, b, c);
        return a
    };
    function jc(a, b) {
        a = F(a, 2, !!(2 & b));
        a = F(a, 32, !0);
        return a = F(a, 2048, !1)
    }
    function mc(a, b, c) {
        32 & b && c || (a = F(a, 32, !1));
        return a
    }
    function Ac(a, b) {
        return null != a ? a : b
    }
    var Bc = function(a, b) {
        a = M(a, b);
        return null == a ? a : v(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    }
      , Cc = function(a, b) {
        var c = void 0 === c ? !1 : c;
        a = M(a, b);
        return Ac(null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0, c)
    }
      , Dc = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Ac(Jb(M(a, b)), c)
    }
      , Ec = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Ac(Kb(M(a, b)), c)
    }
      , Fc = function(a, b) {
        var c = void 0 === c ? 0 : c;
        a = M(a, b);
        a = null == a ? a : Gb(a) ? "number" === typeof a ? Ob(a) : Mb(a) : void 0;
        return Ac(a, c)
    }
      , Gc = function(a, b) {
        var c = void 0 === c ? 0 : c;
        a = a.i;
        var d = H(a)
          , e = fc(a, d, b);
        var f = null == e || "number" === typeof e ? e : "NaN" === e || "Infinity" === e || "-Infinity" === e ? Number(e) : void 0;
        null != f && f !== e && N(a, d, b, f);
        return Ac(f, c)
    }
      , T = function(a, b) {
        var c = void 0 === c ? "" : c;
        return Ac(Rb(M(a, b)), c)
    }
      , U = function(a, b) {
        var c = 0;
        c = void 0 === c ? 0 : c;
        return Ac(Bc(a, b), c)
    }
      , Hc = function(a, b) {
        return hc(a, b, Rb)
    }
      , Ic = function(a, b, c) {
        return U(a, qc(a, c, b))
    };
    var V = function(a, b, c) {
        this.i = L(a, b, c)
    };
    V.prototype.toJSON = function() {
        return qb ? Jc(this, this.i, !1) : Jc(this, $b(this.i, ac, void 0, void 0, !1), !0)
    }
    ;
    var Kc = function(a) {
        qb = !0;
        try {
            return JSON.stringify(a.toJSON(), Wb)
        } finally {
            qb = !1
        }
    };
    V.prototype.ha = mb;
    function Jc(a, b, c) {
        var d = Ea ? void 0 : a.constructor.u;
        var e = H(c ? a.i : b);
        a = b.length;
        if (!a)
            return b;
        var f;
        if (pb(c = b[a - 1])) {
            a: {
                var g = c;
                var h = {}, k = !1, l;
                for (l in g)
                    if (Object.prototype.hasOwnProperty.call(g, l)) {
                        var m = g[l];
                        if (Array.isArray(m)) {
                            var q = m;
                            if (rb(m, d, +l) || ob(m) && 0 === m.size)
                                m = null;
                            m != q && (k = !0)
                        }
                        null != m ? h[l] = m : k = !0
                    }
                if (k) {
                    for (var p in h) {
                        g = h;
                        break a
                    }
                    g = null
                }
            }
            g != c && (f = !0);
            a--
        }
        for (l = +!!(e & 512) - 1; 0 < a; a--) {
            p = a - 1;
            c = b[p];
            p -= l;
            if (!(null == c || rb(c, d, p) || ob(c) && 0 === c.size))
                break;
            var r = !0
        }
        if (!f && !r)
            return b;
        b = Array.prototype.slice.call(b, 0, a);
        g && b.push(g);
        return b
    }
    ;function Lc() {
        var a = !W(Mc).g
          , b = Nc();
        if (!a)
            throw Error(b && b() || String(a));
    }
    var Oc = void 0;
    function Nc() {
        var a = Oc;
        Oc = void 0;
        return a
    }
    ;function Pc(a) {
        return function(b) {
            if (null == b || "" == b)
                b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b))
                    throw Error("dnarr");
                hb(b, 32);
                b = Vb(a, b)
            }
            return b
        }
    }
    ;var Qc = function(a) {
        this.i = L(a)
    };
    y(Qc, V);
    Qc.u = [6, 4];
    var Rc = function(a) {
        this.i = L(a)
    };
    y(Rc, V);
    var Sc = Pc(Rc);
    Rc.u = [4, 5, 6, 11];
    var Vc = function(a, b) {
        this.g = a === Tc && b || "";
        this.j = Uc
    };
    Vc.prototype.toString = function() {
        return this.g
    }
    ;
    var Uc = {}
      , Tc = {};
    var Wc = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    };
    var Xc = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    function Yc(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    ;var Zc = function(a) {
        this.g = a
    };
    Zc.prototype.toString = function() {
        return this.g + ""
    }
    ;
    var $c = function(a) {
        return a instanceof Zc && a.constructor === Zc ? a.g : "type_error:TrustedResourceUrl"
    }
      , ad = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
      , bd = {}
      , cd = function(a, b, c) {
        if (null == c)
            return b;
        if ("string" === typeof c)
            return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a),
                    b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    var dd = {}
      , ed = function(a) {
        this.g = a
    };
    ed.prototype.toString = function() {
        return this.g.toString()
    }
    ;
    /* 
 
 SPDX-License-Identifier: Apache-2.0 
*/
    function fd(a, b) {
        b = void 0 === b ? {} : b;
        a = '<script src="' + gd($c(a).toString()) + '"';
        b.async && (a += " async");
        b.La && (a += ' custom-element="' + gd(b.La) + '"');
        b.defer && (a += " defer");
        b.id && (a += ' id="' + gd(b.id) + '"');
        b.nonce && (a += ' nonce="' + gd(b.nonce) + '"');
        b.type && (a += ' type="' + gd(b.type) + '"');
        b.Aa && (a += ' crossorigin="' + gd(b.Aa) + '"');
        return new ed(a + ">\x3c/script>",dd)
    }
    function gd(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }
    ;function hd(a) {
        var b = a.split(/\?|#/)
          , c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            Ya: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    }
    function id(a) {
        var b = ta.apply(1, arguments);
        if (0 === b.length)
            return new Zc(a[0],bd);
        for (var c = a[0], d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return new Zc(c,bd)
    }
    function jd(a, b) {
        a = hd($c(a).toString());
        var c = a.Ya
          , d = c.length ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)),
                d = "&")
            }
        });
        return new Zc(a.path + c + a.hash,bd)
    }
    ;function kd(a) {
        throw Error("unexpected value " + a + "!");
    }
    ;function ld(a) {
        var b, c;
        return (a = null == (c = (b = a.document).querySelector) ? void 0 : c.call(b, "script[nonce]")) ? a.nonce || a.getAttribute("nonce") || "" : ""
    }
    ;function md(a, b) {
        a.src = $c(b);
        (b = ld(a.ownerDocument && a.ownerDocument.defaultView || window)) && a.setAttribute("nonce", b)
    }
    ;function nd(a, b) {
        a.write(b instanceof ed && b.constructor === ed ? b.g : "type_error:SafeHtml")
    }
    ;var od = function() {
        return Da && Fa ? !Fa.mobile && (C("iPad") || C("Android") || C("Silk")) : C("iPad") || C("Android") && !C("Mobile") || C("Silk")
    };
    var pd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$")
      , qd = function(a) {
        return a ? decodeURI(a) : a
    }
      , rd = /#|$/
      , sd = function(a, b) {
        var c = a.search(rd);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e),
                    !f || 61 == f || 38 == f || 35 == f)
                        break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d)
            return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };
    var ud = function(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href)
                a: {
                    try {
                        Ma(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
            return b
        } catch (c) {
            return !1
        }
    }
      , vd = function(a) {
        var b = void 0 === b ? !1 : b;
        var c = void 0 === c ? z : c;
        for (var d = 0; c && 40 > d++ && (!b && !ud(c) || !a(c)); )
            a: {
                try {
                    var e = c.parent;
                    if (e && e != c) {
                        c = e;
                        break a
                    }
                } catch (f) {}
                c = null
            }
    }
      , wd = function(a) {
        var b = a;
        vd(function(c) {
            b = c;
            return !1
        });
        return b
    }
      , xd = function(a) {
        return ud(a.top) ? a.top : null
    }
      , yd = function() {
        if (!u.globalThis.crypto)
            return Math.random();
        try {
            var a = new Uint32Array(1);
            u.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }
      , zd = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
      , Ad = function(a) {
        var b = a.length;
        if (0 == b)
            return 0;
        for (var c = 305419896, d = 0; d < b; d++)
            c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
      , Bd = Wc(function() {
        return (Da && Fa ? Fa.mobile : !od() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"))) ? 2 : od() ? 1 : 0
    });
    function Cd(a, b) {
        if (a.length && b.head) {
            a = x(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = Dd("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    }
    var Ed = function(a) {
        if ("number" !== typeof a.goog_pvsid)
            try {
                var b = Object
                  , c = b.defineProperty
                  , d = void 0;
                d = void 0 === d ? Math.random : d;
                var e = Math.floor(d() * Math.pow(2, 52));
                c.call(b, a, "goog_pvsid", {
                    value: e,
                    configurable: !1
                })
            } catch (f) {}
        return Number(a.goog_pvsid) || -1
    }
      , Dd = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var Fd = {
        qb: 0,
        pb: 1,
        mb: 2,
        hb: 3,
        nb: 4,
        ib: 5,
        ob: 6,
        kb: 7,
        lb: 8,
        gb: 9,
        jb: 10,
        rb: 11
    };
    var Gd = {
        tb: 0,
        ub: 1,
        sb: 2
    };
    var Hd = function(a) {
        this.i = L(a)
    };
    y(Hd, V);
    Hd.prototype.getVersion = function() {
        return Dc(this, 2)
    }
    ;
    Hd.u = [3];
    function Id(a) {
        return Ra(0 !== a.length % 4 ? a + "A" : a).map(function(b) {
            return (n = b.toString(2),
            v(n, "padStart")).call(n, 8, "0")
        }).join("")
    }
    function Jd(a) {
        if (!/^[0-1]+$/.test(a))
            throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    }
    function Kd(a) {
        if (!/^[0-1]+$/.test(a))
            throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++)
            b.length <= d && b.push(b[d - 1] + b[d - 2]),
            c += parseInt(a[d], 2) * b[d];
        return c
    }
    ;function Ld(a) {
        var b = Id(a)
          , c = Jd(b.slice(0, 6));
        a = Jd(b.slice(6, 12));
        var d = new Hd;
        c = P(d, 1, Ib(c), 0);
        a = P(c, 2, Ib(a), 0);
        b = b.slice(12);
        c = Jd(b.slice(0, 12));
        d = [];
        for (var e = b.slice(12).replace(/0+$/, ""), f = 0; f < c; f++) {
            if (0 === e.length)
                throw Error("Found " + f + " of " + c + " sections [" + d + "] but reached end of input [" + b + "]");
            var g = 0 === Jd(e[0]);
            e = e.slice(1);
            var h = Md(e, b)
              , k = 0 === d.length ? 0 : d[d.length - 1];
            k = Kd(h) + k;
            e = e.slice(h.length);
            if (g)
                d.push(k);
            else {
                g = Md(e, b);
                h = Kd(g);
                for (var l = 0; l <= h; l++)
                    d.push(k + l);
                e = e.slice(g.length)
            }
        }
        if (0 < e.length)
            throw Error("Found " + c + " sections [" + d + "] but has remaining input [" + e + "], entire input [" + b + "]");
        return nc(a, 3, d, Hb)
    }
    function Md(a, b) {
        var c = a.indexOf("11");
        if (-1 === c)
            throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    }
    ;var Nd = "a".charCodeAt()
      , Od = Yc(Fd)
      , Pd = Yc(Gd);
    var Qd = function(a) {
        this.i = L(a)
    };
    y(Qd, V);
    var Rd = function() {
        var a = new Qd;
        return P(a, 1, Lb(0), "0")
    }
      , Sd = function(a) {
        var b = Number;
        var c = void 0 === c ? "0" : c;
        var d = M(a, 1);
        var e = !0;
        e = void 0 === e ? !1 : e;
        d = null == d ? d : Gb(d) ? "string" === typeof d ? Mb(d) : e ? Nb(d) : Ob(d) : void 0;
        b = b(Ac(d, c));
        a = Dc(a, 2);
        return new Date(1E3 * b + a / 1E6)
    };
    var Td = function(a) {
        if (/[^01]/.test(a))
            throw Error("Input bitstring " + a + " is malformed!");
        this.j = a;
        this.g = 0
    }
      , Wd = function(a) {
        var b = X(a, 16);
        return !0 === !!X(a, 1) ? (a = Ud(a),
        a.forEach(function(c) {
            if (c > b)
                throw Error("ID " + c + " is past MaxVendorId " + b + "!");
        }),
        a) : Vd(a, b)
    }
      , Ud = function(a) {
        for (var b = X(a, 12), c = []; b--; ) {
            var d = !0 === !!X(a, 1)
              , e = X(a, 16);
            if (d)
                for (d = X(a, 16); e <= d; e++)
                    c.push(e);
            else
                c.push(e)
        }
        c.sort(function(f, g) {
            return f - g
        });
        return c
    }
      , Vd = function(a, b, c) {
        for (var d = [], e = 0; e < b; e++)
            if (X(a, 1)) {
                var f = e + 1;
                if (c && -1 === c.indexOf(f))
                    throw Error("ID: " + f + " is outside of allowed values!");
                d.push(f)
            }
        return d
    }
      , X = function(a, b) {
        if (a.g + b > a.j.length)
            throw Error("Requested length " + b + " is past end of string.");
        var c = a.j.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    };
    Td.prototype.skip = function(a) {
        this.g += a
    }
    ;
    var Yd = function(a) {
        try {
            var b = Ra(a.split(".")[0]).map(function(d) {
                return (n = d.toString(2),
                v(n, "padStart")).call(n, 8, "0")
            }).join("")
              , c = new Td(b);
            b = {};
            b.tcString = a;
            b.gdprApplies = !0;
            c.skip(78);
            b.cmpId = X(c, 12);
            b.cmpVersion = X(c, 12);
            c.skip(30);
            b.tcfPolicyVersion = X(c, 6);
            b.isServiceSpecific = !!X(c, 1);
            b.useNonStandardStacks = !!X(c, 1);
            b.specialFeatureOptins = Xd(Vd(c, 12, Pd), Pd);
            b.purpose = {
                consents: Xd(Vd(c, 24, Od), Od),
                legitimateInterests: Xd(Vd(c, 24, Od), Od)
            };
            b.purposeOneTreatment = !!X(c, 1);
            b.publisherCC = String.fromCharCode(Nd + X(c, 6)) + String.fromCharCode(Nd + X(c, 6));
            b.vendor = {
                consents: Xd(Wd(c), null),
                legitimateInterests: Xd(Wd(c), null)
            };
            return b
        } catch (d) {
            return null
        }
    }
      , Xd = function(a, b) {
        var c = {};
        if (Array.isArray(b) && 0 !== b.length) {
            b = x(b);
            for (var d = b.next(); !d.done; d = b.next())
                d = d.value,
                c[d] = -1 !== a.indexOf(d)
        } else
            for (a = x(a),
            b = a.next(); !b.done; b = a.next())
                c[b.value] = !0;
        delete c[0];
        return c
    };
    var Zd = function(a) {
        this.i = L(a)
    };
    y(Zd, V);
    var $d = function(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var ae = null;
    function be(a) {
        a = void 0 === a ? z : a;
        return (a = a.performance) && a.now ? a.now() : null
    }
    ;function ce(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = Dd("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests
                      , h = Array.prototype.indexOf.call(g, e, void 0);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            Xc(e, "load", f);
            Xc(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var ee = function(a) {
        var b = void 0 === b ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=rcs_internal";
        zd(a, function(d, e) {
            if (d || 0 === d)
                c += "&" + e + "=" + encodeURIComponent("" + d)
        });
        de(c, b)
    }
      , de = function(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        var d = void 0 === d ? !1 : d;
        c.fetch ? (b = {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        },
        d && (b.mode = "cors",
        "setAttributionReporting"in XMLHttpRequest.prototype ? b.attributionReporting = {
            eventSourceEligible: "true",
            triggerEligible: "false"
        } : b.headers = {
            "Attribution-Reporting-Eligible": "event-source"
        }),
        c.fetch(a, b)) : ce(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
    };
    function fe(a, b) {
        try {
            var c = function(d) {
                var e = {};
                return [(e[d.ja] = d.ga,
                e)]
            };
            return JSON.stringify([a.filter(function(d) {
                return d.V
            }).map(c), b.toJSON(), a.filter(function(d) {
                return !d.V
            }).map(c)])
        } catch (d) {
            return ge(d, b),
            ""
        }
    }
    function ge(a, b) {
        try {
            var c = a instanceof Error ? a : Error(String(a))
              , d = c.toString();
            c.name && -1 == d.indexOf(c.name) && (d += ": " + c.name);
            c.message && -1 == d.indexOf(c.message) && (d += ": " + c.message);
            if (c.stack)
                a: {
                    var e = c.stack;
                    a = d;
                    try {
                        -1 == e.indexOf(a) && (e = a + "\n" + e);
                        for (var f; e != f; )
                            f = e,
                            e = e.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                        d = e.replace(RegExp("\n *", "g"), "\n");
                        break a
                    } catch (g) {
                        d = a;
                        break a
                    }
                    d = void 0
                }
            ee({
                m: d,
                b: U(b, 1) || null,
                v: T(b, 2) || null
            })
        } catch (g) {}
    }
    var he = function(a, b) {
        var c = new Zd;
        a = P(c, 1, J(a), 0);
        b = P(a, 2, K(b), "");
        a = b.i;
        c = H(a);
        this.l = c & 2 ? b : Vb(b.constructor, cc(a, c, !0))
    };
    var ie = function(a) {
        this.i = L(a)
    };
    y(ie, V);
    var ke = function(a, b) {
        return Q(a, 3, je, null == b ? b : Eb(b))
    }
      , je = [1, 2, 3];
    var le = function(a) {
        this.i = L(a)
    };
    y(le, V);
    var me = [2, 4];
    var ne = function(a) {
        this.i = L(a)
    };
    y(ne, V);
    var oe = function(a) {
        var b = new ne;
        return P(b, 1, K(a), "")
    }
      , pe = function(a, b) {
        var c = a.i
          , d = H(c);
        ub(d);
        c = wc(c, d, ie, 4, !0);
        b = null != b ? b : new ie;
        c.push(b);
        G(b.i) & 2 ? ib(c, 8) : ib(c, 16);
        return a
    };
    ne.u = [4];
    var qe = function(a) {
        this.i = L(a)
    };
    y(qe, V);
    var re = function(a) {
        this.i = L(a)
    };
    y(re, V);
    var se = function(a, b) {
        return P(a, 1, J(b), 0)
    }
      , te = function(a, b) {
        return P(a, 2, J(b), 0)
    };
    var ue = function(a) {
        this.i = L(a)
    };
    y(ue, V);
    var ve = [1, 2];
    var we = function(a) {
        this.i = L(a)
    };
    y(we, V);
    var xe = function(a, b) {
        return xc(a, 1, b)
    }
      , ye = function(a, b) {
        return zc(a, 2, b)
    }
      , ze = function(a, b) {
        return nc(a, 4, b, Hb)
    }
      , Ae = function(a, b) {
        return zc(a, 5, b)
    }
      , Be = function(a, b) {
        return P(a, 6, J(b), 0)
    };
    we.u = [2, 4, 5];
    var Ce = function(a) {
        this.i = L(a)
    };
    y(Ce, V);
    Ce.u = [5];
    var De = [1, 2, 3, 4, 6];
    var Ee = function(a) {
        this.i = L(a)
    };
    y(Ee, V);
    Ee.u = [2, 3];
    var Fe = function(a) {
        this.i = L(a)
    };
    y(Fe, V);
    var Ge = [2, 3, 4];
    var He = function(a) {
        this.i = L(a)
    };
    y(He, V);
    He.u = [2, 8];
    var Ie = [3, 4, 5]
      , Je = [6, 7];
    var Ke = function(a) {
        this.i = L(a)
    };
    y(Ke, V);
    var Le = [4, 5];
    var Me = function(a) {
        this.i = L(a)
    };
    y(Me, V);
    Me.prototype.getTagSessionCorrelator = function() {
        return Fc(this, 2)
    }
    ;
    var Oe = function(a) {
        var b = new Me;
        return yc(b, 4, Ne, a)
    }
      , Ne = [4, 5, 7, 8, 9];
    var Pe = function(a) {
        this.i = L(a)
    };
    y(Pe, V);
    Pe.u = [3];
    var Qe = function(a) {
        this.i = L(a)
    };
    y(Qe, V);
    Qe.u = [4, 5];
    var Re = function(a) {
        this.i = L(a)
    };
    y(Re, V);
    Re.prototype.getTagSessionCorrelator = function() {
        return Fc(this, 1)
    }
    ;
    Re.u = [2];
    var Se = function(a) {
        this.i = L(a)
    };
    y(Se, V);
    var Te = [4, 6];
    var Ve = function(a) {
        this.fb = new Ue(a)
    }
      , Ue = function(a) {
        this.Qa = new We(a)
    }
      , We = function(a) {
        this.outstream = new Xe;
        this.request = new Ye;
        this.Ra = new Ze(a);
        this.Ta = new $e(a)
    }
      , Ze = function(a) {
        this.ca = function(b) {
            var c = b.ia;
            var d = b.ea;
            b = b.fa;
            d = pe(pe(oe("JwITQ"), ke(new ie, d)), ke(new ie, b));
            b = new le;
            c = Q(b, 2, me, Lb(Math.round(c)));
            c = xc(d, 3, c);
            a(c)
        }
    }
      , $e = function(a) {
        this.ca = function(b) {
            var c = b.ia;
            var d = b.ea;
            b = b.fa;
            d = pe(pe(oe("Pn3Upd"), ke(new ie, d)), ke(new ie, b));
            b = new le;
            c = Q(b, 2, me, Lb(Math.round(c)));
            c = xc(d, 3, c);
            a(c)
        }
    }
      , Xe = function() {}
      , Ye = function() {}
      , af = function() {
        he.apply(this, arguments);
        var a = this;
        this.Wa = new Ve(function(b) {
            return a.S(b)
        }
        )
    };
    y(af, he);
    var bf = function() {
        af.apply(this, arguments)
    };
    y(bf, af);
    bf.prototype.cb = function() {
        this.o.apply(this, ja(ta.apply(0, arguments).map(function(a) {
            return {
                V: !0,
                ja: 2,
                ga: a.toJSON()
            }
        })))
    }
    ;
    bf.prototype.W = function() {
        this.o.apply(this, ja(ta.apply(0, arguments).map(function(a) {
            return {
                V: !0,
                ja: 4,
                ga: a.toJSON()
            }
        })))
    }
    ;
    bf.prototype.S = function() {
        this.o.apply(this, ja(ta.apply(0, arguments).map(function(a) {
            return {
                V: !1,
                ja: 1,
                ga: a.toJSON()
            }
        })))
    }
    ;
    var cf = function(a, b) {
        if (u.globalThis.fetch)
            u.globalThis.fetch(a, {
                method: "POST",
                body: b,
                keepalive: 65536 > b.length,
                credentials: "omit",
                mode: "no-cors",
                redirect: "follow"
            }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var df = function(a, b, c, d, e, f, g, h) {
        bf.call(this, a, b);
        this.P = c;
        this.O = d;
        this.R = e;
        this.M = f;
        this.N = g;
        this.B = h;
        this.g = [];
        this.j = null;
        this.J = !1
    };
    y(df, bf);
    var ef = function(a) {
        null !== a.j && (clearTimeout(a.j),
        a.j = null);
        if (a.g.length) {
            var b = fe(a.g, a.l);
            a.O(a.P + "?e=1", b);
            a.g = []
        }
    };
    df.prototype.o = function() {
        var a = ta.apply(0, arguments)
          , b = this;
        try {
            this.N && 65536 <= fe(this.g.concat(a), this.l).length && ef(this),
            this.B && !this.J && (this.J = !0,
            this.B.g(function() {
                ef(b)
            })),
            this.g.push.apply(this.g, ja(a)),
            this.g.length >= this.M && ef(this),
            this.g.length && null === this.j && (this.j = setTimeout(function() {
                ef(b)
            }, this.R))
        } catch (c) {
            ge(c, this.l)
        }
    }
    ;
    var ff = function(a, b, c, d, e, f) {
        df.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", cf, void 0 === c ? 1E3 : c, void 0 === d ? 100 : d, (void 0 === e ? !1 : e) && !!u.globalThis.fetch, f)
    };
    y(ff, df);
    var gf = function(a) {
        this.g = a;
        this.defaultValue = !1
    }
      , hf = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? 0 : b
    };
    var jf = new gf(501898423)
      , kf = new hf(620585025,2)
      , lf = new hf(635239304)
      , mf = new hf(523264412)
      , nf = new hf(24)
      , of = new function(a, b) {
        b = void 0 === b ? [] : b;
        this.g = a;
        this.defaultValue = b
    }
    (1934,["AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "Amm8/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "A/ERL66fN363FkXxgDc6F1+ucRUkAhjEca9W3la6xaLnD2Y1lABsqmdaJmPNaUKPKVBRpyMKEhXYl7rSvrQw+AkAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A6OdGH3fVf4eKRDbXb4thXA4InNqDJDRhZ8U533U/roYjp4Yau0T3YSuc63vmAs/8ga1cD0E3A7LEq6AXk1uXgsAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]);
    var pf = new gf(203);
    var qf = function(a) {
        this.i = L(a)
    };
    y(qf, V);
    var rf = function(a) {
        this.i = L(a)
    };
    y(rf, V);
    var sf = function(a) {
        this.i = L(a)
    };
    y(sf, V);
    var tf = function(a) {
        this.i = L(a)
    };
    y(tf, V);
    var uf = Pc(tf);
    tf.u = [7];
    var vf = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    vf.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.xb;
            d = c.yb || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Va
        }
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    }
    ;
    vf.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Aa(d[e]);
            if (0 == f.lastIndexOf(c, 0))
                return f.slice(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    vf.prototype.isEmpty = function() {
        return !this.g.cookie
    }
    ;
    vf.prototype.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++)
            e = Aa(a[f]),
            d = e.indexOf("="),
            -1 == d ? (b.push(""),
            c.push(e)) : (b.push(e.substring(0, d)),
            c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--)
            c = b[a],
            this.get(c),
            this.set(c, "", {
                Va: 0,
                path: void 0,
                domain: void 0
            })
    }
    ;
    function wf(a) {
        a = xf(a);
        try {
            var b = a ? uf(a) : null
        } catch (c) {
            b = null
        }
        return b ? R(b, sf, 4) || null : null
    }
    function xf(a) {
        a = (new vf(a)).get("FCCDCF", "");
        if (a)
            if (v(a, "startsWith").call(a, "%"))
                try {
                    var b = decodeURIComponent(a)
                } catch (c) {
                    b = null
                }
            else
                b = a;
        else
            b = null;
        return b
    }
    ;Yc(Fd).map(function(a) {
        return Number(a)
    });
    Yc(Gd).map(function(a) {
        return Number(a)
    });
    var yf = function(a) {
        this.g = a;
        this.j = null
    }
      , Af = function(a) {
        a.__tcfapiPostMessageReady || zf(new yf(a))
    }
      , zf = function(a) {
        a.j = function(b) {
            var c = "string" == typeof b.data;
            try {
                var d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            var e = d.__tcfapiCall;
            !e || "ping" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, function(f, g) {
                var h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                return f
            }, e.parameter)
        }
        ;
        a.g.addEventListener("message", a.j);
        a.g.__tcfapiPostMessageReady = !0
    };
    var Bf = function(a) {
        this.g = a;
        this.j = null
    }
      , Df = function(a) {
        a.__uspapiPostMessageReady || Cf(new Bf(a))
    }
      , Cf = function(a) {
        a.j = function(b) {
            var c = "string" === typeof b.data;
            try {
                var d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            var e = d.__uspapiCall;
            e && "getUSPData" === e.command && a.g.__uspapi(e.command, e.version, function(f, g) {
                var h = {};
                h.__uspapiReturn = {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                return f
            })
        }
        ;
        a.g.addEventListener("message", a.j);
        a.g.__uspapiPostMessageReady = !0
    };
    var Ef = function(a) {
        this.i = L(a)
    };
    y(Ef, V);
    var Ff = function(a) {
        this.i = L(a)
    };
    y(Ff, V);
    var Gf = Pc(Ff);
    Ff.u = [2];
    function Hf(a, b) {
        function c(l) {
            if (10 > l.length)
                return null;
            var m = f(l.slice(0, 4));
            m = g(m);
            l = f(l.slice(6, 10));
            l = h(l);
            return "1" + m + l + "N"
        }
        function d(l) {
            if (10 > l.length)
                return null;
            var m = f(l.slice(0, 6));
            m = g(m);
            l = f(l.slice(6, 10));
            l = h(l);
            return "1" + m + l + "N"
        }
        function e(l) {
            if (12 > l.length)
                return null;
            var m = f(l.slice(0, 6));
            m = g(m);
            l = f(l.slice(8, 12));
            l = h(l);
            return "1" + m + l + "N"
        }
        function f(l) {
            for (var m = [], q = 0, p = 0; p < l.length / 2; p++)
                m.push(Jd(l.slice(q, q + 2))),
                q += 2;
            return m
        }
        function g(l) {
            return l.every(function(m) {
                return 1 === m
            }) ? "Y" : "N"
        }
        function h(l) {
            return l.some(function(m) {
                return 1 === m
            }) ? "Y" : "N"
        }
        if (0 === a.length)
            return null;
        a = a.split(".");
        if (2 < a.length)
            return null;
        a = Id(a[0]);
        var k = Jd(a.slice(0, 6));
        a = a.slice(6);
        if (1 !== k)
            return null;
        switch (b) {
        case 8:
            return c(a);
        case 10:
        case 12:
        case 9:
            return d(a);
        case 11:
            return e(a);
        default:
            return null
        }
    }
    ;function If(a, b) {
        var c = a.document
          , d = function() {
            if (!a.frames[b])
                if (c.body) {
                    var e = Dd("IFRAME", c);
                    e.style.display = "none";
                    e.style.width = "0px";
                    e.style.height = "0px";
                    e.style.border = "none";
                    e.style.zIndex = "-1000";
                    e.style.left = "-1000px";
                    e.style.top = "-1000px";
                    e.name = b;
                    c.body.appendChild(e)
                } else
                    a.setTimeout(d, 5)
        };
        d()
    }
    ;var Lf = function(a) {
        this.g = a;
        var b = xf(this.g.document);
        try {
            var c = b ? uf(b) : null
        } catch (e) {
            c = null
        }
        (b = c) ? (c = R(b, rf, 5) || null,
        b = S(b, qf, 7),
        b = Jf(null != b ? b : []),
        c = {
            ya: c,
            Ba: b
        }) : c = {
            ya: null,
            Ba: null
        };
        b = c;
        c = Kf(b.Ba);
        b = b.ya;
        if (null != b && null != Rb(M(b, 2)) && 0 !== T(b, 2).length) {
            var d = void 0 !== uc(b, Qd, 1, !1) ? R(b, Qd, 1) : Rd();
            b = {
                uspString: T(b, 2),
                aa: Sd(d)
            }
        } else
            b = null;
        this.l = b && c ? c.aa > b.aa ? c.uspString : b.uspString : b ? b.uspString : c ? c.uspString : null;
        this.tcString = (c = wf(a.document)) && null != Rb(M(c, 1)) ? T(c, 1) : null;
        this.j = (a = wf(a.document)) && null != Rb(M(a, 2)) ? T(a, 2) : null
    }
      , Of = function(a) {
        a !== a.top || a.__uspapi || a.frames.__uspapiLocator || (a = new Lf(a),
        Mf(a),
        Nf(a))
    }
      , Mf = function(a) {
        !a.l || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc",
        If(a.g, "__uspapiLocator"),
        ya("__uspapi", function(b, c, d) {
            "function" === typeof d && "getUSPData" === b && d({
                version: 1,
                uspString: a.l
            }, !0)
        }, a.g),
        Df(a.g))
    }
      , Jf = function(a) {
        a = v(a, "find").call(a, function(b) {
            return b && 13 === U(b, 1)
        });
        if (null == a ? 0 : null != Rb(M(a, 2)))
            try {
                return Gf(T(a, 2))
            } catch (b) {}
        return null
    }
      , Kf = function(a) {
        if (null == a || null == Rb(M(a, 1)) || 0 === T(a, 1).length || 0 === S(a, Ef, 2).length)
            return null;
        var b = T(a, 1);
        try {
            var c = Ld(b.split("~")[0]);
            var d = v(b, "includes").call(b, "~") ? b.split("~").slice(1) : []
        } catch (e) {
            return null
        }
        a = S(a, Ef, 2).reduce(function(e, f) {
            return Fc(Pf(e), 1) > Fc(Pf(f), 1) ? e : f
        });
        c = hc(c, 3, Jb).indexOf(Dc(a, 1));
        return -1 === c || c >= d.length ? null : {
            uspString: Hf(d[c], Dc(a, 1)),
            aa: Sd(Pf(a))
        }
    }
      , Pf = function(a) {
        return void 0 !== uc(a, Qd, 2, !1) ? R(a, Qd, 2) : Rd()
    }
      , Nf = function(a) {
        !a.tcString || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc",
        If(a.g, "__tcfapiLocator"),
        a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [],
        ya("__tcfapi", function(b, c, d, e) {
            if ("function" === typeof d)
                if (c && (2.2 < c || 1 >= c))
                    d(null, !1);
                else
                    switch (c = a.g.__tcfapiEventListeners,
                    b) {
                    case "ping":
                        d({
                            gdprApplies: !0,
                            cmpLoaded: !0,
                            cmpStatus: "loaded",
                            displayStatus: "disabled",
                            apiVersion: "2.2",
                            cmpVersion: 2,
                            cmpId: 300
                        });
                        break;
                    case "addEventListener":
                        b = c.push(d) - 1;
                        a.tcString ? (e = Yd(a.tcString),
                        e.addtlConsent = null != a.j ? a.j : void 0,
                        e.cmpStatus = "loaded",
                        e.eventStatus = "tcloaded",
                        null != b && (e.listenerId = b),
                        b = e) : b = null;
                        d(b, !0);
                        break;
                    case "removeEventListener":
                        void 0 !== e && c[e] ? (c[e] = null,
                        d(!0)) : d(!1);
                        break;
                    case "getInAppTCData":
                    case "getVendorList":
                        d(null, !1);
                        break;
                    case "getTCData":
                        d(null, !1)
                    }
        }, a.g),
        Af(a.g))
    };
    var Qf = function(a) {
        return "string" === typeof a
    };
    function Rf(a, b) {
        var c = S(a, He, 2);
        if (!c.length)
            return Sf(a, b);
        a = U(a, 1);
        if (1 === a) {
            var d = Rf(c[0], b);
            return d.success ? {
                success: !0,
                value: !d.value
            } : d
        }
        c = Ka(c, function(h) {
            return Rf(h, b)
        });
        switch (a) {
        case 2:
            var e;
            return null != (e = null != (d = v(c, "find").call(c, function(h) {
                return h.success && !h.value
            })) ? d : v(c, "find").call(c, function(h) {
                return !h.success
            })) ? e : {
                success: !0,
                value: !0
            };
        case 3:
            var f, g;
            return null != (g = null != (f = v(c, "find").call(c, function(h) {
                return h.success && h.value
            })) ? f : v(c, "find").call(c, function(h) {
                return !h.success
            })) ? g : {
                success: !0,
                value: !1
            };
        default:
            return {
                success: !1,
                F: 3
            }
        }
    }
    function Sf(a, b) {
        var c = rc(a, Ie);
        a: {
            switch (c) {
            case 3:
                var d = Ic(a, 3, Ie);
                break a;
            case 4:
                d = Ic(a, 4, Ie);
                break a;
            case 5:
                d = Ic(a, 5, Ie);
                break a
            }
            d = void 0
        }
        if (!d)
            return {
                success: !1,
                F: 2
            };
        b = (b = b[c]) && b[d];
        if (!b)
            return {
                success: !1,
                L: d,
                T: c,
                F: 1
            };
        try {
            var e = b.apply;
            var f = Hc(a, 8);
            var g = e.call(b, null, ja(f))
        } catch (h) {
            return {
                success: !1,
                L: d,
                T: c,
                F: 2
            }
        }
        e = U(a, 1);
        if (4 === e)
            return {
                success: !0,
                value: !!g
            };
        if (5 === e)
            return {
                success: !0,
                value: null != g
            };
        if (12 === e)
            a = T(a, qc(a, Je, 7));
        else
            a: {
                switch (c) {
                case 4:
                    a = Gc(a, qc(a, Je, 6));
                    break a;
                case 5:
                    a = T(a, qc(a, Je, 7));
                    break a
                }
                a = void 0
            }
        if (null == a)
            return {
                success: !1,
                L: d,
                T: c,
                F: 3
            };
        if (6 === e)
            return {
                success: !0,
                value: g === a
            };
        if (9 === e)
            return {
                success: !0,
                value: null != g && 0 === Ca(String(g), a)
            };
        if (null == g)
            return {
                success: !1,
                L: d,
                T: c,
                F: 4
            };
        switch (e) {
        case 7:
            c = g < a;
            break;
        case 8:
            c = g > a;
            break;
        case 12:
            c = Qf(a) && Qf(g) && (new RegExp(a)).test(g);
            break;
        case 10:
            c = null != g && -1 === Ca(String(g), a);
            break;
        case 11:
            c = null != g && 1 === Ca(String(g), a);
            break;
        default:
            return {
                success: !1,
                F: 3
            }
        }
        return {
            success: !0,
            value: c
        }
    }
    function Tf(a, b) {
        return a ? b ? Rf(a, b) : {
            success: !1,
            F: 1
        } : {
            success: !0,
            value: !0
        }
    }
    ;var sc = function(a) {
        this.i = L(a)
    };
    y(sc, V);
    sc.u = [4];
    var Uf = function(a) {
        this.i = L(a)
    };
    y(Uf, V);
    Uf.prototype.getValue = function() {
        return R(this, sc, 2)
    }
    ;
    var Vf = function(a) {
        this.i = L(a)
    };
    y(Vf, V);
    var Wf = Pc(Vf);
    Vf.u = [5];
    var Xf = [1, 2, 3, 6, 7, 8];
    var Yf = function(a, b, c) {
        var d = void 0 === d ? new ff(6,"unknown",b) : d;
        this.B = a;
        this.o = c;
        this.j = d;
        this.g = [];
        this.l = 0 < a && yd() < 1 / a
    }
      , $f = function(a, b, c, d, e, f) {
        if (a.l) {
            var g = te(se(new re, b), c);
            b = Be(ye(xe(Ae(ze(new we, d), e), g), a.g.slice()), f);
            b = Oe(b);
            a.j.W(Zf(a, b));
            if (1 === f || 3 === f || 4 === f && !a.g.some(function(h) {
                return U(h, 1) === U(g, 1) && U(h, 2) === c
            }))
                a.g.push(g),
                100 < a.g.length && a.g.shift()
        }
    }
      , ag = function(a, b, c, d) {
        if (a.l) {
            var e = new qe;
            b = O(e, 1, Ib(b));
            c = O(b, 2, Ib(c));
            d = O(c, 3, J(d));
            c = new Me;
            d = yc(c, 8, Ne, d);
            a.j.W(Zf(a, d))
        }
    }
      , bg = function(a, b, c, d, e) {
        if (a.l) {
            var f = new Ke;
            b = xc(f, 1, b);
            c = O(b, 2, J(c));
            d = O(c, 3, Ib(d));
            if (void 0 === e.T)
                Q(d, 4, Le, J(e.F));
            else
                switch (e.T) {
                case 3:
                    c = new Fe;
                    c = Q(c, 2, Ge, J(e.L));
                    e = O(c, 1, J(e.F));
                    yc(d, 5, Le, e);
                    break;
                case 4:
                    c = new Fe;
                    c = Q(c, 3, Ge, J(e.L));
                    e = O(c, 1, J(e.F));
                    yc(d, 5, Le, e);
                    break;
                case 5:
                    c = new Fe,
                    c = Q(c, 4, Ge, J(e.L)),
                    e = O(c, 1, J(e.F)),
                    yc(d, 5, Le, e)
                }
            e = new Me;
            e = yc(e, 9, Ne, d);
            a.j.W(Zf(a, e))
        }
    }
      , Zf = function(a, b) {
        var c = Date.now();
        c = v(Number, "isFinite").call(Number, c) ? Math.round(c) : 0;
        b = P(b, 1, Lb(c), "0");
        c = Ed(window);
        b = P(b, 2, Lb(c), "0");
        return P(b, 6, Lb(a.B), "0")
    };
    var W = function(a) {
        var b = "da";
        if (a.da && a.hasOwnProperty(b))
            return a.da;
        b = new a;
        return a.da = b
    };
    var cg = function() {
        var a = {};
        this.D = (a[3] = {},
        a[4] = {},
        a[5] = {},
        a)
    };
    var dg = /^true$/.test("false");
    function eg(a, b) {
        switch (b) {
        case 1:
            return Ic(a, 1, Xf);
        case 2:
            return Ic(a, 2, Xf);
        case 3:
            return Ic(a, 3, Xf);
        case 6:
            return Ic(a, 6, Xf);
        case 8:
            return Ic(a, 8, Xf);
        default:
            return null
        }
    }
    function fg(a, b) {
        if (!a)
            return null;
        switch (b) {
        case 1:
            return Cc(a, 1);
        case 7:
            return T(a, 3);
        case 2:
            return Gc(a, 2);
        case 3:
            return T(a, 3);
        case 6:
            return Hc(a, 4);
        case 8:
            return Hc(a, 4);
        default:
            return null
        }
    }
    var gg = Wc(function() {
        if (!dg)
            return {};
        try {
            var a;
            var b = void 0 === b ? window : b;
            try {
                var c = b.sessionStorage
            } catch (e) {
                c = null
            }
            var d = null == (a = c) ? void 0 : a.getItem("GGDFSSK");
            if (d)
                return JSON.parse(d)
        } catch (e) {}
        return {}
    });
    function hg(a, b, c, d) {
        var e = d = void 0 === d ? 0 : d, f, g;
        W(ig).l[e] = null != (g = null == (f = W(ig).l[e]) ? void 0 : f.add(b)) ? g : (new u.Set).add(b);
        e = gg();
        if (null != e[b])
            return e[b];
        b = jg(d)[b];
        if (!b)
            return c;
        b = Wf(JSON.stringify(b));
        b = kg(b);
        a = fg(b, a);
        return null != a ? a : c
    }
    function kg(a) {
        var b = W(cg).D;
        if (b && 8 !== rc(a, Xf)) {
            var c = La(S(a, Uf, 5), function(f) {
                f = Tf(R(f, He, 1), b);
                return f.success && f.value
            });
            if (c) {
                var d;
                return null != (d = c.getValue()) ? d : null
            }
        }
        var e;
        return null != (e = R(a, sc, 4)) ? e : null
    }
    var ig = function() {
        this.j = {};
        this.o = [];
        this.l = {};
        this.g = new u.Map
    };
    function lg(a, b, c) {
        return !!hg(1, a, void 0 === b ? !1 : b, c)
    }
    function mg(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(hg(2, a, b, c));
        return isNaN(a) ? b : a
    }
    function ng(a, b, c) {
        b = void 0 === b ? "" : b;
        a = hg(3, a, b, c);
        return "string" === typeof a ? a : b
    }
    function og(a, b, c) {
        b = void 0 === b ? [] : b;
        a = hg(6, a, b, c);
        return Array.isArray(a) ? a : b
    }
    function pg(a, b, c) {
        b = void 0 === b ? [] : b;
        a = hg(8, a, b, c);
        return Array.isArray(a) ? a : b
    }
    function jg(a) {
        return W(ig).j[a] || (W(ig).j[a] = {})
    }
    function qg(a, b) {
        var c = jg(b);
        zd(a, function(d, e) {
            if (c[e]) {
                d = Wf(JSON.stringify(d));
                if (null != Bc(d, qc(d, Xf, 8))) {
                    var f = Wf(JSON.stringify(c[e]))
                      , g = tc(d);
                    f = Hc(vc(f, sc, 4), 4);
                    oc(g, f)
                }
                c[e] = d.toJSON()
            } else
                c[e] = d
        })
    }
    function rg(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = []
          , g = [];
        b = x(b);
        for (var h = b.next(); !h.done; h = b.next()) {
            h = h.value;
            for (var k = jg(h), l = x(a), m = l.next(); !m.done; m = l.next()) {
                m = m.value;
                var q = rc(m, Xf)
                  , p = eg(m, q);
                if (p) {
                    var r = void 0
                      , t = void 0
                      , A = void 0;
                    var B = null != (r = null == (A = W(ig).g.get(h)) ? void 0 : null == (t = A.get(p)) ? void 0 : t.slice(0)) ? r : [];
                    a: {
                        r = p;
                        t = q;
                        A = new Ce;
                        switch (t) {
                        case 1:
                            Q(A, 1, De, J(r));
                            break;
                        case 2:
                            Q(A, 2, De, J(r));
                            break;
                        case 3:
                            Q(A, 3, De, J(r));
                            break;
                        case 6:
                            Q(A, 4, De, J(r));
                            break;
                        case 8:
                            Q(A, 6, De, J(r));
                            break;
                        default:
                            B = void 0;
                            break a
                        }
                        nc(A, 5, B, Hb);
                        B = A
                    }
                    if (r = B)
                        t = void 0,
                        r = !(null == (t = W(ig).l[h]) || !t.has(p));
                    r && f.push(B);
                    if (8 === q && k[p])
                        B = Wf(JSON.stringify(k[p])),
                        q = tc(m),
                        B = Hc(vc(B, sc, 4), 4),
                        oc(q, B);
                    else {
                        if (q = B)
                            r = void 0,
                            q = !(null == (r = W(ig).g.get(h)) || !r.has(p));
                        q && g.push(B)
                    }
                    e || (q = p,
                    B = h,
                    r = d,
                    t = W(ig),
                    t.g.has(B) || t.g.set(B, new u.Map),
                    t.g.get(B).has(q) || t.g.get(B).set(q, []),
                    r && t.g.get(B).get(q).push(r));
                    k[p] = m.toJSON()
                }
            }
        }
        if (f.length || g.length)
            a = null != d ? d : void 0,
            c.l && c.o && (d = new Ee,
            f = zc(d, 2, f),
            g = zc(f, 3, g),
            a && P(g, 1, Ib(a), 0),
            f = new Me,
            g = yc(f, 7, Ne, g),
            c.j.W(Zf(c, g)))
    }
    function sg(a, b) {
        b = jg(b);
        a = x(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = Wf(JSON.stringify(c))
              , e = rc(d, Xf);
            (d = eg(d, e)) && (b[d] || (b[d] = c))
        }
    }
    function tg() {
        return v(Object, "keys").call(Object, W(ig).j).map(function(a) {
            return Number(a)
        })
    }
    function ug(a) {
        (n = W(ig).o,
        v(n, "includes")).call(n, a) || qg(jg(4), a)
    }
    ;function Y(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }
    function Z(a, b, c) {
        return b[a] || c
    }
    function vg(a) {
        Y(5, lg, a);
        Y(6, mg, a);
        Y(7, ng, a);
        Y(8, og, a);
        Y(17, pg, a);
        Y(13, sg, a);
        Y(15, ug, a)
    }
    function wg(a) {
        Y(4, function(b) {
            W(cg).D = b
        }, a);
        Y(9, function(b, c) {
            var d = W(cg);
            null == d.D[3][b] && (d.D[3][b] = c)
        }, a);
        Y(10, function(b, c) {
            var d = W(cg);
            null == d.D[4][b] && (d.D[4][b] = c)
        }, a);
        Y(11, function(b, c) {
            var d = W(cg);
            null == d.D[5][b] && (d.D[5][b] = c)
        }, a);
        Y(14, function(b) {
            for (var c = W(cg), d = x([3, 4, 5]), e = d.next(); !e.done; e = d.next())
                e = e.value,
                v(Object, "assign").call(Object, c.D[e], b[e])
        }, a)
    }
    function xg(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    }
    ;var yg = function() {};
    yg.prototype.j = function() {}
    ;
    yg.prototype.g = function() {
        return []
    }
    ;
    var zg = function(a, b, c) {
        a.j = function(d, e) {
            Z(2, b, function() {
                return []
            })(d, c, e)
        }
        ;
        a.g = function() {
            return Z(3, b, function() {
                return []
            })(c)
        }
    };
    function Ag(a, b) {
        try {
            var c = a.split(".");
            a = z;
            for (var d = 0, e; null != a && d < c.length; d++)
                e = a,
                a = a[c[d]],
                "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b)
                return f
        } catch (g) {}
    }
    var Bg = {}
      , Cg = {}
      , Dg = {}
      , Eg = {}
      , Fg = (Eg[3] = (Bg[8] = function(a) {
        try {
            return null != wa(a)
        } catch (b) {}
    }
    ,
    Bg[9] = function(a) {
        try {
            var b = wa(a)
        } catch (c) {
            return
        }
        if (a = "function" === typeof b)
            b = b && b.toString && b.toString(),
            a = "string" === typeof b && -1 != b.indexOf("[native code]");
        return a
    }
    ,
    Bg[10] = function() {
        return window === window.top
    }
    ,
    Bg[6] = function(a) {
        var b = W(yg).g();
        return 0 <= Array.prototype.indexOf.call(b, Number(a), void 0)
    }
    ,
    Bg[27] = function(a) {
        a = Ag(a, "boolean");
        return void 0 !== a ? a : void 0
    }
    ,
    Bg[60] = function(a) {
        try {
            return !!z.document.querySelector(a)
        } catch (b) {}
    }
    ,
    Bg[80] = function(a) {
        try {
            return !!z.matchMedia(a).matches
        } catch (b) {}
    }
    ,
    Bg[69] = function(a) {
        var b = z.document;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(n = c.features(),
        v(n, "includes")).call(n, a))
    }
    ,
    Bg[70] = function(a) {
        var b = z.document;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(n = c.allowedFeatures(),
        v(n, "includes")).call(n, a))
    }
    ,
    Bg[79] = function(a) {
        var b = z.navigator;
        b = void 0 === b ? navigator : b;
        try {
            var c, d;
            var e = !!(null == (c = b.protectedAudience) ? 0 : null == (d = c.queryFeatureSupport) ? 0 : d.call(c, a))
        } catch (f) {
            e = !1
        }
        return e
    }
    ,
    Bg),
    Eg[4] = (Cg[3] = function() {
        return Bd()
    }
    ,
    Cg[6] = function(a) {
        a = Ag(a, "number");
        return void 0 !== a ? a : void 0
    }
    ,
    Cg),
    Eg[5] = (Dg[2] = function() {
        return window.location.href
    }
    ,
    Dg[3] = function() {
        try {
            return window.top.location.hash
        } catch (a) {
            return ""
        }
    }
    ,
    Dg[4] = function(a) {
        a = Ag(a, "string");
        return void 0 !== a ? a : void 0
    }
    ,
    Dg),
    Eg);
    function Gg() {
        var a = void 0 === a ? z : a;
        return a.ggeac || (a.ggeac = {})
    }
    ;var Hg = function(a) {
        this.i = L(a)
    };
    y(Hg, V);
    Hg.prototype.getId = function() {
        return Dc(this, 1)
    }
    ;
    Hg.u = [2];
    var Ig = function(a) {
        this.i = L(a)
    };
    y(Ig, V);
    Ig.u = [2];
    var Jg = function(a) {
        this.i = L(a)
    };
    y(Jg, V);
    Jg.u = [2];
    var Kg = function(a) {
        this.i = L(a)
    };
    y(Kg, V);
    var Lg = function(a) {
        this.i = L(a)
    };
    y(Lg, V);
    Lg.u = [1, 4, 2, 3];
    function Mg(a) {
        var b = {};
        return Ng((b[0] = new u.Map,
        b[1] = new u.Map,
        b[2] = new u.Map,
        b), a)
    }
    function Ng(a, b) {
        for (var c = new u.Map, d = x(v(a[1], "entries").call(a[1])), e = d.next(); !e.done; e = d.next()) {
            var f = x(e.value);
            e = f.next().value;
            f = f.next().value;
            f = f[f.length - 1];
            c.set(e, f.Ha + f.Ea * f.Fa)
        }
        b = x(b);
        for (d = b.next(); !d.done; d = b.next())
            for (d = d.value,
            e = S(d, Ig, 2),
            e = x(e),
            f = e.next(); !f.done; f = e.next())
                if (f = f.value,
                0 !== S(f, Hg, 2).length) {
                    var g = Ec(f, 8);
                    if (U(f, 4) && !U(f, 13)) {
                        var h = void 0;
                        g = null != (h = c.get(U(f, 4))) ? h : 0;
                        h = Ec(f, 1) * S(f, Hg, 2).length;
                        c.set(U(f, 4), g + h)
                    }
                    h = [];
                    for (var k = 0; k < S(f, Hg, 2).length; k++) {
                        var l = {
                            Ha: g,
                            Ea: Ec(f, 1),
                            Fa: S(f, Hg, 2).length,
                            Xa: k,
                            U: U(d, 1),
                            X: f,
                            H: S(f, Hg, 2)[k]
                        };
                        h.push(l)
                    }
                    Og(a[2], U(f, 10), h) || Og(a[1], U(f, 4), h) || Og(a[0], S(f, Hg, 2)[0].getId(), h)
                }
        return a
    }
    function Og(a, b, c) {
        if (!b)
            return !1;
        a.has(b) || a.set(b, []);
        var d;
        (d = a.get(b)).push.apply(d, ja(c));
        return !0
    }
    ;function Pg(a) {
        a = void 0 === a ? yd() : a;
        return function(b) {
            return Ad(b + " + " + a) % 1E3
        }
    }
    ;var Qg = [12, 13, 20]
      , Rg = function(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = void 0 === d.ba ? !1 : d.ba;
        d = void 0 === d.ab ? [] : d.ab;
        this.K = a;
        this.C = c;
        this.o = {};
        this.ba = e;
        a = {};
        this.g = (a[b] = [],
        a[4] = [],
        a);
        this.j = {};
        this.l = {};
        var f;
        if (null === ae) {
            ae = "";
            try {
                b = "";
                try {
                    b = z.top.location.hash
                } catch (g) {
                    b = z.location.hash
                }
                b && (ae = (f = b.match(/\bdeid=([\d,]+)/)) ? f[1] : "")
            } catch (g) {}
        }
        if (f = ae)
            for (f = x(f.split(",") || []),
            b = f.next(); !b.done; b = f.next())
                (b = Number(b.value)) && (this.j[b] = !0);
        d = x(d);
        for (f = d.next(); !f.done; f = d.next())
            this.j[f.value] = !0
    }
      , Ug = function(a, b, c, d) {
        var e = [], f;
        if (f = 9 !== b)
            a.o[b] ? f = !0 : (a.o[b] = !0,
            f = !1);
        if (f)
            return $f(a.C, b, c, e, [], 4),
            e;
        f = v(Qg, "includes").call(Qg, b);
        for (var g = [], h = [], k = x([0, 1, 2]), l = k.next(); !l.done; l = k.next()) {
            l = l.value;
            for (var m = x(v(a.K[l], "entries").call(a.K[l])), q = m.next(); !q.done; q = m.next()) {
                var p = x(q.value);
                q = p.next().value;
                p = p.next().value;
                var r = q
                  , t = p;
                q = new ue;
                p = t.filter(function(td) {
                    return td.U === b && a.j[td.H.getId()] && Sg(a, td)
                });
                if (p.length)
                    for (q = x(p),
                    p = q.next(); !p.done; p = q.next())
                        h.push(p.value.H);
                else if (!a.ba) {
                    p = void 0;
                    2 === l ? (p = d[1],
                    Q(q, 2, ve, J(r))) : p = d[0];
                    var A = void 0
                      , B = void 0;
                    p = null != (B = null == (A = p) ? void 0 : A(String(r))) ? B : 2 === l && 1 === U(t[0].X, 11) ? void 0 : d[0](String(r));
                    if (void 0 !== p) {
                        r = x(t);
                        for (t = r.next(); !t.done; t = r.next())
                            if (t = t.value,
                            t.U === b) {
                                A = p - t.Ha;
                                var ka = t;
                                B = ka.Ea;
                                var eb = ka.Fa;
                                ka = ka.Xa;
                                0 > A || A >= B * eb || A % eb !== ka || !Sg(a, t) || (A = U(t.X, 13),
                                0 !== A && void 0 !== A && (B = a.l[String(A)],
                                void 0 !== B && B !== t.H.getId() ? ag(a.C, a.l[String(A)], t.H.getId(), A) : a.l[String(A)] = t.H.getId()),
                                h.push(t.H))
                            }
                        0 !== rc(q, ve) && (P(q, 3, Ib(p), 0),
                        g.push(q))
                    }
                }
            }
        }
        d = x(h);
        for (h = d.next(); !h.done; h = d.next())
            h = h.value,
            k = h.getId(),
            e.push(k),
            Tg(a, k, f ? 4 : c),
            rg(S(h, Vf, 2), f ? tg() : [c], a.C, k);
        $f(a.C, b, c, e, g, 1);
        return e
    }
      , Tg = function(a, b, c) {
        a.g[c] || (a.g[c] = []);
        a = a.g[c];
        v(a, "includes").call(a, b) || a.push(b)
    }
      , Sg = function(a, b) {
        var c = W(cg).D
          , d = Tf(R(b.X, He, 3), c);
        if (!d.success)
            return bg(a.C, R(b.X, He, 3), b.U, b.H.getId(), d),
            !1;
        if (!d.value)
            return !1;
        c = Tf(R(b.H, He, 3), c);
        return c.success ? c.value ? !0 : !1 : (bg(a.C, R(b.H, He, 3), b.U, b.H.getId(), c),
        !1)
    }
      , Vg = function(a, b) {
        b = b.map(function(c) {
            return new Jg(c)
        }).filter(function(c) {
            return !v(Qg, "includes").call(Qg, U(c, 1))
        });
        a.K = Ng(a.K, b)
    }
      , Wg = function(a, b) {
        Y(1, function(c) {
            a.j[c] = !0
        }, b);
        Y(2, function(c, d, e) {
            return Ug(a, c, d, e)
        }, b);
        Y(3, function(c) {
            return (a.g[c] || []).concat(a.g[4])
        }, b);
        Y(12, function(c) {
            return void Vg(a, c)
        }, b);
        Y(16, function(c, d) {
            return void Tg(a, c, d)
        }, b)
    };
    var Xg = function() {
        var a = {};
        this.g = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.J = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.B = function(b, c) {
            return null != a[b] ? c.concat(a[b]) : c
        }
        ;
        this.o = function() {}
    };
    function Yg(a) {
        return W(Xg).g(a.g, a.defaultValue)
    }
    function Zg(a) {
        return W(Xg).j(a.g, a.defaultValue)
    }
    ;var $g = function() {
        this.g = function() {}
    }
      , ah = function(a, b) {
        a.g = Z(14, b, function() {})
    };
    function bh(a) {
        W($g).g(a)
    }
    ;var ch, dh, eh, fh, gh, hh;
    function ih(a) {
        var b = a.Oa;
        var c = a.D;
        var d = a.config;
        var e = void 0 === a.Ja ? Gg() : a.Ja;
        var f = void 0 === a.xa ? 0 : a.xa;
        var g = void 0 === a.C ? new Yf(null != (fh = null == (ch = R(b, Kg, 5)) ? void 0 : Fc(ch, 2)) ? fh : 0,null != (gh = null == (dh = R(b, Kg, 5)) ? void 0 : Fc(dh, 4)) ? gh : 0,null != (hh = null == (eh = R(b, Kg, 5)) ? void 0 : Cc(eh, 3)) ? hh : !1) : a.C;
        a = void 0 === a.K ? Mg(S(b, Jg, 2)) : a.K;
        e.hasOwnProperty("init-done") ? (Z(12, e, function() {})(S(b, Jg, 2).map(function(h) {
            return h.toJSON()
        })),
        Z(13, e, function() {})(S(b, Vf, 1).map(function(h) {
            return h.toJSON()
        }), f),
        c && Z(14, e, function() {})(c),
        jh(f, e)) : (Wg(new Rg(a,f,g,d), e),
        vg(e),
        wg(e),
        xg(e),
        jh(f, e),
        rg(S(b, Vf, 1), [f], g, void 0, !0),
        dg = dg || !(!d || !d.wb),
        bh(Fg),
        c && bh(c))
    }
    function jh(a, b) {
        var c = b = void 0 === b ? Gg() : b;
        zg(W(yg), c, a);
        kh(b, a);
        a = b;
        ah(W($g), a);
        W(Xg).o()
    }
    function kh(a, b) {
        var c = W(Xg);
        c.g = function(d, e) {
            return Z(5, a, function() {
                return !1
            })(d, e, b)
        }
        ;
        c.j = function(d, e) {
            return Z(6, a, function() {
                return 0
            })(d, e, b)
        }
        ;
        c.J = function(d, e) {
            return Z(7, a, function() {
                return ""
            })(d, e, b)
        }
        ;
        c.l = function(d, e) {
            return Z(8, a, function() {
                return []
            })(d, e, b)
        }
        ;
        c.B = function(d, e) {
            return Z(17, a, function() {
                return []
            })(d, e, b)
        }
        ;
        c.o = function() {
            Z(15, a, function() {})(b)
        }
    }
    ;var lh = ia(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"])
      , mh = function() {
        var a = void 0 === a ? "jserror" : a;
        var b = void 0 === b ? .01 : b;
        var c = void 0 === c ? id(lh) : c;
        this.l = a;
        this.j = b;
        this.g = c
    };
    var nh = function(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    }
      , oh = function(a, b) {
        var c = be(b);
        c && nh({
            label: a,
            type: 9,
            value: c
        }, b)
    }
      , ph = function(a, b, c) {
        var d = !1;
        d = void 0 === d ? !1 : d;
        var e = window
          , f = "undefined" !== typeof queueMicrotask;
        return function() {
            d && f && queueMicrotask(function() {
                e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                e.google_rum_task_id_counter += 1
            });
            var g = be()
              , h = 3;
            try {
                var k = b.apply(this, arguments)
            } catch (l) {
                h = 13;
                if (!c)
                    throw l;
                c(a, l)
            } finally {
                e.google_measure_js_timing && g && nh(v(Object, "assign").call(Object, {}, {
                    label: a.toString(),
                    value: g,
                    duration: (be() || 0) - g,
                    type: h
                }, d && f && {
                    taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                }), e)
            }
            return k
        }
    }
      , qh = function(a, b) {
        return ph(a, b, function(c, d) {
            var e = new mh;
            var f = void 0 === f ? e.j : f;
            var g = void 0 === g ? e.l : g;
            Math.random() > f || (d.error && d.meta && d.id || (d = new $d(d,{
                context: c,
                id: g
            })),
            z.google_js_errors = z.google_js_errors || [],
            z.google_js_errors.push(d),
            z.error_rep_loaded || (f = z.document,
            c = Dd("SCRIPT", f),
            md(c, e.g),
            (e = f.getElementsByTagName("script")[0]) && e.parentNode && e.parentNode.insertBefore(c, e),
            z.error_rep_loaded = !0))
        })
    };
    function rh(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }
    function sh(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }
    function th() {
        var a = new u.Set;
        var b = window.googletag;
        b = (null == b ? 0 : b.apiReady) ? b : void 0;
        try {
            if (!b)
                return a;
            for (var c = b.pubads(), d = x(c.getSlots()), e = d.next(); !e.done; e = d.next())
                a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }
    function uh(a) {
        a = a.id;
        return null != a && (th().has(a) || v(a, "startsWith").call(a, "google_ads_iframe_") || v(a, "startsWith").call(a, "aswift"))
    }
    function vh(a, b, c) {
        if (!a.sources)
            return !1;
        switch (wh(a)) {
        case 2:
            var d = xh(a);
            if (d)
                return c.some(function(f) {
                    return yh(d, f)
                });
            break;
        case 1:
            var e = zh(a);
            if (e)
                return b.some(function(f) {
                    return yh(e, f)
                })
        }
        return !1
    }
    function wh(a) {
        if (!a.sources)
            return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top)
                return 2;
            if (a.previousRect.top > a.currentRect.top)
                return 1
        }
        return 0
    }
    function zh(a) {
        return Ah(a, function(b) {
            return b.currentRect
        })
    }
    function xh(a) {
        return Ah(a, function(b) {
            return b.previousRect
        })
    }
    function Ah(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }
    function yh(a, b) {
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }
    var Bh = function() {
        var a = {
            za: !0
        };
        a = void 0 === a ? {
            za: !1
        } : a;
        this.l = this.j = this.S = this.P = this.M = 0;
        this.ta = this.qa = Number.NEGATIVE_INFINITY;
        this.g = [];
        this.N = {};
        this.na = 0;
        this.R = Infinity;
        this.la = this.oa = this.pa = this.ra = this.wa = this.B = this.va = this.Z = this.o = 0;
        this.ma = !1;
        this.Y = this.O = this.J = 0;
        this.C = null;
        this.sa = !1;
        this.ka = function() {}
        ;
        var b = document.querySelector("[data-google-query-id]");
        this.ua = b ? b.getAttribute("data-google-query-id") : null;
        this.Ia = a
    }, Ch, Dh, Gh = function() {
        var a = new Bh;
        if (Yg(pf)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                a.Ia.za && b.push("event");
                b = x(b);
                for (var c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    var d = {
                        type: c,
                        buffered: !0
                    };
                    "event" === c && (d.durationThreshold = 40);
                    Eh(a).observe(d)
                }
                Fh(a)
            }
        }
    }, Eh = function(a) {
        a.C || (a.C = new PerformanceObserver(qh(640, function(b) {
            Hh(a, b)
        })));
        return a.C
    }, Fh = function(a) {
        var b = qh(641, function() {
            var d = document;
            2 === (d.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && Ih(a)
        })
          , c = qh(641, function() {
            return void Ih(a)
        });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.ka = function() {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            Eh(a).disconnect()
        }
    }, Ih = function(a) {
        if (!a.sa) {
            a.sa = !0;
            Eh(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += sh("cls", a.M),
            b += sh("mls", a.P),
            b += rh("nls", a.S),
            window.LayoutShiftAttribution && (b += sh("cas", a.B),
            b += rh("nas", a.ra),
            b += sh("was", a.wa)),
            b += sh("wls", a.Z),
            b += sh("tls", a.va));
            window.LargestContentfulPaint && (b += rh("lcp", a.pa),
            b += rh("lcps", a.oa));
            window.PerformanceEventTiming && a.ma && (b += rh("fid", a.la));
            window.PerformanceLongTaskTiming && (b += rh("cbt", a.J),
            b += rh("mbt", a.O),
            b += rh("nlt", a.Y));
            for (var c = 0, d = x(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next())
                uh(e.value) && c++;
            b += rh("nif", c);
            c = window.google_unique_id;
            b += rh("ifi", "number" === typeof c ? c : 0);
            c = W(yg).g();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (z === z.top ? 1 : 0);
            b += a.ua ? "&qqid=" + encodeURIComponent(a.ua) : rh("pvsid", Ed(z));
            window.googletag && (b += "&gpt=1");
            c = Math.min(a.g.length - 1, Math.floor((a.C ? a.na : performance.interactionCount || 0) / 50));
            0 <= c && (c = a.g[c].latency,
            0 <= c && (b += rh("inp", c)));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.ka()
        }
    }, Jh = function(a, b, c, d) {
        if (!b.hadRecentInput) {
            a.M += Number(b.value);
            Number(b.value) > a.P && (a.P = Number(b.value));
            a.S += 1;
            if (c = vh(b, c, d))
                a.B += b.value,
                a.ra++;
            if (5E3 < b.startTime - a.qa || 1E3 < b.startTime - a.ta)
                a.qa = b.startTime,
                a.j = 0,
                a.l = 0;
            a.ta = b.startTime;
            a.j += b.value;
            c && (a.l += b.value);
            a.j > a.Z && (a.Z = a.j,
            a.wa = a.l,
            a.va = b.startTime + b.duration)
        }
    }, Hh = function(a, b) {
        var c = Ch !== window.scrollX || Dh !== window.scrollY ? [] : Kh
          , d = Lh();
        b = x(b.getEntries());
        for (var e = b.next(), f = {}; !e.done; f = {
            G: void 0
        },
        e = b.next())
            switch (f.G = e.value,
            e = f.G.entryType,
            e) {
            case "layout-shift":
                Jh(a, f.G, c, d);
                break;
            case "largest-contentful-paint":
                f = f.G;
                a.pa = Math.floor(f.renderTime || f.loadTime);
                a.oa = f.size;
                break;
            case "first-input":
                e = f.G;
                a.la = Number((e.processingStart - e.startTime).toFixed(3));
                a.ma = !0;
                a.g.some(function(g) {
                    return function(h) {
                        return v(h, "entries").some(function(k) {
                            return g.G.duration === k.duration && g.G.startTime === k.startTime
                        })
                    }
                }(f)) || Mh(a, f.G);
                break;
            case "longtask":
                f = Math.max(0, f.G.duration - 50);
                a.J += f;
                a.O = Math.max(a.O, f);
                a.Y += 1;
                break;
            case "event":
                Mh(a, f.G);
                break;
            default:
                kd(e)
            }
    }, Mh = function(a, b) {
        Nh(a, b);
        var c = a.g[a.g.length - 1]
          , d = a.N[b.interactionId];
        if (d || 10 > a.g.length || b.duration > c.latency)
            d ? (v(d, "entries").push(b),
            d.latency = Math.max(d.latency, b.duration)) : (b = {
                id: b.interactionId,
                latency: b.duration,
                entries: [b]
            },
            a.N[b.id] = b,
            a.g.push(b)),
            a.g.sort(function(e, f) {
                return f.latency - e.latency
            }),
            a.g.splice(10).forEach(function(e) {
                delete a.N[e.id]
            })
    }, Nh = function(a, b) {
        b.interactionId && (a.R = Math.min(a.R, b.interactionId),
        a.o = Math.max(a.o, b.interactionId),
        a.na = a.o ? (a.o - a.R) / 7 + 1 : 0)
    }, Lh = function() {
        var a = v(Array, "from").call(Array, document.getElementsByTagName("iframe")).filter(uh)
          , b = [].concat(ja(th())).map(function(c) {
            return document.getElementById(c)
        }).filter(function(c) {
            return null !== c
        });
        Ch = window.scrollX;
        Dh = window.scrollY;
        return Kh = [].concat(ja(a), ja(b)).map(function(c) {
            return c.getBoundingClientRect()
        })
    }, Kh = [];
    var Oh = function(a) {
        this.i = L(a)
    };
    y(Oh, V);
    Oh.prototype.getVersion = function() {
        return T(this, 2)
    }
    ;
    var Ph = function(a) {
        this.i = L(a)
    };
    y(Ph, V);
    var Qh = function(a, b) {
        return O(a, 2, K(b))
    }
      , Rh = function(a, b) {
        return O(a, 3, K(b))
    }
      , Sh = function(a, b) {
        return O(a, 4, K(b))
    }
      , Th = function(a, b) {
        return O(a, 5, K(b))
    }
      , Uh = function(a, b) {
        return O(a, 9, K(b))
    }
      , Vh = function(a, b) {
        return zc(a, 10, b)
    }
      , Wh = function(a, b) {
        return O(a, 11, null == b ? b : Eb(b))
    }
      , Xh = function(a, b) {
        return O(a, 1, K(b))
    }
      , Yh = function(a, b) {
        return O(a, 7, null == b ? b : Eb(b))
    };
    Ph.u = [10, 6];
    var Zh = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function $h(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }
    function ai(a) {
        var b, c;
        return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }
    function bi(a) {
        if (!ai(a))
            return null;
        var b = $h(a);
        if (b.uach_promise)
            return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(Zh).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }
    function ci(a) {
        var b;
        return Wh(Vh(Th(Qh(Xh(Sh(Yh(Uh(Rh(new Ph, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new Oh;
            d = O(d, 1, K(c.brand));
            return O(d, 2, K(c.version))
        })) || []), a.wow64 || !1)
    }
    function di(a) {
        var b, c;
        return null != (c = null == (b = bi(a)) ? void 0 : b.then(function(d) {
            return ci(d)
        })) ? c : null
    }
    ;function ei(a, b) {
        var c = {};
        b = (c[0] = Pg(b.Za),
        c);
        W(yg).j(a, b)
    }
    ;var fi = {}
      , gi = (fi[253] = !1,
    fi[246] = [],
    fi[150] = "",
    fi[221] = !1,
    fi[263] = !1,
    fi[36] = /^true$/.test("false"),
    fi[172] = null,
    fi[260] = void 0,
    fi[251] = null,
    fi)
      , Mc = function() {
        this.g = !1
    };
    function hi(a) {
        W(Mc).g = !0;
        return gi[a]
    }
    function ii(a, b) {
        W(Mc).g = !0;
        gi[a] = b
    }
    ;var ji = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js)/;
    function ki(a) {
        var b = a.Ca;
        var c = a.Ua;
        var d = a.eb;
        var e = a.Sa;
        var f = a.Na;
        var g = a.Pa;
        var h = b ? !ji.test(b.src) : !0;
        a = {};
        b = {};
        var k = {};
        return k[3] = (a[3] = function() {
            return !h
        }
        ,
        a[59] = function() {
            var l = ta.apply(0, arguments), m = v(l, "includes"), q = String, p;
            var r = void 0 === r ? window : r;
            var t;
            r = null != (t = null == (p = qd(r.location.href.match(pd)[3] || null)) ? void 0 : p.split(".")) ? t : [];
            p = 2 > r.length ? null : "uk" === r[r.length - 1] ? 3 > r.length ? null : Ad(r.splice(r.length - 3).join(".")) : Ad(r.splice(r.length - 2).join("."));
            return m.call(l, q(p))
        }
        ,
        a[61] = function() {
            return e
        }
        ,
        a[63] = function() {
            return e || ".google.ch" === g
        }
        ,
        a[73] = function(l) {
            return v(d, "includes").call(d, Number(l))
        }
        ,
        a),
        k[4] = (b[1] = function() {
            return f
        }
        ,
        b[13] = function() {
            return c || 0
        }
        ,
        b),
        k[5] = {},
        k
    }
    ;function li(a, b) {
        var c = new Lg(hi(246));
        if (!S(c, Vf, 1).length && S(a, Vf, 1).length) {
            var d = S(a, Vf, 1);
            zc(c, 1, d)
        }
        !S(c, Jg, 2).length && S(a, Jg, 2).length && (d = S(a, Jg, 2),
        zc(c, 2, d));
        void 0 === uc(c, Kg, 5, !1) && void 0 !== uc(a, Kg, 5, !1) && (a = R(a, Kg, 5),
        xc(c, 5, a));
        ih({
            Oa: c,
            D: ki(b),
            xa: 2
        })
    }
    ;function mi(a, b, c, d, e) {
        a = a.location.host;
        var f = sd(b.src, "domain");
        b = sd(b.src, "network-code");
        if (a || f || b) {
            var g = {};
            a && (g.ippd = a);
            f && (g.pppd = f);
            b && (g.pppnc = b);
            Zg(mf) && (g.ppc_eid = Zg(mf).toString());
            a = g
        } else
            a = void 0;
        if (a) {
            c = [c ? new Vc(Tc,"https://pagead2.googlesyndication.com") : new Vc(Tc,"https://securepubads.g.doubleclick.net"), new Vc(Tc,"/pagead/ppub_config")];
            f = "";
            for (b = 0; b < c.length; b++)
                g = c[b],
                f += g instanceof Vc && g.constructor === Vc && g.j === Uc ? g.g : "type_error:Const";
            c = new Zc(f,bd);
            c = ad.exec($c(c).toString());
            f = c[3] || "";
            c = new Zc(c[1] + cd("?", c[2] || "", a) + cd("#", f),bd);
            ni(c, d, e)
        } else
            e(new u.globalThis.Error("no provided or inferred data"))
    }
    function ni(a, b, c) {
        var d = new u.globalThis.XMLHttpRequest;
        d.open("GET", a.toString(), !0);
        d.withCredentials = !1;
        d.onload = function() {
            300 > d.status ? (oh("13", window),
            b(204 === d.status ? "" : d.responseText)) : c(new u.globalThis.Error("resp:" + d.status))
        }
        ;
        d.onerror = function() {
            return void c(new u.globalThis.Error("s:" + d.status + " rs:" + d.readyState))
        }
        ;
        d.send()
    }
    ;var oi = function() {
        this.o = [];
        this.l = []
    }
      , ri = function(a, b, c, d, e) {
        if (wd(b) === xd(b) && c) {
            var f = null == e ? void 0 : T(vc(e, Qc, 1), 1);
            (null == f ? 0 : f.length) && v(b.location.hostname, "includes").call(b.location.hostname, f) ? (pi(a),
            qi(a, void 0, e)) : (n = ["http:", "https:"],
            v(n, "includes")).call(n, b.location.protocol) && (pi(a),
            mi(b.top, c, d, function(g) {
                return void qi(a, g)
            }, function(g) {
                qi(a, void 0, void 0, g)
            }))
        }
    }
      , pi = function(a) {
        hi(260);
        ii(260, function(b) {
            void 0 !== a.g || a.j ? b(a.g, a.j) : a.o.push(b)
        })
    }
      , qi = function(a, b, c, d) {
        a.g = null != b ? b : null == c ? void 0 : Kc(c);
        a.B = c;
        !a.B && a.g && a.l.length && (a.B = Sc(a.g));
        a.j = d;
        b = x(a.o);
        for (c = b.next(); !c.done; c = b.next())
            c = c.value,
            c(a.g, a.j);
        b = x(a.l);
        for (c = b.next(); !c.done; c = b.next())
            c = c.value,
            c(a.B, a.j);
        a.o.length = 0;
        a.l.length = 0
    };
    var si = function(a) {
        this.i = L(a)
    };
    y(si, V);
    var ti = Pc(si);
    si.u = [10];
    var vi = function() {
        return [].concat(ja(v(ui, "values").call(ui))).reduce(function(a, b) {
            return a + b
        }, 0)
    }
      , ui = new u.Map;
    function wi(a, b, c) {
        if (a.bb) {
            c = c.error && c.meta && c.id ? c.error : c;
            var d = new Se
              , e = new Re;
            try {
                var f = Ed(window);
                P(e, 1, Lb(f), "0")
            } catch (p) {}
            try {
                var g = W(yg).g();
                nc(e, 2, g, Hb)
            } catch (p) {}
            try {
                P(e, 3, K(window.document.URL), "")
            } catch (p) {}
            f = xc(d, 2, e);
            g = new Qe;
            b = P(g, 1, J(b), 0);
            try {
                var h = Qf(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                P(b, 2, K(h), "")
            } catch (p) {}
            try {
                var k = Qf(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                P(b, 3, K(k), "")
            } catch (p) {}
            try {
                var l = Qf(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && nc(b, 4, l.split(/\n\s*/), Qb)
            } catch (p) {}
            h = xc(f, 1, b);
            k = new Pe;
            try {
                P(k, 1, K(a.Da), "")
            } catch (p) {}
            try {
                var m = vi();
                P(k, 2, Ib(m), 0)
            } catch (p) {}
            try {
                var q = [].concat(ja(v(ui, "keys").call(ui)));
                nc(k, 3, q, Qb)
            } catch (p) {}
            yc(h, 4, Te, k);
            P(h, 5, Lb(a.Ma), "0");
            a.Ga.cb(h)
        }
    }
    ;function xi(a, b) {
        try {
            var c = Nc();
            if (!Qf(a)) {
                var d = c ? c() + "\n" : "";
                throw Error(d + String(a));
            }
            return ti(a)
        } catch (e) {
            return wi(b, 838, e),
            new si
        }
    }
    ;function yi() {
        var a;
        return null != (a = z.googletag) ? a : z.googletag = {
            cmd: []
        }
    }
    function zi(a, b) {
        var c = yi();
        c.hasOwnProperty(a) || (c[a] = b)
    }
    ;var Ai = ia(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl.js"])
      , Bi = ia(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl.js"]);
    function Ci() {
        var a = sttc
          , b = Di();
        Ab(function(t) {
            wi(b, 1189, t)
        });
        var c = yi();
        a = xi(a, b);
        Lc();
        v(Object, "assign").call(Object, gi, c._vars_);
        c._vars_ = gi;
        a && (Cc(a, 3) && ii(36, !0),
        Cc(a, 5) && ii(221, !0),
        T(a, 6) && ii(150, T(a, 6)),
        Cc(a, 12) && ii(263, !0));
        var d = vc(a, Lg, 1)
          , e = {
            Sa: Cc(a, 5),
            Ua: Dc(a, 2),
            eb: hc(a, 10, Jb),
            Na: Dc(a, 7),
            Pa: T(a, 6)
        };
        a = R(a, Rc, 9);
        var f, g = null != (f = c.fifWin) ? f : window, h = g.document;
        f = c.fifWin ? window : g;
        zi("_loaded_", !0);
        zi("cmd", []);
        var k, l = null != (k = Ei(h)) ? k : Fi(h);
        Gi(d, g, v(Object, "assign").call(Object, {}, {
            Ca: l
        }, e), b);
        try {
            Gh()
        } catch (t) {}
        oh("1", g);
        k = Hi(b, l);
        d = function() {
            var t = Zg(kf);
            switch (t) {
            case 0:
                return !1;
            case 1:
                return !0;
            case 2:
                return "anonymous" === (null == l ? void 0 : l.crossOrigin);
            default:
                kd(t)
            }
        }();
        e = Zg(lf);
        0 < e && b.Ka < 1 / e && (g = b.Ga.Wa.fb.Qa,
        g.Ta.ca({
            ia: e,
            ea: "anonymous" === (null == l ? void 0 : l.crossOrigin),
            fa: Ii(l)
        }),
        g.Ra.ca({
            ia: e,
            ea: d,
            fa: "pagead2.googlesyndication.com" === qd(k.toString().match(pd)[3] || null)
        }));
        e = !1;
        if (!Ji(h)) {
            g = "gpt-impl-" + Math.random();
            try {
                nd(h, fd(k, {
                    id: g,
                    nonce: ld(window),
                    Aa: d ? "anonymous" : void 0
                }))
            } catch (t) {}
            h.getElementById(g) && (Yg(jf) ? e = !0 : c._loadStarted_ = !0)
        }
        if (Yg(jf) ? !e : !c._loadStarted_) {
            var m = Dd("SCRIPT");
            md(m, k);
            m.async = !0;
            d && (m.crossOrigin = "anonymous");
            h = c.fifWin ? f.document : h;
            k = h.body;
            d = h.documentElement;
            var q, p, r = null != (p = null != (q = h.head) ? q : k) ? p : d;
            "complete" !== f.document.readyState && c.fifWin ? Xc(f, "load", function() {
                return void r.appendChild(m)
            }) : r.appendChild(m);
            Yg(jf) || (c._loadStarted_ = !0)
        }
        if (f === f.top)
            try {
                Of(f)
            } catch (t) {
                wi(b, 1209, t)
            }
        ri(new oi, f, l, Ii(l), a)
    }
    function Di() {
        var a = yd();
        return {
            Da: "m202406040101",
            vb: "202406040101",
            Za: Ed(window),
            Ga: new ff(11,"m202406040101"),
            Ka: a,
            bb: .01 > a,
            Ma: 100
        }
    }
    function Ei(a) {
        return (a = a.currentScript) ? a : null
    }
    function Fi(a) {
        var b;
        a = x(null != (b = a.scripts) ? b : []);
        for (b = a.next(); !b.done; b = a.next())
            if (b = b.value,
            v(b.src, "includes").call(b.src, "/tag/js/gpt"))
                return b;
        return null
    }
    function Hi(a, b) {
        a = a.Da;
        b = Ii(b) ? id(Ai, a) : id(Bi, a);
        return (a = Zg(nf)) ? jd(b, new u.Map([["cb", a]])) : b
    }
    function Gi(a, b, c, d) {
        ii(172, c.Ca);
        li(a, c);
        ei(12, d);
        ei(5, d);
        (a = di(b)) && a.then(function(e) {
            return void ii(251, Kc(e))
        });
        Cd(W(Xg).l(of.g, of.defaultValue), b.document)
    }
    function Ji(a) {
        var b = Ei(a);
        return "complete" === a.readyState || "loaded" === a.readyState || !(null == b || !b.async)
    }
    function Ii(a) {
        return !(null == a || !a.src) && "pagead2.googlesyndication.com" === qd(a.src.match(pd)[3] || null)
    }
    ;try {
        Ci()
    } catch (a) {
        try {
            wi(Di(), 420, a)
        } catch (b) {}
    }
    ;
}
).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, "[[[[560703441,null,null,[1]],[null,7,null,[null,0.1]],[476475256,null,null,[1]],[null,427198696,null,[null,1]],[null,578655462,null,[null,20]],[591917863,null,null,[1]],[null,632270607,null,[null,1000]],[null,625028671,null,[null,0.8]],[null,625028672,null,[null,50]],[null,629733890,null,[null,1000]],[573236024,null,null,[1]],[619946851,null,null,[1]],[620930073,null,null,[1]],[null,null,null,[],null,489560439],[null,null,null,[],null,505762507],[null,1921,null,[null,72]],[null,1920,null,[null,12]],[null,426169222,null,[null,1000]],[null,1916,null,[null,0.001]],[null,377289019,null,[null,10000]],[631804441,null,null,[1]],[null,529,null,[null,20]],[null,573282293,null,[null,0.01]],[null,610770343,null,[null,5]],[45624259,null,null,[]],[45627954,null,null,[1]],[45622305,null,null,[]],[null,447000223,null,[null,0.01]],[360245597,null,null,[1]],[45628169,null,null,[1]],[45401685,null,null,[1]],[561164161,null,null,[1]],[null,550718589,null,[null,250],[[[3,[[4,null,15,null,null,null,null,[\"22814497764\"]],[4,null,15,null,null,null,null,[\"6581\"]],[4,null,15,null,null,null,null,[\"18190176\"]],[4,null,15,null,null,null,null,[\"21881754602\"]],[4,null,15,null,null,null,null,[\"6782\"]],[4,null,15,null,null,null,null,[\"309565630\"]],[4,null,15,null,null,null,null,[\"22306534072\"]],[4,null,15,null,null,null,null,[\"7229\"]],[4,null,15,null,null,null,null,[\"28253241\"]],[4,null,15,null,null,null,null,[\"1254144\"]],[4,null,15,null,null,null,null,[\"21732118914\"]],[4,null,15,null,null,null,null,[\"5441\"]],[4,null,15,null,null,null,null,[\"162717810\"]],[4,null,15,null,null,null,null,[\"51912183\"]],[4,null,15,null,null,null,null,[\"23202586\"]],[4,null,15,null,null,null,null,[\"44520695\"]],[4,null,15,null,null,null,null,[\"1030006\"]],[4,null,15,null,null,null,null,[\"21830601346\"]],[4,null,15,null,null,null,null,[\"23081961\"]],[4,null,15,null,null,null,null,[\"21880406607\"]],[4,null,15,null,null,null,null,[\"93656639\"]],[4,null,15,null,null,null,null,[\"1020351\"]],[4,null,15,null,null,null,null,[\"5931321\"]],[4,null,15,null,null,null,null,[\"3355436\"]],[4,null,15,null,null,null,null,[\"22106840220\"]],[4,null,15,null,null,null,null,[\"22875833199\"]],[4,null,15,null,null,null,null,[\"32866417\"]],[4,null,15,null,null,null,null,[\"8095840\"]],[4,null,15,null,null,null,null,[\"71161633\"]],[4,null,15,null,null,null,null,[\"22668755367\"]],[4,null,15,null,null,null,null,[\"6177\"]],[4,null,15,null,null,null,null,[\"147246189\"]],[4,null,15,null,null,null,null,[\"22152718\"]],[4,null,15,null,null,null,null,[\"21751243814\"]],[4,null,15,null,null,null,null,[\"22013536576\"]],[4,null,15,null,null,null,null,[\"4444\"]],[4,null,15,null,null,null,null,[\"44890869\"]],[4,null,15,null,null,null,null,[\"248415179\"]],[4,null,15,null,null,null,null,[\"5293\"]],[4,null,15,null,null,null,null,[\"21675937462\"]],[4,null,15,null,null,null,null,[\"21726375739\"]],[4,null,15,null,null,null,null,[\"1002212\"]],[4,null,15,null,null,null,null,[\"6718395\"]]]],[null,500]]]],[null,575880738,null,[null,10]],[null,586681283,null,[null,100]],[599186119,null,null,[1]],[531615531,null,null,null,[[[3,[[4,null,15,null,null,null,null,[\"22814497764\"]],[4,null,15,null,null,null,null,[\"6581\"]],[4,null,15,null,null,null,null,[\"18190176\"]],[4,null,15,null,null,null,null,[\"21881754602\"]],[4,null,15,null,null,null,null,[\"6782\"]],[4,null,15,null,null,null,null,[\"309565630\"]],[4,null,15,null,null,null,null,[\"22306534072\"]],[4,null,15,null,null,null,null,[\"7229\"]],[4,null,15,null,null,null,null,[\"28253241\"]],[4,null,15,null,null,null,null,[\"1254144\"]],[4,null,15,null,null,null,null,[\"21732118914\"]],[4,null,15,null,null,null,null,[\"5441\"]],[4,null,15,null,null,null,null,[\"162717810\"]],[4,null,15,null,null,null,null,[\"51912183\"]],[4,null,15,null,null,null,null,[\"23202586\"]],[4,null,15,null,null,null,null,[\"44520695\"]],[4,null,15,null,null,null,null,[\"1030006\"]],[4,null,15,null,null,null,null,[\"21830601346\"]],[4,null,15,null,null,null,null,[\"23081961\"]],[4,null,15,null,null,null,null,[\"21880406607\"]],[4,null,15,null,null,null,null,[\"93656639\"]],[4,null,15,null,null,null,null,[\"1020351\"]],[4,null,15,null,null,null,null,[\"5931321\"]],[4,null,15,null,null,null,null,[\"3355436\"]],[4,null,15,null,null,null,null,[\"22106840220\"]],[4,null,15,null,null,null,null,[\"22875833199\"]],[4,null,15,null,null,null,null,[\"32866417\"]],[4,null,15,null,null,null,null,[\"8095840\"]],[4,null,15,null,null,null,null,[\"71161633\"]],[4,null,15,null,null,null,null,[\"22668755367\"]],[4,null,15,null,null,null,null,[\"6177\"]],[4,null,15,null,null,null,null,[\"147246189\"]],[4,null,15,null,null,null,null,[\"22152718\"]],[4,null,15,null,null,null,null,[\"21751243814\"]],[4,null,15,null,null,null,null,[\"22013536576\"]],[4,null,15,null,null,null,null,[\"4444\"]],[4,null,15,null,null,null,null,[\"44890869\"]],[4,null,15,null,null,null,null,[\"248415179\"]],[4,null,15,null,null,null,null,[\"5293\"]],[4,null,15,null,null,null,null,[\"21675937462\"]],[4,null,15,null,null,null,null,[\"21726375739\"]],[4,null,15,null,null,null,null,[\"1002212\"]],[4,null,15,null,null,null,null,[\"6718395\"]]]],[1]]]],[null,620585025,null,[null,2]],[null,618260805,null,[null,10]],[null,532520346,null,[null,120]],[557870754,null,null,[1]],[618260804,null,null,[1]],[null,630428304,null,[null,100]],[null,624264750,null,[null,-1]],[607106222,null,null,[1]],[31077334,null,null,[1]],[null,398776877,null,[null,60000]],[null,374201269,null,[null,60000]],[null,371364213,null,[null,60000]],[null,376149757,null,[null,0.0025]],[633597413,null,null,[1]],[583154251,null,null,[1]],[570764855,null,null,[1]],[null,null,579921177,[null,null,\"control_1\\\\.\\\\d\"]],[null,570764854,null,[null,50]],[578725095,null,null,[1]],[377936516,null,null,[1]],[null,599575765,null,[null,1000]],[632132483,null,null,[1]],[null,null,2,[null,null,\"1-0-40\"]],[null,632561211,null,[null,10]],[602464517,null,null,[1]],[null,506394061,null,[null,100]],[631617201,null,null,[1]],[null,null,null,[],null,489],[392065905,null,null,null,[[[4,null,68],[1]]]],[null,360245595,null,[null,500]],[45397804,null,null,[1]],[45398607,null,null,[1]],[633226268,null,null,[1]],[563462360,null,null,[1]],[555237688,null,null,[],[[[2,[[4,null,70,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,27,null,null,null,null,[\"isSecureContext\"]]]]]],[1]]]],[555237686,null,null,[]],[634862262,null,null,[1]],[507033477,null,null,[1]],[610272041,null,null,[1]],[null,514795754,null,[null,2]],[564724551,null,null,null,[[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)(?!11[0-6])\\\\d{3,})\",[\"navigator.userAgent\"]],[1]]]],[567489814,null,null,[1]],[45415915,null,null,[1]],[609010285,null,null,[1]],[582338617,null,null,[1]],[612823209,null,null,[1]],[582287318,null,null,[1]],[null,596918936,null,[null,500]],[null,607730666,null,[null,10]],[612834765,null,null,[1]],[616896918,null,null,[1]],[null,null,null,[null,null,null,[\"AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"Amm8\/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq\/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"A\/ERL66fN363FkXxgDc6F1+ucRUkAhjEca9W3la6xaLnD2Y1lABsqmdaJmPNaUKPKVBRpyMKEhXYl7rSvrQw+AkAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A6OdGH3fVf4eKRDbXb4thXA4InNqDJDRhZ8U533U\/roYjp4Yau0T3YSuc63vmAs\/8ga1cD0E3A7LEq6AXk1uXgsAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934],[485990406,null,null,[]]],[[3,[[null,[[1337,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]],[84,null,null,[1]],[188,null,null,[1]]]]]],[1000,[[31072561]],[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[12,null,null,null,4,null,\"FLEDGE_GAM_EXTERNAL_TESTER\",[\"navigator.userAgent\"]]]]],[1,[[31075124,[[null,514795754,null,[null,4]]]]],[4,null,74,null,null,null,null,[\"1585821863\",\"3976716532\"]],59],[10,[[31080344],[95328403],[95328404,[[null,514795754,null,[null,4]]]],[95328405],[95328406,[[null,514795754,null,[null,4]]]],[95334916,[[636731477,null,null,[1]]]]],[2,[[4,null,9,null,null,null,null,[\"fetch\"]],[4,null,9,null,null,null,null,[\"navigator.getInterestGroupAdAuctionData\"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,[\"1585821863\",\"3976716532\"]]]]]],59],[10,[[31082453,[[45624259,null,null,[1]]]]],[4,null,74,null,null,null,null,[\"1361264289\",\"592241938\",\"3803786894\"]],114],[10,[[31083590],[31083591,[[631080173,null,null,[1]]]]]],[10,[[31084125],[31084126]]],[null,[[31084180,null,[4,null,10]]],null,122,null,null,null,null,null,null,null,null,23],[null,[[31084181,null,[4,null,10]]],null,122,null,null,null,200,null,null,null,null,23],[null,[[31084182,null,[4,null,10]]],null,122,null,null,null,600,null,null,null,null,23],[null,[[31084183,null,[4,null,10]]],null,122,null,null,null,800,null,null,null,null,23],[10,[[31084270,null,[3,[[4,null,10],[1,[[4,null,10]]]]]]],null,121,null,null,null,null,null,null,null,null,22],[10,[[31084271,[[610525552,null,null,[1]]],[3,[[4,null,10],[1,[[4,null,10]]]]]]],null,121,null,null,null,500,null,null,null,null,22],[null,[[44798283,[[null,514795754,null,[null,4]]]]],[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,63]]]]],59],[50,[[95327818,[[null,514795754,null,[]]]],[95327819,[[null,514795754,null,[]],[null,609173130,null,[null,1]]]]],null,59],[50,[[95329315],[95329316,[[null,620252253,null,[null,50]]]],[95329317,[[null,620252253,null,[null,500]]]],[95329318,[[null,620252253,null,[null,1000]]]],[95329319,[[null,620252253,null,[null,5000]]]]],[4,null,79,null,null,null,null,[\"reportingTimeout\"]]],[null,[[95331143],[95331207],[95333497]],[2,[[4,null,9,null,null,null,null,[\"fetch\"]],[4,null,9,null,null,null,null,[\"navigator.getInterestGroupAdAuctionData\"]],[1,[[4,null,63]]],[1,[[4,null,74,null,null,null,null,[\"1585821863\",\"3976716532\"]]]]]],59],[10,[[95332149],[95332150,[[616896918,null,null,[]]]]],null,59],[null,[[676982960],[676982998]]]]],[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31078663,null,[2,[[4,null,70,null,null,null,null,[\"browsing-topics\"]],[4,null,8,null,null,null,null,[\"document.browsingTopics\"]]]]]]],[1000,[[31078664,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]]],[1000,[[31078665,null,[2,[[4,null,8,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]],[1000,[[31078666,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]]],[1000,[[31078667,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]]],[1000,[[31078668,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[1000,[[31078669,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]]],[1000,[[31078670,null,[4,null,70,null,null,null,null,[\"shared-storage\"]]]]],[1000,[[31078671,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]]]]],[5,[[50,[[31067420],[31067421,[[360245597,null,null,[]]]],[31077191]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[200,[[31079956],[31079957,[[561985307,null,null,[1]]]],[44809527,[[561985307,null,null,[1]]]]]],[10,[[31081525,null,[12,null,null,null,4,null,\"Chrome\\\\\/((?!1[0-1]\\\\d)(?!12[0-3])\\\\d{3,})\",[\"navigator.userAgent\"]]],[31083362,[[590730356,null,null,[1]]],[12,null,null,null,4,null,\"Chrome\\\\\/((?!1[0-1]\\\\d)(?!12[0-3])\\\\d{3,})\",[\"navigator.userAgent\"]]]],null,116],[10,[[31081974],[31081975,[[605401295,null,null,[1]]]]]],[10,[[31083014]],null,115],[10,[[31083015,null,[4,null,80,null,null,null,null,[\"(prefers-color-scheme: dark)\"]]]],null,115],[10,[[31083016,null,[4,null,80,null,null,null,null,[\"(prefers-color-scheme: light)\"]]]],null,115],[50,[[31083339],[31083340,[[624264747,null,null,[1]]]]]],[50,[[31083341],[31083342,[[624264746,null,null,[1]]]]]],[50,[[31083343],[31083344,[[624264749,null,null,[1]]]]]],[50,[[31083345],[31083346,[[null,624264750,null,[null,5]]]]]],[50,[[31083555],[31083556,[[629691748,null,null,[1]]]]]],[10,[[31083864],[31083865,[[629403702,null,null,[1]]]]],null,119],[10,[[31083866,null,[4,null,9,null,null,null,null,[\"scheduler.yield\"]]],[31083867,[[629403702,null,null,[1]]],[4,null,9,null,null,null,null,[\"scheduler.yield\"]]]],null,119],[100,[[31084062],[31084063,[[632286145,null,null,[1]]]]]],[100,[[31084074],[31084075,[[630167509,null,null,[1]]]]]],[1000,[[31084129,null,[2,[[2,[[8,null,null,1,null,-1],[7,null,null,1,null,10]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[1000,[[31084130,null,[2,[[2,[[8,null,null,1,null,9],[7,null,null,1,null,20]]],[4,null,3]]]]],null,80,null,null,null,null,null,null,null,null,4],[100,[[31084209],[31084210,[[null,null,null,[null,null,null,[\"679602798\",\"965728666\",\"3786422334\",\"4071951799\"]],null,603422363]]]]],[1,[[31084252],[31084253,[[632286496,null,null,[1]]]]]],[100,[[31084262],[31084263,[[null,635239304,null,[null,100]]]]]],[50,[[31084264],[31084265,[[635531965,null,null,[1]]]]]],[1000,[[31084317,[[null,24,null,[null,31084317]]],[6,null,null,13,null,31084317]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31084318,[[null,24,null,[null,31084318]]],[6,null,null,13,null,31084318]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31084373,[[null,24,null,[null,31084373]]],[6,null,null,13,null,31084373]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1000,[[31084374,[[null,24,null,[null,31084374]]],[6,null,null,13,null,31084374]]],[4,null,3],1,null,null,null,null,null,null,null,null,3],[1,[[31084387],[31084388,[[null,612427114,null,[null,100]]]]]],[100,[[31084389],[31084390,[[null,639040183,null,[null,10]]]]]],[10,[[95328479],[95328480,[[45624259,null,null,[1]]]]],null,114],[50,[[95333932],[95333933,[[625422809,null,null,[1]]]]],null,118],[50,[[95334435],[95334436,[[625422809,null,null,[1]]]]],null,118]]],[2,[[10,[[31082137],[31082138,[[null,609494714,null,[null,1]]]]],null,null,null,null,null,null,null,102],[10,[[31082251],[31082252]],null,null,null,null,32,null,null,142,1],[10,[[31083951],[31083952,[[null,610770343,null,[null,6]]]],[31083953,[[null,610770343,null,[null,6],[[[3,[[4,null,15,null,null,null,null,[\"1947552\"]],[4,null,15,null,null,null,null,[\"400117\"]],[4,null,15,null,null,null,null,[\"436837\"]],[4,null,15,null,null,null,null,[\"435194\"]],[4,null,15,null,null,null,null,[\"465617\"]],[4,null,15,null,null,null,null,[\"370379\"]],[4,null,15,null,null,null,null,[\"220791\"]],[4,null,15,null,null,null,null,[\"1792871\"]],[4,null,15,null,null,null,null,[\"273609\"]],[4,null,15,null,null,null,null,[\"275835\"]],[4,null,15,null,null,null,null,[\"92706\"]]]],[null,5]]]]]]],null,59],[1000,[[31084215,null,[2,[[4,null,8,null,null,null,null,[\"pbjs\"]],[12,null,null,null,4,null,\".*userId.*\",[\"pbjs.installedModules.join\"]]]]]]],[50,[[95330141],[95330142]],[4,null,59,null,null,null,null,[\"2443349923\"]],null,null,null,33,null,null,152,1],[300,[[95331847],[95331848]],[4,null,59,null,null,null,null,[\"1163038905\"]],null,null,null,34,400,null,152,1],[null,[[95333273],[95333274]],[2,[[4,null,82,null,null,null,null,[\"5\"]],[6,null,null,16,null,1]]],null,null,null,35,null,null,166,1],[null,[[95333283],[95333284]],[2,[[4,null,82,null,null,null,null,[\"5\"]],[6,null,null,16,null,1]]],null,null,null,36,900,null,166,1]]],[9,[[1000,[[31083577]],[4,null,13,null,null,null,null,[\"cxbbhbxm\"]]]]],[4,[[null,[[44714449,[[null,7,null,[null,1]]]],[676982961,[[null,7,null,[null,0.4]],[212,null,null,[1]]]],[676982996,[[null,7,null,[null,1]]]]],null,78]]]],null,null,[null,1000,1,1000]],null,null,null,null,\".google.com.br\",266,2021,[[\"dicasgostosas.com\",null,\"https:\/\/dicasgostosas.com\/\",null,null,[\"22534775982\",\"44890869\"]],[],[],[95335156],null,[[\"44890869\",[[\"uidapi.com\",null,1],[\"id5-sync.com\",null,1],[\"pubcid.org\",null,1],[\"yahoo.com\",null,1],[\"intimatemerger.com\",null,1],[\"loblawmedia.ca\"],[\"openx\",\"https:\/\/oa.openxcdn.net\/esp.js\"],[\"openxtest\",\"https:\/\/oa.openxcdn.net\/esp.js\"],[\"33across.com\",\"https:\/\/cdn-ima.33across.com\/ob.js\"],[\"liveramp.com\"],[\"esp.criteo.com\",\"https:\/\/static.criteo.net\/js\/ld\/publishertag.ids.js\"],[\"parrable.com\"],[\"liveintent.com\"],[\"first-id.fr\"],[\"novatiq.com\"],[\"idx.lat\"],[\"amazon.com\"],[\"rtbhouse\",\"https:\/\/invstatic101.creativecdn.com\/encrypted-signals\/encrypted-tag-g.js\"],[\"crwdcntrl.net\",\"https:\/\/tags.crwdcntrl.net\/lt\/c\/16589\/sync.min.js\"],[\"1plusx.com\"]]]],null,[[[\"22534775982\",1],[\"44890869\",1]]],[[[\"22534775982\",1],[\"44890869\",1]]],null,[[20581,1717957200],[22574,1717958400],[23126,1717959600],[43570,1717960800]]]]")
