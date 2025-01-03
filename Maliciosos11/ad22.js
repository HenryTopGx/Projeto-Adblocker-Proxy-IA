// Copyright 2011 Google Inc. All Rights Reserved.
(function() {
    var l, aa = function(a) {
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
    }, da = ca(this), r = function(a, b) {
        if (b)
            a: {
                var c = da;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c))
                        break a;
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
    };
    r("Symbol", function(a) {
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
    });
    r("Symbol.iterator", function(a) {
        if (a)
            return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });
    var ea = function(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        }
        ;
        return a
    }
      , fa = function(a) {
        return a.raw = a
    }
      , u = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if (b)
            return b.call(a);
        if ("number" == typeof a.length)
            return {
                next: aa(a)
            };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }
      , ia = function(a) {
        if (!(a instanceof Array)) {
            a = u(a);
            for (var b, c = []; !(b = a.next()).done; )
                c.push(b.value);
            a = c
        }
        return a
    }
      , ka = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
      , ma = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d)
                    ka(d, e) && (a[e] = d[e])
        }
        return a
    }
    ;
    r("Object.assign", function(a) {
        return a || ma
    });
    var na = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , oa = function() {
        function a() {
            function c() {}
            new c;
            Reflect.construct(c, [], function() {});
            return new c instanceof c
        }
        if ("undefined" != typeof Reflect && Reflect.construct) {
            if (a())
                return Reflect.construct;
            var b = Reflect.construct;
            return function(c, d, e) {
                c = b(c, d);
                e && Reflect.setPrototypeOf(c, e.prototype);
                return c
            }
        }
        return function(c, d, e) {
            void 0 === e && (e = c);
            e = na(e.prototype || Object.prototype);
            return Function.prototype.apply.call(c, e, d) || e
        }
    }(), pa;
    if ("function" == typeof Object.setPrototypeOf)
        pa = Object.setPrototypeOf;
    else {
        var qa;
        a: {
            var ra = {
                a: !0
            }
              , sa = {};
            try {
                sa.__proto__ = ra;
                qa = sa.a;
                break a
            } catch (a) {}
            qa = !1
        }
        pa = qa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var ta = pa
      , w = function(a, b) {
        a.prototype = na(b.prototype);
        a.prototype.constructor = a;
        if (ta)
            ta(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Ga = b.prototype
    }
      , ua = function() {
        this.B = !1;
        this.A = null;
        this.j = void 0;
        this.g = 1;
        this.J = this.l = 0;
        this.o = null
    }
      , wa = function(a) {
        if (a.B)
            throw new TypeError("Generator is already running");
        a.B = !0
    };
    ua.prototype.C = function(a) {
        this.j = a
    }
    ;
    var xa = function(a, b) {
        a.o = {
            Be: b,
            vg: !0
        };
        a.g = a.l || a.J
    };
    ua.prototype.return = function(a) {
        this.o = {
            return: a
        };
        this.g = this.J
    }
    ;
    var ya = function(a, b, c) {
        a.g = c;
        return {
            value: b
        }
    }
      , za = function(a) {
        a.g = 0;
        a.l = 0
    }
      , Aa = function(a) {
        a.l = 0;
        var b = a.o.Be;
        a.o = null;
        return b
    }
      , Ba = function(a) {
        this.g = new ua;
        this.j = a
    }
      , Fa = function(a, b) {
        wa(a.g);
        var c = a.g.A;
        if (c)
            return Da(a, "return"in c ? c["return"] : function(d) {
                return {
                    value: d,
                    done: !0
                }
            }
            , b, a.g.return);
        a.g.return(b);
        return Ea(a)
    }
      , Da = function(a, b, c, d) {
        try {
            var e = b.call(a.g.A, c);
            if (!(e instanceof Object))
                throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done)
                return a.g.B = !1,
                e;
            var f = e.value
        } catch (g) {
            return a.g.A = null,
            xa(a.g, g),
            Ea(a)
        }
        a.g.A = null;
        d.call(a.g, f);
        return Ea(a)
    }
      , Ea = function(a) {
        for (; a.g.g; )
            try {
                var b = a.j(a.g);
                if (b)
                    return a.g.B = !1,
                    {
                        value: b.value,
                        done: !1
                    }
            } catch (c) {
                a.g.j = void 0,
                xa(a.g, c)
            }
        a.g.B = !1;
        if (a.g.o) {
            b = a.g.o;
            a.g.o = null;
            if (b.vg)
                throw b.Be;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }
      , Ha = function(a) {
        this.next = function(b) {
            wa(a.g);
            a.g.A ? b = Da(a, a.g.A.next, b, a.g.C) : (a.g.C(b),
            b = Ea(a));
            return b
        }
        ;
        this.throw = function(b) {
            wa(a.g);
            a.g.A ? b = Da(a, a.g.A["throw"], b, a.g.C) : (xa(a.g, b),
            b = Ea(a));
            return b
        }
        ;
        this.return = function(b) {
            return Fa(a, b)
        }
        ;
        this[Symbol.iterator] = function() {
            return this
        }
    }
      , Ia = function(a) {
        function b(d) {
            return a.next(d)
        }
        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        }
        )
    }
      , Ja = function(a) {
        return Ia(new Ha(new Ba(a)))
    }
      , Ka = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    };
    r("Reflect", function(a) {
        return a ? a : {}
    });
    r("Reflect.construct", function() {
        return oa
    });
    r("Reflect.setPrototypeOf", function(a) {
        return a ? a : ta ? function(b, c) {
            try {
                return ta(b, c),
                !0
            } catch (d) {
                return !1
            }
        }
        : null
    });
    r("Promise", function(a) {
        function b() {
            this.g = null
        }
        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            }
            )
        }
        if (a)
            return a;
        b.prototype.j = function(g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.l(function() {
                    h.o()
                })
            }
            this.g.push(g)
        }
        ;
        var d = da.setTimeout;
        b.prototype.l = function(g) {
            d(g, 0)
        }
        ;
        b.prototype.o = function() {
            for (; this.g && this.g.length; ) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (n) {
                        this.A(n)
                    }
                }
            }
            this.g = null
        }
        ;
        b.prototype.A = function(g) {
            this.l(function() {
                throw g;
            })
        }
        ;
        var e = function(g) {
            this.g = 0;
            this.l = void 0;
            this.j = [];
            this.C = !1;
            var h = this.A();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.A = function() {
            function g(n) {
                return function(m) {
                    k || (k = !0,
                    n.call(h, m))
                }
            }
            var h = this
              , k = !1;
            return {
                resolve: g(this.I),
                reject: g(this.o)
            }
        }
        ;
        e.prototype.I = function(g) {
            if (g === this)
                this.o(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e)
                this.M(g);
            else {
                a: switch (typeof g) {
                case "object":
                    var h = null != g;
                    break a;
                case "function":
                    h = !0;
                    break a;
                default:
                    h = !1
                }
                h ? this.F(g) : this.B(g)
            }
        }
        ;
        e.prototype.F = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.o(k);
                return
            }
            "function" == typeof h ? this.O(h, g) : this.B(g)
        }
        ;
        e.prototype.o = function(g) {
            this.J(2, g)
        }
        ;
        e.prototype.B = function(g) {
            this.J(1, g)
        }
        ;
        e.prototype.J = function(g, h) {
            if (0 != this.g)
                throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.l = h;
            2 === this.g && this.K();
            this.L()
        }
        ;
        e.prototype.K = function() {
            var g = this;
            d(function() {
                if (g.D()) {
                    var h = da.console;
                    "undefined" !== typeof h && h.error(g.l)
                }
            }, 1)
        }
        ;
        e.prototype.D = function() {
            if (this.C)
                return !1;
            var g = da.CustomEvent
              , h = da.Event
              , k = da.dispatchEvent;
            if ("undefined" === typeof k)
                return !0;
            "function" === typeof g ? g = new g("unhandledrejection",{
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection",{
                cancelable: !0
            }) : (g = da.document.createEvent("CustomEvent"),
            g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.l;
            return k(g)
        }
        ;
        e.prototype.L = function() {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g)
                    f.j(this.j[g]);
                this.j = null
            }
        }
        ;
        var f = new b;
        e.prototype.M = function(g) {
            var h = this.A();
            g.zc(h.resolve, h.reject)
        }
        ;
        e.prototype.O = function(g, h) {
            var k = this.A();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (n) {
                k.reject(n)
            }
        }
        ;
        e.prototype.then = function(g, h) {
            function k(q, t) {
                return "function" == typeof q ? function(v) {
                    try {
                        n(q(v))
                    } catch (x) {
                        m(x)
                    }
                }
                : t
            }
            var n, m, p = new e(function(q, t) {
                n = q;
                m = t
            }
            );
            this.zc(k(g, n), k(h, m));
            return p
        }
        ;
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        }
        ;
        e.prototype.zc = function(g, h) {
            function k() {
                switch (n.g) {
                case 1:
                    g(n.l);
                    break;
                case 2:
                    h(n.l);
                    break;
                default:
                    throw Error("Unexpected state: " + n.g);
                }
            }
            var n = this;
            null == this.j ? f.j(k) : this.j.push(k);
            this.C = !0
        }
        ;
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            }
            )
        }
        ;
        e.race = function(g) {
            return new e(function(h, k) {
                for (var n = u(g), m = n.next(); !m.done; m = n.next())
                    c(m.value).zc(h, k)
            }
            )
        }
        ;
        e.all = function(g) {
            var h = u(g)
              , k = h.next();
            return k.done ? c([]) : new e(function(n, m) {
                function p(v) {
                    return function(x) {
                        q[v] = x;
                        t--;
                        0 == t && n(q)
                    }
                }
                var q = []
                  , t = 0;
                do
                    q.push(void 0),
                    t++,
                    c(k.value).zc(p(q.length - 1), m),
                    k = h.next();
                while (!k.done)
            }
            )
        }
        ;
        return e
    });
    r("Object.setPrototypeOf", function(a) {
        return a || ta
    });
    r("Array.prototype.find", function(a) {
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
    });
    r("WeakMap", function(a) {
        function b() {}
        function c(k) {
            var n = typeof k;
            return "object" === n && null !== k || "function" === n
        }
        function d(k) {
            if (!ka(k, f)) {
                var n = new b;
                ba(k, f, {
                    value: n
                })
            }
        }
        function e(k) {
            var n = Object[k];
            n && (Object[k] = function(m) {
                if (m instanceof b)
                    return m;
                Object.isExtensible(m) && d(m);
                return n(m)
            }
            )
        }
        if (function() {
            if (!a || !Object.seal)
                return !1;
            try {
                var k = Object.seal({})
                  , n = Object.seal({})
                  , m = new a([[k, 2], [n, 3]]);
                if (2 != m.get(k) || 3 != m.get(n))
                    return !1;
                m.delete(k);
                m.set(n, 4);
                return !m.has(k) && 4 == m.get(n)
            } catch (p) {
                return !1
            }
        }())
            return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0
          , h = function(k) {
            this.g = (g += Math.random() + 1).toString();
            if (k) {
                k = u(k);
                for (var n; !(n = k.next()).done; )
                    n = n.value,
                    this.set(n[0], n[1])
            }
        };
        h.prototype.set = function(k, n) {
            if (!c(k))
                throw Error("Invalid WeakMap key");
            d(k);
            if (!ka(k, f))
                throw Error("WeakMap key fail: " + k);
            k[f][this.g] = n;
            return this
        }
        ;
        h.prototype.get = function(k) {
            return c(k) && ka(k, f) ? k[f][this.g] : void 0
        }
        ;
        h.prototype.has = function(k) {
            return c(k) && ka(k, f) && ka(k[f], this.g)
        }
        ;
        h.prototype.delete = function(k) {
            return c(k) && ka(k, f) && ka(k[f], this.g) ? delete k[f][this.g] : !1
        }
        ;
        return h
    });
    r("Map", function(a) {
        if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                return !1;
            try {
                var h = Object.seal({
                    x: 4
                })
                  , k = new a(u([[h, "s"]]));
                if ("s" != k.get(h) || 1 != k.size || k.get({
                    x: 4
                }) || k.set({
                    x: 4
                }, "t") != k || 2 != k.size)
                    return !1;
                var n = k.entries()
                  , m = n.next();
                if (m.done || m.value[0] != h || "s" != m.value[1])
                    return !1;
                m = n.next();
                return m.done || 4 != m.value[0].x || "t" != m.value[1] || !n.next().done ? !1 : !0
            } catch (p) {
                return !1
            }
        }())
            return a;
        var b = new WeakMap
          , c = function(h) {
            this[0] = {};
            this[1] = f();
            this.size = 0;
            if (h) {
                h = u(h);
                for (var k; !(k = h.next()).done; )
                    k = k.value,
                    this.set(k[0], k[1])
            }
        };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var n = d(this, h);
            n.list || (n.list = this[0][n.id] = []);
            n.oa ? n.oa.value = k : (n.oa = {
                next: this[1],
                Ya: this[1].Ya,
                head: this[1],
                key: h,
                value: k
            },
            n.list.push(n.oa),
            this[1].Ya.next = n.oa,
            this[1].Ya = n.oa,
            this.size++);
            return this
        }
        ;
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.oa && h.list ? (h.list.splice(h.index, 1),
            h.list.length || delete this[0][h.id],
            h.oa.Ya.next = h.oa.next,
            h.oa.next.Ya = h.oa.Ya,
            h.oa.head = null,
            this.size--,
            !0) : !1
        }
        ;
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].Ya = f();
            this.size = 0
        }
        ;
        c.prototype.has = function(h) {
            return !!d(this, h).oa
        }
        ;
        c.prototype.get = function(h) {
            return (h = d(this, h).oa) && h.value
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
            for (var n = this.entries(), m; !(m = n.next()).done; )
                m = m.value,
                h.call(k, m[1], m[0], this)
        }
        ;
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, k) {
            var n = k && typeof k;
            "object" == n || "function" == n ? b.has(k) ? n = b.get(k) : (n = "" + ++g,
            b.set(k, n)) : n = "p_" + k;
            var m = h[0][n];
            if (m && ka(h[0], n))
                for (h = 0; h < m.length; h++) {
                    var p = m[h];
                    if (k !== k && p.key !== p.key || k === p.key)
                        return {
                            id: n,
                            list: m,
                            index: h,
                            oa: p
                        }
                }
            return {
                id: n,
                list: m,
                index: -1,
                oa: void 0
            }
        }
          , e = function(h, k) {
            var n = h[1];
            return ea(function() {
                if (n) {
                    for (; n.head != h[1]; )
                        n = n.Ya;
                    for (; n.next != n.head; )
                        return n = n.next,
                        {
                            done: !1,
                            value: k(n)
                        };
                    n = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }
          , f = function() {
            var h = {};
            return h.Ya = h.next = h.head = h
        }
          , g = 0;
        return c
    });
    r("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    r("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    r("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    r("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
        }
    });
    r("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b)
                return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    r("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                ka(b, d) && c.push(b[d]);
            return c
        }
    });
    r("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    r("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b))
                    return !0
            }
            return !1
        }
    });
    var La = function(a, b, c) {
        if (null == a)
            throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    r("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== La(this, b, "includes").indexOf(b, c || 0)
        }
    });
    r("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });
    var Ma = function(a, b) {
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
        e[Symbol.iterator] = function() {
            return e
        }
        ;
        return e
    };
    r("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ma(this, function(b, c) {
                return [b, c]
            })
        }
    });
    r("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ma(this, function(b) {
                return b
            })
        }
    });
    r("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ma(this, function(b, c) {
                return c
            })
        }
    });
    r("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            }
            ;
            var e = []
              , f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
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
    });
    r("Set", function(a) {
        if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                return !1;
            try {
                var c = Object.seal({
                    x: 4
                })
                  , d = new a(u([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                    x: 4
                }) != d || 2 != d.size)
                    return !1;
                var e = d.entries()
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
            this.g = new Map;
            if (c) {
                c = u(c);
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
            return this.g.entries()
        }
        ;
        b.prototype.values = function() {
            return this.g.values()
        }
        ;
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        }
        ;
        return b
    });
    r("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                ka(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    r("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = La(this, b, "startsWith");
            b += "";
            var e = d.length
              , f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e; )
                if (d[c++] != b[g++])
                    return !1;
            return g >= f
        }
    });
    r("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = La(this, null, "repeat");
            if (0 > b || 1342177279 < b)
                throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b; )
                if (b & 1 && (d += c),
                b >>>= 1)
                    c += c;
            return d
        }
    });
    r("globalThis", function(a) {
        return a || da
    });
    r("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = La(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? c.repeat(Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    });
    r("Math.imul", function(a) {
        return a ? a : function(b, c) {
            b = Number(b);
            c = Number(c);
            var d = b & 65535
              , e = c & 65535;
            return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0
        }
    });
    r("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(Symbol.iterator in b))
                throw new TypeError("" + b + " is not iterable");
            b = b[Symbol.iterator].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d)
                    throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    });
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var Na = Na || {}
      , y = this || self
      , z = function(a, b, c) {
        a = a.split(".");
        c = c || y;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }
      , Pa = function(a) {
        var b = Oa("CLOSURE_FLAGS");
        a = b && b[a];
        return null != a ? a : !1
    }
      , Oa = function(a, b) {
        a = a.split(".");
        b = b || y;
        for (var c = 0; c < a.length; c++)
            if (b = b[a[c]],
            null == b)
                return null;
        return b
    }
      , Qa = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }
      , Ra = function(a) {
        var b = Qa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
      , Sa = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
      , Va = function(a) {
        return Object.prototype.hasOwnProperty.call(a, Ta) && a[Ta] || (a[Ta] = ++Ua)
    }
      , Wa = function(a) {
        null !== a && "removeAttribute"in a && a.removeAttribute(Ta);
        try {
            delete a[Ta]
        } catch (b) {}
    }
      , Ta = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , Ua = 0
      , Xa = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
      , Za = function(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
      , $a = function(a, b, c) {
        $a = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Xa : Za;
        return $a.apply(null, arguments)
    }
      , ab = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
      , bb = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Ga = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Pi = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }
      , cb = function(a) {
        return a
    };
    function db(a, b) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, db);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    bb(db, Error);
    db.prototype.name = "CustomError";
    var eb;
    var fb, gb = "function" === typeof String.prototype.yg, ib = "undefined" !== typeof TextEncoder;
    function jb(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (ib) {
            if (b && (gb ? !a.yg() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)))
                throw Error("Found an unpaired surrogate");
            a = (fb || (fb = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f)
                    d[c++] = f;
                else {
                    if (2048 > f)
                        d[c++] = f >> 6 | 192;
                    else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (56320 <= g && 57343 >= g) {
                                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else
                                    e--
                            }
                            if (b)
                                throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    }
    ;function kb(a) {
        y.setTimeout(function() {
            throw a;
        }, 0)
    }
    ;var lb = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
      , nb = function(a) {
        return /^[\s\xa0]*$/.test(a)
    }
      , ob = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
      , pb = function(a, b) {
        return -1 != a.indexOf(b)
    }
      , qb = function(a, b) {
        return pb(a.toLowerCase(), b.toLowerCase())
    }
      , sb = function(a, b) {
        var c = 0;
        a = ob(String(a)).split(".");
        b = ob(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || ""
              , g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length)
                    break;
                c = rb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || rb(0 == f[2].length, 0 == g[2].length) || rb(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }
      , rb = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var tb = Pa(610401301)
      , ub = Pa(188588736);
    function vb() {
        var a = y.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var wb, xb = y.navigator;
    wb = xb ? xb.userAgentData || null : null;
    function yb(a) {
        return tb ? wb ? wb.brands.some(function(b) {
            return (b = b.brand) && pb(b, a)
        }) : !1 : !1
    }
    function B(a) {
        return pb(vb(), a)
    }
    ;function zb() {
        return tb ? !!wb && 0 < wb.brands.length : !1
    }
    function Ab() {
        return zb() ? !1 : B("Opera")
    }
    function Bb() {
        return zb() ? !1 : B("Trident") || B("MSIE")
    }
    function Cb() {
        return B("Firefox") || B("FxiOS")
    }
    function Db() {
        return B("Safari") && !(Eb() || (zb() ? 0 : B("Coast")) || Ab() || (zb() ? 0 : B("Edge")) || (zb() ? yb("Microsoft Edge") : B("Edg/")) || (zb() ? yb("Opera") : B("OPR")) || Cb() || B("Silk") || B("Android"))
    }
    function Eb() {
        return zb() ? yb("Chromium") : (B("Chrome") || B("CriOS")) && !(zb() ? 0 : B("Edge")) || B("Silk")
    }
    ;function Fb() {
        return tb && wb && wb.platform ? "Android" === wb.platform : B("Android")
    }
    function Gb() {
        return B("iPhone") && !B("iPod") && !B("iPad")
    }
    ;var Hb = function(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , Ib = function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            e in d && b.call(void 0, d[e], e, a)
    };
    function Jb(a, b) {
        for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d)
            d in c && b.call(void 0, c[d], d, a)
    }
    var Kb = function(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }
      , Lb = function(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
      , Mb = function(a, b, c) {
        var d = c;
        Ib(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }
      , Nb = function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    };
    function Ob(a, b) {
        b = Rb(a, b);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    function Rb(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return e;
        return -1
    }
    function Sb(a, b) {
        b = Tb(a, b);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    function Tb(a, b) {
        for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
            if (d in c && b.call(void 0, c[d], d, a))
                return d;
        return -1
    }
    function Ub(a, b) {
        return 0 <= Hb(a, b)
    }
    function Vb(a, b) {
        b = Hb(a, b);
        var c;
        (c = 0 <= b) && Wb(a, b);
        return c
    }
    function Wb(a, b) {
        return 1 == Array.prototype.splice.call(a, b, 1).length
    }
    function Xb(a, b) {
        var c = 0;
        Jb(a, function(d, e) {
            b.call(void 0, d, e, a) && Wb(a, e) && c++
        })
    }
    function Yb(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function Zb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function $b(a) {
        for (var b = 0, c = 0, d = {}; c < a.length; ) {
            var e = a[c++]
              , f = Sa(e) ? "o" + Va(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0,
            a[b++] = e)
        }
        a.length = b
    }
    function ac(a, b) {
        a.sort(b || bc)
    }
    function bc(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    function cc(a) {
        for (var b = [], c = 0; c < a; c++)
            b[c] = "";
        return b
    }
    ;var dc = function(a) {
        dc[" "](a);
        return a
    };
    dc[" "] = function() {}
    ;
    var ec = function(a, b) {
        try {
            return dc(a[b]),
            !0
        } catch (c) {}
        return !1
    }
      , gc = function(a) {
        var b = fc;
        return Object.prototype.hasOwnProperty.call(b, 8) ? b[8] : b[8] = a(8)
    };
    var hc = Ab(), ic = Bb(), jc = B("Edge"), kc = B("Gecko") && !(qb(vb(), "WebKit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"), lc = qb(vb(), "WebKit") && !B("Edge"), mc = tb && wb && wb.platform ? "macOS" === wb.platform : B("Macintosh"), nc = Fb(), oc = Gb(), pc = B("iPad"), qc = B("iPod"), rc = Gb() || B("iPad") || B("iPod"), sc;
    a: {
        var tc = ""
          , uc = function() {
            var a = vb();
            if (kc)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (jc)
                return /Edge\/([\d\.]+)/.exec(a);
            if (ic)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (lc)
                return /WebKit\/(\S+)/.exec(a);
            if (hc)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        uc && (tc = uc ? uc[1] : "");
        if (ic) {
            var vc, wc = y.document;
            vc = wc ? wc.documentMode : void 0;
            if (null != vc && vc > parseFloat(tc)) {
                sc = String(vc);
                break a
            }
        }
        sc = tc
    }
    var xc = sc
      , fc = {}
      , yc = function() {
        return gc(function() {
            return 0 <= sb(xc, 8)
        })
    };
    var zc = Cb()
      , Ac = B("Android") && !(Eb() || Cb() || Ab() || B("Silk"))
      , Bc = Eb();
    Db();
    var Cc = {}
      , Dc = null
      , Fc = function(a, b) {
        void 0 === b && (b = 0);
        Ec();
        b = Cc[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
            var g = a[e]
              , h = a[e + 1]
              , k = a[e + 2]
              , n = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = "" + n + g + h + k
        }
        n = 0;
        k = d;
        switch (a.length - e) {
        case 2:
            n = a[e + 1],
            k = b[(n & 15) << 2] || d;
        case 1:
            a = a[e],
            c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | n >> 4] + k + d
        }
        return c.join("")
    }
      , Hc = function(a) {
        var b = [];
        Gc(a, function(c) {
            b.push(c)
        });
        return b
    }
      , Gc = function(a, b) {
        function c(k) {
            for (; d < a.length; ) {
                var n = a.charAt(d++)
                  , m = Dc[n];
                if (null != m)
                    return m;
                if (!nb(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return k
        }
        Ec();
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
      , Ec = function() {
        if (!Dc) {
            Dc = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Cc[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Dc[f] && (Dc[f] = e)
                }
            }
        }
    };
    var Ic = "undefined" !== typeof Uint8Array
      , Jc = !ic && "function" === typeof btoa;
    function Kc() {
        return "function" === typeof BigInt
    }
    ;var Lc = 0, Mc = 0, Nc;
    function Oc(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = u(Pc(c, a)),
        b = c.next().value,
        a = c.next().value,
        c = b);
        Lc = c >>> 0;
        Mc = a >>> 0
    }
    function Qc(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (2097151 >= b)
            var c = "" + (4294967296 * b + a);
        else
            Kc() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215,
            b = b >> 16 & 65535,
            a = (a & 16777215) + 6777216 * c + 6710656 * b,
            c += 8147497 * b,
            b *= 2,
            1E7 <= a && (c += Math.floor(a / 1E7),
            a %= 1E7),
            1E7 <= c && (b += Math.floor(c / 1E7),
            c %= 1E7),
            c = b + Rc(c) + Rc(a));
        return c
    }
    function Rc(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }
    function Sc() {
        var a = Lc
          , b = Mc;
        b & 2147483648 ? Kc() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = u(Pc(a, b)),
        a = b.next().value,
        b = b.next().value,
        a = "-" + Qc(a, b)) : a = Qc(a, b);
        return a
    }
    function Tc(a) {
        if (16 > a.length)
            Oc(Number(a));
        else if (Kc())
            a = BigInt(a),
            Lc = Number(a & BigInt(4294967295)) >>> 0,
            Mc = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            Mc = Lc = 0;
            for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e,
            e += 6)
                d = Number(a.slice(d, e)),
                Mc *= 1E6,
                Lc = 1E6 * Lc + d,
                4294967296 <= Lc && (Mc += Math.trunc(Lc / 4294967296),
                Mc >>>= 0,
                Lc >>>= 0);
            b && (b = u(Pc(Lc, Mc)),
            a = b.next().value,
            b = b.next().value,
            Lc = a,
            Mc = b)
        }
    }
    function Pc(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    }
    ;var Uc = function(a, b) {
        this.j = a >>> 0;
        this.g = b >>> 0
    }, Zc = function(a) {
        if (!a)
            return Vc || (Vc = new Uc(0,0));
        if (!/^\d+$/.test(a))
            return null;
        Tc(a);
        return new Uc(Lc,Mc)
    }, Vc, $c = function(a, b) {
        this.j = a >>> 0;
        this.g = b >>> 0
    }, bd = function(a) {
        if (!a)
            return ad || (ad = new $c(0,0));
        if (!/^-?\d+$/.test(a))
            return null;
        Tc(a);
        return new $c(Lc,Mc)
    }, ad;
    var cd = function() {
        this.g = []
    };
    cd.prototype.length = function() {
        return this.g.length
    }
    ;
    cd.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    }
    ;
    var dd = function(a, b, c) {
        for (; 0 < c || 127 < b; )
            a.g.push(b & 127 | 128),
            b = (b >>> 7 | c << 25) >>> 0,
            c >>>= 7;
        a.g.push(b)
    }
      , ed = function(a, b) {
        for (; 127 < b; )
            a.g.push(b & 127 | 128),
            b >>>= 7;
        a.g.push(b)
    }
      , fd = function(a, b) {
        if (0 <= b)
            ed(a, b);
        else {
            for (var c = 0; 9 > c; c++)
                a.g.push(b & 127 | 128),
                b >>= 7;
            a.g.push(1)
        }
    }
      , gd = function(a, b) {
        a.g.push(b >>> 0 & 255);
        a.g.push(b >>> 8 & 255);
        a.g.push(b >>> 16 & 255);
        a.g.push(b >>> 24 & 255)
    };
    var hd = function() {
        this.l = [];
        this.j = 0;
        this.g = new cd
    }
      , id = function(a, b) {
        0 !== b.length && (a.l.push(b),
        a.j += b.length)
    }
      , kd = function(a, b) {
        jd(a, b, 2);
        b = a.g.end();
        id(a, b);
        b.push(a.j);
        return b
    }
      , ld = function(a, b) {
        var c = b.pop();
        for (c = a.j + a.g.length() - c; 127 < c; )
            b.push(c & 127 | 128),
            c >>>= 7,
            a.j++;
        b.push(c);
        a.j++
    }
      , jd = function(a, b, c) {
        ed(a.g, 8 * b + c)
    }
      , md = function(a, b, c) {
        jd(a, b, 2);
        ed(a.g, c.length);
        id(a, a.g.end());
        id(a, c)
    };
    var nd = function(a, b) {
        this.g = a;
        this.kf = b
    };
    function od(a) {
        return Array.prototype.slice.call(a)
    }
    ;function pd(a) {
        return "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : a
    }
    var qd = pd()
      , rd = pd("0di")
      , sd = pd("2ex")
      , td = pd("0dg");
    var ud = qd ? function(a, b) {
        a[qd] |= b
    }
    : function(a, b) {
        void 0 !== a.Ba ? a.Ba |= b : Object.defineProperties(a, {
            Ba: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }
      , vd = qd ? function(a, b) {
        a[qd] &= ~b
    }
    : function(a, b) {
        void 0 !== a.Ba && (a.Ba &= ~b)
    }
    ;
    function wd(a, b, c) {
        return c ? a | b : a & ~b
    }
    var xd = qd ? function(a) {
        return a[qd] | 0
    }
    : function(a) {
        return a.Ba | 0
    }
      , yd = qd ? function(a) {
        return a[qd]
    }
    : function(a) {
        return a.Ba
    }
      , zd = qd ? function(a, b) {
        a[qd] = b;
        return a
    }
    : function(a, b) {
        void 0 !== a.Ba ? a.Ba = b : Object.defineProperties(a, {
            Ba: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return a
    }
    ;
    function Ad(a) {
        ud(a, 34);
        return a
    }
    function Bd(a) {
        ud(a, 32);
        return a
    }
    function Cd(a, b) {
        zd(b, (a | 0) & -14591)
    }
    function Dd(a, b) {
        zd(b, (a | 34) & -14557)
    }
    function Ed(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    }
    ;var Fd = {}
      , Gd = {};
    function Hd(a) {
        return !(!a || "object" !== typeof a || a.zg !== Gd)
    }
    function Id(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var Jd;
    function Kd(a, b, c) {
        if (!Array.isArray(a) || a.length)
            return !1;
        var d = xd(a);
        if (d & 1)
            return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c))))
            return !1;
        zd(a, d | 1);
        return !0
    }
    var Ld, Md = [];
    zd(Md, 55);
    Ld = Object.freeze(Md);
    function Nd(a) {
        if (a & 2)
            throw Error();
    }
    var Od = function(a, b, c) {
        this.l = 0;
        this.g = a;
        this.j = b;
        this.A = c
    };
    Od.prototype.next = function() {
        if (this.l < this.g.length) {
            var a = this.g[this.l++];
            return {
                done: !1,
                value: this.j ? this.j.call(this.A, a) : a
            }
        }
        return {
            done: !0,
            value: void 0
        }
    }
    ;
    Od.prototype[Symbol.iterator] = function() {
        return new Od(this.g,this.j,this.A)
    }
    ;
    var Pd = function() {};
    Object.freeze(new function() {}
    );
    Object.freeze(new Pd);
    var Qd = Object.freeze(new Pd);
    var Rd = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var Sd;
    function Td() {
        var a = Error();
        Rd(a, "incident");
        kb(a)
    }
    function Ud(a) {
        a = Error(a);
        Rd(a, "warning");
        return a
    }
    ;function Vd(a) {
        if (null == a || "number" === typeof a)
            return a;
        if ("NaN" === a || "Infinity" === a || "-Infinity" === a)
            return Number(a)
    }
    function Wd(a) {
        if ("boolean" !== typeof a)
            throw Error("Expected boolean but got " + Qa(a) + ": " + a);
        return a
    }
    function Xd(a) {
        return null == a ? a : Wd(a)
    }
    function Yd(a) {
        if (null == a || "boolean" === typeof a)
            return a;
        if ("number" === typeof a)
            return !!a
    }
    var Zd = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    function $d(a) {
        var b = typeof a;
        return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : Zd.test(a)
    }
    function ae(a) {
        if (!Number.isFinite(a))
            throw Ud("enum");
        return a | 0
    }
    function be(a) {
        return null == a ? a : ae(a)
    }
    function ce(a) {
        return null == a ? a : Number.isFinite(a) ? a | 0 : void 0
    }
    function de(a) {
        if ("number" !== typeof a)
            throw Ud("int32");
        if (!Number.isFinite(a))
            throw Ud("int32");
        return a | 0
    }
    function ee(a) {
        if (null == a)
            return a;
        if ("string" === typeof a) {
            if (!a)
                return;
            a = +a
        }
        if ("number" === typeof a)
            return Number.isFinite(a) ? a | 0 : void 0
    }
    function he(a) {
        if (null == a)
            return a;
        if ("string" === typeof a) {
            if (!a)
                return;
            a = +a
        }
        if ("number" === typeof a)
            return Number.isFinite(a) ? a >>> 0 : void 0
    }
    function ie(a) {
        if (null != a) {
            var b = !!b;
            if (!$d(a))
                throw Ud("int64");
            a = "string" === typeof a ? je(a) : b ? ke(a) : le(a)
        }
        return a
    }
    function me(a) {
        return "-" === a[0] ? !1 : 20 > a.length ? !0 : 20 === a.length && 184467 > Number(a.substring(0, 6))
    }
    function ne(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    }
    function oe(a) {
        if (0 > a) {
            Oc(a);
            var b = Qc(Lc, Mc);
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (me(String(a)))
            return a;
        Oc(a);
        return 4294967296 * Mc + (Lc >>> 0)
    }
    function le(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            Oc(a);
            var b = Lc
              , c = Mc;
            if (a = c & 2147483648)
                b = ~b + 1 >>> 0,
                c = ~c >>> 0,
                0 == b && (c = c + 1 >>> 0);
            b = 4294967296 * c + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }
    function ke(a) {
        a = Math.trunc(a);
        if (Number.isSafeInteger(a))
            a = String(a);
        else {
            var b = String(a);
            ne(b) ? a = b : (Oc(a),
            a = Sc())
        }
        return a
    }
    function je(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b))
            return String(b);
        b = a.indexOf(".");
        -1 !== b && (a = a.substring(0, b));
        ne(a) || (Tc(a),
        a = Sc());
        return a
    }
    function pe(a) {
        if ("string" !== typeof a)
            throw Error();
        return a
    }
    function qe(a) {
        if (null != a && "string" !== typeof a)
            throw Error();
        return a
    }
    function re(a) {
        return null == a || "string" === typeof a ? a : void 0
    }
    function se(a, b, c, d) {
        if (null != a && "object" === typeof a && a.Md === Fd)
            return a;
        if (!Array.isArray(a))
            return c ? d & 2 ? te(b) : new b : void 0;
        var e = c = xd(a);
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && zd(a, e);
        return new b(a)
    }
    function te(a) {
        var b = a[rd];
        if (b)
            return b;
        b = new a;
        Ad(b.H);
        return a[rd] = b
    }
    function ue(a, b, c) {
        if (b)
            return Wd(a);
        var d;
        return null != (d = Yd(a)) ? d : c ? !1 : void 0
    }
    function ve(a, b, c) {
        if (b)
            return pe(a);
        var d;
        return null != (d = re(a)) ? d : c ? "" : void 0
    }
    ;var we;
    function xe(a, b) {
        we = b;
        a = new a(b);
        we = void 0;
        return a
    }
    var ye, ze;
    function Ae(a) {
        switch (typeof a) {
        case "boolean":
            return ye || (ye = [0, void 0, !0]);
        case "number":
            return 0 < a ? void 0 : 0 === a ? ze || (ze = [0, void 0]) : [-a, void 0];
        case "string":
            return [0, a];
        case "object":
            return a
        }
    }
    function C(a, b, c) {
        null == a && (a = we);
        we = void 0;
        if (null == a) {
            var d = 96;
            c ? (a = [c],
            d |= 512) : a = [];
            b && (d = d & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a))
                throw Error("narr");
            d = xd(a);
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
                    if (Id(c[f])) {
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
        zd(a, d);
        return a
    }
    ;var Be = {}
      , Ce = function() {
        try {
            var a = function() {
                return oa(Map, [], this.constructor)
            };
            w(a, Map);
            dc(new a);
            return !1
        } catch (b) {
            return !0
        }
    }()
      , De = function() {
        this.g = new Map
    };
    l = De.prototype;
    l.get = function(a) {
        return this.g.get(a)
    }
    ;
    l.set = function(a, b) {
        this.g.set(a, b);
        this.size = this.g.size;
        return this
    }
    ;
    l.delete = function(a) {
        a = this.g.delete(a);
        this.size = this.g.size;
        return a
    }
    ;
    l.clear = function() {
        this.g.clear();
        this.size = this.g.size
    }
    ;
    l.has = function(a) {
        return this.g.has(a)
    }
    ;
    l.entries = function() {
        return this.g.entries()
    }
    ;
    l.keys = function() {
        return this.g.keys()
    }
    ;
    l.values = function() {
        return this.g.values()
    }
    ;
    l.forEach = function(a, b) {
        return this.g.forEach(a, b)
    }
    ;
    De.prototype[Symbol.iterator] = function() {
        return this.entries()
    }
    ;
    var Ee = function() {
        if (Ce)
            return Object.setPrototypeOf(De.prototype, Map.prototype),
            Object.defineProperties(De.prototype, {
                size: {
                    value: 0,
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }
            }),
            De;
        var a = function() {
            return oa(Map, [], this.constructor)
        };
        w(a, Map);
        return a
    }();
    function Fe(a) {
        return a
    }
    var He = function(a, b, c, d) {
        c = void 0 === c ? Fe : c;
        d = void 0 === d ? Fe : d;
        var e = Ee.call(this) || this;
        var f = xd(a);
        f |= 64;
        zd(a, f);
        e.Qb = f;
        e.nd = b;
        e.bc = c;
        e.je = e.nd ? Ge : d;
        for (var g = 0; g < a.length; g++) {
            var h = a[g]
              , k = c(h[0], !1, !0)
              , n = h[1];
            b ? void 0 === n && (n = null) : n = d(h[1], !1, !0, void 0, void 0, f);
            Ee.prototype.set.call(e, k, n)
        }
        return e
    };
    w(He, Ee);
    var Ie = function(a) {
        if (a.Qb & 2)
            throw Error("Cannot mutate an immutable Map");
    }
      , Le = function(a, b) {
        b = void 0 === b ? Je : b;
        if (0 !== a.size)
            return Ke(a, b)
    }
      , Ke = function(a, b) {
        b = void 0 === b ? Je : b;
        var c = [];
        a = Ee.prototype.entries.call(a);
        for (var d; !(d = a.next()).done; )
            d = d.value,
            d[0] = b(d[0]),
            d[1] = b(d[1]),
            c.push(d);
        return c
    };
    l = He.prototype;
    l.clear = function() {
        Ie(this);
        Ee.prototype.clear.call(this)
    }
    ;
    l.delete = function(a) {
        Ie(this);
        return Ee.prototype.delete.call(this, this.bc(a, !0, !1))
    }
    ;
    l.entries = function() {
        var a = Array.from(Ee.prototype.keys.call(this));
        return new Od(a,Me,this)
    }
    ;
    l.keys = function() {
        return Ee.prototype.keys.call(this)
    }
    ;
    l.values = function() {
        var a = Array.from(Ee.prototype.keys.call(this));
        return new Od(a,He.prototype.get,this)
    }
    ;
    l.forEach = function(a, b) {
        var c = this;
        Ee.prototype.forEach.call(this, function(d, e) {
            a.call(b, c.get(e), e, c)
        })
    }
    ;
    l.set = function(a, b) {
        Ie(this);
        a = this.bc(a, !0, !1);
        return null == a ? this : null == b ? (Ee.prototype.delete.call(this, a),
        this) : Ee.prototype.set.call(this, a, this.je(b, !0, !0, this.nd, !1, this.Qb))
    }
    ;
    l.has = function(a) {
        return Ee.prototype.has.call(this, this.bc(a, !1, !1))
    }
    ;
    l.get = function(a) {
        a = this.bc(a, !1, !1);
        var b = Ee.prototype.get.call(this, a);
        if (void 0 !== b) {
            var c = this.nd;
            return c ? (c = this.je(b, !1, !0, c, this.Vf, this.Qb),
            c !== b && Ee.prototype.set.call(this, a, c),
            c) : b
        }
    }
    ;
    He.prototype[Symbol.iterator] = function() {
        return this.entries()
    }
    ;
    He.prototype.toJSON = void 0;
    He.prototype.zg = Gd;
    function Ge(a, b, c, d, e, f) {
        a = se(a, d, c, f);
        e && (a = Ne(a));
        return a
    }
    function Je(a) {
        return a
    }
    function Me(a) {
        return [a, this.get(a)]
    }
    var Oe;
    function Pe() {
        return Oe || (Oe = new He(Ad([]),void 0,void 0,void 0,Be))
    }
    ;function Qe(a, b) {
        return Re(b)
    }
    function Re(a) {
        switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a)
                if (Array.isArray(a)) {
                    if (Kd(a, void 0, 0))
                        return
                } else {
                    if (Ic && null != a && a instanceof Uint8Array) {
                        if (Jc) {
                            for (var b = "", c = 0, d = a.length - 10240; c < d; )
                                b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                            b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                            a = btoa(b)
                        } else
                            a = Fc(a);
                        return a
                    }
                    if (a instanceof He)
                        return Le(a)
                }
        }
        return a
    }
    ;function Se(a, b, c) {
        a = od(a);
        var d = a.length
          , e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++)
            a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (var f in e)
                b[f] = c(e[f])
        }
        return a
    }
    function Te(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a))
                a = Kd(a, void 0, 0) ? void 0 : e && xd(a) & 2 ? a : Ue(a, b, c, void 0 !== d, e);
            else if (Id(a)) {
                var f = {}, g;
                for (g in a)
                    f[g] = Te(a[g], b, c, d, e);
                a = f
            } else
                a = b(a, d);
            return a
        }
    }
    function Ue(a, b, c, d, e) {
        var f = d || c ? xd(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = od(a);
        for (var g = 0; g < a.length; g++)
            a[g] = Te(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }
    function Ve(a) {
        return Te(a, We, void 0, void 0, !1)
    }
    function We(a) {
        return a.Md === Fd ? a.toJSON() : a instanceof He ? Le(a, Ve) : Re(a)
    }
    ;function Xe(a, b, c) {
        c = void 0 === c ? Dd : c;
        if (null != a) {
            if (Ic && a instanceof Uint8Array)
                return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = xd(a);
                d & 2 || (b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16))),
                a = b ? zd(a, (d | 34) & -12293) : Ue(a, Xe, d & 4 ? Dd : c, !0, !0));
                return a
            }
            a.Md === Fd ? (c = a.H,
            d = yd(c),
            a = d & 2 ? a : xe(a.constructor, $e(c, d, !0))) : a instanceof He && !(a.Qb & 2) && (c = Ad(Ke(a, Xe)),
            a = new He(c,a.nd,a.bc,a.je));
            return a
        }
    }
    function $e(a, b, c) {
        var d = c || b & 2 ? Dd : Cd
          , e = !!(b & 32);
        a = Se(a, b, function(f) {
            return Xe(f, e, d)
        });
        ud(a, 32 | (c ? 2 : 0));
        return a
    }
    function Ne(a) {
        var b = a.H
          , c = yd(b);
        return c & 2 ? xe(a.constructor, $e(b, c, !1)) : a
    }
    ;function af(a, b, c, d) {
        if (!(4 & b))
            return !0;
        if (null == c)
            return !1;
        !d && 0 === c && (4096 & b || 8192 & b) && 5 > (a.constructor[td] = (a.constructor[td] | 0) + 1) && Td();
        return 0 === c ? !1 : !(c & b)
    }
    var cf = function(a, b) {
        a = a.H;
        return bf(a, yd(a), b)
    };
    function df(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(0 > b || b >= a.length || b >= c))
            return a[b]
    }
    var bf = function(a, b, c, d) {
        if (-1 === c)
            return null;
        var e = Ed(b);
        if (c >= e) {
            if (b & 256)
                return a[a.length - 1][c]
        } else {
            var f = a.length;
            if (d && b & 256 && (d = a[f - 1][c],
            null != d)) {
                if (df(a, b, e, c) && null != sd) {
                    var g;
                    a = null != (g = Sd) ? g : Sd = {};
                    g = a[sd] || 0;
                    4 <= g || (a[sd] = g + 1,
                    Td())
                }
                return d
            }
            return df(a, b, e, c)
        }
    }
      , ff = function(a, b, c) {
        var d = a.H
          , e = yd(d);
        Nd(e);
        ef(d, e, b, c);
        return a
    };
    function ef(a, b, c, d, e) {
        var f = Ed(b);
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
            g !== b && zd(a, g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1],
        c in a && delete a[c]);
        return b
    }
    function gf(a, b, c) {
        var d = a.H
          , e = yd(d)
          , f = 2 & e ? 1 : 2
          , g = hf(d, e, b)
          , h = xd(g);
        if (af(a, h, void 0, !1)) {
            if (4 & h || Object.isFrozen(g))
                g = od(g),
                h = jf(h, e),
                e = ef(d, e, b, g);
            for (var k = a = 0; a < g.length; a++) {
                var n = c(g[a]);
                null != n && (g[k++] = n)
            }
            k < a && (g.length = k);
            h = kf(h, e);
            h = wd(h, 20, !0);
            h = wd(h, 4096, !1);
            h = wd(h, 8192, !1);
            zd(g, h);
            2 & h && Object.freeze(g)
        }
        lf(h) || (c = h,
        h = (a = 1 === f || 4 === f && !!(32 & h)) ? wd(h, 2, !0) : mf(h, e, !1),
        h !== c && zd(g, h),
        a && Object.freeze(g));
        2 === f && lf(h) && (g = od(g),
        h = jf(h, e),
        h = mf(h, e, !1),
        zd(g, h),
        ef(d, e, b, g));
        return g
    }
    function hf(a, b, c) {
        a = bf(a, b, c);
        return Array.isArray(a) ? a : Ld
    }
    function kf(a, b) {
        0 === a && (a = jf(a, b));
        return a = wd(a, 1, !0)
    }
    function lf(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }
    function nf(a, b, c, d, e, f) {
        var g = b & 2;
        a: {
            var h = c
              , k = b & 2;
            c = !1;
            if (null == h) {
                if (k) {
                    a = Pe();
                    break a
                }
                h = []
            } else if (h.constructor === He) {
                if (0 == (h.Qb & 2) || k) {
                    a = h;
                    break a
                }
                h = Ke(h)
            } else
                Array.isArray(h) ? c = !!(xd(h) & 2) : h = [];
            if (k) {
                if (!h.length) {
                    a = Pe();
                    break a
                }
                c || (c = !0,
                Ad(h))
            } else if (c) {
                c = !1;
                k = od(h);
                for (h = 0; h < k.length; h++) {
                    var n = k[h] = od(k[h]);
                    Array.isArray(n[1]) && (n[1] = Ad(n[1]))
                }
                h = k
            }
            c || (xd(h) & 64 ? vd(h, 32) : 32 & b && Bd(h));
            f = new He(h,e,ve,f);
            ef(a, b, d, f, !1);
            a = f
        }
        !g && e && (a.Vf = !0);
        return a
    }
    function of(a, b, c) {
        a = a.H;
        var d = yd(a);
        return nf(a, d, bf(a, d, b), b, void 0, c)
    }
    function pf(a, b, c, d) {
        var e = a.H
          , f = yd(e);
        Nd(f);
        if (null == c)
            return ef(e, f, b),
            a;
        var g = xd(c)
          , h = g
          , k = !!(2 & g) || Object.isFrozen(c)
          , n = !k && (void 0 === Qd || !1);
        if (af(a, g))
            for (g = 21,
            k && (c = od(c),
            h = 0,
            g = jf(g, f),
            g = mf(g, f, !0)),
            k = 0; k < c.length; k++)
                c[k] = d(c[k]);
        n && (c = od(c),
        h = 0,
        g = jf(g, f),
        g = mf(g, f, !0));
        g !== h && zd(c, g);
        ef(e, f, b, c);
        return a
    }
    function qf(a, b, c, d) {
        var e = a.H
          , f = yd(e);
        Nd(f);
        ef(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    }
    function rf(a, b, c, d) {
        var e = a.H
          , f = xd(e);
        Nd(yd(a.H));
        var g = f & 2;
        a = bf(e, f, b, !1);
        Array.isArray(a) || (a = Ld);
        var h = !!(f & 32)
          , k = xd(a);
        0 === k && h && !g ? (k |= 33,
        zd(a, k)) : k & 1 || (k |= 1,
        zd(a, k));
        if (g)
            k & 2 || Ad(a),
            Object.freeze(a);
        else if (2 & k || 2048 & k)
            a = od(a),
            g = 1,
            h && (g |= 32),
            zd(a, g),
            ef(e, f, b, a, !1);
        b = a;
        e = xd(b);
        e = !!(4 & e) && !!(4096 & e);
        if (Array.isArray(d))
            for (f = 0; f < d.length; f++)
                b.push(c(d[f], e));
        else
            for (d = u(d),
            f = d.next(); !f.done; f = d.next())
                b.push(c(f.value, e))
    }
    var tf = function(a, b, c, d) {
        var e = a.H
          , f = yd(e);
        Nd(f);
        (c = sf(e, f, c)) && c !== b && null != d && (f = ef(e, f, c));
        ef(e, f, b, d);
        return a
    }
      , uf = function(a, b, c) {
        a = a.H;
        return sf(a, yd(a), b) === c ? c : -1
    }
      , vf = function(a, b) {
        a = a.H;
        return sf(a, yd(a), b)
    };
    function sf(a, b, c) {
        for (var d = 0, e = 0; e < c.length; e++) {
            var f = c[e];
            null != bf(a, b, f) && (0 !== d && (b = ef(a, b, d)),
            d = f)
        }
        return d
    }
    var xf = function(a) {
        var b = wf;
        a = a.H;
        var c = yd(a);
        Nd(c);
        var d = bf(a, c, 4);
        b = Ne(se(d, b, !0, c));
        d !== b && ef(a, c, 4, b);
        return b
    };
    function yf(a, b, c, d) {
        a = a.H;
        var e = yd(a)
          , f = bf(a, e, c, d);
        b = se(f, b, !1, e);
        b !== f && null != b && ef(a, e, c, b, d);
        return b
    }
    var zf = function(a, b, c) {
        return (a = yf(a, b, c, !1)) ? a : te(b)
    }
      , Af = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = yf(a, b, c, d);
        if (null == b)
            return b;
        a = a.H;
        var e = yd(a);
        if (!(e & 2)) {
            var f = Ne(b);
            f !== b && (b = f,
            ef(a, e, c, b, d))
        }
        return b
    };
    function Bf(a, b, c, d, e, f) {
        var g = !!(2 & b)
          , h = g ? 1 : 2;
        e = !!e;
        f && (f = !g);
        g = hf(a, b, d);
        var k = xd(g)
          , n = !!(4 & k);
        if (!n) {
            k = kf(k, b);
            var m = g
              , p = b
              , q = !!(2 & k);
            q && (p = wd(p, 2, !0));
            for (var t = !q, v = !0, x = 0, A = 0; x < m.length; x++) {
                var ha = se(m[x], c, !1, p);
                if (ha instanceof c) {
                    if (!q) {
                        var Q = !!(xd(ha.H) & 2);
                        t && (t = !Q);
                        v && (v = Q)
                    }
                    m[A++] = ha
                }
            }
            A < x && (m.length = A);
            k = wd(k, 4, !0);
            k = wd(k, 16, v);
            k = wd(k, 8, t);
            zd(m, k);
            q && Object.freeze(m)
        }
        if (f && !(8 & k || !g.length && (1 === h || 4 === h && 32 & k))) {
            lf(k) && (g = od(g),
            k = jf(k, b),
            b = ef(a, b, d, g));
            c = g;
            f = k;
            for (m = 0; m < c.length; m++)
                k = c[m],
                p = Ne(k),
                k !== p && (c[m] = p);
            f = wd(f, 8, !0);
            f = wd(f, 16, !c.length);
            zd(c, f);
            k = f
        }
        lf(k) || (c = k,
        k = (f = 1 === h || 4 === h && !!(32 & k)) ? wd(k, !g.length || 16 & k && (!n || 32 & k) ? 2 : 2048, !0) : mf(k, b, e),
        k !== c && zd(g, k),
        f && Object.freeze(g));
        2 === h && lf(k) && (g = od(g),
        k = jf(k, b),
        k = mf(k, b, e),
        zd(g, k),
        ef(a, b, d, g));
        return g
    }
    var Cf = function(a, b, c) {
        a = a.H;
        var d = yd(a);
        return Bf(a, d, b, c, !1, !(2 & d))
    }
      , Df = function(a, b, c) {
        null == c && (c = void 0);
        return ff(a, b, c)
    }
      , Ef = function(a, b, c, d) {
        null == d && (d = void 0);
        return tf(a, b, c, d)
    }
      , Ff = function(a, b, c) {
        var d = a.H
          , e = yd(d);
        Nd(e);
        if (null == c)
            return ef(d, e, b),
            a;
        for (var f = xd(c), g = f, h = !!(2 & f) || !!(2048 & f), k = h || Object.isFrozen(c), n = !k && (void 0 === Qd || !1), m = !0, p = !0, q = 0; q < c.length; q++) {
            var t = c[q];
            h || (t = !!(xd(t.H) & 2),
            m && (m = !t),
            p && (p = t))
        }
        h || (f = wd(f, 5, !0),
        f = wd(f, 8, m),
        f = wd(f, 16, p));
        if (n || k && f !== g)
            c = od(c),
            g = 0,
            f = jf(f, e),
            f = mf(f, e, !0);
        f !== g && zd(c, f);
        ef(d, e, b, c);
        return a
    };
    function jf(a, b) {
        a = wd(a, 2, !!(2 & b));
        a = wd(a, 32, !0);
        return a = wd(a, 2048, !1)
    }
    function mf(a, b, c) {
        32 & b && c || (a = wd(a, 32, !1));
        return a
    }
    function Gf(a, b, c, d) {
        a = a.H;
        var e = yd(a);
        Nd(e);
        b = Bf(a, e, c, b, !0);
        c = null != d ? d : new c;
        b.push(c);
        xd(c.H) & 2 ? vd(b, 8) : vd(b, 16);
        return c
    }
    var Hf = function(a, b, c, d) {
        Gf(a, b, c, d);
        return a
    }
      , If = function(a, b) {
        a = cf(a, b);
        var c;
        null == a ? c = a : $d(a) ? "number" === typeof a ? c = le(a) : c = je(a) : c = void 0;
        return c
    };
    function Jf(a, b) {
        return null != a ? a : b
    }
    var Kf = function(a, b) {
        return re(cf(a, b))
    }
      , Lf = function(a, b) {
        var c = void 0 === c ? !1 : c;
        return Jf(Yd(cf(a, b)), c)
    }
      , Mf = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Jf(ee(cf(a, b)), c)
    }
      , Nf = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Jf(he(cf(a, b)), c)
    }
      , Of = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return Jf(If(a, b), c)
    }
      , Pf = function(a, b) {
        var c = void 0 === c ? 0 : c;
        a = a.H;
        var d = yd(a)
          , e = bf(a, d, b)
          , f = Vd(e);
        null != f && f !== e && ef(a, d, b, f);
        return Jf(f, c)
    }
      , D = function(a, b) {
        var c = void 0 === c ? "" : c;
        return Jf(Kf(a, b), c)
    }
      , Qf = function(a, b) {
        var c = 0;
        c = void 0 === c ? 0 : c;
        return Jf(ce(cf(a, b)), c)
    }
      , Rf = function(a, b) {
        var c = void 0 === c ? "0" : c;
        a = cf(a, b);
        b = !0;
        b = void 0 === b ? !1 : b;
        a = null == a ? a : $d(a) ? "string" === typeof a ? je(a) : b ? ke(a) : le(a) : void 0;
        return Jf(a, c)
    }
      , Sf = function(a, b) {
        return gf(a, b, re)
    }
      , Tf = function(a, b, c) {
        return Qf(a, uf(a, c, b))
    }
      , Uf = function(a, b, c) {
        return ff(a, b, Xd(c))
    }
      , Vf = function(a, b, c) {
        return ff(a, b, null == c ? c : de(c))
    }
      , Wf = function(a, b, c) {
        return qf(a, b, null == c ? c : de(c), 0)
    }
      , Xf = function(a, b, c) {
        return qf(a, b, ie(c), "0")
    }
      , Yf = function(a, b, c) {
        return ff(a, b, qe(c))
    }
      , Zf = function(a, b, c) {
        return ff(a, b, be(c))
    };
    var E = function(a, b, c) {
        this.H = C(a, b, c)
    };
    E.prototype.toJSON = function() {
        return Jd ? $f(this, this.H, !1) : $f(this, Ue(this.H, We, void 0, void 0, !1), !0)
    }
    ;
    var ag = function(a) {
        Jd = !0;
        try {
            return JSON.stringify(a.toJSON(), Qe)
        } finally {
            Jd = !1
        }
    };
    E.prototype.Md = Fd;
    E.prototype.toString = function() {
        return $f(this, this.H, !1).toString()
    }
    ;
    function $f(a, b, c) {
        var d = ub ? void 0 : a.constructor.ba;
        var e = yd(c ? a.H : b);
        a = b.length;
        if (!a)
            return b;
        var f;
        if (Id(c = b[a - 1])) {
            a: {
                var g = c;
                var h = {}, k = !1, n;
                for (n in g) {
                    var m = g[n];
                    if (Array.isArray(m)) {
                        var p = m;
                        if (Kd(m, d, +n) || Hd(m) && 0 === m.size)
                            m = null;
                        m != p && (k = !0)
                    }
                    null != m ? h[n] = m : k = !0
                }
                if (k) {
                    for (var q in h) {
                        g = h;
                        break a
                    }
                    g = null
                }
            }
            g != c && (f = !0);
            a--
        }
        for (n = +!!(e & 512) - 1; 0 < a; a--) {
            q = a - 1;
            c = b[q];
            q -= n;
            if (!(null == c || Kd(c, d, q) || Hd(c) && 0 === c.size))
                break;
            var t = !0
        }
        if (!f && !t)
            return b;
        b = Array.prototype.slice.call(b, 0, a);
        g && b.push(g);
        return b
    }
    ;function bg(a, b) {
        if (Array.isArray(b)) {
            var c = xd(b);
            if (c & 4)
                return b;
            for (var d = 0, e = 0; d < b.length; d++) {
                var f = a(b[d]);
                null != f && (b[e++] = f)
            }
            e < d && (b.length = e);
            zd(b, (c | 5) & -12289);
            c & 2 && Object.freeze(b);
            return b
        }
    }
    var cg = Symbol();
    function dg(a, b, c) {
        a[b] = c
    }
    var eg = Symbol();
    function fg(a) {
        var b = a[eg];
        if (!b) {
            var c = gg(a);
            b = function(d, e) {
                return hg(d, e, c)
            }
            ;
            a[eg] = b
        }
        return b
    }
    var ig = Symbol();
    function jg(a) {
        return a.g
    }
    function kg(a, b) {
        var c, d, e = a.g;
        return function(f, g, h) {
            return e(f, g, h, d || (d = gg(b).g), c || (c = fg(b)))
        }
    }
    function gg(a) {
        var b = a[ig];
        if (b)
            return b;
        b = a[ig] = {};
        var c = jg
          , d = kg;
        var e = void 0 === e ? dg : e;
        b.g = Ae(a[0]);
        var f = 0
          , g = a[++f];
        g && g.constructor === Object && (b.dg = g,
        g = a[++f],
        "function" === typeof g && (b.l = g,
        b.j = a[++f],
        g = a[++f]));
        for (var h = {}; Array.isArray(g) && "number" === typeof g[0] && 0 < g[0]; ) {
            for (var k = 0; k < g.length; k++)
                h[g[k]] = g;
            g = a[++f]
        }
        for (k = 1; void 0 !== g; ) {
            "number" === typeof g && (k += g,
            g = a[++f]);
            var n = void 0;
            if (g instanceof nd)
                var m = g;
            else
                m = lg,
                f--;
            if (m.kf) {
                g = a[++f];
                n = a;
                var p = f;
                "function" == typeof g && (g = g(),
                n[p] = g);
                n = g
            }
            g = a[++f];
            p = k + 1;
            "number" === typeof g && 0 > g && (p -= g,
            g = a[++f]);
            for (; k < p; k++) {
                var q = h[k];
                e(b, k, n ? d(m, n, q) : c(m, q))
            }
        }
        mg in a && cg in a && ig in a && (a.length = 0);
        return b
    }
    var mg = Symbol();
    function ng(a, b) {
        var c = a[b];
        if (c)
            return c;
        if (c = a.dg)
            if (c = c[b]) {
                c = Array.isArray(c) ? c[0]instanceof nd ? c : [og, c] : [c, void 0];
                var d = c[0].g;
                if (c = c[1]) {
                    var e = fg(c)
                      , f = gg(c).g;
                    c = (c = a.j) ? c(f, e) : function(g, h, k) {
                        return d(g, h, k, f, e)
                    }
                } else
                    c = d;
                return a[b] = c
            }
    }
    function hg(a, b, c) {
        for (var d = yd(a), e = +!!(d & 512) - 1, f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
            var k = a[h];
            if (null != k) {
                var n = h - e
                  , m = ng(c, n);
                m && m(b, k, n)
            }
        }
        if (d & 256) {
            a = a[f - 1];
            for (var p in a)
                d = +p,
                Number.isNaN(d) || (e = a[p],
                null != e && (f = ng(c, d)) && f(b, e, d))
        }
    }
    function pg(a) {
        return new nd(a,!1)
    }
    function qg(a, b, c) {
        a: if (null != b) {
            if ($d(b)) {
                if ("string" === typeof b) {
                    b = je(b);
                    break a
                }
                if ("number" === typeof b) {
                    b = le(b);
                    break a
                }
            }
            b = void 0
        }
        null != b && ("string" === typeof b && bd(b),
        null != b && (jd(a, c, 0),
        "number" === typeof b ? (a = a.g,
        Oc(b),
        dd(a, Lc, Mc)) : (c = bd(b),
        dd(a.g, c.j, c.g))))
    }
    function rg(a, b, c) {
        b = ee(b);
        null != b && null != b && (jd(a, c, 0),
        fd(a.g, b))
    }
    function sg(a, b, c, d, e) {
        b = b instanceof E ? b.H : Array.isArray(b) ? C(b, d[0], d[1]) : void 0;
        null != b && (c = kd(a, c),
        e(b, a),
        ld(a, c))
    }
    var tg = pg(function(a, b, c) {
        b = Vd(b);
        null != b && (jd(a, c, 1),
        a = a.g,
        c = Nc || (Nc = new DataView(new ArrayBuffer(8))),
        c.setFloat64(0, +b, !0),
        Lc = c.getUint32(0, !0),
        Mc = c.getUint32(4, !0),
        gd(a, Lc),
        gd(a, Mc))
    }), ug = pg(function(a, b, c) {
        b = Vd(b);
        null != b && (jd(a, c, 5),
        a = a.g,
        c = Nc || (Nc = new DataView(new ArrayBuffer(8))),
        c.setFloat32(0, +b, !0),
        Mc = 0,
        Lc = c.getUint32(0, !0),
        gd(a, Lc))
    }), vg = pg(qg), wg = pg(qg), xg = pg(function(a, b, c) {
        a: if (null != b) {
            if ($d(b)) {
                if ("string" === typeof b) {
                    var d = Math.trunc(Number(b));
                    Number.isSafeInteger(d) && 0 <= d ? b = String(d) : (d = b.indexOf("."),
                    -1 !== d && (b = b.substring(0, d)),
                    me(b) || (Tc(b),
                    b = Qc(Lc, Mc)));
                    break a
                }
                if ("number" === typeof b) {
                    b = Math.trunc(b);
                    b = 0 <= b && Number.isSafeInteger(b) ? b : oe(b);
                    break a
                }
            }
            b = void 0
        }
        null != b && ("string" === typeof b && Zc(b),
        null != b && (jd(a, c, 0),
        "number" === typeof b ? (a = a.g,
        Oc(b),
        dd(a, Lc, Mc)) : (c = Zc(b),
        dd(a.g, c.j, c.g))))
    }), yg = pg(rg), zg = pg(rg), Ag = pg(function(a, b, c) {
        b = Yd(b);
        null != b && (jd(a, c, 0),
        a.g.g.push(b ? 1 : 0))
    }), Bg = pg(function(a, b, c) {
        b = re(b);
        null != b && md(a, c, jb(b))
    }), Cg;
    Cg = new nd(function(a, b, c) {
        b = bg(re, b);
        if (null != b)
            for (var d = 0; d < b.length; d++) {
                var e = a
                  , f = c
                  , g = b[d];
                null != g && md(e, f, jb(g))
            }
    }
    ,!1);
    var og = new nd(sg,!0), lg = new nd(sg,!0), Dg;
    Dg = new nd(function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                sg(a, b[f], c, d, e)
    }
    ,!0);
    var Eg = pg(function(a, b, c) {
        b = he(b);
        null != b && null != b && (jd(a, c, 0),
        ed(a.g, b))
    }), Fg = pg(function(a, b, c) {
        b = ee(b);
        null != b && (b = parseInt(b, 10),
        jd(a, c, 0),
        fd(a.g, b))
    }), Gg;
    Gg = new nd(function(a, b, c) {
        b = bg(ee, b);
        if (null != b && b.length) {
            c = kd(a, c);
            for (var d = 0; d < b.length; d++)
                fd(a.g, b[d]);
            ld(a, c)
        }
    }
    ,!1);
    function Hg(a) {
        return function() {
            var b = new hd;
            hg(this.H, b, gg(a));
            id(b, b.g.end());
            for (var c = new Uint8Array(b.j), d = b.l, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            b.l = [c];
            return c
        }
    }
    function Ig(a) {
        return function(b) {
            if (null == b || "" == b)
                b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b))
                    throw Error("dnarr");
                b = xe(a, Bd(b))
            }
            return b
        }
    }
    ;var Jg = function(a) {
        this.H = C(a)
    };
    w(Jg, E);
    var Kg = function(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }
      , Lg = function(a) {
        return !!(a.error && a.meta && a.id)
    };
    var Mg = function() {}
      , Ng = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
      , Og = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    }
      , Pg = function(a) {
        var b = 0
          , c = !1
          , d = []
          , e = function() {
            b = 0;
            c && (c = !1,
            f())
        }
          , f = function() {
            b = y.setTimeout(e, 1E3);
            var g = d;
            d = [];
            a.apply(void 0, g)
        };
        return function(g) {
            d = arguments;
            b ? c = !0 : f()
        }
    };
    var Qg = Ng(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            y.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    function Rg(a) {
        return a ? a.passive && Qg() ? a : a.capture || !1 : !1
    }
    var Sg = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Rg(d)),
        !0) : !1
    }
      , Tg = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, Rg())
    };
    function Ug(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    function Vg(a, b) {
        var c = {}, d;
        for (d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
    function Wg(a) {
        var b = Xg, c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b))
                return !1;
        return !0
    }
    function Yg(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    function Zg(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }
    function $g(a, b) {
        var c = Ra(b)
          , d = c ? b : arguments;
        for (c = c ? 0 : 1; c < d.length; c++) {
            if (null == a)
                return;
            a = a[d[c]]
        }
        return a
    }
    function ah(a, b) {
        return null !== a && b in a
    }
    function bh(a, b) {
        for (var c in a)
            if (a[c] == b)
                return !0;
        return !1
    }
    function ch(a) {
        var b = dh, c;
        for (c in b)
            if (a.call(void 0, b[c], c, b))
                return c
    }
    function eh(a) {
        for (var b in a)
            return !1;
        return !0
    }
    function fh(a) {
        for (var b in a)
            delete a[b]
    }
    function gh(a, b, c) {
        return null !== a && b in a ? a[b] : c
    }
    var hh = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function ih(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < hh.length; f++)
                c = hh[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;var jh, kh = function() {
        if (void 0 === jh) {
            var a = null
              , b = y.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: cb,
                        createScript: cb,
                        createScriptURL: cb
                    })
                } catch (c) {
                    y.console && y.console.error(c.message)
                }
                jh = a
            } else
                jh = a
        }
        return jh
    };
    var lh = function(a) {
        this.g = a
    };
    lh.prototype.toString = function() {
        return this.g + ""
    }
    ;
    var mh = {}
      , nh = function(a) {
        var b = kh();
        a = b ? b.createScriptURL(a) : a;
        return new lh(a,mh)
    };
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var oh = function(a) {
        this.g = a
    };
    oh.prototype.toString = function() {
        return this.g
    }
    ;
    var ph = new oh("about:invalid#zClosurez");
    var qh = function(a) {
        this.xg = a
    };
    function rh(a) {
        return new qh(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        }
        )
    }
    var sh = [rh("data"), rh("http"), rh("https"), rh("mailto"), rh("ftp"), new qh(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    }
    )];
    function th(a) {
        if ("undefined" !== typeof MediaSource && a instanceof MediaSource)
            return new oh(URL.createObjectURL(a));
        var b = a.type.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);
        if (2 !== (null == b ? void 0 : b.length) || !(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif|avif|x-ms-bmp)$/i.test(b[1]) || /^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(b[1]) || /^audio\/(?:3gpp2|3gpp|aac|amr|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(b[1]) || /^font\/\w+/i.test(b[1])))
            throw Error("");
        return new oh(URL.createObjectURL(a))
    }
    var uh = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
    var vh = {}
      , wh = function(a) {
        this.g = a
    };
    wh.prototype.toString = function() {
        return this.g.toString()
    }
    ;
    var xh = new wh("",vh);
    var yh = {}
      , zh = function(a) {
        this.g = a
    };
    zh.prototype.toString = function() {
        return this.g.toString()
    }
    ;
    var Ah = function(a) {
        return a instanceof zh && a.constructor === zh ? a.g : "type_error:SafeHtml"
    };
    function Bh(a) {
        var b = Ka.apply(1, arguments);
        if (0 === b.length)
            return nh(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return nh(c)
    }
    ;function Ch(a) {
        for (var b = Ka.apply(1, arguments), c = a[0], d = 0; d < a.length - 1; d++)
            c += String(b[d]) + a[d + 1];
        if (/[<>]/.test(c))
            throw Error("Forbidden characters in style string: " + c);
        return new wh(c,vh)
    }
    ;var Dh = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    Dh.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    Dh.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    Dh.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    Dh.prototype.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    }
    ;
    var F = function(a, b) {
        this.width = a;
        this.height = b
    }
      , Eh = function(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    };
    l = F.prototype;
    l.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    l.isEmpty = function() {
        return !(this.width * this.height)
    }
    ;
    l.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    l.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    l.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    l.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    }
    ;
    function Fh(a, b) {
        if (1 === a.nodeType) {
            var c = a.tagName;
            if ("SCRIPT" === c || "STYLE" === c)
                throw Error("");
        }
        a.innerHTML = Ah(b)
    }
    ;function Gh(a, b) {
        a.src = b instanceof lh && b.constructor === lh ? b.g : "type_error:TrustedResourceUrl";
        var c, d;
        (c = (b = null == (d = (c = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : d.call(c, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    }
    ;var Hh = function(a) {
        var b = []
          , c = []
          , d = {}
          , e = function(f, g) {
            var h = g + "  ";
            try {
                if (void 0 === f)
                    b.push("undefined");
                else if (null === f)
                    b.push("NULL");
                else if ("string" === typeof f)
                    b.push('"' + f.replace(/\n/g, "\n" + g) + '"');
                else if ("function" === typeof f)
                    b.push(String(f).replace(/\n/g, "\n" + g));
                else if (Sa(f)) {
                    f[Ta] || c.push(f);
                    var k = Va(f);
                    if (d[k])
                        b.push("*** reference loop detected (id=" + k + ") ***");
                    else {
                        d[k] = !0;
                        b.push("{");
                        for (var n in f)
                            "function" !== typeof f[n] && (b.push("\n"),
                            b.push(h),
                            b.push(n + " = "),
                            e(f[n], h));
                        b.push("\n" + g + "}");
                        delete d[k]
                    }
                } else
                    b.push(f)
            } catch (m) {
                b.push("*** " + m + " ***")
            }
        };
        e(a, "");
        for (a = 0; a < c.length; a++)
            Wa(c[a]);
        return b.join("")
    };
    function Ih(a, b) {
        a.write(Ah(b))
    }
    ;var Jh = function(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }
      , Kh = function(a, b) {
        a.length > b && (a = a.substring(0, b - 3) + "...");
        return a
    }
      , Lh = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    }
    : function(a, b) {
        return Array(b + 1).join(a)
    }
      , Mh = function(a) {
        return null == a ? "" : String(a)
    }
      , Nh = 2147483648 * Math.random() | 0
      , Oh = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
      , Ph = function() {
        return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase()
    }
      , Qh = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
      , Rh = function(a) {
        isFinite(a) && (a = String(a));
        return "string" === typeof a ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN
    };
    var Uh = function(a) {
        return a ? new Sh(Th(a)) : eb || (eb = new Sh)
    }
      , Vh = function(a) {
        var b = document;
        return "string" === typeof a ? b.getElementById(a) : a
    }
      , Yh = function(a, b) {
        Ug(b, function(c, d) {
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Xh.hasOwnProperty(d) ? a.setAttribute(Xh[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
      , Xh = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    }
      , Zh = function(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new F(a.clientWidth,a.clientHeight)
    }
      , $h = function(a) {
        var b = a.scrollingElement ? a.scrollingElement : lc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return new Dh(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
      , G = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    }
      , ci = function(a, b, c) {
        var d = arguments
          , e = document
          , f = d[1]
          , g = ai(e, String(d[0]));
        f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : Yh(g, f));
        2 < d.length && bi(e, g, d, 2);
        return g
    }
      , bi = function(a, b, c, d) {
        function e(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!Ra(f) || Sa(f) && 0 < f.nodeType)
                e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (Sa(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                Ib(g ? Zb(f) : f, e)
            }
        }
    }
      , ai = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }
      , di = function(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }
      , ei = function(a) {
        var b;
        if (lc && (b = a.parentElement))
            return b;
        b = a.parentNode;
        return Sa(b) && 1 == b.nodeType ? b : null
    }
      , fi = function(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
      , Th = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
      , gi = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? G(a.contentDocument) : null)
        } catch (b) {}
        return null
    }
      , hi = function(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a; ) {
            if (b(a))
                return a;
            a = a.parentNode;
            c++
        }
        return null
    }
      , Sh = function(a) {
        this.g = a || y.document || document
    };
    l = Sh.prototype;
    l.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    }
    ;
    l.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    l.append = function(a, b) {
        bi(Th(a), a, arguments, 1)
    }
    ;
    l.canHaveChildren = function(a) {
        if (1 != a.nodeType)
            return !1;
        switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
        }
        return !0
    }
    ;
    l.contains = fi;
    var ji = function() {
        return tb && wb ? wb.mobile : !ii() && (B("iPod") || B("iPhone") || B("Android") || B("IEMobile"))
    }
      , ii = function() {
        return tb && wb ? !wb.mobile && (B("iPad") || B("Android") || B("Silk")) : B("iPad") || B("Android") && !B("Mobile") || B("Silk")
    };
    var ki = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$")
      , li = function(a) {
        var b = a.match(ki);
        a = b[1];
        var c = b[3];
        b = b[4];
        var d = "";
        a && (d += a + ":");
        c && (d = d + "//" + c,
        b && (d += ":" + b));
        return d
    }
      , mi = function(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("=")
                  , e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else
                    f = a[c];
                b(f, e ? Jh(e) : "")
            }
        }
    }
      , ni = /#|$/
      , oi = function(a, b) {
        var c = a.search(ni);
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
        return Jh(a.slice(d, -1 !== e ? e : 0))
    };
    var pi = function(a) {
        try {
            return !!a && null != a.location.href && ec(a, "foo")
        } catch (b) {
            return !1
        }
    }
      , ri = function(a) {
        var b = void 0 === b ? !1 : b;
        var c = void 0 === c ? y : c;
        for (var d = 0; c && 40 > d++ && (!b && !pi(c) || !a(c)); )
            c = qi(c)
    }
      , si = function() {
        var a = window;
        ri(function(b) {
            a = b;
            return !1
        });
        return a
    }
      , qi = function(a) {
        try {
            var b = a.parent;
            if (b && b != a)
                return b
        } catch (c) {}
        return null
    }
      , ti = function() {
        var a = window;
        return pi(a.top) ? a.top : null
    }
      , ui = function() {
        if (!globalThis.crypto)
            return Math.random();
        try {
            var a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }
      , vi = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
      , wi = function(a) {
        var b = a.length;
        if (0 == b)
            return 0;
        for (var c = 305419896, d = 0; d < b; d++)
            c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    function xi(a) {
        var b, c;
        return null != (c = null == (b = /https?:\/\/[^\/]+/.exec(a)) ? void 0 : b[0]) ? c : ""
    }
    var yi = function() {
        var a = y;
        try {
            for (var b = null; b != a; b = a,
            a = a.parent)
                switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return !0;
                case "http:":
                    return !1
                }
        } catch (c) {}
        return !0
    }
      , zi = function(a, b) {
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    }
      , Ai = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            if (zi(a, b))
                return a;
            if (!(a = qi(a)))
                break
        }
        return null
    }
      , Bi = Ng(function() {
        return ji() ? 2 : ii() ? 1 : 0
    })
      , Ci = function() {
        var a = window;
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
      , Di = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    }
      , Ei = function(a) {
        for (var b = a; a && a != a.parent; )
            a = a.parent,
            pi(a) && (b = a);
        return b
    };
    var Fi = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)")
      , Ji = function(a) {
        a = a || Gi();
        for (var b = new Hi(y.location.href,!1), c = null, d = a.length - 1, e = d; 0 <= e; --e) {
            var f = a[e];
            !c && Fi.test(f.url) && (c = f);
            if (f.url && !f.Id) {
                b = f;
                break
            }
        }
        e = null;
        f = a.length && a[d].url;
        0 != b.depth && f && (e = a[d]);
        return new Ii(b,e,c)
    }
      , Gi = function() {
        var a = y
          , b = []
          , c = null;
        do {
            var d = a;
            if (pi(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else
                e = c,
                c = null;
            b.push(new Hi(e || ""));
            try {
                a = d.parent
            } catch (f) {
                a = null
            }
        } while (a && d != a);
        d = 0;
        for (a = b.length - 1; d <= a; ++d)
            b[d].depth = a - d;
        d = y;
        if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
            for (a = 1; a < b.length; ++a)
                e = b[a],
                e.url || (e.url = d.location.ancestorOrigins[a - 1] || "",
                e.Id = !0);
        return b
    }
      , Ii = function(a, b, c) {
        this.g = a;
        this.j = b;
        this.l = c
    }
      , Hi = function(a, b) {
        this.url = a;
        this.Id = !!b;
        this.depth = null
    };
    var Ki = null
      , Li = function() {
        if (null === Ki) {
            Ki = "";
            try {
                var a = "";
                try {
                    a = y.top.location.hash
                } catch (c) {
                    a = y.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Ki = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Ki
    };
    function Mi() {
        var a = void 0 === a ? y : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }
    function Ni() {
        var a = void 0 === a ? y : a;
        return (a = a.performance) && a.now ? a.now() : null
    }
    function Oi(a, b) {
        b = void 0 === b ? y : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    }
    function Pi() {
        var a = void 0 === a ? y : a;
        var b = Math.min(Oi("domLoading", a) || Infinity, Oi("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(Oi("responseEnd", a), Oi("navigationStart", a)) : b
    }
    ;var Qi = function(a, b, c, d) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.taskId = this.slotId = void 0;
        this.uniqueId = Math.random()
    };
    var Ri = y.performance
      , Si = !!(Ri && Ri.mark && Ri.measure && Ri.clearMarks)
      , Ti = Ng(function() {
        var a;
        if (a = Si)
            a = Li(),
            a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    })
      , Ui = function(a, b) {
        this.events = [];
        this.g = b || y;
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [],
        this.events = b.google_js_reporting_queue,
        c = b.google_measure_js_timing);
        this.l = Ti() || (null != c ? c : Math.random() < a)
    };
    Ui.prototype.B = function() {
        this.l = !1;
        this.events != this.g.google_js_reporting_queue && (Ti() && Ib(this.events, Vi),
        this.events.length = 0)
    }
    ;
    Ui.prototype.C = function(a) {
        !this.l || 2048 < this.events.length || this.events.push(a)
    }
    ;
    var Vi = function(a) {
        a && Ri && Ti() && (Ri.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
        Ri.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    Ui.prototype.start = function(a, b) {
        if (!this.l)
            return null;
        a = new Qi(a,b,Ni() || Mi());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Ri && Ti() && Ri.mark(b);
        return a
    }
    ;
    Ui.prototype.end = function(a) {
        if (this.l && "number" === typeof a.value) {
            a.duration = (Ni() || Mi()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            Ri && Ti() && Ri.mark(b);
            this.C(a)
        }
    }
    ;
    var Wi = function() {
        this.l = "&";
        this.j = {};
        this.A = 0;
        this.g = []
    }
      , Xi = function(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }
      , Zi = function(a, b, c, d, e) {
        var f = [];
        vi(a, function(g, h) {
            (g = Yi(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }
      , Yi = function(a, b, c, d, e) {
        if (null == a)
            return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0,
            d < c.length) {
                for (var f = [], g = 0; g < a.length; g++)
                    f.push(Yi(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a)
            return e = e || 0,
            2 > e ? encodeURIComponent(Zi(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
      , $i = function(a, b, c) {
        a.g.push(b);
        a.j[b] = c
    }
      , aj = function(a, b, c, d) {
        a.g.push(b);
        a.j[b] = Xi(c, d)
    }
      , cj = function(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = bj(a) - c.length;
        if (0 > d)
            return "";
        a.g.sort(function(m, p) {
            return m - p
        });
        c = null;
        for (var e = "", f = 0; f < a.g.length; f++)
            for (var g = a.g[f], h = a.j[g], k = 0; k < h.length; k++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var n = Zi(h[k], a.l, ",$");
                if (n) {
                    n = e + n;
                    if (d >= n.length) {
                        d -= n.length;
                        b += n;
                        e = a.l;
                        break
                    }
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }
      , bj = function(a) {
        var b = 1, c;
        for (c in a.j)
            b = c.length > b ? c.length : b;
        return 3997 - b - a.l.length - 1
    };
    var fj = function() {
        var a = dj;
        this.o = ej;
        this.B = "jserror";
        this.A = !0;
        this.g = void 0 === a ? null : a;
        this.j = null;
        this.l = !1;
        this.C = this.Wa
    };
    l = fj.prototype;
    l.hd = function(a) {
        this.j = a
    }
    ;
    l.be = function(a) {
        this.B = a
    }
    ;
    l.ce = function(a) {
        this.A = a
    }
    ;
    l.de = function(a) {
        this.l = a
    }
    ;
    l.zb = function(a, b, c) {
        try {
            if (this.g && this.g.l) {
                var d = this.g.start(a.toString(), 3);
                var e = b();
                this.g.end(d)
            } else
                e = b()
        } catch (h) {
            b = this.A;
            try {
                Vi(d),
                b = this.C(a, new Kg(h,{
                    message: gj(h)
                }), void 0, c)
            } catch (k) {
                this.Wa(217, k)
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h)
            } else
                throw h;
        }
        return e
    }
    ;
    l.Ud = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = Ka.apply(0, arguments);
            return e.zb(a, function() {
                return b.apply(c, f)
            }, d)
        }
    }
    ;
    l.Wa = function(a, b, c, d, e) {
        e = e || this.B;
        try {
            var f = new Wi;
            aj(f, 1, "context", a);
            Lg(b) || (b = new Kg(b,{
                message: gj(b)
            }));
            b.msg && aj(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.j)
                try {
                    this.j(g)
                } catch (k) {}
            if (d)
                try {
                    d(g)
                } catch (k) {}
            $i(f, 3, [g]);
            var h = Ji();
            h.j && aj(f, 4, "top", h.j.url || "");
            $i(f, 5, [{
                url: h.g.url || ""
            }, {
                url: h.g.url ? li(h.g.url) : ""
            }]);
            hj(this.o, e, f, this.l, c)
        } catch (k) {
            try {
                hj(this.o, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: gj(k),
                    url: h && h.g.url
                }, this.l, c)
            } catch (n) {}
        }
        return this.A
    }
    ;
    var gj = function(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack)
            a: {
                a = a.stack;
                var c = b;
                try {
                    -1 == a.indexOf(c) && (a = c + "\n" + a);
                    for (var d; a != d; )
                        d = a,
                        a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                    b = a.replace(RegExp("\n *", "g"), "\n");
                    break a
                } catch (e) {
                    b = c;
                    break a
                }
                b = void 0
            }
        return b
    };
    var jj = function(a, b, c, d, e) {
        ij(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e)
    };
    function ij(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = Di("IMG", a.document);
        if (c || d) {
            var g = function(h) {
                c && c(h);
                d && Vb(a.google_image_requests, f);
                Tg(f, "load", g);
                Tg(f, "error", g)
            };
            Sg(f, "load", g);
            Sg(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var lj = function(a, b) {
        var c = void 0 === c ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        vi(a, function(e, f) {
            if (e || 0 === e)
                d += "&" + f + "=" + encodeURIComponent("" + e)
        });
        kj(d, c)
    }
      , kj = function(a, b) {
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
        c.fetch(a, b)) : jj(c, a, void 0, b, d)
    };
    function mj(a, b) {
        try {
            var c = function(d) {
                var e = {};
                return [(e[d.ff] = d.Ke,
                e)]
            };
            return JSON.stringify([a.filter(function(d) {
                return d.Kd
            }).map(c), b.toJSON(), a.filter(function(d) {
                return !d.Kd
            }).map(c)])
        } catch (d) {
            return nj(d, b),
            ""
        }
    }
    function nj(a, b) {
        try {
            lj({
                m: gj(a instanceof Error ? a : Error(String(a))),
                b: Qf(b, 1) || null,
                v: D(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }
    var oj = function(a, b) {
        var c = new Jg;
        a = qf(c, 1, be(a), 0);
        b = qf(a, 2, qe(b), "");
        a = b.H;
        c = yd(a);
        this.l = c & 2 ? b : xe(b.constructor, $e(a, c, !0))
    };
    var pj = function(a) {
        this.H = C(a)
    };
    w(pj, E);
    var qj = [1, 2, 3];
    var rj = function(a) {
        this.H = C(a)
    };
    w(rj, E);
    var sj = [2, 4];
    var tj = function(a) {
        this.H = C(a)
    };
    w(tj, E);
    tj.ba = [4];
    var uj = function(a) {
        this.H = C(a)
    };
    w(uj, E);
    var vj = function(a) {
        this.H = C(a)
    };
    w(vj, E);
    var wj = function(a, b) {
        return qf(a, 1, be(b), 0)
    }
      , xj = function(a, b) {
        return qf(a, 2, be(b), 0)
    };
    var yj = function(a) {
        this.H = C(a)
    };
    w(yj, E);
    var zj = [1, 2];
    var Aj = function(a) {
        this.H = C(a)
    };
    w(Aj, E);
    var Bj = function(a, b) {
        return Df(a, 1, b)
    }
      , Cj = function(a, b) {
        return Ff(a, 2, b)
    }
      , Dj = function(a, b) {
        return pf(a, 4, b, de)
    }
      , Ej = function(a, b) {
        return Ff(a, 5, b)
    }
      , Fj = function(a, b) {
        return qf(a, 6, be(b), 0)
    };
    Aj.ba = [2, 4, 5];
    var Gj = function(a) {
        this.H = C(a)
    };
    w(Gj, E);
    Gj.ba = [5];
    var Hj = [1, 2, 3, 4, 6];
    var Ij = function(a) {
        this.H = C(a)
    };
    w(Ij, E);
    Ij.ba = [2, 3];
    var Jj = function(a) {
        this.H = C(a)
    };
    w(Jj, E);
    var Kj = [2, 3, 4];
    var Lj = function(a) {
        this.H = C(a)
    };
    w(Lj, E);
    Lj.ba = [2, 8];
    var Mj = [3, 4, 5]
      , Nj = [6, 7];
    var Oj = function(a) {
        this.H = C(a)
    };
    w(Oj, E);
    var Pj = [4, 5];
    var Qj = function(a) {
        this.H = C(a)
    };
    w(Qj, E);
    Qj.prototype.getTagSessionCorrelator = function() {
        return Of(this, 2)
    }
    ;
    var Sj = function(a) {
        var b = new Qj;
        return Ef(b, 4, Rj, a)
    }
      , Rj = [4, 5, 7, 8, 9];
    var Tj = function(a) {
        this.H = C(a)
    };
    w(Tj, E);
    var Uj = function(a) {
        this.H = C(a)
    };
    w(Uj, E);
    var Vj = function(a) {
        this.H = C(a)
    };
    w(Vj, E);
    Vj.prototype.getEscapedQemQueryId = function() {
        return D(this, 4)
    }
    ;
    Vj.ba = [2, 23, 29];
    var Wj = function(a) {
        this.H = C(a)
    };
    w(Wj, E);
    var Xj = function(a) {
        this.H = C(a)
    };
    w(Xj, E);
    Xj.prototype.getEscapedQemQueryId = function() {
        return D(this, 2)
    }
    ;
    Xj.ba = [28, 30];
    var Zj = function(a) {
        this.Xg = new Yj(a)
    }
      , Yj = function(a) {
        this.bh = new ak(a)
    }
      , ak = function(a) {
        this.Uf = new bk(a)
    }
      , bk = function(a) {
        this.Gd = function(b) {
            var c = b.ee;
            var d = b.rd;
            b = b.status;
            var e = new tj;
            e = qf(e, 1, qe("SOomke"), "");
            var f = new pj;
            d = tf(f, 1, qj, qe(d));
            d = Hf(e, 4, pj, d);
            e = new pj;
            b = tf(e, 1, qj, qe(b));
            b = Hf(d, 4, pj, b);
            d = new rj;
            c = tf(d, 2, sj, ie(Math.round(c)));
            c = Df(b, 3, c);
            a(c)
        }
    }
      , ck = function() {
        oj.apply(this, arguments);
        var a = this;
        this.Bg = new Zj(function(b) {
            return a.I(b)
        }
        )
    };
    w(ck, oj);
    var dk = function() {
        ck.apply(this, arguments)
    };
    w(dk, ck);
    dk.prototype.gd = function() {
        this.B.apply(this, ia(Ka.apply(0, arguments).map(function(a) {
            return {
                Kd: !0,
                ff: 4,
                Ke: a.toJSON()
            }
        })))
    }
    ;
    dk.prototype.I = function() {
        this.B.apply(this, ia(Ka.apply(0, arguments).map(function(a) {
            return {
                Kd: !1,
                ff: 1,
                Ke: a.toJSON()
            }
        })))
    }
    ;
    var ek = function(a, b) {
        if (globalThis.fetch)
            globalThis.fetch(a, {
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
    var fk = function(a, b, c, d, e, f, g, h) {
        dk.call(this, a, b);
        this.D = c;
        this.L = d;
        this.F = e;
        this.C = f;
        this.J = g;
        this.A = h;
        this.g = [];
        this.j = null;
        this.o = !1
    };
    w(fk, dk);
    var gk = function(a) {
        null !== a.j && (clearTimeout(a.j),
        a.j = null);
        if (a.g.length) {
            var b = mj(a.g, a.l);
            a.L(a.D + "?e=1", b);
            a.g = []
        }
    };
    fk.prototype.B = function() {
        var a = Ka.apply(0, arguments)
          , b = this;
        try {
            this.J && 65536 <= mj(this.g.concat(a), this.l).length && gk(this),
            this.A && !this.o && (this.o = !0,
            this.A.g(function() {
                gk(b)
            })),
            this.g.push.apply(this.g, ia(a)),
            this.g.length >= this.C && gk(this),
            this.g.length && null === this.j && (this.j = setTimeout(function() {
                gk(b)
            }, this.F))
        } catch (c) {
            nj(c, this.l)
        }
    }
    ;
    var hk = function(a, b, c, d, e, f) {
        fk.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", ek, void 0 === c ? 1E3 : c, void 0 === d ? 100 : d, (void 0 === e ? !1 : e) && !!globalThis.fetch, f)
    };
    w(hk, fk);
    var H = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    H.prototype.getWidth = function() {
        return this.right - this.left
    }
    ;
    H.prototype.getHeight = function() {
        return this.bottom - this.top
    }
    ;
    var ik = function(a) {
        return new H(a.top,a.right,a.bottom,a.left)
    };
    l = H.prototype;
    l.contains = function(a) {
        return this && a ? a instanceof H ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    }
    ;
    l.expand = function(a, b, c, d) {
        Sa(a) ? (this.top -= a.top,
        this.right += a.right,
        this.bottom += a.bottom,
        this.left -= a.left) : (this.top -= a,
        this.right += Number(b),
        this.bottom += Number(c),
        this.left -= Number(d));
        return this
    }
    ;
    l.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    l.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    l.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    var jk = function(a, b, c) {
        b instanceof Dh ? (a.left += b.x,
        a.right += b.x,
        a.top += b.y,
        a.bottom += b.y) : (a.left += b,
        a.right += b,
        "number" === typeof c && (a.top += c,
        a.bottom += c));
        return a
    };
    H.prototype.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    }
    ;
    var kk = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
      , lk = function(a) {
        return new H(a.top,a.left + a.width,a.top + a.height,a.left)
    };
    l = kk.prototype;
    l.contains = function(a) {
        return a instanceof Dh ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    }
    ;
    l.getSize = function() {
        return new F(this.width,this.height)
    }
    ;
    l.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    l.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    l.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    l.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    }
    ;
    function mk(a) {
        a = void 0 === a ? y : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b)
            try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    }
    ;var nk = function() {
        this.S = {}
    }
      , ok = function() {
        var a = mk(window);
        if (a) {
            if (a) {
                var b = a.pageViewId;
                a = a.clientId;
                "string" === typeof a && (b += a.replace(/\D/g, "").substr(0, 6))
            } else
                b = null;
            return +b
        }
        b = Ei(window);
        a = b.google_global_correlator;
        a || (b.google_global_correlator = a = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
        return a
    }
      , qk = function(a, b) {
        var c = pk[7] || "google_ps_7";
        a = a.S;
        var d = a[c];
        return void 0 === d ? (a[c] = b(),
        a[c]) : d
    }
      , rk = function(a) {
        var b = ok();
        return qk(a, function() {
            return b
        })
    }
      , tk = function() {
        if (sk)
            var a = sk;
        else {
            a = ((a = void 0 === a ? mk() : a) ? pi(a.master) ? a.master : null : null) || window;
            var b = a.google_persistent_state_async;
            a = null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? sk = b : a.google_persistent_state_async = sk = new nk
        }
        return rk(a)
    }
      , sk = null
      , uk = {}
      , pk = (uk[8] = "google_prev_ad_formats_by_region",
    uk[9] = "google_prev_ad_slotnames_by_region",
    uk);
    var vk = fa(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"])
      , wk = function() {
        var a = void 0 === a ? "jserror" : a;
        var b = void 0 === b ? .01 : b;
        var c = void 0 === c ? Bh(vk) : c;
        this.j = a;
        this.l = !1;
        this.g = null;
        this.A = !1;
        this.C = Math.random();
        this.o = b;
        this.B = this.Wa;
        this.J = c
    };
    l = wk.prototype;
    l.be = function(a) {
        this.j = a
    }
    ;
    l.hd = function(a) {
        this.g = a
    }
    ;
    l.ce = function(a) {
        this.l = a
    }
    ;
    l.de = function(a) {
        this.A = a
    }
    ;
    l.Wa = function(a, b, c, d, e) {
        c = void 0 === c ? this.o : c;
        e = void 0 === e ? this.j : e;
        if ((this.A ? this.C : Math.random()) > c)
            return this.l;
        Lg(b) || (b = new Kg(b,{
            context: a,
            id: e
        }));
        if (d || this.g)
            b.meta = {},
            this.g && this.g(b.meta),
            d && d(b.meta);
        y.google_js_errors = y.google_js_errors || [];
        y.google_js_errors.push(b);
        y.error_rep_loaded || (b = y.document,
        a = Di("SCRIPT", b),
        Gh(a, this.J),
        (b = b.getElementsByTagName("script")[0]) && b.parentNode && b.parentNode.insertBefore(a, b),
        y.error_rep_loaded = !0);
        return this.l
    }
    ;
    l.zb = function(a, b, c) {
        try {
            return b()
        } catch (d) {
            if (!this.B(a, d, this.o, c, this.j))
                throw d;
        }
    }
    ;
    l.Ud = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = Ka.apply(0, arguments);
            return e.zb(a, function() {
                return b.apply(c, f)
            }, d)
        }
    }
    ;
    var xk = function(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }
      , yk = function(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    var zk = function(a) {
        a = a._google_rum_ns_ = a._google_rum_ns_ || {};
        return a.pq = a.pq || []
    };
    function Ak(a) {
        a = null === a ? "null" : void 0 === a ? "undefined" : a;
        var b = kh();
        a = b ? b.createHTML(a) : a;
        return new zh(a,yh)
    }
    ;function Bk(a, b, c) {
        vi(b, function(d, e) {
            var f = c && c[e];
            !d && 0 !== d || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)),
            c && (c[e] = !0))
        });
        return a
    }
    var Hk = function(a, b, c, d, e, f, g, h) {
        f = void 0 === f ? Infinity : f;
        g = void 0 === g ? !1 : g;
        Ui.call(this, a, h);
        var k = this;
        this.U = b;
        this.domain = c;
        this.path = d;
        this.Z = e;
        this.J = 0;
        this.o = {};
        this.F = {};
        this.W = [];
        this.report = {};
        this.j = 0;
        this.D = [];
        this.I = f;
        a = this.g.navigator;
        this.T = !("csi.gstatic.com" !== this.domain || !a || !a.sendBeacon);
        this.g.performance && this.g.performance.now || Ck(this, "dat", 1);
        a && a.deviceMemory && Ck(this, "dmc", a.deviceMemory);
        this.g === this.g.top && Ck(this, "top", 1);
        this.O = !g;
        this.K = function() {
            k.g.setTimeout(function() {
                Dk(k)
            }, 1100)
        }
        ;
        this.M = function() {
            Ck(k, "uet", 2);
            for (var m = u(k.W), p = m.next(); !p.done; p = m.next()) {
                p = p.value;
                try {
                    p()
                } catch (t) {}
            }
            m = k.g;
            var q = void 0 === q ? {} : q;
            "function" === typeof window.CustomEvent ? p = new CustomEvent("rum_blp",q) : (p = document.createEvent("CustomEvent"),
            p.initCustomEvent("rum_blp", !!q.bubbles, !!q.cancelable, q.detail));
            m.dispatchEvent(p);
            Dk(k);
            null != k.o.uet && (k.A -= 3 + k.o.uet.length + 2,
            delete k.o.uet)
        }
        ;
        this.aa = Pg(function() {
            Dk(k)
        });
        this.fa = function() {
            var m = k.g.document;
            (null != m.hidden ? m.hidden : null != m.mozHidden ? m.mozHidden : null != m.webkitHidden && m.webkitHidden) && k.aa()
        }
        ;
        this.L = this.g.setTimeout(function() {
            Dk(k)
        }, 5E3);
        this.A = b.length + c.length + d.length + e.length + 3;
        Ib(this.events, function(m) {
            Ek(k, m)
        });
        b = zk(this.g);
        var n = function() {
            var m = Ka.apply(0, arguments)[0]
              , p = m[0];
            m = m[1];
            var q = p.length + m.length + 2;
            8E3 < k.A + k.j + q && Dk(k);
            k.D.push([p, m]);
            k.j += q;
            Fk(k);
            return 0
        };
        Ib(b, function(m) {
            return n(m)
        });
        b.length = 0;
        b.push = n;
        Ck(this, "puid", (this.J + 1).toString(36) + "~" + Date.now().toString(36));
        Gk(this)
    };
    w(Hk, Ui);
    var Gk = function(a) {
        "complete" === a.g.document.readyState ? a.g.setTimeout(function() {
            Dk(a)
        }, 0) : Sg(a.g, "load", a.K);
        var b = yk(a.g.document);
        "undefined" !== typeof b && Sg(a.g, b, a.fa);
        Sg(a.g, "pagehide", a.M)
    }
      , Ck = function(a, b, c) {
        c = String(c);
        a.A = null != a.o[b] ? a.A + (c.length - a.o[b].length) : a.A + (b.length + c.length + 2);
        a.o[b] = c
    }
      , Kk = function(a, b, c, d, e) {
        e = void 0 === e ? "" : e;
        var f = Ik(a, b, c, d, e);
        8E3 < a.A + a.j + f && (Dk(a),
        f = b.length + c.length + 2);
        Jk(a, b, c, d, e);
        a.j += f;
        Fk(a)
    }
      , Ik = function(a, b, c, d, e) {
        return null == a.report[b] ? b.length + c.length + 2 : d ? c.length + (void 0 === e ? "" : e).length : c.length - a.report[b].length
    }
      , Jk = function(a, b, c, d, e) {
        a.report[b] = d && null != a.report[b] ? a.report[b] + ("" + (void 0 === e ? "" : e) + c) : c
    }
      , Fk = function(a) {
        6E3 <= a.A + a.j && Dk(a)
    }
      , Dk = function(a) {
        if (a.l && a.O) {
            try {
                a.j && (a.sendBeacon(a.report),
                a.J === a.I && a.B())
            } catch (b) {
                (new wk).Wa(358, b)
            }
            a.report = {};
            a.j = 0;
            a.events.length = 0;
            a.g.clearTimeout(a.L);
            a.L = 0
        }
    }
      , Lk = function(a, b) {
        var c = a.U + "//" + a.domain + a.path + a.Z
          , d = {};
        c = Bk(c, a.o, d);
        c = Bk(c, b, d);
        b = a.g;
        b.google_timing_params && (c = Bk(c, b.google_timing_params, d),
        b.google_timing_params = void 0);
        Ib(a.D, function(e) {
            var f = u(e);
            e = f.next().value;
            f = f.next().value;
            var g = {};
            c = Bk(c, (g[e] = f,
            g))
        });
        a.D.length = 0;
        return c
    };
    Hk.prototype.sendBeacon = function(a) {
        this.J++;
        a = Lk(this, a);
        var b = !1;
        try {
            b = !!(this.T && this.g.navigator && this.g.navigator.sendBeacon(a, null))
        } catch (c) {
            this.T = !1
        }
        b || jj(this.g, a);
        Ck(this, "puid", (this.J + 1).toString(36) + "~" + Date.now().toString(36))
    }
    ;
    var Ek = function(a, b) {
        var c = "met." + b.type
          , d = "number" === typeof b.value ? Math.round(b.value).toString(36) : b.value
          , e = Math.round(b.duration);
        b = "" + b.label + (null != b.slotId ? "_" + b.slotId : "") + ("." + d) + (0 < e ? "_" + e.toString(36) : "") + (null != b.taskId ? "__" + Math.round(b.taskId).toString(36) : "");
        Kk(a, c, b, !0, "~")
    };
    Hk.prototype.C = function(a) {
        this.l && this.J < this.I && (Ui.prototype.C.call(this, a),
        Ek(this, a))
    }
    ;
    Hk.prototype.B = function() {
        Ui.prototype.B.call(this);
        this.g.clearTimeout(this.L);
        this.j = this.L = 0;
        this.report = {};
        fh(this.F);
        fh(this.o);
        Tg(this.g, "load", this.K);
        Tg(this.g, "pagehide", this.M)
    }
    ;
    var I = function(a) {
        var b = "wb";
        if (a.wb && a.hasOwnProperty(b))
            return a.wb;
        b = new a;
        return a.wb = b
    };
    var J = function() {
        this.g = new Hk(1,"https:","csi.gstatic.com","/csi?v=2&s=","ima",void 0,!0);
        var a = tk();
        null != a && Ck(this.g, "c", a);
        a = parseInt(this.g.o.c, 10) / 2;
        null != a && Ck(this.g, "slotId", a)
    }
      , K = function(a, b, c) {
        if (null != c) {
            a = a.g;
            var d = b + "=" + c;
            a.F[d] || (Kk(a, b, c, !1),
            1E3 > d.length && (a.F[d] = !0))
        }
    }
      , Mk = function(a, b) {
        for (var c in b)
            b[c] = "object" === typeof b[c] ? encodeURIComponent(JSON.stringify(b[c])) : encodeURIComponent(String(b[c]));
        a = a.g;
        var d = !1;
        c = 0;
        for (var e = u(Object.keys(b)), f = e.next(); !f.done; f = e.next())
            f = f.value,
            null != a.report[f] && (d = !0),
            c += Ik(a, f, b[f], !1);
        (8E3 < a.A + a.j + c || d) && Dk(a);
        d = u(Object.keys(b));
        for (e = d.next(); !e.done; e = d.next())
            e = e.value,
            Jk(a, e, b[e], !1);
        a.j += c;
        Fk(a)
    }
      , L = function(a) {
        var b = J.getInstance().g;
        b.l && b.C(new Qi(a,4,Mi() - 0,0))
    };
    J.prototype.recordClick = function(a, b, c, d) {
        for (var e = !1, f = "notag"; void 0 != d && d != document.documentElement; ) {
            var g = void 0
              , h = void 0;
            if ((null == (g = d) ? 0 : g.getAttribute("data-ck-navigates")) || (null == (h = d) ? 0 : h.getAttribute("data-ck-tag"))) {
                g = f = void 0;
                e = null != (g = null == (f = d) ? void 0 : f.getAttribute("data-ck-navigates")) ? g : !1;
                h = g = void 0;
                f = null != (h = null == (g = d) ? void 0 : g.getAttribute("data-ck-tag")) ? h : "notag";
                break
            }
            g = void 0;
            d = null != (g = d.parentElement) ? g : void 0
        }
        d = this.g;
        d.l && d.C(new Qi(a + "_" + b + "x" + c + "|" + e + "|" + f,4,Mi(),0))
    }
    ;
    J.getInstance = function() {
        return I(J)
    }
    ;
    var Nk = function(a) {
        return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
    }
      , Ok = function(a) {
        try {
            return y.JSON.parse(a)
        } catch (b) {}
        a = String(a);
        if (Nk(a))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
      , Qk = function() {
        this.g = Pk
    }
      , Rk = function(a, b, c) {
        if (null == b)
            c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++)
                        c.push(e),
                        e = d[f],
                        Rk(a, a.g ? a.g.call(d, String(f), e) : e, c),
                        e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean)
                    b = b.valueOf();
                else {
                    c.push("{");
                    f = "";
                    for (d in b)
                        Object.prototype.hasOwnProperty.call(b, d) && (e = b[d],
                        "function" != typeof e && (c.push(f),
                        Sk(d, c),
                        c.push(":"),
                        Rk(a, a.g ? a.g.call(b, d, e) : e, c),
                        f = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
            case "string":
                Sk(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        }
    }
      , Tk = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\v": "\\u000b"
    }
      , Uk = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g
      , Sk = function(a, b) {
        b.push('"', a.replace(Uk, function(c) {
            var d = Tk[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1),
            Tk[c] = d);
            return d
        }), '"')
    };
    var Vk = function() {
        this.l = null;
        this.g = "missing-id";
        this.j = !1
    }
      , Xk = function(a) {
        var b = null;
        try {
            b = document.getElementsByClassName("lima-exp-data")
        } catch (c) {
            return Wk("missing-element", a.g),
            null
        }
        if (1 < b.length)
            return Wk("multiple-elements", a.g),
            null;
        b = b[0];
        return b ? b.innerHTML : (Wk("missing-element", a.g),
        null)
    }
      , Zk = function() {
        var a = Yk
          , b = Xk(a);
        if (null !== b)
            if (Nk(b)) {
                var c = JSON.parse(b);
                b = c.experimentIds;
                var d = c.binaryIdentifier;
                c = c.adEventId;
                var e = "string" === typeof d;
                if ("string" == typeof c) {
                    var f = J.getInstance();
                    null != c && Ck(f.g, "qqid", c)
                }
                e && (a.g = d);
                "string" !== typeof b ? Wk("missing-flags", a.g) : (e || Wk("missing-binary-id", a.g),
                a.l = b)
            } else
                Wk("invalid-json", a.g)
    };
    Vk.prototype.reset = function() {
        this.l = null;
        this.g = "missing-id"
    }
    ;
    var $k = function(a) {
        this.g = a || {
            cookie: ""
        }
    }
      , al = function(a) {
        if (!y.navigator.cookieEnabled)
            return !1;
        if (!a.isEmpty())
            return !0;
        a.set("TESTCOOKIESENABLED", "1", {
            Rc: 60
        });
        if ("1" !== a.get("TESTCOOKIESENABLED"))
            return !1;
        a.remove("TESTCOOKIESENABLED");
        return !0
    };
    l = $k.prototype;
    l.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.kj;
            d = c.Xe || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Rc
        }
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    }
    ;
    l.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = ob(d[e]);
            if (0 == f.lastIndexOf(c, 0))
                return f.slice(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    l.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {
            Rc: 0,
            path: b,
            domain: c
        });
        return d
    }
    ;
    l.Ic = function() {
        return bl(this).keys
    }
    ;
    l.Gb = function() {
        return bl(this).values
    }
    ;
    l.isEmpty = function() {
        return !this.g.cookie
    }
    ;
    l.clear = function() {
        for (var a = bl(this).keys, b = a.length - 1; 0 <= b; b--)
            this.remove(a[b])
    }
    ;
    var bl = function(a) {
        a = (a.g.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
            e = ob(a[f]),
            d = e.indexOf("="),
            -1 == d ? (b.push(""),
            c.push(e)) : (b.push(e.substring(0, d)),
            c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };
    function cl(a) {
        return "null" !== a.origin
    }
    function dl(a, b, c) {
        return Lf(b, 5) ? el(a, c) : null
    }
    var fl;
    function gl(a) {
        return fl ? fl : cl(a) ? fl = al(new $k(a.document)) : fl = !1
    }
    function el(a, b) {
        b = cl(b) ? b.document.cookie : null;
        return null === b ? null : (new $k({
            cookie: b
        })).get(a) || ""
    }
    ;function hl(a, b) {
        var c = Cf(a, Lj, 2);
        if (!c.length)
            return il(a, b);
        a = Qf(a, 1);
        if (1 === a) {
            var d = hl(c[0], b);
            return d.success ? {
                success: !0,
                value: !d.value
            } : d
        }
        c = Lb(c, function(h) {
            return hl(h, b)
        });
        switch (a) {
        case 2:
            var e;
            return null != (e = null != (d = c.find(function(h) {
                return h.success && !h.value
            })) ? d : c.find(function(h) {
                return !h.success
            })) ? e : {
                success: !0,
                value: !0
            };
        case 3:
            var f, g;
            return null != (g = null != (f = c.find(function(h) {
                return h.success && h.value
            })) ? f : c.find(function(h) {
                return !h.success
            })) ? g : {
                success: !0,
                value: !1
            };
        default:
            return {
                success: !1,
                Aa: 3
            }
        }
    }
    function il(a, b) {
        var c = vf(a, Mj);
        a: {
            switch (c) {
            case 3:
                var d = Tf(a, 3, Mj);
                break a;
            case 4:
                d = Tf(a, 4, Mj);
                break a;
            case 5:
                d = Tf(a, 5, Mj);
                break a
            }
            d = void 0
        }
        if (!d)
            return {
                success: !1,
                Aa: 2
            };
        b = (b = b[c]) && b[d];
        if (!b)
            return {
                success: !1,
                Lb: d,
                jc: c,
                Aa: 1
            };
        try {
            var e = b.apply;
            var f = Sf(a, 8);
            var g = e.call(b, null, ia(f))
        } catch (h) {
            return {
                success: !1,
                Lb: d,
                jc: c,
                Aa: 2
            }
        }
        e = Qf(a, 1);
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
            a = D(a, uf(a, Nj, 7));
        else
            a: {
                switch (c) {
                case 4:
                    a = Pf(a, uf(a, Nj, 6));
                    break a;
                case 5:
                    a = D(a, uf(a, Nj, 7));
                    break a
                }
                a = void 0
            }
        if (null == a)
            return {
                success: !1,
                Lb: d,
                jc: c,
                Aa: 3
            };
        if (6 === e)
            return {
                success: !0,
                value: g === a
            };
        if (9 === e)
            return {
                success: !0,
                value: null != g && 0 === sb(String(g), a)
            };
        if (null == g)
            return {
                success: !1,
                Lb: d,
                jc: c,
                Aa: 4
            };
        switch (e) {
        case 7:
            c = g < a;
            break;
        case 8:
            c = g > a;
            break;
        case 12:
            c = "string" === typeof a && "string" === typeof g && (new RegExp(a)).test(g);
            break;
        case 10:
            c = null != g && -1 === sb(String(g), a);
            break;
        case 11:
            c = null != g && 1 === sb(String(g), a);
            break;
        default:
            return {
                success: !1,
                Aa: 3
            }
        }
        return {
            success: !0,
            value: c
        }
    }
    function jl(a, b) {
        return a ? b ? hl(a, b) : {
            success: !1,
            Aa: 1
        } : {
            success: !0,
            value: !0
        }
    }
    ;var wf = function(a) {
        this.H = C(a)
    };
    w(wf, E);
    wf.ba = [4];
    var kl = function(a) {
        this.H = C(a)
    };
    w(kl, E);
    kl.prototype.getValue = function() {
        return Af(this, wf, 2)
    }
    ;
    var ll = function(a) {
        this.H = C(a)
    };
    w(ll, E);
    var ml = Ig(ll);
    ll.ba = [5];
    var nl = [1, 2, 3, 6, 7, 8];
    var ol = function(a, b, c) {
        var d = void 0 === d ? new hk(6,"unknown",b) : d;
        this.A = a;
        this.o = c;
        this.j = d;
        this.g = [];
        this.l = 0 < a && ui() < 1 / a
    }
      , ql = function(a, b, c, d, e, f) {
        if (a.l) {
            var g = xj(wj(new vj, b), c);
            b = Fj(Cj(Bj(Ej(Dj(new Aj, d), e), g), a.g.slice()), f);
            b = Sj(b);
            a.j.gd(pl(a, b));
            if (1 === f || 3 === f || 4 === f && !a.g.some(function(h) {
                return Qf(h, 1) === Qf(g, 1) && Qf(h, 2) === c
            }))
                a.g.push(g),
                100 < a.g.length && a.g.shift()
        }
    }
      , rl = function(a, b, c, d) {
        if (a.l) {
            var e = new uj;
            b = Vf(e, 1, b);
            c = Vf(b, 2, c);
            d = Zf(c, 3, d);
            c = new Qj;
            d = Ef(c, 8, Rj, d);
            a.j.gd(pl(a, d))
        }
    }
      , sl = function(a, b, c, d, e) {
        if (a.l) {
            var f = new Oj;
            b = Df(f, 1, b);
            c = Zf(b, 2, c);
            d = Vf(c, 3, d);
            if (void 0 === e.jc)
                tf(d, 4, Pj, be(e.Aa));
            else
                switch (e.jc) {
                case 3:
                    c = new Jj;
                    c = tf(c, 2, Kj, be(e.Lb));
                    e = Zf(c, 1, e.Aa);
                    Ef(d, 5, Pj, e);
                    break;
                case 4:
                    c = new Jj;
                    c = tf(c, 3, Kj, be(e.Lb));
                    e = Zf(c, 1, e.Aa);
                    Ef(d, 5, Pj, e);
                    break;
                case 5:
                    c = new Jj,
                    c = tf(c, 4, Kj, be(e.Lb)),
                    e = Zf(c, 1, e.Aa),
                    Ef(d, 5, Pj, e)
                }
            e = new Qj;
            e = Ef(e, 9, Rj, d);
            a.j.gd(pl(a, e))
        }
    }
      , pl = function(a, b) {
        var c = Date.now();
        c = Number.isFinite(c) ? Math.round(c) : 0;
        b = Xf(b, 1, c);
        c = Ci();
        b = Xf(b, 2, c);
        return Xf(b, 6, a.A)
    };
    var tl = function() {
        var a = {};
        this.Fa = (a[3] = {},
        a[4] = {},
        a[5] = {},
        a)
    };
    var ul = /^true$/.test("false");
    function vl(a, b) {
        switch (b) {
        case 1:
            return Tf(a, 1, nl);
        case 2:
            return Tf(a, 2, nl);
        case 3:
            return Tf(a, 3, nl);
        case 6:
            return Tf(a, 6, nl);
        case 8:
            return Tf(a, 8, nl);
        default:
            return null
        }
    }
    function wl(a, b) {
        if (!a)
            return null;
        switch (b) {
        case 1:
            return Lf(a, 1);
        case 7:
            return D(a, 3);
        case 2:
            return Pf(a, 2);
        case 3:
            return D(a, 3);
        case 6:
            return Sf(a, 4);
        case 8:
            return Sf(a, 4);
        default:
            return null
        }
    }
    var xl = Ng(function() {
        if (!ul)
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
    function yl(a, b, c, d) {
        var e = d = void 0 === d ? 0 : d, f, g;
        I(zl).l[e] = null != (g = null == (f = I(zl).l[e]) ? void 0 : f.add(b)) ? g : (new Set).add(b);
        e = xl();
        if (null != e[b])
            return e[b];
        b = Al(d)[b];
        if (!b)
            return c;
        b = ml(JSON.stringify(b));
        b = Bl(b);
        a = wl(b, a);
        return null != a ? a : c
    }
    function Bl(a) {
        var b = I(tl).Fa;
        if (b && 8 !== vf(a, nl)) {
            var c = Sb(Cf(a, kl, 5), function(f) {
                f = jl(Af(f, Lj, 1), b);
                return f.success && f.value
            });
            if (c) {
                var d;
                return null != (d = c.getValue()) ? d : null
            }
        }
        var e;
        return null != (e = Af(a, wf, 4)) ? e : null
    }
    var zl = function() {
        this.j = {};
        this.A = [];
        this.l = {};
        this.g = new Map
    };
    function Cl(a, b, c) {
        return !!yl(1, a, void 0 === b ? !1 : b, c)
    }
    function Dl(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(yl(2, a, b, c));
        return isNaN(a) ? b : a
    }
    function El(a, b, c) {
        b = void 0 === b ? "" : b;
        a = yl(3, a, b, c);
        return "string" === typeof a ? a : b
    }
    function Fl(a, b, c) {
        b = void 0 === b ? [] : b;
        a = yl(6, a, b, c);
        return Array.isArray(a) ? a : b
    }
    function Gl(a, b, c) {
        b = void 0 === b ? [] : b;
        a = yl(8, a, b, c);
        return Array.isArray(a) ? a : b
    }
    function Al(a) {
        return I(zl).j[a] || (I(zl).j[a] = {})
    }
    function Hl(a, b) {
        var c = Al(b);
        vi(a, function(d, e) {
            if (c[e]) {
                d = ml(JSON.stringify(d));
                var f = uf(d, nl, 8);
                if (null != ce(cf(d, f))) {
                    var g = ml(JSON.stringify(c[e]));
                    f = xf(d);
                    g = Sf(zf(g, wf, 4), 4);
                    rf(f, 4, pe, g)
                }
                c[e] = d.toJSON()
            } else
                c[e] = d
        })
    }
    function Il(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = []
          , g = [];
        b = u(b);
        for (var h = b.next(); !h.done; h = b.next()) {
            h = h.value;
            for (var k = Al(h), n = u(a), m = n.next(); !m.done; m = n.next()) {
                m = m.value;
                var p = vf(m, nl)
                  , q = vl(m, p);
                if (q) {
                    var t = void 0
                      , v = void 0
                      , x = void 0;
                    var A = null != (t = null == (x = I(zl).g.get(h)) ? void 0 : null == (v = x.get(q)) ? void 0 : v.slice(0)) ? t : [];
                    a: {
                        t = q;
                        v = p;
                        x = new Gj;
                        switch (v) {
                        case 1:
                            tf(x, 1, Hj, be(t));
                            break;
                        case 2:
                            tf(x, 2, Hj, be(t));
                            break;
                        case 3:
                            tf(x, 3, Hj, be(t));
                            break;
                        case 6:
                            tf(x, 4, Hj, be(t));
                            break;
                        case 8:
                            tf(x, 6, Hj, be(t));
                            break;
                        default:
                            A = void 0;
                            break a
                        }
                        pf(x, 5, A, de);
                        A = x
                    }
                    if (t = A)
                        v = void 0,
                        t = !(null == (v = I(zl).l[h]) || !v.has(q));
                    t && f.push(A);
                    if (8 === p && k[q])
                        A = ml(JSON.stringify(k[q])),
                        p = xf(m),
                        A = Sf(zf(A, wf, 4), 4),
                        rf(p, 4, pe, A);
                    else {
                        if (p = A)
                            t = void 0,
                            p = !(null == (t = I(zl).g.get(h)) || !t.has(q));
                        p && g.push(A)
                    }
                    e || (p = q,
                    A = h,
                    t = d,
                    v = I(zl),
                    v.g.has(A) || v.g.set(A, new Map),
                    v.g.get(A).has(p) || v.g.get(A).set(p, []),
                    t && v.g.get(A).get(p).push(t));
                    k[q] = m.toJSON()
                }
            }
        }
        if (f.length || g.length)
            a = null != d ? d : void 0,
            c.l && c.o && (d = new Ij,
            f = Ff(d, 2, f),
            g = Ff(f, 3, g),
            a && Wf(g, 1, a),
            f = new Qj,
            g = Ef(f, 7, Rj, g),
            c.j.gd(pl(c, g)))
    }
    function Jl(a, b) {
        b = Al(b);
        a = u(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = ml(JSON.stringify(c))
              , e = vf(d, nl);
            (d = vl(d, e)) && (b[d] || (b[d] = c))
        }
    }
    function Kl() {
        return Object.keys(I(zl).j).map(function(a) {
            return Number(a)
        })
    }
    function Ll(a) {
        I(zl).A.includes(a) || Hl(Al(4), a)
    }
    ;function Ml(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }
    function Nl(a, b, c) {
        return b[a] || c
    }
    function Ol(a) {
        Ml(5, Cl, a);
        Ml(6, Dl, a);
        Ml(7, El, a);
        Ml(8, Fl, a);
        Ml(17, Gl, a);
        Ml(13, Jl, a);
        Ml(15, Ll, a)
    }
    function Pl(a) {
        Ml(4, function(b) {
            I(tl).Fa = b
        }, a);
        Ml(9, function(b, c) {
            var d = I(tl);
            null == d.Fa[3][b] && (d.Fa[3][b] = c)
        }, a);
        Ml(10, function(b, c) {
            var d = I(tl);
            null == d.Fa[4][b] && (d.Fa[4][b] = c)
        }, a);
        Ml(11, function(b, c) {
            var d = I(tl);
            null == d.Fa[5][b] && (d.Fa[5][b] = c)
        }, a);
        Ml(14, function(b) {
            for (var c = I(tl), d = u([3, 4, 5]), e = d.next(); !e.done; e = d.next())
                e = e.value,
                Object.assign(c.Fa[e], b[e])
        }, a)
    }
    function Ql(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    }
    ;var Rl = function() {};
    Rl.prototype.j = function() {}
    ;
    Rl.prototype.g = function() {
        return []
    }
    ;
    var Sl = function(a, b, c) {
        a.j = function(d, e) {
            Nl(2, b, function() {
                return []
            })(d, c, e)
        }
        ;
        a.g = function() {
            return Nl(3, b, function() {
                return []
            })(c)
        }
    };
    var Tl = function(a, b, c) {
        this.id = a;
        this.G = b;
        this.j = c;
        this.g = !1
    }
      , Ul = function(a) {
        return a.g || a.j
    }
      , Vl = function() {
        this.g = []
    }
      , Wl = function() {
        this.g = new Map;
        this.j = !1;
        this.A = new Vl;
        this.o = new Tl(0,0,!1);
        this.l = [this.A]
    }
      , M = function(a) {
        var b = Xl;
        if (b.j || b.g.has(a.id) || null == a.G && null == a.control || 0 == a.Ti)
            return b.o;
        var c = b.A;
        if (null != a.control)
            for (var d = u(b.l), e = d.next(); !e.done; e = d.next()) {
                if (e = e.value,
                e.g.includes(a.control)) {
                    c = e;
                    break
                }
            }
        else
            null != a.X && (c = a.X);
        d = 0;
        null != a.control ? d = a.control.G : null != a.G && (d = a.G);
        a = new Tl(a.id,d,!!a.Yi);
        c.g.push(a);
        b.l.includes(c) || b.l.push(c);
        b.g.set(a.id, a);
        return a
    }
      , Yl = function() {
        var a = Xl;
        a = [].concat(ia(a.g.keys())).filter(function(c) {
            return Ul(this.g.get(c))
        }, a);
        var b = I(Rl).g();
        return [].concat(ia(a), ia(b))
    }
      , Zl = function(a) {
        var b = Xl;
        b.j || (a.g(b.l, b.g),
        b.j = !0)
    };
    Wl.prototype.reset = function() {
        for (var a = u(this.g), b = a.next(); !b.done; b = a.next())
            b = u(b.value),
            b.next(),
            b.next().value.g = !1;
        this.j = !1
    }
    ;
    var Xl = new Wl
      , am = function() {
        return $l.g.filter(function(a) {
            return Ul(a)
        }).map(function(a) {
            return a.id
        })
    };
    var bm = function() {};
    bm.prototype.g = function(a) {
        a = u(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = 0
              , d = Math.floor(1E3 * Math.random());
            b = u(b.value.g);
            for (var e = b.next(); !e.done; e = b.next())
                if (e = e.value,
                c += e.G,
                d < c) {
                    e.g = !0;
                    break
                }
        }
    }
    ;
    var cm = function(a) {
        this.j = a
    };
    cm.prototype.g = function(a, b) {
        a = u(this.j);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = b.get(c.value))
                c.g = !0
    }
    ;
    var dm = function(a, b) {
        this.j = a;
        this.l = b
    };
    w(dm, cm);
    dm.prototype.g = function(a, b) {
        cm.prototype.g.call(this, a, b);
        var c = [];
        a = [];
        for (var d = u(this.j), e = d.next(); !e.done; e = d.next())
            e = e.value,
            b.get(e) ? c.push(e) : a.push(e);
        b = c.map(String).join(",") || "0";
        a = a.map(String).join(",") || "0";
        K(J.getInstance(), "sei", b);
        K(J.getInstance(), "nsei", a);
        K(J.getInstance(), "bi", this.l)
    }
    ;
    var em = function() {
        Vk.apply(this, arguments)
    };
    w(em, Vk);
    var Wk = function(a, b) {
        var c = J.getInstance();
        K(c, "eee", a);
        K(c, "bi", b)
    };
    em.getInstance = function() {
        return I(em)
    }
    ;
    function fm() {
        return gm.split(",").map(function(a) {
            return parseInt(a, 10)
        }).filter(function(a) {
            return !isNaN(a)
        })
    }
    ;var $l = new Vl
      , hm = new Vl
      , im = new Vl
      , jm = new Vl
      , km = new Vl
      , lm = new Vl
      , mm = new Vl
      , nm = new Vl
      , om = new Vl
      , pm = new Vl
      , qm = new Vl
      , rm = new Vl;
    M({
        id: 95329493,
        G: 0
    });
    M({
        id: 95329494,
        G: 0
    });
    M({
        id: 318475490,
        G: 0
    });
    M({
        id: 324123032,
        G: 0
    });
    M({
        id: 420706097,
        G: 10
    });
    M({
        id: 420706098,
        G: 10
    });
    M({
        id: 21062100,
        G: 0
    });
    M({
        id: 420706142,
        G: 0
    });
    M({
        id: 44745813,
        G: 0
    });
    M({
        id: 44746068,
        G: 0
    });
    M({
        id: 21064565,
        G: 0
    });
    M({
        id: 21064567,
        G: 0
    });
    M({
        id: 418572006,
        G: 10
    });
    var sm = M({
        id: 44768716,
        G: 10,
        X: km
    })
      , tm = M({
        id: 44768717,
        G: 10,
        X: km
    })
      , um = M({
        id: 44787137,
        G: 0,
        X: km
    });
    M({
        id: 95334214,
        G: 10
    });
    M({
        id: 95334215,
        G: 10
    });
    M({
        id: 44749839,
        G: 0
    });
    M({
        id: 44714743,
        G: 0
    });
    M({
        id: 44715336,
        G: 10
    });
    M({
        id: 95333806,
        G: 10,
        X: hm
    });
    var vm = M({
        id: 95333807,
        G: 10,
        X: hm
    });
    M({
        id: 44724516,
        G: 0
    });
    M({
        id: 44726389,
        G: 10
    });
    M({
        id: 44752711,
        G: 50
    });
    M({
        id: 44752052,
        G: 50
    });
    M({
        id: 44752657,
        G: 50
    });
    M({
        id: 44733246,
        G: 10
    });
    M({
        id: 44750823,
        G: 10,
        X: im
    });
    M({
        id: 44750824,
        G: 10,
        X: im
    });
    M({
        id: 44794282,
        G: 10,
        X: im
    });
    M({
        id: 44797013,
        G: 10,
        X: im
    });
    M({
        id: 44797014,
        G: 10,
        X: im
    });
    M({
        id: 44750822,
        G: 10,
        X: im
    });
    M({
        id: 44751889,
        G: 10
    });
    M({
        id: 44751890,
        G: 10
    });
    M({
        id: 44752995,
        G: 10
    });
    M({
        id: 44752996,
        G: 10
    });
    M({
        id: 44762627,
        G: 0
    });
    M({
        id: 44762628,
        G: 0
    });
    M({
        id: 95322371,
        G: 5
    });
    M({
        id: 95322372,
        G: 5
    });
    M({
        id: 95327100,
        G: 0
    });
    M({
        id: 44801479,
        G: 10,
        X: jm
    });
    M({
        id: 44801480,
        G: 10,
        X: jm
    });
    M({
        id: 44752538,
        G: 0
    });
    M({
        id: 44754608,
        G: 10
    });
    M({
        id: 44754609,
        G: 10
    });
    M({
        id: 75259414,
        G: 0
    });
    M({
        id: 44776384,
        G: 0
    });
    M({
        id: 95322945,
        G: 10
    });
    var wm = M({
        id: 95322946,
        G: 10
    });
    M({
        id: 44787954,
        G: 0
    });
    M({
        id: 44789282,
        G: 0
    });
    M({
        id: 44792636,
        G: 0
    });
    M({
        id: 44794298,
        G: 0
    });
    M({
        id: 44803996,
        G: 0
    });
    M({
        id: 44805453,
        G: 0
    });
    M({
        id: 44804917,
        G: 0
    });
    M({
        id: 44809796,
        G: 0
    });
    M({
        id: 95334260,
        G: 0
    });
    var xm = M({
        id: 75259416,
        G: 0
    })
      , ym = M({
        id: 75259420,
        G: 0
    })
      , zm = M({
        id: 75259421,
        G: 0
    });
    M({
        id: 44785452,
        G: 10
    });
    M({
        id: 44785453,
        G: 10
    });
    M({
        id: 45401791,
        G: 0
    });
    M({
        id: 95326337,
        G: 990,
        X: lm
    });
    M({
        id: 44806074,
        G: 50,
        X: pm
    });
    M({
        id: 44806075,
        G: 50,
        X: pm
    });
    var Am = window.navigator || {}
      , Bm = Am.cookieDeprecationLabel ? 990 : 0;
    M({
        id: 95322906,
        G: Am.cookieDeprecationLabel ? 10 : 0,
        X: mm
    });
    var Cm = M({
        id: 95320461,
        G: 0,
        X: mm
    })
      , Dm = M({
        id: 95322907,
        G: Bm,
        X: mm
    });
    M({
        id: 44807614,
        G: 10
    });
    M({
        id: 44807615,
        G: 10
    });
    M({
        id: 95322545,
        G: 10
    });
    M({
        id: 95322546,
        G: 10
    });
    M({
        id: 95322547,
        G: 10
    });
    M({
        id: 95322548,
        G: 10
    });
    M({
        id: 44809192,
        G: 10,
        X: om
    });
    M({
        id: 44809193,
        G: 10,
        X: om
    });
    M({
        id: 95320804,
        G: 10,
        X: om
    });
    M({
        id: 95320805,
        G: 10,
        X: om
    });
    M({
        id: 95322027,
        G: 1E3,
        X: nm
    });
    var Em = M({
        id: 46130031,
        G: 0
    });
    M({
        id: 95328713,
        G: 10
    });
    M({
        id: 95328714,
        G: 10
    });
    var Fm = M({
        id: 95327848,
        G: 0
    });
    M({
        id: 95333487,
        G: 50,
        X: qm
    });
    M({
        id: 95333488,
        G: 50,
        X: qm
    });
    M({
        id: 95333489,
        G: 50,
        X: qm
    });
    M({
        id: 95327717,
        G: 10,
        X: rm
    });
    M({
        id: 95327718,
        G: 10,
        X: rm
    });
    M({
        id: 31065644,
        G: 1
    });
    var Gm = M({
        id: 31065645,
        G: 1
    })
      , Hm = new Vl;
    M({
        id: 95331588,
        G: 0,
        X: Hm
    });
    M({
        id: 95331589,
        G: 1E3,
        X: Hm
    });
    M({
        id: 95332092,
        G: 0,
        X: new Vl
    });
    var Im = M({
        id: 95332182,
        G: 0
    });
    if ("undefined" === typeof window.initializeVirtualDom) {
        var Yk = em.getInstance();
        Yk.j || (Zk(),
        Yk.j = !0);
        var gm = Yk.l, Jm;
        Yk.j || (Zk(),
        Yk.j = !0);
        Jm = Yk.g;
        if (null != gm) {
            var Km = new dm(fm(),Jm);
            Zl(Km)
        }
    }
    ;var Lm = function(a) {
        this.H = C(a)
    };
    w(Lm, E);
    Lm.prototype.getId = function() {
        return Mf(this, 1)
    }
    ;
    Lm.ba = [2];
    var Mm = function(a) {
        this.H = C(a)
    };
    w(Mm, E);
    Mm.ba = [2];
    var Nm = function(a) {
        this.H = C(a)
    };
    w(Nm, E);
    Nm.ba = [2];
    var Om = function(a) {
        this.H = C(a)
    };
    w(Om, E);
    var Pm = function(a) {
        this.H = C(a)
    };
    w(Pm, E);
    Pm.ba = [1, 4, 2, 3];
    var Qm = function(a) {
        return function(b) {
            b = JSON.parse(b);
            if (!Array.isArray(b))
                throw Error("Expected jspb data to be an array, got " + Qa(b) + ": " + b);
            Ad(b);
            return new a(b)
        }
    }(Pm);
    var Rm;
    function Sm() {
        return Rm || (Rm = Qm("[null,[[16,[[1000,[[95332046]]],[null,[[95332047]]],[null,[[95332093]]],[10,[[95333808],[95333809,[[635466687,null,null,[true]]]]]]]]],null,null,[null,1000,true,1000]]"))
    }
    ;var Tm = ["A9AxgGSwmnfgzzkyJHILUr3H8nJ/3D+57oAsL4DBt4USlng4jZ0weq+fZtHC/Qwwn6gd4QSa5DzT3OBif+kXVA0AAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9", "AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ=="];
    function Um(a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.features().includes(a))
    }
    function Vm(a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    }
    function Wm() {
        var a = window.navigator
          , b = window.document;
        return !!(window.isSecureContext && "runAdAuction"in a && a.runAdAuction instanceof Function && Vm("run-ad-auction", b))
    }
    ;function Xm(a, b) {
        try {
            var c = a.split(".");
            a = y;
            for (var d = 0, e; null != a && d < c.length; d++)
                e = a,
                a = a[c[d]],
                "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b)
                return f
        } catch (g) {}
    }
    var Ym = {}
      , Zm = {}
      , $m = {}
      , an = {}
      , bn = (an[3] = (Ym[8] = function(a) {
        try {
            return null != Oa(a)
        } catch (b) {}
    }
    ,
    Ym[9] = function(a) {
        try {
            var b = Oa(a)
        } catch (c) {
            return
        }
        if (a = "function" === typeof b)
            b = b && b.toString && b.toString(),
            a = "string" === typeof b && pb(b, "[native code]");
        return a
    }
    ,
    Ym[10] = function() {
        return window === window.top
    }
    ,
    Ym[6] = function(a) {
        return Ub(I(Rl).g(), Number(a))
    }
    ,
    Ym[27] = function(a) {
        a = Xm(a, "boolean");
        return void 0 !== a ? a : void 0
    }
    ,
    Ym[60] = function(a) {
        try {
            return !!y.document.querySelector(a)
        } catch (b) {}
    }
    ,
    Ym[80] = function(a) {
        try {
            return !!y.matchMedia(a).matches
        } catch (b) {}
    }
    ,
    Ym[69] = function(a) {
        return Um(a, y.document)
    }
    ,
    Ym[70] = function(a) {
        return Vm(a, y.document)
    }
    ,
    Ym[79] = function(a) {
        var b = y.navigator;
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
    Ym),
    an[4] = (Zm[3] = function() {
        return Bi()
    }
    ,
    Zm[6] = function(a) {
        a = Xm(a, "number");
        return void 0 !== a ? a : void 0
    }
    ,
    Zm),
    an[5] = ($m[2] = function() {
        return window.location.href
    }
    ,
    $m[3] = function() {
        try {
            return window.top.location.hash
        } catch (a) {
            return ""
        }
    }
    ,
    $m[4] = function(a) {
        a = Xm(a, "string");
        return void 0 !== a ? a : void 0
    }
    ,
    $m),
    an);
    function cn() {
        var a = void 0 === a ? y : a;
        return a.ggeac || (a.ggeac = {})
    }
    ;function dn(a) {
        var b = {};
        return en((b[0] = new Map,
        b[1] = new Map,
        b[2] = new Map,
        b), a)
    }
    function en(a, b) {
        for (var c = new Map, d = u(a[1].entries()), e = d.next(); !e.done; e = d.next()) {
            var f = u(e.value);
            e = f.next().value;
            f = f.next().value;
            f = f[f.length - 1];
            c.set(e, f.bf + f.Le * f.Me)
        }
        b = u(b);
        for (d = b.next(); !d.done; d = b.next())
            for (d = d.value,
            e = Cf(d, Mm, 2),
            e = u(e),
            f = e.next(); !f.done; f = e.next())
                if (f = f.value,
                0 !== Cf(f, Lm, 2).length) {
                    var g = Nf(f, 8);
                    if (Qf(f, 4) && !Qf(f, 13)) {
                        var h = void 0;
                        g = null != (h = c.get(Qf(f, 4))) ? h : 0;
                        h = Nf(f, 1) * Cf(f, Lm, 2).length;
                        c.set(Qf(f, 4), g + h)
                    }
                    h = [];
                    for (var k = 0; k < Cf(f, Lm, 2).length; k++) {
                        var n = {
                            bf: g,
                            Le: Nf(f, 1),
                            Me: Cf(f, Lm, 2).length,
                            Cg: k,
                            Ec: Qf(d, 1),
                            md: f,
                            Ma: Cf(f, Lm, 2)[k]
                        };
                        h.push(n)
                    }
                    fn(a[2], Qf(f, 10), h) || fn(a[1], Qf(f, 4), h) || fn(a[0], Cf(f, Lm, 2)[0].getId(), h)
                }
        return a
    }
    function fn(a, b, c) {
        if (!b)
            return !1;
        a.has(b) || a.set(b, []);
        var d;
        (d = a.get(b)).push.apply(d, ia(c));
        return !0
    }
    ;var gn = [12, 13, 20]
      , hn = function(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = void 0 === d.Cd ? !1 : d.Cd;
        d = void 0 === d.Pg ? [] : d.Pg;
        this.dc = a;
        this.ob = c;
        this.A = {};
        this.Cd = e;
        a = {};
        this.g = (a[b] = [],
        a[4] = [],
        a);
        this.j = {};
        this.l = {};
        if (b = Li())
            for (b = u(b.split(",") || []),
            a = b.next(); !a.done; a = b.next())
                (a = Number(a.value)) && (this.j[a] = !0);
        d = u(d);
        for (b = d.next(); !b.done; b = d.next())
            this.j[b.value] = !0
    }
      , ln = function(a, b, c, d) {
        var e = [], f;
        if (f = 9 !== b)
            a.A[b] ? f = !0 : (a.A[b] = !0,
            f = !1);
        if (f)
            return ql(a.ob, b, c, e, [], 4),
            e;
        f = gn.includes(b);
        for (var g = [], h = [], k = u([0, 1, 2]), n = k.next(); !n.done; n = k.next()) {
            n = n.value;
            for (var m = u(a.dc[n].entries()), p = m.next(); !p.done; p = m.next()) {
                var q = u(p.value);
                p = q.next().value;
                q = q.next().value;
                var t = p
                  , v = q;
                p = new yj;
                q = v.filter(function(la) {
                    return la.Ec === b && a.j[la.Ma.getId()] && jn(a, la)
                });
                if (q.length)
                    for (p = u(q),
                    q = p.next(); !q.done; q = p.next())
                        h.push(q.value.Ma);
                else if (!a.Cd) {
                    q = void 0;
                    2 === n ? (q = d[1],
                    tf(p, 2, zj, be(t))) : q = d[0];
                    var x = void 0
                      , A = void 0;
                    q = null != (A = null == (x = q) ? void 0 : x(String(t))) ? A : 2 === n && 1 === Qf(v[0].md, 11) ? void 0 : d[0](String(t));
                    if (void 0 !== q) {
                        t = u(v);
                        for (v = t.next(); !v.done; v = t.next())
                            if (v = v.value,
                            v.Ec === b) {
                                x = q - v.bf;
                                var ha = v;
                                A = ha.Le;
                                var Q = ha.Me;
                                ha = ha.Cg;
                                0 > x || x >= A * Q || x % Q !== ha || !jn(a, v) || (x = Qf(v.md, 13),
                                0 !== x && void 0 !== x && (A = a.l[String(x)],
                                void 0 !== A && A !== v.Ma.getId() ? rl(a.ob, a.l[String(x)], v.Ma.getId(), x) : a.l[String(x)] = v.Ma.getId()),
                                h.push(v.Ma))
                            }
                        0 !== vf(p, zj) && (Wf(p, 3, q),
                        g.push(p))
                    }
                }
            }
        }
        d = u(h);
        for (h = d.next(); !h.done; h = d.next())
            h = h.value,
            k = h.getId(),
            e.push(k),
            kn(a, k, f ? 4 : c),
            Il(Cf(h, ll, 2), f ? Kl() : [c], a.ob, k);
        ql(a.ob, b, c, e, g, 1);
        return e
    }
      , kn = function(a, b, c) {
        a.g[c] || (a.g[c] = []);
        a = a.g[c];
        a.includes(b) || a.push(b)
    }
      , jn = function(a, b) {
        var c = I(tl).Fa
          , d = jl(Af(b.md, Lj, 3), c);
        if (!d.success)
            return sl(a.ob, Af(b.md, Lj, 3), b.Ec, b.Ma.getId(), d),
            !1;
        if (!d.value)
            return !1;
        c = jl(Af(b.Ma, Lj, 3), c);
        return c.success ? c.value ? !0 : !1 : (sl(a.ob, Af(b.Ma, Lj, 3), b.Ec, b.Ma.getId(), c),
        !1)
    }
      , mn = function(a, b) {
        b = b.map(function(c) {
            return new Nm(c)
        }).filter(function(c) {
            return !gn.includes(Qf(c, 1))
        });
        a.dc = en(a.dc, b)
    }
      , nn = function(a, b) {
        Ml(1, function(c) {
            a.j[c] = !0
        }, b);
        Ml(2, function(c, d, e) {
            return ln(a, c, d, e)
        }, b);
        Ml(3, function(c) {
            return (a.g[c] || []).concat(a.g[4])
        }, b);
        Ml(12, function(c) {
            return void mn(a, c)
        }, b);
        Ml(16, function(c, d) {
            return void kn(a, c, d)
        }, b)
    };
    var on = function() {
        var a = {};
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.B = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.g = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.o = function(b, c) {
            return null != a[b] ? c.concat(a[b]) : c
        }
        ;
        this.A = function() {}
    };
    function pn() {
        var a = qn;
        return I(on).j(a.g, a.defaultValue)
    }
    function rn() {
        var a = sn;
        return I(on).l(a.g, a.defaultValue)
    }
    ;var tn = function() {
        this.g = function() {}
    }
      , un = function(a, b) {
        a.g = Nl(14, b, function() {})
    };
    function vn(a) {
        I(tn).g(a)
    }
    ;var wn, xn, yn, zn, An, Bn;
    function Cn(a, b) {
        var c = b = void 0 === b ? cn() : b;
        Sl(I(Rl), c, a);
        Dn(b, a);
        a = b;
        un(I(tn), a);
        I(on).A()
    }
    function Dn(a, b) {
        var c = I(on);
        c.j = function(d, e) {
            return Nl(5, a, function() {
                return !1
            })(d, e, b)
        }
        ;
        c.l = function(d, e) {
            return Nl(6, a, function() {
                return 0
            })(d, e, b)
        }
        ;
        c.B = function(d, e) {
            return Nl(7, a, function() {
                return ""
            })(d, e, b)
        }
        ;
        c.g = function(d, e) {
            return Nl(8, a, function() {
                return []
            })(d, e, b)
        }
        ;
        c.o = function(d, e) {
            return Nl(17, a, function() {
                return []
            })(d, e, b)
        }
        ;
        c.A = function() {
            Nl(15, a, function() {})(b)
        }
    }
    ;Xl.reset();
    Zl(new bm);
    (function(a) {
        var b = a.cg;
        var c = a.Fa;
        var d = a.config;
        var e = void 0 === a.Rf ? cn() : a.Rf;
        var f = void 0 === a.ve ? 0 : a.ve;
        var g = void 0 === a.ob ? new ol(null != (zn = null == (wn = Af(b, Om, 5)) ? void 0 : Of(wn, 2)) ? zn : 0,null != (An = null == (xn = Af(b, Om, 5)) ? void 0 : Of(xn, 4)) ? An : 0,null != (Bn = null == (yn = Af(b, Om, 5)) ? void 0 : Lf(yn, 3)) ? Bn : !1) : a.ob;
        a = void 0 === a.dc ? dn(Cf(b, Nm, 2)) : a.dc;
        e.hasOwnProperty("init-done") ? (Nl(12, e, function() {})(Cf(b, Nm, 2).map(function(h) {
            return h.toJSON()
        })),
        Nl(13, e, function() {})(Cf(b, ll, 1).map(function(h) {
            return h.toJSON()
        }), f),
        c && Nl(14, e, function() {})(c),
        Cn(f, e)) : (nn(new hn(a,f,g,d), e),
        Ol(e),
        Pl(e),
        Ql(e),
        Cn(f, e),
        Il(Cf(b, ll, 1), [f], g, void 0, !0),
        ul = ul || !(!d || !d.bj),
        vn(bn),
        c && vn(c))
    }
    )({
        cg: Ne(Sm()),
        ve: 7
    });
    var En = Ci()
      , Fn = {}
      , Gn = (Fn[0] = function(a) {
        a = void 0 === a ? ui() : a;
        return function(b) {
            return wi(b + " + " + a) % 1E3
        }
    }(En),
    Fn);
    I(Rl).j(16, Gn);
    var Hn = function(a) {
        var b = {};
        Ib(a, function(c) {
            var d = c.g
              , e = b[d];
            b.hasOwnProperty(d) ? null !== e && (c.j(e) || (b[d] = null)) : b[d] = c
        });
        Xb(a, function(c) {
            return null === b[c.g]
        })
    };
    var In = {
        NONE: 0,
        Ah: 1
    }
      , Jn = {
        yh: 0,
        ti: 1,
        si: 2,
        wi: 3
    }
      , Kn = {
        mf: "a",
        zh: "d",
        VIDEO: "v"
    };
    var Ln = function() {
        this.Y = 0;
        this.g = !1;
        this.j = -1;
        this.xb = !1;
        this.sa = 0
    };
    Ln.prototype.isVisible = function() {
        return this.xb ? .3 <= this.Y : .5 <= this.Y
    }
    ;
    var Mn = {
        xh: 0,
        Dh: 1
    }
      , Nn = {
        668123728: 0,
        668123729: 1
    }
      , On = {
        44731964: 0,
        44731965: 1
    }
      , Pn = {
        NONE: 0,
        ci: 1,
        Ih: 2
    }
      , Qn = {
        480596784: 0,
        480596785: 1,
        21063355: 2
    };
    var Rn = function() {
        this.g = null;
        this.A = !1;
        this.l = null
    }
      , Sn = function(a) {
        a.A = !0;
        return a
    }
      , Tn = function(a, b) {
        a.l && Ib(b, function(c) {
            c = a.l[c];
            void 0 !== c && a.j(c)
        })
    };
    Rn.prototype.getValue = function() {
        return this.g
    }
    ;
    var Un = function(a) {
        Rn.call(this);
        this.o = a
    };
    w(Un, Rn);
    Un.prototype.j = function(a) {
        null === this.g && bh(this.o, a) && (this.g = a)
    }
    ;
    var Vn = function() {
        Rn.call(this)
    };
    w(Vn, Rn);
    Vn.prototype.j = function(a) {
        null === this.g && "number" === typeof a && (this.g = a)
    }
    ;
    var Wn = function() {
        Rn.call(this)
    };
    w(Wn, Rn);
    Wn.prototype.j = function(a) {
        null === this.g && "string" === typeof a && (this.g = a)
    }
    ;
    var Xn = function() {
        this.g = {};
        this.l = !0;
        this.j = {}
    };
    Xn.prototype.reset = function() {
        this.g = {};
        this.l = !0;
        this.j = {}
    }
    ;
    var Yn = function(a, b, c) {
        a.g[b] || (a.g[b] = new Un(c));
        return a.g[b]
    }
      , Zn = function(a) {
        a.g.queryid || (a.g.queryid = new Wn)
    }
      , $n = function(a, b, c) {
        (a = a.g[b]) && a.j(c)
    }
      , ao = function(a, b) {
        if (ah(a.j, b))
            return a.j[b];
        if (a = a.g[b])
            return a.getValue()
    }
      , bo = function(a) {
        var b = {}
          , c = Vg(a.g, function(d) {
            return d.A
        });
        Ug(c, function(d, e) {
            d = void 0 !== a.j[e] ? String(a.j[e]) : d.A && null !== d.g ? String(d.g) : "";
            0 < d.length && (b[e] = d)
        }, a);
        return b
    }
      , co = function(a) {
        a = bo(a);
        var b = [];
        Ug(a, function(c, d) {
            d in Object.prototype || "undefined" != typeof c && b.push([d, ":", c].join(""))
        });
        return b
    }
      , eo = function() {
        var a = N().P
          , b = am();
        a.l && Ib(Yg(a.g), function(c) {
            return Tn(c, b)
        })
    };
    var fo = function(a) {
        Yn(a, "od", In);
        Sn(Yn(a, "opac", Mn));
        Sn(Yn(a, "sbeos", Mn));
        Sn(Yn(a, "prf", Mn));
        Sn(Yn(a, "mwt", Mn));
        Yn(a, "iogeo", Mn)
    };
    var go = document
      , O = window;
    var ho = !ic && !Db();
    var io = function() {
        this.g = this.nb = null
    };
    var jo = function() {};
    jo.prototype.now = function() {
        return 0
    }
    ;
    jo.prototype.j = function() {
        return 0
    }
    ;
    jo.prototype.l = function() {
        return 0
    }
    ;
    jo.prototype.g = function() {
        return 0
    }
    ;
    var lo = function() {
        if (!ko())
            throw Error();
    };
    w(lo, jo);
    var ko = function() {
        return !(!O || !O.performance)
    };
    lo.prototype.now = function() {
        return ko() && O.performance.now ? O.performance.now() : jo.prototype.now.call(this)
    }
    ;
    lo.prototype.j = function() {
        return ko() && O.performance.memory ? O.performance.memory.totalJSHeapSize || 0 : jo.prototype.j.call(this)
    }
    ;
    lo.prototype.l = function() {
        return ko() && O.performance.memory ? O.performance.memory.usedJSHeapSize || 0 : jo.prototype.l.call(this)
    }
    ;
    lo.prototype.g = function() {
        return ko() && O.performance.memory ? O.performance.memory.jsHeapSizeLimit || 0 : jo.prototype.g.call(this)
    }
    ;
    var mo = function() {};
    mo.prototype.isVisible = function() {
        return 1 === xk(go)
    }
    ;
    var no = function(a, b) {
        this.g = a;
        this.depth = b
    }
      , po = function() {
        var a = Gi()
          , b = Math.max(a.length - 1, 0)
          , c = Ji(a);
        a = c.g;
        var d = c.j
          , e = c.l
          , f = [];
        c = function(h, k) {
            return null == h ? k : h
        }
        ;
        e && f.push(new no([e.url, e.Id ? 2 : 0],c(e.depth, 1)));
        d && d != e && f.push(new no([d.url, 2],0));
        a.url && a != e && f.push(new no([a.url, 0],c(a.depth, b)));
        var g = Lb(f, function(h, k) {
            return f.slice(0, f.length - k)
        });
        !a.url || (e || d) && a != e || (d = xi(a.url)) && g.push([new no([d, 1],c(a.depth, b))]);
        g.push([]);
        return Lb(g, function(h) {
            return oo(b, h)
        })
    };
    function oo(a, b) {
        var c = Mb(b, function(e, f) {
            return Math.max(e, f.depth)
        }, -1)
          , d = cc(c + 2);
        d[0] = a;
        Ib(b, function(e) {
            return d[e.depth + 1] = e.g
        });
        return d
    }
    function qo() {
        var a = void 0 === a ? po() : a;
        return a.map(function(b) {
            return Yi(b)
        })
    }
    ;var ro = function() {
        this.j = new mo;
        this.g = ko() ? new lo : new jo
    }
      , to = function() {
        so();
        var a = O.document;
        return !!(a && a.body && a.body.getBoundingClientRect && "function" === typeof O.setInterval && "function" === typeof O.clearInterval && "function" === typeof O.setTimeout && "function" === typeof O.clearTimeout)
    };
    ro.prototype.setTimeout = function(a, b) {
        return O.setTimeout(a, b)
    }
    ;
    ro.prototype.clearTimeout = function(a) {
        O.clearTimeout(a)
    }
    ;
    var uo = function() {
        so();
        return qo()
    };
    var vo = function() {}
      , so = function() {
        var a = I(vo);
        if (!a.g) {
            if (!O)
                throw Error("Context has not been set and window is undefined.");
            a.g = I(ro)
        }
        return a.g
    };
    var wo = function(a) {
        this.H = C(a)
    };
    w(wo, E);
    wo.prototype.g = Hg([0, tg, wg, -2, zg]);
    var xo = function(a) {
        this.l = a;
        this.g = -1;
        this.j = this.A = 0
    }
      , yo = function(a, b) {
        return function() {
            var c = Ka.apply(0, arguments);
            if (-1 < a.g)
                return b.apply(null, ia(c));
            try {
                return a.g = a.l.g.now(),
                b.apply(null, ia(c))
            } finally {
                a.A += a.l.g.now() - a.g,
                a.g = -1,
                a.j += 1
            }
        }
    };
    var zo = function(a, b) {
        this.j = a;
        this.l = b;
        this.g = new xo(a)
    };
    var Ao = function() {
        this.g = {}
    }
      , Co = function() {
        var a = N().flags
          , b = Bo;
        a = a.g[b.key];
        if ("proto" === b.valueType) {
            try {
                var c = JSON.parse(a);
                if (Array.isArray(c))
                    return c
            } catch (d) {}
            return b.defaultValue
        }
        return typeof a === typeof b.defaultValue ? a : b.defaultValue
    };
    var Do = {
        mi: 1,
        Ii: 2,
        hi: 3
    };
    var Eo = function() {
        this.l = void 0;
        this.j = this.B = 0;
        this.o = -1;
        this.P = new Xn;
        Sn(Yn(this.P, "mv", Pn)).l = void 0 === Qn ? null : Qn;
        Yn(this.P, "omid", Mn);
        Sn(Yn(this.P, "epoh", Mn));
        Sn(Yn(this.P, "epph", Mn));
        Sn(Yn(this.P, "umt", Mn)).l = void 0 === Nn ? null : Nn;
        Sn(Yn(this.P, "phel", Mn));
        Sn(Yn(this.P, "phell", Mn));
        Sn(Yn(this.P, "oseid", Do));
        var a = this.P;
        a.g.sloi || (a.g.sloi = new Vn);
        Sn(a.g.sloi);
        Yn(this.P, "mm", Kn);
        Sn(Yn(this.P, "ovms", Jn));
        Sn(Yn(this.P, "xdi", Mn));
        Sn(Yn(this.P, "amp", Mn));
        Sn(Yn(this.P, "prf", Mn));
        Sn(Yn(this.P, "gtx", Mn));
        Sn(Yn(this.P, "mvp_lv", Mn));
        Sn(Yn(this.P, "ssmol", Mn)).l = void 0 === On ? null : On;
        Sn(Yn(this.P, "fmd", Mn));
        Yn(this.P, "gen204simple", Mn);
        this.g = new zo(so(),this.P);
        this.A = !1;
        this.flags = new Ao
    };
    Eo.prototype.Td = function(a) {
        if ("string" === typeof a && 0 != a.length) {
            var b = this.P;
            if (b.l) {
                a = a.split("&");
                for (var c = a.length - 1; 0 <= c; c--) {
                    var d = a[c].split("=")
                      , e = decodeURIComponent(d[0]);
                    1 < d.length ? (d = decodeURIComponent(d[1]),
                    d = /^[0-9]+$/g.exec(d) ? parseInt(d, 10) : d) : d = 1;
                    (e = b.g[e]) && e.j(d)
                }
            }
        }
    }
    ;
    var N = function() {
        return I(Eo)
    };
    var Fo = function(a, b, c, d, e) {
        if ((d ? a.l : Math.random()) < (e || a.g))
            try {
                if (c instanceof Wi)
                    var f = c;
                else
                    f = new Wi,
                    vi(c, function(h, k) {
                        var n = f
                          , m = n.A++;
                        $i(n, m, Xi(k, h))
                    });
                var g = cj(f, a.j, "/pagead/gen_204?id=" + b + "&");
                g && (so(),
                jj(O, g))
            } catch (h) {}
    };
    var Io = function() {
        var a = Go;
        this.B = Ho;
        this.o = "jserror";
        this.l = !0;
        this.j = null;
        this.C = this.Wa;
        this.g = void 0 === a ? null : a;
        this.A = !1
    };
    l = Io.prototype;
    l.hd = function(a) {
        this.j = a
    }
    ;
    l.be = function(a) {
        this.o = a
    }
    ;
    l.ce = function(a) {
        this.l = a
    }
    ;
    l.de = function(a) {
        this.A = a
    }
    ;
    l.zb = function(a, b, c) {
        var d = this;
        return yo(N().g.g, function() {
            try {
                if (d.g && d.g.l) {
                    var e = d.g.start(a.toString(), 3);
                    var f = b();
                    d.g.end(e)
                } else
                    f = b()
            } catch (h) {
                var g = d.l;
                try {
                    Vi(e),
                    g = d.C(a, new Jo(Ko(h)), void 0, c)
                } catch (k) {
                    d.Wa(217, k)
                }
                if (!g)
                    throw h;
            }
            return f
        })()
    }
    ;
    l.Ud = function(a, b, c, d) {
        var e = this;
        return yo(N().g.g, function() {
            var f = Ka.apply(0, arguments);
            return e.zb(a, function() {
                return b.apply(c, f)
            }, d)
        })
    }
    ;
    l.Wa = function(a, b, c, d, e) {
        e = e || this.o;
        try {
            var f = new Wi;
            aj(f, 1, "context", a);
            Lg(b) || (b = new Jo(Ko(b)));
            b.msg && aj(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.j)
                try {
                    this.j(g)
                } catch (k) {}
            if (d)
                try {
                    d(g)
                } catch (k) {}
            $i(f, 3, [g]);
            var h = Ji();
            h.j && aj(f, 4, "top", h.j.url || "");
            $i(f, 5, [{
                url: h.g.url || ""
            }, {
                url: h.g.url ? li(h.g.url) : ""
            }]);
            Fo(this.B, e, f, this.A, c)
        } catch (k) {
            try {
                Fo(this.B, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Ko(k),
                    url: h && h.g.url
                }, this.A, c)
            } catch (n) {}
        }
        return this.l
    }
    ;
    var Ko = function(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack)
            a: {
                a = a.stack;
                var c = b;
                try {
                    -1 == a.indexOf(c) && (a = c + "\n" + a);
                    for (var d; a != d; )
                        d = a,
                        a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n");
                    break a
                } catch (e) {
                    b = c;
                    break a
                }
                b = void 0
            }
        return b
    }
      , Jo = function(a) {
        Kg.call(this, Error(a), {
            message: a
        })
    };
    w(Jo, Kg);
    var Ho, Lo, Go = new Ui(1,window), Mo = function() {
        O && "undefined" != typeof O.google_measure_js_timing && (O.google_measure_js_timing || Go.B())
    };
    Ho = new function() {
        var a = "https:";
        O && O.location && "http:" === O.location.protocol && (a = "http:");
        this.j = a;
        this.g = .01;
        this.l = Math.random()
    }
    ;
    Lo = new Io;
    O && O.document && ("complete" == O.document.readyState ? Mo() : Go.l && Sg(O, "load", function() {
        Mo()
    }));
    var No = function(a) {
        Lo.hd(function(b) {
            Ib(a, function(c) {
                c(b)
            })
        })
    }
      , Oo = function(a, b) {
        return Lo.zb(a, b)
    }
      , Po = function(a, b, c, d) {
        return Lo.Ud(a, b, c, d)
    }
      , Qo = function(a, b, c, d) {
        Lo.Wa(a, b, c, d)
    };
    var Ro = Date.now(), So = -1, To = -1, Uo, Vo = -1, Wo = !1, Xo = function() {
        return Date.now() - Ro
    }, Yo = function() {
        var a = N().l
          , b = 0 <= To ? Xo() - To : -1
          , c = Wo ? Xo() - So : -1
          , d = 0 <= Vo ? Xo() - Vo : -1;
        if (947190542 == a)
            return 100;
        if (79463069 == a)
            return 200;
        a = [2E3, 4E3];
        var e = [250, 500, 1E3];
        Qo(637, Error(), .001);
        var f = b;
        -1 != c && c < b && (f = c);
        for (b = 0; b < a.length; ++b)
            if (f < a[b]) {
                var g = e[b];
                break
            }
        void 0 === g && (g = e[a.length]);
        return -1 != d && 1500 < d && 4E3 > d ? 500 : g
    };
    var Zo = function(a, b, c) {
        var d = new H(0,0,0,0);
        this.time = a;
        this.volume = null;
        this.l = b;
        this.g = d;
        this.j = c
    };
    var $o = function(a, b, c, d, e, f, g) {
        this.l = a;
        this.j = b;
        this.o = c;
        this.g = d;
        this.A = e;
        this.C = f;
        this.B = g
    };
    $o.prototype.getTimestamp = function() {
        return this.C
    }
    ;
    var ap = {
        currentTime: 1,
        duration: 2,
        isVpaid: 4,
        volume: 8,
        isYouTube: 16,
        isPlaying: 32
    }
      , dh = {
        se: "start",
        FIRST_QUARTILE: "firstquartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdquartile",
        COMPLETE: "complete",
        ERROR: "error",
        Bf: "metric",
        PAUSE: "pause",
        Kf: "resume",
        SKIPPED: "skip",
        VIEWABLE_IMPRESSION: "viewable_impression",
        Cf: "mute",
        Of: "unmute",
        FULLSCREEN: "fullscreen",
        yf: "exitfullscreen",
        tf: "bufferstart",
        sf: "bufferfinish",
        ne: "fully_viewable_audible_half_duration_impression",
        re: "measurable_impression",
        lf: "abandon",
        me: "engagedview",
        IMPRESSION: "impression",
        vf: "creativeview",
        LOADED: "loaded",
        PROGRESS: "progress",
        rh: "close",
        sh: "collapse",
        Df: "overlay_resize",
        Ef: "overlay_unmeasurable_impression",
        Ff: "overlay_unviewable_impression",
        Hf: "overlay_viewable_immediate_impression",
        Gf: "overlay_viewable_end_of_session_impression",
        wf: "custom_metric_viewable",
        nf: "audio_audible",
        rf: "audio_measurable",
        qf: "audio_impression"
    }
      , bp = "start firstquartile midpoint thirdquartile resume loaded".split(" ")
      , cp = ["start", "firstquartile", "midpoint", "thirdquartile"]
      , dp = ["abandon"]
      , ep = {
        UNKNOWN: -1,
        se: 0,
        FIRST_QUARTILE: 1,
        MIDPOINT: 2,
        THIRD_QUARTILE: 3,
        COMPLETE: 4,
        Bf: 5,
        PAUSE: 6,
        Kf: 7,
        SKIPPED: 8,
        VIEWABLE_IMPRESSION: 9,
        Cf: 10,
        Of: 11,
        FULLSCREEN: 12,
        yf: 13,
        ne: 14,
        re: 15,
        lf: 16,
        me: 17,
        IMPRESSION: 18,
        vf: 19,
        LOADED: 20,
        wf: 21,
        tf: 22,
        sf: 23,
        qf: 27,
        rf: 28,
        nf: 29
    };
    var Xg = {
        nh: "addEventListener",
        Jh: "getMaxSize",
        Kh: "getScreenSize",
        Lh: "getState",
        Mh: "getVersion",
        ri: "removeEventListener",
        di: "isViewable"
    }
      , fp = function(a) {
        var b = a !== a.top
          , c = a.top === Ei(a)
          , d = -1
          , e = 0;
        if (b && c && a.top.mraid) {
            d = 3;
            var f = a.top.mraid
        } else
            d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
        f && (f.IS_GMA_SDK || (e = 2),
        Wg(function(g) {
            return "function" === typeof f[g]
        }) || (e = 1));
        return {
            Da: f,
            Cc: e,
            Ug: d
        }
    };
    var gp = function() {
        var a = window.document;
        return a && "function" === typeof a.elementFromPoint
    };
    function hp(a, b, c) {
        try {
            a && (b = b.top);
            var d = b;
            a && null !== d && d != d.top && (d = d.top);
            try {
                var e = (void 0 === c ? 0 : c) ? (new F(d.innerWidth,d.innerHeight)).round() : Zh(d || window).round()
            } catch (m) {
                e = new F(-12245933,-12245933)
            }
            a = e;
            var f = a.height
              , g = a.width;
            if (-12245933 === g)
                return new H(g,g,g,g);
            var h = $h(Uh(b.document).g)
              , k = h.x
              , n = h.y;
            return new H(n,k + g,n + f,k)
        } catch (m) {
            return new H(-12245933,-12245933,-12245933,-12245933)
        }
    }
    ;var jp = function(a, b) {
        if ("string" === typeof b)
            (b = ip(a, b)) && (a.style[b] = void 0);
        else
            for (var c in b) {
                var d = a
                  , e = b[c]
                  , f = ip(d, c);
                f && (d.style[f] = e)
            }
    }
      , kp = {}
      , ip = function(a, b) {
        var c = kp[b];
        if (!c) {
            var d = Oh(b);
            c = d;
            void 0 === a.style[d] && (d = (lc ? "Webkit" : kc ? "Moz" : ic ? "ms" : null) + Qh(d),
            void 0 !== a.style[d] && (c = d));
            kp[b] = c
        }
        return c
    }
      , lp = function(a, b) {
        var c = a.style[Oh(b)];
        return "undefined" !== typeof c ? c : a.style[ip(a, b)] || ""
    }
      , mp = function(a, b) {
        var c = Th(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
      , np = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }
      , op = function(a) {
        var b = Th(a)
          , c = new Dh(0,0);
        if (a == (b ? Th(b) : document).documentElement)
            return c;
        a = np(a);
        b = $h(Uh(b).g);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
      , pp = function(a, b) {
        var c = new Dh(0,0)
          , d = G(Th(a));
        if (!ec(d, "parent"))
            return c;
        do {
            if (d == b)
                var e = op(a);
            else
                e = np(a),
                e = new Dh(e.left,e.top);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    }
      , qp = function() {
        var a = "100%";
        "number" == typeof a && (a = Math.round(a) + "px");
        return a
    }
      , sp = function(a) {
        var b = rp, c;
        (c = mp(a, "display")) || (c = a.currentStyle ? a.currentStyle.display : null);
        if ("none" != (c || a.style && a.style.display))
            return b(a);
        c = a.style;
        var d = c.display
          , e = c.visibility
          , f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }
      , rp = function(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = lc && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = np(a),
        new F(a.right - a.left,a.bottom - a.top)) : new F(b,c)
    }
      , tp = function(a) {
        var b = new F(a.offsetWidth,a.offsetHeight);
        var c = mp(a, "paddingLeft");
        var d = mp(a, "paddingRight")
          , e = mp(a, "paddingTop")
          , f = mp(a, "paddingBottom");
        c = new H(parseFloat(e),parseFloat(d),parseFloat(f),parseFloat(c));
        d = mp(a, "borderLeftWidth");
        e = mp(a, "borderRightWidth");
        f = mp(a, "borderTopWidth");
        a = mp(a, "borderBottomWidth");
        a = new H(parseFloat(f),parseFloat(e),parseFloat(a),parseFloat(d));
        return new F(b.width - a.left - c.left - c.right - a.right,b.height - a.top - c.top - c.bottom - a.bottom)
    };
    var up = function(a, b) {
        b = Math.pow(10, b);
        return Math.floor(a * b) / b
    };
    function vp(a, b, c, d) {
        if (!a)
            return {
                value: d,
                done: !1
            };
        d = b(d, a);
        var e = c(d, a);
        return !e && ec(a, "parentElement") ? vp(ei(a), b, c, d) : {
            done: e,
            value: d
        }
    }
    var wp = function(a, b, c, d) {
        if (!a)
            return d;
        d = vp(a, b, c, d);
        if (!d.done)
            try {
                var e = Th(a)
                  , f = e && G(e);
                return wp(f && f.frameElement, b, c, d.value)
            } catch (g) {}
        return d.value
    };
    function xp(a) {
        var b = !ic || yc();
        return wp(a, function(c, d) {
            c = ec(d, "style") && d.style && lp(d, "visibility");
            return {
                hidden: "hidden" === c,
                visible: b && "visible" === c
            }
        }, function(c) {
            return c.hidden || c.visible
        }, {
            hidden: !1,
            visible: !1
        }).hidden
    }
    var yp = function(a) {
        return wp(a, function(b, c) {
            return !(!ec(c, "style") || !c.style || "none" !== lp(c, "display"))
        }, function(b) {
            return b
        }, !1) ? !0 : xp(a)
    }
      , zp = function(a) {
        return new H(a.top,a.right,a.bottom,a.left)
    }
      , Ap = function(a) {
        var b = a.top || 0
          , c = a.left || 0;
        return new H(b,c + (a.width || 0),b + (a.height || 0),c)
    }
      , Bp = function(a) {
        return null != a && 0 <= a && 1 >= a
    };
    function Cp() {
        var a = vb();
        return a ? Nb("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function(b) {
            return qb(a, b)
        }) || qb(a, "OMI/") && !qb(a, "XiaoMi/") ? !0 : qb(a, "Presto") && qb(a, "Linux") && !qb(a, "X11") && !qb(a, "Android") && !qb(a, "Mobi") : !1
    }
    function Dp() {
        var a = vb();
        return qb(a, "AppleTV") || qb(a, "Apple TV") || qb(a, "CFNetwork") || qb(a, "tvOS")
    }
    function Ep() {
        var a;
        (a = qb(vb(), "CrKey") && !(qb(vb(), "CrKey") && qb(vb(), "SmartSpeaker")) || qb(vb(), "PlayStation") || qb(vb(), "Roku") || Cp() || qb(vb(), "Xbox") || Dp()) || (a = vb(),
        a = qb(a, "sdk_google_atv_x86") || qb(a, "Android TV"));
        return a
    }
    ;var Gp = function() {
        this.l = !pi(O.top);
        this.C = ii() || ji();
        var a = Gi();
        a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url.match(ki)[3] || null) ? decodeURI(a) : a) || "" : "";
        this.domain = a;
        this.g = new H(0,0,0,0);
        this.o = new F(0,0);
        this.A = new F(0,0);
        this.J = new H(0,0,0,0);
        this.frameOffset = new Dh(0,0);
        this.B = 0;
        this.L = !1;
        this.j = !(!O || !fp(O).Da);
        Fp(this)
    }
      , Hp = function(a, b) {
        b && b.screen && (a.o = new F(b.screen.width,b.screen.height))
    }
      , Ip = function(a, b) {
        a: {
            var c = a.g ? new F(a.g.getWidth(),a.g.getHeight()) : new F(0,0);
            b = void 0 === b ? O : b;
            null !== b && b != b.top && (b = b.top);
            var d = 0
              , e = 0;
            try {
                var f = b.document
                  , g = f.body
                  , h = f.documentElement;
                if ("CSS1Compat" == f.compatMode && h.scrollHeight)
                    d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight,
                    e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
                else {
                    var k = h.scrollHeight
                      , n = h.scrollWidth
                      , m = h.offsetHeight
                      , p = h.offsetWidth;
                    h.clientHeight != m && (k = g.scrollHeight,
                    n = g.scrollWidth,
                    m = g.offsetHeight,
                    p = g.offsetWidth);
                    k > c.height ? k > m ? (d = k,
                    e = n) : (d = m,
                    e = p) : k < m ? (d = k,
                    e = n) : (d = m,
                    e = p)
                }
                var q = new F(e,d);
                break a
            } catch (t) {
                q = new F(-12245933,-12245933);
                break a
            }
            q = void 0
        }
        a.A = q
    }
      , Fp = function(a) {
        O && O.document && (a.J = hp(!1, O, a.C),
        a.g = hp(!0, O, a.C),
        Ip(a, O),
        Hp(a, O))
    }
      , Kp = function() {
        var a = Jp();
        if (0 < a.B || a.L)
            return !0;
        a = so().j.isVisible();
        var b = 0 === xk(go);
        return a || b
    }
      , Jp = function() {
        return I(Gp)
    };
    var Lp = function(a) {
        this.l = a;
        this.j = 0;
        this.g = null
    };
    Lp.prototype.cancel = function() {
        so().clearTimeout(this.g);
        this.g = null
    }
    ;
    var Mp = function(a) {
        var b = so()
          , c = N().g.g;
        a.g = b.setTimeout(yo(c, Po(143, function() {
            a.j++;
            a.l.sample()
        })), Yo())
    };
    var Np = function(a, b, c) {
        this.l = a;
        this.ka = void 0 === c ? "na" : c;
        this.o = [];
        this.ua = !1;
        this.A = new Zo(-1,!0,this);
        this.g = this;
        this.L = b;
        this.I = this.D = !1;
        this.W = "uk";
        this.O = !1;
        this.C = !0
    };
    Np.prototype.F = function() {
        return !1
    }
    ;
    Np.prototype.initialize = function() {
        return this.ua = !0
    }
    ;
    Np.prototype.Fb = function() {
        return this.g.W
    }
    ;
    Np.prototype.Yb = function() {
        return this.g.I
    }
    ;
    var Pp = function(a, b, c) {
        if (!a.I || (void 0 === c ? 0 : c))
            a.I = !0,
            a.W = b,
            a.L = 0,
            a.g != a || Op(a)
    };
    Np.prototype.getName = function() {
        return this.g.ka
    }
    ;
    Np.prototype.ib = function() {
        return this.g.Z()
    }
    ;
    Np.prototype.Z = function() {
        return {}
    }
    ;
    Np.prototype.Sa = function() {
        return this.g.L
    }
    ;
    var Qp = function(a, b) {
        Ub(a.o, b) || (a.o.push(b),
        b.Hb(a.g),
        b.jb(a.A),
        b.Oa() && (a.D = !0))
    };
    Np.prototype.T = function() {
        var a = Jp();
        a.g = hp(!0, this.l, a.C)
    }
    ;
    Np.prototype.U = function() {
        Hp(Jp(), this.l)
    }
    ;
    Np.prototype.aa = function() {
        return this.A.g
    }
    ;
    var Rp = function(a) {
        a = a.g;
        a.U();
        a.T();
        var b = Jp();
        b.J = hp(!1, a.l, b.C);
        Ip(Jp(), a.l);
        a.A.g = a.aa()
    };
    Np.prototype.sample = function() {}
    ;
    Np.prototype.isActive = function() {
        return this.g.C
    }
    ;
    var Sp = function(a) {
        a.D = a.o.length ? Nb(a.o, function(b) {
            return b.Oa()
        }) : !1
    }
      , Tp = function(a) {
        var b = Zb(a.o);
        Ib(b, function(c) {
            c.jb(a.A)
        })
    }
      , Op = function(a) {
        var b = Zb(a.o);
        Ib(b, function(c) {
            c.Hb(a.g)
        });
        a.g != a || Tp(a)
    };
    l = Np.prototype;
    l.Hb = function(a) {
        var b = this.g;
        this.g = a.Sa() >= this.L ? a : this;
        b !== this.g ? (this.C = this.g.C,
        Op(this)) : this.C !== this.g.C && (this.C = this.g.C,
        Op(this))
    }
    ;
    l.jb = function(a) {
        if (a.j === this.g) {
            var b = this.A
              , c = this.D;
            if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.l == a.l)
                b = b.g,
                c = a.g,
                c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
            this.A = a;
            !c && Tp(this)
        }
    }
    ;
    l.Oa = function() {
        return this.D
    }
    ;
    l.V = function() {
        this.O = !0
    }
    ;
    l.Ca = function() {
        return this.O
    }
    ;
    var Up = function(a, b, c, d) {
        this.l = a;
        this.g = new H(0,0,0,0);
        this.o = new H(0,0,0,0);
        this.j = b;
        this.P = c;
        this.I = d;
        this.F = !1;
        this.timestamp = -1;
        this.J = new $o(b.A,this.g,new H(0,0,0,0),0,0,Xo(),0)
    };
    l = Up.prototype;
    l.pd = function() {
        return !0
    }
    ;
    l.qc = function() {}
    ;
    l.V = function() {
        if (!this.Ca()) {
            var a = this.j;
            Vb(a.o, this);
            a.D && this.Oa() && Sp(a);
            this.qc();
            this.F = !0
        }
    }
    ;
    l.Ca = function() {
        return this.F
    }
    ;
    l.ib = function() {
        return this.j.ib()
    }
    ;
    l.Sa = function() {
        return this.j.Sa()
    }
    ;
    l.Fb = function() {
        return this.j.Fb()
    }
    ;
    l.Yb = function() {
        return this.j.Yb()
    }
    ;
    l.Hb = function() {}
    ;
    l.jb = function() {
        this.fb()
    }
    ;
    l.Oa = function() {
        return this.I
    }
    ;
    var Vp = function(a) {
        this.o = !1;
        this.g = a;
        this.A = function() {}
    };
    l = Vp.prototype;
    l.Sa = function() {
        return this.g.Sa()
    }
    ;
    l.Fb = function() {
        return this.g.Fb()
    }
    ;
    l.Yb = function() {
        return this.g.Yb()
    }
    ;
    l.create = function(a, b, c) {
        var d = null;
        this.g && (d = this.rc(a, b, c),
        Qp(this.g, d));
        return d
    }
    ;
    l.oe = function() {
        return this.Pb()
    }
    ;
    l.Pb = function() {
        return !1
    }
    ;
    l.init = function(a) {
        return this.g.initialize() ? (Qp(this.g, this),
        this.A = a,
        !0) : !1
    }
    ;
    l.Hb = function(a) {
        0 == a.Sa() && this.A(a.Fb(), this)
    }
    ;
    l.jb = function() {}
    ;
    l.Oa = function() {
        return !1
    }
    ;
    l.V = function() {
        this.o = !0
    }
    ;
    l.Ca = function() {
        return this.o
    }
    ;
    l.ib = function() {
        return {}
    }
    ;
    var Wp = function(a, b, c) {
        this.l = void 0 === c ? 0 : c;
        this.j = a;
        this.g = null == b ? "" : b
    }
      , Xp = function(a) {
        switch (Math.trunc(a.l)) {
        case -16:
            return -16;
        case -8:
            return -8;
        case 0:
            return 0;
        case 8:
            return 8;
        case 16:
            return 16;
        default:
            return 16
        }
    }
      , Yp = function(a, b) {
        return a.l < b.l ? !0 : a.l > b.l ? !1 : a.j < b.j ? !0 : a.j > b.j ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g
    };
    var Zp = function() {
        this.l = 0;
        this.g = [];
        this.j = !1
    };
    Zp.prototype.add = function(a, b, c) {
        ++this.l;
        a = new Wp(a,b,c);
        this.g.push(new Wp(a.j,a.g,a.l + this.l / 4096));
        this.j = !0;
        return this
    }
    ;
    var $p = function(a, b) {
        Ib(b.g, function(c) {
            a.add(c.j, c.g, Xp(c))
        })
    }
      , aq = function(a, b) {
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? !0 : d;
        vi(b, function(e, f) {
            d && void 0 === e || a.add(f, e, c)
        });
        return a
    }
      , cq = function(a) {
        var b = bq;
        a.j && (ac(a.g, function(c, d) {
            return Yp(d, c) ? 1 : Yp(c, d) ? -1 : 0
        }),
        a.j = !1);
        return Mb(a.g, function(c, d) {
            d = b(d);
            return "" + c + ("" != c && "" != d ? "&" : "") + d
        }, "")
    };
    var bq = function(a) {
        var b = a.j;
        a = a.g;
        return "" === a ? b : "boolean" === typeof a ? a ? b : "" : Array.isArray(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Ub(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };
    var dq = function(a) {
        var b = void 0 === b ? !0 : b;
        this.g = new Zp;
        void 0 !== a && $p(this.g, a);
        b && this.g.add("v", "unreleased", -16)
    };
    dq.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204"
          , b = cq(this.g);
        0 < b.length && (a += "?" + b);
        return a
    }
    ;
    var eq = function(a) {
        var b = []
          , c = [];
        Ug(a, function(d, e) {
            if (!(e in Object.prototype) && "undefined" != typeof d)
                switch (Array.isArray(d) && (d = d.join(",")),
                d = [e, "=", d].join(""),
                e) {
                case "adk":
                case "r":
                case "tt":
                case "error":
                case "mtos":
                case "tos":
                case "p":
                case "bs":
                    b.unshift(d);
                    break;
                case "req":
                case "url":
                case "referrer":
                case "iframe_loc":
                    c.push(d);
                    break;
                default:
                    b.push(d)
                }
        });
        return b.concat(c)
    }
      , fq = function(a) {
        a = a.toString();
        so();
        jj(O, a)
    };
    var gq = function() {
        this.g = 0
    };
    function hq(a) {
        a && "function" == typeof a.V && a.V()
    }
    ;var P = function() {
        this.L = this.L;
        this.J = this.J
    };
    P.prototype.L = !1;
    P.prototype.Ca = function() {
        return this.L
    }
    ;
    P.prototype.V = function() {
        this.L || (this.L = !0,
        this.N())
    }
    ;
    var R = function(a, b) {
        iq(a, ab(hq, b))
    }
      , iq = function(a, b) {
        a.L ? b() : (a.J || (a.J = []),
        a.J.push(b))
    };
    P.prototype.N = function() {
        if (this.J)
            for (; this.J.length; )
                this.J.shift()()
    }
    ;
    var jq = function(a, b, c) {
        Ib(a.l, function(d) {
            var e = a.g;
            if (!d.g && (d.l(b, c),
            d.A())) {
                d.g = !0;
                var f = d.j()
                  , g = new Zp;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.o);
                d = I(gq);
                g.add("i", d.g++);
                g.add("adk", e);
                aq(g, f);
                e = new dq(g);
                fq(e)
            }
        })
    };
    var kq = function() {
        this.j = this.l = this.A = this.g = 0
    }
      , lq = function(a, b, c, d) {
        b && (a.g += c,
        a.j += c,
        a.A += c,
        a.l = Math.max(a.l, a.A));
        if (void 0 === d ? !b : d)
            a.A = 0
    };
    var mq = [1, .75, .5, .3, 0]
      , nq = function(a) {
        this.j = a = void 0 === a ? mq : a;
        this.g = Lb(this.j, function() {
            return new kq
        })
    }
      , pq = function(a, b) {
        return oq(a, function(c) {
            return c.g
        }, void 0 === b ? !0 : b)
    }
      , rq = function(a, b) {
        return qq(a, b, function(c) {
            return c.g
        })
    }
      , sq = function(a, b) {
        return oq(a, function(c) {
            return c.l
        }, void 0 === b ? !0 : b)
    }
      , tq = function(a, b) {
        return qq(a, b, function(c) {
            return c.l
        })
    }
      , uq = function(a, b) {
        return qq(a, b, function(c) {
            return c.j
        })
    }
      , vq = function(a) {
        Ib(a.g, function(b) {
            b.j = 0
        })
    }
      , wq = function(a, b, c, d, e, f, g) {
        g = void 0 === g ? !0 : g;
        c = f ? Math.min(b, c) : c;
        for (f = 0; f < a.j.length; f++) {
            var h = a.j[f]
              , k = 0 < c && c >= h;
            h = !(0 < b && b >= h) || d;
            lq(a.g[f], g && k, e, !g || h)
        }
    }
      , oq = function(a, b, c) {
        a = Lb(a.g, function(d) {
            return b(d)
        });
        return c ? a : xq(a)
    }
      , qq = function(a, b, c) {
        var d = Tb(a.j, function(e) {
            return b <= e
        });
        return -1 == d ? 0 : c(a.g[d])
    }
      , xq = function(a) {
        return Lb(a, function(b, c, d) {
            return 0 < c ? d[c] - d[c - 1] : d[c]
        })
    };
    var yq = function() {
        this.j = new nq;
        this.W = new kq;
        this.I = this.C = -1;
        this.fa = 1E3;
        this.ga = new nq([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0]);
        this.O = this.K = -1
    }
      , zq = function(a, b) {
        return sq(a.j, void 0 === b ? !0 : b)
    };
    yq.prototype.L = function(a, b, c, d) {
        this.C = -1 != this.C ? Math.min(this.C, b.Y) : b.Y;
        this.I = Math.max(this.I, b.Y);
        this.K = -1 != this.K ? Math.min(this.K, b.sa) : b.sa;
        this.O = Math.max(this.O, b.sa);
        wq(this.ga, b.sa, c.sa, b.g, a, d);
        wq(this.j, b.Y, c.Y, b.g, a, d);
        c = d || c.xb != b.xb ? c.isVisible() && b.isVisible() : c.isVisible();
        b = !b.isVisible() || b.g;
        lq(this.W, c, a, b)
    }
    ;
    yq.prototype.Va = function() {
        return this.W.l >= this.fa
    }
    ;
    if (go && go.URL) {
        var Aq = go.URL, Bq;
        if (Bq = !!Aq) {
            var Cq;
            a: {
                if (Aq) {
                    var Dq = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
                    try {
                        var Eq = Dq.exec(decodeURIComponent(Aq));
                        if (Eq) {
                            Cq = Eq[1] && 1 < Eq[1].length ? Eq[1].substring(1) : "true";
                            break a
                        }
                    } catch (a) {}
                }
                Cq = ""
            }
            Bq = 0 < Cq.length
        }
        Lo.ce(!Bq)
    }
    var Fq = function(a, b, c, d) {
        var e = void 0 === e ? !1 : e;
        c = Po(d, c);
        Sg(a, b, c, {
            capture: e
        })
    };
    var Gq = new H(0,0,0,0);
    function Hq(a, b) {
        b = Iq(b);
        return 0 === b ? 0 : Iq(a) / b
    }
    function Iq(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }
    function Jq(a, b) {
        if (!a || !b)
            return !1;
        for (var c = 0; null !== a && 100 > c++; ) {
            if (a === b)
                return !0;
            try {
                if (a = ei(a) || a) {
                    var d = Th(a)
                      , e = d && G(d)
                      , f = e && e.frameElement;
                    f && (a = f)
                }
            } catch (g) {
                break
            }
        }
        return !1
    }
    function Kq(a, b, c) {
        if (!a || !b)
            return !1;
        b = jk(ik(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        pi(window.top) && window.top && window.top.document && (window = window.top);
        if (!gp())
            return !1;
        a = window.document.elementFromPoint(a, b);
        if (!a)
            return !1;
        b = (b = (b = Th(c)) && b.defaultView && b.defaultView.frameElement) && Jq(b, a);
        var d = a === c;
        a = !d && a && hi(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }
    function Lq(a, b, c, d) {
        return Jp().l ? !1 : 0 >= a.getWidth() || 0 >= a.getHeight() ? !0 : c && d ? Oo(208, function() {
            return Kq(a, b, c)
        }) : !1
    }
    ;var Mq = new H(0,0,0,0)
      , Oq = function(a, b, c) {
        P.call(this);
        this.position = ik(Mq);
        this.Vc = this.Jc();
        this.Jd = -2;
        this.Zg = Date.now();
        this.df = -1;
        this.Mc = b;
        this.Lc = null;
        this.Ub = !1;
        this.bd = null;
        this.opacity = -1;
        this.Ng = c;
        this.ah = !1;
        this.Ld = function() {}
        ;
        this.gf = function() {}
        ;
        this.ta = new io;
        this.ta.nb = a;
        this.ta.g = a;
        this.Ta = !1;
        this.tb = {
            Od: null,
            Nd: null
        };
        this.Ye = !0;
        this.lc = null;
        this.Ib = this.wg = !1;
        N().B++;
        this.qa = this.Dd();
        this.cf = -1;
        this.ca = null;
        this.Ge = this.ug = !1;
        this.P = new Xn;
        fo(this.P);
        Nq(this);
        1 == this.Ng ? $n(this.P, "od", 1) : $n(this.P, "od", 0)
    };
    w(Oq, P);
    Oq.prototype.N = function() {
        this.ta.g && (this.tb.Od && (Tg(this.ta.g, "mouseover", this.tb.Od),
        this.tb.Od = null),
        this.tb.Nd && (Tg(this.ta.g, "mouseout", this.tb.Nd),
        this.tb.Nd = null));
        this.lc && this.lc.V();
        this.ca && this.ca.V();
        delete this.Vc;
        delete this.Ld;
        delete this.gf;
        delete this.ta.nb;
        delete this.ta.g;
        delete this.tb;
        delete this.lc;
        delete this.ca;
        delete this.P;
        P.prototype.N.call(this)
    }
    ;
    Oq.prototype.vb = function() {
        return this.ca ? this.ca.g : this.position
    }
    ;
    Oq.prototype.Td = function(a) {
        N().Td(a)
    }
    ;
    var Nq = function(a) {
        a = a.ta.nb;
        var b;
        if (b = a && a.getAttribute)
            b = /-[a-z]/.test("googleAvInapp") ? !1 : ho && a.dataset ? "googleAvInapp"in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + Ph()) : !!a.getAttribute("data-" + Ph());
        b && (Jp().j = !0)
    };
    Oq.prototype.Oa = function() {
        return !1
    }
    ;
    Oq.prototype.Jc = function() {
        return new yq
    }
    ;
    Oq.prototype.pa = function() {
        return this.Vc
    }
    ;
    var Pq = function(a, b) {
        b != a.Ib && (a.Ib = b,
        a = Jp(),
        b ? a.B++ : 0 < a.B && a.B--)
    }
      , Qq = function(a, b) {
        if (a.ca) {
            if (b.getName() === a.ca.getName())
                return;
            a.ca.V();
            a.ca = null
        }
        b = b.create(a.ta.g, a.P, a.Oa());
        if (b = null != b && b.pd() ? b : null)
            a.ca = b
    }
      , Rq = function(a, b, c) {
        if (!a.Lc || -1 == a.Mc || -1 === b.getTimestamp() || -1 === a.Lc.getTimestamp())
            return 0;
        a = b.getTimestamp() - a.Lc.getTimestamp();
        return a > c ? 0 : a
    };
    Oq.prototype.De = function(a) {
        return Rq(this, a, 1E4)
    }
    ;
    var Sq = function(a, b, c) {
        if (a.ca) {
            a.ca.fb();
            var d = a.ca.J
              , e = d.l
              , f = e.g;
            if (null != d.o) {
                var g = d.j;
                a.bd = new Dh(g.left - f.left,g.top - f.top)
            }
            f = a.kd() ? Math.max(d.g, d.A) : d.g;
            g = {};
            null !== e.volume && (g.volume = e.volume);
            e = a.De(d);
            a.Lc = d;
            a.ge(f, b, c, !1, g, e, d.B)
        }
    }
      , Tq = function(a) {
        if (a.Ub && a.lc) {
            var b = 1 == ao(a.P, "od")
              , c = Jp().g
              , d = a.lc
              , e = a.ca ? a.ca.getName() : "ns"
              , f = a.bd
              , g = new F(c.getWidth(),c.getHeight());
            c = a.kd();
            a = {
                Wg: e,
                bd: f,
                mh: g,
                kd: c,
                Y: a.qa.Y,
                hh: b
            };
            if (b = d.j) {
                b.fb();
                e = b.J;
                f = e.l.g;
                var h = g = null;
                null != e.o && f && (g = e.j,
                g = new Dh(g.left - f.left,g.top - f.top),
                h = new F(f.right - f.left,f.bottom - f.top));
                e = c ? Math.max(e.g, e.A) : e.g;
                c = {
                    Wg: b.getName(),
                    bd: g,
                    mh: h,
                    kd: c,
                    hh: !1,
                    Y: e
                }
            } else
                c = null;
            c && jq(d, a, c)
        }
    };
    l = Oq.prototype;
    l.ge = function(a, b, c, d, e, f, g) {
        this.Ta || (this.Ub && (a = this.qd(a, c, e, g),
        d = d && this.qa.Y >= (this.xb() ? .3 : .5),
        this.he(f, a, d),
        this.Mc = b,
        0 < a.Y && -1 === this.cf && (this.cf = b),
        -1 == this.df && this.Va() && (this.df = b),
        -2 == this.Jd && (this.Jd = Iq(this.vb()) ? a.Y : -1),
        this.qa = a),
        this.Ld(this))
    }
    ;
    l.he = function(a, b, c) {
        this.pa().L(a, b, this.qa, c)
    }
    ;
    l.Dd = function() {
        return new Ln
    }
    ;
    l.qd = function(a, b, c, d) {
        c = this.Dd();
        c.g = b;
        b = so().j;
        b = 0 === xk(go) ? -1 : b.isVisible() ? 0 : 1;
        c.j = b;
        c.Y = this.wd(a);
        c.xb = this.xb();
        c.sa = d;
        return c
    }
    ;
    l.wd = function(a) {
        return 0 === this.opacity && 1 === ao(this.P, "opac") ? 0 : a
    }
    ;
    l.xb = function() {
        return !1
    }
    ;
    l.kd = function() {
        return this.ug || this.wg
    }
    ;
    l.xa = function() {
        return 0
    }
    ;
    l.Va = function() {
        return this.Vc.Va()
    }
    ;
    l.Fe = function() {
        var a = this.Ub;
        a = (this.Ge || this.Ca()) && !a;
        var b = 2 !== N().j || this.ah;
        return this.Ta || b && a ? 2 : this.Va() ? 4 : 3
    }
    ;
    l.Hc = function() {
        return 0
    }
    ;
    var Uq = function(a, b, c) {
        b && (a.Ld = b);
        c && (a.gf = c)
    };
    var Vq = function() {};
    Vq.prototype.next = function() {
        return Wq
    }
    ;
    var Wq = {
        done: !0,
        value: void 0
    };
    Vq.prototype.Cb = function() {
        return this
    }
    ;
    var Xq = function() {
        this.A = this.g = this.l = this.j = this.o = 0
    }
      , Yq = function(a) {
        var b = {};
        b = (b.ptlt = Date.now() - a.o,
        b);
        var c = a.j;
        c && (b.pnk = c);
        (c = a.l) && (b.pnc = c);
        (c = a.A) && (b.pnmm = c);
        (a = a.g) && (b.pns = a);
        return b
    };
    var Zq = function() {
        Ln.call(this);
        this.fullscreen = !1;
        this.volume = void 0;
        this.l = !1;
        this.mediaTime = -1
    };
    w(Zq, Ln);
    var $q = function(a) {
        return Bp(a.volume) && 0 < a.volume
    };
    var br = function(a, b, c, d) {
        c = void 0 === c ? !0 : c;
        d = void 0 === d ? function() {
            return !0
        }
        : d;
        return function(e) {
            var f = e[a];
            if (Array.isArray(f) && d(e))
                return ar(f, b, c)
        }
    }
      , cr = function(a, b) {
        return function(c) {
            return b(c) ? c[a] : void 0
        }
    }
      , dr = function(a) {
        return function(b) {
            for (var c = 0; c < a.length; c++)
                if (a[c] === b.e || void 0 === a[c] && !b.hasOwnProperty("e"))
                    return !0;
            return !1
        }
    }
      , ar = function(a, b, c) {
        return void 0 === c || c ? Kb(a, function(d, e) {
            return Ub(b, e)
        }) : Lb(b, function(d, e, f) {
            return a.slice(0 < e ? f[e - 1] + 1 : 0, d + 1).reduce(function(g, h) {
                return g + h
            }, 0)
        })
    };
    var er = dr([void 0, 1, 2, 3, 4, 8, 16])
      , fr = dr([void 0, 4, 8, 16])
      , gr = {
        sv: "sv",
        v: "v",
        cb: "cb",
        e: "e",
        nas: "nas",
        msg: "msg",
        "if": "if",
        sdk: "sdk",
        p: "p",
        p0: cr("p0", fr),
        p1: cr("p1", fr),
        p2: cr("p2", fr),
        p3: cr("p3", fr),
        cp: "cp",
        tos: "tos",
        mtos: "mtos",
        amtos: "amtos",
        mtos1: br("mtos1", [0, 2, 4], !1, fr),
        mtos2: br("mtos2", [0, 2, 4], !1, fr),
        mtos3: br("mtos3", [0, 2, 4], !1, fr),
        mcvt: "mcvt",
        ps: "ps",
        scs: "scs",
        bs: "bs",
        vht: "vht",
        mut: "mut",
        a: "a",
        a0: cr("a0", fr),
        a1: cr("a1", fr),
        a2: cr("a2", fr),
        a3: cr("a3", fr),
        ft: "ft",
        dft: "dft",
        at: "at",
        dat: "dat",
        as: "as",
        vpt: "vpt",
        gmm: "gmm",
        std: "std",
        efpf: "efpf",
        swf: "swf",
        nio: "nio",
        px: "px",
        nnut: "nnut",
        vmer: "vmer",
        vmmk: "vmmk",
        vmiec: "vmiec",
        nmt: "nmt",
        tcm: "tcm",
        bt: "bt",
        pst: "pst",
        vpaid: "vpaid",
        dur: "dur",
        vmtime: "vmtime",
        dtos: "dtos",
        dtoss: "dtoss",
        dvs: "dvs",
        dfvs: "dfvs",
        dvpt: "dvpt",
        fmf: "fmf",
        vds: "vds",
        is: "is",
        i0: "i0",
        i1: "i1",
        i2: "i2",
        i3: "i3",
        ic: "ic",
        cs: "cs",
        c: "c",
        c0: cr("c0", fr),
        c1: cr("c1", fr),
        c2: cr("c2", fr),
        c3: cr("c3", fr),
        mc: "mc",
        nc: "nc",
        mv: "mv",
        nv: "nv",
        qmt: cr("qmtos", er),
        qnc: cr("qnc", er),
        qmv: cr("qmv", er),
        qnv: cr("qnv", er),
        raf: "raf",
        rafc: "rafc",
        lte: "lte",
        ces: "ces",
        tth: "tth",
        femt: "femt",
        femvt: "femvt",
        emc: "emc",
        emuc: "emuc",
        emb: "emb",
        avms: "avms",
        nvat: "nvat",
        qi: "qi",
        psm: "psm",
        psv: "psv",
        psfv: "psfv",
        psa: "psa",
        pnk: "pnk",
        pnc: "pnc",
        pnmm: "pnmm",
        pns: "pns",
        ptlt: "ptlt",
        pngs: "pings",
        veid: "veid",
        ssb: "ssb",
        ss0: cr("ss0", fr),
        ss1: cr("ss1", fr),
        ss2: cr("ss2", fr),
        ss3: cr("ss3", fr),
        dc_rfl: "urlsigs",
        obd: "obd",
        omidp: "omidp",
        omidr: "omidr",
        omidv: "omidv",
        omida: "omida",
        omids: "omids",
        omidpv: "omidpv",
        omidam: "omidam",
        omidct: "omidct",
        omidia: "omidia",
        omiddc: "omiddc",
        omidlat: "omidlat",
        omiddit: "omiddit",
        nopd: "nopd",
        co: "co"
    }
      , hr = Object.assign({}, gr, {
        avid: function(a) {
            return function() {
                return a
            }
        }("audio"),
        avas: "avas",
        vs: "vs"
    })
      , ir = {
        atos: "atos",
        avt: br("atos", [2]),
        davs: "davs",
        dafvs: "dafvs",
        dav: "dav",
        ss: function(a, b) {
            return function(c) {
                return void 0 === c[a] && void 0 !== b ? b : c[a]
            }
        }("ss", 0),
        t: "t"
    };
    var jr = function() {
        this.j = this.g = ""
    };
    var kr = function() {}
      , lr = function(a, b) {
        var c = {};
        if (void 0 !== a)
            if (null != b)
                for (var d in b) {
                    var e = b[d];
                    d in Object.prototype || null != e && (c[d] = "function" === typeof e ? e(a) : a[e])
                }
            else
                ih(c, a);
        return cq(aq(new Zp, c))
    };
    var mr = function() {
        var a = {};
        this.j = (a.vs = [1, 0],
        a.vw = [0, 1],
        a.am = [2, 2],
        a.a = [4, 4],
        a.f = [8, 8],
        a.bm = [16, 16],
        a.b = [32, 32],
        a.avw = [0, 64],
        a.avs = [64, 0],
        a.pv = [256, 256],
        a.gdr = [0, 512],
        a.p = [0, 1024],
        a.r = [0, 2048],
        a.m = [0, 4096],
        a.um = [0, 8192],
        a.ef = [0, 16384],
        a.s = [0, 32768],
        a.pmx = [0, 16777216],
        a.mut = [33554432, 33554432],
        a.umutb = [67108864, 67108864],
        a.tvoff = [134217728, 134217728],
        a);
        this.g = {};
        for (var b in this.j)
            0 < this.j[b][1] && (this.g[b] = 0);
        this.l = 0
    };
    mr.prototype.reportEvent = function(a) {
        var b = this.j[a]
          , c = b[1];
        this.l += b[0];
        0 < c && 0 == this.g[a] && (this.g[a] = 1)
    }
    ;
    var nr = function(a) {
        var b = Zg(a.j), c = 0, d;
        for (d in a.g)
            Ub(b, d) && 1 == a.g[d] && (c += a.j[d][1],
            a.g[d] = 2);
        return c
    }
      , or = function(a) {
        var b = 0, c;
        for (c in a.g) {
            var d = a.g[c];
            if (1 == d || 2 == d)
                b += a.j[c][1]
        }
        return b
    };
    var pr = function() {
        this.g = this.j = 0
    };
    pr.prototype.getValue = function() {
        return this.j
    }
    ;
    var qr = function(a, b, c) {
        32 <= b || (a.g & 1 << b && !c ? a.j &= ~(1 << b) : a.g & 1 << b || !c || (a.j |= 1 << b),
        a.g |= 1 << b)
    };
    var rr = function() {
        yq.call(this);
        this.l = new kq;
        this.U = this.D = this.M = 0;
        this.J = -1;
        this.ka = new kq;
        this.o = new kq;
        this.g = new nq;
        this.B = this.A = -1;
        this.F = new kq;
        this.fa = 2E3;
        this.T = new pr;
        this.aa = new pr;
        this.Z = new pr
    };
    w(rr, yq);
    var sr = function(a, b, c) {
        var d = a.U;
        Wo || c || -1 == a.J || (d += b - a.J);
        return d
    };
    rr.prototype.L = function(a, b, c, d) {
        if (!b.l) {
            yq.prototype.L.call(this, a, b, c, d);
            var e = $q(b) && $q(c)
              , f = .5 <= (d ? Math.min(b.Y, c.Y) : c.Y);
            Bp(b.volume) && (this.A = -1 != this.A ? Math.min(this.A, b.volume) : b.volume,
            this.B = Math.max(this.B, b.volume));
            f && (this.M += a,
            this.D += e ? a : 0);
            wq(this.g, b.Y, c.Y, b.g, a, d, e);
            lq(this.l, !0, a);
            lq(this.o, e, a);
            lq(this.F, c.fullscreen, a);
            lq(this.ka, e && !f, a);
            a = Math.floor(b.mediaTime / 1E3);
            qr(this.T, a, b.isVisible());
            qr(this.aa, a, 1 <= b.Y);
            qr(this.Z, a, $q(b))
        }
    }
    ;
    var tr = function() {
        this.l = !1
    };
    tr.prototype.j = function(a) {
        this.l || (this.g(a) ? (a = this.L.report(this.A, a),
        this.o |= a,
        a = 0 == a) : a = !1,
        this.l = a)
    }
    ;
    var ur = function(a, b) {
        this.l = !1;
        this.A = a;
        this.L = b;
        this.o = 0
    };
    w(ur, tr);
    ur.prototype.g = function() {
        return !0
    }
    ;
    ur.prototype.B = function() {
        return !1
    }
    ;
    ur.prototype.getId = function() {
        var a = this
          , b = ch(function(c) {
            return c == a.A
        });
        return ep[b].toString()
    }
    ;
    ur.prototype.toString = function() {
        var a = "";
        this.B() && (a += "c");
        this.l && (a += "s");
        0 < this.o && (a += ":" + this.o);
        return this.getId() + a
    }
    ;
    var vr = function(a, b) {
        ur.call(this, a, b);
        this.C = []
    };
    w(vr, ur);
    vr.prototype.j = function(a, b) {
        b = void 0 === b ? null : b;
        null != b && this.C.push(b);
        ur.prototype.j.call(this, a)
    }
    ;
    var wr = function() {};
    var xr = function() {};
    w(xr, wr);
    xr.prototype.j = function() {
        return null
    }
    ;
    xr.prototype.l = function() {
        return []
    }
    ;
    var yr = function(a, b, c, d) {
        Up.call(this, a, b, c, d)
    };
    w(yr, Up);
    l = yr.prototype;
    l.td = function() {
        if (this.l) {
            var a = this.l
              , b = this.j.g.l;
            try {
                try {
                    var c = zp(a.getBoundingClientRect())
                } catch (n) {
                    c = new H(0,0,0,0)
                }
                var d = c.right - c.left
                  , e = c.bottom - c.top
                  , f = pp(a, b)
                  , g = f.x
                  , h = f.y;
                var k = new H(Math.round(h),Math.round(g + d),Math.round(h + e),Math.round(g))
            } catch (n) {
                k = ik(Gq)
            }
            this.g = k
        }
    }
    ;
    l.we = function() {
        this.o = this.j.A.g
    }
    ;
    l.Ie = function(a) {
        var b = 1 == ao(this.P, "od");
        return Lq(a, this.o, this.l, b)
    }
    ;
    l.xe = function() {
        this.timestamp = Xo()
    }
    ;
    l.fb = function() {
        this.xe();
        this.td();
        if (this.l && "number" === typeof this.l.videoWidth && "number" === typeof this.l.videoHeight) {
            var a = this.l;
            var b = new F(a.videoWidth,a.videoHeight);
            a = this.g;
            var c = a.getWidth()
              , d = a.getHeight()
              , e = b.width;
            b = b.height;
            0 >= e || 0 >= b || 0 >= c || 0 >= d || (e /= b,
            a = ik(a),
            e > c / d ? (c /= e,
            d = (d - c) / 2,
            0 < d && (d = a.top + d,
            a.top = Math.round(d),
            a.bottom = Math.round(d + c))) : (d *= e,
            c = Math.round((c - d) / 2),
            0 < c && (c = a.left + c,
            a.left = Math.round(c),
            a.right = Math.round(c + d))));
            this.g = a
        }
        this.we();
        a = this.g;
        c = this.o;
        a = a.left <= c.right && c.left <= a.right && a.top <= c.bottom && c.top <= a.bottom ? new H(Math.max(a.top, c.top),Math.min(a.right, c.right),Math.min(a.bottom, c.bottom),Math.max(a.left, c.left)) : new H(0,0,0,0);
        c = a.top >= a.bottom || a.left >= a.right ? new H(0,0,0,0) : a;
        a = this.j.A;
        b = e = d = 0;
        0 < (this.g.bottom - this.g.top) * (this.g.right - this.g.left) && (this.Ie(c) ? c = new H(0,0,0,0) : (d = Jp().o,
        b = new H(0,d.height,d.width,0),
        d = Hq(c, this.g),
        e = Hq(c, Jp().g),
        b = Hq(c, b)));
        c = c.top >= c.bottom || c.left >= c.right ? new H(0,0,0,0) : jk(c, -this.g.left, -this.g.top);
        Kp() || (e = d = 0);
        this.J = new $o(a,this.g,c,d,e,this.timestamp,b)
    }
    ;
    l.getName = function() {
        return this.j.getName()
    }
    ;
    var zr = new H(0,0,0,0)
      , Ar = function(a, b, c) {
        Up.call(this, null, a, b, c);
        this.C = a.isActive();
        this.B = 0
    };
    w(Ar, yr);
    l = Ar.prototype;
    l.pd = function() {
        this.A();
        return !0
    }
    ;
    l.jb = function() {
        yr.prototype.fb.call(this)
    }
    ;
    l.xe = function() {}
    ;
    l.td = function() {}
    ;
    l.fb = function() {
        this.A();
        yr.prototype.fb.call(this)
    }
    ;
    l.Hb = function(a) {
        a = a.isActive();
        a !== this.C && (a ? this.A() : (Jp().g = new H(0,0,0,0),
        this.g = new H(0,0,0,0),
        this.o = new H(0,0,0,0),
        this.timestamp = -1));
        this.C = a
    }
    ;
    function Br(a) {
        return [a.top, a.left, a.bottom, a.right]
    }
    var Cr = {}
      , Dr = (Cr.firstquartile = 0,
    Cr.midpoint = 1,
    Cr.thirdquartile = 2,
    Cr.complete = 3,
    Cr)
      , Er = function(a, b, c, d, e, f) {
        f = void 0 === f ? new xr : f;
        Oq.call(this, b, c, d);
        this.Sd = e;
        this.zd = 0;
        this.ia = {};
        this.ha = new mr;
        this.jf = {};
        this.ma = "";
        this.pb = null;
        this.Ra = !1;
        this.g = [];
        this.Xa = f.j();
        this.B = f.l();
        this.o = null;
        this.l = -1;
        this.Z = this.F = void 0;
        this.K = this.I = 0;
        this.T = -1;
        this.ka = this.ga = !1;
        this.O = this.D = this.j = this.Ob = this.Qa = 0;
        new nq;
        this.U = this.aa = 0;
        this.fa = -1;
        this.la = 0;
        this.C = Mg;
        this.M = [this.Jc()];
        this.Eb = 2;
        this.Bb = {};
        this.Bb.pause = "p";
        this.Bb.resume = "r";
        this.Bb.skip = "s";
        this.Bb.mute = "m";
        this.Bb.unmute = "um";
        this.Bb.exitfullscreen = "ef";
        this.A = null;
        this.Ha = this.Ia = !1;
        this.Db = Math.floor(Date.now() / 1E3 - 1704067200);
        this.W = 0
    };
    w(Er, Oq);
    Er.prototype.Oa = function() {
        return !0
    }
    ;
    var Fr = function(a) {
        a.Ge = !0;
        0 != a.la && (a.la = 3)
    }
      , Gr = function(a) {
        return void 0 === a ? a : Number(a) ? up(a, 3) : 0
    };
    l = Er.prototype;
    l.De = function(a) {
        return Rq(this, a, Math.max(1E4, this.l / 3))
    }
    ;
    l.ge = function(a, b, c, d, e, f, g) {
        var h = this
          , k = this.C(this) || {};
        ih(k, e);
        this.l = k.duration || this.l;
        this.F = k.isVpaid || this.F;
        this.Z = k.isYouTube || this.Z;
        so();
        this.Ha = !1;
        e = Hr(this, b);
        1 === Ir(this) && (f = e);
        Oq.prototype.ge.call(this, a, b, c, d, k, f, g);
        this.Xa && this.Xa.l && Ib(this.B, function(n) {
            n.j(h)
        })
    }
    ;
    l.he = function(a, b, c) {
        Oq.prototype.he.call(this, a, b, c);
        Jr(this).L(a, b, this.qa, c);
        this.ka = $q(this.qa) && $q(b);
        -1 == this.T && this.ga && (this.T = this.pa().l.g);
        this.ha.l = 0;
        a = this.Va();
        b.isVisible() && this.ha.reportEvent("vs");
        a && this.ha.reportEvent("vw");
        Bp(b.volume) && this.ha.reportEvent("am");
        $q(b) ? this.ha.reportEvent("a") : this.ha.reportEvent("mut");
        this.Ib && this.ha.reportEvent("f");
        -1 != b.j && (this.ha.reportEvent("bm"),
        1 == b.j && (this.ha.reportEvent("b"),
        $q(b) && this.ha.reportEvent("umutb")));
        $q(b) && b.isVisible() && this.ha.reportEvent("avs");
        this.ka && a && this.ha.reportEvent("avw");
        0 < b.Y && this.ha.reportEvent("pv");
        Kr(this, this.pa().l.g, !0) && this.ha.reportEvent("gdr");
        2E3 <= tq(this.pa().j, 1) && this.ha.reportEvent("pmx");
        this.Ha && this.ha.reportEvent("tvoff")
    }
    ;
    l.Jc = function() {
        return new rr
    }
    ;
    l.pa = function() {
        return this.Vc
    }
    ;
    var Jr = function(a, b) {
        return a.M[null != b && b < a.M.length ? b : a.M.length - 1]
    };
    Er.prototype.Dd = function() {
        return new Zq
    }
    ;
    Er.prototype.qd = function(a, b, c, d) {
        a = Oq.prototype.qd.call(this, a, b, c, void 0 === d ? -1 : d);
        a.fullscreen = this.Ib;
        a.l = 2 == this.la;
        a.volume = c.volume;
        Bp(a.volume) || (this.Qa++,
        b = this.qa,
        Bp(b.volume) && (a.volume = b.volume));
        c = c.currentTime;
        a.mediaTime = void 0 !== c && 0 <= c ? c : -1;
        return a
    }
    ;
    var Ir = function(a) {
        var b = !!ao(N().P, "umt");
        return a.F || !b && !a.Z ? 0 : 1
    }
      , Hr = function(a, b) {
        2 == a.la ? b = 0 : -1 == a.Mc ? b = 0 : (b -= a.Mc,
        b = b > Math.max(1E4, a.l / 3) ? 0 : b);
        var c = a.C(a) || {};
        c = void 0 !== c.currentTime ? c.currentTime : a.I;
        var d = c - a.I
          , e = 0;
        0 <= d ? (a.K += b,
        a.U += Math.max(b - d, 0),
        e = Math.min(d, a.K)) : a.aa += Math.abs(d);
        0 != d && (a.K = 0);
        -1 == a.fa && 0 < d && (a.fa = 0 <= Vo ? Xo() - Vo : -1);
        a.I = c;
        return e
    };
    Er.prototype.wd = function(a) {
        return Jp(),
        this.Ib ? 1 : Oq.prototype.wd.call(this, a)
    }
    ;
    Er.prototype.xa = function() {
        return 1
    }
    ;
    Er.prototype.getDuration = function() {
        return this.l
    }
    ;
    var Lr = function(a, b) {
        Nb(a.B, function(c) {
            return c.A == b.A
        }) || a.B.push(b)
    }
      , Mr = function(a) {
        var b = rq(a.pa().g, 1);
        return Kr(a, b)
    }
      , Kr = function(a, b, c) {
        return 15E3 <= b ? !0 : a.ga ? (void 0 === c ? 0 : c) ? !0 : 0 < a.l ? b >= a.l / 2 : 0 < a.T ? b >= a.T : !1 : !1
    }
      , Nr = function(a) {
        var b = {}
          , c = Jp();
        b.insideIframe = c.l;
        b.unmeasurable = a.Ta;
        b.position = a.vb();
        b.exposure = a.qa.Y;
        b.documentSize = c.A;
        b.viewportSize = new F(c.g.getWidth(),c.g.getHeight());
        null != a.A && (b.presenceData = a.A);
        b.screenShare = a.qa.sa;
        return b
    }
      , Or = function(a) {
        var b = up(a.qa.Y, 2)
          , c = a.ha.l
          , d = a.qa
          , e = Jr(a)
          , f = Gr(e.A)
          , g = Gr(e.B)
          , h = Gr(d.volume)
          , k = up(e.C, 2)
          , n = up(e.I, 2)
          , m = up(d.Y, 2)
          , p = up(e.K, 2)
          , q = up(e.O, 2);
        d = up(d.sa, 2);
        a = ik(a.vb());
        a.round();
        e = zq(e, !1);
        return {
            lh: b,
            ac: c,
            Wc: f,
            Sc: g,
            Rb: h,
            Xc: k,
            Tc: n,
            Y: m,
            Yc: p,
            Uc: q,
            sa: d,
            position: a,
            Zc: e
        }
    }
      , Qr = function(a, b) {
        Pr(a.g, b, function() {
            return {
                lh: 0,
                ac: void 0,
                Wc: -1,
                Sc: -1,
                Rb: -1,
                Xc: -1,
                Tc: -1,
                Y: -1,
                Yc: -1,
                Uc: -1,
                sa: -1,
                position: void 0,
                Zc: []
            }
        });
        a.g[b] = Or(a)
    }
      , Pr = function(a, b, c) {
        for (var d = a.length; d < b + 1; )
            a.push(c()),
            d++
    }
      , Tr = function(a, b, c) {
        var d = a.jf[b];
        if (null != d)
            return d;
        d = Rr(a, b);
        var e = ch(function(f) {
            return f == b
        });
        a = Sr(a, d, d, c, Dr[dh[e]]);
        "fully_viewable_audible_half_duration_impression" == b && (a.std = "csm");
        return a
    }
      , Ur = function(a, b, c) {
        var d = [b];
        if (a != b || c != b)
            d.unshift(a),
            d.push(c);
        return d
    }
      , Sr = function(a, b, c, d, e) {
        if (a.Ta)
            return {
                "if": 0,
                vs: 0
            };
        var f = ik(a.vb());
        f.round();
        var g = Jp()
          , h = N()
          , k = a.pa()
          , n = a.ca ? a.ca.getName() : "ns"
          , m = {};
        m["if"] = g.l ? 1 : void 0;
        m.sdk = a.o ? a.o : void 0;
        m.t = a.Zg;
        m.p = [f.top, f.left, f.bottom, f.right];
        m.tos = pq(k.j, !1);
        m.mtos = zq(k);
        m.mcvt = k.W.l;
        m.ps = void 0;
        m.vht = sr(k, Xo(), 2 == a.la);
        m.mut = k.ka.l;
        m.a = Gr(a.qa.volume);
        m.mv = Gr(k.B);
        m.fs = a.Ib ? 1 : 0;
        m.ft = k.F.g;
        m.at = k.o.g;
        m.as = 0 < k.A ? 1 : 0;
        m.atos = pq(k.g);
        m.ssb = pq(k.ga, !1);
        m.amtos = sq(k.g, !1);
        m.uac = a.Qa;
        m.vpt = k.l.g;
        "nio" == n && (m.nio = 1,
        m.avms = "nio");
        m.gmm = "4";
        m.gdr = Kr(a, k.l.g, !0) ? 1 : 0;
        m.efpf = a.Eb;
        if ("gsv" == n || "nis" == n)
            f = a.ca,
            0 < f.B && (m.nnut = f.B);
        m.tcm = Ir(a);
        m.nmt = a.aa;
        m.bt = a.U;
        m.pst = a.fa;
        m.vpaid = a.F;
        m.dur = a.l;
        m.vmtime = a.I;
        m.is = a.ha.l;
        1 <= a.g.length && (m.i0 = a.g[0].ac,
        m.a0 = [a.g[0].Rb],
        m.c0 = [a.g[0].Y],
        m.ss0 = [a.g[0].sa],
        f = a.g[0].position,
        m.p0 = f ? Br(f) : void 0);
        2 <= a.g.length && (m.i1 = a.g[1].ac,
        m.a1 = Ur(a.g[1].Wc, a.g[1].Rb, a.g[1].Sc),
        m.c1 = Ur(a.g[1].Xc, a.g[1].Y, a.g[1].Tc),
        m.ss1 = Ur(a.g[1].Yc, a.g[1].sa, a.g[1].Uc),
        f = a.g[1].position,
        m.p1 = f ? Br(f) : void 0,
        m.mtos1 = a.g[1].Zc);
        3 <= a.g.length && (m.i2 = a.g[2].ac,
        m.a2 = Ur(a.g[2].Wc, a.g[2].Rb, a.g[2].Sc),
        m.c2 = Ur(a.g[2].Xc, a.g[2].Y, a.g[2].Tc),
        m.ss2 = Ur(a.g[2].Yc, a.g[2].sa, a.g[2].Uc),
        f = a.g[2].position,
        m.p2 = f ? Br(f) : void 0,
        m.mtos2 = a.g[2].Zc);
        4 <= a.g.length && (m.i3 = a.g[3].ac,
        m.a3 = Ur(a.g[3].Wc, a.g[3].Rb, a.g[3].Sc),
        m.c3 = Ur(a.g[3].Xc, a.g[3].Y, a.g[3].Tc),
        m.ss3 = Ur(a.g[3].Yc, a.g[3].sa, a.g[3].Uc),
        f = a.g[3].position,
        m.p3 = f ? Br(f) : void 0,
        m.mtos3 = a.g[3].Zc);
        m.cs = or(a.ha);
        b && (m.ic = nr(a.ha),
        m.dvpt = k.l.j,
        m.dvs = uq(k.j, .5),
        m.dfvs = uq(k.j, 1),
        m.davs = uq(k.g, .5),
        m.dafvs = uq(k.g, 1),
        c && (k.l.j = 0,
        vq(k.j),
        vq(k.g)),
        a.Va() && (m.dtos = k.M,
        m.dav = k.D,
        m.dtoss = a.zd + 1,
        c && (k.M = 0,
        k.D = 0,
        a.zd++)),
        m.dat = k.o.j,
        m.dft = k.F.j,
        c && (k.o.j = 0,
        k.F.j = 0));
        m.ps = [g.A.width, g.A.height];
        m.bs = [g.g.getWidth(), g.g.getHeight()];
        m.scs = [g.o.width, g.o.height];
        m.dom = g.domain;
        a.Ob && (m.vds = a.Ob);
        if (0 < a.B.length || a.Xa)
            b = Zb(a.B),
            a.Xa && b.push(a.Xa),
            m.pings = Lb(b, function(p) {
                return p.toString()
            });
        b = Lb(Kb(a.B, function(p) {
            return p.B()
        }), function(p) {
            return p.getId()
        });
        $b(b);
        m.ces = b;
        a.j && (m.vmer = a.j);
        a.D && (m.vmmk = a.D);
        a.O && (m.vmiec = a.O);
        m.avms = a.ca ? a.ca.getName() : "ns";
        a.ca && ih(m, a.ca.ib());
        d ? (m.c = up(a.qa.Y, 2),
        m.ss = up(a.qa.sa, 2)) : m.tth = Xo() - Uo;
        m.mc = up(k.I, 2);
        m.nc = up(k.C, 2);
        m.mv = Gr(k.B);
        m.nv = Gr(k.A);
        m.lte = up(a.Jd, 2);
        d = Jr(a, e);
        zq(k);
        m.qmtos = zq(d);
        m.qnc = up(d.C, 2);
        m.qmv = Gr(d.B);
        m.qnv = Gr(d.A);
        m.qas = 0 < d.A ? 1 : 0;
        m.qi = a.ma;
        m.avms || (m.avms = "geo");
        m.psm = k.T.g;
        m.psv = k.T.getValue();
        m.psfv = k.aa.getValue();
        m.psa = k.Z.getValue();
        h = co(h.P);
        h.length && (m.veid = h);
        a.A && ih(m, Yq(a.A));
        m.avas = a.Hc();
        m.vs = a.Fe();
        m.co = Vr(a);
        return m
    }
      , Rr = function(a, b) {
        if (Ub(dp, b))
            return !0;
        var c = a.ia[b];
        return void 0 !== c ? (a.ia[b] = !0,
        !c) : !1
    };
    Er.prototype.Fe = function() {
        return this.Ta ? 2 : Mr(this) ? 5 : this.Va() ? 4 : 3
    }
    ;
    Er.prototype.Hc = function() {
        return this.Ia ? 2E3 <= this.pa().o.l ? 4 : 3 : 2
    }
    ;
    var Vr = function(a) {
        var b = a.W.toString(10).padStart(2, "0");
        b = "" + a.Db + b;
        99 > a.W && a.W++;
        return b
    };
    var Wr = Date.now()
      , Zr = function() {
        this.g = {};
        var a = G();
        Xr(this, a, document);
        var b = Yr();
        try {
            if ("1" == b) {
                for (var c = a.parent; c != a.top; c = c.parent)
                    Xr(this, c, c.document);
                Xr(this, a.top, a.top.document)
            }
        } catch (d) {}
    }
      , Yr = function() {
        var a = document.documentElement;
        try {
            if (!pi(G().top))
                return "2";
            var b = []
              , c = G(a.ownerDocument);
            for (a = c; a != c.top; a = a.parent)
                if (a.frameElement)
                    b.push(a.frameElement);
                else
                    break;
            return b && 0 != b.length ? "1" : "0"
        } catch (d) {
            return "2"
        }
    }
      , Xr = function(a, b, c) {
        Fq(c, "mousedown", function() {
            return $r(a)
        }, 301);
        Fq(b, "scroll", function() {
            return as(a)
        }, 302);
        Fq(c, "touchmove", function() {
            return bs(a)
        }, 303);
        Fq(c, "mousemove", function() {
            return cs(a)
        }, 304);
        Fq(c, "keydown", function() {
            return ds(a)
        }, 305)
    }
      , $r = function(a) {
        Ug(a.g, function(b) {
            1E5 < b.l || ++b.l
        })
    }
      , as = function(a) {
        Ug(a.g, function(b) {
            1E5 < b.g || ++b.g
        })
    }
      , bs = function(a) {
        Ug(a.g, function(b) {
            1E5 < b.g || ++b.g
        })
    }
      , ds = function(a) {
        Ug(a.g, function(b) {
            1E5 < b.j || ++b.j
        })
    }
      , cs = function(a) {
        Ug(a.g, function(b) {
            1E5 < b.A || ++b.A
        })
    };
    var es = function() {
        this.g = [];
        this.j = []
    }
      , fs = function(a, b) {
        return Ob(a.g, function(c) {
            return c.ma == b
        })
    }
      , gs = function(a, b) {
        return b ? Ob(a.g, function(c) {
            return c.ta.nb == b
        }) : null
    }
      , hs = function(a, b) {
        return Ob(a.j, function(c) {
            return 2 == c.xa() && c.ma == b
        })
    }
      , js = function() {
        var a = is;
        return 0 == a.g.length ? a.j : 0 == a.j.length ? a.g : Yb(a.j, a.g)
    };
    es.prototype.reset = function() {
        this.g = [];
        this.j = []
    }
    ;
    var ks = function(a, b) {
        a = 1 == b.xa() ? a.g : a.j;
        var c = Rb(a, function(d) {
            return d == b
        });
        return -1 != c ? (a.splice(c, 1),
        b.ca && b.ca.qc(),
        b.V(),
        !0) : !1
    }
      , ls = function(a) {
        var b = is;
        if (ks(b, a)) {
            switch (a.xa()) {
            case 0:
                var c = function() {
                    return null
                };
            case 2:
                c = function() {
                    return hs(b, a.ma)
                }
                ;
                break;
            case 1:
                c = function() {
                    return fs(b, a.ma)
                }
            }
            for (var d = c(); d; d = c())
                ks(b, d)
        }
    }
      , ms = function(a) {
        var b = is;
        a = Kb(a, function(c) {
            return !gs(b, c.ta.nb)
        });
        b.g.push.apply(b.g, ia(a))
    }
      , ns = function(a) {
        var b = [];
        Ib(a, function(c) {
            Nb(is.g, function(d) {
                return d.ta.nb === c.ta.nb && d.ma === c.ma
            }) || (is.g.push(c),
            b.push(c))
        })
    }
      , is = I(es);
    var os = function() {
        this.g = this.j = null
    }
      , ps = function(a, b) {
        if (null == a.j)
            return !1;
        var c = function(d, e) {
            b(d, e)
        };
        a.g = Ob(a.j, function(d) {
            return null != d && d.oe()
        });
        a.g && (a.g.init(c) ? Rp(a.g.g) : b(a.g.g.Fb(), a.g));
        return null != a.g
    };
    var rs = function(a) {
        a = qs(a);
        Vp.call(this, a.length ? a[a.length - 1] : new Np(O,0));
        this.l = a;
        this.j = null
    };
    w(rs, Vp);
    l = rs.prototype;
    l.getName = function() {
        return (this.j ? this.j : this.g).getName()
    }
    ;
    l.ib = function() {
        return (this.j ? this.j : this.g).ib()
    }
    ;
    l.Sa = function() {
        return (this.j ? this.j : this.g).Sa()
    }
    ;
    l.init = function(a) {
        var b = !1;
        Ib(this.l, function(c) {
            c.initialize() && (b = !0)
        });
        b && (this.A = a,
        Qp(this.g, this));
        return b
    }
    ;
    l.V = function() {
        Ib(this.l, function(a) {
            a.V()
        });
        Vp.prototype.V.call(this)
    }
    ;
    l.oe = function() {
        return Nb(this.l, function(a) {
            return a.F()
        })
    }
    ;
    l.Pb = function() {
        return Nb(this.l, function(a) {
            return a.F()
        })
    }
    ;
    l.rc = function(a, b, c) {
        return new yr(a,this.g,b,c)
    }
    ;
    l.jb = function(a) {
        this.j = a.j
    }
    ;
    var qs = function(a) {
        if (!a.length)
            return [];
        a = Kb(a, function(c) {
            return null != c && c.F()
        });
        for (var b = 1; b < a.length; b++)
            Qp(a[b - 1], a[b]);
        return a
    };
    var ts = {
        threshold: [0, .3, .5, .75, 1]
    }
      , us = function(a, b, c, d) {
        Up.call(this, a, b, c, d);
        this.D = this.L = this.B = this.C = this.A = null
    };
    w(us, yr);
    us.prototype.pd = function() {
        var a = this;
        this.D || (this.D = Xo());
        if (Oo(298, function() {
            return vs(a)
        }))
            return !0;
        Pp(this.j, "msf");
        return !1
    }
    ;
    us.prototype.qc = function() {
        if (this.A && this.l)
            try {
                this.A.unobserve(this.l),
                this.C ? (this.C.unobserve(this.l),
                this.C = null) : this.B && (this.B.disconnect(),
                this.B = null)
            } catch (a) {}
    }
    ;
    var ws = function(a) {
        return a.A && a.A.takeRecords ? a.A.takeRecords() : []
    }
      , vs = function(a) {
        if (!a.l)
            return !1;
        var b = a.l
          , c = a.j.g.l
          , d = N().g.g;
        a.A = new c.IntersectionObserver(yo(d, function(e) {
            return xs(a, e)
        }),ts);
        d = yo(d, function() {
            a.A.unobserve(b);
            a.A.observe(b);
            xs(a, ws(a))
        });
        c.ResizeObserver ? (a.C = new c.ResizeObserver(d),
        a.C.observe(b)) : c.MutationObserver && (a.B = new y.MutationObserver(d),
        a.B.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }));
        a.A.observe(b);
        xs(a, ws(a));
        return !0
    }
      , xs = function(a, b) {
        try {
            if (b.length) {
                a.L || (a.L = Xo());
                var c = ys(b)
                  , d = pp(a.l, a.j.g.l)
                  , e = d.x
                  , f = d.y;
                a.g = new H(Math.round(f),Math.round(e) + c.boundingClientRect.width,Math.round(f) + c.boundingClientRect.height,Math.round(e));
                var g = zp(c.intersectionRect);
                a.o = jk(g, a.g.left - g.left, a.g.top - g.top)
            }
        } catch (h) {
            a.qc(),
            Qo(299, h)
        }
    }
      , ys = function(a) {
        return Mb(a, function(b, c) {
            return b.time > c.time ? b : c
        }, a[0])
    };
    l = us.prototype;
    l.fb = function() {
        var a = ws(this);
        0 < a.length && xs(this, a);
        yr.prototype.fb.call(this)
    }
    ;
    l.td = function() {}
    ;
    l.Ie = function() {
        return !1
    }
    ;
    l.we = function() {}
    ;
    l.ib = function() {
        var a = {};
        return Object.assign(this.j.ib(), (a.niot_obs = this.D,
        a.niot_cbk = this.L,
        a))
    }
    ;
    l.getName = function() {
        return "nio"
    }
    ;
    var zs = function(a) {
        a = void 0 === a ? O : a;
        Vp.call(this, new Np(a,2))
    };
    w(zs, Vp);
    zs.prototype.getName = function() {
        return "nio"
    }
    ;
    zs.prototype.Pb = function() {
        return !Jp().j && null != this.g.g.l.IntersectionObserver
    }
    ;
    zs.prototype.rc = function(a, b, c) {
        return new us(a,this.g,b,c)
    }
    ;
    var Bs = function() {
        var a = As();
        Np.call(this, O.top, a, "geo")
    };
    w(Bs, Np);
    Bs.prototype.aa = function() {
        return Jp().g
    }
    ;
    Bs.prototype.F = function() {
        var a = As();
        this.L !== a && (this.g != this && a > this.g.L && (this.g = this,
        Op(this)),
        this.L = a);
        return 2 == a
    }
    ;
    var As = function() {
        N();
        var a = Jp();
        return a.l || a.j ? 0 : 2
    };
    var Cs = function() {};
    var Ds = function() {
        this.done = !1;
        this.g = {
            Pf: 0,
            te: 0,
            lj: 0,
            Ae: 0,
            Hd: -1,
            Yf: 0,
            Xf: 0,
            Zf: 0,
            Vg: 0
        };
        this.o = null;
        this.B = !1;
        this.l = null;
        this.C = 0;
        this.j = new Lp(this)
    }
      , Gs = function() {
        var a = Es;
        a.B || (a.B = !0,
        Fs(a, function() {
            return a.A.apply(a, ia(Ka.apply(0, arguments)))
        }),
        a.A())
    };
    Ds.prototype.sample = function() {
        Hs(this, js(), !1)
    }
    ;
    var Is = function() {
        I(Cs);
        var a = I(os);
        null != a.g && a.g.g ? Rp(a.g.g) : Fp(Jp())
    }
      , Hs = function(a, b, c) {
        if (!a.done && (a.j.cancel(),
        0 != b.length)) {
            a.l = null;
            try {
                Is();
                var d = Xo();
                N().o = d;
                if (null != I(os).g)
                    for (var e = 0; e < b.length; e++)
                        Sq(b[e], d, c);
                for (d = 0; d < b.length; d++)
                    Tq(b[d]);
                ++a.g.Ae
            } finally {
                c ? Ib(b, function(f) {
                    f.qa.Y = 0
                }) : Mp(a.j)
            }
        }
    }
      , Fs = function(a, b) {
        if (!a.o) {
            b = Po(142, b);
            so();
            var c = yk(go);
            c && Sg(go, c, b, {
                capture: !1
            }) && (a.o = b)
        }
    };
    Ds.prototype.A = function() {
        var a = Kp()
          , b = Xo();
        a ? (Wo || (So = b,
        Ib(is.g, function(c) {
            var d = c.pa();
            d.U = sr(d, b, 1 != c.la)
        })),
        Wo = !0) : (this.C = Js(this, b),
        Wo = !1,
        Uo = b,
        Ib(is.g, function(c) {
            c.Ub && (c.pa().J = b)
        }));
        Hs(this, js(), !a)
    }
    ;
    var Ks = function() {
        var a = I(os);
        if (null != a.g) {
            var b = a.g;
            Ib(js(), function(c) {
                return Qq(c, b)
            })
        }
    }
      , Js = function(a, b) {
        a = a.C;
        Wo && (a += b - So);
        return a
    }
      , Ls = function(a) {
        a = void 0 === a ? function() {
            return {}
        }
        : a;
        Lo.be("av-js");
        Ho.g = .01;
        No([function(b) {
            var c = N()
              , d = {};
            d = (d.bin = c.j,
            d.type = "error",
            d);
            c = bo(c.P);
            if (!Es.l) {
                var e = Es
                  , f = O.document
                  , g = 0 <= To ? Xo() - To : -1
                  , h = Xo();
                -1 == e.g.Hd && (g = h);
                var k = Jp()
                  , n = N()
                  , m = bo(n.P)
                  , p = js();
                try {
                    if (0 < p.length) {
                        var q = k.g;
                        q && (m.bs = [q.getWidth(), q.getHeight()]);
                        var t = k.A;
                        t && (m.ps = [t.width, t.height]);
                        O.screen && (m.scs = [O.screen.width, O.screen.height])
                    } else
                        m.url = encodeURIComponent(O.location.href.substring(0, 512)),
                        f.referrer && (m.referrer = encodeURIComponent(f.referrer.substring(0, 512)));
                    m.tt = g;
                    m.pt = To;
                    m.bin = n.j;
                    void 0 !== O.google_osd_load_pub_page_exp && (m.olpp = O.google_osd_load_pub_page_exp);
                    m.deb = [1, e.g.Pf, e.g.te, e.g.Ae, e.g.Hd, 0, e.j.j, e.g.Yf, e.g.Xf, e.g.Zf, e.g.Vg, -1].join(";");
                    m.tvt = Js(e, h);
                    k.j && (m.inapp = 1);
                    if (null !== O && O != O.top) {
                        0 < p.length && (m.iframe_loc = encodeURIComponent(O.location.href.substring(0, 512)));
                        var v = k.J;
                        m.is = [v.getWidth(), v.getHeight()]
                    }
                } catch (A) {
                    m.error = 1
                }
                Es.l = m
            }
            t = Es.l;
            q = {};
            for (var x in t)
                q[x] = t[x];
            x = N().g;
            if (1 == ao(x.l, "prf")) {
                t = new wo;
                v = x.g;
                e = 0;
                -1 < v.g && (e = v.l.g.now() - v.g);
                v = v.A + e;
                if (null != v && "number" !== typeof v)
                    throw Error("Value of float/double field must be a number, found " + typeof v + ": " + v);
                t = qf(t, 1, v, 0);
                v = x.g;
                t = Wf(t, 5, -1 < v.g ? v.j + 1 : v.j);
                t = Xf(t, 2, x.j.g.l());
                t = Xf(t, 3, x.j.g.j());
                x = Xf(t, 4, x.j.g.g());
                t = {};
                x = (t.pf = Fc(x.g()),
                t)
            } else
                x = {};
            ih(q, x);
            ih(b, d, c, q, a())
        }
        ])
    }
      , Es = I(Ds);
    var Ms = null
      , Ns = ""
      , Os = !1
      , Ps = function() {
        var a = Ms || O;
        if (!a)
            return "";
        var b = [];
        if (!a.location || !a.location.href)
            return "";
        b.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
        a.document && a.document.referrer && b.push("referrer=" + encodeURIComponent(a.document.referrer.substring(0, 512)));
        return b.join("&")
    };
    function Qs() {
        var a = "av.default_js_unreleased_RCxx".match(/_(\d{8})_RC\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+\.\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_RC\d+$/), b;
        if (2 == (null == (b = a) ? void 0 : b.length))
            return a[1];
        a = "av.default_js_unreleased_RCxx".match(/.*_(\d{2})\.(\d{4})\.\d+_RC\d+$/);
        var c;
        return 3 == (null == (c = a) ? void 0 : c.length) ? "20" + a[1] + a[2] : null
    }
    var Rs = function() {
        return "ima_html5_sdk".includes("ima_html5_sdk") ? {
            Ka: "ima",
            La: null
        } : "ima_html5_sdk".includes("ima_native_sdk") ? {
            Ka: "nima",
            La: null
        } : "ima_html5_sdk".includes("admob-native-video-javascript") ? {
            Ka: "an",
            La: null
        } : "av.default_js_unreleased_RCxx".includes("cast_js_sdk") ? {
            Ka: "cast",
            La: Qs()
        } : "av.default_js_unreleased_RCxx".includes("youtube.player.web") ? {
            Ka: "yw",
            La: Qs()
        } : "av.default_js_unreleased_RCxx".includes("outstream_web_client") ? {
            Ka: "out",
            La: Qs()
        } : "av.default_js_unreleased_RCxx".includes("drx_rewarded_web") ? {
            Ka: "r",
            La: Qs()
        } : "av.default_js_unreleased_RCxx".includes("gam_native_web_video") ? {
            Ka: "n",
            La: Qs()
        } : "av.default_js_unreleased_RCxx".includes("admob_interstitial_video") ? {
            Ka: "int",
            La: Qs()
        } : {
            Ka: "j",
            La: null
        }
    }
      , Ss = Rs().Ka
      , Ts = Rs().La;
    var Vs = function(a, b) {
        var c = {
            sv: "962"
        };
        null !== Ts && (c.v = Ts);
        c.cb = Ss;
        c.nas = is.g.length;
        c.msg = a;
        void 0 !== b && (a = Us(b)) && (c.e = ep[a]);
        return c
    }
      , Ws = function(a) {
        return 0 == a.lastIndexOf("custom_metric_viewable", 0)
    }
      , Us = function(a) {
        var b = Ws(a) ? "custom_metric_viewable" : a.toLowerCase();
        return ch(function(c) {
            return c == b
        })
    };
    var Xs = {
        Eh: "visible",
        ph: "audible",
        zi: "time",
        Bi: "timetype"
    }
      , Ys = {
        visible: function(a) {
            return /^(100|[0-9]{1,2})$/.test(a)
        },
        audible: function(a) {
            return "0" == a || "1" == a
        },
        timetype: function(a) {
            return "mtos" == a || "tos" == a
        },
        time: function(a) {
            return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a)
        }
    }
      , Zs = function() {
        this.g = void 0;
        this.j = !1;
        this.l = 0;
        this.A = -1;
        this.o = "tos"
    }
      , $s = function(a) {
        try {
            var b = a.split(",");
            return b.length > Zg(Xs).length ? null : Mb(b, function(c, d) {
                d = d.toLowerCase().split("=");
                if (2 != d.length || void 0 === Ys[d[0]] || !Ys[d[0]](d[1]))
                    throw Error("Entry (" + d[0] + ", " + d[1] + ") is invalid.");
                c[d[0]] = d[1];
                return c
            }, {})
        } catch (c) {
            return null
        }
    }
      , at = function(a, b) {
        if (void 0 == a.g)
            return 0;
        switch (a.o) {
        case "mtos":
            return a.j ? tq(b.g, a.g) : tq(b.j, a.g);
        case "tos":
            return a.j ? rq(b.g, a.g) : rq(b.j, a.g)
        }
        return 0
    };
    var bt = function(a, b, c, d) {
        ur.call(this, b, d);
        this.C = a;
        this.J = c
    };
    w(bt, ur);
    bt.prototype.getId = function() {
        return this.C
    }
    ;
    bt.prototype.B = function() {
        return !0
    }
    ;
    bt.prototype.g = function(a) {
        var b = a.pa()
          , c = a.getDuration();
        return Nb(this.J, function(d) {
            if (void 0 != d.g)
                var e = at(d, b);
            else
                b: {
                    switch (d.o) {
                    case "mtos":
                        e = d.j ? b.o.l : b.l.g;
                        break b;
                    case "tos":
                        e = d.j ? b.o.g : b.l.g;
                        break b
                    }
                    e = 0
                }
            0 == e ? d = !1 : (d = -1 != d.l ? d.l : void 0 !== c && 0 < c ? d.A * c : -1,
            d = -1 != d && e >= d);
            return d
        })
    }
    ;
    var ct = function() {};
    w(ct, kr);
    ct.prototype.g = function(a) {
        var b = new jr;
        b.g = lr(a, gr);
        b.j = lr(a, ir);
        return b
    }
    ;
    var dt = function(a) {
        ur.call(this, "fully_viewable_audible_half_duration_impression", a)
    };
    w(dt, ur);
    dt.prototype.g = function(a) {
        return Mr(a)
    }
    ;
    var et = function(a) {
        this.g = a
    };
    w(et, wr);
    var ft = function(a, b) {
        ur.call(this, a, b)
    };
    w(ft, ur);
    ft.prototype.g = function(a) {
        return a.pa().Va()
    }
    ;
    var gt = function(a) {
        vr.call(this, "measurable_impression", a)
    };
    w(gt, vr);
    gt.prototype.g = function(a) {
        var b = Ub(this.C, ao(N().P, "ovms"));
        return !a.Ta && (0 != a.la || b)
    }
    ;
    var ht = function() {
        et.apply(this, arguments)
    };
    w(ht, et);
    ht.prototype.j = function() {
        return new gt(this.g)
    }
    ;
    ht.prototype.l = function() {
        return [new ft("viewable_impression",this.g), new dt(this.g)]
    }
    ;
    var it = function(a, b, c) {
        Ar.call(this, a, b, c)
    };
    w(it, Ar);
    it.prototype.A = function() {
        var a = Oa("ima.admob.getViewability")
          , b = ao(this.P, "queryid");
        "function" === typeof a && b && a(b)
    }
    ;
    it.prototype.getName = function() {
        return "gsv"
    }
    ;
    var jt = function(a) {
        a = void 0 === a ? O : a;
        Vp.call(this, new Np(a,2))
    };
    w(jt, Vp);
    jt.prototype.getName = function() {
        return "gsv"
    }
    ;
    jt.prototype.Pb = function() {
        var a = Jp();
        N();
        return a.j && !1
    }
    ;
    jt.prototype.rc = function(a, b, c) {
        return new it(this.g,b,c)
    }
    ;
    var kt = function(a, b, c) {
        Ar.call(this, a, b, c)
    };
    w(kt, Ar);
    kt.prototype.A = function() {
        var a = this
          , b = Oa("ima.bridge.getNativeViewability")
          , c = ao(this.P, "queryid");
        "function" === typeof b && c && b(c, function(d) {
            eh(d) && a.B++;
            var e = d.opt_nativeViewVisibleBounds || {}
              , f = d.opt_nativeViewHidden;
            a.g = Ap(d.opt_nativeViewBounds || {});
            var g = a.j.A;
            g.g = f ? ik(zr) : Ap(e);
            a.timestamp = d.opt_nativeTime || -1;
            Jp().g = g.g;
            d = d.opt_nativeVolume;
            void 0 !== d && (g.volume = d)
        })
    }
    ;
    kt.prototype.getName = function() {
        return "nis"
    }
    ;
    var lt = function(a) {
        a = void 0 === a ? O : a;
        Vp.call(this, new Np(a,2))
    };
    w(lt, Vp);
    lt.prototype.getName = function() {
        return "nis"
    }
    ;
    lt.prototype.Pb = function() {
        var a = Jp();
        N();
        return a.j && !1
    }
    ;
    lt.prototype.rc = function(a, b, c) {
        return new kt(this.g,b,c)
    }
    ;
    var mt = function() {
        Np.call(this, O, 2, "mraid");
        this.fa = 0;
        this.K = this.M = !1;
        this.J = null;
        this.j = fp(this.l);
        this.A.g = new H(0,0,0,0);
        this.ga = !1
    };
    w(mt, Np);
    mt.prototype.F = function() {
        return null != this.j.Da
    }
    ;
    mt.prototype.Z = function() {
        var a = {};
        this.fa && (a.mraid = this.fa);
        this.M && (a.mlc = 1);
        a.mtop = this.j.Ug;
        this.J && (a.mse = this.J);
        this.ga && (a.msc = 1);
        a.mcp = this.j.Cc;
        return a
    }
    ;
    mt.prototype.B = function(a) {
        var b = Ka.apply(1, arguments);
        try {
            return this.j.Da[a].apply(this.j.Da, b)
        } catch (c) {
            Qo(538, c, .01, function(d) {
                d.method = a
            })
        }
    }
    ;
    var nt = function(a, b, c) {
        a.B("addEventListener", b, c)
    };
    mt.prototype.initialize = function() {
        var a = this;
        if (this.ua)
            return !this.Yb();
        this.ua = !0;
        if (2 === this.j.Cc)
            return this.J = "ng",
            Pp(this, "w"),
            !1;
        if (1 === this.j.Cc)
            return this.J = "mm",
            Pp(this, "w"),
            !1;
        Jp().L = !0;
        this.l.document.readyState && "complete" == this.l.document.readyState ? ot(this) : Fq(this.l, "load", function() {
            so().setTimeout(Po(292, function() {
                return ot(a)
            }), 100)
        }, 292);
        return !0
    }
    ;
    var ot = function(a) {
        N().A = !!a.B("isViewable");
        nt(a, "viewableChange", pt);
        "loading" === a.B("getState") ? nt(a, "ready", qt) : rt(a)
    }
      , rt = function(a) {
        "string" === typeof a.j.Da.AFMA_LIDAR ? (a.M = !0,
        tt(a)) : (a.j.Cc = 3,
        a.J = "nc",
        Pp(a, "w"))
    }
      , tt = function(a) {
        a.K = !1;
        var b = 1 == ao(N().P, "rmmt")
          , c = !!a.B("isViewable");
        (b ? !c : 1) && so().setTimeout(Po(524, function() {
            a.K || (ut(a),
            Qo(540, Error()),
            a.J = "mt",
            Pp(a, "w"))
        }), 500);
        vt(a);
        nt(a, a.j.Da.AFMA_LIDAR, wt)
    }
      , vt = function(a) {
        var b = 1 == ao(N().P, "sneio")
          , c = void 0 !== a.j.Da.AFMA_LIDAR_EXP_1
          , d = void 0 !== a.j.Da.AFMA_LIDAR_EXP_2;
        (b = b && d) && (a.j.Da.AFMA_LIDAR_EXP_2 = !0);
        c && (a.j.Da.AFMA_LIDAR_EXP_1 = !b)
    }
      , ut = function(a) {
        a.B("removeEventListener", a.j.Da.AFMA_LIDAR, wt);
        a.M = !1
    };
    mt.prototype.T = function() {
        var a = Jp()
          , b = xt(this, "getMaxSize");
        a.g = new H(0,b.width,b.height,0)
    }
    ;
    mt.prototype.U = function() {
        Jp().o = xt(this, "getScreenSize")
    }
    ;
    var xt = function(a, b) {
        if ("loading" === a.B("getState"))
            return new F(-1,-1);
        b = a.B(b);
        if (!b)
            return new F(-1,-1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new F(-1,-1) : new F(a,b)
    };
    mt.prototype.V = function() {
        ut(this);
        Np.prototype.V.call(this)
    }
    ;
    var qt = function() {
        try {
            var a = I(mt);
            a.B("removeEventListener", "ready", qt);
            rt(a)
        } catch (b) {
            Qo(541, b)
        }
    }
      , wt = function(a, b) {
        try {
            var c = I(mt);
            c.K = !0;
            var d = a ? new H(a.y,a.x + a.width,a.y + a.height,a.x) : new H(0,0,0,0);
            var e = Xo()
              , f = Kp();
            var g = new Zo(e,f,c);
            g.g = d;
            g.volume = b;
            c.jb(g)
        } catch (h) {
            Qo(542, h)
        }
    }
      , pt = function(a) {
        var b = N()
          , c = I(mt);
        a && !b.A && (b.A = !0,
        c.ga = !0,
        c.J && Pp(c, "w", !0))
    };
    var Bo = new function(a, b) {
        this.key = a;
        this.defaultValue = void 0 === b ? !1 : b;
        this.valueType = "boolean"
    }
    ("45378663");
    var zt = function() {
        this.l = this.ua = !1;
        this.g = this.j = null;
        var a = {};
        this.M = (a.start = this.rg,
        a.firstquartile = this.mg,
        a.midpoint = this.og,
        a.thirdquartile = this.sg,
        a.complete = this.jg,
        a.error = this.kg,
        a.pause = this.Rd,
        a.resume = this.We,
        a.skip = this.qg,
        a.viewable_impression = this.Na,
        a.mute = this.Nb,
        a.unmute = this.Nb,
        a.fullscreen = this.ng,
        a.exitfullscreen = this.lg,
        a.fully_viewable_audible_half_duration_impression = this.Na,
        a.measurable_impression = this.Na,
        a.abandon = this.Rd,
        a.engagedview = this.Na,
        a.impression = this.Na,
        a.creativeview = this.Na,
        a.progress = this.Nb,
        a.custom_metric_viewable = this.Na,
        a.bufferstart = this.Rd,
        a.bufferfinish = this.We,
        a.audio_measurable = this.Na,
        a.audio_audible = this.Na,
        a);
        a = {};
        this.T = (a.overlay_resize = this.pg,
        a.abandon = this.Fd,
        a.close = this.Fd,
        a.collapse = this.Fd,
        a.overlay_unmeasurable_impression = function(b) {
            return Tr(b, "overlay_unmeasurable_impression", Kp())
        }
        ,
        a.overlay_viewable_immediate_impression = function(b) {
            return Tr(b, "overlay_viewable_immediate_impression", Kp())
        }
        ,
        a.overlay_unviewable_impression = function(b) {
            return Tr(b, "overlay_unviewable_impression", Kp())
        }
        ,
        a.overlay_viewable_end_of_session_impression = function(b) {
            return Tr(b, "overlay_viewable_end_of_session_impression", Kp())
        }
        ,
        a);
        N().j = 3;
        yt(this)
    };
    zt.prototype.o = function(a) {
        Pq(a, !1);
        ls(a)
    }
    ;
    zt.prototype.J = function() {}
    ;
    var At = function(a, b, c, d) {
        a = a.B(null, d, !0, b);
        a.o = c;
        ms([a]);
        return a
    };
    zt.prototype.B = function(a, b, c, d) {
        var e = this;
        a = new Er(O,a,c ? b : -1,7,this.xd(),this.ze());
        a.ma = d;
        Zn(a.P);
        $n(a.P, "queryid", a.ma);
        a.Td("");
        Uq(a, function() {
            return e.K.apply(e, ia(Ka.apply(0, arguments)))
        }, function() {
            return e.O.apply(e, ia(Ka.apply(0, arguments)))
        });
        (d = I(os).g) && Qq(a, d);
        a.ta.nb && I(Cs);
        return a
    }
    ;
    var Bt = function(a, b, c) {
        Hn(b);
        var d = a.g;
        Ib(b, function(e) {
            var f = Lb(e.l, function(g) {
                var h = $s(g);
                if (null == h)
                    g = null;
                else if (g = new Zs,
                null != h.visible && (g.g = h.visible / 100),
                null != h.audible && (g.j = 1 == h.audible),
                null != h.time) {
                    var k = "mtos" == h.timetype ? "mtos" : "tos"
                      , n = lb(h.time, "%") ? "%" : "ms";
                    h = parseInt(h.time, 10);
                    "%" == n && (h /= 100);
                    "ms" == n ? (g.l = h,
                    g.A = -1) : (g.l = -1,
                    g.A = h);
                    g.o = void 0 === k ? "tos" : k
                }
                return g
            });
            Nb(f, function(g) {
                return null == g
            }) || Lr(c, new bt(e.id,e.g,f,d))
        })
    }
      , Ct = function() {
        var a = []
          , b = N();
        a.push(I(Bs));
        ao(b.P, "mvp_lv") && a.push(I(mt));
        b = [new jt, new lt];
        b.push(new rs(a));
        b.push(new zs(O));
        return b
    }
      , Et = function(a) {
        if (!a.ua) {
            a.ua = !0;
            try {
                var b = Xo()
                  , c = N()
                  , d = Jp();
                To = b;
                c.l = 79463069;
                "o" !== a.j && (Ms = Ei(O));
                if (to()) {
                    Es.g.te = 0;
                    Es.g.Hd = Xo() - b;
                    var e = Ct()
                      , f = I(os);
                    f.j = e;
                    ps(f, function() {
                        Dt()
                    }) ? Es.done || (Ks(),
                    Qp(f.g.g, a),
                    Gs()) : d.l ? Dt() : Gs()
                } else
                    Os = !0
            } catch (g) {
                throw is.reset(),
                g;
            }
        }
    }
      , Ft = function(a) {
        Es.j.cancel();
        Ns = a;
        Es.done = !0
    }
      , Gt = function(a) {
        if (a.j)
            return a.j;
        var b = I(os).g;
        if (b)
            switch (b.getName()) {
            case "nis":
                a.j = "n";
                break;
            case "gsv":
                a.j = "m"
            }
        a.j || (a.j = "h");
        return a.j
    }
      , Ht = function(a, b, c) {
        if (null == a.g)
            return b.Ob |= 4,
            !1;
        a = a.g.report(c, b);
        b.Ob |= a;
        return 0 == a
    };
    zt.prototype.Hb = function(a) {
        switch (a.Sa()) {
        case 0:
            if (a = I(os).g)
                a = a.g,
                Vb(a.o, this),
                a.D && this.Oa() && Sp(a);
            Dt();
            break;
        case 2:
            Gs()
        }
    }
    ;
    zt.prototype.jb = function() {}
    ;
    zt.prototype.Oa = function() {
        return !1
    }
    ;
    var Dt = function() {
        var a = [new zs(O)]
          , b = I(os);
        b.j = a;
        ps(b, function() {
            Ft("i")
        }) ? Es.done || (Ks(),
        Gs()) : Ft("i")
    };
    zt.prototype.O = function(a, b) {
        a.Ta = !0;
        switch (a.xa()) {
        case 1:
            It(a, b);
            break;
        case 2:
            this.Wd(a)
        }
        this.ae(a)
    }
    ;
    var It = function(a, b) {
        if (!a.Ra) {
            var c = Tr(a, "start", Kp());
            c = a.Sd.g(c).g;
            var d = {
                id: "lidarv"
            };
            d.r = b;
            d.sv = "962";
            null !== Ts && (d.v = Ts);
            mi(c, function(e, f) {
                return d[e] = "mtos" == e || "tos" == e ? f : encodeURIComponent(f)
            });
            b = Ps();
            mi(b, function(e, f) {
                return d[e] = encodeURIComponent(f)
            });
            b = "//pagead2.googlesyndication.com/pagead/gen_204?" + cq(aq(new Zp, d));
            fq(b);
            a.Ra = !0
        }
    };
    l = zt.prototype;
    l.rg = function(a) {
        var b = a.C(a);
        b && (b = b.volume,
        a.Ia = Bp(b) && 0 < b);
        Qr(a, 0);
        return Tr(a, "start", Kp())
    }
    ;
    l.Nb = function(a, b, c) {
        Hs(Es, [a], !Kp());
        return this.Na(a, b, c)
    }
    ;
    l.Na = function(a, b, c) {
        return Tr(a, c, Kp())
    }
    ;
    l.mg = function(a) {
        return Jt(a, "firstquartile", 1)
    }
    ;
    l.og = function(a) {
        a.ga = !0;
        return Jt(a, "midpoint", 2)
    }
    ;
    l.sg = function(a) {
        return Jt(a, "thirdquartile", 3)
    }
    ;
    l.jg = function(a) {
        var b = Jt(a, "complete", 4);
        Fr(a);
        return b
    }
    ;
    l.kg = function(a) {
        a.la = 3;
        return Tr(a, "error", Kp())
    }
    ;
    var Jt = function(a, b, c) {
        Hs(Es, [a], !Kp());
        Qr(a, c);
        4 != c && Pr(a.M, c, a.Jc);
        return Tr(a, b, Kp())
    };
    l = zt.prototype;
    l.We = function(a, b, c) {
        b = Kp();
        2 != a.la || b || (a.pa().J = Xo());
        Hs(Es, [a], !b);
        2 == a.la && (a.la = 1);
        return Tr(a, c, b)
    }
    ;
    l.qg = function(a, b) {
        b = this.Nb(a, b || {}, "skip");
        Fr(a);
        return b
    }
    ;
    l.ng = function(a, b) {
        Pq(a, !0);
        return this.Nb(a, b || {}, "fullscreen")
    }
    ;
    l.lg = function(a, b) {
        Pq(a, !1);
        return this.Nb(a, b || {}, "exitfullscreen")
    }
    ;
    l.Rd = function(a, b, c) {
        b = a.pa();
        b.U = sr(b, Xo(), 1 != a.la);
        Hs(Es, [a], !Kp());
        1 == a.la && (a.la = 2);
        return Tr(a, c, Kp())
    }
    ;
    l.pg = function(a) {
        Hs(Es, [a], !Kp());
        return a.j()
    }
    ;
    l.Fd = function(a) {
        Hs(Es, [a], !Kp());
        this.Te(a);
        Fr(a);
        return a.j()
    }
    ;
    var yt = function(a) {
        Ls(function() {
            var b = Kt();
            null != a.j && (b.sdk = a.j);
            var c = I(os);
            null != c.g && (b.avms = c.g.getName());
            return b
        })
    }
      , Lt = function(a, b, c, d) {
        var e = gs(is, c);
        null !== e && e.ma !== b && (a.o(e),
        e = null);
        e || (b = a.B(c, Xo(), !1, b),
        0 == is.j.length && (N().l = 79463069),
        ns([b]),
        e = b,
        e.o = Gt(a),
        d && (e.pb = d));
        return e
    };
    zt.prototype.K = function() {}
    ;
    var Nt = function(a, b) {
        b.D = 0;
        for (var c in ap)
            null == a[c] && (b.D |= ap[c]);
        Mt(a, "currentTime");
        Mt(a, "duration")
    };
    l = zt.prototype;
    l.Wd = function() {}
    ;
    l.Te = function() {}
    ;
    l.pe = function() {}
    ;
    l.ae = function() {}
    ;
    l.yd = function() {}
    ;
    l.ze = function() {
        this.g || (this.g = this.yd());
        return null == this.g || this.l ? new xr : new ht(this.g)
    }
    ;
    l.xd = function() {
        return new ct
    }
    ;
    var Mt = function(a, b) {
        var c = a[b];
        void 0 !== c && 0 < c && (a[b] = Math.floor(1E3 * c))
    }
      , Kt = function() {
        var a = Jp()
          , b = {}
          , c = {}
          , d = {};
        return Object.assign({}, (b.sv = "962",
        b), null !== Ts && (c.v = Ts,
        c), (d["if"] = a.l ? "1" : "0",
        d.nas = String(is.g.length),
        d))
    };
    var Ot = function(a) {
        ur.call(this, "audio_audible", a)
    };
    w(Ot, ur);
    Ot.prototype.g = function(a) {
        return 4 == a.Hc()
    }
    ;
    var Pt = function(a) {
        vr.call(this, "audio_measurable", a)
    };
    w(Pt, vr);
    Pt.prototype.g = function(a) {
        a = a.Hc();
        return 3 == a || 4 == a
    }
    ;
    var Qt = function() {
        et.apply(this, arguments)
    };
    w(Qt, et);
    Qt.prototype.j = function() {
        return new Pt(this.g)
    }
    ;
    Qt.prototype.l = function() {
        return [new Ot(this.g)]
    }
    ;
    var Rt = function() {};
    w(Rt, kr);
    Rt.prototype.g = function(a) {
        a && (28 === a.e && (a = Object.assign({}, a, {
            avas: 3
        })),
        4 === a.vs || 5 === a.vs) && (a = Object.assign({}, a, {
            vs: 3
        }));
        var b = new jr;
        b.g = lr(a, hr);
        b.j = lr(a, ir);
        return b
    }
    ;
    var St = function(a) {
        this.j = a
    };
    St.prototype.report = function(a, b) {
        var c = this.g(b);
        if ("function" === typeof c) {
            var d = {};
            var e = {};
            d = Object.assign({}, null !== Ts && (d.v = Ts,
            d), (e.sv = "962",
            e.cb = Ss,
            e.e = Tt(a),
            e));
            e = Tr(b, a, Kp());
            ih(d, e);
            b.jf[a] = e;
            d = 2 == b.xa() ? eq(d).join("&") : b.Sd.g(d).g;
            try {
                return c(b.ma, d, a),
                0
            } catch (f) {
                return 2
            }
        } else
            return 1
    }
    ;
    var Tt = function(a) {
        var b = Ws(a) ? "custom_metric_viewable" : a;
        a = ch(function(c) {
            return c == b
        });
        return ep[a]
    };
    St.prototype.g = function() {
        return Oa(this.j)
    }
    ;
    var Ut = function(a, b) {
        this.j = a;
        this.l = b
    };
    w(Ut, St);
    Ut.prototype.g = function(a) {
        if (!a.pb)
            return St.prototype.g.call(this, a);
        if (this.l[a.pb])
            return function() {}
            ;
        Qo(393, Error());
        return null
    }
    ;
    var Vt = function() {
        zt.call(this);
        this.D = void 0;
        this.F = null;
        this.L = !1;
        this.A = {};
        this.I = 0;
        this.C = "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED"
    };
    w(Vt, zt);
    Vt.prototype.J = function(a, b) {
        var c = this
          , d = I(os);
        if (null != d.g)
            switch (d.g.getName()) {
            case "nis":
                var e = Wt(this, a, b);
                break;
            case "gsv":
                e = Xt(this, a, b);
                break;
            case "exc":
                e = Yt(this, a)
            }
        e || (b.opt_overlayAdElement ? e = void 0 : b.opt_adElement && (e = Lt(this, a, b.opt_adElement, b.opt_osdId)));
        e && 1 == e.xa() && (e.C == Mg && (e.C = function(f) {
            return c.pe(f)
        }
        ),
        Zt(this, e, b));
        return e
    }
    ;
    var Zt = function(a, b, c) {
        c = c.opt_configurable_tracking_events;
        null != a.g && Array.isArray(c) && Bt(a, c, b)
    };
    Vt.prototype.pe = function(a) {
        a.j = 0;
        a.O = 0;
        if ("h" == a.o || "n" == a.o) {
            var b;
            N();
            if (a.pb && $t(this)) {
                var c = this.A[a.pb];
                c ? b = function(e) {
                    return au(c, e)
                }
                : null !== c && Qo(379, Error())
            } else
                b = Oa("ima.common.getVideoMetadata");
            if ("function" === typeof b)
                try {
                    var d = b(a.ma)
                } catch (e) {
                    a.j |= 4
                }
            else
                a.j |= 2
        } else if ("b" == a.o)
            if (b = Oa("ytads.bulleit.getVideoMetadata"),
            "function" === typeof b)
                try {
                    d = b(a.ma)
                } catch (e) {
                    a.j |= 4
                }
            else
                a.j |= 2;
        else if ("ml" == a.o)
            if (b = Oa("ima.common.getVideoMetadata"),
            "function" === typeof b)
                try {
                    d = b(a.ma)
                } catch (e) {
                    a.j |= 4
                }
            else
                a.j |= 2;
        else
            a.j |= 1;
        a.j || (void 0 === d ? a.j |= 8 : null === d ? a.j |= 16 : eh(d) ? a.j |= 32 : null != d.errorCode && (a.O = d.errorCode,
        a.j |= 64));
        null == d && (d = {});
        Nt(d, a);
        Bp(d.volume) && Bp(this.D) && (d.volume *= this.D);
        return d
    }
    ;
    var Xt = function(a, b, c) {
        var d = fs(is, b);
        d || (d = c.opt_nativeTime || -1,
        d = At(a, b, Gt(a), d),
        c.opt_osdId && (d.pb = c.opt_osdId));
        return d
    }
      , Wt = function(a, b, c) {
        var d = fs(is, b);
        d || (d = At(a, b, "n", c.opt_nativeTime || -1));
        return d
    }
      , Yt = function(a, b) {
        var c = fs(is, b);
        c || (c = At(a, b, "h", -1));
        return c
    };
    Vt.prototype.yd = function() {
        if ($t(this))
            return new Ut("ima.common.triggerExternalActivityEvent",this.A);
        var a = bu(this);
        return null != a ? new St(a) : null
    }
    ;
    var bu = function(a) {
        N();
        switch (Gt(a)) {
        case "b":
            return "ytads.bulleit.triggerExternalActivityEvent";
        case "n":
            return "ima.bridge.triggerExternalActivityEvent";
        case "h":
        case "m":
        case "ml":
            return "ima.common.triggerExternalActivityEvent"
        }
        return null
    };
    Vt.prototype.Wd = function(a) {
        !a.g && a.Ta && Ht(this, a, "overlay_unmeasurable_impression") && (a.g = !0)
    }
    ;
    Vt.prototype.Te = function(a) {
        a.Ye && (a.Va() ? Ht(this, a, "overlay_viewable_end_of_session_impression") : Ht(this, a, "overlay_unviewable_impression"),
        a.Ye = !1)
    }
    ;
    var cu = function(a, b, c, d) {
        c = void 0 === c ? {} : c;
        var e = {};
        ih(e, {
            opt_adElement: void 0,
            opt_fullscreen: void 0
        }, c);
        var f = a.J(b, c);
        c = f ? f.Sd : a.xd();
        if (e.opt_bounds)
            return c.g(Vs("ol", d));
        if (void 0 !== d)
            if (void 0 !== Us(d))
                if (Os)
                    a = Vs("ue", d);
                else if (Et(a),
                "i" == Ns)
                    a = Vs("i", d),
                    a["if"] = 0;
                else if (b = a.J(b, e)) {
                    b: {
                        "i" == Ns && (b.Ta = !0,
                        a.ae(b));
                        f = e.opt_fullscreen;
                        void 0 !== f && Pq(b, !!f);
                        var g;
                        if (f = !Jp().j && !Ep())
                            so(),
                            f = 0 === xk(go);
                        if (g = f) {
                            switch (b.xa()) {
                            case 1:
                                It(b, "pv");
                                break;
                            case 2:
                                a.Wd(b)
                            }
                            Ft("pv")
                        }
                        f = d.toLowerCase();
                        if (g = !g)
                            c: {
                                if (ao(N().P, "ssmol") && (g = a.l,
                                "loaded" === f))
                                    break c;
                                g = Ub(bp, f)
                            }
                        if (g && 0 == b.la) {
                            "i" != Ns && (Es.done = !1);
                            g = void 0 !== e ? e.opt_nativeTime : void 0;
                            Vo = g = "number" === typeof g ? g : Xo();
                            b.Ub = !0;
                            var h = Kp();
                            b.la = 1;
                            b.ia = {};
                            b.ia.start = !1;
                            b.ia.firstquartile = !1;
                            b.ia.midpoint = !1;
                            b.ia.thirdquartile = !1;
                            b.ia.complete = !1;
                            b.ia.resume = !1;
                            b.ia.pause = !1;
                            b.ia.skip = !1;
                            b.ia.mute = !1;
                            b.ia.unmute = !1;
                            b.ia.viewable_impression = !1;
                            b.ia.measurable_impression = !1;
                            b.ia.fully_viewable_audible_half_duration_impression = !1;
                            b.ia.fullscreen = !1;
                            b.ia.exitfullscreen = !1;
                            b.zd = 0;
                            h || (b.pa().J = g);
                            Hs(Es, [b], !h)
                        }
                        (g = b.Bb[f]) && b.ha.reportEvent(g);
                        ao(N().P, "fmd") || Ub(cp, f) && b.Xa && b.Xa.j(b, null);
                        switch (b.xa()) {
                        case 1:
                            var k = Ws(f) ? a.M.custom_metric_viewable : a.M[f];
                            break;
                        case 2:
                            k = a.T[f]
                        }
                        if (k && (d = k.call(a, b, e, d),
                        ao(N().P, "fmd") && Ub(cp, f) && b.Xa && b.Xa.j(b, null),
                        void 0 !== d)) {
                            e = Vs(void 0, f);
                            ih(e, d);
                            d = e;
                            break b
                        }
                        d = void 0
                    }
                    3 == b.la && a.o(b);
                    a = d
                } else
                    a = Vs("nf", d);
            else
                a = void 0;
        else
            Os ? a = Vs("ue") : f ? (a = Vs(),
            ih(a, Sr(f, !0, !1, !1))) : a = Vs("nf");
        return "string" === typeof a ? c.g() : c.g(a)
    };
    Vt.prototype.K = function(a) {
        this.l && 1 == a.xa() && du(this, a)
    }
    ;
    Vt.prototype.ae = function(a) {
        this.l && 1 == a.xa() && du(this, a)
    }
    ;
    var du = function(a, b) {
        var c;
        if (b.pb && $t(a)) {
            var d = a.A[b.pb];
            d ? c = function(f, g) {
                eu(d, f, g)
            }
            : null !== d && Qo(379, Error())
        } else
            c = Oa("ima.common.triggerViewabilityMeasurementUpdate");
        if ("function" === typeof c) {
            var e = Nr(b);
            e.nativeVolume = a.D;
            c(b.ma, e)
        }
    }
      , $t = function(a) {
        return (N(),
        "h" != Gt(a) && "m" != Gt(a)) ? !1 : 0 != a.I
    };
    Vt.prototype.B = function(a, b, c, d) {
        if (Co()) {
            var e = ao(N().P, "mm")
              , f = {};
            (e = (f[Kn.mf] = "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO",
            f[Kn.VIDEO] = "ACTIVE_VIEW_TRAFFIC_TYPE_VIDEO",
            f)[e]) && e && (this.C = e);
            "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED" === this.C && Qo(1044, Error())
        }
        a = zt.prototype.B.call(this, a, b, c, d);
        this.L && (b = this.F,
        null == a.A && (a.A = new Xq),
        b.g[a.ma] = a.A,
        a.A.o = Wr);
        return a
    }
    ;
    Vt.prototype.o = function(a) {
        a && 1 == a.xa() && this.L && delete this.F.g[a.ma];
        return zt.prototype.o.call(this, a)
    }
    ;
    Vt.prototype.ze = function() {
        this.g || (this.g = this.yd());
        return null == this.g || this.l ? new xr : "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" === this.C ? new Qt(this.g) : new ht(this.g)
    }
    ;
    Vt.prototype.xd = function() {
        return "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" === this.C ? new Rt : new ct
    }
    ;
    var fu = function(a) {
        var b = {};
        return b.viewability = a.g,
        b.googleViewability = a.j,
        b
    }
      , gu = function(a, b, c) {
        c = void 0 === c ? {} : c;
        a = cu(I(Vt), b, c, a);
        return fu(a)
    }
      , hu = Po(193, gu, void 0, Kt);
    z("Goog_AdSense_Lidar_sendVastEvent", hu);
    var iu = Po(194, function(a, b) {
        b = void 0 === b ? {} : b;
        a = cu(I(Vt), a, b);
        return fu(a)
    });
    z("Goog_AdSense_Lidar_getViewability", iu);
    var ju = Po(195, function() {
        return uo()
    });
    z("Goog_AdSense_Lidar_getUrlSignalsArray", ju);
    var ku = Po(196, function() {
        return JSON.stringify(uo())
    });
    z("Goog_AdSense_Lidar_getUrlSignalsList", ku);
    y.console && "function" === typeof y.console.log && $a(y.console.log, y.console);
    var lu = function(a) {
        for (var b = [], c = a = G(a.ownerDocument); c != a.top; c = c.parent)
            if (c.frameElement)
                b.push(c.frameElement);
            else
                break;
        return b
    };
    var mu = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.j = !1
    };
    mu.prototype.stopPropagation = function() {
        this.j = !0
    }
    ;
    mu.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    }
    ;
    var nu = function() {
        if (!y.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1
          , b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
        try {
            var c = function() {};
            y.addEventListener("test", c, b);
            y.removeEventListener("test", c, b)
        } catch (d) {}
        return a
    }();
    var ou = function(a, b) {
        mu.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.g = null;
        a && this.init(a, b)
    };
    bb(ou, mu);
    var pu = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    ou.prototype.init = function(a, b) {
        var c = this.type = a.type
          , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        (b = a.relatedTarget) ? kc && (ec(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
        this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY,
        this.screenX = d.screenX || 0,
        this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY,
        this.screenX = a.screenX || 0,
        this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : pu[a.pointerType] || "";
        this.state = a.state;
        this.g = a;
        a.defaultPrevented && ou.Ga.preventDefault.call(this)
    }
    ;
    ou.prototype.stopPropagation = function() {
        ou.Ga.stopPropagation.call(this);
        this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0
    }
    ;
    ou.prototype.preventDefault = function() {
        ou.Ga.preventDefault.call(this);
        var a = this.g;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    ;
    var qu = "closure_listenable_" + (1E6 * Math.random() | 0)
      , ru = function(a) {
        return !(!a || !a[qu])
    };
    var tu = 0;
    var uu = function(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Kc = e;
        this.key = ++tu;
        this.kc = this.yc = !1
    }
      , vu = function(a) {
        a.kc = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.Kc = null
    };
    var wu = function(a) {
        this.src = a;
        this.g = {};
        this.j = 0
    };
    wu.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [],
        this.j++);
        var g = xu(a, b, d, e);
        -1 < g ? (b = a[g],
        c || (b.yc = !1)) : (b = new uu(b,this.src,f,!!d,e),
        b.yc = c,
        a.push(b));
        return b
    }
    ;
    wu.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.g))
            return !1;
        var e = this.g[a];
        b = xu(e, b, c, d);
        return -1 < b ? (vu(e[b]),
        Wb(e, b),
        0 == e.length && (delete this.g[a],
        this.j--),
        !0) : !1
    }
    ;
    var yu = function(a, b) {
        var c = b.type;
        c in a.g && Vb(a.g[c], b) && (vu(b),
        0 == a.g[c].length && (delete a.g[c],
        a.j--))
    };
    wu.prototype.Wb = function(a, b, c, d) {
        a = this.g[a.toString()];
        var e = -1;
        a && (e = xu(a, b, c, d));
        return -1 < e ? a[e] : null
    }
    ;
    var xu = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.kc && f.listener == b && f.capture == !!c && f.Kc == d)
                return e
        }
        return -1
    };
    var zu = "closure_lm_" + (1E6 * Math.random() | 0)
      , Au = {}
      , Bu = 0
      , Du = function(a, b, c, d, e) {
        if (d && d.once)
            return Cu(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++)
                Du(a, b[f], c, d, e);
            return null
        }
        c = Eu(c);
        return ru(a) ? a.listen(b, c, Sa(d) ? !!d.capture : !!d, e) : Fu(a, b, c, !1, d, e)
    }
      , Fu = function(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var g = Sa(e) ? !!e.capture : !!e
          , h = Gu(a);
        h || (a[zu] = h = new wu(a));
        c = h.add(b, c, d, g, f);
        if (c.proxy)
            return c;
        d = Hu();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            nu || (e = g),
            void 0 === e && (e = !1),
            a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent)
            a.attachEvent(Iu(b.toString()), d);
        else if (a.addListener && a.removeListener)
            a.addListener(d);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        Bu++;
        return c
    }
      , Hu = function() {
        var a = Ju
          , b = function(c) {
            return a.call(b.src, b.listener, c)
        };
        return b
    }
      , Cu = function(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++)
                Cu(a, b[f], c, d, e);
            return null
        }
        c = Eu(c);
        return ru(a) ? a.ec(b, c, Sa(d) ? !!d.capture : !!d, e) : Fu(a, b, c, !0, d, e)
    }
      , Ku = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                Ku(a, b[f], c, d, e);
        else
            d = Sa(d) ? !!d.capture : !!d,
            c = Eu(c),
            ru(a) ? a.rb(b, c, d, e) : a && (a = Gu(a)) && (b = a.Wb(b, c, d, e)) && Lu(b)
    }
      , Lu = function(a) {
        if ("number" !== typeof a && a && !a.kc) {
            var b = a.src;
            if (ru(b))
                yu(b.A, a);
            else {
                var c = a.type
                  , d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Iu(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Bu--;
                (c = Gu(b)) ? (yu(c, a),
                0 == c.j && (c.src = null,
                b[zu] = null)) : vu(a)
            }
        }
    }
      , Iu = function(a) {
        return a in Au ? Au[a] : Au[a] = "on" + a
    }
      , Ju = function(a, b) {
        if (a.kc)
            a = !0;
        else {
            b = new ou(b,this);
            var c = a.listener
              , d = a.Kc || a.src;
            a.yc && Lu(a);
            a = c.call(d, b)
        }
        return a
    }
      , Gu = function(a) {
        a = a[zu];
        return a instanceof wu ? a : null
    }
      , Mu = "__closure_events_fn_" + (1E9 * Math.random() >>> 0)
      , Eu = function(a) {
        if ("function" === typeof a)
            return a;
        a[Mu] || (a[Mu] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[Mu]
    };
    var S = function() {
        P.call(this);
        this.A = new wu(this);
        this.Db = this;
        this.fa = null
    };
    bb(S, P);
    S.prototype[qu] = !0;
    l = S.prototype;
    l.addEventListener = function(a, b, c, d) {
        Du(this, a, b, c, d)
    }
    ;
    l.removeEventListener = function(a, b, c, d) {
        Ku(this, a, b, c, d)
    }
    ;
    l.dispatchEvent = function(a) {
        var b, c = this.fa;
        if (c)
            for (b = []; c; c = c.fa)
                b.push(c);
        c = this.Db;
        var d = a.type || a;
        if ("string" === typeof a)
            a = new mu(a,c);
        else if (a instanceof mu)
            a.target = a.target || c;
        else {
            var e = a;
            a = new mu(d,c);
            ih(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.j && 0 <= f; f--) {
                var g = a.currentTarget = b[f];
                e = Nu(g, d, !0, a) && e
            }
        a.j || (g = a.currentTarget = c,
        e = Nu(g, d, !0, a) && e,
        a.j || (e = Nu(g, d, !1, a) && e));
        if (b)
            for (f = 0; !a.j && f < b.length; f++)
                g = a.currentTarget = b[f],
                e = Nu(g, d, !1, a) && e;
        return e
    }
    ;
    l.N = function() {
        S.Ga.N.call(this);
        if (this.A) {
            var a = this.A, b = 0, c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++)
                    ++b,
                    vu(d[e]);
                delete a.g[c];
                a.j--
            }
        }
        this.fa = null
    }
    ;
    l.listen = function(a, b, c, d) {
        return this.A.add(String(a), b, !1, c, d)
    }
    ;
    l.ec = function(a, b, c, d) {
        return this.A.add(String(a), b, !0, c, d)
    }
    ;
    l.rb = function(a, b, c, d) {
        this.A.remove(String(a), b, c, d)
    }
    ;
    var Nu = function(a, b, c, d) {
        b = a.A.g[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.kc && g.capture == c) {
                var h = g.listener
                  , k = g.Kc || g.src;
                g.yc && yu(a.A, g);
                e = !1 !== h.call(k, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    S.prototype.Wb = function(a, b, c, d) {
        return this.A.Wb(String(a), b, c, d)
    }
    ;
    var Ou = function(a, b) {
        this.l = a;
        this.A = b;
        this.j = 0;
        this.g = null
    };
    Ou.prototype.get = function() {
        if (0 < this.j) {
            this.j--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else
            a = this.l();
        return a
    }
    ;
    var Pu = function(a, b) {
        a.A(b);
        100 > a.j && (a.j++,
        b.next = a.g,
        a.g = b)
    };
    var Qu, Ru = function() {
        var a = y.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !B("Presto") && (a = function() {
            var e = ai(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random()
              , h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = $a(function(k) {
                if (("*" == h || k.origin == h) && k.data == g)
                    this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        }
        );
        if ("undefined" !== typeof a) {
            var b = new a
              , c = {}
              , d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.ye;
                    c.ye = null;
                    e()
                }
            }
            ;
            return function(e) {
                d.next = {
                    ye: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            y.setTimeout(e, 0)
        }
    };
    var Su = function() {
        this.j = this.g = null
    };
    Su.prototype.add = function(a, b) {
        var c = Tu.get();
        c.set(a, b);
        this.j ? this.j.next = c : this.g = c;
        this.j = c
    }
    ;
    Su.prototype.remove = function() {
        var a = null;
        this.g && (a = this.g,
        this.g = this.g.next,
        this.g || (this.j = null),
        a.next = null);
        return a
    }
    ;
    var Tu = new Ou(function() {
        return new Uu
    }
    ,function(a) {
        return a.reset()
    }
    )
      , Uu = function() {
        this.next = this.g = this.j = null
    };
    Uu.prototype.set = function(a, b) {
        this.j = a;
        this.g = b;
        this.next = null
    }
    ;
    Uu.prototype.reset = function() {
        this.next = this.g = this.j = null
    }
    ;
    var Vu, Wu = !1, Xu = new Su, Zu = function(a, b) {
        Vu || Yu();
        Wu || (Vu(),
        Wu = !0);
        Xu.add(a, b)
    }, Yu = function() {
        if (y.Promise && y.Promise.resolve) {
            var a = y.Promise.resolve(void 0);
            Vu = function() {
                a.then($u)
            }
        } else
            Vu = function() {
                var b = $u;
                "function" !== typeof y.setImmediate || y.Window && y.Window.prototype && y.Window.prototype.setImmediate == y.setImmediate ? (Qu || (Qu = Ru()),
                Qu(b)) : y.setImmediate(b)
            }
    }, $u = function() {
        for (var a; a = Xu.remove(); ) {
            try {
                a.j.call(a.g)
            } catch (b) {
                kb(b)
            }
            Pu(Tu, a)
        }
        Wu = !1
    };
    var av = function(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var cv = function(a) {
        this.g = 0;
        this.C = void 0;
        this.A = this.j = this.l = null;
        this.o = this.B = !1;
        if (a != Mg)
            try {
                var b = this;
                a.call(void 0, function(c) {
                    bv(b, 2, c)
                }, function(c) {
                    bv(b, 3, c)
                })
            } catch (c) {
                bv(this, 3, c)
            }
    }
      , dv = function() {
        this.next = this.context = this.j = this.l = this.g = null;
        this.A = !1
    };
    dv.prototype.reset = function() {
        this.context = this.j = this.l = this.g = null;
        this.A = !1
    }
    ;
    var ev = new Ou(function() {
        return new dv
    }
    ,function(a) {
        a.reset()
    }
    )
      , fv = function(a, b, c) {
        var d = ev.get();
        d.l = a;
        d.j = b;
        d.context = c;
        return d
    };
    cv.prototype.then = function(a, b, c) {
        return gv(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    }
    ;
    cv.prototype.$goog_Thenable = !0;
    cv.prototype.J = function(a, b) {
        return gv(this, null, a, b)
    }
    ;
    cv.prototype.catch = cv.prototype.J;
    cv.prototype.cancel = function(a) {
        if (0 == this.g) {
            var b = new hv(a);
            Zu(function() {
                iv(this, b)
            }, this)
        }
    }
    ;
    var iv = function(a, b) {
        if (0 == a.g)
            if (a.l) {
                var c = a.l;
                if (c.j) {
                    for (var d = 0, e = null, f = null, g = c.j; g && (g.A || (d++,
                    g.g == a && (e = g),
                    !(e && 1 < d))); g = g.next)
                        e || (f = g);
                    e && (0 == c.g && 1 == d ? iv(c, b) : (f ? (d = f,
                    d.next == c.A && (c.A = d),
                    d.next = d.next.next) : jv(c),
                    kv(c, e, 3, b)))
                }
                a.l = null
            } else
                bv(a, 3, b)
    }
      , mv = function(a, b) {
        a.j || 2 != a.g && 3 != a.g || lv(a);
        a.A ? a.A.next = b : a.j = b;
        a.A = b
    }
      , gv = function(a, b, c, d) {
        var e = fv(null, null, null);
        e.g = new cv(function(f, g) {
            e.l = b ? function(h) {
                try {
                    var k = b.call(d, h);
                    f(k)
                } catch (n) {
                    g(n)
                }
            }
            : f;
            e.j = c ? function(h) {
                try {
                    var k = c.call(d, h);
                    void 0 === k && h instanceof hv ? g(h) : f(k)
                } catch (n) {
                    g(n)
                }
            }
            : g
        }
        );
        e.g.l = a;
        mv(a, e);
        return e.g
    };
    cv.prototype.D = function(a) {
        this.g = 0;
        bv(this, 2, a)
    }
    ;
    cv.prototype.F = function(a) {
        this.g = 0;
        bv(this, 3, a)
    }
    ;
    var bv = function(a, b, c) {
        if (0 == a.g) {
            a === c && (b = 3,
            c = new TypeError("Promise cannot resolve to itself"));
            a.g = 1;
            a: {
                var d = c
                  , e = a.D
                  , f = a.F;
                if (d instanceof cv) {
                    mv(d, fv(e || Mg, f || null, a));
                    var g = !0
                } else if (av(d))
                    d.then(e, f, a),
                    g = !0;
                else {
                    if (Sa(d))
                        try {
                            var h = d.then;
                            if ("function" === typeof h) {
                                nv(d, h, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (k) {
                            f.call(a, k);
                            g = !0;
                            break a
                        }
                    g = !1
                }
            }
            g || (a.C = c,
            a.g = b,
            a.l = null,
            lv(a),
            3 != b || c instanceof hv || ov(a, c))
        }
    }
      , nv = function(a, b, c, d, e) {
        var f = !1
          , g = function(k) {
            f || (f = !0,
            c.call(e, k))
        }
          , h = function(k) {
            f || (f = !0,
            d.call(e, k))
        };
        try {
            b.call(a, g, h)
        } catch (k) {
            h(k)
        }
    }
      , lv = function(a) {
        a.B || (a.B = !0,
        Zu(a.L, a))
    }
      , jv = function(a) {
        var b = null;
        a.j && (b = a.j,
        a.j = b.next,
        b.next = null);
        a.j || (a.A = null);
        return b
    };
    cv.prototype.L = function() {
        for (var a; a = jv(this); )
            kv(this, a, this.g, this.C);
        this.B = !1
    }
    ;
    var kv = function(a, b, c, d) {
        if (3 == c && b.j && !b.A)
            for (; a && a.o; a = a.l)
                a.o = !1;
        if (b.g)
            b.g.l = null,
            pv(b, c, d);
        else
            try {
                b.A ? b.l.call(b.context) : pv(b, c, d)
            } catch (e) {
                qv.call(null, e)
            }
        Pu(ev, b)
    }
      , pv = function(a, b, c) {
        2 == b ? a.l.call(a.context, c) : a.j && a.j.call(a.context, c)
    }
      , ov = function(a, b) {
        a.o = !0;
        Zu(function() {
            a.o && qv.call(null, b)
        })
    }
      , qv = kb
      , hv = function(a) {
        db.call(this, a)
    };
    bb(hv, db);
    hv.prototype.name = "cancel";
    var rv = function(a, b) {
        S.call(this);
        this.j = a || 1;
        this.g = b || y;
        this.l = $a(this.Yg, this);
        this.o = Date.now()
    };
    bb(rv, S);
    l = rv.prototype;
    l.enabled = !1;
    l.Pa = null;
    l.Yg = function() {
        if (this.enabled) {
            var a = Date.now() - this.o;
            0 < a && a < .8 * this.j ? this.Pa = this.g.setTimeout(this.l, this.j - a) : (this.Pa && (this.g.clearTimeout(this.Pa),
            this.Pa = null),
            this.dispatchEvent("tick"),
            this.enabled && (this.stop(),
            this.start()))
        }
    }
    ;
    l.start = function() {
        this.enabled = !0;
        this.Pa || (this.Pa = this.g.setTimeout(this.l, this.j),
        this.o = Date.now())
    }
    ;
    l.stop = function() {
        this.enabled = !1;
        this.Pa && (this.g.clearTimeout(this.Pa),
        this.Pa = null)
    }
    ;
    l.N = function() {
        rv.Ga.N.call(this);
        this.stop();
        delete this.g
    }
    ;
    var tv = function(a, b, c) {
        if ("function" === typeof a)
            c && (a = $a(a, c));
        else if (a && "function" == typeof a.handleEvent)
            a = $a(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : y.setTimeout(a, b || 0)
    }
      , uv = function(a, b) {
        var c = null;
        return (new cv(function(d, e) {
            c = tv(function() {
                d(b)
            }, a);
            -1 == c && e(Error("Failed to schedule timer."))
        }
        )).J(function(d) {
            y.clearTimeout(c);
            throw d;
        })
    };
    var vv = function() {
        return Math.round(Date.now() / 1E3)
    };
    var wv = function() {
        this.g = {};
        return this
    };
    wv.prototype.remove = function(a) {
        var b = this.g;
        a in b && delete b[a]
    }
    ;
    wv.prototype.set = function(a, b) {
        this.g[a] = b
    }
    ;
    var xv = function(a, b) {
        a.g.eb = gh(a.g, "eb", 0) | b
    };
    wv.prototype.get = function(a) {
        return gh(this.g, a, null)
    }
    ;
    var yv = null
      , zv = function() {
        this.g = {};
        this.j = 0
    }
      , Av = function() {
        yv || (yv = new zv);
        return yv
    }
      , Bv = function(a, b) {
        a.g[b.getName()] = b
    }
      , Cv = function(a, b) {
        this.A = a;
        this.l = !0;
        this.g = b
    };
    Cv.prototype.getName = function() {
        return this.A
    }
    ;
    Cv.prototype.getValue = function() {
        return this.g
    }
    ;
    Cv.prototype.j = function() {
        return String(this.g)
    }
    ;
    var Dv = function(a, b) {
        Cv.call(this, String(a), b);
        this.o = a;
        this.g = !!b
    };
    w(Dv, Cv);
    Dv.prototype.j = function() {
        return this.g ? "1" : "0"
    }
    ;
    var Ev = function(a, b) {
        Cv.call(this, a, b)
    };
    w(Ev, Cv);
    Ev.prototype.j = function() {
        return this.g ? Math.round(this.g.top) + "." + Math.round(this.g.left) + "." + (Math.round(this.g.top) + Math.round(this.g.height)) + "." + (Math.round(this.g.left) + Math.round(this.g.width)) : ""
    }
    ;
    var Fv = function(a) {
        if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
            a = a.split(".");
            var b = Number(a[0])
              , c = Number(a[1]);
            return new Ev("",new kk(c,b,Number(a[3]) - c,Number(a[2]) - b))
        }
        return new Ev("",new kk(0,0,0,0))
    };
    var Gv = function(a) {
        var b = new kk(-Number.MAX_VALUE / 2,-Number.MAX_VALUE / 2,Number.MAX_VALUE,Number.MAX_VALUE)
          , c = new kk(0,0,0,0);
        if (!a || 0 == a.length)
            return c;
        for (var d = 0; d < a.length; d++) {
            a: {
                var e = b;
                var f = a[d]
                  , g = Math.max(e.left, f.left)
                  , h = Math.min(e.left + e.width, f.left + f.width);
                if (g <= h) {
                    var k = Math.max(e.top, f.top);
                    f = Math.min(e.top + e.height, f.top + f.height);
                    if (k <= f) {
                        e.left = g;
                        e.top = k;
                        e.width = h - g;
                        e.height = f - k;
                        e = !0;
                        break a
                    }
                }
                e = !1
            }
            if (!e)
                return c
        }
        return b
    }
      , Hv = function(a, b) {
        var c = a.getBoundingClientRect();
        a = pp(a, b);
        return new kk(Math.round(a.x),Math.round(a.y),Math.round(c.right - c.left),Math.round(c.bottom - c.top))
    }
      , Iv = function(a, b, c) {
        if (b && c) {
            a: {
                var d = Math.max(b.left, c.left);
                var e = Math.min(b.left + b.width, c.left + c.width);
                if (d <= e) {
                    var f = Math.max(b.top, c.top)
                      , g = Math.min(b.top + b.height, c.top + c.height);
                    if (f <= g) {
                        d = new kk(d,f,e - d,g - f);
                        break a
                    }
                }
                d = null
            }
            e = d ? d.height * d.width : 0;
            f = d ? b.height * b.width : 0;
            d = d && f ? Math.round(e / f * 100) : 0;
            Bv(a, new Cv("vp",d));
            d && 0 < d ? (e = lk(b),
            f = lk(c),
            e = e.top >= f.top && e.top < f.bottom) : e = !1;
            Bv(a, new Dv(512,e));
            d && 0 < d ? (e = lk(b),
            f = lk(c),
            e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;
            Bv(a, new Dv(1024,e));
            d && 0 < d ? (e = lk(b),
            f = lk(c),
            e = e.left >= f.left && e.left < f.right) : e = !1;
            Bv(a, new Dv(2048,e));
            d && 0 < d ? (b = lk(b),
            c = lk(c),
            c = b.right <= c.right && b.right > c.left) : c = !1;
            Bv(a, new Dv(4096,c))
        }
    };
    var Jv = function(a, b) {
        var c = 0;
        $g(G(), "ima", "video", "client", "tagged") && (c = 1);
        var d = null;
        a && (d = a());
        if (d) {
            a = Av();
            a.g = {};
            var e = new Dv(32,!0);
            e.l = !1;
            Bv(a, e);
            e = G().document;
            e = e.visibilityState || e.webkitVisibilityState || e.mozVisibilityState || e.msVisibilityState || "";
            Bv(a, new Dv(64,"hidden" != e.toLowerCase().substring(e.length - 6) ? !0 : !1));
            a: {
                try {
                    var f = G().top;
                    try {
                        var g = !!f.location.href || "" === f.location.href
                    } catch (m) {
                        g = !1
                    }
                    if (g) {
                        var h = lu(d);
                        var k = h && 0 != h.length ? "1" : "0";
                        break a
                    }
                    k = "2";
                    break a
                } catch (m) {
                    k = "2";
                    break a
                }
                k = void 0
            }
            Bv(a, new Dv(256,"2" == k));
            Bv(a, new Dv(128,"1" == k));
            h = g = G().top;
            "2" == k && (h = G());
            f = Hv(d, h);
            Bv(a, new Ev("er",f));
            try {
                var n = h.document && !h.document.body ? null : Zh(h || window)
            } catch (m) {
                n = null
            }
            n ? (h = $h(Uh(h.document).g),
            Bv(a, new Dv(16384,!!h)),
            n = h ? new kk(h.x,h.y,n.width,n.height) : null) : n = null;
            Bv(a, new Ev("vi",n));
            if (n && "1" == k) {
                k = lu(d);
                d = [];
                for (h = 0; h < k.length; h++)
                    (e = Hv(k[h], g)) && d.push(e);
                d.push(n);
                n = Gv(d)
            }
            Iv(a, f, n);
            a.j && Bv(a, new Cv("ts",vv() - a.j));
            a.j = vv()
        } else
            a = Av(),
            a.g = {},
            a.j = vv(),
            Bv(a, new Dv(32,!1));
        this.l = a;
        this.g = new wv;
        this.g.set("ve", 4);
        c && xv(this.g, 1);
        $g(G(), "ima", "video", "client", "crossdomainTag") && xv(this.g, 4);
        $g(G(), "ima", "video", "client", "sdkTag") && xv(this.g, 8);
        $g(G(), "ima", "video", "client", "jsTag") && xv(this.g, 2);
        b && gh(b, "fullscreen", !1) && xv(this.g, 16);
        this.j = b = null;
        if (c && (c = $g(G(), "ima", "video", "client"),
        c.getEData)) {
            this.j = c.getEData();
            if (c = $g(G(), "ima", "video", "client", "getLastSnapshotFromTop"))
                if (a = c())
                    this.j.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp),
                    c = this.l,
                    b = a.er,
                    a = a.vi,
                    b && a && (b = Fv(b).getValue(),
                    a = Fv(a).getValue(),
                    k = null,
                    gh(c.g, "er", null) && (k = gh(c.g, "er", null).getValue(),
                    k.top += b.top,
                    k.left += b.left,
                    Bv(c, new Ev("er",k))),
                    gh(c.g, "vi", null) && (n = gh(c.g, "vi", null).getValue(),
                    n.top += b.top,
                    n.left += b.left,
                    d = [],
                    d.push(n),
                    d.push(b),
                    d.push(a),
                    b = Gv(d),
                    Iv(c, k, b),
                    Bv(c, new Ev("vi",a))));
            a: {
                if (this.j) {
                    if (this.j.getTagLoadTimestamp) {
                        b = this.j.getTagLoadTimestamp();
                        break a
                    }
                    if (this.j.getTimeSinceTagLoadSeconds) {
                        b = this.j.getTimeSinceTagLoadSeconds();
                        break a
                    }
                }
                b = null
            }
        }
        c = this.g;
        a = window.performance && window.performance.timing && window.performance.timing.domLoading && 0 < window.performance.timing.domLoading ? Math.round(window.performance.timing.domLoading / 1E3) : null;
        c.set.call(c, "td", vv() - (null != a ? a : null != b ? b : vv()))
    };
    new rv(200);
    var Kv = function(a, b) {
        try {
            var c = new Jv(a,b);
            a = [];
            var d = Number(c.g.get("eb"));
            c.g.remove("eb");
            var e, f = c.g;
            b = [];
            for (var g in f.g)
                b.push(g + f.g[g]);
            (e = b.join("_")) && a.push(e);
            if (c.j) {
                var h = c.j.serialize();
                h && a.push(h)
            }
            var k, n = c.l;
            e = d;
            f = [];
            e || (e = 0);
            for (var m in n.g) {
                var p = n.g[m];
                if (p instanceof Dv)
                    p.getValue() && (e |= p.o);
                else {
                    var q = n.g[m]
                      , t = q.l ? q.j() : "";
                    t && f.push(m + t)
                }
            }
            f.push("eb" + String(e));
            (k = f.join("_")) && a.push(k);
            c.g.set("eb", d);
            return a.join("_")
        } catch (v) {
            return "tle;" + Kh(v.name, 12) + ";" + Kh(v.message, 40)
        }
    };
    var Lv = function(a) {
        this.H = C(a)
    };
    w(Lv, E);
    Lv.prototype.getId = function() {
        return D(this, 1)
    }
    ;
    var Mv = [0, Bg];
    var Nv = function(a) {
        this.H = C(a)
    };
    w(Nv, E);
    Nv.prototype.getWidth = function() {
        return Mf(this, 1)
    }
    ;
    Nv.prototype.getHeight = function() {
        return Mf(this, 2)
    }
    ;
    var Ov = [0, yg, -1];
    var Pv = function(a) {
        this.H = C(a)
    };
    w(Pv, E);
    var Qv = [0, vg, Ag, Bg, -1];
    var Rv = function(a) {
        this.H = C(a)
    };
    w(Rv, E);
    Rv.prototype.getAdId = function() {
        return D(this, 1)
    }
    ;
    Rv.prototype.getSize = function() {
        return Af(this, Nv, 7)
    }
    ;
    Rv.prototype.Xb = function() {
        return Af(this, Pv, 9)
    }
    ;
    Rv.ba = [4];
    var Sv = [0, Bg, vg, Bg, Cg, Fg, Mv, Ov, vg, Qv, Bg];
    var Tv = function(a) {
        this.H = C(a)
    };
    w(Tv, E);
    var Uv = function(a, b) {
        return Zf(a, 1, b)
    }
      , Vv = function(a, b) {
        return Uf(a, 4, b)
    }
      , Wv = function(a, b) {
        return Vf(a, 2, b)
    }
      , Xv = [0, Fg, yg, Bg, Ag];
    var Yv = function(a) {
        this.H = C(a)
    };
    w(Yv, E);
    var Zv = function(a, b) {
        return Yf(a, 1, b)
    }
      , $v = function(a, b) {
        return Hf(a, 3, Rv, b)
    }
      , aw = function(a, b) {
        return Zf(a, 4, b)
    };
    Yv.ba = [10, 3];
    var bw = [0, Bg, vg, Dg, Sv, Fg, Xv, Ag, Fg, 2, Cg];
    var cw = function(a) {
        this.H = C(a)
    };
    w(cw, E);
    var dw = [0, Fg, Ag, vg];
    var ew = function(a) {
        this.H = C(a)
    };
    w(ew, E);
    var fw = function(a, b) {
        return Gf(a, 2, Yv, b)
    }
      , gw = function(a, b) {
        Df(a, 5, b)
    }
      , hw = function(a, b) {
        Yf(a, 10, b)
    };
    ew.ba = [2];
    var iw = [0, Fg, Dg, bw, Fg, Bg, Xv, Bg, Ag, yg, dw, Bg, -1];
    var jw = function(a) {
        this.H = C(a)
    };
    w(jw, E);
    var kw = function(a) {
        var b = new ew;
        b = Zf(b, 1, 1);
        return Gf(a, 1, ew, b)
    };
    jw.ba = [1];
    jw.prototype.g = Hg([0, Dg, iw]);
    var lw = function(a) {
        this.H = C(a)
    };
    w(lw, E);
    var mw = function(a) {
        this.H = C(a)
    };
    w(mw, E);
    var nw = function(a) {
        this.H = C(a)
    };
    w(nw, E);
    nw.ba = [1];
    var ow = function(a) {
        this.H = C(a)
    };
    w(ow, E);
    var pw = Ig(ow);
    ow.ba = [1];
    var qw = function(a) {
        this.H = C(a)
    };
    w(qw, E);
    var rw = function(a) {
        var b = new qw;
        return Zf(b, 1, a)
    }
      , tw = [0, Fg];
    var uw = function(a) {
        this.H = C(a)
    };
    w(uw, E);
    var vw = function(a) {
        var b = new uw;
        return Yf(b, 1, a)
    }
      , ww = function(a) {
        var b = window.Date.now();
        b = Number.isFinite(b) ? Math.round(b) : 0;
        return ff(a, 3, ie(b))
    };
    uw.prototype.getError = function() {
        return Af(this, qw, 10)
    }
    ;
    uw.prototype.ab = function(a) {
        return Df(this, 10, a)
    }
    ;
    var xw = Ig(uw)
      , yw = [0, Bg, -1, vg, yg, -2, vg, ug, Ag, tw, Ag];
    var zw = [0, 1, [0, xg, -2], -1, Bg, -1, Ag, [0, 3, Fg, Bg], vg, Gg, Eg];
    var Aw = function(a) {
        this.H = C(a)
    };
    w(Aw, E);
    Aw.ba = [1, 2];
    Aw.prototype.g = Hg([0, Dg, zw, Dg, yw]);
    var Bw = function() {
        this.g = Math.random()
    }
      , Cw = function() {
        var a = ej
          , b = window.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }
      , hj = function(a, b, c, d, e) {
        if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .01))
            try {
                if (c instanceof Wi)
                    var f = c;
                else
                    f = new Wi,
                    vi(c, function(h, k) {
                        var n = f
                          , m = n.A++;
                        $i(n, m, Xi(k, h))
                    });
                var g = cj(f, "https:", "/pagead/gen_204?id=" + b + "&");
                g && jj(y, g)
            } catch (h) {}
    };
    var ej, Dw, dj = new Ui(1,window);
    (function(a) {
        ej = null != a ? a : new Bw;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Cw();
        Dw = new fj;
        Dw.hd(function() {});
        Dw.de(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || dj.B() : dj.l && Sg(window, "load", function() {
            window.google_measure_js_timing || dj.B()
        })
    }
    )();
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function(a, b) {
        return a + b
    });
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function(a, b) {
        return a + b
    });
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function(a, b) {
        return a + b
    });
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function(a, b) {
        return a + b
    });
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function(a, b) {
        return a + b
    });
    var Ew = function(a) {
        this.H = C(a)
    };
    w(Ew, E);
    Ew.ba = [3];
    var Fw = function(a) {
        this.H = C(a)
    };
    w(Fw, E);
    var Gw = function(a, b) {
        return pf(a, 1, b, ae)
    }
      , Hw = function(a, b) {
        return pf(a, 2, b, ae)
    }
      , Iw = function(a, b) {
        return pf(a, 3, b, de)
    }
      , Jw = function(a, b) {
        pf(a, 4, b, de)
    };
    Fw.ba = [1, 2, 3, 4];
    var Kw = function(a) {
        this.H = C(a)
    };
    w(Kw, E);
    var Lw = function(a) {
        this.H = C(a)
    };
    w(Lw, E);
    Lw.prototype.getVersion = function() {
        return Mf(this, 1)
    }
    ;
    var Mw = function(a, b) {
        return Wf(a, 1, b)
    }
      , Nw = function(a, b) {
        return Df(a, 2, b)
    }
      , Ow = function(a, b) {
        return Df(a, 3, b)
    }
      , Pw = function(a, b) {
        return Wf(a, 4, b)
    }
      , Qw = function(a, b) {
        return Wf(a, 5, b)
    }
      , Rw = function(a, b) {
        return Wf(a, 6, b)
    }
      , Sw = function(a, b) {
        return qf(a, 7, qe(b), "")
    }
      , Tw = function(a, b) {
        return Wf(a, 8, b)
    }
      , Uw = function(a, b) {
        return Wf(a, 9, b)
    }
      , Vw = function(a, b) {
        return qf(a, 10, Xd(b), !1)
    }
      , Ww = function(a, b) {
        return qf(a, 11, Xd(b), !1)
    }
      , Xw = function(a, b) {
        return pf(a, 12, b, ae)
    }
      , Yw = function(a, b) {
        return pf(a, 13, b, ae)
    }
      , Zw = function(a, b) {
        return pf(a, 14, b, ae)
    }
      , $w = function(a, b) {
        return qf(a, 15, Xd(b), !1)
    }
      , ax = function(a, b) {
        return qf(a, 16, qe(b), "")
    }
      , bx = function(a, b) {
        return pf(a, 17, b, de)
    }
      , cx = function(a, b) {
        return pf(a, 18, b, de)
    }
      , dx = function(a, b) {
        return Ff(a, 19, b)
    };
    Lw.ba = [12, 13, 14, 17, 18, 19];
    var ex = function(a) {
        this.H = C(a)
    };
    w(ex, E);
    var fx = "a".charCodeAt()
      , gx = Yg({
        Xh: 0,
        Wh: 1,
        Th: 2,
        Oh: 3,
        Uh: 4,
        Ph: 5,
        Vh: 6,
        Rh: 7,
        Sh: 8,
        Nh: 9,
        Qh: 10,
        Yh: 11
    })
      , hx = Yg({
        ai: 0,
        bi: 1,
        Zh: 2
    });
    var ix = function(a) {
        if (/[^01]/.test(a))
            throw Error("Input bitstring " + a + " is malformed!");
        this.j = a;
        this.g = 0
    }
      , kx = function(a) {
        a = jx(a, 36);
        var b = new Kw;
        b = Xf(b, 1, Math.floor(a / 10));
        return Wf(b, 2, a % 10 * 1E8)
    }
      , lx = function(a) {
        return String.fromCharCode(fx + jx(a, 6)) + String.fromCharCode(fx + jx(a, 6))
    }
      , ox = function(a) {
        var b = jx(a, 16);
        return !0 === !!jx(a, 1) ? (a = mx(a),
        a.forEach(function(c) {
            if (c > b)
                throw Error("ID " + c + " is past MaxVendorId " + b + "!");
        }),
        a) : nx(a, b)
    }
      , px = function(a) {
        for (var b = [], c = jx(a, 12); c--; ) {
            var d = jx(a, 6)
              , e = jx(a, 2)
              , f = mx(a)
              , g = b
              , h = g.push
              , k = new Ew;
            d = qf(k, 1, be(d), 0);
            e = qf(d, 2, be(e), 0);
            f = pf(e, 3, f, de);
            h.call(g, f)
        }
        return b
    }
      , mx = function(a) {
        for (var b = jx(a, 12), c = []; b--; ) {
            var d = !0 === !!jx(a, 1)
              , e = jx(a, 16);
            if (d)
                for (d = jx(a, 16); e <= d; e++)
                    c.push(e);
            else
                c.push(e)
        }
        c.sort(function(f, g) {
            return f - g
        });
        return c
    }
      , nx = function(a, b, c) {
        for (var d = [], e = 0; e < b; e++)
            if (jx(a, 1)) {
                var f = e + 1;
                if (c && -1 === c.indexOf(f))
                    throw Error("ID: " + f + " is outside of allowed values!");
                d.push(f)
            }
        return d
    }
      , jx = function(a, b) {
        if (a.g + b > a.j.length)
            throw Error("Requested length " + b + " is past end of string.");
        var c = a.j.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    };
    ix.prototype.skip = function(a) {
        this.g += a
    }
    ;
    var qx = function(a) {
        try {
            var b = Hc(a).map(function(f) {
                return f.toString(2).padStart(8, "0")
            }).join("")
              , c = new ix(b);
            if (3 !== jx(c, 3))
                return null;
            var d = Hw(Gw(new Fw, nx(c, 24, gx)), nx(c, 24, gx))
              , e = jx(c, 6);
            0 !== e && Jw(Iw(d, nx(c, e)), nx(c, e));
            return d
        } catch (f) {
            return null
        }
    };
    var rx = function(a) {
        try {
            var b = Hc(a).map(function(d) {
                return d.toString(2).padStart(8, "0")
            }).join("")
              , c = new ix(b);
            return dx(cx(bx(ax($w(Zw(Yw(Xw(Ww(Vw(Uw(Tw(Sw(Rw(Qw(Pw(Ow(Nw(Mw(new Lw, jx(c, 6)), kx(c)), kx(c)), jx(c, 12)), jx(c, 12)), jx(c, 6)), lx(c)), jx(c, 12)), jx(c, 6)), !!jx(c, 1)), !!jx(c, 1)), nx(c, 12, hx)), nx(c, 24, gx)), nx(c, 24, gx)), !!jx(c, 1)), lx(c)), ox(c)), ox(c)), px(c))
        } catch (d) {
            return null
        }
    };
    var tx = function(a) {
        if (!a)
            return null;
        var b = a.split(".");
        if (4 < b.length)
            return null;
        a = rx(b[0]);
        if (!a)
            return null;
        var c = new ex;
        a = Df(c, 1, a);
        b.shift();
        b = u(b);
        for (c = b.next(); !c.done; c = b.next())
            switch (c = c.value,
            sx(c)) {
            case 1:
            case 2:
                break;
            case 3:
                c = qx(c);
                if (!c)
                    return null;
                Df(a, 2, c);
                break;
            default:
                return null
            }
        return a
    }
      , sx = function(a) {
        try {
            var b = Hc(a).map(function(c) {
                return c.toString(2).padStart(8, "0")
            }).join("");
            return jx(new ix(b), 3)
        } catch (c) {
            return -1
        }
    };
    var ux = function(a, b) {
        var c = {};
        if (Array.isArray(b) && 0 !== b.length) {
            b = u(b);
            for (var d = b.next(); !d.done; d = b.next())
                d = d.value,
                c[d] = -1 !== a.indexOf(d)
        } else
            for (a = u(a),
            b = a.next(); !b.done; b = a.next())
                c[b.value] = !0;
        delete c[0];
        return c
    };
    var vx = function(a) {
        var b = void 0 === b ? [] : b;
        this.g = a;
        this.defaultValue = b
    };
    var sn = new function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? 0 : b
    }
    (494575051)
      , wx = new vx(489560439)
      , xx = new vx(505762507);
    var qn = new function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }
    (635466687);
    var yx = function(a) {
        this.H = C(a)
    };
    w(yx, E);
    var zx = function(a) {
        var b = new yx;
        rf(b, 1, ae, a)
    };
    yx.ba = [1];
    var Ax = /^((market|itms|intent|itms-appss):\/\/)/i;
    var Bx = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
    var Cx = function(a) {
        var b = a.sb;
        var c = a.bb;
        var d = a.height;
        var e = a.width;
        a = void 0 === a.Ea ? !1 : a.Ea;
        this.sb = b;
        this.bb = c;
        this.height = d;
        this.width = e;
        this.Ea = a
    };
    Cx.prototype.getHeight = function() {
        return this.height
    }
    ;
    Cx.prototype.getWidth = function() {
        return this.width
    }
    ;
    var Dx = function(a) {
        var b = a.kh;
        var c = a.Tf;
        var d = a.sb;
        var e = a.bb;
        var f = a.jh;
        var g = a.Sf;
        Cx.call(this, {
            sb: d,
            bb: e,
            height: a.height,
            width: a.width,
            Ea: void 0 === a.Ea ? !1 : a.Ea
        });
        this.A = b;
        this.j = c;
        this.l = f;
        this.g = g
    };
    w(Dx, Cx);
    var Ex = function(a) {
        var b = a.Ag;
        Cx.call(this, {
            sb: a.sb,
            bb: a.bb,
            height: a.height,
            width: a.width,
            Ea: void 0 === a.Ea ? !1 : a.Ea
        });
        this.g = b
    };
    w(Ex, Cx);
    Ex.prototype.getMediaUrl = function() {
        return this.g
    }
    ;
    function Fx(a) {
        return new (Function.prototype.bind.apply(a, [null].concat(ia(Ka.apply(1, arguments)))))
    }
    ;var Gx = function(a, b, c, d) {
        P.call(this);
        this.F = b;
        this.D = c;
        this.C = d;
        this.o = new Map;
        this.I = 0;
        this.A = new Map;
        this.B = new Map;
        this.l = void 0;
        this.j = a
    };
    w(Gx, P);
    Gx.prototype.N = function() {
        delete this.g;
        this.o.clear();
        this.A.clear();
        this.B.clear();
        this.l && (Tg(this.j, "message", this.l),
        delete this.l);
        delete this.j;
        delete this.C;
        P.prototype.N.call(this)
    }
    ;
    var Hx = function(a) {
        if (a.g)
            return a.g;
        a.D && a.D(a.j) ? a.g = a.j : a.g = Ai(a.j, a.F);
        var b;
        return null != (b = a.g) ? b : null
    }
      , Jx = function(a, b, c) {
        if (Hx(a))
            if (a.g === a.j)
                (b = a.o.get(b)) && b(a.g, c);
            else {
                var d = a.A.get(b);
                if (d && d.fc) {
                    Ix(a);
                    var e = ++a.I;
                    a.B.set(e, {
                        Kb: d.Kb,
                        ag: d.Qc(c),
                        Mg: "addEventListener" === b
                    });
                    a.g.postMessage(d.fc(c, e), "*")
                }
            }
    }
      , Ix = function(a) {
        a.l || (a.l = function(b) {
            try {
                var c = a.C ? a.C(b) : void 0;
                if (c) {
                    var d = c.Pe
                      , e = a.B.get(d);
                    if (e) {
                        e.Mg || a.B.delete(d);
                        var f;
                        null == (f = e.Kb) || f.call(e, e.ag, c.payload)
                    }
                }
            } catch (g) {}
        }
        ,
        Sg(a.j, "message", a.l))
    };
    var Kx = function(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , Lx = function(a, b) {
        b = void 0 === b ? {} : b;
        P.call(this);
        this.j = a;
        this.g = null;
        this.B = {};
        this.C = 0;
        var c;
        this.A = null != (c = b.timeoutMs) ? c : 500;
        var d;
        this.o = null != (d = b.Qi) ? d : !1;
        this.l = null
    };
    w(Lx, P);
    Lx.prototype.N = function() {
        this.B = {};
        this.l && (Tg(this.j, "message", this.l),
        delete this.l);
        delete this.B;
        delete this.j;
        delete this.g;
        P.prototype.N.call(this)
    }
    ;
    var Nx = function(a) {
        return "function" === typeof a.j.__tcfapi || null != Mx(a)
    }
      , Qx = function(a, b) {
        var c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.o
        }
          , d = Og(function() {
            return b(c)
        })
          , e = 0;
        -1 !== a.A && (e = setTimeout(function() {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.A));
        Ox(a, "addEventListener", function(f) {
            f && (c = f,
            c.internalErrorState = Kx(c),
            c.internalBlockOnErrors = a.o,
            Px(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"),
            Ox(a, "removeEventListener", null, c.listenerId),
            (f = e) && clearTimeout(f),
            d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f))
        })
    };
    Lx.prototype.addEventListener = function(a) {
        var b = this
          , c = {
            internalBlockOnErrors: this.o
        }
          , d = Og(function() {
            return a(c)
        })
          , e = 0;
        -1 !== this.A && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.A));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g,
            c.internalErrorState = Kx(c),
            c.internalBlockOnErrors = b.o,
            h && 0 === c.internalErrorState || (c.tcString = "tcunavailable",
            h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
            c.internalErrorState = 3);
            a(c)
        };
        try {
            Ox(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable",
            c.internalErrorState = 3,
            e && (clearTimeout(e),
            e = 0),
            d()
        }
    }
    ;
    Lx.prototype.removeEventListener = function(a) {
        a && a.listenerId && Ox(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var Sx = function(a, b, c) {
        var d = void 0 === d ? "755" : d;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var e = a.publisher.restrictions[b];
                if (void 0 !== e) {
                    e = e[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        if (0 === e)
            return !1;
        var f = c;
        2 === c ? (f = 0,
        2 === e && (f = 1)) : 3 === c && (f = 1,
        1 === e && (f = 0));
        a = 0 === f ? a.purpose && a.vendor ? (c = Rx(a.vendor.consents, void 0 === d ? "755" : d)) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : c && Rx(a.purpose.consents, b) : !0 : 1 === f ? a.purpose && a.vendor ? Rx(a.purpose.legitimateInterests, b) && Rx(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return a
    }
      , Rx = function(a, b) {
        return !(!a || !a[b])
    }
      , Ox = function(a, b, c, d) {
        c || (c = function() {}
        );
        if ("function" === typeof a.j.__tcfapi)
            a = a.j.__tcfapi,
            a(b, 2, c, d);
        else if (Mx(a)) {
            Tx(a);
            var e = ++a.C;
            a.B[e] = c;
            a.g && (c = {},
            a.g.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            },
            c), "*"))
        } else
            c({}, !1)
    }
      , Mx = function(a) {
        if (a.g)
            return a.g;
        a.g = Ai(a.j, "__tcfapiLocator");
        return a.g
    }
      , Tx = function(a) {
        a.l || (a.l = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.B[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        Sg(a.j, "message", a.l))
    }
      , Px = function(a) {
        if (!1 === a.gdprApplies)
            return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Kx(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (lj({
            e: String(a.internalErrorState)
        }, "tcfe"),
        !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }
      , Ux = function(a) {
        var b = ["2", "7", "9", "10"];
        return !1 === a.gdprApplies ? !0 : b.every(function(c) {
            return Sx(a, c, 3)
        })
    };
    var Vx = function(a, b) {
        b = b.listener;
        (a = (0,
        a.__gpp)("addEventListener", b)) && b(a, !0)
    }
      , Wx = function(a, b) {
        (0,
        a.__gpp)("removeEventListener", b.listener, b.listenerId)
    }
      , Xx = function(a, b) {
        (0,
        a.__gpp)("getSection", function(c) {
            b.va({
                Dc: null != c ? c : void 0,
                Gc: c ? void 0 : 4
            })
        }, b.apiPrefix)
    }
      , Yx = {
        Qc: function(a) {
            return a.listener
        },
        fc: function(a, b) {
            a = {};
            return a.__gppCall = {
                callId: b,
                command: "addEventListener",
                version: "1.1"
            },
            a
        },
        Kb: function(a, b) {
            b = b.__gppReturn;
            a(b.returnValue, b.success)
        }
    }
      , Zx = {
        Qc: function(a) {
            return a.listener
        },
        fc: function(a, b) {
            var c = {};
            return c.__gppCall = {
                callId: b,
                command: "removeEventListener",
                version: "1.1",
                parameter: a.listenerId
            },
            c
        },
        Kb: function(a, b) {
            b = b.__gppReturn;
            var c = b.returnValue.data;
            null == a || a(c, b.success)
        }
    }
      , $x = {
        Qc: function(a) {
            return a.va
        },
        fc: function(a, b) {
            var c = {};
            return c.__gppCall = {
                callId: b,
                command: "getSection",
                version: "1.1",
                parameter: a.apiPrefix
            },
            c
        },
        Kb: function(a, b) {
            b = b.__gppReturn;
            var c;
            a({
                Dc: null != (c = b.returnValue) ? c : void 0,
                Gc: b.success ? void 0 : 2
            })
        }
    };
    function ay(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Pe: b.__gppReturn.callId
        }
    }
    var by = function(a, b) {
        var c = void 0 === b ? {} : b;
        b = c.timeoutMs;
        c = c.cmpInteractionEventReporter;
        P.call(this);
        this.caller = new Gx(a,"__gppLocator",function(d) {
            return "function" === typeof d.__gpp
        }
        ,ay);
        this.caller.o.set("addEventListener", Vx);
        this.caller.A.set("addEventListener", Yx);
        this.caller.o.set("removeEventListener", Wx);
        this.caller.A.set("removeEventListener", Zx);
        this.caller.o.set("getDataWithCallback", Xx);
        this.caller.A.set("getDataWithCallback", $x);
        this.timeoutMs = null != b ? b : 500;
        this.cmpInteractionEventReporter = c
    };
    w(by, P);
    by.prototype.N = function() {
        this.caller.V();
        P.prototype.N.call(this)
    }
    ;
    by.prototype.addEventListener = function(a) {
        var b = this
          , c = Og(function() {
            a(cy, !0)
        })
          , d = -1 === this.timeoutMs ? void 0 : setTimeout(function() {
            c()
        }, this.timeoutMs);
        Jx(this.caller, "addEventListener", {
            listener: function(e, f) {
                clearTimeout(d);
                try {
                    var g;
                    if (void 0 === (null == (g = e.pingData) ? void 0 : g.gppVersion) || "1" === e.pingData.gppVersion || "1.0" === e.pingData.gppVersion) {
                        b.removeEventListener(e.listenerId);
                        var h = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 1,
                                gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                applicableSections: [-1]
                            }
                        }
                    } else
                        Array.isArray(e.pingData.applicableSections) ? h = e : (b.removeEventListener(e.listenerId),
                        h = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 2,
                                gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                                applicableSections: [-1]
                            }
                        });
                    a(h, f);
                    var k;
                    null == (k = b.cmpInteractionEventReporter) || k.g()
                } catch (n) {
                    if (null == e ? 0 : e.listenerId)
                        try {
                            b.removeEventListener(e.listenerId)
                        } catch (m) {
                            a(dy, !0);
                            return
                        }
                    a(ey, !0)
                }
            }
        })
    }
    ;
    by.prototype.removeEventListener = function(a) {
        Jx(this.caller, "removeEventListener", {
            listener: function() {},
            listenerId: a
        })
    }
    ;
    var ey = {
        eventName: "signalStatus",
        data: "ready",
        pingData: {
            internalErrorState: 2,
            gppString: "GPP_ERROR_STRING_UNAVAILABLE",
            applicableSections: [-1]
        },
        listenerId: -1
    }
      , cy = {
        eventName: "signalStatus",
        data: "ready",
        pingData: {
            gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
            internalErrorState: 2,
            applicableSections: [-1]
        },
        listenerId: -1
    }
      , dy = {
        eventName: "signalStatus",
        data: "ready",
        pingData: {
            gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
            internalErrorState: 2,
            applicableSections: [-1]
        },
        listenerId: -1
    };
    zx([1, 8, 9, 10, 11, 12, 2, 3, 4, 5, 15, 16]);
    zx([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
    zx([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
    new yx;
    var T = function(a, b) {
        this.j = this.B = this.A = "";
        this.J = null;
        this.L = this.l = "";
        this.o = !1;
        var c;
        a instanceof T ? (this.o = void 0 !== b ? b : a.o,
        fy(this, a.A),
        this.B = a.B,
        this.j = a.j,
        gy(this, a.J),
        this.l = a.l,
        hy(this, iy(a.g)),
        this.L = a.D()) : a && (c = String(a).match(ki)) ? (this.o = !!b,
        fy(this, c[1] || "", !0),
        this.B = jy(c[2] || ""),
        this.j = jy(c[3] || "", !0),
        gy(this, c[4]),
        this.l = jy(c[5] || "", !0),
        hy(this, c[6] || "", !0),
        this.L = jy(c[7] || "")) : (this.o = !!b,
        this.g = new ky(null,this.o))
    };
    T.prototype.toString = function() {
        var a = []
          , b = this.A;
        b && a.push(ly(b, my, !0), ":");
        var c = this.j;
        if (c || "file" == b)
            a.push("//"),
            (b = this.B) && a.push(ly(b, my, !0), "@"),
            a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            c = this.J,
            null != c && a.push(":", String(c));
        if (c = this.l)
            this.j && "/" != c.charAt(0) && a.push("/"),
            a.push(ly(c, "/" == c.charAt(0) ? ny : oy, !0));
        (c = this.g.toString()) && a.push("?", c);
        (c = this.D()) && a.push("#", ly(c, py));
        return a.join("")
    }
    ;
    T.prototype.resolve = function(a) {
        var b = this.F()
          , c = !!a.A;
        c ? fy(b, a.A) : c = !!a.B;
        c ? b.B = a.B : c = !!a.j;
        c ? b.j = a.j : c = null != a.J;
        var d = a.l;
        if (c)
            gy(b, a.J);
        else if (c = !!a.l) {
            if ("/" != d.charAt(0))
                if (this.j && !this.l)
                    d = "/" + d;
                else {
                    var e = b.l.lastIndexOf("/");
                    -1 != e && (d = b.l.slice(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e)
                d = "";
            else if (pb(e, "./") || pb(e, "/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length; ) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                    d && g == e.length && f.push("")) : (f.push(h),
                    d = !0)
                }
                d = f.join("/")
            } else
                d = e
        }
        c ? b.l = d : c = "" !== a.g.toString();
        c ? hy(b, iy(a.g)) : c = !!a.L;
        c && (b.L = a.D());
        return b
    }
    ;
    T.prototype.F = function() {
        return new T(this)
    }
    ;
    var fy = function(a, b, c) {
        a.A = c ? jy(b, !0) : b;
        a.A && (a.A = a.A.replace(/:$/, ""))
    }
      , gy = function(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("Bad port number " + b);
            a.J = b
        } else
            a.J = null
    }
      , hy = function(a, b, c) {
        b instanceof ky ? (a.g = b,
        qy(a.g, a.o)) : (c || (b = ly(b, ry)),
        a.g = new ky(b,a.o))
    }
      , sy = function(a, b, c) {
        a.g.set(b, c);
        return a
    };
    T.prototype.D = function() {
        return this.L
    }
    ;
    var ty = function(a) {
        return a instanceof T ? a.F() : new T(a,void 0)
    }
      , jy = function(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }
      , ly = function(a, b, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b, uy),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a) : null
    }
      , uy = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
      , my = /[#\/\?@]/g
      , oy = /[#\?:]/g
      , ny = /[#\?]/g
      , ry = /[#\?@]/g
      , py = /#/g
      , ky = function(a, b) {
        this.j = this.g = null;
        this.l = a || null;
        this.A = !!b
    }
      , vy = function(a) {
        a.g || (a.g = new Map,
        a.j = 0,
        a.l && mi(a.l, function(b, c) {
            a.add(Jh(b), c)
        }))
    };
    ky.prototype.add = function(a, b) {
        vy(this);
        this.l = null;
        a = wy(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.j += 1;
        return this
    }
    ;
    ky.prototype.remove = function(a) {
        vy(this);
        a = wy(this, a);
        return this.g.has(a) ? (this.l = null,
        this.j -= this.g.get(a).length,
        this.g.delete(a)) : !1
    }
    ;
    ky.prototype.clear = function() {
        this.g = this.l = null;
        this.j = 0
    }
    ;
    ky.prototype.isEmpty = function() {
        vy(this);
        return 0 == this.j
    }
    ;
    var yy = function(a, b) {
        vy(a);
        b = wy(a, b);
        return a.g.has(b)
    };
    l = ky.prototype;
    l.forEach = function(a, b) {
        vy(this);
        this.g.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    }
    ;
    l.Ic = function() {
        vy(this);
        for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    }
    ;
    l.Gb = function(a) {
        vy(this);
        var b = [];
        if ("string" === typeof a)
            yy(this, a) && (b = b.concat(this.g.get(wy(this, a))));
        else {
            a = Array.from(this.g.values());
            for (var c = 0; c < a.length; c++)
                b = b.concat(a[c])
        }
        return b
    }
    ;
    l.set = function(a, b) {
        vy(this);
        this.l = null;
        a = wy(this, a);
        yy(this, a) && (this.j -= this.g.get(a).length);
        this.g.set(a, [b]);
        this.j += 1;
        return this
    }
    ;
    l.get = function(a, b) {
        if (!a)
            return b;
        a = this.Gb(a);
        return 0 < a.length ? String(a[0]) : b
    }
    ;
    l.toString = function() {
        if (this.l)
            return this.l;
        if (!this.g)
            return "";
        for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
            var d = b[c]
              , e = encodeURIComponent(String(d));
            d = this.Gb(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.l = a.join("&")
    }
    ;
    var iy = function(a) {
        var b = new ky;
        b.l = a.l;
        a.g && (b.g = new Map(a.g),
        b.j = a.j);
        return b
    }
      , wy = function(a, b) {
        b = String(b);
        a.A && (b = b.toLowerCase());
        return b
    }
      , qy = function(a, b) {
        b && !a.A && (vy(a),
        a.l = null,
        a.g.forEach(function(c, d) {
            var e = d.toLowerCase();
            d != e && (this.remove(d),
            this.remove(e),
            0 < c.length && (this.l = null,
            this.g.set(wy(this, e), Zb(c)),
            this.j += c.length))
        }, a));
        a.A = b
    };
    var zy, Ay, By, Cy = function() {
        return y.navigator ? y.navigator.userAgent : ""
    }, Dy = pb(Cy(), "(iPad") || pb(Cy(), "(Macintosh") || pb(Cy(), "(iPod") || pb(Cy(), "(iPhone");
    var Ey = "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" ")
      , Fy = ["c.googlesyndication.com"];
    function Gy(a, b) {
        b = void 0 === b ? window.location.protocol : b;
        var c = !1;
        null == a || !a.startsWith("http") || (null == a ? 0 : a.startsWith("https")) ? c = !1 : Hy(a, Fy) ? c = !1 : b.includes("https") && Hy(a, Ey) && (c = !0);
        return c ? (a = new T(a),
        K(J.getInstance(), "htp", "1"),
        fy(a, "https"),
        a.toString()) : a
    }
    function Iy(a) {
        if (!a)
            return !1;
        try {
            var b = "string" === typeof a ? new T(a) : a;
            return "gcache" == b.A && !!b.g.get("url")
        } catch (c) {
            return !1
        }
    }
    function Jy(a) {
        try {
            var b = "string" === typeof a ? new T(a) : a;
            if (Iy(b)) {
                var c = b.g.get("url");
                return "undefined" === typeof c ? null : c
            }
        } catch (d) {}
        return null
    }
    function Hy(a, b) {
        return (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)","i")).test(a)
    }
    ;var Ky = -1;
    function Ly(a, b) {
        b = null != b ? b : "";
        ic && (b = "");
        if (!nb(Mh(a))) {
            var c = a instanceof oh || !Ax.test(a) ? a : new oh(a);
            if (c instanceof oh)
                var d = c;
            else {
                d = void 0 === d ? sh : d;
                a: if (d = void 0 === d ? sh : d,
                !(a instanceof oh)) {
                    for (c = 0; c < d.length; ++c) {
                        var e = d[c];
                        if (e instanceof qh && e.xg(a)) {
                            a = new oh(a);
                            break a
                        }
                    }
                    a = void 0
                }
                d = a || ph
            }
            a = window;
            if (d instanceof oh)
                if (d instanceof oh)
                    d = d.g;
                else
                    throw Error("");
            else
                d = uh.test(d) ? d : void 0;
            void 0 !== d && a.open(d, "_blank", b)
        }
    }
    ;function My(a, b) {
        for (var c; !(c = a.next()).done; )
            b(c.value)
    }
    var Ny = function(a, b) {
        this.g = a[y.Symbol.iterator]();
        this.j = b
    };
    Ny.prototype[Symbol.iterator] = function() {
        return this
    }
    ;
    Ny.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.j.call(void 0, a.value),
            done: a.done
        }
    }
    ;
    var Oy = function(a, b) {
        return new Ny(a,b)
    };
    var Py = function(a, b) {
        var c = new Set(a);
        My(b[Symbol.iterator](), function(d) {
            return c.add(d)
        });
        return c
    };
    var Qy = new Map
      , Ry = function() {
        this.j = this.g = null
    };
    function Sy(a, b, c, d) {
        var e = sp(a);
        Eh(b, e) ? (e = setTimeout(function() {
            return Sy(a, b, c, d)
        }, 200),
        d.j = e) : (Ty(d),
        c(e))
    }
    function Uy(a) {
        var b = new Ry, c = new Promise(function(f) {
            var g = sp(a);
            if ("ResizeObserver"in window) {
                var h = new ResizeObserver(function(k) {
                    window.requestAnimationFrame(function() {
                        for (var n = new F(0,0), m = u(k), p = m.next(); !p.done; p = m.next())
                            if (p = p.value,
                            p.contentBoxSize ? (p = Array.isArray(p.contentBoxSize) ? p.contentBoxSize[0] : p.contentBoxSize,
                            n.width = Math.floor(p.inlineSize),
                            n.height = Math.floor(p.blockSize)) : (n.width = Math.floor(p.contentRect.width),
                            n.height = Math.floor(p.contentRect.height)),
                            !Eh(g, n))
                                return Ty(b),
                                f(n)
                    })
                }
                );
                b.g = h;
                h.observe(a)
            } else
                Sy(a, g, f, b)
        }
        ), d, e = null != (d = Qy.get(c)) ? d : new Set;
        e.add(b);
        Qy.set(c, e);
        return c
    }
    function Vy(a, b) {
        b = void 0 === b ? new F(1,1) : b;
        var c = function(g) {
            var h = Uy(a), k, n = null != (k = Qy.get(g)) ? k : new Set, m;
            k = null != (m = Qy.get(h)) ? m : new Set;
            Qy.set(g, Py(n, k));
            return h
        }, d = function(g, h) {
            c(g).then(function(k) {
                return b.width <= k.width && b.height <= k.height ? (Wy(g),
                h(k)) : d(g, h)
            })
        }, e, f = new Promise(function(g) {
            e = g
        }
        );
        d(f, e);
        return f
    }
    function Wy(a) {
        a = Qy.get(a);
        a = u(a);
        for (var b = a.next(); !b.done; b = a.next())
            Ty(b.value)
    }
    function Ty(a) {
        a.j && window.clearTimeout(a.j);
        a.g && (a.g.disconnect(),
        a.g = null)
    }
    ;function Xy(a, b) {
        return a && (a[b] || (a[b] = {}))
    }
    function Yy(a, b) {
        var c;
        if (c = void 0 === c ? "undefined" === typeof omidExports ? null : omidExports : c)
            a = a.split("."),
            a.slice(0, a.length - 1).reduce(Xy, c)[a[a.length - 1]] = b
    }
    ;var Zy = new Map([[2, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.moatads\.com\/.*$/]], [3, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.doubleverify\.com\/.*$/, /^(https?:\/\/|\/\/)?c\.[\w\-]+\.com\/vfw\/dv\/.*$/, /^(https?:\/\/|\/\/)?(www\.)?[\w]+\.tv\/r\/s\/d\/.*$/, /^(https?:\/\/|\/\/)?(\w\.?)+\.dv\.tech\/.*$/]], [4, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.adsafeprotected\.com\/.*$/]], [5, [/^https?:\/\/(q|cdn)\.adrta\.com\/s\/.*\/(aa|aanf)\.js.*$/, /^https:\/\/cdn\.rta247\.com\/s\/.*\/(aa|aanf)\.js.*$/]], [6, []], [7, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.voicefive\.com\/.*$/, /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.measuread\.com\/.*$/, /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.scorecardresearch\.com\/.*$/]], [8, [/^(https?:\/\/|\/\/)?s418\.mxcdn\.net\/bb-serve\/omid-meetrics.*\.js$/]], [9, [/^(https?:\/\/|\/\/)?pagead2\.googlesyndication\.com\/.*$/, /^(https?:\/\/|\/\/)?www\.googletagservices\.com\/.*$/]]]);
    Yy("OmidSessionClient.verificationVendorIdForScriptUrl", function(a) {
        for (var b = u(Zy.keys()), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            for (var d = u(Zy.get(c)), e = d.next(); !e.done; e = d.next())
                if (e.value.test(a))
                    return c
        }
        return 1
    });
    Yy("OmidSessionClient.VerificationVendorId", {
        OTHER: 1,
        MOAT: 2,
        DOUBLEVERIFY: 3,
        INTEGRAL_AD_SCIENCE: 4,
        PIXELATE: 5,
        NIELSEN: 6,
        COMSCORE: 7,
        MEETRICS: 8,
        GOOGLE: 9
    });
    var $y = /OS (\S+) like/
      , az = /Android ([\d\.]+)/;
    function bz(a, b) {
        a = (a = a.exec(vb())) ? a[1] : "";
        a = a.replace(/_/g, ".");
        return 0 <= sb(a, b)
    }
    var cz = function() {
        return pc || mc && "ontouchstart"in document.documentElement
    }
      , dz = function(a) {
        return rc && bz($y, a)
    }
      , ez = function(a) {
        return (a = void 0 === a ? null : a) && "function" === typeof a.getAttribute ? a.getAttribute("playsinline") ? !0 : !1 : !1
    };
    var fz = function(a) {
        S.call(this);
        this.j = a;
        this.o = this.B = !1;
        this.C = this.D = 0;
        this.g = new rv(1E3);
        R(this, this.g);
        Du(this.g, "tick", this.F, !1, this);
        Du(this.j, "pause", this.l, !1, this);
        Du(this.j, "playing", this.l, !1, this);
        Du(this.j, "ended", this.l, !1, this);
        Du(this.j, "timeupdate", this.l, !1, this)
    };
    w(fz, S);
    var gz = function(a) {
        var b;
        return null != (b = a.j.currentTime) ? b : a.j.getCurrentTime()
    };
    fz.prototype.l = function(a) {
        switch (a.type) {
        case "playing":
            hz(this);
            break;
        case "pause":
        case "ended":
            this.g.enabled && this.g.stop();
            break;
        case "timeupdate":
            !this.B && 0 < gz(this) && (this.B = !0,
            hz(this))
        }
    }
    ;
    var hz = function(a) {
        !a.g.enabled && a.B && (a.D = 1E3 * gz(a),
        a.C = Date.now(),
        a.o = !1,
        a.g.start())
    };
    fz.prototype.F = function() {
        var a = Date.now()
          , b = a - this.C
          , c = 1E3 * gz(this);
        c - this.D < .5 * b ? this.o || (this.o = !0,
        this.dispatchEvent("playbackStalled")) : this.o = !1;
        this.D = c;
        this.C = a
    }
    ;
    var iz = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" ")
      , jz = /\bocr\b/;
    function kz(a) {
        if (nb(Mh(a)) || ic && 2048 < a.length)
            return !1;
        try {
            if ((new T(a)).D().match(jz))
                return !0
        } catch (b) {}
        return null != iz.find(function(b) {
            return null != a.match(b)
        })
    }
    ;function lz(a, b) {
        return nb(b) ? !1 : (new RegExp(a)).test(b)
    }
    function mz(a) {
        var b = {};
        a.split(",").forEach(function(c) {
            var d = c.split("=");
            2 == d.length && (c = ob(d[0]),
            d = ob(d[1]),
            0 < c.length && (b[c] = d))
        });
        return b
    }
    function nz(a) {
        var b = "af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu".split(" ");
        if (!a)
            return null;
        a = a.toLowerCase().replace("-", "_");
        if (b.includes(a))
            return a;
        a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
        return b.includes(a) ? a : null
    }
    ;var oz = function() {
        this.g = Date.now()
    };
    oz.prototype.reset = function() {
        this.g = Date.now()
    }
    ;
    var pz = function(a) {
        a = a.g + 5E3 - Date.now();
        return 0 < a ? a : 0
    };
    var qz = function(a, b) {
        this.url = a;
        this.g = void 0 === b ? null : b
    };
    var rz = function(a) {
        switch (a) {
        case 0:
            return "No Error";
        case 1:
            return "Access denied to content document";
        case 2:
            return "File not found";
        case 3:
            return "Firefox silently errored";
        case 4:
            return "Application custom error";
        case 5:
            return "An exception occurred";
        case 6:
            return "Http response at 400 or 500 level";
        case 7:
            return "Request was aborted";
        case 8:
            return "Request timed out";
        case 9:
            return "The resource is not available offline";
        default:
            return "Unrecognized error code"
        }
    };
    var sz = function(a) {
        var b = Error.call(this, a);
        this.message = b.message;
        "stack"in b && (this.stack = b.stack);
        this.errorCode = a
    };
    w(sz, Error);
    var tz = function(a) {
        P.call(this);
        this.A = a;
        this.j = {}
    };
    bb(tz, P);
    var uz = [];
    tz.prototype.listen = function(a, b, c, d) {
        return vz(this, a, b, c, d)
    }
    ;
    var vz = function(a, b, c, d, e, f) {
        Array.isArray(c) || (c && (uz[0] = c.toString()),
        c = uz);
        for (var g = 0; g < c.length; g++) {
            var h = Du(b, c[g], d || a.handleEvent, e || !1, f || a.A || a);
            if (!h)
                break;
            a.j[h.key] = h
        }
        return a
    };
    tz.prototype.ec = function(a, b, c, d) {
        return wz(this, a, b, c, d)
    }
    ;
    var wz = function(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var g = 0; g < c.length; g++)
                wz(a, b, c[g], d, e, f);
        else {
            b = Cu(b, c, d || a.handleEvent, e, f || a.A || a);
            if (!b)
                return a;
            a.j[b.key] = b
        }
        return a
    };
    tz.prototype.rb = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                this.rb(a, b[f], c, d, e);
        else
            c = c || this.handleEvent,
            d = Sa(d) ? !!d.capture : !!d,
            e = e || this.A || this,
            c = Eu(c),
            d = !!d,
            b = ru(a) ? a.Wb(b, c, d, e) : a ? (a = Gu(a)) ? a.Wb(b, c, d, e) : null : null,
            b && (Lu(b),
            delete this.j[b.key])
    }
    ;
    var xz = function(a) {
        Ug(a.j, function(b, c) {
            this.j.hasOwnProperty(c) && Lu(b)
        }, a);
        a.j = {}
    };
    tz.prototype.N = function() {
        tz.Ga.N.call(this);
        xz(this)
    }
    ;
    tz.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    var yz = function() {};
    yz.prototype.g = null;
    var Cz = function(a) {
        var b;
        (b = a.g) || (b = a.g = {});
        return b
    };
    var Dz, Ez = function() {};
    bb(Ez, yz);
    Dz = new Ez;
    var Fz = function(a) {
        S.call(this);
        this.headers = new Map;
        this.W = a || null;
        this.j = !1;
        this.D = this.g = null;
        this.K = "";
        this.o = 0;
        this.l = this.I = this.B = this.F = !1;
        this.M = 0;
        this.C = null;
        this.U = "";
        this.O = !1
    };
    bb(Fz, S);
    var Gz = /^https?$/i
      , Hz = ["POST", "PUT"]
      , Kz = function(a, b, c, d) {
        if (a.g)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + a.K + "; newUri=" + b);
        c = c ? c.toUpperCase() : "GET";
        a.K = b;
        a.o = 0;
        a.F = !1;
        a.j = !0;
        a.g = new XMLHttpRequest;
        a.D = a.W ? Cz(a.W) : Cz(Dz);
        a.g.onreadystatechange = $a(a.T, a);
        try {
            a.I = !0,
            a.g.open(c, String(b), !0),
            a.I = !1
        } catch (g) {
            Iz(a);
            return
        }
        b = d || "";
        d = new Map(a.headers);
        var e = Array.from(d.keys()).find(function(g) {
            return "content-type" == g.toLowerCase()
        })
          , f = y.FormData && b instanceof y.FormData;
        !Ub(Hz, c) || e || f || d.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        c = u(d);
        for (d = c.next(); !d.done; d = c.next())
            e = u(d.value),
            d = e.next().value,
            e = e.next().value,
            a.g.setRequestHeader(d, e);
        a.U && (a.g.responseType = a.U);
        "withCredentials"in a.g && a.g.withCredentials !== a.O && (a.g.withCredentials = a.O);
        try {
            Jz(a),
            0 < a.M && (a.C = tv(a.aa, a.M, a)),
            a.B = !0,
            a.g.send(b),
            a.B = !1
        } catch (g) {
            Iz(a)
        }
    };
    Fz.prototype.aa = function() {
        "undefined" != typeof Na && this.g && (this.o = 8,
        this.dispatchEvent("timeout"),
        this.abort(8))
    }
    ;
    var Iz = function(a) {
        a.j = !1;
        a.g && (a.l = !0,
        a.g.abort(),
        a.l = !1);
        a.o = 5;
        Lz(a);
        Mz(a)
    }
      , Lz = function(a) {
        a.F || (a.F = !0,
        a.dispatchEvent("complete"),
        a.dispatchEvent("error"))
    };
    Fz.prototype.abort = function(a) {
        this.g && this.j && (this.j = !1,
        this.l = !0,
        this.g.abort(),
        this.l = !1,
        this.o = a || 7,
        this.dispatchEvent("complete"),
        this.dispatchEvent("abort"),
        Mz(this))
    }
    ;
    Fz.prototype.N = function() {
        this.g && (this.j && (this.j = !1,
        this.l = !0,
        this.g.abort(),
        this.l = !1),
        Mz(this, !0));
        Fz.Ga.N.call(this)
    }
    ;
    Fz.prototype.T = function() {
        this.Ca() || (this.I || this.B || this.l ? Nz(this) : this.Z())
    }
    ;
    Fz.prototype.Z = function() {
        Nz(this)
    }
    ;
    var Nz = function(a) {
        if (a.j && "undefined" != typeof Na && (!a.D[1] || 4 != Oz(a) || 2 != Pz(a)))
            if (a.B && 4 == Oz(a))
                tv(a.T, 0, a);
            else if (a.dispatchEvent("readystatechange"),
            4 == Oz(a)) {
                a.j = !1;
                try {
                    var b = Pz(a);
                    a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default:
                        c = !1
                    }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = 0 === b) {
                            var f = String(a.K).match(ki)[1] || null;
                            !f && y.self && y.self.location && (f = y.self.location.protocol.slice(0, -1));
                            e = !Gz.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                    }
                    d ? (a.dispatchEvent("complete"),
                    a.dispatchEvent("success")) : (a.o = 6,
                    Lz(a))
                } finally {
                    Mz(a)
                }
            }
    }
      , Mz = function(a, b) {
        if (a.g) {
            Jz(a);
            var c = a.g
              , d = a.D[0] ? function() {}
            : null;
            a.g = null;
            a.D = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }
      , Jz = function(a) {
        a.C && (y.clearTimeout(a.C),
        a.C = null)
    };
    Fz.prototype.isActive = function() {
        return !!this.g
    }
    ;
    var Oz = function(a) {
        return a.g ? a.g.readyState : 0
    }
      , Pz = function(a) {
        try {
            return 2 < Oz(a) ? a.g.status : -1
        } catch (b) {
            return -1
        }
    }
      , Qz = function(a) {
        if (a.g) {
            a: {
                a = a.g.responseText;
                if (y.JSON)
                    try {
                        var b = y.JSON.parse(a);
                        break a
                    } catch (c) {}
                b = Ok(a)
            }
            return b
        }
    };
    var Rz = function() {};
    Rz.prototype.get = function(a) {
        return Sz({
            url: a.url,
            timeout: a.timeout,
            withCredentials: void 0 === a.withCredentials ? !0 : a.withCredentials,
            method: "GET",
            headers: void 0 === a.headers ? {} : a.headers
        })
    }
    ;
    var Sz = function(a) {
        var b = a.url;
        var c = a.timeout;
        var d = a.withCredentials;
        var e = a.method;
        var f = void 0 === a.content ? void 0 : a.content;
        var g = void 0 === a.headers ? {} : a.headers;
        return Tz({
            url: b,
            timeout: c,
            withCredentials: d,
            method: e,
            content: f,
            headers: g
        }).then(function(h) {
            return Promise.resolve(h)
        }, function(h) {
            return h instanceof Error && 6 == h.message && d ? Tz({
                url: b,
                timeout: c,
                withCredentials: !d,
                method: e,
                content: f,
                headers: g
            }) : Promise.reject(h)
        })
    }
      , Tz = function(a) {
        var b = a.url;
        var c = a.timeout;
        var d = a.withCredentials;
        var e = a.method;
        var f = void 0 === a.content ? void 0 : a.content;
        a = void 0 === a.headers ? {} : a.headers;
        var g = new Fz;
        g.O = d;
        g.M = Math.max(0, pz(c));
        for (var h in a)
            g.headers.set(h, a[h]);
        var k = new tz;
        return new Promise(function(n, m) {
            k.ec(g, "success", function() {
                a: {
                    if (Dp())
                        try {
                            Qz(g);
                            var p = "application/json";
                            break a
                        } catch (v) {
                            p = "application/xml";
                            break a
                        }
                    g.g && 4 == Oz(g) ? (p = g.g.getResponseHeader("Content-Type"),
                    p = null === p ? void 0 : p) : p = void 0;
                    p = p || ""
                }
                if (-1 != p.indexOf("application/json"))
                    try {
                        n(Qz(g) || {})
                    } catch (v) {
                        m(new sz(5,Pz(g)))
                    }
                else {
                    try {
                        var q = g.g ? g.g.responseXML : null
                    } catch (v) {
                        q = null
                    }
                    if (null == q) {
                        try {
                            var t = g.g ? g.g.responseText : ""
                        } catch (v) {
                            t = ""
                        }
                        if ("undefined" != typeof DOMParser)
                            q = new DOMParser,
                            t = Ak(t),
                            q = q.parseFromString(Ah(t), "application/xml");
                        else
                            throw Error("Your browser does not support loading xml documents");
                    }
                    n(q)
                }
                k.V();
                g.V()
            });
            k.ec(g, ["error", "timeout"], function() {
                m(new sz(g.o,Pz(g)));
                k.V();
                g.V()
            });
            Kz(g, Gy(b), e, f)
        }
        )
    };
    z("google.javascript.ads.imalib.common.UrlLoader", Rz);
    var Uz = RegExp("ad\\.doubleclick\\.net/ddm/track(imp|clk)");
    function Vz() {
        return Um("attribution-reporting")
    }
    var Zz = function(a, b, c, d, e) {
        c = void 0 === c ? !1 : c;
        e = void 0 === e ? null : e;
        try {
            b = (void 0 === d ? 0 : d) ? Gy(b, "https") : Gy(b);
            Uz.test(b) && (b = b.replace("?", ";tpsrc=ima?"),
            e = e || "");
            c = c || kz(b);
            var f = null != e && null != window.fetch;
            if (a.j || f)
                Wz(a, b, c, e);
            else {
                var g = Vz() ? e : null;
                Dp() ? Xz(b) : Yz(a, b, c, g)
            }
        } catch (h) {}
    }
      , $z = function(a, b) {
        var c = {
            keepalive: !0,
            method: "get",
            redirect: "follow",
            credentials: "include"
        };
        a && (c.referrerPolicy = "no-referrer");
        b ? "setAttributionReporting"in XMLHttpRequest.prototype ? (c.attributionReporting = {
            eventSourceEligible: !0,
            triggerEligible: !1
        },
        c.mode = "no-cors") : c.headers = {
            "Attribution-Reporting-Eligible": "event-source"
        } : c.mode = "no-cors";
        return c
    }
      , Wz = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        K(J.getInstance(), "faa", "1");
        K(J.getInstance(), "alp", null === d ? "0" : "1");
        var e = Vz();
        K(J.getInstance(), "arpa", e ? "1" : "0");
        fetch(b, $z(c, "" === d && e)).then(function() {
            K(J.getInstance(), "fas", "1")
        }).catch(function() {
            K(J.getInstance(), "faf", "1");
            a.j = !1;
            var f = d;
            f = Vz() ? f : null;
            Dp() ? Xz(b) : Yz(a, b, c, f)
        });
        e && d && fetch(d, $z(c, !0))
    }
      , Yz = function(a, b, c, d) {
        var e = new Image
          , f = (a.l++).toString();
        a.g.set(f, e);
        e.onload = e.onerror = function() {
            a.g.delete(f)
        }
        ;
        c && (e.referrerPolicy = "no-referrer");
        null != d && (e.attributionSrc = d);
        e.src = b
    }
      , Xz = function(a) {
        (new Rz).get({
            url: a,
            timeout: new oz
        })
    };
    var aA = {
        AUTOPLAY_DISALLOWED: "autoplayDisallowed",
        qh: "beginFullscreen",
        CAN_PLAY: "canPlay",
        CAN_PLAY_THROUGH: "canPlayThrough",
        CLICK: "click",
        DURATION_CHANGE: "durationChange",
        Bh: "end",
        Ch: "endFullscreen",
        ERROR: "error",
        Gh: "focusSkipButton",
        LOAD_START: "loadStart",
        LOADED: "loaded",
        ei: "mediaLoadTimeout",
        fi: "mediaPlaybackTimeout",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        SEEKED: "seeked",
        SEEKING: "seeking",
        xi: "skip",
        Lf: "skipShown",
        STALLED: "stalled",
        se: "start",
        TIME_UPDATE: "timeUpdate",
        Ai: "timedMetadata",
        Ji: "volumeChange",
        WAITING: "waiting",
        Ki: "windowFocusChanged",
        Hh: "fullyLoaded"
    };
    var bA = function() {
        S.apply(this, arguments)
    };
    w(bA, S);
    bA.prototype.C = function() {
        return !1
    }
    ;
    bA.prototype.D = function() {
        return -1
    }
    ;
    bA.prototype.F = function() {}
    ;
    var cA = {}
      , dA = (cA[18] = -1,
    cA[22] = -1,
    cA[43] = 350,
    cA[44] = 350,
    cA[45] = 350,
    cA[59] = -1,
    cA[133] = 350,
    cA[134] = 350,
    cA[135] = 350,
    cA[136] = 350,
    cA[139] = 50,
    cA[140] = 50,
    cA[141] = 50,
    cA[160] = 350,
    cA[242] = 150,
    cA[243] = 150,
    cA[244] = 150,
    cA[245] = 150,
    cA[247] = 150,
    cA[249] = 50,
    cA[250] = 50,
    cA[251] = 50,
    cA[278] = 150,
    cA[342] = -1,
    cA[343] = -1,
    cA[344] = -1,
    cA[345] = -1,
    cA[346] = -1,
    cA[347] = -1,
    cA)
      , eA = {}
      , fA = (eA[18] = !1,
    eA[22] = !1,
    eA[43] = !0,
    eA[44] = !0,
    eA[45] = !0,
    eA[59] = !1,
    eA[133] = !0,
    eA[134] = !0,
    eA[135] = !0,
    eA[136] = !0,
    eA[139] = !0,
    eA[140] = !0,
    eA[141] = !0,
    eA[160] = !0,
    eA[242] = !0,
    eA[243] = !0,
    eA[244] = !0,
    eA[245] = !0,
    eA[247] = !0,
    eA[249] = !0,
    eA[250] = !0,
    eA[251] = !0,
    eA[278] = !0,
    eA[342] = !1,
    eA[343] = !1,
    eA[344] = !1,
    eA[345] = !1,
    eA[346] = !1,
    eA[347] = !1,
    eA)
      , gA = {}
      , hA = (gA[18] = "video/mp4",
    gA[22] = "video/mp4",
    gA[43] = "video/webm",
    gA[44] = "video/webm",
    gA[45] = "video/webm",
    gA[59] = "video/mp4",
    gA[133] = "video/mp4",
    gA[134] = "video/mp4",
    gA[135] = "video/mp4",
    gA[136] = "video/mp4",
    gA[139] = "audio/mp4",
    gA[140] = "audio/mp4",
    gA[141] = "audio/mp4",
    gA[160] = "video/mp4",
    gA[242] = "video/webm",
    gA[243] = "video/webm",
    gA[244] = "video/webm",
    gA[245] = "video/webm",
    gA[247] = "video/webm",
    gA[249] = "audio/webm",
    gA[250] = "audio/webm",
    gA[251] = "audio/webm",
    gA[278] = "video/webm",
    gA[342] = "video/mp4",
    gA[343] = "video/mp4",
    gA[344] = "video/mp4",
    gA[345] = "video/mp4",
    gA[346] = "video/mp4",
    gA[347] = "video/mp4",
    gA)
      , iA = {}
      , jA = (iA[18] = "avc1.42001E, mp4a.40.2",
    iA[22] = "avc1.64001F, mp4a.40.2",
    iA[43] = "vp8, vorbis",
    iA[44] = "vp8, vorbis",
    iA[45] = "vp8, vorbis",
    iA[59] = "avc1.4D001F, mp4a.40.2",
    iA[133] = "avc1.4D401E",
    iA[134] = "avc1.4D401E",
    iA[135] = "avc1.4D401E",
    iA[136] = "avc1.4D401E",
    iA[139] = "mp4a.40.2",
    iA[140] = "mp4a.40.2",
    iA[141] = "mp4a.40.2",
    iA[160] = "avc1.4D401E",
    iA[242] = "vp9",
    iA[243] = "vp9",
    iA[244] = "vp9",
    iA[245] = "vp9",
    iA[247] = "vp9",
    iA[249] = "opus",
    iA[250] = "opus",
    iA[251] = "opus",
    iA[278] = "vp9",
    iA[342] = "avc1.42E01E, mp4a.40.2",
    iA[343] = "avc1.42E01E, mp4a.40.2",
    iA[344] = "avc1.42E01E, mp4a.40.2",
    iA[345] = "avc1.42E01E, mp4a.40.2",
    iA[346] = "avc1.42E01E, mp4a.40.2",
    iA[347] = "avc1.4D001F, mp4a.40.2",
    iA);
    var kA = RegExp("/itag/(\\d+)/");
    function lA(a) {
        var b = Number(oi(a, "itag"));
        return b ? b : (a = a.match(kA)) && 2 === a.length ? Number(a[1]) : null
    }
    function mA(a) {
        var b = hA[a];
        a = jA[a];
        b ? (b = Mh(b).toLowerCase(),
        b = a ? b + '; codecs="' + Mh(a) + '"' : b) : b = "";
        return b
    }
    function nA(a, b) {
        if ("function" === typeof CustomEvent)
            return new CustomEvent(a,{
                detail: b
            });
        var c = document.createEvent("CustomEvent");
        c.initCustomEvent(a, !1, !0, b);
        return c
    }
    ;var oA = function(a, b) {
        bA.call(this);
        var c = this;
        this.j = b;
        this.B = this.l = this.g = 0;
        this.o = null;
        this.uri = new T(a);
        this.state = 0;
        var d;
        this.I = null == (d = this.j) ? void 0 : d.initialize();
        iq(this, function() {
            hq(c.j)
        })
    };
    w(oA, bA);
    oA.prototype.D = function() {
        return this.g
    }
    ;
    oA.prototype.C = function() {
        return 3 === this.state
    }
    ;
    oA.prototype.F = function(a) {
        1 === this.state ? (this.g += a,
        this.state = 2) : 0 === this.state && (this.g += a,
        this.state = 1,
        pA(this))
    }
    ;
    var pA = function(a) {
        Ja(function(b) {
            if (1 == b.g)
                return 2 === a.state && (a.state = 1),
                ya(b, qA(a), 4);
            var c = 3 < a.B;
            if (c) {
                null === a.o && (a.o = 400);
                var d = nA("media_source_error", {
                    code: 0 < a.l ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                    message: 'Response code "' + a.o + '" with ' + a.g + " bytes requested and " + a.l + " bytes loaded"
                });
                a.dispatchEvent(d)
            }
            a.l < a.g && 3 !== a.state && !c ? b.g = 1 : (3 !== a.state && (a.state = 0),
            b.g = 0)
        })
    }
      , qA = function(a) {
        var b;
        return Ja(function(c) {
            switch (c.g) {
            case 1:
                b = a.l + "-" + (a.g - 1);
                sy(a.uri, "range", b);
                if (!a.j) {
                    c.g = 2;
                    break
                }
                return ya(c, a.I, 3);
            case 3:
                return c.return(rA(a));
            case 2:
                return c.l = 4,
                ya(c, sA(a), 6);
            case 6:
                za(c);
                break;
            case 4:
                Aa(c),
                a.B++,
                c.g = 0
            }
        })
    }
      , rA = function(a) {
        var b;
        return Ja(function(c) {
            switch (c.g) {
            case 1:
                return a.j ? ya(c, a.j.Xb(a.uri), 2) : c.return(Promise.reject());
            case 2:
                if (b = c.j)
                    return b.wa && (a.state = 3),
                    tA(a, b.video),
                    c.return();
                c.l = 3;
                return ya(c, sA(a), 5);
            case 5:
                za(c);
                break;
            case 3:
                Aa(c),
                a.B++,
                c.g = 0
            }
        })
    }
      , sA = function(a) {
        var b, c, d, e, f, g, h;
        return Ja(function(k) {
            if (1 == k.g)
                return b = 0,
                c = a.g - a.l,
                ya(k, fetch(a.uri.toString()), 2);
            d = k.j;
            if (400 <= d.status)
                return K(J.getInstance(), "lvlfes", d.status.toString()),
                a.o = d.status,
                k.return(Promise.reject());
            f = null == (e = d.body) ? void 0 : e.getReader();
            if (!f)
                return L("lvlmr"),
                a.o = d.status,
                k.return(Promise.reject());
            g = [];
            h = function() {
                var n, m, p, q, t, v;
                return Ja(function(x) {
                    if (1 == x.g)
                        return ya(x, f.read(), 2);
                    n = x.j;
                    m = n.done;
                    p = n.value;
                    if (m)
                        return q = b < c,
                        uA(a, g, q),
                        x.return();
                    g.push(p);
                    b += null == (t = p) ? void 0 : t.length;
                    tA(a, null == (v = p) ? void 0 : v.buffer);
                    return ya(x, h(), 0)
                })
            }
            ;
            return ya(k, h(), 0)
        })
    }
      , uA = function(a, b, c) {
        c && (a.state = 3,
        tA(a, new ArrayBuffer(0)));
        var d = new Uint8Array(b.reduce(function(g, h) {
            return g + h.length
        }, 0))
          , e = 0;
        b = u(b);
        for (var f = b.next(); !f.done; f = b.next())
            f = f.value,
            d.set(f, e),
            e += f.length;
        a.j && 0 < d.buffer.byteLength && a.j.vc(d.buffer, a.uri, 0, c)
    }
      , tA = function(a, b) {
        null !== b && (b = b.slice(0),
        a.l += b.byteLength,
        a.dispatchEvent({
            type: "progress",
            ud: b
        }))
    };
    oA.prototype.N = function() {
        var a;
        (null == (a = this.j) ? 0 : a.Ua()) && this.j.close();
        bA.prototype.N.call(this)
    }
    ;
    var wA = function(a) {
        this.uri = a;
        this.g = vA(a)
    }
      , vA = function(a) {
        return new Map(a.l.split("/").reduce(function(b, c, d, e) {
            d % 2 && b.set(e[d - 1], c);
            return b
        }, new Map))
    }
      , xA = function(a) {
        var b, c;
        return null == (b = a.uri) ? void 0 : null == (c = b.l) ? void 0 : c.startsWith("/videoplayback")
    };
    wA.prototype.getId = function() {
        return yA(this, "id")
    }
    ;
    var zA = function(a) {
        a = a.uri.g.get("range");
        if (!a)
            return null;
        a = a.split("-")[0];
        return !a || isNaN(Number(a)) ? null : Number(a)
    }
      , yA = function(a, b) {
        var c = a.uri.g.get(b);
        return c ? c : (a = a.g.get(b)) ? a : null
    };
    var AA = function() {};
    var BA = ["doubleclick.net"];
    function CA() {
        if (Gb() || B("iPad") || B("iPod"))
            var a = !1;
        else if (Fb()) {
            if (void 0 === By) {
                a: {
                    if (void 0 === zy) {
                        if (Dy) {
                            a = pb(Cy(), "Safari");
                            var b = (new T(window.location.href)).g.Gb("js");
                            b: {
                                if ((b = b.length ? b[0] : "") && 0 == b.lastIndexOf("afma-", 0)) {
                                    var c = b.lastIndexOf("v");
                                    if (-1 < c && (b = b.substr(c + 1).match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))) {
                                        b = b[1];
                                        break b
                                    }
                                }
                                b = "0.0.0"
                            }
                            if (!a || "0.0.0" !== b) {
                                a = zy = !0;
                                break a
                            }
                        }
                        zy = !1
                    }
                    a = zy
                }
                a || (void 0 === Ay && (Ay = pb(Cy(), "afma-sdk-a") ? !0 : !1),
                a = Ay);
                By = a
            }
            a = By ? !0 : ii() ? !1 : DA()
        } else
            a = !1;
        return a
    }
    function DA() {
        var a = !1
          , b = (new T(window.location.href)).j;
        BA.forEach(function(c) {
            b.includes(c) && (a = !0)
        });
        return a
    }
    ;var EA, HA = function(a, b, c) {
        if ("number" === typeof a)
            var d = {
                name: FA(a)
            };
        else
            d = a,
            a = GA(a.name);
        this.code = a;
        this.g = d;
        b = "Error " + b + ": " + this.getName();
        c && (b += ", " + c);
        db.call(this, b)
    };
    bb(HA, db);
    HA.prototype.getName = function() {
        return this.g.name || ""
    }
    ;
    var IA = {
        Nf: 1,
        ki: 2,
        NOT_FOUND_ERR: 3,
        uf: 4,
        xf: 5,
        li: 6,
        Mf: 7,
        ABORT_ERR: 8,
        Jf: 9,
        Di: 10,
        TIMEOUT_ERR: 11,
        If: 12,
        INVALID_ACCESS_ERR: 13,
        INVALID_STATE_ERR: 14
    }
      , JA = (y.g || y.j || IA).Nf
      , KA = (y.g || y.j || IA).NOT_FOUND_ERR
      , LA = (y.g || y.j || IA).uf
      , MA = (y.g || y.j || IA).xf
      , NA = (y.g || y.j || IA).Mf
      , OA = (y.g || y.j || IA).ABORT_ERR
      , PA = (y.g || y.j || IA).Jf
      , QA = (y.g || y.j || IA).TIMEOUT_ERR
      , RA = (y.g || y.j || IA).If
      , SA = (y.DOMException || IA).INVALID_ACCESS_ERR
      , TA = (y.DOMException || IA).INVALID_STATE_ERR
      , GA = function(a) {
        switch (a) {
        case "UnknownError":
            return JA;
        case "NotFoundError":
            return KA;
        case "ConstraintError":
            return LA;
        case "DataError":
            return MA;
        case "TransactionInactiveError":
            return NA;
        case "AbortError":
            return OA;
        case "ReadOnlyError":
            return PA;
        case "TimeoutError":
            return QA;
        case "QuotaExceededError":
            return RA;
        case "InvalidAccessError":
            return SA;
        case "InvalidStateError":
            return TA;
        default:
            return JA
        }
    }
      , FA = function(a) {
        switch (a) {
        case JA:
            return "UnknownError";
        case KA:
            return "NotFoundError";
        case LA:
            return "ConstraintError";
        case MA:
            return "DataError";
        case NA:
            return "TransactionInactiveError";
        case OA:
            return "AbortError";
        case PA:
            return "ReadOnlyError";
        case QA:
            return "TimeoutError";
        case RA:
            return "QuotaExceededError";
        case SA:
            return "InvalidAccessError";
        case TA:
            return "InvalidStateError";
        default:
            return "UnknownError"
        }
    }
      , UA = function(a, b) {
        return "error"in a ? new HA(a.error,b) : new HA({
            name: "UnknownError"
        },b)
    }
      , VA = function(a, b) {
        return "name"in a ? new HA(a,b + ": " + a.message) : new HA({
            name: "UnknownError"
        },b)
    };
    var WA = function(a) {
        this.g = a
    }
      , XA = y.IDBKeyRange || y.webkitIDBKeyRange;
    function YA() {}
    ;/*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
    var ZA = function(a, b) {
        this.o = [];
        this.I = a;
        this.F = b || null;
        this.A = this.l = !1;
        this.j = void 0;
        this.L = this.K = this.C = !1;
        this.B = 0;
        this.g = null;
        this.J = 0
    };
    bb(ZA, YA);
    ZA.prototype.cancel = function(a) {
        if (this.l)
            this.j instanceof ZA && this.j.cancel();
        else {
            if (this.g) {
                var b = this.g;
                delete this.g;
                a ? b.cancel(a) : (b.J--,
                0 >= b.J && b.cancel())
            }
            this.I ? this.I.call(this.F, this) : this.L = !0;
            this.l || $A(this, new aB(this))
        }
    }
    ;
    ZA.prototype.D = function(a, b) {
        this.C = !1;
        bB(this, a, b)
    }
    ;
    var bB = function(a, b, c) {
        a.l = !0;
        a.j = c;
        a.A = !b;
        cB(a)
    }
      , eB = function(a) {
        if (a.l) {
            if (!a.L)
                throw new dB(a);
            a.L = !1
        }
    };
    ZA.prototype.va = function(a) {
        eB(this);
        bB(this, !0, a)
    }
    ;
    var $A = function(a, b) {
        eB(a);
        bB(a, !1, b)
    }
      , gB = function(a, b) {
        return fB(a, b, null)
    }
      , fB = function(a, b, c, d) {
        a.o.push([b, c, d]);
        a.l && cB(a);
        return a
    };
    ZA.prototype.then = function(a, b, c) {
        var d, e, f = new cv(function(g, h) {
            e = g;
            d = h
        }
        );
        fB(this, e, function(g) {
            g instanceof aB ? f.cancel() : d(g);
            return hB
        }, this);
        return f.then(a, b, c)
    }
    ;
    ZA.prototype.$goog_Thenable = !0;
    var iB = function(a) {
        return Nb(a.o, function(b) {
            return "function" === typeof b[1]
        })
    }
      , hB = {}
      , cB = function(a) {
        if (a.B && a.l && iB(a)) {
            var b = a.B
              , c = jB[b];
            c && (y.clearTimeout(c.g),
            delete jB[b]);
            a.B = 0
        }
        a.g && (a.g.J--,
        delete a.g);
        b = a.j;
        for (var d = c = !1; a.o.length && !a.C; ) {
            var e = a.o.shift()
              , f = e[0]
              , g = e[1];
            e = e[2];
            if (f = a.A ? g : f)
                try {
                    var h = f.call(e || a.F, b);
                    h === hB && (h = void 0);
                    void 0 !== h && (a.A = a.A && (h == b || h instanceof Error),
                    a.j = b = h);
                    if (av(b) || "function" === typeof y.Promise && b instanceof y.Promise)
                        d = !0,
                        a.C = !0
                } catch (k) {
                    b = k,
                    a.A = !0,
                    iB(a) || (c = !0)
                }
        }
        a.j = b;
        d && (h = $a(a.D, a, !0),
        d = $a(a.D, a, !1),
        b instanceof ZA ? (fB(b, h, d),
        b.K = !0) : b.then(h, d));
        c && (b = new kB(b),
        jB[b.g] = b,
        a.B = b.g)
    }
      , dB = function() {
        db.call(this)
    };
    bb(dB, db);
    dB.prototype.message = "Deferred has already fired";
    dB.prototype.name = "AlreadyCalledError";
    var aB = function() {
        db.call(this)
    };
    bb(aB, db);
    aB.prototype.message = "Deferred was canceled";
    aB.prototype.name = "CanceledError";
    var kB = function(a) {
        this.g = y.setTimeout($a(this.l, this), 0);
        this.j = a
    };
    kB.prototype.l = function() {
        delete jB[this.g];
        throw this.j;
    }
    ;
    var jB = {};
    var lB = function() {
        S.call(this)
    };
    bb(lB, S);
    lB.prototype.g = null;
    lB.prototype.next = function(a) {
        if (a)
            this.g["continue"](a);
        else
            this.g["continue"]()
    }
    ;
    lB.prototype.remove = function() {
        var a = new ZA;
        try {
            var b = this.g["delete"]()
        } catch (c) {
            return $A(a, VA(c, "deleting via cursor")),
            a
        }
        b.onsuccess = function() {
            a.va()
        }
        ;
        b.onerror = function(c) {
            $A(a, UA(c.target, "deleting via cursor"))
        }
        ;
        return a
    }
    ;
    lB.prototype.getValue = function() {
        return this.g.value
    }
    ;
    var mB = function(a, b) {
        var c = new lB;
        try {
            var d = a.openCursor(b ? b.g : null)
        } catch (e) {
            throw c.V(),
            VA(e, a.name);
        }
        d.onsuccess = function(e) {
            c.g = e.target.result || null;
            c.g ? c.dispatchEvent("n") : c.dispatchEvent("c")
        }
        ;
        d.onerror = function() {
            c.dispatchEvent("e")
        }
        ;
        return c
    };
    var nB = function(a) {
        this.g = a
    };
    nB.prototype.getName = function() {
        return this.g.name
    }
    ;
    var oB = function(a, b, c) {
        var d = new ZA;
        try {
            var e = a.g.get(c)
        } catch (f) {
            return b += " with key " + Hh(c),
            $A(d, VA(f, b)),
            d
        }
        e.onsuccess = function(f) {
            d.va(f.target.result)
        }
        ;
        e.onerror = function(f) {
            b += " with key " + Hh(c);
            $A(d, UA(f.target, b))
        }
        ;
        return d
    };
    nB.prototype.get = function(a) {
        return oB(this, "getting from index " + this.getName(), a)
    }
    ;
    var pB = function(a, b) {
        return mB(a.g, b)
    };
    var qB = function(a) {
        this.g = a
    };
    qB.prototype.getName = function() {
        return this.g.name
    }
    ;
    var rB = function(a, b, c, d, e) {
        var f = new ZA;
        try {
            var g = e ? a.g[b](d, e) : a.g[b](d)
        } catch (h) {
            return c += Hh(d),
            e && (c += ", with key " + Hh(e)),
            $A(f, VA(h, c)),
            f
        }
        g.onsuccess = function(h) {
            f.va(h.target.result)
        }
        ;
        g.onerror = function(h) {
            c += Hh(d);
            e && (c += ", with key " + Hh(e));
            $A(f, UA(h.target, c))
        }
        ;
        return f
    }
      , sB = function(a, b) {
        return rB(a, "put", "putting into " + a.getName() + " with value", b)
    };
    qB.prototype.add = function(a, b) {
        return rB(this, "add", "adding into " + this.getName() + " with value ", a, b)
    }
    ;
    qB.prototype.remove = function(a) {
        var b = new ZA;
        try {
            var c = this.g["delete"](a instanceof WA ? a.g : a)
        } catch (e) {
            return c = "removing from " + this.getName() + " with key " + Hh(a),
            $A(b, VA(e, c)),
            b
        }
        c.onsuccess = function() {
            b.va()
        }
        ;
        var d = this;
        c.onerror = function(e) {
            var f = "removing from " + d.getName() + " with key " + Hh(a);
            $A(b, UA(e.target, f))
        }
        ;
        return b
    }
    ;
    qB.prototype.get = function(a) {
        var b = new ZA;
        try {
            var c = this.g.get(a)
        } catch (e) {
            return c = "getting from " + this.getName() + " with key " + Hh(a),
            $A(b, VA(e, c)),
            b
        }
        c.onsuccess = function(e) {
            b.va(e.target.result)
        }
        ;
        var d = this;
        c.onerror = function(e) {
            var f = "getting from " + d.getName() + " with key " + Hh(a);
            $A(b, UA(e.target, f))
        }
        ;
        return b
    }
    ;
    qB.prototype.clear = function() {
        var a = "clearing store " + this.getName()
          , b = new ZA;
        try {
            var c = this.g.clear()
        } catch (d) {
            return $A(b, VA(d, a)),
            b
        }
        c.onsuccess = function() {
            b.va()
        }
        ;
        c.onerror = function(d) {
            $A(b, UA(d.target, a))
        }
        ;
        return b
    }
    ;
    var tB = function(a) {
        try {
            return new nB(a.g.index("timestamp"))
        } catch (b) {
            throw VA(b, "getting index timestamp");
        }
    };
    var uB = function(a, b) {
        S.call(this);
        this.g = a;
        this.l = b;
        this.j = new tz(this);
        this.j.listen(this.g, "complete", $a(this.dispatchEvent, this, "complete"));
        this.j.listen(this.g, "abort", $a(this.dispatchEvent, this, "abort"));
        this.j.listen(this.g, "error", this.zf)
    };
    bb(uB, S);
    l = uB.prototype;
    l.zf = function(a) {
        a.target instanceof HA ? this.dispatchEvent({
            type: "error",
            target: a.target
        }) : this.dispatchEvent({
            type: "error",
            target: UA(a.target, "in transaction")
        })
    }
    ;
    l.objectStore = function(a) {
        try {
            return new qB(this.g.objectStore(a))
        } catch (b) {
            throw VA(b, "getting object store " + a);
        }
    }
    ;
    l.commit = function(a) {
        if (this.g.commit || !a)
            try {
                this.g.commit()
            } catch (b) {
                throw VA(b, "cannot commit the transaction");
            }
    }
    ;
    l.wait = function() {
        var a = new ZA;
        Cu(this, "complete", $a(a.va, a));
        var b = Cu(this, "abort", function() {
            Lu(c);
            $A(a, new HA(OA,"waiting for transaction to complete"))
        });
        var c = Cu(this, "error", function(e) {
            Lu(b);
            $A(a, e.target)
        });
        var d = this.l;
        return gB(a, function() {
            return d
        })
    }
    ;
    l.abort = function() {
        this.g.abort()
    }
    ;
    l.N = function() {
        uB.Ga.N.call(this);
        this.j.V()
    }
    ;
    var vB = function(a) {
        S.call(this);
        this.g = a;
        this.j = new tz(this);
        this.j.listen(this.g, "abort", $a(this.dispatchEvent, this, "abort"));
        this.j.listen(this.g, "error", this.Af);
        this.j.listen(this.g, "versionchange", this.bg);
        this.j.listen(this.g, "close", $a(this.dispatchEvent, this, "close"))
    };
    bb(vB, S);
    l = vB.prototype;
    l.Pd = !0;
    l.Af = function(a) {
        a = (a = a.target) && a.error;
        this.dispatchEvent({
            type: "error",
            errorCode: a && a.severity
        })
    }
    ;
    l.bg = function(a) {
        this.dispatchEvent(new wB(a.oldVersion,a.newVersion))
    }
    ;
    l.close = function() {
        this.Pd && (this.g.close(),
        this.Pd = !1)
    }
    ;
    l.Ua = function() {
        return this.Pd
    }
    ;
    l.getName = function() {
        return this.g.name
    }
    ;
    l.getVersion = function() {
        return Number(this.g.version)
    }
    ;
    var xB = function(a) {
        var b = ["MediaSourceVideoChunk"];
        try {
            var c = a.g.transaction(b, "readwrite");
            return new uB(c,a)
        } catch (d) {
            throw VA(d, "creating transaction");
        }
    };
    vB.prototype.N = function() {
        vB.Ga.N.call(this);
        this.j.V()
    }
    ;
    var wB = function(a, b) {
        mu.call(this, "versionchange");
        this.oldVersion = a;
        this.newVersion = b
    };
    bb(wB, mu);
    var yB = function(a) {
        var b = new ZA;
        void 0 == EA && (EA = y.indexedDB || y.mozIndexedDB || y.webkitIndexedDB || y.moz_indexedDB);
        var c = EA.open("IndexedDbVideoChunkPersistentStorage", 6);
        c.onsuccess = function(d) {
            d = new vB(d.target.result);
            b.va(d)
        }
        ;
        c.onerror = function(d) {
            $A(b, UA(d.target, "opening database IndexedDbVideoChunkPersistentStorage"))
        }
        ;
        c.onupgradeneeded = function(d) {
            if (a) {
                var e = new vB(d.target.result);
                a(new wB(d.oldVersion,d.newVersion), e, new uB(d.target.transaction,e))
            }
        }
        ;
        c.onblocked = function() {}
        ;
        return b
    };
    var zB = function() {
        S.apply(this, arguments);
        this.g = null
    };
    w(zB, S);
    zB.prototype.initialize = function() {
        var a = this;
        return Promise.resolve(yB(this.j)).then(function(b) {
            a.g = b
        }, function(b) {
            K(J.getInstance(), "codf", b.message)
        })
    }
    ;
    zB.prototype.Ua = function() {
        return null !== this.g && this.g.Ua()
    }
    ;
    zB.prototype.close = function() {
        var a = this;
        return (new Promise(function(b) {
            AB(a, b)
        }
        )).then(function() {
            return BB()
        }).then(function() {
            a.g.close()
        })
    }
    ;
    var BB = function() {
        var a;
        return (null == (a = navigator.storage) ? 0 : a.estimate) ? navigator.storage.estimate().then(function(b) {
            K(J.getInstance(), "csue", String(b.usage))
        }) : Promise.resolve(void 0)
    };
    zB.prototype.Xb = function(a) {
        return (a = CB(a, 0)) ? DB(this, EB(a), a.Nc) : Promise.resolve(null)
    }
    ;
    zB.prototype.vc = function(a, b, c, d) {
        (b = CB(b, c)) ? (c = b.startIndex,
        FB(this, {
            Ri: EB(b),
            startIndex: c,
            Fc: c + a.byteLength - 1,
            Nc: b.Nc,
            timestamp: new Date(Date.now()),
            wa: d,
            yb: b.yb,
            video: a
        })) : Promise.resolve(void 0)
    }
    ;
    zB.prototype.j = function(a, b) {
        if (b.g.objectStoreNames.contains("MediaSourceVideoChunk"))
            try {
                b.g.deleteObjectStore("MediaSourceVideoChunk")
            } catch (d) {
                throw VA(d, "deleting object store MediaSourceVideoChunk");
            }
        a = {
            keyPath: "cacheId"
        };
        try {
            var c = new qB(b.g.createObjectStore("MediaSourceVideoChunk", a))
        } catch (d) {
            throw VA(d, "creating object store MediaSourceVideoChunk");
        }
        b = {
            unique: !1
        };
        try {
            c.g.createIndex("timestamp", "timestamp", b)
        } catch (d) {
            throw VA(d, "creating new index timestamp with key path timestamp");
        }
    }
    ;
    var AB = function(a, b) {
        var c = new Date(Date.now());
        c.setDate(c.getDate() - 30);
        c = new WA(XA.upperBound(c, void 0));
        var d = pB(tB(xB(a.g).objectStore("MediaSourceVideoChunk")), c)
          , e = d.listen("n", function() {
            d.remove();
            d.next()
        });
        Cu(d, "c", function() {
            Lu(e);
            b()
        })
    }
      , CB = function(a, b) {
        var c = new wA(a);
        a = c.getId();
        var d = yA(c, "itag")
          , e = yA(c, "source")
          , f = yA(c, "lmt");
        c = zA(c);
        var g = [];
        a ? d ? e ? f ? null === c && g.push("startIndex") : g.push("lmt") : g.push("source") : g.push("itag") : g.push("videoId");
        return 0 < g.length ? (K(J.getInstance(), "civp", g.join("-")),
        null) : {
            ih: a,
            yb: d,
            source: e,
            Nc: f,
            startIndex: c + b
        }
    }
      , EB = function(a) {
        for (var b = [a.ih, a.source, a.startIndex].join(), c = 0, d = 0; d < b.length; d++)
            c = Math.imul(31, c) + b.charCodeAt(d) | 0;
        return c.toString() + "," + a.yb
    }
      , DB = function(a, b, c) {
        var d = xB(a.g).objectStore("MediaSourceVideoChunk");
        return Promise.resolve(d.get(b)).then(function(e) {
            if (!e)
                return K(J.getInstance(), "cenf", "1"),
                null;
            if (e.Nc !== c)
                return K(J.getInstance(), "cdl", "1"),
                d.remove(b).then(null, function(f) {
                    K(J.getInstance(), "crdlvf", f.message)
                }),
                null;
            K(J.getInstance(), "cefml", "1");
            return {
                yb: e.yb,
                Fc: e.Fc,
                wa: e.wa,
                video: e.video
            }
        }, function(e) {
            K(J.getInstance(), "cgvf", e.message);
            return null
        })
    }
      , FB = function(a, b) {
        a = xB(a.g).objectStore("MediaSourceVideoChunk");
        Promise.resolve(sB(a, b)).then(function() {
            K(J.getInstance(), "cavs", "1")
        }, function(c) {
            K(J.getInstance(), "cavf", c.message)
        })
    };
    var GB = function(a) {
        bA.call(this);
        var b = this;
        this.I = this.j = this.g = 0;
        this.o = this.K = null;
        this.uri = new T(a);
        this.state = 0;
        this.l = (this.B = CA() && !Iy(this.uri)) ? Fx(zB) : null;
        iq(this, function() {
            hq(b.l)
        });
        this.K = this.B ? this.l.initialize() : null
    };
    w(GB, bA);
    GB.prototype.D = function() {
        return this.g
    }
    ;
    GB.prototype.C = function() {
        return 3 === this.state
    }
    ;
    GB.prototype.F = function(a) {
        1 === this.state ? (this.g += a,
        this.state = 2) : 0 === this.state && (this.g += a,
        this.state = 1,
        HB(this))
    }
    ;
    var HB = function(a) {
        Ja(function(b) {
            if (1 == b.g)
                return 2 === a.state && (a.state = 1),
                ya(b, IB(a), 4);
            var c = 3 < a.I;
            if (c && null !== a.o) {
                var d = nA("media_source_error", {
                    code: 0 < a.j ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                    message: 'Response code "' + a.o + '" with ' + a.g + " bytes requested and " + a.j + " bytes loaded"
                });
                a.dispatchEvent(d)
            }
            a.j < a.g && 3 !== a.state && !c ? b.g = 1 : (3 !== a.state && (a.state = 0),
            b.g = 0)
        })
    }
      , IB = function(a) {
        var b;
        return Ja(function(c) {
            switch (c.g) {
            case 1:
                b = a.j + "-" + (a.g - 1);
                sy(a.uri, "range", b);
                if (!a.B) {
                    c.g = 2;
                    break
                }
                return ya(c, a.K, 3);
            case 3:
                return c.return(JB(a));
            case 2:
                return c.l = 4,
                ya(c, KB(a), 6);
            case 6:
                za(c);
                break;
            case 4:
                Aa(c),
                LB(a),
                c.g = 0
            }
        })
    }
      , JB = function(a) {
        var b;
        return Ja(function(c) {
            switch (c.g) {
            case 1:
                return ya(c, a.l.Xb(a.uri), 2);
            case 2:
                if (b = c.j) {
                    b.wa && (a.state = 3);
                    MB(a, b.video, 0);
                    c.g = 0;
                    break
                }
                c.l = 4;
                return ya(c, KB(a), 6);
            case 6:
                za(c);
                break;
            case 4:
                Aa(c),
                LB(a),
                c.g = 0
            }
        })
    }
      , LB = function(a) {
        var b = new wA(a.uri);
        if (Ul(Em) && xA(b)) {
            a: if (xA(b)) {
                var c = yA(b, "mn");
                var d = c ? c.split(",") : null;
                var e = yA(b, "fvip");
                c = b.uri.F();
                if (d && e) {
                    var f = (Number(yA(b, "fallback_count")) || 0) + 1;
                    if (d = d[f]) {
                        c.j = "r" + e + "---" + d + ".googlevideo.com";
                        sy(c, "fallback_count", f);
                        b = c;
                        break a
                    }
                }
                var g, h;
                e = Number((null != (h = null == (g = c.g.get("cmo")) ? void 0 : g.split("=")) ? h : [])[1]) || 0;
                b.uri.j.match(/^r{1,2}(\d+)---(.+)\.googlevideo.com$/) && (c.j = "redirector.googlevideo.com");
                sy(c, "cmo", "pf=" + (e + 1));
                b = c
            } else
                b = b.uri;
            a.uri = b;
            a.dispatchEvent(nA("bandaid_fallback_count"))
        } else
            Ul(Im) && Iy(a.uri) && (a.uri = new T(Jy(a.uri)));
        a.I++
    }
      , KB = function(a) {
        return new Promise(function(b, c) {
            var d = new XMLHttpRequest
              , e = 0
              , f = a.g - a.j;
            d.addEventListener("load", function() {
                L("lvlcl");
                if (400 <= d.status)
                    K(J.getInstance(), "lvlxes", d.status.toString()),
                    a.o = d.status,
                    c();
                else {
                    var g = d.response;
                    g.byteLength < f && (a.state = 3);
                    var h = MB(a, g, e);
                    e += h;
                    a.B && 0 < g.byteLength && a.l.vc(g, a.uri, 0, g.byteLength < f);
                    b()
                }
            });
            d.addEventListener("timeout", function() {
                L("lvlct");
                a.o = d.status;
                c()
            });
            d.addEventListener("error", function() {
                L("lvlce");
                a.o = d.status;
                c()
            });
            d.addEventListener("progress", function() {
                if (400 <= d.status)
                    a.o = d.status;
                else {
                    var g = MB(a, d.response, e);
                    e += g
                }
            });
            d.responseType = "arraybuffer";
            d.open("get", a.uri.toString());
            d.send(null)
        }
        )
    }
      , MB = function(a, b, c) {
        if (null === b)
            return 0;
        b = b.slice(c);
        a.j += b.byteLength;
        a.dispatchEvent({
            type: "progress",
            ud: b
        });
        return b.byteLength
    };
    GB.prototype.N = function() {
        this.B && this.l.Ua() && this.l.close();
        bA.prototype.N.call(this)
    }
    ;
    var NB = {
        hj: 2E5,
        fj: 7E4,
        Ja: 3E5,
        dj: 5E3,
        pj: 5E3,
        gj: 6E3
    };
    function OB() {
        return !!window.MediaSource
    }
    function PB(a) {
        return [43, 44, 45].includes(a) && zc ? !1 : fA[a] ? (a = mA(a),
        !!a && OB() && MediaSource.isTypeSupported(a)) : !1
    }
    ;var QB = function() {};
    QB.prototype.Dg = function(a, b, c) {
        return 0 === c ? 1E6 : 5E3 > b - a ? 3E5 : 0
    }
    ;
    var SB = function(a, b) {
        var c = this;
        this.g = a;
        this.index = b;
        this.j = [];
        this.g || L("msms_sbf" + this.index);
        this.g.addEventListener("updateend", function() {
            RB(c)
        });
        this.g.addEventListener("error", function() {
            L("msms_sbe" + c.index)
        })
    }
      , RB = function(a) {
        if (0 < a.j.length && !a.g.updating) {
            var b = a.j.shift();
            a.g.appendBuffer(b)
        }
    };
    var TB = function() {
        this.g = this.cache = null
    };
    l = TB.prototype;
    l.initialize = function() {
        var a = this;
        return window.caches.open("CACHE_VIDEO_CHUNK_PERSISTENT_STORAGE").then(function(b) {
            a.cache = b
        }, function(b) {
            K(J.getInstance(), "codf", b.message)
        })
    }
    ;
    l.Ua = function() {
        return null !== this.cache
    }
    ;
    l.close = function() {
        return Promise.resolve()
    }
    ;
    l.Xb = function(a) {
        var b = this;
        a = UB(this, a);
        return this.Ua() && a ? this.cache.match(a).then(function(c) {
            if (!c)
                return K(J.getInstance(), "cenf", "1"),
                Promise.resolve(null);
            K(J.getInstance(), "cef", "1");
            return c.arrayBuffer().then(function(d) {
                var e = zA(b.g), f;
                (f = b.g.uri.g.get("range")) ? (f = f.split("-")[1],
                f = !f || isNaN(Number(f)) ? null : Number(f)) : f = null;
                e = e + d.byteLength - 1;
                f = f > e;
                return {
                    yb: yA(b.g, "itag"),
                    Fc: e,
                    wa: f,
                    video: d
                }
            })
        }, function(c) {
            K(J.getInstance(), "cgvf", c.message);
            return Promise.resolve(null)
        }) : (K(J.getInstance(), "cgvf", "1"),
        Promise.resolve(null))
    }
    ;
    l.vc = function(a, b) {
        b = UB(this, b);
        a = new Response(a);
        this.Ua() && b ? this.cache.put(b, a).then(function() {
            K(J.getInstance(), "cavs", "1")
        }, function(c) {
            K(J.getInstance(), "cavf", c.message)
        }) : (K(J.getInstance(), "cavf", "1"),
        Promise.resolve())
    }
    ;
    var UB = function(a, b) {
        a.g = new wA(b);
        b = a.g.getId();
        var c = yA(a.g, "itag")
          , d = yA(a.g, "source")
          , e = yA(a.g, "lmt");
        a = yA(a.g, "range");
        if (b && c && d && a)
            return new Request("http://url/videoplayback?id=" + b + "&itag=" + c + "&source=" + d + "&lmt=" + e + "&range=" + a);
        K(J.getInstance(), "civp", "1");
        return null
    };
    var XB = function(a) {
        S.call(this);
        var b = this;
        this.l = a;
        this.g = [];
        this.B = null;
        this.C = 0;
        this.M = !1;
        this.F = 0;
        this.D = [];
        if (Ul(xm)) {
            var c = null;
            CA() && (Ul(zm) ? c = Fx(TB) : c = Fx(zB));
            this.o = this.l.map(function(d) {
                return Fx(oA, d.url, Iy(d.url) ? null : c)
            })
        } else
            this.o = this.l.map(function(d) {
                return Fx(GB, d.url)
            });
        this.j = Fx(MediaSource);
        this.I = function() {
            VB(b)
        }
        ;
        this.j.addEventListener("sourceopen", this.I);
        this.K = WB(this)
    };
    w(XB, S);
    var WB = function(a) {
        for (var b = [], c = 0; c < a.l.length; ++c)
            b.push(new QB);
        return b
    }
      , VB = function(a) {
        L("msms_oso");
        for (var b = {
            ya: 0
        }; b.ya < a.l.length; b = {
            Vd: void 0,
            Oc: void 0,
            qb: void 0,
            ya: b.ya,
            Pc: void 0
        },
        ++b.ya) {
            var c = a.l[b.ya];
            K(J.getInstance(), "msms_mime" + b.ya, c.mimeType);
            K(J.getInstance(), "msms_cs" + b.ya, c.Ja.toString());
            Ul(ym) ? (b.Vd = new SB(a.j.addSourceBuffer(c.mimeType),b.ya),
            b.Oc = a.o[b.ya],
            b.Oc.listen("progress", function(d) {
                return function(e) {
                    var f = d.Vd
                      , g = d.Oc;
                    e = e.ud;
                    0 !== e.byteLength && (f.j.push(e),
                    RB(f));
                    g.C() && (a.C++,
                    a.C === a.g.length && YB(a))
                }
            }(b)),
            b.Oc.listen("media_source_error", function(d) {
                a.dispatchEvent(d)
            }),
            a.g.push(b.Vd.g)) : (b.qb = a.j.addSourceBuffer(c.mimeType),
            b.qb ? (b.Pc = a.o[b.ya],
            Ul(xm) && b.qb.addEventListener("updateend", function(d) {
                return function() {
                    if (0 < a.D.length && !d.qb.updating) {
                        var e = a.D.shift();
                        d.qb.appendBuffer(e)
                    }
                }
            }(b)),
            b.qb.addEventListener("error", function(d) {
                return function() {
                    L("msms_sbe" + d.ya)
                }
            }(b)),
            b.Pc.listen("progress", function(d) {
                return function(e) {
                    var f = d.qb
                      , g = d.Pc;
                    e = e.ud;
                    0 !== e.byteLength && (Ul(xm) ? f.updating ? a.D.push(e) : f.appendBuffer(e) : f.appendBuffer(e));
                    g.C() && (a.C++,
                    a.C === a.g.length && YB(a))
                }
            }(b)),
            b.Pc.listen("media_source_error", function(d) {
                a.dispatchEvent(d)
            }),
            a.g.push(b.qb)) : L("msms_sbf" + b.ya))
        }
        K(J.getInstance(), "msms_ns", a.g.length.toString());
        a.M = !0;
        ZB(a)
    }
      , YB = function(a) {
        Promise.all(a.g.map(function(b) {
            return new Promise(function(c) {
                b.updating ? b.addEventListener("updateend", function() {
                    c()
                }) : c()
            }
            )
        })).then(function() {
            a.j.endOfStream()
        })
    }
      , ZB = function(a) {
        if (a.M)
            for (var b = 0; b < a.l.length; ++b) {
                var c = a.o[b]
                  , d = a.g[b];
                d = 0 === d.buffered.length ? 0 : 1E3 * d.buffered.end(0);
                d = a.K[b].Dg(a.F, d, c.D());
                0 !== d && c.F(d)
            }
    }
      , $B = function(a) {
        a.B = th(a.j).toString();
        return a.B
    };
    XB.prototype.N = function() {
        this.B && window.URL.revokeObjectURL(this.B);
        for (var a = u(this.o), b = a.next(); !b.done; b = a.next())
            b.value.V();
        this.j.removeEventListener("sourceopen", this.I);
        S.prototype.N.call(this)
    }
    ;
    XB.prototype.jd = function(a) {
        this.K.filter(function() {
            return !1
        }).map(function(b) {
            return b
        }).forEach(function(b) {
            b.g = Object.assign({}, NB, b.g, a)
        })
    }
    ;
    var aC = RegExp("/pagead/conversion|/pagead/adview|/pagead/gen_204|/activeview?|csi.gstatic.com/csi|google.com/pagead/xsul|google.com/ads/measurement/l|googleads.g.doubleclick.net/pagead/ide_cookie|googleads.g.doubleclick.net/xbbe/pixel")
      , bC = RegExp("outstream.min.js")
      , cC = RegExp("outstream.min.css")
      , dC = RegExp("fonts.gstatic.com")
      , eC = RegExp("googlevideo.com/videoplayback|c.2mdn.net/videoplayback|gcdn.2mdn.net/videoplayback")
      , fC = RegExp("custom.elements.min.js");
    function gC(a, b) {
        var c = 0
          , d = 0
          , e = 0
          , f = 0
          , g = 0
          , h = 0
          , k = 0
          , n = !1
          , m = !1;
        if ("function" === typeof Oa("performance.getEntriesByType", y) && "transferSize"in y.PerformanceResourceTiming.prototype) {
            var p = y.performance.getEntriesByType("resource");
            p = u(p);
            for (var q = p.next(); !q.done; q = p.next())
                q = q.value,
                aC.test(q.name) || (f += 1,
                q.transferSize ? (c += q.transferSize,
                q.encodedBodySize && q.transferSize < q.encodedBodySize && (h += 1,
                e += q.encodedBodySize,
                bC.test(q.name) && (n = !0),
                cC.test(q.name) && (m = !0)),
                eC.test(q.name) && (d += q.transferSize)) : 0 === q.transferSize && 0 === q.encodedBodySize ? fC.test(q.name) ? c += 6686 : dC.test(q.name) || (k += 1,
                Mk(J.getInstance(), {
                    event_name: "unmeasurable_asset",
                    resource_name: q.name,
                    encoded_body_size: q.encodedBodySize,
                    transfer_size: q.transferSize
                })) : (g += 1,
                e += q.encodedBodySize,
                bC.test(q.name) && (n = !0),
                cC.test(q.name) && (m = !0)));
            p = 0;
            if (a.duration) {
                for (q = 0; q < a.buffered.length; q++)
                    p += a.buffered.end(q) - a.buffered.start(q);
                p = Math.min(p, a.duration)
            }
            Mk(J.getInstance(), {
                event_name: b,
                asset_bytes: c,
                video_bytes: d,
                cached_data_bytes: e,
                js_cached: n,
                css_cached: m,
                num_assets: f,
                num_assets_cached: g,
                num_assets_cache_validated: h,
                num_assets_unmeasurable: k,
                video_played_seconds: a.currentTime.toFixed(2),
                video_muted: a.muted,
                video_seconds_loaded: p.toFixed(2)
            })
        } else
            K(J.getInstance(), "error", "reporting_timing_not_supported")
    }
    ;var hC = function(a, b, c, d) {
        this.url = a;
        this.mimeType = b;
        this.Ja = c;
        this.g = void 0 === d ? null : d
    };
    function iC(a) {
        var b = J.getInstance()
          , c = a.getVideoPlaybackQuality && a.getVideoPlaybackQuality();
        c ? (a = a.currentTime,
        K(b, "vqdf", String(c.droppedVideoFrames)),
        K(b, "vqtf", String(c.totalVideoFrames)),
        K(b, "vqfr", String(Math.round(c.totalVideoFrames / a)))) : K(b, "vqu", "1")
    }
    ;var jC = function(a) {
        this.g = a
    };
    jC.prototype.toString = function() {
        return this.g
    }
    ;
    var kC = new jC("video_mute")
      , lC = new jC("video_caption_visibility");
    var mC = function(a) {
        P.call(this);
        this.B = 1;
        this.l = [];
        this.A = 0;
        this.g = [];
        this.j = {};
        this.D = !!a
    };
    bb(mC, P);
    var nC = function(a, b, c) {
        var d = lC.toString()
          , e = a.j[d];
        e || (e = a.j[d] = []);
        var f = a.B;
        a.g[f] = d;
        a.g[f + 1] = b;
        a.g[f + 2] = c;
        a.B = f + 3;
        e.push(f)
    }
      , oC = function(a, b, c) {
        var d = a.j[lC.toString()];
        if (d) {
            var e = a.g;
            (d = d.find(function(f) {
                return e[f + 1] == b && e[f + 2] == c
            })) && a.o(d)
        }
    };
    mC.prototype.o = function(a) {
        var b = this.g[a];
        if (b) {
            var c = this.j[b];
            0 != this.A ? (this.l.push(a),
            this.g[a + 1] = function() {}
            ) : (c && Vb(c, a),
            delete this.g[a],
            delete this.g[a + 1],
            delete this.g[a + 2])
        }
        return !!b
    }
    ;
    mC.prototype.C = function(a, b) {
        var c = this.j[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++)
                d[e - 1] = arguments[e];
            if (this.D)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    pC(this.g[g + 1], this.g[g + 2], d)
                }
            else {
                this.A++;
                try {
                    for (e = 0,
                    f = c.length; e < f && !this.Ca(); e++)
                        g = c[e],
                        this.g[g + 1].apply(this.g[g + 2], d)
                } finally {
                    if (this.A--,
                    0 < this.l.length && 0 == this.A)
                        for (; c = this.l.pop(); )
                            this.o(c)
                }
            }
        }
    }
    ;
    var pC = function(a, b, c) {
        Zu(function() {
            a.apply(b, c)
        })
    };
    mC.prototype.clear = function(a) {
        if (a) {
            var b = this.j[a];
            b && (b.forEach(this.o, this),
            delete this.j[a])
        } else
            this.g.length = 0,
            this.j = {}
    }
    ;
    mC.prototype.N = function() {
        mC.Ga.N.call(this);
        this.clear();
        this.l.length = 0
    }
    ;
    var qC = function(a) {
        P.call(this);
        this.g = new mC(a);
        R(this, this.g)
    };
    bb(qC, P);
    qC.prototype.clear = function(a) {
        this.g.clear(void 0 !== a ? a.toString() : void 0)
    }
    ;
    var rC = function(a) {
        a = void 0 === a ? null : a;
        P.call(this);
        this.g = new tz(this);
        R(this, this.g);
        this.Ab = a
    };
    w(rC, P);
    var sC = function(a, b, c) {
        a.Ab && (nC(a.Ab.g, b, c),
        iq(a, function() {
            oC(a.Ab.g, b, c)
        }))
    };
    var tC = function(a, b) {
        rC.call(this, b);
        sC(this, function(c) {
            c ? a.g.mode = "showing" : a.kb()
        }, this)
    };
    w(tC, rC);
    var uC = function() {
        S.call(this);
        this.l = new tz(this);
        R(this, this.l)
    };
    w(uC, S);
    var wC = function(a, b, c) {
        c = void 0 === c ? !0 : c;
        uC.call(this);
        a.setAttribute("crossorigin", "anonymous");
        var d = ci("TRACK");
        d.setAttribute("kind", "captions");
        d.setAttribute("src", b);
        d.setAttribute("default", "");
        a.appendChild(d);
        this.j = document.createElement("style");
        a.appendChild(this.j);
        this.g = a.textTracks[0];
        vC(this);
        c ? this.g.mode = "showing" : this.kb()
    };
    w(wC, uC);
    var vC = function(a) {
        var b = a.g;
        document.addEventListener("updateCueStyles", function(c) {
            a.j.textContent = c.detail.style
        }, !0);
        b.addEventListener("cuechange", function() {
            for (var c = b.cues, d = 0; d < c.length; d++) {
                var e = c[d];
                e.align = "center";
                e.position = "auto"
            }
        }, {
            once: !0
        })
    };
    wC.prototype.kb = function() {
        this.g.mode = "hidden"
    }
    ;
    function xC(a, b) {
        if ("undefined" !== typeof ReportingObserver) {
            var c = function(e) {
                e = u(e);
                for (var f = e.next(); !f.done; f = e.next())
                    f = f.value,
                    a(f) && b(f)
            }
              , d = new ReportingObserver(c,{
                buffered: !0
            });
            y.addEventListener("pagehide", function() {
                c(d.takeRecords(), d);
                d.disconnect()
            });
            d.observe()
        }
    }
    function yC(a) {
        a = void 0 === a ? null : a;
        xC(function(b) {
            return b.body && "HeavyAdIntervention" === b.body.id
        }, function(b) {
            var c = b.body.message
              , d = J.getInstance();
            K(d, "ham", c);
            c.includes("CPU") ? K(d, "hacpu", "true") : c.includes("network") && K(d, "habytes", "true");
            a && a(b)
        })
    }
    ;var zC = "autoplay controls crossorigin demuxedaudiosrc demuxedvideosrc loop muted playsinline poster preload src webkit-playsinline x-webkit-airplay".split(" ")
      , AC = "autoplay buffered controls crossOrigin currentSrc currentTime defaultMuted defaultPlaybackRate disablePictureInPicture disableRemotePlayback duration ended loop muted networkState onerror onwaitingforkey paused played playsinline poster preload preservesPitch mozPreservesPitch webkitPreservesPitch readyState seekable videoWidth videoHeight volume textTracks canPlayType captureStream getVideoPlaybackQuality load pause play requestPictureInPicture setSinkId oncanplay oncanplaythrough onload onplay onpause onended onfullscreenchange onfullscreenerror addEventListener dispatchEvent removeEventListener requestFullscreen".split(" ")
      , BC = {
        childList: !0
    }
      , CC = !RegExp("^\\s*class\\s*\\{\\s*\\}\\s*$").test(function() {}
    .toString())
      , DC = HTMLElement;
    CC && (DC = function() {
        var a = Object.getPrototypeOf(this).constructor;
        return y.Reflect.construct(HTMLElement, [], a)
    }
    ,
    Object.setPrototypeOf(DC, HTMLElement),
    Object.setPrototypeOf(DC.prototype, HTMLElement.prototype));
    var EC = function(a) {
        if (null !== a) {
            a = u(a);
            for (var b = a.next(); !b.done; b = a.next())
                if (b = b.value,
                b.nodeName === "TRACK".toString())
                    return b
        }
        return null
    }
      , FC = function(a, b) {
        this.code = a;
        this.message = void 0 === b ? "" : b
    }
      , GC = function(a) {
        FC.call(this, MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED, void 0 === a ? "" : a)
    };
    w(GC, FC);
    var KC = function(a, b) {
        b = void 0 === b ? !1 : b;
        var c = DC.call(this) || this;
        K(J.getInstance(), "ulv", "1");
        c.fh = b;
        c.ra = null;
        c.Qe = null;
        c.ue = null;
        c.R = ci("VIDEO");
        HC(c);
        c.Ab = a || new qC;
        IC(c);
        c.Ac = null;
        JC(c);
        c.attachShadow({
            mode: "open"
        });
        c.shadowRoot.appendChild(c.R);
        yC(function() {
            K(J.getInstance(), "has", c.src || c.gb);
            K(J.getInstance(), "hat", String(c.R.currentTime))
        });
        c.fd = !1;
        c.Ue = !1;
        c.hc = null;
        c.od = null;
        c.gh = !1;
        c.Ze = !1;
        c.Wi = null;
        c.Sb = null;
        return c
    };
    w(KC, DC);
    var LC = function(a) {
        a.R.load();
        Ul(Fm) && a.R.dispatchEvent(new Event("canplaythrough"))
    };
    KC.prototype.attributeChangedCallback = function(a, b, c) {
        switch (a) {
        case "src":
            MC(this, c);
            break;
        case "demuxedaudiosrc":
        case "demuxedvideosrc":
            NC(this);
            break;
        case "muted":
            this.R[a] = "" === c ? !0 : !!c;
            OC(this, a, c);
            break;
        default:
            OC(this, a, c)
        }
    }
    ;
    KC.prototype.jd = function(a) {
        this.Sb = a;
        var b;
        null == (b = this.ra) || b.jd(a)
    }
    ;
    var OC = function(a, b, c) {
        c !== a.R.getAttribute(b) && (null === c ? a.R.removeAttribute(b) : a.R.setAttribute(b, c))
    }
      , PC = function(a) {
        a.ra && (a.R.removeEventListener("timeupdate", a.hc),
        a.ra.V(),
        a.ra = null)
    }
      , QC = function(a, b) {
        a.ue = b;
        a.R.dispatchEvent(new Event("error"))
    }
      , HC = function(a) {
        RC(a);
        SC(a);
        a.R.addEventListener("loadedmetadata", function() {
            a.od = Vy(a);
            a.od.then(function(b) {
                var c = a.R.videoWidth;
                var d = a.R.videoHeight
                  , e = b.width
                  , f = b.height;
                0 < c && 0 < d && 0 < e && 0 < f ? (b = b.width / b.height,
                c /= d,
                c = .97 <= Math.min(c, b) / Math.max(c, b) ? "cover" : "contain") : c = null;
                null !== c && jp(a.R, {
                    "object-fit": c
                })
            })
        });
        a.R.addEventListener("play", function() {
            a.Ue || (gC(a.R, "first_play"),
            a.Ue = !0)
        });
        a.R.addEventListener("pause", function() {
            a.fd || (gC(a.R, "first_pause"),
            iC(a.R),
            a.fd = !0)
        });
        Du(y, "pagehide", function() {
            a.fd || (gC(a.R, "first_pause"),
            iC(a.R),
            a.fd = !0)
        });
        a.R.addEventListener("stalled", function() {
            K(J.getInstance(), "ves", "1")
        });
        (new fz(a.R)).listen("playbackStalled", function() {
            return K(J.getInstance(), "pbs", "1")
        });
        a.R.addEventListener("media_source_error", function(b) {
            PC(a);
            b = b.detail;
            QC(a, new FC(b.code,b.message))
        });
        TC(a)
    }
      , JC = function(a) {
        var b = EC(a.childNodes);
        b && UC(a, b);
        null === a.Ac && VC(a)
    }
      , VC = function(a) {
        if (y.MutationObserver) {
            var b = new MutationObserver(function(c) {
                c = u(c);
                for (var d = c.next(); !d.done; d = c.next())
                    if (d = d.value,
                    "childList" === d.type && (d = EC(d.addedNodes))) {
                        UC(a, d);
                        b.disconnect();
                        break
                    }
            }
            );
            b.observe(a, BC)
        }
    }
      , IC = function(a) {
        a.R.addEventListener("volumechange", function() {
            a.Ab.g.C(kC.toString(), a.R.muted);
            a.fh || a.Ab.g.C(lC.toString(), a.R.muted)
        })
    }
      , UC = function(a, b) {
        if (null === a.Ac && b.hasAttribute("src")) {
            var c = b.getAttribute("src");
            a.Ac = new wC(a.R,c,b.hasAttribute("default"));
            new tC(a.Ac,a.Ab);
            c.includes("kind=asr") && K(J.getInstance(), "act", "1")
        }
    }
      , MC = function(a, b) {
        if (b !== a.Qe) {
            a.Qe = b;
            a.gh && b && Iy(b) && (b = Jy(b));
            var c = b ? lA(b) : null
              , d = !!c && PB(c);
            K(J.getInstance(), "umsem", d ? "1" : "0");
            d ? (b = Fx(hC, b, mA(c), 1E3 * dA[c], null),
            a.ra = Fx(XB, [b]),
            a.Sb && a.ra.jd(a.Sb),
            a.ra.listen("media_source_error", function(e) {
                e = nA("media_source_error", e.detail);
                a.R.dispatchEvent(e)
            }),
            a.hc = function() {
                var e = a.ra;
                e.F = 1E3 * a.R.currentTime;
                ZB(e)
            }
            ,
            a.R.addEventListener("timeupdate", a.hc),
            OC(a, "src", $B(a.ra))) : (PC(a),
            OC(a, "src", b));
            a.Ze || LC(a)
        }
    }
      , NC = function(a) {
        a.src && QC(a, new FC(MediaError.MEDIA_ERR_ABORTED,"Setting demuxed src after src is already set."));
        if (!a.ub && !a.gb && a.ra)
            PC(a),
            OC(a, "src", null),
            LC(a);
        else if (a.ub && a.gb) {
            var b = lA(Iy(a.gb) ? Jy(a.gb) : a.gb)
              , c = lA(Iy(a.ub) ? Jy(a.ub) : a.ub);
            if (b && PB(b))
                if (c && PB(c)) {
                    var d = !!b && PB(b) && !!c && PB(c);
                    K(J.getInstance(), "umsed", d ? "1" : "0");
                    b = Fx(hC, a.gb, mA(b), -1, null);
                    c = Fx(hC, a.ub, mA(c), -1, null);
                    a.ra = Fx(XB, [b, c]);
                    a.Sb && a.ra.jd(a.Sb);
                    a.ra.listen("media_source_error", function(e) {
                        e = nA("media_source_error", e.detail);
                        a.R.dispatchEvent(e)
                    });
                    a.hc = function() {
                        var e = a.ra;
                        e.F = 1E3 * a.R.currentTime;
                        ZB(e)
                    }
                    ;
                    a.R.addEventListener("timeupdate", a.hc);
                    OC(a, "src", $B(a.ra));
                    a.Ze || LC(a)
                } else
                    QC(a, new GC('Audio itag "' + c + '" not supported.'));
            else
                QC(a, new GC('Video itag "' + b + '" not supported.'))
        }
    }
      , RC = function(a) {
        for (var b = u(AC), c = b.next(), d = {}; !c.done; d = {
            Za: void 0,
            getValue: void 0
        },
        c = b.next())
            d.Za = c.value,
            d.Za in a.R && ("function" === typeof a.R[d.Za] ? (d.getValue = a.R[d.Za].bind(a.R),
            Object.defineProperty(a, d.Za, {
                set: function(e) {
                    return function(f) {
                        a.R[e.Za] = f
                    }
                }(d),
                get: function(e) {
                    return function() {
                        return e.getValue
                    }
                }(d)
            })) : Object.defineProperty(a, d.Za, {
                set: function(e) {
                    return function(f) {
                        a.R[e.Za] = f
                    }
                }(d),
                get: function(e) {
                    return function() {
                        return a.R[e.Za]
                    }
                }(d)
            }))
    }
      , SC = function(a) {
        Object.defineProperty(a, "error", {
            set: function() {},
            get: function() {
                return a.R.error ? a.R.error : a.ue
            }
        })
    }
      , TC = function(a) {
        a.R.style.width = qp();
        a.R.style.height = qp()
    };
    KC.prototype.disconnectedCallback = function() {
        this.od && Wy(this.od);
        DC.prototype.disconnectedCallback && DC.prototype.disconnectedCallback.call(this)
    }
    ;
    da.Object.defineProperties(KC.prototype, {
        ub: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedaudiosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedaudiosrc")
            }
        },
        gb: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedvideosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedvideosrc")
            }
        },
        src: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("src", a)
            },
            get: function() {
                return this.getAttribute("src")
            }
        }
    });
    da.Object.defineProperties(KC, {
        observedAttributes: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return zC
            }
        }
    });
    y.customElements && (y.customElements.get("lima-video") || y.customElements.define("lima-video", KC));
    function WC() {
        var a = Fx(zB);
        a.initialize().then(function() {
            var b = nA("initialized");
            a.dispatchEvent(b)
        });
        return a
    }
    var YC = function(a, b, c, d, e) {
        P.call(this);
        this.F = a;
        this.j = c;
        this.A = e;
        this.Z = this.T = this.Db = this.D = this.l = this.Ra = 0;
        this.C = [];
        this.M = !1;
        this.aa = this.ga = this.fa = null;
        this.Ha = !1;
        this.Eb = this.K = this.o = this.Ia = this.Qa = null;
        this.wa = !1;
        this.I = new T(b.url);
        this.Ja = b.Ja;
        this.ka = d;
        (this.O = b.g) || this.I.g.remove("alr");
        K(J.getInstance(), "sl_dv" + this.A, (null !== this.O).toString());
        this.U = !this.O;
        this.g = new XMLHttpRequest;
        this.W = .1;
        if (this.B = CA() && !Iy(this.I))
            this.o = WC(),
            R(this, this.o);
        XC(this)
    };
    w(YC, P);
    var ZC = function(a, b) {
        b = nA("media_source_error", b);
        a.F.dispatchEvent(b)
    }
      , $C = function(a, b) {
        ZC(a, {
            code: 1 < a.l ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
            message: b
        })
    }
      , XC = function(a) {
        a.fa = function() {
            aD(a);
            if (a.U) {
                var b = a.g.responseText;
                a.M = !b || b.length < a.Ja;
                a.T = 0;
                L("sl_cc" + a.A + "_" + a.l);
                a.D++;
                bD(a)
            }
        }
        ;
        a.ga = function() {
            aD(a)
        }
        ;
        a.aa = function() {
            L("sl_ec" + a.A + "_" + a.l);
            $C(a, "Failed to load chunk " + a.l + " for stream " + a.A)
        }
        ;
        a.g.addEventListener("load", a.fa);
        a.g.addEventListener("progress", a.ga);
        a.g.addEventListener("error", a.aa);
        a.j.addEventListener("updateend", function() {
            a.j.buffered.length && (a.Db = a.j.buffered.end(0),
            a.B ? a.wa && !a.j.updating && a.l === a.D && (L("sl_lc" + a.A),
            a.ka()) : a.M && !a.j.updating && a.l === a.D && (L("sl_lc" + a.A),
            a.ka()));
            !a.Ha && 1 < a.F.buffered.length && (K(J.getInstance(), "dbr", "1"),
            a.Ha = !0)
        });
        a.j.addEventListener("update", function() {
            a.C.length && !a.j.updating && a.j.appendBuffer(a.C.shift())
        });
        a.j.addEventListener("error", function() {
            L("msb_err" + a.A);
            ZC(a, {
                code: MediaError.MEDIA_ERR_DECODE,
                message: "Error on SourceBuffer " + a.A
            })
        });
        a.B ? (a.o.Ua() ? cD(a) : a.Qa = Du(a.o, "initialized", function() {
            cD(a)
        }),
        a.Ia = Du(a.o, "get_video_succeeded", function() {
            bD(a)
        })) : cD(a)
    }
      , eD = function(a) {
        L("sl_rc" + a.A + "_" + a.l);
        var b = dD(a);
        a.g.open("get", b);
        a.g.overrideMimeType("text/plain; charset=x-user-defined");
        a.g.send(null);
        a.B && (a.K = null,
        a.Eb = b)
    }
      , aD = function(a) {
        if (400 <= a.g.status)
            $C(a, 'Response code "' + a.g.status + '" on loading chunk ' + a.l + " for stream " + a.A);
        else {
            if (!a.U) {
                var b = a.g.getResponseHeader("content-type");
                if (b && 0 <= b.indexOf("text/plain")) {
                    a.g.readyState === XMLHttpRequest.DONE && (a.I = new T(a.g.response),
                    a.l = 0,
                    a.D = 0,
                    a.Ra++,
                    cD(a));
                    return
                }
                a.U = !0;
                L("sl_redc" + a.A);
                K(J.getInstance(), "sl_tr" + a.A, a.Ra.toString())
            }
            a.I.g.remove("alr");
            if (a.g.readyState === XMLHttpRequest.LOADING || a.g.readyState === XMLHttpRequest.DONE)
                b = fD(a, a.T),
                a.T = a.g.response.length,
                a.Z += b.byteLength,
                gD(a, b);
            if (a.B && a.g.readyState === XMLHttpRequest.DONE && (b = fD(a, 0),
            0 < b.byteLength)) {
                var c = a.g.responseText;
                a.wa = !c || c.length < a.Ja;
                a.o.vc(b, new T(a.Eb), 0, a.wa)
            }
        }
    }
      , gD = function(a, b) {
        0 < b.byteLength && (a.j.updating || a.C.length ? a.C.push(b) : a.j.appendBuffer(b))
    }
      , fD = function(a, b) {
        a = a.g.response;
        for (var c = new Uint8Array(a.length - b), d = 0; d < c.length; d++)
            c[d] = a.charCodeAt(d + b) & 255;
        return c.buffer
    }
      , bD = function(a) {
        var b = Ky;
        -1 !== b && b < a.Z + a.Ja ? (a.F.pause(),
        Ky = -1,
        b = !1) : (b = a.D === a.l && !a.j.updating && !a.C.length,
        b = a.B ? !a.wa && b && a.F.currentTime >= a.W : !a.M && b && a.F.currentTime >= a.W);
        b && (a.W = a.Db + .1,
        cD(a))
    }
      , dD = function(a) {
        var b = a.B && a.K ? a.K + 1 : a.l * a.Ja;
        return sy(a.I, "range", b + "-" + (b + a.Ja - 1)).toString()
    }
      , cD = function(a) {
        if (a.B) {
            var b = new T(dD(a));
            a.o.Xb(b).then(function(c) {
                c ? (a.K = Number(c.Fc),
                a.wa = c.wa,
                gD(a, c.video),
                c = nA("get_video_succeeded"),
                a.o.dispatchEvent(c),
                a.D++) : eD(a);
                a.l++
            })
        } else
            eD(a),
            a.l++
    };
    YC.prototype.N = function() {
        this.B && this.o.Ua() && this.o.close();
        this.g.removeEventListener("load", this.fa);
        this.g.removeEventListener("progress", this.ga);
        this.g.removeEventListener("error", this.aa);
        Lu(this.Qa);
        Lu(this.Ia);
        P.prototype.N.call(this)
    }
    ;
    var iD = function(a, b) {
        P.call(this);
        var c = this;
        this.o = a;
        this.F = b;
        this.g = new MediaSource;
        this.D = [];
        this.l = [];
        this.j = this.A = null;
        this.B = !1;
        this.C = function() {
            hD(c)
        }
        ;
        this.g.addEventListener("sourceopen", this.C)
    };
    w(iD, P);
    var jD = function(a) {
        a.A && a.o.removeEventListener("timeupdate", a.A)
    }
      , hD = function(a) {
        L("msmsw_oso");
        a.A = function() {
            if (!a.B)
                for (var e = u(a.l), f = e.next(); !f.done; f = e.next())
                    bD(f.value)
        }
        ;
        a.o.addEventListener("timeupdate", a.A);
        for (var b = 0; b < a.F.length; b++) {
            var c = a.F[b];
            K(J.getInstance(), "msmsw_mime" + b, c.mimeType);
            K(J.getInstance(), "msmsw_cs" + b, c.Ja.toString());
            var d = a.g.addSourceBuffer(c.mimeType);
            d ? (a.D.push(d),
            c = Fx(YC, a.o, c, d, function() {
                a: if (!a.B) {
                    for (var e = u(a.l), f = e.next(); !f.done; f = e.next())
                        if (f = f.value,
                        f.B ? !f.wa || f.j.updating || f.C.length : !f.M || f.j.updating || f.C.length)
                            break a;
                    a.g.endOfStream();
                    a.B = !0;
                    jD(a)
                }
            }, b),
            a.l.push(c)) : L("msmsw_sbf" + b)
        }
        K(J.getInstance(), "msmsw_ns", a.D.length.toString())
    };
    iD.prototype.N = function() {
        this.j && window.URL.revokeObjectURL(this.j);
        for (var a = u(this.l), b = a.next(); !b.done; b = a.next())
            b.value.V();
        jD(this);
        this.g.removeEventListener("sourceopen", this.C);
        P.prototype.N.call(this)
    }
    ;
    RegExp.prototype.hasOwnProperty("sticky");
    /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
    var kD = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
      , lD = function() {
        for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++)
            8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0),
            c = b & 15,
            b >>= 4,
            a[d] = kD[19 == d ? c & 3 | 8 : c]);
        return a.join("")
    };
    var nD = function(a) {
        T.call(this, a);
        this.C = new Map;
        a = this.l;
        var b = a.indexOf(";")
          , c = null;
        0 <= b ? (this.l = a.substring(0, b),
        c = a.substring(b + 1)) : this.l = a;
        mD(this, c)
    };
    w(nD, T);
    nD.prototype.toString = function() {
        return oD(this, T.prototype.toString.call(this))
    }
    ;
    nD.prototype.D = function() {
        return ""
    }
    ;
    var mD = function(a, b) {
        nb(Mh(b)) || b.split(";").forEach(function(c) {
            var d = c.indexOf("=");
            if (!(0 >= d)) {
                var e = Jh(c.substring(0, d));
                c = Jh(c.substring(d + 1));
                d = a.C.get(e);
                null != d ? d.includes(c) || d.push(c) : d = [Mh(c)];
                a.C.set(e, d)
            }
        }, a)
    }
      , pD = function(a) {
        if (nb(Mh("ord")))
            return null;
        a = a.C.get("ord");
        return null != a ? a : null
    }
      , qD = function(a, b) {
        nb(Mh("ord")) || (b = b.map(Mh),
        a.C.set("ord", b))
    }
      , oD = function(a, b) {
        b = [Mh(b)];
        b.push.apply(b, ia(rD(a)));
        return b.join(";")
    }
      , rD = function(a) {
        var b = pD(a);
        null == b ? b = [Mh(Date.now())] : nb(Mh("ord")) || a.C.delete("ord");
        var c = [];
        a.C.forEach(function(d, e) {
            d.forEach(function(f) {
                c.push(e + "=" + f)
            })
        });
        c.push("ord=" + b[0]);
        qD(a, b);
        return c
    };
    nD.prototype.F = function() {
        return new nD(this.toString())
    }
    ;
    function sD(a) {
        var b = new nD(a);
        a = b.j;
        b = oD(b, b.l);
        return !lb(a, ".g.doubleclick.net") && (lb(a, "doubleclick.net") || lb(a, "pagead2.googlesyndication.com")) && lz("/(ad|pfad)[x|i|j]?/", b)
    }
    function tD(a) {
        return "bid.g.doubleclick.net" == (new T(a)).j
    }
    function uD(a) {
        a = new T(a);
        var b = a.l;
        return lb(a.j, "googleads.g.doubleclick.net") && lz("/pagead/(live/)?ads", b)
    }
    function vD(a) {
        a = new T(a);
        var b = a.l;
        return lb(a.j, "doubleclick.net") && lz("/gampad/(live/)?ads", b)
    }
    function wD(a) {
        a = new T(a);
        var b = a.l;
        return "ad.doubleclick.net" === a.j && lz("/dv3/adv", b)
    }
    ;var U = {
        DEPRECATED_ERROR_CODE: -1,
        VAST_MALFORMED_RESPONSE: 100,
        VAST_SCHEMA_VALIDATION_ERROR: 101,
        VAST_UNSUPPORTED_VERSION: 102,
        VAST_TRAFFICKING_ERROR: 200,
        VAST_UNEXPECTED_LINEARITY: 201,
        VAST_UNEXPECTED_DURATION_ERROR: 202,
        VAST_WRAPPER_ERROR: 300,
        VAST_LOAD_TIMEOUT: 301,
        VAST_TOO_MANY_REDIRECTS: 302,
        VAST_NO_ADS_AFTER_WRAPPER: 303,
        VIDEO_PLAY_ERROR: 400,
        VAST_MEDIA_LOAD_TIMEOUT: 402,
        VAST_LINEAR_ASSET_MISMATCH: 403,
        VAST_PROBLEM_DISPLAYING_MEDIA_FILE: 405,
        OVERLAY_AD_PLAYING_FAILED: 500,
        NONLINEAR_DIMENSIONS_ERROR: 501,
        OVERLAY_AD_LOADING_FAILED: 502,
        VAST_NONLINEAR_ASSET_MISMATCH: 503,
        COMPANION_REQUIRED_ERROR: 602,
        COMPANION_AD_LOADING_FAILED: 603,
        UNKNOWN_ERROR: 900,
        VPAID_ERROR: 901,
        FAILED_TO_REQUEST_ADS: 1005,
        VAST_ASSET_NOT_FOUND: 1007,
        VAST_EMPTY_RESPONSE: 1009,
        UNKNOWN_AD_RESPONSE: 1010,
        UNSUPPORTED_LOCALE: 1011,
        ADS_REQUEST_NETWORK_ERROR: 1012,
        INVALID_AD_TAG: 1013,
        PROTECTED_AUDIENCE_API_ERROR: 1014,
        STREAM_INITIALIZATION_FAILED: 1020,
        ASSET_FALLBACK_FAILED: 1021,
        INVALID_ARGUMENTS: 1101,
        NATIVE_MESSAGE_ERROR: 1204,
        AUTOPLAY_DISALLOWED: 1205,
        CONSENT_MANAGEMENT_PROVIDER_NOT_READY: 1300,
        yi: 2002
    };
    U[-1] = "DEPRECATED_ERROR_CODE";
    U[100] = "VAST_MALFORMED_RESPONSE";
    U[101] = "VAST_SCHEMA_VALIDATION_ERROR";
    U[102] = "VAST_UNSUPPORTED_VERSION";
    U[200] = "VAST_TRAFFICKING_ERROR";
    U[201] = "VAST_UNEXPECTED_LINEARITY";
    U[202] = "VAST_UNEXPECTED_DURATION_ERROR";
    U[300] = "VAST_WRAPPER_ERROR";
    U[301] = "VAST_LOAD_TIMEOUT";
    U[302] = "VAST_TOO_MANY_REDIRECTS";
    U[303] = "VAST_NO_ADS_AFTER_WRAPPER";
    U[400] = "VIDEO_PLAY_ERROR";
    U[402] = "VAST_MEDIA_LOAD_TIMEOUT";
    U[403] = "VAST_LINEAR_ASSET_MISMATCH";
    U[405] = "VAST_PROBLEM_DISPLAYING_MEDIA_FILE";
    U[500] = "OVERLAY_AD_PLAYING_FAILED";
    U[501] = "NONLINEAR_DIMENSIONS_ERROR";
    U[502] = "OVERLAY_AD_LOADING_FAILED";
    U[503] = "VAST_NONLINEAR_ASSET_MISMATCH";
    U[602] = "COMPANION_REQUIRED_ERROR";
    U[603] = "COMPANION_AD_LOADING_FAILED";
    U[900] = "UNKNOWN_ERROR";
    U[901] = "VPAID_ERROR";
    U[1005] = "FAILED_TO_REQUEST_ADS";
    U[1007] = "VAST_ASSET_NOT_FOUND";
    U[1009] = "VAST_EMPTY_RESPONSE";
    U[1010] = "UNKNOWN_AD_RESPONSE";
    U[1011] = "UNSUPPORTED_LOCALE";
    U[1012] = "ADS_REQUEST_NETWORK_ERROR";
    U[1013] = "INVALID_AD_TAG";
    U[1014] = "PROTECTED_AUDIENCE_API_ERROR";
    U[1020] = "STREAM_INITIALIZATION_FAILED";
    U[1021] = "ASSET_FALLBACK_FAILED";
    U[1101] = "INVALID_ARGUMENTS";
    U[1204] = "NATIVE_MESSAGE_ERROR";
    U[1205] = "AUTOPLAY_DISALLOWED";
    U[1300] = "CONSENT_MANAGEMENT_PROVIDER_NOT_READY";
    U[2002] = "SUPPORTED_ADS_NOT_FOUND";
    var xD = function(a, b, c) {
        var d = Error.call(this);
        this.message = d.message;
        "stack"in d && (this.stack = d.stack);
        this.type = a;
        this.errorMessage = b;
        this.errorCode = c;
        this.ad = this.g = null
    };
    w(xD, Error);
    l = xD.prototype;
    l.getAd = function() {
        return this.ad
    }
    ;
    l.getInnerError = function() {
        return this.g
    }
    ;
    l.getMessage = function() {
        return this.errorMessage
    }
    ;
    l.getErrorCode = function() {
        return this.errorCode
    }
    ;
    l.getVastErrorCode = function() {
        return 1E3 > this.errorCode ? this.errorCode : 900
    }
    ;
    l.getType = function() {
        return this.type
    }
    ;
    l.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (null != this.getInnerError() ? " Caused by: " + this.getInnerError() : "")
    }
    ;
    var yD = fa(["https://imasdk.googleapis.com/js/sdkloader/car.js"]);
    Bh(yD);
    function zD(a) {
        return a ? uD(a) ? "adsense" : tD(a) ? "dbm" : sD(a) ? "dcm" : wD(a) ? "dv3" : vD(a) ? "xfp" : "thirdparty" : ""
    }
    function AD(a) {
        if ("" === a)
            return null;
        a = new T(a);
        var b;
        b = (b = a.g.get("slotname") || a.g.get("iu")) ? (b = /\/(\d+)(?:,\d+){0,2}\//.exec(b)) && 2 === b.length ? b[1] : null : null;
        if (!b) {
            var c;
            b = (a = null != (c = a.g.get("client")) ? c : "") ? a : null
        }
        return b
    }
    function BD(a, b) {
        try {
            var c = new URL(a);
            return c.searchParams.get("slotname") || c.searchParams.get("iu") || ""
        } catch (d) {
            null == b || b(d)
        }
        return ""
    }
    ;var CD = function(a) {
        var b = {};
        b = (b.IABUSPrivacy_String = "uspString",
        b.IABTCF_gdprApplies = "gdprApplies",
        b.IABTCF_TCString = "tcString",
        b.IABTCF_AddtlConsent = "addtlConsent",
        b.IABGPP_HDR_GppString = "gppString",
        b.IABGPP_GppSID = "gppSid",
        b);
        for (var c in b)
            null != a[c] && (a[b[c]] = a[c],
            delete a[c]);
        c = a.uspString;
        this.uspString = "string" === typeof c ? c : "";
        c = a.gdprApplies;
        this.j = "boolean" === typeof c ? c ? "1" : "0" : "number" !== typeof c || 1 !== c && 0 !== c ? "string" !== typeof c || "1" !== c && "0" !== c ? "" : "1" === c ? "1" : "0" : 1 === c ? "1" : "0";
        c = a.tcString;
        this.g = "string" === typeof c ? c : "";
        /^[\.\w_-]*$/.test(this.g) || (this.g = encodeURIComponent(this.g));
        a = a.gppString;
        this.gppString = "string" === typeof a ? a : ""
    };
    var DD = function(a) {
        this.g = a
    }
      , ED = function(a, b) {
        return ah(a.g, b) && (a = a.g[b],
        "boolean" === typeof a) ? a : !1
    }
      , FD = function(a) {
        return ah(a.g, "videoElementFakeDuration") && (a = a.g.videoElementFakeDuration,
        "number" === typeof a) ? a : NaN
    }
      , GD = function(a) {
        if (ah(a.g, "forceExperimentIds")) {
            a = a.g.forceExperimentIds;
            var b = []
              , c = 0;
            Array.isArray(a) && a.forEach(function(d) {
                "number" === typeof d && (b[c++] = d)
            });
            return b
        }
        return null
    };
    var V = function() {
        this.F = "always";
        this.T = 4;
        this.L = null;
        this.o = 1;
        this.g = 0;
        this.A = !0;
        this.locale = "en";
        this.l = null;
        this.j = !1;
        this.Z = this.W = "";
        this.C = null;
        this.aa = this.U = -1;
        this.B = "";
        this.M = !1;
        this.K = !0;
        this.D = lD();
        this.O = {};
        this.J = "";
        this.I = 0;
        try {
            this.fa = po()[0]
        } catch (a) {}
    }
      , HD = function(a) {
        a = Mh(a);
        nb(a) || (a = a.substring(0, 20));
        return a
    };
    l = V.prototype;
    l.setCompanionBackfill = function(a) {
        this.F = a
    }
    ;
    l.getCompanionBackfill = function() {
        return this.F
    }
    ;
    l.setNumRedirects = function(a) {
        this.T = a
    }
    ;
    l.getNumRedirects = function() {
        return this.T
    }
    ;
    l.setPpid = function(a) {
        this.L = a
    }
    ;
    l.getPpid = function() {
        return this.L
    }
    ;
    l.setVpaidAllowed = function(a) {
        "boolean" === typeof a && (this.o = a ? 1 : 0)
    }
    ;
    l.setVpaidMode = function(a) {
        this.o = a
    }
    ;
    l.ig = function() {
        return this.o
    }
    ;
    l.setAutoPlayAdBreaks = function(a) {
        this.A = a
    }
    ;
    l.tg = function() {
        return this.A
    }
    ;
    l.Rg = function(a) {
        this.j = a
    }
    ;
    l.hg = function() {
        return this.j
    }
    ;
    l.setLocale = function(a) {
        if (a = nz(a))
            this.locale = a
    }
    ;
    l.getLocale = function() {
        return this.locale
    }
    ;
    l.setPlayerType = function(a) {
        this.W = HD(a)
    }
    ;
    l.getPlayerType = function() {
        return this.W
    }
    ;
    l.setPlayerVersion = function(a) {
        this.Z = HD(a)
    }
    ;
    l.getPlayerVersion = function() {
        return this.Z
    }
    ;
    var ID = function(a) {
        if (null == a.C) {
            var b = {};
            var c = (new T(G().location.href)).g;
            if (yy(c, "tcnfp"))
                try {
                    b = JSON.parse(c.get("tcnfp"))
                } catch (d) {}
            a.C = new DD(b)
        }
        return a.C
    };
    l = V.prototype;
    l.Sg = function(a) {
        this.U = a
    }
    ;
    l.Tg = function(a) {
        this.aa = a
    }
    ;
    l.setDisableCustomPlaybackForIOS10Plus = function(a) {
        this.M = a
    }
    ;
    l.getDisableCustomPlaybackForIOS10Plus = function() {
        return this.M
    }
    ;
    l.isCookiesEnabled = function() {
        return this.K
    }
    ;
    l.setCookiesEnabled = function(a) {
        null != a && (this.K = a)
    }
    ;
    l.setSessionId = function(a) {
        this.D = a
    }
    ;
    l.Qg = function() {}
    ;
    l.gg = function() {
        return !0
    }
    ;
    l.setFeatureFlags = function(a) {
        this.O = a
    }
    ;
    l.getFeatureFlags = function() {
        return this.O
    }
    ;
    var JD = function(a, b) {
        b = void 0 === b ? null : b;
        var c = {};
        null != b && (c.activeViewPushUpdates = b);
        c.activityMonitorMode = a.g;
        c.adsToken = a.B;
        c.autoPlayAdBreaks = a.A;
        c.companionBackfill = a.getCompanionBackfill();
        c.cookiesEnabled = a.isCookiesEnabled();
        c.disableCustomPlaybackForIOS10Plus = a.getDisableCustomPlaybackForIOS10Plus();
        c.engagementDetection = !0;
        c.isFunctionalTest = !1;
        c.isVpaidAdapter = a.j;
        c["1pJar"] = "";
        c.numRedirects = a.getNumRedirects();
        c.pageCorrelator = a.U;
        c.persistentStateCorrelator = tk();
        c.playerType = a.getPlayerType();
        c.playerVersion = a.getPlayerVersion();
        c.ppid = a.getPpid();
        c.privacyControls = "";
        c.reportMediaRequests = !1;
        c.sessionId = a.D;
        c.streamCorrelator = a.aa;
        c.testingConfig = ID(a).g;
        c.urlSignals = a.fa;
        c.vpaidMode = a.o;
        c.featureFlags = a.getFeatureFlags();
        c.cookieDeprecationLabel = a.J;
        c.cookieDeprecationLabelStatus = a.I;
        return c
    };
    V.prototype.getFeatureFlags = V.prototype.getFeatureFlags;
    V.prototype.setFeatureFlags = V.prototype.setFeatureFlags;
    V.prototype.getDisableFlashAds = V.prototype.gg;
    V.prototype.setDisableFlashAds = V.prototype.Qg;
    V.prototype.setSessionId = V.prototype.setSessionId;
    V.prototype.setCookiesEnabled = V.prototype.setCookiesEnabled;
    V.prototype.isCookiesEnabled = V.prototype.isCookiesEnabled;
    V.prototype.getDisableCustomPlaybackForIOS10Plus = V.prototype.getDisableCustomPlaybackForIOS10Plus;
    V.prototype.setDisableCustomPlaybackForIOS10Plus = V.prototype.setDisableCustomPlaybackForIOS10Plus;
    V.prototype.setStreamCorrelator = V.prototype.Tg;
    V.prototype.setPageCorrelator = V.prototype.Sg;
    V.prototype.getPlayerVersion = V.prototype.getPlayerVersion;
    V.prototype.setPlayerVersion = V.prototype.setPlayerVersion;
    V.prototype.getPlayerType = V.prototype.getPlayerType;
    V.prototype.setPlayerType = V.prototype.setPlayerType;
    V.prototype.getLocale = V.prototype.getLocale;
    V.prototype.setLocale = V.prototype.setLocale;
    V.prototype.getIsVpaidAdapter = V.prototype.hg;
    V.prototype.setIsVpaidAdapter = V.prototype.Rg;
    V.prototype.isAutoPlayAdBreaks = V.prototype.tg;
    V.prototype.setAutoPlayAdBreaks = V.prototype.setAutoPlayAdBreaks;
    V.prototype.getVpaidMode = V.prototype.ig;
    V.prototype.setVpaidMode = V.prototype.setVpaidMode;
    V.prototype.setVpaidAllowed = V.prototype.setVpaidAllowed;
    V.prototype.getPpid = V.prototype.getPpid;
    V.prototype.setPpid = V.prototype.setPpid;
    V.prototype.getNumRedirects = V.prototype.getNumRedirects;
    V.prototype.setNumRedirects = V.prototype.setNumRedirects;
    V.prototype.getCompanionBackfill = V.prototype.getCompanionBackfill;
    V.prototype.setCompanionBackfill = V.prototype.setCompanionBackfill;
    var KD = new V;
    var LD = function(a) {
        this.H = C(a)
    };
    w(LD, E);
    LD.ba = [10];
    function MD(a) {
        var b = {};
        (new T(a)).g.forEach(function(c, d) {
            b[d] = c
        });
        return b
    }
    var ND = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? {} : b;
        var c = {};
        a = u(Object.entries(a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = u(d.value);
            d = e.next().value;
            e = e.next().value;
            null != e && (c[d] = String(e))
        }
        this.g = c;
        this.j = new CD(b)
    }
      , OD = function(a, b) {
        if (!(uD(a) || sD(a) || vD(a) || tD(a) || wD(a))) {
            var c = new T(a)
              , d = c.l;
            "pubads.g.doubleclick.net" === c.j && (lz("/ssai/", d) || lz("/ondemand/", d))
        }
        return new ND(MD(a),b)
    }
      , RD = function(a) {
        var b = a.j.g;
        var c = PD(a, "gdpr_consent");
        b = b && "tcunavailable" !== b ? b : "tcunavailable" === b ? c || b : c || "";
        if ("tcunavailable" === b)
            return null;
        var d;
        a = QD(a);
        if ((c = tx(b)) && b) {
            var e = Af(c, Lw, 1);
            c = Af(c, Fw, 2) || new Fw;
            var f = Mf(e, 9)
              , g = Mf(e, 4)
              , h = Mf(e, 5)
              , k = Lf(e, 10)
              , n = Lf(e, 11)
              , m = D(e, 16)
              , p = Lf(e, 15)
              , q = {
                consents: ux(gf(e, 13, ce), gx),
                legitimateInterests: ux(gf(e, 14, ce), gx)
            }
              , t = {
                consents: ux(gf(e, 17, ee)),
                legitimateInterests: ux(gf(e, 18, ee))
            }
              , v = ux(gf(e, 12, ce), hx)
              , x = Cf(e, Ew, 19);
            e = {};
            x = u(x);
            for (var A = x.next(); !A.done; A = x.next()) {
                A = A.value;
                var ha = Qf(A, 1);
                e[ha] = e[ha] || {};
                var Q = gf(A, 3, ee);
                Q = u(Q);
                for (var la = Q.next(); !la.done; la = Q.next())
                    e[ha][la.value] = Qf(A, 2)
            }
            b = {
                tcString: b,
                tcfPolicyVersion: f,
                gdprApplies: a,
                cmpId: g,
                cmpVersion: h,
                isServiceSpecific: k,
                useNonStandardStacks: n,
                publisherCC: m,
                purposeOneTreatment: p,
                purpose: q,
                vendor: t,
                specialFeatureOptins: v,
                publisher: {
                    restrictions: e,
                    consents: ux(gf(c, 1, ce), gx),
                    legitimateInterests: ux(gf(c, 2, ce), gx),
                    customPurposes: {
                        consents: ux(gf(c, 3, ee)),
                        legitimateInterests: ux(gf(c, 4, ee))
                    }
                }
            }
        } else
            b = null;
        return null != (d = b) ? d : null
    }
      , PD = function(a, b) {
        if (a.g.hasOwnProperty(b))
            return a.g[b]
    }
      , TD = function(a) {
        var b;
        if (!(b = SD(a))) {
            if (QD(a)) {
                a = RD(a);
                if (b = !!a) {
                    var c = void 0 === c ? {} : c;
                    b = Px(a) ? !1 === a.gdprApplies ? !0 : "tcunavailable" === a.tcString ? !c.He : (c.He || void 0 !== a.gdprApplies || c.Zi) && (c.He || "string" === typeof a.tcString && a.tcString.length) ? Sx(a, "1", 0) : !0 : !1
                }
                c = b
            } else
                c = !0;
            b = !c
        }
        return b
    }
      , SD = function(a) {
        a = PD(a, "ltd");
        return "1" === a || "true" === a
    }
      , QD = function(a) {
        var b = PD(a, "gdpr");
        a = a.j.j;
        b = ("1" === a || "0" === a ? a : void 0 !== b ? b : "").toLowerCase();
        return "true" === b || "1" === b
    }
      , UD = function(a) {
        var b = new LD;
        var c = !TD(a);
        c = Uf(b, 5, c);
        QD(a) ? (a = RD(a),
        a = !!a && !Ux(a)) : a = !1;
        Uf(c, 8, a);
        return b
    };
    var VD = function(a) {
        this.H = C(a)
    };
    w(VD, E);
    VD.prototype.getVersion = function() {
        return D(this, 2)
    }
    ;
    var WD = function(a) {
        this.H = C(a)
    };
    w(WD, E);
    var XD = function(a, b) {
        return Yf(a, 2, b)
    }
      , YD = function(a, b) {
        return Yf(a, 3, b)
    }
      , ZD = function(a, b) {
        return Yf(a, 4, b)
    }
      , $D = function(a, b) {
        return Yf(a, 5, b)
    }
      , aE = function(a, b) {
        return Yf(a, 9, b)
    }
      , bE = function(a, b) {
        return Ff(a, 10, b)
    }
      , cE = function(a, b) {
        return Uf(a, 11, b)
    }
      , dE = function(a, b) {
        return Yf(a, 1, b)
    }
      , eE = function(a, b) {
        return Uf(a, 7, b)
    };
    WD.ba = [10, 6];
    var fE = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function gE(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }
    function hE(a) {
        var b, c;
        return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }
    function iE() {
        var a = window;
        if (!hE(a))
            return null;
        var b = gE(a);
        if (b.uach_promise)
            return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(fE).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }
    function jE(a) {
        var b;
        return cE(bE($D(XD(dE(ZD(eE(aE(YD(new WD, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new VD;
            d = Yf(d, 1, c.brand);
            return Yf(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }
    function kE() {
        var a, b;
        return null != (b = null == (a = iE()) ? void 0 : a.then(function(c) {
            return jE(c)
        })) ? b : null
    }
    ;var mE = function() {
        this.appName = null;
        new ND;
        this.secureSignals = null;
        lD();
        this.deviceId = "";
        this.g = this.referrer = this.Ne = null;
        new Uj;
        lE(this)
    }
      , nE = function() {
        mE.getInstance();
        var a = "h.3.644.0";
        KD.j && (a += "/vpaid_adapter");
        return a
    }
      , lE = function(a) {
        var b = kE();
        b && b.then(function(c) {
            if (null == c)
                c = null;
            else {
                c = ag(c);
                for (var d = [], e = 0, f = 0; f < c.length; f++) {
                    var g = c.charCodeAt(f);
                    255 < g && (d[e++] = g & 255,
                    g >>= 8);
                    d[e++] = g
                }
                c = Fc(d, 3)
            }
            a.g = c
        })
    };
    mE.getInstance = function() {
        return I(mE)
    }
    ;
    var pE = function(a) {
        a = void 0 === a ? !1 : a;
        var b = ID(KD);
        if (b && ED(b, "forceCustomPlayback") || KD.j)
            return !0;
        if (cz() && a)
            return !1;
        a = a && (cz() || dz(10)) && KD.getDisableCustomPlaybackForIOS10Plus();
        return (oc || qc) && !a || nc && (!nc || !bz(az, 4)) || oE() ? !0 : !1
    }
      , qE = function(a) {
        return null === a ? !1 : KD.j ? !0 : rc || cz() ? ez(a) ? cz() || dz(10) && KD.getDisableCustomPlaybackForIOS10Plus() ? !1 : !0 : !0 : nc && (!nc || !bz(az, 4)) || oE() ? !0 : !1
    }
      , rE = function() {
        var a = ID(KD);
        return a && ED(a, "disableOnScreenDetection") ? !1 : !Dp()
    }
      , oE = function() {
        return 1 === sE() || 2 === sE()
    }
      , sE = function() {
        switch (mE.getInstance(),
        0) {
        case 1:
            return 3;
        case 2:
            return 1
        }
        return (mE.getInstance(),
        mE.getInstance(),
        "tvos" === mE.getInstance().Ne) ? 1 : Ep() ? 2 : 0
    };
    var tE = function(a, b) {
        return 0 == a.indexOf(b) ? a.substr(b.length) : null
    };
    function uE() {
        if (Dp())
            return window.location.href;
        var a = Ji()
          , b = a.j
          , c = a.g;
        a = a.l;
        var d = null;
        if (a)
            try {
                var e = ty(a.url)
                  , f = e.l
                  , g = tE(f, "/v/");
                g || (g = tE(f, "/a/"));
                if (!g)
                    throw Error("Can not extract standalone amp url.");
                var h = tE("/" + g, "/s/")
                  , k = iy(e.g);
                k.remove("amp_js_v");
                k.remove("amp_lite");
                var n = h ? ty("https://" + h) : ty("http://" + g);
                hy(n, k);
                d = n.toString()
            } catch (m) {
                d = null
            }
        return d ? d : b && b.url ? b.url : c && c.url ? c.url : ""
    }
    function vE() {
        var a = Gi();
        a = u(a);
        for (var b = a.next(); !b.done; b = a.next())
            if (b = b.value,
            b.url && b.url.includes("amp=1"))
                return !0;
        return null != window.context ? (a = Number(window.context.ampcontextVersion),
        isNaN(a) ? !1 : 0 < Math.floor(a)) : null != Ji().l
    }
    function wE() {
        var a = G().location.ancestorOrigins;
        return a ? 0 < a.length ? [].concat(ia(a)).join(",") : "" : ""
    }
    ;function xE() {
        var a = G()
          , b = document;
        return new T(a.parent === a ? a.location.href : b.referrer)
    }
    function yE(a, b) {
        sy(a, "url", "");
        try {
            var c = 2083 - a.toString().length - 1;
            if (0 >= c)
                return a.toString();
            for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; 0 < f && e.length > c; )
                d = b.slice(0, f--),
                e = encodeURIComponent(d);
            sy(a, "url", d)
        } catch (g) {}
        return a.toString()
    }
    ;var W = {}
      , zE = (W.creativeView = "creativeview",
    W.start = "start",
    W.midpoint = "midpoint",
    W.firstQuartile = "firstquartile",
    W.thirdQuartile = "thirdquartile",
    W.complete = "complete",
    W.mute = "mute",
    W.unmute = "unmute",
    W.pause = "pause",
    W.rewind = "rewind",
    W.resume = "resume",
    W.fullscreen = "fullscreen",
    W.exitFullscreen = "exitfullscreen",
    W.expand = "expand",
    W.collapse = "collapse",
    W.close = "close",
    W.acceptInvitation = "acceptinvitation",
    W.adCanPlay = "adCanPlay",
    W.adStarted = "adStarted",
    W.abandon = "abandon",
    W.acceptInvitationLinear = "acceptinvitationlinear",
    W.engagedView = "engagedview",
    W.instreamAdComplete = "instreamAdComplete",
    W.skipShown = "skipshown",
    W.skippableStateChanged = "skippableStateChanged",
    W.skip = "skip",
    W.progress = "progress",
    W.publisher_invoked_skip = "PUBLISHER_INVOKED_SKIP",
    W.annotation_start = "annotation_start",
    W.annotation_click = "annotation_click",
    W.annotation_close = "annotation_close",
    W.cta_annotation_shown = "cta_annotation_shown",
    W.cta_annotation_clicked = "cta_annotation_clicked",
    W.cta_annotation_closed = "cta_annotation_closed",
    W.replay = "replay",
    W.stop = "stop",
    W.autoplayDisallowed = "autoplayDisallowed",
    W.error = "error",
    W.mediaLoadTimeout = "mediaLoadTimeout",
    W.linearChanged = "linearChanged",
    W.click = "click",
    W.contentPauseRequested = "contentPauseRequested",
    W.contentResumeRequested = "contentResumeRequested",
    W.discardAdBreak = "discardAdBreak",
    W.updateAdsRenderingSettings = "updateAdsRenderingSettings",
    W.durationChange = "durationChange",
    W.expandedChanged = "expandedChanged",
    W.autoClose = "autoClose",
    W.userClose = "userClose",
    W.userRecall = "userRecall",
    W.prefetched = "prefetched",
    W.loaded = "loaded",
    W.init = "init",
    W.allAdsCompleted = "allAdsCompleted",
    W.adMetadata = "adMetadata",
    W.adBreakReady = "adBreakReady",
    W.adBreakFetchError = "adBreakFetchError",
    W.log = "log",
    W.volumeChange = "volumeChange",
    W.companionBackfill = "companionBackfill",
    W.companionInitialized = "companionInitialized",
    W.companionImpression = "companionImpression",
    W.companionClick = "companionClick",
    W.impression = "impression",
    W.interaction = "interaction",
    W.adProgress = "adProgress",
    W.adBuffering = "adBuffering",
    W.trackingUrlPinged = "trackingUrlPinged",
    W.measurable_impression = "measurable_impression",
    W.custom_metric_viewable = "custom_metric_viewable",
    W.viewable_impression = "viewable_impression",
    W.fully_viewable_audible_half_duration_impression = "fully_viewable_audible_half_duration_impression",
    W.audio_audible = "audio_audible",
    W.audio_measurable = "audio_measurable",
    W.overlay_resize = "overlay_resize",
    W.overlay_unmeasurable_impression = "overlay_unmeasurable_impression",
    W.overlay_unviewable_impression = "overlay_unviewable_impression",
    W.overlay_viewable_immediate_impression = "overlay_viewable_immediate_impression",
    W.overlay_viewable_end_of_session_impression = "overlay_viewable_end_of_session_impression",
    W.externalActivityEvent = "externalActivityEvent",
    W.adEvent = "adEvent",
    W.configure = "configure",
    W.remainingTime = "remainingTime",
    W.destroy = "destroy",
    W.resize = "resize",
    W.volume = "volume",
    W.authorIconClicked = "videoAuthorIconClicked",
    W.authorNameClicked = "videoAuthorClicked",
    W.videoClicked = "videoClicked",
    W.videoIconClicked = "videoIconClicked",
    W.learnMoreClicked = "videoLearnMoreClicked",
    W.muteClicked = "videoMuteClicked",
    W.titleClicked = "videoTitleClicked",
    W.videoSkipClicked = "SKIPPED",
    W.unmuteClicked = "videoUnmuteClicked",
    W.vpaidEvent = "vpaidEvent",
    W.show_ad = "show_ad",
    W.video_card_endcap_collapse = "video_card_endcap_collapse",
    W.video_card_endcap_dismiss = "video_card_endcap_dismiss",
    W.video_card_endcap_impression = "video_card_endcap_impression",
    W.mediaUrlPinged = "mediaUrlPinged",
    W.breakStart = "breakstart",
    W.breakEnd = "breakend",
    W.omidReady = "omidReady",
    W.omidUnavailable = "omidUnavailable",
    W.omidAdSessionCompleted = "omidAdSessionCompleted",
    W.omidAdSessionAbandoned = "omidAdSessionAbandoned",
    W.verificationNotExecuted = "verificationNotExecuted",
    W.loadStart = "loadStart",
    W.seeked = "seeked",
    W.seeking = "seeking",
    W);
    var AE = new function() {
        this.g = new Map;
        this.l = 0;
        this.j = null != window.fetch
    }
    ;
    function BE(a) {
        var b = void 0 === b ? AE : b;
        var c = void 0 === c ? null : c;
        a = new qz(a,c ? c : c);
        var d = void 0 === d ? !1 : d;
        var e = void 0 === e ? !1 : e;
        null != a.g || e ? Zz(b, a.url, d, e, a.g) : Zz(b, a.url, d)
    }
    ;var X = function() {
        this.l = .01 > Math.random();
        this.j = Math.floor(4503599627370496 * Math.random());
        this.g = null
    };
    X.prototype.report = function(a, b, c) {
        b = void 0 === b ? {} : b;
        if (null == y.G_testRunner && (this.l || (void 0 === c ? 0 : c))) {
            b.lid = a;
            nE() && (b.sdkv = nE());
            this.g && (b.palv = this.g);
            a = Yl().sort().join(",");
            nb(Mh(a)) || (b.e = a);
            b = CE(this, b);
            var d = new T("http://pagead2.googlesyndication.com/pagead/gen_204");
            Ug(b, function(e, f) {
                null != e && sy(d, f, null == e ? "" : "boolean" === typeof e ? e ? "t" : "f" : "" + e)
            }, this);
            b = xE().A;
            "http" !== b && "https" !== b || fy(d, b);
            b = d.toString();
            a = d.g.get("url");
            null != a && Bb() && 2083 < b.length && (b = yE(d, a));
            BE(b)
        }
    }
    ;
    var CE = function(a, b) {
        b.id = "ima_html5";
        var c = xE();
        b.c = a.j;
        b.domain = c.j;
        return b
    };
    X.getInstance = function() {
        return I(X)
    }
    ;
    function DE(a) {
        var b = Date.now()
          , c = {};
        a = (c["x-afma-token-requester-type"] = a,
        c);
        c = "https://pubads.g.doubleclick.net/adsid/integrator.json?aos=" + encodeURIComponent(wE());
        return (new Rz).get({
            url: c,
            withCredentials: !0,
            timeout: new oz,
            headers: a
        }).then(function(d) {
            var e = Date.now();
            d = d.newToken || "";
            var f = {};
            X.getInstance().report(182, (f.t = e - b,
            f.aos = wE(),
            f));
            return new EE(d)
        }).catch(function(d) {
            var e = "not instanceof Error";
            d instanceof Error && (e = rz(Number(d.message)));
            d = Date.now();
            var f = {};
            X.getInstance().report(182, (f.except = e,
            f.t = d - b,
            f));
            return Promise.resolve(FE)
        })
    }
    var GE = function() {
        S.call(this);
        this.g = null;
        this.o = new tz(this);
        R(this, this.o);
        this.j = new rv(72E5);
        this.l = Promise.resolve(FE)
    };
    w(GE, S);
    var HE = function(a) {
        var b = "requester_type_8";
        b = void 0 === b ? "requester_type_9" : b;
        var c = function(d) {
            a.g = d;
            return a.g
        };
        a.l = DE(b).then(c);
        a.j = new rv(72E5);
        a.o.listen(a.j, "tick", function() {
            a.l = DE(b).then(c)
        });
        a.j.start();
        iq(a, function() {
            a.j.stop()
        })
    };
    GE.prototype.getId = function() {
        var a = this;
        return Ja(function(b) {
            if (1 == b.g)
                return null != a.g && a.g !== FE ? (b.g = 2,
                b = void 0) : b = ya(b, a.l, 3),
                b;
            2 != b.g && (a.g = b.j);
            return b.return(a.g)
        })
    }
    ;
    var EE = function(a) {
        this.id = a
    }
      , FE = new EE("");
    var IE = function(a, b, c, d, e) {
        this.name = a;
        this.type = b;
        this.data = c;
        this.id = d;
        this.g = e
    }
      , JE = function(a) {
        S.call(this);
        this.o = [];
        this.j = !1;
        this.l = a || "goog_" + Nh++
    };
    w(JE, S);
    JE.prototype.connect = function() {
        for (this.j = !0; 0 !== this.o.length; ) {
            var a = this.o.shift();
            a && this.sendMessage(a)
        }
    }
    ;
    var KE = function(a, b, c, d, e, f) {
        a.j ? a.sendMessage(new IE(b,c,d,e,f)) : a.o.push(new IE(b,c,d,e,f))
    };
    JE.prototype.sendMessage = function() {}
    ;
    var LE = function(a, b, c, d, e, f) {
        e = void 0 === e ? "" : e;
        f = void 0 === f ? "" : f;
        mu.call(this, a);
        this.messageType = b;
        this.na = c;
        this.sc = d;
        this.origin = e;
        this.id = f
    };
    w(LE, mu);
    LE.prototype.getId = function() {
        return this.id
    }
    ;
    LE.prototype.toString = function() {
        return ""
    }
    ;
    var ME = {
        IMAGE: "Image",
        FLASH: "Flash",
        ALL: "All"
    }
      , NE = {
        HTML: "Html",
        IFRAME: "IFrame",
        STATIC: "Static",
        ALL: "All"
    }
      , OE = {
        IGNORE: "IgnoreSize",
        SELECT_EXACT_MATCH: "SelectExactMatch",
        SELECT_NEAR_MATCH: "SelectNearMatch",
        SELECT_FLUID: "SelectFluid"
    }
      , PE = function() {
        this.allowCustom = !0;
        this.creativeType = this.resourceType = "All";
        this.sizeCriteria = "SelectExactMatch";
        this.nearMatchPercent = 90;
        this.adSlotIds = []
    };
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.CreativeType", ME);
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.ResourceType", NE);
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.SizeCriteria", OE);
    var RE = function(a, b) {
        b = void 0 === b ? new PE : b;
        this.g = a;
        this.settings = b ? b : new PE;
        this.resourceType = QE(NE, this.settings.resourceType) ? this.settings.resourceType : "All";
        this.creativeType = QE(ME, this.settings.creativeType) ? this.settings.creativeType : "All";
        this.sizeCriteria = QE(OE, this.settings.sizeCriteria) ? this.settings.sizeCriteria : "SelectExactMatch";
        this.adSlotIds = null != this.settings.adSlotIds ? this.settings.adSlotIds : [];
        this.nearMatchPercent = "number" === typeof this.settings.nearMatchPercent && 0 < this.settings.nearMatchPercent && 100 >= this.settings.nearMatchPercent ? this.settings.nearMatchPercent : 90
    }
      , UE = function(a, b) {
        var c = [];
        b.forEach(function(d) {
            a.settings.allowCustom && (!nb(d.getContent()) && (isNaN(d.data.sequenceNumber) || isNaN(d.data.mainAdSequenceNumber) || d.data.mainAdSequenceNumber === d.data.sequenceNumber) && SE(a, d) ? c.push(d) : (d = TE(a, d),
            null != d && !nb(d.getContent()) && c.push(d)))
        });
        return c
    };
    RE.prototype.Ee = function() {
        return this.resourceType
    }
    ;
    var SE = function(a, b) {
        var c;
        if (c = "Flash" !== b.getContentType()) {
            if (c = "All" === a.resourceType || a.resourceType === b.Ee())
                c = b.getContentType(),
                c = null == c ? !0 : "All" === a.creativeType || a.creativeType === c;
            c && (c = b.getAdSlotId(),
            c = 0 === a.adSlotIds.length ? !0 : null != c ? a.adSlotIds.includes(c) : !1)
        }
        if (c)
            if (c = b.getSize(),
            (b = !!b.data.fluidSize) || a.g.Ce)
                a = b && a.g.Ce;
            else if ("IgnoreSize" === a.sizeCriteria || Eh(a.g.size, c))
                a = !0;
            else {
                if (b = "SelectNearMatch" === a.sizeCriteria)
                    b = c.width,
                    c = c.height,
                    b = b > a.g.size.width || c > a.g.size.height || b < a.nearMatchPercent / 100 * a.g.size.width || c < a.nearMatchPercent / 100 * a.g.size.height ? !1 : !0;
                a = b
            }
        else
            a = !1;
        return a
    }
      , TE = function(a, b) {
        b = VE(b);
        return null == b ? null : b.find(function(c) {
            return SE(a, c)
        }) || null
    }
      , QE = function(a, b) {
        return null != b && bh(a, b)
    };
    var WE = function(a, b) {
        this.message = a;
        this.errorCode = b
    };
    WE.prototype.getErrorCode = function() {
        return this.errorCode
    }
    ;
    WE.prototype.getMessage = function() {
        return this.message
    }
    ;
    var XE = new WE("Failed to initialize ad playback element before starting ad playback.",400)
      , YE = new WE("The provided {0} information: {1} is invalid.",1101);
    function ZE(a, b) {
        var c = void 0 === b ? null : b;
        var d = Ka.apply(2, arguments);
        if (!(c instanceof xD)) {
            var e = a.getErrorCode()
              , f = a.getMessage();
            if (0 < d.length)
                for (var g = 0; g < d.length; g++)
                    f = f.replace(new RegExp("\\{" + g + "\\}","ig"), d[g]);
            d = new xD("adPlayError",f,e);
            d.g = c;
            c = d
        }
        return c
    }
    ;var $E = {
        hf: !1
    };
    var aF = function() {};
    aF.getInstance = function() {
        throw Error("Must be overridden");
    }
    ;
    var bF = function() {
        this.g = 0
    };
    w(bF, aF);
    bF.wb = void 0;
    bF.getInstance = function() {
        return bF.wb ? bF.wb : bF.wb = new bF
    }
    ;
    function cF(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = bF.getInstance();
        0 === e.g && (e.g = .001 > Math.random() ? 2 : 1);
        2 === e.g && (e = {},
        lj(Object.assign({}, (e.c = String(a),
        e.pc = String(Ci()),
        e.em = c,
        e.lid = b,
        e.eids = I(Rl).g().join(),
        e), d), "esp"))
    }
    ;function dF() {
        var a = window;
        var b = void 0 === b ? function() {}
        : b;
        return new Promise(function(c) {
            var d = function() {
                c(b());
                Tg(a, "load", d)
            };
            Sg(a, "load", d)
        }
        )
    }
    ;var eF = function() {
        this.cache = {}
    }
      , gF = function() {
        fF || (fF = new eF);
        return fF
    }
      , hF = function(a) {
        if (void 0 !== a)
            for (var b = u(Object.keys(a)), c = b.next(); !c.done; c = b.next())
                if (c = c.value,
                c.startsWith("_GESPSK"))
                    try {
                        a.removeItem(c)
                    } catch (d) {}
        fF = new eF
    }
      , iF = function(a) {
        var b = If(a, 3);
        if (!b)
            return 3;
        if (void 0 === Kf(a, 2))
            return 4;
        a = Date.now();
        return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
    };
    eF.prototype.get = function(a, b) {
        if (this.cache[a])
            return {
                Mb: this.cache[a],
                success: !0
            };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            cF(6, a, null == (d = g) ? void 0 : d.message);
            return {
                Mb: null,
                success: !1
            }
        }
        if (!c)
            return {
                Mb: null,
                success: !0
            };
        try {
            var e = xw(c);
            this.cache[a] = e;
            return {
                Mb: e,
                success: !0
            }
        } catch (g) {
            var f;
            cF(5, a, null == (f = g) ? void 0 : f.message);
            return {
                Mb: null,
                success: !1
            }
        }
    }
    ;
    eF.prototype.set = function(a, b) {
        var c = Kf(a, 1)
          , d = "_GESPSK-" + c;
        ww(a);
        try {
            b.setItem(d, ag(a))
        } catch (f) {
            var e;
            cF(7, c, null == (e = f) ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    }
    ;
    eF.prototype.remove = function(a, b) {
        a = Kf(a, 1);
        try {
            b.removeItem("_GESPSK-" + a),
            delete this.cache[a]
        } catch (d) {
            var c;
            cF(8, a, null == (c = d) ? void 0 : c.message)
        }
    }
    ;
    var fF = null;
    function jF(a) {
        var b = new Aw;
        if (a) {
            var c = []
              , d = RegExp("^_GESPSK-(.+)$");
            try {
                for (var e = 0; e < a.length; e++) {
                    var f = (d.exec(a.key(e)) || [])[1];
                    f && c.push(f)
                }
            } catch (k) {}
            c = u(c);
            e = c.next();
            for (d = {}; !e.done; d = {
                Zb: void 0
            },
            e = c.next())
                if (d.Zb = e.value,
                (e = gF().get(d.Zb, a).Mb) && !kF(b, d.Zb) && (f = iF(e),
                2 !== f && 3 !== f)) {
                    Uf(e, 9, !1);
                    if ((f = Kf(e, 2)) && 1024 < f.length) {
                        var g = {};
                        cF(55, d.Zb, null, (g.sl = String(f.length),
                        g));
                        f = e.ab(rw(108));
                        ff(f, 2)
                    }
                    Hf(b, 2, uw, e);
                    e = Kf(e, 2);
                    g = f = void 0;
                    var h = {};
                    cF(19, d.Zb, null, (h.hs = e ? "1" : "0",
                    h.sl = String(null != (g = null == (f = e) ? void 0 : f.length) ? g : -1),
                    h))
                }
        }
        if (!Cf(b, uw, 2).length)
            return null;
        a = {};
        cF(50, "", null, (a.ns = String(Cf(b, uw, 2).length),
        a));
        return Fc(b.g(), 3)
    }
    function kF(a, b) {
        return Cf(a, uw, 2).some(function(c) {
            return Kf(c, 1) === b && null != Kf(c, 2)
        })
    }
    ;var lF = function() {
        var a = this;
        this.promise = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        }
        )
    };
    var mF = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack"in a && (this.stack = a.stack);
        Object.setPrototypeOf(this, mF.prototype);
        this.name = "InputError"
    };
    w(mF, Error);
    var nF = function() {
        this.lb = !1
    }
      , oF = function() {
        nF.apply(this, arguments);
        this.dd = new lF
    };
    w(oF, nF);
    var pF = function(a, b) {
        a.lb || (a.lb = !0,
        a.cd = b,
        a.dd.resolve(b))
    };
    da.Object.defineProperties(oF.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.dd.promise
            }
        },
        Ve: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.lb
            }
        },
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Qd
            }
        }
    });
    var qF = function() {
        oF.apply(this, arguments)
    };
    w(qF, oF);
    var rF = function(a, b) {
        pF(a, b)
    }
      , sF = function(a, b) {
        b.then(function(c) {
            pF(a, c)
        })
    };
    qF.prototype.ab = function(a) {
        this.lb || (this.lb = !0,
        this.cd = null,
        this.Qd = a,
        this.dd.reject(a))
    }
    ;
    var tF = function(a) {
        this.lb = !1;
        this.g = a
    };
    w(tF, nF);
    tF.prototype.Ve = function() {
        return this.g.lb
    }
    ;
    da.Object.defineProperties(tF.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g.Qd
            }
        }
    });
    var uF = function(a) {
        tF.call(this, a);
        this.g = a
    };
    w(uF, tF);
    da.Object.defineProperties(uF.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g.cd
            }
        }
    });
    var vF = function(a) {
        tF.call(this, a);
        this.g = a
    };
    w(vF, tF);
    da.Object.defineProperties(vF.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.g.cd) ? a : null
            }
        }
    });
    var wF = function() {
        oF.apply(this, arguments)
    };
    w(wF, oF);
    wF.prototype.notify = function() {
        pF(this, null)
    }
    ;
    var xF = function() {
        P.apply(this, arguments);
        this.g = [];
        this.j = [];
        this.l = []
    };
    w(xF, P);
    var yF = function(a, b) {
        a.j.push({
            wc: !1,
            Bd: b
        })
    };
    xF.prototype.wc = function(a) {
        var b = this.j.find(function(c) {
            return c.Bd === a
        });
        b && (b.wc = !0)
    }
    ;
    xF.prototype.N = function() {
        this.g.length = 0;
        this.l.length = 0;
        this.j.length = 0;
        P.prototype.N.call(this)
    }
    ;
    function zF(a, b) {
        var c, d;
        return Ja(function(e) {
            if (1 == e.g)
                return c = b ? a.filter(function(f) {
                    return !f.wc
                }) : a,
                ya(e, Promise.all(c.map(function(f) {
                    return f.Bd.promise
                })), 2);
            if (a.length === c.length)
                return e.return();
            d = a.filter(function(f) {
                return f.wc
            });
            return ya(e, Promise.race([Promise.all(d.map(function(f) {
                return f.Bd.promise
            })), new Promise(function(f) {
                return void setTimeout(f, b)
            }
            )]), 0)
        })
    }
    var AF = function(a, b, c) {
        P.call(this);
        this.id = a;
        this.timeoutMs = b;
        this.A = c;
        this.B = !1;
        this.g = new xF;
        R(this, this.g)
    };
    w(AF, P);
    AF.prototype.start = function() {
        var a = this, b;
        return Ja(function(c) {
            if (1 == c.g) {
                if (a.B)
                    return c.return();
                a.B = !0;
                c.l = 2;
                return ya(c, zF(a.g.j, a.timeoutMs), 4)
            }
            if (2 != c.g) {
                if (!a.Ca()) {
                    for (var d = 0, e = u(a.g.l), f = e.next(); !f.done; f = e.next()) {
                        if (null == f.value.g.cd)
                            throw Error("missing input: " + a.id + "/" + d);
                        ++d
                    }
                    a.j()
                }
                return za(c)
            }
            b = Aa(c);
            if (a.Ca())
                return c.return();
            if (!(b instanceof mF) && b instanceof Error && (a.A ? a.A(a.id, b) : a.C(a.id, b),
            !a.A && a.g.g.length))
                for (d = new mF(b.message),
                e = u(a.g.g),
                f = e.next(); !f.done; f = e.next())
                    if (f = f.value,
                    !f.Ve) {
                        var g = d;
                        f.lb = !0;
                        f.Qd = g;
                        f.dd.reject(g)
                    }
            c.g = 0
        })
    }
    ;
    var BF = function(a) {
        var b = void 0 === b ? new qF : b;
        a.g.g.push(b);
        return b
    }
      , CF = function(a) {
        var b = void 0 === b ? new wF : b;
        a.g.g.push(b);
        return b
    }
      , DF = function(a, b) {
        yF(a.g, b);
        b = new uF(b);
        a.g.l.push(b);
        return b
    }
      , EF = function(a, b) {
        yF(a.g, b);
        return new vF(b)
    };
    var FF = function() {
        P.call(this);
        this.A = [];
        this.B = [];
        this.o = {};
        this.g = [];
        this.j = new lF;
        this.l = {}
    };
    w(FF, P);
    var GF = function(a, b) {
        R(a, b);
        a.A.push(b)
    }
      , HF = function(a, b) {
        b = u(b);
        for (var c = b.next(); !c.done; c = b.next())
            GF(a, c.value)
    }
      , IF = function(a) {
        var b, c, d, e, f, g, h, k, n, m, p, q;
        Ja(function(t) {
            switch (t.g) {
            case 1:
                if (!a.g.length) {
                    t.g = 2;
                    break
                }
                return ya(t, Promise.all(a.g.map(function(v) {
                    return v.j.promise
                })), 2);
            case 2:
                b = u(a.A);
                for (c = b.next(); !c.done; c = b.next())
                    d = c.value,
                    d.start();
                e = u(a.B);
                for (f = e.next(); !f.done; f = e.next())
                    g = f.value,
                    IF(g);
                if (!a.l) {
                    t.g = 4;
                    break
                }
                h = Object.keys(a.l);
                if (!h.length) {
                    t.g = 4;
                    break
                }
                return ya(t, Promise.all(Object.values(a.l).map(function(v) {
                    return v.promise
                })), 6);
            case 6:
                for (k = t.j,
                n = 0,
                m = u(h),
                p = m.next(); !p.done; p = m.next())
                    q = p.value,
                    a.o[q] = k[n++];
            case 4:
                return a.j.resolve(a.o),
                t.return(a.j.promise)
            }
        })
    };
    FF.prototype.N = function() {
        P.prototype.N.call(this);
        this.A.length = 0;
        this.B.length = 0;
        this.g.length = 0
    }
    ;
    var JF = function(a, b) {
        AF.call(this, a);
        this.id = a;
        this.C = b
    };
    w(JF, AF);
    var KF = function(a, b, c, d) {
        JF.call(this, 1041, d);
        this.storage = b;
        this.o = DF(this, a);
        c && (this.l = EF(this, c))
    };
    w(KF, JF);
    KF.prototype.j = function() {
        var a = this.o.value, b, c, d = null != (c = this.storage) ? c : null == (b = this.l) ? void 0 : b.value;
        d && gF().set(a, d) && null != Kf(a, 2) && cF(27, Kf(a, 1))
    }
    ;
    var LF = function(a, b) {
        JF.call(this, 1094, b);
        this.l = CF(this);
        this.o = DF(this, a)
    };
    w(LF, JF);
    LF.prototype.j = function() {
        var a = this.o.value;
        a && (hF(a),
        this.l.notify())
    }
    ;
    var MF = function(a, b) {
        JF.call(this, 1048, b);
        this.l = BF(this);
        this.o = BF(this);
        this.D = DF(this, a)
    };
    w(MF, JF);
    MF.prototype.j = function() {
        var a = this.D.value
          , b = function(c) {
            var d = {};
            cF(c, Kf(a, 1), null, (d.tic = String(Math.round((Date.now() - If(a, 3)) / 6E4)),
            d))
        };
        switch (iF(a)) {
        case 0:
            b(24);
            break;
        case 1:
            b(25);
            pF(this.o, a);
            break;
        case 2:
            b(26);
            pF(this.l, a);
            break;
        case 3:
            cF(9, Kf(a, 1));
            pF(this.l, a);
            break;
        case 4:
            b(23),
            pF(this.l, a)
        }
    }
    ;
    var NF = function(a, b, c) {
        JF.call(this, 1027, c);
        this.Bc = a;
        this.storage = b;
        this.l = BF(this);
        this.o = BF(this)
    };
    w(NF, JF);
    NF.prototype.j = function() {
        var a = gF().get(this.Bc, this.storage).Mb;
        if (!a) {
            a = ww(vw(this.Bc));
            var b = this.o
              , c = a.ab(rw(100));
            pF(b, c)
        }
        pF(this.l, a)
    }
    ;
    var OF = function(a, b, c) {
        JF.call(this, 1046, c);
        this.output = CF(this);
        this.l = BF(this);
        this.o = DF(this, b);
        yF(this.g, a)
    };
    w(OF, JF);
    OF.prototype.j = function() {
        pF(this.l, this.o.value)
    }
    ;
    var PF = function(a, b, c) {
        JF.call(this, 1047, c);
        this.collectorFunction = a;
        this.l = BF(this);
        this.o = BF(this);
        this.D = BF(this);
        this.F = DF(this, b)
    };
    w(PF, JF);
    PF.prototype.j = function() {
        var a = this
          , b = this.F.value
          , c = Kf(b, 1);
        cF(18, c);
        try {
            var d = Mi();
            this.collectorFunction().then(function(e) {
                cF(29, c, null, {
                    delta: String(Mi() - d)
                });
                var f = a.l
                  , g = Yf(b, 2, e);
                pF(f, g);
                pF(a.D, null != e ? e : null)
            }).catch(function(e) {
                cF(28, c, QF(e));
                e = a.o;
                var f = b.ab(rw(106));
                pF(e, f)
            })
        } catch (e) {
            cF(1, c, QF(e)),
            rF(this.o, b.ab(rw(107)))
        }
    }
    ;
    function QF(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    }
    ;var RF = function(a, b) {
        JF.call(this, 1028, b);
        this.l = BF(this);
        this.o = DF(this, a)
    };
    w(RF, JF);
    RF.prototype.j = function() {
        var a = this.o.value
          , b = Kf(a, 1);
        null != If(a, 3) || cF(35, b);
        pF(this.l, a)
    }
    ;
    var SF = function(a, b, c, d, e) {
        JF.call(this, 1050, e);
        this.F = c;
        this.D = d;
        this.l = BF(this);
        this.o = DF(this, a);
        this.I = EF(this, b)
    };
    w(SF, JF);
    SF.prototype.j = function() {
        var a = this.o.value
          , b = Kf(a, 1)
          , c = this.I.value;
        if (null == c)
            cF(41, b),
            a.ab(rw(111)),
            pF(this.l, a);
        else if ("string" !== typeof c)
            cF(21, b),
            b = this.l,
            a = a.ab(rw(113)),
            pF(b, a);
        else {
            if (c.length > (/^(\d+)$/.test(b) ? this.D : this.F)) {
                var d = {};
                cF(12, b, null, (d.sl = String(c.length),
                d));
                b = a.ab(rw(108));
                ff(b, 2)
            } else
                c.length || cF(20, b),
                ff(a, 10);
            pF(this.l, a)
        }
    }
    ;
    var TF = function(a) {
        JF.call(this, 1046, a);
        this.output = CF(this)
    };
    w(TF, JF);
    TF.prototype.j = function() {
        var a = this;
        dF().then(function() {
            a.output.notify()
        })
    }
    ;
    function UF(a, b, c, d, e, f) {
        f = void 0 === f ? $E : f;
        var g, h, k, n, m, p, q, t, v, x, A, ha, Q;
        return Ja(function(la) {
            return 1 == la.g ? (g = new FF,
            h = new NF(a,c,e),
            GF(g, h),
            GF(g, new KF(h.o,void 0,d,e)),
            k = new RF(h.l,e),
            GF(g, k),
            n = new MF(k.l,e),
            GF(g, n),
            m = new PF(b,n.l,e),
            GF(g, m),
            GF(g, new KF(m.o,void 0,d,e)),
            p = new SF(m.l,m.D,f.hf ? 1024 : 300,f.hf ? 1024 : 1E3,e),
            GF(g, p),
            GF(g, new KF(p.l,void 0,d,e)),
            q = new TF(e),
            GF(g, q),
            t = new OF(q.output,n.o,e),
            GF(g, t),
            v = new PF(b,t.l,e),
            GF(g, v),
            x = new KF(v.l,void 0,d,e),
            GF(g, x),
            IF(g),
            Q = a,
            ya(la, p.l.promise, 2)) : la.return({
                id: Q,
                collectorGeneratedData: null != (ha = null == (A = la.j) ? void 0 : Kf(A, 2)) ? ha : null
            })
        })
    }
    ;var VF = function(a, b, c, d, e) {
        e = void 0 === e ? $E : e;
        JF.call(this, 1059, d);
        this.I = b;
        this.F = c;
        this.o = e;
        this.l = BF(this);
        this.K = DF(this, a);
        this.D = EF(this, c)
    };
    w(VF, JF);
    VF.prototype.j = function() {
        var a = this.D.value;
        if (a) {
            var b = this.K.value, c = b.id, d = b.collectorFunction, e;
            b = null != (e = b.networkCode) ? e : c;
            c = {};
            cF(42, b, null, (c.ea = String(Number(this.I)),
            c));
            sF(this.l, UF(b, d, a, this.F, this.C, this.o))
        }
    }
    ;
    var WF = function(a, b) {
        JF.call(this, 1057, b);
        this.l = a;
        this.o = BF(this);
        this.D = BF(this)
    };
    w(WF, JF);
    WF.prototype.j = function() {
        if (this.l)
            if ("object" !== typeof this.l)
                cF(46, "UNKNOWN_COLLECTOR_ID"),
                XF(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.l.id
                  , b = this.l.networkCode;
                a && b && (delete this.l.id,
                cF(47, a + ";" + b));
                a = null != b ? b : a;
                "string" !== typeof a ? (b = {},
                cF(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a),
                b)),
                XF(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.l.collectorFunction ? (cF(14, a),
                XF(this, a, 105)) : I(on).g(xx.g, xx.defaultValue).includes(a) ? (cF(22, a),
                XF(this, a, 104)) : pF(this.D, this.l)
            }
        else
            cF(39, "UNKNOWN_COLLECTOR_ID"),
            XF(this, "UNKNOWN_COLLECTOR_ID", 110)
    }
    ;
    var XF = function(a, b, c) {
        a = a.o;
        b = vw(b).ab(rw(c));
        pF(a, b)
    };
    var YF = function(a, b, c, d, e) {
        var f = document;
        f = void 0 === f ? document : f;
        e = void 0 === e ? $E : e;
        this.g = b;
        this.l = c;
        this.A = f;
        this.L = d;
        this.J = e;
        this.C = [];
        this.B = [];
        this.o = [];
        this.j = 0;
        a = u(a);
        for (b = a.next(); !b.done; b = a.next())
            this.push(b.value)
    };
    YF.prototype.push = function(a) {
        var b = this;
        this.l || this.L();
        var c = function(f, g) {
            return void ZF(b, f, g)
        };
        a = new WF(a,c);
        var d = new KF(a.o,void 0,this.g,c);
        c = new VF(a.D,this.l,this.g,c,this.J);
        var e = new FF;
        HF(e, [a, d, c]);
        IF(e);
        a = c.l.promise;
        this.C.push(a);
        d = u(this.B);
        for (c = d.next(); !c.done; c = d.next())
            a.then(c.value)
    }
    ;
    YF.prototype.addOnSignalResolveCallback = function(a) {
        this.B.push(a);
        for (var b = u(this.C), c = b.next(); !c.done; c = b.next())
            c.value.then(a)
    }
    ;
    YF.prototype.addErrorHandler = function(a) {
        this.o.push(a)
    }
    ;
    YF.prototype.clearAllCache = function() {
        var a = this
          , b = this.A.currentScript instanceof HTMLScriptElement ? this.A.currentScript.src : "";
        if (1 === this.j) {
            var c = {};
            cF(49, "", null, (c.url = b,
            c))
        } else if (c = String(wi(null != b ? b : "")),
        I(on).g(wx.g, wx.defaultValue).includes(c))
            c = {},
            cF(48, "", null, (c.url = b,
            c));
        else {
            var d = new FF;
            c = new LF(this.g,function(e, f) {
                return void ZF(a, e, f)
            }
            );
            GF(d, c);
            IF(d);
            this.j = 1;
            setTimeout(function() {
                a.j = 0
            }, 1E3 * rn());
            d = {};
            cF(43, "", null, (d.url = b,
            d));
            return c.l.promise
        }
    }
    ;
    var ZF = function(a, b, c) {
        a = u(a.o);
        for (var d = a.next(); !d.done; d = a.next())
            d = d.value,
            d(b, c)
    }
      , $F = function(a) {
        this.push = function(b) {
            a.push(b)
        }
        ;
        this.addOnSignalResolveCallback = function(b) {
            a.addOnSignalResolveCallback(b)
        }
        ;
        this.addErrorHandler = function(b) {
            a.addErrorHandler(b)
        }
        ;
        this.clearAllCache = function() {
            a.clearAllCache()
        }
    };
    function aG(a, b, c, d, e, f) {
        f = void 0 === f ? $E : f;
        si() !== ti() ? cF(16, "") : bG(a, "encryptedSignalProviders", c, e) && bG(a, "secureSignalProviders", c, e) || (cF(38, ""),
        cG(a, "encryptedSignalProviders", b, f, c, d, e),
        cG(a, "secureSignalProviders", b, f, c, function() {}, e))
    }
    function bG(a, b, c, d) {
        if (void 0 === a[b] || a[b]instanceof Array)
            return !1;
        a = a[b];
        d && a.addOnSignalResolveCallback(d);
        a.addErrorHandler(c);
        return !0
    }
    function cG(a, b, c, d, e, f, g) {
        var h, k = new YF(null != (h = a[b]) ? h : [],c,"secureSignalProviders" === b,f,d);
        a[b] = new $F(k);
        g && k.addOnSignalResolveCallback(g);
        k.addErrorHandler(e)
    }
    function dG(a, b, c, d, e) {
        var f = void 0 === f ? $E : f;
        var g = new qF;
        pF(g, b);
        aG(a, g, c, d, e, f)
    }
    function eG(a, b, c, d) {
        var e = fG
          , f = new Map;
        b = b.map(function(g) {
            var h = g.Bc;
            return new Promise(function(k) {
                f.set(h, k)
            }
            )
        });
        dG(a, c, d, e, function(g) {
            var h = g.collectorGeneratedData;
            g = g.id;
            var k;
            return void (null == (k = f.get(g)) ? void 0 : k({
                collectorGeneratedData: h,
                id: g
            }))
        });
        return b
    }
    ;function gG() {
        var a;
        return null != (a = y.googletag) ? a : y.googletag = {
            cmd: []
        }
    }
    ;function hG(a) {
        if (!a || TD(a))
            return null;
        try {
            return window.localStorage
        } catch (b) {
            return null
        }
    }
    function iG(a, b) {
        (a = hG(a)) && dG(gG(), a, function() {}, fG, b)
    }
    function jG(a, b) {
        return (b = hG(b)) && 0 !== a.length ? eG(gG(), a, b, function() {}) : null
    }
    function fG() {}
    ;function kG(a, b, c, d) {
        var e = new lF
          , f = ""
          , g = function(k) {
            try {
                var n = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                f === n.paw_id && (Tg(a, "message", g),
                n.error ? e.reject(Error(n.error)) : e.resolve(d(n)))
            } catch (m) {}
        }
          , h = lG(a);
        return h ? (Sg(a, "message", g),
        f = c(h),
        e.promise) : (c = mG(a)) ? (f = String(Math.floor(2147483647 * ui())),
        Sg(a, "message", g),
        b(c, f),
        e.promise) : null
    }
    function nG(a) {
        return kG(a, function(b, c) {
            var d, e;
            return void (null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    }
    function oG() {
        var a = window;
        return !!lG(a) || !!mG(a)
    }
    function lG(a) {
        var b;
        if ("function" === typeof (null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo))
            return a.gmaSdk
    }
    function mG(a) {
        var b, c, d, e, f, g;
        if ("function" === typeof (null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof (null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage))
            return a.webkit.messageHandlers
    }
    ;var pG = function() {
        this.timeoutMs = 500;
        this.j = nG;
        this.signal = null;
        this.g = 0
    }
      , qG = function(a) {
        if (Ul(wm) || !oG())
            return Promise.resolve(null);
        var b;
        return (null != (b = a.j(window)) ? b : Promise.resolve(null)).catch(function() {
            return "0"
        })
    }
      , sG = function(a) {
        var b;
        return Ja(function(c) {
            if (1 == c.g)
                return b = Date.now() - a.g,
                !a.signal || 3E5 < b ? c = ya(c, rG(a), 3) : (c.g = 2,
                c = void 0),
                c;
            2 != c.g && (a.signal = c.j,
            a.g = Date.now());
            return c.return(a.signal)
        })
    }
      , rG = function(a) {
        return Promise.race([qG(a).then(function(b) {
            if (null == b)
                return null;
            a.signal = 1E4 < b.length ? "0" : b;
            a.g = Date.now();
            return a.signal
        }), uv(a.timeoutMs, "0")])
    };
    function Pk(a, b) {
        return b instanceof RegExp ? "__REGEXP" + b.toString() : b
    }
    function tG(a, b) {
        return b && 0 === b.toString().indexOf("__REGEXP") ? (a = b.split("__REGEXP")[1].match(/\/(.*)\/(.*)?/),
        new RegExp(a[1],a[2] || "")) : b
    }
    var uG = function(a, b) {
        JE.call(this, b);
        this.B = a;
        this.g = null;
        this.C = new tz(this);
        this.C.listen(G(), "message", this.D)
    };
    w(uG, JE);
    var vG = function(a) {
        if (null == a || "string" !== typeof a || !a.startsWith("ima://"))
            return null;
        a = a.substr(6);
        try {
            return JSON.parse(a, tG)
        } catch (b) {
            return null
        }
    };
    uG.prototype.sendMessage = function(a) {
        if (null != this.g && null != this.g.postMessage) {
            var b = this.g
              , c = b.postMessage
              , d = {};
            d.name = a.name;
            d.type = a.type;
            null != a.data && (d.data = a.data);
            a.id && (d.id = a.id);
            a.g && (d.replyToMessageId = a.g);
            d.sid = this.l;
            d.channel = this.B;
            a = [];
            Rk(new Qk, d, a);
            c.call(b, "ima://" + a.join(""), "*")
        }
        null != this.g && null == this.g.postMessage && X.getInstance().report(11)
    }
    ;
    uG.prototype.N = function() {
        hq(this.C);
        this.g = null;
        JE.prototype.N.call(this)
    }
    ;
    uG.prototype.D = function(a) {
        a = a.g;
        var b = vG(a.data);
        if (wG(this, b)) {
            if (null === this.g)
                this.g = a.source,
                this.j || this.connect();
            else if (this.g !== a.source)
                return;
            wG(this, b) && this.dispatchEvent(new LE(b.name,b.type,b.data || {},b.sid,a.origin,b.id,b.replyToMessageId))
        }
    }
    ;
    var wG = function(a, b) {
        if (null == b)
            return !1;
        var c = b.channel;
        if (null == c || c !== a.B)
            return !1;
        b = b.sid;
        return null == b || "*" !== a.l && b !== a.l ? !1 : !0
    };
    var xG = function() {
        S.call(this);
        this.F = !1;
        this.g = null;
        this.B = this.D = this.M = !1;
        this.j = 0;
        this.o = [];
        this.C = !1;
        this.T = this.O = Infinity;
        this.l = 0;
        this.I = {};
        this.K = new tz(this);
        R(this, this.K)
    };
    w(xG, S);
    var zG = function(a, b) {
        null == b || a.F || (a.g = b,
        yG(a),
        a.F = !0)
    }
      , BG = function(a) {
        null != a.g && a.F && (AG(a),
        a.F = !1,
        a.D = !1,
        a.B = !1,
        a.j = 0,
        a.o = [],
        a.C = !1)
    }
      , yG = function(a) {
        AG(a);
        !(a.g instanceof S) && "ontouchstart"in document.documentElement && rc ? (a.I = {
            touchstart: function(b) {
                a.D = !0;
                a.j = b.touches.length;
                a.l && (window.clearTimeout(a.l),
                a.l = 0,
                a.M = !0);
                a.C = CG(a, b.touches) || 1 !== b.touches.length;
                a.C ? (a.O = Infinity,
                a.T = Infinity) : (a.O = b.touches[0].clientX,
                a.T = b.touches[0].clientY);
                b = b.touches;
                a.o = [];
                for (var c = 0; c < b.length; c++)
                    a.o.push(b[c].identifier)
            },
            touchmove: function(b) {
                a.j = b.touches.length;
                if (!dz(8) || Math.pow(b.changedTouches[0].clientX - a.O, 2) + Math.pow(b.changedTouches[0].clientY - a.T, 2) > Math.pow(5, 2))
                    a.B = !0
            },
            touchend: function(b) {
                return void DG(a, b)
            }
        },
        Ug(a.I, function(b, c) {
            a.g.addEventListener(c, b, !1)
        })) : a.K.listen(a.g, "click", a.U)
    }
      , AG = function(a) {
        a.K.rb(a.g, "click", a.U);
        Ug(a.I, function(b, c) {
            this.g.removeEventListener(c, b, !1)
        }, a);
        a.I = {}
    }
      , DG = function(a, b) {
        !a.D || 1 !== a.j || a.B || a.M || a.C || !CG(a, b.changedTouches) || (a.l = window.setTimeout(function() {
            return void EG(a)
        }, 300));
        a.j = b.touches.length;
        0 === a.j && (a.D = !1,
        a.B = !1,
        a.o = []);
        a.M = !1
    };
    xG.prototype.U = function() {
        EG(this)
    }
    ;
    var CG = function(a, b) {
        for (var c = 0; c < b.length; c++)
            if (a.o.includes(b[c].identifier))
                return !0;
        return !1
    }
      , EG = function(a) {
        a.l = 0;
        a.dispatchEvent(new mu("click"))
    };
    xG.prototype.N = function() {
        BG(this);
        S.prototype.N.call(this)
    }
    ;
    var FG = function() {
        this.A = function() {
            return new XMLHttpRequest
        }
        ;
        this.g = new lF;
        this.l = this.j = this.config = null
    };
    FG.prototype.getConfig = function() {
        var a = this;
        return Ja(function(b) {
            return 1 == b.g ? ya(b, a.g.promise, 2) : b.return(a.config)
        })
    }
    ;
    var JG = function() {
        var a = GG
          , b = HG
          , c = Date.now()
          , d = a.A();
        d.timeout = 6E4;
        d.open("GET", b, !0);
        d.onload = function() {
            a.l = Date.now() - c;
            if (200 > d.status || 300 <= d.status)
                IG(a, Error("status: " + d.status));
            else {
                var e = d.responseText
                  , f = null;
                try {
                    f = pw(e)
                } catch (g) {
                    IG(a, Error("per-pub config could not be deserialized"));
                    return
                }
                a.g.resolve();
                a.config = f
            }
        }
        ;
        d.onerror = function() {
            IG(a, Error("status: " + d.status))
        }
        ;
        d.send()
    }
      , IG = function(a, b) {
        a.j = b;
        a.g.resolve()
    }
      , KG = new FG;
    function LG(a, b, c) {
        var d, e, f;
        a = null != (f = null == (d = Af(a, nw, 2)) ? void 0 : null == (e = Cf(d, mw, 1)) ? void 0 : e.map(function(h) {
            return D(h, 1)
        })) ? f : [];
        var g = AD(b);
        d = a.some(function(h) {
            return h === g
        });
        b = zD(b);
        X.getInstance().report(190, {
            fm: d,
            rt: b,
            fl: c
        })
    }
    ;var MG = function(a, b) {
        P.call(this);
        var c = this;
        this.g = a;
        this.j = new Map;
        this.l = function(d) {
            var e = c.j.get(d.messageType);
            if (e) {
                var f = "goog_" + Nh++
                  , g = d.getId();
                e(d.na).then(function(h) {
                    KE(c.g, d.type, d.messageType, h, f, g)
                })
            }
        }
        ;
        this.g.listen(b, this.l);
        iq(this, function() {
            c.j.clear();
            c.g.rb(b, c.l)
        })
    };
    w(MG, P);
    var NG = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
    var OG = function(a, b) {
        P.call(this);
        this.g = a;
        this.timeoutMs = b;
        R(this, this.g)
    };
    w(OG, P);
    var QG = function(a) {
        if (!Hx(a.g.caller))
            return Promise.resolve(null);
        var b = new lF
          , c = null;
        a.g.addEventListener(function(e) {
            if (1 === e.pingData.internalErrorState)
                b.resolve(null);
            else if ("listenerRegistered" === e.eventName)
                c = e.listenerId,
                1 === e.pingData.applicableSections.length && -1 === e.pingData.applicableSections[0] && b.resolve(new PG("","-1"));
            else if ("signalStatus" === e.eventName && "ready" === e.data) {
                e = e.pingData;
                var f, g = (null != (f = e.applicableSections) ? f : []).join("_");
                b.resolve(new PG(e.gppString,g))
            }
        });
        var d = new Promise(function(e) {
            setTimeout(function() {
                e(null)
            }, a.timeoutMs)
        }
        );
        d = Promise.race([b.promise, d]);
        d.then(function() {
            null !== c && a.g.removeEventListener(c)
        });
        return d
    }
      , PG = function(a, b) {
        this.gppString = a;
        this.sid = b
    };
    var RG = fa(["https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js"])
      , SG = fa(["https://pagead2.googlesyndication.com/omsdk/releases/control/omweb-v1.js"])
      , TG = fa(["https://pagead2.googlesyndication.com/omsdk/releases/canary/omweb-v1.js"])
      , UG = fa(["https://pagead2.googlesyndication.com/omsdk/releases/experimental/omweb-v1.js"])
      , VG = Bh(RG)
      , WG = Bh(SG)
      , XG = Bh(TG)
      , YG = Bh(UG);
    function ZG(a) {
        return (a = gi(a)) && a.omidSessionInterface ? a.omidSessionInterface : null
    }
    function $G(a) {
        var b, c, d, e, f, g;
        return Ja(function(h) {
            if (1 == h.g)
                return b = ci("IFRAME", {
                    style: "display: none",
                    title: "Advertisement"
                }),
                c = new Promise(function(k) {
                    b.addEventListener("load", function() {
                        k()
                    })
                }
                ),
                a.appendChild(b),
                ya(h, c, 2);
            d = ci("SCRIPT");
            e = VG;
            Ul(sm) ? e = WG : Ul(tm) ? e = XG : Ul(um) && (e = YG);
            Gh(d, e);
            f = new Promise(function(k, n) {
                d.addEventListener("load", function() {
                    ZG(b) ? k(b) : n()
                })
            }
            );
            g = b.contentDocument || b.contentWindow.document;
            g.head.appendChild(d);
            return h.return(f)
        })
    }
    ;var aH = function(a, b) {
        S.call(this);
        this.j = b;
        this.g = ZG(a)
    };
    w(aH, S);
    var cH = function(a) {
        try {
            a.g && a.g.registerSessionObserver(function(b) {
                "sessionStart" === b.type ? bH(a, a.j) : "sessionFinish" === b.type && cH(a)
            })
        } catch (b) {
            a.dispatchEvent(new Event("error"))
        }
    }
      , bH = function(a, b) {
        b instanceof KC && (b = b.R);
        var c;
        if ("AUDIO" !== (null == (c = b.tagName) ? void 0 : c.toUpperCase()))
            try {
                a.g && a.g.setVideoElement(b)
            } catch (d) {
                a.dispatchEvent(new Event("error"))
            }
    };
    var dH = function(a) {
        this.data = a
    };
    l = dH.prototype;
    l.getTotalAds = function() {
        return this.data.totalAds
    }
    ;
    l.getMaxDuration = function() {
        return this.data.maxDuration
    }
    ;
    l.getAdPosition = function() {
        return this.data.adPosition
    }
    ;
    l.getPodIndex = function() {
        return this.data.podIndex
    }
    ;
    l.getTimeOffset = function() {
        return this.data.timeOffset
    }
    ;
    l.getIsBumper = function() {
        return this.data.isBumper
    }
    ;
    dH.prototype.getIsBumper = dH.prototype.getIsBumper;
    dH.prototype.getTimeOffset = dH.prototype.getTimeOffset;
    dH.prototype.getPodIndex = dH.prototype.getPodIndex;
    dH.prototype.getAdPosition = dH.prototype.getAdPosition;
    dH.prototype.getMaxDuration = dH.prototype.getMaxDuration;
    dH.prototype.getTotalAds = dH.prototype.getTotalAds;
    var eH = function(a) {
        this.data = a
    };
    l = eH.prototype;
    l.getContent = function() {
        return this.data.content
    }
    ;
    l.getContentType = function() {
        return this.data.contentType
    }
    ;
    l.getWidth = function() {
        return this.getSize().width
    }
    ;
    l.getHeight = function() {
        return this.getSize().height
    }
    ;
    l.getAdSlotId = function() {
        return this.data.adSlotId
    }
    ;
    l.getSize = function() {
        return this.data.size
    }
    ;
    l.Ee = function() {
        return this.data.resourceType
    }
    ;
    var VE = function(a) {
        return (a = a.data.backupCompanions) ? a.map(function(b) {
            return new eH(b)
        }) : []
    };
    eH.prototype.getAdSlotId = eH.prototype.getAdSlotId;
    eH.prototype.getHeight = eH.prototype.getHeight;
    eH.prototype.getWidth = eH.prototype.getWidth;
    eH.prototype.getContentType = eH.prototype.getContentType;
    eH.prototype.getContent = eH.prototype.getContent;
    var fH = function(a, b) {
        this.j = a;
        this.g = b
    };
    fH.prototype.getAdIdValue = function() {
        return this.j
    }
    ;
    fH.prototype.getAdIdRegistry = function() {
        return this.g
    }
    ;
    fH.prototype.getAdIdRegistry = fH.prototype.getAdIdRegistry;
    fH.prototype.getAdIdValue = fH.prototype.getAdIdValue;
    var Y = function(a) {
        this.data = a
    };
    Y.prototype.getAdId = function() {
        return this.data.adId
    }
    ;
    Y.prototype.getCreativeAdId = function() {
        return this.data.creativeAdId
    }
    ;
    Y.prototype.getCreativeId = function() {
        return this.data.creativeId
    }
    ;
    var gH = function(a) {
        return a.data.adQueryId
    };
    l = Y.prototype;
    l.getAdSystem = function() {
        return this.data.adSystem
    }
    ;
    l.getAdvertiserName = function() {
        return this.data.advertiserName
    }
    ;
    l.getApiFramework = function() {
        return this.data.apiFramework
    }
    ;
    l.getWrapperAdIds = function() {
        return this.data.adWrapperIds
    }
    ;
    l.getWrapperCreativeIds = function() {
        return this.data.adWrapperCreativeIds
    }
    ;
    l.getWrapperAdSystems = function() {
        return this.data.adWrapperSystems
    }
    ;
    l.isLinear = function() {
        return this.data.linear
    }
    ;
    l.isSkippable = function() {
        return this.data.skippable
    }
    ;
    l.getContentType = function() {
        return this.data.contentType
    }
    ;
    l.getDescription = function() {
        return this.data.description
    }
    ;
    l.getTitle = function() {
        return this.data.title
    }
    ;
    l.getDuration = function() {
        return this.data.duration
    }
    ;
    l.getVastMediaWidth = function() {
        return this.data.vastMediaWidth
    }
    ;
    l.getVastMediaHeight = function() {
        return this.data.vastMediaHeight
    }
    ;
    l.getWidth = function() {
        return this.data.width
    }
    ;
    l.getHeight = function() {
        return this.data.height
    }
    ;
    l.getUiElements = function() {
        return this.data.uiElements
    }
    ;
    l.getMinSuggestedDuration = function() {
        return this.data.minSuggestedDuration
    }
    ;
    l.getAdPodInfo = function() {
        return new dH(this.data.adPodInfo)
    }
    ;
    l.getCompanionAds = function(a, b, c) {
        if (!this.data.companions)
            return [];
        var d = this.data.companions.map(function(e) {
            return new eH(e)
        });
        return UE(new RE({
            size: new F(a,b),
            Ce: c ? "SelectFluid" === c.sizeCriteria : !1
        },c), d)
    }
    ;
    l.getTraffickingParameters = function() {
        return mz(Mh(this.data.traffickingParameters))
    }
    ;
    l.getTraffickingParametersString = function() {
        return this.data.traffickingParameters
    }
    ;
    l.getVastMediaBitrate = function() {
        return this.data.vastMediaBitrate
    }
    ;
    l.getMediaUrl = function() {
        return this.data.mediaUrl
    }
    ;
    l.getSurveyUrl = function() {
        return this.data.surveyUrl
    }
    ;
    l.getDealId = function() {
        return this.data.dealId
    }
    ;
    l.getUniversalAdIds = function() {
        return (this.data.universalAdIds || []).map(function(a) {
            return new fH(a.adIdValue,a.adIdRegistry)
        })
    }
    ;
    l.getUniversalAdIdValue = function() {
        return this.data.universalAdIdValue
    }
    ;
    l.getUniversalAdIdRegistry = function() {
        return this.data.universalAdIdRegistry
    }
    ;
    l.getSkipTimeOffset = function() {
        return this.data.skipTimeOffset
    }
    ;
    l.Je = function() {
        return this.data.disableUi
    }
    ;
    Y.prototype.isUiDisabled = Y.prototype.Je;
    Y.prototype.getSkipTimeOffset = Y.prototype.getSkipTimeOffset;
    Y.prototype.getUniversalAdIdRegistry = Y.prototype.getUniversalAdIdRegistry;
    Y.prototype.getUniversalAdIdValue = Y.prototype.getUniversalAdIdValue;
    Y.prototype.getUniversalAdIds = Y.prototype.getUniversalAdIds;
    Y.prototype.getDealId = Y.prototype.getDealId;
    Y.prototype.getSurveyUrl = Y.prototype.getSurveyUrl;
    Y.prototype.getMediaUrl = Y.prototype.getMediaUrl;
    Y.prototype.getVastMediaBitrate = Y.prototype.getVastMediaBitrate;
    Y.prototype.getTraffickingParametersString = Y.prototype.getTraffickingParametersString;
    Y.prototype.getTraffickingParameters = Y.prototype.getTraffickingParameters;
    Y.prototype.getCompanionAds = Y.prototype.getCompanionAds;
    Y.prototype.getAdPodInfo = Y.prototype.getAdPodInfo;
    Y.prototype.getMinSuggestedDuration = Y.prototype.getMinSuggestedDuration;
    Y.prototype.getUiElements = Y.prototype.getUiElements;
    Y.prototype.getHeight = Y.prototype.getHeight;
    Y.prototype.getWidth = Y.prototype.getWidth;
    Y.prototype.getVastMediaHeight = Y.prototype.getVastMediaHeight;
    Y.prototype.getVastMediaWidth = Y.prototype.getVastMediaWidth;
    Y.prototype.getDuration = Y.prototype.getDuration;
    Y.prototype.getTitle = Y.prototype.getTitle;
    Y.prototype.getDescription = Y.prototype.getDescription;
    Y.prototype.getContentType = Y.prototype.getContentType;
    Y.prototype.isSkippable = Y.prototype.isSkippable;
    Y.prototype.isLinear = Y.prototype.isLinear;
    Y.prototype.getWrapperAdSystems = Y.prototype.getWrapperAdSystems;
    Y.prototype.getWrapperCreativeIds = Y.prototype.getWrapperCreativeIds;
    Y.prototype.getWrapperAdIds = Y.prototype.getWrapperAdIds;
    Y.prototype.getApiFramework = Y.prototype.getApiFramework;
    Y.prototype.getAdvertiserName = Y.prototype.getAdvertiserName;
    Y.prototype.getAdSystem = Y.prototype.getAdSystem;
    Y.prototype.getCreativeId = Y.prototype.getCreativeId;
    Y.prototype.getCreativeAdId = Y.prototype.getCreativeAdId;
    Y.prototype.getAdId = Y.prototype.getAdId;
    var hH = function(a) {
        this.g = a
    };
    hH.prototype.getCuePoints = function() {
        return this.g
    }
    ;
    hH.prototype.getCuePoints = hH.prototype.getCuePoints;
    var iH = function() {
        this.useLearnMoreButton = this.disableUi = this.disableClickThrough = !1;
        this.autoAlign = this.useVideoAdUi = !0;
        this.bitrate = -1;
        this.enablePreloading = !1;
        this.loadVideoTimeout = 8E3;
        this.mimeTypes = null;
        this.playAdsAfterTime = -1;
        this.restoreCustomPlaybackStateOnAdBreakComplete = !1;
        this.uiElements = null;
        this.useStyledNonLinearAds = this.useStyledLinearAds = !1
    }
      , jH = function(a, b) {
        var c = {};
        Object.assign(c, a);
        b && (c.disableClickThrough = !0);
        return c
    };
    iH.prototype.append = function(a) {
        if (a) {
            var b = a.autoAlign;
            null != b && (this.autoAlign = b);
            b = Rh(a.bitrate);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.bitrate = b);
            this.disableClickThrough = a.disableClickThrough || this.disableClickThrough;
            this.disableUi = a.disableUi || this.disableUi;
            this.enablePreloading = a.enablePreloading || this.enablePreloading;
            (b = a.mimeTypes) && 0 !== b.length && (this.mimeTypes = b);
            b = Rh(a.playAdsAfterTime);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.playAdsAfterTime = b);
            this.restoreCustomPlaybackStateOnAdBreakComplete = a.restoreCustomPlaybackStateOnAdBreakComplete || this.restoreCustomPlaybackStateOnAdBreakComplete;
            b = Rh(a.loadVideoTimeout);
            "number" === typeof b && !isNaN(b) && 0 < b && (this.loadVideoTimeout = b);
            this.uiElements = a.uiElements || this.uiElements;
            this.useLearnMoreButton = a.useLearnMoreButton || this.useLearnMoreButton;
            this.useStyledLinearAds = a.useStyledLinearAds || this.useStyledLinearAds;
            this.useStyledNonLinearAds = a.useStyledNonLinearAds || this.useStyledNonLinearAds;
            this.useVideoAdUi = !1 === a.useVideoAdUi ? !1 : this.useVideoAdUi
        }
    }
    ;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ads_rendering_settings.AdsRenderingSettings.AUTO_SCALE", -1);
    var kH = function(a) {
        this.H = C(a)
    };
    w(kH, E);
    var lH = function(a) {
        this.H = C(a)
    };
    w(lH, E);
    var mH = function(a) {
        this.H = C(a)
    };
    w(mH, E);
    var nH = function(a) {
        this.H = C(a)
    };
    w(nH, E);
    var oH = function(a) {
        this.H = C(a)
    };
    w(oH, E);
    var pH = function(a) {
        return zf(a, Xj, 5)
    };
    oH.prototype.getWidth = function() {
        return Mf(this, 9)
    }
    ;
    oH.prototype.getHeight = function() {
        return Mf(this, 10)
    }
    ;
    var qH = Ig(oH);
    oH.ba = [3, 7, 27, 11, 32];
    function rH(a) {
        var b = a.eh
          , c = a.Si
          , d = a.ij
          , e = a.auctionNonce
          , f = void 0 === a.Qf ? 0 : a.Qf
          , g = a.jj
          , h = a.Li;
        a = !Lf(b, 14);
        for (var k = {}, n = u(Cf(b, lH, 7)), m = n.next(); !m.done; m = n.next()) {
            m = m.value;
            var p = {}
              , q = void 0
              , t = null == (q = d) ? void 0 : q.Bg.Xg.bh.Uf;
            q = D(m, 1);
            if (D(m, 2).length)
                try {
                    if (p = JSON.parse(D(m, 2)),
                    1 > 100 * ui()) {
                        var v = void 0;
                        null == (v = t) || v.Gd({
                            rd: q,
                            status: "SUCCESS",
                            ee: 100
                        })
                    }
                } catch (Ga) {
                    v = void 0,
                    null == (v = t) || v.Gd({
                        rd: q,
                        status: "ERROR",
                        ee: 1
                    })
                }
            else
                v = void 0,
                null == (v = t) || v.Gd({
                    rd: q,
                    status: "EMPTY",
                    ee: 1
                });
            k[D(m, 1)] = p
        }
        if (d = Af(b, Vj, 6))
            k["https://googleads.g.doubleclick.net"] = d.toJSON(),
            k["https://td.doubleclick.net"] = d.toJSON();
        n = {};
        d = Cf(b, nH, 11);
        d = u(d);
        for (m = d.next(); !m.done; m = d.next())
            m = m.value,
            n[D(m, 1)] = Mf(m, 2);
        m = {};
        0 !== Mf(b, 21) && (m["*"] = Mf(b, 21));
        if (0 < Cf(b, mH, 32).length) {
            var x = {};
            d = u(Cf(b, mH, 32));
            for (p = d.next(); !p.done; p = d.next())
                p = p.value,
                x[D(p, 1)] = Mf(p, 2)
        }
        p = {};
        null != he(cf(b, 18)) && (p["https://googleads.g.doubleclick.net"] = Nf(b, 18),
        p["https://td.doubleclick.net"] = Nf(b, 18));
        d = b.H;
        t = yd(d);
        d = nf(d, t, bf(d, t, 24), 24, kH);
        d = u(d);
        for (t = d.next(); !t.done; t = d.next())
            q = t.value,
            Nf(q[1], 4) && (t = q[0],
            q = Nf(q[1], 4),
            p[t] = q);
        d = D(b, 1).split("/td/")[0];
        null == (t = Af(b, Xj, 5)) ? t = void 0 : (q = t.H,
        t = xe(t.constructor, $e(q, yd(q), !1)));
        var A;
        null != t && null != (A = Af(t, Wj, 5)) && ff(A, 2);
        A = Object;
        q = A.assign;
        v = D(b, 1);
        var ha = D(b, 2);
        var Q = Sf(b, 3);
        x = q.call(A, {}, {
            seller: d,
            decisionLogicUrl: v,
            trustedScoringSignalsUrl: ha,
            interestGroupBuyers: Q,
            sellerExperimentGroupId: Nf(b, 17),
            auctionSignals: JSON.parse(D(b, 4) || "{}"),
            sellerSignals: (null == t ? void 0 : t.toJSON()) || [],
            sellerTimeout: Mf(b, 15) || 50,
            perBuyerExperimentGroupIds: p,
            perBuyerSignals: k,
            perBuyerTimeouts: n,
            perBuyerCumulativeTimeouts: m
        }, x ? {
            perBuyerGroupLimits: x
        } : {}, a ? {
            resolveToConfig: a
        } : {});
        if (null == b ? 0 : Lf(pH(b), 25))
            x.sellerCurrency = "USD",
            x.perBuyerCurrencies = Object.fromEntries(of(b, 22, ve));
        D(b, 28) && (x.directFromSellerSignalsHeaderAdSlot = D(b, 28));
        if (sH(x.interestGroupBuyers, h)) {
            x.auctionReportBuyerKeys = x.interestGroupBuyers.map(tH);
            x.auctionReportBuyers = {
                interestGroupCount: {
                    bucket: BigInt(0),
                    scale: 1
                },
                bidCount: {
                    bucket: BigInt(1),
                    scale: 1
                },
                totalGenerateBidLatency: {
                    bucket: BigInt(2),
                    scale: 1
                },
                totalSignalsFetchLatency: {
                    bucket: BigInt(3),
                    scale: 1
                }
            };
            var la = void 0 === la ? BigInt(0) : la;
            x.auctionReportBuyerDebugModeConfig = {
                enabled: !0,
                debugKey: la
            }
        }
        e && (x.auctionNonce = e,
        x.additionalBids = Promise.resolve());
        of(b, 33, ve).size && (x.deprecatedRenderURLReplacements = Object.fromEntries(of(b, 33, ve).entries()),
        (e = x.deprecatedRenderURLReplacements["${RENDER_DATA_td.doubleclick.net_GDA}"]) && (x.deprecatedRenderURLReplacements["${RENDER_DATA}"] = e));
        switch (f) {
        case 1:
            x.allSlotsRequestedSizes = [{
                width: b.getWidth(),
                height: b.getHeight()
            }]
        }
        g && (x.reportingTimeout = g);
        f = Object;
        g = f.assign;
        e = D(b, 1);
        la = Nf(b, 17);
        h = new Xj;
        k = pH(b);
        void 0 !== yf(k, Wj, 5, !1) && (k = new Wj,
        A = Rf(zf(pH(b), Wj, 5), 2),
        k = qf(k, 2, ie(A), "0"),
        A = Rf(zf(pH(b), Wj, 5), 4),
        k = qf(k, 4, ie(A), "0"),
        Df(h, 5, k));
        pH(b).getEscapedQemQueryId() && (k = pH(b).getEscapedQemQueryId(),
        qf(h, 2, qe(k), ""));
        D(pH(b), 6) && (k = D(pH(b), 6),
        qf(h, 6, qe(k), ""));
        Lf(pH(b), 21) && qf(h, 21, Xd(!0), !1);
        Lf(pH(b), 4) && qf(h, 4, Xd(!0), !1);
        D(pH(b), 11) && (k = D(pH(b), 11),
        qf(h, 11, qe(k), ""));
        Lf(pH(b), 32) && qf(h, 32, Xd(!0), !1);
        h = h.toJSON();
        k = Mf(b, 15) || 50;
        if (Lf(b, 30)) {
            if (null == c || !c.length)
                throw Error("top_td_without_component_auction");
        } else
            c = [x].concat(ia(null != c ? c : []));
        c = g.call(f, {}, {
            seller: d,
            decisionLogicUrl: e,
            sellerExperimentGroupId: la,
            sellerSignals: h,
            sellerTimeout: k,
            interestGroupBuyers: [],
            auctionSignals: {},
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            perBuyerCumulativeTimeouts: {},
            componentAuctions: c
        }, a ? {
            resolveToConfig: a
        } : {});
        D(b, 28) && (c.directFromSellerSignalsHeaderAdSlot = D(b, 28));
        return c
    }
    function sH(a, b) {
        return a.some(function(c) {
            return tH(c) !== BigInt(100)
        }) && (null != b ? b : !1)
    }
    function tH(a) {
        var b;
        return null != (b = (new Map([["https://googleads.g.doubleclick.net", BigInt(200)], ["https://td.doubleclick.net", BigInt(300)], ["https://f.creativecdn.com", BigInt(400)], ["https://fledge.us.criteo.com", BigInt(500)], ["https://fledge.eu.criteo.com", BigInt(600)], ["https://fledge.as.criteo.com", BigInt(700)], ["https://fledge-buyer-testing-1.uc.r.appspot.com", BigInt(800)]])).get(a)) ? b : BigInt(100)
    }
    ;var vH = function(a, b) {
        P.call(this);
        var c = this;
        this.j = b;
        this.l = function(d) {
            var e = Date.now();
            try {
                var f = uH(c, d.tdconfig)
            } catch (g) {
                f = Promise.resolve({
                    Jb: !1,
                    result: null
                })
            }
            return f.then(function(g) {
                var h = new Tj;
                h = Xf(h, 1, e);
                h = Xf(h, 2, Date.now());
                var k = g.result;
                g = g.Jb;
                var n;
                k = "string" === typeof k ? k : null != (n = null == k ? void 0 : k.url) ? n : "";
                n = {};
                return n.ffconfig = k,
                n.timeout = 500,
                n.auctioninterval = ag(h),
                n.isauctiontimeout = g,
                n
            })
        }
        ;
        this.g = new MG(a,"fledge");
        R(this, this.g)
    };
    w(vH, P);
    var uH = function(a, b) {
        b = qH(b);
        var c = rH({
            eh: b
        });
        b = uv(500, null).then(function() {
            return {
                Jb: !0,
                result: null
            }
        });
        a = a.j.runAdAuction(c).then(function(d) {
            return {
                Jb: !1,
                result: d
            }
        });
        return Promise.race([b, a])
    };
    var xH = function(a, b, c) {
        P.call(this);
        this.C = a;
        this.o = b;
        this.B = c;
        this.g = this.j = this.A = null;
        this.l = 0;
        a = new tz(this);
        R(this, a);
        wH(this);
        a.listen(this.o, "adsManager", this.D)
    };
    w(xH, P);
    var wH = function(a) {
        $G(a.C).then(function(b) {
            return void yH(a, b)
        }).catch(function() {
            return void zH(a)
        })
    };
    xH.prototype.D = function(a) {
        if (["complete", "skip", "error"].includes(a.messageType)) {
            this.l++;
            if (10 === this.l) {
                this.l = 0;
                var b;
                null == (b = this.g) || b.V();
                wH(this)
            }
            a = gi(this.j);
            var c;
            a && (null == (c = a.frames) ? 0 : c.omid_v1_present) || X.getInstance().report(188, {})
        }
    }
    ;
    var AH = function(a) {
        if (a.g && a.A) {
            var b = a.g;
            try {
                b.g && b.g.setSessionClientWindow(a.A)
            } catch (c) {
                b.dispatchEvent(new Event("error"))
            }
        }
    }
      , yH = function(a, b) {
        a.j = b;
        a.g = new aH(b,a.B);
        a.g.listen("error", function() {
            return void zH(a)
        });
        cH(a.g);
        AH(a)
    }
      , zH = function(a) {
        KE(a.o, "omid", "iframeFailed");
        a.V()
    };
    xH.prototype.N = function() {
        this.j && (di(this.j),
        this.j = null);
        P.prototype.N.call(this)
    }
    ;
    var BH = function(a, b, c, d) {
        P.call(this);
        this.A = a;
        this.l = b;
        this.g = c;
        this.C = d;
        this.j = new tz(this);
        R(this, this.j);
        this.j.listen(this.A, d, this.B)
    };
    w(BH, P);
    var CH = function(a, b) {
        var c = b.na;
        switch (b.messageType) {
        case "showVideo":
            a.l.ld();
            break;
        case "hide":
            a.l.kb();
            break;
        case "resizeAndPositionVideo":
            b = c.resizeAndPositionVideo;
            a.l.Xd(new kk(b.x,b.y,b.width,b.height));
            break;
        case "restoreSizeAndPositionVideo":
            a.l.Yd()
        }
    };
    BH.prototype.B = function(a) {
        var b = a.na;
        switch (a.messageType) {
        case "activate":
            this.l.uc(this.g);
            break;
        case "startTracking":
            a = this.g;
            var c = this.o;
            this.j.listen(a, Yg(aA), c);
            this.j.listen(a, NG, c);
            a = this.g;
            DH(a);
            a.j.listen(a.g, NG, a.Qa);
            a.j.listen(a.g, "ended", a.Eg);
            a.j.listen(a.g, "webkitbeginfullscreen", a.Ra);
            a.j.listen(a.g, "webkitendfullscreen", a.ga);
            a.j.listen(a.g, "loadedmetadata", a.Gg);
            a.j.listen(a.g, "pause", a.Ig);
            a.j.listen(a.g, "playing", a.Oe);
            a.j.listen(a.g, "timeupdate", a.Jg);
            a.j.listen(a.g, "volumechange", a.Lg);
            a.j.listen(a.g, "error", a.W);
            a.j.listen(a.g, Ac || rc && !dz(8) ? "loadeddata" : "canplay", a.Fg);
            a.o = new xG;
            a.j.listen(a.o, "click", a.ka);
            zG(a.o, a.g);
            a.F = new rv(1E3);
            a.j.listen(a.F, "tick", a.Ia);
            a.F.start();
            break;
        case "stopTracking":
            a = this.g;
            c = this.o;
            this.j.rb(a, Yg(aA), c);
            this.j.rb(a, NG, c);
            DH(this.g);
            break;
        case "exitFullscreen":
            a = this.g;
            (oc || qc) && a.g.webkitDisplayingFullscreen && a.g.webkitExitFullscreen();
            break;
        case "play":
            EH(this.g);
            break;
        case "pause":
            this.g.pause();
            break;
        case "load":
            a = this.g;
            c = b.videoUrl;
            var d = b.muxedMediaUrl
              , e = b.muxedMimeType
              , f = b.muxedAudioCodec
              , g = b.muxedVideoCodec
              , h = b.demuxedAudioUrl
              , k = b.demuxedVideoUrl
              , n = b.demuxedAudioMimeType
              , m = b.demuxedVideoMimeType
              , p = b.demuxedAudioCodec
              , q = b.demuxedVideoCodec;
            b = b.mseCompatible;
            var t = null;
            k && h && b && m && n && q && p && (t = new Dx({
                kh: k,
                Tf: h,
                oj: null,
                Ni: null,
                jh: m,
                Sf: n,
                sb: q,
                bb: p,
                height: null,
                width: null,
                Ea: b,
                nj: null,
                Mi: null
            }));
            h = null;
            d && e && g && f && (h = new Ex({
                Ag: d,
                yb: null,
                mimeType: e,
                sb: g,
                bb: f,
                height: null,
                width: null,
                Ea: b,
                Ui: null
            }));
            t ? a.load(c, t) : h ? a.load(c, h) : a.load(c, null);
            break;
        case "unload":
            a = this.g;
            FH(a);
            a.T = !1;
            "removeAttribute"in a.g ? a.g.removeAttribute("src") : a.g.src = "";
            a.g.load();
            break;
        case "setCurrentTime":
            this.g.g.currentTime = b.currentTime;
            break;
        case "setVolume":
            this.g.setVolume(b.volume)
        }
    }
    ;
    BH.prototype.o = function(a) {
        var b = {};
        switch (a.type) {
        case "autoplayDisallowed":
            a = "autoplayDisallowed";
            break;
        case "beginFullscreen":
            a = "fullscreen";
            break;
        case "endFullscreen":
            a = "exitFullscreen";
            break;
        case "click":
            a = "click";
            break;
        case "end":
            a = "end";
            break;
        case "error":
            a = "error";
            break;
        case "loaded":
            a = "loaded";
            break;
        case "mediaLoadTimeout":
            a = "mediaLoadTimeout";
            break;
        case "pause":
            a = "pause";
            b.ended = this.g.g.ended;
            break;
        case "play":
            a = "play";
            break;
        case "skip":
            a = "skip";
            break;
        case "start":
            a = "start";
            b.volume = this.g.getVolume();
            break;
        case "timeUpdate":
            a = "timeupdate";
            b.currentTime = this.g.getCurrentTime();
            b.duration = this.g.getDuration();
            break;
        case "volumeChange":
            a = "volumeChange";
            b.volume = this.g.getVolume();
            break;
        case "loadedmetadata":
            a = a.type;
            b.duration = this.g.getDuration();
            break;
        case "abort":
        case "canplay":
        case "canplaythrough":
        case "durationchange":
        case "emptied":
        case "loadstart":
        case "loadeddata":
        case "progress":
        case "ratechange":
        case "seeked":
        case "seeking":
        case "stalled":
        case "suspend":
        case "waiting":
            a = a.type;
            break;
        default:
            return
        }
        KE(this.A, this.C, a, b)
    }
    ;
    var GH = function(a, b) {
        P.call(this);
        this.j = b;
        this.g = null;
        this.l = new BH(a,b,this.j.da,"videoDisplay1");
        R(this, this.l);
        var c = this.j.za;
        null != c && (this.g = new BH(a,b,c,"videoDisplay2"),
        R(this, this.g))
    };
    w(GH, P);
    var HH = function(a, b, c, d) {
        var e = Di("IFRAME");
        e.id = b;
        e.name = b;
        e.width = String(c);
        e.height = String(d);
        e.allowTransparency = "true";
        e.scrolling = "no";
        e.marginWidth = "0";
        e.marginHeight = "0";
        e.frameBorder = "0";
        e.style.border = "0";
        e.style.verticalAlign = "bottom";
        e.src = "about:blank";
        e.setAttribute("aria-label", "Advertisement");
        e.title = "3rd party ad content";
        e.tabIndex = 0;
        a.appendChild(e);
        return e
    };
    function IH() {
        var a, b, c, d = G();
        d = void 0 === d ? window : d;
        d = (null != (c = void 0 === d ? null : d) ? c : window).googletag;
        c = (null == d ? 0 : d.apiReady) ? d : void 0;
        return null != (b = null == c ? void 0 : null == (a = c.companionAds) ? void 0 : a.call(c)) ? b : null
    }
    function JH(a) {
        var b = {};
        b.slotId = a.getSlotId().getId();
        var c = [];
        a = u(a.getSizes() || []);
        for (var d = a.next(); !d.done; d = a.next())
            if (d = d.value,
            "string" !== typeof d) {
                var e = {};
                c.push((e.adWidth = d.getWidth(),
                e.adHeight = d.getHeight(),
                e))
            } else
                "fluid" === d && (d = {},
                c.push((d.fluidSize = !0,
                d)));
        return b.adSizes = c,
        b
    }
    function KH(a) {
        var b = IH();
        if (b && a && Array.isArray(a)) {
            var c = new Map(b.getSlots().map(function(q) {
                return [q.getSlotId().getId(), q]
            }));
            a = u(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                var e = d.value
                  , f = c.get(e.slotId);
                if (f && !b.isSlotAPersistentRoadblock(f)) {
                    var g = e.adContent;
                    if (g && (d = Vh(f.getSlotId().getDomId()))) {
                        d.style.display = "";
                        var h = e.adWidth
                          , k = e.adHeight;
                        e.fluidSize && (k = tp(d),
                        h = k.width,
                        k = k.height);
                        d.textContent = "";
                        if (e.friendlyIframeRendering)
                            try {
                                var n = "google_companion_" + f.getSlotId().getId()
                                  , m = HH(d, n, h, k)
                                  , p = m.contentWindow ? m.contentWindow.document : m.contentDocument;
                                kc && p.open("text/html", "replace");
                                Ih(p, Ak(g));
                                p.close()
                            } catch (q) {}
                        else
                            Fh(d, Ak(g)),
                            d.style.width = h + "px",
                            d.style.height = k + "px";
                        b.slotRenderEnded(f, h, k);
                        (e = e.onAdContentSet) && e(d)
                    }
                }
            }
        }
    }
    ;var LH = function(a, b, c, d, e, f) {
        LE.call(this, a, b, c, d, e);
        this.g = f
    };
    w(LH, LE);
    var MH = function(a, b) {
        S.call(this);
        this.B = a;
        this.o = b;
        this.g = {};
        this.j = new tz(this);
        R(this, this.j);
        this.j.listen(G(), "message", this.l)
    };
    w(MH, S);
    var NH = function(a, b) {
        var c = b.g;
        a.g.hasOwnProperty(c) && KE(a.g[c], b.type, b.messageType, b.na)
    }
      , OH = function(a, b, c, d) {
        a.g.hasOwnProperty(b) || (c = new uG(b,c),
        a.j.listen(c, a.B, function(e) {
            this.dispatchEvent(new LH(e.type,e.messageType,e.na,e.sc,e.origin,b))
        }),
        c.g = d,
        c.connect(),
        a.g[b] = c)
    };
    MH.prototype.N = function() {
        for (var a = u(Object.values(this.g)), b = a.next(); !b.done; b = a.next())
            hq(b.value);
        S.prototype.N.call(this)
    }
    ;
    MH.prototype.l = function(a) {
        a = a.g;
        var b = vG(a.data);
        if (null != b) {
            var c = b.channel;
            if (this.o && !this.g.hasOwnProperty(c)) {
                var d = b.sid;
                OH(this, c, d, a.source);
                this.dispatchEvent(new LH(b.name,b.type,b.data || {},d,a.origin,c))
            }
        }
    }
    ;
    function PH() {
        return !!Oa("googletag.cmd", G())
    }
    function QH() {
        var a = Oa("googletag.console", G());
        return null != a ? a : null
    }
    var RH = function() {
        tz.call(this);
        this.g = null;
        this.l = new MH("gpt",!0);
        R(this, this.l);
        this.listen(this.l, "gpt", this.B);
        PH() || G().top === G() || (this.g = new MH("gpt",!1),
        R(this, this.g),
        this.listen(this.g, "gpt", this.o))
    };
    w(RH, tz);
    RH.prototype.B = function(a) {
        var b = a.origin
          , c = "//imasdk.googleapis.com".match(ki);
        b = b.match(ki);
        if (c[3] == b[3] && c[4] == b[4])
            if (null != this.g)
                OH(this.g, a.g, a.sc, G().parent),
                null != this.g && NH(this.g, a);
            else if (c = a.na,
            null != c && void 0 !== c.scope) {
                b = c.scope;
                c = c.args;
                var d;
                if ("proxy" === b) {
                    var e = a.messageType;
                    "isGptPresent" === e ? d = PH() : "isConsolePresent" === e && (d = null != QH())
                } else if (PH())
                    if ("pubads" === b || "companionAds" === b) {
                        d = a.messageType;
                        var f = G().googletag;
                        if (null != f && null != f[b] && (b = f[b](),
                        null != b && (d = b[d],
                        null != d)))
                            try {
                                e = d.apply(b, c)
                            } catch (g) {}
                        d = e
                    } else if ("console" === b) {
                        if (e = QH(),
                        null != e && (b = e[a.messageType],
                        null != b))
                            try {
                                b.apply(e, c)
                            } catch (g) {}
                    } else
                        null === b && (e = a.messageType,
                        "googleGetCompanionAdSlots" === e ? (e = IH()) ? (e = e.getSlots().map(JH),
                        d = e.length ? e : null) : d = null : ("googleSetCompanionAdContents" === e && KH(null == c ? void 0 : c[0]),
                        d = null));
                void 0 !== d && (a.na.returnValue = d,
                NH(this.l, a))
            }
    }
    ;
    RH.prototype.o = function(a) {
        NH(this.l, a)
    }
    ;
    var SH = function(a, b) {
        if (a.g) {
            var c = a.g;
            hq(c.g[b]);
            delete c.g[b]
        }
        a.l && (a = a.l,
        hq(a.g[b]),
        delete a.g[b])
    };
    var UH = function(a, b) {
        var c = Array.prototype.slice.call(arguments)
          , d = c.shift();
        if ("undefined" == typeof d)
            throw Error("[goog.string.format] Template required");
        return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, h, k, n, m, p) {
            if ("%" == n)
                return "%";
            var q = c.shift();
            if ("undefined" == typeof q)
                throw Error("[goog.string.format] Not enough arguments");
            arguments[0] = q;
            return TH[n].apply(null, arguments)
        })
    }
      , TH = {
        s: function(a, b, c) {
            return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ? a + Lh(" ", Number(c) - a.length) : Lh(" ", Number(c) - a.length) + a
        },
        f: function(a, b, c, d, e) {
            d = a.toString();
            isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
            var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
            0 <= Number(a) && (d = f + d);
            if (isNaN(c) || d.length >= Number(c))
                return d;
            d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
            a = Number(c) - d.length - f.length;
            return d = 0 <= b.indexOf("-", 0) ? f + d + Lh(" ", a) : f + Lh(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
        },
        d: function(a, b, c, d, e, f, g, h) {
            return TH.f(parseInt(a, 10), b, c, d, 0, f, g, h)
        }
    };
    TH.i = TH.d;
    TH.u = TH.d;
    function VH() {
        return ["autoplay", "attribution-reporting"].filter(function(a) {
            var b = document.featurePolicy;
            return void 0 !== b && "function" == typeof b.allowedFeatures && "object" == typeof b.allowedFeatures() && b.allowedFeatures().includes(a)
        }).join(";")
    }
    var XH = function(a, b) {
        S.call(this);
        this.D = b;
        this.M = this.K = null;
        this.I = !1;
        this.F = "goog_" + Nh++;
        this.B = new Map;
        this.j = null;
        var c = G();
        var d = Oa("google.ima.gptProxyInstance", c);
        null != d ? c = d : (d = new RH,
        z("google.ima.gptProxyInstance", d, c),
        c = d);
        this.W = c;
        this.C = null;
        this.o = new tz(this);
        R(this, this.o);
        c = this.F;
        d = (yi() ? "https:" : "http:") + UH("//imasdk.googleapis.com/js/core/bridge3.644.0_%s.html", KD.getLocale());
        a: {
            var e = window;
            try {
                do {
                    try {
                        if (0 === e.location.href.indexOf(d) || 0 === e.document.referrer.indexOf(d)) {
                            var f = !0;
                            break a
                        }
                    } catch (k) {}
                    e = e.parent
                } while (e !== e.top)
            } catch (k) {}
            f = !1
        }
        f && (d += "?f=" + c);
        f = window.document;
        if (Tm.length && f.head) {
            e = u(Tm);
            for (var g = e.next(); !g.done; g = e.next())
                if ((g = g.value) && f.head) {
                    var h = Di("META");
                    f.head.appendChild(h);
                    h.httpEquiv = "origin-trial";
                    h.content = g
                }
        }
        f = VH();
        c = ci("IFRAME", {
            src: d + "#" + c,
            allowFullscreen: !0,
            allow: f,
            id: c,
            style: "border:0; opacity:0; margin:0; padding:0; position:relative; color-scheme: light;",
            title: "Advertisement"
        });
        this.o.ec(c, "load", this.ga);
        a.appendChild(c);
        this.g = c;
        this.l = WH(this);
        this.O = new vH(this.l,navigator);
        R(this, this.O);
        c = this.O;
        c.g.j.set("auction", c.l);
        this.T = new GH(this.l,this.D);
        R(this, this.T);
        this.D.da && this.o.listen(this.l, "displayContainer", this.U);
        this.o.listen(this.l, "mouse", this.Z);
        this.o.listen(this.l, "touch", this.aa);
        oE() || (this.C = new xH(a,this.l,b.da.O.g),
        R(this, this.C))
    };
    w(XH, S);
    var WH = function(a, b) {
        b = void 0 === b ? "*" : b;
        var c = a.B.get(b);
        null == c && (c = new uG(a.F,b),
        a.I && (c.g = gi(a.g),
        c.connect()),
        a.B.set(b, c));
        return c
    };
    XH.prototype.uc = function(a) {
        var b;
        null != (b = this.C) && (a = a.O.g,
        b.B = a,
        b.g && (b = b.g,
        b.j = a,
        bH(b, a)))
    }
    ;
    XH.prototype.N = function() {
        null !== this.j && (this.j.V(),
        this.j = null);
        this.B.forEach(function(a) {
            hq(a)
        });
        this.B.clear();
        SH(this.W, this.F);
        di(this.g);
        S.prototype.N.call(this)
    }
    ;
    XH.prototype.Z = function(a) {
        var b = a.na
          , c = op(this.g)
          , d = document.createEvent("MouseEvent");
        d.initMouseEvent(a.messageType, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
        this.g.dispatchEvent(d)
    }
    ;
    var YH = function(a, b) {
        var c = op(a.g)
          , d = !!("TouchEvent"in window && 0 < TouchEvent.length);
        b = b.map(function(f) {
            return d ? new Touch({
                identifier: f.identifier,
                target: a.g,
                clientX: f.clientX,
                clientY: f.clientY,
                screenX: f.screenX,
                screenY: f.screenY,
                pageX: f.pageX + c.x,
                pageY: f.pageY + c.y
            }) : document.createTouch(window, a.g, f.identifier, f.pageX + c.x, f.pageY + c.y, f.screenX, f.screenY)
        });
        if (d)
            return b;
        var e;
        return null == (e = document.createTouchList) ? void 0 : e.apply(document, b)
    };
    XH.prototype.aa = function(a) {
        var b = a.na
          , c = op(this.g);
        if ("TouchEvent"in window && 0 < TouchEvent.length)
            b = {
                bubbles: !0,
                cancelable: !0,
                view: window,
                detail: b.detail,
                ctrlKey: b.ctrlKey,
                altKey: b.altKey,
                shiftKey: b.shiftKey,
                metaKey: b.metaKey,
                touches: YH(this, b.touches),
                targetTouches: YH(this, b.targetTouches),
                changedTouches: YH(this, b.changedTouches)
            },
            a = new TouchEvent(a.messageType,b),
            this.g.dispatchEvent(a);
        else {
            var d = document.createEvent("TouchEvent");
            d.initTouchEvent(a.messageType, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, YH(this, b.touches), YH(this, b.targetTouches), YH(this, b.changedTouches), b.scale, b.rotation);
            this.g.dispatchEvent(d)
        }
    }
    ;
    XH.prototype.U = function(a) {
        switch (a.messageType) {
        case "showVideo":
            null == this.j ? (this.j = new xG,
            this.o.listen(this.j, "click", this.ka)) : BG(this.j);
            zG(this.j, this.D.Vb());
            break;
        case "hide":
            null !== this.j && (this.j.V(),
            this.j = null)
        }
        var b = this.T;
        CH(b.l, a);
        b.g && CH(b.g, a)
    }
    ;
    XH.prototype.ka = function() {
        KE(this.l, "displayContainer", "videoClick")
    }
    ;
    XH.prototype.ga = function() {
        this.K = Pi();
        this.M = Mi();
        var a = gi(this.g);
        this.B.forEach(function(c) {
            c.g = a;
            c.connect()
        });
        var b;
        null != (b = this.C) && (b.A = a,
        AH(b));
        this.I = !0
    }
    ;
    var ZH = fa(["https://s0.2mdn.net/instream/video/client.js"])
      , $H = null
      , aI = function() {
        S.call(this);
        this.g = null;
        this.j = new Map;
        this.l = new Map;
        this.ua = this.C = !1;
        this.o = null;
        this.B = new tz(this);
        R(this, this.B)
    };
    w(aI, S);
    var bI = function() {
        null == $H && ($H = new aI);
        return $H
    }
      , eu = function(a, b, c) {
        var d = {};
        d.queryId = b;
        d.viewabilityData = c;
        a.g && KE(a.g, "activityMonitor", "viewabilityMeasurement", d)
    };
    aI.prototype.destroy = function() {
        this.B.rb(this.g, "activityMonitor", this.D);
        this.ua = !1;
        this.j.clear()
    }
    ;
    aI.prototype.N = function() {
        this.destroy();
        S.prototype.N.call(this)
    }
    ;
    aI.prototype.init = function(a) {
        if (!this.ua) {
            if (this.g = a || null)
                this.B.listen(this.g, "activityMonitor", this.D),
                cI(this);
            if (!(y.ima && y.ima.video && y.ima.video.client && y.ima.video.client.tagged)) {
                z("ima.video.client.sdkTag", !0);
                var b = y.document;
                a = ai(document, "SCRIPT");
                var c = Bh(ZH);
                Gh(a, c);
                a.async = !0;
                a.type = "text/javascript";
                b = b.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b)
            }
            eo();
            I(Vt).I = KD.g;
            this.C = !0;
            I(Vt).l = !0;
            this.o = null;
            a = I(Vt);
            b = "h" == Gt(a) || "b" == Gt(a);
            c = !(N(),
            !1);
            b && c && (a.L = !0,
            a.F = new Zr);
            this.ua = !0
        }
    }
    ;
    var eI = function(a) {
        if (null == a)
            return !1;
        if ((oc || qc) && null !== a.webkitDisplayingFullscreen)
            return a.webkitDisplayingFullscreen;
        a = dI(a);
        var b = window.screen.availHeight || window.screen.height;
        return 0 >= (window.screen.availWidth || window.screen.width) - a.width && 42 >= b - a.height
    }
      , dI = function(a) {
        var b = {
            left: a.offsetLeft,
            top: a.offsetTop,
            width: a.offsetWidth,
            height: a.offsetHeight
        };
        try {
            "function" === typeof a.getBoundingClientRect && fi(Th(a), a) && (b = a.getBoundingClientRect())
        } catch (c) {}
        return b
    }
      , fI = function(a, b, c, d, e) {
        e = void 0 === e ? {} : e;
        if (a.ua) {
            d && null == e.opt_osdId && (e.opt_osdId = d);
            if (a.o)
                return a.o(b, c, e);
            if (a = d ? a.l.get(d) : KD.l)
                null == e.opt_fullscreen && (e.opt_fullscreen = eI(a)),
                null == e.opt_adElement && (e.opt_adElement = a);
            return Dw.zb(469, ab(gu, b, c, e)) || {}
        }
        return {}
    }
      , gI = function(a) {
        var b;
        0 !== KD.g ? b = I(Vt).l : b = a.C;
        return b
    }
      , hI = function(a, b) {
        var c = String(Math.floor(1E9 * Math.random()));
        a.l.set(c, b);
        0 !== KD.g && (I(Vt).A[c] = a);
        return c
    }
      , iI = function(a, b, c) {
        if (c)
            a.j.get(c) === b && a.j.delete(c);
        else {
            var d = [];
            a.j.forEach(function(e, f) {
                e === b && d.push(f)
            });
            d.forEach(a.j.delete, a.j)
        }
    }
      , au = function(a, b) {
        a = a.j.get(b);
        return "function" === typeof a ? a() : {}
    }
      , cI = function(a) {
        if ("function" === typeof window.Goog_AdSense_Lidar_getUrlSignalsArray) {
            var b = {};
            b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
            var c;
            null == (c = a.g) || KE(c, "activityMonitor", "pageSignals", b)
        }
    };
    aI.prototype.D = function(a) {
        var b = a.na
          , c = b.queryId
          , d = {}
          , e = null;
        d.eventId = b.eventId;
        switch (a.messageType) {
        case "getPageSignals":
            cI(this);
            break;
        case "reportVastEvent":
            e = b.vastEvent;
            a = b.osdId;
            var f = {};
            f.opt_fullscreen = b.isFullscreen;
            b.isOverlay && (f.opt_bounds = b.overlayBounds);
            d.viewabilityData = fI(this, e, c, a, f);
            var g;
            null == (g = this.g) || KE(g, "activityMonitor", "viewability", d);
            break;
        case "fetchAdTagUrl":
            c = {},
            c.eventId = b.eventId,
            a = b.osdId,
            ah(b, "isFullscreen") && (e = b.isFullscreen),
            ah(b, "loggingId") && (b = b.loggingId,
            c.loggingId = b,
            X.getInstance().report(43, {
                step: "beforeLookup",
                logid: b,
                time: Date.now()
            })),
            c.engagementString = jI(this, a, e),
            this.g && KE(this.g, "activityMonitor", "engagement", c)
        }
    }
    ;
    var jI = function(a, b, c) {
        var d, e = b ? null != (d = a.l.get(b)) ? d : null : KD.l;
        a = {};
        null != c && (a.fullscreen = c);
        c = "";
        try {
            c = Kv(function() {
                return e
            }, a)
        } catch (f) {
            c = f,
            c = "sdktle;" + Kh(c.name, 12) + ";" + Kh(c.message, 40)
        }
        return c
    };
    z("ima.common.getVideoMetadata", function(a) {
        return au(bI(), a)
    });
    z("ima.common.triggerViewabilityMeasurementUpdate", function(a, b) {
        eu(bI(), a, b)
    });
    var kI = function(a) {
        this.g = a;
        this.l = "";
        this.j = -1;
        this.A = !1
    }
      , mI = function(a, b) {
        if (0 <= a.j) {
            var c = null == b ? function() {}
            : b
              , d = function() {
                lI(a, c);
                a.g.removeEventListener("loadedmetadata", d, !1)
            };
            a.g.addEventListener("loadedmetadata", d, !1);
            a.g.src = a.l;
            a.g.load()
        } else
            null != b && b()
    }
      , lI = function(a, b) {
        var c = 0 < a.g.seekable.length;
        a.A ? c ? (a.g.currentTime = a.j,
        nI(a),
        b()) : setTimeout(function() {
            return void lI(a, b)
        }, 100) : (nI(a),
        b())
    }
      , nI = function(a) {
        a.j = -1;
        a.l = "";
        a.A = !1
    };
    var oI = new F(5,5)
      , pI = function(a) {
        S.call(this);
        this.g = a;
        this.o = this.aa = null;
        this.C = 0;
        this.K = this.D = this.T = this.loaded = this.I = !1;
        this.U = this.F = this.M = this.l = null;
        this.Z = !1;
        this.B = null;
        this.O = new kI(a);
        this.j = new tz(this);
        R(this, this.j);
        this.size = this.getSize();
        this.fullscreen = eI(this.g)
    };
    w(pI, S);
    l = pI.prototype;
    l.qe = function() {
        var a = this.O;
        a.l = a.g.currentSrc;
        a.A = 0 < a.g.seekable.length;
        a.j = a.g.ended ? -1 : a.g.currentTime
    }
    ;
    l.tc = function(a) {
        mI(this.O, a)
    }
    ;
    l.load = function(a, b) {
        var c = J.getInstance().g;
        c.O = !0;
        Dk(c);
        L("hvd_lc");
        FH(this);
        this.T = !1;
        if (b)
            if (L("hvd_ad"),
            b instanceof Ex) {
                if (L("hvd_mad"),
                c = b.getMediaUrl()) {
                    L("hvd_admu");
                    L("hvd_src");
                    this.g.src = c;
                    this.g.load();
                    return
                }
            } else if (b instanceof Dx) {
                L("hvd_dad");
                c = b.A;
                var d = b.j
                  , e = b.l
                  , f = b.g
                  , g = b.sb
                  , h = b.bb;
                if (c && d && e && f && g && h && (L("hvd_addu"),
                b.Ea)) {
                    L("hvd_admse");
                    b = e + '; codecs="' + g + '"';
                    f = f + '; codecs="' + h + '"';
                    if (OB() && OB() && MediaSource.isTypeSupported(b) && OB() && MediaSource.isTypeSupported(f)) {
                        L("hvd_ymse");
                        L("hvd_mse");
                        a = !1;
                        try {
                            -1 !== window.location.search.indexOf("goog_limavideo=true") && (a = !0)
                        } catch (k) {}
                        y.customElements ? a ? a = !0 : ((Ul(vm) || pn()) && X.getInstance().report(153, {
                            limvid: "vd"
                        }),
                        a = Ul(vm) || pn() ? !0 : !1) : a = !1;
                        a && this.g instanceof KC ? (this.g.gb = c,
                        this.g.ub = d) : (this.aa = new iD(this.g,[new hC(c,b,35E4,new AA), new hC(d,f,82E3,new AA)]),
                        R(this, this.aa),
                        a = this.g,
                        c = this.aa,
                        c.j || (c.j = th(c.g).toString()),
                        c = c.j,
                        a.src = c);
                        this.g.load();
                        return
                    }
                    L("hvd_nmse")
                }
            } else
                L("hvd_uad");
        a ? (L("hvd_src"),
        this.g.src = a) : L("hvd_vn");
        this.g.load()
    }
    ;
    l.setVolume = function(a) {
        this.g.volume = Math.max(a, 0);
        this.g.muted = 0 === a ? !0 : !1
    }
    ;
    l.Xd = function(a) {
        this.g.style.left = String(a.left) + "px";
        this.g.style.top = String(a.top) + "px";
        this.g.style.width = String(a.width) + "px";
        this.g.style.height = String(a.height) + "px"
    }
    ;
    l.Yd = function() {
        this.g.style.width = "100%";
        this.g.style.height = "100%";
        this.g.style.left = "0";
        this.g.style.right = "0"
    }
    ;
    l.getVolume = function() {
        return this.g.muted ? 0 : this.g.volume
    }
    ;
    var EH = function(a) {
        a.Z = !1;
        a.T || Bb() ? (a.K = !1,
        a.l = a.g.play(),
        null != a.l && (a.M = null,
        a.l.then(function() {
            a.l = null;
            a.Oe(a.M);
            a.M = null
        }).catch(function(b) {
            a.l = null;
            var c = "";
            null != b && null != b.name && (c = b.name);
            "AbortError" === c || "NotAllowedError" === c ? a.dispatchEvent("autoplayDisallowed") : a.W()
        }))) : a.K = !0
    };
    l = pI.prototype;
    l.pause = function() {
        null == this.l && (this.Z = !0,
        this.g.pause())
    }
    ;
    l.getCurrentTime = function() {
        return this.g.currentTime
    }
    ;
    l.getDuration = function() {
        return isNaN(this.g.duration) ? -1 : this.g.duration
    }
    ;
    l.getSize = function() {
        return new F(this.g.offsetWidth,this.g.offsetHeight)
    }
    ;
    l.N = function() {
        this.U && Wy(this.U);
        DH(this);
        S.prototype.N.call(this)
    }
    ;
    var DH = function(a) {
        null != a.o && (BG(a.o),
        a.o = null);
        null != a.F && a.F.V();
        xz(a.j);
        FH(a)
    }
      , FH = function(a) {
        a.loaded = !1;
        a.D = !1;
        a.I = !1;
        a.K = !1;
        a.C = 0;
        a.l = null;
        a.M = null;
        hq(a.B)
    };
    pI.prototype.Qa = function(a) {
        this.dispatchEvent(a.type)
    }
    ;
    var rI = function(a) {
        if (!a.D) {
            a.D = !0;
            a.dispatchEvent("start");
            try {
                if ((Ul(vm) || pn()) && y.customElements) {
                    var b = y.customElements.get("lima-video");
                    a.g instanceof b ? X.getInstance().report(153, {
                        limvid: "limastart"
                    }) : X.getInstance().report(153, {
                        limvid: "videostart"
                    })
                }
            } catch (c) {
                X.getInstance().report(153, {
                    limvid: "startfail"
                })
            }
            b = "function" === typeof a.g.getAttribute && null != a.g.getAttribute("playsinline");
            b = void 0 === b ? !1 : b;
            (!cz() && !dz(10) || !b && (mE.getInstance(),
            !1) ? (mE.getInstance(),
            qb(vb(), "Xbox")) || (oc || qc ? 0 : (!nc || nc && bz(az, 4)) && (Dp() ? (mE.getInstance(),
            !1) : !oE())) : 1) || !nc || nc && bz(az, 3) || (oc || qc) && !dz(4) || qI(a)
        }
    };
    l = pI.prototype;
    l.Gg = function() {
        this.T = !0;
        this.K && EH(this);
        this.K = !1;
        sI(this)
    }
    ;
    l.Fg = function() {
        this.loaded || (this.loaded = !0,
        this.dispatchEvent("loaded"))
    }
    ;
    l.Oe = function(a) {
        null != this.l ? this.M = a : (this.dispatchEvent("play"),
        rc || cz() || Ac || rI(this))
    }
    ;
    l.Jg = function(a) {
        if (!this.D && (rc || cz() || Ac)) {
            if (0 >= this.getCurrentTime())
                return;
            if (Ac && this.g.ended && 1 === this.getDuration()) {
                this.W(a);
                return
            }
            rI(this)
        }
        if (rc || qb(vb(), "Nintendo WiiU")) {
            if (1.5 < this.getCurrentTime() - this.C) {
                this.I = !0;
                this.g.currentTime = this.C;
                return
            }
            this.I = !1;
            this.getCurrentTime() > this.C && (this.C = this.getCurrentTime())
        }
        this.dispatchEvent("timeUpdate")
    }
    ;
    l.Lg = function() {
        this.dispatchEvent("volumeChange")
    }
    ;
    l.Ig = function() {
        if (this.D && rc && !this.Z && (2 > tI(this) || this.I)) {
            this.B = new rv(250);
            this.j.listen(this.B, "tick", this.Ha);
            this.B.start();
            var a = !0
        } else
            a = !1;
        a || this.l || this.dispatchEvent("pause")
    }
    ;
    l.Eg = function() {
        var a = !0;
        if (rc || qb(vb(), "Nintendo WiiU"))
            a = this.C >= this.g.duration - 1.5;
        !this.I && a && this.dispatchEvent("end")
    }
    ;
    var qI = function(a) {
        a.dispatchEvent("beginFullscreen")
    };
    pI.prototype.ga = function() {
        this.dispatchEvent("endFullscreen")
    }
    ;
    pI.prototype.W = function() {
        this.dispatchEvent("error")
    }
    ;
    pI.prototype.ka = function() {
        this.dispatchEvent("click")
    }
    ;
    var sI = function(a) {
        a.g instanceof HTMLElement && (a.U = Vy(a.g, oI),
        a.U.then(function(b) {
            a.Ca() || K(J.getInstance(), "ps", b.width + "x" + b.height)
        }))
    };
    pI.prototype.Ia = function() {
        var a = this.getSize()
          , b = eI(this.g);
        if (a.width !== this.size.width || a.height !== this.size.height)
            !this.fullscreen && b ? qI(this) : this.fullscreen && !b && this.ga(),
            this.size = a,
            this.fullscreen = b
    }
    ;
    pI.prototype.Ha = function() {
        if (!this.g.ended && this.g.paused && (rc || Bc ? this.g.currentTime < this.g.duration : 1)) {
            var a = this.g.duration - this.g.currentTime
              , b = tI(this);
            0 < b && (2 <= b || 2 > a) && (hq(this.B),
            EH(this))
        } else
            hq(this.B)
    }
    ;
    var tI = function(a) {
        var b;
        a: {
            for (b = a.g.buffered.length - 1; 0 <= b; ) {
                if (a.g.buffered.start(b) <= a.g.currentTime) {
                    b = a.g.buffered.end(b);
                    break a
                }
                b--
            }
            b = 0
        }
        return b - a.g.currentTime
    };
    pI.prototype.Ra = function() {
        X.getInstance().report(139);
        qI(this)
    }
    ;
    var xI = function(a) {
        if (a instanceof uI || a instanceof vI || a instanceof wI)
            return a;
        if ("function" == typeof a.next)
            return new uI(function() {
                return a
            }
            );
        if ("function" == typeof a[Symbol.iterator])
            return new uI(function() {
                return a[Symbol.iterator]()
            }
            );
        if ("function" == typeof a.Cb)
            return new uI(function() {
                return a.Cb()
            }
            );
        throw Error("Not an iterator or iterable.");
    }
      , uI = function(a) {
        this.g = a
    };
    uI.prototype.Cb = function() {
        return new vI(this.g())
    }
    ;
    uI.prototype[Symbol.iterator] = function() {
        return new wI(this.g())
    }
    ;
    uI.prototype.j = function() {
        return new wI(this.g())
    }
    ;
    var vI = function(a) {
        this.g = a
    };
    w(vI, Vq);
    vI.prototype.next = function() {
        return this.g.next()
    }
    ;
    vI.prototype[Symbol.iterator] = function() {
        return new wI(this.g)
    }
    ;
    vI.prototype.j = function() {
        return new wI(this.g)
    }
    ;
    var wI = function(a) {
        uI.call(this, function() {
            return a
        });
        this.l = a
    };
    w(wI, uI);
    wI.prototype.next = function() {
        return this.l.next()
    }
    ;
    var yI = function(a, b) {
        this.j = {};
        this.g = [];
        this.l = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof yI)
                for (c = a.Ic(),
                d = 0; d < c.length; d++)
                    this.set(c[d], a.get(c[d]));
            else
                for (d in a)
                    this.set(d, a[d])
    };
    l = yI.prototype;
    l.Gb = function() {
        zI(this);
        for (var a = [], b = 0; b < this.g.length; b++)
            a.push(this.j[this.g[b]]);
        return a
    }
    ;
    l.Ic = function() {
        zI(this);
        return this.g.concat()
    }
    ;
    l.has = function(a) {
        return AI(this.j, a)
    }
    ;
    l.isEmpty = function() {
        return 0 == this.size
    }
    ;
    l.clear = function() {
        this.j = {};
        this.l = this.size = this.g.length = 0
    }
    ;
    l.remove = function(a) {
        return this.delete(a)
    }
    ;
    l.delete = function(a) {
        return AI(this.j, a) ? (delete this.j[a],
        --this.size,
        this.l++,
        this.g.length > 2 * this.size && zI(this),
        !0) : !1
    }
    ;
    var zI = function(a) {
        if (a.size != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length; ) {
                var d = a.g[b];
                AI(a.j, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.size != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length; )
                d = a.g[b],
                AI(e, d) || (a.g[c++] = d,
                e[d] = 1),
                b++;
            a.g.length = c
        }
    };
    l = yI.prototype;
    l.get = function(a, b) {
        return AI(this.j, a) ? this.j[a] : b
    }
    ;
    l.set = function(a, b) {
        AI(this.j, a) || (this.size += 1,
        this.g.push(a),
        this.l++);
        this.j[a] = b
    }
    ;
    l.forEach = function(a, b) {
        for (var c = this.Ic(), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    l.keys = function() {
        return xI(this.Cb(!0)).j()
    }
    ;
    l.values = function() {
        return xI(this.Cb(!1)).j()
    }
    ;
    l.entries = function() {
        var a = this;
        return Oy(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    }
    ;
    l.Cb = function(a) {
        zI(this);
        var b = 0
          , c = this.l
          , d = this
          , e = new Vq;
        e.next = function() {
            if (c != d.l)
                throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length)
                return Wq;
            var f = d.g[b++];
            return {
                value: a ? f : d.j[f],
                done: !1
            }
        }
        ;
        return e
    }
    ;
    var AI = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var CI = function() {
        S.call(this);
        this.currentTime = 0;
        this.duration = NaN;
        this.l = !0;
        this.volume = 1;
        this.muted = !1;
        this.C = 1;
        this.playbackRate = 0;
        this.j = this.g = this.F = null;
        this.buffered = new BI;
        this.D = new BI;
        this.B = "";
        this.tagName = "VIDEO";
        this.height = this.width = 0;
        this.canPlayType = function() {
            return ""
        }
        ;
        this.o = new tz(this);
        R(this, this.o);
        var a = ID(KD);
        a && (this.duration = FD(a))
    };
    w(CI, S);
    var DI = function() {
        var a = ["video/mp4"]
          , b = ["video/ogg"]
          , c = new CI;
        c.canPlayType = function(d) {
            return a.includes(d) ? "probably" : b.includes(d) ? "maybe" : ""
        }
        ;
        return c
    };
    l = CI.prototype;
    l.pause = function() {
        if (!this.l) {
            var a;
            null == (a = this.F) || a.stop();
            this.l = !0;
            this.dispatchEvent("timeupdate");
            this.dispatchEvent("pause")
        }
    }
    ;
    l.load = function() {
        this.l = !0;
        this.dispatchEvent("loadstart");
        var a;
        isNaN(this.duration) ? a = 10 + 20 * Math.random() : a = this.duration;
        this.duration = Number(a);
        this.dispatchEvent("durationchange");
        a = this.D;
        a.g.push(new EI(this.duration));
        a.length = a.g.length;
        a = this.buffered;
        a.g.push(new EI(this.duration));
        a.length = a.g.length;
        this.dispatchEvent("loadedmetadata");
        0 < this.currentTime && this.dispatchEvent("timeupdate");
        this.dispatchEvent("loadeddata");
        this.dispatchEvent("canplay");
        this.dispatchEvent("canplaythrough");
        this.dispatchEvent("progress");
        this.playbackRate = this.C
    }
    ;
    l.setVolume = function(a) {
        this.volume = a;
        this.dispatchEvent("volumechange")
    }
    ;
    l.setAttribute = function(a, b) {
        null != a && FI.set(a, b)
    }
    ;
    l.getAttribute = function(a) {
        return FI.get(a)
    }
    ;
    l.Kg = function(a) {
        var b = null
          , c = null;
        switch (a.type) {
        case "loadeddata":
            b = "Loaded";
            break;
        case "playing":
            b = "Playing";
            c = "#00f";
            break;
        case "pause":
            b = "Paused";
            break;
        case "ended":
            b = "Ended",
            c = "#000"
        }
        b && this.j && (this.j.innerText = b);
        c && this.g && (this.g.style.backgroundColor = c)
    }
    ;
    da.Object.defineProperties(CI.prototype, {
        src: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.B
            },
            set: function(a) {
                this.B = a
            }
        }
    });
    var FI = new yI
      , EI = function(a) {
        this.startTime = 0;
        this.endTime = a
    }
      , BI = function() {
        this.length = 0;
        this.g = []
    };
    BI.prototype.start = function(a) {
        return this.g[a].startTime
    }
    ;
    BI.prototype.end = function(a) {
        return this.g[a].endTime
    }
    ;
    var HI = function(a) {
        P.call(this);
        this.A = a;
        this.l = this.g = null;
        this.j = GI(this);
        this.g = ci("DIV", {
            style: "display:none;"
        });
        this.A.appendChild(this.g);
        this.g.appendChild(this.j);
        this.l = ci("DIV", {
            style: "position:absolute;width:100%;height:100%;left:0px;top:0px"
        });
        this.g.appendChild(this.l);
        yC(function() {
            K(J.getInstance(), "haob", "1")
        })
    };
    w(HI, P);
    HI.prototype.initialize = function() {
        this.j && this.j.load()
    }
    ;
    HI.prototype.N = function() {
        di(this.g);
        P.prototype.N.call(this)
    }
    ;
    var GI = function(a) {
        var b = ID(KD);
        if (ED(b, "useVideoElementFake"))
            a = DI(),
            b = ci("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
            }),
            Object.assign(b, a),
            a.g = ci("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
            }),
            a.j = ci("P", {
                style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
            }),
            a.g.appendChild(a.j),
            b.appendChild(a.g),
            a.o.listen(a, ["loadeddata", "playing", "pause", "ended"], a.Kg),
            a = b;
        else {
            b = !1;
            try {
                -1 !== window.location.search.indexOf("goog_limavideo=true") && (b = !0)
            } catch (c) {}
            if (II(a, b)) {
                b && console.log("force lima video in wrapper");
                a = null;
                try {
                    a = new KC
                } catch (c) {
                    a = ci("lima-video"),
                    (Ul(vm) || pn()) && X.getInstance().report(153, {
                        limvid: "firefail"
                    })
                }
                a.style.backgroundColor = "#000";
                a.style.height = "100%";
                a.style.width = "100%";
                a.style.position = "absolute";
                a.style.left = "0";
                a.style.top = "0"
            } else
                a = ci("VIDEO", {
                    style: "background-color:#000;position:absolute;width:100%;height:100%;left:0;top:0;",
                    title: "Advertisement".toString()
                })
        }
        a.setAttribute("webkit-playsinline", "true");
        a.setAttribute("playsinline", "true");
        return a
    }
      , II = function(a, b) {
        if (!y.customElements)
            return !1;
        if (b)
            return !0;
        if (Cb() && Th(a.A) !== document)
            return !1;
        (Ul(vm) || pn()) && X.getInstance().report(153, {
            limvid: "vw"
        });
        return Ul(vm) || pn() ? !0 : !1
    };
    HI.prototype.Vb = function() {
        return this.l
    }
    ;
    HI.prototype.kb = function() {
        var a = this.g;
        null != a && (a.style.display = "none")
    }
    ;
    var MI = function(a, b, c) {
        var d = a && a.getRootNode ? a.getRootNode({
            composed: !0
        }) : a;
        if (null == a || !fi(Th(d), d))
            throw ZE(YE, null, "containerElement", "element");
        this.j = b;
        this.O = qE(this.j || null);
        this.M = ez(this.j || null);
        this.K = String(Math.floor(1E9 * Math.random()));
        this.D = !1;
        this.ed = a;
        this.I = null != b;
        KD.g = 2;
        this.J = JI(b ? b : null);
        d = ci("DIV", {
            style: "position:absolute"
        });
        a.insertBefore(d, a.firstChild);
        this.A = d;
        this.g = null;
        KI(this) && b ? a = new pI(b) : (this.g = new HI(this.A),
        a = new pI(this.g.j));
        this.da = a;
        this.za = this.l = null;
        if (a = this.g && KD.A)
            a = !(KI(this) || oc || qc || Ep() || nc && (!nc || !bz(az, 4)));
        a && (this.l = new HI(this.A),
        this.za = new pI(this.l.j));
        this.o = c || null;
        this.F = null != this.o;
        KI(this) && b ? "function" !== typeof b.getBoundingClientRect ? (c = this.A,
        KD.l = c) : c = b : c = this.A;
        this.C = c;
        this.B = new XH(this.A,this);
        this.size = new F(0,0);
        this.L = "";
        b && (b = ty(b.src || b.currentSrc),
        200 > b.toString().length ? this.L = b.toString() : 200 > b.j.length && (this.L = b.j));
        this.ke = new Map;
        this.ke.set("videoDisplay1", this.da);
        this.za && this.ke.set("videoDisplay2", this.za);
        LI(this) && !KD.j && console.warn("Custom media element must be a <video> or <audio> element. Viewability/audibility measurement will fail.")
    };
    l = MI.prototype;
    l.initialize = function() {
        this.D = !0;
        null != this.g && this.g.initialize();
        null != this.l && this.l.initialize()
    }
    ;
    l.ua = function() {
        return this.D
    }
    ;
    l.destroy = function() {
        var a = this;
        this.j = null;
        hq(this.g);
        hq(this.l);
        hq(this.B);
        this.da.tc(function() {
            return hq(a.da)
        });
        null != this.za && this.za.tc(function() {
            return hq(a.za)
        });
        di(this.A)
    }
    ;
    l.ld = function() {
        if (null != this.g) {
            var a = this.g.g;
            null != a && (a.style.display = "block")
        }
    }
    ;
    l.uc = function(a) {
        this.da !== a && this.g && this.l && this.za && (a.setVolume(this.da.getVolume()),
        a = this.da,
        this.da = this.za,
        this.za = a,
        a = this.g,
        this.g = this.l,
        this.l = a,
        this.l.kb(),
        this.B.uc(this.da))
    }
    ;
    l.kb = function() {
        null != this.g && this.g.kb()
    }
    ;
    l.Vb = function() {
        return this.F && this.o ? this.o : null != this.g ? this.g.Vb() : null
    }
    ;
    var KI = function(a) {
        return pE(a.J) && a.I
    }
      , LI = function(a) {
        var b = ["VIDEO", "AUDIO"], c;
        return KI(a) && !!a.j && !b.includes(null == (c = a.j.tagName) ? void 0 : c.toUpperCase())
    };
    MI.prototype.getSize = function() {
        return this.size
    }
    ;
    var JI = function(a) {
        return null != a && "function" === typeof a.getAttribute && null != a.getAttribute("playsinline") ? !0 : !1
    };
    MI.prototype.Xd = function(a) {
        this.da.Xd(a)
    }
    ;
    MI.prototype.Yd = function() {
        this.da.Yd()
    }
    ;
    MI.prototype.destroy = MI.prototype.destroy;
    MI.prototype.initialize = MI.prototype.initialize;
    var NI = {
        AD_LOAD: "adLoadError",
        AD_PLAY: "adPlayError"
    }
      , OI = function(a) {
        var b = Error.call(this);
        this.message = b.message;
        "stack"in b && (this.stack = b.stack);
        this.data = a
    };
    w(OI, Error);
    l = OI.prototype;
    l.getInnerError = function() {
        var a = this.data.innerError;
        return a instanceof Object ? new OI(a) : null != a ? Error(a) : null
    }
    ;
    l.getMessage = function() {
        return this.data.errorMessage
    }
    ;
    l.getErrorCode = function() {
        return this.data.errorCode
    }
    ;
    l.getVastErrorCode = function() {
        var a = this.getErrorCode();
        return 1E3 > a ? a : 900
    }
    ;
    l.getType = function() {
        return this.data.type
    }
    ;
    l.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (null != this.getInnerError() ? " Caused by: " + this.getInnerError() : "")
    }
    ;
    OI.prototype.getType = OI.prototype.getType;
    OI.prototype.getVastErrorCode = OI.prototype.getVastErrorCode;
    OI.prototype.getErrorCode = OI.prototype.getErrorCode;
    OI.prototype.getMessage = OI.prototype.getMessage;
    OI.prototype.getInnerError = OI.prototype.getInnerError;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error.AdError.Type", NI);
    var PI = {
        AD_ERROR: "adError"
    }
      , QI = function(a, b) {
        b = void 0 === b ? null : b;
        mu.call(this, "adError");
        this.error = a;
        this.g = b
    };
    w(QI, mu);
    QI.prototype.getError = function() {
        return this.error
    }
    ;
    QI.prototype.getUserRequestContext = function() {
        return this.g
    }
    ;
    QI.prototype.getUserRequestContext = QI.prototype.getUserRequestContext;
    QI.prototype.getError = QI.prototype.getError;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error_event.AdErrorEvent.Type", PI);
    var RI = {
        AD_CAN_PLAY: "adCanPlay",
        oh: "adStarted",
        CONTENT_PAUSE_REQUESTED: "contentPauseRequested",
        CONTENT_RESUME_REQUESTED: "contentResumeRequested",
        CLICK: "click",
        VIDEO_CLICKED: "videoClicked",
        VIDEO_ICON_CLICKED: "videoIconClicked",
        me: "engagedView",
        EXPANDED_CHANGED: "expandedChanged",
        STARTED: "start",
        AD_PROGRESS: "adProgress",
        AD_BUFFERING: "adBuffering",
        IMPRESSION: "impression",
        re: "measurable_impression",
        VIEWABLE_IMPRESSION: "viewable_impression",
        ne: "fully_viewable_audible_half_duration_impression",
        Df: "overlay_resize",
        Ef: "overlay_unmeasurable_impression",
        Ff: "overlay_unviewable_impression",
        Hf: "overlay_viewable_immediate_impression",
        Gf: "overlay_viewable_end_of_session_impression",
        Fh: "externalActivityEvent",
        PAUSED: "pause",
        RESUMED: "resume",
        FIRST_QUARTILE: "firstQuartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdQuartile",
        COMPLETE: "complete",
        DURATION_CHANGE: "durationChange",
        USER_CLOSE: "userClose",
        Ei: "userRecall",
        pi: "prefetched",
        LOADED: "loaded",
        ALL_ADS_COMPLETED: "allAdsCompleted",
        SKIPPED: "skip",
        Lf: "skipShown",
        LINEAR_CHANGED: "linearChanged",
        SKIPPABLE_STATE_CHANGED: "skippableStateChanged",
        AD_METADATA: "adMetadata",
        AD_BREAK_FETCH_ERROR: "adBreakFetchError",
        AD_BREAK_READY: "adBreakReady",
        LOG: "log",
        VOLUME_CHANGED: "volumeChange",
        VOLUME_MUTED: "mute",
        INTERACTION: "interaction",
        th: "companionBackfill",
        Ci: "trackingUrlPinged",
        Fi: "video_card_endcap_collapse",
        Gi: "video_card_endcap_dismiss",
        Hi: "video_card_endcap_impression",
        wh: "companionInitialized",
        vh: "companionImpression",
        uh: "companionClick",
        gi: "mediaUrlPinged",
        LOAD_START: "loadStart",
        ji: "navigationRequested"
    }
      , SI = function(a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? null : c;
        mu.call(this, a);
        this.ad = b;
        this.l = c
    };
    w(SI, mu);
    SI.prototype.getAd = function() {
        return this.ad
    }
    ;
    SI.prototype.getAdData = function() {
        return this.l
    }
    ;
    SI.prototype.getAdData = SI.prototype.getAdData;
    SI.prototype.getAd = SI.prototype.getAd;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_event.AdEvent.Type", RI);
    var TI = function(a, b) {
        b = void 0 === b ? null : b;
        SI.call(this, "adMetadata", a);
        this.g = b
    };
    w(TI, SI);
    TI.prototype.eg = function() {
        return this.g
    }
    ;
    TI.prototype.getAdCuePoints = TI.prototype.eg;
    var UI = function(a) {
        this.adBreakDuration = a.adBreakDuration;
        this.adPosition = a.adPosition;
        this.currentTime = a.currentTime;
        this.duration = a.duration;
        this.totalAds = a.totalAds
    };
    var VI = function(a, b) {
        S.call(this);
        this.l = a;
        this.B = b;
        this.j = this.l.currentTime;
        this.g = new rv(250);
        R(this, this.g);
        this.o = new tz(this);
        R(this, this.o);
        vz(this.o, this.g, "tick", this.C, !1, this)
    };
    w(VI, S);
    VI.prototype.vb = function() {
        return this.j
    }
    ;
    VI.prototype.start = function() {
        WI(this);
        this.g.start()
    }
    ;
    VI.prototype.stop = function() {
        this.g.stop()
    }
    ;
    VI.prototype.C = function() {
        var a = this.l.currentTime;
        a !== this.vb() && (this.j = a,
        WI(this))
    }
    ;
    var WI = function(a) {
        var b = {};
        b.currentTime = a.vb();
        KE(a.B, "contentTimeUpdate", "contentTimeUpdate", b)
    };
    var XI = lc && "srcdoc"in ai(document, "IFRAME")
      , YI = function(a, b) {
        a.open("text/html", "replace");
        Ih(a, Ak(String(b)));
        a.close()
    };
    var ZI = {
        rgb: !0,
        rgba: !0,
        alpha: !0,
        rect: !0,
        image: !0,
        "linear-gradient": !0,
        "radial-gradient": !0,
        "repeating-linear-gradient": !0,
        "repeating-radial-gradient": !0,
        "cubic-bezier": !0,
        matrix: !0,
        perspective: !0,
        rotate: !0,
        rotate3d: !0,
        rotatex: !0,
        rotatey: !0,
        steps: !0,
        rotatez: !0,
        scale: !0,
        scale3d: !0,
        scalex: !0,
        scaley: !0,
        scalez: !0,
        skew: !0,
        skewx: !0,
        skewy: !0,
        translate: !0,
        translate3d: !0,
        translatex: !0,
        translatey: !0,
        translatez: !0
    }
      , $I = function(a) {
        a = ob(a);
        if ("" == a)
            return null;
        var b = String(a.slice(0, 4)).toLowerCase();
        if (0 == ("url(" < b ? -1 : "url(" == b ? 0 : 1))
            return null;
        if (0 < a.indexOf("(")) {
            if (/"|'/.test(a))
                return null;
            b = /([\-\w]+)\(/g;
            for (var c; c = b.exec(a); )
                if (!(c[1].toLowerCase()in ZI))
                    return null
        }
        return a
    };
    function aJ(a, b) {
        a = y[a];
        return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
    }
    function bJ(a) {
        var b = y.CSSStyleDeclaration;
        return b && b.prototype && b.prototype[a] || null
    }
    aJ("Element", "attributes") || aJ("Node", "attributes");
    aJ("Element", "innerHTML") || aJ("HTMLElement", "innerHTML");
    aJ("Node", "nodeName");
    aJ("Node", "nodeType");
    aJ("Node", "parentNode");
    aJ("Node", "childNodes");
    aJ("HTMLElement", "style") || aJ("Element", "style");
    aJ("HTMLStyleElement", "sheet");
    var cJ = bJ("getPropertyValue")
      , dJ = bJ("setProperty");
    aJ("Element", "namespaceURI") || aJ("Node", "namespaceURI");
    function eJ(a, b, c, d) {
        if (a)
            return a.apply(b, d);
        if (ic && 10 > document.documentMode) {
            if (!b[c].call)
                throw Error("IE Clobbering detected");
        } else if ("function" != typeof b[c])
            throw Error("Clobbering detected");
        return b[c].apply(b, d)
    }
    ;var fJ = {
        "-webkit-border-horizontal-spacing": !0,
        "-webkit-border-vertical-spacing": !0
    }
      , hJ = function(a) {
        if (!a)
            return xh;
        var b = document.createElement("div").style;
        gJ(a).forEach(function(c) {
            var d = lc && c in fJ ? c : c.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
            0 != d.lastIndexOf("--", 0) && 0 != d.lastIndexOf("var", 0) && (c = eJ(cJ, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [c]) || "",
            c = $I(c),
            null != c && eJ(dJ, b, b.setProperty ? "setProperty" : "setAttribute", [d, c]))
        });
        return new wh(b.cssText || "",vh)
    }
      , gJ = function(a) {
        Ra(a) ? a = Zb(a) : (a = Zg(a),
        Vb(a, "cssText"));
        return a
    };
    var iJ = fa([""])
      , jJ = function(a, b, c) {
        S.call(this);
        this.j = a;
        this.o = b;
        this.D = c;
        this.g = null;
        this.F = "";
        this.I = Ch(iJ);
        this.K = 0;
        this.B = this.slot = this.l = null;
        this.C = ""
    };
    w(jJ, S);
    jJ.prototype.init = function(a) {
        this.C = a;
        a = "about:blank";
        ic && (a = "");
        this.l = ci("IFRAME", {
            src: a,
            allowtransparency: !0,
            background: "transparent",
            title: "Advertisement"
        });
        jp(this.l, {
            display: "none",
            width: "0",
            height: "0"
        });
        a = this.j.ed;
        a.appendChild(this.l);
        a = a.ownerDocument;
        a = a.defaultView || a.parentWindow;
        null == this.B && (this.B = new tz(this));
        this.B.listen(a, "message", this.M);
        a = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>loader = new VPAIDLoader(false, "' + (this.C + '");\x3c/script></body>');
        if (Bc || zc || jc) {
            var b = this.l.contentWindow;
            b && YI(b.document, a)
        } else
            b = this.l,
            XI ? (a = Ak(a),
            b.srcdoc = Ah(a)) : (b = b.contentWindow) && YI(b.document, a)
    }
    ;
    jJ.prototype.M = function(a) {
        try {
            var b = a.g.data;
            try {
                var c = JSON.parse(b)
            } catch (t) {
                return
            }
            var d = c.session;
            if (null != d && this.C === d)
                switch (c.type) {
                case "friendlyReady":
                    var e = kJ(this);
                    if (null != e) {
                        this.g = e;
                        this.F = e.currentSrc;
                        var f = e.style.cssText
                          , g = document.implementation.createHTMLDocument("").createElement("DIV");
                        g.style.cssText = f;
                        this.I = hJ(g.style);
                        this.K = e.currentTime
                    } else {
                        var h = this.j.ed
                          , k = "border: 0; margin: 0; padding: 0; position: absolute; "
                          , n = this.j.getSize();
                        k += "width:" + n.width + "px;";
                        k += "height:" + n.height + "px;";
                        this.g = ci("VIDEO", {
                            style: k,
                            autoplay: !0
                        });
                        h.appendChild(this.g)
                    }
                    var m = this.j.ed;
                    h = "border: 0; margin: 0; padding: 0;position: absolute; ";
                    var p = sp(this.g);
                    h += "width:" + p.width + "px;";
                    h += "height:" + p.height + "px;";
                    this.slot = ci("DIV", {
                        style: h
                    });
                    m.appendChild(this.slot);
                    try {
                        this.l.contentWindow.loader.initFriendly(this.g, this.slot)
                    } catch (t) {
                        lJ(this)
                    }
                    KE(this.o, "vpaid", "", b);
                    break;
                case "becameLinear":
                    this.g && !ji() && !ii() && jp(this.g, {
                        visibility: "visible"
                    });
                    KE(this.o, "vpaid", "", b);
                    break;
                case "becameNonlinear":
                    mJ(this);
                    KE(this.o, "vpaid", "", b);
                    break;
                case "startAd":
                    m = {};
                    if (this.g) {
                        k = this.g.paused;
                        var q = 0 < this.g.currentTime;
                        m.apl = q && !k ? "1" : "0";
                        m.ip = k ? "1" : "0";
                        m.iavp = q ? "1" : "0"
                    } else
                        m.apl = "n";
                    X.getInstance().report(99, m);
                    KE(this.o, "vpaid", "", b);
                    this.ld();
                    break;
                default:
                    KE(this.o, "vpaid", "", b)
                }
        } catch (t) {
            lJ(this)
        }
    }
    ;
    var lJ = function(a) {
        var b = {
            type: "error"
        };
        b.session = a.C;
        b = JSON.stringify(b);
        a.postMessage(b)
    };
    jJ.prototype.postMessage = function(a) {
        window.postMessage(a, "*")
    }
    ;
    var kJ = function(a) {
        return ("videoDisplayUnknown" === a.D ? a.j.da : a.j.ke.get(a.D)).O.g
    };
    jJ.prototype.ld = function() {
        null != kJ(this) && this.j.ld()
    }
    ;
    var mJ = function(a) {
        a.g && !ji() && !ii() && jp(a.g, {
            visibility: "hidden"
        })
    };
    jJ.prototype.N = function() {
        hq(this.B);
        this.B = null;
        di(this.slot);
        this.slot = null;
        di(this.l);
        this.l = null;
        var a = kJ(this);
        if (null != a) {
            var b = this.I;
            a.style.cssText = b instanceof wh && b.constructor === wh ? b.g : "type_error:SafeStyle";
            ji() || ii() ? (a.src = this.F,
            a.currentTime = this.K) : (a.removeAttribute("src"),
            this.j.kb())
        } else
            di(this.g),
            this.g = null;
        S.prototype.N.call(this)
    }
    ;
    var nJ = function(a, b) {
        P.call(this);
        this.j = a;
        this.l = b;
        this.g = new Map
    };
    w(nJ, P);
    var oJ = function(a, b) {
        try {
            var c = b.na
              , d = c.session;
            switch (c.vpaidEventType) {
            case "createFriendlyIframe":
                b = "videoDisplayUnknown";
                c.videoDisplayName && (b = c.videoDisplayName);
                var e = c.session
                  , f = new jJ(a.j,a.l,b);
                a.g.set(e, f);
                f.init(e);
                break;
            case "vpaidNonLinear":
                var g = a.g.get(d);
                g && mJ(g);
                break;
            case "destroyFriendlyIframe":
                var h = a.g.get(d);
                h && (h.V(),
                a.g.delete(d))
            }
        } catch (k) {
            X.getInstance().report(125, {
                msg: k.message
            })
        }
    };
    nJ.prototype.N = function() {
        this.g.forEach(function(a) {
            a.V()
        })
    }
    ;
    var pJ = function(a) {
        this.H = C(a)
    };
    w(pJ, E);
    pJ.prototype.getValue = function() {
        return D(this, 1)
    }
    ;
    pJ.prototype.getVersion = function() {
        return Qf(this, 5)
    }
    ;
    var qJ = Ig(pJ);
    var rJ = function() {
        this.g = window
    }
      , sJ = function(a, b, c, d) {
        if (d) {
            var e = Of(c, 2) - Date.now() / 1E3;
            e = {
                Rc: Math.max(e, 0),
                path: D(c, 3),
                domain: D(c, 4),
                Xe: !1
            };
            c = c.getValue();
            a = a.g;
            Lf(d, 5) && cl(a) && (new $k(a.document)).set(b, c, e)
        }
    }
      , tJ = function(a, b, c) {
        if (c && dl(b, c, a.g)) {
            var d = a.g.location.hostname;
            if ("localhost" === d)
                d = ["localhost"];
            else if (d = d.split("."),
            2 > d.length)
                d = [];
            else {
                for (var e = [], f = 0; f < d.length - 1; ++f)
                    e.push(d.slice(f).join("."));
                d = e
            }
            d = u(d);
            for (var g = d.next(); !g.done; g = d.next())
                e = b,
                f = a.g,
                g = g.value,
                Lf(c, 5) && cl(f) && (new $k(f.document)).remove(e, "/", g)
        }
    };
    var uJ = function() {
        this.g = [];
        this.j = []
    };
    l = uJ.prototype;
    l.isEmpty = function() {
        return 0 === this.g.length && 0 === this.j.length
    }
    ;
    l.clear = function() {
        this.g = [];
        this.j = []
    }
    ;
    l.contains = function(a) {
        return Ub(this.g, a) || Ub(this.j, a)
    }
    ;
    l.remove = function(a) {
        var b = this.g;
        b: {
            var c = b.length - 1;
            0 > c && (c = Math.max(0, b.length + c));
            if ("string" === typeof b)
                c = "string" !== typeof a || 1 != a.length ? -1 : b.lastIndexOf(a, c);
            else {
                for (; 0 <= c; c--)
                    if (c in b && b[c] === a)
                        break b;
                c = -1
            }
        }
        0 <= c ? (Wb(b, c),
        b = !0) : b = !1;
        return b || Vb(this.j, a)
    }
    ;
    l.Gb = function() {
        for (var a = [], b = this.g.length - 1; 0 <= b; --b)
            a.push(this.g[b]);
        var c = this.j.length;
        for (b = 0; b < c; ++b)
            a.push(this.j[b]);
        return a
    }
    ;
    var Z = function(a, b, c, d, e, f, g, h) {
        S.call(this);
        var k = this;
        this.I = a;
        this.g = b;
        this.adTagUrl = c;
        this.ga = d;
        this.Ra = e;
        this.D = g;
        this.Qa = h;
        this.o = new iH;
        this.M = !1;
        this.volume = 1;
        this.ga = d;
        this.aa = -1;
        this.C = this.l = this.j = null;
        this.B = new VI({
            currentTime: 0
        },this.D);
        this.F = new uJ;
        this.ka = this.U = !1;
        this.W = new Map;
        this.Z = this.Ha = !1;
        this.Ia = new nJ(b,g);
        R(this, this.Ia);
        this.K = f && null != this.g.o;
        this.O = function() {
            var n = k.g.da
              , m = n.getCurrentTime();
            n = n.getDuration();
            return {
                currentTime: m,
                duration: n,
                isPlaying: !0,
                volume: k.volume
            }
        }
        ;
        this.T = new tz(this);
        this.T.listen(this.D, "adsManager", this.Eb)
    };
    w(Z, S);
    Z.prototype.Eb = function(a) {
        var b = this
          , c = a.messageType
          , d = a.na
          , e = {};
        switch (c) {
        case "error":
            vJ(this);
            wJ(this, d);
            break;
        case "contentPauseRequested":
            X.getInstance().report(130);
            xJ(this);
            this.B.stop();
            yJ(this, c, d);
            break;
        case "contentResumeRequested":
            zJ(this, function() {
                yJ(b, c, d)
            });
            break;
        case "remainingTime":
            this.aa = d.remainingTime;
            break;
        case "skip":
            yJ(this, c, d);
            break;
        case "log":
            yJ(this, c, d, d.logData);
            break;
        case "companionBackfill":
            a = Oa("window.google_show_companion_ad");
            null != a && a();
            break;
        case "skipShown":
            this.M = !0;
            yJ(this, c, d);
            break;
        case "interaction":
            yJ(this, c, d, d.interactionData);
            break;
        case "vpaidEvent":
            oJ(this.Ia, a);
            break;
        case "skippableStateChanged":
            e = d.adData;
            null != e.skippable && (this.M = e.skippable);
            yJ(this, c, d);
            break;
        case "volumeChange":
            e = d.adData;
            null != e && "number" === typeof e.volume && (this.volume = e.volume);
            yJ(this, c, d);
            break;
        case "firstQuartile":
            yJ(this, zE.firstQuartile, d);
            yJ(this, c, d);
            break;
        case "thirdQuartile":
            yJ(this, zE.thirdQuartile, d);
            yJ(this, c, d);
            break;
        case "updateGfpCookie":
            AJ(this, d);
            break;
        default:
            yJ(this, c, d)
        }
    }
    ;
    var yJ = function(a, b, c, d) {
        if (null == c.companions) {
            var e = a.W.get(c.adId);
            c.companions = null != e ? e : []
        }
        var f = c.adData;
        if (e = null == f ? null : new Y(f))
            a.j = e;
        switch (b) {
        case "adBreakReady":
        case "mediaUrlPinged":
            b = new SI(b,null,c);
            break;
        case "adMetadata":
            b = null;
            null != c.adCuePoints && (b = new hH(c.adCuePoints));
            b = new TI(e,b);
            break;
        case "allAdsCompleted":
            a.j = null;
            a.Ha = !0;
            b = new SI(b,e);
            break;
        case "contentPauseRequested":
            a.Z = !1;
            b = new SI(b,e);
            break;
        case "contentResumeRequested":
            a.j = null;
            a.Z = !0;
            b = new SI(b,e);
            break;
        case "loaded":
            a.aa = e.getDuration();
            a.M = !1;
            rE() && (d = a.I,
            c = a.Ra,
            d.j.set(gH(e), a.O),
            gI(d) && fI(d, "loaded", gH(e), c));
            b = new SI(b,e,f);
            break;
        case "start":
            a.W.set(c.adId, c.companions);
            null != a.g.Vb() && (null == a.l ? (a.l = new xG,
            a.T.listen(a.l, "click", a.Hg)) : BG(a.l),
            zG(a.l, a.g.Vb()));
            b = new SI(b,e);
            break;
        case "complete":
            null != a.l && BG(a.l);
            rE() && iI(a.I, a.O, gH(e));
            a.j = null;
            a.W.delete(c.adId);
            b = new SI(b,e);
            break;
        case "log":
            c = null;
            null != d && null != d.type ? (f = d.type,
            f = "adLoadError" === f || "adPlayError" === f) : f = !1;
            f && (c = {
                adError: new OI(d)
            });
            b = new SI(b,e,c);
            break;
        case "interaction":
            b = new SI(b,e,d);
            break;
        case "adProgress":
            b = new SI(b,e,new UI(c));
            break;
        default:
            b = new SI(b,e)
        }
        a.dispatchEvent(b);
        a.Ha && a.Z && a.destroy()
    }
      , wJ = function(a, b) {
        var c = new QI(new OI(b));
        a.U ? (a.dispatchEvent(c),
        rE() && a.j && iI(a.I, a.O, gH(a.j)),
        a.j = null) : a.F.j.push(c);
        a = {
            error: b.errorCode,
            vis: xk(document)
        };
        X.getInstance().report(7, a)
    }
      , BJ = function(a, b, c) {
        KE(a.D, "adsManager", b, c)
    }
      , zJ = function(a, b) {
        X.getInstance().report(131);
        vJ(a, b);
        a.Ca() || a.B.start()
    }
      , xJ = function(a) {
        var b = a.g.da;
        KI(a.g) && a.o.restoreCustomPlaybackStateOnAdBreakComplete && null != b.qe && b.qe()
    }
      , vJ = function(a, b) {
        var c = a.g.da;
        KI(a.g) && a.o.restoreCustomPlaybackStateOnAdBreakComplete && null != c.tc ? c.tc(b) : b && b()
    };
    l = Z.prototype;
    l.configureAdsManager = function(a, b) {
        this.C = a;
        null != a.currentTime && (this.B = new VI(a,this.D),
        this.B.start());
        null != b && (this.o = CJ(b))
    }
    ;
    l.init = function(a, b, c, d) {
        if (this.F.isEmpty()) {
            var e = this.g
              , f = null;
            e.j && null == d && (f = {
                vd: "setnull"
            });
            e.j && e.j === d && (f = {
                vd: "match"
            });
            if (e.j && e.j !== d) {
                f = qE(d || null);
                var g = ez(d || null);
                f = {
                    vd: "diff",
                    oc: e.O,
                    nc: f,
                    oi: e.M,
                    ni: g
                }
            }
            !e.j && d && (f = {
                vd: "new"
            });
            f && (f.custVid = e.K,
            X.getInstance().report(93, f));
            null != d && (e.J = JI(d),
            pE(e.J) && (e.I = !0,
            hq(e.g),
            hq(e.l),
            hq(e.za),
            e.g = null,
            e.l = null,
            e.za = null,
            hq(e.da),
            e.da = new pI(d),
            "function" !== typeof d.getBoundingClientRect ? (e.C = e.A,
            KD.l = e.C) : e.C = d,
            e.B.uc(e.da)));
            this.U = !0;
            this.resize(a, b, c);
            d = jH(this.o, this.K);
            e = {};
            a = (e.adsRenderingSettings = d,
            e.width = a,
            e.height = b,
            e.viewMode = c,
            e);
            BJ(this, "init", a)
        } else {
            for (; !this.F.isEmpty(); )
                b = a = this.F,
                0 === b.g.length && (b.g = b.j,
                b.g.reverse(),
                b.j = []),
                a = a.g.pop(),
                this.dispatchEvent(a);
            this.V()
        }
    }
    ;
    l.isCustomPlaybackUsed = function() {
        return KI(this.g)
    }
    ;
    l.isCustomClickTrackingUsed = function() {
        return this.K
    }
    ;
    l.getRemainingTime = function() {
        return this.aa
    }
    ;
    l.getAdSkippableState = function() {
        return this.M
    }
    ;
    l.discardAdBreak = function() {
        BJ(this, "discardAdBreak")
    }
    ;
    l.updateAdsRenderingSettings = function(a) {
        if (null != a) {
            a = CJ(a);
            var b = this.o.bitrate
              , c = a.bitrate;
            X.getInstance().report(96, {
                init: this.U ? "1" : "0",
                start: this.ka ? "1" : "0",
                old: b,
                "new": c,
                changed: b !== c ? "1" : "0"
            });
            this.o = a;
            a = jH(this.o, this.K);
            b = {};
            a = (b.adsRenderingSettings = a,
            b);
            BJ(this, "updateAdsRenderingSettings", a)
        }
    }
    ;
    l.skip = function() {
        BJ(this, "skip")
    }
    ;
    l.start = function() {
        if (this.adTagUrl) {
            (oc || qc) && X.getInstance().report(50, {
                customPlayback: KI(this.g)
            });
            this.g.ua() || X.getInstance().report(26, {
                adtagurl: this.adTagUrl,
                customPlayback: KI(this.g)
            });
            yp(this.g.A) && X.getInstance().report(30, {
                adtagurl: this.adTagUrl,
                customPlayback: KI(this.g)
            });
            var a = this.g.o, b = this.g.A, c;
            if (c = a && b && !yp(a))
                a = dI(a),
                b = dI(b),
                c = 0 < a.width && 0 < a.height && 0 < b.width && 0 < b.height && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
            b = c;
            X.getInstance().report(31, {
                adtagurl: this.adTagUrl,
                customPlayback: KI(this.g),
                covers: b
            })
        }
        if (!this.g.ua() && !KI(this.g))
            throw ZE(XE);
        b = this.g;
        b.F = this.K && null != b.o;
        this.g.B.g.style.opacity = "1";
        if (null != this.C && 1 === this.getVolume()) {
            var d, e;
            if ("boolean" === typeof (null == (d = this.C) ? void 0 : d.muted) && (null == (e = this.C) ? 0 : e.muted))
                this.setVolume(0);
            else {
                var f;
                if ("number" === typeof (null == (f = this.C) ? void 0 : f.volume)) {
                    var g;
                    d = null == (g = this.C) ? void 0 : g.volume;
                    if (0 <= d && 1 >= d) {
                        var h;
                        this.setVolume(null == (h = this.C) ? void 0 : h.volume)
                    }
                }
            }
        }
        this.ka = !0;
        BJ(this, "start")
    }
    ;
    l.Hg = function() {
        if (!this.o.disableClickThrough && null != this.j) {
            var a = this.j.data.clickThroughUrl;
            null != a && Ly(a, this.j.data.attributionParams)
        }
    }
    ;
    l.resize = function(a, b, c) {
        var d = this.g
          , e = d.A;
        null != e && (-1 === a ? (e.style.right = "0",
        e.style.left = "0") : e.style.width = a + "px",
        -1 === b ? (e.style.bottom = "0",
        e.style.top = "0") : e.style.height = b + "px");
        e = d.B;
        e.g.width = -1 === a ? "100%" : String(a);
        e.g.height = -1 === b ? "100%" : String(b);
        try {
            e.g.offsetTop = e.g.offsetTop
        } catch (f) {}
        d.size = new F(a,b);
        d = {};
        a = (d.width = a,
        d.height = b,
        d.viewMode = c,
        d);
        BJ(this, "resize", a)
    }
    ;
    l.stop = function() {
        BJ(this, "stop")
    }
    ;
    l.expand = function() {
        BJ(this, "expand")
    }
    ;
    l.collapse = function() {
        BJ(this, "collapse")
    }
    ;
    l.getVolume = function() {
        return this.volume
    }
    ;
    l.setVolume = function(a) {
        this.volume = a;
        this.g.da.setVolume(a);
        var b = {};
        a = (b.volume = a,
        b);
        BJ(this, "volume", a)
    }
    ;
    l.pause = function() {
        BJ(this, "pause")
    }
    ;
    l.resume = function() {
        BJ(this, "resume")
    }
    ;
    l.destroy = function() {
        this.V()
    }
    ;
    l.getCuePoints = function() {
        return this.ga
    }
    ;
    l.fg = function() {
        return this.j
    }
    ;
    l.N = function() {
        BJ(this, "destroy");
        null != this.l && this.l.V();
        this.T.V();
        this.F.clear();
        this.B && (this.B.stop(),
        this.B.V());
        rE() && iI(this.I, this.O);
        S.prototype.N.call(this)
    }
    ;
    l.Wf = function() {
        X.getInstance().report(124, {
            api: "clicked"
        });
        var a = this.j && this.j.data.clickThroughUrl, b;
        if (a && (null == (b = this.j) ? 0 : b.Je())) {
            var c;
            Ly(a, null == (c = this.j) ? void 0 : c.data.attributionParams)
        }
        BJ(this, "click")
    }
    ;
    l.focus = function() {
        KE(this.D, "userInteraction", "focusUiElement")
    }
    ;
    var AJ = function(a, b) {
        var c = b.gfpCookieUserEnabled;
        b = b.gfpCookieClearData;
        var d = new pJ;
        d = Yf(d, 1, c ? "0" : "1");
        d = ff(d, 2, ie(2147483647));
        d = Yf(d, 3, "/");
        d = Yf(d, 4, window.location.hostname);
        var e = new rJ, f, g;
        a = null != (g = null == (f = a.Qa) ? void 0 : UD(f)) ? g : null;
        sJ(e, "__gpi_opt_out", d, a);
        if (!c || b)
            tJ(e, "__gads", a),
            tJ(e, "__gpi", a)
    };
    Z.prototype.clicked = Z.prototype.Wf;
    Z.prototype.getCurrentAd = Z.prototype.fg;
    Z.prototype.getCuePoints = Z.prototype.getCuePoints;
    Z.prototype.destroy = Z.prototype.destroy;
    Z.prototype.resume = Z.prototype.resume;
    Z.prototype.pause = Z.prototype.pause;
    Z.prototype.setVolume = Z.prototype.setVolume;
    Z.prototype.getVolume = Z.prototype.getVolume;
    Z.prototype.collapse = Z.prototype.collapse;
    Z.prototype.expand = Z.prototype.expand;
    Z.prototype.stop = Z.prototype.stop;
    Z.prototype.resize = Z.prototype.resize;
    Z.prototype.start = Z.prototype.start;
    Z.prototype.skip = Z.prototype.skip;
    Z.prototype.updateAdsRenderingSettings = Z.prototype.updateAdsRenderingSettings;
    Z.prototype.discardAdBreak = Z.prototype.discardAdBreak;
    Z.prototype.getAdSkippableState = Z.prototype.getAdSkippableState;
    Z.prototype.getRemainingTime = Z.prototype.getRemainingTime;
    Z.prototype.isCustomClickTrackingUsed = Z.prototype.isCustomClickTrackingUsed;
    Z.prototype.isCustomPlaybackUsed = Z.prototype.isCustomPlaybackUsed;
    Z.prototype.init = Z.prototype.init;
    function CJ(a) {
        if (a instanceof iH)
            return X.getInstance().report(174, {
                valid: !0
            }),
            a;
        X.getInstance().report(174, {
            valid: !1
        });
        var b = new iH;
        b.append(a);
        return b
    }
    ;var DJ = {
        ADS_MANAGER_LOADED: "adsManagerLoaded"
    }
      , EJ = function(a, b) {
        mu.call(this, "adsManagerLoaded");
        this.g = a;
        this.l = b
    };
    w(EJ, mu);
    EJ.prototype.getAdsManager = function(a, b) {
        a = a || {
            currentTime: null
        };
        this.g.configureAdsManager(a, b);
        return this.g
    }
    ;
    EJ.prototype.getUserRequestContext = function() {
        return this.l
    }
    ;
    EJ.prototype.getUserRequestContext = EJ.prototype.getUserRequestContext;
    EJ.prototype.getAdsManager = EJ.prototype.getAdsManager;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ads_manager_loaded_event.AdsManagerLoadedEvent.Type", DJ);
    var FJ = function(a, b) {
        (0,
        a.__uspapi)("getUSPData", 1, function(c, d) {
            b.va({
                Dc: null != c ? c : void 0,
                Gc: d ? void 0 : 2
            })
        })
    }
      , GJ = {
        Qc: function(a) {
            return a.va
        },
        fc: function(a, b) {
            a = {};
            return a.__uspapiCall = {
                callId: b,
                command: "getUSPData",
                version: 1
            },
            a
        },
        Kb: function(a, b) {
            b = b.__uspapiReturn;
            var c;
            a({
                Dc: null != (c = b.returnValue) ? c : void 0,
                Gc: b.success ? void 0 : 2
            })
        }
    };
    function HJ(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Pe: b.__uspapiReturn.callId
        }
    }
    var IJ = function(a, b) {
        b = void 0 === b ? {} : b;
        P.call(this);
        var c;
        this.timeoutMs = null != (c = b.timeoutMs) ? c : 500;
        this.caller = new Gx(a,"__uspapiLocator",function(d) {
            return "function" === typeof d.__uspapi
        }
        ,HJ);
        this.caller.o.set("getDataWithCallback", FJ);
        this.caller.A.set("getDataWithCallback", GJ)
    };
    w(IJ, P);
    IJ.prototype.N = function() {
        this.caller.V();
        P.prototype.N.call(this)
    }
    ;
    var JJ = function(a, b) {
        var c = {};
        if (Hx(a.caller)) {
            var d = Og(function() {
                b(c)
            });
            Jx(a.caller, "getDataWithCallback", {
                va: function(e) {
                    e.Gc || (c = e.Dc);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else
            b(c)
    };
    var KJ = function() {
        this.g = window
    };
    function LJ() {
        var a = window, b, c;
        return null != (c = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }).find(function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    }
    ;function MJ(a, b) {
        var c, d, e;
        null == b ? e = void 0 : e = b.get.call(b, a);
        return null != (d = null != (c = e) ? c : null == b ? void 0 : b.get(wi(a))) ? d : 0
    }
    ;var NJ = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/
      , OJ = new Map;
    function PJ(a, b, c, d, e, f) {
        var g = e.getBidResponsesForAdUnitCode;
        if (g) {
            var h, k, n, m, p, q = null != (p = null == (h = g(null != (n = b.Tb) ? n : "")) ? void 0 : h.bids) ? p : null == (k = g(null != (m = b.adUnitCode) ? m : "")) ? void 0 : k.bids;
            if (null != q && q.length && (h = q.filter(function(x) {
                var A = x.auctionId;
                var ha = x.adId;
                return A !== c && Object.values(d).some(function(Q) {
                    return Q.includes(ha)
                })
            }),
            h.length)) {
                var t, v;
                g = null == (t = e.adUnits) ? void 0 : null == (v = t.find(function(x) {
                    x = x.code;
                    return x === b.Tb || x === b.adUnitCode
                })) ? void 0 : v.mediaTypes;
                t = u(h);
                for (v = t.next(); !v.done; v = t.next())
                    v = v.value,
                    h = QJ(v, d, g, f),
                    h = fw(a, $v(Uf(aw(Zv(new Yv, v.bidder), 1), 6, !0), h)),
                    RJ(v.bidder, e, h),
                    "number" === typeof v.timeToRespond && ff(h, 2, ie(Math.round(v.timeToRespond)))
            }
        }
    }
    function RJ(a, b, c) {
        for (var d = []; a && !d.includes(a); ) {
            d.unshift(a);
            var e = void 0
              , f = void 0;
            a = null == (e = b) ? void 0 : null == (f = e.aliasRegistry) ? void 0 : f[a]
        }
        pf(c, 10, d, pe)
    }
    function SJ(a, b, c) {
        null != ce(cf(a, 3)) || (c === b.adUnitCode ? Zf(a, 3, 1) : c === b.Tb && Zf(a, 3, 2))
    }
    function TJ(a, b, c, d, e, f, g) {
        f = f.get(null != g ? g : function() {
            return null
        }
        );
        1 !== (null == f ? void 0 : Qf(f, 1)) && Df(b, 5, f);
        void 0 !== yf(a, Tv, 5, !1) || (f ? 1 === Qf(f, 1) ? gw(a, f) : gw(a, Wv(Uv(Vv(new Tv, e), 1), MJ(c, d))) : gw(a, Uv(Vv(new Tv, e), MJ(c, d) ? 2 : 3)))
    }
    function QJ(a, b, c, d) {
        var e = a.cpm
          , f = a.originalCpm
          , g = a.currency
          , h = a.originalCurrency
          , k = a.dealId
          , n = a.adserverTargeting
          , m = a.bidder
          , p = a.adId
          , q = a.mediaType
          , t = a.height
          , v = a.width
          , x = a.meta
          , A = new Rv;
        "number" === typeof e && (ff(A, 2, ie(Math.round(1E6 * e))),
        h && h !== g || (e = Math.round(1E6 * Number(f)),
        isNaN(e) || e === Of(A, 2) || ff(A, 8, ie(e))));
        "string" === typeof g && Yf(A, 3, g);
        ["string", "number"].includes(typeof k) && (g = new Lv,
        k = Yf(g, 1, String(k)),
        Df(A, 6, k));
        if ("object" === typeof n)
            for (k = u(["", "_" + m]),
            g = k.next(); !g.done; g = k.next()) {
                e = g.value;
                g = [];
                f = u(Object.entries(n));
                for (h = f.next(); !h.done; h = f.next()) {
                    h = u(h.value);
                    var ha = h.next().value;
                    h = h.next().value;
                    ha = ("" + ha + e).slice(0, 20);
                    var Q = void 0;
                    if (null != (Q = b[ha]) && Q.length)
                        if (b[ha][0] === String(h))
                            g.push(ha);
                        else {
                            g = [];
                            break
                        }
                }
                e = Sf(A, 4);
                pf(A, 4, e.concat(g), pe)
            }
        switch (q || "banner") {
        case "banner":
            Zf(A, 5, 1);
            break;
        case "native":
            Zf(A, 5, 2);
            break;
        case "video":
            Zf(A, 5, 3);
            b = new Pv;
            var la;
            if ("adpod" === (null == c ? void 0 : null == (la = c.video) ? void 0 : la.context)) {
                var Ga, Wh = null == c ? void 0 : null == (Ga = c.video) ? void 0 : Ga.adPodDurationSec;
                ff(b, 1, ie(Wh))
            } else
                Ga = null == c ? void 0 : null == (Wh = c.video) ? void 0 : Wh.maxduration,
                ff(b, 1, ie(Ga));
            var Ca;
            if ("number" === typeof (null == c ? void 0 : null == (Ca = c.video) ? void 0 : Ca.skip)) {
                var Ye;
                c = !!(null == c ? 0 : null == (Ye = c.video) ? 0 : Ye.skip);
                Uf(b, 2, c)
            }
            var fe;
            a = null == (fe = a.meta) ? void 0 : fe.adServerCatId;
            fe = Yf(b, 3, a);
            if ("object" !== typeof n)
                n = null;
            else {
                var va, Wc;
                a = String(null != (Wc = null != (va = n["hb_pb_cat_dur_" + m]) ? va : n.hb_pb_cat_dur) ? Wc : "");
                var Ze, ge, Xc, Pb;
                va = String(null != (Pb = null != (Xc = null != (ge = null != (Ze = n["hb_cache_id_" + m]) ? Ze : n["hb_uuid_" + m]) ? ge : n.hb_cache_id) ? Xc : n.hb_uuid) ? Pb : "");
                n = a && va ? a + "_" + va : va ? va : null
            }
            Yf(fe, 4, n);
            Df(A, 9, b)
        }
        Number.isFinite(t) && Number.isFinite(v) && (n = new Nv,
        v = Vf(n, 1, Math.round(v)),
        t = Vf(v, 2, Math.round(t)),
        Df(A, 7, t));
        "string" === typeof p && Yf(A, 1, p);
        0 < d && Array.isArray(null == x ? void 0 : x.advertiserDomains) && Yf(A, 10, x.advertiserDomains[0].substring(0, d));
        return A
    }
    function UJ(a, b) {
        var c = new Map
          , d = function(k) {
            var n = c.get(k);
            n || (n = {},
            c.set(k, n));
            return n
        }
          , e = [];
        a = u(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var g = f.args
              , h = f.eventType;
            f = f.elapsedTime;
            "bidTimeout" === h && e.push.apply(e, ia(g));
            switch (h) {
            case "bidRequested":
                if (g.auctionId !== b)
                    continue;
                if (!Array.isArray(g.bids))
                    continue;
                g = u(g.bids);
                for (h = g.next(); !h.done; h = g.next())
                    if (h = h.value.bidId)
                        d(h).requestTime = f;
                break;
            case "noBid":
                g.auctionId === b && g.bidId && (d(g.bidId).Og = f)
            }
        }
        d = new Map;
        a = u(c.entries());
        for (f = a.next(); !f.done; f = a.next())
            g = u(f.value),
            f = g.next().value,
            h = g.next().value,
            g = h.requestTime,
            h = h.Og,
            g && h && d.set(f, {
                latency: h - g,
                Jb: !1
            });
        e = u(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value,
            a = f.bidId,
            f = f.auctionId,
            a && f === b && (a = d.get(a)))
                a.Jb = !0;
        return d
    }
    function VJ(a, b) {
        var c = {};
        c = void 0 === c ? {} : c;
        var d, e, f = null != (e = null == (d = c) ? void 0 : d.mj) ? e : {}, g, h;
        d = null != (h = null == (g = c) ? void 0 : g.Xi) ? h : new Map;
        var k, n;
        g = null != (n = null == (k = c) ? void 0 : k.ej) ? n : new Map;
        var m, p;
        k = null != (p = null == (m = c) ? void 0 : m.Oi) ? p : new cw;
        var q, t;
        m = null != (t = null == (q = c) ? void 0 : q.aj) ? t : 0;
        var v, x;
        q = null != (x = null == (v = c) ? void 0 : v.cj) ? x : 0;
        v = new Map;
        var A = (0,
        a.getEvents)();
        t = A.filter(function(Ya) {
            var Qb = Ya.eventType;
            Ya = Ya.args;
            return "auctionEnd" === Qb && Ya.auctionId
        });
        x = new jw;
        var ha = function(Ya) {
            return Ya === b.Tb || Ya === b.adUnitCode
        }, Q, la, Ga, Wh = null != (Ga = OJ.get((null != (Q = b.Tb) ? Q : "") + (null != (la = b.adUnitCode) ? la : ""))) ? Ga : 0, Ca;
        Q = null != (Ca = t.filter(function(Ya) {
            var Qb, zz, Az;
            return Number(null == (Qb = Ya.args) ? void 0 : Qb.timestamp) > Wh && (null == (zz = Ya.args) ? void 0 : null == (Az = zz.adUnitCodes) ? void 0 : Az.find(ha))
        })) ? Ca : [];
        if (!Q.length)
            return null;
        var Ye;
        if (Q = null == (Ye = Q.reduce(function(Ya, Qb) {
            return Number(Qb.args.timestamp) > Number(Ya.args.timestamp) ? Qb : Ya
        })) ? void 0 : Ye.args) {
            Ca = void 0 === Q.bidderRequests ? [] : Q.bidderRequests;
            Ye = void 0 === Q.bidsReceived ? [] : Q.bidsReceived;
            var fe = Q.auctionId;
            Q = Q.timestamp;
            if (fe && null != Q && Ca.length) {
                var va, Wc;
                OJ.set((null != (va = b.Tb) ? va : "") + (null != (Wc = b.adUnitCode) ? Wc : ""), Q);
                va = kw(x);
                a.version && NJ.test(a.version) && Yf(va, 6, a.version);
                var Ze, ge, Xc;
                if (null == (Ze = a.getConfig) ? 0 : null == (ge = Ze.call(a).cache) ? 0 : null == (Xc = ge.url) ? 0 : Xc.length) {
                    var Pb, Yc;
                    hw(va, null == (Pb = a.getConfig) ? void 0 : null == (Yc = Pb.call(a).cache) ? void 0 : Yc.url)
                }
                Df(va, 9, k);
                Ze = Ng(function() {
                    return UJ(A, fe)
                });
                ge = u(Ca);
                Pb = ge.next();
                for (Xc = {}; !Pb.done; Xc = {
                    bidderCode: void 0,
                    af: void 0
                },
                Pb = ge.next())
                    for (Yc = Pb.value,
                    Xc.bidderCode = Yc.bidderCode,
                    Wc = Yc.bids,
                    Pb = Yc.timeout,
                    Xc.af = Yc.src,
                    Yc = Yc.auctionStart,
                    Wc = u(Wc),
                    k = Wc.next(),
                    Ca = {}; !k.done; Ca = {
                        xc: void 0
                    },
                    k = Wc.next())
                        t = k.value,
                        Ca.xc = t.bidId,
                        Ga = t.transactionId,
                        k = t.adUnitCode,
                        Q = t.getFloor,
                        la = t.mediaTypes,
                        t = t.ortb2Imp,
                        Ca.xc && ha(k) && (SJ(va, b, k),
                        n = p = void 0,
                        m && null == Kf(va, 11) && "string" === typeof (null == (p = t) ? void 0 : null == (n = p.ext) ? void 0 : n.gpid) && Yf(va, 11, t.ext.gpid.substring(0, m)),
                        Ga && (null != Kf(va, 4) || Yf(va, 4, Ga),
                        v.has(Ga) || v.set(Ga, Yc)),
                        null == ee(cf(va, 8)) && Number.isFinite(Pb) && Vf(va, 8, Pb),
                        t = Ye.find(function(Ya) {
                            return function(Qb) {
                                return Qb.requestId === Ya.xc
                            }
                        }(Ca)),
                        Ga = fw(va, function(Ya) {
                            return function() {
                                var Qb = Zv(new Yv, Ya.bidderCode);
                                RJ(Ya.bidderCode, a, Qb);
                                switch (Ya.af) {
                                case null:
                                case void 0:
                                case "client":
                                    Zf(Qb, 7, 1);
                                    break;
                                case "s2s":
                                    Zf(Qb, 7, 2)
                                }
                                return Qb
                            }
                        }(Xc)()),
                        TJ(va, Ga, k, d, !!c.Vi, g, Q),
                        t ? (aw(Ga, 1),
                        "number" === typeof t.timeToRespond && Number.isFinite(t.timeToRespond) && ff(Ga, 2, ie(Math.round(t.timeToRespond))),
                        Ca = QJ(t, f, la, q),
                        $v(Ga, Ca)) : (Ca = Ze().get(Ca.xc)) && !Ca.Jb ? (aw(Ga, 2),
                        Number.isFinite(Ca.latency) && ff(Ga, 2, ie(Math.round(Ca.latency)))) : (Ca = aw(Ga, 3),
                        Number.isFinite(Pb) && ff(Ca, 2, ie(Math.round(Pb)))));
                var Bz;
                (null == (Bz = a.getConfig) ? 0 : Bz.call(a).useBidCache) && PJ(va, b, fe, f, a, q);
                return x
            }
        }
    }
    ;var WJ = function(a) {
        S.call(this);
        var b = this
          , c = GD(ID(this.getSettings()));
        c && 0 < c.length && (Xl.reset(),
        Zl(new cm(c)));
        this.C = new rJ;
        this.B = null;
        this.j = a;
        this.F = new Map;
        this.o = this.j.B;
        this.K = new tz(this);
        R(this, this.K);
        this.T = new Lx(window,{
            timeoutMs: 500
        });
        this.U = new IJ(window,{
            timeoutMs: 500
        });
        this.M = new pG;
        sG(this.M);
        a = new by(window,{
            timeoutMs: 500
        });
        this.O = new OG(a,500);
        R(this, this.O);
        this.g = null;
        this.I = {};
        0 !== KD.g ? (this.l = new aI,
        R(this, this.l)) : this.l = bI();
        rE() && (this.l.init(WH(this.o)),
        this.D = hI(this.l, this.j.C),
        iq(this, function() {
            var d = b.D;
            b.l.l.delete(d);
            0 !== KD.g && (I(Vt).A[d] = null)
        }))
    };
    w(WJ, S);
    WJ.prototype.destroy = function() {
        this.V()
    }
    ;
    WJ.prototype.getVersion = function() {
        return "h.3.644.0"
    }
    ;
    WJ.prototype.requestAds = function(a, b) {
        var c = this
          , d = []
          , e = null;
        Nx(this.T) && d.push(new Promise(function(h) {
            Qx(c.T, function(k) {
                e = k;
                h()
            })
        }
        ));
        var f = null;
        Hx(this.U.caller) && d.push(new Promise(function(h) {
            JJ(c.U, function(k) {
                f = k;
                h()
            })
        }
        ));
        var g = null;
        d.push(QG(this.O).then(function(h) {
            g = h
        }));
        Promise.all(d).then(function() {
            XJ(c, a, b, {
                fe: e,
                ie: f,
                Ed: g
            })
        })
    }
    ;
    var XJ = function(a, b, c, d) {
        var e = b.adTagUrl
          , f = "goog_" + Nh++;
        a.F.set(f, c || null);
        var g = YJ({
            adTagUrl: e,
            fe: d.fe,
            ie: d.ie,
            Ed: d.Ed
        });
        a.g = OD(e, g || {});
        iG(a.g, function() {
            ZJ(a)
        });
        var h, k = null == (h = b.adTagUrl) ? void 0 : h.includes("GOOGLE_INSTREAM_VIDEO_NONCE"), n = TD(a.g);
        c = $J(a, n, k);
        d = sG(a.M);
        h = KG.getConfig().then(function(m) {
            if (m) {
                var p = KG.l;
                LG(m, null != e ? e : "", null != p ? p : 0)
            }
            if (p = KG.j)
                p = p.message,
                X.getInstance().report(189, {
                    message: p
                });
            return m
        });
        h = Promise.race([h, uv(500, null)]);
        Promise.all([c, d, h]).then(function(m) {
            var p = u(m);
            p.next();
            m = p.next().value;
            p = p.next().value;
            var q = {};
            X.getInstance().report(182, (q.aid = !!KD.B,
            q.aidf = !!a.B,
            q.hsc = !n && k,
            q));
            p = aK(a, b, g, m, p);
            q = WH(a.o, f);
            a.K.listen(q, "adsLoader", a.W);
            KE(q, "adsLoader", "requestAds", p);
            p = {};
            X.getInstance().report(155, (p.ws = oG(),
            p.blob = null != m ? m : "undef",
            p))
        })
    };
    WJ.prototype.getSettings = function() {
        return KD
    }
    ;
    WJ.prototype.contentComplete = function() {
        KE(WH(this.o), "adsLoader", "contentComplete")
    }
    ;
    WJ.prototype.W = function(a) {
        var b = a.messageType;
        switch (b) {
        case "adsLoaded":
            var c = a.na
              , d = a.sc;
            c = new Z(this.l,this.j,c.adTagUrl || "",c.adCuePoints,this.D,c.isCustomClickTrackingAllowed,WH(this.o, d),this.g);
            this.dispatchEvent(new EJ(c,bK(this, d)));
            break;
        case "error":
            c = a.na;
            this.dispatchEvent(new QI(new OI(c),bK(this, a.sc)));
            c = {
                error: c.errorCode,
                vis: xk(document)
            };
            X.getInstance().report(7, c);
            break;
        case "cookieUpdate":
            a = a.na;
            if (null == a)
                break;
            if (KD.isCookiesEnabled()) {
                b = new LD;
                b = Uf(b, 5, !0);
                var e = a.gfpCookie;
                e && sJ(this.C, "__gads", qJ(e), b);
                (e = a.gfpCookieV2) && sJ(this.C, "__gpi", qJ(e), b)
            }
            if (b = a.eoidCookie) {
                e = new KJ;
                try {
                    c = qJ(b);
                    d = Of(c, 2) - Date.now() / 1E3;
                    var f = {
                        Rc: Math.max(d, 0),
                        path: D(c, 3),
                        domain: D(c, 4),
                        Xe: !1
                    }
                      , g = c.getValue()
                      , h = e.g;
                    cl(h) && (new $k(h.document)).set("__eoi", g, f)
                } catch (n) {
                    var k;
                    X.getInstance().report(198, {
                        action: "write",
                        message: null == (k = n) ? void 0 : k.message
                    }, !0)
                }
            }
            cK(this, a.encryptedSignalBidderIds || []);
            break;
        case "trackingUrlPinged":
            this.dispatchEvent(new SI(b,null,a.na))
        }
    }
    ;
    var cK = function(a, b) {
        0 !== b.length && (b = jG(b.map(function(c) {
            return {
                Bc: c
            }
        }), a.g)) && b.forEach(function(c) {
            c.then(function(d) {
                d && ZJ(a)
            })
        })
    }
      , ZJ = function(a) {
        var b = jF(hG(a.g));
        b && (a.I.espSignals = b,
        KE(WH(a.o), "adsLoader", "signalsRefresh", a.I))
    }
      , bK = function(a, b) {
        var c = a.F.get(b);
        a.F.delete(b);
        return null != c ? c : null
    }
      , YJ = function(a) {
        var b = a.fe
          , c = a.ie;
        a = a.Ed;
        var d, e, f, g, h, k, n = {};
        var m = void 0 === m ? y : m;
        return n.gfcLoaded = zi(m.top, "googlefcLoaded"),
        n.addtlConsent = null != (d = null == b ? void 0 : b.addtlConsent) ? d : null,
        n.gdprApplies = null != (e = null == b ? void 0 : b.gdprApplies) ? e : null,
        n.tcString = null != (f = null == b ? void 0 : b.tcString) ? f : null,
        n.uspString = null != (g = null == c ? void 0 : c.uspString) ? g : null,
        n.gppString = null != (h = null == a ? void 0 : a.gppString) ? h : null,
        n.gppSid = null != (k = null == a ? void 0 : a.sid) ? k : null,
        n
    }
      , dK = function(a, b) {
        var c = {};
        c.contentMediaUrl = a.j.L;
        c.customClickTrackingProvided = null != a.j.o;
        c.isAmp = vE();
        a: {
            try {
                var d = window.top.location.href
            } catch (A) {
                d = 2;
                break a
            }
            d = null == d ? 2 : d == window.document.location.href ? 0 : 1
        }
        c.iframeState = d;
        c.imaHostingDomain = window.document.domain;
        c.imaHostingPageUrl = window.document.URL;
        c.topAccessiblePageUrl = uE();
        c.referrer = window.document.referrer;
        c.domLoadTime = a.o.K;
        c.sdkImplLoadTime = a.o.M;
        c.supportsResizing = !KI(a.j);
        d = G().location.ancestorOrigins;
        c.topOrigin = d ? 0 < d.length && 200 > d[d.length - 1].length ? d[d.length - 1] : "" : null;
        c.osdId = a.D;
        c.usesCustomVideoPlayback = KI(a.j);
        c.usesProxyMediaElement = LI(a.j);
        c.usesInlinePlayback = a.j.J;
        d = a.j.ed;
        a = [];
        var e = ""
          , f = "";
        if (null != d) {
            e = d;
            f = !0;
            f = void 0 === f ? !1 : f;
            for (var g = [], h = 0; e && 25 > h; ++h) {
                var k = "";
                void 0 !== f && f || (k = (k = 9 !== e.nodeType && e.id) ? "/" + k : "");
                a: {
                    if (e && e.nodeName && e.parentElement) {
                        var n = e.nodeName.toString().toLowerCase();
                        for (var m = e.parentElement.childNodes, p = 0, q = 0; q < m.length; ++q) {
                            var t = m[q];
                            if (t.nodeName && t.nodeName.toString().toLowerCase() === n) {
                                if (e === t) {
                                    n = "." + p;
                                    break a
                                }
                                ++p
                            }
                        }
                    }
                    n = ""
                }
                g.push((e.nodeName && e.nodeName.toString().toLowerCase()) + k + n);
                e = e.parentElement
            }
            e = g.join();
            if (d) {
                d = (d = d.ownerDocument) && (d.defaultView || d.parentWindow) || null;
                f = [];
                if (d)
                    try {
                        var v = d.parent;
                        for (g = 0; v && v !== d && 25 > g; ++g) {
                            var x = v.frames;
                            for (h = 0; h < x.length; ++h)
                                if (d === x[h]) {
                                    f.push(h);
                                    break
                                }
                            d = v;
                            v = d.parent
                        }
                    } catch (A) {}
                f = f.join()
            } else
                f = ""
        }
        a.push(e, f);
        if (null != b) {
            for (v = 0; v < Bx.length - 1; ++v)
                a.push(oi(b, Bx[v]) || "");
            b = oi(b, "videoad_start_delay");
            v = "";
            b && (b = parseInt(b, 10),
            v = 0 > b ? "postroll" : 0 == b ? "preroll" : "midroll");
            a.push(v)
        } else
            for (b = 0; b < Bx.length; ++b)
                a.push("");
        return c.videoAdKey = wi(a.join(":")).toString(),
        c
    }
      , eK = function(a, b, c) {
        a = SD(a);
        b = b.adTagUrl ? AD(b.adTagUrl) : null;
        var d;
        c && b ? (c = Af(c, lw, 3),
        c = !!b && (null == c ? void 0 : null == (d = of(c, 1, ue)) ? void 0 : d.get(b)),
        X.getInstance().report(196, {
            status: c,
            network: b
        }),
        d = !c) : d = !0;
        return {
            Re: a,
            Se: d
        }
    }
      , fK = function(a, b, c) {
        var d = UD(a);
        c = eK(a, b, c);
        a = new KJ;
        b = c.Re;
        c = c.Se;
        return !gl(a.g) || Lf(d, 8) || (b || !Lf(d, 5)) && c ? !1 : !0
    }
      , gK = function(a, b, c) {
        var d = UD(a);
        a = eK(a, b, c);
        b = new KJ;
        c = void 0;
        try {
            var e = a.Re;
            var f = a.Se;
            if (Lf(d, 8) || (e || !Lf(d, 5)) && f)
                c = void 0;
            else {
                var g;
                c = null != (g = el("__eoi", b.g)) ? g : void 0
            }
        } catch (k) {
            var h;
            X.getInstance().report(198, {
                action: "read",
                message: null == (h = k) ? void 0 : h.message
            }, !0)
        }
        return c
    }
      , $J = function(a, b, c) {
        if (b)
            return a.B = null,
            Promise.resolve([]);
        b = [];
        b.push(hK());
        c && b.push(iK(a));
        return Promise.all(b)
    }
      , iK = function(a) {
        var b;
        return Ja(function(c) {
            if (1 == c.g)
                return a.B || (a.B = new GE,
                HE(a.B)),
                ya(c, a.B.getId(), 2);
            b = c.j;
            KD.B = b.id || "";
            c.g = 0
        })
    }
      , hK = function() {
        return Eb() && (Ul(Dm) || Ul(Cm)) ? Ul(Cm) ? new Promise(function(a) {
            setTimeout(function() {
                a()
            }, 50)
        }
        ) : jK().then(function(a) {
            var b, c = null != (b = a.label) ? b : "";
            KD.J = c;
            KD.I = a.status
        }) : Promise.resolve()
    }
      , jK = function() {
        if (navigator.cookieDeprecationLabel) {
            var a = navigator.cookieDeprecationLabel.getValue().then(function(c) {
                return {
                    label: c,
                    status: 1
                }
            }).catch(function() {
                return {
                    label: "",
                    status: 2
                }
            })
              , b = new Promise(function(c) {
                setTimeout(function() {
                    c({
                        label: "",
                        status: 5
                    })
                }, 50)
            }
            );
            return Promise.race([b, a])
        }
        return Promise.resolve({
            label: "",
            status: 3
        })
    }
      , aK = function(a, b, c, d, e) {
        var f = {};
        f = (f.limaExperimentIds = Yl().sort().join(","),
        f);
        var g = Ci()
          , h = Ne(Sm())
          , k = {};
        h = (k.experimentStateProto = ag(h),
        k);
        k = JD(a.getSettings(), gI(a.l));
        var n = dK(a, b.adTagUrl)
          , m = Wm()
          , p = {};
        c = (p.consentSettings = c,
        p.imalibExperiments = f,
        p.genotypeExperimentData = h,
        p.settings = k,
        p.videoEnvironment = n,
        p.isFledgeEligible = m,
        p.pvsid = g,
        p);
        Object.assign(c, kK(b));
        a.g && KD.isCookiesEnabled() && (f = UD(a.g),
        c.isBrowserCookieEnabled = gl(a.C.g) ? !!Lf(f, 5) : !1,
        g = f ? dl("__gads", f, a.C.g) : null,
        null !== g && (c.gfpCookieValue = g),
        g = f ? dl("__gpi", f, a.C.g) : null,
        null !== g && (c.gfpCookieV2Id = g),
        f = f ? dl("__gpi_opt_out", f, a.C.g) : null,
        null !== f && (c.gfpCookieV2OptOut = f));
        a.g && (f = fK(a.g, b, e),
        c.eoidCookieEnabled = f,
        (e = gK(a.g, b, e)) && (c.eoidCookieValue = e));
        if (e = jF(hG(a.g)))
            a.I.espSignals = e,
            c.espSignals = e;
        d && (c.gmaSignals = d);
        c.isEapLoader = !1;
        if (Ul(Gm)) {
            a = function(x) {
                X.getInstance().report(195, {
                    message: null == x ? void 0 : x.message
                })
            }
            ;
            try {
                var q = LJ();
                if (q) {
                    var t = BD(b.adTagUrl, a);
                    if (t) {
                        var v = VJ(q, {
                            adUnitCode: t
                        });
                        c.clientBidsProto = v ? Fc(v.g(), 3) : void 0
                    }
                }
            } catch (x) {
                a(x)
            }
        }
        return c
    };
    WJ.prototype.contentComplete = WJ.prototype.contentComplete;
    WJ.prototype.getSettings = WJ.prototype.getSettings;
    WJ.prototype.requestAds = WJ.prototype.requestAds;
    WJ.prototype.getVersion = WJ.prototype.getVersion;
    WJ.prototype.destroy = WJ.prototype.destroy;
    var lK = function() {
        this.l = this.j = "unknown";
        this.g = "0";
        this.adsResponse = null;
        this.adTagUrl = "";
        this.contentTitle = this.contentKeywords = this.contentDuration = null;
        this.forceNonLinearFullSlot = !1;
        this.nonLinearAdSlotWidth = this.nonLinearAdSlotHeight = this.liveStreamPrefetchSeconds = this.linearAdSlotWidth = this.linearAdSlotHeight = 0;
        this.omidAccessModeRules = {};
        this.pageUrl = null;
        this.vastLoadTimeout = 5E3
    }
      , kK = function(a) {
        var b = {};
        b.adsResponse = a.adsResponse;
        b.videoPlayActivation = a.j;
        b.videoPlayMuted = a.l;
        b.videoContinuousPlay = a.g;
        b.adTagUrl = a.adTagUrl;
        b.contentDuration = a.contentDuration;
        b.contentKeywords = a.contentKeywords;
        b.contentTitle = a.contentTitle;
        b.linearAdSlotWidth = a.linearAdSlotWidth;
        b.linearAdSlotHeight = a.linearAdSlotHeight;
        b.nonLinearAdSlotWidth = a.nonLinearAdSlotWidth;
        b.nonLinearAdSlotHeight = a.nonLinearAdSlotHeight;
        b.forceNonLinearFullSlot = a.forceNonLinearFullSlot;
        b.liveStreamPrefetchSeconds = a.liveStreamPrefetchSeconds;
        b.vastLoadTimeout = a.vastLoadTimeout;
        b.omidAccessModeRules = a.omidAccessModeRules;
        b.pageUrl = a.pageUrl;
        return b
    };
    lK.prototype.setAdWillAutoPlay = function(a) {
        this.j = a ? "auto" : "click"
    }
    ;
    lK.prototype.setAdWillPlayMuted = function(a) {
        this.l = a ? "muted" : "unmuted"
    }
    ;
    lK.prototype.setContinuousPlayback = function(a) {
        this.g = a ? "2" : "1"
    }
    ;
    lK.prototype.setContinuousPlayback = lK.prototype.setContinuousPlayback;
    lK.prototype.setAdWillPlayMuted = lK.prototype.setAdWillPlayMuted;
    lK.prototype.setAdWillAutoPlay = lK.prototype.setAdWillAutoPlay;
    z("google.ima.AdCuePoints.POSTROLL", -1, window);
    z("google.ima.AdCuePoints.PREROLL", 0, window);
    z("google.ima.AdDisplayContainer", MI, window);
    z("google.ima.AdError.ErrorCode", U, window);
    z("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
    z("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
    z("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
    z("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
    z("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
    z("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
    z("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
    z("google.ima.AdError.Type", NI, window);
    z("google.ima.AdErrorEvent.Type", PI, window);
    z("google.ima.AdEvent.Type", RI, window);
    z("google.ima.AdsLoader", WJ, window);
    z("google.ima.AdsManagerLoadedEvent.Type", DJ, window);
    z("google.ima.CompanionAdSelectionSettings", PE, window);
    z("google.ima.CompanionAdSelectionSettings.CreativeType", ME);
    z("google.ima.CompanionAdSelectionSettings.ResourceType", NE);
    z("google.ima.CompanionAdSelectionSettings.SizeCriteria", OE);
    z("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
    z("ima.ImaSdkSettings", V, window);
    z("google.ima.settings", KD, window);
    z("google.ima.ImaSdkSettings.CompanionBackfillMode", {
        ALWAYS: "always",
        ON_MASTER_AD: "on_master_ad"
    });
    z("google.ima.ImaSdkSettings.VpaidMode", {
        DISABLED: 0,
        ENABLED: 1,
        INSECURE: 2,
        0: "DISABLED",
        1: "ENABLED",
        2: "INSECURE"
    });
    z("google.ima.AdsRenderingSettings", iH, window);
    z("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
    z("google.ima.AdsRequest", lK, window);
    z("google.ima.VERSION", "3.644.0");
    z("google.ima.OmidAccessMode", {
        LIMITED: "limited",
        DOMAIN: "domain",
        FULL: "full"
    });
    z("google.ima.OmidVerificationVendor", {
        COMSCORE: 7,
        DOUBLEVERIFY: 3,
        GOOGLE: 9,
        INTEGRAL_AD_SCIENCE: 4,
        MEETRICS: 8,
        MOAT: 2,
        NIELSEN: 6,
        PIXELATE: 5,
        OTHER: 1,
        7: "COMSCORE",
        3: "DOUBLEVERIFY",
        9: "GOOGLE",
        4: "INTEGRAL_AD_SCIENCE",
        8: "MEETRICS",
        2: "MOAT",
        6: "NIELSEN",
        5: "PIXELATE",
        1: "OTHER"
    });
    z("google.ima.UiElements", {
        AD_ATTRIBUTION: "adAttribution",
        COUNTDOWN: "countdown"
    });
    z("google.ima.ViewMode", {
        NORMAL: "normal",
        FULLSCREEN: "fullscreen"
    });
    z("google.ima.secureSignals", {
        clearAllCache: function() {
            hF(window.localStorage)
        }
    });
    var mK = function(a, b, c) {
        this.j = c;
        0 === b.length && (b = [[]]);
        this.g = b.map(function(d) {
            d = a.concat(d);
            for (var e = [], f = 0, g = 0; f < d.length; ) {
                var h = d[f++];
                if (128 > h)
                    e[g++] = String.fromCharCode(h);
                else if (191 < h && 224 > h) {
                    var k = d[f++];
                    e[g++] = String.fromCharCode((h & 31) << 6 | k & 63)
                } else if (239 < h && 365 > h) {
                    k = d[f++];
                    var n = d[f++]
                      , m = d[f++];
                    h = ((h & 7) << 18 | (k & 63) << 12 | (n & 63) << 6 | m & 63) - 65536;
                    e[g++] = String.fromCharCode(55296 + (h >> 10));
                    e[g++] = String.fromCharCode(56320 + (h & 1023))
                } else
                    k = d[f++],
                    n = d[f++],
                    e[g++] = String.fromCharCode((h & 15) << 12 | (k & 63) << 6 | n & 63)
            }
            return new RegExp(e.join(""))
        })
    }
      , nK = function(a, b) {
        return b ? a.g.some(function(c) {
            c = b.match(c);
            return null == c ? !1 : !a.j || 1 <= c.length && "3.644.0" === c[1] || 2 <= c.length && "3.644.0" === c[2] ? !0 : !1
        }) : !1
    }
      , oK = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47]
      , pK = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 115, 48, 92, 46, 50, 109, 100, 110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47]
      , qK = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 97, 108, 47, 115, 100, 107, 108, 111, 97, 100, 101, 114, 47]
      , rK = [[105, 109, 97, 51, 92, 46, 106, 115], [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115], [105, 109, 97, 51, 95, 101, 97, 112, 46, 106, 115]]
      , sK = [[98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]]
      , tK = [[111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115], [111, 117, 116, 115, 116, 114, 101, 97, 109, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]]
      , uK = new mK(oK,rK,!1);
    new mK(oK,sK,!0);
    var vK = new mK(pK,rK,!1);
    new mK(pK,sK,!0);
    var wK = new mK([94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115, 101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 46, 91, 48, 45, 57, 46, 93, 43, 47],rK,!1)
      , xK = new mK([94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 40, 112, 97, 103, 101, 97, 100, 50, 124, 116, 112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115, 121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97, 100, 103, 101, 116, 115, 124, 106, 115, 41, 47],[],!1);
    new mK(oK,[[100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]],!0);
    var yK = new mK(oK,tK,!1)
      , zK = new mK(oK,tK,!1);
    new mK(qK,[[112, 97, 108, 46, 106, 115]],!1);
    new mK(qK,[[99, 97, 115, 116, 95, 112, 97, 108, 46, 106, 115]],!1);
    new mK(qK,[[99, 116, 118, 95, 112, 97, 108, 46, 106, 115]],!1);
    function AK(a, b) {
        for (var c = {}, d = 0; d < b.length; c = {
            Zd: void 0
        },
        d++)
            if (c.Zd = b[d],
            a.some(function(e) {
                return function(f) {
                    return nK(f, e.Zd.src)
                }
            }(c)))
                return c.Zd;
        return null
    }
    ;if (!function(a) {
        if (a.some(function(c) {
            return nK(c, G().location.href)
        }))
            return !0;
        var b = AK(a, document.querySelectorAll && document.querySelector ? document.querySelectorAll("SCRIPT") : document.getElementsByTagName("SCRIPT"));
        null == b && document.querySelectorAll && (b = AK(a, document.querySelectorAll("script")));
        return null != b
    }([uK, wK, vK, xK, yK, zK]))
        throw Error("IMA SDK is either not loaded from a google domain or is not a supported version.");
    var GG = KG, BK;
    var CK = {
        pageUrl: uE()
    }, DK, EK, FK;
    DK = CK.appName;
    EK = CK.Ne;
    FK = CK.pageUrl;
    var GK = new URL("https://securepubads.g.doubleclick.net/pagead/ima_ppub_config");
    DK && EK ? ("android" === EK ? GK.searchParams.set("msid", DK) : "ios" === EK && GK.searchParams.set("an", DK),
    BK = GK.toString()) : FK ? (GK.searchParams.set("ippd", FK),
    BK = GK.toString()) : BK = null;
    var HG = BK;
    if (HG)
        try {
            JG()
        } catch (a) {
            IG(GG, a)
        }
    else
        IG(GG, Error("Could not generate config URL"));
}
)();
