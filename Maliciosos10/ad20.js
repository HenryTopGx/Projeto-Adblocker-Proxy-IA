!function(e, t) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var n = t();
        for (var i in n)
            ("object" == typeof exports ? exports : e)[i] = n[i]
    }
}(self, (()=>(()=>{
    "use strict";
    var e, t, n, i = {
        r: e=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    }, r = {};
    i.r(r),
    function(e) {
        e.HORIZONTAL = "HORIZONTAL",
        e.RECTANGLE = "RECTANGLE",
        e.VERTICAL = "VERTICAL",
        e.MOBILE = "MOBILE",
        e.MOBILE_BIG = "MOBILE_BIG",
        e.MOBILE_HORIZONTAL = "MOBILE_HORIZONTAL",
        e.PORTRAIT = "PORTRAIT",
        e.BILLBOARD = "BILLBOARD"
    }(e || (e = {})),
    function(e) {
        e[e.Unknown = 0] = "Unknown",
        e[e.Ethernet = 1] = "Ethernet",
        e[e.WIFI = 2] = "WIFI",
        e[e.CellularNetworkUnknownGeneration = 3] = "CellularNetworkUnknownGeneration",
        e[e.CellularNetwork2G = 4] = "CellularNetwork2G",
        e[e.CellularNetwork3G = 5] = "CellularNetwork3G",
        e[e.CellularNetwork4G = 6] = "CellularNetwork4G",
        e[e.CellularNetwork5G = 7] = "CellularNetwork5G"
    }(t || (t = {}));
    var o, a = ((n = {})[e.HORIZONTAL] = [[970, 90], [728, 90], [468, 60], [234, 60]],
    n[e.RECTANGLE] = [[336, 280], [300, 250], [250, 250], [200, 200], [180, 150], [125, 125]],
    n[e.VERTICAL] = [[300, 600], [160, 600], [120, 600], [120, 240]],
    n[e.MOBILE] = [[320, 50]],
    n[e.MOBILE_BIG] = [[320, 100], [320, 50]],
    n[e.MOBILE_HORIZONTAL] = [[970, 90], [728, 90], [468, 60], [320, 100], [320, 50], [234, 60]],
    n[e.PORTRAIT] = [[300, 1050]],
    n[e.BILLBOARD] = [[970, 250]],
    n["300x600"] = [[300, 600], [160, 600]],
    n["336x280"] = [[336, 280], [300, 250]],
    n["728x90"] = [[728, 90], [468, 60]],
    n["970x90"] = [[970, 90], [728, 90], [468, 60]],
    n), s = "https://ads.assemblyexchange.com", c = "web_".concat("5.2.1"), l = "ana_client_uid", d = "ana_client_session_id", u = "ana_vast", h = "ana_staging", p = "https://xeno-soswcrde4a-uc.a.run.app/events", f = "https://securepubads.g.doubleclick.net/tag/js/gpt.js", g = "//c.amazon-adsystem.com/aax2/apstag.js", v = [new RegExp("^https://js.media-lab.ai$"), new RegExp("^https://ads.assemblyexchange.com$"), new RegExp("^https://staging.ads.assemblyexchange.com$"), new RegExp("^https://tpc.googlesyndication.com$"), new RegExp("^https?://ana-sdk-creative.s3-website-us-west-2.amazonaws.com$"), new RegExp("^https://\\w+.safeframe.googlesyndication.com$"), new RegExp("^https?://localhost:9000$"), new RegExp("^https?://127.0.0.1:9000$")], y = [new RegExp("^https://js.media-lab.ai$"), new RegExp("^https://ads.assemblyexchange.com$"), new RegExp("^https://staging.ads.assemblyexchange.com$"), new RegExp("^https?://localhost:2279$"), new RegExp("^https?://127.0.0.1:2279$")], m = 417, b = "frequency_cap", w = "cs_", E = "AssemblyBidderSyncState", I = 2500, T = "banner", A = 4, D = "_lr_env", S = "rtisCalled", k = function() {
        return k = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }
        ,
        k.apply(this, arguments)
    }, P = function(e, t, n, i) {
        return new (n || (n = Promise))((function(r, o) {
            function a(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function c(e) {
                var t;
                e.done ? r(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(a, s)
            }
            c((i = i.apply(e, t || [])).next())
        }
        ))
    }, _ = function(e, t) {
        var n, i, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function s(o) {
            return function(s) {
                return function(o) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                            0) : i.next) && !(r = r.call(i, o[1])).done)
                                return r;
                            switch (i = 0,
                            r && (o = [2 & o[0], r.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                i = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(r = a.trys,
                                (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < r[1]) {
                                    a.label = r[1],
                                    r = o;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2],
                                    a.ops.push(o);
                                    break
                                }
                                r[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e],
                            i = 0
                        } finally {
                            n = r = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }, R = function(e, t) {
        void 0 === t && (t = {});
        var n, i, r = new URL(e);
        return t && "{}" !== JSON.stringify(t) ? (void 0 !== r.searchParams ? Object.keys(t).forEach((function(e) {
            return r.searchParams.append(e, String(t[e]))
        }
        )) : r.href += "?" + (n = t,
        i = [],
        Object.keys(n).forEach((function(e) {
            i.push(encodeURIComponent(e) + "=" + encodeURIComponent(n[e]))
        }
        )),
        i.join("&")),
        r) : r
    }, O = ((o = {
        "Content-Type": "application/json"
    })["ana-api-key"] = "056363cfdcfcf7de5cea11820138b4d2daf3ca",
    o.lib_version = c,
    o.publisher_version = "web_0.0.1",
    o), C = function(e) {
        var t = e.url
          , n = e.params
          , i = void 0 === n ? {} : n
          , r = e.headers
          , o = void 0 === r ? {} : r
          , a = e.body
          , s = void 0 === a ? null : a
          , c = e.credentials
          , l = void 0 === c ? "include" : c;
        return P(void 0, void 0, void 0, (function() {
            return _(this, (function(e) {
                try {
                    return [2, fetch(R(t, i).toString(), {
                        body: JSON.stringify(s),
                        credentials: l,
                        headers: k(k({}, O), o),
                        method: "POST"
                    })]
                } catch (e) {
                    throw new Error(e)
                }
                return [2]
            }
            ))
        }
        ))
    }, L = function(e) {
        var t = e.url
          , n = e.params
          , i = void 0 === n ? {} : n
          , r = e.headers;
        return P(void 0, void 0, void 0, (function() {
            return _(this, (function(e) {
                try {
                    return [2, fetch(R(t, i).toString(), {
                        credentials: "include",
                        headers: k(k({}, O), r),
                        method: "GET"
                    })]
                } catch (e) {
                    throw new Error(e)
                }
                return [2]
            }
            ))
        }
        ))
    }, B = function(e, t, n) {
        if (n || 2 === arguments.length)
            for (var i, r = 0, o = t.length; r < o; r++)
                !i && r in t || (i || (i = Array.prototype.slice.call(t, 0, r)),
                i[r] = t[r]);
        return e.concat(i || Array.prototype.slice.call(t))
    }, M = function(e) {
        return e.map((function(e) {
            var t = e.toCustomJSON();
            return t.creative = "",
            t.impression_pixels = [],
            t.view_pixels = [],
            t.click_pixels = [],
            t
        }
        ))
    };
    function x() {
        return window.ANAWebSDKInstance
    }
    function N() {
        var e = x();
        if (e)
            return e.propertyId;
        var t = window.ANAWebPropertyId;
        return t || window.location.hostname
    }
    function U(e) {
        try {
            var t = e()
              , n = "__random_key__"
              , i = "__random_val__";
            return t.setItem(n, i),
            t.getItem(n) !== i ? !1 : (t.removeItem(n),
            !0)
        } catch (e) {
            return !1
        }
    }
    function V() {
        return !!window.ana_debug || -1 !== window.location.href.indexOf("ana_debug=1")
    }
    function j() {
        var e, n = window.navigator;
        if (!n.connection)
            return t.Unknown;
        switch (n.connection.effectiveType) {
        case "slow-2g":
        case "2g":
            e = t.CellularNetwork2G;
            break;
        case "3g":
            e = t.CellularNetwork3G;
            break;
        case "4g":
            e = t.CellularNetwork4G;
            break;
        default:
            e = t.Unknown
        }
        return e
    }
    function F() {
        var e, n = window.navigator;
        if (!n.connection)
            return t.Unknown;
        if (n.connection)
            switch (n.connection.type) {
            case "cellular":
                e = j();
                break;
            case "ethernet":
                e = t.Ethernet;
                break;
            case "wifi":
                e = t.WIFI;
                break;
            case "unknown":
                e = t.Unknown;
                break;
            case void 0:
                e = j();
                break;
            default:
                e = t.Unknown
            }
        return e
    }
    function G() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        V() && console.log.apply(console, B(["%c🚨ANA: ", "background: #222; color: #33c65a"], e, !1))
    }
    function W(e, t, n) {
        var i = "";
        if (n) {
            var r = new Date;
            r.setTime(r.getTime() + 60 * n * 1e3),
            i = "; expires=" + r.toUTCString()
        }
        document.cookie = e + "=" + (t || "") + i + "; path=/"
    }
    function H(e) {
        for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
            var r = n[i].trim();
            if (0 === r.indexOf(t))
                return r.substring(t.length, r.length)
        }
        return null
    }
    function q(e) {
        return new URLSearchParams(window.location.search).get(e)
    }
    function z(e) {
        var t = !1;
        return Array.from(document.getElementsByTagName("script")).forEach((function(n) {
            n.getAttribute("src") === e && (t = !0)
        }
        )),
        t
    }
    function J(e, t, n) {
        if (t.addEventListener)
            t.addEventListener(e, n, !1);
        else {
            if (!t.attachEvent)
                throw Error("No event listener found!");
            t.attachEvent("on".concat(e), n)
        }
    }
    var K = function(e, t) {
        if (t) {
            var n = t.options.dimensions.filter((function(e) {
                return 300 === e[0] && 600 === e[1]
            }
            )).length > 0
              , i = t.options.dimensions.filter((function(e) {
                return 300 === e[0] && (300 === e[1] || 250 === e[1])
            }
            )).length > 0;
            if (n && i) {
                var r = document.getElementById(t.elementID);
                if (!t.isSemiStickyUnit || 300 !== e.Width || 300 !== e.Height && 250 !== e.Height)
                    t.isSemiStickyUnit && e.Height > 300 && "assembly-semi-sticky-container" === r.parentElement.getAttribute("class") && (r.style.position = "relative",
                    r.style.marginTop = "0px");
                else {
                    var o = null;
                    "assembly-semi-sticky-container" !== r.parentElement.getAttribute("class") && ((o = document.createElement("div")).setAttribute("class", "assembly-semi-sticky-container"),
                    o.style.display = "block",
                    o.style.width = "300px",
                    o.style.height = "600px",
                    o.style.marginLeft = "auto",
                    o.style.marginRight = "auto",
                    o.style.borderTop = "1px solid transparent",
                    o.style.borderBottom = "1px solid transparent",
                    r.parentNode.insertBefore(o, r),
                    o.appendChild(r))
                }
            }
        } else
            G("slot is not defined")
    }
      , $ = function(e, t) {
        return e() ? Promise.resolve() : new Promise((function(n) {
            var i = setInterval((function() {
                e() && (G("Document in focus"),
                n(),
                clearInterval(i))
            }
            ), t)
        }
        ))
    }
      , Q = function(e) {
        return document.getElementById(e) ? Promise.resolve() : new Promise((function(t) {
            var n = setInterval((function() {
                document.getElementById(e) && (G("Element ".concat(e, " was added to the DOM")),
                t(),
                clearInterval(n))
            }
            ), 500)
        }
        ))
    }
      , Y = function(e) {
        var t = document.getElementById(e)
          , n = !1;
        return t ? n = !t.checkVisibility || t.checkVisibility() : n
    }
      , Z = 0
      , X = q("aversion");
    if (X) {
        var ee = "use_local_bundle" === X ? "http://localhost:9000/wana.js" : "https://js.media-lab.ai/wana." + X + ".js";
        if (!z(ee))
            throw function e(t) {
                if (!document.body)
                    return console.error("ana-web is triying to load another version before there is a body to append to. Retry [".concat(X, "][").concat(Z, "]")),
                    (Z += 1) < 10 ? void setTimeout((function() {
                        e(t)
                    }
                    ), 50) : void console.error("Ana Web exhausted retries while waiting for document.body . Retry [".concat(X, "][").concat(Z, "]"));
                z(t) || function(e, t) {
                    if (!z(e)) {
                        var n = document.createElement("script");
                        n.async = t,
                        n.src = e,
                        document.body.appendChild(n)
                    }
                }(t, !0)
            }(ee),
            Error("Ana Version parameter found, stoping current script to load requested version [".concat(X, "]"))
    }
    var te, ne, ie, re = function() {
        function e() {}
        return e.prototype.setItem = function(e, t) {
            this[e] = t
        }
        ,
        e.prototype.getItem = function(e) {
            var t = this[e];
            return t || (t = null),
            t
        }
        ,
        e.prototype.removeItem = function(e) {
            delete this[e]
        }
        ,
        e.prototype.clear = function() {
            var e = this;
            Object.keys(this).forEach((function(t) {
                delete e[t]
            }
            ))
        }
        ,
        e.prototype.key = function(e) {
            throw Error("not implemented (index = ".concat(e))
        }
        ,
        Object.defineProperty(e.prototype, "length", {
            get: function() {
                return Object.keys(this).length
            },
            enumerable: !1,
            configurable: !0
        }),
        e
    }();
    window.anaStorage = U((function() {
        return window.localStorage
    }
    )) ? window.localStorage : new re,
    window.anaSessionStorage = U((function() {
        return window.sessionStorage
    }
    )) ? window.sessionStorage : new re,
    function(e) {
        e[e.GOOGLE = 0] = "GOOGLE",
        e[e.ANA = 1] = "ANA"
    }(te || (te = {})),
    function(e) {
        e[e.VIDEO_JS = 0] = "VIDEO_JS",
        e[e.HTML5 = 1] = "HTML5"
    }(ne || (ne = {}));
    var oe, ae = null, se = function(e) {
        var t, n = document.activeElement;
        if (n && "IFRAME" === n.tagName && ae !== n && (ae = n,
        document.activeElement.parentNode && "DIV" === document.activeElement.parentNode.nodeName)) {
            var i = document.activeElement.parentNode
              , r = "";
            i.parentNode && "DIV" === i.parentNode.nodeName && i.parentNode.getAttribute("id") ? r = i.parentNode.getAttribute("id") : (i,
            r = i.getAttribute("id")),
            G("ANA Ad Click detected on adUnit", r);
            var o = null === (t = e.getBannerSlot(r)) || void 0 === t ? void 0 : t.currentBid;
            o ? (G("Rendering ClickPixels for adUnit", r),
            o.renderClickPixels()) : G("Failed Rendering ClickPixels for adUnit", r, "because bid is missing")
        }
    };
    !function(e) {
        e.RENDER = "render",
        e.DO_NOTHING = "doNothing",
        e.ADSERVER = "adserver"
    }(oe || (oe = {}));
    var ce, le = function() {
        function e(e) {
            var t = this;
            Object.keys(e).forEach((function(n) {
                var i = function(e, t) {
                    void 0 === t && (t = !1);
                    var n = e.replace(/([-_]id$)|([-_][a-z])/gi, (function(e) {
                        return e.toUpperCase().replace("-", "").replace("_", "")
                    }
                    ));
                    return "id" === n && (n = "ID"),
                    n && t && (n = n[0].toUpperCase() + n.slice(1)),
                    n
                }(n, !0);
                t[i] = e[n]
            }
            )),
            this.LastNomination = 0
        }
        return e.prototype.toCustomJSON = function() {
            var e = this
              , t = {};
            return Object.keys(this).forEach((function(n) {
                var i = n.replace(/\.?([A-Z]+)/g, (function(e, t) {
                    return "_" + t.toLowerCase()
                }
                )).replace(/^_/, "");
                t[i] = e[n]
            }
            )),
            t
        }
        ,
        e.prototype.renderPixels = function(e) {
            var t = this.BidID;
            e.forEach((function(e) {
                var n = document.createElement("img");
                n.setAttribute("data-bid-id", t),
                n.setAttribute("src", e),
                n.setAttribute("width", "1"),
                n.setAttribute("height", "1"),
                document.body.appendChild(n)
            }
            ))
        }
        ,
        e.prototype.renderImpressionPixels = function() {
            this.ImpressionPixels && this.renderPixels(this.ImpressionPixels)
        }
        ,
        e.prototype.renderViewPixels = function() {
            this.ViewPixels && this.renderPixels(this.ViewPixels)
        }
        ,
        e.prototype.renderClickPixels = function() {
            this.ClickPixels && this.renderPixels(this.ClickPixels)
        }
        ,
        e.prototype.removeImpressionPixels = function() {
            for (var e = [], t = document.getElementsByTagName("img"), n = 0; n < t.length; n++) {
                var i = t[n];
                i.getAttribute("data-bid-id") === String(this.BidID) && e.push(i)
            }
            e.forEach((function(e) {
                return document.body.removeChild(e)
            }
            ))
        }
        ,
        e.prototype.isExpired = function() {
            if (void 0 === this.Expires)
                return !1;
            var e = this.Expires - this.Received
              , t = new Date(this.Expires);
            this.ClientReceived && (t = new Date(this.ClientReceived + e));
            var n = new Date;
            return t.getTime() < n.getTime()
        }
        ,
        e
    }(), de = function() {
        for (var e = [], t = "0123456789abcdef", n = 0; n < 36; n++)
            e[n] = t.substr(Math.floor(16 * Math.random()), 1);
        return e[14] = "4",
        e[19] = t.substr(3 & +e[19] | 8, 1),
        e[8] = e[13] = e[18] = e[23] = "-",
        e.join("")
    }, ue = function() {
        return "y" === new URLSearchParams(window.location.search).get("tracing")
    }, he = function() {
        var e = anaStorage.getItem(l);
        return e || (e = de(),
        pe(e)),
        ue() ? "tr" + e : e
    }, pe = function(e) {
        anaStorage.setItem(l, e)
    }, fe = (ce = function(e, t) {
        return ce = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        ,
        ce(e, t)
    }
    ,
    function(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e
        }
        ce(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    );
    const ge = function(e) {
        function t(t, n) {
            var i = e.call(this, t) || this;
            return i.status = n,
            i
        }
        return fe(t, e),
        t
    }(Error);
    var ve = function(e, t, n, i) {
        return new (n || (n = Promise))((function(r, o) {
            function a(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function c(e) {
                var t;
                e.done ? r(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(a, s)
            }
            c((i = i.apply(e, t || [])).next())
        }
        ))
    }
      , ye = function(e, t) {
        var n, i, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function s(o) {
            return function(s) {
                return function(o) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                            0) : i.next) && !(r = r.call(i, o[1])).done)
                                return r;
                            switch (i = 0,
                            r && (o = [2 & o[0], r.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                i = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(r = a.trys,
                                (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < r[1]) {
                                    a.label = r[1],
                                    r = o;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2],
                                    a.ops.push(o);
                                    break
                                }
                                r[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e],
                            i = 0
                        } finally {
                            n = r = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }
      , me = function(e, t) {
        anaStorage.setItem(w + e, t)
    };
    var be = function(e) {
        var t = anaStorage.getItem(E)
          , n = null;
        try {
            if (t) {
                n = JSON.parse(t);
                var i = !0;
                if (e && Object.keys(e).forEach((function(e) {
                    Object.keys(n.bidders).find((function(t) {
                        return e === t
                    }
                    )) || (i = !1)
                }
                )),
                i)
                    return Object.keys(n.bidders).forEach((function(e) {
                        n.bidders[e].sync_date < Date.now() - 864e5 && (n.bidders[e].sync_date = Date.now(),
                        n.bidders[e].sync_counter = 0)
                    }
                    )),
                    n
            }
        } catch (e) {}
        var r = {
            group: -1,
            bidders: {}
        };
        return e ? (Object.keys(e).forEach((function(e) {
            r.bidders[e] = {
                sync_counter: -1,
                sync_date: Date.now()
            }
        }
        )),
        r) : r
    }
      , we = function(e, t) {
        var n, i, r = Object.keys(e).length, o = Math.ceil(r / 6);
        -1 === t.group ? t.group = (n = 0,
        i = o - 1,
        Math.floor(Math.random() * (i - n + 1) + n)) : (t.group++,
        t.group > o - 1 && (t.group = 0));
        var a = 6 * t.group
          , s = a + 6;
        s > r && (s = r);
        var c = Object.keys(e).slice(a, s);
        c.forEach((function(e) {
            void 0 !== t.bidders[e] && (t.bidders[e].sync_counter++,
            t.bidders[e].sync_counter > 3 && (t.bidders[e].sync_counter = 3))
        }
        )),
        c = c.filter((function(e) {
            return void 0 !== t.bidders[e] && t.bidders[e].sync_counter < 3
        }
        ));
        var l = {};
        return c.forEach((function(t) {
            l[t] = e[t]
        }
        )),
        [l, t]
    }
      , Ee = function(e) {
        var t = e.propertyId
          , n = e.uid;
        return ve(void 0, void 0, void 0, (function() {
            var e, i, r, o, a, s, c, l;
            return ye(this, (function(d) {
                switch (d.label) {
                case 0:
                    if (!t)
                        throw Error("propertyId is required");
                    if (h = be(null),
                    0 !== Object.keys(h.bidders).length && 0 === Object.keys(h.bidders).filter((function(e) {
                        return h.bidders[e].sync_counter < 3
                    }
                    )).length)
                        return G("Already all synced, no need to resync cookies across bidders"),
                        [2];
                    if (G("Not all bidders synced, continuing"),
                    void 0 === window.syncRequestLastTime && (window.syncRequestLastTime = {}),
                    void 0 === window.syncRequestLastTime[window.location.href] && (window.syncRequestLastTime[window.location.href] = 0),
                    (new Date).getTime() - window.syncRequestLastTime[window.location.href] < 2500)
                        return G("We have already called resync before 2.5 seconds, rejecting the call until later"),
                        [2];
                    window.syncRequestLastTime[window.location.href] = (new Date).getTime(),
                    G("Updating last resync timer"),
                    u = t,
                    window.ANAWebPropertyId = u,
                    pe(n),
                    G("sending a syncing cookie request to doh"),
                    d.label = 1;
                case 1:
                    return d.trys.push([1, 3, , 4]),
                    [4, Ue.UserSync.sync({
                        syncedBidderIds: []
                    })];
                case 2:
                    return e = d.sent(),
                    i = e.syncUrls,
                    r = e.cookieIds,
                    o = be(i),
                    a = we(i, o),
                    s = a[0],
                    function(e) {
                        try {
                            anaStorage.setItem(E, JSON.stringify(e))
                        } catch (e) {}
                    }(a[1]),
                    c = r ? Object.keys(r) : null,
                    G("got response from /doh/sync:", s, r),
                    Object.keys(s).forEach((function(e) {
                        c && -1 !== c.indexOf(e) || Ce(e, s[e])
                    }
                    )),
                    r && Object.keys(r).forEach((function(e) {
                        var t = r[e];
                        t && me(e, t)
                    }
                    )),
                    [2];
                case 3:
                    return l = d.sent(),
                    console.error("Something went wrong during user sync:", l),
                    [3, 4];
                case 4:
                    return [2]
                }
                var u, h
            }
            ))
        }
        ))
    };
    function Ie(e) {
        this.callCounter++,
        document.body ? document.body.appendChild(e) : this.callCounter < 200 && setTimeout(Ie.bind(this, e), 50)
    }
    var Te, Ae, De, Se, ke, Pe, _e, Re, Oe, Ce = function(e, t) {
        var n = N()
          , i = document.createElement("iframe");
        i.setAttribute("src", t),
        i.setAttribute("frameborder", "0"),
        i.setAttribute("scrolling", "no"),
        i.setAttribute("marginheight", "0"),
        i.setAttribute("marginwidth", "0"),
        i.setAttribute("TOPMARGIN", "0"),
        i.setAttribute("LEFTMARGIN", "0"),
        i.setAttribute("allowtransparency", "true"),
        i.setAttribute("width", "0"),
        i.setAttribute("height", "0"),
        i.setAttribute("data-property-id", n),
        G("creating cookie syncing iframe for " + e, t),
        setTimeout(Ie.bind({
            callCounter: 0
        }, i), 0)
    };
    !function(e) {
        e[e.PageLoadSoundOn = 1] = "PageLoadSoundOn",
        e[e.PageLoadSoundOff = 2] = "PageLoadSoundOff",
        e[e.ClickSoundOn = 3] = "ClickSoundOn",
        e[e.MouseOverSoundOn = 4] = "MouseOverSoundOn",
        e[e.EnterViewpointSoundOn = 5] = "EnterViewpointSoundOn",
        e[e.EnterViewpointSoundOff = 6] = "EnterViewpointSoundOff"
    }(Te || (Te = {})),
    function(e) {
        e[e.GenericPostRoll = -2] = "GenericPostRoll",
        e[e.GenericMidRoll = -1] = "GenericMidRoll",
        e[e.PreRoll = 0] = "PreRoll",
        e[e.MidRoll3Sec = 3] = "MidRoll3Sec",
        e[e.MidRoll5Sec = 5] = "MidRoll5Sec",
        e[e.MidRoll10Sec = 10] = "MidRoll10Sec",
        e[e.MidRoll15Sec = 15] = "MidRoll15Sec",
        e[e.MidRoll30Sec = 30] = "MidRoll30Sec",
        e[e.MidRoll60Sec = 60] = "MidRoll60Sec"
    }(Ae || (Ae = {})),
    function(e) {
        e[e.InStream = 1] = "InStream",
        e[e.InBanner = 2] = "InBanner",
        e[e.InArticle = 3] = "InArticle",
        e[e.InFeed = 4] = "InFeed",
        e[e.Interstitial = 5] = "Interstitial"
    }(De || (De = {})),
    function(e) {
        e[e.InStream = 1] = "InStream",
        e[e.Overlay = 2] = "Overlay"
    }(Se || (Se = {})),
    function(e) {
        e[e.OnVideoCompletion = 1] = "OnVideoCompletion",
        e[e.OnLeavingViewport = 2] = "OnLeavingViewport",
        e[e.OnLeavingViewportContinues = 3] = "OnLeavingViewportContinues"
    }(ke || (ke = {})),
    function(e) {
        e[e.Unknown = 0] = "Unknown",
        e[e.AboveTheFold = 1] = "AboveTheFold",
        e[e.Deprecated = 2] = "Deprecated",
        e[e.BelowTheFold = 3] = "BelowTheFold",
        e[e.Header = 4] = "Header",
        e[e.Footer = 5] = "Footer",
        e[e.Sidebar = 6] = "Sidebar",
        e[e.FullScreen = 7] = "FullScreen"
    }(Pe || (Pe = {})),
    function(e) {
        e[e.Vast10 = 1] = "Vast10",
        e[e.Vast20 = 2] = "Vast20",
        e[e.Vast30 = 3] = "Vast30",
        e[e.Vast10Wrapper = 4] = "Vast10Wrapper",
        e[e.Vast20Wrapper = 5] = "Vast20Wrapper",
        e[e.Vast30Wrapper = 6] = "Vast30Wrapper",
        e[e.Vast40 = 7] = "Vast40",
        e[e.Vast40Wrapper = 8] = "Vast40Wrapper",
        e[e.Daast10 = 9] = "Daast10",
        e[e.Daast10Wrapper = 10] = "Daast10Wrapper"
    }(_e || (_e = {})),
    function(e) {
        e[e.Vpaid10 = 1] = "Vpaid10",
        e[e.Vpaid20 = 2] = "Vpaid20",
        e[e.Mraid1 = 3] = "Mraid1",
        e[e.Ormma = 4] = "Ormma",
        e[e.Mraid2 = 5] = "Mraid2",
        e[e.Mraid3 = 6] = "Mraid3"
    }(Re || (Re = {})),
    function(e) {
        e[e.Streaming = 1] = "Streaming",
        e[e.Progressive = 2] = "Progressive",
        e[e.Download = 3] = "Download"
    }(Oe || (Oe = {}));
    var Le = function() {
        var e = H(d);
        return e || (e = de()),
        Be(e),
        ue() ? "tr" + e : e
    }
      , Be = function(e) {
        W(d, e, 30)
    }
      , Me = function(e, t, n, i) {
        return new (n || (n = Promise))((function(r, o) {
            function a(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function c(e) {
                var t;
                e.done ? r(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(a, s)
            }
            c((i = i.apply(e, t || [])).next())
        }
        ))
    }
      , xe = function(e, t) {
        var n, i, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function s(o) {
            return function(s) {
                return function(o) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                            0) : i.next) && !(r = r.call(i, o[1])).done)
                                return r;
                            switch (i = 0,
                            r && (o = [2 & o[0], r.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                i = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(r = a.trys,
                                (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < r[1]) {
                                    a.label = r[1],
                                    r = o;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2],
                                    a.ops.push(o);
                                    break
                                }
                                r[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e],
                            i = 0
                        } finally {
                            n = r = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }
      , Ne = function(e, t, n) {
        var i, r, o, a = x().gdprManager.gdprApplies, s = {
            ad_unit: e,
            auction_timeout: n,
            inventory_type: "web",
            additional_targeting: (r = t,
            o = {},
            Object.keys(r).forEach((function(e) {
                var t = r[e];
                Array.isArray(t) ? o[e] = t.join(",") : o[e] = t
            }
            )),
            o),
            property_id: N(),
            opportunity_data: {
                platform: "web",
                connection_type: F()
            },
            site: {
                page: document.location.href,
                referer: document.referrer
            },
            matched_ids: {
                ids: (i = {},
                Object.keys(anaStorage).forEach((function(e) {
                    0 === e.indexOf(w) && (i[e.slice(w.length)] = anaStorage.getItem(e))
                }
                )),
                i)
            },
            consent: {},
            requirement_set: a ? 1 : 0,
            session_id: Le()
        }, c = x().getUserIdentity();
        c.email ? s.opportunity_data.lr_envelope = {
            identifier: c.email,
            identifier_type: A
        } : c.envelope && "noEnvelope" !== c.envelope && (s.opportunity_data.liveramp_envelope = c.envelope);
        var l = x().gdprManager.tcString;
        return l && (s.consent.tcfV2 = l),
        s
    }
      , Ue = {
        BannerBids: {
            fetch: function(e) {
                var t = e.adAttemptId
                  , n = e.adAttemptStartTime
                  , i = e.adUnitID
                  , r = e.auctionTimeout
                  , o = e.elementID
                  , a = e.targeting;
                return Me(void 0, void 0, void 0, (function() {
                    var e, s, c, l, d, u, h, p;
                    return xe(this, (function(f) {
                        switch (f.label) {
                        case 0:
                            return f.trys.push([0, 5, , 6]),
                            [4, C({
                                url: "".concat(Fe(), "/wana/bids/request"),
                                params: {
                                    uid: he(),
                                    ad_unit: i
                                },
                                body: Ne(i, a, r)
                            })];
                        case 1:
                            return e = f.sent(),
                            s = e.status,
                            e.ok ? [3, 3] : [4, e.text()];
                        case 2:
                            throw c = f.sent(),
                            new ge(c,s);
                        case 3:
                            return [4, e.json()];
                        case 4:
                            if ((l = f.sent()).action === oe.DO_NOTHING)
                                throw new ge(oe.DO_NOTHING,m);
                            return d = l.bids || [],
                            [2, {
                                code: s,
                                bids: d.map((function(e) {
                                    return new le(e)
                                }
                                )),
                                ok: e.ok,
                                action: l.action,
                                refreshRate: l.refreshRate,
                                targeting: l.targeting
                            }];
                        case 5:
                            if (u = f.sent(),
                            h = Date.now() - n,
                            u.status && u.status === m)
                                throw p = u.message || u.code,
                                u.message === b && (console.warn("#".concat(o, " ").concat(i, " ANA user reached fcap")),
                                p = "fcap"),
                                x().eventsTracker.adAttemptFailed(i, p, h, null, t),
                                u;
                            throw console.error("HTTP error " + u.status),
                            x().eventsTracker.adAttemptFailed(i, "0", h, null, t),
                            u;
                        case 6:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            },
            invalidateBids: function(e) {
                var t = e.adUnitID
                  , n = e.bids;
                return G("invalidating bids for adUnitID ".concat(t, ":"), n),
                C({
                    url: "".concat(Fe(), "/wana/bids/invalidate"),
                    params: {
                        uid: he(),
                        ad_unit: t
                    },
                    body: {
                        bids: M(n)
                    }
                }).catch((function(e) {
                    var t = n.map((function(e) {
                        return e.BidID
                    }
                    )).join(", ");
                    console.error("Something went wrong when invalidating the bids: ".concat(t, "."), e)
                }
                ))
            }
        },
        VMAP: {
            fetch: function(e) {
                return Me(void 0, void 0, void 0, (function() {
                    var t, n, i, r, o;
                    return xe(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            t = function(e) {
                                var t = e.adUnitID
                                  , n = e.targeting
                                  , i = e.adPlacement
                                  , r = e.playbackMethod
                                  , o = e.adPosition
                                  , a = e.startDelay
                                  , s = e.playerWidth
                                  , c = e.playerHeight
                                  , l = e.auctionTimeout
                                  , d = e.audioPosterEnabled
                                  , u = Ne(t, n, l);
                                return u.video_delivery = Oe.Progressive,
                                u.video_placement = i,
                                u.video_playback_method = r,
                                u.video_position = o,
                                u.video_start_delay = a,
                                u.video_width = s,
                                u.video_height = c,
                                u.audio_poster_enabled = d,
                                u
                            }(e),
                            a.label = 1;
                        case 1:
                            return a.trys.push([1, 6, , 7]),
                            [4, C({
                                url: "".concat(Fe(), "/vmap/request"),
                                params: {
                                    uid: he()
                                },
                                body: t
                            })];
                        case 2:
                            return (n = a.sent()).ok ? [3, 4] : [4, n.text()];
                        case 3:
                            throw i = a.sent(),
                            new ge(i,n.status);
                        case 4:
                            return [4, n.json()];
                        case 5:
                            return r = a.sent(),
                            G("".concat(e.adUnitID, " got video bid response from ANA"), r),
                            [2, {
                                code: n.status,
                                tagUrl: r.tag_url
                            }];
                        case 6:
                            throw (o = a.sent()).status === m ? o.message === b && console.warn("#".concat(e.elementID, " ").concat(e.adUnitID, " ANA user reached fcap")) : console.error("Failed requesting video bids: HTTP error ".concat(o.status, "."), o),
                            o;
                        case 7:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
        },
        UserSync: {
            sync: function(e) {
                var t = e.syncedBidderIds;
                return Me(void 0, void 0, void 0, (function() {
                    var e, n, i, r, o, a, s, c, l;
                    return xe(this, (function(d) {
                        switch (d.label) {
                        case 0:
                            return d.trys.push([0, 3, , 4]),
                            e = N(),
                            n = x().gdprManager,
                            i = n.tcString,
                            r = n.gdprApplies,
                            [4, C({
                                url: "".concat(Fe(), "/doh/sync"),
                                params: {
                                    uid: he(),
                                    property_id: e
                                },
                                body: {
                                    synced_ids: t,
                                    consent: i,
                                    requirement_set: r ? 1 : 0
                                }
                            })];
                        case 1:
                            if (200 !== (o = d.sent()).status)
                                throw new Error("Failed getting sync URLs");
                            return [4, o.json()];
                        case 2:
                            return a = d.sent(),
                            s = a.sync_urls,
                            c = a.cookie_ids,
                            [2, {
                                syncUrls: s,
                                cookieIds: c
                            }];
                        case 3:
                            throw l = d.sent(),
                            new Error(l);
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
        },
        Hertz: {
            impression: function(e) {
                var t = e.adUnitID
                  , n = e.bidId
                  , i = void 0 === n ? "adserver" : n;
                return Me(void 0, void 0, void 0, (function() {
                    var e, n, r, o;
                    return xe(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            G("reporting on bid ".concat(i, " impression to hertz for ").concat(t)),
                            e = N(),
                            n = he(),
                            r = Le(),
                            a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]),
                            [4, L({
                                url: "".concat(Fe(), "/hertz/impression"),
                                params: {
                                    uid: n,
                                    ad_unit_id: t,
                                    session_id: r,
                                    bid_id: i,
                                    property_id: e
                                }
                            })];
                        case 2:
                            return [2, a.sent()];
                        case 3:
                            return o = a.sent(),
                            console.error("hertz/impression error:", o),
                            [3, 4];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
        },
        Events: {
            send: function(e) {
                var t = e.events;
                return Me(void 0, void 0, void 0, (function() {
                    return xe(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]),
                            [4, C({
                                url: p,
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: {
                                    events: t
                                },
                                credentials: "omit"
                            })];
                        case 1:
                            return [2, e.sent()];
                        case 2:
                            return G("Error sending events:", e.sent()),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
        }
    }
      , Ve = {
        rtis: function(e) {
            window.fetch && fetch("https://api.rlcdn.com/api/identity/envelope?pid=13731", {
                credentials: "include"
            }).then((function(e) {
                return e.json()
            }
            )).then((function(t) {
                t.envelope && e(t.envelope)
            }
            )).catch((function() {
                e("noEnvelope")
            }
            ))
        }
    }
      , je = function(e) {
        var t = e.adUnitID
          , n = e.bid;
        if (n)
            return n.renderImpressionPixels(),
            Ue.BannerBids.invalidateBids({
                adUnitID: t,
                bids: [n]
            })
    }
      , Fe = function() {
        return window.ana_staging || -1 !== window.location.href.indexOf(h) ? s.replace("https://", "https://staging.") : s
    }
      , Ge = function(e) {
        var t = e.getBoundingClientRect()
          , n = t.width * t.height
          , i = window.innerWidth || document.documentElement.clientWidth
          , r = window.innerHeight || document.documentElement.clientHeight;
        return We(t, i, r) / n >= .5
    }
      , We = function(e, t, n) {
        return (Math.min(t, e.right) - Math.max(0, e.left)) * (Math.min(n, e.bottom) - Math.max(0, e.top))
    }
      , He = function() {
        return He = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }
        ,
        He.apply(this, arguments)
    }
      , qe = function(e, t, n, i) {
        return new (n || (n = Promise))((function(r, o) {
            function a(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function c(e) {
                var t;
                e.done ? r(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(a, s)
            }
            c((i = i.apply(e, t || [])).next())
        }
        ))
    }
      , ze = function(e, t) {
        var n, i, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function s(o) {
            return function(s) {
                return function(o) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                            0) : i.next) && !(r = r.call(i, o[1])).done)
                                return r;
                            switch (i = 0,
                            r && (o = [2 & o[0], r.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                i = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(r = a.trys,
                                (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < r[1]) {
                                    a.label = r[1],
                                    r = o;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2],
                                    a.ops.push(o);
                                    break
                                }
                                r[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e],
                            i = 0
                        } finally {
                            n = r = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }
      , Je = {
        adUnitID: "",
        format: e.HORIZONTAL,
        elementID: "",
        collapseBeforeFill: !1,
        collapseIfNoFill: !1,
        dimensions: null,
        baseTargeting: {},
        passThroughANA: !1,
        apsEnabled: !0,
        adServerRender: !0,
        refreshOnURLChange: !1
    }
      , Ke = function() {
        function e(e, t) {
            var n = this;
            this.stopRefreshCycle = function() {
                n.refreshTimeoutId && clearTimeout(n.refreshTimeoutId)
            }
            ,
            this.listenForURLChanges = function() {
                return qe(n, void 0, void 0, (function() {
                    var e;
                    return ze(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, (n = window.location.href,
                            new Promise((function(e) {
                                var t = setInterval((function() {
                                    var i = window.location.href;
                                    n !== i && (G("URL changed from ".concat(n, " to ").concat(i)),
                                    e(),
                                    clearInterval(t))
                                }
                                ), 300)
                            }
                            )))];
                        case 1:
                            return t.sent(),
                            e = Date.now(),
                            e - this.previousRefreshTime >= 5e3 && (this.skipViewValidation = !0,
                            this.previousRefreshTime = e,
                            this.stopRefreshCycle(),
                            this.refresh()),
                            this.listenForURLChanges(),
                            [2]
                        }
                        var n
                    }
                    ))
                }
                ))
            }
            ,
            this.waitForRemoval = function() {
                return qe(n, void 0, void 0, (function() {
                    return ze(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, (t = this.elementID,
                            document.getElementById(t) ? new Promise((function(e) {
                                var n = setInterval((function() {
                                    document.getElementById(t) || (G("Element ".concat(t, " was removed from the DOM")),
                                    e(),
                                    clearInterval(n))
                                }
                                ), 500)
                            }
                            )) : Promise.resolve())];
                        case 1:
                            return e.sent(),
                            this.anaWeb.eventsTracker.adSlotRemoved(this.adUnitID, this.elementID),
                            this.stopRefreshCycle(),
                            this.waitForAddition(),
                            [2]
                        }
                        var t
                    }
                    ))
                }
                ))
            }
            ,
            this.waitForAddition = function() {
                return qe(n, void 0, void 0, (function() {
                    return ze(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, Q(this.elementID)];
                        case 1:
                            return e.sent(),
                            this.anaWeb.eventsTracker.adSlotRecreated(this.adUnitID, this.elementID),
                            this.skipViewValidation = !0,
                            this.previousRefreshTime = Date.now(),
                            this.refresh(),
                            this.waitForRemoval(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            this.waitForInvisible = function() {
                return qe(n, void 0, void 0, (function() {
                    return ze(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, (t = this.elementID,
                            Y(t) ? new Promise((function(e) {
                                var n = setInterval((function() {
                                    Y(t) || (G("Element ".concat(t, " is invisible")),
                                    e(),
                                    clearInterval(n))
                                }
                                ), 500)
                            }
                            )) : Promise.resolve())];
                        case 1:
                            return e.sent(),
                            this.isVisible = !1,
                            this.waitForVisible(),
                            [2]
                        }
                        var t
                    }
                    ))
                }
                ))
            }
            ,
            this.waitForVisible = function() {
                return qe(n, void 0, void 0, (function() {
                    return ze(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, (t = this.elementID,
                            Y(t) ? Promise.resolve() : new Promise((function(e) {
                                var n = setInterval((function() {
                                    Y(t) && (G("Element ".concat(t, " is visible")),
                                    e(),
                                    clearInterval(n))
                                }
                                ), 500)
                            }
                            )))];
                        case 1:
                            return e.sent(),
                            this.previousRefreshTime = Date.now(),
                            this.isVisible = !0,
                            this.waitForInvisible(),
                            [2, new Promise((function(e) {
                                e()
                            }
                            ))]
                        }
                        var t
                    }
                    ))
                }
                ))
            }
            ,
            this.onAdView = function(e) {
                n.hasBeenViewed = !0,
                e && e()
            }
            ,
            this.options = He(He({}, Je), t),
            this.anaWeb = e,
            this.adUnitID = this.options.adUnitID,
            this.elementID = this.options.elementID,
            this.dimensions = this.options.dimensions,
            this.baseTargeting = He({}, this.options.baseTargeting),
            this.additionalTargeting = {},
            this.passThroughANA = this.options.passThroughANA,
            this.apsEnabled = e.apsEnabled && this.options.apsEnabled,
            this.adServerRender = this.options.adServerRender,
            this.isSemiStickyUnit = !!this.options.isSemiStickyUnit,
            this.adLoadCallback = this.options.onAdLoad,
            this.refreshCount = 0,
            this.currentBid = null,
            this.hasBeenViewed = !1,
            this.impCount = 0,
            this.focusPromise = null,
            this.isVisible = Y(this.elementID),
            this.skipViewValidation = !1,
            this.refreshTimeoutId = null,
            this.waitForRemoval(),
            this.previousRefreshTime = Date.now(),
            this.options.refreshOnURLChange && this.listenForURLChanges()
        }
        return e.prototype.updateBaseTargeting = function(e) {
            this.baseTargeting = He(He({}, this.baseTargeting), e)
        }
        ,
        e.prototype.checkForFocus = function() {
            return qe(this, void 0, void 0, (function() {
                var e = this;
                return ze(this, (function(t) {
                    return this.focusPromise || (this.focusPromise = $(this.anaWeb.hasFocus.bind(this.anaWeb), 300).then((function() {
                        e.focusPromise = null
                    }
                    ))),
                    [2, this.focusPromise]
                }
                ))
            }
            ))
        }
        ,
        e.prototype.fetchANABids = function() {
            return qe(this, void 0, void 0, (function() {
                var e, t, n, i, r, o, a, s, c;
                return ze(this, (function(l) {
                    switch (l.label) {
                    case 0:
                        return this.refreshCount++,
                        this.passThroughANA ? [2] : (this.adAttemptStartTime = Date.now(),
                        e = He(He(He({}, this.anaWeb.globalTargeting), this.baseTargeting), this.additionalTargeting),
                        n = (t = this).anaWeb,
                        i = t.adUnitID,
                        r = t.elementID,
                        o = t.adAttemptStartTime,
                        a = this.adAttemptID || de(),
                        [4, Ue.BannerBids.fetch({
                            adAttemptId: a,
                            adAttemptStartTime: o,
                            adUnitID: i,
                            auctionTimeout: n.auctionTimeout,
                            elementID: r,
                            targeting: e
                        })]);
                    case 1:
                        return s = l.sent(),
                        this.action = s.action,
                        this.refreshRate = s.refreshRate,
                        this.additionalTargeting = s.targeting,
                        (c = s.bids).length > 0 && n.bidManager.addBids(c, i),
                        [2, s]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.fetchAPSBids = function(e) {
            var t = this;
            return void 0 === e && (e = this.elementID),
            this.anaWeb.apsEnabled ? new Promise((function(n) {
                window.apstag.fetchBids({
                    slots: [{
                        slotID: e,
                        slotName: t.adUnitID,
                        sizes: t.dimensions
                    }]
                }, (function(e) {
                    G("APS responded with bids for ".concat(t), e),
                    n(e)
                }
                ))
            }
            )) : Promise.resolve()
        }
        ,
        e.prototype.updateTargeting = function() {}
        ,
        e.prototype.refresh = function() {
            throw new Error("Method not implemented by child class.")
        }
        ,
        e.prototype.isViewNotRequired = function() {
            return this.skipViewValidation || 0 === this.impCount || 0 === this.refreshCount
        }
        ,
        e.prototype.waitForViewAndFocus = function() {
            return qe(this, void 0, void 0, (function() {
                var e;
                return ze(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, Q(this.elementID)];
                    case 1:
                        return t.sent(),
                        e = this.isViewNotRequired() ? Promise.resolve() : this.waitingForView(),
                        [2, Promise.all([this.checkForFocus(), e])]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.getTopBid = function(e) {
            void 0 === e && (e = !0);
            var t = this.anaWeb
              , n = this.adUnitID;
            return t.bidManager.getBid(n, e)
        }
        ,
        e.prototype.getBidCount = function() {
            var e = this.anaWeb
              , t = this.adUnitID;
            return e.bidManager.getBidCount(t)
        }
        ,
        e.prototype.renderInElement = function(e, t, n) {
            var i = this;
            if (document.getElementById(e)) {
                var r = this.adUnitID
                  , o = this.anaWeb;
                !function(e, t, n) {
                    var i = document.getElementById(e);
                    if (!i)
                        throw Error("tried to render ad on missing element " + e);
                    for (; i.firstChild; )
                        i.removeChild(i.firstChild);
                    "none" === i.style.display && (i.style.display = "inline-block",
                    i.style.lineHeight = "0px");
                    var r = document.createElement("iframe");
                    r.setAttribute("srcdoc", t.Creative),
                    r.setAttribute("frameborder", "0"),
                    r.setAttribute("scrolling", "no"),
                    r.setAttribute("marginheight", "0"),
                    r.setAttribute("marginwidth", "0"),
                    r.setAttribute("TOPMARGIN", "0"),
                    r.setAttribute("LEFTMARGIN", "0"),
                    r.setAttribute("allowtransparency", "true");
                    var o = t.Width
                      , a = t.Height;
                    r.setAttribute("width", "".concat(o)),
                    r.setAttribute("height", "".concat(a)),
                    i.append(r),
                    ie || (ie = setInterval((function() {
                        return se(n)
                    }
                    ), 25))
                }(e, t, o),
                je({
                    adUnitID: r,
                    bid: t
                }),
                o.eventsTracker.slotRendered(this.adUnitID, t),
                o.bidManager.useBid(r, t.BidID),
                this.onAdLoad(t),
                this.currentViewMonitorStop = function(e) {
                    var t = e.elementID
                      , n = e.bid
                      , i = e.progress
                      , r = e.slotAction
                      , o = e.onView
                      , a = !1
                      , s = i || 0
                      , c = function() {
                        return a || (clearInterval(l),
                        a = !0),
                        s
                    }
                      , l = setInterval((function() {
                        var e = document.getElementById(t);
                        if (!e)
                            return G("viewability monitor: missing element ".concat(t, ". stopping monitor")),
                            void c();
                        Ge(e) ? s++ : s = 0,
                        s >= 20 && (G("viewability monitor: viewed ".concat(t, ". stopping monitor")),
                        n && r === oe.RENDER && n.renderViewPixels(),
                        o && o(),
                        c())
                    }
                    ), 50);
                    return c
                }({
                    elementID: e,
                    bid: t,
                    progress: 0,
                    slotAction: this.action,
                    onView: function() {
                        return i.onAdView(n)
                    }
                })
            } else
                console.error("missing element for direct render")
        }
        ,
        e.prototype.alreadyRendered = function() {
            throw Error("unimplemented method: alreadyRendered")
        }
        ,
        e.prototype.isWaitingForView = function() {
            return this.impCount > 0 && !this.hasBeenViewed
        }
        ,
        e.prototype.waitingForView = function() {
            var e = this
              , t = function() {
                return e.impCount > 0 && e.hasBeenViewed
            };
            return t() ? Promise.resolve() : new Promise((function(e) {
                var n = setInterval((function() {
                    t() && setTimeout((function() {
                        e(),
                        clearInterval(n)
                    }
                    ), 2e3)
                }
                ), 300)
            }
            ))
        }
        ,
        e.prototype.onAdLoad = function(e) {
            this.impCount += 1,
            this.hasBeenViewed = !1,
            this.skipViewValidation = !1,
            this.currentBid = e,
            this.adLoadCallback && this.adLoadCallback()
        }
        ,
        e.prototype.triggerNextRefresh = function() {
            var e = this;
            if (this.refreshRate && !(this.refreshRate < 0)) {
                var t = this.refreshRate;
                this.currentBid && this.currentBid.HasWon && t < this.currentBid.MinimumRefresh && (t = this.currentBid.MinimumRefresh),
                this.refreshTimeoutId = setTimeout((function() {
                    e.previousRefreshTime = Date.now(),
                    e.refresh().catch((function() {
                        G("refresh failed")
                    }
                    ))
                }
                ), t)
            }
        }
        ,
        e
    }();
    Ke.prototype.toString = function() {
        return "ANASlot('".concat(this.adUnitID, "', '").concat(this.elementID, "')")
    }
    ;
    var $e = function() {
        var e = function(t, n) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
            ,
            e(t, n)
        };
        return function(t, n) {
            if ("function" != typeof n && null !== n)
                throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            function i() {
                this.constructor = t
            }
            e(t, n),
            t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype,
            new i)
        }
    }()
      , Qe = function() {
        return Qe = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }
        ,
        Qe.apply(this, arguments)
    }
      , Ye = function(e, t, n, i) {
        return new (n || (n = Promise))((function(r, o) {
            function a(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function c(e) {
                var t;
                e.done ? r(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(a, s)
            }
            c((i = i.apply(e, t || [])).next())
        }
        ))
    }
      , Ze = function(e, t) {
        var n, i, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function s(o) {
            return function(s) {
                return function(o) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                            0) : i.next) && !(r = r.call(i, o[1])).done)
                                return r;
                            switch (i = 0,
                            r && (o = [2 & o[0], r.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                i = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(r = a.trys,
                                (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < r[1]) {
                                    a.label = r[1],
                                    r = o;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2],
                                    a.ops.push(o);
                                    break
                                }
                                r[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e],
                            i = 0
                        } finally {
                            n = r = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }
      , Xe = function(e, t, n) {
        googletag.cmd.push((function() {
            googletag.pubads().addEventListener(e, (function(e) {
                e.slot.getSlotElementId() === t && n(e)
            }
            ))
        }
        ))
    }
      , et = function(e) {
        function t(t, n) {
            var i, r, o = e.call(this, t, n) || this;
            if (o.fetched = function() {
                G("fetched ".concat(o))
            }
            ,
            o.rendered = function() {
                G("rendered ".concat(o))
            }
            ,
            o.format = o.options.format,
            o.collapseBeforeFill = o.options.collapseBeforeFill,
            o.collapseIfNoFill = o.options.collapseIfNoFill,
            o.slot = null,
            o.currentBid = null,
            o.slotType = te.GOOGLE,
            o.attemptCount = 0,
            o.resetRequestMgr(),
            i = o.adUnitID,
            r = new RegExp(/\/(\d+)(\/([\.|A-Z|a-z|\d|_|\-|\*|“|\!|\\|\(|\)])+)+\/*/),
            i.length > 100 || !r.test(i))
                throw Error("Invalid AdunitID format, ".concat(o));
            if (!function(e) {
                if (!Array.isArray(e) || 0 === e.length)
                    return !1;
                if (2 !== e.length || Array.isArray(e[0]) || Array.isArray(e[1])) {
                    for (var t = !0, n = 0, i = e; n < i.length; n++) {
                        var r = i[n];
                        Array.isArray(r) ? 2 !== r.length || "number" != typeof r[0] || "number" != typeof r[1] ? t = !1 : parseInt(r[0].toString()) === r[0] && parseInt(r[1].toString()) === r[1] || (t = !1) : t = !1
                    }
                    return t
                }
                return !(!Number.isInteger(e[0]) || !Number.isInteger(e[1]))
            }(o.dimensions))
                throw Error("Invalid Adunit size, should be an array of bidimensional integer arrays, or it can be one bidimesional array of integers, ".concat(o));
            if (!function(e) {
                var t;
                return !((null === (t = window.googletag) || void 0 === t ? void 0 : t.pubads) && googletag.pubads && googletag.pubads().getSlots().find((function(t) {
                    return t.getSlotElementId() === e
                }
                )))
            }(o.elementID))
                throw Error("Invalid elementID, might already been used by another adUnit, ".concat(o));
            return o.anaWeb.lazyLoad ? (Promise.all(o.fetchBids()).catch((function(e) {
                G("ANA canceling ad attempt. Reason:", e)
            }
            )),
            V() && (Xe("slotRequested", o.elementID, o.fetched),
            Xe("slotOnload", o.elementID, o.rendered)),
            o) : (googletag.cmd.push((function() {
                o.registerSlot(),
                !o.anaWeb.lazyLoad && o.refresh()
            }
            )),
            o)
        }
        return $e(t, e),
        t.prototype.resetRequestMgr = function() {
            this.requestMgr = {
                didDirectRender: !1
            }
        }
        ,
        t.prototype.alreadyRendered = function() {
            return !!this.requestMgr.didDirectRender && (this.requestMgr.didDirectRender = !1,
            !0)
        }
        ,
        t.prototype.maybeRenderBid = function(e) {
            return !(!e || this.adServerRender && this.action !== oe.RENDER) && (K(e, this),
            this.requestMgr.didDirectRender = !0,
            this.renderInElement(this.elementID, e),
            !0)
        }
        ,
        t.prototype.removeSlot = function() {
            var e = this;
            googletag.cmd.push((function() {
                var t = e.slot;
                googletag.destroySlots([t]),
                e.slot = null,
                document.getElementById(e.elementID).innerHTML = null
            }
            ));
            var t = this.anaWeb
              , n = t.createdSlots.indexOf(this);
            -1 !== n && t.createdSlots.splice(n, 1)
        }
        ,
        t.prototype.setAdServerRender = function(e) {
            this.adServerRender = e
        }
        ,
        t.prototype.updateAnaTargeting = function() {
            var e = this
              , t = this.getTopBid(!0)
              , n = this.slot
              , i = this.baseTargeting;
            if (t) {
                if (this.currentBid = t,
                this.maybeRenderBid(t)) {
                    var r = Date.now() - this.adAttemptStartTime;
                    return void this.anaWeb.eventsTracker.adAttemptSucceeded(this.adUnitID, this.getBidCount(), r, null, this.adAttemptID)
                }
                null === n ? (G("updateTargeting - register slot for ".concat(this)),
                this.registerSlot(t.Targeting)) : Object.keys(Qe(Qe({}, i), t.Targeting)).forEach((function(i) {
                    G("updateTargeting - set targeting ".concat(i, ", ").concat(t.Targeting[i], " for ").concat(e)),
                    n.setTargeting(i, t.Targeting[i])
                }
                ))
            } else
                this.currentBid = null,
                null === n && (G("updateTargeting - register slot with no bid for ".concat(this)),
                this.registerSlot());
            this.updateRefreshCountTargeting()
        }
        ,
        t.prototype.updateApsTargeting = function() {
            window.apstag.setDisplayBids()
        }
        ,
        t.prototype.refreshGPTSlot = function(e) {
            var t = this;
            if (this.requestMgr.didDirectRender)
                return G("refreshGPTSlot, skipping since slot was rendered directly"),
                e(),
                console.warn("resync all bidders from direct render"),
                void setTimeout((function() {
                    t.anaWeb.syncUserCookies()
                }
                ), 1e3);
            this.currentBid && this.anaWeb.eventsTracker.targetingSent(this.adUnitID),
            this.adServerRender && googletag.cmd.push((function() {
                t.updateRefreshCountTargeting(),
                G("Calling GAM refresh for ", t),
                googletag.pubads().refresh([t.slot]),
                console.warn("resync all bidders from single slot"),
                setTimeout((function() {
                    t.anaWeb.syncUserCookies()
                }
                ), 1e3),
                e()
            }
            ))
        }
        ,
        t.prototype.refresh = function() {
            return Ye(this, void 0, void 0, (function() {
                var e, t = this;
                return Ze(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return this.isVisible ? [3, 2] : [4, this.waitForVisible()];
                    case 1:
                        n.sent(),
                        n.label = 2;
                    case 2:
                        return n.trys.push([2, 4, , 5]),
                        [4, this.waitForViewAndFocus()];
                    case 3:
                        return n.sent(),
                        [2, new Promise((function(e) {
                            t.doRefresh(e)
                        }
                        ))];
                    case 4:
                        return G("Could not refresh slot:", e = n.sent()),
                        this.anaWeb.eventsTracker.refreshFailed(this.adUnitID, e),
                        [3, 5];
                    case 5:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.doRefresh = function(e) {
            var t = this;
            this.adAttemptID = de(),
            this.slot && googletag.cmd.push((function() {
                t.slot.clearTargeting()
            }
            ));
            var n = this.fetchBids()
              , i = !0
              , r = function() {
                i && (i = !1,
                t.triggerNextRefresh(),
                t.refreshGPTSlot(e))
            };
            Promise.all(n).then(r).catch((function(e) {
                i = !1,
                G("ANA canceling ad attempt. Reason:", e)
            }
            )),
            setTimeout(r, this.anaWeb.auctionTimeout + 500)
        }
        ,
        t.prototype.registerSlot = function(e) {
            var t = this;
            G("registerSlot - define slot for ".concat(this));
            var n = this
              , i = n.dimensions
              , r = n.format
              , o = n.collapseBeforeFill
              , a = n.collapseIfNoFill
              , s = n.adUnitID
              , c = n.elementID
              , l = n.baseTargeting
              , d = this.prepareDimensions(i, r);
            this.slot = googletag.defineSlot(s, d, c);
            var u = this.slot;
            Xe("impressionViewable", this.elementID, this.onViewHandler.bind(this)),
            Xe("slotRenderEnded", this.elementID, (function(e) {
                var n = Date.now() - t.adAttemptStartTime;
                if (e.isEmpty || !1 === e.slotContentChanged) {
                    t.anaWeb.eventsTracker.adAttemptFailed(s, "nofill", n, e, t.adAttemptID)
                } else
                    t.anaWeb.eventsTracker.adAttemptSucceeded(t.adUnitID, t.getBidCount(), n, e, t.adAttemptID),
                    t.onAdLoad(t.currentBid)
            }
            )),
            u.setCollapseEmptyDiv(o, a);
            var h = Qe(Qe({}, l), e);
            h && Object.keys(h).length && Object.keys(h).forEach((function(e) {
                G("registerSlot - set targeting ".concat(e, ", ").concat(h[e], " for ").concat(t)),
                u.setTargeting(e, h[e])
            }
            )),
            u.addService(googletag.pubads()),
            googletag.display(c)
        }
        ,
        t.prototype.updateRefreshCountTargeting = function() {
            this.slot.getTargetingKeys && void 0 === this.slot.getTargetingKeys().find((function(e) {
                return "mlrf" === e
            }
            )) && (this.attemptCount++,
            this.slot.setTargeting("mlrf", this.attemptCount.toString()))
        }
        ,
        t.prototype.onViewHandler = function(e) {
            this.currentBid && this.currentBid.HasWon && !this.hasBeenViewed ? (G("Rendering ViewPixels for ".concat(this.adUnitID), e),
            this.currentBid.renderViewPixels()) : G("Ignoring ViewPixels on AdUnit since it has already been viewed, or assembly did not win on ", this.adUnitID),
            this.onAdView()
        }
        ,
        t.prototype.prepareDimensions = function(e, t) {
            return e && e.length ? e : a[t] || []
        }
        ,
        t.prototype.fetchBids = function() {
            var e = this;
            this.anaWeb.eventsTracker.adAttemptMade(this.adUnitID);
            var t = this.fetchANABids().then((function() {
                G("ANA responded for ".concat(e)),
                googletag.cmd.push((function() {
                    e.updateAnaTargeting()
                }
                ))
            }
            ))
              , n = Promise.resolve();
            return this.apsEnabled && (n = this.fetchAPSBids().then((function() {
                googletag.cmd.push((function() {
                    e.updateApsTargeting()
                }
                ))
            }
            ))),
            [t, n]
        }
        ,
        t
    }(Ke);
    et.prototype.toString = function() {
        return "BannerSlot('".concat(this.adUnitID, "', '").concat(this.elementID, "')")
    }
    ;
    var tt = function(e, t, n, i) {
        return new (n || (n = Promise))((function(r, o) {
            function a(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function c(e) {
                var t;
                e.done ? r(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(a, s)
            }
            c((i = i.apply(e, t || [])).next())
        }
        ))
    }
      , nt = function(e, t) {
        var n, i, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function s(o) {
            return function(s) {
                return function(o) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                            0) : i.next) && !(r = r.call(i, o[1])).done)
                                return r;
                            switch (i = 0,
                            r && (o = [2 & o[0], r.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                i = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(r = a.trys,
                                (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < r[1]) {
                                    a.label = r[1],
                                    r = o;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2],
                                    a.ops.push(o);
                                    break
                                }
                                r[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e],
                            i = 0
                        } finally {
                            n = r = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }
      , it = function() {
        function e(e, t, n, i, r, o) {
            var a = this;
            this.anaBidRequest = function(e) {
                return tt(a, void 0, void 0, (function() {
                    var t, n;
                    return nt(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return i.trys.push([0, 2, , 3]),
                            [4, e()];
                        case 1:
                            return t = i.sent(),
                            this.imaInit(t),
                            [3, 3];
                        case 2:
                            return n = i.sent(),
                            console.warn("".concat(this.videoPlayerID, " error getting ANA bids: ").concat(n.message)),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            this.playerType = e,
            this.adUnitID = i,
            this.targeting = r,
            this.adsManagerLoadedCustomCbk = t,
            this.videoPlayerID = n,
            this.html5Player = document.getElementById(n),
            this.audioPosterURL = o,
            this.initAds()
        }
        return e.prototype.initAds = function() {
            throw new Error("must be implemented by child class")
        }
        ,
        e.prototype.imaInit = function(e) {
            throw new Error("must be implemented by child class")
        }
        ,
        e.prototype.vastUrlAndVideoSrc = function(e) {
            G("".concat(this.videoPlayerID, " imaInit"));
            var t, n = (t = window.ana_vast) || (-1 !== window.location.href.indexOf("ana_vast=") && (t = R(window.location.href).searchParams.get(u)) ? t : "");
            if (n || (n = e),
            n) {
                var i = this.html5Player.currentSrc;
                if (!i && "" !== i)
                    throw Error("".concat(this.videoPlayerID, " does not have a valid src"));
                return G("".concat(this.videoPlayerID, " vast used: ").concat(n, ", src: ").concat(i)),
                {
                    videoVastUrl: n,
                    videoSrc: i
                }
            }
            G("".concat(this.videoPlayerID, " we don't have an ad to show"))
        }
        ,
        e.prototype.adsManagerLoadedCallback = function(e) {
            throw new Error("must be implemented by child class")
        }
        ,
        e.prototype.addDefaultListeners = function() {
            var e = this
              , t = window.google;
            this.adsManagerLoadedCustomCbk && this.adsManagerLoadedCustomCbk(this.html5Player, this.playerType, this.adsManager);
            var n = [t.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, t.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, t.ima.AdEvent.Type.CLICK, t.ima.AdEvent.Type.VIDEO_CLICKED, t.ima.AdEvent.Type.VIDEO_ICON_CLICKED, t.ima.AdEvent.Type.STARTED, t.ima.AdEvent.Type.AD_PROGRESS, t.ima.AdEvent.Type.AD_BUFFERING, t.ima.AdEvent.Type.IMPRESSION, t.ima.AdEvent.Type.PAUSED, t.ima.AdEvent.Type.RESUMED, t.ima.AdEvent.Type.FIRST_QUARTILE, t.ima.AdEvent.Type.MIDPOINT, t.ima.AdEvent.Type.THIRD_QUARTILE, t.ima.AdEvent.Type.COMPLETE, t.ima.AdEvent.Type.DURATION_CHANGE, t.ima.AdEvent.Type.USER_CLOSE, t.ima.AdEvent.Type.LOADED, t.ima.AdEvent.Type.ALL_ADS_COMPLETED, t.ima.AdEvent.Type.SKIPPED, t.ima.AdEvent.Type.LINEAR_CHANGED, t.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, t.ima.AdEvent.Type.AD_METADATA, t.ima.AdEvent.Type.AD_BREAK_READY, t.ima.AdEvent.Type.LOG, t.ima.AdEvent.Type.VOLUME_CHANGED, t.ima.AdEvent.Type.VOLUME_MUTED, t.ima.AdEvent.Type.INTERACTION]
              , i = function() {
                var t;
                t = e.adUnitID,
                Ue.Hertz.impression({
                    adUnitID: t
                })
            };
            this.adsManager.addEventListener(t.ima.AdEvent.Type.IMPRESSION, i),
            this.adsManager.addEventListener(t.ima.AdEvent.Type.IMPRESSION, (function() {
                return e.adsManager.removeEventListener(t.ima.AdEvent.Type.IMPRESSION, i)
            }
            ));
            for (var r = 0; r < n.length; r++)
                this.adsManager.addEventListener(n[r], this.onAdEvent.bind(this)),
                G("".concat(this.videoPlayerID, " bind ").concat(n[r], " ad event"))
        }
        ,
        e.prototype.onAdEvent = function(e) {
            void 0 === e && (e = {});
            var t = window.google
              , n = e.type;
            n !== t.ima.AdEvent.Type.AD_PROGRESS && G("".concat(this.videoPlayerID, " ad event: ").concat(n))
        }
        ,
        e
    }()
      , rt = function() {
        var e = function(t, n) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
            ,
            e(t, n)
        };
        return function(t, n) {
            if ("function" != typeof n && null !== n)
                throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            function i() {
                this.constructor = t
            }
            e(t, n),
            t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype,
            new i)
        }
    }()
      , ot = function(e) {
        function t(t, n, i, r, o) {
            var a = e.call(this, ne.VIDEO_JS, t, n, i, r, o) || this;
            return a.toggleOverlayedBtnContainer = function() {
                a.overlayedBtnContainer && (a.overlayedBtnContainer.hidden = !a.overlayedBtnContainer.hidden)
            }
            ,
            a.onComplete = function() {
                a.adPlaying = !1
            }
            ,
            a.onStarted = function() {
                a.adPlaying = !0
            }
            ,
            a.onSkipped = function() {
                a.adPlaying = !1,
                a.adDisplayContainer.destroy(),
                a.html5Player.play()
            }
            ,
            a.onContentPauseRequested = function() {
                a.adPlaying = !0,
                a.html5Player.pause()
            }
            ,
            a.onContentResumeRequested = function() {
                a.adPlaying = !1,
                a.html5Player.play()
            }
            ,
            a.onAdLoaded = function(e) {
                e.getAd().isLinear() || a.html5Player.play()
            }
            ,
            G("initializing IMAManagerHTML5 for", n),
            a.adPlaying = !1,
            a
        }
        return rt(t, e),
        t.prototype.initAds = function() {
            var e = this
              , t = window.google;
            if (!this.html5Player)
                throw Error("internal videojs element was not found on the page using id=".concat(this.videoPlayerID, ", this is probably because this was initialized before videojs was ready"));
            if (t) {
                this.overlayedBtnContainer = document.createElement("div"),
                this.overlayedBtnContainer.classList.add("ana-ad-overlay"),
                this.overlayedBtnContainer.id = this.videoPlayerID + "_ana_ad_overlay";
                var n = document.createElement("div");
                n.classList.add("ana-ad-container"),
                n.id = this.videoPlayerID + "_ana_ad_container",
                this.html5Player.after(this.overlayedBtnContainer, n),
                this.adDisplayContainer = new t.ima.AdDisplayContainer(n,this.html5Player),
                this.adsLoader = new t.ima.AdsLoader(this.adDisplayContainer),
                this.adsLoader.addEventListener(t.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.adsManagerLoadedCallback.bind(this), !1),
                this.adsLoader.addEventListener(t.ima.AdErrorEvent.Type.AD_ERROR, console.error, !1),
                this.html5Player.onended = this.adsLoader.contentComplete,
                window.addEventListener("resize", (function() {
                    if (e.adsManager) {
                        var n = e.html5Player.clientWidth
                          , i = e.html5Player.clientHeight;
                        e.adsManager.resize(n, i, t.ima.ViewMode.NORMAL)
                    }
                }
                ))
            } else
                console.error("Google SDK not found.")
        }
        ,
        t.prototype.imaInit = function(e) {
            if (e && "" !== e) {
                var t = window.google
                  , n = this.vastUrlAndVideoSrc(e).videoVastUrl;
                this.adsManager && this.adsManager.destroy(),
                this.adsLoader.contentComplete(),
                this.audioPosterURL && t.ima.settings.setFeatureFlags({
                    audioPosterImageEnabled: !0,
                    audioPosterImageDefaultUrl: this.audioPosterURL
                });
                var i = new t.ima.AdsRequest;
                i.adTagUrl = n,
                i.linearAdSlotWidth = 640,
                i.linearAdSlotHeight = 480,
                i.nonLinearAdSlotWidth = 640,
                i.nonLinearAdSlotHeight = 150,
                i.forceNonLinearFullSlot = !0,
                i.omidAccessModeRules = {},
                i.omidAccessModeRules[t.ima.OmidVerificationVendor.OTHER] = t.ima.OmidAccessMode.FULL,
                this.adsLoader.requestAds(i),
                this.overlayedBtnContainer.addEventListener("click", this.onOverlayedBtnContainerClick.bind(this)),
                this.overlayedBtnContainer.addEventListener("touchend", this.onOverlayedBtnContainerClick.bind(this))
            }
        }
        ,
        t.prototype.onOverlayedBtnContainerClick = function(e) {
            e.cancelable && e.preventDefault(),
            this.adPlaying ? this.adsManager.resume() : this.playAds(),
            this.toggleOverlayedBtnContainer()
        }
        ,
        t.prototype.playAds = function() {
            var e = window.google;
            this.adDisplayContainer && this.adDisplayContainer.initialize(),
            this.html5Player.load();
            try {
                var t = this.html5Player.getBoundingClientRect()
                  , n = t.width
                  , i = t.height;
                this.adsManager.init(n, i, e.ima.ViewMode.NORMAL),
                this.adsManager.addEventListener(e.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this.onContentPauseRequested),
                this.adsManager.addEventListener(e.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this.onContentResumeRequested),
                this.adsManager.addEventListener(e.ima.AdEvent.Type.LOADED, this.onAdLoaded),
                this.adsManager.addEventListener(e.ima.AdEvent.Type.STARTED, this.onStarted),
                this.adsManager.addEventListener(e.ima.AdEvent.Type.SKIPPED, this.onSkipped),
                this.adsManager.addEventListener(e.ima.AdEvent.Type.COMPLETE, this.onComplete),
                this.adsManager.addEventListener(e.ima.AdEvent.Type.PAUSED, this.toggleOverlayedBtnContainer),
                this.adsManager.start()
            } catch (e) {
                this.html5Player.play()
            }
        }
        ,
        t.prototype.adsManagerLoadedCallback = function(e) {
            G("".concat(this.videoPlayerID, " AdsManager loaded"));
            var t = window.google
              , n = new t.ima.AdsRenderingSettings;
            n.restoreCustomPlaybackStateOnAdBreakComplete = !0,
            n.uiElements = [t.ima.UiElements.AD_ATTRIBUTION, t.ima.UiElements.COUNTDOWN],
            this.adsManager = e.getAdsManager(this.html5Player, n),
            this.addDefaultListeners()
        }
        ,
        t
    }(it)
      , at = function() {
        var e = function(t, n) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
            ,
            e(t, n)
        };
        return function(t, n) {
            if ("function" != typeof n && null !== n)
                throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            function i() {
                this.constructor = t
            }
            e(t, n),
            t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype,
            new i)
        }
    }()
      , st = function(e) {
        function t(t, n, i, r, o) {
            var a = e.call(this, ne.VIDEO_JS, t, n, i, r, o) || this;
            return G("initializing IMAManagerVideoJS for", n),
            navigator.userAgent.match(/iPad|Android/i) && a.html5Player.hasAttribute("controls") && a.html5Player.removeAttribute("controls"),
            a.overlayedBtnContainer = document.getElementById(n),
            a
        }
        return at(t, e),
        t.prototype.initAds = function() {
            var e, t = window.videojs, n = window.google;
            if (!t)
                throw new Error("VideoJS not detected, dependency was not added correctly");
            if (n) {
                if (this.html5Player = document.getElementById(this.videoPlayerID + "_html5_api"),
                !this.html5Player)
                    throw Error("internal videojs element was not found on the page using id=".concat(this.videoPlayerID, ", this is probably because this was initialized before videojs was ready"));
                this.videoJSPlayer = t(this.videoPlayerID);
                var i = {
                    id: this.videoPlayerID,
                    adLabel: "Advertisement",
                    disableAdControls: !1,
                    showControlsForJSAds: !0,
                    adsManagerLoadedCallback: this.adsManagerLoadedCallback.bind(this),
                    omidVendorAccess: (e = {},
                    e[n.ima.OmidVerificationVendor.OTHER] = n.ima.OmidAccessMode.FULL,
                    e)
                };
                this.videoJSPlayer.ima ? (this.audioPosterURL && n.ima.settings.setFeatureFlags({
                    audioPosterImageEnabled: !0,
                    audioPosterImageDefaultUrl: this.audioPosterURL
                }),
                this.videoJSPlayer.ima(i)) : console.error("IMA not found for video JS")
            } else
                console.error("Google SDK not found.")
        }
        ,
        t.prototype.imaInit = function(e) {
            if (e && "" !== e) {
                var t = this.vastUrlAndVideoSrc(e)
                  , n = t.videoVastUrl
                  , i = t.videoSrc;
                this.videoJSPlayer.ima.setContentWithAdTag(i, n, !1),
                this.videoJSPlayer.ima.requestAds(),
                this.boundBidRequestClick = this.onOverlayedBtnContainerClick.bind(this),
                this.boundBidRequestTouch = this.onOverlayedBtnContainerClick.bind(this),
                this.overlayedBtnContainer.addEventListener("click", this.boundBidRequestClick),
                this.overlayedBtnContainer.addEventListener("touchend", this.boundBidRequestTouch)
            }
        }
        ,
        t.prototype.onOverlayedBtnContainerClick = function(e) {
            e.cancelable && e.preventDefault(),
            this.videoJSPlayer.ima.initializeAdDisplayContainer(),
            this.overlayedBtnContainer.removeEventListener("click", this.boundBidRequestClick),
            this.overlayedBtnContainer.removeEventListener("touchend", this.boundBidRequestTouch)
        }
        ,
        t.prototype.adsManagerLoadedCallback = function() {
            G("".concat(this.videoPlayerID, " AdsManager loaded")),
            this.adsManager = this.videoJSPlayer.ima.getAdsManager(),
            this.addDefaultListeners()
        }
        ,
        t
    }(it)
      , ct = function() {
        var e = function(t, n) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
            ,
            e(t, n)
        };
        return function(t, n) {
            if ("function" != typeof n && null !== n)
                throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            function i() {
                this.constructor = t
            }
            e(t, n),
            t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype,
            new i)
        }
    }()
      , lt = function() {
        return lt = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }
        ,
        lt.apply(this, arguments)
    }
      , dt = function(e, t, n, i) {
        return new (n || (n = Promise))((function(r, o) {
            function a(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function c(e) {
                var t;
                e.done ? r(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(a, s)
            }
            c((i = i.apply(e, t || [])).next())
        }
        ))
    }
      , ut = function(e, t) {
        var n, i, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function s(o) {
            return function(s) {
                return function(o) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                            0) : i.next) && !(r = r.call(i, o[1])).done)
                                return r;
                            switch (i = 0,
                            r && (o = [2 & o[0], r.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                i = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(r = a.trys,
                                (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < r[1]) {
                                    a.label = r[1],
                                    r = o;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2],
                                    a.ops.push(o);
                                    break
                                }
                                r[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e],
                            i = 0
                        } finally {
                            n = r = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }
      , ht = function(e) {
        function t(t, n, i) {
            var r, o = e.call(this, t, i) || this;
            if (o.fetchANAVMAP = function() {
                return dt(o, void 0, void 0, (function() {
                    var e, t, n, i, r;
                    return ut(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            e = this.currentDimensions(),
                            t = lt(lt({}, this.anaWeb.globalTargeting), this.baseTargeting),
                            this.adAttemptID = de(),
                            this.adAttemptStartTime = Date.now(),
                            this.anaWeb.eventsTracker.adAttemptMade(this.adUnitID),
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 3, , 4]),
                            [4, Ue.VMAP.fetch({
                                adPlacement: this.adPlacement,
                                adPosition: this.adPosition,
                                adUnitID: this.adUnitID,
                                auctionTimeout: this.anaWeb.auctionTimeout,
                                elementID: this.elementID,
                                playbackMethod: this.playbackMethod,
                                playerHeight: e[0][1],
                                playerWidth: e[0][0],
                                startDelay: this.startDelay,
                                targeting: t,
                                audioPosterEnabled: !!this.audioPosterURL
                            })];
                        case 2:
                            if (n = o.sent(),
                            r = Date.now() - this.adAttemptStartTime,
                            this.anaWeb.eventsTracker.adAttemptSucceeded(this.adUnitID, 0, r, null, this.adAttemptID),
                            n.tagUrl.includes("bids=&") && !this.adServerRender)
                                throw Error("did not receive ANA bid and ad server render disabled");
                            return [2, "".concat(n.tagUrl).concat(this.adServerRender ? "" : "&ad_server_render=0")];
                        case 3:
                            throw i = o.sent(),
                            r = Date.now() - this.adAttemptStartTime,
                            i.status ? i.status === m && i.message !== b && this.anaWeb.eventsTracker.adAttemptFailed(this.adUnitID, "fcap", r, null, this.adAttemptID) : this.anaWeb.eventsTracker.adAttemptFailed(this.adUnitID, "0", r, null, this.adAttemptID),
                            i;
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            o.playerType = n,
            void 0 === i.startDelay)
                throw Error("startDelay must be specified for video ad slots");
            if (i.startDelay < -2)
                throw Error("startDelay must be valid");
            if (void 0 === i.adPlacement)
                throw Error("adPlacement must be specified for video ad slots");
            if (void 0 === i.adPosition)
                throw Error("adPosition must be specified for video ad slots");
            if (i.adPosition < 1 || i.adPosition > 7)
                throw Error("adPosition must be valid not Unknown");
            if (!i.playbackMethod || i.playbackMethod < 1 || i.playbackMethod > 6)
                throw Error("playbackMethod must be specified for video ad slots");
            if (o.audioPosterURL = i.audioPosterURL,
            o.startDelay = i.startDelay,
            o.adPlacement = i.adPlacement,
            o.adPosition = i.adPosition,
            o.playbackMethod = i.playbackMethod,
            o.wrapperDiv = document.getElementById(o.elementID),
            o.dimensions && 0 === o.dimensions.length)
                throw new Error("".concat(o.elementID, " dimensions must be either omitted or have at least one element in the array"));
            switch (o.playerType) {
            case ne.VIDEO_JS:
                r = st;
                break;
            case ne.HTML5:
                r = ot;
                break;
            default:
                throw Error("unsupported video player type: ".concat(n))
            }
            return o.videoManager = new r(i.adsManagerLoadedCbk,o.elementID,o.adUnitID,o.baseTargeting,o.audioPosterURL),
            o.videoManager.anaBidRequest(o.fetchANAVMAP),
            o
        }
        return ct(t, e),
        t.prototype.currentDimensions = function() {
            var e;
            if (this.dimensions)
                e = this.dimensions;
            else {
                var t = this.playerDimensions();
                e = [[t.w, t.h]]
            }
            if (0 === e.length || 2 !== e[0].length)
                throw new Error("".concat(this.elementID, " final dimensions are not valid: ").concat(e));
            return e
        }
        ,
        t.prototype.playerDimensions = function() {
            var e = this.wrapperDiv.getBoundingClientRect()
              , t = Math.floor(e.width)
              , n = Math.floor(e.height);
            if (0 === t || 0 === n)
                throw Error("".concat(this.elementID, " wrong video ad slot dimensions: ").concat(t, "x").concat(n));
            return {
                w: t,
                h: n
            }
        }
        ,
        t
    }(Ke);
    ht.prototype.toString = function() {
        return "VideoSlot('".concat(this.adUnitID, "', ").concat(this.playerType, ", '").concat(this.elementID, "')")
    }
    ;
    var pt = function() {
        function e(e) {
            if (this.anaWeb = e,
            window.addEventListener)
                window.addEventListener("message", this.handleMessage.bind(this), !1),
                window.addEventListener("unload", (function() {
                    e && e.eventsTracker && e.eventsTracker.pageviewExit()
                }
                ));
            else {
                if (!window.attachEvent)
                    throw Error("No event listener found!");
                window.attachEvent("onmessage", this.handleMessage.bind(this))
            }
        }
        return e.prototype.handleMessage = function(e) {
            if (e && (a = e.origin,
            v.some((function(e) {
                return e.test(a)
            }
            ))) && e.data && e.data.bidID) {
                var t = e.data
                  , n = t.adUnitID
                  , i = t.bidID
                  , r = this.anaWeb.bidManager.getBidToRender(n, i);
                if (r) {
                    r.HasWon = !0;
                    var o = this.anaWeb.createdSlots.find((function(e) {
                        return e.adUnitID === n
                    }
                    ));
                    K(r, o),
                    e.source ? e.source.postMessage(JSON.stringify(r), e.origin) : console.error("e.source is not available in this context"),
                    je({
                        adUnitID: n,
                        bid: r
                    }),
                    this.anaWeb.eventsTracker.slotRendered(n, r)
                }
            }
            var a;
            e && function(e) {
                return y.some((function(t) {
                    return t.test(e)
                }
                ))
            }(e.origin) && e.data && e.data.msgType && "cookieSyncingSuccess" === e.data.msgType && (G("synced cookie message event for ".concat(e.data.bidderId, ", id=").concat(e.data.partnerUid)),
            me(e.data.bidderId, e.data.partnerUid))
        }
        ,
        e
    }()
      , ft = function() {
        return ft = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }
        ,
        ft.apply(this, arguments)
    }
      , gt = {
        enableSingleRequest: !1,
        globalTargeting: {},
        sandboxIframe: !1,
        collapseEmptyDivs: !1,
        preCollapseEmptyDivs: !1,
        enableLazyLoad: !1,
        setPPID: !1,
        lazyLoadOptConfig: {
            fetchMarginPercent: 800,
            renderMarginPercent: 400,
            mobileScaling: 3
        }
    }
      , vt = function(e, t) {
        if (void 0 === t && (t = null),
        window.googletag && void 0 !== window.googletag.pubads)
            throw new Error("attempting to initialize ANA sdk with pre-initialized gpt integration. aborting");
        var n;
        !function(e) {
            document.body || console.error("loadGPTTagJS called before there is a body to append to");
            var t = document.createElement("script");
            t.async = !0,
            t.defer = !0,
            t.src = f,
            document.body.appendChild(t),
            G("added GPT script on the page ".concat(f)),
            e && e.eventsTracker && e.eventsTracker.gptAdded()
        }(t);
        var i = (n = e ? ft(ft({}, gt), e) : gt).enableSingleRequest
          , r = n.globalTargeting
          , o = n.sandboxIframe
          , a = n.collapseEmptyDivs
          , s = n.enableLazyLoad
          , c = n.lazyLoadOptConfig
          , l = n.preCollapseEmptyDivs
          , d = n.setPPID;
        window.googletag = window.googletag || {},
        Object.assign(window.googletag, {
            cmd: window.googletag.cmd || []
        }),
        window.googlefc = window.googlefc || {
            callbackQueue: []
        },
        googletag.cmd.push((function() {
            t && t.eventsTracker && t.eventsTracker.gptLoaded(),
            i && googletag.pubads().enableSingleRequest(),
            o && googletag.pubads().setSafeFrameConfig({
                sandbox: !0
            }),
            a && googletag.pubads().collapseEmptyDivs(l),
            r && Object.keys(r).length && Object.keys(r).forEach((function(e) {
                googletag.pubads().setTargeting(e, r[e])
            }
            )),
            s ? googletag.pubads().enableLazyLoad(c) : googletag.pubads().disableInitialLoad(),
            t && d && googletag.pubads().setPublisherProvidedId(t.uid),
            googletag.enableServices(),
            window.addEventListener("blur", (function() {
                "IFRAME" === document.activeElement.nodeName ? (mt(t),
                bt(t)) : yt = null
            }
            )),
            window.addEventListener("focus", (function() {
                yt = null
            }
            ))
        }
        ))
    }
      , yt = null
      , mt = function(e) {
        var t = document.activeElement;
        if (t && "IFRAME" === t.tagName && yt !== t && (yt = t,
        document.activeElement.parentNode && "DIV" === document.activeElement.parentNode.nodeName)) {
            var n = document.activeElement.parentNode
              , i = null
              , r = "";
            n.parentNode && "DIV" === n.parentNode.nodeName && n.parentNode.getAttribute("id") ? (i = n.parentNode,
            r = i.getAttribute("id")) : (i = n,
            r = n.getAttribute("id")),
            googletag.pubads().getSlots().forEach((function(t) {
                if (r === t.getSlotElementId() && e) {
                    var n = e.getBannerSlot(r);
                    n && n.currentBid && n.currentBid.HasWon ? (G("Rendering ClickPixels if available for adUnit", r),
                    n.currentBid.renderClickPixels()) : G("Ignoring click pixel on add since it does not have a currentBid on", r)
                }
            }
            ))
        }
    }
      , bt = function(e) {
        setInterval((function() {
            mt(e)
        }
        ), 25)
    }
      , wt = function() {
        return wt = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }
        ,
        wt.apply(this, arguments)
    }
      , Et = {
        pubID: null,
        adServer: "googletag",
        bidTimeout: 500
    }
      , It = function(e) {
        if (window.apstag)
            throw new Error("attempting to initialize ANA sdk with pre-initialized apt integration");
        !function() {
            function e(e, t) {
                window.apstag._Q.push([e, t])
            }
            document.body || console.error("loadAPSTagJS called before there is a body to append to"),
            window.apstag = {
                init: function() {
                    for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    e("i", t)
                },
                fetchBids: function() {
                    for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    e("f", t)
                },
                setDisplayBids: function() {},
                targetingKeys: function() {
                    return []
                },
                _Q: []
            };
            var t = document.createElement("script");
            t.async = !0,
            t.src = g;
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(t, n),
            G("added APS script on the page ".concat(g))
        }();
        var t = wt(wt({}, Et), e)
          , n = t.pubID
          , i = t.adServer
          , r = t.bidTimeout;
        if (!n)
            throw new Error("to fully enable amazon publisher tag integration you need to pass at least `pubID`");
        window.apstag.init({
            pubID: n,
            adServer: i,
            bidTimeout: r
        })
    }
      , Tt = function(e, t) {
        var n = this;
        this.resolveTcPromise = function(e) {
            e(),
            n.isTcResolved = !0
        }
        ,
        this.onConsentApiReady = function(e, t) {
            n.fcLoaded = !0,
            window.__tcfapi("ping", null, (function(e) {
                var i = q("fc");
                e.gdprApplies || "alwaysshow" === i ? n.gdprApplies = !0 : n.resolveTcPromise(t)
            }
            )),
            window.__tcfapi("addEventListener", null, (function(i) {
                var r = i.eventStatus
                  , o = i.tcString;
                if ("tcloaded" !== r && "useractioncomplete" !== r || (n.isTcResolved || n.resolveTcPromise(t),
                n.tcString = o,
                n.gdprApplies = !0),
                "cmpuishown" === r) {
                    var a = Date.now();
                    n.eventsTracker.cmpPromptDisplayed(a - e)
                }
            }
            ))
        }
        ,
        this.tcResolver = Promise.resolve(),
        this.isTcResolved = !1,
        this.tcString = "",
        this.gdprApplies = !1,
        this.fcLoaded = !1,
        this.eventsTracker = t;
        var i = Date.now();
        e && (this.tcResolver = new Promise((function(e) {
            var t;
            null === (t = window.googlefc) || void 0 === t || t.callbackQueue.push({
                CONSENT_API_READY: function() {
                    return n.onConsentApiReady(i, e)
                }
            }),
            setTimeout((function() {
                n.fcLoaded || (n.resolveTcPromise(e),
                n.eventsTracker.gptNoCMP())
            }
            ), 5e3)
        }
        )))
    }
      , At = function() {
        function e() {
            this.bidsByID = {},
            this.bidsByAdUnit = {},
            this.usedBidIDs = {}
        }
        return e.prototype.addBids = function(e, t) {
            var n = this
              , i = this
              , r = i.usedBidIDs
              , o = i.bidsByID
              , a = i.bidsByAdUnit
              , s = (0,
            i.adUnitKey)(t);
            e.forEach((function(e) {
                var t = e.BidID;
                e.ClientReceived = (new Date).getTime(),
                n.getBidByID(t) || r[t] || (o[t] = e,
                a[s] ? a[s].push(e) : a[s] = [e])
            }
            )),
            a[s].sort((function(e, t) {
                return e.SortValue - t.SortValue
            }
            ))
        }
        ,
        e.prototype.getBidCount = function(e) {
            var t = this.bidsByAdUnit
              , n = (0,
            this.adUnitKey)(e);
            return t[n] ? t[n].length : 0
        }
        ,
        e.prototype.getBid = function(e, t) {
            void 0 === t && (t = !1);
            var n = this.bidsByAdUnit
              , i = (0,
            this.adUnitKey)(e);
            if (n[i] && n[i].length) {
                n[i] = n[i].filter((function(e) {
                    return !e.isExpired()
                }
                ));
                var r = n[i];
                if (!t)
                    return s = r[r.length - 1];
                for (var o = Date.now(), a = r.length - 1; a >= 0; a--) {
                    var s;
                    if ((s = r[a]).LastNomination < o - 1e3)
                        return s.LastNomination = o,
                        s
                }
            }
            return null
        }
        ,
        e.prototype.getBidByID = function(e) {
            return this.bidsByID[e] || null
        }
        ,
        e.prototype.getBidToRender = function(e, t) {
            return this.usedBidIDs[t] ? null : (this.useBid(e, t),
            this.getBidByID(t))
        }
        ,
        e.prototype.useBid = function(e, t) {
            var n = this
              , i = n.usedBidIDs
              , r = n.bidsByAdUnit
              , o = (0,
            n.adUnitKey)(e);
            if (!i[t] && void 0 !== r && void 0 !== r[o]) {
                var a = r[o].map((function(e) {
                    return e.BidID
                }
                )).indexOf(t);
                -1 !== a && r[o].splice(a, 1),
                i[t] = !0
            }
        }
        ,
        e.prototype.reset = function() {
            this.bidsByID = {},
            this.bidsByAdUnit = {},
            this.usedBidIDs = {}
        }
        ,
        e.prototype.adUnitKey = function(e) {
            var t = window.location.href;
            return "".concat(e, ":").concat(t)
        }
        ,
        e
    }()
      , Dt = function() {
        return Dt = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }
        ,
        Dt.apply(this, arguments)
    }
      , St = function(e, t, n, i) {
        return new (n || (n = Promise))((function(r, o) {
            function a(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function c(e) {
                var t;
                e.done ? r(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(a, s)
            }
            c((i = i.apply(e, t || [])).next())
        }
        ))
    }
      , kt = function(e, t) {
        var n, i, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function s(o) {
            return function(s) {
                return function(o) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                            0) : i.next) && !(r = r.call(i, o[1])).done)
                                return r;
                            switch (i = 0,
                            r && (o = [2 & o[0], r.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                i = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(r = a.trys,
                                (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < r[1]) {
                                    a.label = r[1],
                                    r = o;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2],
                                    a.ops.push(o);
                                    break
                                }
                                r[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e],
                            i = 0
                        } finally {
                            n = r = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }
      , Pt = "ANAEventsCache";
    function _t() {
        G("🚂🚂🚂🚂🚂🚂🚂🚂 ANA Web SDK ".concat("5.2.1", " 🚂🚂🚂🚂🚂🚂🚂🚂")),
        G("dispatching anaReadyEvent"),
        document.dispatchEvent(new CustomEvent("ANAReady"))
    }
    var Rt = function(e, t, n, i) {
        var r = window.pageviewUID;
        void 0 === r && (r = de(),
        window.pageviewUID = r);
        var o = {
            uid: he(),
            session_id: Le(),
            event: n,
            app_id: e,
            wid: r,
            lib_version: t,
            screen_width: Math.floor(performance.now()),
            screen_height: i.counter,
            device: "web",
            extra_json: {
                url: document.location.href
            }
        };
        if (i) {
            var a = i.bid;
            o.domain = i.bidder,
            i.reason && (o.extra = i.reason),
            i.extra && (o.extra = i.extra),
            i.extra_2 && (o.extra_2 = i.extra_2),
            i.object_id && (o.object_id = i.object_id),
            o.extra_json.totalBids = i.totalBids,
            i.slot && (o.cohort = i.slot),
            i.gamEvent && (o.extra_json.gamEvent = i.gamEvent),
            i.elementID && (o.extra_json.element_id = i.elementID),
            a && (o.impression_type = a.ImpressionType,
            o.impression_sub_type = a.ImpressionSubType,
            o.object_id = a.BidID,
            o.sizes = "".concat(a.Width, "x").concat(a.Height),
            o.placement_id = a.PlacementID,
            o.domain = a.BidderName,
            o.impression_type = a.ImpressionType,
            o.extra_json.bid_targeting = a.Targeting,
            o.cookie_creation_ts = a.Value),
            i.duration && (o.duration = i.duration),
            i.adAttemptID && (o.extra_2 = i.adAttemptID),
            i.targeting && (o.extra_json = Dt(Dt({}, o.extra_json), {
                targeting: Dt({}, i.targeting)
            }))
        }
        return o
    }
      , Ot = function() {
        function e(e, t) {
            var n = this;
            this.propertyID = e,
            this.libVersion = t,
            this.timeoutId = setInterval((function() {
                return n.tickTimer()
            }
            ), 1e3, this)
        }
        return e.prototype.tickTimer = function() {
            var e = this;
            this.timeoutId && clearInterval(this.timeoutId),
            this.sendCachedEvents(),
            this.timeoutId = setInterval((function() {
                return e.tickTimer()
            }
            ), 1e3, this)
        }
        ,
        e.prototype.sendCachedEvents = function() {
            return St(this, void 0, void 0, (function() {
                var e, t;
                return kt(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        if (e = anaStorage.getItem(Pt),
                        t = [],
                        e)
                            try {
                                t = JSON.parse(e)
                            } catch (e) {
                                t = []
                            }
                        return t && 0 !== t.length ? [4, Ue.Events.send({
                            events: t
                        })] : [2];
                    case 1:
                        return n.sent(),
                        anaStorage.setItem(Pt, "[]"),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.sendBeaconEvent = function(e, t) {
            void 0 === t && (t = {}),
            navigator.sendBeacon && navigator.sendBeacon(p, JSON.stringify({
                events: [Rt(this.propertyID, this.libVersion, e, t)]
            }))
        }
        ,
        e.prototype.trackEvent = function(e, t) {
            void 0 === t && (t = {});
            var n = anaStorage.getItem(Pt)
              , i = [];
            if (n)
                try {
                    i = JSON.parse(n)
                } catch (e) {
                    i = []
                }
            var r = Rt(this.propertyID, this.libVersion, e, t);
            i.push(r);
            var o = JSON.stringify(i);
            try {
                anaStorage.setItem(Pt, o),
                o.length > 2097152 && this.sendCachedEvents()
            } catch (e) {
                var a = i.pop();
                console.error("Cant add event: ".concat(a.event, " to cache, max quota exceeded"))
            }
            this.timeoutId
        }
        ,
        e.prototype.anaLoaded = function(e) {
            this.trackEvent("ana_loaded", {
                extra: e
            })
        }
        ,
        e.prototype.gptAdded = function() {
            this.trackEvent("gpt_added")
        }
        ,
        e.prototype.gptLoaded = function() {
            this.trackEvent("gpt_loaded")
        }
        ,
        e.prototype.gptNoCMP = function() {
            this.trackEvent("gpt_no_cmp")
        }
        ,
        e.prototype.cmpPromptDisplayed = function(e) {
            this.trackEvent("cmp_prompt_displayed", {
                duration: e
            })
        }
        ,
        e.prototype.slotCreated = function(e, t) {
            this.trackEvent("slot_created", {
                slot: e,
                impressionType: t
            })
        }
        ,
        e.prototype.slotCreationFailed = function(e, t, n) {
            this.trackEvent("slot_creation_failed", {
                slot: e,
                impressionType: t,
                reason: n
            })
        }
        ,
        e.prototype.adAttemptMade = function(e) {
            this.trackEvent("ad_attempt_made", {
                slot: e
            })
        }
        ,
        e.prototype.adAttemptAborted = function(e, t) {
            this.trackEvent("ad_attempt_aborted", {
                slot: e,
                reason: t
            })
        }
        ,
        e.prototype.adAttemptFailed = function(e, t, n, i, r) {
            void 0 === n && (n = 0),
            void 0 === i && (i = null),
            this.trackEvent("ad_attempt_failed", {
                slot: e,
                reason: t,
                duration: n,
                gamEvent: i,
                adAttemptID: r
            })
        }
        ,
        e.prototype.refreshFailed = function(e, t) {
            this.trackEvent("refresh_failed", {
                slot: e,
                reason: t
            })
        }
        ,
        e.prototype.adAttemptSucceeded = function(e, t, n, i, r) {
            void 0 === n && (n = 0),
            void 0 === i && (i = null),
            this.trackEvent("ad_attempt_succeeded", {
                slot: e,
                totalBids: t,
                duration: n,
                gamEvent: i,
                adAttemptID: r
            })
        }
        ,
        e.prototype.slotRendered = function(e, t) {
            this.trackEvent("ana_bid_render", {
                slot: e,
                bid: t
            })
        }
        ,
        e.prototype.targetingSent = function(e) {
            this.trackEvent("targeting_sent", {
                slot: e
            })
        }
        ,
        e.prototype.pageviewExit = function() {
            this.sendBeaconEvent("pageview_text")
        }
        ,
        e.prototype.heartbeat = function(e, t) {
            this.trackEvent("heartbeat", {
                targeting: e,
                counter: t
            })
        }
        ,
        e.prototype.adSlotRemoved = function(e, t) {
            this.trackEvent("ad_slot_removed", {
                slot: e,
                elementID: t
            })
        }
        ,
        e.prototype.adSlotRecreated = function(e, t) {
            this.trackEvent("ad_slot_recreated", {
                slot: e,
                elementID: t
            })
        }
        ,
        e.prototype.pingTest = function(e) {
            this.trackEvent("ping_test", e)
        }
        ,
        e
    }()
      , Ct = function(e, t, n, i) {
        return new (n || (n = Promise))((function(r, o) {
            function a(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function c(e) {
                var t;
                e.done ? r(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(a, s)
            }
            c((i = i.apply(e, t || [])).next())
        }
        ))
    }
      , Lt = function(e, t) {
        var n, i, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function s(o) {
            return function(s) {
                return function(o) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                            0) : i.next) && !(r = r.call(i, o[1])).done)
                                return r;
                            switch (i = 0,
                            r && (o = [2 & o[0], r.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                i = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(r = a.trys,
                                (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < r[1]) {
                                    a.label = r[1],
                                    r = o;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2],
                                    a.ops.push(o);
                                    break
                                }
                                r[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e],
                            i = 0
                        } finally {
                            n = r = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    };
    const Bt = function(e, t, n) {
        return Ct(void 0, void 0, void 0, (function() {
            var i, r;
            return Lt(this, (function(o) {
                switch (o.label) {
                case 0:
                    return [4, $(n, 200)];
                case 1:
                    return o.sent(),
                    i = 0,
                    e.heartbeat(t(), i),
                    anaStorage.setItem("heartbeat_ts", Date.now().toString()),
                    r = function() {
                        return Ct(void 0, void 0, void 0, (function() {
                            var o;
                            return Lt(this, (function(a) {
                                switch (a.label) {
                                case 0:
                                    return [4, $(n, 200)];
                                case 1:
                                    return a.sent(),
                                    o = Number(anaStorage.getItem("heartbeat_ts")),
                                    Date.now() - o > 2e4 && (anaStorage.setItem("heartbeat_ts", Date.now().toString()),
                                    i++,
                                    e.heartbeat(t(), i)),
                                    setTimeout(r, 2e3),
                                    [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    setTimeout(r, 2e3),
                    [2]
                }
            }
            ))
        }
        ))
    };
    var Mt = function(e, t, n, i) {
        return new (n || (n = Promise))((function(r, o) {
            function a(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function c(e) {
                var t;
                e.done ? r(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(a, s)
            }
            c((i = i.apply(e, t || [])).next())
        }
        ))
    }
      , xt = function(e, t) {
        var n, i, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function s(o) {
            return function(s) {
                return function(o) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                            0) : i.next) && !(r = r.call(i, o[1])).done)
                                return r;
                            switch (i = 0,
                            r && (o = [2 & o[0], r.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                i = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(r = a.trys,
                                (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < r[1]) {
                                    a.label = r[1],
                                    r = o;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2],
                                    a.ops.push(o);
                                    break
                                }
                                r[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e],
                            i = 0
                        } finally {
                            n = r = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }
      , Nt = [{
        field: "extra",
        url: "https://securepubads.g.doubleclick.net"
    }, {
        field: "extra_2",
        url: "https://ads.assemblyexchange.com"
    }, {
        field: "object_id",
        url: "https://js.media-lab.ai/status"
    }];
    function Ut(e) {
        return Mt(this, void 0, void 0, (function() {
            var t, n;
            return xt(this, (function(i) {
                switch (i.label) {
                case 0:
                    return t = {},
                    n = Nt.map((function(e) {
                        var n = e.url
                          , i = e.field;
                        return function(e) {
                            return Mt(this, void 0, void 0, (function() {
                                return xt(this, (function(t) {
                                    switch (t.label) {
                                    case 0:
                                        return [4, fetch(e, {
                                            method: "HEAD",
                                            mode: "no-cors",
                                            cache: "no-cache"
                                        })];
                                    case 1:
                                        return [2, t.sent()]
                                    }
                                }
                                ))
                            }
                            ))
                        }(n).then((function(e) {
                            var n = e.status;
                            t[i] = "".concat(n)
                        }
                        )).catch((function() {
                            t[i] = "-1"
                        }
                        ))
                    }
                    )),
                    [4, Promise.all(n)];
                case 1:
                    return i.sent(),
                    e.pingTest(t),
                    [2]
                }
            }
            ))
        }
        ))
    }
    var Vt, jt = function() {
        return jt = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }
        ,
        jt.apply(this, arguments)
    }, Ft = function(e, t, n, i) {
        return new (n || (n = Promise))((function(r, o) {
            function a(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function c(e) {
                var t;
                e.done ? r(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(a, s)
            }
            c((i = i.apply(e, t || [])).next())
        }
        ))
    }, Gt = function(e, t) {
        var n, i, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function s(o) {
            return function(s) {
                return function(o) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                            0) : i.next) && !(r = r.call(i, o[1])).done)
                                return r;
                            switch (i = 0,
                            r && (o = [2 & o[0], r.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                i = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(r = a.trys,
                                (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < r[1]) {
                                    a.label = r[1],
                                    r = o;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2],
                                    a.ops.push(o);
                                    break
                                }
                                r[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e],
                            i = 0
                        } finally {
                            n = r = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }, Wt = function(e, t, n) {
        if (n || 2 === arguments.length)
            for (var i, r = 0, o = t.length; r < o; r++)
                !i && r in t || (i || (i = Array.prototype.slice.call(t, 0, r)),
                i[r] = t[r]);
        return e.concat(i || Array.prototype.slice.call(t))
    }, Ht = {
        slotEventsHandlers: {},
        gptOptions: {
            globalTargeting: {}
        },
        apsOptions: null,
        syncCookies: !0,
        resyncCookiesAfterTimeout: 5e3,
        propertyId: window.location.hostname,
        videoOptions: null,
        lightMode: !1,
        userEmail: null,
        shouldExpectGoogleCMP: !0,
        auctionTimeout: I
    }, qt = function() {
        function e(t) {
            void 0 === t && (t = {});
            var n = this;
            this.createdSlots = [],
            this.createdGoogleSlots = [],
            this.createdVideoContainers = [];
            var i, r = jt(jt({}, Ht), t), o = r.slotEventsHandlers, a = r.gptOptions, s = r.apsOptions, l = r.syncCookies, d = r.resyncCookiesAfterTimeout, u = r.propertyId, h = r.lightMode, p = r.auctionTimeout, f = r.userEmail, g = r.shouldExpectGoogleCMP, v = r.anaUid;
            q("auctionTimeout") && parseInt(q("auctionTimeout")) > 0 && (i = parseInt(q("auctionTimeout"))),
            this.bidManager = new At,
            this.slotEventsHandlers = o,
            this.syncCookies = l,
            this.resyncCookiesAfterTimeout = d,
            this.propertyId = u,
            this.apsEnabled = !!s,
            this.globalTargeting = (null == a ? void 0 : a.globalTargeting) || {},
            this.setPPID = a && !!a.setPPID,
            this.lazyLoad = a && a.enableLazyLoad,
            this.lightMode = !!h,
            this.auctionTimeout = i || p,
            this.eventsTracker = new Ot(this.propertyId,c),
            this.msgHandler = new pt(this),
            this.userEmail = f,
            this.eventsTracker.anaLoaded("start"),
            Ut(this.eventsTracker),
            window.ANAWebSDKInstance = this,
            this.setFocusListeners(),
            t.auctionTimeout || i ? (t.auctionTimeout || i) && G("Setting auctionTimeout to ".concat(this.auctionTimeout)) : G("auctionTimeout wasn't provided, using default value: ".concat(I)),
            (this.auctionTimeout < 500 || this.auctionTimeout > 4e3) && (this.auctionTimeout = I,
            console.error("auctionTimeout is out of range (".concat(500, " - ").concat(4e3, "), using default value: ").concat(I))),
            void 0 === this.globalTargeting.SDK && e.version && (this.globalTargeting.SDK = e.version),
            void 0 === this.globalTargeting.domain && "localhost" !== window.location.hostname && (this.globalTargeting.domain = window.location.hostname),
            void 0 === this.globalTargeting.auctionTimeout && this.auctionTimeout && (this.globalTargeting.auctionTimeout = this.auctionTimeout.toString());
            var y = document.querySelector("script[anaUID]")
              , m = y && y.getAttribute("anaUID") || ""
              , b = v || m;
            b ? this.setANAUID(b) : this.uid = he(),
            this.sessionId = Le(),
            this.lightMode || (s && (s.bidTimeout = this.auctionTimeout,
            It(s)),
            vt(a, this));
            var w = !this.lightMode && g;
            this.gdprManager = new Tt(w,this.eventsTracker),
            this.syncCookies && this.syncUserCookies(),
            window.addEventListener && window.addEventListener("scroll", this.onScroll.bind(this)),
            Bt(this.eventsTracker, (function() {
                return n.globalTargeting
            }
            ), (function() {
                return n.hasFocus()
            }
            ));
            var E = navigator.cookieDeprecationLabel;
            E && E.getValue().then((function(e) {
                var t;
                G("chrome cookieDeprecationLabel", e),
                e.length && n.updateGlobalTargeting(((t = {}).chrome_label = e,
                t))
            }
            )),
            this.eventsTracker.anaLoaded("finish")
        }
        return e.prototype.setFocusListeners = function() {
            var e = this;
            this.internalHasFocus = document.hasFocus(),
            J("focus", window, (function() {
                e.internalHasFocus = !0
            }
            )),
            J("blur", window, (function() {
                e.internalHasFocus = !1
            }
            )),
            J("scroll", window, (function() {
                e.internalHasFocus = !0
            }
            )),
            J("visibilitychange", window, (function() {
                e.internalHasFocus = "visible" === document.visibilityState
            }
            )),
            J("touchstart", window, (function() {
                e.internalHasFocus = !0
            }
            ))
        }
        ,
        e.prototype.setANAUID = function(e) {
            this.uid = e,
            pe(this.uid)
        }
        ,
        e.prototype.createSlot = function(e, t) {
            return Ft(this, void 0, void 0, (function() {
                var n, i = this;
                return Gt(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, Q(t.elementID)];
                    case 1:
                        return r.sent(),
                        setTimeout((function() {
                            "done" !== n && (n || (n = "timeout"),
                            i.eventsTracker.slotCreationFailed(t.adUnitID, T, n))
                        }
                        ), 5e3),
                        [2, new Promise((function(n) {
                            i.gdprManager.tcResolver.then((function() {
                                var r = i.createInternalSlot(e, t);
                                n(r)
                            }
                            ))
                        }
                        )).then((function(e) {
                            return n = "done",
                            e
                        }
                        )).catch((function(e) {
                            n = e
                        }
                        ))]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.showConsentPrompt = function() {
            var e = window.googlefc;
            null == e || e.callbackQueue.push(e.showRevocationMessage)
        }
        ,
        e.prototype.createInternalSlot = function(e, t) {
            var n = null;
            switch (e) {
            case te.GOOGLE:
                this.lightMode && G("making google banner slots in light mode seems sketchy"),
                n = new et(this,t),
                this.createdGoogleSlots.push(n);
                break;
            case te.ANA:
                this.lightMode || G("making a lightmode slot without the SDK in lightmode seems sketchy"),
                n = new Ke(this,t);
                break;
            default:
                throw Error("Specified slot type is not supported: ".concat(e))
            }
            return this.eventsTracker.slotCreated(t.adUnitID, T),
            this.createdSlots.push(n),
            n
        }
        ,
        e.prototype.createVideoSlot = function(e, t) {
            var n = this;
            return new Promise((function(i) {
                n.gdprManager.tcResolver.then((function() {
                    var r = new ht(n,e,t);
                    n.eventsTracker.slotCreated(t.adUnitID, "video"),
                    n.createdVideoContainers.push(r),
                    i(r)
                }
                ))
            }
            ))
        }
        ,
        e.prototype.hasFocus = function() {
            return document.hasFocus() || this.internalHasFocus
        }
        ,
        Object.defineProperty(e, "version", {
            get: function() {
                return "5.2.1"
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.updateGlobalTargeting = function(e) {
            var t;
            this.globalTargeting = jt(jt({}, this.globalTargeting), e),
            (t = this.globalTargeting) && Object.keys(t).length && googletag.cmd.push((function() {
                Object.keys(t).forEach((function(e) {
                    googletag.pubads().setTargeting(e, t[e])
                }
                ))
            }
            ))
        }
        ,
        e.prototype.syncUserCookies = function() {
            var e = this;
            if (this.syncCookies) {
                if (!this.propertyId)
                    throw Error("propertyId is needed to initialize SDK");
                var t = N();
                return this.gdprManager.tcResolver.then((function() {
                    Ee({
                        propertyId: t,
                        uid: e.uid
                    })
                }
                ))
            }
        }
        ,
        e.prototype.getBannerSlot = function(e) {
            var t = null;
            return this.createdSlots.forEach((function(n) {
                n.elementID !== e && 0 !== e.indexOf(n.elementID) || (t = n)
            }
            )),
            t
        }
        ,
        e.prototype.onScroll = function() {
            Wt([], document.querySelectorAll("div.assembly-semi-sticky-container"), !0).forEach((function(e) {
                try {
                    var t = e.children[0]
                      , n = e.getBoundingClientRect()
                      , i = t.getBoundingClientRect().height;
                    if (i > 304)
                        return t.style.position = "relative",
                        void (t.style.marginTop = "0px");
                    n.top <= 0 && n.top > i - n.height ? (t.style.position = "fixed",
                    t.style.top = 0,
                    t.style.bottom = "auto",
                    t.style.marginTop = "0px") : n.top < 0 && n.top < i - n.height ? (t.style.position = "relative",
                    t.style.marginTop = n.height - i + "px") : (t.style.position = "relative",
                    t.style.marginTop = "0px")
                } catch (e) {
                    console.error(e)
                }
            }
            ))
        }
        ,
        e.prototype.setUserEmail = function(e) {
            this.userEmail = e
        }
        ,
        e.prototype.getUserIdentity = function() {
            var e = H("ml_em");
            if (e)
                return G("IDENTITY: medialabcookie found ".concat(e)),
                {
                    email: e,
                    envelope: null
                };
            if (this.userEmail)
                return G("IDENTITY: userEmail found ".concat(e)),
                {
                    email: this.userEmail,
                    envelope: null
                };
            var t = H("lr_env");
            if (t)
                return G("IDENTITY: liveramp envelope found', ".concat(t)),
                {
                    email: null,
                    envelope: t
                };
            var n = H(D);
            if (n)
                return G("IDENTITY: rtis envelope found ".concat(n)),
                {
                    email: null,
                    envelope: n
                };
            var i = H(S);
            return G("IDENTITY:rtis envelope not found"),
            i || (W(S, 1, .5),
            Ve.rtis((function(e) {
                G("IDENTITY: rtis envelope response, ".concat(e)),
                W(D, e, 21600)
            }
            ))),
            G("IDENTITY: no envelope found"),
            {
                email: null,
                envelope: null
            }
        }
        ,
        e
    }();
    return function(e) {
        e.VideoMp4 = "video/mp4",
        e.VideoOgg = "video/ogg"
    }(Vt || (Vt = {})),
    "loading" !== document.readyState ? setTimeout(_t, 0) : document.addEventListener("DOMContentLoaded", _t),
    window.ANAWeb = qt,
    window.SlotTypeEnum = te,
    qt.SlotTypeEnum = te,
    Object.defineProperty(qt, "uid", {
        get: function() {
            return he()
        }
    }),
    Object.defineProperty(qt, "sessionId", {
        get: function() {
            return Le()
        }
    }),
    qt.AdPosition = Pe,
    qt.ContentDeliveryMethod = Oe,
    qt.PlaybackCessationMode = ke,
    qt.PlaybackMethod = Te,
    qt.StartDelay = Ae,
    qt.VideoApiFramework = Re,
    qt.VideoLinearity = Se,
    qt.VideoPlacementType = De,
    qt.VideoPlayerType = ne,
    qt.VideoProtocol = _e,
    qt.Mime = Vt,
    r
}
)()));
// MediaLab Inc.
