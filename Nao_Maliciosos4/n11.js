/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@docsearch/js@3.6.0/dist/umd/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*! @docsearch/js 3.6.0 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).docsearch = t()
}(this, (function() {
    "use strict";
    function e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function t(t) {
        for (var n = 1; n < arguments.length; n++) {
            var o = null != arguments[n] ? arguments[n] : {};
            n % 2 ? e(Object(o), !0).forEach((function(e) {
                r(t, e, o[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : e(Object(o)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
            }
            ))
        }
        return t
    }
    function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        n(e)
    }
    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function o() {
        return o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ,
        o.apply(this, arguments)
    }
    function i(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    function c(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n)
                return;
            var r, o, i = [], c = !0, a = !1;
            try {
                for (n = n.call(e); !(c = (r = n.next()).done) && (i.push(r.value),
                !t || i.length !== t); c = !0)
                    ;
            } catch (e) {
                a = !0,
                o = e
            } finally {
                try {
                    c || null == n.return || n.return()
                } finally {
                    if (a)
                        throw o
                }
            }
            return i
        }(e, t) || u(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function a(e) {
        return function(e) {
            if (Array.isArray(e))
                return l(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || u(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function u(e, t) {
        if (e) {
            if ("string" == typeof e)
                return l(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
        }
    }
    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    var s, f, p, m, v, d = {}, h = [], y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function b(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function g(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }
    function _(e, t, n) {
        var r, o, i, c = arguments, a = {};
        for (i in t)
            "key" == i ? r = t[i] : "ref" == i ? o = t[i] : a[i] = t[i];
        if (arguments.length > 3)
            for (n = [n],
            i = 3; i < arguments.length; i++)
                n.push(c[i]);
        if (null != n && (a.children = n),
        "function" == typeof e && null != e.defaultProps)
            for (i in e.defaultProps)
                void 0 === a[i] && (a[i] = e.defaultProps[i]);
        return O(e, a, r, o, null)
    }
    function O(e, t, n, r, o) {
        var i = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == o ? ++s.__v : o
        };
        return null != s.vnode && s.vnode(i),
        i
    }
    function S(e) {
        return e.children
    }
    function w(e, t) {
        this.props = e,
        this.context = t
    }
    function j(e, t) {
        if (null == t)
            return e.__ ? j(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e)
                return n.__e;
        return "function" == typeof e.type ? j(e) : null
    }
    function E(e) {
        var t, n;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null,
            t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                    e.__e = e.__c.base = n.__e;
                    break
                }
            return E(e)
        }
    }
    function P(e) {
        (!e.__d && (e.__d = !0) && f.push(e) && !I.__r++ || m !== s.debounceRendering) && ((m = s.debounceRendering) || p)(I)
    }
    function I() {
        for (var e; I.__r = f.length; )
            e = f.sort((function(e, t) {
                return e.__v.__b - t.__v.__b
            }
            )),
            f = [],
            e.some((function(e) {
                var t, n, r, o, i, c;
                e.__d && (i = (o = (t = e).__v).__e,
                (c = t.__P) && (n = [],
                (r = b({}, o)).__v = o.__v + 1,
                q(c, o, r, t.__n, void 0 !== c.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? j(o) : i, o.__h),
                L(n, o),
                o.__e != i && E(o)))
            }
            ))
    }
    function D(e, t, n, r, o, i, c, a, u, l) {
        var s, f, p, m, v, y, b, g = r && r.__k || h, _ = g.length;
        for (n.__k = [],
        s = 0; s < t.length; s++)
            if (null != (m = n.__k[s] = null == (m = t[s]) || "boolean" == typeof m ? null : "string" == typeof m || "number" == typeof m ? O(null, m, null, null, m) : Array.isArray(m) ? O(S, {
                children: m
            }, null, null, null) : m.__b > 0 ? O(m.type, m.props, m.key, null, m.__v) : m)) {
                if (m.__ = n,
                m.__b = n.__b + 1,
                null === (p = g[s]) || p && m.key == p.key && m.type === p.type)
                    g[s] = void 0;
                else
                    for (f = 0; f < _; f++) {
                        if ((p = g[f]) && m.key == p.key && m.type === p.type) {
                            g[f] = void 0;
                            break
                        }
                        p = null
                    }
                q(e, m, p = p || d, o, i, c, a, u, l),
                v = m.__e,
                (f = m.ref) && p.ref != f && (b || (b = []),
                p.ref && b.push(p.ref, null, m),
                b.push(f, m.__c || v, m)),
                null != v ? (null == y && (y = v),
                "function" == typeof m.type && null != m.__k && m.__k === p.__k ? m.__d = u = k(m, u, e) : u = C(e, m, p, g, v, u),
                l || "option" !== n.type ? "function" == typeof n.type && (n.__d = u) : e.value = "") : u && p.__e == u && u.parentNode != e && (u = j(p))
            }
        for (n.__e = y,
        s = _; s--; )
            null != g[s] && ("function" == typeof n.type && null != g[s].__e && g[s].__e == n.__d && (n.__d = j(r, s + 1)),
            U(g[s], g[s]));
        if (b)
            for (s = 0; s < b.length; s++)
                H(b[s], b[++s], b[++s])
    }
    function k(e, t, n) {
        var r, o;
        for (r = 0; r < e.__k.length; r++)
            (o = e.__k[r]) && (o.__ = e,
            t = "function" == typeof o.type ? k(o, t, n) : C(n, o, o, e.__k, o.__e, t));
        return t
    }
    function A(e, t) {
        return t = t || [],
        null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
            A(e, t)
        }
        )) : t.push(e)),
        t
    }
    function C(e, t, n, r, o, i) {
        var c, a, u;
        if (void 0 !== t.__d)
            c = t.__d,
            t.__d = void 0;
        else if (null == n || o != i || null == o.parentNode)
            e: if (null == i || i.parentNode !== e)
                e.appendChild(o),
                c = null;
            else {
                for (a = i,
                u = 0; (a = a.nextSibling) && u < r.length; u += 2)
                    if (a == o)
                        break e;
                e.insertBefore(o, i),
                c = i
            }
        return void 0 !== c ? c : o.nextSibling
    }
    function x(e, t, n) {
        "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || y.test(t) ? n : n + "px"
    }
    function N(e, t, n, r, o) {
        var i;
        e: if ("style" === t)
            if ("string" == typeof n)
                e.style.cssText = n;
            else {
                if ("string" == typeof r && (e.style.cssText = r = ""),
                r)
                    for (t in r)
                        n && t in n || x(e.style, t, "");
                if (n)
                    for (t in n)
                        r && n[t] === r[t] || x(e.style, t, n[t])
            }
        else if ("o" === t[0] && "n" === t[1])
            i = t !== (t = t.replace(/Capture$/, "")),
            t = t.toLowerCase()in e ? t.toLowerCase().slice(2) : t.slice(2),
            e.l || (e.l = {}),
            e.l[t + i] = n,
            n ? r || e.addEventListener(t, i ? R : T, i) : e.removeEventListener(t, i ? R : T, i);
        else if ("dangerouslySetInnerHTML" !== t) {
            if (o)
                t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
            else if ("href" !== t && "list" !== t && "form" !== t && "download" !== t && t in e)
                try {
                    e[t] = null == n ? "" : n;
                    break e
                } catch (e) {}
            "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
        }
    }
    function T(e) {
        this.l[e.type + !1](s.event ? s.event(e) : e)
    }
    function R(e) {
        this.l[e.type + !0](s.event ? s.event(e) : e)
    }
    function q(e, t, n, r, o, i, c, a, u) {
        var l, f, p, m, v, d, h, y, g, _, O, j = t.type;
        if (void 0 !== t.constructor)
            return null;
        null != n.__h && (u = n.__h,
        a = t.__e = n.__e,
        t.__h = null,
        i = [a]),
        (l = s.__b) && l(t);
        try {
            e: if ("function" == typeof j) {
                if (y = t.props,
                g = (l = j.contextType) && r[l.__c],
                _ = l ? g ? g.props.value : l.__ : r,
                n.__c ? h = (f = t.__c = n.__c).__ = f.__E : ("prototype"in j && j.prototype.render ? t.__c = f = new j(y,_) : (t.__c = f = new w(y,_),
                f.constructor = j,
                f.render = F),
                g && g.sub(f),
                f.props = y,
                f.state || (f.state = {}),
                f.context = _,
                f.__n = r,
                p = f.__d = !0,
                f.__h = []),
                null == f.__s && (f.__s = f.state),
                null != j.getDerivedStateFromProps && (f.__s == f.state && (f.__s = b({}, f.__s)),
                b(f.__s, j.getDerivedStateFromProps(y, f.__s))),
                m = f.props,
                v = f.state,
                p)
                    null == j.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(),
                    null != f.componentDidMount && f.__h.push(f.componentDidMount);
                else {
                    if (null == j.getDerivedStateFromProps && y !== m && null != f.componentWillReceiveProps && f.componentWillReceiveProps(y, _),
                    !f.__e && null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(y, f.__s, _) || t.__v === n.__v) {
                        f.props = y,
                        f.state = f.__s,
                        t.__v !== n.__v && (f.__d = !1),
                        f.__v = t,
                        t.__e = n.__e,
                        t.__k = n.__k,
                        f.__h.length && c.push(f);
                        break e
                    }
                    null != f.componentWillUpdate && f.componentWillUpdate(y, f.__s, _),
                    null != f.componentDidUpdate && f.__h.push((function() {
                        f.componentDidUpdate(m, v, d)
                    }
                    ))
                }
                f.context = _,
                f.props = y,
                f.state = f.__s,
                (l = s.__r) && l(t),
                f.__d = !1,
                f.__v = t,
                f.__P = e,
                l = f.render(f.props, f.state, f.context),
                f.state = f.__s,
                null != f.getChildContext && (r = b(b({}, r), f.getChildContext())),
                p || null == f.getSnapshotBeforeUpdate || (d = f.getSnapshotBeforeUpdate(m, v)),
                O = null != l && l.type === S && null == l.key ? l.props.children : l,
                D(e, Array.isArray(O) ? O : [O], t, n, r, o, i, c, a, u),
                f.base = t.__e,
                t.__h = null,
                f.__h.length && c.push(f),
                h && (f.__E = f.__ = null),
                f.__e = !1
            } else
                null == i && t.__v === n.__v ? (t.__k = n.__k,
                t.__e = n.__e) : t.__e = M(n.__e, t, n, r, o, i, c, u);
            (l = s.diffed) && l(t)
        } catch (e) {
            t.__v = null,
            (u || null != i) && (t.__e = a,
            t.__h = !!u,
            i[i.indexOf(a)] = null),
            s.__e(e, t, n)
        }
    }
    function L(e, t) {
        s.__c && s.__c(t, e),
        e.some((function(t) {
            try {
                e = t.__h,
                t.__h = [],
                e.some((function(e) {
                    e.call(t)
                }
                ))
            } catch (e) {
                s.__e(e, t.__v)
            }
        }
        ))
    }
    function M(e, t, n, r, o, i, c, a) {
        var u, l, s, f, p = n.props, m = t.props, v = t.type, y = 0;
        if ("svg" === v && (o = !0),
        null != i)
            for (; y < i.length; y++)
                if ((u = i[y]) && (u === e || (v ? u.localName == v : 3 == u.nodeType))) {
                    e = u,
                    i[y] = null;
                    break
                }
        if (null == e) {
            if (null === v)
                return document.createTextNode(m);
            e = o ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, m.is && m),
            i = null,
            a = !1
        }
        if (null === v)
            p === m || a && e.data === m || (e.data = m);
        else {
            if (i = i && h.slice.call(e.childNodes),
            l = (p = n.props || d).dangerouslySetInnerHTML,
            s = m.dangerouslySetInnerHTML,
            !a) {
                if (null != i)
                    for (p = {},
                    f = 0; f < e.attributes.length; f++)
                        p[e.attributes[f].name] = e.attributes[f].value;
                (s || l) && (s && (l && s.__html == l.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""))
            }
            if (function(e, t, n, r, o) {
                var i;
                for (i in n)
                    "children" === i || "key" === i || i in t || N(e, i, null, n[i], r);
                for (i in t)
                    o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || N(e, i, t[i], n[i], r)
            }(e, m, p, o, a),
            s)
                t.__k = [];
            else if (y = t.props.children,
            D(e, Array.isArray(y) ? y : [y], t, n, r, o && "foreignObject" !== v, i, c, e.firstChild, a),
            null != i)
                for (y = i.length; y--; )
                    null != i[y] && g(i[y]);
            a || ("value"in m && void 0 !== (y = m.value) && (y !== e.value || "progress" === v && !y) && N(e, "value", y, p.value, !1),
            "checked"in m && void 0 !== (y = m.checked) && y !== e.checked && N(e, "checked", y, p.checked, !1))
        }
        return e
    }
    function H(e, t, n) {
        try {
            "function" == typeof e ? e(t) : e.current = t
        } catch (e) {
            s.__e(e, n)
        }
    }
    function U(e, t, n) {
        var r, o, i;
        if (s.unmount && s.unmount(e),
        (r = e.ref) && (r.current && r.current !== e.__e || H(r, null, t)),
        n || "function" == typeof e.type || (n = null != (o = e.__e)),
        e.__e = e.__d = void 0,
        null != (r = e.__c)) {
            if (r.componentWillUnmount)
                try {
                    r.componentWillUnmount()
                } catch (e) {
                    s.__e(e, t)
                }
            r.base = r.__P = null
        }
        if (r = e.__k)
            for (i = 0; i < r.length; i++)
                r[i] && U(r[i], t, n);
        null != o && g(o)
    }
    function F(e, t, n) {
        return this.constructor(e, n)
    }
    function B(e, t, n) {
        var r, o, i;
        s.__ && s.__(e, t),
        o = (r = "function" == typeof n) ? null : n && n.__k || t.__k,
        i = [],
        q(t, e = (!r && n || t).__k = _(S, null, [e]), o || d, d, void 0 !== t.ownerSVGElement, !r && n ? [n] : o ? null : t.firstChild ? h.slice.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r),
        L(i, e)
    }
    function V(e, t) {
        B(e, t, V)
    }
    function K(e, t, n) {
        var r, o, i, c = arguments, a = b({}, e.props);
        for (i in t)
            "key" == i ? r = t[i] : "ref" == i ? o = t[i] : a[i] = t[i];
        if (arguments.length > 3)
            for (n = [n],
            i = 3; i < arguments.length; i++)
                n.push(c[i]);
        return null != n && (a.children = n),
        O(e.type, a, r || e.key, o || e.ref, null)
    }
    s = {
        __e: function(e, t) {
            for (var n, r, o; t = t.__; )
                if ((n = t.__c) && !n.__)
                    try {
                        if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)),
                        o = n.__d),
                        null != n.componentDidCatch && (n.componentDidCatch(e),
                        o = n.__d),
                        o)
                            return n.__E = n
                    } catch (t) {
                        e = t
                    }
            throw e
        },
        __v: 0
    },
    w.prototype.setState = function(e, t) {
        var n;
        n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = b({}, this.state),
        "function" == typeof e && (e = e(b({}, n), this.props)),
        e && b(n, e),
        null != e && this.__v && (t && this.__h.push(t),
        P(this))
    }
    ,
    w.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0,
        e && this.__h.push(e),
        P(this))
    }
    ,
    w.prototype.render = S,
    f = [],
    p = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
    I.__r = 0,
    v = 0;
    var W, z, J, $ = 0, Q = [], Z = s.__b, Y = s.__r, G = s.diffed, X = s.__c, ee = s.unmount;
    function te(e, t) {
        s.__h && s.__h(z, e, $ || t),
        $ = 0;
        var n = z.__H || (z.__H = {
            __: [],
            __h: []
        });
        return e >= n.__.length && n.__.push({}),
        n.__[e]
    }
    function ne(e) {
        return $ = 1,
        re(pe, e)
    }
    function re(e, t, n) {
        var r = te(W++, 2);
        return r.t = e,
        r.__c || (r.__ = [n ? n(t) : pe(void 0, t), function(e) {
            var t = r.t(r.__[0], e);
            r.__[0] !== t && (r.__ = [t, r.__[1]],
            r.__c.setState({}))
        }
        ],
        r.__c = z),
        r.__
    }
    function oe(e, t) {
        var n = te(W++, 3);
        !s.__s && fe(n.__H, t) && (n.__ = e,
        n.__H = t,
        z.__H.__h.push(n))
    }
    function ie(e, t) {
        var n = te(W++, 4);
        !s.__s && fe(n.__H, t) && (n.__ = e,
        n.__H = t,
        z.__h.push(n))
    }
    function ce(e, t) {
        var n = te(W++, 7);
        return fe(n.__H, t) && (n.__ = e(),
        n.__H = t,
        n.__h = e),
        n.__
    }
    function ae() {
        Q.forEach((function(e) {
            if (e.__P)
                try {
                    e.__H.__h.forEach(le),
                    e.__H.__h.forEach(se),
                    e.__H.__h = []
                } catch (t) {
                    e.__H.__h = [],
                    s.__e(t, e.__v)
                }
        }
        )),
        Q = []
    }
    s.__b = function(e) {
        z = null,
        Z && Z(e)
    }
    ,
    s.__r = function(e) {
        Y && Y(e),
        W = 0;
        var t = (z = e.__c).__H;
        t && (t.__h.forEach(le),
        t.__h.forEach(se),
        t.__h = [])
    }
    ,
    s.diffed = function(e) {
        G && G(e);
        var t = e.__c;
        t && t.__H && t.__H.__h.length && (1 !== Q.push(t) && J === s.requestAnimationFrame || ((J = s.requestAnimationFrame) || function(e) {
            var t, n = function() {
                clearTimeout(r),
                ue && cancelAnimationFrame(t),
                setTimeout(e)
            }, r = setTimeout(n, 100);
            ue && (t = requestAnimationFrame(n))
        }
        )(ae)),
        z = void 0
    }
    ,
    s.__c = function(e, t) {
        t.some((function(e) {
            try {
                e.__h.forEach(le),
                e.__h = e.__h.filter((function(e) {
                    return !e.__ || se(e)
                }
                ))
            } catch (n) {
                t.some((function(e) {
                    e.__h && (e.__h = [])
                }
                )),
                t = [],
                s.__e(n, e.__v)
            }
        }
        )),
        X && X(e, t)
    }
    ,
    s.unmount = function(e) {
        ee && ee(e);
        var t = e.__c;
        if (t && t.__H)
            try {
                t.__H.__.forEach(le)
            } catch (e) {
                s.__e(e, t.__v)
            }
    }
    ;
    var ue = "function" == typeof requestAnimationFrame;
    function le(e) {
        var t = z;
        "function" == typeof e.__c && e.__c(),
        z = t
    }
    function se(e) {
        var t = z;
        e.__c = e.__(),
        z = t
    }
    function fe(e, t) {
        return !e || e.length !== t.length || t.some((function(t, n) {
            return t !== e[n]
        }
        ))
    }
    function pe(e, t) {
        return "function" == typeof t ? t(e) : t
    }
    function me(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function ve(e, t) {
        for (var n in e)
            if ("__source" !== n && !(n in t))
                return !0;
        for (var r in t)
            if ("__source" !== r && e[r] !== t[r])
                return !0;
        return !1
    }
    function de(e) {
        this.props = e
    }
    (de.prototype = new w).isPureReactComponent = !0,
    de.prototype.shouldComponentUpdate = function(e, t) {
        return ve(this.props, e) || ve(this.state, t)
    }
    ;
    var he = s.__b;
    s.__b = function(e) {
        e.type && e.type.__f && e.ref && (e.props.ref = e.ref,
        e.ref = null),
        he && he(e)
    }
    ;
    var ye = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
    var be = function(e, t) {
        return null == e ? null : A(A(e).map(t))
    }
      , ge = {
        map: be,
        forEach: be,
        count: function(e) {
            return e ? A(e).length : 0
        },
        only: function(e) {
            var t = A(e);
            if (1 !== t.length)
                throw "Children.only";
            return t[0]
        },
        toArray: A
    }
      , _e = s.__e;
    function Oe() {
        this.__u = 0,
        this.t = null,
        this.__b = null
    }
    function Se(e) {
        var t = e.__.__c;
        return t && t.__e && t.__e(e)
    }
    function we() {
        this.u = null,
        this.o = null
    }
    s.__e = function(e, t, n) {
        if (e.then)
            for (var r, o = t; o = o.__; )
                if ((r = o.__c) && r.__c)
                    return null == t.__e && (t.__e = n.__e,
                    t.__k = n.__k),
                    r.__c(e, t);
        _e(e, t, n)
    }
    ,
    (Oe.prototype = new w).__c = function(e, t) {
        var n = t.__c
          , r = this;
        null == r.t && (r.t = []),
        r.t.push(n);
        var o = Se(r.__v)
          , i = !1
          , c = function() {
            i || (i = !0,
            n.componentWillUnmount = n.__c,
            o ? o(a) : a())
        };
        n.__c = n.componentWillUnmount,
        n.componentWillUnmount = function() {
            c(),
            n.__c && n.__c()
        }
        ;
        var a = function() {
            if (!--r.__u) {
                if (r.state.__e) {
                    var e = r.state.__e;
                    r.__v.__k[0] = function e(t, n, r) {
                        return t && (t.__v = null,
                        t.__k = t.__k && t.__k.map((function(t) {
                            return e(t, n, r)
                        }
                        )),
                        t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d),
                        t.__c.__e = !0,
                        t.__c.__P = r)),
                        t
                    }(e, e.__c.__P, e.__c.__O)
                }
                var t;
                for (r.setState({
                    __e: r.__b = null
                }); t = r.t.pop(); )
                    t.forceUpdate()
            }
        }
          , u = !0 === t.__h;
        r.__u++ || u || r.setState({
            __e: r.__b = r.__v.__k[0]
        }),
        e.then(c, c)
    }
    ,
    Oe.prototype.componentWillUnmount = function() {
        this.t = []
    }
    ,
    Oe.prototype.render = function(e, t) {
        if (this.__b) {
            if (this.__v.__k) {
                var n = document.createElement("div")
                  , r = this.__v.__k[0].__c;
                this.__v.__k[0] = function e(t, n, r) {
                    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(e) {
                        "function" == typeof e.__c && e.__c()
                    }
                    )),
                    t.__c.__H = null),
                    null != (t = me({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n),
                    t.__c = null),
                    t.__k = t.__k && t.__k.map((function(t) {
                        return e(t, n, r)
                    }
                    ))),
                    t
                }(this.__b, n, r.__O = r.__P)
            }
            this.__b = null
        }
        var o = t.__e && _(S, null, e.fallback);
        return o && (o.__h = null),
        [_(S, null, t.__e ? null : e.children), o]
    }
    ;
    var je = function(e, t, n) {
        if (++n[1] === n[0] && e.o.delete(t),
        e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
            for (n = e.u; n; ) {
                for (; n.length > 3; )
                    n.pop()();
                if (n[1] < n[0])
                    break;
                e.u = n = n[2]
            }
    };
    function Ee(e) {
        return this.getChildContext = function() {
            return e.context
        }
        ,
        e.children
    }
    function Pe(e) {
        var t = this
          , n = e.i;
        t.componentWillUnmount = function() {
            B(null, t.l),
            t.l = null,
            t.i = null
        }
        ,
        t.i && t.i !== n && t.componentWillUnmount(),
        e.__v ? (t.l || (t.i = n,
        t.l = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            appendChild: function(e) {
                this.childNodes.push(e),
                t.i.appendChild(e)
            },
            insertBefore: function(e, n) {
                this.childNodes.push(e),
                t.i.appendChild(e)
            },
            removeChild: function(e) {
                this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1),
                t.i.removeChild(e)
            }
        }),
        B(_(Ee, {
            context: t.context
        }, e.__v), t.l)) : t.l && t.componentWillUnmount()
    }
    function Ie(e, t) {
        return _(Pe, {
            __v: e,
            i: t
        })
    }
    (we.prototype = new w).__e = function(e) {
        var t = this
          , n = Se(t.__v)
          , r = t.o.get(e);
        return r[0]++,
        function(o) {
            var i = function() {
                t.props.revealOrder ? (r.push(o),
                je(t, e, r)) : o()
            };
            n ? n(i) : i()
        }
    }
    ,
    we.prototype.render = function(e) {
        this.u = null,
        this.o = new Map;
        var t = A(e.children);
        e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
        for (var n = t.length; n--; )
            this.o.set(t[n], this.u = [1, 0, this.u]);
        return e.children
    }
    ,
    we.prototype.componentDidUpdate = we.prototype.componentDidMount = function() {
        var e = this;
        this.o.forEach((function(t, n) {
            je(e, n, t)
        }
        ))
    }
    ;
    var De = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103
      , ke = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/
      , Ae = function(e) {
        return ("undefined" != typeof Symbol && "symbol" == n(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(e)
    };
    function Ce(e, t, n) {
        return null == t.__k && (t.textContent = ""),
        B(e, t),
        "function" == typeof n && n(),
        e ? e.__c : null
    }
    w.prototype.isReactComponent = {},
    ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
        Object.defineProperty(w.prototype, e, {
            configurable: !0,
            get: function() {
                return this["UNSAFE_" + e]
            },
            set: function(t) {
                Object.defineProperty(this, e, {
                    configurable: !0,
                    writable: !0,
                    value: t
                })
            }
        })
    }
    ));
    var xe = s.event;
    function Ne() {}
    function Te() {
        return this.cancelBubble
    }
    function Re() {
        return this.defaultPrevented
    }
    s.event = function(e) {
        return xe && (e = xe(e)),
        e.persist = Ne,
        e.isPropagationStopped = Te,
        e.isDefaultPrevented = Re,
        e.nativeEvent = e
    }
    ;
    var qe, Le = {
        configurable: !0,
        get: function() {
            return this.class
        }
    }, Me = s.vnode;
    s.vnode = function(e) {
        var t = e.type
          , n = e.props
          , r = n;
        if ("string" == typeof t) {
            for (var o in r = {},
            n) {
                var i = n[o];
                "value" === o && "defaultValue"in n && null == i || ("defaultValue" === o && "value"in n && null == n.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !Ae(n.type) ? o = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : ke.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0),
                r[o] = i)
            }
            "select" == t && r.multiple && Array.isArray(r.value) && (r.value = A(n.children).forEach((function(e) {
                e.props.selected = -1 != r.value.indexOf(e.props.value)
            }
            ))),
            "select" == t && null != r.defaultValue && (r.value = A(n.children).forEach((function(e) {
                e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
            }
            ))),
            e.props = r
        }
        t && n.class != n.className && (Le.enumerable = "className"in n,
        null != n.className && (r.class = n.className),
        Object.defineProperty(r, "className", Le)),
        e.$$typeof = De,
        Me && Me(e)
    }
    ;
    var He = s.__r;
    s.__r = function(e) {
        He && He(e),
        qe = e.__c
    }
    ;
    var Ue = {
        ReactCurrentDispatcher: {
            current: {
                readContext: function(e) {
                    return qe.__n[e.__c].props.value
                }
            }
        }
    };
    "object" == ("undefined" == typeof performance ? "undefined" : n(performance)) && "function" == typeof performance.now && performance.now.bind(performance);
    function Fe(e) {
        return !!e && e.$$typeof === De
    }
    var Be = {
        useState: ne,
        useReducer: re,
        useEffect: oe,
        useLayoutEffect: ie,
        useRef: function(e) {
            return $ = 5,
            ce((function() {
                return {
                    current: e
                }
            }
            ), [])
        },
        useImperativeHandle: function(e, t, n) {
            $ = 6,
            ie((function() {
                "function" == typeof e ? e(t()) : e && (e.current = t())
            }
            ), null == n ? n : n.concat(e))
        },
        useMemo: ce,
        useCallback: function(e, t) {
            return $ = 8,
            ce((function() {
                return e
            }
            ), t)
        },
        useContext: function(e) {
            var t = z.context[e.__c]
              , n = te(W++, 9);
            return n.__c = e,
            t ? (null == n.__ && (n.__ = !0,
            t.sub(z)),
            t.props.value) : e.__
        },
        useDebugValue: function(e, t) {
            s.useDebugValue && s.useDebugValue(t ? t(e) : e)
        },
        version: "16.8.0",
        Children: ge,
        render: Ce,
        hydrate: function(e, t, n) {
            return V(e, t),
            "function" == typeof n && n(),
            e ? e.__c : null
        },
        unmountComponentAtNode: function(e) {
            return !!e.__k && (B(null, e),
            !0)
        },
        createPortal: Ie,
        createElement: _,
        createContext: function(e, t) {
            var n = {
                __c: t = "__cC" + v++,
                __: e,
                Consumer: function(e, t) {
                    return e.children(t)
                },
                Provider: function(e) {
                    var n, r;
                    return this.getChildContext || (n = [],
                    (r = {})[t] = this,
                    this.getChildContext = function() {
                        return r
                    }
                    ,
                    this.shouldComponentUpdate = function(e) {
                        this.props.value !== e.value && n.some(P)
                    }
                    ,
                    this.sub = function(e) {
                        n.push(e);
                        var t = e.componentWillUnmount;
                        e.componentWillUnmount = function() {
                            n.splice(n.indexOf(e), 1),
                            t && t.call(e)
                        }
                    }
                    ),
                    e.children
                }
            };
            return n.Provider.__ = n.Consumer.contextType = n
        },
        createFactory: function(e) {
            return _.bind(null, e)
        },
        cloneElement: function(e) {
            return Fe(e) ? K.apply(null, arguments) : e
        },
        createRef: function() {
            return {
                current: null
            }
        },
        Fragment: S,
        isValidElement: Fe,
        findDOMNode: function(e) {
            return e && (e.base || 1 === e.nodeType && e) || null
        },
        Component: w,
        PureComponent: de,
        memo: function(e, t) {
            function n(e) {
                var n = this.props.ref
                  , r = n == e.ref;
                return !r && n && (n.call ? n(null) : n.current = null),
                t ? !t(this.props, e) || !r : ve(this.props, e)
            }
            function r(t) {
                return this.shouldComponentUpdate = n,
                _(e, t)
            }
            return r.displayName = "Memo(" + (e.displayName || e.name) + ")",
            r.prototype.isReactComponent = !0,
            r.__f = !0,
            r
        },
        forwardRef: function(e) {
            function t(t, r) {
                var o = me({}, t);
                return delete o.ref,
                e(o, (r = t.ref || r) && ("object" != n(r) || "current"in r) ? r : null)
            }
            return t.$$typeof = ye,
            t.render = t,
            t.prototype.isReactComponent = t.__f = !0,
            t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")",
            t
        },
        unstable_batchedUpdates: function(e, t) {
            return e(t)
        },
        StrictMode: S,
        Suspense: Oe,
        SuspenseList: we,
        lazy: function(e) {
            var t, n, r;
            function o(o) {
                if (t || (t = e()).then((function(e) {
                    n = e.default || e
                }
                ), (function(e) {
                    r = e
                }
                )),
                r)
                    throw r;
                if (!n)
                    throw t;
                return _(n, o)
            }
            return o.displayName = "Lazy",
            o.__f = !0,
            o
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ue
    };
    function Ve() {
        return Be.createElement("svg", {
            width: "15",
            height: "15",
            className: "DocSearch-Control-Key-Icon"
        }, Be.createElement("path", {
            d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",
            strokeWidth: "1.2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "square"
        }))
    }
    function Ke() {
        return Be.createElement("svg", {
            width: "20",
            height: "20",
            className: "DocSearch-Search-Icon",
            viewBox: "0 0 20 20",
            "aria-hidden": "true"
        }, Be.createElement("path", {
            d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
            stroke: "currentColor",
            fill: "none",
            fillRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }))
    }
    var We = ["translations"];
    function ze() {
        return ze = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ,
        ze.apply(this, arguments)
    }
    function Je(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n)
                return;
            var r, o, i = [], c = !0, a = !1;
            try {
                for (n = n.call(e); !(c = (r = n.next()).done) && (i.push(r.value),
                !t || i.length !== t); c = !0)
                    ;
            } catch (e) {
                a = !0,
                o = e
            } finally {
                try {
                    c || null == n.return || n.return()
                } finally {
                    if (a)
                        throw o
                }
            }
            return i
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return $e(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return $e(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function $e(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function Qe(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    var Ze = "Ctrl";
    var Ye = Be.forwardRef((function(e, t) {
        var n = e.translations
          , r = void 0 === n ? {} : n
          , o = Qe(e, We)
          , i = r.buttonText
          , c = void 0 === i ? "Search" : i
          , a = r.buttonAriaLabel
          , u = void 0 === a ? "Search" : a
          , l = Je(ne(null), 2)
          , s = l[0]
          , f = l[1];
        return oe((function() {
            "undefined" != typeof navigator && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? f("⌘") : f(Ze))
        }
        ), []),
        Be.createElement("button", ze({
            type: "button",
            className: "DocSearch DocSearch-Button",
            "aria-label": u
        }, o, {
            ref: t
        }), Be.createElement("span", {
            className: "DocSearch-Button-Container"
        }, Be.createElement(Ke, null), Be.createElement("span", {
            className: "DocSearch-Button-Placeholder"
        }, c)), Be.createElement("span", {
            className: "DocSearch-Button-Keys"
        }, null !== s && Be.createElement(Be.Fragment, null, Be.createElement(Ge, {
            reactsToKey: s === Ze ? Ze : "Meta"
        }, s === Ze ? Be.createElement(Ve, null) : s), Be.createElement(Ge, {
            reactsToKey: "k"
        }, "K"))))
    }
    ));
    function Ge(e) {
        var t = e.reactsToKey
          , n = e.children
          , r = Je(ne(!1), 2)
          , o = r[0]
          , i = r[1];
        return oe((function() {
            if (t)
                return window.addEventListener("keydown", e),
                window.addEventListener("keyup", n),
                function() {
                    window.removeEventListener("keydown", e),
                    window.removeEventListener("keyup", n)
                }
                ;
            function e(e) {
                e.key === t && i(!0)
            }
            function n(e) {
                e.key !== t && "Meta" !== e.key || i(!1)
            }
        }
        ), [t]),
        Be.createElement("kbd", {
            className: o ? "DocSearch-Button-Key DocSearch-Button-Key--pressed" : "DocSearch-Button-Key"
        }, n)
    }
    function Xe(e, t) {
        var n = void 0;
        return function() {
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                o[i] = arguments[i];
            n && clearTimeout(n),
            n = setTimeout((function() {
                return e.apply(void 0, o)
            }
            ), t)
        }
    }
    function et(e) {
        return e.reduce((function(e, t) {
            return e.concat(t)
        }
        ), [])
    }
    var tt = 0;
    function nt(e) {
        return 0 === e.collections.length ? 0 : e.collections.reduce((function(e, t) {
            return e + t.items.length
        }
        ), 0)
    }
    function rt(e) {
        return e !== Object(e)
    }
    function ot(e, t) {
        if (e === t)
            return !0;
        if (rt(e) || rt(t) || "function" == typeof e || "function" == typeof t)
            return e === t;
        if (Object.keys(e).length !== Object.keys(t).length)
            return !1;
        for (var n = 0, r = Object.keys(e); n < r.length; n++) {
            var o = r[n];
            if (!(o in t))
                return !1;
            if (!ot(e[o], t[o]))
                return !1
        }
        return !0
    }
    var it = function() {};
    var ct = [{
        segment: "autocomplete-core",
        version: "1.9.3"
    }];
    function at(e) {
        var t = e.item
          , n = e.items;
        return {
            index: t.__autocomplete_indexName,
            items: [t],
            positions: [1 + n.findIndex((function(e) {
                return e.objectID === t.objectID
            }
            ))],
            queryID: t.__autocomplete_queryID,
            algoliaSource: ["autocomplete"]
        }
    }
    function ut(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, o, i, c, a = [], u = !0, l = !1;
                try {
                    if (i = (n = n.call(e)).next,
                    0 === t) {
                        if (Object(n) !== n)
                            return;
                        u = !1
                    } else
                        for (; !(u = (r = i.call(n)).done) && (a.push(r.value),
                        a.length !== t); u = !0)
                            ;
                } catch (e) {
                    l = !0,
                    o = e
                } finally {
                    try {
                        if (!u && null != n.return && (c = n.return(),
                        Object(c) !== c))
                            return
                    } finally {
                        if (l)
                            throw o
                    }
                }
                return a
            }
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return lt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return lt(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function lt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    var st = ["items"]
      , ft = ["items"];
    function pt(e) {
        return pt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        pt(e)
    }
    function mt(e) {
        return function(e) {
            if (Array.isArray(e))
                return vt(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return vt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return vt(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function vt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function dt(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    function ht(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function yt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ht(Object(n), !0).forEach((function(t) {
                bt(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ht(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function bt(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" !== pt(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== pt(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === pt(t) ? t : String(t)
        }(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function gt(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, n = [], r = 0; r < e.objectIDs.length; r += t)
            n.push(yt(yt({}, e), {}, {
                objectIDs: e.objectIDs.slice(r, r + t)
            }));
        return n
    }
    function _t(e) {
        return e.map((function(e) {
            var t = e.items
              , n = dt(e, st);
            return yt(yt({}, n), {}, {
                objectIDs: (null == t ? void 0 : t.map((function(e) {
                    return e.objectID
                }
                ))) || n.objectIDs
            })
        }
        ))
    }
    function Ot(e) {
        var t, n, r, o = (t = ut((e.version || "").split(".").map(Number), 2),
        n = t[0],
        r = t[1],
        n >= 3 || 2 === n && r >= 4 || 1 === n && r >= 10);
        function i(t, n, r) {
            if (o && void 0 !== r) {
                var i = r[0].__autocomplete_algoliaCredentials
                  , c = {
                    "X-Algolia-Application-Id": i.appId,
                    "X-Algolia-API-Key": i.apiKey
                };
                e.apply(void 0, [t].concat(mt(n), [{
                    headers: c
                }]))
            } else
                e.apply(void 0, [t].concat(mt(n)))
        }
        return {
            init: function(t, n) {
                e("init", {
                    appId: t,
                    apiKey: n
                })
            },
            setUserToken: function(t) {
                e("setUserToken", t)
            },
            clickedObjectIDsAfterSearch: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                t.length > 0 && i("clickedObjectIDsAfterSearch", _t(t), t[0].items)
            },
            clickedObjectIDs: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                t.length > 0 && i("clickedObjectIDs", _t(t), t[0].items)
            },
            clickedFilters: function() {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                n.length > 0 && e.apply(void 0, ["clickedFilters"].concat(n))
            },
            convertedObjectIDsAfterSearch: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                t.length > 0 && i("convertedObjectIDsAfterSearch", _t(t), t[0].items)
            },
            convertedObjectIDs: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                t.length > 0 && i("convertedObjectIDs", _t(t), t[0].items)
            },
            convertedFilters: function() {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                n.length > 0 && e.apply(void 0, ["convertedFilters"].concat(n))
            },
            viewedObjectIDs: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                t.length > 0 && t.reduce((function(e, t) {
                    var n = t.items
                      , r = dt(t, ft);
                    return [].concat(mt(e), mt(gt(yt(yt({}, r), {}, {
                        objectIDs: (null == n ? void 0 : n.map((function(e) {
                            return e.objectID
                        }
                        ))) || r.objectIDs
                    })).map((function(e) {
                        return {
                            items: n,
                            payload: e
                        }
                    }
                    ))))
                }
                ), []).forEach((function(e) {
                    var t = e.items;
                    return i("viewedObjectIDs", [e.payload], t)
                }
                ))
            },
            viewedFilters: function() {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                n.length > 0 && e.apply(void 0, ["viewedFilters"].concat(n))
            }
        }
    }
    function St(e) {
        var t = e.items.reduce((function(e, t) {
            var n;
            return e[t.__autocomplete_indexName] = (null !== (n = e[t.__autocomplete_indexName]) && void 0 !== n ? n : []).concat(t),
            e
        }
        ), {});
        return Object.keys(t).map((function(e) {
            return {
                index: e,
                items: t[e],
                algoliaSource: ["autocomplete"]
            }
        }
        ))
    }
    function wt(e) {
        return e.objectID && e.__autocomplete_indexName && e.__autocomplete_queryID
    }
    function jt(e) {
        return jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        jt(e)
    }
    function Et(e) {
        return function(e) {
            if (Array.isArray(e))
                return Pt(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return Pt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return Pt(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Pt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function It(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Dt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? It(Object(n), !0).forEach((function(t) {
                kt(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : It(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function kt(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" !== jt(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== jt(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === jt(t) ? t : String(t)
        }(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var At = "2.6.0"
      , Ct = "https://cdn.jsdelivr.net/npm/search-insights@".concat(At, "/dist/search-insights.min.js")
      , xt = Xe((function(e) {
        var t = e.onItemsChange
          , n = e.items
          , r = e.insights
          , o = e.state;
        t({
            insights: r,
            insightsEvents: St({
                items: n
            }).map((function(e) {
                return Dt({
                    eventName: "Items Viewed"
                }, e)
            }
            )),
            state: o
        })
    }
    ), 400);
    function Nt(e) {
        var t = function(e) {
            return Dt({
                onItemsChange: function(e) {
                    var t = e.insights
                      , n = e.insightsEvents;
                    t.viewedObjectIDs.apply(t, Et(n.map((function(e) {
                        return Dt(Dt({}, e), {}, {
                            algoliaSource: [].concat(Et(e.algoliaSource || []), ["autocomplete-internal"])
                        })
                    }
                    ))))
                },
                onSelect: function(e) {
                    var t = e.insights
                      , n = e.insightsEvents;
                    t.clickedObjectIDsAfterSearch.apply(t, Et(n.map((function(e) {
                        return Dt(Dt({}, e), {}, {
                            algoliaSource: [].concat(Et(e.algoliaSource || []), ["autocomplete-internal"])
                        })
                    }
                    ))))
                },
                onActive: it
            }, e)
        }(e)
          , n = t.insightsClient
          , r = t.onItemsChange
          , o = t.onSelect
          , i = t.onActive
          , c = n;
        n || function(e) {
            if ("undefined" != typeof window)
                e({
                    window: window
                })
        }((function(e) {
            var t = e.window
              , n = t.AlgoliaAnalyticsObject || "aa";
            "string" == typeof n && (c = t[n]),
            c || (t.AlgoliaAnalyticsObject = n,
            t[n] || (t[n] = function() {
                t[n].queue || (t[n].queue = []);
                for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
                    r[o] = arguments[o];
                t[n].queue.push(r)
            }
            ),
            t[n].version = At,
            c = t[n],
            function(e) {
                var t = "[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";
                try {
                    var n = e.document.createElement("script");
                    n.async = !0,
                    n.src = Ct,
                    n.onerror = function() {
                        console.error(t)
                    }
                    ,
                    document.body.appendChild(n)
                } catch (e) {
                    console.error(t)
                }
            }(t))
        }
        ));
        var a = Ot(c)
          , u = {
            current: []
        }
          , l = Xe((function(e) {
            var t = e.state;
            if (t.isOpen) {
                var n = t.collections.reduce((function(e, t) {
                    return [].concat(Et(e), Et(t.items))
                }
                ), []).filter(wt);
                ot(u.current.map((function(e) {
                    return e.objectID
                }
                )), n.map((function(e) {
                    return e.objectID
                }
                ))) || (u.current = n,
                n.length > 0 && xt({
                    onItemsChange: r,
                    items: n,
                    insights: a,
                    state: t
                }))
            }
        }
        ), 0);
        return {
            name: "aa.algoliaInsightsPlugin",
            subscribe: function(e) {
                var t = e.setContext
                  , n = e.onSelect
                  , r = e.onActive;
                c("addAlgoliaAgent", "insights-plugin"),
                t({
                    algoliaInsightsPlugin: {
                        __algoliaSearchParameters: {
                            clickAnalytics: !0
                        },
                        insights: a
                    }
                }),
                n((function(e) {
                    var t = e.item
                      , n = e.state
                      , r = e.event;
                    wt(t) && o({
                        state: n,
                        event: r,
                        insights: a,
                        item: t,
                        insightsEvents: [Dt({
                            eventName: "Item Selected"
                        }, at({
                            item: t,
                            items: u.current
                        }))]
                    })
                }
                )),
                r((function(e) {
                    var t = e.item
                      , n = e.state
                      , r = e.event;
                    wt(t) && i({
                        state: n,
                        event: r,
                        insights: a,
                        item: t,
                        insightsEvents: [Dt({
                            eventName: "Item Active"
                        }, at({
                            item: t,
                            items: u.current
                        }))]
                    })
                }
                ))
            },
            onStateChange: function(e) {
                var t = e.state;
                l({
                    state: t
                })
            },
            __autocomplete_pluginOptions: e
        }
    }
    function Tt(e, t) {
        var n = t;
        return {
            then: function(t, r) {
                return Tt(e.then(qt(t, n, e), qt(r, n, e)), n)
            },
            catch: function(t) {
                return Tt(e.catch(qt(t, n, e)), n)
            },
            finally: function(t) {
                return t && n.onCancelList.push(t),
                Tt(e.finally(qt(t && function() {
                    return n.onCancelList = [],
                    t()
                }
                , n, e)), n)
            },
            cancel: function() {
                n.isCanceled = !0;
                var e = n.onCancelList;
                n.onCancelList = [],
                e.forEach((function(e) {
                    e()
                }
                ))
            },
            isCanceled: function() {
                return !0 === n.isCanceled
            }
        }
    }
    function Rt(e) {
        return Tt(e, {
            isCanceled: !1,
            onCancelList: []
        })
    }
    function qt(e, t, n) {
        return e ? function(n) {
            return t.isCanceled ? n : e(n)
        }
        : n
    }
    function Lt(e, t, n, r) {
        if (!n)
            return null;
        if (e < 0 && (null === t || null !== r && 0 === t))
            return n + e;
        var o = (null === t ? -1 : t) + e;
        return o <= -1 || o >= n ? null === r ? null : 0 : o
    }
    function Mt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Ht(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Mt(Object(n), !0).forEach((function(t) {
                Ut(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mt(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function Ut(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" !== Ft(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Ft(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Ft(t) ? t : String(t)
        }(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Ft(e) {
        return Ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        Ft(e)
    }
    function Bt(e) {
        var t = function(e) {
            var t = e.collections.map((function(e) {
                return e.items.length
            }
            )).reduce((function(e, t, n) {
                var r = (e[n - 1] || 0) + t;
                return e.push(r),
                e
            }
            ), []).reduce((function(t, n) {
                return n <= e.activeItemId ? t + 1 : t
            }
            ), 0);
            return e.collections[t]
        }(e);
        if (!t)
            return null;
        var n = t.items[function(e) {
            for (var t = e.state, n = e.collection, r = !1, o = 0, i = 0; !1 === r; ) {
                var c = t.collections[o];
                if (c === n) {
                    r = !0;
                    break
                }
                i += c.items.length,
                o++
            }
            return t.activeItemId - i
        }({
            state: e,
            collection: t
        })]
          , r = t.source;
        return {
            item: n,
            itemInputValue: r.getItemInputValue({
                item: n,
                state: e
            }),
            itemUrl: r.getItemUrl({
                item: n,
                state: e
            }),
            source: r
        }
    }
    var Vt = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
    function Kt(e) {
        return Kt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        Kt(e)
    }
    function Wt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function zt(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" !== Kt(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Kt(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Kt(t) ? t : String(t)
        }(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Jt(e, t, n) {
        var r, o = t.initialState;
        return {
            getState: function() {
                return o
            },
            dispatch: function(r, i) {
                var c = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Wt(Object(n), !0).forEach((function(t) {
                            zt(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wt(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({}, o);
                o = e(o, {
                    type: r,
                    props: t,
                    payload: i
                }),
                n({
                    state: o,
                    prevState: c
                })
            },
            pendingRequests: (r = [],
            {
                add: function(e) {
                    return r.push(e),
                    e.finally((function() {
                        r = r.filter((function(t) {
                            return t !== e
                        }
                        ))
                    }
                    ))
                },
                cancelAll: function() {
                    r.forEach((function(e) {
                        return e.cancel()
                    }
                    ))
                },
                isEmpty: function() {
                    return 0 === r.length
                }
            })
        }
    }
    function $t(e) {
        return $t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        $t(e)
    }
    function Qt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Zt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Qt(Object(n), !0).forEach((function(t) {
                Yt(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qt(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function Yt(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" !== $t(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== $t(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === $t(t) ? t : String(t)
        }(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Gt(e) {
        return Gt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        Gt(e)
    }
    function Xt(e) {
        return function(e) {
            if (Array.isArray(e))
                return en(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return en(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return en(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function en(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function tn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function nn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? tn(Object(n), !0).forEach((function(t) {
                rn(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tn(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function rn(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" !== Gt(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Gt(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Gt(t) ? t : String(t)
        }(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function on(e, t) {
        var n, r = "undefined" != typeof window ? window : {}, o = e.plugins || [];
        return nn(nn({
            debug: !1,
            openOnFocus: !1,
            placeholder: "",
            autoFocus: !1,
            defaultActiveItemId: null,
            stallThreshold: 300,
            insights: !1,
            environment: r,
            shouldPanelOpen: function(e) {
                return nt(e.state) > 0
            },
            reshape: function(e) {
                return e.sources
            }
        }, e), {}, {
            id: null !== (n = e.id) && void 0 !== n ? n : "autocomplete-".concat(tt++),
            plugins: o,
            initialState: nn({
                activeItemId: null,
                query: "",
                completion: null,
                collections: [],
                isOpen: !1,
                status: "idle",
                context: {}
            }, e.initialState),
            onStateChange: function(t) {
                var n;
                null === (n = e.onStateChange) || void 0 === n || n.call(e, t),
                o.forEach((function(e) {
                    var n;
                    return null === (n = e.onStateChange) || void 0 === n ? void 0 : n.call(e, t)
                }
                ))
            },
            onSubmit: function(t) {
                var n;
                null === (n = e.onSubmit) || void 0 === n || n.call(e, t),
                o.forEach((function(e) {
                    var n;
                    return null === (n = e.onSubmit) || void 0 === n ? void 0 : n.call(e, t)
                }
                ))
            },
            onReset: function(t) {
                var n;
                null === (n = e.onReset) || void 0 === n || n.call(e, t),
                o.forEach((function(e) {
                    var n;
                    return null === (n = e.onReset) || void 0 === n ? void 0 : n.call(e, t)
                }
                ))
            },
            getSources: function(n) {
                return Promise.all([].concat(Xt(o.map((function(e) {
                    return e.getSources
                }
                ))), [e.getSources]).filter(Boolean).map((function(e) {
                    return function(e, t) {
                        var n = [];
                        return Promise.resolve(e(t)).then((function(e) {
                            return Promise.all(e.filter((function(e) {
                                return Boolean(e)
                            }
                            )).map((function(e) {
                                if (e.sourceId,
                                n.includes(e.sourceId))
                                    throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e.sourceId), " is not unique."));
                                n.push(e.sourceId);
                                var t = {
                                    getItemInputValue: function(e) {
                                        return e.state.query
                                    },
                                    getItemUrl: function() {},
                                    onSelect: function(e) {
                                        (0,
                                        e.setIsOpen)(!1)
                                    },
                                    onActive: it,
                                    onResolve: it
                                };
                                Object.keys(t).forEach((function(e) {
                                    t[e].__default = !0
                                }
                                ));
                                var r = Ht(Ht({}, t), e);
                                return Promise.resolve(r)
                            }
                            )))
                        }
                        ))
                    }(e, n)
                }
                ))).then((function(e) {
                    return et(e)
                }
                )).then((function(e) {
                    return e.map((function(e) {
                        return nn(nn({}, e), {}, {
                            onSelect: function(n) {
                                e.onSelect(n),
                                t.forEach((function(e) {
                                    var t;
                                    return null === (t = e.onSelect) || void 0 === t ? void 0 : t.call(e, n)
                                }
                                ))
                            },
                            onActive: function(n) {
                                e.onActive(n),
                                t.forEach((function(e) {
                                    var t;
                                    return null === (t = e.onActive) || void 0 === t ? void 0 : t.call(e, n)
                                }
                                ))
                            },
                            onResolve: function(n) {
                                e.onResolve(n),
                                t.forEach((function(e) {
                                    var t;
                                    return null === (t = e.onResolve) || void 0 === t ? void 0 : t.call(e, n)
                                }
                                ))
                            }
                        })
                    }
                    ))
                }
                ))
            },
            navigator: nn({
                navigate: function(e) {
                    var t = e.itemUrl;
                    r.location.assign(t)
                },
                navigateNewTab: function(e) {
                    var t = e.itemUrl
                      , n = r.open(t, "_blank", "noopener");
                    null == n || n.focus()
                },
                navigateNewWindow: function(e) {
                    var t = e.itemUrl;
                    r.open(t, "_blank", "noopener")
                }
            }, e.navigator)
        })
    }
    function cn(e) {
        return cn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        cn(e)
    }
    function an(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function un(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? an(Object(n), !0).forEach((function(t) {
                ln(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : an(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function ln(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" !== cn(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== cn(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === cn(t) ? t : String(t)
        }(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function sn(e) {
        return sn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        sn(e)
    }
    function fn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function pn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? fn(Object(n), !0).forEach((function(t) {
                mn(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fn(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function mn(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" !== sn(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== sn(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === sn(t) ? t : String(t)
        }(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function vn(e) {
        return function(e) {
            if (Array.isArray(e))
                return dn(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return dn(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return dn(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function dn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function hn(e) {
        return Boolean(e.execute)
    }
    function yn(e, t, n) {
        if (o = e,
        Boolean(null == o ? void 0 : o.execute)) {
            var r = "algolia" === e.requesterId ? Object.assign.apply(Object, [{}].concat(vn(Object.keys(n.context).map((function(e) {
                var t;
                return null === (t = n.context[e]) || void 0 === t ? void 0 : t.__algoliaSearchParameters
            }
            ))))) : {};
            return pn(pn({}, e), {}, {
                requests: e.queries.map((function(n) {
                    return {
                        query: "algolia" === e.requesterId ? pn(pn({}, n), {}, {
                            params: pn(pn({}, r), n.params)
                        }) : n,
                        sourceId: t,
                        transformResponse: e.transformResponse
                    }
                }
                ))
            })
        }
        var o;
        return {
            items: e,
            sourceId: t
        }
    }
    function bn(e) {
        var t = e.reduce((function(e, t) {
            if (!hn(t))
                return e.push(t),
                e;
            var n = t.searchClient
              , r = t.execute
              , o = t.requesterId
              , i = t.requests
              , c = e.find((function(e) {
                return hn(t) && hn(e) && e.searchClient === n && Boolean(o) && e.requesterId === o
            }
            ));
            if (c) {
                var a;
                (a = c.items).push.apply(a, vn(i))
            } else {
                var u = {
                    execute: r,
                    requesterId: o,
                    items: i,
                    searchClient: n
                };
                e.push(u)
            }
            return e
        }
        ), []).map((function(e) {
            if (!hn(e))
                return Promise.resolve(e);
            var t = e
              , n = t.execute
              , r = t.items;
            return n({
                searchClient: t.searchClient,
                requests: r
            })
        }
        ));
        return Promise.all(t).then((function(e) {
            return et(e)
        }
        ))
    }
    function gn(e, t, n) {
        return t.map((function(t) {
            var r, o = e.filter((function(e) {
                return e.sourceId === t.sourceId
            }
            )), i = o.map((function(e) {
                return e.items
            }
            )), c = o[0].transformResponse, a = c ? c({
                results: r = i,
                hits: r.map((function(e) {
                    return e.hits
                }
                )).filter(Boolean),
                facetHits: r.map((function(e) {
                    var t;
                    return null === (t = e.facetHits) || void 0 === t ? void 0 : t.map((function(e) {
                        return {
                            label: e.value,
                            count: e.count,
                            _highlightResult: {
                                label: {
                                    value: e.highlighted
                                }
                            }
                        }
                    }
                    ))
                }
                )).filter(Boolean)
            }) : i;
            return t.onResolve({
                source: t,
                results: i,
                items: a,
                state: n.getState()
            }),
            a.every(Boolean),
            'The `getItems` function from source "'.concat(t.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"),
            {
                source: t,
                items: a
            }
        }
        ))
    }
    function _n(e) {
        return _n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        _n(e)
    }
    var On = ["event", "nextState", "props", "query", "refresh", "store"];
    function Sn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function wn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Sn(Object(n), !0).forEach((function(t) {
                jn(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sn(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function jn(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" !== _n(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== _n(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === _n(t) ? t : String(t)
        }(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function En(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    var Pn, In, Dn, kn = null, An = (Pn = -1,
    In = -1,
    Dn = void 0,
    function(e) {
        var t = ++Pn;
        return Promise.resolve(e).then((function(e) {
            return Dn && t < In ? Dn : (In = t,
            Dn = e,
            e)
        }
        ))
    }
    );
    function Cn(e) {
        var t = e.event
          , n = e.nextState
          , r = void 0 === n ? {} : n
          , o = e.props
          , i = e.query
          , c = e.refresh
          , a = e.store
          , u = En(e, On);
        kn && o.environment.clearTimeout(kn);
        var l = u.setCollections
          , s = u.setIsOpen
          , f = u.setQuery
          , p = u.setActiveItemId
          , m = u.setStatus;
        if (f(i),
        p(o.defaultActiveItemId),
        !i && !1 === o.openOnFocus) {
            var v, d = a.getState().collections.map((function(e) {
                return wn(wn({}, e), {}, {
                    items: []
                })
            }
            ));
            m("idle"),
            l(d),
            s(null !== (v = r.isOpen) && void 0 !== v ? v : o.shouldPanelOpen({
                state: a.getState()
            }));
            var h = Rt(An(d).then((function() {
                return Promise.resolve()
            }
            )));
            return a.pendingRequests.add(h)
        }
        m("loading"),
        kn = o.environment.setTimeout((function() {
            m("stalled")
        }
        ), o.stallThreshold);
        var y = Rt(An(o.getSources(wn({
            query: i,
            refresh: c,
            state: a.getState()
        }, u)).then((function(e) {
            return Promise.all(e.map((function(e) {
                return Promise.resolve(e.getItems(wn({
                    query: i,
                    refresh: c,
                    state: a.getState()
                }, u))).then((function(t) {
                    return yn(t, e.sourceId, a.getState())
                }
                ))
            }
            ))).then(bn).then((function(t) {
                return gn(t, e, a)
            }
            )).then((function(e) {
                return function(e) {
                    var t = e.collections
                      , n = e.props
                      , r = e.state
                      , o = t.reduce((function(e, t) {
                        return un(un({}, e), {}, ln({}, t.source.sourceId, un(un({}, t.source), {}, {
                            getItems: function() {
                                return et(t.items)
                            }
                        })))
                    }
                    ), {})
                      , i = n.plugins.reduce((function(e, t) {
                        return t.reshape ? t.reshape(e) : e
                    }
                    ), {
                        sourcesBySourceId: o,
                        state: r
                    }).sourcesBySourceId;
                    return et(n.reshape({
                        sourcesBySourceId: i,
                        sources: Object.values(i),
                        state: r
                    })).filter(Boolean).map((function(e) {
                        return {
                            source: e,
                            items: e.getItems()
                        }
                    }
                    ))
                }({
                    collections: e,
                    props: o,
                    state: a.getState()
                })
            }
            ))
        }
        )))).then((function(e) {
            var n;
            m("idle"),
            l(e);
            var f = o.shouldPanelOpen({
                state: a.getState()
            });
            s(null !== (n = r.isOpen) && void 0 !== n ? n : o.openOnFocus && !i && f || f);
            var p = Bt(a.getState());
            if (null !== a.getState().activeItemId && p) {
                var v = p.item
                  , d = p.itemInputValue
                  , h = p.itemUrl
                  , y = p.source;
                y.onActive(wn({
                    event: t,
                    item: v,
                    itemInputValue: d,
                    itemUrl: h,
                    refresh: c,
                    source: y,
                    state: a.getState()
                }, u))
            }
        }
        )).finally((function() {
            m("idle"),
            kn && o.environment.clearTimeout(kn)
        }
        ));
        return a.pendingRequests.add(y)
    }
    function xn(e) {
        return xn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        xn(e)
    }
    var Nn = ["event", "props", "refresh", "store"];
    function Tn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Rn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Tn(Object(n), !0).forEach((function(t) {
                qn(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tn(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function qn(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" !== xn(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== xn(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === xn(t) ? t : String(t)
        }(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Ln(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    function Mn(e) {
        return Mn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        Mn(e)
    }
    var Hn = ["props", "refresh", "store"]
      , Un = ["inputElement", "formElement", "panelElement"]
      , Fn = ["inputElement"]
      , Bn = ["inputElement", "maxLength"]
      , Vn = ["sourceIndex"]
      , Kn = ["sourceIndex"]
      , Wn = ["item", "source", "sourceIndex"];
    function zn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Jn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? zn(Object(n), !0).forEach((function(t) {
                $n(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zn(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function $n(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" !== Mn(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Mn(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Mn(t) ? t : String(t)
        }(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Qn(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    function Zn(e) {
        var t = e.props
          , n = e.refresh
          , r = e.store
          , o = Qn(e, Hn)
          , i = function(e, t) {
            return void 0 !== t ? "".concat(e, "-").concat(t) : e
        };
        return {
            getEnvironmentProps: function(e) {
                var n = e.inputElement
                  , o = e.formElement
                  , i = e.panelElement;
                function c(e) {
                    !r.getState().isOpen && r.pendingRequests.isEmpty() || e.target === n || !1 === [o, i].some((function(t) {
                        return n = t,
                        r = e.target,
                        n === r || n.contains(r);
                        var n, r
                    }
                    )) && (r.dispatch("blur", null),
                    t.debug || r.pendingRequests.cancelAll())
                }
                return Jn({
                    onTouchStart: c,
                    onMouseDown: c,
                    onTouchMove: function(e) {
                        !1 !== r.getState().isOpen && n === t.environment.document.activeElement && e.target !== n && n.blur()
                    }
                }, Qn(e, Un))
            },
            getRootProps: function(e) {
                return Jn({
                    role: "combobox",
                    "aria-expanded": r.getState().isOpen,
                    "aria-haspopup": "listbox",
                    "aria-owns": r.getState().isOpen ? "".concat(t.id, "-list") : void 0,
                    "aria-labelledby": "".concat(t.id, "-label")
                }, e)
            },
            getFormProps: function(e) {
                e.inputElement;
                return Jn({
                    action: "",
                    noValidate: !0,
                    role: "search",
                    onSubmit: function(i) {
                        var c;
                        i.preventDefault(),
                        t.onSubmit(Jn({
                            event: i,
                            refresh: n,
                            state: r.getState()
                        }, o)),
                        r.dispatch("submit", null),
                        null === (c = e.inputElement) || void 0 === c || c.blur()
                    },
                    onReset: function(i) {
                        var c;
                        i.preventDefault(),
                        t.onReset(Jn({
                            event: i,
                            refresh: n,
                            state: r.getState()
                        }, o)),
                        r.dispatch("reset", null),
                        null === (c = e.inputElement) || void 0 === c || c.focus()
                    }
                }, Qn(e, Fn))
            },
            getLabelProps: function(e) {
                var n = e || {}
                  , r = n.sourceIndex
                  , o = Qn(n, Vn);
                return Jn({
                    htmlFor: "".concat(i(t.id, r), "-input"),
                    id: "".concat(i(t.id, r), "-label")
                }, o)
            },
            getInputProps: function(e) {
                var i;
                function c(e) {
                    (t.openOnFocus || Boolean(r.getState().query)) && Cn(Jn({
                        event: e,
                        props: t,
                        query: r.getState().completion || r.getState().query,
                        refresh: n,
                        store: r
                    }, o)),
                    r.dispatch("focus", null)
                }
                var a = e || {}
                  , u = (a.inputElement,
                a.maxLength)
                  , l = void 0 === u ? 512 : u
                  , s = Qn(a, Bn)
                  , f = Bt(r.getState())
                  , p = function(e) {
                    return Boolean(e && e.match(Vt))
                }((null === (i = t.environment.navigator) || void 0 === i ? void 0 : i.userAgent) || "")
                  , m = null != f && f.itemUrl && !p ? "go" : "search";
                return Jn({
                    "aria-autocomplete": "both",
                    "aria-activedescendant": r.getState().isOpen && null !== r.getState().activeItemId ? "".concat(t.id, "-item-").concat(r.getState().activeItemId) : void 0,
                    "aria-controls": r.getState().isOpen ? "".concat(t.id, "-list") : void 0,
                    "aria-labelledby": "".concat(t.id, "-label"),
                    value: r.getState().completion || r.getState().query,
                    id: "".concat(t.id, "-input"),
                    autoComplete: "off",
                    autoCorrect: "off",
                    autoCapitalize: "off",
                    enterKeyHint: m,
                    spellCheck: "false",
                    autoFocus: t.autoFocus,
                    placeholder: t.placeholder,
                    maxLength: l,
                    type: "search",
                    onChange: function(e) {
                        Cn(Jn({
                            event: e,
                            props: t,
                            query: e.currentTarget.value.slice(0, l),
                            refresh: n,
                            store: r
                        }, o))
                    },
                    onKeyDown: function(e) {
                        !function(e) {
                            var t = e.event
                              , n = e.props
                              , r = e.refresh
                              , o = e.store
                              , i = Ln(e, Nn);
                            if ("ArrowUp" === t.key || "ArrowDown" === t.key) {
                                var c = function() {
                                    var e = n.environment.document.getElementById("".concat(n.id, "-item-").concat(o.getState().activeItemId));
                                    e && (e.scrollIntoViewIfNeeded ? e.scrollIntoViewIfNeeded(!1) : e.scrollIntoView(!1))
                                }
                                  , a = function() {
                                    var e = Bt(o.getState());
                                    if (null !== o.getState().activeItemId && e) {
                                        var n = e.item
                                          , c = e.itemInputValue
                                          , a = e.itemUrl
                                          , u = e.source;
                                        u.onActive(Rn({
                                            event: t,
                                            item: n,
                                            itemInputValue: c,
                                            itemUrl: a,
                                            refresh: r,
                                            source: u,
                                            state: o.getState()
                                        }, i))
                                    }
                                };
                                t.preventDefault(),
                                !1 === o.getState().isOpen && (n.openOnFocus || Boolean(o.getState().query)) ? Cn(Rn({
                                    event: t,
                                    props: n,
                                    query: o.getState().query,
                                    refresh: r,
                                    store: o
                                }, i)).then((function() {
                                    o.dispatch(t.key, {
                                        nextActiveItemId: n.defaultActiveItemId
                                    }),
                                    a(),
                                    setTimeout(c, 0)
                                }
                                )) : (o.dispatch(t.key, {}),
                                a(),
                                c())
                            } else if ("Escape" === t.key)
                                t.preventDefault(),
                                o.dispatch(t.key, null),
                                o.pendingRequests.cancelAll();
                            else if ("Tab" === t.key)
                                o.dispatch("blur", null),
                                o.pendingRequests.cancelAll();
                            else if ("Enter" === t.key) {
                                if (null === o.getState().activeItemId || o.getState().collections.every((function(e) {
                                    return 0 === e.items.length
                                }
                                )))
                                    return void (n.debug || o.pendingRequests.cancelAll());
                                t.preventDefault();
                                var u = Bt(o.getState())
                                  , l = u.item
                                  , s = u.itemInputValue
                                  , f = u.itemUrl
                                  , p = u.source;
                                if (t.metaKey || t.ctrlKey)
                                    void 0 !== f && (p.onSelect(Rn({
                                        event: t,
                                        item: l,
                                        itemInputValue: s,
                                        itemUrl: f,
                                        refresh: r,
                                        source: p,
                                        state: o.getState()
                                    }, i)),
                                    n.navigator.navigateNewTab({
                                        itemUrl: f,
                                        item: l,
                                        state: o.getState()
                                    }));
                                else if (t.shiftKey)
                                    void 0 !== f && (p.onSelect(Rn({
                                        event: t,
                                        item: l,
                                        itemInputValue: s,
                                        itemUrl: f,
                                        refresh: r,
                                        source: p,
                                        state: o.getState()
                                    }, i)),
                                    n.navigator.navigateNewWindow({
                                        itemUrl: f,
                                        item: l,
                                        state: o.getState()
                                    }));
                                else if (t.altKey)
                                    ;
                                else {
                                    if (void 0 !== f)
                                        return p.onSelect(Rn({
                                            event: t,
                                            item: l,
                                            itemInputValue: s,
                                            itemUrl: f,
                                            refresh: r,
                                            source: p,
                                            state: o.getState()
                                        }, i)),
                                        void n.navigator.navigate({
                                            itemUrl: f,
                                            item: l,
                                            state: o.getState()
                                        });
                                    Cn(Rn({
                                        event: t,
                                        nextState: {
                                            isOpen: !1
                                        },
                                        props: n,
                                        query: s,
                                        refresh: r,
                                        store: o
                                    }, i)).then((function() {
                                        p.onSelect(Rn({
                                            event: t,
                                            item: l,
                                            itemInputValue: s,
                                            itemUrl: f,
                                            refresh: r,
                                            source: p,
                                            state: o.getState()
                                        }, i))
                                    }
                                    ))
                                }
                            }
                        }(Jn({
                            event: e,
                            props: t,
                            refresh: n,
                            store: r
                        }, o))
                    },
                    onFocus: c,
                    onBlur: it,
                    onClick: function(n) {
                        e.inputElement !== t.environment.document.activeElement || r.getState().isOpen || c(n)
                    }
                }, s)
            },
            getPanelProps: function(e) {
                return Jn({
                    onMouseDown: function(e) {
                        e.preventDefault()
                    },
                    onMouseLeave: function() {
                        r.dispatch("mouseleave", null)
                    }
                }, e)
            },
            getListProps: function(e) {
                var n = e || {}
                  , r = n.sourceIndex
                  , o = Qn(n, Kn);
                return Jn({
                    role: "listbox",
                    "aria-labelledby": "".concat(i(t.id, r), "-label"),
                    id: "".concat(i(t.id, r), "-list")
                }, o)
            },
            getItemProps: function(e) {
                var c = e.item
                  , a = e.source
                  , u = e.sourceIndex
                  , l = Qn(e, Wn);
                return Jn({
                    id: "".concat(i(t.id, u), "-item-").concat(c.__autocomplete_id),
                    role: "option",
                    "aria-selected": r.getState().activeItemId === c.__autocomplete_id,
                    onMouseMove: function(e) {
                        if (c.__autocomplete_id !== r.getState().activeItemId) {
                            r.dispatch("mousemove", c.__autocomplete_id);
                            var t = Bt(r.getState());
                            if (null !== r.getState().activeItemId && t) {
                                var i = t.item
                                  , a = t.itemInputValue
                                  , u = t.itemUrl
                                  , l = t.source;
                                l.onActive(Jn({
                                    event: e,
                                    item: i,
                                    itemInputValue: a,
                                    itemUrl: u,
                                    refresh: n,
                                    source: l,
                                    state: r.getState()
                                }, o))
                            }
                        }
                    },
                    onMouseDown: function(e) {
                        e.preventDefault()
                    },
                    onClick: function(e) {
                        var i = a.getItemInputValue({
                            item: c,
                            state: r.getState()
                        })
                          , u = a.getItemUrl({
                            item: c,
                            state: r.getState()
                        });
                        (u ? Promise.resolve() : Cn(Jn({
                            event: e,
                            nextState: {
                                isOpen: !1
                            },
                            props: t,
                            query: i,
                            refresh: n,
                            store: r
                        }, o))).then((function() {
                            a.onSelect(Jn({
                                event: e,
                                item: c,
                                itemInputValue: i,
                                itemUrl: u,
                                refresh: n,
                                source: a,
                                state: r.getState()
                            }, o))
                        }
                        ))
                    }
                }, l)
            }
        }
    }
    function Yn(e) {
        return Yn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        Yn(e)
    }
    function Gn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Xn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Gn(Object(n), !0).forEach((function(t) {
                er(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gn(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function er(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" !== Yn(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== Yn(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === Yn(t) ? t : String(t)
        }(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function tr(e) {
        var t, n, r, o, i = e.plugins, c = e.options, a = null === (t = ((null === (n = c.__autocomplete_metadata) || void 0 === n ? void 0 : n.userAgents) || [])[0]) || void 0 === t ? void 0 : t.segment, u = a ? er({}, a, Object.keys((null === (r = c.__autocomplete_metadata) || void 0 === r ? void 0 : r.options) || {})) : {};
        return {
            plugins: i.map((function(e) {
                return {
                    name: e.name,
                    options: Object.keys(e.__autocomplete_pluginOptions || [])
                }
            }
            )),
            options: Xn({
                "autocomplete-core": Object.keys(c)
            }, u),
            ua: ct.concat((null === (o = c.__autocomplete_metadata) || void 0 === o ? void 0 : o.userAgents) || [])
        }
    }
    function nr(e) {
        var t, n = e.state;
        return !1 === n.isOpen || null === n.activeItemId ? null : (null === (t = Bt(n)) || void 0 === t ? void 0 : t.itemInputValue) || null
    }
    function rr(e) {
        return rr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        rr(e)
    }
    function or(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function ir(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? or(Object(n), !0).forEach((function(t) {
                cr(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : or(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function cr(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" !== rr(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== rr(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === rr(t) ? t : String(t)
        }(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var ar = function(e, t) {
        switch (t.type) {
        case "setActiveItemId":
        case "mousemove":
            return ir(ir({}, e), {}, {
                activeItemId: t.payload
            });
        case "setQuery":
            return ir(ir({}, e), {}, {
                query: t.payload,
                completion: null
            });
        case "setCollections":
            return ir(ir({}, e), {}, {
                collections: t.payload
            });
        case "setIsOpen":
            return ir(ir({}, e), {}, {
                isOpen: t.payload
            });
        case "setStatus":
            return ir(ir({}, e), {}, {
                status: t.payload
            });
        case "setContext":
            return ir(ir({}, e), {}, {
                context: ir(ir({}, e.context), t.payload)
            });
        case "ArrowDown":
            var n = ir(ir({}, e), {}, {
                activeItemId: t.payload.hasOwnProperty("nextActiveItemId") ? t.payload.nextActiveItemId : Lt(1, e.activeItemId, nt(e), t.props.defaultActiveItemId)
            });
            return ir(ir({}, n), {}, {
                completion: nr({
                    state: n
                })
            });
        case "ArrowUp":
            var r = ir(ir({}, e), {}, {
                activeItemId: Lt(-1, e.activeItemId, nt(e), t.props.defaultActiveItemId)
            });
            return ir(ir({}, r), {}, {
                completion: nr({
                    state: r
                })
            });
        case "Escape":
            return e.isOpen ? ir(ir({}, e), {}, {
                activeItemId: null,
                isOpen: !1,
                completion: null
            }) : ir(ir({}, e), {}, {
                activeItemId: null,
                query: "",
                status: "idle",
                collections: []
            });
        case "submit":
            return ir(ir({}, e), {}, {
                activeItemId: null,
                isOpen: !1,
                status: "idle"
            });
        case "reset":
            return ir(ir({}, e), {}, {
                activeItemId: !0 === t.props.openOnFocus ? t.props.defaultActiveItemId : null,
                status: "idle",
                query: ""
            });
        case "focus":
            return ir(ir({}, e), {}, {
                activeItemId: t.props.defaultActiveItemId,
                isOpen: (t.props.openOnFocus || Boolean(e.query)) && t.props.shouldPanelOpen({
                    state: e
                })
            });
        case "blur":
            return t.props.debug ? e : ir(ir({}, e), {}, {
                isOpen: !1,
                activeItemId: null
            });
        case "mouseleave":
            return ir(ir({}, e), {}, {
                activeItemId: t.props.defaultActiveItemId
            });
        default:
            return "The reducer action ".concat(JSON.stringify(t.type), " is not supported."),
            e
        }
    };
    function ur(e) {
        return ur = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        ur(e)
    }
    function lr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function sr(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? lr(Object(n), !0).forEach((function(t) {
                fr(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lr(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function fr(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" !== ur(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== ur(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === ur(t) ? t : String(t)
        }(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function pr(e) {
        var t = []
          , n = on(e, t)
          , r = Jt(ar, n, (function(e) {
            var t = e.prevState
              , r = e.state;
            n.onStateChange(sr({
                prevState: t,
                state: r,
                refresh: c,
                navigator: n.navigator
            }, o))
        }
        ))
          , o = function(e) {
            var t = e.store;
            return {
                setActiveItemId: function(e) {
                    t.dispatch("setActiveItemId", e)
                },
                setQuery: function(e) {
                    t.dispatch("setQuery", e)
                },
                setCollections: function(e) {
                    var n = 0
                      , r = e.map((function(e) {
                        return Zt(Zt({}, e), {}, {
                            items: et(e.items).map((function(e) {
                                return Zt(Zt({}, e), {}, {
                                    __autocomplete_id: n++
                                })
                            }
                            ))
                        })
                    }
                    ));
                    t.dispatch("setCollections", r)
                },
                setIsOpen: function(e) {
                    t.dispatch("setIsOpen", e)
                },
                setStatus: function(e) {
                    t.dispatch("setStatus", e)
                },
                setContext: function(e) {
                    t.dispatch("setContext", e)
                }
            }
        }({
            store: r
        })
          , i = Zn(sr({
            props: n,
            refresh: c,
            store: r,
            navigator: n.navigator
        }, o));
        function c() {
            return Cn(sr({
                event: new Event("input"),
                nextState: {
                    isOpen: r.getState().isOpen
                },
                props: n,
                navigator: n.navigator,
                query: r.getState().query,
                refresh: c,
                store: r
            }, o))
        }
        if (e.insights && !n.plugins.some((function(e) {
            return "aa.algoliaInsightsPlugin" === e.name
        }
        ))) {
            var a = "boolean" == typeof e.insights ? {} : e.insights;
            n.plugins.push(Nt(a))
        }
        return n.plugins.forEach((function(e) {
            var r;
            return null === (r = e.subscribe) || void 0 === r ? void 0 : r.call(e, sr(sr({}, o), {}, {
                navigator: n.navigator,
                refresh: c,
                onSelect: function(e) {
                    t.push({
                        onSelect: e
                    })
                },
                onActive: function(e) {
                    t.push({
                        onActive: e
                    })
                },
                onResolve: function(e) {
                    t.push({
                        onResolve: e
                    })
                }
            }))
        }
        )),
        function(e) {
            var t, n, r = e.metadata, o = e.environment;
            if (null === (t = o.navigator) || void 0 === t || null === (n = t.userAgent) || void 0 === n ? void 0 : n.includes("Algolia Crawler")) {
                var i = o.document.createElement("meta")
                  , c = o.document.querySelector("head");
                i.name = "algolia:metadata",
                setTimeout((function() {
                    i.content = JSON.stringify(r),
                    c.appendChild(i)
                }
                ), 0)
            }
        }({
            metadata: tr({
                plugins: n.plugins,
                options: e
            }),
            environment: n.environment
        }),
        sr(sr({
            refresh: c,
            navigator: n.navigator
        }, i), o)
    }
    function mr(e) {
        var t = e.translations
          , n = (void 0 === t ? {} : t).searchByText
          , r = void 0 === n ? "Search by" : n;
        return Be.createElement("a", {
            href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"),
            target: "_blank",
            rel: "noopener noreferrer"
        }, Be.createElement("span", {
            className: "DocSearch-Label"
        }, r), Be.createElement("svg", {
            width: "77",
            height: "19",
            "aria-label": "Algolia",
            role: "img",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 2196.2 500"
        }, Be.createElement("defs", null, Be.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")), Be.createElement("path", {
            className: "cls-2",
            d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"
        }), Be.createElement("rect", {
            className: "cls-1",
            x: "1845.88",
            y: "104.73",
            width: "62.58",
            height: "277.9",
            rx: "5.9",
            ry: "5.9"
        }), Be.createElement("path", {
            className: "cls-2",
            d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z"
        }), Be.createElement("path", {
            className: "cls-2",
            d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"
        }), Be.createElement("path", {
            className: "cls-2",
            d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z"
        }), Be.createElement("path", {
            className: "cls-2",
            d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"
        }), Be.createElement("path", {
            className: "cls-2",
            d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"
        }), Be.createElement("path", {
            className: "cls-2",
            d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z"
        }), Be.createElement("path", {
            className: "cls-1",
            d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z"
        })))
    }
    function vr(e) {
        return Be.createElement("svg", {
            width: "15",
            height: "15",
            "aria-label": e.ariaLabel,
            role: "img"
        }, Be.createElement("g", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.2"
        }, e.children))
    }
    function dr(e) {
        var t = e.translations
          , n = void 0 === t ? {} : t
          , r = n.selectText
          , o = void 0 === r ? "to select" : r
          , i = n.selectKeyAriaLabel
          , c = void 0 === i ? "Enter key" : i
          , a = n.navigateText
          , u = void 0 === a ? "to navigate" : a
          , l = n.navigateUpKeyAriaLabel
          , s = void 0 === l ? "Arrow up" : l
          , f = n.navigateDownKeyAriaLabel
          , p = void 0 === f ? "Arrow down" : f
          , m = n.closeText
          , v = void 0 === m ? "to close" : m
          , d = n.closeKeyAriaLabel
          , h = void 0 === d ? "Escape key" : d
          , y = n.searchByText
          , b = void 0 === y ? "Search by" : y;
        return Be.createElement(Be.Fragment, null, Be.createElement("div", {
            className: "DocSearch-Logo"
        }, Be.createElement(mr, {
            translations: {
                searchByText: b
            }
        })), Be.createElement("ul", {
            className: "DocSearch-Commands"
        }, Be.createElement("li", null, Be.createElement("kbd", {
            className: "DocSearch-Commands-Key"
        }, Be.createElement(vr, {
            ariaLabel: c
        }, Be.createElement("path", {
            d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"
        }))), Be.createElement("span", {
            className: "DocSearch-Label"
        }, o)), Be.createElement("li", null, Be.createElement("kbd", {
            className: "DocSearch-Commands-Key"
        }, Be.createElement(vr, {
            ariaLabel: p
        }, Be.createElement("path", {
            d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3"
        }))), Be.createElement("kbd", {
            className: "DocSearch-Commands-Key"
        }, Be.createElement(vr, {
            ariaLabel: s
        }, Be.createElement("path", {
            d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3"
        }))), Be.createElement("span", {
            className: "DocSearch-Label"
        }, u)), Be.createElement("li", null, Be.createElement("kbd", {
            className: "DocSearch-Commands-Key"
        }, Be.createElement(vr, {
            ariaLabel: h
        }, Be.createElement("path", {
            d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"
        }))), Be.createElement("span", {
            className: "DocSearch-Label"
        }, v))))
    }
    function hr(e) {
        var t = e.hit
          , n = e.children;
        return Be.createElement("a", {
            href: t.url
        }, n)
    }
    function yr() {
        return Be.createElement("svg", {
            viewBox: "0 0 38 38",
            stroke: "currentColor",
            strokeOpacity: ".5"
        }, Be.createElement("g", {
            fill: "none",
            fillRule: "evenodd"
        }, Be.createElement("g", {
            transform: "translate(1 1)",
            strokeWidth: "2"
        }, Be.createElement("circle", {
            strokeOpacity: ".3",
            cx: "18",
            cy: "18",
            r: "18"
        }), Be.createElement("path", {
            d: "M36 18c0-9.94-8.06-18-18-18"
        }, Be.createElement("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            from: "0 18 18",
            to: "360 18 18",
            dur: "1s",
            repeatCount: "indefinite"
        })))))
    }
    function br() {
        return Be.createElement("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20"
        }, Be.createElement("g", {
            stroke: "currentColor",
            fill: "none",
            fillRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, Be.createElement("path", {
            d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0"
        }), Be.createElement("path", {
            d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13"
        })))
    }
    function gr() {
        return Be.createElement("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20"
        }, Be.createElement("path", {
            d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
            stroke: "currentColor",
            fill: "none",
            fillRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }))
    }
    function _r() {
        return Be.createElement("svg", {
            className: "DocSearch-Hit-Select-Icon",
            width: "20",
            height: "20",
            viewBox: "0 0 20 20"
        }, Be.createElement("g", {
            stroke: "currentColor",
            fill: "none",
            fillRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, Be.createElement("path", {
            d: "M18 3v4c0 2-2 4-4 4H2"
        }), Be.createElement("path", {
            d: "M8 17l-6-6 6-6"
        })))
    }
    var Or = function() {
        return Be.createElement("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20"
        }, Be.createElement("path", {
            d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",
            stroke: "currentColor",
            fill: "none",
            fillRule: "evenodd",
            strokeLinejoin: "round"
        }))
    };
    function Sr(e) {
        switch (e.type) {
        case "lvl1":
            return Be.createElement(Or, null);
        case "content":
            return Be.createElement(jr, null);
        default:
            return Be.createElement(wr, null)
        }
    }
    function wr() {
        return Be.createElement("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20"
        }, Be.createElement("path", {
            d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z",
            stroke: "currentColor",
            fill: "none",
            fillRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }))
    }
    function jr() {
        return Be.createElement("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20"
        }, Be.createElement("path", {
            d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z",
            stroke: "currentColor",
            fill: "none",
            fillRule: "evenodd",
            strokeLinejoin: "round"
        }))
    }
    function Er() {
        return Be.createElement("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20"
        }, Be.createElement("path", {
            d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z",
            stroke: "currentColor",
            fill: "none",
            fillRule: "evenodd",
            strokeLinejoin: "round"
        }))
    }
    function Pr() {
        return Be.createElement("svg", {
            width: "40",
            height: "40",
            viewBox: "0 0 20 20",
            fill: "none",
            fillRule: "evenodd",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, Be.createElement("path", {
            d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0"
        }))
    }
    function Ir() {
        return Be.createElement("svg", {
            width: "40",
            height: "40",
            viewBox: "0 0 20 20",
            fill: "none",
            fillRule: "evenodd",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, Be.createElement("path", {
            d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"
        }))
    }
    function Dr(e) {
        var t = e.translations
          , n = void 0 === t ? {} : t
          , r = n.titleText
          , o = void 0 === r ? "Unable to fetch results" : r
          , i = n.helpText
          , c = void 0 === i ? "You might want to check your network connection." : i;
        return Be.createElement("div", {
            className: "DocSearch-ErrorScreen"
        }, Be.createElement("div", {
            className: "DocSearch-Screen-Icon"
        }, Be.createElement(Pr, null)), Be.createElement("p", {
            className: "DocSearch-Title"
        }, o), Be.createElement("p", {
            className: "DocSearch-Help"
        }, c))
    }
    var kr = ["translations"];
    function Ar(e) {
        return function(e) {
            if (Array.isArray(e))
                return Cr(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return Cr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return Cr(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Cr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function xr(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    function Nr(e) {
        var t = e.translations
          , n = void 0 === t ? {} : t
          , r = xr(e, kr)
          , o = n.noResultsText
          , i = void 0 === o ? "No results for" : o
          , c = n.suggestedQueryText
          , a = void 0 === c ? "Try searching for" : c
          , u = n.reportMissingResultsText
          , l = void 0 === u ? "Believe this query should return results?" : u
          , s = n.reportMissingResultsLinkText
          , f = void 0 === s ? "Let us know." : s
          , p = r.state.context.searchSuggestions;
        return Be.createElement("div", {
            className: "DocSearch-NoResults"
        }, Be.createElement("div", {
            className: "DocSearch-Screen-Icon"
        }, Be.createElement(Ir, null)), Be.createElement("p", {
            className: "DocSearch-Title"
        }, i, ' "', Be.createElement("strong", null, r.state.query), '"'), p && p.length > 0 && Be.createElement("div", {
            className: "DocSearch-NoResults-Prefill-List"
        }, Be.createElement("p", {
            className: "DocSearch-Help"
        }, a, ":"), Be.createElement("ul", null, p.slice(0, 3).reduce((function(e, t) {
            return [].concat(Ar(e), [Be.createElement("li", {
                key: t
            }, Be.createElement("button", {
                className: "DocSearch-Prefill",
                key: t,
                type: "button",
                onClick: function() {
                    r.setQuery(t.toLowerCase() + " "),
                    r.refresh(),
                    r.inputRef.current.focus()
                }
            }, t))])
        }
        ), []))), r.getMissingResultsUrl && Be.createElement("p", {
            className: "DocSearch-Help"
        }, "".concat(l, " "), Be.createElement("a", {
            href: r.getMissingResultsUrl({
                query: r.state.query
            }),
            target: "_blank",
            rel: "noopener noreferrer"
        }, f)))
    }
    var Tr = ["hit", "attribute", "tagName"];
    function Rr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function qr(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Rr(Object(n), !0).forEach((function(t) {
                Lr(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rr(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function Lr(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Mr(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    function Hr(e, t) {
        return t.split(".").reduce((function(e, t) {
            return null != e && e[t] ? e[t] : null
        }
        ), e)
    }
    function Ur(e) {
        var t = e.hit
          , n = e.attribute
          , r = e.tagName;
        return _(void 0 === r ? "span" : r, qr(qr({}, Mr(e, Tr)), {}, {
            dangerouslySetInnerHTML: {
                __html: Hr(t, "_snippetResult.".concat(n, ".value")) || Hr(t, n)
            }
        }))
    }
    function Fr(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n)
                return;
            var r, o, i = [], c = !0, a = !1;
            try {
                for (n = n.call(e); !(c = (r = n.next()).done) && (i.push(r.value),
                !t || i.length !== t); c = !0)
                    ;
            } catch (e) {
                a = !0,
                o = e
            } finally {
                try {
                    c || null == n.return || n.return()
                } finally {
                    if (a)
                        throw o
                }
            }
            return i
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return Br(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return Br(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Br(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function Vr() {
        return Vr = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ,
        Vr.apply(this, arguments)
    }
    function Kr(e) {
        return e.collection && 0 !== e.collection.items.length ? Be.createElement("section", {
            className: "DocSearch-Hits"
        }, Be.createElement("div", {
            className: "DocSearch-Hit-source"
        }, e.title), Be.createElement("ul", e.getListProps(), e.collection.items.map((function(t, n) {
            return Be.createElement(Wr, Vr({
                key: [e.title, t.objectID].join(":"),
                item: t,
                index: n
            }, e))
        }
        )))) : null
    }
    function Wr(e) {
        var t = e.item
          , n = e.index
          , r = e.renderIcon
          , o = e.renderAction
          , i = e.getItemProps
          , c = e.onItemClick
          , a = e.collection
          , u = e.hitComponent
          , l = Fr(Be.useState(!1), 2)
          , s = l[0]
          , f = l[1]
          , p = Fr(Be.useState(!1), 2)
          , m = p[0]
          , v = p[1]
          , d = Be.useRef(null)
          , h = u;
        return Be.createElement("li", Vr({
            className: ["DocSearch-Hit", t.__docsearch_parent && "DocSearch-Hit--Child", s && "DocSearch-Hit--deleting", m && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "),
            onTransitionEnd: function() {
                d.current && d.current()
            }
        }, i({
            item: t,
            source: a.source,
            onClick: function(e) {
                c(t, e)
            }
        })), Be.createElement(h, {
            hit: t
        }, Be.createElement("div", {
            className: "DocSearch-Hit-Container"
        }, r({
            item: t,
            index: n
        }), t.hierarchy[t.type] && "lvl1" === t.type && Be.createElement("div", {
            className: "DocSearch-Hit-content-wrapper"
        }, Be.createElement(Ur, {
            className: "DocSearch-Hit-title",
            hit: t,
            attribute: "hierarchy.lvl1"
        }), t.content && Be.createElement(Ur, {
            className: "DocSearch-Hit-path",
            hit: t,
            attribute: "content"
        })), t.hierarchy[t.type] && ("lvl2" === t.type || "lvl3" === t.type || "lvl4" === t.type || "lvl5" === t.type || "lvl6" === t.type) && Be.createElement("div", {
            className: "DocSearch-Hit-content-wrapper"
        }, Be.createElement(Ur, {
            className: "DocSearch-Hit-title",
            hit: t,
            attribute: "hierarchy.".concat(t.type)
        }), Be.createElement(Ur, {
            className: "DocSearch-Hit-path",
            hit: t,
            attribute: "hierarchy.lvl1"
        })), "content" === t.type && Be.createElement("div", {
            className: "DocSearch-Hit-content-wrapper"
        }, Be.createElement(Ur, {
            className: "DocSearch-Hit-title",
            hit: t,
            attribute: "content"
        }), Be.createElement(Ur, {
            className: "DocSearch-Hit-path",
            hit: t,
            attribute: "hierarchy.lvl1"
        })), o({
            item: t,
            runDeleteTransition: function(e) {
                f(!0),
                d.current = e
            },
            runFavoriteTransition: function(e) {
                v(!0),
                d.current = e
            }
        }))))
    }
    function zr(e, t, n) {
        return e.reduce((function(e, r) {
            var o = t(r);
            return e.hasOwnProperty(o) || (e[o] = []),
            e[o].length < (n || 5) && e[o].push(r),
            e
        }
        ), {})
    }
    function Jr(e) {
        return e
    }
    function $r(e) {
        return 1 === e.button || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey
    }
    function Qr() {}
    var Zr = /(<mark>|<\/mark>)/g
      , Yr = RegExp(Zr.source);
    function Gr(e) {
        var t, n, r = e;
        if (!r.__docsearch_parent && !e._highlightResult)
            return e.hierarchy.lvl0;
        var o = ((r.__docsearch_parent ? null === (t = r.__docsearch_parent) || void 0 === t || null === (t = t._highlightResult) || void 0 === t || null === (t = t.hierarchy) || void 0 === t ? void 0 : t.lvl0 : null === (n = e._highlightResult) || void 0 === n || null === (n = n.hierarchy) || void 0 === n ? void 0 : n.lvl0) || {}).value;
        return o && Yr.test(o) ? o.replace(Zr, "") : o
    }
    function Xr() {
        return Xr = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ,
        Xr.apply(this, arguments)
    }
    function eo(e) {
        return Be.createElement("div", {
            className: "DocSearch-Dropdown-Container"
        }, e.state.collections.map((function(t) {
            if (0 === t.items.length)
                return null;
            var n = Gr(t.items[0]);
            return Be.createElement(Kr, Xr({}, e, {
                key: t.source.sourceId,
                title: n,
                collection: t,
                renderIcon: function(e) {
                    var n, r = e.item, o = e.index;
                    return Be.createElement(Be.Fragment, null, r.__docsearch_parent && Be.createElement("svg", {
                        className: "DocSearch-Hit-Tree",
                        viewBox: "0 0 24 54"
                    }, Be.createElement("g", {
                        stroke: "currentColor",
                        fill: "none",
                        fillRule: "evenodd",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, r.__docsearch_parent !== (null === (n = t.items[o + 1]) || void 0 === n ? void 0 : n.__docsearch_parent) ? Be.createElement("path", {
                        d: "M8 6v21M20 27H8.3"
                    }) : Be.createElement("path", {
                        d: "M8 6v42M20 27H8.3"
                    }))), Be.createElement("div", {
                        className: "DocSearch-Hit-icon"
                    }, Be.createElement(Sr, {
                        type: r.type
                    })))
                },
                renderAction: function() {
                    return Be.createElement("div", {
                        className: "DocSearch-Hit-action"
                    }, Be.createElement(_r, null))
                }
            }))
        }
        )), e.resultsFooterComponent && Be.createElement("section", {
            className: "DocSearch-HitsFooter"
        }, Be.createElement(e.resultsFooterComponent, {
            state: e.state
        })))
    }
    var to = ["translations"];
    function no() {
        return no = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ,
        no.apply(this, arguments)
    }
    function ro(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    function oo(e) {
        var t = e.translations
          , n = void 0 === t ? {} : t
          , r = ro(e, to)
          , o = n.recentSearchesTitle
          , i = void 0 === o ? "Recent" : o
          , c = n.noRecentSearchesText
          , a = void 0 === c ? "No recent searches" : c
          , u = n.saveRecentSearchButtonTitle
          , l = void 0 === u ? "Save this search" : u
          , s = n.removeRecentSearchButtonTitle
          , f = void 0 === s ? "Remove this search from history" : s
          , p = n.favoriteSearchesTitle
          , m = void 0 === p ? "Favorite" : p
          , v = n.removeFavoriteSearchButtonTitle
          , d = void 0 === v ? "Remove this search from favorites" : v;
        return "idle" === r.state.status && !1 === r.hasCollections ? r.disableUserPersonalization ? null : Be.createElement("div", {
            className: "DocSearch-StartScreen"
        }, Be.createElement("p", {
            className: "DocSearch-Help"
        }, a)) : !1 === r.hasCollections ? null : Be.createElement("div", {
            className: "DocSearch-Dropdown-Container"
        }, Be.createElement(Kr, no({}, r, {
            title: i,
            collection: r.state.collections[0],
            renderIcon: function() {
                return Be.createElement("div", {
                    className: "DocSearch-Hit-icon"
                }, Be.createElement(br, null))
            },
            renderAction: function(e) {
                var t = e.item
                  , n = e.runFavoriteTransition
                  , o = e.runDeleteTransition;
                return Be.createElement(Be.Fragment, null, Be.createElement("div", {
                    className: "DocSearch-Hit-action"
                }, Be.createElement("button", {
                    className: "DocSearch-Hit-action-button",
                    title: l,
                    type: "submit",
                    onClick: function(e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        n((function() {
                            r.favoriteSearches.add(t),
                            r.recentSearches.remove(t),
                            r.refresh()
                        }
                        ))
                    }
                }, Be.createElement(Er, null))), Be.createElement("div", {
                    className: "DocSearch-Hit-action"
                }, Be.createElement("button", {
                    className: "DocSearch-Hit-action-button",
                    title: f,
                    type: "submit",
                    onClick: function(e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        o((function() {
                            r.recentSearches.remove(t),
                            r.refresh()
                        }
                        ))
                    }
                }, Be.createElement(gr, null))))
            }
        })), Be.createElement(Kr, no({}, r, {
            title: m,
            collection: r.state.collections[1],
            renderIcon: function() {
                return Be.createElement("div", {
                    className: "DocSearch-Hit-icon"
                }, Be.createElement(Er, null))
            },
            renderAction: function(e) {
                var t = e.item
                  , n = e.runDeleteTransition;
                return Be.createElement("div", {
                    className: "DocSearch-Hit-action"
                }, Be.createElement("button", {
                    className: "DocSearch-Hit-action-button",
                    title: d,
                    type: "submit",
                    onClick: function(e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        n((function() {
                            r.favoriteSearches.remove(t),
                            r.refresh()
                        }
                        ))
                    }
                }, Be.createElement(gr, null)))
            }
        })))
    }
    var io = ["translations"];
    function co() {
        return co = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ,
        co.apply(this, arguments)
    }
    function ao(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    var uo = Be.memo((function(e) {
        var t = e.translations
          , n = void 0 === t ? {} : t
          , r = ao(e, io);
        if ("error" === r.state.status)
            return Be.createElement(Dr, {
                translations: null == n ? void 0 : n.errorScreen
            });
        var o = r.state.collections.some((function(e) {
            return e.items.length > 0
        }
        ));
        return r.state.query ? !1 === o ? Be.createElement(Nr, co({}, r, {
            translations: null == n ? void 0 : n.noResultsScreen
        })) : Be.createElement(eo, r) : Be.createElement(oo, co({}, r, {
            hasCollections: o,
            translations: null == n ? void 0 : n.startScreen
        }))
    }
    ), (function(e, t) {
        return "loading" === t.state.status || "stalled" === t.state.status
    }
    ))
      , lo = ["translations"];
    function so() {
        return so = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ,
        so.apply(this, arguments)
    }
    function fo(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    function po(e) {
        var t = e.translations
          , n = void 0 === t ? {} : t
          , r = fo(e, lo)
          , o = n.resetButtonTitle
          , i = void 0 === o ? "Clear the query" : o
          , c = n.resetButtonAriaLabel
          , a = void 0 === c ? "Clear the query" : c
          , u = n.cancelButtonText
          , l = void 0 === u ? "Cancel" : u
          , s = n.cancelButtonAriaLabel
          , f = void 0 === s ? "Cancel" : s
          , p = n.searchInputLabel
          , m = void 0 === p ? "Search" : p
          , v = r.getFormProps({
            inputElement: r.inputRef.current
        }).onReset;
        return Be.useEffect((function() {
            r.autoFocus && r.inputRef.current && r.inputRef.current.focus()
        }
        ), [r.autoFocus, r.inputRef]),
        Be.useEffect((function() {
            r.isFromSelection && r.inputRef.current && r.inputRef.current.select()
        }
        ), [r.isFromSelection, r.inputRef]),
        Be.createElement(Be.Fragment, null, Be.createElement("form", {
            className: "DocSearch-Form",
            onSubmit: function(e) {
                e.preventDefault()
            },
            onReset: v
        }, Be.createElement("label", so({
            className: "DocSearch-MagnifierLabel"
        }, r.getLabelProps()), Be.createElement(Ke, null), Be.createElement("span", {
            className: "DocSearch-VisuallyHiddenForAccessibility"
        }, m)), Be.createElement("div", {
            className: "DocSearch-LoadingIndicator"
        }, Be.createElement(yr, null)), Be.createElement("input", so({
            className: "DocSearch-Input",
            ref: r.inputRef
        }, r.getInputProps({
            inputElement: r.inputRef.current,
            autoFocus: r.autoFocus,
            maxLength: 64
        }))), Be.createElement("button", {
            type: "reset",
            title: i,
            className: "DocSearch-Reset",
            "aria-label": a,
            hidden: !r.state.query
        }, Be.createElement(gr, null))), Be.createElement("button", {
            className: "DocSearch-Cancel",
            type: "reset",
            "aria-label": f,
            onClick: r.onClose
        }, l))
    }
    var mo = ["_highlightResult", "_snippetResult"];
    function vo(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    function ho(e) {
        return !1 === function() {
            var e = "__TEST_KEY__";
            try {
                return localStorage.setItem(e, ""),
                localStorage.removeItem(e),
                !0
            } catch (e) {
                return !1
            }
        }() ? {
            setItem: function() {},
            getItem: function() {
                return []
            }
        } : {
            setItem: function(t) {
                return window.localStorage.setItem(e, JSON.stringify(t))
            },
            getItem: function() {
                var t = window.localStorage.getItem(e);
                return t ? JSON.parse(t) : []
            }
        }
    }
    function yo(e) {
        var t = e.key
          , n = e.limit
          , r = void 0 === n ? 5 : n
          , o = ho(t)
          , i = o.getItem().slice(0, r);
        return {
            add: function(e) {
                var t = e
                  , n = (t._highlightResult,
                t._snippetResult,
                vo(t, mo))
                  , c = i.findIndex((function(e) {
                    return e.objectID === n.objectID
                }
                ));
                c > -1 && i.splice(c, 1),
                i.unshift(n),
                i = i.slice(0, r),
                o.setItem(i)
            },
            remove: function(e) {
                i = i.filter((function(t) {
                    return t.objectID !== e.objectID
                }
                )),
                o.setItem(i)
            },
            getAll: function() {
                return i
            }
        }
    }
    var bo = ["facetName", "facetQuery"];
    function go(e) {
        var t, n = "algoliasearch-client-js-".concat(e.key), r = function() {
            return void 0 === t && (t = e.localStorage || window.localStorage),
            t
        }, o = function() {
            return JSON.parse(r().getItem(n) || "{}")
        }, i = function(e) {
            r().setItem(n, JSON.stringify(e))
        }, a = function() {
            var t = e.timeToLive ? 1e3 * e.timeToLive : null
              , n = o()
              , r = Object.fromEntries(Object.entries(n).filter((function(e) {
                return void 0 !== c(e, 2)[1].timestamp
            }
            )));
            if (i(r),
            t) {
                var a = Object.fromEntries(Object.entries(r).filter((function(e) {
                    var n = c(e, 2)[1]
                      , r = (new Date).getTime();
                    return !(n.timestamp + t < r)
                }
                )));
                i(a)
            }
        };
        return {
            get: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve()
                    }
                };
                return Promise.resolve().then((function() {
                    a();
                    var t = JSON.stringify(e);
                    return o()[t]
                }
                )).then((function(e) {
                    return Promise.all([e ? e.value : t(), void 0 !== e])
                }
                )).then((function(e) {
                    var t = c(e, 2)
                      , r = t[0]
                      , o = t[1];
                    return Promise.all([r, o || n.miss(r)])
                }
                )).then((function(e) {
                    return c(e, 1)[0]
                }
                ))
            },
            set: function(e, t) {
                return Promise.resolve().then((function() {
                    var i = o();
                    return i[JSON.stringify(e)] = {
                        timestamp: (new Date).getTime(),
                        value: t
                    },
                    r().setItem(n, JSON.stringify(i)),
                    t
                }
                ))
            },
            delete: function(e) {
                return Promise.resolve().then((function() {
                    var t = o();
                    delete t[JSON.stringify(e)],
                    r().setItem(n, JSON.stringify(t))
                }
                ))
            },
            clear: function() {
                return Promise.resolve().then((function() {
                    r().removeItem(n)
                }
                ))
            }
        }
    }
    function _o(e) {
        var t = a(e.caches)
          , n = t.shift();
        return void 0 === n ? {
            get: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve()
                    }
                };
                return t().then((function(e) {
                    return Promise.all([e, n.miss(e)])
                }
                )).then((function(e) {
                    return c(e, 1)[0]
                }
                ))
            },
            set: function(e, t) {
                return Promise.resolve(t)
            },
            delete: function(e) {
                return Promise.resolve()
            },
            clear: function() {
                return Promise.resolve()
            }
        } : {
            get: function(e, r) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve()
                    }
                };
                return n.get(e, r, o).catch((function() {
                    return _o({
                        caches: t
                    }).get(e, r, o)
                }
                ))
            },
            set: function(e, r) {
                return n.set(e, r).catch((function() {
                    return _o({
                        caches: t
                    }).set(e, r)
                }
                ))
            },
            delete: function(e) {
                return n.delete(e).catch((function() {
                    return _o({
                        caches: t
                    }).delete(e)
                }
                ))
            },
            clear: function() {
                return n.clear().catch((function() {
                    return _o({
                        caches: t
                    }).clear()
                }
                ))
            }
        }
    }
    function Oo() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            serializable: !0
        }
          , t = {};
        return {
            get: function(n, r) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve()
                    }
                }
                  , i = JSON.stringify(n);
                if (i in t)
                    return Promise.resolve(e.serializable ? JSON.parse(t[i]) : t[i]);
                var c = r()
                  , a = o && o.miss || function() {
                    return Promise.resolve()
                }
                ;
                return c.then((function(e) {
                    return a(e)
                }
                )).then((function() {
                    return c
                }
                ))
            },
            set: function(n, r) {
                return t[JSON.stringify(n)] = e.serializable ? JSON.stringify(r) : r,
                Promise.resolve(r)
            },
            delete: function(e) {
                return delete t[JSON.stringify(e)],
                Promise.resolve()
            },
            clear: function() {
                return t = {},
                Promise.resolve()
            }
        }
    }
    function So(e) {
        for (var t = e.length - 1; t > 0; t--) {
            var n = Math.floor(Math.random() * (t + 1))
              , r = e[t];
            e[t] = e[n],
            e[n] = r
        }
        return e
    }
    function wo(e, t) {
        return t ? (Object.keys(t).forEach((function(n) {
            e[n] = t[n](e)
        }
        )),
        e) : e
    }
    function jo(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        var o = 0;
        return e.replace(/%s/g, (function() {
            return encodeURIComponent(n[o++])
        }
        ))
    }
    var Eo = "4.19.1"
      , Po = {
        WithinQueryParameters: 0,
        WithinHeaders: 1
    };
    function Io(e, t) {
        var n = e || {}
          , r = n.data || {};
        return Object.keys(n).forEach((function(e) {
            -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e) && (r[e] = n[e])
        }
        )),
        {
            data: Object.entries(r).length > 0 ? r : void 0,
            timeout: n.timeout || t,
            headers: n.headers || {},
            queryParameters: n.queryParameters || {},
            cacheable: n.cacheable
        }
    }
    var Do = {
        Read: 1,
        Write: 2,
        Any: 3
    }
      , ko = 1
      , Ao = 2
      , Co = 3
      , xo = 12e4;
    function No(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ko;
        return t(t({}, e), {}, {
            status: n,
            lastUpdate: Date.now()
        })
    }
    function To(e) {
        return "string" == typeof e ? {
            protocol: "https",
            url: e,
            accept: Do.Any
        } : {
            protocol: e.protocol || "https",
            url: e.url,
            accept: e.accept || Do.Any
        }
    }
    var Ro = "GET"
      , qo = "POST";
    function Lo(e, t) {
        return Promise.all(t.map((function(t) {
            return e.get(t, (function() {
                return Promise.resolve(No(t))
            }
            ))
        }
        ))).then((function(e) {
            var n = e.filter((function(e) {
                return function(e) {
                    return e.status === ko || Date.now() - e.lastUpdate > xo
                }(e)
            }
            ))
              , r = e.filter((function(e) {
                return function(e) {
                    return e.status === Co && Date.now() - e.lastUpdate <= xo
                }(e)
            }
            ))
              , o = [].concat(a(n), a(r));
            return {
                getTimeout: function(e, t) {
                    return (0 === r.length && 0 === e ? 1 : r.length + 3 + e) * t
                },
                statelessHosts: o.length > 0 ? o.map((function(e) {
                    return To(e)
                }
                )) : t
            }
        }
        ))
    }
    function Mo(e, n, r, o) {
        var i = []
          , c = function(e, n) {
            if (e.method === Ro || void 0 === e.data && void 0 === n.data)
                return;
            var r = Array.isArray(e.data) ? e.data : t(t({}, e.data), n.data);
            return JSON.stringify(r)
        }(r, o)
          , u = function(e, n) {
            var r = t(t({}, e.headers), n.headers)
              , o = {};
            return Object.keys(r).forEach((function(e) {
                var t = r[e];
                o[e.toLowerCase()] = t
            }
            )),
            o
        }(e, o)
          , l = r.method
          , s = r.method !== Ro ? {} : t(t({}, r.data), o.data)
          , f = t(t(t({
            "x-algolia-agent": e.userAgent.value
        }, e.queryParameters), s), o.queryParameters)
          , p = 0
          , m = function t(n, a) {
            var s = n.pop();
            if (void 0 === s)
                throw {
                    name: "RetryError",
                    message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
                    transporterStackTrace: Bo(i)
                };
            var m = {
                data: c,
                headers: u,
                method: l,
                url: Uo(s, r.path, f),
                connectTimeout: a(p, e.timeouts.connect),
                responseTimeout: a(p, o.timeout)
            }
              , v = function(e) {
                var t = {
                    request: m,
                    response: e,
                    host: s,
                    triesLeft: n.length
                };
                return i.push(t),
                t
            }
              , d = {
                onSuccess: function(e) {
                    return function(e) {
                        try {
                            return JSON.parse(e.content)
                        } catch (t) {
                            throw function(e, t) {
                                return {
                                    name: "DeserializationError",
                                    message: e,
                                    response: t
                                }
                            }(t.message, e)
                        }
                    }(e)
                },
                onRetry: function(r) {
                    var o = v(r);
                    return r.isTimedOut && p++,
                    Promise.all([e.logger.info("Retryable failure", Vo(o)), e.hostsCache.set(s, No(s, r.isTimedOut ? Co : Ao))]).then((function() {
                        return t(n, a)
                    }
                    ))
                },
                onFail: function(e) {
                    throw v(e),
                    function(e, t) {
                        var n = e.content
                          , r = e.status
                          , o = n;
                        try {
                            o = JSON.parse(n).message
                        } catch (e) {}
                        return function(e, t, n) {
                            return {
                                name: "ApiError",
                                message: e,
                                status: t,
                                transporterStackTrace: n
                            }
                        }(o, r, t)
                    }(e, Bo(i))
                }
            };
            return e.requester.send(m).then((function(e) {
                return function(e, t) {
                    return function(e) {
                        var t = e.status;
                        return e.isTimedOut || function(e) {
                            var t = e.isTimedOut
                              , n = e.status;
                            return !t && 0 == ~~n
                        }(e) || 2 != ~~(t / 100) && 4 != ~~(t / 100)
                    }(e) ? t.onRetry(e) : 2 == ~~(e.status / 100) ? t.onSuccess(e) : t.onFail(e)
                }(e, d)
            }
            ))
        };
        return Lo(e.hostsCache, n).then((function(e) {
            return m(a(e.statelessHosts).reverse(), e.getTimeout)
        }
        ))
    }
    function Ho(e) {
        var t = {
            value: "Algolia for JavaScript (".concat(e, ")"),
            add: function(e) {
                var n = "; ".concat(e.segment).concat(void 0 !== e.version ? " (".concat(e.version, ")") : "");
                return -1 === t.value.indexOf(n) && (t.value = "".concat(t.value).concat(n)),
                t
            }
        };
        return t
    }
    function Uo(e, t, n) {
        var r = Fo(n)
          , o = "".concat(e.protocol, "://").concat(e.url, "/").concat("/" === t.charAt(0) ? t.substr(1) : t);
        return r.length && (o += "?".concat(r)),
        o
    }
    function Fo(e) {
        return Object.keys(e).map((function(t) {
            return jo("%s=%s", t, (n = e[t],
            "[object Object]" === Object.prototype.toString.call(n) || "[object Array]" === Object.prototype.toString.call(n) ? JSON.stringify(e[t]) : e[t]));
            var n
        }
        )).join("&")
    }
    function Bo(e) {
        return e.map((function(e) {
            return Vo(e)
        }
        ))
    }
    function Vo(e) {
        var n = e.request.headers["x-algolia-api-key"] ? {
            "x-algolia-api-key": "*****"
        } : {};
        return t(t({}, e), {}, {
            request: t(t({}, e.request), {}, {
                headers: t(t({}, e.request.headers), n)
            })
        })
    }
    var Ko = function(e) {
        var n = e.appId
          , r = function(e, t, n) {
            var r = {
                "x-algolia-api-key": n,
                "x-algolia-application-id": t
            };
            return {
                headers: function() {
                    return e === Po.WithinHeaders ? r : {}
                },
                queryParameters: function() {
                    return e === Po.WithinQueryParameters ? r : {}
                }
            }
        }(void 0 !== e.authMode ? e.authMode : Po.WithinHeaders, n, e.apiKey)
          , o = function(e) {
            var t = e.hostsCache
              , n = e.logger
              , r = e.requester
              , o = e.requestsCache
              , i = e.responsesCache
              , a = e.timeouts
              , u = e.userAgent
              , l = e.hosts
              , s = e.queryParameters
              , f = {
                hostsCache: t,
                logger: n,
                requester: r,
                requestsCache: o,
                responsesCache: i,
                timeouts: a,
                userAgent: u,
                headers: e.headers,
                queryParameters: s,
                hosts: l.map((function(e) {
                    return To(e)
                }
                )),
                read: function(e, t) {
                    var n = Io(t, f.timeouts.read)
                      , r = function() {
                        return Mo(f, f.hosts.filter((function(e) {
                            return 0 != (e.accept & Do.Read)
                        }
                        )), e, n)
                    };
                    if (!0 !== (void 0 !== n.cacheable ? n.cacheable : e.cacheable))
                        return r();
                    var o = {
                        request: e,
                        mappedRequestOptions: n,
                        transporter: {
                            queryParameters: f.queryParameters,
                            headers: f.headers
                        }
                    };
                    return f.responsesCache.get(o, (function() {
                        return f.requestsCache.get(o, (function() {
                            return f.requestsCache.set(o, r()).then((function(e) {
                                return Promise.all([f.requestsCache.delete(o), e])
                            }
                            ), (function(e) {
                                return Promise.all([f.requestsCache.delete(o), Promise.reject(e)])
                            }
                            )).then((function(e) {
                                var t = c(e, 2);
                                return t[0],
                                t[1]
                            }
                            ))
                        }
                        ))
                    }
                    ), {
                        miss: function(e) {
                            return f.responsesCache.set(o, e)
                        }
                    })
                },
                write: function(e, t) {
                    return Mo(f, f.hosts.filter((function(e) {
                        return 0 != (e.accept & Do.Write)
                    }
                    )), e, Io(t, f.timeouts.write))
                }
            };
            return f
        }(t(t({
            hosts: [{
                url: "".concat(n, "-dsn.algolia.net"),
                accept: Do.Read
            }, {
                url: "".concat(n, ".algolia.net"),
                accept: Do.Write
            }].concat(So([{
                url: "".concat(n, "-1.algolianet.com")
            }, {
                url: "".concat(n, "-2.algolianet.com")
            }, {
                url: "".concat(n, "-3.algolianet.com")
            }]))
        }, e), {}, {
            headers: t(t(t({}, r.headers()), {
                "content-type": "application/x-www-form-urlencoded"
            }), e.headers),
            queryParameters: t(t({}, r.queryParameters()), e.queryParameters)
        }))
          , i = {
            transporter: o,
            appId: n,
            addAlgoliaAgent: function(e, t) {
                o.userAgent.add({
                    segment: e,
                    version: t
                })
            },
            clearCache: function() {
                return Promise.all([o.requestsCache.clear(), o.responsesCache.clear()]).then((function() {}
                ))
            }
        };
        return wo(i, e.methods)
    }
      , Wo = function(e) {
        return function(t, n) {
            return t.method === Ro ? e.transporter.read(t, n) : e.transporter.write(t, n)
        }
    }
      , zo = function(e) {
        return function(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , r = {
                transporter: e.transporter,
                appId: e.appId,
                indexName: t
            };
            return wo(r, n.methods)
        }
    }
      , Jo = function(e) {
        return function(n, r) {
            var o = n.map((function(e) {
                return t(t({}, e), {}, {
                    params: Fo(e.params || {})
                })
            }
            ));
            return e.transporter.read({
                method: qo,
                path: "1/indexes/*/queries",
                data: {
                    requests: o
                },
                cacheable: !0
            }, r)
        }
    }
      , $o = function(e) {
        return function(n, r) {
            return Promise.all(n.map((function(n) {
                var o = n.params
                  , c = o.facetName
                  , a = o.facetQuery
                  , u = i(o, bo);
                return zo(e)(n.indexName, {
                    methods: {
                        searchForFacetValues: Yo
                    }
                }).searchForFacetValues(c, a, t(t({}, r), u))
            }
            )))
        }
    }
      , Qo = function(e) {
        return function(t, n, r) {
            return e.transporter.read({
                method: qo,
                path: jo("1/answers/%s/prediction", e.indexName),
                data: {
                    query: t,
                    queryLanguages: n
                },
                cacheable: !0
            }, r)
        }
    }
      , Zo = function(e) {
        return function(t, n) {
            return e.transporter.read({
                method: qo,
                path: jo("1/indexes/%s/query", e.indexName),
                data: {
                    query: t
                },
                cacheable: !0
            }, n)
        }
    }
      , Yo = function(e) {
        return function(t, n, r) {
            return e.transporter.read({
                method: qo,
                path: jo("1/indexes/%s/facets/%s/query", e.indexName, t),
                data: {
                    facetQuery: n
                },
                cacheable: !0
            }, r)
        }
    }
      , Go = 1
      , Xo = 2
      , ei = 3;
    function ti(e, n, r) {
        var o, i = {
            appId: e,
            apiKey: n,
            timeouts: {
                connect: 1,
                read: 2,
                write: 30
            },
            requester: {
                send: function(e) {
                    return new Promise((function(t) {
                        var n = new XMLHttpRequest;
                        n.open(e.method, e.url, !0),
                        Object.keys(e.headers).forEach((function(t) {
                            return n.setRequestHeader(t, e.headers[t])
                        }
                        ));
                        var r, o = function(e, r) {
                            return setTimeout((function() {
                                n.abort(),
                                t({
                                    status: 0,
                                    content: r,
                                    isTimedOut: !0
                                })
                            }
                            ), 1e3 * e)
                        }, i = o(e.connectTimeout, "Connection timeout");
                        n.onreadystatechange = function() {
                            n.readyState > n.OPENED && void 0 === r && (clearTimeout(i),
                            r = o(e.responseTimeout, "Socket timeout"))
                        }
                        ,
                        n.onerror = function() {
                            0 === n.status && (clearTimeout(i),
                            clearTimeout(r),
                            t({
                                content: n.responseText || "Network request failed",
                                status: n.status,
                                isTimedOut: !1
                            }))
                        }
                        ,
                        n.onload = function() {
                            clearTimeout(i),
                            clearTimeout(r),
                            t({
                                content: n.responseText,
                                status: n.status,
                                isTimedOut: !1
                            })
                        }
                        ,
                        n.send(e.data)
                    }
                    ))
                }
            },
            logger: (o = ei,
            {
                debug: function(e, t) {
                    return Go >= o && console.debug(e, t),
                    Promise.resolve()
                },
                info: function(e, t) {
                    return Xo >= o && console.info(e, t),
                    Promise.resolve()
                },
                error: function(e, t) {
                    return console.error(e, t),
                    Promise.resolve()
                }
            }),
            responsesCache: Oo(),
            requestsCache: Oo({
                serializable: !1
            }),
            hostsCache: _o({
                caches: [go({
                    key: "".concat(Eo, "-").concat(e)
                }), Oo()]
            }),
            userAgent: Ho(Eo).add({
                segment: "Browser",
                version: "lite"
            }),
            authMode: Po.WithinQueryParameters
        };
        return Ko(t(t(t({}, i), r), {}, {
            methods: {
                search: Jo,
                searchForFacetValues: $o,
                multipleQueries: Jo,
                multipleSearchForFacetValues: $o,
                customRequest: Wo,
                initIndex: function(e) {
                    return function(t) {
                        return zo(e)(t, {
                            methods: {
                                search: Zo,
                                searchForFacetValues: Yo,
                                findAnswers: Qo
                            }
                        })
                    }
                }
            }
        }))
    }
    ti.version = Eo;
    var ni = "3.6.0";
    var ri = ["footer", "searchBox"];
    function oi() {
        return oi = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ,
        oi.apply(this, arguments)
    }
    function ii(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function ci(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ii(Object(n), !0).forEach((function(t) {
                ai(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ii(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function ai(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function ui(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n)
                return;
            var r, o, i = [], c = !0, a = !1;
            try {
                for (n = n.call(e); !(c = (r = n.next()).done) && (i.push(r.value),
                !t || i.length !== t); c = !0)
                    ;
            } catch (e) {
                a = !0,
                o = e
            } finally {
                try {
                    c || null == n.return || n.return()
                } finally {
                    if (a)
                        throw o
                }
            }
            return i
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return li(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return li(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function li(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function si(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    function fi(e) {
        var t = e.appId
          , n = e.apiKey
          , r = e.indexName
          , o = e.placeholder
          , i = void 0 === o ? "Search docs" : o
          , c = e.searchParameters
          , a = e.maxResultsPerGroup
          , u = e.onClose
          , l = void 0 === u ? Qr : u
          , s = e.transformItems
          , f = void 0 === s ? Jr : s
          , p = e.hitComponent
          , m = void 0 === p ? hr : p
          , v = e.resultsFooterComponent
          , d = void 0 === v ? function() {
            return null
        }
        : v
          , h = e.navigator
          , y = e.initialScrollY
          , b = void 0 === y ? 0 : y
          , g = e.transformSearchClient
          , _ = void 0 === g ? Jr : g
          , O = e.disableUserPersonalization
          , S = void 0 !== O && O
          , w = e.initialQuery
          , j = void 0 === w ? "" : w
          , E = e.translations
          , P = void 0 === E ? {} : E
          , I = e.getMissingResultsUrl
          , D = e.insights
          , k = void 0 !== D && D
          , A = P.footer
          , C = P.searchBox
          , x = si(P, ri)
          , N = ui(Be.useState({
            query: "",
            collections: [],
            completion: null,
            context: {},
            isOpen: !1,
            activeItemId: null,
            status: "idle"
        }), 2)
          , T = N[0]
          , R = N[1]
          , q = Be.useRef(null)
          , L = Be.useRef(null)
          , M = Be.useRef(null)
          , H = Be.useRef(null)
          , U = Be.useRef(null)
          , F = Be.useRef(10)
          , B = Be.useRef("undefined" != typeof window ? window.getSelection().toString().slice(0, 64) : "").current
          , V = Be.useRef(j || B).current
          , K = function(e, t, n) {
            return Be.useMemo((function() {
                var r = ti(e, t);
                return r.addAlgoliaAgent("docsearch", ni),
                !1 === /docsearch.js \(.*\)/.test(r.transporter.userAgent.value) && r.addAlgoliaAgent("docsearch-react", ni),
                n(r)
            }
            ), [e, t, n])
        }(t, n, _)
          , W = Be.useRef(yo({
            key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(r),
            limit: 10
        })).current
          , z = Be.useRef(yo({
            key: "__DOCSEARCH_RECENT_SEARCHES__".concat(r),
            limit: 0 === W.getAll().length ? 7 : 4
        })).current
          , J = Be.useCallback((function(e) {
            if (!S) {
                var t = "content" === e.type ? e.__docsearch_parent : e;
                t && -1 === W.getAll().findIndex((function(e) {
                    return e.objectID === t.objectID
                }
                )) && z.add(t)
            }
        }
        ), [W, z, S])
          , $ = Be.useCallback((function(e) {
            if (T.context.algoliaInsightsPlugin && e.__autocomplete_id) {
                var t = e
                  , n = {
                    eventName: "Item Selected",
                    index: t.__autocomplete_indexName,
                    items: [t],
                    positions: [e.__autocomplete_id],
                    queryID: t.__autocomplete_queryID
                };
                T.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(n)
            }
        }
        ), [T.context.algoliaInsightsPlugin])
          , Q = Be.useMemo((function() {
            return pr({
                id: "docsearch",
                defaultActiveItemId: 0,
                placeholder: i,
                openOnFocus: !0,
                initialState: {
                    query: V,
                    context: {
                        searchSuggestions: []
                    }
                },
                insights: k,
                navigator: h,
                onStateChange: function(e) {
                    R(e.state)
                },
                getSources: function(e) {
                    var o = e.query
                      , i = e.state
                      , u = e.setContext
                      , s = e.setStatus;
                    if (!o)
                        return S ? [] : [{
                            sourceId: "recentSearches",
                            onSelect: function(e) {
                                var t = e.item
                                  , n = e.event;
                                J(t),
                                $r(n) || l()
                            },
                            getItemUrl: function(e) {
                                return e.item.url
                            },
                            getItems: function() {
                                return z.getAll()
                            }
                        }, {
                            sourceId: "favoriteSearches",
                            onSelect: function(e) {
                                var t = e.item
                                  , n = e.event;
                                J(t),
                                $r(n) || l()
                            },
                            getItemUrl: function(e) {
                                return e.item.url
                            },
                            getItems: function() {
                                return W.getAll()
                            }
                        }];
                    var p = Boolean(k);
                    return K.search([{
                        query: o,
                        indexName: r,
                        params: ci({
                            attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"],
                            attributesToSnippet: ["hierarchy.lvl1:".concat(F.current), "hierarchy.lvl2:".concat(F.current), "hierarchy.lvl3:".concat(F.current), "hierarchy.lvl4:".concat(F.current), "hierarchy.lvl5:".concat(F.current), "hierarchy.lvl6:".concat(F.current), "content:".concat(F.current)],
                            snippetEllipsisText: "…",
                            highlightPreTag: "<mark>",
                            highlightPostTag: "</mark>",
                            hitsPerPage: 20,
                            clickAnalytics: p
                        }, c)
                    }]).catch((function(e) {
                        throw "RetryError" === e.name && s("error"),
                        e
                    }
                    )).then((function(e) {
                        var o = e.results[0]
                          , c = o.hits
                          , s = o.nbHits
                          , m = zr(c, (function(e) {
                            return Gr(e)
                        }
                        ), a);
                        i.context.searchSuggestions.length < Object.keys(m).length && u({
                            searchSuggestions: Object.keys(m)
                        }),
                        u({
                            nbHits: s
                        });
                        var v = {};
                        return p && (v = {
                            __autocomplete_indexName: r,
                            __autocomplete_queryID: o.queryID,
                            __autocomplete_algoliaCredentials: {
                                appId: t,
                                apiKey: n
                            }
                        }),
                        Object.values(m).map((function(e, t) {
                            return {
                                sourceId: "hits".concat(t),
                                onSelect: function(e) {
                                    var t = e.item
                                      , n = e.event;
                                    J(t),
                                    $r(n) || l()
                                },
                                getItemUrl: function(e) {
                                    return e.item.url
                                },
                                getItems: function() {
                                    return Object.values(zr(e, (function(e) {
                                        return e.hierarchy.lvl1
                                    }
                                    ), a)).map(f).map((function(e) {
                                        return e.map((function(t) {
                                            var n = null
                                              , r = e.find((function(e) {
                                                return "lvl1" === e.type && e.hierarchy.lvl1 === t.hierarchy.lvl1
                                            }
                                            ));
                                            return "lvl1" !== t.type && r && (n = r),
                                            ci(ci({}, t), {}, {
                                                __docsearch_parent: n
                                            }, v)
                                        }
                                        ))
                                    }
                                    )).flat()
                                }
                            }
                        }
                        ))
                    }
                    ))
                }
            })
        }
        ), [r, c, a, K, l, z, W, J, V, i, h, f, S, k, t, n])
          , Z = Q.getEnvironmentProps
          , Y = Q.getRootProps
          , G = Q.refresh;
        return function(e) {
            var t = e.getEnvironmentProps
              , n = e.panelElement
              , r = e.formElement
              , o = e.inputElement;
            Be.useEffect((function() {
                if (n && r && o) {
                    var e = t({
                        panelElement: n,
                        formElement: r,
                        inputElement: o
                    })
                      , i = e.onTouchStart
                      , c = e.onTouchMove;
                    return window.addEventListener("touchstart", i),
                    window.addEventListener("touchmove", c),
                    function() {
                        window.removeEventListener("touchstart", i),
                        window.removeEventListener("touchmove", c)
                    }
                }
            }
            ), [t, n, r, o])
        }({
            getEnvironmentProps: Z,
            panelElement: H.current,
            formElement: M.current,
            inputElement: U.current
        }),
        function(e) {
            var t = e.container;
            Be.useEffect((function() {
                if (t) {
                    var e = t.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])")
                      , n = e[0]
                      , r = e[e.length - 1];
                    return t.addEventListener("keydown", o),
                    function() {
                        t.removeEventListener("keydown", o)
                    }
                }
                function o(e) {
                    "Tab" === e.key && (e.shiftKey ? document.activeElement === n && (e.preventDefault(),
                    r.focus()) : document.activeElement === r && (e.preventDefault(),
                    n.focus()))
                }
            }
            ), [t])
        }({
            container: q.current
        }),
        Be.useEffect((function() {
            return document.body.classList.add("DocSearch--active"),
            function() {
                var e, t;
                document.body.classList.remove("DocSearch--active"),
                null === (e = (t = window).scrollTo) || void 0 === e || e.call(t, 0, b)
            }
        }
        ), []),
        Be.useEffect((function() {
            window.matchMedia("(max-width: 768px)").matches && (F.current = 5)
        }
        ), []),
        Be.useEffect((function() {
            H.current && (H.current.scrollTop = 0)
        }
        ), [T.query]),
        Be.useEffect((function() {
            V.length > 0 && (G(),
            U.current && U.current.focus())
        }
        ), [V, G]),
        Be.useEffect((function() {
            function e() {
                if (L.current) {
                    var e = .01 * window.innerHeight;
                    L.current.style.setProperty("--docsearch-vh", "".concat(e, "px"))
                }
            }
            return e(),
            window.addEventListener("resize", e),
            function() {
                window.removeEventListener("resize", e)
            }
        }
        ), []),
        Be.createElement("div", oi({
            ref: q
        }, Y({
            "aria-expanded": !0
        }), {
            className: ["DocSearch", "DocSearch-Container", "stalled" === T.status && "DocSearch-Container--Stalled", "error" === T.status && "DocSearch-Container--Errored"].filter(Boolean).join(" "),
            role: "button",
            tabIndex: 0,
            onMouseDown: function(e) {
                e.target === e.currentTarget && l()
            }
        }), Be.createElement("div", {
            className: "DocSearch-Modal",
            ref: L
        }, Be.createElement("header", {
            className: "DocSearch-SearchBar",
            ref: M
        }, Be.createElement(po, oi({}, Q, {
            state: T,
            autoFocus: 0 === V.length,
            inputRef: U,
            isFromSelection: Boolean(V) && V === B,
            translations: C,
            onClose: l
        }))), Be.createElement("div", {
            className: "DocSearch-Dropdown",
            ref: H
        }, Be.createElement(uo, oi({}, Q, {
            indexName: r,
            state: T,
            hitComponent: m,
            resultsFooterComponent: d,
            disableUserPersonalization: S,
            recentSearches: z,
            favoriteSearches: W,
            inputRef: U,
            translations: x,
            getMissingResultsUrl: I,
            onItemClick: function(e, t) {
                $(e),
                J(e),
                $r(t) || l()
            }
        }))), Be.createElement("footer", {
            className: "DocSearch-Footer"
        }, Be.createElement(dr, {
            translations: A
        }))))
    }
    function pi() {
        return pi = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ,
        pi.apply(this, arguments)
    }
    function mi(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n)
                return;
            var r, o, i = [], c = !0, a = !1;
            try {
                for (n = n.call(e); !(c = (r = n.next()).done) && (i.push(r.value),
                !t || i.length !== t); c = !0)
                    ;
            } catch (e) {
                a = !0,
                o = e
            } finally {
                try {
                    c || null == n.return || n.return()
                } finally {
                    if (a)
                        throw o
                }
            }
            return i
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return vi(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return vi(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function vi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function di(e) {
        var t, n, r = Be.useRef(null), o = mi(Be.useState(!1), 2), i = o[0], c = o[1], a = mi(Be.useState((null == e ? void 0 : e.initialQuery) || void 0), 2), u = a[0], l = a[1], s = Be.useCallback((function() {
            c(!0)
        }
        ), [c]), f = Be.useCallback((function() {
            c(!1)
        }
        ), [c]);
        return function(e) {
            var t = e.isOpen
              , n = e.onOpen
              , r = e.onClose
              , o = e.onInput
              , i = e.searchButtonRef;
            Be.useEffect((function() {
                function e(e) {
                    var c;
                    (27 === e.keyCode && t || "k" === (null === (c = e.key) || void 0 === c ? void 0 : c.toLowerCase()) && (e.metaKey || e.ctrlKey) || !function(e) {
                        var t = e.target
                          , n = t.tagName;
                        return t.isContentEditable || "INPUT" === n || "SELECT" === n || "TEXTAREA" === n
                    }(e) && "/" === e.key && !t) && (e.preventDefault(),
                    t ? r() : document.body.classList.contains("DocSearch--active") || document.body.classList.contains("DocSearch--active") || n()),
                    i && i.current === document.activeElement && o && /[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode)) && o(e)
                }
                return window.addEventListener("keydown", e),
                function() {
                    window.removeEventListener("keydown", e)
                }
            }
            ), [t, n, r, o, i])
        }({
            isOpen: i,
            onOpen: s,
            onClose: f,
            onInput: Be.useCallback((function(e) {
                c(!0),
                l(e.key)
            }
            ), [c, l]),
            searchButtonRef: r
        }),
        Be.createElement(Be.Fragment, null, Be.createElement(Ye, {
            ref: r,
            translations: null == e || null === (t = e.translations) || void 0 === t ? void 0 : t.button,
            onClick: s
        }), i && Ie(Be.createElement(fi, pi({}, e, {
            initialScrollY: window.scrollY,
            initialQuery: u,
            translations: null == e || null === (n = e.translations) || void 0 === n ? void 0 : n.modal,
            onClose: f
        })), document.body))
    }
    return function(e) {
        Ce(Be.createElement(di, o({}, e, {
            transformSearchClient: function(t) {
                return t.addAlgoliaAgent("docsearch.js", ni),
                e.transformSearchClient ? e.transformSearchClient(t) : t
            }
        })), function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
            return "string" == typeof e ? t.document.querySelector(e) : e
        }(e.container, e.environment))
    }
}
));
//# sourceMappingURL=index.js.map
