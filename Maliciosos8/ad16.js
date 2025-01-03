(()=>{
    "use strict";
    var t = {
        228: t=>{
            var i = Object.prototype.hasOwnProperty
              , s = "~";
            function h() {}
            function e(t, i, s) {
                this.fn = t,
                this.context = i,
                this.once = s || !1
            }
            function n(t, i, h, n, o) {
                if ("function" != typeof h)
                    throw new TypeError("The listener must be a function");
                var r = new e(h,n || t,o)
                  , l = s ? s + i : i;
                return t.i[l] ? t.i[l].fn ? t.i[l] = [t.i[l], r] : t.i[l].push(r) : (t.i[l] = r,
                t.u++),
                t
            }
            function o(t, i) {
                0 == --t.u ? t.i = new h : delete t.i[i]
            }
            function r() {
                this.i = new h,
                this.u = 0
            }
            Object.create && (h.prototype = Object.create(null),
            (new h).__proto__ || (s = !1)),
            r.prototype.eventNames = function() {
                var t, h, e = [];
                if (0 === this.u)
                    return e;
                for (h in t = this.i)
                    i.call(t, h) && e.push(s ? h.slice(1) : h);
                return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
            }
            ,
            r.prototype.listeners = function(t) {
                var i = s ? s + t : t
                  , h = this.i[i];
                if (!h)
                    return [];
                if (h.fn)
                    return [h.fn];
                for (var e = 0, n = h.length, o = new Array(n); e < n; e++)
                    o[e] = h[e].fn;
                return o
            }
            ,
            r.prototype.listenerCount = function(t) {
                var i = s ? s + t : t
                  , h = this.i[i];
                return h ? h.fn ? 1 : h.length : 0
            }
            ,
            r.prototype.emit = function(t, i, h, e, n, o) {
                var r = s ? s + t : t;
                if (!this.i[r])
                    return !1;
                var l, a, c = this.i[r], d = arguments.length;
                if (c.fn) {
                    switch (c.once && this.removeListener(t, c.fn, void 0, !0),
                    d) {
                    case 1:
                        return c.fn.call(c.context),
                        !0;
                    case 2:
                        return c.fn.call(c.context, i),
                        !0;
                    case 3:
                        return c.fn.call(c.context, i, h),
                        !0;
                    case 4:
                        return c.fn.call(c.context, i, h, e),
                        !0;
                    case 5:
                        return c.fn.call(c.context, i, h, e, n),
                        !0;
                    case 6:
                        return c.fn.call(c.context, i, h, e, n, o),
                        !0
                    }
                    for (a = 1,
                    l = new Array(d - 1); a < d; a++)
                        l[a - 1] = arguments[a];
                    c.fn.apply(c.context, l)
                } else {
                    var u, w = c.length;
                    for (a = 0; a < w; a++)
                        switch (c[a].once && this.removeListener(t, c[a].fn, void 0, !0),
                        d) {
                        case 1:
                            c[a].fn.call(c[a].context);
                            break;
                        case 2:
                            c[a].fn.call(c[a].context, i);
                            break;
                        case 3:
                            c[a].fn.call(c[a].context, i, h);
                            break;
                        case 4:
                            c[a].fn.call(c[a].context, i, h, e);
                            break;
                        default:
                            if (!l)
                                for (u = 1,
                                l = new Array(d - 1); u < d; u++)
                                    l[u - 1] = arguments[u];
                            c[a].fn.apply(c[a].context, l)
                        }
                }
                return !0
            }
            ,
            r.prototype.on = function(t, i, s) {
                return n(this, t, i, s, !1)
            }
            ,
            r.prototype.once = function(t, i, s) {
                return n(this, t, i, s, !0)
            }
            ,
            r.prototype.removeListener = function(t, i, h, e) {
                var n = s ? s + t : t;
                if (!this.i[n])
                    return this;
                if (!i)
                    return o(this, n),
                    this;
                var r = this.i[n];
                if (r.fn)
                    r.fn !== i || e && !r.once || h && r.context !== h || o(this, n);
                else {
                    for (var l = 0, a = [], c = r.length; l < c; l++)
                        (r[l].fn !== i || e && !r[l].once || h && r[l].context !== h) && a.push(r[l]);
                    a.length ? this.i[n] = 1 === a.length ? a[0] : a : o(this, n)
                }
                return this
            }
            ,
            r.prototype.removeAllListeners = function(t) {
                var i;
                return t ? (i = s ? s + t : t,
                this.i[i] && o(this, i)) : (this.i = new h,
                this.u = 0),
                this
            }
            ,
            r.prototype.off = r.prototype.removeListener,
            r.prototype.addListener = r.prototype.on,
            r.prefixed = s,
            r.EventEmitter = r,
            t.exports = r
        }
    }
      , i = {};
    function s(h) {
        var e = i[h];
        if (void 0 !== e)
            return e.exports;
        var n = i[h] = {
            exports: {}
        };
        return t[h](n, n.exports, s),
        n.exports
    }
    s.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }(),
    (()=>{
        const t = {
            _: "",
            k: "",
            S: !1,
            $: !1,
            j: !1,
            C: "",
            A: !1,
            O: "",
            R: !1,
            T: "no",
            M: "no",
            P: "no",
            D: "movie_video",
            I: 60,
            F: 15,
            B: new Date,
            L: {
                V: !1,
                H: "",
                N: 15,
                W: !1,
                U: 30,
                G: !1
            },
            J: {
                K: "",
                Y: "",
                V: !1,
                q: 600,
                X: 330,
                Z: !1,
                tt: "#EEEEEE",
                it: "transparent",
                st: "#FFFFFF",
                ht: "#EEEEEE",
                et: "#000000",
                nt: 60,
                ot: !0,
                rt: !0,
                lt: !0,
                ct: !1,
                dt: 60,
                ut: 0,
                wt: !1,
                ft: 0,
                _t: 432,
                vt: 225,
                gt: !0,
                bt: 31,
                yt: "bl",
                kt: !1,
                xt: !1
            },
            St: {
                V: !1,
                nt: 15,
                Y: "",
                tt: "#FFFF00",
                $t: "#000000"
            },
            jt: {
                Ct: [],
                Et: ""
            }
        }
          , i = "_s_s_a_m"
          , h = "_s_d"
          , e = "_s_t_h"
          , n = "_s_t_s"
          , o = "_s_f_t"
          , r = "_s_f_f"
          , l = "_timer_tick"
          , a = "_timer_finish"
          , c = "_timer_click"
          , d = "_f_start"
          , u = "_f_stop"
          , w = "_f_onstage"
          , f = "_f_offstage"
          , p = "_a_ch_mode"
          , _ = "_v_offstage"
          , m = "_v_onstage"
          , v = "_v_p_sw"
          , g = "_v_tlr_t"
          , b = "_v_tlr_start"
          , y = "_v_tlr_stop"
          , k = "_v_reload"
          , x = "_v_ready"
          , S = "_v_ch_cr"
          , $ = "_v_fsz"
          , j = "_v_click"
          , C = "_v_sm_skip"
          , E = "_b_ready"
          , A = "_b_offstage"
          , O = "_b_onstage"
          , R = "_b_ch_cr"
          , T = "_b_reload"
          , M = {
            BR: "PT",
            BY: "RU",
            RU: "RU",
            UA: "RU"
        }
          , z = {
            PT: {
                At: "Anúncio Carregando...",
                Ot: "Anúncio pser fechado em",
                Rt: "Fechar anúncio"
            },
            RU: {
                At: "Загрузка рекламы...",
                Ot: "Закрыть рекламу через",
                Rt: "Закрыть рекламу"
            },
            DEF: {
                At: "Ad Loading...",
                Ot: "Ad can be closed in",
                Rt: "Close ad"
            }
        };
        const P = new (s(228).EventEmitter);
        class D {
            constructor(t) {
                this.Tt = "Main",
                this.Mt = "base",
                this.zt = null,
                this.Pt = ()=>this.Dt,
                this.It = ()=>this.Pt().It(),
                this.Ft = ()=>this.Mt,
                this.Bt = ()=>this.Tt,
                this.Lt = (...t)=>this.Pt().Vt(this.Tt, ...t),
                this.Vt = (t,...i)=>this.Pt().Vt(this.Tt + " " + t, ...i),
                this.Dt = t
            }
            Ht() {
                return null
            }
            Nt(t) {
                if (void 0 !== window.MutationObserver) {
                    this.zt = new window.MutationObserver(((i,s)=>{
                        i.forEach((i=>{
                            if (!this.Pt().Wt)
                                if ("attributes" === i.type) {
                                    const s = i.target;
                                    if (t === s)
                                        return;
                                    const h = window.getComputedStyle(s).getPropertyValue("z-index");
                                    "auto" == h || "2147483647" == h && (s.style.zIndex = "2147483646")
                                } else
                                    i.addedNodes.forEach((i=>{
                                        if (i.nodeType === Node.ELEMENT_NODE) {
                                            if (t === i)
                                                return;
                                            i.style && i.style.zIndex && "2147483647" == i.style.zIndex && (i.style.zIndex = 2147483646)
                                        }
                                    }
                                    ))
                        }
                        ))
                    }
                    ));
                    const i = {
                        attributes: !0,
                        attributeFilter: ["style", "class"],
                        characterData: !1,
                        childList: !0,
                        subtree: !0
                    }
                      , s = document.body || document.documentElement;
                    this.zt.observe(s, i)
                }
            }
            Ut() {
                void 0 !== window.MutationObserver && (this.zt?.disconnect(),
                this.zt = null)
            }
        }
        const I = t=>{
            let i = 0
              , s = 0;
            do {
                i += t.offsetTop || 0,
                s += t.offsetLeft || 0,
                t = t.offsetParent
            } while (t);
            return {
                top: i,
                left: s
            }
        }
          , F = (t,i)=>{
            for (const s in i)
                "zIndex" !== s && "pointerEvents" !== s ? t.style.setProperty(s, i[s], "important") : t.style[s] = i[s]
        }
          , B = (t,i)=>{
            for (const s in i)
                t.style[s] = i[s]
        }
        ;
        const L = t=>new Promise((i=>{
            t ? window.setTimeout((()=>{
                t.parentNode ? t.parentNode.removeChild(t) : t.remove(),
                i(!0)
            }
            ), 50) : i(!0)
        }
        ))
          , V = (t,i,s)=>{
            let h = "";
            s && (h = "; max-age=" + 24 * s * 60 * 60);
            const e = t + "=" + (i || "") + h + "; path=/";
            document.cookie = e
        }
          , H = ()=>{
            const t = navigator.userAgent;
            return navigator.vendor && navigator.vendor.indexOf("Apple") > -1 && t && -1 == t.indexOf("CriOS") && -1 == t.indexOf("FxiOS")
        }
        ;
        class N {
            constructor(t, i) {
                this.Gt = 0,
                this.Jt = "",
                this.Tt = "Main",
                this.Kt = !1,
                this.Et = "",
                this.A = !1,
                this.Yt = "",
                this.qt = "",
                this.Xt = "",
                this.Zt = null,
                this.Qt = null,
                this.ti = 0,
                this.ii = !1,
                this.si = !1,
                this.hi = null,
                this.ei = 0,
                this.ni = null,
                this.oi = 0,
                this.ri = 4,
                this.li = [30],
                this.ai = null,
                this.ci = !1,
                this.di = "10",
                this.ui = "ping_reload",
                this.wi = 45,
                this.fi = {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    padding: "0",
                    margin: "0",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#000000",
                    display: "block"
                },
                this.pi = !1,
                this._i = i,
                this.mi = t,
                !0 === this.It().A && (this.A = !0),
                this.gi = document.createElement("div"),
                this.hi = new Date
            }
            bi() {
                if ("yes" === this.It().M || "yes" === this.It().P) {
                    const t = document.createElement("div");
                    t.innerText = this.Jt,
                    t.style.fontSize = "13px",
                    B(t, {
                        position: "absolute",
                        width: "100px",
                        height: "14px",
                        backgroundColor: "#000000",
                        "line-height": "14px",
                        top: "2px",
                        left: "10px",
                        color: "wheat",
                        "font-family": "sans-serif",
                        fontVariant: "small-caps",
                        zIndex: 99
                    }),
                    this.yi().appendChild(t),
                    this.yi().setAttribute("data-name", this.Jt)
                }
                B(this.yi(), this.fi)
            }
            ki() {
                return this.xi().Bt() + "_" + this.Jt
            }
            Si() {
                return this.ii
            }
            $i() {
                return this.ci
            }
            ji() {
                const t = this.gi.getBoundingClientRect();
                return {
                    sw: t.width ? t.width : "",
                    sh: t.height ? t.height : "",
                    p: this.gi.style.position ? this.gi.style.position : "",
                    w: this.gi.style.width ? this.gi.style.width : "",
                    h: this.gi.style.height ? this.gi.style.height : "",
                    d: this.gi.style.display ? this.gi.style.display : "",
                    t: this.gi.style.top ? this.gi.style.top : "",
                    b: this.gi.style.bottom ? this.gi.style.bottom : "",
                    l: this.gi.style.left ? this.gi.style.left : "",
                    r: this.gi.style.right ? this.gi.style.right : "",
                    z: this.gi.style.zIndex ? this.gi.style.zIndex : ""
                }
            }
            Ci() {
                this.gi.style.pointerEvents = "none"
            }
            yi() {
                return this.gi
            }
            Ei() {
                this.gi.style.zIndex = "1",
                this.gi.style.opacity = "",
                this.gi.style.pointerEvents = "auto"
            }
            Ai() {
                this.gi.style.zIndex = "2",
                this.gi.style.opacity = "0.001",
                this.gi.style.pointerEvents = "none"
            }
            Ht() {
                return this._i
            }
            Oi(t) {
                t.Gt && (this.Gt = t.Gt),
                t.Jt && (this.Jt = t.Jt),
                t.Et && (this.Et = t.Et),
                t.fi && (this.fi = t.fi),
                t.Kt && (this.Kt = t.Kt)
            }
            Ri() {
                return this.Et
            }
            xi() {
                return this.mi
            }
            It() {
                return this.xi().Pt().It()
            }
            Lt(...t) {
                return this.xi().Vt(this.Jt, ...t)
            }
            Ti(t) {
                return ""
            }
            Ut() {}
            Mi(t) {
                this.li.length > this.ri && this.li.shift(),
                this.li.push(t);
                const i = Math.ceil(this.li.reduce(((t,i)=>t + i), 0) / this.li.length);
                this.wi = i < 15 ? 30 : i >= 15 && i < 30 ? 45 : i >= 30 && i < 60 ? 60 : i >= 60 && i < 90 ? 90 : 120,
                this.Lt("add time reload", t, " all", this.li, "avg", i, "now", this.wi)
            }
            zi() {
                this.ti++,
                this.It().A ? this.qt = this.Ti("&rel=true&rnd=" + (new Date).getTime() + "&cnt=" + this.ti) : "no" === this.It().M && (this.Yt = this.Ti("&rel=true&rnd=" + (new Date).getTime() + "&cnt=" + this.ti)),
                null !== this.ai && "yes" === this.It().M ? this.Ut() : this.Pi()
            }
            Di() {
                if (!this.xi().Pt().Ii())
                    return this.Lt("ping listener not start: Hidden"),
                    void (null !== this.ni && (window.clearInterval(this.ni),
                    this.ni = null));
                this.Lt("ping listener start ", this.wi),
                this.oi = 0,
                null === this.ni && (this.ni = window.setInterval((()=>{
                    if (null === this.Zt) {
                        if (this.Lt("ping listener work", this.hi),
                        null !== this.hi) {
                            const t = (new Date).getTime()
                              , i = (t - this.hi.getTime()) / 1e3;
                            if (this.Lt("ping listener diff", i, ">=", this.wi),
                            i >= this.wi) {
                                if (this.Lt("ping listener go"),
                                this.ii = !1,
                                !this.xi().Pt().Ii())
                                    return this.Lt("ping listener stop hidden or many error"),
                                    null !== this.ni && (window.clearInterval(this.ni),
                                    this.ni = null),
                                    void (this.pi = !0);
                                this.oi++;
                                const s = JSON.stringify({
                                    startup_time: this.It().B.toTimeString(),
                                    startup_time_work: (t - this.It().B.getTime()) / 1e3,
                                    ping_last: this.hi.toTimeString(),
                                    ping_diff: i,
                                    ping_count: this.ei,
                                    avg: Math.ceil(this.li.reduce(((t,i)=>t + i), 0) / this.li.length),
                                    dvs: document.visibilityState,
                                    dh: document.hidden,
                                    fs: this.xi().Pt().Fi()
                                });
                                this.xi().Pt().Bi(this.ui, "", s),
                                this.hi = new Date,
                                this.zi()
                            } else if (null !== this.ai) {
                                const t = this.ai.deref();
                                if (t)
                                    try {
                                        let i = t.contentWindow.document;
                                        i.body?.classList.contains("heavy-ad") && (this.hi = new Date,
                                        this.Lt("HeavyAd class body heavy-ad"),
                                        this.zi())
                                    } catch (t) {
                                        this.hi = new Date,
                                        this.Lt("HeavyAd no body"),
                                        this.zi()
                                    }
                            }
                        }
                    } else
                        this.Lt("wait work, skip ping listener")
                }
                ), 1e4))
            }
            Li(t) {
                if (t.contentWindow) {
                    const i = t.contentWindow.document || t.contentDocument;
                    if (i) {
                        const {readyState: t} = i;
                        if (this.Lt("Status", t),
                        "complete" === t) {
                            let t = this.Xt.replace("{_SCRIPT_}", this.qt);
                            return i.open(),
                            i.write(t),
                            i.close(),
                            !0
                        }
                    }
                }
                return !1
            }
            Vi(t) {
                if (!this.Li(t)) {
                    let i = 5
                      , s = window.setInterval((()=>{
                        if (this.Li(t))
                            return window.clearInterval(s),
                            void (s = 0);
                        i--,
                        i <= 0 && (window.clearInterval(s),
                        L(t).then((()=>{
                            this.Hi()
                        }
                        )))
                    }
                    ), 1e3)
                }
            }
            Pi() {
                this.si = !0;
                const t = new Date
                  , i = null === this.Qt ? t : this.Qt
                  , s = (t.getTime() - i.getTime()) / 1e3;
                if (this.Lt("Перезагрузка", "разница ", s, " последняя", this.Qt, "А тут", i, " calc", this.It().F, s >= this.It().F),
                s < this.It().F && null !== this.Qt)
                    return void this.Hi();
                this.Lt("Перезагрузка Go"),
                this.hi = t,
                this.Qt = t,
                this.ii = !1;
                const h = ((t="",i,s="",h=!0)=>{
                    const e = document.createElement("iframe");
                    return e.setAttribute("scrolling", "no"),
                    e.setAttribute("frameborder", "0"),
                    e.setAttribute("marginheight", "0px"),
                    e.setAttribute("marginwidth", "0px"),
                    e.setAttribute("webkitAllowFullScreen", "true"),
                    e.setAttribute("allow", "autoplay *; fullscreen *;"),
                    e.setAttribute("mozAllowFullScreen", "true"),
                    e.setAttribute("referrerpolicy", "unsafe-url"),
                    e.setAttribute("width", "100%"),
                    e.setAttribute("height", "100%"),
                    e.referrerPolicy = "unsafe-url",
                    F(e, {
                        backgroundColor: "transparent",
                        width: "100%",
                        height: "100%",
                        minWidth: "100%",
                        minHeight: "100%",
                        margin: "0",
                        padding: "0",
                        zIndex: 1
                    }),
                    t.length > 0 ? e.setAttribute("src", t) : e.setAttribute("src", "about:blank"),
                    e
                }
                )(this.Yt, this.gi, "");
                if (this.Yt || h.addEventListener("load", (t=>{
                    this.Lt("create frame onload"),
                    this.Vi(t.target)
                }
                ), {
                    once: !0
                }),
                null !== this.ai) {
                    const t = this.ai.deref();
                    if (t) {
                        t.src = t.src;
                        const i = t.parentNode;
                        if (!i)
                            return void L(t).then((()=>{
                                this.ai = null,
                                this.Hi()
                            }
                            ));
                        i.replaceChild(h, t),
                        this.ai = new WeakRef(h)
                    }
                } else
                    this.ai = new WeakRef(h),
                    this.yi().appendChild(h)
            }
            Hi() {
                let t = Math.round(Math.ceil(this.li.reduce(((t,i)=>t + i), 0) / this.li.length) / 2);
                isNaN(t) && (t = 10),
                t > 30 ? t = 15 : t < 10 && (t = 5),
                this.xi().Pt().Ii() ? this.Si() ? this.Lt("Уже загружен") : (this.Lt("wait reload", t),
                this.hi = new Date,
                null === this.Zt && (this.Zt = window.setTimeout((()=>{
                    this.Lt("Подождали"),
                    null !== this.Zt && (window.clearTimeout(this.Zt),
                    this.Zt = null),
                    this.Pi()
                }
                ), 1e3 * t))) : this.pi = !0
            }
        }
        class W extends N {
            constructor(t, i) {
                super(t, i),
                this.Tt = "video",
                this.Ni = !0,
                this.Wi = 300,
                this.Ui = 60,
                this.Xt = '<!DOCTYPE html><html lang="en"><head><title></title><meta charset="UTF-8"/><style>html,body{background-color: black;  position: relative;width: 100%;height: 100%;}</style></head><body><div id="vd"></div><script type="text/javascript"  src="{_SCRIPT_}" defer><\/script></body></html>',
                this.ui = "ping_reload",
                this.Gi = ()=>{
                    this.Lt("Video from fullscreen"),
                    this.pi && (this.Lt("Reload after full screen"),
                    this.pi = !1,
                    this.zi()),
                    null === this.ni && this.Di()
                }
                ,
                this.Ji = ()=>{
                    this.Lt("Video Tab hidden"),
                    null !== this.ni && (window.clearInterval(this.ni),
                    this.ni = null)
                }
                ,
                this.Ki = ()=>{
                    this.Lt("Video Tab show"),
                    this.pi && (this.Lt("Reload after page show video"),
                    this.pi = !1,
                    this.hi = new Date,
                    window.setTimeout((()=>{
                        this.zi()
                    }
                    ), 0)),
                    null === this.ni && this.Di()
                }
                ,
                this.Yi = t=>{
                    let i = !1;
                    if (null !== this.ai) {
                        const s = this.ai.deref();
                        s && t.source === s.contentWindow && (i = !0)
                    }
                    if (i)
                        if ("object" == typeof t.data) {
                            if ("pro"in t.data && "close"in t.data) {
                                const i = Number(t.data.pro)
                                  , s = Number(t.data.close)
                                  , h = s.toString() + "_" + i.toString();
                                if (this.di !== h) {
                                    let t = !1;
                                    if (i > 0) {
                                        t = i > Math.floor(100 * Math.random()) + 1
                                    }
                                    this.di = s.toString() + "_" + i.toString(),
                                    this.Lt("movieads_close", s, "percent", i, "need", t),
                                    P.emit(this.ki() + S, s, t)
                                }
                            }
                            "fsz"in t.data && P.emit(this.ki() + $, t.data.fsz),
                            "type"in t.data && "intervention" == t.data.type && (this.Lt("Error Reload", t.data),
                            this.zi())
                        } else
                            switch (this.Lt(t.data),
                            t.data) {
                            case "mads_ping":
                                this.hi = new Date,
                                this.ei++;
                                break;
                            case "movieads_offstage":
                                this.ci = !1,
                                P.emit(this.ki() + _);
                                break;
                            case "movieads_onstage":
                                this.ci = !0,
                                P.emit(this.ki() + m);
                                break;
                            case "partner_switch":
                                this.ci = !1,
                                P.emit(this.ki() + v);
                                break;
                            case "movieads_tlr_top":
                                this.ci = !1,
                                P.emit(this.ki() + g);
                                break;
                            case "movieads_tlr_start":
                                this.ci = !1,
                                P.emit(this.ki() + b);
                                break;
                            case "movieads_tlr_stop":
                                this.ci = !1,
                                P.emit(this.ki() + y);
                                break;
                            case "movieads_no_more_ads":
                                this.ci = !1,
                                this.ii = !1,
                                this.xi().Pt().Bi("player_finish", "", ""),
                                this.xi().Pt().Ii() ? this.zi() : this.pi = !0;
                                break;
                            case "movieads_reload":
                                this.ci = !1,
                                this.hi = new Date,
                                P.emit(this.ki() + k);
                                break;
                            case "movieads_ready":
                                this.ii = !0,
                                this.hi = new Date,
                                this.ci = !1,
                                this.oi = 0;
                                const t = ((new Date).getTime() - this.Qt.getTime()) / 1e3;
                                this.Mi(t),
                                P.emit(this.ki() + x);
                                break;
                            case "movieads_adclick":
                                P.emit(this.ki() + j);
                                break;
                            case "small_player_skip":
                                P.emit(this.ki() + C);
                                break;
                            case "mads_full_jmap":
                                this.Lt("time switch short");
                                break;
                            case "mads_empty_jmap":
                                this.Lt("time switch long"),
                                this.Mi(this.Wi)
                            }
                }
            }
            bi() {
                super.bi(),
                P.on(r, this.Gi),
                P.on(e, this.Ji),
                P.on(n, this.Ki),
                this.A ? this.qt = this.Ti() : this.Yt = this.Ti(),
                this.Ht().appendChild(this.yi()),
                window.addEventListener("message", this.Yi, !1),
                this.Pi(),
                this.Di()
            }
            qi(t) {
                this.yi().innerHTML = t
            }
            zi() {
                const t = this.xi().Ht();
                if (this.ci = !1,
                null === t)
                    return this.Lt("workArea null"),
                    void P.emit(this.xi().Bt() + h);
                if (null === t.parentElement)
                    return this.Lt("workArea parentElement"),
                    void P.emit(this.xi().Bt() + h);
                const i = {
                    width: -1,
                    height: -1
                }
                  , s = t.getBoundingClientRect();
                if (null !== s && (s.width && (i.width = s.width),
                s.height && (i.height = s.height)),
                -1 === i.width || -1 === i.height)
                    return this.Lt("workArea bounds", i, s),
                    void P.emit(this.xi().Bt() + h);
                super.zi()
            }
            Ut() {
                if (super.Ut(),
                P.off(r, this.Gi),
                P.off(e, this.Ji),
                P.off(n, this.Ki),
                window.removeEventListener("message", this.Yi, !1),
                null !== this.ni && (window.clearInterval(this.ni),
                this.ni = null),
                null !== this.ai) {
                    const t = this.ai.deref();
                    L(t).then((()=>{
                        this.ai = null
                    }
                    ))
                }
                null !== this.yi() && this.yi().remove()
            }
            Ti(t) {
                let i = this.Ri();
                if (!1 === this.It().R) {
                    i += "&sub_id=" + this.xi().Ft(),
                    i += "&fmt_id=" + this.Gt,
                    !0 === this.It().j && (i += "&fmob=yes"),
                    this.Ni || (i += "&tls=no",
                    i += "&instant=yes"),
                    this.xi().Pt().Fi() && (i += "&fs=yes"),
                    this.It().O && (i += this.It().O),
                    i += "&testad=" + this.It().T,
                    "yes" === this.It().M && (i += "&dbg=" + this.It().M),
                    "yes" === this.It().P && (i += "&sl=" + this.It().P),
                    i += "&nomon=1",
                    i += "&cdiv=" + document.querySelectorAll("div").length,
                    i += "&r=" + encodeURIComponent(location.href),
                    !0 === this.It().A && (i += "&frnd=true");
                    const t = this.xi().Pt().Xi();
                    t && (i += "&maid=" + t)
                }
                return void 0 !== t && (i += t),
                this.Lt("lnk", this.xi().Bt(), i.replace(/^https?:\/\//, "")),
                i
            }
        }
        const U = (t,i=300)=>{
            let s, h, e;
            return function() {
                const n = this
                  , o = arguments;
                s ? (window.clearTimeout(h),
                h = window.setTimeout((()=>{
                    Date.now() - e >= i && (t.apply(n, o),
                    e = Date.now())
                }
                ), Math.max(i - (Date.now() - e), 0))) : (t.apply(n, o),
                e = Date.now(),
                s = !0)
            }
        }
        ;
        class G {
            constructor(t, i) {
                this.Zi = "CrossBase",
                this.Qi = null,
                this.ts = null,
                this.ss = null,
                this.hs = null,
                this.es = null,
                this.ns = null,
                this.os = null,
                this.rs = 0,
                this.ls = !1,
                this.cs = !1,
                this.ds = 90,
                this.us = "",
                this.ws = "",
                this.ps = null,
                this._i = i,
                this.mi = t,
                this.Qi = document.createElement("div")
            }
            _s() {
                try {
                    window.clearInterval(this.rs)
                } catch (t) {}
            }
            vs() {
                if (this.ls = !1,
                this.ds > 0 && !this.ls && !this.cs) {
                    this._s(),
                    this.ls = !0,
                    this.xi().Lt("ttc", this.ds);
                    let t = 1;
                    this.rs = window.setInterval((()=>{
                        if (t === this.ds)
                            return this._s(),
                            this.cs = !0,
                            void P.emit(this.xi().Bt() + a);
                        P.emit(this.xi().Bt() + l, t),
                        t++
                    }
                    ), 1e3)
                }
            }
            Ut() {
                this._s(),
                this.Lt("Что удаляем", this.gs()),
                null !== this.os && (this.os.remove(),
                this.os = null),
                null !== this.ns && (this.ns.remove(),
                this.ns = null),
                null !== this.es && (this.es.remove(),
                this.es = null),
                null !== this.hs && (this.hs.remove(),
                this.hs = null),
                null !== this.ss && (this.ss.remove(),
                this.ss = null),
                null !== this.ts && (this.ts.remove(),
                this.ts = null),
                this.gs().remove(),
                this.Qi = null
            }
            bs() {
                return this.cs
            }
            gs() {
                return this.Qi
            }
            xi() {
                return this.mi
            }
            ys() {
                return this.ts
            }
            ks() {
                return this.es
            }
            xs() {
                return this.ss
            }
            Ss() {
                return this.os
            }
            $s() {
                return this.ns
            }
            js(t, i) {
                (document.body || document.documentElement).style.setProperty("--" + t, i)
            }
            It() {
                return this.xi().Pt().It()
            }
            Lt(...t) {
                return this.xi().Vt(this.Zi, ...t)
            }
        }
        let J = (t=10)=>{
            const i = [...[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"], ...[..."abcdefghijklmnopqrstuvwxyz"]];
            return [...Array(t)].map((t=>i[Math.random() * i.length | 0])).join("")
        }
        ;
        const K = (t,i,s)=>{
            t.setAttributeNS(null, i, s)
        }
          , Y = t=>document.createElementNS("http://www.w3.org/2000/svg", t)
          , q = t=>{
            let i = Y("g");
            K(i, "transform", "rotate(-90,17,17)"),
            B(i, {
                pointerEvents: "none"
            });
            let s = Y("circle");
            return K(s, "cx", "17"),
            K(s, "cy", "17"),
            K(s, "r", "15"),
            K(s, "stroke-width", "2"),
            K(s, "fill", "black"),
            K(s, "stroke-dasharray", "94"),
            K(s, "stroke-dashoffset", "0"),
            K(s, "fill-opacity", "0.4"),
            B(s, {
                stroke: "var(--" + t + ")",
                pointerEvents: "none"
            }),
            i.appendChild(s),
            {
                group: i,
                circle: s
            }
        }
          , X = t=>{
            let i = Y("g");
            i.style.pointerEvents = "none",
            i.style.cursor = "pointer";
            let s = Y("line");
            K(s, "x1", "12"),
            K(s, "y1", "12"),
            K(s, "x2", "22"),
            K(s, "y2", "22"),
            K(s, "stroke-width", "3"),
            K(s, "stroke-linecap", "round"),
            B(s, {
                stroke: "var(--" + t + ")"
            }),
            i.appendChild(s);
            let h = Y("line");
            return K(h, "x1", "12"),
            K(h, "y1", "22"),
            K(h, "x2", "22"),
            K(h, "y2", "12"),
            K(h, "stroke-width", "3"),
            K(h, "stroke-linecap", "round"),
            B(h, {
                stroke: "var(--" + t + ")"
            }),
            i.appendChild(h),
            i
        }
          , Z = t=>{
            let i = Y("text");
            return K(i, "x", "17"),
            K(i, "y", "17"),
            K(i, "text-anchor", "middle"),
            K(i, "alignment-baseline", "central"),
            B(i, {
                font: "bold 14px sans-serif",
                fill: "var(--" + t + ")",
                pointerEvents: "none"
            }),
            i
        }
        ;
        class Q extends G {
            constructor(t, i) {
                super(t, i),
                this.Zi = "cross",
                this.Cs = 94,
                this.Es = 1,
                this.As = !1,
                this.Os = 1,
                this.Rs = !1,
                this.Ts = !1,
                this.Ms = !1,
                this.zs = !1,
                this.Ps = !1,
                this.Ds = !1,
                this.Is = !1,
                this.Fs = !1,
                this.Bs = !1,
                this.Ls = !1,
                this.Vs = null,
                this.Hs = (t=1,i=!1)=>{
                    this.Os = t,
                    this.Ns()
                }
                ,
                this.Ws = ()=>{
                    this.Is || this.Ns()
                }
                ,
                this.Us = ()=>{
                    this.Ns()
                }
                ,
                this.Gs = ()=>{
                    this.Ps = !0,
                    this.Ns()
                }
                ,
                this.Js = ()=>{
                    this.Ps = !1,
                    this.Ns()
                }
                ,
                this.Ks = ()=>{
                    this.Es = 1,
                    this.Ns()
                }
                ,
                this.Ys = ()=>{
                    this.Es = 1,
                    this.Ns()
                }
                ,
                this.qs = ()=>{
                    this.Fs && (this.Fs = !1,
                    P.off(this.Xs() + j, this.qs),
                    this.Ns())
                }
                ,
                this.Zs = (t=1,i=!1)=>{
                    this.Es = t,
                    this.Fs ? this.As = i : this.As = !1,
                    this.Ns()
                }
                ,
                this.Qs = ()=>{
                    this.Is || this.Ns()
                }
                ,
                this.th = ()=>{
                    this.Ns()
                }
                ,
                this.hh = ()=>{
                    this.Lt("Tick Finish", this.ds),
                    this.It().J.rt ? this.ps = this.xs() : this.ps = this.ks(),
                    K(this.xs(), "stroke-dashoffset", "0"),
                    this.It().J.ot && (B(this.ys(), {
                        height: ""
                    }),
                    B(this.$s(), {
                        transform: ""
                    })),
                    this.Fs && P.on(this.Xs() + j, this.qs),
                    this.ps.addEventListener("click", this.eh, !1),
                    this.Lt("_$btnClick", this.ps),
                    this.Ns()
                }
                ,
                this.nh = t=>{
                    if (this.It().J.ot)
                        this.ns.innerHTML = (this.ds - t).toString();
                    else {
                        let i = this.Cs - t * (this.Cs / this.ds);
                        K(this.xs(), "stroke-dashoffset", i.toString()),
                        this.Lt("Tick", t, this.ds, i)
                    }
                }
                ,
                this.oh = t=>{
                    this.Ms === t.s && this.Ts === t.m && this.zs === t.h && this.Ds === t.w && this.Is === t.kill || (this.Ms = t.s,
                    this.Ts = t.m,
                    this.zs = t.h,
                    this.Ds = t.w,
                    this.Is = t.kill,
                    this.Lt("Change mode Set", "s", this.Ms, "m", this.Ts, "sp", this.zs, "w", this.Ds, "kill", this.Is),
                    this.Ns())
                }
                ,
                this.eh = ()=>{
                    this.Lt("Click на крестик"),
                    this.It().J.gt = !1,
                    null !== this.Vs && (this.Vs.style.display = "none"),
                    P.emit(this.xi().Bt() + c)
                }
                ,
                this.rh = ()=>this.Vs,
                this.Xs = ()=>this.xi().Bt() + "_video",
                this.ah = ()=>this.xi().Bt() + "_banner",
                this.xi = ()=>this.mi,
                this.It = ()=>this.xi().Pt().It(),
                this.ds = this.It().J.nt,
                this.us = J(10),
                this.ws = J(10),
                this.js(this.us, this.It().J.tt),
                this.js(this.ws, ""),
                B(this.gs(), {
                    zIndex: "10000",
                    position: "absolute",
                    width: "34px",
                    height: "34px",
                    cursor: "pointer",
                    pointerEvents: "none",
                    backgroundColor: "var(--" + this.ws + ")"
                }),
                this.ts = Y("svg"),
                K(this.ts, "width", "34"),
                K(this.ts, "height", "34"),
                B(this.ts, {
                    pointerEvents: "none"
                });
                const s = q(this.us);
                if (this.ss = s.circle,
                this.hs = s.group,
                this.ts.appendChild(this.hs),
                this.es = X(this.us),
                this.ts.appendChild(this.es),
                this.os = (()=>{
                    const t = Y("g");
                    t.style.pointerEvents = "none",
                    t.style.cursor = "pointer",
                    t.style.display = "none";
                    let i = Y("ellipse");
                    return K(i, "cx", "17"),
                    K(i, "cy", "17"),
                    K(i, "rx", "8"),
                    K(i, "ry", "8"),
                    K(i, "stroke", "#FF0000"),
                    K(i, "stroke-width", "2"),
                    K(i, "stroke-linecap", "round"),
                    K(i, "fill", "black"),
                    t.appendChild(i),
                    B(i, {
                        fillOpacity: "0"
                    }),
                    i = Y("line"),
                    K(i, "x1", "11"),
                    K(i, "y1", "11"),
                    K(i, "x2", "21"),
                    K(i, "y2", "21"),
                    K(i, "stroke", "#FF0000"),
                    K(i, "stroke-width", "2"),
                    K(i, "stroke-linecap", "round"),
                    t.appendChild(i),
                    t
                }
                )(),
                this.ts.appendChild(this.os),
                this.ns = Z(this.us),
                this.ts.appendChild(this.ns),
                this.gs().appendChild(this.ts),
                this._i.appendChild(this.gs()),
                this.Vs = document.createElement("div"),
                this.It().J.gt && (this.Vs.innerText = this.xi().Pt().uh().At,
                B(this.Vs, {
                    display: "none",
                    width: "100%",
                    height: "34px",
                    backgroundColor: this.It().J.et,
                    bottom: 0,
                    textAlign: "center",
                    color: "var(--" + this.us + ")",
                    lineHeight: "34px",
                    "font-family": "sans-serif",
                    "font-size": "13px",
                    fontVariant: "small-caps",
                    "pointer-events": "auto",
                    zIndex: 10
                })),
                this.Ts || this.wh(),
                this.It().J.lt,
                P.on(this.Xs() + g, this.Gs),
                P.on(this.Xs() + y, this.Js),
                P.on(this.xi().Bt() + p, this.oh),
                P.on(this.xi().Bt() + l, this.nh),
                P.on(this.xi().Bt() + a, this.hh),
                P.on(this.Xs() + m, this.th),
                P.on(this.Xs() + _, this.Qs),
                P.on(this.Xs() + S, this.Zs),
                P.on(this.Xs() + v, this.Ys),
                P.on(this.Xs() + b, this.Ks),
                P.on(this.Xs() + g, this.Ks),
                P.on(this.ah() + O, this.Us),
                P.on(this.ah() + A, this.Ws),
                P.on(this.ah() + R, this.Hs),
                this.It().J.Z) {
                    let t = 0;
                    if (this.It().J.dt > 0 && (this.Fs = !0,
                    t = Math.floor(100 * Math.random()) + 1,
                    this.It().J.dt > t && (this.Bs = !0)),
                    this.Lt("Proclick", "Setting", this.It().J.dt, "Random", t, "Status", this.Fs),
                    this.It().J.ot)
                        this.ns.innerHTML = this.ds.toString(),
                        B(this.$s(), {
                            display: ""
                        }),
                        B(this.ks(), {
                            display: "none"
                        });
                    else {
                        let t = this.Cs;
                        this.Lt("start tick", t),
                        K(this.xs(), "stroke-dashoffset", t.toString())
                    }
                    this.vs()
                }
            }
            Ns() {
                this.Ms ? this.Ts ? this.fh() : this.ph() : this._h()
            }
            ph() {
                null !== this.Vs && (this.Vs.style.display = "none");
                let t = {
                    display: ""
                }
                  , i = {
                    display: "none"
                }
                  , s = {
                    display: ""
                }
                  , h = {
                    display: "none"
                }
                  , e = "none";
                this.bs() ? e = "auto" : this.It().J.ot && (s = {
                    display: "none"
                },
                i = {
                    display: ""
                });
                let n = !1
                  , o = !1;
                this.xi().mh()?.$i() && (n = !0),
                this.xi().gh()?.$i() && (o = !0);
                let r = 1;
                switch (n ? r = this.Es : o && (r = this.Os),
                r) {
                case 0:
                    t = {
                        display: "none"
                    };
                    break;
                case 1:
                case 2:
                    this.wh();
                    break;
                case 3:
                    this.bh()
                }
                if (n || o)
                    switch (this.Fs && (this.Ls || (this.Bs || n && this.As || o && this.Rs) && (e = "none")),
                    r) {
                    case 0:
                        this.It().J.lt ? (Object.assign(i, {
                            display: ""
                        }),
                        Object.assign(s, {
                            display: "none"
                        })) : Object.assign(t, {
                            display: "none"
                        });
                        break;
                    case 1:
                        break;
                    case 2:
                        Object.assign(h, {
                            display: ""
                        }),
                        Object.assign(s, {
                            display: "none"
                        });
                        break;
                    case 3:
                        this.bs() && (e = "auto")
                    }
                else
                    (this.Ts || this.zs) && Object.assign(t, {
                        display: "none"
                    });
                if (null !== this.ps) {
                    let i = {
                        "pointer-events": e
                    };
                    this.Ds && Object.assign(t, {
                        display: "none"
                    }),
                    B(this.ps, i)
                }
                null !== this.gs() && (B(this.Ss(), h),
                B(this.$s(), i),
                B(this.ks(), s),
                B(this.gs(), t))
            }
            fh() {
                let t = {
                    display: ""
                }
                  , i = {
                    display: "none"
                }
                  , s = {
                    display: ""
                }
                  , h = {
                    display: "none"
                }
                  , e = "none";
                this.bs() ? e = "auto" : this.It().J.ot && (s = {
                    display: "none"
                },
                i = {
                    display: ""
                }),
                this.js(this.ws, "");
                let n = !1
                  , o = !1;
                if (this.xi().mh()?.$i() && (n = !0),
                this.xi().gh()?.$i() && (o = !0),
                n || o) {
                    this.Fs && (this.Ls || (this.Bs || n && this.As || o && this.Rs) && (e = "none")),
                    null !== this.Vs && (this.Vs.style.display = "none");
                    let i = 1;
                    switch (n ? i = this.Es : o && (i = this.Os),
                    i) {
                    case 0:
                        Object.assign(t, {
                            display: "none"
                        });
                        break;
                    case 1:
                        this.wh();
                        break;
                    case 2:
                        this.wh(),
                        e = "none",
                        Object.assign(h, {
                            display: ""
                        }),
                        Object.assign(s, {
                            display: "none"
                        });
                        break;
                    case 3:
                        e = "auto",
                        this.bh()
                    }
                } else
                    this.It().J.gt ? null !== this.Vs && (this.zs ? (this.Vs.style.display = "none",
                    Object.assign(t, {
                        display: "none"
                    })) : this.Ps ? (Object.assign(t, {
                        display: "none"
                    }),
                    this.Vs.style.display = "none") : (this.Vs.style.display = "",
                    this.yh())) : Object.assign(t, {
                        display: "none"
                    });
                if (null !== this.ps) {
                    let i = {
                        "pointer-events": e
                    };
                    this.Ds && Object.assign(t, {
                        display: "none"
                    }),
                    B(this.ps, i)
                }
                null !== this.gs() && (B(this.Ss(), h),
                B(this.$s(), i),
                B(this.ks(), s),
                B(this.gs(), t))
            }
            _h() {
                null !== this.Vs && (this.Vs.style.display = "none"),
                this.wh();
                let t = {
                    display: ""
                }
                  , i = {
                    display: "none"
                }
                  , s = {
                    display: ""
                }
                  , h = {
                    display: "none"
                }
                  , e = "none";
                this.bs() ? e = "auto" : this.It().J.ot && (s = {
                    display: "none"
                },
                i = {
                    display: ""
                });
                let n = !1
                  , o = !1;
                this.xi().mh()?.$i() && (n = !0),
                this.xi().gh()?.$i() && (o = !0);
                let r = 1;
                switch (n ? r = this.Es : o && (r = this.Os),
                (n || o) && this.Fs && (this.Ls || (this.Bs || n && this.As || o && this.Rs) && (e = "none")),
                r) {
                case 0:
                case 3:
                    Object.assign(t, {
                        display: "none"
                    });
                    break;
                case 1:
                    this.xi().kh();
                    break;
                case 2:
                    e = "none",
                    Object.assign(h, {
                        display: ""
                    }),
                    Object.assign(s, {
                        display: "none"
                    })
                }
                if (null !== this.ps) {
                    let t = {
                        "pointer-events": e
                    };
                    B(this.ps, t)
                }
                this.Is && Object.assign(t, {
                    display: "none"
                }),
                null !== this.gs() && (B(this.Ss(), h),
                B(this.$s(), i),
                B(this.ks(), s),
                B(this.gs(), t))
            }
            xh() {}
            Sh() {}
            yh() {
                this.js(this.us, this.It().J.ht);
                let t = {
                    left: "",
                    right: "0",
                    marginTop: "",
                    marginRight: ""
                };
                B(this.$s(), {
                    transform: ""
                }),
                this.It().J.kt ? Object.assign(t, {
                    top: "0",
                    bottom: ""
                }) : Object.assign(t, {
                    top: "",
                    bottom: "0"
                }),
                B(this.gs(), t)
            }
            $h() {}
            bh() {
                this.Lt("_posTopRight"),
                B(this.gs(), {
                    top: "-34px",
                    left: "",
                    right: "0",
                    marginTop: "",
                    marginRight: ""
                }),
                this.js(this.us, this.It().J.st),
                this.js(this.ws, this.It().J.it),
                this.It().J.ot && !this.bs() && (B(this.ys(), {
                    height: ""
                }),
                B(this.$s(), {
                    transform: ""
                }))
            }
            jh() {}
            wh() {
                this.js(this.us, this.It().J.tt),
                this.js(this.ws, "");
                let t = 30;
                !0 === this.It().j && (t = 20),
                B(this.gs(), {
                    top: "0px",
                    left: "",
                    right: "0px",
                    marginTop: t + "px",
                    marginRight: t + "px"
                }),
                this.It().J.ot && !this.bs() && (B(this.ys(), {
                    height: "55px",
                    transform: ""
                }),
                B(this.$s(), {
                    transform: "translateY(30px)"
                }))
            }
            Ut() {
                null !== this.ps && (this.ps.removeEventListener("click", this.eh, !1),
                this.ps = null),
                P.off(this.Xs() + g, this.Gs),
                P.off(this.Xs() + y, this.Js),
                P.off(this.xi().Bt() + p, this.oh),
                P.off(this.xi().Bt() + l, this.nh),
                P.off(this.xi().Bt() + a, this.hh),
                P.off(this.Xs() + m, this.th),
                P.off(this.Xs() + _, this.Qs),
                P.off(this.Xs() + S, this.Zs),
                P.off(this.Xs() + v, this.Ys),
                P.off(this.Xs() + b, this.Ks),
                P.off(this.Xs() + g, this.Ks),
                P.off(this.Xs() + j, this.qs),
                P.off(this.ah() + O, this.Us),
                P.off(this.ah() + A, this.Ws),
                P.off(this.ah() + R, this.Hs),
                this.It().J.gt && (this.Vs.remove(),
                this.Vs = null),
                super.Ut()
            }
        }
        class tt extends N {
            constructor(t, i) {
                super(t, i),
                this.Tt = "banner",
                this.Xt = '<!DOCTYPE html><html  lang="en"><head><title></title><meta charset="utf-8"><style>html,body{background-color: black;  position: relative;width: 100%;height: 100%;}#bn {position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);}</style></head><body><div id="bn"></div><script type="text/javascript"  defer  src="{_SCRIPT_}"><\/script></body></html>',
                this.ui = "ping_banner_reload",
                this.Gi = ()=>{
                    this.Lt("Banner from fullscreen"),
                    this.pi && (this.Lt("Reload after full screen"),
                    this.pi = !1,
                    this.zi()),
                    null === this.ni && this.Di()
                }
                ,
                this.Ji = ()=>{
                    this.Lt("Banner Tab hidden"),
                    null !== this.ni && (window.clearInterval(this.ni),
                    this.ni = null)
                }
                ,
                this.Ki = ()=>{
                    this.Lt("Banner Tab show"),
                    this.pi && (this.Lt("Reload after page show banner"),
                    this.pi = !1,
                    this.hi = new Date,
                    window.setTimeout((()=>{
                        this.zi()
                    }
                    ), 0)),
                    null === this.ni && this.Di()
                }
                ,
                this.Yi = t=>{
                    let i = !1;
                    if (null !== this.ai) {
                        const s = this.ai.deref();
                        s && s.contentWindow === t.source && (i = !0)
                    }
                    if (i)
                        if ("object" == typeof t.data) {
                            if ("pro"in t.data && "close"in t.data) {
                                const i = Number(t.data.pro)
                                  , s = Number(t.data.close)
                                  , h = s.toString() + "_" + i.toString();
                                if (this.di !== h) {
                                    let t = !1;
                                    if (i > 0) {
                                        t = i > Math.floor(100 * Math.random()) + 1
                                    }
                                    this.Lt("movieads_close", s, "percent", i, "need", t),
                                    this.di = s.toString() + "_" + i.toString(),
                                    P.emit(this.ki() + R, s, t)
                                }
                            }
                        } else
                            switch (this.Lt(t.data),
                            t.data) {
                            case "mads_ping_banner":
                                this.hi = new Date,
                                this.ei++;
                                break;
                            case "banner_close0":
                                P.emit(this.ki() + R, 0);
                                break;
                            case "banner_close1":
                                P.emit(this.ki() + R, 1);
                                break;
                            case "banner_offstage":
                                this.ci = !1,
                                this.hi = new Date,
                                P.emit(this.ki() + A);
                                break;
                            case "banner_onstage":
                                this.ci = !0,
                                P.emit(this.ki() + O);
                                break;
                            case "banner_ready":
                                this.ii = !0,
                                this.ci = !1,
                                this.oi = 0,
                                this.hi = new Date;
                                const t = ((new Date).getTime() - this.Qt.getTime()) / 1e3;
                                this.Mi(t),
                                P.emit(this.ki() + E);
                                break;
                            case "banner_reload":
                                this.ci = !1,
                                this.ii = !1,
                                this.xi().Pt().Ii() ? (P.emit(this.ki() + T),
                                this.zi()) : this.pi = !0
                            }
                }
            }
            bi() {
                if (super.bi(),
                P.on(r, this.Gi),
                P.on(e, this.Ji),
                P.on(n, this.Ki),
                this.A ? this.qt = this.Ti() : this.Yt = this.Ti(),
                this.Kt) {
                    const t = this.Ht();
                    null !== t && t.parentNode?.replaceChild(this.yi(), this.Ht())
                } else
                    this.Ht().appendChild(this.yi());
                window.addEventListener("message", this.Yi, !1),
                this.Pi(),
                this.Di()
            }
            Ch(t) {
                if (this.ii && this.ai)
                    try {
                        const i = this.ai.deref()
                          , s = i.contentWindow || i.contentDocument.document || i.contentDocument;
                        s ? s.setBusy && "function" == typeof s.setBusy ? (s.setBusy(t),
                        this.Lt("set Busy ", t)) : this.Lt("set Busy function not found") : this.Lt("set Busy contentWindow not found")
                    } catch (t) {
                        this.Lt("set Busy error", t)
                    }
                else
                    this.Lt("set Busy error not ready or frame")
            }
            Ti(t) {
                let i = this.Ri();
                if (!1 === this.It().R) {
                    i += "&sub_id=" + this.xi().Ft(),
                    i += "&fmt_id=" + this.Gt,
                    i += "&pl_key=" + this.Jt,
                    !0 === this.It().j && (i += "&fmob=yes"),
                    i += "&testad=" + this.It().T,
                    "yes" === this.It().M && (i += "&dbg=" + this.It().M),
                    "yes" === this.It().P && (i += "&sl=" + this.It().P),
                    i += "&r=" + encodeURIComponent(location.href);
                    const t = this.xi().Pt().Xi();
                    t && (i += "&maid=" + t)
                }
                return void 0 !== t && (i += t),
                this.Lt("lnk", this.xi().Bt(), i.replace(/^https?:\/\//, "")),
                i
            }
            zi() {
                const t = this.xi().Ht();
                if (null === t)
                    return this.Lt("workArea null"),
                    void P.emit(this.xi().Bt() + h);
                if (null === t.parentElement)
                    return this.Lt("workArea notparent"),
                    void P.emit(this.xi().Bt() + h);
                const i = {
                    width: -1,
                    height: -1
                }
                  , s = t.getBoundingClientRect();
                if (null !== s && (s.width && (i.width = s.width),
                s.height && (i.height = s.height)),
                -1 === i.width || -1 === i.height)
                    return this.Lt("workArea bounds", s),
                    this.ci = !1,
                    void P.emit(this.xi().Bt() + h);
                super.zi()
            }
            Ut() {
                if (super.Ut(),
                P.off(r, this.Gi),
                P.off(e, this.Ji),
                P.off(n, this.Ki),
                window.removeEventListener("message", this.Yi, !1),
                null !== this.ni && (window.clearInterval(this.ni),
                this.ni = null),
                null !== this.ai) {
                    const t = this.ai.deref();
                    L(t).then((()=>{
                        this.ai = null
                    }
                    ))
                }
                null !== this.yi() && this.yi().remove()
            }
        }
        class it extends G {
            constructor(t, i) {
                super(t, i),
                this.us = "",
                this.Eh = 1,
                this.Zi = "crossFake",
                this.Ts = !1,
                this.Ms = !1,
                this.zs = !1,
                this.Ah = t=>{
                    this.Eh !== t && (this.Eh = t,
                    this.Ns())
                }
                ,
                this.Oh = t=>{
                    this.Ms === t.s && this.Ts === t.m && this.zs === t.h || (this.Ms = t.s,
                    this.Ts = t.m,
                    this.zs = t.h,
                    this.xi().Lt("Change fake mode ", "s", this.Ms, "m", this.Ts, "sp", this.zs),
                    this.Ns())
                }
                ,
                this.us = J(10),
                this.js(this.us, this.It().J.tt),
                B(this.gs(), {
                    zIndex: "10000",
                    position: "absolute",
                    top: 0,
                    width: "34px",
                    height: "34px",
                    right: 0,
                    cursor: "pointer",
                    pointerEvents: "none"
                });
                const s = Y("svg");
                K(s, "width", "34"),
                K(s, "height", "34"),
                B(s, {
                    transform: "rotate(-90deg)",
                    pointerEvents: "none"
                }),
                s.appendChild(X(this.us)),
                this.gs().appendChild(s),
                this._i.appendChild(this.gs()),
                P.on(this.xi().Bt() + "_video" + S, this.Ah),
                P.on(this.xi().Bt() + p, this.Oh)
            }
            Ns() {
                this.Ms ? this.Ts ? this.fh() : this.ph() : this.Ts ? this.xh() : this._h()
            }
            ph() {
                let t = {
                    top: "0px",
                    display: "none",
                    left: "",
                    right: "0px",
                    marginTop: "25px",
                    marginRight: "25px"
                };
                if (this.It().J.lt && this.It().J.ct && (Object.assign(t, {
                    display: "",
                    marginTop: "25px",
                    marginRight: "25px"
                }),
                0 === this.Eh))
                    Object.assign(t, {
                        display: "none"
                    });
                B(this.gs(), t)
            }
            fh() {
                B(this.gs(), {
                    top: "0px",
                    display: "none",
                    left: "",
                    right: "0px",
                    marginTop: "25px",
                    marginRight: "25px"
                })
            }
            _h() {
                B(this.gs(), {
                    top: "0px",
                    display: "none",
                    left: "",
                    right: "0px",
                    marginTop: "25px",
                    marginRight: "25px"
                })
            }
            xh() {}
            xi() {
                return this.mi
            }
            Ut() {
                P.off(this.xi().Bt() + "_video" + S, this.Ah),
                P.off(this.xi().Bt() + p, this.Oh),
                super.Ut()
            }
        }
        class st extends D {
            constructor(t) {
                super(t),
                this.Tt = "Autoplay",
                this.Mt = "ap",
                this.Rh = null,
                this.Th = 100,
                this.Mh = null,
                this.zh = null,
                this.Ph = null,
                this.Dh = null,
                this.Ih = null,
                this.Fh = null,
                this.Ms = !1,
                this.Ts = !1,
                this.zs = !1,
                this.Bh = !1,
                this.Lh = !1,
                this.Vh = !1,
                this.Hh = null,
                this.Nh = null,
                this.Z = null,
                this.Wh = null,
                this.Uh = 450,
                this.Gh = null,
                this.Jh = !1,
                this.Kh = !1,
                this.Yh = 0,
                this.qh = 30,
                this.Xh = !1,
                this.Zh = !1,
                this.q = 0,
                this.X = 0,
                this._t = 0,
                this.vt = 0,
                this.Qh = ()=>{
                    window.setTimeout((()=>{
                        this.te()
                    }
                    ), 0)
                }
                ,
                this.ie = ()=>{
                    this.Zh || (window.requestAnimationFrame((()=>{
                        this.se(),
                        this.Zh = !1
                    }
                    )),
                    this.Zh = !0)
                }
                ,
                this.he = ()=>{
                    this.zs = !0,
                    this.Yh = (new Date).getTime(),
                    this.Kh = !0;
                    let t = !1;
                    switch (this.Hh && this.Hh.$i() && (t = !0),
                    this.Lt("click test", this.It().J.ut, "stick", this.Ms, t),
                    this.It().J.ut) {
                    case 0:
                        t ? this.Xh = !0 : P.emit(this.Bt() + h);
                        break;
                    case 1:
                        if (this.Ms) {
                            if (this.Jh) {
                                if (!t)
                                    return void P.emit(this.Bt() + h);
                                this.Xh = !0
                            }
                            this.Jh = !0
                        } else
                            t ? this.Xh = !0 : P.emit(this.Bt() + h)
                    }
                    this.ee()
                }
                ,
                this.ne = ()=>{
                    if (null !== this._i) {
                        const t = {
                            position: "fixed",
                            opacity: "1",
                            background: "",
                            pointerEvents: "none",
                            minWidth: "",
                            minHeight: "",
                            width: this._t + "px",
                            height: this.vt + "px",
                            top: "",
                            bottom: "0",
                            left: "",
                            right: "0",
                            margin: "0",
                            zIndex: "2147483647"
                        };
                        this.Lt("switch to fullscreen"),
                        this.It().J.wt && (this.Ts = !1,
                        this.oe(),
                        this.Ms = !0),
                        F(this._i, t)
                    }
                }
                ,
                this.Gi = ()=>{
                    if (null !== this._i)
                        if (this.Lt("switch from fullscreen"),
                        this.It().J.wt)
                            ;
                        else {
                            const t = {
                                position: "relative",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%"
                            };
                            F(this._i, t)
                        }
                }
                ,
                this.re = ()=>{
                    let t = !1;
                    if ("maxTouchPoints"in navigator)
                        t = navigator.maxTouchPoints > 0;
                    else if ("msMaxTouchPoints"in navigator)
                        t = navigator.msMaxTouchPoints > 0;
                    else {
                        const i = window.matchMedia && matchMedia("(pointer:coarse)");
                        if (i && "(pointer:coarse)" === i.media)
                            t = !!i.matches;
                        else if ("orientation"in window)
                            t = !0;
                        else {
                            const i = navigator.userAgent;
                            t = /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(i) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(i)
                        }
                    }
                    return t
                }
                ,
                this.le = ()=>{
                    if (!this.Vh) {
                        this.Vh = !0;
                        const t = {
                            width: -1,
                            height: -1,
                            data: []
                        };
                        if (null !== this._i) {
                            const i = this._i.getBoundingClientRect();
                            i.width && (t.width = i.width),
                            i.height && (t.height = i.height),
                            t.data = i.toJSON()
                        }
                        let i = "innerHeight"in window ? window.innerHeight : document.documentElement.offsetHeight
                          , s = "innerHeight"in window ? window.innerWidth : document.documentElement.offsetWidth
                          , h = 0
                          , e = 0;
                        window.visualViewport && (e = window.visualViewport.width,
                        h = window.visualViewport.height);
                        let n = !1;
                        this._i && (n = !0);
                        const o = {
                            det: this.re(),
                            docr: document.readyState,
                            scroll: window.scrollY,
                            s: this.Mt,
                            m: this.It().j,
                            l: location.href,
                            fs: this.Pt().Fi(),
                            c_sty: {
                                det: n,
                                sw: t.width ? t.width : "",
                                sh: t.height ? t.height : "",
                                sd: t.data,
                                p: this._i?.style.position ? this._i.style.position : "",
                                w: this._i?.style.width ? this._i.style.width : "",
                                h: this._i?.style.height ? this._i.style.height : "",
                                d: this._i?.style.display ? this._i.style.display : "",
                                t: this._i?.style.top ? this._i.style.top : "",
                                b: this._i?.style.bottom ? this._i.style.bottom : "",
                                l: this._i?.style.left ? this._i.style.left : "",
                                r: this._i?.style.right ? this._i.style.right : "",
                                z: this._i?.style.zIndex ? this._i.style.zIndex : ""
                            },
                            scr: {
                                w: screen.width ? screen.width : "",
                                h: screen.height ? screen.height : "",
                                c: screen.colorDepth ? screen.colorDepth : "",
                                iw: s,
                                ih: i,
                                vvw: e,
                                vvh: h
                            },
                            nav: {
                                ua: navigator.userAgent ? navigator.userAgent : "",
                                l: navigator.language ? navigator.language : "",
                                p: navigator.platform ? navigator.platform : "",
                                o: navigator.oscpu ? navigator.oscpu : "",
                                d: navigator.doNotTrack ? navigator.doNotTrack : "",
                                v: navigator.vendor ? navigator.vendor : ""
                            },
                            sl_v: {},
                            sl_b: {}
                        };
                        null !== this.Hh && (o.sl_v = this.Hh.ji()),
                        null !== this.Nh && (o.sl_b = this.Nh.ji());
                        const r = JSON.stringify(o);
                        this.Pt().Bi("container", "info", r),
                        this.ee()
                    }
                }
                ,
                this.qs = ()=>{}
                ,
                this.hh = ()=>{
                    this.It().J.Z && this.It().J.ct && null !== this.Wh && (this.Wh.Ut(),
                    this.Wh = null)
                }
                ,
                this.ae = ()=>{
                    this.se(),
                    null !== this.Nh && (this.Nh.$i() ? this.Nh.Ch(!1) : (this.Hh.Ei(),
                    this.Nh.Ai(),
                    this.Hh.Ci()))
                }
                ,
                this.th = ()=>{
                    this.ce(),
                    this.se(),
                    this.Hh.Ei(),
                    null !== this.Nh && (this.Nh.Ch(!0),
                    this.Nh.Ai()),
                    this.kh() && this.Hh.Ci(),
                    this.Kh || this.Ns()
                }
                ,
                this.Qs = ()=>{
                    this.Xh ? P.emit(this.Bt() + h) : (null !== this.Nh && (this.Nh.Ch(!1),
                    this.Nh.$i() ? (this.Nh.Ei(),
                    this.Hh.Ai()) : (this.Hh.Ei(),
                    this.Nh.Ai(),
                    this.Nh.Ci(),
                    this.Hh.Ci())),
                    this.Ns())
                }
                ,
                this.de = t=>{
                    this.ue(t)
                }
                ,
                this.we = ()=>{
                    this.Gh = null,
                    this.Ns()
                }
                ,
                this.Gs = ()=>{
                    this.Bh = !0,
                    this.Lh = !0,
                    this.Hh.Ci(),
                    this.Hh.Ei(),
                    null !== this.Nh && (this.Nh.Ci(),
                    this.Nh.Ch(!0),
                    this.Nh.Ai()),
                    this.Ns()
                }
                ,
                this.Js = ()=>{
                    this.Bh = !1,
                    this.Lh = !1,
                    null !== this.Nh && (this.Nh.Ch(!1),
                    this.Nh.$i() ? (this.Hh.Ai(),
                    this.Nh.Ei()) : (this.Hh.Ei(),
                    this.Nh.Ai())),
                    this.Ns()
                }
                ,
                this.Ks = ()=>{
                    this.Bh = !0,
                    null !== this.Nh && (this.Nh.Ch(!1),
                    this.Nh.$i() ? (this.Hh.Ai(),
                    this.Nh.Ei()) : (this.Hh.Ei(),
                    this.Nh.Ai())),
                    this.Ns()
                }
                ,
                this.fe = ()=>{
                    this.Bh = !1,
                    this.Lh = !1,
                    null !== this.Nh && (this.Nh.Ch(!1),
                    this.Nh.$i() ? (this.Hh.Ai(),
                    this.Nh.Ei()) : (this.Hh.Ei(),
                    this.Nh.Ai())),
                    this.Ns()
                }
                ,
                this.Us = ()=>{
                    this.Lh || (this.ce(),
                    this.Kh || null !== this.Hh && this.Hh.$i() || (this.se(),
                    null !== this.Nh && (this.Nh.Ch(!1),
                    this.Nh.$i() && (this.Nh.Ei(),
                    this.Hh?.Ai())),
                    this.Ns()))
                }
                ,
                this.pe = ()=>{
                    null !== this.Hh ? this.Hh.$i() ? this.Nh.Ch(!0) : this.Nh.Ch(!1) : (this.Nh.Ch(!1),
                    this.Nh.Ei())
                }
                ,
                this._e = ()=>{
                    null !== this.Hh && (this.Hh.Ei(),
                    this.Nh.Ai()),
                    this.Ns()
                }
                ,
                this.Ws = ()=>{
                    this.Xh || (this.Nh.Ci(),
                    this.Hh && this.Hh.Si() ? (this.Nh.Ai(),
                    this.Hh.Ei(),
                    this.Ms && this.Ts && (this.Hh.Ci(),
                    this.Nh.Ci())) : this.Ms && this.Ts && this.Nh.Ci(),
                    this.Ns())
                }
                ,
                this.Ns = U((()=>{
                    this.Lt("resize ok"),
                    this.ee()
                }
                ), 100),
                this.kh = ()=>this.Bh || this.Lh,
                this.mh = ()=>this.Hh,
                this.gh = ()=>this.Nh,
                this.zh = document.createElement("div"),
                this._i = document.createElement("div"),
                P.once(i, this.Qh)
            }
            me() {
                P.on(o, this.ne),
                P.on(r, this.Gi),
                P.on(this.Xs() + x, this.ae),
                P.on(this.Xs() + m, this.th),
                P.on(this.Xs() + _, this.Qs),
                P.on(this.Xs() + b, this.Ks),
                P.on(this.Xs() + g, this.Gs),
                P.on(this.Xs() + y, this.Js),
                P.on(this.Xs() + v, this.we),
                P.on(this.Xs() + $, this.de),
                P.on(this.Xs() + j, this.qs),
                P.on(this.Xs() + k, this.fe),
                P.once(this.Xs() + C, this.le),
                P.on(this.ah() + E, this.pe),
                P.on(this.ah() + O, this.Us),
                P.on(this.ah() + A, this.Ws),
                P.on(this.ah() + T, this._e),
                P.once(this.Bt() + a, this.hh),
                P.on(this.Bt() + c, this.he)
            }
            ce() {
                this.Kh && ((new Date).getTime() - this.Yh) / 1e3 >= this.qh && (this.Yh = 0,
                this.Kh = !1)
            }
            se() {
                if (this.It().J.wt && window.visualViewport)
                    if (window.innerWidth !== window.visualViewport.width) {
                        if (null !== this._i) {
                            let t = "innerHeight"in window ? window.innerHeight : document.documentElement.offsetHeight;
                            const i = Math.max(0, window.visualViewport.offsetLeft);
                            let s = 0;
                            document.body.scrollHeight > window.innerHeight && (s = document.body.scrollWidth - window.innerWidth,
                            s < 2 && (s = 0));
                            const h = Math.max(0, t - window.visualViewport.height - window.visualViewport.offsetTop - s);
                            document.body.scrollHeight,
                            window.innerHeight,
                            window.visualViewport.offsetTop >= 0 || window.visualViewport.offsetLeft >= 0 ? this._i.style.transform = 0 === i && 0 === h ? "" : `translate(${i}px,-${h}px)` : this._i.style.transform = ""
                        }
                    } else
                        null !== this._i && (this._i.style.transform = "")
            }
            Xs() {
                return this.Bt() + "_video"
            }
            ah() {
                return this.Bt() + "_banner"
            }
            ve() {
                return this.zh
            }
            ge() {
                return this.Rh
            }
            Ht() {
                return this._i
            }
            be() {
                return this.Dh
            }
            ue(t) {
                "object" == typeof t && null !== t && "x"in t && "y"in t && (this.Gh = {
                    width: t.x + "px",
                    height: t.y + "px"
                },
                this.Lt("Новый размер ->", this.Gh),
                !this.Ts && this.Ms && this.Ns())
            }
            te() {
                this.Lt("start");
                this.ye().then((t=>{
                    if (this.me(),
                    null === this._i)
                        return;
                    this.Rh = t,
                    this.Lt("_initPositionContainer ok"),
                    this.ke();
                    let i = {
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "nowrap",
                        height: "100%",
                        position: "relative",
                        flexDirection: "column",
                        pointerEvents: "none",
                        transition: "none"
                    }
                      , s = {
                        width: "100%",
                        position: "static",
                        height: this.X + "px",
                        display: "block"
                    };
                    if (this.It().J.wt && (Object.assign(i, {
                        width: this._t + "px",
                        height: this.vt + "px"
                    }),
                    this.It().J.ft > 0 && (s.display = "none"),
                    this.Lt("Stick", window.movieadsDockParams),
                    void 0 !== window.movieadsDockParams && (this.Lt("Stick", window.movieadsDockParams),
                    "stickTo"in window.movieadsDockParams && "" !== window.movieadsDockParams.stickTo))) {
                        const t = document.querySelector(window.movieadsDockParams.stickTo);
                        null !== t && (this.Mh = t,
                        this.Lt("Stick", this.Mh))
                    }
                    if (B(this.ge(), s),
                    B(this._i, i),
                    B(this.ve(), {
                        width: "100%",
                        height: "100%",
                        display: "block",
                        position: "relative",
                        pointerEvents: "none"
                    }),
                    this.Z = new Q(this,this._i),
                    this.It().J.Z && this.It().J.ct && (this.Wh = new it(this,this._i)),
                    this.It().J.wt) {
                        this.It().J.gt ? this.It().J.kt ? (this._i.appendChild(this.Z.rh()),
                        this._i.appendChild(this.ve())) : (this._i.appendChild(this.ve()),
                        this._i.appendChild(this.Z.rh())) : this._i.appendChild(this.ve());
                        const t = document.body || document.documentElement;
                        t.appendChild(this._i),
                        this.Nt(this._i),
                        void 0 !== window.ResizeObserver ? (this.Fh = new ResizeObserver((t=>{
                            for (const i of t)
                                this.Ns()
                        }
                        )),
                        this.Fh.observe(t)) : window.addEventListener("resize", this.Ns, !1),
                        void 0 !== window.IntersectionObserver && (this.Ih = new window.IntersectionObserver((t=>{
                            for (const i in t)
                                if (t.hasOwnProperty(i)) {
                                    const s = t[i];
                                    this.Th = Math.floor(100 * s.intersectionRatio),
                                    this.Ns()
                                }
                        }
                        ),{
                            threshold: [...Array(20).keys()].map((t=>(t + 1) / 20))
                        }),
                        this.Ih.observe(this.ge())),
                        window.visualViewport && (window.visualViewport.addEventListener("scroll", this.ie),
                        window.visualViewport.addEventListener("resize", this.ie)),
                        this.se()
                    } else
                        this._i.appendChild(this.ve()),
                        this.ge().appendChild(this._i);
                    window.setTimeout((()=>{
                        this.Ns(),
                        this.Hh = new W(this,this.ve()),
                        this.Hh.Ni = !this.It().j,
                        this.Hh.Oi({
                            Gt: 1,
                            Jt: "video",
                            Et: this.It().J.K
                        }),
                        this.Hh.bi(),
                        this.It().J.xt && (this.Nh = new tt(this,this.ve()),
                        this.Nh.Oi({
                            Gt: 4,
                            Jt: "banner",
                            Et: this.It().J.Y
                        }),
                        this.Nh.bi())
                    }
                    ), 500)
                }
                ), (t=>{
                    this.Lt("_initPositionContainer fail", t),
                    console.warn("wtf")
                }
                ))
            }
            ye() {
                let t = document.getElementById(this.It().D);
                return null === t && (t = document.getElementById("sky_video")),
                new Promise(((i,s)=>{
                    if (null === t)
                        this.Pt().Bi("missing_container", "", this.It().C),
                        s();
                    else {
                        null !== t.getAttribute("data-mds") ? (this.Pt().Bi("double_load_2", "", ""),
                        s()) : (t.setAttribute("data-mds", "1"),
                        i(t))
                    }
                }
                ))
            }
            Ut() {
                if (super.Ut(),
                void 0 !== window.ResizeObserver) {
                    let t = document.documentElement || document.body;
                    this.Fh?.unobserve(t)
                } else
                    window.removeEventListener("resize", this.Ns, !1);
                void 0 !== window.IntersectionObserver && (this.Ih?.unobserve(this.ge()),
                this.Ih = null),
                window.visualViewport && (window.visualViewport.removeEventListener("scroll", this.ie),
                window.visualViewport.removeEventListener("resize", this.ie)),
                P.off(o, this.ne),
                P.off(r, this.Gi),
                null !== this.Hh && (P.off(this.Xs() + x, this.ae),
                P.off(this.Xs() + m, this.th),
                P.off(this.Xs() + _, this.Qs),
                P.off(this.Xs() + b, this.Ks),
                P.off(this.Xs() + g, this.Gs),
                P.off(this.Xs() + y, this.Js),
                P.off(this.Xs() + v, this.we),
                P.off(this.Xs() + $, this.de),
                P.off(this.Xs() + j, this.qs),
                P.off(this.Xs() + k, this.fe),
                P.off(this.Xs() + C, this.le),
                this.Hh.Ut(),
                this.Hh = null),
                null !== this.Nh && (P.off(this.ah() + E, this.pe),
                P.off(this.ah() + O, this.Us),
                P.off(this.ah() + A, this.Ws),
                P.off(this.ah() + T, this._e),
                this.Nh.Ut(),
                this.Nh = null),
                null !== this.Z && (this.Z.Ut(),
                this.Z = null),
                null !== this.Wh && (this.Wh.Ut(),
                this.Wh = null),
                null !== this.zh && (this.zh.remove(),
                this.zh = null),
                null !== this._i && (this._i.remove(),
                this._i = null),
                P.off(this.Bt() + a, this.hh),
                P.off(this.Bt() + c, this.he),
                null !== this.Ph && (this.Ph.remove(),
                this.Ph = null),
                null !== this.Rh && (this.Rh.remove(),
                this.Rh = null),
                this.Lt("eventBus", P)
            }
            ke() {
                let t = "innerHeight"in window ? window.innerHeight : document.documentElement.offsetHeight
                  , i = "innerWidth"in window ? window.innerWidth : document.documentElement.offsetWidth;
                const s = window.screen.availWidth
                  , h = window.screen.availHeight;
                let e = window.screen.width
                  , n = window.screen.height;
                H() || window.visualViewport && (window.visualViewport.width && (e = window.visualViewport.width),
                window.visualViewport.height && (n = window.visualViewport.height));
                const o = Math.max(e, n)
                  , r = Math.min(e, n)
                  , l = Math.round(o * this.It().J.bt / 100)
                  , a = r;
                l > 360 || a > 480 ? (this.X = this.It().J.X,
                this.q = this.It().J.q,
                this.vt = this.It().J.vt,
                this._t = this.It().J._t) : (this.X = l,
                this.q = a,
                this.vt = l,
                this._t = a),
                this.Lt(i, t, s, h, "size", o, r, a, l, this._t, this.vt)
            }
            ee() {
                if (null === this._i)
                    return;
                let t = {}
                  , i = {
                    opacity: "1",
                    height: "100%"
                };
                if (this.Pt().Fi())
                    return;
                if (this.It().J.wt) {
                    let t = "innerWidth"in window ? window.innerWidth : document.documentElement.offsetWidth;
                    H() ? t = document.documentElement.offsetWidth ? document.documentElement.offsetWidth : window.innerWidth : window.visualViewport && H() && t !== window.visualViewport.width && (t = window.visualViewport.width),
                    t < this.Uh ? (this.Ts = !0,
                    this.xe()) : (this.Ts = !1,
                    this.oe())
                } else
                    this.Ts = !1,
                    this.oe();
                this.ke();
                const s = this.ge().getBoundingClientRect()
                  , h = I(this.ge());
                0 === this.It().J.ft ? this.q > s.width || this.X > s.height || !this.Ms && this.Th < 75 ? this.Ms = !0 : this.Ms && this.Th >= 75 && (this.Ms = !1) : this.Ms = !0;
                let e = !1;
                if (this.Hh && this.Hh.$i() && (e = !0),
                this.Nh && this.Nh.$i() && (e = !0),
                this.It().J.wt || (this.Ms = !1),
                this.Ms) {
                    t = {
                        position: "fixed",
                        opacity: "1",
                        background: "",
                        pointerEvents: "none",
                        minWidth: "",
                        minHeight: "",
                        width: this._t + "px",
                        height: this.vt + "px",
                        top: "unset",
                        bottom: "0",
                        left: "unset",
                        right: "0",
                        margin: "0",
                        zIndex: "2147483647"
                    };
                    if (this.It().J.wt && this.se(),
                    this.Ts)
                        Object.assign(t, {
                            height: "auto",
                            left: "0",
                            right: "unset"
                        }),
                        this.It().J.kt && Object.assign(t, {
                            bottom: "",
                            top: "0"
                        }),
                        window.visualViewport && (window.innerWidth !== window.visualViewport.width ? (Object.assign(i, {
                            height: this.vt + "px"
                        }),
                        Object.assign(t, {
                            width: this._t + "px"
                        })) : (Object.assign(i, {
                            height: this.It().J.bt + "vh"
                        }),
                        Object.assign(t, {
                            width: "100%"
                        })));
                    else if (null !== this.Gh && Object.assign(t, this.Gh),
                    null !== this.Mh) {
                        const i = this.Mh.getBoundingClientRect()
                          , s = -1 !== ["bl", "tl"].indexOf(this.It().J.yt) ? "left" : "right";
                        let h = this.It().J._t;
                        null !== this.Gh && (h = parseInt(this.Gh.width));
                        const e = {
                            left: "left" === s ? i.left + "px" : i.left + i.width - h + "px"
                        };
                        this.Lt("->", e, i),
                        Object.assign(t, e)
                    } else if ("br" !== this.It().J.yt) {
                        const i = {
                            tl: {
                                top: 0,
                                left: 0,
                                right: "auto",
                                bottom: "unset",
                                insetLeft: 0,
                                insetBottom: "unset",
                                insetTop: 0
                            },
                            tr: {
                                top: 0,
                                right: 0,
                                left: "auto",
                                bottom: "unset",
                                insetRight: 0,
                                insetBottom: "unset",
                                insetTop: 0
                            },
                            bl: {
                                bottom: 0,
                                left: 0,
                                right: "auto",
                                top: "unset",
                                insetLeft: 0,
                                insetBottom: 0,
                                insetTop: "unset"
                            },
                            br: {
                                bottom: 0,
                                right: 0,
                                left: "auto",
                                top: "unset",
                                insetRight: 0,
                                insetBottom: 0,
                                insetTop: "unset"
                            }
                        };
                        this.It().J.yt in i && Object.assign(t, i[this.It().J.yt])
                    }
                    let s = !1;
                    this.Kh || this.Xh ? s = !0 : e || (this.Ts || this.zs) && (this.Lh || (s = !0)),
                    s ? (Object.assign(i, {
                        opacity: "0.001"
                    }),
                    null !== this.Nh && this.Nh.Ci(),
                    null !== this.Hh && this.Hh.Ci()) : this.Se()
                } else {
                    this.Ts = !1,
                    t = this.It().J.wt ? {
                        position: "absolute",
                        pointerEvents: "none",
                        height: s.height + "px",
                        width: s.width + "px",
                        top: h.top + "px",
                        left: h.left + "px",
                        right: "0",
                        margin: "0",
                        zIndex: "10000"
                    } : {
                        position: "relative",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        zIndex: "10000"
                    };
                    let e = !1;
                    this.Xh && (e = !0,
                    null !== this.Nh && this.Nh.Ci(),
                    null !== this.Hh && this.Hh.Ci()),
                    e ? Object.assign(i, {
                        opacity: "0.001"
                    }) : this.Se()
                }
                P.emit(this.Bt() + p, {
                    s: this.Ms,
                    m: this.Ts,
                    h: this.zs,
                    w: this.Kh,
                    kill: this.Xh
                }),
                F(this._i, t),
                F(this.ve(), i)
            }
            xe() {
                let t = {
                    width: "100%",
                    position: "static",
                    height: this.X + "px",
                    display: "none"
                };
                this.zs = !1,
                B(this.ge(), t)
            }
            oe() {
                let t = {
                    width: "100%",
                    position: "static",
                    height: this.X + "px",
                    display: "block"
                };
                this.It().J.wt && this.It().J.ft > 0 && (t = {
                    display: "none"
                },
                2 === this.It().J.ft && (this.zs = !0)),
                B(this.ge(), t)
            }
            Se() {
                null !== this.Hh ? this.Hh.$i() ? (this.Hh.Ei(),
                null !== this.Nh && this.Nh.Ai()) : null !== this.Nh ? this.Nh.$i() ? (this.Nh.Ei(),
                this.Hh.Ai()) : (this.Nh.Ci(),
                this.Hh.Ci()) : this.Hh.Ci() : null !== this.Nh && (this.Nh.$i() ? this.Nh.Ei() : this.Nh.Ci())
            }
        }
        class ht extends G {
            constructor(t, i) {
                super(t, i),
                this.Cs = 95,
                this.eh = ()=>{
                    this.Lt("Click на крестик"),
                    P.emit(this.xi().Bt() + c)
                }
                ,
                this.$e = t=>{
                    this.ns.innerHTML = (this.ds - t).toString();
                    let i = this.Cs - (t + 1) * (this.Cs / this.ds);
                    this.ss.style.strokeDashoffset = i.toString()
                }
                ,
                this.je = ()=>{
                    this.ps = this.ys(),
                    B(this.ks(), {
                        display: ""
                    }),
                    B(this.$s(), {
                        display: "none"
                    }),
                    this.ps.style.pointerEvents = "auto",
                    this.ps.addEventListener("click", this.eh, !1),
                    this.Lt("_$btnClick", this.ps)
                }
                ,
                this.ds = this.It().St.nt,
                this.us = J(10),
                this.ws = J(10),
                this.js(this.us, this.It().St.tt),
                this.js(this.ws, ""),
                B(this.gs(), {
                    marginTop: "2px",
                    marginRight: "2px",
                    zIndex: "10000",
                    position: "absolute",
                    top: 0,
                    width: "34px",
                    height: "34px",
                    right: 0,
                    cursor: "pointer",
                    pointerEvents: "none",
                    backgroundColor: "var(--" + this.ws + ")",
                    "-moz-user-select": "none",
                    "-khtml-user-select": "none",
                    "-webkit-user-select": "none",
                    "-ms-user-select": "none",
                    "user-select": "none"
                }),
                this.ts = Y("svg"),
                K(this.ts, "width", "34"),
                K(this.ts, "height", "34"),
                B(this.ts, {
                    transform: "rotate(-90deg)",
                    pointerEvents: "none"
                });
                const s = q(this.us);
                this.ss = s.circle,
                this.ts.appendChild(s.group),
                this.es = X(this.us),
                this.ts.appendChild(this.es),
                this.ns = Z(this.us),
                this.ts.appendChild(this.ns),
                this.gs().appendChild(this.ts),
                this._i.appendChild(this.gs()),
                this.ss.style.strokeDashoffset = this.Cs.toString(),
                this.ns.innerHTML = this.It().St.nt.toString(),
                B(this.$s(), {
                    display: ""
                }),
                K(this.$s(), "transform", "rotate(90, 17, 17)"),
                B(this.ks(), {
                    display: "none"
                }),
                P.on(this.xi().Bt() + l, this.$e),
                P.once(this.xi().Bt() + a, this.je),
                this.vs()
            }
            xi() {
                return this.mi
            }
            Ut() {
                super.Ut(),
                null !== this.ps && (this.ps.removeEventListener("click", this.eh, !1),
                this.ps = null),
                P.off(this.xi().Bt() + a, this.je),
                P.off(this.xi().Bt() + l, this.$e)
            }
        }
        class et extends N {
            constructor(t, i) {
                super(t, i),
                this.Tt = "fullscreen",
                this.Xt = '<!DOCTYPE html><html><head><meta charset="utf-8"><style>html,body{background-color: black;  position: relative;width: 100%;height: 100%;}#bn {position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);}</style></head><body><div id="bn"></div><script type="text/javascript" src="{_SCRIPT_}"><\/script></body></html>',
                this.Gi = ()=>{}
                ,
                this.Ji = ()=>{}
                ,
                this.Ki = ()=>{}
                ,
                this.Yi = t=>{
                    let i = !1;
                    if (this.ai) {
                        this.ai.deref().contentWindow === t.source && (i = !0)
                    }
                    if (i)
                        if ("object" == typeof t.data)
                            ;
                        else
                            switch (this.Lt(t.data),
                            t.data) {
                            case "movieads_fs_onstage":
                                P.emit(this.xi().Bt() + w);
                                break;
                            case "movieads_fs_offstage":
                                P.emit(this.xi().Bt() + f)
                            }
                }
                ,
                this.gi = document.createElement("div")
            }
            bi() {
                super.bi(),
                this.A ? this.qt = this.Ti() : this.Yt = this.Ti(),
                this.Ht().appendChild(this.gi),
                this.Pi(),
                window.addEventListener("message", this.Yi, !1)
            }
            Ut() {
                if (super.Ut(),
                window.removeEventListener("message", this.Yi, !1),
                null !== this.ni && (window.clearInterval(this.ni),
                this.ni = 0),
                null !== this.ai) {
                    const t = this.ai.deref();
                    L(t).then((()=>{
                        this.ai = null
                    }
                    ))
                }
                null !== this.gi && this.gi.remove()
            }
            Ti(t) {
                let i = this.Ri();
                i += "&r=" + encodeURIComponent(location.href),
                i += "&sub_id=" + this.xi().Ft(),
                i += "&fmt_id=" + this.Gt;
                const s = this.xi().Pt().Xi();
                return s && (i += "&maid=" + s),
                this.Lt("lnk", this.xi().Bt(), i.replace(/^https?:\/\//, "")),
                i
            }
        }
        class nt extends D {
            constructor(t) {
                super(t),
                this.Tt = "fullscreen",
                this.Mt = "fullscreen",
                this.Ce = null,
                this.Ee = null,
                this.ai = null,
                this.Nh = null,
                this.Z = null,
                this.Ae = null,
                this.Oe = 10,
                this.Re = !1,
                this.Te = {
                    overflow: "",
                    height: ""
                },
                this.Zh = !1,
                this.Me = ()=>{
                    P.once(this.Bt() + w, this.ze),
                    P.once(this.Bt() + f, this.Pe),
                    P.once(this.Bt() + c, this.De),
                    P.once(this.Bt() + a, this.Ie),
                    this.Lt("fullscreen  start"),
                    this.Ee = document.createElement("div");
                    const t = {
                        "font-family": "sans-serif",
                        position: "fixed",
                        top: "0px",
                        left: "0px",
                        width: "100vw",
                        height: "100vh",
                        opacity: .001,
                        margin: "0",
                        pointerEvents: "none",
                        zIndex: "2147483647"
                    };
                    window.visualViewport && (!window.innerWidth || !window.innerHeight || window.visualViewport.pageLeft > 0 || window.visualViewport.pageTop,
                    t.width = `${window.visualViewport.width}px`,
                    t.height = `${window.visualViewport.height}px`),
                    B(this.Ee, t);
                    const i = document.createElement("div");
                    B(i, {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "#000",
                        opacity: ".7"
                    }),
                    this.Ee.appendChild(i);
                    const s = document.createElement("img");
                    s.src = "//user91471.clients-cdnnow.ru/_logo.svg",
                    s.width = 36,
                    s.height = 36,
                    s.align = "left",
                    this.Ce = document.createElement("span"),
                    this.Ce.innerText = this.Pt().uh().Ot,
                    B(this.Ce, {
                        marginRight: "39px"
                    });
                    const e = document.createElement("div");
                    B(e, {
                        fontSize: "12px",
                        position: "fixed",
                        width: "100%",
                        height: "36px",
                        backgroundColor: "#2B2B31",
                        top: 0,
                        textAlign: "right",
                        color: "wheat",
                        lineHeight: "36px",
                        fontVariant: "small-caps",
                        zIndex: 10,
                        "-moz-user-select": "none",
                        "-khtml-user-select": "none",
                        "-webkit-user-select": "none",
                        "-ms-user-select": "none",
                        "user-select": "none"
                    }),
                    e.appendChild(s),
                    e.appendChild(this.Ce),
                    this.Ee.appendChild(e);
                    (document.body || document.documentElement).appendChild(this.Ee);
                    const n = document.createElement("div");
                    B(n, {
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        opacity: "1"
                    }),
                    this.Ee.appendChild(n),
                    this.Nt(this.Ee),
                    window.visualViewport && (window.visualViewport.addEventListener("scroll", this.ie),
                    window.visualViewport.addEventListener("resize", this.ie)),
                    this.se(),
                    this.Nh = new et(this,n),
                    this.Nh.Oi({
                        Gt: 5,
                        Jt: "",
                        Et: this.It().St.Y
                    }),
                    this.Nh.bi(),
                    this.Ae = window.setTimeout((()=>{
                        this.Lt("Autoclose"),
                        P.emit(this.Bt() + h)
                    }
                    ), 1e3 * this.Oe)
                }
                ,
                this.ze = ()=>{
                    const t = document.getElementsByTagName("body")[0];
                    null === this.Z && (this.Z = new ht(this,this.Ee),
                    window.clearTimeout(this.Ae),
                    this.Ae = window.setTimeout((()=>{
                        this.Lt("Autoclose"),
                        P.emit(this.Bt() + h)
                    }
                    ), 1e3 * this.Oe)),
                    this.Re = !0,
                    null != t && (this.Te.overflow = t.style.overflow,
                    this.Te.height = t.style.height,
                    B(t, {
                        overflow: "hidden",
                        height: "100vh"
                    })),
                    B(this.Ee, {
                        opacity: 1,
                        pointerEvents: ""
                    })
                }
                ,
                this.ie = ()=>{
                    this.Zh || (window.requestAnimationFrame((()=>{
                        null !== this.Ee && (this.se(),
                        this.Zh = !1)
                    }
                    )),
                    null !== this.Ee && (this.Zh = !0))
                }
                ,
                this.Ie = ()=>{
                    null !== this.Ce && (this.Ce.innerText = this.Pt().uh().Rt)
                }
                ,
                this.Pe = ()=>{
                    P.emit(this.Bt() + h)
                }
                ,
                this.De = ()=>{
                    this.Lt("fullscreen  убейся"),
                    P.emit(this.Bt() + h)
                }
                ,
                P.once(d, this.Me)
            }
            Ht() {
                return this.Ee
            }
            se() {
                if (window.visualViewport && null !== this.Ee) {
                    "innerHeight"in window ? window.innerHeight : document.documentElement.offsetHeight;
                    const t = Math.max(0, window.visualViewport.offsetLeft);
                    let i = 0;
                    document.body.scrollHeight > window.innerHeight && (i = document.body.scrollWidth - window.innerWidth,
                    i < 2 && (i = 0));
                    const s = Math.max(0, window.visualViewport.offsetTop - i);
                    document.body.scrollHeight,
                    window.innerHeight,
                    window.visualViewport.offsetTop >= 0 || window.visualViewport.offsetLeft >= 0 ? this.Ee.style.transform = 0 === t && 0 === s ? "" : `translate(${t}px,${s}px)` : this.Ee.style.transform = ""
                }
            }
            Ut() {
                if (super.Ut(),
                window.visualViewport && window.visualViewport.removeEventListener("scroll", this.ie),
                null != this.Ae && (window.clearTimeout(this.Ae),
                this.Ae = null),
                null !== this.Z && (this.Z.Ut(),
                this.Z = null),
                P.off(this.Bt() + d, this.Me),
                P.off(this.Bt() + w, this.ze),
                P.off(this.Bt() + f, this.Pe),
                P.off(this.Bt() + c, this.De),
                P.off(this.Bt() + a, this.Ie),
                this.Re) {
                    const t = document.getElementsByTagName("body")[0];
                    B(t, {
                        overflow: this.Te.overflow,
                        height: this.Te.height
                    })
                }
                null !== this.Nh && (this.Nh.Ut(),
                this.Nh = null),
                null !== this.Ee && (this.Ee.remove(),
                this.Ee = null),
                P.emit(u)
            }
        }
        class ot extends G {
            constructor(t, i) {
                super(t, i),
                this.ci = !1,
                this.Fe = !1,
                this.Be = !1,
                this.Le = !1,
                this.th = ()=>{
                    this.ci = !0,
                    this.Ve.textContent = "Skip Ad",
                    this.Be || (this.Be = !0,
                    P.off(this.xi().Bt() + a, this.He),
                    this.It().L.G ? (this.Fe = !0,
                    B(this.$s(), {
                        display: "none"
                    }),
                    B(this.ks(), {
                        display: "none"
                    }),
                    K(this.Ve, "x", "45"),
                    this.Ve.textContent = "Close after AD") : (P.on(this.xi().Bt() + a, this.Ne),
                    this.ds = this.It().L.U,
                    this.vs(),
                    this.Fe = !0,
                    B(this.$s(), {
                        display: ""
                    }),
                    B(this.ks(), {
                        display: "none"
                    })),
                    this.gs().style.pointerEvents = "none")
                }
                ,
                this.Qs = ()=>{
                    this.ci = !1,
                    this.It().L.G && window.setTimeout((()=>{
                        this.xi().Ut()
                    }
                    ), 500)
                }
                ,
                this.We = t=>{
                    this.$s().innerHTML = (this.ds - t).toString()
                }
                ,
                this.He = ()=>{
                    P.off(this.xi().Bt() + a, this.He),
                    this.It().L.G && this.ci || (this.It().L.W ? this.xi().Ut() : (this.Fe = !0,
                    B(this.$s(), {
                        display: "none"
                    }),
                    B(this.ks(), {
                        display: ""
                    }),
                    this.gs().style.pointerEvents = ""))
                }
                ,
                this.Ne = ()=>{
                    P.off(this.xi().Bt() + a, this.Ne),
                    this.Fe = !0,
                    B(this.$s(), {
                        display: "none"
                    }),
                    B(this.ks(), {
                        display: ""
                    }),
                    this.gs().style.pointerEvents = ""
                }
                ,
                this.Ue = ()=>{
                    P.emit(this.xi().Bt() + h)
                }
                ,
                this.ds = this.It().L.N;
                B(this.gs(), {
                    zIndex: "10000",
                    position: "absolute",
                    bottom: 0,
                    width: "95px",
                    height: "28px",
                    right: 0,
                    marginBottom: "30px",
                    marginRight: "30px",
                    cursor: "pointer",
                    pointerEvents: "none"
                });
                const s = Y("svg");
                K(s, "width", "95"),
                K(s, "height", "24");
                const e = Y("rect");
                K(e, "x", "0"),
                K(e, "y", "0"),
                K(e, "width", "96"),
                K(e, "height", "24"),
                K(e, "fill", "black"),
                K(e, "fill-opacity", "0.4"),
                s.appendChild(e),
                this.Ve = Y("text"),
                K(this.Ve, "x", "30"),
                K(this.Ve, "y", "13"),
                K(this.Ve, "text-anchor", "middle"),
                K(this.Ve, "dominant-baseline", "middle"),
                B(this.Ve, {
                    font: "14px sans-serif",
                    fill: "white"
                }),
                this.Ve.textContent = "Search",
                s.appendChild(this.Ve),
                this.es = Y("path"),
                K(this.es, "d", "M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z"),
                K(this.es, "transform", "translate(60,-6)"),
                K(this.es, "fill", "white"),
                this.es.style.display = "none",
                s.appendChild(this.es),
                this.ns = Y("text"),
                K(this.ns, "x", "70"),
                K(this.ns, "y", "13"),
                K(this.ns, "text-anchor", "middle"),
                K(this.ns, "dominant-baseline", "middle"),
                B(this.ns, {
                    font: "14px sans-serif",
                    fill: "white"
                }),
                s.appendChild(this.ns),
                this.gs().appendChild(s),
                this._i.appendChild(this.gs()),
                this.gs().addEventListener("click", this.Ue),
                P.on(this.xi().Bt() + l, this.We),
                P.on(this.xi().Bt() + a, this.He),
                P.on(this.Xs() + m, this.th),
                P.on(this.Xs() + _, this.Qs),
                this.It().L.W,
                this.vs()
            }
            Ut() {
                P.off(this.xi().Bt() + l, this.We),
                P.off(this.Xs() + m, this.th),
                P.off(this.Xs() + _, this.Qs),
                P.off(this.xi().Bt() + a, this.Ne),
                this.gs().removeEventListener("click", this.Ue),
                super.Ut()
            }
            xi() {
                return this.mi
            }
            Xs() {
                return this.xi().Bt() + "_video"
            }
        }
        class rt extends D {
            constructor(t) {
                super(t),
                this.Tt = "preloader",
                this.Mt = "preloader",
                this.Ge = 400,
                this.Je = 300,
                this.Ke = "",
                this.Ye = null,
                this._i = null,
                this.Hh = null,
                this.Z = null,
                this.Qh = ()=>{
                    window.setTimeout((()=>{
                        this.te()
                    }
                    ), 0)
                }
                ,
                this.qe = ()=>{
                    const t = document.querySelectorAll("[data-" + this.Ke + "]");
                    for (let i = 0; i < t.length; i++) {
                        const s = t[i]
                          , h = s.getAttribute("data-" + this.Ke);
                        if (null !== h) {
                            const t = document.getElementById(h);
                            if (null !== t) {
                                const i = I(s);
                                t.style.width = s.offsetWidth + "px",
                                t.style.height = s.offsetHeight + "px",
                                t.style.left = i.left + "px",
                                t.style.top = i.top + "px"
                            }
                        }
                    }
                }
                ,
                this.It().j && (this.Ge = 300,
                this.Je = 200),
                this.Ke = J(7),
                P.once(i, this.Qh)
            }
            te() {
                this.Lt("preloader start");
                let t = []
                  , i = "video, iframe, embed, object"
                  , s = !0;
                this.Lt("selector", this.Pt().It().L.H),
                this.Pt().It().L.H && (i = this.Pt().It().L.H,
                s = !1);
                let h = document.querySelectorAll(i);
                for (let i = 0; i < h.length; i++)
                    this.Xe(h[i], s) && -1 === t.indexOf(h[i]) && t.push(h[i]);
                if (this.Lt(t),
                0 === t.length)
                    return;
                const e = J(7);
                for (let i = 0; i < t.length; i++) {
                    let s = this.Ze(t[i]);
                    s.setAttribute("id", e.concat(i.toString()));
                    (document.body || document.documentElement).appendChild(s),
                    t[i].setAttribute("data-" + this.Ke, e.concat(i.toString()))
                }
                if (void 0 !== window.ResizeObserver) {
                    this.Ye = new ResizeObserver((t=>{
                        for (const i of t)
                            this.qe()
                    }
                    ));
                    const t = document.body || document.documentElement;
                    this.Ye.observe(t)
                } else
                    window.addEventListener("resize", this.qe, !1)
            }
            Xe(t, i) {
                return i ? t.offsetWidth >= this.Ge && t.offsetHeight >= this.Je && null !== t.offsetParent && !(t.id && 26 === t.id.length) : null !== t.offsetParent && !(t.id && 26 === t.id.length)
            }
            Qe(t) {
                let i = document.querySelectorAll("[data-" + this.Ke + "]");
                for (let s = 0; s < i.length; s++) {
                    let h = i[s].getAttribute("data-" + this.Ke);
                    if (null !== h) {
                        let i = document.getElementById(h);
                        null !== i && t.id !== i.id && (i.onclick = null,
                        i.remove())
                    }
                }
                (new Image).src = "https://vak345.com/pt.gif?v=" + this.It()._,
                this.Lt("Initialisation, запуск делать дальше "),
                this._i = t,
                B(this._i, {
                    display: "flex",
                    flexDirection: "column"
                }),
                this._i.onclick = null,
                this.Hh = new W(this,this._i),
                this.Hh.Ni = !1,
                this.Hh.Oi({
                    Gt: 3,
                    Jt: "video",
                    Et: this.It().J.K
                }),
                this.Hh.bi(),
                this.Z = new ot(this,this._i),
                this.Lt("_initPositionContainer ok")
            }
            Ze(t) {
                let i = I(t)
                  , s = document.createElement("div");
                return B(s, {
                    width: t.offsetWidth + "px",
                    height: t.offsetHeight + "px",
                    left: i.left + "px",
                    top: i.top + "px",
                    position: "absolute",
                    backgroundColor: "transparent",
                    zIndex: "2147483646",
                    display: ""
                }),
                s.onclick = t=>{
                    t.stopPropagation(),
                    this.Qe(s)
                }
                ,
                s
            }
            Ut() {
                const t = document.querySelectorAll("[data-" + this.Ke + "]");
                for (let i = 0; i < t.length; i++) {
                    const s = t[i].getAttribute("data-" + this.Ke);
                    if (null !== s) {
                        const t = document.getElementById(s);
                        null !== t && t.remove()
                    }
                }
                if ("undefined" != typeof ResizeObserver && null !== this.Ye) {
                    const t = document.body || document.documentElement;
                    this.Ye.unobserve(t),
                    this.Ye = null
                } else
                    removeEventListener("resize", this.qe, !1);
                null !== this.Z && (this.Z.Ut(),
                this.Z = null),
                null !== this.Hh && (this.Hh.Ut(),
                this.Hh = null),
                this._i?.remove(),
                this._i = null,
                this.Lt("eventBus", P)
            }
            Ht() {
                return this._i
            }
        }
        class lt extends N {
            constructor(t, i) {
                super(t, i),
                this.Ih = null,
                this.tn = !1,
                this.sn = 0,
                this.Tt = "banner",
                this.Xt = '<!DOCTYPE html><html  lang="en"><head><title></title><meta charset="utf-8"><style>html,body{background-color: transparent;  position: relative;width: 100%;height: 100%;}#bn {position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);}</style></head><body><div id="bn"></div><script type="text/javascript"  async  src="{_SCRIPT_}"><\/script></body></html>',
                this.ui = "ping_banner_static_reload",
                this.hn = t=>{
                    this.Lt("new size", t),
                    this.yi().style.height = `${t}px`
                }
                ,
                this.Gi = ()=>{
                    this.Lt("Static Banner from fullscreen"),
                    this.pi && (this.Lt("Reload after full screen"),
                    this.pi = !1,
                    this.zi()),
                    null === this.ni && this.Di()
                }
                ,
                this.Ji = ()=>{
                    this.Lt("Static Banner Tab hidden"),
                    null !== this.ni && (window.clearInterval(this.ni),
                    this.ni = null)
                }
                ,
                this.Ki = ()=>{
                    this.Lt("Static Banner Tab show"),
                    this.pi && (this.Lt("Reload after page show"),
                    this.pi = !1,
                    this.zi()),
                    null === this.ni && this.Di()
                }
                ,
                this.Yi = t=>{
                    let i = !1;
                    if (this.ai) {
                        this.ai.deref().contentWindow === t.source && (i = !0)
                    }
                    if (i)
                        if ("object" == typeof t.data)
                            "banner_fsz"in t.data && this.hn(t.data.banner_fsz);
                        else
                            switch (this.Lt(t.data),
                            t.data) {
                            case "mads_ping_banner":
                                this.hi = new Date,
                                this.ei++;
                                break;
                            case "banner_offstage":
                                this.ci = !1,
                                this.hi = new Date,
                                P.emit(this.ki() + A);
                                break;
                            case "banner_onstage":
                                this.ci = !0,
                                P.emit(this.ki() + O);
                                break;
                            case "banner_ready":
                                this.ii = !0,
                                this.ci = !1,
                                this.hi = new Date,
                                this.oi = 0;
                                const t = ((new Date).getTime() - this.Qt.getTime()) / 1e3;
                                this.Mi(t),
                                P.emit(this.ki() + E);
                                break;
                            case "banner_reload":
                                this.ci = !1,
                                this.ii = !1,
                                this.xi().Pt().Ii() ? this.zi() : this.pi = !0
                            }
                }
            }
            Oi(t) {
                super.Oi(t),
                t.tn && (this.tn = t.tn)
            }
            bi() {
                if (super.bi(),
                this.Kt) {
                    const t = this.Ht();
                    null !== t && t.parentNode?.replaceChild(this.gi, this.Ht())
                } else
                    this.Ht().appendChild(this.gi);
                this.tn ? void 0 !== window.IntersectionObserver && (this.Ih = new window.IntersectionObserver((t=>{
                    for (const i in t)
                        if (t.hasOwnProperty(i)) {
                            const s = t[i];
                            this.sn = Math.floor(100 * s.intersectionRatio),
                            this.Lt("VIS", this.sn),
                            this.sn > 50 && (this.si || this.en())
                        }
                }
                ),{
                    threshold: [...Array(20).keys()].map((t=>(t + 1) / 20))
                }),
                this.Ih.observe(this.gi)) : this.en()
            }
            en() {
                this.si || (P.on(r, this.Gi),
                P.on(e, this.Ji),
                P.on(n, this.Ki),
                window.addEventListener("message", this.Yi, !1),
                this.A ? this.qt = this.Ti() : this.Yt = this.Ti(),
                this.Pi(),
                this.Di(),
                null !== this.Ih && (this.Ih.unobserve(this.gi),
                this.Ih = null),
                this.si = !0)
            }
            Ti(t) {
                let i = this.Ri();
                const s = this.yi().getBoundingClientRect();
                this.Lt("Size", this.Ht(), s);
                let h = 0
                  , e = 0;
                if (null !== s && (s.width && (h = s.width),
                s.height && (e = s.height)),
                i += "&w=" + Math.round(h),
                i += "&h=" + Math.round(e),
                !1 === this.It().R) {
                    i += "&sub_id=" + this.xi().Ft(),
                    i += "&fmt_id=" + this.Gt,
                    i += "&pkey=" + this.Jt,
                    !0 === this.It().j && (i += "&fmob=yes"),
                    i += "&testad=" + this.It().T,
                    "yes" === this.It().M && (i += "&dbg=" + this.It().M),
                    "yes" === this.It().P && (i += "&sl=" + this.It().P),
                    i += "&r=" + encodeURIComponent(location.href);
                    const t = this.xi().Pt().Xi();
                    t && (i += "&maid=" + t)
                }
                return void 0 !== t && (i += t),
                this.Lt("lnk", this.xi().Bt(), i.replace(/^https?:\/\//, "")),
                i
            }
            Ut() {
                if (super.Ut(),
                P.off(r, this.Gi),
                P.off(e, this.Ji),
                P.off(n, this.Ki),
                window.removeEventListener("message", this.Yi, !1),
                null !== this.ni && (window.clearInterval(this.ni),
                this.ni = 0),
                this.tn && void 0 !== window.IntersectionObserver && (this.Ih?.unobserve(this.gi),
                this.Ih = null),
                null !== this.ai) {
                    const t = this.ai.deref();
                    L(t).then((()=>{
                        this.ai = null
                    }
                    ))
                }
                null !== this.gi && this.gi.remove()
            }
        }
        class at extends D {
            constructor(t) {
                super(t),
                this.Tt = "staticBanner",
                this.Mt = "static_banner",
                this.Me = ()=>{
                    this.Lt("static banner", this.It().jt.Ct),
                    this.It().jt.Ct.length > 0 && this.It().jt.Ct.forEach((t=>{
                        let i = document.getElementById("movie_banner_".concat(t));
                        if (null !== i) {
                            let s = new lt(this,i);
                            s.Oi({
                                Et: this.It().jt.Et,
                                Gt: 6,
                                Jt: t,
                                tn: !0,
                                Kt: !1,
                                fi: {
                                    position: "relative",
                                    height: "100%",
                                    width: "100%",
                                    margin: "0",
                                    padding: "0",
                                    backgroundColor: "transparent"
                                }
                            }),
                            s.bi()
                        } else
                            this.Lt("Not found pkey:", t)
                    }
                    ))
                }
                ,
                this.Ct = new Map,
                P.once(i, this.Me)
            }
            te() {}
            Ut() {}
        }
        var ct = function(t, i) {
            return ct = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, i) {
                t.__proto__ = i
            }
            || function(t, i) {
                for (var s in i)
                    Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
            }
            ,
            ct(t, i)
        };
        function dt(t, i) {
            if ("function" != typeof i && null !== i)
                throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
            function s() {
                this.constructor = t
            }
            ct(t, i),
            t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
            new s)
        }
        function ut(t, i, s, h) {
            return new (s || (s = Promise))((function(e, n) {
                function o(t) {
                    try {
                        l(h.next(t))
                    } catch (t) {
                        n(t)
                    }
                }
                function r(t) {
                    try {
                        l(h.throw(t))
                    } catch (t) {
                        n(t)
                    }
                }
                function l(t) {
                    var i;
                    t.done ? e(t.value) : (i = t.value,
                    i instanceof s ? i : new s((function(t) {
                        t(i)
                    }
                    ))).then(o, r)
                }
                l((h = h.apply(t, i || [])).next())
            }
            ))
        }
        function wt(t, i) {
            var s, h, e, n, o = {
                label: 0,
                sent: function() {
                    if (1 & e[0])
                        throw e[1];
                    return e[1]
                },
                trys: [],
                ops: []
            };
            return n = {
                next: r(0),
                throw: r(1),
                return: r(2)
            },
            "function" == typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n;
            function r(r) {
                return function(l) {
                    return function(r) {
                        if (s)
                            throw new TypeError("Generator is already executing.");
                        for (; n && (n = 0,
                        r[0] && (o = 0)),
                        o; )
                            try {
                                if (s = 1,
                                h && (e = 2 & r[0] ? h.return : r[0] ? h.throw || ((e = h.return) && e.call(h),
                                0) : h.next) && !(e = e.call(h, r[1])).done)
                                    return e;
                                switch (h = 0,
                                e && (r = [2 & r[0], e.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    e = r;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    h = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!(e = o.trys,
                                    (e = e.length > 0 && e[e.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!e || r[1] > e[0] && r[1] < e[3])) {
                                        o.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && o.label < e[1]) {
                                        o.label = e[1],
                                        e = r;
                                        break
                                    }
                                    if (e && o.label < e[2]) {
                                        o.label = e[2],
                                        o.ops.push(r);
                                        break
                                    }
                                    e[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                r = i.call(t, o)
                            } catch (t) {
                                r = [6, t],
                                h = 0
                            } finally {
                                s = e = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }
        Object.create;
        function ft(t, i, s) {
            if (s || 2 === arguments.length)
                for (var h, e = 0, n = i.length; e < n; e++)
                    !h && e in i || (h || (h = Array.prototype.slice.call(i, 0, e)),
                    h[e] = i[e]);
            return t.concat(h || Array.prototype.slice.call(i))
        }
        Object.create;
        "function" == typeof SuppressedError && SuppressedError;
        var pt = "1.9.1"
          , _t = "awesomium"
          , mt = "cef"
          , vt = "cefsharp"
          , gt = "coachjs"
          , bt = "electron"
          , yt = "fminer"
          , kt = "geb"
          , xt = "nightmarejs"
          , St = "phantomas"
          , $t = "phantomjs"
          , jt = "rhino"
          , Ct = "selenium"
          , Et = "sequentum"
          , At = "slimerjs"
          , Ot = "webdriverio"
          , Rt = "webdriver"
          , Tt = "headless_chrome"
          , Mt = "unknown"
          , zt = function(t) {
            function i(s, h) {
                var e = t.call(this, h) || this;
                return e.state = s,
                e.name = "BotdError",
                Object.setPrototypeOf(e, i.prototype),
                e
            }
            return dt(i, t),
            i
        }(Error);
        function Pt(t) {
            return ut(this, void 0, void 0, (function() {
                var i, s, h = this;
                return wt(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return i = {},
                        s = Object.keys(t),
                        [4, Promise.all(s.map((function(s) {
                            return ut(h, void 0, void 0, (function() {
                                var h, e, n, o, r;
                                return wt(this, (function(l) {
                                    switch (l.label) {
                                    case 0:
                                        h = t[s],
                                        l.label = 1;
                                    case 1:
                                        return l.trys.push([1, 3, , 4]),
                                        e = i,
                                        n = s,
                                        r = {},
                                        [4, h()];
                                    case 2:
                                        return e[n] = (r.value = l.sent(),
                                        r.state = 0,
                                        r),
                                        [3, 4];
                                    case 3:
                                        return o = l.sent(),
                                        i[s] = o instanceof zt ? {
                                            state: o.state,
                                            error: "".concat(o.name, ": ").concat(o.message)
                                        } : {
                                            state: -3,
                                            error: o instanceof Error ? "".concat(o.name, ": ").concat(o.message) : String(o)
                                        },
                                        [3, 4];
                                    case 4:
                                        return [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        )))];
                    case 1:
                        return e.sent(),
                        [2, i]
                    }
                }
                ))
            }
            ))
        }
        function Dt(t, i) {
            return -1 !== t.indexOf(i)
        }
        function It(t, i) {
            return -1 !== t.indexOf(i)
        }
        function Ft(t) {
            return Object.getOwnPropertyNames(t)
        }
        function Bt(t) {
            for (var i = [], s = 1; s < arguments.length; s++)
                i[s - 1] = arguments[s];
            for (var h = function(i) {
                if ("string" == typeof i) {
                    if (Dt(t, i))
                        return {
                            value: !0
                        }
                } else if (null != function(t, i) {
                    if ("find"in t)
                        return t.find(i);
                    for (var s = 0; s < t.length; s++)
                        if (i(t[s], s, t))
                            return t[s]
                }(t, (function(t) {
                    return i.test(t)
                }
                )))
                    return {
                        value: !0
                    }
            }, e = 0, n = i; e < n.length; e++) {
                var o = h(n[e]);
                if ("object" == typeof o)
                    return o.value
            }
            return !1
        }
        function Lt(t) {
            return t.reduce((function(t, i) {
                return t + (i ? 1 : 0)
            }
            ), 0)
        }
        var Vt = {
            detectAppVersion: function(t) {
                var i = t.appVersion;
                return 0 === i.state && (/headless/i.test(i.value) ? Tt : /electron/i.test(i.value) ? bt : /slimerjs/i.test(i.value) ? At : void 0)
            },
            detectDocumentAttributes: function(t) {
                var i = t.documentElementKeys;
                return 0 === i.state && (Bt(i.value, "selenium", "webdriver", "driver") ? Ct : void 0)
            },
            detectErrorTrace: function(t) {
                var i = t.errorTrace;
                return 0 === i.state && (/PhantomJS/i.test(i.value) ? $t : void 0)
            },
            detectEvalLengthInconsistency: function(t) {
                var i = t.evalLength
                  , s = t.browserKind
                  , h = t.browserEngineKind;
                if (0 === i.state && 0 === s.state && 0 === h.state) {
                    var e = i.value;
                    return "unknown" !== h.value && (37 === e && !Dt(["webkit", "gecko"], h.value) || 39 === e && !Dt(["internet_explorer"], s.value) || 33 === e && !Dt(["chromium"], h.value))
                }
            },
            detectFunctionBind: function(t) {
                if (-2 === t.functionBind.state)
                    return $t
            },
            detectLanguagesLengthInconsistency: function(t) {
                var i = t.languages;
                if (0 === i.state && 0 === i.value.length)
                    return Tt
            },
            detectNotificationPermissions: function(t) {
                var i = t.notificationPermissions
                  , s = t.browserKind;
                return 0 === s.state && "chrome" === s.value && (0 === i.state && i.value ? Tt : void 0)
            },
            detectPluginsArray: function(t) {
                var i = t.pluginsArray;
                if (0 === i.state && !i.value)
                    return Tt
            },
            detectPluginsLengthInconsistency: function(t) {
                var i = t.pluginsLength
                  , s = t.android
                  , h = t.browserKind
                  , e = t.browserEngineKind;
                if (0 === i.state && 0 === s.state && 0 === h.state && 0 === e.state && "chrome" === h.value && !s.value && "chromium" === e.value)
                    return 0 === i.value ? Tt : void 0
            },
            detectProcess: function(t) {
                var i, s = t.process;
                return 0 === s.state && ("renderer" === s.value.type || null != (null === (i = s.value.versions) || void 0 === i ? void 0 : i.electron) ? bt : void 0)
            },
            detectUserAgent: function(t) {
                var i = t.userAgent;
                return 0 === i.state && (/PhantomJS/i.test(i.value) ? $t : /Headless/i.test(i.value) ? Tt : /Electron/i.test(i.value) ? bt : /slimerjs/i.test(i.value) ? At : void 0)
            },
            detectWebDriver: function(t) {
                var i = t.webDriver;
                if (0 === i.state && i.value)
                    return Tt
            },
            detectWebGL: function(t) {
                var i = t.webGL;
                if (0 === i.state) {
                    var s = i.value
                      , h = s.vendor
                      , e = s.renderer;
                    if ("Brian Paul" == h && "Mesa OffScreen" == e)
                        return Tt
                }
            },
            detectWindowExternal: function(t) {
                var i = t.windowExternal;
                return 0 === i.state && (/Sequentum/i.test(i.value) ? Et : void 0)
            },
            detectWindowSize: function(t) {
                var i = t.windowSize
                  , s = t.documentFocus;
                if (0 !== i.state || 0 !== s.state)
                    return !1;
                var h = i.value
                  , e = h.outerWidth
                  , n = h.outerHeight;
                return s.value && 0 === e && 0 === n ? Tt : void 0
            },
            detectMimeTypesConsistent: function(t) {
                var i = t.mimeTypesConsistent;
                if (0 === i.state && !i.value)
                    return Mt
            },
            detectProductSub: function(t) {
                var i = t.productSub
                  , s = t.browserKind;
                return 0 === i.state && 0 === s.state && ("chrome" !== s.value && "safari" !== s.value && "opera" !== s.value && "wechat" !== s.value || "20030107" === i.value ? void 0 : Mt)
            },
            detectDistinctiveProperties: function(t) {
                var i = t.distinctiveProps;
                if (0 !== i.state)
                    return !1;
                var s, h = i.value;
                for (s in h)
                    if (h[s])
                        return s
            }
        };
        function Ht() {
            var t, i, s = window, h = navigator;
            return Lt(["webkitPersistentStorage"in h, "webkitTemporaryStorage"in h, 0 === h.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL"in s, "BatteryManager"in s, "webkitMediaStream"in s, "webkitSpeechGrammar"in s]) >= 5 ? "chromium" : Lt(["ApplePayError"in s, "CSSPrimitiveValue"in s, "Counter"in s, 0 === h.vendor.indexOf("Apple"), "getStorageUpdates"in h, "WebKitMediaKeys"in s]) >= 4 ? "webkit" : Lt(["buildID"in navigator, "MozAppearance"in (null !== (i = null === (t = document.documentElement) || void 0 === t ? void 0 : t.style) && void 0 !== i ? i : {}), "onmozfullscreenchange"in s, "mozInnerScreenX"in s, "CSSMozDocumentRule"in s, "CanvasCaptureMediaStream"in s]) >= 4 ? "gecko" : "unknown"
        }
        var Nt = {
            android: function() {
                var t = Ht()
                  , i = "chromium" === t
                  , s = "gecko" === t;
                if (!i && !s)
                    return !1;
                var h = window;
                return Lt(["onorientationchange"in h, "orientation"in h, i && !("SharedWorker"in h), s && /android/i.test(navigator.appVersion)]) >= 2
            },
            browserKind: function() {
                var t, i = null === (t = navigator.userAgent) || void 0 === t ? void 0 : t.toLowerCase();
                return It(i, "edg/") ? "edge" : It(i, "trident") || It(i, "msie") ? "internet_explorer" : It(i, "wechat") ? "wechat" : It(i, "firefox") ? "firefox" : It(i, "opera") || It(i, "opr") ? "opera" : It(i, "chrome") ? "chrome" : It(i, "safari") ? "safari" : "unknown"
            },
            browserEngineKind: Ht,
            documentFocus: function() {
                return void 0 !== document.hasFocus && document.hasFocus()
            },
            userAgent: function() {
                return navigator.userAgent
            },
            appVersion: function() {
                var t = navigator.appVersion;
                if (null == t)
                    throw new zt(-1,"navigator.appVersion is undefined");
                return t
            },
            rtt: function() {
                if (void 0 === navigator.connection)
                    throw new zt(-1,"navigator.connection is undefined");
                if (void 0 === navigator.connection.rtt)
                    throw new zt(-1,"navigator.connection.rtt is undefined");
                return navigator.connection.rtt
            },
            windowSize: function() {
                return {
                    outerWidth: window.outerWidth,
                    outerHeight: window.outerHeight,
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight
                }
            },
            pluginsLength: function() {
                if (void 0 === navigator.plugins)
                    throw new zt(-1,"navigator.plugins is undefined");
                if (void 0 === navigator.plugins.length)
                    throw new zt(-3,"navigator.plugins.length is undefined");
                return navigator.plugins.length
            },
            pluginsArray: function() {
                if (void 0 === navigator.plugins)
                    throw new zt(-1,"navigator.plugins is undefined");
                if (void 0 === window.PluginArray)
                    throw new zt(-1,"window.PluginArray is undefined");
                return navigator.plugins instanceof PluginArray
            },
            errorTrace: function() {
                try {
                    null[0]()
                } catch (t) {
                    if (t instanceof Error && null != t.stack)
                        return t.stack.toString()
                }
                throw new zt(-3,"errorTrace signal unexpected behaviour")
            },
            productSub: function() {
                var t = navigator.productSub;
                if (void 0 === t)
                    throw new zt(-1,"navigator.productSub is undefined");
                return t
            },
            windowExternal: function() {
                if (void 0 === window.external)
                    throw new zt(-1,"window.external is undefined");
                var t = window.external;
                if ("function" != typeof t.toString)
                    throw new zt(-2,"window.external.toString is not a function");
                return t.toString()
            },
            mimeTypesConsistent: function() {
                if (void 0 === navigator.mimeTypes)
                    throw new zt(-1,"navigator.mimeTypes is undefined");
                for (var t = navigator.mimeTypes, i = Object.getPrototypeOf(t) === MimeTypeArray.prototype, s = 0; s < t.length; s++)
                    i && (i = Object.getPrototypeOf(t[s]) === MimeType.prototype);
                return i
            },
            evalLength: function() {
                return eval.toString().length
            },
            webGL: function() {
                var t = document.createElement("canvas");
                if ("function" != typeof t.getContext)
                    throw new zt(-2,"HTMLCanvasElement.getContext is not a function");
                var i = t.getContext("webgl");
                if (null === i)
                    throw new zt(-4,"WebGLRenderingContext is null");
                if ("function" != typeof i.getParameter)
                    throw new zt(-2,"WebGLRenderingContext.getParameter is not a function");
                return {
                    vendor: i.getParameter(i.VENDOR),
                    renderer: i.getParameter(i.RENDERER)
                }
            },
            webDriver: function() {
                if (null == navigator.webdriver)
                    throw new zt(-1,"navigator.webdriver is undefined");
                return navigator.webdriver
            },
            languages: function() {
                var t, i = navigator, s = [], h = i.language || i.userLanguage || i.browserLanguage || i.systemLanguage;
                if (void 0 !== h && s.push([h]),
                Array.isArray(i.languages))
                    "chromium" === Ht() && Lt([!("MediaSettingsRange"in (t = window)), "RTCEncodedAudioFrame"in t, "" + t.Intl == "[object Intl]", "" + t.Reflect == "[object Reflect]"]) >= 3 || s.push(i.languages);
                else if ("string" == typeof i.languages) {
                    var e = i.languages;
                    e && s.push(e.split(","))
                }
                return s
            },
            notificationPermissions: function() {
                return ut(this, void 0, void 0, (function() {
                    var t, i;
                    return wt(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            if (void 0 === window.Notification)
                                throw new zt(-1,"window.Notification is undefined");
                            if (void 0 === navigator.permissions)
                                throw new zt(-1,"navigator.permissions is undefined");
                            if ("function" != typeof (t = navigator.permissions).query)
                                throw new zt(-2,"navigator.permissions.query is not a function");
                            s.label = 1;
                        case 1:
                            return s.trys.push([1, 3, , 4]),
                            [4, t.query({
                                name: "notifications"
                            })];
                        case 2:
                            return i = s.sent(),
                            [2, "denied" === window.Notification.permission && "prompt" === i.state];
                        case 3:
                            throw s.sent(),
                            new zt(-3,"notificationPermissions signal unexpected behaviour");
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            },
            documentElementKeys: function() {
                if (void 0 === document.documentElement)
                    throw new zt(-1,"document.documentElement is undefined");
                var t = document.documentElement;
                if ("function" != typeof t.getAttributeNames)
                    throw new zt(-2,"document.documentElement.getAttributeNames is not a function");
                return t.getAttributeNames()
            },
            functionBind: function() {
                if (void 0 === Function.prototype.bind)
                    throw new zt(-2,"Function.prototype.bind is undefined");
                return Function.prototype.bind.toString()
            },
            process: function() {
                var t = window.process
                  , i = "window.process is";
                if (void 0 === t)
                    throw new zt(-1,"".concat(i, " undefined"));
                if (t && "object" != typeof t)
                    throw new zt(-3,"".concat(i, " not an object"));
                return t
            },
            distinctiveProps: function() {
                var t, i, s = ((t = {})[_t] = {
                    window: ["awesomium"]
                },
                t[mt] = {
                    window: ["RunPerfTest"]
                },
                t[vt] = {
                    window: ["CefSharp"]
                },
                t[gt] = {
                    window: ["emit"]
                },
                t[yt] = {
                    window: ["fmget_targets"]
                },
                t[kt] = {
                    window: ["geb"]
                },
                t[xt] = {
                    window: ["__nightmare", "nightmare"]
                },
                t[St] = {
                    window: ["__phantomas"]
                },
                t[$t] = {
                    window: ["callPhantom", "_phantom"]
                },
                t[jt] = {
                    window: ["spawn"]
                },
                t[Ct] = {
                    window: ["_Selenium_IDE_Recorder", "_selenium", "calledSelenium", /^([a-z]){3}_.*_(Array|Promise|Symbol)$/],
                    document: ["__selenium_evaluate", "selenium-evaluate", "__selenium_unwrapped"]
                },
                t[Ot] = {
                    window: ["wdioElectron"]
                },
                t[Rt] = {
                    window: ["webdriver", "__webdriverFunc", "__lastWatirAlert", "__lastWatirConfirm", "__lastWatirPrompt", "_WEBDRIVER_ELEM_CACHE", "ChromeDriverw"],
                    document: ["__webdriver_script_fn", "__driver_evaluate", "__webdriver_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__fxdriver_unwrapped", "__webdriver_script_fn", "__webdriver_script_func", "__webdriver_script_function", "$cdc_asdjflasutopfhvcZLmcf", "$cdc_asdjflasutopfhvcZLmcfl_", "$chrome_asyncScriptInfo", "__$webdriverAsyncExecutor"]
                },
                t[Tt] = {
                    window: ["domAutomation", "domAutomationController"]
                },
                t), h = {}, e = Ft(window), n = [];
                for (i in void 0 !== window.document && (n = Ft(window.document)),
                s) {
                    var o = s[i];
                    if (void 0 !== o) {
                        var r = void 0 !== o.window && Bt.apply(void 0, ft([e], o.window, !1))
                          , l = !(void 0 === o.document || !n.length) && Bt.apply(void 0, ft([n], o.document, !1));
                        h[i] = r || l
                    }
                }
                return h
            }
        }
          , Wt = function() {
            function t() {
                this.components = void 0,
                this.detections = void 0
            }
            return t.prototype.getComponents = function() {
                return this.components
            }
            ,
            t.prototype.getDetections = function() {
                return this.detections
            }
            ,
            t.prototype.detect = function() {
                if (void 0 === this.components)
                    throw new Error("BotDetector.detect can't be called before BotDetector.collect");
                var t = function(t, i) {
                    var s = {}
                      , h = {
                        bot: !1
                    };
                    for (var e in i) {
                        var n = (0,
                        i[e])(t)
                          , o = {
                            bot: !1
                        };
                        "string" == typeof n ? o = {
                            bot: !0,
                            botKind: n
                        } : n && (o = {
                            bot: !0,
                            botKind: Mt
                        }),
                        s[e] = o,
                        o.bot && (h = o)
                    }
                    return [s, h]
                }(this.components, Vt)
                  , i = t[0]
                  , s = t[1];
                return this.detections = i,
                s
            }
            ,
            t.prototype.collect = function() {
                return ut(this, void 0, void 0, (function() {
                    var t;
                    return wt(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return t = this,
                            [4, Pt(Nt)];
                        case 1:
                            return t.components = i.sent(),
                            [2, this.components]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t
        }();
        function Ut(t) {
            var i = (void 0 === t ? {} : t).monitoring
              , s = void 0 === i || i;
            return ut(this, void 0, void 0, (function() {
                var t;
                return wt(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        return s && function() {
                            if (!(window.__fpjs_d_m || Math.random() >= .001))
                                try {
                                    var t = new XMLHttpRequest;
                                    t.open("get", "https://m1.openfpcdn.io/botd/v".concat(pt, "/npm-monitoring"), !0),
                                    t.send()
                                } catch (t) {
                                    console.error(t)
                                }
                        }(),
                        [4, (t = new Wt).collect()];
                    case 1:
                        return i.sent(),
                        [2, t]
                    }
                }
                ))
            }
            ))
        }
        class Gt {
            constructor(s) {
                if (this.nn = "Combo",
                this.rn = z.DEF,
                this.ln = null,
                this.an = null,
                this.cn = null,
                this.dn = null,
                this.un = "_ma",
                this.wn = "",
                this.pn = null,
                this._n = null,
                this.mn = null,
                this.Wt = !1,
                this.vn = "hidden",
                this.gn = "visibilitychange",
                this.bn = "visibilityState",
                this.yn = !1,
                this.kn = ()=>{
                    this.Lt("checkCanPlayVideo", "document Visible", this.Ii()),
                    this.Ii() ? P.emit(n) : P.emit(e)
                }
                ,
                this.xn = ()=>{
                    this.Lt("event fullscreen"),
                    this.yn = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement),
                    this.yn ? P.emit(o) : P.emit(r)
                }
                ,
                this.Sn = ()=>{
                    this.Lt("autoplay stopped"),
                    null !== this.ln && (P.off(this.ln.Bt() + h, this.Sn),
                    this.ln.Ut(),
                    this.ln = null)
                }
                ,
                this.$n = ()=>{
                    this.Lt("fullscreen stopped"),
                    null !== this.an && (P.off(this.an.Bt() + h, this.$n),
                    this.an.Ut(),
                    this.an = null),
                    P.emit(i)
                }
                ,
                this.jn = ()=>{
                    this.Lt("staticbanner stopped"),
                    null !== this.dn && (P.off(this.dn.Bt() + h, this.jn),
                    this.dn.Ut(),
                    this.dn = null)
                }
                ,
                this.Cn = ()=>{
                    this.Lt("preloader stopped"),
                    null !== this.cn && (P.off(this.cn.Bt() + h, this.Cn),
                    this.cn.Ut(),
                    this.cn = null)
                }
                ,
                this.En = t=>{
                    null !== this.pn && "object" == typeof t.data && this.un in t.data && (this.pn.blur(),
                    window.focus(),
                    this.pn = null,
                    this.An(t.data[this.un]),
                    window.removeEventListener("message", this.En, !1))
                }
                ,
                this.On = t,
                this.Rn = s,
                s.isMobile && (this.On.j = Boolean(s.isMobile)),
                this.On.S = Boolean(s.ma),
                this.On.$ = Boolean(s.masa),
                this.On.R = Boolean(s.disabled),
                this.On._ = s.key,
                window.mds_key = this.On._,
                this.On.k = s.session,
                this.On.C = s.country,
                this.On.A = s.frnd,
                this.On.O = s.content,
                this.On.T = "#testad" === window.location.hash ? "yes" : "no",
                this.On.M = "#madsdebug" === window.location.hash ? "yes" : "no",
                this.On.P = "#madslog" === window.location.hash ? "yes" : "no",
                window.localStorage) {
                    const t = "msl"
                      , i = window.localStorage.getItem(t);
                    i ? "1" === i && (this.On.P = "yes") : window.localStorage.setItem(t, "0")
                }
                if (this.On.I = s.default.iframe_reload_timeout_on_msg_receive,
                this.On.J.K = s.url,
                this.On.J.Y = s.urlBanner,
                this.On.jt.Et = s.urlPlacementBanner,
                this.On.jt.Ct = s.wmData.placements,
                this.Lt(s.wmData),
                s.country) {
                    const t = M[s.country];
                    z[t] && (this.rn = z[t])
                }
                this.Lt("LANG", s.country, this.rn),
                this.Lt("config", s);
                const l = {
                    browser: JSON.stringify(this.Tn()),
                    isMobile: this.On.j,
                    format: "new"
                };
                if (this.Bi("target_country_load", "", JSON.stringify(l)),
                "file:" === window.location.protocol)
                    return void this.Bi("load_from_file", "", "");
                Ut().then((t=>t.detect())).then((t=>{
                    if (t.bot)
                        this.Bi("player_bot", "", JSON.stringify(t));
                    else {
                        if (void 0 !== document.cookie && document.cookie.split(";").forEach((t=>{
                            const [i,s] = t.split("=");
                            i.trim().toLowerCase().includes("consent") && this.Bi("consent", i.trim().toLowerCase(), s)
                        }
                        )),
                        window.addEventListener("beforeunload", (()=>{
                            ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"].forEach((t=>document.removeEventListener(t, this.xn))),
                            this.Cn(),
                            this.Sn(),
                            this.$n();
                            const t = ((new Date).getTime() - this.It().B.getTime()) / 1e3;
                            this.Bi("page_leave", t.toString(), "")
                        }
                        ), {
                            once: !0
                        }),
                        this.On.j ? (this.Lt("mobile activate"),
                        this.Mn(s)) : (this.Lt("desktop activate"),
                        this.zn(s)),
                        this.It().J.wt || 1 !== this.It().J.ut || (this.It().J.Z = !1),
                        this.It().A) {
                            const t = document.createElement("meta");
                            t.name = "referrer",
                            t.content = "unsafe-url",
                            document.head.appendChild(t)
                        }
                        this.Pn(),
                        document.addEventListener(this.gn, this.kn, !1),
                        ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"].forEach((t=>document.addEventListener(t, this.xn))),
                        this.Dn(),
                        this.On.J.V && (this.ln = new st(this),
                        P.once(this.ln.Bt() + h, this.Sn)),
                        this.On.L.V && (this.cn = new rt(this),
                        P.once(this.cn.Bt() + h, this.Cn)),
                        this.It().jt.Ct.length > 0 && (this.dn = new at(this),
                        P.once(this.dn.Bt() + h, this.Cn)),
                        this.On.St.V ? (this.an = new nt(this),
                        P.once(this.an.Bt() + h, this.$n),
                        P.emit(d)) : P.emit(i)
                    }
                }
                ))
            }
            Ii() {
                return "visible" === document.visibilityState
            }
            In() {
                return "hidden" === document.visibilityState
            }
            Mn(t) {
                this.On.L.V = t.wmData.pl.mobile,
                this.On.L.H = t.wmData.pl.mobile_selector,
                this.On.L.N = t.wmData.pl.mobile_search_time,
                this.On.L.W = t.wmData.pl.mobile_search_close,
                this.On.L.U = t.wmData.pl.mobile_adv_time,
                this.On.L.G = t.wmData.pl.mobile_adv_close,
                this.On.St.V = t.wmData.ap.fs,
                this.On.St.nt = t.wmData.ap.fs_ttc,
                this.On.St.Y = t.urlFull,
                this.On.J.V = t.wmData.ap.mobile,
                this.On.J.X = 225,
                this.On.J.q = 400,
                this.On.J.Z = t.wmData.ap.ttc_on,
                this.On.J.nt = t.wmData.ap.ttc,
                this.On.J.ot = t.wmData.ap.ttc_digit,
                this.On.J.rt = t.wmData.ap.ttc_circle,
                this.On.J.gt = t.wmData.ap.mobile_panel,
                this.On.J.bt = t.wmData.ap.mobile_height,
                this.On.J.wt = !t.wmData.ap.static_mobile,
                this.On.J.ft = t.wmData.ap.mobile_fixed,
                this.On.J.yt = t.wmData.ap.mobile_position,
                this.On.J.xt = t.wmData.ap.mobile_banners,
                window.visualViewport && window.innerWidth !== window.visualViewport.width && ("br" === this.On.J.yt && (this.On.J.yt = "bl"),
                "tr" === this.On.J.yt && (this.On.J.yt = "tl")),
                this.On.J.kt = t.wmData.ap.mobile_pos_top,
                this.On.J.dt = t.wmData.ap.pro_click_proc,
                0 === t.wmData.ap.mobile_close ? this.On.J.ut = 1 : 1 === t.wmData.afp.static_autoclose && (this.On.J.ut = 0)
            }
            zn(t) {
                this.On.L.V = t.wmData.pl.desktop,
                this.On.L.H = t.wmData.pl.desktop_selector,
                this.On.L.N = t.wmData.pl.desktop_search_time,
                this.On.L.W = t.wmData.pl.desktop_search_close,
                this.On.L.U = t.wmData.pl.desktop_adv_time,
                this.On.L.G = t.wmData.pl.desktop_adv_close,
                this.On.St.Y = t.urlFull,
                this.On.J.V = t.wmData.ap.desktop,
                this.On.J.X = t.wmData.ap.desktop_y,
                this.On.J.q = t.wmData.ap.desktop_x,
                this.On.J.Z = t.wmData.afp.ttc_on,
                this.On.J.nt = t.wmData.afp.ttc,
                this.On.J.ot = t.wmData.afp.ttc_digit,
                this.On.J.rt = t.wmData.afp.ttc_circle,
                this.On.J.dt = t.wmData.afp.pro_click_proc,
                this.On.J.xt = t.wmData.afp.banners,
                0 === t.wmData.afp.static_autoclose ? this.On.J.ut = 2 : 1 === t.wmData.afp.static_autoclose ? this.On.J.ut = 1 : 2 === t.wmData.afp.static_autoclose && (this.On.J.ut = 0),
                this.On.J.wt = t.wmData.autoplay_float,
                this.On.J.ft = t.wmData.afp.fixed,
                this.On.J._t = t.wmData.afp.size_x,
                this.On.J.vt = t.wmData.afp.size_y,
                this.On.J.yt = t.wmData.afp.position,
                this.On.J.kt = t.wmData.ap.mobile_pos_top
            }
            Bi(t, i, s) {
                const h = {
                    t: t,
                    c: this.On.k,
                    a: i,
                    m: s,
                    v: this.On._,
                    o: void 0 !== typeof window.location.ancestorOrigins ? JSON.stringify(window.location.ancestorOrigins) : ""
                }
                  , e = [];
                for (const t in h)
                    e.push(t + "=" + encodeURIComponent(h[t]));
                const n = e.join("&");
                (new Image).src = "https://logger.moviead55.ru/logger.php?" + n
            }
            Tn() {
                let t, i, s, h = "", e = "";
                if (s = navigator.userAgent,
                t = s.match(/(opera|yabrowser|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i),
                null !== t) {
                    if (/trident/i.test(t[1]))
                        return i = /\brv[ :]+(\d+)/g.exec(s) || [],
                        {
                            name: "ie",
                            version: i[1] || ""
                        };
                    if ("Chrome" === t[1]) {
                        if (null != (i = s.match(/\bOPR\/(\d+)/)))
                            return {
                                name: "opera",
                                version: i[1]
                            };
                        if (null != (i = s.match(/\bYaBrowser\/(\d+)/)))
                            return {
                                name: "yabrowser",
                                version: i[1]
                            }
                    }
                    t = t[2] ? [t[1], t[2]] : [navigator.appName, navigator.appVersion, "-?"],
                    null != (i = s.match(/version\/(\d+)/i)) && t.splice(1, 1, i[1]),
                    h = t[0].toLowerCase(),
                    e = t[1]
                }
                return {
                    name: h,
                    version: e
                }
            }
            Lt(...t) {
                this.Vt(this.nn, ...t)
            }
            Vt(t, ...i) {
                if ("yes" === this.On.M || "yes" === this.On.P) {
                    let s = ["%cContainer " + t + ":", "background-color: GREEN; color: white; font-weight: bold; padding:1px 3px;border-radius: 3px;margin-right: 7px;"];
                    const h = Array.prototype.slice.call(i);
                    s = s.concat(h),
                    console.log(...s)
                }
            }
            Dn() {
                if (navigator.cookieEnabled && (this.wn = (t=>{
                    const i = t + "="
                      , s = document.cookie.split(";");
                    for (let t = 0; t < s.length; t++) {
                        let h = s[t];
                        for (; " " === h.charAt(0); )
                            h = h.substring(1, h.length);
                        if (0 === h.indexOf(i))
                            return h.substring(i.length, h.length)
                    }
                    return null
                }
                )(this.un) || "",
                null != this.wn.match(/['|"]g/) && (this.wn = this.wn.replace(/[^a-z0-9\-]/gi, ""),
                V(this.un, this.wn, 365)),
                this.Lt("this._madsUuid", this.wn, this.It().S),
                !this.wn && this.On.S))
                    if (H())
                        if (this.On.$ && !0 === Boolean(this.On.$)) {
                            this.Wt = !0,
                            window.addEventListener("message", this.En, !1);
                            const t = t=>{
                                this.Wt = !1,
                                null !== this.mn && (this.mn.remove(),
                                this.mn = null),
                                this._n = t.target,
                                t.preventDefault(),
                                this.pn = window.open("https://code.moviead55.ru/skyuuid.php", "", "width=1,height=1")
                            }
                            ;
                            this.mn = document.createElement("div"),
                            this.mn.setAttribute("style", "z-index:2147483646; position: fixed; top: 0px; left: 0px; background: #FFFFFF; opacity: 0.0001; width: 100%;height: 100%");
                            (document.body || document.documentElement).appendChild(this.mn),
                            this.mn.addEventListener("click", t, {
                                capture: !0,
                                once: !0
                            })
                        } else
                            this.Lt("skip masa");
                    else
                        this.Fn().then((()=>{
                            let t = document.getElementById("madsui");
                            if (null !== t) {
                                let i = window.getComputedStyle(t, ":before").getPropertyValue("content");
                                i = i.replace(/[^a-z0-9\-]/gi, ""),
                                t.remove(),
                                this.An(i)
                            }
                        }
                        ))
            }
            Fn() {
                return new Promise(((t,i)=>{
                    let s = document.createElement("link");
                    s.rel = "stylesheet",
                    s.href = "https://code.moviead55.ru/madstyle.css",
                    s.onload = ()=>{
                        let i = document.createElement("div");
                        i.setAttribute("id", "madsui"),
                        i.style.display = "none";
                        (document.body || document.documentElement).appendChild(i),
                        t(!0)
                    }
                    ,
                    document.head.appendChild(s)
                }
                ))
            }
            Fi() {
                return this.yn
            }
            Xi() {
                return this.wn
            }
            An(t) {
                this.wn = t,
                this.Lt("return", this.wn),
                V(this.un, this.wn, 365),
                this._n && this._n.click()
            }
            Bn() {
                return this.bn
            }
            Ln() {
                return this.vn
            }
            Pn() {
                void 0 === document.hidden && (void 0 !== document.mozHidden ? (this.vn = "mozHidden",
                this.gn = "mozvisibilitychange",
                this.bn = "mozVisibilityState") : void 0 !== document.msHidden ? (this.vn = "msHidden",
                this.gn = "msvisibilitychange",
                this.bn = "msVisibilityState") : void 0 !== document.webkitHidden && (this.vn = "webkitHidden",
                this.gn = "webkitvisibilitychange",
                this.bn = "webkitVisibilityState"))
            }
            uh() {
                return this.rn
            }
            It() {
                return this.On
            }
        }
        class Jt extends Gt {
            constructor(t) {
                super(t)
            }
        }
        "object" == typeof s.g && s.g && void 0 === s.g.WeakRef && (s.g.WeakRef = function(t) {
            function i(i) {
                t.set(this, i)
            }
            return i.prototype.deref = function() {
                return t.get(this)
            }
            ,
            i
        }(new WeakMap)),
        function() {
            let t = !1
              , i = null
              , s = 0;
            const h = ()=>{
                s >= 11 && clearTimeout(i),
                "loading" !== document.readyState && "visible" === document.visibilityState && (i && clearTimeout(i),
                document.removeEventListener("readystatechange", h),
                document.removeEventListener("visibilitychange", h),
                void 0 === window.movieadsPlaced ? (window.movieadsPlaced = !0,
                "true" === true && console.log("SCRIPT RELOADED"),
                window.c542e137060f28.mabf3088fa9641d = new Jt({
                    "default": {
                        "event_msg_name_to_reload_iframe": "movieads_ping",
                        "iframe_reload_timeout_on_msg_receive": 30
                    },
                    "disabled": false,
                    "key": "f4c21389f32e34e38126bc14a738dab5",
                    "url": "https:\/\/pl.21wiz.com\/frndnp.php?ver=1&autoplay=1&v=f4c21389f32e34e38126bc14a738dab5&cb=6d1cb94f-051b-4d4f-ad93-1e8e7d414dae&fclose=false&jh=cpzse3jqgeazq4m4f3ts65e&sth=qp4gn7djcczdrcmzpf7nha5xpw",
                    "session": "6d1cb94f-051b-4d4f-ad93-1e8e7d414dae",
                    "frameId": "uqwahflzovnxyijtpmkrsbgced",
                    "country": "BR",
                    "cb": "6d1cb94f-051b-4d4f-ad93-1e8e7d414dae",
                    "wmData": {
                        "afp": {
                            "fixed": 2,
                            "static_autoclose": 0,
                            "ttc_on": true,
                            "ttc": 90,
                            "ttc_digit": true,
                            "ttc_circle": true,
                            "pro_click_proc": 30,
                            "banners": true,
                            "fly_hidden": false,
                            "position": "br",
                            "size_x": 400,
                            "size_y": 225
                        },
                        "ap": {
                            "desktop": true,
                            "mobile": true,
                            "tv": false,
                            "console": true,
                            "fs": false,
                            "smode": false,
                            "desktop_x": 600,
                            "desktop_y": 330,
                            "pro_click_proc": 30,
                            "static_mobile": false,
                            "mobile_pos_top": false,
                            "mobile_panel": false,
                            "mobile_banners": true,
                            "mobile_banners_close_on": true,
                            "mobile_banners_close": 0,
                            "mobile_fixed": 2,
                            "mobile_position": "bl",
                            "mobile_height": 31,
                            "ttc_on": true,
                            "ttc": 60,
                            "ttc_digit": true,
                            "ttc_circle": true,
                            "mobile_close": 0,
                            "fs_ttc": 10
                        },
                        "autoplay_float": true,
                        "pl": {
                            "tv": false,
                            "console": false,
                            "desktop": false,
                            "desktop_selector": "",
                            "desktop_search_time": 30,
                            "desktop_search_close": false,
                            "desktop_adv_time": 15,
                            "desktop_adv_close": false,
                            "mobile": false,
                            "mobile_selector": "",
                            "mobile_search_time": 30,
                            "mobile_search_close": false,
                            "mobile_adv_time": 15,
                            "mobile_adv_close": false
                        },
                        "placements": []
                    },
                    "isMobile": false,
                    "blb": false,
                    "frnd": true,
                    "masa": false,
                    "content": "&tls=no&instant=yes",
                    "urlBanner": "https:\/\/code.21wiz.com\/go\/bmap?v=f4c21389f32e34e38126bc14a738dab5",
                    "urlPlacementBanner": "https:\/\/code.21wiz.com\/go\/bsmap?v=f4c21389f32e34e38126bc14a738dab5",
                    "urlFull": "https:\/\/code.21wiz.com\/go\/fmap?v=f4c21389f32e34e38126bc14a738dab5",
                    "ma": true
                })) : (t || (t = !0,
                window.setTimeout((()=>{
                    try {
                        if (window.mds_key) {
                            var t = {
                                t: "double_load",
                                c: "",
                                a: "",
                                m: "",
                                v: window.mds_key,
                                o: window.location.href
                            }
                              , i = [];
                            for (var s in t)
                                i.push(s + "=" + encodeURIComponent(t[s]));
                            var h = i.join("&");
                            (new Image).src = "https://logger.moviead55.ru/logger.php?" + h
                        }
                    } catch (t) {}
                }
                ), 3e3)),
                console.log("Movieads already initiated!"))),
                s++
            }
            ;
            window.c542e137060f28 = {},
            document.addEventListener("readystatechange", h),
            document.addEventListener("visibilitychange", h),
            i = window.setTimeout(h, 5e3),
            h()
        }()
    }
    )()
}
)();
