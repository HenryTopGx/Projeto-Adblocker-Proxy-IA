import {S as L, i as O, s as N, R as Q, e as g, c as $, a as w, d as c, b as m, g as k, T as K, U as X, V as Z, q as M, o as I, C as U, G as ue, H as ce, K as se, z as fe, J as Y, L as ne, w as H, k as S, t as z, x as G, m as j, h as D, I as h, y as C, j as de, B, n as Ae, p as Se, W as je, f as te, X as Ie, l as ve, Y as Te, M as ee, Z as He, _ as ae} from "../chunks/vendor-8643c152.js";
import {B as Ge, I as Ce} from "../chunks/Intro-15abe6b4.js";
import {_ as Be} from "../chunks/preload-helper-ec9aa979.js";
function Ve(r) {
    let e, s;
    const t = r[1].default
      , n = Q(t, r, r[0], null);
    return {
        c() {
            e = g("div"),
            n && n.c(),
            this.h()
        },
        l(l) {
            e = $(l, "DIV", {
                class: !0
            });
            var o = w(e);
            n && n.l(o),
            o.forEach(c),
            this.h()
        },
        h() {
            m(e, "class", "actions svelte-g0dxn")
        },
        m(l, o) {
            k(l, e, o),
            n && n.m(e, null),
            s = !0
        },
        p(l, [o]) {
            n && n.p && (!s || o & 1) && K(n, t, l, l[0], s ? Z(t, l[0], o, null) : X(l[0]), null)
        },
        i(l) {
            s || (M(n, l),
            s = !0)
        },
        o(l) {
            I(n, l),
            s = !1
        },
        d(l) {
            l && c(e),
            n && n.d(l)
        }
    }
}
function Pe(r, e, s) {
    let {$$slots: t={}, $$scope: n} = e;
    return r.$$set = l=>{
        "$$scope"in l && s(0, n = l.$$scope)
    }
    ,
    [n, t]
}
class Re extends L {
    constructor(e) {
        super();
        O(this, e, Pe, Ve, N, {})
    }
}
function Fe(r) {
    let e, s = '<path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z" fill="currentColor"/>', t = [{
        width: "1.2em"
    }, {
        height: "1.2em"
    }, {
        preserveAspectRatio: "xMidYMid meet"
    }, {
        viewBox: "0 0 512 512"
    }, r[0]], n = {};
    for (let l = 0; l < t.length; l += 1)
        n = U(n, t[l]);
    return {
        c() {
            e = ue("svg"),
            this.h()
        },
        l(l) {
            e = ce(l, "svg", {
                width: !0,
                height: !0,
                preserveAspectRatio: !0,
                viewBox: !0
            });
            var o = w(e);
            o.forEach(c),
            this.h()
        },
        h() {
            se(e, n)
        },
        m(l, o) {
            k(l, e, o),
            e.innerHTML = s
        },
        p(l, [o]) {
            se(e, n = fe(t, [{
                width: "1.2em"
            }, {
                height: "1.2em"
            }, {
                preserveAspectRatio: "xMidYMid meet"
            }, {
                viewBox: "0 0 512 512"
            }, o & 1 && l[0]]))
        },
        i: Y,
        o: Y,
        d(l) {
            l && c(e)
        }
    }
}
function Le(r, e, s) {
    return r.$$set = t=>{
        s(0, e = U(U({}, e), ne(t)))
    }
    ,
    e = ne(e),
    [e]
}
class Oe extends L {
    constructor(e) {
        super();
        O(this, e, Le, Fe, N, {})
    }
}
function we(r, e, s) {
    const t = r.slice();
    return t[1] = e[s],
    t
}
function be(r) {
    let e, s, t, n, l, o = r[1] + "", u, a, i;
    return t = new Oe({}),
    {
        c() {
            e = g("li"),
            s = g("span"),
            H(t.$$.fragment),
            n = S(),
            l = g("span"),
            u = z(o),
            a = S(),
            this.h()
        },
        l(d) {
            e = $(d, "LI", {
                class: !0
            });
            var f = w(e);
            s = $(f, "SPAN", {
                class: !0
            });
            var p = w(s);
            G(t.$$.fragment, p),
            p.forEach(c),
            n = j(f),
            l = $(f, "SPAN", {
                class: !0
            });
            var _ = w(l);
            u = D(_, o),
            _.forEach(c),
            a = j(f),
            f.forEach(c),
            this.h()
        },
        h() {
            m(s, "class", "icon svelte-va4f19"),
            m(l, "class", "text svelte-va4f19"),
            m(e, "class", "svelte-va4f19")
        },
        m(d, f) {
            k(d, e, f),
            h(e, s),
            C(t, s, null),
            h(e, n),
            h(e, l),
            h(l, u),
            h(e, a),
            i = !0
        },
        p(d, f) {
            (!i || f & 1) && o !== (o = d[1] + "") && de(u, o)
        },
        i(d) {
            i || (M(t.$$.fragment, d),
            i = !0)
        },
        o(d) {
            I(t.$$.fragment, d),
            i = !1
        },
        d(d) {
            d && c(e),
            B(t)
        }
    }
}
function Ne(r) {
    let e, s, t = r[0], n = [];
    for (let o = 0; o < t.length; o += 1)
        n[o] = be(we(r, t, o));
    const l = o=>I(n[o], 1, 1, ()=>{
        n[o] = null
    }
    );
    return {
        c() {
            e = g("ul");
            for (let o = 0; o < n.length; o += 1)
                n[o].c();
            this.h()
        },
        l(o) {
            e = $(o, "UL", {
                class: !0
            });
            var u = w(e);
            for (let a = 0; a < n.length; a += 1)
                n[a].l(u);
            u.forEach(c),
            this.h()
        },
        h() {
            m(e, "class", "svelte-va4f19")
        },
        m(o, u) {
            k(o, e, u);
            for (let a = 0; a < n.length; a += 1)
                n[a].m(e, null);
            s = !0
        },
        p(o, [u]) {
            if (u & 1) {
                t = o[0];
                let a;
                for (a = 0; a < t.length; a += 1) {
                    const i = we(o, t, a);
                    n[a] ? (n[a].p(i, u),
                    M(n[a], 1)) : (n[a] = be(i),
                    n[a].c(),
                    M(n[a], 1),
                    n[a].m(e, null))
                }
                for (Ae(),
                a = t.length; a < n.length; a += 1)
                    l(a);
                Se()
            }
        },
        i(o) {
            if (!s) {
                for (let u = 0; u < t.length; u += 1)
                    M(n[u]);
                s = !0
            }
        },
        o(o) {
            n = n.filter(Boolean);
            for (let u = 0; u < n.length; u += 1)
                I(n[u]);
            s = !1
        },
        d(o) {
            o && c(e),
            je(n, o)
        }
    }
}
function We(r, e, s) {
    let {items: t} = e;
    return r.$$set = n=>{
        "items"in n && s(0, t = n.items)
    }
    ,
    [t]
}
class ke extends L {
    constructor(e) {
        super();
        O(this, e, We, Ne, N, {
            items: 0
        })
    }
}
function Ye(r) {
    let e, s, t, n, l, o;
    s = new Ge({
        props: {
            backgroundColor: r[0]
        }
    });
    const u = r[2].default
      , a = Q(u, r, r[1], null);
    return {
        c() {
            e = g("section"),
            H(s.$$.fragment),
            t = S(),
            n = g("div"),
            l = S(),
            a && a.c(),
            this.h()
        },
        l(i) {
            e = $(i, "SECTION", {
                class: !0
            });
            var d = w(e);
            G(s.$$.fragment, d),
            t = j(d),
            n = $(d, "DIV", {
                class: !0,
                style: !0
            }),
            w(n).forEach(c),
            l = j(d),
            a && a.l(d),
            d.forEach(c),
            this.h()
        },
        h() {
            m(n, "class", "backdrop svelte-1xsx4kg"),
            te(n, "background-color", r[0]),
            m(e, "class", "wrapper svelte-1xsx4kg")
        },
        m(i, d) {
            k(i, e, d),
            C(s, e, null),
            h(e, t),
            h(e, n),
            h(e, l),
            a && a.m(e, null),
            o = !0
        },
        p(i, [d]) {
            const f = {};
            d & 1 && (f.backgroundColor = i[0]),
            s.$set(f),
            (!o || d & 1) && te(n, "background-color", i[0]),
            a && a.p && (!o || d & 2) && K(a, u, i, i[1], o ? Z(u, i[1], d, null) : X(i[1]), null)
        },
        i(i) {
            o || (M(s.$$.fragment, i),
            M(a, i),
            o = !0)
        },
        o(i) {
            I(s.$$.fragment, i),
            I(a, i),
            o = !1
        },
        d(i) {
            i && c(e),
            B(s),
            a && a.d(i)
        }
    }
}
function qe(r, e, s) {
    let {$$slots: t={}, $$scope: n} = e
      , {backgroundColor: l="transparent"} = e;
    return r.$$set = o=>{
        "backgroundColor"in o && s(0, l = o.backgroundColor),
        "$$scope"in o && s(1, n = o.$$scope)
    }
    ,
    [l, n, t]
}
class ye extends L {
    constructor(e) {
        super();
        O(this, e, qe, Ye, N, {
            backgroundColor: 0
        })
    }
}
async function Je() {
    {
        const e = (await Be(()=>import("../chunks/dropzone-be427b33.js").then(function(s) {
            return s.d
        }), [])).default;
        return e.autoDiscover = !1,
        s=>({
            destroy: Ue(e, s)
        })
    }
}
function Ue(r, e) {
    const s = new r(e,{
        url: "/",
        maxFiles: 4,
        parallelUploads: 1,
        uploadMultiple: !1
    })
      , t = s.addFile.bind(s);
    s.addFile = (...l)=>{
        s.files.length < 4 && t(...l)
    }
    ;
    const n = [];
    return s.submitRequest = (l,o,u)=>{
        for (let d = 0; d < 8; d++)
            n.push(setTimeout(()=>{
                s.emit("uploadprogress", u[0], 100 / (8 - 1) * d, u[0].size / (8 - 1) * d),
                d === 8 - 1 && (u[0].status = "success",
                s.emit("success", u[0], "success"),
                s.emit("complete", u[0]),
                s.processQueue(),
                s.getFilesWithStatus("success").length == 4 && s.disable())
            }
            , 2e3 / 8 * d))
    }
    ,
    ()=>{
        n.forEach(l=>clearTimeout(l)),
        s.destroy()
    }
}
function Ee(r) {
    let e, s, t, n, l, o, u, a, i, d, f, p, _, y, E, b, v, T;
    return {
        c() {
            e = g("div"),
            s = g("div"),
            t = g("h1"),
            n = z("Try it out!"),
            l = S(),
            o = g("p"),
            u = z("Drag and drop files here"),
            a = S(),
            i = g("p"),
            d = z(`This is just a demo Dropzone.
          `),
            f = g("br"),
            p = z(`
          Dropped files are `),
            _ = g("strong"),
            y = z("not"),
            E = z(" actually uploaded."),
            this.h()
        },
        l(V) {
            e = $(V, "DIV", {
                class: !0
            });
            var P = w(e);
            s = $(P, "DIV", {
                class: !0
            });
            var R = w(s);
            t = $(R, "H1", {
                class: !0
            });
            var W = w(t);
            n = D(W, "Try it out!"),
            W.forEach(c),
            l = j(R),
            o = $(R, "P", {});
            var J = w(o);
            u = D(J, "Drag and drop files here"),
            J.forEach(c),
            a = j(R),
            i = $(R, "P", {
                class: !0
            });
            var q = w(i);
            d = D(q, `This is just a demo Dropzone.
          `),
            f = $(q, "BR", {}),
            p = D(q, `
          Dropped files are `),
            _ = $(q, "STRONG", {});
            var A = w(_);
            y = D(A, "not"),
            A.forEach(c),
            E = D(q, " actually uploaded."),
            q.forEach(c),
            R.forEach(c),
            P.forEach(c),
            this.h()
        },
        h() {
            m(t, "class", "svelte-12uhhij"),
            m(i, "class", "comment svelte-12uhhij"),
            m(s, "class", "dz-message svelte-12uhhij"),
            m(e, "class", "dropzone svelte-12uhhij")
        },
        m(V, P) {
            k(V, e, P),
            h(e, s),
            h(s, t),
            h(t, n),
            h(s, l),
            h(s, o),
            h(o, u),
            h(s, a),
            h(s, i),
            h(i, d),
            h(i, f),
            h(i, p),
            h(i, _),
            h(_, y),
            h(i, E),
            v || (T = Ie(b = r[0].call(null, e)),
            v = !0)
        },
        d(V) {
            V && c(e),
            v = !1,
            T()
        }
    }
}
function Qe(r) {
    let e, s = r[0] && Ee(r);
    return {
        c() {
            e = g("div"),
            s && s.c(),
            this.h()
        },
        l(t) {
            e = $(t, "DIV", {
                class: !0
            });
            var n = w(e);
            s && s.l(n),
            n.forEach(c),
            this.h()
        },
        h() {
            m(e, "class", "dropzone-container svelte-12uhhij")
        },
        m(t, n) {
            k(t, e, n),
            s && s.m(e, null)
        },
        p(t, [n]) {
            t[0] ? s || (s = Ee(t),
            s.c(),
            s.m(e, null)) : s && (s.d(1),
            s = null)
        },
        i: Y,
        o: Y,
        d(t) {
            t && c(e),
            s && s.d()
        }
    }
}
function Ke(r, e, s) {
    let t;
    return async function() {
        s(0, t = await Je())
    }(),
    [t]
}
class Xe extends L {
    constructor(e) {
        super();
        O(this, e, Ke, Qe, N, {})
    }
}
function ze(r) {
    let e, s;
    return {
        c() {
            e = g("h2"),
            s = z(r[0]),
            this.h()
        },
        l(t) {
            e = $(t, "H2", {
                class: !0
            });
            var n = w(e);
            s = D(n, r[0]),
            n.forEach(c),
            this.h()
        },
        h() {
            m(e, "class", "svelte-c0deog")
        },
        m(t, n) {
            k(t, e, n),
            h(e, s)
        },
        p(t, n) {
            n & 1 && de(s, t[0])
        },
        d(t) {
            t && c(e)
        }
    }
}
function Ze(r) {
    let e, s, t, n;
    const l = r[2].default
      , o = Q(l, r, r[1], null);
    let u = r[0] && ze(r);
    return {
        c() {
            e = g("h1"),
            o && o.c(),
            s = S(),
            u && u.c(),
            t = ve(),
            this.h()
        },
        l(a) {
            e = $(a, "H1", {
                class: !0
            });
            var i = w(e);
            o && o.l(i),
            i.forEach(c),
            s = j(a),
            u && u.l(a),
            t = ve(),
            this.h()
        },
        h() {
            m(e, "class", "svelte-c0deog")
        },
        m(a, i) {
            k(a, e, i),
            o && o.m(e, null),
            k(a, s, i),
            u && u.m(a, i),
            k(a, t, i),
            n = !0
        },
        p(a, [i]) {
            o && o.p && (!n || i & 2) && K(o, l, a, a[1], n ? Z(l, a[1], i, null) : X(a[1]), null),
            a[0] ? u ? u.p(a, i) : (u = ze(a),
            u.c(),
            u.m(t.parentNode, t)) : u && (u.d(1),
            u = null)
        },
        i(a) {
            n || (M(o, a),
            n = !0)
        },
        o(a) {
            I(o, a),
            n = !1
        },
        d(a) {
            a && c(e),
            o && o.d(a),
            a && c(s),
            u && u.d(a),
            a && c(t)
        }
    }
}
function xe(r, e, s) {
    let {$$slots: t={}, $$scope: n} = e
      , {subtitle: l=null} = e;
    return r.$$set = o=>{
        "subtitle"in o && s(0, l = o.subtitle),
        "$$scope"in o && s(1, n = o.$$scope)
    }
    ,
    [l, n, t]
}
class et extends L {
    constructor(e) {
        super();
        O(this, e, xe, Ze, N, {
            subtitle: 0
        })
    }
}
const tt = r=>({})
  , De = r=>({})
  , st = r=>({})
  , Me = r=>({});
function nt(r) {
    let e, s, t, n, l, o, u, a, i;
    const d = r[2].icon
      , f = Q(d, r, r[1], Me)
      , p = r[2].default
      , _ = Q(p, r, r[1], null)
      , y = r[2].actions
      , E = Q(y, r, r[1], De);
    return {
        c() {
            e = g("section"),
            s = g("div"),
            f && f.c(),
            t = S(),
            n = g("h3"),
            l = z(r[0]),
            o = S(),
            _ && _.c(),
            u = S(),
            a = g("div"),
            E && E.c(),
            this.h()
        },
        l(b) {
            e = $(b, "SECTION", {
                class: !0
            });
            var v = w(e);
            s = $(v, "DIV", {
                class: !0
            });
            var T = w(s);
            f && f.l(T),
            T.forEach(c),
            t = j(v),
            n = $(v, "H3", {});
            var V = w(n);
            l = D(V, r[0]),
            V.forEach(c),
            o = j(v),
            _ && _.l(v),
            u = j(v),
            a = $(v, "DIV", {
                class: !0
            });
            var P = w(a);
            E && E.l(P),
            P.forEach(c),
            v.forEach(c),
            this.h()
        },
        h() {
            m(s, "class", "main-feature__icon-header svelte-1g02982"),
            m(a, "class", "main-feature__actions svelte-1g02982"),
            m(e, "class", "main-feature svelte-1g02982")
        },
        m(b, v) {
            k(b, e, v),
            h(e, s),
            f && f.m(s, null),
            h(e, t),
            h(e, n),
            h(n, l),
            h(e, o),
            _ && _.m(e, null),
            h(e, u),
            h(e, a),
            E && E.m(a, null),
            i = !0
        },
        p(b, [v]) {
            f && f.p && (!i || v & 2) && K(f, d, b, b[1], i ? Z(d, b[1], v, st) : X(b[1]), Me),
            (!i || v & 1) && de(l, b[0]),
            _ && _.p && (!i || v & 2) && K(_, p, b, b[1], i ? Z(p, b[1], v, null) : X(b[1]), null),
            E && E.p && (!i || v & 2) && K(E, y, b, b[1], i ? Z(y, b[1], v, tt) : X(b[1]), De)
        },
        i(b) {
            i || (M(f, b),
            M(_, b),
            M(E, b),
            i = !0)
        },
        o(b) {
            I(f, b),
            I(_, b),
            I(E, b),
            i = !1
        },
        d(b) {
            b && c(e),
            f && f.d(b),
            _ && _.d(b),
            E && E.d(b)
        }
    }
}
function lt(r, e, s) {
    let {$$slots: t={}, $$scope: n} = e
      , {title: l} = e;
    return r.$$set = o=>{
        "title"in o && s(0, l = o.title),
        "$$scope"in o && s(1, n = o.$$scope)
    }
    ,
    [l, n, t]
}
class ie extends L {
    constructor(e) {
        super();
        O(this, e, lt, nt, N, {
            title: 0
        })
    }
}
function ot(r) {
    let e, s;
    const t = r[1].default
      , n = Q(t, r, r[0], null);
    return {
        c() {
            e = g("div"),
            n && n.c(),
            this.h()
        },
        l(l) {
            e = $(l, "DIV", {
                class: !0
            });
            var o = w(e);
            n && n.l(o),
            o.forEach(c),
            this.h()
        },
        h() {
            m(e, "class", "main-features svelte-wb46l8")
        },
        m(l, o) {
            k(l, e, o),
            n && n.m(e, null),
            s = !0
        },
        p(l, [o]) {
            n && n.p && (!s || o & 1) && K(n, t, l, l[0], s ? Z(t, l[0], o, null) : X(l[0]), null)
        },
        i(l) {
            s || (M(n, l),
            s = !0)
        },
        o(l) {
            I(n, l),
            s = !1
        },
        d(l) {
            l && c(e),
            n && n.d(l)
        }
    }
}
function rt(r, e, s) {
    let {$$slots: t={}, $$scope: n} = e;
    return r.$$set = l=>{
        "$$scope"in l && s(0, n = l.$$scope)
    }
    ,
    [n, t]
}
class at extends L {
    constructor(e) {
        super();
        O(this, e, rt, ot, N, {})
    }
}
function it(r) {
    let e, s, t, n, l, o, u, a, i, d;
    return document.title = e = r[0],
    {
        c() {
            s = g("meta"),
            t = g("meta"),
            n = g("meta"),
            l = g("meta"),
            o = g("meta"),
            u = g("meta"),
            a = g("meta"),
            i = g("meta"),
            d = g("meta"),
            this.h()
        },
        l(f) {
            const p = Te('[data-svelte="svelte-wfxfbq"]', document.head);
            s = $(p, "META", {
                name: !0,
                content: !0
            }),
            t = $(p, "META", {
                property: !0,
                content: !0
            }),
            n = $(p, "META", {
                property: !0,
                content: !0
            }),
            l = $(p, "META", {
                property: !0,
                content: !0
            }),
            o = $(p, "META", {
                property: !0,
                content: !0
            }),
            u = $(p, "META", {
                property: !0,
                content: !0
            }),
            a = $(p, "META", {
                property: !0,
                content: !0
            }),
            i = $(p, "META", {
                property: !0,
                content: !0
            }),
            d = $(p, "META", {
                name: !0,
                content: !0
            }),
            p.forEach(c),
            this.h()
        },
        h() {
            m(s, "name", "description"),
            m(s, "content", r[1]),
            m(t, "property", "og:title"),
            m(t, "content", r[0]),
            m(n, "property", "og:description"),
            m(n, "content", r[1]),
            m(l, "property", "og:image"),
            m(l, "content", "/images/opengraph.jpg"),
            m(o, "property", "twitter:card"),
            m(o, "content", "summary_large_image"),
            m(u, "property", "twitter:title"),
            m(u, "content", r[0]),
            m(a, "property", "twitter:description"),
            m(a, "content", r[1]),
            m(i, "property", "twitter:image"),
            m(i, "content", "/images/opengraph.jpg"),
            m(d, "name", "keywords"),
            m(d, "content", "javascript dragndrop drag and drop drag'n'drop file upload image preview")
        },
        m(f, p) {
            h(document.head, s),
            h(document.head, t),
            h(document.head, n),
            h(document.head, l),
            h(document.head, o),
            h(document.head, u),
            h(document.head, a),
            h(document.head, i),
            h(document.head, d)
        },
        p(f, [p]) {
            p & 1 && e !== (e = f[0]) && (document.title = e),
            p & 2 && m(s, "content", f[1]),
            p & 1 && m(t, "content", f[0]),
            p & 2 && m(n, "content", f[1]),
            p & 1 && m(u, "content", f[0]),
            p & 2 && m(a, "content", f[1])
        },
        i: Y,
        o: Y,
        d(f) {
            c(s),
            c(t),
            c(n),
            c(l),
            c(o),
            c(u),
            c(a),
            c(i),
            c(d)
        }
    }
}
function ut(r, e, s) {
    let {title: t="Dropzone"} = e
      , {description: n="Tools to build great forms."} = e;
    return r.$$set = l=>{
        "title"in l && s(0, t = l.title),
        "description"in l && s(1, n = l.description)
    }
    ,
    [t, n]
}
class ct extends L {
    constructor(e) {
        super();
        O(this, e, ut, it, N, {
            title: 0,
            description: 1
        })
    }
}
function ft(r) {
    let e, s = '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m184 112l144 144l-144 144"/>', t = [{
        width: "1.2em"
    }, {
        height: "1.2em"
    }, {
        preserveAspectRatio: "xMidYMid meet"
    }, {
        viewBox: "0 0 512 512"
    }, r[0]], n = {};
    for (let l = 0; l < t.length; l += 1)
        n = U(n, t[l]);
    return {
        c() {
            e = ue("svg"),
            this.h()
        },
        l(l) {
            e = ce(l, "svg", {
                width: !0,
                height: !0,
                preserveAspectRatio: !0,
                viewBox: !0
            });
            var o = w(e);
            o.forEach(c),
            this.h()
        },
        h() {
            se(e, n)
        },
        m(l, o) {
            k(l, e, o),
            e.innerHTML = s
        },
        p(l, [o]) {
            se(e, n = fe(t, [{
                width: "1.2em"
            }, {
                height: "1.2em"
            }, {
                preserveAspectRatio: "xMidYMid meet"
            }, {
                viewBox: "0 0 512 512"
            }, o & 1 && l[0]]))
        },
        i: Y,
        o: Y,
        d(l) {
            l && c(e)
        }
    }
}
function dt(r, e, s) {
    return r.$$set = t=>{
        s(0, e = U(U({}, e), ne(t)))
    }
    ,
    e = ne(e),
    [e]
}
class ht extends L {
    constructor(e) {
        super();
        O(this, e, dt, ft, N, {})
    }
}
function pt(r) {
    let e, s, t, n, l, o, u, a, i, d;
    const f = r[7].default
      , p = Q(f, r, r[6], null);
    return n = new ht({}),
    {
        c() {
            e = g("a"),
            p && p.c(),
            s = S(),
            t = g("span"),
            H(n.$$.fragment),
            this.h()
        },
        l(_) {
            e = $(_, "A", {
                href: !0,
                target: !0,
                rel: !0,
                style: !0,
                class: !0
            });
            var y = w(e);
            p && p.l(y),
            s = j(y),
            t = $(y, "SPAN", {
                class: !0
            });
            var E = w(t);
            G(n.$$.fragment, E),
            E.forEach(c),
            y.forEach(c),
            this.h()
        },
        h() {
            m(t, "class", "icon svelte-o8s9fd"),
            m(e, "href", r[0]),
            m(e, "target", l = r[0].startsWith("http") ? "_blank" : null),
            m(e, "rel", o = r[0].startsWith("http") ? "nofollow" : null),
            te(e, "--color", "var(--" + r[2] + "-color)"),
            te(e, "--bg-color", "var(--" + r[2] + "-bg-color)"),
            m(e, "class", "svelte-o8s9fd"),
            ee(e, "outlined", r[1] === "outlined"),
            ee(e, "contained", r[1] === "contained"),
            ee(e, "text", r[1] === "text")
        },
        m(_, y) {
            k(_, e, y),
            p && p.m(e, null),
            h(e, s),
            h(e, t),
            C(n, t, null),
            a = !0,
            i || (d = Ie(u = r[3].call(null, e, r[4])),
            i = !0)
        },
        p(_, [y]) {
            p && p.p && (!a || y & 64) && K(p, f, _, _[6], a ? Z(f, _[6], y, null) : X(_[6]), null),
            (!a || y & 1) && m(e, "href", _[0]),
            (!a || y & 1 && l !== (l = _[0].startsWith("http") ? "_blank" : null)) && m(e, "target", l),
            (!a || y & 1 && o !== (o = _[0].startsWith("http") ? "nofollow" : null)) && m(e, "rel", o),
            (!a || y & 4) && te(e, "--color", "var(--" + _[2] + "-color)"),
            (!a || y & 4) && te(e, "--bg-color", "var(--" + _[2] + "-bg-color)"),
            u && He(u.update) && y & 16 && u.update.call(null, _[4]),
            y & 2 && ee(e, "outlined", _[1] === "outlined"),
            y & 2 && ee(e, "contained", _[1] === "contained"),
            y & 2 && ee(e, "text", _[1] === "text")
        },
        i(_) {
            a || (M(p, _),
            M(n.$$.fragment, _),
            a = !0)
        },
        o(_) {
            I(p, _),
            I(n.$$.fragment, _),
            a = !1
        },
        d(_) {
            _ && c(e),
            p && p.d(_),
            B(n),
            i = !1,
            d()
        }
    }
}
function mt(r, e, s) {
    let {$$slots: t={}, $$scope: n} = e, {href: l} = e, {variant: o="outlined"} = e, {color: u="primary"} = e, {use: a=void 0} = e, i = ()=>{}
    , d;
    return a && (i = a[0],
    d = a[1]),
    r.$$set = f=>{
        "href"in f && s(0, l = f.href),
        "variant"in f && s(1, o = f.variant),
        "color"in f && s(2, u = f.color),
        "use"in f && s(5, a = f.use),
        "$$scope"in f && s(6, n = f.$$scope)
    }
    ,
    [l, o, u, i, d, a, n, t]
}
class le extends L {
    constructor(e) {
        super();
        O(this, e, mt, pt, N, {
            href: 0,
            variant: 1,
            color: 2,
            use: 5
        })
    }
}
function _t(r) {
    let e, s = '<path d="M417.4 224H288V94.6c0-16.9-14.3-30.6-32-30.6s-32 13.7-32 30.6V224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32H224v129.4c0 16.9 14.3 30.6 32 30.6s32-13.7 32-30.6V288h129.4c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z" fill="currentColor"/>', t = [{
        width: "1.2em"
    }, {
        height: "1.2em"
    }, {
        preserveAspectRatio: "xMidYMid meet"
    }, {
        viewBox: "0 0 512 512"
    }, r[0]], n = {};
    for (let l = 0; l < t.length; l += 1)
        n = U(n, t[l]);
    return {
        c() {
            e = ue("svg"),
            this.h()
        },
        l(l) {
            e = ce(l, "svg", {
                width: !0,
                height: !0,
                preserveAspectRatio: !0,
                viewBox: !0
            });
            var o = w(e);
            o.forEach(c),
            this.h()
        },
        h() {
            se(e, n)
        },
        m(l, o) {
            k(l, e, o),
            e.innerHTML = s
        },
        p(l, [o]) {
            se(e, n = fe(t, [{
                width: "1.2em"
            }, {
                height: "1.2em"
            }, {
                preserveAspectRatio: "xMidYMid meet"
            }, {
                viewBox: "0 0 512 512"
            }, o & 1 && l[0]]))
        },
        i: Y,
        o: Y,
        d(l) {
            l && c(e)
        }
    }
}
function gt(r, e, s) {
    return r.$$set = t=>{
        s(0, e = U(U({}, e), ne(t)))
    }
    ,
    e = ne(e),
    [e]
}
class $t extends L {
    constructor(e) {
        super();
        O(this, e, gt, _t, N, {})
    }
}
function vt(r) {
    let e;
    return {
        c() {
            e = z("Documentation")
        },
        l(s) {
            e = D(s, "Documentation")
        },
        m(s, t) {
            k(s, e, t)
        },
        d(s) {
            s && c(e)
        }
    }
}
function wt(r) {
    let e;
    return {
        c() {
            e = z("Download")
        },
        l(s) {
            e = D(s, "Download")
        },
        m(s, t) {
            k(s, e, t)
        },
        d(s) {
            s && c(e)
        }
    }
}
function bt(r) {
    let e, s, t, n;
    return e = new le({
        props: {
            href: "https://docs.dropzone.dev/",
            color: "white",
            $$slots: {
                default: [vt]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    t = new le({
        props: {
            href: "https://docs.dropzone.dev/getting-started/installation/stand-alone",
            color: "white",
            variant: "text",
            $$slots: {
                default: [wt]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            H(e.$$.fragment),
            s = S(),
            H(t.$$.fragment)
        },
        l(l) {
            G(e.$$.fragment, l),
            s = j(l),
            G(t.$$.fragment, l)
        },
        m(l, o) {
            C(e, l, o),
            k(l, s, o),
            C(t, l, o),
            n = !0
        },
        p(l, o) {
            const u = {};
            o & 1 && (u.$$scope = {
                dirty: o,
                ctx: l
            }),
            e.$set(u);
            const a = {};
            o & 1 && (a.$$scope = {
                dirty: o,
                ctx: l
            }),
            t.$set(a)
        },
        i(l) {
            n || (M(e.$$.fragment, l),
            M(t.$$.fragment, l),
            n = !0)
        },
        o(l) {
            I(e.$$.fragment, l),
            I(t.$$.fragment, l),
            n = !1
        },
        d(l) {
            B(e, l),
            l && c(s),
            B(t, l)
        }
    }
}
function kt(r) {
    let e, s, t, n, l, o, u, a, i, d, f, p, _, y, E, b;
    return E = new Re({
        props: {
            $$slots: {
                default: [bt]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            e = g("p"),
            s = g("strong"),
            t = z("Dropzone.js"),
            n = z(` is one of the most popular drag and drop
    JavaScript libraries. It is
    `),
            l = g("strong"),
            o = z("free"),
            u = z(", "),
            a = g("strong"),
            i = z("fully open source"),
            d = z(`, and makes it easy
    for you to handle dropped files on your website.`),
            f = S(),
            p = g("p"),
            _ = z("It's meant to look good by default, and is highly customizable."),
            y = S(),
            H(E.$$.fragment)
        },
        l(v) {
            e = $(v, "P", {});
            var T = w(e);
            s = $(T, "STRONG", {});
            var V = w(s);
            t = D(V, "Dropzone.js"),
            V.forEach(c),
            n = D(T, ` is one of the most popular drag and drop
    JavaScript libraries. It is
    `),
            l = $(T, "STRONG", {});
            var P = w(l);
            o = D(P, "free"),
            P.forEach(c),
            u = D(T, ", "),
            a = $(T, "STRONG", {});
            var R = w(a);
            i = D(R, "fully open source"),
            R.forEach(c),
            d = D(T, `, and makes it easy
    for you to handle dropped files on your website.`),
            T.forEach(c),
            f = j(v),
            p = $(v, "P", {});
            var W = w(p);
            _ = D(W, "It's meant to look good by default, and is highly customizable."),
            W.forEach(c),
            y = j(v),
            G(E.$$.fragment, v)
        },
        m(v, T) {
            k(v, e, T),
            h(e, s),
            h(s, t),
            h(e, n),
            h(e, l),
            h(l, o),
            h(e, u),
            h(e, a),
            h(a, i),
            h(e, d),
            k(v, f, T),
            k(v, p, T),
            h(p, _),
            k(v, y, T),
            C(E, v, T),
            b = !0
        },
        p(v, T) {
            const V = {};
            T & 1 && (V.$$scope = {
                dirty: T,
                ctx: v
            }),
            E.$set(V)
        },
        i(v) {
            b || (M(E.$$.fragment, v),
            b = !0)
        },
        o(v) {
            I(E.$$.fragment, v),
            b = !1
        },
        d(v) {
            v && c(e),
            v && c(f),
            v && c(p),
            v && c(y),
            B(E, v)
        }
    }
}
function yt(r) {
    let e, s;
    return e = new Xe({
        props: {
            slot: "visual"
        }
    }),
    {
        c() {
            H(e.$$.fragment)
        },
        l(t) {
            G(e.$$.fragment, t)
        },
        m(t, n) {
            C(e, t, n),
            s = !0
        },
        p: Y,
        i(t) {
            s || (M(e.$$.fragment, t),
            s = !0)
        },
        o(t) {
            I(e.$$.fragment, t),
            s = !1
        },
        d(t) {
            B(e, t)
        }
    }
}
function Et(r) {
    let e, s;
    return {
        c() {
            e = g("p"),
            s = z(`You can get all the source code on GitHub, as well as installation
        instructions. If you encounter an issue with this library, this is the
        place to create an issue.`)
        },
        l(t) {
            e = $(t, "P", {});
            var n = w(e);
            s = D(n, `You can get all the source code on GitHub, as well as installation
        instructions. If you encounter an issue with this library, this is the
        place to create an issue.`),
            n.forEach(c)
        },
        m(t, n) {
            k(t, e, n),
            h(e, s)
        },
        d(t) {
            t && c(e)
        }
    }
}
function zt(r) {
    let e, s;
    return {
        c() {
            e = g("img"),
            this.h()
        },
        l(t) {
            e = $(t, "IMG", {
                slot: !0,
                src: !0,
                alt: !0
            }),
            this.h()
        },
        h() {
            m(e, "slot", "icon"),
            ae(e.src, s = "/images/icons/github.svg") || m(e, "src", s),
            m(e, "alt", "GitHub")
        },
        m(t, n) {
            k(t, e, n)
        },
        d(t) {
            t && c(e)
        }
    }
}
function Dt(r) {
    let e;
    return {
        c() {
            e = z("GitHub")
        },
        l(s) {
            e = D(s, "GitHub")
        },
        m(s, t) {
            k(s, e, t)
        },
        d(s) {
            s && c(e)
        }
    }
}
function Mt(r) {
    let e, s;
    return e = new le({
        props: {
            slot: "actions",
            href: "https://github.com/dropzone/dropzone",
            $$slots: {
                default: [Dt]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            H(e.$$.fragment)
        },
        l(t) {
            G(e.$$.fragment, t)
        },
        m(t, n) {
            C(e, t, n),
            s = !0
        },
        p(t, n) {
            const l = {};
            n & 1 && (l.$$scope = {
                dirty: n,
                ctx: t
            }),
            e.$set(l)
        },
        i(t) {
            s || (M(e.$$.fragment, t),
            s = !0)
        },
        o(t) {
            I(e.$$.fragment, t),
            s = !1
        },
        d(t) {
            B(e, t)
        }
    }
}
function It(r) {
    let e, s;
    return {
        c() {
            e = g("p"),
            s = z(`All the documentation about Dropzone, and the multiple ways to configure
        and customise it, can be found on GitBook.`)
        },
        l(t) {
            e = $(t, "P", {});
            var n = w(e);
            s = D(n, `All the documentation about Dropzone, and the multiple ways to configure
        and customise it, can be found on GitBook.`),
            n.forEach(c)
        },
        m(t, n) {
            k(t, e, n),
            h(e, s)
        },
        d(t) {
            t && c(e)
        }
    }
}
function At(r) {
    let e, s;
    return {
        c() {
            e = g("img"),
            this.h()
        },
        l(t) {
            e = $(t, "IMG", {
                slot: !0,
                src: !0,
                alt: !0
            }),
            this.h()
        },
        h() {
            m(e, "slot", "icon"),
            ae(e.src, s = "/images/icons/gitbook.svg") || m(e, "src", s),
            m(e, "alt", "GitBook")
        },
        m(t, n) {
            k(t, e, n)
        },
        d(t) {
            t && c(e)
        }
    }
}
function St(r) {
    let e;
    return {
        c() {
            e = z("Docs")
        },
        l(s) {
            e = D(s, "Docs")
        },
        m(s, t) {
            k(s, e, t)
        },
        d(s) {
            s && c(e)
        }
    }
}
function jt(r) {
    let e, s;
    return e = new le({
        props: {
            slot: "actions",
            href: "https://docs.dropzone.dev",
            $$slots: {
                default: [St]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            H(e.$$.fragment)
        },
        l(t) {
            G(e.$$.fragment, t)
        },
        m(t, n) {
            C(e, t, n),
            s = !0
        },
        p(t, n) {
            const l = {};
            n & 1 && (l.$$scope = {
                dirty: n,
                ctx: t
            }),
            e.$set(l)
        },
        i(t) {
            s || (M(e.$$.fragment, t),
            s = !0)
        },
        o(t) {
            I(e.$$.fragment, t),
            s = !1
        },
        d(t) {
            B(e, t)
        }
    }
}
function Tt(r) {
    let e, s, t = " ", n, l, o, u, a = " ", i, d;
    return {
        c() {
            e = g("p"),
            s = z("If you need help, there are"),
            n = z(t),
            l = S(),
            o = g("a"),
            u = z(`GitHub Discussions
        `),
            i = z(a),
            d = z(`
        and Stackoverflow. Use the tag dropzonejs and there'll be plenty of people
        helping you out.`),
            this.h()
        },
        l(f) {
            e = $(f, "P", {});
            var p = w(e);
            s = D(p, "If you need help, there are"),
            n = D(p, t),
            l = j(p),
            o = $(p, "A", {
                href: !0
            });
            var _ = w(o);
            u = D(_, `GitHub Discussions
        `),
            _.forEach(c),
            i = D(p, a),
            d = D(p, `
        and Stackoverflow. Use the tag dropzonejs and there'll be plenty of people
        helping you out.`),
            p.forEach(c),
            this.h()
        },
        h() {
            m(o, "href", "https://github.com/dropzone/dropzone/discussions")
        },
        m(f, p) {
            k(f, e, p),
            h(e, s),
            h(e, n),
            h(e, l),
            h(e, o),
            h(o, u),
            h(e, i),
            h(e, d)
        },
        p: Y,
        d(f) {
            f && c(e)
        }
    }
}
function Ht(r) {
    let e, s, t, n, l, o, u, a, i, d;
    return o = new $t({}),
    {
        c() {
            e = g("div"),
            s = g("img"),
            n = S(),
            l = g("span"),
            H(o.$$.fragment),
            u = S(),
            a = g("img"),
            this.h()
        },
        l(f) {
            e = $(f, "DIV", {
                slot: !0
            });
            var p = w(e);
            s = $(p, "IMG", {
                src: !0,
                alt: !0
            }),
            n = j(p),
            l = $(p, "SPAN", {
                class: !0
            });
            var _ = w(l);
            G(o.$$.fragment, _),
            _.forEach(c),
            u = j(p),
            a = $(p, "IMG", {
                src: !0,
                alt: !0
            }),
            p.forEach(c),
            this.h()
        },
        h() {
            ae(s.src, t = "/images/icons/stackoverflow.svg") || m(s, "src", t),
            m(s, "alt", "Stackoverflow"),
            m(l, "class", "plus-icon-container svelte-1fzwjxw"),
            ae(a.src, i = "/images/icons/github.svg") || m(a, "src", i),
            m(a, "alt", "GitHub"),
            m(e, "slot", "icon")
        },
        m(f, p) {
            k(f, e, p),
            h(e, s),
            h(e, n),
            h(e, l),
            C(o, l, null),
            h(e, u),
            h(e, a),
            d = !0
        },
        i(f) {
            d || (M(o.$$.fragment, f),
            d = !0)
        },
        o(f) {
            I(o.$$.fragment, f),
            d = !1
        },
        d(f) {
            f && c(e),
            B(o)
        }
    }
}
function Gt(r) {
    let e;
    return {
        c() {
            e = z("Stack Overflow")
        },
        l(s) {
            e = D(s, "Stack Overflow")
        },
        m(s, t) {
            k(s, e, t)
        },
        d(s) {
            s && c(e)
        }
    }
}
function Ct(r) {
    let e, s;
    return e = new le({
        props: {
            slot: "actions",
            href: "https://stackoverflow.com/questions/tagged/dropzone.js",
            $$slots: {
                default: [Gt]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            H(e.$$.fragment)
        },
        l(t) {
            G(e.$$.fragment, t)
        },
        m(t, n) {
            C(e, t, n),
            s = !0
        },
        p(t, n) {
            const l = {};
            n & 1 && (l.$$scope = {
                dirty: n,
                ctx: t
            }),
            e.$set(l)
        },
        i(t) {
            s || (M(e.$$.fragment, t),
            s = !0)
        },
        o(t) {
            I(e.$$.fragment, t),
            s = !1
        },
        d(t) {
            B(e, t)
        }
    }
}
function Bt(r) {
    let e, s, t, n, l, o;
    return e = new ie({
        props: {
            title: "Source code on GitHub",
            $$slots: {
                actions: [Mt],
                icon: [zt],
                default: [Et]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    t = new ie({
        props: {
            title: "Documentation",
            $$slots: {
                actions: [jt],
                icon: [At],
                default: [It]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    l = new ie({
        props: {
            title: "Questions and Support",
            $$slots: {
                actions: [Ct],
                icon: [Ht],
                default: [Tt]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            H(e.$$.fragment),
            s = S(),
            H(t.$$.fragment),
            n = S(),
            H(l.$$.fragment)
        },
        l(u) {
            G(e.$$.fragment, u),
            s = j(u),
            G(t.$$.fragment, u),
            n = j(u),
            G(l.$$.fragment, u)
        },
        m(u, a) {
            C(e, u, a),
            k(u, s, a),
            C(t, u, a),
            k(u, n, a),
            C(l, u, a),
            o = !0
        },
        p(u, a) {
            const i = {};
            a & 1 && (i.$$scope = {
                dirty: a,
                ctx: u
            }),
            e.$set(i);
            const d = {};
            a & 1 && (d.$$scope = {
                dirty: a,
                ctx: u
            }),
            t.$set(d);
            const f = {};
            a & 1 && (f.$$scope = {
                dirty: a,
                ctx: u
            }),
            l.$set(f)
        },
        i(u) {
            o || (M(e.$$.fragment, u),
            M(t.$$.fragment, u),
            M(l.$$.fragment, u),
            o = !0)
        },
        o(u) {
            I(e.$$.fragment, u),
            I(t.$$.fragment, u),
            I(l.$$.fragment, u),
            o = !1
        },
        d(u) {
            B(e, u),
            u && c(s),
            B(t, u),
            u && c(n),
            B(l, u)
        }
    }
}
function Vt(r) {
    let e, s;
    return e = new at({
        props: {
            $$slots: {
                default: [Bt]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            H(e.$$.fragment)
        },
        l(t) {
            G(e.$$.fragment, t)
        },
        m(t, n) {
            C(e, t, n),
            s = !0
        },
        p(t, n) {
            const l = {};
            n & 1 && (l.$$scope = {
                dirty: n,
                ctx: t
            }),
            e.$set(l)
        },
        i(t) {
            s || (M(e.$$.fragment, t),
            s = !0)
        },
        o(t) {
            I(e.$$.fragment, t),
            s = !1
        },
        d(t) {
            B(e, t)
        }
    }
}
function Pt(r) {
    let e;
    return {
        c() {
            e = z("Dropzone.js comes feature packed")
        },
        l(s) {
            e = D(s, "Dropzone.js comes feature packed")
        },
        m(s, t) {
            k(s, e, t)
        },
        d(s) {
            s && c(e)
        }
    }
}
function Rt(r) {
    let e, s, t, n, l, o, u, a, i, d, f, p, _, y, E, b, v, T, V, P, R, W, J, q;
    return e = new et({
        props: {
            subtitle: "And it's easy to add the features you want",
            $$slots: {
                default: [Pt]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    p = new ke({
        props: {
            items: ["Chunked uploads", "Error handling", "Well tested", "Wide browser support", "Fallback without JavaScript", "Fully customizable", "Open Source", "Translation support", "jQuery plugin", "File queues", "Multiple installation options"]
        }
    }),
    J = new ke({
        props: {
            items: ["Good looking defaults", "Image Previews", "Progress Bars", "Success & error icons", "Themes"]
        }
    }),
    {
        c() {
            H(e.$$.fragment),
            s = S(),
            t = g("div"),
            n = g("div"),
            l = g("h2"),
            o = z("Built to last"),
            u = S(),
            a = g("p"),
            i = z(`Dropzone is a robust library trusted by millions. It started in 2012
        with compatibility in mind. Whether your users use an outdated browser,
        or have JavaScript enabled, Dropzone got you covered.`),
            d = S(),
            f = g("div"),
            H(p.$$.fragment),
            _ = S(),
            y = g("div"),
            E = g("div"),
            b = g("h2"),
            v = z("Looking good by default"),
            T = S(),
            V = g("p"),
            P = z(`One main goal when creating Dropzone was to have file previews that are
        not only practical, but also look good. That's why the default design of
        Dropzone looks great without you needing to do anything.`),
            R = S(),
            W = g("div"),
            H(J.$$.fragment),
            this.h()
        },
        l(A) {
            G(e.$$.fragment, A),
            s = j(A),
            t = $(A, "DIV", {
                class: !0
            });
            var F = w(t);
            n = $(F, "DIV", {
                class: !0
            });
            var x = w(n);
            l = $(x, "H2", {
                class: !0
            });
            var he = w(l);
            o = D(he, "Built to last"),
            he.forEach(c),
            u = j(x),
            a = $(x, "P", {});
            var pe = w(a);
            i = D(pe, `Dropzone is a robust library trusted by millions. It started in 2012
        with compatibility in mind. Whether your users use an outdated browser,
        or have JavaScript enabled, Dropzone got you covered.`),
            pe.forEach(c),
            x.forEach(c),
            d = j(F),
            f = $(F, "DIV", {
                class: !0
            });
            var me = w(f);
            G(p.$$.fragment, me),
            me.forEach(c),
            F.forEach(c),
            _ = j(A),
            y = $(A, "DIV", {
                class: !0
            });
            var oe = w(y);
            E = $(oe, "DIV", {
                class: !0
            });
            var re = w(E);
            b = $(re, "H2", {
                class: !0
            });
            var _e = w(b);
            v = D(_e, "Looking good by default"),
            _e.forEach(c),
            T = j(re),
            V = $(re, "P", {});
            var ge = w(V);
            P = D(ge, `One main goal when creating Dropzone was to have file previews that are
        not only practical, but also look good. That's why the default design of
        Dropzone looks great without you needing to do anything.`),
            ge.forEach(c),
            re.forEach(c),
            R = j(oe),
            W = $(oe, "DIV", {
                class: !0
            });
            var $e = w(W);
            G(J.$$.fragment, $e),
            $e.forEach(c),
            oe.forEach(c),
            this.h()
        },
        h() {
            m(l, "class", "svelte-1fzwjxw"),
            m(n, "class", "features__description svelte-1fzwjxw"),
            m(f, "class", "features__list svelte-1fzwjxw"),
            m(t, "class", "features svelte-1fzwjxw"),
            m(b, "class", "svelte-1fzwjxw"),
            m(E, "class", "features__description svelte-1fzwjxw"),
            m(W, "class", "features__list svelte-1fzwjxw"),
            m(y, "class", "features svelte-1fzwjxw")
        },
        m(A, F) {
            C(e, A, F),
            k(A, s, F),
            k(A, t, F),
            h(t, n),
            h(n, l),
            h(l, o),
            h(n, u),
            h(n, a),
            h(a, i),
            h(t, d),
            h(t, f),
            C(p, f, null),
            k(A, _, F),
            k(A, y, F),
            h(y, E),
            h(E, b),
            h(b, v),
            h(E, T),
            h(E, V),
            h(V, P),
            h(y, R),
            h(y, W),
            C(J, W, null),
            q = !0
        },
        p(A, F) {
            const x = {};
            F & 1 && (x.$$scope = {
                dirty: F,
                ctx: A
            }),
            e.$set(x)
        },
        i(A) {
            q || (M(e.$$.fragment, A),
            M(p.$$.fragment, A),
            M(J.$$.fragment, A),
            q = !0)
        },
        o(A) {
            I(e.$$.fragment, A),
            I(p.$$.fragment, A),
            I(J.$$.fragment, A),
            q = !1
        },
        d(A) {
            B(e, A),
            A && c(s),
            A && c(t),
            B(p),
            A && c(_),
            A && c(y),
            B(J)
        }
    }
}
function Ft(r) {
    let e, s, t, n, l, o, u, a;
    return e = new ct({
        props: {
            title: "Dropzone.js",
            description: "Dropzone.js is an open source library that provides beautiful and easy to use drag'n'drop file uploads with image previews."
        }
    }),
    t = new Ce({
        props: {
            title: "File uploads made easy",
            $$slots: {
                visual: [yt],
                default: [kt]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    l = new ye({
        props: {
            backgroundColor: "white",
            $$slots: {
                default: [Vt]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    u = new ye({
        props: {
            $$slots: {
                default: [Rt]
            },
            $$scope: {
                ctx: r
            }
        }
    }),
    {
        c() {
            H(e.$$.fragment),
            s = S(),
            H(t.$$.fragment),
            n = S(),
            H(l.$$.fragment),
            o = S(),
            H(u.$$.fragment)
        },
        l(i) {
            G(e.$$.fragment, i),
            s = j(i),
            G(t.$$.fragment, i),
            n = j(i),
            G(l.$$.fragment, i),
            o = j(i),
            G(u.$$.fragment, i)
        },
        m(i, d) {
            C(e, i, d),
            k(i, s, d),
            C(t, i, d),
            k(i, n, d),
            C(l, i, d),
            k(i, o, d),
            C(u, i, d),
            a = !0
        },
        p(i, [d]) {
            const f = {};
            d & 1 && (f.$$scope = {
                dirty: d,
                ctx: i
            }),
            t.$set(f);
            const p = {};
            d & 1 && (p.$$scope = {
                dirty: d,
                ctx: i
            }),
            l.$set(p);
            const _ = {};
            d & 1 && (_.$$scope = {
                dirty: d,
                ctx: i
            }),
            u.$set(_)
        },
        i(i) {
            a || (M(e.$$.fragment, i),
            M(t.$$.fragment, i),
            M(l.$$.fragment, i),
            M(u.$$.fragment, i),
            a = !0)
        },
        o(i) {
            I(e.$$.fragment, i),
            I(t.$$.fragment, i),
            I(l.$$.fragment, i),
            I(u.$$.fragment, i),
            a = !1
        },
        d(i) {
            B(e, i),
            i && c(s),
            B(t, i),
            i && c(n),
            B(l, i),
            i && c(o),
            B(u, i)
        }
    }
}
class Wt extends L {
    constructor(e) {
        super();
        O(this, e, null, Ft, N, {})
    }
}
export {Wt as default};
