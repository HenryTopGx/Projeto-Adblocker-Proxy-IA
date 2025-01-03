(function(_) {
    /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
    /* 
 
 SPDX-License-Identifier: Apache-2.0 
*/
    /* 
 
 
 Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors 
 Licensed under the Apache License, Version 2.0 (the "License"); 
 you may not use this file except in compliance with the License. 
 You may obtain a copy of the License at 
     http://www.apache.org/licenses/LICENSE-2.0 
 Unless required by applicable law or agreed to in writing, software 
 distributed under the License is distributed on an "AS IS" BASIS, 
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 See the License for the specific language governing permissions and 
 limitations under the License. 
*/
    var ba, ea, ia, la, ma, na, pa, oa, ta, Aa, Ha, Ka, Na, Pa, Ra, Ua, Ta, Va, Wa, Ya, $a, ab, cb, db, eb, gb, kb, lb, mb, qb, rb, ub, wb, yb, Ab, Bb, Gb, Jb, Hb, Kb, Lb, Cb, Mb, Nb, Ob, Qb, Rb, Tb, Vb, Wb, Zb, $b, cc, gc, jc, lc, nc, oc, qc, tc, uc, yc, Ac, Bc, Cc, Ec, Jc, Kc, Lc, Mc, Hc, Gc, Fc, Sc, Tc, Wc, Xc, $c, Zc, bd, cd, ed, hd, id, kd, ld, md, rd, td, sd, wd, yd, xd, Ad, zd, Bd, Dd, jd, Id, Jd, Kd, Qd, Wd, Rd, Td, Ud, Xd, Yd, $d, ae, be, he, ie, Sd, Vd, ke, le, oe, pe, qe, re, ve, we, Be, te, Ie, ue, Je, Ne, Qe, Se, Te, Xe, Ye, Ze, df, ff, kf, of, pf, qf, sf, tf, uf, vf, wf, zf, Df, Ff, Ef, Jf, Lf, Mf, Pf, Qf, Sf, Tf, Uf, Xf, $f, ag, cg, lg, ng, pg, og, qg, tg, ug, vg, wg, Ag, Bg, Dg, Fg, Jg, Eg, Kg, Lg, Mg, Pg, Qg, Rg, Sg, Tg, Ug, Vg, Yg, ah, bh, lh, ph, nh, sh, wh, xh, yh, zh, uh, vh, Ah, Bh, Lh, Jh, Oh, Wh, Ch, ei, oi, pi, qi, si, ti, vi, yi, Bi, Gi, Ii, Ji, Mi, Li, Pi, Qi, uj, xj, yj, zj, Aj, Bj, Cj, Dj, Ej, Gj, Jj, Hj, Lj, Ij, Mj, Oj, Rj, Tj, Xj, ak, Yj, dk, ek, fk, jk, qk, lk, rk, Ck, Ik, Gk, Hk, Nk, Rk, Tk, Uk, Vk, Xk, al, gl, cl, Yk, nl, ol, rl, sl, zl, Cl, Dl, M, El, Kl, Il, Vl, Xl, Yl, Zl, $l, bm, dm, em, lm, mm, om, pm, um, Bm, Dm, Mm, Pm, Rm, Sm, Tm, Wm, $m, cn, en, dn, ln, mn, nn, on, fn, pn, gn, rn, sn, wn, xn, An, Bn, Cn, En, In, Vn, Xn, Yn, $n, ao, fo, go, ho, lo, eo, no, oo, po, ro, uo, wo, xo, yo, zo, Bo, Co, Eo, Go, Ho, Fo, Ko, Lo, No, Vo, Xo, Zo, bp, ap, $o, lp, op, vp, wp, zp, Ap, Bp, Dp, Ep, Gp, Hp, Ip, Kp, Lp, Np, Mp, Pp, Sp, Rp, Tp, Vp, Wp, Zp, $p, bq, eq, dq, gq, hq, iq, kq, lq, nq, mq, qq, sq, uq, vq, xq, zq, Eq, Hq, Iq, Rq, Uq, Sq, Tq, Vq, Wq, Xq, Yq, Zq, $q, ar, br, cr, hr, jr, kr, lr, or, yr, rr, zr, Ar, Br, Dr, Fr, Hr, Jr, Lr, Nr, Qr, Tr, bs, Rr, Sr, Vr, Wr, Pr, Ur, fs, js, ns, qs, ts, zs, Ds, Qa, Es, Is, Ls, Js, Ms, Ps, Xs, Us, $s, bt, ct, et, gt, lt, mt, ht, nt, rt, st, ut, wt, Ct, Dt, yt, zt, At, Bt, Et, Ft, Nt, Pt, Qt, Ut, Vt, Wt, Xt, du, fu, hu, iu, ju, zu, Pu, Su, gv, hv, iv, jv, kv, cw, ew, mw, iw, jw, qw, rw, tw, uw, vw, Dw, Hw, Lw, Pw, Qw, Rw, Sw, Uw, Vw, Ww, Xw, Zw, $w, ax, hx, ix, jx, jf, lx, ox, mx, nx, px, qx;
    ba = function(a) {
        return function() {
            return _.aa[a].apply(this, arguments)
        }
    }
    ;
    ea = function() {
        var a = _.ca.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    ;
    ia = function(a) {
        return fa ? ha ? ha.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    }
    ;
    la = function(a) {
        return -1 != ea().indexOf(a)
    }
    ;
    ma = function() {
        return fa ? !!ha && 0 < ha.brands.length : !1
    }
    ;
    na = function() {
        return la("Firefox") || la("FxiOS")
    }
    ;
    pa = function() {
        !la("Safari") || oa() || (ma() ? 0 : la("Coast")) || (ma() ? 0 : la("Opera")) || (ma() ? 0 : la("Edge")) || (ma() ? ia("Microsoft Edge") : la("Edg/")) || ma() && ia("Opera")
    }
    ;
    oa = function() {
        return ma() ? ia("Chromium") : (la("Chrome") || la("CriOS")) && !(ma() ? 0 : la("Edge")) || la("Silk")
    }
    ;
    _.ra = function(a) {
        if (a instanceof _.qa)
            return a.g;
        throw Error("");
    }
    ;
    ta = function(a) {
        return new sa(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        }
        )
    }
    ;
    _.xa = function(a) {
        var b = void 0 === b ? ua : b;
        a: if (b = void 0 === b ? ua : b,
        !(a instanceof _.qa)) {
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d instanceof sa && d.qm(a)) {
                    a = new _.qa(a);
                    break a
                }
            }
            a = void 0
        }
        return a || _.wa
    }
    ;
    Aa = function(a) {
        for (var b = _.za.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++)
            c.push(String(b[d])),
            c.push(a[d + 1]);
        return new _.qa(c.join(""))
    }
    ;
    _.Ca = function(a) {
        if (Ba.test(a))
            return a
    }
    ;
    _.Da = function(a) {
        return a instanceof _.qa ? _.ra(a) : _.Ca(a)
    }
    ;
    _.Ea = function(a, b) {
        b = _.Da(b);
        void 0 !== b && (a.href = b)
    }
    ;
    Ha = function(a, b) {
        b = _.Ga(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }
    ;
    _.Ia = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    ;
    Ka = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }
    ;
    Na = function(a) {
        for (var b = 0, c = 0, d = {}; c < a.length; ) {
            var e = a[c++]
              , f = _.La(e) ? "o" + _.Ma(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0,
            a[b++] = e)
        }
        a.length = b
    }
    ;
    Pa = function(a, b) {
        a.sort(b || _.Oa)
    }
    ;
    Ra = function(a) {
        for (var b = Qa, c = Array(a.length), d = 0; d < a.length; d++)
            c[d] = {
                index: d,
                value: a[d]
            };
        var e = b || _.Oa;
        Pa(c, function(f, h) {
            return e(f.value, h.value) || f.index - h.index
        });
        for (b = 0; b < a.length; b++)
            a[b] = c[b].value
    }
    ;
    Ua = function(a, b) {
        if (!_.Sa(a) || !_.Sa(b) || a.length != b.length)
            return !1;
        for (var c = a.length, d = Ta, e = 0; e < c; e++)
            if (!d(a[e], b[e]))
                return !1;
        return !0
    }
    ;
    _.Oa = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    ;
    Ta = function(a, b) {
        return a === b
    }
    ;
    Va = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d]
              , f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    }
    ;
    Wa = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = Wa.apply(null, Ka(d, e, e + 8192)), h = 0; h < f.length; h++)
                        b.push(f[h]);
            else
                b.push(d)
        }
        return b
    }
    ;
    Ya = function(a, b) {
        for (var c in a)
            b.call(void 0, a[c], c, a)
    }
    ;
    $a = function(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    ;
    ab = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a))
                return c
    }
    ;
    cb = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < bb.length; f++)
                c = bb[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;
    db = function(a) {
        throw Error("unexpected value " + a + "!");
    }
    ;
    eb = function(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }
    ;
    gb = function(a, b) {
        if (b instanceof fb)
            b = b.g;
        else
            throw Error("");
        a.textContent = b;
        eb(a)
    }
    ;
    kb = function(a, b) {
        a.src = _.jb(b);
        eb(a)
    }
    ;
    lb = function(a) {
        a = a(function(b) {
            b.name = b.constructor.name;
            b.stack = Error().stack
        });
        a.prototype = Object.create(Error.prototype);
        a.prototype.constructor = a
    }
    ;
    mb = function(a) {
        var b = {};
        b.winner_qid = a.getEscapedQemQueryId();
        b.cid = _.u(a, 19);
        b.ecrs = _.u(a, 11);
        return "https://googleads.g.doubleclick.net/td/activeview?" + _.x(Object, "entries").call(Object, b).map(function(c) {
            var d = _.y(c);
            c = d.next().value;
            d = d.next().value;
            return encodeURIComponent(c) + "=" + encodeURIComponent(d)
        }).join("&") + "&acvw=[VIEWABILITY]"
    }
    ;
    qb = function(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (nb) {
            if (b && (ob ? !a.rm() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)))
                throw Error("Found an unpaired surrogate");
            a = (pb || (pb = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f)
                    d[c++] = f;
                else {
                    if (2048 > f)
                        d[c++] = f >> 6 | 192;
                    else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var h = a.charCodeAt(++e);
                                if (56320 <= h && 57343 >= h) {
                                    f = 1024 * (f - 55296) + h - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else
                                    e--
                            }
                            if (b)
                                throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    }
    ;
    rb = function(a) {
        _.ca.setTimeout(function() {
            throw a;
        }, 0)
    }
    ;
    ub = function(a) {
        if (!sb)
            return tb(a);
        for (var b = "", c = 0, d = a.length - 10240; c < d; )
            b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    ;
    wb = function(a) {
        return vb[a] || ""
    }
    ;
    yb = function(a) {
        return xb && null != a && a instanceof Uint8Array
    }
    ;
    Ab = function(a) {
        if (a !== zb)
            throw Error("illegal external caller");
    }
    ;
    Bb = function() {
        return "function" === typeof BigInt
    }
    ;
    Gb = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = _.y(Cb(c, a)),
        b = c.next().value,
        a = c.next().value,
        c = b);
        Eb = c >>> 0;
        Fb = a >>> 0
    }
    ;
    Jb = function(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (2097151 >= b)
            var c = "" + (4294967296 * b + a);
        else
            Bb() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215,
            b = b >> 16 & 65535,
            a = (a & 16777215) + 6777216 * c + 6710656 * b,
            c += 8147497 * b,
            b *= 2,
            1E7 <= a && (c += Math.floor(a / 1E7),
            a %= 1E7),
            1E7 <= c && (b += Math.floor(c / 1E7),
            c %= 1E7),
            c = b + Hb(c) + Hb(a));
        return c
    }
    ;
    Hb = function(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }
    ;
    Kb = function() {
        var a = Eb
          , b = Fb;
        b & 2147483648 ? Bb() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = _.y(Cb(a, b)),
        a = b.next().value,
        b = b.next().value,
        a = "-" + Jb(a, b)) : a = Jb(a, b);
        return a
    }
    ;
    Lb = function(a) {
        if (16 > a.length)
            Gb(Number(a));
        else if (Bb())
            a = BigInt(a),
            Eb = Number(a & BigInt(4294967295)) >>> 0,
            Fb = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            Fb = Eb = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e,
            e += 6)
                d = Number(a.slice(d, e)),
                Fb *= 1E6,
                Eb = 1E6 * Eb + d,
                4294967296 <= Eb && (Fb += _.x(Math, "trunc").call(Math, Eb / 4294967296),
                Fb >>>= 0,
                Eb >>>= 0);
            b && (b = _.y(Cb(Eb, Fb)),
            a = b.next().value,
            b = b.next().value,
            Eb = a,
            Fb = b)
        }
    }
    ;
    Cb = function(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    }
    ;
    Mb = function(a) {
        return Array.prototype.slice.call(a)
    }
    ;
    Nb = function(a) {
        return "function" === typeof _.B.Symbol && "symbol" === typeof (0,
        _.B.Symbol)() ? (0,
        _.B.Symbol)() : a
    }
    ;
    Ob = function(a, b, c) {
        return c ? a | b : a & ~b
    }
    ;
    Qb = function(a) {
        Pb(a, 34);
        return a
    }
    ;
    Rb = function(a) {
        Pb(a, 32);
        return a
    }
    ;
    Tb = function(a, b) {
        Sb(b, (a | 0) & -14591)
    }
    ;
    Vb = function(a, b) {
        Sb(b, (a | 34) & -14557)
    }
    ;
    Wb = function(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    }
    ;
    Zb = function(a) {
        return !(!a || "object" !== typeof a || a.wm !== Yb)
    }
    ;
    $b = function(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    ;
    cc = function(a, b, c) {
        if (null != a)
            if ("string" === typeof a)
                a = a ? new ac(a,zb) : bc();
            else if (a.constructor !== ac)
                if (yb(a))
                    a = a.length ? new ac(c ? a : new Uint8Array(a),zb) : bc();
                else {
                    if (!b)
                        throw Error();
                    a = void 0
                }
        return a
    }
    ;
    gc = function(a, b, c) {
        if (!Array.isArray(a) || a.length)
            return !1;
        var d = (0,
        _.ec)(a);
        if (d & 1)
            return !0;
        if (!(b && (Array.isArray(b) ? _.x(b, "includes").call(b, c) : b.has(c))))
            return !1;
        Sb(a, d | 1);
        return !0
    }
    ;
    _.hc = function(a) {
        if (a & 2)
            throw Error();
    }
    ;
    jc = function(a) {
        if (ic)
            throw Error("");
        ic = function(b) {
            _.ca.setTimeout(function() {
                a(b)
            }, 0)
        }
    }
    ;
    lc = function(a) {
        if (ic)
            try {
                ic(a)
            } catch (b) {
                throw b.cause = a,
                b;
            }
    }
    ;
    nc = function() {
        var a = Error();
        mc(a, "incident");
        ic ? lc(a) : rb(a)
    }
    ;
    oc = function(a) {
        a = Error(a);
        mc(a, "warning");
        lc(a);
        return a
    }
    ;
    _.pc = function(a) {
        if (null != a && "number" !== typeof a)
            throw Error("Value of float/double field must be a number, found " + typeof a + ": " + a);
        return a
    }
    ;
    qc = function(a) {
        if (null == a || "number" === typeof a)
            return a;
        if ("NaN" === a || "Infinity" === a || "-Infinity" === a)
            return Number(a)
    }
    ;
    tc = function(a) {
        if ("boolean" !== typeof a)
            throw Error("Expected boolean but got " + sc(a) + ": " + a);
        return a
    }
    ;
    uc = function(a) {
        if (null == a || "boolean" === typeof a)
            return a;
        if ("number" === typeof a)
            return !!a
    }
    ;
    _.wc = function(a) {
        var b = typeof a;
        return "number" === b ? _.x(Number, "isFinite").call(Number, a) : "string" !== b ? !1 : vc.test(a)
    }
    ;
    _.xc = function(a) {
        if (!_.x(Number, "isFinite").call(Number, a))
            throw oc("enum");
        return a | 0
    }
    ;
    yc = function(a) {
        return null == a ? a : _.xc(a)
    }
    ;
    _.zc = function(a) {
        return null == a ? a : _.x(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    }
    ;
    Ac = function(a) {
        if ("number" !== typeof a)
            throw oc("int32");
        if (!_.x(Number, "isFinite").call(Number, a))
            throw oc("int32");
        return a | 0
    }
    ;
    Bc = function(a) {
        if (null == a)
            return a;
        if ("string" === typeof a) {
            if (!a)
                return;
            a = +a
        }
        if ("number" === typeof a)
            return _.x(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    }
    ;
    Cc = function(a) {
        if ("number" !== typeof a)
            throw oc("uint32");
        if (!_.x(Number, "isFinite").call(Number, a))
            throw oc("uint32");
        return a >>> 0
    }
    ;
    _.Dc = function(a) {
        return null == a ? a : Cc(a)
    }
    ;
    Ec = function(a) {
        if (null == a)
            return a;
        if ("string" === typeof a) {
            if (!a)
                return;
            a = +a
        }
        if ("number" === typeof a)
            return _.x(Number, "isFinite").call(Number, a) ? a >>> 0 : void 0
    }
    ;
    _.Ic = function(a, b) {
        b = !!b;
        if (!_.wc(a))
            throw oc("int64");
        return "string" === typeof a ? Fc(a) : b ? Gc(a) : Hc(a)
    }
    ;
    Jc = function(a) {
        return null == a ? a : _.Ic(a)
    }
    ;
    Kc = function(a) {
        return "-" === a[0] ? !1 : 20 > a.length ? !0 : 20 === a.length && 184467 > Number(a.substring(0, 6))
    }
    ;
    Lc = function(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    }
    ;
    Mc = function(a) {
        if (0 > a) {
            Gb(a);
            var b = Jb(Eb, Fb);
            a = Number(b);
            return _.x(Number, "isSafeInteger").call(Number, a) ? a : b
        }
        if (Kc(String(a)))
            return a;
        Gb(a);
        return 4294967296 * Fb + (Eb >>> 0)
    }
    ;
    Hc = function(a) {
        a = _.x(Math, "trunc").call(Math, a);
        if (!_.x(Number, "isSafeInteger").call(Number, a)) {
            Gb(a);
            var b = Eb
              , c = Fb;
            if (a = c & 2147483648)
                b = ~b + 1 >>> 0,
                c = ~c >>> 0,
                0 == b && (c = c + 1 >>> 0);
            b = 4294967296 * c + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }
    ;
    _.Nc = function(a) {
        a = _.x(Math, "trunc").call(Math, a);
        return 0 <= a && _.x(Number, "isSafeInteger").call(Number, a) ? a : Mc(a)
    }
    ;
    Gc = function(a) {
        a = _.x(Math, "trunc").call(Math, a);
        if (_.x(Number, "isSafeInteger").call(Number, a))
            a = String(a);
        else {
            var b = String(a);
            Lc(b) ? a = b : (Gb(a),
            a = Kb())
        }
        return a
    }
    ;
    _.Qc = function(a) {
        a = _.x(Math, "trunc").call(Math, a);
        if (0 <= a && _.x(Number, "isSafeInteger").call(Number, a))
            a = String(a);
        else {
            var b = String(a);
            Kc(b) ? a = b : (Gb(a),
            a = Jb(Eb, Fb))
        }
        return a
    }
    ;
    Fc = function(a) {
        var b = _.x(Math, "trunc").call(Math, Number(a));
        if (_.x(Number, "isSafeInteger").call(Number, b))
            return String(b);
        b = a.indexOf(".");
        -1 !== b && (a = a.substring(0, b));
        Lc(a) || (Lb(a),
        a = Kb());
        return a
    }
    ;
    _.Rc = function(a) {
        var b = _.x(Math, "trunc").call(Math, Number(a));
        if (_.x(Number, "isSafeInteger").call(Number, b) && 0 <= b)
            return String(b);
        b = a.indexOf(".");
        -1 !== b && (a = a.substring(0, b));
        Kc(a) || (Lb(a),
        a = Jb(Eb, Fb));
        return a
    }
    ;
    Sc = function(a) {
        if (null == a)
            return a;
        if (_.wc(a)) {
            var b;
            "number" === typeof a ? b = Hc(a) : b = Fc(a);
            return b
        }
    }
    ;
    Tc = function(a, b) {
        b = void 0 === b ? !1 : b;
        if (null == a)
            return a;
        if (_.wc(a))
            return "string" === typeof a ? Fc(a) : b ? Gc(a) : Hc(a)
    }
    ;
    _.Uc = function(a) {
        if (null != a) {
            var b = !!b;
            if (!_.wc(a))
                throw oc("uint64");
            a = "string" === typeof a ? _.Rc(a) : b ? _.Qc(a) : _.Nc(a)
        }
        return a
    }
    ;
    _.Vc = function(a) {
        if ("string" !== typeof a)
            throw Error();
        return a
    }
    ;
    Wc = function(a) {
        if (null != a && "string" !== typeof a)
            throw Error();
        return a
    }
    ;
    Xc = function(a) {
        return null == a || "string" === typeof a ? a : void 0
    }
    ;
    $c = function(a, b, c, d) {
        if (null != a && "object" === typeof a && a.bh === Yc)
            return a;
        if (!Array.isArray(a))
            return c ? d & 2 ? Zc(b) : new b : void 0;
        var e = c = (0,
        _.ec)(a);
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && Sb(a, e);
        return new b(a)
    }
    ;
    Zc = function(a) {
        var b = a[ad];
        if (b)
            return b;
        b = new a;
        Qb(b.D);
        return a[ad] = b
    }
    ;
    bd = function(a, b, c) {
        if (b)
            return tc(a);
        var d;
        return null != (d = uc(a)) ? d : c ? !1 : void 0
    }
    ;
    cd = function(a, b, c) {
        if (b)
            return _.Vc(a);
        var d;
        return null != (d = Xc(a)) ? d : c ? "" : void 0
    }
    ;
    ed = function(a, b) {
        dd = b;
        a = new a(b);
        dd = void 0;
        return a
    }
    ;
    hd = function(a) {
        switch (typeof a) {
        case "boolean":
            return fd || (fd = [0, void 0, !0]);
        case "number":
            return 0 < a ? void 0 : 0 === a ? gd || (gd = [0, void 0]) : [-a, void 0];
        case "string":
            return [0, a];
        case "object":
            return a
        }
    }
    ;
    _.C = function(a, b, c) {
        null == a && (a = dd);
        dd = void 0;
        if (null == a) {
            var d = 96;
            c ? (a = [c],
            d |= 512) : a = [];
            b && (d = d & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a))
                throw Error("narr");
            d = (0,
            _.ec)(a);
            if (d & 2048)
                throw Error("farr");
            if (d & 64)
                return a;
            d |= 64;
            if (c && (d |= 512,
            c !== a[0]))
                throw Error("mid");
            a: {
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1;
                    if ($b(c[f])) {
                        d |= 256;
                        b = f - (+!!(d & 512) - 1);
                        if (1024 <= b)
                            throw Error("pvtlmt");
                        d = d & -16760833 | (b & 1023) << 14;
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, e - (+!!(d & 512) - 1));
                    if (1024 < b)
                        throw Error("spvt");
                    d = d & -16760833 | (b & 1023) << 14
                }
            }
        }
        Sb(a, d);
        return a
    }
    ;
    id = function(a) {
        return a
    }
    ;
    kd = function(a, b, c, d, e, f) {
        a = $c(a, d, c, f);
        e && (a = jd(a));
        return a
    }
    ;
    ld = function(a) {
        return a
    }
    ;
    md = function(a) {
        return [a, this.get(a)]
    }
    ;
    rd = function() {
        return od || (od = new pd(Qb([]),void 0,void 0,void 0,qd))
    }
    ;
    td = function(a, b) {
        return sd(b)
    }
    ;
    sd = function(a) {
        switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a)
                if (Array.isArray(a)) {
                    if (gc(a, void 0, 0))
                        return
                } else {
                    if (yb(a))
                        return ub(a);
                    if (a instanceof ac)
                        return ud(a);
                    if (a instanceof pd)
                        return vd(a)
                }
        }
        return a
    }
    ;
    wd = function(a, b, c) {
        a = Mb(a);
        var d = a.length
          , e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++)
            a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (var f in e)
                Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }
    ;
    yd = function(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a))
                a = gc(a, void 0, 0) ? void 0 : e && (0,
                _.ec)(a) & 2 ? a : xd(a, b, c, void 0 !== d, e);
            else if ($b(a)) {
                var f = {}, h;
                for (h in a)
                    Object.prototype.hasOwnProperty.call(a, h) && (f[h] = yd(a[h], b, c, d, e));
                a = f
            } else
                a = b(a, d);
            return a
        }
    }
    ;
    xd = function(a, b, c, d, e) {
        var f = d || c ? (0,
        _.ec)(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = Mb(a);
        for (var h = 0; h < a.length; h++)
            a[h] = yd(a[h], b, c, d, e);
        c && c(f, a);
        return a
    }
    ;
    Ad = function(a) {
        return yd(a, zd, void 0, void 0, !1)
    }
    ;
    zd = function(a) {
        return a.bh === Yc ? a.toJSON() : a instanceof pd ? vd(a, Ad) : sd(a)
    }
    ;
    Bd = function(a, b, c) {
        c = void 0 === c ? Vb : c;
        if (null != a) {
            if (xb && a instanceof Uint8Array)
                return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = (0,
                _.ec)(a);
                d & 2 || (b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16))),
                a = b ? Sb(a, (d | 34) & -12293) : xd(a, Bd, d & 4 ? Vb : c, !0, !0));
                return a
            }
            a.bh === Yc ? (c = a.D,
            d = (0,
            _.Cd)(c),
            a = d & 2 ? a : ed(a.constructor, Dd(c, d, !0))) : a instanceof pd && !(a.ae & 2) && (c = Qb(Ed(a, Bd)),
            a = new pd(c,a.Zf,a.ue,a.Vh));
            return a
        }
    }
    ;
    _.Fd = function(a) {
        var b = a.D;
        return ed(a.constructor, Dd(b, (0,
        _.Cd)(b), !1))
    }
    ;
    Dd = function(a, b, c) {
        var d = c || b & 2 ? Vb : Tb
          , e = !!(b & 32);
        a = wd(a, b, function(f) {
            return Bd(f, e, d)
        });
        Pb(a, 32 | (c ? 2 : 0));
        return a
    }
    ;
    jd = function(a) {
        var b = a.D
          , c = (0,
        _.Cd)(b);
        return c & 2 ? ed(a.constructor, Dd(b, c, !1)) : a
    }
    ;
    _.Gd = function(a) {
        var b = a.D
          , c = (0,
        _.Cd)(b);
        return c & 2 ? a : ed(a.constructor, Dd(b, c, !0))
    }
    ;
    Id = function(a, b, c, d) {
        if (!(4 & b))
            return !0;
        if (null == c)
            return !1;
        !d && 0 === c && (4096 & b || 8192 & b) && 5 > (a.constructor[Hd] = (a.constructor[Hd] | 0) + 1) && nc();
        return 0 === c ? !1 : !(c & b)
    }
    ;
    Jd = function(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(0 > b || b >= a.length || b >= c))
            return a[b]
    }
    ;
    Kd = function(a, b, c, d, e) {
        var f = Wb(b);
        if (c >= f || e) {
            var h = b;
            if (b & 256)
                e = a[a.length - 1];
            else {
                if (null == d)
                    return h;
                e = a[f + (+!!(b & 512) - 1)] = {};
                h |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            h !== b && Sb(a, h);
            return h
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1],
        c in a && delete a[c]);
        return b
    }
    ;
    Qd = function(a, b, c, d) {
        var e = b & 2
          , f = Ld(a, b, c, d);
        Array.isArray(f) || (f = Pd);
        var h = !!(b & 32)
          , k = (0,
        _.ec)(f);
        0 === k && h && !e ? (k |= 33,
        Sb(f, k)) : k & 1 || (k |= 1,
        Sb(f, k));
        if (e)
            k & 2 || Qb(f),
            Object.freeze(f);
        else if (2 & k || 2048 & k)
            f = Mb(f),
            e = 1,
            h && (e |= 32),
            Sb(f, e),
            Kd(a, b, c, f, d);
        return f
    }
    ;
    Wd = function(a, b, c, d, e, f, h) {
        var k = a.D
          , l = (0,
        _.Cd)(k);
        d = 2 & l ? 1 : d;
        f = !!f;
        var m = Rd(k, l, b, e)
          , n = (0,
        _.ec)(m);
        if (Id(a, n, h, f)) {
            if (4 & n || Object.isFrozen(m))
                m = Mb(m),
                n = Sd(n, l),
                l = Kd(k, l, b, m, e);
            for (var p = a = 0; a < m.length; a++) {
                var q = c(m[a]);
                null != q && (m[p++] = q)
            }
            p < a && (m.length = p);
            n = Td(n, l);
            n = Ob(n, 20, !0);
            n = Ob(n, 4096, !1);
            n = Ob(n, 8192, !1);
            h && (n = Ob(n, h, !0));
            Sb(m, n);
            2 & n && Object.freeze(m)
        }
        Ud(n) || (h = n,
        n = (c = 1 === d || 4 === d && !!(32 & n)) ? Ob(n, 2, !0) : Vd(n, l, f),
        n !== h && Sb(m, n),
        c && Object.freeze(m));
        2 === d && Ud(n) && (m = Mb(m),
        n = Sd(n, l),
        n = Vd(n, l, f),
        Sb(m, n),
        Kd(k, l, b, m, e));
        return m
    }
    ;
    Rd = function(a, b, c, d) {
        a = Ld(a, b, c, d);
        return Array.isArray(a) ? a : Pd
    }
    ;
    Td = function(a, b) {
        0 === a && (a = Sd(a, b));
        return a = Ob(a, 1, !0)
    }
    ;
    Ud = function(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }
    ;
    Xd = function(a) {
        return cc(a, !0, !0)
    }
    ;
    Yd = function(a) {
        return cc(a, !0, !1)
    }
    ;
    $d = function(a, b, c, d, e, f) {
        var h = b & 2;
        a: {
            var k = c
              , l = b & 2;
            c = !1;
            if (null == k) {
                if (l) {
                    a = rd();
                    break a
                }
                k = []
            } else if (k.constructor === pd) {
                if (0 == (k.ae & 2) || l) {
                    a = k;
                    break a
                }
                k = Ed(k)
            } else
                Array.isArray(k) ? c = !!((0,
                _.ec)(k) & 2) : k = [];
            if (l) {
                if (!k.length) {
                    a = rd();
                    break a
                }
                c || (c = !0,
                Qb(k))
            } else if (c) {
                c = !1;
                l = Mb(k);
                for (k = 0; k < l.length; k++) {
                    var m = l[k] = Mb(l[k]);
                    Array.isArray(m[1]) && (m[1] = Qb(m[1]))
                }
                k = l
            }
            c || ((0,
            _.ec)(k) & 64 ? (0,
            _.Zd)(k, 32) : 32 & b && Rb(k));
            f = new pd(k,e,cd,f);
            Kd(a, b, d, f, !1);
            a = f
        }
        !h && e && (a.Yk = !0);
        return a
    }
    ;
    ae = function(a, b, c) {
        a = a.D;
        var d = (0,
        _.Cd)(a);
        return $d(a, d, Ld(a, d, b), b, void 0, c)
    }
    ;
    be = function(a, b, c) {
        a = a.D;
        var d = (0,
        _.Cd)(a);
        return $d(a, d, Ld(a, d, b), b, c)
    }
    ;
    _.de = function(a, b, c, d) {
        var e = a.D
          , f = (0,
        _.Cd)(e);
        _.hc(f);
        if (null == c)
            return Kd(e, f, b),
            a;
        var h = (0,
        _.ec)(c)
          , k = h
          , l = !!(2 & h) || Object.isFrozen(c)
          , m = !l && (void 0 === ce || !1);
        if (Id(a, h))
            for (h = 21,
            l && (c = Mb(c),
            k = 0,
            h = Sd(h, f),
            h = Vd(h, f, !0)),
            l = 0; l < c.length; l++)
                c[l] = d(c[l]);
        m && (c = Mb(c),
        k = 0,
        h = Sd(h, f),
        h = Vd(h, f, !0));
        h !== k && Sb(c, h);
        Kd(e, f, b, c);
        return a
    }
    ;
    _.ee = function(a, b, c, d) {
        var e = a.D
          , f = (0,
        _.Cd)(e);
        _.hc(f);
        Kd(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    }
    ;
    _.fe = function(a, b, c, d) {
        var e = a.D
          , f = (0,
        _.ec)(e);
        _.hc((0,
        _.Cd)(a.D));
        b = Qd(e, f, b, !1);
        e = (0,
        _.ec)(b);
        e = !!(4 & e) && !!(4096 & e);
        if (Array.isArray(d))
            for (f = 0; f < d.length; f++)
                b.push(c(d[f], e));
        else
            for (d = _.y(d),
            f = d.next(); !f.done; f = d.next())
                b.push(c(f.value, e));
        return a
    }
    ;
    _.ge = function(a, b, c, d) {
        var e = a.D
          , f = (0,
        _.Cd)(e);
        _.hc(f);
        b = Qd(e, f, b);
        e = (0,
        _.ec)(b);
        d = c(d, !!(4 & e) && !!(4096 & e));
        b.push(d);
        return a
    }
    ;
    he = function(a, b, c) {
        for (var d = 0, e = 0; e < c.length; e++) {
            var f = c[e];
            null != Ld(a, b, f) && (0 !== d && (b = Kd(a, b, d)),
            d = f)
        }
        return d
    }
    ;
    ie = function(a, b, c, d) {
        a = a.D;
        var e = (0,
        _.Cd)(a)
          , f = Ld(a, e, c, d);
        b = $c(f, b, !1, e);
        b !== f && null != b && Kd(a, e, c, b, d);
        return b
    }
    ;
    _.je = function(a, b, c, d, e, f, h) {
        var k = !!(2 & b)
          , l = k ? 1 : 2;
        f = !!f;
        h && (h = !k);
        k = Rd(a, b, d, e);
        var m = (0,
        _.ec)(k)
          , n = !!(4 & m);
        if (!n) {
            m = Td(m, b);
            var p = k
              , q = b
              , t = !!(2 & m);
            t && (q = Ob(q, 2, !0));
            for (var w = !t, v = !0, A = 0, z = 0; A < p.length; A++) {
                var D = $c(p[A], c, !1, q);
                if (D instanceof c) {
                    if (!t) {
                        var E = !!((0,
                        _.ec)(D.D) & 2);
                        w && (w = !E);
                        v && (v = E)
                    }
                    p[z++] = D
                }
            }
            z < A && (p.length = z);
            m = Ob(m, 4, !0);
            m = Ob(m, 16, v);
            m = Ob(m, 8, w);
            Sb(p, m);
            t && Object.freeze(p)
        }
        if (h && !(8 & m || !k.length && (1 === l || 4 === l && 32 & m))) {
            Ud(m) && (k = Mb(k),
            m = Sd(m, b),
            b = Kd(a, b, d, k, e));
            c = k;
            h = m;
            for (p = 0; p < c.length; p++)
                m = c[p],
                q = jd(m),
                m !== q && (c[p] = q);
            h = Ob(h, 8, !0);
            h = Ob(h, 16, !c.length);
            Sb(c, h);
            m = h
        }
        Ud(m) || (c = m,
        m = (h = 1 === l || 4 === l && !!(32 & m)) ? Ob(m, !k.length || 16 & m && (!n || 32 & m) ? 2 : 2048, !0) : Vd(m, b, f),
        m !== c && Sb(k, m),
        h && Object.freeze(k));
        2 === l && Ud(m) && (k = Mb(k),
        m = Sd(m, b),
        m = Vd(m, b, f),
        Sb(k, m),
        Kd(a, b, d, k, e));
        return k
    }
    ;
    Sd = function(a, b) {
        a = Ob(a, 2, !!(2 & b));
        a = Ob(a, 32, !0);
        return a = Ob(a, 2048, !1)
    }
    ;
    Vd = function(a, b, c) {
        32 & b && c || (a = Ob(a, 32, !1));
        return a
    }
    ;
    ke = function(a, b, c, d) {
        a = a.D;
        var e = (0,
        _.Cd)(a);
        _.hc(e);
        b = _.je(a, e, c, b, void 0, !0);
        c = null != d ? d : new c;
        b.push(c);
        (0,
        _.ec)(c.D) & 2 ? (0,
        _.Zd)(b, 8) : (0,
        _.Zd)(b, 16);
        return c
    }
    ;
    le = function(a) {
        return Tc(a, !0)
    }
    ;
    _.me = function(a, b) {
        return null != a ? a : b
    }
    ;
    oe = function(a, b, c) {
        var d = ne ? void 0 : a.constructor.ca;
        var e = (0,
        _.Cd)(c ? a.D : b);
        a = b.length;
        if (!a)
            return b;
        var f;
        if ($b(c = b[a - 1])) {
            a: {
                var h = c;
                var k = {}, l = !1, m;
                for (m in h)
                    if (Object.prototype.hasOwnProperty.call(h, m)) {
                        var n = h[m];
                        if (Array.isArray(n)) {
                            var p = n;
                            if (gc(n, d, +m) || Zb(n) && 0 === n.size)
                                n = null;
                            n != p && (l = !0)
                        }
                        null != n ? k[m] = n : l = !0
                    }
                if (l) {
                    for (var q in k) {
                        h = k;
                        break a
                    }
                    h = null
                }
            }
            h != c && (f = !0);
            a--
        }
        for (m = +!!(e & 512) - 1; 0 < a; a--) {
            q = a - 1;
            c = b[q];
            q -= m;
            if (!(null == c || gc(c, d, q) || Zb(c) && 0 === c.size))
                break;
            var t = !0
        }
        if (!f && !t)
            return b;
        b = Array.prototype.slice.call(b, 0, a);
        h && b.push(h);
        return b
    }
    ;
    pe = function(a, b) {
        if (null == b)
            return new a;
        if (!Array.isArray(b))
            throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b))
            throw Error("arrays passed to jspb constructors must be mutable");
        Pb(b, 128);
        return ed(a, Rb(b))
    }
    ;
    qe = function(a, b) {
        if (Array.isArray(b)) {
            var c = (0,
            _.ec)(b);
            if (c & 4)
                return b;
            for (var d = 0, e = 0; d < b.length; d++) {
                var f = a(b[d]);
                null != f && (b[e++] = f)
            }
            e < d && (b.length = e);
            Sb(b, (c | 5) & -12289);
            c & 2 && Object.freeze(b);
            return b
        }
    }
    ;
    re = function(a, b, c) {
        a[b] = c
    }
    ;
    ve = function(a) {
        var b = a[se];
        if (!b) {
            var c = te(a);
            b = function(d, e) {
                return ue(d, e, c)
            }
            ;
            a[se] = b
        }
        return b
    }
    ;
    we = function(a) {
        return a.g
    }
    ;
    Be = function(a, b) {
        var c, d, e = a.g;
        return function(f, h, k) {
            return e(f, h, k, d || (d = te(b).g), c || (c = ve(b)))
        }
    }
    ;
    te = function(a) {
        var b = a[Ce];
        if (b)
            return b;
        b = a[Ce] = {};
        var c = we
          , d = Be;
        var e = void 0 === e ? re : e;
        b.g = hd(a[0]);
        var f = 0
          , h = a[++f];
        h && h.constructor === Object && (b.Il = h,
        h = a[++f],
        "function" === typeof h && (b.l = h,
        b.A = a[++f],
        h = a[++f]));
        for (var k = {}; Array.isArray(h) && "number" === typeof h[0] && 0 < h[0]; ) {
            for (var l = 0; l < h.length; l++)
                k[h[l]] = h;
            h = a[++f]
        }
        for (l = 1; void 0 !== h; ) {
            "number" === typeof h && (l += h,
            h = a[++f]);
            var m = void 0;
            if (h instanceof De)
                var n = h;
            else
                n = Ee,
                f--;
            if (n.wk) {
                h = a[++f];
                m = a;
                var p = f;
                "function" == typeof h && (h = h(),
                m[p] = h);
                m = h
            }
            h = a[++f];
            p = l + 1;
            "number" === typeof h && 0 > h && (p -= h,
            h = a[++f]);
            for (; l < p; l++) {
                var q = k[l];
                e(b, l, m ? d(n, m, q) : c(n, q))
            }
        }
        Fe in a && Ge in a && Ce in a && (a.length = 0);
        return b
    }
    ;
    Ie = function(a, b) {
        var c = a[b];
        if (c)
            return c;
        if (c = a.Il)
            if (c = c[b]) {
                c = Array.isArray(c) ? c[0]instanceof De ? c : [He, c] : [c, void 0];
                var d = c[0].g;
                if (c = c[1]) {
                    var e = ve(c)
                      , f = te(c).g;
                    c = (c = a.A) ? c(f, e) : function(h, k, l) {
                        return d(h, k, l, f, e)
                    }
                } else
                    c = d;
                return a[b] = c
            }
    }
    ;
    ue = function(a, b, c) {
        for (var d = (0,
        _.Cd)(a), e = +!!(d & 512) - 1, f = a.length, h = f + (d & 256 ? -1 : 0), k = d & 512 ? 1 : 0; k < h; k++) {
            var l = a[k];
            if (null != l) {
                var m = k - e
                  , n = Ie(c, m);
                n && n(b, l, m)
            }
        }
        if (d & 256) {
            a = a[f - 1];
            for (var p in a)
                Object.prototype.hasOwnProperty.call(a, p) && (d = +p,
                _.x(Number, "isNaN").call(Number, d) || (e = a[p],
                null != e && (f = Ie(c, d)) && f(b, e, d)))
        }
    }
    ;
    Je = function(a) {
        return new De(a,!1)
    }
    ;
    Ne = function(a, b, c) {
        a: if (null != b) {
            if (_.wc(b)) {
                if ("string" === typeof b) {
                    b = Fc(b);
                    break a
                }
                if ("number" === typeof b) {
                    b = Hc(b);
                    break a
                }
            }
            b = void 0
        }
        null != b && ("string" === typeof b && Ke(b),
        null != b && (Le(a, c, 0),
        "number" === typeof b ? (a = a.g,
        Gb(b),
        Me(a, Eb, Fb)) : (c = Ke(b),
        Me(a.g, c.A, c.g))))
    }
    ;
    Qe = function(a, b, c, d, e) {
        b = b instanceof _.F ? b.D : Array.isArray(b) ? _.C(b, d[0], d[1]) : void 0;
        null != b && (c = Oe(a, c),
        e(b, a),
        Pe(a, c))
    }
    ;
    Se = function(a) {
        var b = _.Re();
        if (!a)
            throw Error(b && b() || String(a));
    }
    ;
    Te = function(a) {
        a.up = !0;
        return a
    }
    ;
    _.Re = function() {
        var a = Ue;
        Ue = void 0;
        return a
    }
    ;
    Xe = function(a) {
        return function() {
            var b = new Ve;
            ue(this.D, b, te(a));
            We(b, b.g.end());
            for (var c = new Uint8Array(b.A), d = b.l, e = d.length, f = 0, h = 0; h < e; h++) {
                var k = d[h];
                c.set(k, f);
                f += k.length
            }
            b.l = [c];
            return c
        }
    }
    ;
    Ye = function(a) {
        return function(b) {
            if (null == b || "" == b)
                b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b))
                    throw Error("dnarr");
                b = ed(a, Rb(b))
            }
            return b
        }
    }
    ;
    Ze = function(a) {
        var b = a.split(/\?|#/)
          , c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            ib: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    }
    ;
    _.af = function(a) {
        var b = _.za.apply(1, arguments);
        if (0 === b.length)
            return $e(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return $e(c)
    }
    ;
    _.bf = function(a, b) {
        a = Ze(_.jb(a).toString());
        var c = a.ib
          , d = c.length ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var h = 0; h < e.length; h++) {
                var k = e[h];
                null !== k && void 0 !== k && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(k)),
                d = "&")
            }
        });
        return $e(a.path + c + a.hash)
    }
    ;
    df = function(a) {
        return a ? a.passive && cf() ? a : a.capture || !1 : !1
    }
    ;
    ff = function(a) {
        var b = window
          , c = !0;
        c = void 0 === c ? !1 : c;
        new _.B.Promise(function(d, e) {
            function f() {
                h.onload = null;
                h.onerror = null;
                var k;
                null == (k = h.parentElement) || k.removeChild(h)
            }
            var h = b.document.createElement("script");
            h.onload = function() {
                f();
                d()
            }
            ;
            h.onerror = function() {
                f();
                e(void 0)
            }
            ;
            h.type = "text/javascript";
            kb(h, a);
            c && "complete" !== b.document.readyState ? _.ef(b, "load", function() {
                b.document.body.appendChild(h)
            }) : b.document.body.appendChild(h)
        }
        )
    }
    ;
    kf = function(a) {
        var b, c, d, e, f, h;
        return _.gf(function(k) {
            switch (k.g) {
            case 1:
                return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.g + ("&tv=" + a.A + "&st=") + a.Rd,
                c = void 0,
                k.l = 2,
                k.yield(hf(b), 4);
            case 4:
                c = k.A;
                k.g = 3;
                k.l = 0;
                break;
            case 2:
                jf(k);
            case 3:
                if (!c)
                    return k.return(void 0);
                d = a.te || c.sodar_query_id;
                e = void 0 !== c.rc_enable && a.l ? c.rc_enable : "n";
                f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                h = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                return d && c.bg_hash_basename && c.bg_binary ? k.return({
                    context: a.j,
                    Sk: c.bg_hash_basename,
                    Rk: c.bg_binary,
                    um: a.g + "_" + a.A,
                    te: d,
                    Rd: a.Rd,
                    zf: e,
                    Vf: f,
                    yf: h
                }) : k.return(void 0)
            }
        })
    }
    ;
    of = function(a) {
        var b;
        _.gf(function(c) {
            if (1 == c.g)
                return c.yield(kf(a), 2);
            if (b = c.A) {
                var d = b
                  , e = "sodar2";
                e = void 0 === e ? "sodar2" : e;
                var f = window
                  , h = f.GoogleGcLKhOms;
                h && "function" === typeof h.push || (h = f.GoogleGcLKhOms = []);
                var k = {};
                h.push((k._ctx_ = d.context,
                k._bgv_ = d.Sk,
                k._bgp_ = d.Rk,
                k._li_ = d.um,
                k._jk_ = d.te,
                k._st_ = d.Rd,
                k._rc_ = d.zf,
                k._dl_ = d.Vf,
                k._g2_ = d.yf,
                k));
                if (d = f.GoogleDX5YKUSk)
                    f.GoogleDX5YKUSk = void 0,
                    d[1]();
                e = _.af(nf, e);
                ff(e)
            }
            return c.return(b)
        })
    }
    ;
    pf = function(a) {
        switch (a) {
        case 1:
            return "gda";
        case 2:
            return "gpt";
        case 3:
            return "ima";
        case 4:
            return "pal";
        case 5:
            return "xfad";
        case 6:
            return "dv3n";
        case 7:
            return "spa";
        default:
            return "unk"
        }
    }
    ;
    qf = function(a) {
        a = void 0 === a ? _.ca : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b)
            try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    }
    ;
    sf = function(a) {
        return rf(0 !== a.length % 4 ? a + "A" : a).map(function(b) {
            return (_.H = b.toString(2),
            _.x(_.H, "padStart")).call(_.H, 8, "0")
        }).join("")
    }
    ;
    tf = function(a) {
        if (!/^[0-1]+$/.test(a))
            throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    }
    ;
    uf = function(a) {
        if (!/^[0-1]+$/.test(a))
            throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++)
            b.length <= d && b.push(b[d - 1] + b[d - 2]),
            c += parseInt(a[d], 2) * b[d];
        return c
    }
    ;
    vf = function(a, b) {
        a = sf(a);
        return a.length < b ? _.x(a, "padEnd").call(a, b, "0") : a
    }
    ;
    wf = function(a, b) {
        var c = a.indexOf("11");
        if (-1 === c)
            throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    }
    ;
    _.xf = function(a) {
        a = void 0 === a ? _.ca : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }
    ;
    _.yf = function(a) {
        a = void 0 === a ? _.ca : a;
        return (a = a.performance) && a.now ? a.now() : null
    }
    ;
    zf = function(a, b) {
        b = void 0 === b ? _.ca : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    }
    ;
    _.Af = function(a) {
        a = void 0 === a ? _.ca : a;
        var b = Math.min(zf("domLoading", a) || Infinity, zf("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(zf("responseEnd", a), zf("navigationStart", a)) : b
    }
    ;
    Df = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = _.Bf("IMG", a.document);
        if (c || d) {
            var h = function(k) {
                c && c(k);
                d && Ha(a.google_image_requests, f);
                _.Cf(f, "load", h);
                _.Cf(f, "error", h)
            };
            _.ef(f, "load", h);
            _.ef(f, "error", h)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    ;
    Ff = function(a, b) {
        try {
            var c = function(d) {
                var e = {};
                return [(e[d.Wb] = d.Sb,
                e)]
            };
            return JSON.stringify([a.filter(function(d) {
                return d.Jb
            }).map(c), b.toJSON(), a.filter(function(d) {
                return !d.Jb
            }).map(c)])
        } catch (d) {
            return Ef(d, b),
            ""
        }
    }
    ;
    Ef = function(a, b) {
        try {
            Gf({
                m: _.Hf(a instanceof Error ? a : Error(String(a))),
                b: _.If(b, 1, 0) || null,
                v: _.u(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }
    ;
    Jf = function(a, b, c, d, e, f) {
        try {
            var h = a.g
              , k = _.Bf("SCRIPT", h);
            k.async = !0;
            kb(k, b);
            h.head.appendChild(k);
            k.addEventListener("load", function() {
                e();
                d && h.head.removeChild(k)
            });
            k.addEventListener("error", function() {
                0 < c ? Jf(a, b, c - 1, d, e, f) : (d && h.head.removeChild(k),
                f())
            })
        } catch (l) {
            f()
        }
    }
    ;
    Lf = function(a, b, c, d) {
        c = void 0 === c ? function() {}
        : c;
        d = void 0 === d ? function() {}
        : d;
        Jf(Kf(a), b, 0, !1, c, d)
    }
    ;
    Mf = function(a) {
        return a[_.x(_.B.Symbol, "iterator")]()
    }
    ;
    Pf = function(a) {
        var b = Nf(Of(a.location.href));
        a = b.get("fcconsent");
        b = b.get("fc");
        return "alwaysshow" === b ? b : "alwaysshow" === a ? a : null
    }
    ;
    Qf = function(a) {
        var b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = Nf(Of(a.location.href)).get("fctype")) && -1 !== b.indexOf(a) ? a : null
    }
    ;
    Sf = function(a) {
        var b = Of(a)
          , c = {
            search: "",
            hash: ""
        };
        a = {};
        b && (a.protocol = b.protocol,
        a.username = b.username,
        a.password = b.password,
        a.hostname = b.hostname,
        a.port = b.port,
        a.pathname = b.pathname,
        a.search = b.search,
        a.hash = b.hash);
        _.x(Object, "assign").call(Object, a, c);
        if (a.port && ":" === a.port[0])
            throw Error("port should not start with ':'");
        a.hash && "#" != a.hash[0] && (a.hash = "#" + a.hash);
        c.search ? "?" != c.search[0] && (a.search = "?" + c.search) : c.searchParams && (a.search = "?" + Rf(c.searchParams),
        a.searchParams = void 0);
        b = "";
        a.protocol && (b += a.protocol + "//");
        c = a.username;
        var d = a.password;
        b = b + (c && d ? c + ":" + d + "@" : c ? c + "@" : d ? ":" + d + "@" : "") + (a.hostname || "");
        a.port && (b += ":" + a.port);
        b += a.pathname || "";
        b += a.search || "";
        b += a.hash || "";
        a = Of(b).toString();
        "/" === a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));
        return 1E3 >= a.toString().length ? a : null
    }
    ;
    Tf = function(a) {
        var b = a.document
          , c = function() {
            if (!a.frames.googlefcPresent)
                if (b.body) {
                    var d = _.Bf("IFRAME", b);
                    d.style.display = "none";
                    d.style.width = "0px";
                    d.style.height = "0px";
                    d.style.border = "none";
                    d.style.zIndex = "-1000";
                    d.style.left = "-1000px";
                    d.style.top = "-1000px";
                    d.name = "googlefcPresent";
                    b.body.appendChild(d)
                } else
                    a.setTimeout(c, 5)
        };
        c()
    }
    ;
    Uf = function(a) {
        a && "function" == typeof a.ya && a.ya()
    }
    ;
    Xf = function(a) {
        a = Vf(a.data.__fciReturn);
        return {
            payload: a,
            xh: _.Wf(a, 1)
        }
    }
    ;
    $f = function() {
        var a = ea();
        return a ? _.Yf("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function(b) {
            return _.Zf(a, b)
        }) || _.Zf(a, "OMI/") && !_.Zf(a, "XiaoMi/") ? !0 : _.Zf(a, "Presto") && _.Zf(a, "Linux") && !_.Zf(a, "X11") && !_.Zf(a, "Android") && !_.Zf(a, "Mobi") : !1
    }
    ;
    ag = function() {
        return Te(function(a) {
            return 0 === a
        })
    }
    ;
    cg = function() {
        var a = bg;
        return Te(function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c))
                    return !0;
            return !1
        })
    }
    ;
    lg = function() {
        var a = dg;
        return Te(function(b) {
            return b instanceof a
        })
    }
    ;
    ng = function(a) {
        return Te(function(b) {
            if (!mg(b))
                return !1;
            for (var c = _.y(_.x(Object, "entries").call(Object, a)), d = c.next(); !d.done; d = c.next()) {
                var e = _.y(d.value);
                d = e.next().value;
                e = e.next().value;
                if (!(d in b)) {
                    if (!0 === e.om)
                        continue;
                    return !1
                }
                if (!e(b[d]))
                    return !1
            }
            return !0
        })
    }
    ;
    pg = function(a) {
        return og(Te(function(b, c) {
            return void 0 === b ? !0 : a(b, c)
        }))
    }
    ;
    og = function(a) {
        a.om = !0;
        return a
    }
    ;
    qg = function() {
        return Te(function(a) {
            return Array.isArray(a)
        })
    }
    ;
    tg = function() {
        return Te(function(a) {
            return rg(a) ? a.every(function(b) {
                return sg(b)
            }) : !1
        })
    }
    ;
    ug = function(a) {
        var b = 1, c;
        if (void 0 !== a && "" !== a)
            for (b = 0,
            c = a.length - 1; 0 <= c; c--) {
                var d = a.charCodeAt(c);
                b = (b << 6 & 268435455) + d + (d << 14);
                d = b & 266338304;
                b = 0 !== d ? b ^ d >> 21 : b
            }
        return b
    }
    ;
    vg = function(a, b) {
        if (!a || "none" === a)
            return 1;
        a = String(a);
        "auto" === a && (a = b,
        "www." === a.substring(0, 4) && (a = a.substring(4, a.length)));
        return ug(a.toLowerCase())
    }
    ;
    wg = function(a) {
        return !!a && a.top === a
    }
    ;
    Ag = function(a) {
        a = void 0 === a ? _.ca : a;
        var b = new xg;
        "SVGElement"in a && "createElementNS"in a.document && b.set(0);
        var c = yg();
        c["allow-top-navigation-by-user-activation"] && b.set(1);
        c["allow-popups-to-escape-sandbox"] && b.set(2);
        a.crypto && a.crypto.subtle && b.set(3);
        "TextDecoder"in a && "TextEncoder"in a && b.set(4);
        return zg(b)
    }
    ;
    Bg = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            xh: b.__uspapiReturn.callId
        }
    }
    ;
    Dg = function(a, b) {
        b = void 0 === b ? window : b;
        if (Cg(a))
            try {
                return b.localStorage
            } catch (c) {}
        return null
    }
    ;
    Fg = function(a, b, c) {
        return Cg(b) ? Eg(a, c) : null
    }
    ;
    Jg = function(a) {
        return Gg ? Gg : "null" === a.origin ? Gg = !1 : Gg = Hg(new Ig(a.document))
    }
    ;
    Eg = function(a, b) {
        b = "null" !== b.origin ? b.document.cookie : null;
        return null === b ? null : (new Ig({
            cookie: b
        })).get(a) || ""
    }
    ;
    Kg = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            xh: b.__gppReturn.callId
        }
    }
    ;
    Lg = function(a) {
        return !a || 1 === a.length && -1 === a[0]
    }
    ;
    Mg = function(a, b, c) {
        return b[a] || c
    }
    ;
    Pg = function(a) {
        _.Ng(Og).l(a)
    }
    ;
    Qg = function() {
        return _.Ng(Og).j()
    }
    ;
    Rg = function(a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(_.H = c.allowedFeatures(),
        _.x(_.H, "includes")).call(_.H, a))
    }
    ;
    Sg = function(a) {
        a = void 0 === a ? navigator : a;
        try {
            var b, c;
            return !!(null == (b = a.protectedAudience) ? 0 : null == (c = b.queryFeatureSupport) ? 0 : c.call(b, "deprecatedRenderURLReplacements"))
        } catch (d) {
            return !1
        }
    }
    ;
    Tg = function(a, b, c) {
        return !!(a && "runAdAuction"in b && b.runAdAuction instanceof Function && Rg("run-ad-auction", c))
    }
    ;
    Ug = function(a, b) {
        return !!(a && "browsingTopics"in b && b.browsingTopics instanceof Function && Rg("browsing-topics", b))
    }
    ;
    Vg = function(a, b, c) {
        c = void 0 === c ? b.document : c;
        return !!(a && "sharedStorage"in b && b.sharedStorage && Rg("shared-storage", c))
    }
    ;
    Yg = function(a) {
        a = void 0 === a ? _.Wg() : a;
        return function(b) {
            return _.Xg(b + " + " + a) % 1E3
        }
    }
    ;
    _.I = function(a) {
        return _.Ng(Zg).A(a.g, a.defaultValue)
    }
    ;
    _.$g = function(a) {
        return _.Ng(Zg).l(a.g, a.defaultValue)
    }
    ;
    ah = function(a) {
        return _.Ng(Zg).j(a.g, a.defaultValue)
    }
    ;
    bh = function(a) {
        return _.Ng(Zg).K(a.g, a.defaultValue)
    }
    ;
    lh = function(a) {
        _.Ng(ch).g(a)
    }
    ;
    ph = function() {
        if (void 0 === b) {
            var a = void 0 === a ? _.ca : a;
            var b = a.ggeac || (a.ggeac = {})
        }
        a = b;
        mh(_.Ng(Og), a);
        nh(b);
        oh(_.Ng(ch), b);
        _.Ng(Zg).g()
    }
    ;
    nh = function(a) {
        var b = _.Ng(Zg);
        b.A = function(c, d) {
            return Mg(5, a, function() {
                return !1
            })(c, d, 2)
        }
        ;
        b.l = function(c, d) {
            return Mg(6, a, function() {
                return 0
            })(c, d, 2)
        }
        ;
        b.j = function(c, d) {
            return Mg(7, a, function() {
                return ""
            })(c, d, 2)
        }
        ;
        b.K = function(c, d) {
            return Mg(8, a, function() {
                return []
            })(c, d, 2)
        }
        ;
        b.F = function(c, d) {
            return Mg(17, a, function() {
                return []
            })(c, d, 2)
        }
        ;
        b.g = function() {
            Mg(15, a, function() {})(2)
        }
    }
    ;
    sh = function(a) {
        try {
            var b, c, d = null == (b = a.performance) ? void 0 : null == (c = b.getEntriesByType("navigation")) ? void 0 : c[0];
            if (null == d ? 0 : d.type) {
                var e;
                return null != (e = qh.get(d.type)) ? e : null
            }
        } catch (l) {}
        var f, h, k;
        return null != (k = rh.get(null == (f = a.performance) ? void 0 : null == (h = f.navigation) ? void 0 : h.type)) ? k : null
    }
    ;
    wh = function(a, b, c, d) {
        var e = new _.th
          , f = ""
          , h = function(l) {
            try {
                var m = "object" === typeof l.data ? l.data : JSON.parse(l.data);
                f === m.paw_id && (_.Cf(a, "message", h),
                m.error ? e.reject(Error(m.error)) : e.resolve(d(m)))
            } catch (n) {}
        }
          , k = uh(a);
        return k ? (_.ef(a, "message", h),
        f = c(k),
        e.promise) : (c = vh(a)) ? (f = String(Math.floor(2147483647 * _.Wg())),
        _.ef(a, "message", h),
        b(c, f),
        e.promise) : null
    }
    ;
    xh = function(a) {
        return wh(a, function(b, c) {
            var d, e;
            return void (null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    }
    ;
    yh = function(a) {
        return wh(a, function(b, c) {
            var d, e;
            return void (null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b
        })
    }
    ;
    zh = function(a) {
        return !!uh(a) || !!vh(a)
    }
    ;
    uh = function(a) {
        var b;
        if ("function" === typeof (null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo))
            return a.gmaSdk
    }
    ;
    vh = function(a) {
        var b, c, d, e, f, h;
        if ("function" === typeof (null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof (null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (h = f.getGmaSig) ? void 0 : h.postMessage))
            return a.webkit.messageHandlers
    }
    ;
    Ah = function(a) {
        var b, c;
        return null != (c = (_.H = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }),
        _.x(_.H, "find")).call(_.H, function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    }
    ;
    Bh = function(a, b) {
        var c, d;
        return null != (d = null != (c = null == b ? void 0 : b.get(a)) ? c : null == b ? void 0 : b.get(_.Xg(a))) ? d : 0
    }
    ;
    Lh = function(a, b, c, d, e, f) {
        var h = e.getBidResponsesForAdUnitCode;
        if (h) {
            var k, l, m, n, p, q = null != (p = null == (k = h(null != (m = b.td) ? m : "")) ? void 0 : k.bids) ? p : null == (l = h(null != (n = b.adUnitCode) ? n : "")) ? void 0 : l.bids;
            if (null != q && q.length && (k = q.filter(function(v) {
                var A = v.auctionId;
                var z = v.adId;
                return A !== c && _.x(Object, "values").call(Object, d).some(function(D) {
                    return _.x(D, "includes").call(D, z)
                })
            }),
            k.length)) {
                var t, w;
                h = null == (t = e.adUnits) ? void 0 : null == (w = _.x(t, "find").call(t, function(v) {
                    v = v.code;
                    return v === b.td || v === b.adUnitCode
                })) ? void 0 : w.mediaTypes;
                t = _.y(k);
                for (w = t.next(); !w.done; w = t.next())
                    w = w.value,
                    k = Ch(w, d, h, f),
                    k = Dh(a, Eh(_.Fh(Gh(Hh(new Ih, w.bidder), 1), 6, !0), k)),
                    Jh(w.bidder, e, k),
                    "number" === typeof w.timeToRespond && _.Kh(k, 2, Math.round(w.timeToRespond))
            }
        }
    }
    ;
    Jh = function(a, b, c) {
        for (var d = []; a && !_.x(d, "includes").call(d, a); ) {
            d.unshift(a);
            var e = void 0
              , f = void 0;
            a = null == (e = b) ? void 0 : null == (f = e.aliasRegistry) ? void 0 : f[a]
        }
        _.de(c, 10, d, _.Vc)
    }
    ;
    Oh = function(a, b, c) {
        null != _.zc(_.Mh(a, 3)) || (c === b.adUnitCode ? _.Nh(a, 3, 1) : c === b.td && _.Nh(a, 3, 2))
    }
    ;
    Wh = function(a, b, c, d, e, f, h) {
        f = f.get(null != h ? h : function() {
            return null
        }
        );
        1 !== (null == f ? void 0 : _.If(f, 1, 0)) && _.Ph(b, 5, f);
        Qh(a, Rh, 5) || (f ? 1 === _.If(f, 1, 0) ? Sh(a, f) : Sh(a, Th(Uh(Vh(new Rh, e), 1), Bh(c, d))) : Sh(a, Uh(Vh(new Rh, e), Bh(c, d) ? 2 : 3)))
    }
    ;
    Ch = function(a, b, c, d) {
        var e = a.cpm
          , f = a.originalCpm
          , h = a.currency
          , k = a.originalCurrency
          , l = a.dealId
          , m = a.adserverTargeting
          , n = a.bidder
          , p = a.adId
          , q = a.mediaType
          , t = a.height
          , w = a.width
          , v = a.meta
          , A = new Xh;
        "number" === typeof e && (_.Kh(A, 2, Math.round(1E6 * e)),
        k && k !== h || (e = Math.round(1E6 * Number(f)),
        isNaN(e) || e === _.Wf(A, 2) || _.Kh(A, 8, e)));
        "string" === typeof h && Yh(A, 3, h);
        (_.H = ["string", "number"],
        _.x(_.H, "includes")).call(_.H, typeof l) && (h = new Zh,
        l = Yh(h, 1, String(l)),
        _.Ph(A, 6, l));
        if ("object" === typeof m)
            for (l = _.y(["", "_" + n]),
            h = l.next(); !h.done; h = l.next()) {
                e = h.value;
                h = [];
                f = _.y(_.x(Object, "entries").call(Object, m));
                for (k = f.next(); !k.done; k = f.next()) {
                    k = _.y(k.value);
                    var z = k.next().value;
                    k = k.next().value;
                    z = (z + e).slice(0, 20);
                    var D = void 0;
                    if (null != (D = b[z]) && D.length)
                        if (b[z][0] === String(k))
                            h.push(z);
                        else {
                            h = [];
                            break
                        }
                }
                e = $h(A, 4, 2);
                _.de(A, 4, e.concat(h), _.Vc)
            }
        switch (q || "banner") {
        case "banner":
            _.Nh(A, 5, 1);
            break;
        case "native":
            _.Nh(A, 5, 2);
            break;
        case "video":
            _.Nh(A, 5, 3);
            b = new ai;
            var E;
            if ("adpod" === (null == c ? void 0 : null == (E = c.video) ? void 0 : E.context)) {
                var G, Q = null == c ? void 0 : null == (G = c.video) ? void 0 : G.adPodDurationSec;
                _.Kh(b, 1, Q)
            } else
                G = null == c ? void 0 : null == (Q = c.video) ? void 0 : Q.maxduration,
                _.Kh(b, 1, G);
            var R;
            if ("number" === typeof (null == c ? void 0 : null == (R = c.video) ? void 0 : R.skip)) {
                var L;
                c = !!(null == c ? 0 : null == (L = c.video) ? 0 : L.skip);
                _.Fh(b, 2, c)
            }
            var X;
            a = null == (X = a.meta) ? void 0 : X.adServerCatId;
            X = Yh(b, 3, a);
            if ("object" !== typeof m)
                m = null;
            else {
                var da, Y;
                a = String(null != (Y = null != (da = m["hb_pb_cat_dur_" + n]) ? da : m.hb_pb_cat_dur) ? Y : "");
                var ja, ka, va, Z;
                da = String(null != (Z = null != (va = null != (ka = null != (ja = m["hb_cache_id_" + n]) ? ja : m["hb_uuid_" + n]) ? ka : m.hb_cache_id) ? va : m.hb_uuid) ? Z : "");
                m = a && da ? a + "_" + da : da ? da : null
            }
            Yh(X, 4, m);
            _.Ph(A, 9, b)
        }
        _.x(Number, "isFinite").call(Number, t) && _.x(Number, "isFinite").call(Number, w) && (m = new bi,
        w = _.ci(m, 1, Math.round(w)),
        t = _.ci(w, 2, Math.round(t)),
        _.Ph(A, 7, t));
        "string" === typeof p && Yh(A, 1, p);
        0 < d && Array.isArray(null == v ? void 0 : v.advertiserDomains) && Yh(A, 10, v.advertiserDomains[0].substring(0, d));
        return A
    }
    ;
    ei = function(a, b) {
        var c = new _.B.Map
          , d = function(l) {
            var m = c.get(l);
            m || (m = {},
            c.set(l, m));
            return m
        }
          , e = [];
        a = _.y(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var h = f.args
              , k = f.eventType;
            f = f.elapsedTime;
            "bidTimeout" === k && e.push.apply(e, _.di(h));
            switch (k) {
            case "bidRequested":
                if (h.auctionId !== b)
                    continue;
                if (!Array.isArray(h.bids))
                    continue;
                h = _.y(h.bids);
                for (k = h.next(); !k.done; k = h.next())
                    if (k = k.value.bidId)
                        d(k).requestTime = f;
                break;
            case "noBid":
                h.auctionId === b && h.bidId && (d(h.bidId).jn = f)
            }
        }
        d = new _.B.Map;
        a = _.y(_.x(c, "entries").call(c));
        for (f = a.next(); !f.done; f = a.next())
            h = _.y(f.value),
            f = h.next().value,
            k = h.next().value,
            h = k.requestTime,
            k = k.jn,
            h && k && d.set(f, {
                latency: k - h,
                kj: !1
            });
        e = _.y(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value,
            a = f.bidId,
            f = f.auctionId,
            a && f === b && (a = d.get(a)))
                a.kj = !0;
        return d
    }
    ;
    oi = function(a, b, c) {
        c = void 0 === c ? {} : c;
        var d, e, f = null != (e = null == (d = c) ? void 0 : d.En) ? e : {}, h, k;
        d = null != (k = null == (h = c) ? void 0 : h.je) ? k : new _.B.Map;
        var l, m;
        h = null != (m = null == (l = c) ? void 0 : l.Wm) ? m : new _.B.Map;
        var n, p;
        l = null != (p = null == (n = c) ? void 0 : n.Pk) ? p : new fi;
        var q, t;
        n = null != (t = null == (q = c) ? void 0 : q.Xl) ? t : 0;
        var w, v;
        q = null != (v = null == (w = c) ? void 0 : w.xm) ? v : 0;
        w = new _.B.Map;
        var A = (0,
        a.getEvents)();
        t = A.filter(function(Fa) {
            var ya = Fa.eventType;
            Fa = Fa.args;
            return "auctionEnd" === ya && Fa.auctionId
        });
        v = new gi;
        var z = function(Fa) {
            return Fa === b.td || Fa === b.adUnitCode
        }, D, E, G, Q = null != (G = hi.get((null != (D = b.td) ? D : "") + (null != (E = b.adUnitCode) ? E : ""))) ? G : 0, R;
        D = null != (R = t.filter(function(Fa) {
            var ya, Xa, ib;
            return Number(null == (ya = Fa.args) ? void 0 : ya.timestamp) > Q && (null == (Xa = Fa.args) ? void 0 : null == (ib = Xa.adUnitCodes) ? void 0 : _.x(ib, "find").call(ib, z))
        })) ? R : [];
        if (!D.length)
            return null;
        var L;
        if (D = null == (L = D.reduce(function(Fa, ya) {
            return Number(ya.args.timestamp) > Number(Fa.args.timestamp) ? ya : Fa
        })) ? void 0 : L.args) {
            R = void 0 === D.bidderRequests ? [] : D.bidderRequests;
            L = void 0 === D.bidsReceived ? [] : D.bidsReceived;
            var X = D.auctionId;
            D = D.timestamp;
            if (X && null != D && R.length) {
                var da, Y;
                hi.set((null != (da = b.td) ? da : "") + (null != (Y = b.adUnitCode) ? Y : ""), D);
                da = ii(v);
                a.version && ji.test(a.version) && Yh(da, 6, a.version);
                var ja, ka, va;
                if (null == (ja = a.getConfig) ? 0 : null == (ka = ja.call(a).cache) ? 0 : null == (va = ka.url) ? 0 : va.length) {
                    var Z, Ja;
                    ki(da, null == (Z = a.getConfig) ? void 0 : null == (Ja = Z.call(a).cache) ? void 0 : Ja.url)
                }
                _.Ph(da, 9, l);
                ja = li(function() {
                    return ei(A, X)
                });
                ka = _.y(R);
                Z = ka.next();
                for (va = {}; !Z.done; va = {
                    bidderCode: void 0,
                    bk: void 0
                },
                Z = ka.next())
                    for (Ja = Z.value,
                    va.bidderCode = Ja.bidderCode,
                    Y = Ja.bids,
                    Z = Ja.timeout,
                    va.bk = Ja.src,
                    Ja = Ja.auctionStart,
                    Y = _.y(Y),
                    l = Y.next(),
                    R = {}; !l.done; R = {
                        Ue: void 0
                    },
                    l = Y.next())
                        t = l.value,
                        R.Ue = t.bidId,
                        G = t.transactionId,
                        l = t.adUnitCode,
                        D = t.getFloor,
                        E = t.mediaTypes,
                        t = t.ortb2Imp,
                        R.Ue && z(l) && (Oh(da, b, l),
                        m = p = void 0,
                        n && !_.mi(da, 11) && "string" === typeof (null == (p = t) ? void 0 : null == (m = p.ext) ? void 0 : m.gpid) && Yh(da, 11, t.ext.gpid.substring(0, n)),
                        G && (_.mi(da, 4) || Yh(da, 4, G),
                        w.has(G) || w.set(G, Ja)),
                        null == ni(da, 8) && _.x(Number, "isFinite").call(Number, Z) && _.ci(da, 8, Z),
                        t = _.x(L, "find").call(L, function(Fa) {
                            return function(ya) {
                                return ya.requestId === Fa.Ue
                            }
                        }(R)),
                        G = Dh(da, function(Fa) {
                            return function() {
                                var ya = Hh(new Ih, Fa.bidderCode);
                                Jh(Fa.bidderCode, a, ya);
                                switch (Fa.bk) {
                                case null:
                                case void 0:
                                case "client":
                                    _.Nh(ya, 7, 1);
                                    break;
                                case "s2s":
                                    _.Nh(ya, 7, 2)
                                }
                                return ya
                            }
                        }(va)()),
                        Wh(da, G, l, d, !!c.he, h, D),
                        t ? (Gh(G, 1),
                        "number" === typeof t.timeToRespond && _.x(Number, "isFinite").call(Number, t.timeToRespond) && _.Kh(G, 2, Math.round(t.timeToRespond)),
                        R = Ch(t, f, E, q),
                        Eh(G, R)) : (R = ja().get(R.Ue)) && !R.kj ? (Gh(G, 2),
                        _.x(Number, "isFinite").call(Number, R.latency) && _.Kh(G, 2, Math.round(R.latency))) : (R = Gh(G, 3),
                        _.x(Number, "isFinite").call(Number, Z) && _.Kh(R, 2, Math.round(Z))));
                var hb;
                (null == (hb = a.getConfig) ? 0 : hb.call(a).useBidCache) && Lh(da, b, X, f, a, q);
                return v
            }
        }
    }
    ;
    pi = function(a, b) {
        var c, d;
        return _.gf(function(e) {
            if (1 == e.g)
                return c = b ? a.filter(function(f) {
                    return !f.mc
                }) : a,
                e.yield(_.B.Promise.all(c.map(function(f) {
                    return f.rg.promise
                })), 2);
            if (a.length === c.length)
                return e.return();
            d = a.filter(function(f) {
                return f.mc
            });
            return e.yield(_.B.Promise.race([_.B.Promise.all(d.map(function(f) {
                return f.rg.promise
            })), new _.B.Promise(function(f) {
                return void setTimeout(f, b)
            }
            )]), 0)
        })
    }
    ;
    qi = function(a, b) {
        return {
            id: a,
            Gg: b,
            uf: void 0
        }
    }
    ;
    si = function(a, b) {
        return new ri(a.id,a.Gg,b,_.za.apply(2, arguments))
    }
    ;
    ti = function(a, b, c, d) {
        return {
            id: a,
            Gg: b,
            Km: c,
            uf: d
        }
    }
    ;
    vi = function(a, b) {
        var c = new ui(a.id,a.Gg,b,a.Km,_.za.apply(2, arguments));
        c.uf = a.uf;
        return c
    }
    ;
    yi = function(a, b) {
        if (a !== a.top) {
            b = void 0 === b ? -1 : b;
            if (0 > b)
                a = !1;
            else {
                var c = _.wi(a, !0, !0)
                  , d = _.xi(a, !0);
                a = 0 < c && 0 < d && Math.abs(1 - a.screen.width / c) <= b && Math.abs(1 - a.screen.height / d) <= b
            }
            a = a ? 0 : 512
        } else
            a = 0;
        return a
    }
    ;
    _.zi = function(a) {
        return a.innerHeight >= a.innerWidth
    }
    ;
    _.Ai = function(a) {
        var b = _.wi(a);
        a = a.innerWidth;
        return b && a ? b / a : 0
    }
    ;
    Bi = function(a, b, c) {
        b = void 0 === b ? 420 : b;
        return (a = _.wi(a, !0, void 0 === c ? !1 : c)) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384
    }
    ;
    _.Ci = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }
    ;
    _.xi = function(a, b) {
        var c = _.Ci(a).clientHeight;
        return (void 0 === b ? 0 : b) ? c * _.Di(a) : c
    }
    ;
    _.wi = function(a, b, c) {
        var d, e = null != (d = _.Ci(a).clientWidth) ? d : (void 0 === c ? 0 : c) ? a.innerWidth : void 0;
        return (void 0 === b ? 0 : b) ? e * _.Di(a) : e
    }
    ;
    _.Ei = function(a, b) {
        var c = _.Ci(a);
        return b ? (a = _.xi(a),
        c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    }
    ;
    _.Fi = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }
    ;
    Gi = function(a, b, c, d) {
        try {
            if (a.setAttribute("data-google-query-id", c),
            !d) {
                null != b.googletag || (b.googletag = {
                    cmd: []
                });
                var e;
                b.googletag.queryIds = null != (e = b.googletag.queryIds) ? e : [];
                b.googletag.queryIds.push(c);
                500 < b.googletag.queryIds.length && b.googletag.queryIds.shift()
            }
        } catch (f) {}
    }
    ;
    _.Hi = function(a) {
        var b = a.Ph;
        var c = a.xg;
        var d = a.mh;
        var e = a.Qh;
        var f = a.yg;
        a = a.nh;
        for (var h = [], k = 0; k < a; k++)
            for (var l = 0; l < d; l++) {
                var m = l
                  , n = d - 1
                  , p = k
                  , q = a - 1;
                h.push({
                    x: b + (0 === n ? 0 : m / n) * (c - b),
                    y: e + (0 === q ? 0 : p / q) * (f - e)
                })
            }
        return h
    }
    ;
    Ii = function(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    }
    ;
    Ji = function(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }
    ;
    Mi = function(a, b) {
        return new _.Ki(a,{
            Ji: Li(a, void 0 === b ? null : b)
        })
    }
    ;
    Li = function(a, b) {
        if (b = void 0 === b ? null : b) {
            var c = b;
            return function(d, e, f) {
                var h, k;
                _.Ni(c, "ach_evt", {
                    tn: d.tagName,
                    id: null != (h = d.getAttribute("id")) ? h : "",
                    cls: null != (k = d.getAttribute("class")) ? k : "",
                    ign: String(f),
                    pw: a.innerWidth,
                    ph: a.innerHeight,
                    x: e.x,
                    y: e.y
                }, !0, 1)
            }
        }
    }
    ;
    Pi = function(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.Oi(b, function(d) {
            return c - d < 1E3 * a
        })
    }
    ;
    Qi = function(a, b, c) {
        try {
            var d = a.getItem(c);
            if (!d)
                return [];
            try {
                var e = JSON.parse(d)
            } catch (f) {}
            if (!Array.isArray(e) || _.Yf(e, function(f) {
                return !_.x(Number, "isInteger").call(Number, f)
            }))
                return a.removeItem(c),
                [];
            e = Pi(b, e);
            e.length || null == a || a.removeItem(c);
            return e
        } catch (f) {
            return null
        }
    }
    ;
    _.Si = function(a, b, c) {
        return 0 >= b || null == a || !Ri(a) ? null : Qi(a, b, c)
    }
    ;
    uj = function(a) {
        var b = _.Ti(new _.Ui, a.nb);
        b = Wi(b, 4, _.Zi, Jc(a.Gm));
        b = _.aj(b, 11, a.za);
        b = _.rj(b, 8, a.pvsid);
        b = _.rj(b, 7, a.gg);
        b = _.aj(b, 9, a.Ub);
        var c = _.sj(b, _.tj, 5);
        _.ge(c, 1, _.xc, a.jb);
        return b
    }
    ;
    _.vj = function(a) {
        var b = _.Ti(new _.Ui, a.nb);
        b = Wi(b, 3, _.Zi, yc(a.R));
        b = _.aj(b, 11, a.za);
        b = _.rj(b, 8, a.pvsid);
        b = _.rj(b, 7, a.gg);
        b = _.aj(b, 9, a.Ub);
        var c = _.sj(b, _.tj, 5);
        _.ge(c, 1, _.xc, a.jb);
        return b
    }
    ;
    xj = function(a, b) {
        return null !== _.wj(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && b.has(c)
        }, !0)
    }
    ;
    yj = function(a, b) {
        return _.wj(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position
        }, !0)
    }
    ;
    zj = function(a) {
        for (var b = [], c = _.y(a.document.querySelectorAll("*")), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a.getComputedStyle(d, null);
            "fixed" === e.position && "none" !== e.display && "hidden" !== e.visibility && b.push(d)
        }
        return b
    }
    ;
    Aj = function(a, b) {
        b = b.getBoundingClientRect();
        var c = b.left
          , d = b.bottom
          , e = b.right;
        return 0 <= b.top && 0 <= c && d <= a.innerHeight && e <= a.innerWidth
    }
    ;
    Bj = function(a) {
        return Math.round(10 * Math.round(a / 10))
    }
    ;
    Cj = function(a) {
        return a.position + "-" + Bj(a.ka) + "x" + Bj(a.ra) + "-" + Bj(a.scrollY + a.Id) + "Y"
    }
    ;
    Dj = function(a) {
        return "f-" + Cj({
            position: a.position,
            Id: a.Id,
            scrollY: 0,
            ka: a.ka,
            ra: a.ra
        })
    }
    ;
    Ej = function(a, b) {
        a = Math.min(null != a ? a : Infinity, null != b ? b : Infinity);
        return Infinity !== a ? a : 0
    }
    ;
    Gj = function(a, b, c) {
        var d = _.Fj(c.qa).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.min(e.bottom + 10, c.ra)
                  , h = Math.max(e.left - 10, 0)
                  , k = Math.min(e.right + 10, c.ka)
                  , l = .3 * c.ka;
                for (e = Math.max(e.top - 10, 0); e <= f; e += 10) {
                    if (0 < k && h < l) {
                        var m = Dj({
                            position: "left",
                            Id: e,
                            ka: c.ka,
                            ra: c.ra
                        });
                        b.set(m, Ej(b.get(m), h))
                    }
                    if (h < c.ka && k > c.ka - l) {
                        m = Dj({
                            position: "right",
                            Id: e,
                            ka: c.ka,
                            ra: c.ra
                        });
                        var n = c.ka - k;
                        b.set(m, Ej(b.get(m), n))
                    }
                }
                d.add(a)
            }
        }
    }
    ;
    Jj = function(a, b) {
        var c = b.qa
          , d = b.Wc
          , e = "f-" + Bj(b.ka) + "x" + Bj(b.ra);
        a.has(e) || (a.set(e, 0),
        e = zj(c),
        d ? (Hj(a, b, e.filter(function(f) {
            return Aj(c, f)
        })),
        Ij(c, e.filter(function(f) {
            return !Aj(c, f)
        }))) : Hj(a, b, e))
    }
    ;
    Hj = function(a, b, c) {
        var d = b.Pc
          , e = b.qa;
        _.Fj(e).sideRailProcessedFixedElements.clear();
        d = new _.B.Set([].concat(_.di(_.x(Array, "from").call(Array, e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]"))), _.di(d)));
        c = _.y(c);
        for (e = c.next(); !e.done; e = c.next())
            e = e.value,
            xj(e, d) || Gj(e, a, b)
    }
    ;
    Lj = function(a) {
        if (1200 > a.ka || 650 > a.ra)
            return null;
        var b = _.Fj(a.qa).sideRailAvailableSpace;
        a.ij || Jj(b, {
            qa: a.qa,
            ka: a.ka,
            ra: a.ra,
            Pc: a.Pc,
            Wc: a.Wc
        });
        for (var c = [], d = .9 * a.ra, e = _.Fi(a.qa), f = (a.ra - d) / 2, h = f, k = d / 7, l = 0; 8 > l; l++) {
            var m = c
              , n = m.push;
            var p = h;
            var q = a.position
              , t = b
              , w = {
                qa: a.qa,
                ka: a.ka,
                ra: a.ra,
                Pc: a.Pc,
                Hd: a.Hd
            }
              , v = Dj({
                position: q,
                Id: p,
                ka: w.ka,
                ra: w.ra
            })
              , A = Cj({
                position: q,
                Id: p,
                scrollY: e,
                ka: w.ka,
                ra: w.ra
            });
            if (!t.has(A)) {
                var z = "left" === q ? 20 : w.ka - 20
                  , D = z;
                q = .3 * w.ka / 5 * ("left" === q ? 1 : -1);
                for (var E = 0; 6 > E; E++) {
                    var G = Ii(w.qa.document, {
                        x: Math.round(D),
                        y: Math.round(p)
                    })
                      , Q = xj(G, w.Pc)
                      , R = yj(G, w.qa);
                    if (!Q && null !== R) {
                        Gj(R, t, w);
                        t.delete(A);
                        break
                    }
                    Q || (Q = w,
                    "true" === G.getAttribute("google-side-rail-overlap") ? Q = !0 : "false" === G.getAttribute("google-side-rail-overlap") || Q.Hd && !_.x(Kj, "includes").call(Kj, G.tagName.toLowerCase()) ? Q = !1 : (R = G.offsetHeight >= .25 * Q.ra,
                    Q = G.offsetWidth >= .9 * Q.ka && R));
                    if (Q)
                        t.set(A, Math.round(Math.abs(D - z) + 20));
                    else if (D !== z)
                        D -= q,
                        q /= 2;
                    else {
                        t.set(A, 0);
                        break
                    }
                    D += q
                }
            }
            p = Ej(t.get(v), t.get(A));
            n.call(m, p);
            h += k
        }
        b = a.Sj;
        e = a.position;
        d = Math.round(d / 8);
        f = Math.round(f);
        h = a.minWidth;
        a = a.minHeight;
        m = [];
        k = _.x(Array(c.length), "fill").call(Array(c.length), 0);
        for (l = 0; l < c.length; l++) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[l]; )
                m.pop();
            k[l] = 0 === m.length ? 0 : m[m.length - 1] + 1;
            m.push(l)
        }
        m = [];
        n = c.length - 1;
        l = _.x(Array(c.length), "fill").call(Array(c.length), 0);
        for (p = n; 0 <= p; p--) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[p]; )
                m.pop();
            l[p] = 0 === m.length ? n : m[m.length - 1] - 1;
            m.push(p)
        }
        m = null;
        for (n = 0; n < c.length; n++)
            if (p = {
                position: e,
                width: Math.round(c[n]),
                height: Math.round((l[n] - k[n] + 1) * d),
                offsetY: f + k[n] * d
            },
            t = p.width >= h && p.height >= a,
            0 === b && t) {
                m = p;
                break
            } else
                1 === b && t && (!m || p.width * p.height > m.width * m.height) && (m = p);
        return m
    }
    ;
    Ij = function(a, b) {
        var c = _.Fj(a);
        if (b.length && !c.g) {
            var d = new MutationObserver(function() {
                setTimeout(function() {
                    Mj(a);
                    for (var f = _.y(c.A), h = f.next(); !h.done; h = f.next())
                        h = h.value,
                        h()
                }, 500)
            }
            );
            b = _.y(b);
            for (var e = b.next(); !e.done; e = b.next())
                d.observe(e.value, {
                    attributes: !0
                });
            c.g = d
        }
    }
    ;
    Mj = function(a) {
        a = _.Fj(a).sideRailAvailableSpace;
        var b = _.x(Array, "from").call(Array, _.x(a, "keys").call(a)).filter(function(d) {
            return _.x(d, "startsWith").call(d, "f-")
        });
        b = _.y(b);
        for (var c = b.next(); !c.done; c = b.next())
            a.delete(c.value)
    }
    ;
    _.Nj = function(a) {
        if (a.la)
            return a.la.Tb(1228, function() {
                return Lj(a)
            }) || null;
        try {
            return Lj(a)
        } catch (b) {}
        return null
    }
    ;
    Oj = function(a, b, c, d, e) {
        b = b.styleSheets;
        if (!b)
            return !1;
        var f = a.matches || a.msMatchesSelector;
        d = -1 === d ? Infinity : d;
        e = -1 === e ? Infinity : e;
        for (var h = 0; h < Math.min(b.length, d); ++h) {
            var k = null;
            try {
                var l = b[h]
                  , m = null;
                try {
                    m = l.cssRules || l.rules
                } catch (G) {
                    if (15 == G.code)
                        throw G.styleSheet = l,
                        G;
                }
                k = m
            } catch (G) {
                continue
            }
            m = void 0;
            if (null != (m = k) && m.length)
                for (m = 0; m < Math.min(k.length, e); ++m)
                    try {
                        var n = k[m], p, q = n, t = c;
                        if (!(p = f.call(a, q.selectorText) && t(q)))
                            a: {
                                var w = void 0;
                                q = a;
                                t = f;
                                var v = c
                                  , A = e
                                  , z = null != (w = n.cssRules) ? w : [];
                                for (w = 0; w < Math.min(z.length, A); w++) {
                                    var D = z[w]
                                      , E = v;
                                    if (t.call(q, D.selectorText) && E(D)) {
                                        p = !0;
                                        break a
                                    }
                                }
                                p = !1
                            }
                        if (p)
                            return !0
                    } catch (G) {}
        }
        return !1
    }
    ;
    Rj = function(a, b, c, d) {
        var e = a.style;
        return (null == e ? 0 : e.height) && !_.x(Pj, "includes").call(Pj, e.height) || (null == e ? 0 : e.maxHeight) && !_.x(Qj, "includes").call(Qj, e.maxHeight) || Oj(a, b.document, function(f) {
            var h = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!h && !_.x(Pj, "includes").call(Pj, h) || !!f && !_.x(Qj, "includes").call(Qj, f)
        }, c, d) ? !1 : !0
    }
    ;
    Tj = function(a, b, c) {
        if (!a)
            return !0;
        var d = !0;
        Sj(a, function(e) {
            return d = Rj(e, b, 10, 10)
        }, c);
        return d
    }
    ;
    Xj = function(a) {
        return "number" === typeof a || "string" === typeof a
    }
    ;
    ak = function(a) {
        a = Yj(a);
        return _.Zj(a)
    }
    ;
    Yj = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    }
    ;
    dk = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = bk.g();
        0 === e.g && (e.g = .001 > Math.random() ? 2 : 1);
        2 === e.g && (e = {},
        Gf(_.x(Object, "assign").call(Object, {}, (e.c = String(a),
        e.pc = String(ck(window)),
        e.em = c,
        e.lid = b,
        e.eids = Qg().join(),
        e), d), "esp"))
    }
    ;
    ek = function() {
        var a = window;
        var b = void 0 === b ? function() {}
        : b;
        return new _.B.Promise(function(c) {
            var d = function() {
                c(b());
                _.Cf(a, "load", d)
            };
            _.ef(a, "load", d)
        }
        )
    }
    ;
    fk = function(a) {
        var b = []
          , c = RegExp("^_GESPSK-(.+)$");
        try {
            for (var d = 0; d < a.length; d++) {
                var e = (c.exec(a.key(d)) || [])[1];
                e && b.push(e)
            }
        } catch (f) {}
        return b
    }
    ;
    jk = function(a, b) {
        return gk(a, hk, 2).some(function(c) {
            return ik(c, 1) === b && _.mi(c, 2)
        })
    }
    ;
    qk = function(a, b, c, d) {
        if (b)
            for (var e = _.y(fk(b)), f = e.next(), h = {}; !f.done; h = {
                Vc: void 0
            },
            f = e.next())
                if (h.Vc = f.value,
                (f = kk().get(h.Vc, b).kd) && !lk(a, h.Vc)) {
                    var k = mk(f);
                    if (2 !== k && 3 !== k) {
                        k = !1;
                        if (c) {
                            var l = /^(\d+)$/.exec(h.Vc);
                            if (l && !(k = _.x(c.split(","), "includes").call(c.split(","), l[1])))
                                continue;
                            if (!k && !c.split(",").some(function(n) {
                                return function(p) {
                                    var q;
                                    return null == d ? void 0 : null == (q = d.get(p)) ? void 0 : q.has(n.Vc)
                                }
                            }(h)))
                                continue
                        }
                        _.Fh(f, 9, k);
                        (k = ik(f, 2)) && 1024 < k.length && (l = {},
                        dk(55, h.Vc, null, (l.sl = String(k.length),
                        l)),
                        _.nk(f.ub(ok(108)), 2));
                        pk(a, 2, hk, f);
                        f = ik(f, 2);
                        l = k = void 0;
                        var m = {};
                        dk(19, h.Vc, null, (m.hs = f ? "1" : "0",
                        m.sl = String(null != (l = null == (k = f) ? void 0 : k.length) ? l : -1),
                        m))
                    }
                }
    }
    ;
    lk = function(a, b) {
        return gk(a, hk, 2).some(function(c) {
            return ik(c, 1) === b && _.mi(c, 2)
        })
    }
    ;
    rk = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    }
    ;
    Ck = function(a, b, c, d, e, f) {
        f = void 0 === f ? sk : f;
        var h, k, l, m, n, p, q, t, w, v, A, z, D;
        return _.gf(function(E) {
            return 1 == E.g ? (h = new tk,
            k = new uk(a,c,e),
            J(h, k),
            J(h, new vk(k.o,void 0,d,e)),
            l = new wk(k.j,e),
            J(h, l),
            m = new xk(l.j,e),
            J(h, m),
            n = new yk(b,m.j,e),
            J(h, n),
            J(h, new vk(n.o,void 0,d,e)),
            p = new zk(n.j,n.H,f.Ne ? 1024 : 300,f.Ne ? 1024 : 1E3,e),
            J(h, p),
            J(h, new vk(p.j,void 0,d,e)),
            q = new Ak(e),
            J(h, q),
            t = new Bk(q.output,m.o,e),
            J(h, t),
            w = new yk(b,t.j,e),
            J(h, w),
            v = new vk(w.j,void 0,d,e),
            J(h, v),
            h.run(),
            D = a,
            E.yield(p.j.promise, 2)) : E.return({
                id: D,
                collectorGeneratedData: null != (z = null == (A = E.A) ? void 0 : ik(A, 2)) ? z : null
            })
        })
    }
    ;
    Ik = function(a, b, c, d) {
        var e = {
            Ne: _.I(Dk)
        };
        e = void 0 === e ? sk : e;
        Ek() !== Fk(window) ? dk(16, "") : Gk(a, "encryptedSignalProviders", c) && Gk(a, "secureSignalProviders", c) || (dk(38, ""),
        Hk(a, "encryptedSignalProviders", b, e, c, d),
        Hk(a, "secureSignalProviders", b, e, c, function() {}))
    }
    ;
    Gk = function(a, b, c) {
        if (void 0 === a[b] || a[b]instanceof Array)
            return !1;
        a[b].addErrorHandler(c);
        return !0
    }
    ;
    Hk = function(a, b, c, d, e, f) {
        var h, k = new Jk(null != (h = a[b]) ? h : [],c,"secureSignalProviders" === b,f,d);
        a[b] = new Kk(k);
        k.addErrorHandler(e)
    }
    ;
    Nk = function(a, b) {
        var c = new tk
          , d = new Ak(b);
        a = new Lk(d.output,a,b);
        Mk(c, [d, a]);
        c.run()
    }
    ;
    Rk = function(a, b, c, d, e) {
        var f = b.toString();
        if (Ok.has(f))
            return null;
        Ok.add(f);
        f = new tk;
        a = new uk(a,c,e);
        var h = new vk(a.o,c,d,e)
          , k = new Pk(a.j,e)
          , l = new wk(k.j,e);
        b = new Qk(l.j,b,e);
        c = new vk(b.j,c,d,e);
        Mk(f, [a, h, k, l, b, c]);
        f.run();
        return f
    }
    ;
    Tk = function(a, b, c) {
        c = void 0 === c ? Sk : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }),
        "complete" === a.document.readyState ? c(a, b) : _.ef(a, "load", function() {
            return void c(a, b)
        }))
    }
    ;
    Uk = function(a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    }
    ;
    Vk = function(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }
    ;
    Xk = function(a) {
        if (a === a.top || _.Wk(a.top))
            return _.B.Promise.resolve({
                status: 4
            });
        var b = Uk(a);
        if (!b)
            return _.B.Promise.resolve({
                status: 2
            });
        if (a.parent === a.top && Vk(a.document.referrer))
            return _.B.Promise.resolve({
                status: 3
            });
        var c = new _.th;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                Yb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        }
        ;
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    }
    ;
    al = function(a, b) {
        var c = Yk(a);
        return c.messageChannelSendRequestFn ? _.B.Promise.resolve(c.messageChannelSendRequestFn) : new _.B.Promise(function(d) {
            function e(l) {
                return k.g(l).then(function(m) {
                    return m.data
                })
            }
            var f = _.Bf("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            b && (f.credentialless = !0);
            f.src = _.jb(Zk).toString();
            var h = (new URL(Zk.toString())).origin
              , k = $k({
                destination: a,
                rb: f,
                origin: h,
                Nb: "goog:gRpYw:doubleclick"
            });
            k.g("goog:topics:frame:handshake:ack").then(function(l) {
                "goog:topics:frame:handshake:ack" === l.data && d(e)
            });
            c.messageChannelSendRequestFn = e;
            a.document.documentElement.appendChild(f)
        }
        )
    }
    ;
    gl = function(a, b, c, d) {
        var e = {
            skipTopicsObservation: _.I(bl)
        };
        e = void 0 === e ? {} : e;
        var f = cl(d)
          , h = f.Ye
          , k = f.Xe;
        b = Yk(b);
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e.skipTopicsObservation
        }).then(function(l) {
            var m = k;
            if (l instanceof Uint8Array)
                m || (m = !(h instanceof Uint8Array && Ua(l, h)));
            else if (cg()(l))
                m || (m = l !== h);
            else
                return c.Rb(989, Error(JSON.stringify(l))),
                7;
            if (m && d)
                try {
                    var n = new dl
                      , p = _.xf();
                    var q = _.Kh(n, 2, p);
                    l instanceof Uint8Array ? Wi(q, 1, el, cc(l, !1, !1)) : Wi(q, 3, el, yc(l));
                    d.setItem("goog:cached:topics", fl(q))
                } catch (t) {}
            return l
        }),
        b.getTopicsPromise = a);
        return h && !k ? _.B.Promise.resolve(h) : b.getTopicsPromise
    }
    ;
    cl = function(a) {
        if (!a)
            return {
                Ye: null,
                Xe: !0
            };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b)
                return {
                    Ye: null,
                    Xe: !0
                };
            var c = hl(b)
              , d = il(c, el);
            switch (d) {
            case 0:
                var e = null;
                break;
            case 1:
                e = jl(kl(c, ll(c, el, 1)));
                break;
            case 3:
                e = _.If(c, ll(c, el, 3), 0);
                break;
            default:
                db(d)
            }
            var f = _.Wf(c, 2) + 6048E5 < _.xf();
            return {
                Ye: e,
                Xe: f
            }
        } catch (h) {
            return {
                Ye: null,
                Xe: !0
            }
        }
    }
    ;
    Yk = function(a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    }
    ;
    nl = function(a) {
        var b = "";
        ml(function(c) {
            if (c === c.top)
                return !0;
            var d;
            if (null == (d = c.document) ? 0 : d.referrer)
                b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    }
    ;
    ol = function() {
        var a = Date.now();
        return _.x(Number, "isFinite").call(Number, a) ? Math.round(a) : 0
    }
    ;
    rl = function(a, b) {
        var c = new pl;
        var d = ol();
        c = _.rj(c, 1, d);
        c = _.rj(c, 2, a.pvsid);
        c = _.aj(c, 3, a.Na);
        d = Qg();
        c = _.de(c, 4, d, Ac);
        b = _.rj(c, 5, b);
        a = _.aj(b, 12, a.za);
        var e;
        if (b = null == (e = _.B.globalThis.performance) ? void 0 : e.memory) {
            e = new ql;
            try {
                _.rj(e, 1, b.jsHeapSizeLimit)
            } catch (f) {}
            try {
                _.rj(e, 2, b.totalJSHeapSize)
            } catch (f) {}
            try {
                _.rj(e, 3, b.usedJSHeapSize)
            } catch (f) {}
        } else
            e = void 0;
        e && _.Ph(a, 10, e);
        return a
    }
    ;
    sl = function(a) {
        return {
            Yc: 1E3,
            jd: .001 > a.oc,
            pj: 1E4,
            Wj: 1E-4 > a.oc
        }
    }
    ;
    zl = function(a) {
        var b = _.Af()
          , c = sl(a)
          , d = c.jd
          , e = c.Yc
          , f = c.Wj
          , h = c.pj;
        if (d) {
            c = a.xa;
            var k = c.hd
              , l = rl(a, e)
              , m = new tl;
            b = _.rj(m, 2, b);
            m = new ul;
            d = _.vl(m, 1, d);
            e = _.wl(d, 2, e);
            f = _.vl(e, 3, f);
            f = _.wl(f, 4, h);
            f = _.vl(f, 5, a.Kh);
            a = _.wl(f, 6, a.Ag);
            a = _.Ph(b, 3, a);
            l = _.xl(l, 6, yl, a);
            k.call(c, l)
        }
    }
    ;
    Cl = function(a) {
        var b = sl(a)
          , c = b.Yc;
        if (!b.jd)
            return function() {}
            ;
        var d = ol();
        a.xa.hd(Al(rl(a, c)));
        return function() {
            var e = a.xa
              , f = e.hd
              , h = rl(a, c);
            var k = new Bl;
            var l = ol() - d;
            k = _.rj(k, 1, l);
            h = _.xl(h, 14, yl, k);
            return void f.call(e, h)
        }
    }
    ;
    Dl = function(a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    }
    ;
    M = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        return function() {
            var e = _.za.apply(0, arguments)
              , f = El(a, b, c, d).apply(this, e);
            try {
                var h = e.length
                  , k = sl(a)
                  , l = k.Wj
                  , m = k.pj;
                if (k.jd && l) {
                    var n = a.xa
                      , p = n.hd
                      , q = rl(a, k.Yc);
                    var t = _.rj(q, 5, m);
                    var w = new Fl;
                    var v = _.K(w, 1, b);
                    var A = _.wl(v, 2, h);
                    var z = _.xl(t, 9, yl, A);
                    p.call(n, z)
                }
            } catch (D) {}
            return f
        }
    }
    ;
    El = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = _.za.apply(0, arguments)
              , f = void 0
              , h = !1
              , k = null
              , l = _.Ng(Gl);
            try {
                var m = _.I(Hl);
                m && l && (k = l.start(b.toString(), 3));
                f = c.apply(this, e);
                h = !0;
                m && l && l.end(k)
            } catch (n) {
                try {
                    if (h)
                        Il.call(this, a, 110, n);
                    else if (Il.call(this, a, b, n),
                    !d)
                        throw n;
                } catch (p) {
                    if (_.Jl(k),
                    !h && !d)
                        throw n;
                }
            }
            return f
        }
    }
    ;
    Kl = function(a, b, c, d) {
        return El(a, b, c, void 0 === d ? !1 : d)()
    }
    ;
    Il = function(a, b, c) {
        if (a.Kh) {
            c = _.Ll(c) ? c.error : c;
            var d = new Ml
              , e = new Nl;
            try {
                var f = ck(window);
                _.rj(e, 1, f)
            } catch (q) {}
            try {
                var h = Qg();
                _.de(e, 2, h, Ac)
            } catch (q) {}
            try {
                _.aj(e, 3, window.document.URL)
            } catch (q) {}
            f = _.Ph(d, 2, e);
            h = new Ol;
            b = _.K(h, 1, b);
            try {
                var k = sg(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                _.aj(b, 2, k)
            } catch (q) {}
            try {
                var l = sg(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                _.aj(b, 3, l)
            } catch (q) {}
            try {
                var m = sg(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                m && _.de(b, 4, m.split(/\n\s*/), _.Vc)
            } catch (q) {}
            k = _.Ph(f, 1, b);
            l = new Pl;
            try {
                _.aj(l, 1, a.Na)
            } catch (q) {}
            try {
                var n = Ql();
                _.wl(l, 2, n)
            } catch (q) {}
            try {
                var p = [].concat(_.di(_.x(Rl, "keys").call(Rl)));
                _.de(l, 3, p, _.Vc)
            } catch (q) {}
            _.xl(k, 4, Sl, l);
            _.rj(k, 5, a.Ag);
            a.xa.pn(k)
        }
    }
    ;
    Vl = function(a, b) {
        var c = Tl.get(a);
        c || (b = c = b(),
        Ul.set(b, a),
        Tl.set(a, b));
        return c
    }
    ;
    Xl = function(a) {
        return function() {
            return new Wl(a,[].concat(_.di(_.za.apply(0, arguments))))
        }
    }
    ;
    Yl = function(a) {
        return "[" + a.map(function(b) {
            return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? Yl(b) : String(b)
        }).join(", ") + "]"
    }
    ;
    Zl = function(a, b) {
        b = Yl(b);
        b = b.substring(1, b.length - 1);
        return new Wl(96,[a, b])
    }
    ;
    $l = function(a) {
        return (_.H = "rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable gameManualInterstitialSlotReady gameManualInterstitialSlotClosed".split(" "),
        _.x(_.H, "includes")).call(_.H, a) ? a : null
    }
    ;
    bm = function(a, b, c) {
        return Vl(c, function() {
            return new am(a,b,c)
        })
    }
    ;
    dm = function(a, b, c) {
        return Vl(c, function() {
            return new cm(a,b,c)
        })
    }
    ;
    em = function(a, b, c, d) {
        "string" === typeof a ? b.setClickUrl(a) : N(d, Zl("Slot.setClickUrl", [a]), c)
    }
    ;
    lm = function(a, b, c, d, e) {
        if ("string" !== typeof a || fm(a))
            N(e, Zl("Slot.setTargeting", [a, b]), c);
        else {
            var f = [];
            Array.isArray(b) ? f = b : _.Sa(b) ? f = _.x(Array, "from").call(Array, b) : b && (f = [b]);
            f = f.map(String);
            (b = (_.H = gm(d),
            _.x(_.H, "find")).call(_.H, function(h) {
                return ik(h, 1) === a
            })) ? hm(b, f) : (b = hm(im(new jm, a), f),
            pk(d, 9, jm, b));
            e.info(km(a, f.join(), d.getAdUnitPath()), c)
        }
    }
    ;
    mm = function(a, b, c, d) {
        if (null != a && "object" === typeof a)
            for (var e = _.y(_.x(Object, "keys").call(Object, a)), f = e.next(); !f.done; f = e.next())
                f = f.value,
                lm(f, a[f], b, c, d);
        else
            d.error(Zl("Slot.updateTargetingFromMap", [a]), b)
    }
    ;
    om = function(a, b, c, d) {
        return "string" !== typeof a ? (N(d, Zl("Slot.getTargeting", [a]), b),
        []) : (b = (_.H = gm(c),
        _.x(_.H, "find")).call(_.H, function(e) {
            return ik(e, 1) === a
        })) ? nm(b).slice() : []
    }
    ;
    pm = function(a) {
        return gm(a).map(function(b) {
            return _.u(b, 1)
        })
    }
    ;
    um = function(a, b, c, d) {
        if (void 0 === a)
            _.nk(c, 9),
            d.info(qm(b.getAdUnitPath()), b);
        else if ("string" !== typeof a || fm(a))
            N(d, Zl("Slot.clearTargeting", [a]), b);
        else {
            var e = gm(c)
              , f = _.x(e, "findIndex").call(e, function(h) {
                return ik(h, 1) === a
            });
            0 > f ? N(d, rm(a, b.getAdUnitPath()), b) : (e.splice(f, 1),
            _.sm(c, 9, e),
            d.info(tm(a, b.getAdUnitPath()), b))
        }
    }
    ;
    _.xm = function(a) {
        _.Ng(vm).g = !0;
        return wm[a]
    }
    ;
    Bm = function(a, b, c) {
        var d, e;
        return null != (e = null == (d = _.x(a, "find").call(a, function(f) {
            f = _.ym(f, zm, 1);
            return Am(f, 1) <= b && Am(f, 2) <= c
        })) ? void 0 : gk(d, zm, 2)) ? e : null
    }
    ;
    Dm = function(a, b, c) {
        var d;
        "number" === typeof b && "number" === typeof c && gk(a, Cm, 6).length ? d = Bm(gk(a, Cm, 6), b, c) : d = gk(a, zm, 5);
        return d
    }
    ;
    Mm = function(a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top === b && (b = Em(!1, b),
        c = Dm(a, b.width, b.height));
        null != c || (c = Dm(a));
        return null == c ? [] : c.map(function(d) {
            return _.O(d, 3) ? "fluid" : [Am(d, 1), Am(d, 2)]
        })
    }
    ;
    Pm = function(a) {
        var b = []
          , c = !1;
        a = _.y(Mm(a));
        for (var d = a.next(); !d.done; d = a.next())
            d = d.value,
            Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    }
    ;
    Rm = function(a) {
        return 0 !== a && 1 !== a
    }
    ;
    Sm = function(a) {
        return Rm(a) && !(_.H = [8, 9],
        _.x(_.H, "includes")).call(_.H, a)
    }
    ;
    Tm = function(a) {
        var b = a.document;
        return wg(a) ? b.URL : b.referrer
    }
    ;
    Wm = function(a) {
        try {
            return Um(a, window.top)
        } catch (b) {
            return new _.Vm(-12245933,-12245933)
        }
    }
    ;
    $m = function(a) {
        if (!a)
            return null;
        var b, c;
        a.getBoundingClientRect ? (a = _.Xm(Ym, a),
        a = new _.Zm(a.right - a.left,a.bottom - a.top)) : a = null;
        return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
    }
    ;
    cn = function(a, b) {
        for (var c = {}, d = _.x(Object, "keys").call(Object, b), e = _.y(d), f = e.next(); !f.done; f = e.next()) {
            f = f.value;
            var h = _.Fd(b[f])
              , k = _.Ng(an)
              , l = k.g.get(f);
            null == l ? l = ++_.Ng(Gl).A : k.g.delete(f);
            _.nk(h, 20, _.Dc(l));
            c[f] = h
        }
        a = {
            X: _.Fd(a),
            V: c
        };
        b = bn();
        c = {};
        d = _.y(d);
        for (e = d.next(); !e.done; e = d.next())
            e = e.value,
            h = f = void 0,
            c[e] = _.x(Array, "from").call(Array, null != (h = null == (f = b.A[e]) ? void 0 : _.x(f, "values").call(f)) ? h : []);
        a.qd = c;
        return a
    }
    ;
    en = function() {
        for (var a = "", b = _.y(dn()), c = b.next(); !c.done; c = b.next())
            c = c.value,
            15 >= c && (a += "0"),
            a += c.toString(16);
        return a
    }
    ;
    dn = function() {
        var a;
        if ("function" === typeof (null == (a = window.crypto) ? void 0 : a.getRandomValues))
            return a = new Uint8Array(16),
            window.crypto.getRandomValues(a),
            a;
        a = window;
        var b;
        if ("function" === typeof (null == (b = a.msCrypto) ? void 0 : b.getRandomValues))
            return b = new Uint8Array(16),
            a.msCrypto.getRandomValues(b),
            b;
        a = Array(16);
        for (b = 0; b < a.length; b++)
            a[b] = Math.floor(255 * Math.random());
        return a
    }
    ;
    ln = function(a, b, c, d) {
        var e = fn(b, a) || gn(b, a);
        if (!e)
            return null;
        var f = Wm(e)
          , h = e === gn(b, a)
          , k = li(function() {
            var q = h ? gn(b, a) : e;
            return q && hn(q, window)
        })
          , l = function(q) {
            var t;
            return null == (t = k()) ? void 0 : t.getPropertyValue(q)
        };
        c = Mm(c)[0];
        var m = !1;
        Array.isArray(c) && (m = d ? h : 0 === f.x && "center" === l("text-align"));
        m && (f.x += Math.round(Math.max(0, (h ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
        if (h) {
            var n;
            f.y += Math.round(Math.min(null != (n = jn(l("padding-top"))) ? n : 0, e.clientHeight));
            if (!m) {
                d = e.clientWidth;
                var p;
                f.x += Math.round(Math.min(null != (p = jn(l("padding-left"))) ? p : 0, d))
            }
        }
        return f && kn(e) ? f : new _.Vm(-12245933,-12245933)
    }
    ;
    mn = function(a, b, c, d) {
        var e = gn(a, c)
          , f = "none" === (null == e ? void 0 : e.style.display);
        f && (e.style.display = "block");
        a = ln(c, a, b, d);
        f && (e.style.display = "none");
        return a
    }
    ;
    nn = function(a) {
        return "google_ads_iframe_" + a.toString()
    }
    ;
    on = function(a) {
        return nn(a) + "__container__"
    }
    ;
    fn = function(a, b) {
        var c;
        return (null == (c = gn(a, b)) ? void 0 : c.querySelector('[id="' + on(a) + '"]')) || null
    }
    ;
    pn = function(a, b) {
        var c, d;
        return null != (d = null == (c = fn(a, b)) ? void 0 : c.querySelector('iframe[id="' + nn(a) + '"]')) ? d : null
    }
    ;
    gn = function(a, b) {
        b = void 0 === b ? document : b;
        return bn().l.get(a) || b.getElementById(a.getDomId())
    }
    ;
    rn = function(a, b, c) {
        return Vl(c, function() {
            return new qn(a,b,c,c.g)
        })
    }
    ;
    sn = function(a) {
        return _.x(Object, "assign").call(Object, {}, a, _.x(Object, "fromEntries").call(Object, _.x(Object, "entries").call(Object, a).map(function(b) {
            var c = _.y(b);
            b = c.next().value;
            return [c.next().value, b]
        })))
    }
    ;
    wn = function() {
        var a = {}
          , b = sn(tn);
        a.OutOfPageFormat = b;
        b = sn(un);
        a.TrafficSource = b;
        b = sn(vn);
        a.Taxonomy = b;
        return a
    }
    ;
    xn = function() {
        var a = {};
        return a.adsense_channel_ids = "channel",
        a.adsense_ad_types = "ad_type",
        a.adsense_ad_format = "format",
        a.adsense_background_color = "color_bg",
        a.adsense_border_color = "color_border",
        a.adsense_link_color = "color_link",
        a.adsense_text_color = "color_text",
        a.adsense_url_color = "color_url",
        a.page_url = "url",
        a.adsense_encoding = "oe",
        a.adsense_family_safe = "adsafe",
        a.adsense_flash_version = "flash",
        a.adsense_font_face = "f",
        a.adsense_hints = "hints",
        a.adsense_keyword_type = "kw_type",
        a.adsense_keywords = "kw",
        a.adsense_test_mode = "adtest",
        a.alternate_ad_iframe_color = "alt_color",
        a.alternate_ad_url = "alternate_ad_url",
        a.demographic_age = "cust_age",
        a.demographic_gender = "cust_gender",
        a.document_language = "hl",
        a.tag_origin = "to",
        a
    }
    ;
    An = function(a, b, c, d, e) {
        if ("string" === typeof a && a.length && void 0 !== xn()[a] && "string" === typeof b) {
            var f = (_.H = c.Va(),
            _.x(_.H, "find")).call(_.H, function(h) {
                return ik(h, 1) === a
            });
            f ? hm(f, [b]) : (f = yn(im(new jm, a), b),
            pk(c, 14, jm, f));
            e.info(zn(a, String(b), d))
        } else
            N(e, Zl("PubAdsService.set", [a, b]))
    }
    ;
    Bn = function(a, b, c) {
        return "string" !== typeof a ? (N(c, Zl("PubAdsService.get", [a])),
        null) : (b = (b = (_.H = b.Va(),
        _.x(_.H, "find")).call(_.H, function(d) {
            return ik(d, 1) === a
        })) && nm(b)) ? b[0] : null
    }
    ;
    Cn = function(a) {
        return a.Va().map(function(b) {
            return _.u(b, 1)
        })
    }
    ;
    En = function() {
        for (var a = ah(Dn) || "0-0-0", b = a.split("-").map(function(e) {
            return Number(e)
        }), c = ["1", "0", "40"].map(function(e) {
            return Number(e)
        }), d = 0; d < b.length; d++) {
            if (b[d] > c[d])
                return a;
            if (b[d] < c[d])
                break
        }
        return "1-0-40"
    }
    ;
    In = function() {
        if (Fn)
            return Fn;
        for (var a = bh(Gn), b = [], c = 0; c < a.length; c += 2)
            _.Hn(a[c], a[c + 1], b);
        return Fn = b.join("&")
    }
    ;
    Vn = function(a, b) {
        if (!b || !_.La(b))
            return null;
        var c = !1
          , d = new Jn;
        _.Sn(b, function(e, f) {
            var h = !1;
            switch (f) {
            case "allowOverlayExpansion":
                "boolean" === typeof e ? _.Fh(d, 1, b.allowOverlayExpansion) : c = h = !0;
                break;
            case "allowPushExpansion":
                "boolean" === typeof e ? _.Fh(d, 2, b.allowPushExpansion) : c = h = !0;
                break;
            case "sandbox":
                !0 === e ? _.Fh(d, 3, b.sandbox) : c = h = !0;
                break;
            default:
                h = !0
            }
            h && a.error(Tn("setSafeFrameConfig", Un(b), f, Un(e)))
        });
        return c ? null : d
    }
    ;
    Xn = function(a) {
        var b = new Jn;
        a = _.y(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value) {
                if (Wn(c, 1)) {
                    var d = b
                      , e = _.O(c, 1);
                    _.Fh(d, 1, e)
                }
                Wn(c, 2) && (d = b,
                e = _.O(c, 2),
                _.Fh(d, 2, e));
                Wn(c, 3) && (d = b,
                c = _.O(c, 3),
                _.Fh(d, 3, c))
            }
        return b
    }
    ;
    Yn = function(a, b) {
        var c = {};
        b = (c[0] = Yg(b.pvsid),
        c);
        return _.Ng(Og).A(a, b)
    }
    ;
    $n = function(a, b) {
        var c;
        return null == (c = _.Zn(a, "__gads", b)) ? void 0 : _.x(c.split(":"), "find").call(c.split(":"), function(d) {
            return 0 === d.indexOf("ID=")
        })
    }
    ;
    ao = function(a, b, c, d) {
        (c = $n(c, d)) ? (d = {},
        b = (d[0] = Yg(b.pvsid),
        d[1] = Yg(c),
        d),
        _.Ng(Og).A(a, b)) : Yn(a, b)
    }
    ;
    fo = function(a) {
        var b = a.key;
        var c = a.value;
        var d = a.La;
        var e = a.serviceName;
        var f = a.xn;
        var h = a.Eb;
        var k = a.P;
        a = a.context;
        var l = null;
        "string" === typeof c ? l = [c] : Array.isArray(c) ? l = c : _.Sa(c) && (l = _.x(Array, "from").call(Array, c));
        l = l && Wa(l);
        var m, n = null != (m = null == l ? void 0 : l.every(function(p) {
            return "string" === typeof p
        })) ? m : !1;
        if ("string" === typeof b && !fm(b) && n) {
            c = l;
            m = (_.H = gk(d, jm, 2),
            _.x(_.H, "find")).call(_.H, function(p) {
                return ik(p, 1) === b
            });
            if ("gpt-beta" === b) {
                if (f) {
                    N(k, bo(c.join()));
                    return
                }
                if (m) {
                    N(k, co(c.join()));
                    return
                }
                c = eo(c, h, a)
            }
            m ? hm(m, c) : (f = hm(im(new jm, b), c),
            pk(d, 2, jm, f));
            k.info(km(b, c.join(), e))
        } else
            N(k, Zl("PubAdsService.setTargeting", [b, c]))
    }
    ;
    go = function(a, b, c) {
        return "string" !== typeof a ? (N(c, Zl("PubAdsService.getTargeting", [a])),
        []) : (b = (_.H = gk(b, jm, 2),
        _.x(_.H, "find")).call(_.H, function(d) {
            return ik(d, 1) === a
        })) ? nm(b).slice() : []
    }
    ;
    ho = function(a) {
        return gk(a, jm, 2).map(function(b) {
            return _.u(b, 1)
        })
    }
    ;
    lo = function(a, b, c, d) {
        if (void 0 === a)
            _.nk(b, 2),
            d.info(io(c));
        else if ("string" !== typeof a || fm(a))
            N(d, Zl("PubAdsService.clearTargeting", [a]));
        else if ("gpt-beta" === a)
            N(d, jo(a));
        else {
            var e = gk(b, jm, 2)
              , f = _.x(e, "findIndex").call(e, function(h) {
                return ik(h, 1) === a
            });
            0 > f ? N(d, rm(a, c)) : (e.splice(f, 1),
            _.sm(b, 2, e),
            d.info(ko(a, c)))
        }
    }
    ;
    eo = function(a, b, c) {
        var d = [];
        a = _.y(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            b.g = e;
            var f = Yn(9, c);
            1 === f.length && (d.push(e),
            d.push(e + "-" + f[0]))
        }
        return d
    }
    ;
    no = function() {
        var a, b, c;
        return "pagead2.googlesyndication.com" === (null != (c = mo.exec(null != (b = null == (a = _.xm(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
    }
    ;
    oo = function(a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    }
    ;
    po = function(a, b) {
        var c = b.g;
        return a.map(function(d) {
            return _.x(c, "find").call(c, function(e) {
                return e.g === d
            })
        }).filter(lg())
    }
    ;
    ro = function() {
        Object.defineProperty(window, "google_DisableInitialLoad", {
            get: function() {
                qo();
                return !0
            },
            set: function() {
                qo()
            },
            configurable: !0
        })
    }
    ;
    uo = function(a, b, c, d, e, f) {
        var h = so(f, a, b, d, e, void 0, !0);
        f = h.slotId;
        h = h.La;
        if (!f || !h)
            return N(b, Zl("PubAdsService.definePassback", [d, e])),
            null;
        _.Fh(h, 17, !0);
        c.slotAdded(f, h);
        return {
            Bj: rn(a, b, new to(a,f,c)),
            La: h
        }
    }
    ;
    wo = function(a, b, c, d, e) {
        return Vl(c, function() {
            return new vo(a,b,c,d,e)
        })
    }
    ;
    xo = function(a, b, c, d, e) {
        "string" !== typeof a || "string" !== typeof b || void 0 === xn()[a] ? N(e, Zl("Slot.set", [a, b]), c) : (c = (_.H = d.Va(),
        _.x(_.H, "find")).call(_.H, function(f) {
            return ik(f, 1) === a
        })) ? hm(c, [b]) : (b = yn(im(new jm, a), b),
        pk(d, 3, jm, b))
    }
    ;
    yo = function(a, b, c, d) {
        return "string" !== typeof a ? (N(d, Zl("Slot.get", [a]), b),
        null) : (b = (b = (_.H = c.Va(),
        _.x(_.H, "find")).call(_.H, function(e) {
            return ik(e, 1) === a
        })) && nm(b)) ? b[0] : null
    }
    ;
    zo = function(a) {
        return a.Va().map(function(b) {
            return _.u(b, 1)
        })
    }
    ;
    Bo = function(a) {
        return Array.isArray(a) && 2 === a.length ? a.every(Ao) : "fluid" === a
    }
    ;
    Co = function(a) {
        return Array.isArray(a) && 2 === a.length && Ao(a[0]) && Ao(a[1])
    }
    ;
    Eo = function(a) {
        if (Array.isArray(a)) {
            var b = new zm;
            b = _.nk(b, 1, _.Dc(a[0]));
            a = _.nk(b, 2, _.Dc(a[1]))
        } else
            a = Do();
        return a
    }
    ;
    Go = function(a) {
        var b = [];
        if (Fo(a))
            b.push(Eo(a));
        else if (Array.isArray(a)) {
            a = _.y(a);
            for (var c = a.next(); !c.done; c = a.next())
                c = c.value,
                Fo(c) ? b.push(Eo(c)) : Ua(c, ["fluid"]) && b.push(Do())
        }
        return b
    }
    ;
    Ho = function(a) {
        var b = void 0 === b ? window : b;
        if (!a)
            return [];
        if (!a.length) {
            var c, d;
            null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a))
        }
        return Go(a)
    }
    ;
    Fo = function(a) {
        return _.I(Io) ? Array.isArray(a) && 2 === a.length ? a.every(Jo) : "fluid" === a : Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    }
    ;
    Ko = function(a) {
        if (!Array.isArray(a))
            return "Size mapping must be an array";
        var b = [];
        a = _.y(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            if (!Array.isArray(c) || 2 !== c.length)
                return "Each mapping entry must be an array of size 2";
            if (!Co(c[0]))
                return "Size must be an array of two non-negative integers";
            var d = _.y(c[0])
              , e = d.next().value;
            d = d.next().value;
            var f = new zm;
            e = _.nk(f, 1, _.Dc(e));
            d = _.nk(e, 2, _.Dc(d));
            if (Array.isArray(c[1]) && 0 === c[1].length)
                f = [];
            else if (f = Go(c[1]),
            0 === f.length)
                return "At least one slot size must be present";
            c = b;
            e = c.push;
            var h = new Cm;
            d = _.Ph(h, 1, d);
            d = _.sm(d, 2, f);
            e.call(c, d)
        }
        return b
    }
    ;
    Lo = function() {
        var a;
        return null != (a = _.ca.googletag) ? a : _.ca.googletag = {
            cmd: []
        }
    }
    ;
    No = function(a, b, c) {
        return Vl(c, function() {
            return new Mo(a,b,c)
        })
    }
    ;
    Vo = function(a, b, c, d, e, f, h) {
        var k = new tk
          , l = new Oo(a,h);
        J(k, l);
        var m = new Po(a,b,d,e,l.wb);
        J(k, m);
        h = new Qo(a,b,c,d,h,e,l.wb);
        J(k, h);
        b = new Ro(a,b,c,d,e,l.wb);
        J(k, b);
        l = new So(a,l.wb,h.j,m.j,b.j);
        J(k, l);
        0 < _.$g(To) && J(k, new Uo(a,f,l.output));
        k.run();
        return {
            wb: l.output,
            Wa: k
        }
    }
    ;
    Xo = function(a, b) {
        return Vl(b, function() {
            return new Wo(a,b)
        })
    }
    ;
    Zo = function(a, b, c) {
        var d = El(a, 77, function() {
            var e = b.cmd;
            if (!e || Array.isArray(e)) {
                var f = new Yo(c);
                b.cmd = Xo(a, f);
                null != e && e.length && b.cmd.push.apply(f, e)
            }
        });
        b.fifWin && "complete" !== document.readyState ? _.ef(window, "load", function() {
            return window.setTimeout(d, 0)
        }) : d()
    }
    ;
    bp = function(a) {
        var b = window;
        "complete" === _.ca.document.readyState ? Kl(a, 94, function() {
            Lo()._pubconsole_disable_ || null !== $o(b) && ap(a, b)
        }) : _.ef(_.ca, "load", El(a, 94, function() {
            Lo()._pubconsole_disable_ || null !== $o(b) && ap(a, b)
        }))
    }
    ;
    ap = function(a, b) {
        b = void 0 === b ? _.ca : b;
        if (!cp) {
            var c = new dp("gpt_pubconsole_loaded");
            ep(c, a);
            fp(c, "param", String($o(b)));
            fp(c, "api", String(gp));
            hp(c);
            _.ip(b.document, jp);
            cp = !0
        }
    }
    ;
    $o = function(a) {
        var b = Tm(a), c;
        return null != (c = (_.H = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"],
        _.x(_.H, "find")).call(_.H, function(d) {
            var e = b.search(kp);
            b: {
                var f = 0;
                for (var h = d.length; 0 <= (f = b.indexOf(d, f)) && f < e; ) {
                    var k = b.charCodeAt(f - 1);
                    if (38 == k || 63 == k)
                        if (k = b.charCodeAt(f + h),
                        !k || 61 == k || 38 == k || 35 == k)
                            break b;
                    f += h + 1
                }
                f = -1
            }
            if (0 > f)
                d = null;
            else {
                h = b.indexOf("&", f);
                if (0 > h || h > e)
                    h = e;
                f += d.length + 1;
                d = decodeURIComponent(b.slice(f, -1 !== h ? h : 0).replace(/\+/g, " "))
            }
            return null !== d
        })) ? c : null
    }
    ;
    lp = function() {
        Lo()._pubconsole_disable_ = !0
    }
    ;
    op = function() {
        mp && (Lo().console.openConsole(np),
        np = void 0,
        mp = !1)
    }
    ;
    vp = function() {
        var a = {};
        return a[576944485] = new pp,
        a[578856259] = new qp(function() {
            return _.$g(rp)
        }
        ),
        a[607368714] = new sp,
        a[629394304] = new tp,
        a[633226268] = new up,
        a
    }
    ;
    wp = function(a) {
        switch (Number(a)) {
        case 0:
            return "";
        case 1:
            return "Out-of-page creative";
        case 2:
        case 3:
            return "Anchor";
        case 5:
            return "Interstitial";
        case 6:
            return "Shoppit";
        case 7:
            return "Game Manual Interstitial";
        case 4:
            return "Rewarded";
        case 8:
        case 9:
            return "Side Rail";
        default:
            return ""
        }
    }
    ;
    zp = function(a) {
        var b, c, d;
        var e = new xp;
        e = _.rj(e, 1, a.pvsid);
        e = yp(e);
        e = _.aj(e, 3, a.za);
        e = _.aj(e, 4, a.Na);
        e = _.rj(e, 5, 10);
        e = _.K(e, 6, a.vm);
        e = _.aj(e, 7, a.zm);
        var f = a.message.getMessageId();
        e = _.K(e, 8, f);
        f = a.message.getMessageArgs();
        e = _.de(e, 9, f, _.Vc);
        f = Dl(null != (d = null == (b = a.slotId) ? void 0 : b.getAdUnitPath()) ? d : "");
        b = _.aj(e, 10, f);
        a = null == (c = a.slotId) ? void 0 : c.getAdUnitPath();
        return _.aj(b, 11, a)
    }
    ;
    Ap = function(a, b) {
        b = void 0 === b ? null : b;
        var c = [];
        a && (c.push(ik(a, 1)),
        c.push(Pm(a)),
        c.push(ik(a, 2)));
        if (b) {
            a = [];
            for (var d = 0; b && 25 > d; b = b.parentNode,
            ++d)
                9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? _.Xg(c.join(":")).toString() : "0"
    }
    ;
    Bp = function(a) {
        if (!_.Wk(a))
            return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    }
    ;
    Dp = function(a, b, c, d, e, f) {
        var h = void 0
          , k = El(a, c, f);
        _.ef(d, e, k) && (h = function() {
            return void _.Cf(d, e, k)
        }
        ,
        _.Cp(b, h));
        return h
    }
    ;
    Ep = function(a, b, c, d, e) {
        return Dp(a.context, a, b, c, d, e)
    }
    ;
    Gp = function(a) {
        a = (_.Wk(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!Fp(a, function(b, c) {
            return !/^inabox/i.test(c)
        })
    }
    ;
    Hp = function(a) {
        return Math.round(Number(jn(a)))
    }
    ;
    Ip = function(a) {
        var b = a.parentElement;
        return !b || 1 >= b.children.length ? !1 : _.x(Array, "from").call(Array, b.children).some(function(c) {
            return c !== a && !(_.H = ["script", "style"],
            _.x(_.H, "includes")).call(_.H, c.tagName.toLowerCase())
        })
    }
    ;
    Kp = function(a, b, c) {
        for (var d = 100; a && a !== b && --d; )
            _.Jp(a, c),
            a = a.parentElement
    }
    ;
    Lp = function(a, b, c, d, e) {
        _.Jp(a, {
            "margin-left": "0px",
            "margin-right": "0px"
        });
        var f = {}
          , h = "rtl" === d.direction
          , k = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
        d = function() {
            var l = a.getBoundingClientRect().left;
            return h ? k - l : l - k
        }
        ;
        b = d();
        return 0 !== b ? (c = function(l) {
            h ? f["margin-right"] = l + "px" : f["margin-left"] = l + "px"
        }
        ,
        c(-b),
        _.Jp(a, f),
        d = d(),
        0 !== d && b !== d && (c(b / (d - b) * b),
        _.Jp(a, f)),
        !0) : !1
    }
    ;
    Np = function(a, b, c, d, e, f, h, k, l, m) {
        window.setTimeout(function() {
            var n = Pm(d);
            if (window.IntersectionObserver) {
                var p, q = null != (p = pn(c, b)) ? p : gn(c, b);
                n = Mp(a, b, c, e, f, h, n, k, l, m, q);
                (new window.IntersectionObserver(n,{
                    threshold: .98
                })).observe(q)
            }
        }, 500)
    }
    ;
    Mp = function(a, b, c, d, e, f, h, k, l, m, n) {
        var p = window.location && "#flexibleAdSlotTest" === window.location.hash ? 1 : _.$g(Op);
        return El(a, 459, function(q, t) {
            (q = null == q ? void 0 : q[0]) && Pp(a, b, c, d, e, f, h, k, l, m, t, n, q, p)
        })
    }
    ;
    Pp = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t) {
        var w = q.boundingClientRect
          , v = q.intersectionRatio
          , A = window.innerWidth
          , z = w.left
          , D = w.right
          , E = 0 > z + 2
          , G = 0 < D - (A + 2);
        (.98 <= v || E || G) && Qp(l, function(Q) {
            n.unobserve(p);
            var R = E || G;
            var L = new xg;
            Rp(p, R) && L.set(10);
            if (void 0 !== k && Ip(p)) {
                var X, da = null == (X = gn(c, b)) ? void 0 : X.parentElement, Y;
                X = da ? null == (Y = hn(da, window)) ? void 0 : Y.width : void 0;
                k !== X && L.set(16)
            }
            R ? (L.set(8),
            R = zg(L)) : R = Sp(b, c, v, L);
            Y = Tp(c, p, f);
            L = Y.lm;
            Y = Y.pm;
            ep(Q, a);
            fp(Q, "qid", m);
            fp(Q, "iu", c.getAdUnitPath());
            fp(Q, "e", String(R));
            E && fp(Q, "ofl", String(z));
            G && fp(Q, "ofr", String(D - A));
            fp(Q, "ret", e + "x" + f);
            fp(Q, "req", h);
            fp(Q, "bm", String(d));
            fp(Q, "efh", Number(L));
            fp(Q, "stk", Number(Y));
            fp(Q, "ifi", Up(window))
        }, t)
    }
    ;
    Sp = function(a, b, c, d) {
        var e = pn(b, a) || gn(b, a);
        try {
            var f = e.getBoundingClientRect()
              , h = f.left
              , k = f.top
              , l = f.width
              , m = f.height
              , n = gn(b, a)
              , p = hn(n, window);
            if ("hidden" === p.visibility || "none" === p.display)
                return zg(d);
            var q = Hp(p.getPropertyValue("border-top-width") || 0) + 1;
            b = h + l;
            f = k + m;
            c = (1 - c) * m;
            var t = a.elementsFromPoint(h + q + 2, k + c + q);
            var w = a.elementsFromPoint(b - q - 2, k + c + q);
            var v = a.elementsFromPoint(b - q - 2, f - c - q);
            var A = a.elementsFromPoint(h + q + 2, f - c - q);
            var z = a.elementsFromPoint(b / 2, f - c - q)
        } catch (E) {
            return d.set(1),
            zg(d)
        }
        if (!(t && t.length && w && w.length && v && v.length && A && A.length && z && z.length))
            return d.set(7),
            zg(d);
        a = function(E, G) {
            for (var Q = !1, R = 0; R < E.length; R++) {
                var L = E[R];
                if (Q) {
                    var X = hn(L, window);
                    if ("hidden" !== X.visibility && !Vp(L) && !D(e, L)) {
                        d.set(G);
                        "absolute" === X.position && d.set(11);
                        break
                    }
                } else
                    e === L && (Q = !0)
            }
        }
        ;
        Wp(e) && d.set(9);
        var D = function(E, G) {
            return Xp(E, G) || Xp(G, E)
        };
        h = t[0];
        e === h || D(e, h) || Vp(h) || d.set(2);
        h = w[0];
        e === h || D(e, h) || Vp(h) || d.set(3);
        h = v[0];
        e === h || D(e, h) || Vp(h) || d.set(4);
        h = A[0];
        e === h || D(e, h) || Vp(h) || d.set(5);
        if (Vp(e))
            return zg(d);
        a(t, 12);
        a(w, 13);
        a(v, 14);
        a(A, 15);
        a(z, 6);
        return zg(d)
    }
    ;
    Rp = function(a, b) {
        var c = !1
          , d = !1;
        return Yp(a, function(e, f) {
            d = d || "scroll" === e.overflowX || "auto" === e.overflowX;
            c = c || "flex" === e.display;
            return b && c && d || "listbox" === f.role
        })
    }
    ;
    Tp = function(a, b, c) {
        var d = (a = gn(a)) && hn(a, window)
          , e = d ? "absolute" !== d.position : !0
          , f = !1
          , h = a && a.parentElement
          , k = !1;
        Sj(b, function(l) {
            var m = l.style;
            if (e)
                if (k || (k = l === h))
                    e = Rj(l, _.ca, -1, -1);
                else {
                    m = m && m.height;
                    var n = (m && _.x(m, "endsWith").call(m, "px") ? Hp(m) : 0) >= c;
                    !m || n || "string" === typeof m && _.x(Pj, "includes").call(Pj, m) || (e = !1)
                }
            f || (l = hn(l, _.ca),
            "sticky" !== l.position && "fixed" !== l.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            lm: e,
            pm: f
        }
    }
    ;
    Vp = function(a) {
        return Yp(a, function(b) {
            return "fixed" === b.position || "sticky" === b.position
        })
    }
    ;
    Wp = function(a) {
        return Yp(a, function(b) {
            var c;
            return (_.H = ["left", "right"],
            _.x(_.H, "includes")).call(_.H, null != (c = b["float"]) ? c : b.cssFloat)
        })
    }
    ;
    Zp = function(a, b, c, d) {
        var e = _.Bf("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto",
        b.textAlign = "center");
        d && (c = Array.isArray(d),
        b.width = c ? d[0] + "px" : "100%",
        b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    }
    ;
    $p = function(a) {
        return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
    }
    ;
    bq = function(a, b, c) {
        var d = new _.B.Map;
        a = _.y(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            var f = b[e.getDomId()];
            f = Qh(f, aq, 28) ? _.ym(f, aq, 28) : _.ym(c, aq, 34);
            var h = void 0;
            d.set(e, (null == (h = f) ? 0 : Wn(h, 1)) ? _.O(f, 1) ? 2 : 1 : 0)
        }
        return d
    }
    ;
    eq = function(a, b, c) {
        var d, e, f = [], h = [];
        a = _.y(a);
        for (d = a.next(); !d.done; d = a.next())
            if (d = d.value,
            1 === b.get(d))
                f.push(null),
                h.push(null);
            else {
                var k = c
                  , l = gn(d);
                d = cq((null == l ? void 0 : l.parentElement) && hn(l.parentElement, k) || null);
                if (!d || 1 === d[0] && 1 === d[3]) {
                    var m = e = d = void 0
                      , n = null != (m = null == l ? void 0 : l.parentElement) ? m : null;
                    m = null != (e = $m(n)) ? e : new _.Zm(0,0);
                    dq(m, n, k, 100);
                    e = null != (d = $m(l)) ? d : new _.Zm(0,0);
                    dq(e, l, k, 1);
                    -1 === m.height && (e.height = -1);
                    d = m;
                    d = d.width + "x" + d.height;
                    e = e.width + "x" + e.height
                } else
                    e = d = "-1x-1";
                f.push(d);
                h.push(e)
            }
        return {
            Om: f,
            Dn: h
        }
    }
    ;
    dq = function(a, b, c, d) {
        try {
            var e;
            if (!(e = !b || !Tj(b, c, d))) {
                a: {
                    do {
                        var f = hn(b, c);
                        if (f && "fixed" == f.position) {
                            var h = !1;
                            break a
                        }
                    } while (b = b.parentElement);
                    h = !0
                }
                e = !h
            }
            e && (a.height = -1)
        } catch (k) {
            a.width = -1,
            a.height = -1
        }
    }
    ;
    gq = function(a, b, c) {
        var d = 0 !== (0,
        _.fq)()
          , e = Em(!0, c, d).width
          , f = []
          , h = []
          , k = [];
        if (null !== c && c != c.top) {
            var l = Em(!1, c).width;
            (-12245933 === e || -12245933 === l || l < e) && k.push(8)
        }
        -12245933 !== e && (1.5 * e < c.document.documentElement.scrollWidth ? k.push(10) : d && 1.5 * c.outerWidth < e && k.push(10));
        a = _.y(a);
        for (d = a.next(); !d.done; d = a.next())
            if (l = d.value,
            1 === b.get(l))
                f.push(null),
                h.push(null);
            else {
                d = new xg;
                var m = gn(l);
                l = 0;
                var n = !1
                  , p = !1
                  , q = !1;
                if (m) {
                    for (var t = 0, w = m; w && 100 > t; t++,
                    w = w.parentElement) {
                        var v = hn(w, c);
                        if (v) {
                            var A = v
                              , z = A.display
                              , D = A.overflowX;
                            if ("visible" !== A.overflowY && (d.set(2),
                            (A = $m(w)) && (l = l ? Math.min(l, A.width) : A.width),
                            d.get(9)))
                                break;
                            $p(v) && d.set(9);
                            "none" === z && d.set(7);
                            "IFRAME" === w.nodeName && (v = parseInt(v.width, 10),
                            v < e && (d.set(8),
                            l = l ? Math.min(v, l) : v));
                            p || (p = "scroll" === D || "auto" === D);
                            n || (n = "flex" === z);
                            q || (q = "listbox" === w.role)
                        } else
                            d.set(3)
                    }
                    if (!q) {
                        if (n = p && n)
                            m = m.getBoundingClientRect().left,
                            n = m > e || 0 > m;
                        q = n
                    }
                    q && d.set(11)
                } else
                    d.set(1);
                m = _.y(k);
                for (n = m.next(); !n.done; n = m.next())
                    d.set(n.value);
                f.push(zg(d));
                h.push(l)
            }
        return {
            Ol: f,
            Lm: h
        }
    }
    ;
    hq = function(a, b, c, d, e) {
        if (null != b && b.size) {
            var f, h;
            e = null != (h = null != (f = null == e ? void 0 : e.adUnits) ? f : null == a ? void 0 : a.adUnits) ? h : [];
            a = _.y(e);
            h = a.next();
            for (f = {}; !h.done; f = {
                yh: void 0
            },
            h = a.next()) {
                h = h.value;
                var k = e = void 0
                  , l = void 0;
                if (null != (e = h) && e.code && (null == (k = h) ? 0 : null == (l = k.bids) ? 0 : l.length) && (e = h.bids,
                h = Bh(h.code, b),
                f.yh = h / 1E6,
                !(0 >= h)))
                    for (e = _.y(e),
                    l = e.next(),
                    k = {}; !l.done; k = {
                        tc: void 0,
                        aj: void 0
                    },
                    l = e.next())
                        l = l.value,
                        k.aj = "function" === typeof l.getFloor ? l.getFloor : void 0,
                        k.tc = Vh(Th(Uh(new Rh, 4), h), c),
                        l.getFloor = function(m, n) {
                            return function(p) {
                                4 === _.If(m.tc, 1, 0) && Uh(m.tc, 1);
                                var q, t = null == (q = m.aj) ? void 0 : q.apply(this, [p]);
                                p = c ? t || {} : {
                                    currency: "USD",
                                    floor: n.yh
                                };
                                return null != t && t.floor ? (null == t ? 0 : t.currency) && "USD" !== t.currency ? (1 === _.If(m.tc, 1, 0) && (p = Th(Uh(m.tc, 6), 1E6 * t.floor),
                                Yh(p, 3, t.currency)),
                                t) : (t.floor || 0) > n.yh ? (1 === _.If(m.tc, 1, 0) && Th(Uh(m.tc, 5), 1E6 * t.floor),
                                t) : p : p
                            }
                        }(k, f),
                        d.set(l.getFloor, k.tc)
            }
        }
    }
    ;
    iq = function(a, b) {
        var c = a.que
          , d = function() {
            var e;
            null == a || null == (e = a.requestBids) || e.before.call(b, function(f, h) {
                return Lo().pbjs_hooks.push({
                    context: b,
                    nextFunction: f,
                    requestBidsConfig: h
                })
            }, 0)
        };
        (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d) : null == c || c.unshift(d)
    }
    ;
    kq = function(a, b) {
        return Vl(b, function() {
            return new jq(a,b)
        })
    }
    ;
    lq = function(a, b) {
        for (var c = new xg, d = 0; d < a.length; d++)
            c.set(a.length - d - 1, b(a[d]));
        return zg(c)
    }
    ;
    nq = function(a, b) {
        return mq(a, b)
    }
    ;
    mq = function(a, b) {
        return a.map(function(c) {
            return b(c)
        })
    }
    ;
    qq = function(a, b, c) {
        var d = {
            yc: new oq,
            Jc: new oq,
            Ic: new oq,
            Hc: new oq,
            nd: new oq,
            cd: new oq,
            Mf: new oq,
            Nf: new oq,
            eg: new oq
        }
          , e = new tk;
        J(e, new pq(a,b,c,window,d));
        e.run();
        return {
            ki: d,
            Wa: e
        }
    }
    ;
    sq = function(a, b, c, d, e, f, h, k) {
        if (h) {
            var l = {
                Nh: new oq
            }
              , m = new tk;
            a = new rq(a,b,c,d,e,f,h,k,l);
            J(m, a);
            m.run();
            return {
                Ok: l,
                Wa: m
            }
        }
    }
    ;
    uq = function(a, b) {
        var c;
        return !(null != (c = tq(b, 22)) ? !c : !_.O(a, 15))
    }
    ;
    vq = function() {
        return {
            Gd: new _.B.Set
        }
    }
    ;
    xq = function(a) {
        var b;
        var c = new wq;
        c = _.rj(c, 2, a.pvsid);
        c = _.aj(c, 3, a.Na);
        c = _.aj(c, 6, a.za);
        var d = null != (b = a.gg) ? b : _.xf();
        b = _.rj(c, 1, d);
        c = Qg();
        b = _.de(b, 4, c, Ac);
        a.payload && (c = a.payload(),
        _.Ph(b, 7, c));
        a.nb && _.rj(b, 5, a.nb);
        return b
    }
    ;
    zq = function(a, b, c, d) {
        for (var e = _.y(_.x(Object, "entries").call(Object, yq)), f = e.next(); !f.done; f = e.next()) {
            var h = _.y(f.value);
            f = h.next().value;
            h = h.next().value;
            b & f && N(a, h(String(c), d))
        }
    }
    ;
    Eq = function(a) {
        return xq(_.x(Object, "assign").call(Object, {}, a, {
            payload: function() {
                var b = new Aq;
                var c = _.Bq(b, Cq, 1, Dq);
                c = _.ci(c, 1, a.Fm);
                _.ci(c, 2, a.Ch);
                return b
            }
        }))
    }
    ;
    Hq = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = (c = void 0 === c ? null : c) ? Dg(c) : null;
        c = _.I(Fq) ? null : c;
        var d = _.I(Gq);
        b = void 0 === b ? !0 : b;
        d = void 0 === d ? !1 : d;
        var e = 0;
        try {
            e |= yi(a);
            var f;
            if (!(f = !a.navigator)) {
                var h = a.navigator;
                f = "brave"in h && "isBrave"in h.brave || !1
            }
            e |= f || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            e |= Bi(a, d ? _.x(Number, "MAX_SAFE_INTEGER") : 2500);
            !b || c && Ri(c) || (e |= 4194304)
        } catch (k) {
            e |= 32
        }
        return e
    }
    ;
    Iq = function(a) {
        switch (a) {
        case 4:
            return 11;
        case 2:
            return 2;
        case 3:
            return 1;
        case 5:
            return 8;
        case 6:
            return 42;
        case 7:
            return 10;
        case 8:
            return 3;
        case 9:
            return 4
        }
    }
    ;
    Rq = function(a, b, c, d) {
        d = void 0 === d ? !0 : d;
        a = Iq(a);
        if (!a)
            return null;
        if (10 === a)
            return 0;
        var e = 0;
        if (!(_.H = [11, 10],
        _.x(_.H, "includes")).call(_.H, a) && (d || !_.I(Jq))) {
            e |= yi(b);
            var f = _.Fj(b);
            f = 26 !== a && 27 !== a && 40 !== a && 41 !== a && 10 !== a && f.adCount ? 1 == a || 2 == a ? !(!f.adCount[1] && !f.adCount[2]) : (f = f.adCount[a]) ? 1 <= f : !1 : !1;
            f && (e |= 64);
            if (e)
                return e
        }
        if (2 === a || 1 === a) {
            var h = {
                qa: b,
                sj: _.I(Kq) ? _.x(Number, "MAX_SAFE_INTEGER") : Lq,
                Zk: c ? a : void 0
            };
            0 === (0,
            _.fq)() && (h.sj = _.I(Kq) ? _.x(Number, "MAX_SAFE_INTEGER") : 3E3,
            h.Cm = _.I(Mq) ? -1 : 650,
            h.Tn = _.I(Nq),
            h.Wn = _.$g(Oq));
            var k = e;
            var l = h.qa;
            c = h.Cm;
            f = h.sj;
            var m = h.Zk;
            var n = h.Tn;
            var p = h.Wn;
            h = h.Ka;
            e = 0;
            try {
                e |= yi(l, p);
                var q = Math.min(l.screen.width || 0, l.screen.height || 0);
                e |= q ? 320 > q ? 8192 : 0 : 2048;
                e |= l.navigator && Ji(l.navigator.userAgent) ? 1048576 : 0;
                if (c) {
                    q = e;
                    var t = l.innerHeight;
                    var w = _.Di(l) * t >= c ? 0 : 1024;
                    var v = q | w
                } else
                    v = e | (_.zi(l) ? 0 : 8);
                e = v;
                e |= Bi(l, f, n)
            } catch (A) {
                e |= 32
            }
            switch (m) {
            case 2:
                v = h;
                v = void 0 === v ? null : v;
                w = _.Hi({
                    Ph: 0,
                    xg: l.innerWidth,
                    mh: 3,
                    Qh: 0,
                    yg: Math.min(Math.round(l.innerWidth / 320 * 50), Pq) + 15,
                    nh: 3
                });
                null != Qq(Mi(l, v), w) && (e |= 16777216);
                break;
            case 1:
                v = h,
                v = void 0 === v ? null : v,
                w = l.innerWidth,
                t = l.innerHeight,
                q = Math.min(Math.round(l.innerWidth / 320 * 50), Pq) + 15,
                c = _.Hi({
                    Ph: 0,
                    xg: w,
                    mh: 3,
                    Qh: t - q,
                    yg: t,
                    nh: 3
                }),
                25 < q && c.push({
                    x: w - 25,
                    y: t - 25
                }),
                null != Qq(Mi(l, v), c) && (e |= 16777216)
            }
            e |= k
        } else
            8 === a ? e |= Hq(b) : 3 === a || 4 === a ? (v = e,
            q = a,
            t = !0,
            q = void 0 === q ? null : q,
            t = void 0 === t ? !1 : t,
            k = void 0 === k ? !1 : k,
            w = yi(b),
            Ji(null == (l = b.navigator) ? void 0 : l.userAgent) && (w |= 1048576),
            l = b.innerWidth,
            1200 > l && (w |= 65536),
            e = b.innerHeight,
            650 > e && (w |= 2097152),
            q && 0 === w && (q = 3 === q ? "left" : "right",
            (t = _.Nj({
                qa: b,
                ij: !1,
                Sj: 1,
                position: q,
                ka: l,
                ra: e,
                Pc: new _.B.Set,
                minWidth: 120,
                minHeight: 500,
                Wc: t,
                Hd: k
            })) ? _.Fj(b).sideRailPlasParam.set(q, t.width + "x" + t.height + "_" + String(q).charAt(0)) : w |= 16),
            e = v | w) : 11 !== a && 42 !== a && (e |= 32);
        !e && d && (b = _.Fj(b),
        b.adCount = b.adCount || {},
        b.adCount[a] = b.adCount[a] + 1 || 1);
        return e
    }
    ;
    Uq = function(a, b, c, d) {
        var e = d.Ei;
        var f = d.adUnitPath;
        d = void 0 === d.Gb ? !1 : d.Gb;
        return "string" === typeof f && f.length && (null == e || "string" === typeof e || "number" === typeof e && Sq(e)) ? Tq(a, b, f, c, {
            qc: "string" === typeof e ? e : void 0,
            format: "number" === typeof e ? e : 1,
            Gb: d
        }) : (b.error(Zl("googletag.defineOutOfPageSlot", [f, e])),
        null)
    }
    ;
    Sq = function(a) {
        switch (a) {
        case 6:
            return !0;
        case 7:
            return !0;
        default:
            return !!Fp(tn, function(b) {
                return b === a
            })
        }
    }
    ;
    Tq = function(a, b, c, d, e) {
        var f = e.qc;
        var h = e.format;
        b = d.add(a, b, c, [1, 1], {
            qc: f,
            format: h,
            Gb: e.Gb
        });
        a = b.slotId;
        b = b.La;
        a && b && (_.Nh(b, 15, h),
        _.Cp(a, function() {
            var k = window
              , l = Iq(h);
            if (l) {
                k = _.Fj(k);
                var m = k.adCount && k.adCount[l];
                m && (k.adCount[l] = m - 1)
            }
        }));
        return null != a ? a : null
    }
    ;
    Vq = function(a, b) {
        var c;
        return !(null != (c = tq(a, 11)) ? !c : !_.O(b, 10))
    }
    ;
    Wq = function(a, b, c, d) {
        if (a = gn(a, b)) {
            var e;
            if (c = null != (e = tq(c, 24)) ? e : _.O(d, 30))
                c = a.getBoundingClientRect(),
                d = c.top,
                e = c.bottom,
                0 === c.height ? c = !1 : (c = _.ca.innerHeight,
                c = 0 < e && e < c || 0 < d && d < c);
            c || (a.style.display = "none")
        }
    }
    ;
    Xq = function(a) {
        if (61440 >= a.length)
            return {
                url: a,
                mi: 0
            };
        var b = a;
        61440 < b.length && (b = b.substring(0, 61432),
        b = b.replace(/%\w?$/, ""),
        b = b.replace(/&[^=]*=?$/, ""),
        b += "&trunc=1");
        return {
            url: b,
            mi: a.length - b.length + 8
        }
    }
    ;
    Yq = function(a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a),
        (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    }
    ;
    Zq = function(a, b) {
        b = void 0 === b ? window : b;
        return !!Yq(a, b)
    }
    ;
    $q = function(a) {
        var b, c;
        return null != (c = null == (b = _.x(a, "find").call(a, function(d) {
            return "page_url" === ik(d, 1)
        })) ? void 0 : nm(b)[0]) ? c : null
    }
    ;
    ar = function(a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?"))
          , c = a.indexOf("&", b);
        -1 === c && (c = a.length - 1,
        --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    }
    ;
    br = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins)
            return a.location.ancestorOrigins.length;
        var c = 0;
        ml(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    }
    ;
    cr = function(a, b) {
        var c = b.X;
        var d = b.V;
        return !!$q(c.Va()) || a.some(function(e) {
            return null !== $q(d[e.getDomId()].Va())
        })
    }
    ;
    hr = function(a, b, c) {
        var d = window
          , e = new tk;
        d = new dr(d);
        _.er(e, d);
        a = new fr(a,d,c,_.xm(150));
        J(e, a);
        b = e.j(gr, {
            zd: b ? a.xf : void 0
        }, {
            qf: d
        }).output;
        e.run();
        return {
            xf: a.xf,
            Hg: b,
            Wa: e
        }
    }
    ;
    jr = function() {
        var a = void 0 === a ? window : a;
        ir = _.xf(a)
    }
    ;
    kr = function(a, b) {
        var c = _.Bf("DIV");
        c.id = a;
        c.textContent = b;
        _.Jp(c, {
            height: "24px",
            "line-height": "24px",
            "text-align": "center",
            "vertical-align": "middle",
            color: "white",
            "background-color": "black",
            margin: "0",
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": "500",
            "font-size": "11px",
            "letter-spacing": "0.08em"
        });
        return c
    }
    ;
    lr = function(a, b) {
        if ("undefined" !== typeof IntersectionObserver)
            return new IntersectionObserver(b,{
                rootMargin: a + "%"
            })
    }
    ;
    or = function(a, b, c, d, e) {
        var f = void 0 === f ? _.B.globalThis.IntersectionObserver : f;
        if (!b)
            return {
                Wg: e
            };
        var h = null != ni(b, 1) ? null != mr(b) && 0 !== (0,
        _.fq)() ? ni(b, 1) * mr(b) : ni(b, 1) : null;
        if (null == h)
            return {
                Wg: e
            };
        b = new tk;
        a = new nr(a,d,c,h,e,f);
        J(b, a);
        b.run();
        return {
            Wg: a.output,
            tm: b
        }
    }
    ;
    yr = function(a, b, c, d, e) {
        var f = window
          , h = new tk
          , k = J(h, new pr(a,b,qr,function(n) {
            return rr("i-adframe-load", n.detail.data)
        }
        ))
          , l = J(h, new pr(a,b,qr,function(n) {
            return rr("i-dismiss", n.detail.data)
        }
        ));
        k = 0 < _.$g(sr) ? J(h, new tr(a,k.output,void 0)).output : k.output;
        k = J(h, new ur(a,b,c,k));
        J(h, new vr(a,f,d,e,k.output));
        if (f.top === f)
            var m = J(h, new wr(a,f,k.output)).output;
        J(h, new xr(a,b,c,k.output,l.output,m));
        return h
    }
    ;
    rr = function(a, b) {
        try {
            var c = JSON.parse(b);
            return "sth" === c.googMsgType && c.msg_type === a
        } catch (d) {}
        return !1
    }
    ;
    zr = function(a, b) {
        a.T.log(576944485, xq, _.x(Object, "assign").call(Object, {}, a, b))
    }
    ;
    Ar = function(a) {
        return window.IntersectionObserver && new IntersectionObserver(a,{
            threshold: [.5]
        })
    }
    ;
    Br = function(a) {
        return Math.max.apply(Math, _.di(null != a ? a : []))
    }
    ;
    Dr = function(a) {
        return (_.H = [4, 5, 7, 1],
        _.x(_.H, "includes")).call(_.H, Cr(a))
    }
    ;
    Fr = function(a, b, c) {
        _.gf(function(d) {
            a.T.log(629394304, function(e) {
                var f = new Er;
                f = _.rj(f, 1, a.pvsid);
                var h = Qg();
                f = _.de(f, 2, h, Ac);
                f = _.aj(f, 3, a.za);
                h = _.xf() - c;
                f = _.wl(f, 6, h);
                f = _.aj(f, 8, b);
                f = _.aj(f, 7, Dl(b));
                return _.rj(f, 5, e.nb)
            }, {});
            d.g = 0
        })
    }
    ;
    Hr = function(a, b, c) {
        return new Gr(c,a,qr,function(d) {
            d = d.detail.data;
            try {
                var e = JSON.parse(d);
                if ("rewarded" === e.type && e.message === b)
                    return e
            } catch (f) {}
            return null
        }
        )
    }
    ;
    Jr = function(a, b, c) {
        a.T.log(576944485, Eq, _.x(Object, "assign").call(Object, {}, a, {
            nb: _.$g(Ir),
            Fm: b,
            Ch: Iq(c)
        }))
    }
    ;
    Lr = function(a) {
        var b = {
            paw_id: Kr(),
            gpa: 0
        };
        a.postMessage(JSON.stringify(b))
    }
    ;
    Nr = function(a, b) {
        var c = new tk;
        a = new Mr(a,b);
        J(c, a);
        c.run();
        return {
            Sm: a.C,
            Ec: a.Ec
        }
    }
    ;
    Qr = function(a, b, c) {
        if (_.x(Object, "keys").call(Object, a).some(function(d) {
            return (_.H = _.x(Object, "values").call(Object, Or),
            _.x(_.H, "includes")).call(_.H, Number(d))
        }))
            return !0;
        Pr("taxonomies", a, b, c);
        return !1
    }
    ;
    Tr = function(a, b, c, d, e) {
        if (null == a)
            Pr("taxonomy", a, d, e);
        else {
            var f = Number(a);
            (_.H = _.x(Object, "values").call(Object, vn),
            _.x(_.H, "includes")).call(_.H, Number(f)) ? a = !0 : (Pr("taxonomy", a, d, e),
            a = !1);
            a && (null == b ? Pr("taxonomyData", b, d, e) : Rr(b, d, e) && Sr(f, b, c, d))
        }
    }
    ;
    bs = function(a, b, c, d, e) {
        if (!Ur(a))
            Pr("taxonomy", a, d, e);
        else if (null == b)
            Pr("taxonomyData", b, d, e);
        else if (Rr(b, d, e) && Vr(_.x(b, "values"), d, b) && (b = Wr(a, _.x(b, "values"), d, b),
        b.size)) {
            b = [].concat(_.di(b));
            e = new Xr;
            var f = Yr.get(a);
            e = _.ci(e, 3, f);
            Zr(c, $r(e, b));
            d.info(as(Un(b), Un(a)))
        }
    }
    ;
    Rr = function(a, b, c) {
        if (mg(a) && a.hasOwnProperty("values"))
            return !0;
        Pr("taxonomyData", a, b, c);
        return !1
    }
    ;
    Sr = function(a, b, c, d) {
        if (Vr(_.x(b, "values"), d, b)) {
            var e = Wr(a, _.x(b, "values"), d, b);
            e.size && (b = (_.H = gk(c, Xr, 1),
            _.x(_.H, "find")).call(_.H, function(f) {
                return _.If(f, 1, 0) === a
            }),
            e = [].concat(_.di(e)),
            b ? $r(b, e) : Zr(c, $r(cs(new Xr, a), e)),
            d.info(as(Un(e), Un(a))))
        }
    }
    ;
    Vr = function(a, b, c) {
        if (Array.isArray(a))
            return !0;
        Pr("taxonomyData.values", a, b, c);
        return !1
    }
    ;
    Wr = function(a, b, c, d) {
        if (!tg()(b))
            return Pr("taxonomyData.values", b, c, d),
            new _.B.Set;
        d = new _.B.Set;
        var e = !1;
        b = _.y(b);
        for (var f = b.next(); !f.done; f = b.next()) {
            f = f.value;
            if (10 <= d.size) {
                e = !0;
                break
            }
            d.add(f)
        }
        e && N(c, ds(Un(a), Un(10)));
        return d
    }
    ;
    Pr = function(a, b, c, d) {
        N(c, Tn("googletag.setConfig.pps", Un(d), a, Un(b)))
    }
    ;
    Ur = function(a) {
        return Yr.has(a)
    }
    ;
    fs = function(a) {
        return es.has(a)
    }
    ;
    js = function(a, b) {
        if (3 === _.gs(b)) {
            var c = {
                Be: new hs
            }
              , d = new tk;
            J(d, new is(a,b,c.Be));
            d.run();
            return {
                Wa: d,
                Xm: c
            }
        }
    }
    ;
    ns = function(a) {
        if (oa()) {
            var b = {
                Ej: new oq
            }
              , c = new tk;
            J(c, new ks(a,window,b.Ej));
            c.run();
            return b
        }
    }
    ;
    qs = function(a, b, c, d, e, f, h) {
        if (b) {
            var k = {
                Ah: new oq
            }
              , l = new tk;
            J(l, new ps(a,b,c,d,k,e,f,h));
            l.run();
            return {
                Wa: l,
                Of: k
            }
        }
    }
    ;
    ts = function(a) {
        ss = a
    }
    ;
    zs = function(a, b, c, d) {
        Ik(b, d, function(e, f) {
            Il(a, e, f);
            var h, k;
            null == (k = (h = window.console).error) || k.call(h, f)
        }, function() {
            return void c.info(us())
        })
    }
    ;
    Ds = function(a, b, c) {
        if (!_.I(As) && !no()) {
            var d = {
                jh: new oq,
                Ib: new oq
            }
              , e = new tk;
            J(e, new Bs(a,b,c,d));
            e.run();
            return {
                Pd: d,
                Wa: e
            }
        }
    }
    ;
    Qa = function(a, b) {
        a: {
            b = b[0];
            a = a[0];
            for (var c = _.Oa, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    b = f;
                    break a
                }
            }
            b = _.Oa(b.length, a.length)
        }
        return b
    }
    ;
    Es = function(a) {
        return Array.isArray(a) && 2 === a.length && "number" === typeof a[0] && _.x(a, "includes").call(a, 0)
    }
    ;
    Is = function(a) {
        if (Es(a))
            return {
                size: [],
                Gh: !0
            };
        if (Array.isArray(a) && 0 < a.length && "number" !== typeof a[0]) {
            var b = !1;
            a = a.filter(function(c) {
                c = Es(c);
                b = b || c;
                return !c
            });
            return {
                size: a,
                Gh: b
            }
        }
        return {
            size: a,
            Gh: !1
        }
    }
    ;
    Ls = function(a, b) {
        var c = b.V;
        return nq(a, function(d) {
            return Js(c[d.getDomId()]).join("&")
        })
    }
    ;
    Js = function(a) {
        a = Ms(a);
        var b = [];
        _.Sn(a, function(c, d) {
            c.length && (c = c.map(encodeURIComponent),
            d = encodeURIComponent(d),
            b.push(d + "=" + c.join()))
        });
        return b
    }
    ;
    Ms = function(a) {
        for (var b = {}, c = _.y(gm(a)), d = c.next(); !d.done; d = c.next())
            d = d.value,
            b[_.u(d, 1)] = nm(d);
        a = $h(a, 8, 2);
        a.length && (null != b.excl_cat || (b.excl_cat = a));
        return b
    }
    ;
    Ps = function(a) {
        var b = !1
          , c = gk(a, jm, 2).map(function(d) {
            var e = _.u(d, 1);
            b = "excl_cat" === e;
            d = nm(d);
            return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
        });
        a = $h(a, 3, 2);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    }
    ;
    Xs = function(a, b) {
        var c, d, e, f, h, k;
        return _.gf(function(l) {
            c = window;
            if (!(null != (d = _.ym(a.X, Rs, 33)) && _.O(d, 3) || _.I(Ss)) || c !== c.top || _.I(Ts) && (e = Us,
            f = e(b, a, c),
            0 <= f && 1 > f))
                return l.return();
            (null == (h = c.scheduler) ? 0 : h.yield) ? l = l.yield(c.scheduler.yield(), 0) : _.I(Vs) && (null == (k = c.scheduler) ? 0 : k.postTask) ? l = l.yield(new _.B.Promise(function(m) {
                return void c.scheduler.postTask(m, {
                    priority: "user-blocking"
                })
            }
            ), 0) : _.I(Ws) ? (l.g = 0,
            l = void 0) : l = l.yield(new _.B.Promise(function(m) {
                c.setTimeout(function() {
                    return void m()
                }, 0)
            }
            ), 0);
            return l
        })
    }
    ;
    Us = function(a, b, c) {
        var d = b.X;
        if (1 !== _.gs(c.document))
            return 0;
        b = b.V[a.getDomId()];
        a = mn(a, b, c.document, uq(d, b));
        b = Em(!0, c);
        d = b.height;
        b = b.width;
        if (!a || -12245933 === a.y || -12245933 === d || -12245933 === b || !d)
            return 0;
        b = 0;
        try {
            b = Ys(c.top.document, c.top).y
        } catch (e) {
            return 0
        }
        c = b + d;
        return a.y < b ? b - a.y / d : a.y > c ? (a.y - c) / d : 0
    }
    ;
    $s = function(a, b, c) {
        var d = window
          , e = !Ug(d.isSecureContext, d.document);
        if (Vg(d.isSecureContext, d, d.document) || !e)
            return e = new tk,
            a = new Zs(a,d,b,c),
            J(e, a),
            e.run(),
            a.j
    }
    ;
    bt = function(a, b, c, d, e, f, h) {
        if (d) {
            var k = {
                Ke: new oq,
                Le: new oq,
                Sd: new oq
            }
              , l = new tk;
            J(l, new at(a,c,b,d,e,k,f,h));
            l.run();
            return {
                Wa: l,
                Kn: k
            }
        }
    }
    ;
    ct = function(a) {
        return "gads_privacy_sandbox_td_buyerlist__" + a
    }
    ;
    et = function(a, b) {
        return a.filter(function(c) {
            return dt(c, 2) > b
        })
    }
    ;
    gt = function(a, b) {
        a = new _.B.Map(a.map(function(e) {
            return [_.u(e, 1), e]
        }));
        b = _.y(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = a.get(_.u(c, 1));
            d ? ft(d, Math.max(dt(c, 2), dt(d, 2))) : a.set(_.u(c, 1), c)
        }
        return _.x(Array, "from").call(Array, _.x(a, "values").call(a))
    }
    ;
    lt = function(a, b, c, d, e) {
        if (ht(b, c, d, e))
            return new _.B.Map;
        c = new _.B.Map(_.x(Object, "entries").call(Object, b).filter(function(l) {
            var m = _.y(l);
            l = m.next().value;
            m = m.next().value;
            return _.x(l, "startsWith").call(l, "gads_privacy_sandbox_td_buyerlist__") && m
        }).map(function(l) {
            var m = _.y(l);
            l = m.next().value;
            m = m.next().value;
            return [l, jt(m)]
        }));
        d = _.y(c);
        for (e = d.next(); !e.done; e = d.next()) {
            var f = _.y(e.value);
            e = f.next().value;
            f = f.next().value;
            var h = gk(f, kt, 1)
              , k = et(h, a);
            0 === k.length ? (c.delete(e),
            b.removeItem(e)) : k.length < h.length && (_.sm(f, 1, k),
            b.setItem(e, fl(f)))
        }
        return c
    }
    ;
    mt = function(a, b, c) {
        return c ? String(_.Xg(b + "-" + fl(a))) : String(_.Xg(b + "-" + _.u(a, 2) + _.u(a, 4) + ("" + _.O(a, 3))))
    }
    ;
    ht = function(a, b, c, d) {
        if (!_.O(b, 3) && !c)
            return !1;
        b = mt(b, d, c);
        if (a.getItem("gads_privacy_sandbox_tcf_hash") === b)
            return !1;
        c = _.y(_.x(Object, "keys").call(Object, a).filter(function(e) {
            return _.x(e, "startsWith").call(e, "gads_privacy_sandbox_td_buyerlist__")
        }));
        for (d = c.next(); !d.done; d = c.next())
            a.removeItem(d.value);
        a.setItem("gads_privacy_sandbox_tcf_hash", b);
        return !0
    }
    ;
    nt = function(a) {
        return null !== a && _.x(Number, "isFinite").call(Number, a) && 0 <= a
    }
    ;
    rt = function(a) {
        var b = _.I(ot)
          , c = a.navigator;
        a = Tg(a.isSecureContext, a.navigator, a.document);
        b = !b && a;
        a = _.$g(pt);
        var d = !!c.getInterestGroupAdAuctionData;
        c = _.I(qt) && !!c.createAuctionNonce;
        return {
            Sh: b,
            wc: a,
            en: d,
            Hk: c
        }
    }
    ;
    st = function(a) {
        return (_.H = ["https://securepubads.g.doubleclick.net", "https://pubads.g.doubleclick.net"],
        _.x(_.H, "includes")).call(_.H, a)
    }
    ;
    ut = function(a, b, c, d, e) {
        if (b) {
            var f = b.wc
              , h = b.en;
            if (b.Sh && 4 === f) {
                b = new oq;
                f = new oq;
                if (!h)
                    return b.G({
                        kind: 1,
                        reason: 1
                    }),
                    f.G(!1),
                    {
                        hk: {
                            Jj: b,
                            Zi: f
                        }
                    };
                h = new tk;
                a = new tt(a,c,d,e,b,f);
                J(h, a);
                h.run();
                return {
                    hk: {
                        Jj: b,
                        Zi: f
                    },
                    Pn: h
                }
            }
        }
    }
    ;
    wt = function(a, b, c) {
        var d = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner"
          , e = _.O(c, 18)
          , f = _.O(c, 7);
        if (f || e)
            d += "&isContextualWinner=1";
        f && (d += "&hasXfpAds=1");
        e = c.getEscapedQemQueryId();
        f = _.u(c, 6);
        e && (d += "&winner_qid=" + encodeURIComponent(e));
        f && (d += "&xfpQid=" + encodeURIComponent(f));
        _.O(c, 4) && (d += "&is_plog=1");
        (e = _.u(c, 11)) && (d += "&ecrs=" + e);
        if (null == c ? 0 : _.u(c, 19))
            d += "&cid=" + encodeURIComponent(_.u(c, 19));
        (null == c ? 0 : _.O(c, 21)) || (d += "&turtlexTest=1");
        d += "&applied_timeout_ms=" + b + ("&duration_ms=" + Math.round(a));
        vt(d)
    }
    ;
    Ct = function(a) {
        var b = a.qg
          , c = a.Mb
          , d = void 0 === a.qd ? [] : a.qd
          , e = a.interestGroupBuyers
          , f = a.Wl
          , h = a.Jl
          , k = a.gn;
        a = a.Gk;
        var l = _.$g(xt)
          , m = {};
        void 0 !== f && (m["https://googleads.g.doubleclick.net"] = f,
        m["https://td.doubleclick.net"] = f);
        if (h) {
            h = _.y(h);
            for (var n = h.next(); !n.done; n = h.next()) {
                var p = _.y(n.value);
                n = p.next().value;
                p = p.next().value;
                m[n] = p
            }
        }
        e = {
            seller: "https://securepubads.g.doubleclick.net",
            decisionLogicUrl: "https://securepubads.g.doubleclick.net/td/sjs",
            trustedScoringSignalsUrl: "https://securepubads.g.doubleclick.net/td/sts",
            interestGroupBuyers: null != e ? e : ["https://googleads.g.doubleclick.net", "https://td.doubleclick.net"],
            sellerExperimentGroupId: f,
            auctionSignals: b.auctionSignals.promise,
            sellerSignals: b.g.promise,
            sellerTimeout: l,
            sellerCurrency: "USD",
            perBuyerCurrencies: b.perBuyerCurrencies.promise,
            perBuyerExperimentGroupIds: m,
            perBuyerSignals: b.perBuyerSignals.promise,
            perBuyerTimeouts: b.perBuyerTimeouts.promise,
            perBuyerCumulativeTimeouts: b.perBuyerCumulativeTimeouts.promise
        };
        e.deprecatedRenderURLReplacements = b.deprecatedRenderURLReplacements.promise;
        yt(e.interestGroupBuyers, a) && (e.auctionReportBuyerKeys = e.interestGroupBuyers.map(zt),
        e.auctionReportBuyers = At(),
        e.auctionReportBuyerDebugModeConfig = Bt());
        k && (e.reportingTimeout = k);
        e.directFromSellerSignalsHeaderAdSlot = b.directFromSellerSignalsHeaderAdSlot.promise;
        c = {
            seller: "https://securepubads.g.doubleclick.net",
            decisionLogicUrl: "https://securepubads.g.doubleclick.net/td/sjs",
            interestGroupBuyers: [],
            auctionSignals: {},
            sellerExperimentGroupId: f,
            sellerSignals: b.topLevelSellerSignals.promise,
            sellerTimeout: l,
            signal: c.signal,
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            perBuyerCumulativeTimeouts: {},
            componentAuctions: [e].concat(_.di(d)),
            resolveToConfig: b.resolveToConfig.promise
        };
        c.directFromSellerSignalsHeaderAdSlot = b.directFromSellerSignalsHeaderAdSlot.promise;
        return c
    }
    ;
    Dt = function(a, b) {
        var c = b.qg;
        c.topLevelSellerSignals.resolve(a.sellerSignals);
        c.directFromSellerSignals.resolve(a.directFromSellerSignals);
        c.directFromSellerSignalsHeaderAdSlot.resolve(a.directFromSellerSignalsHeaderAdSlot);
        c.resolveToConfig.resolve(!!a.resolveToConfig);
        var d;
        a = null == (d = a.componentAuctions) ? void 0 : _.x(d, "find").call(d, function(n) {
            return st(n.seller)
        });
        var e;
        d = null != (e = null == a ? void 0 : a.perBuyerCumulativeTimeouts) ? e : {};
        b = _.y(b.interestGroupBuyers);
        for (e = b.next(); !e.done; e = b.next()) {
            e = e.value;
            var f = void 0
              , h = void 0;
            (null == (f = a) ? 0 : null == (h = f.interestGroupBuyers) ? 0 : _.x(h, "includes").call(h, e)) || (d[e] = 0)
        }
        if (a) {
            c.auctionSignals.resolve(a.auctionSignals);
            c.g.resolve(a.sellerSignals);
            c.perBuyerSignals.resolve(a.perBuyerSignals);
            var k;
            c.perBuyerTimeouts.resolve(null != (k = a.perBuyerTimeouts) ? k : {});
            c.perBuyerCumulativeTimeouts.resolve(d);
            var l;
            c.perBuyerCurrencies.resolve(null != (l = a.perBuyerCurrencies) ? l : {});
            var m;
            c.deprecatedRenderURLReplacements.resolve(null != (m = a.deprecatedRenderURLReplacements) ? m : {})
        } else
            c.auctionSignals.resolve(void 0),
            c.g.resolve(void 0),
            c.perBuyerSignals.resolve({}),
            c.perBuyerTimeouts.resolve({}),
            c.perBuyerCumulativeTimeouts.resolve(d),
            c.perBuyerCurrencies.resolve({}),
            c.deprecatedRenderURLReplacements.resolve({})
    }
    ;
    yt = function(a, b) {
        return a.some(function(c) {
            return zt(c) !== BigInt(100)
        }) && (null != b ? b : !1)
    }
    ;
    zt = function(a) {
        var b;
        return null != (b = (new _.B.Map([["https://googleads.g.doubleclick.net", BigInt(200)], ["https://td.doubleclick.net", BigInt(300)], ["https://f.creativecdn.com", BigInt(400)], ["https://fledge.us.criteo.com", BigInt(500)], ["https://fledge.eu.criteo.com", BigInt(600)], ["https://fledge.as.criteo.com", BigInt(700)], ["https://fledge-buyer-testing-1.uc.r.appspot.com", BigInt(800)]])).get(a)) ? b : BigInt(100)
    }
    ;
    At = function() {
        return {
            interestGroupCount: {
                bucket: BigInt(0),
                scale: 1
            },
            bidCount: {
                bucket: BigInt(1),
                scale: 1
            },
            totalGenerateBidLatency: {
                bucket: BigInt(2),
                scale: 1
            },
            totalSignalsFetchLatency: {
                bucket: BigInt(3),
                scale: 1
            }
        }
    }
    ;
    Bt = function() {
        var a = void 0 === a ? BigInt(0) : a;
        return {
            enabled: !0,
            debugKey: a
        }
    }
    ;
    Et = function(a, b) {
        if (!nt(b))
            return [];
        var c = Math.round(b);
        return a.map(function(d) {
            var e = new kt;
            d = _.aj(e, 1, d);
            return ft(d, c)
        })
    }
    ;
    Ft = function(a, b, c, d, e) {
        a.ec.G(e);
        a.Ha.G(c);
        a.Ja.G(d);
        null == b || b.G(!1)
    }
    ;
    Nt = function(a, b) {
        var c, d, e, f, h, k, l, m, n, p, q, t, w, v;
        return _.gf(function(A) {
            if (1 == A.g)
                return ("string" !== typeof a || _.x(a, "startsWith").call(a, "urn:")) && Gt.deprecatedURNToURL && Gt.deprecatedReplaceInURN ? A.yield(Gt.deprecatedURNToURL(a), 2) : A.return();
            c = A.A;
            d = {};
            e = b.gdprApplies || "";
            (null != (f = c.match(Ht)) ? f : []).forEach(function(z) {
                d[z] = e
            });
            h = b.Ig || "";
            (null != (k = c.match(It)) ? k : []).forEach(function(z) {
                d[z] = h
            });
            l = b.bi || "";
            (null != (m = c.match(Jt)) ? m : []).forEach(function(z) {
                d[z] = l
            });
            n = b.Zh || "";
            (null != (p = c.match(Kt)) ? p : []).forEach(function(z) {
                d[z] = n
            });
            q = b.Xh || "";
            (null != (t = c.match(Lt)) ? t : []).forEach(function(z) {
                d[z] = q
            });
            w = b.Kj || "";
            (null != (v = c.match(Mt)) ? v : []).forEach(function(z) {
                d[z] = w
            });
            return A.yield(Gt.deprecatedReplaceInURN(a, d), 0)
        })
    }
    ;
    Pt = function(a, b) {
        var c, d, e, f, h;
        return _.gf(function(k) {
            if ("string" === typeof a && !_.x(a, "startsWith").call(a, "urn:") || !Gt.deprecatedReplaceInURN)
                return k.return();
            c = {};
            c["${GDPR}"] = b.gdprApplies || "";
            c["${ADDTL_CONSENT}"] = b.bi || "";
            c["${AD_WIDTH}"] = b.Zh || "";
            c["${AD_HEIGHT}"] = b.Xh || "";
            c["${RENDER_DATA}"] = b.Kj || "";
            if (null == b.og || _.O(b.og, 4))
                for (d = 0; 2E3 >= d; d++)
                    c["${GDPR_CONSENT_" + String(d) + "}"] = b.Ig || "";
            else {
                var l = Ot(b.og, 3);
                e = _.y(l);
                for (f = e.next(); !f.done; f = e.next())
                    h = f.value,
                    c["${GDPR_CONSENT_" + String(h) + "}"] = b.Ig || ""
            }
            return k.yield(Gt.deprecatedReplaceInURN(a, c), 0)
        })
    }
    ;
    Qt = function(a) {
        return "function" === typeof FencedFrameConfig && a instanceof FencedFrameConfig
    }
    ;
    Ut = function(a) {
        var b = a.Al;
        var c = a.Kk;
        var d = a.cn;
        var e = a.Yl;
        a = a.nb;
        if ("string" === typeof c || Qt(c))
            c = 4;
        else
            switch (c) {
            case null:
                c = 5;
                break;
            case 2:
                c = 1;
                break;
            case 3:
                c = 3;
                break;
            case 1:
                c = 2;
                break;
            case 4:
            case 0:
                c = 0;
                break;
            default:
                c = 0
            }
        var f = new Rt;
        c = _.K(f, 3, c);
        d = _.aj(c, 2, d);
        b = _.wl(d, 1, b);
        void 0 !== e && _.aj(b, 4, e);
        e = new St;
        void 0 !== a && _.wl(e, 1, a);
        _.xl(e, 3, Tt, b);
        return e
    }
    ;
    Vt = function(a, b, c, d, e, f, h, k) {
        var l = 3 === b
          , m = 2 === b
          , n = 1 === b
          , p = f.getEscapedQemQueryId()
          , q = _.u(f, 6);
        Qp("run_ad_auction_stats", function(t) {
            ep(t, a);
            fp(t, "duration_ms", c);
            fp(t, "applied_timeout_ms", d);
            fp(t, "timed_out", m ? 1 : 0);
            fp(t, "error", l ? 1 : 0);
            fp(t, "auction_skipped", n ? 1 : 0);
            fp(t, "auction_winner", k ? 1 : 0);
            fp(t, "thread_release_only", _.O(f, 15) ? 1 : 0);
            fp(t, "winner_qid", null != p ? p : "");
            fp(t, "xfpQid", null != q ? q : "");
            fp(t, "publisher_tag", "gpt");
            e && fp(t, "parallel", "1");
            0 < h && fp(t, "nc", h)
        }, 1)
    }
    ;
    Wt = function(a, b, c, d, e) {
        var f = e.getEscapedQemQueryId()
          , h = _.u(e, 6);
        Qp("run_ad_auction_complete", function(k) {
            ep(k, a);
            fp(k, "duration_ms", Math.round(d));
            fp(k, "applied_timeout_ms", c);
            fp(k, "auction_has_winner", b);
            f && fp(k, "winner_qid", f);
            h && fp(k, "xfpQid", h)
        }, 1)
    }
    ;
    Xt = function(a, b) {
        var c = b.getEscapedQemQueryId()
          , d = _.u(b, 6);
        Qp("pre_run_ad_auction_ping", function(e) {
            ep(e, a);
            fp(e, "winner_qid", null != c ? c : "");
            fp(e, "xfpQid", null != d ? d : "");
            fp(e, "publisher_tag", "gpt")
        }, 1)
    }
    ;
    du = function(a, b, c, d) {
        var e = gn(a, document);
        e && Gi(e, window, d, !0);
        Yt(_.Ng(Gl), "5", Zt(c.V[a.getDomId()], 20));
        $t(a, au, 801, {
            xi: null,
            isBackfill: !1
        });
        if (_.bu(b, a) && !pn(a, document)) {
            b = c.X;
            c = c.V[a.getDomId()];
            var f;
            (null != (f = tq(c, 10)) ? f : _.O(b, 11)) && Wq(a, document, c, b)
        }
        $t(a, cu, 825, {
            isEmpty: !0
        })
    }
    ;
    fu = function(a) {
        if (!_.I(eu))
            return null;
        var b = new _.B.Set;
        a = _.y(_.x(a, "values").call(a));
        for (var c = a.next(); !c.done; c = a.next())
            c = c.value,
            _.O(c, 2) && gk(c, kt, 1).forEach(function(d) {
                b.add(_.u(d, 1))
            });
        return 0 < b.size ? _.x(Array, "from").call(Array, b) : null
    }
    ;
    hu = function(a, b, c, d, e, f, h, k, l) {
        if (b) {
            var m = b.wc;
            if (b.Sh && 0 !== m)
                return b = new tk,
                a = new gu(a,m,c,d,e,f,h,k,l),
                J(b, a),
                b.run(),
                {
                    On: a.j,
                    Nn: b
                }
        }
    }
    ;
    iu = function() {
        for (var a = _.y(_.x(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b = b.value
              , d = b.src;
            !d || -1 == d.indexOf("/tag/js/gpt.js") && -1 == d.indexOf("/tag/js/gpt_mobile.js") || c.googletag_executed || !b.textContent || (c.googletag_executed = !0,
            c = document.createElement("script"),
            b = new fb(b.textContent),
            gb(c, b),
            document.head.appendChild(c),
            document.head.removeChild(c))
        }
    }
    ;
    ju = function(a, b) {
        b = _.y(_.x(Object, "entries").call(Object, b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.y(c.value);
            c = d.next().value;
            d = d.next().value;
            a.hasOwnProperty(c) || (a[c] = d)
        }
    }
    ;
    zu = function(a, b, c) {
        var d = [];
        c = [].concat(_.di(c.Z)).slice();
        if (b) {
            if (!Array.isArray(b))
                return N(a, Zl("googletag.destroySlots", [b])),
                !1;
            Na(b);
            d = c.filter(function(e) {
                return _.x(b, "includes").call(b, e.g)
            })
        } else
            d = c;
        if (!d.length)
            return !1;
        ku(d);
        lu(d);
        return !0
    }
    ;
    Pu = function(a, b, c, d, e, f, h, k, l, m) {
        var n = Lo(), p, q, t = M(a, 74, function(v, A, z) {
            return e.defineSlot(a, b, v, A, z)
        }), w = {};
        t = (w._loaded_ = !0,
        w.cmd = [],
        w._vars_ = n._vars_,
        w.evalScripts = function() {
            try {
                iu()
            } catch (z) {
                Il(a, 297, z);
                var v, A;
                null == (v = window.console) || null == (A = v.error) || A.call(v, z)
            }
        }
        ,
        w.display = M(a, 95, function(v) {
            Au(c, v, e)
        }),
        w.defineOutOfPageSlot = M(a, 73, function(v, A) {
            return (v = Uq(a, b, e, {
                Ei: A,
                adUnitPath: v
            })) ? v.g : null
        }),
        w.getVersion = M(a, 946, function() {
            return a.tf
        }),
        w.pubads = M(a, 947, function() {
            return wo(a, b, c, e, k)
        }),
        w.companionAds = M(a, 816, function() {
            null != p || (p = new Bu(a,b,c,f));
            return bm(a, b, p)
        }),
        w.content = M(a, 817, function() {
            null != q || (q = new Cu(a,b,h));
            return dm(a, b, q)
        }),
        w.setAdIframeTitle = M(a, 729, ts),
        w.getEventLog = M(a, 945, function() {
            return new Du(a,b)
        }),
        w.sizeMapping = M(a, 90, function() {
            return new Eu(a,b)
        }),
        w.enableServices = M(a, 91, function() {
            for (var v = _.y(Fu), A = v.next(); !A.done; A = v.next())
                A = A.value,
                A.enabled && b.info(Gu()),
                Hu(A)
        }),
        w.destroySlots = M(a, 75, function(v) {
            return zu(b, v, e)
        }),
        w.enums = wn(),
        w.defineSlot = t,
        w.defineUnit = t,
        w.getWindowsThatCanCommunicateWithHostpageLibrary = M(a, 955, function(v) {
            return Iu(l, v).map(function(A) {
                var z;
                return null == (z = pn(A, document)) ? void 0 : z.contentWindow
            }).filter(function(A) {
                return !!A
            })
        }),
        w.disablePublisherConsole = M(a, 93, lp),
        w.onPubConsoleJsLoad = M(a, 731, op),
        w.openConsole = M(a, 732, function(v) {
            gp = !0;
            var A;
            (null == (A = Lo()) ? 0 : A.console) ? Lo().console.openConsole(v) : (v && (np = v),
            mp = !0,
            ap(a))
        }),
        w.setConfig = M(a, 1034, function(v) {
            if (mg(v)) {
                if (_.x(Object, "hasOwn").call(Object, v, "pps")) {
                    var A = v.pps;
                    if (null === A) {
                        var z = _.sj(d, Rs, 33);
                        _.nk(z, 2)
                    } else {
                        z = _.sj(_.sj(d, Rs, 33), Ju, 2);
                        _.nk(z, 1);
                        if (mg(A) && A.hasOwnProperty("taxonomies"))
                            var D = !0;
                        else
                            N(b, Zl("googletag.setConfig.pps", [A])),
                            D = !1;
                        if (D)
                            if (D = A.taxonomies,
                            mg(D) && null !== D) {
                                var E;
                                _.x(Object, "keys").call(Object, D).some(Ur) ? E = bs : Qr(D, b, A) && (E = Tr);
                                if (E) {
                                    A = _.y(_.x(Object, "entries").call(Object, D));
                                    for (var G = A.next(); !G.done; G = A.next()) {
                                        var Q = _.y(G.value);
                                        G = Q.next().value;
                                        Q = Q.next().value;
                                        E(G, Q, z, b, D)
                                    }
                                }
                            } else
                                Pr("taxonomies", D, b, A)
                    }
                }
                _.x(Object, "hasOwn").call(Object, v, "adExpansion") && (_.nk(d, 34),
                z = v.adExpansion,
                !Ku(z)) && (mg(z) ? _.x(Object, "hasOwn").call(Object, z, "enabled") && (z = z.enabled,
                Lu(z) ? (z = Mu(z),
                _.Ph(d, 34, z)) : N(b, Zl("googletag.setConfig.adExpansion.enabled", [z]))) : N(b, Zl("googletag.setConfig.adExpansion", [z])));
                _.x(Object, "hasOwn").call(Object, v, "headerBidding") && (z = v.headerBidding,
                !Ku(z) && mg(z) && _.x(Object, "hasOwn").call(Object, z, "enableHeaderBiddingTraffickingPrebidIntegration") && (z = z.enableHeaderBiddingTraffickingPrebidIntegration,
                Lu(z) && _.Fh(d, 38, z)));
                if (_.x(Object, "hasOwn").call(Object, v, "privacyTreatments")) {
                    v = v.privacyTreatments;
                    _.nk(d, 36);
                    a: {
                        if (null !== v && mg(v) && _.x(Object, "hasOwn").call(Object, v, "treatments")) {
                            v = v.treatments;
                            if (Nu(v) && v.every(fs)) {
                                v = {
                                    treatments: v
                                };
                                break a
                            }
                            N(b, Zl("googletag.setConfig", [v]))
                        }
                        v = void 0
                    }
                    z = v;
                    if (void 0 !== z) {
                        v = new _.B.Set;
                        z = _.y(z.treatments);
                        for (E = z.next(); !E.done; E = z.next()) {
                            E = E.value;
                            a: {
                                switch (E) {
                                case "disablePersonalization":
                                    D = 1;
                                    break a
                                }
                                D = void 0
                            }
                            void 0 === D ? N(b, Zl("googletag.setConfig", [E])) : v.add(D)
                        }
                        v.size && (z = new Ou,
                        v = _.fe(z, 1, _.xc, v),
                        _.Ph(d, 36, v))
                    }
                }
            } else
                N(b, Zl("googletag.setConfig", [v]))
        }),
        w.apiReady = !0,
        w);
        zs(a, n, b, m);
        ju(n, t)
    }
    ;
    Su = function(a, b) {
        var c = new tk;
        b = new Qu(a,b);
        J(c, b);
        a = new Ru(a,b.j);
        J(c, a);
        c.run();
        return {
            md: a.md,
            yd: a.yd,
            ud: a.ud,
            Pb: a.Pb,
            Nd: a.Nd,
            Qd: a.Qd,
            Dc: a.Dc,
            Zb: a.Zb,
            jc: a.jc,
            Kf: a.Kf,
            yp: c
        }
    }
    ;
    gv = function(a, b, c, d, e, f, h, k, l, m, n) {
        var p = new tk
          , q = new Tu(a,b);
        q = J(p, q).output;
        var t = Nr(a, b)
          , w = ns(a);
        b = rt(b);
        if (h) {
            var v = Su(a, h)
              , A = v.Nd
              , z = v.ud
              , D = v.yd
              , E = v.md;
            var G = v.Pb;
            var Q = v.Qd
              , R = v.Dc
              , L = v.Zb;
            v = v.jc;
            var X, da = new Uu(a,document,Lo(),c,d,e,null != (X = window.location.hash) ? X : "");
            J(p, da);
            c = new Vu(a,Lo(),null,c,d,e,A);
            J(p, c);
            d = new Wu(a,z);
            J(p, d);
            m = new Xu(a,window,D,m);
            J(p, m);
            if (k = qq(a, k, E))
                var Y = k.ki;
            h = hr(a, h, m.bc);
            E = h.Hg;
            _.er(p, h.Wa);
            h = new Yu(a,E);
            J(p, h);
            k = new Zu(a,E);
            J(p, k);
            e = Vo(a, e, f, window, E, 2).wb;
            if (_.I($u)) {
                E = new av(a,window.navigator,e);
                var ja = E.j;
                J(p, E)
            }
            E = void 0;
            _.I(bv) && (f = new cv(a,f,window,e),
            E = f.output,
            J(p, f));
            if (f = Ds(a, G, e))
                var ka = f.Pd;
            f = $s(a, q, e);
            X = new tk;
            l = new dv(a,l,n,e,Q);
            J(X, l);
            X.run();
            _.I(ev) && p.g(fv, {}, {
                B: window,
                context: a
            });
            G = {
                Gc: Y,
                Pd: ka,
                wj: m.bc,
                bf: d.output,
                xb: c.xb,
                Pb: G,
                vd: h.vd,
                Li: k.j,
                Dc: R,
                Me: f,
                Eg: E,
                vi: ja,
                Zb: L,
                jc: v
            }
        }
        p.run();
        return {
            Cj: t,
            Fj: w,
            cf: q,
            gk: b,
            de: vq(),
            Ob: G
        }
    }
    ;
    hv = function(a, b, c, d, e, f, h, k, l, m, n) {
        var p = new tk
          , q = new Tu(a,b);
        q = J(p, q).output;
        var t = Nr(a, b)
          , w = ns(a);
        b = rt(b);
        var v, A = new Uu(a,document,Lo(),c,d,e,null != (v = window.location.hash) ? v : "");
        J(p, A);
        if (h) {
            var z = Su(a, h);
            c = new Vu(a,Lo(),null,c,d,e,z.Nd);
            J(p, c);
            d = new Wu(a,z.ud);
            J(p, d);
            m = new Xu(a,window,z.yd,m);
            J(p, m);
            k = qq(a, k, z.md);
            z = _.x(Object, "assign").call(Object, {}, z, {
                xb: c.xb,
                bf: d.output,
                bc: m.bc,
                Gc: null == k ? void 0 : k.ki
            })
        }
        var D;
        h = hr(a, h, null == (D = z) ? void 0 : D.bc);
        k = h.Hg;
        _.er(p, h.Wa);
        D = new Yu(a,k);
        J(p, D);
        h = new Zu(a,k);
        J(p, h);
        e = Vo(a, e, f, window, k, 2).wb;
        if (_.I($u)) {
            k = new av(a,window.navigator,e);
            var E = k.j;
            J(p, k)
        }
        k = void 0;
        _.I(bv) && (f = new cv(a,f,window,e),
        k = f.output,
        J(p, f));
        if (z) {
            if (f = Ds(a, z.Pb, e))
                var G = f.Pd;
            m = z.Qd;
            f = new tk;
            l = new dv(a,l,n,e,m);
            J(f, l);
            f.run()
        }
        a = $s(a, q, e);
        var Q;
        z && (Q = {
            Gc: z.Gc,
            Pd: G,
            wj: z.bc,
            bf: z.bf,
            xb: z.xb,
            Pb: z.Pb,
            vd: D.vd,
            Li: h.j,
            Dc: z.Dc,
            Me: a,
            Eg: k,
            vi: E,
            Zb: z.Zb,
            jc: z.jc
        });
        p.run();
        return {
            Cj: t,
            Fj: w,
            cf: q,
            gk: b,
            de: vq(),
            Ob: Q
        }
    }
    ;
    iv = function(a) {
        if (!a)
            return a;
        var b = a.toString().toLowerCase();
        return -1 < b.indexOf("<!doctype") || -1 < b.indexOf("<html") ? a : ak("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + a + "</body></html>")
    }
    ;
    jv = function(a, b, c, d, e) {
        if (c && null != e && d) {
            var f;
            b = (null != (f = tq(b, 23)) ? f : _.O(a, 31)) ? Math.floor((c.offsetHeight - d) / 2) : 0
        } else
            b = 0;
        return b
    }
    ;
    kv = function(a) {
        var b = {
            threshold: [0, .3, .5, .75, 1]
        };
        return window.IntersectionObserver && new IntersectionObserver(a,b)
    }
    ;
    cw = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v, A, z, D, E) {
        var G = new tk, Q = Em(!0, window), R = l.X, L = l.V[e.getDomId()], X = D.cf, da = D.de.Gd, Y, ja = null == (Y = D.Ob) ? void 0 : Y.Me, ka = new lv(a,window);
        J(G, ka);
        var va = n.height
          , Z = n.width
          , Ja = n.pb
          , hb = n.Qa
          , Fa = n.Zd
          , ya = n.isBackfill
          , Xa = n.yb
          , ib = n.Tl
          , Ub = n.ob
          , Oc = n.fg
          , dc = n.Uh
          , Pc = n.Ug
          , xe = n.lc
          , ye = n.vf
          , ze = n.Yb
          , Vi = n.Ua
          , eg = n.ga
          , fg = n.Bh
          , dh = n.dl
          , eh = n.jg
          , Md = new oq;
        Md.G(q);
        var gg = new mv(a,window.top,Md);
        J(G, gg);
        var Xi = new nv(a,Cr(L),Q.height,Ub,va);
        J(G, Xi);
        var Yi = new ov(a,e,gn(e, p),e.getDomId(),on(e),p.documentElement,Cr(L),k,f);
        pv(G, Yi);
        var rc = Yi.output
          , $i = new qv(a,Vi,Fa,ya,Xa);
        J(G, $i);
        var fh = new rv(a,_.ym(R, sv, 5),L,d);
        J(G, fh);
        var bj = new tv(a,window.location.hash,Q,e.getAdUnitPath(),L,f,Xi.output,Oc,Z,va,$i.output,rc);
        pv(G, bj);
        var Ae = bj.J
          , lf = new uv(a,R,L,Fa,Xa,Ae.wf);
        J(G, lf);
        var Fm = gg.output
          , Gm = Ae.Ha
          , Hm = Ae.Ja;
        if (Tg(window.isSecureContext, window.navigator, window.document) && !_.I(ot) && h) {
            var cj = {
                fd: new hs,
                Ha: new oq,
                Ja: new oq,
                Cd: new oq
            }
              , gh = new tk;
            J(gh, new vv(a,e,Fm,L,k,q,f,Gm,Hm,rc,t,l,z,hb,eg,cj,w,E));
            gh.run();
            var dj = {
                Wa: gh,
                Qn: cj
            }
        } else
            dj = void 0;
        var hh = dj;
        if (hh) {
            _.er(G, hh.Wa);
            var hg = hh.Qn
        }
        var ej, fj, gj = null != (fj = null == (ej = hg) ? void 0 : ej.Ha) ? fj : Ae.Ha, hj, ij, Nd = null != (ij = null == (hj = hg) ? void 0 : hj.Ja) ? ij : Ae.Ja, jj, Od = null == (jj = hg) ? void 0 : jj.fd, kj, Im = null == (kj = hg) ? void 0 : kj.Cd;
        if (_.I(wv))
            var nd = G.g(xv, {
                Tf: rc,
                yb: lf.output,
                size: Nd
            }, {
                slotId: e,
                uc: Cr(L),
                pb: Ja,
                W: p,
                L: k,
                X: R,
                Ea: L,
                ge: G
            }).rd;
        else {
            var lj = new yv(a,e,R,L,Cr(L),p,k,rc,lf.output,Nd,Ja,Od);
            J(G, lj);
            nd = lj.output
        }
        var mj = new zv(a,nd);
        J(G, mj);
        var nj = new Av(a,e,Q,k,mj.output,fh.j,Od);
        J(G, nj);
        var ig = new Bv(a,nj.output,nd,fh.j,Od);
        J(G, ig);
        var ih = new Cv(a,window,Q,e,L,rc,nd,Ja,Nd,Ae.Ve,hb);
        pv(G, ih);
        var jh = new Dv(a,R,L,dc,gj,lf.output);
        J(G, jh);
        var Za = new Ev(a,window,ze,ka.output,Od);
        J(G, Za);
        var kh = new Fv(a,Cr(L),p);
        J(G, kh);
        var mf = new Gv(a,A,Cr(L),Ub,ib,Od);
        J(G, mf);
        var ls = new Hv(a,Pc,Im,Md,Od);
        J(G, ls);
        var ms = window;
        if (_.I(bl) && ja) {
            var oj = new tk;
            J(oj, new Iv(a,ms,eh,ja));
            oj.run();
            var Jm = oj
        } else
            Jm = void 0;
        var Km = Jm;
        Km && _.er(G, Km);
        var os = G.j(Jv, {}, {
            M: l,
            slotId: e
        }).complete
          , kc = new Kv(a,e,k,d,l,v,m,Ja,hb,ya,xe,eg,window,gj,lf.output,ig.output,rc,nd,Nd,jh.output,ih.fd,Za.output,kh.output,mf.output,X,Od,os);
        J(G, kc);
        var rs = new Lv(a,window,e,kc.o,Md);
        J(G, rs);
        var Lm = Cr(L);
        switch (Lm) {
        case 2:
        case 3:
            _.I(Mv) ? J(G, new Nv(a,k,Cr(L),e,window,Ub,kc.j,rc,mf.output,Nd,gg.output)) : J(G, new Ov(a,k,Cr(L),e,window,Ub,kc.j,rc,mf.output,Nd,gg.output));
            break;
        case 5:
            J(G, new Pv(a,e,l.Wd,ib,p,kc.j,rc,gg.output,mf.output,z));
            break;
        case 4:
            var Nm = new Qv(a,e,v,window,kc.j,rc);
            _.er(G, Nm);
            Nm.run();
            break;
        case 7:
            pv(G, yr(a, e, v, kc.j, rc));
            break;
        case 8:
        case 9:
            var vs = kc.j
              , ws = nd
              , xs = window
              , jg = new tk
              , ys = 8 === Lm ? 3 : 4
              , Om = new Rv(a,A);
            J(jg, Om);
            J(jg, new Sv(a,xs,ys,Om.output,vs,ws,Nd));
            jg.run();
            jg && _.er(G, jg)
        }
        var Cs = new Tv(a,e,kc.j,p,v);
        J(G, Cs);
        var pj = new Uv(a,e,Vv(k, e),window.top);
        J(G, pj);
        var Fs = kc.j
          , kg = new tk
          , Gs = J(kg, new pr(a,e,Wv))
          , Hs = J(kg, new Xv(a,p,Fs,Gs.output));
        J(kg, new Yv(a,Hs.output,v,e));
        kg.run();
        _.er(G, kg);
        var Ks = new Zv(a,Vv(k, e),window.top,kc.j,ka.output,pj.output,pj.j);
        J(G, Ks);
        J(G, new $v(a,e,Ja,Fa,kc.j,nd,kc.C));
        var Ns = new aw(a,window,ye,kc.j,nd,rc);
        J(G, Ns);
        var Os = Lo()
          , qj = new tk
          , Qs = new bw(a,p,Os,R,c,b,d,da,dh);
        J(qj, Qs);
        qj.run();
        _.er(G, qj);
        var Qm = new oq;
        Qm.G(fg);
        J(G, new Vu(a,Lo(),R,b,c,d,Qm));
        return G
    }
    ;
    ew = function(a, b, c) {
        var d = null;
        try {
            var e = Ys(b.top.document, b.top).y;
            d = a.map(function(f) {
                var h = c.X
                  , k = c.V[f.getDomId()];
                h = uq(h, k);
                var l;
                f = null == (l = mn(f, k, b.document, h)) ? void 0 : l.y;
                l = Em(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === l ? -1 : f < e + l ? 0 : ++dw
            })
        } catch (f) {}
        return d
    }
    ;
    mw = function(a) {
        return Kl(a.ma.context, 1132, function() {
            if (a.ja.Z.length) {
                var b = new _.B.Set(bh(fw));
                var c = a.ma.ba;
                c = _.I(gw) && _.O(c, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id".split(" ") : [];
                c = _.y(c);
                for (var d = c.next(); !d.done; d = c.next())
                    b.add(d.value);
                d = new _.B.Map;
                c = _.y(hw);
                for (var e = c.next(); !e.done; e = c.next())
                    e = e.value,
                    e(a, d);
                c = "https://" + (iw(a) ? "pagead2.googlesyndication.com" : "securepubads.g.doubleclick.net") + "/gampad/ads?";
                d = _.y(d);
                for (e = d.next(); !e.done; e = d.next()) {
                    var f = _.y(e.value);
                    e = f.next().value;
                    var h = f.next().value;
                    f = h.value;
                    h = void 0 === h.options ? {} : h.options;
                    (new RegExp("[?&]" + e + "=")).test(c);
                    if (!b.has(e) && null != f) {
                        var k = void 0 === h.Fa ? !1 : h.Fa;
                        if (f = "object" !== typeof f ? null == f || !k && 0 === f ? null : encodeURIComponent(f) : Array.isArray(f) && f.length ? jw(f, h) : null)
                            "?" !== c[c.length - 1] && (c += "&"),
                            c += e + "=" + f
                    }
                }
                if (1 === _.$g(kw) || 2 === _.$g(kw))
                    b = _.$g(lw),
                    b = 0 >= b ? "" : (_.H = _.x(Array, "from").call(Array, {
                        length: Math.ceil(b / 8)
                    }),
                    _.x(_.H, "fill")).call(_.H, "testdata").join("").substring(0, b),
                    2 === _.$g(kw) && (c += "&dblt=" + b);
                b = c
            } else
                b = "";
            return b
        })
    }
    ;
    iw = function(a) {
        var b = a.ma.ba, c, d;
        a = null != (d = null == (c = nw(a.ja.M.X)) ? void 0 : _.O(c, 9)) ? d : !1;
        c = _.I(gw) && _.O(b, 8);
        return a || c || !Cg(b)
    }
    ;
    jw = function(a, b) {
        var c = void 0 === b.Ya ? "," : b.Ya
          , d = void 0 === b.ee ? "" : b.ee
          , e = void 0 === b.Fa ? !1 : b.Fa
          , f = !1;
        a = a.map(function(h) {
            f || (f = !!h);
            return String(0 === h && e ? h : h || d)
        });
        return f || e ? encodeURIComponent(a.join(c)) : null
    }
    ;
    qw = function() {
        var a = _.$g(ow);
        switch (a) {
        case 0:
            return oa() && pw(window.fetch) && pw(window.TextDecoderStream);
        case 1:
            return oa() && pw(window.fetch) && !!window.TextDecoderStream;
        case 2:
            return oa() && !!window.fetch && !!window.TextDecoderStream;
        case 3:
            return !na() && pw(window.fetch) && !!window.TextDecoderStream;
        case 4:
            return !na() && !!window.fetch && !!window.TextDecoderStream;
        case 5:
            return pw(window.fetch) && !!window.TextDecoderStream;
        case 6:
            return !!window.fetch && !!window.TextDecoderStream;
        default:
            db(a)
        }
    }
    ;
    rw = function(a) {
        var b = a;
        return function() {
            var c = _.za.apply(0, arguments);
            if (b) {
                var d = b;
                b = null;
                d.apply(null, _.di(c))
            }
        }
    }
    ;
    tw = function(a) {
        var b = null
          , c = 0
          , d = 0;
        return function() {
            var e, f, h, k;
            return _.gf(function(l) {
                if (1 == l.g)
                    return c && clearTimeout(c),
                    c = 0,
                    e = new _.th,
                    f = rw(e.resolve),
                    h = ++d,
                    l.yield(0, 2);
                if (d !== h)
                    return f(!1),
                    l.return(e.promise);
                b ? b(!1) : f(!0);
                k = rw(function() {
                    b = null;
                    c = 0;
                    f(!0)
                });
                c = setTimeout(k, _.$g(sw));
                _.Cp(a, function() {
                    return void f(!1)
                });
                b = f;
                return l.return(e.promise)
            })
        }
    }
    ;
    uw = function(a) {
        var b = 0
          , c = null
          , d = 0
          , e = 0;
        return function() {
            var f, h, k, l, m, n;
            return _.gf(function(p) {
                if (1 == p.g)
                    return f = new _.th,
                    h = rw(f.resolve),
                    k = ++e,
                    p.yield(0, 2);
                if (e !== k)
                    return h(!1),
                    p.return(f.promise);
                null == (l = c) || l(!1);
                m = rw(function() {
                    b = (new Date).getTime();
                    c = null;
                    d = 0;
                    h(!0)
                });
                d && clearTimeout(d);
                n = (new Date).getTime() - b;
                n > _.$g(sw) ? m() : (d = setTimeout(m, _.$g(sw) - n),
                _.Cp(a, function() {
                    return void h(!1)
                }),
                c = h);
                return p.return(f.promise)
            })
        }
    }
    ;
    vw = function(a, b) {
        var c = [];
        a = Va(a, function(f) {
            return Dl(f.getAdUnitPath())
        });
        a = _.y(_.x(Object, "entries").call(Object, a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = _.y(d.value);
            d = e.next().value;
            e = e.next().value;
            d === b ? c.unshift({
                networkCode: d,
                Z: e
            }) : c.push({
                networkCode: d,
                Z: e
            })
        }
        return c
    }
    ;
    Dw = function() {
        var a = new ww;
        var b = (new xw).setCorrelator(ck(_.ca));
        var c = Qg().join();
        b = _.aj(b, 5, c);
        b = _.K(b, 2, 1);
        a = _.Ph(a, 1, b);
        b = new yw;
        c = _.I(zw);
        b = _.vl(b, 7, c);
        c = _.I(Aw);
        b = _.vl(b, 8, c);
        c = _.I(Bw);
        b = _.vl(b, 9, c);
        b = _.vl(b, 10, !0);
        c = _.I(Cw);
        b = _.vl(b, 13, c);
        b = _.vl(b, 16, !0);
        a = _.Ph(a, 2, b);
        window.google_rum_config = a.toJSON()
    }
    ;
    Hw = function() {
        var a = _.I(Ew) ? _.af(Fw) : _.af(Gw);
        _.ip(document, a)
    }
    ;
    Lw = function(a, b) {
        var c = Iw() || Jw() ? 1 : _.Wg()
          , d = .001 > c;
        d ? (b.F = !0,
        Pg(31067358)) : .002 > c && Pg(31067357);
        Yn(23, a);
        if (!_.I(Kw)) {
            var e = 10;
            var f = c < 1 / e
        }
        return {
            Kh: d,
            Ag: 1E3,
            sn: f,
            bn: e,
            oc: c
        }
    }
    ;
    Pw = function(a, b) {
        var c = window.document.URL
          , d = new Mw(4,b.Na,1E3)
          , e = new Nw(vp(),d,a.oc);
        return _.x(Object, "assign").call(Object, {}, b, a, {
            Cp: new Ow(b)
        }, {
            xa: d,
            za: c,
            T: e
        })
    }
    ;
    _.aa = [];
    Qw = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    ;
    Rw = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    ;
    Sw = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }
    ;
    _.Tw = Sw(this);
    Uw = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    _.B = {};
    Vw = {};
    _.x = function(a, b, c) {
        if (!c || null != a) {
            c = Vw[b];
            if (null == c)
                return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
    }
    ;
    Ww = function(a, b, c) {
        if (b)
            a: {
                var d = a.split(".");
                a = 1 === d.length;
                var e = d[0], f;
                !a && e in _.B ? f = _.B : f = _.Tw;
                for (e = 0; e < d.length - 1; e++) {
                    var h = d[e];
                    if (!(h in f))
                        break a;
                    f = f[h]
                }
                d = d[d.length - 1];
                c = Uw && "es6" === c ? f[d] : null;
                b = b(c);
                null != b && (a ? Rw(_.B, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (void 0 === Vw[d] && (a = 1E9 * Math.random() >>> 0,
                Vw[d] = Uw ? _.Tw.Symbol(d) : "$jscp$" + a + "$" + d),
                Rw(f, Vw[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
    }
    ;
    Ww("Symbol", function(a) {
        if (a)
            return a;
        var b = function(f, h) {
            this.g = f;
            Rw(this, "description", {
                configurable: !0,
                writable: !0,
                value: h
            })
        };
        b.prototype.toString = function() {
            return this.g
        }
        ;
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_"
          , d = 0
          , e = function(f) {
            if (this instanceof e)
                throw new TypeError("Symbol is not a constructor");
            return new b(c + (f || "") + "_" + d++,f)
        };
        return e
    }, "es6");
    Ww("Symbol.iterator", function(a) {
        if (a)
            return a;
        a = (0,
        _.B.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = _.Tw[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && Rw(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return Xw(Qw(this))
                }
            })
        }
        return a
    }, "es6");
    Xw = function(a) {
        a = {
            next: a
        };
        a[_.x(_.B.Symbol, "iterator")] = function() {
            return this
        }
        ;
        return a
    }
    ;
    _.Yw = function(a) {
        return a.raw = a
    }
    ;
    Zw = function(a, b) {
        a.raw = b;
        return a
    }
    ;
    _.y = function(a) {
        var b = "undefined" != typeof _.B.Symbol && _.x(_.B.Symbol, "iterator") && a[_.x(_.B.Symbol, "iterator")];
        if (b)
            return b.call(a);
        if ("number" == typeof a.length)
            return {
                next: Qw(a)
            };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }
    ;
    _.di = function(a) {
        if (!(a instanceof Array)) {
            a = _.y(a);
            for (var b, c = []; !(b = a.next()).done; )
                c.push(b.value);
            a = c
        }
        return a
    }
    ;
    $w = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;
    ax = Uw && "function" == typeof _.x(Object, "assign") ? _.x(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d)
                    $w(d, e) && (a[e] = d[e])
        }
        return a
    }
    ;
    Ww("Object.assign", function(a) {
        return a || ax
    }, "es6");
    var bx = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , cx = function() {
        function a() {
            function c() {}
            new c;
            Reflect.construct(c, [], function() {});
            return new c instanceof c
        }
        if (Uw && "undefined" != typeof Reflect && Reflect.construct) {
            if (a())
                return Reflect.construct;
            var b = Reflect.construct;
            return function(c, d, e) {
                c = b(c, d);
                e && Reflect.setPrototypeOf(c, e.prototype);
                return c
            }
        }
        return function(c, d, e) {
            void 0 === e && (e = c);
            e = bx(e.prototype || Object.prototype);
            return Function.prototype.apply.call(c, e, d) || e
        }
    }(), dx;
    if (Uw && "function" == typeof _.x(Object, "setPrototypeOf"))
        dx = _.x(Object, "setPrototypeOf");
    else {
        var ex;
        a: {
            var fx = {
                a: !0
            }
              , gx = {};
            try {
                gx.__proto__ = fx;
                ex = gx.a;
                break a
            } catch (a) {}
            ex = !1
        }
        dx = ex ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    hx = dx;
    _.P = function(a, b) {
        a.prototype = bx(b.prototype);
        a.prototype.constructor = a;
        if (hx)
            hx(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Fn = b.prototype
    }
    ;
    ix = function() {
        this.F = !1;
        this.j = null;
        this.A = void 0;
        this.g = 1;
        this.o = this.l = 0;
        this.K = null
    }
    ;
    jx = function(a) {
        if (a.F)
            throw new TypeError("Generator is already running");
        a.F = !0
    }
    ;
    ix.prototype.I = function(a) {
        this.A = a
    }
    ;
    var kx = function(a, b) {
        a.K = {
            exception: b,
            im: !0
        };
        a.g = a.l || a.o
    };
    ix.prototype.return = function(a) {
        this.K = {
            return: a
        };
        this.g = this.o
    }
    ;
    ix.prototype.yield = function(a, b) {
        this.g = b;
        return {
            value: a
        }
    }
    ;
    jf = function(a) {
        a.l = 0;
        var b = a.K.exception;
        a.K = null;
        return b
    }
    ;
    lx = function(a) {
        this.g = new ix;
        this.A = a
    }
    ;
    ox = function(a, b) {
        jx(a.g);
        var c = a.g.j;
        if (c)
            return mx(a, "return"in c ? c["return"] : function(d) {
                return {
                    value: d,
                    done: !0
                }
            }
            , b, a.g.return);
        a.g.return(b);
        return nx(a)
    }
    ;
    mx = function(a, b, c, d) {
        try {
            var e = b.call(a.g.j, c);
            if (!(e instanceof Object))
                throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done)
                return a.g.F = !1,
                e;
            var f = e.value
        } catch (h) {
            return a.g.j = null,
            kx(a.g, h),
            nx(a)
        }
        a.g.j = null;
        d.call(a.g, f);
        return nx(a)
    }
    ;
    nx = function(a) {
        for (; a.g.g; )
            try {
                var b = a.A(a.g);
                if (b)
                    return a.g.F = !1,
                    {
                        value: b.value,
                        done: !1
                    }
            } catch (c) {
                a.g.A = void 0,
                kx(a.g, c)
            }
        a.g.F = !1;
        if (a.g.K) {
            b = a.g.K;
            a.g.K = null;
            if (b.im)
                throw b.exception;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }
    ;
    px = function(a) {
        this.next = function(b) {
            jx(a.g);
            a.g.j ? b = mx(a, a.g.j.next, b, a.g.I) : (a.g.I(b),
            b = nx(a));
            return b
        }
        ;
        this.throw = function(b) {
            jx(a.g);
            a.g.j ? b = mx(a, a.g.j["throw"], b, a.g.I) : (kx(a.g, b),
            b = nx(a));
            return b
        }
        ;
        this.return = function(b) {
            return ox(a, b)
        }
        ;
        this[_.x(_.B.Symbol, "iterator")] = function() {
            return this
        }
    }
    ;
    qx = function(a) {
        function b(d) {
            return a.next(d)
        }
        function c(d) {
            return a.throw(d)
        }
        return new _.B.Promise(function(d, e) {
            function f(h) {
                h.done ? d(h.value) : _.B.Promise.resolve(h.value).then(b, c).then(f, e)
            }
            f(a.next())
        }
        )
    }
    ;
    _.gf = function(a) {
        return qx(new px(new lx(a)))
    }
    ;
    _.za = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    }
    ;
    Ww("Reflect", function(a) {
        return a ? a : {}
    }, "es6");
    Ww("Reflect.construct", function() {
        return cx
    }, "es6");
    Ww("Reflect.setPrototypeOf", function(a) {
        return a ? a : hx ? function(b, c) {
            try {
                return hx(b, c),
                !0
            } catch (d) {
                return !1
            }
        }
        : null
    }, "es6");
    Ww("Promise", function(a) {
        function b() {
            this.g = null
        }
        function c(h) {
            return h instanceof e ? h : new e(function(k) {
                k(h)
            }
            )
        }
        if (a)
            return a;
        b.prototype.A = function(h) {
            if (null == this.g) {
                this.g = [];
                var k = this;
                this.l(function() {
                    k.K()
                })
            }
            this.g.push(h)
        }
        ;
        var d = _.Tw.setTimeout;
        b.prototype.l = function(h) {
            d(h, 0)
        }
        ;
        b.prototype.K = function() {
            for (; this.g && this.g.length; ) {
                var h = this.g;
                this.g = [];
                for (var k = 0; k < h.length; ++k) {
                    var l = h[k];
                    h[k] = null;
                    try {
                        l()
                    } catch (m) {
                        this.j(m)
                    }
                }
            }
            this.g = null
        }
        ;
        b.prototype.j = function(h) {
            this.l(function() {
                throw h;
            })
        }
        ;
        var e = function(h) {
            this.A = 0;
            this.l = void 0;
            this.g = [];
            this.I = !1;
            var k = this.j();
            try {
                h(k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.j = function() {
            function h(m) {
                return function(n) {
                    l || (l = !0,
                    m.call(k, n))
                }
            }
            var k = this
              , l = !1;
            return {
                resolve: h(this.Ma),
                reject: h(this.K)
            }
        }
        ;
        e.prototype.Ma = function(h) {
            if (h === this)
                this.K(new TypeError("A Promise cannot resolve to itself"));
            else if (h instanceof e)
                this.O(h);
            else {
                a: switch (typeof h) {
                case "object":
                    var k = null != h;
                    break a;
                case "function":
                    k = !0;
                    break a;
                default:
                    k = !1
                }
                k ? this.J(h) : this.F(h)
            }
        }
        ;
        e.prototype.J = function(h) {
            var k = void 0;
            try {
                k = h.then
            } catch (l) {
                this.K(l);
                return
            }
            "function" == typeof k ? this.U(k, h) : this.F(h)
        }
        ;
        e.prototype.K = function(h) {
            this.o(2, h)
        }
        ;
        e.prototype.F = function(h) {
            this.o(1, h)
        }
        ;
        e.prototype.o = function(h, k) {
            if (0 != this.A)
                throw Error("Cannot settle(" + h + ", " + k + "): Promise already settled in state" + this.A);
            this.A = h;
            this.l = k;
            2 === this.A && this.fa();
            this.C()
        }
        ;
        e.prototype.fa = function() {
            var h = this;
            d(function() {
                if (h.H()) {
                    var k = _.Tw.console;
                    "undefined" !== typeof k && k.error(h.l)
                }
            }, 1)
        }
        ;
        e.prototype.H = function() {
            if (this.I)
                return !1;
            var h = _.Tw.CustomEvent
              , k = _.Tw.Event
              , l = _.Tw.dispatchEvent;
            if ("undefined" === typeof l)
                return !0;
            "function" === typeof h ? h = new h("unhandledrejection",{
                cancelable: !0
            }) : "function" === typeof k ? h = new k("unhandledrejection",{
                cancelable: !0
            }) : (h = _.Tw.document.createEvent("CustomEvent"),
            h.initCustomEvent("unhandledrejection", !1, !0, h));
            h.promise = this;
            h.reason = this.l;
            return l(h)
        }
        ;
        e.prototype.C = function() {
            if (null != this.g) {
                for (var h = 0; h < this.g.length; ++h)
                    f.A(this.g[h]);
                this.g = null
            }
        }
        ;
        var f = new b;
        e.prototype.O = function(h) {
            var k = this.j();
            h.Ze(k.resolve, k.reject)
        }
        ;
        e.prototype.U = function(h, k) {
            var l = this.j();
            try {
                h.call(k, l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        }
        ;
        e.prototype.then = function(h, k) {
            function l(q, t) {
                return "function" == typeof q ? function(w) {
                    try {
                        m(q(w))
                    } catch (v) {
                        n(v)
                    }
                }
                : t
            }
            var m, n, p = new e(function(q, t) {
                m = q;
                n = t
            }
            );
            this.Ze(l(h, m), l(k, n));
            return p
        }
        ;
        e.prototype.catch = function(h) {
            return this.then(void 0, h)
        }
        ;
        e.prototype.Ze = function(h, k) {
            function l() {
                switch (m.A) {
                case 1:
                    h(m.l);
                    break;
                case 2:
                    k(m.l);
                    break;
                default:
                    throw Error("Unexpected state: " + m.A);
                }
            }
            var m = this;
            null == this.g ? f.A(l) : this.g.push(l);
            this.I = !0
        }
        ;
        e.resolve = c;
        e.reject = function(h) {
            return new e(function(k, l) {
                l(h)
            }
            )
        }
        ;
        e.race = function(h) {
            return new e(function(k, l) {
                for (var m = _.y(h), n = m.next(); !n.done; n = m.next())
                    c(n.value).Ze(k, l)
            }
            )
        }
        ;
        e.all = function(h) {
            var k = _.y(h)
              , l = k.next();
            return l.done ? c([]) : new e(function(m, n) {
                function p(w) {
                    return function(v) {
                        q[w] = v;
                        t--;
                        0 == t && m(q)
                    }
                }
                var q = []
                  , t = 0;
                do
                    q.push(void 0),
                    t++,
                    c(l.value).Ze(p(q.length - 1), n),
                    l = k.next();
                while (!l.done)
            }
            )
        }
        ;
        return e
    }, "es6");
    Ww("Object.setPrototypeOf", function(a) {
        return a || hx
    }, "es6");
    var rx = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a))
                return {
                    Yi: e,
                    mk: f
                }
        }
        return {
            Yi: -1,
            mk: void 0
        }
    };
    Ww("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return rx(this, b, c).mk
        }
    }, "es6");
    Ww("WeakMap", function(a) {
        function b() {}
        function c(h) {
            var k = typeof h;
            return "object" === k && null !== h || "function" === k
        }
        if (function() {
            if (!a || !Object.seal)
                return !1;
            try {
                var h = Object.seal({})
                  , k = Object.seal({})
                  , l = new a([[h, 2], [k, 3]]);
                if (2 != l.get(h) || 3 != l.get(k))
                    return !1;
                l.delete(h);
                l.set(k, 4);
                return !l.has(h) && 4 == l.get(k)
            } catch (m) {
                return !1
            }
        }())
            return a;
        var d = "$jscomp_hidden_" + Math.random()
          , e = 0
          , f = function(h) {
            this.g = (e += Math.random() + 1).toString();
            if (h) {
                h = _.y(h);
                for (var k; !(k = h.next()).done; )
                    k = k.value,
                    this.set(k[0], k[1])
            }
        };
        f.prototype.set = function(h, k) {
            if (!c(h))
                throw Error("Invalid WeakMap key");
            if (!$w(h, d)) {
                var l = new b;
                Rw(h, d, {
                    value: l
                })
            }
            if (!$w(h, d))
                throw Error("WeakMap key fail: " + h);
            h[d][this.g] = k;
            return this
        }
        ;
        f.prototype.get = function(h) {
            return c(h) && $w(h, d) ? h[d][this.g] : void 0
        }
        ;
        f.prototype.has = function(h) {
            return c(h) && $w(h, d) && $w(h[d], this.g)
        }
        ;
        f.prototype.delete = function(h) {
            return c(h) && $w(h, d) && $w(h[d], this.g) ? delete h[d][this.g] : !1
        }
        ;
        return f
    }, "es6");
    Ww("Map", function(a) {
        if (function() {
            if (!a || "function" != typeof a || !_.x(a.prototype, "entries") || "function" != typeof Object.seal)
                return !1;
            try {
                var k = Object.seal({
                    x: 4
                })
                  , l = new a(_.y([[k, "s"]]));
                if ("s" != l.get(k) || 1 != l.size || l.get({
                    x: 4
                }) || l.set({
                    x: 4
                }, "t") != l || 2 != l.size)
                    return !1;
                var m = _.x(l, "entries").call(l)
                  , n = m.next();
                if (n.done || n.value[0] != k || "s" != n.value[1])
                    return !1;
                n = m.next();
                return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0
            } catch (p) {
                return !1
            }
        }())
            return a;
        var b = new _.B.WeakMap
          , c = function(k) {
            this[0] = {};
            this[1] = f();
            this.size = 0;
            if (k) {
                k = _.y(k);
                for (var l; !(l = k.next()).done; )
                    l = l.value,
                    this.set(l[0], l[1])
            }
        };
        c.prototype.set = function(k, l) {
            k = 0 === k ? 0 : k;
            var m = d(this, k);
            m.list || (m.list = this[0][m.id] = []);
            m.bb ? m.bb.value = l : (m.bb = {
                next: this[1],
                ic: this[1].ic,
                head: this[1],
                key: k,
                value: l
            },
            m.list.push(m.bb),
            this[1].ic.next = m.bb,
            this[1].ic = m.bb,
            this.size++);
            return this
        }
        ;
        c.prototype.delete = function(k) {
            k = d(this, k);
            return k.bb && k.list ? (k.list.splice(k.index, 1),
            k.list.length || delete this[0][k.id],
            k.bb.ic.next = k.bb.next,
            k.bb.next.ic = k.bb.ic,
            k.bb.head = null,
            this.size--,
            !0) : !1
        }
        ;
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].ic = f();
            this.size = 0
        }
        ;
        c.prototype.has = function(k) {
            return !!d(this, k).bb
        }
        ;
        c.prototype.get = function(k) {
            return (k = d(this, k).bb) && k.value
        }
        ;
        c.prototype.entries = function() {
            return e(this, function(k) {
                return [k.key, k.value]
            })
        }
        ;
        c.prototype.keys = function() {
            return e(this, function(k) {
                return k.key
            })
        }
        ;
        c.prototype.values = function() {
            return e(this, function(k) {
                return k.value
            })
        }
        ;
        c.prototype.forEach = function(k, l) {
            for (var m = _.x(this, "entries").call(this), n; !(n = m.next()).done; )
                n = n.value,
                k.call(l, n[1], n[0], this)
        }
        ;
        c.prototype[_.x(_.B.Symbol, "iterator")] = _.x(c.prototype, "entries");
        var d = function(k, l) {
            var m = l && typeof l;
            "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++h,
            b.set(l, m)) : m = "p_" + l;
            var n = k[0][m];
            if (n && $w(k[0], m))
                for (k = 0; k < n.length; k++) {
                    var p = n[k];
                    if (l !== l && p.key !== p.key || l === p.key)
                        return {
                            id: m,
                            list: n,
                            index: k,
                            bb: p
                        }
                }
            return {
                id: m,
                list: n,
                index: -1,
                bb: void 0
            }
        }
          , e = function(k, l) {
            var m = k[1];
            return Xw(function() {
                if (m) {
                    for (; m.head != k[1]; )
                        m = m.ic;
                    for (; m.next != m.head; )
                        return m = m.next,
                        {
                            done: !1,
                            value: l(m)
                        };
                    m = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }
          , f = function() {
            var k = {};
            return k.ic = k.next = k.head = k
        }
          , h = 0;
        return c
    }, "es6");
    var sx = function(a, b, c) {
        if (null == a)
            throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    Ww("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = sx(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c; )
                if (d[--c] != b[--e])
                    return !1;
            return 0 >= e
        }
    }, "es6");
    var tx = function(a, b) {
        a instanceof String && (a += "");
        var c = 0
          , d = !1
          , e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
        e[_.x(_.B.Symbol, "iterator")] = function() {
            return e
        }
        ;
        return e
    };
    Ww("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return tx(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    Ww("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return tx(this, function(b) {
                return b
            })
        }
    }, "es6");
    Ww("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = sx(this, b, "startsWith")
              , e = d.length
              , f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var h = 0; h < f && c < e; )
                if (d[c++] != b[h++])
                    return !1;
            return h >= f
        }
    }, "es6");
    Ww("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    Ww("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = sx(this, null, "repeat");
            if (0 > b || 1342177279 < b)
                throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b; )
                if (b & 1 && (d += c),
                b >>>= 1)
                    c += c;
            return d
        }
    }, "es6");
    Ww("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    Ww("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || _.x(Object, "is").call(Object, f, b))
                    return !0
            }
            return !1
        }
    }, "es7");
    Ww("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== sx(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    Ww("Array.prototype.values", function(a) {
        return a ? a : function() {
            return tx(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    Ww("Set", function(a) {
        if (function() {
            if (!a || "function" != typeof a || !_.x(a.prototype, "entries") || "function" != typeof Object.seal)
                return !1;
            try {
                var c = Object.seal({
                    x: 4
                })
                  , d = new a(_.y([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                    x: 4
                }) != d || 2 != d.size)
                    return !1;
                var e = _.x(d, "entries").call(d)
                  , f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c)
                    return !1;
                f = e.next();
                return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (h) {
                return !1
            }
        }())
            return a;
        var b = function(c) {
            this.g = new _.B.Map;
            if (c) {
                c = _.y(c);
                for (var d; !(d = c.next()).done; )
                    this.add(d.value)
            }
            this.size = this.g.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        }
        ;
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        }
        ;
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        }
        ;
        b.prototype.has = function(c) {
            return this.g.has(c)
        }
        ;
        b.prototype.entries = function() {
            return _.x(this.g, "entries").call(this.g)
        }
        ;
        b.prototype.values = function() {
            return _.x(this.g, "values").call(this.g)
        }
        ;
        b.prototype.keys = _.x(b.prototype, "values");
        b.prototype[_.x(_.B.Symbol, "iterator")] = _.x(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        }
        ;
        return b
    }, "es6");
    Ww("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return rx(this, b, c).Yi
        }
    }, "es6");
    Ww("Array.prototype.flatMap", function(a) {
        return a ? a : function(b, c) {
            var d = [];
            Array.prototype.forEach.call(this, function(e, f) {
                e = b.call(c, e, f, this);
                Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
            });
            return d
        }
    }, "es9");
    Ww("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                $w(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    Ww("Number.EPSILON", function() {
        return Math.pow(2, -52)
    }, "es6");
    Ww("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    }, "es6");
    Ww("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return _.x(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    Ww("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return _.x(Number, "isInteger").call(Number, b) && Math.abs(b) <= _.x(Number, "MAX_SAFE_INTEGER")
        }
    }, "es6");
    Ww("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b)
                return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    }, "es6");
    Ww("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                $w(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    Ww("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    Ww("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(k) {
                return k
            }
            ;
            var e = []
              , f = "undefined" != typeof _.B.Symbol && _.x(_.B.Symbol, "iterator") && b[_.x(_.B.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var h = 0; !(f = b.next()).done; )
                    e.push(c.call(d, f.value, h++))
            } else
                for (f = b.length,
                h = 0; h < f; h++)
                    e.push(c.call(d, b[h], h));
            return e
        }
    }, "es6");
    Ww("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e)
                d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++)
                this[c] = b;
            return this
        }
    }, "es6");
    var ux = function(a) {
        return a ? a : _.x(Array.prototype, "fill")
    };
    Ww("Int8Array.prototype.fill", ux, "es6");
    Ww("Uint8Array.prototype.fill", ux, "es6");
    Ww("Uint8ClampedArray.prototype.fill", ux, "es6");
    Ww("Int16Array.prototype.fill", ux, "es6");
    Ww("Uint16Array.prototype.fill", ux, "es6");
    Ww("Int32Array.prototype.fill", ux, "es6");
    Ww("Uint32Array.prototype.fill", ux, "es6");
    Ww("Float32Array.prototype.fill", ux, "es6");
    Ww("Float64Array.prototype.fill", ux, "es6");
    Ww("globalThis", function(a) {
        return a || _.Tw
    }, "es_2020");
    var vx = function(a, b) {
        a = void 0 !== a ? String(a) : " ";
        return 0 < b && a ? _.x(a, "repeat").call(a, Math.ceil(b / a.length)).substring(0, b) : ""
    };
    Ww("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = sx(this, null, "padStart");
            return vx(c, b - d.length) + d
        }
    }, "es8");
    Ww("String.prototype.padEnd", function(a) {
        return a ? a : function(b, c) {
            var d = sx(this, null, "padStart");
            return d + vx(c, b - d.length)
        }
    }, "es8");
    Ww("AggregateError", function(a) {
        if (a)
            return a;
        a = function(b, c) {
            c = Error(c);
            "stack"in c && (this.stack = c.stack);
            this.errors = b;
            this.message = c.message
        }
        ;
        _.P(a, Error);
        a.prototype.name = "AggregateError";
        return a
    }, "es_2021");
    Ww("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : _.x(Array, "from").call(Array, b);
            return _.B.Promise.all(b.map(function(c) {
                return _.B.Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new _.B.AggregateError(c,"All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    Ww("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(_.x(_.B.Symbol, "iterator")in b))
                throw new TypeError("" + b + " is not iterable");
            b = b[_.x(_.B.Symbol, "iterator")].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d)
                    throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    }, "es_2019");
    Ww("Object.hasOwn", function(a) {
        return a ? a : function(b, c) {
            return Object.prototype.hasOwnProperty.call(b, c)
        }
    }, "es_next");
    Ww("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return _.B.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return _.B.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    Ww("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = void 0 === b ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function(d) {
                Array.isArray(d) && 0 < b ? (d = _.x(Array.prototype, "flat").call(d, b - 1),
                c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    }, "es9");
    Ww("String.raw", function(a) {
        return a ? a : function(b, c) {
            if (null == b)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var d = b.raw, e = d.length, f = "", h = 0; h < e; ++h)
                f += d[h],
                h + 1 < e && h + 1 < arguments.length && (f += String(arguments[h + 1]));
            return f
        }
    }, "es6");
    Ww("Math.sign", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            return 0 === b || isNaN(b) ? b : 0 < b ? 1 : -1
        }
    }, "es6");
    Ww("String.fromCodePoint", function(a) {
        return a ? a : function(b) {
            for (var c = "", d = 0; d < arguments.length; d++) {
                var e = Number(arguments[d]);
                if (0 > e || 1114111 < e || e !== Math.floor(e))
                    throw new RangeError("invalid_code_point " + e);
                65535 >= e ? c += String.fromCharCode(e) : (e -= 65536,
                c += String.fromCharCode(e >>> 10 & 1023 | 55296),
                c += String.fromCharCode(e & 1023 | 56320))
            }
            return c
        }
    }, "es6");
    var wx, sc, xx, yx, zx, Ax;
    _.ca = this || self;
    wx = function(a) {
        a: {
            var b = ["CLOSURE_FLAGS"];
            for (var c = _.ca, d = 0; d < b.length; d++)
                if (c = c[b[d]],
                null == c) {
                    b = null;
                    break a
                }
            b = c
        }
        a = b && b[a];
        return null != a ? a : !1
    }
    ;
    sc = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }
    ;
    _.Sa = function(a) {
        var b = sc(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    ;
    _.La = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    ;
    _.Ma = function(a) {
        return Object.prototype.hasOwnProperty.call(a, xx) && a[xx] || (a[xx] = ++yx)
    }
    ;
    xx = "closure_uid_" + (1E9 * Math.random() >>> 0);
    yx = 0;
    zx = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    ;
    Ax = function(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    ;
    _.Bx = function(a, b, c) {
        _.Bx = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? zx : Ax;
        return _.Bx.apply(null, arguments)
    }
    ;
    _.Cx = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    ;
    var Dx;
    var fa = wx(610401301)
      , ne = wx(188588736);
    var Ex, fm, Fx, Nx, Hx, Ix, Jx, Kx, Lx, Mx, Gx;
    Ex = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    ;
    fm = function(a) {
        return /^[\s\xa0]*$/.test(a)
    }
    ;
    Fx = function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    ;
    Nx = function(a) {
        if (!Gx.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(Hx, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(Ix, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(Jx, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Kx, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace(Lx, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(Mx, "&#0;"));
        return a
    }
    ;
    Hx = /&/g;
    Ix = /</g;
    Jx = />/g;
    Kx = /"/g;
    Lx = /'/g;
    Mx = /\x00/g;
    Gx = /[\x00&<>"']/;
    _.Zf = function(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    }
    ;
    var ha, Ox = _.ca.navigator;
    ha = Ox ? Ox.userAgentData || null : null;
    var Rx = function(a, b) {
        this.g = a === Px && b || "";
        this.A = Qx
    };
    Rx.prototype.toString = function() {
        return this.g
    }
    ;
    var Sx = function(a) {
        return a instanceof Rx && a.constructor === Rx && a.A === Qx ? a.g : "type_error:Const"
    }
      , Qx = {}
      , Px = {};
    var Zx, Yx, Xx, Ux, $x, $e, Vx;
    _.Tx = function(a) {
        this.g = a
    }
    ;
    _.Tx.prototype.toString = function() {
        return this.g + ""
    }
    ;
    _.Wx = function(a, b) {
        a = Ux.exec(_.jb(a).toString());
        var c = a[3] || "";
        return $e(a[1] + Vx("?", a[2] || "", b) + Vx("#", c))
    }
    ;
    _.jb = function(a) {
        return a instanceof _.Tx && a.constructor === _.Tx ? a.g : "type_error:TrustedResourceUrl"
    }
    ;
    Zx = function(a, b) {
        var c = Sx(a);
        if (!Xx.test(c))
            throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Yx, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e))
                throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof Rx ? Sx(d) : encodeURIComponent(String(d))
        });
        return $e(a)
    }
    ;
    Yx = /%{(\w+)}/g;
    Xx = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i");
    Ux = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    $x = {};
    $e = function(a) {
        return new _.Tx(a,$x)
    }
    ;
    Vx = function(a, b, c) {
        if (null == c)
            return b;
        if ("string" === typeof c)
            return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var h = e[f];
                    null != h && (b || (b = a),
                    b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(h)))
                }
            }
        return b
    }
    ;
    _.qa = function(a) {
        this.g = a
    }
    ;
    _.qa.prototype.toString = function() {
        return this.g
    }
    ;
    _.wa = new _.qa("about:invalid#zClosurez");
    var sa = function(a) {
        this.qm = a
    }
      , ua = [ta("data"), ta("http"), ta("https"), ta("mailto"), ta("ftp"), new sa(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    }
    )]
      , Ba = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
    _.Ga = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    ;
    _.ay = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    }
    ;
    _.Oi = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    }
    ;
    _.by = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    }
    ;
    _.Yf = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    }
    ;
    var bb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var cy = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var dy;
    dy = {};
    _.ey = function(a) {
        this.g = a
    }
    ;
    _.ey.prototype.toString = function() {
        return this.g.toString()
    }
    ;
    _.fy = function(a) {
        return a instanceof _.ey && a.constructor === _.ey ? a.g : "type_error:SafeStyleSheet"
    }
    ;
    var gy, ky, ly, my, ny, oy, jy;
    gy = {};
    _.hy = function(a) {
        this.g = a
    }
    ;
    _.hy.prototype.toString = function() {
        return this.g.toString()
    }
    ;
    _.iy = function(a) {
        return a instanceof _.hy && a.constructor === _.hy ? a.g : "type_error:SafeHtml"
    }
    ;
    ky = function(a) {
        var b = jy;
        b = b instanceof _.hy ? b : _.Zj(Nx(String(b)));
        var c = []
          , d = function(e) {
            Array.isArray(e) ? e.forEach(d) : (e = e instanceof _.hy ? e : _.Zj(Nx(String(e))),
            c.push(_.iy(e).toString()))
        };
        a.forEach(d);
        return _.Zj(c.join(_.iy(b).toString()))
    }
    ;
    ly = function(a) {
        return ky(Array.prototype.slice.call(arguments))
    }
    ;
    _.Zj = function(a) {
        return new _.hy(a,gy)
    }
    ;
    my = /^[a-zA-Z0-9-]+$/;
    ny = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    oy = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    jy = new _.hy(_.ca.trustedTypes && _.ca.trustedTypes.emptyHTML || "",gy);
    var py = {
        xo: 0,
        vo: 1,
        wo: 2,
        0: "FORMATTED_HTML_CONTENT",
        1: "EMBEDDED_INTERNAL_CONTENT",
        2: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
    }
      , qy = function(a, b) {
        b = Error.call(this, a + " cannot be used with intent " + py[b]);
        this.message = b.message;
        "stack"in b && (this.stack = b.stack);
        this.type = a;
        this.name = "TypeCannotBeUsedWithIntentError"
    };
    _.P(qy, Error);
    var fb = function(a) {
        this.g = a
    };
    fb.prototype.toString = function() {
        return this.g.toString()
    }
    ;
    var mc = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var ry, sy, uy;
    ry = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    }
    ;
    sy = 2147483648 * Math.random() | 0;
    _.ty = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
    ;
    uy = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
    ;
    _.vy = function(a) {
        _.vy[" "](a);
        return a
    }
    ;
    _.vy[" "] = function() {}
    ;
    var wy = function(a, b) {
        try {
            return _.vy(a[b]),
            !0
        } catch (c) {}
        return !1
    };
    var xy = ma() ? !1 : la("Trident") || la("MSIE")
      , yy = la("Gecko") && !(_.Zf(ea(), "WebKit") && !la("Edge")) && !(la("Trident") || la("MSIE")) && !la("Edge")
      , zy = _.Zf(ea(), "WebKit") && !la("Edge");
    !la("Android") || oa();
    oa();
    pa();
    xy || pa();
    lb(function(a) {
        return function(b) {
            a(this);
            this.message = b ? b.length + " errors occurred during unsubscription:\n" + b.map(function(c, d) {
                return d + 1 + ") " + c.toString()
            }).join("\n  ") : "";
            this.name = "UnsubscriptionError";
            this.errors = b
        }
    });
    lb(function(a) {
        return function() {
            a(this);
            this.message = "argument out of range"
        }
    });
    lb(function(a) {
        return function() {
            a(this);
            this.message = "no elements in sequence"
        }
    });
    lb(function(a) {
        return function() {
            a(this);
            this.message = "object unsubscribed"
        }
    });
    lb(function(a) {
        return function(b) {
            a(this);
            this.message = b
        }
    });
    lb(function(a) {
        return function(b) {
            a(this);
            this.message = b
        }
    });
    lb(function(a) {
        return function(b) {
            b = void 0 === b ? null : b;
            a(this);
            this.message = "Timeout has occurred";
            this.name = "TimeoutError";
            this.info = b
        }
    });
    var pb, ob = "function" === typeof String.prototype.rm, nb = "undefined" !== typeof TextEncoder;
    var Ay = {}
      , By = null
      , Cy = yy || zy || "function" == typeof _.ca.btoa
      , tb = function(a, b) {
        void 0 === b && (b = 0);
        Dy();
        b = Ay[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
            var h = a[e]
              , k = a[e + 1]
              , l = a[e + 2]
              , m = b[h >> 2];
            h = b[(h & 3) << 4 | k >> 4];
            k = b[(k & 15) << 2 | l >> 6];
            l = b[l & 63];
            c[f++] = m + h + k + l
        }
        m = 0;
        l = d;
        switch (a.length - e) {
        case 2:
            m = a[e + 1],
            l = b[(m & 15) << 2] || d;
        case 1:
            a = a[e],
            c[f] = b[a >> 2] + b[(a & 3) << 4 | m >> 4] + l + d
        }
        return c.join("")
    }
      , Ey = function(a, b) {
        if (Cy && !b)
            a = _.ca.btoa(a);
        else {
            for (var c = [], d = 0, e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                255 < f && (c[d++] = f & 255,
                f >>= 8);
                c[d++] = f
            }
            a = tb(c, b)
        }
        return a
    }
      , rf = function(a) {
        var b = [];
        Fy(a, function(c) {
            b.push(c)
        });
        return b
    }
      , Gy = function(a) {
        var b = a.length
          , c = 3 * b / 4;
        c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
        var d = new Uint8Array(c)
          , e = 0;
        Fy(a, function(f) {
            d[e++] = f
        });
        return e !== c ? d.subarray(0, e) : d
    }
      , Fy = function(a, b) {
        function c(l) {
            for (; d < a.length; ) {
                var m = a.charAt(d++)
                  , n = By[m];
                if (null != n)
                    return n;
                if (!fm(m))
                    throw Error("Unknown base64 encoding at char: " + m);
            }
            return l
        }
        Dy();
        for (var d = 0; ; ) {
            var e = c(-1)
              , f = c(0)
              , h = c(64)
              , k = c(64);
            if (64 === k && -1 === e)
                break;
            b(e << 2 | f >> 4);
            64 != h && (b(f << 4 & 240 | h >> 2),
            64 != k && b(h << 6 & 192 | k))
        }
    }
      , Dy = function() {
        if (!By) {
            By = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Ay[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === By[f] && (By[f] = e)
                }
            }
        }
    };
    var xb = "undefined" !== typeof Uint8Array, sb = !xy && "function" === typeof btoa, Hy = /[-_.]/g, vb = {
        "-": "+",
        _: "/",
        ".": "="
    }, Iy, zb = {};
    var Jy, ac = function(a, b) {
        Ab(b);
        this.g = a;
        if (null != a && 0 === a.length)
            throw Error("ByteString should be constructed with non-empty values");
    }, bc = function() {
        return Jy || (Jy = new ac(null,zb))
    }, ud = function(a) {
        var b = a.g;
        return null == b ? "" : "string" === typeof b ? b : a.g = ub(b)
    }, jl = function(a) {
        Ab(zb);
        var b = a.g;
        if (null != b && !yb(b))
            if ("string" === typeof b)
                if (sb) {
                    Hy.test(b) && (b = b.replace(Hy, wb));
                    b = atob(b);
                    for (var c = new Uint8Array(b.length), d = 0; d < b.length; d++)
                        c[d] = b.charCodeAt(d);
                    b = c
                } else
                    b = Gy(b);
            else
                b = null;
        return (a = null == b ? b : a.g = b) ? new Uint8Array(a) : Iy || (Iy = new Uint8Array(0))
    };
    ac.prototype.isEmpty = function() {
        return null == this.g
    }
    ;
    var Eb = 0, Fb = 0, Ky;
    var Ly = function(a, b) {
        this.A = a >>> 0;
        this.g = b >>> 0
    }, Ny = function(a) {
        if (!a)
            return My || (My = new Ly(0,0));
        if (!/^\d+$/.test(a))
            return null;
        Lb(a);
        return new Ly(Eb,Fb)
    }, My, Oy = function(a, b) {
        this.A = a >>> 0;
        this.g = b >>> 0
    }, Ke = function(a) {
        if (!a)
            return Py || (Py = new Oy(0,0));
        if (!/^-?\d+$/.test(a))
            return null;
        Lb(a);
        return new Oy(Eb,Fb)
    }, Py;
    var Qy = function() {
        this.g = []
    };
    Qy.prototype.length = function() {
        return this.g.length
    }
    ;
    Qy.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    }
    ;
    var Me = function(a, b, c) {
        for (; 0 < c || 127 < b; )
            a.g.push(b & 127 | 128),
            b = (b >>> 7 | c << 25) >>> 0,
            c >>>= 7;
        a.g.push(b)
    }
      , Ry = function(a, b) {
        for (; 127 < b; )
            a.g.push(b & 127 | 128),
            b >>>= 7;
        a.g.push(b)
    }
      , Sy = function(a, b) {
        if (0 <= b)
            Ry(a, b);
        else {
            for (var c = 0; 9 > c; c++)
                a.g.push(b & 127 | 128),
                b >>= 7;
            a.g.push(1)
        }
    };
    var Ve = function() {
        this.l = [];
        this.A = 0;
        this.g = new Qy
    }
      , We = function(a, b) {
        0 !== b.length && (a.l.push(b),
        a.A += b.length)
    }
      , Oe = function(a, b) {
        Le(a, b, 2);
        b = a.g.end();
        We(a, b);
        b.push(a.A);
        return b
    }
      , Pe = function(a, b) {
        var c = b.pop();
        for (c = a.A + a.g.length() - c; 127 < c; )
            b.push(c & 127 | 128),
            c >>>= 7,
            a.A++;
        b.push(c);
        a.A++
    }
      , Le = function(a, b, c) {
        Ry(a.g, 8 * b + c)
    }
      , Ty = function(a, b, c) {
        Le(a, b, 2);
        Ry(a.g, c.length);
        We(a, a.g.end());
        We(a, c)
    };
    var De = function(a, b) {
        this.g = a;
        this.wk = b
    };
    var Uy = Nb()
      , ad = Nb("0di")
      , Vy = Nb("2ex")
      , Hd = Nb("0dg");
    var Pb, Sb;
    Pb = Uy ? function(a, b) {
        a[Uy] |= b
    }
    : function(a, b) {
        void 0 !== a.Fb ? a.Fb |= b : Object.defineProperties(a, {
            Fb: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }
    ;
    _.Zd = Uy ? function(a, b) {
        a[Uy] &= ~b
    }
    : function(a, b) {
        void 0 !== a.Fb && (a.Fb &= ~b)
    }
    ;
    _.ec = Uy ? function(a) {
        return a[Uy] | 0
    }
    : function(a) {
        return a.Fb | 0
    }
    ;
    _.Cd = Uy ? function(a) {
        return a[Uy]
    }
    : function(a) {
        return a.Fb
    }
    ;
    Sb = Uy ? function(a, b) {
        a[Uy] = b;
        return a
    }
    : function(a, b) {
        void 0 !== a.Fb ? a.Fb = b : Object.defineProperties(a, {
            Fb: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return a
    }
    ;
    var Yc = {}, Yb = {}, Wy, Pd, Xy = [], Zy;
    Sb(Xy, 55);
    Pd = Object.freeze(Xy);
    var Yy = function(a, b, c) {
        this.j = 0;
        this.g = a;
        this.A = b;
        this.l = c
    };
    Yy.prototype.next = function() {
        if (this.j < this.g.length) {
            var a = this.g[this.j++];
            return {
                done: !1,
                value: this.A ? this.A.call(this.l, a) : a
            }
        }
        return {
            done: !0,
            value: void 0
        }
    }
    ;
    Yy.prototype[_.x(_.B.Symbol, "iterator")] = function() {
        return new Yy(this.g,this.A,this.l)
    }
    ;
    Zy = function() {}
    ;
    _.$y = Object.freeze(new function() {}
    );
    Object.freeze(new Zy);
    var ce = Object.freeze(new Zy);
    var az, ic;
    var vc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    var dd, fd, gd;
    var qd = {}
      , bz = function() {
        try {
            var a = function() {
                return cx(_.B.Map, [], this.constructor)
            };
            _.P(a, _.B.Map);
            _.vy(new a);
            return !1
        } catch (b) {
            return !0
        }
    }()
      , cz = function() {
        this.g = new _.B.Map
    };
    _.r = cz.prototype;
    _.r.get = function(a) {
        return this.g.get(a)
    }
    ;
    _.r.set = function(a, b) {
        this.g.set(a, b);
        this.size = this.g.size;
        return this
    }
    ;
    _.r.delete = function(a) {
        a = this.g.delete(a);
        this.size = this.g.size;
        return a
    }
    ;
    _.r.clear = function() {
        this.g.clear();
        this.size = this.g.size
    }
    ;
    _.r.has = function(a) {
        return this.g.has(a)
    }
    ;
    _.r.entries = function() {
        return _.x(this.g, "entries").call(this.g)
    }
    ;
    _.r.keys = function() {
        return _.x(this.g, "keys").call(this.g)
    }
    ;
    _.r.values = function() {
        return _.x(this.g, "values").call(this.g)
    }
    ;
    _.r.forEach = function(a, b) {
        return this.g.forEach(a, b)
    }
    ;
    cz.prototype[_.x(_.B.Symbol, "iterator")] = function() {
        return _.x(this, "entries").call(this)
    }
    ;
    var dz = function() {
        if (bz)
            return _.x(Object, "setPrototypeOf").call(Object, cz.prototype, _.B.Map.prototype),
            Object.defineProperties(cz.prototype, {
                size: {
                    value: 0,
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }
            }),
            cz;
        var a = function() {
            return cx(_.B.Map, [], this.constructor)
        };
        _.P(a, _.B.Map);
        return a
    }()
      , pd = function(a, b, c, d) {
        c = void 0 === c ? id : c;
        d = void 0 === d ? id : d;
        var e = dz.call(this) || this;
        var f = (0,
        _.ec)(a);
        f |= 64;
        Sb(a, f);
        e.ae = f;
        e.Zf = b;
        e.ue = c;
        e.Vh = e.Zf ? kd : d;
        for (var h = 0; h < a.length; h++) {
            var k = a[h]
              , l = c(k[0], !1, !0)
              , m = k[1];
            b ? void 0 === m && (m = null) : m = d(k[1], !1, !0, void 0, void 0, f);
            dz.prototype.set.call(e, l, m)
        }
        return e
    };
    _.P(pd, dz);
    var ez = function(a) {
        if (a.ae & 2)
            throw Error("Cannot mutate an immutable Map");
    }
      , vd = function(a, b) {
        b = void 0 === b ? ld : b;
        if (0 !== a.size)
            return Ed(a, b)
    }
      , Ed = function(a, b) {
        b = void 0 === b ? ld : b;
        var c = [];
        a = _.x(dz.prototype, "entries").call(a);
        for (var d; !(d = a.next()).done; )
            d = d.value,
            d[0] = b(d[0]),
            d[1] = b(d[1]),
            c.push(d);
        return c
    };
    _.r = pd.prototype;
    _.r.clear = function() {
        ez(this);
        dz.prototype.clear.call(this)
    }
    ;
    _.r.delete = function(a) {
        ez(this);
        return dz.prototype.delete.call(this, this.ue(a, !0, !1))
    }
    ;
    _.r.entries = function() {
        var a = _.x(Array, "from").call(Array, _.x(dz.prototype, "keys").call(this));
        return new Yy(a,md,this)
    }
    ;
    _.r.keys = function() {
        return _.x(dz.prototype, "keys").call(this)
    }
    ;
    _.r.values = function() {
        var a = _.x(Array, "from").call(Array, _.x(dz.prototype, "keys").call(this));
        return new Yy(a,pd.prototype.get,this)
    }
    ;
    _.r.forEach = function(a, b) {
        var c = this;
        dz.prototype.forEach.call(this, function(d, e) {
            a.call(b, c.get(e), e, c)
        })
    }
    ;
    _.r.set = function(a, b) {
        ez(this);
        a = this.ue(a, !0, !1);
        return null == a ? this : null == b ? (dz.prototype.delete.call(this, a),
        this) : dz.prototype.set.call(this, a, this.Vh(b, !0, !0, this.Zf, !1, this.ae))
    }
    ;
    _.r.has = function(a) {
        return dz.prototype.has.call(this, this.ue(a, !1, !1))
    }
    ;
    _.r.get = function(a) {
        a = this.ue(a, !1, !1);
        var b = dz.prototype.get.call(this, a);
        if (void 0 !== b) {
            var c = this.Zf;
            return c ? (c = this.Vh(b, !1, !0, c, this.Yk, this.ae),
            c !== b && dz.prototype.set.call(this, a, c),
            c) : b
        }
    }
    ;
    pd.prototype[_.x(_.B.Symbol, "iterator")] = function() {
        return _.x(this, "entries").call(this)
    }
    ;
    pd.prototype.toJSON = void 0;
    pd.prototype.wm = Yb;
    var od;
    var Ld, Qh, mr, kl, Wi, ll, il, fz, gk, pk, gz, hz, iz, ni, Am, ik, Zt, dt, kz, Ot, $h, lz, nz, oz, tq, pz, qz, rz, Yh, Wn;
    _.Mh = function(a, b) {
        a = a.D;
        return Ld(a, (0,
        _.Cd)(a), b)
    }
    ;
    Ld = function(a, b, c, d) {
        if (-1 === c)
            return null;
        var e = Wb(b);
        if (c >= e) {
            if (b & 256)
                return a[a.length - 1][c]
        } else {
            var f = a.length;
            if (d && b & 256 && (d = a[f - 1][c],
            null != d)) {
                if (Jd(a, b, e, c) && null != Vy) {
                    var h;
                    a = null != (h = az) ? h : az = {};
                    h = a[Vy] || 0;
                    4 <= h || (a[Vy] = h + 1,
                    nc())
                }
                return d
            }
            return Jd(a, b, e, c)
        }
    }
    ;
    _.nk = function(a, b, c) {
        var d = a.D
          , e = (0,
        _.Cd)(d);
        _.hc(e);
        Kd(d, e, b, c);
        return a
    }
    ;
    Qh = function(a, b, c) {
        return void 0 !== ie(a, b, c, !1)
    }
    ;
    mr = function(a) {
        a = a.D;
        var b = (0,
        _.Cd)(a)
          , c = Ld(a, b, 3)
          , d = qc(c);
        null != d && d !== c && Kd(a, b, 3, d);
        return d
    }
    ;
    kl = function(a, b) {
        a = a.D;
        var c = (0,
        _.Cd)(a)
          , d = Ld(a, c, b)
          , e = cc(d, !0, !!(c & 34));
        null != e && e !== d && Kd(a, c, b, e);
        return null == e ? bc() : e
    }
    ;
    Wi = function(a, b, c, d) {
        var e = a.D
          , f = (0,
        _.Cd)(e);
        _.hc(f);
        (c = he(e, f, c)) && c !== b && null != d && (f = Kd(e, f, c));
        Kd(e, f, b, d);
        return a
    }
    ;
    ll = function(a, b, c) {
        a = a.D;
        return he(a, (0,
        _.Cd)(a), b) === c ? c : -1
    }
    ;
    il = function(a, b) {
        a = a.D;
        return he(a, (0,
        _.Cd)(a), b)
    }
    ;
    _.Bq = function(a, b, c, d) {
        var e = a.D
          , f = (0,
        _.Cd)(e);
        d = he(e, f, d);
        a = _.sj(a, b, c);
        d && d !== c && Kd(e, f, d);
        return a
    }
    ;
    _.sj = function(a, b, c) {
        a = a.D;
        var d = (0,
        _.Cd)(a);
        _.hc(d);
        var e = Ld(a, d, c);
        b = jd($c(e, b, !0, d));
        e !== b && Kd(a, d, c, b);
        return b
    }
    ;
    fz = function(a, b, c) {
        return (a = ie(a, b, c, !1)) ? a : Zc(b)
    }
    ;
    _.ym = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = ie(a, b, c, d);
        if (null == b)
            return b;
        a = a.D;
        var e = (0,
        _.Cd)(a);
        if (!(e & 2)) {
            var f = jd(b);
            f !== b && (b = f,
            Kd(a, e, c, b, d))
        }
        return b
    }
    ;
    gk = function(a, b, c) {
        a = a.D;
        var d = (0,
        _.Cd)(a);
        return _.je(a, d, b, c, void 0, !1, !(2 & d))
    }
    ;
    _.Ph = function(a, b, c) {
        null == c && (c = void 0);
        return _.nk(a, b, c)
    }
    ;
    _.xl = function(a, b, c, d) {
        null == d && (d = void 0);
        return Wi(a, b, c, d)
    }
    ;
    _.sm = function(a, b, c) {
        var d = a.D
          , e = (0,
        _.Cd)(d);
        _.hc(e);
        if (null == c)
            return Kd(d, e, b),
            a;
        for (var f = (0,
        _.ec)(c), h = f, k = !!(2 & f) || !!(2048 & f), l = k || Object.isFrozen(c), m = !l && (void 0 === ce || !1), n = !0, p = !0, q = 0; q < c.length; q++) {
            var t = c[q];
            k || (t = !!((0,
            _.ec)(t.D) & 2),
            n && (n = !t),
            p && (p = t))
        }
        k || (f = Ob(f, 5, !0),
        f = Ob(f, 8, n),
        f = Ob(f, 16, p));
        if (m || l && f !== h)
            c = Mb(c),
            h = 0,
            f = Sd(f, e),
            f = Vd(f, e, !0);
        f !== h && Sb(c, f);
        Kd(d, e, b, c);
        return a
    }
    ;
    pk = function(a, b, c, d) {
        ke(a, b, c, d);
        return a
    }
    ;
    gz = function(a, b) {
        a = _.Mh(a, b);
        var c;
        null == a ? c = a : _.wc(a) ? "number" === typeof a ? c = _.Nc(a) : c = _.Rc(a) : c = void 0;
        return c
    }
    ;
    hz = function(a, b) {
        return Wd(a, b, Sc, 2, void 0, void 0, 0)
    }
    ;
    iz = function(a, b) {
        return uc(_.Mh(a, b))
    }
    ;
    ni = function(a, b) {
        return Bc(_.Mh(a, b))
    }
    ;
    Am = function(a, b) {
        return Ec(_.Mh(a, b))
    }
    ;
    ik = function(a, b) {
        return Xc(_.Mh(a, b))
    }
    ;
    _.O = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        return _.me(iz(a, b), c)
    }
    ;
    _.jz = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return _.me(ni(a, b), c)
    }
    ;
    Zt = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return _.me(Am(a, b), c)
    }
    ;
    _.Wf = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return _.me(Sc(_.Mh(a, b)), c)
    }
    ;
    dt = function(a, b) {
        var c = void 0 === c ? 0 : c;
        return _.me(gz(a, b), c)
    }
    ;
    _.u = function(a, b) {
        var c = void 0 === c ? "" : c;
        return _.me(ik(a, b), c)
    }
    ;
    _.If = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        return _.me(_.zc(_.Mh(a, b)), c)
    }
    ;
    kz = function(a, b) {
        var c = void 0 === c ? "0" : c;
        return _.me(Tc(_.Mh(a, b), !0), c)
    }
    ;
    Ot = function(a, b) {
        return Wd(a, b, Bc, 2)
    }
    ;
    $h = function(a, b, c, d, e) {
        return Wd(a, b, Xc, c, d, e)
    }
    ;
    lz = function(a, b, c) {
        a = $h(a, b, 3, void 0, !0);
        if ("number" !== typeof c || 0 > c || c >= a.length)
            throw Error();
        return a[c]
    }
    ;
    nz = function(a) {
        return _.Wf(a, ll(a, mz, 3))
    }
    ;
    oz = function(a, b) {
        return _.u(a, ll(a, b, 2))
    }
    ;
    tq = function(a, b) {
        a = iz(a, b);
        return null == a ? void 0 : a
    }
    ;
    pz = function(a, b) {
        a = ni(a, b);
        return null == a ? void 0 : a
    }
    ;
    qz = function(a, b) {
        a = ik(a, b);
        return null == a ? void 0 : a
    }
    ;
    rz = function(a, b) {
        a = _.zc(_.Mh(a, b));
        return null == a ? void 0 : a
    }
    ;
    _.Fh = function(a, b, c) {
        return _.nk(a, b, null == c ? c : tc(c))
    }
    ;
    _.vl = function(a, b, c) {
        return _.ee(a, b, null == c ? c : tc(c), !1)
    }
    ;
    _.ci = function(a, b, c) {
        return _.nk(a, b, null == c ? c : Ac(c))
    }
    ;
    _.wl = function(a, b, c) {
        return _.ee(a, b, null == c ? c : Ac(c), 0)
    }
    ;
    _.Kh = function(a, b, c) {
        return _.nk(a, b, Jc(c))
    }
    ;
    _.rj = function(a, b, c) {
        return _.ee(a, b, Jc(c), "0")
    }
    ;
    Yh = function(a, b, c) {
        return _.nk(a, b, Wc(c))
    }
    ;
    _.aj = function(a, b, c) {
        return _.ee(a, b, Wc(c), "")
    }
    ;
    _.Nh = function(a, b, c) {
        return _.nk(a, b, yc(c))
    }
    ;
    _.K = function(a, b, c) {
        return _.ee(a, b, yc(c), 0)
    }
    ;
    Wn = function(a, b) {
        return null != iz(a, b)
    }
    ;
    _.mi = function(a, b) {
        return null != ik(a, b)
    }
    ;
    _.F = function(a, b, c) {
        this.D = _.C(a, b, c)
    }
    ;
    _.F.prototype.toJSON = function() {
        return Wy ? oe(this, this.D, !1) : oe(this, xd(this.D, zd, void 0, void 0, !1), !0)
    }
    ;
    var fl = function(a) {
        Wy = !0;
        try {
            return JSON.stringify(a.toJSON(), td)
        } finally {
            Wy = !1
        }
    };
    _.F.prototype.bh = Yc;
    var Ge = (0,
    _.B.Symbol)(), se = (0,
    _.B.Symbol)(), Ce = (0,
    _.B.Symbol)(), Fe = (0,
    _.B.Symbol)(), sz = Je(function(a, b, c) {
        b = qc(b);
        null != b && (Le(a, c, 5),
        a = a.g,
        c = Ky || (Ky = new DataView(new ArrayBuffer(8))),
        c.setFloat32(0, +b, !0),
        Fb = 0,
        b = Eb = c.getUint32(0, !0),
        a.g.push(b >>> 0 & 255),
        a.g.push(b >>> 8 & 255),
        a.g.push(b >>> 16 & 255),
        a.g.push(b >>> 24 & 255))
    }), tz = Je(Ne), uz = Je(Ne), vz = Je(function(a, b, c) {
        a: if (null != b) {
            if (_.wc(b)) {
                if ("string" === typeof b) {
                    b = _.Rc(b);
                    break a
                }
                if ("number" === typeof b) {
                    b = _.Nc(b);
                    break a
                }
            }
            b = void 0
        }
        null != b && ("string" === typeof b && Ny(b),
        null != b && (Le(a, c, 0),
        "number" === typeof b ? (a = a.g,
        Gb(b),
        Me(a, Eb, Fb)) : (c = Ny(b),
        Me(a.g, c.A, c.g))))
    }), wz = Je(function(a, b, c) {
        b = Bc(b);
        null != b && null != b && (Le(a, c, 0),
        Sy(a.g, b))
    }), xz = Je(function(a, b, c) {
        b = uc(b);
        null != b && (Le(a, c, 0),
        a.g.g.push(b ? 1 : 0))
    }), yz = Je(function(a, b, c) {
        b = Xc(b);
        null != b && Ty(a, c, qb(b))
    }), zz;
    zz = new De(function(a, b, c) {
        b = qe(Xc, b);
        if (null != b)
            for (var d = 0; d < b.length; d++) {
                var e = a
                  , f = c
                  , h = b[d];
                null != h && Ty(e, f, qb(h))
            }
    }
    ,!1);
    var He = new De(Qe,!0), Ee = new De(Qe,!0), Az;
    Az = new De(function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++)
                Qe(a, b[f], c, d, e)
    }
    ,!0);
    var Bz = Je(function(a, b, c) {
        b = Ec(b);
        null != b && null != b && (Le(a, c, 0),
        Ry(a.g, b))
    }), Cz = Je(function(a, b, c) {
        b = Bc(b);
        null != b && (b = parseInt(b, 10),
        Le(a, c, 0),
        Sy(a.g, b))
    }), Dz;
    Dz = new De(function(a, b, c) {
        b = qe(Bc, b);
        if (null != b && b.length) {
            c = Oe(a, c);
            for (var d = 0; d < b.length; d++)
                Sy(a.g, b[d]);
            Pe(a, c)
        }
    }
    ,!1);
    var Ue = void 0;
    var Ez = function(a) {
        this.D = _.C(a)
    };
    _.P(Ez, _.F);
    var Fz = _.Yw(["https://pagead2.googlesyndication.com/pagead/managed/js/activeview/current/ufs_web_display.js"]);
    var nf = _.Yw(["https://tpc.googlesyndication.com/sodar/", ".js"])
      , Gz = _.Yw(["https://www.google.com/recaptcha/api2/aframe"]);
    _.af(Gz);
    var Hz, Iz, li;
    Hz = function() {
        return !0
    }
    ;
    Iz = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }
    ;
    li = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    ;
    _.Jz = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    }
    ;
    _.Kz = function(a, b) {
        var c = 0
          , d = !1
          , e = []
          , f = function() {
            c = 0;
            d && (d = !1,
            h())
        }
          , h = function() {
            c = _.ca.setTimeout(f, b);
            var k = e;
            e = [];
            a.apply(void 0, k)
        };
        return function(k) {
            e = arguments;
            c ? d = !0 : h()
        }
    }
    ;
    var cf;
    cf = li(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.ca.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    _.ef = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, df(d)),
        !0) : !1
    }
    ;
    _.Cf = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, df(d)),
        !0) : !1
    }
    ;
    var hf = function(a) {
        return new _.B.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            }
            ;
            d.open("GET", a, !0);
            d.send()
        }
        )
    };
    var Lz = function(a) {
        this.D = _.C(a)
    };
    _.P(Lz, _.F);
    var Mz = function(a) {
        this.D = _.C(a)
    };
    _.P(Mz, _.F);
    var Nz = function(a) {
        this.g = a.A;
        this.A = a.l;
        this.j = a.j;
        this.te = a.te;
        this.B = a.B;
        this.Rd = a.Rd;
        this.zf = a.zf;
        this.Vf = a.Vf;
        this.yf = a.yf;
        this.l = a.g
    }
      , Oz = function(a, b, c) {
        this.A = a;
        this.l = b;
        this.j = c;
        this.B = window;
        this.Rd = "env";
        this.zf = "n";
        this.Vf = "0";
        this.yf = "1";
        this.g = !0
    };
    Oz.prototype.build = function() {
        return new Nz(this)
    }
    ;
    var Zh = function(a) {
        this.D = _.C(a)
    };
    _.P(Zh, _.F);
    Zh.prototype.getId = function() {
        return _.u(this, 1)
    }
    ;
    var Pz = [0, yz];
    var bi = function(a) {
        this.D = _.C(a)
    };
    _.P(bi, _.F);
    bi.prototype.getWidth = function() {
        return _.jz(this, 1)
    }
    ;
    bi.prototype.getHeight = function() {
        return _.jz(this, 2)
    }
    ;
    var Qz = [0, wz, -1];
    var ai = function(a) {
        this.D = _.C(a)
    };
    _.P(ai, _.F);
    var Rz = [0, uz, xz, yz, -1];
    var Xh = function(a) {
        this.D = _.C(a)
    };
    _.P(Xh, _.F);
    Xh.prototype.Ui = function() {
        return Qh(this, bi, 7)
    }
    ;
    Xh.ca = [4];
    var Sz = [0, yz, uz, yz, zz, Cz, Pz, Qz, uz, Rz, yz];
    var Rh = function(a) {
        this.D = _.C(a)
    };
    _.P(Rh, _.F);
    var Uh = function(a, b) {
        return _.Nh(a, 1, b)
    }
      , Vh = function(a, b) {
        return _.Fh(a, 4, b)
    }
      , Th = function(a, b) {
        return _.ci(a, 2, b)
    }
      , Tz = [0, Cz, wz, yz, xz];
    var Ih = function(a) {
        this.D = _.C(a)
    };
    _.P(Ih, _.F);
    var Hh = function(a, b) {
        return Yh(a, 1, b)
    }
      , Eh = function(a, b) {
        return pk(a, 3, Xh, b)
    }
      , Gh = function(a, b) {
        return _.Nh(a, 4, b)
    };
    Ih.prototype.Pi = function() {
        return _.If(this, 7, 0)
    }
    ;
    Ih.ca = [10, 3];
    var Uz = [0, yz, uz, Az, Sz, Cz, Tz, xz, Cz, 2, zz];
    var fi = function(a) {
        this.D = _.C(a)
    };
    _.P(fi, _.F);
    var Vz = [0, Cz, xz, uz];
    var Wz = function(a) {
        this.D = _.C(a)
    };
    _.P(Wz, _.F);
    var Dh = function(a, b) {
        return ke(a, 2, Ih, b)
    }
      , Sh = function(a, b) {
        _.Ph(a, 5, b)
    }
      , ki = function(a, b) {
        Yh(a, 10, b)
    };
    Wz.ca = [2];
    var Xz = [0, Cz, Az, Uz, Cz, yz, Tz, yz, xz, wz, Vz, yz, -1];
    var gi = function(a) {
        this.D = _.C(a)
    };
    _.P(gi, _.F);
    var ii = function(a) {
        var b = new Wz;
        b = _.Nh(b, 1, 1);
        return ke(a, 1, Wz, b)
    };
    gi.ca = [1];
    gi.prototype.g = Xe([0, Az, Xz]);
    var Yz = function(a) {
        this.D = _.C(a)
    };
    _.P(Yz, _.F);
    var mz = [2, 3];
    var Zz = function(a) {
        this.D = _.C(a)
    };
    _.P(Zz, _.F);
    Zz.ca = [1];
    var $z = function(a) {
        this.D = _.C(a)
    };
    _.P($z, _.F);
    $z.ca = [1];
    var aA = function(a) {
        this.D = _.C(a)
    };
    _.P(aA, _.F);
    var bA = [2, 3];
    var cA = function(a) {
        this.D = _.C(a)
    };
    _.P(cA, _.F);
    cA.ca = [2];
    var dA = function(a) {
        this.D = _.C(a)
    };
    _.P(dA, _.F);
    dA.ca = [6, 4];
    var eA = function(a) {
        this.D = _.C(a)
    };
    _.P(eA, _.F);
    eA.ca = [4, 5];
    var fA = function(a) {
        this.D = _.C(a)
    };
    _.P(fA, _.F);
    var gA = function(a) {
        this.D = _.C(a)
    };
    _.P(gA, _.F);
    gA.prototype.Oi = function() {
        return fz(this, fA, 2)
    }
    ;
    gA.ca = [1];
    var hA = function(a) {
        this.D = _.C(a)
    };
    _.P(hA, _.F);
    var iA = function(a) {
        this.D = _.C(a)
    };
    _.P(iA, _.F);
    iA.ca = [1];
    var jA = function(a) {
        this.D = _.C(a)
    };
    _.P(jA, _.F);
    var kA = function(a) {
        this.D = _.C(a)
    };
    _.P(kA, _.F);
    var lA = [0, Cz, uz];
    var mA = function(a) {
        this.D = _.C(a)
    };
    _.P(mA, _.F);
    var nA = [0, tz];
    var oA = function(a) {
        this.D = _.C(a)
    };
    _.P(oA, _.F);
    oA.prototype.getEscapedQemQueryId = function() {
        return _.u(this, 1)
    }
    ;
    var pA = [0, yz, nA, lA];
    var qA = function(a) {
        this.D = _.C(a)
    };
    _.P(qA, _.F);
    qA.prototype.getAdUnitPath = function() {
        return _.u(this, 1)
    }
    ;
    var rA = function(a) {
        this.D = _.C(a)
    };
    _.P(rA, _.F);
    _.sA = function(a) {
        this.D = _.C(a)
    }
    ;
    _.P(_.sA, _.F);
    _.tA = function(a) {
        return gk(a, rA, 15)
    }
    ;
    _.sA.ca = [15, 24];
    var uA = function(a) {
        this.D = _.C(a)
    };
    _.P(uA, _.F);
    uA.prototype.getAdUnitPath = function() {
        return _.u(this, 2)
    }
    ;
    var vA = function(a) {
        this.D = _.C(a)
    };
    _.P(vA, _.F);
    var wA = [5, 7, 8, 9];
    var xA = function(a) {
        this.D = _.C(a)
    };
    _.P(xA, _.F);
    var yA = function(a) {
        this.D = _.C(a)
    };
    _.P(yA, _.F);
    var zA = function(a) {
        this.D = _.C(a)
    };
    _.P(zA, _.F);
    zA.ca = [4, 5, 6, 11];
    var AA = function(a) {
        this.D = _.C(a)
    };
    _.P(AA, _.F);
    AA.prototype.getValue = function() {
        return _.u(this, 2)
    }
    ;
    AA.prototype.Jg = function() {
        return _.mi(this, 2)
    }
    ;
    var BA = function(a) {
        this.D = _.C(a)
    };
    _.P(BA, _.F);
    var CA = function(a) {
        this.D = _.C(a)
    };
    _.P(CA, _.F);
    CA.ca = [13];
    var DA = function(a) {
        this.D = _.C(a)
    };
    _.P(DA, _.F);
    DA.ca = [15, 13];
    var EA = function(a) {
        this.D = _.C(a)
    };
    _.P(EA, _.F);
    var ok = function(a) {
        var b = new EA;
        return _.Nh(b, 1, a)
    }
      , FA = [0, Cz];
    var hk = function(a) {
        this.D = _.C(a)
    };
    _.P(hk, _.F);
    var GA = function(a) {
        var b = new hk;
        return Yh(b, 1, a)
    }
      , HA = function(a) {
        var b = window.Date.now();
        b = _.x(Number, "isFinite").call(Number, b) ? Math.round(b) : 0;
        return _.Kh(a, 3, b)
    };
    hk.prototype.ub = function(a) {
        return _.Ph(this, 10, a)
    }
    ;
    var IA = Ye(hk)
      , JA = [0, yz, -1, uz, wz, -2, uz, sz, xz, FA, xz];
    var KA = [0, 1, [0, vz, -2], -1, yz, -1, xz, [0, 3, Cz, yz], uz, Dz, Bz];
    var LA = function(a) {
        this.D = _.C(a)
    };
    _.P(LA, _.F);
    LA.ca = [1, 2];
    LA.prototype.g = Xe([0, Az, KA, Az, JA]);
    var MA = function(a) {
        this.D = _.C(a)
    };
    _.P(MA, _.F);
    var NA = function(a) {
        this.D = _.C(a)
    };
    _.P(NA, _.F);
    NA.ca = [1, 3];
    var OA = function(a) {
        this.D = _.C(a)
    };
    _.P(OA, _.F);
    var PA = function(a) {
        this.D = _.C(a)
    };
    _.P(PA, _.F);
    var QA = function(a) {
        this.D = _.C(a)
    };
    _.P(QA, _.F);
    QA.prototype.getValue = function() {
        return _.u(this, 1)
    }
    ;
    QA.prototype.Jg = function() {
        return _.mi(this, 1)
    }
    ;
    QA.prototype.getVersion = function() {
        return _.If(this, 5, 0)
    }
    ;
    var RA = function(a) {
        this.D = _.C(a)
    };
    _.P(RA, _.F);
    var SA = function(a) {
        this.D = _.C(a)
    };
    _.P(SA, _.F);
    SA.prototype.getAdUnitPath = function() {
        return _.u(this, 1)
    }
    ;
    var TA = function(a) {
        this.D = _.C(a)
    };
    _.P(TA, _.F);
    var UA = function(a) {
        this.D = _.C(a)
    };
    _.P(UA, _.F);
    var VA = function(a) {
        this.D = _.C(a)
    };
    _.P(VA, _.F);
    var WA = function(a) {
        this.D = _.C(a)
    };
    _.P(WA, _.F);
    WA.prototype.getContentUrl = function() {
        return _.u(this, 2)
    }
    ;
    WA.ca = [11];
    var XA = function(a) {
        this.D = _.C(a)
    };
    _.P(XA, _.F);
    XA.prototype.getEscapedQemQueryId = function() {
        return _.u(this, 4)
    }
    ;
    XA.ca = [2, 23, 29];
    var YA = function(a) {
        this.D = _.C(a)
    };
    _.P(YA, _.F);
    var ZA = function(a) {
        this.D = _.C(a)
    };
    _.P(ZA, _.F);
    var $A = function(a) {
        this.D = _.C(a)
    };
    _.P($A, _.F);
    var aB = function(a) {
        this.D = _.C(a)
    };
    _.P(aB, _.F);
    var bB = function(a) {
        this.D = _.C(a)
    };
    _.P(bB, _.F);
    var cB = function(a) {
        this.D = _.C(a)
    };
    _.P(cB, _.F);
    cB.prototype.getEscapedQemQueryId = function() {
        return _.u(this, 2)
    }
    ;
    cB.ca = [28, 30];
    var dB = function(a) {
        this.D = _.C(a)
    };
    _.P(dB, _.F);
    var eB = function(a) {
        this.D = _.C(a)
    };
    _.P(eB, _.F);
    var fB = function(a) {
        this.D = _.C(a)
    };
    _.P(fB, _.F);
    var gB = function(a) {
        return _.ym(a, cB, 5)
    }
      , hB = function(a) {
        return fz(a, cB, 5)
    };
    fB.prototype.getWidth = function() {
        return _.jz(this, 9)
    }
    ;
    fB.prototype.getHeight = function() {
        return _.jz(this, 10)
    }
    ;
    fB.ca = [3, 7, 27, 11, 32];
    var iB = function(a) {
        this.D = _.C(a)
    };
    _.P(iB, _.F);
    iB.prototype.getHeight = function() {
        return ni(this, 6)
    }
    ;
    iB.prototype.getWidth = function() {
        return ni(this, 7)
    }
    ;
    iB.prototype.getEscapedQemQueryId = function() {
        return ik(this, 34)
    }
    ;
    iB.ca = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63, 67];
    var jB = [39, 48];
    var kB = function(a) {
        this.D = _.C(a)
    };
    _.P(kB, _.F);
    var lB = Ye(kB);
    kB.ca = [1, 2, 3];
    var mB = window;
    var yw = function(a) {
        this.D = _.C(a)
    };
    _.P(yw, _.F);
    yw.ca = [15];
    var xw = function(a) {
        this.D = _.C(a)
    };
    _.P(xw, _.F);
    xw.prototype.getCorrelator = function() {
        return _.Wf(this, 1)
    }
    ;
    xw.prototype.setCorrelator = function(a) {
        return _.rj(this, 1, a)
    }
    ;
    var ww = function(a) {
        this.D = _.C(a)
    };
    _.P(ww, _.F);
    _.nB = li(function() {
        var a = document.createElement("div")
          , b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = _.iy(jy);
        return !b.parentElement
    });
    _.Vm = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    ;
    _.r = _.Vm.prototype;
    _.r.equals = function(a) {
        return a instanceof _.Vm && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    }
    ;
    _.r.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    _.r.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    _.r.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    _.r.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    }
    ;
    _.Zm = function(a, b) {
        this.width = a;
        this.height = b
    }
    ;
    _.r = _.Zm.prototype;
    _.r.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    _.r.isEmpty = function() {
        return !(this.width * this.height)
    }
    ;
    _.r.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    _.r.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    _.r.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    _.r.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    }
    ;
    var Kf, rB, qB, tB, vB, AB;
    Kf = function(a) {
        return a ? new _.oB(_.pB(a)) : Dx || (Dx = new _.oB)
    }
    ;
    rB = function(a, b) {
        Ya(b, function(c, d) {
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : qB.hasOwnProperty(d) ? a.setAttribute(qB[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    ;
    qB = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.sB = function(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new _.Zm(a.clientWidth,a.clientHeight)
    }
    ;
    tB = function(a) {
        return a.scrollingElement ? a.scrollingElement : zy || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
    }
    ;
    _.uB = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    }
    ;
    vB = function(a, b, c) {
        function d(k) {
            k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!_.Sa(f) || _.La(f) && 0 < f.nodeType)
                d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (_.La(f)) {
                            var h = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            h = "function" == typeof f.item;
                            break a
                        }
                    }
                    h = !1
                }
                _.ay(h ? _.Ia(f) : f, d)
            }
        }
    }
    ;
    _.wB = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }
    ;
    _.xB = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    ;
    _.yB = function(a) {
        var b;
        if (zy && (b = a.parentElement))
            return b;
        b = a.parentNode;
        return _.La(b) && 1 == b.nodeType ? b : null
    }
    ;
    _.zB = function(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    ;
    _.pB = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    ;
    AB = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.uB(a.contentDocument) : null)
        } catch (b) {}
        return null
    }
    ;
    _.wj = function(a, b, c, d) {
        a && !c && (a = a.parentNode);
        for (c = 0; a && (null == d || c <= d); ) {
            if (b(a))
                return a;
            a = a.parentNode;
            c++
        }
        return null
    }
    ;
    _.oB = function(a) {
        this.g = a || _.ca.document || document
    }
    ;
    _.r = _.oB.prototype;
    _.r.Ul = function(a) {
        var b = this.g;
        return "string" === typeof a ? b.getElementById(a) : a
    }
    ;
    _.r.bo = _.oB.prototype.Ul;
    _.r.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    }
    ;
    _.r.createElement = function(a) {
        return _.wB(this.g, a)
    }
    ;
    _.r.createTextNode = function(a) {
        return this.g.createTextNode(String(a))
    }
    ;
    _.r.append = function(a, b) {
        vB(_.pB(a), a, arguments)
    }
    ;
    _.r.Dk = _.xB;
    _.r.contains = _.zB;
    var CB = function() {
        return fa && ha ? ha.mobile : !BB() && (la("iPod") || la("iPhone") || la("Android") || la("IEMobile"))
    }
      , BB = function() {
        return fa && ha ? !ha.mobile && (la("iPad") || la("Android") || la("Silk")) : la("iPad") || la("Android") && !la("Mobile") || la("Silk")
    };
    var EB, kp;
    _.DB = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    EB = function(a) {
        return a ? decodeURI(a) : a
    }
    ;
    _.Hn = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++)
                _.Hn(a, String(b[d]), c);
        else
            null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }
    ;
    kp = /#|$/;
    var ml, Ek, FB, Fk, hn, Fp, Jw, Iw, HB, IB, jn, JB, KB, LB, MB, NB, yg, pw, OB, PB, Xp, Sj, Yp, cq, QB, SB, TB, UB, VB, WB, ck, XB, Jo, Ao, YB, Un, ZB, $B;
    _.Wk = function(a) {
        try {
            return !!a && null != a.location.href && wy(a, "foo")
        } catch (b) {
            return !1
        }
    }
    ;
    ml = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.ca : d;
        c = (void 0 === c ? 0 : c) ? FB(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !_.Wk(c) || !a(c)); )
            c = FB(c)
    }
    ;
    Ek = function() {
        var a = window;
        ml(function(b) {
            a = b;
            return !1
        });
        return a
    }
    ;
    FB = function(a) {
        try {
            var b = a.parent;
            if (b && b != a)
                return b
        } catch (c) {}
        return null
    }
    ;
    Fk = function(a) {
        return _.Wk(a.top) ? a.top : null
    }
    ;
    _.ip = function(a, b) {
        var c = _.Bf("SCRIPT", a);
        kb(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a),
        c) : null
    }
    ;
    hn = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }
    ;
    _.Wg = function() {
        if (!_.B.globalThis.crypto)
            return Math.random();
        try {
            var a = new Uint32Array(1);
            _.B.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }
    ;
    _.Sn = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    ;
    _.GB = function(a) {
        var b = [];
        _.Sn(a, function(c) {
            b.push(c)
        });
        return b
    }
    ;
    Fp = function(a, b) {
        return ab(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    }
    ;
    _.Xg = function(a) {
        var b = a.length;
        if (0 == b)
            return 0;
        for (var c = 305419896, d = 0; d < b; d++)
            c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    ;
    Jw = li(function() {
        return _.Yf(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], HB) || 1E-4 > Math.random()
    });
    Iw = li(function() {
        return HB("MSIE")
    });
    HB = function(a) {
        return -1 != ea().indexOf(a)
    }
    ;
    IB = /^([0-9.]+)px$/;
    jn = function(a) {
        return (a = IB.exec(a)) ? +a[1] : null
    }
    ;
    JB = function() {
        var a = window;
        try {
            for (var b = null; b != a; b = a,
            a = a.parent)
                switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return !0;
                case "http:":
                    return !1
                }
        } catch (c) {}
        return !0
    }
    ;
    KB = function() {
        var a = _.ca.location.href;
        if (!a)
            return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c)
                return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    }
    ;
    LB = {
        ho: "allow-forms",
        io: "allow-modals",
        jo: "allow-orientation-lock",
        ko: "allow-pointer-lock",
        lo: "allow-popups",
        mo: "allow-popups-to-escape-sandbox",
        no: "allow-presentation",
        oo: "allow-same-origin",
        po: "allow-scripts",
        qo: "allow-top-navigation",
        ro: "allow-top-navigation-by-user-activation"
    };
    MB = li(function() {
        return _.GB(LB)
    });
    NB = function(a) {
        var b = MB();
        return a.length ? _.Oi(b, function(c) {
            return !(0 <= _.Ga(a, c))
        }) : b
    }
    ;
    yg = function() {
        var a = _.Bf("IFRAME")
          , b = {};
        _.ay(MB(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    ;
    pw = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && -1 != a.indexOf("[native code]")
    }
    ;
    OB = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (e) {
                d = !1
            }
            if (d)
                return a;
            if (!(a = FB(a)))
                break
        }
        return null
    }
    ;
    PB = function(a) {
        if (!a || !a.frames)
            return null;
        if (a.frames.google_ads_top_frame)
            return a.frames.google_ads_top_frame.frameElement;
        try {
            var b = a.document, c = b.head, d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
            if (e) {
                var f = _.Bf("IFRAME");
                f.name = "google_ads_top_frame";
                f.id = "google_ads_top_frame";
                f.style.display = "none";
                f.style.position = "fixed";
                f.style.left = "-999px";
                f.style.top = "-999px";
                f.style.width = "0px";
                f.style.height = "0px";
                e.appendChild(f);
                return f
            }
        } catch (h) {}
        return null
    }
    ;
    _.fq = li(function() {
        return CB() ? 2 : BB() ? 1 : 0
    });
    Xp = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--; ) {
            if (a == b)
                return !0;
            a = a.parentElement
        }
        return !1
    }
    ;
    _.Jp = function(a, b) {
        _.Sn(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    }
    ;
    Sj = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a); )
            a = a.parentElement
    }
    ;
    Yp = function(a, b) {
        for (var c = 100; a && c--; ) {
            var d = hn(a, window);
            if (d) {
                if (b(d, a))
                    return !0;
                a = a.parentElement
            }
        }
        return !1
    }
    ;
    cq = function(a) {
        if (!a)
            return null;
        a = a.transform;
        if (!a)
            return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : _.by(a, parseFloat)
    }
    ;
    QB = {};
    _.RB = (QB["http://googleads.g.doubleclick.net"] = !0,
    QB["http://pagead2.googlesyndication.com"] = !0,
    QB["https://googleads.g.doubleclick.net"] = !0,
    QB["https://pagead2.googlesyndication.com"] = !0,
    QB);
    SB = function(a) {
        _.ca.console && _.ca.console.warn && _.ca.console.warn(a)
    }
    ;
    TB = [];
    UB = function() {
        var a = TB;
        TB = [];
        a = _.y(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }
    ;
    VB = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    }
    ;
    WB = function() {
        var a = void 0 === a ? Math.random : a;
        return Math.floor(a() * Math.pow(2, 52))
    }
    ;
    ck = function(a) {
        if ("number" !== typeof a.goog_pvsid)
            try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: WB(),
                    configurable: !1
                })
            } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }
    ;
    XB = function(a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? (TB.push(b),
        1 == TB.length && (_.B.Promise ? _.B.Promise.resolve().then(UB) : window.setImmediate ? setImmediate(UB) : setTimeout(UB, 0))) : a.addEventListener("DOMContentLoaded", b)
    }
    ;
    Jo = function(a) {
        return "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    }
    ;
    Ao = function(a) {
        return 0 === a || Jo(a)
    }
    ;
    YB = function(a, b) {
        return new _.B.Promise(function(c) {
            setTimeout(function() {
                return void c(b)
            }, a)
        }
        )
    }
    ;
    Un = function(a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {}
        return b || String(a)
    }
    ;
    _.Bf = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    }
    ;
    ZB = function(a) {
        for (var b = a; a && a != a.parent; )
            a = a.parent,
            _.Wk(a) && (b = a);
        return b
    }
    ;
    _.Di = function(a) {
        return oa() && CB() ? $B(a, !0) : 1
    }
    ;
    $B = function(a, b) {
        var c = (void 0 === b ? 0 : b) ? Fk(a) : a;
        if (!c)
            return 1;
        a = 0 === (0,
        _.fq)();
        b = !!c.document.querySelector('meta[name=viewport][content*="width=device-width"]');
        var d = c.innerWidth;
        c = c.outerWidth;
        if (0 === d)
            return 1;
        var e = Math.round(100 * (c / d + _.x(Number, "EPSILON"))) / 100;
        return 1 === e ? 1 : a || b ? e : Math.round(100 * (c / d / .4 + _.x(Number, "EPSILON"))) / 100
    }
    ;
    _.aC = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    ;
    _.aC.prototype.getWidth = function() {
        return this.right - this.left
    }
    ;
    _.aC.prototype.getHeight = function() {
        return this.bottom - this.top
    }
    ;
    _.bC = function(a) {
        return new _.aC(a.top,a.right,a.bottom,a.left)
    }
    ;
    _.r = _.aC.prototype;
    _.r.contains = function(a) {
        return this && a ? a instanceof _.aC ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    }
    ;
    _.r.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    _.r.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    _.r.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    _.r.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    }
    ;
    var cC = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
      , dC = function(a) {
        return new _.aC(a.top,a.left + a.width,a.top + a.height,a.left)
    }
      , eC = function(a, b) {
        var c = Math.max(a.left, b.left)
          , d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a)
                return new cC(c,e,d - c,a - e)
        }
        return null
    };
    _.r = cC.prototype;
    _.r.contains = function(a) {
        return a instanceof _.Vm ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    }
    ;
    _.r.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    _.r.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    _.r.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    _.r.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    }
    ;
    var fC = function(a) {
        return (a = void 0 === a ? qf() : a) ? _.Wk(a.master) ? a.master : null : null
    };
    var iC, kC, Ym, lC, mC, Um;
    _.hC = function(a, b, c) {
        if ("string" === typeof b)
            (b = _.gC(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d]
                  , f = _.gC(c, d);
                f && (c.style[f] = e)
            }
    }
    ;
    iC = {};
    _.gC = function(a, b) {
        var c = iC[b];
        if (!c) {
            var d = _.ty(b);
            c = d;
            void 0 === a.style[d] && (d = (zy ? "Webkit" : yy ? "Moz" : xy ? "ms" : null) + uy(d),
            void 0 !== a.style[d] && (c = d));
            iC[b] = c
        }
        return c
    }
    ;
    _.jC = function(a, b) {
        var c = _.pB(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
    ;
    kC = function(a, b) {
        return _.jC(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }
    ;
    Ym = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }
    ;
    lC = function(a) {
        var b = _.pB(a)
          , c = kC(a, "position")
          , d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host),
            c = kC(a, "position"),
            d = d && "static" == c && a != b.documentElement && a != b.body,
            !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
                return a;
        return null
    }
    ;
    mC = function(a) {
        var b = _.pB(a)
          , c = new _.Vm(0,0);
        if (a == (b ? _.pB(b) : document).documentElement)
            return c;
        a = Ym(a);
        var d = Kf(b).g;
        b = tB(d);
        d = d.parentWindow || d.defaultView;
        b = new _.Vm(d.pageXOffset || b.scrollLeft,d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
    ;
    Um = function(a, b) {
        var c = new _.Vm(0,0)
          , d = _.uB(_.pB(a));
        if (!wy(d, "parent"))
            return c;
        do {
            var e = d == b ? mC(a) : _.nC(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    }
    ;
    _.nC = function(a) {
        a = Ym(a);
        return new _.Vm(a.left,a.top)
    }
    ;
    _.oC = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }
    ;
    _.Xm = function(a, b) {
        if ("none" != kC(b, "display"))
            return a(b);
        var c = b.style
          , d = c.display
          , e = c.visibility
          , f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }
    ;
    _.pC = function(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = zy && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Ym(a),
        new _.Zm(a.right - a.left,a.bottom - a.top)) : new _.Zm(b,c)
    }
    ;
    var rC, Up;
    _.qC = _.Yw(["//fonts.googleapis.com/css"]);
    rC = function(a) {
        a = void 0 === a ? mB : a;
        try {
            return a.history.length
        } catch (b) {
            return 0
        }
    }
    ;
    Up = function(a) {
        a = fC(qf(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }
    ;
    var sC = {
        Ko: 0,
        Jo: 1,
        Go: 2,
        Bo: 3,
        Ho: 4,
        Co: 5,
        Io: 6,
        Eo: 7,
        Fo: 8,
        Ao: 9,
        Do: 10,
        Lo: 11
    };
    var tC = {
        No: 0,
        Oo: 1,
        Mo: 2
    };
    _.tj = function(a) {
        this.D = _.C(a)
    }
    ;
    _.P(_.tj, _.F);
    _.tj.ca = [1];
    var uC = function(a) {
        this.D = _.C(a)
    };
    _.P(uC, _.F);
    var vC = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var wC = function(a) {
        this.D = _.C(a)
    };
    _.P(wC, _.F);
    wC.prototype.getVersion = function() {
        return _.jz(this, 2)
    }
    ;
    wC.ca = [3];
    var xC = function(a) {
        this.D = _.C(a)
    };
    _.P(xC, _.F);
    var yC = function(a) {
        this.D = _.C(a)
    };
    _.P(yC, _.F);
    var zC = function(a) {
        this.D = _.C(a)
    };
    _.P(zC, _.F);
    zC.prototype.getVersion = function() {
        return _.jz(this, 1)
    }
    ;
    var AC = function(a) {
        this.D = _.C(a)
    };
    _.P(AC, _.F);
    var BC = function(a) {
        this.D = _.C(a)
    };
    _.P(BC, _.F);
    var CC = function(a) {
        var b = new BC;
        return _.Ph(b, 1, a)
    };
    var DC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , EC = 6 + DC.reduce(function(a, b) {
        return a + b
    });
    var FC = function(a) {
        this.D = _.C(a)
    };
    _.P(FC, _.F);
    var GC = function(a) {
        this.D = _.C(a)
    };
    _.P(GC, _.F);
    GC.prototype.getVersion = function() {
        return _.jz(this, 1)
    }
    ;
    var HC = function(a) {
        this.D = _.C(a)
    };
    _.P(HC, _.F);
    var IC = function(a) {
        this.D = _.C(a)
    };
    _.P(IC, _.F);
    var JC = function(a) {
        var b = new IC;
        return _.Ph(b, 1, a)
    };
    var KC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , LC = 6 + KC.reduce(function(a, b) {
        return a + b
    });
    var MC = function(a) {
        this.D = _.C(a)
    };
    _.P(MC, _.F);
    var NC = function(a) {
        this.D = _.C(a)
    };
    _.P(NC, _.F);
    var OC = function(a) {
        this.D = _.C(a)
    };
    _.P(OC, _.F);
    OC.prototype.getVersion = function() {
        return _.jz(this, 1)
    }
    ;
    var PC = function(a) {
        this.D = _.C(a)
    };
    _.P(PC, _.F);
    var QC = function(a) {
        this.D = _.C(a)
    };
    _.P(QC, _.F);
    var RC = function(a) {
        var b = new QC;
        return _.Ph(b, 1, a)
    };
    var SC = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , TC = 6 + SC.reduce(function(a, b) {
        return a + b
    });
    var UC = function(a) {
        this.D = _.C(a)
    };
    _.P(UC, _.F);
    var VC = function(a) {
        this.D = _.C(a)
    };
    _.P(VC, _.F);
    var WC = function(a) {
        this.D = _.C(a)
    };
    _.P(WC, _.F);
    WC.prototype.getVersion = function() {
        return _.jz(this, 1)
    }
    ;
    var XC = function(a) {
        this.D = _.C(a)
    };
    _.P(XC, _.F);
    var YC = function(a) {
        this.D = _.C(a)
    };
    _.P(YC, _.F);
    var ZC = function(a) {
        var b = new YC;
        return _.Ph(b, 1, a)
    };
    var $C = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , aD = 6 + $C.reduce(function(a, b) {
        return a + b
    });
    var bD = function(a) {
        this.D = _.C(a)
    };
    _.P(bD, _.F);
    var cD = function(a) {
        this.D = _.C(a)
    };
    _.P(cD, _.F);
    cD.prototype.getVersion = function() {
        return _.jz(this, 1)
    }
    ;
    var dD = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      , eD = 6 + dD.reduce(function(a, b) {
        return a + b
    });
    var fD = function(a) {
        this.D = _.C(a)
    };
    _.P(fD, _.F);
    fD.ca = [3];
    var gD = function(a) {
        this.D = _.C(a)
    };
    _.P(gD, _.F);
    var hD = function(a, b) {
        return _.de(a, 1, b, _.xc)
    }
      , iD = function(a, b) {
        return _.de(a, 2, b, _.xc)
    }
      , jD = function(a, b) {
        return _.de(a, 3, b, Ac)
    }
      , kD = function(a, b) {
        _.de(a, 4, b, Ac)
    };
    gD.ca = [1, 2, 3, 4];
    var lD = function(a) {
        this.D = _.C(a)
    };
    _.P(lD, _.F);
    var mD = function(a) {
        this.D = _.C(a)
    };
    _.P(mD, _.F);
    mD.prototype.getVersion = function() {
        return _.jz(this, 1)
    }
    ;
    var nD = function(a, b) {
        return _.wl(a, 1, b)
    }
      , oD = function(a, b) {
        return _.Ph(a, 2, b)
    }
      , pD = function(a, b) {
        return _.Ph(a, 3, b)
    }
      , qD = function(a, b) {
        return _.wl(a, 4, b)
    }
      , rD = function(a, b) {
        return _.wl(a, 5, b)
    }
      , sD = function(a, b) {
        return _.wl(a, 6, b)
    }
      , tD = function(a, b) {
        return _.aj(a, 7, b)
    }
      , uD = function(a, b) {
        return _.wl(a, 8, b)
    }
      , vD = function(a, b) {
        return _.wl(a, 9, b)
    }
      , wD = function(a, b) {
        return _.vl(a, 10, b)
    }
      , xD = function(a, b) {
        return _.vl(a, 11, b)
    }
      , yD = function(a, b) {
        return _.de(a, 12, b, _.xc)
    }
      , zD = function(a, b) {
        return _.de(a, 13, b, _.xc)
    }
      , AD = function(a, b) {
        return _.de(a, 14, b, _.xc)
    }
      , BD = function(a, b) {
        return _.vl(a, 15, b)
    }
      , CD = function(a, b) {
        return _.aj(a, 16, b)
    }
      , DD = function(a, b) {
        return _.de(a, 17, b, Ac)
    }
      , ED = function(a, b) {
        return _.de(a, 18, b, Ac)
    }
      , FD = function(a, b) {
        return _.sm(a, 19, b)
    };
    mD.ca = [12, 13, 14, 17, 18, 19];
    var GD = function(a) {
        this.D = _.C(a)
    };
    _.P(GD, _.F);
    var HD = "a".charCodeAt()
      , ID = $a(sC)
      , JD = $a(tC);
    var KD = function(a) {
        if (/[^01]/.test(a))
            throw Error("Input bitstring " + a + " is malformed!");
        this.A = a;
        this.g = 0
    }
      , MD = function(a) {
        a = LD(a, 36);
        var b = new lD;
        b = _.rj(b, 1, Math.floor(a / 10));
        return _.wl(b, 2, a % 10 * 1E8)
    }
      , ND = function(a) {
        return String.fromCharCode(HD + LD(a, 6)) + String.fromCharCode(HD + LD(a, 6))
    }
      , QD = function(a) {
        var b = LD(a, 16);
        return !0 === !!LD(a, 1) ? (a = OD(a),
        a.forEach(function(c) {
            if (c > b)
                throw Error("ID " + c + " is past MaxVendorId " + b + "!");
        }),
        a) : PD(a, b)
    }
      , RD = function(a) {
        for (var b = [], c = LD(a, 12); c--; ) {
            var d = LD(a, 6)
              , e = LD(a, 2)
              , f = OD(a)
              , h = b
              , k = h.push
              , l = new fD;
            d = _.K(l, 1, d);
            e = _.K(d, 2, e);
            f = _.de(e, 3, f, Ac);
            k.call(h, f)
        }
        return b
    }
      , OD = function(a) {
        for (var b = LD(a, 12), c = []; b--; ) {
            var d = !0 === !!LD(a, 1)
              , e = LD(a, 16);
            if (d)
                for (d = LD(a, 16); e <= d; e++)
                    c.push(e);
            else
                c.push(e)
        }
        c.sort(function(f, h) {
            return f - h
        });
        return c
    }
      , PD = function(a, b, c) {
        for (var d = [], e = 0; e < b; e++)
            if (LD(a, 1)) {
                var f = e + 1;
                if (c && -1 === c.indexOf(f))
                    throw Error("ID: " + f + " is outside of allowed values!");
                d.push(f)
            }
        return d
    }
      , LD = function(a, b) {
        if (a.g + b > a.A.length)
            throw Error("Requested length " + b + " is past end of string.");
        var c = a.A.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    };
    KD.prototype.skip = function(a) {
        this.g += a
    }
    ;
    var SD = function(a) {
        try {
            var b = rf(a).map(function(f) {
                return (_.H = f.toString(2),
                _.x(_.H, "padStart")).call(_.H, 8, "0")
            }).join("")
              , c = new KD(b);
            if (3 !== LD(c, 3))
                return null;
            var d = iD(hD(new gD, PD(c, 24, ID)), PD(c, 24, ID))
              , e = LD(c, 6);
            0 !== e && kD(jD(d, PD(c, e)), PD(c, e));
            return d
        } catch (f) {
            return null
        }
    };
    var TD = function(a) {
        try {
            var b = rf(a).map(function(d) {
                return (_.H = d.toString(2),
                _.x(_.H, "padStart")).call(_.H, 8, "0")
            }).join("")
              , c = new KD(b);
            return FD(ED(DD(CD(BD(AD(zD(yD(xD(wD(vD(uD(tD(sD(rD(qD(pD(oD(nD(new mD, LD(c, 6)), MD(c)), MD(c)), LD(c, 12)), LD(c, 12)), LD(c, 6)), ND(c)), LD(c, 12)), LD(c, 6)), !!LD(c, 1)), !!LD(c, 1)), PD(c, 12, JD)), PD(c, 24, ID)), PD(c, 24, ID)), !!LD(c, 1)), ND(c)), QD(c)), QD(c)), RD(c))
        } catch (d) {
            return null
        }
    };
    var VD = function(a) {
        if (!a)
            return null;
        var b = a.split(".");
        if (4 < b.length)
            return null;
        a = TD(b[0]);
        if (!a)
            return null;
        var c = new GD;
        a = _.Ph(c, 1, a);
        b.shift();
        b = _.y(b);
        for (c = b.next(); !c.done; c = b.next())
            switch (c = c.value,
            UD(c)) {
            case 1:
            case 2:
                break;
            case 3:
                c = SD(c);
                if (!c)
                    return null;
                _.Ph(a, 2, c);
                break;
            default:
                return null
            }
        return a
    }
      , UD = function(a) {
        try {
            var b = rf(a).map(function(c) {
                return (_.H = c.toString(2),
                _.x(_.H, "padStart")).call(_.H, 8, "0")
            }).join("");
            return LD(new KD(b), 3)
        } catch (c) {
            return -1
        }
    };
    var WD = function(a, b) {
        var c = {};
        if (Array.isArray(b) && 0 !== b.length) {
            b = _.y(b);
            for (var d = b.next(); !d.done; d = b.next())
                d = d.value,
                c[d] = -1 !== a.indexOf(d)
        } else
            for (a = _.y(a),
            b = a.next(); !b.done; b = a.next())
                c[b.value] = !0;
        delete c[0];
        return c
    };
    var XD = function(a) {
        this.D = _.C(a)
    };
    _.P(XD, _.F);
    _.Ll = function(a) {
        return !!(a.error && a.meta && a.id)
    }
    ;
    _.YD = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var ZD = null
      , $D = function() {
        if (null === ZD) {
            ZD = "";
            try {
                var a = "";
                try {
                    a = _.ca.top.location.hash
                } catch (c) {
                    a = _.ca.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    ZD = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return ZD
    };
    var aE = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.slotId = e;
        this.taskId = void 0;
        this.uniqueId = Math.random()
    };
    var bE, cE, dE, eE, fE;
    bE = _.ca.performance;
    cE = !!(bE && bE.mark && bE.measure && bE.clearMarks);
    dE = li(function() {
        var a;
        if (a = cE)
            a = $D(),
            a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    });
    eE = function(a, b) {
        this.events = [];
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [],
        this.events = b.google_js_reporting_queue,
        c = b.google_measure_js_timing);
        this.g = dE() || (null != c ? c : Math.random() < a)
    }
    ;
    _.Jl = function(a) {
        a && bE && dE() && (bE.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
        bE.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    ;
    fE = function(a, b, c, d, e, f) {
        a.g && (b = new aE(b,c,d,void 0 === e ? 0 : e,f),
        !a.g || 2048 < a.events.length || a.events.push(b))
    }
    ;
    eE.prototype.start = function(a, b) {
        if (!this.g)
            return null;
        var c = _.yf() || _.xf();
        a = new aE(a,b,c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        bE && dE() && bE.mark(b);
        return a
    }
    ;
    eE.prototype.end = function(a) {
        if (this.g && "number" === typeof a.value) {
            var b = _.yf() || _.xf();
            a.duration = b - a.value;
            b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            bE && dE() && bE.mark(b);
            !this.g || 2048 < this.events.length || this.events.push(a)
        }
    }
    ;
    var Yt = function(a, b, c) {
        var d = _.yf();
        d && fE(a, b, 9, d, 0, c)
    };
    var jE, iE, lE, kE;
    _.gE = function() {
        this.l = "&";
        this.A = {};
        this.j = 0;
        this.g = []
    }
    ;
    _.hE = function(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }
    ;
    jE = function(a, b, c, d, e) {
        var f = [];
        _.Sn(a, function(h, k) {
            (h = iE(h, b, c, d, e)) && f.push(k + "=" + h)
        });
        return f.join(b)
    }
    ;
    iE = function(a, b, c, d, e) {
        if (null == a)
            return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0,
            d < c.length) {
                for (var f = [], h = 0; h < a.length; h++)
                    f.push(iE(a[h], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a)
            return e = e || 0,
            2 > e ? encodeURIComponent(jE(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
    ;
    lE = function(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b
          , d = kE(a) - b.length;
        if (0 > d)
            return "";
        a.g.sort(function(n, p) {
            return n - p
        });
        b = null;
        for (var e = "", f = 0; f < a.g.length; f++)
            for (var h = a.g[f], k = a.A[h], l = 0; l < k.length; l++) {
                if (!d) {
                    b = null == b ? h : b;
                    break
                }
                var m = jE(k[l], a.l, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        c += m;
                        e = a.l;
                        break
                    }
                    b = null == b ? h : b
                }
            }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    ;
    kE = function(a) {
        var b = 1, c;
        for (c in a.A)
            b = c.length > b ? c.length : b;
        return 3997 - b - a.l.length - 1
    }
    ;
    _.Hf = function(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack)
            a: {
                a = a.stack;
                var c = b;
                try {
                    -1 == a.indexOf(c) && (a = c + "\n" + a);
                    for (var d; a != d; )
                        d = a,
                        a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                    b = a.replace(RegExp("\n *", "g"), "\n");
                    break a
                } catch (e) {
                    b = c;
                    break a
                }
                b = void 0
            }
        return b
    }
    ;
    var mE = function(a, b, c, d, e) {
        Df(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e)
    }
      , Gf = function(a, b) {
        var c = void 0 === c ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        _.Sn(a, function(e, f) {
            if (e || 0 === e)
                d += "&" + f + "=" + encodeURIComponent("" + e)
        });
        vt(d, c)
    }
      , vt = function(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        var d = void 0 === d ? !1 : d;
        c.fetch ? (b = {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        },
        d && (b.mode = "cors",
        "setAttributionReporting"in XMLHttpRequest.prototype ? b.attributionReporting = {
            eventSourceEligible: "true",
            triggerEligible: "false"
        } : b.headers = {
            "Attribution-Reporting-Eligible": "event-source"
        }),
        c.fetch(a, b)) : mE(c, a, void 0, b, d)
    };
    var nE = function(a, b) {
        var c = new XD;
        a = _.K(c, 1, a);
        b = _.aj(a, 2, b);
        this.j = _.Gd(b)
    };
    var oE = function(a) {
        this.D = _.C(a)
    };
    _.P(oE, _.F);
    var qE = function(a, b) {
        return Wi(a, 1, pE, Wc(b))
    }
      , rE = function(a, b) {
        return Wi(a, 3, pE, null == b ? b : tc(b))
    }
      , pE = [1, 2, 3];
    var sE = function(a) {
        this.D = _.C(a)
    };
    _.P(sE, _.F);
    var uE = function(a, b) {
        return Wi(a, 2, tE, Jc(b))
    }
      , vE = function(a, b) {
        return Wi(a, 4, tE, _.pc(b))
    }
      , tE = [2, 4];
    var wE = function(a) {
        this.D = _.C(a)
    };
    _.P(wE, _.F);
    var xE = function(a) {
        var b = new wE;
        return _.aj(b, 1, a)
    }
      , yE = function(a, b) {
        return _.Ph(a, 3, b)
    }
      , zE = function(a, b) {
        return pk(a, 4, oE, b)
    };
    wE.ca = [4];
    var AE = function(a) {
        this.D = _.C(a)
    };
    _.P(AE, _.F);
    var BE = function(a) {
        this.D = _.C(a)
    };
    _.P(BE, _.F);
    var CE = function(a) {
        this.D = _.C(a)
    };
    _.P(CE, _.F);
    var Fl = function(a) {
        this.D = _.C(a)
    };
    _.P(Fl, _.F);
    var ul = function(a) {
        this.D = _.C(a)
    };
    _.P(ul, _.F);
    var tl = function(a) {
        this.D = _.C(a)
    };
    _.P(tl, _.F);
    var ql = function(a) {
        this.D = _.C(a)
    };
    _.P(ql, _.F);
    var Bl = function(a) {
        this.D = _.C(a)
    };
    _.P(Bl, _.F);
    var DE = function(a) {
        this.D = _.C(a)
    };
    _.P(DE, _.F);
    var EE = function(a) {
        this.D = _.C(a)
    };
    _.P(EE, _.F);
    var pl = function(a) {
        this.D = _.C(a)
    };
    _.P(pl, _.F);
    pl.prototype.getTagSessionCorrelator = function() {
        return _.Wf(this, 2)
    }
    ;
    var Al = function(a) {
        var b = new DE;
        return _.xl(a, 13, yl, b)
    };
    pl.ca = [4];
    var yl = [6, 7, 8, 9, 11, 13, 14];
    var FE = function(a) {
        this.D = _.C(a)
    };
    _.P(FE, _.F);
    var GE = function(a) {
        this.D = _.C(a)
    };
    _.P(GE, _.F);
    var Cq = function(a) {
        this.D = _.C(a)
    };
    _.P(Cq, _.F);
    _.Ui = function(a) {
        this.D = _.C(a)
    }
    ;
    _.P(_.Ui, _.F);
    _.Ui.prototype.getTagSessionCorrelator = function() {
        return _.Wf(this, 8)
    }
    ;
    _.Ti = function(a, b) {
        return _.wl(a, 10, b)
    }
    ;
    _.Zi = [3, 4, 6];
    var Aq = function(a) {
        this.D = _.C(a)
    };
    _.P(Aq, _.F);
    var HE = function(a) {
        var b = new Aq;
        return _.xl(b, 2, Dq, a)
    }
      , Dq = [1, 2, 4, 5];
    var wq = function(a) {
        this.D = _.C(a)
    };
    _.P(wq, _.F);
    wq.prototype.getTagSessionCorrelator = function() {
        return _.Wf(this, 2)
    }
    ;
    wq.ca = [4];
    var Pl = function(a) {
        this.D = _.C(a)
    };
    _.P(Pl, _.F);
    Pl.ca = [3];
    var Ol = function(a) {
        this.D = _.C(a)
    };
    _.P(Ol, _.F);
    Ol.ca = [4, 5];
    var Nl = function(a) {
        this.D = _.C(a)
    };
    _.P(Nl, _.F);
    Nl.prototype.getTagSessionCorrelator = function() {
        return _.Wf(this, 1)
    }
    ;
    Nl.ca = [2];
    var Ml = function(a) {
        this.D = _.C(a)
    };
    _.P(Ml, _.F);
    var Sl = [4, 6];
    var xp = function(a) {
        this.D = _.C(a)
    };
    _.P(xp, _.F);
    xp.prototype.getTagSessionCorrelator = function() {
        return _.Wf(this, 1)
    }
    ;
    var yp = function(a) {
        var b = Qg();
        return _.de(a, 2, b, Ac)
    };
    xp.prototype.getMessageId = function() {
        return _.If(this, 8, 0)
    }
    ;
    xp.prototype.getMessageArgs = function(a) {
        return lz(this, 9, a)
    }
    ;
    xp.ca = [2, 9];
    var Er = function(a) {
        this.D = _.C(a)
    };
    _.P(Er, _.F);
    Er.prototype.getTagSessionCorrelator = function() {
        return _.Wf(this, 1)
    }
    ;
    Er.prototype.getAdUnitPath = function() {
        return _.u(this, 8)
    }
    ;
    Er.ca = [2];
    var Rt = function(a) {
        this.D = _.C(a)
    };
    _.P(Rt, _.F);
    var St = function(a) {
        this.D = _.C(a)
    };
    _.P(St, _.F);
    var Tt = [3];
    var JE = function(a) {
        this.kb = new IE(a)
    }
      , IE = function(a) {
        this.ac = new KE(a);
        this.Td = new LE(a)
    }
      , KE = function(a) {
        this.pi = new ME(a);
        this.zi = new NE(a);
        this.outstream = new OE(a);
        this.request = new PE(a);
        this.Yh = new QE(a);
        this.Lk = new RE(a)
    }
      , QE = function(a) {
        this.Ra = function(b) {
            var c = b.Ta;
            var d = b.Ii;
            var e = b.mj;
            var f = b.fj;
            b = b.jj;
            a(yE(zE(zE(zE(zE(xE("qVcX5d"), rE(new oE, d)), rE(new oE, e)), rE(new oE, f)), rE(new oE, b)), uE(new sE, Math.round(c))))
        }
    }
      , RE = function(a) {
        this.Ra = function(b) {
            b = b.Ta;
            a(yE(xE("oHc1rb"), uE(new sE, Math.round(b))))
        }
    }
      , ME = function(a) {
        this.fl = new SE(a);
        this.globalPrivacyControl = new TE(a)
    }
      , SE = function(a) {
        this.Kb = function(b) {
            var c = b.Lb;
            var d = b.ig;
            var e = b.Vi;
            var f = b.Wi;
            b = b.Ri;
            var h = xE("XVNPAd")
              , k = new oE;
            d = Wi(k, 2, pE, Jc(Math.round(d)));
            a(yE(zE(zE(zE(zE(h, d), rE(new oE, e)), rE(new oE, f)), rE(new oE, b)), vE(new sE, c)))
        }
    }
      , TE = function(a) {
        this.Ra = function(b) {
            var c = b.Ta;
            var d = b.jm;
            b = b.km;
            a(yE(zE(zE(xE("V6BGRd"), rE(new oE, d)), rE(new oE, b)), uE(new sE, Math.round(c))))
        }
    }
      , NE = function(a) {
        this.ll = new UE(a);
        this.gm = new VE(a)
    }
      , UE = function(a) {
        this.Kb = function(b) {
            var c = b.Lb;
            b = b.didTimeout;
            a(yE(zE(xE("C2uQt"), rE(new oE, b)), vE(new sE, c)))
        }
    }
      , VE = function(a) {
        this.Kb = function(b) {
            b = b.Lb;
            a(yE(xE("iAwBu"), vE(new sE, b)))
        }
    }
      , OE = function(a) {
        this.Hl = new WE(a)
    }
      , WE = function(a) {
        this.Ra = function(b) {
            var c = b.Ta;
            b = b.Ui;
            a(yE(zE(xE("joavYe"), rE(new oE, b)), uE(new sE, Math.round(c))))
        }
    }
      , PE = function(a) {
        this.ql = new XE(a);
        this.Dm = new YE(a)
    }
      , XE = function(a) {
        this.Kb = function(b) {
            b = b.Lb;
            a(yE(xE("PKG4ed"), vE(new sE, b)))
        }
    }
      , YE = function(a) {
        this.Ra = function(b) {
            var c = b.Ta;
            b = b.status;
            a(yE(zE(xE("ksPZec"), qE(new oE, b)), uE(new sE, Math.round(c))))
        }
    }
      , LE = function(a) {
        this.Lh = new ZE(a);
        this.Nk = new $E(a);
        this.Wk = new aF(a);
        this.jl = new bF(a)
    }
      , $E = function(a) {
        this.Kb = function(b) {
            b = b.Lb;
            a(yE(xE("rsv8Kc"), vE(new sE, b)))
        }
    }
      , aF = function(a) {
        this.Ra = function(b) {
            var c = b.Ta;
            var d = b.hg;
            b = b.status;
            a(yE(zE(zE(xE("SOomke"), qE(new oE, d)), qE(new oE, b)), uE(new sE, Math.round(c))))
        }
    }
      , bF = function(a) {
        this.Kb = function(b) {
            var c = b.Lb;
            var d = b.Im;
            b = xE("zi5kKf");
            var e = new oE;
            d = Wi(e, 2, pE, Jc(Math.round(d)));
            a(yE(zE(b, d), vE(new sE, c)))
        }
    }
      , ZE = function(a) {
        this.Wh = new cF(a)
    }
      , cF = function(a) {
        this.Ra = function(b) {
            var c = b.Ta;
            b = b.status;
            a(yE(zE(xE("TP3y1d"), qE(new oE, b)), uE(new sE, Math.round(c))))
        }
    }
      , dF = function() {
        nE.apply(this, arguments);
        var a = this;
        this.hb = new JE(function(b) {
            return a.nn(b)
        }
        )
    };
    _.P(dF, nE);
    _.eF = function() {
        dF.apply(this, arguments)
    }
    ;
    _.P(_.eF, dF);
    _.r = _.eF.prototype;
    _.r.pn = function() {
        this.g.apply(this, _.di(_.za.apply(0, arguments).map(function(a) {
            return {
                Jb: !0,
                Wb: 2,
                Sb: a.toJSON()
            }
        })))
    }
    ;
    _.r.hd = function() {
        this.g.apply(this, _.di(_.za.apply(0, arguments).map(function(a) {
            return {
                Jb: !0,
                Wb: 5,
                Sb: a.toJSON()
            }
        })))
    }
    ;
    _.r.qn = function() {
        this.g.apply(this, _.di(_.za.apply(0, arguments).map(function(a) {
            return {
                Jb: !0,
                Wb: 15,
                Sb: a.toJSON()
            }
        })))
    }
    ;
    _.r.Vj = ba(0);
    _.r.Xj = function() {
        this.g.apply(this, _.di(_.za.apply(0, arguments).map(function(a) {
            return {
                Jb: !0,
                Wb: 17,
                Sb: a.toJSON()
            }
        })))
    }
    ;
    _.r.rn = function() {
        this.g.apply(this, _.di(_.za.apply(0, arguments).map(function(a) {
            return {
                Jb: !0,
                Wb: 19,
                Sb: a.toJSON()
            }
        })))
    }
    ;
    _.r.vn = function() {
        this.g.apply(this, _.di(_.za.apply(0, arguments).map(function(a) {
            return {
                Jb: !0,
                Wb: 21,
                Sb: a.toJSON()
            }
        })))
    }
    ;
    _.r.on = function() {
        this.g.apply(this, _.di(_.za.apply(0, arguments).map(function(a) {
            return {
                Jb: !0,
                Wb: 23,
                Sb: a.toJSON()
            }
        })))
    }
    ;
    _.r.un = function() {
        this.g.apply(this, _.di(_.za.apply(0, arguments).map(function(a) {
            return {
                Jb: !0,
                Wb: 24,
                Sb: a.toJSON()
            }
        })))
    }
    ;
    _.r.nn = function() {
        this.g.apply(this, _.di(_.za.apply(0, arguments).map(function(a) {
            return {
                Jb: !1,
                Wb: 1,
                Sb: a.toJSON()
            }
        })))
    }
    ;
    var fF = function(a, b) {
        if (_.B.globalThis.fetch)
            _.B.globalThis.fetch(a, {
                method: "POST",
                body: b,
                keepalive: 65536 > b.length,
                credentials: "omit",
                mode: "no-cors",
                redirect: "follow"
            }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var gF = function(a, b, c, d, e, f, h, k) {
        _.eF.call(this, a, b);
        this.H = c;
        this.C = d;
        this.J = e;
        this.I = f;
        this.o = h;
        this.K = k;
        this.A = [];
        this.l = null;
        this.F = !1
    };
    _.P(gF, _.eF);
    var hF = function(a) {
        null !== a.l && (clearTimeout(a.l),
        a.l = null);
        if (a.A.length) {
            var b = Ff(a.A, a.j);
            a.C(a.H + "?e=1", b);
            a.A = []
        }
    };
    gF.prototype.g = function() {
        var a = _.za.apply(0, arguments)
          , b = this;
        try {
            this.o && 65536 <= Ff(this.A.concat(a), this.j).length && hF(this),
            this.K && !this.F && (this.F = !0,
            this.K.g(function() {
                hF(b)
            })),
            this.A.push.apply(this.A, _.di(a)),
            this.A.length >= this.I && hF(this),
            this.A.length && null === this.l && (this.l = setTimeout(function() {
                hF(b)
            }, this.J))
        } catch (c) {
            Ef(c, this.j)
        }
    }
    ;
    var Mw = function(a, b, c, d, e, f) {
        gF.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", fF, void 0 === c ? 1E3 : c, void 0 === d ? 100 : d, (void 0 === e ? !1 : e) && !!_.B.globalThis.fetch, f)
    };
    _.P(Mw, gF);
    var iF, jF, kF;
    _.S = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }
    ;
    iF = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? 0 : b
    }
    ;
    jF = function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? "" : b
    }
    ;
    kF = function(a) {
        var b = void 0 === b ? [] : b;
        this.g = a;
        this.defaultValue = b
    }
    ;
    var lF = new iF(494575051)
      , mF = new kF(489560439)
      , nF = new kF(505762507);
    var oF, pF, Op, qF, rF, sF, tF, uF, vF, lw, kw, wF, Ir, xF, yF, zF, To, AF, BF, CF, DF, EF, FF, GF, HF, As, IF, JF, KF, LF, MF, ow, NF, OF, PF, QF, RF, SF, YF, $F, rp, aG, Fq, Hl, cG, dG, Mv, Jq, Kq, Gq, Mq, sr, eG, fG, gG, hG, ev, Nq, Oq, iG, jG, dI, eI, fI, gI, $u, hI, iI, jI, wv, kI, lI, sw, mI, nI, Gn, Dn, oI, pI, qI, Dk, fw, sI, tI, uI, vI, Io, wI, gw, Kw, xI, yI, zI, AI, BI, bl, CI, DI, ot, bv, pt, EI, FI, GI, HI, II, JI, qt, KI, LI, MI, NI, eu, OI, PI, xt, QI, RI, SI, TI, UI, VI, WI, Vs, Ws, Ss, Ts, XI, YI, ZI, Aw, Bw, $I, Cw, zw, aJ, Ew, bJ;
    oF = new _.S(560703441,!0);
    pF = new _.S(629691748);
    Op = new iF(7,.1);
    qF = new _.S(212);
    rF = new iF(612427114);
    sF = new iF(612427113);
    tF = new iF(462420536);
    uF = new _.S(476475256,!0);
    vF = new iF(438663674);
    lw = new iF(45409629);
    kw = new iF(522348973);
    wF = new iF(564509649);
    Ir = new iF(578655462,20);
    xF = new _.S(558225291);
    yF = new _.S(591917863,!0);
    zF = new iF(632270607);
    To = new iF(617843383);
    AF = new iF(639040183);
    BF = new iF(625028671,.8);
    CF = new iF(625028672,50);
    DF = new iF(629733890,1E3);
    EF = new _.S(625422809);
    FF = new _.S(573236024,!0);
    GF = new _.S(619946851,!0);
    HF = new _.S(620930073,!0);
    As = new _.S(453);
    IF = new _.S(454);
    JF = new iF(377289019,1E4);
    KF = new _.S(631804441,!0);
    LF = new iF(529,20);
    MF = new jF(10);
    ow = new iF(610770343,5);
    NF = new _.S(610525552);
    OF = new _.S(45624259);
    PF = new _.S(45627954,!0);
    QF = new _.S(45622305);
    RF = new _.S(360245597,!0);
    SF = new _.S(45628169,!0);
    _.TF = new _.S(629201869);
    _.UF = new _.S(479390945);
    _.VF = new _.S(518650310);
    _.WF = new _.S(561164161,!0);
    _.XF = new iF(550718589,250);
    YF = new _.S(586382198);
    _.ZF = new iF(609494714);
    $F = new iF(575880738,10);
    rp = new iF(586681283,100);
    aG = new _.S(599186119,!0);
    Fq = new _.S(630224494);
    _.bG = new _.S(531615531);
    Hl = new _.S(85);
    cG = new _.S(624961684);
    dG = new iF(618260805,10);
    Mv = new _.S(524098256);
    Jq = new _.S(639096031);
    Kq = new _.S(624264748);
    Gq = new _.S(624264747);
    Mq = new _.S(624264746);
    sr = new iF(532520346,120);
    eG = new _.S(557870754,!0);
    fG = new _.S(618260804,!0);
    gG = new kF(466086960);
    hG = new iF(630428304,100);
    ev = new _.S(632286145);
    Nq = new _.S(624264749);
    Oq = new iF(624264750,-1);
    iG = new _.S(607106222,!0);
    jG = new iF(398776877,6E4);
    dI = new iF(374201269,6E4);
    eI = new iF(371364213,6E4);
    fI = new _.S(633597413,!0);
    gI = new _.S(635531965);
    $u = new _.S(570764855,!0);
    hI = new jF(579921177,"control_1\\.\\d");
    iI = new iF(570764854,50);
    jI = new _.S(578725095,!0);
    wv = new _.S(623926542);
    kI = new _.S(453275889);
    lI = new _.S(377936516,!0);
    sw = new iF(599575765,1E3);
    mI = new _.S(605401295);
    nI = new iF(24);
    Gn = new kF(1);
    Dn = new jF(2,"1-0-40");
    oI = new _.S(631080173);
    pI = new iF(632561211,10);
    qI = new _.S(608664189);
    Dk = new _.S(602464517);
    _.rI = new iF(506394061,100);
    fw = new kF(489);
    sI = new _.S(628431786);
    tI = new _.S(392065905);
    uI = new iF(360245595,500);
    vI = new _.S(561985307);
    Io = new _.S(45397804,!0);
    wI = new _.S(45398607,!0);
    gw = new _.S(424117738);
    Kw = new _.S(633226268,!0);
    xI = new _.S(563462360,!0);
    yI = new _.S(555237688);
    zI = new _.S(555237687);
    AI = new _.S(555237686);
    BI = new _.S(634862262);
    bl = new _.S(507033477,!0);
    CI = new _.S(610272041,!0);
    DI = new _.S(636731477);
    ot = new _.S(399705355);
    bv = new _.S(45420038);
    pt = new iF(514795754,2);
    EI = new iF(609173130);
    FI = new iF(613312178);
    GI = new _.S(590730357);
    HI = new _.S(590730358);
    II = new _.S(590730359);
    JI = new kF(603422363);
    qt = new _.S(590730356);
    KI = new _.S(564724551);
    LI = new _.S(567489814,!0);
    MI = new _.S(45415915,!0);
    NI = new _.S(609010285,!0);
    eu = new _.S(582338617,!0);
    OI = new _.S(612823209,!0);
    PI = new _.S(582287318,!0);
    xt = new iF(596918936,500);
    QI = new iF(607730666,10);
    RI = new _.S(632286496);
    SI = new iF(620252253);
    TI = new _.S(612834765,!0);
    UI = new _.S(630167509);
    VI = new _.S(616896918,!0);
    WI = new _.S(501);
    Vs = new _.S(638632926);
    Ws = new _.S(638632927);
    Ss = new _.S(629403702);
    Ts = new _.S(638632925);
    XI = new _.S(439828594);
    YI = new _.S(483962503);
    ZI = new _.S(506738118);
    Aw = new _.S(77);
    Bw = new _.S(78);
    $I = new _.S(83);
    Cw = new _.S(80);
    zw = new _.S(76);
    aJ = new _.S(84);
    Ew = new _.S(188);
    bJ = new _.S(485990406);
    $a(sC).map(function(a) {
        return Number(a)
    });
    $a(tC).map(function(a) {
        return Number(a)
    });
    var cJ = function(a, b) {
        this.g = Mf(a);
        this.A = b
    };
    cJ.prototype[_.x(_.B.Symbol, "iterator")] = function() {
        return this
    }
    ;
    cJ.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.A.call(void 0, a.value),
            done: a.done
        }
    }
    ;
    var dJ = function(a, b) {
        return new cJ(a,b)
    }
      , eJ = function(a) {
        this.A = a;
        this.g = 0
    };
    eJ.prototype[_.x(_.B.Symbol, "iterator")] = function() {
        return this
    }
    ;
    eJ.prototype.next = function() {
        for (; this.g < this.A.length; ) {
            var a = this.A[this.g].next();
            if (!a.done)
                return a;
            this.g++
        }
        return {
            done: !0
        }
    }
    ;
    var fJ = function() {
        return new eJ(_.za.apply(0, arguments).map(Mf))
    };
    var gJ = _.ca.URL, hJ;
    try {
        new gJ("http://example.com"),
        hJ = !0
    } catch (a) {
        hJ = !1
    }
    var iJ = hJ
      , jJ = function(a) {
        this.g = new _.B.Map;
        0 == a.indexOf("?") && (a = a.substring(1));
        a = _.y(a.split("&"));
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            b = c;
            var d = "";
            c = c.split("=");
            1 < c.length && (b = decodeURIComponent(c[0].replace("+", " ")),
            d = decodeURIComponent(c[1].replace("+", " ")));
            c = this.g.get(b);
            null == c && (c = [],
            this.g.set(b, c));
            c.push(d)
        }
    };
    jJ.prototype.get = function(a) {
        return (a = this.g.get(a)) && a.length ? a[0] : null
    }
    ;
    jJ.prototype.getAll = function(a) {
        return [].concat(_.di(this.g.get(a) || []))
    }
    ;
    jJ.prototype.has = function(a) {
        return this.g.has(a)
    }
    ;
    jJ.prototype[_.x(_.B.Symbol, "iterator")] = function() {
        return fJ.apply(null, _.di(dJ(this.g, function(a) {
            var b = a[0];
            return dJ(a[1], function(c) {
                return [b, c]
            })
        })))
    }
    ;
    jJ.prototype.toString = function() {
        return Rf(this)
    }
    ;
    var Rf = function(a) {
        var b = function(c) {
            return encodeURIComponent(c).replace(/[!()~']|(%20)/g, function(d) {
                return {
                    "!": "%21",
                    "(": "%28",
                    ")": "%29",
                    "%20": "+",
                    "'": "%27",
                    "~": "%7E"
                }[d]
            })
        };
        return _.x(Array, "from").call(Array, a, function(c) {
            return b(c[0]) + "=" + b(c[1])
        }).join("&")
    }
      , lJ = function(a) {
        var b = _.wB(document, "A");
        try {
            _.Ea(b, new _.qa(a));
            var c = b.protocol
        } catch (e) {
            throw Error(a + " is not a valid URL.");
        }
        if ("" === c || ":" === c || ":" != c[c.length - 1])
            throw Error(a + " is not a valid URL.");
        if (!kJ.has(c))
            throw Error(a + " is not a valid URL.");
        if (!b.hostname)
            throw Error(a + " is not a valid URL.");
        var d = b.href;
        a = {
            href: d,
            protocol: b.protocol,
            username: "",
            password: "",
            hostname: b.hostname,
            pathname: "/" + b.pathname,
            search: b.search,
            hash: b.hash,
            toString: function() {
                return d
            }
        };
        kJ.get(b.protocol) === b.port ? (a.host = a.hostname,
        a.port = "",
        a.origin = a.protocol + "//" + a.hostname) : (a.host = b.host,
        a.port = b.port,
        a.origin = a.protocol + "//" + a.hostname + ":" + a.port);
        return a
    }
      , Of = function(a) {
        if (iJ) {
            try {
                var b = new gJ(a)
            } catch (d) {
                throw Error(a + " is not a valid URL.");
            }
            var c = kJ.get(b.protocol);
            if (!c)
                throw Error(a + " is not a valid URL.");
            if (!b.hostname)
                throw Error(a + " is not a valid URL.");
            "null" == b.origin && (a = {
                href: b.href,
                protocol: b.protocol,
                username: "",
                password: "",
                host: b.host,
                port: b.port,
                hostname: b.hostname,
                pathname: b.pathname,
                search: b.search,
                hash: b.hash
            },
            a.origin = c === b.port ? b.protocol + "//" + b.hostname : b.protocol + "//" + b.hostname + ":" + b.port,
            b = a)
        } else
            b = lJ(a);
        return b
    }
      , kJ = new _.B.Map([["http:", "80"], ["https:", "443"], ["ws:", "80"], ["wss:", "443"], ["ftp:", "21"]])
      , Nf = function(a) {
        return iJ && a.searchParams ? a.searchParams : new jJ(a.search)
    };
    var mJ = function(a) {
        this.D = _.C(a)
    };
    _.P(mJ, _.F);
    mJ.ca = [1, 2];
    var nJ = function(a) {
        this.D = _.C(a)
    };
    _.P(nJ, _.F);
    var Vf = Ye(nJ);
    _.T = function() {
        this.K = this.K;
        this.Ma = this.Ma
    }
    ;
    _.T.prototype.K = !1;
    _.T.prototype.ya = function() {
        this.K || (this.K = !0,
        this.A())
    }
    ;
    _.er = function(a, b) {
        _.Cp(a, _.Cx(Uf, b))
    }
    ;
    _.Cp = function(a, b) {
        a.K ? b() : (a.Ma || (a.Ma = []),
        a.Ma.push(b))
    }
    ;
    _.T.prototype.A = function() {
        if (this.Ma)
            for (; this.Ma.length; )
                this.Ma.shift()()
    }
    ;
    var oJ = function(a, b, c, d) {
        _.T.call(this);
        this.J = b;
        this.H = c;
        this.C = d;
        this.F = new _.B.Map;
        this.fa = 0;
        this.l = new _.B.Map;
        this.o = new _.B.Map;
        this.I = void 0;
        this.j = a
    };
    _.P(oJ, _.T);
    oJ.prototype.A = function() {
        delete this.g;
        this.F.clear();
        this.l.clear();
        this.o.clear();
        this.I && (_.Cf(this.j, "message", this.I),
        delete this.I);
        delete this.j;
        delete this.C;
        _.T.prototype.A.call(this)
    }
    ;
    var pJ = function(a) {
        if (a.g)
            return a.g;
        a.H && a.H(a.j) ? a.g = a.j : a.g = OB(a.j, a.J);
        var b;
        return null != (b = a.g) ? b : null
    }
      , rJ = function(a, b, c) {
        if (pJ(a))
            if (a.g === a.j)
                (b = a.F.get(b)) && b(a.g, c);
            else {
                var d = a.l.get(b);
                if (d && d.Dd) {
                    qJ(a);
                    var e = ++a.fa;
                    a.o.set(e, {
                        bd: d.bd,
                        rl: d.xe(c),
                        Tm: "addEventListener" === b
                    });
                    a.g.postMessage(d.Dd(c, e), "*")
                }
            }
    }
      , qJ = function(a) {
        a.I || (a.I = function(b) {
            try {
                var c = a.C ? a.C(b) : void 0;
                if (c) {
                    var d = c.xh
                      , e = a.o.get(d);
                    if (e) {
                        e.Tm || a.o.delete(d);
                        var f;
                        null == (f = e.bd) || f.call(e, e.rl, c.payload)
                    }
                }
            } catch (h) {}
        }
        ,
        _.ef(a.j, "message", a.I))
    };
    var sJ = function(a, b) {
        var c = {
            cb: function(d) {
                d = Vf(d);
                b.nc({
                    Mc: d
                })
            }
        };
        b.spsp && (c.spsp = b.spsp);
        a = a.googlefc || (a.googlefc = {});
        a.__fci = a.__fci || [];
        a.__fci.push(b.command, c)
    }
      , tJ = {
        xe: function(a) {
            return a.nc
        },
        Dd: function(a, b) {
            return {
                __fciCall: {
                    callId: b,
                    command: a.command,
                    spsp: a.spsp || void 0
                }
            }
        },
        bd: function(a, b) {
            a({
                Mc: b
            })
        }
    }
      , dr = function(a) {
        _.T.call(this);
        this.g = this.l = !1;
        this.caller = new oJ(a,"googlefcPresent",void 0,Xf);
        this.caller.F.set("getDataWithCallback", sJ);
        this.caller.l.set("getDataWithCallback", tJ)
    };
    _.P(dr, _.T);
    dr.prototype.A = function() {
        this.caller.ya();
        _.T.prototype.A.call(this)
    }
    ;
    dr.prototype.zd = function(a) {
        if (void 0 === a ? 0 : a)
            return !1;
        this.l || (this.g = !!pJ(this.caller),
        this.l = !0);
        return this.g
    }
    ;
    var uJ = function(a) {
        return new _.B.Promise(function(b) {
            a.zd() && rJ(a.caller, "getDataWithCallback", {
                command: "loaded",
                nc: function(c) {
                    b(c.Mc)
                }
            })
        }
        )
    }
      , vJ = function(a, b) {
        a.zd() && rJ(a.caller, "getDataWithCallback", {
            command: "prov",
            spsp: fl(b),
            nc: function() {}
        })
    };
    var wJ = function(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , xJ = function(a, b) {
        b = void 0 === b ? {} : b;
        _.T.call(this);
        this.l = a;
        this.g = null;
        this.F = {};
        this.C = 0;
        var c;
        this.o = null != (c = b.timeoutMs) ? c : 500;
        var d;
        this.I = null != (d = b.Qk) ? d : !1;
        this.j = null
    };
    _.P(xJ, _.T);
    xJ.prototype.A = function() {
        this.F = {};
        this.j && (_.Cf(this.l, "message", this.j),
        delete this.j);
        delete this.F;
        delete this.l;
        delete this.g;
        _.T.prototype.A.call(this)
    }
    ;
    xJ.prototype.addEventListener = function(a) {
        var b = this
          , c = {
            internalBlockOnErrors: this.I
        }
          , d = _.Jz(function() {
            return a(c)
        })
          , e = 0;
        -1 !== this.o && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.o));
        var f = function(h, k) {
            clearTimeout(e);
            h ? (c = h,
            c.internalErrorState = wJ(c),
            c.internalBlockOnErrors = b.I,
            k && 0 === c.internalErrorState || (c.tcString = "tcunavailable",
            k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
            c.internalErrorState = 3);
            a(c)
        };
        try {
            yJ(this, "addEventListener", f)
        } catch (h) {
            c.tcString = "tcunavailable",
            c.internalErrorState = 3,
            e && (clearTimeout(e),
            e = 0),
            d()
        }
    }
    ;
    xJ.prototype.removeEventListener = function(a) {
        a && a.listenerId && yJ(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var AJ = function(a, b, c) {
        var d = void 0 === d ? "755" : d;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var e = a.publisher.restrictions[b];
                if (void 0 !== e) {
                    e = e[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        if (0 === e)
            return !1;
        var f = c;
        2 === c ? (f = 0,
        2 === e && (f = 1)) : 3 === c && (f = 1,
        1 === e && (f = 0));
        a = 0 === f ? a.purpose && a.vendor ? (c = zJ(a.vendor.consents, void 0 === d ? "755" : d)) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : c && zJ(a.purpose.consents, b) : !0 : 1 === f ? a.purpose && a.vendor ? zJ(a.purpose.legitimateInterests, b) && zJ(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return a
    }
      , zJ = function(a, b) {
        return !(!a || !a[b])
    }
      , yJ = function(a, b, c, d) {
        c || (c = function() {}
        );
        if ("function" === typeof a.l.__tcfapi)
            a = a.l.__tcfapi,
            a(b, 2, c, d);
        else if (BJ(a)) {
            CJ(a);
            var e = ++a.C;
            a.F[e] = c;
            a.g && (c = {},
            a.g.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            },
            c), "*"))
        } else
            c({}, !1)
    }
      , BJ = function(a) {
        if (a.g)
            return a.g;
        a.g = OB(a.l, "__tcfapiLocator");
        return a.g
    }
      , CJ = function(a) {
        a.j || (a.j = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.F[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        _.ef(a.l, "message", a.j))
    }
      , DJ = function(a) {
        if (!1 === a.gdprApplies)
            return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = wJ(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Gf({
            e: String(a.internalErrorState)
        }, "tcfe"),
        !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }
      , EJ = function(a, b, c) {
        return !1 === a.gdprApplies ? !0 : b.every(function(d) {
            return AJ(a, d, c)
        })
    };
    var FJ = function(a, b, c) {
        this.g = a;
        this.l = b;
        this.A = void 0 === c ? function() {}
        : c
    }
      , GJ = function(a, b, c) {
        return new FJ(a,b,c)
    };
    FJ.prototype.start = function(a, b) {
        a = void 0 === a ? !1 : a;
        if (this.g === this.g.top)
            try {
                Tf(this.g),
                HJ(this, a, b)
            } catch (c) {}
    }
    ;
    var HJ = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        var d = {};
        try {
            var e = Pf(a.g)
              , f = Qf(a.g);
            d.fc = e;
            d.fctype = f
        } catch (k) {}
        try {
            var h = Sf(a.g.location.href)
        } catch (k) {}
        b && h && (d.href = h);
        b = IJ(a.l, d);
        Lf(a.g, b, function() {
            a.A(!0)
        }, function() {
            a.A(!1)
        });
        c && vJ(new dr(a.g), c)
    }
      , IJ = function(a, b) {
        var c = new Rx(Px,"https://fundingchoicesmessages.google.com/i/%{id}");
        b = _.x(Object, "assign").call(Object, {}, b, {
            ers: 3
        });
        return _.Wx(Zx(c, {
            id: a
        }), b)
    };
    var JJ = _.B.Promise;
    var KJ = function(a) {
        this.A = a
    };
    KJ.prototype.send = function(a, b, c) {
        this.A.then(function(d) {
            d.send(a, b, c)
        })
    }
    ;
    KJ.prototype.g = function(a, b) {
        return this.A.then(function(c) {
            return c.g(a, b)
        })
    }
    ;
    var LJ = function(a) {
        this.data = a
    };
    var MJ = function(a) {
        this.A = a
    };
    MJ.prototype.send = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        NJ(d.port1, b);
        this.A.postMessage(a, [d.port2].concat(c))
    }
    ;
    MJ.prototype.g = function(a, b) {
        var c = this;
        return new JJ(function(d) {
            c.send(a, d, b)
        }
        )
    }
    ;
    var OJ = function(a, b) {
        NJ(a, b);
        return new MJ(a)
    }
      , NJ = function(a, b) {
        b && (a.onmessage = function(c) {
            b(new LJ(c.data,OJ(c.ports[0])))
        }
        )
    };
    var PJ = function(a) {
        this.g = a
    }
      , QJ = function(a) {
        var b = Object.create(null);
        ("string" === typeof a ? [a] : a).forEach(function(c) {
            if ("null" === c)
                throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
            b[c] = !0
        });
        return function(c) {
            return !0 === b[c]
        }
    };
    var $k = function(a) {
        var b = a.destination;
        var c = a.rb;
        var d = a.origin;
        var e = void 0 === a.Nb ? "ZNWN1d" : a.Nb;
        var f = void 0 === a.onMessage ? void 0 : a.onMessage;
        a = void 0 === a.Gf ? void 0 : a.Gf;
        return RJ({
            destination: b,
            Pi: function() {
                return c.contentWindow
            },
            Jm: d instanceof PJ ? d : "function" === typeof d ? new PJ(d) : new PJ(QJ(d)),
            Nb: e,
            onMessage: f,
            Gf: a
        })
    }
      , RJ = function(a) {
        var b = a.destination;
        var c = a.Pi;
        var d = a.Jm;
        var e = void 0 === a.Je ? void 0 : a.Je;
        var f = a.Nb;
        var h = void 0 === a.onMessage ? void 0 : a.onMessage;
        var k = void 0 === a.Gf ? void 0 : a.Gf;
        return new KJ(new JJ(function(l, m) {
            var n = function(p) {
                p.source && p.source === c() && d.g(p.origin) && (p.data.n || p.data) === f && (b.removeEventListener("message", n, !1),
                e && p.data.t !== e ? m(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(OJ(p.ports[0], h)),
                k && k(p)))
            };
            b.addEventListener("message", n, !1)
        }
        ))
    };
    var SJ, sg, Lu, Ku, mg, Nu, rg;
    SJ = Te(function(a) {
        return "number" === typeof a
    });
    sg = Te(function(a) {
        return "string" === typeof a
    });
    Lu = Te(function(a) {
        return "boolean" === typeof a
    });
    Ku = Te(function(a) {
        return null === a
    });
    _.TJ = Te(function(a) {
        return "function" === typeof a
    });
    mg = Te(function(a) {
        return !!a && ("object" === typeof a || "function" === typeof a)
    });
    Nu = qg();
    rg = qg();
    var UJ = navigator
      , VJ = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$")
      , WJ = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$")
      , XJ = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var xg = function() {
        this.data = [];
        this.g = -1
    };
    xg.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && _.x(Number, "isInteger").call(Number, a) && this.data[a] !== b && (this.data[a] = b,
        this.g = -1)
    }
    ;
    xg.prototype.get = function(a) {
        return !!this.data[a]
    }
    ;
    var zg = function(a) {
        -1 === a.g && (a.g = a.data.reduce(function(b, c, d) {
            return b + (c ? Math.pow(2, d) : 0)
        }, 0));
        return a.g
    };
    var YJ = function(a, b) {
        (0,
        a.__uspapi)("getUSPData", 1, function(c, d) {
            b.nc({
                Mc: null != c ? c : void 0,
                gf: d ? void 0 : 2
            })
        })
    }
      , ZJ = {
        xe: function(a) {
            return a.nc
        },
        Dd: function(a, b) {
            a = {};
            return a.__uspapiCall = {
                callId: b,
                command: "getUSPData",
                version: 1
            },
            a
        },
        bd: function(a, b) {
            b = b.__uspapiReturn;
            var c;
            a({
                Mc: null != (c = b.returnValue) ? c : void 0,
                gf: b.success ? void 0 : 2
            })
        }
    }
      , $J = function(a, b) {
        b = void 0 === b ? {} : b;
        _.T.call(this);
        var c;
        this.timeoutMs = null != (c = b.timeoutMs) ? c : 500;
        this.caller = new oJ(a,"__uspapiLocator",function(d) {
            return "function" === typeof d.__uspapi
        }
        ,Bg);
        this.caller.F.set("getDataWithCallback", YJ);
        this.caller.l.set("getDataWithCallback", ZJ)
    };
    _.P($J, _.T);
    $J.prototype.A = function() {
        this.caller.ya();
        _.T.prototype.A.call(this)
    }
    ;
    var aK = function(a, b) {
        var c = {};
        if (pJ(a.caller)) {
            var d = _.Jz(function() {
                b(c)
            });
            rJ(a.caller, "getDataWithCallback", {
                nc: function(e) {
                    e.gf || (c = e.Mc);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else
            b(c)
    };
    var Ig = function(a) {
        this.g = a || {
            cookie: ""
        }
    }
      , Hg = function(a) {
        if (!_.ca.navigator.cookieEnabled)
            return !1;
        if (!a.isEmpty())
            return !0;
        a.set("TESTCOOKIESENABLED", "1", {
            Bf: 60
        });
        if ("1" !== a.get("TESTCOOKIESENABLED"))
            return !1;
        a.remove("TESTCOOKIESENABLED");
        return !0
    };
    _.r = Ig.prototype;
    _.r.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Dp;
            d = c.Tj || !1;
            var f = c.domain || void 0;
            var h = c.path || void 0;
            var k = c.Bf
        }
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        void 0 === k && (k = -1);
        c = f ? ";domain=" + f : "";
        h = h ? ";path=" + h : "";
        d = d ? ";secure" : "";
        k = 0 > k ? "" : 0 == k ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * k)).toUTCString();
        this.g.cookie = a + "=" + b + c + h + k + d + (null != e ? ";samesite=" + e : "")
    }
    ;
    _.r.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Fx(d[e]);
            if (0 == f.lastIndexOf(c, 0))
                return f.slice(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    _.r.remove = function(a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {
            Bf: 0,
            path: b,
            domain: c
        });
        return d
    }
    ;
    _.r.isEmpty = function() {
        return !this.g.cookie
    }
    ;
    _.r.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++)
            e = Fx(a[f]),
            d = e.indexOf("="),
            -1 == d ? (b.push(""),
            c.push(e)) : (b.push(e.substring(0, d)),
            c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--)
            this.remove(b[a])
    }
    ;
    var bK = new Ig("undefined" == typeof document ? null : document);
    var Gg;
    var cK = function(a) {
        this.g = a
    };
    var dK = function(a, b) {
        b = b.listener;
        (a = (0,
        a.__gpp)("addEventListener", b)) && b(a, !0)
    }
      , eK = function(a, b) {
        (0,
        a.__gpp)("removeEventListener", b.listener, b.listenerId)
    }
      , fK = function(a, b) {
        (0,
        a.__gpp)("getSection", function(c) {
            b.nc({
                Mc: null != c ? c : void 0,
                gf: c ? void 0 : 4
            })
        }, b.apiPrefix)
    }
      , gK = {
        xe: function(a) {
            return a.listener
        },
        Dd: function(a, b) {
            a = {};
            return a.__gppCall = {
                callId: b,
                command: "addEventListener",
                version: "1.1"
            },
            a
        },
        bd: function(a, b) {
            b = b.__gppReturn;
            a(b.returnValue, b.success)
        }
    }
      , hK = {
        xe: function(a) {
            return a.listener
        },
        Dd: function(a, b) {
            var c = {};
            return c.__gppCall = {
                callId: b,
                command: "removeEventListener",
                version: "1.1",
                parameter: a.listenerId
            },
            c
        },
        bd: function(a, b) {
            b = b.__gppReturn;
            var c = b.returnValue.data;
            null == a || a(c, b.success)
        }
    }
      , iK = {
        xe: function(a) {
            return a.nc
        },
        Dd: function(a, b) {
            var c = {};
            return c.__gppCall = {
                callId: b,
                command: "getSection",
                version: "1.1",
                parameter: a.apiPrefix
            },
            c
        },
        bd: function(a, b) {
            b = b.__gppReturn;
            var c;
            a({
                Mc: null != (c = b.returnValue) ? c : void 0,
                gf: b.success ? void 0 : 2
            })
        }
    }
      , jK = function(a, b) {
        var c = void 0 === b ? {} : b;
        b = c.timeoutMs;
        c = c.cmpInteractionEventReporter;
        _.T.call(this);
        this.caller = new oJ(a,"__gppLocator",function(d) {
            return "function" === typeof d.__gpp
        }
        ,Kg);
        this.caller.F.set("addEventListener", dK);
        this.caller.l.set("addEventListener", gK);
        this.caller.F.set("removeEventListener", eK);
        this.caller.l.set("removeEventListener", hK);
        this.caller.F.set("getDataWithCallback", fK);
        this.caller.l.set("getDataWithCallback", iK);
        this.timeoutMs = null != b ? b : 500;
        this.cmpInteractionEventReporter = c
    };
    _.P(jK, _.T);
    jK.prototype.A = function() {
        this.caller.ya();
        _.T.prototype.A.call(this)
    }
    ;
    jK.prototype.addEventListener = function(a) {
        var b = this
          , c = _.Jz(function() {
            a(kK, !0)
        })
          , d = -1 === this.timeoutMs ? void 0 : setTimeout(function() {
            c()
        }, this.timeoutMs);
        rJ(this.caller, "addEventListener", {
            listener: function(e, f) {
                clearTimeout(d);
                try {
                    var h;
                    if (void 0 === (null == (h = e.pingData) ? void 0 : h.gppVersion) || "1" === e.pingData.gppVersion || "1.0" === e.pingData.gppVersion) {
                        b.removeEventListener(e.listenerId);
                        var k = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 1,
                                gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                applicableSections: [-1]
                            }
                        }
                    } else
                        Array.isArray(e.pingData.applicableSections) ? k = e : (b.removeEventListener(e.listenerId),
                        k = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 2,
                                gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                                applicableSections: [-1]
                            }
                        });
                    a(k, f);
                    var l;
                    null != (l = b.cmpInteractionEventReporter) && l.g && l.Ka.on(l.g)
                } catch (m) {
                    if (null == e ? 0 : e.listenerId)
                        try {
                            b.removeEventListener(e.listenerId)
                        } catch (n) {
                            a(lK, !0);
                            return
                        }
                    a(mK, !0)
                }
            }
        })
    }
    ;
    jK.prototype.removeEventListener = function(a) {
        rJ(this.caller, "removeEventListener", {
            listener: function() {},
            listenerId: a
        })
    }
    ;
    var nK = function(a) {
        var b = void 0 === b ? !1 : b;
        if (!a)
            return !1;
        var c = sf(a.split("~")[0])
          , d = tf(c.slice(0, 6))
          , e = tf(c.slice(6, 12))
          , f = new wC;
        var h = _.wl(f, 1, d);
        var k = _.wl(h, 2, e);
        for (var l = c.slice(12), m = tf(l.slice(0, 12)), n = [], p = l.slice(12).replace(/0+$/, ""), q = 0; q < m; q++) {
            if (0 === p.length)
                throw Error("Found " + q + " of " + m + " sections [" + n + "] but reached end of input [" + l + "]");
            var t = 0 === tf(p[0]);
            p = p.slice(1);
            var w = wf(p, l)
              , v = 0 === n.length ? 0 : n[n.length - 1]
              , A = uf(w) + v;
            p = p.slice(w.length);
            if (t)
                n.push(A);
            else {
                for (var z = wf(p, l), D = uf(z), E = 0; E <= D; E++)
                    n.push(A + E);
                p = p.slice(z.length)
            }
        }
        if (0 < p.length)
            throw Error("Found " + m + " sections [" + n + "] but has remaining input [" + p + "], entire input [" + l + "]");
        var G = _.de(k, 3, n, Ac);
        var Q = _.x(a, "includes").call(a, "~") ? a.split("~").slice(1) : [];
        for (var R = 0; R < Ot(G, 3).length; ++R) {
            var L = Ot(G, 3)[R]
              , X = Q[R];
            switch (L) {
            case 2:
                if (b) {
                    var da = VD(X);
                    if (da && X) {
                        for (var Y = _.ym(da, mD, 1), ja = _.ym(da, gD, 2) || new gD, ka = _.jz(Y, 9), va = _.jz(Y, 4), Z = _.jz(Y, 5), Ja = _.O(Y, 10), hb = _.O(Y, 11), Fa = _.u(Y, 16), ya = _.O(Y, 15), Xa = {
                            consents: WD(Wd(Y, 13, _.zc, 2), ID),
                            legitimateInterests: WD(Wd(Y, 14, _.zc, 2), ID)
                        }, ib = {
                            consents: WD(Ot(Y, 17)),
                            legitimateInterests: WD(Ot(Y, 18))
                        }, Ub = WD(Wd(Y, 12, _.zc, 2), JD), Oc = gk(Y, fD, 19), dc = {}, Pc = _.y(Oc), xe = Pc.next(); !xe.done; xe = Pc.next()) {
                            var ye = xe.value
                              , ze = _.If(ye, 1, 0);
                            dc[ze] = dc[ze] || {};
                            var Vi = Ot(ye, 3);
                            for (var eg = _.y(Vi), fg = eg.next(); !fg.done; fg = eg.next())
                                dc[ze][fg.value] = _.If(ye, 2, 0)
                        }
                        var dh = {
                            tcString: X,
                            tcfPolicyVersion: ka,
                            gdprApplies: !0,
                            cmpId: va,
                            cmpVersion: Z,
                            isServiceSpecific: Ja,
                            useNonStandardStacks: hb,
                            publisherCC: Fa,
                            purposeOneTreatment: ya,
                            purpose: Xa,
                            vendor: ib,
                            specialFeatureOptins: Ub,
                            publisher: {
                                restrictions: dc,
                                consents: WD(Wd(ja, 1, _.zc, 2), ID),
                                legitimateInterests: WD(Wd(ja, 2, _.zc, 2), ID),
                                customPurposes: {
                                    consents: WD(Ot(ja, 3)),
                                    legitimateInterests: WD(Ot(ja, 4))
                                }
                            }
                        }
                    } else
                        dh = null;
                    var eh = dh;
                    if (!eh)
                        throw Error("Cannot decode TCF V2 section string.");
                    if (!EJ(eh, ["3", "4"], 0))
                        return !0
                }
                break;
            case 7:
                if (0 === X.length)
                    throw Error("Cannot decode empty USNat section string.");
                var Md = X.split(".");
                if (2 < Md.length)
                    throw Error("Expected at most 2 segments but got " + Md.length + " when decoding " + X + ".");
                var gg = void 0
                  , Xi = void 0
                  , Yi = void 0
                  , rc = void 0
                  , $i = void 0
                  , fh = void 0
                  , bj = void 0
                  , Ae = void 0
                  , lf = void 0
                  , Fm = void 0
                  , Gm = void 0
                  , Hm = void 0
                  , cj = void 0
                  , gh = void 0
                  , dj = void 0
                  , hh = void 0
                  , hg = void 0
                  , ej = void 0
                  , fj = void 0
                  , gj = void 0
                  , hj = void 0
                  , ij = void 0
                  , Nd = void 0
                  , jj = void 0
                  , Od = void 0
                  , kj = void 0
                  , Im = void 0
                  , nd = void 0
                  , lj = void 0
                  , mj = void 0
                  , nj = Md[0];
                if (0 === nj.length)
                    throw Error("Cannot decode empty core segment string.");
                var ig = vf(nj, aD)
                  , ih = tf(ig.slice(0, 6));
                ig = ig.slice(6);
                if (1 !== ih)
                    throw Error("Unable to decode unsupported USNat Section specification version " + ih + " - only version 1 is supported.");
                for (var jh = 0, Za = [], kh = 0; kh < $C.length; kh++) {
                    var mf = $C[kh];
                    Za.push(tf(ig.slice(jh, jh + mf)));
                    jh += mf
                }
                var ls = new WC;
                mj = _.wl(ls, 1, ih);
                var ms = Za.shift();
                lj = _.K(mj, 2, ms);
                var oj = Za.shift();
                nd = _.K(lj, 3, oj);
                var Jm = Za.shift();
                Im = _.K(nd, 4, Jm);
                var Km = Za.shift();
                kj = _.K(Im, 5, Km);
                var os = Za.shift();
                Od = _.K(kj, 6, os);
                var kc = Za.shift();
                jj = _.K(Od, 7, kc);
                var rs = Za.shift();
                Nd = _.K(jj, 8, rs);
                var Lm = Za.shift();
                ij = _.K(Nd, 9, Lm);
                var Nm = Za.shift();
                hj = _.K(ij, 10, Nm);
                var vs = new VC
                  , ws = Za.shift();
                gj = _.K(vs, 1, ws);
                var xs = Za.shift();
                fj = _.K(gj, 2, xs);
                var jg = Za.shift();
                ej = _.K(fj, 3, jg);
                var ys = Za.shift();
                hg = _.K(ej, 4, ys);
                var Om = Za.shift();
                hh = _.K(hg, 5, Om);
                var Cs = Za.shift();
                dj = _.K(hh, 6, Cs);
                var pj = Za.shift();
                gh = _.K(dj, 7, pj);
                var Fs = Za.shift();
                cj = _.K(gh, 8, Fs);
                var kg = Za.shift();
                Hm = _.K(cj, 9, kg);
                var Gs = Za.shift();
                Gm = _.K(Hm, 10, Gs);
                var Hs = Za.shift();
                Fm = _.K(Gm, 11, Hs);
                var Ks = Za.shift();
                lf = _.K(Fm, 12, Ks);
                Ae = _.Ph(hj, 11, lf);
                var Ns = new UC
                  , Os = Za.shift();
                bj = _.K(Ns, 1, Os);
                var qj = Za.shift();
                fh = _.K(bj, 2, qj);
                $i = _.Ph(Ae, 12, fh);
                var Qs = Za.shift();
                rc = _.K($i, 13, Qs);
                var Qm = Za.shift();
                Yi = _.K(rc, 14, Qm);
                var OX = Za.shift();
                Xi = _.K(Yi, 15, OX);
                var PX = Za.shift();
                var kG = gg = _.K(Xi, 16, PX);
                if (1 === Md.length)
                    var lG = ZC(kG);
                else {
                    var QX = ZC(kG)
                      , mG = void 0
                      , nG = void 0
                      , oG = void 0
                      , pG = Md[1];
                    if (0 === pG.length)
                        throw Error("Cannot decode empty GPC segment string.");
                    var qG = vf(pG, 3)
                      , Kn = tf(qG.slice(0, 2));
                    if (0 > Kn || 1 < Kn)
                        throw Error("Attempting to decode unknown GPC segment subsection type " + Kn + ".");
                    oG = Kn + 1;
                    var RX = tf(qG.charAt(2))
                      , SX = new XC;
                    nG = _.K(SX, 2, oG);
                    mG = _.vl(nG, 1, !!RX);
                    lG = _.Ph(QX, 2, mG)
                }
                var mu = _.ym(lG, WC, 1);
                if (1 === _.If(mu, 8, 0) || 1 === _.If(mu, 9, 0) || 1 === _.If(mu, 10, 0))
                    return !0;
                break;
            case 8:
                if (0 === X.length)
                    throw Error("Cannot decode empty USCA section string.");
                var Uj = X.split(".");
                if (2 < Uj.length)
                    throw Error("Expected at most 1 sub-section but got " + (Uj.length - 1) + " when decoding " + X + ".");
                var TX = void 0
                  , rG = void 0
                  , sG = void 0
                  , tG = void 0
                  , uG = void 0
                  , vG = void 0
                  , wG = void 0
                  , xG = void 0
                  , yG = void 0
                  , zG = void 0
                  , AG = void 0
                  , BG = void 0
                  , CG = void 0
                  , DG = void 0
                  , EG = void 0
                  , FG = void 0
                  , GG = void 0
                  , HG = void 0
                  , IG = void 0
                  , JG = void 0
                  , KG = void 0
                  , LG = void 0
                  , MG = void 0
                  , NG = Uj[0];
                if (0 === NG.length)
                    throw Error("Cannot decode empty core segment string.");
                var Ln = vf(NG, EC)
                  , nu = tf(Ln.slice(0, 6));
                Ln = Ln.slice(6);
                if (1 !== nu)
                    throw Error("Unable to decode unsupported USCA Section specification version " + nu + " - only version 1 is supported.");
                for (var ou = 0, Db = [], pu = 0; pu < DC.length; pu++) {
                    var OG = DC[pu];
                    Db.push(tf(Ln.slice(ou, ou + OG)));
                    ou += OG
                }
                var UX = new zC;
                MG = _.wl(UX, 1, nu);
                var VX = Db.shift();
                LG = _.K(MG, 2, VX);
                var WX = Db.shift();
                KG = _.K(LG, 3, WX);
                var XX = Db.shift();
                JG = _.K(KG, 4, XX);
                var YX = Db.shift();
                IG = _.K(JG, 5, YX);
                var ZX = Db.shift();
                HG = _.K(IG, 6, ZX);
                var $X = new yC
                  , aY = Db.shift();
                GG = _.K($X, 1, aY);
                var bY = Db.shift();
                FG = _.K(GG, 2, bY);
                var cY = Db.shift();
                EG = _.K(FG, 3, cY);
                var dY = Db.shift();
                DG = _.K(EG, 4, dY);
                var eY = Db.shift();
                CG = _.K(DG, 5, eY);
                var fY = Db.shift();
                BG = _.K(CG, 6, fY);
                var gY = Db.shift();
                AG = _.K(BG, 7, gY);
                var hY = Db.shift();
                zG = _.K(AG, 8, hY);
                var iY = Db.shift();
                yG = _.K(zG, 9, iY);
                xG = _.Ph(HG, 7, yG);
                var jY = new xC
                  , kY = Db.shift();
                wG = _.K(jY, 1, kY);
                var lY = Db.shift();
                vG = _.K(wG, 2, lY);
                uG = _.Ph(xG, 8, vG);
                var mY = Db.shift();
                tG = _.K(uG, 9, mY);
                var nY = Db.shift();
                sG = _.K(tG, 10, nY);
                var oY = Db.shift();
                rG = _.K(sG, 11, oY);
                var pY = Db.shift();
                var PG = TX = _.K(rG, 12, pY);
                if (1 === Uj.length)
                    var QG = CC(PG);
                else {
                    var qY = CC(PG)
                      , RG = void 0
                      , SG = void 0
                      , TG = void 0
                      , UG = Uj[1];
                    if (0 === UG.length)
                        throw Error("Cannot decode empty GPC segment string.");
                    var VG = vf(UG, 3)
                      , Mn = tf(VG.slice(0, 2));
                    if (0 > Mn || 1 < Mn)
                        throw Error("Attempting to decode unknown GPC segment subsection type " + Mn + ".");
                    TG = Mn + 1;
                    var rY = tf(VG.charAt(2))
                      , sY = new AC;
                    SG = _.K(sY, 2, TG);
                    RG = _.vl(SG, 1, !!rY);
                    QG = _.Ph(qY, 2, RG)
                }
                var WG = _.ym(QG, zC, 1);
                if (1 === _.If(WG, 5, 0) || 1 === _.If(WG, 6, 0))
                    return !0;
                break;
            case 10:
                if (0 === X.length)
                    throw Error("Cannot decode empty USCO section string.");
                var Vj = X.split(".");
                if (2 < Vj.length)
                    throw Error("Expected at most 2 segments but got " + Vj.length + " when decoding " + X + ".");
                var tY = void 0
                  , XG = void 0
                  , YG = void 0
                  , ZG = void 0
                  , $G = void 0
                  , aH = void 0
                  , bH = void 0
                  , cH = void 0
                  , dH = void 0
                  , eH = void 0
                  , fH = void 0
                  , gH = void 0
                  , hH = void 0
                  , iH = void 0
                  , jH = void 0
                  , kH = void 0
                  , lH = void 0
                  , mH = void 0
                  , nH = Vj[0];
                if (0 === nH.length)
                    throw Error("Cannot decode empty core segment string.");
                var Nn = vf(nH, LC)
                  , qu = tf(Nn.slice(0, 6));
                Nn = Nn.slice(6);
                if (1 !== qu)
                    throw Error("Unable to decode unsupported USCO Section specification version " + qu + " - only version 1 is supported.");
                for (var ru = 0, fc = [], su = 0; su < KC.length; su++) {
                    var oH = KC[su];
                    fc.push(tf(Nn.slice(ru, ru + oH)));
                    ru += oH
                }
                var uY = new GC;
                mH = _.wl(uY, 1, qu);
                var vY = fc.shift();
                lH = _.K(mH, 2, vY);
                var wY = fc.shift();
                kH = _.K(lH, 3, wY);
                var xY = fc.shift();
                jH = _.K(kH, 4, xY);
                var yY = fc.shift();
                iH = _.K(jH, 5, yY);
                var zY = fc.shift();
                hH = _.K(iH, 6, zY);
                var AY = new FC
                  , BY = fc.shift();
                gH = _.K(AY, 1, BY);
                var CY = fc.shift();
                fH = _.K(gH, 2, CY);
                var DY = fc.shift();
                eH = _.K(fH, 3, DY);
                var EY = fc.shift();
                dH = _.K(eH, 4, EY);
                var FY = fc.shift();
                cH = _.K(dH, 5, FY);
                var GY = fc.shift();
                bH = _.K(cH, 6, GY);
                var HY = fc.shift();
                aH = _.K(bH, 7, HY);
                $G = _.Ph(hH, 7, aH);
                var IY = fc.shift();
                ZG = _.K($G, 8, IY);
                var JY = fc.shift();
                YG = _.K(ZG, 9, JY);
                var KY = fc.shift();
                XG = _.K(YG, 10, KY);
                var LY = fc.shift();
                var pH = tY = _.K(XG, 11, LY);
                if (1 === Vj.length)
                    var qH = JC(pH);
                else {
                    var MY = JC(pH)
                      , rH = void 0
                      , sH = void 0
                      , tH = void 0
                      , uH = Vj[1];
                    if (0 === uH.length)
                        throw Error("Cannot decode empty GPC segment string.");
                    var vH = vf(uH, 3)
                      , On = tf(vH.slice(0, 2));
                    if (0 > On || 1 < On)
                        throw Error("Attempting to decode unknown GPC segment subsection type " + On + ".");
                    tH = On + 1;
                    var NY = tf(vH.charAt(2))
                      , OY = new HC;
                    sH = _.K(OY, 2, tH);
                    rH = _.vl(sH, 1, !!NY);
                    qH = _.Ph(MY, 2, rH)
                }
                var wH = _.ym(qH, GC, 1);
                if (1 === _.If(wH, 5, 0) || 1 === _.If(wH, 6, 0))
                    return !0;
                break;
            case 12:
                if (0 === X.length)
                    throw Error("Cannot decode empty usct section string.");
                var Wj = X.split(".");
                if (2 < Wj.length)
                    throw Error("Expected at most 2 segments but got " + Wj.length + " when decoding " + X + ".");
                var PY = void 0
                  , xH = void 0
                  , yH = void 0
                  , zH = void 0
                  , AH = void 0
                  , BH = void 0
                  , CH = void 0
                  , DH = void 0
                  , EH = void 0
                  , FH = void 0
                  , GH = void 0
                  , HH = void 0
                  , IH = void 0
                  , JH = void 0
                  , KH = void 0
                  , LH = void 0
                  , MH = void 0
                  , NH = void 0
                  , OH = void 0
                  , PH = void 0
                  , QH = void 0
                  , RH = void 0
                  , SH = Wj[0];
                if (0 === SH.length)
                    throw Error("Cannot decode empty core segment string.");
                var Pn = vf(SH, TC)
                  , tu = tf(Pn.slice(0, 6));
                Pn = Pn.slice(6);
                if (1 !== tu)
                    throw Error("Unable to decode unsupported USCT Section specification version " + tu + " - only version 1 is supported.");
                for (var uu = 0, Ib = [], vu = 0; vu < SC.length; vu++) {
                    var TH = SC[vu];
                    Ib.push(tf(Pn.slice(uu, uu + TH)));
                    uu += TH
                }
                var QY = new OC;
                RH = _.wl(QY, 1, tu);
                var RY = Ib.shift();
                QH = _.K(RH, 2, RY);
                var SY = Ib.shift();
                PH = _.K(QH, 3, SY);
                var TY = Ib.shift();
                OH = _.K(PH, 4, TY);
                var UY = Ib.shift();
                NH = _.K(OH, 5, UY);
                var VY = Ib.shift();
                MH = _.K(NH, 6, VY);
                var WY = new NC
                  , XY = Ib.shift();
                LH = _.K(WY, 1, XY);
                var YY = Ib.shift();
                KH = _.K(LH, 2, YY);
                var ZY = Ib.shift();
                JH = _.K(KH, 3, ZY);
                var $Y = Ib.shift();
                IH = _.K(JH, 4, $Y);
                var aZ = Ib.shift();
                HH = _.K(IH, 5, aZ);
                var bZ = Ib.shift();
                GH = _.K(HH, 6, bZ);
                var cZ = Ib.shift();
                FH = _.K(GH, 7, cZ);
                var dZ = Ib.shift();
                EH = _.K(FH, 8, dZ);
                DH = _.Ph(MH, 7, EH);
                var eZ = new MC
                  , fZ = Ib.shift();
                CH = _.K(eZ, 1, fZ);
                var gZ = Ib.shift();
                BH = _.K(CH, 2, gZ);
                var hZ = Ib.shift();
                AH = _.K(BH, 3, hZ);
                zH = _.Ph(DH, 8, AH);
                var iZ = Ib.shift();
                yH = _.K(zH, 9, iZ);
                var jZ = Ib.shift();
                xH = _.K(yH, 10, jZ);
                var kZ = Ib.shift();
                var UH = PY = _.K(xH, 11, kZ);
                if (1 === Wj.length)
                    var VH = RC(UH);
                else {
                    var lZ = RC(UH)
                      , WH = void 0
                      , XH = void 0
                      , YH = void 0
                      , ZH = Wj[1];
                    if (0 === ZH.length)
                        throw Error("Cannot decode empty GPC segment string.");
                    var $H = vf(ZH, 3)
                      , Qn = tf($H.slice(0, 2));
                    if (0 > Qn || 1 < Qn)
                        throw Error("Attempting to decode unknown GPC segment subsection type " + Qn + ".");
                    YH = Qn + 1;
                    var mZ = tf($H.charAt(2))
                      , nZ = new PC;
                    XH = _.K(nZ, 2, YH);
                    WH = _.vl(XH, 1, !!mZ);
                    VH = _.Ph(lZ, 2, WH)
                }
                var aI = _.ym(VH, OC, 1);
                if (1 === _.If(aI, 5, 0) || 1 === _.If(aI, 6, 0))
                    return !0;
                break;
            case 9:
                if (0 === X.length)
                    throw Error("Cannot decode empty USVA section string.");
                var Rn = vf(X, eD)
                  , wu = tf(Rn.slice(0, 6));
                Rn = Rn.slice(6);
                if (1 !== wu)
                    throw Error("Unable to decode unsupported USVA Section specification version " + wu + " - only version 1 is supported.");
                for (var xu = 0, Xb = [], yu = 0; yu < dD.length; yu++) {
                    var bI = dD[yu];
                    Xb.push(tf(Rn.slice(xu, xu + bI)));
                    xu += bI
                }
                var oZ = wu
                  , pZ = new cD
                  , qZ = _.wl(pZ, 1, oZ)
                  , rZ = Xb.shift()
                  , sZ = _.K(qZ, 2, rZ)
                  , tZ = Xb.shift()
                  , uZ = _.K(sZ, 3, tZ)
                  , vZ = Xb.shift()
                  , wZ = _.K(uZ, 4, vZ)
                  , xZ = Xb.shift()
                  , yZ = _.K(wZ, 5, xZ)
                  , zZ = Xb.shift();
                var AZ = _.K(yZ, 6, zZ);
                var BZ = new bD
                  , CZ = Xb.shift()
                  , DZ = _.K(BZ, 1, CZ)
                  , EZ = Xb.shift()
                  , FZ = _.K(DZ, 2, EZ)
                  , GZ = Xb.shift()
                  , HZ = _.K(FZ, 3, GZ)
                  , IZ = Xb.shift()
                  , JZ = _.K(HZ, 4, IZ)
                  , KZ = Xb.shift()
                  , LZ = _.K(JZ, 5, KZ)
                  , MZ = Xb.shift()
                  , NZ = _.K(LZ, 6, MZ)
                  , OZ = Xb.shift()
                  , PZ = _.K(NZ, 7, OZ)
                  , QZ = Xb.shift();
                var RZ = _.K(PZ, 8, QZ);
                var SZ = _.Ph(AZ, 7, RZ)
                  , TZ = Xb.shift()
                  , UZ = _.K(SZ, 8, TZ)
                  , VZ = Xb.shift()
                  , WZ = _.K(UZ, 9, VZ)
                  , XZ = Xb.shift()
                  , YZ = _.K(WZ, 10, XZ)
                  , ZZ = Xb.shift()
                  , cI = _.K(YZ, 11, ZZ);
                if (1 === _.If(cI, 5, 0) || 1 === _.If(cI, 6, 0))
                    return !0
            }
        }
        return !1
    }
      , mK = {
        eventName: "signalStatus",
        data: "ready",
        pingData: {
            internalErrorState: 2,
            gppString: "GPP_ERROR_STRING_UNAVAILABLE",
            applicableSections: [-1]
        },
        listenerId: -1
    }
      , kK = {
        eventName: "signalStatus",
        data: "ready",
        pingData: {
            gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
            internalErrorState: 2,
            applicableSections: [-1]
        },
        listenerId: -1
    }
      , lK = {
        eventName: "signalStatus",
        data: "ready",
        pingData: {
            gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
            internalErrorState: 2,
            applicableSections: [-1]
        },
        listenerId: -1
    };
    var oK = function(a) {
        var b = _.$g(zF);
        b = void 0 === b ? 1E3 : b;
        this.jb = 17;
        this.Ka = a;
        this.nb = b;
        0 < b && _.Wg() < 1 / b && (a = new AE,
        this.g = _.rj(a, 1, b),
        b = _.sj(this.g, _.tj, 2),
        _.ge(b, 1, _.xc, 17))
    };
    var pK = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack"in a && (this.stack = a.stack);
        _.x(Object, "setPrototypeOf").call(Object, this, pK.prototype)
    };
    _.P(pK, Error);
    pK.prototype.name = "PublisherInputError";
    var qK = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack"in a && (this.stack = a.stack);
        _.x(Object, "setPrototypeOf").call(Object, this, qK.prototype)
    };
    _.P(qK, Error);
    qK.prototype.name = "ServerError";
    var rK = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack"in a && (this.stack = a.stack);
        _.x(Object, "setPrototypeOf").call(Object, this, rK.prototype)
    };
    _.P(rK, Error);
    rK.prototype.name = "NetworkError";
    _.Ng = function(a) {
        var b = "Xc";
        if (a.Xc && a.hasOwnProperty(b))
            return a.Xc;
        b = new a;
        return a.Xc = b
    }
    ;
    var Og = function() {};
    Og.prototype.g = function() {}
    ;
    Og.prototype.l = function() {}
    ;
    Og.prototype.A = function() {
        return []
    }
    ;
    Og.prototype.j = function() {
        return []
    }
    ;
    var mh = function(a, b) {
        a.g = Mg(1, b, function() {});
        a.A = function(c, d) {
            return Mg(2, b, function() {
                return []
            })(c, 2, d)
        }
        ;
        a.j = function() {
            return Mg(3, b, function() {
                return []
            })(2)
        }
        ;
        a.l = function(c) {
            Mg(16, b, function() {})(c, 2)
        }
    };
    var Zg = function() {
        var a = {};
        this.A = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.K = function(b, c) {
            return null != a[b] ? a[b] : c
        }
        ;
        this.F = function(b, c) {
            return null != a[b] ? c.concat(a[b]) : c
        }
        ;
        this.g = function() {}
    };
    var ch = function() {
        this.g = function() {}
    }
      , oh = function(a, b) {
        a.g = Mg(14, b, function() {})
    };
    var Em = function(a, b, c) {
        a && null !== b && b != b.top && (b = b.top);
        try {
            return (void 0 === c ? 0 : c) ? (new _.Zm(b.innerWidth,b.innerHeight)).round() : _.sB(b || window).round()
        } catch (d) {
            return new _.Zm(-12245933,-12245933)
        }
    }
      , sK = function(a) {
        a = void 0 === a ? _.ca : a;
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }
      , tK = function(a) {
        return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
    }
      , Ys = function(a, b) {
        b = void 0 === b ? _.ca : b;
        a = a.scrollingElement || tK(a);
        return new _.Vm(b.pageXOffset || a.scrollLeft,b.pageYOffset || a.scrollTop)
    }
      , kn = function(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };
    var vK, wK;
    _.uK = function(a) {
        this.B = a
    }
    ;
    _.Zn = function(a, b, c) {
        return c ? Fg(b, c, a.B) : null
    }
    ;
    vK = function(a, b, c, d) {
        if (d) {
            var e = _.Wf(c, 2) - Date.now() / 1E3;
            e = {
                Bf: Math.max(e, 0),
                path: _.u(c, 3),
                domain: _.u(c, 4),
                Tj: !1
            };
            c = c.getValue();
            a = a.B;
            Cg(d) && "null" !== a.origin && (new Ig(a.document)).set(b, c, e)
        }
    }
    ;
    wK = function(a, b, c) {
        if (c && Fg(b, c, a.B)) {
            var d = a.B.location.hostname;
            if ("localhost" === d)
                d = ["localhost"];
            else if (d = d.split("."),
            2 > d.length)
                d = [];
            else {
                for (var e = [], f = 0; f < d.length - 1; ++f)
                    e.push(d.slice(f).join("."));
                d = e
            }
            d = _.y(d);
            for (var h = d.next(); !h.done; h = d.next())
                e = b,
                f = a.B,
                h = h.value,
                Cg(c) && "null" !== f.origin && (new Ig(f.document)).remove(e, "/", h)
        }
    }
    ;
    var xK = {}
      , yK = (xK[3] = $e(Sx(new Rx(Px,"https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))),
    xK);
    ({})[3] = $e(Sx(new Rx(Px,"https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js")));
    var zK = function(a) {
        this.g = a;
        this.A = ry()
    }
      , AK = function(a) {
        var b = {};
        _.ay(a, function(c) {
            b[c.g] = c.A
        });
        return b
    };
    _.BK = _.Yw(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);
    var Nw = function(a, b, c) {
        this.configuration = a;
        this.Ka = b;
        this.g = c
    };
    Nw.prototype.log = function(a, b, c) {
        var d, e = null != (d = c.nb) ? d : this.configuration[a].fe;
        0 === e || 1 / e < this.g || (b = b(_.x(Object, "assign").call(Object, {}, {
            nb: e
        }, c)),
        this.configuration[a].send(this.Ka, b))
    }
    ;
    var CK = function(a, b, c, d, e, f) {
        _.T.call(this);
        this.Nb = a;
        this.status = 1;
        this.j = b;
        this.l = c;
        this.J = d;
        this.re = !!e;
        this.F = Math.random();
        this.I = {};
        this.g = null;
        this.o = (0,
        _.Bx)(this.H, this);
        this.R = f
    };
    _.P(CK, _.T);
    CK.prototype.H = function(a) {
        if (!("*" !== this.l && a.origin !== this.l || !this.re && a.source != this.j)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.La(b) && (a = b.i,
            b.c === this.Nb && a != this.F)) {
                if (2 !== this.status)
                    try {
                        this.status = 2,
                        DK(this),
                        this.g && (this.g(),
                        this.g = null)
                    } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.La(b)) && this.I.hasOwnProperty(a))
                    this.I[a](b)
            }
        }
    }
    ;
    var DK = function(a) {
        var b = {};
        b.c = a.Nb;
        b.i = a.F;
        a.R && (b.e = a.R);
        a.j.postMessage(JSON.stringify(b), a.l)
    };
    CK.prototype.C = function() {
        if (1 === this.status) {
            try {
                this.j.postMessage && DK(this)
            } catch (a) {}
            window.setTimeout((0,
            _.Bx)(this.C, this), 50)
        }
    }
    ;
    CK.prototype.connect = function(a) {
        a && (this.g = a);
        _.ef(window, "message", this.o);
        this.J && this.C()
    }
    ;
    var EK = function(a, b, c) {
        a.I[b] = c
    };
    CK.prototype.send = function(a, b) {
        var c = {};
        c.c = this.Nb;
        c.i = this.F;
        c.s = a;
        c.p = b;
        try {
            this.j.postMessage(JSON.stringify(c), this.l)
        } catch (d) {}
    }
    ;
    CK.prototype.A = function() {
        this.status = 3;
        _.Cf(window, "message", this.o);
        _.T.prototype.A.call(this)
    }
    ;
    var qh = new _.B.Map([["navigate", 1], ["reload", 2], ["back_forward", 3], ["prerender", 4]])
      , rh = new _.B.Map([[0, 1], [1, 2], [2, 3]]);
    var FK = function(a) {
        this.D = _.C(a)
    };
    _.P(FK, _.F);
    var GK = Ye(FK);
    var HK = function(a) {
        this.D = _.C(a)
    };
    _.P(HK, _.F);
    var IK = function(a) {
        this.D = _.C(a)
    };
    _.P(IK, _.F);
    var JK, KK, LK, MK;
    _.gs = function(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }
    ;
    JK = function(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }
    ;
    KK = function(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    }
    ;
    LK = function(a, b) {
        if (3 == _.gs(b))
            return !1;
        a();
        return !0
    }
    ;
    MK = function(a, b) {
        var c = !0;
        c = void 0 === c ? !1 : c;
        if (!LK(a, b))
            if (c) {
                var d = function() {
                    _.Cf(b, "prerenderingchange", d);
                    a()
                };
                _.ef(b, "prerenderingchange", d)
            } else {
                var e = !1
                  , f = JK(b)
                  , h = function() {
                    !e && LK(a, b) && (e = !0,
                    _.Cf(b, f, h))
                };
                f && _.ef(b, f, h)
            }
    }
    ;
    _.th = function() {
        var a = this;
        this.promise = new _.B.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        }
        )
    }
    ;
    _.NK = function() {
        this.g = Math.random()
    }
    ;
    _.Ni = function(a, b, c, d, e) {
        if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .001))
            try {
                if (c instanceof _.gE)
                    var f = c;
                else
                    f = new _.gE,
                    _.Sn(c, function(k, l) {
                        var m = f
                          , n = m.j++;
                        k = _.hE(l, k);
                        m.g.push(n);
                        m.A[n] = k
                    });
                var h = lE(f, "/pagead/gen_204?id=" + b + "&");
                h && mE(_.ca, h)
            } catch (k) {}
    }
    ;
    var ji = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/
      , hi = new _.B.Map;
    var OK = function(a) {
        this.D = _.C(a)
    };
    _.P(OK, _.F);
    var PK = function(a) {
        this.D = _.C(a)
    };
    _.P(PK, _.F);
    var QK = function(a, b) {
        return _.de(a, 1, b, _.Vc)
    };
    PK.ca = [1];
    var RK = function(a) {
        this.D = _.C(a)
    };
    _.P(RK, _.F);
    var SK = function(a, b) {
        return _.de(a, 1, b, Cc)
    };
    RK.ca = [1, 2];
    var TK = function(a) {
        this.D = _.C(a)
    };
    _.P(TK, _.F);
    var UK = function(a) {
        this.D = _.C(a)
    };
    _.P(UK, _.F);
    var VK = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack"in a && (this.stack = a.stack);
        _.x(Object, "setPrototypeOf").call(Object, this, VK.prototype);
        this.name = "InputError"
    };
    _.P(VK, Error);
    var WK = function() {
        this.sb = !1
    }
      , XK = function() {
        WK.apply(this, arguments);
        this.Md = new _.th
    };
    _.P(XK, WK);
    var YK = function(a, b) {
        a.sb || (a.sb = !0,
        a.Ee = b,
        a.Md.resolve(b))
    };
    _.Tw.Object.defineProperties(XK.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Md.promise
            }
        },
        Od: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.sb
            }
        },
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.De
            }
        }
    });
    var oq = function() {
        XK.apply(this, arguments)
    };
    _.P(oq, XK);
    _.r = oq.prototype;
    _.r.G = function(a) {
        YK(this, a)
    }
    ;
    _.r.Da = function(a) {
        YK(this, null != a ? a : null)
    }
    ;
    _.r.aa = function() {
        YK(this, null)
    }
    ;
    _.r.Oa = function(a) {
        var b = this;
        a.then(function(c) {
            YK(b, c)
        })
    }
    ;
    _.r.ub = function(a) {
        this.sb || (this.sb = !0,
        this.Ee = null,
        this.De = a,
        this.Md.reject(a))
    }
    ;
    var ZK = function() {
        XK.apply(this, arguments)
    };
    _.P(ZK, XK);
    ZK.prototype.G = function(a) {
        YK(this, a)
    }
    ;
    ZK.prototype.Oa = function(a) {
        var b = this;
        a.then(function(c) {
            return void YK(b, c)
        })
    }
    ;
    ZK.prototype.ub = function(a) {
        this.sb || (this.sb = !0,
        this.De = a,
        this.Md.reject(a))
    }
    ;
    var $K = function() {
        ZK.apply(this, arguments)
    };
    _.P($K, ZK);
    $K.prototype.Da = function(a) {
        YK(this, null != a ? a : null)
    }
    ;
    $K.prototype.aa = function() {
        YK(this, null)
    }
    ;
    $K.prototype.Oa = function(a) {
        var b = this;
        a.then(function(c) {
            return void b.Da(c)
        })
    }
    ;
    var aL = function(a) {
        this.sb = !1;
        this.vc = a
    };
    _.P(aL, WK);
    aL.prototype.Od = function() {
        return this.vc.sb
    }
    ;
    aL.prototype.Jg = function() {
        return null != this.vc.Ee
    }
    ;
    _.Tw.Object.defineProperties(aL.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.vc.De
            }
        }
    });
    var bL = function(a) {
        aL.call(this, a);
        this.vc = a
    };
    _.P(bL, aL);
    _.Tw.Object.defineProperties(bL.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.vc.Ee
            }
        }
    });
    var cL = function(a) {
        aL.call(this, a);
        this.vc = a
    };
    _.P(cL, aL);
    _.Tw.Object.defineProperties(cL.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.vc.Ee) ? a : null
            }
        }
    });
    var dL = function() {
        aL.apply(this, arguments)
    };
    _.P(dL, aL);
    _.Tw.Object.defineProperties(dL.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.vc.Ee) ? a : null
            }
        }
    });
    var hs = function() {
        XK.apply(this, arguments)
    };
    _.P(hs, XK);
    hs.prototype.notify = function() {
        YK(this, null)
    }
    ;
    var eL = function(a, b) {
        b.then(function() {
            a.notify()
        })
    }
      , fL = function(a, b) {
        b = void 0 === b ? !1 : b;
        oq.call(this);
        var c = this;
        a = a.map(function(d) {
            return d.promise.then(function(e) {
                if (b || null != e)
                    return e;
                throw e;
            }, function(e) {
                c.sb = !0;
                c.De = e;
                c.Md.reject(e);
                return null
            })
        });
        _.x(_.B.Promise, "any").call(_.B.Promise, a).then(function(d) {
            c.sb || YK(c, d)
        }, function() {
            c.sb || YK(c, null)
        })
    };
    _.P(fL, oq);
    var gL = function() {
        _.T.apply(this, arguments);
        this.g = [];
        this.l = [];
        this.j = []
    };
    _.P(gL, _.T);
    var hL = function(a, b, c) {
        a.l.push({
            mc: void 0 === c ? !1 : c,
            rg: b
        })
    };
    gL.prototype.mc = function(a) {
        var b = _.x(this.l, "find").call(this.l, function(c) {
            return c.rg === a
        });
        b && (b.mc = !0)
    }
    ;
    gL.prototype.A = function() {
        this.g.length = 0;
        this.j.length = 0;
        this.l.length = 0;
        _.T.prototype.A.call(this)
    }
    ;
    var iL = function(a, b) {
        _.T.call(this);
        this.id = a;
        this.timeoutMs = b;
        this.started = !1;
        this.Sa = new gL;
        _.er(this, this.Sa)
    };
    _.P(iL, _.T);
    iL.prototype.start = function() {
        var a = this, b, c;
        return _.gf(function(d) {
            if (1 == d.g) {
                if (a.started)
                    return d.return();
                a.started = !0;
                d.l = 2;
                return d.yield(pi(a.Sa.l, null != (b = a.uf) ? b : a.timeoutMs), 4)
            }
            if (2 != d.g) {
                if (!a.K) {
                    for (var e = 0, f = _.y(a.Sa.j), h = f.next(); !h.done; h = f.next()) {
                        if (!h.value.Jg())
                            throw Error("missing input: " + a.id + "/" + e);
                        ++e
                    }
                    a.g()
                }
                d.g = 0;
                d.l = 0
            } else {
                c = jf(d);
                if (a.K)
                    return d.return();
                c instanceof VK ? a.I(c) : c instanceof Error && (a.fa ? a.fa(a.id, c) : a.F(c),
                a.l(c));
                d.g = 0
            }
        })
    }
    ;
    var U = function(a, b) {
        b = void 0 === b ? new oq : b;
        a.Sa.g.push(b);
        return b
    }
      , jL = function(a) {
        var b = void 0 === b ? new $K : b;
        a.Sa.g.push(b);
        return b
    }
      , kL = function(a, b) {
        b = void 0 === b ? new hs : b;
        a.Sa.g.push(b);
        return b
    }
      , V = function(a, b) {
        hL(a.Sa, b);
        b = new bL(b);
        a.Sa.j.push(b);
        return b
    }
      , lL = function(a, b) {
        hL(a.Sa, b);
        return new cL(b)
    }
      , mL = function(a, b) {
        hL(a.Sa, b, !0);
        return new cL(b)
    }
      , nL = function(a, b) {
        hL(a.Sa, b)
    }
      , oL = function(a, b) {
        b = new fL(b);
        hL(a.Sa, b);
        b = new bL(b);
        a.Sa.j.push(b);
        return b
    };
    iL.prototype.I = function() {}
    ;
    iL.prototype.l = function(a) {
        if (!this.fa && this.Sa.g.length) {
            a = new VK(a.message);
            for (var b = _.y(this.Sa.g), c = b.next(); !c.done; c = b.next())
                if (c = c.value,
                !c.Od) {
                    var d = a;
                    c.sb = !0;
                    c.De = d;
                    c.Md.reject(d)
                }
        }
    }
    ;
    var pL = function(a, b, c, d) {
        iL.call(this, a);
        this.f = b;
        this.C = d;
        a = {};
        c = _.y(_.x(Object, "entries").call(Object, c));
        for (b = c.next(); !b.done; b = c.next())
            d = _.y(b.value),
            b = d.next().value,
            (d = d.next().value) && (a[b] = lL(this, d));
        this.o = a
    };
    _.P(pL, iL);
    pL.prototype.g = function() {
        for (var a = this.f, b = a.apply, c = {}, d = _.y(_.x(Object, "entries").call(Object, this.o)), e = d.next(); !e.done; e = d.next()) {
            var f = _.y(e.value);
            e = f.next().value;
            f = f.next().value;
            c[e] = f.value
        }
        a = b.call(a, this, [c].concat(_.di(this.C)));
        this.j(a)
    }
    ;
    pL.prototype.F = function() {}
    ;
    var rL = function(a, b) {
        qL(a);
        nL(a, b);
        return a
    }
      , qL = function(a) {
        if (a.started)
            throw Error("Invalid opreation: producer has already started");
    };
    var ri = function(a, b, c, d) {
        pL.call(this, a, b, c, d);
        this.output = U(this, new oq);
        this.complete = new hs
    };
    _.P(ri, pL);
    ri.prototype.j = function(a) {
        var b = this;
        a.then(function(c) {
            YK(b.output, c);
            b.complete.notify()
        })
    }
    ;
    var ui = function(a, b, c, d, e) {
        pL.call(this, a, b, c, e);
        this.finished = new hs;
        a = _.x(Object, "keys").call(Object, d);
        a = _.y(a);
        for (b = a.next(); !b.done; b = a.next())
            this[b.value] = U(this)
    };
    _.P(ui, pL);
    ui.prototype.j = function(a) {
        a = _.y(_.x(Object, "entries").call(Object, a));
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = _.y(b.value);
            b = c.next().value;
            c = c.next().value;
            YK(this[b], c)
        }
        this.finished.notify()
    }
    ;
    var sL = function(a) {
        this.g = void 0 === a ? function() {}
        : a
    };
    sL.prototype.l = function(a, b) {
        var c = vi.apply(null, [a, b].concat(_.di(_.za.apply(2, arguments))));
        c.fa = this.g;
        return c
    }
    ;
    sL.prototype.A = function(a, b) {
        var c = si.apply(null, [a, b].concat(_.di(_.za.apply(2, arguments))));
        c.fa = this.g;
        return c
    }
    ;
    var tk = function(a) {
        a = void 0 === a ? new sL : a;
        _.T.call(this);
        this.F = a;
        this.C = [];
        this.H = [];
        this.O = {};
        this.I = [];
        this.o = new _.th;
        this.l = {}
    };
    _.P(tk, _.T);
    var J = function(a, b) {
        _.er(a, b);
        a.C.push(b);
        return b
    }
      , Mk = function(a, b) {
        b = _.y(b);
        for (var c = b.next(); !c.done; c = b.next())
            J(a, c.value)
    };
    tk.prototype.g = function(a, b) {
        var c = this.F.l.apply(this.F, [a, b].concat(_.di(_.za.apply(2, arguments))));
        return J(this, c)
    }
    ;
    tk.prototype.j = function(a, b) {
        var c = this.F.A.apply(this.F, [a, b].concat(_.di(_.za.apply(2, arguments))));
        return J(this, c)
    }
    ;
    var pv = function(a, b) {
        a.H.push(b);
        _.er(a, b)
    }
      , tL = function(a) {
        var b, c, d, e, f, h, k, l, m, n, p, q;
        return _.gf(function(t) {
            switch (t.g) {
            case 1:
                if (!a.I.length) {
                    t.g = 2;
                    break
                }
                return t.yield(_.B.Promise.all(a.I.map(function(w) {
                    return w.o.promise
                })), 2);
            case 2:
                b = _.y(a.C);
                for (c = b.next(); !c.done; c = b.next())
                    d = c.value,
                    d.start();
                e = _.y(a.H);
                for (f = e.next(); !f.done; f = e.next())
                    h = f.value,
                    tL(h);
                if (!a.l) {
                    t.g = 4;
                    break
                }
                k = _.x(Object, "keys").call(Object, a.l);
                if (!k.length) {
                    t.g = 4;
                    break
                }
                return t.yield(_.B.Promise.all(_.x(Object, "values").call(Object, a.l).map(function(w) {
                    return w.promise
                })), 6);
            case 6:
                for (l = t.A,
                m = 0,
                n = _.y(k),
                p = n.next(); !p.done; p = n.next())
                    q = p.value,
                    a.O[q] = l[m++];
            case 4:
                return a.o.resolve(a.O),
                t.return(a.o.promise)
            }
        })
    };
    tk.prototype.run = function() {
        tL(this)
    }
    ;
    tk.prototype.A = function() {
        _.T.prototype.A.call(this);
        this.C.length = 0;
        this.H.length = 0;
        this.I.length = 0
    }
    ;
    var uL = function(a) {
        this.D = _.C(a)
    };
    _.P(uL, _.F);
    uL.ca = [1];
    var vL = [0, Az, pA];
    var wL = function(a) {
        this.D = _.C(a)
    };
    _.P(wL, _.F);
    wL.ca = [1, 2];
    wL.prototype.g = Xe([0, Az, pA, Az, vL]);
    var Lq = 728 * 1.38;
    var yL, xL;
    yL = function() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new xL;
        this.sideRailProcessedFixedElements = new _.B.Set;
        this.sideRailAvailableSpace = new _.B.Map;
        this.sideRailPlasParam = new _.B.Map;
        this.A = [];
        this.g = null
    }
    ;
    _.Fj = function(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new _.B.Set),
        null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new _.B.Map),
        null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new _.B.Map)) : a.google_reactive_ads_global_state = new yL;
        return a.google_reactive_ads_global_state
    }
    ;
    xL = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    }
    ;
    var CL, EL, AL;
    _.zL = function(a) {
        this.g = _.Fj(a).floatingAdsStacking
    }
    ;
    _.BL = function(a, b) {
        return new AL(a,b)
    }
    ;
    CL = function(a) {
        a = _.GB(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    ;
    _.DL = function(a, b) {
        a.g.maxZIndexListeners.push(b);
        b(CL(a))
    }
    ;
    EL = function(a) {
        var b = CL(a);
        _.ay(a.g.maxZIndexListeners, function(c) {
            return c(b)
        })
    }
    ;
    AL = function(a, b) {
        this.A = a;
        this.l = b;
        this.g = null
    }
    ;
    _.FL = function(a) {
        if (null == a.g) {
            var b = a.A
              , c = a.l
              , d = b.g.nextRestrictionId++;
            b.g.maxZIndexRestrictions[d] = c;
            EL(b);
            a.g = d
        }
    }
    ;
    _.GL = function(a) {
        if (null != a.g) {
            var b = a.A;
            delete b.g.maxZIndexRestrictions[a.g];
            EL(b);
            a.g = null
        }
    }
    ;
    var Qq, HL;
    _.Ki = function(a, b) {
        b = void 0 === b ? {} : b;
        this.qa = a;
        this.La = b
    }
    ;
    _.IL = function(a, b) {
        var c = Ii(a.qa.document, b);
        if (c) {
            var d;
            if (!(d = HL(a, c, b)))
                a: {
                    d = a.qa.document;
                    for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                        var e = HL(a, c, b);
                        if (e) {
                            d = e;
                            break a
                        }
                    }
                    d = null
                }
            a = d || null
        } else
            a = null;
        return a
    }
    ;
    Qq = function(a, b) {
        b = _.y(b);
        for (var c = b.next(); !c.done; c = b.next())
            if (c = _.IL(a, c.value))
                return c;
        return null
    }
    ;
    HL = function(a, b, c) {
        if ("fixed" !== kC(b, "position"))
            return null;
        var d = "GoogleActiveViewInnerContainer" === b.getAttribute("class") || 1 >= _.Xm(_.pC, b).width && 1 >= _.Xm(_.pC, b).height || a.La.Bl && !a.La.Bl(b) ? !0 : !1;
        a.La.Ji && a.La.Ji(b, c, d);
        return d ? null : b
    }
    ;
    var Pq = 90 * 1.38;
    var Ri = function(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            var b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return "__storage_test__" === b
        } catch (c) {
            return !1
        }
    };
    var JL, KL, LL;
    JL = _.Yw(["* { pointer-events: none; }"]);
    KL = function(a, b) {
        var c = _.Bf("STYLE", a);
        c.textContent = _.fy(new _.ey(JL[0],dy));
        null == a || a.head.appendChild(c);
        setTimeout(function() {
            null == a || a.head.removeChild(c)
        }, b)
    }
    ;
    _.ML = function(a, b, c) {
        if (!a.body)
            return null;
        var d = new LL;
        d.apply(a, b);
        return function() {
            var e = c || 0;
            0 < e && KL(b.document, e);
            _.hC(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.l,
                position: d.j,
                top: d.K
            });
            b.scrollTo(0, d.A)
        }
    }
    ;
    LL = function() {
        this.g = this.K = this.j = this.l = null;
        this.A = 0
    }
    ;
    LL.prototype.apply = function(a, b) {
        this.l = a.body.style.overflow;
        this.j = a.body.style.position;
        this.K = a.body.style.top;
        this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.A = _.Fi(b);
        _.hC(a.body, "top", -this.A + "px")
    }
    ;
    var qp = function(a, b) {
        this.g = a;
        this.A = void 0 === b ? 0 : b
    };
    qp.prototype.send = function(a, b) {
        var c = a.rn
          , d = this.A++;
        b = _.wl(b, 1, d);
        c.call(a, b)
    }
    ;
    _.Tw.Object.defineProperties(qp.prototype, {
        fe: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g()
            }
        }
    });
    var Kj = "body div footer header html main section".split(" ");
    var NL = function(a) {
        this.D = _.C(a)
    };
    _.P(NL, _.F);
    NL.prototype.Wi = function() {
        return _.mi(this, 1)
    }
    ;
    NL.prototype.Vi = function() {
        return _.mi(this, 2)
    }
    ;
    var Cg = function(a) {
        return _.O(a, 5)
    }
      , OL = function(a, b) {
        _.Fh(a, 13, b)
    }
      , PL = function(a, b) {
        _.Fh(a, 12, b)
    }
      , QL = function(a, b) {
        return _.de(a, 10, b, _.Ic)
    }
      , RL = function(a, b) {
        return Yh(a, 11, b)
    };
    NL.prototype.Ri = function() {
        return _.mi(this, 11)
    }
    ;
    NL.ca = [10];
    var Pj = ["auto", "inherit", "100%"]
      , Qj = Pj.concat(["none"]);
    var SL = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
    var TL = function(a, b, c, d, e, f) {
        this.l = _.bC(a);
        this.A = _.bC(b);
        this.j = c;
        this.g = _.bC(d);
        this.K = e;
        this.F = f
    }
      , UL = function(a) {
        return JSON.stringify({
            windowCoords_t: a.l.top,
            windowCoords_r: a.l.right,
            windowCoords_b: a.l.bottom,
            windowCoords_l: a.l.left,
            frameCoords_t: a.A.top,
            frameCoords_r: a.A.right,
            frameCoords_b: a.A.bottom,
            frameCoords_l: a.A.left,
            styleZIndex: a.j,
            allowedExpansion_t: a.g.top,
            allowedExpansion_r: a.g.right,
            allowedExpansion_b: a.g.bottom,
            allowedExpansion_l: a.g.left,
            xInView: a.K,
            yInView: a.F
        })
    }
      , VL = function(a) {
        var b = window
          , c = b.screenX || b.screenLeft || 0
          , d = b.screenY || b.screenTop || 0;
        b = new _.aC(d,c + (b.outerWidth || document.documentElement.clientWidth || 0),d + (b.outerHeight || document.documentElement.clientHeight || 0),c);
        c = mC(a);
        d = _.Xm(_.pC, a);
        var e = new cC(c.x,c.y,d.width,d.height);
        c = dC(e);
        d = String(kC(a, "zIndex"));
        var f = new _.aC(0,Infinity,Infinity,0);
        for (var h = Kf(a), k = h.g.body, l = h.g.documentElement, m = tB(h.g); a = lC(a); )
            if ((!zy || 0 != a.clientHeight || a != k) && a != k && a != l && "visible" != kC(a, "overflow")) {
                var n = mC(a)
                  , p = new _.Vm(a.clientLeft,a.clientTop);
                n.x += p.x;
                n.y += p.y;
                f.top = Math.max(f.top, n.y);
                f.right = Math.min(f.right, n.x + a.clientWidth);
                f.bottom = Math.min(f.bottom, n.y + a.clientHeight);
                f.left = Math.max(f.left, n.x)
            }
        a = m.scrollLeft;
        m = m.scrollTop;
        f.left = Math.max(f.left, a);
        f.top = Math.max(f.top, m);
        h = h.g;
        h = _.sB(h.parentWindow || h.defaultView || window);
        f.right = Math.min(f.right, a + h.width);
        f.bottom = Math.min(f.bottom, m + h.height);
        m = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new cC(f.left,f.top,f.right - f.left,f.bottom - f.top) : null) ? eC(e, f) : null;
        h = a = 0;
        m && !(new _.Zm(m.width,m.height)).isEmpty() && (a = m.width / e.width,
        h = m.height / e.height);
        m = new _.aC(0,0,0,0);
        if (k = f)
            (e = eC(e, f)) ? (l = dC(f),
            n = dC(e),
            k = n.right != l.left && l.right != n.left,
            l = n.bottom != l.top && l.bottom != n.top,
            k = (0 != e.width || k) && (0 != e.height || l)) : k = !1;
        k && (m = new _.aC(Math.max(c.top - f.top, 0),Math.max(f.left + f.width - c.right, 0),Math.max(f.top + f.height - c.bottom, 0),Math.max(c.left - f.left, 0)));
        return new TL(b,c,d,m,a,h)
    };
    var WL = function(a) {
        this.K = a;
        this.j = null;
        this.H = this.status = 0;
        this.A = null;
        this.Nb = "sfchannel" + a
    };
    WL.prototype.Rg = function() {
        return 2 == this.H
    }
    ;
    var XL = function(a) {
        this.g = a
    };
    XL.prototype.getValue = function(a, b) {
        return null == this.g[a] || null == this.g[a][b] ? null : this.g[a][b]
    }
    ;
    var YL = function(a, b) {
        this.jf = a;
        this.kf = b;
        this.A = this.g = !1
    };
    var ZL = function(a, b, c, d, e, f, h, k) {
        k = void 0 === k ? [] : k;
        this.g = a;
        this.A = b;
        this.l = c;
        this.permissions = d;
        this.metadata = e;
        this.j = f;
        this.re = h;
        this.hostpageLibraryTokens = k;
        this.R = ""
    };
    var $L = function(a, b) {
        this.A = a;
        this.R = b
    };
    $L.prototype.g = function(a) {
        this.R && a && (a.sentinel = this.R);
        return JSON.stringify(a)
    }
    ;
    var aM = function(a, b, c) {
        $L.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.P(aM, $L);
    aM.prototype.g = function() {
        return $L.prototype.g.call(this, {
            uid: this.A,
            version: this.version
        })
    }
    ;
    var bM = function(a, b, c, d) {
        $L.call(this, a, void 0 === d ? "" : d);
        this.j = b;
        this.l = c
    };
    _.P(bM, $L);
    bM.prototype.g = function() {
        return $L.prototype.g.call(this, {
            uid: this.A,
            initialWidth: this.j,
            initialHeight: this.l
        })
    }
    ;
    var cM = function(a, b, c) {
        $L.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.P(cM, $L);
    cM.prototype.g = function() {
        return $L.prototype.g.call(this, {
            uid: this.A,
            description: this.description
        })
    }
    ;
    var dM = function(a, b, c, d) {
        $L.call(this, a, void 0 === d ? "" : d);
        this.l = b;
        this.push = c
    };
    _.P(dM, $L);
    dM.prototype.g = function() {
        return $L.prototype.g.call(this, {
            uid: this.A,
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        })
    }
    ;
    var eM = function(a, b) {
        $L.call(this, a, void 0 === b ? "" : b)
    };
    _.P(eM, $L);
    eM.prototype.g = function() {
        return $L.prototype.g.call(this, {
            uid: this.A
        })
    }
    ;
    var fM = function(a, b, c) {
        $L.call(this, a, void 0 === c ? "" : c);
        this.j = b
    };
    _.P(fM, $L);
    fM.prototype.g = function() {
        var a = {
            uid: this.A,
            newGeometry: UL(this.j)
        };
        return $L.prototype.g.call(this, a)
    }
    ;
    var gM = function(a, b, c, d, e, f) {
        fM.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.l = d;
        this.push = e
    };
    _.P(gM, fM);
    gM.prototype.g = function() {
        var a = {
            uid: this.A,
            success: this.success,
            newGeometry: UL(this.j),
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        };
        this.R && (a.sentinel = this.R);
        return JSON.stringify(a)
    }
    ;
    var hM = function(a, b, c, d) {
        $L.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.P(hM, $L);
    hM.prototype.g = function() {
        return $L.prototype.g.call(this, {
            uid: this.A,
            width: this.width,
            height: this.height
        })
    }
    ;
    var iM = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins)
            return a.location.ancestorOrigins.length;
        var c = 0;
        ml(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var jM, mM, nM, lM;
    jM = function() {
        this.g = []
    }
    ;
    _.kM = function(a) {
        return a + "px"
    }
    ;
    mM = function(a, b, c, d, e) {
        a.g.push(new lM(b,c,d,e))
    }
    ;
    nM = function(a) {
        for (var b = a.g.length - 1; 0 <= b; b--) {
            var c = a.g[b];
            c.A ? (c.l.style.removeProperty(c.g),
            c.l.style.setProperty(c.g, String(c.j), c.K)) : c.l.style[c.g] = c.j
        }
        a.g.length = 0
    }
    ;
    lM = function(a, b, c, d) {
        this.l = a;
        this.g = (this.A = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
        this.j = this.A ? a.style.getPropertyValue(this.g) : a.style[this.g];
        this.K = this.A ? a.style.getPropertyPriority(this.g) : void 0;
        this.A ? (a.style.removeProperty(this.g),
        a.style.setProperty(this.g, String(c), d)) : a.style[this.g] = String(c)
    }
    ;
    var oM, pM;
    oM = function(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    }
    ;
    pM = function() {
        var a = window
          , b = _.yf(a);
        b && oM({
            label: "2",
            type: 9,
            value: b
        }, a)
    }
    ;
    _.qM = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = d || window
          , h = "undefined" !== typeof queueMicrotask;
        return function() {
            e && h && queueMicrotask(function() {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var k = _.yf()
              , l = 3;
            try {
                var m = b.apply(this, arguments)
            } catch (p) {
                l = 13;
                if (!c)
                    throw p;
                c(a, p)
            } finally {
                if (f.google_measure_js_timing && k) {
                    var n = _.yf() || 0;
                    oM(_.x(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: k,
                        duration: n - k,
                        type: l
                    }, e && h && {
                        taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                    }), f)
                }
            }
            return m
        }
    }
    ;
    var vM = function(a) {
        WL.call(this, a.uniqueId);
        var b = this;
        this.I = a.T;
        this.C = 1 === a.size;
        this.U = new YL(a.permissions.jf && !this.C,a.permissions.kf && !this.C);
        this.F = a.wh;
        var c;
        this.Xa = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.Ia = "file:" == c ? "*" : c + "//" + d;
        this.lb = !!a.re;
        this.da = a.Pj ? "//" + a.Pj + ".safeframe.googlesyndication.com" : "//tpc.googlesyndication.com";
        this.ua = a.rb ? "*" : "https:" + this.da;
        this.na = rM(a);
        this.l = new jM;
        sM(this, a.wh, a.size);
        this.j = this.ia = VL(a.wh);
        this.fa = a.ln || "1-0-40";
        var e;
        this.sa = null != (e = a.Xk) ? e : "";
        tM(this, a);
        this.J = _.qM(412, function() {
            return uM(b)
        }, a.Db);
        this.Ma = -1;
        this.o = 0;
        var f = _.qM(415, function() {
            b.g && (b.g.name = "",
            a.xj && a.xj(),
            _.Cf(b.g, "load", f))
        }, a.Db);
        _.ef(this.g, "load", f);
        this.Ng = _.qM(413, this.Ng, a.Db);
        this.Dh = _.qM(417, this.Dh, a.Db);
        this.Hh = _.qM(419, this.Hh, a.Db);
        this.Cg = _.qM(411, this.Cg, a.Db);
        this.mg = _.qM(409, this.mg, a.Db);
        this.O = _.qM(410, this.O, a.Db);
        this.oh = _.qM(416, this.oh, a.Db);
        this.A = new CK(this.Nb,this.g.contentWindow,this.ua,!1);
        EK(this.A, "init_done", (0,
        _.Bx)(this.Ng, this));
        EK(this.A, "register_done", (0,
        _.Bx)(this.Dh, this));
        EK(this.A, "report_error", (0,
        _.Bx)(this.Hh, this));
        EK(this.A, "expand_request", (0,
        _.Bx)(this.Cg, this));
        EK(this.A, "collapse_request", (0,
        _.Bx)(this.mg, this));
        EK(this.A, "creative_geometry_update", (0,
        _.Bx)(this.O, this));
        this.A.connect((0,
        _.Bx)(this.oh, this))
    };
    _.P(vM, WL);
    var sM = function(a, b, c) {
        a.C ? (b.style.width = _.oC("100%", !0),
        b.style.height = _.oC("auto", !0)) : (b.style.width = _.oC(c.width, !0),
        b.style.height = _.oC(c.height, !0))
    }
      , tM = function(a, b) {
        var c = b.rb;
        var d = b.content;
        var e = b.pe;
        var f = b.size;
        var h = void 0 === b.qe ? "3rd party ad content" : b.qe;
        var k = b.mf;
        b = b.dg;
        d = c ? "" : null != d ? d : "";
        var l = {
            shared: {
                sf_ver: a.fa,
                ck_on: Hg(bK) ? 1 : 0,
                flash_ver: "0"
            }
        };
        d = a.fa + ";" + d.length + ";" + d;
        l = new ZL(a.K,a.Ia,a.ia,a.U,new XL(l),a.C,a.lb,a.Xa);
        var m = {};
        m.uid = l.g;
        m.hostPeerName = l.A;
        m.initialGeometry = UL(l.l);
        var n = l.permissions;
        n = JSON.stringify({
            expandByOverlay: n.jf,
            expandByPush: n.kf,
            readCookie: n.g,
            writeCookie: n.A
        });
        m = (m.permissions = n,
        m.metadata = JSON.stringify(l.metadata.g),
        m.reportCreativeGeometry = l.j,
        m.isDifferentSourceWindow = l.re,
        m.goog_safeframe_hlt = AK(l.hostpageLibraryTokens),
        m);
        l.R && (m.sentinel = l.R);
        l = JSON.stringify(m);
        m = f.width;
        f = f.height;
        a.C && (f = m = 0);
        n = {};
        e = (n.id = e,
        n.title = h,
        n.name = d + l,
        n.scrolling = "no",
        n.marginWidth = "0",
        n.marginHeight = "0",
        n.width = String(m),
        n.height = String(f),
        n["data-is-safeframe"] = "true",
        n);
        void 0 === c && (h = a.sa,
        f = a.da,
        d = a.fa,
        (l = h) && (l = "?" + l),
        f = (void 0 === f ? "//tpc.googlesyndication.com" : f) + ("/safeframe/" + d + "/html/container.html" + l),
        (d = iM(_.uB(_.pB(a.F)))) && (f += (h ? "&" : "?") + "n=" + d),
        e.src = "https:" + f);
        null !== a.na && (e.sandbox = a.na);
        k && (e.allow = k);
        b && (e.credentialless = "true");
        e["aria-label"] = "Advertisement";
        e.tabIndex = "0";
        c ? (a.g = c,
        rB(a.g, e)) : (c = {},
        c = (c.frameborder = 0,
        c.allowTransparency = "true",
        c.style = "border:0;vertical-align:bottom;",
        c.src = "about:blank",
        c),
        e && cb(c, e),
        k = _.Bf("IFRAME"),
        rB(k, c),
        a.g = k);
        a.C && (a.g.style.minWidth = "100%");
        a.F.appendChild(a.g)
    };
    _.r = vM.prototype;
    _.r.oh = function() {
        _.ef(window, "resize", this.J);
        _.ef(window, "scroll", this.J)
    }
    ;
    _.r.Ng = function(a) {
        try {
            if (0 != this.status)
                throw Error("Container already initialized");
            if ("string" !== typeof a)
                throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.La(b) || !Xj(b.uid) || "string" !== typeof b.version)
                throw Error("Cannot parse JSON message");
            var c = new aM(b.uid,b.version,b.sentinel);
            if (this.K !== c.A || this.fa !== c.version)
                throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.I) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    }
    ;
    _.r.Dh = function(a) {
        try {
            if (1 != this.status)
                throw Error("Container not initialized");
            if ("string" !== typeof a)
                throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.La(b) || !Xj(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight)
                throw Error("Cannot parse JSON message");
            if (this.K !== (new bM(b.uid,b.initialWidth,b.initialHeight,b.sentinel)).A)
                throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    }
    ;
    _.r.Hh = function(a) {
        try {
            if ("string" !== typeof a)
                throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.La(b) || !Xj(b.uid) || "string" !== typeof b.description)
                throw Error("Cannot parse JSON message");
            var c = new cM(b.uid,b.description,b.sentinel);
            if (this.K !== c.A)
                throw Error("Wrong source container");
            var d;
            null == (d = this.I) || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            null == (e = this.I) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    }
    ;
    _.r.Cg = function(a) {
        try {
            if (2 != this.status)
                throw Error("Container is not registered");
            if (0 != this.H)
                throw Error("Container is not collapsed");
            if ("string" !== typeof a)
                throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.La(b) || !Xj(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push)
                throw Error("Cannot parse JSON message");
            var c = new dM(b.uid,new _.aC(b.expand_t,b.expand_r,b.expand_b,b.expand_l),b.push,b.sentinel);
            if (this.K !== c.A)
                throw Error("Wrong source container");
            if (!(0 <= c.l.top && 0 <= c.l.left && 0 <= c.l.bottom && 0 <= c.l.right))
                throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.U.kf || !c.push && this.U.jf) {
                var e = c.l
                  , f = c.push
                  , h = this.j = VL(this.g);
                if (e.top <= h.g.top && e.right <= h.g.right && e.bottom <= h.g.bottom && e.left <= h.g.left) {
                    if (!f)
                        for (var k = this.g.parentNode; k && k.style; k = k.parentNode)
                            mM(this.l, k, "overflowX", "visible", "important"),
                            mM(this.l, k, "overflowY", "visible", "important");
                    var l = dC(new cC(0,0,this.j.A.getWidth(),this.j.A.getHeight()));
                    _.La(e) ? (l.top -= e.top,
                    l.right += e.right,
                    l.bottom += e.bottom,
                    l.left -= e.left) : (l.top -= e,
                    l.right += Number(void 0),
                    l.bottom += Number(void 0),
                    l.left -= Number(void 0));
                    mM(this.l, this.F, "position", "relative");
                    mM(this.l, this.g, "position", "absolute");
                    if (f) {
                        var m = this.l
                          , n = this.F
                          , p = l.getWidth();
                        mM(m, n, "width", _.kM(p));
                        var q = this.l
                          , t = this.F
                          , w = l.getHeight();
                        mM(q, t, "height", _.kM(w))
                    } else
                        mM(this.l, this.g, "zIndex", "10000");
                    var v = this.l
                      , A = this.g
                      , z = l.getWidth();
                    mM(v, A, "width", _.kM(z));
                    var D = this.l
                      , E = this.g
                      , G = l.getHeight();
                    mM(D, E, "height", _.kM(G));
                    mM(this.l, this.g, "left", _.kM(l.left));
                    mM(this.l, this.g, "top", _.kM(l.top));
                    this.H = 2;
                    this.j = VL(this.g);
                    d = !0
                } else
                    d = !1
            }
            a = d;
            this.A.send("expand_response", (new gM(this.K,a,this.j,c.l,c.push)).g());
            if (!a)
                throw Error("Viewport or document body not large enough to expand into.");
        } catch (R) {
            var Q;
            null == (Q = this.I) || Q.error("Invalid EXPAND_REQUEST message. Reason: " + R.message)
        }
    }
    ;
    _.r.mg = function(a) {
        try {
            if (2 != this.status)
                throw Error("Container is not registered");
            if (!this.Rg())
                throw Error("Container is not expanded");
            if ("string" !== typeof a)
                throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.La(b) || !Xj(b.uid))
                throw Error("Cannot parse JSON message");
            if (this.K !== (new eM(b.uid,b.sentinel)).A)
                throw Error("Wrong source container");
            nM(this.l);
            this.H = 0;
            this.g && (this.j = VL(this.g));
            this.A.send("collapse_response", (new fM(this.K,this.j)).g())
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    }
    ;
    var uM = function(a) {
        if (1 == a.status || 2 == a.status)
            switch (a.o) {
            case 0:
                wM(a);
                a.Ma = window.setTimeout((0,
                _.Bx)(a.ha, a), 1E3);
                a.o = 1;
                break;
            case 1:
                a.o = 2;
                break;
            case 2:
                a.o = 2
            }
    };
    vM.prototype.O = function(a) {
        try {
            if ("string" !== typeof a)
                throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.La(b) || !Xj(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel)
                throw Error("Cannot parse JSON message");
            var c = new hM(b.uid,b.width,b.height,b.sentinel);
            if (this.K !== c.A)
                throw Error("Wrong source container");
            var d = String(c.height);
            if (this.C)
                d !== this.g.height && (this.g.height = d,
                uM(this));
            else {
                var e;
                null == (e = this.I) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (h) {
            var f;
            null == (f = this.I) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + h.message)
        }
    }
    ;
    vM.prototype.ha = function() {
        if (1 == this.status || 2 == this.status)
            switch (this.o) {
            case 1:
                this.o = 0;
                break;
            case 2:
                wM(this),
                this.Ma = window.setTimeout((0,
                _.Bx)(this.ha, this), 1E3),
                this.o = 1
            }
    }
    ;
    var wM = function(a) {
        a.j = VL(a.g);
        a.A.send("geometry_update", (new fM(a.K,a.j)).g())
    }
      , rM = function(a) {
        var b = null;
        a.Rj && (b = a.Rj);
        return null == b ? null : b.join(" ")
    }
      , xM = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"]
      , yM = ["allow-top-navigation"]
      , zM = ["allow-same-origin"]
      , AM = NB([].concat(_.di(xM), _.di(yM)));
    NB([].concat(_.di(xM), _.di(zM)));
    NB([].concat(_.di(xM), _.di(yM), _.di(zM)));
    var BM = _.Yw(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"])
      , CM = {
        sm: function(a) {
            if ("string" !== typeof a.version)
                throw new TypeError("version is not a string");
            if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version))
                throw new RangeError("Invalid version: " + a.version);
            if ("string" !== typeof a.Wf)
                throw new TypeError("subdomain is not a string");
            if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.Wf))
                throw new RangeError("Invalid subdomain: " + a.Wf);
            return $e("https://" + a.Wf + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
        },
        Fp: function(a) {
            return _.af(BM, a)
        }
    };
    var sk = {
        Ne: !1
    };
    var DM = function() {};
    DM.g = function() {
        throw Error("Must be overridden");
    }
    ;
    var bk = function() {
        this.g = 0
    };
    _.P(bk, DM);
    bk.Xc = void 0;
    bk.g = function() {
        return bk.Xc ? bk.Xc : bk.Xc = new bk
    }
    ;
    var EM = function() {
        this.cache = {}
    }
      , kk = function() {
        FM || (FM = new EM);
        return FM
    }
      , mk = function(a) {
        var b = Sc(_.Mh(a, 3));
        if (!b)
            return 3;
        if (void 0 === ik(a, 2))
            return 4;
        a = Date.now();
        return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
    };
    EM.prototype.get = function(a, b) {
        if (this.cache[a])
            return {
                kd: this.cache[a],
                success: !0
            };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (h) {
            var d;
            dk(6, a, null == (d = h) ? void 0 : d.message);
            return {
                kd: null,
                success: !1
            }
        }
        if (!c)
            return {
                kd: null,
                success: !0
            };
        try {
            var e = IA(c);
            this.cache[a] = e;
            return {
                kd: e,
                success: !0
            }
        } catch (h) {
            var f;
            dk(5, a, null == (f = h) ? void 0 : f.message);
            return {
                kd: null,
                success: !1
            }
        }
    }
    ;
    EM.prototype.set = function(a, b) {
        var c = ik(a, 1)
          , d = "_GESPSK-" + c;
        HA(a);
        try {
            b.setItem(d, fl(a))
        } catch (f) {
            var e;
            dk(7, c, null == (e = f) ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    }
    ;
    EM.prototype.remove = function(a, b) {
        a = ik(a, 1);
        try {
            b.removeItem("_GESPSK-" + a),
            delete this.cache[a]
        } catch (d) {
            var c;
            dk(8, a, null == (c = d) ? void 0 : c.message)
        }
    }
    ;
    var FM = null;
    var GM = function(a, b) {
        iL.call(this, a);
        this.id = a;
        this.C = b
    };
    _.P(GM, iL);
    GM.prototype.F = function(a) {
        this.C(this.id, a)
    }
    ;
    var vk = function(a, b, c, d) {
        GM.call(this, 1041, d);
        this.storage = b;
        this.o = V(this, a);
        c && (this.j = lL(this, c))
    };
    _.P(vk, GM);
    vk.prototype.g = function() {
        var a = this.o.value, b, c, d = null != (c = this.storage) ? c : null == (b = this.j) ? void 0 : b.value;
        d && kk().set(a, d) && _.mi(a, 2) && dk(27, ik(a, 1))
    }
    ;
    var xk = function(a, b) {
        GM.call(this, 1048, b);
        this.j = U(this);
        this.o = U(this);
        this.H = V(this, a)
    };
    _.P(xk, GM);
    xk.prototype.g = function() {
        var a = this.H.value
          , b = function(c) {
            var d = {};
            dk(c, ik(a, 1), null, (d.tic = String(Math.round((Date.now() - Sc(_.Mh(a, 3))) / 6E4)),
            d))
        };
        switch (mk(a)) {
        case 0:
            b(24);
            break;
        case 1:
            b(25);
            this.o.G(a);
            break;
        case 2:
            b(26);
            this.j.G(a);
            break;
        case 3:
            dk(9, ik(a, 1));
            this.j.G(a);
            break;
        case 4:
            b(23),
            this.j.G(a)
        }
    }
    ;
    var HM = function(a, b) {
        GM.call(this, 1094, b);
        this.j = kL(this);
        this.o = V(this, a)
    };
    _.P(HM, GM);
    HM.prototype.g = function() {
        var a = this.o.value;
        if (a) {
            if (void 0 !== a)
                for (var b = _.y(_.x(Object, "keys").call(Object, a)), c = b.next(); !c.done; c = b.next())
                    if (c = c.value,
                    _.x(c, "startsWith").call(c, "_GESPSK"))
                        try {
                            a.removeItem(c)
                        } catch (d) {}
            FM = new EM;
            this.j.notify()
        }
    }
    ;
    var Lk = function(a, b, c) {
        GM.call(this, 1049, c);
        this.storage = b;
        nL(this, a)
    };
    _.P(Lk, GM);
    Lk.prototype.g = function() {
        for (var a = _.y(fk(this.storage)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = kk().get(b, this.storage).kd;
            if (c) {
                var d = mk(c);
                if (2 === d || 3 === d)
                    kk().remove(c, this.storage),
                    dk(40, b)
            }
        }
    }
    ;
    var uk = function(a, b, c) {
        GM.call(this, 1027, c);
        this.af = a;
        this.storage = b;
        this.j = U(this);
        this.o = U(this)
    };
    _.P(uk, GM);
    uk.prototype.g = function() {
        var a = kk().get(this.af, this.storage).kd;
        a || (a = HA(GA(this.af)),
        this.o.G(a.ub(ok(100))));
        this.j.G(a)
    }
    ;
    var Pk = function(a, b) {
        GM.call(this, 1036, b);
        this.j = U(this);
        this.o = V(this, a)
    };
    _.P(Pk, GM);
    Pk.prototype.g = function() {
        var a = this.o.value;
        0 !== mk(a) && this.j.G(a)
    }
    ;
    var Bk = function(a, b, c) {
        GM.call(this, 1046, c);
        this.output = kL(this);
        this.j = U(this);
        this.o = V(this, b);
        nL(this, a)
    };
    _.P(Bk, GM);
    Bk.prototype.g = function() {
        this.j.G(this.o.value)
    }
    ;
    var yk = function(a, b, c) {
        GM.call(this, 1047, c);
        this.collectorFunction = a;
        this.j = U(this);
        this.o = U(this);
        this.H = U(this);
        this.J = V(this, b)
    };
    _.P(yk, GM);
    yk.prototype.g = function() {
        var a = this
          , b = this.J.value
          , c = ik(b, 1);
        dk(18, c);
        try {
            var d = _.xf();
            this.collectorFunction().then(function(e) {
                dk(29, c, null, {
                    delta: String(_.xf() - d)
                });
                a.j.G(Yh(b, 2, e));
                a.H.Da(e)
            }).catch(function(e) {
                dk(28, c, rk(e));
                a.o.G(b.ub(ok(106)))
            })
        } catch (e) {
            dk(1, c, rk(e)),
            this.o.G(b.ub(ok(107)))
        }
    }
    ;
    var wk = function(a, b) {
        GM.call(this, 1028, b);
        this.j = U(this);
        this.o = V(this, a)
    };
    _.P(wk, GM);
    wk.prototype.g = function() {
        var a = this.o.value
          , b = ik(a, 1);
        null != Sc(_.Mh(a, 3)) || dk(35, b);
        this.j.G(a)
    }
    ;
    var zk = function(a, b, c, d, e) {
        GM.call(this, 1050, e);
        this.J = c;
        this.H = d;
        this.j = U(this);
        this.o = V(this, a);
        this.O = lL(this, b)
    };
    _.P(zk, GM);
    zk.prototype.g = function() {
        var a = this.o.value
          , b = ik(a, 1)
          , c = this.O.value;
        if (null == c)
            dk(41, b),
            a.ub(ok(111)),
            this.j.G(a);
        else if ("string" !== typeof c)
            dk(21, b),
            this.j.G(a.ub(ok(113)));
        else {
            if (c.length > (/^(\d+)$/.test(b) ? this.H : this.J)) {
                var d = {};
                dk(12, b, null, (d.sl = String(c.length),
                d));
                b = a.ub(ok(108));
                _.nk(b, 2)
            } else
                c.length || dk(20, b),
                _.nk(a, 10);
            this.j.G(a)
        }
    }
    ;
    var Ak = function(a) {
        GM.call(this, 1046, a);
        this.output = kL(this)
    };
    _.P(Ak, GM);
    Ak.prototype.g = function() {
        var a = this;
        ek().then(function() {
            a.output.notify()
        })
    }
    ;
    var IM = function(a, b, c, d, e) {
        e = void 0 === e ? sk : e;
        GM.call(this, 1059, d);
        this.O = b;
        this.J = c;
        this.o = e;
        this.j = U(this);
        this.U = V(this, a);
        this.H = lL(this, c)
    };
    _.P(IM, GM);
    IM.prototype.g = function() {
        var a = this.H.value;
        if (a) {
            var b = this.U.value, c = b.id, d = b.collectorFunction, e;
            b = null != (e = b.networkCode) ? e : c;
            c = {};
            dk(42, b, null, (c.ea = String(Number(this.O)),
            c));
            this.j.Oa(Ck(b, d, a, this.J, this.C, this.o))
        }
    }
    ;
    var JM = function(a, b) {
        GM.call(this, 1057, b);
        this.j = a;
        this.o = U(this);
        this.H = U(this)
    };
    _.P(JM, GM);
    JM.prototype.g = function() {
        if (this.j)
            if ("object" !== typeof this.j)
                dk(46, "UNKNOWN_COLLECTOR_ID"),
                KM(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.j.id
                  , b = this.j.networkCode;
                a && b && (delete this.j.id,
                dk(47, a + ";" + b));
                a = null != b ? b : a;
                "string" !== typeof a ? (b = {},
                dk(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a),
                b)),
                KM(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.j.collectorFunction ? (dk(14, a),
                KM(this, a, 105)) : (_.H = bh(nF),
                _.x(_.H, "includes")).call(_.H, a) ? (dk(22, a),
                KM(this, a, 104)) : this.H.G(this.j)
            }
        else
            dk(39, "UNKNOWN_COLLECTOR_ID"),
            KM(this, "UNKNOWN_COLLECTOR_ID", 110)
    }
    ;
    var KM = function(a, b, c) {
        a.o.G(GA(b).ub(ok(c)))
    };
    var Jk = function(a, b, c, d, e) {
        var f = document;
        f = void 0 === f ? document : f;
        e = void 0 === e ? sk : e;
        this.g = b;
        this.l = c;
        this.W = f;
        this.o = d;
        this.I = e;
        this.F = [];
        this.K = [];
        this.j = [];
        this.A = 0;
        a = _.y(a);
        for (b = a.next(); !b.done; b = a.next())
            this.push(b.value)
    };
    Jk.prototype.push = function(a) {
        var b = this;
        this.l || this.o();
        var c = function(f, h) {
            return void LM(b, f, h)
        };
        a = new JM(a,c);
        var d = new vk(a.o,void 0,this.g,c);
        c = new IM(a.H,this.l,this.g,c,this.I);
        var e = new tk;
        Mk(e, [a, d, c]);
        e.run();
        a = c.j.promise;
        this.F.push(a);
        d = _.y(this.K);
        for (c = d.next(); !c.done; c = d.next())
            a.then(c.value)
    }
    ;
    Jk.prototype.addOnSignalResolveCallback = function(a) {
        this.K.push(a);
        for (var b = _.y(this.F), c = b.next(); !c.done; c = b.next())
            c.value.then(a)
    }
    ;
    Jk.prototype.addErrorHandler = function(a) {
        this.j.push(a)
    }
    ;
    Jk.prototype.clearAllCache = function() {
        var a = this
          , b = this.W.currentScript instanceof HTMLScriptElement ? this.W.currentScript.src : "";
        if (1 === this.A) {
            var c = {};
            dk(49, "", null, (c.url = b,
            c))
        } else if (c = String(_.Xg(null != b ? b : "")),
        (_.H = bh(mF),
        _.x(_.H, "includes")).call(_.H, c))
            c = {},
            dk(48, "", null, (c.url = b,
            c));
        else {
            var d = new tk;
            c = new HM(this.g,function(e, f) {
                return void LM(a, e, f)
            }
            );
            J(d, c);
            d.run();
            this.A = 1;
            setTimeout(function() {
                a.A = 0
            }, 1E3 * _.$g(lF));
            d = {};
            dk(43, "", null, (d.url = b,
            d));
            return c.j.promise
        }
    }
    ;
    var LM = function(a, b, c) {
        a = _.y(a.j);
        for (var d = a.next(); !d.done; d = a.next())
            d = d.value,
            d(b, c)
    }
      , Kk = function(a) {
        this.push = function(b) {
            a.push(b)
        }
        ;
        this.addOnSignalResolveCallback = function(b) {
            a.addOnSignalResolveCallback(b)
        }
        ;
        this.addErrorHandler = function(b) {
            a.addErrorHandler(b)
        }
        ;
        this.clearAllCache = function() {
            a.clearAllCache()
        }
    };
    var Qk = function(a, b, c) {
        GM.call(this, 1035, c);
        this.o = b;
        this.j = U(this);
        this.H = V(this, a)
    };
    _.P(Qk, GM);
    Qk.prototype.g = function() {
        var a = this
          , b = this.H.value
          , c = ik(b, 1)
          , d = this.o.toString()
          , e = {};
        dk(30, c, null, (e.url = d,
        e));
        var f = document.createElement("script");
        f.setAttribute("esp-signal", "true");
        kb(f, this.o);
        var h = function() {
            var k = {};
            dk(31, c, null, (k.url = d,
            k));
            a.j.G(b.ub(ok(109)));
            _.Cf(f, "error", h)
        };
        document.head.appendChild(f);
        _.ef(f, "error", h)
    }
    ;
    var Ok = new _.B.Set;
    var Sk = function(a, b) {
        try {
            var c = void 0 === _.O(b, 6) ? !0 : _.O(b, 6), d, e, f = pf(_.If(b, 2, 0)), h = _.u(b, 3);
            a: switch (_.If(b, 4, 0)) {
            case 1:
                var k = "pt";
                break a;
            case 2:
                k = "cr";
                break a;
            default:
                k = ""
            }
            var l = new Oz(f,h,k)
              , m = null != (e = null == (d = _.ym(b, Lz, 5)) ? void 0 : _.u(d, 1)) ? e : "";
            l.te = m;
            l.g = c;
            l.B = a;
            var n = l.build();
            of(n)
        } catch (p) {}
    };
    var MM = function(a) {
        this.D = _.C(a)
    };
    _.P(MM, _.F);
    MM.prototype.g = Xe([0, uz, -3, xz]);
    var NM = [.05, .1, .2, .5]
      , OM = [0, .5, 1]
      , PM = function(a) {
        a = Fk(a);
        if (!a)
            return -1;
        try {
            var b = tK(a.document);
            var c = new _.Zm(b.clientWidth,b.clientHeight)
        } catch (d) {
            c = new _.Zm(-12245933,-12245933)
        }
        return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
    }
      , QM = function(a, b) {
        return 0 >= a || 0 >= b ? [] : NM.map(function(c) {
            return Math.min(a / b * c, 1)
        })
    }
      , SM = function(a) {
        this.K = a.B;
        this.j = a.qc;
        this.I = a.timer;
        this.l = null;
        this.g = a.Db;
        this.A = RM(this);
        this.F = a.zn || !1
    }
      , TM = function() {
        var a;
        return !!window.IntersectionObserver && pw(null == (a = window.performance) ? void 0 : a.now)
    };
    SM.prototype.getSlotId = function() {
        return this.l
    }
    ;
    var VM = function(a, b) {
        if (a.A) {
            if (null != a.l) {
                try {
                    UM(a, Math.round(performance.now()), 0, 0, 0, !1)
                } catch (c) {
                    a.g && a.g(c)
                }
                a.A && a.A.unobserve(a.j)
            }
            a.l = b;
            a.A.observe(a.j)
        }
    }
      , RM = function(a) {
        if (!_.ca.IntersectionObserver)
            return null;
        var b = a.j.offsetWidth * a.j.offsetHeight
          , c = PM(a.K);
        b = [].concat(_.di(OM), _.di(QM(c, b)));
        Na(b);
        return new _.ca.IntersectionObserver(function(d) {
            try {
                for (var e = PM(a.K), f = _.y(d), h = f.next(); !h.done; h = f.next()) {
                    var k = h.value
                      , l = Math.round(k.boundingClientRect.width * k.boundingClientRect.height)
                      , m = Math.round(k.intersectionRect.width * k.intersectionRect.height)
                      , n = Math.round(k.time);
                    if (_.x(Number, "isSafeInteger").call(Number, l) && _.x(Number, "isSafeInteger").call(Number, m) && _.x(Number, "isSafeInteger").call(Number, e) && _.x(Number, "isSafeInteger").call(Number, n))
                        a.F && UM(a, n, l, m, e, k.isIntersecting);
                    else {
                        var p = d = void 0;
                        null == (p = (d = a).g) || p.call(d, Error("invalid geometry: " + l + " | " + m + " | " + e + " | " + n))
                    }
                }
            } catch (q) {
                a.g && a.g(q)
            }
        }
        ,{
            threshold: b
        })
    }
      , UM = function(a, b, c, d, e, f) {
        if (null == a.l)
            throw Error("Not Attached.");
        var h = new MM;
        c = _.Kh(h, 1, c);
        d = _.Kh(c, 2, d);
        e = _.Kh(d, 3, e);
        b = _.Kh(e, 4, b);
        f = _.Fh(b, 5, f);
        f = tb(f.g(), 4);
        fE(a.I, "1", 10, f, void 0, a.l)
    };
    var WM = function(a, b) {
        this.g = a;
        this.A = b
    }
      , XM = function(a) {
        if (a.g.frames.google_ads_top_frame)
            return !0;
        var b = PB(a.g);
        b = b && b.contentWindow;
        if (!b)
            return !1;
        b.addEventListener("message", function(c) {
            var d = c.data;
            c = c.ports;
            "__goog_top_url_req" === d.msgType && c.length && c[0].postMessage({
                msgType: "__goog_top_url_resp",
                topUrl: a.A
            })
        }, !1);
        return !0
    };
    var dl = function(a) {
        this.D = _.C(a)
    };
    _.P(dl, _.F);
    var hl = Ye(dl)
      , el = [1, 3];
    var bg = {
        hp: 0,
        bp: 1,
        cp: 9,
        Yo: 2,
        Zo: 3,
        gp: 5,
        ep: 7,
        ap: 10
    };
    var YM = _.Yw(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"])
      , Zk = _.af(YM);
    var dp = function(a) {
        var b = void 0 === b ? ck(_.ca) : b;
        this.id = a;
        this.g = .001 > Math.random();
        this.ib = {
            pvsid: String(b)
        }
    }
      , ZM = function(a) {
        a = Dl(a);
        var b;
        Rl.set(a, (null != (b = Rl.get(a)) ? b : 0) + 1)
    }
      , Ql = function() {
        return [].concat(_.di(_.x(Rl, "values").call(Rl))).reduce(function(a, b) {
            return a + b
        }, 0)
    }
      , fp = function(a, b, c) {
        "string" !== typeof c && (c = String(c));
        /^\w+$/.test(b) && (c ? a.ib[b] = c : delete a.ib[b])
    }
      , hp = function(a) {
        var b = 1;
        b = void 0 === b ? null : b;
        if ($M())
            b = !0;
        else {
            var c = a.g;
            b && 0 <= b && (c = Math.random() < b);
            b = c && !!a.id
        }
        b && mE(window, aN(a) || "", void 0, !0)
    }
      , aN = function(a) {
        var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
        _.Sn(a.ib, function(c, d) {
            c && (b += "&" + d + "=" + encodeURIComponent(c))
        });
        return b
    }
      , bN = function(a) {
        var b = [].concat(_.di(_.x(Rl, "keys").call(Rl)));
        b = b.map(function(c) {
            return c.replace(/,/g, "\\,")
        });
        3 >= b.length ? fp(a, "nw_id", b.join()) : (b = b.slice(0, 3),
        b.push("__extra__"),
        fp(a, "nw_id", b.join()))
    }
      , ep = function(a, b) {
        fp(a, "vrg", b.tf);
        bN(a);
        fp(a, "nslots", Ql().toString());
        b = Qg();
        b.length && fp(a, "eid", b.join());
        fp(a, "pub_url", document.URL)
    }
      , Qp = function(a, b, c) {
        c = void 0 === c ? .001 : c;
        if (void 0 === c || 0 > c || 1 < c)
            c = .001;
        Math.random() < c && (a = new dp(a),
        b(a),
        hp(a))
    }
      , Rl = new _.B.Map
      , $M = li(function() {
        return !!KB()
    });
    var Gl = function() {
        eE.call(this, _.I(Hl) || _.I(aJ) ? 1 : 0, _.ca);
        this.A = 0;
        var a = _.I(Hl) || _.I(aJ);
        _.ca.google_measure_js_timing = a || _.ca.google_measure_js_timing
    };
    _.P(Gl, eE);
    _.cN = function(a) {
        this.context = a
    }
    ;
    _.cN.prototype.Tb = function(a, b) {
        return Kl(this.context, a, b)
    }
    ;
    _.cN.prototype.Ca = function(a, b) {
        return El(this.context, a, b)
    }
    ;
    _.cN.prototype.Rb = function(a, b) {
        Il(this.context, a, b);
        return !1
    }
    ;
    _.cN.prototype.ed = ba(1);
    var dN = function() {
        this.id = "goog_" + sy++
    }
      , eN = function(a) {
        _.T.call(this);
        this.context = a;
        this.l = new _.B.Map
    };
    _.P(eN, _.T);
    eN.prototype.A = function() {
        _.T.prototype.A.call(this);
        this.l.clear()
    }
    ;
    eN.prototype.listen = function(a, b) {
        var c = this;
        if (this.K)
            return function() {}
            ;
        var d = "string" === typeof a ? a : a.id, e, f, h = null != (f = null == (e = this.l.get(d)) ? void 0 : e.add(b)) ? f : new _.B.Set([b]);
        this.l.set(d, h);
        return function() {
            return void fN(c, a, b)
        }
    }
    ;
    var gN = function(a) {
        var b = Wv;
        var c = void 0 === c ? function() {
            return !0
        }
        : c;
        return new _.B.Promise(function(d) {
            var e = a.listen(b, function(f) {
                c(f) && (e(),
                d(f))
            })
        }
        )
    }
      , fN = function(a, b, c) {
        var d;
        return !(null == (d = a.l.get("string" === typeof b ? b : b.id)) || !d.delete(c))
    }
      , $t = function(a, b, c, d) {
        var e, f, h, k, l, m, n, p;
        _.gf(function(q) {
            e = "string" === typeof b ? b : b.id;
            f = a.l.get(e);
            if (null == (h = f) || !h.size)
                return q.return();
            k = "function" === typeof window.CustomEvent ? new CustomEvent(e,{
                detail: d,
                bubbles: !0,
                cancelable: !0
            }) : function() {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent(e, !0, !0, d);
                return t
            }();
            l = [];
            m = _.y(f);
            n = m.next();
            for (p = {}; !n.done; p = {
                Xg: void 0
            },
            n = m.next())
                p.Xg = n.value,
                l.push(new _.B.Promise(function(t) {
                    return function(w) {
                        return _.gf(function(v) {
                            if (1 == v.g)
                                return v.yield(0, 2);
                            Kl(a.context, c, function() {
                                a.l.has(e) && f.has(t.Xg) && (0,
                                t.Xg)(k)
                            }, !0);
                            w();
                            v.g = 0
                        })
                    }
                }(p)));
            return q.yield(_.B.Promise.all(l), 0)
        })
    }
      , hN = new dN
      , iN = new dN
      , au = new dN
      , jN = new dN
      , cu = new dN
      , kN = new dN
      , lN = new dN
      , qr = new dN
      , Wv = new dN
      , mN = new dN;
    var nN = function() {
        this.data = void 0;
        this.status = 0;
        this.g = []
    }
      , oN = function(a) {
        a.data = void 0;
        a.status = 1
    };
    var pN, tN, wN, Vv, xN, sN, rN, qN, yN;
    pN = function() {
        this.g = new _.B.Map;
        this.F = 0;
        this.A = new _.B.Map;
        this.Yb = null;
        this.j = this.l = this.C = this.I = 0;
        this.nf = null;
        this.o = new nN;
        this.K = new nN
    }
    ;
    tN = function(a, b) {
        a.g.get(b) || (a.g.set(b, {
            gd: !0,
            uh: "",
            Yd: "",
            Mj: 0,
            qh: [],
            sh: [],
            Uc: !1,
            vp: -1
        }),
        _.Cp(b, function() {
            a.g.delete(b);
            qN(a, b)
        }),
        b.listen(iN, function(c) {
            c = c.detail;
            var d = a.g.get(b);
            d.uh = ik(c, 33) || "";
            d.Uc = !0;
            rN(a, b, function() {
                return void (d.uh = "")
            });
            sN(a, b, function() {
                return void (d.Uc = !1)
            })
        }))
    }
    ;
    _.bu = function(a, b) {
        var c;
        return null == (c = a.g.get(b)) ? void 0 : c.gd
    }
    ;
    _.uN = function(a, b) {
        if (a = a.g.get(b))
            a.gd = !1
    }
    ;
    _.vN = function(a, b) {
        if (a = a.g.get(b))
            a.gd = !0
    }
    ;
    wN = function(a, b) {
        if (!b.length)
            return [];
        var c = Dl(b[0].getAdUnitPath());
        b.every(function(h) {
            return Dl(h.getAdUnitPath()) === c
        });
        var d = [];
        a = _.y(a.g);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.y(e.value);
            e = f.next().value;
            (f = f.next().value.uh) && Dl(e.getAdUnitPath()) === c && !_.x(b, "includes").call(b, e) && d.push(f)
        }
        return d
    }
    ;
    Vv = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.g.get(b)) ? void 0 : c.Yd) ? d : ""
    }
    ;
    xN = function(a, b) {
        return (a = a.g.get(b)) ? a.Mj - 1 : 0
    }
    ;
    sN = function(a, b, c) {
        (a = a.g.get(b)) && a.qh.push(c)
    }
    ;
    rN = function(a, b, c) {
        (a = a.g.get(b)) && a.sh.push(c)
    }
    ;
    qN = function(a, b) {
        if (a = a.g.get(b))
            for (b = a.sh.slice(),
            a.sh.length = 0,
            a = _.y(b),
            b = a.next(); !b.done; b = a.next())
                b = b.value,
                b()
    }
    ;
    yN = function(a, b) {
        if (a = a.g.get(b))
            for (b = a.qh.slice(),
            a.qh.length = 0,
            a = _.y(b),
            b = a.next(); !b.done; b = a.next())
                b = b.value,
                b()
    }
    ;
    pN.prototype.Uc = function(a) {
        var b, c;
        return null != (c = null == (b = this.g.get(a)) ? void 0 : b.Uc) ? c : !1
    }
    ;
    var zN = function(a, b, c) {
        if (a = a.g.get(b))
            a.Lj = c
    }
      , AN = function(a, b) {
        if (a = a.g.get(b)) {
            var c;
            null == (c = a.Lj) || c.ya();
            delete a.Lj
        }
    };
    var Ul = new _.B.Map
      , Tl = new _.B.Map;
    var Wl = function(a, b) {
        this.messageId = a;
        this.messageArgs = b
    };
    Wl.prototype.getMessageId = function() {
        return this.messageId
    }
    ;
    Wl.prototype.getMessageArgs = function() {
        return this.messageArgs
    }
    ;
    var BN = Xl(2)
      , CN = Xl(3)
      , DN = Xl(4)
      , EN = Xl(5)
      , FN = Xl(6)
      , GN = Xl(12)
      , HN = Xl(14)
      , IN = Xl(16)
      , qm = Xl(19)
      , JN = Xl(20)
      , KN = Xl(23)
      , LN = Xl(26)
      , MN = Xl(28)
      , NN = Xl(149)
      , ON = Xl(30)
      , PN = Xl(31)
      , QN = Xl(34)
      , RN = Xl(35)
      , zn = Xl(36)
      , Gu = Xl(38)
      , SN = Xl(40)
      , TN = Xl(48)
      , UN = Xl(50)
      , VN = Xl(60)
      , WN = Xl(63)
      , XN = Xl(64)
      , YN = Xl(66)
      , ZN = Xl(68)
      , $N = Xl(69)
      , aO = Xl(70)
      , bO = Xl(71)
      , cO = Xl(78)
      , dO = Xl(80)
      , ko = Xl(82)
      , rm = Xl(84)
      , eO = Xl(85)
      , fO = Xl(87)
      , km = Xl(88)
      , gO = Xl(92)
      , hO = Xl(93)
      , iO = Xl(99)
      , tm = Xl(103)
      , io = Xl(104)
      , jO = Xl(105)
      , bo = Xl(106)
      , co = Xl(107)
      , jo = Xl(108)
      , kO = Xl(113)
      , lO = Xl(114)
      , mO = Xl(115)
      , nO = Xl(117)
      , oO = Xl(118)
      , pO = Xl(120)
      , qO = Xl(119)
      , Tn = Xl(121)
      , rO = Xl(122)
      , sO = Xl(123)
      , tO = Xl(126)
      , uO = Xl(127)
      , vO = Xl(144)
      , as = Xl(129)
      , ds = Xl(132)
      , wO = Xl(134)
      , xO = Xl(135)
      , yO = Xl(136)
      , zO = Xl(137)
      , AO = Xl(138)
      , BO = Xl(139)
      , CO = Xl(140)
      , DO = Xl(143)
      , EO = Xl(145)
      , FO = Xl(147)
      , GO = Xl(150)
      , HO = Xl(164)
      , IO = Xl(152)
      , JO = Xl(153)
      , KO = Xl(154)
      , us = Xl(155)
      , LO = Xl(156)
      , MO = Xl(157)
      , NO = Xl(158)
      , OO = Xl(159)
      , PO = Xl(160)
      , QO = Xl(161)
      , RO = Xl(162)
      , SO = Xl(165)
      , TO = Xl(166);
    var UO = function(a, b, c) {
        var d = this;
        this.addEventListener = M(a, 86, function(e, f) {
            if ("function" !== typeof f)
                return N(b, Zl("Service.addEventListener", [e, f])),
                d;
            var h = $l(e);
            if (!h)
                return N(b, hO(e)),
                d;
            c.addEventListener(h, f);
            return d
        });
        this.removeEventListener = M(a, 904, function(e, f) {
            var h = $l(e);
            "function" === typeof f && h ? c.removeEventListener(h, f) : N(b, Zl("Service.removeEventListener", [e, f]))
        });
        this.getSlots = M(a, 573, function() {
            return c.g.map(function(e) {
                return e.g
            })
        });
        this.getSlotIdMap = M(a, 574, function() {
            for (var e = {}, f = _.y(c.g), h = f.next(); !h.done; h = f.next())
                h = h.value,
                e[h.toString()] = h.g;
            return e
        });
        this.getName = M(a, 575, function() {
            return c.getName()
        })
    };
    var am = function(a, b, c) {
        UO.call(this, a, b, c);
        this.setRefreshUnfilledSlots = M(a, 59, function(d) {
            c.setRefreshUnfilledSlots(d)
        });
        this.notifyUnfilledSlots = M(a, 69, function(d) {
            c.gd && VO(c, WO(c, d))
        });
        this.refreshAllSlots = M(a, 60, function() {
            c.gd && VO(c)
        });
        this.setVideoSession = M(a, 61, function(d, e, f) {
            c.I = e;
            c.H = f;
            "number" === typeof d && (e = bn().g,
            _.nk(e, 29, _.Uc(d)))
        });
        this.getDisplayAdsCorrelator = M(a, 62, function() {
            return String(gz(bn().g, 26))
        });
        this.getVideoStreamCorrelator = M(a, 63, function() {
            var d = bn().g;
            d = dt(d, 29);
            return null != d ? d : 0
        });
        this.isSlotAPersistentRoadblock = M(a, 64, function(d) {
            var e = _.x(c.g, "find").call(c.g, function(f) {
                return f.g === d
            });
            return !!e && XO(c, e)
        });
        this.onImplementationLoaded = M(a, 65, function() {
            c.P.info(TN("GPT CompanionAds"))
        });
        this.slotRenderEnded = M(a, 67, function(d, e, f) {
            var h = _.x(c.g, "find").call(c.g, function(k) {
                return k.g === d
            });
            return h && YO(c, h, e, f)
        })
    };
    _.P(am, UO);
    var cm = function(a, b, c) {
        UO.call(this, a, b, c);
        this.setContent = M(a, 72, function(d) {
            var e = _.x(c.g, "find").call(c.g, function(f) {
                return f.g === d
            });
            b.error(vO(), e)
        })
    };
    _.P(cm, UO);
    var jm = function(a) {
        this.D = _.C(a)
    };
    _.P(jm, _.F);
    var im = function(a, b) {
        return Yh(a, 1, b)
    }
      , nm = function(a) {
        return $h(a, 2, 2)
    }
      , hm = function(a, b) {
        return _.de(a, 2, b, _.Vc)
    }
      , yn = function(a, b) {
        return _.ge(a, 2, _.Vc, b)
    };
    jm.ca = [2];
    var ZO = function(a) {
        this.D = _.C(a)
    };
    _.P(ZO, _.F);
    ZO.prototype.setTagForChildDirectedTreatment = function(a) {
        return _.Nh(this, 5, a)
    }
    ;
    ZO.prototype.clearTagForChildDirectedTreatment = function() {
        return _.nk(this, 5)
    }
    ;
    ZO.prototype.setTagForUnderAgeOfConsent = function(a) {
        return _.Nh(this, 6, a)
    }
    ;
    var aq = function(a) {
        this.D = _.C(a)
    };
    _.P(aq, _.F);
    var Mu = function(a) {
        var b = new aq;
        return _.Fh(b, 1, a)
    };
    var sv = function(a) {
        this.D = _.C(a)
    };
    _.P(sv, _.F);
    var Ou = function(a) {
        this.D = _.C(a)
    };
    _.P(Ou, _.F);
    Ou.ca = [1];
    var Jn = function(a) {
        this.D = _.C(a)
    };
    _.P(Jn, _.F);
    var Xr = function(a) {
        this.D = _.C(a)
    };
    _.P(Xr, _.F);
    var cs = function(a, b) {
        return _.Nh(a, 1, b)
    }
      , $r = function(a, b) {
        return _.de(a, 2, b, _.Vc)
    };
    Xr.ca = [2];
    var Ju = function(a) {
        this.D = _.C(a)
    };
    _.P(Ju, _.F);
    var Zr = function(a, b) {
        pk(a, 1, Xr, b)
    };
    Ju.ca = [1];
    var Rs = function(a) {
        this.D = _.C(a)
    };
    _.P(Rs, _.F);
    var $O = function(a) {
        this.D = _.C(a)
    };
    _.P($O, _.F);
    $O.prototype.getCategoryExclusions = function(a) {
        return lz(this, 3, a)
    }
    ;
    $O.prototype.Va = function() {
        return gk(this, jm, 14)
    }
    ;
    $O.prototype.Sc = function() {
        return _.ym(this, Jn, 18)
    }
    ;
    var nw = function(a) {
        return _.ym(a, ZO, 25)
    };
    $O.prototype.getCorrelator = function() {
        return dt(this, 26)
    }
    ;
    $O.prototype.setCorrelator = function(a) {
        return _.nk(this, 26, _.Uc(a))
    }
    ;
    $O.prototype.Oi = function() {
        return fz(this, Rs, 33)
    }
    ;
    $O.ca = [2, 3, 14];
    var an = function() {
        this.g = new _.B.Map
    };
    var aP = {}
      , wm = (aP[253] = !1,
    aP[246] = [],
    aP[150] = "",
    aP[221] = !1,
    aP[263] = !1,
    aP[36] = /^true$/.test("false"),
    aP[172] = null,
    aP[260] = void 0,
    aP[251] = null,
    aP)
      , vm = function() {
        this.g = !1
    };
    var bP = function() {
        this.Ea = {};
        this.g = new $O;
        this.l = new _.B.Map;
        this.A = {};
        this.g.setCorrelator(WB());
        _.xm(36) && _.Fh(this.g, 15, !0)
    }
      , cP = function(a) {
        var b = bn()
          , c = a.getDomId();
        if (c && !b.Ea.hasOwnProperty(c)) {
            var d = _.Ng(an)
              , e = ++_.Ng(Gl).A;
            d.g.set(c, e);
            _.nk(a, 20, _.Dc(e));
            b.Ea[c] = a
        }
    }
      , dP = function(a, b) {
        return a.Ea[b]
    }
      , bn = function() {
        return _.Ng(bP)
    };
    var eP = {}
      , fP = (eP.companion_ads = "companionAds",
    eP.content = "content",
    eP.publisher_ads = "pubads",
    eP);
    var gP = li(en);
    var qn = function(a, b, c, d) {
        var e = this
          , f = c.getSlotId()
          , h = bn().g
          , k = dP(bn(), f.getDomId());
        this.set = M(a, 83, function(l, m) {
            "page_url" === l && m && (l = [hm(im(new jm, l), [String(m)])],
            _.sm(k, 3, l));
            return e
        });
        this.get = M(a, 84, function(l) {
            if ("page_url" !== l)
                return null;
            var m, n;
            return null != (n = null == (m = (_.H = k.Va(),
            _.x(_.H, "find")).call(_.H, function(p) {
                return ik(p, 1) === l
            })) ? void 0 : nm(m)[0]) ? n : null
        });
        this.setClickUrl = M(a, 79, function(l) {
            em(l, k, f, b);
            return e
        });
        this.setTargeting = M(a, 81, function(l, m) {
            lm(l, m, f, k, b);
            return e
        });
        this.updateTargetingFromMap = M(a, 85, function(l) {
            mm(l, f, k, b);
            return e
        });
        this.display = M(a, 78, function() {
            var l = cn(h, bn().Ea);
            var m = void 0 === m ? document : m;
            var n;
            null != (n = l.V[f.getDomId()]) && _.Fh(n, 19, !0);
            n = f.getDomId();
            n = Nx(n);
            var p = {
                id: n
            };
            var q = void 0 === q ? jy : q;
            var t = _.x(Object, "assign").call(Object, {}, p);
            n = p.id;
            var w = p.style;
            p = p.data;
            t = (delete t.id,
            delete t.style,
            delete t.data,
            t);
            if (_.x(Object, "keys").call(Object, t).length)
                throw Error("Invalid attribute(s): " + _.x(Object, "keys").call(Object, t));
            n = {
                id: n,
                style: w ? w : void 0
            };
            if (p)
                for (w = _.y(_.x(p, "entries").call(p)),
                p = w.next(); !p.done; p = w.next())
                    t = _.y(p.value),
                    p = t.next().value,
                    t = t.next().value,
                    Se(SL.test(p)),
                    n[p] = t;
            if (!my.test("div"))
                throw Error("");
            if ("DIV"in oy)
                throw Error("");
            w = "";
            if (n)
                for (v in n)
                    if (Object.prototype.hasOwnProperty.call(n, v)) {
                        if (!my.test(v))
                            throw Error("");
                        p = n[v];
                        if (null != p) {
                            t = v;
                            if (p instanceof Rx)
                                p = Sx(p);
                            else {
                                if ("style" == t.toLowerCase())
                                    throw Error("");
                                if (/^on/i.test(t))
                                    throw Error("");
                                if (t.toLowerCase()in ny)
                                    if (p instanceof _.Tx)
                                        p = _.jb(p).toString();
                                    else if (p instanceof _.qa)
                                        p = _.ra(p);
                                    else if ("string" === typeof p)
                                        p = _.xa(p).toString();
                                    else
                                        throw Error("");
                            }
                            p = t + '="' + Nx(String(p)) + '"';
                            w += " " + p
                        }
                    }
            var v = "<div" + w;
            null == q ? q = [] : Array.isArray(q) || (q = [q]);
            !0 === cy.div ? v += ">" : (q = ly(q),
            v += ">" + _.iy(q).toString() + "</div>");
            v = _.Zj(v);
            m.write(_.iy(v));
            gn(f, m) && (Hu(d),
            tN(d.L, f),
            hP(d, l, f))
        });
        this.setTagForChildDirectedTreatment = M(a, 80, function(l) {
            if (0 === l || 1 === l) {
                var m = nw(h) || new ZO;
                m.setTagForChildDirectedTreatment(l);
                _.Ph(h, 25, m)
            }
            return e
        });
        this.setForceSafeFrame = M(a, 567, function(l) {
            "boolean" === typeof l ? _.Fh(k, 12, l) : N(b, Zl("PassbackSlot.setForceSafeFrame", [String(l)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = M(a, 448, function(l) {
            if (0 === l || 1 === l) {
                var m = nw(h) || new ZO;
                m.setTagForUnderAgeOfConsent(l);
                _.Ph(h, 25, m)
            }
            return e
        })
    };
    var Or = {
        Xo: 0,
        Uo: 1,
        Vo: 2,
        Wo: 3
    };
    var tn = {
        REWARDED: 4,
        TOP_ANCHOR: 2,
        BOTTOM_ANCHOR: 3,
        INTERSTITIAL: 5,
        GAME_MANUAL_INTERSTITIAL: 7,
        LEFT_SIDE_RAIL: 8,
        RIGHT_SIDE_RAIL: 9
    }
      , vn = {
        IAB_AUDIENCE_1_1: 1,
        IAB_CONTENT_2_1: 2,
        IAB_CONTENT_2_2: 3
    }
      , un = {
        PURCHASED: 1,
        ORGANIC: 2
    };
    var iP = ""
      , Fn = null;
    var to = function(a, b, c) {
        eN.call(this, a);
        this.slotId = b;
        this.g = c
    };
    _.P(to, eN);
    to.prototype.getSlotId = function() {
        return this.slotId
    }
    ;
    var dg = function(a, b, c, d) {
        eN.call(this, a);
        this.adUnitPath = b;
        this.qc = d;
        this.g = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.P(dg, eN);
    _.r = dg.prototype;
    _.r.getId = function() {
        return this.id
    }
    ;
    _.r.getAdUnitPath = function() {
        return this.adUnitPath
    }
    ;
    _.r.getName = function() {
        return this.adUnitPath
    }
    ;
    _.r.toString = function() {
        return this.getId()
    }
    ;
    _.r.getDomId = function() {
        return this.qc
    }
    ;
    var jP = function(a, b) {
        a.g = b
    };
    var mo = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js)/;
    var qo = _.Jz(function() {
        return void SB("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
    })
      , kP = _.Jz(function() {
        return void SB("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
    })
      , lP = _.Jz(function() {
        return void SB("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
    })
      , vo = function(a, b, c, d, e) {
        UO.call(this, a, b, c);
        var f = this
          , h = bn().g
          , k = bn().Ea
          , l = !1;
        this.setTargeting = M(a, 1, function(m, n) {
            fo({
                key: m,
                value: n,
                La: h,
                serviceName: c.getName(),
                xn: c.enabled,
                Eb: e,
                P: b,
                context: a
            });
            return f
        });
        this.clearTargeting = M(a, 2, function(m) {
            lo(m, h, c.getName(), b);
            return f
        });
        this.getTargeting = M(a, 38, function(m) {
            return go(m, h, b)
        });
        this.getTargetingKeys = M(a, 39, function() {
            return ho(h)
        });
        this.setCategoryExclusion = M(a, 3, function(m) {
            "string" !== typeof m || fm(m) ? N(b, Zl("PubAdsService.setCategoryExclusion", [m])) : ((_.H = $h(h, 3, 2),
            _.x(_.H, "includes")).call(_.H, m) || _.ge(h, 3, _.Vc, m),
            b.info(eO(m)));
            return f
        });
        this.clearCategoryExclusions = M(a, 4, function() {
            _.nk(h, 3);
            b.info(fO());
            return f
        });
        this.disableInitialLoad = M(a, 5, function() {
            _.Fh(h, 4, !0);
            l || (l = !0,
            ro())
        });
        this.enableSingleRequest = M(a, 6, function() {
            if (c.enabled && !_.O(h, 6))
                return N(b, VN("PubAdsService.enableSingleRequest")),
                !1;
            b.info(WN("single request"));
            _.Fh(h, 6, !0);
            return !0
        });
        this.enableAsyncRendering = M(a, 7, function() {
            return !0
        });
        this.enableSyncRendering = M(a, 8, function() {
            SB("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
            return !1
        });
        this.enableLazyLoad = M(a, 485, function(m) {
            var n = new sv;
            n = _.ci(n, 1, 800);
            n = _.ci(n, 2, 400);
            n = _.nk(n, 3, _.pc(3));
            if (_.La(m)) {
                var p = m.fetchMarginPercent;
                "number" === typeof p && (0 <= p ? _.ci(n, 1, p) : -1 === p && _.nk(n, 1));
                p = m.renderMarginPercent;
                "number" === typeof p && (0 <= p ? _.ci(n, 2, p) : -1 === p && _.nk(n, 2));
                m = m.mobileScaling;
                "number" === typeof m && (0 < m ? _.nk(n, 3, _.pc(m)) : -1 === m && _.nk(n, 3, _.pc(1)))
            }
            window.IntersectionObserver || !ni(n, 1) && !ni(n, 2) ? _.Ph(h, 5, n) : N(b, GO())
        });
        this.setCentering = M(a, 9, function(m) {
            m = !!m;
            b.info(XN("centering", String(m)));
            _.Fh(h, 15, m)
        });
        this.definePassback = M(a, 10, function(m, n) {
            return (m = uo(a, b, c, m, n, d)) && m.Bj
        });
        this.refresh = M(a, 11, function() {
            var m = _.za.apply(0, arguments)
              , n = _.y(m)
              , p = n.next().value;
            n = n.next().value;
            n = void 0 === n ? {} : n;
            p && !Array.isArray(p) || !_.La(n) || n.changeCorrelator && "boolean" !== typeof n.changeCorrelator ? N(b, Zl("PubAdsService.refresh", m)) : (n && !1 === n.changeCorrelator || h.setCorrelator(WB()),
            p = p ? po(p, c) : _.I(qI) ? c.g.filter(function(q) {
                var t = k[q.getDomId()];
                return !(!gn(q) && !Rm(Cr(t)))
            }) : c.g,
            c.refresh(cn(h, k), p) || N(b, Zl("PubAdsService.refresh", m)))
        });
        this.enableVideoAds = M(a, 12, function() {
            _.Fh(h, 21, !0);
            mP(c, h)
        });
        this.setVideoContent = M(a, 13, function(m, n) {
            nP(c, m, n, h)
        });
        this.collapseEmptyDivs = M(a, 14, function(m) {
            m = void 0 === m ? !1 : m;
            m = void 0 === m ? !1 : m;
            _.Fh(h, 11, !0);
            m = !!m;
            _.Fh(h, 10, m);
            b.info(cO(String(m)));
            return !!_.O(h, 11)
        });
        this.clear = M(a, 15, function(m) {
            if (Array.isArray(m))
                return oP(c, h, k, po(m, c));
            if (void 0 === m)
                return oP(c, h, k, c.g);
            N(b, Zl("PubAdsService.clear", [m]));
            return !1
        });
        this.setLocation = M(a, 16, function(m) {
            "string" !== typeof m ? N(b, Zl("PubAdsService.setLocation", [m])) : Yh(h, 8, m);
            return f
        });
        this.setCookieOptions = M(a, 17, function() {
            kP();
            return f
        });
        this.setTagForChildDirectedTreatment = M(a, 18, function(m) {
            lP();
            if (1 !== m && 0 !== m)
                return N(b, rO("PubadsService.setTagForChildDirectedTreatment", Un(m), "0,1")),
                f;
            var n = nw(h) || new ZO;
            n.setTagForChildDirectedTreatment(m);
            _.Ph(h, 25, n);
            return f
        });
        this.clearTagForChildDirectedTreatment = M(a, 19, function() {
            lP();
            var m = nw(h);
            if (!m)
                return f;
            m.clearTagForChildDirectedTreatment();
            _.Ph(h, 25, m);
            return f
        });
        this.setPublisherProvidedId = M(a, 20, function(m) {
            m = String(m);
            b.info(XN("PPID", m));
            Yh(h, 16, m);
            return f
        });
        this.set = M(a, 21, function(m, n) {
            An(m, n, h, c.getName(), b);
            return f
        });
        this.get = M(a, 22, function(m) {
            return Bn(m, h, b)
        });
        this.getAttributeKeys = M(a, 23, function() {
            return Cn(h)
        });
        this.display = M(a, 24, function(m, n, p, q) {
            return void c.display(m, n, d, p, q)
        });
        this.updateCorrelator = M(a, 25, function() {
            SB(oo("update"));
            N(b, mO());
            h.setCorrelator(WB());
            return f
        });
        this.defineOutOfPagePassback = M(a, 35, function(m) {
            m = uo(a, b, c, m, [1, 1], d);
            if (!m)
                return null;
            _.Nh(m.La, 15, 1);
            return m.Bj
        });
        this.setForceSafeFrame = M(a, 36, function(m) {
            "boolean" !== typeof m ? N(b, Zl("PubAdsService.setForceSafeFrame", [Un(m)])) : _.Fh(h, 13, m);
            return f
        });
        this.setSafeFrameConfig = M(a, 37, function(m) {
            var n = Vn(b, m);
            n ? _.Ph(h, 18, n) : N(b, Zl("PubAdsService.setSafeFrameConfig", [m]));
            return f
        });
        this.setRequestNonPersonalizedAds = M(a, 445, function(m) {
            lP();
            if (0 !== m && 1 !== m)
                return N(b, rO("PubAdsService.setRequestNonPersonalizedAds", Un(m), "0,1")),
                f;
            var n = nw(h) || new ZO;
            _.Fh(n, 8, !!m);
            _.Ph(h, 25, n);
            return f
        });
        this.setTagForUnderAgeOfConsent = M(a, 447, function(m) {
            m = void 0 === m ? 2 : m;
            lP();
            if (2 !== m && 0 !== m && 1 !== m)
                return N(b, rO("PubadsService.setTagForUnderAgeOfConsent", Un(m), "2,0,1")),
                f;
            var n = nw(h) || new ZO;
            n.setTagForUnderAgeOfConsent(m);
            _.Ph(h, 25, n);
            return f
        });
        this.getCorrelator = M(a, 27, function() {
            return String(gz(h, 26))
        });
        this.getTagSessionCorrelator = M(a, 631, function() {
            return ck(_.ca)
        });
        this.getVideoContent = M(a, 30, function() {
            return pP(c, h)
        });
        this.getVersion = M(a, 568, function() {
            return a.tf
        });
        this.forceExperiment = M(a, 569, function(m) {
            return void c.forceExperiment(m)
        });
        this.setCorrelator = M(a, 28, function(m) {
            SB(oo("set"));
            N(b, lO());
            if (wg(window))
                return f;
            if (!Jo(m))
                return N(b, Zl("PubadsService.setCorrelator", [Un(m)])),
                f;
            m = h.setCorrelator(m);
            _.Fh(m, 27, !0);
            return f
        });
        this.markAsAmp = M(a, 570, function() {
            window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
        });
        this.isSRA = M(a, 571, function() {
            return !!_.O(h, 6)
        });
        this.setImaContent = M(a, 328, function(m, n) {
            _.mi(h, 22) ? nP(c, m, n, h) : (_.Fh(h, 21, !0),
            mP(c, h),
            "string" === typeof m && Yh(h, 19, m),
            "string" === typeof n && Yh(h, 20, n))
        });
        this.getImaContent = M(a, 329, function() {
            return _.mi(h, 22) ? pP(c, h) : c.enabled ? {
                vid: _.u(h, 19) || "",
                cmsid: _.u(h, 20) || ""
            } : null
        });
        this.isInitialLoadDisabled = M(a, 572, function() {
            return !!_.O(h, 4)
        });
        this.setPrivacySettings = M(a, 648, function(m) {
            if (!_.La(m))
                return N(b, Zl("PubAdsService.setPrivacySettings", [m])),
                f;
            var n = m.restrictDataProcessing, p = m.childDirectedTreatment, q = m.underAgeOfConsent, t = m.limitedAds, w = m.nonPersonalizedAds, v = m.userOptedOutOfPersonalization, A = m.trafficSource, z = m.isSpecialCategoryData, D, E = null != (D = nw(h)) ? D : new ZO;
            "boolean" === typeof w ? _.Fh(E, 8, w) : void 0 !== w && N(b, Tn("PubAdsService.setPrivacySettings", Un(m), "nonPersonalizedAds", Un(w)));
            "boolean" === typeof v ? _.Fh(E, 13, v) : void 0 !== v && N(b, Tn("PubAdsService.setPrivacySettings", Un(m), "userOptedOutOfPersonalization", Un(v)));
            "boolean" === typeof n ? _.Fh(E, 1, n) : void 0 !== n && N(b, Tn("PubAdsService.setPrivacySettings", Un(m), "restrictDataProcessing", Un(n)));
            if ("boolean" === typeof t) {
                n = no();
                if (t && !_.O(E, 9) && (D = sl(a),
                D.jd)) {
                    w = a.xa;
                    v = w.hd;
                    D = rl(a, D.Yc);
                    var G = new EE;
                    G = _.vl(G, 1, !0);
                    G = _.vl(G, 2, n);
                    D = _.xl(D, 11, yl, G);
                    v.call(w, D)
                }
                n ? _.Fh(E, 9, t) : t && N(b, FO())
            } else
                void 0 !== t && N(b, Tn("PubAdsService.setPrivacySettings", Un(m), "limitedAds", Un(t)));
            void 0 !== q && (null === q ? E.setTagForUnderAgeOfConsent(2) : !1 === q ? E.setTagForUnderAgeOfConsent(0) : !0 === q ? E.setTagForUnderAgeOfConsent(1) : N(b, Tn("PubAdsService.setPrivacySettings", Un(m), "underAgeOfConsent", Un(q))));
            void 0 !== p && (null === p ? E.clearTagForChildDirectedTreatment() : !1 === p ? E.setTagForChildDirectedTreatment(0) : !0 === p ? E.setTagForChildDirectedTreatment(1) : N(b, Tn("PubAdsService.setPrivacySettings", Un(m), "childDirectedTreatment", Un(p))));
            void 0 !== A && (null === A ? _.nk(E, 10) : (_.H = _.x(Object, "values").call(Object, un),
            _.x(_.H, "includes")).call(_.H, A) ? _.Nh(E, 10, A) : N(b, Tn("PubAdsService.setPrivacySettings", Un(m), "trafficSource", Un(A))));
            _.I(oF) && void 0 !== z && (null === z ? _.nk(E, 14) : !0 === z ? _.Fh(E, 14, !0) : N(b, Tn("PubAdsService.setPrivacySettings", Un(m), "isSpecialCategoryData", Un(z))));
            _.Ph(h, 25, E);
            return f
        })
    };
    _.P(vo, UO);
    var qP = function(a, b) {
        this.getId = M(a, 593, function() {
            return b.getId()
        });
        this.getAdUnitPath = M(a, 594, function() {
            return b.getAdUnitPath()
        });
        this.getName = M(a, 595, function() {
            return b.getName()
        });
        this.toString = M(a, 596, function() {
            return b.toString()
        });
        this.getDomId = M(a, 597, function() {
            return b.getDomId()
        })
    };
    var rP = function() {
        this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
        this.isBackfill = !1;
        this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
    }
      , sP = function(a, b) {
        a.advertiserId = b
    }
      , tP = function(a, b) {
        a.campaignId = b
    }
      , uP = function(a, b) {
        a.yieldGroupIds = b
    }
      , vP = function(a, b) {
        a.companyIds = b
    };
    var zm = function(a) {
        this.D = _.C(a)
    };
    _.P(zm, _.F);
    zm.prototype.getWidth = function() {
        return Zt(this, 1)
    }
    ;
    zm.prototype.getHeight = function() {
        return Zt(this, 2)
    }
    ;
    var Do = function() {
        var a = new zm;
        return _.Fh(a, 3, !0)
    };
    var Cm = function(a) {
        this.D = _.C(a)
    };
    _.P(Cm, _.F);
    Cm.ca = [2];
    var wP = function(a) {
        this.D = _.C(a)
    };
    _.P(wP, _.F);
    var xP = function(a) {
        var b = new wP;
        return _.Nh(b, 1, a)
    };
    var yP = function(a) {
        this.D = _.C(a)
    };
    _.P(yP, _.F);
    yP.ca = [1];
    var zP = function(a) {
        this.D = _.C(a)
    };
    _.P(zP, _.F);
    var AP = function(a) {
        this.D = _.C(a)
    };
    _.P(AP, _.F);
    AP.prototype.getAdUnitPath = function() {
        return _.u(this, 1)
    }
    ;
    AP.prototype.getDomId = function() {
        return _.u(this, 2)
    }
    ;
    var BP = function(a, b) {
        Yh(a, 2, b)
    };
    AP.prototype.Va = function() {
        return gk(this, jm, 3)
    }
    ;
    AP.prototype.getServices = function(a) {
        return lz(this, 4, a)
    }
    ;
    var CP = function(a, b) {
        _.sm(a, 5, b)
    };
    AP.prototype.getClickUrl = function() {
        return _.u(this, 7)
    }
    ;
    AP.prototype.setClickUrl = function(a) {
        return Yh(this, 7, a)
    }
    ;
    AP.prototype.getCategoryExclusions = function(a) {
        return lz(this, 8, a)
    }
    ;
    var gm = function(a) {
        return gk(a, jm, 9)
    };
    AP.prototype.Sc = function() {
        return _.ym(this, Jn, 13)
    }
    ;
    var Cr = function(a) {
        return _.If(a, 15, 0)
    };
    AP.ca = [3, 4, 5, 6, 8, 9, 27];
    var DP = function(a, b) {
        this.width = a;
        this.height = b
    };
    DP.prototype.getWidth = function() {
        return this.width
    }
    ;
    DP.prototype.getHeight = function() {
        return this.height
    }
    ;
    var EP = new _.B.Set(["unhideWindow", "navBar"]);
    var Mo = function(a, b, c) {
        var d = this
          , e = dP(bn(), c.getDomId())
          , f = ""
          , h = null
          , k = function() {
            return ""
        }
          , l = ""
          , m = !1;
        _.Cp(c, function() {
            e = new AP;
            f = "";
            h = null;
            k = function() {
                return ""
            }
            ;
            l = ""
        });
        c.listen(au, function(p) {
            var q = p.detail;
            p = q.xi;
            q = q.isBackfill;
            p && (f = p,
            m = q)
        });
        this.set = M(a, 40, function(p, q) {
            xo(p, q, c, e, b);
            return d
        });
        this.get = M(a, 41, function(p) {
            return yo(p, c, e, b)
        });
        this.getAttributeKeys = M(a, 42, function() {
            return zo(e)
        });
        this.addService = M(a, 43, function(p) {
            p = Ul.get(p);
            if (!p)
                return N(b, Zl("Slot.addService", [p]), c),
                d;
            var q = p.getName();
            if ((_.H = $h(e, 4, 2),
            _.x(_.H, "includes")).call(_.H, q))
                return b.info(GN(q, c.toString()), c),
                d;
            p.slotAdded(c, e);
            return d
        });
        this.defineSizeMapping = M(a, 44, function(p) {
            p = Ko(p);
            "string" === typeof p ? N(b, Zl("Slot.defineSizeMapping", [p]), c) : _.sm(e, 6, p);
            return d
        });
        this.setClickUrl = M(a, 45, function(p) {
            em(p, e, c, b);
            return d
        });
        this.setCategoryExclusion = M(a, 46, function(p) {
            var q = e;
            "string" !== typeof p || fm(p) ? N(b, Zl("Slot.setCategoryExclusion", [p]), c) : ((_.H = $h(q, 8, 2),
            _.x(_.H, "includes")).call(_.H, p) || _.ge(q, 8, _.Vc, p),
            b.info(HN(p), c));
            return d
        });
        this.clearCategoryExclusions = M(a, 47, function() {
            _.nk(e, 8);
            b.info(IN(), c);
            return d
        });
        this.getCategoryExclusions = M(a, 48, function() {
            return $h(e, 8, 2).slice()
        });
        this.setTargeting = M(a, 49, function(p, q) {
            lm(p, q, c, e, b);
            return d
        });
        this.updateTargetingFromMap = M(a, 649, function(p) {
            mm(p, c, e, b);
            return d
        });
        this.clearTargeting = M(a, 50, function(p) {
            um(p, c, e, b);
            return d
        });
        this.getTargeting = M(a, 51, function(p) {
            return om(p, c, e, b)
        });
        this.getTargetingKeys = M(a, 52, function() {
            return pm(e)
        });
        this.setCollapseEmptyDiv = M(a, 53, function(p, q) {
            var t = e;
            q = void 0 === q ? !1 : q;
            q = void 0 === q ? !1 : q;
            "boolean" !== typeof p || "boolean" !== typeof q ? N(b, Zl("Slot.setCollapseEmptyDiv", [p, q]), c) : (t = _.Fh(t, 10, p),
            _.Fh(t, 11, p && q),
            q && !p && N(b, JN(c.toString()), c));
            return d
        });
        this.getAdUnitPath = M(a, 54, function() {
            return c.getAdUnitPath()
        });
        this.getSlotElementId = M(a, 598, function() {
            return c.getDomId()
        });
        this.setForceSafeFrame = M(a, 55, function(p) {
            var q = e;
            "boolean" !== typeof p ? N(b, Zl("Slot.setForceSafeFrame", [String(p)]), c) : _.Fh(q, 12, p);
            return d
        });
        this.setSafeFrameConfig = M(a, 56, function(p) {
            var q = e
              , t = Vn(b, p);
            t ? _.Ph(q, 13, t) : b.error(Zl("Slot.setSafeFrameConfig", [p]), c);
            return d
        });
        c.listen(iN, function(p) {
            p = p.detail;
            if (iz(p, 8))
                h = null;
            else {
                h = new rP;
                var q = !!iz(p, 9);
                h.isBackfill = q;
                var t = hz(p, 15)
                  , w = hz(p, 16);
                t.length && w.length && (h.sourceAgnosticCreativeId = t[0],
                h.sourceAgnosticLineItemId = w[0],
                q || (h.creativeId = t[0],
                h.lineItemId = w[0],
                (q = hz(p, 22)) && q.length && (h.creativeTemplateId = q[0])));
                hz(p, 17).length && sP(h, hz(p, 17)[0]);
                hz(p, 18).length && tP(h, hz(p, 18)[0]);
                hz(p, 19).length && uP(h, hz(p, 19));
                hz(p, 20).length && vP(h, hz(p, 20));
                p = Wd(p, 45, (0,
                _.Cd)(p.D) & 34 ? Xd : Yd, 2).map(function(v) {
                    return ud(v)
                });
                p.length && (h.encryptedTroubleshootingInfo = p[0])
            }
        });
        this.getResponseInformation = M(a, 355, function() {
            return h
        });
        this.getName = M(a, 170, function() {
            b.error(DO());
            return c.getAdUnitPath()
        });
        var n = new qP(a,c);
        this.getSlotId = M(a, 579, function() {
            return n
        });
        this.getServices = M(a, 580, function() {
            return $h(e, 4, 2).map(function(p) {
                var q = fP[p];
                if (q) {
                    var t, w, v;
                    p = null != (v = null == (w = (t = Lo())[q]) ? void 0 : w.call(t)) ? v : null
                } else
                    p = null;
                return p
            })
        });
        this.getSizes = M(a, 581, function(p, q) {
            var t, w;
            return null != (w = null == (t = Dm(e, p, q)) ? void 0 : t.map(function(v) {
                return _.O(v, 3) ? "fluid" : new DP(v.getWidth(),v.getHeight())
            })) ? w : null
        });
        this.getClickUrl = M(a, 582, function() {
            var p;
            return null != (p = e.getClickUrl()) ? p : ""
        });
        this.getTargetingMap = M(a, 583, function() {
            for (var p = {}, q = _.y(gm(e)), t = q.next(); !t.done; t = q.next())
                t = t.value,
                _.u(t, 1) && (p[ik(t, 1)] = nm(t));
            return p
        });
        this.getOutOfPage = M(a, 584, function(p) {
            return "number" === typeof p ? Cr(e) === p : 0 !== Cr(e)
        });
        this.getCollapseEmptyDiv = M(a, 585, function() {
            var p = e;
            return Wn(p, 10) ? _.O(p, 10) : null
        });
        this.getDivStartsCollapsed = M(a, 586, function() {
            var p = e;
            return Wn(p, 11) ? _.O(p, 11) : null
        });
        c.listen(jN, function(p) {
            k = p.detail.hl
        });
        this.getContentUrl = M(a, 587, function() {
            return k()
        });
        this.getFirstLook = M(a, 588, function() {
            SB("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        c.listen(iN, function(p) {
            var q;
            l = null != (q = p.detail.getEscapedQemQueryId()) ? q : ""
        });
        this.getEscapedQemQueryId = M(a, 591, function() {
            return l
        });
        this.getHtml = M(a, 592, function() {
            return m ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."),
            "") : f
        });
        this.setConfig = M(a, 1022, function(p) {
            var q = e;
            if (mg(p)) {
                var t = p.componentAuction
                  , w = p.adExpansion
                  , v = p.outstream;
                if (null != t) {
                    var A = q.getDomId();
                    t = {
                        componentAuction: t
                    };
                    if (!_.La(t))
                        N(b, Zl("googletag.Slot.setConfig", [t]));
                    else if (void 0 !== t.componentAuction && Array.isArray(t.componentAuction)) {
                        t = _.y(t.componentAuction);
                        for (var z = t.next(); !z.done; z = t.next()) {
                            var D = z.value;
                            z = D.configKey;
                            D = D.auctionConfig;
                            if ("string" === typeof z && !fm(z)) {
                                var E = void 0
                                  , G = void 0
                                  , Q = bn()
                                  , R = A;
                                null === D ? null == (G = Q.A[R]) || G.delete(z) : D && (null != (E = Q.A)[R] || (E[R] = new _.B.Map),
                                Q.A[R].set(z, D))
                            }
                        }
                    }
                }
                if (_.x(Object, "hasOwn").call(Object, p, "interstitial"))
                    if (5 !== Cr(q))
                        N(b, PO("interstitial"), c);
                    else {
                        t = p.interstitial;
                        b.info(LO("interstitial", Un(t)), c);
                        if (mg(t))
                            for (A = {},
                            t = _.y(_.x(Object, "entries").call(Object, t)),
                            z = t.next(); !z.done; z = t.next())
                                switch (D = _.y(z.value),
                                z = D.next().value,
                                D = D.next().value,
                                z) {
                                case "triggers":
                                    A.triggers = D;
                                    break;
                                default:
                                    N(b, NO("interstitial", z), c)
                                }
                        else
                            N(b, OO("googletag.slot.setConfig", "interstitial", Un(t)), c),
                            A = null;
                        z = A;
                        A = new yP;
                        t = {};
                        if (z && z.triggers)
                            if (z = z.triggers,
                            mg(z))
                                for (t.triggers = {},
                                z = _.y(_.x(Object, "entries").call(Object, z)),
                                D = z.next(); !D.done; D = z.next())
                                    if (E = _.y(D.value),
                                    D = E.next().value,
                                    E = E.next().value,
                                    G = D,
                                    D = E,
                                    EP.has(G))
                                        if (Lu(D))
                                            switch (G) {
                                            case "unhideWindow":
                                                E = xP(2);
                                                E = _.Fh(E, 2, D);
                                                pk(A, 1, wP, E);
                                                t.triggers.Ip = D;
                                                break;
                                            case "navBar":
                                                _.I(aG) ? (E = xP(3),
                                                E = _.Fh(E, 2, D),
                                                pk(A, 1, wP, E),
                                                t.triggers.xp = D) : N(b, NO("interstitial.triggers", G), c)
                                            }
                                        else
                                            N(b, OO("interstitial.triggers", G, Un(D)), c);
                                    else
                                        N(b, NO("interstitial.triggers", G), c);
                            else
                                N(b, OO("interstitial", "triggers", Un(z)), c);
                        b.info(MO("interstitial", Un(t)), c);
                        _.Ph(q, 29, A)
                    }
                _.x(Object, "hasOwn").call(Object, p, "adExpansion") && (_.nk(q, 28),
                !Ku(w)) && (mg(w) ? _.x(Object, "hasOwn").call(Object, w, "enabled") && (w = w.enabled,
                Lu(w) ? (w = Mu(w),
                _.Ph(q, 28, w)) : N(b, Zl("googletag.setConfig.adExpansion.enabled", [w]), c)) : N(b, Zl("googletag.setConfig.adExpansion", [w]), c));
                if (_.I(iG) && _.x(Object, "hasOwn").call(Object, p, "outstream") && (_.nk(q, 31),
                !Ku(v)))
                    if (mg(v))
                        if (0 !== Cr(q))
                            N(b, PO("outstream", String(Cr(q))), c);
                        else {
                            a: {
                                w = ["exposeVast"];
                                p = new _.B.Map;
                                v = _.y(_.x(Object, "entries").call(Object, v));
                                for (A = v.next(); !A.done; A = v.next())
                                    t = _.y(A.value),
                                    A = t.next().value,
                                    t = t.next().value,
                                    _.x(w, "includes").call(w, A) ? p.set(A, t) : N(b, NO("outstream", A), c);
                                if (0 === p.size)
                                    v = null;
                                else
                                    for (v = new zP,
                                    p = _.y(p),
                                    w = p.next(); !w.done; w = p.next())
                                        if (A = _.y(w.value),
                                        w = A.next().value,
                                        A = A.next().value,
                                        "exposeVast" === w) {
                                            if (!Lu(A)) {
                                                N(b, OO("outstream", "exposeVast", Un(A)), c);
                                                v = null;
                                                break a
                                            }
                                            _.Fh(v, 1, A)
                                        }
                            }
                            v && _.Ph(q, 31, v)
                        }
                    else
                        N(b, OO("googletag.slot.setConfig", "outstream", Un(v)), c)
            } else
                N(b, Zl("googletag.slot.setConfig", [p]), c)
        })
    };
    var W = function(a, b, c) {
        iL.call(this, b, c);
        this.context = a
    };
    _.P(W, iL);
    W.prototype.F = function(a) {
        Il(this.context, this.id, a);
        var b, c;
        null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    }
    ;
    var Uo = function(a, b, c) {
        W.call(this, a, 1226);
        this.ig = b;
        this.startTime = _.xf();
        this.j = V(this, c)
    };
    _.P(Uo, W);
    Uo.prototype.g = function() {
        var a = _.$g(To);
        0 < a && this.context.oc < 1 / a && this.context.xa.hb.kb.ac.pi.fl.Kb({
            Lb: _.xf() - this.startTime,
            ig: this.ig,
            Vi: !!_.u(this.j.value, 2),
            Wi: !!_.u(this.j.value, 1),
            Ri: !!_.u(this.j.value, 11)
        })
    }
    ;
    Uo.prototype.l = function(a) {
        this.F(a)
    }
    ;
    var So = function(a, b, c, d, e) {
        W.call(this, a, 959);
        this.wb = b;
        this.output = U(this);
        this.j = V(this, b);
        nL(this, c);
        nL(this, d);
        e && nL(this, e)
    };
    _.P(So, W);
    So.prototype.g = function() {
        this.output.G(this.j.value)
    }
    ;
    var Ro = function(a, b, c, d, e, f) {
        W.call(this, a, 1172);
        this.P = b;
        this.L = c;
        this.B = d;
        this.j = kL(this);
        nL(this, e);
        this.o = V(this, f)
    };
    _.P(Ro, W);
    Ro.prototype.g = function() {
        var a = this
          , b = new jK(this.B,{
            cmpInteractionEventReporter: new oK(this.context.xa)
        });
        _.er(this, b);
        if (pJ(b.caller)) {
            var c = this.L.K
              , d = c.status
              , e = function(f) {
                if (f.internalErrorState)
                    RL(a.o.value, f.gppString);
                else if (Lg(f.applicableSections))
                    PL(QL(a.o.value, f.applicableSections.filter(function(l) {
                        return _.x(Number, "isInteger").call(Number, l)
                    })), !1);
                else {
                    var h = RL(QL(a.o.value, f.applicableSections.filter(function(l) {
                        return _.x(Number, "isInteger").call(Number, l)
                    })), f.gppString);
                    try {
                        var k = nK(f.gppString)
                    } catch (l) {
                        Il(a.context, 1182, l),
                        k = !1
                    }
                    PL(h, k)
                }
                a.j.notify()
            };
            switch (d) {
            case 2:
                e(c.data);
                break;
            case 1:
                c.g.push(e);
                break;
            case 0:
                oN(c);
                c.g.push(e);
                this.P.info(pO());
                b.addEventListener(El(this.context, 1173, function(f) {
                    if ("ready" === f.pingData.signalStatus || Lg(f.pingData.applicableSections))
                        c.data = f.pingData,
                        c.status = 2,
                        c.g.forEach(function(h) {
                            h(f.pingData)
                        }),
                        c.g = []
                }));
                break;
            default:
                throw Error("Impossible CacheStatus: " + d);
            }
        } else
            this.j.notify()
    }
    ;
    var Qo = function(a, b, c, d, e, f, h) {
        W.call(this, a, 874);
        this.P = b;
        this.L = c;
        this.B = d;
        this.C = e;
        this.j = kL(this);
        nL(this, f);
        this.o = V(this, h)
    };
    _.P(Qo, W);
    Qo.prototype.g = function() {
        var a = this
          , b = new xJ(this.B,{
            timeoutMs: -1,
            Qk: !0
        });
        _.er(this, b);
        if ("function" === typeof b.l.__tcfapi || null != BJ(b)) {
            var c = this.L.o
              , d = c.status
              , e = function(f) {
                var h = a.o.value, k, l, m, n;
                if (n = !(null != (l = null == (k = a.C) ? void 0 : _.O(k, 9)) && l))
                    k = {
                        Mg: _.xm(221) && !$f()
                    },
                    k = void 0 === k ? {} : k,
                    n = DJ(f) ? !1 === f.gdprApplies ? !0 : "tcunavailable" === f.tcString ? !k.Mg : (k.Mg || void 0 !== f.gdprApplies || k.qp) && (k.Mg || "string" === typeof f.tcString && f.tcString.length) ? AJ(f, "1", 0) : !0 : !1;
                k = _.Fh(h, 5, n);
                l = !EJ(f, ["3", "4"], 0);
                k = _.Fh(k, 9, l);
                k = Yh(k, 2, f.tcString);
                l = null != (m = f.addtlConsent) ? m : "";
                m = Yh(k, 4, l);
                _.Nh(m, 7, f.internalErrorState);
                null != f.gdprApplies && _.Fh(h, 3, f.gdprApplies);
                EJ(f, ["2", "7", "9", "10"], 3) || _.Fh(h, 8, !0);
                a.j.notify()
            };
            switch (d) {
            case 2:
                e(c.data);
                break;
            case 1:
                c.g.push(e);
                break;
            case 0:
                oN(c);
                c.g.push(e);
                this.P.info(oO());
                b.addEventListener(function(f) {
                    DJ(f) ? ("tcunavailable" === f.tcString ? a.P.info(qO("failed")) : a.P.info(qO("succeeded")),
                    c.data = f,
                    c.status = 2,
                    c.g.forEach(function(h) {
                        h(f)
                    }),
                    c.g = []) : oN(c)
                });
                break;
            default:
                throw Error("Impossible CacheStatus: " + d);
            }
        } else
            this.j.notify()
    }
    ;
    var Po = function(a, b, c, d, e) {
        W.call(this, a, 875);
        this.P = b;
        this.B = c;
        this.j = kL(this);
        nL(this, d);
        this.o = V(this, e)
    };
    _.P(Po, W);
    Po.prototype.g = function() {
        var a = this
          , b = new $J(this.B);
        _.er(this, b);
        if (pJ(b.caller)) {
            var c = El(this.context, 660, function(d) {
                d && "string" === typeof d.uspString && (Yh(a.o.value, 1, d.uspString),
                OL(a.o.value, El(a.context, 1187, function() {
                    var e = d.uspString;
                    var f = e = e.toUpperCase();
                    4 == f.length && (-1 == f.indexOf("-") || "---" === f.substring(1)) && "1" <= f[0] && "9" >= f[0] && vC.hasOwnProperty(f[1]) && vC.hasOwnProperty(f[2]) && vC.hasOwnProperty(f[3]) ? (f = new uC,
                    f = _.wl(f, 1, parseInt(e[0], 10)),
                    f = _.K(f, 2, vC[e[1]]),
                    f = _.K(f, 3, vC[e[2]]),
                    e = _.K(f, 4, vC[e[3]])) : e = null;
                    return 2 === (null == e ? void 0 : _.If(e, 3, 0))
                })()));
                a.j.notify()
            });
            this.P.info(nO());
            aK(b, c)
        } else
            this.j.notify()
    }
    ;
    var Oo = function(a, b) {
        W.call(this, a, 958);
        this.j = b;
        this.wb = U(this)
    };
    _.P(Oo, W);
    Oo.prototype.g = function() {
        var a = new NL
          , b = this.j ? _.O(this.j, 9) : no()
          , c = _.xm(221) && !$f();
        _.Fh(a, 5, !b && !c);
        (b = _.xm(263)) && navigator.globalPrivacyControl && _.Fh(a, 14, !0);
        (c = _.$g(AF)) && this.context.oc < 1 / c && this.context.xa.hb.kb.ac.pi.globalPrivacyControl.Ra({
            Ta: c,
            jm: b,
            km: !!navigator.globalPrivacyControl
        });
        this.wb.G(a)
    }
    ;
    var FP = function(a, b, c, d) {
        W.call(this, a, 1103);
        this.j = b;
        this.ba = c;
        this.privacyTreatments = d;
        this.output = U(this)
    };
    _.P(FP, W);
    FP.prototype.g = function() {
        this.output.G(!!Cg(this.ba) && !_.O(this.ba, 9) && !_.O(this.ba, 13) && !_.O(this.ba, 12) && !_.O(this.ba, 14) && (this.j ? _.O(this.j, 9) || _.O(this.j, 8) || _.O(this.j, 1) || _.I(kI) && _.O(this.j, 13) || 1 === _.If(this.j, 6, 2) || 1 === _.zc(_.Mh(this.j, 5)) || _.x(this.privacyTreatments, "includes").call(this.privacyTreatments, 1) ? !1 : !0 : !0))
    }
    ;
    var Yo = function(a) {
        this.P = a;
        this.A = this.g = 0
    };
    Yo.prototype.push = function() {
        for (var a = _.y(_.za.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                "function" === typeof b && (b.call(_.B.globalThis),
                this.g++)
            } catch (c) {
                this.A++,
                b = void 0,
                null == (b = window.console) || b.error("Exception in queued GPT command", c),
                this.P.error(ON(String(c)))
            }
        }
        this.P.info(PN(String(this.g), String(this.A)));
        return this.g
    }
    ;
    var Wo = function(a, b) {
        this.push = M(a, 76, b.push.bind(b))
    };
    var GP = ["Debug", "Info", "Warning", "Error", "Fatal"]
      , HP = function(a, b, c) {
        this.level = a;
        this.message = b;
        this.g = c;
        this.timestamp = new Date
    };
    _.r = HP.prototype;
    _.r.getSlot = function() {
        return this.g
    }
    ;
    _.r.getLevel = function() {
        return this.level
    }
    ;
    _.r.getTimestamp = function() {
        return this.timestamp
    }
    ;
    _.r.getMessage = function() {
        return this.message
    }
    ;
    _.r.toString = function() {
        return this.timestamp.toTimeString() + ": " + GP[this.level] + ": " + this.message
    }
    ;
    var IP = _.Yw(["https://console.googletagservices.com/pubconsole/loader.js"]), jp = _.af(IP), np, mp = !1, cp = !1, gp = !1;
    var Du = function(a, b) {
        this.getAllEvents = M(a, 563, function() {
            return cp ? JP(b).slice() : []
        });
        this.getEventsBySlot = M(a, 565, function(c) {
            return cp ? KP(b, c).slice() : []
        });
        this.getEventsByLevel = M(a, 566, function(c) {
            return cp ? LP(b, c).slice() : []
        })
    };
    var pp = function() {
        this.fe = 1E3
    };
    pp.prototype.send = function(a, b) {
        a.qn(b)
    }
    ;
    var up = function() {
        this.fe = 10
    };
    up.prototype.send = function(a, b) {
        a.Xj(b)
    }
    ;
    var sp = function() {
        this.fe = _.$g(QI);
        this.jb = 17
    };
    sp.prototype.send = function(a, b) {
        var c = _.sj(b, _.tj, 2);
        _.ge(c, 1, _.xc, this.jb);
        a.vn(b)
    }
    ;
    var tp = function() {};
    tp.prototype.send = function(a, b) {
        a.un(b)
    }
    ;
    _.Tw.Object.defineProperties(tp.prototype, {
        fe: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return _.$g(hG)
            }
        }
    });
    var MP = {
        20: function(a) {
            return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + a[0] + "."
        },
        23: function(a) {
            return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + "."
        },
        34: function(a) {
            return "Size mapping is null because invalid mappings were added: " + a[0] + "."
        },
        60: function(a) {
            return "Ignoring the " + a[0] + "(" + (a[1] || "") + ") call since the service is already enabled."
        },
        66: function(a) {
            return "Slot " + a[0] + " cannot be refreshed until PubAdsService is enabled."
        },
        68: function() {
            return "Slots cannot be cleared until service is enabled."
        },
        80: function(a) {
            return "Slot object at position " + a[0] + " is of incorrect type."
        },
        84: function(a) {
            return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
        },
        93: function(a) {
            return "Failed to register listener. Unknown event type: " + a[0] + "."
        },
        96: function(a) {
            return "Invalid arguments: " + a[0] + "(" + a[1] + ")."
        },
        122: function(a) {
            return "Invalid argument: " + a[0] + "(" + a[1] + "). Valid values: " + a[2] + "."
        },
        121: function(a) {
            return "Invalid object passed to " + a[0] + "(" + a[1] + "), for " + a[2] + ": " + a[3] + "."
        },
        151: function(a) {
            return "Invalid arguments: " + a[0] + "(" + a[1] + "). All zero-area slot sizes were removed."
        },
        105: function(a) {
            return "SRA requests may include a maximum of 30 ad slots. " + a[1] + " were requested, so the last " + a[2] + " were ignored."
        },
        106: function(a) {
            return "Publisher betas " + a[0] + " were declared after enableServices() was called."
        },
        107: function(a) {
            return "Publisher betas may only be declared once. " + a[0] + " were added after betas had already been declared."
        },
        108: function(a) {
            return "Beta keys cannot be cleared. clearTargeting() was called on " + a[0] + "."
        },
        123: function(a) {
            return "Refresh was throttled for slot: " + a[0] + "."
        },
        113: function(a) {
            return a[0] + " ad slot ineligible as page is not mobile optimized: " + a[1] + "."
        },
        114: function() {
            return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
        },
        115: function() {
            return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
        },
        132: function(a) {
            return "Taxonomy with id " + a[0] + " has reached the limit of " + a[1] + " values."
        },
        133: function() {
            return "No taxonomy values were cleared, either due to an invalid taxonomy or no values present."
        },
        134: function(a) {
            return wp(a[0]) + " " + a[1] + " not requested: Format already created on the page."
        },
        135: function(a) {
            return wp(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
        },
        136: function(a) {
            return wp(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
        },
        137: function(a) {
            return wp(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
        },
        138: function(a) {
            return wp(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
        },
        139: function(a) {
            return wp(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
        },
        140: function(a) {
            return wp(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
        },
        145: function(a) {
            return wp(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
        },
        143: function() {
            return "getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead."
        },
        147: function() {
            return "GPT must be loaded from the limited ads URL to enable limited ads functionality."
        },
        150: function() {
            return "Legacy browser does not support intersection observer causing lazy render/fetch as well as viewability events not to work properly."
        },
        164: function() {
            return "Lazy loading is not supported for Side Rail formats. Invocation will have no effect."
        },
        154: function(a) {
            return "Refresh is disabled for " + wp(a[0]) + " " + a[1] + "."
        },
        152: function() {
            return "Attempted to load GPT multiple times."
        },
        158: function(a) {
            return "Unrecognized property encountered when calling setConfig: " + a[0] + "." + a[1]
        },
        159: function(a) {
            return "Invalid value encountered when calling setConfig: " + a[0] + "." + a[1] + ": " + a[2]
        },
        160: function(a) {
            return "slot.setConfig key " + a[0] + " is not valid for this slot."
        },
        162: function(a) {
            return "GPT script src version " + a[0] + " is deprecated and will soon expire and fail to show ads. https://developers.google.com/publisher-tag/release-notes#2023-06-19"
        },
        165: function() {
            return "Rendering delayed due to slot element not being attached to the DOM.  It is recommended that the slot element or its ancestor be appended to the document prior to calling display."
        },
        166: function() {
            return "Creative content has successfully rendered after being delayed due to slot element not being attached to the DOM."
        }
    }
      , NP = {
        26: function(a) {
            return "Div ID passed to googletag.display() does not match any defined slots: " + a[0] + "."
        },
        28: function(a) {
            return "Error in googletag.defineSlot: Cannot create slot " + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + "."
        },
        149: function(a) {
            return "Error in googletag.defineSlot: Invalid ad unit path provided " + a[0] + ", see https://support.google.com/admanager/answer/10477476 for more information."
        },
        92: function(a) {
            return "Exception in " + a[1] + ' event listener: "' + a[0] + '".'
        },
        30: function(a) {
            return "Exception in googletag.cmd function: " + a[0] + "."
        },
        126: function() {
            return "Attempted to collect prebid data but window.pbjs is undefined."
        },
        153: function() {
            return "Attempted to load GPT from both standard and limited ads domains."
        },
        127: function(a) {
            return "Encountered the following error while attempting to collect prebid metadata: " + a[0] + "."
        },
        144: function() {
            return "ContentService is no longer available. Use the browser's built-in DOM APIs to directly add content to div elements instead."
        },
        161: function(a) {
            return "403 HTTP Response: " + a[0] + "."
        }
    };
    var OP = function(a) {
        this.context = a;
        this.A = this.g = 0;
        this.l = window;
        this.events = [];
        this.events.length = 1E3
    }
      , JP = function(a) {
        return [].concat(_.di(a.events.slice(a.g)), _.di(a.events.slice(0, a.g))).filter(function(b) {
            return !!b
        })
    }
      , KP = function(a, b) {
        return JP(a).filter(function(c) {
            return c.getSlot() === b
        })
    }
      , LP = function(a, b) {
        return JP(a).filter(function(c) {
            return c.getLevel() >= b
        })
    };
    OP.prototype.log = function(a, b, c) {
        c = void 0 === c ? null : c;
        var d, e, f = new HP(a,b,null != (e = null == (d = c) ? void 0 : d.g) ? e : null);
        this.events[this.g] = f;
        this.g = (this.g + 1) % 1E3;
        var h = 2 === a || 3 === a
          , k = b.getMessageArgs();
        e = b.getMessageId();
        var l = MP[e] || NP[e];
        d = void 0;
        if (l && (d = l(k),
        h = this.A < _.$g(LF) && h && _.ca.console,
        this.l === this.l.top && h || _.x(_.ca.navigator.userAgent, "includes").call(_.ca.navigator.userAgent, "Lighthouse"))) {
            e = "https://goo.gle/gpt-message#" + e;
            e = _.I(KF) ? "[GPT] " + d + "\n" + e : "[GPT] " + d;
            var m, n, p, q;
            2 === a ? null == (n = (m = _.ca.console).warn) || n.call(m, e) : null == (q = (p = _.ca.console).error) || q.call(p, e);
            this.A++
        }
        a: if (n = d,
        c = void 0 === c ? null : c,
        _.I(Kw)) {
            switch (a) {
            case 2:
                var t = 1;
                break;
            case 3:
                t = 2;
                break;
            default:
                break a
            }
            this.context.T.log(633226268, zp, _.x(Object, "assign").call(Object, {}, this.context, {
                vm: t,
                zm: n,
                message: b,
                slotId: c
            }))
        } else if (this.context.sn) {
            switch (a) {
            case 2:
                p = 1;
                break;
            case 3:
                p = 2;
                break;
            default:
                break a
            }
            var w, v;
            a = this.context.xa;
            m = a.Xj;
            q = new xp;
            q = _.rj(q, 1, this.context.pvsid);
            q = yp(q);
            q = _.aj(q, 3, this.context.za);
            q = _.aj(q, 4, this.context.Na);
            q = _.rj(q, 5, this.context.bn);
            p = _.K(q, 6, p);
            n = _.aj(p, 7, n);
            p = b.getMessageId();
            n = _.K(n, 8, p);
            b = b.getMessageArgs();
            b = _.de(n, 9, b, _.Vc);
            n = Dl(null != (v = null == (w = c) ? void 0 : w.getAdUnitPath()) ? v : "");
            w = _.aj(b, 10, n);
            v = null == (t = c) ? void 0 : t.getAdUnitPath();
            t = _.aj(w, 11, v);
            m.call(a, t)
        }
        return f
    }
    ;
    OP.prototype.info = function(a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    }
    ;
    var N = function(a, b, c) {
        a.log(2, b, c)
    };
    OP.prototype.error = function(a, b) {
        return this.log(3, a, b)
    }
    ;
    var PP = function() {
        var a = {
            X: bn().g,
            dk: new Date(Date.now()),
            Ai: window.location.href
        }
          , b = this;
        a = void 0 === a ? {} : a;
        var c = void 0 === a.X ? bn().g : a.X;
        var d = void 0 === a.dk ? new Date(Date.now()) : a.dk;
        var e = void 0 === a.Ai ? window.location.href : a.Ai;
        this.g = "";
        this.j = this.A = null;
        this.K = this.F = !1;
        this.l = function() {
            return !1
        }
        ;
        a = {};
        var f = {}
          , h = {};
        this.I = (h[3] = (a[72] = function(k, l) {
            var m = b.A;
            k = Number(k);
            l = Number(l);
            m = null !== m ? _.Xg("w5uHecUBa2S:" + k + ":" + m) % l === Math.floor(d.valueOf() / 864E5) % l : void 0;
            return m
        }
        ,
        a[13] = function() {
            return _.za.apply(0, arguments).some(function(k) {
                return _.x(b.g, "startsWith").call(b.g, k)
            })
        }
        ,
        a[12] = function() {
            return !!_.O(c, 6)
        }
        ,
        a[15] = function(k) {
            return b.l(k)
        }
        ,
        a[66] = function() {
            try {
                return !!HTMLScriptElement.supports("webbundle")
            } catch (k) {
                return !1
            }
        }
        ,
        a[67] = function() {
            return b.F
        }
        ,
        a[68] = function() {
            return b.K
        }
        ,
        a[74] = function() {
            return _.x(_.za.apply(0, arguments), "includes").call(_.za.apply(0, arguments), String(_.Xg(e)))
        }
        ,
        a),
        h[4] = (f[14] = function() {
            var k = Number(b.j || void 0);
            isNaN(k) ? k = void 0 : (k = new Date(1E3 * k),
            k = 1E4 * k.getFullYear() + 100 * (k.getMonth() + 1) + k.getDate());
            return k
        }
        ,
        f),
        h[5] = {},
        h)
    }
      , QP = function(a, b) {
        if (b && !a.A) {
            b = b.split(":");
            a.A = _.x(b, "find").call(b, function(d) {
                return 0 === d.indexOf("ID=")
            }) || null;
            var c;
            a.j = (null == (c = _.x(b, "find").call(b, function(d) {
                return 0 === d.indexOf("T=")
            })) ? void 0 : c.substring(2)) || null
        }
    };
    var Zv = function(a, b, c, d, e, f, h) {
        W.call(this, a, 863);
        this.o = c;
        this.Yd = Number(b);
        this.j = V(this, d);
        this.H = V(this, e);
        this.J = V(this, f);
        this.C = V(this, h)
    };
    _.P(Zv, W);
    Zv.prototype.g = function() {
        var a = this.J.value
          , b = this.j.value
          , c = this.C.value
          , d = this.H.value
          , e = this.o;
        var f = Bp(e);
        var h = b.getBoundingClientRect();
        e = _.Wk(e) ? Um(b, e) : {
            x: 0,
            y: 0
        };
        b = e.x;
        e = e.y;
        h = new _.aC(e,b + h.right,e + h.bottom,b);
        b = new HK;
        b = _.ci(b, 1, h.top);
        b = _.ci(b, 3, h.bottom);
        b = _.ci(b, 2, h.left);
        h = _.ci(b, 4, h.right);
        b = new IK;
        b = _.nk(b, 1, _.Dc(this.Yd));
        d = _.Fh(b, 2, !d);
        d = _.Ph(d, 3, h);
        c = _.ci(d, 4, c);
        f = _.ci(c, 5, f);
        f = {
            type: "asmres",
            payload: fl(f)
        };
        a.ports[0].postMessage(f)
    }
    ;
    var Gr = function(a, b, c, d) {
        W.call(this, a, 1061);
        var e = this;
        this.output = U(this);
        this.output.Oa(new _.B.Promise(function(f) {
            var h = b.listen(c, function(k) {
                k = d(k);
                null !== k && (h(),
                f(k))
            });
            _.Cp(e, h)
        }
        ))
    };
    _.P(Gr, W);
    Gr.prototype.g = function() {}
    ;
    var pr = function(a, b, c, d) {
        d = void 0 === d ? function() {
            return !0
        }
        : d;
        W.call(this, a, 1061);
        var e = this;
        this.output = kL(this);
        eL(this.output, new _.B.Promise(function(f) {
            var h = b.listen(c, function(k) {
                d(k) && (h(),
                f())
            });
            _.Cp(e, h)
        }
        ))
    };
    _.P(pr, W);
    pr.prototype.g = function() {}
    ;
    var Uv = function(a, b, c, d) {
        Gr.call(this, a, b, qr, function(e) {
            e = e.detail;
            var f;
            return "asmreq" === (null == (f = e.data) ? void 0 : f.type) && Zt(GK(e.data.payload), 1) === Number(c) ? e : null
        });
        this.o = d;
        this.j = U(this)
    };
    _.P(Uv, Gr);
    Uv.prototype.g = function() {
        this.j.G(Bp(this.o))
    }
    ;
    var RP = /(<head(\s+[^>]*)?>)/i
      , qv = function(a, b, c, d, e) {
        W.call(this, a, 665);
        this.Ua = b;
        this.Zd = c;
        this.isBackfill = d;
        this.yb = e;
        this.output = U(this)
    };
    _.P(qv, W);
    qv.prototype.g = function() {
        var a;
        0 !== this.Ua.kind || null == (a = this.Zd) || !_.u(a, 1) || this.yb ? this.output.G(this.Ua) : (a = this.Ua.qb,
        na() || (a = a.replace(RP, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">")),
        this.isBackfill && (a = a.replace(RP, '$1<meta name="referrer" content="origin">')),
        this.output.G({
            kind: 0,
            qb: a
        }))
    }
    ;
    var SP = function(a, b, c) {
        W.call(this, a, 1124);
        this.Be = kL(this);
        this.o = V(this, b);
        this.j = V(this, c)
    };
    _.P(SP, W);
    SP.prototype.g = function() {
        _.hC(this.j.value, {
            "min-width": "100%",
            visibility: "hidden"
        });
        _.hC(this.o.value, "min-width", "100%");
        this.Be.notify()
    }
    ;
    var TP = function(a, b, c, d, e) {
        W.call(this, a, 1125);
        this.o = V(this, b);
        this.j = V(this, c);
        nL(this, d);
        nL(this, e)
    };
    _.P(TP, W);
    TP.prototype.g = function() {
        var a = this.o.value
          , b = a.contentDocument;
        b && (a.setAttribute("height", String(b.body.offsetHeight)),
        a.setAttribute("width", String(b.body.offsetWidth)),
        _.hC(this.j.value, "visibility", "visible"))
    }
    ;
    var $v = function(a, b, c, d, e, f, h) {
        W.call(this, a, 718);
        this.slotId = b;
        this.pb = c;
        this.Zd = d;
        this.o = e;
        this.C = f;
        this.output = U(this);
        this.j = new pr(this.context,this.slotId,Wv);
        this.H = V(this, h)
    };
    _.P($v, W);
    $v.prototype.g = function() {
        var a = !this.H.value;
        if (!this.Zd || "height" !== this.pb || a)
            this.j.ya(),
            this.output.G(!1);
        else {
            a = new tk;
            _.er(this, a);
            var b = new SP(this.context,this.o,this.C);
            J(a, b);
            J(a, this.j);
            J(a, new TP(this.context,this.o,this.C,this.j.output,b.Be));
            a.run();
            this.output.G(!0)
        }
    }
    ;
    var UP = [2, 1];
    var VP = function(a, b, c, d, e, f, h, k, l, m, n, p) {
        W.call(this, a, 699);
        this.W = b;
        this.slotId = c;
        this.Ea = d;
        this.Wd = e;
        this.pb = f;
        this.Qa = h;
        this.fd = kL(this);
        this.C = V(this, k);
        this.j = V(this, l);
        this.o = V(this, m);
        this.H = lL(this, n);
        this.J = V(this, p)
    };
    _.P(VP, W);
    VP.prototype.g = function() {
        var a = this.C.value
          , b = this.j.value;
        b.style.width = "";
        b.style.height = "";
        if ("height" !== this.pb) {
            var c, d = null != (c = this.H.value) ? c : 0;
            c = this.o.value;
            var e = this.J.value
              , f = !1;
            switch (d) {
            case 1:
            case 2:
            case 4:
            case 5:
                var h = this.context;
                f = this.W;
                var k = this.slotId, l = this.Ea, m = this.Wd, n = this.Qa, p, q = a.parentElement ? null == (p = hn(a.parentElement, window)) ? void 0 : p.width : void 0;
                p = c.width;
                var t = c.height
                  , w = 0;
                var v = 0;
                var A = Mm(l);
                A = _.y(A);
                for (var z = A.next(); !z.done; z = A.next()) {
                    var D = z.value;
                    Array.isArray(D) && (z = D[0],
                    D = D[1],
                    w < z && (w = z),
                    v < D && (v = D))
                }
                v = [w, v];
                w = v[0] < p;
                t = v[1] < t;
                if (w || t) {
                    v = p + "px";
                    A = {
                        "max-height": "none",
                        "max-width": v,
                        padding: "0px",
                        width: v
                    };
                    t && (A.height = "auto");
                    Kp(b, a, A);
                    b = {};
                    if ((_.H = [2, 5],
                    _.x(_.H, "includes")).call(_.H, d) || w && p > Hp(e.width))
                        b.width = v,
                        b["max-width"] = v;
                    t && (b.height = "auto",
                    b["max-height"] = "none");
                    c: {
                        for (E in b)
                            if (Object.prototype.hasOwnProperty.call(b, E)) {
                                var E = !1;
                                break c
                            }
                        E = !0
                    }
                    E ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px",
                    _.Jp(a, b),
                    b = !0)
                } else
                    b = !1;
                b: {
                    v = c.width;
                    E = f.defaultView || f.parentWindow || _.ca;
                    switch (d) {
                    case 2:
                    case 5:
                        a = Lp(a, E, v, e, m);
                        break b;
                    case 1:
                    case 4:
                        if (e = a.parentElement)
                            if (m = $m(e)) {
                                z = m.width;
                                m = gn(k, E.document);
                                p = hn(m, E);
                                t = p.position;
                                D = Hp(p.width) || 0;
                                w = hn(e, E);
                                A = "rtl" === w.direction ? "Right" : "Left";
                                m = A.toLowerCase();
                                E = "absolute" === t ? 0 : Hp(w["padding" + A]);
                                w = Hp(w["border" + A + "Width"]);
                                v = Math.max(Math.round((z - Math.max(D, v)) / 2), 0);
                                z = {};
                                D = 0;
                                var G = cq(p);
                                G && (D = G[4] * ("Right" === A ? -1 : 1),
                                A = G[3] || 1,
                                1 !== (G[0] || 1) || 1 !== A) && (G[0] = 1,
                                G[3] = 1,
                                z.transform = "matrix(" + G.join(",") + ")");
                                A = 0;
                                switch (t) {
                                case "fixed":
                                    var Q, R = null != (Q = Number(jn(p.getPropertyValue(m)))) ? Q : 0, L;
                                    Q = null != (L = e.getBoundingClientRect().left) ? L : 0;
                                    A = R - Q;
                                    break;
                                case "relative":
                                    A = null != (R = Number(jn(p.getPropertyValue(m)))) ? R : 0;
                                    break;
                                case "absolute":
                                    z[m] = "0"
                                }
                                z["margin-" + m] = v - E - w - A - D + "px";
                                _.Jp(a, z);
                                a = !0
                            } else
                                a = !1;
                        else
                            a = !1;
                        break b;
                    default:
                        a = !1;
                        break b
                    }
                    a = void 0
                }
                b || a ? (_.x(UP, "includes").call(UP, d) && Np(h, f, k, l, d, c.width, c.height, q, "gpt_slotexp", n),
                f = !0) : f = !1;
                break;
            case 3:
                d = this.context,
                L = this.W,
                f = this.slotId,
                k = this.Ea,
                q = this.Wd,
                l = this.Qa,
                n = a.parentElement ? null == (h = hn(a.parentElement, window)) ? void 0 : h.width : void 0,
                h = c.width,
                Q = c.height,
                R = Hp(e.height) || 0,
                Q >= R || "none" === e.display || "hidden" === e.visibility || !q || -12245933 === q.width || a.getBoundingClientRect().bottom <= q.height ? f = !1 : (q = {
                    height: Q + "px"
                },
                Kp(b, a, q),
                _.Jp(a, q),
                Np(d, L, f, k, 3, h, Q, n, "gpt_slotred", l),
                f = !0)
            }
            !f && _.I(qF) && Np(this.context, this.W, this.slotId, this.Ea, 0, c.width, c.height, void 0, "gpt_pgbrk", this.Qa)
        }
        this.fd.notify()
    }
    ;
    var WP = function(a, b, c, d, e, f) {
        W.call(this, a, 1114);
        this.J = b;
        this.ka = c;
        this.j = d;
        this.H = e;
        this.C = U(this);
        this.o = U(this);
        this.O = V(this, f)
    };
    _.P(WP, W);
    WP.prototype.g = function() {
        if (this.J) {
            var a = this.J.split(":");
            if (2 !== a.length || "#flexibleAdSlotDebugSize" !== a[0])
                XP(this);
            else {
                var b = a[1];
                a = YP(this, b);
                var c;
                (c = /(?:.*)height=(ratio|[0-9]+)(?:;.*|$)/.exec(b)) ? (c = c[1],
                "ratio" === c ? c = a && this.j && this.H ? Math.floor(this.H / this.j * a) : null : (c = Number(c),
                c = 0 <= c ? c : null)) : c = null;
                b = (b = /(?:.*)ius=(.+,?)+(?:;.*|$)/.exec(b)) ? b[1].split(",") : [];
                if (a || c) {
                    var d, e;
                    this.C.G(new _.Zm(null != (d = null != a ? a : this.j) ? d : 0,null != (e = null != c ? c : this.H) ? e : 0));
                    this.o.G(b)
                } else
                    XP(this)
            }
        } else
            XP(this)
    }
    ;
    var YP = function(a, b) {
        b = /(?:.*)width=(parent|viewport|[0-9]+)(?:;.*|$)/.exec(b);
        if (!b)
            return null;
        b = b[1];
        if ("viewport" === b)
            return a.ka;
        if ("parent" === b) {
            var c, d, e;
            return (b = null != (e = null == (d = $m(null == (c = a.O.value) ? void 0 : c.parentElement)) ? void 0 : d.width) ? e : null) ? Math.min(b, a.ka) : null
        }
        a = Number(b);
        return 0 <= a ? a : null
    }
      , XP = function(a) {
        a.C.aa();
        a.o.G([])
    };
    var ZP = function(a, b, c, d, e, f, h, k, l, m, n) {
        W.call(this, a, 681);
        this.adUnitPath = b;
        this.Ea = c;
        this.H = d;
        this.fg = e;
        this.j = f;
        this.Ha = U(this);
        this.Ja = U(this);
        this.Ve = U(this);
        this.wf = U(this);
        this.U = lL(this, h);
        this.O = lL(this, k);
        this.o = V(this, l);
        this.C = V(this, m);
        this.J = V(this, n)
    };
    _.P(ZP, W);
    ZP.prototype.g = function() {
        var a = $P(this), b = this.O.value, c;
        if (c = !this.H && a && b)
            this.o.value.length ? (c = this.adUnitPath.split("/"),
            c = _.x(this.o.value, "includes").call(this.o.value, c[c.length - 1])) : c = !0;
        if (c) {
            var d = this.J.value, e, f;
            c = null != (f = null == (e = $m(d.parentElement)) ? void 0 : e.width) ? f : 0;
            e = b.width;
            b = b.height;
            aQ(this, !0, e, b, {
                kind: 0,
                qb: '<html><body style="height:' + (b - 2 + "px;width:" + (e - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;margin:0;"><p>Requested size:')) + (a.width + "x" + a.height + "</p><p>Rendered size:") + (e + "x" + b + "</p></body></html>")
            }, e <= c ? 1 : 2, d)
        } else if (a = this.U.value,
        this.H)
            aQ(this, !1, null != (d = this.j) ? d : 0, null != a ? a : 0, this.C.value);
        else {
            if (null == this.j)
                throw new pK("Missing 'width'.");
            if (null == a)
                throw new pK("Missing 'height'.");
            aQ(this, !1, this.j, a, this.C.value)
        }
    }
    ;
    var $P = function(a) {
        a = Mm(a.Ea)[0];
        return Array.isArray(a) && a.every(function(b) {
            return "number" === typeof b
        }) ? new _.Zm(a[0],a[1]) : null
    }
      , aQ = function(a, b, c, d, e, f, h) {
        f = void 0 === f ? a.fg : f;
        a.wf.G(b);
        a.Ja.G(new _.Zm(c,d));
        a.Ha.G(e);
        a.Ve.Da(f);
        h && _.hC(h, "opacity", .5)
    };
    var tv = function(a, b, c, d, e, f, h, k, l, m, n, p) {
        tk.call(this);
        b = new WP(a,b,c.width,l,m,p);
        J(this, b);
        a = new ZP(a,d,e,f,k,l,h,b.C,b.o,n,p);
        J(this, a);
        this.J = {
            Ha: a.Ha,
            Ja: a.Ja,
            Ve: a.Ve,
            wf: a.wf
        }
    };
    _.P(tv, tk);
    var bQ = function(a, b, c) {
        W.call(this, a, 698);
        this.B = b;
        this.output = U(this);
        this.j = V(this, c)
    };
    _.P(bQ, W);
    bQ.prototype.g = function() {
        this.output.Da(hn(this.j.value, this.B))
    }
    ;
    var Cv = function(a, b, c, d, e, f, h, k, l, m, n) {
        tk.call(this);
        var p = new bQ(a,b,f);
        J(this, p);
        a = new VP(a,b.document,d,e,c,k,n,f,h,l,m,p.output);
        J(this, a);
        this.fd = a.fd
    };
    _.P(Cv, tk);
    var cQ = function(a, b, c, d, e) {
        W.call(this, a, 937, _.$g(jG));
        this.Bb = b;
        this.j = U(this);
        this.o = U(this);
        this.C = U(this);
        this.Jc = c;
        this.Hc = d;
        this.nd = e
    };
    _.P(cQ, W);
    cQ.prototype.g = function() {
        var a = {}, b;
        if (null == (b = _.ym(this.Bb, fA, 2)) ? 0 : _.O(b, 2))
            a["*"] = {
                Df: !0
            };
        b = new _.B.Set;
        for (var c = _.y(gk(this.Bb, eA, 1)), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            for (var e = _.y([_.u(d, 2), _.u(d, 1)].filter(function(q) {
                return !!q
            })), f = e.next(); !f.done; f = e.next())
                a[f.value] = {
                    Df: _.O(d, 3)
                };
            d = _.y(Ot(d, 4));
            for (e = d.next(); !e.done; e = d.next())
                b.add(e.value)
        }
        this.Jc.G(a);
        this.j.G([].concat(_.di(b)));
        var h, k;
        a = null == (h = _.ym(this.Bb, fA, 2)) ? void 0 : null == (k = _.ym(h, $z, 1)) ? void 0 : gk(k, Zz, 1);
        this.o.Da((null == a ? 0 : a.length) ? a : null);
        var l;
        this.Hc.G(!(null == (l = _.ym(this.Bb, fA, 2)) || !_.O(l, 4)));
        var m;
        this.nd.G(!(null == (m = _.ym(this.Bb, fA, 2)) || !_.O(m, 5)));
        var n, p;
        h = null == (n = _.ym(this.Bb, fA, 2)) ? void 0 : null == (p = _.ym(n, $z, 3)) ? void 0 : gk(p, Zz, 1);
        this.C.Da((null == h ? 0 : h.length) ? h : null)
    }
    ;
    cQ.prototype.I = function(a) {
        this.l(a)
    }
    ;
    cQ.prototype.l = function() {
        this.Jc.G({});
        this.j.G([]);
        this.o.aa();
        this.Hc.G(!1);
        this.nd.G(!1);
        this.C.aa()
    }
    ;
    var dQ = function(a, b, c, d) {
        W.call(this, a, 980);
        this.Eb = b;
        this.output = new hs;
        this.j = V(this, c);
        this.o = V(this, d)
    };
    _.P(dQ, W);
    dQ.prototype.g = function() {
        (_.H = _.x(Object, "entries").call(Object, this.j.value),
        _.x(_.H, "find")).call(_.H, function(c) {
            var d = _.y(c);
            c = d.next().value;
            d = d.next().value;
            return "*" !== c && (null == d ? void 0 : d.Df)
        }) && (this.Eb.K = !0);
        Yn(25, this.context);
        for (var a = _.y(this.o.value), b = a.next(); !b.done; b = a.next())
            Pg(b.value);
        this.output.notify()
    }
    ;
    var eQ = function(a, b, c, d) {
        W.call(this, a, 931);
        this.j = lL(this, b);
        this.cd = c;
        this.Ic = d
    };
    _.P(eQ, W);
    eQ.prototype.g = function() {
        var a = this.j.value
          , b = new _.B.Map;
        this.cd.G(new _.B.Map);
        if (a) {
            var c;
            a = _.y(null != (c = this.j.value) ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = gk(d, Yz, 1);
                c = 1 === _.If(c[0], 1, 0) ? nz(c[0]) : oz(c[0], mz);
                d = _.Wf(d, 2);
                var e = void 0;
                b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
            }
        }
        this.Ic.G(b)
    }
    ;
    eQ.prototype.l = function() {
        this.cd.G(new _.B.Map);
        this.Ic.G(new _.B.Map)
    }
    ;
    var fQ = function(a, b, c) {
        W.call(this, a, 981);
        this.o = U(this);
        this.C = lL(this, b);
        this.j = c
    };
    _.P(fQ, W);
    fQ.prototype.g = function() {
        var a = new _.B.Map, b, c = _.y(null != (b = this.C.value) ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = gk(b, Yz, 1);
            d = 1 === _.If(d[0], 1, 0) ? nz(d[0]) : oz(d[0], mz);
            a.set(d, _.Wf(b, 2))
        }
        this.o.G(a);
        this.j.G(new fi)
    }
    ;
    fQ.prototype.l = function() {
        this.o.G(new _.B.Map);
        var a = this.j
          , b = a.G;
        var c = new fi;
        c = _.Nh(c, 1, 2);
        b.call(a, c)
    }
    ;
    var gQ = function(a, b, c, d, e, f) {
        W.call(this, a, 976);
        this.nextFunction = d;
        this.j = e;
        this.requestBidsConfig = f;
        nL(this, b);
        nL(this, c)
    };
    _.P(gQ, W);
    gQ.prototype.g = function() {
        var a;
        null == (a = this.nextFunction) || a.apply(this.j, [this.requestBidsConfig])
    }
    ;
    var hQ = function(a, b, c, d, e, f) {
        W.call(this, a, 975);
        this.je = b;
        this.he = c;
        this.j = d;
        this.pbjs = e;
        this.requestBidsConfig = f;
        this.output = new hs
    };
    _.P(hQ, W);
    hQ.prototype.g = function() {
        hq(this.pbjs, this.je, this.he, this.j, this.requestBidsConfig);
        this.output.notify()
    }
    ;
    hQ.prototype.l = function() {
        this.output.notify()
    }
    ;
    var iQ = function(a, b, c, d, e, f) {
        W.call(this, a, 1100);
        this.pbjs = b;
        this.o = c;
        this.j = d;
        this.C = e;
        this.requestBidsConfig = f;
        this.output = new hs
    };
    _.P(iQ, W);
    iQ.prototype.g = function() {
        var a, b, c = null != (b = null == (a = this.o) ? void 0 : a.get("*")) ? b : _.$g(vF);
        if (c)
            this.mc(c);
        else {
            var d, e, f, h;
            a = null != (h = null != (f = null == (d = this.requestBidsConfig) ? void 0 : d.adUnits) ? f : null == (e = this.pbjs) ? void 0 : e.adUnits) ? h : [];
            d = _.y(a);
            for (e = d.next(); !e.done; e = d.next())
                if (e = e.value.code) {
                    a = h = f = void 0;
                    if (null == (b = this.o))
                        b = void 0;
                    else {
                        c = b.get;
                        if (_.I(uF)) {
                            var k = e.match(/\/?([0-9]+)(?:,[0-9]+)?((?:\/.+?)+?)(?:\/*)$/);
                            k = 3 !== (null == k ? void 0 : k.length) ? e : "/" + k[1] + k[2]
                        } else
                            k = e;
                        b = c.call(b, k)
                    }
                    b = null != (f = null != (h = b) ? h : null == (a = this.o) ? void 0 : a.get(_.Xg(e))) ? f : 0;
                    this.mc(b)
                }
        }
        this.output.notify()
    }
    ;
    iQ.prototype.mc = function(a) {
        var b;
        null != (b = this.j) && _.Fh(b, 2, this.C);
        if (a) {
            var c;
            null == (c = this.j) || _.Nh(c, 1, 1);
            var d;
            null != (d = this.j) && _.Kh(d, 3, a);
            if (!this.C) {
                this.requestBidsConfig.timeout = a;
                var e, f, h;
                b = null != (h = null == (f = (e = this.pbjs).getConfig) ? void 0 : f.call(e).s2sConfig) ? h : [];
                if (Array.isArray(b))
                    for (e = _.y(b),
                    f = e.next(); !f.done; f = e.next())
                        f.value.timeout = a;
                else
                    b.timeout = a;
                var k, l;
                null == (l = (k = this.pbjs).setConfig) || l.call(k, {
                    bidderTimeout: a
                })
            }
        }
    }
    ;
    iQ.prototype.l = function() {
        this.output.notify()
    }
    ;
    var jQ = function(a, b, c, d, e, f, h, k) {
        _.T.call(this);
        this.g = a;
        this.je = b;
        this.he = c;
        this.l = d;
        this.F = e;
        this.j = f;
        this.I = h;
        this.pbjs = k
    };
    _.P(jQ, _.T);
    jQ.prototype.push = function(a) {
        var b = a.context;
        var c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            var d = new tk;
            _.er(this, d);
            var e = new iQ(this.g,this.pbjs,this.F,this.j,this.I,a)
              , f = new hQ(this.g,this.je,this.he,this.l,this.pbjs,a);
            J(d, e);
            J(d, f);
            J(d, new gQ(this.g,f.output,e.output,c,b,a));
            d.run()
        }
    }
    ;
    var jq = function(a, b) {
        this.push = M(a, 932, function(c) {
            b.push(c)
        })
    };
    var kQ = function(a, b, c, d, e, f, h, k, l, m, n) {
        W.call(this, a, 951);
        this.B = window;
        this.H = V(this, b);
        this.o = lL(this, d);
        this.C = V(this, e);
        this.O = V(this, f);
        this.j = lL(this, h);
        this.U = lL(this, k);
        this.J = V(this, l);
        nL(this, c);
        this.Mf = null != m ? m : U(this);
        this.Nf = null != n ? n : U(this)
    };
    _.P(kQ, W);
    kQ.prototype.g = function() {
        var a = !!Lo().pbjs_hooks;
        this.Nf.G(a);
        this.Mf.Da(a ? null : _.xf());
        var b, c = null == (b = this.o.value) ? void 0 : b.size, d;
        b = (null == (d = this.j.value) ? void 0 : d.size) || _.$g(vF);
        d = this.H.value;
        var e, f = null != (e = Lo().pbjs_hooks) ? e : [];
        e = new jQ(this.context,this.o.value,this.C.value,this.O.value,this.j.value,this.U.value,this.J.value,d);
        _.er(this, e);
        f = _.y(f);
        for (var h = f.next(); !h.done; h = f.next())
            e.push(h.value);
        if (c || b || a)
            Lo().pbjs_hooks = kq(this.context, e);
        !c && !b || a || iq(d, this.B)
    }
    ;
    var lQ = function(a, b, c) {
        W.call(this, a, 966);
        this.B = b;
        this.yc = c
    };
    _.P(lQ, W);
    lQ.prototype.g = function() {
        var a = this
          , b = Ah(this.B);
        if (b)
            this.yc.G(b);
        else if (b = Object.getOwnPropertyDescriptor(this.B, "_pbjsGlobals"),
        !b || b.configurable) {
            var c = null;
            Object.defineProperty(this.B, "_pbjsGlobals", {
                set: function(d) {
                    c = d;
                    (d = Ah(a.B)) && a.yc.G(d)
                },
                get: function() {
                    return c
                }
            })
        }
    }
    ;
    lQ.prototype.l = function() {}
    ;
    var pq = function(a, b, c, d, e) {
        W.call(this, a, 1146, _.$g(jG));
        this.Eb = b;
        this.B = d;
        this.j = e;
        this.o = mL(this, c)
    };
    _.P(pq, W);
    pq.prototype.g = function() {
        var a = this.o.value
          , b = new tk;
        _.er(this, b);
        var c = new lQ(this.context,this.B,this.j.yc);
        J(b, c);
        if (a) {
            a = new cQ(this.context,a,this.j.Jc,this.j.Hc,this.j.nd);
            J(b, a);
            var d = new dQ(this.context,this.Eb,a.Jc,a.j);
            J(b, d);
            var e = new eQ(this.context,a.o,this.j.cd,this.j.Ic);
            J(b, e);
            var f = new fQ(this.context,a.C,this.j.eg);
            J(b, f);
            c = new kQ(this.context,c.yc,d.output,e.Ic,this.j.Hc,e.cd,f.o,f.j,a.nd,this.j.Mf,this.j.Nf);
            J(b, c)
        } else
            mQ(this);
        b.run()
    }
    ;
    var mQ = function(a) {
        a.j.Jc.G({});
        a.j.Ic.G(new _.B.Map);
        a.j.Hc.G(!1);
        a.j.cd.G(new _.B.Map);
        a.j.Mf.aa();
        a.j.Nf.G(!1);
        a.j.eg.G(new fi);
        a.j.nd.G(!1)
    };
    pq.prototype.I = function(a) {
        this.l(a)
    }
    ;
    pq.prototype.l = function() {
        mQ(this)
    }
    ;
    var nQ = function(a, b, c, d, e, f, h) {
        W.call(this, a, 920);
        this.P = b;
        this.V = c;
        this.pbjs = f;
        this.o = h;
        this.j = U(this);
        this.C = [];
        this.O = V(this, d);
        this.J = lL(this, e.Ic);
        this.H = V(this, e.Hc);
        this.da = V(this, e.cd);
        this.U = lL(this, e.eg)
    };
    _.P(nQ, W);
    nQ.prototype.g = function() {
        for (var a = new _.B.Map, b = !1, c = _.y(this.O.value), d = c.next(), e = {}; !d.done; e = {
            Oh: void 0
        },
        d = c.next()) {
            d = d.value;
            for (var f = {}, h = _.y(gm(this.V[d.getDomId()])), k = h.next(); !k.done; k = h.next())
                k = k.value,
                f[_.u(k, 1)] = nm(k);
            var l = k = h = void 0
              , m = void 0
              , n = void 0
              , p = void 0;
            (f = oi(this.pbjs, {
                td: d.getDomId(),
                adUnitCode: d.getAdUnitPath()
            }, {
                En: f,
                je: null != (n = null == (h = this.J) ? void 0 : h.value) ? n : void 0,
                he: null == (k = this.H) ? void 0 : k.value,
                Wm: null == (l = this.da) ? void 0 : l.value,
                Pk: null != (p = null == (m = this.U) ? void 0 : m.value) ? p : void 0,
                Xl: _.$g(sF),
                xm: _.$g(rF)
            })) ? (b = !0,
            a.set(d, f)) : (null === f && this.C.push(d),
            a.set(d, new gi));
            e.Oh = d.getDomId() + d.getAdUnitPath();
            hi.has(e.Oh) || _.Cp(d, function(q) {
                return function() {
                    return hi.delete(q.Oh)
                }
            }(e))
        }
        b ? (this.o.Da(a),
        this.j.G(this.C)) : (this.o.aa(),
        this.j.aa())
    }
    ;
    nQ.prototype.I = function(a) {
        this.l(a)
    }
    ;
    nQ.prototype.l = function(a) {
        this.P.error(uO(a.message));
        this.o.aa();
        this.j.aa()
    }
    ;
    var oQ = function(a, b, c, d) {
        W.call(this, a, 1019);
        this.V = c;
        this.pbjs = d;
        this.j = lL(this, b)
    };
    _.P(oQ, W);
    oQ.prototype.g = function() {
        pQ(this)
    }
    ;
    var pQ = function(a) {
        if (!(Math.random() >= _.$g(tF))) {
            var b = (a.j.value || []).filter(function(l) {
                return gm(a.V[l.getDomId()]).some(function(m) {
                    return "hb_pb" === ik(m, 1)
                })
            });
            if (b.length) {
                var c, d, e, f, h, k = (null == (c = a.pbjs) ? 0 : null == (d = c.adUnits) ? 0 : d.length) ? [].concat(_.di(new _.B.Set(null == (e = a.pbjs) ? void 0 : e.adUnits.map(function(l) {
                    return l.code
                })))) : _.x(Object, "keys").call(Object, (null == (f = a.pbjs) ? void 0 : null == (h = f.getAdserverTargeting) ? void 0 : h.call(f)) || {});
                c = new dp("haux");
                fp(c, "ius", b.map(function(l) {
                    return l.getAdUnitPath()
                }).join("~"));
                fp(c, "dids", b.map(function(l) {
                    return l.getDomId()
                }).join("~"));
                fp(c, "paucs", k.join("~"));
                ep(c, a.context);
                hp(c)
            }
        }
    };
    var rq = function(a, b, c, d, e, f, h, k, l) {
        W.call(this, a, 1153);
        this.P = b;
        this.X = c;
        this.V = d;
        this.networkCode = e;
        this.H = f;
        this.Gc = h;
        this.j = l;
        this.J = V(this, h.Jc);
        this.o = new dL(h.yc);
        k && (this.C = lL(this, k))
    };
    _.P(rq, W);
    rq.prototype.g = function() {
        var a, b = null == (a = this.o) ? void 0 : a.value;
        if (a = qQ(this))
            null != b && b.libLoaded ? "function" !== typeof b.getEvents ? (this.P.error(tO()),
            a = !1) : a = !0 : a = !1;
        if (a) {
            a = new tk;
            _.er(this, a);
            var c = new nQ(this.context,this.P,this.V,this.H,this.Gc,b,this.j.Nh);
            J(a, c);
            J(a, new oQ(this.context,c.j,this.V,b));
            a.run()
        } else
            this.j.Nh.aa()
    }
    ;
    var qQ = function(a) {
        if (_.O(a.X, 38))
            return !0;
        var b;
        if (null == (b = a.C) ? 0 : b.value)
            return !0;
        var c = a.J.value;
        if (!c)
            return !1;
        var d;
        return !(null == (d = c["*"]) || !d.Df) || a.networkCode.split(",").some(function(e) {
            var f;
            return !(null == (f = c[e]) || !f.Df)
        })
    };
    var rQ = function(a, b, c, d, e) {
        W.call(this, a, 982);
        this.yb = b;
        this.Qa = c;
        this.j = d;
        this.Lf = e
    };
    _.P(rQ, W);
    rQ.prototype.g = function() {
        for (var a = this, b = _.y(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), c = b.next(), d = {}; !c.done; d = {
            hf: void 0,
            rh: void 0
        },
        c = b.next())
            d.hf = c.value,
            d.rh = function(e) {
                return function(f) {
                    if (a.j === f.adId) {
                        var h = new dp("hbm_brt");
                        ep(h, a.context);
                        fp(h, "et", e.hf);
                        fp(h, "sf", a.yb);
                        fp(h, "qqid", a.Qa);
                        var k, l, m;
                        fp(h, "bc", String(null != (m = null != (l = f.bidderCode) ? l : null == (k = f.bid) ? void 0 : k.bidder) ? m : ""));
                        hp(h)
                    }
                }
            }(d),
            (0,
            this.Lf.onEvent)(d.hf, d.rh),
            _.Cp(this, function(e) {
                return function() {
                    return void Kl(a.context, a.id, function() {
                        var f, h;
                        return void (null == (h = (f = a.Lf).offEvent) ? void 0 : h.call(f, e.hf, e.rh))
                    }, !0)
                }
            }(d))
    }
    ;
    rQ.prototype.l = function() {}
    ;
    var sQ = function(a, b, c, d, e) {
        W.call(this, a, 1134);
        this.o = b;
        this.yb = c;
        this.Qa = d;
        this.j = new dL(e)
    };
    _.P(sQ, W);
    sQ.prototype.g = function() {
        var a;
        if (this.o && null != (a = this.j.value) && a.onEvent) {
            a = new tk;
            var b = new rQ(this.context,this.yb,this.Qa,this.o,this.j.value);
            J(a, b);
            a.run()
        }
    }
    ;
    var wQ = function(a, b, c, d) {
        var e = this;
        this.context = a;
        this.L = c;
        this.g = new _.B.Map;
        this.A = new _.B.Map;
        this.timer = _.Ng(Gl);
        TM() && (_.ef(window, "DOMContentLoaded", El(a, 334, function() {
            for (var f = _.y(e.g), h = f.next(); !h.done; h = f.next()) {
                var k = _.y(h.value);
                h = k.next().value;
                k = k.next().value;
                tQ(e, h, k) && e.g.delete(h)
            }
        })),
        b.listen(kN, function(f) {
            var h = f.detail;
            f = h.Mh;
            h = h.V;
            return void uQ(e, vQ(d, f), Zt(h, 20))
        }),
        b.listen(lN, function(f) {
            var h = f.detail;
            f = h.Mh;
            h = h.V;
            f = vQ(d, f);
            h = Zt(h, 20);
            var k = e.A.get(f);
            null != k ? VM(k, h) : uQ(e, f, h)
        }))
    }
      , uQ = function(a, b, c) {
        tQ(a, b, c) ? a.g.delete(b) : (a.g.set(b, c),
        _.Cp(b, function() {
            return a.g.delete(b)
        }))
    }
      , tQ = function(a, b, c) {
        var d = gn(b);
        if ("DIV" !== (null == d ? void 0 : d.nodeName))
            return !1;
        d = new SM({
            B: window,
            timer: a.timer,
            qc: d,
            Db: function(e) {
                return void Il(a.context, 336, e)
            },
            zn: _.I(aJ)
        });
        if (!d.A)
            return !1;
        VM(d, c);
        a.A.set(b, d);
        sN(a.L, b, function() {
            return void a.A.delete(b)
        });
        return !0
    };
    var xQ = function(a, b, c, d, e) {
        W.call(this, a, 1058);
        this.B = b;
        this.ba = c;
        this.output = kL(this);
        d && (this.j = lL(this, d.ld));
        nL(this, e)
    };
    _.P(xQ, W);
    xQ.prototype.g = function() {
        var a;
        Vg(this.B.isSecureContext, this.B, this.B.document) && null != (a = this.j) && a.value && !_.I(xF) && Cg(this.ba) && (a = this.j.value,
        a({
            message: "goog:spam:client_age",
            pvsid: this.context.pvsid
        }));
        this.output.notify()
    }
    ;
    var yQ = function(a, b, c) {
        W.call(this, a, 1199);
        this.j = c;
        this.o = lL(this, b)
    };
    _.P(yQ, W);
    yQ.prototype.g = function() {
        var a = this.o.value;
        a && (a = dP(this.j, a.getSlotElementId()),
        _.Fh(a, 30, !0))
    }
    ;
    var zQ = function(a, b, c, d, e, f, h, k) {
        W.call(this, a, 1109);
        this.W = c;
        this.X = d;
        this.j = e;
        this.C = f;
        this.H = h;
        this.o = k;
        this.output = U(this);
        this.J = lL(this, b)
    };
    _.P(zQ, W);
    zQ.prototype.g = function() {
        var a = this
          , b = this.J.value;
        b && (this.o.push(function() {
            b.addService(a.j)
        }),
        XB(this.W, function() {
            a.H();
            a.C(b);
            _.O(a.X, 4) && a.j.refresh([b])
        }))
    }
    ;
    var AQ = {}
      , yq = (AQ[64] = wO,
    AQ[134217728] = xO,
    AQ[32768] = yO,
    AQ[536870912] = zO,
    AQ[8] = AO,
    AQ[512] = BO,
    AQ[1048576] = CO,
    AQ[4194304] = EO,
    AQ);
    var BQ = function(a) {
        return "22639388115" === Dl(a.getAdUnitPath())
    };
    var CQ = function(a, b, c, d, e, f) {
        W.call(this, a, 1108);
        this.adUnitPath = b;
        this.format = c;
        this.Gb = d;
        this.o = e;
        this.P = f;
        this.output = U(this);
        this.j = U(this)
    };
    _.P(CQ, W);
    CQ.prototype.g = function() {
        var a = Uq(this.context, this.P, this.o, {
            Ei: this.format,
            adUnitPath: this.adUnitPath,
            Gb: this.Gb
        });
        this.j.Da(a);
        this.output.Da(a ? a.g : null)
    }
    ;
    var DQ = function(a, b, c, d) {
        W.call(this, a, 1111);
        this.j = c;
        this.o = d;
        this.C = lL(this, b)
    };
    _.P(DQ, W);
    DQ.prototype.g = function() {
        var a = this.C.value;
        a && (a = dP(this.j, a.getSlotElementId()),
        pk(a, 27, oA, this.o))
    }
    ;
    var EQ = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w) {
        tk.call(this);
        this.context = a;
        this.W = b;
        this.adUnitPath = c;
        this.format = d;
        this.Gb = e;
        this.ia = f;
        this.da = h;
        this.ha = k;
        this.U = l;
        this.X = m;
        this.J = n;
        this.na = p;
        this.P = q;
        this.sa = t;
        this.fa = w;
        a = J(this, new CQ(this.context,this.adUnitPath,this.format,this.Gb,this.na,this.P));
        this.fa && J(this, new DQ(this.context,a.output,this.J,this.fa));
        this.sa && J(this, new yQ(this.context,a.output,this.J));
        J(this, new zQ(this.context,a.output,this.W,this.X,this.ia,this.da,this.ha,this.U));
        this.l = {
            Gp: a.j
        }
    };
    _.P(EQ, tk);
    var bw = function(a, b, c, d, e, f, h, k, l) {
        W.call(this, a, 1198);
        this.W = b;
        this.googletag = c;
        this.X = d;
        this.j = e;
        this.o = f;
        this.P = h;
        this.Gd = k;
        this.C = l
    };
    _.P(bw, W);
    bw.prototype.g = function() {
        for (var a = this, b = _.y(this.C), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            c = d.getAdUnitPath();
            d = _.If(d, 2, 0);
            c && d && (this.Gd.add(Dl(c)),
            c = new EQ(this.context,this.W,c,d,!0,this.googletag.pubads(),this.googletag.display,function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }
            ,this.googletag.cmd,this.X,this.j,this.o,this.P,!0),
            c.run(),
            _.er(this, c))
        }
    }
    ;
    var Tu = function(a, b) {
        W.call(this, a, 1110);
        this.B = b;
        this.output = U(this)
    };
    _.P(Tu, W);
    Tu.prototype.g = function() {
        var a = this.B;
        a = _.I(XI) && void 0 !== a.credentialless && (_.I(YI) || a.crossOriginIsolated);
        this.output.G(a)
    }
    ;
    var FQ = function(a, b, c, d, e, f) {
        W.call(this, a, 935);
        this.L = b;
        this.M = c;
        this.W = d;
        this.output = kL(this);
        this.j = V(this, e);
        nL(this, f)
    };
    _.P(FQ, W);
    FQ.prototype.g = function() {
        var a = this.M
          , b = a.X;
        a = a.V;
        for (var c = _.y(this.j.value), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            d = e;
            var f = b;
            e = a[e.getDomId()];
            var h = this.L
              , k = this.W;
            Vq(e, f) && !h.Uc(d) && Wq(d, k, e, f)
        }
        this.output.notify()
    }
    ;
    var GQ = ti(864, function(a, b) {
        var c = b.L
          , d = b.M;
        b = b.W;
        a = _.y(a.Z);
        for (var e = a.next(); !e.done; e = a.next())
            if (e = e.value,
            _.bu(c, e)) {
                var f = d
                  , h = f.X;
                f = f.V[e.getDomId()];
                Vq(f, h) && Wq(e, b, f, h);
                yN(c, e);
                var k = void 0
                  , l = void 0;
                null != (k = null != (l = tq(f, 10)) ? l : _.O(h, 11)) && k && Wq(e, b, f, h)
            }
        return {}
    }, {});
    var HQ = qi(1238, function(a, b) {
        var c, d, e, f, h, k, l, m, n, p, q, t, w, v;
        return _.gf(function(A) {
            c = a;
            d = c.Z;
            e = b;
            f = e.W;
            h = e.context;
            k = e.ge;
            l = new _.B.Set;
            n = m = !1;
            p = _.$g(BF);
            q = _.$g(DF);
            t = 0 < q && h.oc < 1 / q;
            w = _.xf();
            v = new _.B.Promise(function(z) {
                for (var D = new IntersectionObserver(El(h, 1239, function(Q) {
                    m || (t && h.xa.hb.kb.ac.zi.gm.Kb({
                        Lb: _.xf() - w
                    }),
                    m = !0);
                    n ? D.disconnect() : (Q.forEach(function(R) {
                        var L = _.x(d, "find").call(d, function(X) {
                            return X.getDomId() === R.target.id
                        });
                        L && (R.intersectionRatio >= p ? l.add(L) : l.delete(L))
                    }),
                    z(l))
                }),{
                    threshold: [p]
                }), E = _.y(d), G = E.next(); !G.done; G = E.next())
                    (G = gn(G.value, f)) && D.observe(G)
            }
            );
            _.Cp(k, function() {
                n = !0
            });
            return A.return(_.B.Promise.race([v, YB(_.$g(CF), null)]).then(function(z) {
                t && h.xa.hb.kb.ac.zi.ll.Kb({
                    Lb: _.xf() - w,
                    didTimeout: null === z
                });
                return z
            }))
        })
    });
    var IQ = function(a, b, c) {
        W.call(this, a, 1208);
        this.zg = b;
        this.B = c;
        this.output = new hs
    };
    _.P(IQ, W);
    IQ.prototype.g = function() {
        var a, b = null == (a = this.zg) ? void 0 : _.ym(a, QA, 1);
        if (b) {
            a = new cK(this.B);
            var c = _.Wf(b, 2) - Date.now() / 1E3;
            c = {
                Bf: Math.max(c, 0),
                path: _.u(b, 3),
                domain: _.u(b, 4),
                Tj: !1
            };
            b = b.getValue();
            a = a.g;
            "null" !== a.origin && (new Ig(a.document)).set("__eoi", b, c)
        }
        this.output.notify()
    }
    ;
    var gr = qi(879, function(a, b) {
        var c;
        return _.gf(function(d) {
            return (null != (c = a.zd) ? c : b.qf.zd()) ? d.return(uJ(b.qf)) : d.return(null)
        })
    });
    var fr = function(a, b, c, d) {
        W.call(this, a, 896);
        this.qf = b;
        this.Tc = d;
        this.xf = U(this);
        c && nL(this, c)
    };
    _.P(fr, W);
    fr.prototype.g = function() {
        this.xf.G(this.qf.zd(".google.cn" === this.Tc))
    }
    ;
    var Yu = function(a, b) {
        W.call(this, a, 1018);
        this.vd = kL(this);
        this.j = lL(this, b)
    };
    _.P(Yu, W);
    Yu.prototype.g = function() {
        var a, b, c;
        if (null == (a = this.j.value))
            a = void 0;
        else {
            var d;
            null == (b = _.ym(a, mJ, 5)) ? d = void 0 : d = Ot(b, 1);
            a = d
        }
        a = _.y(null != (c = a) ? c : []);
        for (c = a.next(); !c.done; c = a.next())
            Pg(c.value);
        this.vd.notify()
    }
    ;
    var Zu = function(a, b) {
        W.call(this, a, 1070);
        this.j = U(this);
        this.o = lL(this, b)
    };
    _.P(Zu, W);
    Zu.prototype.g = function() {
        var a, b = null == (a = this.o.value) ? void 0 : _.ym(a, mJ, 5);
        if (b) {
            a = [];
            for (var c = _.y(Wd(b, 2, le, 1, void 0, void 0, 4096)), d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                d = new oA;
                var f = new mA;
                e = _.nk(f, 1, Jc(e));
                d = _.Ph(d, 2, e);
                null != ni(b, 3) && (e = new kA,
                e = _.Nh(e, 1, 1),
                f = _.jz(b, 3),
                e = _.Kh(e, 2, f),
                _.Ph(d, 3, e));
                a.push(d)
            }
            this.j.G(a)
        } else
            this.j.G([])
    }
    ;
    var JQ = function(a, b, c, d) {
        W.call(this, a, 1016);
        this.output = U(this);
        this.o = lL(this, b);
        this.j = lL(this, c);
        this.C = oL(this, [b, d])
    };
    _.P(JQ, W);
    JQ.prototype.g = function() {
        if (this.j.value) {
            var a = this.o.value || this.C.value;
            a && KQ(this, a) ? this.output.G(a) : this.output.aa()
        } else
            this.output.aa()
    }
    ;
    JQ.prototype.I = function(a) {
        this.l(a)
    }
    ;
    JQ.prototype.l = function() {
        this.output.aa()
    }
    ;
    var KQ = function(a, b) {
        return gk(a.j.value, hA, 1).some(function(c) {
            return _.u(c, 1) === b
        })
    };
    var LQ = function(a, b) {
        W.call(this, a, 1015);
        this.j = U(this);
        this.o = lL(this, b)
    };
    _.P(LQ, W);
    LQ.prototype.g = function() {
        if (this.o.value)
            if (gk(this.o.value, hA, 1).length) {
                var a = gk(this.o.value, hA, 1)[0];
                (_.H = [2, 3],
                _.x(_.H, "includes")).call(_.H, _.If(a, 3, 0)) ? this.j.G(_.u(a, 1)) : this.j.aa()
            } else
                this.j.aa();
        else
            this.j.aa()
    }
    ;
    LQ.prototype.I = function(a) {
        this.l(a)
    }
    ;
    LQ.prototype.l = function() {
        this.j.aa()
    }
    ;
    var MQ = function(a, b, c) {
        W.call(this, a, 1017);
        this.B = c;
        this.output = kL(this);
        this.j = lL(this, b)
    };
    _.P(MQ, W);
    MQ.prototype.g = function() {
        var a = this;
        if (this.j.value) {
            var b = GJ(this.B, this.j.value, function(c) {
                if (!c) {
                    c = Kf(b.g);
                    for (var d = _.y(document.getElementsByName("googlefcPresent")), e = d.next(); !e.done; e = d.next())
                        c.Dk(e.value)
                }
                a.output.notify()
            });
            b.start(_.I(NF))
        } else
            this.output.notify()
    }
    ;
    MQ.prototype.I = function(a) {
        this.l(a)
    }
    ;
    MQ.prototype.l = function() {
        this.output.notify()
    }
    ;
    var NQ = function(a, b) {
        W.call(this, a, 1056);
        this.output = U(this);
        this.j = V(this, b)
    };
    _.P(NQ, W);
    NQ.prototype.g = function() {
        var a = Dl(this.j.value.getAdUnitPath());
        this.output.G(a)
    }
    ;
    NQ.prototype.I = function(a) {
        this.l(a)
    }
    ;
    NQ.prototype.l = function() {
        this.output.aa()
    }
    ;
    var Xu = function(a, b, c, d) {
        W.call(this, a, 906, _.$g(dI));
        this.bc = kL(this);
        if (b === b.top) {
            var e = new tk;
            _.er(this, e);
            var f = new LQ(a,c);
            J(e, f);
            d = new Gr(a,d,kN,function(h) {
                return h.detail.V
            }
            );
            J(e, d);
            d = new NQ(a,d.output);
            J(e, d);
            a = new JQ(a,f.j,c,d.output);
            J(e, a);
            b = new MQ(this.context,a.output,b);
            J(e, b);
            hL(this.Sa, b.output, !0);
            e.run()
        } else
            this.bc.notify()
    };
    _.P(Xu, W);
    Xu.prototype.g = function() {
        this.bc.notify()
    }
    ;
    Xu.prototype.I = function(a) {
        this.l(a)
    }
    ;
    Xu.prototype.l = function() {
        this.bc.notify()
    }
    ;
    var Lv = function(a, b, c, d, e) {
        W.call(this, a, 934);
        this.B = b;
        this.slotId = c;
        nL(this, d);
        this.j = V(this, e)
    };
    _.P(Lv, W);
    Lv.prototype.g = function() {
        var a = this;
        this.slotId.listen(qr, function(b) {
            b = b.detail.data;
            try {
                var c = JSON.parse(b);
                if ("gpi-uoo" === c.googMsgType) {
                    var d = c.userOptOut;
                    var e = c.clearAdsData;
                    var f = a.j.value
                      , h = new QA;
                    var k = Yh(h, 1, d ? "1" : "0");
                    var l = Yh(_.Kh(k, 2, 2147483647), 3, "/");
                    var m = Yh(l, 4, a.B.location.hostname);
                    var n = new _.uK(a.B);
                    vK(n, "__gpi_opt_out", m, f);
                    if (d || e)
                        wK(n, "__gads", f),
                        wK(n, "__gpi", f)
                }
            } catch (p) {}
        })
    }
    ;
    var OQ = function(a, b, c) {
        W.call(this, a, 944);
        this.B = b;
        this.j = new _.uK(this.B);
        this.o = V(this, c)
    };
    _.P(OQ, W);
    OQ.prototype.g = function() {
        var a = this.o.value;
        if (Jg(this.j.B) && Cg(a)) {
            var b = _.Zn(this.j, "__gpi_opt_out", a);
            if (b) {
                var c = new QA;
                b = Yh(c, 1, b);
                b = Yh(_.Kh(b, 2, 2147483647), 3, "/");
                b = Yh(b, 4, this.B.location.hostname);
                vK(this.j, "__gpi_opt_out", b, a)
            }
        }
    }
    ;
    var PQ = function(a, b, c, d) {
        W.call(this, a, 821);
        this.ba = b;
        this.Ga = c;
        this.j = V(this, d)
    };
    _.P(PQ, W);
    PQ.prototype.g = function() {
        if (Cg(this.ba)) {
            var a = new _.B.Set;
            var b = gk(this.j.value, QA, 14);
            b = _.y(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = void 0
                  , e = null != (d = rz(c, 5)) ? d : 1;
                a.has(e) || (vK(this.Ga, 2 === e ? "__gpi" : "__gads", c, this.ba),
                a.add(e))
            }
        }
    }
    ;
    var QQ = function() {
        this.A = [];
        this.hostpageLibraryTokens = [];
        this.g = {}
    }
      , Iu = function(a, b) {
        var c, d;
        a = null != (d = null == (c = a.g[b]) ? void 0 : _.x(c, "values").call(c)) ? d : [];
        return [].concat(_.di(a))
    };
    var RQ = function(a, b, c, d) {
        W.call(this, a, 822);
        this.slotId = b;
        this.eb = c;
        this.j = V(this, d)
    };
    _.P(RQ, W);
    RQ.prototype.g = function() {
        var a = Wd(this.j.value, 23, _.zc, 2);
        a = _.y(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = this.eb;
            if (!_.x(c.A, "includes").call(c.A, b) && (_.H = [1, 2, 3],
            _.x(_.H, "includes")).call(_.H, b)) {
                var d = yK[b];
                if (d) {
                    var e = b + "_hostpage_library";
                    if (d = _.ip(document, d))
                        d.id = e
                }
                c.A.push(b);
                e = new zK(b);
                c.hostpageLibraryTokens.push(e);
                c = Lo();
                c.hostpageLibraryTokens || (c.hostpageLibraryTokens = {});
                c.hostpageLibraryTokens[e.g] = e.A
            }
            c = void 0;
            e = this.eb;
            d = this.slotId;
            e.g[b] = null != (c = e.g[b]) ? c : new _.B.Set;
            e.g[b].add(d)
        }
    }
    ;
    var ir = 0;
    var aw = function(a, b, c, d, e, f) {
        W.call(this, a, 721);
        this.B = b;
        this.vf = c;
        this.o = V(this, d);
        this.j = V(this, e);
        this.C = V(this, f)
    };
    _.P(aw, W);
    aw.prototype.g = function() {
        var a = this, b, c, d = null == (b = this.vf) ? void 0 : null == (c = _.u(b, 1)) ? void 0 : c.toUpperCase(), e, f;
        b = null == (e = this.vf) ? void 0 : null == (f = _.u(e, 2)) ? void 0 : f.toUpperCase();
        if (d && b) {
            e = this.o.value;
            f = this.j.value;
            var h = this.C.value
              , k = h.style.height
              , l = h.style.width
              , m = h.style.display
              , n = h.style.position
              , p = kr(e.id + "_top", d)
              , q = kr(e.id + "_bottom", b);
            _.Jp(q, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            h.appendChild(p);
            h.appendChild(q);
            _.Jp(f, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.Jp(e, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            var t;
            _.Jp(h, {
                position: "relative",
                display: (null == (t = this.B.screen.orientation) ? 0 : t.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            Ep(this, 722, this.B, "orientationchange", function() {
                var w;
                (null == (w = a.B.screen.orientation) ? 0 : w.angle) ? _.Jp(h, {
                    display: "none"
                }) : _.Jp(h, {
                    display: "block"
                })
            });
            _.Cp(this, function() {
                _.xB(p);
                _.xB(q);
                h.style.position = n;
                h.style.height = k;
                h.style.width = l;
                h.style.display = m
            })
        }
    }
    ;
    var SQ = _.Yw(["https://td.doubleclick.net/td/kb?kbli=", ""])
      , Hv = function(a, b, c, d, e) {
        W.call(this, a, 1007);
        this.Ug = b;
        this.j = V(this, d);
        c && (this.o = V(this, c));
        e && nL(this, e)
    };
    _.P(Hv, W);
    Hv.prototype.g = function() {
        if (Cg(this.j.value)) {
            var a;
            if (null == (a = this.o) || !a.value) {
                var b = this.Ug;
                if (b.length && null === document.getElementById("koelBirdIGRegisterIframe")) {
                    a = document.createElement("iframe");
                    b = Aa(SQ, encodeURIComponent(b.join()));
                    a.removeAttribute("srcdoc");
                    if (b instanceof _.Tx)
                        throw new qy("TrustedResourceUrl",2);
                    var c = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");
                    a.setAttribute("sandbox", "");
                    for (var d = 0; d < c.length; d++)
                        a.sandbox.supports && !a.sandbox.supports(c[d]) || a.sandbox.add(c[d]);
                    b = _.Da(b);
                    void 0 !== b && (a.src = b);
                    a.id = "koelBirdIGRegisterIframe";
                    document.head.appendChild(a)
                }
            }
        }
    }
    ;
    var rv = function(a, b, c, d) {
        W.call(this, a, 1176);
        this.o = b;
        this.V = c;
        this.P = d;
        this.j = U(this)
    };
    _.P(rv, W);
    rv.prototype.g = function() {
        var a, b = null != (a = this.o) ? a : new sv;
        (a = null != ni(b, 2) ? null != mr(b) && 0 !== (0,
        _.fq)() ? ni(b, 2) * mr(b) : ni(b, 2) : null) && (_.H = [8, 9],
        _.x(_.H, "includes")).call(_.H, Cr(this.V)) ? (N(this.P, HO()),
        this.j.aa()) : this.j.Da(a)
    }
    ;
    var Bv = function(a, b, c, d, e, f) {
        f = void 0 === f ? lr : f;
        W.call(this, a, 666);
        this.o = f;
        this.output = kL(this);
        nL(this, b);
        e && nL(this, e);
        this.j = V(this, c);
        this.C = lL(this, d)
    };
    _.P(Bv, W);
    Bv.prototype.g = function() {
        var a = this.C.value
          , b = this.j.value;
        null == a || 0 > a || !kn(b) ? this.output.notify() : TQ(this, a, b)
    }
    ;
    var TQ = function(a, b, c) {
        var d = a.o(b, El(a.context, 291, function(e, f) {
            e = _.y(e);
            for (var h = e.next(); !h.done; h = e.next())
                if (h = h.value,
                !(0 >= h.intersectionRatio)) {
                    f.unobserve(h.target);
                    a.output.notify();
                    break
                }
        }));
        d ? (d.observe(c),
        _.Cp(a, function() {
            d.disconnect()
        })) : a.output.notify()
    };
    var Av = function(a, b, c, d, e, f, h) {
        W.call(this, a, 664);
        this.slotId = b;
        this.Wd = c;
        this.L = d;
        this.output = kL(this);
        this.o = V(this, e);
        this.j = lL(this, f);
        h && nL(this, h)
    };
    _.P(Av, W);
    Av.prototype.g = function() {
        var a = this, b, c = null != (b = this.j.value) ? b : 0;
        if (0 !== (0,
        _.fq)() || 0 < c)
            if (b = JK(document),
            KK(document) && b && (0 < xN(this.L, this.slotId) || !UQ(this)) && b) {
                var d = Ep(this, 324, document, b, function() {
                    KK(document) || (d && d(),
                    a.output.notify())
                });
                if (d)
                    return
            }
        this.output.notify()
    }
    ;
    var UQ = function(a) {
        try {
            var b = top;
            if (!b)
                return !0;
            var c = Ys(b.document, b).y
              , d = c + a.Wd.height
              , e = a.o.value;
            return e.y >= c && e.y <= d
        } catch (f) {
            return !0
        }
    };
    var zv = function(a, b) {
        W.call(this, a, 676);
        this.output = U(this);
        this.j = V(this, b)
    };
    _.P(zv, W);
    zv.prototype.g = function() {
        var a = Wm(this.j.value);
        this.output.G(a)
    }
    ;
    var nr = function(a, b, c, d, e, f) {
        f = void 0 === f ? _.B.globalThis.IntersectionObserver : f;
        W.call(this, a, 886);
        this.Z = b;
        this.L = c;
        this.o = d;
        this.j = f;
        this.output = kL(this);
        e && nL(this, e)
    };
    _.P(nr, W);
    nr.prototype.g = function() {
        this.Z.some(function(a) {
            return !kn(gn(a))
        }) ? this.output.notify() : eL(this.output, VQ(this, this.o))
    }
    ;
    var VQ = function(a, b) {
        return new _.B.Promise(function(c) {
            if (a.j) {
                for (var d = new a.j(function(k, l) {
                    k.some(function(m) {
                        return 0 < m.intersectionRatio
                    }) && (l.disconnect(),
                    c())
                }
                ,{
                    rootMargin: b + "%"
                }), e = _.y(a.Z), f = e.next(), h = {}; !f.done; h = {
                    Sf: void 0
                },
                f = e.next()) {
                    f = f.value;
                    h.Sf = gn(f);
                    if (!h.Sf)
                        return;
                    d.observe(h.Sf);
                    sN(a.L, f, function(k) {
                        return function() {
                            return void d.unobserve(k.Sf)
                        }
                    }(h))
                }
                _.Cp(a, function() {
                    return void d.disconnect()
                })
            } else
                c()
        }
        )
    };
    var WQ = [{
        name: "Interstitial",
        format: 1,
        Ce: 5
    }, {
        name: "TopAnchor",
        format: 2,
        Ce: 2
    }, {
        name: "BottomAnchor",
        format: 3,
        Ce: 3
    }, {
        name: "LeftSideRail",
        format: 4,
        Ce: 8
    }, {
        name: "RightSideRail",
        format: 5,
        Ce: 9
    }]
      , Uu = function(a, b, c, d, e, f, h) {
        W.call(this, a, 789);
        this.W = b;
        this.googletag = c;
        this.o = d;
        this.j = e;
        this.P = f;
        this.C = h;
        this.output = U(this)
    };
    _.P(Uu, W);
    Uu.prototype.g = function() {
        var a = this;
        WQ.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo","i")).test(a.C)
        }).forEach(function(b) {
            var c = b.name;
            b = b.Ce;
            var d, e;
            null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
            c = new EQ(a.context,a.W,"/22639388115/example/" + c.toLowerCase(),b,!1,a.googletag.pubads(),function(f) {
                return void a.googletag.display(f)
            }
            ,function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }
            ,a.googletag.cmd,a.j.g,a.j,a.o,a.P,!1);
            _.er(a, c);
            c.run()
        })
    }
    ;
    var XQ = function(a, b, c) {
        W.call(this, a, 1163);
        _.I(Mv);
        this.j = V(this, b);
        c && nL(this, c)
    };
    _.P(XQ, W);
    XQ.prototype.g = function() {
        this.j.value.Ck();
        this.j.value.lb()
    }
    ;
    var Ov = function(a, b, c, d, e, f, h, k, l, m, n) {
        W.call(this, a, 682);
        this.L = b;
        this.format = c;
        this.slotId = d;
        this.B = e;
        this.ob = f;
        this.j = U(this);
        this.o = V(this, h);
        this.J = V(this, k);
        this.C = lL(this, l);
        this.H = V(this, m);
        this.O = lL(this, n)
    };
    _.P(Ov, W);
    Ov.prototype.g = function() {
        var a = this, b;
        if (null != (b = this.ob) && _.O(b, 12, !1)) {
            b = this.C.value.Nl;
            var c = _.bu(this.L, this.slotId)
              , d = this.J.value
              , e = this.o.value
              , f = this.O.value;
            _.Jp(e, {
                "max-height": "30vh",
                overflow: "hidden"
            });
            if (YQ)
                YQ.Ak(e, this.H.value);
            else {
                var h, k;
                YQ = new b(this.context,this.format,e,this.B,d,this.L,this.slotId,f,null != (k = null == (h = this.ob) ? void 0 : _.ym(h, BA, 16)) ? k : null);
                h = {};
                k = _.y(gk(this.ob, AA, 13));
                for (b = k.next(); !b.done; b = k.next())
                    b = b.value,
                    h[ik(b, 1)] = ik(b, 2);
                YQ.Bk(h);
                _.I(Mv) ? (YQ.xk(),
                this.j.G(YQ)) : YQ.lb();
                rN(this.L, this.slotId, function() {
                    YQ && (YQ.ya(),
                    YQ = null);
                    c && _.vN(a.L, a.slotId)
                })
            }
            _.Cp(this, function() {
                return _.xB(e)
            })
        }
    }
    ;
    var YQ = null;
    var Nv = function(a, b, c, d, e, f, h, k, l, m, n) {
        W.call(this, a, 1155);
        this.L = b;
        this.format = c;
        this.slotId = d;
        this.B = e;
        this.ob = f;
        this.j = h;
        this.C = k;
        this.o = l;
        this.J = m;
        this.H = n
    };
    _.P(Nv, W);
    Nv.prototype.g = function() {
        var a;
        if (null != (a = this.ob) && Wn(a, 12)) {
            a = new tk;
            _.er(this, a);
            var b, c = (null == (b = this.ob) ? 0 : _.O(b, 15)) ? J(a, new pr(this.context,this.slotId,qr,function(d) {
                d = d.detail.data;
                try {
                    var e = JSON.parse(d);
                    return "floating" === e.type && "loaded" === e.message
                } catch (f) {}
                return !1
            }
            )).output : void 0;
            b = new Ov(this.context,this.L,this.format,this.slotId,this.B,this.ob,this.j,this.C,this.o,this.J,this.H);
            J(a, b);
            b = new XQ(this.context,b.j,c);
            J(a, b);
            a.run()
        }
    }
    ;
    var wr = function(a, b, c) {
        W.call(this, a, 1150);
        this.B = b;
        this.output = kL(this);
        nL(this, c)
    };
    _.P(wr, W);
    wr.prototype.g = function() {
        var a = this;
        this.B.location.hash = "goog_game_inter";
        _.Cp(this, function() {
            "goog_game_inter" === a.B.location.hash && (a.B.location.hash = "")
        });
        eL(this.output, new _.B.Promise(function(b) {
            return void Ep(a, a.id, a.B, "hashchange", function(c) {
                Ex(c.oldURL, "#goog_game_inter") && b()
            })
        }
        ))
    }
    ;
    var ZQ = function(a, b) {
        this.serviceName = b;
        this.slot = a.g
    }
      , $Q = function(a, b) {
        ZQ.call(this, a, b);
        this.isEmpty = !1;
        this.slotContentChanged = !0;
        this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
        this.isBackfill = !1;
        this.vast = this.companyIds = this.yieldGroupIds = null
    };
    _.P($Q, ZQ);
    var aR = function() {
        ZQ.apply(this, arguments)
    };
    _.P(aR, ZQ);
    var bR = function(a, b, c) {
        ZQ.call(this, a, b);
        this.inViewPercentage = c
    };
    _.P(bR, ZQ);
    var cR = function() {
        ZQ.apply(this, arguments)
    };
    _.P(cR, ZQ);
    var dR = function() {
        ZQ.apply(this, arguments)
    };
    _.P(dR, ZQ);
    var eR = function() {
        ZQ.apply(this, arguments)
    };
    _.P(eR, ZQ);
    var fR = function() {
        ZQ.apply(this, arguments)
    };
    _.P(fR, ZQ);
    var gR = function(a, b, c, d) {
        ZQ.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.P(gR, ZQ);
    var hR = function(a, b, c) {
        ZQ.call(this, a, b);
        this.payload = c
    };
    _.P(hR, ZQ);
    var iR = function() {
        ZQ.apply(this, arguments)
    };
    _.P(iR, ZQ);
    var jR = function(a, b, c) {
        ZQ.call(this, a, b);
        this.makeGameManualInterstitialVisible = c
    };
    _.P(jR, ZQ);
    var kR = function() {
        ZQ.apply(this, arguments)
    };
    _.P(kR, ZQ);
    var xr = function(a, b, c, d, e, f) {
        W.call(this, a, 1151);
        this.slotId = b;
        this.Aa = c;
        nL(this, d);
        a = [e];
        f && a.push(f);
        f = new fL(a,!0);
        hL(this.Sa, f)
    };
    _.P(xr, W);
    xr.prototype.g = function() {
        $t(this.Aa, "gameManualInterstitialSlotClosed", 1148, new kR(this.slotId,"publisher_ads"))
    }
    ;
    var ur = function(a, b, c, d) {
        W.call(this, a, 1149);
        this.slotId = b;
        this.Aa = c;
        this.output = kL(this);
        nL(this, d)
    };
    _.P(ur, W);
    ur.prototype.g = function() {
        var a = new _.th
          , b = a.promise;
        $t(this.Aa, "gameManualInterstitialSlotReady", 1147, new jR(this.slotId,"publisher_ads",a.resolve));
        eL(this.output, b.then(function() {
            return YB(10)
        }))
    }
    ;
    var tr = function(a, b, c) {
        c = void 0 === c ? lR : c;
        W.call(this, a, 1158);
        this.j = c;
        this.o = 1E3 * _.$g(sr);
        this.output = kL(this);
        nL(this, b)
    };
    _.P(tr, W);
    tr.prototype.g = function() {
        var a = this;
        this.j.Jf++ ? eL(this.output, YB(this.o * (this.j.Jf - 2) + (this.o - (Date.now() - this.j.Vg))).then(function() {
            a.j.Vg = Date.now();
            a.j.Jf--
        })) : (this.j.Vg = Date.now(),
        YB(this.o).then(function() {
            return void a.j.Jf--
        }),
        this.output.notify())
    }
    ;
    var lR = {
        Jf: 0,
        Vg: Date.now()
    };
    var mR = {
        width: "100%",
        height: "100%",
        left: "0",
        top: "0"
    }
      , nR = {
        width: "100%",
        height: "100%",
        transform: "translate(-50%, -50%)",
        left: "50%",
        top: "50%"
    }
      , vr = function(a, b, c, d, e) {
        W.call(this, a, 1150);
        this.B = b;
        this.j = V(this, c);
        this.C = V(this, d);
        nL(this, e);
        this.o = new _.zL(this.B)
    };
    _.P(vr, W);
    vr.prototype.g = function() {
        var a = 0 === (0,
        _.fq)() ? "rgba(1,1,1,0.5)" : "white";
        _.Jp(this.j.value, _.x(Object, "assign").call(Object, {
            position: "absolute"
        }, 0 === (0,
        _.fq)() ? nR : mR));
        _.Jp(this.C.value, _.x(Object, "assign").call(Object, {
            "background-color": a,
            opacity: "1",
            position: "fixed",
            margin: "0",
            padding: "0",
            "z-index": "2147483647",
            display: "block"
        }, mR));
        _.Cp(this, _.ML(this.B.document, this.B));
        a = {};
        AB(this.j.value).postMessage(JSON.stringify((a.googMsgType = "sth",
        a.msg_type = "i-view",
        a)), "*");
        if (this.B === this.B.top) {
            var b = _.BL(this.o, 2147483646);
            _.FL(b);
            _.Cp(this, function() {
                return void _.GL(b)
            })
        }
    }
    ;
    var oR = function(a, b, c, d, e, f, h, k) {
        W.call(this, a, 683);
        this.slotId = b;
        this.O = c;
        this.j = d;
        this.o = U(this);
        this.C = V(this, e);
        this.U = V(this, f);
        this.H = lL(this, h);
        this.J = lL(this, k);
        this.context.T.log(578856259, _.vj, {
            pvsid: this.context.pvsid,
            za: this.context.za,
            jb: 17,
            Ub: this.context.Na,
            R: 7
        })
    };
    _.P(oR, W);
    oR.prototype.g = function() {
        var a = this;
        this.context.T.log(578856259, _.vj, {
            pvsid: this.context.pvsid,
            za: this.context.za,
            jb: 17,
            Ub: this.context.Na,
            R: 8
        });
        var b = this.U.value
          , c = this.C.value
          , d = this.J.value.hm
          , e = new _.cN(this.context)
          , f = null != Am(this.j, 14) ? 60 * Zt(this.j, 14) : 604800;
        b = new d(this.context,window,c,b,e,this.O,pR(this),new _.B.Set(Wd(this.j, 15, _.zc, 2)),BQ(this.slotId),function() {
            return void a.ya()
        }
        ,function() {
            zr(a.context, {
                nb: 1,
                payload: function() {
                    var h = new Aq
                      , k = _.Bq(h, GE, 5, Dq)
                      , l = _.yf();
                    _.ci(k, 1, l);
                    return h
                }
            });
            a.ya()
        }
        ,f,this.H.value);
        b.U();
        _.er(this, b);
        this.o.G(b);
        this.context.T.log(578856259, _.vj, {
            pvsid: this.context.pvsid,
            za: this.context.za,
            jb: 17,
            Ub: this.context.Na,
            R: 9
        })
    }
    ;
    var pR = function(a) {
        var b = {};
        a = gk(a.j, AA, 13);
        a = _.y(a);
        for (var c = a.next(); !c.done; c = a.next())
            c = c.value,
            b[ik(c, 1)] = ik(c, 2);
        return b
    };
    var qR = function(a, b, c, d) {
        W.call(this, a, 1210);
        this.action = b;
        this.j = lL(this, c);
        nL(this, d)
    };
    _.P(qR, W);
    qR.prototype.g = function() {
        var a;
        null != (a = this.j.value) && a.Ab() && this.action()
    }
    ;
    var rR = function(a, b, c) {
        W.call(this, a, 1121);
        this.W = b;
        this.output = kL(this);
        this.C = !1;
        this.H = V(this, c)
    };
    _.P(rR, W);
    rR.prototype.g = function() {
        var a = this;
        if (this.o = Ar(El(this.context, this.id, function(b) {
            b = _.y(b);
            for (var c = b.next(); !c.done; c = b.next())
                c = 100 * c.value.intersectionRatio,
                _.x(Number, "isFinite").call(Number, c) && 50 <= c ? a.j || (a.C = !0,
                KK(a.W) || sR(a)) : (a.C = !1,
                tR(a))
        })))
            _.Cp(this, function() {
                var b;
                null == (b = a.o) || b.disconnect();
                tR(a)
            }),
            this.o.observe(this.H.value),
            this.J = Ep(this, this.id, this.W, "visibilitychange", function() {
                KK(a.W) ? tR(a) : a.C && !a.j && sR(a)
            })
    }
    ;
    var sR = function(a) {
        a.j = setTimeout(function() {
            a.j = void 0;
            if (!KK(a.W)) {
                a.output.notify();
                var b;
                null == (b = a.o) || b.disconnect();
                var c;
                null == (c = a.J) || c.call(a)
            }
        }, 1E3)
    }
      , tR = function(a) {
        clearTimeout(a.j);
        a.j = void 0
    };
    var Pv = function(a, b, c, d, e, f, h, k, l, m, n) {
        n = void 0 === n ? function() {
            return _.yf()
        }
        : n;
        W.call(this, a, 1141);
        this.slotId = b;
        this.J = c;
        this.o = d;
        this.W = e;
        this.j = f;
        this.O = h;
        this.Ib = k;
        this.H = l;
        this.C = m;
        this.Cc = n;
        this.output = U(this)
    };
    _.P(Pv, W);
    Pv.prototype.g = function() {
        var a = this;
        if (this.o) {
            var b = new tk;
            _.er(this, b);
            var c = new oq;
            c.aa();
            c = J(b, new oR(this.context,this.slotId,this.J,this.o,this.j,this.O,_.I(Fq) ? c : this.Ib,this.H));
            _.Cp(c, function() {
                return void a.ya()
            });
            this.output.Oa(c.o.promise.then(function() {
                return !0
            }));
            if (_.I(YF) || _.$g($F)) {
                var d = J(b, new rR(this.context,this.W,this.j));
                _.$g($F) && J(b, new qR(this.context,function() {
                    zr(a.context, {
                        nb: _.$g($F),
                        payload: function() {
                            var e = new FE
                              , f = a.Cc();
                            null !== f && _.ci(e, 1, f);
                            return HE(e)
                        }
                    })
                }
                ,c.o,d.output));
                _.I(YF) && J(b, new qR(this.context,function() {
                    zr(a.context, {
                        nb: 1,
                        payload: function() {
                            var e = new FE
                              , f = a.Cc();
                            null !== f && _.ci(e, 1, f);
                            _.Fh(e, 2, !0);
                            return HE(e)
                        }
                    });
                    a.C()
                }
                ,c.o,d.output))
            }
            b.run()
        } else
            this.output.G(!1)
    }
    ;
    var uR = function(a) {
        this.module = a
    };
    uR.prototype.toString = function() {
        return String(this.module)
    }
    ;
    _.vR = new uR(2);
    _.wR = new uR(5);
    _.xR = new uR(6);
    var Gv = function(a, b, c, d, e, f) {
        W.call(this, a, 846);
        this.o = b;
        this.format = c;
        this.ob = d;
        this.j = e;
        this.output = U(this);
        f && nL(this, f)
    };
    _.P(Gv, W);
    Gv.prototype.g = function() {
        var a, b = (2 === this.format || 3 === this.format) && !(null == (a = this.ob) || !_.O(a, 12, !1));
        a = 5 === this.format && this.j;
        b || a ? this.output.Oa(this.o.load(_.vR)) : this.output.aa()
    }
    ;
    var yR = function(a, b, c, d, e) {
        W.call(this, a, 905);
        this.M = b;
        this.j = c;
        this.output = kL(this);
        this.o = V(this, d);
        nL(this, e)
    };
    _.P(yR, W);
    yR.prototype.g = function() {
        for (var a = _.y(this.o.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            b = null == (c = this.M.V[b.value.getDomId()]) ? void 0 : Cr(c);
            if (2 === b || 3 === b || 5 === b) {
                this.j.load(_.vR);
                return
            }
        }
        this.output.notify()
    }
    ;
    var zR = function(a, b, c, d, e, f) {
        W.call(this, a, 696);
        this.slotId = b;
        this.Aa = c;
        nL(this, d);
        oL(this, [e, f])
    };
    _.P(zR, W);
    zR.prototype.g = function() {
        $t(this.Aa, "rewardedSlotClosed", 703, new iR(this.slotId,"publisher_ads"))
    }
    ;
    var AR = function(a, b, c, d, e) {
        W.call(this, a, 694);
        this.slotId = b;
        this.Aa = c;
        nL(this, d);
        this.j = lL(this, e)
    };
    _.P(AR, W);
    AR.prototype.g = function() {
        var a, b = null == (a = this.j.value) ? void 0 : a.payload;
        $t(this.Aa, "rewardedSlotGranted", 702, new hR(this.slotId,"publisher_ads",null != b ? b : null))
    }
    ;
    var BR = {
        width: "100%",
        height: "100%",
        left: "0",
        top: "0"
    }
      , CR = function(a, b, c, d, e, f) {
        W.call(this, a, 693);
        this.B = b;
        this.output = kL(this);
        this.o = V(this, c);
        this.C = V(this, d);
        this.H = V(this, f);
        nL(this, e);
        this.j = new _.zL(this.B)
    };
    _.P(CR, W);
    CR.prototype.g = function() {
        var a = this;
        if (!this.H.value) {
            var b = 0 === (0,
            _.fq)() ? "rgba(1,1,1,0.5)" : "white";
            _.Jp(this.C.value, _.x(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, BR));
            _.Cp(this, _.ML(this.B.document, this.B));
            AB(this.o.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.B === this.B.top) {
                this.B.location.hash = "goog_rewarded";
                var c = _.BL(this.j, 2147483646);
                _.FL(c);
                _.Cp(this, function() {
                    _.GL(c);
                    "goog_rewarded" === a.B.location.hash && (a.B.location.hash = "")
                })
            }
            this.output.notify()
        }
    }
    ;
    var DR = function(a, b, c, d) {
        W.call(this, a, 695);
        this.B = b;
        this.j = V(this, c);
        nL(this, d)
    };
    _.P(DR, W);
    DR.prototype.g = function() {
        if (this.B === this.B.top)
            var a = AB(this.j.value)
              , b = Ep(this, 503, this.B, "hashchange", function(c) {
                Ex(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"),
                b())
            })
    }
    ;
    var ER = function(a, b, c, d) {
        W.call(this, a, 692);
        this.slotId = b;
        this.Aa = c;
        this.output = kL(this);
        this.j = U(this);
        this.o = lL(this, d)
    };
    _.P(ER, W);
    ER.prototype.g = function() {
        var a = this.o.value;
        if (a) {
            var b = new _.th, c = b.promise, d;
            $t(this.Aa, "rewardedSlotReady", 701, new gR(this.slotId,"publisher_ads",M(this.context, 1235, b.resolve),null != (d = a.payload) ? d : null));
            this.j.G(_.xf());
            eL(this.output, c)
        }
    }
    ;
    var FR = ti(1237, function(a, b) {
        Fr(b.context, b.adUnitPath, a.dn);
        return {}
    }, {});
    var GR = {
        width: "100%",
        height: "100%",
        left: "0",
        top: "0"
    }
      , HR = {
        width: "60%",
        height: "60%",
        transform: "translate(-50%, -50%)",
        left: "50%",
        top: "50%"
    }
      , IR = ti(691, function(a) {
        if ("ha_before_make_visible" === a.message.message)
            return {
                zh: null,
                Lg: !0
            };
        var b = _.I(eG) ? GR : HR;
        b = _.x(Object, "assign").call(Object, {}, {
            position: "absolute"
        }, 0 === (0,
        _.fq)() ? b : GR);
        _.Jp(a.rb, b);
        return {
            zh: a.message,
            Lg: !1
        }
    }, {
        zh: void 0,
        Lg: void 0
    });
    var Qv = function(a, b, c, d, e, f) {
        tk.call(this);
        var h = Hr(b, "granted", a);
        J(this, h);
        var k = Hr(b, "prefetched", a);
        J(this, k);
        var l = Hr(b, "closed", a);
        J(this, l);
        var m = Hr(b, "ha_before_make_visible", a);
        J(this, m);
        var n = this.g(IR, {
            rb: e,
            message: new fL([k.output, m.output])
        }, {});
        k = n.Lg;
        n = new ER(a,b,c,n.zh);
        J(this, n);
        f = new CR(a,d,e,f,n.output,k);
        J(this, f);
        J(this, new DR(a,d,e,f.output));
        J(this, new AR(a,b,c,n.output,h.output));
        J(this, new zR(a,b,c,n.output,l.output,m.output));
        _.$g(hG) && rL(this.g(FR, {
            dn: n.j
        }, {
            context: a,
            adUnitPath: b.getAdUnitPath()
        }), n.output)
    };
    _.P(Qv, tk);
    var JR = [2, 3, 8, 9, 5]
      , fv = ti(1242, function(a, b) {
        a = b.context;
        b = b.B;
        for (var c = _.y(JR), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = Rq(d, b, !0, !1);
            null !== e && Jr(a, e, d)
        }
        return {}
    }, {});
    /* 
 
Math.uuid.js (v1.4) 
http://www.broofa.com 
mailto:robert@broofa.com 
Copyright (c) 2010 Robert Kieffer 
Dual licensed under the MIT and GPL licenses. 
*/
    var KR = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
      , Kr = function() {
        for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++)
            8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0),
            c = b & 15,
            b >>= 4,
            a[d] = KR[19 == d ? c & 3 | 8 : c]);
        return a.join("")
    };
    var LR = ng({
        gsppack: Lu,
        fpt: sg,
        eids: tg()
    })
      , MR = ng({
        paw_id: sg,
        signal: sg,
        error: pg(sg),
        eids: pg(tg()),
        sdk_ttl_ms: pg(SJ)
    })
      , NR = function(a, b, c, d, e) {
        b = void 0 === b ? new _.B.Set : b;
        c = void 0 === c ? null : c;
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        _.T.call(this);
        this.B = a;
        this.ports = b;
        this.l = c;
        this.g = d;
        this.j = e
    };
    _.P(NR, _.T);
    NR.prototype.A = function() {
        _.T.prototype.A.call(this);
        OR(this);
        for (var a = _.y(this.ports), b = a.next(); !b.done; b = a.next())
            b = b.value,
            this.ports.delete(b),
            b.onmessage = null
    }
    ;
    var PR = function(a, b, c) {
        b.onmessage = c;
        a.ports.add(b)
    }
      , OR = function(a) {
        null !== a.l && (_.Cf(a.B, "message", a.l),
        a.l = null)
    }
      , QR = function(a, b) {
        for (var c = _.y(a.ports), d = c.next(); !d.done; d = c.next())
            d = d.value,
            d !== b && (a.ports.delete(d),
            d.onmessage = null);
        OR(a);
        a.g = b
    }
      , RR = function(a, b) {
        PR(a, b, function(c) {
            a: {
                try {
                    var d = JSON.parse(c.data);
                    if (MR(d)) {
                        var e = d;
                        break a
                    }
                } catch (l) {}
                e = void 0
            }
            if (e) {
                null === a.g && QR(a, b);
                var f;
                null == (f = a.j) || f.resolve(e);
                a.j = null
            } else {
                a: {
                    try {
                        var h = JSON.parse(c.data);
                        if (LR(h) && h.gsppack) {
                            var k = h;
                            break a
                        }
                    } catch (l) {}
                    k = void 0
                }
                k && null === a.g && QR(a, b)
            }
        });
        Lr(b)
    }
      , SR = function(a) {
        if (a.j)
            return a.j.promise;
        if (null !== a.l)
            throw Error("a poll message listener is already registered");
        a.j = new _.th;
        null === a.g ? (a.l = function(b) {
            b = null == b.data || "" === b.data ? b.ports[0] : void 0;
            b && RR(a, b)
        }
        ,
        _.ef(a.B, "message", a.l)) : Lr(a.g);
        return a.j.promise
    };
    var Mr = function(a, b, c, d, e) {
        c = void 0 === c ? yh : c;
        d = void 0 === d ? xh : d;
        e = void 0 === e ? new NR(b) : e;
        W.call(this, a, 1063);
        this.B = b;
        this.J = c;
        this.H = d;
        this.o = e;
        this.C = U(this);
        this.Ec = U(this);
        this.j = !1;
        _.er(this, e)
    };
    _.P(Mr, W);
    Mr.prototype.g = function() {
        var a = this;
        if (_.I(RF)) {
            this.j = zh(this.B);
            var b = !this.j && _.I(OF) ? SR(this.o) : void 0
              , c = null
              , d = 0
              , e = 0
              , f = function() {
                if (!_.I(OF) || null === a.o.g) {
                    if (_.I(SF)) {
                        var l, m;
                        return null != (m = null == (l = a.J(a.B)) ? void 0 : l.then(function(n) {
                            var p;
                            e = null != (p = n.sdk_ttl_ms) ? p : 0;
                            return n.signal
                        })) ? m : null
                    }
                    return a.H(a.B)
                }
                return b ? b.then(function(n) {
                    b = void 0;
                    return n.signal
                }) : SR(a.o).then(function(n) {
                    return n.signal
                })
            }
              , h = El(this.context, this.id, function() {
                var l, m, n, p, q, t;
                return _.gf(function(w) {
                    switch (w.g) {
                    case 1:
                        return l = "0",
                        w.l = 2,
                        w.yield(f(), 4);
                    case 4:
                        m = w.A;
                        l = null != (n = m) ? n : "0";
                        1E4 < l.length && (Il(a.context, a.id, new pK("ML:" + l.length)),
                        l = "0");
                        w.g = 3;
                        w.l = 0;
                        break;
                    case 2:
                        p = jf(w),
                        Il(a.context, a.id, p);
                    case 3:
                        _.I(PF) ? (t = Math.max(3E5 - e, 5E3),
                        q = _.xf(a.B) + t) : q = _.xf(a.B) + 3E5,
                        c = l,
                        d = q,
                        w.g = 0
                    }
                })
            });
            if (!_.I(OF) || this.j)
                var k = (_.H = h(),
                _.x(_.H, "finally")).call(_.H, function() {
                    k = void 0
                });
            this.C.G(function() {
                var l, m, n;
                return _.gf(function(p) {
                    if (1 == p.g) {
                        l = _.I(OF) && null !== a.o.g;
                        if (!a.j && !l)
                            return p.return("");
                        m = _.xf(a.B) >= d;
                        n = null === c || "0" === c;
                        if (!m && !n) {
                            p.g = 2;
                            return
                        }
                        k || (k = (_.H = h(),
                        _.x(_.H, "finally")).call(_.H, function() {
                            k = void 0
                        }));
                        return p.yield(k, 2)
                    }
                    return p.return(c)
                })
            });
            this.j ? this.Ec.G("WEBVIEW_SDK_PAW") : this.Ec.G("WEBVIEW_SDK_PACT")
        } else
            this.C.G(function() {
                return _.B.Promise.resolve("")
            }),
            this.Ec.G("WEBVIEW_SDK_UNKNOWN")
    }
    ;
    Mr.prototype.l = function() {
        this.C.G(function() {
            return _.B.Promise.resolve("")
        });
        this.j ? this.Ec.G("WEBVIEW_SDK_PAW") : this.Ec.G("WEBVIEW_SDK_PACT")
    }
    ;
    var TR = function(a, b) {
        W.call(this, a, 1091);
        this.output = U(this);
        b && (this.j = lL(this, b))
    };
    _.P(TR, W);
    TR.prototype.g = function() {
        var a;
        null != (a = this.j) && a.value ? this.output.Oa(this.j.value()) : this.output.G("")
    }
    ;
    TR.prototype.l = function() {
        this.output.G("")
    }
    ;
    var Yr = new _.B.Map([["IAB_AUDIENCE_1_1", 3], ["IAB_CONTENT_2_2", 5], ["IAB_CONTENT_3_0", 6]]);
    var es = new _.B.Set(["disablePersonalization"]);
    var is = function(a, b, c) {
        W.call(this, a, 1122);
        this.W = b;
        this.j = c;
        kL(this, c)
    };
    _.P(is, W);
    is.prototype.g = function() {
        var a = this
          , b = Cl(this.context);
        eL(this.j, new _.B.Promise(function(c) {
            return void MK(function() {
                c();
                b()
            }, a.W)
        }
        ))
    }
    ;
    var ks = function(a, b, c) {
        W.call(this, a, 1107);
        this.B = b;
        this.j = c;
        U(this, c)
    };
    _.P(ks, W);
    ks.prototype.g = function() {
        var a = Tg(this.B.isSecureContext, this.B.navigator, this.B.document)
          , b = Ug(this.B.isSecureContext, this.B.document)
          , c = Vg(this.B.isSecureContext, this.B, this.B.document)
          , d = !(!this.B.isSecureContext || !Rg("attribution-reporting", this.B.document))
          , e = 0;
        a && (e |= 1);
        b && (e |= 4);
        c && (e |= 8);
        d && (e |= 2);
        this.j.Da(0 === e ? null : e)
    }
    ;
    ks.prototype.l = function() {
        this.j.aa()
    }
    ;
    var UR = function(a, b, c, d, e, f, h, k) {
        W.call(this, a, 1118, _.$g(iI));
        this.C = b;
        this.J = e;
        this.M = f;
        U(this, e);
        c && (this.O = lL(this, c));
        d && (this.H = lL(this, d));
        h && (this.o = V(this, h));
        k && (this.j = mL(this, k))
    };
    _.P(UR, W);
    UR.prototype.g = function() {
        var a = new UK;
        a = _.ee(a, 1, _.Dc(this.C), 0);
        if (this.j)
            if (this.j.value) {
                var b = _.aj(a, 3, this.j.value.label);
                _.K(b, 4, this.j.value.status)
            } else
                this.j.Od() || _.K(a, 4, 5);
        if (this.C & 1) {
            var c, d;
            b = VR(this, null == (c = this.O) ? void 0 : c.value, null == (d = this.H) ? void 0 : d.value);
            _.Ph(a, 2, b)
        }
        this.J.G(a)
    }
    ;
    var VR = function(a, b, c) {
        switch (_.$g(pt)) {
        case 1:
            var d = 1;
            break;
        case 2:
            d = 2;
            break;
        case 3:
            d = 3;
            break;
        default:
            d = 0
        }
        var e = new TK;
        _.I(TI) || _.K(e, 1, d);
        null == b || b.forEach(function(k, l) {
            if (!_.I(OI) || k.length) {
                var m = SK(new RK, k), n;
                null == (n = null == c ? void 0 : c.get(l)) || n.forEach(function(p, q) {
                    var t = new OK;
                    p = _.ee(t, 2, _.Dc(p), 0);
                    q = _.ee(p, 1, _.Dc(_.Xg(q)), 0);
                    pk(m, 2, OK, q)
                });
                be(e, 2, RK).set(l, m)
            }
        });
        var f;
        if ((null == (f = a.o) ? 0 : f.value) && a.M.V) {
            var h;
            b = _.y(null == (h = a.o) ? void 0 : h.value);
            for (h = b.next(); !h.done; h = b.next())
                h = h.value,
                (d = WR(a, h)) && be(e, 3, PK).set(h.getAdUnitPath(), d)
        }
        return e
    }
      , WR = function(a, b) {
        var c, d;
        a = null != (d = null == (c = a.M.qd) ? void 0 : c[b.getDomId()]) ? d : [];
        if (0 !== a.length)
            return QK(new PK, a.map(function(e) {
                return e.seller
            }))
    };
    var ps = function(a, b, c, d, e, f, h, k) {
        W.call(this, a, 1165);
        this.J = c;
        this.H = d;
        this.Of = e;
        this.M = f;
        this.C = h;
        this.o = k;
        this.j = lL(this, b.Ej)
    };
    _.P(ps, W);
    ps.prototype.g = function() {
        if (this.j.value) {
            var a = new tk
              , b = new UR(this.context,this.j.value,this.J,this.H,this.Of.Ah,this.M,this.C,this.o);
            J(a, b);
            a.run()
        } else
            this.Of.Ah.aa()
    }
    ;
    var av = function(a, b, c) {
        W.call(this, a, 1206);
        this.o = b;
        this.j = U(this);
        this.ba = V(this, c)
    };
    _.P(av, W);
    av.prototype.g = function() {
        var a = this;
        this.o.cookieDeprecationLabel ? Cg(this.ba.value) ? this.j.Oa(this.o.cookieDeprecationLabel.getValue().then(function(b) {
            return {
                status: 1,
                label: b
            }
        }).catch(function(b) {
            a.F(b);
            return {
                status: 2
            }
        })) : this.j.G({
            status: 4
        }) : this.j.G({
            status: 3
        })
    }
    ;
    var YR = ti(1213, function(a) {
        var b, c;
        return {
            Yj: !(null == (c = null == (b = a.il) ? void 0 : b.label) || !c.match(ah(hI)))
        }
    }, {
        Yj: void 0
    }, _.$g(iI));
    var ZR = function(a, b) {
        W.call(this, a, 1212, _.$g(iI));
        this.j = U(this);
        this.o = U(this);
        b && (this.C = mL(this, b))
    };
    _.P(ZR, W);
    ZR.prototype.g = function() {
        var a, b, c = null == (a = this.C) ? void 0 : null == (b = a.value) ? void 0 : b.label;
        c ? (this.o.G(!0),
        c.match(ah(hI)) ? this.j.G(!0) : this.j.G(!1)) : (this.j.G(!1),
        this.o.G(!1))
    }
    ;
    var $R = function(a, b, c) {
        W.call(this, a, 873);
        this.B = b;
        this.j = V(this, c)
    };
    _.P($R, W);
    $R.prototype.g = function() {
        var a = this.context
          , b = this.j.value
          , c = this.B;
        !Lo()._pubconsole_disable_ && (b = Fg("google_pubconsole", b, c)) && (b = b.split("|"),
        "1" !== b[0] && "0" !== b[0] || ap(a, c))
    }
    ;
    var aS = function() {
        this.resources = {}
    };
    var ss = "3rd party ad content";
    var bS = function(a, b, c) {
        _.T.call(this);
        this.context = a;
        this.Ua = b;
        this.g = c;
        a = c.slotId;
        b = c.size;
        this.l = "height" === c.pb ? "fluid" : [b.width, b.height];
        this.pe = nn(a);
        this.qe = ss
    };
    _.P(bS, _.T);
    bS.prototype.render = function() {
        var a = this.Ua
          , b = this.g
          , c = b.slotId
          , d = b.M.V
          , e = b.size
          , f = b.Qa
          , h = b.isBackfill
          , k = b.lc;
        Gi(b.Tf, _.uB(b.W), null != f ? f : "", !1);
        Yt(_.Ng(Gl), "5", Zt(d[c.getDomId()], 20));
        $t(c, au, 801, {
            xi: 0 === a.kind ? a.qb : "",
            isBackfill: h
        });
        a = this.F();
        k && a && a.setAttribute("data-google-container-id", k);
        $t(c, cu, 825, {
            size: e,
            isEmpty: !1
        });
        return a
    }
    ;
    bS.prototype.loaded = function(a) {
        var b = this.g
          , c = b.slotId
          , d = b.Aa;
        b = b.M.V;
        $t(c, Wv, 844);
        a && a.setAttribute("data-load-complete", !0);
        $t(d, "slotOnload", 710, new cR(c,"publisher_ads"));
        Yt(_.Ng(Gl), "6", Zt(b[c.getDomId()], 20))
    }
    ;
    var cS = function(a) {
        a = a.Ua;
        if (a = 0 === a.kind ? a.qb : "") {
            var b = a.toLowerCase();
            a = -1 < b.indexOf("<!doctype") || -1 < b.indexOf("<html") ? a : "<!doctype html><html><head></head><body>" + a + "</body></html>"
        }
        return a
    };
    bS.prototype.A = function() {
        _.T.prototype.A.call(this);
        this.g.Tf.removeAttribute("data-google-query-id")
    }
    ;
    bS.prototype.I = function(a) {
        var b = this
          , c = dS(this, function() {
            return void b.loaded(c.g)
        }, a);
        _.Cp(this, function() {
            100 != c.status && (c.Rg() && (nM(c.l),
            c.H = 0),
            window.clearTimeout(c.Ma),
            c.Ma = -1,
            c.o = 3,
            c.A && (c.A.ya(),
            c.A = null),
            _.Cf(window, "resize", c.J),
            _.Cf(window, "scroll", c.J),
            c.F && c.g && c.F == _.yB(c.g) && c.F.removeChild(c.g),
            c.g = null,
            c.F = null,
            c.status = 100)
        });
        return c
    }
    ;
    var dS = function(a, b, c) {
        var d = a.g
          , e = d.Qj
          , f = d.isBackfill
          , h = d.lc
          , k = d.mf
          , l = d.dg
          , m = d.eb;
        return new vM({
            wh: d.rd,
            pe: a.pe,
            qe: a.qe,
            content: cS(a),
            size: Array.isArray(a.l) ? new _.Zm(Number(a.l[0]),Number(a.l[1])) : 1,
            xj: b,
            Rj: null != e ? e : void 0,
            permissions: {
                jf: Wn(c, 1) ? !!_.O(c, 1) : !f,
                kf: Wn(c, 2) ? !!_.O(c, 2) : !1
            },
            re: !!Lo().fifWin,
            ln: iP ? iP : iP = En(),
            Xk: In(),
            hostpageLibraryTokens: m.hostpageLibraryTokens,
            Db: function(n, p) {
                return void Il(a.context, n, p)
            },
            uniqueId: h,
            Pj: gP(),
            mf: null != k ? k : void 0,
            rb: void 0,
            dg: null != l ? l : void 0
        })
    };
    var eS = function() {
        bS.apply(this, arguments)
    };
    _.P(eS, bS);
    eS.prototype.F = function() {
        var a = this.g
          , b = a.M
          , c = b.X;
        a = b.V[a.slotId.getDomId()];
        b = new Jn;
        c = Xn([b, c.Sc(), null == a ? void 0 : a.Sc()]);
        return bS.prototype.I.call(this, c).g
    }
    ;
    eS.prototype.j = function() {
        return !1
    }
    ;
    var uv = function(a, b, c, d, e, f) {
        W.call(this, a, 669);
        this.X = b;
        this.V = c;
        this.j = d;
        this.yb = e;
        this.output = U(this);
        f && (this.o = V(this, f))
    };
    _.P(uv, W);
    uv.prototype.g = function() {
        var a;
        if (null == (a = this.o) ? 0 : a.value)
            this.output.G(!0);
        else {
            var b;
            a = !(null == (b = this.j) || !_.u(b, 1)) && (_.O(this.V, 12) || iz(this.X, 13)) || this.yb;
            this.output.G(!!a)
        }
    }
    ;
    var fS = ti(833, function(a, b) {
        a = b.dd;
        b = b.B;
        var c = gP();
        c = {
            version: iP ? iP : iP = En(),
            Wf: c
        };
        c = CM.sm(c);
        var d = iM(b);
        c = d ? _.bf(c, new _.B.Map([["n", String(d)]])) : c;
        d = bh(Gn);
        for (var e = new _.B.Map, f = 0; f < d.length; f += 2)
            e.set(d[f], d[f + 1]);
        c = _.bf(c, e);
        var h;
        a.resources[c.toString()] || (null == (h = Lo()) ? 0 : h.fifWin) || (a.resources[c.toString()] = 1,
        a = b.document,
        h = _.Bf("IFRAME"),
        h.src = _.jb(c).toString(),
        h.style.visibility = "hidden",
        h.style.display = "none",
        a = a.getElementsByTagName("script"),
        a.length && (a = a[a.length - 1],
        a.parentNode && a.parentNode.insertBefore(h, a.nextSibling)));
        return {}
    }, {});
    var gS = function(a, b, c) {
        W.call(this, a, 1135);
        this.o = b;
        this.C = c;
        this.j = U(this)
    };
    _.P(gS, W);
    gS.prototype.g = function() {
        for (var a = new cA, b = new _.B.Map, c = new _.B.Set, d = _.y(this.o), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            if (_.mi(f, 1)) {
                e = new _.B.Set;
                b.set(_.u(f, 1).toString(), e);
                f = _.y(gk(f, aA, 2));
                for (var h = f.next(); !h.done; h = f.next()) {
                    h = h.value;
                    var k = _.u(h, 1);
                    e.add(k);
                    c.has(k) || pk(a, 2, aA, h);
                    c.add(k)
                }
            }
        }
        this.C.G(b);
        this.j.G(a)
    }
    ;
    var hS = function(a, b, c) {
        W.call(this, a, 1051);
        this.o = b;
        this.j = lL(this, c)
    };
    _.P(hS, W);
    hS.prototype.g = function() {
        var a = this;
        this.j.value && Nk(this.j.value, function(b, c) {
            Il(a.context, b, c);
            var d, e;
            null == (d = a.o) || null == (e = d.error) || e.call(d, c)
        })
    }
    ;
    var iS = function(a, b) {
        W.call(this, a, 1040);
        this.j = U(this);
        this.o = lL(this, b)
    };
    _.P(iS, W);
    iS.prototype.g = function() {
        var a = this.o.value;
        a ? (a = gk(a, aA, 2),
        this.j.G(a.map(function(b) {
            var c = oz(b, bA);
            b = _.u(b, 1);
            c = c && (_.x(c, "startsWith").call(c, location.protocol) || _.x(c, "startsWith").call(c, "data:") && 80 >= c.length) ? $e(Yj(c)) : void 0;
            return {
                af: b,
                url: c
            }
        }))) : this.j.G([])
    }
    ;
    var jS = function(a, b, c) {
        W.call(this, a, 813);
        this.Ib = c;
        this.o = lL(this, b);
        this.j = lL(this, c)
    };
    _.P(jS, W);
    jS.prototype.g = function() {
        var a = this
          , b = this.o.value
          , c = this.j.value;
        if (null != b && b.length && c) {
            b = _.y(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                var e = d.value;
                d = e.af;
                (e = e.url) && _.er(this, Rk(d, e, c, this.Ib, function(f, h) {
                    Il(a.context, f, h);
                    var k, l;
                    null == (l = (k = console).error) || l.call(k, h)
                }))
            }
        }
    }
    ;
    var kS = function(a, b, c) {
        W.call(this, a, 1045);
        this.j = b;
        this.Ib = c
    };
    _.P(kS, W);
    kS.prototype.g = function() {
        var a = new tk;
        _.er(this, a);
        var b = new iS(this.context,this.j);
        J(a, b);
        b = new jS(this.context,b.j,this.Ib);
        J(a, b);
        a.run()
    }
    ;
    var mv = function(a, b, c, d) {
        W.call(this, a, 706);
        this.B = b;
        this.output = null != d ? d : U(this);
        this.j = V(this, c)
    };
    _.P(mv, W);
    mv.prototype.g = function() {
        this.output.Da(Dg(this.j.value, this.B))
    }
    ;
    var Bs = function(a, b, c, d) {
        W.call(this, a, 1154);
        this.wb = c;
        this.j = d;
        this.o = lL(this, b)
    };
    _.P(Bs, W);
    Bs.prototype.g = function() {
        if (this.o.value) {
            var a = new tk;
            _.er(this, a);
            var b = new mv(this.context,window,this.wb,this.j.Ib);
            J(a, b);
            b = new gS(this.context,this.o.value,this.j.jh);
            J(a, b);
            J(a, new kS(this.context,b.j,this.j.Ib));
            b = new hS(this.context,console,this.j.Ib);
            J(a, b);
            a.run()
        } else
            this.j.jh.aa(),
            this.j.Ib.aa()
    }
    ;
    var lS = function(a, b, c, d, e, f) {
        W.call(this, a, 1096);
        this.B = b;
        this.ba = c;
        this.j = d;
        this.Tc = e;
        this.o = lL(this, f)
    };
    _.P(lS, W);
    lS.prototype.g = function() {
        var a, b = null == (a = this.o.value) ? void 0 : a.Fk;
        b && b(this.j, this.ba, this.B, this.Tc, this.context.xa)
    }
    ;
    var mS = function(a, b) {
        W.call(this, a, 1095);
        this.j = b;
        this.output = U(this)
    };
    _.P(mS, W);
    mS.prototype.g = function() {
        this.output.Oa(this.j.load(_.wR))
    }
    ;
    var dv = function(a, b, c, d, e) {
        W.call(this, a, 1090);
        this.j = b;
        this.Tc = c;
        this.o = V(this, d);
        this.C = lL(this, e)
    };
    _.P(dv, W);
    dv.prototype.g = function() {
        var a = this.C.value, b;
        if (a && null != (b = _.ym(a, _.sA, 1)) && _.tA(b).length) {
            b = new tk;
            _.er(this, b);
            var c = new mS(this.context,this.j);
            J(b, c);
            a = new lS(this.context,window,this.o.value,a,this.Tc,c.output);
            J(b, a);
            b.run()
        }
    }
    ;
    var Sv = function(a, b, c, d, e, f, h) {
        W.call(this, a, 1205);
        this.B = b;
        this.Ch = c;
        this.H = V(this, d);
        this.o = V(this, e);
        this.j = V(this, f);
        this.C = V(this, h)
    };
    _.P(Sv, W);
    Sv.prototype.g = function() {
        var a = this.H.value;
        a = new a.An(this.o.value,this.B,this.j.value,this.Ch,this.C.value,new _.cN(this.context),new a.Ml(this.B));
        _.er(this, a);
        _.er(this, a.fa)
    }
    ;
    var Rv = function(a, b) {
        W.call(this, a, 1204);
        this.j = b;
        this.output = U(this)
    };
    _.P(Rv, W);
    Rv.prototype.g = function() {
        this.output.Oa(this.j.load(_.xR))
    }
    ;
    var Eu = function(a, b) {
        var c = this
          , d = []
          , e = [];
        this.addSize = El(a, 88, function(f, h) {
            var k;
            if (k = Co(f))
                k = h,
                k = Bo(k) || Array.isArray(k) && k.every(Bo);
            if (k) {
                if (_.I(wI)) {
                    var l = Is(h);
                    k = l.size;
                    l.Gh && (h = Yl([f, h]),
                    h = h.substring(1, h.length - 1),
                    N(b, new Wl(151,["SizeMappingBuilder.addSize", h])),
                    h = k)
                }
                d.push([f, h])
            } else
                e.push([f, h]),
                N(b, Zl("SizeMappingBuilder.addSize", [f, h]));
            return c
        });
        this.build = El(a, 89, function() {
            if (e.length)
                return N(b, QN(Un(e))),
                null;
            Ra(d);
            return d
        })
    };
    var nS = ti(939, function(a, b) {
        var c = b.context
          , d = b.Mm
          , e = b.ba;
        a = b.fm;
        b = b.B;
        var f = new Mz
          , h = new Lz;
        d = _.aj(h, 1, String(d));
        d = _.Ph(f, 5, d);
        d = _.K(d, 4, 1);
        d = _.K(d, 2, 2);
        c = _.aj(d, 3, c.Na);
        e = Cg(e);
        e = _.vl(c, 6, e);
        a(b, e);
        return {}
    }, {});
    var Jv = qi(1240, function(a, b) {
        return Xs(b.M, b.slotId)
    });
    var Ev = function(a, b, c, d, e) {
        W.call(this, a, 807);
        this.B = b;
        this.Yb = c;
        this.output = kL(this);
        this.j = V(this, d);
        e && nL(this, e)
    };
    _.P(Ev, W);
    Ev.prototype.g = function() {
        if (this.Yb && !this.j.value) {
            var a = ZB(this.B);
            XM(new WM(a,this.Yb)) || this.F(new pK("Cannot create top window frame"))
        }
        this.output.notify()
    }
    ;
    var oS = function(a, b) {
        W.call(this, a, 820);
        this.B = b;
        this.output = U(this)
    };
    _.P(oS, W);
    oS.prototype.g = function() {
        var a = this;
        this.output.Oa(Xk(this.B).then(function(b) {
            var c = b.Yb;
            var d = b.status;
            Qp("gpt_etu", function(e) {
                ep(e, a.context);
                fp(e, "rsn", d)
            }, c ? void 0 : 0);
            return null != c ? c : ""
        }))
    }
    ;
    var pS = function(a, b, c, d) {
        W.call(this, a, 979);
        this.B = b;
        this.j = lL(this, d);
        this.output = c
    };
    _.P(pS, W);
    pS.prototype.g = function() {
        var a = this;
        if (_.I(AI) || _.I(BI) && no())
            this.output.aa();
        else {
            var b;
            al(this.B, null != (b = this.j.value) ? b : !1).then(function(c) {
                a.output.G(c)
            })
        }
    }
    ;
    pS.prototype.l = function() {
        this.output.aa()
    }
    ;
    var Zs = function(a, b, c, d) {
        W.call(this, a, 1156);
        this.B = b;
        this.cf = c;
        this.j = {
            ld: new oq
        };
        this.o = V(this, d)
    };
    _.P(Zs, W);
    Zs.prototype.g = function() {
        if (Cg(this.o.value)) {
            var a = new tk;
            _.er(this, a);
            var b = new pS(this.context,this.B,this.j.ld,this.cf);
            J(a, b);
            a.run()
        } else
            this.j.ld.aa()
    }
    ;
    var qS = function(a, b, c) {
        W.call(this, a, 1123);
        this.j = b;
        this.o = c;
        U(this, b);
        U(this, c)
    };
    _.P(qS, W);
    qS.prototype.g = function() {
        _.I(yI) ? (this.j.G(!1),
        this.o.aa()) : (this.j.G(!0),
        this.o.G(10))
    }
    ;
    var rS = function(a, b, c, d, e) {
        W.call(this, a, 978);
        this.B = b;
        this.C = c;
        this.j = e;
        U(this, e);
        this.o = lL(this, d.ld)
    };
    _.P(rS, W);
    rS.prototype.g = function() {
        if (_.I(zI))
            this.j.aa();
        else if (this.o.value) {
            var a = gl(this.o.value, this.B, new _.cN(this.context), this.C);
            this.j.Oa(a)
        } else
            this.j.aa()
    }
    ;
    rS.prototype.l = function() {
        this.j.aa()
    }
    ;
    var at = function(a, b, c, d, e, f, h, k) {
        W.call(this, a, 1164);
        this.networkCode = b;
        this.C = c;
        this.Me = d;
        this.j = f;
        this.H = V(this, e);
        k && (this.o = lL(this, k));
        h && (this.J = V(this, h))
    };
    _.P(at, W);
    at.prototype.g = function() {
        var a = Ug(window.isSecureContext, window.document)
          , b = !1;
        if (_.I(gI)) {
            var c;
            b = !(null == (c = this.o) || !c.value);
            var d, e, f;
            c = null == (e = this.o) ? void 0 : null == (f = e.value) ? void 0 : ae(f, 1, bd).get(null == (d = this.networkCode.split(",")) ? void 0 : d[0]);
            b = b && !1 === c
        }
        var h;
        !a || b || (null == (h = this.J) ? 0 : h.value) ? (this.j.Sd.aa(),
        this.j.Ke.G(!1),
        this.j.Le.aa()) : this.H.value ? (a = new tk,
        _.er(this, a),
        J(a, new rS(this.context,window,this.C,this.Me,this.j.Sd)),
        d = new qS(this.context,this.j.Ke,this.j.Le),
        J(a, d),
        a.run()) : (this.j.Sd.G(5),
        this.j.Ke.G(!1),
        this.j.Le.G(5))
    }
    ;
    var sS = function(a, b, c) {
        W.call(this, a, 1101);
        this.B = b;
        this.j = c
    };
    _.P(sS, W);
    sS.prototype.g = function() {
        if (!_.I(zI)) {
            var a = this.j
              , b = Yk(this.B);
            b.setTopicsCalled ? _.B.Promise.resolve() : (b.setTopicsCalled = !0,
            a({
                message: "goog:topics:frame:get:topics",
                skipTopicsObservation: !1
            }))
        }
    }
    ;
    var Iv = function(a, b, c, d) {
        W.call(this, a, 1180);
        this.B = b;
        this.jg = c;
        this.j = lL(this, d.ld)
    };
    _.P(Iv, W);
    Iv.prototype.g = function() {
        if (this.jg && this.j.value) {
            var a = new tk;
            _.er(this, a);
            J(a, new sS(this.context,this.B,this.j.value));
            a.run()
        }
    }
    ;
    var kt = function(a) {
        this.D = _.C(a)
    };
    _.P(kt, _.F);
    var ft = function(a, b) {
        return _.ee(a, 2, _.Uc(b), "0")
    };
    var tS = function(a) {
        this.D = _.C(a)
    };
    _.P(tS, _.F);
    var jt = Ye(tS);
    tS.ca = [1];
    var cv = function(a, b, c, d) {
        W.call(this, a, 1186);
        this.L = b;
        this.B = c;
        this.output = U(this);
        this.ba = V(this, d)
    };
    _.P(cv, W);
    cv.prototype.g = function() {
        if (!Tg(this.B.isSecureContext, this.B.navigator, this.B.document) || _.I(ot))
            this.output.aa();
        else {
            var a = this.L.nf;
            if (null !== a)
                this.output.G(a);
            else {
                var b = _.Zn(new _.uK(this.B), "__gpi", this.ba.value);
                a = this.output;
                var c = a.G;
                b = _.Xg(b || String(this.context.pvsid)) % 63001;
                this.L.nf = b;
                c.call(a, b)
            }
        }
    }
    ;
    var uS = function(a, b, c) {
        W.call(this, a, 1171);
        this.j = c;
        U(this, c);
        this.Fh = V(this, b)
    };
    _.P(uS, W);
    uS.prototype.g = function() {
        this.j.G(0 === this.Fh.value.kind)
    }
    ;
    var vS = function(a, b, c) {
        W.call(this, a, 1160);
        this.j = c;
        U(this, c);
        this.o = V(this, b)
    };
    _.P(vS, W);
    vS.prototype.g = function() {
        if (null != this.o.value.requestId) {
            var a = this.o.value.request;
            this.context.xa.hb.kb.Td.Nk.Kb({
                Lb: a.byteLength
            });
            33792 < a.byteLength ? this.j.G({
                kind: 1,
                reason: 3
            }) : (a = tb(a, 3),
            a.length ? this.j.G({
                kind: 0,
                signal: a,
                requestId: this.o.value.requestId
            }) : this.j.G({
                kind: 1,
                reason: 5
            }))
        } else
            this.j.G({
                kind: 1,
                reason: this.o.value
            })
    }
    ;
    vS.prototype.l = function() {
        this.j.G({
            kind: 1,
            reason: 4
        })
    }
    ;
    var wS = function(a, b) {
        W.call(this, a, 1159);
        this.output = U(this);
        this.j = b
    };
    _.P(wS, W);
    wS.prototype.g = function() {
        var a = this;
        this.output.Oa(this.j.getInterestGroupAdAuctionData({
            seller: "https://securepubads.g.doubleclick.net"
        }).catch(function(b) {
            a.F(b);
            return 4
        }))
    }
    ;
    wS.prototype.l = function() {
        this.output.G(4)
    }
    ;
    var tt = function(a, b, c, d, e, f) {
        W.call(this, a, 1177);
        this.C = b;
        this.j = e;
        this.o = f;
        U(this, e);
        U(this, f);
        this.H = V(this, c);
        d && (this.J = V(this, d))
    };
    _.P(tt, W);
    tt.prototype.g = function() {
        if (this.H.value) {
            var a;
            if (null == (a = this.J) ? 0 : a.value)
                this.j.G({
                    kind: 1,
                    reason: 6
                }),
                this.o.G(!1);
            else {
                a = new tk;
                _.er(this, a);
                var b = new wS(this.context,this.C);
                J(a, b);
                b = new vS(this.context,b.output,this.j);
                J(a, b);
                b = new uS(this.context,this.j,this.o);
                J(a, b);
                a.run()
            }
        } else
            this.j.G({
                kind: 1,
                reason: 2
            }),
            this.o.G(!1)
    }
    ;
    ng({
        google_signals: ng({
            buyer_reporting_id: sg
        })
    });
    var xS = function(a, b, c, d, e, f) {
        W.call(this, a, 881);
        this.slotId = b;
        this.M = c;
        this.ga = d;
        this.j = e;
        this.o = f;
        this.output = U(this)
    };
    _.P(xS, W);
    xS.prototype.g = function() {
        if (4 === _.$g(pt)) {
            var a = _.ym(this.ga, aB, 23);
            if (a) {
                var b;
                if (0 !== (null == (b = this.j) ? void 0 : b.kind))
                    throw new TypeError("Received remote auction config despite " + (this.j ? "invalid" : "absent") + " remarketing input.");
                this.output.G({
                    seller: "https://securepubads.g.doubleclick.net",
                    interestGroupBuyers: $h(this.ga, 3, 2),
                    requestId: this.j.requestId,
                    serverResponse: jl(kl(a, 1)),
                    resolveToConfig: !_.O(this.ga, 14)
                })
            } else
                (b = gB(this.ga)) ? wt(0, 0, b) : reportError(new TypeError("Missing seller signals in B&A error case.")),
                this.output.aa()
        } else {
            var c;
            b = this.output;
            a = b.G;
            var d = this.ga
              , e = null == (c = this.M.qd) ? void 0 : c[this.slotId.getDomId()]
              , f = this.context.xa
              , h = _.I(II) ? void 0 : this.o;
            c = _.$g(EI);
            var k = _.$g(SI)
              , l = _.I(CI)
              , m = void 0 === c ? 0 : c;
            c = !_.O(d, 14);
            var n = {};
            var p = gk(d, YA, 7);
            p = _.y(p);
            for (var q = p.next(); !q.done; q = p.next()) {
                q = q.value;
                var t = {}
                  , w = void 0
                  , v = null == (w = f) ? void 0 : w.hb.kb.Td.Wk;
                w = _.u(q, 1);
                if (_.u(q, 2).length)
                    try {
                        if (t = JSON.parse(_.u(q, 2)),
                        1 > 100 * _.Wg()) {
                            var A = void 0;
                            null == (A = v) || A.Ra({
                                hg: w,
                                status: "SUCCESS",
                                Ta: 100
                            })
                        }
                    } catch (G) {
                        A = void 0,
                        null == (A = v) || A.Ra({
                            hg: w,
                            status: "ERROR",
                            Ta: 1
                        })
                    }
                else
                    A = void 0,
                    null == (A = v) || A.Ra({
                        hg: w,
                        status: "EMPTY",
                        Ta: 1
                    });
                n[_.u(q, 1)] = t
            }
            if (f = _.ym(d, XA, 6))
                n["https://googleads.g.doubleclick.net"] = f.toJSON(),
                n["https://td.doubleclick.net"] = f.toJSON();
            p = {};
            f = _.y(gk(d, $A, 11));
            for (q = f.next(); !q.done; q = f.next())
                q = q.value,
                p[_.u(q, 1)] = _.jz(q, 2);
            q = {};
            0 !== _.jz(d, 21) && (q["*"] = _.jz(d, 21));
            if (0 < gk(d, ZA, 32).length) {
                var z = {};
                f = _.y(gk(d, ZA, 32));
                for (t = f.next(); !t.done; t = f.next())
                    t = t.value,
                    z[_.u(t, 1)] = _.jz(t, 2)
            }
            t = {};
            null != Am(d, 18) && (t["https://googleads.g.doubleclick.net"] = Zt(d, 18),
            t["https://td.doubleclick.net"] = Zt(d, 18));
            f = _.y(be(d, 24, eB));
            for (v = f.next(); !v.done; v = f.next())
                w = v.value,
                Zt(w[1], 4) && (v = w[0],
                w = Zt(w[1], 4),
                t[v] = w);
            f = _.u(d, 1).split("/td/")[0];
            var D;
            v = null == (D = gB(d)) ? void 0 : _.Fd(D);
            var E;
            null != v && null != (E = _.ym(v, bB, 5)) && _.nk(E, 2);
            z = _.x(Object, "assign").call(Object, {}, {
                seller: f,
                decisionLogicUrl: _.u(d, 1),
                trustedScoringSignalsUrl: _.u(d, 2),
                interestGroupBuyers: $h(d, 3, 2),
                sellerExperimentGroupId: Zt(d, 17),
                auctionSignals: JSON.parse(_.u(d, 4) || "{}"),
                sellerSignals: (null == v ? void 0 : v.toJSON()) || [],
                sellerTimeout: _.jz(d, 15) || 50,
                perBuyerExperimentGroupIds: t,
                perBuyerSignals: n,
                perBuyerTimeouts: p,
                perBuyerCumulativeTimeouts: q
            }, z ? {
                perBuyerGroupLimits: z
            } : {}, c ? {
                resolveToConfig: c
            } : {});
            if (null == d ? 0 : _.O(hB(d), 25))
                z.sellerCurrency = "USD",
                z.perBuyerCurrencies = _.x(Object, "fromEntries").call(Object, ae(d, 22, cd));
            _.u(d, 28) && (z.directFromSellerSignalsHeaderAdSlot = _.u(d, 28));
            yt(z.interestGroupBuyers, l) && (z.auctionReportBuyerKeys = z.interestGroupBuyers.map(zt),
            z.auctionReportBuyers = At(),
            z.auctionReportBuyerDebugModeConfig = Bt());
            h && (z.auctionNonce = h,
            z.additionalBids = _.B.Promise.resolve());
            ae(d, 33, cd).size && (z.deprecatedRenderURLReplacements = _.x(Object, "fromEntries").call(Object, (_.H = ae(d, 33, cd),
            _.x(_.H, "entries")).call(_.H)),
            (D = z.deprecatedRenderURLReplacements["${RENDER_DATA_td.doubleclick.net_GDA}"]) && (z.deprecatedRenderURLReplacements["${RENDER_DATA}"] = D));
            switch (m) {
            case 1:
                z.allSlotsRequestedSizes = [{
                    width: d.getWidth(),
                    height: d.getHeight()
                }];
                break;
            case 2:
                z.allSlotsRequestedSizes = [{
                    width: 123456789,
                    height: Number(d.getWidth() + "999" + d.getHeight())
                }]
            }
            k && (z.reportingTimeout = k);
            k = Object;
            D = k.assign;
            E = _.u(d, 1);
            h = Zt(d, 17);
            l = new cB;
            Qh(hB(d), bB, 5) && (m = new bB,
            n = kz(fz(hB(d), bB, 5), 2),
            m = _.ee(m, 2, Jc(n), "0"),
            n = kz(fz(hB(d), bB, 5), 4),
            m = _.ee(m, 4, Jc(n), "0"),
            _.Ph(l, 5, m));
            hB(d).getEscapedQemQueryId() && (m = hB(d).getEscapedQemQueryId(),
            _.aj(l, 2, m));
            _.u(hB(d), 6) && (m = _.u(hB(d), 6),
            _.aj(l, 6, m));
            _.O(hB(d), 21) && _.vl(l, 21, !0);
            _.O(hB(d), 4) && _.vl(l, 4, !0);
            _.u(hB(d), 11) && (m = _.u(hB(d), 11),
            _.aj(l, 11, m));
            _.O(hB(d), 32) && _.vl(l, 32, !0);
            l = l.toJSON();
            m = _.jz(d, 15) || 50;
            if (_.O(d, 30)) {
                if (null == e || !e.length)
                    throw Error("top_td_without_component_auction");
            } else
                e = [z].concat(_.di(null != e ? e : []));
            e = D.call(k, {}, {
                seller: f,
                decisionLogicUrl: E,
                sellerExperimentGroupId: h,
                sellerSignals: l,
                sellerTimeout: m,
                interestGroupBuyers: [],
                auctionSignals: {},
                perBuyerExperimentGroupIds: {},
                perBuyerSignals: {},
                perBuyerTimeouts: {},
                perBuyerCumulativeTimeouts: {},
                componentAuctions: e
            }, c ? {
                resolveToConfig: c
            } : {});
            _.u(d, 28) && (e.directFromSellerSignalsHeaderAdSlot = _.u(d, 28));
            a.call(b, e)
        }
    }
    ;
    xS.prototype.l = function() {
        this.output.aa()
    }
    ;
    var yS = function(a, b, c, d) {
        W.call(this, a, 1105);
        this.adUnitPath = b;
        this.ga = c;
        this.storage = d
    };
    _.P(yS, W);
    yS.prototype.g = function() {
        var a = Date.now();
        if (nt(a)) {
            var b = $h(this.ga, 3, 2)
              , c = ct(this.adUnitPath);
            if (_.O(this.ga, 20)) {
                if (_.I(PI)) {
                    var d;
                    var e = (null == (d = _.ym(this.ga, dB, 29)) ? void 0 : Zt(d, 2)) || 864E5
                } else
                    e = 864E5;
                a = Et(b, a + e);
                e = (b = this.storage.getItem(c)) ? gk(jt(b), kt, 1) : [];
                var f;
                b = new tS;
                a = gt(e, a);
                a = _.sm(b, 1, a);
                b = !(null == (f = _.ym(this.ga, dB, 29)) || !_.O(f, 3));
                f = _.Fh(a, 2, b);
                this.storage.setItem(c, fl(f))
            } else
                _.I(MI) && this.storage.removeItem(c)
        }
    }
    ;
    var Gt = navigator
      , Ht = /(\$\{GDPR})/gi
      , It = /(\$\{GDPR_CONSENT_[0-9]+\})/gi
      , Jt = /(\$\{ADDTL_CONSENT})/gi
      , Kt = /(\$\{AD_WIDTH})/gi
      , Lt = /(\$\{AD_HEIGHT})/gi
      , Mt = /(\$\{RENDER_DATA})/gi;
    var zS = function() {
        var a = this;
        this.promise = new _.B.Promise(function(b, c) {
            a.reject = c;
            a.resolve = b
        }
        )
    }
      , AS = function() {
        this.auctionSignals = new zS;
        this.topLevelSellerSignals = new zS;
        this.g = new zS;
        this.perBuyerSignals = new zS;
        this.perBuyerTimeouts = new zS;
        this.perBuyerCumulativeTimeouts = new zS;
        this.directFromSellerSignals = new zS;
        this.directFromSellerSignalsHeaderAdSlot = new zS;
        this.perBuyerCurrencies = new zS;
        this.resolveToConfig = new zS;
        this.deprecatedRenderURLReplacements = new zS
    }
      , BS = function(a, b, c, d) {
        this.g = a;
        this.qg = b;
        this.interestGroupBuyers = c;
        this.Mb = d
    };
    var CS = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v) {
        W.call(this, a, 1201);
        this.ha = b;
        this.ba = c;
        this.ga = d;
        this.ia = e;
        this.U = l;
        this.H = m;
        this.J = n;
        this.O = p;
        this.C = q;
        this.j = t;
        this.na = kL(this);
        this.o = U(this);
        this.ua = lL(this, f);
        this.Ia = V(this, h);
        this.sa = V(this, k);
        this.da = V(this, v);
        V(this, w);
        U(this, q);
        U(this, p.ec);
        U(this, p.Ha);
        U(this, p.Ja);
        U(this, this.j)
    };
    _.P(CS, W);
    CS.prototype.g = function() {
        var a = this.Ia.value
          , b = Math.round(performance.now() - a)
          , c = this.sa.value;
        a = this.ua.value;
        var d = gB(this.ga)
          , e = _.O(d, 10)
          , f = _.O(d, 9)
          , h = "string" === typeof a || Qt(a)
          , k = 3 !== a && 2 !== a && 1 !== a;
        this.j.G(h && !f);
        k && Wt(this.context, h, c, b, d);
        this.context.T.log(607368714, Ut, {
            Al: b,
            Kk: a,
            cn: d.getEscapedQemQueryId(),
            Yl: _.u(d, 6)
        });
        var l, m;
        k = null != (m = null == (l = this.da.value.componentAuctions) ? void 0 : l.length) ? m : 0;
        Vt(this.context, a, b, c, !!this.ia, d, k, h);
        if (h)
            if (e)
                this.ha.deprecatedURNToURL(a, !0),
                this.C.G(!0),
                this.o.aa();
            else if (f) {
                _.O(d, 17) ? wt(0, 0, d) : this.ha.deprecatedURNToURL(a, !0);
                var n;
                Ft(this.O, this.j, this.H, this.J, this.U, null == (n = this.ga) ? void 0 : _.u(n, 25));
                this.C.G(!0);
                this.o.aa()
            } else {
                this.o.G(a);
                this.C.G(!0);
                if (_.I(LI)) {
                    m = this.da.value;
                    n = this.ga;
                    var p;
                    l = 1 === (null == (p = m.componentAuctions) ? void 0 : p.length) && st(m.componentAuctions[0].seller) && Qh(n, WA, 26) ? Ey(fl(fz(n, WA, 26)), 3) : ""
                } else
                    l = void 0;
                p = l;
                var q, t, w, v;
                l = _.x(Object, "assign").call(Object, {}, {
                    gdprApplies: Wn(this.ba, 3) ? _.O(this.ba, 3) ? "1" : "0" : null,
                    Ig: qz(this.ba, 2),
                    bi: qz(this.ba, 4),
                    og: null == (q = this.ga) ? void 0 : null == (t = gB(q)) ? void 0 : null == (w = _.ym(t, PA, 1)) ? void 0 : null == (v = _.ym(w, OA, 2)) ? void 0 : fz(v, NA, 3),
                    Zh: this.ga.getWidth().toString(),
                    Xh: this.ga.getHeight().toString()
                }, p ? {
                    Kj: p
                } : {});
                eL(this.na, _.I(RI) ? Pt(a, l) : Nt(a, l))
            }
        else {
            wt(b, 2 === a ? c : 0, d);
            if (!e) {
                var A;
                Ft(this.O, this.j, this.H, this.J, this.U, null == (A = this.ga) ? void 0 : _.u(A, 25))
            }
            this.C.G(!0);
            this.o.aa()
        }
    }
    ;
    CS.prototype.l = function() {
        var a, b, c = null == (a = this.ga) ? void 0 : gB(a);
        a = this.ia;
        var d = this.O
          , e = this.j
          , f = this.H
          , h = this.J
          , k = this.U;
        null == (b = this.ga) || _.u(b, 25);
        c && wt(0, 0, c);
        null == a || a.Mb.abort();
        Ft(d, e, f, h, k)
    }
    ;
    var DS = function(a, b, c, d, e, f, h, k, l, m, n, p, q) {
        W.call(this, a, 1200);
        this.L = b;
        this.ua = c;
        this.j = d;
        this.ga = e;
        this.da = h;
        this.J = k;
        this.O = l;
        this.U = n;
        this.ha = p;
        this.C = jL(this);
        this.sa = U(this);
        this.na = U(this);
        this.ia = U(this);
        this.o = lL(this, f);
        V(this, m);
        U(this, n.ec);
        U(this, n.Ha);
        U(this, n.Ja);
        U(this, p);
        q && (this.H = V(this, q))
    };
    _.P(DS, W);
    DS.prototype.g = function() {
        if (this.o.value) {
            var a = hB(this.ga);
            Xt(this.context, a);
            var b = performance.now();
            this.sa.G(b);
            b = _.jz(this.ga, 8) || 1E3;
            this.na.G(b);
            var c, d, e, f;
            if (4 === (null == (c = this.H) ? void 0 : c.value) || null != (null == (d = this.H) ? void 0 : null == (e = d.value) ? void 0 : e.requestId) && 33792 < (null == (f = this.H) ? void 0 : f.value).request.byteLength) {
                var h;
                null == (h = this.j) || h.Mb.abort();
                this.C.G(1)
            } else if (c = _.jz(a, 14) || -1,
            d = _.jz(a, 13) || -1,
            d = 0 < d && this.L.j >= d,
            0 < c && this.L.l >= c || d)
                this.C.G(1);
            else if (++this.L.l,
            ++this.L.j,
            this.o.value.signal = AbortSignal.timeout(b),
            _.O(a, 15))
                --this.L.l,
                this.C.Oa(new _.B.Promise(function(k) {
                    setTimeout(function() {
                        k(1)
                    }, 0)
                }
                ));
            else {
                if (this.j && this.o.value.serverResponse)
                    throw new TypeError("Attempted to provide a RemoteAuctionConfig in parallelized auction.");
                a = this.j ? ES(this.o.value, b, this.j) : FS(this, this.o.value);
                --this.L.l;
                this.C.Oa(a)
            }
        } else
            null == (a = this.j) || a.Mb.abort(),
            Ft(this.U, this.ha, this.J, this.O, this.da, _.u(this.ga, 25)),
            this.ia.G(!1)
    }
    ;
    var FS = function(a, b) {
        var c, d;
        return null == (d = (c = a.ua).runAdAuction) ? void 0 : d.call(c, b).catch(function(e) {
            if (e instanceof DOMException && "TimeoutError" === e.name)
                return 2;
            e instanceof Error && a.F(e);
            return 3
        })
    }
      , ES = function(a, b, c) {
        Dt(a, c);
        setTimeout(function() {
            c.Mb.abort(new DOMException("runAdAuction","TimeoutError"))
        }, b);
        return c.g
    };
    DS.prototype.l = function() {
        var a, b = null == (a = this.ga) ? void 0 : gB(a);
        a = this.j;
        var c = this.U
          , d = this.ha
          , e = this.J
          , f = this.O
          , h = this.da;
        _.u(this.ga, 25);
        b && wt(0, 0, b);
        null == a || a.Mb.abort();
        Ft(c, d, e, f, h)
    }
    ;
    var GS = function(a, b, c, d, e, f, h) {
        W.call(this, a, 1202);
        this.ga = b;
        this.uc = c;
        this.j = d;
        this.o = lL(this, f);
        this.C = V(this, e);
        nL(this, h);
        U(this, d.ec);
        U(this, d.Ha);
        U(this, d.Ja)
    };
    _.P(GS, W);
    GS.prototype.g = function() {
        if (this.o.value) {
            Sm(this.uc) || (this.C.value.style.display = "");
            var a = this.o.value
              , b = this.ga;
            var c = this.context.xa;
            var d = _.u(b, 31);
            d ? Qt(a) ? (c.hb.kb.Td.Lh.Wh.Ra({
                Ta: 1,
                status: "FAILED_FENCED_FRAME"
            }),
            c = null) : ((b = gB(b)) && _.O(b, 27) ? (b = mb(b),
            d = d.replace("%%activeview_prefix%%", b).replace("%%activeview_script%%", "https://pagead2.googlesyndication.com/pagead/managed/js/activeview/current/ufs_web_display.js")) : d = d.replace("%%activeview_prefix%%", "").replace("%%activeview_script%%", ""),
            a = d.replace("%%srcfledge%%", a),
            a.length === d.length && a === d ? (c.hb.kb.Td.Lh.Wh.Ra({
                Ta: 1,
                status: "FAILED_UNMODIFIED"
            }),
            c = null) : (c.hb.kb.Td.Lh.Wh.Ra({
                Ta: 1,
                status: "OK"
            }),
            c = a)) : c = null;
            c ? this.j.Ha.G({
                kind: 0,
                qb: c
            }) : this.j.Ha.G({
                kind: 2,
                Je: this.o.value
            });
            this.j.Ja.G(new _.Zm(this.ga.getWidth(),this.ga.getHeight()));
            this.j.ec.G(!1)
        }
    }
    ;
    var HS = function(a, b, c) {
        W.call(this, a, 1054);
        this.j = b;
        this.output = kL(this);
        this.o = V(this, c)
    };
    _.P(HS, W);
    HS.prototype.g = function() {
        this.o.value || this.j();
        this.output.notify()
    }
    ;
    var IS = function(a, b, c, d, e, f) {
        W.call(this, a, 1053);
        this.slotId = b;
        this.M = c;
        this.L = d;
        this.Qa = e;
        this.j = U(this);
        this.o = V(this, f)
    };
    _.P(IS, W);
    IS.prototype.g = function() {
        this.o.value ? (du(this.slotId, this.L, this.M, this.Qa),
        this.j.G(!1)) : this.j.G(!0)
    }
    ;
    var JS = function(a, b, c, d) {
        W.call(this, a, 1055);
        this.j = d;
        nL(this, c);
        this.o = V(this, b);
        kL(this, this.j)
    };
    _.P(JS, W);
    JS.prototype.g = function() {
        this.o.value && this.j.notify()
    }
    ;
    var vv = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v, A, z) {
        W.call(this, a, 1179);
        this.slotId = b;
        this.V = d;
        this.L = e;
        this.ba = f;
        this.o = h;
        this.O = m;
        this.C = n;
        this.M = p;
        this.da = q;
        this.Qa = t;
        this.ga = w;
        this.j = v;
        this.ia = A;
        this.ha = z;
        this.H = V(this, k);
        this.J = V(this, l);
        this.U = lL(this, c)
    };
    _.P(vv, W);
    vv.prototype.g = function() {
        var a = new tk;
        _.er(this, a);
        var b = U(this);
        if (this.ga) {
            var c = hB(this.ga)
              , d = _.O(c, 10);
            if (this.ga.getWidth() && this.ga.getHeight())
                if (d)
                    if (Ft({
                        ec: b,
                        Ha: this.j.Ha,
                        Ja: this.j.Ja
                    }, this.j.Cd, this.H.value, this.J.value, this.o),
                    _.O(c, 17)) {
                        wt(0, 0, c);
                        var e;
                        null == (e = this.C) || e.Mb.abort()
                    } else
                        KS(this, a, this.ga);
                else
                    b = KS(this, a, this.ga);
            else {
                Ft({
                    ec: b,
                    Ha: this.j.Ha,
                    Ja: this.j.Ja
                }, this.j.Cd, this.H.value, this.J.value, this.o);
                wt(0, 0, c);
                var f;
                null == (f = this.C) || f.Mb.abort();
                this.F(Error("Missing width or height"))
            }
        } else
            Ft({
                ec: b,
                Ha: this.j.Ha,
                Ja: this.j.Ja
            }, this.j.Cd, this.H.value, this.J.value, this.o),
            null == (c = this.C) || c.Mb.abort(new DOMException("runAdAuction","ThrottledError"));
        e = new IS(this.context,this.slotId,this.M,this.L,this.Qa,b);
        J(a, e);
        b = new HS(this.context,this.da,b);
        J(a, b);
        b = new JS(this.context,e.j,b.output,this.j.fd);
        J(a, b);
        a.run()
    }
    ;
    var KS = function(a, b, c) {
        if (2 === _.$g(pt) && a.U.value && _.O(c, 20) && 0 !== $h(c, 3, 2).length) {
            var d = new yS(a.context,a.slotId.getAdUnitPath(),c,a.U.value);
            J(b, d)
        }
        var e = new xS(a.context,a.slotId,a.M,c,a.ia,a.ha);
        J(b, e);
        var f = navigator
          , h = {
            Ha: a.j.Ha,
            Ja: a.j.Ja,
            ec: new oq
        };
        d = h.ec;
        var k = void 0;
        _.I(DI) && (k = new wS(a.context,f),
        J(b, k));
        var l;
        k = new DS(a.context,a.L,f,a.C,c,e.output,a.o,a.H.value,a.J.value,a.O,h,a.j.Cd,null == (l = k) ? void 0 : l.output);
        J(b, k);
        l = new CS(a.context,f,a.ba,c,a.C,k.C,k.sa,k.na,a.o,a.H.value,a.J.value,h,k.ia,a.j.Cd,a.O,e.output);
        J(b, l);
        c = new GS(a.context,c,Cr(a.V),h,a.O,l.o,l.na);
        J(b, c);
        a = new pr(a.context,a.slotId,cu);
        J(b, a);
        return d
    };
    var LS = function() {
        bS.apply(this, arguments)
    };
    _.P(LS, bS);
    var MS = function(a, b) {
        var c = _.Bf(b ? "fencedframe" : "IFRAME");
        b && (c.mode = "opaque-ads");
        c.id = a.pe;
        c.name = a.pe;
        c.title = a.qe;
        Array.isArray(a.l) ? null != a.l[0] && null != a.l[1] && (c.width = String(a.l[0]),
        c.height = String(a.l[1])) : (c.width = "100%",
        c.height = "0");
        c.allowTransparency = "true";
        c.scrolling = "no";
        c.marginWidth = "0";
        c.marginHeight = "0";
        c.frameBorder = "0";
        c.style.border = "0";
        c.style.verticalAlign = "bottom";
        c.setAttribute("aria-label", "Advertisement");
        c.tabIndex = 0;
        return c
    }
      , NS = function(a, b) {
        "string" !== typeof a.l && (b.width = String(a.l[0]),
        b.height = String(a.l[1]));
        var c = El(a.context, 774, function() {
            a.loaded(b);
            _.Cf(b, "load", c)
        });
        _.ef(b, "load", c);
        _.Cp(a, function() {
            return _.Cf(b, "load", c)
        });
        a.g.rd.appendChild(b)
    };
    var OS = function() {
        LS.apply(this, arguments)
    };
    _.P(OS, LS);
    OS.prototype.F = function() {
        var a = MS(this, !this.g.Sn);
        if ("string" === typeof this.Ua.Je) {
            var b = this.Ua.Je;
            /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = $e(b),
            a.src = _.jb(b).toString())
        } else
            a.config = this.Ua.Je;
        if (_.I(VI) && this.g.Uj) {
            b = this.g.rd;
            var c = mb(this.g.Uj);
            var d = new Ez;
            a.setAttribute("class", "GoogleActiveViewElement");
            a.setAttribute("data-google-av-cxn", c);
            a.setAttribute("data-google-av-itpl", (40).toString());
            a.setAttribute("data-google-av-ufs-integrator-metadata", btoa(fl(d)));
            c = b.appendChild;
            d = document.createElement("script");
            d.setAttribute("id", "googleActiveViewDisplayScript");
            var e = _.af(Fz);
            kb(d, e);
            d.async = !0;
            c.call(b, d)
        }
        NS(this, a);
        return a
    }
    ;
    OS.prototype.j = function() {
        return !1
    }
    ;
    var PS = navigator
      , QS = function(a, b, c, d, e, f, h, k) {
        W.call(this, a, 1089);
        this.wc = b;
        this.Z = c;
        this.M = d;
        this.j = f;
        this.o = k;
        U(this, k);
        e && (this.C = lL(this, e));
        h && (this.H = lL(this, h))
    };
    _.P(QS, W);
    QS.prototype.g = function() {
        var a = {};
        if (1 === this.wc)
            for (var b = _.y(this.Z), c = b.next(); !c.done; c = b.next())
                c = c.value,
                a[c.getId()] = RS(this, c, ["https://googleads.g.doubleclick.net", "https://td.doubleclick.net"], this.j);
        else if (2 === this.wc) {
            b = null == (c = this.C) ? void 0 : c.value;
            if (!b) {
                this.o.aa();
                return
            }
            var d;
            c = null == (d = this.H) ? void 0 : d.value;
            d = _.y(this.Z);
            for (var e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                var f = b.get(e.getId())
                  , h = void 0;
                if (null != (h = f) && h.length) {
                    h = void 0;
                    var k = null == (h = c) ? void 0 : h.get(e.getAdUnitPath());
                    a[e.getId()] = RS(this, e, f, this.j, k)
                }
            }
        }
        this.o.G(a)
    }
    ;
    var RS = function(a, b, c, d, e) {
        var f = new AS, h = new AbortController, k, l = Ct({
            qg: f,
            Mb: h,
            interestGroupBuyers: c,
            qd: null == (k = a.M.qd) ? void 0 : k[b.getDomId()],
            Wl: d,
            Jl: e,
            gn: _.$g(SI),
            Gk: _.I(CI)
        });
        b = PS.runAdAuction(l).catch(function(m) {
            if (m instanceof DOMException && "TimeoutError" === m.name)
                return 2;
            if (m instanceof DOMException && "ThrottledError" === m.name)
                return 4;
            m instanceof Error && a.F(m);
            return 3
        });
        return new BS(b,f,c,h)
    };
    var SS = function(a, b, c, d) {
        W.call(this, a, 1230);
        this.Z = b;
        this.o = d;
        this.j = lL(this, c);
        U(this, d)
    };
    _.P(SS, W);
    SS.prototype.g = function() {
        var a = this.j.value
          , b = new _.B.Map;
        if (null != a && a.size && !Jw()) {
            var c = bh(JI);
            if (0 !== c.length)
                for (var d = _.y(this.Z), e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    var f = a.get(e.getId())
                      , h = void 0;
                    if (null != (h = f) && h.length) {
                        h = new _.B.Map;
                        f = _.y(f);
                        for (var k = f.next(); !k.done; k = f.next())
                            k = k.value,
                            _.x(c, "includes").call(c, _.Xg(k).toString()) && h.set(k, Math.floor(63001 * _.Wg()));
                        h.size && b.set(e.getAdUnitPath(), h)
                    }
                }
        }
        this.o.G(b)
    }
    ;
    var TS = function(a, b, c, d, e, f, h) {
        W.call(this, a, 1106);
        this.ba = b;
        this.H = c;
        this.o = d;
        this.Z = e;
        this.C = f;
        this.J = h;
        this.j = U(this);
        U(this, h)
    };
    _.P(TS, W);
    TS.prototype.g = function() {
        for (var a = lt(this.o, this.H, this.ba, _.I(UI), this.C), b = new _.B.Map, c = fu(a), d = new _.B.Map, e = _.y(this.Z), f = e.next(); !f.done; f = e.next()) {
            var h = f.value;
            f = h.getAdUnitPath();
            var k = a.get(ct(f))
              , l = void 0
              , m = void 0
              , n = void 0
              , p = null != (n = null != (m = c) ? m : null == (l = k) ? void 0 : gk(l, kt, 1).map(function(q) {
                return _.u(q, 1)
            })) ? n : [];
            b.set(h.getId(), p);
            if (!d.has(f)) {
                h = [];
                p = _.y(p.sort());
                for (k = p.next(); !k.done; k = p.next())
                    h.push(_.Xg(k.value));
                d.set(f, h)
            }
        }
        this.j.G(b);
        this.J.G(d)
    }
    ;
    var gu = function(a, b, c, d, e, f, h, k, l) {
        W.call(this, a, 1170);
        this.wc = b;
        this.M = c;
        this.ba = d;
        this.o = e;
        this.C = Date.now();
        this.j = {
            vh: U(this)
        };
        2 === b && this.o && (this.j.Og = U(this),
        _.I(NI) && (this.j.lf = U(this)));
        this.O = V(this, f);
        this.J = V(this, h);
        k && (this.H = lL(this, k));
        l && (this.U = V(this, l))
    };
    _.P(gu, W);
    gu.prototype.g = function() {
        var a = this.O.value, b;
        if (this.J.value && a.length && (null == (b = this.U) || !b.value) && nt(this.C)) {
            b = new tk;
            _.er(this, b);
            if (2 === this.wc && this.o) {
                var c, d;
                var e = new TS(this.context,this.ba,this.o,this.C,a,null != (d = null == (c = this.H) ? void 0 : c.value) ? d : void 0,this.j.Og);
                J(b, e);
                e = e.j;
                _.I(NI) && (c = new SS(this.context,a,e,this.j.lf),
                J(b, c))
            }
            var f, h;
            a = new QS(this.context,this.wc,a,this.M,e,null != (h = null == (f = this.H) ? void 0 : f.value) ? h : void 0,this.j.lf,this.j.vh);
            J(b, a);
            b.run()
        } else {
            this.j.vh.aa();
            var k;
            null == (k = this.j.Og) || k.aa();
            var l;
            null == (l = this.j.lf) || l.aa()
        }
    }
    ;
    var US = function(a, b, c) {
        W.call(this, a, 1216);
        this.j = b;
        this.output = jL(this);
        this.o = V(this, c);
        this.Ka = this.context.xa
    };
    _.P(US, W);
    US.prototype.g = function() {
        var a = this
          , b = this.o.value
          , c = new _.B.Map;
        if (!b.length || _.I(GI))
            this.output.G(c);
        else {
            var d = this.j
              , e = _.xf()
              , f = b.map(function(h) {
                return d.createAuctionNonce().then(function(k) {
                    c.set(h, k)
                }).catch(function(k) {
                    a.F(k)
                })
            });
            this.output.Oa(_.B.Promise.all(f).then(function() {
                var h = _.$g(FI);
                0 < h && a.context.oc < 1 / h && a.Ka.hb.kb.Td.jl.Kb({
                    Lb: _.xf() - e,
                    Im: b.length
                });
                return c
            }))
        }
    }
    ;
    var VS = function(a, b, c, d, e, f, h, k) {
        W.call(this, a, 1166);
        this.da = b;
        this.W = c;
        this.H = d;
        this.j = jL(this);
        this.o = U(this);
        this.C = U(this);
        this.O = V(this, e);
        this.U = V(this, f);
        nL(this, h);
        this.J = V(this, k)
    };
    _.P(VS, W);
    VS.prototype.g = function() {
        var a = this
          , b = this.O.value;
        if (b) {
            var c = Zx(this.U.value, {
                uuid: this.da
            })
              , d = this.W.createElement("script");
            b = {
                source: b,
                credentials: this.J.value ? "include" : "omit",
                resources: [c.toString()]
            };
            d.setAttribute("type", "webbundle");
            gb(d, new fb(JSON.stringify(b).replace(/</g, "\\u003C")));
            this.W.head.appendChild(d);
            this.o.G(d);
            this.C.G(b);
            this.j.Oa(WS(c).catch(function(e) {
                e instanceof rK ? a.H(e) : (a.F(e),
                a.l(e));
                return null
            }))
        } else
            this.j.aa(),
            this.o.aa(),
            this.C.aa()
    }
    ;
    var WS = function(a) {
        var b, c;
        return _.gf(function(d) {
            if (1 == d.g)
                return d.yield(fetch(a.toString()).catch(function() {
                    throw new rK("Failed to fetch bundle index.");
                }), 2);
            if (3 != d.g)
                return b = d.A,
                d.yield(b.text(), 3);
            c = d.A;
            return d.return(lB(c))
        })
    };
    var XS = function(a, b, c, d, e, f, h, k, l, m, n) {
        W.call(this, a, 1167);
        this.W = b;
        this.ba = c;
        this.H = d;
        this.j = e;
        this.C = f;
        this.o = V(this, h);
        this.O = lL(this, k);
        this.U = lL(this, l);
        this.da = lL(this, m);
        n && (this.J = lL(this, n))
    };
    _.P(XS, W);
    XS.prototype.g = function() {
        var a = this.O.value
          , b = this.U.value
          , c = this.da.value;
        if (a)
            if (b && c) {
                var d = $h(a, 1, 2)
                  , e = $h(a, 2, 2);
                a = $h(a, 3, 2);
                if (d.length !== e.length)
                    this.j(new qK("Received " + d.length + " ad URLs but " + e.length + " metadatas"));
                else {
                    c.resources = [].concat(_.di(d.filter(function(f) {
                        return f
                    })), _.di(a.map(function(f) {
                        return "https://securepubads.g.doubleclick.net" + f
                    })));
                    c.resources.length ? (a = _.Bf("SCRIPT"),
                    a.setAttribute("type", "webbundle"),
                    gb(a, new fb(JSON.stringify(c).replace(/</g, "\\u003C"))),
                    this.W.head.removeChild(b),
                    this.W.head.appendChild(a)) : this.W.head.removeChild(b);
                    for (b = 0; b < d.length; b++)
                        c = void 0,
                        this.H(b, e[b], {
                            kind: 1,
                            url: d[b]
                        }, this.o.value, this.ba, null == (c = this.J) ? void 0 : c.value, void 0, void 0);
                    this.C(d.length - 1, this.o.value, this.ba)
                }
            } else
                this.j(Error("Lost bundle script"))
    }
    ;
    var YS = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t) {
        tk.call(this);
        e = new VS(a,f,k,c,n,p,q,t);
        J(this, e);
        J(this, new XS(a,k,h,b,c,d,l,e.j,e.o,e.C,m));
        this.l = {
            output: e.j
        }
    };
    _.P(YS, tk);
    var Fu = new _.B.Set
      , ZS = function(a, b, c) {
        var d = 0
          , e = function() {
            d = 0
        };
        return function(f) {
            d || (d = _.ca.setTimeout(e, b),
            a.apply(c, arguments))
        }
    }(function() {
        throw new pK("Reached Limit for addEventListener");
    }, 3E5)
      , $S = function(a, b, c) {
        _.T.call(this);
        this.context = a;
        this.P = b;
        this.l = c;
        this.g = [];
        this.enabled = !1;
        this.o = 0;
        this.F = new _.B.Map;
        Fu.add(this);
        this.P.info(RN(this.getName()))
    };
    _.P($S, _.T);
    var Hu = function(a) {
        a.enabled || (a.enabled = !0,
        Yn(6, a.context),
        a.C())
    };
    $S.prototype.slotAdded = function(a, b) {
        this.g.push(a);
        var c = new dR(a,this.getName());
        $t(this.l, "slotAdded", 818, c);
        this.P.info(SN(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        _.ge(b, 4, _.Vc, a)
    }
    ;
    $S.prototype.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return Ha(b.g, c)
        })
    }
    ;
    $S.prototype.addEventListener = function(a, b, c) {
        var d = this;
        c = void 0 === c ? window : c;
        if (this.o >= _.$g(JF) && 0 < _.$g(JF))
            return ZS(),
            !1;
        if (!c.IntersectionObserver && (_.H = ["impressionViewable", "slotVisibilityChanged"],
        _.x(_.H, "includes")).call(_.H, a))
            return N(this.P, GO()),
            !1;
        var e;
        if (null == (e = this.F.get(a)) ? 0 : e.has(b))
            return !1;
        this.F.has(a) || this.F.set(a, new _.B.Map);
        c = function(f) {
            f = f.detail;
            try {
                b(f)
            } catch (h) {
                d.P.error(gO(String(h), a))
            }
        }
        ;
        this.F.get(a).set(b, c);
        this.l.listen(a, c);
        this.o++;
        return !0
    }
    ;
    $S.prototype.removeEventListener = function(a, b) {
        var c, d = null == (c = this.F.get(a)) ? void 0 : c.get(b);
        if (!d || !fN(this.l, a, d))
            return !1;
        this.o--;
        return this.F.get(a).delete(b)
    }
    ;
    var ku = function(a) {
        for (var b = _.y(Fu), c = b.next(); !c.done; c = b.next())
            c.value.destroySlots(a)
    };
    var Bu = function(a, b, c, d) {
        $S.call(this, a, b, d);
        this.j = c;
        this.ads = new _.B.Map;
        this.gd = !1
    };
    _.P(Bu, $S);
    Bu.prototype.setRefreshUnfilledSlots = function(a) {
        "boolean" === typeof a && (this.gd = a)
    }
    ;
    var XO = function(a, b) {
        var c;
        return a.j.enabled && !(null == (c = a.ads.get(b)) || !c.Um)
    }
      , YO = function(a, b, c, d) {
        b = new $Q(b,a.getName());
        null != c && null != d && (b.size = [c, d]);
        $t(a.l, "slotRenderEnded", 67, b)
    };
    Bu.prototype.getName = function() {
        return "companion_ads"
    }
    ;
    Bu.prototype.slotAdded = function(a, b) {
        var c = this;
        a.listen(iN, function(d) {
            iz(d.detail, 11) && (aT(c, a).Um = !0)
        });
        $S.prototype.slotAdded.call(this, a, b)
    }
    ;
    Bu.prototype.C = function() {}
    ;
    var aT = function(a, b) {
        var c = a.ads.get(b);
        c || (c = {},
        a.ads.set(b, c),
        _.Cp(b, function() {
            return a.ads.delete(b)
        }));
        return c
    }
      , VO = function(a, b) {
        var c = bn().g
          , d = bn().Ea;
        if (a.j.enabled) {
            var e = {
                zc: 3
            };
            a.I && (e.Ud = a.I);
            a.H && (e.Vd = a.H);
            b = null != b ? b : a.g;
            c = cn(c, d);
            d = e.Ud;
            var f = e.Vd;
            d && "number" !== typeof d || f && "number" !== typeof f || a.j.refresh(c, b, e)
        } else
            (null == b ? 0 : b[0]) && a.P.error(YN(b[0].getDomId()))
    }
      , WO = function(a, b) {
        return a.g.filter(function(c) {
            return _.x(b, "includes").call(b, c.toString())
        })
    };
    var Cu = function(a, b, c) {
        $S.call(this, a, b, c)
    };
    _.P(Cu, $S);
    Cu.prototype.getName = function() {
        return "content"
    }
    ;
    Cu.prototype.C = function() {}
    ;
    var bT = _.Yw(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]), cT = _.Yw(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]), dT = new _.B.Map([[2, {
        hh: "page_level_ads"
    }], [5, {
        hh: "shoppit"
    }], [6, {
        hh: "side_rails"
    }]]), eT = function(a) {
        var b = void 0 === b ? dT : b;
        this.context = a;
        this.g = b;
        this.A = new _.B.Map;
        this.loaded = new _.B.Set
    }, gT;
    eT.prototype.load = function(a) {
        var b = _.fT(this, a), c, d = (null != (c = this.g.get(a.module)) ? c : {}).hh;
        if (!d)
            throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            d = (c = _.xm(172)) && "pagead2.googlesyndication.com" === EB((c.src || "").match(_.DB)[3] || null) ? _.af(cT, this.context.Na, d) : _.af(bT, this.context.Na, d);
            c = {};
            var e = _.$g(nI);
            e && (c.cb = e);
            d = _.x(Object, "keys").call(Object, c).length ? _.Wx(d, c) : d;
            gT(this, a);
            _.ip(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    }
    ;
    _.fT = function(a, b) {
        b = b.module;
        a.A.has(b) || a.A.set(b, new _.th);
        return a.A.get(b)
    }
    ;
    gT = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = El(a.context, 340, function(e) {
            if (a.g.has(c) && "function" === typeof e) {
                var f = a.g.get(c);
                f = (void 0 === f.tl ? [] : f.tl).map(function(h) {
                    return _.fT(a, h).promise
                });
                _.B.Promise.all(f).then(function() {
                    e.call(window, _, a)
                })
            }
        });
        Object.defineProperty(Lo(), b, {
            value: function(e) {
                if (d) {
                    var f = d;
                    d = null;
                    f(e)
                }
            },
            writable: !1,
            enumerable: !1
        })
    }
    ;
    var Wu = function(a, b) {
        W.call(this, a, 980);
        this.output = new hs;
        this.j = [];
        this.o = V(this, b)
    };
    _.P(Wu, W);
    Wu.prototype.g = function() {
        for (var a = _.y((_.H = [this.o.value, this.j.map(function(c) {
            return c.value
        })],
        _.x(_.H, "flat")).call(_.H)), b = a.next(); !b.done; b = a.next())
            Pg(b.value);
        this.output.notify()
    }
    ;
    var Ru = function(a, b) {
        W.call(this, a, 892, _.$g(eI));
        this.md = U(this);
        this.yd = U(this);
        this.ud = U(this);
        this.Pb = U(this);
        this.Nd = U(this);
        this.Qd = U(this);
        this.Dc = U(this);
        this.j = mL(this, b);
        this.Zb = U(this);
        this.jc = U(this);
        this.Kf = U(this)
    };
    _.P(Ru, W);
    Ru.prototype.g = function() {
        var a = this.j.value;
        if (!a)
            throw Error("config timeout");
        this.md.Da(_.ym(a, gA, 3));
        this.yd.Da(_.ym(a, iA, 2));
        var b = this.ud
          , c = b.G;
        var d = Ot(a, 4);
        c.call(b, d);
        b = this.Pb;
        c = b.Da;
        d = gk(a, cA, 6);
        c.call(b, d);
        b = this.Nd;
        c = b.Da;
        d = gk(a, vA, 5);
        c.call(b, d);
        this.Qd.Da(_.ym(a, uA, 7));
        var e;
        b = this.Dc;
        c = b.G;
        d = _.B.Set;
        var f;
        null == (e = _.ym(a, dA, 1)) ? f = void 0 : f = $h(e, 6, 2);
        c.call(b, new d(f || []));
        this.Zb.Da(_.ym(a, xA, 8));
        this.jc.Da(_.I(fI) ? _.ym(a, yA, 9) : null);
        this.Kf.Da(_.ym(a, jA, 10))
    }
    ;
    Ru.prototype.I = function(a) {
        this.l(a)
    }
    ;
    Ru.prototype.l = function(a) {
        this.md.ub(a);
        this.yd.ub(a);
        this.ud.G([]);
        this.Pb.G([]);
        this.Nd.G([]);
        this.Qd.aa();
        this.Zb.aa();
        this.jc.aa();
        this.Kf.aa()
    }
    ;
    var Qu = function(a, b) {
        W.call(this, a, 891);
        var c = this;
        this.j = U(this);
        this.error = void 0;
        var d = U(this);
        this.o = V(this, d);
        b(function(e, f) {
            if (f)
                c.error = f,
                d.G([]);
            else
                try {
                    if ("string" === typeof e) {
                        var h = JSON.parse(e || "[]");
                        Array.isArray(h) && d.G(h)
                    }
                } catch (k) {} finally {
                    d.Od || (c.error = Error("malformed response"),
                    d.G([]))
                }
        })
    };
    _.P(Qu, W);
    Qu.prototype.g = function() {
        if (this.error)
            throw this.error;
        this.j.G(pe(zA, this.o.value))
    }
    ;
    var hT = function(a, b) {
        W.call(this, a, 1081);
        this.xb = U(this);
        this.j = lL(this, b)
    };
    _.P(hT, W);
    hT.prototype.g = function() {
        this.j.value ? this.xb.G(this.j.value) : this.xb.aa()
    }
    ;
    var iT = new _.B.Map([[1, 5], [2, 2], [3, 3]])
      , jT = function(a, b, c, d, e, f, h, k, l) {
        W.call(this, a, 1079);
        this.W = b;
        this.googletag = c;
        this.X = d;
        this.H = e;
        this.j = f;
        this.P = h;
        this.o = k;
        this.C = l;
        U(this)
    };
    _.P(jT, W);
    jT.prototype.g = function() {
        var a = this
          , b = this.o.getAdUnitPath()
          , c = iT.get(_.If(this.o, 2, 0));
        if (b && c) {
            var d, e = null != (d = this.X) ? d : this.j.g;
            b = new EQ(this.context,this.W,b,c,!0,this.googletag.pubads(),this.googletag.display,function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }
            ,this.googletag.cmd,e,this.j,this.H,this.P,!1,this.C);
            _.er(this, b);
            b.run()
        }
    }
    ;
    var Vu = function(a, b, c, d, e, f, h) {
        W.call(this, a, 1082);
        this.googletag = b;
        this.X = c;
        this.H = d;
        this.o = e;
        this.P = f;
        this.C = U(this);
        this.j = new hT(this.context,this.C);
        this.xb = this.j.xb;
        _.er(this, this.j);
        this.J = V(this, h)
    };
    _.P(Vu, W);
    Vu.prototype.g = function() {
        if (_.I(lI)) {
            for (var a = [], b = _.y(this.J.value), c = b.next(); !c.done; c = b.next())
                switch (c = c.value,
                il(c, wA)) {
                case 5:
                    a.push(c);
                    break;
                case 8:
                    var d = c
                }
            this.C.Da(null == d ? void 0 : _.ym(d, oA, 4));
            d = new tk;
            _.er(this, d);
            a = _.y(a);
            for (b = a.next(); !b.done; b = a.next())
                b = b.value,
                c = void 0,
                J(d, new jT(this.context,document,this.googletag,null != (c = this.X) ? c : this.o.g,this.H,this.o,this.P,_.ym(b, qA, ll(b, wA, 5)),_.ym(b, oA, 4)));
            J(d, this.j);
            d.run()
        } else
            this.xb.aa()
    }
    ;
    var Ow = function(a) {
        sL.call(this, function(b, c) {
            Il(a, b, c);
            var d;
            null == (d = console) || d.error(c)
        })
    };
    _.P(Ow, sL);
    var kT = function() {
        LS.apply(this, arguments)
    };
    _.P(kT, LS);
    kT.prototype.F = function() {
        var a = this.g
          , b = a.Qj;
        a = a.mf;
        var c = MS(this);
        if (null == b ? 0 : b.length)
            if (xy) {
                b = _.y(b);
                for (var d = b.next(); !d.done; d = b.next())
                    c.sandbox.add(d.value)
            } else
                c.sandbox.add.apply(c.sandbox, _.di(b));
        a && (c.allow = a);
        NS(this, c);
        lT(this, c, this.Ua.qb);
        return c
    }
    ;
    kT.prototype.j = function() {
        return !0
    }
    ;
    var lT = function(a, b, c) {
        function d() {
            var m, n, p = null != (n = null == (m = b.contentWindow) ? void 0 : m.document) ? n : b.contentDocument;
            if (!p)
                return !1;
            na() && p.open("text/html", "replace");
            p.write(_.iy(e));
            var q, t, w;
            if (Ex(null != (w = null == (q = b.contentWindow) ? void 0 : null == (t = q.location) ? void 0 : t.href) ? w : "", "#")) {
                var v, A;
                null == (v = b.contentWindow) || null == (A = v.history) || A.replaceState(null, "", "#" + Math.random())
            }
            p.close();
            return !0
        }
        var e = iv(ak(c));
        if (!d()) {
            c = a.g;
            var f = c.W
              , h = c.P
              , k = c.slotId
              , l = new MutationObserver(function() {
                d() && (N(h, TO(), k),
                l.disconnect())
            }
            );
            _.Cp(a, function() {
                return void l.disconnect()
            });
            l.observe(f, {
                childList: !0,
                subtree: !0
            });
            N(h, SO(), k)
        }
    };
    var Kv = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v, A, z, D, E, G, Q, R, L, X, da, Y) {
        W.call(this, a, 680);
        this.slotId = b;
        this.L = c;
        this.P = d;
        this.M = e;
        this.Aa = f;
        this.eb = h;
        this.pb = k;
        this.Qa = l;
        this.isBackfill = m;
        this.lc = n;
        this.ga = p;
        this.B = q;
        this.j = U(this);
        this.C = U(this);
        this.o = kL(this);
        this.J = V(this, t);
        this.ia = V(this, w);
        nL(this, v);
        this.U = V(this, A);
        this.H = V(this, z);
        this.O = V(this, D);
        nL(this, G);
        this.na = lL(this, E);
        nL(this, Q);
        this.ha = V(this, R);
        nL(this, L);
        da && nL(this, da);
        X && (this.da = lL(this, X));
        Y && nL(this, Y)
    };
    _.P(Kv, W);
    Kv.prototype.g = function() {
        var a = this.J.value;
        if (0 === a.kind && null == a.qb)
            throw new qK("invalid html");
        var b, c, d;
        a: {
            var e = this.context
              , f = {
                W: document,
                slotId: this.slotId,
                L: this.L,
                P: this.P,
                M: this.M,
                Aa: this.Aa,
                size: this.O.value,
                Tf: this.U.value,
                rd: this.H.value,
                Qa: this.Qa,
                pb: this.pb,
                Qj: this.na.value,
                isBackfill: this.isBackfill,
                lc: this.lc,
                mf: this.ha.value,
                Sn: null == (b = this.ga) ? void 0 : _.O(b, 14),
                dg: null == (c = this.da) ? void 0 : c.value,
                eb: this.eb,
                Uj: _.I(VI) ? null == (d = this.ga) ? void 0 : gB(d) : void 0
            };
            b = this.ia.value;
            c = a.kind;
            switch (c) {
            case 0:
                a = new (b ? eS : kT)(e,a,f);
                break a;
            case 2:
                a = new OS(e,a,f);
                break a;
            default:
                db(c)
            }
            a = void 0
        }
        _.er(this, a);
        e = a.render();
        mT(this, this.B, e);
        this.B.top && this.B.top !== this.B && _.Wk(this.B.top) && mT(this, this.B.top, e);
        this.o.notify();
        this.j.G(e);
        this.C.G(a.j())
    }
    ;
    var mT = function(a, b, c) {
        Ep(a, a.id, b, "message", function(d) {
            c.contentWindow === d.source && $t(a.slotId, qr, 824, d)
        })
    };
    var nv = function(a, b, c, d, e) {
        W.call(this, a, 720);
        this.format = b;
        this.ra = c;
        this.ob = d;
        this.height = e;
        this.output = U(this)
    };
    _.P(nv, W);
    nv.prototype.g = function() {
        if (null == this.height)
            this.output.aa();
        else {
            var a = Math.round(.3 * this.ra), b;
            2 !== this.format && 3 !== this.format || null == (b = this.ob) || !_.O(b, 12, !1) || 0 >= a || this.height <= a ? this.output.G(this.height) : this.output.G(a)
        }
    }
    ;
    var yv = function(a, b, c, d, e, f, h, k, l, m, n, p) {
        W.call(this, a, 674);
        this.slotId = b;
        this.X = c;
        this.Ea = d;
        this.W = f;
        this.L = h;
        this.pb = n;
        this.output = U(this);
        this.H = 2 === e || 3 === e;
        this.j = V(this, k);
        this.C = V(this, l);
        this.o = lL(this, m);
        p && nL(this, p)
    };
    _.P(yv, W);
    yv.prototype.g = function() {
        var a = uq(this.X, this.Ea)
          , b = fn(this.slotId, this.W) || Zp(this.j.value, on(this.slotId), a);
        this.C.value && !a && (b.style.display = "inline-block");
        this.H ? rN(this.L, this.slotId, function() {
            return void _.xB(b)
        }) : _.Cp(this, function() {
            return void _.xB(b)
        });
        var c;
        a = jv(this.X, this.Ea, this.j.value, null == (c = this.o.value) ? void 0 : c.height, this.pb);
        0 < a && (b.style.paddingTop = a + "px");
        this.output.G(b)
    }
    ;
    var xv = ti(674, function(a, b) {
        var c = a.Tf
          , d = a.yb;
        a = a.size;
        var e = b.slotId
          , f = b.uc
          , h = b.pb
          , k = b.X
          , l = b.Ea
          , m = b.L
          , n = b.W;
        b = b.ge;
        var p = uq(k, l)
          , q = fn(e, n) || Zp(c, on(e), p);
        d && !p && (q.style.display = "inline-block");
        2 === f || 3 === f ? rN(m, e, function() {
            return void _.xB(q)
        }) : _.Cp(b, function() {
            return void _.xB(q)
        });
        c = jv(k, l, c, null == a ? void 0 : a.height, h);
        0 < c && (q.style.paddingTop = c + "px");
        return {
            rd: q
        }
    }, {
        rd: void 0
    });
    var lv = function(a, b) {
        W.call(this, a, 859);
        this.B = b;
        this.output = U(this)
    };
    _.P(lv, W);
    lv.prototype.g = function() {
        this.output.G(!_.Wk(this.B.top))
    }
    ;
    var Fv = function(a, b, c) {
        W.call(this, a, 840);
        this.format = b;
        this.W = c;
        this.output = U(this)
    };
    _.P(Fv, W);
    Fv.prototype.g = function() {
        var a = []
          , b = this.W;
        b = void 0 === b ? document : b;
        var c;
        null != (c = b.featurePolicy) && (_.H = c.features(),
        _.x(_.H, "includes")).call(_.H, "attribution-reporting") && a.push("attribution-reporting");
        switch (this.format) {
        case 5:
        case 4:
        case 7:
            a.push("autoplay")
        }
        a.length ? this.output.G(a.join(";")) : this.output.G("")
    }
    ;
    var Yv = function(a, b, c, d) {
        W.call(this, a, 1207);
        this.Aa = c;
        this.slotId = d;
        nL(this, b)
    };
    _.P(Yv, W);
    Yv.prototype.g = function() {
        $t(this.Aa, "impressionViewable", 715, new aR(this.slotId,"publisher_ads"))
    }
    ;
    var Xv = function(a, b, c, d) {
        rR.call(this, a, b, c);
        nL(this, d)
    };
    _.P(Xv, rR);
    var Tv = function(a, b, c, d, e, f) {
        f = void 0 === f ? kv : f;
        W.call(this, a, 783);
        var h = this;
        this.slotId = b;
        this.W = d;
        this.Aa = e;
        this.C = f;
        this.j = this.o = -1;
        this.J = _.Kz(function() {
            $t(h.Aa, "slotVisibilityChanged", 716, new bR(h.slotId,"publisher_ads",h.j))
        }, 200);
        this.H = V(this, c);
        var k = new hs;
        gN(this.slotId).then(function() {
            return void k.notify()
        });
        nL(this, k)
    };
    _.P(Tv, W);
    Tv.prototype.g = function() {
        var a = this
          , b = this.C(El(this.context, this.id, function(c) {
            c = _.y(c);
            for (var d = c.next(); !d.done; d = c.next())
                a.o = 100 * d.value.intersectionRatio,
                _.x(Number, "isFinite").call(Number, a.o) && nT(a)
        }));
        b && (b.observe(this.H.value),
        Ep(this, this.id, this.W, "visibilitychange", function() {
            nT(a)
        }),
        _.Cp(this, function() {
            b.disconnect()
        }))
    }
    ;
    var nT = function(a) {
        var b = Math.floor(KK(a.W) ? 0 : a.o);
        if (0 > b || 100 < b || b === a.j ? 0 : -1 !== a.j || 0 !== b)
            a.j = b,
            a.J()
    };
    var Dv = function(a, b, c, d, e, f) {
        W.call(this, a, 719);
        this.X = b;
        this.Ea = c;
        this.Uh = d;
        this.output = U(this);
        this.j = V(this, e);
        this.o = V(this, f)
    };
    _.P(Dv, W);
    Dv.prototype.g = function() {
        var a = this.j.value.kind;
        switch (a) {
        case 0:
            this.j.value.qb ? this.o.value ? (a = new Jn,
            a = _.Fh(a, 3, this.Uh),
            _.O(Xn([a, this.X.Sc(), this.Ea.Sc()]), 3) ? this.output.G(AM) : this.output.aa()) : this.output.aa() : this.output.aa();
            break;
        case 2:
            this.output.aa();
            break;
        default:
            db(a)
        }
    }
    ;
    var oT = function(a, b, c, d, e, f) {
        W.call(this, a, 1119);
        this.slotId = b;
        this.j = c;
        this.documentElement = d;
        this.L = e;
        this.uc = f;
        this.output = U(this)
    };
    _.P(oT, W);
    oT.prototype.g = function() {
        var a = _.Bf("INS");
        a.id = this.j;
        Sm(this.uc) && _.Jp(a, {
            display: "none"
        });
        this.documentElement.appendChild(a);
        var b = function() {
            return void _.xB(a)
        };
        (_.H = [2, 3],
        _.x(_.H, "includes")).call(_.H, this.uc) ? rN(this.L, this.slotId, b) : _.Cp(this, b);
        this.output.G(a)
    }
    ;
    var pT = function(a, b, c, d, e) {
        W.call(this, a, 1120);
        this.H = b;
        this.uc = c;
        this.o = d;
        this.j = e;
        this.output = U(this);
        a = this.j;
        if (!_.La(a) || !_.La(a) || 1 !== a.nodeType || a.namespaceURI && "http://www.w3.org/1999/xhtml" !== a.namespaceURI)
            this.C = V(this, this.j)
    };
    _.P(pT, W);
    pT.prototype.g = function() {
        var a, b, c = null != (b = null == (a = this.C) ? void 0 : a.value) ? b : this.j;
        if (!(_.H = [2, 3],
        _.x(_.H, "includes")).call(_.H, this.uc)) {
            a = _.y(_.x(Array, "from").call(Array, c.childNodes));
            for (b = a.next(); !b.done; b = a.next())
                b = b.value,
                1 === b.nodeType && b.id !== this.H && _.xB(b);
            this.o || (c.style.display = "")
        }
        this.output.G(c)
    }
    ;
    var ov = function(a, b, c, d, e, f, h, k, l) {
        tk.call(this);
        c ? (a = new pT(a,e,h,l,c),
        J(this, a),
        a = a.output) : Rm(h) ? (a = new oT(a,b,d,f,k,h),
        J(this, a),
        a = a.output) : (b = new Gr(a,b,hN,function(m) {
            return m.detail
        }
        ),
        J(this, b),
        a = new pT(a,e,h,l,b.output),
        J(this, a),
        a = a.output);
        this.output = a
    };
    _.P(ov, tk);
    var qT = function(a, b) {
        var c = bn();
        this.context = a;
        this.L = b;
        this.g = c
    }
      , rT = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v, A) {
        var z = document
          , D = window;
        e || f || AN(a.L, d);
        var E = cw(a.context, b, a.g, c, d, e, f, h, k, l, m, z, n, p, q, t, w, function() {
            AN(a.L, d);
            zN(a.L, d, E)
        }, v, A);
        f || zN(a.L, d, E);
        _.Cp(d, function() {
            AN(a.L, d)
        });
        D.top !== D && D.addEventListener("pagehide", function(G) {
            G.persisted || AN(a.L, d)
        });
        E.run()
    };
    var sT = function(a, b, c, d) {
        W.call(this, a, 884);
        this.Ga = b;
        this.Eb = c;
        this.o = U(this);
        this.j = V(this, d)
    };
    _.P(sT, W);
    sT.prototype.g = function() {
        QP(this.Eb, _.Zn(this.Ga, "__gads", this.j.value));
        ao(20, this.context, this.Ga, this.j.value);
        ao(2, this.context, this.Ga, this.j.value);
        this.o.G(Qg())
    }
    ;
    var tT = qi(1241, function(a, b) {
        var c, d, e;
        return _.gf(function(f) {
            c = b;
            d = c.ge;
            e = _.xf();
            return f.return(new _.B.Promise(function(h) {
                var k = function() {
                    h(_.xf() - e)
                };
                switch (window.navigator.onLine) {
                case !0:
                    h(0);
                    break;
                case !1:
                    window.addEventListener("online", k, {
                        once: !0
                    });
                    _.Cp(d, function() {
                        return void window.removeEventListener("online", k)
                    });
                    break;
                default:
                    h(-1)
                }
            }
            ))
        })
    });
    var dw = 0
      , uT = new _.Vm(-9,-9);
    var hw = new _.B.Set([function(a, b) {
        var c = a.ma.context.pvsid;
        a = a.ja.M.X;
        b.set("pvsid", {
            value: c
        }).set("correlator", {
            value: dt(a, 26)
        })
    }
    , function(a, b) {
        var c = a.ja.M.X;
        var d = a.Vn;
        a = d.Vd;
        d = d.Ud;
        var e = _.O(c, 21);
        b = b.set("hxva", {
            value: e ? 1 : null
        }).set("cmsid", {
            value: e ? ik(c, 23) : null
        }).set("vid", {
            value: e ? ik(c, 22) : null
        }).set("pod", {
            value: d
        }).set("ppos", {
            value: a
        });
        a = b.set;
        c = gz(c, 29);
        a.call(b, "scor", {
            value: null == c ? void 0 : c
        })
    }
    , function(a, b) {
        var c = a.ma.Dg;
        var d = a.ja;
        var e = d.Z;
        var f = d.M.V;
        a = a.Bh;
        var h = a.Zl;
        var k = a.Sl;
        b.set("eid", {
            value: c
        }).set("debug_experiment_id", {
            value: $D().split(",")
        }).set("expflags", {
            value: _.xm(253) ? ah(MF) || null : null
        }).set("pied", {
            value: function() {
                var l = new wL
                  , m = !1
                  , n = !1;
                h && (m = !0,
                pk(l, 1, oA, h));
                var p = e.map(function(t) {
                    var w = new uL, v, A;
                    null == (v = f[t.getDomId()]) ? A = void 0 : A = gk(v, oA, 27);
                    t = A;
                    if (null == t || !t.length)
                        return w;
                    n = m = !0;
                    t = _.y(t);
                    for (v = t.next(); !v.done; v = t.next())
                        pk(w, 1, oA, v.value);
                    return w
                });
                n && _.sm(l, 2, p);
                p = _.y(null != k ? k : []);
                for (var q = p.next(); !q.done; q = p.next())
                    pk(l, 1, oA, q.value),
                    m = !0;
                return m ? tb(l.g(), 3) : null
            }()
        })
    }
    , function(a, b) {
        var c = a.ma;
        a = c.context;
        c = c.Hb;
        b.set("output", {
            value: "ldjh"
        }).set("gdfp_req", {
            value: 1
        }).set("vrg", {
            value: a.tf
        }).set("ptt", {
            value: 17
        }).set("impl", {
            value: c ? "fifs" : "fif"
        })
    }
    , function(a, b) {
        var c = a.ja.M.X;
        a = a.ma.ba;
        c = nw(c) || new ZO;
        var d = _.If(c, 6, 2);
        b = b.set("rdp", {
            value: _.O(c, 1) ? "1" : null
        }).set("ltd", {
            value: _.O(c, 9) ? "1" : null
        }).set("ltd_cs", {
            value: _.xm(221) && !Wn(a, 3) ? "1" : null
        }).set("gdpr_consent", {
            value: qz(a, 2)
        }).set("gdpr", {
            value: Wn(a, 3) ? _.O(a, 3) ? "1" : "0" : null,
            options: {
                Fa: !0
            }
        }).set("addtl_consent", {
            value: qz(a, 4)
        }).set("tcfe", {
            value: rz(a, 7)
        }).set("us_privacy", {
            value: qz(a, 1)
        }).set("npa", {
            value: _.O(a, 6) || _.O(c, 8) ? 1 : null
        }).set("puo", {
            value: _.I(kI) && _.O(c, 13) ? 1 : null
        }).set("tfua", {
            value: 2 !== d ? d : null,
            options: {
                Fa: !0
            }
        }).set("tfcd", {
            value: null != _.zc(_.Mh(c, 5)) ? _.If(c, 5, 0) : null,
            options: {
                Fa: !0
            }
        }).set("trt", {
            value: null != _.zc(_.Mh(c, 10)) ? _.If(c, 10, 0) : null,
            options: {
                Fa: !0
            }
        }).set("tad", {
            value: _.I(gw) && Wn(a, 8) ? _.O(a, 8) ? "1" : "0" : null,
            options: {
                Fa: !0
            }
        }).set("gpp", {
            value: qz(a, 11)
        });
        d = b.set;
        a = hz(a, 10);
        d.call(b, "gpp_sid", {
            value: a.join(",") || void 0
        }).set("scd", {
            value: Wn(c, 14) ? "1" : null
        })
    }
    , function(a, b) {
        var c = a.ja;
        var d = c.M;
        var e = c.Z;
        var f = c.Qg;
        var h = a.ma.B;
        var k = e.map(function(m) {
            return d.V[m.getDomId()]
        })
          , l = [];
        a = e.map(function(m) {
            return m.getAdUnitPath().replace(/,/g, ":").split("/").map(function(n) {
                if (!n)
                    return "";
                var p = _.x(l, "findIndex").call(l, function(q) {
                    return q === n
                });
                return 0 <= p ? p : l.push(n) - 1
            }).join("/")
        });
        b.set("iu_parts", {
            value: l
        }).set("enc_prev_ius", {
            value: a
        }).set("prev_iu_szs", {
            value: k.map(function(m) {
                return Pm(m)
            })
        }).set("fluid", {
            value: function() {
                var m = !1
                  , n = k.map(function(p) {
                    p = (_.H = Mm(p),
                    _.x(_.H, "includes")).call(_.H, "fluid");
                    m || (m = p);
                    return p ? "height" : "0"
                });
                return m ? n : null
            }()
        }).set("ifi", {
            value: function() {
                var m = Up(h);
                if (!f) {
                    m += 1;
                    var n = h
                      , p = e.length;
                    p = void 0 === p ? 1 : p;
                    n = fC(qf(n)) || n;
                    n.google_unique_id = (n.google_unique_id || 0) + p
                }
                return m
            }()
        }).set("didk", {
            value: _.I(tI) ? nq(e, function(m) {
                return _.Xg(m.getDomId())
            }) : null,
            options: _.x(Object, "assign").call(Object, {}, {
                Ya: "~"
            }, {
                Bd: !0
            })
        })
    }
    , function(a, b) {
        var c = a.ja;
        a = c.Z;
        c = c.M;
        var d = c.X;
        var e = c.V;
        b.set("sfv", {
            value: iP ? iP : iP = En()
        }).set("fsfs", {
            value: nq(a, function(f) {
                f = e[f.getDomId()];
                var h;
                return Number(null != (h = null == f ? void 0 : tq(f, 12)) ? h : iz(d, 13))
            }),
            options: {
                Ya: ",",
                ee: 0,
                Bd: !0
            }
        }).set("fsbs", {
            value: nq(a, function(f) {
                f = e[f.getDomId()].Sc();
                var h = d.Sc(), k;
                return (null != (k = null == f ? void 0 : tq(f, 3)) ? k : null == h ? 0 : _.O(h, 3)) ? 1 : 0
            }),
            options: {
                ee: 0,
                Bd: !0
            }
        })
    }
    , function(a, b) {
        var c = a.ma.L;
        var d = a.ja;
        a = d.Z;
        var e = d.Qg;
        b.set("rcs", {
            value: nq(a, function(f) {
                if (!e) {
                    var h = c.g.get(f);
                    h && h.Mj++
                }
                return xN(c, f)
            }),
            options: {
                ee: 0,
                Bd: !0
            }
        })
    }
    , function(a, b) {
        var c = a.ja;
        var d = c.M.V;
        c = c.Z;
        a = a.ma.Hb;
        d = d[c[0].getDomId()];
        b.set("click", {
            value: !a && d.getClickUrl() ? ik(d, 7) : null
        })
    }
    , function(a, b, c) {
        var d = a.ja;
        var e = d.Z;
        var f = d.M.V;
        a = a.ma;
        var h = a.ba;
        var k = a.B;
        c = void 0 === c ? function(p, q) {
            return Dg(p, q)
        }
        : c;
        a = e.map(function(p) {
            return f[p.getDomId()]
        });
        var l, m, n;
        b.set("ists", {
            value: lq(a, Dr) || null
        }).set("fas", {
            value: nq(a, function(p) {
                return Iq(Cr(p))
            }),
            options: {
                ee: 0,
                Bd: !0
            }
        }).set("itsi", {
            value: e.some(function(p) {
                var q;
                return !BQ(p) && 5 === (null == (q = f[p.getDomId()]) ? void 0 : Cr(q))
            }) ? function() {
                var p = c(h, k);
                if (!p)
                    return _.I(_.TF) ? -1 : 1;
                p = Br(_.Si(p, 604800, "__lsv__"));
                return isFinite(p) ? Math.floor(Math.max((Date.now() - p) / 6E4, 1)) : null
            }() : null
        }).set("fsapi", {
            value: lq(a, function(p) {
                return 5 === Cr(p)
            }) || null
        }).set("ifs", {
            value: null != (n = null == (l = (_.H = _.x(Object, "values").call(Object, f),
            _.x(_.H, "find")).call(_.H, function(p) {
                return Qh(p, yP, 29)
            })) ? void 0 : null == (m = _.ym(l, yP, 29)) ? void 0 : fl(m)) ? n : null
        }).set("dap", {
            value: function() {
                if (!_.I(fG) || e.some(function(q) {
                    var t;
                    return BQ(q) || !(_.H = [2, 3],
                    _.x(_.H, "includes")).call(_.H, null == (t = f[q.getDomId()]) ? void 0 : Cr(t))
                }))
                    return null;
                var p = Br(_.Si(c(h, k), 604800, "__lsa__"));
                return isFinite(p) ? Math.floor(Math.max((Date.now() - p) / 6E4, 1)) <= _.$g(dG) ? 3 : null : null
            }()
        })
    }
    , function(a, b) {
        var c = a.ja;
        a = c.Z;
        var d = c.M.V;
        a = a.map(function(e) {
            return d[e.getDomId()]
        });
        b.set("rbvs", {
            value: lq(a, function(e) {
                return 4 === Cr(e)
            }) || null
        })
    }
    , function(a, b) {
        var c = a.ja;
        var d = c.M;
        var e = c.Z;
        var f = c.zc;
        c = c.Sg;
        var h = a.ma;
        a = h.isSecureContext;
        h = h.B;
        var k = b.set
          , l = d.X
          , m = d.V
          , n = new xg;
        n.set(0, 1 !== f);
        m = m[e[0].getDomId()];
        n.set(1, !!_.O(m, 17));
        n.set(2, cr(e, d));
        n.set(3, _.O(l, 27) || !1);
        n.set(4, 3 === f);
        n.set(5, !c);
        d = zg(n);
        k.call(b, "eri", {
            value: d
        }).set("gct", {
            value: Yq("google_preview", h)
        }).set("sc", {
            value: a ? 1 : 0,
            options: {
                Fa: !0
            }
        })
    }
    , function(a, b) {
        a = a.ma;
        var c = a.ba;
        var d = a.Ga;
        var e = _.Zn(d, "__gads", c);
        a = "1" === _.Zn(d, "__gpi_opt_out", c) ? "1" : null;
        b = b.set("cookie", {
            value: e,
            options: {
                Fa: !0
            }
        });
        var f = b.set;
        if (e = !e)
            e = Jg(d.B) ? !!Cg(c) : !1;
        b = f.call(b, "cookie_enabled", {
            value: e ? "1" : null
        });
        e = b.set;
        c = (c = _.Zn(d, "__gpi", c)) && !_.x(c, "includes").call(c, "&") ? c : null;
        e.call(b, "gpic", {
            value: c
        }).set("pdopt", {
            value: a
        })
    }
    , function(a, b) {
        var c = a.ma.B;
        a = $q(a.ja.M.X.Va());
        var d = c.document
          , e = d.domain;
        b.set("cdm", {
            value: (a || Tm(c)) === d.URL ? "" : e
        })
    }
    , function(a, b) {
        a = a.ma.B;
        b.set("arp", {
            value: Gp(a) ? 1 : null
        }).set("abxe", {
            value: _.Wk(a.top) || pw(a.IntersectionObserver) ? 1 : null
        })
    }
    , function(a, b) {
        var c = a.ja.M.X;
        a = a.ma.B;
        c = $q(c.Va());
        b.set("dt", {
            value: (new Date).getTime()
        });
        if (!c) {
            try {
                var d = Math.round(Date.parse(a.document.lastModified) / 1E3) || null
            } catch (e) {
                d = null
            }
            b.set("lmt", {
                value: d
            })
        }
    }
    , function(a, b) {
        var c = a.ja;
        var d = c.M;
        c = c.Z;
        a = a.ma.B;
        for (var e = Em(!0, a), f = d.X, h = a.document, k = d.V, l = [], m = [], n = _.y(c), p = n.next(); !p.done; p = n.next()) {
            var q = p.value
              , t = k[q.getDomId()]
              , w = uq(f, t);
            p = void 0;
            q = null != (p = mn(q, t, h, w)) ? p : uT;
            l.push(Math.round(q.x));
            m.push(Math.round(q.y))
        }
        e && (d.Wd = e);
        f = wg(a) ? null : Em(!1, a);
        try {
            var v = a.top;
            var A = Ys(v.document, v)
        } catch (z) {
            A = new _.Vm(-12245933,-12245933)
        }
        b.set("adxs", {
            value: l,
            options: {
                Fa: !0
            }
        }).set("adys", {
            value: m,
            options: {
                Fa: !0
            }
        }).set("biw", {
            value: e ? e.width : null
        }).set("bih", {
            value: e ? e.height : null
        }).set("isw", {
            value: e ? null == f ? void 0 : f.width : null
        }).set("ish", {
            value: e ? null == f ? void 0 : f.height : null
        }).set("scr_x", {
            value: Math.round(A.x),
            options: {
                Fa: !0
            }
        }).set("scr_y", {
            value: Math.round(A.y),
            options: {
                Fa: !0
            }
        }).set("btvi", {
            value: ew(c, a, d),
            options: {
                Fa: !0,
                Ya: "|"
            }
        })
    }
    , function(a, b) {
        var c = a.ja.Z;
        a = a.ma;
        var d = a.L;
        var e = a.B;
        b.set("ucis", {
            value: c.map(function(f) {
                (f = d.g.get(f)) ? (null != f.lc || (f.lc = e === e.top ? (++d.C).toString(36) : ry()),
                f = f.lc) : f = "";
                return f
            }),
            options: {
                Ya: "|"
            }
        }).set("oid", {
            value: 2
        })
    }
    , function(a, b) {
        a = a.ja;
        var c = a.Z;
        a = a.M;
        var d = a.X;
        var e = a.V;
        a = new _.B.Map;
        var f = Array(c.length)
          , h = !1;
        d = _.y(d.Va());
        for (var k = d.next(); !k.done; k = d.next())
            if (k = k.value,
            "tag_origin" === _.u(k, 1)) {
                h = !0;
                for (var l = 0; l < c.length; l++)
                    f[l] = [].concat(_.di(nm(k)))
            } else
                a.set(_.u(k, 1), [nm(k)[0]]);
        for (d = 0; d < c.length; d++)
            if (k = e[c[d].getDomId()])
                for (k = _.y(k.Va()),
                l = k.next(); !l.done; l = k.next()) {
                    l = l.value;
                    var m = _.u(l, 1);
                    if ("tag_origin" === _.u(l, 1)) {
                        h = !0;
                        var n = m = void 0;
                        (m = f)[n = d] || (m[n] = []);
                        f[d].push.apply(f[d], _.di(nm(l)))
                    } else
                        n = a.get(m) || [],
                        l = nm(l)[0],
                        1 === c.length ? n[0] = l : l !== n[0] && (n[d + 1] = l),
                        a.set(m, n)
                }
        c = [];
        e = _.y(_.x(a, "keys").call(a));
        for (d = e.next(); !d.done; d = e.next())
            k = d.value,
            d = xn()[k],
            k = a.get(k),
            d && k && "to" !== d && (1 < k.length ? (k = k.map(function(p) {
                return encodeURIComponent(p || "")
            }).join(),
            c.push(d + "," + k)) : 1 === k.length && "url" !== d && b.set(d, {
                value: k[0]
            }));
        c.length && b.set("sps", {
            value: c,
            options: {
                Ya: "|"
            }
        });
        b.set("tos", {
            value: h ? f.map(function(p) {
                return _.x(Array, "from").call(Array, new _.B.Set(p)).join("+")
            }) : void 0,
            options: {
                Ya: "~"
            }
        })
    }
    , function(a, b) {
        var c = a.ma;
        a = c.context;
        var d = c.B;
        var e, f, h, k, l, m, n;
        b.set("u_his", {
            value: rC(d)
        }).set("u_h", {
            value: null == (e = d.screen) ? void 0 : e.height
        }).set("u_w", {
            value: null == (f = d.screen) ? void 0 : f.width
        }).set("u_ah", {
            value: null == (h = d.screen) ? void 0 : h.availHeight
        }).set("u_aw", {
            value: null == (k = d.screen) ? void 0 : k.availWidth
        }).set("u_cd", {
            value: null == (l = d.screen) ? void 0 : l.colorDepth
        }).set("u_sd", {
            value: sK(d)
        }).set("u_tz", {
            value: -(new Date).getTimezoneOffset()
        }).set("dmc", {
            value: null != (n = null == (m = d.navigator) ? void 0 : m.deviceMemory) ? n : null
        }).set("bc", {
            value: Ag(d)
        }).set("nvt", {
            value: sh(d)
        }).set("bz", {
            value: function() {
                var p = _.$g(wF);
                return 0 === p ? null : $B(d, 2 === p)
            }()
        }).set("tl", {
            value: _.I(vI) ? Kl(a, 1232, function() {
                var p;
                var q;
                if (q = oa()) {
                    var t;
                    q = null == (p = d.document) ? void 0 : null == (t = p.documentElement) ? void 0 : t.classList;
                    q = !!((null == q ? 0 : q.contains("translated-rtl")) || (null == q ? 0 : q.contains("translated-ltr")))
                }
                p = q ? d.document.documentElement.lang : void 0;
                return p
            }, !0) : null
        })
    }
    , function(a, b) {
        (a = _.xm(251)) && b.set("uach", {
            value: Ey(a, 3)
        })
    }
    , function(a, b) {
        a = a.ma;
        if (!a.hc) {
            var c;
            if (a = null == (c = a.B.navigator) ? void 0 : c.userActivation) {
                c = 0;
                if (null == a ? 0 : a.hasBeenActive)
                    c |= 1;
                if (null == a ? 0 : a.isActive)
                    c |= 2
            } else
                c = void 0;
            _.I(sI) ? void 0 !== c && b.set("uas", {
                value: c,
                options: {
                    Fa: !0
                }
            }) : c && b.set("uas", {
                value: c
            })
        }
    }
    , function(a, b) {
        var c = a.ma;
        var d = c.B;
        var e = c.L;
        c = c.Hb;
        a = a.ja;
        var f = a.Z;
        a = a.M;
        var h = a.X;
        var k = a.V;
        a = Zq("google_preview", d);
        var l = d.document
          , m = a ? ar(l.URL) : l.URL;
        l = a ? ar(l.referrer) : l.referrer;
        a = !1;
        if (c)
            c = $q(h.Va());
        else {
            var n;
            c = null != (n = $q(k[f[0].getDomId()].Va())) ? n : $q(h.Va())
        }
        if (null != c) {
            var p = m;
            wg(d) || (l = "",
            a = !0)
        } else
            c = m;
        n = br(d);
        b.set("nhd", {
            value: n || null
        }).set("url", {
            value: c
        }).set("loc", {
            value: null !== p && p !== c ? p : null
        }).set("ref", {
            value: l
        });
        if (n) {
            p = b.set;
            var q, t;
            n = _.Wk(d.top) && (null == (q = d.top) ? void 0 : null == (t = q.location) ? void 0 : t.href);
            var w;
            q = null == (w = d.location) ? void 0 : w.ancestorOrigins;
            d = nl(d) || "";
            w = (null == q ? void 0 : q[q.length - 1]) || "";
            d = (d = n || d || w) ? a ? EB(d.match(_.DB)[3] || null) : d : null;
            p.call(b, "top", {
                value: d
            }).set("etu", {
                value: e.Yb
            })
        }
    }
    , function(a, b) {
        a = a.ma.context.pvsid;
        b.set("rumc", {
            value: _.I(aJ) || _.Ng(Gl).g ? a : null
        }).set("rume", {
            value: _.I($I) ? 1 : null
        })
    }
    , function(a, b) {
        b.set("vis", {
            value: _.gs(a.ma.B.document)
        })
    }
    , function(a, b) {
        var c = a.ja;
        var d = c.Z;
        var e = c.M;
        c = e.X;
        e = e.V;
        a = a.ma.B;
        var f = bq(d, e, c);
        e = eq(d, f, a);
        c = e.Om;
        e = e.Dn;
        var h = gq(d, f, a)
          , k = h.Ol;
        h = h.Lm;
        var l = !1;
        d = d.map(function(n) {
            var p;
            n = null != (p = f.get(n)) ? p : 0;
            if (0 === n)
                return null;
            l = !0;
            return 2 === n ? "1" : "0"
        });
        var m;
        b.set("aee", {
            value: l ? d : null,
            options: {
                Ya: "|"
            }
        }).set("psz", {
            value: c,
            options: {
                Ya: "|"
            }
        }).set("msz", {
            value: e,
            options: {
                Ya: "|"
            }
        }).set("fws", {
            value: k,
            options: {
                Fa: !0
            }
        }).set("ohw", {
            value: h,
            options: {
                Fa: !0
            }
        }).set("efat", {
            value: "#flexibleAdSlotTest" === (null == (m = a.location) ? void 0 : m.hash) ? "1" : null
        })
    }
    , function(a, b) {
        b.set("psts", {
            value: wN(a.ma.L, a.ja.Z)
        })
    }
    , function(a, b) {
        var c = a.ma;
        a = c.ba;
        c = c.B;
        var d = c.document.domain;
        var e = Cg(a) ? "null" !== c.origin ? c.document.cookie : null : null;
        var f = null != e ? e : ""
          , h = c.history.length
          , k = c.screen
          , l = c.document.referrer;
        if (qf())
            var m = window.gaGlobal || {};
        else {
            var n = Math.round((new Date).getTime() / 1E3)
              , p = c.google_analytics_domain_name;
            d = "undefined" === typeof p ? vg("auto", d) : vg(p, d);
            var q = -1 < f.indexOf("__utma=" + d + ".")
              , t = -1 < f.indexOf("__utmb=" + d);
            (e = (fC() || window).gaGlobal) || (e = {},
            (fC() || window).gaGlobal = e);
            var w = !1;
            if (q) {
                var v = f.split("__utma=" + d + ".")[1].split(";")[0].split(".");
                t ? e.sid = String(v[3]) : e.sid || (e.sid = String(n));
                e.vid = v[0] + "." + v[1];
                e.from_cookie = !0
            } else {
                e.sid || (e.sid = String(n));
                if (!e.vid) {
                    w = !0;
                    t = Math.round(2147483647 * Math.random());
                    try {
                        v = UJ.javaEnabled()
                    } catch (A) {
                        v = !1
                    }
                    v = [UJ.appName, UJ.version, UJ.language ? UJ.language : UJ.browserLanguage, UJ.platform, UJ.userAgent, v ? 1 : 0].join("");
                    k ? v += k.width + "x" + k.height + k.colorDepth : _.ca.g && _.ca.g.Mk && (k = _.ca.g.Mk.ip.rp().sp(),
                    v += k.screen.width + "x" + k.screen.height);
                    v = v + f + (l || "");
                    for (l = v.length; 0 < h; )
                        v += h-- ^ l++;
                    e.vid = (t ^ ug(v) & 2147483647) + "." + n
                }
                e.from_cookie || (e.from_cookie = !1)
            }
            if (!e.cid) {
                b: for (n = 999,
                p && (p = 0 === p.indexOf(".") ? p.substr(1) : p,
                n = p.split(".").length),
                p = 999,
                f = f.split(";"),
                v = 0; v < f.length; v++)
                    if (l = VJ.exec(f[v]) || WJ.exec(f[v]) || XJ.exec(f[v])) {
                        k = parseInt(l[1], 10) || 0;
                        if (k === n) {
                            m = l[2];
                            break b
                        }
                        k < p && (p = k,
                        m = l[2])
                    }
                w && m && -1 !== m.search(/^\d+\.\d+$/) ? (e.vid = m,
                e.from_cookie = !0) : m !== e.vid && (e.cid = m)
            }
            e.dh = d;
            e.hid || (e.hid = Math.round(2147483647 * Math.random()));
            m = e
        }
        f = m;
        m = f.vid;
        d = f.sid;
        e = f.hid;
        w = f.from_cookie;
        f = f.cid;
        w && !Cg(a) || b.set("ga_vid", {
            value: m
        }).set("ga_sid", {
            value: d
        }).set("ga_hid", {
            value: e
        }).set("ga_fc", {
            value: w
        }).set("ga_cid", {
            value: f
        }).set("ga_wpids", {
            value: c.google_analytics_uacct
        })
    }
    , function(a, b) {
        var c = a.ja.Z;
        var d = a.ma.B;
        var e = a.Rn;
        a = e.Fh;
        var f = e.nf;
        var h = e.yn;
        var k = e.Jk;
        if (!_.I(bJ) && !h) {
            (h = Tg(d.isSecureContext, d.navigator, d.document)) && b.set("td", {
                value: 1
            });
            if (a)
                switch (a.kind) {
                case 0:
                    b.set("eig", {
                        value: a.signal
                    });
                    break;
                case 1:
                    b.set("eigir", {
                        value: a.reason,
                        options: {
                            Fa: !0
                        }
                    });
                    break;
                default:
                    db(a)
                }
            void 0 !== f && b.set("egid", {
                value: f,
                options: {
                    Fa: !0
                }
            });
            (null == k ? 0 : k.size) && !_.I(HI) && b.set("tan", {
                value: c.map(function(l) {
                    return k.get(l)
                })
            });
            h && (c = new xg,
            c.set(1, Sg(d.navigator)),
            b.set("tdf", {
                value: zg(c)
            }))
        }
    }
    , function(a, b) {
        var c = a.ma.B;
        var d = a.In;
        a = d.Ln;
        d = d.Jn;
        Ug(c.isSecureContext, c.document) && (b.set("topics", {
            value: a instanceof Uint8Array ? tb(a, 3) : a
        }),
        !a || a instanceof Uint8Array || b.set("tps", {
            value: a
        }),
        d && b.set("htps", {
            value: d
        }))
    }
    , function(a, b) {
        var c = a.ma;
        var d = c.B;
        var e = c.ba;
        var f = a.ja.Z;
        a = a.mn;
        c = a.Lf;
        var h = a.Fl;
        var k = a.Em;
        if (!_.I(IF)) {
            a = b.set;
            d = Dg(e, d);
            f = Dl(f[0].getAdUnitPath());
            e = {
                Ne: _.I(Dk)
            };
            var l = (void 0 === e ? sk : e).Ne;
            e = new LA;
            var m = null != h ? h : [];
            h = l ? 1024 : 300;
            if (f && c && m && "function" === typeof c.getUserIdsAsEidBySource) {
                if ("function" === typeof c.getUserIdsAsEids)
                    try {
                        for (var n = _.y(c.getUserIdsAsEids()), p = n.next(); !p.done; p = n.next()) {
                            var q = p.value;
                            "string" === typeof q.source && dk(52, q.source)
                        }
                    } catch (A) {
                        var t;
                        dk(45, "", null == (t = A) ? void 0 : t.message)
                    }
                n = f.split(",");
                p = _.y(m);
                for (q = p.next(); !q.done; q = p.next())
                    if (q = q.value,
                    _.x(n, "includes").call(n, _.u(q, 1)))
                        for (q = _.y(gk(q, aA, 2)),
                        t = q.next(); !t.done; t = q.next())
                            if (t = t.value,
                            _.O(t, ll(t, bA, 3)) && (t = _.u(t, 1),
                            !jk(e, t))) {
                                m = null;
                                try {
                                    var w = l = void 0
                                      , v = void 0;
                                    m = null == (l = c.getUserIdsAsEidBySource(t)) ? void 0 : null == (w = l.uids) ? void 0 : null == (v = w[0]) ? void 0 : v.id
                                } catch (A) {
                                    l = void 0,
                                    dk(45, t, null == (l = A) ? void 0 : l.message)
                                }
                                m && (m.length > h ? (l = {},
                                dk(12, t, null, (l.sl = String(m.length),
                                l.fp = "1",
                                l))) : (l = GA(t),
                                w = Yh(l, 2, m),
                                l = e,
                                w = _.Fh(w, 11, !0),
                                pk(l, 2, hk, w),
                                l = {},
                                dk(19, t, null, (l.fp = "1",
                                l.hs = m ? "1" : "0",
                                l))))
                            }
            }
            qk(e, d, f, k);
            gk(e, hk, 2).length ? (c = {},
            dk(50, "", null, (c.ns = String(gk(e, hk, 2).length),
            c)),
            c = tb(e.g(), 3)) : c = null;
            a.call(b, "a3p", {
                value: c
            })
        }
    }
    , function(a, b) {
        var c = a.Bb.Te;
        var d = a.ja.Z;
        a = function() {
            return c ? d.map(function(e) {
                return c.get(e)
            }) : []
        }();
        b.set("cbidsp", {
            value: nq(a, function(e) {
                return tb(e.g(), 3)
            }),
            options: _.x(Object, "assign").call(Object, {}, {
                Ya: "~"
            }, {
                Bd: !0
            })
        })
    }
    , function(a, b) {
        var c = [];
        a = _.y(gk(fz(a.ja.M.X.Oi(), Ju, 2), Xr, 1));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = d.value;
            $h(e, 2, 2).length && (d = null != ni(e, 3) ? _.jz(e, 3) : _.If(e, 1, 0) + 2,
            e = $h(e, 2, 2).join("|"),
            c.push(d + "=" + e))
        }
        b.set("pps", {
            value: c,
            options: {
                Ya: "~"
            }
        })
    }
    , function(a, b) {
        var c = a.Rm;
        a = c.Vl;
        c = c.Xn;
        b.set("scar", {
            value: a
        });
        _.I(QF) && (null == a ? 0 : a.length) && null != c && b.set("wst", {
            value: "0" === a ? "WEBVIEW_SDK_PAW" === c ? (3).toString() : (5).toString() : "WEBVIEW_SDK_PAW" === c ? (2).toString() : (4).toString()
        })
    }
    , function(a, b) {
        a = a.ma.B;
        a = !(!a.isSecureContext || !Rg("attribution-reporting", a.document));
        !_.I(ZI) && a && b.set("nt", {
            value: 1
        })
    }
    , function(a, b) {
        if (a = a.an.Zm)
            a = Ey(fl(a), 3),
            b.set("psd", {
                value: a
            })
    }
    , function(a, b) {
        a = _.Af(a.ma.B);
        var c = ir;
        0 < a && c >= a && b.set("dlt", {
            value: a
        }).set("idt", {
            value: c - a
        })
    }
    , function(a, b) {
        a = a.ja.M.X;
        b.set("ppid", {
            value: _.mi(a, 16) ? _.u(a, 16) : null,
            options: {
                Fa: !0
            }
        })
    }
    , function(a, b) {
        var c = b.set;
        (a = ik(a.ja.M.X, 8)) ? (50 < a.length && (a = a.substring(0, 50)),
        a = "a " + Ey('role:1 producer:12 loc:"' + a + '"')) : a = "";
        c.call(b, "uule", {
            value: a
        })
    }
    , function(a, b) {
        var c = a.ja;
        a = c.M;
        var d = c.M.X;
        b.set("prev_scp", {
            value: Ls(c.Z, a),
            options: {
                Bd: !0,
                Ya: "|"
            }
        }).set("cust_params", {
            value: Ps(d),
            options: {
                Ya: "&"
            }
        })
    }
    , function(a, b) {
        var c = a.ja;
        var d = c.M;
        c = c.Z;
        a = a.ma;
        var e = a.L;
        var f = a.Hb;
        b.set("adks", {
            value: c.map(function(h) {
                if (f) {
                    var k = d.V[h.getDomId()];
                    k = Ap(k);
                    if (h = e.g.get(h))
                        h.Yd = k;
                    return k
                }
                k = d.X;
                var l = d.V[h.getDomId()], m;
                if (!(m = Vv(e, h))) {
                    k = Ap(l, _.O(k, 6) || _.O(l, 17) ? null : gn(h));
                    if (h = e.g.get(h))
                        h.Yd = k;
                    m = k
                }
                return m
            })
        })
    }
    , function(a, b) {
        var c = b.set;
        a = a.ma.B;
        var d = ZB(a);
        a: {
            var e = a.google_ad_width || a.google_ad_width;
            var f = a.google_ad_height || a.google_ad_height;
            if (wg(a))
                e = !1;
            else {
                var h = a.document
                  , k = h.documentElement;
                if (e && f) {
                    var l = 1
                      , m = 1;
                    a.innerHeight ? (l = a.innerWidth,
                    m = a.innerHeight) : k && k.clientHeight ? (l = k.clientWidth,
                    m = k.clientHeight) : h.body && (l = h.body.clientWidth,
                    m = h.body.clientHeight);
                    if (m > 2 * f || l > 2 * e) {
                        e = !1;
                        break a
                    }
                }
                e = !0
            }
        }
        f = d.location.href;
        d === d.top ? d = !0 : (h = !1,
        (k = d.document) && k.referrer && (f = k.referrer,
        d.parent === d.top && (h = !0)),
        (d = d.location.ancestorOrigins) && (d = d[d.length - 1]) && -1 === f.indexOf(d) && (h = !1),
        d = h);
        f = a.top == a ? 0 : _.Wk(a.top) ? 1 : 2;
        h = 4;
        e || 1 !== f ? e || 2 !== f ? e && 1 === f ? h = 7 : e && 2 === f && (h = 8) : h = 6 : h = 5;
        d && (h |= 16);
        d = String(h);
        if (a !== a.top)
            for (e = a; e && e !== e.top && _.Wk(e) && !a.sf_ && !a.$sf && !a.inGptIF && !a.inDapIF; e = e.parent)
                ;
        c.call(b, "frm", {
            value: d || null
        })
    }
    , function(a, b) {
        var c = b.set;
        a = fz(a.ja.M.X, Ou, 36);
        a = Wd(a, 1, _.zc, 2);
        c.call(b, "ppt", {
            value: a,
            options: {
                Ya: "~"
            }
        })
    }
    , function(a, b) {
        a = a.ma.B;
        try {
            var c, d, e = null == (c = a.external) ? void 0 : null == (d = c.getHostEnvironmentValue) ? void 0 : d.call(c, "os-mode");
            if (e) {
                var f = Number(JSON.parse(e)["os-mode"]);
                0 > f || b.set("wsm", {
                    value: f + 1
                })
            }
        } catch (h) {}
    }
    , function(a, b) {
        var c = a.ja;
        var d = c.networkCode;
        var e = c.Z;
        c = c.M.V;
        a = a.el.Gd;
        var f = []
          , h = !1;
        e = _.y(e);
        for (var k = e.next(); !k.done; k = e.next()) {
            var l = void 0;
            (null == (l = c[k.value.getDomId()]) ? 0 : _.O(l, 30)) ? (f.push("1"),
            h = !0) : f.push("")
        }
        b.set("is_cau", {
            value: h ? f : null
        });
        _.I(yF) && b.set("no_cau_info", {
            value: a.has(d) ? "1" : null
        })
    }
    , function(a, b) {
        var c = a.ja;
        var d = c.Z;
        c = c.M.V;
        a = a.ma.B;
        var e = []
          , f = !1;
        d = _.y(d);
        for (var h = d.next(); !h.done; h = d.next())
            h = Cr(c[h.value.getDomId()]),
            (_.H = [8, 9],
            _.x(_.H, "includes")).call(_.H, h) ? (f = 9 === h ? "right" : "left",
            e.push(_.Fj(a).sideRailPlasParam.get(f)),
            f = !0) : e.push("");
        f && b.set("plas", {
            value: e,
            options: {
                Ya: "|"
            }
        })
    }
    , function(a, b) {
        var c = a.ma;
        var d = c.B;
        c = c.ba;
        var e = a.ja;
        var f = e.M.X;
        e = e.networkCode;
        a = a.Dl.El;
        if (_.I(FF)) {
            var h;
            a = !a || !_.I(HF) && !ae(a, 1, bd).get(e) || _.I(HF) && !ae(a, 1, bd).get(null == (h = e.split(",")) ? void 0 : h[0]);
            var k;
            h = !(null == (k = nw(f)) || !_.O(k, 9));
            d = new cK(d);
            if (_.O(c, 8) || (h || !Cg(c)) && a)
                k = void 0;
            else {
                var l;
                k = null != (l = Eg("__eoi", d.g)) ? l : void 0
            }
            if (l = k)
                b.set("eo_id_str", {
                    value: l
                });
            else {
                if (l = _.I(GF))
                    l = !Jg(d.g) || _.O(c, 8) || (h || !Cg(c)) && a ? !1 : !0;
                l && b.set("eoidce", {
                    value: "1"
                })
            }
        }
    }
    , function(a, b) {
        var c = a.ja;
        a = c.Z;
        var d = c.M.V;
        _.I(iG) && b.set("eov", {
            value: lq(a, function(e) {
                var f, h;
                return !!(null == (f = d[e.getDomId()]) ? 0 : null == (h = _.ym(f, zP, 31)) ? 0 : _.O(h, 1))
            })
        })
    }
    , function(a, b) {
        var c = a.ja;
        a = c.Z;
        var d = c.se;
        null != d && d.size && b.set("xatfs", {
            value: lq(a, function(e) {
                return d.has(e)
            })
        })
    }
    ]);
    var vT = function(a, b, c) {
        W.call(this, a, 798);
        this.output = U(this);
        this.j = lL(this, b);
        this.o = V(this, c)
    };
    _.P(vT, W);
    vT.prototype.g = function() {
        var a = this
          , b = new _.B.Map;
        if (this.j.value) {
            var c = this.j.value
              , d = c.ma.Hb
              , e = c.Bb.Te;
            c = _.y(c.ja.Z);
            for (var f = c.next(); !f.done; f = c.next()) {
                f = f.value;
                var h = void 0
                  , k = null == (h = e) ? void 0 : h.get(f);
                b.set(f, d ? wT(this, f, k) : function() {
                    return a.o.value
                }
                )
            }
        }
        this.output.G(b)
    }
    ;
    var wT = function(a, b, c) {
        return li(function() {
            var d = _.x(Object, "assign").call(Object, {}, a.j.value);
            d.ja.Qg = !0;
            d.ja.Z = [b];
            c && (d.Bb.Te = new _.B.Map,
            d.Bb.Te.set(b, c));
            return Xq(mw(d)).url
        })
    };
    var xT = function(a, b, c, d, e, f, h) {
        W.call(this, a, 810);
        this.o = b;
        this.Hb = c;
        this.M = d;
        this.P = e;
        this.B = f;
        this.ba = h;
        this.j = U(this)
    };
    _.P(xT, W);
    xT.prototype.g = function() {
        var a = this
          , b = this.o;
        !this.Hb && 1 < this.o.length && (b = [b[0]]);
        b = b.filter(function(c) {
            if (c.K)
                return !1;
            var d = a.M.V[c.getDomId()], e;
            if (e = !(Sq(Cr(d)) && (_.H = bh(gG),
            _.x(_.H, "includes")).call(_.H, String(Cr(d))))) {
                e = a.P;
                var f = _.Ai(a.B);
                (f ? 1.05 < f || .95 > f : 1) && 4 === Cr(d) ? (N(e, kO("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath()))),
                e = !0) : e = !1;
                e = !e
            }
            if (e) {
                e = a.context;
                f = a.P;
                var h = a.B
                  , k = a.ba;
                d = Cr(d);
                5 !== d ? c = !1 : (e.T.log(578856259, _.vj, {
                    pvsid: e.pvsid,
                    za: e.za,
                    jb: 17,
                    Ub: e.Na,
                    R: 1
                }),
                (h = Hq(h, _.I(_.TF) ? !1 : !BQ(c), k)) ? (k = _.I(Fq) ? h & -4194305 : h,
                zq(f, k, d, c.getAdUnitPath()),
                e.T.log(578856259, uj, {
                    pvsid: e.pvsid,
                    za: e.za,
                    jb: 17,
                    Ub: e.Na,
                    Gm: k
                }),
                e.T.log(578856259, _.vj, {
                    pvsid: e.pvsid,
                    za: e.za,
                    jb: 17,
                    Ub: e.Na,
                    R: 2
                })) : e.T.log(578856259, _.vj, {
                    pvsid: e.pvsid,
                    za: e.za,
                    jb: 17,
                    Ub: e.Na,
                    R: 3
                }),
                c = !!h);
                e = !c
            }
            return e
        });
        30 < b.length && (N(this.P, jO("30", String(b.length), String(b.length - 30))),
        b = b.slice(0, 30));
        this.j.G(b)
    }
    ;
    var yT = function(a, b, c) {
        W.call(this, a, 919);
        this.j = b;
        this.ba = c;
        this.output = U(this)
    };
    _.P(yT, W);
    yT.prototype.g = function() {
        var a, b = !(null == (a = this.j) ? 0 : _.O(a, 9)) && !!Cg(this.ba);
        this.output.G(b)
    }
    ;
    var zT = ti(1221, function(a, b) {
        403 === a.status && b.P.error(QO(a.responseText));
        return {}
    }, {});
    var AT = ti(1251, function(a, b) {
        var c = b.context;
        b = _.$g(pI);
        0 < b && c.oc < 1 / b && (c = c.xa.hb.kb.ac.request,
        0 < a.Qf && c.ql.Kb({
            Lb: a.Qf
        }),
        c.Dm.Ra({
            Ta: b,
            status: 0 < a.Qf ? "RECOVERED" : 0 > a.Qf ? "API_UNSUPPORTED" : "NOT_DELAYED"
        }));
        return {}
    }, {});
    var BT = function(a, b, c, d, e, f) {
        W.call(this, a, 928);
        this.requestId = b;
        this.C = f;
        this.output = kL(this);
        this.o = V(this, c);
        e && (this.j = V(this, e));
        nL(this, d)
    };
    _.P(BT, W);
    var CT = function(a) {
        return a.j ? a.C.split(",").some(function(b) {
            var c;
            return null == (c = a.j) ? void 0 : c.value.has(b)
        }) : !1
    };
    BT.prototype.g = function() {
        var a = this.context
          , b = this.requestId
          , c = this.o.value.length
          , d = CT(this)
          , e = sl(a);
        if (e.jd) {
            var f = a.xa
              , h = f.hd;
            a = rl(a, e.Yc);
            e = new BE;
            b = _.rj(e, 2, b);
            c = _.wl(b, 1, c);
            d = _.vl(c, 3, d);
            d = _.xl(a, 7, yl, d);
            h.call(f, d)
        }
        this.output.notify()
    }
    ;
    var DT = function(a, b, c, d) {
        W.call(this, a, 867);
        this.Aa = b;
        this.M = c;
        this.output = kL(this);
        this.j = V(this, d)
    };
    _.P(DT, W);
    DT.prototype.g = function() {
        for (var a = _.y(this.j.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.y(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = Am(this.M.V[b.getDomId()], 20);
            $t(b, jN, 808, {
                hl: c,
                kn: d
            });
            $t(this.Aa, "slotRequested", 705, new eR(b,"publisher_ads"))
        }
        this.output.notify()
    }
    ;
    var ET = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v, A, z, D, E, G, Q, R, L, X, da, Y, ja, ka, va, Z, Ja, hb, Fa, ya, Xa, ib, Ub, Oc) {
        W.call(this, a, 785, _.$g(uI));
        this.Hb = b;
        this.L = c;
        this.Ga = d;
        this.M = e;
        this.zc = f;
        this.networkCode = h;
        this.Vd = k;
        this.Ud = l;
        this.Dg = m;
        this.timer = n;
        this.ba = p;
        this.isSecureContext = q;
        this.hc = t;
        this.Sg = w;
        this.B = v;
        this.de = A;
        this.j = U(this);
        this.o = U(this);
        this.O = U(this);
        nL(this, X);
        this.Ia = mL(this, z);
        this.Rc = mL(this, D);
        this.U = mL(this, E);
        this.H = V(this, G);
        R && (this.C = _.I(xI) ? new dL(R.Sd) : mL(this, R.Sd),
        R.Le && (this.Xb = lL(this, R.Le)));
        L && (this.J = _.I(xI) ? new dL(L.ld) : mL(this, L.ld));
        da && (this.vb = V(this, da));
        Y && (this.da = new dL(Y));
        ja && (this.Xa = lL(this, ja));
        ka && (this.na = V(this, ka));
        va && nL(this, va);
        Z && (this.ua = V(this, Z));
        Ub && (this.lb = lL(this, Ub));
        Q && (this.ha = lL(this, Q));
        Ja && (this.zb = lL(this, Ja.Ah));
        hb && (this.Qc = V(this, hb));
        Fa && (this.sa = lL(this, Fa));
        ya && (this.ia = lL(this, ya));
        Xa && (this.Ab = V(this, Xa));
        ib && (this.Nc = mL(this, ib));
        Oc && nL(this, Oc)
    };
    _.P(ET, W);
    ET.prototype.g = function() {
        if (this.H.value.length) {
            var a = null;
            if (this.C) {
                var b = this.C.value;
                a = b ? b : this.J && !this.J.Od() ? 9 : this.C.Od() ? null : 1
            }
            this.U.value && (this.L.Yb = this.U.value);
            var c, d, e, f, h, k, l, m, n, p, q, t, w, v, A, z, D;
            b = {
                ma: {
                    B: this.B,
                    context: this.context,
                    L: this.L,
                    Ga: this.Ga,
                    ba: this.ba,
                    Hb: this.Hb,
                    Dg: this.Dg,
                    isSecureContext: this.isSecureContext,
                    hc: this.hc
                },
                ja: {
                    networkCode: this.networkCode,
                    Z: this.H.value,
                    M: this.M,
                    zc: this.zc,
                    Qg: !1,
                    Sg: this.Sg,
                    se: null == (c = this.lb) ? void 0 : c.value
                },
                Vn: {
                    Vd: this.Vd,
                    Ud: this.Ud
                },
                Rm: {
                    Vl: null != (A = this.Ia.value) ? A : "0",
                    Xn: null != (z = this.Rc.value) ? z : "WEBVIEW_SDK_PAW"
                },
                Bb: {
                    Te: null == (d = this.ha) ? void 0 : d.value
                },
                In: {
                    Ln: a,
                    Jn: null == (e = this.Xb) ? void 0 : e.value
                },
                mn: {
                    Em: null != (D = null == (f = this.vb) ? void 0 : f.value) ? D : void 0,
                    Lf: null == (h = this.da) ? void 0 : h.value,
                    Fl: null == (k = this.na) ? void 0 : k.value
                },
                Bh: {
                    Zl: null == (l = this.Xa) ? void 0 : l.value,
                    Sl: null == (m = this.ua) ? void 0 : m.value
                },
                an: {
                    Zm: null == (n = this.zb) ? void 0 : n.value
                },
                Rn: {
                    Fh: null == (p = this.Qc) ? void 0 : p.value,
                    nf: null == (q = this.sa) ? void 0 : q.value,
                    yn: null == (t = this.Ab) ? void 0 : t.value,
                    Jk: null == (w = this.Nc) ? void 0 : w.value
                },
                Dl: {
                    El: null == (v = this.ia) ? void 0 : v.value
                },
                el: {
                    Gd: this.de.Gd
                }
            };
            this.o.G(b);
            c = Xq(mw(b));
            d = c.url;
            fE(this.timer, (9).toString(), 9, c.mi);
            this.j.G(d);
            this.O.G(iw(b) ? new Rx(Px,"https://pagead2.googlesyndication.com/gampad/ads/%{uuid}") : new Rx(Px,"https://securepubads.g.doubleclick.net/gampad/ads/%{uuid}"))
        } else
            this.j.G(""),
            this.o.aa()
    }
    ;
    var FT = function(a, b, c, d, e, f) {
        W.call(this, a, 878);
        this.j = b;
        this.W = c;
        this.M = d;
        this.B = e;
        this.output = kL(this);
        f && nL(this, f)
    };
    _.P(FT, W);
    FT.prototype.g = function() {
        for (var a = _.y(this.j), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = gn(b, this.W);
            if (!fn(b, this.W) && c) {
                a: {
                    var d = c;
                    var e = this.M.V[b.getDomId()]
                      , f = 0
                      , h = 0;
                    e = _.y(Mm(e));
                    for (var k = e.next(); !k.done; k = e.next())
                        if (k = k.value,
                        Array.isArray(k)) {
                            var l = _.y(k);
                            k = l.next().value;
                            l = l.next().value;
                            if (!("number" !== typeof k || "number" !== typeof l || 1 >= k || 1 >= l || (f = f || k,
                            h = Math.min(h || Infinity, l),
                            $p(hn(d, this.B)) || !d.parentElement || $p(hn(d.parentElement, this.B))))) {
                                d = [f, 0];
                                break a
                            }
                        }
                    d = f || h ? [f, h] : null
                }
                h = this.M;
                f = h.X;
                h = h.V[b.getDomId()];
                Zp(c, on(b), uq(f, h), d)
            }
        }
        this.output.notify()
    }
    ;
    var GT = function(a, b, c, d, e, f, h, k) {
        this.K = a;
        this.I = b;
        this.j = c;
        this.Z = d;
        this.ba = e;
        this.C = f;
        this.F = h;
        this.o = k;
        this.l = "";
        this.A = -1;
        this.state = 1;
        this.g = ""
    }
      , IT = function(a, b) {
        if (b)
            if (1 !== a.state && 2 !== a.state)
                HT(a, new qK("state err: (" + ([a.state, a.g.length].join() + ")")));
            else {
                a.g && (b = a.g + b);
                var c = 0;
                do {
                    var d = b.indexOf("\n", c);
                    var e = -1 !== d;
                    if (!e)
                        break;
                    var f = a;
                    c = b.substr(c, d - c);
                    if (1 === f.state)
                        f.l = c,
                        ++f.A,
                        f.state = 2;
                    else {
                        var h = void 0;
                        try {
                            f.K(f.A, f.l, {
                                kind: 0,
                                qb: VB(c)
                            }, f.Z, f.ba, f.C, f.F, null != (h = f.o) ? h : void 0),
                            f.l = ""
                        } catch (k) {}
                        f.state = 1
                    }
                    c = d + 1
                } while (e && c < b.length);
                a.g = b.substr(c)
            }
    }
      , HT = function(a, b) {
        a.state = 4;
        try {
            a.I(b)
        } catch (c) {}
    }
      , JT = function(a) {
        1 !== a.state || a.g ? HT(a, new qK("state err (" + ([a.state, a.g.length].join() + ")"))) : (a.state = 3,
        a.j(a.A, a.Z, a.ba))
    };
    var KT = function(a, b, c, d, e, f, h, k, l, m, n, p, q) {
        W.call(this, a, 788);
        this.ia = b;
        this.ha = c;
        this.da = d;
        this.ba = e;
        this.L = f;
        this.M = h;
        this.H = kL(this);
        this.C = U(this);
        this.o = U(this);
        this.U = 0;
        this.O = !1;
        this.j = null != q ? q : new XMLHttpRequest;
        this.J = V(this, k);
        l && (this.sa = lL(this, l));
        this.ua = V(this, m);
        nL(this, n);
        this.na = V(this, p)
    };
    _.P(KT, W);
    KT.prototype.g = function() {
        var a = this
          , b = this.ua.value;
        if (b) {
            var c, d = new GT(this.ia,this.ha,this.da,this.J.value,this.ba,null == (c = this.sa) ? void 0 : c.value);
            this.j.open("GET", b);
            this.j.withCredentials = this.na.value;
            this.j.onreadystatechange = function() {
                LT(a, d, !1)
            }
            ;
            this.j.onload = function() {
                LT(a, d, !0);
                a.C.G(a.j.status);
                if (300 <= a.j.status) {
                    var e;
                    a.o.G(null != (e = a.j.responseText) ? e : "")
                } else
                    a.o.G("")
            }
            ;
            this.j.onerror = function() {
                HT(d, new rK("XHR error"));
                a.J.value.forEach(function(e) {
                    du(e, a.L, a.M, "")
                });
                a.C.G(0);
                a.o.G("")
            }
            ;
            this.j.send()
        }
        this.H.notify()
    }
    ;
    var LT = function(a, b, c) {
        try {
            if (3 === a.j.readyState || 4 === a.j.readyState)
                if (300 <= a.j.status)
                    a.O || (HT(b, new rK("xhr_err-" + a.j.status)),
                    a.O = !0);
                else {
                    var d = a.j.responseText.substr(a.U);
                    d && IT(b, d);
                    a.U = a.j.responseText.length;
                    c && 4 === a.j.readyState && JT(b)
                }
        } catch (e) {
            HT(b, e)
        }
    };
    var MT = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v) {
        W.call(this, a, 1078);
        this.U = b;
        this.O = c;
        this.J = d;
        this.ba = e;
        this.L = f;
        this.M = h;
        this.C = kL(this);
        this.o = U(this);
        this.j = U(this);
        this.H = V(this, k);
        l && (this.ha = lL(this, l));
        m && (this.ia = V(this, m));
        this.na = V(this, n);
        nL(this, p);
        this.da = V(this, q);
        if (null == t ? 0 : t.Ke)
            this.ua = lL(this, t.Ke);
        w && (this.sa = V(this, w));
        v && (this.Ia = lL(this, v))
    };
    _.P(MT, W);
    MT.prototype.g = function() {
        var a = this
          , b = this.na.value;
        if (b) {
            var c, d, e, f = new GT(this.U,this.O,this.J,this.H.value,this.ba,null == (c = this.ha) ? void 0 : c.value,null == (d = this.ia) ? void 0 : d.value,null == (e = this.Ia) ? void 0 : e.value);
            c = this.da.value ? "include" : "omit";
            var h;
            d = null == (h = this.ua) ? void 0 : h.value;
            var k;
            h = null == (k = this.sa) ? void 0 : k.value;
            k = _.x(Object, "assign").call(Object, {}, {
                credentials: c
            }, d ? {
                browsingTopics: d
            } : {}, h ? {
                adAuctionHeaders: h
            } : {});
            fetch(b, k).then(function(l) {
                NT(a, l, f)
            }).catch(function(l) {
                OT(a, l, f);
                a.H.value.forEach(function(m) {
                    du(m, a.L, a.M, "")
                })
            })
        }
        this.C.notify()
    }
    ;
    var NT = function(a, b, c) {
        a.o.G(b.status);
        if (300 <= b.status)
            a.j.Oa(b.text()),
            HT(c, new rK("fetch_status-" + b.status));
        else {
            a.j.G("");
            var d, e = null == (d = b.body) ? void 0 : d.pipeThrough(new TextDecoderStream).getReader();
            e ? e.read().then(function(f) {
                PT(a, f, e, c)
            }).catch(function(f) {
                OT(a, f, c)
            }) : HT(c, new rK("failed_reader"))
        }
    }
      , PT = function(a, b, c, d) {
        var e = b.value;
        b.done ? JT(d) : (IT(d, e),
        c.read().then(function(f) {
            PT(a, f, c, d)
        }).catch(function(f) {
            OT(a, f, d)
        }))
    }
      , OT = function(a, b, c) {
        HT(c, new rK("fetch error: " + (b instanceof Error ? b.message : void 0)));
        a.o.G(0);
        a.j.G("")
    };
    var QT = function(a, b, c, d, e) {
        W.call(this, a, 918);
        this.M = b;
        this.timer = c;
        this.output = kL(this);
        this.j = V(this, e);
        nL(this, d)
    };
    _.P(QT, W);
    QT.prototype.g = function() {
        var a = this.j.value;
        a.length && Yt(this.timer, "3", Zt(this.M.V[a[0].getDomId()], 20));
        this.output.notify()
    }
    ;
    var RT = ti(1229, function(a, b) {
        a = a.th;
        var c = b.Ua, d, e;
        b = pz(a, 6);
        var f = pz(a, 7)
          , h = !!iz(a, 8)
          , k = qz(a, 10)
          , l = null != (e = a.getEscapedQemQueryId()) ? e : "";
        e = _.ym(a, RA, 43);
        var m = !!iz(a, 9)
          , n = !!iz(a, 12)
          , p = _.ym(a, DA, ll(a, jB, 48))
          , q = _.ym(a, CA, ll(a, jB, 39))
          , t = _.zc(_.Mh(a, 36))
          , w = !!iz(a, 13)
          , v = qz(a, 49)
          , A = _.ym(a, UA, 51)
          , z = qz(a, 61);
        if (0 !== c.kind) {
            var D;
            c = {
                kind: 0,
                qb: null != (D = ik(a, 4)) ? D : ""
            }
        }
        D = _.ym(a, fB, 58);
        var E = null == (d = _.ym(a, MA, 56)) ? void 0 : qz(d, 1);
        d = gk(a, vA, 62);
        var G = gk(a, SA, 67);
        var Q = Wd(a, 63, Tc, 2, void 0, void 0, 0);
        return {
            output: {
                height: b,
                width: f,
                isEmpty: h,
                pb: k,
                Qa: l,
                Zd: e,
                isBackfill: m,
                yb: n,
                Tl: p,
                ob: q,
                fg: t,
                Uh: w,
                lc: v,
                vf: A,
                Yb: z,
                Ua: c,
                ga: D,
                Yn: E,
                Bh: d,
                dl: G,
                Ug: Q,
                jg: !!iz(a, 64),
                zg: _.ym(a, TA, 68),
                kl: _.I(iG) ? qz(a, 1) : void 0
            }
        }
    }, {
        output: void 0
    });
    var ST = ti(1220, function(a, b) {
        var c = b.P;
        b = b.context;
        var d;
        (null == (d = _.ym(a.th, VA, 69)) ? 0 : _.O(d, 1)) && N(c, RO(b.Na));
        return {}
    }, {});
    var TT = function(a, b, c, d, e) {
        W.call(this, a, 803);
        this.j = b;
        this.slotId = c;
        this.Ga = d;
        this.ba = e;
        this.output = U(this)
    };
    _.P(TT, W);
    TT.prototype.g = function() {
        var a = JSON.parse(this.j)
          , b = Fp(a, Hz);
        if (!b)
            throw Error("missing ad unit path");
        if (null == a || !a[b])
            throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a))
            throw Error("dictionary not an array: " + this.j);
        a = pe(iB, a);
        b = Ot(a, 27);
        b = _.y(b);
        for (var c = b.next(); !c.done; c = b.next())
            c = c.value,
            _.Ng(Og).g(c);
        ao(4, this.context, this.Ga, this.ba);
        $t(this.slotId, iN, 800, a);
        this.output.G(a)
    }
    ;
    var UT = function(a, b, c, d) {
        W.call(this, a, 823);
        this.slotId = b;
        this.L = c;
        this.j = V(this, d)
    };
    _.P(UT, W);
    UT.prototype.g = function() {
        var a = this;
        iz(this.j.value, 11) && (_.uN(this.L, this.slotId),
        rN(this.L, this.slotId, function() {
            _.vN(a.L, a.slotId)
        }))
    }
    ;
    var VT = function(a, b, c, d) {
        tk.call(this);
        this.context = a;
        this.slotId = b;
        b = d.L;
        var e = d.ba;
        var f = d.eb;
        var h = d.Ga;
        a = d.Ua;
        d = d.P;
        c = new TT(this.context,c,this.slotId,h,e);
        J(this, c);
        e = new PQ(this.context,e,h,c.output);
        J(this, e);
        f = new RQ(this.context,this.slotId,f,c.output);
        J(this, f);
        b = new UT(this.context,this.slotId,b,c.output);
        J(this, b);
        a = this.g(RT, {
            th: c.output
        }, {
            Ua: a
        });
        this.g(ST, {
            th: c.output
        }, {
            P: d,
            context: this.context
        });
        this.l = {
            Bm: a.output
        }
    };
    _.P(VT, tk);
    var WT = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v, A, z, D, E, G, Q, R, L, X) {
        W.call(this, a, 973);
        var da = this;
        this.ia = b;
        this.P = c;
        this.J = d;
        this.U = e;
        this.M = f;
        this.L = h;
        this.Ga = k;
        this.dd = l;
        this.O = m;
        this.H = n;
        this.Ge = p;
        this.ha = q;
        this.networkCode = t;
        this.isSecureContext = w;
        this.hc = v;
        this.eb = A;
        this.B = z;
        this.W = D;
        this.j = R;
        this.na = L;
        this.se = X;
        this.o = [];
        this.sa = _.Jz(function() {
            return void Il(da.context, 646, new pK("response slot array length exceeded"))
        });
        this.C = lL(this, E);
        this.da = V(this, G);
        this.ua = V(this, Q);
        this.j.Ob && nL(this, this.j.Ob.bf)
    };
    _.P(WT, W);
    WT.prototype.g = function() {
        var a = this
          , b = new tk;
        _.er(this, b);
        var c = this.da.value
          , d = nw(this.M.X);
        this.C.value && this.na.G(this.C.value);
        var e = js(this.context, this.W);
        e && _.er(b, e.Wa);
        var f = or(this.context, _.ym(this.M.X, sv, 5), this.L, this.J, null == e ? void 0 : e.Xm.Be);
        e = f.Wg;
        (f = f.tm) && _.er(b, f);
        f = new FT(this.context,this.J,this.W,this.M,this.B,e);
        J(b, f);
        var h = !!_.O(this.M.X, 6);
        e = new xT(this.context,this.J,h,this.M,this.P,this.B,c);
        J(b, e);
        var k, l = new FP(this.context,d,c,(null == (k = _.ym(this.M.X, Ou, 36)) ? void 0 : Wd(k, 1, _.zc, 2)) || []);
        J(b, l);
        var m = this.j;
        k = m.Cj;
        var n = m.Fj
          , p = m.gk;
        m = m.de;
        var q, t = null != (q = this.j.Ob) ? q : {}, w = t.Gc, v = t.Pd, A = t.xb, z = t.Pb, D = t.vd, E = t.Li;
        q = t.Dc;
        var G = t.Eg
          , Q = t.vi
          , R = t.Zb;
        t = t.jc;
        if (_.I(jI)) {
            var L = b.g(YR, {
                il: Q
            }, {});
            var X = L.Yj;
            Q && (qL(L),
            L.Sa.mc(Q));
            L = new ZR(this.context,Q);
            J(b, L);
            var da = L.j;
            L = L.o
        }
        if (G = hu(this.context, p, this.M, c, this.C.value, e.j, l.output, G, da)) {
            var Y = G.On;
            G = G.Nn;
            var ja = Y.vh;
            var ka = Y.Og;
            Y = Y.lf;
            _.er(b, G)
        }
        if (L = ut(this.context, p, this.B.navigator, l.output, L)) {
            var va = L.hk;
            L = L.Pn;
            var Z = va.Jj;
            va = va.Zi;
            L && _.er(b, L)
        }
        _.I(KI) && (va = U(this),
        va.G(p.Sh));
        var Ja = new oS(this.context,this.B);
        J(b, Ja);
        G = (null != w ? w : {}).yc;
        var hb;
        L = null == (hb = this.j.Ob) ? void 0 : hb.Me;
        hb = new TR(this.context,k.Sm);
        J(b, hb);
        if (w = sq(this.context, this.P, this.M.X, this.M.V, this.networkCode, e.j, w, A)) {
            var Fa = w.Ok;
            _.er(this, w.Wa)
        }
        if (ka = qs(this.context, n, ka, Y, this.M, e.j, Q)) {
            var ya = ka.Of;
            _.er(this, ka.Wa)
        }
        if (X = bt(this.context, this.C.value, this.networkCode, L, l.output, X, t)) {
            var Xa = X.Kn;
            _.er(this, X.Wa);
            this.o.push(Xa.Sd.promise)
        }
        if (p.Hk) {
            _.I(qt);
            var ib = new US(this.context,this.B.navigator,e.j);
            J(b, ib);
            ib = ib.output
        }
        if (_.I(oI)) {
            X = b.j(tT, {}, {
                ge: b
            });
            var Ub = X.complete;
            0 < _.$g(pI) && b.g(AT, {
                Qf: X.output
            }, {
                context: this.context
            })
        }
        X = qw();
        ka = window.isSecureContext && _.I(WI) ? "wbn" : "ldjh";
        var Oc = ++this.L.I;
        Y = "wbn" === ka ? Kr().toLowerCase() : void 0;
        l = this.Ge;
        var dc, Pc;
        Fa = new ET(this.context,h,this.L,this.Ga,this.M,l.zc,this.networkCode,l.Vd,l.Ud,this.ua.value,_.Ng(Gl),c,this.isSecureContext,this.hc,X,this.B,m,hb.output,k.Ec,Ja.output,e.j,null == (dc = Fa) ? void 0 : dc.Nh,Xa,L,f.output,null == v ? void 0 : v.jh,G,A,z,D,E,ya,Z,null == (Pc = this.j.Ob) ? void 0 : Pc.Eg,R,da,ib,this.se,Ub);
        J(b, Fa);
        ya = new QT(this.context,this.M,_.Ng(Gl),Fa.j,e.j);
        J(b, ya);
        d = new yT(this.context,d,c);
        J(b, d);
        Ub = El(this.context, 646, function(xe, ye, ze, Vi, eg, fg, dh, eh) {
            return void XT(a, eg, xe, ye, ze, Vi, fg, dh, eh)
        });
        dc = El(this.context, 647, function(xe, ye, ze) {
            return void YT(a, Oc, ze, ye, xe)
        });
        "ldjh" === ka ? (Pc = ZT(this, 289, "strm_err"),
        X ? (Xa = new MT(this.context,Ub,Pc,dc,c,this.L,this.M,e.j,ja,Z,Fa.j,ya.output,d.output,Xa,va,ib),
        J(b, Xa),
        ja = Xa.C,
        Z = Xa.o,
        Xa = Xa.j) : (Xa = new KT(this.context,Ub,Pc,dc,c,this.L,this.M,e.j,ja,Fa.j,ya.output,d.output),
        J(b, Xa),
        ja = Xa.H,
        Z = Xa.C,
        Xa = Xa.o),
        Z = b.g(zT, {
            status: Z,
            responseText: Xa
        }, {
            P: this.P
        }).finished,
        this.o.push(Z.promise)) : (Z = new YS(this.context,Ub,ZT(this, 1042, "Unknown web bundle error."),dc,ka,Y,c,this.W,e.j,ja,Fa.j,Fa.O,ya.output,d.output),
        pv(b, Z),
        ja = new hs,
        eL(ja, tL(Z).then(function() {})));
        q = new BT(this.context,Oc,e.j,ja,q,this.networkCode);
        J(b, q);
        Z = new vT(this.context,Fa.o,Fa.j);
        J(b, Z);
        Z = new DT(this.context,this.H.Aa,this.M,Z.output);
        J(b, Z);
        Z = rL(b.g(fS, {}, {
            dd: this.dd,
            B: this.B
        }), Z.output).finished;
        Z = new yR(this.context,this.M,this.O,e.j,Z);
        J(b, Z);
        e = new FQ(this.context,this.L,this.M,this.W,e.j,Z.output);
        J(b, e);
        Z = b.g(nS, {}, {
            context: this.context,
            Mm: ck(this.B),
            B: this.B,
            ba: c,
            fm: Tk
        }).finished;
        1 === Oc && (c = new xQ(this.context,this.B,c,L,ja),
        J(b, c),
        this.o.push(c.output.promise));
        this.o.push(q.output.promise, e.output.promise, Z.promise);
        b.run()
    }
    ;
    var XT = function(a, b, c, d, e, f, h, k, l) {
        var m, n, p, q;
        return _.gf(function(t) {
            if (c >= f.length)
                return a.sa(),
                t.return();
            m = f[c];
            if (!m)
                return Il(a.context, 646, Error("missing slot")),
                t.return();
            0 === c && (n = Zt(a.M.V[m.getDomId()], 20),
            Yt(_.Ng(Gl), "4", n));
            return t.yield($T(a, m, d, e, b, null == (p = h) ? void 0 : p[m.getId()], k, null == (q = l) ? void 0 : q.get(m)), 0)
        })
    }
      , YT = function(a, b, c, d, e) {
        var f, h, k;
        return _.gf(function(l) {
            if (1 == l.g) {
                var m = a.context
                  , n = e + 1
                  , p = d.length
                  , q = sl(m);
                if (q.jd) {
                    var t = m.xa
                      , w = t.hd;
                    m = rl(m, q.Yc);
                    q = new CE;
                    q = _.rj(q, 3, b);
                    n = _.wl(q, 1, n);
                    p = _.wl(n, 2, p);
                    p = _.xl(m, 8, yl, p);
                    w.call(t, p)
                }
                f = e + 1
            }
            if (3 != l.g) {
                if (!(f < d.length))
                    return l.yield(aU(a), 0);
                if (!d[f]) {
                    l.g = 3;
                    return
                }
                t = new iB;
                t = _.Fh(t, 8, !0);
                h = fl(t);
                k = '{"empty":' + h + "}";
                return l.yield(XT(a, c, f, k, {
                    kind: 0,
                    qb: ""
                }, d), 3)
            }
            ++f;
            l.g = 2
        })
    }
      , $T = function(a, b, c, d, e, f, h, k) {
        var l, m, n, p, q, t, w, v, A, z, D, E, G, Q, R, L, X, da;
        return _.gf(function(Y) {
            if (1 == Y.g)
                return l = {
                    ba: e,
                    eb: a.eb,
                    L: a.L,
                    Ga: a.Ga,
                    Ua: d,
                    P: a.P
                },
                m = new VT(a.context,b,c,l),
                Y.yield(tL(m), 2);
            n = Y.A;
            q = p = n.Bm;
            t = q.isEmpty;
            w = q.Qa;
            v = q.ga;
            A = q.Yn;
            z = q.yb;
            D = q.zg;
            E = q.kl;
            G = q.Ua;
            Q = q.height;
            R = q.width;
            var ja = a.context
              , ka = null == (L = a.j.Ob) ? void 0 : L.Gc;
            if (ka && !(.01 < Math.random())) {
                var va = new tk;
                J(va, new sQ(ja,A,z,w,ka.yc));
                va.run()
            }
            if (_.I(FF)) {
                ka = a.context;
                va = D;
                var Z = a.B;
                ja = new tk;
                ka = new IQ(ka,va,Z);
                J(ja, ka);
                ja.run()
            }
            ja = a.context;
            var Ja;
            ka = null == (Ja = fz(a.M.V[b.getDomId()], zP, 31)) ? void 0 : _.O(Ja, 1);
            Ja = "vast" === E;
            va = b.K;
            var hb = sl(ja);
            Z = hb.jd;
            hb = hb.Yc;
            ka ? ja.xa.hb.kb.ac.Yh.Ra({
                Ta: 1,
                Ii: !0,
                mj: Ja,
                fj: t,
                jj: va
            }) : Z && ja.xa.hb.kb.ac.Yh.Ra({
                Ta: hb,
                Ii: !1,
                mj: Ja,
                fj: t,
                jj: va
            });
            if (b.K)
                return Y.return();
            X = !!v || !!f;
            (da = Zq("google_norender")) || t && !X ? du(b, a.L, a.M, w) : _.I(iG) && "vast" === E ? (ng({
                kind: ag(),
                qb: sg
            }),
            Ja = void 0 === R || void 0 === Q ? void 0 : new _.Zm(R,Q),
            a.context.xa.hb.kb.ac.outstream.Hl.Ra({
                Ta: 1,
                Ui: !!Ja
            }),
            $t(b, cu, 825, {
                isEmpty: !1,
                vast: G.qb,
                size: Ja
            })) : rT(a.ha, a.ia, a.P, b, t || da, X, a.L, a.M, a.eb, p, e, f, h, a.H.Aa, a.O, a.j, k);
            m.ya();
            Y.g = 0
        })
    }
      , ZT = function(a, b, c) {
        return El(a.context, b, function(d) {
            d = d instanceof Error ? d : Error();
            d.message = d.message || c;
            Il(a.context, b, d);
            aU(a)
        })
    }
      , aU = function(a) {
        return _.gf(function(b) {
            if (1 == b.g) {
                var c = a.L
                  , d = a.U
                  , e = c.A.get(d) - 1;
                0 === e ? c.A.delete(d) : c.A.set(d, e);
                return e ? b.return() : b.yield(_.B.Promise.all(a.o), 2)
            }
            $t(a.H.Qi, mN, 965, a.U);
            b.g = 0
        })
    };
    var bU = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v, A, z, D, E, G, Q, R, L) {
        W.call(this, a, 885);
        this.U = b;
        this.P = c;
        this.M = d;
        this.L = e;
        this.Ga = f;
        this.Ge = h;
        this.dd = k;
        this.H = l;
        this.j = m;
        this.o = n;
        this.O = p;
        this.isSecureContext = q;
        this.Eb = t;
        this.J = w;
        this.hc = v;
        this.eb = A;
        this.B = z;
        this.W = D;
        this.C = Q;
        this.da = R;
        this.se = L;
        this.ha = V(this, E);
        nL(this, G)
    };
    _.P(bU, W);
    bU.prototype.g = function() {
        var a = this.ha.value;
        if (a.length) {
            var b = this.L
              , c = this.j
              , d = a.length;
            b.A.has(c);
            b.A.set(c, d);
            a = _.y(a);
            for (b = a.next(); !b.done; b = a.next()) {
                c = b.value;
                var e = void 0;
                b = c.networkCode;
                d = c.Z;
                c = new tk;
                _.er(this, c);
                var f = hr(this.context, this.J, null == (e = this.C.Ob) ? void 0 : e.wj);
                e = f.Hg;
                _.er(c, f.Wa);
                f = Vo(this.context, this.P, this.L, this.B, e, 3, nw(this.M.X));
                e = f.wb;
                _.er(c, f.Wa);
                f = new $R(this.context,this.B,e);
                J(c, f);
                f = new OQ(this.context,this.B,e);
                J(c, f);
                f = new mv(this.context,this.B,e);
                J(c, f);
                var h = new sT(this.context,this.Ga,this.Eb,e);
                J(c, h);
                b = new WT(this.context,this.U,this.P,d,this.j,this.M,this.L,this.Ga,this.dd,this.H,this.o,this.Ge,this.O,b,this.isSecureContext,this.hc,this.eb,this.B,this.W,f.output,e,h.o,this.C,this.da,this.se);
                J(c, b);
                c.run()
            }
        } else
            $t(this.o.Qi, mN, 965, this.j)
    }
    ;
    var cU = new _.B.Map
      , dU = function(a, b, c, d) {
        d = void 0 === d ? cU : d;
        W.call(this, a, 834);
        this.P = b;
        this.Z = c;
        this.j = d;
        this.o = U(this);
        this.o.Oa(_.B.Promise.all(this.Z.map(this.C, this)).then(function(e) {
            return e.filter(function(f) {
                return null != f && !f.K
            })
        }))
    };
    _.P(dU, W);
    dU.prototype.g = function() {}
    ;
    dU.prototype.C = function(a) {
        var b = this, c, d;
        return _.gf(function(e) {
            if (1 == e.g) {
                if (a.K)
                    return e.return();
                b.j.has(a) || (b.j.set(a, _.I(mI) ? uw(a) : tw(a)),
                _.Cp(a, function() {
                    return void b.j.delete(a)
                }));
                c = b.j.get(a);
                return e.yield(c(), 2)
            }
            d = e.A;
            if (b.K)
                return e.return();
            if (d)
                return e.return(a);
            N(b.P, sO(a.getAdUnitPath()));
            return e.return()
        })
    }
    ;
    var eU = ti(847, function(a, b) {
        a = a.Z;
        var c = b.L
          , d = b.Hb;
        b = b.nm;
        if (!a.length)
            return {
                Fe: []
            };
        for (var e = _.y(a), f = e.next(); !f.done; f = e.next())
            yN(c, f.value);
        return b ? {
            Fe: []
        } : d ? (c = Dl(a[0].getAdUnitPath()),
        {
            Fe: vw(a, c)
        }) : {
            Fe: a.map(function(h) {
                return {
                    networkCode: Dl(h.getAdUnitPath()),
                    Z: [h]
                }
            })
        }
    }, {
        Fe: void 0
    });
    var fU = ti(845, function(a, b) {
        a = a.Z;
        var c = b.V;
        b = function(d) {
            return !!Mm(c[d.getDomId()]).length
        }
        ;
        return {
            ak: a.filter(b),
            kk: a.filter(Iz(b))
        }
    }, {
        ak: void 0,
        kk: void 0
    });
    var gU = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v, A, z) {
        _.T.call(this);
        var D = this;
        this.context = a;
        this.C = b;
        this.P = c;
        this.L = d;
        this.Ga = e;
        this.Aa = f;
        this.dd = h;
        this.j = k;
        this.o = l;
        this.isSecureContext = m;
        this.Eb = n;
        this.I = p;
        this.hc = q;
        this.eb = t;
        this.W = w;
        this.B = v;
        this.F = A;
        this.H = z;
        this.g = new _.B.Map;
        this.l = new eN(a);
        _.er(this, this.l);
        this.l.listen(mN, function(E) {
            E = E.detail;
            var G = D.g.get(E);
            G && (D.g.delete(E),
            G.ya())
        })
    };
    _.P(gU, _.T);
    var hU = function(a, b, c, d) {
        var e = ++a.L.F;
        a.g.has(e);
        var f = new tk;
        a.g.set(e, f);
        b = new dU(a.context,a.P,b);
        J(f, b);
        if (_.I(EF) && !_.Wk(a.B.top) && window.IntersectionObserver)
            var h = f.j(HQ, {
                Z: b.o
            }, {
                W: a.W,
                context: a.context,
                ge: f
            }).output;
        var k = f.g(fU, {
            Z: b.o
        }, {
            V: d.V
        });
        b = k.kk;
        k = f.g(eU, {
            Z: k.ak
        }, {
            L: a.L,
            Hb: !!_.O(d.X, 6),
            nm: Zq("google_nofetch")
        }).Fe;
        b = f.g(GQ, {
            Z: b
        }, {
            L: a.L,
            M: d,
            W: document
        }).finished;
        a = new bU(a.context,a.C,a.P,d,a.L,a.Ga,c,a.dd,a.j,e,{
            Qi: a.l,
            Aa: a.Aa
        },a.o,a.isSecureContext,a.Eb,a.I,a.hc,a.eb,a.B,a.W,k,b,a.F,a.H,h);
        J(f, a);
        f.run()
    };
    var iU = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t) {
        $S.call(this, a, c, k);
        this.context = a;
        this.L = d;
        this.j = new _.B.Set;
        this.I = {};
        this.H = new qT(a,d);
        this.J = new gU(a,b,c,d,new _.uK(window),this.l,n,e,this.H,f,h,l,m,p,document,window,q,t);
        _.er(this, this.J)
    };
    _.P(iU, $S);
    iU.prototype.getName = function() {
        return "publisher_ads"
    }
    ;
    iU.prototype.display = function(a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        e = void 0 === e ? "" : e;
        var f = "";
        if (d)
            if (_.La(d) && 1 == d.nodeType) {
                var h = d;
                f = h.id
            } else
                f = d;
        Hu(this);
        var k = so(c, this.context, this.P, a, b, f)
          , l = k.slotId;
        k = k.La;
        if (l && k) {
            h && !f && (h.id = l.getDomId());
            this.slotAdded(l, k);
            k.setClickUrl(e);
            var m;
            Au(this, null != (m = h) ? m : l.getDomId(), c)
        } else
            N(this.P, Zl("PubAdsService.display", [a, b, d]))
    }
    ;
    var Au = function(a, b, c) {
        var d = jU(b, c);
        c = d.slotId;
        var e = d.yl;
        d = d.zl;
        if (c) {
            if (d = bn(),
            (b = dP(d, c.getDomId())) && !_.O(b, 19))
                if (e && d.l.set(c, e),
                gn(c) || Rm(Cr(b))) {
                    if (_.Fh(b, 19, !0),
                    e = cn(d.g, d.Ea),
                    _.I(pF) && !_.x(a.g, "includes").call(a.g, c) && (a.slotAdded(c, b),
                    a.context.xa.hb.kb.ac.Lk.Ra({
                        Ta: 1
                    })),
                    a.enabled) {
                        Hu(a);
                        a.enabled && tN(a.L, c);
                        a.P.info(UN());
                        b = e.X;
                        d = e.V;
                        var f = _.O(b, 6);
                        if (f || !a.L.Uc(c))
                            f && (f = gn(c)) && $t(c, hN, 778, f),
                            _.O(b, 4) && (d = d[c.getDomId()],
                            f = a.L,
                            Vq(d, b) && !f.Uc(c) && Wq(c, document, d, b)),
                            hP(a, e, c)
                    }
                } else
                    N(a.P, KN(String(ik(b, 1)), String(ik(b, 2))), c)
        } else
            d ? a.P.error(LN(d)) : a.P.error(Zl("googletag.display", [String(b)]))
    };
    iU.prototype.slotAdded = function(a, b) {
        var c = this;
        _.O(b, 17) || this.enabled && tN(this.L, a);
        $t(this.l, kN, 724, {
            Mh: a.getDomId(),
            V: b
        });
        a.listen(cu, function(d) {
            var e = d.detail;
            d = e.size;
            var f = e.isEmpty;
            var h = e.vast;
            e = new $Q(a,"publisher_ads");
            f && (e.isEmpty = !0,
            e.slotContentChanged = !1);
            h && _.I(iG) && (e.vast = h);
            f = a.g.getResponseInformation();
            d && f && (e.size = [d.width, d.height],
            e.sourceAgnosticCreativeId = f.sourceAgnosticCreativeId,
            e.sourceAgnosticLineItemId = f.sourceAgnosticLineItemId,
            e.isBackfill = f.isBackfill,
            e.creativeId = f.creativeId,
            e.lineItemId = f.lineItemId,
            e.creativeTemplateId = f.creativeTemplateId,
            e.advertiserId = f.advertiserId,
            e.campaignId = f.campaignId,
            e.yieldGroupIds = f.yieldGroupIds,
            e.companyIds = f.companyIds);
            $t(c.l, "slotRenderEnded", 708, e)
        });
        a.listen(iN, function() {
            $t(c.l, "slotResponseReceived", 709, new fR(a,c.getName()))
        });
        4 === Cr(b) && kU(this, "rewardedSlotClosed", a, b);
        7 === Cr(b) && kU(this, "gameManualInterstitialSlotClosed", a, b);
        $S.prototype.slotAdded.call(this, a, b)
    }
    ;
    var kU = function(a, b, c, d) {
        _.Cp(c, a.l.listen(b, function(e) {
            c.g === e.detail.slot && (e = {},
            lU(a, [c], bn().g, (e[c.getDomId()] = d,
            e), a.L))
        }))
    }
      , hP = function(a, b, c) {
        var d = mU(a, b, c);
        nU(a, d, b, {
            zc: 1
        });
        b = c.getAdUnitPath();
        if (c = a.I[b]) {
            c = _.y(c);
            for (d = c.next(); !d.done; d = c.next())
                d = d.value,
                nU(a, d.Z, d.M, d.Ge);
            delete a.I[b]
        }
    }
      , mU = function(a, b, c) {
        var d = b.X
          , e = b.V[c.getDomId()];
        return _.O(d, 4) ? [] : !_.O(d, 6) || (null == e ? 0 : _.O(e, 17)) ? (a.j.add(c),
        _.Cp(c, function() {
            return void a.j.delete(c)
        }),
        [c]) : a.g.filter(function(f) {
            if (a.j.has(f) || _.I(qI) && !gn(f) && !Rm(Cr(e)))
                return !1;
            a.j.add(f);
            _.Cp(f, function() {
                return void a.j.delete(f)
            });
            return !0
        })
    }
      , nU = function(a, b, c, d) {
        a.P.info(aO());
        if (oU(a, b, d, c) && 1 !== d.zc)
            for (b = _.y(b),
            d = b.next(); !d.done; d = b.next())
                d = d.value.getDomId(),
                $t(a.l, lN, 725, {
                    Mh: d,
                    V: c.V[d]
                })
    }
      , oU = function(a, b, c, d) {
        b = b.filter(function(e) {
            var f = d.V[e.getDomId()]
              , h = _.bu(a.L, e);
            !1 === h && N(a.P, KO(String(Cr(f)), e.getAdUnitPath()));
            if (!h)
                return !1;
            (_.H = [5, 4, 7],
            _.x(_.H, "includes")).call(_.H, Cr(f)) && _.uN(a.L, e);
            return !0
        });
        if (!b.length)
            return null;
        hU(a.J, b, c, d);
        return b
    };
    iU.prototype.refresh = function(a, b, c) {
        c = void 0 === c ? {
            zc: 2
        } : c;
        b = pU(this, b);
        b.length && qU(this, a, b, c);
        return !0
    }
    ;
    var pU = function(a, b) {
        return b.filter(function(c, d) {
            if (!c.K)
                return !0;
            N(a.P, dO(String(d)));
            return !1
        })
    }
      , qU = function(a, b, c, d) {
        var e = c[0], f, h = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
        if (a.enabled) {
            var k = _.y(c);
            e = k.next();
            for (f = {}; !e.done; f = {
                Uf: void 0
            },
            e = k.next())
                f.Uf = e.value,
                a.j.add(f.Uf),
                _.Cp(f.Uf, function(l) {
                    return function() {
                        return void a.j.delete(l.Uf)
                    }
                }(f));
            nU(a, c, b, d)
        } else
            c.length && _.O(b.X, 6) ? (N(a.P, $N(h), e),
            e = e.getAdUnitPath(),
            f = null != (k = a.I[e]) ? k : [],
            f.push({
                Z: c,
                M: b,
                Ge: d
            }),
            a.I[e] = f) : N(a.P, YN(h), e)
    };
    iU.prototype.C = function() {
        var a = bn().g;
        if (_.O(a, 6))
            for (var b = _.y(this.g), c = b.next(); !c.done; c = b.next())
                this.enabled && tN(this.L, c.value);
        mP(this, a);
        a = Lo();
        a.hasOwnProperty("pubadsReady") || (a.pubadsReady = !0)
    }
    ;
    iU.prototype.destroySlots = function(a) {
        a = $S.prototype.destroySlots.call(this, a);
        if (a.length && this.enabled) {
            var b = bn();
            rU(this, a, b.g, b.Ea)
        }
        return a
    }
    ;
    var oP = function(a, b, c, d) {
        if (!a.enabled)
            return N(a.P, ZN(), d[0]),
            !1;
        var e = pU(a, d);
        if (!e.length)
            return N(a.P, Zl("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            }))),
            !1;
        a.P.info(bO());
        rU(a, e, b, c);
        return !0
    }
      , rU = function(a, b, c, d) {
        for (var e = _.y(b), f = e.next(); !f.done; f = e.next())
            qN(a.L, f.value);
        lU(a, b, c, d, a.L)
    };
    iU.prototype.forceExperiment = function(a) {
        a = Number(a);
        0 < a && _.Ng(Og).g(a)
    }
    ;
    var lU = function(a, b, c, d, e) {
        var f = void 0 === f ? window : f;
        b = _.y(b);
        for (var h = b.next(); !h.done; h = b.next()) {
            h = h.value;
            AN(a.H.L, h);
            var k = d[h.getDomId()];
            Vq(k, c) && Wq(h, f.document, k, c);
            yN(e, h)
        }
    }
      , nP = function(a, b, c, d) {
        if ("string" !== typeof b || "string" !== typeof c)
            N(a.P, Zl("PubAdsService.setVideoContent", [b, c]));
        else {
            var e = _.Fh(d, 21, !0);
            b = Yh(e, 22, b);
            Yh(b, 23, c);
            mP(a, d)
        }
    }
      , pP = function(a, b) {
        if (!a.enabled)
            return null;
        var c, d;
        return {
            vid: null != (c = _.u(b, 22)) ? c : "",
            cmsid: null != (d = _.u(b, 23)) ? d : ""
        }
    }
      , mP = function(a, b) {
        _.O(b, 21) && a.enabled && (a = WB(),
        _.nk(b, 29, _.Uc(a)))
    }
      , jU = function(a, b) {
        var c = "";
        if ("string" === typeof a)
            c = a,
            b = vQ(b, c);
        else if (_.La(a) && 1 == a.nodeType) {
            var d = a;
            c = d.id;
            b = vQ(b, c)
        } else
            b = (_.H = [].concat(_.di(b.Z)),
            _.x(_.H, "find")).call(_.H, function(e) {
                return e.g === a
            });
        return {
            slotId: b,
            yl: d,
            zl: c
        }
    };
    var Fw = _.Yw(["https://pagead2.googlesyndication.com/pagead/js/rum_debug.js"])
      , Gw = _.Yw(["https://pagead2.googlesyndication.com/pagead/js/rum.js"]);
    var sU = Zw(["^[-p{L}p{M}p{N}_,.!*<>():/]*$"], ["^[-\\p{L}\\p{M}\\p{N}_,\\.!*<>():/]*$"])
      , tU = _.Jz(function() {
        SB("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
    })
      , vU = function(a, b) {
        var c = this;
        var d = void 0 === d ? _.x(String, "raw").call(String, sU) : d;
        this.L = a;
        this.A = d;
        this.g = new _.B.Map;
        this.Z = new _.B.Set;
        b.l = function(e) {
            return uU(c, e)
        }
    };
    vU.prototype.defineSlot = function(a, b, c, d, e) {
        a = so(this, a, b, c, d, e);
        var f = a.slotId;
        if (f)
            return f.g;
        a.ff || b.error(Zl("googletag.defineSlot", [c, d, e]));
        return null
    }
    ;
    var so = function(a, b, c, d, e, f, h) {
        return "string" === typeof d && 0 < d.length && e && (void 0 === f || "string" === typeof f) ? a.add(b, c, d, e, {
            qc: f,
            Aj: void 0 === h ? !1 : h
        }) : {}
    };
    vU.prototype.add = function(a, b, c, d, e, f) {
        var h = this;
        var k = e.qc;
        var l = void 0 === e.format ? 0 : e.format;
        var m = void 0 === e.Aj ? !1 : e.Aj;
        e = void 0 === e.Gb ? !1 : e.Gb;
        f = void 0 === f ? _.ca : f;
        try {
            var n = new RegExp(this.A,"u");
            if (n.test("/1") && !n.test(c))
                return b.error(NN(c)),
                {
                    ff: !0
                }
        } catch (q) {}
        f = Rq(l, f, e);
        null === f || _.I(ev) && _.x(JR, "includes").call(JR, l) || Jr(a, f, l);
        if (f)
            return zq(b, f, l, c),
            {};
        m && tU();
        l = this.g.get(c) || Number(m);
        b = wU(this, a, b, c, l, d, k || "gpt_unit_" + c + "_" + l);
        a = b.La;
        var p = b.slotId;
        b = b.ff;
        if (!p)
            return {
                ff: b
            };
        this.g.set(c, l + 1);
        this.Z.add(p);
        _.Cp(p, function() {
            return void h.Z.delete(p)
        });
        ZM(c);
        return {
            slotId: p,
            La: a
        }
    }
    ;
    var vQ = function(a, b) {
        a = _.y(a.Z);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value,
            c.getDomId() === b)
                return c
    }
      , lu = function(a) {
        a = _.y(a);
        for (var b = a.next(); !b.done; b = a.next())
            b.value.ya()
    }
      , wU = function(a, b, c, d, e, f, h) {
        var k = vQ(a, h);
        if (k)
            return c.error(MN(h, d, k.getAdUnitPath())),
            {
                ff: !0
            };
        var l = new AP;
        BP(Yh(l, 1, d), h);
        CP(l, Ho(f));
        cP(l);
        var m = new dg(b,d,e,h);
        jP(m, No(b, c, m));
        _.Cp(m, function() {
            var n = bn()
              , p = m.getDomId();
            delete n.Ea[p];
            n.l.delete(m);
            delete n.A[p];
            n = m.getAdUnitPath();
            n = Dl(n);
            var q;
            p = (null != (q = Rl.get(n)) ? q : 0) - 1;
            0 >= p ? Rl.delete(n) : Rl.set(n, p);
            c.info(iO(m.toString()), m);
            (q = Tl.get(m)) && Ul.delete(q);
            Tl.delete(m)
        });
        c.info(BN(m.toString()), m);
        m.listen(jN, function(n) {
            n = n.detail.kn;
            c.info(CN(m.getAdUnitPath()), m);
            fE(_.Ng(Gl), "7", 9, xN(a.L, m), 0, n)
        });
        m.listen(iN, function(n) {
            var p = n.detail;
            c.info(DN(m.getAdUnitPath()), m);
            var q;
            n = _.Ng(Gl);
            var t = Zt(l, 20);
            p = null != (q = p.getEscapedQemQueryId()) ? q : "";
            n.g && (_.ca.google_timing_params = _.ca.google_timing_params || {},
            _.ca.google_timing_params["qqid." + t] = p)
        });
        m.listen(au, function() {
            return void c.info(EN(m.getAdUnitPath()), m)
        });
        m.listen(cu, function() {
            return void c.info(FN(m.getAdUnitPath()), m)
        });
        return {
            La: l,
            slotId: m
        }
    }
      , uU = function(a, b) {
        var c = new RegExp("(^|,|/)" + b + "($|,|/)");
        return [].concat(_.di(a.Z)).some(function(d) {
            return c.test(Dl(d.getAdUnitPath()))
        })
    };
    (function(a, b) {
        var c = null != a ? a : {
            pvsid: ck(window),
            Na: "m202406040101",
            tf: "202406040101",
            xa: new Mw(3,"m202406040101",0),
            Kh: !0,
            Ag: 1
        };
        try {
            jc(function(ja) {
                Il(c, 1190, ja)
            });
            var d = Lo();
            Se(!_.Ng(vm).g);
            _.x(Object, "assign").call(Object, wm, d._vars_);
            d._vars_ = wm;
            if (d.evalScripts)
                d.evalScripts();
            else {
                pM();
                try {
                    ph()
                } catch (ja) {
                    Il(c, 408, ja)
                }
                jr();
                var e = new PP;
                try {
                    lh(e.I),
                    Yn(13, c),
                    Yn(3, c)
                } catch (ja) {
                    Il(c, 408, ja)
                }
                var f = Lw(c, e)
                  , h = null != a ? a : Pw(f, c)
                  , k = null != b ? b : new OP(h);
                zl(h);
                Qp("gpt_fifwin", function(ja) {
                    ep(ja, h)
                }, d.fifWin ? .01 : 0);
                var l = new pN, m = new vU(l,e), n = new eT(h), p = _.xm(260), q = new eN(h), t = new eN(h), w = new eN(h), v = _.xm(150), A = JB(), z = (_.I(cG) ? hv : gv)(h, window, m, bn(), k, l, p, e, n, q, v), D = _.xm(221), E = new aS, G = new QQ, Q, R, L, X = null != (L = null == (Q = z.Ob) ? void 0 : null == (R = Q.Pd) ? void 0 : R.Ib) ? L : new oq, da = new iU(h,m,k,l,n,A,e,q,p,D,E,G,z,X);
                _.I(aJ) && new wQ(h,q,l,m);
                var Y = bn().g;
                Pu(h, k, da, Y, m, t, w, e, G, X);
                Zo(h, d, k);
                window.setTimeout(function() {
                    for (var ja = window.document.scripts, ka = 0, va = 0, Z = 0; Z < ja.length; Z++)
                        ja[Z].src.match("securepubads.g.doubleclick.net/tag/js/gpt.js") ? ka++ : ja[Z].src.match("www.googletagservices.com/tag/js/gpt.js") && va++;
                    1 < ka && 0 === va || 1 < va && 0 === ka ? N(k, IO()) : 0 < va && 0 < ka && k.error(JO())
                }, 1E3);
                iu();
                if (_.I(aJ) || _.Ng(Gl).g)
                    Dw(),
                    Hw();
                bp(h)
            }
        } catch (ja) {
            Il(c, 106, ja)
        }
    }
    )();
    _.xU = _.ca.requestAnimationFrame || _.ca.webkitRequestAnimationFrame;
    _.yU = !!_.xU && !/'iPhone'/.test(_.ca.navigator.userAgent);
    _.zU = function(a, b, c) {
        _.T.call(this);
        var d = this;
        this.j = a;
        this.l = b;
        this.g = c;
        this.U = null;
        _.Cp(this, function() {
            return d.U = null
        })
    }
    ;
    _.P(_.zU, _.T);
}
).call(this, {});
