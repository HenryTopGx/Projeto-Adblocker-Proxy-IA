gapi.loaded_0(function(_) {
    var window = this;
    _._F_toggles_initialize = function(a) {
        ("undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self ? self : this)._F_toggles = a || []
    }
    ;
    (0,
    _._F_toggles_initialize)([0x100000, ]);
    var ba, fa, ha, ma, na, va, wa, Ca;
    ba = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    ;
    fa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    ;
    ha = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("a");
    }
    ;
    _.la = ha(this);
    ma = function(a, b) {
        if (b)
            a: {
                var c = _.la;
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
                b != d && null != b && fa(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
    }
    ;
    ma("Symbol", function(a) {
        if (a)
            return a;
        var b = function(f, h) {
            this.L1 = f;
            fa(this, "description", {
                configurable: !0,
                writable: !0,
                value: h
            })
        };
        b.prototype.toString = function() {
            return this.L1
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
    ma("Symbol.iterator", function(a) {
        if (a)
            return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = _.la[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && fa(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return na(ba(this))
                }
            })
        }
        return a
    });
    na = function(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        }
        ;
        return a
    }
    ;
    _.ra = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if (b)
            return b.call(a);
        if ("number" == typeof a.length)
            return {
                next: ba(a)
            };
        throw Error("b`" + String(a));
    }
    ;
    va = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;
    wa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d)
                    va(d, e) && (a[e] = d[e])
        }
        return a
    }
    ;
    ma("Object.assign", function(a) {
        return a || wa
    });
    _.ya = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    ;
    _.Ba = function() {
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
            e = (0,
            _.ya)(e.prototype || Object.prototype);
            return Function.prototype.apply.call(c, e, d) || e
        }
    }();
    if ("function" == typeof Object.setPrototypeOf)
        Ca = Object.setPrototypeOf;
    else {
        var Da;
        a: {
            var Ea = {
                a: !0
            }
              , Fa = {};
            try {
                Fa.__proto__ = Ea;
                Da = Fa.a;
                break a
            } catch (a) {}
            Da = !1
        }
        Ca = Da ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    _.Ga = Ca;
    ma("Reflect", function(a) {
        return a ? a : {}
    });
    ma("Reflect.construct", function() {
        return _.Ba
    });
    ma("Reflect.setPrototypeOf", function(a) {
        return a ? a : _.Ga ? function(b, c) {
            try {
                return (0,
                _.Ga)(b, c),
                !0
            } catch (d) {
                return !1
            }
        }
        : null
    });
    ma("Promise", function(a) {
        function b() {
            this.Pf = null
        }
        function c(h) {
            return h instanceof e ? h : new e(function(k) {
                k(h)
            }
            )
        }
        if (a)
            return a;
        b.prototype.BP = function(h) {
            if (null == this.Pf) {
                this.Pf = [];
                var k = this;
                this.CP(function() {
                    k.d8()
                })
            }
            this.Pf.push(h)
        }
        ;
        var d = _.la.setTimeout;
        b.prototype.CP = function(h) {
            d(h, 0)
        }
        ;
        b.prototype.d8 = function() {
            for (; this.Pf && this.Pf.length; ) {
                var h = this.Pf;
                this.Pf = [];
                for (var k = 0; k < h.length; ++k) {
                    var l = h[k];
                    h[k] = null;
                    try {
                        l()
                    } catch (m) {
                        this.wq(m)
                    }
                }
            }
            this.Pf = null
        }
        ;
        b.prototype.wq = function(h) {
            this.CP(function() {
                throw h;
            })
        }
        ;
        var e = function(h) {
            this.Ga = 0;
            this.Gf = void 0;
            this.cs = [];
            this.JV = !1;
            var k = this.BF();
            try {
                h(k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.BF = function() {
            function h(m) {
                return function(n) {
                    l || (l = !0,
                    m.call(k, n))
                }
            }
            var k = this
              , l = !1;
            return {
                resolve: h(this.Dea),
                reject: h(this.qK)
            }
        }
        ;
        e.prototype.Dea = function(h) {
            if (h === this)
                this.qK(new TypeError("A Promise cannot resolve to itself"));
            else if (h instanceof e)
                this.pga(h);
            else {
                a: switch (typeof h) {
                case "object":
                    var k = null != h;
                    break a;
                case "function":
                    k = !0;
                    break a;
                default:
                    k = !1
                }
                k ? this.Cea(h) : this.MS(h)
            }
        }
        ;
        e.prototype.Cea = function(h) {
            var k = void 0;
            try {
                k = h.then
            } catch (l) {
                this.qK(l);
                return
            }
            "function" == typeof k ? this.qga(k, h) : this.MS(h)
        }
        ;
        e.prototype.qK = function(h) {
            this.A_(2, h)
        }
        ;
        e.prototype.MS = function(h) {
            this.A_(1, h)
        }
        ;
        e.prototype.A_ = function(h, k) {
            if (0 != this.Ga)
                throw Error("c`" + h + "`" + k + "`" + this.Ga);
            this.Ga = h;
            this.Gf = k;
            2 === this.Ga && this.Sea();
            this.e8()
        }
        ;
        e.prototype.Sea = function() {
            var h = this;
            d(function() {
                if (h.Kca()) {
                    var k = _.la.console;
                    "undefined" !== typeof k && k.error(h.Gf)
                }
            }, 1)
        }
        ;
        e.prototype.Kca = function() {
            if (this.JV)
                return !1;
            var h = _.la.CustomEvent
              , k = _.la.Event
              , l = _.la.dispatchEvent;
            if ("undefined" === typeof l)
                return !0;
            "function" === typeof h ? h = new h("unhandledrejection",{
                cancelable: !0
            }) : "function" === typeof k ? h = new k("unhandledrejection",{
                cancelable: !0
            }) : (h = _.la.document.createEvent("CustomEvent"),
            h.initCustomEvent("unhandledrejection", !1, !0, h));
            h.promise = this;
            h.reason = this.Gf;
            return l(h)
        }
        ;
        e.prototype.e8 = function() {
            if (null != this.cs) {
                for (var h = 0; h < this.cs.length; ++h)
                    f.BP(this.cs[h]);
                this.cs = null
            }
        }
        ;
        var f = new b;
        e.prototype.pga = function(h) {
            var k = this.BF();
            h.Ay(k.resolve, k.reject)
        }
        ;
        e.prototype.qga = function(h, k) {
            var l = this.BF();
            try {
                h.call(k, l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        }
        ;
        e.prototype.then = function(h, k) {
            function l(q, u) {
                return "function" == typeof q ? function(v) {
                    try {
                        m(q(v))
                    } catch (t) {
                        n(t)
                    }
                }
                : u
            }
            var m, n, p = new e(function(q, u) {
                m = q;
                n = u
            }
            );
            this.Ay(l(h, m), l(k, n));
            return p
        }
        ;
        e.prototype.catch = function(h) {
            return this.then(void 0, h)
        }
        ;
        e.prototype.Ay = function(h, k) {
            function l() {
                switch (m.Ga) {
                case 1:
                    h(m.Gf);
                    break;
                case 2:
                    k(m.Gf);
                    break;
                default:
                    throw Error("d`" + m.Ga);
                }
            }
            var m = this;
            null == this.cs ? f.BP(l) : this.cs.push(l);
            this.JV = !0
        }
        ;
        e.resolve = c;
        e.reject = function(h) {
            return new e(function(k, l) {
                l(h)
            }
            )
        }
        ;
        e.race = function(h) {
            return new e(function(k, l) {
                for (var m = _.ra(h), n = m.next(); !n.done; n = m.next())
                    c(n.value).Ay(k, l)
            }
            )
        }
        ;
        e.all = function(h) {
            var k = _.ra(h)
              , l = k.next();
            return l.done ? c([]) : new e(function(m, n) {
                function p(v) {
                    return function(t) {
                        q[v] = t;
                        u--;
                        0 == u && m(q)
                    }
                }
                var q = []
                  , u = 0;
                do
                    q.push(void 0),
                    u++,
                    c(l.value).Ay(p(q.length - 1), n),
                    l = k.next();
                while (!l.done)
            }
            )
        }
        ;
        return e
    });
    var Ha = function(a, b, c) {
        if (null == a)
            throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    ma("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Ha(this, b, "startsWith")
              , e = d.length
              , f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var h = 0; h < f && c < e; )
                if (d[c++] != b[h++])
                    return !1;
            return h >= f
        }
    });
    ma("WeakMap", function(a) {
        function b() {}
        function c(l) {
            var m = typeof l;
            return "object" === m && null !== l || "function" === m
        }
        function d(l) {
            if (!va(l, f)) {
                var m = new b;
                fa(l, f, {
                    value: m
                })
            }
        }
        function e(l) {
            var m = Object[l];
            m && (Object[l] = function(n) {
                if (n instanceof b)
                    return n;
                Object.isExtensible(n) && d(n);
                return m(n)
            }
            )
        }
        if (function() {
            if (!a || !Object.seal)
                return !1;
            try {
                var l = Object.seal({})
                  , m = Object.seal({})
                  , n = new a([[l, 2], [m, 3]]);
                if (2 != n.get(l) || 3 != n.get(m))
                    return !1;
                n.delete(l);
                n.set(m, 4);
                return !n.has(l) && 4 == n.get(m)
            } catch (p) {
                return !1
            }
        }())
            return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var h = 0
          , k = function(l) {
            this.Ha = (h += Math.random() + 1).toString();
            if (l) {
                l = _.ra(l);
                for (var m; !(m = l.next()).done; )
                    m = m.value,
                    this.set(m[0], m[1])
            }
        };
        k.prototype.set = function(l, m) {
            if (!c(l))
                throw Error("e");
            d(l);
            if (!va(l, f))
                throw Error("f`" + l);
            l[f][this.Ha] = m;
            return this
        }
        ;
        k.prototype.get = function(l) {
            return c(l) && va(l, f) ? l[f][this.Ha] : void 0
        }
        ;
        k.prototype.has = function(l) {
            return c(l) && va(l, f) && va(l[f], this.Ha)
        }
        ;
        k.prototype.delete = function(l) {
            return c(l) && va(l, f) && va(l[f], this.Ha) ? delete l[f][this.Ha] : !1
        }
        ;
        return k
    });
    ma("Map", function(a) {
        if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                return !1;
            try {
                var k = Object.seal({
                    x: 4
                })
                  , l = new a(_.ra([[k, "s"]]));
                if ("s" != l.get(k) || 1 != l.size || l.get({
                    x: 4
                }) || l.set({
                    x: 4
                }, "t") != l || 2 != l.size)
                    return !1;
                var m = l.entries()
                  , n = m.next();
                if (n.done || n.value[0] != k || "s" != n.value[1])
                    return !1;
                n = m.next();
                return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0
            } catch (p) {
                return !1
            }
        }())
            return a;
        var b = new WeakMap
          , c = function(k) {
            this[0] = {};
            this[1] = f();
            this.size = 0;
            if (k) {
                k = _.ra(k);
                for (var l; !(l = k.next()).done; )
                    l = l.value,
                    this.set(l[0], l[1])
            }
        };
        c.prototype.set = function(k, l) {
            k = 0 === k ? 0 : k;
            var m = d(this, k);
            m.list || (m.list = this[0][m.id] = []);
            m.tf ? m.tf.value = l : (m.tf = {
                next: this[1],
                nl: this[1].nl,
                head: this[1],
                key: k,
                value: l
            },
            m.list.push(m.tf),
            this[1].nl.next = m.tf,
            this[1].nl = m.tf,
            this.size++);
            return this
        }
        ;
        c.prototype.delete = function(k) {
            k = d(this, k);
            return k.tf && k.list ? (k.list.splice(k.index, 1),
            k.list.length || delete this[0][k.id],
            k.tf.nl.next = k.tf.next,
            k.tf.next.nl = k.tf.nl,
            k.tf.head = null,
            this.size--,
            !0) : !1
        }
        ;
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].nl = f();
            this.size = 0
        }
        ;
        c.prototype.has = function(k) {
            return !!d(this, k).tf
        }
        ;
        c.prototype.get = function(k) {
            return (k = d(this, k).tf) && k.value
        }
        ;
        c.prototype.entries = function() {
            return e(this, function(k) {
                return [k.key, k.value]
            })
        }
        ;
        c.prototype.keys = function() {
            return e(this, function(k) {
                return k.key
            })
        }
        ;
        c.prototype.values = function() {
            return e(this, function(k) {
                return k.value
            })
        }
        ;
        c.prototype.forEach = function(k, l) {
            for (var m = this.entries(), n; !(n = m.next()).done; )
                n = n.value,
                k.call(l, n[1], n[0], this)
        }
        ;
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(k, l) {
            var m = l && typeof l;
            "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++h,
            b.set(l, m)) : m = "p_" + l;
            var n = k[0][m];
            if (n && va(k[0], m))
                for (k = 0; k < n.length; k++) {
                    var p = n[k];
                    if (l !== l && p.key !== p.key || l === p.key)
                        return {
                            id: m,
                            list: n,
                            index: k,
                            tf: p
                        }
                }
            return {
                id: m,
                list: n,
                index: -1,
                tf: void 0
            }
        }
          , e = function(k, l) {
            var m = k[1];
            return na(function() {
                if (m) {
                    for (; m.head != k[1]; )
                        m = m.nl;
                    for (; m.next != m.head; )
                        return m = m.next,
                        {
                            done: !1,
                            value: l(m)
                        };
                    m = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }
          , f = function() {
            var k = {};
            return k.nl = k.next = k.head = k
        }
          , h = 0;
        return c
    });
    ma("Object.setPrototypeOf", function(a) {
        return a || _.Ga
    });
    ma("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Ha(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c; )
                if (d[--c] != b[--e])
                    return !1;
            return 0 >= e
        }
    });
    var La = function(a, b) {
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
    ma("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return La(this, function(b) {
                return b
            })
        }
    });
    ma("Set", function(a) {
        if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                return !1;
            try {
                var c = Object.seal({
                    x: 4
                })
                  , d = new a(_.ra([c]));
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
            } catch (h) {
                return !1
            }
        }())
            return a;
        var b = function(c) {
            this.Aa = new Map;
            if (c) {
                c = _.ra(c);
                for (var d; !(d = c.next()).done; )
                    this.add(d.value)
            }
            this.size = this.Aa.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.Aa.set(c, c);
            this.size = this.Aa.size;
            return this
        }
        ;
        b.prototype.delete = function(c) {
            c = this.Aa.delete(c);
            this.size = this.Aa.size;
            return c
        }
        ;
        b.prototype.clear = function() {
            this.Aa.clear();
            this.size = 0
        }
        ;
        b.prototype.has = function(c) {
            return this.Aa.has(c)
        }
        ;
        b.prototype.entries = function() {
            return this.Aa.entries()
        }
        ;
        b.prototype.values = function() {
            return this.Aa.values()
        }
        ;
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.Aa.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        }
        ;
        return b
    });
    ma("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return La(this, function(b, c) {
                return [b, c]
            })
        }
    });
    var Ma = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a))
                return {
                    PU: e,
                    VD: f
                }
        }
        return {
            PU: -1,
            VD: void 0
        }
    };
    ma("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return Ma(this, b, c).VD
        }
    });
    ma("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    ma("Array.prototype.values", function(a) {
        return a ? a : function() {
            return La(this, function(b, c) {
                return c
            })
        }
    });
    ma("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(k) {
                return k
            }
            ;
            var e = []
              , f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var h = 0; !(f = b.next()).done; )
                    e.push(c.call(d, f.value, h++))
            } else
                for (f = b.length,
                h = 0; h < f; h++)
                    e.push(c.call(d, b[h], h));
            return e
        }
    });
    ma("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                va(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    ma("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                va(b, d) && c.push(b[d]);
            return c
        }
    });
    ma("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    ma("Array.prototype.includes", function(a) {
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
    ma("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Ha(this, b, "includes").indexOf(b, c || 0)
        }
    });
    ma("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = void 0 === b ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function(d) {
                Array.isArray(d) && 0 < b ? (d = Array.prototype.flat.call(d, b - 1),
                c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    });
    ma("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    ma("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    ma("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
        }
    });
    ma("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b)
                return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    ma("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });
    ma("String.prototype.replaceAll", function(a) {
        return a ? a : function(b, c) {
            if (b instanceof RegExp && !b.global)
                throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
            return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"),"g"), c)
        }
    });
    ma("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return Ma(this, b, c).PU
        }
    });
    ma("String.fromCodePoint", function(a) {
        return a ? a : function(b) {
            for (var c = "", d = 0; d < arguments.length; d++) {
                var e = Number(arguments[d]);
                if (0 > e || 1114111 < e || e !== Math.floor(e))
                    throw new RangeError("invalid_code_point " + e);
                65535 >= e ? c += String.fromCharCode(e) : (e -= 65536,
                c += String.fromCharCode(e >>> 10 & 1023 | 55296),
                c += String.fromCharCode(e & 1023 | 56320))
            }
            return c
        }
    });
    ma("String.prototype.codePointAt", function(a) {
        return a ? a : function(b) {
            var c = Ha(this, null, "codePointAt")
              , d = c.length;
            b = Number(b) || 0;
            if (0 <= b && b < d) {
                b |= 0;
                var e = c.charCodeAt(b);
                if (55296 > e || 56319 < e || b + 1 === d)
                    return e;
                b = c.charCodeAt(b + 1);
                return 56320 > b || 57343 < b ? e : 1024 * (e - 55296) + b + 9216
            }
        }
    });
    ma("globalThis", function(a) {
        return a || _.la
    });
    ma("Math.imul", function(a) {
        return a ? a : function(b, c) {
            b = Number(b);
            c = Number(c);
            var d = b & 65535
              , e = c & 65535;
            return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0
        }
    });
    ma("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    });
    _.Pa = {};
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    _.Ta = _.Ta || {};
    _.Va = this || self;
    _.Wa = _.Va._F_toggles || [];
    _.Ya = "closure_uid_" + (1E9 * Math.random() >>> 0);
    _.$a = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    ;
    _.r = function(a, b) {
        a = a.split(".");
        var c = _.Va;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
    }
    ;
    _.ab = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.N = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.It = function(d, e, f) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++)
                h[k - 2] = arguments[k];
            return b.prototype[e].apply(d, h)
        }
    }
    ;
    _.db = window.osapi = window.osapi || {};
    window.___jsl = window.___jsl || {};
    (window.___jsl.cd = window.___jsl.cd || []).push({
        gwidget: {
            parsetags: "explicit"
        },
        appsapi: {
            plus_one_service: "/plus/v1"
        },
        csi: {
            rate: .01
        },
        poshare: {
            hangoutContactPickerServer: "https://plus.google.com"
        },
        gappsutil: {
            required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
            display_on_page_ready: !1
        },
        appsutil: {
            required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
            display_on_page_ready: !1
        },
        "oauth-flow": {
            authUrl: "https://accounts.google.com/o/oauth2/auth",
            proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
            redirectUri: "postmessage"
        },
        iframes: {
            sharebox: {
                params: {
                    json: "&"
                },
                url: ":socialhost:/:session_prefix:_/sharebox/dialog"
            },
            plus: {
                url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
            },
            ":socialhost:": "https://apis.google.com",
            ":im_socialhost:": "https://plus.googleapis.com",
            domains_suggest: {
                url: "https://domains.google.com/suggest/flow"
            },
            card: {
                params: {
                    s: "#",
                    userid: "&"
                },
                url: ":socialhost:/:session_prefix:_/hovercard/internalcard"
            },
            ":signuphost:": "https://plus.google.com",
            ":gplus_url:": "https://plus.google.com",
            plusone: {
                url: ":socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1"
            },
            plus_share: {
                url: ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1"
            },
            plus_circle: {
                url: ":socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1"
            },
            plus_followers: {
                url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
            },
            configurator: {
                url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
            },
            appcirclepicker: {
                url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
            },
            page: {
                url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
            },
            person: {
                url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
            },
            community: {
                url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
            },
            follow: {
                url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
            },
            commentcount: {
                url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
            },
            comments: {
                url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1"
            },
            blogger: {
                url: ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1"
            },
            youtube: {
                url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1"
            },
            reportabuse: {
                url: ":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1"
            },
            additnow: {
                url: ":socialhost:/additnow/additnow.html"
            },
            appfinder: {
                url: "https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1"
            },
            ":source:": "1p"
        },
        poclient: {
            update_session: "google.updateSessionCallback"
        },
        "googleapis.config": {
            rpc: "/rpc",
            root: "https://content.googleapis.com",
            "root-1p": "https://clients6.google.com",
            useGapiForXd3: !0,
            xd3: "/static/proxy.html",
            auth: {
                useInterimAuth: !1
            }
        },
        report: {
            apis: ["iframes\\..*", "gadgets\\..*", "gapi\\.appcirclepicker\\..*", "gapi\\.client\\..*"],
            rate: 1E-4
        },
        client: {
            perApiBatch: !0
        }
    });
    var jb, kb;
    _.ib = function(a) {
        return function() {
            return _.gb[a].apply(this, arguments)
        }
    }
    ;
    _.gb = [];
    jb = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    ;
    kb = function(a, b, c) {
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
    ;
    _.z = function(a, b, c) {
        _.z = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? jb : kb;
        return _.z.apply(null, arguments)
    }
    ;
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var Db, Jb, Yb, nc, zc, Bc, Fc, Ic, Jc, Kc, Pc, Qc, Tc;
    _.lb = function(a, b) {
        return _.gb[a] = b
    }
    ;
    _.ob = function(a, b) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, _.ob);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b);
        this.UY = !0
    }
    ;
    _.qb = function(a, b) {
        return 0 <= (0,
        _.pb)(a, b)
    }
    ;
    _.rb = function(a, b) {
        b = (0,
        _.pb)(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }
    ;
    _.sb = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    ;
    _.tb = function(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    ;
    _.ub = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    ;
    _.vb = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }
    ;
    _.xb = function(a, b) {
        for (var c in a)
            if (a[c] == b)
                return !0;
        return !1
    }
    ;
    _.Bb = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < Ab.length; f++)
                c = Ab[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;
    _.Cb = function(a) {
        var b = arguments.length;
        if (1 == b && Array.isArray(arguments[0]))
            return _.Cb.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++)
            c[arguments[d]] = !0;
        return c
    }
    ;
    Db = function(a) {
        return {
            valueOf: a
        }.valueOf()
    }
    ;
    _.Hb = function(a) {
        if (a instanceof _.Gb)
            return a.xY;
        throw Error("m");
    }
    ;
    Jb = function(a) {
        return new Ib(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        }
        )
    }
    ;
    _.Mb = function(a) {
        var b = void 0 === b ? Kb : b;
        a: if (b = void 0 === b ? Kb : b,
        !(a instanceof _.Gb)) {
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d instanceof Ib && d.Jj(a)) {
                    a = new _.Gb(a);
                    break a
                }
            }
            a = void 0
        }
        return a || _.Lb
    }
    ;
    _.Ob = function(a) {
        if (Nb.test(a))
            return a
    }
    ;
    _.Pb = function(a) {
        return a instanceof _.Gb ? _.Hb(a) : _.Ob(a)
    }
    ;
    _.Tb = function(a, b) {
        b = void 0 === b ? {} : b;
        if (a instanceof _.Qb)
            return a;
        a = String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
        b.Ura && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
        b.Qda && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
        b.Vra && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
        return _.Rb(a)
    }
    ;
    _.Ub = function() {
        var a = _.Va.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    ;
    Yb = function(a) {
        return _.Vb ? _.Wb ? _.Wb.brands.some(function(b) {
            return (b = b.brand) && _.Xb(b, a)
        }) : !1 : !1
    }
    ;
    _.Zb = function(a) {
        return _.Xb(_.Ub(), a)
    }
    ;
    _.$b = function(a) {
        for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a); )
            c.push([d[1], d[2], d[3] || void 0]);
        return c
    }
    ;
    _.ac = function() {
        return _.Vb ? !!_.Wb && 0 < _.Wb.brands.length : !1
    }
    ;
    _.bc = function() {
        return _.ac() ? !1 : _.Zb("Opera")
    }
    ;
    _.cc = function() {
        return _.ac() ? !1 : _.Zb("Trident") || _.Zb("MSIE")
    }
    ;
    _.dc = function() {
        return _.ac() ? !1 : _.Zb("Edge")
    }
    ;
    _.ec = function() {
        return _.ac() ? Yb("Microsoft Edge") : _.Zb("Edg/")
    }
    ;
    _.fc = function() {
        return _.ac() ? Yb("Opera") : _.Zb("OPR")
    }
    ;
    _.gc = function() {
        return _.Zb("Firefox") || _.Zb("FxiOS")
    }
    ;
    _.jc = function() {
        return _.Zb("Safari") && !(_.hc() || (_.ac() ? 0 : _.Zb("Coast")) || _.bc() || _.dc() || _.ec() || _.fc() || _.gc() || _.Zb("Silk") || _.Zb("Android"))
    }
    ;
    _.hc = function() {
        return _.ac() ? Yb("Chromium") : (_.Zb("Chrome") || _.Zb("CriOS")) && !_.dc() || _.Zb("Silk")
    }
    ;
    _.kc = function() {
        return _.Zb("Android") && !(_.hc() || _.gc() || _.bc() || _.Zb("Silk"))
    }
    ;
    _.lc = function(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[c.find(function(d) {
                return d in b
            })] || ""
        }
    }
    ;
    _.mc = function(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1])
            return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a),
            "7.0" == c[1])
                if (a && a[1])
                    switch (a[1]) {
                    case "4.0":
                        b = "8.0";
                        break;
                    case "5.0":
                        b = "9.0";
                        break;
                    case "6.0":
                        b = "10.0";
                        break;
                    case "7.0":
                        b = "11.0"
                    }
                else
                    b = "7.0";
            else
                b = c[1];
        return b
    }
    ;
    nc = function() {
        return _.Vb ? !!_.Wb && !!_.Wb.platform : !1
    }
    ;
    _.oc = function() {
        return nc() ? "Android" === _.Wb.platform : _.Zb("Android")
    }
    ;
    _.pc = function() {
        return _.Zb("iPhone") && !_.Zb("iPod") && !_.Zb("iPad")
    }
    ;
    _.qc = function() {
        return _.pc() || _.Zb("iPad") || _.Zb("iPod")
    }
    ;
    _.rc = function() {
        return nc() ? "macOS" === _.Wb.platform : _.Zb("Macintosh")
    }
    ;
    _.sc = function() {
        return nc() ? "Windows" === _.Wb.platform : _.Zb("Windows")
    }
    ;
    _.tc = function() {
        return nc() ? "Chrome OS" === _.Wb.platform : _.Zb("CrOS")
    }
    ;
    _.vc = function(a, b) {
        if (1 === a.nodeType) {
            var c = a.tagName;
            if ("SCRIPT" === c || "STYLE" === c)
                throw Error("m");
        }
        a.innerHTML = _.uc(b)
    }
    ;
    _.wc = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    ;
    _.xc = function(a) {
        if (!(a instanceof Array)) {
            a = _.ra(a);
            for (var b, c = []; !(b = a.next()).done; )
                c.push(b.value);
            a = c
        }
        return a
    }
    ;
    _.A = function(a, b) {
        a.prototype = (0,
        _.ya)(b.prototype);
        a.prototype.constructor = a;
        if (_.Ga)
            (0,
            _.Ga)(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.N = b.prototype
    }
    ;
    _.yc = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    }
    ;
    _.Ac = function(a, b) {
        a = a.split(".");
        b = b || _.Va;
        for (var c = 0; c < a.length; c++)
            if (b = b[a[c]],
            null == b)
                return null;
        return b
    }
    ;
    Bc = function(a) {
        var b = _.Ac("WIZ_global_data.oxN3nb");
        a = b && b[a];
        return null != a ? a : !1
    }
    ;
    _.Cc = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }
    ;
    _.Ec = function(a) {
        var b = _.Cc(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    ;
    Fc = 0;
    _.Gc = function(a) {
        return Object.prototype.hasOwnProperty.call(a, _.Ya) && a[_.Ya] || (a[_.Ya] = ++Fc)
    }
    ;
    _.Hc = function() {
        return Date.now()
    }
    ;
    Ic = function(a) {
        return a
    }
    ;
    _.ab(_.ob, Error);
    _.ob.prototype.name = "CustomError";
    Jc = {};
    Kc = {};
    _.Mc = function(a, b) {
        this.l0 = a === Jc && b || "";
        this.B5 = Kc
    }
    ;
    _.Mc.prototype.toString = function() {
        return this.l0
    }
    ;
    _.Nc = function(a) {
        return a instanceof _.Mc && a.constructor === _.Mc && a.B5 === Kc ? a.l0 : "type_error:Const"
    }
    ;
    _.Oc = function(a) {
        return new _.Mc(Jc,a)
    }
    ;
    Qc = function() {
        if (void 0 === Pc) {
            var a = null
              , b = _.Va.trustedTypes;
            if (b && b.createPolicy)
                try {
                    a = b.createPolicy("gapi#html", {
                        createHTML: Ic,
                        createScript: Ic,
                        createScriptURL: Ic
                    })
                } catch (c) {
                    _.Va.console && _.Va.console.error(c.message)
                }
            Pc = a
        }
        return Pc
    }
    ;
    _.Rc = function(a) {
        this.vY = a
    }
    ;
    _.Rc.prototype.toString = function() {
        return this.vY + ""
    }
    ;
    _.Sc = function(a) {
        if (a instanceof _.Rc && a.constructor === _.Rc)
            return a.vY;
        _.Cc(a);
        return "type_error:TrustedResourceUrl"
    }
    ;
    Tc = {};
    _.Uc = function(a) {
        var b = Qc();
        a = b ? b.createScriptURL(a) : a;
        return new _.Rc(a,Tc)
    }
    ;
    _.Vc = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    ;
    _.pb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    _.Wc = Array.prototype.lastIndexOf ? function(a, b) {
        return Array.prototype.lastIndexOf.call(a, b, a.length - 1)
    }
    : function(a, b) {
        var c = a.length - 1;
        0 > c && (c = Math.max(0, a.length + c));
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.lastIndexOf(b, c);
        for (; 0 <= c; c--)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    _.Xc = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
    ;
    _.Yc = Array.prototype.filter ? function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, h = 0; h < c; h++)
            if (h in f) {
                var k = f[h];
                b.call(void 0, k, h, a) && (d[e++] = k)
            }
        return d
    }
    ;
    _.Zc = Array.prototype.map ? function(a, b, c) {
        return Array.prototype.map.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, h = 0; h < d; h++)
            h in f && (e[h] = b.call(c, f[h], h, a));
        return e
    }
    ;
    _.$c = Array.prototype.reduce ? function(a, b, c) {
        return Array.prototype.reduce.call(a, b, c)
    }
    : function(a, b, c) {
        var d = c;
        (0,
        _.Xc)(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }
    ;
    _.ad = Array.prototype.some ? function(a, b, c) {
        return Array.prototype.some.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a))
                return !0;
        return !1
    }
    ;
    _.bd = Array.prototype.every ? function(a, b, c) {
        return Array.prototype.every.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && !b.call(c, e[f], f, a))
                return !1;
        return !0
    }
    ;
    var Ab = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var hd, id, jd, kd, ld, md, fd, od;
    _.cd = function(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    }
    ;
    _.dd = function(a) {
        return /^[\s\xa0]*$/.test(a)
    }
    ;
    _.ed = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    ;
    _.nd = function(a) {
        if (!fd.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(hd, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(id, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(jd, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(kd, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(ld, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(md, "&#0;"));
        return a
    }
    ;
    hd = /&/g;
    id = /</g;
    jd = />/g;
    kd = /"/g;
    ld = /'/g;
    md = /\x00/g;
    fd = /[\x00&<>"']/;
    _.Xb = function(a, b) {
        return -1 != a.indexOf(b)
    }
    ;
    _.pd = function(a, b) {
        var c = 0;
        a = (0,
        _.ed)(String(a)).split(".");
        b = (0,
        _.ed)(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || ""
              , h = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == f[0].length && 0 == h[0].length)
                    break;
                c = od(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || od(0 == f[2].length, 0 == h[2].length) || od(f[2], h[2]);
                f = f[3];
                h = h[3]
            } while (0 == c)
        }
        return c
    }
    ;
    od = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;
    _.Gb = function(a) {
        this.xY = a
    }
    ;
    _.Gb.prototype.toString = function() {
        return this.xY
    }
    ;
    _.Lb = new _.Gb("about:invalid#zClosurez");
    var Ib, Kb, Nb;
    Ib = function(a) {
        this.Jj = a
    }
    ;
    Kb = [Jb("data"), Jb("http"), Jb("https"), Jb("mailto"), Jb("ftp"), new Ib(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    }
    )];
    _.qd = Db(function() {
        return "function" === typeof URL
    });
    Nb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
    _.rd = {};
    _.sd = function(a) {
        this.uY = a
    }
    ;
    _.sd.prototype.toString = function() {
        return this.uY.toString()
    }
    ;
    _.td = new _.sd("",_.rd);
    _.ud = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$");
    _.vd = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g");
    _.wd = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g");
    var zd;
    _.xd = {};
    _.yd = function(a) {
        this.tY = a
    }
    ;
    _.yd.prototype.toString = function() {
        return this.tY.toString()
    }
    ;
    _.Ad = function(a) {
        a = _.Nc(a);
        return 0 === a.length ? zd : new _.yd(a,_.xd)
    }
    ;
    zd = new _.yd("",_.xd);
    var Bd;
    Bd = {};
    _.Qb = function(a) {
        this.sY = a
    }
    ;
    _.Qb.prototype.toString = function() {
        return this.sY.toString()
    }
    ;
    _.uc = function(a) {
        if (a instanceof _.Qb && a.constructor === _.Qb)
            return a.sY;
        _.Cc(a);
        return "type_error:SafeHtml"
    }
    ;
    _.Cd = function(a) {
        return a instanceof _.Qb ? a : _.Rb(_.nd(String(a)))
    }
    ;
    _.Rb = function(a) {
        var b = Qc();
        a = b ? b.createHTML(a) : a;
        return new _.Qb(a,Bd)
    }
    ;
    _.Dd = new _.Qb(_.Va.trustedTypes && _.Va.trustedTypes.emptyHTML || "",Bd);
    var Fd = function(a, b, c, d) {
        var e = new Map(Ed);
        this.p6 = a;
        this.uR = e;
        this.q6 = b;
        this.j$ = c;
        this.OT = d
    };
    var Gd = "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ")
      , Ed = [["A", new Map([["href", {
        Cd: 2
    }]])], ["AREA", new Map([["href", {
        Cd: 2
    }]])], ["LINK", new Map([["href", {
        Cd: 2,
        conditions: new Map([["rel", new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]])
    }]])], ["SOURCE", new Map([["src", {
        Cd: 1
    }], ["srcset", {
        Cd: 1
    }]])], ["IMG", new Map([["src", {
        Cd: 1
    }], ["srcset", {
        Cd: 1
    }]])], ["VIDEO", new Map([["src", {
        Cd: 1
    }]])], ["AUDIO", new Map([["src", {
        Cd: 1
    }]])]]
      , Hd = "title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" ")
      , Id = [["dir", {
        Cd: 3,
        conditions: Db(function() {
            return new Map([["dir", new Set(["auto", "ltr", "rtl"])]])
        })
    }], ["async", {
        Cd: 3,
        conditions: Db(function() {
            return new Map([["async", new Set(["async"])]])
        })
    }], ["cite", {
        Cd: 2
    }], ["loading", {
        Cd: 3,
        conditions: Db(function() {
            return new Map([["loading", new Set(["eager", "lazy"])]])
        })
    }], ["poster", {
        Cd: 2
    }], ["target", {
        Cd: 3,
        conditions: Db(function() {
            return new Map([["target", new Set(["_self", "_blank"])]])
        })
    }]]
      , Jd = new Fd(new Set(Gd),new Set(Hd),new Map(Id))
      , Kd = new Fd(new Set(Gd.concat(["BUTTON", "INPUT"])),new Set(Db(function() {
        return Hd.concat(["class", "id", "name"])
    })),new Map(Db(function() {
        return Id.concat([["style", {
            Cd: 1
        }]])
    })))
      , Ld = new Fd(new Set(Db(function() {
        return Gd.concat("STYLE TITLE INPUT TEXTAREA BUTTON LABEL".split(" "))
    })),new Set(Db(function() {
        return Hd.concat(["class", "id", "tabindex", "contenteditable", "name"])
    })),new Map(Db(function() {
        return Id.concat([["style", {
            Cd: 1
        }]])
    })),new Set(["data-", "aria-"]));
    var Md;
    Md = function(a) {
        this.oZ = a
    }
    ;
    _.Nd = Db(function() {
        return new Md(Jd)
    });
    _.Od = Db(function() {
        return new Md(Kd)
    });
    _.Pd = Db(function() {
        return new Md(Ld)
    });
    var Qd = !!(_.Wa[0] & 512)
      , Rd = !!(_.Wa[0] & 1024)
      , Sd = !!(_.Wa[0] & 8);
    _.Vb = Qd ? Rd : Bc(610401301);
    _.Td = Qd ? Sd : Bc(188588736);
    var Ud;
    Ud = _.Va.navigator;
    _.Wb = Ud ? Ud.userAgentData || null : null;
    _.Vd = function(a) {
        _.Vd[" "](a);
        return a
    }
    ;
    _.Vd[" "] = function() {}
    ;
    _.Wd = function(a, b) {
        try {
            return _.Vd(a[b]),
            !0
        } catch (c) {}
        return !1
    }
    ;
    var me, ne, se;
    _.Xd = _.bc();
    _.Zd = _.cc();
    _.$d = _.Zb("Edge");
    _.ae = _.$d || _.Zd;
    _.be = _.Zb("Gecko") && !(_.Xb(_.Ub().toLowerCase(), "webkit") && !_.Zb("Edge")) && !(_.Zb("Trident") || _.Zb("MSIE")) && !_.Zb("Edge");
    _.ce = _.Xb(_.Ub().toLowerCase(), "webkit") && !_.Zb("Edge");
    _.de = _.ce && _.Zb("Mobile");
    _.ee = _.rc();
    _.fe = _.sc();
    _.ge = (nc() ? "Linux" === _.Wb.platform : _.Zb("Linux")) || _.tc();
    _.he = _.oc();
    _.ie = _.pc();
    _.je = _.Zb("iPad");
    _.ke = _.Zb("iPod");
    _.le = _.qc();
    me = function() {
        var a = _.Va.document;
        return a ? a.documentMode : void 0
    }
    ;
    a: {
        var oe = ""
          , pe = function() {
            var a = _.Ub();
            if (_.be)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (_.$d)
                return /Edge\/([\d\.]+)/.exec(a);
            if (_.Zd)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (_.ce)
                return /WebKit\/(\S+)/.exec(a);
            if (_.Xd)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        pe && (oe = pe ? pe[1] : "");
        if (_.Zd) {
            var qe = me();
            if (null != qe && qe > parseFloat(oe)) {
                ne = String(qe);
                break a
            }
        }
        ne = oe
    }
    _.re = ne;
    if (_.Va.document && _.Zd) {
        var te = me();
        se = te ? te : parseInt(_.re, 10) || void 0
    } else
        se = void 0;
    _.ue = se;
    try {
        (new self.OffscreenCanvas(0,0)).getContext("2d")
    } catch (a) {}
    ;var ve, xe;
    ve = _.Vc(function() {
        var a = document.createElement("div")
          , b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = _.uc(_.Dd);
        return !b.parentElement
    });
    _.we = function(a, b) {
        if (ve())
            for (; a.lastChild; )
                a.removeChild(a.lastChild);
        a.innerHTML = _.uc(b)
    }
    ;
    xe = /^[\w+/_-]+[=]{0,2}$/;
    _.ye = function(a, b) {
        b = (b || _.Va).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && xe.test(a) ? a : "" : ""
    }
    ;
    _.ze = function(a, b) {
        this.width = a;
        this.height = b
    }
    ;
    _.Ae = function(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    ;
    _.g = _.ze.prototype;
    _.g.clone = function() {
        return new _.ze(this.width,this.height)
    }
    ;
    _.g.jy = function() {
        return this.width * this.height
    }
    ;
    _.g.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    _.g.isEmpty = function() {
        return !this.jy()
    }
    ;
    _.g.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    _.g.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    _.g.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    _.g.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    }
    ;
    _.De = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    }
    : function(a, b) {
        return Array(b + 1).join(a)
    }
    ;
    _.Ee = 2147483648 * Math.random() | 0;
    var Ke, Re, Qe;
    _.He = function(a) {
        return a ? new _.Fe(_.Ge(a)) : zc || (zc = new _.Fe)
    }
    ;
    _.Ie = function(a, b) {
        return "string" === typeof b ? a.getElementById(b) : b
    }
    ;
    _.Je = function(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))
            return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, h; h = a[f]; f++)
                    b == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; h = a[f]; f++)
                b = h.className,
                "function" == typeof b.split && _.qb(b.split(/\s+/), c) && (d[e++] = h);
            d.length = e;
            return d
        }
        return a
    }
    ;
    _.Le = function(a, b) {
        _.tb(b, function(c, d) {
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Ke.hasOwnProperty(d) ? a.setAttribute(Ke[d], c) : _.cd(d, "aria-") || _.cd(d, "data-") ? a.setAttribute(d, c) : a[d] = c
        })
    }
    ;
    Ke = {
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
    };
    _.Ne = function(a) {
        return _.Me(a || window)
    }
    ;
    _.Me = function(a) {
        a = a.document;
        a = _.Oe(a) ? a.documentElement : a.body;
        return new _.ze(a.clientWidth,a.clientHeight)
    }
    ;
    _.Pe = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    }
    ;
    _.Se = function(a, b) {
        var c = b[1]
          , d = Qe(a, String(b[0]));
        c && ("string" === typeof c ? d.className = c : Array.isArray(c) ? d.className = c.join(" ") : _.Le(d, c));
        2 < b.length && Re(a, d, b, 2);
        return d
    }
    ;
    Re = function(a, b, c, d) {
        function e(k) {
            k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!_.Ec(f) || _.wc(f) && 0 < f.nodeType)
                e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (_.wc(f)) {
                            var h = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            h = "function" == typeof f.item;
                            break a
                        }
                    }
                    h = !1
                }
                _.Xc(h ? _.sb(f) : f, e)
            }
        }
    }
    ;
    _.Te = function(a) {
        return Qe(document, a)
    }
    ;
    Qe = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }
    ;
    _.Oe = function(a) {
        return "CSS1Compat" == a.compatMode
    }
    ;
    _.Ue = function(a) {
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
    _.Ve = function(a, b) {
        Re(_.Ge(a), a, arguments, 1)
    }
    ;
    _.Xe = function(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }
    ;
    _.Ye = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    }
    ;
    _.Ze = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    ;
    _.$e = function(a) {
        return void 0 != a.children ? a.children : Array.prototype.filter.call(a.childNodes, function(b) {
            return 1 == b.nodeType
        })
    }
    ;
    _.af = function(a) {
        return _.wc(a) && 1 == a.nodeType
    }
    ;
    _.bf = function(a, b) {
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
    ;
    _.Ge = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    ;
    _.cf = function(a, b) {
        if ("textContent"in a)
            a.textContent = b;
        else if (3 == a.nodeType)
            a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild; )
                a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else
            _.Xe(a),
            a.appendChild(_.Ge(a).createTextNode(String(b)))
    }
    ;
    _.Fe = function(a) {
        this.Rb = a || _.Va.document || document
    }
    ;
    _.g = _.Fe.prototype;
    _.g.Ka = _.He;
    _.g.sL = _.ib(0);
    _.g.Bb = function() {
        return this.Rb
    }
    ;
    _.g.O = _.ib(1);
    _.g.getElementsByTagName = function(a, b) {
        return (b || this.Rb).getElementsByTagName(String(a))
    }
    ;
    _.g.xH = _.ib(2);
    _.g.wa = function(a, b, c) {
        return _.Se(this.Rb, arguments)
    }
    ;
    _.g.createElement = function(a) {
        return Qe(this.Rb, a)
    }
    ;
    _.g.createTextNode = function(a) {
        return this.Rb.createTextNode(String(a))
    }
    ;
    _.g.getWindow = function() {
        var a = this.Rb;
        return a.parentWindow || a.defaultView
    }
    ;
    _.g.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    _.g.append = _.Ve;
    _.g.canHaveChildren = _.Ue;
    _.g.De = _.Xe;
    _.g.lV = _.Ye;
    _.g.removeNode = _.Ze;
    _.g.GG = _.$e;
    _.g.isElement = _.af;
    _.g.contains = _.bf;
    _.g.aH = _.Ge;
    _.g.Hj = _.ib(3);
    /*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    _.df = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    }
    ;
    _.ef = window;
    _.ff = document;
    _.gf = _.ef.location;
    _.hf = /\[native code\]/;
    _.jf = function(a, b, c) {
        return a[b] = a[b] || c
    }
    ;
    _.kf = function() {
        var a;
        if ((a = Object.create) && _.hf.test(a))
            a = a(null);
        else {
            a = {};
            for (var b in a)
                a[b] = void 0
        }
        return a
    }
    ;
    _.lf = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;
    _.mf = function(a, b) {
        a = a || {};
        for (var c in a)
            _.lf(a, c) && (b[c] = a[c])
    }
    ;
    _.nf = _.jf(_.ef, "gapi", {});
    _.of = function(a, b, c) {
        var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)","g");
        b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)","g");
        if (a = a && (d.exec(a) || b.exec(a)))
            try {
                c = decodeURIComponent(a[2])
            } catch (e) {}
        return c
    }
    ;
    _.pf = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source);
    _.qf = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,"g");
    _.rf = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$","i");
    _.tf = function(a, b, c) {
        _.sf(a, b, c, "add", "at")
    }
    ;
    _.sf = function(a, b, c, d, e) {
        if (a[d + "EventListener"])
            a[d + "EventListener"](b, c, !1);
        else if (a[e + "tachEvent"])
            a[e + "tachEvent"]("on" + b, c)
    }
    ;
    _.uf = {};
    _.uf = _.jf(_.ef, "___jsl", _.kf());
    _.jf(_.uf, "I", 0);
    _.jf(_.uf, "hel", 10);
    var vf, wf, yf, zf, Bf, Af, Cf, Df;
    vf = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b[a] = b[a] || [];
        return b[a]
    }
    ;
    wf = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b.cfg = !a && b.cfg || {};
        return b.cfg
    }
    ;
    yf = function(a) {
        return "object" === typeof a && /\[native code\]/.test(a.push)
    }
    ;
    zf = function(a, b, c) {
        if (b && "object" === typeof b)
            for (var d in b)
                !Object.prototype.hasOwnProperty.call(b, d) || c && "___goc" === d && "undefined" === typeof b[d] || (a[d] && b[d] && "object" === typeof a[d] && "object" === typeof b[d] && !yf(a[d]) && !yf(b[d]) ? zf(a[d], b[d]) : b[d] && "object" === typeof b[d] ? (a[d] = yf(b[d]) ? [] : {},
                zf(a[d], b[d])) : a[d] = b[d])
    }
    ;
    Bf = function(a, b) {
        if (a && !/^\s+$/.test(a)) {
            for (; 0 == a.charCodeAt(a.length - 1); )
                a = a.substring(0, a.length - 1);
            var c = a;
            try {
                var d = window.JSON.parse(a)
            } catch (f) {}
            if ("object" === typeof d)
                return d;
            try {
                d = window.JSON.parse("{" + a + "}")
            } catch (f) {}
            if ("object" === typeof d)
                return d;
            a = a.replace(RegExp("([^\"',{}\\s]+?)\\s*:\\s*(.*?)[,}\\s]", "g"), function(f, h, k) {
                k = k.startsWith('"') ? "%DOUBLE_QUOTE%" + k.substring(1) : k;
                k = k.endsWith('"') ? k.slice(0, -1) + "%DOUBLE_QUOTE%" : k;
                return "%DOUBLE_QUOTE%" + h + "%DOUBLE_QUOTE%:" + k
            });
            a = a.replace(/\\'/g, "%SINGLE_QUOTE%");
            a = a.replace(/"/g, '\\"');
            a = a.replace(/'/g, '"');
            a = a.replace(/%SINGLE_QUOTE%/g, "'");
            a = a.replace(/%DOUBLE_QUOTE%/g, '"');
            try {
                d = window.JSON.parse(a)
            } catch (f) {}
            if ("object" === typeof d)
                return d;
            try {
                d = window.JSON.parse("{" + a + "}")
            } catch (f) {}
            if ("object" === typeof d)
                return d;
            a = document.getElementsByTagName("script") || [];
            var e;
            0 < a.length && (e = a[0].nonce || a[0].getAttribute("nonce"));
            if (e && e !== b)
                return {};
            d = Af(c);
            return "object" === typeof d ? d : {}
        }
    }
    ;
    Af = function(a) {
        try {
            var b = (new Function("return (" + a + "\n)"))()
        } catch (c) {}
        if ("object" === typeof b)
            return b;
        try {
            b = (new Function("return ({" + a + "\n})"))()
        } catch (c) {}
        return b
    }
    ;
    Cf = function(a, b) {
        var c = {
            ___goc: void 0
        };
        a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length - 1], "___goc") && "undefined" === typeof a[a.length - 1].___goc && (c = a.pop());
        zf(c, b);
        a.push(c)
    }
    ;
    Df = function(a) {
        wf(!0);
        var b = window.___gcfg
          , c = vf("cu")
          , d = window.___gu;
        b && b !== d && (Cf(c, b),
        window.___gu = b);
        b = vf("cu");
        var e = document.getElementsByTagName("script") || [];
        d = [];
        var f = [];
        f.push.apply(f, vf("us"));
        for (var h = 0; h < e.length; ++h)
            for (var k = e[h], l = 0; l < f.length; ++l)
                k.src && 0 == k.src.indexOf(f[l]) && d.push(k);
        0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
        for (e = 0; e < d.length; ++e)
            d[e].getAttribute("gapi_processed") || (d[e].setAttribute("gapi_processed", !0),
            (f = d[e]) ? (h = f.nodeType,
            f = 3 == h || 4 == h ? f.nodeValue : f.textContent || "") : f = void 0,
            h = d[e].nonce || d[e].getAttribute("nonce"),
            (f = Bf(f, h)) && b.push(f));
        a && Cf(c, a);
        d = vf("cd");
        a = 0;
        for (b = d.length; a < b; ++a)
            zf(wf(), d[a], !0);
        d = vf("ci");
        a = 0;
        for (b = d.length; a < b; ++a)
            zf(wf(), d[a], !0);
        a = 0;
        for (b = c.length; a < b; ++a)
            zf(wf(), c[a], !0)
    }
    ;
    _.Ef = function(a, b) {
        var c = wf();
        if (!a)
            return c;
        a = a.split("/");
        for (var d = 0, e = a.length; c && "object" === typeof c && d < e; ++d)
            c = c[a[d]];
        return d === a.length && void 0 !== c ? c : b
    }
    ;
    _.Ff = function(a, b) {
        var c;
        if ("string" === typeof a) {
            var d = c = {};
            a = a.split("/");
            for (var e = 0, f = a.length; e < f - 1; ++e) {
                var h = {};
                d = d[a[e]] = h
            }
            d[a[e]] = b
        } else
            c = a;
        Df(c)
    }
    ;
    var Gf = function() {
        var a = window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis),
        _.jf(_.uf, "ci", []).push(a),
        window.__GOOGLEAPIS = void 0)
    };
    Gf && Gf();
    Df();
    _.r("gapi.config.get", _.Ef);
    _.r("gapi.config.update", _.Ff);
    var Hf, If, Jf, Kf, Lf, Mf, Of, Sf, Tf, Uf, Vf, Pf, Qf;
    Hf = function(a, b) {
        var c = b.createRange();
        c.selectNode(b.body);
        a = _.Rb(a);
        return c.createContextualFragment(_.uc(a))
    }
    ;
    If = function(a) {
        a = a.nodeName;
        return "string" === typeof a ? a : "FORM"
    }
    ;
    Jf = function(a) {
        a = a.nodeType;
        return 1 === a || "number" !== typeof a
    }
    ;
    Kf = function(a, b, c) {
        a.setAttribute(b, c)
    }
    ;
    Lf = function(a, b) {
        var c = new XMLHttpRequest;
        c.open("POST", a);
        c.setRequestHeader("Content-Type", "application/json");
        c.send(b)
    }
    ;
    Mf = function(a, b) {
        ("undefined" !== typeof window && window.navigator && void 0 !== window.navigator.sendBeacon ? navigator.sendBeacon.bind(navigator) : Lf)("https://csp.withgoogle.com/csp/lcreport/" + a.vK, JSON.stringify({
            host: window.location.hostname,
            type: b,
            additionalData: void 0
        }))
    }
    ;
    Of = function(a, b) {
        try {
            _.Nf(_.Pd, a)
        } catch (c) {
            return Mf(b, "H_SLSANITIZE"),
            !0
        }
        try {
            _.Nf(_.Od, a)
        } catch (c) {
            return Mf(b, "H_RSANITIZE"),
            !0
        }
        try {
            _.Nf(_.Nd, a)
        } catch (c) {
            return Mf(b, "H_SANITIZE"),
            !0
        }
        return !1
    }
    ;
    _.Rf = function(a, b) {
        a = _.df(a);
        var c;
        if (c = b) {
            var d, e;
            c = Math.random() < (null != (e = null != (d = b.osa) ? d : Pf[b.vK[0]]) ? e : 0)
        }
        if (c && !1 !== window.SAFEVALUES_REPORTING && "DocumentFragment"in window) {
            var f, h;
            Math.random() < (null != (h = null != (f = b.ira) ? f : Qf[b.vK[0]]) ? h : 0) && Mf(b, "HEARTBEAT");
            Of(a, b) || _.Tb(a).toString() !== a && Mf(b, "H_ESCAPE")
        }
        return _.Rb(a)
    }
    ;
    Sf = ["data:", "http:", "https:", "mailto:", "ftp:"];
    Tf = function(a, b, c) {
        c = a.uR.get(c);
        return (null == c ? 0 : c.has(b)) ? c.get(b) : a.q6.has(b) ? {
            Cd: 1
        } : (c = a.j$.get(b)) ? c : a.OT && [].concat(_.xc(a.OT)).some(function(d) {
            return 0 === b.indexOf(d)
        }) ? {
            Cd: 1
        } : {
            Cd: 0
        }
    }
    ;
    Uf = function(a, b, c) {
        var d = If(b);
        c = c.createElement(d);
        b = b.attributes;
        for (var e = _.ra(b), f = e.next(); !f.done; f = e.next()) {
            var h = f.value;
            f = h.name;
            h = h.value;
            var k = Tf(a.oZ, f, d), l;
            a: {
                if (l = k.conditions) {
                    l = _.ra(l);
                    for (var m = l.next(); !m.done; m = l.next()) {
                        var n = _.ra(m.value);
                        m = n.next().value;
                        n = n.next().value;
                        var p = void 0;
                        if ((m = null == (p = b.getNamedItem(m)) ? void 0 : p.value) && !n.has(m)) {
                            l = !1;
                            break a
                        }
                    }
                }
                l = !0
            }
            if (l)
                switch (k.Cd) {
                case 1:
                    Kf(c, f, h);
                    break;
                case 2:
                    a: if (k = void 0,
                    _.qd) {
                        try {
                            k = new URL(h)
                        } catch (q) {
                            k = "https:";
                            break a
                        }
                        k = k.protocol
                    } else
                        b: {
                            k = document.createElement("a");
                            try {
                                k.href = h
                            } catch (q) {
                                k = void 0;
                                break b
                            }
                            k = k.protocol;
                            k = ":" === k || "" === k ? "https:" : k
                        }
                    Kf(c, f, void 0 !== k && -1 !== Sf.indexOf(k.toLowerCase()) ? h : "about:invalid#zClosurez");
                    break;
                case 3:
                    Kf(c, f, h.toLowerCase());
                    break;
                case 4:
                    Kf(c, f, h)
                }
        }
        return c
    }
    ;
    Vf = function(a, b, c) {
        b = Hf(b, c);
        b = document.createTreeWalker(b, 5, function(k) {
            if (3 === k.nodeType)
                k = 1;
            else if (Jf(k))
                if (k = If(k),
                null === k)
                    k = 2;
                else {
                    var l = a.oZ;
                    k = "FORM" !== k && (l.p6.has(k) || l.uR.has(k)) ? 1 : 2
                }
            else
                k = 2;
            return k
        }, !1);
        for (var d = b.nextNode(), e = c.createDocumentFragment(), f = e; null !== d; ) {
            var h = void 0;
            if (3 === d.nodeType)
                h = document.createTextNode(d.data);
            else if (Jf(d))
                h = Uf(a, d, c);
            else
                throw Error("m");
            f.appendChild(h);
            if (d = b.firstChild())
                f = h;
            else
                for (; !(d = b.nextSibling()) && (d = b.parentNode()); )
                    f = f.parentNode
        }
        return e
    }
    ;
    _.Nf = function(a, b) {
        var c = document.implementation.createHTMLDocument("");
        a = Vf(a, b, c);
        c = c.body;
        c.appendChild(a);
        c = (new XMLSerializer).serializeToString(c);
        c = c.slice(c.indexOf(">") + 1, c.lastIndexOf("</"));
        return _.Rb(c)
    }
    ;
    Pf = {
        0: 1,
        1: 1
    };
    Qf = {
        0: .1,
        1: .1
    };
    var ag, bg, cg, ig, jg, kg, lg, mg, ng, og, pg, qg, rg, sg, tg, ug, vg, wg, xg, yg, zg, Ag, Bg, Cg, Dg, Eg, Fg, Gg, Hg, Ig, Jg, Mg, Ng;
    cg = void 0;
    ig = function(a) {
        try {
            return _.Va.JSON.parse.call(_.Va.JSON, a)
        } catch (b) {
            return !1
        }
    }
    ;
    jg = function(a) {
        return Object.prototype.toString.call(a)
    }
    ;
    kg = jg(0);
    lg = jg(new Date(0));
    mg = jg(!0);
    ng = jg("");
    og = jg({});
    pg = jg([]);
    qg = function(a, b) {
        if (b)
            for (var c = 0, d = b.length; c < d; ++c)
                if (a === b[c])
                    throw new TypeError("Converting circular structure to JSON");
        d = typeof a;
        if ("undefined" !== d) {
            c = Array.prototype.slice.call(b || [], 0);
            c[c.length] = a;
            b = [];
            var e = jg(a);
            if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a, "toJSON") || (e !== pg || a.constructor !== Array && a.constructor !== Object) && (e !== og || a.constructor !== Array && a.constructor !== Object) && e !== ng && e !== kg && e !== mg && e !== lg))
                return qg(a.toJSON.call(a), c);
            if (null == a)
                b[b.length] = "null";
            else if (e === kg)
                a = Number(a),
                isNaN(a) || isNaN(a - a) ? a = "null" : -0 === a && 0 > 1 / a && (a = "-0"),
                b[b.length] = String(a);
            else if (e === mg)
                b[b.length] = String(!!Number(a));
            else {
                if (e === lg)
                    return qg(a.toISOString.call(a), c);
                if (e === pg && jg(a.length) === kg) {
                    b[b.length] = "[";
                    var f = 0;
                    for (d = Number(a.length) >> 0; f < d; ++f)
                        f && (b[b.length] = ","),
                        b[b.length] = qg(a[f], c) || "null";
                    b[b.length] = "]"
                } else if (e == ng && jg(a.length) === kg) {
                    b[b.length] = '"';
                    f = 0;
                    for (c = Number(a.length) >> 0; f < c; ++f)
                        d = String.prototype.charAt.call(a, f),
                        e = String.prototype.charCodeAt.call(a, f),
                        b[b.length] = "\b" === d ? "\\b" : "\f" === d ? "\\f" : "\n" === d ? "\\n" : "\r" === d ? "\\r" : "\t" === d ? "\\t" : "\\" === d || '"' === d ? "\\" + d : 31 >= e ? "\\u" + (e + 65536).toString(16).substr(1) : 32 <= e && 65535 >= e ? d : "\ufffd";
                    b[b.length] = '"'
                } else if ("object" === d) {
                    b[b.length] = "{";
                    d = 0;
                    for (f in a)
                        Object.prototype.hasOwnProperty.call(a, f) && (e = qg(a[f], c),
                        void 0 !== e && (d++ && (b[b.length] = ","),
                        b[b.length] = qg(f),
                        b[b.length] = ":",
                        b[b.length] = e));
                    b[b.length] = "}"
                } else
                    return
            }
            return b.join("")
        }
    }
    ;
    rg = /[\0-\x07\x0b\x0e-\x1f]/;
    sg = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/;
    tg = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/;
    ug = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/;
    vg = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g;
    wg = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g;
    xg = /[ \t\n\r]+/g;
    yg = /[^"]:/;
    zg = /""/g;
    Ag = /true|false|null/g;
    Bg = /00/;
    Cg = /[\{]([^0\}]|0[^:])/;
    Dg = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/;
    Eg = /[^\[,:][\[\{]/;
    Fg = /^(\{|\}|\[|\]|,|:|0)+/;
    Gg = /\u2028/g;
    Hg = /\u2029/g;
    Ig = function(a) {
        a = String(a);
        if (rg.test(a) || sg.test(a) || tg.test(a) || ug.test(a))
            return !1;
        var b = a.replace(vg, '""');
        b = b.replace(wg, "0");
        b = b.replace(xg, "");
        if (yg.test(b))
            return !1;
        b = b.replace(zg, "0");
        b = b.replace(Ag, "0");
        if (Bg.test(b) || Cg.test(b) || Dg.test(b) || Eg.test(b) || !b || (b = b.replace(Fg, "")))
            return !1;
        a = a.replace(Gg, "\\u2028").replace(Hg, "\\u2029");
        b = void 0;
        try {
            b = cg ? [ig(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)")
        } catch (c) {
            return !1
        }
        return b && 1 === b.length ? b[0] : !1
    }
    ;
    Jg = function() {
        var a = ((_.Va.document || {}).scripts || []).length;
        if ((void 0 === ag || void 0 === cg || bg !== a) && -1 !== bg) {
            ag = cg = !1;
            bg = -1;
            try {
                try {
                    cg = !!_.Va.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === _.Va.JSON.stringify.call(_.Va.JSON, {
                        a: [3, !0, new Date(0)],
                        c: function() {}
                    }) && !0 === ig("true") && 3 === ig('[{"a":3}]')[0].a
                } catch (b) {}
                ag = cg && !ig("[00]") && !ig('"\u0007"') && !ig('"\\0"') && !ig('"\\v"')
            } finally {
                bg = a
            }
        }
    }
    ;
    _.Kg = function(a) {
        if (-1 === bg)
            return !1;
        Jg();
        return (ag ? ig : Ig)(a)
    }
    ;
    _.Lg = function(a) {
        if (-1 !== bg)
            return Jg(),
            cg ? _.Va.JSON.stringify.call(_.Va.JSON, a) : qg(a)
    }
    ;
    Mg = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (new Date(0)).toISOString();
    Ng = function() {
        var a = Date.prototype.getUTCFullYear.call(this);
        return [0 > a ? "-" + String(1E6 - a).substr(1) : 9999 >= a ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 + Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T", String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1), "Z"].join("")
    }
    ;
    Date.prototype.toISOString = Mg ? Ng : Date.prototype.toISOString;
    var Eh = function() {
        this.blockSize = -1
    };
    var Fh = function() {
        this.blockSize = -1;
        this.blockSize = 64;
        this.Xc = [];
        this.bF = [];
        this.S5 = [];
        this.XB = [];
        this.XB[0] = 128;
        for (var a = 1; a < this.blockSize; ++a)
            this.XB[a] = 0;
        this.JD = this.Ar = 0;
        this.reset()
    };
    _.ab(Fh, Eh);
    Fh.prototype.reset = function() {
        this.Xc[0] = 1732584193;
        this.Xc[1] = 4023233417;
        this.Xc[2] = 2562383102;
        this.Xc[3] = 271733878;
        this.Xc[4] = 3285377520;
        this.JD = this.Ar = 0
    }
    ;
    var Gh = function(a, b, c) {
        c || (c = 0);
        var d = a.S5;
        if ("string" === typeof b)
            for (var e = 0; 16 > e; e++)
                d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3),
                c += 4;
        else
            for (e = 0; 16 > e; e++)
                d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3],
                c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.Xc[0];
        c = a.Xc[1];
        var h = a.Xc[2]
          , k = a.Xc[3]
          , l = a.Xc[4];
        for (e = 0; 80 > e; e++) {
            if (40 > e)
                if (20 > e) {
                    f = k ^ c & (h ^ k);
                    var m = 1518500249
                } else
                    f = c ^ h ^ k,
                    m = 1859775393;
            else
                60 > e ? (f = c & h | k & (c | h),
                m = 2400959708) : (f = c ^ h ^ k,
                m = 3395469782);
            f = (b << 5 | b >>> 27) + f + l + m + d[e] & 4294967295;
            l = k;
            k = h;
            h = (c << 30 | c >>> 2) & 4294967295;
            c = b;
            b = f
        }
        a.Xc[0] = a.Xc[0] + b & 4294967295;
        a.Xc[1] = a.Xc[1] + c & 4294967295;
        a.Xc[2] = a.Xc[2] + h & 4294967295;
        a.Xc[3] = a.Xc[3] + k & 4294967295;
        a.Xc[4] = a.Xc[4] + l & 4294967295
    };
    Fh.prototype.update = function(a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.blockSize, d = 0, e = this.bF, f = this.Ar; d < b; ) {
                if (0 == f)
                    for (; d <= c; )
                        Gh(this, a, d),
                        d += this.blockSize;
                if ("string" === typeof a)
                    for (; d < b; ) {
                        if (e[f] = a.charCodeAt(d),
                        ++f,
                        ++d,
                        f == this.blockSize) {
                            Gh(this, e);
                            f = 0;
                            break
                        }
                    }
                else
                    for (; d < b; )
                        if (e[f] = a[d],
                        ++f,
                        ++d,
                        f == this.blockSize) {
                            Gh(this, e);
                            f = 0;
                            break
                        }
            }
            this.Ar = f;
            this.JD += b
        }
    }
    ;
    Fh.prototype.digest = function() {
        var a = []
          , b = 8 * this.JD;
        56 > this.Ar ? this.update(this.XB, 56 - this.Ar) : this.update(this.XB, this.blockSize - (this.Ar - 56));
        for (var c = this.blockSize - 1; 56 <= c; c--)
            this.bF[c] = b & 255,
            b /= 256;
        Gh(this, this.bF);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8)
                a[b] = this.Xc[c] >> d & 255,
                ++b;
        return a
    }
    ;
    _.Hh = function() {
        this.aN = new Fh
    }
    ;
    _.g = _.Hh.prototype;
    _.g.reset = function() {
        this.aN.reset()
    }
    ;
    _.g.b1 = function(a) {
        this.aN.update(a)
    }
    ;
    _.g.YQ = function() {
        return this.aN.digest()
    }
    ;
    _.g.Ax = function(a) {
        a = unescape(encodeURIComponent(a));
        for (var b = [], c = 0, d = a.length; c < d; ++c)
            b.push(a.charCodeAt(c));
        this.b1(b)
    }
    ;
    _.g.hj = function() {
        for (var a = this.YQ(), b = "", c = 0; c < a.length; c++)
            b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c] % 16);
        return b
    }
    ;
    _.Qi = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b.cfg = !a && b.cfg || {};
        return b.cfg
    }
    ;
    _.Ri = function(a) {
        var b = _.Qi();
        if (!a)
            return b;
        a = a.split("/");
        for (var c = 0, d = a.length; b && "object" === typeof b && c < d; ++c)
            b = b[a[c]];
        return c === a.length && void 0 !== b ? b : void 0
    }
    ;
    _.Si = function(a, b) {
        b = _.Pb(b);
        void 0 !== b && (a.href = b)
    }
    ;
    var Ti;
    Ti = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//;
    _.Ui = function(a) {
        var b = _.Ri("googleapis.config/sessionIndex");
        "string" === typeof b && 254 < b.length && (b = null);
        null == b && (b = window.__X_GOOG_AUTHUSER);
        "string" === typeof b && 254 < b.length && (b = null);
        if (null == b) {
            var c = window.google;
            c && (b = c.authuser)
        }
        "string" === typeof b && 254 < b.length && (b = null);
        null == b && (a = a || window.location.href,
        b = _.of(a, "authuser") || null,
        null == b && (b = (b = a.match(Ti)) ? b[1] : null));
        if (null == b)
            return null;
        b = String(b);
        254 < b.length && (b = null);
        return b
    }
    ;
    var nj, mj, tj, uj, oj, rj, pj, vj, qj;
    _.sj = function() {
        if (mj) {
            var a = new _.ef.Uint32Array(1);
            nj.getRandomValues(a);
            a = Number("0." + a[0])
        } else
            a = oj,
            a += parseInt(pj.substr(0, 20), 16),
            pj = qj(pj),
            a /= rj + Math.pow(16, 20);
        return a
    }
    ;
    nj = _.ef.crypto;
    mj = !1;
    tj = 0;
    uj = 0;
    oj = 1;
    rj = 0;
    pj = "";
    vj = function(a) {
        a = a || _.ef.event;
        var b = a.screenX + a.clientX << 16;
        b += a.screenY + a.clientY;
        b *= (new Date).getTime() % 1E6;
        oj = oj * b % rj;
        0 < tj && ++uj == tj && _.sf(_.ef, "mousemove", vj, "remove", "de")
    }
    ;
    qj = function(a) {
        var b = new _.Hh;
        b.Ax(a);
        return b.hj()
    }
    ;
    mj = !!nj && "function" == typeof nj.getRandomValues;
    mj || (rj = 1E6 * (screen.width * screen.width + screen.height),
    pj = qj(_.ff.cookie + "|" + _.ff.location + "|" + (new Date).getTime() + "|" + Math.random()),
    tj = _.Ri("random/maxObserveMousemove") || 0,
    0 != tj && _.tf(_.ef, "mousemove", vj));
    var mm, nm, om, pm, qm, rm, sm, tm, um, vm, wm, xm, Bm, Cm, Dm, Em, Fm, Gm, Hm, Im;
    _.lm = function(a, b) {
        if (!a)
            throw Error(b || "");
    }
    ;
    mm = /&/g;
    nm = /</g;
    om = />/g;
    pm = /"/g;
    qm = /'/g;
    rm = function(a) {
        return String(a).replace(mm, "&amp;").replace(nm, "&lt;").replace(om, "&gt;").replace(pm, "&quot;").replace(qm, "&#39;")
    }
    ;
    sm = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g;
    tm = /%([a-f]|[0-9a-fA-F][a-f])/g;
    um = /^(https?|ftp|file|chrome-extension):$/i;
    vm = function(a) {
        a = String(a);
        a = a.replace(sm, function(e) {
            try {
                return encodeURIComponent(e)
            } catch (f) {
                return encodeURIComponent(e.replace(/^[^%]+$/g, "\ufffd"))
            }
        }).replace(_.qf, function(e) {
            return e.replace(/%/g, "%25")
        }).replace(tm, function(e) {
            return e.toUpperCase()
        });
        a = a.match(_.pf) || [];
        var b = _.kf()
          , c = function(e) {
            return e.replace(/\\/g, "%5C").replace(/\^/g, "%5E").replace(/`/g, "%60").replace(/\{/g, "%7B").replace(/\|/g, "%7C").replace(/\}/g, "%7D")
        }
          , d = !!(a[1] || "").match(um);
        b.It = c((a[1] || "") + (a[2] || "") + (a[3] || (a[2] && d ? "/" : "")));
        d = function(e) {
            return c(e.replace(/\?/g, "%3F").replace(/#/g, "%23"))
        }
        ;
        b.query = a[5] ? [d(a[5])] : [];
        b.nj = a[7] ? [d(a[7])] : [];
        return b
    }
    ;
    wm = function(a) {
        return a.It + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.nj.length ? "#" + a.nj.join("&") : "")
    }
    ;
    xm = function(a, b) {
        var c = [];
        if (a)
            for (var d in a)
                if (_.lf(a, d) && null != a[d]) {
                    var e = b ? b(a[d]) : a[d];
                    c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e))
                }
        return c
    }
    ;
    _.ym = function(a, b, c, d) {
        a = vm(a);
        a.query.push.apply(a.query, xm(b, d));
        a.nj.push.apply(a.nj, xm(c, d));
        return wm(a)
    }
    ;
    _.zm = function(a, b) {
        var c = vm(b);
        b = c.It;
        c.query.length && (b += "?" + c.query.join(""));
        c.nj.length && (b += "#" + c.nj.join(""));
        var d = "";
        2E3 < b.length && (c = b,
        b = b.substr(0, 2E3),
        b = b.replace(_.rf, ""),
        d = c.substr(b.length));
        var e = a.createElement("div");
        a = a.createElement("a");
        c = vm(b);
        b = c.It;
        c.query.length && (b += "?" + c.query.join(""));
        c.nj.length && (b += "#" + c.nj.join(""));
        _.Si(a, new _.Gb(_.df(b)));
        e.appendChild(a);
        _.vc(e, _.Rb(e.innerHTML));
        b = String(e.firstChild.href);
        e.parentNode && e.parentNode.removeChild(e);
        c = vm(b + d);
        b = c.It;
        c.query.length && (b += "?" + c.query.join(""));
        c.nj.length && (b += "#" + c.nj.join(""));
        return b
    }
    ;
    _.Am = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    Cm = function(a) {
        for (; a.firstChild; )
            a.removeChild(a.firstChild)
    }
    ;
    Dm = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//;
    Em = function() {
        var a = _.Ri("googleapis.config/sessionDelegate");
        "string" === typeof a && 21 < a.length && (a = null);
        null == a && (a = (a = window.location.href.match(Dm)) ? a[1] : null);
        if (null == a)
            return null;
        a = String(a);
        21 < a.length && (a = null);
        return a
    }
    ;
    Fm = function() {
        var a = _.uf.onl;
        if (!a) {
            a = _.kf();
            _.uf.onl = a;
            var b = _.kf();
            a.e = function(c) {
                var d = b[c];
                d && (delete b[c],
                d())
            }
            ;
            a.a = function(c, d) {
                b[c] = d
            }
            ;
            a.r = function(c) {
                delete b[c]
            }
        }
        return a
    }
    ;
    Gm = function(a, b) {
        b = b.onload;
        return "function" === typeof b ? (Fm().a(a, b),
        b) : null
    }
    ;
    Hm = function(a) {
        _.lm(/^\w+$/.test(a), "Unsupported id - " + a);
        return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
    }
    ;
    Im = function(a) {
        Fm().r(a)
    }
    ;
    var Km, Lm, Pm;
    _.Jm = {
        allowtransparency: "true",
        frameborder: "0",
        hspace: "0",
        marginheight: "0",
        marginwidth: "0",
        scrolling: "no",
        style: "",
        tabindex: "0",
        vspace: "0",
        width: "100%"
    };
    Km = {
        allowtransparency: !0,
        onload: !0
    };
    Lm = 0;
    _.Mm = function(a, b) {
        var c = 0;
        do
            var d = b.id || ["I", Lm++, "_", (new Date).getTime()].join("");
        while (a.getElementById(d) && 5 > ++c);
        _.lm(5 > c, "Error creating iframe id");
        return d
    }
    ;
    _.Nm = function(a, b) {
        return a ? b + "/" + a : ""
    }
    ;
    _.Om = function(a, b, c, d) {
        var e = {}
          , f = {};
        a.documentMode && 9 > a.documentMode && (e.hostiemode = a.documentMode);
        _.mf(d.queryParams || {}, e);
        _.mf(d.fragmentParams || {}, f);
        var h = d.pfname;
        var k = _.kf();
        _.Ri("iframes/dropLegacyIdParam") || (k.id = c);
        k._gfid = c;
        k.parent = a.location.protocol + "//" + a.location.host;
        c = _.of(a.location.href, "parent");
        h = h || "";
        !h && c && (h = _.of(a.location.href, "_gfid", "") || _.of(a.location.href, "id", ""),
        h = _.Nm(h, _.of(a.location.href, "pfname", "")));
        h || (c = _.Kg(_.of(a.location.href, "jcp", ""))) && "object" == typeof c && (h = _.Nm(c.id, c.pfname));
        k.pfname = h;
        d.connectWithJsonParam && (h = {},
        h.jcp = _.Lg(k),
        k = h);
        h = _.of(b, "rpctoken") || e.rpctoken || f.rpctoken;
        h || (h = d.rpctoken || String(Math.round(1E8 * _.sj())),
        k.rpctoken = h);
        d.rpctoken = h;
        _.mf(k, d.connectWithQueryParams ? e : f);
        k = a.location.href;
        a = _.kf();
        (h = _.of(k, "_bsh", _.uf.bsh)) && (a._bsh = h);
        (k = _.uf.dpo ? _.uf.h : _.of(k, "jsh", _.uf.h)) && (a.jsh = k);
        d.hintInFragment ? _.mf(a, f) : _.mf(a, e);
        return _.ym(b, e, f, d.paramsSerializer)
    }
    ;
    Pm = function(a) {
        _.lm(!a || _.Am.test(a), "Illegal url for new iframe - " + a)
    }
    ;
    _.Qm = function(a, b, c, d, e) {
        Pm(c.src);
        var f, h = Gm(d, c), k = h ? Hm(d) : "";
        try {
            document.all && (f = a.createElement('<iframe frameborder="' + rm(String(c.frameborder)) + '" scrolling="' + rm(String(c.scrolling)) + '" ' + k + ' name="' + rm(String(c.name)) + '"/>'))
        } catch (m) {} finally {
            f || (f = _.He(a).wa("IFRAME"),
            h && (f.onload = function() {
                f.onload = null;
                h.call(this)
            }
            ,
            Im(d)))
        }
        f.setAttribute("ng-non-bindable", "");
        for (var l in c)
            a = c[l],
            "style" === l && "object" === typeof a ? _.mf(a, f.style) : Km[l] || f.setAttribute(l, String(a));
        (l = e && e.beforeNode || null) || e && e.dontclear || Cm(b);
        b.insertBefore(f, l);
        f = l ? l.previousSibling : b.lastChild;
        c.allowtransparency && (f.allowTransparency = !0);
        return f
    }
    ;
    var Rm, Um;
    Rm = /^:[\w]+$/;
    _.Sm = /:([a-zA-Z_]+):/g;
    _.Tm = function() {
        var a = _.Ui() || "0"
          , b = Em();
        var c = _.Ui() || a;
        var d = Em()
          , e = "";
        c && (e += "u/" + encodeURIComponent(String(c)) + "/");
        d && (e += "b/" + encodeURIComponent(String(d)) + "/");
        c = e || null;
        (e = (d = !1 === _.Ri("isLoggedIn")) ? "_/im/" : "") && (c = "");
        var f = _.Ri("iframes/:socialhost:")
          , h = _.Ri("iframes/:im_socialhost:");
        return Bm = {
            socialhost: f,
            ctx_socialhost: d ? h : f,
            session_index: a,
            session_delegate: b,
            session_prefix: c,
            im_prefix: e
        }
    }
    ;
    Um = function(a, b) {
        return _.Tm()[b] || ""
    }
    ;
    _.Vm = function(a) {
        return _.zm(_.ff, a.replace(_.Sm, Um))
    }
    ;
    _.Wm = function(a) {
        var b = a;
        Rm.test(a) && (b = _.Ri("iframes/" + b.substring(1) + "/url"),
        _.lm(!!b, "Unknown iframe url config for - " + a));
        return _.Vm(b)
    }
    ;
    _.Xm = function(a, b, c) {
        c = c || {};
        var d = c.attributes || {};
        _.lm(!(c.allowPost || c.forcePost) || !d.onload, "onload is not supported by post iframe (allowPost or forcePost)");
        a = _.Wm(a);
        d = b.ownerDocument || _.ff;
        var e = _.Mm(d, c);
        a = _.Om(d, a, e, c);
        var f = c
          , h = _.kf();
        _.mf(_.Jm, h);
        _.mf(f.attributes, h);
        h.name = h.id = e;
        h.src = a;
        c.eurl = a;
        c = (f = c) || {};
        var k = !!c.allowPost;
        if (c.forcePost || k && 2E3 < a.length) {
            c = vm(a);
            h.src = "";
            f.dropDataPostorigin || (h["data-postorigin"] = a);
            a = _.Qm(d, b, h, e);
            if (-1 != navigator.userAgent.indexOf("WebKit")) {
                var l = a.contentWindow.document;
                l.open();
                h = l.createElement("div");
                k = {};
                var m = e + "_inner";
                k.name = m;
                k.src = "";
                k.style = "display:none";
                _.Qm(d, h, k, m, f)
            }
            h = (f = c.query[0]) ? f.split("&") : [];
            f = [];
            for (k = 0; k < h.length; k++)
                m = h[k].split("=", 2),
                f.push([decodeURIComponent(m[0]), decodeURIComponent(m[1])]);
            c.query = [];
            h = wm(c);
            _.lm(_.Am.test(h), "Invalid URL: " + h);
            c = d.createElement("form");
            c.method = "POST";
            c.target = e;
            c.style.display = "none";
            e = _.Pb(h);
            void 0 !== e && (c.action = e);
            for (e = 0; e < f.length; e++)
                h = d.createElement("input"),
                h.type = "hidden",
                h.name = f[e][0],
                h.value = f[e][1],
                c.appendChild(h);
            b.appendChild(c);
            c.submit();
            c.parentNode.removeChild(c);
            l && l.close();
            b = a
        } else
            b = _.Qm(d, b, h, e, f);
        return b
    }
    ;
    var Og = function() {
        this.Wg = window.console
    };
    Og.prototype.log = function(a) {
        this.Wg && this.Wg.log && this.Wg.log(a)
    }
    ;
    Og.prototype.error = function(a) {
        this.Wg && (this.Wg.error ? this.Wg.error(a) : this.Wg.log && this.Wg.log(a))
    }
    ;
    Og.prototype.warn = function(a) {
        this.Wg && (this.Wg.warn ? this.Wg.warn(a) : this.Wg.log && this.Wg.log(a))
    }
    ;
    Og.prototype.debug = function() {}
    ;
    _.Pg = new Og;
    _.Ch = function(a) {
        if (!a)
            return "";
        if (/^about:(?:blank|srcdoc)$/.test(a))
            return window.origin || "";
        0 === a.indexOf("blob:") && (a = a.substring(5));
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var b = a.substring(a.indexOf("://") + 3)
          , c = b.indexOf("/");
        -1 != c && (b = b.substring(0, c));
        c = a.substring(0, a.indexOf("://"));
        if (!c)
            throw Error("B`" + a);
        if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c)
            throw Error("C`" + c);
        a = "";
        var d = b.indexOf(":");
        if (-1 != d) {
            var e = b.substring(d + 1);
            b = b.substring(0, d);
            if ("http" === c && "80" !== e || "https" === c && "443" !== e)
                a = ":" + e
        }
        return c + "://" + b + a
    }
    ;
    _.ki = function(a) {
        _.Va.setTimeout(function() {
            throw a;
        }, 0)
    }
    ;
    _.li = _.gc();
    _.mi = _.pc() || _.Zb("iPod");
    _.ni = _.Zb("iPad");
    _.oi = _.kc();
    _.pi = _.hc();
    _.qi = _.jc() && !_.qc();
    _.Ij = [];
    _.Jj = [];
    _.Kj = !1;
    _.Lj = function(a) {
        _.Ij[_.Ij.length] = a;
        if (_.Kj)
            for (var b = 0; b < _.Jj.length; b++)
                a((0,
                _.z)(_.Jj[b].wrap, _.Jj[b]))
    }
    ;
    _.wk = function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (_.Ec(d)) {
                var e = a.length || 0
                  , f = d.length || 0;
                a.length = e + f;
                for (var h = 0; h < f; h++)
                    a[e + h] = d[h]
            } else
                a.push(d)
        }
    }
    ;
    _.xk = function(a, b, c, d) {
        for (var e = 0, f = a.length, h; e < f; ) {
            var k = e + (f - e >>> 1);
            var l = c ? b.call(void 0, a[k], k, a) : b(d, a[k]);
            0 < l ? e = k + 1 : (f = k,
            h = !l)
        }
        return h ? e : -e - 1
    }
    ;
    _.yk = function(a, b) {
        var c = {}, d;
        for (d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
    ;
    _.zk = function(a, b, c, d) {
        b = _.Pb(b);
        return void 0 !== b ? a.open(b, c, d) : null
    }
    ;
    _.Ak = function(a) {
        return a.raw = a
    }
    ;
    var Bk = function(a) {
        this.T = a
    };
    _.g = Bk.prototype;
    _.g.value = function() {
        return this.T
    }
    ;
    _.g.Ze = function(a) {
        this.T.width = a;
        return this
    }
    ;
    _.g.Xb = function() {
        return this.T.width
    }
    ;
    _.g.he = function(a) {
        this.T.height = a;
        return this
    }
    ;
    _.g.Sc = function() {
        return this.T.height
    }
    ;
    _.g.Eh = function(a) {
        this.T.style = a;
        return this
    }
    ;
    _.g.getStyle = function() {
        return this.T.style
    }
    ;
    _.Ck = function(a) {
        this.T = a || {}
    }
    ;
    _.g = _.Ck.prototype;
    _.g.value = function() {
        return this.T
    }
    ;
    _.g.setUrl = function(a) {
        this.T.url = a;
        return this
    }
    ;
    _.g.getUrl = function() {
        return this.T.url
    }
    ;
    _.g.Eh = function(a) {
        this.T.style = a;
        return this
    }
    ;
    _.g.getStyle = function() {
        return this.T.style
    }
    ;
    _.g.Ye = function(a) {
        this.T.id = a;
        return this
    }
    ;
    _.g.getId = function() {
        return this.T.id
    }
    ;
    _.g.zn = function(a) {
        this.T.rpctoken = a;
        return this
    }
    ;
    _.Dk = function(a, b) {
        a.T.messageHandlers = b;
        return a
    }
    ;
    _.Ek = function(a, b) {
        a.T.messageHandlersFilter = b;
        return a
    }
    ;
    _.g = _.Ck.prototype;
    _.g.Ds = _.ib(4);
    _.g.getContext = function() {
        return this.T.context
    }
    ;
    _.g.xd = function() {
        return this.T.openerIframe
    }
    ;
    _.g.Ao = function() {
        this.T.attributes = this.T.attributes || {};
        return new Bk(this.T.attributes)
    }
    ;
    _.g.Nk = function() {
        return this.T.controller
    }
    ;
    var Lk;
    _.Fk = function(a, b) {
        b = b || a;
        for (var c = 0, d = 0, e = {}; d < a.length; ) {
            var f = a[d++]
              , h = _.wc(f) ? "o" + _.Gc(f) : (typeof f).charAt(0) + f;
            Object.prototype.hasOwnProperty.call(e, h) || (e[h] = !0,
            b[c++] = f)
        }
        b.length = c
    }
    ;
    _.Gk = function(a) {
        var b = {}, c;
        for (c in a)
            b[c] = a[c];
        return b
    }
    ;
    _.Hk = function() {}
    ;
    _.Ik = function(a) {
        return a
    }
    ;
    _.Jk = function(a) {
        a.prototype.$goog_Thenable = !0
    }
    ;
    _.Kk = function(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    }
    ;
    Lk = function(a, b) {
        this.y7 = a;
        this.Aea = b;
        this.JB = 0;
        this.CA = null
    }
    ;
    Lk.prototype.get = function() {
        if (0 < this.JB) {
            this.JB--;
            var a = this.CA;
            this.CA = a.next;
            a.next = null
        } else
            a = this.y7();
        return a
    }
    ;
    Lk.prototype.put = function(a) {
        this.Aea(a);
        100 > this.JB && (this.JB++,
        a.next = this.CA,
        this.CA = a)
    }
    ;
    var Nk, Ok, Mk;
    _.Pk = function(a) {
        a = Mk(a);
        "function" !== typeof _.Va.setImmediate || _.Va.Window && _.Va.Window.prototype && _.Va.Window.prototype.setImmediate == _.Va.setImmediate ? (Nk || (Nk = Ok()),
        Nk(a)) : _.Va.setImmediate(a)
    }
    ;
    Ok = function() {
        var a = _.Va.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.Zb("Presto") && (a = function() {
            var e = _.Te("IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var h = "callImmediate" + Math.random()
              , k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = (0,
            _.z)(function(l) {
                if (("*" == k || l.origin == k) && l.data == h)
                    this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(h, k)
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
                    var e = c.cb;
                    c.cb = null;
                    e()
                }
            }
            ;
            return function(e) {
                d.next = {
                    cb: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            _.Va.setTimeout(e, 0)
        }
    }
    ;
    Mk = _.Ik;
    _.Lj(function(a) {
        Mk = a
    });
    var Qk = function() {
        this.aE = this.kt = null
    };
    Qk.prototype.add = function(a, b) {
        var c = Rk.get();
        c.set(a, b);
        this.aE ? this.aE.next = c : this.kt = c;
        this.aE = c
    }
    ;
    Qk.prototype.remove = function() {
        var a = null;
        this.kt && (a = this.kt,
        this.kt = this.kt.next,
        this.kt || (this.aE = null),
        a.next = null);
        return a
    }
    ;
    var Rk = new Lk(function() {
        return new Sk
    }
    ,function(a) {
        return a.reset()
    }
    )
      , Sk = function() {
        this.next = this.scope = this.ii = null
    };
    Sk.prototype.set = function(a, b) {
        this.ii = a;
        this.scope = b;
        this.next = null
    }
    ;
    Sk.prototype.reset = function() {
        this.next = this.scope = this.ii = null
    }
    ;
    var Tk, Uk, Vk, Wk, Yk;
    Uk = !1;
    Vk = new Qk;
    _.Xk = function(a, b) {
        Tk || Wk();
        Uk || (Tk(),
        Uk = !0);
        Vk.add(a, b)
    }
    ;
    Wk = function() {
        if (_.Va.Promise && _.Va.Promise.resolve) {
            var a = _.Va.Promise.resolve(void 0);
            Tk = function() {
                a.then(Yk)
            }
        } else
            Tk = function() {
                _.Pk(Yk)
            }
    }
    ;
    Yk = function() {
        for (var a; a = Vk.remove(); ) {
            try {
                a.ii.call(a.scope)
            } catch (b) {
                _.ki(b)
            }
            Rk.put(a)
        }
        Uk = !1
    }
    ;
    var al, bl, cl, ql, ul, sl, vl;
    _.$k = function(a, b) {
        this.Ga = 0;
        this.Gf = void 0;
        this.zq = this.Yl = this.yb = null;
        this.sA = this.fG = !1;
        if (a != _.Hk)
            try {
                var c = this;
                a.call(b, function(d) {
                    Zk(c, 2, d)
                }, function(d) {
                    Zk(c, 3, d)
                })
            } catch (d) {
                Zk(this, 3, d)
            }
    }
    ;
    al = function() {
        this.next = this.context = this.bs = this.Tv = this.Pn = null;
        this.Et = !1
    }
    ;
    al.prototype.reset = function() {
        this.context = this.bs = this.Tv = this.Pn = null;
        this.Et = !1
    }
    ;
    bl = new Lk(function() {
        return new al
    }
    ,function(a) {
        a.reset()
    }
    );
    cl = function(a, b, c) {
        var d = bl.get();
        d.Tv = a;
        d.bs = b;
        d.context = c;
        return d
    }
    ;
    _.dl = function(a) {
        if (a instanceof _.$k)
            return a;
        var b = new _.$k(_.Hk);
        Zk(b, 2, a);
        return b
    }
    ;
    _.el = function(a) {
        return new _.$k(function(b, c) {
            c(a)
        }
        )
    }
    ;
    _.gl = function(a, b, c) {
        fl(a, b, c, null) || _.Xk(_.$a(b, a))
    }
    ;
    _.hl = function(a) {
        return new _.$k(function(b, c) {
            var d = a.length
              , e = [];
            if (d)
                for (var f = function(m, n) {
                    d--;
                    e[m] = n;
                    0 == d && b(e)
                }, h = function(m) {
                    c(m)
                }, k = 0, l; k < a.length; k++)
                    l = a[k],
                    _.gl(l, _.$a(f, k), h);
            else
                b(e)
        }
        )
    }
    ;
    _.jl = function() {
        var a, b, c = new _.$k(function(d, e) {
            a = d;
            b = e
        }
        );
        return new il(c,a,b)
    }
    ;
    _.$k.prototype.then = function(a, b, c) {
        return kl(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    }
    ;
    _.Jk(_.$k);
    _.ml = function(a, b) {
        b = cl(b, b);
        b.Et = !0;
        ll(a, b);
        return a
    }
    ;
    _.$k.prototype.ix = function(a, b) {
        return kl(this, null, a, b)
    }
    ;
    _.$k.prototype.catch = _.$k.prototype.ix;
    _.$k.prototype.cancel = function(a) {
        if (0 == this.Ga) {
            var b = new _.nl(a);
            _.Xk(function() {
                ol(this, b)
            }, this)
        }
    }
    ;
    var ol = function(a, b) {
        if (0 == a.Ga)
            if (a.yb) {
                var c = a.yb;
                if (c.Yl) {
                    for (var d = 0, e = null, f = null, h = c.Yl; h && (h.Et || (d++,
                    h.Pn == a && (e = h),
                    !(e && 1 < d))); h = h.next)
                        e || (f = h);
                    e && (0 == c.Ga && 1 == d ? ol(c, b) : (f ? (d = f,
                    d.next == c.zq && (c.zq = d),
                    d.next = d.next.next) : pl(c),
                    ql(c, e, 3, b)))
                }
                a.yb = null
            } else
                Zk(a, 3, b)
    }
      , ll = function(a, b) {
        a.Yl || 2 != a.Ga && 3 != a.Ga || rl(a);
        a.zq ? a.zq.next = b : a.Yl = b;
        a.zq = b
    }
      , kl = function(a, b, c, d) {
        var e = cl(null, null, null);
        e.Pn = new _.$k(function(f, h) {
            e.Tv = b ? function(k) {
                try {
                    var l = b.call(d, k);
                    f(l)
                } catch (m) {
                    h(m)
                }
            }
            : f;
            e.bs = c ? function(k) {
                try {
                    var l = c.call(d, k);
                    void 0 === l && k instanceof _.nl ? h(k) : f(l)
                } catch (m) {
                    h(m)
                }
            }
            : h
        }
        );
        e.Pn.yb = a;
        ll(a, e);
        return e.Pn
    };
    _.$k.prototype.iha = function(a) {
        this.Ga = 0;
        Zk(this, 2, a)
    }
    ;
    _.$k.prototype.jha = function(a) {
        this.Ga = 0;
        Zk(this, 3, a)
    }
    ;
    var Zk = function(a, b, c) {
        0 == a.Ga && (a === c && (b = 3,
        c = new TypeError("Promise cannot resolve to itself")),
        a.Ga = 1,
        fl(c, a.iha, a.jha, a) || (a.Gf = c,
        a.Ga = b,
        a.yb = null,
        rl(a),
        3 != b || c instanceof _.nl || sl(a, c)))
    }
      , fl = function(a, b, c, d) {
        if (a instanceof _.$k)
            return ll(a, cl(b || _.Hk, c || null, d)),
            !0;
        if (_.Kk(a))
            return a.then(b, c, d),
            !0;
        if (_.wc(a))
            try {
                var e = a.then;
                if ("function" === typeof e)
                    return tl(a, e, b, c, d),
                    !0
            } catch (f) {
                return c.call(d, f),
                !0
            }
        return !1
    }
      , tl = function(a, b, c, d, e) {
        var f = !1
          , h = function(l) {
            f || (f = !0,
            c.call(e, l))
        }
          , k = function(l) {
            f || (f = !0,
            d.call(e, l))
        };
        try {
            b.call(a, h, k)
        } catch (l) {
            k(l)
        }
    }
      , rl = function(a) {
        a.fG || (a.fG = !0,
        _.Xk(a.pz, a))
    }
      , pl = function(a) {
        var b = null;
        a.Yl && (b = a.Yl,
        a.Yl = b.next,
        b.next = null);
        a.Yl || (a.zq = null);
        return b
    };
    _.$k.prototype.pz = function() {
        for (var a; a = pl(this); )
            ql(this, a, this.Ga, this.Gf);
        this.fG = !1
    }
    ;
    ql = function(a, b, c, d) {
        if (3 == c && b.bs && !b.Et)
            for (; a && a.sA; a = a.yb)
                a.sA = !1;
        if (b.Pn)
            b.Pn.yb = null,
            ul(b, c, d);
        else
            try {
                b.Et ? b.Tv.call(b.context) : ul(b, c, d)
            } catch (e) {
                vl.call(null, e)
            }
        bl.put(b)
    }
    ;
    ul = function(a, b, c) {
        2 == b ? a.Tv.call(a.context, c) : a.bs && a.bs.call(a.context, c)
    }
    ;
    sl = function(a, b) {
        a.sA = !0;
        _.Xk(function() {
            a.sA && vl.call(null, b)
        })
    }
    ;
    vl = _.ki;
    _.nl = function(a) {
        _.ob.call(this, a);
        this.UY = !1
    }
    ;
    _.ab(_.nl, _.ob);
    _.nl.prototype.name = "cancel";
    var il = function(a, b, c) {
        this.promise = a;
        this.resolve = b;
        this.reject = c
    };
    _.wl = function(a) {
        return new _.$k(a)
    }
    ;
    var El = function() {
        this.ux = {
            PY: xl ? "../" + xl : null,
            bz: yl,
            NT: zl,
            Gra: Al,
            Jo: Bl,
            ysa: Cl
        };
        this.qg = _.ef;
        this.iY = this.D7;
        this.t8 = /MSIE\s*[0-8](\D|$)/.test(window.navigator.userAgent);
        if (this.ux.PY) {
            this.qg = this.ux.NT(this.qg, this.ux.PY);
            var a = this.qg.document
              , b = a.createElement("script");
            b.setAttribute("type", "text/javascript");
            b.text = "window.doPostMsg=function(w,s,o) {window.setTimeout(function(){w.postMessage(s,o);},0);};";
            a.body.appendChild(b);
            this.iY = this.qg.doPostMsg
        }
        this.bN = {};
        this.FN = {};
        a = (0,
        _.z)(this.FH, this);
        _.tf(this.qg, "message", a);
        _.jf(_.uf, "RPMQ", []).push(a);
        this.qg != this.qg.parent && Dl(this, this.qg.parent, this.XI(this.qg.name), "*")
    };
    El.prototype.XI = function(a) {
        return '{"h":"' + escape(a) + '"}'
    }
    ;
    var Jl = function(a) {
        var b = null;
        0 === a.indexOf('{"h":"') && a.indexOf('"}') === a.length - 2 && (b = unescape(a.substring(6, a.length - 2)));
        return b
    }
      , Kl = function(a) {
        if (!/^\s*{/.test(a))
            return !1;
        a = _.Kg(a);
        return null !== a && "object" === typeof a && !!a.g
    };
    El.prototype.FH = function(a) {
        var b = String(a.data);
        _.Pg.debug("gapix.rpc.receive(" + Al + "): " + (!b || 512 >= b.length ? b : b.substr(0, 512) + "... (" + b.length + " bytes)"));
        var c = 0 !== b.indexOf("!_");
        c || (b = b.substring(2));
        var d = Kl(b);
        if (!c && !d) {
            if (!d && (c = Jl(b))) {
                if (this.bN[c])
                    this.bN[c]();
                else
                    this.FN[c] = 1;
                return
            }
            var e = a.origin
              , f = this.ux.bz;
            this.t8 ? _.ef.setTimeout(function() {
                f(b, e)
            }, 0) : f(b, e)
        }
    }
    ;
    El.prototype.Nb = function(a, b) {
        ".." === a || this.FN[a] ? (b(),
        delete this.FN[a]) : this.bN[a] = b
    }
    ;
    var Dl = function(a, b, c, d) {
        var e = Kl(c) ? "" : "!_";
        _.Pg.debug("gapix.rpc.send(" + Al + "): " + (!c || 512 >= c.length ? c : c.substr(0, 512) + "... (" + c.length + " bytes)"));
        a.iY(b, e + c, d)
    };
    El.prototype.D7 = function(a, b, c) {
        a.postMessage(b, c)
    }
    ;
    El.prototype.send = function(a, b, c) {
        (a = this.ux.NT(this.qg, a)) && !a.closed && Dl(this, a, b, c)
    }
    ;
    var Ll, Ml, Nl, Ol, Pl, Ql, Rl, xl, Al, Sl, Tl, Ul, zl, Bl, Wl, Xl, bm, cm, em, Cl, gm, fm, Yl, Zl, hm, yl, im, jm;
    Ll = 0;
    Ml = [];
    Nl = {};
    Ol = {};
    Pl = _.ef.location.href;
    Ql = _.of(Pl, "rpctoken");
    Rl = _.of(Pl, "parent") || _.ff.referrer;
    xl = _.of(Pl, "rly");
    Al = xl || (_.ef !== _.ef.top || _.ef.opener) && _.ef.name || "..";
    Sl = null;
    Tl = {};
    Ul = function() {}
    ;
    _.Vl = {
        send: Ul,
        Nb: Ul,
        XI: Ul
    };
    zl = function(a, b) {
        var c = a;
        "/" == b.charAt(0) && (b = b.substring(1),
        c = _.ef.top);
        if (0 === b.length)
            return c;
        for (b = b.split("/"); b.length; )
            if (a = b.shift(),
            "{" == a.charAt(0) && "}" == a.charAt(a.length - 1) && (a = a.substring(1, a.length - 1)),
            ".." === a)
                c = c == c.parent ? c.opener : c.parent;
            else if (".." !== a && c.frames[a]) {
                var d = c.frames[a];
                if ("postMessage"in d)
                    c = d;
                else if (d instanceof HTMLIFrameElement && "contentWindow"in d && "postMessage"in d.contentWindow)
                    c = d.contentWindow;
                else {
                    var e = null;
                    c = _.ra(c.document.getElementsByTagName("iframe"));
                    for (var f = c.next(); !f.done; f = c.next())
                        if (f = f.value,
                        f.getAttribute("id") == a || f.getAttribute("name") == a)
                            e = f;
                    if (e && "contentWindow"in e)
                        c = e.contentWindow;
                    else
                        throw Error("O`" + d + "`" + a);
                }
            } else
                return null;
        return c
    }
    ;
    Bl = function(a) {
        return (a = Nl[a]) && a.token
    }
    ;
    Wl = function(a) {
        if (a.f in {})
            return !1;
        var b = a.t
          , c = Nl[a.r];
        a = a.origin;
        return c && (c.token === b || !c.token && !b) && (a === c.origin || "*" === c.origin)
    }
    ;
    Xl = function(a) {
        var b = a.id.split("/")
          , c = b[b.length - 1]
          , d = a.origin;
        return function(e) {
            var f = e.origin;
            return e.f == c && (d == f || "*" == d)
        }
    }
    ;
    _.$l = function(a, b, c) {
        a = Yl(a);
        Ol[a.name] = {
            ii: b,
            Iv: a.Iv,
            it: c || Wl
        };
        Zl()
    }
    ;
    _.am = function(a) {
        delete Ol[Yl(a).name]
    }
    ;
    bm = {};
    cm = function(a, b) {
        (a = bm["_" + a]) && a[1](this) && a[0].call(this, b)
    }
    ;
    em = function(a) {
        var b = a.c;
        if (!b)
            return Ul;
        var c = a.r
          , d = a.g ? "legacy__" : "";
        return function() {
            var e = [].slice.call(arguments, 0);
            e.unshift(c, d + "__cb", null, b);
            _.dm.apply(null, e)
        }
    }
    ;
    Cl = function(a) {
        Sl = a
    }
    ;
    gm = function(a) {
        Tl[a] || (Tl[a] = _.ef.setTimeout(function() {
            Tl[a] = !1;
            fm(a)
        }, 0))
    }
    ;
    fm = function(a) {
        var b = Nl[a];
        if (b && b.ready) {
            var c = b.mK;
            for (b.mK = []; c.length; )
                _.Vl.send(a, _.Lg(c.shift()), b.origin)
        }
    }
    ;
    Yl = function(a) {
        return 0 === a.indexOf("legacy__") ? {
            name: a.substring(8),
            Iv: !0
        } : {
            name: a,
            Iv: !1
        }
    }
    ;
    Zl = function() {
        for (var a = _.Ri("rpc/residenceSec") || 60, b = (new Date).getTime() / 1E3, c, d = 0; c = Ml[d]; ++d) {
            var e = c.Lp;
            if (!e || 0 < a && b - c.timestamp > a)
                Ml.splice(d, 1),
                --d;
            else {
                var f = e.s
                  , h = Ol[f] || Ol["*"];
                if (h)
                    if (Ml.splice(d, 1),
                    --d,
                    e.origin = c.origin,
                    c = em(e),
                    e.callback = c,
                    h.it(e)) {
                        if ("__cb" !== f && !!h.Iv != !!e.g)
                            break;
                        e = h.ii.apply(e, e.a);
                        void 0 !== e && c(e)
                    } else
                        _.Pg.debug("gapix.rpc.rejected(" + Al + "): " + f)
            }
        }
    }
    ;
    hm = function(a, b, c) {
        Ml.push({
            Lp: a,
            origin: b,
            timestamp: (new Date).getTime() / 1E3
        });
        c || Zl()
    }
    ;
    yl = function(a, b) {
        a = _.Kg(a);
        hm(a, b, !1)
    }
    ;
    im = function(a) {
        for (; a.length; )
            hm(a.shift(), this.origin, !0);
        Zl()
    }
    ;
    jm = function(a) {
        var b = !1;
        a = a.split("|");
        var c = a[0];
        0 <= c.indexOf("/") && (b = !0);
        return {
            id: c,
            origin: a[1] || "*",
            tI: b
        }
    }
    ;
    _.km = function(a, b, c, d) {
        var e = jm(a);
        d && (_.ef.frames[e.id] = _.ef.frames[e.id] || d);
        a = e.id;
        if (!Nl.hasOwnProperty(a)) {
            c = c || null;
            d = e.origin;
            if (".." === a)
                d = _.Ch(Rl),
                c = c || Ql;
            else if (!e.tI) {
                var f = _.ff.getElementById(a);
                f && (f = f.src,
                d = _.Ch(f),
                c = c || _.of(f, "rpctoken"))
            }
            "*" === e.origin && d || (d = e.origin);
            Nl[a] = {
                token: c,
                mK: [],
                origin: d,
                Mea: b,
                IY: function() {
                    var h = a;
                    Nl[h].ready = 1;
                    fm(h)
                }
            };
            _.Vl.Nb(a, Nl[a].IY)
        }
        return Nl[a].IY
    }
    ;
    _.dm = function(a, b, c, d) {
        a = a || "..";
        _.km(a);
        a = a.split("|", 1)[0];
        var e = b
          , f = a
          , h = [].slice.call(arguments, 3)
          , k = c
          , l = Al
          , m = Ql
          , n = Nl[f]
          , p = l
          , q = jm(f);
        if (n && ".." !== f) {
            if (q.tI) {
                if (!(m = Nl[f].Mea)) {
                    m = Sl ? Sl.substring(1).split("/") : [Al];
                    p = m.length - 1;
                    for (f = _.ef.parent; f !== _.ef.top; ) {
                        var u = f.parent;
                        if (!p--) {
                            for (var v = null, t = u.frames.length, w = 0; w < t; ++w)
                                u.frames[w] == f && (v = w);
                            m.unshift("{" + v + "}")
                        }
                        f = u
                    }
                    m = "/" + m.join("/")
                }
                p = m
            } else
                p = l = "..";
            m = n.token
        }
        k && q ? (n = Wl,
        q.tI && (n = Xl(q)),
        bm["_" + ++Ll] = [k, n],
        k = Ll) : k = null;
        h = {
            s: e,
            f: l,
            r: p,
            t: m,
            c: k,
            a: h
        };
        e = Yl(e);
        h.s = e.name;
        h.g = e.Iv;
        Nl[a].mK.push(h);
        gm(a)
    }
    ;
    if ("function" === typeof _.ef.postMessage || "object" === typeof _.ef.postMessage)
        _.Vl = new El,
        _.$l("__cb", cm, function() {
            return !0
        }),
        _.$l("_processBatch", im, function() {
            return !0
        }),
        _.km("..");
    var Ym;
    Ym = function() {
        function a(k, l) {
            k = window.getComputedStyle(k, "").getPropertyValue(l).match(/^([0-9]+)/);
            return parseInt(k[0], 10)
        }
        for (var b = 0, c = [document.body]; 0 < c.length; ) {
            var d = c.shift()
              , e = d.childNodes;
            if ("undefined" !== typeof d.style) {
                var f = d.style.overflowY;
                f || (f = (f = document.defaultView.getComputedStyle(d, null)) ? f.overflowY : null);
                if ("visible" != f && "inherit" != f && (f = d.style.height,
                f || (f = (f = document.defaultView.getComputedStyle(d, null)) ? f.height : ""),
                0 < f.length && "auto" != f))
                    continue
            }
            for (d = 0; d < e.length; d++) {
                f = e[d];
                if ("undefined" !== typeof f.offsetTop && "undefined" !== typeof f.offsetHeight) {
                    var h = f.offsetTop + f.offsetHeight + a(f, "margin-bottom");
                    b = Math.max(b, h)
                }
                c.push(f)
            }
        }
        return b + a(document.body, "border-bottom") + a(document.body, "margin-bottom") + a(document.body, "padding-bottom")
    }
    ;
    _.Zm = function() {
        var a = 0;
        self.innerHeight ? a = self.innerHeight : document.documentElement && document.documentElement.clientHeight ? a = document.documentElement.clientHeight : document.body && (a = document.body.clientHeight);
        var b = document.body
          , c = document.documentElement;
        if ("CSS1Compat" === document.compatMode && c.scrollHeight)
            return c.scrollHeight !== a ? c.scrollHeight : c.offsetHeight;
        if (0 <= navigator.userAgent.indexOf("AppleWebKit"))
            return Ym();
        if (b && c) {
            var d = c.scrollHeight
              , e = c.offsetHeight;
            c.clientHeight !== e && (d = b.scrollHeight,
            e = b.offsetHeight);
            return d > a ? d > e ? d : e : d < e ? d : e
        }
    }
    ;
    var $m = function(a, b) {
        return _.xk(a, b, !0)
    }, an = function(a) {
        var b = function(c) {
            return new (a().Context)(c)
        };
        b.prototype.addOnConnectHandler = function(c, d, e, f) {
            return a().Context.prototype.addOnConnectHandler.apply(this, [c, d, e, f])
        }
        ;
        b.prototype.addOnOpenerHandler = function(c, d, e) {
            return a().Context.prototype.addOnOpenerHandler.apply(this, [c, d, e])
        }
        ;
        b.prototype.closeSelf = function(c, d, e) {
            return a().Context.prototype.closeSelf.apply(this, [c, d, e])
        }
        ;
        b.prototype.connectIframes = function(c, d) {
            a().Context.prototype.connectIframes.apply(this, [c, d])
        }
        ;
        b.prototype.getFrameName = function() {
            return a().Context.prototype.getFrameName.apply(this)
        }
        ;
        b.prototype.getGlobalParam = function(c) {
            a().Context.prototype.getGlobalParam.apply(this, [c])
        }
        ;
        b.prototype.getParentIframe = function() {
            return a().Context.prototype.getParentIframe.apply(this)
        }
        ;
        b.prototype.getWindow = function() {
            return a().Context.prototype.getWindow.apply(this)
        }
        ;
        b.prototype.isDisposed = function() {
            return a().Context.prototype.isDisposed.apply(this)
        }
        ;
        b.prototype.open = function(c, d) {
            return a().Context.prototype.open.apply(this, [c, d])
        }
        ;
        b.prototype.openChild = function(c) {
            return a().Context.prototype.openChild.apply(this, [c])
        }
        ;
        b.prototype.ready = function(c, d, e, f) {
            a().Context.prototype.ready.apply(this, [c, d, e, f])
        }
        ;
        b.prototype.removeOnConnectHandler = function(c) {
            a().Context.prototype.removeOnConnectHandler.apply(this, [c])
        }
        ;
        b.prototype.restyleSelf = function(c, d, e) {
            return a().Context.prototype.restyleSelf.apply(this, [c, d, e])
        }
        ;
        b.prototype.setCloseSelfFilter = function(c) {
            a().Context.prototype.setCloseSelfFilter.apply(this, [c])
        }
        ;
        b.prototype.setGlobalParam = function(c, d) {
            a().Context.prototype.setGlobalParam.apply(this, [c, d])
        }
        ;
        b.prototype.setRestyleSelfFilter = function(c) {
            a().Context.prototype.setRestyleSelfFilter.apply(this, [c])
        }
        ;
        return b
    }, bn = function(a) {
        var b = function(c, d, e, f) {
            return new (a().Iframe)(c,d,e,f)
        };
        b.prototype.applyIframesApi = function(c) {
            a().Iframe.prototype.applyIframesApi(c)
        }
        ;
        b.prototype.close = function(c, d) {
            return a().Iframe.prototype.close.apply(this, [c, d])
        }
        ;
        b.prototype.getContext = function() {
            return a().Iframe.prototype.getContext.apply(this, [])
        }
        ;
        b.prototype.getFrameName = function() {
            return a().Iframe.prototype.getFrameName.apply(this, [])
        }
        ;
        b.prototype.getId = function() {
            return a().Iframe.prototype.getId.apply(this, [])
        }
        ;
        b.prototype.getIframeEl = function() {
            return a().Iframe.prototype.getIframeEl.apply(this, [])
        }
        ;
        b.prototype.getOrigin = function() {
            return a().Iframe.prototype.getOrigin.apply(this, [])
        }
        ;
        b.prototype.getParam = function(c) {
            a().Iframe.prototype.getParam.apply(this, [c])
        }
        ;
        b.prototype.getSiteEl = function() {
            return a().Iframe.prototype.getSiteEl.apply(this, [])
        }
        ;
        b.prototype.getWindow = function() {
            return a().Iframe.prototype.getWindow.apply(this, [])
        }
        ;
        b.prototype.isDisposed = function() {
            return a().Iframe.prototype.isDisposed.apply(this, [])
        }
        ;
        b.prototype.ping = function(c, d) {
            return a().Iframe.prototype.ping.apply(this, [c, d])
        }
        ;
        b.prototype.register = function(c, d, e) {
            a().Iframe.prototype.register.apply(this, [c, d, e])
        }
        ;
        b.prototype.registerWasClosed = function(c, d) {
            a().Iframe.prototype.registerWasClosed.apply(this, [c, d])
        }
        ;
        b.prototype.registerWasRestyled = function(c, d) {
            a().Iframe.prototype.registerWasRestyled.apply(this, [c, d])
        }
        ;
        b.prototype.restyle = function(c, d) {
            return a().Iframe.prototype.restyle.apply(this, [c, d])
        }
        ;
        b.prototype.send = function(c, d, e, f) {
            return a().Iframe.prototype.send.apply(this, [c, d, e, f])
        }
        ;
        b.prototype.setParam = function(c, d) {
            a().Iframe.prototype.setParam.apply(this, [c, d])
        }
        ;
        b.prototype.setSiteEl = function(c) {
            a().Iframe.prototype.setSiteEl.apply(this, [c])
        }
        ;
        b.prototype.unregister = function(c, d) {
            a().Iframe.prototype.unregister.apply(this, [c, d])
        }
        ;
        return b
    }, cn, dn, hn, kn, pn, yn, zn, Bn, Fn, Gn, Jn, Ln, Mn, On, Nn, Pn;
    _.Ck.prototype.Ds = _.lb(4, function(a) {
        this.T.apis = a;
        return this
    });
    cn = function(a, b) {
        a.T.onload = b
    }
    ;
    dn = function(a) {
        return a.T.rpctoken
    }
    ;
    _.en = function(a, b) {
        a.T.queryParams = b;
        return a
    }
    ;
    _.fn = function(a, b) {
        a.T.relayOpen = b;
        return a
    }
    ;
    _.gn = function(a, b) {
        a.T.onClose = b;
        return a
    }
    ;
    hn = function(a, b) {
        a.T.controllerData = b
    }
    ;
    _.jn = function(a) {
        a.T.waitForOnload = !0;
        return a
    }
    ;
    kn = function(a) {
        return (a = a.T.timeout) ? a : null
    }
    ;
    _.ln = function(a) {
        return !!a && "object" === typeof a && _.hf.test(a.push)
    }
    ;
    _.mn = function(a) {
        for (var b = 0; b < this.length; b++)
            if (this[b] === a)
                return b;
        return -1
    }
    ;
    _.nn = function(a, b, c) {
        if (a) {
            _.lm(_.ln(a), "arrayForEach was called with a non array value");
            for (var d = 0; d < a.length; d++)
                b.call(c, a[d], d)
        }
    }
    ;
    _.on = function(a, b, c) {
        if (a)
            if (_.ln(a))
                _.nn(a, b, c);
            else {
                _.lm("object" === typeof a, "objectForEach was called with a non object value");
                c = c || a;
                for (var d in a)
                    _.lf(a, d) && void 0 !== a[d] && b.call(c, a[d], d)
            }
    }
    ;
    pn = function(a) {
        this.T = a || {}
    }
    ;
    pn.prototype.value = function() {
        return this.T
    }
    ;
    pn.prototype.getIframe = function() {
        return this.T.iframe
    }
    ;
    var qn = function(a, b) {
        a.T.role = b;
        return a
    }
      , rn = function(a, b) {
        a.T.data = b;
        return a
    };
    pn.prototype.Bl = function(a) {
        this.T.setRpcReady = a;
        return this
    }
    ;
    var sn = function(a) {
        return a.T.setRpcReady
    };
    pn.prototype.zn = function(a) {
        this.T.rpctoken = a;
        return this
    }
    ;
    var tn = function(a) {
        a.T.selfConnect = !0;
        return a
    }
      , un = function(a) {
        this.T = a || {}
    };
    un.prototype.value = function() {
        return this.T
    }
    ;
    var wn = function(a) {
        var b = new vn;
        b.T.role = a;
        return b
    };
    un.prototype.BT = function() {
        return this.T.role
    }
    ;
    un.prototype.Nc = function(a) {
        this.T.handler = a;
        return this
    }
    ;
    un.prototype.Cb = function() {
        return this.T.handler
    }
    ;
    var xn = function(a, b) {
        a.T.filter = b;
        return a
    };
    un.prototype.Ds = function(a) {
        this.T.apis = a;
        return this
    }
    ;
    Bn = /^[\w\.\-]*$/;
    _.Cn = function(a) {
        return a.getOrigin() === a.getContext().getOrigin()
    }
    ;
    _.Dn = function() {
        return !0
    }
    ;
    _.En = function(a) {
        for (var b = _.kf(), c = 0; c < a.length; c++)
            b[a[c]] = !0;
        return function(d) {
            return !!b[d.Ld]
        }
    }
    ;
    Fn = function(a, b, c) {
        a = yn[a];
        if (!a)
            return [];
        for (var d = [], e = 0; e < a.length; e++)
            d.push(_.dl(a[e].call(c, b, c)));
        return d
    }
    ;
    Gn = function(a, b, c) {
        return function(d) {
            if (!b.isDisposed()) {
                var e = this.origin
                  , f = b.getOrigin();
                _.lm(e === f, "Wrong origin " + e + " != " + f);
                e = this.callback;
                d = Fn(a, d, b);
                !c && 0 < d.length && _.hl(d).then(e)
            }
        }
    }
    ;
    _.Hn = function(a, b, c) {
        _.lm("_default" != a, "Cannot update default api");
        zn[a] = {
            map: b,
            filter: c
        }
    }
    ;
    _.In = function(a, b, c) {
        _.lm("_default" != a, "Cannot update default api");
        _.jf(zn, a, {
            map: {},
            filter: _.Cn
        }).map[b] = c
    }
    ;
    Jn = function(a, b) {
        _.jf(zn, "_default", {
            map: {},
            filter: _.Dn
        }).map[a] = b;
        _.on(_.An.Bg, function(c) {
            c.register(a, b, _.Dn)
        })
    }
    ;
    _.Kn = function() {
        return _.An
    }
    ;
    Ln = /^https?:\/\/[^\/%\\?#\s]+$/i;
    Mn = {
        longdesc: !0,
        name: !0,
        src: !0,
        frameborder: !0,
        marginwidth: !0,
        marginheight: !0,
        scrolling: !0,
        align: !0,
        height: !0,
        width: !0,
        id: !0,
        "class": !0,
        title: !0,
        tabindex: !0,
        hspace: !0,
        vspace: !0,
        allowtransparency: !0
    };
    On = function(a) {
        this.resolve = this.reject = null;
        this.promise = _.wl((0,
        _.z)(function(b, c) {
            this.resolve = b;
            this.reject = c
        }, this));
        a && (this.promise = Nn(this.promise, a))
    }
    ;
    Nn = function(a, b) {
        return a.then(function(c) {
            try {
                b(c)
            } catch (d) {}
            return c
        })
    }
    ;
    Pn = function(a) {
        this.Dg = a;
        this.Context = an(a);
        this.Iframe = bn(a)
    }
    ;
    _.g = Pn.prototype;
    _.g.CROSS_ORIGIN_IFRAMES_FILTER = function(a) {
        return this.Dg().CROSS_ORIGIN_IFRAMES_FILTER(a)
    }
    ;
    _.g.SAME_ORIGIN_IFRAMES_FILTER = function(a) {
        return this.Dg().SAME_ORIGIN_IFRAMES_FILTER(a)
    }
    ;
    _.g.create = function(a, b, c) {
        return this.Dg().create(a, b, c)
    }
    ;
    _.g.getBeforeOpenStyle = function(a) {
        return this.Dg().getBeforeOpenStyle(a)
    }
    ;
    _.g.getContext = function() {
        return this.Dg().getContext()
    }
    ;
    _.g.getStyle = function(a) {
        return this.Dg().getStyle(a)
    }
    ;
    _.g.makeWhiteListIframesFilter = function(a) {
        return this.Dg().makeWhiteListIframesFilter(a)
    }
    ;
    _.g.registerBeforeOpenStyle = function(a, b) {
        return this.Dg().registerBeforeOpenStyle(a, b)
    }
    ;
    _.g.registerIframesApi = function(a, b, c) {
        return this.Dg().registerIframesApi(a, b, c)
    }
    ;
    _.g.registerIframesApiHandler = function(a, b, c) {
        return this.Dg().registerIframesApiHandler(a, b, c)
    }
    ;
    _.g.registerStyle = function(a, b) {
        return this.Dg().registerStyle(a, b)
    }
    ;
    var Qn = function() {
        this.Ni = []
    };
    Qn.prototype.Dg = function(a) {
        return this.Ni.length ? Rn(this.Ni[0], a) : void 0
    }
    ;
    var Rn = function(a, b) {
        b = void 0 === b ? function(c) {
            return new c
        }
        : b;
        return a.nf ? b(a.nf) : a.instance
    }
      , Sn = function() {
        Qn.apply(this, arguments)
    };
    _.A(Sn, Qn);
    var Un = function(a) {
        var b = Tn.SQ
          , c = a.priority
          , d = ~$m(b.Ni, function(e) {
            return e.priority < c ? -1 : 1
        });
        b.Ni.splice(d, 0, a)
    };
    var Tn = new function() {
        var a = this;
        this.SQ = new Sn;
        this.instance = new Pn(function() {
            return a.SQ.Dg()()
        }
        )
    }
    ;
    Un({
        instance: function() {
            return window.gapi.iframes
        },
        priority: 1
    });
    _.Vn = Tn.instance;
    var Wn, Xn;
    Wn = {
        height: !0,
        width: !0
    };
    Xn = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;
    _.Yn = function(a) {
        "number" === typeof a && (a = String(a) + "px");
        return a
    }
    ;
    var Zn = function() {
        pn.apply(this, arguments)
    };
    _.A(Zn, pn);
    var vn = function() {
        un.apply(this, arguments)
    };
    _.A(vn, un);
    var $n = function() {
        _.Ck.apply(this, arguments)
    };
    _.A($n, _.Ck);
    var ao = function(a) {
        $n.call(this, a)
    };
    _.A(ao, $n);
    var bo = function(a, b) {
        a.T.frameName = b;
        return a
    };
    ao.prototype.getFrameName = function() {
        return this.T.frameName
    }
    ;
    var co = function(a, b) {
        a.T.rpcAddr = b;
        return a
    };
    ao.prototype.Jg = function() {
        return this.T.rpcAddr
    }
    ;
    var eo = function(a, b) {
        a.T.retAddr = b;
        return a
    };
    _.g = ao.prototype;
    _.g.vi = function() {
        return this.T.retAddr
    }
    ;
    _.g.dk = function(a) {
        this.T.origin = a;
        return this
    }
    ;
    _.g.getOrigin = function() {
        return this.T.origin
    }
    ;
    _.g.Bl = function(a) {
        this.T.setRpcReady = a;
        return this
    }
    ;
    _.g.Pp = function(a) {
        this.T.context = a
    }
    ;
    var fo = function(a, b) {
        a.T._rpcReadyFn = b
    };
    ao.prototype.getIframeEl = function() {
        return this.T.iframeEl
    }
    ;
    var go = function(a, b, c) {
        var d = a.Jg()
          , e = b.vi();
        eo(co(c, a.vi() + "/" + b.Jg()), e + "/" + d);
        bo(c, b.getFrameName()).dk(b.getOrigin())
    };
    var io = function(a, b, c) {
        a.setTimeout(function() {
            b.closed || 5 == c ? ho(b) : (b.close(),
            c++,
            io(a, b, c))
        }, 1E3)
    }
      , ho = function(a) {
        a.closed || a.document && a.document.body && _.cf(a.document.body, "Please close this window.")
    };
    _.jo = function(a, b, c, d) {
        this.jh = !1;
        this.ub = a;
        this.DK = b;
        this.Mq = c;
        this.Oa = d;
        this.hZ = this.Oa.vi();
        this.Ld = this.Oa.getOrigin();
        this.Xaa = this.Oa.getIframeEl();
        this.X_ = this.Oa.T.where;
        this.Ni = [];
        this.applyIframesApi("_default");
        a = this.Oa.T.apis || [];
        for (b = 0; b < a.length; b++)
            this.applyIframesApi(a[b]);
        this.ub.Bg[c] = this
    }
    ;
    _.g = _.jo.prototype;
    _.g.isDisposed = function() {
        return this.jh
    }
    ;
    _.g.Ja = function() {
        if (!this.isDisposed()) {
            for (var a = 0; a < this.Ni.length; a++)
                this.unregister(this.Ni[a]);
            delete _.An.Bg[this.getFrameName()];
            this.jh = !0
        }
    }
    ;
    _.g.getContext = function() {
        return this.ub
    }
    ;
    _.g.getOptions = function() {
        return this.Oa
    }
    ;
    _.g.Jg = function() {
        return this.DK
    }
    ;
    _.g.vi = function() {
        return this.hZ
    }
    ;
    _.g.getFrameName = function() {
        return this.Mq
    }
    ;
    _.g.getIframeEl = function() {
        return this.Xaa
    }
    ;
    _.g.getSiteEl = function() {
        return this.X_
    }
    ;
    _.g.setSiteEl = function(a) {
        this.X_ = a
    }
    ;
    _.g.Bl = function() {
        (0,
        this.Oa.T._rpcReadyFn)()
    }
    ;
    _.g.setParam = function(a, b) {
        this.Oa.value()[a] = b
    }
    ;
    _.g.getParam = function(a) {
        return this.Oa.value()[a]
    }
    ;
    _.g.Cc = function() {
        return this.Oa.value()
    }
    ;
    _.g.getId = function() {
        return this.Oa.getId()
    }
    ;
    _.g.getOrigin = function() {
        return this.Ld
    }
    ;
    var ko = function(a, b) {
        var c = a.Mq;
        a = a.ub.getFrameName();
        return c + ":" + a + ":" + b
    };
    _.g = _.jo.prototype;
    _.g.register = function(a, b, c) {
        _.lm(!this.isDisposed(), "Cannot register handler on disposed iframe " + a);
        _.lm((c || _.Cn)(this), "Rejecting untrusted message " + a);
        c = ko(this, a);
        1 == _.jf(yn, c, []).push(b) && (this.Ni.push(a),
        _.$l(c, Gn(c, this, "_g_wasClosed" === a)))
    }
    ;
    _.g.unregister = function(a, b) {
        var c = ko(this, a)
          , d = yn[c];
        d && (b ? (b = _.mn.call(d, b),
        0 <= b && d.splice(b, 1)) : d.splice(0, d.length),
        0 == d.length && (b = _.mn.call(this.Ni, a),
        0 <= b && this.Ni.splice(b, 1),
        _.am(c)))
    }
    ;
    _.g.Q9 = function() {
        return this.Ni
    }
    ;
    _.g.applyIframesApi = function(a) {
        this.KE = this.KE || [];
        if (!(0 <= _.mn.call(this.KE, a))) {
            this.KE.push(a);
            a = zn[a] || {
                map: {}
            };
            for (var b in a.map)
                _.lf(a.map, b) && this.register(b, a.map[b], a.filter)
        }
    }
    ;
    _.g.getWindow = function() {
        if (!_.Cn(this))
            return null;
        var a = this.Oa.T._popupWindow;
        if (a)
            return a;
        var b = this.DK.split("/");
        a = this.getContext().getWindow();
        for (var c = 0; c < b.length && a; c++) {
            var d = b[c];
            a = ".." === d ? a == a.parent ? a.opener : a.parent : a.frames[d]
        }
        return a
    }
    ;
    var lo = function(a) {
        var b = {};
        if (a)
            for (var c in a)
                _.lf(a, c) && _.lf(Wn, c) && Xn.test(a[c]) && (b[c] = a[c]);
        return b
    };
    _.g = _.jo.prototype;
    _.g.close = function(a, b) {
        return mo(this, "_g_close", a, b)
    }
    ;
    _.g.restyle = function(a, b) {
        return mo(this, "_g_restyle", a, b)
    }
    ;
    _.g.ws = function(a, b) {
        return mo(this, "_g_restyleDone", a, b)
    }
    ;
    _.g.m7 = function(a) {
        return this.getContext().closeSelf(a, void 0, this)
    }
    ;
    _.g.Iea = function(a) {
        if (a && "object" === typeof a)
            return this.getContext().restyleSelf(a, void 0, this)
    }
    ;
    _.g.Jea = function(a) {
        var b = this.Oa.T.onRestyle;
        b && b.call(this, a, this);
        a = a && "object" === typeof a ? lo(a) : {};
        (b = this.getIframeEl()) && a && "object" === typeof a && (_.lf(a, "height") && (a.height = _.Yn(a.height)),
        _.lf(a, "width") && (a.width = _.Yn(a.width)),
        _.mf(a, b.style))
    }
    ;
    _.g.n7 = function(a) {
        var b = this.Oa.T.onClose;
        b && b.call(this, a, this);
        if (b = this.getOptions().T._popupWindow) {
            var c = this.getContext().getWindow().document.getElementById(this.getId());
            c && c.parentNode && c.parentNode.removeChild(c);
            c = this.getContext().getWindow();
            _.de && _.qi && c ? (c.focus(),
            io(c, b, 0)) : (b.close(),
            ho(b))
        }
        b || (b = this.getIframeEl()) && b.parentNode && b.parentNode.removeChild(b);
        if (b = this.Oa.Nk())
            c = {},
            c.frameName = this.getFrameName(),
            mo(b, "_g_disposeControl", c);
        b = ko(this, "_g_wasClosed");
        Fn(b, a, this)
    }
    ;
    _.g.registerWasRestyled = function(a, b) {
        this.register("_g_wasRestyled", a, b)
    }
    ;
    _.g.registerWasClosed = function(a, b) {
        this.register("_g_wasClosed", a, b)
    }
    ;
    _.g.Cha = function() {
        delete this.getContext().Bg[this.getFrameName()];
        this.getContext().getWindow().setTimeout((0,
        _.z)(function() {
            this.Ja()
        }, this), 0)
    }
    ;
    _.g.send = function(a, b, c, d) {
        _.lm(!this.isDisposed(), "Cannot send message to disposed iframe - " + a);
        _.lm((d || _.Cn)(this), "Wrong target for message " + a);
        c = new On(c);
        a = this.ub.getFrameName() + ":" + this.Mq + ":" + a;
        _.dm(this.DK, a, c.resolve, b);
        return c.promise
    }
    ;
    var mo = function(a, b, c, d) {
        return a.send(b, c, d, _.Dn)
    };
    _.g = _.jo.prototype;
    _.g.Hda = function(a) {
        return a
    }
    ;
    _.g.ping = function(a, b) {
        return mo(this, "_g_ping", b, a)
    }
    ;
    _.g.t7 = function(a) {
        a = a && "object" === typeof a ? a : {};
        for (var b = a.rpcAddr, c = (this.Jg() + "/" + b).split("/"), d = this.getContext().getWindow(), e; (e = c.shift()) && d; )
            d = ".." == e ? d.parent : d.frames[e];
        _.lm(!!d, "Bad rpc address " + b);
        a._window = d;
        a._parentRpcAddr = this.Jg();
        a._parentRetAddr = this.vi();
        this.getContext();
        b = new _.no(a);
        this.Rca && this.Rca(b, a.controllerData);
        this.vF = this.vF || [];
        this.vF.push(b, a.controllerData)
    }
    ;
    _.g.J7 = function(a) {
        a = (a || {}).frameName;
        for (var b = this.vF || [], c = 0; c < b.length; c++)
            if (b[c].getFrameName() === a) {
                a = b.splice(c, 1)[0];
                a.Ja();
                this.Vca && this.Vca(a);
                return
            }
        _.lm(!1, "Unknown contolled iframe to dispose - " + a)
    }
    ;
    _.g.q7 = function(a) {
        var b = new ao(a);
        a = new Zn(b.value());
        if (a.T.selfConnect)
            var c = this;
        else
            (_.lm(Ln.test(b.getOrigin()), "Illegal origin for connected iframe - " + b.getOrigin()),
            c = this.getContext().Bg[b.getFrameName()],
            c) ? sn(b) && (c.Bl(),
            mo(c, "_g_rpcReady")) : (b = bo(eo(co(new ao, b.Jg()), b.vi()).dk(b.getOrigin()), b.getFrameName()).Bl(sn(b)).zn(dn(b)),
            c = this.getContext().attach(b.value()));
        b = this.getContext();
        var d = a.T.role;
        a = a.T.data;
        ro(b);
        d = d || "";
        _.jf(b.tF, d, []).push({
            Yf: c,
            data: a
        });
        so(c, a, b.zJ[d])
    }
    ;
    _.g.gM = function(a, b) {
        (new ao(b)).T._relayedDepth || (b = {},
        tn(qn(new Zn(b), "_opener")),
        mo(a, "_g_connect", b))
    }
    ;
    _.g.CX = function(a) {
        var b = this
          , c = a.T.messageHandlers
          , d = a.T.messageHandlersFilter
          , e = a.T.onClose;
        _.gn(_.Ek(_.Dk(a, null), null), null);
        return mo(this, "_g_open", a.value()).then(function(f) {
            var h = new ao(f[0])
              , k = h.getFrameName();
            f = new ao;
            var l = b.vi()
              , m = h.vi();
            eo(co(f, b.Jg() + "/" + h.Jg()), m + "/" + l);
            bo(f, k);
            f.dk(h.getOrigin());
            f.Ds(h.T.apis);
            f.zn(dn(a));
            _.Dk(f, c);
            _.Ek(f, d);
            _.gn(f, e);
            (h = b.getContext().Bg[k]) || (h = b.getContext().attach(f.value()));
            return h
        })
    }
    ;
    _.g.GK = function(a) {
        var b = a.getUrl();
        _.lm(!b || _.Am.test(b), "Illegal url for new iframe - " + b);
        var c = a.Ao().value();
        b = {};
        for (var d in c)
            _.lf(c, d) && _.lf(Mn, d) && (b[d] = c[d]);
        _.lf(c, "style") && (d = c.style,
        "object" === typeof d && (b.style = lo(d)));
        a.value().attributes = b
    }
    ;
    _.g.qda = function(a) {
        a = new ao(a);
        this.GK(a);
        var b = a.T._relayedDepth || 0;
        a.T._relayedDepth = b + 1;
        a.T.openerIframe = this;
        var c = dn(a);
        a.zn(null);
        var d = this;
        return this.getContext().open(a.value()).then(function(e) {
            var f = (new ao(e.Cc())).T.apis
              , h = new ao;
            go(e, d, h);
            0 == b && qn(new Zn(h.value()), "_opener");
            h.Bl(!0);
            h.zn(c);
            mo(e, "_g_connect", h.value());
            h = new ao;
            bo(eo(co(h, e.Jg()), e.hZ), e.getFrameName()).dk(e.getOrigin()).Ds(f);
            return h.value()
        })
    }
    ;
    _.g.Hea = function(a) {
        this.getContext().addOnOpenerHandler(function(b) {
            b.send("_g_wasRestyled", a, void 0, _.Dn)
        }, null, _.Dn)
    }
    ;
    var xo;
    _.to = _.kf();
    _.uo = _.kf();
    _.vo = function(a, b) {
        _.to[a] = b
    }
    ;
    _.wo = function(a) {
        return _.to[a]
    }
    ;
    xo = function(a, b) {
        _.nf.load("gapi.iframes.style." + a, b)
    }
    ;
    _.yo = function(a, b) {
        _.uo[a] = b
    }
    ;
    _.zo = function(a) {
        return _.uo[a]
    }
    ;
    _.no = function(a) {
        a = a || {};
        this.jh = !1;
        this.Pj = _.kf();
        this.Bg = _.kf();
        this.qg = a._window || _.ef;
        this.Sd = this.qg.location.href;
        this.TX = (this.UJ = Ao(this.Sd, "parent")) ? Ao(this.Sd, "pfname") : "";
        this.Ha = this.UJ ? Ao(this.Sd, "_gfid") || Ao(this.Sd, "id") : "";
        this.Mq = _.Nm(this.Ha, this.TX);
        this.Ld = _.Ch(this.Sd);
        if (this.Ha) {
            var b = new ao;
            co(b, a._parentRpcAddr || "..");
            eo(b, a._parentRetAddr || this.Ha);
            b.dk(_.Ch(this.UJ || this.Sd));
            bo(b, this.TX);
            this.yb = this.attach(b.value())
        } else
            this.yb = null
    }
    ;
    _.g = _.no.prototype;
    _.g.isDisposed = function() {
        return this.jh
    }
    ;
    _.g.Ja = function() {
        if (!this.isDisposed()) {
            for (var a = _.ra(Object.values(this.Bg)), b = a.next(); !b.done; b = a.next())
                b.value.Ja();
            this.jh = !0
        }
    }
    ;
    _.g.getFrameName = function() {
        return this.Mq
    }
    ;
    _.g.getOrigin = function() {
        return this.Ld
    }
    ;
    _.g.getWindow = function() {
        return this.qg
    }
    ;
    _.g.Bb = function() {
        return this.qg.document
    }
    ;
    _.g.setGlobalParam = function(a, b) {
        this.Pj[a] = b
    }
    ;
    _.g.getGlobalParam = function(a) {
        return this.Pj[a]
    }
    ;
    _.g.attach = function(a) {
        _.lm(!this.isDisposed(), "Cannot attach iframe in disposed context");
        a = new ao(a);
        a.Jg() || co(a, a.getId());
        a.vi() || eo(a, "..");
        a.getOrigin() || a.dk(_.Ch(a.getUrl()));
        a.getFrameName() || bo(a, _.Nm(a.getId(), this.Mq));
        var b = a.getFrameName();
        if (this.Bg[b])
            return this.Bg[b];
        var c = a.Jg()
          , d = c;
        a.getOrigin() && (d = c + "|" + a.getOrigin());
        var e = a.vi()
          , f = dn(a);
        f || (f = (f = a.getIframeEl()) && (f.getAttribute("data-postorigin") || f.src) || a.getUrl(),
        f = _.of(f, "rpctoken"));
        fo(a, _.km(d, e, f, a.T._popupWindow));
        d = ((window.gadgets || {}).rpc || {}).setAuthToken;
        f && d && d(c, f);
        var h = new _.jo(this,c,b,a)
          , k = a.T.messageHandlersFilter;
        _.on(a.T.messageHandlers, function(l, m) {
            h.register(m, l, k)
        });
        sn(a) && h.Bl();
        mo(h, "_g_rpcReady");
        return h
    }
    ;
    _.g.GK = function(a) {
        bo(a, null);
        var b = a.getId();
        !b || Bn.test(b) && !this.getWindow().document.getElementById(b) || (_.Pg.log("Ignoring requested iframe ID - " + b),
        a.Ye(null))
    }
    ;
    var Ao = function(a, b) {
        var c = _.of(a, b);
        c || (c = _.Kg(_.of(a, "jcp", ""))[b]);
        return c || ""
    };
    _.no.prototype.openChild = function(a) {
        _.lm(!this.isDisposed(), "Cannot open iframe in disposed context");
        var b = new ao(a);
        Bo(this, b);
        var c = b.getFrameName();
        if (c && this.Bg[c])
            return this.Bg[c];
        this.GK(b);
        c = b.getUrl();
        _.lm(c, "No url for new iframe");
        var d = b.T.queryParams || {};
        d.usegapi = "1";
        _.en(b, d);
        d = this.tU && this.tU(c, b);
        d || (d = b.T.where,
        _.lm(!!d, "No location for new iframe"),
        c = _.Xm(c, d, a),
        b.T.iframeEl = c,
        d = c.getAttribute("id"));
        co(b, d).Ye(d);
        b.dk(_.Ch(b.T.eurl || ""));
        this.zW && this.zW(b, b.getIframeEl());
        c = this.attach(a);
        c.gM && c.gM(c, a);
        (a = b.T.onCreate) && a(c);
        b.T.disableRelayOpen || c.applyIframesApi("_open");
        return c
    }
    ;
    var Co = function(a, b, c) {
        var d = b.T.canvasUrl;
        if (!d)
            return c;
        _.lm(!b.T.allowPost && !b.T.forcePost, "Post is not supported when using canvas url");
        var e = b.getUrl();
        _.lm(e && _.Ch(e) === a.Ld && _.Ch(d) === a.Ld, "Wrong origin for canvas or hidden url " + d);
        b.setUrl(d);
        _.jn(b);
        b.T.canvasUrl = null;
        return function(f) {
            var h = f.getWindow()
              , k = h.location.hash;
            k = _.Wm(e) + (/#/.test(e) ? k.replace(/^#/, "&") : k);
            h.location.replace(k);
            c && c(f)
        }
    }
      , Do = function(a, b, c) {
        var d = b.T.relayOpen;
        if (d) {
            var e = a.getParentIframe();
            d instanceof _.jo ? (e = d,
            _.fn(b, 0)) : 0 < Number(d) && _.fn(b, Number(d) - 1);
            if (e) {
                _.lm(!!e.CX, "Relaying iframe open is disabled");
                if (d = b.getStyle())
                    if (d = _.uo[d])
                        b.Pp(a),
                        d(b.value()),
                        b.Pp(null);
                b.T.openerIframe = null;
                c.resolve(e.CX(b));
                return !0
            }
        }
        return !1
    }
      , Eo = function(a, b, c) {
        var d = b.getStyle();
        if (d)
            if (_.lm(!!_.wo, "Defer style is disabled, when requesting style " + d),
            _.to[d])
                Bo(a, b);
            else
                return xo(d, function() {
                    _.lm(!!_.to[d], "Fail to load style - " + d);
                    c.resolve(a.open(b.value()))
                }),
                !0;
        return !1
    };
    _.no.prototype.open = function(a, b) {
        _.lm(!this.isDisposed(), "Cannot open iframe in disposed context");
        var c = new ao(a);
        b = Co(this, c, b);
        var d = new On(b);
        (b = c.getUrl()) && c.setUrl(_.Wm(b));
        if (Do(this, c, d) || Eo(this, c, d) || Do(this, c, d))
            return d.promise;
        if (null != kn(c)) {
            var e = setTimeout(function() {
                h.getIframeEl().src = "about:blank";
                d.reject({
                    timeout: "Exceeded time limit of :" + kn(c) + "milliseconds"
                })
            }, kn(c))
              , f = d.resolve;
            d.resolve = function(k) {
                clearTimeout(e);
                f(k)
            }
        }
        c.T.waitForOnload && cn(c.Ao(), function() {
            d.resolve(h)
        });
        var h = this.openChild(a);
        c.T.waitForOnload || d.resolve(h);
        return d.promise
    }
    ;
    _.no.prototype.getParentIframe = function() {
        return this.yb
    }
    ;
    var Fo = function(a, b) {
        var c = a.getParentIframe()
          , d = !0;
        b.filter && (d = b.filter.call(b.Yf, b.params));
        return _.dl(d).then(function(e) {
            return e && c ? (b.RX && b.RX.call(a, b.params),
            e = b.sender ? b.sender(b.params) : mo(c, b.message, b.params),
            b.Aha ? e.then(function() {
                return !0
            }) : !0) : !1
        })
    };
    _.g = _.no.prototype;
    _.g.closeSelf = function(a, b, c) {
        a = Fo(this, {
            sender: function(d) {
                var e = _.An.getParentIframe();
                _.on(_.An.Bg, function(f) {
                    f !== e && mo(f, "_g_wasClosed", d)
                });
                return mo(e, "_g_closeMe", d)
            },
            message: "_g_closeMe",
            params: a,
            Yf: c,
            filter: this.getGlobalParam("onCloseSelfFilter")
        });
        b = new On(b);
        b.resolve(a);
        return b.promise
    }
    ;
    _.g.restyleSelf = function(a, b, c) {
        a = a || {};
        b = new On(b);
        b.resolve(Fo(this, {
            message: "_g_restyleMe",
            params: a,
            Yf: c,
            filter: this.getGlobalParam("onRestyleSelfFilter"),
            Aha: !0,
            RX: this.a1
        }));
        return b.promise
    }
    ;
    _.g.a1 = function(a) {
        "auto" === a.height && (a.height = _.Zm())
    }
    ;
    _.g.setCloseSelfFilter = function(a) {
        this.setGlobalParam("onCloseSelfFilter", a)
    }
    ;
    _.g.setRestyleSelfFilter = function(a) {
        this.setGlobalParam("onRestyleSelfFilter", a)
    }
    ;
    var Bo = function(a, b) {
        var c = b.getStyle();
        if (c) {
            b.Eh(null);
            var d = _.to[c];
            _.lm(d, "No such style: " + c);
            b.Pp(a);
            d(b.value());
            b.Pp(null)
        }
    };
    _.no.prototype.ready = function(a, b, c, d) {
        var e = b || {}
          , f = this.getParentIframe();
        this.addOnOpenerHandler(function(k) {
            _.on(e, function(l, m) {
                k.register(m, l, d)
            }, this);
            k !== f && k.send("_ready", h, void 0, d)
        }, void 0, d);
        var h = a || {};
        h.height = h.height || "auto";
        this.a1(h);
        f && f.send("_ready", h, c, _.Dn)
    }
    ;
    _.no.prototype.connectIframes = function(a, b) {
        a = new Zn(a);
        var c = new Zn(b)
          , d = sn(a);
        b = a.getIframe();
        var e = c.getIframe();
        if (e) {
            var f = dn(a)
              , h = new ao;
            go(b, e, h);
            rn(qn((new Zn(h.value())).zn(f), a.T.role), a.T.data).Bl(d);
            var k = new ao;
            go(e, b, k);
            rn(qn((new Zn(k.value())).zn(f), c.T.role), c.T.data).Bl(!0);
            mo(b, "_g_connect", h.value(), function() {
                d || mo(e, "_g_connect", k.value())
            });
            d && mo(e, "_g_connect", k.value())
        } else
            c = {},
            rn(qn(tn(new Zn(c)), a.T.role), a.T.data),
            mo(b, "_g_connect", c)
    }
    ;
    var ro = function(a) {
        a.tF || (a.tF = _.kf(),
        a.zJ = _.kf())
    };
    _.no.prototype.addOnConnectHandler = function(a, b, c, d) {
        ro(this);
        "object" === typeof a ? (b = new vn(a),
        c = b.BT() || "") : (b = xn(wn(a).Nc(b).Ds(c), d),
        c = a);
        d = this.tF[c] || [];
        a = !1;
        for (var e = 0; e < d.length && !a; e++)
            so(this.Bg[d[e].Yf.getFrameName()], d[e].data, [b]),
            a = b.T.runOnce;
        c = _.jf(this.zJ, c, []);
        a || b.T.dontWait || c.push(b)
    }
    ;
    _.no.prototype.removeOnConnectHandler = function(a, b) {
        a = _.jf(this.zJ, a, []);
        if (b)
            for (var c = !1, d = 0; !c && d < a.length; d++)
                a[d].Cb() === b && (c = !0,
                a.splice(d, 1));
        else
            a.splice(0, a.length)
    }
    ;
    var so = function(a, b, c) {
        c = c || [];
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            if (e && a) {
                var f = e.T.filter || _.Cn;
                if (a && f(a)) {
                    f = e.T.apis || [];
                    for (var h = 0; h < f.length; h++)
                        a.applyIframesApi(f[h]);
                    e.Cb() && e.Cb()(a, b);
                    e.T.runOnce && (c.splice(d, 1),
                    --d)
                }
            }
        }
    };
    _.no.prototype.addOnOpenerHandler = function(a, b, c) {
        var d = this.addOnConnectHandler;
        a = xn(wn("_opener").Nc(a).Ds(b), c);
        a.T.runOnce = !0;
        d.call(this, a.value())
    }
    ;
    _.no.prototype.zW = function(a, b) {
        var c = a.Nk();
        if (c) {
            _.lm(c.Ld === a.getOrigin(), "Wrong controller origin " + this.Ld + " !== " + a.getOrigin());
            var d = a.Jg();
            co(a, c.Jg());
            eo(a, c.vi());
            var e = new ao;
            hn(co(e, d), a.T.controllerData);
            _.tf(b, "load", function() {
                c.send("_g_control", e.value())
            })
        }
    }
    ;
    var Go = function(a, b, c) {
        a = a.getWindow();
        var d = a.document
          , e = c.T.reuseWindow;
        if (e) {
            var f = c.getId();
            if (!f)
                throw Error("P");
        } else
            f = _.Mm(d, c);
        var h = f
          , k = c.T.rpcRelayUrl;
        if (k) {
            k = _.Vm(k);
            h = c.T.fragmentParams || {};
            h.rly = f;
            c.T.fragmentParams = h;
            h = c.T.where || d.body;
            _.lm(!!h, "Cannot open window in a page with no body");
            var l = {};
            l.src = k;
            l.style = "display:none;";
            l.id = f;
            l.name = f;
            _.Qm(d, h, l, f);
            h = f + "_relay"
        }
        b = _.Wm(b);
        var m = _.Om(d, b, f, c.value());
        c.T.eurl = m;
        b = c.T.openAsWindow;
        "string" !== typeof b && (b = void 0);
        c = window.navigator.userAgent || "";
        /Trident|MSIE/i.test(c) && /#/.test(c) && (m = "javascript:window.location.replace(" + _.ef.JSON.stringify(m).replace(/#/g, "\\x23") + ")");
        if (e) {
            var n = e;
            setTimeout(function() {
                n.location.replace(m)
            })
        } else
            n = _.zk(a, m, h, b);
        return {
            id: f,
            C1: n
        }
    };
    _.no.prototype.tU = function(a, b) {
        if (b.T.openAsWindow) {
            a = Go(this, a, b);
            var c = a.id;
            _.lm(!!a.C1, "Open popup window failed");
            b.T._popupWindow = a.C1
        }
        return c
    }
    ;
    yn = _.kf();
    zn = _.kf();
    _.An = new _.no;
    Jn("_g_rpcReady", _.jo.prototype.Bl);
    Jn("_g_discover", _.jo.prototype.Q9);
    Jn("_g_ping", _.jo.prototype.Hda);
    Jn("_g_close", _.jo.prototype.m7);
    Jn("_g_closeMe", _.jo.prototype.n7);
    Jn("_g_restyle", _.jo.prototype.Iea);
    Jn("_g_restyleMe", _.jo.prototype.Jea);
    Jn("_g_wasClosed", _.jo.prototype.Cha);
    _.In("control", "_g_control", _.jo.prototype.t7);
    _.In("control", "_g_disposeControl", _.jo.prototype.J7);
    var Ho = _.An.getParentIframe();
    Ho && Ho.register("_g_restyleDone", _.jo.prototype.Hea, _.Dn);
    Jn("_g_connect", _.jo.prototype.q7);
    var Io = {};
    Io._g_open = _.jo.prototype.qda;
    _.Hn("_open", Io, _.Dn);
    var Jo = {
        Context: _.no,
        Iframe: _.jo,
        SAME_ORIGIN_IFRAMES_FILTER: _.Cn,
        CROSS_ORIGIN_IFRAMES_FILTER: _.Dn,
        makeWhiteListIframesFilter: _.En,
        getContext: _.Kn,
        registerIframesApi: _.Hn,
        registerIframesApiHandler: _.In,
        registerStyle: _.vo,
        registerBeforeOpenStyle: _.yo,
        getStyle: _.wo,
        getBeforeOpenStyle: _.zo,
        create: _.Xm
    };
    Un({
        instance: function() {
            return Jo
        },
        priority: 2
    });
    _.In("gapi.load", "_g_gapi.load", function(a) {
        return new _.$k(function(b) {
            _.nf.load(a && "object" === typeof a && a.features || "", b)
        }
        )
    });
    _.Ko = function(a) {
        this.T = a
    }
    ;
    _.g = _.Ko.prototype;
    _.g.WK = function(a) {
        this.T.anchor = a;
        return this
    }
    ;
    _.g.qj = function() {
        return this.T.anchor
    }
    ;
    _.g.XK = function(a) {
        this.T.anchorPosition = a
    }
    ;
    _.g.he = function(a) {
        this.T.height = a;
        return this
    }
    ;
    _.g.Sc = function() {
        return this.T.height
    }
    ;
    _.g.Ze = function(a) {
        this.T.width = a;
        return this
    }
    ;
    _.g.Xb = function() {
        return this.T.width
    }
    ;
    _.g.setZIndex = function(a) {
        this.T.zIndex = a;
        return this
    }
    ;
    _.g.getZIndex = function() {
        return this.T.zIndex
    }
    ;
    _.Lo = function(a) {
        a.T.connectWithQueryParams = !0;
        return a
    }
    ;
    _.r("gapi.iframes.create", _.Xm);
    _.r("gapi.iframes.registerStyle", _.vo);
    _.r("gapi.iframes.registerBeforeOpenStyle", _.yo);
    _.r("gapi.iframes.getStyle", _.wo);
    _.r("gapi.iframes.getBeforeOpenStyle", _.zo);
    _.r("gapi.iframes.registerIframesApi", _.Hn);
    _.r("gapi.iframes.registerIframesApiHandler", _.In);
    _.r("gapi.iframes.getContext", _.Kn);
    _.r("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER", _.Cn);
    _.r("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER", _.Dn);
    _.r("gapi.iframes.makeWhiteListIframesFilter", _.En);
    _.r("gapi.iframes.Context", _.no);
    _.r("gapi.iframes.Context.prototype.isDisposed", _.no.prototype.isDisposed);
    _.r("gapi.iframes.Context.prototype.getWindow", _.no.prototype.getWindow);
    _.r("gapi.iframes.Context.prototype.getFrameName", _.no.prototype.getFrameName);
    _.r("gapi.iframes.Context.prototype.getGlobalParam", _.no.prototype.getGlobalParam);
    _.r("gapi.iframes.Context.prototype.setGlobalParam", _.no.prototype.setGlobalParam);
    _.r("gapi.iframes.Context.prototype.open", _.no.prototype.open);
    _.r("gapi.iframes.Context.prototype.openChild", _.no.prototype.openChild);
    _.r("gapi.iframes.Context.prototype.getParentIframe", _.no.prototype.getParentIframe);
    _.r("gapi.iframes.Context.prototype.closeSelf", _.no.prototype.closeSelf);
    _.r("gapi.iframes.Context.prototype.restyleSelf", _.no.prototype.restyleSelf);
    _.r("gapi.iframes.Context.prototype.setCloseSelfFilter", _.no.prototype.setCloseSelfFilter);
    _.r("gapi.iframes.Context.prototype.setRestyleSelfFilter", _.no.prototype.setRestyleSelfFilter);
    _.r("gapi.iframes.Context.prototype.addOnConnectHandler", _.no.prototype.addOnConnectHandler);
    _.r("gapi.iframes.Context.prototype.removeOnConnectHandler", _.no.prototype.removeOnConnectHandler);
    _.r("gapi.iframes.Context.prototype.addOnOpenerHandler", _.no.prototype.addOnOpenerHandler);
    _.r("gapi.iframes.Context.prototype.connectIframes", _.no.prototype.connectIframes);
    _.r("gapi.iframes.Iframe", _.jo);
    _.r("gapi.iframes.Iframe.prototype.isDisposed", _.jo.prototype.isDisposed);
    _.r("gapi.iframes.Iframe.prototype.getContext", _.jo.prototype.getContext);
    _.r("gapi.iframes.Iframe.prototype.getFrameName", _.jo.prototype.getFrameName);
    _.r("gapi.iframes.Iframe.prototype.getId", _.jo.prototype.getId);
    _.r("gapi.iframes.Iframe.prototype.register", _.jo.prototype.register);
    _.r("gapi.iframes.Iframe.prototype.unregister", _.jo.prototype.unregister);
    _.r("gapi.iframes.Iframe.prototype.send", _.jo.prototype.send);
    _.r("gapi.iframes.Iframe.prototype.applyIframesApi", _.jo.prototype.applyIframesApi);
    _.r("gapi.iframes.Iframe.prototype.getIframeEl", _.jo.prototype.getIframeEl);
    _.r("gapi.iframes.Iframe.prototype.getSiteEl", _.jo.prototype.getSiteEl);
    _.r("gapi.iframes.Iframe.prototype.setSiteEl", _.jo.prototype.setSiteEl);
    _.r("gapi.iframes.Iframe.prototype.getWindow", _.jo.prototype.getWindow);
    _.r("gapi.iframes.Iframe.prototype.getOrigin", _.jo.prototype.getOrigin);
    _.r("gapi.iframes.Iframe.prototype.close", _.jo.prototype.close);
    _.r("gapi.iframes.Iframe.prototype.restyle", _.jo.prototype.restyle);
    _.r("gapi.iframes.Iframe.prototype.restyleDone", _.jo.prototype.ws);
    _.r("gapi.iframes.Iframe.prototype.registerWasRestyled", _.jo.prototype.registerWasRestyled);
    _.r("gapi.iframes.Iframe.prototype.registerWasClosed", _.jo.prototype.registerWasClosed);
    _.r("gapi.iframes.Iframe.prototype.getParam", _.jo.prototype.getParam);
    _.r("gapi.iframes.Iframe.prototype.setParam", _.jo.prototype.setParam);
    _.r("gapi.iframes.Iframe.prototype.ping", _.jo.prototype.ping);
    _.r("gapi.iframes.Iframe.prototype.getOpenParams", _.jo.prototype.Cc);
    _.Wf = _.Wf || {};
    _.Wf = _.Wf || {};
    (function() {
        function a(c) {
            var d = "undefined" === typeof c;
            if (null !== b && d)
                return b;
            var e = {};
            c = c || window.location.href;
            var f = c.indexOf("?")
              , h = c.indexOf("#");
            c = (-1 === h ? c.substr(f + 1) : [c.substr(f + 1, h - f - 1), "&", c.substr(h + 1)].join("")).split("&");
            f = window.decodeURIComponent ? decodeURIComponent : unescape;
            h = 0;
            for (var k = c.length; h < k; ++h) {
                var l = c[h].indexOf("=");
                if (-1 !== l) {
                    var m = c[h].substring(0, l);
                    l = c[h].substring(l + 1);
                    l = l.replace(/\+/g, " ");
                    try {
                        e[m] = f(l)
                    } catch (n) {}
                }
            }
            d && (b = e);
            return e
        }
        var b = null;
        _.Wf.qh = a;
        a()
    }
    )();
    _.r("gadgets.util.getUrlParameters", _.Wf.qh);
    _.Dh = window.googleapis && window.googleapis.server || {};
    _.$f = function() {
        var a = window.gadgets && window.gadgets.config && window.gadgets.config.get;
        a && _.Ff(a());
        return {
            register: function(b, c, d) {
                d && d(_.Ef())
            },
            get: function(b) {
                return _.Ef(b)
            },
            update: function(b, c) {
                if (c)
                    throw "Config replacement is not supported";
                _.Ff(b)
            },
            zd: function() {}
        }
    }();
    _.r("gadgets.config.register", _.$f.register);
    _.r("gadgets.config.get", _.$f.get);
    _.r("gadgets.config.init", _.$f.zd);
    _.r("gadgets.config.update", _.$f.update);
    _.r("gadgets.json.stringify", _.Lg);
    _.r("gadgets.json.parse", _.Kg);
    (function() {
        function a(e, f) {
            if (!(e < c) && d)
                if (2 === e && d.warn)
                    d.warn(f);
                else if (3 === e && d.error)
                    try {
                        d.error(f)
                    } catch (h) {}
                else
                    d.log && d.log(f)
        }
        var b = function(e) {
            a(1, e)
        };
        _.Xf = function(e) {
            a(2, e)
        }
        ;
        _.Yf = function(e) {
            a(3, e)
        }
        ;
        _.Zf = function() {}
        ;
        b.INFO = 1;
        b.WARNING = 2;
        b.NONE = 4;
        var c = 1
          , d = window.console ? window.console : window.opera ? window.opera.postError : void 0;
        return b
    }
    )();
    _.Wf = _.Wf || {};
    (function() {
        var a = [];
        _.Wf.Zra = function(b) {
            a.push(b)
        }
        ;
        _.Wf.msa = function() {
            for (var b = 0, c = a.length; b < c; ++b)
                a[b]()
        }
    }
    )();
    _.Qg = function() {
        var a = _.ff.readyState;
        return "complete" === a || "interactive" === a && -1 == navigator.userAgent.indexOf("MSIE")
    }
    ;
    _.Rg = function(a) {
        if (_.Qg())
            a();
        else {
            var b = !1
              , c = function() {
                if (!b)
                    return b = !0,
                    a.apply(this, arguments)
            };
            _.ef.addEventListener ? (_.ef.addEventListener("load", c, !1),
            _.ef.addEventListener("DOMContentLoaded", c, !1)) : _.ef.attachEvent && (_.ef.attachEvent("onreadystatechange", function() {
                _.Qg() && c.apply(this, arguments)
            }),
            _.ef.attachEvent("onload", c))
        }
    }
    ;
    _.Sg = function(a, b) {
        var c = _.jf(_.uf, "watt", _.kf());
        _.jf(c, a, b)
    }
    ;
    _.of(_.ef.location.href, "rpctoken") && _.tf(_.ff, "unload", function() {});
    var Tg = Tg || {};
    Tg.kZ = null;
    Tg.ZW = null;
    Tg.GA = null;
    Tg.frameElement = null;
    Tg = Tg || {};
    Tg.XN || (Tg.XN = function() {
        function a(f, h, k) {
            "undefined" != typeof window.addEventListener ? window.addEventListener(f, h, k) : "undefined" != typeof window.attachEvent && window.attachEvent("on" + f, h);
            "message" === f && (window.___jsl = window.___jsl || {},
            f = window.___jsl,
            f.RPMQ = f.RPMQ || [],
            f.RPMQ.push(h))
        }
        function b(f) {
            var h = _.Kg(f.data);
            if (h && h.f) {
                _.Zf();
                var k = _.Ug.Ho(h.f);
                e && ("undefined" !== typeof f.origin ? f.origin !== k : f.domain !== /^.+:\/\/([^:]+).*/.exec(k)[1]) ? _.Yf("Invalid rpc message origin. " + k + " vs " + (f.origin || "")) : c(h, f.origin)
            }
        }
        var c, d, e = !0;
        return {
            ZS: function() {
                return "wpm"
            },
            Jba: function() {
                return !0
            },
            zd: function(f, h) {
                _.$f.register("rpc", null, function(k) {
                    "true" === String((k && k.rpc || {}).disableForceSecure) && (e = !1)
                });
                c = f;
                d = h;
                a("message", b, !1);
                d("..", !0);
                return !0
            },
            Nb: function(f) {
                d(f, !0);
                return !0
            },
            call: function(f, h, k) {
                var l = _.Ug.Ho(f)
                  , m = _.Ug.QO(f);
                l ? window.setTimeout(function() {
                    var n = _.Lg(k);
                    _.Zf();
                    if (m && "postMessage"in m)
                        m.postMessage(n, l);
                    else
                        throw Error("t`" + m + "`" + f + "`" + h + "`" + l);
                }, 0) : ".." != f && _.Yf("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message");
                return !0
            }
        }
    }());
    if (window.gadgets && window.gadgets.rpc)
        "undefined" != typeof _.Ug && _.Ug || (_.Ug = window.gadgets.rpc,
        _.Ug.config = _.Ug.config,
        _.Ug.register = _.Ug.register,
        _.Ug.unregister = _.Ug.unregister,
        _.Ug.NY = _.Ug.registerDefault,
        _.Ug.Z0 = _.Ug.unregisterDefault,
        _.Ug.GS = _.Ug.forceParentVerifiable,
        _.Ug.call = _.Ug.call,
        _.Ug.Tu = _.Ug.getRelayUrl,
        _.Ug.fk = _.Ug.setRelayUrl,
        _.Ug.VC = _.Ug.setAuthToken,
        _.Ug.Nw = _.Ug.setupReceiver,
        _.Ug.uo = _.Ug.getAuthToken,
        _.Ug.uK = _.Ug.removeReceiver,
        _.Ug.yT = _.Ug.getRelayChannel,
        _.Ug.JY = _.Ug.receive,
        _.Ug.KY = _.Ug.receiveSameDomain,
        _.Ug.getOrigin = _.Ug.getOrigin,
        _.Ug.Ho = _.Ug.getTargetOrigin,
        _.Ug.QO = _.Ug._getTargetWin,
        _.Ug.a6 = _.Ug._parseSiblingId);
    else {
        _.Ug = function() {
            function a(D, ea) {
                if (!W[D]) {
                    var T = bb;
                    ea || (T = cb);
                    W[D] = T;
                    ea = K[D] || [];
                    for (var ta = 0; ta < ea.length; ++ta) {
                        var za = ea[ta];
                        za.t = E[D];
                        T.call(D, za.f, za)
                    }
                    K[D] = []
                }
            }
            function b() {
                function D() {
                    zb = !0
                }
                Fb || ("undefined" != typeof window.addEventListener ? window.addEventListener("unload", D, !1) : "undefined" != typeof window.attachEvent && window.attachEvent("onunload", D),
                Fb = !0)
            }
            function c(D, ea, T, ta, za) {
                E[ea] && E[ea] === T || (_.Yf("Invalid gadgets.rpc token. " + E[ea] + " vs " + T),
                mb(ea, 2));
                za.onunload = function() {
                    N[ea] && !zb && (mb(ea, 1),
                    _.Ug.uK(ea))
                }
                ;
                b();
                ta = _.Kg(decodeURIComponent(ta))
            }
            function d(D, ea) {
                if (D && "string" === typeof D.s && "string" === typeof D.f && D.a instanceof Array)
                    if (E[D.f] && E[D.f] !== D.t && (_.Yf("Invalid gadgets.rpc token. " + E[D.f] + " vs " + D.t),
                    mb(D.f, 2)),
                    "__ack" === D.s)
                        window.setTimeout(function() {
                            a(D.f, !0)
                        }, 0);
                    else {
                        D.c && (D.callback = function(X) {
                            _.Ug.call(D.f, (D.g ? "legacy__" : "") + "__cb", null, D.c, X)
                        }
                        );
                        if (ea) {
                            var T = e(ea);
                            D.origin = ea;
                            var ta = D.r;
                            try {
                                var za = e(ta)
                            } catch (X) {}
                            ta && za == T || (ta = ea);
                            D.referer = ta
                        }
                        ea = (w[D.s] || w[""]).apply(D, D.a);
                        D.c && "undefined" !== typeof ea && _.Ug.call(D.f, "__cb", null, D.c, ea)
                    }
            }
            function e(D) {
                if (!D)
                    return "";
                D = D.split("#")[0].split("?")[0];
                D = D.toLowerCase();
                0 == D.indexOf("//") && (D = window.location.protocol + D);
                -1 == D.indexOf("://") && (D = window.location.protocol + "//" + D);
                var ea = D.substring(D.indexOf("://") + 3)
                  , T = ea.indexOf("/");
                -1 != T && (ea = ea.substring(0, T));
                D = D.substring(0, D.indexOf("://"));
                if ("http" !== D && "https" !== D && "chrome-extension" !== D && "file" !== D && "android-app" !== D && "chrome-search" !== D && "chrome-untrusted" !== D && "chrome" !== D && "devtools" !== D)
                    throw Error("u");
                T = "";
                var ta = ea.indexOf(":");
                if (-1 != ta) {
                    var za = ea.substring(ta + 1);
                    ea = ea.substring(0, ta);
                    if ("http" === D && "80" !== za || "https" === D && "443" !== za)
                        T = ":" + za
                }
                return D + "://" + ea + T
            }
            function f(D) {
                if ("/" == D.charAt(0)) {
                    var ea = D.indexOf("|");
                    return {
                        id: 0 < ea ? D.substring(1, ea) : D.substring(1),
                        origin: 0 < ea ? D.substring(ea + 1) : null
                    }
                }
                return null
            }
            function h(D) {
                if ("undefined" === typeof D || ".." === D)
                    return window.parent;
                var ea = f(D);
                if (ea)
                    return k(window.top.frames[ea.id]);
                D = String(D);
                return (ea = window.frames[D]) ? k(ea) : (ea = document.getElementById(D)) && ea.contentWindow ? ea.contentWindow : null
            }
            function k(D) {
                return D ? "postMessage"in D ? D : D instanceof HTMLIFrameElement && "contentWindow"in D && "postMessage"in D.contentWindow ? D.contentWindow : null : null
            }
            function l(D, ea) {
                if (!0 !== N[D]) {
                    "undefined" === typeof N[D] && (N[D] = 0);
                    var T = h(D);
                    ".." !== D && null == T || !0 !== bb.Nb(D, ea) ? !0 !== N[D] && 10 > N[D]++ ? window.setTimeout(function() {
                        l(D, ea)
                    }, 500) : (W[D] = cb,
                    N[D] = !0) : N[D] = !0
                }
            }
            function m(D) {
                (D = x[D]) && "/" === D.substring(0, 1) && (D = "/" === D.substring(1, 2) ? document.location.protocol + D : document.location.protocol + "//" + document.location.host + D);
                return D
            }
            function n(D, ea, T) {
                ea && !/http(s)?:\/\/.+/.test(ea) && (0 == ea.indexOf("//") ? ea = window.location.protocol + ea : "/" == ea.charAt(0) ? ea = window.location.protocol + "//" + window.location.host + ea : -1 == ea.indexOf("://") && (ea = window.location.protocol + "//" + ea));
                x[D] = ea;
                "undefined" !== typeof T && (C[D] = !!T)
            }
            function p(D, ea) {
                ea = ea || "";
                E[D] = String(ea);
                l(D, ea)
            }
            function q(D) {
                D = (D.passReferrer || "").split(":", 2);
                Q = D[0] || "none";
                ja = D[1] || "origin"
            }
            function u(D) {
                "true" === String(D.useLegacyProtocol) && (bb = Tg.GA || cb,
                bb.zd(d, a))
            }
            function v(D, ea) {
                function T(ta) {
                    ta = ta && ta.rpc || {};
                    q(ta);
                    var za = ta.parentRelayUrl || "";
                    za = e(ka.parent || ea) + za;
                    n("..", za, "true" === String(ta.useLegacyProtocol));
                    u(ta);
                    p("..", D)
                }
                !ka.parent && ea ? T({}) : _.$f.register("rpc", null, T)
            }
            function t(D, ea, T) {
                if (".." === D)
                    v(T || ka.rpctoken || ka.ifpctok || "", ea);
                else
                    a: {
                        var ta = null;
                        if ("/" != D.charAt(0)) {
                            if (!_.Wf)
                                break a;
                            ta = document.getElementById(D);
                            if (!ta)
                                throw Error("v`" + D);
                        }
                        ta = ta && ta.src;
                        ea = ea || e(ta);
                        n(D, ea);
                        ea = _.Wf.qh(ta);
                        p(D, T || ea.rpctoken)
                    }
            }
            var w = {}
              , x = {}
              , C = {}
              , E = {}
              , I = 0
              , P = {}
              , N = {}
              , ka = {}
              , W = {}
              , K = {}
              , Q = null
              , ja = null
              , oa = window.top !== window.self
              , Ia = window.name
              , mb = function() {}
              , Za = window.console
              , nb = Za && Za.log && function(D) {
                Za.log(D)
            }
            || function() {}
              , cb = function() {
                function D(ea) {
                    return function() {
                        nb(ea + ": call ignored")
                    }
                }
                return {
                    ZS: function() {
                        return "noop"
                    },
                    Jba: function() {
                        return !0
                    },
                    zd: D("init"),
                    Nb: D("setup"),
                    call: D("call")
                }
            }();
            _.Wf && (ka = _.Wf.qh());
            var zb = !1
              , Fb = !1
              , bb = function() {
                if ("rmr" == ka.rpctx)
                    return Tg.kZ;
                var D = "function" === typeof window.postMessage ? Tg.XN : "object" === typeof window.postMessage ? Tg.XN : window.ActiveXObject ? Tg.ZW ? Tg.ZW : Tg.GA : 0 < navigator.userAgent.indexOf("WebKit") ? Tg.kZ : "Gecko" === navigator.product ? Tg.frameElement : Tg.GA;
                D || (D = cb);
                return D
            }();
            w[""] = function() {
                nb("Unknown RPC service: " + this.s)
            }
            ;
            w.__cb = function(D, ea) {
                var T = P[D];
                T && (delete P[D],
                T.call(this, ea))
            }
            ;
            return {
                config: function(D) {
                    "function" === typeof D.xZ && (mb = D.xZ)
                },
                register: function(D, ea) {
                    if ("__cb" === D || "__ack" === D)
                        throw Error("w");
                    if ("" === D)
                        throw Error("x");
                    w[D] = ea
                },
                unregister: function(D) {
                    if ("__cb" === D || "__ack" === D)
                        throw Error("y");
                    if ("" === D)
                        throw Error("z");
                    delete w[D]
                },
                NY: function(D) {
                    w[""] = D
                },
                Z0: function() {
                    delete w[""]
                },
                GS: function() {},
                call: function(D, ea, T, ta) {
                    D = D || "..";
                    var za = "..";
                    ".." === D ? za = Ia : "/" == D.charAt(0) && (za = e(window.location.href),
                    za = "/" + Ia + (za ? "|" + za : ""));
                    ++I;
                    T && (P[I] = T);
                    var X = {
                        s: ea,
                        f: za,
                        c: T ? I : 0,
                        a: Array.prototype.slice.call(arguments, 3),
                        t: E[D],
                        l: !!C[D]
                    };
                    a: if ("bidir" === Q || "c2p" === Q && ".." === D || "p2c" === Q && ".." !== D) {
                        var da = window.location.href;
                        var Sa = "?";
                        if ("query" === ja)
                            Sa = "#";
                        else if ("hash" === ja)
                            break a;
                        Sa = da.lastIndexOf(Sa);
                        Sa = -1 === Sa ? da.length : Sa;
                        da = da.substring(0, Sa)
                    } else
                        da = null;
                    da && (X.r = da);
                    if (".." === D || null != f(D) || document.getElementById(D))
                        (da = W[D]) || null === f(D) || (da = bb),
                        0 === ea.indexOf("legacy__") && (da = bb,
                        X.s = ea.substring(8),
                        X.c = X.c ? X.c : I),
                        X.g = !0,
                        X.r = za,
                        da ? (C[D] && (da = Tg.GA),
                        !1 === da.call(D, za, X) && (W[D] = cb,
                        bb.call(D, za, X))) : K[D] ? K[D].push(X) : K[D] = [X]
                },
                Tu: m,
                fk: n,
                VC: p,
                Nw: t,
                uo: function(D) {
                    return E[D]
                },
                uK: function(D) {
                    delete x[D];
                    delete C[D];
                    delete E[D];
                    delete N[D];
                    delete W[D]
                },
                yT: function() {
                    return bb.ZS()
                },
                JY: function(D, ea) {
                    4 < D.length ? bb.zpa(D, d) : c.apply(null, D.concat(ea))
                },
                KY: function(D) {
                    D.a = Array.prototype.slice.call(D.a);
                    window.setTimeout(function() {
                        d(D)
                    }, 0)
                },
                getOrigin: e,
                Ho: function(D) {
                    var ea = null
                      , T = m(D);
                    T ? ea = T : (T = f(D)) ? ea = T.origin : ".." == D ? ea = ka.parent : (D = document.getElementById(D)) && "iframe" === D.tagName.toLowerCase() && (ea = D.src);
                    return e(ea)
                },
                zd: function() {
                    !1 === bb.zd(d, a) && (bb = cb);
                    oa ? t("..") : _.$f.register("rpc", null, function(D) {
                        D = D.rpc || {};
                        q(D);
                        u(D)
                    })
                },
                QO: h,
                a6: f,
                Mha: "__ack",
                Lma: Ia || "..",
                Vma: 0,
                Uma: 1,
                Tma: 2
            }
        }();
        _.Ug.zd()
    }
    ;_.Ug.config({
        xZ: function(a) {
            throw Error("A`" + a);
        }
    });
    _.r("gadgets.rpc.config", _.Ug.config);
    _.r("gadgets.rpc.register", _.Ug.register);
    _.r("gadgets.rpc.unregister", _.Ug.unregister);
    _.r("gadgets.rpc.registerDefault", _.Ug.NY);
    _.r("gadgets.rpc.unregisterDefault", _.Ug.Z0);
    _.r("gadgets.rpc.forceParentVerifiable", _.Ug.GS);
    _.r("gadgets.rpc.call", _.Ug.call);
    _.r("gadgets.rpc.getRelayUrl", _.Ug.Tu);
    _.r("gadgets.rpc.setRelayUrl", _.Ug.fk);
    _.r("gadgets.rpc.setAuthToken", _.Ug.VC);
    _.r("gadgets.rpc.setupReceiver", _.Ug.Nw);
    _.r("gadgets.rpc.getAuthToken", _.Ug.uo);
    _.r("gadgets.rpc.removeReceiver", _.Ug.uK);
    _.r("gadgets.rpc.getRelayChannel", _.Ug.yT);
    _.r("gadgets.rpc.receive", _.Ug.JY);
    _.r("gadgets.rpc.receiveSameDomain", _.Ug.KY);
    _.r("gadgets.rpc.getOrigin", _.Ug.getOrigin);
    _.r("gadgets.rpc.getTargetOrigin", _.Ug.Ho);
    _.Wf = _.Wf || {};
    _.Wf.y6 = function(a) {
        var b = window;
        "undefined" != typeof b.addEventListener ? b.addEventListener("mousemove", a, !1) : "undefined" != typeof b.attachEvent ? b.attachEvent("onmousemove", a) : _.Xf("cannot attachBrowserEvent: mousemove")
    }
    ;
    _.Wf.hea = function(a) {
        var b = window;
        b.removeEventListener ? b.removeEventListener("mousemove", a, !1) : b.detachEvent ? b.detachEvent("onmousemove", a) : _.Xf("cannot removeBrowserEvent: mousemove")
    }
    ;
    _.Ih = function() {
        function a(m) {
            var n = new _.Hh;
            n.Ax(m);
            return n.hj()
        }
        var b = window.crypto;
        if (b && "function" == typeof b.getRandomValues)
            return function() {
                var m = new window.Uint32Array(1);
                b.getRandomValues(m);
                return Number("0." + m[0])
            }
            ;
        var c = _.Ef("random/maxObserveMousemove");
        null == c && (c = -1);
        var d = 0
          , e = Math.random()
          , f = 1
          , h = 1E6 * (screen.width * screen.width + screen.height)
          , k = function(m) {
            m = m || window.event;
            var n = m.screenX + m.clientX << 16;
            n += m.screenY + m.clientY;
            n *= (new Date).getTime() % 1E6;
            f = f * n % h;
            0 < c && ++d == c && _.Wf.hea(k)
        };
        0 != c && _.Wf.y6(k);
        var l = a(document.cookie + "|" + document.location + "|" + (new Date).getTime() + "|" + e);
        return function() {
            var m = f;
            m += parseInt(l.substr(0, 20), 16);
            l = a(l);
            return m / (h + Math.pow(16, 20))
        }
    }();
    _.r("shindig.random", _.Ih);
    var Jh = function(a) {
        return {
            execute: function(b) {
                var c = {
                    method: a.httpMethod || "GET",
                    root: a.root,
                    path: a.url,
                    params: a.urlParams,
                    headers: a.headers,
                    body: a.body
                }
                  , d = window.gapi
                  , e = function() {
                    var f = d.config.get("client/apiKey")
                      , h = d.config.get("client/version");
                    try {
                        var k = d.config.get("googleapis.config/developerKey")
                          , l = d.config.get("client/apiKey", k);
                        d.config.update("client/apiKey", l);
                        d.config.update("client/version", "1.0.0-alpha");
                        var m = d.client;
                        m.request.call(m, c).then(b, b)
                    } finally {
                        d.config.update("client/apiKey", f),
                        d.config.update("client/version", h)
                    }
                };
                d.client ? e() : d.load.call(d, "client", e)
            }
        }
    }, Kh = function(a, b) {
        return function(c) {
            var d = {};
            c = c.body;
            var e = _.Kg(c)
              , f = {};
            if (e && e.length)
                for (var h = e.length, k = 0; k < h; ++k) {
                    var l = e[k];
                    f[l.id] = l
                }
            h = b.length;
            for (k = 0; k < h; ++k)
                l = b[k].id,
                d[l] = e && e.length ? f[l] : e;
            a(d, c)
        }
    }, Lh = function(a) {
        a.transport = {
            name: "googleapis",
            execute: function(b, c) {
                for (var d = [], e = b.length, f = 0; f < e; ++f) {
                    var h = b[f]
                      , k = h.method
                      , l = String(k).split(".")[0];
                    l = _.Ef("googleapis.config/versions/" + k) || _.Ef("googleapis.config/versions/" + l) || "v1";
                    d.push({
                        jsonrpc: "2.0",
                        id: h.id,
                        method: k,
                        apiVersion: String(l),
                        params: h.params
                    })
                }
                b = Jh({
                    httpMethod: "POST",
                    root: a.transport.root,
                    url: "/rpc?pp=0",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: d
                });
                b.execute.call(b, Kh(c, d))
            },
            root: void 0
        }
    }, Mh = function(a) {
        var b = this.method
          , c = this.transport;
        c.execute.call(c, [{
            method: b,
            id: b,
            params: this.rpc
        }], function(d) {
            d = d[b];
            d.error || (d = d.data || d.result);
            a(d)
        })
    }, Oh = function() {
        for (var a = Nh, b = a.split("."), c = function(k) {
            k = k || {};
            k.groupId = k.groupId || "@self";
            k.userId = k.userId || "@viewer";
            k = {
                method: a,
                rpc: k || {}
            };
            Lh(k);
            k.execute = Mh;
            return k
        }, d = _.Va, e = b.length, f = 0; f < e; ++f) {
            var h = d[b[f]] || {};
            f + 1 == e && (h = c);
            d = d[b[f]] = h
        }
        if (1 < b.length && "googleapis" != b[0])
            for (b[0] = "googleapis",
            "delete" == b[b.length - 1] && (b[b.length - 1] = "remove"),
            d = _.Va,
            e = b.length,
            f = 0; f < e; ++f)
                h = d[b[f]] || {},
                f + 1 == e && (h = c),
                d = d[b[f]] = h
    }, Nh;
    for (Nh in _.Ef("googleapis.config/methods"))
        Oh();
    _.r("googleapis.newHttpRequest", function(a) {
        return Jh(a)
    });
    _.r("googleapis.setUrlParameter", function(a, b) {
        if ("trace" !== a)
            throw Error("D");
        _.Ff("client/trace", b)
    });
});
// Google Inc.
