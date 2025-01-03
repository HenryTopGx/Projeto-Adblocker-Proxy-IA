!function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
}(function(s) {
    function f(e, o, n) {
        var e = e.getWrapperElement()
          , t = e.appendChild(document.createElement("div"));
        return t.className = n ? "CodeMirror-dialog CodeMirror-dialog-bottom" : "CodeMirror-dialog CodeMirror-dialog-top",
        "string" == typeof o ? t.innerHTML = o : t.appendChild(o),
        s.addClass(e, "dialog-opened"),
        t
    }
    function p(e, o) {
        e.state.currentNotificationClose && e.state.currentNotificationClose(),
        e.state.currentNotificationClose = o
    }
    s.defineExtension("openDialog", function(e, o, n) {
        n = n || {},
        p(this, null);
        var t = f(this, e, n.bottom)
          , i = !1
          , r = this;
        function u(e) {
            "string" == typeof e ? l.value = e : i || (i = !0,
            s.rmClass(t.parentNode, "dialog-opened"),
            t.parentNode.removeChild(t),
            r.focus(),
            n.onClose && n.onClose(t))
        }
        var l = t.getElementsByTagName("input")[0];
        return l ? (l.focus(),
        n.value && (l.value = n.value,
        !1 !== n.selectValueOnOpen && l.select()),
        n.onInput && s.on(l, "input", function(e) {
            n.onInput(e, l.value, u)
        }),
        n.onKeyUp && s.on(l, "keyup", function(e) {
            n.onKeyUp(e, l.value, u)
        }),
        s.on(l, "keydown", function(e) {
            n && n.onKeyDown && n.onKeyDown(e, l.value, u) || ((27 == e.keyCode || !1 !== n.closeOnEnter && 13 == e.keyCode) && (l.blur(),
            s.e_stop(e),
            u()),
            13 == e.keyCode && o(l.value, e))
        }),
        !1 !== n.closeOnBlur && s.on(t, "focusout", function(e) {
            null !== e.relatedTarget && u()
        })) : (e = t.getElementsByTagName("button")[0]) && (s.on(e, "click", function() {
            u(),
            r.focus()
        }),
        !1 !== n.closeOnBlur && s.on(e, "blur", u),
        e.focus()),
        u
    }),
    s.defineExtension("openConfirm", function(e, o, n) {
        p(this, null);
        var t = f(this, e, n && n.bottom)
          , i = t.getElementsByTagName("button")
          , r = !1
          , u = this
          , l = 1;
        function a() {
            r || (r = !0,
            s.rmClass(t.parentNode, "dialog-opened"),
            t.parentNode.removeChild(t),
            u.focus())
        }
        i[0].focus();
        for (var c = 0; c < i.length; ++c) {
            var d = i[c];
            !function(o) {
                s.on(d, "click", function(e) {
                    s.e_preventDefault(e),
                    a(),
                    o && o(u)
                })
            }(o[c]),
            s.on(d, "blur", function() {
                --l,
                setTimeout(function() {
                    l <= 0 && a()
                }, 200)
            }),
            s.on(d, "focus", function() {
                ++l
            })
        }
    }),
    s.defineExtension("openNotification", function(e, o) {
        p(this, r);
        var n, t = f(this, e, o && o.bottom), i = !1, e = o && void 0 !== o.duration ? o.duration : 5e3;
        function r() {
            i || (i = !0,
            clearTimeout(n),
            s.rmClass(t.parentNode, "dialog-opened"),
            t.parentNode.removeChild(t))
        }
        return s.on(t, "click", function(e) {
            s.e_preventDefault(e),
            r()
        }),
        e && (n = setTimeout(r, e)),
        r
    })
});
