(function(d, f, q) {
    function T(a, b, c, e, g) {
        null == f.body && (f.body = f.createElement("body"));
        null == f.head && (f.head = f.createElement("head"));
        var h = f.createElement("style");
        h.innerHTML = "#a_timer_oYvwGmQc,#a_title_nEYjMupI,.a_close_nEYjMupI{top:0;right:0;height:30px;line-height:30px;text-align:center}.top-left_vUTDnibMkZJIvuTH{position:fixed;top:0;left:0}.bottom-left_vUTDnibMkZJIvuTH{position:fixed;bottom:0;left:0}.top-right_vUTDnibMkZJIvuTH{position:fixed;top:0;right:0}.bottom-right_vUTDnibMkZJIvuTH{position:fixed;bottom:0;right:0}.top-center_vUTDnibMkZJIvuTH{position:fixed;top:0;left:50%;transform:translateX(-50%)}.bottom-center_vUTDnibMkZJIvuTH{position:fixed;bottom:0;left:50%;transform:translateX(-50%)}.c_window_xEucqIjg{z-index:9999999;overflow:hidden;position:fixed;background-color:#FFF;margin:20px;padding:0;border:1px solid #ccc;border-radius:5px;-webkit-box-shadow:0 0 5px 1px rgba(153,153,153,.5);-moz-box-shadow:0 0 5px 1px rgba(153,153,153,.5);box-shadow:0 0 5px 1px rgba(153,153,153,.5)}#alink_overlay_EPXdyaUf{position:absolute;z-index:1;background:rgba(0,0,0,0);cursor:pointer}#a_iframe_DwTGCjTm{z-index:-1;padding:0!important}.a_close_nEYjMupI{position:absolute;color:rgba(0,0,0,.3);width:30px;font-size:30px}#a_title_nEYjMupI{position:absolute;color:rgba(0,0,0,1);font-size:18px}.a_close_nEYjMupI a{text-decoration:none!important}#a_timer_oYvwGmQc{position:absolute;color:rgba(0,0,0,.3);width:30px;font-size:30px}.a_close_nEYjMupI:focus,.a_close_nEYjMupI:hover{color:#000;cursor:pointer}.a_open_rrTmtfGj{display:block}.a_hide_qkasklrO{display:none}";
        f.head.appendChild(h);
        f.getElementById("c_window_xEucqIjg") && (clearTimeout(timedis),
        f.getElementById("c_window_xEucqIjg").remove());
        h = f.createElement("div");
        h.id = "c_window_xEucqIjg";
        f.body.appendChild(h);
        f.getElementById("c_window_xEucqIjg").classList.add("c_window_xEucqIjg");
        h.innerHTML = '<div style="height:30px;"><span id="a_title_nEYjMupI">Advertisement</span><span class="a_close_nEYjMupI a_hide_qkasklrO" data-alink="data-alink" id="a_close_nEYjMupI" data-dismiss_OLjQnDvi="c_xEucqIjg"><a href="#" data-alink="data-alink" data-dismiss_OLjQnDvi="c_xEucqIjg" style="text-decoration: none!important; color: rgba(0,0,0,0.3);">&times;</span></a><span id="a_timer_oYvwGmQc">5</span></div><div id="alink_overlay_EPXdyaUf" alink="alink"></div>';
        f.getElementById("c_window_xEucqIjg").classList.add(b + "_vUTDnibMkZJIvuTH");
        b = f.createElement("iframe");
        h = f.getElementById("c_window_xEucqIjg");
        var l = f.getElementById("a_title_nEYjMupI")
          , m = f.getElementById("alink_overlay_EPXdyaUf");
        h.style.width = c;
        var u = c.search(/px/i)
          , K = e.search(/px/i)
          , G = (Math.max(f.documentElement.clientWidth, d.innerWidth || 0),
        Math.max(f.documentElement.clientHeight, d.innerHeight || 0));
        if (-1 == u ? (m.style.width = "100%",
        b.style.width = "100%",
        l.style.width = "100%") : (m.style.width = c,
        b.style.width = c,
        l.style.width = c),
        -1 == K)
            b.style.height = "100%",
            m.style.height = "96%",
            h.style.height = e;
        else {
            l = e.split("px")[0];
            var B = Number(l) + 30;
            m.style.height = e;
            b.style.height = e;
            h.style.height = B + "px";
            c = c.split("px")[0];
            e = Number(c) + 40;
            function n() {
                Math.max(f.documentElement.clientWidth, d.innerWidth || 0);
                Math.max(f.documentElement.clientHeight, d.innerHeight || 0) < B && (f.getElementById("c_window_xEucqIjg").style.top = "0")
            }
            d.onresize = n;
            d.onload = n;
            m = f.createElement("style");
            if (m.innerHTML = "@media all and (max-width: " + e + "px){#c_window_xEucqIjg{position:fixed;top:0!important;left:0;right:0;width:90%!important;margin:10px auto auto!important;text-align:center}.bottom-center_vUTDnibMkZJIvuTH,.top-center_vUTDnibMkZJIvuTH{left:0!important;right:0!important;transform:none!important}#a_iframe_DwTGCjTm{width:100%!important;}#alink_overlay_EPXdyaUf{width:90%!important;height:90%!important},.bottom-right_vUTDnibMkZJIvuTH {top:0px!important;} }",
            f.head.appendChild(m),
            matchMedia)
                c = d.matchMedia("(min-width: " + c + "px)"),
                c.addListener(v),
                v(c);
            function v(w) {
                w.matches
            }
            d.matchMedia("(orientation: landscape)").matches && G < B && (f.getElementById("c_window_xEucqIjg").style.top = "0");
            d.addEventListener("orientationchange", function() {
                d.matchMedia("(orientation:landscape)").matches || G < B && (f.getElementById("c_window_xEucqIjg").style.top = "0")
            })
        }
        b.src = a;
        b.name = "a_iframe_DwTGCjTm";
        b.id = "a_iframe_DwTGCjTm";
        b.frameBorder = "0";
        b.scrolling = "no";
        b.sandbox = "allow-forms allow-scripts";
        h.appendChild(b);
        f.getElementById("c_window_xEucqIjg").classList.add("a_open_rrTmtfGj");
        f.getElementById("a_iframe_DwTGCjTm").src = a;
        var C = 5
          , k = setInterval(function() {
            C--;
            0 >= C ? clearInterval(k) : f.getElementById("a_timer_oYvwGmQc") && (f.getElementById("a_timer_oYvwGmQc").textContent = C)
        }, 1E3);
        timedis = setTimeout(function() {
            f.getElementById("a_close_nEYjMupI").classList.remove("a_hide_qkasklrO");
            f.getElementById("a_timer_oYvwGmQc").classList.add("a_hide_qkasklrO")
        }, 5E3);
        f.addEventListener("click", function(n) {
            clearInterval(k);
            var v = 5;
            k = setInterval(function() {
                v--;
                0 >= v ? clearInterval(k) : f.getElementById("a_timer_oYvwGmQc") && (f.getElementById("a_timer_oYvwGmQc").textContent = v)
            }, 1E3);
            var w = (n = n || d.event).target || n.srcElement;
            if (w.hasAttribute("data-dismiss_OLjQnDvi") && "c_xEucqIjg" == w.getAttribute("data-dismiss_OLjQnDvi")) {
                var y = f.getElementById("c_window_xEucqIjg");
                f.getElementById("c_window_xEucqIjg").classList.add("a_hide_qkasklrO");
                y.classList.remove("a_open_rrTmtfGj");
                f.getElementById("c_window_xEucqIjg").remove();
                n.preventDefault()
            }
            w.hasAttribute("data-alink") && (y = f.getElementById("c_window_xEucqIjg"),
            f.getElementById("c_window_xEucqIjg").classList.add("a_hide_qkasklrO"),
            y.classList.remove("a_open_rrTmtfGj"),
            n.preventDefault());
            w.hasAttribute("alink") && (y = f.getElementById("c_window_xEucqIjg"),
            f.getElementById("c_window_xEucqIjg").classList.add("a_hide_qkasklrO"),
            y.classList.remove("a_open_rrTmtfGj"),
            d.open(g, "_blank").focus())
        }, !1)
    }
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        if ("function" !== typeof this)
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var b = Array.prototype.slice.call(arguments, 1)
          , c = this
          , e = function() {}
          , g = function() {
            return c.apply(this instanceof e && a ? this : a, b.concat(Array.prototype.slice.call(arguments)))
        };
        e.prototype = this.prototype;
        g.prototype = new e;
        return g
    }
    );
    var x = {
        _cookieLockSet: function(a) {
            var b = "1";
            a && (b = "0");
            try {
                return localStorage.setItem("sWgECpGO", b),
                !0
            } catch (e) {}
            a = new Date;
            var c = 6E4;
            a.setTime(a.getTime() + c);
            c = "expires=" + a.toUTCString();
            f.cookie = "sWgECpGO=" + b + ";" + c + ";path=/";
            return !0
        },
        _cookieLockGet: function() {
            var a = !1;
            try {
                return localStorage.sWgECpGO && (a = "1" == localStorage.sWgECpGO),
                localStorage.setItem("sWgECpGO", "0"),
                a
            } catch (g) {}
            for (var b = decodeURIComponent(f.cookie).split(";"), c = 0; c < b.length; c++) {
                for (var e = b[c]; " " == e.charAt(0); )
                    e = e.substring(1);
                0 == e.indexOf("sWgECpGO=") && "1" == e.substring(10, e.length) && (a = !0)
            }
            a && this._cookieLockSet(!0);
            return a
        },
        _windowOpen: function(a, b) {
            var c = "" + Math.random();
            "msie" == this.cap.env.b && 9 >= this.cap.env.v && (c = "");
            try {
                var e = b ? this.iframewin.open("about:blank", c, b) : this.iframewin.open("about:blank", c)
            } catch (g) {
                return !1
            }
            if (this.settings.openernull)
                try {
                    e.opener = null
                } catch (g) {}
            try {
                e.location.replace(a)
            } catch (g) {}
            return e
        },
        _openTabup: function(a) {
            return this._windowOpen(a)
        },
        _openTabunder: function(a) {
            if (0 == this.cap.tabunder)
                return this._openTabup(a);
            this._cookieLockSet(!1);
            var b = this._openTabup(f.location.href);
            if (!b)
                return !1;
            this.ti = setInterval(function() {
                if (b)
                    try {
                        f.location.replace(a)
                    } catch (c) {
                        clearInterval(this.ti)
                    }
            }
            .bind(this), 100);
            return !0
        },
        _getOptString: function() {
            return optstring = "top=" + (d.screenY || 0) + ",left=" + (d.screenX || 0) + ",width=" + (0 == d.outerWidth ? 99999 : d.outerWidth || d.screen.width) + ",height=" + (0 == d.outerHeight ? 99999 : d.outerHeight || d.screen.height) + ",status=0,location=1,toolbar=1,menubar=1,resizable=1,scrollbars=1"
        },
        _openPopup: function(a) {
            return this._windowOpen(a, this._getOptString())
        },
        _openPopunderSafari: function(a) {
            function b(c, e, g) {
                var h = f.createElement("iframe");
                h.style = "display:none;";
                f.body.appendChild(h);
                var l = h.contentWindow.document.createElement("script");
                l.type = "text/javascript";
                l.innerHTML = "window.parent = window.top = window.frameElement = null;window.mkp = function(url, name, opts) {var popWin = window.open(url, name, opts);try {popWin.opener = null} catch (e) {}return popWin;};";
                h.contentWindow.document.body.appendChild(l);
                c = h.contentWindow.mkp(c, e, g);
                f.body.removeChild(h);
                return c
            }
            d.name = "" + Math.random();
            a = b(a, "" + Math.random(), this._getOptString());
            b("", d.name, "");
            d.name = null;
            return a
        },
        _openPopunderBlur: function(a) {
            a = this._openPopup(a);
            try {
                f.focus()
            } catch (b) {}
            try {
                d.focus()
            } catch (b) {}
            try {
                a.blur()
            } catch (b) {}
            return a
        },
        _openPopunderFF: function(a) {
            var b;
            setTimeout(function() {
                b = this._openPopup(a);
                "about:blank" == a && (this.prepop = b)
            }
            .bind(this), 0);
            setTimeout(function() {
                var c = d.open("about:blank", "_self");
                c && !c.closed && c.focus()
            }, 0);
            return !0
        },
        _getPopunderCRResident: function(a) {
            var b = q.width
              , c = q.height;
            return "<body>\t\t<script>\t\ts1i=0;s2i=0;dc=0;focuscount=0;\t\twindow.resizeTo(20,20); \t\tfunction posred(){window.resizeTo(1,1);if (window.screenY>100) window.moveTo(0,0); else window.moveBy(" + b + "," + c + ")};\t\tfunction dance(){dc++;if (dc<3) return !1;if (s1i==0 ){s1i=window.setInterval(function(){ posred(); }, 50);}posred();window.clearInterval(s2i);document.onmousemove=null;};\t\tdocument.onmousemove=dance;\t\tfunction phash(){return window.screenX+','+window.screenY+','+window.outerWidth+','+window.outerHeight};\t\tphashc=phash();s2i=setInterval(function(){if (phashc!=phash()) {dance();phashc=phash()}; },100);\t\tvar deploy=function()\t\t{\t\t\tdc=0;window.clearInterval(s1i);window.clearInterval(s2i);document.onmousemove=null;\t\t\twindow.moveTo(0,0);\t\t\twindow.resizeTo(" + b + "," + c + ");\t\t\tif (window.name.match(/^https?:\\/\\//)) { window.location.replace(window.name); } else {window.name='ready';}\t\t};window.onblur=deploy;window.onfocus=function(){window.focuscount=1};setTimeout(function(){if (window.focuscount==0) deploy();}, 1000);setTimeout(function(){if (window.name.match(/^https?:\\/\\//)) deploy();}, " + a + ")\x3c/script>"
        },
        _getPopunderCROptionsString: function() {
            var a = q.width
              , b = 0;
            d.MSInputMethodContext && f.documentMode ? (a -= 200,
            b -= 200) : -1 !== navigator.userAgent.toLowerCase().indexOf("firefox") && (a -= 50);
            return "popup=1,top=" + b + ",left=" + a + ",width=5,height=5"
        },
        _openPopunderCRPre: function(a) {
            if (this.crpopsemaphore)
                return !1;
            this.crpopsemaphore = !0;
            a = this._getPopunderCRResident(a);
            try {
                var b = this.iframewin.open("about:blank", "", this._getPopunderCROptionsString())
            } catch (c) {
                return this.crpopsemaphore = !1
            }
            if (this.settings.openernull)
                try {
                    b.opener = null
                } catch (c) {}
            try {
                b.document.open(),
                b.document.write(a),
                b.document.close()
            } catch (c) {
                return this.crpopsemaphore = !1
            }
            this.crpopsemaphore = !1;
            return b
        },
        _openPopunderCRPost: function(a) {
            "ready" == this.prepop.name ? this.prepop.location.replace(a) : this.prepop.name = a
        },
        _getMinipopStatus: function(a) {
            if (!a || a.closed || !a.location)
                return "closed";
            try {
                var b = a.name
            } catch (c) {
                b = "error"
            }
            return "error" == b ? "success" : "" == b ? "waiting" : "ready" == b ? "prepopready" : "redirecting"
        },
        _openPopunderCR: function(a, b) {
            if (this.crpopsemaphore)
                return !1;
            this.crpopsemaphore = !0;
            b = this._getPopunderCRResident(b);
            try {
                var c = this.iframewin.open("about:blank", a, this._getPopunderCROptionsString())
            } catch (e) {
                return this.crpopsemaphore = !1
            }
            if (this.settings.openernull)
                try {
                    c.opener = null
                } catch (e) {}
            try {
                c.document.open(),
                c.document.write(b),
                c.document.close()
            } catch (e) {
                return this.crpopsemaphore = !1
            }
            this.crpopsemaphore = !1;
            return c
        },
        _openPopunderIE11: function(a) {
            this.tw = this._openPopup(a);
            this.focusInterval && clearInterval(this.focusInterval);
            this.runs = 0;
            this.focusInterval = setInterval(function() {
                try {
                    this.tw && (this.tw.blur(),
                    this.tw.opener.focus(),
                    d.self.focus(),
                    d.focus(),
                    f.focus())
                } catch (b) {}
                this.runs++;
                10 < this.runs && this.focusInterval && clearInterval(this.focusInterval)
            }
            .bind(this), 100);
            return this.tw
        },
        _detectBrowser: function() {
            var a, b;
            var c = navigator.userAgent;
            var e = "desktop";
            var g = "chromium";
            var h = 100;
            if (b = c.match(/^Mozilla\/5\.0 \([^\)]+\) AppleWebKit\/[0-9\.]+ \(KHTML, like Gecko\) Chrome\/([0-9]+)[0-9\.]+ Safari\/[0-9\.]+$/))
                g = "chrome",
                h = b[1];
            if (b = c.match(/(Firefox|OPR|Edge?)\/([0-9]+)/))
                g = b[1].toLowerCase(),
                h = b[2];
            if (b = c.match(/rv:([0-9]+)\.0\) like Gecko/))
                g = "msie",
                h = b[1];
            if (b = c.match(/MSIE ([0-9]+)/))
                g = "msie",
                h = b[1];
            c.match(/Windows NT/) && (a = "windows");
            if (b = c.match(/([0-9]+)(_([0-9]+)){0,} like Mac OS X/))
                a = "ios",
                g = "safari",
                h = b[1],
                e = "mobile";
            if (b = c.match(/(CrOS)\/([0-9]+)/))
                g = "chrome",
                h = b[2];
            if (b = c.match(/\(KHTML, like Gecko\) Version\/([0-9]+)/))
                g = "safari",
                h = b[1];
            c.match(/Macintosh; Intel Mac OS X /) && (a = "macosx");
            c.match(/Android|like Mac OS X|Mobile|Phone|Tablet/) && (e = "mobile");
            c.match(/^Mozilla\/5\.0 \(Linux; Android/) && (a = "android");
            "edg" == g && (g = "edge");
            "edge" == g && 50 < h && (g = "chromium");
            "opr" == g && (g = "chromium");
            "macosx" == a && 0 < navigator.maxTouchPoints && (a = "ios",
            g = "safari",
            e = "mobile");
            navigator.userAgent.startsWith("Mozilla/5.0 (X11; Linux x86_64)") && !navigator.platform.includes("84_64") && 2 <= navigator.maxTouchPoints && (a = "android",
            g = "chrome",
            e = "mobile");
            b = d != d.top;
            c = 0 == f.referrer.startsWith(d.location.origin) && !b;
            return {
                o: a,
                b: g,
                v: h,
                f: e,
                i: b,
                bbr: c
            }
        },
        _getBrowserCapabilities: function() {
            var a = this._detectBrowser()
              , b = !1
              , c = !0
              , e = !0;
            punderminipop = !1;
            var g = a.bbr;
            "desktop" == a.f ? ("chrome" == a.b && (b = !0),
            "firefox" == a.b && (b = !0),
            "msie" == a.b && (b = !0),
            "safari" == a.b && (b = !0),
            "chromium" == a.b && (b = !0),
            "edge" == a.b && (b = !1)) : e = b = c = !1;
            1 == a.i && (e = !1);
            punderminipop = b && ("msie" == a.b && 11 == a.v || "edge" == a.b || "chromium" == a.b || "chrome" == a.b || "firefox" == a.b && 85 <= a.v);
            return {
                env: a,
                popup: c,
                popunder: b,
                tabup: !0,
                tabunder: e,
                punderminipop,
                bbr: g
            }
        },
        _openPopunder: function(a, b) {
            var c = this.cap.env;
            if ("desktop" == c.f) {
                if (this.cap.punderminipop) {
                    if (a = this._openPopunderCR(a, b))
                        this.minipopmon = !0;
                    return a
                }
                return "firefox" == c.b ? this._openPopunderFF(a) : "msie" == c.b && 11 > c.v ? this._openPopunderBlur(a) : "msie" == c.b && 11 == c.v ? this._openPopunderIE11(a) : "safari" == c.b ? this._openPopunderSafari(a) : this._openPopup(a)
            }
            return this._openTabup(a)
        },
        _prepopOpen: function(a) {
            this.prepop = this.cap.punderminipop ? this._openPopunderCRPre(a) : this._openPopunder("about:blank")
        },
        _prepopReady: function() {
            return !(!this.prepop || this.prepop.closed || !this.prepop.location)
        },
        _prepopUse: function(a, b) {
            b.onbeforeopen instanceof Function ? a = b.onbeforeopen(a) : this.settings.onbeforeopen instanceof Function && (a = this.settings.onbeforeopen(a));
            try {
                this.cap.punderminipop ? this._openPopunderCRPost(a) : this.prepop.location.replace(a),
                this.prepop = 0
            } catch (c) {
                return 0
            }
            try {
                if (b.onafteropen instanceof Function)
                    b.onafteropen(a);
                else if (this.settings.onafteropen instanceof Function)
                    this.settings.onafteropen(a)
            } catch (c) {}
            return 1
        },
        _prepopClose: function() {
            try {
                this.prepop.close()
            } catch (a) {
                return !1
            }
            return !0
        },
        _openAd: function(a, b) {
            if (this.openadsemaphore)
                return !1;
            this.openadsemaphore = !0;
            b.onbeforeopen instanceof Function ? a = b.onbeforeopen(a) : this.settings.onbeforeopen instanceof Function && (a = this.settings.onbeforeopen(a));
            var c = b.type;
            "popunder" != c || this.cap.popunder || (c = "tabunder");
            "tabunder" != c || this.cap.tabunder || (c = "tabup");
            "tabup" != c || this.cap.tabup || (c = "popup");
            "popup" != c || this.cap.popup || (c = "tabup");
            var e;
            "popunder" == c ? e = this._openPopunder(a, b.crtimeout || this.settings.crtimeout) : "popup" == c ? e = this._openPopup(a) : "tabup" == c ? e = this._openTabup(a) : "tabunder" == c && (e = this._openTabunder(a));
            if (!1 !== e)
                try {
                    if (b.onafteropen instanceof Function)
                        b.onafteropen(a);
                    else if (this.settings.onafteropen instanceof Function)
                        this.settings.onafteropen(a)
                } catch (g) {}
            this.openadsemaphore = !1;
            return e
        },
        abortPop: function() {
            this._prepopReady() && this._prepopClose();
            this._removeCatchAllDiv();
            this.clearUrls();
            this.settings.prepop = !1
        },
        _minipopCheck: function(a) {
            if (this.minipopmon) {
                var b = this._getMinipopStatus(this.minipopmontw);
                if ("prepopready" == b || "success" == b || "redirecting" == b) {
                    if ("redirecting" == b || "success" == b)
                        this.urls.shift(),
                        this.minipopmon = !1
                } else
                    "closed" == b && (this.minipopmon = !1);
                a && setInterval(this._minipopCheck.bind(this), 100, !0)
            }
        },
        _onExecute: function(a) {
            a = a || d.event;
            if ("click" == a.type) {
                var b = !1;
                "which"in a ? b = 3 == a.which : "button"in a && (b = 2 == a.button);
                if (b)
                    return !1
            }
            if (this.bbrhooked && "popstate" == a.type) {
                b = this.bbrurl;
                if (!b)
                    for (a = 0; a < this.urls.length; a++)
                        this.urls[a].options.bbr && (b = this.urls[a]);
                if (!b)
                    return this.bbrhooked = !1,
                    history.go(-1),
                    !1;
                this._prepopReady() && this._prepopClose();
                a = b.url;
                b.options.onbeforeopen instanceof Function ? a = b.options.onbeforeopen(a) : this.settings.onbeforeopen instanceof Function && (a = this.settings.onbeforeopen(a));
                d.top.location.replace(a);
                return !0
            }
            try {
                if (this.userActivation && "extreme" != this.settings.catchalldiv && !d.navigator.userActivation.isActive && !this.iframewin.navigator.userActivation.isActive)
                    return this.settings.catchalldiv = "never",
                    this._removeCatchAllDiv(),
                    !1
            } catch (c) {}
            this._minipopCheck(!1);
            if (this.minipopmontw && (b = this._getMinipopStatus(this.minipopmontw),
            "waiting" == b || "prepopready" == b))
                return !1;
            0 == this.urls.length && this.settings.prepop && !this._prepopReady() && (this.settings.prepop = !1,
            this._prepopOpen(this.settings.crtimeout),
            this._unblockWindowOpen(),
            this._removeCatchAllDiv());
            if (0 == this.urls.length)
                return !1;
            this.settings.prepop = !1;
            b = this.urls[0];
            this.minipopmon = !1;
            b = this._openAd(b.url, b.options);
            b || ("extreme" != this.settings.catchalldiv ? (this.settings.catchalldiv = "never",
            this._removeCatchAllDiv()) : "uah" != a.type && this._addWarningToCatchAllDiv());
            if (this.minipopmon)
                this.minipopmontw = b,
                this._minipopCheck(!0),
                this.catchalldiv && 2 > this.urls.length && (this._removeCatchAllDiv(),
                this._unblockWindowOpen());
            else if (b || this.settings.ignorefailure)
                this.urls.shift(),
                0 == this.urls.length && (clearInterval(this.uahtimer),
                this.uahtimer = 0,
                this._unblockWindowOpen(),
                this._removeCatchAllDiv())
        },
        _userActivationHandler: function() {
            var a = !1;
            try {
                a = d.navigator.userActivation.isActive
            } catch (b) {}
            if (!a)
                try {
                    a = top.navigator.userActivation.isActive
                } catch (b) {}
            if (!a)
                try {
                    a = this.iframewin.navigator.userActivation.isActive
                } catch (b) {}
            "IFRAME" == f.activeElement.tagName && (a = !1);
            a && this._onExecute({
                type: "uah"
            })
        },
        _onMouseDownHandler: function(a) {
            a = a.target || a.srcElement || a.toElement;
            if (this._prepopReady())
                return !1;
            if (this.minipopmontw) {
                var b = this._getMinipopStatus(this.minipopmontw);
                if ("waiting" == b || "prepopready" == b)
                    return !1
            }
            if ("A" != a.tagName || 0 == this.urls.length)
                return !1;
            if ("_blank" == a.target || 0 < f.getElementsByTagName("BASE").length && "_blank" == (f.getElementsByTagName("BASE")[0].target || "").toLowerCase())
                a.popjsoriginalhref = a.href,
                a.href = "#",
                a.target = ""
        },
        _onMouseUpHandler: function(a) {
            var b = a.target || a.srcElement || a.toElement;
            b.popjsoriginalhref && setTimeout(function() {
                b.href = b.popjsoriginalhref;
                delete b.popjsoriginalhref;
                b.target = "_blank"
            }, 100)
        },
        _onBeforeUnloadHandler: function() {
            this._prepopReady() && this._prepopClose()
        },
        _isCatchAllNeeded: function() {
            if (this.catchalldiv || "never" == this.settings.catchalldiv || 0 < !this.urls.length)
                return !1;
            if ("always" == this.settings.catchalldiv || "extreme" == this.settings.catchalldiv)
                return !0;
            for (var a = f.getElementsByTagName("IFRAME"), b = 0; b < a.length; b++)
                if (100 < (a.item(b).clientHeight || a.item(b).offsetHeight || 0) || 100 < (a.item(b).clientWidth || a.item(b).offsetWidth || 0))
                    return !0;
            return !1
        },
        _removeCatchAllDiv: function() {
            this.catchallmon || (clearInterval(this.catchallmon),
            this.catchallmon = !1);
            this.catchalldiv && (this.catchalldiv.parentNode.removeChild(this.catchalldiv),
            delete this.catchalldiv)
        },
        _createCatchAllDiv: function() {
            if (0 == f.getElementsByTagName("body").length)
                return !1;
            var a = f.createElement("div");
            a.style = "text-align:center;padding-top:48vh;font-size:4vw;position:fixed;display:block;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0);z-index:300000;";
            f.addEventListener ? ("ios" == this.cap.env.o && a.addEventListener("touchend", this._onExecute.bind(this)),
            a.addEventListener("click", this._onExecute.bind(this))) : a.attachEvent("onclick", this._onExecute.bind(this));
            f.getElementsByTagName("body")[0].appendChild(a);
            this.catchalldiv = a;
            return !0
        },
        _deployCatchAll: function() {
            if ("never" == this.settings.catchalldiv)
                return !1;
            this.catchalldiv || (this._isCatchAllNeeded() && this._createCatchAllDiv(),
            this.catchallmon || (this.catchallmon = setInterval(function() {
                this._isCatchAllNeeded() && this._createCatchAllDiv()
            }
            .bind(this), 200)))
        },
        _addWarningToCatchAllDiv: function() {
            if (!this.catchalldiv)
                return !1;
            this.catchalldiv.style.backgroundColor = "black";
            this.catchalldiv.style.color = "white";
            this.catchalldiv.innerText = "Access blocked due to popup blocker.\nDisable popup blocker and click anywhere to access the content."
        },
        _blockWindowOpen: function() {
            if (this.windowopenblocked)
                return !1;
            this.windowopenblocked = !0;
            d.open = new Proxy(d.open,{
                apply(a, b, c) {
                    a = f.createElement("iframe");
                    a.src = "javascript:false";
                    a.style.display = "none";
                    a.width = "0";
                    a.height = "0";
                    b = f.getElementsByTagName("script")[0];
                    b.parentNode.insertBefore(a, b);
                    return a.contentWindow || a
                }
            });
            return !0
        },
        _unblockWindowOpen: function() {
            if (!this.windowopenblocked)
                return !1;
            this.windowopenblocked = !1;
            d.open = this.originalwindowopen;
            return !0
        },
        init: function(a) {
            if (this._cookieLockGet())
                return !1;
            var b = f.createElement("iframe");
            b.src = "javascript:false";
            b.style.display = "none";
            b.width = "0";
            b.height = "0";
            var c = f.getElementsByTagName("script")[0];
            c.parentNode.insertBefore(b, c);
            this.iframewin = b.contentWindow || b;
            this.originalwindowopen = this.iframewin.open;
            this.userActivation = !0;
            try {
                this.iframewin.navigator.userActivation.isActive
            } catch (e) {
                this.userActivation = !1
            }
            this.cap = this._getBrowserCapabilities();
            this.urls = [];
            this.bbrurl = !1;
            this.settings = {};
            this.settings.prepop = (a.prepop || !1) && this.cap.popunder;
            this.settings.crtimeout = a.crtimeout || 6E4;
            this.settings.targetblankhandler = a.targetblankhandler || !0;
            this.settings.onbeforeopen = a.onbeforeopen;
            this.settings.onafteropen = a.onafteropen;
            this.settings.ignorefailure = a.ignorefailure || !1;
            this.settings.catchalldiv = a.catchalldiv || "auto";
            this.userActivation || (this.settings.catchalldiv = "always");
            "never" != this.settings.catchalldiv && (d.addEventListener("load", this._deployCatchAll.bind(this), !0),
            setInterval(this._deployCatchAll.bind(this), 200),
            this._deployCatchAll());
            this.bbrhooked = this.minipopmon = !1;
            this.settings.openernull = !0;
            this.settings.prepop && this._blockWindowOpen();
            this.uahtimer = this.userActivation ? setInterval(this._userActivationHandler.bind(this), 50) : 0;
            d.addEventListener ? (d.addEventListener("touchend", this._onExecute.bind(this), !0),
            d.addEventListener("click", this._onExecute.bind(this), !0),
            this.cap.bbr && d.addEventListener("popstate", this._onExecute.bind(this), !0),
            this.settings.targetblankhandler && (d.addEventListener("mousedown", this._onMouseDownHandler.bind(this), !0),
            d.addEventListener("mouseup", this._onMouseUpHandler.bind(this), !0)),
            this.settings.prepop && d.addEventListener("beforeunload", this._onBeforeUnloadHandler.bind(this), !0)) : (d.attachEvent("onclick", this._onExecute.bind(this)),
            this.cap.bbr && d.attachEvent("onpopstate", this._onExecute.bind(this)),
            this.settings.targetblankhandler && (d.attachEvent("onmousedown", this._onMouseDownHandler.bind(this)),
            d.attachEvent("onmouseup", this._onMouseUpHandler.bind(this))),
            this.settings.prepop && d.attachEvent("onbeforeunload", this._onBeforeUnloadHandler.bind(this)));
            this.iframewin.addEventListener ? (this.iframewin.addEventListener("touchend", this._onExecute.bind(this), !0),
            this.iframewin.addEventListener("click", this._onExecute.bind(this), !0),
            this.settings.targetblankhandler && this.iframewin.addEventListener("mousedown", this._onMouseDownHandler.bind(this), !0),
            this.settings.prepop && this.iframewin.addEventListener("beforeunload", this._onBeforeUnloadHandler.bind(this), !0)) : (this.iframewin.attachEvent("onclick", this._onExecute.bind(this)),
            this.settings.targetblankhandler && this.iframewin.attachEvent("onmousedown", this._onMouseDownHandler.bind(this)),
            this.settings.prepop && this.iframewin.attachEvent("onbeforeunload", this._onBeforeUnloadHandler.bind(this)))
        },
        _hookBackButton: function() {
            "complete" === f.readyState ? this.bbrhooked || (d.history.pushState({}, "", null),
            this.bbrhooked = !0) : d.addEventListener("load", this._hookBackButton.bind(this), !0)
        },
        clearUrls: function() {
            this.urls = []
        },
        addUrl: function(a, b) {
            if (!a.match(/^https?:\/\//) || !this.cap)
                return !1;
            if ("bbr" == b.type) {
                if (!this.cap.bbr)
                    return !1;
                this.bbrhooked || this._hookBackButton();
                this.bbrurl = {
                    url: a,
                    options: b
                };
                return !0
            }
            this.userActivation && 0 == this.uahtimer && (this.uahtimer = setInterval(this._userActivationHandler.bind(this), 50));
            var c = !1;
            this._prepopReady() && ("popunder" == b.type ? this._prepopUse(a, b) && (c = !0) : this._prepopClose());
            c || this.settings.ignorefailure || (this._blockWindowOpen(),
            this._deployCatchAll());
            this.urls.push({
                url: a,
                options: b
            })
        }
    }
      , H = {
        a: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(a) {
            var b = ""
              , c = 0;
            for (a = H.b(a); c < a.length; ) {
                var e = a.charCodeAt(c++);
                var g = a.charCodeAt(c++);
                var h = a.charCodeAt(c++);
                var l = e >> 2;
                e = (3 & e) << 4 | g >> 4;
                var m = (15 & g) << 2 | h >> 6;
                var u = 63 & h;
                isNaN(g) ? m = u = 64 : isNaN(h) && (u = 64);
                b = b + this.a.charAt(l) + this.a.charAt(e) + this.a.charAt(m) + this.a.charAt(u)
            }
            return b
        },
        decode: function(a) {
            var b = ""
              , c = 0;
            for (a = a.replace(/[^A-Za-z0-9\+\/=]/g, ""); c < a.length; ) {
                var e = this.a.indexOf(a.charAt(c++));
                var g = this.a.indexOf(a.charAt(c++));
                var h = this.a.indexOf(a.charAt(c++));
                var l = this.a.indexOf(a.charAt(c++));
                e = e << 2 | g >> 4;
                g = (15 & g) << 4 | h >> 2;
                var m = (3 & h) << 6 | l;
                b += String.fromCharCode(e);
                64 != h && (b += String.fromCharCode(g));
                64 != l && (b += String.fromCharCode(m))
            }
            return H.c(b)
        },
        b: function(a) {
            a = a.replace(/\r\n/g, "\n");
            for (var b = "", c = 0; c < a.length; c++) {
                var e = a.charCodeAt(c);
                128 > e ? b += String.fromCharCode(e) : 127 < e && 2048 > e ? (b += String.fromCharCode(e >> 6 | 192),
                b += String.fromCharCode(63 & e | 128)) : (b += String.fromCharCode(e >> 12 | 224),
                b += String.fromCharCode(e >> 6 & 63 | 128),
                b += String.fromCharCode(63 & e | 128))
            }
            return b
        },
        c: function(a) {
            var b = ""
              , c = 0;
            for (c1 = c2 = 0; c < a.length; ) {
                var e = a.charCodeAt(c);
                128 > e ? (b += String.fromCharCode(e),
                c++) : 191 < e && 224 > e ? (c2 = a.charCodeAt(c + 1),
                b += String.fromCharCode((31 & e) << 6 | 63 & c2),
                c += 2) : (c2 = a.charCodeAt(c + 1),
                c3 = a.charCodeAt(c + 2),
                b += String.fromCharCode((15 & e) << 12 | (63 & c2) << 6 | 63 & c3),
                c += 3)
            }
            return b
        }
    };
    !function(a, b, c) {
        "undefined" != typeof module && module.exports ? module.exports = c(b, a) : "function" == typeof define && define.amd ? define("detect-zoom", function() {
            return c(b, a)
        }) : a[b] = c(b, a)
    }(d, "detectZoom", function() {
        var a = function() {
            return d.devicePixelRatio || 1
        }
          , b = function() {
            return {
                zoom: 1,
                devicePxPerCssPx: 1
            }
        }
          , c = function() {
            var k = Math.round(q.deviceXDPI / q.logicalXDPI * 100) / 100;
            return {
                zoom: k,
                devicePxPerCssPx: k * a()
            }
        }
          , e = function() {
            var k = Math.round(f.documentElement.offsetHeight / d.innerHeight * 100) / 100;
            return {
                zoom: k,
                devicePxPerCssPx: k * a()
            }
        }
          , g = function() {
            var k = Math.round(d.outerWidth / d.innerWidth * 100) / 100;
            return {
                zoom: k,
                devicePxPerCssPx: k * a()
            }
        }
          , h = function() {
            var k = Math.round(f.documentElement.clientWidth / d.innerWidth * 100) / 100;
            return {
                zoom: k,
                devicePxPerCssPx: k * a()
            }
        }
          , l = function() {
            var k = (90 == Math.abs(d.orientation) ? q.height : q.width) / d.innerWidth;
            return {
                zoom: k,
                devicePxPerCssPx: k * a()
            }
        }
          , m = function() {
            var k = f.createElement("div");
            k.innerHTML = "1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0";
            k.setAttribute("style", "font: 100px/1em sans-serif; -webkit-text-size-adjust: none; text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;".replace(/;/g, " !important;"));
            var n = f.createElement("div");
            n.setAttribute("style", "width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;".replace(/;/g, " !important;"));
            n.appendChild(k);
            f.body.appendChild(n);
            k = 1E3 / k.clientHeight;
            return k = Math.round(100 * k) / 100,
            f.body.removeChild(n),
            {
                zoom: k,
                devicePxPerCssPx: k * a()
            }
        }
          , u = function() {
            var k = B("min--moz-device-pixel-ratio", "", 0, 10, 20, 1E-4);
            return k = Math.round(100 * k) / 100,
            {
                zoom: k,
                devicePxPerCssPx: k
            }
        }
          , K = function() {
            return {
                zoom: u().zoom,
                devicePxPerCssPx: a()
            }
        }
          , G = function() {
            var k = d.top.outerWidth / d.top.innerWidth;
            return k = Math.round(100 * k) / 100,
            {
                zoom: k,
                devicePxPerCssPx: k * a()
            }
        }
          , B = function(k, n, v, w, y, U) {
            function L(z, M, N) {
                var I = (z + M) / 2;
                return 0 >= N || M - z < U ? I : O("(" + k + ":" + I + n + ")").matches ? L(I, M, N - 1) : L(z, I, N - 1)
            }
            var O, P, D, A;
            d.matchMedia ? O = d.matchMedia : (P = f.getElementsByTagName("head")[0],
            D = f.createElement("style"),
            P.appendChild(D),
            A = f.createElement("div"),
            A.className = "mediaQueryBinarySearch",
            A.style.display = "none",
            f.body.appendChild(A),
            O = function(z) {
                D.sheet.insertRule("@media " + z + "{.mediaQueryBinarySearch {text-decoration: underline} }", 0);
                z = "underline" == getComputedStyle(A, null).textDecoration;
                return D.sheet.deleteRule(0),
                {
                    matches: z
                }
            }
            );
            v = L(v, w, y);
            return A && (P.removeChild(D),
            f.body.removeChild(A)),
            v
        }
          , C = function() {
            var k = b;
            return isNaN(q.logicalXDPI) || isNaN(q.systemXDPI) ? d.navigator.msMaxTouchPoints ? k = e : !d.chrome || d.opera || 0 <= navigator.userAgent.indexOf(" Opera") ? 0 < Object.prototype.toString.call(d.HTMLElement).indexOf("Constructor") ? k = h : "orientation"in d && "webkitRequestAnimationFrame"in d ? k = l : "webkitRequestAnimationFrame"in d ? k = m : 0 <= navigator.userAgent.indexOf("Opera") ? k = G : d.devicePixelRatio ? k = K : .001 < u().zoom && (k = u) : k = g : k = c,
            k
        }();
        return {
            zoom: function() {
                return C().zoom
            },
            device: function() {
                return C().devicePxPerCssPx
            }
        }
    });
    "use strict";
    var Q = "/c"
      , R = "_pop"
      , E = "_pao";
    H = d.Base64;
    var V = f.currentScript
      , F = null
      , r = {
        _set: function(a, b, c, e, g) {
            var h = c || "";
            h && ("number" === typeof h ? (c = new Date,
            c.setTime(c.getTime() + 1E3 * h)) : c = h,
            h = ";expires=" + c.toUTCString());
            f.cookie = a + "=" + escape("" + b) + h + (g ? ";domain=" + g : "") + ";path=" + (e || "/") + ";SameSite=Lax"
        },
        _get: function(a) {
            return (a = f.cookie.match(new RegExp(a + "=[^;]+","i"))) ? decodeURIComponent(a[0].split("=")[1]) : null
        },
        _remove: function(a) {
            this._set(a, 0, new Date(0))
        }
    }
      , t = {
        _available: null,
        _isAvailable: function() {
            if (null === this._available)
                try {
                    d.localStorage.setItem("localStorageTest", 1),
                    d.localStorage.removeItem("localStorageTest"),
                    this._available = !0
                } catch (a) {
                    this._available = !1
                }
            return this._available
        },
        _set: function(a, b) {
            this._isAvailable() ? d.localStorage.setItem(a, b) : r._set(a, b)
        },
        _get: function(a) {
            try {
                return this._isAvailable() ? d.localStorage.getItem(a) : r._get(a)
            } catch (b) {
                return null
            }
        },
        _remove: function(a) {
            this._isAvailable() ? d.localStorage.removeItem(a) : r._remove(a)
        }
    };
    var J = {
        _inventory: {},
        _config: {
            _siteId: 0,
            _minBid: 0,
            _popPerDay: 0,
            _popDelay: 0,
            _inpagePerDay: 0,
            _inpageDelay: 0,
            _defaultDelay: 0,
            _blockedCountries: !1,
            _default: !1,
            _defaultType: "popunder",
            _defaultPerDay: 0,
            _useOverlay: !0,
            _trafficType: 0,
            _popunderFailover: "tabup",
            _prepop: null === r._get("_popprepop"),
            _adscorebp: null,
            _adscorept: null,
            _adscoreak: "QpUJAAAAAAAAGu98Hdz1l_lcSZ2rY60Ajjk9U1c"
        },
        _init: function() {
            var a = this;
            this._loadConfig();
            this.adfired = !1;
            x.init({
                prepop: this._config._prepop && this._isDelayBetweenExpired(),
                catchalldiv: this._config._useOverlay,
                onafteropen: function() {
                    a.adfired = !0;
                    a._updateFiredCount()
                }
            });
            this._adscoreDeploy();
            f.hidden && f.addEventListener("visibilitychange", function() {
                a.adfired || f.hidden || a._adscoreDeploy()
            });
            setInterval(function() {
                !a.adfired && a._getLastOpenAt() > a._lastci && a._adscoreDeploy()
            }, 1E3)
        },
        _adscoreDeploy: function() {
            var a = this
              , b = 0
              , c = this._config;
            if (a._config._adscorebp)
                a._checkInventory(a._config._adscorebp);
            else if ("function" === typeof AdscoreInit)
                try {
                    AdscoreInit(a._config._adscoreak, {
                        sub_id: c._siteId,
                        callback: function(l) {
                            a._checkInventory(l.signature || "4" + l.error)
                        }
                    })
                } catch (l) {
                    a._checkInventory("4" + l.message)
                }
            else if (f.body) {
                var e = ["re", "adsco"];
                e.push(e[1][3]);
                var g = "https://" + e.reverse().join(".") + "/";
                var h = f.createElement("script");
                h.src = g;
                try {
                    h.onerror = function() {
                        h.src == g ? h.src = "https://" + Math.round(Math.pow(52292.244664, 2)) + "/a.js" : (clearTimeout(b),
                        a._checkInventory("1"))
                    }
                } catch (l) {}
                h.onload = function() {
                    clearTimeout(b);
                    try {
                        AdscoreInit(a._config._adscoreak, {
                            sub_id: c._siteId,
                            callback: function(l) {
                                a._checkInventory(l.signature || "2" + l.error)
                            }
                        })
                    } catch (l) {
                        a._checkInventory("4" + l.message)
                    }
                }
                ;
                f.body.appendChild(h);
                b = setTimeout(function() {
                    a._checkInventory("3")
                }, 5E3)
            } else
                setTimeout(function() {
                    a._adscoreDeploy()
                }, 50)
        },
        _checkInventory: function(a) {
            this._lastci = (new Date).getTime();
            x.clearUrls();
            var b = this, c = 0, e = this._config, g, h;
            e._adscorept && e._adscorept(a);
            try {
                clearTimeout(F)
            } catch (l) {}
            F = setTimeout(function() {
                b._adscoreDeploy()
            }, 3E5);
            c = setInterval(function() {
                var l = "//egfqlswbf.com" + Q;
                if (f.body) {
                    clearInterval(c);
                    h = {
                        LqDBAgEo: encodeURIComponent(a),
                        ucvtKjbs: 4,
                        gwTSRcMd: e._siteId,
                        wkcuopNy: e._minBid,
                        DYvHrFPN: e._popPerDay + "," + e._inpagePerDay,
                        zECWUhej: e._blockedCountries || "",
                        pzcdMABT: encodeURIComponent(f.referrer),
                        s: b._getScreenData()
                    };
                    for (g in h)
                        h.hasOwnProperty(g) && (l += (-1 < l.indexOf("?") ? "&" : "?") + g + "=" + (h[g] || ""));
                    var m = f.createElement("script");
                    m.referrerPolicy = "unsafe-url";
                    m.src = l;
                    try {
                        m.onerror = function() {
                            x.abortPop();
                            V.onerror()
                        }
                    } catch (u) {}
                    f.body.appendChild(m)
                }
            }, 100)
        },
        _parseFloatingBanner: function(a) {
            var b = this;
            0 < this._config._inpageDelayPerDay && this._getFiredCount("inpage") >= this._config._inpageDelayPerDay || setTimeout(function() {
                b._updateFiredCount("inpage");
                T(a.url, a.position, a.width, a.height, a.clickurl)
            }
            .bind(b), this._mSecondsTillDelayExpired("inpage"))
        },
        _parseInventory: function(a) {
            this._inventory = a || {};
            this._preparePop()
        },
        _parseBBR: function(a) {
            x.addUrl(a.url, {
                type: "bbr",
                onbeforeopen: function(b) {
                    try {
                        clearTimeout(F)
                    } catch (c) {}
                    return b
                }
                .bind(this)
            })
        },
        _preparePopDefault: function() {
            var a = this;
            if (!1 === this._config._default || "" == this._config._default || 0 < this._config._defaultPerDay && this._getFiredCount("fallback") >= this._config._defaultPerDay)
                x.abortPop(),
                r._set("_popprepop", 1, 21600);
            else {
                var b = this._config._popunderFailover;
                x._prepopReady() && (b = "popunder");
                if (/^https?:\/\//.test(this._config._default))
                    setTimeout(function() {
                        x.addUrl(this._config._default, {
                            type: b,
                            onbeforeopen: function(g) {
                                try {
                                    clearTimeout(F)
                                } catch (h) {}
                                return g
                            }
                            .bind(a)
                        })
                    }
                    .bind(a), this._mSecondsTillDelayExpired("inpage"));
                else {
                    this._updateFiredCount("fallback");
                    var c = H.decode(this._config._default);
                    c = ("<script>" + c + "\x3c/script>").replace(/^\s*<script[^>]*>|<\/script>\s*$/g, "");
                    var e = f.createElement("script");
                    e.type = "text/javascript";
                    e.text = c;
                    f.body.appendChild(e)
                }
            }
        },
        _preparePopInventory: function() {
            var a = this;
            0 < this._config._popPerDay && this._getFiredCount() >= this._config._popPerDay || setTimeout(function() {
                x.addUrl(a._inventory.url, {
                    type: a._inventory.type,
                    bbr: a._inventory.bbr || !1,
                    onbeforeopen: function(b) {
                        try {
                            clearTimeout(F)
                        } catch (c) {}
                        return b + "&s=" + a._getScreenData() + "&v=&m="
                    }
                    .bind(a)
                })
            }, this._mSecondsTillDelayExpired())
        },
        _getScreenData: function() {
            try {
                var a = d.detectZoom.zoom();
                return [q.width, q.height, a, q.width * a, q.height * a, d.self != d.top ? "1" : "0"].join()
            } catch (b) {
                return ""
            }
        },
        _getFiredCount: function(a) {
            a = "_popfired" + (a || "");
            var b = a + "_expires";
            b = t._isAvailable() ? t._get("_spop" + b) : r._get(b);
            var c = 0;
            "number" == typeof b && ((new Date).getTime() < b && (c = t._isAvailable() ? t._get("_spop" + a) : r._get(a)),
            c = parseInt(c, 10) || 0,
            isNaN(c) && (c = 0));
            return c
        },
        _updateFiredCount: function(a) {
            var b = "_popfired" + (a || "")
              , c = b + "_expires"
              , e = t._isAvailable() ? t._get("_spop" + c) : r._get(c)
              , g = "number" == typeof e ? e : (new Date).getTime() + 864E5;
            a = (new Date).getTime() < e ? this._getFiredCount(a) : 0;
            t._isAvailable() ? (t._set("_spop" + b, a + 1),
            t._set("_spop" + c, g),
            t._set("_spoplastOpenAt", (new Date).getTime())) : (r._set(b, a + 1, new Date(g)),
            r._set(c, (new Date(g)).toUTCString(), (new Date(g)).getTime()),
            r._set("lastOpenAt", (new Date).getTime(), 86400))
        },
        _getLastOpenAt: function(a) {
            return t._isAvailable() ? t._get("_spoplastOpenAt") : r._get("lastOpenAt")
        },
        _isDelayBetweenExpired: function(a, b) {
            return 0 == this._mSecondsTillDelayExpired
        },
        _mSecondsTillDelayExpired: function(a, b) {
            a = this._getLastOpenAt(a);
            if ("string" != typeof a && "number" != typeof a)
                return 0;
            a = parseInt(a);
            return isNaN(a) ? 0 : Math.max(0, a + 1E3 * (b || this._config._popDelay) - (new Date).getTime())
        },
        _preparePop: function() {
            "" != this._inventory.url ? (this._preparePopInventory(),
            r._remove("_popprepop")) : this._preparePopDefault()
        },
        _waitForGoodWeather: function() {
            top != d && 0 == d.outerWidth && 0 == d.outerHeight && 0 == d.innerWidth && 0 == d.innerWidth || f.hidden ? setTimeout(this._waitForGoodWeather.bind(this), 50) : setTimeout(this._init.bind(this), this._mSecondsTillDelayExpired())
        },
        _loadConfig: function() {
            var a = d[R] || [], b = this._config, c;
            for (c = 0; c < a.length; c++) {
                var e = a[c][0];
                var g = a[c][1];
                switch (e) {
                case "siteId":
                case "delayBetween":
                case "defaultPerIP":
                case "trafficType":
                    if (g = parseInt(g, 10),
                    isNaN(g))
                        continue
                }
                switch (e) {
                case "siteId":
                    b._siteId = g;
                    break;
                case "minBid":
                    b._minBid = g;
                    break;
                case "popundersPerIP":
                    b._popPerDay = g;
                    break;
                case "delayBetween":
                    b._popDelay = g;
                    break;
                case "blockedCountries":
                    b._blockedCountries = g;
                    break;
                case "default":
                    b._default = g;
                    break;
                case "defaultType":
                    b._defaultType = g;
                    break;
                case "defaultPerIP":
                    b._defaultPerDay = g;
                    break;
                case "topmostLayer":
                    b._useOverlay = g;
                    break;
                case "trafficType":
                    b._trafficType = g;
                    break;
                case "popunderFailover":
                    b._popunderFailover = g;
                    break;
                case "prepop":
                    b._prepop = g;
                    break;
                case "adscorebp":
                    b._adscorebp = g;
                    break;
                case "adscorept":
                    b._adscorept = g;
                    break;
                case "adscoreak":
                    b._adscoreak = g;
                    break;
                case "inpagePerIP":
                    b._inpagePerDay = g;
                    break;
                case "inpageDelayBetween":
                    b._inpageDelay = g;
                    break;
                case "defaultDelayBetween":
                    b._defaultDelay = g
                }
            }
            b._useOverlay.length || (b._useOverlay = b._useOverlay ? "always" : "auto")
        }
    };
    for (var p in d)
        try {
            if (p.match(/[0-9a-f]{32,32}/) && 7 <= d[p].length && d[p][0] && d[p][0][0] && !isNaN(parseFloat(d[p][0][1])) && isFinite(d[p][0][1])) {
                R = p;
                d[p.slice(0, 16) + p.slice(0, 16)] = d[p];
                break
            }
        } catch (a) {}
    if (!"//egfqlswbf.com".includes(".net")) {
        E = "";
        p = 10 + Math.floor(10 * Math.random());
        for (var S = 0; S < p; S++)
            E += "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(26 * Math.random()));
        Q = "/" + E
    }
    p = {
        parse: function(a) {
            J._parseInventory(a)
        },
        fbparse: function(a) {
            J._parseFloatingBanner(a)
        },
        bbrparse: function(a) {
            J._parseBBR(a)
        }
    };
    try {
        d._pao = p,
        Object.freeze(d._pao)
    } catch (a) {}
    try {
        d[E] = p,
        Object.freeze(d[E])
    } catch (a) {}
    navigator.userAgent.includes("://") || J._waitForGoodWeather()
}
)(window, window.document, window.screen);