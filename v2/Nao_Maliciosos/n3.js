;/*FB_PKG_DELIM*/

/**
 * License: https://www.facebook.com/legal/license/NKF0mBOyBt2/
 */
__d("pvutils-1.0.17", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {}
      , h = {
        exports: g
    };
    function i() {
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        g.getUTCDate = a;
        g.getParametersValue = b;
        g.bufferToHexCodes = c;
        g.checkBufferParams = d;
        g.utilFromBase = e;
        g.utilToBase = f;
        g.utilConcatBuf = h;
        g.utilConcatView = i;
        g.utilDecodeTC = j;
        g.utilEncodeTC = k;
        g.isEqualBuffer = l;
        g.padNumber = m;
        g.toBase64 = p;
        g.fromBase64 = q;
        g.arrayBufferToString = r;
        g.stringToArrayBuffer = s;
        g.nearestPowerOf2 = u;
        g.clearProps = v;
        function a(a) {
            return new Date(a.getTime() + a.getTimezoneOffset() * 6e4)
        }
        function b(a, b, c) {
            if (a instanceof Object === !1)
                return c;
            return b in a ? a[b] : c
        }
        function c(a, b, c, d) {
            b === void 0 && (b = 0);
            c === void 0 && (c = a.byteLength - b);
            d === void 0 && (d = !1);
            var e = ""
              , f = !0
              , g = !1
              , h = void 0;
            try {
                for (var i = new Uint8Array(a,b,c)[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](), a; !(f = (a = i.next()).done); f = !0) {
                    b = a.value;
                    c = b.toString(16).toUpperCase();
                    c.length === 1 && (e += "0");
                    e += c;
                    d && (e += " ")
                }
            } catch (a) {
                g = !0,
                h = a
            } finally {
                try {
                    !f && i["return"] && i["return"]()
                } finally {
                    if (g)
                        throw h
                }
            }
            return e.trim()
        }
        function d(a, b, c, d) {
            if (b instanceof ArrayBuffer === !1) {
                a.error = 'Wrong parameter: inputBuffer must be "ArrayBuffer"';
                return !1
            }
            if (b.byteLength === 0) {
                a.error = "Wrong parameter: inputBuffer has zero length";
                return !1
            }
            if (c < 0) {
                a.error = "Wrong parameter: inputOffset less than zero";
                return !1
            }
            if (d < 0) {
                a.error = "Wrong parameter: inputLength less than zero";
                return !1
            }
            if (b.byteLength - c - d < 0) {
                a.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
                return !1
            }
            return !0
        }
        function e(a, b) {
            var c = 0;
            if (a.length === 1)
                return a[0];
            for (var d = a.length - 1; d >= 0; d--)
                c += a[a.length - 1 - d] * Math.pow(2, b * d);
            return c
        }
        function f(a, b, c) {
            c === void 0 && (c = -1);
            c = c;
            var d = a
              , e = 0
              , f = Math.pow(2, b);
            for (var g = 1; g < 8; g++) {
                if (a < f) {
                    var h = void 0;
                    if (c < 0)
                        h = new ArrayBuffer(g),
                        e = g;
                    else {
                        if (c < g)
                            return new ArrayBuffer(0);
                        h = new ArrayBuffer(c);
                        e = c
                    }
                    var i = new Uint8Array(h);
                    for (var j = g - 1; j >= 0; j--) {
                        var k = Math.pow(2, j * b);
                        i[e - j - 1] = Math.floor(d / k);
                        d -= i[e - j - 1] * k
                    }
                    return h
                }
                f *= Math.pow(2, b)
            }
            return new ArrayBuffer(0)
        }
        function h() {
            var a = 0
              , b = 0
              , c = !0
              , d = !1
              , e = void 0;
            for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
                g[h] = arguments[h];
            try {
                for (var i = g[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](), j; !(c = (j = i.next()).done); c = !0) {
                    var k = j.value;
                    a += k.byteLength
                }
            } catch (a) {
                d = !0,
                e = a
            } finally {
                try {
                    !c && i["return"] && i["return"]()
                } finally {
                    if (d)
                        throw e
                }
            }
            var l = new ArrayBuffer(a)
              , m = new Uint8Array(l)
              , n = !0
              , o = !1
              , p = void 0;
            try {
                for (var q = g[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](), r; !(n = (r = q.next()).done); n = !0) {
                    var s = r.value;
                    m.set(new Uint8Array(s), b);
                    b += s.byteLength
                }
            } catch (a) {
                o = !0,
                p = a
            } finally {
                try {
                    !n && q["return"] && q["return"]()
                } finally {
                    if (o)
                        throw p
                }
            }
            return l
        }
        function i() {
            var a = 0
              , b = 0
              , c = !0
              , d = !1
              , e = void 0;
            for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++)
                g[h] = arguments[h];
            try {
                for (var i = g[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](), j; !(c = (j = i.next()).done); c = !0) {
                    var k = j.value;
                    a += k.length
                }
            } catch (a) {
                d = !0,
                e = a
            } finally {
                try {
                    !c && i["return"] && i["return"]()
                } finally {
                    if (d)
                        throw e
                }
            }
            var l = new ArrayBuffer(a)
              , m = new Uint8Array(l)
              , n = !0
              , o = !1
              , p = void 0;
            try {
                for (var q = g[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](), r; !(n = (r = q.next()).done); n = !0) {
                    var s = r.value;
                    m.set(s, b);
                    b += s.length
                }
            } catch (a) {
                o = !0,
                p = a
            } finally {
                try {
                    !n && q["return"] && q["return"]()
                } finally {
                    if (o)
                        throw p
                }
            }
            return m
        }
        function j() {
            var a = new Uint8Array(this.valueHex);
            if (this.valueHex.byteLength >= 2) {
                var b = a[0] === 255 && a[1] & 128
                  , c = a[0] === 0 && (a[1] & 128) === 0;
                (b || c) && this.warnings.push("Needlessly long format")
            }
            b = new ArrayBuffer(this.valueHex.byteLength);
            c = new Uint8Array(b);
            for (b = 0; b < this.valueHex.byteLength; b++)
                c[b] = 0;
            c[0] = a[0] & 128;
            b = e(c, 8);
            c = new ArrayBuffer(this.valueHex.byteLength);
            c = new Uint8Array(c);
            for (var d = 0; d < this.valueHex.byteLength; d++)
                c[d] = a[d];
            c[0] &= 127;
            a = e(c, 8);
            return a - b
        }
        function k(a) {
            var b = a < 0 ? a * -1 : a
              , c = 128;
            for (var d = 1; d < 8; d++) {
                if (b <= c) {
                    if (a < 0) {
                        var e = c - b;
                        e = f(e, 8, d);
                        var g = new Uint8Array(e);
                        g[0] |= 128;
                        return e
                    }
                    g = f(b, 8, d);
                    e = new Uint8Array(g);
                    if (e[0] & 128) {
                        var h = g.slice(0)
                          , i = new Uint8Array(h);
                        g = new ArrayBuffer(g.byteLength + 1);
                        e = new Uint8Array(g);
                        for (var j = 0; j < h.byteLength; j++)
                            e[j + 1] = i[j];
                        e[0] = 0
                    }
                    return g
                }
                c *= Math.pow(2, 8)
            }
            return new ArrayBuffer(0)
        }
        function l(a, b) {
            if (a.byteLength !== b.byteLength)
                return !1;
            a = new Uint8Array(a);
            b = new Uint8Array(b);
            for (var c = 0; c < a.length; c++)
                if (a[c] !== b[c])
                    return !1;
            return !0
        }
        function m(a, b) {
            a = a.toString(10);
            if (b < a.length)
                return "";
            b = b - a.length;
            var c = new Array(b);
            for (var d = 0; d < b; d++)
                c[d] = "0";
            b = c.join("");
            return b.concat(a)
        }
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
          , o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
        function p(a, b, c, d) {
            b === void 0 && (b = !1);
            c === void 0 && (c = !1);
            d === void 0 && (d = !1);
            var e = 0
              , f = 0
              , g = 0
              , h = "";
            b = b ? o : n;
            if (d) {
                d = 0;
                for (var i = 0; i < a.length; i++)
                    if (a.charCodeAt(i) !== 0) {
                        d = i;
                        break
                    }
                a = a.slice(d)
            }
            while (e < a.length) {
                i = a.charCodeAt(e++);
                e >= a.length && (f = 1);
                d = a.charCodeAt(e++);
                e >= a.length && (g = 1);
                var j = a.charCodeAt(e++)
                  , k = i >> 2;
                i = (i & 3) << 4 | d >> 4;
                d = (d & 15) << 2 | j >> 6;
                j = j & 63;
                f === 1 ? d = j = 64 : g === 1 && (j = 64);
                c ? d === 64 ? h += "" + b.charAt(k) + b.charAt(i) : j === 64 ? h += "" + b.charAt(k) + b.charAt(i) + b.charAt(d) : h += "" + b.charAt(k) + b.charAt(i) + b.charAt(d) + b.charAt(j) : h += "" + b.charAt(k) + b.charAt(i) + b.charAt(d) + b.charAt(j)
            }
            return h
        }
        function q(a, b, c) {
            b === void 0 && (b = !1);
            c === void 0 && (c = !1);
            var d = b ? o : n;
            function e(a) {
                for (var b = 0; b < 64; b++)
                    if (d.charAt(b) === a)
                        return b;
                return 64
            }
            function f(a) {
                return a === 64 ? 0 : a
            }
            b = 0;
            var g = "";
            while (b < a.length) {
                var h = e(a.charAt(b++))
                  , i = b >= a.length ? 0 : e(a.charAt(b++))
                  , j = b >= a.length ? 0 : e(a.charAt(b++))
                  , k = b >= a.length ? 0 : e(a.charAt(b++));
                h = f(h) << 2 | f(i) >> 4;
                i = (f(i) & 15) << 4 | f(j) >> 2;
                var l = (f(j) & 3) << 6 | f(k);
                g += String.fromCharCode(h);
                j !== 64 && (g += String.fromCharCode(i));
                k !== 64 && (g += String.fromCharCode(l))
            }
            if (c) {
                h = g.length;
                j = -1;
                for (i = h - 1; i >= 0; i--)
                    if (g.charCodeAt(i) !== 0) {
                        j = i;
                        break
                    }
                j !== -1 ? g = g.slice(0, j + 1) : g = ""
            }
            return g
        }
        function r(a) {
            var b = "";
            a = new Uint8Array(a);
            var c = !0
              , d = !1
              , e = void 0;
            try {
                for (var f = a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](), a; !(c = (a = f.next()).done); c = !0) {
                    a = a.value;
                    b += String.fromCharCode(a)
                }
            } catch (a) {
                d = !0,
                e = a
            } finally {
                try {
                    !c && f["return"] && f["return"]()
                } finally {
                    if (d)
                        throw e
                }
            }
            return b
        }
        function s(a) {
            var b = a.length
              , c = new ArrayBuffer(b)
              , d = new Uint8Array(c);
            for (var e = 0; e < b; e++)
                d[e] = a.charCodeAt(e);
            return c
        }
        var t = Math.log(2);
        function u(a) {
            a = Math.log(a) / t;
            var b = Math.floor(a);
            a = Math.round(a);
            return b === a ? b : a
        }
        function v(a, b) {
            var c = !0
              , d = !1
              , e = void 0;
            try {
                for (var f = b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](), b; !(c = (b = f.next()).done); c = !0) {
                    b = b.value;
                    delete a[b]
                }
            } catch (a) {
                d = !0,
                e = a
            } finally {
                try {
                    !c && f["return"] && f["return"]()
                } finally {
                    if (d)
                        throw e
                }
            }
        }
    }
    var j = !1;
    function k() {
        j || (j = !0,
        i());
        return h.exports
    }
    function a(a) {
        switch (a) {
        case void 0:
            return k()
        }
    }
    e.exports = a
}
), null);
/**
 * License: https://www.facebook.com/legal/license/V9vdYColc4k/
 */
__d("react-0.0.0", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        return a && typeof a === "object" && "default"in a ? a["default"] : a
    }
    var g = a(b("React"));
    d = {};
    var h = {
        exports: d
    };
    function i() {
        h.exports = g
    }
    var j = !1;
    function k() {
        j || (j = !0,
        i());
        return h.exports
    }
    function c(a) {
        switch (a) {
        case void 0:
            return k()
        }
    }
    e.exports = c
}
), null);
__d("react", ["react-0.0.0"], (function(a, b, c, d, e, f) {
    e.exports = b("react-0.0.0")()
}
), null);
/**
 * License: https://www.facebook.com/legal/license/t3hOLs8wlXy/
 */
__d("resize-observer-polyfill-1.5.1", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {}
      , h = {
        exports: g
    };
    function i() {
        (function(b, c) {
            typeof g === "object" && typeof h !== "undefined" ? h.exports = c() : b.ResizeObserver = c()
        }
        )(this, function() {
            var b = function() {
                if (typeof Map !== "undefined")
                    return Map;
                function a(a, b) {
                    var c = -1;
                    a.some(function(d, a) {
                        if (d[0] === b) {
                            c = a;
                            return !0
                        }
                        return !1
                    });
                    return c
                }
                return function() {
                    function b() {
                        this.__entries__ = []
                    }
                    Object.defineProperty(b.prototype, "size", {
                        get: function() {
                            return this.__entries__.length
                        },
                        enumerable: !0,
                        configurable: !0
                    });
                    b.prototype.get = function(b) {
                        b = a(this.__entries__, b);
                        b = this.__entries__[b];
                        return b && b[1]
                    }
                    ;
                    b.prototype.set = function(c, d) {
                        var b = a(this.__entries__, c);
                        ~b ? this.__entries__[b][1] = d : this.__entries__.push([c, d])
                    }
                    ;
                    b.prototype["delete"] = function(b) {
                        var c = this.__entries__;
                        b = a(c, b);
                        ~b && c.splice(b, 1)
                    }
                    ;
                    b.prototype.has = function(b) {
                        return !!~a(this.__entries__, b)
                    }
                    ;
                    b.prototype.clear = function() {
                        this.__entries__.splice(0)
                    }
                    ;
                    b.prototype.forEach = function(a, b) {
                        b === void 0 && (b = null);
                        for (var c = 0, d = this.__entries__; c < d.length; c++) {
                            var e = d[c];
                            a.call(b, e[1], e[0])
                        }
                    }
                    ;
                    return b
                }()
            }()
              , c = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document
              , d = function() {
                if (typeof a !== "undefined" && a.Math === Math)
                    return a;
                if (typeof self !== "undefined" && self.Math === Math)
                    return self;
                return typeof window !== "undefined" && window.Math === Math ? window : Function("return this")()
            }()
              , e = function() {
                return typeof requestAnimationFrame === "function" ? requestAnimationFrame.bind(d) : function(a) {
                    return setTimeout(function() {
                        return a(Date.now())
                    }, 1e3 / 60)
                }
            }()
              , f = 2;
            function g(a, b) {
                var c = !1
                  , d = !1
                  , g = 0;
                function h() {
                    c && (c = !1,
                    a()),
                    d && j()
                }
                function i() {
                    e(h)
                }
                function j() {
                    var a = Date.now();
                    if (c) {
                        if (a - g < f)
                            return;
                        d = !0
                    } else
                        c = !0,
                        d = !1,
                        setTimeout(i, b);
                    g = a
                }
                return j
            }
            var h = 20
              , i = ["top", "right", "bottom", "left", "width", "height", "size", "weight"]
              , j = typeof MutationObserver !== "undefined"
              , k = function() {
                function a() {
                    this.connected_ = !1,
                    this.mutationEventsAdded_ = !1,
                    this.mutationsObserver_ = null,
                    this.observers_ = [],
                    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this),
                    this.refresh = g(this.refresh.bind(this), h)
                }
                a.prototype.addObserver = function(a) {
                    ~this.observers_.indexOf(a) || this.observers_.push(a),
                    this.connected_ || this.connect_()
                }
                ;
                a.prototype.removeObserver = function(b) {
                    var a = this.observers_;
                    b = a.indexOf(b);
                    ~b && a.splice(b, 1);
                    !a.length && this.connected_ && this.disconnect_()
                }
                ;
                a.prototype.refresh = function() {
                    var a = this.updateObservers_();
                    a && this.refresh()
                }
                ;
                a.prototype.updateObservers_ = function() {
                    var a = this.observers_.filter(function(a) {
                        return a.gatherActive(),
                        a.hasActive()
                    });
                    a.forEach(function(a) {
                        return a.broadcastActive()
                    });
                    return a.length > 0
                }
                ;
                a.prototype.connect_ = function() {
                    if (!c || this.connected_)
                        return;
                    document.addEventListener("transitionend", this.onTransitionEnd_);
                    window.addEventListener("resize", this.refresh);
                    j ? (this.mutationsObserver_ = new MutationObserver(this.refresh),
                    this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    })) : (document.addEventListener("DOMSubtreeModified", this.refresh),
                    this.mutationEventsAdded_ = !0);
                    this.connected_ = !0
                }
                ;
                a.prototype.disconnect_ = function() {
                    if (!c || !this.connected_)
                        return;
                    document.removeEventListener("transitionend", this.onTransitionEnd_);
                    window.removeEventListener("resize", this.refresh);
                    this.mutationsObserver_ && this.mutationsObserver_.disconnect();
                    this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh);
                    this.mutationsObserver_ = null;
                    this.mutationEventsAdded_ = !1;
                    this.connected_ = !1
                }
                ;
                a.prototype.onTransitionEnd_ = function(a) {
                    a = a.propertyName;
                    var b = a === void 0 ? "" : a;
                    a = i.some(function(a) {
                        return !!~b.indexOf(a)
                    });
                    a && this.refresh()
                }
                ;
                a.getInstance = function() {
                    this.instance_ || (this.instance_ = new a());
                    return this.instance_
                }
                ;
                a.instance_ = null;
                return a
            }()
              , l = function(a, b) {
                for (var c = 0, d = Object.keys(b); c < d.length; c++) {
                    var e = d[c];
                    Object.defineProperty(a, e, {
                        value: b[e],
                        enumerable: !1,
                        writable: !1,
                        configurable: !0
                    })
                }
                return a
            }
              , m = function(a) {
                a = a && a.ownerDocument && a.ownerDocument.defaultView;
                return a || d
            }
              , n = x(0, 0, 0, 0);
            function o(a) {
                return parseFloat(a) || 0
            }
            function p(a) {
                var b = [];
                for (var c = 1; c < arguments.length; c++)
                    b[c - 1] = arguments[c];
                return b.reduce(function(b, c) {
                    c = a["border-" + c + "-width"];
                    return b + o(c)
                }, 0)
            }
            function q(a) {
                var b = ["top", "right", "bottom", "left"]
                  , c = {};
                for (var d = 0, b = b; d < b.length; d++) {
                    var e = b[d]
                      , f = a["padding-" + e];
                    c[e] = o(f)
                }
                return c
            }
            function r(a) {
                a = a.getBBox();
                return x(0, 0, a.width, a.height)
            }
            function s(a) {
                var b = a.clientWidth
                  , c = a.clientHeight;
                if (!b && !c)
                    return n;
                var d = m(a).getComputedStyle(a)
                  , e = q(d)
                  , f = e.left + e.right
                  , g = e.top + e.bottom
                  , h = o(d.width)
                  , i = o(d.height);
                d.boxSizing === "border-box" && (Math.round(h + f) !== b && (h -= p(d, "left", "right") + f),
                Math.round(i + g) !== c && (i -= p(d, "top", "bottom") + g));
                if (!u(a)) {
                    d = Math.round(h + f) - b;
                    a = Math.round(i + g) - c;
                    Math.abs(d) !== 1 && (h -= d);
                    Math.abs(a) !== 1 && (i -= a)
                }
                return x(e.left, e.top, h, i)
            }
            var t = function() {
                return typeof SVGGraphicsElement !== "undefined" ? function(a) {
                    return a instanceof m(a).SVGGraphicsElement
                }
                : function(a) {
                    return a instanceof m(a).SVGElement && typeof a.getBBox === "function"
                }
            }();
            function u(a) {
                return a === m(a).document.documentElement
            }
            function v(a) {
                if (!c)
                    return n;
                return t(a) ? r(a) : s(a)
            }
            function w(a) {
                var b = a.x
                  , c = a.y
                  , d = a.width;
                a = a.height;
                var e = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
                e = Object.create(e.prototype);
                l(e, {
                    x: b,
                    y: c,
                    width: d,
                    height: a,
                    top: c,
                    right: b + d,
                    bottom: a + c,
                    left: b
                });
                return e
            }
            function x(a, b, c, d) {
                return {
                    x: a,
                    y: b,
                    width: c,
                    height: d
                }
            }
            var y = function() {
                function a(a) {
                    this.broadcastWidth = 0,
                    this.broadcastHeight = 0,
                    this.contentRect_ = x(0, 0, 0, 0),
                    this.target = a
                }
                a.prototype.isActive = function() {
                    var a = v(this.target);
                    this.contentRect_ = a;
                    return a.width !== this.broadcastWidth || a.height !== this.broadcastHeight
                }
                ;
                a.prototype.broadcastRect = function() {
                    var a = this.contentRect_;
                    this.broadcastWidth = a.width;
                    this.broadcastHeight = a.height;
                    return a
                }
                ;
                return a
            }()
              , z = function() {
                function a(a, b) {
                    b = w(b);
                    l(this, {
                        target: a,
                        contentRect: b
                    })
                }
                return a
            }()
              , A = function() {
                function a(a, c, d) {
                    this.activeObservations_ = [];
                    this.observations_ = new b();
                    if (typeof a !== "function")
                        throw new TypeError("The callback provided as parameter 1 is not a function.");
                    this.callback_ = a;
                    this.controller_ = c;
                    this.callbackCtx_ = d
                }
                a.prototype.observe = function(a) {
                    if (!arguments.length)
                        throw new TypeError("1 argument required, but only 0 present.");
                    if (typeof Element === "undefined" || !(Element instanceof Object))
                        return;
                    if (!(a instanceof m(a).Element))
                        throw new TypeError('parameter 1 is not of type "Element".');
                    var b = this.observations_;
                    if (b.has(a))
                        return;
                    b.set(a, new y(a));
                    this.controller_.addObserver(this);
                    this.controller_.refresh()
                }
                ;
                a.prototype.unobserve = function(a) {
                    if (!arguments.length)
                        throw new TypeError("1 argument required, but only 0 present.");
                    if (typeof Element === "undefined" || !(Element instanceof Object))
                        return;
                    if (!(a instanceof m(a).Element))
                        throw new TypeError('parameter 1 is not of type "Element".');
                    var b = this.observations_;
                    if (!b.has(a))
                        return;
                    b["delete"](a);
                    b.size || this.controller_.removeObserver(this)
                }
                ;
                a.prototype.disconnect = function() {
                    this.clearActive(),
                    this.observations_.clear(),
                    this.controller_.removeObserver(this)
                }
                ;
                a.prototype.gatherActive = function() {
                    var a = this;
                    this.clearActive();
                    this.observations_.forEach(function(b) {
                        b.isActive() && a.activeObservations_.push(b)
                    })
                }
                ;
                a.prototype.broadcastActive = function() {
                    if (!this.hasActive())
                        return;
                    var a = this.callbackCtx_
                      , b = this.activeObservations_.map(function(a) {
                        return new z(a.target,a.broadcastRect())
                    });
                    this.callback_.call(a, b, a);
                    this.clearActive()
                }
                ;
                a.prototype.clearActive = function() {
                    this.activeObservations_.splice(0)
                }
                ;
                a.prototype.hasActive = function() {
                    return this.activeObservations_.length > 0
                }
                ;
                return a
            }()
              , B = typeof WeakMap !== "undefined" ? new WeakMap() : new b()
              , C = function() {
                function a(b) {
                    if (!(this instanceof a))
                        throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length)
                        throw new TypeError("1 argument required, but only 0 present.");
                    var c = k.getInstance()
                      , d = new A(b,c,this);
                    B.set(this, d)
                }
                return a
            }();
            ["observe", "unobserve", "disconnect"].forEach(function(a) {
                C.prototype[a] = function() {
                    var b;
                    return (b = B.get(this))[a].apply(b, arguments)
                }
            });
            var D = function() {
                return typeof d.ResizeObserver !== "undefined" ? d.ResizeObserver : C
            }();
            return D
        })
    }
    var j = !1;
    function k() {
        j || (j = !0,
        i());
        return h.exports
    }
    function b(a) {
        switch (a) {
        case void 0:
            return k()
        }
    }
    e.exports = b
}
), null);
__d("velocity-animate-ui", ["velocity-animate-1.5.2"], (function(a, b, c, d, e, f) {
    e.exports = b("velocity-animate-1.5.2")("/velocity.ui")
}
), null);
