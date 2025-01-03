(window.webpackJsonp = window.webpackJsonp || []).push([[69, 4, 5, 6, 23, 25, 26, 29, 30, 35, 37, 38, 48, 56, 95, 98, 102, 105, 109, 110, 111, 112, 113, 114, 119, 120, 121, 123], {
    10: function(e, t) {
        e.exports = "https://static-production.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
    },
    11: function(e, t) {
        e.exports = "https://static-production.npmjs.com/1996fcfdf7ca81ea795f67f093d7f449.png"
    },
    1149: function(e, t, n) {
        const o = n(5);
        var r = n(1150);
        e.exports = r,
        o.register("homepage/homepage", e.exports, void 0)
    },
    1150: function(e, t, n) {
        var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }();
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function a(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        var c = n(0)
          , s = n(1151);
        e.exports = function(e) {
            function t() {
                return r(this, t),
                a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e),
            o(t, [{
                key: "shouldComponentUpdate",
                value: function() {
                    return !1
                }
            }, {
                key: "render",
                value: function() {
                    return c.createElement("div", null, c.createElement(s, null))
                }
            }]),
            t
        }(c.Component)
    },
    1151: function(e, t, n) {
        var o = n(0)
          , r = n(157).Helmet
          , a = n(1152)
          , c = n(1153);
        e.exports = function() {
            return o.createElement("article", {
                className: "bg-white dark-gray " + a.npmContent
            }, o.createElement("section", {
                className: a.npmBg + " " + a.npmBgHero
            }, o.createElement(r, null, o.createElement("title", null, "npm | Home")), o.createElement("div", {
                className: "center mw7 pv5 ph3 tc white"
            }, o.createElement("h1", {
                className: "f-subheadline-m f-subheadline-l f1 lh-title " + a.tagline
            }, "Build amazing things"), o.createElement("div", {
                className: "center mw6 lh-copy"
            }, o.createElement("div", null, "We're GitHub, the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you."), o.createElement("h2", {
                className: "f2-l f3 lh-title"
            }, "Take your JavaScript development up a notch"), o.createElement("div", null, "Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages."), o.createElement("div", {
                className: "mt5 flex flex-wrap"
            }, o.createElement("div", {
                className: "w-100 w-50-ns pr3-ns pb3"
            }, o.createElement(c, {
                href: "/signup",
                type: "darkBgPrimary"
            }, "Sign up for free")), o.createElement("div", {
                className: "w-100 w-50-ns pl3-ns pb3"
            }, o.createElement(c, {
                href: "/products/pro",
                type: "darkBgSecondary"
            }, "Learn about Pro")))))), o.createElement("section", {
                className: "pv5 ph3 bg-white"
            }, o.createElement("div", {
                className: "center mw6 mb5 tc lh-copy"
            }, o.createElement("img", {
                alt: "",
                role: "presentation",
                src: "https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png",
                srcSet: "https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png, https://static.npmjs.com/attachments/ck3uwed1cmso79y74pjugy10f-gak-2x.png 2x, https://static.npmjs.com/attachments/ck3uweeyt72yk887420va22p9-gak-3x.png 3x",
                className: "db center mb4"
            }), o.createElement("h2", {
                className: "f2-l f3 lh-title"
            }, "Bring the best of open source to you, your team, and your company"), o.createElement("div", null, "Relied upon by more than 17 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than two million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level."))), o.createElement("link", {
                href: "https://fonts.googleapis.com/css?family=Arimo|Poppins:400,600,700&display=swap",
                rel: "stylesheet"
            }))
        }
    },
    1153: function(e, t, n) {
        var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }();
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function a(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        var c = n(0)
          , s = n(2)
          , p = n(163)
          , i = n(1154)
          , l = function(e) {
            function t() {
                return r(this, t),
                a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e),
            o(t, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.children
                      , n = e.href
                      , o = e.type
                      , r = e.classname;
                    return c.createElement(p, null, c.createElement("a", {
                        href: n,
                        className: i.base + " " + r + " " + i[o]
                    }, t))
                }
            }]),
            t
        }(c.Component);
        l.defaultProps = {
            className: "",
            buttonType: "default"
        },
        l.propTypes = {
            href: s.string,
            children: s.node.isRequired,
            type: s.string,
            classname: s.string
        },
        e.exports = l
    },
    12: function(e, t) {
        e.exports = "https://static-production.npmjs.com/f1786e9b7cba9753ca7b9c40e8b98f67.png"
    },
    13: function(e, t) {
        e.exports = "https://static-production.npmjs.com/5f6e93af5bf0f5dcdd1eecdac99f51ee.png"
    },
    14: function(e, t) {
        e.exports = "https://static-production.npmjs.com/c426a1116301d1fd178c51522484127a.png"
    },
    15: function(e, t) {
        e.exports = "https://static-production.npmjs.com/da3ab40fb0861d15c83854c29f5f2962.png"
    },
    16: function(e, t) {
        e.exports = "https://static-production.npmjs.com/338e4905a2684ca96e08c7780fc68412.png"
    },
    17: function(e, t) {
        e.exports = "https://static-production.npmjs.com/7a7ffabbd910fc60161bc04f2cee4160.png"
    },
    18: function(e, t) {
        e.exports = "https://static-production.npmjs.com/668aac888e52ae13cac9cfd71fabd31f.xml"
    },
    19: function(e, t) {
        e.exports = "https://static-production.npmjs.com/20c188a1399358a9af0a4a4b25530a4e.svg"
    },
    6: function(e, t) {
        e.exports = "https://static-production.npmjs.com/58a19602036db1daee0d7863c94673a4.png"
    },
    7: function(e, t) {
        e.exports = "https://static-production.npmjs.com/7a7ffabbd910fc60161bc04f2cee4160.png"
    },
    8: function(e, t) {
        e.exports = "https://static-production.npmjs.com/34110fd7686e2c90a487ca98e7336e99.png"
    },
    9: function(e, t) {
        e.exports = "https://static-production.npmjs.com/3dc95981de4241b35cd55fe126ab6b2c.png"
    }
}, [[1149, 0, 1]]]);
//# sourceMappingURL=homepage.2845ca01fd5d02701ef6.js.map
