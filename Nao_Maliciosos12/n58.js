(()=>{
    "use strict";
    var e = {
        7322: function(e, t) {
            var i = this && this.__awaiter || function(e, t, i, n) {
                return new (i || (i = Promise))((function(r, s) {
                    function o(e) {
                        try {
                            l(n.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function a(e) {
                        try {
                            l(n.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    function l(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value,
                        t instanceof i ? t : new i((function(e) {
                            e(t)
                        }
                        ))).then(o, a)
                    }
                    l((n = n.apply(e, t || [])).next())
                }
                ))
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.Global = void 0;
            t.Global = class {
                constructor(e=!1) {
                    if (this.d = document,
                    this.w = window,
                    this.logOn = !1,
                    this.isReady = !1,
                    this.impressionsOnePxArea = 1e-4,
                    this.getHiddenProp = ()=>{
                        const e = ["webkit", "moz", "ms", "o"];
                        if ("hidden"in this.d)
                            return "hidden";
                        for (const t of e)
                            if (t + "Hidden"in document)
                                return t + "Hidden";
                        return null
                    }
                    ,
                    this.visibilityHandler = ()=>{
                        (()=>{
                            const e = this.getHiddenProp();
                            return !!e && this.d[e]
                        }
                        )() ? this.blurHandler() : this.focusHanlder()
                    }
                    ,
                    !e) {
                        let e;
                        if (e = !!this.getIeVersion(navigator.userAgent) || window.frameElement,
                        e && void 0 !== window.inDapIF && window.inDapIF) {
                            this.log("FIF mode");
                            const e = this.useTopWindow();
                            this.friendlyIframe = e.currentFrame
                        }
                    }
                    this.isAMPFrame = this.isAMP(),
                    this.docReady((()=>this.isReady = !0))
                }
                useTopWindow() {
                    const e = this.getTopWindow();
                    return this.w = e.currentWindow,
                    this.d = this.w.document,
                    e
                }
                addElement(e, t, i, n=!1) {
                    const r = this.d.createElement(e);
                    for (const e in i)
                        Object.prototype.hasOwnProperty.call(i, e) && r.setAttribute(e, String(i[e]));
                    return n ? t.insertBefore(r, t.firstElementChild) : t.appendChild(r),
                    r
                }
                addEvent(e, t, i) {
                    e && t && i && (e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent && e.attachEvent("on" + t, i))
                }
                addCss(e, t=this.d.getElementsByTagName("head")[0]) {
                    const i = this.d.createElement("style");
                    i.type = "text/css",
                    i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(this.d.createTextNode(e)),
                    t.appendChild(i)
                }
                log(...e) {
                    this.logOn && console.log(e)
                }
                docReady(e, t=this.w, i=this.d) {
                    const n = ()=>{
                        this.log("ready"),
                        i.removeEventListener("DOMContentLoaded", n, !1),
                        t.removeEventListener("load", n, !1),
                        e()
                    }
                    ;
                    "complete" === i.readyState ? setTimeout(e) : (i.addEventListener("DOMContentLoaded", n, !1),
                    t.addEventListener("load", n, !1))
                }
                winReady(e, t=this.w, i=this.d) {
                    const n = ()=>{
                        this.log("window loaded"),
                        t.removeEventListener("load", n, !1),
                        e()
                    }
                    ;
                    t.addEventListener("load", n, !1)
                }
                tracking(e) {
                    if (e) {
                        (new Image).src = e
                    }
                }
                isChild(e, t) {
                    if (t) {
                        let i = t.parentNode;
                        for (; null != i; ) {
                            if (i === e)
                                return !0;
                            i = i.parentNode
                        }
                    }
                    return !1
                }
                getElementVisibility(e) {
                    const t = e.getBoundingClientRect()
                      , i = (t.right - t.left) * (t.bottom - t.top);
                    if (0 === i)
                        return 0;
                    const n = Math.max(0, Math.min(t.bottom, this.w.innerHeight) - Math.max(0, t.top))
                      , r = Math.max(0, Math.min(t.right, this.w.innerWidth) - Math.max(0, t.left));
                    return Math.round(n * r * 100 / i)
                }
                checkTabVisibility(e, t) {
                    this.focusHanlder = e,
                    this.blurHandler = t;
                    const i = this.getVisibilityEventName();
                    i && this.addEvent(this.d, i, this.visibilityHandler)
                }
                clearTabVisibilityHandler() {
                    const e = this.getVisibilityEventName();
                    e && this.d.removeEventListener(e, this.visibilityHandler)
                }
                getVisibilityEventName() {
                    let e = "";
                    const t = this.getHiddenProp();
                    return t && (e = t.replace(/[H|h]idden/, "") + "visibilitychange"),
                    e
                }
                getIosVersion() {
                    if (/iP(hone|od|ad)/.test(navigator.platform)) {
                        const e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        if (e)
                            return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || "0", 10)]
                    }
                }
                isExternal(e, t) {
                    const i = this.getDomain(t);
                    return -1 === e.indexOf(i)
                }
                getDomain(e) {
                    let t = e;
                    if (null != e) {
                        const i = e.split(".").reverse();
                        null != i && i.length > 1 && (t = i[1] + "." + i[0])
                    }
                    return t
                }
                offsetTop(e) {
                    let t = 0;
                    do {
                        isNaN(e.offsetTop) || (t += e.offsetTop),
                        e = e.offsetParent
                    } while (e);
                    return t
                }
                isString(e) {
                    return "string" == typeof e || e instanceof String
                }
                isObjectEmpty(e) {
                    return "object" == typeof e && !Array.isArray(e) && null !== e && 0 === Object.keys(e).length && Object.getPrototypeOf(e) === Object.prototype
                }
                isFirefox() {
                    return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
                }
                isSafari() {
                    const e = this.w.navigator.userAgent;
                    return !!(e.indexOf("Safari") > 0 && /iPad|iPhone|iPod/.test(e))
                }
                getPageHeight() {
                    const e = this.d.body
                      , t = this.d.documentElement;
                    return Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight)
                }
                getIeVersion(e) {
                    e = e || navigator.userAgent;
                    const t = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(e);
                    return t ? parseInt(t[2], 10) : void 0
                }
                offset(e) {
                    const t = e.getBoundingClientRect()
                      , i = this.w.pageYOffset || this.d.documentElement.scrollTop;
                    return {
                        top: t.top + i,
                        bottom: t.bottom + i,
                        left: t.left,
                        right: t.right
                    }
                }
                triggerCustomEvent(e, t, i=null, n={
                    width: void 0,
                    height: void 0
                }) {
                    if (!e.length)
                        return;
                    let r;
                    this.d.createEvent ? (r = this.d.createEvent("HTMLEvents"),
                    r.initEvent(e, !0, !0)) : (r = this.d.createEventObject(),
                    r.eventType = e),
                    r.eventName = e,
                    null !== i && (r.videoDuration = i),
                    void 0 !== n.width && void 0 !== n.height && (r.creativeSize = n),
                    r.formatId = t,
                    this.d.createEvent ? this.w.dispatchEvent(r) : this.w.fireEvent("on" + r.eventType, r)
                }
                getTopWindow() {
                    let e = 5
                      , t = window
                      , i = this.getIeVersion(navigator.userAgent) ? null : window.frameElement;
                    for (; e--; )
                        try {
                            t.parent && t.parent.document && (i = t.frameElement,
                            t = t.parent,
                            t === t.parent && (e = 0))
                        } catch (e) {
                            this.log("getTopWindow error", e)
                        }
                    return {
                        currentWindow: t,
                        currentFrame: i
                    }
                }
                isMobile() {
                    return "ontouchstart"in this.w
                }
                getJson(e) {
                    return i(this, void 0, void 0, (function*() {
                        const t = yield fetch(e);
                        try {
                            t.parsedBody = yield t.json()
                        } catch (e) {
                            throw new Error("JSON parsing error, " + e)
                        }
                        if (!t.ok)
                            throw new Error("Server responded with " + t.statusText);
                        return t
                    }
                    ))
                }
                isValidStringField(e) {
                    return Boolean(e) && this.isString(e)
                }
                limitString(e, t) {
                    return e.length > t ? e.substring(0, t - 3) + "..." : e
                }
                trackArrayOfPixels(e) {
                    for (const t of e)
                        t && this.tracking(t)
                }
                isAMP() {
                    return this.w.context ? "AMP-AD" === this.w.context.tagName : this.w.name.indexOf('"tagName":"AMP-AD"') > -1
                }
            }
        },
        885: (e,t,i)=>{
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.ViewabilityCore = void 0;
            const n = i(7322);
            class r extends n.Global {
                constructor() {
                    super(),
                    this.integration = 0,
                    this.resultLayer = null,
                    this.playingCreativeId = null,
                    this.pixels = {},
                    this.threshold = [],
                    this.isIOCallbackCalled = !1,
                    this.addEvent(this.d, "visibilitychange", (()=>{
                        this.d.hidden ? this.w.clearTimeout(this.ioTimeoutId) : this.checkCurrentState()
                    }
                    ))
                }
                videoHandler(e, t) {
                    const i = ["complete", "skip", "AdSkipped", "AdStopped"];
                    i.concat(["pause", "AdPaused", "abort", "emptied", "ended", "error", "seeked", "seeking"]).indexOf(e) > -1 ? this.playingCreativeId = null : ["start", "AdStarted", "AdPlaying", "resume", "play", "playing"].indexOf(e) > -1 && (this.playingCreativeId = t,
                    void 0 !== this.intersectionObserverCallback && 0 !== Object.keys(this.pixels).length && this.intersectionObserverCallback(this.lastIntersectionObserverEntry)),
                    i.indexOf(e) > -1 && this.executePixels(t, "notviewable")
                }
                updateCreativePixels(e, t) {
                    return this.log("updateCreativePixels"),
                    this.isIOCallbackCalled = !1,
                    void 0 !== this.intersectionObserverCallback && this.intersectionObserverCallback(this.lastIntersectionObserverEntry),
                    this.pixels[e] = t
                }
                start(e, t, i) {
                    this.log("start", e, t, i);
                    if (e = this.checkElementStatus(e).element,
                    this.pixels = t,
                    !e)
                        throw new Error(`Smart Viewability: passed element to measure is not valid and its value is "${e}"`);
                    const n = this.mergeOptions(i, e);
                    if (n.videoIntegration || (this.playingCreativeId = Object.keys(t)[0] ? String(Object.keys(t)[0]) : "1"),
                    this.integration = n.videoIntegration || this.integration,
                    n.logMessages && (this.logOn = !0),
                    n.testLayer && (this.resultLayer = this.addInfoLayer()),
                    i && i.threshold) {
                        this.threshold = i.threshold;
                        const e = "lastSent"
                          , t = "aboveCallback"
                          , n = "belowCallback";
                        this.threshold.forEach((i=>{
                            i[e] = 0,
                            "function" != typeof i[t] && (i[t] = ()=>console.log()),
                            "function" != typeof i[n] && (i[n] = ()=>console.log())
                        }
                        ))
                    }
                    e.id || (e.id = "sas_" + (new Date).getTime() + "rnd"),
                    this.initIntersactionObserver(e, n),
                    window.addEventListener("beforeunload", (()=>{
                        this.executePixels(this.playingCreativeId, "notviewable")
                    }
                    ))
                }
                checkCurrentState() {
                    void 0 === this.intersectionObserverCallback || this.isIOCallbackCalled || this.intersectionObserverCallback(this.lastIntersectionObserverEntry)
                }
                initIntersactionObserver(e, t) {
                    this.intersectionObserverCallback = i=>{
                        this.lastIntersectionObserverEntry = i,
                        i && i.forEach((i=>{
                            this.checkThreshold(100 * i.intersectionRatio),
                            void 0 !== (null == t ? void 0 : t.area) && 100 * i.intersectionRatio >= t.area && this.playingCreativeId && !this.d.hidden ? this.ioTimeoutId = this.w.setTimeout((()=>{
                                this.isIOCallbackCalled = !0,
                                this.triggerViewableEvent(t),
                                this.integration < 2 && n.unobserve(e)
                            }
                            ), 1e3 * (t.delay || 0)) : this.w.clearTimeout(this.ioTimeoutId)
                        }
                        ))
                    }
                    ;
                    const i = {
                        threshold: ((null == t ? void 0 : t.area) || 0) / 100
                    }
                      , n = new this.w.IntersectionObserver(this.intersectionObserverCallback,i);
                    n.observe(e)
                }
                triggerViewableEvent(e) {
                    this.log(`Element visible more than ${e.area}% for ${e.delay} seconds`),
                    this.executePixels(this.playingCreativeId, "viewable"),
                    this.executeViewCallback(e),
                    e.testLayer && this.resultLayer && (this.resultLayer.innerHTML = "&#10004;")
                }
                executeViewCallback(e) {
                    e.viewCallback && (e.viewCallback(),
                    e.viewCallback = void 0,
                    this.log("View callback function called"))
                }
                checkElementStatus(e) {
                    const t = {
                        measurable: !0,
                        element: e
                    };
                    if (!e || window.self === window.top || this.w.self === this.w.top)
                        return this.log("No iframe detected"),
                        t;
                    this.log("Iframe detected");
                    const i = this.useTopWindow();
                    t.element = null === i.currentFrame || i.currentFrame.parentNode === e.parentNode ? e : i.currentFrame;
                    return i.currentWindow.$sf && i.currentWindow.$sf.ext ? (this.log("SafeFrame detected"),
                    t.element = t.element || e) : void 0 !== window.inDapIF && window.inDapIF ? (this.log("Friendly iframe detected"),
                    t.element = e) : i.currentWindow === window.top ? this.log("Secured iframe detected") : this.isAMPFrame ? this.log("AMP iframe detected") : this.log("Cross-domain iframe detected"),
                    t
                }
                addInfoLayer() {
                    const e = this.addElement("div", document.body, {
                        id: `testLayer_${Math.round(1e5 * Math.random())}`,
                        style: "width:60px;height:30px;position:fixed;top:0;right:0;background-color:yellow;\n\t\t\tcolor:blue;font-size:20px;text-align:center;padding-top:5px;z-index:99999;"
                    });
                    return e.innerHTML = "0%",
                    e
                }
                checkThreshold(e) {
                    var t, i;
                    const n = "area"
                      , r = "lastSent";
                    for (const s of this.threshold)
                        s[n] > e && s[r] <= 0 ? (null === (t = s.belowCallback) || void 0 === t || t.call(s),
                        s[r] = 1) : s[n] <= e && s[r] >= 0 && (null === (i = s.aboveCallback) || void 0 === i || i.call(s),
                        s[r] = -1)
                }
                calculateArea(e, t) {
                    return !this.isMobile() && 0 === e.videoIntegration && t.clientHeight * t.clientWidth > 242500 ? 30 : 50
                }
                mergeOptions(e, t) {
                    const i = {
                        area: null == e ? void 0 : e.area,
                        testLayer: (null == e ? void 0 : e.testLayer) || !1,
                        logMessages: (null == e ? void 0 : e.logMessages) || !1,
                        videoIntegration: (null == e ? void 0 : e.videoIntegration) || 0,
                        threshold: (null == e ? void 0 : e.threshold) || [],
                        viewCallback: null == e ? void 0 : e.viewCallback
                    };
                    return e && e.delay ? i.delay = e.delay : i.delay = i.videoIntegration ? 2 : 1,
                    i.area || (i.area = this.calculateArea(i, t)),
                    i
                }
                executePixels(e, t) {
                    if (null == e)
                        return !1;
                    let i = !1;
                    return this.pixels[e] && this.pixels[e][t] && (this.trackArrayOfPixels(this.pixels[e][t]),
                    i = !0,
                    delete this.pixels[e],
                    this.playingCreativeId = null),
                    i
                }
            }
            t.ViewabilityCore = r
        }
    }
      , t = {};
    function i(n) {
        var r = t[n];
        if (void 0 !== r)
            return r.exports;
        var s = t[n] = {
            exports: {}
        };
        return e[n].call(s.exports, s, s.exports, i),
        s.exports
    }
    (()=>{
        const e = i(885);
        class t extends e.ViewabilityCore {
            constructor() {
                super()
            }
            init(e, t, i) {
                this.log("init"),
                this.start(e, t, i)
            }
        }
        window.Viewability = t
    }
    )()
}
)();