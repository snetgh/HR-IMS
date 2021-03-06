if (!function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
    : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = !!t && "length"in t && t.length
          , n = ot.type(t);
        return "function" !== n && !ot.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    function i(t, e, n) {
        if (ot.isFunction(e))
            return ot.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
        if (e.nodeType)
            return ot.grep(t, function(t) {
                return t === e !== n
            });
        if ("string" == typeof e) {
            if (mt.test(e))
                return ot.filter(e, t, n);
            e = ot.filter(e, t)
        }
        return ot.grep(t, function(t) {
            return K.call(e, t) > -1 !== n
        })
    }
    function r(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; )
            ;
        return t
    }
    function o(t) {
        var e = {};
        return ot.each(t.match(xt) || [], function(t, n) {
            e[n] = !0
        }),
        e
    }
    function s() {
        Q.removeEventListener("DOMContentLoaded", s),
        t.removeEventListener("load", s),
        ot.ready()
    }
    function a() {
        this.expando = ot.expando + a.uid++
    }
    function l(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(Et, "-$&").toLowerCase(),
            n = t.getAttribute(i),
            "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Dt.test(n) ? ot.parseJSON(n) : n)
                } catch (t) {}
                Ct.set(t, e, n)
            } else
                n = void 0;
        return n
    }
    function u(t, e, n, i) {
        var r, o = 1, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return ot.css(t, e, "")
        }
        , l = a(), u = n && n[3] || (ot.cssNumber[e] ? "" : "px"), c = (ot.cssNumber[e] || "px" !== u && +l) && Mt.exec(ot.css(t, e));
        if (c && c[3] !== u) {
            u = u || c[3],
            n = n || [],
            c = +l || 1;
            do
                o = o || ".5",
                c /= o,
                ot.style(t, e, c + u);
            while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (c = +c || +l || 0,
        r = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = u,
        i.start = c,
        i.end = r)),
        r
    }
    function c(t, e) {
        var n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], n) : n
    }
    function d(t, e) {
        for (var n = 0, i = t.length; i > n; n++)
            kt.set(t[n], "globalEval", !e || kt.get(e[n], "globalEval"))
    }
    function f(t, e, n, i, r) {
        for (var o, s, a, l, u, f, h = e.createDocumentFragment(), p = [], m = 0, g = t.length; g > m; m++)
            if (o = t[m],
            o || 0 === o)
                if ("object" === ot.type(o))
                    ot.merge(p, o.nodeType ? [o] : o);
                else if (It.test(o)) {
                    for (s = s || h.appendChild(e.createElement("div")),
                    a = (jt.exec(o) || ["", ""])[1].toLowerCase(),
                    l = Rt[a] || Rt._default,
                    s.innerHTML = l[1] + ot.htmlPrefilter(o) + l[2],
                    f = l[0]; f--; )
                        s = s.lastChild;
                    ot.merge(p, s.childNodes),
                    s = h.firstChild,
                    s.textContent = ""
                } else
                    p.push(e.createTextNode(o));
        for (h.textContent = "",
        m = 0; o = p[m++]; )
            if (i && ot.inArray(o, i) > -1)
                r && r.push(o);
            else if (u = ot.contains(o.ownerDocument, o),
            s = c(h.appendChild(o), "script"),
            u && d(s),
            n)
                for (f = 0; o = s[f++]; )
                    Pt.test(o.type || "") && n.push(o);
        return h
    }
    function h() {
        return !0
    }
    function p() {
        return !1
    }
    function m() {
        try {
            return Q.activeElement
        } catch (t) {}
    }
    function g(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n,
            n = void 0);
            for (a in e)
                g(t, a, n, i, e[a], o);
            return t
        }
        if (null == i && null == r ? (r = n,
        i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
        i = void 0) : (r = i,
        i = n,
        n = void 0)),
        r === !1)
            r = p;
        else if (!r)
            return t;
        return 1 === o && (s = r,
        r = function(t) {
            return ot().off(t),
            s.apply(this, arguments)
        }
        ,
        r.guid = s.guid || (s.guid = ot.guid++)),
        t.each(function() {
            ot.event.add(this, e, r, i, n)
        })
    }
    function v(t, e) {
        return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function y(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
        t
    }
    function b(t) {
        var e = Ut.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function w(t, e) {
        var n, i, r, o, s, a, l, u;
        if (1 === e.nodeType) {
            if (kt.hasData(t) && (o = kt.access(t),
            s = kt.set(e, o),
            u = o.events)) {
                delete s.handle,
                s.events = {};
                for (r in u)
                    for (n = 0,
                    i = u[r].length; i > n; n++)
                        ot.event.add(e, r, u[r][n])
            }
            Ct.hasData(t) && (a = Ct.access(t),
            l = ot.extend({}, a),
            Ct.set(e, l))
        }
    }
    function x(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && At.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }
    function _(t, e, n, i) {
        e = Z.apply([], e);
        var r, o, s, a, l, u, d = 0, h = t.length, p = h - 1, m = e[0], g = ot.isFunction(m);
        if (g || h > 1 && "string" == typeof m && !it.checkClone && qt.test(m))
            return t.each(function(r) {
                var o = t.eq(r);
                g && (e[0] = m.call(this, r, o.html())),
                _(o, e, n, i)
            });
        if (h && (r = f(e, t[0].ownerDocument, !1, t, i),
        o = r.firstChild,
        1 === r.childNodes.length && (r = o),
        o || i)) {
            for (s = ot.map(c(r, "script"), y),
            a = s.length; h > d; d++)
                l = r,
                d !== p && (l = ot.clone(l, !0, !0),
                a && ot.merge(s, c(l, "script"))),
                n.call(t[d], l, d);
            if (a)
                for (u = s[s.length - 1].ownerDocument,
                ot.map(s, b),
                d = 0; a > d; d++)
                    l = s[d],
                    Pt.test(l.type || "") && !kt.access(l, "globalEval") && ot.contains(u, l) && (l.src ? ot._evalUrl && ot._evalUrl(l.src) : ot.globalEval(l.textContent.replace(Gt, "")))
        }
        return t
    }
    function T(t, e, n) {
        for (var i, r = e ? ot.filter(e, t) : t, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || ot.cleanData(c(i)),
            i.parentNode && (n && ot.contains(i.ownerDocument, i) && d(c(i, "script")),
            i.parentNode.removeChild(i));
        return t
    }
    function S(t, e) {
        var n = ot(e.createElement(t)).appendTo(e.body)
          , i = ot.css(n[0], "display");
        return n.detach(),
        i
    }
    function k(t) {
        var e = Q
          , n = Vt[t];
        return n || (n = S(t, e),
        "none" !== n && n || (Bt = (Bt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),
        e = Bt[0].contentDocument,
        e.write(),
        e.close(),
        n = S(t, e),
        Bt.detach()),
        Vt[t] = n),
        n
    }
    function C(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || Xt(t),
        s = n ? n.getPropertyValue(e) || n[e] : void 0,
        "" !== s && void 0 !== s || ot.contains(t.ownerDocument, t) || (s = ot.style(t, e)),
        n && !it.pixelMarginRight() && Qt.test(s) && zt.test(e) && (i = a.width,
        r = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = i,
        a.minWidth = r,
        a.maxWidth = o),
        void 0 !== s ? s + "" : s
    }
    function D(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    function E(t) {
        if (t in ie)
            return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = ne.length; n--; )
            if (t = ne[n] + e,
            t in ie)
                return t
    }
    function O(t, e, n) {
        var i = Mt.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }
    function M(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)
            "margin" === n && (s += ot.css(t, n + Nt[o], !0, r)),
            i ? ("content" === n && (s -= ot.css(t, "padding" + Nt[o], !0, r)),
            "margin" !== n && (s -= ot.css(t, "border" + Nt[o] + "Width", !0, r))) : (s += ot.css(t, "padding" + Nt[o], !0, r),
            "padding" !== n && (s += ot.css(t, "border" + Nt[o] + "Width", !0, r)));
        return s
    }
    function N(t, e, n) {
        var i = !0
          , r = "width" === e ? t.offsetWidth : t.offsetHeight
          , o = Xt(t)
          , s = "border-box" === ot.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = C(t, e, o),
            (0 > r || null == r) && (r = t.style[e]),
            Qt.test(r))
                return r;
            i = s && (it.boxSizingReliable() || r === t.style[e]),
            r = parseFloat(r) || 0
        }
        return r + M(t, e, n || (s ? "border" : "content"), i, o) + "px"
    }
    function $(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++)
            i = t[s],
            i.style && (o[s] = kt.get(i, "olddisplay"),
            n = i.style.display,
            e ? (o[s] || "none" !== n || (i.style.display = ""),
            "" === i.style.display && $t(i) && (o[s] = kt.access(i, "olddisplay", k(i.nodeName)))) : (r = $t(i),
            "none" === n && r || kt.set(i, "olddisplay", r ? n : ot.css(i, "display"))));
        for (s = 0; a > s; s++)
            i = t[s],
            i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }
    function A(t, e, n, i, r) {
        return new A.prototype.init(t,e,n,i,r)
    }
    function j() {
        return t.setTimeout(function() {
            re = void 0
        }),
        re = ot.now()
    }
    function P(t, e) {
        var n, i = 0, r = {
            height: t
        };
        for (e = e ? 1 : 0; 4 > i; i += 2 - e)
            n = Nt[i],
            r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t),
        r
    }
    function R(t, e, n) {
        for (var i, r = (L.tweeners[e] || []).concat(L.tweeners["*"]), o = 0, s = r.length; s > o; o++)
            if (i = r[o].call(n, e, t))
                return i
    }
    function I(t, e, n) {
        var i, r, o, s, a, l, u, c, d = this, f = {}, h = t.style, p = t.nodeType && $t(t), m = kt.get(t, "fxshow");
        n.queue || (a = ot._queueHooks(t, "fx"),
        null == a.unqueued && (a.unqueued = 0,
        l = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || l()
        }
        ),
        a.unqueued++,
        d.always(function() {
            d.always(function() {
                a.unqueued--,
                ot.queue(t, "fx").length || a.empty.fire()
            })
        })),
        1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
        u = ot.css(t, "display"),
        c = "none" === u ? kt.get(t, "olddisplay") || k(t.nodeName) : u,
        "inline" === c && "none" === ot.css(t, "float") && (h.display = "inline-block")),
        n.overflow && (h.overflow = "hidden",
        d.always(function() {
            h.overflow = n.overflow[0],
            h.overflowX = n.overflow[1],
            h.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i],
            se.exec(r)) {
                if (delete e[i],
                o = o || "toggle" === r,
                r === (p ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i])
                        continue;
                    p = !0
                }
                f[i] = m && m[i] || ot.style(t, i)
            } else
                u = void 0;
        if (ot.isEmptyObject(f))
            "inline" === ("none" === u ? k(t.nodeName) : u) && (h.display = u);
        else {
            m ? "hidden"in m && (p = m.hidden) : m = kt.access(t, "fxshow", {}),
            o && (m.hidden = !p),
            p ? ot(t).show() : d.done(function() {
                ot(t).hide()
            }),
            d.done(function() {
                var e;
                kt.remove(t, "fxshow");
                for (e in f)
                    ot.style(t, e, f[e])
            });
            for (i in f)
                s = R(p ? m[i] : 0, i, d),
                i in m || (m[i] = s.start,
                p && (s.end = s.start,
                s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function Y(t, e) {
        var n, i, r, o, s;
        for (n in t)
            if (i = ot.camelCase(n),
            r = e[i],
            o = t[n],
            ot.isArray(o) && (r = o[1],
            o = t[n] = o[0]),
            n !== i && (t[i] = o,
            delete t[n]),
            s = ot.cssHooks[i],
            s && "expand"in s) {
                o = s.expand(o),
                delete t[i];
                for (n in o)
                    n in t || (t[n] = o[n],
                    e[n] = r)
            } else
                e[i] = r
    }
    function L(t, e, n) {
        var i, r, o = 0, s = L.prefilters.length, a = ot.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var e = re || j(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++)
                u.tweens[s].run(o);
            return a.notifyWith(t, [u, o, n]),
            1 > o && l ? n : (a.resolveWith(t, [u]),
            !1)
        }, u = a.promise({
            elem: t,
            props: ot.extend({}, e),
            opts: ot.extend(!0, {
                specialEasing: {},
                easing: ot.easing._default
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: re || j(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = ot.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(i),
                i
            },
            stop: function(e) {
                var n = 0
                  , i = e ? u.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; i > n; n++)
                    u.tweens[n].run(1);
                return e ? (a.notifyWith(t, [u, 1, 0]),
                a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]),
                this
            }
        }), c = u.props;
        for (Y(c, u.opts.specialEasing); s > o; o++)
            if (i = L.prefilters[o].call(u, t, c, u.opts))
                return ot.isFunction(i.stop) && (ot._queueHooks(u.elem, u.opts.queue).stop = ot.proxy(i.stop, i)),
                i;
        return ot.map(c, R, u),
        ot.isFunction(u.opts.start) && u.opts.start.call(t, u),
        ot.fx.timer(ot.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function F(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    function H(t) {
        return function(e, n) {
            "string" != typeof e && (n = e,
            e = "*");
            var i, r = 0, o = e.toLowerCase().match(xt) || [];
            if (ot.isFunction(n))
                for (; i = o[r++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function W(t, e, n, i) {
        function r(a) {
            var l;
            return o[a] = !0,
            ot.each(t[a] || [], function(t, a) {
                var u = a(e, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u),
                r(u),
                !1)
            }),
            l
        }
        var o = {}
          , s = t === Ce;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }
    function q(t, e) {
        var n, i, r = ot.ajaxSettings.flatOptions || {};
        for (n in e)
            void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && ot.extend(!0, t, i),
        t
    }
    function U(t, e, n) {
        for (var i, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0]in n)
            o = l[0];
        else {
            for (r in n) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        return o ? (o !== l[0] && l.unshift(o),
        n[o]) : void 0
    }
    function G(t, e, n, i) {
        var r, o, s, a, l, u = {}, c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters)
                u[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o; )
            if (t.responseFields[o] && (n[t.responseFields[o]] = e),
            !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
            l = o,
            o = c.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (s = u[l + " " + o] || u["* " + o],
                    !s)
                        for (r in u)
                            if (a = r.split(" "),
                            a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0],
                                c.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && t.throws)
                            e = s(e);
                        else
                            try {
                                e = s(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: s ? t : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: e
        }
    }
    function B(t, e, n, i) {
        var r;
        if (ot.isArray(e))
            ot.each(e, function(e, r) {
                n || Me.test(t) ? i(t, r) : B(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
            });
        else if (n || "object" !== ot.type(e))
            i(t, e);
        else
            for (r in e)
                B(t + "[" + r + "]", e[r], n, i)
    }
    function V(t) {
        return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var z = []
      , Q = t.document
      , X = z.slice
      , Z = z.concat
      , J = z.push
      , K = z.indexOf
      , tt = {}
      , et = tt.toString
      , nt = tt.hasOwnProperty
      , it = {}
      , rt = "2.2.4"
      , ot = function(t, e) {
        return new ot.fn.init(t,e)
    }
      , st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , at = /^-ms-/
      , lt = /-([\da-z])/gi
      , ut = function(t, e) {
        return e.toUpperCase()
    };
    ot.fn = ot.prototype = {
        jquery: rt,
        constructor: ot,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : X.call(this)
        },
        pushStack: function(t) {
            var e = ot.merge(this.constructor(), t);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function(t) {
            return ot.each(this, t)
        },
        map: function(t) {
            return this.pushStack(ot.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length
              , n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: J,
        sort: z.sort,
        splice: z.splice
    },
    ot.extend = ot.fn.extend = function() {
        var t, e, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || ot.isFunction(s) || (s = {}),
        a === l && (s = this,
        a--); l > a; a++)
            if (null != (t = arguments[a]))
                for (e in t)
                    n = s[e],
                    i = t[e],
                    s !== i && (u && i && (ot.isPlainObject(i) || (r = ot.isArray(i))) ? (r ? (r = !1,
                    o = n && ot.isArray(n) ? n : []) : o = n && ot.isPlainObject(n) ? n : {},
                    s[e] = ot.extend(u, o, i)) : void 0 !== i && (s[e] = i));
        return s
    }
    ,
    ot.extend({
        expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === ot.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !ot.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(t) {
            var e;
            if ("object" !== ot.type(t) || t.nodeType || ot.isWindow(t))
                return !1;
            if (t.constructor && !nt.call(t, "constructor") && !nt.call(t.constructor.prototype || {}, "isPrototypeOf"))
                return !1;
            for (e in t)
                ;
            return void 0 === e || nt.call(t, e)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, n = eval;
            t = ot.trim(t),
            t && (1 === t.indexOf("use strict") ? (e = Q.createElement("script"),
            e.text = t,
            Q.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function(t) {
            return t.replace(at, "ms-").replace(lt, ut)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var i, r = 0;
            if (n(t))
                for (i = t.length; i > r && e.call(t[r], r, t[r]) !== !1; r++)
                    ;
            else
                for (r in t)
                    if (e.call(t[r], r, t[r]) === !1)
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(st, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? ot.merge(i, "string" == typeof t ? [t] : t) : J.call(i, t)),
            i
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : K.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i; i++)
                t[r++] = e[i];
            return t.length = r,
            t
        },
        grep: function(t, e, n) {
            for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++)
                i = !e(t[o], o),
                i !== a && r.push(t[o]);
            return r
        },
        map: function(t, e, i) {
            var r, o, s = 0, a = [];
            if (n(t))
                for (r = t.length; r > s; s++)
                    o = e(t[s], s, i),
                    null != o && a.push(o);
            else
                for (s in t)
                    o = e(t[s], s, i),
                    null != o && a.push(o);
            return Z.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (n = t[e],
            e = t,
            t = n),
            ot.isFunction(t) ? (i = X.call(arguments, 2),
            r = function() {
                return t.apply(e || this, i.concat(X.call(arguments)))
            }
            ,
            r.guid = t.guid = t.guid || ot.guid++,
            r) : void 0
        },
        now: Date.now,
        support: it
    }),
    "function" == typeof Symbol && (ot.fn[Symbol.iterator] = z[Symbol.iterator]),
    ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        tt["[object " + e + "]"] = e.toLowerCase()
    });
    var ct = function(t) {
        function e(t, e, n, i) {
            var r, o, s, a, l, u, d, h, p = e && e.ownerDocument, m = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m)
                return n;
            if (!i && ((e ? e.ownerDocument || e : F) !== $ && N(e),
            e = e || $,
            j)) {
                if (11 !== m && (u = vt.exec(t)))
                    if (r = u[1]) {
                        if (9 === m) {
                            if (!(s = e.getElementById(r)))
                                return n;
                            if (s.id === r)
                                return n.push(s),
                                n
                        } else if (p && (s = p.getElementById(r)) && Y(e, s) && s.id === r)
                            return n.push(s),
                            n
                    } else {
                        if (u[2])
                            return J.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((r = u[3]) && x.getElementsByClassName && e.getElementsByClassName)
                            return J.apply(n, e.getElementsByClassName(r)),
                            n
                    }
                if (x.qsa && !G[t + " "] && (!P || !P.test(t))) {
                    if (1 !== m)
                        p = e,
                        h = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = L),
                        d = k(t),
                        o = d.length,
                        l = ft.test(a) ? "#" + a : "[id='" + a + "']"; o--; )
                            d[o] = l + " " + f(d[o]);
                        h = d.join(","),
                        p = yt.test(t) && c(e.parentNode) || e
                    }
                    if (h)
                        try {
                            return J.apply(n, p.querySelectorAll(h)),
                            n
                        } catch (t) {} finally {
                            a === L && e.removeAttribute("id")
                        }
                }
            }
            return D(t.replace(at, "$1"), e, n, i)
        }
        function n() {
            function t(n, i) {
                return e.push(n + " ") > _.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
            var e = [];
            return t
        }
        function i(t) {
            return t[L] = !0,
            t
        }
        function r(t) {
            var e = $.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function o(t, e) {
            for (var n = t.split("|"), i = n.length; i--; )
                _.attrHandle[n[i]] = e
        }
        function s(t, e) {
            var n = e && t
              , i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }
        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function u(t) {
            return i(function(e) {
                return e = +e,
                i(function(n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--; )
                        n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }
        function d() {}
        function f(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++)
                i += t[e].value;
            return i
        }
        function h(t, e, n) {
            var i = e.dir
              , r = n && "parentNode" === i
              , o = W++;
            return e.first ? function(e, n, o) {
                for (; e = e[i]; )
                    if (1 === e.nodeType || r)
                        return t(e, n, o)
            }
            : function(e, n, s) {
                var a, l, u, c = [H, o];
                if (s) {
                    for (; e = e[i]; )
                        if ((1 === e.nodeType || r) && t(e, n, s))
                            return !0
                } else
                    for (; e = e[i]; )
                        if (1 === e.nodeType || r) {
                            if (u = e[L] || (e[L] = {}),
                            l = u[e.uniqueID] || (u[e.uniqueID] = {}),
                            (a = l[i]) && a[0] === H && a[1] === o)
                                return c[2] = a[2];
                            if (l[i] = c,
                            c[2] = t(e, n, s))
                                return !0
                        }
            }
        }
        function p(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--; )
                    if (!t[r](e, n, i))
                        return !1;
                return !0
            }
            : t[0]
        }
        function m(t, n, i) {
            for (var r = 0, o = n.length; o > r; r++)
                e(t, n[r], i);
            return i
        }
        function g(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++)
                (o = t[a]) && (n && !n(o, i, r) || (s.push(o),
                u && e.push(a)));
            return s
        }
        function v(t, e, n, r, o, s) {
            return r && !r[L] && (r = v(r)),
            o && !o[L] && (o = v(o, s)),
            i(function(i, s, a, l) {
                var u, c, d, f = [], h = [], p = s.length, v = i || m(e || "*", a.nodeType ? [a] : a, []), y = !t || !i && e ? v : g(v, f, t, a, l), b = n ? o || (i ? t : p || r) ? [] : s : y;
                if (n && n(y, b, a, l),
                r)
                    for (u = g(b, h),
                    r(u, [], a, l),
                    c = u.length; c--; )
                        (d = u[c]) && (b[h[c]] = !(y[h[c]] = d));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (u = [],
                            c = b.length; c--; )
                                (d = b[c]) && u.push(y[c] = d);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--; )
                            (d = b[c]) && (u = o ? tt(i, d) : f[c]) > -1 && (i[u] = !(s[u] = d))
                    }
                } else
                    b = g(b === s ? b.splice(p, b.length) : b),
                    o ? o(null, s, b, l) : J.apply(s, b)
            })
        }
        function y(t) {
            for (var e, n, i, r = t.length, o = _.relative[t[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = h(function(t) {
                return t === e
            }, s, !0), u = h(function(t) {
                return tt(e, t) > -1
            }, s, !0), c = [function(t, n, i) {
                var r = !o && (i || n !== E) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                return e = null,
                r
            }
            ]; r > a; a++)
                if (n = _.relative[t[a].type])
                    c = [h(p(c), n)];
                else {
                    if (n = _.filter[t[a].type].apply(null, t[a].matches),
                    n[L]) {
                        for (i = ++a; r > i && !_.relative[t[i].type]; i++)
                            ;
                        return v(a > 1 && p(c), a > 1 && f(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(at, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && f(t))
                    }
                    c.push(n)
                }
            return p(c)
        }
        function b(t, n) {
            var r = n.length > 0
              , o = t.length > 0
              , s = function(i, s, a, l, u) {
                var c, d, f, h = 0, p = "0", m = i && [], v = [], y = E, b = i || o && _.find.TAG("*", u), w = H += null == y ? 1 : Math.random() || .1, x = b.length;
                for (u && (E = s === $ || s || u); p !== x && null != (c = b[p]); p++) {
                    if (o && c) {
                        for (d = 0,
                        s || c.ownerDocument === $ || (N(c),
                        a = !j); f = t[d++]; )
                            if (f(c, s || $, a)) {
                                l.push(c);
                                break
                            }
                        u && (H = w)
                    }
                    r && ((c = !f && c) && h--,
                    i && m.push(c))
                }
                if (h += p,
                r && p !== h) {
                    for (d = 0; f = n[d++]; )
                        f(m, v, s, a);
                    if (i) {
                        if (h > 0)
                            for (; p--; )
                                m[p] || v[p] || (v[p] = X.call(l));
                        v = g(v)
                    }
                    J.apply(l, v),
                    u && !i && v.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                }
                return u && (H = w,
                E = y),
                m
            };
            return r ? i(s) : s
        }
        var w, x, _, T, S, k, C, D, E, O, M, N, $, A, j, P, R, I, Y, L = "sizzle" + 1 * new Date, F = t.document, H = 0, W = 0, q = n(), U = n(), G = n(), B = function(t, e) {
            return t === e && (M = !0),
            0
        }, V = 1 << 31, z = {}.hasOwnProperty, Q = [], X = Q.pop, Z = Q.push, J = Q.push, K = Q.slice, tt = function(t, e) {
            for (var n = 0, i = t.length; i > n; n++)
                if (t[n] === e)
                    return n;
            return -1
        }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]", ot = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)", st = new RegExp(nt + "+","g"), at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$","g"), lt = new RegExp("^" + nt + "*," + nt + "*"), ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]","g"), dt = new RegExp(ot), ft = new RegExp("^" + it + "$"), ht = {
            ID: new RegExp("^#(" + it + ")"),
            CLASS: new RegExp("^\\.(" + it + ")"),
            TAG: new RegExp("^(" + it + "|[*])"),
            ATTR: new RegExp("^" + rt),
            PSEUDO: new RegExp("^" + ot),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)","i"),
            bool: new RegExp("^(?:" + et + ")$","i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)","i")
        }, pt = /^(?:input|select|textarea|button)$/i, mt = /^h\d$/i, gt = /^[^{]+\{\s*\[native \w/, vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/, bt = /'|\\/g, wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)","ig"), xt = function(t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, _t = function() {
            N()
        };
        try {
            J.apply(Q = K.call(F.childNodes), F.childNodes),
            Q[F.childNodes.length].nodeType
        } catch (t) {
            J = {
                apply: Q.length ? function(t, e) {
                    Z.apply(t, K.call(e))
                }
                : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++]; )
                        ;
                    t.length = n - 1
                }
            }
        }
        x = e.support = {},
        S = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }
        ,
        N = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t : F;
            return i !== $ && 9 === i.nodeType && i.documentElement ? ($ = i,
            A = $.documentElement,
            j = !S($),
            (n = $.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _t, !1) : n.attachEvent && n.attachEvent("onunload", _t)),
            x.attributes = r(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }),
            x.getElementsByTagName = r(function(t) {
                return t.appendChild($.createComment("")),
                !t.getElementsByTagName("*").length
            }),
            x.getElementsByClassName = gt.test($.getElementsByClassName),
            x.getById = r(function(t) {
                return A.appendChild(t).id = L,
                !$.getElementsByName || !$.getElementsByName(L).length
            }),
            x.getById ? (_.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && j) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }
            ,
            _.filter.ID = function(t) {
                var e = t.replace(wt, xt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }
            ) : (delete _.find.ID,
            _.filter.ID = function(t) {
                var e = t.replace(wt, xt);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }
            ),
            _.find.TAG = x.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
            }
            : function(t, e) {
                var n, i = [], r = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }
            ,
            _.find.CLASS = x.getElementsByClassName && function(t, e) {
                return "undefined" != typeof e.getElementsByClassName && j ? e.getElementsByClassName(t) : void 0
            }
            ,
            R = [],
            P = [],
            (x.qsa = gt.test($.querySelectorAll)) && (r(function(t) {
                A.appendChild(t).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + nt + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || P.push("\\[" + nt + "*(?:value|" + et + ")"),
                t.querySelectorAll("[id~=" + L + "-]").length || P.push("~="),
                t.querySelectorAll(":checked").length || P.push(":checked"),
                t.querySelectorAll("a#" + L + "+*").length || P.push(".#.+[+~]")
            }),
            r(function(t) {
                var e = $.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && P.push("name" + nt + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                P.push(",.*:")
            })),
            (x.matchesSelector = gt.test(I = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && r(function(t) {
                x.disconnectedMatch = I.call(t, "div"),
                I.call(t, "[s!='']:x"),
                R.push("!=", ot)
            }),
            P = P.length && new RegExp(P.join("|")),
            R = R.length && new RegExp(R.join("|")),
            e = gt.test(A.compareDocumentPosition),
            Y = e || gt.test(A.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t
                  , i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            }
            : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }
            ,
            B = e ? function(t, e) {
                if (t === e)
                    return M = !0,
                    0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1,
                1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === $ || t.ownerDocument === F && Y(F, t) ? -1 : e === $ || e.ownerDocument === F && Y(F, e) ? 1 : O ? tt(O, t) - tt(O, e) : 0 : 4 & n ? -1 : 1)
            }
            : function(t, e) {
                if (t === e)
                    return M = !0,
                    0;
                var n, i = 0, r = t.parentNode, o = e.parentNode, a = [t], l = [e];
                if (!r || !o)
                    return t === $ ? -1 : e === $ ? 1 : r ? -1 : o ? 1 : O ? tt(O, t) - tt(O, e) : 0;
                if (r === o)
                    return s(t, e);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (n = e; n = n.parentNode; )
                    l.unshift(n);
                for (; a[i] === l[i]; )
                    i++;
                return i ? s(a[i], l[i]) : a[i] === F ? -1 : l[i] === F ? 1 : 0
            }
            ,
            $) : $
        }
        ,
        e.matches = function(t, n) {
            return e(t, null, null, n)
        }
        ,
        e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== $ && N(t),
            n = n.replace(ct, "='$1']"),
            x.matchesSelector && j && !G[n + " "] && (!R || !R.test(n)) && (!P || !P.test(n)))
                try {
                    var i = I.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return i
                } catch (t) {}
            return e(n, $, null, [t]).length > 0
        }
        ,
        e.contains = function(t, e) {
            return (t.ownerDocument || t) !== $ && N(t),
            Y(t, e)
        }
        ,
        e.attr = function(t, e) {
            (t.ownerDocument || t) !== $ && N(t);
            var n = _.attrHandle[e.toLowerCase()]
              , i = n && z.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !j) : void 0;
            return void 0 !== i ? i : x.attributes || !j ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }
        ,
        e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        e.uniqueSort = function(t) {
            var e, n = [], i = 0, r = 0;
            if (M = !x.detectDuplicates,
            O = !x.sortStable && t.slice(0),
            t.sort(B),
            M) {
                for (; e = t[r++]; )
                    e === t[r] && (i = n.push(r));
                for (; i--; )
                    t.splice(n[i], 1)
            }
            return O = null,
            t
        }
        ,
        T = e.getText = function(t) {
            var e, n = "", i = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += T(t)
                } else if (3 === r || 4 === r)
                    return t.nodeValue
            } else
                for (; e = t[i++]; )
                    n += T(e);
            return n
        }
        ,
        _ = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(wt, xt),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                    t[2] = n.slice(0, e)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(wt, xt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = q[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && q(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : !n || (o += "",
                        "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3)
                      , s = "last" !== t.slice(-4)
                      , a = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode
                    }
                    : function(e, n, l) {
                        var u, c, d, f, h, p, m = o !== s ? "nextSibling" : "previousSibling", g = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (f = e; f = f[m]; )
                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                            return !1;
                                    p = m = "only" === t && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? g.firstChild : g.lastChild],
                            s && y) {
                                for (f = g,
                                d = f[L] || (f[L] = {}),
                                c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                u = c[t] || [],
                                h = u[0] === H && u[1],
                                b = h && u[2],
                                f = h && g.childNodes[h]; f = ++h && f && f[m] || (b = h = 0) || p.pop(); )
                                    if (1 === f.nodeType && ++b && f === e) {
                                        c[t] = [H, h, b];
                                        break
                                    }
                            } else if (y && (f = e,
                            d = f[L] || (f[L] = {}),
                            c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                            u = c[t] || [],
                            h = u[0] === H && u[1],
                            b = h),
                            b === !1)
                                for (; (f = ++h && f && f[m] || (b = h = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (d = f[L] || (f[L] = {}),
                                c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                c[t] = [H, b]),
                                f !== e)); )
                                    ;
                            return b -= r,
                            b === i || b % i === 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var r, o = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[L] ? o(n) : o.length > 1 ? (r = [t, t, "", n],
                    _.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = o(t, n), s = r.length; s--; )
                            i = tt(t, r[s]),
                            t[i] = !(e[i] = r[s])
                    }) : function(t) {
                        return o(t, 0, r)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = []
                      , n = []
                      , r = C(t.replace(at, "$1"));
                    return r[L] ? i(function(t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--; )
                            (o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, i, o) {
                        return e[0] = t,
                        r(e, null, o, n),
                        e[0] = null,
                        !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(wt, xt),
                    function(e) {
                        return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                    }
                }),
                lang: i(function(t) {
                    return ft.test(t || "") || e.error("unsupported lang: " + t),
                    t = t.replace(wt, xt).toLowerCase(),
                    function(e) {
                        var n;
                        do
                            if (n = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === t || 0 === n.indexOf(t + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);return !1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === A
                },
                focus: function(t) {
                    return t === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !_.pseudos.empty(t)
                },
                header: function(t) {
                    return mt.test(t.nodeName)
                },
                input: function(t) {
                    return pt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: u(function(t, e) {
                    for (var n = 0; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var n = 1; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                lt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0; )
                        t.push(i);
                    return t
                }),
                gt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e; )
                        t.push(i);
                    return t
                })
            }
        },
        _.pseudos.nth = _.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            _.pseudos[w] = a(w);
        for (w in {
            submit: !0,
            reset: !0
        })
            _.pseudos[w] = l(w);
        return d.prototype = _.filters = _.pseudos,
        _.setFilters = new d,
        k = e.tokenize = function(t, n) {
            var i, r, o, s, a, l, u, c = U[t + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (a = t,
            l = [],
            u = _.preFilter; a; ) {
                i && !(r = lt.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                l.push(o = [])),
                i = !1,
                (r = ut.exec(a)) && (i = r.shift(),
                o.push({
                    value: i,
                    type: r[0].replace(at, " ")
                }),
                a = a.slice(i.length));
                for (s in _.filter)
                    !(r = ht[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(),
                    o.push({
                        value: i,
                        type: s,
                        matches: r
                    }),
                    a = a.slice(i.length));
                if (!i)
                    break
            }
            return n ? a.length : a ? e.error(t) : U(t, l).slice(0)
        }
        ,
        C = e.compile = function(t, e) {
            var n, i = [], r = [], o = G[t + " "];
            if (!o) {
                for (e || (e = k(t)),
                n = e.length; n--; )
                    o = y(e[n]),
                    o[L] ? i.push(o) : r.push(o);
                o = G(t, b(r, i)),
                o.selector = t
            }
            return o
        }
        ,
        D = e.select = function(t, e, n, i) {
            var r, o, s, a, l, u = "function" == typeof t && t, d = !i && k(t = u.selector || t);
            if (n = n || [],
            1 === d.length) {
                if (o = d[0] = d[0].slice(0),
                o.length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === e.nodeType && j && _.relative[o[1].type]) {
                    if (e = (_.find.ID(s.matches[0].replace(wt, xt), e) || [])[0],
                    !e)
                        return n;
                    u && (e = e.parentNode),
                    t = t.slice(o.shift().value.length)
                }
                for (r = ht.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r],
                !_.relative[a = s.type]); )
                    if ((l = _.find[a]) && (i = l(s.matches[0].replace(wt, xt), yt.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(r, 1),
                        t = i.length && f(o),
                        !t)
                            return J.apply(n, i),
                            n;
                        break
                    }
            }
            return (u || C(t, d))(i, e, !j, n, !e || yt.test(t) && c(e.parentNode) || e),
            n
        }
        ,
        x.sortStable = L.split("").sort(B).join("") === L,
        x.detectDuplicates = !!M,
        N(),
        x.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition($.createElement("div"))
        }),
        r(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        x.attributes && r(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }),
        r(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }),
        e
    }(t);
    ot.find = ct,
    ot.expr = ct.selectors,
    ot.expr[":"] = ot.expr.pseudos,
    ot.uniqueSort = ot.unique = ct.uniqueSort,
    ot.text = ct.getText,
    ot.isXMLDoc = ct.isXML,
    ot.contains = ct.contains;
    var dt = function(t, e, n) {
        for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
                if (r && ot(t).is(n))
                    break;
                i.push(t)
            }
        return i
    }
      , ft = function(t, e) {
        for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
        return n
    }
      , ht = ot.expr.match.needsContext
      , pt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , mt = /^.[^:#\[\.,]*$/;
    ot.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === i.nodeType ? ot.find.matchesSelector(i, t) ? [i] : [] : ot.find.matches(t, ot.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }
    ,
    ot.fn.extend({
        find: function(t) {
            var e, n = this.length, i = [], r = this;
            if ("string" != typeof t)
                return this.pushStack(ot(t).filter(function() {
                    for (e = 0; n > e; e++)
                        if (ot.contains(r[e], this))
                            return !0
                }));
            for (e = 0; n > e; e++)
                ot.find(t, r[e], i);
            return i = this.pushStack(n > 1 ? ot.unique(i) : i),
            i.selector = this.selector ? this.selector + " " + t : t,
            i
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && ht.test(t) ? ot(t) : t || [], !1).length
        }
    });
    var gt, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, yt = ot.fn.init = function(t, e, n) {
        var i, r;
        if (!t)
            return this;
        if (n = n || gt,
        "string" == typeof t) {
            if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : vt.exec(t),
            !i || !i[1] && e)
                return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof ot ? e[0] : e,
                ot.merge(this, ot.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Q, !0)),
                pt.test(i[1]) && ot.isPlainObject(e))
                    for (i in e)
                        ot.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            return r = Q.getElementById(i[2]),
            r && r.parentNode && (this.length = 1,
            this[0] = r),
            this.context = Q,
            this.selector = t,
            this
        }
        return t.nodeType ? (this.context = this[0] = t,
        this.length = 1,
        this) : ot.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector,
        this.context = t.context),
        ot.makeArray(t, this))
    }
    ;
    yt.prototype = ot.fn,
    gt = ot(Q);
    var bt = /^(?:parents|prev(?:Until|All))/
      , wt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ot.fn.extend({
        has: function(t) {
            var e = ot(t, this)
              , n = e.length;
            return this.filter(function() {
                for (var t = 0; n > t; t++)
                    if (ot.contains(this, e[t]))
                        return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], s = ht.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? K.call(ot(t), this[0]) : K.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    ot.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return dt(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return dt(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return dt(t, "nextSibling")
        },
        prevAll: function(t) {
            return dt(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return dt(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return dt(t, "previousSibling", n)
        },
        siblings: function(t) {
            return ft((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return ft(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || ot.merge([], t.childNodes)
        }
    }, function(t, e) {
        ot.fn[t] = function(n, i) {
            var r = ot.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n),
            i && "string" == typeof i && (r = ot.filter(i, r)),
            this.length > 1 && (wt[t] || ot.uniqueSort(r),
            bt.test(t) && r.reverse()),
            this.pushStack(r)
        }
    });
    var xt = /\S+/g;
    ot.Callbacks = function(t) {
        t = "string" == typeof t ? o(t) : ot.extend({}, t);
        var e, n, i, r, s = [], a = [], l = -1, u = function() {
            for (r = t.once,
            i = e = !0; a.length; l = -1)
                for (n = a.shift(); ++l < s.length; )
                    s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length,
                    n = !1);
            t.memory || (n = !1),
            e = !1,
            r && (s = n ? [] : "")
        }, c = {
            add: function() {
                return s && (n && !e && (l = s.length - 1,
                a.push(n)),
                function e(n) {
                    ot.each(n, function(n, i) {
                        ot.isFunction(i) ? t.unique && c.has(i) || s.push(i) : i && i.length && "string" !== ot.type(i) && e(i)
                    })
                }(arguments),
                n && !e && u()),
                this
            },
            remove: function() {
                return ot.each(arguments, function(t, e) {
                    for (var n; (n = ot.inArray(e, s, n)) > -1; )
                        s.splice(n, 1),
                        l >= n && l--
                }),
                this
            },
            has: function(t) {
                return t ? ot.inArray(t, s) > -1 : s.length > 0
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return r = a = [],
                s = n = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return r = a = [],
                n || (s = n = ""),
                this
            },
            locked: function() {
                return !!r
            },
            fireWith: function(t, n) {
                return r || (n = n || [],
                n = [t, n.slice ? n.slice() : n],
                a.push(n),
                e || u()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return c
    }
    ,
    ot.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", ot.Callbacks("once memory"), "resolved"], ["reject", "fail", ot.Callbacks("once memory"), "rejected"], ["notify", "progress", ot.Callbacks("memory")]]
              , n = "pending"
              , i = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var t = arguments;
                    return ot.Deferred(function(n) {
                        ot.each(e, function(e, o) {
                            var s = ot.isFunction(t[e]) && t[e];
                            r[o[1]](function() {
                                var t = s && s.apply(this, arguments);
                                t && ot.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? ot.extend(t, i) : i
                }
            }
              , r = {};
            return i.pipe = i.then,
            ot.each(e, function(t, o) {
                var s = o[2]
                  , a = o[3];
                i[o[1]] = s.add,
                a && s.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock),
                r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments),
                    this
                }
                ,
                r[o[0] + "With"] = s.fireWith
            }),
            i.promise(r),
            t && t.call(r, r),
            r
        },
        when: function(t) {
            var e, n, i, r = 0, o = X.call(arguments), s = o.length, a = 1 !== s || t && ot.isFunction(t.promise) ? s : 0, l = 1 === a ? t : ot.Deferred(), u = function(t, n, i) {
                return function(r) {
                    n[t] = this,
                    i[t] = arguments.length > 1 ? X.call(arguments) : r,
                    i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                }
            };
            if (s > 1)
                for (e = new Array(s),
                n = new Array(s),
                i = new Array(s); s > r; r++)
                    o[r] && ot.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, e)).done(u(r, i, o)).fail(l.reject) : --a;
            return a || l.resolveWith(i, o),
            l.promise()
        }
    });
    var _t;
    ot.fn.ready = function(t) {
        return ot.ready.promise().done(t),
        this
    }
    ,
    ot.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? ot.readyWait++ : ot.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0,
            t !== !0 && --ot.readyWait > 0 || (_t.resolveWith(Q, [ot]),
            ot.fn.triggerHandler && (ot(Q).triggerHandler("ready"),
            ot(Q).off("ready"))))
        }
    }),
    ot.ready.promise = function(e) {
        return _t || (_t = ot.Deferred(),
        "complete" === Q.readyState || "loading" !== Q.readyState && !Q.documentElement.doScroll ? t.setTimeout(ot.ready) : (Q.addEventListener("DOMContentLoaded", s),
        t.addEventListener("load", s))),
        _t.promise(e)
    }
    ,
    ot.ready.promise();
    var Tt = function(t, e, n, i, r, o, s) {
        var a = 0
          , l = t.length
          , u = null == n;
        if ("object" === ot.type(n)) {
            r = !0;
            for (a in n)
                Tt(t, e, a, n[a], !0, o, s)
        } else if (void 0 !== i && (r = !0,
        ot.isFunction(i) || (s = !0),
        u && (s ? (e.call(t, i),
        e = null) : (u = e,
        e = function(t, e, n) {
            return u.call(ot(t), n)
        }
        )),
        e))
            for (; l > a; a++)
                e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
    }
      , St = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
    a.uid = 1,
    a.prototype = {
        register: function(t, e) {
            var n = e || {};
            return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }),
            t[this.expando]
        },
        cache: function(t) {
            if (!St(t))
                return {};
            var e = t[this.expando];
            return e || (e = {},
            St(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))),
            e
        },
        set: function(t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e)
                r[e] = n;
            else
                for (i in e)
                    r[i] = e[i];
            return r
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
        },
        access: function(t, e, n) {
            var i;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e),
            void 0 !== i ? i : this.get(t, ot.camelCase(e))) : (this.set(t, e, n),
            void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i, r, o = t[this.expando];
            if (void 0 !== o) {
                if (void 0 === e)
                    this.register(t);
                else {
                    ot.isArray(e) ? i = e.concat(e.map(ot.camelCase)) : (r = ot.camelCase(e),
                    e in o ? i = [e, r] : (i = r,
                    i = i in o ? [i] : i.match(xt) || [])),
                    n = i.length;
                    for (; n--; )
                        delete o[i[n]]
                }
                (void 0 === e || ot.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !ot.isEmptyObject(e)
        }
    };
    var kt = new a
      , Ct = new a
      , Dt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Et = /[A-Z]/g;
    ot.extend({
        hasData: function(t) {
            return Ct.hasData(t) || kt.hasData(t)
        },
        data: function(t, e, n) {
            return Ct.access(t, e, n)
        },
        removeData: function(t, e) {
            Ct.remove(t, e)
        },
        _data: function(t, e, n) {
            return kt.access(t, e, n)
        },
        _removeData: function(t, e) {
            kt.remove(t, e)
        }
    }),
    ot.fn.extend({
        data: function(t, e) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = Ct.get(o),
                1 === o.nodeType && !kt.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && (i = s[n].name,
                        0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)),
                        l(o, i, r[i])));
                    kt.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                Ct.set(this, t)
            }) : Tt(this, function(e) {
                var n, i;
                if (o && void 0 === e) {
                    if (n = Ct.get(o, t) || Ct.get(o, t.replace(Et, "-$&").toLowerCase()),
                    void 0 !== n)
                        return n;
                    if (i = ot.camelCase(t),
                    n = Ct.get(o, i),
                    void 0 !== n)
                        return n;
                    if (n = l(o, i, void 0),
                    void 0 !== n)
                        return n
                } else
                    i = ot.camelCase(t),
                    this.each(function() {
                        var n = Ct.get(this, i);
                        Ct.set(this, i, e),
                        t.indexOf("-") > -1 && void 0 !== n && Ct.set(this, t, e)
                    })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                Ct.remove(this, t)
            })
        }
    }),
    ot.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue",
            i = kt.get(t, e),
            n && (!i || ot.isArray(n) ? i = kt.access(t, e, ot.makeArray(n)) : i.push(n)),
            i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = ot.queue(t, e)
              , i = n.length
              , r = n.shift()
              , o = ot._queueHooks(t, e)
              , s = function() {
                ot.dequeue(t, e)
            };
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === e && n.unshift("inprogress"),
            delete o.stop,
            r.call(t, s, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return kt.get(t, n) || kt.access(t, n, {
                empty: ot.Callbacks("once memory").add(function() {
                    kt.remove(t, [e + "queue", n])
                })
            })
        }
    }),
    ot.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t,
            t = "fx",
            n--),
            arguments.length < n ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = ot.queue(this, t, e);
                ot._queueHooks(this, t),
                "fx" === t && "inprogress" !== n[0] && ot.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                ot.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1, r = ot.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t,
            t = void 0),
            t = t || "fx"; s--; )
                n = kt.get(o[s], t + "queueHooks"),
                n && n.empty && (i++,
                n.empty.add(a));
            return a(),
            r.promise(e)
        }
    });
    var Ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Mt = new RegExp("^(?:([+-])=|)(" + Ot + ")([a-z%]*)$","i")
      , Nt = ["Top", "Right", "Bottom", "Left"]
      , $t = function(t, e) {
        return t = e || t,
        "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
    }
      , At = /^(?:checkbox|radio)$/i
      , jt = /<([\w:-]+)/
      , Pt = /^$|\/(?:java|ecma)script/i
      , Rt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Rt.optgroup = Rt.option,
    Rt.tbody = Rt.tfoot = Rt.colgroup = Rt.caption = Rt.thead,
    Rt.th = Rt.td;
    var It = /<|&#?\w+;/;
    !function() {
        var t = Q.createDocumentFragment()
          , e = t.appendChild(Q.createElement("div"))
          , n = Q.createElement("input");
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        e.appendChild(n),
        it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Yt = /^key/
      , Lt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ft = /^([^.]*)(?:\.(.+)|)/;
    ot.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, u, c, d, f, h, p, m, g = kt.get(t);
            if (g)
                for (n.handler && (o = n,
                n = o.handler,
                r = o.selector),
                n.guid || (n.guid = ot.guid++),
                (l = g.events) || (l = g.events = {}),
                (s = g.handle) || (s = g.handle = function(e) {
                    return "undefined" != typeof ot && ot.event.triggered !== e.type ? ot.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                e = (e || "").match(xt) || [""],
                u = e.length; u--; )
                    a = Ft.exec(e[u]) || [],
                    h = m = a[1],
                    p = (a[2] || "").split(".").sort(),
                    h && (d = ot.event.special[h] || {},
                    h = (r ? d.delegateType : d.bindType) || h,
                    d = ot.event.special[h] || {},
                    c = ot.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && ot.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o),
                    (f = l[h]) || (f = l[h] = [],
                    f.delegateCount = 0,
                    d.setup && d.setup.call(t, i, p, s) !== !1 || t.addEventListener && t.addEventListener(h, s)),
                    d.add && (d.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    r ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                    ot.event.global[h] = !0)
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, l, u, c, d, f, h, p, m, g = kt.hasData(t) && kt.get(t);
            if (g && (l = g.events)) {
                for (e = (e || "").match(xt) || [""],
                u = e.length; u--; )
                    if (a = Ft.exec(e[u]) || [],
                    h = m = a[1],
                    p = (a[2] || "").split(".").sort(),
                    h) {
                        for (d = ot.event.special[h] || {},
                        h = (i ? d.delegateType : d.bindType) || h,
                        f = l[h] || [],
                        a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = f.length; o--; )
                            c = f[o],
                            !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(o, 1),
                            c.selector && f.delegateCount--,
                            d.remove && d.remove.call(t, c));
                        s && !f.length && (d.teardown && d.teardown.call(t, p, g.handle) !== !1 || ot.removeEvent(t, h, g.handle),
                        delete l[h])
                    } else
                        for (h in l)
                            ot.event.remove(t, h + e[u], n, i, !0);
                ot.isEmptyObject(l) && kt.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            t = ot.event.fix(t);
            var e, n, i, r, o, s = [], a = X.call(arguments), l = (kt.get(this, "events") || {})[t.type] || [], u = ot.event.special[t.type] || {};
            if (a[0] = t,
            t.delegateTarget = this,
            !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (s = ot.event.handlers.call(this, t, l),
                e = 0; (r = s[e++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = r.elem,
                    n = 0; (o = r.handlers[n++]) && !t.isImmediatePropagationStopped(); )
                        t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o,
                        t.data = o.data,
                        i = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a),
                        void 0 !== i && (t.result = i) === !1 && (t.preventDefault(),
                        t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (i = [],
                        n = 0; a > n; n++)
                            o = e[n],
                            r = o.selector + " ",
                            void 0 === i[r] && (i[r] = o.needsContext ? ot(r, this).index(l) > -1 : ot.find(r, this, null, [l]).length),
                            i[r] && i.push(o);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }),
            s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || Q,
                i = n.documentElement,
                r = n.body,
                t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0),
                t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)),
                t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                t
            }
        },
        fix: function(t) {
            if (t[ot.expando])
                return t;
            var e, n, i, r = t.type, o = t, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Lt.test(r) ? this.mouseHooks : Yt.test(r) ? this.keyHooks : {}),
            i = s.props ? this.props.concat(s.props) : this.props,
            t = new ot.Event(o),
            e = i.length; e--; )
                n = i[e],
                t[n] = o[n];
            return t.target || (t.target = Q),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            s.filter ? s.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== m() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === m() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(t) {
                    return ot.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    },
    ot.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }
    ,
    ot.Event = function(t, e) {
        return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : p) : this.type = t,
        e && ot.extend(this, e),
        this.timeStamp = t && t.timeStamp || ot.now(),
        void (this[ot.expando] = !0)) : new ot.Event(t,e)
    }
    ,
    ot.Event.prototype = {
        constructor: ot.Event,
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = h,
            t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = h,
            t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = h,
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        ot.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this, r = t.relatedTarget, o = t.handleObj;
                return r && (r === i || ot.contains(i, r)) || (t.type = o.origType,
                n = o.handler.apply(this, arguments),
                t.type = e),
                n
            }
        }
    }),
    ot.fn.extend({
        on: function(t, e, n, i) {
            return g(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return g(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj)
                return i = t.handleObj,
                ot(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof t) {
                for (r in t)
                    this.off(r, e, t[r]);
                return this
            }
            return e !== !1 && "function" != typeof e || (n = e,
            e = void 0),
            n === !1 && (n = p),
            this.each(function() {
                ot.event.remove(this, t, n, e)
            })
        }
    });
    var Ht = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , Wt = /<script|<style|<link/i
      , qt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ut = /^true\/(.*)/
      , Gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ot.extend({
        htmlPrefilter: function(t) {
            return t.replace(Ht, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, r, o, s, a = t.cloneNode(!0), l = ot.contains(t.ownerDocument, t);
            if (!(it.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))
                for (s = c(a),
                o = c(t),
                i = 0,
                r = o.length; r > i; i++)
                    x(o[i], s[i]);
            if (e)
                if (n)
                    for (o = o || c(t),
                    s = s || c(a),
                    i = 0,
                    r = o.length; r > i; i++)
                        w(o[i], s[i]);
                else
                    w(t, a);
            return s = c(a, "script"),
            s.length > 0 && d(s, !l && c(t, "script")),
            a
        },
        cleanData: function(t) {
            for (var e, n, i, r = ot.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if (St(n)) {
                    if (e = n[kt.expando]) {
                        if (e.events)
                            for (i in e.events)
                                r[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, e.handle);
                        n[kt.expando] = void 0
                    }
                    n[Ct.expando] && (n[Ct.expando] = void 0)
                }
        }
    }),
    ot.fn.extend({
        domManip: _,
        detach: function(t) {
            return T(this, t, !0)
        },
        remove: function(t) {
            return T(this, t)
        },
        text: function(t) {
            return Tt(this, function(t) {
                return void 0 === t ? ot.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return _(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return _(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return _(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return _(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType && (ot.cleanData(c(t, !1)),
                t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map(function() {
                return ot.clone(this, t, e)
            })
        },
        html: function(t) {
            return Tt(this, function(t) {
                var e = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === t && 1 === e.nodeType)
                    return e.innerHTML;
                if ("string" == typeof t && !Wt.test(t) && !Rt[(jt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ot.htmlPrefilter(t);
                    try {
                        for (; i > n; n++)
                            e = this[n] || {},
                            1 === e.nodeType && (ot.cleanData(c(e, !1)),
                            e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return _(this, arguments, function(e) {
                var n = this.parentNode;
                ot.inArray(this, t) < 0 && (ot.cleanData(c(this)),
                n && n.replaceChild(e, this))
            }, t)
        }
    }),
    ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ot.fn[t] = function(t) {
            for (var n, i = [], r = ot(t), o = r.length - 1, s = 0; o >= s; s++)
                n = s === o ? this : this.clone(!0),
                ot(r[s])[e](n),
                J.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Bt, Vt = {
        HTML: "block",
        BODY: "block"
    }, zt = /^margin/, Qt = new RegExp("^(" + Ot + ")(?!px)[a-z%]+$","i"), Xt = function(e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t),
        n.getComputedStyle(e)
    }, Zt = function(t, e, n, i) {
        var r, o, s = {};
        for (o in e)
            s[o] = t.style[o],
            t.style[o] = e[o];
        r = n.apply(t, i || []);
        for (o in e)
            t.style[o] = s[o];
        return r
    }, Jt = Q.documentElement;
    !function() {
        function e() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            a.innerHTML = "",
            Jt.appendChild(s);
            var e = t.getComputedStyle(a);
            n = "1%" !== e.top,
            o = "2px" === e.marginLeft,
            i = "4px" === e.width,
            a.style.marginRight = "50%",
            r = "4px" === e.marginRight,
            Jt.removeChild(s)
        }
        var n, i, r, o, s = Q.createElement("div"), a = Q.createElement("div");
        a.style && (a.style.backgroundClip = "content-box",
        a.cloneNode(!0).style.backgroundClip = "",
        it.clearCloneStyle = "content-box" === a.style.backgroundClip,
        s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        s.appendChild(a),
        ot.extend(it, {
            pixelPosition: function() {
                return e(),
                n
            },
            boxSizingReliable: function() {
                return null == i && e(),
                i
            },
            pixelMarginRight: function() {
                return null == i && e(),
                r
            },
            reliableMarginLeft: function() {
                return null == i && e(),
                o
            },
            reliableMarginRight: function() {
                var e, n = a.appendChild(Q.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                n.style.marginRight = n.style.width = "0",
                a.style.width = "1px",
                Jt.appendChild(s),
                e = !parseFloat(t.getComputedStyle(n).marginRight),
                Jt.removeChild(s),
                a.removeChild(n),
                e
            }
        }))
    }();
    var Kt = /^(none|table(?!-c[ea]).+)/
      , te = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ee = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , ne = ["Webkit", "O", "Moz", "ms"]
      , ie = Q.createElement("div").style;
    ot.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = C(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = ot.camelCase(e), l = t.style;
                return e = ot.cssProps[a] || (ot.cssProps[a] = E(a) || a),
                s = ot.cssHooks[e] || ot.cssHooks[a],
                void 0 === n ? s && "get"in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e] : (o = typeof n,
                "string" === o && (r = Mt.exec(n)) && r[1] && (n = u(t, e, r),
                o = "number"),
                void (null != n && n === n && ("number" === o && (n += r && r[3] || (ot.cssNumber[a] ? "" : "px")),
                it.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n))))
            }
        },
        css: function(t, e, n, i) {
            var r, o, s, a = ot.camelCase(e);
            return e = ot.cssProps[a] || (ot.cssProps[a] = E(a) || a),
            s = ot.cssHooks[e] || ot.cssHooks[a],
            s && "get"in s && (r = s.get(t, !0, n)),
            void 0 === r && (r = C(t, e, i)),
            "normal" === r && e in ee && (r = ee[e]),
            "" === n || n ? (o = parseFloat(r),
            n === !0 || isFinite(o) ? o || 0 : r) : r
        }
    }),
    ot.each(["height", "width"], function(t, e) {
        ot.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? Kt.test(ot.css(t, "display")) && 0 === t.offsetWidth ? Zt(t, te, function() {
                    return N(t, e, i)
                }) : N(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var r, o = i && Xt(t), s = i && M(t, e, i, "border-box" === ot.css(t, "boxSizing", !1, o), o);
                return s && (r = Mt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n,
                n = ot.css(t, e)),
                O(t, n, s)
            }
        }
    }),
    ot.cssHooks.marginLeft = D(it.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(C(t, "marginLeft")) || t.getBoundingClientRect().left - Zt(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px" : void 0
    }),
    ot.cssHooks.marginRight = D(it.reliableMarginRight, function(t, e) {
        return e ? Zt(t, {
            display: "inline-block"
        }, C, [t, "marginRight"]) : void 0
    }),
    ot.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ot.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                    r[t + Nt[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        zt.test(t) || (ot.cssHooks[t + e].set = O)
    }),
    ot.fn.extend({
        css: function(t, e) {
            return Tt(this, function(t, e, n) {
                var i, r, o = {}, s = 0;
                if (ot.isArray(e)) {
                    for (i = Xt(t),
                    r = e.length; r > s; s++)
                        o[e[s]] = ot.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? ot.style(t, e, n) : ot.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return $(this, !0)
        },
        hide: function() {
            return $(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                $t(this) ? ot(this).show() : ot(this).hide()
            })
        }
    }),
    ot.Tween = A,
    A.prototype = {
        constructor: A,
        init: function(t, e, n, i, r, o) {
            this.elem = t,
            this.prop = n,
            this.easing = r || ot.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (ot.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = A.propHooks[this.prop];
            return t && t.get ? t.get(this) : A.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = A.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : A.propHooks._default.set(this),
            this
        }
    },
    A.prototype.init.prototype = A.prototype,
    A.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ot.css(t.elem, t.prop, ""),
                e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ot.cssProps[t.prop]] && !ot.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ot.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    },
    A.propHooks.scrollTop = A.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    ot.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    ot.fx = A.prototype.init,
    ot.fx.step = {};
    var re, oe, se = /^(?:toggle|show|hide)$/, ae = /queueHooks$/;
    ot.Animation = ot.extend(L, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return u(n.elem, t, Mt.exec(e), n),
                n
            }
            ]
        },
        tweener: function(t, e) {
            ot.isFunction(t) ? (e = t,
            t = ["*"]) : t = t.match(xt);
            for (var n, i = 0, r = t.length; r > i; i++)
                n = t[i],
                L.tweeners[n] = L.tweeners[n] || [],
                L.tweeners[n].unshift(e)
        },
        prefilters: [I],
        prefilter: function(t, e) {
            e ? L.prefilters.unshift(t) : L.prefilters.push(t)
        }
    }),
    ot.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? ot.extend({}, t) : {
            complete: n || !n && e || ot.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !ot.isFunction(e) && e
        };
        return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default,
        null != i.queue && i.queue !== !0 || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            ot.isFunction(i.old) && i.old.call(this),
            i.queue && ot.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    ot.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter($t).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var r = ot.isEmptyObject(t)
              , o = ot.speed(e, n, i)
              , s = function() {
                var e = L(this, ot.extend({}, t), o);
                (r || kt.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s,
            r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop,
                e(n)
            };
            return "string" != typeof t && (n = e,
            e = t,
            t = void 0),
            e && t !== !1 && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0
                  , r = null != t && t + "queueHooks"
                  , o = ot.timers
                  , s = kt.get(this);
                if (r)
                    s[r] && s[r].stop && i(s[r]);
                else
                    for (r in s)
                        s[r] && s[r].stop && ae.test(r) && i(s[r]);
                for (r = o.length; r--; )
                    o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n),
                    e = !1,
                    o.splice(r, 1));
                !e && n || ot.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"),
            this.each(function() {
                var e, n = kt.get(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = ot.timers, s = i ? i.length : 0;
                for (n.finish = !0,
                ot.queue(this, t, []),
                r && r.stop && r.stop.call(this, !0),
                e = o.length; e--; )
                    o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0),
                    o.splice(e, 1));
                for (e = 0; s > e; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }),
    ot.each(["toggle", "show", "hide"], function(t, e) {
        var n = ot.fn[e];
        ot.fn[e] = function(t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(P(e, !0), t, i, r)
        }
    }),
    ot.each({
        slideDown: P("show"),
        slideUp: P("hide"),
        slideToggle: P("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        ot.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }),
    ot.timers = [],
    ot.fx.tick = function() {
        var t, e = 0, n = ot.timers;
        for (re = ot.now(); e < n.length; e++)
            t = n[e],
            t() || n[e] !== t || n.splice(e--, 1);
        n.length || ot.fx.stop(),
        re = void 0
    }
    ,
    ot.fx.timer = function(t) {
        ot.timers.push(t),
        t() ? ot.fx.start() : ot.timers.pop()
    }
    ,
    ot.fx.interval = 13,
    ot.fx.start = function() {
        oe || (oe = t.setInterval(ot.fx.tick, ot.fx.interval))
    }
    ,
    ot.fx.stop = function() {
        t.clearInterval(oe),
        oe = null
    }
    ,
    ot.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ot.fn.delay = function(e, n) {
        return e = ot.fx ? ot.fx.speeds[e] || e : e,
        n = n || "fx",
        this.queue(n, function(n, i) {
            var r = t.setTimeout(n, e);
            i.stop = function() {
                t.clearTimeout(r)
            }
        })
    }
    ,
    function() {
        var t = Q.createElement("input")
          , e = Q.createElement("select")
          , n = e.appendChild(Q.createElement("option"));
        t.type = "checkbox",
        it.checkOn = "" !== t.value,
        it.optSelected = n.selected,
        e.disabled = !0,
        it.optDisabled = !n.disabled,
        t = Q.createElement("input"),
        t.value = "t",
        t.type = "radio",
        it.radioValue = "t" === t.value
    }();
    var le, ue = ot.expr.attrHandle;
    ot.fn.extend({
        attr: function(t, e) {
            return Tt(this, ot.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ot.removeAttr(this, t)
            })
        }
    }),
    ot.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof t.getAttribute ? ot.prop(t, e, n) : (1 === o && ot.isXMLDoc(t) || (e = e.toLowerCase(),
                r = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? le : void 0)),
                void 0 !== n ? null === n ? void ot.removeAttr(t, e) : r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""),
                n) : r && "get"in r && null !== (i = r.get(t, e)) ? i : (i = ot.find.attr(t, e),
                null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!it.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i, r = 0, o = e && e.match(xt);
            if (o && 1 === t.nodeType)
                for (; n = o[r++]; )
                    i = ot.propFix[n] || n,
                    ot.expr.match.bool.test(n) && (t[i] = !1),
                    t.removeAttribute(n)
        }
    }),
    le = {
        set: function(t, e, n) {
            return e === !1 ? ot.removeAttr(t, n) : t.setAttribute(n, n),
            n
        }
    },
    ot.each(ot.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = ue[e] || ot.find.attr;
        ue[e] = function(t, e, i) {
            var r, o;
            return i || (o = ue[e],
            ue[e] = r,
            r = null != n(t, e, i) ? e.toLowerCase() : null,
            ue[e] = o),
            r
        }
    });
    var ce = /^(?:input|select|textarea|button)$/i
      , de = /^(?:a|area)$/i;
    ot.fn.extend({
        prop: function(t, e) {
            return Tt(this, ot.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[ot.propFix[t] || t]
            })
        }
    }),
    ot.extend({
        prop: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && ot.isXMLDoc(t) || (e = ot.propFix[e] || e,
                r = ot.propHooks[e]),
                void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get"in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ot.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ce.test(t.nodeName) || de.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    it.optSelected || (ot.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ot.propFix[this.toLowerCase()] = this
    });
    var fe = /[\t\r\n\f]/g;
    ot.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (ot.isFunction(t))
                return this.each(function(e) {
                    ot(this).addClass(t.call(this, e, F(this)))
                });
            if ("string" == typeof t && t)
                for (e = t.match(xt) || []; n = this[l++]; )
                    if (r = F(n),
                    i = 1 === n.nodeType && (" " + r + " ").replace(fe, " ")) {
                        for (s = 0; o = e[s++]; )
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = ot.trim(i),
                        r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (ot.isFunction(t))
                return this.each(function(e) {
                    ot(this).removeClass(t.call(this, e, F(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(xt) || []; n = this[l++]; )
                    if (r = F(n),
                    i = 1 === n.nodeType && (" " + r + " ").replace(fe, " ")) {
                        for (s = 0; o = e[s++]; )
                            for (; i.indexOf(" " + o + " ") > -1; )
                                i = i.replace(" " + o + " ", " ");
                        a = ot.trim(i),
                        r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function(n) {
                ot(this).toggleClass(t.call(this, n, F(this), e), e)
            }) : this.each(function() {
                var e, i, r, o;
                if ("string" === n)
                    for (i = 0,
                    r = ot(this),
                    o = t.match(xt) || []; e = o[i++]; )
                        r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else
                    void 0 !== t && "boolean" !== n || (e = F(this),
                    e && kt.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : kt.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++]; )
                if (1 === n.nodeType && (" " + F(n) + " ").replace(fe, " ").indexOf(e) > -1)
                    return !0;
            return !1
        }
    });
    var he = /\r/g
      , pe = /[\x20\t\r\n\f]+/g;
    ot.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = ot.isFunction(t),
            this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? t.call(this, n, ot(this).val()) : t,
                null == r ? r = "" : "number" == typeof r ? r += "" : ot.isArray(r) && (r = ot.map(r, function(t) {
                    return null == t ? "" : t + ""
                })),
                e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()],
                e && "set"in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = ot.valHooks[r.type] || ot.valHooks[r.nodeName.toLowerCase()],
            e && "get"in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value,
            "string" == typeof n ? n.replace(he, "") : null == n ? "" : n)) : void 0
        }
    }),
    ot.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ot.find.attr(t, "value");
                    return null != e ? e : ot.trim(ot.text(t)).replace(pe, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                        if (n = i[l],
                        (n.selected || l === r) && (it.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ot.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ot(n).val(),
                            o)
                                return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = ot.makeArray(e), s = r.length; s--; )
                        i = r[s],
                        (i.selected = ot.inArray(ot.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    ot.each(["radio", "checkbox"], function() {
        ot.valHooks[this] = {
            set: function(t, e) {
                return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) > -1 : void 0
            }
        },
        it.checkOn || (ot.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    });
    var me = /^(?:focusinfocus|focusoutblur)$/;
    ot.extend(ot.event, {
        trigger: function(e, n, i, r) {
            var o, s, a, l, u, c, d, f = [i || Q], h = nt.call(e, "type") ? e.type : e, p = nt.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = i = i || Q,
            3 !== i.nodeType && 8 !== i.nodeType && !me.test(h + ot.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."),
            h = p.shift(),
            p.sort()),
            u = h.indexOf(":") < 0 && "on" + h,
            e = e[ot.expando] ? e : new ot.Event(h,"object" == typeof e && e),
            e.isTrigger = r ? 2 : 3,
            e.namespace = p.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = i),
            n = null == n ? [e] : ot.makeArray(n, [e]),
            d = ot.event.special[h] || {},
            r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!r && !d.noBubble && !ot.isWindow(i)) {
                    for (l = d.delegateType || h,
                    me.test(l + h) || (s = s.parentNode); s; s = s.parentNode)
                        f.push(s),
                        a = s;
                    a === (i.ownerDocument || Q) && f.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0; (s = f[o++]) && !e.isPropagationStopped(); )
                    e.type = o > 1 ? l : d.bindType || h,
                    c = (kt.get(s, "events") || {})[e.type] && kt.get(s, "handle"),
                    c && c.apply(s, n),
                    c = u && s[u],
                    c && c.apply && St(s) && (e.result = c.apply(s, n),
                    e.result === !1 && e.preventDefault());
                return e.type = h,
                r || e.isDefaultPrevented() || d._default && d._default.apply(f.pop(), n) !== !1 || !St(i) || u && ot.isFunction(i[h]) && !ot.isWindow(i) && (a = i[u],
                a && (i[u] = null),
                ot.event.triggered = h,
                i[h](),
                ot.event.triggered = void 0,
                a && (i[u] = a)),
                e.result
            }
        },
        simulate: function(t, e, n) {
            var i = ot.extend(new ot.Event, n, {
                type: t,
                isSimulated: !0
            });
            ot.event.trigger(i, null, e)
        }
    }),
    ot.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                ot.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? ot.event.trigger(t, e, n, !0) : void 0
        }
    }),
    ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        ot.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }),
    ot.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }),
    it.focusin = "onfocusin"in t,
    it.focusin || ot.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            ot.event.simulate(e, t.target, ot.event.fix(t))
        };
        ot.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , r = kt.access(i, e);
                r || i.addEventListener(t, n, !0),
                kt.access(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , r = kt.access(i, e) - 1;
                r ? kt.access(i, e, r) : (i.removeEventListener(t, n, !0),
                kt.remove(i, e))
            }
        }
    });
    var ge = t.location
      , ve = ot.now()
      , ye = /\?/;
    ot.parseJSON = function(t) {
        return JSON.parse(t + "")
    }
    ,
    ot.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e)
            return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + e),
        n
    }
    ;
    var be = /#.*$/
      , we = /([?&])_=[^&]*/
      , xe = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , _e = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Te = /^(?:GET|HEAD)$/
      , Se = /^\/\//
      , ke = {}
      , Ce = {}
      , De = "*/".concat("*")
      , Ee = Q.createElement("a");
    Ee.href = ge.href,
    ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ge.href,
            type: "GET",
            isLocal: _e.test(ge.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": De,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ot.parseJSON,
                "text xml": ot.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? q(q(t, ot.ajaxSettings), e) : q(ot.ajaxSettings, t)
        },
        ajaxPrefilter: H(ke),
        ajaxTransport: H(Ce),
        ajax: function(e, n) {
            function i(e, n, i, a) {
                var u, d, y, b, x, T = n;
                2 !== w && (w = 2,
                l && t.clearTimeout(l),
                r = void 0,
                s = a || "",
                _.readyState = e > 0 ? 4 : 0,
                u = e >= 200 && 300 > e || 304 === e,
                i && (b = U(f, _, i)),
                b = G(f, b, _, u),
                u ? (f.ifModified && (x = _.getResponseHeader("Last-Modified"),
                x && (ot.lastModified[o] = x),
                x = _.getResponseHeader("etag"),
                x && (ot.etag[o] = x)),
                204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state,
                d = b.data,
                y = b.error,
                u = !y)) : (y = T,
                !e && T || (T = "error",
                0 > e && (e = 0))),
                _.status = e,
                _.statusText = (n || T) + "",
                u ? m.resolveWith(h, [d, T, _]) : m.rejectWith(h, [_, T, y]),
                _.statusCode(v),
                v = void 0,
                c && p.trigger(u ? "ajaxSuccess" : "ajaxError", [_, f, u ? d : y]),
                g.fireWith(h, [_, T]),
                c && (p.trigger("ajaxComplete", [_, f]),
                --ot.active || ot.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e,
            e = void 0),
            n = n || {};
            var r, o, s, a, l, u, c, d, f = ot.ajaxSetup({}, n), h = f.context || f, p = f.context && (h.nodeType || h.jquery) ? ot(h) : ot.event, m = ot.Deferred(), g = ot.Callbacks("once memory"), v = f.statusCode || {}, y = {}, b = {}, w = 0, x = "canceled", _ = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === w) {
                        if (!a)
                            for (a = {}; e = xe.exec(s); )
                                a[e[1].toLowerCase()] = e[2];
                        e = a[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? s : null
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return w || (t = b[n] = b[n] || t,
                    y[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return w || (f.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (2 > w)
                            for (e in t)
                                v[e] = [v[e], t[e]];
                        else
                            _.always(t[_.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || x;
                    return r && r.abort(e),
                    i(0, e),
                    this
                }
            };
            if (m.promise(_).complete = g.add,
            _.success = _.done,
            _.error = _.fail,
            f.url = ((e || f.url || ge.href) + "").replace(be, "").replace(Se, ge.protocol + "//"),
            f.type = n.method || n.type || f.method || f.type,
            f.dataTypes = ot.trim(f.dataType || "*").toLowerCase().match(xt) || [""],
            null == f.crossDomain) {
                u = Q.createElement("a");
                try {
                    u.href = f.url,
                    u.href = u.href,
                    f.crossDomain = Ee.protocol + "//" + Ee.host != u.protocol + "//" + u.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = ot.param(f.data, f.traditional)),
            W(ke, f, n, _),
            2 === w)
                return _;
            c = ot.event && f.global,
            c && 0 === ot.active++ && ot.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !Te.test(f.type),
            o = f.url,
            f.hasContent || (f.data && (o = f.url += (ye.test(o) ? "&" : "?") + f.data,
            delete f.data),
            f.cache === !1 && (f.url = we.test(o) ? o.replace(we, "$1_=" + ve++) : o + (ye.test(o) ? "&" : "?") + "_=" + ve++)),
            f.ifModified && (ot.lastModified[o] && _.setRequestHeader("If-Modified-Since", ot.lastModified[o]),
            ot.etag[o] && _.setRequestHeader("If-None-Match", ot.etag[o])),
            (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && _.setRequestHeader("Content-Type", f.contentType),
            _.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + De + "; q=0.01" : "") : f.accepts["*"]);
            for (d in f.headers)
                _.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (f.beforeSend.call(h, _, f) === !1 || 2 === w))
                return _.abort();
            x = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            })
                _[d](f[d]);
            if (r = W(Ce, f, n, _)) {
                if (_.readyState = 1,
                c && p.trigger("ajaxSend", [_, f]),
                2 === w)
                    return _;
                f.async && f.timeout > 0 && (l = t.setTimeout(function() {
                    _.abort("timeout")
                }, f.timeout));
                try {
                    w = 1,
                    r.send(y, i)
                } catch (t) {
                    if (!(2 > w))
                        throw t;
                    i(-1, t)
                }
            } else
                i(-1, "No Transport");
            return _
        },
        getJSON: function(t, e, n) {
            return ot.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return ot.get(t, void 0, e, "script")
        }
    }),
    ot.each(["get", "post"], function(t, e) {
        ot[e] = function(t, n, i, r) {
            return ot.isFunction(n) && (r = r || i,
            i = n,
            n = void 0),
            ot.ajax(ot.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, ot.isPlainObject(t) && t))
        }
    }),
    ot._evalUrl = function(t) {
        return ot.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    ot.fn.extend({
        wrapAll: function(t) {
            var e;
            return ot.isFunction(t) ? this.each(function(e) {
                ot(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = ot(t, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                return t
            }).append(this)),
            this)
        },
        wrapInner: function(t) {
            return ot.isFunction(t) ? this.each(function(e) {
                ot(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = ot(this)
                  , n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = ot.isFunction(t);
            return this.each(function(n) {
                ot(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    ot.expr.filters.hidden = function(t) {
        return !ot.expr.filters.visible(t)
    }
    ,
    ot.expr.filters.visible = function(t) {
        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
    }
    ;
    var Oe = /%20/g
      , Me = /\[\]$/
      , Ne = /\r?\n/g
      , $e = /^(?:submit|button|image|reset|file)$/i
      , Ae = /^(?:input|select|textarea|keygen)/i;
    ot.param = function(t, e) {
        var n, i = [], r = function(t, e) {
            e = ot.isFunction(e) ? e() : null == e ? "" : e,
            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional),
        ot.isArray(t) || t.jquery && !ot.isPlainObject(t))
            ot.each(t, function() {
                r(this.name, this.value)
            });
        else
            for (n in t)
                B(n, t[n], e, r);
        return i.join("&").replace(Oe, "+")
    }
    ,
    ot.fn.extend({
        serialize: function() {
            return ot.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ot.prop(this, "elements");
                return t ? ot.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ot(this).is(":disabled") && Ae.test(this.nodeName) && !$e.test(t) && (this.checked || !At.test(t))
            }).map(function(t, e) {
                var n = ot(this).val();
                return null == n ? null : ot.isArray(n) ? ot.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ne, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Ne, "\r\n")
                }
            }).get()
        }
    }),
    ot.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var je = {
        0: 200,
        1223: 204
    }
      , Pe = ot.ajaxSettings.xhr();
    it.cors = !!Pe && "withCredentials"in Pe,
    it.ajax = Pe = !!Pe,
    ot.ajaxTransport(function(e) {
        var n, i;
        return it.cors || Pe && !e.crossDomain ? {
            send: function(r, o) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
                    for (s in e.xhrFields)
                        a[s] = e.xhrFields[s];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r)
                    a.setRequestHeader(s, r[s]);
                n = function(t) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null,
                        "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(je[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }
                ,
                a.onload = n(),
                i = a.onerror = n("error"),
                void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout(function() {
                        n && i()
                    })
                }
                ,
                n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (n)
                        throw t
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }),
    ot.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return ot.globalEval(t),
                t
            }
        }
    }),
    ot.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET")
    }),
    ot.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(i, r) {
                    e = ot("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(),
                        n = null,
                        t && r("error" === t.type ? 404 : 200, t.type)
                    }
                    ),
                    Q.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Re = []
      , Ie = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Re.pop() || ot.expando + "_" + ve++;
            return this[t] = !0,
            t
        }
    }),
    ot.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, o, s, a = e.jsonp !== !1 && (Ie.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ie.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
        a ? e[a] = e[a].replace(Ie, "$1" + r) : e.jsonp !== !1 && (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
        e.converters["script json"] = function() {
            return s || ot.error(r + " was not called"),
            s[0]
        }
        ,
        e.dataTypes[0] = "json",
        o = t[r],
        t[r] = function() {
            s = arguments
        }
        ,
        i.always(function() {
            void 0 === o ? ot(t).removeProp(r) : t[r] = o,
            e[r] && (e.jsonpCallback = n.jsonpCallback,
            Re.push(r)),
            s && ot.isFunction(o) && o(s[0]),
            s = o = void 0
        }),
        "script") : void 0
    }),
    ot.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (n = e,
        e = !1),
        e = e || Q;
        var i = pt.exec(t)
          , r = !n && [];
        return i ? [e.createElement(i[1])] : (i = f([t], e, r),
        r && r.length && ot(r).remove(),
        ot.merge([], i.childNodes))
    }
    ;
    var Ye = ot.fn.load;
    ot.fn.load = function(t, e, n) {
        if ("string" != typeof t && Ye)
            return Ye.apply(this, arguments);
        var i, r, o, s = this, a = t.indexOf(" ");
        return a > -1 && (i = ot.trim(t.slice(a)),
        t = t.slice(0, a)),
        ot.isFunction(e) ? (n = e,
        e = void 0) : e && "object" == typeof e && (r = "POST"),
        s.length > 0 && ot.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments,
            s.html(i ? ot("<div>").append(ot.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(this, o || [t.responseText, e, t])
            })
        }
        ),
        this
    }
    ,
    ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        ot.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    ot.expr.filters.animated = function(t) {
        return ot.grep(ot.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    ot.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a, l, u, c = ot.css(t, "position"), d = ot(t), f = {};
            "static" === c && (t.style.position = "relative"),
            a = d.offset(),
            o = ot.css(t, "top"),
            l = ot.css(t, "left"),
            u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1,
            u ? (i = d.position(),
            s = i.top,
            r = i.left) : (s = parseFloat(o) || 0,
            r = parseFloat(l) || 0),
            ot.isFunction(e) && (e = e.call(t, n, ot.extend({}, a))),
            null != e.top && (f.top = e.top - a.top + s),
            null != e.left && (f.left = e.left - a.left + r),
            "using"in e ? e.using.call(t, f) : d.css(f)
        }
    },
    ot.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    ot.offset.setOffset(this, t, e)
                });
            var e, n, i = this[0], r = {
                top: 0,
                left: 0
            }, o = i && i.ownerDocument;
            return o ? (e = o.documentElement,
            ot.contains(e, i) ? (r = i.getBoundingClientRect(),
            n = V(o),
            {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === ot.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(),
                e = this.offset(),
                ot.nodeName(t[0], "html") || (i = t.offset()),
                i.top += ot.css(t[0], "borderTopWidth", !0),
                i.left += ot.css(t[0], "borderLeftWidth", !0)),
                {
                    top: e.top - i.top - ot.css(n, "marginTop", !0),
                    left: e.left - i.left - ot.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === ot.css(t, "position"); )
                    t = t.offsetParent;
                return t || Jt
            })
        }
    }),
    ot.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = "pageYOffset" === e;
        ot.fn[t] = function(i) {
            return Tt(this, function(t, i, r) {
                var o = V(t);
                return void 0 === r ? o ? o[e] : t[i] : void (o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r)
            }, t, i, arguments.length)
        }
    }),
    ot.each(["top", "left"], function(t, e) {
        ot.cssHooks[e] = D(it.pixelPosition, function(t, n) {
            return n ? (n = C(t, e),
            Qt.test(n) ? ot(t).position()[e] + "px" : n) : void 0
        })
    }),
    ot.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        ot.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            ot.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i)
                  , s = n || (i === !0 || r === !0 ? "margin" : "border");
                return Tt(this, function(e, n, i) {
                    var r;
                    return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? ot.css(e, n, s) : ot.style(e, n, i, s)
                }, e, o ? i : void 0, o, null)
            }
        })
    }),
    ot.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        size: function() {
            return this.length
        }
    }),
    ot.fn.andSelf = ot.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ot
    });
    var Le = t.jQuery
      , Fe = t.$;
    return ot.noConflict = function(e) {
        return t.$ === ot && (t.$ = Fe),
        e && t.jQuery === ot && (t.jQuery = Le),
        ot
    }
    ,
    e || (t.jQuery = t.$ = ot),
    ot
}),
"undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
+function(t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap")
          , e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in e)
            if (void 0 !== t.style[n])
                return {
                    end: e[n]
                };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1
          , i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var r = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(r, e),
        this
    }
    ,
    t(function() {
        t.support.transition = e(),
        t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this))
                    return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var n = t(this)
              , r = n.data("bs.alert");
            r || n.data("bs.alert", r = new i(this)),
            "string" == typeof e && r[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]'
      , i = function(e) {
        t(e).on("click", n, this.close)
    };
    i.VERSION = "3.3.7",
    i.TRANSITION_DURATION = 150,
    i.prototype.close = function(e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var r = t(this)
          , o = r.attr("data-target");
        o || (o = r.attr("href"),
        o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t("#" === o ? [] : o);
        e && e.preventDefault(),
        s.length || (s = r.closest(".alert")),
        s.trigger(e = t.Event("close.bs.alert")),
        e.isDefaultPrevented() || (s.removeClass("in"),
        t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    }
    ;
    var r = t.fn.alert;
    t.fn.alert = e,
    t.fn.alert.Constructor = i,
    t.fn.alert.noConflict = function() {
        return t.fn.alert = r,
        this
    }
    ,
    t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this)
              , r = i.data("bs.button")
              , o = "object" == typeof e && e;
            r || i.data("bs.button", r = new n(this,o)),
            "toggle" == e ? r.toggle() : e && r.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e),
        this.options = t.extend({}, n.DEFAULTS, i),
        this.isLoading = !1
    };
    n.VERSION = "3.3.7",
    n.DEFAULTS = {
        loadingText: "loading..."
    },
    n.prototype.setState = function(e) {
        var n = "disabled"
          , i = this.$element
          , r = i.is("input") ? "val" : "html"
          , o = i.data();
        e += "Text",
        null == o.resetText && i.data("resetText", i[r]()),
        setTimeout(t.proxy(function() {
            i[r](null == o[e] ? this.options[e] : o[e]),
            "loadingText" == e ? (this.isLoading = !0,
            i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1,
            i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }
    ,
    n.prototype.toggle = function() {
        var t = !0
          , e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1),
            e.find(".active").removeClass("active"),
            this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1),
            this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            t && n.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
    }
    ;
    var i = t.fn.button;
    t.fn.button = e,
    t.fn.button.Constructor = n,
    t.fn.button.noConflict = function() {
        return t.fn.button = i,
        this
    }
    ,
    t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target).closest(".btn");
        e.call(i, "toggle"),
        t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(),
        i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this)
              , r = i.data("bs.carousel")
              , o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e)
              , s = "string" == typeof e ? e : o.slide;
            r || i.data("bs.carousel", r = new n(this,o)),
            "number" == typeof e ? r.to(e) : s ? r[s]() : o.interval && r.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = n,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7",
    n.TRANSITION_DURATION = 600,
    n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            t.preventDefault()
        }
    }
    ,
    n.prototype.cycle = function(e) {
        return e || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"),
        this.$items.index(t || this.$active)
    }
    ,
    n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e)
          , i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap)
            return e;
        var r = "prev" == t ? -1 : 1
          , o = (n + r) % this.$items.length;
        return this.$items.eq(o)
    }
    ,
    n.prototype.to = function(t) {
        var e = this
          , n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0))
            return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                e.to(t)
            }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }
    ,
    n.prototype.pause = function(e) {
        return e || (this.paused = !0),
        this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    n.prototype.next = function() {
        if (!this.sliding)
            return this.slide("next")
    }
    ,
    n.prototype.prev = function() {
        if (!this.sliding)
            return this.slide("prev")
    }
    ,
    n.prototype.slide = function(e, i) {
        var r = this.$element.find(".item.active")
          , o = i || this.getItemForDirection(e, r)
          , s = this.interval
          , a = "next" == e ? "left" : "right"
          , l = this;
        if (o.hasClass("active"))
            return this.sliding = !1;
        var u = o[0]
          , c = t.Event("slide.bs.carousel", {
            relatedTarget: u,
            direction: a
        });
        if (this.$element.trigger(c),
        !c.isDefaultPrevented()) {
            if (this.sliding = !0,
            s && this.pause(),
            this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(o)]);
                d && d.addClass("active")
            }
            var f = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e),
            o[0].offsetWidth,
            r.addClass(a),
            o.addClass(a),
            r.one("bsTransitionEnd", function() {
                o.removeClass([e, a].join(" ")).addClass("active"),
                r.removeClass(["active", a].join(" ")),
                l.sliding = !1,
                setTimeout(function() {
                    l.$element.trigger(f)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"),
            o.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(f)),
            s && this.cycle(),
            this
        }
    }
    ;
    var i = t.fn.carousel;
    t.fn.carousel = e,
    t.fn.carousel.Constructor = n,
    t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i,
        this
    }
    ;
    var r = function(n) {
        var i, r = t(this), o = t(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var s = t.extend({}, o.data(), r.data())
              , a = r.attr("data-slide-to");
            a && (s.interval = !1),
            e.call(o, s),
            a && o.data("bs.carousel").to(a),
            n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r),
    t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }
    function n(e) {
        return this.each(function() {
            var n = t(this)
              , r = n.data("bs.collapse")
              , o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !r && o.toggle && /show|hide/.test(e) && (o.toggle = !1),
            r || n.data("bs.collapse", r = new i(this,o)),
            "string" == typeof e && r[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e),
        this.options = t.extend({}, i.DEFAULTS, n),
        this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7",
    i.TRANSITION_DURATION = 350,
    i.DEFAULTS = {
        toggle: !0
    },
    i.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }
    ,
    i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (e = r.data("bs.collapse"),
            e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o),
                !o.isDefaultPrevented()) {
                    r && r.length && (n.call(r, "hide"),
                    e || r.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)
                        return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }
    ,
    i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e),
            !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var r = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this)
            }
        }
    }
    ,
    i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    i.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var r = t(i);
            this.addAriaAndCollapsedClass(e(r), r)
        }, this)).end()
    }
    ,
    i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n),
        e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    }
    ;
    var r = t.fn.collapse;
    t.fn.collapse = n,
    t.fn.collapse.Constructor = i,
    t.fn.collapse.noConflict = function() {
        return t.fn.collapse = r,
        this
    }
    ,
    t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var r = t(this);
        r.attr("data-target") || i.preventDefault();
        var o = e(r)
          , s = o.data("bs.collapse")
          , a = s ? "toggle" : r.data();
        n.call(o, a)
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"),
        n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }
    function n(n) {
        n && 3 === n.which || (t(r).remove(),
        t(o).each(function() {
            var i = t(this)
              , r = e(i)
              , o = {
                relatedTarget: this
            };
            r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(r[0], n.target) || (r.trigger(n = t.Event("hide.bs.dropdown", o)),
            n.isDefaultPrevented() || (i.attr("aria-expanded", "false"),
            r.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
        }))
    }
    function i(e) {
        return this.each(function() {
            var n = t(this)
              , i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)),
            "string" == typeof e && i[e].call(n)
        })
    }
    var r = ".dropdown-backdrop"
      , o = '[data-toggle="dropdown"]'
      , s = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    s.VERSION = "3.3.7",
    s.prototype.toggle = function(i) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var o = e(r)
              , s = o.hasClass("open");
            if (n(),
            !s) {
                "ontouchstart"in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(i = t.Event("show.bs.dropdown", a)),
                i.isDefaultPrevented())
                    return;
                r.trigger("focus").attr("aria-expanded", "true"),
                o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }
    ,
    s.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(),
            n.stopPropagation(),
            !i.is(".disabled, :disabled")) {
                var r = e(i)
                  , s = r.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which)
                    return 27 == n.which && r.find(o).trigger("focus"),
                    i.trigger("click");
                var a = " li:not(.disabled):visible a"
                  , l = r.find(".dropdown-menu" + a);
                if (l.length) {
                    var u = l.index(n.target);
                    38 == n.which && u > 0 && u--,
                    40 == n.which && u < l.length - 1 && u++,
                    ~u || (u = 0),
                    l.eq(u).trigger("focus")
                }
            }
        }
    }
    ;
    var a = t.fn.dropdown;
    t.fn.dropdown = i,
    t.fn.dropdown.Constructor = s,
    t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a,
        this
    }
    ,
    t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery),
+function(t) {
    "use strict";
    function e(e, i) {
        return this.each(function() {
            var r = t(this)
              , o = r.data("bs.modal")
              , s = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e);
            o || r.data("bs.modal", o = new n(this,s)),
            "string" == typeof e ? o[e](i) : s.show && o.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n,
        this.$body = t(document.body),
        this.$element = t(e),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7",
    n.TRANSITION_DURATION = 300,
    n.BACKDROP_TRANSITION_DURATION = 150,
    n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }
    ,
    n.prototype.show = function(e) {
        var i = this
          , r = t.Event("show.bs.modal", {
            relatedTarget: e
        });
        this.$element.trigger(r),
        this.isShown || r.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }),
        this.backdrop(function() {
            var r = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body),
            i.$element.show().scrollTop(0),
            i.adjustDialog(),
            r && i.$element[0].offsetWidth,
            i.$element.addClass("in"),
            i.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            r ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
        }))
    }
    ,
    n.prototype.hide = function(e) {
        e && e.preventDefault(),
        e = t.Event("hide.bs.modal"),
        this.$element.trigger(e),
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        t(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }
    ,
    n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }
    ,
    n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(),
        this.backdrop(function() {
            t.$body.removeClass("modal-open"),
            t.resetAdjustments(),
            t.resetScrollbar(),
            t.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    n.prototype.backdrop = function(e) {
        var i = this
          , r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && r;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)),
            o && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
                return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(),
                e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else
            e && e()
    }
    ,
    n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ,
    n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }
    ,
    n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "",
        this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }
    ,
    n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }
    ,
    n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure",
        this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t),
        e
    }
    ;
    var i = t.fn.modal;
    t.fn.modal = e,
    t.fn.modal.Constructor = n,
    t.fn.modal.noConflict = function() {
        return t.fn.modal = i,
        this
    }
    ,
    t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this)
          , r = i.attr("href")
          , o = t(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, ""))
          , s = o.data("bs.modal") ? "toggle" : t.extend({
            remote: !/#/.test(r) && r
        }, o.data(), i.data());
        i.is("a") && n.preventDefault(),
        o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }),
        e.call(o, s, this)
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this)
              , r = i.data("bs.tooltip")
              , o = "object" == typeof e && e;
            !r && /destroy|hide/.test(e) || (r || i.data("bs.tooltip", r = new n(this,o)),
            "string" == typeof e && r[e]())
        })
    }
    var n = function(t, e) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.7",
    n.TRANSITION_DURATION = 150,
    n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    n.prototype.init = function(e, n, i) {
        if (this.enabled = !0,
        this.type = e,
        this.$element = t(n),
        this.options = this.getOptions(i),
        this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), o = r.length; o--; ) {
            var s = r[o];
            if ("click" == s)
                this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin"
                  , l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
                this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }
    ,
    n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e),
        e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }),
        e
    }
    ,
    n.prototype.getDelegateOptions = function() {
        var e = {}
          , n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }),
        e
    }
    ,
    n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, n)),
        e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0),
        n.tip().hasClass("in") || "in" == n.hoverState ? void (n.hoverState = "in") : (clearTimeout(n.timeout),
        n.hoverState = "in",
        n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }
    ,
    n.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t])
                return !0;
        return !1
    }
    ,
    n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, n)),
        e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1),
        !n.isInStateTrue())
            return clearTimeout(n.timeout),
            n.hoverState = "out",
            n.options.delay && n.options.delay.hide ? void (n.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)) : n.hide()
    }
    ,
    n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i)
                return;
            var r = this
              , o = this.tip()
              , s = this.getUID(this.type);
            this.setContent(),
            o.attr("id", s),
            this.$element.attr("aria-describedby", s),
            this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement
              , l = /\s?auto?\s?/i
              , u = l.test(a);
            u && (a = a.replace(l, "") || "top"),
            o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this),
            this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition()
              , d = o[0].offsetWidth
              , f = o[0].offsetHeight;
            if (u) {
                var h = a
                  , p = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + f > p.bottom ? "top" : "top" == a && c.top - f < p.top ? "bottom" : "right" == a && c.right + d > p.width ? "left" : "left" == a && c.left - d < p.left ? "right" : a,
                o.removeClass(h).addClass(a)
            }
            var m = this.getCalculatedOffset(a, c, d, f);
            this.applyPlacement(m, a);
            var g = function() {
                var t = r.hoverState;
                r.$element.trigger("shown.bs." + r.type),
                r.hoverState = null,
                "out" == t && r.leave(r)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
        }
    }
    ,
    n.prototype.applyPlacement = function(e, n) {
        var i = this.tip()
          , r = i[0].offsetWidth
          , o = i[0].offsetHeight
          , s = parseInt(i.css("margin-top"), 10)
          , a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0),
        isNaN(a) && (a = 0),
        e.top += s,
        e.left += a,
        t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0),
        i.addClass("in");
        var l = i[0].offsetWidth
          , u = i[0].offsetHeight;
        "top" == n && u != o && (e.top = e.top + o - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var d = /top|bottom/.test(n)
          , f = d ? 2 * c.left - r + l : 2 * c.top - o + u
          , h = d ? "offsetWidth" : "offsetHeight";
        i.offset(e),
        this.replaceArrow(f, i[0][h], d)
    }
    ,
    n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }
    ,
    n.prototype.setContent = function() {
        var t = this.tip()
          , e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
        t.removeClass("fade in top bottom left right")
    }
    ,
    n.prototype.hide = function(e) {
        function i() {
            "in" != r.hoverState && o.detach(),
            r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type),
            e && e()
        }
        var r = this
          , o = t(this.$tip)
          , s = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(s),
        !s.isDefaultPrevented())
            return o.removeClass("in"),
            t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(),
            this.hoverState = null,
            this
    }
    ,
    n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }
    ,
    n.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0]
          , i = "BODY" == n.tagName
          , r = n.getBoundingClientRect();
        null == r.width && (r = t.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top
        }));
        var o = window.SVGElement && n instanceof window.SVGElement
          , s = i ? {
            top: 0,
            left: 0
        } : o ? null : e.offset()
          , a = {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        }
          , l = i ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
        return t.extend({}, r, a, l, s)
    }
    ,
    n.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }
    ,
    n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return r;
        var o = this.options.viewport && this.options.viewport.padding || 0
          , s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - o - s.scroll
              , l = e.top + o - s.scroll + i;
            a < s.top ? r.top = s.top - a : l > s.top + s.height && (r.top = s.top + s.height - l)
        } else {
            var u = e.left - o
              , c = e.left + o + n;
            u < s.left ? r.left = s.left - u : c > s.right && (r.left = s.left + s.width - c)
        }
        return r
    }
    ,
    n.prototype.getTitle = function() {
        var t, e = this.$element, n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }
    ,
    n.prototype.getUID = function(t) {
        do
            t += ~~(1e6 * Math.random());
        while (document.getElementById(t));return t
    }
    ,
    n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ,
    n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    n.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    n.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type),
        n || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, n))),
        e ? (n.inState.click = !n.inState.click,
        n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }
    ,
    n.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type),
            t.$tip && t.$tip.detach(),
            t.$tip = null,
            t.$arrow = null,
            t.$viewport = null,
            t.$element = null
        })
    }
    ;
    var i = t.fn.tooltip;
    t.fn.tooltip = e,
    t.fn.tooltip.Constructor = n,
    t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i,
        this
    }
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this)
              , r = i.data("bs.popover")
              , o = "object" == typeof e && e;
            !r && /destroy|hide/.test(e) || (r || i.data("bs.popover", r = new n(this,o)),
            "string" == typeof e && r[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7",
    n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype),
    n.prototype.constructor = n,
    n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }
    ,
    n.prototype.setContent = function() {
        var t = this.tip()
          , e = this.getTitle()
          , n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
        t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n),
        t.removeClass("fade top bottom left right in"),
        t.find(".popover-title").html() || t.find(".popover-title").hide()
    }
    ,
    n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    n.prototype.getContent = function() {
        var t = this.$element
          , e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }
    ,
    n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    var i = t.fn.popover;
    t.fn.popover = e,
    t.fn.popover.Constructor = n,
    t.fn.popover.noConflict = function() {
        return t.fn.popover = i,
        this
    }
}(jQuery),
+function(t) {
    "use strict";
    function e(n, i) {
        this.$body = t(document.body),
        this.$scrollElement = t(t(n).is(document.body) ? window : n),
        this.options = t.extend({}, e.DEFAULTS, i),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function n(n) {
        return this.each(function() {
            var i = t(this)
              , r = i.data("bs.scrollspy")
              , o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new e(this,o)),
            "string" == typeof n && r[n]()
        })
    }
    e.VERSION = "3.3.7",
    e.DEFAULTS = {
        offset: 10
    },
    e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    e.prototype.refresh = function() {
        var e = this
          , n = "offset"
          , i = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        t.isWindow(this.$scrollElement[0]) || (n = "position",
        i = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map(function() {
            var e = t(this)
              , r = e.data("target") || e.attr("href")
              , o = /^#./.test(r) && t(r);
            return o && o.length && o.is(":visible") && [[o[n]().top + i, r]] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]),
            e.targets.push(this[1])
        })
    }
    ,
    e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), r = this.offsets, o = this.targets, s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(),
        e >= i)
            return s != (t = o[o.length - 1]) && this.activate(t);
        if (s && e < r[0])
            return this.activeTarget = null,
            this.clear();
        for (t = r.length; t--; )
            s != o[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(o[t])
    }
    ,
    e.prototype.activate = function(e) {
        this.activeTarget = e,
        this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]'
          , i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")),
        i.trigger("activate.bs.scrollspy")
    }
    ,
    e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n,
    t.fn.scrollspy.Constructor = e,
    t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i,
        this
    }
    ,
    t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this)
              , r = i.data("bs.tab");
            r || i.data("bs.tab", r = new n(this)),
            "string" == typeof e && r[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.7",
    n.TRANSITION_DURATION = 150,
    n.prototype.show = function() {
        var e = this.element
          , n = e.closest("ul:not(.dropdown-menu)")
          , i = e.data("target");
        if (i || (i = e.attr("href"),
        i = i && i.replace(/.*(?=#[^\s]*$)/, "")),
        !e.parent("li").hasClass("active")) {
            var r = n.find(".active:last a")
              , o = t.Event("hide.bs.tab", {
                relatedTarget: e[0]
            })
              , s = t.Event("show.bs.tab", {
                relatedTarget: r[0]
            });
            if (r.trigger(o),
            e.trigger(s),
            !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n),
                this.activate(a, a.parent(), function() {
                    r.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }),
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    }
    ,
    n.prototype.activate = function(e, i, r) {
        function o() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            a ? (e[0].offsetWidth,
            e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            r && r()
        }
        var s = i.find("> .active")
          , a = r && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(),
        s.removeClass("in")
    }
    ;
    var i = t.fn.tab;
    t.fn.tab = e,
    t.fn.tab.Constructor = n,
    t.fn.tab.noConflict = function() {
        return t.fn.tab = i,
        this
    }
    ;
    var r = function(n) {
        n.preventDefault(),
        e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this)
              , r = i.data("bs.affix")
              , o = "object" == typeof e && e;
            r || i.data("bs.affix", r = new n(this,o)),
            "string" == typeof e && r[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i),
        this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = t(e),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    n.VERSION = "3.3.7",
    n.RESET = "affix affix-top affix-bottom",
    n.DEFAULTS = {
        offset: 0,
        target: window
    },
    n.prototype.getState = function(t, e, n, i) {
        var r = this.$target.scrollTop()
          , o = this.$element.offset()
          , s = this.$target.height();
        if (null != n && "top" == this.affixed)
            return r < n && "top";
        if ("bottom" == this.affixed)
            return null != n ? !(r + this.unpin <= o.top) && "bottom" : !(r + s <= t - i) && "bottom";
        var a = null == this.affixed
          , l = a ? r : o.top
          , u = a ? s : e;
        return null != n && r <= n ? "top" : null != i && l + u >= t - i && "bottom"
    }
    ,
    n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop()
          , e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }
    ,
    n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }
    ,
    n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height()
              , i = this.options.offset
              , r = i.top
              , o = i.bottom
              , s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (o = r = i),
            "function" == typeof r && (r = i.top(this.$element)),
            "function" == typeof o && (o = i.bottom(this.$element));
            var a = this.getState(s, e, r, o);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : "")
                  , u = t.Event(l + ".bs.affix");
                if (this.$element.trigger(u),
                u.isDefaultPrevented())
                    return;
                this.affixed = a,
                this.unpin = "bottom" == a ? this.getPinnedOffset() : null,
                this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - o
            })
        }
    }
    ;
    var i = t.fn.affix;
    t.fn.affix = e,
    t.fn.affix.Constructor = n,
    t.fn.affix.noConflict = function() {
        return t.fn.affix = i,
        this
    }
    ,
    t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this)
              , i = n.data();
            i.offset = i.offset || {},
            null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
            null != i.offsetTop && (i.offset.top = i.offsetTop),
            e.call(n, i)
        })
    })
}(jQuery),
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}(this, function() {
    "use strict";
    function t() {
        return mi.apply(null, arguments)
    }
    function e(t) {
        mi = t
    }
    function n(t) {
        return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
    }
    function i(t) {
        return null != t && "[object Object]" === Object.prototype.toString.call(t)
    }
    function r(t) {
        var e;
        for (e in t)
            return !1;
        return !0
    }
    function o(t) {
        return "number" == typeof value || "[object Number]" === Object.prototype.toString.call(t)
    }
    function s(t) {
        return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
    }
    function a(t, e) {
        var n, i = [];
        for (n = 0; n < t.length; ++n)
            i.push(e(t[n], n));
        return i
    }
    function l(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    function u(t, e) {
        for (var n in e)
            l(e, n) && (t[n] = e[n]);
        return l(e, "toString") && (t.toString = e.toString),
        l(e, "valueOf") && (t.valueOf = e.valueOf),
        t
    }
    function c(t, e, n, i) {
        return ve(t, e, n, i, !0).utc()
    }
    function d() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null
        }
    }
    function f(t) {
        return null == t._pf && (t._pf = d()),
        t._pf
    }
    function h(t) {
        if (null == t._isValid) {
            var e = f(t)
              , n = vi.call(e.parsedDateParts, function(t) {
                return null != t
            })
              , i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
            if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour),
            null != Object.isFrozen && Object.isFrozen(t))
                return i;
            t._isValid = i
        }
        return t._isValid
    }
    function p(t) {
        var e = c(NaN);
        return null != t ? u(f(e), t) : f(e).userInvalidated = !0,
        e
    }
    function m(t) {
        return void 0 === t
    }
    function g(t, e) {
        var n, i, r;
        if (m(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject),
        m(e._i) || (t._i = e._i),
        m(e._f) || (t._f = e._f),
        m(e._l) || (t._l = e._l),
        m(e._strict) || (t._strict = e._strict),
        m(e._tzm) || (t._tzm = e._tzm),
        m(e._isUTC) || (t._isUTC = e._isUTC),
        m(e._offset) || (t._offset = e._offset),
        m(e._pf) || (t._pf = f(e)),
        m(e._locale) || (t._locale = e._locale),
        yi.length > 0)
            for (n in yi)
                i = yi[n],
                r = e[i],
                m(r) || (t[i] = r);
        return t
    }
    function v(e) {
        g(this, e),
        this._d = new Date(null != e._d ? e._d.getTime() : NaN),
        bi === !1 && (bi = !0,
        t.updateOffset(this),
        bi = !1)
    }
    function y(t) {
        return t instanceof v || null != t && null != t._isAMomentObject
    }
    function b(t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
    }
    function w(t) {
        var e = +t
          , n = 0;
        return 0 !== e && isFinite(e) && (n = b(e)),
        n
    }
    function x(t, e, n) {
        var i, r = Math.min(t.length, e.length), o = Math.abs(t.length - e.length), s = 0;
        for (i = 0; i < r; i++)
            (n && t[i] !== e[i] || !n && w(t[i]) !== w(e[i])) && s++;
        return s + o
    }
    function _(e) {
        t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }
    function T(e, n) {
        var i = !0;
        return u(function() {
            if (null != t.deprecationHandler && t.deprecationHandler(null, e),
            i) {
                for (var r, o = [], s = 0; s < arguments.length; s++) {
                    if (r = "",
                    "object" == typeof arguments[s]) {
                        r += "\n[" + s + "] ";
                        for (var a in arguments[0])
                            r += a + ": " + arguments[0][a] + ", ";
                        r = r.slice(0, -2)
                    } else
                        r = arguments[s];
                    o.push(r)
                }
                _(e + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack),
                i = !1
            }
            return n.apply(this, arguments)
        }, n)
    }
    function S(e, n) {
        null != t.deprecationHandler && t.deprecationHandler(e, n),
        wi[e] || (_(n),
        wi[e] = !0)
    }
    function k(t) {
        return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
    }
    function C(t) {
        var e, n;
        for (n in t)
            e = t[n],
            k(e) ? this[n] = e : this["_" + n] = e;
        this._config = t,
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }
    function D(t, e) {
        var n, r = u({}, t);
        for (n in e)
            l(e, n) && (i(t[n]) && i(e[n]) ? (r[n] = {},
            u(r[n], t[n]),
            u(r[n], e[n])) : null != e[n] ? r[n] = e[n] : delete r[n]);
        for (n in t)
            l(t, n) && !l(e, n) && i(t[n]) && (r[n] = u({}, r[n]));
        return r
    }
    function E(t) {
        null != t && this.set(t)
    }
    function O(t, e, n) {
        var i = this._calendar[t] || this._calendar.sameElse;
        return k(i) ? i.call(e, n) : i
    }
    function M(t) {
        var e = this._longDateFormat[t]
          , n = this._longDateFormat[t.toUpperCase()];
        return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
            return t.slice(1)
        }),
        this._longDateFormat[t])
    }
    function N() {
        return this._invalidDate
    }
    function $(t) {
        return this._ordinal.replace("%d", t)
    }
    function A(t, e, n, i) {
        var r = this._relativeTime[n];
        return k(r) ? r(t, e, n, i) : r.replace(/%d/i, t)
    }
    function j(t, e) {
        var n = this._relativeTime[t > 0 ? "future" : "past"];
        return k(n) ? n(e) : n.replace(/%s/i, e)
    }
    function P(t, e) {
        var n = t.toLowerCase();
        Mi[n] = Mi[n + "s"] = Mi[e] = t
    }
    function R(t) {
        return "string" == typeof t ? Mi[t] || Mi[t.toLowerCase()] : void 0
    }
    function I(t) {
        var e, n, i = {};
        for (n in t)
            l(t, n) && (e = R(n),
            e && (i[e] = t[n]));
        return i
    }
    function Y(t, e) {
        Ni[t] = e
    }
    function L(t) {
        var e = [];
        for (var n in t)
            e.push({
                unit: n,
                priority: Ni[n]
            });
        return e.sort(function(t, e) {
            return t.priority - e.priority
        }),
        e
    }
    function F(e, n) {
        return function(i) {
            return null != i ? (W(this, e, i),
            t.updateOffset(this, n),
            this) : H(this, e)
        }
    }
    function H(t, e) {
        return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
    }
    function W(t, e, n) {
        t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
    }
    function q(t) {
        return t = R(t),
        k(this[t]) ? this[t]() : this;
    }
    function U(t, e) {
        if ("object" == typeof t) {
            t = I(t);
            for (var n = L(t), i = 0; i < n.length; i++)
                this[n[i].unit](t[n[i].unit])
        } else if (t = R(t),
        k(this[t]))
            return this[t](e);
        return this
    }
    function G(t, e, n) {
        var i = "" + Math.abs(t)
          , r = e - i.length
          , o = t >= 0;
        return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
    }
    function B(t, e, n, i) {
        var r = i;
        "string" == typeof i && (r = function() {
            return this[i]()
        }
        ),
        t && (Pi[t] = r),
        e && (Pi[e[0]] = function() {
            return G(r.apply(this, arguments), e[1], e[2])
        }
        ),
        n && (Pi[n] = function() {
            return this.localeData().ordinal(r.apply(this, arguments), t)
        }
        )
    }
    function V(t) {
        return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }
    function z(t) {
        var e, n, i = t.match($i);
        for (e = 0,
        n = i.length; e < n; e++)
            Pi[i[e]] ? i[e] = Pi[i[e]] : i[e] = V(i[e]);
        return function(e) {
            var r, o = "";
            for (r = 0; r < n; r++)
                o += i[r]instanceof Function ? i[r].call(e, t) : i[r];
            return o
        }
    }
    function Q(t, e) {
        return t.isValid() ? (e = X(e, t.localeData()),
        ji[e] = ji[e] || z(e),
        ji[e](t)) : t.localeData().invalidDate()
    }
    function X(t, e) {
        function n(t) {
            return e.longDateFormat(t) || t
        }
        var i = 5;
        for (Ai.lastIndex = 0; i >= 0 && Ai.test(t); )
            t = t.replace(Ai, n),
            Ai.lastIndex = 0,
            i -= 1;
        return t
    }
    function Z(t, e, n) {
        Ki[t] = k(e) ? e : function(t, i) {
            return t && n ? n : e
        }
    }
    function J(t, e) {
        return l(Ki, t) ? Ki[t](e._strict, e._locale) : new RegExp(K(t))
    }
    function K(t) {
        return tt(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, r) {
            return e || n || i || r
        }))
    }
    function tt(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function et(t, e) {
        var n, i = e;
        for ("string" == typeof t && (t = [t]),
        o(e) && (i = function(t, n) {
            n[e] = w(t)
        }
        ),
        n = 0; n < t.length; n++)
            tr[t[n]] = i
    }
    function nt(t, e) {
        et(t, function(t, n, i, r) {
            i._w = i._w || {},
            e(t, i._w, i, r)
        })
    }
    function it(t, e, n) {
        null != e && l(tr, t) && tr[t](e, n._a, n, t)
    }
    function rt(t, e) {
        return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
    }
    function ot(t, e) {
        return t ? n(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || dr).test(e) ? "format" : "standalone"][t.month()] : this._months
    }
    function st(t, e) {
        return t ? n(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[dr.test(e) ? "format" : "standalone"][t.month()] : this._monthsShort
    }
    function at(t, e, n) {
        var i, r, o, s = t.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [],
            this._longMonthsParse = [],
            this._shortMonthsParse = [],
            i = 0; i < 12; ++i)
                o = c([2e3, i]),
                this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(),
                this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
        return n ? "MMM" === e ? (r = cr.call(this._shortMonthsParse, s),
        r !== -1 ? r : null) : (r = cr.call(this._longMonthsParse, s),
        r !== -1 ? r : null) : "MMM" === e ? (r = cr.call(this._shortMonthsParse, s),
        r !== -1 ? r : (r = cr.call(this._longMonthsParse, s),
        r !== -1 ? r : null)) : (r = cr.call(this._longMonthsParse, s),
        r !== -1 ? r : (r = cr.call(this._shortMonthsParse, s),
        r !== -1 ? r : null))
    }
    function lt(t, e, n) {
        var i, r, o;
        if (this._monthsParseExact)
            return at.call(this, t, e, n);
        for (this._monthsParse || (this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = []),
        i = 0; i < 12; i++) {
            if (r = c([2e3, i]),
            n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$","i"),
            this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$","i")),
            n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""),
            this._monthsParse[i] = new RegExp(o.replace(".", ""),"i")),
            n && "MMMM" === e && this._longMonthsParse[i].test(t))
                return i;
            if (n && "MMM" === e && this._shortMonthsParse[i].test(t))
                return i;
            if (!n && this._monthsParse[i].test(t))
                return i
        }
    }
    function ut(t, e) {
        var n;
        if (!t.isValid())
            return t;
        if ("string" == typeof e)
            if (/^\d+$/.test(e))
                e = w(e);
            else if (e = t.localeData().monthsParse(e),
            !o(e))
                return t;
        return n = Math.min(t.date(), rt(t.year(), e)),
        t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n),
        t
    }
    function ct(e) {
        return null != e ? (ut(this, e),
        t.updateOffset(this, !0),
        this) : H(this, "Month")
    }
    function dt() {
        return rt(this.year(), this.month())
    }
    function ft(t) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || pt.call(this),
        t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = pr),
        this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }
    function ht(t) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || pt.call(this),
        t ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = mr),
        this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
    }
    function pt() {
        function t(t, e) {
            return e.length - t.length
        }
        var e, n, i = [], r = [], o = [];
        for (e = 0; e < 12; e++)
            n = c([2e3, e]),
            i.push(this.monthsShort(n, "")),
            r.push(this.months(n, "")),
            o.push(this.months(n, "")),
            o.push(this.monthsShort(n, ""));
        for (i.sort(t),
        r.sort(t),
        o.sort(t),
        e = 0; e < 12; e++)
            i[e] = tt(i[e]),
            r[e] = tt(r[e]);
        for (e = 0; e < 24; e++)
            o[e] = tt(o[e]);
        this._monthsRegex = new RegExp("^(" + o.join("|") + ")","i"),
        this._monthsShortRegex = this._monthsRegex,
        this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")","i"),
        this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")","i")
    }
    function mt(t) {
        return gt(t) ? 366 : 365
    }
    function gt(t) {
        return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
    }
    function vt() {
        return gt(this.year())
    }
    function yt(t, e, n, i, r, o, s) {
        var a = new Date(t,e,n,i,r,o,s);
        return t < 100 && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t),
        a
    }
    function bt(t) {
        var e = new Date(Date.UTC.apply(null, arguments));
        return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t),
        e
    }
    function wt(t, e, n) {
        var i = 7 + e - n
          , r = (7 + bt(t, 0, i).getUTCDay() - e) % 7;
        return -r + i - 1
    }
    function xt(t, e, n, i, r) {
        var o, s, a = (7 + n - i) % 7, l = wt(t, i, r), u = 1 + 7 * (e - 1) + a + l;
        return u <= 0 ? (o = t - 1,
        s = mt(o) + u) : u > mt(t) ? (o = t + 1,
        s = u - mt(t)) : (o = t,
        s = u),
        {
            year: o,
            dayOfYear: s
        }
    }
    function _t(t, e, n) {
        var i, r, o = wt(t.year(), e, n), s = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
        return s < 1 ? (r = t.year() - 1,
        i = s + Tt(r, e, n)) : s > Tt(t.year(), e, n) ? (i = s - Tt(t.year(), e, n),
        r = t.year() + 1) : (r = t.year(),
        i = s),
        {
            week: i,
            year: r
        }
    }
    function Tt(t, e, n) {
        var i = wt(t, e, n)
          , r = wt(t + 1, e, n);
        return (mt(t) - i + r) / 7
    }
    function St(t) {
        return _t(t, this._week.dow, this._week.doy).week
    }
    function kt() {
        return this._week.dow
    }
    function Ct() {
        return this._week.doy
    }
    function Dt(t) {
        var e = this.localeData().week(this);
        return null == t ? e : this.add(7 * (t - e), "d")
    }
    function Et(t) {
        var e = _t(this, 1, 4).week;
        return null == t ? e : this.add(7 * (t - e), "d")
    }
    function Ot(t, e) {
        return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t),
        "number" == typeof t ? t : null) : parseInt(t, 10)
    }
    function Mt(t, e) {
        return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
    }
    function Nt(t, e) {
        return t ? n(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : this._weekdays
    }
    function $t(t) {
        return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
    }
    function At(t) {
        return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
    }
    function jt(t, e, n) {
        var i, r, o, s = t.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [],
            this._shortWeekdaysParse = [],
            this._minWeekdaysParse = [],
            i = 0; i < 7; ++i)
                o = c([2e3, 1]).day(i),
                this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(),
                this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(),
                this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
        return n ? "dddd" === e ? (r = cr.call(this._weekdaysParse, s),
        r !== -1 ? r : null) : "ddd" === e ? (r = cr.call(this._shortWeekdaysParse, s),
        r !== -1 ? r : null) : (r = cr.call(this._minWeekdaysParse, s),
        r !== -1 ? r : null) : "dddd" === e ? (r = cr.call(this._weekdaysParse, s),
        r !== -1 ? r : (r = cr.call(this._shortWeekdaysParse, s),
        r !== -1 ? r : (r = cr.call(this._minWeekdaysParse, s),
        r !== -1 ? r : null))) : "ddd" === e ? (r = cr.call(this._shortWeekdaysParse, s),
        r !== -1 ? r : (r = cr.call(this._weekdaysParse, s),
        r !== -1 ? r : (r = cr.call(this._minWeekdaysParse, s),
        r !== -1 ? r : null))) : (r = cr.call(this._minWeekdaysParse, s),
        r !== -1 ? r : (r = cr.call(this._weekdaysParse, s),
        r !== -1 ? r : (r = cr.call(this._shortWeekdaysParse, s),
        r !== -1 ? r : null)))
    }
    function Pt(t, e, n) {
        var i, r, o;
        if (this._weekdaysParseExact)
            return jt.call(this, t, e, n);
        for (this._weekdaysParse || (this._weekdaysParse = [],
        this._minWeekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._fullWeekdaysParse = []),
        i = 0; i < 7; i++) {
            if (r = c([2e3, 1]).day(i),
            n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$","i"),
            this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$","i"),
            this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$","i")),
            this._weekdaysParse[i] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""),
            this._weekdaysParse[i] = new RegExp(o.replace(".", ""),"i")),
            n && "dddd" === e && this._fullWeekdaysParse[i].test(t))
                return i;
            if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t))
                return i;
            if (n && "dd" === e && this._minWeekdaysParse[i].test(t))
                return i;
            if (!n && this._weekdaysParse[i].test(t))
                return i
        }
    }
    function Rt(t) {
        if (!this.isValid())
            return null != t ? this : NaN;
        var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != t ? (t = Ot(t, this.localeData()),
        this.add(t - e, "d")) : e
    }
    function It(t) {
        if (!this.isValid())
            return null != t ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d")
    }
    function Yt(t) {
        if (!this.isValid())
            return null != t ? this : NaN;
        if (null != t) {
            var e = Mt(t, this.localeData());
            return this.day(this.day() % 7 ? e : e - 7)
        }
        return this.day() || 7
    }
    function Lt(t) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Wt.call(this),
        t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = xr),
        this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }
    function Ft(t) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Wt.call(this),
        t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = _r),
        this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }
    function Ht(t) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Wt.call(this),
        t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Tr),
        this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }
    function Wt() {
        function t(t, e) {
            return e.length - t.length
        }
        var e, n, i, r, o, s = [], a = [], l = [], u = [];
        for (e = 0; e < 7; e++)
            n = c([2e3, 1]).day(e),
            i = this.weekdaysMin(n, ""),
            r = this.weekdaysShort(n, ""),
            o = this.weekdays(n, ""),
            s.push(i),
            a.push(r),
            l.push(o),
            u.push(i),
            u.push(r),
            u.push(o);
        for (s.sort(t),
        a.sort(t),
        l.sort(t),
        u.sort(t),
        e = 0; e < 7; e++)
            a[e] = tt(a[e]),
            l[e] = tt(l[e]),
            u[e] = tt(u[e]);
        this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")","i"),
        this._weekdaysShortRegex = this._weekdaysRegex,
        this._weekdaysMinRegex = this._weekdaysRegex,
        this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")","i"),
        this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")","i"),
        this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")","i")
    }
    function qt() {
        return this.hours() % 12 || 12
    }
    function Ut() {
        return this.hours() || 24
    }
    function Gt(t, e) {
        B(t, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), e)
        })
    }
    function Bt(t, e) {
        return e._meridiemParse
    }
    function Vt(t) {
        return "p" === (t + "").toLowerCase().charAt(0)
    }
    function zt(t, e, n) {
        return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }
    function Qt(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }
    function Xt(t) {
        for (var e, n, i, r, o = 0; o < t.length; ) {
            for (r = Qt(t[o]).split("-"),
            e = r.length,
            n = Qt(t[o + 1]),
            n = n ? n.split("-") : null; e > 0; ) {
                if (i = Zt(r.slice(0, e).join("-")))
                    return i;
                if (n && n.length >= e && x(r, n, !0) >= e - 1)
                    break;
                e--
            }
            o++
        }
        return null
    }
    function Zt(t) {
        var e = null;
        if (!Er[t] && "undefined" != typeof module && module && module.exports)
            try {
                e = Sr._abbr,
                //require("./locale/" + t),
                Jt(e)
            } catch (t) {}
        return Er[t]
    }
    function Jt(t, e) {
        var n;
        return t && (n = m(e) ? ee(t) : Kt(t, e),
        n && (Sr = n)),
        Sr._abbr
    }
    function Kt(t, e) {
        if (null !== e) {
            var n = Dr;
            if (e.abbr = t,
            null != Er[t])
                S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                n = Er[t]._config;
            else if (null != e.parentLocale) {
                if (null == Er[e.parentLocale])
                    return Or[e.parentLocale] || (Or[e.parentLocale] = []),
                    Or[e.parentLocale].push({
                        name: t,
                        config: e
                    }),
                    null;
                n = Er[e.parentLocale]._config
            }
            return Er[t] = new E(D(n, e)),
            Or[t] && Or[t].forEach(function(t) {
                Kt(t.name, t.config)
            }),
            Jt(t),
            Er[t]
        }
        return delete Er[t],
        null
    }
    function te(t, e) {
        if (null != e) {
            var n, i = Dr;
            null != Er[t] && (i = Er[t]._config),
            e = D(i, e),
            n = new E(e),
            n.parentLocale = Er[t],
            Er[t] = n,
            Jt(t)
        } else
            null != Er[t] && (null != Er[t].parentLocale ? Er[t] = Er[t].parentLocale : null != Er[t] && delete Er[t]);
        return Er[t]
    }
    function ee(t) {
        var e;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr),
        !t)
            return Sr;
        if (!n(t)) {
            if (e = Zt(t))
                return e;
            t = [t]
        }
        return Xt(t)
    }
    function ne() {
        return Ti(Er)
    }
    function ie(t) {
        var e, n = t._a;
        return n && f(t).overflow === -2 && (e = n[nr] < 0 || n[nr] > 11 ? nr : n[ir] < 1 || n[ir] > rt(n[er], n[nr]) ? ir : n[rr] < 0 || n[rr] > 24 || 24 === n[rr] && (0 !== n[or] || 0 !== n[sr] || 0 !== n[ar]) ? rr : n[or] < 0 || n[or] > 59 ? or : n[sr] < 0 || n[sr] > 59 ? sr : n[ar] < 0 || n[ar] > 999 ? ar : -1,
        f(t)._overflowDayOfYear && (e < er || e > ir) && (e = ir),
        f(t)._overflowWeeks && e === -1 && (e = lr),
        f(t)._overflowWeekday && e === -1 && (e = ur),
        f(t).overflow = e),
        t
    }
    function re(t) {
        var e, n, i, r, o, s, a = t._i, l = Mr.exec(a) || Nr.exec(a);
        if (l) {
            for (f(t).iso = !0,
            e = 0,
            n = Ar.length; e < n; e++)
                if (Ar[e][1].exec(l[1])) {
                    r = Ar[e][0],
                    i = Ar[e][2] !== !1;
                    break
                }
            if (null == r)
                return void (t._isValid = !1);
            if (l[3]) {
                for (e = 0,
                n = jr.length; e < n; e++)
                    if (jr[e][1].exec(l[3])) {
                        o = (l[2] || " ") + jr[e][0];
                        break
                    }
                if (null == o)
                    return void (t._isValid = !1)
            }
            if (!i && null != o)
                return void (t._isValid = !1);
            if (l[4]) {
                if (!$r.exec(l[4]))
                    return void (t._isValid = !1);
                s = "Z"
            }
            t._f = r + (o || "") + (s || ""),
            ce(t)
        } else
            t._isValid = !1
    }
    function oe(e) {
        var n = Pr.exec(e._i);
        return null !== n ? void (e._d = new Date((+n[1]))) : (re(e),
        void (e._isValid === !1 && (delete e._isValid,
        t.createFromInputFallback(e))))
    }
    function se(t, e, n) {
        return null != t ? t : null != e ? e : n
    }
    function ae(e) {
        var n = new Date(t.now());
        return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
    }
    function le(t) {
        var e, n, i, r, o = [];
        if (!t._d) {
            for (i = ae(t),
            t._w && null == t._a[ir] && null == t._a[nr] && ue(t),
            t._dayOfYear && (r = se(t._a[er], i[er]),
            t._dayOfYear > mt(r) && (f(t)._overflowDayOfYear = !0),
            n = bt(r, 0, t._dayOfYear),
            t._a[nr] = n.getUTCMonth(),
            t._a[ir] = n.getUTCDate()),
            e = 0; e < 3 && null == t._a[e]; ++e)
                t._a[e] = o[e] = i[e];
            for (; e < 7; e++)
                t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            24 === t._a[rr] && 0 === t._a[or] && 0 === t._a[sr] && 0 === t._a[ar] && (t._nextDay = !0,
            t._a[rr] = 0),
            t._d = (t._useUTC ? bt : yt).apply(null, o),
            null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
            t._nextDay && (t._a[rr] = 24)
        }
    }
    function ue(t) {
        var e, n, i, r, o, s, a, l;
        if (e = t._w,
        null != e.GG || null != e.W || null != e.E)
            o = 1,
            s = 4,
            n = se(e.GG, t._a[er], _t(ye(), 1, 4).year),
            i = se(e.W, 1),
            r = se(e.E, 1),
            (r < 1 || r > 7) && (l = !0);
        else {
            o = t._locale._week.dow,
            s = t._locale._week.doy;
            var u = _t(ye(), o, s);
            n = se(e.gg, t._a[er], u.year),
            i = se(e.w, u.week),
            null != e.d ? (r = e.d,
            (r < 0 || r > 6) && (l = !0)) : null != e.e ? (r = e.e + o,
            (e.e < 0 || e.e > 6) && (l = !0)) : r = o
        }
        i < 1 || i > Tt(n, o, s) ? f(t)._overflowWeeks = !0 : null != l ? f(t)._overflowWeekday = !0 : (a = xt(n, i, r, o, s),
        t._a[er] = a.year,
        t._dayOfYear = a.dayOfYear)
    }
    function ce(e) {
        if (e._f === t.ISO_8601)
            return void re(e);
        e._a = [],
        f(e).empty = !0;
        var n, i, r, o, s, a = "" + e._i, l = a.length, u = 0;
        for (r = X(e._f, e._locale).match($i) || [],
        n = 0; n < r.length; n++)
            o = r[n],
            i = (a.match(J(o, e)) || [])[0],
            i && (s = a.substr(0, a.indexOf(i)),
            s.length > 0 && f(e).unusedInput.push(s),
            a = a.slice(a.indexOf(i) + i.length),
            u += i.length),
            Pi[o] ? (i ? f(e).empty = !1 : f(e).unusedTokens.push(o),
            it(o, i, e)) : e._strict && !i && f(e).unusedTokens.push(o);
        f(e).charsLeftOver = l - u,
        a.length > 0 && f(e).unusedInput.push(a),
        e._a[rr] <= 12 && f(e).bigHour === !0 && e._a[rr] > 0 && (f(e).bigHour = void 0),
        f(e).parsedDateParts = e._a.slice(0),
        f(e).meridiem = e._meridiem,
        e._a[rr] = de(e._locale, e._a[rr], e._meridiem),
        le(e),
        ie(e)
    }
    function de(t, e, n) {
        var i;
        return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n),
        i && e < 12 && (e += 12),
        i || 12 !== e || (e = 0),
        e) : e
    }
    function fe(t) {
        var e, n, i, r, o;
        if (0 === t._f.length)
            return f(t).invalidFormat = !0,
            void (t._d = new Date(NaN));
        for (r = 0; r < t._f.length; r++)
            o = 0,
            e = g({}, t),
            null != t._useUTC && (e._useUTC = t._useUTC),
            e._f = t._f[r],
            ce(e),
            h(e) && (o += f(e).charsLeftOver,
            o += 10 * f(e).unusedTokens.length,
            f(e).score = o,
            (null == i || o < i) && (i = o,
            n = e));
        u(t, n || e)
    }
    function he(t) {
        if (!t._d) {
            var e = I(t._i);
            t._a = a([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                return t && parseInt(t, 10)
            }),
            le(t)
        }
    }
    function pe(t) {
        var e = new v(ie(me(t)));
        return e._nextDay && (e.add(1, "d"),
        e._nextDay = void 0),
        e
    }
    function me(t) {
        var e = t._i
          , i = t._f;
        return t._locale = t._locale || ee(t._l),
        null === e || void 0 === i && "" === e ? p({
            nullInput: !0
        }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)),
        y(e) ? new v(ie(e)) : (s(e) ? t._d = e : n(i) ? fe(t) : i ? ce(t) : ge(t),
        h(t) || (t._d = null),
        t))
    }
    function ge(e) {
        var i = e._i;
        void 0 === i ? e._d = new Date(t.now()) : s(i) ? e._d = new Date(i.valueOf()) : "string" == typeof i ? oe(e) : n(i) ? (e._a = a(i.slice(0), function(t) {
            return parseInt(t, 10)
        }),
        le(e)) : "object" == typeof i ? he(e) : o(i) ? e._d = new Date(i) : t.createFromInputFallback(e)
    }
    function ve(t, e, o, s, a) {
        var l = {};
        return o !== !0 && o !== !1 || (s = o,
        o = void 0),
        (i(t) && r(t) || n(t) && 0 === t.length) && (t = void 0),
        l._isAMomentObject = !0,
        l._useUTC = l._isUTC = a,
        l._l = o,
        l._i = t,
        l._f = e,
        l._strict = s,
        pe(l)
    }
    function ye(t, e, n, i) {
        return ve(t, e, n, i, !1)
    }
    function be(t, e) {
        var i, r;
        if (1 === e.length && n(e[0]) && (e = e[0]),
        !e.length)
            return ye();
        for (i = e[0],
        r = 1; r < e.length; ++r)
            e[r].isValid() && !e[r][t](i) || (i = e[r]);
        return i
    }
    function we() {
        var t = [].slice.call(arguments, 0);
        return be("isBefore", t)
    }
    function xe() {
        var t = [].slice.call(arguments, 0);
        return be("isAfter", t)
    }
    function _e(t) {
        var e = I(t)
          , n = e.year || 0
          , i = e.quarter || 0
          , r = e.month || 0
          , o = e.week || 0
          , s = e.day || 0
          , a = e.hour || 0
          , l = e.minute || 0
          , u = e.second || 0
          , c = e.millisecond || 0;
        this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * a * 60 * 60,
        this._days = +s + 7 * o,
        this._months = +r + 3 * i + 12 * n,
        this._data = {},
        this._locale = ee(),
        this._bubble()
    }
    function Te(t) {
        return t instanceof _e
    }
    function Se(t) {
        return t < 0 ? Math.round(-1 * t) * -1 : Math.round(t)
    }
    function ke(t, e) {
        B(t, 0, 0, function() {
            var t = this.utcOffset()
              , n = "+";
            return t < 0 && (t = -t,
            n = "-"),
            n + G(~~(t / 60), 2) + e + G(~~t % 60, 2)
        })
    }
    function Ce(t, e) {
        var n = (e || "").match(t);
        if (null === n)
            return null;
        var i = n[n.length - 1] || []
          , r = (i + "").match(Lr) || ["-", 0, 0]
          , o = +(60 * r[1]) + w(r[2]);
        return 0 === o ? 0 : "+" === r[0] ? o : -o
    }
    function De(e, n) {
        var i, r;
        return n._isUTC ? (i = n.clone(),
        r = (y(e) || s(e) ? e.valueOf() : ye(e).valueOf()) - i.valueOf(),
        i._d.setTime(i._d.valueOf() + r),
        t.updateOffset(i, !1),
        i) : ye(e).local()
    }
    function Ee(t) {
        return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
    }
    function Oe(e, n) {
        var i, r = this._offset || 0;
        if (!this.isValid())
            return null != e ? this : NaN;
        if (null != e) {
            if ("string" == typeof e) {
                if (e = Ce(Xi, e),
                null === e)
                    return this
            } else
                Math.abs(e) < 16 && (e = 60 * e);
            return !this._isUTC && n && (i = Ee(this)),
            this._offset = e,
            this._isUTC = !0,
            null != i && this.add(i, "m"),
            r !== e && (!n || this._changeInProgress ? Ge(this, Fe(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
            t.updateOffset(this, !0),
            this._changeInProgress = null)),
            this
        }
        return this._isUTC ? r : Ee(this)
    }
    function Me(t, e) {
        return null != t ? ("string" != typeof t && (t = -t),
        this.utcOffset(t, e),
        this) : -this.utcOffset()
    }
    function Ne(t) {
        return this.utcOffset(0, t)
    }
    function $e(t) {
        return this._isUTC && (this.utcOffset(0, t),
        this._isUTC = !1,
        t && this.subtract(Ee(this), "m")),
        this
    }
    function Ae() {
        if (null != this._tzm)
            this.utcOffset(this._tzm);
        else if ("string" == typeof this._i) {
            var t = Ce(Qi, this._i);
            null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
        }
        return this
    }
    function je(t) {
        return !!this.isValid() && (t = t ? ye(t).utcOffset() : 0,
        (this.utcOffset() - t) % 60 === 0)
    }
    function Pe() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
    function Re() {
        if (!m(this._isDSTShifted))
            return this._isDSTShifted;
        var t = {};
        if (g(t, this),
        t = me(t),
        t._a) {
            var e = t._isUTC ? c(t._a) : ye(t._a);
            this._isDSTShifted = this.isValid() && x(t._a, e.toArray()) > 0
        } else
            this._isDSTShifted = !1;
        return this._isDSTShifted
    }
    function Ie() {
        return !!this.isValid() && !this._isUTC
    }
    function Ye() {
        return !!this.isValid() && this._isUTC
    }
    function Le() {
        return !!this.isValid() && this._isUTC && 0 === this._offset
    }
    function Fe(t, e) {
        var n, i, r, s = t, a = null;
        return Te(t) ? s = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : o(t) ? (s = {},
        e ? s[e] = t : s.milliseconds = t) : (a = Fr.exec(t)) ? (n = "-" === a[1] ? -1 : 1,
        s = {
            y: 0,
            d: w(a[ir]) * n,
            h: w(a[rr]) * n,
            m: w(a[or]) * n,
            s: w(a[sr]) * n,
            ms: w(Se(1e3 * a[ar])) * n
        }) : (a = Hr.exec(t)) ? (n = "-" === a[1] ? -1 : 1,
        s = {
            y: He(a[2], n),
            M: He(a[3], n),
            w: He(a[4], n),
            d: He(a[5], n),
            h: He(a[6], n),
            m: He(a[7], n),
            s: He(a[8], n)
        }) : null == s ? s = {} : "object" == typeof s && ("from"in s || "to"in s) && (r = qe(ye(s.from), ye(s.to)),
        s = {},
        s.ms = r.milliseconds,
        s.M = r.months),
        i = new _e(s),
        Te(t) && l(t, "_locale") && (i._locale = t._locale),
        i
    }
    function He(t, e) {
        var n = t && parseFloat(t.replace(",", "."));
        return (isNaN(n) ? 0 : n) * e
    }
    function We(t, e) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = e.month() - t.month() + 12 * (e.year() - t.year()),
        t.clone().add(n.months, "M").isAfter(e) && --n.months,
        n.milliseconds = +e - +t.clone().add(n.months, "M"),
        n
    }
    function qe(t, e) {
        var n;
        return t.isValid() && e.isValid() ? (e = De(e, t),
        t.isBefore(e) ? n = We(t, e) : (n = We(e, t),
        n.milliseconds = -n.milliseconds,
        n.months = -n.months),
        n) : {
            milliseconds: 0,
            months: 0
        }
    }
    function Ue(t, e) {
        return function(n, i) {
            var r, o;
            return null === i || isNaN(+i) || (S(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
            o = n,
            n = i,
            i = o),
            n = "string" == typeof n ? +n : n,
            r = Fe(n, i),
            Ge(this, r, t),
            this
        }
    }
    function Ge(e, n, i, r) {
        var o = n._milliseconds
          , s = Se(n._days)
          , a = Se(n._months);
        e.isValid() && (r = null == r || r,
        o && e._d.setTime(e._d.valueOf() + o * i),
        s && W(e, "Date", H(e, "Date") + s * i),
        a && ut(e, H(e, "Month") + a * i),
        r && t.updateOffset(e, s || a))
    }
    function Be(t, e) {
        var n = t.diff(e, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }
    function Ve(e, n) {
        var i = e || ye()
          , r = De(i, this).startOf("day")
          , o = t.calendarFormat(this, r) || "sameElse"
          , s = n && (k(n[o]) ? n[o].call(this, i) : n[o]);
        return this.format(s || this.localeData().calendar(o, this, ye(i)))
    }
    function ze() {
        return new v(this)
    }
    function Qe(t, e) {
        var n = y(t) ? t : ye(t);
        return !(!this.isValid() || !n.isValid()) && (e = R(m(e) ? "millisecond" : e),
        "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
    }
    function Xe(t, e) {
        var n = y(t) ? t : ye(t);
        return !(!this.isValid() || !n.isValid()) && (e = R(m(e) ? "millisecond" : e),
        "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
    }
    function Ze(t, e, n, i) {
        return i = i || "()",
        ("(" === i[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
    }
    function Je(t, e) {
        var n, i = y(t) ? t : ye(t);
        return !(!this.isValid() || !i.isValid()) && (e = R(e || "millisecond"),
        "millisecond" === e ? this.valueOf() === i.valueOf() : (n = i.valueOf(),
        this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
    }
    function Ke(t, e) {
        return this.isSame(t, e) || this.isAfter(t, e)
    }
    function tn(t, e) {
        return this.isSame(t, e) || this.isBefore(t, e)
    }
    function en(t, e, n) {
        var i, r, o, s;
        return this.isValid() ? (i = De(t, this),
        i.isValid() ? (r = 6e4 * (i.utcOffset() - this.utcOffset()),
        e = R(e),
        "year" === e || "month" === e || "quarter" === e ? (s = nn(this, i),
        "quarter" === e ? s /= 3 : "year" === e && (s /= 12)) : (o = this - i,
        s = "second" === e ? o / 1e3 : "minute" === e ? o / 6e4 : "hour" === e ? o / 36e5 : "day" === e ? (o - r) / 864e5 : "week" === e ? (o - r) / 6048e5 : o),
        n ? s : b(s)) : NaN) : NaN
    }
    function nn(t, e) {
        var n, i, r = 12 * (e.year() - t.year()) + (e.month() - t.month()), o = t.clone().add(r, "months");
        return e - o < 0 ? (n = t.clone().add(r - 1, "months"),
        i = (e - o) / (o - n)) : (n = t.clone().add(r + 1, "months"),
        i = (e - o) / (n - o)),
        -(r + i) || 0
    }
    function rn() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
    function on() {
        var t = this.clone().utc();
        return 0 < t.year() && t.year() <= 9999 ? k(Date.prototype.toISOString) ? this.toDate().toISOString() : Q(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : Q(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }
    function sn() {
        if (!this.isValid())
            return "moment.invalid(/* " + this._i + " */)";
        var t = "moment"
          , e = "";
        this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
        e = "Z");
        var n = "[" + t + '("]'
          , i = 0 < this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"
          , r = "-MM-DD[T]HH:mm:ss.SSS"
          , o = e + '[")]';
        return this.format(n + i + r + o)
    }
    function an(e) {
        e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
        var n = Q(this, e);
        return this.localeData().postformat(n)
    }
    function ln(t, e) {
        return this.isValid() && (y(t) && t.isValid() || ye(t).isValid()) ? Fe({
            to: this,
            from: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }
    function un(t) {
        return this.from(ye(), t)
    }
    function cn(t, e) {
        return this.isValid() && (y(t) && t.isValid() || ye(t).isValid()) ? Fe({
            from: this,
            to: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }
    function dn(t) {
        return this.to(ye(), t)
    }
    function fn(t) {
        var e;
        return void 0 === t ? this._locale._abbr : (e = ee(t),
        null != e && (this._locale = e),
        this)
    }
    function hn() {
        return this._locale
    }
    function pn(t) {
        switch (t = R(t)) {
        case "year":
            this.month(0);
        case "quarter":
        case "month":
            this.date(1);
        case "week":
        case "isoWeek":
        case "day":
        case "date":
            this.hours(0);
        case "hour":
            this.minutes(0);
        case "minute":
            this.seconds(0);
        case "second":
            this.milliseconds(0)
        }
        return "week" === t && this.weekday(0),
        "isoWeek" === t && this.isoWeekday(1),
        "quarter" === t && this.month(3 * Math.floor(this.month() / 3)),
        this
    }
    function mn(t) {
        return t = R(t),
        void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"),
        this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
    }
    function gn() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }
    function vn() {
        return Math.floor(this.valueOf() / 1e3)
    }
    function yn() {
        return new Date(this.valueOf())
    }
    function bn() {
        var t = this;
        return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
    }
    function wn() {
        var t = this;
        return {
            years: t.year(),
            months: t.month(),
            date: t.date(),
            hours: t.hours(),
            minutes: t.minutes(),
            seconds: t.seconds(),
            milliseconds: t.milliseconds()
        }
    }
    function xn() {
        return this.isValid() ? this.toISOString() : null
    }
    function _n() {
        return h(this)
    }
    function Tn() {
        return u({}, f(this))
    }
    function Sn() {
        return f(this).overflow
    }
    function kn() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
    function Cn(t, e) {
        B(0, [t, t.length], 0, e)
    }
    function Dn(t) {
        return Nn.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }
    function En(t) {
        return Nn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
    }
    function On() {
        return Tt(this.year(), 1, 4)
    }
    function Mn() {
        var t = this.localeData()._week;
        return Tt(this.year(), t.dow, t.doy)
    }
    function Nn(t, e, n, i, r) {
        var o;
        return null == t ? _t(this, i, r).year : (o = Tt(t, i, r),
        e > o && (e = o),
        $n.call(this, t, e, n, i, r))
    }
    function $n(t, e, n, i, r) {
        var o = xt(t, e, n, i, r)
          , s = bt(o.year, 0, o.dayOfYear);
        return this.year(s.getUTCFullYear()),
        this.month(s.getUTCMonth()),
        this.date(s.getUTCDate()),
        this
    }
    function An(t) {
        return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
    }
    function jn(t) {
        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == t ? e : this.add(t - e, "d")
    }
    function Pn(t, e) {
        e[ar] = w(1e3 * ("0." + t))
    }
    function Rn() {
        return this._isUTC ? "UTC" : ""
    }
    function In() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    function Yn(t) {
        return ye(1e3 * t)
    }
    function Ln() {
        return ye.apply(null, arguments).parseZone()
    }
    function Fn(t) {
        return t
    }
    function Hn(t, e, n, i) {
        var r = ee()
          , o = c().set(i, e);
        return r[n](o, t)
    }
    function Wn(t, e, n) {
        if (o(t) && (e = t,
        t = void 0),
        t = t || "",
        null != e)
            return Hn(t, e, n, "month");
        var i, r = [];
        for (i = 0; i < 12; i++)
            r[i] = Hn(t, i, n, "month");
        return r
    }
    function qn(t, e, n, i) {
        "boolean" == typeof t ? (o(e) && (n = e,
        e = void 0),
        e = e || "") : (e = t,
        n = e,
        t = !1,
        o(e) && (n = e,
        e = void 0),
        e = e || "");
        var r = ee()
          , s = t ? r._week.dow : 0;
        if (null != n)
            return Hn(e, (n + s) % 7, i, "day");
        var a, l = [];
        for (a = 0; a < 7; a++)
            l[a] = Hn(e, (a + s) % 7, i, "day");
        return l
    }
    function Un(t, e) {
        return Wn(t, e, "months")
    }
    function Gn(t, e) {
        return Wn(t, e, "monthsShort")
    }
    function Bn(t, e, n) {
        return qn(t, e, n, "weekdays")
    }
    function Vn(t, e, n) {
        return qn(t, e, n, "weekdaysShort")
    }
    function zn(t, e, n) {
        return qn(t, e, n, "weekdaysMin")
    }
    function Qn() {
        var t = this._data;
        return this._milliseconds = Jr(this._milliseconds),
        this._days = Jr(this._days),
        this._months = Jr(this._months),
        t.milliseconds = Jr(t.milliseconds),
        t.seconds = Jr(t.seconds),
        t.minutes = Jr(t.minutes),
        t.hours = Jr(t.hours),
        t.months = Jr(t.months),
        t.years = Jr(t.years),
        this
    }
    function Xn(t, e, n, i) {
        var r = Fe(e, n);
        return t._milliseconds += i * r._milliseconds,
        t._days += i * r._days,
        t._months += i * r._months,
        t._bubble()
    }
    function Zn(t, e) {
        return Xn(this, t, e, 1)
    }
    function Jn(t, e) {
        return Xn(this, t, e, -1)
    }
    function Kn(t) {
        return t < 0 ? Math.floor(t) : Math.ceil(t)
    }
    function ti() {
        var t, e, n, i, r, o = this._milliseconds, s = this._days, a = this._months, l = this._data;
        return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * Kn(ni(a) + s),
        s = 0,
        a = 0),
        l.milliseconds = o % 1e3,
        t = b(o / 1e3),
        l.seconds = t % 60,
        e = b(t / 60),
        l.minutes = e % 60,
        n = b(e / 60),
        l.hours = n % 24,
        s += b(n / 24),
        r = b(ei(s)),
        a += r,
        s -= Kn(ni(r)),
        i = b(a / 12),
        a %= 12,
        l.days = s,
        l.months = a,
        l.years = i,
        this
    }
    function ei(t) {
        return 4800 * t / 146097
    }
    function ni(t) {
        return 146097 * t / 4800
    }
    function ii(t) {
        var e, n, i = this._milliseconds;
        if (t = R(t),
        "month" === t || "year" === t)
            return e = this._days + i / 864e5,
            n = this._months + ei(e),
            "month" === t ? n : n / 12;
        switch (e = this._days + Math.round(ni(this._months)),
        t) {
        case "week":
            return e / 7 + i / 6048e5;
        case "day":
            return e + i / 864e5;
        case "hour":
            return 24 * e + i / 36e5;
        case "minute":
            return 1440 * e + i / 6e4;
        case "second":
            return 86400 * e + i / 1e3;
        case "millisecond":
            return Math.floor(864e5 * e) + i;
        default:
            throw new Error("Unknown unit " + t)
        }
    }
    function ri() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12)
    }
    function oi(t) {
        return function() {
            return this.as(t)
        }
    }
    function si(t) {
        return t = R(t),
        this[t + "s"]()
    }
    function ai(t) {
        return function() {
            return this._data[t]
        }
    }
    function li() {
        return b(this.days() / 7)
    }
    function ui(t, e, n, i, r) {
        return r.relativeTime(e || 1, !!n, t, i)
    }
    function ci(t, e, n) {
        var i = Fe(t).abs()
          , r = mo(i.as("s"))
          , o = mo(i.as("m"))
          , s = mo(i.as("h"))
          , a = mo(i.as("d"))
          , l = mo(i.as("M"))
          , u = mo(i.as("y"))
          , c = r < go.s && ["s", r] || o <= 1 && ["m"] || o < go.m && ["mm", o] || s <= 1 && ["h"] || s < go.h && ["hh", s] || a <= 1 && ["d"] || a < go.d && ["dd", a] || l <= 1 && ["M"] || l < go.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u];
        return c[2] = e,
        c[3] = +t > 0,
        c[4] = n,
        ui.apply(null, c)
    }
    function di(t) {
        return void 0 === t ? mo : "function" == typeof t && (mo = t,
        !0)
    }
    function fi(t, e) {
        return void 0 !== go[t] && (void 0 === e ? go[t] : (go[t] = e,
        !0))
    }
    function hi(t) {
        var e = this.localeData()
          , n = ci(this, !t, e);
        return t && (n = e.pastFuture(+this, n)),
        e.postformat(n)
    }
    function pi() {
        var t, e, n, i = vo(this._milliseconds) / 1e3, r = vo(this._days), o = vo(this._months);
        t = b(i / 60),
        e = b(t / 60),
        i %= 60,
        t %= 60,
        n = b(o / 12),
        o %= 12;
        var s = n
          , a = o
          , l = r
          , u = e
          , c = t
          , d = i
          , f = this.asSeconds();
        return f ? (f < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (a ? a + "M" : "") + (l ? l + "D" : "") + (u || c || d ? "T" : "") + (u ? u + "H" : "") + (c ? c + "M" : "") + (d ? d + "S" : "") : "P0D"
    }
    var mi, gi;
    gi = Array.prototype.some ? Array.prototype.some : function(t) {
        for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++)
            if (i in e && t.call(this, e[i], i, e))
                return !0;
        return !1
    }
    ;
    var vi = gi
      , yi = t.momentProperties = []
      , bi = !1
      , wi = {};
    t.suppressDeprecationWarnings = !1,
    t.deprecationHandler = null;
    var xi;
    xi = Object.keys ? Object.keys : function(t) {
        var e, n = [];
        for (e in t)
            l(t, e) && n.push(e);
        return n
    }
    ;
    var _i, Ti = xi, Si = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    }, ki = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    }, Ci = "Invalid date", Di = "%d", Ei = /\d{1,2}/, Oi = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }, Mi = {}, Ni = {}, $i = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ai = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, ji = {}, Pi = {}, Ri = /\d/, Ii = /\d\d/, Yi = /\d{3}/, Li = /\d{4}/, Fi = /[+-]?\d{6}/, Hi = /\d\d?/, Wi = /\d\d\d\d?/, qi = /\d\d\d\d\d\d?/, Ui = /\d{1,3}/, Gi = /\d{1,4}/, Bi = /[+-]?\d{1,6}/, Vi = /\d+/, zi = /[+-]?\d+/, Qi = /Z|[+-]\d\d:?\d\d/gi, Xi = /Z|[+-]\d\d(?::?\d\d)?/gi, Zi = /[+-]?\d+(\.\d{1,3})?/, Ji = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Ki = {}, tr = {}, er = 0, nr = 1, ir = 2, rr = 3, or = 4, sr = 5, ar = 6, lr = 7, ur = 8;
    _i = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
        var e;
        for (e = 0; e < this.length; ++e)
            if (this[e] === t)
                return e;
        return -1
    }
    ;
    var cr = _i;
    B("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }),
    B("MMM", 0, 0, function(t) {
        return this.localeData().monthsShort(this, t)
    }),
    B("MMMM", 0, 0, function(t) {
        return this.localeData().months(this, t)
    }),
    P("month", "M"),
    Y("month", 8),
    Z("M", Hi),
    Z("MM", Hi, Ii),
    Z("MMM", function(t, e) {
        return e.monthsShortRegex(t)
    }),
    Z("MMMM", function(t, e) {
        return e.monthsRegex(t)
    }),
    et(["M", "MM"], function(t, e) {
        e[nr] = w(t) - 1
    }),
    et(["MMM", "MMMM"], function(t, e, n, i) {
        var r = n._locale.monthsParse(t, i, n._strict);
        null != r ? e[nr] = r : f(n).invalidMonth = t
    });
    var dr = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
      , fr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
      , hr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
      , pr = Ji
      , mr = Ji;
    B("Y", 0, 0, function() {
        var t = this.year();
        return t <= 9999 ? "" + t : "+" + t
    }),
    B(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }),
    B(0, ["YYYY", 4], 0, "year"),
    B(0, ["YYYYY", 5], 0, "year"),
    B(0, ["YYYYYY", 6, !0], 0, "year"),
    P("year", "y"),
    Y("year", 1),
    Z("Y", zi),
    Z("YY", Hi, Ii),
    Z("YYYY", Gi, Li),
    Z("YYYYY", Bi, Fi),
    Z("YYYYYY", Bi, Fi),
    et(["YYYYY", "YYYYYY"], er),
    et("YYYY", function(e, n) {
        n[er] = 2 === e.length ? t.parseTwoDigitYear(e) : w(e)
    }),
    et("YY", function(e, n) {
        n[er] = t.parseTwoDigitYear(e)
    }),
    et("Y", function(t, e) {
        e[er] = parseInt(t, 10)
    }),
    t.parseTwoDigitYear = function(t) {
        return w(t) + (w(t) > 68 ? 1900 : 2e3)
    }
    ;
    var gr = F("FullYear", !0);
    B("w", ["ww", 2], "wo", "week"),
    B("W", ["WW", 2], "Wo", "isoWeek"),
    P("week", "w"),
    P("isoWeek", "W"),
    Y("week", 5),
    Y("isoWeek", 5),
    Z("w", Hi),
    Z("ww", Hi, Ii),
    Z("W", Hi),
    Z("WW", Hi, Ii),
    nt(["w", "ww", "W", "WW"], function(t, e, n, i) {
        e[i.substr(0, 1)] = w(t)
    });
    var vr = {
        dow: 0,
        doy: 6
    };
    B("d", 0, "do", "day"),
    B("dd", 0, 0, function(t) {
        return this.localeData().weekdaysMin(this, t)
    }),
    B("ddd", 0, 0, function(t) {
        return this.localeData().weekdaysShort(this, t)
    }),
    B("dddd", 0, 0, function(t) {
        return this.localeData().weekdays(this, t)
    }),
    B("e", 0, 0, "weekday"),
    B("E", 0, 0, "isoWeekday"),
    P("day", "d"),
    P("weekday", "e"),
    P("isoWeekday", "E"),
    Y("day", 11),
    Y("weekday", 11),
    Y("isoWeekday", 11),
    Z("d", Hi),
    Z("e", Hi),
    Z("E", Hi),
    Z("dd", function(t, e) {
        return e.weekdaysMinRegex(t)
    }),
    Z("ddd", function(t, e) {
        return e.weekdaysShortRegex(t)
    }),
    Z("dddd", function(t, e) {
        return e.weekdaysRegex(t)
    }),
    nt(["dd", "ddd", "dddd"], function(t, e, n, i) {
        var r = n._locale.weekdaysParse(t, i, n._strict);
        null != r ? e.d = r : f(n).invalidWeekday = t
    }),
    nt(["d", "e", "E"], function(t, e, n, i) {
        e[i] = w(t)
    });
    var yr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
      , br = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
      , wr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
      , xr = Ji
      , _r = Ji
      , Tr = Ji;
    B("H", ["HH", 2], 0, "hour"),
    B("h", ["hh", 2], 0, qt),
    B("k", ["kk", 2], 0, Ut),
    B("hmm", 0, 0, function() {
        return "" + qt.apply(this) + G(this.minutes(), 2)
    }),
    B("hmmss", 0, 0, function() {
        return "" + qt.apply(this) + G(this.minutes(), 2) + G(this.seconds(), 2)
    }),
    B("Hmm", 0, 0, function() {
        return "" + this.hours() + G(this.minutes(), 2)
    }),
    B("Hmmss", 0, 0, function() {
        return "" + this.hours() + G(this.minutes(), 2) + G(this.seconds(), 2)
    }),
    Gt("a", !0),
    Gt("A", !1),
    P("hour", "h"),
    Y("hour", 13),
    Z("a", Bt),
    Z("A", Bt),
    Z("H", Hi),
    Z("h", Hi),
    Z("HH", Hi, Ii),
    Z("hh", Hi, Ii),
    Z("hmm", Wi),
    Z("hmmss", qi),
    Z("Hmm", Wi),
    Z("Hmmss", qi),
    et(["H", "HH"], rr),
    et(["a", "A"], function(t, e, n) {
        n._isPm = n._locale.isPM(t),
        n._meridiem = t
    }),
    et(["h", "hh"], function(t, e, n) {
        e[rr] = w(t),
        f(n).bigHour = !0
    }),
    et("hmm", function(t, e, n) {
        var i = t.length - 2;
        e[rr] = w(t.substr(0, i)),
        e[or] = w(t.substr(i)),
        f(n).bigHour = !0
    }),
    et("hmmss", function(t, e, n) {
        var i = t.length - 4
          , r = t.length - 2;
        e[rr] = w(t.substr(0, i)),
        e[or] = w(t.substr(i, 2)),
        e[sr] = w(t.substr(r)),
        f(n).bigHour = !0
    }),
    et("Hmm", function(t, e, n) {
        var i = t.length - 2;
        e[rr] = w(t.substr(0, i)),
        e[or] = w(t.substr(i))
    }),
    et("Hmmss", function(t, e, n) {
        var i = t.length - 4
          , r = t.length - 2;
        e[rr] = w(t.substr(0, i)),
        e[or] = w(t.substr(i, 2)),
        e[sr] = w(t.substr(r))
    });
    var Sr, kr = /[ap]\.?m?\.?/i, Cr = F("Hours", !0), Dr = {
        calendar: Si,
        longDateFormat: ki,
        invalidDate: Ci,
        ordinal: Di,
        ordinalParse: Ei,
        relativeTime: Oi,
        months: fr,
        monthsShort: hr,
        week: vr,
        weekdays: yr,
        weekdaysMin: wr,
        weekdaysShort: br,
        meridiemParse: kr
    }, Er = {}, Or = {}, Mr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Nr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, $r = /Z|[+-]\d\d(?::?\d\d)?/, Ar = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], jr = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], Pr = /^\/?Date\((\-?\d+)/i;
    t.createFromInputFallback = T("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }),
    t.ISO_8601 = function() {}
    ;
    var Rr = T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var t = ye.apply(null, arguments);
        return this.isValid() && t.isValid() ? t < this ? this : t : p()
    })
      , Ir = T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var t = ye.apply(null, arguments);
        return this.isValid() && t.isValid() ? t > this ? this : t : p()
    })
      , Yr = function() {
        return Date.now ? Date.now() : +new Date
    };
    ke("Z", ":"),
    ke("ZZ", ""),
    Z("Z", Xi),
    Z("ZZ", Xi),
    et(["Z", "ZZ"], function(t, e, n) {
        n._useUTC = !0,
        n._tzm = Ce(Xi, t)
    });
    var Lr = /([\+\-]|\d\d)/gi;
    t.updateOffset = function() {}
    ;
    var Fr = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/
      , Hr = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    Fe.fn = _e.prototype;
    var Wr = Ue(1, "add")
      , qr = Ue(-1, "subtract");
    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
    t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Ur = T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
        return void 0 === t ? this.localeData() : this.locale(t)
    });
    B(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }),
    B(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }),
    Cn("gggg", "weekYear"),
    Cn("ggggg", "weekYear"),
    Cn("GGGG", "isoWeekYear"),
    Cn("GGGGG", "isoWeekYear"),
    P("weekYear", "gg"),
    P("isoWeekYear", "GG"),
    Y("weekYear", 1),
    Y("isoWeekYear", 1),
    Z("G", zi),
    Z("g", zi),
    Z("GG", Hi, Ii),
    Z("gg", Hi, Ii),
    Z("GGGG", Gi, Li),
    Z("gggg", Gi, Li),
    Z("GGGGG", Bi, Fi),
    Z("ggggg", Bi, Fi),
    nt(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, i) {
        e[i.substr(0, 2)] = w(t)
    }),
    nt(["gg", "GG"], function(e, n, i, r) {
        n[r] = t.parseTwoDigitYear(e)
    }),
    B("Q", 0, "Qo", "quarter"),
    P("quarter", "Q"),
    Y("quarter", 7),
    Z("Q", Ri),
    et("Q", function(t, e) {
        e[nr] = 3 * (w(t) - 1)
    }),
    B("D", ["DD", 2], "Do", "date"),
    P("date", "D"),
    Y("date", 9),
    Z("D", Hi),
    Z("DD", Hi, Ii),
    Z("Do", function(t, e) {
        return t ? e._ordinalParse : e._ordinalParseLenient
    }),
    et(["D", "DD"], ir),
    et("Do", function(t, e) {
        e[ir] = w(t.match(Hi)[0], 10)
    });
    var Gr = F("Date", !0);
    B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    P("dayOfYear", "DDD"),
    Y("dayOfYear", 4),
    Z("DDD", Ui),
    Z("DDDD", Yi),
    et(["DDD", "DDDD"], function(t, e, n) {
        n._dayOfYear = w(t)
    }),
    B("m", ["mm", 2], 0, "minute"),
    P("minute", "m"),
    Y("minute", 14),
    Z("m", Hi),
    Z("mm", Hi, Ii),
    et(["m", "mm"], or);
    var Br = F("Minutes", !1);
    B("s", ["ss", 2], 0, "second"),
    P("second", "s"),
    Y("second", 15),
    Z("s", Hi),
    Z("ss", Hi, Ii),
    et(["s", "ss"], sr);
    var Vr = F("Seconds", !1);
    B("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }),
    B(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }),
    B(0, ["SSS", 3], 0, "millisecond"),
    B(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }),
    B(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }),
    B(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }),
    B(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }),
    B(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }),
    B(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }),
    P("millisecond", "ms"),
    Y("millisecond", 16),
    Z("S", Ui, Ri),
    Z("SS", Ui, Ii),
    Z("SSS", Ui, Yi);
    var zr;
    for (zr = "SSSS"; zr.length <= 9; zr += "S")
        Z(zr, Vi);
    for (zr = "S"; zr.length <= 9; zr += "S")
        et(zr, Pn);
    var Qr = F("Milliseconds", !1);
    B("z", 0, 0, "zoneAbbr"),
    B("zz", 0, 0, "zoneName");
    var Xr = v.prototype;
    Xr.add = Wr,
    Xr.calendar = Ve,
    Xr.clone = ze,
    Xr.diff = en,
    Xr.endOf = mn,
    Xr.format = an,
    Xr.from = ln,
    Xr.fromNow = un,
    Xr.to = cn,
    Xr.toNow = dn,
    Xr.get = q,
    Xr.invalidAt = Sn,
    Xr.isAfter = Qe,
    Xr.isBefore = Xe,
    Xr.isBetween = Ze,
    Xr.isSame = Je,
    Xr.isSameOrAfter = Ke,
    Xr.isSameOrBefore = tn,
    Xr.isValid = _n,
    Xr.lang = Ur,
    Xr.locale = fn,
    Xr.localeData = hn,
    Xr.max = Ir,
    Xr.min = Rr,
    Xr.parsingFlags = Tn,
    Xr.set = U,
    Xr.startOf = pn,
    Xr.subtract = qr,
    Xr.toArray = bn,
    Xr.toObject = wn,
    Xr.toDate = yn,
    Xr.toISOString = on,
    Xr.inspect = sn,
    Xr.toJSON = xn,
    Xr.toString = rn,
    Xr.unix = vn,
    Xr.valueOf = gn,
    Xr.creationData = kn,
    Xr.year = gr,
    Xr.isLeapYear = vt,
    Xr.weekYear = Dn,
    Xr.isoWeekYear = En,
    Xr.quarter = Xr.quarters = An,
    Xr.month = ct,
    Xr.daysInMonth = dt,
    Xr.week = Xr.weeks = Dt,
    Xr.isoWeek = Xr.isoWeeks = Et,
    Xr.weeksInYear = Mn,
    Xr.isoWeeksInYear = On,
    Xr.date = Gr,
    Xr.day = Xr.days = Rt,
    Xr.weekday = It,
    Xr.isoWeekday = Yt,
    Xr.dayOfYear = jn,
    Xr.hour = Xr.hours = Cr,
    Xr.minute = Xr.minutes = Br,
    Xr.second = Xr.seconds = Vr,
    Xr.millisecond = Xr.milliseconds = Qr,
    Xr.utcOffset = Oe,
    Xr.utc = Ne,
    Xr.local = $e,
    Xr.parseZone = Ae,
    Xr.hasAlignedHourOffset = je,
    Xr.isDST = Pe,
    Xr.isLocal = Ie,
    Xr.isUtcOffset = Ye,
    Xr.isUtc = Le,
    Xr.isUTC = Le,
    Xr.zoneAbbr = Rn,
    Xr.zoneName = In,
    Xr.dates = T("dates accessor is deprecated. Use date instead.", Gr),
    Xr.months = T("months accessor is deprecated. Use month instead", ct),
    Xr.years = T("years accessor is deprecated. Use year instead", gr),
    Xr.zone = T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Me),
    Xr.isDSTShifted = T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Re);
    var Zr = E.prototype;
    Zr.calendar = O,
    Zr.longDateFormat = M,
    Zr.invalidDate = N,
    Zr.ordinal = $,
    Zr.preparse = Fn,
    Zr.postformat = Fn,
    Zr.relativeTime = A,
    Zr.pastFuture = j,
    Zr.set = C,
    Zr.months = ot,
    Zr.monthsShort = st,
    Zr.monthsParse = lt,
    Zr.monthsRegex = ht,
    Zr.monthsShortRegex = ft,
    Zr.week = St,
    Zr.firstDayOfYear = Ct,
    Zr.firstDayOfWeek = kt,
    Zr.weekdays = Nt,
    Zr.weekdaysMin = At,
    Zr.weekdaysShort = $t,
    Zr.weekdaysParse = Pt,
    Zr.weekdaysRegex = Lt,
    Zr.weekdaysShortRegex = Ft,
    Zr.weekdaysMinRegex = Ht,
    Zr.isPM = Vt,
    Zr.meridiem = zt,
    Jt("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(t) {
            var e = t % 10
              , n = 1 === w(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
            return t + n
        }
    }),
    t.lang = T("moment.lang is deprecated. Use moment.locale instead.", Jt),
    t.langData = T("moment.langData is deprecated. Use moment.localeData instead.", ee);
    var Jr = Math.abs
      , Kr = oi("ms")
      , to = oi("s")
      , eo = oi("m")
      , no = oi("h")
      , io = oi("d")
      , ro = oi("w")
      , oo = oi("M")
      , so = oi("y")
      , ao = ai("milliseconds")
      , lo = ai("seconds")
      , uo = ai("minutes")
      , co = ai("hours")
      , fo = ai("days")
      , ho = ai("months")
      , po = ai("years")
      , mo = Math.round
      , go = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }
      , vo = Math.abs
      , yo = _e.prototype;
    return yo.abs = Qn,
    yo.add = Zn,
    yo.subtract = Jn,
    yo.as = ii,
    yo.asMilliseconds = Kr,
    yo.asSeconds = to,
    yo.asMinutes = eo,
    yo.asHours = no,
    yo.asDays = io,
    yo.asWeeks = ro,
    yo.asMonths = oo,
    yo.asYears = so,
    yo.valueOf = ri,
    yo._bubble = ti,
    yo.get = si,
    yo.milliseconds = ao,
    yo.seconds = lo,
    yo.minutes = uo,
    yo.hours = co,
    yo.days = fo,
    yo.weeks = li,
    yo.months = ho,
    yo.years = po,
    yo.humanize = hi,
    yo.toISOString = pi,
    yo.toString = pi,
    yo.toJSON = pi,
    yo.locale = fn,
    yo.localeData = hn,
    yo.toIsoString = T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", pi),
    yo.lang = Ur,
    B("X", 0, 0, "unix"),
    B("x", 0, 0, "valueOf"),
    Z("x", zi),
    Z("X", Zi),
    et("X", function(t, e, n) {
        n._d = new Date(1e3 * parseFloat(t, 10))
    }),
    et("x", function(t, e, n) {
        n._d = new Date(w(t))
    }),
    t.version = "2.16.0",
    e(ye),
    t.fn = Xr,
    t.min = we,
    t.max = xe,
    t.now = Yr,
    t.utc = c,
    t.unix = Yn,
    t.months = Un,
    t.isDate = s,
    t.locale = Jt,
    t.invalid = p,
    t.duration = Fe,
    t.isMoment = y,
    t.weekdays = Bn,
    t.parseZone = Ln,
    t.localeData = ee,
    t.isDuration = Te,
    t.monthsShort = Gn,
    t.weekdaysMin = zn,
    t.defineLocale = Kt,
    t.updateLocale = te,
    t.locales = ne,
    t.weekdaysShort = Vn,
    t.normalizeUnits = R,
    t.relativeTimeRounding = di,
    t.relativeTimeThreshold = fi,
    t.calendarFormat = Be,
    t.prototype = Xr,
    t
}),
!function(t, e) {
    if ("function" == typeof define && define.amd)
        define(["jquery"], e);
    else if ("undefined" != typeof exports)
        e(require("jquery"));
    else {
        var n = {
            exports: {}
        };
        e(t.jquery),
        t.metisMenu = n.exports
    }
}(this, function(t) {
    "use strict";
    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var i = (e(t),
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    }
    )
      , r = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, n, i) {
            return n && t(e.prototype, n),
            i && t(e, i),
            e
        }
    }();
    !function(t) {
        function e() {
            return {
                bindType: g.end,
                delegateType: g.end,
                handle: function(e) {
                    return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
                }
            }
        }
        function o() {
            if (window.QUnit)
                return !1;
            var t = document.createElement("mm");
            for (var e in v)
                if (void 0 !== t.style[e])
                    return {
                        end: v[e]
                    };
            return !1
        }
        function s(e) {
            var n = this
              , i = !1;
            t(this).one(y.TRANSITION_END, function() {
                i = !0
            }),
            setTimeout(function() {
                i || y.triggerTransitionEnd(n)
            }, e)
        }
        function a() {
            g = o(),
            y.supportsTransitionEnd() && (t.event.special[y.TRANSITION_END] = e())
        }
        var l = "metisMenu"
          , u = "metisMenu"
          , c = "." + u
          , d = ".data-api"
          , f = t.fn[l]
          , h = 350
          , p = {
            toggle: !0,
            doubleTapToGo: !1,
            preventDefault: !0,
            activeClass: "active",
            collapseClass: "collapse",
            collapseInClass: "in",
            collapsingClass: "collapsing"
        }
          , m = {
            SHOW: "show" + c,
            SHOWN: "shown" + c,
            HIDE: "hide" + c,
            HIDDEN: "hidden" + c,
            CLICK_DATA_API: "click" + c + d
        }
          , g = !1
          , v = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }
          , y = {
            TRANSITION_END: "mmTransitionEnd",
            triggerTransitionEnd: function(e) {
                t(e).trigger(g.end)
            },
            supportsTransitionEnd: function() {
                return Boolean(g)
            }
        };
        a();
        var b = function() {
            function e(t, i) {
                n(this, e),
                this._element = t,
                this._config = this._getConfig(i),
                this._transitioning = null,
                this.init()
            }
            return r(e, [{
                key: "init",
                value: function() {
                    var e = this;
                    t(this._element).find("li." + this._config.activeClass).has("ul").children("ul").attr("aria-expanded", !0).addClass(this._config.collapseClass + " " + this._config.collapseInClass),
                    t(this._element).find("li").not("." + this._config.activeClass).has("ul").children("ul").attr("aria-expanded", !1).addClass(this._config.collapseClass),
                    this._config.doubleTapToGo && t(this._element).find("li." + this._config.activeClass).has("ul").children("a").addClass("doubleTapToGo"),
                    t(this._element).find("li").has("ul").children("a").on(m.CLICK_DATA_API, function(n) {
                        var i = t(this)
                          , r = i.parent("li")
                          , o = r.children("ul");
                        return e._config.preventDefault && n.preventDefault(),
                        "true" !== i.attr("aria-disabled") ? (r.hasClass(e._config.activeClass) && !e._config.doubleTapToGo ? (i.attr("aria-expanded", !1),
                        e._hide(o)) : (e._show(o),
                        i.attr("aria-expanded", !0)),
                        e._config.onTransitionStart && e._config.onTransitionStart(n),
                        e._config.doubleTapToGo && e._doubleTapToGo(i) && "#" !== i.attr("href") && "" !== i.attr("href") ? (n.stopPropagation(),
                        void (document.location = i.attr("href"))) : void 0) : void 0
                    })
                }
            }, {
                key: "_show",
                value: function(e) {
                    if (!this._transitioning && !t(e).hasClass(this._config.collapsingClass)) {
                        var n = this
                          , i = t(e)
                          , r = t.Event(m.SHOW);
                        if (i.trigger(r),
                        !r.isDefaultPrevented()) {
                            i.parent("li").addClass(this._config.activeClass),
                            this._config.toggle && this._hide(i.parent("li").siblings().children("ul." + this._config.collapseInClass).attr("aria-expanded", !1)),
                            i.removeClass(this._config.collapseClass).addClass(this._config.collapsingClass).height(0),
                            this.setTransitioning(!0);
                            var o = function() {
                                i.removeClass(n._config.collapsingClass).addClass(n._config.collapseClass + " " + n._config.collapseInClass).height("").attr("aria-expanded", !0),
                                n.setTransitioning(!1),
                                i.trigger(m.SHOWN)
                            };
                            if (!y.supportsTransitionEnd())
                                return void o();
                            i.height(i[0].scrollHeight).one(y.TRANSITION_END, o),
                            s(h)
                        }
                    }
                }
            }, {
                key: "_hide",
                value: function(e) {
                    if (!this._transitioning && t(e).hasClass(this._config.collapseInClass)) {
                        var n = this
                          , i = t(e)
                          , r = t.Event(m.HIDE);
                        if (i.trigger(r),
                        !r.isDefaultPrevented()) {
                            i.parent("li").removeClass(this._config.activeClass),
                            i.height(i.height())[0].offsetHeight,
                            i.addClass(this._config.collapsingClass).removeClass(this._config.collapseClass).removeClass(this._config.collapseInClass),
                            this.setTransitioning(!0);
                            var o = function() {
                                n._transitioning && n._config.onTransitionEnd && n._config.onTransitionEnd(),
                                n.setTransitioning(!1),
                                i.trigger(m.HIDDEN),
                                i.removeClass(n._config.collapsingClass).addClass(n._config.collapseClass).attr("aria-expanded", !1)
                            };
                            if (!y.supportsTransitionEnd())
                                return void o();
                            0 == i.height() || "none" == i.css("display") ? o() : i.height(0).one(y.TRANSITION_END, o),
                            s(h)
                        }
                    }
                }
            }, {
                key: "_doubleTapToGo",
                value: function(e) {
                    return e.hasClass("doubleTapToGo") ? (e.removeClass("doubleTapToGo"),
                    !0) : e.parent().children("ul").length ? (t(this._element).find(".doubleTapToGo").removeClass("doubleTapToGo"),
                    e.addClass("doubleTapToGo"),
                    !1) : void 0
                }
            }, {
                key: "setTransitioning",
                value: function(t) {
                    this._transitioning = t
                }
            }, {
                key: "_getConfig",
                value: function(e) {
                    return e = t.extend({}, p, e)
                }
            }], [{
                key: "_jQueryInterface",
                value: function(n) {
                    return this.each(function() {
                        var r = t(this)
                          , o = r.data(u)
                          , s = t.extend({}, p, r.data(), "object" === ("undefined" == typeof n ? "undefined" : i(n)) && n);
                        if (o || (o = new e(this,s),
                        r.data(u, o)),
                        "string" == typeof n) {
                            if (void 0 === o[n])
                                throw new Error('No method named "' + n + '"');
                            o[n]()
                        }
                    })
                }
            }]),
            e
        }();
        return t.fn[l] = b._jQueryInterface,
        t.fn[l].Constructor = b,
        t.fn[l].noConflict = function() {
            return t.fn[l] = f,
            b._jQueryInterface
        }
        ,
        b
    }(jQuery)
}),
!function(t) {
    "use strict";
    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }
    function n(e) {
        return this.each(function() {
            var n = t(this)
              , r = n.data("canvas")
              , o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !r && o.toggle && /show|hide/.test(e) && (o.toggle = !1),
            r || n.data("canvas", r = new i(this,o)),
            "string" == typeof e && r[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e),
        this.options = t.extend({}, i.DEFAULTS, n),
        this.$trigger = t('[data-toggle="canvas"][href="#' + e.id + '"],[data-toggle="canvas"][data-target="#' + e.id + '"]'),
        this.options.parent ? this.$parent = this.getParent() : this.addAriaCollapsedClass(this.$element, this.$trigger)
    };
    i.DEFAULTS = {
        toggle: !0,
        openClass: "is-open"
    },
    i.prototype.show = function() {
        var t = this.options.openClass;
        this.$element.addClass(t).attr("aria-expanded", !0),
        this.$trigger.attr("aria-expanded", !0)
    }
    ,
    i.prototype.hide = function() {
        var t = this.options.openClass;
        this.$element.removeClass(t).attr("aria-expanded", !1),
        this.$trigger.attr("aria-expanded", !1)
    }
    ,
    i.prototype.toggle = function() {
        var t = this.options.openClass;
        this[this.$element.hasClass(t) ? "hide" : "show"]()
    }
    ,
    i.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="canvas"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var r = t(i);
            this.addAriaAndCollapsedClass(e(r), r)
        }, this)).end()
    }
    ,
    i.prototype.addAriaCollapsedClass = function(t, e) {
        var n = this.options.openClass
          , i = t.hasClass(n);
        e.attr("aria-expanded", i),
        t.toggleClass(n, !i).attr("aria-expanded", i)
    }
    ;
    var r = t.fn.canvas;
    t.fn.canvas = n,
    t.fn.canvas.Constructor = i,
    t.fn.canvas.noConflict = function() {
        return t.fn.canvas = r,
        this
    }
    ,
    t(document).on("click.canvas.data-api", '[data-toggle="canvas"]', function(i) {
        var r = t(this);
        r.attr("data-target") || i.preventDefault();
        var o = e(r)
          , s = o.data("canvas")
          , a = s ? "toggle" : r.data();
        n.call(o, a)
    })
}(jQuery),
!function() {
    "use strict";
    var t = "undefined" != typeof module && module.exports
      , e = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT"in Element
      , n = function() {
        for (var t, e, n = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], i = 0, r = n.length, o = {}; r > i; i++)
            if (t = n[i],
            t && t[1]in document) {
                for (i = 0,
                e = t.length; e > i; i++)
                    o[n[0][i]] = t[i];
                return o
            }
        return !1
    }()
      , i = {
        request: function(t) {
            var i = n.requestFullscreen;
            t = t || document.documentElement,
            /5\.1[\.\d]* Safari/.test(navigator.userAgent) ? t[i]() : t[i](e && Element.ALLOW_KEYBOARD_INPUT)
        },
        exit: function() {
            document[n.exitFullscreen]()
        },
        toggle: function(t) {
            this.isFullscreen ? this.exit() : this.request(t)
        },
        raw: n
    };
    return n ? (Object.defineProperties(i, {
        isFullscreen: {
            get: function() {
                return Boolean(document[n.fullscreenElement])
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return document[n.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return Boolean(document[n.fullscreenEnabled])
            }
        }
    }),
    void (t ? module.exports = i : window.screenfull = i)) : void (t ? module.exports = !1 : window.screenfull = !1)
}(),
function(t) {
    var e = {
        "ball-pulse": 3,
        "ball-grid-pulse": 9,
        "ball-clip-rotate": 1,
        "ball-clip-rotate-pulse": 2,
        "square-spin": 1,
        "ball-clip-rotate-multiple": 2,
        "ball-pulse-rise": 5,
        "ball-rotate": 1,
        "cube-transition": 2,
        "ball-zig-zag": 2,
        "ball-zig-zag-deflect": 2,
        "ball-triangle-path": 3,
        "ball-scale": 1,
        "line-scale": 5,
        "line-scale-party": 4,
        "ball-scale-multiple": 3,
        "ball-pulse-sync": 3,
        "ball-beat": 3,
        "line-scale-pulse-out": 5,
        "line-scale-pulse-out-rapid": 5,
        "ball-scale-ripple": 1,
        "ball-scale-ripple-multiple": 3,
        "ball-spin-fade-loader": 8,
        "line-spin-fade-loader": 8,
        "triangle-skew-spin": 1,
        pacman: 5,
        "ball-grid-beat": 9,
        "semi-circle-spin": 1,
        "ball-scale-random": 3
    }
      , n = function(t) {
        var e = [];
        for (i = 1; i <= t; i++)
            e.push("<div></div>");
        return e
    };
    t.fn.loaders = function() {
        return this.each(function() {
            var i = t(this);
            t.each(e, function(t, e) {
                i.hasClass(t) && i.html(n(e))
            })
        })
    }
    ,
    t(function() {
        t.each(e, function(e, i) {
            t(".loader-inner." + e).html(n(i))
        })
    })
}
.call(window, window.$ || window.jQuery || window.Zepto),
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.inView = e() : t.inView = e()
}(this, function() {
    return function(t) {
        function e(i) {
            if (n[i])
                return n[i].exports;
            var r = n[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return t[i].call(r.exports, r, r.exports, e),
            r.loaded = !0,
            r.exports
        }
        var n = {};
        return e.m = t,
        e.c = n,
        e.p = "",
        e(0)
    }([function(t, e, n) {
        "use strict";
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var r = n(2)
          , o = i(r);
        t.exports = o.default
    }
    , function(t, e) {
        function n(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
        t.exports = n
    }
    , function(t, e, n) {
        "use strict";
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(9)
          , o = i(r)
          , s = n(3)
          , a = i(s)
          , l = n(4)
          , u = function() {
            if ("undefined" != typeof window) {
                var t = 100
                  , e = ["scroll", "resize", "load"]
                  , n = {
                    history: []
                }
                  , i = {
                    offset: {},
                    threshold: 0,
                    test: l.inViewport
                }
                  , r = (0,
                o.default)(function() {
                    n.history.forEach(function(t) {
                        n[t].check()
                    })
                }, t);
                e.forEach(function(t) {
                    return addEventListener(t, r)
                }),
                window.MutationObserver && new MutationObserver(r).observe(document.body, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0
                });
                var s = function(t) {
                    if ("string" == typeof t) {
                        var e = [].slice.call(document.querySelectorAll(t));
                        return n.history.indexOf(t) > -1 ? n[t].elements = e : (n[t] = (0,
                        a.default)(e, i),
                        n.history.push(t)),
                        n[t]
                    }
                };
                return s.offset = function(t) {
                    if (void 0 === t)
                        return i.offset;
                    var e = function(t) {
                        return "number" == typeof t
                    };
                    return ["top", "right", "bottom", "left"].forEach(e(t) ? function(e) {
                        return i.offset[e] = t
                    }
                    : function(n) {
                        return e(t[n]) ? i.offset[n] = t[n] : null
                    }
                    ),
                    i.offset
                }
                ,
                s.threshold = function(t) {
                    return "number" == typeof t && t >= 0 && t <= 1 ? i.threshold = t : i.threshold
                }
                ,
                s.test = function(t) {
                    return "function" == typeof t ? i.test = t : i.test
                }
                ,
                s.is = function(t) {
                    return i.test(t, i)
                }
                ,
                s.offset(0),
                s
            }
        };
        e.default = u()
    }
    , function(t, e) {
        "use strict";
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n),
                i && t(e, i),
                e
            }
        }()
          , r = function() {
            function t(e, i) {
                n(this, t),
                this.options = i,
                this.elements = e,
                this.current = [],
                this.handlers = {
                    enter: [],
                    exit: []
                },
                this.singles = {
                    enter: [],
                    exit: []
                }
            }
            return i(t, [{
                key: "check",
                value: function() {
                    var t = this;
                    return this.elements.forEach(function(e) {
                        var n = t.options.test(e, t.options)
                          , i = t.current.indexOf(e)
                          , r = i > -1
                          , o = n && !r
                          , s = !n && r;
                        o && (t.current.push(e),
                        t.emit("enter", e)),
                        s && (t.current.splice(i, 1),
                        t.emit("exit", e))
                    }),
                    this
                }
            }, {
                key: "on",
                value: function(t, e) {
                    return this.handlers[t].push(e),
                    this
                }
            }, {
                key: "once",
                value: function(t, e) {
                    return this.singles[t].unshift(e),
                    this
                }
            }, {
                key: "emit",
                value: function(t, e) {
                    for (; this.singles[t].length; )
                        this.singles[t].pop()(e);
                    for (var n = this.handlers[t].length; --n > -1; )
                        this.handlers[t][n](e);
                    return this
                }
            }]),
            t
        }();
        e.default = function(t, e) {
            return new r(t,e)
        }
    }
    , function(t, e) {
        "use strict";
        function n(t, e) {
            var n = t.getBoundingClientRect()
              , i = n.top
              , r = n.right
              , o = n.bottom
              , s = n.left
              , a = n.width
              , l = n.height
              , u = {
                t: o,
                r: window.innerWidth - s,
                b: window.innerHeight - i,
                l: r
            }
              , c = {
                x: e.threshold * a,
                y: e.threshold * l
            };
            return u.t > e.offset.top + c.y && u.r > e.offset.right + c.x && u.b > e.offset.bottom + c.y && u.l > e.offset.left + c.x
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.inViewport = n
    }
    , function(t, e) {
        (function(e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e, n) {
        var i = n(5)
          , r = "object" == typeof self && self && self.Object === Object && self
          , o = i || r || Function("return this")();
        t.exports = o
    }
    , function(t, e, n) {
        function i(t, e, n) {
            function i(e) {
                var n = y
                  , i = b;
                return y = b = void 0,
                S = e,
                x = t.apply(i, n)
            }
            function c(t) {
                return S = t,
                _ = setTimeout(h, e),
                k ? i(t) : x
            }
            function d(t) {
                var n = t - T
                  , i = t - S
                  , r = e - n;
                return C ? u(r, w - i) : r
            }
            function f(t) {
                var n = t - T
                  , i = t - S;
                return void 0 === T || n >= e || n < 0 || C && i >= w
            }
            function h() {
                var t = o();
                return f(t) ? p(t) : void (_ = setTimeout(h, d(t)))
            }
            function p(t) {
                return _ = void 0,
                D && y ? i(t) : (y = b = void 0,
                x)
            }
            function m() {
                void 0 !== _ && clearTimeout(_),
                S = 0,
                y = T = b = _ = void 0
            }
            function g() {
                return void 0 === _ ? x : p(o())
            }
            function v() {
                var t = o()
                  , n = f(t);
                if (y = arguments,
                b = this,
                T = t,
                n) {
                    if (void 0 === _)
                        return c(T);
                    if (C)
                        return _ = setTimeout(h, e),
                        i(T)
                }
                return void 0 === _ && (_ = setTimeout(h, e)),
                x
            }
            var y, b, w, x, _, T, S = 0, k = !1, C = !1, D = !0;
            if ("function" != typeof t)
                throw new TypeError(a);
            return e = s(e) || 0,
            r(n) && (k = !!n.leading,
            C = "maxWait"in n,
            w = C ? l(s(n.maxWait) || 0, e) : w,
            D = "trailing"in n ? !!n.trailing : D),
            v.cancel = m,
            v.flush = g,
            v
        }
        var r = n(1)
          , o = n(8)
          , s = n(10)
          , a = "Expected a function"
          , l = Math.max
          , u = Math.min;
        t.exports = i
    }
    , function(t, e, n) {
        var i = n(6)
          , r = function() {
            return i.Date.now()
        };
        t.exports = r
    }
    , function(t, e, n) {
        function i(t, e, n) {
            var i = !0
              , a = !0;
            if ("function" != typeof t)
                throw new TypeError(s);
            return o(n) && (i = "leading"in n ? !!n.leading : i,
            a = "trailing"in n ? !!n.trailing : a),
            r(t, e, {
                leading: i,
                maxWait: e,
                trailing: a
            })
        }
        var r = n(7)
          , o = n(1)
          , s = "Expected a function";
        t.exports = i
    }
    , function(t, e) {
        function n(t) {
            return t
        }
        t.exports = n
    }
    ])
});
