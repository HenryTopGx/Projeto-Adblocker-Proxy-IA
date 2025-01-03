/* jssdk-outstream.video.js 2024-06-06 14:45 b418bfce081d48b1c2fc96bfcb88a0e7ffbbb4d6 */
!function() {
    "use strict";
    var t = function() {
        return (t = Object.assign || function(e) {
            for (var t, n = 1, a = arguments.length; n < a; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    function z(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var a, o, i = n.call(e), r = [];
        try {
            for (; (void 0 === t || 0 < t--) && !(a = i.next()).done; )
                r.push(a.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                a && !a.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return r
    }
    function H(e, t, n) {
        if (n || 2 === arguments.length)
            for (var a, o = 0, i = t.length; o < i; o++)
                !a && o in t || ((a = a || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
        return e.concat(a || Array.prototype.slice.call(t))
    }
    var r = ["param1", "param2", "param3", "subid", "subid_1", "subid_2", "subid_3", "subid_4", "subid_5", "extid", "xhid", "abt", "xoc", "xvr", "xsrc", "xprf", "xch", "xou", "xma", "xtype"]
      , l = void 0
      , e = navigator.userAgent.toLowerCase()
      , n = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substring(0, 4))
      , a = (/tablet|ipad|(android(?!.*mobile))/.test(e) || /samsung|kindle|nexus|gt-p|sm-t|sgp|a1_07/.test(e)) && !n
      , n = /chrome/gi.test(e) || (n || a) && /CriOS/gi.test(e)
      , M = /safari/gi.test(e) && !n;
    parseInt((M ? e.match(/.+?(?:on|ri)[\/: ]([\d.]+)/) || [] : e.match(/.+(?:ox|me|ra|ie|opr|rv|crios)[\/: ]([\d.]+)/) || [])[1], 10),
    (a = navigator.vendor) !== l && 0 === a.indexOf("Apple") && eval.toString().length;
    var j = /iPad|iPhone|iPod/gi.test(e);
    var c = function(e) {
        return e.map(function(e) {
            return null == e ? void 0 : e.trim()
        }).filter(Boolean).join(",").replace(/,+/g, ",").replace(/\s*,\s*/g, ",").replace(/\s+/g, " ").replace(/^,|,$/g, "")
    };
    function d(e) {
        var e = void 0 === (e = (e || {}).collectFromPath) || e
          , t = function() {
            for (var e = document.getElementsByTagName("meta"), t = [], n = 0; n < e.length; n++) {
                var a = e[n].getAttribute("name");
                "description" !== a && "keywords" !== a || (a = e[n].getAttribute("content")) && t.push(a)
            }
            return t
        }();
        return document.title && t.push(document.title),
        e && t.push.apply(t, H([], z((e = (e = window.location.pathname.split("/"))[e.length - 1].split(/[?#]/)[0]) && e.replace(/(x?html?)$/gi, "").match(/([a-zA-Z0-9]+)/g) || []), !1)),
        c(t)
    }
    function W(e) {
        var t, n, a, o = e.spot, i = e.format, r = e.serviceBaseUrl, c = e.details, e = e.eventType, i = ["ad_format=".concat(encodeURIComponent(i)), "spot=".concat(encodeURIComponent(o)), "event_type=".concat(encodeURIComponent(e))].join("&"), o = r.startsWith("//") ? "https:".concat(r) : r;
        e = "".concat(o, "?").concat(i),
        t = function() {}
        ,
        n = function() {
            return l
        }
        ,
        r = {
            method: "POST",
            headers: [["Content-Type", "application/json"]],
            body: c ? JSON.stringify(c) : l
        },
        o = void 0 === (o = (r = void 0 === r ? {} : r).method) ? "GET" : o,
        i = void 0 === (i = r.body) ? "" : i,
        c = void 0 === (c = r.headers) ? [] : c,
        r = void 0 !== (r = r.withCredentials) && r,
        (a = new XMLHttpRequest).withCredentials = r,
        a.onload = function() {
            if (200 === a.status) {
                var e = void 0;
                try {
                    e = JSON.parse(a.response)
                } catch (e) {}
                t(e)
            } else
                n()
        }
        ,
        a.onerror = n,
        a.open(o, e, !0),
        c.forEach(function(e) {
            var t = (e = z(e, 2))[0]
              , e = e[1];
            a.setRequestHeader(t, e)
        }),
        a.send(i)
    }
    var n = {
        BASE_ROTATOR_URL: "//tsyndicate.com/do2/",
        OUTSTREAM_STYLE_URL: "//cdn.tsyndicate.com/sdk/v1/outstream.video.v2.css",
        HLS_PLAYER_SCRIPT_URL: "//cdn.tsyndicate.com/sdk/v1/hls.light.min.js",
        METRICS_COLLECTOR_URL: ""
    }
      , D = n.METRICS_COLLECTOR_URL
      , o = "".concat(n.BASE_ROTATOR_URL, "{spot}/vast")
      , u = "00:00:00"
      , m = "Visit Now"
      , i = n.OUTSTREAM_STYLE_URL
      , q = n.HLS_PLAYER_SCRIPT_URL
      , V = {
        mainWrapper: "ts-outstream-video",
        videoWrapper: "ts-outstream-video__video-wrapper",
        video: "ts-outstream-video__video",
        videoVertical: "ts-outstream-video__video_vertical",
        videoBackground: "ts-outstream-video__video__background",
        callToActionButton: "ts-outstream-video-call-to-action-button",
        callToActionButtonActive: "ts-outstream-video-call-to-action-button_active",
        callToActionLink: "ts-outstream-video-call-to-action__link",
        buttonSound: "ts-outstream-video__button-sound",
        buttonSoundPlay: "ts-outstream-video__button-sound_play",
        label: "ts-outstream-video-label",
        labelIcon: "ts-outstream-video-label__icon",
        labelWrapper: "ts-outstream-video-label__wrapper",
        labelIconWrapper: "ts-outstream-video-label__icon-wrapper",
        labelContainer: "ts-outstream-video-label__container",
        labelHeadline: "ts-outstream-video-label__headline",
        labelBrandname: "ts-outstream-video-label__brandname",
        iconAd: "ts-outstream-video__icon-ad",
        iconExternalLink: "ts-outstream-video_icon-external",
        brandnameLink: "ts-outstream-video__brandname-link"
    };
    function F(e) {
        var t = document.createElement("img");
        t.src = e,
        t.width = 1,
        t.height = 1,
        t.style.position = "absolute",
        t.style.top = "0",
        t.addEventListener("load", function() {
            return s(t)
        }),
        t.addEventListener("error", function() {
            return s(t)
        }),
        document.body.appendChild(t)
    }
    function s(e) {
        var t;
        null != (t = e.parentNode) && t.removeChild(e)
    }
    var J = "error_FAILED_TO_LOAD_VIDEO";
    function p(e, t) {
        var n, a, o, i, r, c, l, d = e.styleUrl, s = e.containerId, u = e.spot, m = t.clickThroughTrackers, U = t.clickTrackers, p = t.mediaFiles, e = t.trackers, v = t.title, f = t.headline, h = t.staticResourceUrl, t = t.buttonText, g = Array.from(e), e = j && M, b = document.getElementById(s), s = (s = d,
        (d = document.createElement("link")).type = "text/css",
        d.rel = "stylesheet",
        d.media = "all",
        d.href = s,
        d), y = (document.head.appendChild(s),
        document.createElement("div"));
        y.className = V.mainWrapper,
        y.addEventListener("click", B);
        (d = document.createElement("div")).addEventListener("click", function(e) {
            var t = e.target;
            e.stopPropagation(),
            C.muted = !C.muted,
            C.muted ? t.className = V.buttonSound : t.className += " ".concat(V.buttonSoundPlay)
        }),
        d.className = V.buttonSound;
        var w = document.createElement("div");
        w.className = V.callToActionButton;
        (s = document.createElement("div")).className = V.callToActionLink,
        t = document.createTextNode(t);
        s.appendChild(t),
        w.appendChild(s),
        w.addEventListener("click", B),
        (t = document.createElement("div")).className = V.label;
        (s = document.createElement("div")).className = V.labelWrapper;
        var k = document.createElement("div");
        k.className = V.labelContainer,
        h && ((i = document.createElement("div")).className = V.labelIconWrapper,
        (T = document.createElement("img")).className = V.labelIcon,
        T.src = h,
        i.appendChild(T),
        s.appendChild(i)),
        f && ((h = document.createElement("div")).className = V.labelHeadline,
        T = document.createTextNode(f),
        h.appendChild(T),
        k.appendChild(h)),
        v && ((i = document.createElement("div")).className = V.labelBrandname,
        (f = document.createElement("div")).className = "".concat(V.brandnameLink, " ").concat(V.iconExternalLink),
        (T = document.createElement("div")).className = V.iconAd,
        T.innerHTML = "Ad",
        h = document.createTextNode(v),
        f.appendChild(h),
        i.setAttribute("title", v),
        i.appendChild(T),
        i.appendChild(f),
        k.appendChild(i)),
        s.appendChild(k),
        t.appendChild(s);
        (h = document.createElement("div")).className = V.videoWrapper;
        var _ = function() {
            for (var e = p[0], t = 1e4, n = 0; n < p.length; n++) {
                var a = p[n]
                  , o = Math.abs(a.width - Number(null == b ? void 0 : b.clientWidth));
                if (a.type === X) {
                    e = a;
                    break
                }
                o < t && (e = a),
                t = o
            }
            return e
        }()
          , v = !!_ && _.height > _.width
          , E = (null == _ ? void 0 : _.delivery) === G
          , T = (null == _ ? void 0 : _.type) === X
          , C = R(v ? V.videoVertical : V.video);
        function N() {
            E && a && (a.stopLoad(),
            o) && o.stopLoad()
        }
        function x() {
            E && a && (a.startLoad(),
            o) && o.startLoad()
        }
        function L() {
            C.play(),
            n && n.play()
        }
        function A() {
            C.pause(),
            n && n.pause()
        }
        function S() {
            b && (b.appendChild(y),
            I())
        }
        function I() {
            var e = C.getBoundingClientRect()
              , t = e.height
              , e = e.top
              , t = 0 < e + t
              , e = e - window.innerHeight < 0
              , n = C.paused;
            t && e && n ? (x(),
            L()) : t && e || n || (N(),
            A())
        }
        function B(e) {
            var t = m[0];
            e.stopPropagation(),
            window.open(t, "_blank"),
            U.forEach(F),
            m.slice(1).forEach(F)
        }
        function R(e) {
            var t = document.createElement("video");
            return t.className = e,
            t.controls = !1,
            t.autoplay = !1,
            t.muted = !0,
            t.loop = !0,
            t.preload = "auto",
            t.setAttribute("playsinline", ""),
            t.setAttribute("controlslist", "nodownload"),
            t
        }
        function O() {
            var e = document.createElement("source");
            return e.src = (null == _ ? void 0 : _.url) || "",
            e.type = (null == _ ? void 0 : _.type) || "",
            e
        }
        function P(e) {
            var t = new TS_HLS({
                autoStartLoad: !E
            });
            return t.loadSource((null == _ ? void 0 : _.url) || ""),
            t.attachMedia(e),
            t
        }
        C.addEventListener("timeupdate", function() {
            var n = C.currentTime;
            (function(e) {
                var t = -1 !== w.className.indexOf(V.callToActionButtonActive);
                Y <= e && !t && (w.className = "".concat(w.className, " ").concat(V.callToActionButtonActive))
            }
            )(n),
            g.forEach(function(e, t) {
                Number(e.offset) <= n && e.url && (F(e.url),
                g.splice(t, 1))
            })
        }, !1),
        v && (n = R(V.videoBackground)),
        T && C.canPlayType(X) ? (C.src = (null == _ ? void 0 : _.url) || "",
        C.addEventListener("loadstart", S, !1),
        n && (n.src = (null == _ ? void 0 : _.url) || "")) : T ? (f = function() {
            TS_HLS.isSupported() && ((a = P(C)).on(TS_HLS.Events.MANIFEST_PARSED, S),
            n) && (o = P(n))
        }
        ,
        window.TS_HLS && f(),
        (i = document.createElement("script")).src = q,
        i.onload = f,
        document.body.appendChild(i)) : ((k = O()).addEventListener("error", function() {
            try {
                e = null == _ ? void 0 : _.url,
                W({
                    format: "video-outstream",
                    spot: u,
                    serviceBaseUrl: D,
                    eventType: J,
                    details: {
                        url: e
                    }
                })
            } catch (e) {}
            var e
        }, !1),
        C.appendChild(k),
        C.addEventListener(e ? "loadedmetadata" : "loadeddata", S, !1),
        n && n.appendChild(O())),
        h.appendChild(d),
        h.appendChild(C),
        n && h.appendChild(n),
        h.appendChild(t),
        y.appendChild(h),
        y.appendChild(w),
        window.addEventListener("scroll", (r = I,
        c = Z,
        function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            l && window.clearTimeout(l),
            l = window.setTimeout(function() {
                r.apply(void 0, H([], z(e), !1))
            }, c)
        }
        )),
        document.addEventListener("visibilitychange", function() {
            (document.hidden ? (N(),
            A) : (x(),
            L))()
        }, !1)
    }
    var X = "application/vnd.apple.mpegurl"
      , G = "streaming"
      , Y = 2
      , Z = 200;
    function v(e, t, n) {
        var a = new XMLHttpRequest;
        a.onreadystatechange = function() {
            4 === a.readyState && 200 === a.status && t(a.responseXML)
        }
        ,
        a.onerror = n,
        a.open("GET", e, !0),
        a.send()
    }
    function f(e) {
        var t, n, a, o, i = [(n = e,
        o = void 0 === (a = (void 0 === a ? {} : a).fallbackValues) ? {} : a,
        r.map(function(e) {
            var t;
            return [e, null != (t = n[e]) ? t : o[e]]
        }).map(function(e) {
            var t = (e = z(e, 2))[0];
            return (e = e[1]) ? "".concat(t, "=").concat(e) : ""
        }).filter(Boolean).join("&")), (a = {
            keywords: [e.keywords, d()],
            charLimitCount: 1e3
        },
        i = a.keywords,
        t = a.charLimitCount,
        a = a.queryParamKey,
        (i = c(i).substring(0, t)) ? "".concat(a || "keywords", "=").concat(encodeURIComponent(i)) : void 0), (t = void 0 === (t = window.devicePixelRatio) ? 1 : t,
        (a = window.screen) && a.width && a.height ? (i = a.width * t,
        a = a.height * t,
        "w=".concat(i, "&h=").concat(a)) : l), (t = (new Date).getTimezoneOffset(),
        "tz=".concat(t).replace("-", "%2D"))].filter(Boolean).join("&");
        return "".concat(e.urlTemplate.replace("{spot}", e.spot), "?t=outstream&").concat(i)
    }
    var h = "VASTAdTagURI"
      , g = "ClickThrough"
      , b = "Linear"
      , _ = "Duration"
      , E = "MediaFile"
      , T = "Tracking"
      , C = "Impression"
      , N = "ClickTracking"
      , x = "StaticResource"
      , L = "CTABrandname"
      , A = "Headline"
      , S = "AdParameters"
      , I = "AdTitle"
      , y = function(e) {
        e = new Date("1970-01-01T".concat(e || u, "Z"));
        return 60 * e.getMinutes() + e.getSeconds()
    };
    function w(e, t) {
        var n = [];
        return Array.from(e.getElementsByTagName(t)).forEach(function(e) {
            e.textContent && n.push(e.textContent)
        }),
        n
    }
    function B(n) {
        var a = []
          , e = m
          , t = ""
          , o = null == (o = Array.from(n.getElementsByTagName(b))[0]) ? void 0 : o.attributes.getNamedItem("skipoffset")
          , i = Array.from(n.getElementsByTagName(S))
          , r = null == (r = i[0]) ? void 0 : r.attributes.getNamedItem("xmlEncoded")
          , i = null == (i = i[0]) ? void 0 : i.textContent
          , c = (r && i && (r = i,
        i = (new DOMParser).parseFromString(r, "text/xml"),
        e = l(L, i) || e,
        t = l(A, i)),
        y(l(_)));
        function l(e, t) {
            return void 0 === t && (t = n),
            (null == (t = Array.from(t.getElementsByTagName(e))[0]) ? void 0 : t.textContent) || ""
        }
        function d(e) {
            var a = [];
            return Array.from(n.getElementsByTagName(e)).forEach(function(e) {
                var t, n;
                e.textContent && (t = (null == (t = e.attributes.getNamedItem("event")) ? void 0 : t.value) || "start",
                n = (null == (n = e.attributes.getNamedItem("offset")) ? void 0 : n.value) || "",
                n = "start" === t ? 0 : s(n),
                a.push({
                    event: t,
                    offset: n,
                    url: e.textContent
                }))
            }),
            a
        }
        function s(e) {
            var t;
            return /%/.test(e = void 0 === e ? u : e) ? (t = parseInt(e, 10),
            Math.ceil(c * t / 100)) : y(e)
        }
        return Array.from(n.getElementsByTagName(E)).forEach(function(e) {
            var t;
            e.textContent && !e.textContent.endsWith("_TPL_.mp4") && a.push({
                url: e.textContent,
                type: (null == (t = e.attributes.getNamedItem("type")) ? void 0 : t.value) || "",
                delivery: (null == (t = e.attributes.getNamedItem("delivery")) ? void 0 : t.value) || "",
                width: Number((null == (t = e.attributes.getNamedItem("width")) ? void 0 : t.value) || "0"),
                height: Number((null == (t = e.attributes.getNamedItem("height")) ? void 0 : t.value) || "0")
            })
        }),
        {
            mediaFiles: a,
            buttonText: e,
            headline: t,
            clickTrackers: w(n, N),
            clickThroughTrackers: w(n, g),
            durationInSeconds: c,
            url: l(h),
            skipOffset: s(null == o ? void 0 : o.value),
            trackers: d(T),
            impressions: d(C),
            staticResourceUrl: l(x),
            title: l(I)
        }
    }
    function k(e, t) {
        return e && "string" == typeof e ? e : t
    }
    function R(e) {
        var a;
        if (e.spot && "string" == typeof e.spot && e.containerId && ("string" == typeof e.containerId || "number" == typeof e.containerId))
            return t(t({}, (a = e,
            r.reduce(function(e, t) {
                var n = a[t];
                return e[t] = "number" == typeof n && !Number.isNaN(n) || "string" == typeof n && "" !== n ? String(n) : l,
                e
            }, {}))), {
                spot: e.spot,
                urlTemplate: k(e.vastLink, o),
                styleUrl: k(e.styleLink, i),
                keywords: String(e.keywords || ""),
                containerId: String(e.containerId)
            })
    }
    window.TSOutstreamVideo = function(e) {
        var t = R(e);
        t && (e = document.createElement("video").canPlayType,
        document.getElementById(t.containerId)) && e && v(f(t), function(e) {
            !function t(n, e, a) {
                if (!e)
                    return;
                var o = B(e);
                o.impressions.forEach(function(e) {
                    e.url && F(e.url)
                });
                a && (o.trackers = a.trackers,
                o.clickTrackers = a.clickTrackers);
                if (o.url)
                    return void v(o.url, function(e) {
                        t(n, e, o)
                    }, function() {});
                p(n, o)
            }(t, e)
        }, function() {})
    }
}();
